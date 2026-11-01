// 2026 öncesi localStorage anahtarlarındaki notları yeni anahtarlara taşır
// ("xoxxGebelikNotu" → "uc-gebelik"). Her açılışta çalışır (birkaç okuma): eski sayfalar
// (omunot/js.js) ya da açık kalmış eski bir sekme eski anahtarlara yazmaya devam edebilir.
import { ORTAK_SATIRLAR, SINIFLAR, kutuId } from './data.js';

// Sınıf → [eski önek, { eski blok id'si: yeni blok id'si }]
const ESKI = {
  bir: ['', {
    UyumNotu: 'uyum', HayatinTemeliNotu: 'hayatinTemeli', YasamNotu: 'yasam', BeslenmeNotu: 'beslenme',
    EnerjiNotu: 'enerji', secmeliNotu: 'secmeli', MCDNotu: 'mcd', UremeNotu: 'ureme', HareketNotu: 'hareket',
  }],
  iki: ['xox', {
    buyumeGelismeDavranisNotu: 'buyume', beyinVeDuyularNotu: 'beyin', etikNotu: 'etik', zedelenmeNotu: 'zedelenme',
    biyolojikEtmenlerNotu: 'biyolojik', kanNotu: 'kan', savunmaNotu: 'savunma', xoxsecmeliNotu: 'secmeli',
  }],
  uc: ['xoxx', {
    xoxxProf: 'profesyonellik', xoxxGebelikNotu: 'gebelik', xoxxTravmaNotu: 'travma', xoxxSolDolNotu: 'solunumDolasim',
    xoxxEnfeksiyonNotu: 'enfeksiyon', xoxxYaslanmaNotu: 'yaslanma', xoxxEndokrinNotu: 'endokrin',
    xoxxSindirimNotu: 'sindirim', xoxxtumor: 'tumor', xoxxnoro: 'noro', xoxxSecmeliNotu: 'secmeli',
  }],
};
const ESKI_ORTAK = { mdu: 'MDUNotu', pdo: 'PDONotu', gelisim: 'GelisimNotu', final: 'FinalNotu', sonuc: 'sonuc' };

/** Kalemin eski anahtarı. Firebase'e giden not kayıtları (yeninotlar) eski biçimi korur. */
export function eskiAnahtar(sinif, anahtar) {
  const [onek, bloklar] = ESKI[sinif.id];
  return Object.keys(bloklar).find((k) => bloklar[k] === anahtar) ?? onek + ESKI_ORTAK[anahtar];
}

// Eski sayfanın yeni yazdığı değer daha günceldir; yeni anahtardakinin üstüne yazar.
function tasi(eski, yeni) {
  const deger = localStorage.getItem(eski);
  if (deger === null) return;
  localStorage.setItem(yeni, deger);
  localStorage.removeItem(eski);
}

export function eskiKayitlariTasi() {
  try {
    for (const sinif of SINIFLAR) {
      for (const anahtar of [...sinif.bloklar.map((b) => b.id), ...ORTAK_SATIRLAR.map((s) => s.anahtar), 'sonuc']) {
        tasi(eskiAnahtar(sinif, anahtar), kutuId(sinif, anahtar));
      }
    }
    // Açık sekme "1"/"2"/"3" yerine sınıf id'siyle tutulur. Hakkında sayfasındaki sekmeler
    // hâlâ "sekmesave" yazıp ana sayfaya döner.
    const sekme = SINIFLAR[Number(localStorage.getItem('sekmesave')) - 1];
    if (sekme) localStorage.setItem('sekme', sekme.id);
    // Artık kullanılmayan eski ayarlar
    for (const k of ['sekmesave', 'surum', 'gCheck', 'lang', 'mduvarmi']) localStorage.removeItem(k);
  } catch { /* özel pencere vb.: taşınacak kayıt da yoktur */ }
}
