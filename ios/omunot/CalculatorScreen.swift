//
//  CalculatorScreen.swift
//  omunot
//
//  Created by yusuf on 07.04.24.
//
//  Hesap ekranı ve iki sekmenin ortak durumu (HesapModeli). Hesabın kendisi Classes/Hesap.swift'te.
//

import SwiftUI

/// Hesaplamadan sonra kutunun kenar rengi (web'deki data-durum).
enum AlanDurumu { case bos, fazla }

/// Ekranın altında kısa süre görünen mesaj; geriAl varsa "Geri al" düğmesi çıkar.
struct Bildirim: Identifiable {
    let id = UUID()
    let metin: String
    var geriAl: (() -> Void)? = nil
}

@MainActor
final class HesapModeli: ObservableObject {
    private let depo: Depo
    private lazy var sayacKaynagi = Sayac()

    @Published private(set) var sayac: Int?
    @Published private(set) var notlar: [String: String] = [:]
    @Published private(set) var sonuclar: [String: Gosterim] = [:]
    @Published private(set) var alanDurumlari: [String: AlanDurumu] = [:]
    @Published private(set) var sinifNo: Int
    @Published private(set) var gelisimVar: Bool
    @Published private(set) var ayarlar: Ayarlar
    @Published var bildirim: Bildirim?

    init(depo: Depo = Depo()) {
        self.depo = depo
        sinifNo = min(max(depo.sinifNo, 0), SINIFLAR.count - 1)
        gelisimVar = depo.gelisimVar
        ayarlar = depo.ayarlar
        for sinif in SINIFLAR {
            for id in sinif.girdiIdleri { notlar[id] = depo.notOku(id) }
            sonuclar[sinif.id] = depo.sonucOku(sinif.id)
        }
    }

    /// Ortak sayacı dinlemeye başlar (Firebase yapılandırıldıktan sonra çağrılmalı).
    func sayaciDinle() {
        sayacKaynagi.dinle { [weak self] deger in
            Task { @MainActor in self?.sayac = deger }
        }
    }

    func sinifSec(_ no: Int) {
        sinifNo = no
        depo.sinifNo = no
    }

    /// Geçersiz yazım (harf, 3'ten çok basamak, 2'den çok ondalık) kutuya girmez; o zaman false döner.
    @discardableResult
    func notGir(_ id: String, _ metin: String) -> Bool {
        guard gecerliYazim(metin) else { return false }
        notlar[id] = metin
        depo.notYaz(id, metin)
        alanDurumlari[id] = nil
        return true
    }

    /// "HESAPLA" basışı: hesapla + ortak sayacı artır.
    func hesaplaVeSay(_ sinif: Sinif) {
        hesaplaSinif(sinif)
        sayacKaynagi.arttir()
    }

    func gelisimDegistir(_ acik: Bool) {
        gelisimVar = acik
        depo.gelisimVar = acik
        // Web'deki gibi: kapanınca Gelişim kutuları boşalır (hesaba girmediği görünsün).
        if !acik { SINIFLAR.forEach { notGir($0.gelisim, "") } }
        bildirim = Bildirim(metin: gelisimUyarisi(acik: acik, ayarlar))
        sonuclariYenile()
    }

    func temizle(_ sinif: Sinif) {
        let eskiNotlar = Dictionary(uniqueKeysWithValues: sinif.girdiIdleri.map { ($0, notlar[$0] ?? "") })
        let eskiSonuc = sonuclar[sinif.id]
        if eskiNotlar.values.allSatisfy(\.isEmpty) && eskiSonuc == nil { return }

        sinif.girdiIdleri.forEach { notGir($0, "") }
        sonucKoy(sinif, nil)
        bildirim = Bildirim(metin: "\(sinif.sekme) notları temizlendi") { [weak self] in
            eskiNotlar.forEach { self?.notGir($0.key, $0.value) }
            self?.sonucKoy(sinif, eskiSonuc)
        }
    }

    func ayarlariDegistir(_ yeni: Ayarlar) {
        guard yeni != ayarlar else { return }
        ayarlar = yeni
        depo.ayarlar = yeni
        sonuclariYenile()
    }

    func ayarlariSifirla() { ayarlariDegistir(Ayarlar()) }

    private func hesaplaSinif(_ sinif: Sinif, mesajiKoru: Bool = false) {
        let girdi = Dictionary(uniqueKeysWithValues: sinif.girdiIdleri.map { ($0, notlar[$0] ?? "") })
        let sonuc = hesapla(sinif, girdi, gelisimVar: gelisimVar, ayarlar: ayarlar)

        // Kutuları işaretle: 100'ü aşan sarı, boş/0 kırmızı. "Finalden kaç" istenirken boş Final işaretlenmez.
        for (id, metin) in girdi {
            let atla = (id == sinif.gelisim && !gelisimVar) || (id == sinif.final && sonuc.durum == .gerek)
            let n = notOku(metin)
            if atla { alanDurumlari[id] = nil }
            else if n > 100 { alanDurumlari[id] = .fazla }
            else if n <= 0 { alanDurumlari[id] = .bos }
            else { alanDurumlari[id] = nil }
        }

        let onceki = sonuclar[sinif.id]
        let mesaj = mesajiKoru && onceki?.durum == sonuc.durum
            ? onceki!.mesaj
            : MESAJLAR[sonuc.durum]!.randomElement()!
        sonucKoy(sinif, Gosterim(sayi: sonuc.sayi, durum: sonuc.durum, mesaj: mesaj))
    }

