# OmuNot Android

OmuNot'un native Android sürümü (Kotlin + Jetpack Compose). iOS uygulamasının ([ios/](../ios/)) ekranları,
omunot.com'un hesap mantığı (`js/hesap.js`, `js/data.js`).

- Paket: `com.omunot.omunotsays` (Firebase `omunot` projesinde kayıtlı), versionCode 11
- Sayaç: Realtime Database `sayac/sayac`, web ve iOS ile ortak

## Kurulum
Gizliler git'e girmez, `~/developer/keys/omunot/` altında:

```bash
cp ~/developer/keys/omunot/keystore.properties .
cp ~/developer/keys/omunot/firebase/google-services.json app/
```

## Hesap testi
Golden örnekler web ile ortak: `../ortak/web_hesap_ornekleri.json` (bkz. [ortak/](../ortak/)).

```bash
./gradlew testDebugUnitTest
```
