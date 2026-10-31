// Sitenin tüm içeriği ve katsayıları burada. Yeni blok, sınıf ya da bağlantı eklemek
// için yalnız bu dosya değişir. (Hesap: hesap.js, ekran: app.js, yönlendirme: 404.html)

// ---- Hesap katsayıları -------------------------------------------------------

export const GECME_NOTU = 139 / 2; // 69,5 — yıl sonu geçme notu
export const FINAL_BARAJI = 119 / 2; // 59,5 — finalden alınması gereken en az not
export const FINAL_CARPANI = 100 / 25; // final %25 katkı yapar: gereken final = (geçme − not) × 4
export const YIL_SONU_MAX = 100;
export const BLOK_PAYI = 50; // bloklar toplamın %50'sini oluşturur
export const ORTAK_AGIRLIK = { mdu: 10, pdo: 10, gelisim: 5, final: 25 }; // diğer %50

// ---- Sınıflar ----------------------------------------------------------------
// id'ler hem input id'si hem localStorage anahtarıdır; kullanıcıların kayıtlı notları
// bozulmasın diye eski adlarıyla duruyor. `sabit`: kutusu yok, notu hep bu değerdir.

export const SINIFLAR = [
  {
    id: 'bir',
    onek: '',
    sekme: '1. Sınıf',
    satirYuksekligi: 41,
    sayiUstBosluk: 0,
    ortakSonek: '',
    bloklar: [
      { id: 'UyumNotu', ad: 'Uyum', agirlik: 1, sabit: 100 },
      { id: 'HayatinTemeliNotu', ad: 'Hayatin Temeli:', agirlik: 4 },
      { id: 'YasamNotu', ad: 'Yaşam', agirlik: 6 },
      { id: 'BeslenmeNotu', ad: 'Beslenme', agirlik: 6 },
      { id: 'EnerjiNotu', ad: 'Enerji', agirlik: 6 },
      { id: 'secmeliNotu', ad: 'Seçmeli Blok', agirlik: 3 },
      { id: 'MCDNotu', ad: 'MÇD', agirlik: 6 },
      { id: 'UremeNotu', ad: 'Üreme', agirlik: 6 },
      { id: 'HareketNotu', ad: 'Hareket ve kontrol', agirlik: 10 },
    ],
  },
  {
    id: 'iki',
    onek: 'xox',
    sekme: '2. Sınıf',
    satirYuksekligi: 45,
    sayiUstBosluk: 1,
    ortakSonek: ':',
    bloklar: [
      { id: 'buyumeGelismeDavranisNotu', ad: 'Büyüme, Gelişme Ve Davranış:', agirlik: 7 },
      { id: 'beyinVeDuyularNotu', ad: 'Beyin Ve Duyular:', agirlik: 10 },
      { id: 'etikNotu', ad: 'Etik Ve Tıbbi Araştırma Teknikleri:', agirlik: 7 },
      { id: 'zedelenmeNotu', ad: 'Zedelenme:', agirlik: 5 },
      { id: 'biyolojikEtmenlerNotu', ad: 'Biyolojik Etmenler:', agirlik: 7 },
      { id: 'kanNotu', ad: 'Kan:', agirlik: 7 },
      { id: 'savunmaNotu', ad: 'Savunma:', agirlik: 7 },
      { id: 'xoxsecmeliNotu', ad: 'Seçmeli:', agirlik: 4 },
    ],
  },
  {
    id: 'uc',
    onek: 'xoxx',
    sekme: '3. Sınıf',
    satirYuksekligi: 36,
    sayiUstBosluk: 1,
    ortakSonek: ':',
    bloklar: [
      { id: 'xoxxProf', ad: 'Tıpta Profesyonellik', agirlik: 2 },
      { id: 'xoxxGebelikNotu', ad: 'Gebelik Ve Doğum:', agirlik: 5 },
      { id: 'xoxxTravmaNotu', ad: 'Travma:', agirlik: 5 },
      { id: 'xoxxSolDolNotu', ad: 'Solunum Ve Dolaşım:', agirlik: 6 },
      { id: 'xoxxEnfeksiyonNotu', ad: 'Enfeksiyon:', agirlik: 6 },
      { id: 'xoxxYaslanmaNotu', ad: 'Yaşlanma:', agirlik: 5 },
      { id: 'xoxxEndokrinNotu', ad: 'Endokrin Sistem:', agirlik: 6 },
      { id: 'xoxxSindirimNotu', ad: 'Sindirim Sistemi:', agirlik: 5 },
      { id: 'xoxxtumor', ad: 'Tümörler:', agirlik: 5 },
      { id: 'xoxxnoro', ad: 'Nöropsikiyatriye Giriş:', agirlik: 5 },
      { id: 'xoxxSecmeliNotu', ad: 'Seçmeli:', agirlik: 4 },
    ],
  },
];

