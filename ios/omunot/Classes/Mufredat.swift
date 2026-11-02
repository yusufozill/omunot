//
//  Mufredat.swift
//  omunot
//
//  Sınıflar, bloklar ve metinler. Kaynak: omunot.com js/data.js (aynı katsayı ve mesajlar).
//  Alan id'leri web'deki kutu id'leriyle aynı ("uc-gebelik"); notlar bu anahtarlarla saklanır.
//

import Foundation

/// `sabit`: kutusu yok, notu hep bu değerdir (1. sınıf Uyum = 100).
struct Blok {
    let id: String
    let ad: String
    let agirlik: Int
    var sabit: Double? = nil
}

/// Ekrandaki bir kutu: blok ya da MDU, PDÖ, Gelişim, Final.
struct Alan: Identifiable {
    let id: String
    let ad: String
    var sabit: Double? = nil
}

struct Sinif: Identifiable {
    let id: String
    let sekme: String
    let bloklar: [Blok]

    var mdu: String { "\(id)-mdu" }
    var pdo: String { "\(id)-pdo" }
    var gelisim: String { "\(id)-gelisim" }
    var final: String { "\(id)-final" }

    func alanId(_ blok: Blok) -> String { "\(id)-\(blok.id)" }

    /// Ekranda sırayla görünen alanlar: bloklar, sonra MDU, PDÖ, Gelişim, Final.
    var alanlar: [Alan] {
        bloklar.map { Alan(id: alanId($0), ad: $0.ad, sabit: $0.sabit) } + [
            Alan(id: mdu, ad: "MDU"), Alan(id: pdo, ad: "PDÖ"),
            Alan(id: gelisim, ad: "Gelişim"), Alan(id: final, ad: "Final"),
        ]
    }

    /// Kullanıcının yazabildiği alanlar (sabit notlu bloklar hariç), ekrandaki sırayla.
    var girdiIdleri: [String] { alanlar.filter { $0.sabit == nil }.map(\.id) }
}

let YIL_SONU_MAX = 100.0

let SINIFLAR: [Sinif] = [
    Sinif(id: "bir", sekme: "1. Sınıf", bloklar: [
        Blok(id: "uyum", ad: "Uyum", agirlik: 1, sabit: 100),
        Blok(id: "hayatinTemeli", ad: "Hayatın Temeli", agirlik: 4),
        Blok(id: "yasam", ad: "Yaşam", agirlik: 6),
        Blok(id: "beslenme", ad: "Beslenme", agirlik: 6),
        Blok(id: "enerji", ad: "Enerji", agirlik: 6),
        Blok(id: "secmeli", ad: "Seçmeli Blok", agirlik: 3),
        Blok(id: "mcd", ad: "MÇD", agirlik: 6),
        Blok(id: "ureme", ad: "Üreme", agirlik: 6),
        Blok(id: "hareket", ad: "Hareket ve Kontrol", agirlik: 10),
    ]),
    Sinif(id: "iki", sekme: "2. Sınıf", bloklar: [
        Blok(id: "buyume", ad: "Büyüme, Gelişme ve Davranış", agirlik: 7),
        Blok(id: "beyin", ad: "Beyin ve Duyular", agirlik: 10),
        Blok(id: "etik", ad: "Etik ve Tıbbi Araştırma Teknikleri", agirlik: 7),
        Blok(id: "zedelenme", ad: "Zedelenme", agirlik: 5),
        Blok(id: "biyolojik", ad: "Biyolojik Etmenler", agirlik: 7),
        Blok(id: "kan", ad: "Kan", agirlik: 7),
        Blok(id: "savunma", ad: "Savunma", agirlik: 7),
        Blok(id: "secmeli", ad: "Seçmeli", agirlik: 4),
    ]),
    Sinif(id: "uc", sekme: "3. Sınıf", bloklar: [
        Blok(id: "profesyonellik", ad: "Tıpta Profesyonellik", agirlik: 2),
        Blok(id: "gebelik", ad: "Gebelik ve Doğum", agirlik: 5),
        Blok(id: "travma", ad: "Travma", agirlik: 5),
        Blok(id: "solunumDolasim", ad: "Solunum ve Dolaşım", agirlik: 6),
        Blok(id: "enfeksiyon", ad: "Enfeksiyon", agirlik: 6),
        Blok(id: "yaslanma", ad: "Yaşlanma", agirlik: 5),
        Blok(id: "endokrin", ad: "Endokrin Sistem", agirlik: 6),
        Blok(id: "sindirim", ad: "Sindirim Sistemi", agirlik: 5),
        Blok(id: "tumor", ad: "Tümörler", agirlik: 5),
        Blok(id: "noro", ad: "Nöropsikiyatriye Giriş", agirlik: 5),
        Blok(id: "secmeli", ad: "Seçmeli", agirlik: 4),
    ]),
]

// Sonuç mesajları her hesapta bu listelerden rastgele seçilir.
let MESAJLAR: [Durum: [String]] = [
    .fazla: ["ABARTMA", "YOK ARTIK!", "NASIL", "KEŞKE"],
    .gecti: ["Geçtin", "Alkış", "Tebrikler"],
    .kaldi: ["üzgünüm", "Omü Zor!", "olmadı :("],
    .gerek: ["alman lazım", "alman gerekli"],
    .baraj: ["Final barajı var"],
]

let FINALDEN = "Finalden"
let EPOSTA = "yusufozill@omunot.com"
let INSTAGRAM = "https://www.instagram.com/yusufozill/"

/// Hesap ekranının altında dönen bilgi notları; ayarlara göre yazılır.
func bilgiNotlari(_ a: Ayarlar) -> [String] {
    var notlar = [
        "Geçme notu \(sayiYaz(a.gecmeSiniri)) - Final barajı \(sayiYaz(a.finalSiniri)) olarak hesaplanır."
            + (a.gecmeVirgul && a.finalPayi > 0
                ? " Bu ölçüm finalden almanız gereken puanı \(sayiYaz(0.5 * 100 / Double(a.finalPayi))) puan daha az hesaplar."
                : ""),
        "Finalden kaç almanız gerektiğini Final kutucuğunu boş bırakarak hesaplayabilirsiniz :)",
        "Katkılarınızı \(EPOSTA) adresine iletebilirsiniz",
    ]
    if (1...99).contains(a.gelisimPayi) {
        notlar.append("Gelişim anahtarı kapalıyken notunuz 100/\(100 - a.gelisimPayi) ile çarpılır")
    }
    return notlar
}

func gelisimUyarisi(acik: Bool, _ a: Ayarlar) -> String {
    if acik { return "Gelişim sınavı etkisi %\(a.gelisimPayi) olarak hesaplanacak" }
    if (1...99).contains(a.gelisimPayi) { return "Gelişim sınavı kaldırıldı, notunuz 100/\(100 - a.gelisimPayi) ile çarpılacak" }
    return "Gelişim sınavı hesaba katılmayacak"
}

/// 72.35 → "72,35", 59.5 → "59,5", 70.0 → "70"
func sayiYaz(_ x: Double) -> String {
    var s = ikiHane(x)
    if s.contains(",") {
        while s.hasSuffix("0") { s.removeLast() }
        if s.hasSuffix(",") { s.removeLast() }
    }
    return s
}

/// Sonuç ekranı için hep 2 hane (web'deki toFixed(2) gibi): 72.3 → "72,30"
func ikiHane(_ x: Double) -> String {
    String(format: "%.2f", yuvarla(x)).replacingOccurrences(of: ".", with: ",")
}
