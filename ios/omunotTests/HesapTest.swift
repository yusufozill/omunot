//
//  HesapTest.swift
//  omunotTests
//
//  ortak/web_hesap_ornekleri.json, web/js/hesap.js çalıştırılarak üretildi
//  (ortak/uret.mjs; Android ile aynı dosya).
//

import XCTest
@testable import omunot

final class HesapTest: XCTestCase {

    private let bir = SINIFLAR[0]

    /// Varsayılan ayarlarla iOS hesabı web ile her örnekte aynı olmalı.
    func testWebIleAyniSonuc() throws {
        let yol = URL(fileURLWithPath: #filePath).deletingLastPathComponent().appendingPathComponent("../../ortak/web_hesap_ornekleri.json")
        let ornekler = try XCTUnwrap(JSONSerialization.jsonObject(with: Data(contentsOf: yol)) as? [[String: Any]])
        XCTAssertGreaterThanOrEqual(ornekler.count, 600)
        for (i, o) in ornekler.enumerated() {
            let sinif = try XCTUnwrap(SINIFLAR.first { $0.id == o["sinif"] as? String })
            // notlar kutuların ekrandaki sırasıyla gelir; girdiIdleri de aynı sırada.
            let notlar = try XCTUnwrap(o["notlar"] as? [String])
            XCTAssertEqual(notlar.count, sinif.girdiIdleri.count)
            let girdi = Dictionary(uniqueKeysWithValues: zip(sinif.girdiIdleri, notlar))
            let s = hesapla(sinif, girdi, gelisimVar: o["gelisimVar"] as! Bool)
            let ad = "örnek \(i) \(notlar)"
            XCTAssertEqual(s.ortalama, o["sonuc"] as! Double, "\(ad) ortalama")
            XCTAssertEqual(s.sayi, o["sayi"] as! Double, "\(ad) sayı")
            XCTAssertEqual(s.durum.rawValue, o["durum"] as! String, "\(ad) durum")
        }
    }

    private func hepsi(_ not: String, _ final: String, gelisim: String? = nil) -> [String: String] {
        var g: [String: String] = [:]
        for b in bir.bloklar where b.sabit == nil { g[bir.alanId(b)] = not }
        g[bir.mdu] = not; g[bir.pdo] = not; g[bir.gelisim] = gelisim ?? not; g[bir.final] = final
        return g
    }

    func testVirgulluNotKabulEdilir() {
        XCTAssertEqual(hesapla(bir, hepsi("85.5", "70"), gelisimVar: true), hesapla(bir, hepsi("85,5", "70"), gelisimVar: true))
        XCTAssertEqual(notOku("85,"), 85)
        XCTAssertEqual(notOku(",5"), 0.5)
        XCTAssertEqual(notOku("."), 0)
        XCTAssertEqual(notOku("abc"), 0)
    }

    func testFinalBosIkenGerekenFinalHesaplanir() {
        var g = hepsi("60", "", gelisim: "70")
        g[bir.mdu] = "70"; g[bir.pdo] = "70"
        let s = hesapla(bir, g, gelisimVar: true)
        XCTAssertEqual(s.durum, .gerek)
        XCTAssertEqual(s.sayi, yuvarla((69.5 - s.ortalama) * 4))
    }

    func testGerekenBarajinAltindaysaBarajGosterilir() {
        let s = hesapla(bir, hepsi("100", ""), gelisimVar: true)
        XCTAssertEqual(s.durum, .gerek)
        XCTAssertEqual(s.sayi, 59.5)
    }

    func testFinalBarajAltindaysaBaraj() {
        XCTAssertEqual(hesapla(bir, hepsi("100", "50"), gelisimVar: true).durum, .baraj)
        XCTAssertEqual(hesapla(bir, hepsi("100", "59,5"), gelisimVar: true).durum, .gecti)
    }

    func testGelisimKapaliyken100Bolu95VeKutuYokSayilir() {
        let acik = hesapla(bir, hepsi("80", "80", gelisim: ""), gelisimVar: true)
        let kapali = hesapla(bir, hepsi("80", "80", gelisim: "100"), gelisimVar: false)
        XCTAssertEqual(kapali.ortalama, yuvarla(acik.ortalama * 100 / 95), accuracy: 0.011)
    }

    func testAyarlarHesabiDegistirir() {
        let girdi = hepsi("70", "70")
        XCTAssertEqual(hesapla(bir, girdi, gelisimVar: true).durum, .gecti)
        var a = Ayarlar(); a.gecmeNotu = 75
        XCTAssertEqual(hesapla(bir, girdi, gelisimVar: true, ayarlar: a).durum, .kaldi)
        // hepsi 69,5 → ortalama 69,82 (Uyum 100 yukarı çeker): virgülle geçer, virgülsüz (sınır 70) kalır
        XCTAssertEqual(hesapla(bir, hepsi("69.5", "69.5"), gelisimVar: true).durum, .gecti)
        a = Ayarlar(); a.gecmeVirgul = false
        XCTAssertEqual(hesapla(bir, hepsi("69.5", "69.5"), gelisimVar: true, ayarlar: a).durum, .kaldi)
        // Final payı 50 → gereken = (69,5 − ort) × 2
        a = Ayarlar(); a.blokPayi = 25; a.finalPayi = 50
        let s = hesapla(bir, hepsi("60", ""), gelisimVar: true, ayarlar: a)
        XCTAssertEqual(s.sayi, max(yuvarla((69.5 - s.ortalama) * 2), 59.5))
    }

    func testBlokAgirligiDegisince() {
        var girdi = hepsi("0", "0")
        girdi["bir-hareket"] = "100"
        let v = hesapla(bir, girdi, gelisimVar: true)
        let a = Ayarlar().agirlikDegistir(bir, bir.bloklar.firstIndex { $0.id == "hareket" }!, 50)
        XCTAssertGreaterThan(hesapla(bir, girdi, gelisimVar: true, ayarlar: a).ortalama, v.ortalama)
    }

    func testSifirPaydaCokmez() {
        var a = Ayarlar()
        a.blokAgirliklari = ["bir": Array(repeating: 0, count: bir.bloklar.count)]
        a.finalPayi = 0; a.gelisimPayi = 100
        XCTAssertTrue(hesapla(bir, hepsi("50", ""), gelisimVar: false, ayarlar: a).ortalama.isFinite)
    }

    func testAyarlarJsonGidipGelir() throws {
        var a = Ayarlar(); a.gecmeNotu = 65; a.finalVirgul = false; a.mduPayi = 12
        a = a.agirlikDegistir(SINIFLAR[2], 3, 9)
        XCTAssertEqual(try JSONDecoder().decode(Ayarlar.self, from: JSONEncoder().encode(a)), a)
        // Eksik ya da sınır dışı alanlar varsayılana / sınıra döner.
        let eksik = try JSONDecoder().decode(Ayarlar.self, from: Data(#"{"gecmeNotu": 500, "finalVirgul": "x"}"#.utf8))
        var beklenen = Ayarlar(); beklenen.gecmeNotu = 100
        XCTAssertEqual(eksik, beklenen)
    }

    func testYazimDenetimi() {
        for s in ["", "8", "85", "100", "85,", "85,5", "85.55", "0"] { XCTAssertTrue(gecerliYazim(s), s) }
        for s in ["1000", "8a", "85,555", "1,2,3", "-5", " 5"] { XCTAssertFalse(gecerliYazim(s), s) }
        for (s, beklenen) in [("80.555", "80.55"), ("8a0", "80"), ("1000", "100"), ("1,2,3", "1,2"), ("abc", "")] {
            XCTAssertEqual(gecerliOnEk(s), beklenen, s)
        }
    }

    func testSayiYazimi() {
        XCTAssertEqual(sayiYaz(72.35), "72,35")
        XCTAssertEqual(sayiYaz(59.5), "59,5")
        XCTAssertEqual(sayiYaz(100), "100")
        XCTAssertEqual(sayiYaz(0), "0")
        XCTAssertEqual(ikiHane(72.3), "72,30")
        XCTAssertEqual(ikiHane(59.5), "59,50")
    }

    /// Beklenenler node'da x.toFixed(2) ile alındı. 1.005, 2.675, 47.925 ikilik tabanda biraz
    /// küçüktür, aşağı yuvarlanır; 0.125 ve 72.125 tam eşitliktir, sıfırdan uzağa yuvarlanır.
    func testYuvarlamaJsToFixedIleAyni() {
        let ornekler: [(Double, Double)] = [
            (1.005, 1.00), (0.125, 0.13), (72.125, 72.13), (-0.125, -0.13),
            (99.995, 100.00), (69.999, 70.00), (2.675, 2.67), (47.925, 47.92),
        ]
        for (x, beklenen) in ornekler { XCTAssertEqual(yuvarla(x), beklenen, "\(x)") }
    }

    // MARK: - Depo

    private func bosDepo() -> UserDefaults {
        let ad = "HesapTest-\(UUID())"
        let d = UserDefaults(suiteName: ad)!
        d.removePersistentDomain(forName: ad)
        return d
    }

    /// 2024 sürümünün "settings" kaydındaki notlar ve ayarlar yeni anahtarlara taşınır.
    func testEskiKayitTasinir() throws {
        let d = bosDepo()
        let eski: [String: Any] = [
            "gecmeNotu": 75.0, "gecmeVirgul": false, "finalBaraji": 60.0, "finalVirgul": true,
            "blokKatsayisi": 50, "babalarKatsayilar": [10, 10, 5, 25],
            "bir": ["katsayilar": [1, 4, 6, 6, 6, 3, 6, 6, 10]],
            "iki": ["katsayilar": [7, 10, 7, 5, 7, 7, 7, 9]],
            "siniflar": [
                ["notlar": ["100", "80", "", "abc", "", "", "", "", ""], "babalarNotlar": ["60", "70", "", "45,5"]],
                ["notlar": ["90"], "babalarNotlar": []],
            ],
        ]
        d.set(try JSONSerialization.data(withJSONObject: eski), forKey: "settings")
        let depo = Depo(d)
        XCTAssertEqual(depo.notOku("bir-hayatinTemeli"), "80")
        XCTAssertEqual(depo.notOku("bir-beslenme"), "")  // "abc" geçersiz, taşınmaz
        XCTAssertEqual(depo.notOku("bir-pdo"), "60")
        XCTAssertEqual(depo.notOku("bir-mdu"), "70")
        XCTAssertEqual(depo.notOku("bir-final"), "45,5")
        XCTAssertEqual(depo.notOku("iki-buyume"), "90")
        XCTAssertEqual(depo.ayarlar.gecmeNotu, 75)
        XCTAssertFalse(depo.ayarlar.gecmeVirgul)
        XCTAssertNil(depo.ayarlar.blokAgirliklari["bir"])  // varsayılanla aynı, yazılmaz
        XCTAssertEqual(depo.ayarlar.blokAgirliklari["iki"], [7, 10, 7, 5, 7, 7, 7, 9])

        // İkinci açılışta yeniden taşınmaz (kullanıcının sonradan sildiği not geri gelmez).
        depo.notYaz("bir-hayatinTemeli", "")
        XCTAssertEqual(Depo(d).notOku("bir-hayatinTemeli"), "")
    }

    func testBozukEskiKayitCokmez() {
        let d = bosDepo()
        d.set(Data("bozuk{".utf8), forKey: "settings")
        d.set(Data("bozuk{".utf8), forKey: "ayarlar")
        let depo = Depo(d)
        XCTAssertEqual(depo.ayarlar, Ayarlar())
        XCTAssertTrue(depo.gelisimVar)
    }
}
