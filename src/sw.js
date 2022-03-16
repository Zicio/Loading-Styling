const version = 'v1';
const cacheName = `ahj-${version}`;

const files = [];

self.addEventListener('install', (evt) => {
  // evt.waitUntil(self.skipWaiting());
  console.log('sw installed');
});

self.addEventListener('activate', (evt) => {
  // evt.waitUntil(clients.claim());
  console.log('sw activated');
});
