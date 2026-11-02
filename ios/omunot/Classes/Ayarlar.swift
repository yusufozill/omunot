//
//  Ayarlar.swift
//  omunot
//
//  Kullanıcının değiştirebildiği hesap katsayıları. Varsayılanlar web ile aynı:
//  geçme 69,5, final barajı 59,5, bloklar %50, MDU %10, PDÖ %10, Gelişim %5, Final %25.
//

import Foundation

struct Ayarlar: Codable, Equatable {
    var gecmeNotu = 70
    var gecmeVirgul = true
    var finalBaraji = 60
    var finalVirgul = true
    var blokPayi = 50
    var mduPayi = 10
    var pdoPayi = 10
    var gelisimPayi = 5
    var finalPayi = 25
    /// sınıf id → blok ağırlıkları; olmayan sınıf için müfredattaki ağırlıklar kullanılır
    var blokAgirliklari: [String: [Int]] = [:]

    var gecmeSiniri: Double { Double(gecmeNotu) - (gecmeVirgul ? 0.5 : 0) }
    var finalSiniri: Double { Double(finalBaraji) - (finalVirgul ? 0.5 : 0) }
    var payToplami: Int { blokPayi + mduPayi + pdoPayi + gelisimPayi + finalPayi }

    func agirliklar(_ sinif: Sinif) -> [Int] {
        if let liste = blokAgirliklari[sinif.id], liste.count == sinif.bloklar.count { return liste }
        return sinif.bloklar.map(\.agirlik)
    }

    func agirlikDegistir(_ sinif: Sinif, _ index: Int, _ deger: Int) -> Ayarlar {
        var liste = agirliklar(sinif)
        liste[index] = deger
        var yeni = self
        yeni.blokAgirliklari[sinif.id] = liste
        return yeni
    }

    init() {}

    /// Bozuk ya da eksik kayıt alan alan varsayılanlara döner, uygulama çökmez.
    init(from decoder: Decoder) throws {
        let v = Ayarlar()
        let c = try decoder.container(keyedBy: CodingKeys.self)
        func sayi(_ k: CodingKeys, _ varsayilan: Int) -> Int {
            min(100, max(0, (try? c.decodeIfPresent(Int.self, forKey: k)) ?? varsayilan))
        }
        func anahtar(_ k: CodingKeys, _ varsayilan: Bool) -> Bool {
            (try? c.decodeIfPresent(Bool.self, forKey: k)) ?? varsayilan
        }
        gecmeNotu = sayi(.gecmeNotu, v.gecmeNotu)
        gecmeVirgul = anahtar(.gecmeVirgul, v.gecmeVirgul)
        finalBaraji = sayi(.finalBaraji, v.finalBaraji)
        finalVirgul = anahtar(.finalVirgul, v.finalVirgul)
        blokPayi = sayi(.blokPayi, v.blokPayi)
        mduPayi = sayi(.mduPayi, v.mduPayi)
        pdoPayi = sayi(.pdoPayi, v.pdoPayi)
        gelisimPayi = sayi(.gelisimPayi, v.gelisimPayi)
        finalPayi = sayi(.finalPayi, v.finalPayi)
        let agirliklar = (try? c.decodeIfPresent([String: [Int]].self, forKey: .blokAgirliklari)) ?? [:]
        blokAgirliklari = agirliklar.mapValues { $0.map { min(100, max(0, $0)) } }
    }
}
