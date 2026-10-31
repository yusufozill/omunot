package com.omunot.omunotsays.veri

import android.content.Context
import androidx.core.content.edit
import com.omunot.omunotsays.hesap.Ayarlar
import com.omunot.omunotsays.hesap.Durum

/** Ekranda gösterilen son sonuç; uygulama yeniden açılınca aynen geri gelir. */
data class Gosterim(val sayi: Double, val durum: Durum, val mesaj: String)

/** Notlar, seçili sınıf, Gelişim anahtarı, ayarlar ve son sonuçlar cihazda saklanır. */
class Depo(context: Context) {
    private val tercihler = context.getSharedPreferences("omunot", Context.MODE_PRIVATE)

    fun notOku(id: String): String = tercihler.getString("not_$id", null).orEmpty()
    fun notYaz(id: String, deger: String) = tercihler.edit { putString("not_$id", deger) }

    var sinifNo: Int
        get() = tercihler.getInt("sinif", 0)
        set(deger) = tercihler.edit { putInt("sinif", deger) }

    var gelisimVar: Boolean
        get() = tercihler.getBoolean("gelisim", true)
        set(deger) = tercihler.edit { putBoolean("gelisim", deger) }

    var ayarlar: Ayarlar
        get() = Ayarlar.jsondan(tercihler.getString("ayarlar", null))
        set(deger) = tercihler.edit { putString("ayarlar", deger.json()) }

    fun sonucOku(sinifId: String): Gosterim? {
        val parcalar = tercihler.getString("sonuc_$sinifId", null)?.split('|', limit = 3) ?: return null
        if (parcalar.size != 3) return null
        val sayi = parcalar[0].toDoubleOrNull() ?: return null
        val durum = runCatching { Durum.valueOf(parcalar[1]) }.getOrNull() ?: return null
        return Gosterim(sayi, durum, parcalar[2])
    }

    fun sonucYaz(sinifId: String, gosterim: Gosterim?) = tercihler.edit {
        if (gosterim == null) remove("sonuc_$sinifId")
        else putString("sonuc_$sinifId", "${gosterim.sayi}|${gosterim.durum.name}|${gosterim.mesaj}")
    }
}
