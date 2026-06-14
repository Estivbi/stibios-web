import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { Serwist, StaleWhileRevalidate, CacheFirst, NetworkFirst } from "serwist";

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: WorkerGlobalScope & typeof globalThis;

// Service worker event types not included in default lib
interface PushEvent extends Event {
  data: { json: () => unknown } | null;
  waitUntil(p: Promise<unknown>): void;
}
interface NotificationEvent extends Event {
  notification: { close(): void; data: unknown; body: string; title: string };
  waitUntil(p: Promise<unknown>): void;
}
interface ServiceWorkerGlobalScope {
  registration: { showNotification(title: string, opts?: NotificationOptions): Promise<void> };
  clients: {
    matchAll(opts?: { type?: string; includeUncontrolled?: boolean }): Promise<Array<{ url: string; focus(): Promise<unknown> }>>;
    openWindow(url: string): Promise<unknown>;
  };
}

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [
    {
      matcher: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
      handler: new CacheFirst({ cacheName: "google-fonts" }),
    },
    {
      matcher: /\/agenda/,
      handler: new StaleWhileRevalidate({ cacheName: "agenda-pages" }),
    },
    {
      matcher: /\/_next\/static\/.*/i,
      handler: new CacheFirst({ cacheName: "next-static" }),
    },
    {
      matcher: /\/_next\/image\?.*/i,
      handler: new StaleWhileRevalidate({ cacheName: "next-images" }),
    },
    {
      matcher: ({ url }) => url.pathname === "/",
      handler: new NetworkFirst({ cacheName: "pages", networkTimeoutSeconds: 3 }),
    },
  ],
  fallbacks: {
    entries: [
      {
        url: "/offline",
        matcher({ request }) {
          return request.destination === "document";
        },
      },
    ],
  },
});

serwist.addEventListeners();

// Push notification handlers
self.addEventListener("push", ((event: PushEvent) => {
  if (!event.data) return;
  const { title, body, url } = event.data.json() as { title: string; body: string; url: string };
  event.waitUntil(
    (self as unknown as ServiceWorkerGlobalScope).registration.showNotification(title, {
      body,
      icon: "/icons/icon-192.png",
      badge: "/icons/favicon-32.png",
      data: { url },
    })
  );
}) as EventListener);

self.addEventListener("notificationclick", ((event: NotificationEvent) => {
  event.notification.close();
  const url: string = (event.notification.data as { url?: string })?.url ?? "/";
  event.waitUntil(
    (self as unknown as ServiceWorkerGlobalScope).clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        const existing = clientList.find((c) => c.url === url);
        if (existing) return existing.focus();
        return (self as unknown as ServiceWorkerGlobalScope).clients.openWindow(url);
      })
  );
}) as EventListener);
