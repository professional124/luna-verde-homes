self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open('luna-verde-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/client.js',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cached => {
      return cached || fetch(evt.request);
    })
  );
});
