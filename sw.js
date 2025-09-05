self.addEventListener('install', event => {
  console.log('Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker activated');
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // This is a simple fetch handler; you can expand caching later
});