    /// Ayar ya da Gelişim değişince ekranda sonucu olan sınıflar yeniden hesaplanır (sayaç artmaz).
    private func sonuclariYenile() {
        SINIFLAR.filter { sonuclar[$0.id] != nil }.forEach { hesaplaSinif($0, mesajiKoru: true) }
    }

    private func sonucKoy(_ sinif: Sinif, _ gosterim: Gosterim?) {
        sonuclar[sinif.id] = gosterim
        depo.sonucYaz(sinif.id, gosterim)
    }
}

// MARK: - Ekran

let turuncu = Color(hex: "e46938")
let yesil = Color(hex: "58975d")
private let kirmizi = Color(hex: "dc2a2a")
private let sari = Color(hex: "b1a928")

extension Durum {
    func renk(_ sema: ColorScheme) -> Color {
        switch self {
        case .fazla: return sema == .dark ? sari : Color(hex: "857f1a")
        case .kaldi, .baraj: return kirmizi
        case .gecti: return Color(hex: "56b856")
        case .gerek: return .primary
        }
    }
}

struct CalculatorScreen: View {
    @EnvironmentObject private var m: HesapModeli
    @FocusState private var odak: String?

    private var sinif: Sinif { SINIFLAR[m.sinifNo] }

    /// Klavyede "Sonraki": açık kutular arasında sırayla ilerler, sonuncuda hesaplar.
    private var siradakiAlan: String? {
        let acik = sinif.girdiIdleri.filter { $0 != sinif.gelisim || m.gelisimVar }
        guard let odak, let i = acik.firstIndex(of: odak), i + 1 < acik.count else { return nil }
        return acik[i + 1]
    }

    private func hesapla() {
        odak = nil
        m.hesaplaVeSay(sinif)
    }

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 0) {
                    Picker("Sınıf", selection: Binding(get: { m.sinifNo }, set: { odak = nil; m.sinifSec($0) })) {
                        ForEach(SINIFLAR.indices, id: \.self) { Text(SINIFLAR[$0].sekme).tag($0) }
                    }
                    .pickerStyle(.segmented)
                    .padding(.bottom, 16)

                    LazyVGrid(columns: [GridItem(.flexible(), spacing: 12), GridItem(.flexible(), spacing: 12)],
                              alignment: .leading, spacing: 10) {
                        ForEach(sinif.alanlar) { alan in
                            let gelisimAlani = alan.id == sinif.gelisim
                            NotHucresi(
                                alan: alan,
                                deger: alan.sabit.map(sayiYaz) ?? m.notlar[alan.id] ?? "",
                                durum: m.alanDurumlari[alan.id],
                                etkin: alan.sabit == nil && !(gelisimAlani && !m.gelisimVar),
                                odak: $odak,
                                onDegis: { m.notGir(alan.id, $0) }
                            ) {
                                if gelisimAlani {
                                    Toggle("Gelişim sınavı hesaba katılsın",
                                           isOn: Binding(get: { m.gelisimVar }, set: { m.gelisimDegistir($0) }))
                                        .labelsHidden()
                                        .tint(yesil)
                                        .scaleEffect(0.8)
                                }
                            }
                        }
                    }
                    // Sınıf değişince kutular baştan kurulsun.
                    .id(sinif.id)

                    SonucAlani(gosterim: m.sonuclar[sinif.id], sayac: m.sayac,
                               onHesapla: hesapla, onTemizle: { odak = nil; m.temizle(sinif) })
                        .padding(.top, 8)

                    BilgiNotu(notlar: bilgiNotlari(m.ayarlar))
                        .padding(.top, 16)
                }
                .padding(16)
            }
            .scrollDismissesKeyboard(.interactively)
            .toolbar(.hidden, for: .navigationBar)
            .toolbar {
                ToolbarItemGroup(placement: .keyboard) {
                    if let siradaki = siradakiAlan {
                        Button("Sonraki") { odak = siradaki }
                    }
                    Spacer()
                    Button("Hesapla", action: hesapla).bold()
                }
            }
        }
    }
}

private struct NotHucresi<Ek: View>: View {
    let alan: Alan
    let deger: String
    let durum: AlanDurumu?
    let etkin: Bool
    var odak: FocusState<String?>.Binding
    let onDegis: (String) -> Bool
    @ViewBuilder let ek: () -> Ek

    /// Kutudaki yazı; geçersiz yazımın yalnız geçerli baş kısmı kalır.
    @State private var metin = ""

