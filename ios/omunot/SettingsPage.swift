//
//  SettingsPage.swift
//  omunot
//
//  Created by yusuf on 09.04.24.
//
//  Değişiklik anında kaydedilir ve ekranda sonucu olan sınıflar yeniden hesaplanır.
//

import SwiftUI

struct SettingsPage: View {
    @EnvironmentObject private var m: HesapModeli
    @State private var sifirlaSor = false

    /// Ayarların bir alanına bağlanan Binding; her yazım HesapModeli'nden geçer.
    private func bag<T>(_ yol: WritableKeyPath<Ayarlar, T>) -> Binding<T> {
        Binding(get: { m.ayarlar[keyPath: yol] }, set: { yeni in
            var a = m.ayarlar
            a[keyPath: yol] = yeni
            m.ayarlariDegistir(a)
        })
    }

    var body: some View {
        let a = m.ayarlar
        NavigationStack {
            Form {
                Section("Hesaplama detayları") {
                    SayiSecici(etiket: "Geçme notu", deger: bag(\.gecmeNotu))
                    Toggle("Geçme notunu \(sayiYaz(Double(a.gecmeNotu) - 0.5)) olarak hesapla", isOn: bag(\.gecmeVirgul))
                    SayiSecici(etiket: "Final barajı", deger: bag(\.finalBaraji))
                    Toggle("Final barajını \(sayiYaz(Double(a.finalBaraji) - 0.5)) olarak hesapla", isOn: bag(\.finalVirgul))
                }

                Section {
                    SayiSecici(etiket: "Blokların payı", deger: bag(\.blokPayi), onek: "%")
                    SayiSecici(etiket: "MDU", deger: bag(\.mduPayi), onek: "%")
                    SayiSecici(etiket: "PDÖ", deger: bag(\.pdoPayi), onek: "%")
                    SayiSecici(etiket: "Gelişim", deger: bag(\.gelisimPayi), onek: "%")
                    SayiSecici(etiket: "Final", deger: bag(\.finalPayi), onek: "%")
                } header: {
                    Text("Katsayı ayarları")
                } footer: {
                    VStack(alignment: .leading, spacing: 4) {
                        if a.payToplami != 100 {
                            Text("Payların toplamı %\(a.payToplami); 100 olmalı, yoksa ortalama yanlış çıkar.")
                        }
                        if a.finalPayi == 0 {
                            Text("Final payı 0 iken \"finalden kaç almalıyım\" hesaplanamaz.")
                        }
                    }
                    .foregroundColor(.red)
                }

                ForEach(SINIFLAR) { sinif in
                    Section("\(sinif.sekme) blok katsayıları") {
                        let agirliklar = a.agirliklar(sinif)
                        ForEach(sinif.bloklar.indices, id: \.self) { i in
                            SayiSecici(
                                etiket: sinif.bloklar[i].ad,
                                deger: Binding(get: { agirliklar[i] },
                                               set: { m.ayarlariDegistir(m.ayarlar.agirlikDegistir(sinif, i, $0)) }),
                                onek: "x"
                            )
                        }
                    }
                }

                Section {
                    Button("Ayarları varsayılana sıfırla", role: .destructive) { sifirlaSor = true }
                        .frame(maxWidth: .infinity)
                } footer: {
                    Link("2024 yılında Yusuf Özil tarafından tasarlanmıştır.", destination: URL(string: INSTAGRAM)!)
                        .font(.footnote)
                        .frame(maxWidth: .infinity, alignment: .trailing)
                        .padding(.top, 8)
                }
            }
            .navigationTitle("Ayarlar")
            .navigationBarTitleDisplayMode(.inline)
            .alert("Ayarlar sıfırlansın mı?", isPresented: $sifirlaSor) {
                Button("Sıfırla", role: .destructive) { m.ayarlariSifirla() }
                Button("Vazgeç", role: .cancel) {}
            } message: {
                Text("Geçme notu, final barajı ve tüm katsayılar varsayılana döner. Girdiğin notlar silinmez.")
            }
        }
    }
}

/// 0–100 arası tam sayı seçici.
private struct SayiSecici: View {
    let etiket: String
    @Binding var deger: Int
    var onek = ""

    var body: some View {
        Picker(etiket, selection: $deger) {
            ForEach(0...100, id: \.self) { Text("\(onek)\($0)").tag($0) }
        }
    }
}

#Preview {
    SettingsPage().environmentObject(HesapModeli())
}
