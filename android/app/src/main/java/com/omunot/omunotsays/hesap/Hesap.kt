package com.omunot.omunotsays.hesap

import java.math.BigDecimal
import java.math.RoundingMode

// Yıl sonu hesabı. omunot.com js/hesap.js'in birebir karşılığı; katsayılar Ayarlar'dan gelir.
// Varsayılan ayarlarla web ile aynı sonucu verdiği HesapTest'te web çıktısıyla denetlenir.

enum class Durum { FAZLA, GECTI, KALDI, GEREK, BARAJ }

/**
 * @property ortalama yıl sonu ortalaması (2 haneye yuvarlı)
 * @property sayi ekranda büyük gösterilen değer: ortalama ya da finalden gereken not
 */
data class Sonuc(val ortalama: Double, val sayi: Double, val durum: Durum)

/**
 * @param girdi      alan id → kutudaki metin; boş kutu 0 sayılır, "85,5" ve "85.5" kabul edilir
 * @param gelisimVar Gelişim sınavı hesaba katılıyor mu (kapalıysa Gelişim kutusu yok sayılır
 *                   ve not 100/(100 − gelişim payı) ile çarpılır)
 */
fun hesapla(sinif: Sinif, girdi: Map<String, String>, gelisimVar: Boolean, ayarlar: Ayarlar = Ayarlar()): Sonuc {
    fun not(id: String) = notOku(girdi[id])

    val agirliklar = ayarlar.agirliklar(sinif)
    var toplam = 0.0
    var agirlik = 0.0
    sinif.bloklar.forEachIndexed { i, blok ->
        toplam += agirliklar[i] * (blok.sabit ?: not(blok.id))
        agirlik += agirliklar[i]
    }
    val blokOrtalamasi = if (agirlik > 0) toplam / agirlik else 0.0

    val final = not(sinif.final)
    val gelisim = if (gelisimVar) not(sinif.gelisim) else 0.0
    var ham = (blokOrtalamasi * ayarlar.blokPayi +
        not(sinif.mdu) * ayarlar.mduPayi +
        not(sinif.pdo) * ayarlar.pdoPayi +
        gelisim * ayarlar.gelisimPayi +
        final * ayarlar.finalPayi) / 100
    if (!gelisimVar && ayarlar.gelisimPayi < 100) ham = ham * 100 / (100 - ayarlar.gelisimPayi)
    val sonuc = yuvarla(ham)

    val gecme = ayarlar.gecmeSiniri
    val baraj = ayarlar.finalSiniri

    // Final kutusu boş (ya da 0) ise "finalden kaç almalıyım" hesaplanır.
    if (final == 0.0 && ayarlar.finalPayi > 0) {
        val gereken = yuvarla((gecme - sonuc) * (100.0 / ayarlar.finalPayi))
        return when {
            gereken < -22 -> Sonuc(sonuc, sonuc, Durum.FAZLA)
            gereken <= baraj -> Sonuc(sonuc, baraj, Durum.GEREK)
            gereken <= 100 -> Sonuc(sonuc, gereken, Durum.GEREK)
            else -> Sonuc(sonuc, sonuc, Durum.KALDI)
        }
    }

    val durum = when {
        sonuc < gecme -> Durum.KALDI
        sonuc <= YIL_SONU_MAX -> if (final < baraj) Durum.BARAJ else Durum.GECTI
        else -> Durum.FAZLA
    }
    return Sonuc(sonuc, sonuc, durum)
}

/** Kutudaki metni sayıya çevirir. Boş ya da çözülemeyen metin 0 olur (web'deki Number('') gibi). */
fun notOku(metin: String?): Double =
    metin?.trim()?.replace(',', '.')?.takeIf { it.isNotEmpty() }?.toDoubleOrNull() ?: 0.0

/** Kutuya yazılabilecek metin mi: en çok 3 basamak, isteğe bağlı virgül/nokta ve 2 ondalık. */
fun gecerliYazim(metin: String): Boolean = Regex("""\d{0,3}([.,]\d{0,2})?""").matches(metin)

/** JS'teki Number.toFixed(2) ile aynı yuvarlama: double'ın tam değeri, eşitlikte sıfırdan uzağa. */
internal fun yuvarla(x: Double): Double = BigDecimal(x).setScale(2, RoundingMode.HALF_UP).toDouble()