// Her sınıfta bloklardan sonra gelen ortak kalemler; id'ler sınıfın önekinden türer.
export const ORTAK_SATIRLAR = [
  { anahtar: 'mdu', ad: 'MDU' },
  { anahtar: 'pdo', ad: 'PDÖ' },
  { anahtar: 'gelisim', ad: 'Gelişim' }, // yanında aç/kapa kutusu olur
  { anahtar: 'final', ad: 'Final' },
];

// Sınıfın ortak kalemlerinin input id'leri, Gelişim kutusunun id'si ve sonuç anahtarı
export const ortakIdler = (sinif) => ({
  mdu: `${sinif.onek}MDUNotu`,
  pdo: `${sinif.onek}PDONotu`,
  gelisim: `${sinif.onek}GelisimNotu`,
  final: `${sinif.onek}FinalNotu`,
  gelisimKutusu: `${sinif.onek}gCheck`,
  sonuc: `${sinif.onek}sonuc`,
});

// ---- Metinler ----------------------------------------------------------------
// Sonuç mesajları her hesapta bu listelerden rastgele seçilir.

export const MESAJLAR = {
  fazla: ['ABARTMA', 'YOK ARTIK!', 'NASIL', 'KEŞKE'],
  gecti: ['Geçtin', 'Alkış', 'Tebrikler'],
  kaldi: ['üzgünüm', 'Omü Zor!', 'olmadı :('],
  gerek: ['alman lazım', 'alman gerekli'],
  baraj: ['Final barajı var'],
};
export const FINALDEN = 'Finalden';

export const BILGI_NOTLARI = [
  'Geçme notu 69,5 - Final barajı 59,5 olarak hesaplanır. Bu ölçüm Finalden almanız gereken puanı 2 puan daha az hesaplar',
  'Finalden kaç almanız gerektiğini final kutucuğunu boş bırakarak hesaplayabilirsiniz :)',
  "Katkılarınızı yusufozill@omunot.com'a iletebilirsiniz",
  'Gelişim sınavı kutucuğu boşken notunuz 100/95 ile çarpılır',
];

export const GELISIM_UYARILARI = {
  kapali: 'Gelişim Sınavı Kaldırıldı, Notunuz 100/95 ile çarpılacak',
  acik: 'Gelişim sınavı etkisi eskisi gibi %5 olarak hesaplanacak',
};

export const ALT_BILGI = '15.12.2022 | tarihinde güncellenmiştir. Bu sitede yeralan bilgiler defalarca gözden geçirilmesine rağmen doğruluk garantisi verememektedir.';

// ---- Uygulama rozetleri ------------------------------------------------------

export const UYGULAMALAR = [
  {
    ad: "Google Play'den alın",
    href: 'https://play.google.com/store/apps/details?id=com.omunot.omunotsays&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1',
    resim: 'https://i.hizliresim.com/ll9py03.png',
  },
  { ad: 'omunot exam', href: 'https://exam.omunot.com', resim: 'https://exam.omunot.com/icons/icon-512.png' },
  { ad: "Google Play'den alın", href: 'https://play.google.com/store/apps/details?id=com.omunot.epikriz', resim: 'appexam.png' },
];

// ---- Ders videosu bağlantıları -----------------------------------------------
// Hem ana sayfadaki listeyi hem de omunot.com/<slug> yönlendirmelerini (404.html) besler.
// `ad` olmayan kayıt listede görünmez, yalnız yönlendirme olarak çalışır.

const yt = (liste) => `https://www.youtube.com/playlist?list=${liste}`;

