//
//  SettingsPage.swift
//  omunot
//
//  Created by yusuf on 09.04.24.
//

import SwiftUI



struct SettingsPage: View {
    
    /////// Seçilen sayıyı takip etmek için bir state variable
    
    @State var settings : Settings = Settings()
    @State var gecmeNotu = 70
    @State var finalBaraji = 60
    
    @State var babalarKatsayilar : [Int] = [10,10,5,25]
    
    @State var blokKatsayisi = 50
    @State var gecmeVirgul = true
    @State var finalVirgul = true
    
    
    @State var birBlokKatsayilari :[Int] = [ ]
    @State var ikiBlokKatsayilari :[Int] = [ ]
    @State var ucBlokKatsayilari :[Int] = [ ]
    
    @State var total1 = 0
    @State var total2 = 0
    @State var total3 = 0
    
    
    
    
    
    var body: some View {
        
        Form{
            //Basic Settings
            Section ( header: Text("Hesaplama Detaylari")){
                Toggle(isOn: $gecmeVirgul, label: {
                    Text("Gecme notu \(String(format: "%.2f", (Double(gecmeNotu) - 0.5))) olarak hesapla")
                    
                    
                })
                .onAppear{
                    settings = Settings.loadFromLocalStorage() ?? Settings()
                    
                }
                .onChange ( of: gecmeVirgul)  { newValue in
                    gecmeVirgul=newValue
                    settings.gecmeVirgul=newValue
                    
                }
                Picker(selection: $gecmeNotu, label: Text("Gecme Notu")) {
                    ForEach(Array(0...100), id: \.self) { number in
                        Text("\(number)")
                    }}.onChange ( of: gecmeNotu)  { newValue in
                        gecmeNotu=Int(newValue)
                        settings.gecmeNotu=Double(gecmeNotu)
                    }
                Toggle(isOn: $finalVirgul, label: {
                    Text("Final barajını \(String(format: "%.2f",Double(finalBaraji)-0.5)) olarak hesapla")
                }).onChange ( of: finalVirgul)  { newValue in
                    finalVirgul=newValue
                    settings.finalVirgul=newValue
                }
                Picker(selection: $finalBaraji, label: Text("Final Barajı")) {
                    ForEach(Array(0...100), id: \.self) { number in
                        Text("\(number)")
                    }}.onChange ( of: finalBaraji)  { newValue in
                        finalBaraji=Int(newValue)
                        settings.finalBaraji=Double(finalBaraji)
                    }
                
                
            }
            
            
            Section ( header: Text("Katsayı ayarları")){
                
                
                
                Picker(selection: $blokKatsayisi, label: Text("Blokların yüzdesi")) {
                    ForEach(Array(0...100), id: \.self) { number in
                        Text("\(number)")
                    }}.onChange ( of: blokKatsayisi)  { newValue in
                        blokKatsayisi=newValue
                        settings.blokKatsayisi=newValue
                    }
                
                ForEach(settings.babalar.indices, id: \.self) { number in
                    Picker(selection: $babalarKatsayilar[number] , label: Text(settings.babalar[number])) {
                        ForEach(Array(0...100), id: \.self) { number in
                            Text("%\(number)")
                        }
                    }.onChange ( of: babalarKatsayilar[number])  { newValue in
                        babalarKatsayilar[number]=newValue
                        settings.babalarKatsayilar=babalarKatsayilar
                    }
                    
                }
                
                
                
                
            }.onAppear{
                birBlokKatsayilari = settings.bir.katsayilar
                ikiBlokKatsayilari = settings.iki.katsayilar
                ucBlokKatsayilari = settings.uc.katsayilar
            }
            Section ( header: Text("1. Sınıf Blok Katsayıları")){
                ForEach(birBlokKatsayilari.indices, id: \.self) { index in
                    Picker(selection: $birBlokKatsayilari[index], label: Text(settings.bir.bloklar[index])) {
                        ForEach(Array(0...100), id: \.self) { index in
                            Text("x\(index)")
                        }
                    }.onChange ( of: birBlokKatsayilari[index])  { newValue in
                        birBlokKatsayilari[index]=newValue
                        settings.bir.katsayilar = birBlokKatsayilari
                        print("bir")
                    }
                    
                }
                
            }
            Section ( header: Text("2. Sınıf Blok Katsayıları")){
                ForEach(ikiBlokKatsayilari.indices, id: \.self) { index in
                    Picker(selection: $ikiBlokKatsayilari[index], label: Text(settings.iki.bloklar[index])) {
                        ForEach(Array(0...100), id: \.self) { index in
                            Text("x\(index)")
                        }
                    }.onChange ( of: ikiBlokKatsayilari[index])  { newValue in
                        ikiBlokKatsayilari[index]=newValue
                        settings.iki.katsayilar = ikiBlokKatsayilari
                        print("bir")
                    }
                    
                }
            }
            
            Section ( header: Text("3. Sınıf Blok Katsayıları")){
                ForEach(ucBlokKatsayilari.indices, id: \.self) { index in
                    Picker(selection: $ucBlokKatsayilari[index], label: Text(settings.uc.bloklar[index])) {
                        ForEach(Array(0...100), id: \.self) { index in
                            Text("x\(index)")
                        }
                    }.onChange ( of: ucBlokKatsayilari[index])  { newValue in
                        ucBlokKatsayilari[index]=newValue
                        settings.uc.katsayilar = ucBlokKatsayilari
                        print("bir")
                    }
                    
                }
            }
            Section {
                Button(action: resetSettings) {
                    Text("Ayarları Varsayılana Sıfırla")
                }
                .foregroundColor(.red)
                .frame(maxWidth: .infinity, alignment: .center)
                
                
                
            }
            
            Text("2024 Yılında Yusuf Özil tarafından tasarlanmıştır.")
                .frame(maxWidth: .infinity, alignment: .trailing)
                .foregroundColor(.blue)
                .font(.footnote).onTapGesture {
                    openInstagram()
                }
            
            
            
            
        }
        .onDisappear {
            settings.saveToLocalStorage()
        }
        
    }
    
    func resetSettings() {
        // Ayarları sıfırlama kodunuz
        settings = Settings()
        settings.saveToLocalStorage()
    }
    
    
    
    func openInstagram() {
        // Geliştiricinin Instagram profilini açma kodunuz
        guard let url = URL(string: "https://www.instagram.com/yusufozill/") else { return }
        UIApplication.shared.open(url)
    }
    
}
struct SettingsPage_Previews: PreviewProvider {
    static var previews: some View {
        SettingsPage()
    }
}
