import SwiftUI

class Settings: ObservableObject, Codable{
    var bir: Sinif
    var iki: Sinif
    var uc: Sinif
    var siniflar: [Sinif]
    var babalar: [String]
    var gecmeVirgul: Bool
    var sinif: Int
    var finalVirgul: Bool
    var blokKatsayisi: Int
    var babalarKatsayilar: [Int]
    var gecmeNotu: Double
    var finalBaraji: Double
    var birBabaNotlar:[String]
    var ikiBabaNotlar:[String]
    var ucBabaNotlar:[String]

    init(gecmeVirgul: Bool = true,
         sinif: Int = 0,
         finalVirgul: Bool = true,
         gecmeNotu: Double = 70,
         finalBaraji: Double = 60,
         babalarKatsayilar: [Int] = [10, 10, 5, 25],
         blokKatsayisi: Int = 50,
         babalar: [String] = ["PDÖ", "MDU", "Gelisim", "Final"],
         birBabaNotlar: [String] = ["","","",""],
         birNotlar: [String] = ["100", "", "", "", "", "", "", "", ""],
         birKatsayilar: [Int] = [1, 4, 6, 6, 6, 3, 6, 6, 10],
         ikiBabaNotlar: [String] = ["","","",""],
         ikiNotlar: [String] = ["", "", "", "", "", "", "", ""],
         ikiKatsayilar: [Int] = [7, 10, 7, 5, 7, 7, 7, 4],
         ucBabaNotlar: [String] = ["","","",""],
         ucNotlar: [String] = ["", "", "", "", "", "", "", "", "", "", ""],
         ucKatsayilar: [Int] = [2, 5, 5, 6, 6, 5, 6, 5, 5, 5, 4]
         ) {

        self.bir = Sinif(
            bloklar: ["Uyum", "Hayatin Temeli", "Yaşam", "Beslenme", "Enerji", "Seçmeli Blok", "MÇD", "Üreme", "Hareket ve kontrol"],
            isim: "1. Sınıf",
            katsayilar: birKatsayilar,
            notlar: birNotlar,
            isOpen: [false, true, true, true, true, true, true, true, true],
            babalar: babalar,
            babalarIsOpen: [true, true, true, true],
            babalarKatsayilari: babalarKatsayilar,
            babalarNotlar: birBabaNotlar,
            blokKatsayisi: blokKatsayisi,
            gecmeNotu: gecmeNotu,
            finalBaraji: finalBaraji
        )

        self.iki = Sinif(
            bloklar: ["Büyüme, Gelişme Ve Davranış", "Beyin Ve Duyular", "Etik Ve Tıbbi Araştırma Teknikleri", "Zedelenme", "Biyolojik Etmenler", "Kan", "Savunma", "Seçmeli"],
            isim: "2. Sınıf",
            katsayilar: ikiKatsayilar,
            notlar: ikiNotlar,
            isOpen: [true, true, true, true, true, true, true, true],
            babalar: babalar,
            babalarIsOpen: [true, true, true, true],
            babalarKatsayilari: babalarKatsayilar,
            babalarNotlar: ikiBabaNotlar,
            blokKatsayisi: blokKatsayisi,
            gecmeNotu: gecmeNotu,
            finalBaraji: finalBaraji
        )

        self.uc = Sinif(
            bloklar: ["Tıpta Profesyonellik", "Gebelik Ve Doğum", "Travma", "Solunum Ve Dolaşım", "Enfeksiyon", "Yaşlanma", "Endokrin Sistem", "Sindirim Sistemi", "Tümörler", "Nöropsikiyatriye Giriş", "Seçmeli"],
            isim: "3. Sınıf",
            katsayilar: ucKatsayilar,
            notlar: ucNotlar,
            isOpen: [true, true, true, true, true, true, true, true, true, true, true],
            babalar: babalar,
            babalarIsOpen: [true, true, true, true],
            babalarKatsayilari: babalarKatsayilar,
            babalarNotlar: ucBabaNotlar,
            blokKatsayisi: blokKatsayisi,
            gecmeNotu: gecmeNotu,
            finalBaraji: finalBaraji
        )

        self.siniflar = [self.bir, self.iki, self.uc]
        self.gecmeNotu = gecmeNotu
        self.finalBaraji = finalBaraji
        self.babalar = babalar
        self.blokKatsayisi = blokKatsayisi
        self.gecmeVirgul = gecmeVirgul
        self.sinif = sinif
        self.finalVirgul = finalVirgul
        self.babalarKatsayilar = babalarKatsayilar
        self.birBabaNotlar=birBabaNotlar
        self.ikiBabaNotlar=ikiBabaNotlar
        self.ucBabaNotlar=ucBabaNotlar
    }

    // Local storage'e kaydeden fonksiyon
       func saveToLocalStorage() {
           let encoder = JSONEncoder()
           if let encoded = try? encoder.encode(self) {
               UserDefaults.standard.set(encoded, forKey: "settings")
           }
           
               print("kayediliyor..")
       }

       // Local storage'dan geri getiren fonksiyon
       static func loadFromLocalStorage() -> Settings? {
           print("yukleniyor..")
           if let data = UserDefaults.standard.data(forKey: "settings") {
               let decoder = JSONDecoder()
               if let settings = try? decoder.decode(Settings.self, from: data) {
                   return settings
               }
           }
           return nil
           
       }

}
