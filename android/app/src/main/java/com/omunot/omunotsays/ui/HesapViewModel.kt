package com.omunot.omunotsays.ui

import android.app.Application
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateMapOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.omunot.omunotsays.hesap.Ayarlar
import com.omunot.omunotsays.hesap.Durum
import com.omunot.omunotsays.hesap.MESAJLAR
import com.omunot.omunotsays.hesap.SINIFLAR
import com.omunot.omunotsays.hesap.Sinif
import com.omunot.omunotsays.hesap.gecerliYazim
import com.omunot.omunotsays.hesap.gelisimUyarisi
import com.omunot.omunotsays.hesap.hesapla
import com.omunot.omunotsays.hesap.notOku
import com.omunot.omunotsays.veri.Depo
import com.omunot.omunotsays.veri.Gosterim
import com.omunot.omunotsays.veri.Sayac
import kotlinx.coroutines.channels.Channel
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.receiveAsFlow
import kotlinx.coroutines.flow.stateIn

/** Hesaplamadan sonra kutunun kenar rengi (web'deki data-durum). */
enum class AlanDurumu { BOS, FAZLA }

/** Ekranın altında kısa süre görünen mesaj; geriAl varsa "Geri al" düğmesi çıkar. */
class Bildirim(val metin: String, val geriAl: (() -> Unit)? = null)

class HesapViewModel(app: Application) : AndroidViewModel(app) {
    private val depo = Depo(app)
    private val sayac = Sayac()

    val sayacDegeri: StateFlow<Long?> =
        sayac.deger.stateIn(viewModelScope, SharingStarted.WhileSubscribed(5_000), null)

    val notlar = mutableStateMapOf<String, String>().apply {
        SINIFLAR.flatMap { it.girdiIdleri }.forEach { put(it, depo.notOku(it)) }
    }
    val sonuclar = mutableStateMapOf<String, Gosterim>().apply {
        SINIFLAR.forEach { s -> depo.sonucOku(s.id)?.let { put(s.id, it) } }
    }
    val alanDurumlari = mutableStateMapOf<String, AlanDurumu>()

    var sinifNo by mutableIntStateOf(depo.sinifNo.coerceIn(SINIFLAR.indices))
        private set
    var gelisimVar by mutableStateOf(depo.gelisimVar)
        private set
    var ayarlar by mutableStateOf(depo.ayarlar)
        private set

    /** Ayarlar sıfırlanınca ayar kutularının yazılı metni de yenilensin diye artar. */
    var sifirlamaSurumu by mutableIntStateOf(0)
        private set

    private val bildirimKanali = Channel<Bildirim>(Channel.BUFFERED)
    val bildirimler = bildirimKanali.receiveAsFlow()

    fun sinifSec(no: Int) {
        sinifNo = no
        depo.sinifNo = no
    }

    /** Geçersiz yazım (harf, 3'ten çok basamak, 2'den çok ondalık) kutuya girmez. */
    fun notGir(id: String, metin: String) {
        if (!gecerliYazim(metin)) return
        notlar[id] = metin
        depo.notYaz(id, metin)
        alanDurumlari.remove(id)
    }

    /** "HESAPLA" basışı: hesapla + ortak sayacı artır. */
    fun hesaplaVeSay(sinif: Sinif) {
        hesaplaSinif(sinif)
        sayac.arttir()
    }

    fun gelisimDegistir(acik: Boolean) {
        gelisimVar = acik
        depo.gelisimVar = acik
        if (!acik) SINIFLAR.forEach { alanDurumlari.remove(it.gelisim) }
        bildirimKanali.trySend(Bildirim(gelisimUyarisi(acik, ayarlar)))
        sonuclariYenile()
    }

    fun temizle(sinif: Sinif) {
        val eskiNotlar = sinif.girdiIdleri.associateWith { notlar[it].orEmpty() }
        val eskiSonuc = sonuclar[sinif.id]
        if (eskiNotlar.values.all { it.isEmpty() } && eskiSonuc == null) return

        sinif.girdiIdleri.forEach { notGir(it, "") }
        sonucKoy(sinif, null)
        bildirimKanali.trySend(Bildirim("${sinif.sekme} notları temizlendi") {
            eskiNotlar.forEach { (id, deger) -> notGir(id, deger) }
            sonucKoy(sinif, eskiSonuc)
        })
    }

    fun ayarlariDegistir(yeni: Ayarlar) {
        if (yeni == ayarlar) return
        ayarlar = yeni
        depo.ayarlar = yeni
        sonuclariYenile()
    }

    fun ayarlariSifirla() {
        ayarlariDegistir(Ayarlar())
        sifirlamaSurumu++
    }

    private fun hesaplaSinif(sinif: Sinif, mesajiKoru: Boolean = false) {
        val girdi = sinif.girdiIdleri.associateWith { notlar[it].orEmpty() }
        val sonuc = hesapla(sinif, girdi, gelisimVar, ayarlar)

        // Kutuları işaretle: 100'ü aşan sarı, boş/0 kırmızı. "Finalden kaç" istenirken boş Final işaretlenmez.
        for ((id, metin) in girdi) {
            val atla = (id == sinif.gelisim && !gelisimVar) || (id == sinif.final && sonuc.durum == Durum.GEREK)
            val n = notOku(metin)
            when {
                atla -> alanDurumlari.remove(id)
                n > 100 -> alanDurumlari[id] = AlanDurumu.FAZLA
                n <= 0 -> alanDurumlari[id] = AlanDurumu.BOS
                else -> alanDurumlari.remove(id)
            }
        }

        val onceki = sonuclar[sinif.id]
        val mesaj =
            if (mesajiKoru && onceki?.durum == sonuc.durum) onceki.mesaj
            else MESAJLAR.getValue(sonuc.durum).random()
        sonucKoy(sinif, Gosterim(sonuc.sayi, sonuc.durum, mesaj))
    }

    /** Ayar ya da Gelişim değişince ekranda sonucu olan sınıflar yeniden hesaplanır (sayaç artmaz). */
    private fun sonuclariYenile() {
        SINIFLAR.filter { it.id in sonuclar }.forEach { hesaplaSinif(it, mesajiKoru = true) }
    }

    private fun sonucKoy(sinif: Sinif, gosterim: Gosterim?) {
        if (gosterim == null) sonuclar.remove(sinif.id) else sonuclar[sinif.id] = gosterim
        depo.sonucYaz(sinif.id, gosterim)
    }
}
