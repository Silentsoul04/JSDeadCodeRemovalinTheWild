
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
                i.e = null, i.m = e, i.c = n, i.d = function(e, r, t) {
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
                }, i.t = null, i.n = function(e) {
                    var r = e && e.__esModule ? null : function() {
                        return e
                    };
                    return i.d(r, "a", r), r
                }, i.o = function(e, r) {
                    return Object.prototype.hasOwnProperty.call(e, r)
                }, i.p = "/static-assets/", i.oe = null;
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
    