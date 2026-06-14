import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist, StaleWhileRevalidate, CacheFirst, NetworkFirst } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}
declare const self: WorkerGlobalScope & typeof globalThis;

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true, clientsClaim: true, navigationPreload: true,
  runtimeCaching: [
    { matcher: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i, handler: new CacheFirst({ cacheName: "google-fonts" }) },
    { matcher: /\/agenda/, handler: new StaleWhileRevalidate({ cacheName: "agenda-pages" }) },
    { matcher: /\/_next\/static\/.*/i, handler: new CacheFirst({ cacheName: "next-static" }) },
    { matcher: /\/_next\/image\?.*/i, handler: new StaleWhileRevalidate({ cacheName: "next-images" }) },
    { matcher: ({ url }) => url.pathname === "/", handler: new NetworkFirst({ cacheName: "pages", networkTimeoutSeconds: 3 }) },
  ],
  fallbacks: { entries: [{ url: "/offline", matcher({ request }) { return request.destination === "document"; } }] },
});
serwist.addEventListeners();
