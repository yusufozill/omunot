// console.log("sw yüklendi")
// self.addEventListener('fetch', function(event) {
//   // Perform some task
// });

// // CODELAB: Add list of files to cache here.
// const FILES_TO_CACHE = [
//   '/index.html','/js/js.js','/css/css.css'
// ];

// // CODELAB: Precache static resources here.
// evt.waitUntil(
//   caches.open(CACHE_NAME).then((cache) => {
//     console.log('[ServiceWorker] çevrimdışı sayfa yüklendi');
//     return cache.addAll(FILES_TO_CACHE);
//   })
// );

// // CODELAB: Remove previous cached data from disk.
// evt.waitUntil(
//   caches.keys().then((keyList) => {
//     return Promise.all(keyList.map((key) => {
//        if (key !== CACHE_NAME) {
//          console.log('[ServiceWorker] Eski Sayfalar Kaldırıldı', key);
//          return caches.delete(key);
//        }
//      }));
//    })
//  );

//  //CODELAB: Add fetch event handler here.
// if (evt.request.mode !== 'navigate') {
// // Not a page navigation, bail.
// return;
// }
//  evt.respondWith(
//      fetch(evt.request)
//          .catch(() => {
//            return caches.open(CACHE_NAME)
//                .then((cache) => {
//                  return cache.match('index.html');
//                });
//          })
//  );
