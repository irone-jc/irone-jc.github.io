'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a73db9e2d60f2ace3a79fb17fd16783e",
"index.html": "9da33ba2ccab0946a284c55dc2adafaa",
"/": "9da33ba2ccab0946a284c55dc2adafaa",
"main.dart.js": "c77551c46e78b54731bd378ed08e2f80",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "c7dac7aa4ea88e4d05807faf43dc7f7f",
"icons/Icon-192.png": "e9e15392a944a8fd0b2fb7b1fed3d0bd",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "658afd97d65f984aeb8f0edc76ec741b",
".git/config": "8f22623df533274708d88058a29123db",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/af9b5e09d61fc136b4eb2c9eb82270906af685": "e42536612fa943c0ee68356cda418657",
".git/objects/50/6c99e6a2e4dc086268b74e97e09cdb55bb7d73": "935783f63861c74a9bb65236bcc1918e",
".git/objects/32/098c62169b41852f9e279ad174341ae1b0cc40": "25641aba5d9623612d7d070b654111f5",
".git/objects/56/11476622c63c3b230b7630800e2fbbccb39fc0": "628f90b3beee6d803694e5316357d38e",
".git/objects/58/ab4b215ee2dd0b72b686c1d8ec0eeefec817b6": "bf0b7eeb3a86d5e7a81c4e9860b2ae4b",
".git/objects/93/9047249fae95b8043eaa41fa0d3fa7df3a106c": "b4759185e7439a75f429b32b144eaeab",
".git/objects/94/15d0f33adc1b2fb7d9e1f0f653e88fdbfe2e03": "0e60e6ec27e9b314ff2ee51bca2bf354",
".git/objects/34/fb26bb43880907d54031029ab7ac4adb60f5a3": "b579b61266ee23556501c2ea02119c23",
".git/objects/bd/e355b3d125d17f2baed6e2ebf98f4fa8b72834": "b3b3ecdab5400473c7775684979973f7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/b85bcb18433e46aef204ca6d39ed5020f70a0a": "eabffe23757bfc972d31e620e8816d69",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/be0da0e99f34197209c89b616e8229c37e458d": "eb5d6ba53bf653504994852067a9d5b9",
".git/objects/fd/92117cdb002323699115788b6d82539f7efdb9": "953cf1aac213d6e0e321e6fce72144a1",
".git/objects/f2/8804aee99cd56c717156a529f3398287060e72": "92ba2ebcfe9ed92e2cc78ee7061f7a1d",
".git/objects/f2/40c683366c3b852129fb98ed35018beec06498": "fa292454b6c7f0382daa4c0355e27867",
".git/objects/ed/d51ebe5478bf8ca4cbbdc06e66210419078ed7": "06733cdf5b6fb5617c5ac9782ea22dc6",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/75a44de3279887d4add1d58bb4921c7a975ec4": "766e510fc56243076ba8a75d8ba49a47",
".git/objects/4b/ce0db336509f670df57e53eca3acd7e88216be": "868353ffb4f1601d4a28ee23e0b3e006",
".git/objects/7c/d3cd8c52e14c739b07a3da292d420cc947983f": "82aeffe685abc79f7f713b5e9df1beb0",
".git/objects/16/02295a2e1824643553db1713e63e21dd8db788": "adf0792fb9bbfd5bc75631e8df151321",
".git/objects/45/0bd94910b4a3a01d1bc3a2a9f936d9c3813d2a": "b86c077a19523944a05c5efcb8ecea73",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/8a/4683736553c6721515fefbf0ffe6dabf2f3af3": "bfbe2ee3d5a7d37683fb7f0c7d83362b",
".git/objects/21/5879ecc1345dbbb75f8f6c229f7858d3181ef9": "b95e066f19bf95a2ff795cf88bb5a9f3",
".git/objects/44/df88bf99b98bc4f51232730dd17d94cfe28408": "d22bcc28fad3aa0679f3bb1389771e6d",
".git/objects/88/4f599da9d37b4b3b8cb37d21b1de7d9d3e0164": "fd724e68825464705eb05ca39974e40c",
".git/objects/88/6d68e2012a06ecd32c7f0dcf72fc1df9f68b61": "21941567073df1c5c247ccd383f445de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/5c/9ef75882f0aed534837f0b3a317b9434298cf5": "1c91fb4318c66d42bd3c0f1c7efeade1",
".git/objects/09/47882abc813cfb5cfeb1c489e712adbbb7fbc6": "0505ba62c1a4583c72651643e1299793",
".git/objects/54/40c09956bc9cf4980d74a8b617fe7bf1e26523": "0392c990cbf14e3c5a40f38b818254fd",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/c2b43c3ba2b4bbc415e1f8a9fa4d7aeabae441": "0781cd737061549e33baea42c2694ffe",
".git/objects/6c/063847115b112349666d67e8701249705a042a": "fe2a42308cde87809e706d576f83cbf7",
".git/objects/39/a2144693cbc5515b40513400af641adde60eea": "b7d26dddb21b3b09310d81c2fc038824",
".git/objects/99/b3325a04d346bd1ef36c9c4ed0fc6685ccf8a9": "963818982dc0666247a5d9326eaa1356",
".git/objects/d3/0beeee71ad440b1a0152718b46a3a6bb7176ed": "0ce4bb1b375a237d616522922944c9ca",
".git/objects/b8/d245ba8006766220750e9e08edbc2aa1d881c8": "7f7fc23c570c9515326ae50decf57fcc",
".git/objects/b1/9f53d9b4a5961a2147fcb380e4e50a9df47fa5": "f145d126c26f0da0f78fac1ae9ea5523",
".git/objects/d2/ca7e16e68749bb5ae0c9698f30da2018ac49f6": "662ea1154a3db0f57d0b40e99ff2a8ad",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/ed79e8dc0d4558195bf5d8067806d720c072a0": "745ad49048192599258440915b11f24e",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/2153b17639c00ba60df728ab3ca21851b1a9a6": "792f30db6a24d1713f49602f6f59b428",
".git/objects/ff/bc1c0f36371a49fc5f3ffa5783e7348d7d8030": "0e1501ae96ce0b3f2bed3aa001a6bbc8",
".git/objects/e7/f342bc0578429d5a92ff51788472f932f62c41": "3187d10c8539edab37bbc0035d9acd37",
".git/objects/cb/91d5ee61887cf560b698d1122b130c9a64d8dd": "a080fa123cc5a707b2d9c52a938cc84f",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/dba281a43ff80b93b7acdc7d4fde205d960a0c": "5a6ff2bea5ac8ddc0fbef6085756642e",
".git/objects/2c/a9e3df7117d16d2a64beefd0931ec733fd6d24": "29329dc3fa8b98bb24e603ae6adfc187",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/70/7a860110718684e438c71ce623f8df9f856136": "bb9eaf62c7517552a8d1c4e344d3f1b8",
".git/objects/23/2fdde4ddeef861ceeb2391d6d091a404e7b0c1": "d2535afa6ad23ef6554dd63b1b662676",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8e/05b178f4294dd4e2451fb197538156d8b62fb7": "49dd2c16030702c2b8133259cc2e5d0b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "963e5cb74986b39180cd3d10eb8395f6",
".git/logs/refs/heads/master": "963e5cb74986b39180cd3d10eb8395f6",
".git/logs/refs/remotes/origin/master": "8ac0e1960673fcf8137317cd76bc1f8f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "73be56f21bff88a16054961034895e64",
".git/refs/remotes/origin/master": "73be56f21bff88a16054961034895e64",
".git/index": "b0f892aa2434380416dcafb0585b7ff7",
".git/COMMIT_EDITMSG": "17fea550bb54ba8e4a17104904497b07",
"assets/AssetManifest.json": "9d0c278ddc07ea1c4c03e62230ea9f87",
"assets/NOTICES": "795056e9817f7f11fb677e2886b3d6e9",
"assets/FontManifest.json": "85f4a4e7e1c3a7f7c901cf94b5329d2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "7f239b2b445f36b380f5deb69f249a90",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/home/bg-intro-gradient.png": "e87be9fd104f224e94f7ca3a709d1c9a",
"assets/assets/home/img-magazine-ai.png": "1157a560a074db4d3a7320f7bdc52a38",
"assets/assets/home/img-magazine-studio.png": "280af9fbc6f604e686187e318f1e48b6",
"assets/assets/home/img-illust-algorithms.png": "f0a4dd7ee0d4636d103b1e484ae5e106",
"assets/assets/home/munute_bi_2.svg": "7636733ca22b2eb747474f7332f46d1e",
"assets/assets/home/munute_bi.svg": "f9c837bf4db3136c459fa8bcb9ac06a4",
"assets/assets/home/img-illust-technology.png": "e1ea68adcff04bc605dd99055d1de37b",
"assets/assets/home/icon-24-arrowhead-down.svg": "01c30cfdf0e9bd3f4bb1db110db25a36",
"assets/assets/home/icon-64-book.svg": "3df5f6e28ecf0d51d8e1be69c394d580",
"assets/assets/home/bg-intro-gradient2@X.png": "8448b2512efafb4fa9823daf6100c148",
"assets/assets/home/img-magazine-essential.png": "7996e739d7473435fbd3e063c4733651",
"assets/assets/home/img-magazine-mistake.png": "76b9fa0de6fffdbeaea294458b4ffc20",
"assets/assets/home/img-magazine-distribe.png": "abab8f9639cf13c1851302312e71114e",
"assets/assets/home/mov_intro_b.mp4": "c7083d5907d13f0a91671d3b75267c9e",
"assets/assets/home/img-ci.png": "6759de91274600f4d778ed1112122f03",
"assets/assets/home/img-magazine-engineers.png": "b3136a71ca617184dac6050c6611ac84",
"assets/assets/home/img-review-logo-soundplatform.png": "6c7170e351a6c398189ed577ab215875",
"assets/assets/home/img-photo-bg-jewel.png": "a709ed29556fa71b20a157f75d908cb7",
"assets/assets/home/img-photo-bg-intro.png": "32e8096e06c2f1920acceb8067145484",
"canvaskit/canvaskit%203.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit%203.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
