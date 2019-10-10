try {
    var config = {
        "version": "v1.0.8",
        "precache": [
            "https://ae01.alicdn.com/kf/HTB1J3YMBOCYBuNkHFCc763HtVXaC.png"
        ],
        "precacheOnRoute": [{
                "regexp": "http[s]?:\\/\\/m\\.(.+\\.)?aliexpress\\.com\\/item\\/\\d+\\.html.?",
                "list": [
                    "ae-msite-ui/common/css/core.css",
                    "ae-msite-ui/common/css/country.css",
                    "ae-msite-ui/shopcart/index.css",
                    "ae-msite-ui/shopcart/??index.js",

                    "ae-msite-ui/login/index.css",
                    "ae-msite-ui/login/??index.js",

                    "ae-msite-ui/hashmap.js",
                    "ae-global/atom/atom.js",
                    "ae-global/core/package.js",

                    "ae-msite-ui/order/index.css",
                    "ae-msite-ui/order/??index.js",
                    "ae-msite-ui/order/loading/index.js",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/PayPal@2x.9c0223cc.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Diners@2x.cdc56d41.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Discover@2x.981c6de7.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/JCB@2x.914b2a36.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/MIR@2x.a6f64da3.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Mastro@2x.97267224.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Master@2x.9e5a3829.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Visa@2x.6dc8d104.png"
                ]
            },
            {
                "regexp": "http[s]?:\\/\\/m\\.(.+\\.)?aliexpress\\.com\\/shopcart\\/list\\.html.?/",
                "list": [
                    "ae-msite-ui/login/index.css",
                    "ae-msite-ui/login/??index.js",

                    "ae-msite-ui/hashmap.js",
                    "ae-global/atom/atom.js",
                    "ae-global/core/package.js",

                    "ae-msite-ui/order/index.css",
                    "ae-msite-ui/order/??index.js",
                    "ae-msite-ui/order/loading/index.js",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/PayPal@2x.9c0223cc.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Diners@2x.cdc56d41.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Discover@2x.981c6de7.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/JCB@2x.914b2a36.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/MIR@2x.a6f64da3.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Mastro@2x.97267224.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Master@2x.9e5a3829.png",
                    "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Visa@2x.6dc8d104.png"
                ]
            }
        ]
    };
    var hashes = {
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Diners@2x.cdc56d41.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Diners@2x.cdc56d41.png",
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Visa@2x.6dc8d104.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Visa@2x.6dc8d104.png",
        "https://ae01.alicdn.com/kf/HTB1J3YMBOCYBuNkHFCc763HtVXaC.png": "https://ae01.alicdn.com/kf/HTB1J3YMBOCYBuNkHFCc763HtVXaC.png",
        "ae-msite-ui/common/css/country.css": "https://i.alicdn.com/ae-msite-ui/common/css/country.242ae0db.css",
        "ae-msite-ui/order/loading/index.js": "https://i.alicdn.com/ae-msite-ui/order/loading/index.8444ef32.js",
        "ae-msite-ui/order/index.css": "https://i.alicdn.com/ae-msite-ui/order/index.6061dfc6.css",
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Master@2x.9e5a3829.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Master@2x.9e5a3829.png",
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Discover@2x.981c6de7.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/Discover@2x.981c6de7.png",
        "ae-msite-ui/common/css/core.css": "https://i.alicdn.com/ae-msite-ui/common/css/core.597c068a.css",
        "ae-msite-ui/shopcart/index.css": "https://i.alicdn.com/ae-msite-ui/shopcart/index.45617cba.css",
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/JCB@2x.914b2a36.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/JCB@2x.914b2a36.png",
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Mastro@2x.97267224.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/black_Mastro@2x.97267224.png",
        "ae-msite-ui/hashmap.js": "https://i.alicdn.com/ae-msite-ui/hashmap.043f958d.js",
        "ae-msite-ui/shopcart/??index.js": "https://i.alicdn.com/ae-msite-ui/shopcart/??index.89aa3b1e.js",
        "ae-msite-ui/login/??index.js": "https://i.alicdn.com/ae-msite-ui/login/??index.26c52a63.js",
        "ae-msite-ui/order/??index.js": "https://i.alicdn.com/ae-msite-ui/order/??index.41833e02.js",
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/MIR@2x.a6f64da3.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/MIR@2x.a6f64da3.png",
        "ae-global/core/package.js": "https://i.alicdn.com/ae-global/core/package.a6067778.js",
        "ae-global/atom/atom.js": "https://i.alicdn.com/ae-global/atom/atom.4d9b061e.js",
        "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/PayPal@2x.9c0223cc.png": "https://i.alicdn.com/ae-msite-ui/order/component/payment/img/PayPal@2x.9c0223cc.png",
        "ae-msite-ui/login/index.css": "https://i.alicdn.com/ae-msite-ui/login/index.d26d2b86.css"
    };
} catch (e) {}

