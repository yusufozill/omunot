package com.omunot.omunotsays.hesap

// Sınıflar, bloklar ve metinler. Kaynak: omunot.com js/data.js (aynı katsayı ve mesajlar).
// id'ler web'deki input id'leriyle aynı; notlar bu anahtarlarla saklanır.

data class Blok(val id: String, val ad: String, val agirlik: Int, val sabit: Double? = null)

data class Sinif(val id: String, val onek: String, val sekme: String, val bloklar: List<Blok>) {
    val mdu = "${onek}MDUNotu"
    val pdo = "${onek}PDONotu"
    val gelisim = "${onek}GelisimNotu"
    val final = "${onek}FinalNotu"

    /** Ekranda sırayla görünen alanlar: bloklar, sonra MDU, PDÖ, Gelişim, Final. */
    val alanlar: List<Alan> =
        bloklar.map { Alan(it.id, it.ad, it.sabit) } +
            listOf(Alan(mdu, "MDU"), Alan(pdo, "PDÖ"), Alan(gelisim, "Gelişim"), Alan(final, "Final"))

    /** Kullanıcının yazabildiği alanlar (sabit notlu bloklar hariç). */
    val girdiIdleri: List<String> = alanlar.filter { it.sabit == null }.map { it.id }
}

data class Alan(val id: String, val ad: String, val sabit: Double? = null)

const val YIL_SONU_MAX = 100.0

val SINIFLAR = listOf(
    Sinif(
        id = "bir", onek = "", sekme = "1. Sınıf",
        bloklar = listOf(
            Blok("UyumNotu", "Uyum", 1, sabit = 100.0),
            Blok("HayatinTemeliNotu", "Hayatın Temeli", 4),
            Blok("YasamNotu", "Yaşam", 6),
            Blok("BeslenmeNotu", "Beslenme", 6),
            Blok("EnerjiNotu", "Enerji", 6),
            Blok("secmeliNotu", "Seçmeli Blok", 3),
            Blok("MCDNotu", "MÇD", 6),
            Blok("UremeNotu", "Üreme", 6),
            Blok("HareketNotu", "Hareket ve Kontrol", 10),
        ),
    ),
    Sinif(
        id = "iki", onek = "xox", sekme = "2. Sınıf",
        bloklar = listOf(
            Blok("buyumeGelismeDavranisNotu", "Büyüme, Gelişme ve Davranış", 7),
            Blok("beyinVeDuyularNotu", "Beyin ve Duyular", 10),
            Blok("etikNotu", "Etik ve Tıbbi Araştırma Teknikleri", 7),
            Blok("zedelenmeNotu", "Zedelenme", 5),
            Blok("biyolojikEtmenlerNotu", "Biyolojik Etmenler", 7),
            Blok("kanNotu", "Kan", 7),
            Blok("savunmaNotu", "Savunma", 7),
            Blok("xoxsecmeliNotu", "Seçmeli", 4),
        ),
    ),
    Sinif(
        id = "uc", onek = "xoxx", sekme = "3. Sınıf",
        bloklar = listOf(
            Blok("xoxxProf", "Tıpta Profesyonellik", 2),
            Blok("xoxxGebelikNotu", "Gebelik ve Doğum", 5),
            Blok("xoxxTravmaNotu", "Travma", 5),
            Blok("xoxxSolDolNotu", "Solunum ve Dolaşım", 6),
            Blok("xoxxEnfeksiyonNotu", "Enfeksiyon", 6),
            Blok("xoxxYaslanmaNotu", "Yaşlanma", 5),
            Blok("xoxxEndokrinNotu", "Endokrin Sistem", 6),
            Blok("xoxxSindirimNotu", "Sindirim Sistemi", 5),
            Blok("xoxxtumor", "Tümörler", 5),
            Blok("xoxxnoro", "Nöropsikiyatriye Giriş", 5),
            Blok("xoxxSecmeliNotu", "Seçmeli", 4),
        ),
    ),
)

// Sonuç mesajları her hesapta bu listelerden rastgele seçilir.
val MESAJLAR = mapOf(
    Durum.FAZLA to listOf("ABARTMA", "YOK ARTIK!", "NASIL", "KEŞKE"),
    Durum.GECTI to listOf("Geçtin", "Alkış", "Tebrikler"),
    Durum.KALDI to listOf("üzgünüm", "Omü Zor!", "olmadı :("),
    Durum.GEREK to listOf("alman lazım", "alman gerekli"),
    Durum.BARAJ to listOf("Final barajı var"),
)

const val FINALDEN = "Finalden"
const val EPOSTA = "yusufozill@omunot.com"
const val INSTAGRAM = "https://www.instagram.com/yusufozill/"

/** Hesap ekranının altında dönen bilgi notları; ayarlara göre yazılır. */
fun bilgiNotlari(a: Ayarlar): List<String> = buildList {
    add(
        "Geçme notu ${sayiYaz(a.gecmeSiniri)} - Final barajı ${sayiYaz(a.finalSiniri)} olarak hesaplanır." +
            if (a.gecmeVirgul && a.finalPayi > 0) " Bu ölçüm finalden almanız gereken puanı ${sayiYaz(0.5 * 100 / a.finalPayi)} puan daha az hesaplar." else "",
    )
    add("Finalden kaç almanız gerektiğini Final kutucuğunu boş bırakarak hesaplayabilirsiniz :)")
    add("Katkılarınızı $EPOSTA adresine iletebilirsiniz")
    if (a.gelisimPayi in 1..99) add("Gelişim anahtarı kapalıyken notunuz 100/${100 - a.gelisimPayi} ile çarpılır")
}

fun gelisimUyarisi(acik: Boolean, a: Ayarlar): String = when {
    acik -> "Gelişim sınavı etkisi %${a.gelisimPayi} olarak hesaplanacak"
    a.gelisimPayi in 1..99 -> "Gelişim sınavı kaldırıldı, notunuz 100/${100 - a.gelisimPayi} ile çarpılacak"
    else -> "Gelişim sınavı hesaba katılmayacak"
}

/** 72.35 → "72,35", 59.5 → "59,5", 70.0 → "70" */
fun sayiYaz(x: Double): String =
    java.math.BigDecimal(x).setScale(2, java.math.RoundingMode.HALF_UP).stripTrailingZeros()
        .toPlainString().replace('.', ',')

/** Sonuç ekranı için hep 2 hane (web'deki toFixed(2) gibi): 72.3 → "72,30" */
fun ikiHane(x: Double): String =
    java.math.BigDecimal(x).setScale(2, java.math.RoundingMode.HALF_UP).toPlainString().replace('.', ',')
