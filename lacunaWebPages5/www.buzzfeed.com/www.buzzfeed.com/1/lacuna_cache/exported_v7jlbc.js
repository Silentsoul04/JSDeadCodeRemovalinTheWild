// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

        (function() {

            window.bfa('track/page/view', {
                data: {
                    'url': window.location.pathname
                },
                opt: {
                    'dimension1': 'feedpager'
                }
            });

            window.BZFD.Util.createScript({
                src: 'https://polyfill.io/v3/polyfill.min.js?flags=gated&features=default,es2015,es2016,es2017,IntersectionObserver'
            });

            ! function(e) {
                function r(r) {
                    for (var n, i, a = r[0], c = r[1], f = r[2], s = 0, p = []; s < a.length; s++) i = a[s], o[i] && p.push(o[i][0]), o[i] = 0;
                    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
                    for (l && l(r); p.length;) p.shift()();
                    return u.push.apply(u, f || []), t()
                }

                function t() {
                    for (var e, r = 0; r < u.length; r++) {
                        for (var t = u[r], n = !0, a = 1; a < t.length; a++) {
                            var c = t[a];
                            0 !== o[c] && (n = !1)
                        }
                        n && (u.splice(r--, 1), e = i(i.s = t[0]))
                    }
                    return e
                }
                var n = {},
                    o = {
                        0: 0
                    },
                    u = [];

                function i(r) {
                    if (n[r]) return n[r].exports;
                    var t = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(t.exports, t, t.exports, i), t.l = !0, t.exports
                }
                i.e = function(e) {
                    var r = [],
                        t = o[e];
                    if (0 !== t)
                        if (t) r.push(t[2]);
                        else {
                            var n = new Promise(function(r, n) {
                                t = o[e] = [r, n]
                            });
                            r.push(t[2] = n);
                            var u, a = document.createElement("script");
                            a.charset = "utf-8", a.timeout = 120, i.nc && a.setAttribute("nonce", i.nc), a.src = function(e) {
                                return i.p + "js/" + ({
                                    1: "vendor",
                                    2: "beacons-external"
                                }[e] || e) + "." + {
                                    1: "86729727be5839e91fff",
                                    2: "558f769bc7b20137abe5",
                                    9: "d1d436914d70bc3bb7d3"
                                }[e] + ".js"
                            }(e), u = function(r) {
                                a.onerror = a.onload = null, clearTimeout(c);
                                var t = o[e];
                                if (0 !== t) {
                                    if (t) {
                                        var n = r && ("load" === r.type ? "missing" : r.type),
                                            u = r && r.target && r.target.src,
                                            i = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + u + ")");
                                        i.type = n, i.request = u, t[1](i)
                                    }
                                    o[e] = void 0
                                }
                            };
                            var c = setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_v7jlbc.js[3698:3899]", functionData => eval(functionData))}, 12e4);
                            a.onerror = a.onload = u, document.head.appendChild(a)
                        }
                    return Promise.all(r)
                }, i.m = e, i.c = n, i.d = function(e, r, t) {
                    i.o(e, r) || Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t
                    })
                }, i.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, i.t = function(e, r) {lacuna_lazy_load("lacuna_cache/exported_v7jlbc.js[4641:5243]", functionData => eval(functionData))}, i.n = function(e) {
                    var r = e && e.__esModule ? function() {lacuna_lazy_load("lacuna_cache/exported_v7jlbc.js[5324:5388]", functionData => eval(functionData))} : function() {
                        return e
                    };
                    return i.d(r, "a", r), r
                }, i.o = function(e, r) {
                    return Object.prototype.hasOwnProperty.call(e, r)
                }, i.p = "/static-assets/", i.oe = function(e) {lacuna_lazy_load("lacuna_cache/exported_v7jlbc.js[5680:5745]", functionData => eval(functionData))};
                var a = window.webpackJsonp = window.webpackJsonp || [],
                    c = a.push.bind(a);
                a.push = r, a = a.slice();
                for (var f = 0; f < a.length; f++) r(a[f]);
                var l = c;
                t()
            }([]);
            //# sourceMappingURL=webpack-runtime.dfcdb5f174c6f3ea5090.js.map

            if (window.BZFD.Config.enhanced) {
                window.BZFD.Util.createScript({
                    src: '/static-assets/js/vendor.86729727be5839e91fff.js'
                });

                window.BZFD.Util.createScript({
                    src: '/static-assets/js/core.a86f23966296e1c2e732.js'
                });

            }
        }());
    