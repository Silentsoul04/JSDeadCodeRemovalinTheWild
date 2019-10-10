importScripts("/packs/precache-manifest.70b01adae91d01d32675ad0f7dc32663.js", "/packs/workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({
    modulePathPrefix: "/packs/workbox-v3.6.3"
});
/* global workbox, self */
/* eslint-disable no-restricted-globals */

workbox.skipWaiting();
workbox.clientsClaim();

workbox.core.setLogLevel(workbox.core.LOG_LEVELS.warn);

// Runtime caching of asset pipeline files.
workbox.routing.registerRoute(
    new RegExp('/assets/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'assets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365.25
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Runtime caching of Google fonts
workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'googleapis',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);

// eslint-disable-next-line no-underscore-dangle
workbox.precaching.precacheAndRoute(self.__precacheManifest);