if (typeof config !== 'undefined' && 'Promise' in self) {

    var CACHE_PREFIX = 'msite';

    var SHOPCART_CACHE_NAME = 'shopcart-count';

    var CACHE_STRATEGY = {
        PRECACHE: {
            id: 'precache',
            cacheName: CACHE_PREFIX + '-precache-' + config.version,
            onFetch: function(event) {
                var requestUrl = event.request.url;
                return caches.open(CACHE_STRATEGY.PRECACHE.cacheName).then(function(cache) {
                    return cache.match(requestUrl);
                }).then(function(cachedResponse) {
                    return cachedResponse || fetch(requestUrl);
                });
            }
        },
        PRECACHE_ON_ROUTE: {
            id: 'precache_on_route',
            cacheName: CACHE_PREFIX + '-precache-on-route-' + config.version,
            onFetch: function(event) {
                var requestUrl = event.request.url;
                return caches.open(CACHE_STRATEGY.PRECACHE_ON_ROUTE.cacheName).then(function(cache) {
                    return cache.match(requestUrl);
                }).then(function(cachedResponse) {
                    return cachedResponse || fetch(requestUrl);
                });
            }
        },
        CACHE_AND_UPDATE: {
            id: 'cacheAndUpdate',
            cacheName: CACHE_PREFIX + '-cache-then-update-' + config.version,
            onFetch: function(event) {
                var requestUrl = event.request.url;
                return caches.open(CACHE_STRATEGY.CACHE_AND_UPDATE.cacheName).then(function(cache) {
                    return cache.match(requestUrl).then(function(response) {
                        return response || fetch(requestUrl).then(function(response) {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                    });
                });
            }
        }
    };

    var ServiceWorker = function() {
        var self = this;

        this.routes = [];

        var preCacheArray = config.precache || [];

        this.initStrategies();

        if (preCacheArray.length) {
            this.registerUrlListByStrategy(preCacheArray, CACHE_STRATEGY.PRECACHE.id);
        }
        if (config.cacheThenUpdate && config.cacheThenUpdate.length) {
            this.registerUrlListByStrategy(config.cacheThenUpdate, CACHE_STRATEGY.CACHE_AND_UPDATE.id);
        }

        if (config.precacheOnRoute && config.precacheOnRoute.length) {
            config.precacheOnRoute.forEach(function(route) {
                self.precacheOnRoute(route.regexp, route.list);
            })
        }

        this._onInstall = this.onInstall.bind(this);
        this._onActivate = this.onActivate.bind(this);
        this._onFetch = this.onFetch.bind(this);
    };

    ServiceWorker.prototype.initStrategies = function() {
        this.strategy = {};
        for (var strategy in CACHE_STRATEGY) {
            this.strategy[CACHE_STRATEGY[strategy].id] = {
                listMap: {},
                listArray: []
            };
        }
    };

    ServiceWorker.prototype.precacheOnRoute = function(route, precacheList) {
        var self = this;
        precacheList.forEach(function(resource) {
            self.strategy[CACHE_STRATEGY.PRECACHE_ON_ROUTE.id].listMap[(hashes || {})[resource] || resource] = true;
        });
        this.routes.push({
            regexp: route,
            handler: function() {
                caches.open(CACHE_STRATEGY.PRECACHE_ON_ROUTE.cacheName).then(function(cache) {
                    cache.keys().then(function(keys) {
                        var keyMap = {};
                        keys.forEach(function(key) {
                            keyMap[key] = true;
                        });
                        precacheList.forEach(function(resource) {
                            var hashedResource = (hashes || {})[resource] || resource;
                            typeof keyMap[hashedResource] === 'undefined' && cache.add(hashedResource);
                        });
                    });
                });
            },
        });
    };

    ServiceWorker.prototype.getRoutes = function(requestUrl) {
        return this.routes.filter(function(route) {
            return new RegExp(route.regexp).test(requestUrl);
        });
    };

    ServiceWorker.prototype.onInstall = function(event) {
        var _this = this;

        event.waitUntil(
            caches.open(CACHE_STRATEGY.PRECACHE.cacheName).then(function(cache) {
                return cache.addAll(_this.strategy[CACHE_STRATEGY.PRECACHE.id].listArray);
            })
        );
    };

    ServiceWorker.prototype.onActivate = function(event) {
        event.waitUntil(
            Promise.resolve().then(function() {
                return caches.keys()
                    .then(function(cacheNames) {
                        return Promise.all(
                            cacheNames
                            .filter(function(cacheName) {
                                return cacheName.indexOf(CACHE_PREFIX) === 0
                            })
                            .filter(function(cacheName) {
                                return !(new RegExp("^" + CACHE_PREFIX + "\.+\-" + config.version + "$").test(cacheName));
                            }).map(function(cacheName) {
                                return caches.delete(cacheName);
                            })
                        );
                    })
            })
        );
    };

    ServiceWorker.prototype.onFetch = function(event) {
        var _self = this;
        var requestUrl = event.request.url;

        if (!this.validateEvent(event)) return;

        this.deleteShopcartCountCacheIfInvalid(event);

        var responsePromise;

        if (requestUrl.indexOf('https://m.nl.aliexpress.com/api/user/shopcart/count') === 0) {
            responsePromise = caches.open(SHOPCART_CACHE_NAME).then(function(cache) {
                return cache.match(requestUrl).then(function(response) {
                    var request = new Request(requestUrl, {
                        credentials: 'include',
                        headers: {
                            'AMP-Same-Origin': true
                        }
                    });
                    return response || fetch(request).then(function(response) {
                        if (response.status === 200) {
                            cache.put(event.request, response.clone());
                        }
                        return response;
                    });
                });
            });
        } else if (typeof this.strategy[CACHE_STRATEGY.PRECACHE.id].listMap[requestUrl] !== 'undefined') {
            responsePromise = CACHE_STRATEGY.PRECACHE.onFetch(event);
        } else if (typeof this.strategy[CACHE_STRATEGY.PRECACHE_ON_ROUTE.id].listMap[requestUrl] !== 'undefined') {
            responsePromise = CACHE_STRATEGY.PRECACHE_ON_ROUTE.onFetch(event);
        } else if (typeof this.strategy[CACHE_STRATEGY.CACHE_AND_UPDATE.id].listMap[requestUrl] !== 'undefined') {
            responsePromise = CACHE_STRATEGY.CACHE_AND_UPDATE.onFetch(event);
        } else if (requestUrl === 'https://cdn.ampproject.org/v0.js') {
            var corsRequest = new Request(requestUrl, {
                mode: 'cors'
            });
            responsePromise = fetch(corsRequest).then(function(response) {
                var initialHeaders = {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                };

                return response.text().then(function(body) {
                    return new Response(body + _self.loadCrawlerProtection(), initialHeaders);
                });
            });
        } else {
            const routes = this.getRoutes(requestUrl);
            if (Array.isArray(routes) && routes.length) {
                routes.forEach(function(route) {
                    route.handler(event);
                });
            }
        }

        if (typeof responsePromise !== 'undefined') {
            event.respondWith(responsePromise);
        } else return;
    };

    ServiceWorker.prototype.loadCrawlerProtection = function() {
        return ";(function(){var script = document.createElement('script');" +
            "script.src = 'https://g.alicdn.com/secdev/sufei_data/3.6.8/index.js';" +
            "document.head.appendChild(script);})()";
    };

    ServiceWorker.prototype.registerUrlListByStrategy = function(urlList, strategy) {
        var list = [];
        for (var i = 0; i < urlList.length; i++) {
            var url = (hashes || {})[urlList[i]] || urlList[i];
            if (typeof this.strategy[strategy].listMap[url] === 'undefined') {
                this.strategy[strategy].listMap[url] = true;
                list.push(url);
            }
        }
        this.strategy[strategy].listArray = this.strategy[strategy].listArray.concat(list);
        return list;
    };

    ServiceWorker.prototype.bindEventListeners = function() {
        self.addEventListener('install', this._onInstall);

        self.addEventListener('activate', this._onActivate);

        self.addEventListener('fetch', this._onFetch);
    };

    ServiceWorker.prototype.validateEvent = function(event) {
        return event.request.url.indexOf('https://') === 0;
    };

    ServiceWorker.prototype.deleteShopcartCountCacheIfInvalid = function(event) {
        var requestUrl = event.request.url;
        if (
            requestUrl.indexOf('login.html') !== -1 ||
            requestUrl.indexOf('confirm.html') !== -1 ||
            requestUrl.indexOf('shopcart/list.html') !== -1 ||
            requestUrl.indexOf('cart/add') !== -1
        ) {
            caches.keys()
                .then(function(cacheNames) {
                    return Promise.all(
                        cacheNames
                        .filter(function(cacheName) {
                            return cacheName === SHOPCART_CACHE_NAME
                        })
                        .map(function(cacheName) {
                            return caches.delete(cacheName);
                        })
                    );
                })
        }
    };

    new ServiceWorker().bindEventListeners();
}