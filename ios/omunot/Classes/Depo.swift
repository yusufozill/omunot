//
//  Depo.swift
//  omunot
//
//  Notlar, seçili sınıf, Gelişim anahtarı, ayarlar ve son sonuçlar cihazda (UserDefaults) saklanır.
//

import Foundation

/// Ekranda gösterilen son sonuç; uygulama yeniden açılınca aynen geri gelir.
struct Gosterim: Codable, Equatable {
    let sayi: Double
    let durum: Durum
    let mesaj: String
}

final class Depo {
    private let d: UserDefaults

    init(_ d: UserDefaults = .standard) {
        self.d = d
        eskiKaydiTasi()
    }

    func notOku(_ id: String) -> String { d.string(forKey: "not_\(id)") ?? "" }
    func notYaz(_ id: String, _ deger: String) { d.set(deger, forKey: "not_\(id)") }

    var sinifNo: Int {
        get { d.integer(forKey: "sinif") }
        set { d.set(newValue, forKey: "sinif") }
    }

    var gelisimVar: Bool {
        get { d.object(forKey: "gelisim") as? Bool ?? true }
        set { d.set(newValue, forKey: "gelisim") }
    }

    var ayarlar: Ayarlar {
        get { d.data(forKey: "ayarlar").flatMap { try? JSONDecoder().decode(Ayarlar.self, from: $0) } ?? Ayarlar() }
        set { d.set(try? JSONEncoder().encode(newValue), forKey: "ayarlar") }
    }

    func sonucOku(_ sinifId: String) -> Gosterim? {
        d.data(forKey: "sonuc_\(sinifId)").flatMap { try? JSONDecoder().decode(Gosterim.self, from: $0) }
    }

    func sonucYaz(_ sinifId: String, _ gosterim: Gosterim?) {
        if let gosterim { d.set(try? JSONEncoder().encode(gosterim), forKey: "sonuc_\(sinifId)") }
        else { d.removeObject(forKey: "sonuc_\(sinifId)") }
    }

    /// 2024 sürümü her şeyi tek bir "settings" JSON'unda tutuyordu. Notlar ve ayarlar bir kez taşınır;
    /// eski kayıt silinmez. Okunamayan alan atlanır.
    private func eskiKaydiTasi() {
        guard !d.bool(forKey: "eskiKayitTasindi") else { return }
        defer { d.set(true, forKey: "eskiKayitTasindi") }
        guard let veri = d.data(forKey: "settings"),
              let eski = try? JSONSerialization.jsonObject(with: veri) as? [String: Any] else { return }

        // Notlar siniflar[i] içinde; ortak kalemler eski sırayla PDÖ, MDU, Gelişim, Final.
        let eskiSiniflar = eski["siniflar"] as? [[String: Any]] ?? []
        for (sinif, e) in zip(SINIFLAR, eskiSiniflar) {
            let notlar = e["notlar"] as? [String] ?? []
            for (blok, metin) in zip(sinif.bloklar, notlar) where blok.sabit == nil {
                tasi(sinif.alanId(blok), metin)
            }
            let ortak = e["babalarNotlar"] as? [String] ?? []
            for (id, metin) in zip([sinif.pdo, sinif.mdu, sinif.gelisim, sinif.final], ortak) { tasi(id, metin) }
        }

        // Eski ayar sayfası blok katsayılarını bir/iki/uc'ya, diğerlerini köke yazıyordu.
        var a = Ayarlar()
        let sinir = { (x: Int) in min(100, max(0, x)) }
        if let x = eski["gecmeNotu"] as? Double { a.gecmeNotu = sinir(Int(x)) }
        if let x = eski["gecmeVirgul"] as? Bool { a.gecmeVirgul = x }
        if let x = eski["finalBaraji"] as? Double { a.finalBaraji = sinir(Int(x)) }
        if let x = eski["finalVirgul"] as? Bool { a.finalVirgul = x }
        if let x = eski["blokKatsayisi"] as? Int { a.blokPayi = sinir(x) }
        if let k = eski["babalarKatsayilar"] as? [Int], k.count == 4 {
            (a.pdoPayi, a.mduPayi, a.gelisimPayi, a.finalPayi) = (sinir(k[0]), sinir(k[1]), sinir(k[2]), sinir(k[3]))
        }
        for sinif in SINIFLAR {
            if let k = (eski[sinif.id] as? [String: Any])?["katsayilar"] as? [Int],
               k.count == sinif.bloklar.count, k != sinif.bloklar.map(\.agirlik) {
                a.blokAgirliklari[sinif.id] = k.map(sinir)
            }
        }
        if a != Ayarlar() { ayarlar = a }
    }

    private func tasi(_ id: String, _ metin: String) {
        let metin = metin.trimmingCharacters(in: .whitespaces)
        if !metin.isEmpty, gecerliYazim(metin) { notYaz(id, metin) }
    }
}
