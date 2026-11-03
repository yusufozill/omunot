//
//  Hesap.swift
//  omunot
//
//  Yıl sonu hesabı. omunot.com js/hesap.js'in birebir karşılığı; katsayılar Ayarlar'dan gelir.
//  Varsayılan ayarlarla web ile aynı sonucu verdiği HesapTest'te web çıktısıyla denetlenir.
//

import Foundation

enum Durum: String, Codable, CaseIterable {
    case fazla, gecti, kaldi, gerek, baraj
}

/// - ortalama: yıl sonu ortalaması (2 haneye yuvarlı)
/// - sayi: ekranda büyük gösterilen değer: ortalama ya da finalden gereken not
struct Sonuc: Equatable {
    let ortalama: Double
    let sayi: Double
    let durum: Durum
}

/// - Parameters:
///   - girdi: alan id → kutudaki metin; boş kutu 0 sayılır, "85,5" ve "85.5" kabul edilir
///   - gelisimVar: Gelişim sınavı hesaba katılıyor mu (kapalıysa Gelişim kutusu yok sayılır
///     ve not 100/(100 − gelişim payı) ile çarpılır)
func hesapla(_ sinif: Sinif, _ girdi: [String: String], gelisimVar: Bool, ayarlar: Ayarlar = Ayarlar()) -> Sonuc {
    func not(_ id: String) -> Double { notOku(girdi[id]) }

    let agirliklar = ayarlar.agirliklar(sinif)
    var toplam = 0.0
    var agirlik = 0.0
    for (i, blok) in sinif.bloklar.enumerated() {
        toplam += Double(agirliklar[i]) * (blok.sabit ?? not(sinif.alanId(blok)))
        agirlik += Double(agirliklar[i])
    }
    let blokOrtalamasi = agirlik > 0 ? toplam / agirlik : 0

    let final = not(sinif.final)
    let gelisim = gelisimVar ? not(sinif.gelisim) : 0
    // Toplama sırası web'deki ile aynı; kayan nokta sonucu birebir tutsun.
    var ham = blokOrtalamasi * Double(ayarlar.blokPayi)
    ham += not(sinif.mdu) * Double(ayarlar.mduPayi)
    ham += not(sinif.pdo) * Double(ayarlar.pdoPayi)
    ham += gelisim * Double(ayarlar.gelisimPayi)
    ham += final * Double(ayarlar.finalPayi)
    ham /= 100
    if !gelisimVar && ayarlar.gelisimPayi < 100 { ham = ham * 100 / Double(100 - ayarlar.gelisimPayi) }
    let sonuc = yuvarla(ham)

    let gecme = ayarlar.gecmeSiniri
    let baraj = ayarlar.finalSiniri

    // Final kutusu boş (ya da 0) ise "finalden kaç almalıyım" hesaplanır.
    if final == 0 && ayarlar.finalPayi > 0 {
        let gereken = yuvarla((gecme - sonuc) * (100 / Double(ayarlar.finalPayi)))
        if gereken < -22 { return Sonuc(ortalama: sonuc, sayi: sonuc, durum: .fazla) }
        if gereken <= baraj { return Sonuc(ortalama: sonuc, sayi: baraj, durum: .gerek) }
        if gereken <= 100 { return Sonuc(ortalama: sonuc, sayi: gereken, durum: .gerek) }
        return Sonuc(ortalama: sonuc, sayi: sonuc, durum: .kaldi)
    }

    let durum: Durum
    if sonuc < gecme { durum = .kaldi }
    else if sonuc <= YIL_SONU_MAX { durum = final < baraj ? .baraj : .gecti }
    else { durum = .fazla }
    return Sonuc(ortalama: sonuc, sayi: sonuc, durum: durum)
}

/// Kutudaki metni sayıya çevirir. Boş ya da çözülemeyen metin 0 olur (web'deki Number('') gibi).
func notOku(_ metin: String?) -> Double {
    guard var metin = metin?.trimmingCharacters(in: .whitespaces).replacingOccurrences(of: ",", with: "."),
          !metin.isEmpty, gecerliYazim(metin) else { return 0 }
    // "85." ve ".5" web'de 85 ve 0,5'tir; Swift'in Double(_:) bunları okumayabilir.
    if metin.hasPrefix(".") { metin = "0" + metin }
    if metin.hasSuffix(".") { metin += "0" }
    return Double(metin) ?? 0
}

/// Kutuya yazılabilecek metin mi: en çok 3 basamak, isteğe bağlı virgül/nokta ve 2 ondalık.
func gecerliYazim(_ metin: String) -> Bool {
    metin.range(of: #"^\d{0,3}([.,]\d{0,2})?$"#, options: .regularExpression) != nil
}

/// Geçersiz yazımdan kutuda kalacak metin: harfler atılır, kalanın geçerli en uzun baş kısmı.
/// "80.555" → "80.55", "8a0" → "80", "1000" → "100"
func gecerliOnEk(_ metin: String) -> String {
    var sade = metin.filter { $0.isASCII && ($0.isNumber || $0 == "," || $0 == ".") }
    while !gecerliYazim(sade) { sade.removeLast() }
    return sade
}

/// JS'teki Number.toFixed(2) ile aynı yuvarlama: double'ın tam ondalık değeri, eşitlikte sıfırdan uzağa.
/// (x * 100).rounded() yetmez: 1.005 gibi sayılar ikilik tabanda tam yazılamadığı için kayar.
func yuvarla(_ x: Double) -> Double {
    guard x.isFinite else { return x }
    // %.60f bu uygulamadaki büyüklükteki sayıların tam ondalık açılımını verir (macOS/iOS printf kesin yazar).
    let tam = String(format: "%.60f", abs(x))
    let parcalar = tam.split(separator: ".")
    guard parcalar.count == 2, var tamKisim = Int(parcalar[0]) else { return x }
    let kesir = Array(parcalar[1])
    var yuzde = Int(String(kesir[0...1]))!
    if kesir[2] >= "5" { yuzde += 1 }
    if yuzde == 100 { tamKisim += 1; yuzde = 0 }
    let sonuc = Double(String(format: "%d.%02d", tamKisim, yuzde))!
    return x < 0 ? -sonuc : sonuc
}
