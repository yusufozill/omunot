import {
  ALT_BILGI,
  BILGI_NOTLARI,
  FINALDEN,
  GELISIM_UYARILARI,
  LINK_SUTUNLARI,
  MESAJLAR,
  ORTAK_SATIRLAR,
  SINIFLAR,
  UYGULAMALAR,
  kutuId,
} from './data.js';
import { eskiAnahtar, eskiKayitlariTasi } from './gecis.js';
import { bosSonuc, hesapla } from './hesap.js';

// Sayfa yapısı (index.html'deki main#uygulama'nın içi bu dosyada kurulur):
//   nav.sekmeler > button.sekme                       sınıf başına bir sekme
//   section.panel[data-sinif] > .panel-zemin > .hesap-kutusu
//     h2.hesap-basligi
//     form.not-tablosu > .not-satiri > label.not-adi + .not-hucresi > input.not-kutusu
//     .sonuc-alani > .final-yazisi, .sonuc-sayisi, .sonuc-mesaji, .dugmeler, p.bilgi-notu
//   section.uygulamalar, section.ders-videolari

// ---- Yardımcılar -------------------------------------------------------------

const depo = {
  al: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  koy: (k, v) => { try { localStorage.setItem(k, v); } catch { /* özel pencere vb. */ } },
  sil: (k) => { try { localStorage.removeItem(k); } catch { /* özel pencere vb. */ } },
};
const rastgele = (liste) => liste[Math.floor(Math.random() * liste.length)];
const bekle = (ms) => new Promise((tamam) => setTimeout(tamam, ms));

// Firebase isteğe bağlı: yüklenemezse (engelleyici, ağ) hesap makinesi yine çalışır.
const bulut = import('./bulut.js')
  .then((m) => m.bulutuBaslat(sayaciGoster))
  .catch((hata) => { console.warn('Firebase yüklenemedi:', hata); return null; });

// ---- Ekran şablonları --------------------------------------------------------

const kutuHtml = (id, ek = '') =>
  `<input class="not-kutusu" id="${id}" name="${id}" type="number" min="0" max="100" title="Notunuzu girin"${ek}>`;

const satirHtml = (ad, kutu) => `<div class="not-satiri">${ad}<div class="not-hucresi">:${kutu}</div></div>`;

const etiketHtml = (id, ad) => `<label class="not-adi" for="${id}">${ad}</label>`;

function panelHtml(sinif, acik) {
  const bloklar = sinif.bloklar.map((b) => {
    const id = kutuId(sinif, b.id);
    return satirHtml(etiketHtml(id, b.ad), kutuHtml(id, b.sabit ? ` placeholder="${b.sabit}" readonly data-sabit` : ''));
  });
  const ortak = ORTAK_SATIRLAR.map(({ anahtar, ad }) => {
    const id = kutuId(sinif, anahtar);
    const etiket = ad + sinif.ortakSonek;
    if (anahtar !== 'gelisim') return satirHtml(etiketHtml(id, etiket), kutuHtml(id));
    // Gelişim satırında etiketin yanında sınavı aç/kapa kutusu durur.
    const anahtarKutusu = '<input class="gelisim-anahtari" type="checkbox" checked title="Gelişim sınavı hesaba katılsın" aria-label="Gelişim sınavı hesaba katılsın">';
    return satirHtml(`<div class="not-adi"><label for="${id}">${etiket}</label> ${anahtarKutusu}</div>`, kutuHtml(id));
  });

  return `<section class="panel" id="panel-${sinif.id}" role="tabpanel" aria-labelledby="sekme-${sinif.id}" data-sinif="${sinif.id}"${acik ? '' : ' hidden'}>
<div class="panel-zemin" style="--satir:${sinif.satirYuksekligi}px;--sayi-ust:${sinif.sayiUstBosluk}px">
<div class="hesap-kutusu">
<h2 class="hesap-basligi">Not Hesaplama</h2>
<form class="not-tablosu">
<div class="not-tablosu-basligi"><div class="not-adi">Bloklar:</div><div>Notlar:</div></div>
${[...bloklar, ...ortak].join('\n')}
</form>
<div class="sonuc-alani">
<div class="final-yazisi"></div>
<div class="sonuc-sayisi"><span class="sonuc-degeri"></span></div>
<div class="sonuc-mesaji" aria-live="polite"><span class="sonuc-metni"></span></div>
<div class="dugmeler">
<div class="hesapla-dugmesi" role="button" tabindex="0">
<div class="hesapla-yazisi">HESAPLA</div>
<div class="sayac">???</div>
</div>
<div class="temizle-dugmesi" role="button" tabindex="0" title="Notları temizle" aria-label="Notları temizle">
<svg class="cop-kapagi" xmlns="http://www.w3.org/2000/svg"><image width="23px" height="4px" x="0px" y="0px" href="icons/kapak.png"></image></svg>
<svg class="cop-kovasi" xmlns="http://www.w3.org/2000/svg" width="1in" height="1in"><image width="23px" height="23px" x="0px" y="0px" href="icons/kova.png"></image></svg>
</div>
</div>
<p class="bilgi-notu"></p>
</div>
</div>
</div>
</section>`;
}

