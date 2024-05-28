//
//  ContentView.swift
//  omunot
//
//  Created by yusuf on 07.04.24.
//

import SwiftUI
import Foundation

import FirebaseCore
import FirebaseDatabase


struct CalculatorScreen: View {
    
    
    func hesapla() {
        
        
    }
    @State var sayac: Int = 0
    @State  var message: String = "Bakalım Görelim"
    @State  var message2: String = ""
    @State private var buttonRadius = 100.0
    @State private var buttonColor = Color.init(hex: "e46938")
    @State private var borderColor = Color.white
    @State var settings = Settings()
    
    let databaseReference = Database.database().reference().child("sayac")
    
    
    @State private var selectedValue = 0 // Seçilen değeri tutmak için State değişkeni
    // UserDefaults'a kaydet
    
    
    
    var body: some View  {
        
        ScrollView {
            Picker(selection: $selectedValue, label: Text("Notu Seçin")) {
                Text("1.Sınıf").tag(0)
                Text("2.Sınıf").tag(1)
                Text("3.Sınıf").tag(2)
            }.pickerStyle(.segmented)
                
            
              // Picker genişliğini 300 olarak ayarlar
            
             
            if selectedValue == 0 {
                
                LazyVGrid(columns: Array(repeating: .init(.flexible()), count: 2), spacing: 10) {
                    
                    ForEach(settings.siniflar[0].bloklar.indices)  { index in
                        
                        TextField(settings.siniflar[0].bloklar[index], text: $settings.siniflar[0].notlar[index])
                        
                            .padding()
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color(hex: "#58975d"), lineWidth: 1) // Kenar rengi ve kalınlığını ayarla
                            )
                            .id(".\(index)\(0)a")
                            .disabled(!settings.siniflar[0].isOpen[index])
                        
                        
                    }
                    ForEach(settings.siniflar[0].babalar.indices) { index in
                        
                        TextField(settings.siniflar[0].babalar[index], text: $settings.siniflar[0].babalarNotlar[index])
                            .padding().background(
                                RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color(hex: "#58975d"), lineWidth: 1) // Kenar rengi ve kalınlığını ayarla
                            )
                        
                            .id(".\(index)\(0)")
                        
                    }
                }
                .padding()
                
                
                
            }else if selectedValue == 1{
                LazyVGrid(columns: Array(repeating: .init(.flexible()), count: 2), spacing: 10) {
                    
                    ForEach(settings.siniflar[1].bloklar.indices)  { index in
                        
                        TextField(settings.siniflar[1].bloklar[index], text: $settings.siniflar[1].notlar[index])
                            .padding()
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color(hex: "#58975d"), lineWidth: 1) // Kenar rengi ve kalınlığını ayarla
                            )
                            .id(".\(index)\(1)a")
                        
                    }
                    ForEach(settings.siniflar[1].babalar.indices) { index in
                        
                        TextField(settings.siniflar[1].babalar[index], text: $settings.siniflar[1].babalarNotlar[index])
                            .padding()
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color(hex: "#58975d"), lineWidth: 1) // Kenar rengi ve kalınlığını ayarla
                            )
                            .id(".\(index)\(1)")
                        
                    }
                }
                .padding()
            }else{
                LazyVGrid(columns: Array(repeating: .init(.flexible()), count: 2), spacing: 10) {
                    
                    ForEach(settings.siniflar[2].bloklar.indices)  { index in
                        
                        TextField(settings.siniflar[2].bloklar[index], text: $settings.siniflar[2].notlar[index])
                            .padding()
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color(hex: "#58975d"), lineWidth: 1) // Kenar rengi ve kalınlığını ayarla
                            )
                            .id(".\(index)\(2)a")
                        
                    }
                    ForEach(settings.siniflar[2].babalar.indices) { index in
                        
                        TextField(settings.siniflar[2].babalar[index], text: $settings.siniflar[2].babalarNotlar[index])
                            .padding()
                            .background(
                                RoundedRectangle(cornerRadius: 8)
                                    .stroke(Color(hex: "#58975d"), lineWidth: 1) // Kenar rengi ve kalınlığını ayarla
                            )
                            .id(".\(index)\(2)")
                        
                    }
                }
                .padding()
            }
            
            
            HStack{
                VStack{
                    
                    Text(message).padding()
                    Text(message2).padding()
                }
                Spacer()
                VStack {
                    
                    Button(action: {
                        var puan = settings.siniflar[selectedValue].hesapla()
                        message=puan[0]
                        message2=puan[1]
                        let userUpdates = ["sayac": sayac+1]
                        databaseReference.updateChildValues(userUpdates)
                        settings.saveToLocalStorage()
                        
                    }) {
                        VStack (alignment: /*@START_MENU_TOKEN@*/.center/*@END_MENU_TOKEN@*/, spacing: 0, content: {
                            Text("")
                            Text("HESAPLA")
                            Text(sayac == 0 ?  "..." : "\(sayac)")
                            
                            
                                .frame(height: 15)
                                .padding(EdgeInsets(top: 0, leading: 3, bottom: 0, trailing: 3))
                                .background(Color.white)
                                .foregroundColor(.black)
                                .clipShape(RoundedRectangle(cornerRadius: /*@START_MENU_TOKEN@*/25.0/*@END_MENU_TOKEN@*/))
                                .font(.system(size: 12))
                            
                            
                            
                            
                        })
                        
                        
                        
                    }
                    .buttonStyle(HesaplaButtonStyle())
                }
            }.padding()
            
            
        }.onAppear(perform: {
            
            
            settings = Settings.loadFromLocalStorage() ?? Settings()
            databaseReference.getData { (error, dataSnapshot) in
                if let error = error {
                    print(error)
                } else if let snapshot = dataSnapshot {
                    // Veri güncelleme işlemleri
                    
                    let name = snapshot.childSnapshot(forPath: "sayac").value as? Int
                    print("\(name)")
                    
                    // Kullanıcı arayüzünü güncelle
                    sayac =   Int( name ?? 0)
                }
            }
            
            // Değişiklik dinleyici ekleyin
            databaseReference.observe(.value) { (snapshot) in
                // Veritabanındaki "sayac" yolu altındaki değer değiştiğinde bu blok çalışır
                if let value = snapshot.value as? [String: Any], let sayacc = value["sayac"] as? Int {
                    print("Sayac değeri: \(sayacc)")
                    sayac=sayacc
                } else {
                    print("Sayac değeri alınamadı veya tip uyumsuzluğu.")
                }
                
            }
            
            
            
            
            
            
        })
        .onDisappear(perform: {
            settings.saveToLocalStorage()
        })
    }
    // This function should implement your actual login validation logic
    // Returning true if credentials are valid, false otherwise
    private func validateLogin(username: String, password: String) -> Bool {
        // Implement your validation logic here
        message="Neden bana boyle yapiyorsunuz memati"
        return  true// Replace with actual validation logic
    }
    func startAnimation() {
        // UIKit tabanlı animasyon
        if buttonRadius==100.0
        {
            UIView.animate(withDuration: 0.5) {
                
                buttonRadius=0.0
                borderColor = buttonColor
                buttonColor = Color.white
            }}
        else
        
        {
            UIView.animate(withDuration: 0.2) {
                
                buttonRadius = 100.0
                buttonColor = borderColor
                borderColor = Color.white
            }}
    }
}
struct CalculatorScreen_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct HesaplaButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
        
            .frame(width: 100,height: 100)
            .foregroundColor(configuration.isPressed ? Color.init(hex: "e46938") :Color.white )
            .background(configuration.isPressed ? Color.white  :Color.init(hex: "e46938") )
        
            .font(.custom("IndieFlower", size: 22))
            .border(configuration.isPressed ? Color.init(hex: "e46938") : Color.white.opacity(0) )
        
            .clipShape( configuration.isPressed ? RoundedRectangle(cornerRadius:0.0):RoundedRectangle(cornerRadius:100.0))
        
        // Butona basıldığında opaklığı azalt
    }
}

struct CustomTextFieldStyle: TextFieldStyle {
    func _body(configuration: TextField<_Label>) -> some View {
        configuration
            .padding(10)
            .background(
                RoundedRectangle(cornerRadius: 8)
                    .stroke(Color.blue, lineWidth: 2) // Kenar rengi ve kalınlığını ayarla
            )
    }
}

