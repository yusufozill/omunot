// Firebase: canlı "hesap sayısı" sayacı ve girilen notların kaydı.
// app.js bu dosyayı isteğe bağlı yükler; Firebase engellenirse hesap makinesi yine çalışır.
const SDK = 'https://www.gstatic.com/firebasejs/10.14.1';

const AYAR = {
  apiKey: 'AIzaSyBZCCIeOIbwgmWwx4BjY4zMLuzUAZ20qQE',
  authDomain: 'omunot.firebaseapp.com',
  databaseURL: 'https://omunot.firebaseio.com',
  projectId: 'omunot',
};

/** @param sayacDegisti  sayaç değeri her güncellendiğinde çağrılır */
export async function bulutuBaslat(sayacDegisti) {
  const [{ initializeApp }, { getDatabase, ref, onValue, set, runTransaction }] = await Promise.all([
    import(`${SDK}/firebase-app.js`),
    import(`${SDK}/firebase-database.js`),
  ]);
  const db = getDatabase(initializeApp(AYAR));
  const sayacRef = ref(db, 'sayac');
  let sayac = null;

  onValue(sayacRef, (anlik) => {
    sayac = anlik.val()?.sayac ?? null;
    sayacDegisti(sayac);
  });

  return {
    // Her "HESAPLA" basışında sayaç bir artar (iki kişi aynı anda bassa da kaybolmaz).
    sayaciArttir: () => runTransaction(sayacRef, (eski) => ({ sayac: (eski?.sayac ?? 0) + 1 })),
    // Bir hesaplamada kutulardaki tüm değerleri ve hangi sınıf olduğunu kaydeder.
    notKaydet: (sinif, girdiler) => set(ref(db, `yeninotlar/${new Date()}`), { ...girdiler, sinif, sayac }),
  };
}
