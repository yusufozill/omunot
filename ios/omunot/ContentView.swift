// ContentView.swift
// omunot
//  Created by yusuf on 09.04.24.
//
//  İki sekme aynı HesapModeli'ni paylaşır; ayarlar değişince hesap ekranı hemen güncellenir.
//

import SwiftUI

struct ContentView: View {
    @StateObject private var model = HesapModeli()

    var body: some View {
        TabView {
            CalculatorScreen()
                .tabItem { Label("Anasayfa", systemImage: "house") }
            SettingsPage()
                .tabItem { Label("Ayarlar", systemImage: "gear") }
        }
        .tint(turuncu)
        .environmentObject(model)
        .overlay(alignment: .bottom) { BildirimKutusu(bildirim: $model.bildirim) }
        .onAppear { model.sayaciDinle() }
    }
}

/// Sekme çubuğunun üstünde 3 saniye görünen mesaj (Android'deki Snackbar).
private struct BildirimKutusu: View {
    @Binding var bildirim: Bildirim?

    var body: some View {
        ZStack {
            if let b = bildirim {
                HStack(spacing: 12) {
                    Text(b.metin).font(.subheadline)
                    if let geriAl = b.geriAl {
                        Spacer(minLength: 0)
                        Button("Geri al") { geriAl(); bildirim = nil }.bold()
                    }
                }
                .foregroundColor(.white)
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(Color.black.opacity(0.85), in: RoundedRectangle(cornerRadius: 10))
                .padding(.horizontal, 16)
                .padding(.bottom, 60)
                .accessibilityElement(children: .contain)
                .accessibilityIdentifier("bildirim")
                .transition(.move(edge: .bottom).combined(with: .opacity))
                .task(id: b.id) {
                    // VoiceOver kullananlar da duysun.
                    UIAccessibility.post(notification: .announcement, argument: b.metin)
                    try? await Task.sleep(for: .seconds(3))
                    if bildirim?.id == b.id { withAnimation { bildirim = nil } }
                }
            }
        }
        .animation(.easeOut(duration: 0.2), value: bildirim?.id)
    }
}

#Preview {
    ContentView()
}
