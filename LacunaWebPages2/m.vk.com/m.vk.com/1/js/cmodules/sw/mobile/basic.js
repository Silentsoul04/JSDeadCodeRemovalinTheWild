! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/js/cmodules/mobile/", n(n.s = 1)
}({
    1: function(e, t, n) {
        e.exports = n("qkmO")
    },
    "8EcH": function(e, t, n) {
        "use strict";
        n("X/TB");
        var r, i = n("WqMb"),
            o = (r = n("DgR7")) && r.__esModule ? r : {
                default: r
            },
            a = n("pp70"),
            c = n("P/qz"),
            s = n("LQzV"),
            u = n("IsZY");
        self.iDBKVGet = c.iDBKVGet, self.iDBKVSet = c.iDBKVSet, self.iDBKVRemove = c.iDBKVRemove;
        var f, l, d = !1,
            _ = (u.SW_VERSIONS_DATA.codeFiles, u.SW_VERSIONS_DATA.codeVersion),
            E = (0, s.checkSupported)(),
            h = 0,
            S = u.PWA_ASSETS_VERSION,
            p = "basic",
            A = [u.OFFLINE_PAGE_URL, u.OFFLINE_IMAGE_URL, u.MANIFEST_URL],
            T = (0, a.buildActionsCaller)();

        function m(e, t) {
            return caches.keys().then(function(n) {
                var r = n.map(function(n) {
                    if (0 === n.indexOf(e) && (d || 0 !== n.indexOf(t))) return caches.delete(n)
                });
                return Promise.all(r)
            })
        }

        function v() {
            return caches.open(u.PWA_GENERAL_CACHE).then(function(e) {
                var t = new Response(JSON.stringify({
                    assetsVersion: d ? void 0 : S,
                    codeVersion: d ? void 0 : _,
                    workerType: d ? void 0 : p
                }));
                return e.put(new URL(u.SW_METADATA_PATH, location).toString(), t)
            })
        }
        E || (self.addEventListener("install", function(e) {
            e.waitUntil(Promise.resolve().then(function() {
                return self.skipWaiting()
            }).catch(function() {}))
        }), self.addEventListener("activate", function(e) {
            e.waitUntil(Promise.resolve().then(function() {
                return self.clients.claim()
            }).catch(function() {}))
        })), E && self.addEventListener("unhandledrejection", console.error), E && self.addEventListener("error", console.error), E && self.addEventListener("install", function(e) {
            var t;
            t = d ? Promise.resolve() : caches.open(u.PWA_GENERAL_CACHE).then(function(e) {
                return e.match(new URL(u.SW_METADATA_PATH, location).toString())
            }).then(function(e) {
                return e && e.json()
            }).catch(function() {}).then(function(e) {
                return e || {
                    assetsVersion: void 0,
                    codeVersion: void 0,
                    workerType: void 0
                }
            }).then(function(e) {
                if (e.assetsVersion !== S || e.workerType !== p) return function() {
                    var e;
                    e = d ? Promise.resolve() : Promise.all(A.map(function(e) {
                        return fetch(e, {
                            credentials: "include",
                            redirect: "follow",
                            mode: "same-origin"
                        }).then(function(e) {
                            if (!e.ok) throw e;
                            return e
                        }).then(function(t) {
                            return caches.open(u.PWA_ASSETS_CACHE).then(function(n) {
                                return n.put(e, t)
                            })
                        })
                    }));
                    return e
                }()
            }), !s.isIOS && d || !registration.active ? e.waitUntil(t.then(function() {
                return self.skipWaiting()
            })) : e.waitUntil(t.then(function() {
                return new Promise(function(e) {
                    var t = setTimeout(function() {
                        f = null, e()
                    }, u.SW_ACTIVATION_TIMEOUT);
                    f = function() {
                        f = null, clearTimeout(t), e()
                    }, registration.active.postMessage({
                        action: "try-activate-installing"
                    })
                }).then(function() {
                    return self.skipWaiting()
                })
            }))
        }), E && self.addEventListener("activate", function(e) {
            var t = Promise.resolve();
            t = (t = (t = (t = (t = t.then(v)).then(function() {
                return Promise.all([m(u.PWA_ASSETS_CACHE_PREFIX, u.PWA_ASSETS_CACHE), m(u.PWA_CODE_CACHE_PREFIX, u.PWA_CODE_CACHE)])
            })).then(function() {
                return self.clients.claim()
            })).then(function() {
                return l = {
                    time: Date.now(),
                    failures: 0
                }, (0, c.iDBKVSet)(u.SW_LAST_UPDATE_INFO_KEY, l).catch(function() {})
            })).then(function() {
                return Promise.all([(0, i.getDevicePixelRatio)().catch(function() {})])
            }), e.waitUntil(t)
        }), E && self.addEventListener("fetch", function(e) {
            if (!d && (e.waitUntil(function() {
                    if (!self.registration.update) return Promise.resolve();
                    return (l ? Promise.resolve(l) : (0, c.iDBKVGet)(u.SW_LAST_UPDATE_INFO_KEY)).then(function(e) {
                        e && e.time || (e = {
                            time: void 0,
                            failures: 0
                        });
                        var t = Date.now(),
                            n = e,
                            r = n.time,
                            i = n.failures;
                        if (!r) return l = {
                            time: t,
                            failures: i
                        }, (0, c.iDBKVSet)(u.SW_LAST_UPDATE_INFO_KEY, l);
                        var o = (i || 0) * u.SW_UPDATE_INTERVAL;
                        return t - r >= u.SW_UPDATE_INTERVAL + o ? (l = {
                            time: t,
                            failures: i
                        }, (0, c.iDBKVSet)(u.SW_LAST_UPDATE_INFO_KEY, l).then(function() {
                            return self.registration.update().then(function() {
                                return l = {
                                    time: t,
                                    failures: 0
                                }, (0, c.iDBKVSet)(u.SW_LAST_UPDATE_INFO_KEY, l)
                            }, function() {
                                return l = {
                                    time: t,
                                    failures: Math.min(i + 1, u.SW_UPDATE_FAILURES_LIMIT)
                                }, (0, c.iDBKVSet)(u.SW_LAST_UPDATE_INFO_KEY, l)
                            })
                        })) : void 0
                    })
                }()), "GET" === e.request.method.toUpperCase())) {
                var t, n = new URL(e.request.url);
                new URL(e.request.referrer, location);
                if (!(0, s.shouldIgnoreURL)(n, e.request))
                    if (n.href !== new URL(u.MANIFEST_URL, location).href)
                        if (n.href !== new URL(u.OFFLINE_IMAGE_URL, location).href) {
                            if ("navigate" === (t = e.request).mode || t.headers.get("Upgrade-Insecure-Requests") || -1 !== (t.headers.get("Accept") || "").indexOf("text/html")) {
                                var r = fetch(e.request);
                                return r = r.catch(function(e) {
                                    return caches.match(u.OFFLINE_PAGE_URL, {
                                        cacheName: u.PWA_ASSETS_CACHE
                                    }).catch(function() {}).then(function(e) {
                                        return e || Response.error()
                                    })
                                }), h++, r.then(function() {
                                    h--
                                }, function() {
                                    h--
                                }), void e.respondWith(r)
                            }
                        } else e.respondWith(caches.match(u.OFFLINE_IMAGE_URL, {
                            cacheName: u.PWA_ASSETS_CACHE
                        }).catch(function() {}).then(function(e) {
                            return e || fetch(u.OFFLINE_IMAGE_URL, {
                                credentials: "include",
                                redirect: "follow",
                                mode: "same-origin"
                            })
                        }));
                else e.respondWith(caches.match(u.MANIFEST_URL, {
                    cacheName: u.PWA_ASSETS_CACHE
                }).catch(function() {}).then(function(e) {
                    return e || fetch(u.MANIFEST_URL, {
                        credentials: "include",
                        redirect: "follow",
                        mode: "same-origin"
                    })
                }))
            }
        }), E && self.addEventListener("message", function(e) {
            if (e.data) {
                var t = e.data;
                if ("try-activate-installing" === t.action) {
                    if (h) return;
                    registration.installing && registration.installing.postMessage({
                        action: "activate"
                    })
                }
                "activate" === t.action && f && f(), T(e)
            }
        }), E && o.default.init()
    },
    DgR7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = n("WqMb"),
            i = n("PovR"),
            o = n("pp70"),
            a = n("k4D5");

        function c(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var s = ["badge", "body", "data", "silent", "tag", "requireInteraction", "renotify"],
            u = {
                init: function() {
                    (0, r.log)("pn.push notifier inited"), self.addEventListener("pushsubscriptionchange", this.onpushsubscriptionchange.bind(this)), self.addEventListener("push", this.onpush.bind(this)), self.addEventListener("notificationclick", this.onnotificationclick.bind(this)), self.addEventListener("notificationclose", this.onnotificationclose.bind(this))
                },
                onpushsubscriptionchange: function(e) {
                    e.oldSubscription && e.waitUntil(self.registration.pushManager.subscribe(e.oldSubscription.options).then(function(e) {
                        var t = e.getKey("p256dh"),
                            n = e.getKey("auth");
                        (0, r.makeFetch)("/push_notifier?act=a_subscribe", {
                            endpoint: e.endpoint,
                            key: t ? btoa(String.fromCharCode.apply(null, new Uint8Array(e.getKey("p256dh")))) : null,
                            token: n ? btoa(String.fromCharCode.apply(null, new Uint8Array(e.getKey("auth")))) : null
                        }).catch(function(e) {
                            return (0, a.statsPush)(a.STATS_EVENT_ERROR, {
                                error: a.STATS_ERROR_CODE_REQUEST_FAILED,
                                debug: e.stack || e.message
                            })
                        })
                    }))
                },
                onnotificationclick: function(e) {
                    if ((0, r.log)("pn.notification clicked", e), e.notification.data) {
                        var t = e.notification.data.actions[e.action || "default"];
                        t && (this["notification_action_" + t.type] ? e.waitUntil(this["notification_action_" + t.type](t, e)) : e.waitUntil((0, a.statsPush)(a.STATS_EVENT_ACTION, {
                            action: t.type,
                            error: a.STATS_ERROR_CODE_UNSUPPORTED_ACTION
                        }, e)))
                    }
                    e.notification.close()
                },
                onnotificationclose: function(e) {
                    (0, r.log)("pn.notification closed", e), e.waitUntil((0, a.statsPush)(a.STATS_EVENT_CLOSE, !1, e))
                },
                onpush: function(e) {
                    if ((0, r.log)("pn.pushHandler", e), e && e.data) {
                        var t = null;
                        try {
                            t = e.data.json()
                        } catch (t) {
                            e.waitUntil((0, a.statsPush)(a.STATS_EVENT_ERROR, {
                                error: a.STATS_ERROR_CODE_UNABLE_TO_PARSE,
                                debug: e.data.text()
                            }, e))
                        }
                        t && e.waitUntil(this.notify(t))
                    }
                },
                notification_action_open_url: function(e, t) {
                    return (0, r.log)("pn.notification_action_open_url", e), (0, o.openUrl)({
                        url: e.url,
                        focus: !0
                    }).then(function() {
                        return (0, a.statsPush)(a.STATS_EVENT_ACTION, {
                            action: e.type
                        }, t)
                    })
                },
                notification_action_post_url: function(e, t) {
                    return (0, r.log)("pn.notification_action_post_url", e), (0, r.makeFetch)(e.url).then(function() {
                        return (0, a.statsPush)(a.STATS_EVENT_ACTION, {
                            action: e.type
                        }, t)
                    }).catch(function(n) {
                        return (0, a.statsPush)(a.STATS_EVENT_ACTION, {
                            action: e.type,
                            error: a.STATS_ERROR_CODE_REQUEST_FAILED,
                            debug: n.stack || n.message
                        }, t)
                    })
                },
                notify: function(e) {
                    var t = this;
                    return (0, r.log)("pn.notify", e), e && (e.body || e.title || e.service) && Notification.permission === i.PUSH_NOTIFIER_PERMISSION_GRANTED ? new Promise(function(t) {
                        (e.icon || e.image) && t((0, r.getDevicePixelRatio)()), t()
                    }).then(function(n) {
                        var i = e.title,
                            o = void 0 === i ? "" : i,
                            u = s.reduce(function(t, n) {
                                var r = e[n];
                                return e[n] && (t[n] = r), t
                            }, {});
                        if (e.actions && e.data && e.data.actions && (u.actions = e.actions), e.icon) {
                            var f = (0, r.getSrcForSizeByDpi)(e.icon, 64, n);
                            f && (u.icon = f)
                        }
                        if (e.image) {
                            var l = (0, r.getSrcForSizeByDpi)(e.image, 360, n);
                            l && (u.image = l)
                        }
                        if (e.silent || (u.vibrate = e.vibrate || [0], e.sound && (u.sound = e.sound)), u.actions) {
                            var d = Object.entries(u.data.actions).reduce(function(e, n) {
                                var r = c(n, 2),
                                    i = r[0],
                                    o = r[1];
                                return t["notification_action_" + o.type] || (d[i] = 1), e
                            }, {});
                            u.actions = u.actions.reduce(function(e, t) {
                                return d[t.action] || e.push(t), e
                            }, [])
                        }
                        return self.registration.showNotification(o, u).then(function() {
                            return (0, a.statsPush)(a.STATS_EVENT_SHOW, !1, {
                                notification: e
                            })
                        })
                    }).catch(function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                        r.DEBUG && ("abort_notification_expired" === t ? (0, r.log)("pn.message_has_been_expired") : (console.error("reason: ".concat(t)), console.error(e)))
                    }) : Promise.resolve()
                }
            };
        t.default = u
    },
    IsZY: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SW_METADATA_PATH = t.SW_LAST_UPDATE_INFO_KEY = t.APP_SHELL_VALUE_SEPARATOR = t.SW_ACTIVATION_TIMEOUT = t.SW_UPDATE_FAILURES_LIMIT = t.SW_UPDATE_INTERVAL = t.MANIFEST_URL = t.OFFLINE_IMAGE_URL = t.OFFLINE_PAGE_URL = t.APP_SHELL_URL = t.PWA_ASSETS_CACHE = t.PWA_ASSETS_VERSION = t.PWA_CODE_CACHE = t.PWA_CODE_CACHE_PREFIX = t.PWA_ASSETS_CACHE_PREFIX = t.PWA_GENERAL_CACHE = t.SW_PUBLIC_KEY = t.SW_VERSIONS_DATA = void 0;
        var r = {
            codeFiles: {
                "/css/mobile/apps.css": "mADn0KJJoplHzkD5q884Q9eM9M4%2FiR7NrzHe8mP3RdQ%3D",
                "/css/mobile/article_common.css": "HHeaVCDkX1CYuEscRVjstfHLGaXI%2FIr2yh9kh2ygA84%3D",
                "/css/mobile/common.css": "xKwjLVy7Ja10BLCXCTaG2aQkWPQu4g0BW%2BEqZHsHQcA%3D",
                "/css/mobile/oauth_android.css": "0FKuX5K7F6e2okqJKOC2%2Fc55CJqoxCW3gfN4cDbiUGw%3D",
                "/css/mobile/oauth_base.css": "Ik1adUo01cUw%2FHmXLoRr9zFUuA0eLtGPK7ELnHH6OvI%3D",
                "/css/mobile/oauth_ios.css": "w%2F08KnGVJEhBEQjd%2FDO2MXaNwzE9xJNvYcdVexj6IAo%3D",
                "/css/mobile/promocode.css": "EU3%2FeECXXttd57QOAWnTmDsjzhJnBTOdQGi8%2FxokBEM%3D",
                "/js/cmodules/mobile/app_use_time.b4a77c109d29cf21a44e.js": "UL8zhJ7Dn6yHP%2BbeNUt2bV9f2L%2Fo9K%2BMm6Z1W4XL%2FqU%3D",
                "/js/cmodules/mobile/apps.35d3627b61866ecadefe.js": "aSde932qIt2RaqgIGIXQaaeufKJ7NhRCYBbfnFBMWTY%3D",
                "/js/cmodules/mobile/apps_connect.69925a41e448c496ff34.js": "RUzhB6iAxKhChrbaiH4EYb3e0MjhB7eVLpBu3NoA5y0%3D",
                "/js/cmodules/mobile/article.8ca36d29aa836787a548.js": "yX3AXjm2wJlplPbv6pHSrfB9R896EogE1YhsXdhXtZ0%3D",
                "/js/cmodules/mobile/b-2048c0308699da552418c348dad19b7a.0a5646c0202cafc3a90c.js": "YBfXxU6rSys12vQ0tDkwJ3CxGlhZ7QkK0eeWqdSH6%2BQ%3D",
                "/js/cmodules/mobile/b-85d019bbb10104652a1b65a76399b98b.f2c4214305d69c2d9946.js": "ZO4hjn2KUPiG2sdcTg262hQiZKf7uMcKQ0NQKUE3tjg%3D",
                "/js/cmodules/mobile/b-e24174c948c4d0e8bce37c4717cc3761.3501fa19f6351873df5e.js": "Wn2M6d%2BWlUr13OhT0gufzDi0Fap6GHLQwApiqXpAACc%3D",
                "/js/cmodules/mobile/banned_tutorial.a6c0f3cb70ab0a77e086.js": "dS1pkJn8m%2B1h%2BqTCHmwtECrmYcudEKsw8Njh6Skyrhs%3D",
                "/js/cmodules/mobile/common.be7bd6e03a2ec9d62a92.js": "2uNWes4%2B%2BMQL3ywZf4kvckRRd27pRkLVm%2FCmdEdWPUw%3D",
                "/js/cmodules/mobile/grip.992f697631d9a70eb7b5.js": "yVpofdefMmrHFzIGeuV3f1x6G%2FMc1p2qXzsaQeAjgXs%3D",
                "/js/cmodules/mobile/debugLog.913df05f83973ecb1fca.js": "H4WDe9JUalHKJ6YwT%2FAzH74RT0sNHrJ8kOhnsbA82J4%3D",
                "/js/cmodules/mobile/js_errors_logger.b9dc2dac3858c7212dd6.js": "P%2BFjgzhHcGORlH%2B3ne9MjH4RPHW%2BfQPA7qfdVMse4Tc%3D",
                "/js/cmodules/mobile/openapi.89f0184dedf73166aaea.js": "Pidcf1DMHYTTkh7Ci9gsut4B%2Fp8N7nCHd58FwsNYFI4%3D",
                "/js/cmodules/mobile/performance_logger.82e438f9cb15c980f4d8.js": "yitVxAdHTFYPnFtwVoKlZJGPQpQbBQfw1vGYxmnlSeA%3D",
                "/js/cmodules/mobile/polyfills.693a8efdb43e4e0171a8.js": "WVW%2FA8WI84cbCjmrjVjYZ5w3zN01IUx3%2B3c6lVEdwuo%3D",
                "/js/cmodules/mobile/promocode.5dbf2aac82443e2472f4.js": "t5mwP%2BgPvR5IsL959fKzqiRx4EEyOiZSf82JUsVc3Ms%3D",
                "/js/cmodules/mobile/qrcode.d693f5a14c6a8cf21f39.js": "izmI0i8RJT1Xz3wn0RrKpeGjYNNWKTAFvbUwl4B8s4Y%3D",
                "/js/cmodules/mobile/vendors.2773b57485e379f375b2.js": "wW0AoEcu6lf3fPK1%2Fsvq1LF80eIMLjjSckf9p%2Fr8K6Q%3D",
                "/js/cmodules/mobile/vkapps.08386552838b72462344.js": "7TZdrdEo%2FFBqvQ3ebeO2bkSQESNCgVPLK3qMF7Lo1PY%3D"
            },
            codeVersion: "4e3OSp+AV2EyrK/WZJn3UI7aYl0BkMDx2TAgfTcD0sA=",
            pwaVersion: 200
        };
        t.SW_VERSIONS_DATA = r;
        t.SW_PUBLIC_KEY = "30820122300d06092a864886f70d01010105000382010f003082010a0282010100cceca2a8f138bc514b8d536b7a1e66611219404c8d1425580c89bdd9d390f541bd5dcc5dee5b07f64a3b9cf85d8d8f61ecc740c2b14c6f84776b1d03e996c362a6d70950408ffdcaaaf1440d2e750714c57a4f3b65fc2aa53ce0bdcaeb27c868dc15daadfa1825dfdcf6670e439b2bfb4f734099d58b48a69394a43110222a8f927057a70e6581190a3c3b5e67d40be93c7c5e84f6a41f530d4f9f8a1406d455af0ab127fcbf5df7c0cdcb6c53678997dc758106b27e1250b5b7fd8a21fc4919317d70d6ebba0beca50fbc4aee036a22bc47d57d45d6a2ad50a83f7020fd0ee4de7ffe41f4af9984d20e9c9111e44994d16014127ca6b313c1f64de260a635d50203010001";
        t.PWA_GENERAL_CACHE = "vk:PWA_GENERAL";
        t.PWA_ASSETS_CACHE_PREFIX = "vk:PWA_ASSETS";
        t.PWA_CODE_CACHE_PREFIX = "vk:PWA_CODE";
        var i = "vk:PWA_CODE:" + r.codeVersion;
        t.PWA_CODE_CACHE = i;
        var o = r.pwaVersion;
        t.PWA_ASSETS_VERSION = o;
        var a = "vk:PWA_ASSETS:" + o;
        t.PWA_ASSETS_CACHE = a;
        t.APP_SHELL_URL = "/pwa.php?act=app_shell";
        var c = "/pwa.php?act=offline_page&ver=" + o;
        t.OFFLINE_PAGE_URL = c;
        var s = "/pwa.php?act=offline_image&ver=" + o;
        t.OFFLINE_IMAGE_URL = s;
        var u = "/manifest.webmanifest?ver=" + o;
        t.MANIFEST_URL = u;
        t.SW_UPDATE_INTERVAL = 3e5;
        t.SW_UPDATE_FAILURES_LIMIT = 3;
        t.SW_ACTIVATION_TIMEOUT = 3e4;
        t.APP_SHELL_VALUE_SEPARATOR = ":";
        t.SW_LAST_UPDATE_INFO_KEY = "sw_lastUpdateInfo";
        t.SW_METADATA_PATH = "/sw_cache_metadata"
    },
    LQzV: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.checkSupported = function() {
            if (function() {
                    if (r.includes("android") && r.includes("; wv)")) return !0;
                    if (r.includes("xiaomi/miuibrowser")) return !0;
                    if (r.includes("valve steam")) return !0;
                    return !1
                }()) return !1;
            if (!self.crypto || !crypto.subtle) return !1;
            if (!self.TextEncoder) return !1;
            if (o) {
                return +o[2] >= 50
            }
            if (a) {
                return +a[2] >= 48
            }
            return !0
        }, t.shouldIgnoreURL = function(e, t) {
            if ("http:" === e.protocol || e.origin !== location.origin) return !0;
            var n = e.pathname.replace(/\/+/g, "/");
            if ("/pwa.php" === n && (e.search.includes("act=offline_image") || e.search.includes("act=ios_shortcut"))) return !1;
            if ("/away.php" === n || "/away" === n || "/helpdesk" === n || "/fv" === n || "/data_protection" === n || "/authorize" === n || "/pwa.php" === n || "/" === n && e.search.includes("act=go2app") || /^\/(doc)(\d+_\d+)/.test(n) || /^\/(away|article)(-?\d+_\d+)/.test(n) || n.startsWith("/@") && /(&|\?)(ww|web-view)/.test(e.search) || "/photos.php" === n && e.search.includes("act=done_") || (t.headers.get("Content-Type") || "").includes("multipart/form-data")) return !0;
            return !1
        }, t.isAuthURL = function(e) {
            var t = e.pathname.replace(/\/+/g, "/");
            if (("/login" === t || "/login.php" === t) && /(\?|&)(act|role)=[\s\S]/.test(e.search)) return !0;
            return !1
        }, t.isFirefox = t.isChrome = t.isIOS = void 0;
        var r = navigator.userAgent.toLowerCase(),
            i = /iphone|ipod|ipad/.test(r);
        t.isIOS = i;
        var o = r.match(/(chrome)\/(\d+)\.(\d+)/);
        t.isChrome = o;
        var a = r.match(/(firefox)\/(\d+)\.(\d+)/);
        t.isFirefox = a
    },
    "P/qz": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.iDB = c, t.iDBTransaction = s, t.iDBSTATS = u, t.iDBSTATSFlush = function(e) {
            return u().then(function(t) {
                return new Promise(function(n, r) {
                    var i = [],
                        o = s(t, a),
                        c = o.openCursor();
                    c.onerror = function(e) {
                        return r(new Error(e.target.errorCode))
                    }, c.onsuccess = function(t) {
                        var a = t.target.result;
                        a && (delete a.value.id, i.push(a.value)), --e > 0 && a ? a.continue() : ((c = o.clear()).onerror = function(e) {
                            return r(new Error(e.target.errorCode))
                        }, c.onsuccess = n(i))
                    }
                })
            })
        }, t.iDBSTATSPush = function(e) {
            return u().then(function(t) {
                return new Promise(function(n, r) {
                    var i = s(t, a).add(e);
                    i.onerror = function(e) {
                        return r(new Error(e.target.errorCode))
                    }, i.onsuccess = function() {
                        return n()
                    }
                })
            })
        }, t.iDBKV = f, t.iDBKVGet = function(e) {
            return f().then(function(t) {
                return new Promise(function(n, r) {
                    var o = s(t, i).get(e);
                    o.onerror = function(e) {
                        return r(new Error(e.target.errorCode))
                    }, o.onsuccess = function() {
                        return n(o.result && o.result.val)
                    }
                })
            })
        }, t.iDBKVSet = function(e, t) {
            return f().then(function(n) {
                return new Promise(function(r, o) {
                    var a = s(n, i).put({
                        key: e,
                        val: t
                    });
                    a.onerror = function(e) {
                        return o(new Error(e.target.errorCode))
                    }, a.onsuccess = function() {
                        return r()
                    }
                })
            })
        }, t.iDBKVRemove = function(e) {
            return f().then(function(t) {
                return new Promise(function(n, r) {
                    var o = s(t, i).delete(e);
                    o.onerror = function(e) {
                        return r(new Error(e.target.errorCode))
                    }, o.onsuccess = function() {
                        return n()
                    }
                })
            })
        };
        var r = "sw_keyval_db",
            i = "keyval",
            o = "sw_stats_db",
            a = "stats";

        function c(e, t) {
            return new Promise(function(n, r) {
                var i = self.indexedDB || self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB;
                if (!i) return r(new Error("IndexedDB is unavailable"));
                var o = i.open(e);
                o.onerror = function(e) {
                    return r(new Error(e.target.errorCode))
                }, o.onsuccess = function(e) {
                    return n(e.target.result)
                }, o.onupgradeneeded = function(e) {
                    var r = e.target.result;
                    return t(r).then(function(e) {
                        return n(e)
                    })
                }
            })
        }

        function s(e, t) {
            return e.transaction([t], "readwrite").objectStore(t)
        }

        function u() {
            return c(o, function(e) {
                return new Promise(function(t, n) {
                    var r = e.createObjectStore(a, {
                        keyPath: "id",
                        autoIncrement: !0
                    });
                    r.onerror = function(e) {
                        return n(new Error(e.target.errorCode))
                    }, r.oncomplete = function() {
                        return t(e)
                    }
                })
            })
        }

        function f() {
            return c(r, function(e) {
                return new Promise(function(t, n) {
                    var r = e.createObjectStore(i, {
                        keyPath: "key"
                    });
                    r.onerror = function(e) {
                        return n(new Error(e.target.errorCode))
                    }, r.oncomplete = function() {
                        return t(e)
                    }
                })
            })
        }
    },
    PovR: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PUSH_NOTIFIER_PERMISSION_DENIED = t.PUSH_NOTIFIER_PERMISSION_DEFAULT = t.PUSH_NOTIFIER_PERMISSION_GRANTED = t.DAY = t.HOUR = t.MINUTE = t.SECOND = void 0;
        t.SECOND = 1e3;
        t.MINUTE = 6e4;
        t.HOUR = 36e5;
        t.DAY = 864e5;
        t.PUSH_NOTIFIER_PERMISSION_GRANTED = "granted";
        t.PUSH_NOTIFIER_PERMISSION_DEFAULT = "default";
        t.PUSH_NOTIFIER_PERMISSION_DENIED = "denied"
    },
    WqMb: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.log = u, t.sendAction = f, t.message = l, t.getDevicePixelRatio = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            if (void 0 !== a) return Promise.resolve(a);
            return self.clients.matchAll({
                type: "window"
            }).then(function(e) {
                return e.length ? f(e[0], "devicePixelRatio").then(function(e) {
                    return !!e && ((0, r.iDBKVSet)(c, e).catch(function() {
                        return u("DPI db save failed")
                    }), e)
                }) : (0, r.iDBKVGet)(c)
            }).then(function(t) {
                return t ? (a = t, t) : e
            }).catch(function() {
                return Promise.resolve(e)
            })
        }, t.makeFetch = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            "POST" === (n = Object.assign({
                method: "POST",
                credentials: "include"
            }, n)).method && (t = Object.assign({
                sw: 1
            }, t), n.headers = new Headers({
                "Content-Type": "application/x-www-form-urlencoded"
            }), n.body = Object.entries(t).map(function(e) {
                var t = o(e, 2),
                    n = t[0],
                    r = t[1];
                return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(r))
            }).join("&"));
            return fetch(new Request(e, n)).then(function(e) {
                return e.text()
            }).then(function(e) {
                var t = o(d(e), 2),
                    n = t[0],
                    r = t[1];
                return "0" == n ? Promise.resolve(r || []) : Promise.reject(new Error("8" == n ? r : "Unsupported ajax answer"))
            })
        }, t.fetchParseAnswer = d, t.getSrcForSizeByDpi = function(e, t, n) {
            if (u("sw.getSrcForSizeByDpi", e, t, n), !e || !Array.isArray(e)) return;
            var r = t * n,
                i = null,
                o = void 0;
            return e.forEach(function(e) {
                var t = Math.abs(e.width - r);
                (null === i || t < i) && (i = t, o = e)
            }), o ? o.url : void 0
        }, t.getNotifications = _, t.closeFilteredNotififcation = function(e) {
            return _().then(function(t) {
                t.filter(e).forEach(function(e) {
                    u("sw.delete_notification", e), e.close()
                })
            })
        }, t.DEBUG = void 0;
        var r = n("P/qz"),
            i = n("rhMz");

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var a, c = "dpi",
            s = !1;

        function u() {
            var e;
            return s && self.console && (e = console).log.apply(e, arguments)
        }

        function f(e, t, n) {
            var r = Array.isArray(t) ? t : [
                [t, n]
            ];
            return l(e, {
                actions: r
            }).then(function(e) {
                return e.answers ? Promise.resolve(1 === r.length ? e.answers[0] : e.answers) : Promise.reject(new Error("ServiceWorkerClient answer is incorrect"))
            })
        }

        function l(e, t) {
            return u("sw.message", t), new Promise(function(n, r) {
                var o = new MessageChannel,
                    a = setTimeout(r, 300);
                o.port1.onmessage = function(e) {
                    a && clearTimeout(a), u("sw.onmessage_port1", e), (0, i.messageCheck)(e) ? n(e.data.data) : r()
                }, e.postMessage((0, i.messageWrap)(t), [o.port2])
            })
        }

        function d(e) {
            var t = null,
                n = null;
            return e.indexOf("\x3c!--") ? (n = JSON.parse(e)).payload ? (t = n.payload[0], n = n.payload[1]) : (t = n[2], n = n[3]) : (e = e.replace(/^<!--/, "").replace(/-<>-(!?)>/g, "--$1>"), t = (n = e.split("<!>").slice(4)).shift(), n.forEach(function(e, t) {
                if (!e.indexOf("<!")) {
                    var r = e.indexOf(">"),
                        i = e.substr(2, r - 2);
                    switch (e = e.substr(r + 1), i) {
                        case "json":
                            n[t] = JSON.parse(e);
                            break;
                        case "int":
                        case "float":
                            n[t] = Number(e);
                            break;
                        case "bool":
                            n[t] = !!e;
                            break;
                        case "null":
                            n[t] = null;
                            break;
                        default:
                            n.pop()
                    }
                }
            }), "8" === t && (n = n[0])), [t, n]
        }

        function _() {
            return self.registration.getNotifications ? self.registration.getNotifications() : Promise.reject()
        }
        t.DEBUG = s
    },
    "X/TB": function(e, t, n) {
        "use strict";
        self.clients.claim || (self.clients.claim = function() {
            return Promise.resolve()
        })
    },
    k4D5: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.statsPush = function(e, t, n) {
            var i = {
                    type: e,
                    ts: Date.now()
                },
                a = !1;
            n && n.notification && n.notification.data && (n.notification.data.stat && (i.stat = n.notification.data.stat), n.notification.data.to_id && (i.to_id = n.notification.data.to_id), n.notification.data.type && (i.type_id = n.notification.data.type), n.notification.data.flush && (a = !0));
            t && (t.action && (i.action = t.action), t.error && (i.error = t.error), t.debug && (i.debug = JSON.stringify(t.debug).substr(0, s)));
            return (0, r.log)("sw.statsPush", i), (0, o.iDBSTATSPush)(i).then(l(a))
        }, t.statsFlush = l, t.statsFlushed = d, t.statsSend = _, t.STATS_ERROR_CODE_RUNTIME = t.STATS_ERROR_CODE_UNABLE_TO_PARSE = t.STATS_ERROR_CODE_UNSUPPORTED_ACTION = t.STATS_ERROR_CODE_REQUEST_FAILED = t.STATS_EVENT_ACTION = t.STATS_EVENT_CLOSE = t.STATS_EVENT_SHOW = t.STATS_EVENT_ERROR = void 0;
        var r = n("WqMb"),
            i = n("PovR"),
            o = n("P/qz"),
            a = 5 * i.MINUTE,
            c = 100,
            s = 500,
            u = "stats_flush_ts";
        t.STATS_EVENT_ERROR = "error";
        t.STATS_EVENT_SHOW = "show";
        t.STATS_EVENT_CLOSE = "close";
        t.STATS_EVENT_ACTION = "action";
        t.STATS_ERROR_CODE_REQUEST_FAILED = 1;
        t.STATS_ERROR_CODE_UNSUPPORTED_ACTION = 2;
        t.STATS_ERROR_CODE_UNABLE_TO_PARSE = 3;
        t.STATS_ERROR_CODE_RUNTIME = 4;
        var f = null;

        function l(e) {
            if (l.flushing) return (0, r.log)("sw.statsFlush"), Promise.resolve();
            l.flushing = !0, f && clearTimeout(f);
            var t = Date.now();
            return new Promise(function(e) {
                e(l.flushTs || (0, o.iDBKVGet)(u))
            }).then(function(n) {
                if (t - n < a && !e) return (0, r.log)("sw.statsFlush : Too early to flush"), Promise.reject()
            }).then(function() {
                return (0, o.iDBSTATSFlush)(c)
            }).then(function(e) {
                l.flushTs = t, _(e), (0, o.iDBKVSet)(u, t).then(function() {
                    return Promise.resolve(d(l, !0))
                })
            }).catch(function() {
                return Promise.resolve(d(l))
            })
        }

        function d(e, t) {
            return new Promise(function(n) {
                e.flushing = !1, t ? n() : (f && clearTimeout(f), (0, r.log)("sw.statsFlushed"), f = setTimeout(function() {
                    return n(l())
                }, a))
            })
        }

        function _(e) {
            e && e.length ? ((0, r.log)("sw.statsSend : Sending stats, rows " + (e && e.length)), (0, r.makeFetch)("/push_notifier?act=stats", {
                json: JSON.stringify(e)
            }).catch(function(e) {
                return (0, r.log)("sw.statsSend", e)
            })) : (0, r.log)("sw.statsSend : No events, skip stats sending")
        }
    },
    pp70: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.openUrl = a, t.removeMessageNotification = c, t.cleanNotification = s, t.updateMessageNotifications = u, t.getMessagesMetaData = f, t.actionsCaller = d, t.buildActionsCaller = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.assign({}, l, e);
            return function(e) {
                return d(e, t)
            }
        }, t.DEFAULT_ACTIONS = void 0;
        var r = n("WqMb"),
            i = n("rhMz");

        function o(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function a(e) {
            if ((0, r.log)("sw.action_openUrl", e), e.focus) {
                var t = null;
                return self.clients.matchAll({
                    type: "window",
                    includeUncontrolled: !0
                }).then(function(n) {
                    if (n.forEach(function(n) {
                            n.url === e.url && "focus" in n && (null === t || "visible" === n.visibilityState && ("visible" !== t.visibilityStyle || !t.focused && n.focused)) && (t = n)
                        }), !t) return self.clients.openWindow(e.url);
                    t.focus()
                })
            }
            return Promise.resolve(self.clients.openWindow(e.url))
        }

        function c(e) {
            return (0, r.closeFilteredNotififcation)(function(t) {
                if (t.tag.indexOf("web_push_msg")) return !1;
                var n = t.data,
                    r = n.id,
                    i = n.type;
                return r === "".concat(i, "_").concat(e.peerId, "_").concat(e.msgId)
            })
        }

        function s() {
            return (0, r.closeFilteredNotififcation)(function(e) {
                return e.tag.indexOf("web_push_msg")
            })
        }

        function u(e) {
            return (0, r.closeFilteredNotififcation)(function(t) {
                if (t.tag.indexOf("web_push_msg")) return !1;
                var n = t.data.id,
                    r = o((void 0 === n ? "" : n).split("_"), 3),
                    i = r[1],
                    a = r[2],
                    c = e[i];
                return !c || a < c
            })
        }

        function f() {
            return (0, r.getNotifications)().then(function(e) {
                return e.reduce(function(e, t) {
                    if (t.tag.indexOf("web_push_msg")) return e;
                    var n = t.data.id,
                        r = o((void 0 === n ? "" : n).split("_"), 3),
                        i = r[1],
                        a = r[2];
                    return i && a && (e[i] = a), e
                }, {})
            }).catch(function(e) {
                return (0, r.log)(e)
            })
        }
        var l = {
            openUrl: a,
            cleanNotification: s,
            removeMessageNotification: c,
            updateMessageNotifications: u,
            getMessagesMetaData: f
        };

        function d(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((0, i.messageCheck)(e)) {
                var n = e.data.data;
                if (Array.isArray(n.actions)) {
                    var o = [];
                    n.actions.forEach(function(n) {
                        var i = n[0],
                            a = n[1];
                        (0, r.log)("sw.call_action: " + i), o.push(Promise.resolve(t[i] ? t[i](a, e) : void 0))
                    }), Promise.all(o).then(function(t) {
                        var n = {};
                        t.forEach(function(e, t) {
                            void 0 !== e && (n[t] = e)
                        }), Object.keys(n).length && e.ports[0].postMessage((0, i.messageWrap)({
                            answers: n
                        }))
                    })
                }
            }
        }
        t.DEFAULT_ACTIONS = l
    },
    qkmO: function(e, t, n) {
        "use strict";
        n("8EcH")
    },
    rhMz: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.messageWrap = function(e) {
            return {
                type: r,
                data: e
            }
        }, t.messageCheck = function(e) {
            return ("" === e.origin || e.origin.match(/^https:\/\/([a-zA-Z0-9\-\.]+\.)?vk\.com$/)) && e.data && e.data.data && e.data.type === r
        };
        var r = "sw"
    }
});