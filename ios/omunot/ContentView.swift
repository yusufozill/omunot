// ContentView.swift
// omunot
//  Created by yusuf on 09.04.24.
//

import SwiftUI

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
    
     @State private var selectedValue = 0
  // Home screen content here
    var body: some View {
        
        CalculatorScreen()
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

