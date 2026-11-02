package com.omunot.omunotsays.hesap

import org.json.JSONArray
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class HesapTest {

    private val bir = SINIFLAR[0]

    /**
     * web_hesap_ornekleri.json omunot.com js/hesap.js çalıştırılarak üretildi (uret.mjs).
     * Varsayılan ayarlarla Android hesabı web ile her örnekte aynı olmalı.
     */
    @Test
    fun webIleAyniSonuc() {
        val metin = javaClass.classLoader!!.getResource("web_hesap_ornekleri.json").readText()
        val ornekler = JSONArray(metin)
        assertTrue(ornekler.length() >= 600)
        for (i in 0 until ornekler.length()) {
            val o = ornekler.getJSONObject(i)
            val sinif = SINIFLAR.first { it.id == o.getString("sinif") }
            // notlar kutuların ekrandaki sırasıyla gelir; girdiIdleri de aynı sırada.
            val notlar = o.getJSONArray("notlar")
            assertEquals(sinif.girdiIdleri.size, notlar.length())
            val girdi = sinif.girdiIdleri.withIndex().associate { (j, id) -> id to notlar.getString(j) }
            val s = hesapla(sinif, girdi, o.getBoolean("gelisimVar"))
            val ad = "örnek $i ($girdi)"
            assertEquals("$ad ortalama", o.getDouble("sonuc"), s.ortalama, 0.0)
            assertEquals("$ad sayı", o.getDouble("sayi"), s.sayi, 0.0)
            assertEquals("$ad durum", o.getString("durum"), s.durum.name.lowercase())
        }
    }

    private fun hepsi(not: String, final: String, gelisim: String = not) = buildMap {
        bir.bloklar.filter { it.sabit == null }.forEach { put(it.id, not) }
        put(bir.mdu, not); put(bir.pdo, not); put(bir.gelisim, gelisim); put(bir.final, final)
    }

    @Test
    fun virgulluNotKabulEdilir() {
        assertEquals(hesapla(bir, hepsi("85.5", "70"), true), hesapla(bir, hepsi("85,5", "70"), true))
    }

    @Test
    fun finalBosIkenGerekenFinalHesaplanir() {
        // bloklar 60 (Uyum 100) → blok ort. ≈ 60,83; MDU/PDÖ/Gelişim 70 → ortalama 47,92 → gereken 86,32
        val s = hesapla(bir, hepsi("60", "", gelisim = "70").plus(bir.mdu to "70").plus(bir.pdo to "70"), true)
        assertEquals(Durum.GEREK, s.durum)
        assertEquals(yuvarla((69.5 - s.ortalama) * 4), s.sayi, 0.0)
    }

    @Test
    fun gerekenBarajinAltindaysaBarajGosterilir() {
        val s = hesapla(bir, hepsi("100", ""), true)
        assertEquals(Durum.GEREK, s.durum)
        assertEquals(59.5, s.sayi, 0.0)
    }

    @Test
    fun finalBarajAltindaysaBaraj() {
        assertEquals(Durum.BARAJ, hesapla(bir, hepsi("100", "50"), true).durum)
        assertEquals(Durum.GECTI, hesapla(bir, hepsi("100", "59,5"), true).durum)
    }

    @Test
    fun gelisimKapaliyken100Bolu95VeKutuYokSayilir() {
        val acik = hesapla(bir, hepsi("80", "80", gelisim = ""), true)
        val kapali = hesapla(bir, hepsi("80", "80", gelisim = "100"), false)
        assertEquals(yuvarla(acik.ortalama * 100 / 95), kapali.ortalama, 0.011)
    }

    @Test
    fun ayarlarHesabiDegistirir() {
        val girdi = hepsi("70", "70")
        assertEquals(Durum.GECTI, hesapla(bir, girdi, true).durum)
        assertEquals(Durum.KALDI, hesapla(bir, girdi, true, Ayarlar(gecmeNotu = 75)).durum)
        // hepsi 69,5 → ortalama 69,82 (Uyum 100 yukarı çeker): virgülle geçer, virgülsüz (sınır 70) kalır
        assertEquals(Durum.GECTI, hesapla(bir, hepsi("69.5", "69.5"), true).durum)
        assertEquals(Durum.KALDI, hesapla(bir, hepsi("69.5", "69.5"), true, Ayarlar(gecmeVirgul = false)).durum)
        // Final payı 50 → gereken = (69,5 − ort) × 2
        val a = Ayarlar(blokPayi = 25, finalPayi = 50)
        val s = hesapla(bir, hepsi("60", ""), true, a)
        assertEquals(yuvarla((69.5 - s.ortalama) * 2).coerceAtLeast(59.5), s.sayi, 0.0)
    }

    @Test
    fun blokAgirligiDegisince() {
        val girdi = hepsi("0", "0").plus("HareketNotu" to "100")
        val v = hesapla(bir, girdi, true)
        val a = Ayarlar().agirlikDegistir(bir, bir.bloklar.indexOfFirst { it.id == "HareketNotu" }, 50)
        assertTrue(hesapla(bir, girdi, true, a).ortalama > v.ortalama)
    }

    @Test
    fun sifirPaydaCokmez() {
        val a = Ayarlar(blokAgirliklari = mapOf("bir" to List(bir.bloklar.size) { 0 }), finalPayi = 0, gelisimPayi = 100)
        val s = hesapla(bir, hepsi("50", ""), false, a)
        assertTrue(s.ortalama.isFinite())
    }

    @Test
    fun ayarlarJsonGidipGelir() {
        val a = Ayarlar(gecmeNotu = 65, finalVirgul = false, mduPayi = 12).agirlikDegistir(SINIFLAR[2], 3, 9)
        assertEquals(a, Ayarlar.jsondan(a.json()))
        assertEquals(Ayarlar(), Ayarlar.jsondan("bozuk{"))
        assertEquals(Ayarlar(), Ayarlar.jsondan(null))
    }

    @Test
    fun yazimDenetimi() {
        listOf("", "8", "85", "100", "85,", "85,5", "85.55", "0").forEach { assertTrue(it, gecerliYazim(it)) }
        listOf("1000", "8a", "85,555", "1,2,3", "-5", " 5").forEach { assertTrue(it, !gecerliYazim(it)) }
    }

    @Test
    fun sayiYazimi() {
        assertEquals("72,35", sayiYaz(72.35))
        assertEquals("59,5", sayiYaz(59.5))
        assertEquals("100", sayiYaz(100.0))
        assertEquals("0", sayiYaz(0.0))
        assertEquals("72,30", ikiHane(72.3))
        assertEquals("59,50", ikiHane(59.5))
    }
}