function dersVideolariHtml() {
  const oge = (o) =>
    o.slug
      ? `<li><a class="ders-baglantisi" href="${o.url}">•${o.ad}</a></li>`
      : `<li class="ders-ara-basligi">${o.altBaslik}</li>`;
  return `<section class="uygulamalar">
${UYGULAMALAR.map((u) => `<a href="${u.href}"><img alt="${u.ad}" src="${u.resim}"></a>`).join('\n')}
</section>
<section class="ders-videolari">
<div class="ders-satiri">
${LINK_SUTUNLARI.map((s) => `<h3 class="ders-sutunu ders-basligi">${s.baslik}</h3>`).join('\n')}
</div>
<div class="ders-satiri ders-listeleri">
${LINK_SUTUNLARI.map((s) => `<ul class="ders-sutunu">${s.ogeler.map(oge).join('\n')}</ul>`).join('\n')}
</div>
</section>`;
}

// ---- Sayfayı kur -------------------------------------------------------------

eskiKayitlariTasi();

const aktifSinif = SINIFLAR.find((s) => s.id === depo.al('sekme')) ?? SINIFLAR[0];

const kok = document.getElementById('uygulama');
kok.innerHTML = `<nav class="sekmeler" role="tablist">
${SINIFLAR.map((s) => `<button class="sekme" id="sekme-${s.id}" type="button" role="tab" aria-controls="panel-${s.id}" aria-selected="${s === aktifSinif}" data-sinif="${s.id}">${s.sekme}</button>`).join('\n')}
</nav>
${SINIFLAR.map((s) => panelHtml(s, s === aktifSinif)).join('\n')}
${dersVideolariHtml()}`;
document.getElementById('guncelleme-notu').textContent = ALT_BILGI;

const panel = (sinif) => document.getElementById(`panel-${sinif.id}`);
const kutu = (sinif, anahtar) => document.getElementById(kutuId(sinif, anahtar));
// Sınıfın not girilebilen kutuları, ekrandaki sırayla (sabit notlu blok hariç)
const kutulari = (sinif) => [...panel(sinif).querySelectorAll('.not-kutusu:not([data-sabit])')];

// ---- Kayıtlı notlar ----------------------------------------------------------

for (const sinif of SINIFLAR) {
  for (const k of kutulari(sinif)) k.value = depo.al(k.id) ?? '';

  // Açılışta son sonucu göster; hiç not girilmemişse boş bırak.
  const kayit = depo.al(kutuId(sinif, 'sonuc'));
  const bos = kayit === null || Number(kayit) === Number(bosSonuc(sinif));
  panel(sinif).querySelector('.sonuc-degeri').textContent = bos ? '' : kayit;
}

// ---- Hesaplama ---------------------------------------------------------------

const gelisimVar = () => kok.querySelector('.gelisim-anahtari').checked;

// Üç sınıfın tüm kutuları, Firebase'deki eski kayıtlarla aynı anahtarlarla ("xoxxGebelikNotu").
function tumKutular() {
  const kayit = {};
  for (const sinif of SINIFLAR) {
    for (const k of panel(sinif).querySelectorAll('.not-kutusu')) {
      kayit[eskiAnahtar(sinif, k.id.slice(sinif.id.length + 1))] = k.value;
    }
  }
  return kayit;
}

function goster(sinif, sonuc) {
  const p = panel(sinif);
  const mesaj = rastgele(MESAJLAR[sonuc.durum]);
  const metin = p.querySelector('.sonuc-metni');
  const final = p.querySelector('.final-yazisi');

  p.querySelector('.sonuc-mesaji').dataset.durum = sonuc.durum;
  metin.textContent = mesaj;
  // Uzun mesaj 432px'lik kutuya sığsın: en çok 60px, yazı uzadıkça küçülür.
  metin.style.fontSize = `${Math.min(60, Math.floor(650 / mesaj.length))}px`;
  p.querySelector('.sonuc-degeri').textContent = sonuc.sayi;
  final.textContent = sonuc.durum === 'gerek' ? FINALDEN : '';
  final.classList.toggle('genis', sonuc.durum === 'gerek');
}

function hesaplaSinif(sinif) {
  const anahtarlar = [...sinif.bloklar.filter((b) => !b.sabit).map((b) => b.id), ...ORTAK_SATIRLAR.map((s) => s.anahtar)];
  const girdi = {};
  for (const anahtar of anahtarlar) {
    const k = kutu(sinif, anahtar);
    girdi[anahtar] = k.value;
    depo.koy(k.id, k.value);
    if (!k.readOnly) {
      const n = Number(k.value);
      k.dataset.durum = n > 100 ? 'fazla' : n <= 0 ? 'bos' : '';
    }
  }
  bulut.then((b) => b?.notKaydet(sinif.id, tumKutular())).catch(() => {});

  const sonuc = hesapla(sinif, girdi, gelisimVar());
  goster(sinif, sonuc);
  depo.koy(kutuId(sinif, 'sonuc'), sonuc.sonuc);
}

