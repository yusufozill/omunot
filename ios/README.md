# OmuNot iOS

OmuNot'un iOS sürümü (SwiftUI). Hesap mantığı web'in `js/hesap.js`'inin birebir karşılığı
(`omunot/Classes/Hesap.swift`).

## Kurulum
Firebase ayarı git'e girmez, `~/developer/keys/omunot/firebase/` altında:

```bash
cp ~/developer/keys/omunot/firebase/GoogleService-Info.ios.plist omunot/GoogleService-Info.plist
```

## Hesap testi
`HesapTest`, web ile ortak golden örnekleri okur: `../ortak/web_hesap_ornekleri.json`.

```bash
xcodebuild test -project omunot.xcodeproj -scheme omunot -destination 'platform=iOS Simulator,name=iPhone 17' -only-testing:omunotTests
```
