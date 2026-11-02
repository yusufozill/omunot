//
//  omunotUITests.swift
//  omunotUITests
//
//  Hesap akışını uygulamada baştan sona dener. Beklenen sayılar omunot.com js/hesap.js ile
//  aynı notlar girilerek alındı. EKRAN_DIZINI verilirse (xcodebuild'e TEST_RUNNER_EKRAN_DIZINI)
//  her adımın ekran görüntüsü oraya yazılır.
//

import XCTest

final class omunotUITests: XCTestCase {

    private var app: XCUIApplication!

    override func setUpWithError() throws {
        continueAfterFailure = false
        app = XCUIApplication()
        // Canlı Firebase sayacına dokunma.
        app.launchArguments.append("-sayacKapali")
        app.launch()
    }

    private func ekran(_ ad: String) {
        let goruntu = XCUIScreen.main.screenshot()
        let ek = XCTAttachment(screenshot: goruntu)
        ek.name = ad
        ek.lifetime = .keepAlways
        add(ek)
        if let dizin = ProcessInfo.processInfo.environment["EKRAN_DIZINI"] {
            try? goruntu.pngRepresentation.write(to: URL(fileURLWithPath: dizin).appendingPathComponent("\(ad).png"))
        }
    }

    private func kutu(_ ad: String) -> XCUIElement { app.textFields["\(ad) notu"] }

    /// Kaydırma sürerken yapılan dokunuş odak vermeyebilir; odak gelene kadar yeniden dokunulur.
    private func odakla(_ k: XCUIElement) {
        for _ in 0..<4 where !k.isHittable { app.swipeUp() }
        for _ in 0..<3 {
            k.tap()
            if (k.value(forKey: "hasKeyboardFocus") as? Bool) == true { return }
        }
    }

    private func yaz(_ ad: String, _ metin: String) {
        let k = kutu(ad)
        odakla(k)
        k.typeText(metin)
    }

    private func hesapla() {
        let d = app.buttons["hesaplaDugmesi"]
        if !d.isHittable { app.swipeUp() }
        d.tap()
    }

    /// Sekme çubuğu bazı cihazlarda yan tarafta durur; tabBars bulunmazsa düğme olarak aranır.
    private func sekme(_ ad: String) {
        let b = app.tabBars.buttons[ad]
        (b.exists ? b : app.buttons[ad].firstMatch).tap()
    }

    /// Form'un en altında; görünene kadar kaydırılır.
    private func sifirlaDugmesi() -> XCUIElement {
        let d = app.buttons["Ayarları varsayılana sıfırla"]
        for _ in 0..<6 where !d.isHittable { app.swipeUp() }
        return d
    }

    private var sonuc: String { app.descendants(matching: .any)["sonuc"].label }