const tumunuHesapla = () => SINIFLAR.forEach(hesaplaSinif);

// "HESAPLA" basışı: hesapla + sayaç artır.
function hesaplaVeSay(sinif) {
  hesaplaSinif(sinif);
  bulut.then((b) => b?.sayaciArttir()).catch(() => {});
}

function temizle(sinif) {
  for (const k of kutulari(sinif)) {
    depo.sil(k.id);
    k.value = '';
    k.dataset.durum = '';
  }
  depo.sil(kutuId(sinif, 'sonuc'));
  const p = panel(sinif);
  p.querySelector('.sonuc-degeri').textContent = '';
  p.querySelector('.sonuc-metni').textContent = '';
  p.querySelector('.final-yazisi').textContent = '';
  p.querySelector('.final-yazisi').classList.remove('genis');
}

// ---- Gelişim sınavı anahtarı (üç sınıfta ortak) --------------------------------

let uyariZamanlayici;
function uyariGoster(metin) {
  const uyari = document.getElementById('uyari');
  uyari.textContent = metin;
  uyari.style.display = 'block';
  clearTimeout(uyariZamanlayici);
  uyariZamanlayici = setTimeout(() => { uyari.style.display = 'none'; }, 3000);
}

function gelisimDegisti(acik) {
  for (const anahtar of kok.querySelectorAll('.gelisim-anahtari')) anahtar.checked = acik;
  for (const sinif of SINIFLAR) {
    const gelisim = kutu(sinif, 'gelisim');
    gelisim.readOnly = !acik;
    if (!acik) gelisim.value = '';
  }
  uyariGoster(acik ? GELISIM_UYARILARI.acik : GELISIM_UYARILARI.kapali);
  tumunuHesapla();
}

// ---- Sekmeler ----------------------------------------------------------------

function sekmeAc(sinifId) {
  for (const sekme of kok.querySelectorAll('.sekme')) sekme.setAttribute('aria-selected', sekme.dataset.sinif === sinifId);
  for (const p of kok.querySelectorAll('.panel')) p.hidden = p.dataset.sinif !== sinifId;
  depo.koy('sekme', sinifId);
}

// ---- Olaylar -----------------------------------------------------------------

const sinifOf = (oge) => SINIFLAR.find((s) => s.id === oge.closest('[data-sinif]').dataset.sinif);
const tusluTikla = (olay) => olay.key === 'Enter' || olay.key === ' ';

kok.addEventListener('click', (olay) => {
  const hedef = olay.target;
  const sekme = hedef.closest('.sekme');
  if (sekme) return sekmeAc(sekme.dataset.sinif);
  if (hedef.closest('.hesapla-dugmesi')) return hesaplaVeSay(sinifOf(hedef));
  if (hedef.closest('.temizle-dugmesi')) return temizle(sinifOf(hedef));
});

kok.addEventListener('change', (olay) => {
  if (olay.target.matches('.gelisim-anahtari')) gelisimDegisti(olay.target.checked);
});

kok.addEventListener('keydown', (olay) => {
  const hedef = olay.target;
  if (hedef.matches('.hesapla-dugmesi, .temizle-dugmesi') && tusluTikla(olay)) {
    olay.preventDefault();
    return hedef.click();
  }
  if (!hedef.matches('.not-kutusu') || olay.key !== 'Enter') return;

  // Enter: sıradaki kutuya geç. Gelişim ve Final'de ayrıca hesapla; Final'den başa dön.
  olay.preventDefault();
  const sinif = sinifOf(hedef);
  const kutular = kutulari(sinif);
  if (hedef === kutu(sinif, 'gelisim') || hedef === kutu(sinif, 'final')) hesaplaVeSay(sinif);
  kutular[(kutular.indexOf(hedef) + 1) % kutular.length].focus();
});

kok.addEventListener('submit', (olay) => olay.preventDefault());

// ---- Sayaç ve bilgi notları ----------------------------------------------------

function sayaciGoster(sayi) {
  document.querySelectorAll('.sayac').forEach((e) => { e.textContent = sayi ?? '???'; });
}

const notlar = [...document.querySelectorAll('.bilgi-notu')];
const notuYaz = (metin) => notlar.forEach((e) => { e.textContent = metin; });
let sonNot = BILGI_NOTLARI[0];
notuYaz(sonNot);

// 5 saniyede bir not kaybolur, yenisiyle geri gelir.
setInterval(async () => {
  const gizle = notlar.map((e) => e.animate({ opacity: [1, 0] }, { duration: 100, fill: 'forwards' }));
  await Promise.all(gizle.map((a) => a.finished));
  do { sonNot = rastgele(BILGI_NOTLARI); } while (sonNot === notlar[0].textContent && BILGI_NOTLARI.length > 1);
  notuYaz(sonNot);
  await bekle(150);
  const goster = notlar.map((e) => e.animate({ opacity: [0, 1] }, { duration: 200 }));
  gizle.forEach((a) => a.cancel());
  await Promise.all(goster.map((a) => a.finished));
}, 5000);
