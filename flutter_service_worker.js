'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon%202.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "a283029ac4d2a31a6cc5f940c0bc6a4b",
"index.html": "c6629092699859b0b187bf93bd15caa1",
"/": "c6629092699859b0b187bf93bd15caa1",
"main.dart.js": "61e1685c3d3755efdbdc438e71821a51",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"main.dart%202.js": "69e250cc481ece81fe492bbb6db9d385",
"favicon.png": "836101f1e3b5d352023a685127df7442",
"icons/Icon-maskable-192%202.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192%203.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192%202.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "8f0d9cc35d763a98e89f41e04b311e73",
"icons/Icon-maskable-192.png": "8f0d9cc35d763a98e89f41e04b311e73",
"icons/Icon-maskable-512%202.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512%202.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "5b7ab30b123d56dee5ce8efba0122e59",
"icons/Icon-512.png": "5b7ab30b123d56dee5ce8efba0122e59",
"manifest.json": "a435507d21df1b16e7cfc38b45b01261",
"manifest%202.json": "a435507d21df1b16e7cfc38b45b01261",
"assets/AssetManifest.json": "7b1c8cc080f05299cea0583878a72355",
"assets/NOTICES": "2aba0743647abdddd1a460cf65dd63fa",
"assets/FontManifest.json": "6b3e3ee49347f7055bfd55aee9536b87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "5a02da7ee31fdad323d2a595444ec48f",
"assets/fonts/Pretendard-SemiBold%202.otf": "0bfe99ca0a0e757d2f997561b4b3a020",
"assets/fonts/Pretendard-Medium%202.otf": "d88ea6aec529d8945a09a582be9200a2",
"assets/fonts/Pretendard-Regular.otf": "97b362437880d5cbb01b9305136909ac",
"assets/fonts/Pretendard-Regular%202.otf": "97b362437880d5cbb01b9305136909ac",
"assets/fonts/Pretendard-Medium.otf": "d88ea6aec529d8945a09a582be9200a2",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/Pretendard-SemiBold.otf": "0bfe99ca0a0e757d2f997561b4b3a020",
"assets/assets/soundplatform_logo.png": "a10c10b69853f2861187e3442c5c4d6b",
"assets/assets/zalza_header_sleep_child.png": "3644411258e4b5321114c4ac610f92a8",
"assets/assets/zalza_logo.png": "a364e0e4179cc13d9732de9b4a880f6a",
"assets/assets/zalza_logo%202.png": "a364e0e4179cc13d9732de9b4a880f6a",
"assets/assets/zalza_header_sleep_child%202.png": "3644411258e4b5321114c4ac610f92a8",
"assets/assets/soundplatform_logo%202.png": "a10c10b69853f2861187e3442c5c4d6b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm%202.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm%202.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/canvaskit%202.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit%203.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit%202.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit%202.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit%203.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit%202.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/skwasm.worker%202.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
