# OmuNot iOS

OmuNot'un iOS sürümü (SwiftUI). Hesap mantığı `web/js/hesap.js`'in birebir karşılığı
(`omunot/Classes/Hesap.swift`).

## Kurulum
Uygulama `omunot/GoogleService-Info.plist` olmadan derlenmez. Kendi Firebase projenden
indirdiğin dosyayı oraya koy (sayaç o projeye bağlanır).

Proje sahibi için:
Firebase ayarı git'e girmez, `~/developer/keys/omunot/firebase/` altında:

```bash
cp ~/developer/keys/omunot/firebase/GoogleService-Info.ios.plist omunot/GoogleService-Info.plist
```

## Hesap testi
`HesapTest`, web ile ortak golden örnekleri okur: `../ortak/web_hesap_ornekleri.json`.

```bash
xcodebuild test -project omunot.xcodeproj -scheme omunot -destination 'platform=iOS Simulator,name=iPhone 17' -only-testing:omunotTests
```