export const LINK_SUTUNLARI = [
  {
    baslik: '1.Sınıf',
    ogeler: [
      { slug: 'ureme', ad: 'Üreme', url: yt('PLU0ee0XMz8ZXU2DQvbbAb2kICQBmDTTu3') },
      { slug: 'hareket', ad: 'Hareket', url: yt('PLU0ee0XMz8ZXSqTdctSrBK1ZhloV18ih5') },
      { altBaslik: '2.Sınıf' },
      { slug: 'savunma', ad: 'Savunma', url: yt('PLU0ee0XMz8ZVyUi8L4n28me3D-H88OI1w') },
      { slug: 'biyolojik', ad: 'Biyolojik Etmenler', url: yt('PLU0ee0XMz8ZVlGKnOeyEeVRXnTu2PbUyB') },
    ],
  },
  {
    baslik: '3.Sınıf',
    ogeler: [
      { slug: 'gebelik', ad: 'Gebelik', url: yt('PLU0ee0XMz8ZX2vr7fRyD6BN6F9mdAg6gX') },
      { slug: 'tumor', ad: 'Tümorler', url: yt('PLU0ee0XMz8ZWWjWWM6jwT8V5JyZjiU-Ji') },
      { slug: 'soldol', ad: 'Sol-Dol', url: yt('PLU0ee0XMz8ZXstkJmMUMawIBmG-Rdv0JT') },
      { slug: 'travma', ad: 'Travma', url: yt('PLU0ee0XMz8ZWkrFR_toaAsx_5bEdwHBu7') },
      { slug: 'enfeksiyon', ad: 'Enfeksiyon', url: yt('PLU0ee0XMz8ZXMQ95pzZoubsI2t20zzXYn') },
      { slug: 'endokrin', ad: 'Endokrin', url: yt('PLU0ee0XMz8ZXEWKQC92889JZHx-s4hrLZ') },
      { slug: 'sindirim', ad: 'Sindirim', url: yt('PLU0ee0XMz8ZUc0QmYXbYb8GBxHZhYoJki') },
      { slug: 'yaslanma', ad: 'Yaşlanma', url: yt('PLU0ee0XMz8ZV3vN6AAXjiPialIqp9P3n_') },
      { slug: 'noro', ad: 'Nöro', url: yt('PLU0ee0XMz8ZWhaOV9ahcyX6btr244ZQ2Q') },
    ],
  },
  {
    baslik: '4.Sınıf',
    ogeler: [
      { slug: 'pediatri', ad: 'Pediatri', url: yt('PLU0ee0XMz8ZUilfmctlSeBhSOzejjATC-') },
      { slug: 'endo', ad: 'Endokrin', url: yt('PLU0ee0XMz8ZUzYIqVzuQYUi79iuchxgJ2') },
      { slug: 'gis', ad: 'Gis', url: yt('PLU0ee0XMz8ZWQZpJW2BsVtYVi6FwPqFpC') },
      { slug: 'soldol4', ad: 'SolDol', url: yt('PLU0ee0XMz8ZX0MwwG8H1QsR8CQvdkwTe_') },
    ],
  },
  {
    baslik: '5.Sınıf',
    ogeler: [
      { slug: 'acil', ad: 'Acil', url: yt('PLU0ee0XMz8ZVX3s5kZdAxFVp6aV228O74') },
      { slug: 'agri', ad: 'Ağrı', url: yt('PLU0ee0XMz8ZXVr9VaGzWQ-5EQBeY8BY6K') },
      { slug: 'sinirsistemi', ad: 'Sinir Sistemi', url: yt('PLU0ee0XMz8ZWlPbU0ZPDf_h7rbKW180Ms') },
      { slug: 'kbb', ad: 'KBB', url: yt('PLU0ee0XMz8ZXsdKDg7PlOROI7U5f3a9bu') },
      { slug: 'goz', ad: 'GÖZ', url: yt('PLU0ee0XMz8ZWBuFKfPefRnsOG7aWwMr3f') },
      { slug: 'dokuntu', ad: 'Döküntü', url: yt('PLU0ee0XMz8ZVMdWSgomAzpJQT53DaIM8a') },
      { slug: 'psikiyatri', ad: 'Psikiyatri', url: yt('PLU0ee0XMz8ZXYQbnmParal1sQZz-ddg8e') },
      { slug: 'kadindogum', ad: 'Kadın Doğum', url: yt('PLU0ee0XMz8ZUJEPCjiho6D2DFAeYhCCpf') },
    ],
  },
];

// Ana sayfada listelenmeyen ama eskiden çalışan yönlendirmeler (omunot.com/<slug>).
export const GIZLI_YONLENDIRMELER = [
  { slug: 'exam', url: 'https://play.google.com/store/apps/details?id=com.omunot.epikriz' },
  { slug: 'donem4', url: 'https://drive.google.com/drive/folders/1yhU5brtDTwfU1BsizXwtCKIDQ1B4PVBo?usp=sharing' },
  { slug: 'turnuva', url: 'https://docs.google.com/document/d/1tkPf_yZVs82UXNMbmG3VujZxH9SwEL6bb3hkw9eR_Dg/edit?usp=sharing' },
];

const TUM_LINKLER = [
  ...LINK_SUTUNLARI.flatMap((s) => s.ogeler).filter((o) => o.slug),
  ...GIZLI_YONLENDIRMELER,
];

// "/Hareket", "/GÖZ", "/ureme/" gibi bir yolu hedef adrese çevirir; yoksa null.
// Büyük/küçük harf ve Türkçe karakterler (ö, ü, ı, ş, ç, ğ) önemsenmez.
const sadelestir = (s) =>
  s.toLocaleLowerCase('tr').replace(/ı/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export function yonlendirmeHedefi(yol) {
  let slug;
  try { slug = decodeURIComponent(yol); } catch { return null; }
  slug = sadelestir(slug.replace(/^\/+|\/+$/g, ''));
  return TUM_LINKLER.find((l) => l.slug === slug)?.url ?? null;
}
