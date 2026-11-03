# OmuNot

OMÜ Tıp öğrencileri için yıl sonu not hesaplama: [omunot.com](https://omunot.com), Android ve iOS.
Üçü aynı hesabı yapar; hesap kuralının kaynağı web'deki `web/js/hesap.js`.

| Klasör | İçerik |
|---|---|
| [`web/`](web/) | omunot.com — düz HTML + JS modülleri, Firebase Hosting |
| [`android/`](android/) | native Android (Kotlin + Jetpack Compose) |
| [`ios/`](ios/) | native iOS (SwiftUI) |
| [`ortak/`](ortak/) | web hesabından üretilen golden örnekler; Android ve iOS testleri bunu okur |

Hesap değişikliği üç platformda birlikte yapılır: önce `web/js/hesap.js`, sonra
`node ortak/uret.mjs`, sonra Android ve iOS hesapları ve testleri.

## Web'i yayına alma

`firebase.json` `web/` içindedir; komutlar orada çalıştırılır, böylece yalnız `web/` yayına çıkar:

```bash
cd web && firebase deploy --only hosting
```

Gizli dosyalar (imza anahtarları, Firebase platform ayarları) repoda değildir; her platformun
README'si nereden kopyalanacağını yazar.

## Lisans

MIT ([LICENSE](LICENSE)).
