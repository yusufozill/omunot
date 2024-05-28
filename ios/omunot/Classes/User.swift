//
//  user.swift
//  omunot
//
//  Created by yusuf on 10.04.24.
//

import Foundation
class User {
    var classes:Int=1;
    var siniflar:[Sinif]
    var ayarlar1:[Bool]
    var katsayilar:[Int]
    
    init(classes: Int, siniflar: [Sinif], ayarlar1: [Bool], katsayilar: [Int]) {
        self.classes = classes
        self.siniflar = siniflar
        self.ayarlar1 = ayarlar1
        self.katsayilar = katsayilar
    }
    
}