    func testHesapAkisi() throws {
        app.buttons["1. Sınıf"].tap()
        let temizle = app.buttons["Notları temizle"]
        if !temizle.isHittable { app.swipeUp() }
        temizle.tap()
        app.swipeDown()
        ekran("1-bos")

        // Geçersiz yazım kutuya girmez: üçüncü ondalık reddedilir.
        yaz("Hayatın Temeli", "80.555")
        XCTAssertEqual(kutu("Hayatın Temeli").value as? String, "80.55")
        for ad in ["Yaşam", "Beslenme", "Enerji", "Seçmeli Blok", "MÇD", "Üreme", "Hareket ve Kontrol", "MDU", "PDÖ", "Gelişim"] {
            yaz(ad, "80")
        }
        ekran("2-notlar-girildi")

        // Final boş → finalden gereken; gereken barajın altında olduğu için baraj (59,50) gösterilir.
        hesapla()
        XCTAssertTrue(sonuc.contains("Finalden"), sonuc)
        XCTAssertTrue(sonuc.contains("59,50"), sonuc)
        ekran("3-finalden-gereken")

        // Final 50 → ortalama 72,73 ama final barajın altında.
        yaz("Final", "50")
        hesapla()
        XCTAssertTrue(sonuc.contains("72,73"), sonuc)
        XCTAssertTrue(sonuc.contains("Final barajı var"), sonuc)
        ekran("4-baraj")

        // Gelişim kapanınca kutu boşalır, kilitlenir; not 100/95 ile çarpılır → 72,35.
        let anahtar = app.switches["Gelişim sınavı hesaba katılsın"]
        if !anahtar.isHittable { app.swipeUp() }
        anahtar.switches.firstMatch.tap()
        let kilitli = expectation(for: NSPredicate(format: "isEnabled == false"), evaluatedWith: kutu("Gelişim"))
        wait(for: [kilitli], timeout: 3)
        XCTAssertTrue(app.descendants(matching: .any).matching(NSPredicate(format: "label CONTAINS %@", "notunuz 100/95 ile")).firstMatch.waitForExistence(timeout: 3), "uyarı görünmeli")
        XCTAssertEqual(kutu("Gelişim").value as? String, kutu("Gelişim").placeholderValue, "Gelişim kutusu boşalmalı")
        XCTAssertTrue(sonuc.contains("72,35"), sonuc)
        ekran("5-gelisim-kapali")
        anahtar.switches.firstMatch.tap()

        // Final 90 → geçti.
        // İmleci sona koymak için kutunun sağ ucuna dokunulur.
        let final = kutu("Final")
        odakla(final)
        final.coordinate(withNormalizedOffset: CGVector(dx: 0.95, dy: 0.5)).tap()
        final.typeText(String(repeating: XCUIKeyboardKey.delete.rawValue, count: 3) + "90")
        XCTAssertEqual(final.value as? String, "90")
        hesapla()
        XCTAssertTrue(sonuc.contains("82,73"), sonuc)
        ekran("6-gecti")

        // Notlar uygulama kapanıp açılınca yerinde, son sonuç da görünür.
        app.terminate()
        app.launch()
        XCTAssertEqual(kutu("Hayatın Temeli").value as? String, "80.55")
        XCTAssertTrue(sonuc.contains("82,73"), sonuc)

        // Ayar değişince sonuç hemen yenilenir: geçme notu virgülsüz (70) → yine geçer; 2. sınıf boş.
        app.buttons["2. Sınıf"].tap()
        ekran("7-ikinci-sinif")
        sekme("Ayarlar")
        ekran("8-ayarlar")
        sifirlaDugmesi().tap()
        XCTAssertTrue(app.alerts["Ayarlar sıfırlansın mı?"].waitForExistence(timeout: 2))
        ekran("9-sifirla-sor")
        app.alerts.buttons["Vazgeç"].tap()
    }

    /// Final barajı ayarı değişince ekrandaki sonuç yeniden hesaplanır.
    func testAyarDegisinceSonucYenilenir() throws {
        app.buttons["1. Sınıf"].tap()
        let temizle = app.buttons["Notları temizle"]
        if !temizle.isHittable { app.swipeUp() }
        temizle.tap()
        app.swipeDown()
        for ad in ["Hayatın Temeli", "Yaşam", "Beslenme", "Enerji", "Seçmeli Blok", "MÇD", "Üreme",
                   "Hareket ve Kontrol", "MDU", "PDÖ", "Gelişim"] {
            yaz(ad, "80")
        }
        yaz("Final", "55")
        hesapla()
        XCTAssertTrue(sonuc.contains("Final barajı var"), sonuc)

        // Baraj 55'e inince (sınır 54,5) aynı notlarla geçer.
        sekme("Ayarlar")
        app.buttons.matching(NSPredicate(format: "label BEGINSWITH %@", "Final barajı")).firstMatch.tap()
        app.buttons["55"].tap()
        ekran("10-baraj-55")
        sekme("Anasayfa")
        XCTAssertFalse(sonuc.contains("Final barajı var"), sonuc)
        ekran("11-baraj-55-sonuc")

        sekme("Ayarlar")
        sifirlaDugmesi().tap()
        app.alerts.buttons["Sıfırla"].tap()
        sekme("Anasayfa")
        XCTAssertTrue(sonuc.contains("Final barajı var"), sonuc)
    }
}
