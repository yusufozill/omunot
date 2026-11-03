# Ortak hesap örnekleri

`web_hesap_ornekleri.json`: web'in `js/hesap.js`'i rastgele (sabit tohumlu) 600 not girdisiyle
çalıştırılarak üretilir. Android (`HesapTest.kt`) ve iOS (`HesapTest.swift`) hesabı bu örneklerin
hepsinde web ile aynı sonucu vermek zorunda.

Web hesabı değişince yeniden üret, sonra iki platformun testlerini çalıştır:

```bash
node ortak/uret.mjs
```

Her örnekte `notlar`, kutuların ekrandaki sırasıdır: sabit olmayan bloklar, sonra MDU, PDÖ,
Gelişim, Final.
