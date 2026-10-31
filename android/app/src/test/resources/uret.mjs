// Web hesap.js'ten golden örnekler üretir. Kullanım: node uret.mjs <hesap.js yolu> <çıktı>
import { writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const hesapYolu = process.argv[2];
const { hesapla } = await import(pathToFileURL(hesapYolu).href);
const { SINIFLAR, ortakIdler } = await import(pathToFileURL(hesapYolu.replace('hesap.js', 'data.js')).href);

let tohum = 12345;
const rnd = () => ((tohum = (tohum * 1103515245 + 12345) % 2147483648) / 2147483648);
const deger = () => {
  const r = rnd();
  if (r < 0.12) return '';
  if (r < 0.17) return '0';
  if (r < 0.22) return String(100 + Math.floor(rnd() * 40));
  if (r < 0.55) return String(Math.floor(rnd() * 101));
  return (Math.floor(rnd() * 10000) / 100).toString();
};
const ornekler = [];
for (let i = 0; i < 600; i++) {
  const sinif = SINIFLAR[i % 3];
  const id = ortakIdler(sinif);
  const gelisimVar = rnd() > 0.3;
  const girdi = {};
  for (const b of sinif.bloklar) if (!b.sabit) girdi[b.id] = deger();
  // senaryolar: 0 rastgele, 1 yüksek + final boş, 2 rastgele + final boş,
  // 3 yüksek + final 30–100 (baraj/geçti), 4 hepsi 100+ (fazla), 5 hepsi 100+ ve final boş
  const mod = i % 6;
  const aralik = (a, b) => String(a + Math.floor(rnd() * (b - a + 1)));
  const yuksek = mod === 1 || mod === 3;
  const asiri = mod === 4 || mod === 5;
  for (const b of sinif.bloklar) if (!b.sabit) {
    if (yuksek) girdi[b.id] = aralik(70, 100);
    if (asiri) girdi[b.id] = aralik(110, 199);
  }
  girdi[id.mdu] = yuksek ? aralik(70, 100) : asiri ? aralik(110, 199) : deger();
  girdi[id.pdo] = yuksek ? aralik(70, 100) : asiri ? aralik(110, 199) : deger();
  girdi[id.gelisim] = gelisimVar ? (yuksek ? aralik(60, 100) : asiri ? aralik(110, 199) : deger()) : '';
  girdi[id.final] = mod === 1 || mod === 2 || mod === 5 ? '' : mod === 3 ? aralik(30, 100) : mod === 4 ? aralik(110, 199) : deger();
  const s = hesapla(sinif, girdi, gelisimVar);
  ornekler.push({ sinif: sinif.id, gelisimVar, girdi, sonuc: Number(s.sonuc), sayi: Number(s.sayi), durum: s.durum });
}
writeFileSync(process.argv[3], JSON.stringify(ornekler, null, 1));
const say = {}; ornekler.forEach((o) => (say[o.durum] = (say[o.durum] ?? 0) + 1));
console.log(ornekler.length, say);
