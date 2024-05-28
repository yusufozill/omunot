//
//  Sinif.swift
//  omunot
//
//  Created by yusuf on 09.04.24.
//



class Sinif :  Codable,Identifiable {
    
    var bloklar:[String]
    var isim:String
    var katsayilar:[Int]
    var notlar:[String]
    var isOpen:[Bool] // for let to write not in input
    let babalar:[String] // for pdö mdu gelisim and final point list
    var babalarIsOpen:[Bool]
    var babalarKatsayilari:[Int]
    var babalarNotlar:[String]
    var blokKatsayisi: Int
    var gecmeNotu:Double
    var finalBaraji:Double
    
    init(bloklar: [String], isim: String, katsayilar: [Int], notlar: [String], isOpen: [Bool], babalar: [String], babalarIsOpen: [Bool], babalarKatsayilari: [Int], babalarNotlar: [String], blokKatsayisi: Int, gecmeNotu: Double, finalBaraji: Double) {
        self.bloklar = bloklar
        self.isim = isim
        self.katsayilar = katsayilar
        self.notlar = notlar
        self.isOpen = isOpen
        self.babalar = babalar
        self.babalarIsOpen = babalarIsOpen
        self.babalarKatsayilari = babalarKatsayilari
        self.babalarNotlar = babalarNotlar
        self.blokKatsayisi = blokKatsayisi
        self.gecmeNotu = gecmeNotu
        self.finalBaraji = finalBaraji
    }
    
    
    
    func hesapla() -> [String]  {
        var katsayi = 0.0;
        var babalarKatsayi=0.0
        var not = 0.0;
        var _gecmenotu=0.0
        
        katsayilar.forEach { sayi in
            katsayi+=Double(sayi)
        }
        babalarKatsayilari.forEach { sayi in
            babalarKatsayi+=Double(sayi)
        }
        Array(0...notlar.count-1).forEach { index in
            
            let a = Double(notlar[index]) ?? 0.0
            
            not += a * Double(katsayilar[index])/katsayi
            
        }
        not = not*Double(blokKatsayisi)
        Array(0...babalar.count-1).forEach { index in
            let a = Double(babalarNotlar[index]) ?? 0.0
            not += a * Double(babalarKatsayilari[index])
            
        }
        not = not/100
        var message = ""
        if babalar.last == "" {
           var finalden = (gecmeNotu-not)*4
            if(finalden>100){
                message = "maalesef"
            }
            else if(finalden>finalBaraji) {
                
               message = "finalden \(finalden)  alman gerekli"
            }
            else{
                message = "finalden \(finalBaraji)  alman gerekli"
            }
                
            
        }
        else{
            
             if(not>100){
                 message = "Abartma"
             }
             else if(not>gecmeNotu) {
                 
                message = "Tebrikler"
             }
             else{
                 message = "maalesef"
             }
            
        }
        return [ "Ortalaman: "+String(format: "%.2f", not), message]
    }
    
}





