// Yıl sonu hesabı. DOM'a dokunmaz; ekran ve depolama app.js'te.
import {
  BLOK_PAYI,
  FINAL_BARAJI,
  FINAL_CARPANI,
  GECME_NOTU,
  ORTAK_AGIRLIK,
  YIL_SONU_MAX,
  ortakIdler,
} from './data.js';

/**
 * @param sinif      data.js'teki SINIFLAR kaydı
 * @param girdi      { inputId: kutudaki metin }; boş kutu 0 sayılır
 * @param gelisimVar Gelişim sınavı hesaba katılıyor mu (kapalıysa not 100/95 ile çarpılır)
 * @returns {{ sonuc: string, sayi: string|number, durum: 'fazla'|'gecti'|'kaldi'|'gerek'|'baraj' }}
 *   sonuc: yıl sonu ortalaması (2 hane), sayi: ekranda büyük gösterilecek değer
 */
export function hesapla(sinif, girdi, gelisimVar) {
  const id = ortakIdler(sinif);
  const not = (anahtar) => Number(girdi[anahtar] ?? '');

  let toplam = 0;
  let agirlik = 0;
  for (const blok of sinif.bloklar) {
    toplam += blok.agirlik * (blok.sabit ?? not(blok.id));
    agirlik += blok.agirlik;
  }

  const final = not(id.final);
  let sonuc =
    ((toplam / agirlik) * BLOK_PAYI +
      not(id.mdu) * ORTAK_AGIRLIK.mdu +
      not(id.pdo) * ORTAK_AGIRLIK.pdo +
      not(id.gelisim) * ORTAK_AGIRLIK.gelisim +
      final * ORTAK_AGIRLIK.final) /
    100;
  if (!gelisimVar) sonuc = (sonuc * 100) / 95;
  sonuc = sonuc.toFixed(2);

  // Final kutusu boş (ya da 0) ise "finalden kaç almalıyım" hesaplanır.
  if (final === 0) {
    const gereken = ((GECME_NOTU - sonuc) * FINAL_CARPANI).toFixed(2);
    if (gereken < -22) return { sonuc, sayi: sonuc, durum: 'fazla' };
    if (gereken <= FINAL_BARAJI) return { sonuc, sayi: FINAL_BARAJI, durum: 'gerek' };
    if (gereken <= 100) return { sonuc, sayi: gereken, durum: 'gerek' };
    return { sonuc, sayi: sonuc, durum: 'kaldi' };
  }

  let durum = 'fazla';
  if (sonuc < GECME_NOTU) durum = 'kaldi';
  else if (sonuc <= YIL_SONU_MAX) durum = final < FINAL_BARAJI ? 'baraj' : 'gecti';
  return { sonuc, sayi: sonuc, durum };
}

// Hiçbir not girilmemişken çıkan değer; açılışta eski sonucu gösterip göstermemeye karar verir.
export const bosSonuc = (sinif) => hesapla(sinif, {}, true).sonuc;
