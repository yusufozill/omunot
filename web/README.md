# omunot.com

OMÜ Tıp öğrencileri için yıl sonu not hesaplama sitesi. Düz HTML + JS modülleri, derleme yok.

- `js/data.js`: sınıflar, bloklar, katsayılar, metinler
- `js/hesap.js`: yıl sonu hesabı (DOM'a dokunmaz)
- `js/app.js`: ekran
- `js/bulut.js`: Firebase sayaç

## Yerelde çalıştırma

Canlı veritabanına dokunmadan, Firebase emülatörüyle (Java gerekir):

```bash
firebase emulators:start --project demo-omunot
```

- Site: http://localhost:5050
- Emülatör paneli (sayaç, kaydedilen notlar): http://localhost:4000

`demo-` önekli proje gerçek Firebase'e hiç bağlanmaz; site localhost'ta açılınca
`js/bulut.js` veritabanı emülatörünü kullanır.
