const CACHE_NAME = 'bv-portfolio-v1';
const urlsToCache = [
  '/portfolio/',
  '/portfolio/index.html',
  '/portfolio/manifest.json',
  '/portfolio/og-image.png',
  'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@400;600;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
