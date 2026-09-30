const CACHE = "tap-nsn-v2";
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.add("./index.html")).then(() => self.skipWaiting()));
});
self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request)));
});
