
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('amnt-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './assets/logo.jpg',
        './IMG_4102.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
