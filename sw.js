//VERSION
var appVersion = "v1.00";

//INSTALL
var files = [
    './',
    './index.html',
    './info.html',
    './sw.js'
]

//ACTIVATE
self.addEventListener("install",installEvent =>{
    installEvent.waitUntil(
        caches.open(appVersion).then(cache =>{
            cache.addAll(files)
        })
    )
})

//FETCH
self.addEventListener("fetch",fetchEvent =>{
    fetchEvent.respond(
        caches.match(fetchEvent.request).then(res =>{
            return res || fetch(fetchEvent.request)
        })
    )
})
