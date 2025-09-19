const CACHE_NAME = 'notas-pwa-v1';
const ARCHIVOS_A_CACHEAR = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json'
];

// Instalar Service Worker y guardar en caché
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ARCHIVOS_A_CACHEAR))
  );
});

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(respuesta => respuesta || fetch(event.request))
  );
});
