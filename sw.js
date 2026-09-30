/* FlyCademy FlightLog — Offline-Speicher (Service Worker) */
const CACHE = "fcy-fl-2026-09-30p";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png",
  "icon-maskable-512.png", "apple-touch-icon.png", "jspdf.umd.min.js", "html2canvas.min.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith("fcy-fl-") && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  /* App-Seite: zuerst Netz (Updates kommen sofort an), offline aus dem Speicher */
  if (req.mode === "navigate"){
    /* „no-cache“: beim Server nachfragen (ETag, meist nur 304) statt die bis zu 10 min alte Browser-Kopie
       von GitHub Pages zu nehmen — neue Versionen sind sofort da */
    e.respondWith(fetch(req.url, {cache: "no-cache", credentials: "same-origin"}).then(res => {
      if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put("index.html", copy)); }
      return res;
    }).catch(() => caches.match("index.html").then(r => r || caches.match("./"))));
    return;
  }
  /* eigene Dateien (Icons, PDF-Bausteine): aus dem Speicher, sonst Netz */
  if (url.origin === self.location.origin){
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }
  /* Wetter, Höhenwinde, Karten, openAIP: immer live aus dem Netz */
});
