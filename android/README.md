# omunot-android

OmuNot'un native Android sürümü (Kotlin + Jetpack Compose). iOS uygulamasının (omunot-ios) ekranları,
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
`app/src/test/resources/web_hesap_ornekleri.json`, web'in `hesap.js`'i çalıştırılarak üretildi.
Web hesabı değişirse yeniden üret:

```bash
node app/src/test/resources/uret.mjs ../omunot/js/hesap.js app/src/test/resources/web_hesap_ornekleri.json
```

```bash
./gradlew testDebugUnitTest
```
