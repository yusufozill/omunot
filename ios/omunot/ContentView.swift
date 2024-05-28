// ContentView.swift
// omunot
//  Created by yusuf on 09.04.24.
//

import SwiftUI
import Speech


struct ContentView: View {
  @State private var selection: Tab = .home


  enum Tab {
    case home, settings, profile
  }
    
  var body: some View {
    TabView(selection: $selection) {
      HomeView()
        .tabItem {
          Label("Anasayfa", systemImage: "house")
        }
        .tag(Tab.home)

      SettingsView()
        .tabItem {
          Label("Ayarlar", systemImage: "gear")
        }
        .tag(Tab.settings)

    }
  }
}

struct HomeView: View {
    
    var recording = false
    
    let synthesizer = AVSpeechSynthesizer()
    var model = Model()
     @State private var selectedValue = 0
  // Home screen content here
    var body: some View {
        //Text("ksödfkl")
        //CalculatorScreen()
        VStack{
            Button {
                    model.recognizer.startTranscribing()
                   
            } label: {
                    Text("kayıt")
                
            }
            Button {
             
                    model.recognizer.stopTranscribing()
                
            } label: {
               
                    Text("dur")
                
            }
            Button {
                // TO DO add the attention for package is not avaliable or
                // sound level is not enough
                
                if AVSpeechSynthesisVoice.speechVoices().isEmpty {
                    print("Uyarı: Dil paketleri yüklü değil.")
                }
                
                // add play task
                let utterance = AVSpeechUtterance(string: "NULL EIN ZWEI" )
                utterance.voice = AVSpeechSynthesisVoice(language: "de-DE")
                utterance.rate = 0.2 // Okuma hızı
                synthesizer.speak(utterance)
                
            } label: {
                Text("çal çal")
            }
        }
        
     
  }
}

struct SettingsView: View {
  // Settings screen content here
  var body: some View {
    SettingsPage()
  }
}

struct ProfileView: View {
  // Profile screen content here
  var body: some View {
    Text("Profil")
  }
}

struct ContentView_Previews: PreviewProvider {
  static var previews: some View {
    ContentView()
  }
}