    private var kenar: Color {
        switch durum {
        case .fazla: return sari
        case .bos: return kirmizi
        case nil: return yesil
        }
    }

    var body: some View {
        VStack(alignment: .leading, spacing: 4) {
            HStack(spacing: 4) {
                Text(alan.ad)
                    .font(.subheadline)
                    .lineLimit(2)
                    .minimumScaleFactor(0.8)
                    .frame(maxWidth: .infinity, alignment: .leading)
                ek()
            }
            .frame(minHeight: 40)

            TextField("—", text: $metin)
                .keyboardType(.decimalPad)
                .multilineTextAlignment(.center)
                .font(.title3)
                .padding(.vertical, 12)
                .padding(.horizontal, 8)
                .background(
                    RoundedRectangle(cornerRadius: 8)
                        .stroke(kenar, lineWidth: odak.wrappedValue == alan.id ? 2 : 1)
                )
                .disabled(!etkin)
                .opacity(etkin ? 1 : 0.5)
                .focused(odak, equals: alan.id)
                .accessibilityLabel("\(alan.ad) notu")
        }
        .onAppear { metin = deger }
        .onChange(of: deger) { _, yeni in if yeni != metin { metin = yeni } }
        // Hızlı yazımda birkaç tuş tek değişiklik olarak gelebilir; bir önceki metne dönmek
        // geçerli haneleri de silerdi. Onun yerine geçerli en uzun baş kısım tutulur.
        .onChange(of: metin) { _, yeni in
            if yeni != deger && !onDegis(yeni) { metin = gecerliOnEk(yeni) }
        }
    }
}

private struct SonucAlani: View {
    let gosterim: Gosterim?
    let sayac: Int?
    let onHesapla: () -> Void
    let onTemizle: () -> Void
    @Environment(\.colorScheme) private var sema

    var body: some View {
        HStack(alignment: .center) {
            VStack(alignment: .leading, spacing: 0) {
                if let g = gosterim {
                    if g.durum == .gerek { Text(FINALDEN).font(.headline) }
                    Text(ikiHane(g.sayi))
                        .font(.system(size: 44, weight: .bold))
                        .minimumScaleFactor(0.6)
                        .lineLimit(1)
                    Text(g.mesaj)
                        .font(.custom("IndieFlower", size: 30))
                        .foregroundColor(g.durum.renk(sema))
                } else {
                    Text("Notlarını gir, HESAPLA'ya bas")
                        .font(.callout)
                        .foregroundColor(.secondary)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .accessibilityElement(children: .combine)
            .accessibilityIdentifier("sonuc")

            VStack(spacing: 4) {
                Button(action: onHesapla) {
                    VStack(spacing: 2) {
                        Text("HESAPLA")
                        Text(sayac.map(String.init) ?? "???")
                            .font(.system(size: 12))
                            .foregroundColor(.black)
                            .padding(.horizontal, 6)
                            .background(Color.white)
                            .clipShape(Capsule())
                    }
                }
                .buttonStyle(HesaplaButtonStyle())
                .accessibilityLabel("Hesapla")
                .accessibilityIdentifier("hesaplaDugmesi")
                .accessibilityValue("Toplam hesaplama: \(sayac.map(String.init) ?? "bilinmiyor")")

                Button(action: onTemizle) {
                    Image(systemName: "trash")
                        .font(.system(size: 22))
                        .frame(width: 44, height: 44)
                }
                .foregroundColor(.secondary)
                .accessibilityLabel("Notları temizle")
            }
        }
    }
}

/// 5 saniyede bir değişen bilgi notu (web'deki .bilgi).
private struct BilgiNotu: View {
    let notlar: [String]
    @State private var sira = 0

    var body: some View {
        Text(notlar.isEmpty ? "" : notlar[sira % notlar.count])
            .font(.footnote)
            .foregroundColor(.blue)
            .frame(maxWidth: .infinity, alignment: .leading)
            .id(sira)
            .transition(.opacity)
            .task(id: notlar.count) {
                while !Task.isCancelled {
                    try? await Task.sleep(for: .seconds(5))
                    guard notlar.count > 1 else { continue }
                    withAnimation { sira = (sira + 1 + Int.random(in: 0..<(notlar.count - 1))) % notlar.count }
                }
            }
    }
}

/// Yuvarlak turuncu düğme: basılınca beyaz kareye döner.
struct HesaplaButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.custom("IndieFlower", size: 22))
            .frame(width: 100, height: 100)
            .foregroundColor(configuration.isPressed ? turuncu : .white)
            .background(configuration.isPressed ? Color.white : turuncu)
            .clipShape(RoundedRectangle(cornerRadius: configuration.isPressed ? 0 : 50))
            .overlay(
                RoundedRectangle(cornerRadius: configuration.isPressed ? 0 : 50)
                    .stroke(turuncu, lineWidth: configuration.isPressed ? 1 : 0)
            )
            .animation(.easeOut(duration: 0.15), value: configuration.isPressed)
    }
}

#Preview {
    CalculatorScreen().environmentObject(HesapModeli())
}
