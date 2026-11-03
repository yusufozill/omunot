//
//  Sayac.swift
//  omunot
//
//  Canlı "HESAPLA" sayacı: Realtime Database'de sayac/sayac (web ve Android ile ortak).
//  Firebase'e ulaşılamazsa değer nil kalır, hesap makinesi yine çalışır.
//

import FirebaseCore
import FirebaseDatabase

final class Sayac {
    /// UI testleri "-sayacKapali" ile açar; canlı sayaç testlerde artmasın.
    private let ref: DatabaseReference? =
        FirebaseApp.app() == nil || ProcessInfo.processInfo.arguments.contains("-sayacKapali")
            ? nil : Database.database().reference().child("sayac")

    /// Değer her değiştiğinde (ve okunamazsa nil ile) çağrılır.
    func dinle(_ degisti: @escaping (Int?) -> Void) {
        guard let ref else { return degisti(nil) }
        ref.observe(.value, with: { anlik in
            degisti(anlik.childSnapshot(forPath: "sayac").value as? Int)
        }, withCancel: { hata in
            print("Sayaç okunamadı: \(hata.localizedDescription)")
            degisti(nil)
        })
    }

    /// İki kişi aynı anda bassa da artış kaybolmasın diye transaction ile.
    func arttir() {
        ref?.runTransactionBlock({ veri in
            let sayac = veri.childData(byAppendingPath: "sayac")
            sayac.value = ((sayac.value as? Int) ?? 0) + 1
            return .success(withValue: veri)
        }, andCompletionBlock: { hata, _, _ in
            if let hata { print("Sayaç artırılamadı: \(hata.localizedDescription)") }
        })
    }
}
