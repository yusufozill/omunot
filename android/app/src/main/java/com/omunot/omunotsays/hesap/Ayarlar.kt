package com.omunot.omunotsays.hesap

import org.json.JSONArray
import org.json.JSONObject

/**
 * Kullanıcının değiştirebildiği hesap katsayıları. Varsayılanlar web ile aynı:
 * geçme 69,5, final barajı 59,5, bloklar %50, MDU %10, PDÖ %10, Gelişim %5, Final %25.
 */
data class Ayarlar(
    val gecmeNotu: Int = 70,
    val gecmeVirgul: Boolean = true,
    val finalBaraji: Int = 60,
    val finalVirgul: Boolean = true,
    val blokPayi: Int = 50,
    val mduPayi: Int = 10,
    val pdoPayi: Int = 10,
    val gelisimPayi: Int = 5,
    val finalPayi: Int = 25,
    /** sınıf id → blok ağırlıkları; olmayan sınıf için müfredattaki ağırlıklar kullanılır */
    val blokAgirliklari: Map<String, List<Int>> = emptyMap(),
) {
    val gecmeSiniri: Double get() = gecmeNotu - if (gecmeVirgul) 0.5 else 0.0
    val finalSiniri: Double get() = finalBaraji - if (finalVirgul) 0.5 else 0.0
    val payToplami: Int get() = blokPayi + mduPayi + pdoPayi + gelisimPayi + finalPayi

    fun agirliklar(sinif: Sinif): List<Int> =
        blokAgirliklari[sinif.id]?.takeIf { it.size == sinif.bloklar.size } ?: sinif.bloklar.map { it.agirlik }

    fun agirlikDegistir(sinif: Sinif, index: Int, deger: Int): Ayarlar =
        copy(blokAgirliklari = blokAgirliklari + (sinif.id to agirliklar(sinif).toMutableList().also { it[index] = deger }))

    fun json(): String = JSONObject().apply {
        put("gecmeNotu", gecmeNotu)
        put("gecmeVirgul", gecmeVirgul)
        put("finalBaraji", finalBaraji)
        put("finalVirgul", finalVirgul)
        put("blokPayi", blokPayi)
        put("mduPayi", mduPayi)
        put("pdoPayi", pdoPayi)
        put("gelisimPayi", gelisimPayi)
        put("finalPayi", finalPayi)
        put("blokAgirliklari", JSONObject().apply {
            blokAgirliklari.forEach { (id, liste) -> put(id, JSONArray(liste)) }
        })
    }.toString()

    companion object {
        /** Bozuk ya da eski kayıt varsayılanlara döner, uygulama çökmez. */
        fun jsondan(metin: String?): Ayarlar {
            if (metin.isNullOrBlank()) return Ayarlar()
            return runCatching {
                val o = JSONObject(metin)
                val v = Ayarlar()
                val agirliklar = o.optJSONObject("blokAgirliklari")
                Ayarlar(
                    gecmeNotu = o.optInt("gecmeNotu", v.gecmeNotu).coerceIn(0, 100),
                    gecmeVirgul = o.optBoolean("gecmeVirgul", v.gecmeVirgul),
                    finalBaraji = o.optInt("finalBaraji", v.finalBaraji).coerceIn(0, 100),
                    finalVirgul = o.optBoolean("finalVirgul", v.finalVirgul),
                    blokPayi = o.optInt("blokPayi", v.blokPayi).coerceIn(0, 100),
                    mduPayi = o.optInt("mduPayi", v.mduPayi).coerceIn(0, 100),
                    pdoPayi = o.optInt("pdoPayi", v.pdoPayi).coerceIn(0, 100),
                    gelisimPayi = o.optInt("gelisimPayi", v.gelisimPayi).coerceIn(0, 100),
                    finalPayi = o.optInt("finalPayi", v.finalPayi).coerceIn(0, 100),
                    // Bozuk tek bir sınıf kaydı yalnız o sınıfı varsayılana döndürür.
                    blokAgirliklari = buildMap {
                        agirliklar?.keys()?.forEach { id ->
                            runCatching {
                                val dizi = agirliklar.getJSONArray(id)
                                List(dizi.length()) { dizi.getInt(it).coerceIn(0, 100) }
                            }.onSuccess { put(id, it) }
                        }
                    },
                )
            }.getOrDefault(Ayarlar())
        }
    }
}
