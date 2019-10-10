/*Copyright (c) 2011, 2018, Oracle and/or its affiliates.  All rights reserved.*/
try {
    (function(n, r) {
        function Fa(a) {
            if (m.b.ad()) return AB_SCAFFOLD.sampling.onReady(function() {
                Ga(a)
            });
            Ga(a)
        }

        function Ga(a) {
            m.m.a.sxaz("trackingReady", {
                callback: Fa
            });
            if (!m.b.ad() || !AB_SCAFFOLD.sampling.tagShouldNotTrack()) {
                ta = q.h;
                q.h++;
                q.i[ta] = !1;
                m.bb.c();
                "undefined" === typeof a && (a = m.x.d && m.x.d(E));
                var l = a && m.v.b(null, a, {}, null, !0);
                l && l.qs && l.qs.d && "string" === typeof l.qs.d && (m.j = l.qs.d.split(":")[0]);
                l = null;
                l = !1;
                if (l = m.b.ad() ? !AB_SCAFFOLD.sampling.isEnabled() : m.d.ao().isInApp && !m.d.cr()) delete m.d._sprg,
                    delete m.d._sdrc, ua = !1, m.d.fn = !0, m.d.fl = !0;
                m.h = 16;
                m.i = 8;
                m.d._sprg && void 0 !== m.d._sprg[m.j] && (m.h = m.d._sprg[m.j], m.i = parseInt(m.h / 2));
                m.b.ad() && (AB_SCAFFOLD.sampling.isActiveSampling() ? m.h = 1 : (delete m.h, delete m.i));
                l && (delete m.h, delete m.i);
                m.h && (ua = !0);
                m.u.l();
                m.d.az.c || (m.d.az.c = !0, q.dcsx.ynds(window, "unload", "unload-" + m.d.az.a, "unloadFn" + m.d.az.a), q.dcsx.ynds(window, "beforeunload", "unload-" + m.d.az.a, "beforeunloadFn" + m.d.az.a));
                q.swde.azsx("unload-" + m.d.az.a, Ha, {
                    once: !0
                });
                m.m.a.azsx("allLocalAdsKilled",
                    function() {
                        q.swde.sxaz("unload-" + m.d.az.a, {
                            callback: Ha
                        })
                    }, {
                        once: !0
                    });
                m.p.e(m.l.f, 100);
                m.b.ah() && m.p.f(ra, 3E5);
                if (m.d.cw() && (m.q.f() || m.q.k())) m.q.o(), m.b.de() && Ia && AB_SCAFFOLD.sampling.set({
                    enabled: !1,
                    multiplier: 1,
                    active: !1
                });
                else {
                    "undefined" === typeof a && (a = m.x.d(E));
                    if (m.b.ag()) {
                        var l = "number" === typeof m.h,
                            d = 1;
                        ua && (l ? (d = m.b.ac(m.h, m.i), d = d.sample ? d.multiplier : 0) : d = Pa);
                        AB_SCAFFOLD.sampling.set({
                            enabled: ua,
                            multiplier: d,
                            active: l
                        })
                    }
                    l = E.parentNode;
                    "undefined" === typeof a && (a = {});
                    m.w.i(m.d.az.a, m.d.bb);
                    Qa(a, 1E4);
                    m.f.aq(a);
                    m.v.b(17, a);
                    m.ax.c(l, a)
                }
            }
        }

        function Qa(a, l) {
            m.d.aw.adFindingTimeout = m.p.f(function() {
                a && a.shouldKillTimeout || !1 !== q.i[ta] || (m.v.b(11, a), m.m.a.zaxs("adNotFoundTimeout"), ra())
            }, l)
        }
        var M;
        M = "undefined" === typeof AB_SCAFFOLD ? 0 : AB_SCAFFOLD.type;
        var m = {},
            Q = "TURNERDFP1";
        r.floor(r.random() * r.pow(10, 12));
        (function(a) {
            function l(a) {
                return "function" !== typeof a ? function() {
                    return a
                } : a
            }

            function d(a) {
                return {
                    get: function(c, b) {
                        if (c && c._MoatProxySet && "undefined" !== typeof c._MoatProxySet[b]) return c._MoatProxySet[b];
                        if ("string" === typeof b && a)
                            for (var f = 0; f < a.length; f++) {
                                var e = a[f],
                                    d = l(e.func);
                                if (e.exp.constructor === RegExp && e.exp.test(b) || e.exp.constructor === String && e.exp == b) return f = d(c, b), c._MoatProxySet[b] = f
                            }
                        return null
                    },
                    getPrototypeOf: function(a) {
                        return null
                    },
                    set: function(a, c, b) {
                        return a._MoatProxySet[c] = b
                    }
                }
            }

            function g(a, c, b, f) {
                if (!a[c]) {
                    var e;
                    try {
                        e = new Proxy({
                            _MoatProxySet: {
                                _MoatProxyOf: c
                            }
                        }, d(b))
                    } catch (g) {
                        throw g.message = "ES6 proxy not found when proxying " + c, g;
                    }
                    f && (f[c] = e);
                    return e
                }
                return a[c]
            }

            function h(a,
                c) {
                this.exp = a;
                this.func = c
            }

            function k() {
                return function() {
                    return 0
                }
            }

            function c(a) {
                return {
                    style: {},
                    _MoatProxyOf: "HTMLElement",
                    tagName: a,
                    ownerDocument: document,
                    appendChild: function() {},
                    removeChild: function() {},
                    addEventListener: function() {},
                    getElementsByTagName: function(a) {
                        return []
                    }
                }
            }
            a.a = {};
            var e = this,
                b = new h(/^get[A-Z]/m, 0);
            new h(/^insert[A-Z]/m, 0);
            new h(/^append[A-Z]/m, 0);
            new h(/erCase$/gm, "");
            var f = new h(/^getElements*[A-Z]/m, function() {
                    return function() {
                        return []
                    }
                }),
                t = new h(/^create[A-Z]/m, k),
                u = new h(/^(?!(MoatSuper|Math|MmJsBridge))[A-Z][a-z].*/m,
                    k);
            new h(/subsc.*_$/m, 0);
            var y = new h("valueOf", 0),
                p = new h(/^MoatMAK/m, 0),
                w = new h(/.*/m, ""),
                D = new h(/.*/m, 0),
                v = new h(/.*/m, function(a, c) {
                    return e ? e[c] : 0
                });
            a.a.createWindow = function() {
                var c = g(e, "window", [b, p, u, t, y, v], null);
                a.a.a(c) && (c.window = c, c.parent = c, c.top = c, c.Function = Function, c.setTimeout = k(), c.clearTimeout = k(), c.clearInterval = k(), c.setInterval = k(), c.history = []);
                return a.a.b = c
            };
            a.a.navigator = function() {
                return g(e, "navigator", [w], window)
            };
            a.a.document = function() {
                var d = g(e, "document", [f, b], window);
                a.a.a(d) && (d.documentElement = c("HTML"), d.createElement = c, d.defaultView = window, d.body = {
                    appendChild: function(a) {
                        return a
                    },
                    removeChild: function() {}
                }, d.scripts = []);
                return d
            };
            a.a.location = function() {
                return g(e, "location", [w], window)
            };
            a.a.screen = function() {
                return g(e, "screen", [D], window)
            };
            a.a.c = function(a, c, b, f) {
                f = f || window;
                setTimeout = b ? a.bind(b) : a;
                clearTimeout = b ? c.bind(b) : c;
                a._MoatProxyOf = "setTimeout";
                c._MoatProxyOf = "clearTimeout";
                f.setTimeout = setTimeout;
                f.clearTimeout = clearTimeout
            };
            a.a.d = function(a, c,
                b, f) {
                f = f || window;
                setInterval = b ? a.bind(b) : a;
                clearInterval = b ? c.bind(b) : c;
                a._MoatProxyOf = "setInterval";
                c._MoatProxyOf = "clearInterval";
                f.setInterval = setInterval;
                f.clearTimeout = clearInterval
            };
            a.a.a = function(a) {
                return a && a._MoatProxyOf
            };
            a.a.e = function(c) {
                return (c = e[c]) && !a.a.a(c)
            };
            a.a.f = !a.a.e("window") && !a.a.e("document");
            a.a.g = function(c) {
                a.a.a(navigator) && (navigator.userAgent = c)
            }
        })(m);
        m.a.f && (this.__moatBPM = m.a, eval("var window = this.__moatBPM.createWindow();var navigator = this.__moatBPM.navigator();var document = this.__moatBPM.document();var location = this.__moatBPM.location();var screen = this.__moatBPM.screen();var setTimeout = window['setTimeout'];var clearTimeout = window['clearTimeout'];var setInterval = window['setInterval'];var clearInterval = window['clearInterval'];"),
            this.__moatBPM = void 0);
        var za, Aa, Ba, ta = 0,
            Ca = {},
            V = {},
            H = {},
            va = [],
            x = {},
            wa = !1,
            Ja = {
                15: "",
                12: "",
                6: "",
                7: ""
            },
            Y, Ka = function() {
                for (var a in V) V.hasOwnProperty && V.hasOwnProperty(a) && V[a] && m.b.a(V[a]);
                for (a = 0; a < va.length; a++) m.b.b(va[a]);
                for (var l in H) H.hasOwnProperty && H.hasOwnProperty(l) && H[l] && (m.b.a(H[l].tid), H[l] = !1);
                V = {};
                va = [];
                E = null;
                m.c = null;
                m.d.a = null
            },
            ra = function() {
                m.e.a(null, 0) || m.e.b();
                m.f && m.f.a();
                Ka()
            };
        m.g = ra;
        m.h = null;
        m.i = null;
        m.j = "";
        (function(a) {
            function l(d) {
                return (d = a.b.c.toString.call(d)) && ("[object Array]" ===
                    d || "[object Array Iterator]" === d)
            }
            a.b = {};
            a.b.c = {};
            a.b.d = l;
            a.b.e = function(a) {
                return a && a.document && a.location && a[__ale + rt__] && a[__setInte + rval__]
            };
            a.b.f = function(d) {
                if (null == d || a.b.e(d)) return !1;
                var g = d.length;
                return 1 === d.nodeType && g ? !0 : "string" === typeof d || l(d) || 0 === g || "number" === typeof g && 0 < g && g - 1 in d
            };
            a.b.forEach = function(d, g, h, k) {
                var c, e = typeof d;
                if (d)
                    if ("function" === e)
                        for (c in d) {
                            if ("prototype" != c && "length" != c && "name" != c && (k || !d.hasOwnProperty || d.hasOwnProperty(c)) && (e = g.call(h, d[c], c), "boolean" ===
                                    typeof e && !e)) break
                        } else if ("number" === e)
                            for (c = 0; c < d && (e = g.call(h, d, c), "boolean" !== typeof e || e); c++);
                        else if ("function" === typeof d.every) d.every(function(a, c, e) {
                    a = g.call(h, a, c);
                    return !("boolean" === typeof a && !a)
                });
                else if (a.b.f(d))
                    for (c = 0; c < d.length && (e = g.call(h, d[c], c), "boolean" !== typeof e || e); c++);
                else
                    for (c in d)
                        if (k || d.hasOwnProperty(c))
                            if (e = g.call(h, d[c], c), "boolean" === typeof e && !e) break;
                return d
            };
            a.b.g = function(d) {
                if (!d) return !1;
                var g;
                if (d !== Object(d)) g = d;
                else if (a.b.f(d)) {
                    g = [];
                    for (var h = 0, k =
                            d.length; h < k; h++) g[h] = d[h]
                } else
                    for (h in g = {}, d) g[h] = d[h];
                return g
            };
            a.b.h = function(d, g) {
                if (!d || "function" !== typeof d) return !1;
                var h = !1;
                0 <= String(d).indexOf("[native code]") ? h = !0 : a.d.b || d === Function.prototype.toString || (h = !0);
                h && g && (h = d.toString && d.toString === Function.prototype.toString);
                return h
            };
            a.b.i = function() {
                try {
                    return navigator.userAgent
                } catch (a) {
                    return ""
                }
            };
            a.b.j = function(d) {
                d = d || a.b.i();
                d = /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(d);
                var g = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
                return !(!d && !g)
            };
            a.b.k = function(d) {
                d = d || a.b.i();
                return !!/Android/.exec(d)
            };
            a.b.l = function(d) {
                d = d || a.b.i();
                var g = /Safari|CriOS/i;
                d = /iPhone|iPod|iPad/.exec(d) && !g.exec(d);
                g = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
                return !(!d && !g)
            };
            a.b.m = function(d) {
                d = d || a.b.i();
                return a.b.k(d) ? !!/Version/.exec(d) : !1
            };
            a.b.n = function() {
                if (!navigator) return null;
                var d;
                d = a.b.i();
                return "Microsoft Internet Explorer" == navigator.appName ? parseInt(d.replace(/^.*MSIE (\d+).*$/, "$1"), 10) : "Netscape" ==
                    navigator.appName && (d = d.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(d[1], 10) : null
            };
            a.b.o = function() {
                return null != a.b.n()
            }
        })(m);
        (function(a) {
            function l(a) {
                var e = new RegExp("(^| )" + a + "($| )");
                return function(a) {
                    return a && a.className && a.className.match(e)
                }
            }
            a.b.p = 1E3;
            a.b.q = 1E3;
            a.b.r = !1;
            a.b.s = !1;
            a.b.t = function() {
                var c = /Firefox\/(\d+)/.exec(a.b.i());
                return c ? (c = parseInt(c[1], 10), 21 > c && 14 < c) : !1
            }();
            a.b.u = function() {
                var c, e = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                a.d.e || (c = a.b.v(), !c && a.d.f &&
                    (c = a.d.f));
                c || (c = a.d.g.location.hostname);
                var b = a.d.h();
                b && (c = b.sourceUrl);
                return (c = c && c.match && c.match(e)) && c[1] || a.d.g.location.hostname
            };
            a.b.w = function() {
                var c, e, b = !1;
                a.d.e ? (b = !0, c = window.top && window.top.location && window.top.location.href) : (e = a.k.a(), e.parent === window.top ? (c = e.document.referrer, b = !0) : (c = a.b.v(), c || (c = e.document.referrer)));
                return {
                    url: c,
                    isCorrect: b
                }
            };
            a.b.x = function() {
                var c = !1,
                    e, b = /^https?:\/\/(.*?)\/([^?#]*)/;
                a.d.e ? (c = window.location.hostname.replace("www.", ""), c += window.location.pathname) :
                    (e = a.k.a(), e.parent === window.top && (c = e.document.referrer) && (e = b.exec(c)) && (c = e[1].replace("www.", "") + "/" + e[2]));
                "string" === typeof c && "/" === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1));
                return c
            };
            a.b.y = function() {
                var c;
                a.d.e ? c = 2 : (c = a.k.a(), c = c.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
                return c
            };
            a.b.v = function() {
                var a = location && location.ancestorOrigins;
                return a ? 0 === a.length ? !1 : a[a.length - 1] : !1
            };
            a.b.z = function() {
                var c, e = a.b.u(),
                    b = e && e.split("."),
                    f = b && b.length;
                3 <= f ? c = "co" === b[f -
                    2] || "com" === b[f - 2] ? b[f - 3] + "." + b[f - 2] + "." + b[f - 1] : b[f - 2] + "." + b[f - 1] : 2 == f && (c = b[f - 2] + "." + b[f - 1]);
                return c && decodeURIComponent(c) || decodeURIComponent(e)
            };
            a.b.aa = function(a) {
                if ("string" !== typeof a) return "";
                var e = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
                e && e[1] && (a = e[1]);
                return a
            };
            a.b.ab = function(a, e) {
                for (var b = [a], f = 1; f <= e; f++) b.push(a + f), b.push(a - f);
                b = b[r.floor(r.random() * b.length)];
                f = r.floor(r.random() * b);
                return {
                    multiplier: b,
                    sample: 0 == f
                }
            };
            a.b.ac = function(c, e) {
                if (a.b.ad()) {
                    var b = AB_SCAFFOLD.sampling.getMultiplier(),
                        f = AB_SCAFFOLD.sampling.inSample();
                    a.b.ae(b, f);
                    return {
                        multiplier: b,
                        sample: f
                    }
                }
                b = a.b.ab(c, e);
                a.b.ae(b.multiplier, b.sample);
                return b
            };
            a.b.af = function() {
                return a.b.ac(a.h, a.i).sample
            };
            a.b.ae = function(c, e) {
                a.b.ac = function() {
                    return {
                        multiplier: c,
                        sample: e
                    }
                };
                a.b.ag() && AB_SCAFFOLD.sampling.set({
                    multiplier: e ? c : 0,
                    isActive: !!a.h
                })
            };
            a.b.ah = function() {
                var c = a.b.n();
                return 5 === c || 6 === c || 7 === c
            };
            a.b.ai = function(c) {
                if (!navigator) return null;
                c = c || a.b.i();
                return c ? (c = c.match(/Edge\/(\d{1,}(.\d{1,})?)/)) ? parseFloat(c[1]) :
                    null : null
            };
            a.b.aj = function(c, e) {
                return -1 !== a.b.indexOf(c, e)
            };
            a.b.ak = function() {
                function a(c) {
                    if (!c) return "";
                    c = c.match(/[\d]+/g);
                    c.length = 3;
                    return c.join(".")
                }
                var e = !1,
                    b = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var f = navigator.plugins["Shockwave Flash"];
                    f && (e = !0, f.description && (b = a(f.description)));
                    navigator.plugins["Shockwave Flash 2.0"] && (e = !0, b = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)(e = (f = navigator.mimeTypes["application/x-shockwave-flash"]) && f.enabledPlugin &&
                    f.enabledPlugin.description) && (b = a(f.enabledPlugin.description));
                else try {
                    f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), e = !0, b = a(f.GetVariable("$version"))
                } catch (d) {
                    try {
                        f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), e = !0, b = "6.0.21"
                    } catch (g) {
                        try {
                            f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), e = !0, b = a(f.GetVariable("$version"))
                        } catch (h) {}
                    }
                }
                return e ? b : "0"
            };
            a.b.getElementsByClassName = function(a, e, b) {
                e = e || "*";
                b = b || document;
                if (b.getElementsByClassName) {
                    var f = [],
                        d = b.getElementsByClassName(a);
                    if ("*" !== e) {
                        a = 0;
                        for (b = d.length; a < b; a++) {
                            var g = d[a];
                            g.tagName === e && f.push(g)
                        }
                        return f
                    }
                    return d
                }
                d = [];
                e = b.getElementsByTagName(e);
                b = l(a);
                g = e.length;
                for (a = 0; a < g; a++) f = e[a], b(f) && d.push(f);
                return d
            };
            a.b.al = l;
            a.b.am = function(a, e) {
                if (!a || !e) return !1;
                var b = new RegExp("(^| )" + e + "($| )");
                return a.className && a.className.match(b)
            };
            a.b.an = function(a) {
                return new n - a.de
            };
            a.b.ao = function(a) {
                return a.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
            };
            a.b.ap = function(c, e, b) {
                if (("undefined" ===
                        typeof b || !b) && c && (b = a.b.aq(c), !b)) return;
                if (c && c.nodeType)
                    if ("undefined" === typeof Node) {
                        if (1 != c.nodeType) return
                    } else if (c.nodeType != Node.ELEMENT_NODE) return;
                if (b.getComputedStyle) return b.getComputedStyle(c, "") && b.getComputedStyle(c, "")[e];
                for (b = e.indexOf("-"); - 1 < b;) e = b == e.length - 1 ? e.substr(0, b) : e.substr(0, b) + e.charAt(b + 1).toUpperCase() + e.substr(b + 2), b = e.indexOf("-");
                if (c.currentStyle) return c.currentStyle[e];
                if (c.style) return c.style[e]
            };
            a.b.ar = function(c) {
                if (!c) return !1;
                var e = a.b.ap(c, "background-image");
                e || (e = a.b.ap(c, "backgroundImage"));
                var b;
                e && (b = (b = e.match("url\\((.*)\\)")) && b[1].replace(/\x22/g, ""));
                return b
            };
            a.b.as = function(c, e, b) {
                if (!c) return [];
                var f = "boolean" === typeof b ? b : !1,
                    d = [c],
                    g = !1;
                a.b.forEach("number" === typeof e ? e : 50, function() {
                    if ((g = a.b.at(c)) && 1 == g.nodeType) c = g, d.push(c);
                    else if (f && g && 9 == g.nodeType)
                        if ((g = a.k.b(c)) && 1 == g.nodeType) c = g, d.push(c);
                        else return !1;
                    else return !1
                });
                return d
            };
            a.b.au = function(c, e) {
                var b = a.b.as(c);
                return b && -1 !== a.b.indexOf(b, e)
            };
            a.b.at = function(a) {
                return a.parentNode ||
                    a.parentElement || !1
            };
            a.b.av = function(c) {
                c = c || a.b.i();
                return !!/iPhone|iPod/.exec(c)
            };
            a.b.aw = function(c) {
                c = c || a.b.i();
                return !!/iPad/.exec(c)
            };
            a.b.ax = function() {
                var c = {};
                return function(e) {
                    if ("undefined" !== typeof c[e]) return c[e];
                    c[e] = null;
                    var b = a.f.b([5, 1, 0, 21]),
                        f = a.f.b([19, 48, 34, 45, 45, 30, 43]),
                        d = a.f.b([15, 34, 39, 45, 30, 43, 30, 44, 45]),
                        g = a.f.b([0, 41, 41, 37, 30, 13, 30, 48, 44]),
                        h = a.f.b([8, 39, 44, 45, 26, 32, 43, 26, 38]),
                        k = a.f.b([24, 30, 37, 41]);
                    a.b.forEach([b, f, d, g, h, k], function(a) {
                        if ((new RegExp(a)).test(e)) return c[e] =
                            a, !1
                    });
                    return c[e]
                }
            }();
            a.b.ay = function() {
                var c;
                return function() {
                    if ("undefined" !== typeof c) return c;
                    c = {
                        results: {
                            article: !1,
                            page_height: !1,
                            meta_properties: !1,
                            favicon: !1
                        },
                        meta_data: {
                            num_articles: 0,
                            page_height_ratio: null,
                            meta_property_matches: []
                        }
                    };
                    var e = a.d.g && a.d.g.document,
                        b = (e && e.getElementsByTagName("article")).length;
                    0 < b && (c.results.article = !0, c.meta_data.num_articles = b);
                    var b = a.d.i,
                        f = a.d.g && a.d.g.innerHeight,
                        b = b && f && b / f;
                    1.5 <= b && (c.results.page_height = !0, c.meta_data.page_height_ratio = b);
                    var b = e &&
                        e.getElementsByTagName("meta"),
                        d = {
                            "fb:app_id": 1,
                            "og:site_name": 1,
                            "og:type": 1,
                            "fb:page_id": 1,
                            "twitter:account_id": 1,
                            "twitter:site": 1
                        };
                    a.b.forEach(b, function(a) {
                        if ((a = a.getAttribute("property")) && d.hasOwnProperty(a)) return c.results.meta_properties = !0, c.meta_data.meta_property_matches.push(a), !1
                    });
                    e = e && e.getElementsByTagName("link");
                    a.b.forEach(e, function(a) {
                        if ("icon" === a.getAttribute("rel") && /favicon\./.test(a.getAttribute("href"))) return c.results.favicon = !0, !1
                    });
                    return c
                }
            }();
            a.b.az = function() {
                var c =
                    a.b.ay().results;
                for (prop in c)
                    if (c.hasOwnProperty(prop) && c[prop]) return !0;
                return !1
            };
            a.b.ba = function() {
                for (var c = [103, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 46, 110, 101, 116], e = "", b = 0, f = c.length; b < f; b++) e += String.fromCharCode(c[b]);
                return (new RegExp("^[^.]+." + e)).test(a.b.u())
            };
            a.b.bb = function() {
                var c = a.d.g.screen;
                if (a.b.l()) {
                    var e;
                    "undefined" !== typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (e = c.width, c = c.height) : (e = c.height, c = c.width) : e = c = 0;
                    return {
                        w: e,
                        h: c
                    }
                }
                if (a.b.m()) {
                    e =
                        a.d.g.devicePixelRatio;
                    var b = 1;
                    .05 > r.abs(c.width / a.d.g.innerWidth - e) && (b = e);
                    return {
                        w: c.width / b,
                        h: c.height / b
                    }
                }
                return {
                    w: c.width,
                    h: c.height
                }
            };
            a.b.bc = function() {
                var a = null;
                "string" === typeof navigator.doNotTrack ? a = navigator.doNotTrack : "string" === typeof navigator.msDoNotTrack ? a = navigator.msDoNotTrack : "string" === typeof window.doNotTrack && (a = window.doNotTrack);
                return !a || "1" !== a[0] && "yes" !== a ? !1 : !0
            };
            a.b.bd = function() {
                var c;
                return function() {
                    if ("undefined" === typeof c) {
                        var e = a.b.z();
                        if (!e) return !1;
                        var b = [a.f.b([39,
                            34, 28, 36, 72, 28, 40, 38
                        ]), a.f.b([39, 34, 28, 36, 35, 43, 72, 28, 40, 38])];
                        c = a.b.aj(b, e)
                    }
                    return c
                }
            }();
            a.b.getAttribute = function(a, e) {
                return a[e] || a.getAttribute(e)
            };
            var d = [function(a) {
                if (!a || "IFRAME" !== a.nodeName) return !1;
                var e = a.offsetHeight;
                return isNaN(e) || 15 < e || "google_conversion_frame" !== a.name ? !1 : !0
            }];
            a.b.be = function(c, e) {
                return "undefined" === typeof c || null === c || !1 === c || !a.b.bf(c) || c.nodeName && "IMG" == c.nodeName && !c.complete || a.b.filter(d, function(a) {
                    return a(c)
                }).length || !0 === c[A] ? !1 : !0
            };
            a.b.bg = function(c,
                e, b) {
                a.l.a(e);
                !0 === b && e.aa && (e.aa[I] = void 0, e.aa[A] = void 0);
                !e.hasIframeListener && c.tagName && "iframe" === c.tagName.toLowerCase() && (e.hasIframeListener = !0);
                e.components && e.components.splice(0, 1, c);
                e.aa = c;
                a.m.a.zaxs("adElementUpdate");
                a.b.bh(e.aa);
                a.l.b(e);
                e.periscopeManager && e.periscopeManager.rebuildPixelTargets(c, c.parentNode)
            };
            a.b.bi = function(a) {
                return a.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
            };
            a.b.bj = function(c) {
                var e = [];
                a.b.forEach(c, function(c, f) {
                    var d = typeof c;
                    "number" == d ?
                        e.push(a.b.bi(f) + ":" + a.b.bi(c + "")) : "string" == d ? e.push(a.b.bi(f) + ":" + a.b.bi('"' + c + '"')) : "undefined" == d ? e.push(a.b.bi(f) + ":" + a.b.bi("undefined")) : "boolean" == d ? e.push(a.b.bi(f) + ":" + a.b.bi(c ? "true" : "false")) : null === c ? e.push(a.b.bi(f) + ":" + a.b.bi("null")) : "object" != d && "function" != d || !c.toString || e.push(a.b.bi(f) + ":" + a.b.bi('"' + c.toString() + '"'))
                }, null, !0);
                e.sort();
                return "{" + e.join(",") + "}"
            };
            a.b.bk = function(a) {
                var e = {};
                if ("string" != typeof a || "{" != a.charAt(0)) return !1;
                a = a.slice(1, -1).split(",");
                for (var b =
                        0; b < a.length; b++) {
                    var f = a[b].split(":");
                    f[1] = unescape(f[1]);
                    "true" == f[1] ? f[1] = !0 : "false" == f[1] ? f[1] = !1 : '"' == f[1].charAt(0) ? f[1] = f[1].slice(1, -1) : f[1] = "undefined" == f[1] ? void 0 : "null" == f[1] ? null : "NaN" == f[1] ? NaN : parseFloat(f[1]);
                    e[unescape(f[0])] = f[1]
                }
                return e
            };
            a.b.bf = function(c) {
                var e = c.offsetWidth,
                    b = c.offsetHeight;
                if (a.b.r && b < a.b.r || a.b.s && e < a.b.s) return !1;
                a.b.forEach(a.b.as(c, 3), function(a) {
                    var c = a.style && a.style.width,
                        d = a.style && a.style.height;
                    a && a.style && "hidden" == a.style.overflow && ("" != c || "" !=
                        d) && (a = parseFloat(c), d = parseFloat(d), e = !isNaN(a) && a < e ? a : e, b = !isNaN(d) && d < b ? d : b)
                });
                (c = a.b.bl(c)) && c.width * c.height < a.b.p && (e = c.width < e ? c.width : e, b = c.height < b ? c.height : b);
                return a.d.j() && .9 > e * b / (a.d.g.innerWidth * a.d.g.innerHeight) ? !1 : e * b >= a.b.p
            };
            var g = {};
            a.b.bl = function(c) {
                if (!c || !c.nodeName || "IMG" == !c.nodeName || !c.complete) return !1;
                var e = c.getAttribute("src");
                if (!e) return !1;
                if (g[e]) return g[e];
                try {
                    if ("undefined" !== typeof c.naturalHeight && "undefined" !== typeof c.naturalWidth) {
                        var b = {
                            width: c.naturalWidth,
                            height: c.naturalHeight
                        };
                        return g[c.src] = b
                    }
                } catch (f) {}
                return a.d.a && (a.d.a.src = e, a.d.a.a) ? (b = {
                    width: parseInt(a.d.a.b),
                    height: parseInt(a.d.a.c)
                }, g[e] = b) : !1
            };
            a.b.bm = function(a, e) {
                var b = !1,
                    f = e.body,
                    d = f && f.firstChild;
                f && d && (f.insertBefore(a, d), b = !0);
                return b
            };
            a.b.bn = function() {
                if (!a.d.k) {
                    var c = a.d,
                        e;
                    a: {
                        for (var b = document.getElementsByTagName("script"), f = b.length - 1; - 1 < f; f--)
                            if ((e = b[f]) && e.src && e.src.indexOf && (-1 !== e.src.indexOf("turner763610601596/moatad.js") || -1 !== e.src.indexOf("turner763610601596%2Fmoatad.js")) &&
                                ("undefined" === typeof e[A] || !0 !== e[A])) {
                                e[A] = !0;
                                break a
                            }
                        e = void 0
                    }
                    c.k = e
                }
                return a.d.k ? (a.d.k[A] = !0, a.d.k) : null
            };
            a.b.bo = function(a, e) {
                for (var b in e) e.hasOwnProperty(b) && (a[b] = e[b])
            };
            a.b.bp = function(a) {
                var e, b = /https:/i;
                if (a) e = b.test(a.src || a.href || "http:") ? "https:" : "http:";
                else try {
                    e = window.location.protocol
                } catch (f) {
                    a = document.createElement("a"), a.href = "", e = a.protocol
                }
                return "https:" === e ? "https:" : "http:"
            };
            a.b.bq = function(a) {
                try {
                    return -1 !== (a.src || a.getAttribute("src")).indexOf("psd=1")
                } catch (e) {
                    return !1
                }
            };
            a.b.br = function(a) {
                for (var e = [], b = 0; b < a.length; b++) e.push(a[b]);
                return e
            };
            a.b.nextElementSibling = function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (; a = a.nextSibling;)
                    if (1 === a.nodeType) return a
            };
            a.b.previousElementSibling = function(a) {
                if (a) {
                    if (a.previousElementSibling) return a.previousElementSibling;
                    for (var e = 0;
                        (a = a.previousSibling) && 1E3 > e;)
                        if (e++, a && 1 === a.nodeType) return a
                }
            };
            a.b.bs = function(a, e, b) {
                "undefined" !== typeof b && (a[e] = b)
            };
            a.b.bt = function(c) {
                return a.b.d(c) ? 0 === c.length : !0
            };
            a.b.filter = function(a, e) {
                for (var b = [], f = 0; f < a.length; f++) e(a[f]) && b.push(a[f]);
                return b
            };
            a.b.bu = function(a, e) {
                for (var b = [], f = 0; f < e.length; f++) b.push(a(e[f]));
                return b
            };
            a.b.reduce = function(c, e, b) {
                if (!a.b.f(c) || "function" !== typeof e) return !1;
                b = b ? e(b, c[0]) : c[0];
                for (var f = 1; f < c.length; f++) b = e(b, c[f]);
                return b
            };
            a.b.indexOf = function(c, e) {
                if (!c) return -1;
                if (a.b.d(c)) {
                    for (var b = 0, f = c.length; b < f; b++)
                        if (c[b] === e) return b;
                    return -1
                }
                return "string" === typeof c ? e || "string" !== typeof e ? c.indexOf(e) : -1 : -1
            };
            a.b.lastIndexOf =
                function(c, e) {
                    if (!c) return -1;
                    if (a.b.d(c)) {
                        for (var b = c.length - 1; 0 <= b; b--)
                            if (c[b] === e) return b;
                        return -1
                    }
                    return "string" === typeof c ? "" === e ? -1 : c.lastIndexOf(e) : -1
                };
            a.b.bv = function(a, e) {
                if (a && e && e.childNodes) {
                    var b = e.childNodes;
                    0 < b.length ? e.insertBefore(a, b[0]) : e.appendChild(a)
                }
            };
            a.b.bw = function(c, e) {
                if (!c || !e) return !1;
                var b = a.b.bx(e);
                if (!b) return !1;
                if (a.b.hasChildNodes(b)) {
                    var f = b.childNodes[r.max(0, b.childNodes.length - 1)] || null;
                    b.insertBefore(c, f)
                } else b.appendChild(c);
                return b
            };
            a.b.by = function(c, e, b) {
                if ("string" !=
                    typeof c || !e || !document) return !1;
                b = b || document.createElement("script");
                b.type = "text/javascript";
                e = a.b.bw(b, e);
                if (!e) return !1;
                b.src = c;
                return e
            };
            a.b.hasChildNodes = function(a) {
                return a && a.childNodes && 0 < a.childNodes.length
            };
            a.b.bx = function(c) {
                if (!c) return !1;
                if ("OBJECT" !== c.nodeName && "EMBED" !== c.nodeName) return c;
                c = a.b.as(c);
                var e = !1;
                a.b.forEach(c, function(a) {
                    if (a && "OBJECT" !== a.nodeName && "EMBED" !== a.nodeName) return e = a, !1
                });
                return e
            };
            a.b.bz = function(a, e) {
                if ("undefined" === typeof a) return !1;
                for (var b = 0,
                        f = e.length; b < f; b++)
                    if ("string" == typeof e[b]) {
                        try {
                            a = a[e[b]]
                        } catch (d) {}
                        if ("undefined" === typeof a) return !1
                    }
                return a
            };
            a.b.ca = function(a) {
                return x && "undefined" !== typeof a && x[a] ? x[a] : !1
            };
            a.b.cb = function(c) {
                if (!c || "object" !== typeof c || "number" !== typeof c.zr) return !1;
                var e = a.b.ca(c.zr);
                return e && e === c
            };
            a.b.cc = function(c, e) {
                for (var b = a.b.as(c, 50, !0), f = 0; f < b.length; f++)
                    if (b[f] === e) return !0;
                return !1
            };
            a.b.cd = function(c) {
                if (!c || !c.aa) return !1;
                if ("number" !== typeof c.ADAREA) {
                    var e, b;
                    if (c.isCompositeAd && c.components &&
                        1 < c.components.length)
                        for (e = c.ADAREA = 0; e < c.components.length; e++) c.ADAREA += c.components[e].offsetWidth * c.components[e].offsetHeight;
                    else c.elementRect ? (e = c.elementRect.right - c.elementRect.left, b = c.elementRect.bottom - c.elementRect.top, c.ADAREA = e * b) : c.ADAREA = c.aa.offsetWidth * c.aa.offsetHeight;
                    a.n.a() && a.n.realEstateMeasurements && (e = a.n.realEstateMeasurements.w, b = a.n.realEstateMeasurements.h, c.ADAREA = e * b)
                }
                return c.ADAREA
            };
            a.b.bh = function(c) {
                if (!(!c || c && c.CLIPCHECKINGTARGET)) {
                    var e = a.b.as(c, 3),
                        b;
                    e && 0 <
                        e.length && (a.b.forEach(e, function(a) {
                            if (a && a.style && a.style.clip) return b = a, !1
                        }), !b && c.style && c.style.clip && (b = c), b && (c.CLIPCHECKINGTARGET = b))
                }
            };
            var h = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            a.b.ce = function(c) {
                c = c.match(h);
                var e = !1;
                c && (c = a.b.bu(function(a) {
                    return parseInt(a, 10)
                }, c), e = {
                    top: c[1],
                    right: c[2],
                    bottom: c[3],
                    left: c[4]
                });
                return e
            };
            a.b.cf = function() {
                var a = function() {
                    var a = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0,
                        b = window.pageYOffset ? window.pageYOffset + window.innerHeight -
                        1 : 0;
                    return a || b ? !document.elementFromPoint(a, b) : !0
                }();
                return function(e, b, f) {
                    if (!a) {
                        var d = f.defaultView || f.parentWindow || window;
                        e += d.pageXOffset;
                        b += d.pageYOffset
                    }
                    return f.elementFromPoint(e, b)
                }
            }();
            a.b.cg = function(a, e) {
                return Object.prototype.hasOwnProperty.call(a, e)
            };
            a.b.ch = function(c) {
                if (!c || !c.style || !c.style.filter) return !1;
                c = c.style.filter.split(" ");
                var e = !1,
                    b;
                a.b.forEach(c, function(a) {
                    var c = a.match(/\d+/);
                    a.search(/opacity/) && c && 0 < c.length && (b = parseFloat(c.join("")), !1 === e || b < e) && (e = b)
                });
                return e
            };
            a.b.ci = function(c, e) {
                var b;
                if (!c) return 100;
                if (e && c.style && "hidden" === c.style.visibility) return 0;
                b = c.style && c.style.opacity ? parseFloat(c.style.opacity) : a.b.ch(c);
                return a.b.cj(b) ? b : 100
            };
            a.b.ck = function(a) {
                return a.backgroundColor ? (a = a.backgroundColor, "transparent" === a ? 0 : -1 !== a.indexOf("rgb") ? 4 > a.split(",").length ? 1 : parseFloat(a.split(",")[3].split(")")[0]) : 1) : -1
            };
            a.b.cl = function(c, e) {
                var b = -1;
                if (a.d.g.getComputedStyle) {
                    var f = a.d.g.getComputedStyle(c);
                    if (!f) return b;
                    if (e && "hidden" === f.visibility ||
                        "collapse" === f.visibility || e && 0 === a.b.ck(f)) return 0;
                    b = parseFloat(f.opacity)
                }
                return b
            };
            a.b.cm = function(c, e, b) {
                if (!c || !c.aa) return !1;
                "undefined" === typeof c.parentNodeTree && (c.parentNodeTree = a.b.as(c.aa.parentElement, 50, !0), e && c.parentNodeTree.push(c.aa));
                var f = 100,
                    d, g;
                a.b.forEach(c.parentNodeTree, function(c) {
                    d = a.b.ci(c, b);
                    0 === d && (g = a.b.cl(c, b), a.b.cj(g) && g >= d && (d = g));
                    d < f && (f = d);
                    if (0 === f) return !1
                });
                return f
            };
            a.b.cn = function(a, e, b) {
                return function() {
                    e.apply(b || null, a.concat(a.slice.call(arguments)))
                }
            };
            a.b.aq = function(a) {
                try {
                    var e = a && a.ownerDocument;
                    return e && (e.defaultView || e.parentWindow)
                } catch (b) {
                    return !1
                }
            };
            a.b.co = function(c, e, b) {
                if (!c || !e) return !1;
                var f = [];
                "number" !== typeof b && (b = 50);
                for (var d = 0; d < b; d++)
                    if (e != e.parent) {
                        if (c = a.k.b(c, e)) f.push(c);
                        else break;
                        e = e.parent
                    } else break;
                return f
            };
            a.b.cp = function(a) {
                a = r.max(4, a);
                return ((1 + r.random()) * r.pow(16, a) | 0).toString(16).substring(0, a)
            };
            a.b.cq = function() {
                var c = a.b.cp;
                return c(4) + "-" + c(4) + "-" + c(4) + "-" + c(4)
            };
            a.b.a = function(a) {
                window && window.clearTimeout &&
                    window.clearTimeout(a)
            };
            a.b.b = function(a) {
                window && window.clearInterval && window.clearInterval(a)
            };
            var k = function(c, e) {
                if (a.b.h(e.toString)) return e.toString();
                if (a.b.h(c && c.Function.prototype.toString)) return e.toString = c.Function.prototype.toString, e.toString();
                var b = a.d.g !== c && a.d.g && a.d.g.Function.prototype.toString;
                if (a.b.h(b)) return e.toString = b, e.toString();
                if (a.d.l && 8 >= a.b.n()) return e.toString();
                var b = c || window,
                    f = b.document.createElement("IFRAME");
                f.style.display = "none";
                f.style.width = "0px";
                f.style.height = "0px";
                f.width = "0";
                f.height = "0";
                a.b.bw(f, b.document.documentElement);
                f.contentWindow && (e.toString = f.contentWindow.Function.prototype.toString);
                var d = e.toString();
                b.document.documentElement.removeChild(f);
                return d
            };
            a.b.toString = function(c, e) {
                e = e || a.d.g;
                var b;
                try {
                    b = k(e, c)
                } catch (f) {
                    b = c.toString()
                }
                return b
            };
            a.b.cr = function(c, e, b) {
                c = a.b.toString(c, b);
                if (a.d.m()) b.eval("(" + c + ")(" + e + ")");
                else if (a.d.n(b))(new b.Function("(" + c + ")(" + e + ")"))();
                else {
                    var f = b.document.createElement("script");
                    f.type =
                        "text/javascript";
                    f.text = "(" + c + ")(" + e + ")";
                    a.b.bw(f, b.document.body)
                }
            };
            a.b.cs = function(c, e, b, f) {
                function d(a, b) {
                    try {
                        return f(b[a])
                    } catch (c) {}
                }
                var g, h;
                if ("string" !== typeof c) return !1;
                "function" !== typeof f && (f = function(a) {
                    return a
                });
                g = window;
                h = d(c, g);
                if (!h) {
                    e = a.k.c(g, "number" === typeof e ? e : 20);
                    if (!e) return !1;
                    for (var k = 0, w = e.length; k < w && (g = e[k], h = d(c, g), "undefined" === typeof h); k++);
                }
                return b ? [h, g] : h
            };
            a.b.ct = function(a, e) {
                var b = a.toString();
                e && (b = "(" + b + "(" + e + "))");
                return "(function(){try{return(" + b + ")()}catch(e){return false}})()"
            };
            a.b.cu = function() {
                if (!a.d.o) return !1;
                var c = a.b.i(),
                    e = c && "string" === typeof c,
                    b = /Version\/(\d*)/,
                    f = /CPU.*OS\s(\d*)_/,
                    b = (b = e && c.match(b)) && 1 < b.length ? parseInt(b[1], 10) : !1;
                "number" !== typeof b && (b = (b = e && c.match(f)) && 1 < b.length ? parseInt(b[1], 10) : !1);
                return b
            };
            a.b.cv = function(a) {
                if ("object" === typeof a) {
                    if (Object.keys) return Object.keys(a);
                    var e = [],
                        b;
                    for (b in a) e.push(b);
                    return e
                }
            };
            a.b.every = function(a, e) {
                if ("object" !== typeof a || !a || "function" !== typeof e) return !1;
                var b = !0,
                    f;
                for (f in a)
                    if (a.hasOwnProperty(f) &&
                        (b = e(a[f]), !1 === b || "boolean" !== typeof b)) break;
                return b
            };
            a.b.cw = function(a, e) {
                e = e || {
                    width: "1px",
                    height: "1px",
                    style: {
                        left: "-9999px",
                        top: "-9999px",
                        position: "absolute"
                    }
                };
                for (var b in e)
                    if (e.hasOwnProperty(b))
                        if ("style" === b)
                            if ("string" === typeof e[b]) a.setAttribute(b, e[b]);
                            else
                                for (var f in e[b]) e[b].hasOwnProperty(f) && (a[b][f] = e[b][f]);
                else a[b] = e[b]
            };
            a.b.some = function(a, e) {
                if ("object" !== typeof a || !a || "function" !== typeof e) return !1;
                for (var b in a)
                    if (a.hasOwnProperty(b)) {
                        var f = e(a[b]);
                        if ("boolean" !== typeof f) break;
                        if (f) return !0
                    }
                return !1
            };
            a.b.cx = function(a) {
                return void 0 === a || null === a || !1 === a || "" === a ? !0 : !1
            };
            a.b.cy = function(c, e, b) {
                return a.b.cj(c) && a.b.cj(e) && a.b.cj(b) ? r.abs(c - e) <= b : !1
            };
            a.b.cj = function(a) {
                return "number" === typeof a && !isNaN(a)
            };
            a.b.cz = function(c, e) {
                if (!a.b.d(e)) return !1;
                var b = 0;
                a.b.forEach(e, function(a) {
                    a === c && b++
                });
                return b
            };
            a.b.da = function(a) {
                return "string" !== typeof a ? !1 : /^(?:https?:\/\/)?[^.:\/]+(?:\.[^.:\/]+)/.test(a)
            };
            a.b.db = function(c, e) {
                return a.b.every(c, function(b) {
                    return a.b.aj(b.values,
                        e[b.lookup] || "")
                })
            };
            a.b.dc = function(c, e, b) {
                var f = b && a.o.a(b.zr),
                    d = f && b.video && b.video.getCounter(f.getLabel()),
                    g = b && b.video && b.video.getVideoScore(f, d);
                return c.replace(/{{([^}]*)}}/g, function(c, f) {
                    switch (f) {
                        case "tagStartTime":
                            return a.d.p;
                        case "initW":
                            return b && b.get_width && b.get_width() || "";
                        case "initH":
                            return b && b.get_height && b.get_height() || "";
                        case "initSRE":
                            return b && b.getScreenRealEstate && b.getScreenRealEstate() || "";
                        case "mvs":
                            return parseInt(g / 100) || "";
                        default:
                            return "undefined" !== typeof e[f] ?
                                e[f] : ""
                    }
                })
            };
            a.b.dd = function(c, e) {
                if ("string" !== typeof c || "string" !== typeof e) return c;
                if (!c.match(e)) {
                    var b = c.lastIndexOf("_BETA");
                    a.b.ad() && 0 < b && (c = c.slice(0, b), e += "_BETA");
                    c += e
                }
                return c
            };
            a.b.de = function() {
                return "undefined" === typeof AB_SCAFFOLD ? !1 : 0 !== M
            };
            a.b.ag = function() {
                return a.b.de() && 1 === M
            };
            a.b.ad = function() {
                return a.b.de() && 2 === M
            };
            a.b.df = function() {
                return "undefined" !== typeof M && 2 === M
            };
            a.b.dg = function() {
                return "undefined" === typeof AB_SCAFFOLD ? !0 : 1 === M || 0 === M
            }
        })(m);
        (function(a) {
            a.k = {};
            a.k.d = function(a) {
                try {
                    var d =
                        typeof a.location.toString;
                    if ("undefined" === d || "unknown" === d) return !0;
                    var g = typeof a.document;
                    if ("undefined" === g || "unknown" === g) return !0;
                    var h = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
                    return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !== typeof h ? !0 : !1
                } catch (k) {
                    return !0
                }
            }
        })(m);
        (function(a) {
            a.k.e = function(l) {
                if (!l) return null;
                try {
                    if (l.moatHostileIframe) return null;
                    var d = l.getAttribute("src");
                    if (d && d.slice && "http" === d.slice(0, 4) && a.b.ao(d) != a.b.ao(La.location.toString())) return l.moatHostileIframe = !0, null;
                    var g = l && (l.contentDocument || l.contentWindow && l.contentWindow.document);
                    if (g && "string" === typeof g.location.toString()) return g;
                    l.moatHostileIframe = !0;
                    return null
                } catch (h) {
                    return l.moatHostileIframe = !0, null
                }
            };
            a.k.b = function(l, d) {
                d = d || a.b.aq(l);
                try {
                    return d && d.frameElement
                } catch (g) {
                    return !1
                }
            };
            a.k.f = function(l, d) {
                var g;
                a.b.forEach(l.getElementsByTagName("iframe"), function(a) {
                    if (a && a.contentWindow && a.contentWindow == d) return g = a, !1
                });
                return g
            };
            a.k.g = function(l) {
                if (l = a.k.b(l)) try {
                    return l.parentNode
                } catch (d) {}
                return null
            };
            a.k.h = function(l, d) {
                if (!l) return !1;
                var g = 0,
                    h = [];
                for (d = d || 10; g < d;)
                    if (g++, l = a.k.b(l)) h.push(l);
                    else return h
            };
            a.k.c = function(l, d) {
                if (!l) return !1;
                var g = 0,
                    h = [l],
                    k;
                for (d = d || 10; g < d;) {
                    g++;
                    try {
                        if (l = (k = l.frameElement) && a.b.aq(k), k && l && !a.k.d(l)) h.push(l);
                        else return h
                    } catch (c) {
                        break
                    }
                }
                return h
            };
            a.k.i = function(l, d, g) {
                function h(d, c, e) {
                    var b = [];
                    d && b.push(d);
                    e = e || 0;
                    if (10 < e || !d || !d.frames) return b;
                    var f;
                    try {
                        f = isNaN(d.frames.length) ? 100 : d.frames.length
                    } catch (g) {
                        f = 100
                    }
                    for (var t = 0; t < f; t++) try {
                        try {
                            if (void 0 == d.frames[t]) break
                        } catch (g) {
                            break
                        }
                        c &&
                            !a.k.j(d.frames[t]) ? b.push(d.frames[t]) : b = b.concat(h(d.frames[t], c, e + 1))
                    } catch (g) {
                        break
                    }
                    return b
                }
                return h(l, d, g)
            };
            a.k.k = function(a, d) {
                d = "number" == typeof d && 0 < d ? d : 15;
                var g = [],
                    h;
                try {
                    if (a) {
                        h = a.top;
                        for (var k = 0; k < d; k++)
                            if ((a = a.parent) && a != a.top) g.push(a);
                            else break;
                        g.push(h)
                    }
                } catch (c) {
                    return []
                }
                return g
            };
            a.k.l = [];
            a.k.j = function(l) {
                for (var d, g = 0, h = a.k.l.length; g < h; g++) a.k.l[g].win == l && (d = a.k.l[g]);
                if (!d) {
                    d = {
                        win: l,
                        friendly: !1
                    };
                    try {
                        l.document && (d.friendly = !0)
                    } catch (k) {}
                }
                return d.friendly
            };
            a.k.m = function(l,
                d, g) {
                l = a.k.c(l).pop();
                l = a.k.i(l, !0);
                for (var h = 0, k = l.length; h < k; h++)
                    if (l[h] == d) {
                        if (g && d.parent && a.k.d(d.parent)) break;
                        return !0
                    }
                return !1
            };
            a.k.a = function() {
                if (a.d.e) return window.top;
                for (var l = 0, d = window; 50 > l;) {
                    l++;
                    if (d === window.top || a.k.d(d.parent)) break;
                    d = d.parent
                }
                return d
            }
        })(m);
        (function(a) {
            function l(a) {
                return function() {
                    var d = !1;
                    return function(k) {
                        try {
                            return a && a.apply ? a.apply(null, arguments) : a(k)
                        } catch (w) {
                            if (!d) {
                                d = !0;
                                var c = (new n).getTime();
                                this["Moat#ETS"] || (this["Moat#ETS"] = c);
                                this["Moat#EMC"] ||
                                    (this["Moat#EMC"] = 0);
                                var e = 36E5 <= c - this["Moat#ETS"],
                                    b = "";
                                try {
                                    b = a.toString()
                                } catch (D) {
                                    b = "failed"
                                }
                                b = w.name + " in closure (cb): " + w.message + ", stack=" + w.stack + ", \ncb=" + b + "\n";
                                if (!e && 10 > this["Moat#EMC"]) {
                                    this["Moat#EMC"]++;
                                    try {
                                        var f = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                                            t = f ? "" : document.referrer,
                                            u = "undefined" === typeof Q ? "TURNERDFP1" : Q,
                                            y = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(u) + "&ac=1&k=" + escape(b) + "&ar=" + escape("e2b442bdf4f-clean") +
                                            "&iw=" + escape("e59434f") + "&j=" + escape(t) + "&cs=" + (new n).getTime();
                                        if (f) omidNative.sendUrl(y);
                                        else {
                                            var p = new Image(1, 1);
                                            p.src = y
                                        }
                                    } catch (D) {}
                                } else if (e) {
                                    this["Moat#EMC"] = 1;
                                    this["Moat#ETS"] = c;
                                    try {
                                        t = (f = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ? "" : document.referrer, u = "undefined" === typeof Q ? "TURNERDFP1" : Q, y = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(u) + "&ac=1&k=" + escape(b) + "&ar=" + escape("e2b442bdf4f-clean") + "&iw=" + escape("e59434f") +
                                            "&j=" + escape(t) + "&cs=" + (new n).getTime(), f ? omidNative.sendUrl(y) : (p = new Image(1, 1), p.src = y)
                                    } catch (D) {}
                                }
                            }
                        }
                    }
                }()
            }
            a.p = {};
            var d = {};
            a.p.a = d;
            a.p.b = function(d, h) {
                if (!d || "string" !== typeof h || !d[h] || d == window) return !1;
                if ("string" === typeof d.nodeName && ("OBJECT" === d.nodeName || "EMBED" === d.nodeName)) {
                    var k = a && a.c && a.c[h];
                    if (k && k !== d[h]) return k
                }
                return !1
            };
            a.p.c = function(g, h, k, c) {
                var e, b, f = !1;
                "touchstart" === h && a.d.q && (f = {
                    passive: !0
                });
                c ? d[h + c] ? k = d[h + c] : (k = l(k), d[h + c] = k) : k = l(k);
                if (g.addEventListener) c = "addEventListener",
                    e = "";
                else if (g.attachEvent) c = "attachEvent", e = "on";
                else return !1;
                if (b = a.p.b(g, c)) try {
                    b.call(g, e + h, k, f)
                } catch (t) {
                    g[c](e + h, k, f)
                } else if (g && c && g[c]) try {
                    g[c](e + h, k, f)
                } catch (t) {
                    return !1
                }
            };
            a.p.d = function(g, h, k, c) {
                var e, b;
                k = c ? d[h + c] : k;
                delete d[h + c];
                if (!g) return !1;
                if (g.removeEventListener) c = "removeEventListener", e = "";
                else if (g.detachEvent) c = "detachEvent", e = "on";
                else return !1;
                if (b = a.p.b(g, c)) try {
                    b.call(g, e + h, k, !1)
                } catch (f) {
                    g[c](e + h, k, !1)
                } else try {
                    g[c](e + h, k, !1)
                } catch (f) {}
            };
            a.p.e = function(d, h) {
                d = l(d);
                var k;
                window && window.setInterval && (k = window.setInterval(d, h), 1 == k && (a.b.b(k), k = window.setInterval(d, h)), va.push(k));
                return k
            };
            a.p.f = function(d, h) {
                var k, c = l(function(a) {
                    delete V[k];
                    return d && d.apply ? d.apply(null, arguments) : d(a)
                });
                window && window.setTimeout && (k = window.setTimeout(c, h), 1 == k && (a.b.a(k), k = window.setTimeout(c, h)), V[k] = !0);
                return k
            };
            a.p.g = function(d, h, k, c) {
                if (!c) return !1;
                c += "";
                H[c] && a.b.a(H[c].tid);
                H[c] = {};
                H[c].callback = l(d);
                H[c].params = h;
                H[c].interval = k;
                H[c].tid = a.p.f(a.p.h(c), k);
                callbacks = null
            };
            a.p.h = function(d) {
                return function() {
                    if (!H || !H[d]) return !1;
                    var h = H[d].callback(H[d].params);
                    if ("boolean" === typeof h && !1 === h) return a.b.a(H[d].tid), H[d] = !1;
                    H[d].tid = a.p.f(a.p.h(d), H[d].interval);
                    time = d = null
                }
            };
            a.p.i = function(d) {
                H[d] && (a.b.a(H[d].tid), H[d] = !1)
            };
            a.p.j = function() {
                return H
            };
            a.p.k = function(d, h, k, c) {
                var e = 0,
                    b = function() {
                        e += 1;
                        !0 !== d() && (e < h ? a.p.f(b, k) : "function" === typeof c && c())
                    };
                b()
            };
            a.p.l = l
        })(m);
        (function(a) {
            function l() {
                if ("number" === typeof a.b.ai()) return !1;
                var d = a.b.i();
                return (d = d && d.match(/Chrom(e|ium)\/([0-9]+)\./)) ?
                    parseInt(d[2], 10) : !1
            }
            a.d = {};
            var d = a.k.d(window.parent);
            a.d.r = window != window.parent;
            a.d.s = a.d.r && !d;
            a.d.e = d ? !1 : !a.k.d(window.top);
            a.d.g = a.d.e ? window.top : a.d.s ? window.parent : window;
            a.d.t = function(a) {
                var d, k, c, e = 0,
                    b = 0;
                try {
                    d = a.document;
                    k = d.documentElement;
                    c = d.body;
                    var f = document.getElementById("mianahwvc");
                    if (f) return f.getBoundingClientRect();
                    "undefined" !== typeof a.innerWidth ? (e = a.innerWidth, b = a.innerHeight) : "CSS1Compat" === d.compatMode && 5 !== d.documentMode || !c || "undefined" === typeof c.clientWidth ? k && "undefined" !==
                        typeof k.clientWidth && (e = k.clientWidth, b = k.clientHeight) : (e = c.clientWidth, b = c.clientHeight)
                } catch (t) {}
                return {
                    width: e,
                    height: b,
                    left: 0,
                    right: e,
                    top: 0,
                    bottom: b
                }
            };
            a.d.u = function() {
                var d = a.q && a.q.a();
                if (d) return d;
                if (!a.d.g || !a.d.g.screen) return null;
                d = a.d.g.screen;
                return {
                    width: d.width,
                    height: d.height,
                    availWidth: d.availWidth,
                    availHeight: d.availHeight
                }
            };
            a.d.v = function() {
                var d = a.d.g;
                if (!d) return !1;
                try {
                    var h = d.document && d.document.body,
                        k = d.document && d.document.documentElement
                } catch (e) {}
                try {
                    var c = a.d.u();
                    c &&
                        (a.d.w = c.availWidth, a.d.x = c.availHeight, a.d.y = c.width, a.d.z = c.height)
                } catch (e) {
                    a.d.w = a.d.w || 0, a.d.x = a.d.x || 0, a.d.y = a.d.y || 0, a.d.z = a.d.z || 0
                }
                c = a.d.t(d);
                a.d.aa = c.width;
                a.d.ab = c.height;
                try {
                    a.d.ac = d.outerWidth || d.document && d.document.body && d.document.body.offsetWidth || 0, a.d.ad = d.outerHeight || d.document && d.document.body && d.document.body.offsetHeight || 0
                } catch (e) {
                    a.d.ac = 0, a.d.ad = 0
                }
                h && k && (a.d.i = r.max(h.scrollHeight, h.offsetHeight, k.clientHeight, k.scrollHeight, k.offsetHeight), a.d.ae = h.scrollTop || k.scrollTop ||
                    d.pageYOffset || 0)
            };
            a.d.v();
            a.d.b = 0 <= String(Function.prototype.toString).indexOf("[native code]");
            a.d.af = -1 !== a.b.i().toLowerCase().indexOf("firefox");
            a.d.l = a.b.o();
            a.d.ag = !!window.chrome && a.b.h(window.chrome.csi, !0);
            a.d.ah = !!("opr" in window && "addons" in window.opr && a.b.h(window.DetachedViewControlEvent));
            a.d.ai = !a.d.ag && Error.propertyIsEnumerable("captureStackTrace") && void 0 !== window.onorientationchange;
            a.d.aj = a.d.ah || a.d.ai;
            a.d.ak = a.d.ag && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent ||
                !!window.chrome.webstore);
            a.d.al = a.d.ag && !a.d.aj && void 0 !== window.onorientationchange;
            a.d.am = a.d.ak || a.d.al;
            a.d.an = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
            a.d.o = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || window.HTMLVideoElement && window.HTMLVideoElement.prototype && "webkitWirelessVideoPlaybackDisabled" in window.HTMLVideoElement.prototype;
            a.d.ao = function() {
                var d;
                return function() {
                    if ("undefined" !==
                        typeof d) return d;
                    d = {
                        isInApp: 0,
                        env: "Not app"
                    };
                    a.b.l() ? (d.isInApp = 1, d.env = "iOS") : a.b.m() && (d.isInApp = 1, d.env = "Android");
                    return d
                }
            }();
            a.d.ap = l;
            a.d.aq = a.d.ak && 40 <= l();
            a.d.ar = function() {
                if (!a.d.aq) return !1;
                var d = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                if (navigator && navigator[d]) return !0;
                if (66 > l()) {
                    var d = a.f.b([28, 33, 43, 40, 38, 30]),
                        h = a.f.b([43, 46, 39, 45, 34, 38, 30]),
                        k = a.f.b([28, 40, 39, 39, 30, 28, 45]);
                    return "undefined" !== typeof window[d] && !(window[d] && window[d][h] && window[d][h][k])
                }
                return !1
            };
            a.d.as = function() {
                if (a.f.c !==
                    a.f.d.toString()) return !1;
                var d = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                return window && window.navigator && window.navigator[d]
            };
            a.d.at = function() {
                if (a.f.c !== a.f.e.toString()) return !1;
                var d = a.f.b([26, 37, 30, 43, 45]),
                    h = a.f.b([28, 40, 39, 31, 34, 43, 38]),
                    k = a.f.b([41, 43, 40, 38, 41, 45]);
                return !a.d.ao().isInApp && a.d.o && a.d.b && !a.b.h(window[d], !0) && !a.b.h(window[h], !0) && !a.b.h(window[k], !0)
            }
        })(m);
        (function(a) {
            function l(a) {
                return a.omid_v1_present || a.omid
            }

            function d(b, c) {
                if (a.d.d() && a.d.bl || !c && !a.d.ao().isInApp) return !1;
                var e = f;
                return (f = e = e && e[0] ? e : a.b.cs("mraid", 20, !0)) ? b ? e : e[0] : !1
            }

            function g(a) {
                return a && a.getVendor && "function" === typeof a.getVendor && a.getVendor()
            }

            function h(a) {
                return a && a.getVendorVersion && "function" === typeof a.getVendorVersion && a.getVendorVersion() + ""
            }

            function k(b, c) {
                b.qmrv(function(b) {
                    c.preventTryFindingAdAgain = !0;
                    a.u.a(c);
                    a.t.c(c)
                }, c.MMAK_ID)
            }

            function c(b, c) {
                a.t.a() && b.hgen && b.hgen(function(b) {
                    b = "click" !== b ? 23 : 3;
                    c && (c.dm || (c.counters && c.counters.strictDwell && c.counters.strictDwell.tCur && (c.cb =
                        c.counters.strictDwell.tCur), c.dm = 1), data = {}, data.e = b, data.q = c.aq[b]++, a.v.a(c, data))
                }, c.MMAK_ID)
            }

            function e() {
                var b = a.d.be,
                    c = 53 <= a.d.ap();
                return c ? c : b && -1 < b.search("Spotify")
            }
            a.d.au = "26";
            a.b.df() && (a.d.au += "_beta");
            a.d.av = "MoatSuperV";
            a.d.aw = {};
            a.d._sdrc = 16;
            a.d._sprg = {
                38909197: 10,
                38811757: 14,
                47469637: 32,
                38723797: 32,
                4610110033: 32,
                39021637: 32,
                4750074452: 1,
                38944597: 32,
                38600317: 32,
                38615797: 24,
                38387437: 31,
                87291157: 32,
                38386957: 32,
                53770237: 32,
                4659652492: 2,
                4541123206: 32,
                4541113588: 20,
                38274757: 1,
                114825037: 3,
                38833597: 32,
                38724517: 32,
                38942677: 1,
                54179917: 32,
                4531997674: 32,
                38318677: 32,
                38756197: 25,
                38833477: 32
            };
            a.d.ax = a.d.av + a.d.au;
            a.d.ay = 0;
            a.d.az = window && window["Moat#G" + a.d.au] || {};
            a.d.ba = "Moat#G" + a.d.au;
            window[a.d.ba] = a.d.az;
            a.d.az.a || (a.d.az.a = r.floor(r.random() * r.pow(10, 12)));
            a.d.bb = r.floor(r.random() * r.pow(10, 12));
            var b = a.b.w();
            a.d.bc = b.url;
            a.d.bd = b.isCorrect;
            b = a.p.l(function() {
                return navigator.userAgent
            });
            a.d.be = b();
            "string" !== typeof a.d.be && (a.d.be = "");
            a.d.c = function() {
                return a.a.f
            };
            a.d.bf = function() {
                var b;
                !a.d.c() || "undefined" === typeof omidNative || "function" !== typeof omidNative.setInterval && "function" !== typeof omidNative.clearInterval && "function" !== typeof omidNative.setTimeout && "function" !== typeof omidNative.clearTimeout && "function" !== typeof omidNative.downloadJavaScriptResource && "function" !== typeof omidNative.sendUrl || (b = omidNative);
                return function() {
                    return b
                }
            }();
            a.d.d = function() {
                var b = !1;
                if ("undefined" !== typeof a.d.bf()) b = !0;
                else try {
                    b = !!l(a.d.g.top.frames)
                } catch (c) {
                    b = !1
                }
                return function() {
                    return b
                }
            }();
            a.d.bg = function() {
                var b;
                return function(c) {
                    b || (b = {}, a.q.b(b));
                    return b[c]
                }
            }();
            a.d.p = (new n).getTime();
            a.d.bh = !0;
            a.d.bi = !1;
            a.d.bj = !1;
            a.d.bj = !0;
            a.d.bk = function(a, b) {
                a = a.split(".");
                b = b.split(".");
                for (var c = 0; 3 > c; c++) {
                    var f = parseInt(a[c]),
                        e = parseInt(b[c]);
                    if (f && isNaN(e)) return 1;
                    if (e && isNaN(f)) return 0;
                    if (f > e) return 1;
                    if (e > f) return 0
                }
                return 2
            };
            var f, t = !1;
            a.d.bm = d;
            a.d.bn = function() {
                return !!d()
            };
            a.d.bo = function() {
                var a = d(!0);
                return a && a[1]
            };
            a.d.bp = function() {
                if (!a.d.ao().isInApp) return !1;
                var b = d(),
                    c;
                if (c =
                    b)
                    if (b)
                        if (t) c = !0;
                        else {
                            c = "";
                            a.b.l() ? c = "ios" : a.b.m() && (c = "android");
                            var f = {
                                AdMarvel: {
                                    ios: "340",
                                    android: "270"
                                },
                                AdColony: {
                                    ios: "3.0",
                                    android: "3.0"
                                }
                            }[g(b)];
                            c = f ? f[c] : null;
                            f = h(b);
                            if (c = c ? 0 !== a.d.bk(f, c) : !1) b: {
                                if (b && b.isViewable && "function" === typeof b.isViewable) try {
                                    c = "undefined" !== typeof b.isViewable();
                                    break b
                                } catch (e) {}
                                c = !1
                            }
                            c = t = c
                        }
                else c = !1;
                return c
            };
            a.d.bq = a.d.bp;
            a.d.br = a.d.bp;
            a.d.bs = function() {
                var a = d();
                return a && g(a)
            };
            a.d.bt = function() {
                var a = d();
                return a && h(a)
            };
            a.d.bu = function() {
                return !1
            };
            a.d.bv = function() {
                if (a.d.bn() &&
                    a.d.bp() && a.p && a.p.g) {
                    var b = "___mraid_loop___" + (new n).getTime();
                    a.b.bz(a.d.bo(), ["mraid", "isViewable"]) && a.p.g(function() {
                        return d().isViewable() ? (a.d.bu = function() {
                            return !0
                        }, !1) : !0
                    }, {}, 300, b)
                }
            };
            a.d.bw = function() {
                return !1
            };
            a.d.bx = !1;
            var u = function() {
                var b = function(b) {
                        if (a.d.ao().isInApp) return !1;
                        var c = a.r && a.r.a();
                        if (a.d.by || c || a.d.bz()) return a.d.by || c || a.d.bz(), !1;
                        b = a.b.bz(b, ["$sf"]);
                        if (!b) return !1;
                        var f = b.ext;
                        b = f && f.geom;
                        var c = [
                                ["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")
                            ],
                            e,
                            d = !1;
                        if (f && b && "function" === typeof b) try {
                            if ((b = b()) && b.win) {
                                if (a.b.forEach(b.win, function(a) {
                                        if (a && ("number" === typeof a || "string" === typeof a) && 0 !== parseFloat(a, 10)) return d = !0, !1
                                    }), !d) return !1
                            } else return !1;
                            if (b.par) return !0;
                            for (var f = 0, g = c.length; f < g; f++) {
                                e = c[f][0];
                                for (var h = 1, z = c[f].length; h < z; h++)
                                    if ("undefined" === typeof b[e][c[f][h]]) return !1
                            }
                            return !0
                        } catch (k) {}
                        return !1
                    },
                    c, f, e, d;
                a.d.ca = function() {
                    if (d) return !0;
                    c = window;
                    f = document;
                    d = b(c);
                    e = !(!d && !c.$sf);
                    if (!d && a.d.s)
                        for (var g = 0; 20 > g && !d; g++) {
                            var h =
                                a.k.b(f.body);
                            if (!1 !== h && !h) break;
                            f = (c = a.b.aq(h)) && c.document;
                            d = d || b(c);
                            e = e || d || c.$sf
                        }
                    return d
                };
                a.d.cb = function() {
                    return a.d.ca() && c
                };
                a.d.cc = function() {
                    "undefined" === typeof d && a.d.ca();
                    return e
                }
            };
            a.d.cd = !1;
            a.d.ce = !1;
            a.d.cf = null;
            a.d.cb = function() {
                u();
                return a.d.cb()
            };
            a.d.cc = function() {
                u();
                return a.d.cc()
            };
            a.d.ca = function() {
                u();
                return a.d.ca()
            };
            var y = function() {
                var b = function(b) {
                        return a.d.ao().isInApp ? !1 : a.b.bz(b, ["context", "observeIntersection"]) ? !0 : !1
                    },
                    c = window,
                    f = document,
                    e = b(c),
                    d = !(!e && !c.context);
                if (!e && a.d.s)
                    for (var g = 0; 20 > g && !e; g++) {
                        f = a.k.b(f.body);
                        if (!1 !== f && !f) break;
                        f = (c = a.b.aq(f)) && c.document;
                        e = e || b(c);
                        d = d || e || c.context
                    }
                a.d.cg = function() {
                    return e && c
                };
                a.d.ch = function(a) {
                    "boolean" === typeof a && (e = a);
                    return e
                };
                a.d.ci = function() {
                    return d
                }
            };
            a.d.cg = function() {
                y();
                return a.d.cg()
            };
            a.d.ci = function() {
                y();
                return a.d.ci()
            };
            a.d.ch = function() {
                y();
                return a.d.ch()
            };
            a.d.h = function() {
                var b = a.b.cs("context");
                if (b && a.b.bz(b, ["observeIntersection"])) return b;
                b = a.b.cs("AMP_CONTEXT_DATA");
                if (a.b.bz(b, ["initialIntersection"])) return b
            };
            var p = function() {
                var b, c = function(c) {
                        return (b = a.b.bz(c, ["amazonmobileadsviewablebridge"])) && "function" === typeof b.addEventListener && "function" === typeof b.getVersion ? !0 : b = !1
                    },
                    f = document,
                    e = window,
                    d = c(e),
                    g = b && 1.1 <= b.getVersion();
                if (!d && a.d.s)
                    for (var h = 0; 20 > h && !d; h++) {
                        f = a.k.b(f.body);
                        if (!1 !== f && !f) break;
                        f = (e = a.b.aq(f)) && e.document;
                        d = d || c(e);
                        g = g || b && 1.1 <= b.getVersion()
                    }
                a.d.cj = function() {
                    return d && e
                };
                a.d.ck = function() {
                    return d
                };
                a.d.cl = function() {
                    return g
                };
                a.d.cm = function() {
                    return b
                }
            };
            a.d.cj = function() {
                p();
                return a.d.cj()
            };
            a.d.ck = function() {
                p();
                return a.d.ck()
            };
            a.d.cl = function() {
                p();
                return a.d.cl()
            };
            a.d.cm = function() {
                p();
                return a.d.cm()
            };
            a.d.cn = function() {
                return a.d.ck() && a.d.cl()
            };
            a.d.co = !1;
            a.d.q = function() {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, "passive", {
                        get: function() {
                            a = !0
                        }
                    });
                    window.addEventListener("test", null, b);
                    window.removeEventListener("test", null, b)
                } catch (c) {}
                return a
            }();
            a.d.cp = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    var c = a.d.g,
                        f = a.b.bb();
                    if (a.d.g.navigator.standalone) b = !0;
                    else {
                        var e = c.innerWidth / f.w,
                            c = c.innerHeight / f.h,
                            e = !isNaN(e) && isFinite(e) && .9 <= e && 1.1 >= e,
                            c = !isNaN(c) && isFinite(c) && .75 <= c && 1.1 >= c;
                        b = e && c
                    }
                    a.d.g.MoatMAK ? a.d.g.MoatMAK.namespace && (b = !1) : (e = a.d.g) && e.imraid && "function" === typeof e.imraid.getVendorName && "inmobi" === e.imraid.getVendorName() && (b = !1);
                    return b
                }
            }();
            a.d.cq = function() {
                var b = a.d.ao().isInApp ? 0 : void 0;
                a.d.j() ? b = 3 : a.d.cr() && (b = 1);
                return b
            };
            a.d.cr = function() {
                if (a.d.d()) return !1;
                var b = a.d.cp(),
                    c = a.b.z(),
                    f = a.d.bn(),
                    e = window.location && ("applewebdata:" ===
                        window.location.protocol || "data:" === window.location.protocol),
                    c = "-" === c || "" === c.replace(/^\s+|\s+$/gm, "");
                return b && !(c || f || e)
            };
            a.d.j = function() {
                var b;
                return function() {
                    return "undefined" !== typeof b ? b : b = a.d.cs() || a.d.d() ? !0 : a.d.cr() ? !1 : a.b.m() || a.b.l()
                }
            }();
            a.d.ct = function() {
                return a.d.g.webkit && a.d.g.webkit.messageHandlers && a.d.g.webkit.messageHandlers.__z_moat_bridge__
            };
            a.d.cs = function() {
                return !(!a.d.g || !(a.d.g.__zMoatInit__ || a.d.g.MoatMAK || a.d.ct())) || w
            };
            a.d.cu = function() {
                return !1
            };
            a.d.cv = function() {
                return a.n &&
                    a.n.b()
            };
            a.d.cw = function() {
                return a.n && a.n.c()
            };
            a.d.cx = function() {
                return a.d.cw() ? a.q && (a.q.c() || a.q.d()) : !1
            };
            a.d.cy = function() {
                if (a.d.cx()) return !0;
                var b = !1;
                return a.d.bw() ? !0 : a.d.e || a.d.ce ? b = (b = b || a.d.j() && a.d.cv()) || a.d.ce || a.d.cr() || a.d.bq() || a.d.cn() : b
            };
            a.d.protocol = a.b.bp();
            a.d.cz = "z.moatads.com";
            a.d.da = a.b.j();
            a.d.bl = !a.d.e;
            a.d.db = function(b) {
                var c = 0;
                b = b || window;
                try {
                    if (!a.d.e) {
                        var f;
                        for (f = 0; 20 > f && b != window.top; f++) b = b.parent;
                        c = f
                    }
                } catch (e) {}
                return c
            };
            a.d.e || a.b.v() || 1 == a.d.db(a.k.a()) ? a.d.dc =
                1 : a.d.dc = 0;
            a.d.g[a.d.ba] || (a.d.g[a.d.ba] = new a.d.g.Object);
            a.d.ao().isInApp && a.d.e && (a.d.e = a.d.cy() || a.d.j());
            a.d.dd = function() {
                return a.q && a.q.e()
            };
            a.d.de = function() {
                return a.q && a.q.d()
            };
            a.d.f = a.d.g.document.referrer || "";
            try {
                a.d.df = a.d.g.history && a.d.g.history.length
            } catch (G) {}
            a.d.dg = function() {
                if (x)
                    for (var a in x)
                        if (x.hasOwnProperty(a)) return !0;
                return !1
            };
            a.d.dh = function(b) {
                var c = !0;
                a.b.forEach(b && b.parentNode && b.parentNode.childNodes, function(b) {
                    if (a.b.aj(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], b.nodeName)) return c = !1
                });
                return c
            };
            a.d.di = function() {
                for (var a in x)
                    if (x.hasOwnProperty(a)) {
                        var b = x[a];
                        if (b && b.aa && b.aa[A]) return !0
                    }
                return !1
            };
            a.d.dj = function() {
                return a.d.ao().isInApp ? a.d.cy() : a.d.e
            };
            a.d.bz = function() {
                return a.d.dk && a.d.dk()
            };
            a.d.dl = function() {
                return a.d.cd
            };
            a.d.dm = function() {
                return a.d.ca && a.d.ca()
            };
            a.d.dn = function() {
                return a.d.ch && a.d.ch()
            };
            a.d["do"] = function() {
                return a.r && a.r.a()
            };
            a.d.dp = function(b) {
                var c = !1;
                a.s && a.s.a && (b && b.periscopeManager ? b.periscopeManager.measurable && (c = !0) : c = !0);
                return c
            };
            a.d.dq = function(b) {
                return a.d["do"]() || a.d.dp(b)
            };
            a.d.dr = function(b, c) {
                if (!b || b && b.isMeasurabilityDisabled() || a.e.c() && !c) return !1;
                var f;
                a.d.dq(b) && (f = !0);
                return a.d.dj() || a.d.ds() || f
            };
            a.d.dt = function(b) {
                if (!b || b && b.isMeasurabilityDisabled() || a.e.c()) return !1;
                var c = !1;
                a.r && a.r.a() ? c = !0 : a.s && a.s.a && b.periscopeManager && b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (c = !0);
                return a.d.dj() || a.d.ds() || c
            };
            a.d.du = function() {
                a.d.bh = !1;
                a.d.bi = !0;
                a.d.bj = !0
            };
            a.d.dv = !0;
            a.d.dw = !0;
            "mlb.com" === a.b.z() &&
                (a.b.av() || a.b.aw()) && (a.d.dw = !1);
            a.d.dx = function() {
                return a.t.a()
            };
            a.d.dy = function() {
                if (!a.d.j()) return !1;
                var b;
                return b = (b = a.d.cw() && a.q.f()) || a.t.a()
            };
            a.d.dz = function() {
                return !1
            };
            var w;
            a.d.j() && (a.d.ea = function() {
                w = !0
            });
            var D = {
                version: "sv",
                appName: "lw",
                namespace: "lu",
                isNative: "ma",
                versionHash: "ar",
                deviceOS: "av"
            };
            a.d.eb = function() {
                var b = !!a.d.g.MoatMAK;
                return function() {
                    return b
                }
            }();
            a.d.ec = function() {
                return a.d.g && a.d.g.MoatMAK || null
            };
            a.d.ed = function() {
                var b = {},
                    c = a.d.ec();
                if (c)
                    for (var f in D) D.hasOwnProperty(f) &&
                        (b[D[f]] = c[f]);
                return b
            };
            a.d.ee = function(b) {
                var c, f;
                (c = a.d.ec()) && c.hasOwnProperty(b) && (f = c[b]);
                mappedKey = D[b];
                c = a.t.b();
                mappedKey && c && c.hasOwnProperty(mappedKey) && (f = c[mappedKey]);
                "versionHash" === b && "undefined" !== typeof f && (f = f.slice(0, 7));
                return f
            };
            a.d.ef = function() {
                return a.d.ee("namespace")
            };
            a.d.eg = function() {
                var b = a.d.ee("version");
                return b ? /\d+\.\d+(\.\d+)?/.exec(b) ? b : null : b
            };
            a.d.eh = 0;
            a.d.ei = 1;
            a.d.ej = -1;
            a.d.ek = function(b) {
                var c = a.d.eg();
                if (!c) return a.d.ej;
                if (!/\d+\.\d+(\.\d+)?/.exec(b)) return a.d.ei;
                switch (a.d.bk(c, b)) {
                    case 0:
                        return a.d.ej;
                    case 1:
                        return a.d.ei;
                    case 2:
                        return a.d.eh
                }
            };
            a.d.el = function(b) {
                if (a.d.em && a.d.em()) {
                    var f = a.d.ec();
                    f && b && (k(f, b), c(f, b))
                }
            };
            a.d.em = function() {
                if (!a.d.j()) return !1;
                var b;
                a.b.l() ? b = "3.0" : a.b.m() && (b = "1.8");
                return b ? a.d.ek(b) !== a.d.ej ? !0 : !1 : !1
            };
            a.d.en = function() {
                var b;
                a.b.l() ? b = "3.1.1" : a.b.m() && (b = "1.7.7");
                return a.d.ek(b) !== a.d.ej
            };
            a.d.eo = function() {
                var b = a.t.a(),
                    c;
                a.b.l() ? c = "3.1" : a.b.m() && (c = "2.1");
                c = a.d.ek(c) !== a.d.ej;
                return b && c
            };
            a.d.ep = function() {
                var b = "___mraid_viewable_loop___" +
                    (new n).getTime(),
                    c = a.d.bm();
                a.p.g(function() {
                    return c && c.isViewable && c.isViewable() ? (a.n.d(), a.m.a.zaxs("trackingReady"), !1) : !0
                }, {}, 300, b)
            };
            a.d.eq = function() {
                if (a.d.d() && !a.d.cs()) return !1;
                var b = !(!window || !window.MmJsBridge),
                    c = !(!window || !window.imraid || "function" !== typeof window.imraid.getVendorName || "inmobi" !== window.imraid.getVendorName());
                return b || c
            };
            a.d.er = function() {
                var b = a.d.be;
                return (b = b && b.match(/Firefox\/([0-9]+)\./)) ? parseInt(b[1], 10) : !1
            };
            (function() {
                var b = a.b.bz(window, ["IntersectionObserver"]),
                    c = e() || 57 <= a.d.er() || 17 <= a.b.ai() || 13 <= a.b.cu(),
                    f = a.d.ao().isInApp,
                    d = a.d.d(),
                    g = c && b && "function" === typeof b && (!f || d && a.d.bl);
                a.d.dk = function(a) {
                    "boolean" === typeof a && (g = a);
                    return g
                };
                a.d.es = function() {
                    return g && b
                }
            })();
            a.d.bi = e();
            a.d.by = function() {
                if (a.d.bz()) return !1;
                var b = a.b.cu(),
                    c = 1 === a.d.ao().isInApp;
                return !(!(9 <= b && window && window.requestAnimationFrame) || c)
            }();
            a.d.et = function() {
                if (a.d.e || a.d.bz()) return !1;
                var b = a.d.l || a.d.an && 15.16199 <= a.b.ai();
                if (!b) return !1;
                var c = a.b.n();
                if (a.d.l && 8 >= c) return !1;
                var f = 1 === a.d.ao().isInApp,
                    e, d = "function";
                a.d.l ? (8 === c && (d = "object"), e = document && typeof document[10 > c ? "elementFromPoint" : "msElementsFromPoint"] === d) : a.d.an && (e = typeof window.requestAnimationFrame === d);
                return b && !f && e
            }();
            a.d.a = new a.d.g.Image;
            a.d.m = function() {
                if ("undefined" !== typeof a.d.g["Moat#EVA"]) return !0;
                try {
                    if ("undefined" !== typeof a.d.g.eval && (a.d.g.eval("(function(win){ win['Moat#EVA'] = true; })(window)"), "undefined" !== typeof a.d.g["Moat#EVA"])) return !0
                } catch (b) {}
                return !1
            };
            a.d.n = function(a) {
                try {
                    return new a.Function(""), !0
                } catch (b) {
                    return !1
                }
            };
            (function() {
                var b = a.b.cs("context"),
                    c = !a.d.ao().isInApp && !(!b || !b.observeIntersection),
                    f, e, d, g, h, z;
                if (!c && window.JSON && "function" === typeof window.JSON.parse && (f = location.hash.match(/amp3pSentinel=((\d+)-\d+)/))) {
                    e = f[1];
                    f = Number(f[2]);
                    d = [];
                    for (g = window; g && g != g.parent; g = g.parent) d.unshift(g.parent);
                    h = d[f];
                    c = z = !!h
                }
                a.d.eu = function() {
                    return c && b
                };
                a.d.ch = function(a) {
                    "boolean" === typeof a && (c = a);
                    return c
                };
                a.d.ev = function() {
                    return {
                        isDfp: z,
                        win: h,
                        sentinel: e
                    }
                };
                a.d.ew = function() {
                    return h &&
                        h.postMessage && e ? (h.postMessage({
                            sentinel: e,
                            type: "send-intersections"
                        }, "*"), !0) : !1
                }
            })();
            a.d.ex = function() {
                var a = navigator && navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\d{0,1}\.\d)/);
                return a ? parseFloat(a[1]) : -1
            };
            a.d.ey = function() {
                return 6.1 === a.d.ex()
            };
            a.d.ez = function() {
                var b = a.d.g;
                return b.navigator && "function" === typeof b.navigator.getBattery
            };
            a.d.ds = function() {
                return !!a.d.fa()
            };
            a.d.fa = function() {
                return a.d.dk() ? {
                        measurableFn: a.d.bz
                    } : a.d.cd ? {
                        measurableFn: a.d.dl
                    } : a.d.ch() ? {
                        measurableFn: a.d.dn
                    } :
                    a.d.bq() ? {
                        measurableFn: a.d.bq
                    } : a.d.cn() ? {
                        measurableFn: a.d.cn
                    } : a.d.de() ? {
                        measurableFn: a.d.dd
                    } : !1
            };
            a.d.fb = a.b.bc();
            a.d.fc = function(b) {
                return a.b.df() ? !0 : b = (b = a.d.fb) || a.b.bd()
            };
            var v = {
                    a: "a",
                    b: "b",
                    c: "c",
                    d: "d",
                    e: "e",
                    f: "f"
                },
                z = {
                    a: "waiting",
                    b: "noHistData",
                    c: "dataAvailable",
                    d: "slotWaiting",
                    e: "slotNoHistData",
                    f: "slotNoSlotData"
                };
            a.d.fd = function() {
                var b = {};
                a.b.forEach(v, function(a, c) {
                    b[a] = z[c]
                });
                a.b.forEach(z, function(a, c) {
                    b[a] = a
                });
                return b
            }();
            a.d.fe = z
        })(m);
        (function(a) {
            function l(a, g, h) {
                function k(a, b) {
                    for (var c in a) a.hasOwnProperty(c) &&
                        b.call(null, a[c], c)
                }

                function c(a) {
                    var b = [];
                    k(a, function(a, c) {
                        b.push(c)
                    });
                    return b
                }
                a = g[a];
                a && a.xa.sode || (a.xa.sode = function() {
                        this.desw = {};
                        this.xfgf = [];
                        this.publishing_ = !1;
                        this.xkcd = {};
                        this.edws = []
                    }, a.xa.sode.prototype.uxin = function() {
                        var a = function(a) {
                            a = h.max(4, a);
                            return ((1 + h.random()) * h.pow(16, a) | 0).toString(16).substring(0, a)
                        };
                        return function(b) {
                            return a(4) + "-" + a(4) + "-" + a(4) + "-" + a(4)
                        }
                    }(), a.xa.sode.prototype.xsza = function(a) {
                        this.desw[a] || (this.desw[a] = {});
                        return this.desw[a]
                    }, a.xa.sode.prototype.esgf =
                    function(a, b) {
                        this.publishing_ ? this.xfgf.push(arguments) : this.zaxs.apply(this, arguments)
                    }, a.xa.sode.prototype.kswa = function(a, b) {
                        for (var c = this.xkcd[a] || [], d = c && c.length, g = 0; g < d; g++)
                            if (c[g] === b) return !1;
                        c.push(b);
                        c.sort(function(a, b) {
                            return a - b
                        });
                        this.xkcd[a] = c
                    }, a.xa.sode.prototype.aksw = function(a, b) {
                        if (!this.xkcd[a]) return !1;
                        for (var c = this.xkcd[a], d = -1, g = c && c.length, h = 0; h < g; h++)
                            if (c[h] === b) {
                                d = h;
                                break
                            } - 1 != d && c.splice(d, 1);
                        this.xkcd[a] = c
                    }, a.xa.sode.prototype._getEventPriorities_ = function(a) {
                        return this.xkcd[a] || []
                    }, a.xa.sode.prototype.azsx = function(a, b, c) {
                        c = c || {};
                        var d = c.id || this.uxin(),
                            g;
                        g = c.priority;
                        g = !isNaN(g) && isFinite(g) ? parseInt(g, 10) : 10;
                        for (var h = this.xsza(a), k = 0; h[d] && !c.id && 10 > k;) k++, d = this.uxin();
                        h[g] || (h[g] = {});
                        this.kswa(a, g);
                        c.priority = g;
                        h[g][d] = {
                            cb: b,
                            options: c
                        };
                        return d
                    }, a.xa.sode.prototype.zaxs = function(a, b) {
                        if (!this.desw[a]) return !1;
                        this.publishing_ = !0;
                        for (var c = this.edws.slice.call(arguments, 1), d = this._getEventPriorities_(a).slice(0), g = 0, h = d.length; g < h; g++) {
                            var k = this.desw[a][d[g]],
                                w;
                            for (w in k)
                                if (k.hasOwnProperty(w)) {
                                    var D =
                                        k[w];
                                    if (D) {
                                        var v;
                                        v = D.options && D.options.includeId ? [w].concat(c) : c;
                                        if (!D.options || !D.options.condition || D.options.condition && D.options.condition.apply(null, v)) D.options && D.options.once && "undefined" !== typeof D.options.priority && this.sxaz(a, {
                                            id: w,
                                            priority: D.options.priority
                                        }), D.cb.apply(null, v)
                                    }
                                }
                        }
                        this.publishing_ = !1;
                        for (c = 0; 0 < this.xfgf.length && 500 > c; c++) this.zaxs.apply(this, this.xfgf.pop())
                    }, a.xa.sode.prototype.swaq = function(a, b, f) {
                        var d = !1;
                        if (this.desw[a] && this.desw[a][f]) try {
                            delete this.desw[a][f][b],
                                d = !0
                        } catch (g) {}
                        0 === c(this.desw[a][f]).length && this.aksw(a, f);
                        return d
                    }, a.xa.sode.prototype.sxaz = function(a, b) {
                        if (!b || "object" != typeof b || !this.desw[a]) return !1;
                        if (b.id && void 0 !== b.priority) return this.swaq(a, b.id, b.priority);
                        if (b.id || b.callback)
                            for (var c = this._getEventPriorities_(a), d = 0, g = c.length; d < g; d++) {
                                var h = c[d];
                                if (b.id && b.callback) {
                                    if (this.desw[a][h][b.id] && this.desw[a][h][b.id].cb == b.callback) return this.swaq(a, b.id, h)
                                } else if (b.id) {
                                    if (this.desw[a][h][b.id]) return this.swaq(a, b.id, h)
                                } else
                                    for (var k in this.desw[a][h])
                                        if (this.desw[a][h][k] &&
                                            this.desw[a][h][k].cb == b.callback) return this.swaq(a, k, h)
                            }
                        return !1
                    }, a.xa.sode.prototype.ugin = function(a) {
                        if ("string" === typeof a)
                            if (this.desw[a]) delete this.desw[a];
                            else return !1;
                        else this.desw = {};
                        return !0
                    })
            }
            a.m = {};
            a.m.b = function(d) {
                d.xa.sode || (d.xb == window ? l(a.d.ax, window, r) : a.b.cr(l, "'" + a.d.ax + "',window, Math", d.xb));
                a.m.a = new d.xa.sode
            }
        })(m);
        (function(a) {
            function l(d, g) {
                function h(a) {
                    var c = b.xb.Math.pow,
                        f = b.xb.Math.random;
                    a = (0, b.xb.Math.max)(4, a);
                    return ((1 + f()) * c(16, a) | 0).toString(16).substring(0,
                        a)
                }

                function k(a) {
                    return function(b) {
                        return a(b)
                    }
                }

                function c(a, b) {
                    if (!a || "string" !== typeof b || !a[b] || a == e) return !1;
                    if ("string" === typeof a.nodeName && ("OBJECT" === a.nodeName || "EMBED" === a.nodeName)) {
                        var c = document && document.body && document.body[b];
                        if (c && c !== a[b]) return c
                    }
                    return !1
                }
                var e;
                e = "object" === typeof a && a && a.a && a.a.b ? a.a.b : this.window;
                g[d] = g[d] || {
                    zs: !1,
                    zr: 0,
                    yf: {},
                    h: 0,
                    m: 0,
                    i: {},
                    xa: {},
                    xb: g,
                    xc: {},
                    xyds: {}
                };
                var b = g[d],
                    f = {},
                    t = function() {
                        var a = !1;
                        try {
                            var b = Object.defineProperty({}, "passive", {
                                get: function() {
                                    a = !0
                                }
                            });
                            e.addEventListener("test", null, b);
                            e.removeEventListener("test", null, b)
                        } catch (c) {}
                        return a
                    }();
                b.xc.dowg = function(a, c) {
                    b && (b.xyds || (b.xyds = {}), b && b.xyds && (b.xyds[c] ? b.xyds[c].push(a) : b.xyds[c] = [a]))
                };
                b.xc.hsxk = function() {
                    b.dcsx && b.dcsx.dcwn();
                    "undefined" !== typeof a && a && b.xc.esde(a);
                    var a;
                    b.xc.exde(b.xc.hsxk, 1E3)
                };
                b.xc.esde = function(a) {
                    e && e.clearTimeout && e.clearTimeout(a)
                };
                b.xc.ynds = function(a, b, e, d) {
                    var g, h, z = !1;
                    "touchstart" === b && t && (z = {
                        passive: !0
                    });
                    d ? f[b + d] ? e = f[b + d] : (e = k(e), f[b + d] = e) : e = k(e);
                    if (a.addEventListener) d = "addEventListener", g = "";
                    else if (a.attachEvent) d = "attachEvent", g = "on";
                    else return !1;
                    if (h = c(a, d)) try {
                        h.call(a, g + b, e, z)
                    } catch (G) {
                        a[d](g + b, e, z)
                    } else if (a && d && a[d]) try {
                        a[d](g + b, e, z)
                    } catch (G) {
                        return !1
                    }
                };
                b.xc.engn = function(a, b, e, d) {
                    var g, h = b + d,
                        z;
                    if (!a) return delete f[h], !1;
                    e = !1 !== d ? f[h] : e;
                    if (a.removeEventListener) d = "removeEventListener", g = "";
                    else if (a.detachEvent) d = "detachEvent", g = "on";
                    else return delete f[h], !1;
                    if (z = c(a, d)) try {
                        z.call(a, g + b, e, !1)
                    } catch (k) {
                        a[d](g + b, e, !1)
                    } else try {
                        a[d](g +
                            b, e, !1)
                    } catch (k) {}
                    delete f[h]
                };
                b.xc.exde = function(a, b) {
                    a = k(a);
                    var c;
                    e && e.setTimeout && (c = e.setTimeout(a, b));
                    return c
                };
                b.xc.exae = function(a, b, c) {
                    return function() {
                        b.apply(c || null, a.concat(a.slice.call(arguments)))
                    }
                };
                b.xc.uxin = function() {
                    return h(4) + "-" + h(4) + "-" + h(4) + "-" + h(4)
                };
                b.xc.twer = function(a, c) {
                    b && (b.yf || (b.yf = {}), b && b.yf && (b.yf[c] ? b.yf[c].push(a) : b.yf[c] = [a]))
                }
            }
            a.w = {};
            a.w.a = function(d) {
                var g = a.w.b(d),
                    h = !1;
                g || (g = a.w.c(d), h = !0, g.xc.exde(g.xc.hsxk, 1E3));
                window[a.d.ax] = g;
                a.m.b(g);
                h && (g.swde = new g.xa.sode);
                a.m.a.azsx("adKilled", a.w.d);
                a.m.a.azsx("allLocalAdsKilled", a.w.e, {
                    once: !0
                });
                return g
            };
            a.w.e = function() {
                a.m.a.sxaz("adKilled", {
                    callback: a.w.d
                });
                a.w.f(q)
            };
            a.w.d = function(d) {
                a.d.k = null;
                if (q) {
                    try {
                        var g = q.yf[a.d.az.a];
                        if (g) {
                            var h = a.b.indexOf(g, d.yg); - 1 < h && g.splice(h, 1)
                        }
                        a.w.g(a.d.az.a, d.TAGID)
                    } catch (k) {}
                    a.w.f(q)
                }
            };
            a.w.h = function(d, g) {
                var h = a.w.b(a.d.g);
                h && h.xc.twer(d, g)
            };
            a.w.i = function(d, g) {
                var h = a.w.b(a.d.g);
                h && h.xc.dowg(g, d)
            };
            a.w.g = function(d, g) {
                var h = q.xyds[d];
                if (h) {
                    var k = a.b.indexOf(h, g); - 1 < k && h.splice(k,
                        1)
                }
            };
            a.w.f = function(d) {
                var g = !1,
                    h = !1,
                    k = 0,
                    c = 0;
                try {
                    d.yf[a.d.az.a] && (h = 0 === d.yf[a.d.az.a].length), a.b.forEach(d.yf, function(a) {
                        0 < a.length && k++
                    }), a.w.g(a.d.az.a, a.d.bb), a.b.forEach(d.xyds, function(a) {
                        0 < a.length && (c += a.length)
                    }), d.xyds[a.d.az.a] && 0 != d.xyds[a.d.az.a].length || (h = !0), 0 === c && 0 === k && (g = !0)
                } catch (e) {}
                h && d.swde.esgf("allAdsInWindowKilled", a.d.az.a);
                g && (a.m.a.sxaz("adKilled", {
                    callback: a.w.d
                }), a.m.a.sxaz("allLocalAdsKilled", {
                    callback: a.w.e
                }), d.swde.esgf("allAdsKilled"))
            };
            a.w.c = function(d) {
                d == window ?
                    l(a.d.ax, window) : a.b.cr(l, "'" + a.d.ax + "',window", d);
                return a.w.b(d)
            };
            a.w.b = function(d) {
                try {
                    return d = d || a.d.g, d[a.d.ax]
                } catch (g) {
                    return null
                }
            };
            a.w.j = function(d) {
                try {
                    var g = [];
                    d = d || a.d.g;
                    if (!d) return !1;
                    var h = a.d.av;
                    if (!h) return !1;
                    var k = new RegExp("^" + h);
                    if (!k) return !1;
                    a.b.forEach(d, function(a, e) {
                        -1 < e.search(k) && a && "number" === typeof a.zr && g.push(a)
                    });
                    return g
                } catch (c) {
                    return !1
                }
            };
            a.w.k = function(d) {
                try {
                    var g = [];
                    d = d || a.d.g;
                    return d ? (g = a.w.j(d)) ? 0 < g.length ? !0 : !1 : !1 : !1
                } catch (h) {
                    return !1
                }
            };
            a.w.l = function(d) {
                var g =
                    a.w.b();
                g && (g.i[d] = !0)
            }
        })(m);
        (function(a) {
            function l(a) {
                var d = a;
                try {
                    for (var k = 0; 100 > k && (a = decodeURIComponent(a), d != a) && !a.match(/^http(s)?\:/); k++) d = a
                } catch (c) {}
                return a.replace(/(^\s+|\s+$)/g, "")
            }

            function d(d, h, k) {
                var c = {};
                d = d.replace(/&amp;/g, "&").replace(/(^\s+|\s+$)/g, "");
                d = d.split("&");
                for (k = 0; k < d.length; k++) {
                    var e = d[k].split("=");
                    "string" === typeof e[1] ? (e[0] && e[0].match("moatClient") && (c["rawM" + e[0].slice(1)] = e[1]), e[1] = l(e[1])) : e[1] = "";
                    c[e[0]] = e[1]
                }(d = a.b.x()) && (c.zMoatCURL = d);
                d = "";
                d = a.d.cq();
                d = "undefined" !== typeof d && 1 !== d ? "App" : a.d.da ? "Mobile" : "Desktop";
                c.zMoatDev = d;
                a.x.f(c);
                c.zMoatPLATFORM = a.x.h();
                if (a.d.e && "beta.next.cnn.com" === a.d.g.location.hostname || a.d.e && "beta.cnn.com" === a.d.g.location.hostname) c.zMoatBeta = "beta.cnn.com";
                c.zMoatAPP ? c.zMoatAppKey = c.zMoatAPP : "amp" === c.zMoatPG && (c.zMoatAppKey = c.zMoatPG);
                k = c && c.zMoatPS;
                d = ["rect_atf_01", "bnr_atf_01"];
                a.b.aj(d, k) && (c.zMoatRetail = !0);
                var b;
                "rect_atf_01" === k && (d = a.d.g.document.getElementById("ad_bnr_atf_01")) && (d = d.getElementsByTagName("iframe"),
                    a.b.forEach(d, function(c) {
                        if ((c = (c = a.k.e(c)) && c.body) && c.innerHTML && c.innerHTML.match("NO_BANNER")) return b = !0, !1
                    }));
                c.zMoatPSB = b ? c.zMoatPS + " | No Banner Present" : c.zMoatPS;
                (d = (d = xa && xa.match(/\?sr=(biob-ar[^?&;#]*)(?:$|[&?;#])/)) && d[1]) && (c.zMoatNHTCode = d);
                if (!a.b.j() && (d = [], k = (e = c && c.moatClientSlicer1 && c.moatClientSlicer1.split("/")) && e[2], e = e && e[3], k && "tools" !== e)) {
                    switch (k) {
                        case "CNN":
                        case "CNNMoney":
                            d = ["bnr_atf_01", "rect_atf_01", "rect_atf_02"];
                            break;
                        case "NCAA":
                        case "PGA":
                        case "AS":
                            d = ["bnr_atf_01",
                                "rect_atf_01"
                            ];
                            break;
                        case "NBA":
                            d = ["bnr_atf_01", "bnr_atf_02", "bnr_atf_03", "rect_atf_01"];
                            break;
                        case "BR":
                            d = ["oop_skin_01", "rect_atf_01", "bnr_atf_01", "bnr_atf_01_mob", "rect_atf_01_tab"];
                            break;
                        case "NASCAR":
                            d = "gallery" === c.moatClientSlicer1.split("/")[3] ? ["bnr_atf_01", "rect_atf_01", "rect_atf_02"] : ["bnr_atf_01", "rect_atf_01"];
                            break;
                        case "Toon":
                            d = ["bnr_atf_02", "bnr_atf_01", "mod", "rect_atf_01"];
                            break;
                        case "TRU":
                            d = ["bnr_atf_01", "rect_atf_01", "rect_btf_01"];
                            break;
                        case "TNT":
                        case "TBS":
                            d = ["bnr_atf_01", "mod",
                                "rect_atf_01"
                            ];
                            break;
                        case "HLN":
                            d = "bnr_atf_01 rect_atf_01 rect_atf_02 bnr_atf_02 bnr_atf_03 rect_atf_03".split(" ");
                            break;
                        case "CNNi":
                        case "Arabic":
                        case "Espanol":
                            d = ["rect_atf_01", "bnr_atf_01", "bnr_atf_02"]
                    }
                    c.zMoatPS && a.b.aj(d, c.zMoatPS) ? c.zMoatAdUnitRetail = !0 : "bnr_btf_06" === c.zMoatPS ? a.b.aj(["/8663477/NBA/scores/gameInfo", "/8663477/NBA/social_spotlight"], c.moatClientSlicer1) && (c.zMoatAdUnitRetail = !0) : "bnr_atf_02" === c.zMoatPS && a.b.forEach(["CNN/homepage", "CNNMoney/homepage"], function(b) {
                        if (-1 < a.b.indexOf(c.moatClientSlicer1,
                                b)) return c.zMoatAdUnitRetail = !0, !1
                    })
                }
                "undefined" !== typeof h && (c.clientZone = "undefined" !== h ? h : "");
                return c = a.x.i(c)
            }
            a.x = {};
            a.x.a = {};
            a.x.a.a = [];
            a.x.b = function(d, h) {
                if (!d) return !1;
                if ("undefined" === typeof d.startTime || h) d.startTime = a.d.p;
                if ("undefined" === typeof d.rand || h) d.rand = r.floor(r.random() * r.pow(10, 12));
                "undefined" === typeof d.adNum && (d.adNum = q.zr, q.zr++)
            };
            a.x.c = function(d) {
                if (!d) return !1;
                var h = a.b.u();
                a.b.z();
                decodeURIComponent(h);
                return d
            };
            a.x.d = function(d) {
                var h = a.x.e(d),
                    k = function(c) {
                        return "string" ==
                            typeof c && 0 < c.length && (c = c.split(","), a.b.d(c)) ? (c = a.b.bu(function(a) {
                                return parseInt(a)
                            }, c), r.max.apply(null, c)) : !1
                    };
                a.p.l(function(c) {
                    if (c) {
                        var d = c.zMoatMMV,
                            b = c.zMoatMGV;
                        if (a.b.cx(d) && a.b.cx(b)) c.zMoatMMV_MAX = "na", c.zMoatMGV_MAX = "na";
                        else {
                            var f = a.d.fd;
                            f.hasOwnProperty(d) ? (d = f[d], c.zMoatMMV = d, c.zMoatMMV_MAX = d) : (d = k(d), a.b.cj(d) && (c.zMoatMMV_MAX = d + ""));
                            f.hasOwnProperty(b) ? (b = f[b], c.zMoatMGV = b, c.zMoatMGV_MAX = b) : (b = k(b), a.b.cj(b) && (c.zMoatMGV_MAX = b + ""));
                            "string" !== typeof c.zMoatMMV_MAX && (c.zMoatMMV_MAX =
                                "na");
                            "string" !== typeof c.zMoatMGV_MAX && (c.zMoatMGV_MAX = "na")
                        }
                    }
                })(h);
                h && (h.zMoatOrigSlicer1 = h.moatClientSlicer1 || "N/A", h.zMoatOrigSlicer2 = h.moatClientSlicer2 || "N/A");
                a.m.a.azsx("adInitialized", function(c) {
                    var d = c.DfpSlot,
                        b = c.ao;
                    if (d) {
                        b.fullAdUnitPath = a.y.a(d);
                        b.dfpSlotId = a.y.b(d);
                        for (var d = a.y.c(d), f = 0; f < d.length; f++) b["dfpAdUnitLabel" + f] = d[f]
                    }
                    b = c.DfpSlot;
                    c = c.ao;
                    if (b) {
                        var b = a.y.d(b),
                            h;
                        for (h in b)
                            if (d = b[h].length, 1 === d) c["gptMoat_" + h] = b[h][0];
                            else if (1 < d) {
                            for (var f = "", g = 0; g < d; g++) f += b[h][g] + ",";
                            f =
                                f.substring(0, f.length - 1);
                            c["gptMoat_" + h] = f
                        }
                    }
                });
                h && a.b.forEach(a.x.a.a, function(a) {
                    a(h)
                });
                return h
            };
            a.x.e = function(a) {
                try {
                    var h = a.className,
                        k = a.getAttribute("src");
                    h.split("\n").join(" ");
                    if (-1 !== h.indexOf("moatfooter")) return !1;
                    var c = k.split("?"),
                        e = k.split("#");
                    a = !1;
                    1 < c.length && 1 < e.length && c[1].length < e[1].length && (a = !0);
                    if (1 == c.length || a) c = e;
                    return 1 < c.length ? d(c[1], "undefined") : !1
                } catch (b) {
                    return !1
                }
            };
            a.x.f = function(d) {
                var h = a.d.g.optimizelyMoat;
                if (h && a.b.d(h) && 0 !== h.length) {
                    var k = function(a) {
                            if ("undefined" !==
                                typeof a) return a.trim().replace(/[ |]/g, "_")
                        },
                        h = a.b.bu(function(a) {
                            var d = a.split(":");
                            a = k(d[0]);
                            d = k(d[1]);
                            return [a, d].join("|")
                        }, h);
                    d.zMoatOptimize = h.join(";")
                }
                return d
            };
            a.x.g = function(a) {
                if (!a) return !1;
                var h = {};
                try {
                    var k = a && a.className.replace("amp;", "").split("?")[1];
                    if (h = k && d(k)) h.zMoatOrigSlicer1 = h.moatClientSlicer1 || "N/A", h.zMoatOrigSlicer2 = h.moatClientSlicer2 || "N/A";
                    return h
                } catch (c) {
                    return !1
                }
            };
            a.x.i = function(a) {
                if (a) {
                    for (var d in a) a.hasOwnProperty(d) && d && d.match("moatClientLevel") && "string" ===
                        typeof a[d] && (a[d] = a[d].replace(/\:/g, "_").replace(/%3A/gi, "_"));
                    return a
                }
            };
            a.x.j = function(a) {
                try {
                    var d = zoneRegEx.exec(a.innerHTML);
                    0 < d.length && (zone = d[1]);
                    return zone
                } catch (k) {}
            };
            a.x.k = function(a) {
                return (a = unescape(unescape(unescape(unescape(a.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/)) ? {
                    adid: a && a[1] || "-",
                    cid: a && a[2] || "-"
                } : !1
            };
            a.x.l = function(a, d) {
                return d || {}
            };
            a.x.m = function(a) {
                a = decodeURIComponent(decodeURIComponent(a)); - 1 < a.indexOf("anonymous.google") && (a = "anonymous.google");
                var d = a.match(/^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/);
                d && d[1] && (a = d[1]);
                return a.split("/")[0]
            };
            a.x.h = function() {
                return a.d.ao().isInApp && "inApp" || a.d.da && "mobileWeb" || "desktop"
            };
            a.x.n = function(d) {
                a.x.b(d);
                a.x.o(d);
                d = a.x.f(d);
                d = a.x.i(d);
                a.x.p && a.x.p(d);
                return d
            }
        })(m);
        m.b.df() && (Q += "_BETA");
        var q = m.w.a(m.d.g),
            Ma = m.d.e,
            sa = m.b.j(),
            ea = m.d.p,
            La = m.d.g,
            A = "moatFound" + Q,
            I = "__moat__" + Q;
        m.b.de() && 2 === M && (A = "moatFound" + Q + "BETA", I = "__moat__" + Q + "BETA");
        (function(a) {
            function l(d, g, h) {
                var k = g[d];
                k && k.xa.txae || (k.xa.txae = function(a, d) {
                    this.sxdc = k.xc.uxin();
                    this.cdxs =
                        a;
                    this.xscd = {};
                    this.swde = d;
                    var b = this,
                        f = this.swde.azsx("allAdsInWindowKilled", function(a) {
                            k.dcsx.engn({
                                listenerName: "unloadFn" + a
                            });
                            k.dcsx.engn({
                                listenerName: "beforeunloadFn" + a
                            })
                        });
                    this.swde.azsx("allAdsKilled", function() {
                        b.swde.sxaz("allAdsInWindowKilled", {
                            id: f
                        });
                        k.dcsx && (k.dcsx.aqsw(), k.zs = !1, k.xz = !1, k.dcsx = !1)
                    }, {
                        once: !0
                    })
                }, k.xa.txae.prototype.wsed = function(a, d, b, f, h) {
                    this.xscd[f] || (this.xscd[f] = {});
                    this.xscd[f].evt = d;
                    this.xscd[f].target = a;
                    this.xscd[f].periodic = !0;
                    var g;
                    g = k.xc.exae([this], function(l,
                        p) {
                        k.xc.engn(a, d, null, f);
                        if (l.xscd[f]) {
                            l.xscd[f].tid && k.xc.esde(l.xscd[f].tid);
                            l.xscd[f].tid = k.xc.exde(function() {
                                l.xscd[f].tid = null;
                                k.xc.ynds(a, d, g, f)
                            }, h);
                            try {
                                l.swde.zaxs(b, p)
                            } catch (w) {}
                        }
                    });
                    k.xc.ynds(a, d, g, f)
                }, k.xa.txae.prototype.wsqa = function(a) {
                    this.xscd[a] && (k.xc.esde(this.xscd[a].tid), k.xc.engn(this.xscd[a].target, this.xscd[a].evt, null, a), delete this.xscd[a])
                }, k.xa.txae.prototype.qaws = function() {
                    if (!("object" === typeof a && a && a.d && a.d.c && a.d.c())) {
                        this.wsed(this.cdxs, "scroll", "scroll", "globalScrollevent" +
                            this.sxdc, 1E3);
                        var c = this.cdxs.document.documentElement;
                        this.wsed(c, "mousedown", "mouseEvent", "globalMouseDown" + this.sxdc, 1E3);
                        this.wsed(c, "mouseover", "mouseEvent", "globalMouseOver" + this.sxdc, 1E3);
                        this.wsed(c, "mousemove", "mouseEvent", "globalMouseMove" + this.sxdc, 5E3);
                        this.wsed(this.cdxs, "mousewheel", "mouseEvent", "globalMouseWheel" + this.sxdc, 5E3);
                        this.wsed(this.cdxs, "DOMMouseScroll", "mouseEvent", "globalMouseScroll" + this.sxdc, 5E3);
                        this.wsed(c, "touchstart", "mouseEvent", "globalTouchStartEvent" + this.sxdc,
                            1E3);
                        this.wsed(c, "keydown", "keyboardEvent", "globalKeyboardEvent" + this.sxdc, 1E3)
                    }
                }, k.xa.txae.prototype.aqsw = function() {
                    for (var a in this.xscd) this.engn({
                        listenerName: a
                    })
                }, k.xa.txae.prototype.ynds = function(a, d, b, f) {
                    if (!this.xscd[f]) {
                        this.xscd[f] = {};
                        this.xscd[f].evt = d;
                        this.xscd[f].target = a;
                        this.xscd[f].publishEvt = b;
                        var h;
                        h = k.xc.exae([this], function(a, c) {
                            a.xscd[f] && a.swde.zaxs(b, c)
                        });
                        k.xc.ynds(a, d, h, f)
                    }
                }, k.xa.txae.prototype.engn = function(a) {
                    function d(a, b) {
                        a.xscd[b].periodic ? a.wsqa(b) : (k.xc.engn(a.xscd[b].target,
                            a.xscd[b].evt, null, b), delete a.xscd[b])
                    }
                    var b = a.target && a.evt,
                        f = a.target && !a.evt,
                        h = a.all;
                    if (a.listenerName) this.xscd[a.listenerName] && d(this, a.listenerName);
                    else if (b)
                        for (var g in this.xscd)(b = this.xscd[g]) && b.evt == a.evt && b.target == a.target && d(this, g);
                    else if (f)
                        for (g in this.xscd)(b = this.xscd[g]) && b.target == a.target && d(this, g);
                    else if (h)
                        for (g in this.xscd)(b = this.xscd[g]) && d(this, g)
                }, k.xa.txae.prototype.kdmw = function(a) {
                    k.swde.esgf(a.publishEvt)
                }, k.xa.txae.prototype.dcwn = function() {
                    var a = this.xscd,
                        d;
                    for (d in a) {
                        var b = a[d];
                        "unload" === b.evt && b.target && b.target.closed && this.kdmw(b)
                    }
                })
            }
            a.z = {};
            a.z.a = function(d) {
                d && (d.xa.txae || (d.xb == window ? l(a.d.ax, window, r) : a.b.cr(l, "'" + a.d.ax + "',window, Math", d.xb)), d.zs || (d.dcsx = new d.xa.txae(a.d.g, d.swde), d.zs = !0))
            };
            a.m.a.azsx("modulesReady", a.z.a, {
                once: !0
            });
            a.m.a.azsx("startAdTracking", function(d) {
                q && q.zs && !q.xz && (q.dcsx ? (q.xz = !0, q.dcsx.qaws()) : a.z.a(q), a.focus.setFocusListeners())
            })
        })(m);
        (function(a) {
            function l() {
                this.height = this.width = this.absTop = this.absLeft =
                    0;
                this.update = function(a) {
                    var c = b("left", a.win),
                        f = b("top", a.win);
                    !1 !== c && !1 !== f && (this.absLeft = a.left + c, this.absTop = a.top + f, this.width = a.width, this.height = a.height)
                }
            }

            function d(b, c) {
                var f = b.zr;
                w.hasOwnProperty(f) || (w[f] = new l);
                var d = c || new a.aa.k(b.aa);
                w[f].update(d)
            }

            function g(b, c, f) {
                return f ? new a.aa.k(b.parentNode, c) : new a.aa.k(b, c)
            }

            function h(a, b) {
                if (!a) return !1;
                var f = "number" == typeof a.zr,
                    e, h;
                f ? (e = a.aa, h = a._calcVideoBasedOnContainer) : e = a;
                e = g(e, b, h);
                h = e.height;
                var k = e.width;
                f && (a.AD_RECT = e);
                var w =
                    e.calcArea();
                if (0 === w) return {
                    area: w,
                    visibleArea: 0,
                    percv: 0
                };
                var t = c(e),
                    p = t.visibleRect.calcArea(),
                    u = p / w,
                    l;
                a: {
                    var y = t.cumulRect,
                        O = t.cumulRect.getViewportRect();
                    if (0 > y.top && 0 < y.bottom) l = -y.top;
                    else if (0 <= y.top && y.top <= O.height) l = 0;
                    else {
                        l = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    if (0 <= y.bottom && y.bottom <= O.height) y = y.height;
                    else if (y.bottom > O.height && y.top < O.height) y = y.height - (y.bottom - O.height);
                    else {
                        l = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    l = {
                        yMin: l,
                        yMax: y
                    }
                }
                f && d(a, e);
                return {
                    area: w,
                    visibleArea: p,
                    visibleRect: t.visibleRect,
                    cumulRect: t.cumulRect,
                    percv: u,
                    yMinMax: l,
                    elGeo: {
                        elHeight: h,
                        elWidth: k,
                        foldTop: t.cumulRect.top,
                        totalArea: t.parentArea
                    },
                    rect: e.rect
                }
            }

            function k(a, b) {
                for (var c = [], f = 0; f < b.length; f++) c.push(a(b[f]));
                return c
            }

            function c(b) {
                var c, f = [],
                    d = a.b.co(b.el, b.win, b && b.el && b.el._moatParentCount);
                d && (f = k(function(b) {
                    return new a.aa.k(b)
                }, d));
                f.unshift(b);
                d = f.length;
                b = new a.aa.k(b.el, a.d.g);
                for (var e = 0; e < d; e++) {
                    var h = f[e];
                    0 === e ? c = h : (c.changeReferenceFrame(h), b.changeReferenceFrame(h));
                    h = h.getViewportRect(e < d - 1 ? f[e + 1] : !1);
                    c = a.aa.n(c, h)
                }
                return {
                    visibleRect: c,
                    cumulRect: b,
                    parentArea: f[f.length - 1].calcArea()
                }
            }

            function e(a, b, c, f) {
                a = r.max(a, c);
                b = r.min(b, f);
                return b > a ? [a, b] : [0, 0]
            }

            function b(a, b) {
                b || (b = window);
                try {
                    var c = b.document.documentElement,
                        f = b.document.body;
                    return "left" === a ? b.pageXOffset || c && c.scrollLeft || f && f.scrollLeft : b.pageYOffset || c && c.scrollTop || f && f.scrollTop
                } catch (d) {
                    return !1
                }
            }

            function f(b) {
                function c(a, b) {
                    return {
                        top: r.max(a.top, b.top),
                        right: r.max(a.right, b.right),
                        bottom: r.min(a.bottom, b.bottom),
                        left: r.min(a.left, b.left)
                    }
                }
                var f, d, e;
                f = [];
                d = [];
                if (!a.b.d(b) || 0 === b.length) return !1;
                a.b.forEach(b, function(a) {
                    a.cumulRect && a.visibleRect && (d.push(a.cumulRect), f.push(a.visibleRect))
                });
                b = a.b.reduce(d, c);
                e = a.b.reduce(f, c);
                return {
                    elRect: b,
                    visibleRect: e
                }
            }

            function t(b, c, f, d, e) {
                var g = {
                        IFRAME: !0,
                        VIDEO: !0,
                        OBJECT: !0,
                        EMBED: !0,
                        IMG: !0
                    },
                    k = h(b),
                    w = [],
                    t = x[e];
                f.elementsFromPoint && !t.elementsFromPointCache ? (c = f.elementsFromPoint(c.m[0], c.m[1]) || [], t.elementsFromPointCache = c, w = w.concat(Array.prototype.slice.call(c))) : (c = a.b.cf(c.m[0], c.m[1], f), t.elementsFromPointCache &&
                    (w = w.concat(Array.prototype.slice.call(t.elementsFromPointCache))), c && (w = [c].concat(w)));
                for (t = 0; t < w.length; t++) {
                    if (f = (c = w[t]) && c !== d && c[I] !== e && g[c.nodeName] && !a.b.cc(c, b) && !a.b.cc(b, c)) f = (f = c) && f.nodeName && "map" === f.nodeName.toLowerCase() ? !0 : (f = a.b.bl(f)) && (1 >= f.width || 1 >= f.height) ? !0 : !1, f = !f;
                    f && (f = c, f = !(f && (0 === a.b.cm({
                        aa: f
                    }, !0, !0) || 0 === a.b.cl(f, !0))));
                    if (f) {
                        if (f = c = h(c)) f = ((f = c.cumulRect) ? 100 <= f.width && 50 <= f.height : !1) && k && c && .5 <= a.aa.r(k.cumulRect, c.cumulRect);
                        if (f) return !0
                    }
                }
                return !1
            }

            function u(a) {
                var b =
                    .01 * a.width,
                    c = .01 * a.height;
                return {
                    tl: [a.left + b, a.top + c],
                    m: [a.left + (a.right - a.left) / 2, a.top + (a.bottom - a.top) / 2],
                    br: [a.right - b, a.bottom - c]
                }
            }

            function y(b, f) {
                var d = [],
                    e = a.k.h(b);
                e && (d = k(function(f) {
                    var d = c(new a.aa.k(b)).visibleRect;
                    new a.aa.k(f);
                    return {
                        rect: d,
                        frame: f,
                        doc: f.ownerDocument
                    }
                }, e));
                d.unshift({
                    rect: c(new a.aa.k(b)).visibleRect,
                    frame: b,
                    doc: b.ownerDocument
                });
                for (e = 0; e < d.length; e++) {
                    var h = u(d[e].rect),
                        g = !1;
                    if (0 != h.tl[0] || 0 != h.tl[1] || 0 != h.br[0] || 0 != h.br[1]) g = !0;
                    if (g && t(b, h, d[e].doc, d[e].frame,
                            f)) return !0
                }
                return !1
            }
            a.aa = {};
            var p = a.d.e,
                w = {};
            a.aa.a = .5;
            a.aa.b = .3;
            a.aa.c = .98;
            a.aa.d = void 0;
            a.aa.e = function(b, c) {
                c = c || !1;
                return function(f, d) {
                    var e = f.ao.skin ? a.aa.f(f, d) : h(f, d);
                    e.isVisible = c ? e.percv > b : e.percv >= b;
                    e.elGeo && (e.elGeo.threshold = b);
                    return e
                }
            };
            a.aa.f = function(b, c) {
                function d() {
                    if (b.isMultipartAd && b.multipartComponents && 0 < b.multipartComponents.length) {
                        for (var a, f = 0, e = 0; e < b.multipartComponents.length; e++) {
                            var g = h(b.multipartComponents[e], c);
                            g.visibleArea >= f && (f = g.visibleArea, a = b.multipartComponents[e])
                        }
                        return h(a,
                            c)
                    }
                }

                function e() {
                    if (b.isCompositeAd && b.components && 1 < b.components.length) {
                        for (var d = {
                                area: 0,
                                visibleArea: 0,
                                percv: 0,
                                visibleRect: !1,
                                cumulRect: !1,
                                yMinMax: !1,
                                elGeo: !1,
                                rect: !1,
                                componentResults: []
                            }, g, k = 0; k < b.components.length; k++) g = h(b.components[k], c), d.area += g.area, d.visibleArea += g.visibleArea, d.componentResults.push(g);
                        d.percv = d.visibleArea / d.area;
                        b.compositeAdAreaPx = d.area;
                        (g = f(d.componentResults)) && "strict" === a.o.b(b.zr) && a.m.a.zaxs("rectsAvailable", b.zr, g.elRect, g.visibleRect)
                    } else d = h(b, c);
                    return d
                }
                b.viewabilityMethod.strict || (b.viewabilityMethod.strict = 1);
                if (1 == b.ao.skin) {
                    var g = {},
                        k = a.d.g.scrollY || a.d.g.document.documentElement.scrollTop;
                    if ("width" == a.ab.a && a.ab.b <= b.adContent && 45 < k || !a.focus.pageIsVisible()) return g.isVisible = !1, g.isFullyVisible = !1, g.percv = 0, g;
                    g.isVisible = !0;
                    g.isFullyVisible = !0;
                    g.isDentsuVisible = !0;
                    g.percv = 1;
                    a.m.a.zaxs("adEdgesViewStatus", b.zr, {
                        topLeft: !0,
                        topRight: !0,
                        bottomLeft: !0,
                        bottomRight: !0
                    });
                    return g
                }
                g = b.isMultipartAd ? d(b, c) : b.isCompositeAd ? e(b, c) : h(b, c);
                "strict" ===
                a.o.b(b.zr) && a.d.e && !a.d.j() && a.m.a.zaxs("rectsAvailable", b.zr, g.cumulRect, g.visibleRect);
                var k = a.aa.g(g, b),
                    w = a.aa.c;
                g.isVisible = g.percv >= k;
                g.isFullyVisible = g.percv >= w;
                g.elGeo && (g.elGeo.threshold = k);
                b.videoIsFullscreen && 0 < g.percv && (g.isVisible = !0);
                .8 <= g.percv && (g.isDentsuVisible = !0);
                a.aa.d ? g.percv > a.aa.d && (a.aa.d = g.percv) : a.aa.d = g.percv;
                b.AD_RECT = g && g.rect;
                return g
            };
            a.aa.g = function(b, c) {
                return a.ac.a(b.area) ? (c.viewstats || (c.viewstats = {}), c.viewstats.isBigAd = !0, a.aa.b) : a.aa.a
            };
            a.aa.h = function() {
                return p
            };
            a.aa.i = h;
            a.aa.j = function(a, b) {
                p && w.hasOwnProperty(b) || d(a);
                return w[b]
            };
            a.aa.l = g;
            a.aa.m = a.d.t;
            a.aa.k = function(b, c, f, d) {
                try {
                    this.rect = f || b.getBoundingClientRect && b.getBoundingClientRect() || {}
                } catch (e) {
                    this.rect = f || b && {
                        top: b.offsetTop,
                        left: b.offsetLeft,
                        width: b.offsetWidth,
                        height: b.offsetHeight,
                        bottom: b.offsetTop + b.offsetHeight,
                        right: b.offsetLeft + b.offsetWidth
                    } || {}
                }
                f = "left right top bottom width height".split(" ");
                for (d = 0; d < f.length; d++) {
                    var h = f[d];
                    this[h] = this.rect[h]
                }
                b && b.adjustForClip && (f = a.b.ce(b.style.clip)) &&
                    (this.left += f.left, this.right = this.left + f.right, this.top += f.top, this.bottom = this.top + f.bottom);
                b && b.CLIPCHECKINGTARGET && b.CLIPCHECKINGTARGET.style && "absolute" === b.CLIPCHECKINGTARGET.style.position && (f = a.b.ce(b.CLIPCHECKINGTARGET.style.clip)) && (this.right = this.left + f.right, this.left += f.left, this.bottom = this.top + f.bottom, this.top += f.top);
                this.width = this.right - this.left;
                this.height = this.bottom - this.top;
                this.el = b;
                this.win = c || b && a.b.aq(b);
                this.changeReferenceFrame = function(a) {
                    this.left += a.left;
                    this.right +=
                        a.left;
                    this.top += a.top;
                    this.bottom += a.top
                };
                this.calcArea = function() {
                    return (this.right - this.left) * (this.bottom - this.top)
                };
                this.getViewportRect = function(b) {
                    var c = a.d.t(this.win);
                    b && (b.width < c.width && (c.width = b.width, c.right = c.left + c.width), b.height < c.height && (c.height = b.height, c.bottom = c.top + c.height));
                    return c
                }
            };
            a.aa.o = function(a, b, c) {
                return "undefined" === typeof a ? !1 : {
                    left: Number(b) + Number(a.left),
                    right: Number(b) + Number(a.right),
                    top: Number(c) + Number(a.top),
                    bottom: Number(c) + Number(a.bottom)
                }
            };
            a.aa.n =
                function(b, c) {
                    if ("undefined" === typeof b || "undefined" === typeof c) return !1;
                    var f = e(b.left, b.right, c.left, c.right),
                        d = e(b.top, b.bottom, c.top, c.bottom);
                    return new a.aa.k(void 0, void 0, {
                        left: f[0],
                        right: f[1],
                        top: d[0],
                        bottom: d[1]
                    })
                };
            a.aa.p = function(b, c, f, d) {
                if (!b || !c || !f) return !1;
                b = a.aa.i(b);
                if (!b) return !1;
                f = d || a.aa.n(c, f);
                if (!f) return !1;
                d = a.aa.o(b.visibleRect, c.left, c.top);
                return d ? (f = a.aa.n(d, f)) ? {
                    elementRect: a.aa.o(b.cumulRect, c.left, c.top),
                    visibleRect: f,
                    area: b.area,
                    calcVisiblePercv: function() {
                        return (this.visibleRect.right -
                            this.visibleRect.left) * (this.visibleRect.bottom - this.visibleRect.top) / this.area
                    }
                } : !1 : !1
            };
            a.aa.q = b;
            a.aa.i = h;
            a.aa.s = function(b) {
                var f = b.aa;
                b = b.zr;
                if (f) {
                    if (a.d.s) f = y(f, b);
                    else var d = c(new a.aa.k(f)).visibleRect,
                        d = u(d),
                        f = t(f, d, a.d.g.document, null, b);
                    return f
                }
            };
            a.aa.t = function(a) {
                return a ? (a.right - a.left) * (a.bottom - a.top) : !1
            };
            a.aa.u = function(b) {
                function c(b) {
                    return a.b.cj(b) || "string" === typeof b
                }
                return "object" === typeof b && c(b.left) && c(b.right) && c(b.top) && c(b.bottom) ? !0 : !1
            };
            a.aa.r = function(b, c) {
                if (!a.aa.u(b) ||
                    !a.aa.u(c)) return !1;
                var f = a.aa.n(b, c);
                if (!f) return !1;
                var d = a.aa.t(b);
                return f.calcArea() / d
            };
            a.m.a.azsx("adKilled", function(a) {
                a && !a.ep && delete w[a.zr]
            })
        })(m);
        (function(a) {
            function l(b) {
                var c = b.ad,
                    f = b.elem,
                    d = b.cbName,
                    e = b.rcbName,
                    h = b.options;
                b = b.isDummy;
                if (!c || !f || !h) return !1;
                if (f = a.ad.a(c, h.id, f, h)) {
                    if (b) return a.ad.call(c, f, function() {}), !0;
                    a.ad.call(c, f, a.ae.a, "'" + d + "','" + e + "'");
                    return !0
                }
            }

            function d(b) {
                var c = b.ad,
                    f = b.elem,
                    d = b.cbName,
                    e = b.options,
                    h = b.name,
                    g = b.customFn,
                    k = b.preserveDom,
                    t = b.argument ||
                    "";
                if (!(c && f && e && g)) return !1;
                if (b.customPixelDiv) return k = document.createElement("div"), b = e.id || a.b.cq(), a.b.cw(k, e), k.id = b, a.b.bw(k, f), {
                    killFn: g(d, h, c.zr, k)
                };
                b = a.ad.a(c, e.id, f, e);
                if (!b) return !1;
                a.ad.call(c, b, g, "'" + d + "', '" + h + "', '" + c.zr + "', '" + t + "'", null, k);
                return !0
            }
            a.s = {};
            var g = a.b.n(),
                h = null !== g,
                k = "number" === typeof a.d.ap(),
                c = a.d.an,
                e = !1,
                b = !0,
                f = function() {
                    var a = navigator.appVersion.match(/Windows NT (\d\.\d)/);
                    return a ? parseFloat(a[1]) : -1
                }(),
                t = 6.2 <= f;
            a.s.b = g;
            a.s.c = h;
            a.s.d = k;
            a.s.e = f;
            a.s.f = t;
            var u = {
                FRAME_RATE: "fr",
                STAGE_WIDTH: "sd",
                ACTIVE_STAGE_WIDTH: "asd",
                THROTTLE: "td",
                RAPID_THROTTLE: "rtd"
            };
            a.s.g = u;
            a.s.h = a.d.o;
            a.s.i = a.b.ak && a.b.ak();
            a.s.j = !1;
            if (a.s.h) try {
                var y = a.b.cu();
                a.s.j = 5 < y
            } catch (p) {}
            a.s.k = !1;
            a.s.l = function(a) {
                if (a.currentFocusState) {
                    if ("center" != a.config.name) {
                        var b, c, f = (b = a.manager.getPixelByName("center")) && (c = b.viewstates[a.manager.getTargetViewState()]) && c.inview;
                        b = a.manager.reachedAnyInview;
                        if (!f && b) {
                            a.skipWidthCheck = !0;
                            return
                        }
                    }
                    a.skipWidthCheck = !1
                } else a.skipWidthCheck = !0
            };
            a.s.m =
                function(b) {
                    var c = a.s.l,
                        f = b.aa.parentNode,
                        d = {
                            insertableFunc: a.s.n,
                            pixels: [{
                                name: "center",
                                id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                                target: b.aa,
                                container: f,
                                position: {
                                    top: "50%",
                                    left: "50%"
                                },
                                onWidthCheck: c
                            }, {
                                name: "topLeft",
                                id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                                target: b.aa,
                                container: f,
                                position: {
                                    top: "0px",
                                    left: "0px"
                                },
                                onWidthCheck: c
                            }, {
                                name: "bottomRight",
                                id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                                target: b.aa,
                                container: f,
                                position: {
                                    top: "100%",
                                    left: "100%"
                                },
                                onWidthCheck: c
                            }]
                        };
                    d.pixels.push({
                        name: "dentsuTopLeft",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "20%",
                            left: "20%"
                        },
                        onWidthCheck: c
                    });
                    d.pixels.push({
                        name: "dentsuBottomRight",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "80%",
                            left: "80%"
                        },
                        onWidthCheck: c
                    });
                    d.pixels.push({
                        name: "topLeft30",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "30%",
                            left: "30%"
                        },
                        onWidthCheck: c
                    });
                    d.pixels.push({
                        name: "topRight30",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "30%",
                            left: "70%"
                        },
                        onWidthCheck: c
                    });
                    d.pixels.push({
                        name: "bottomLeft30",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "70%",
                            left: "30%"
                        },
                        onWidthCheck: c
                    });
                    d.pixels.push({
                        name: "bottomRight30",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "70%",
                            left: "70%"
                        },
                        onWidthCheck: c
                    });
                    d.pixels.push({
                        name: "bottomLeft",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "100%",
                            left: "0%"
                        },
                        onWidthCheck: c
                    });
                    d.pixels.push({
                        name: "topRight",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "0%",
                            left: "100%"
                        },
                        onWidthCheck: c
                    });
                    a.d.by && d.pixels.push({
                        name: "dummy",
                        id: "moatPx" + b.zr + "_" + r.ceil(1E6 * r.random()),
                        target: b.aa,
                        container: f,
                        position: {
                            top: "0%",
                            left: "50%"
                        },
                        onWidthCheck: c
                    });
                    return d
                };
            a.s.o = function(b) {
                var c = 0,
                    f = b.getTargetViewState();
                a.b.forEach(b.pixels, function(a) {
                    a.measurable && a.viewstates && a.viewstates[f] && c++
                });
                return c === b.pixels.length
            };
            a.s.p = function(b, c) {
                var f = !1,
                    d = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = !0);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (d = !0)
                });
                return f && d ? !0 : !1
            };
            a.s.q = function(b, c) {
                var f = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[c]) return f = !0, !1
                });
                return f
            };
            a.s.r = function(b, c) {
                var f = !1,
                    d = !1,
                    e = !1,
                    h = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = !0);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = !0);
                    a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (d = !0);
                    a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (h = !0)
                });
                return f &&
                    h && e && d
            };
            a.s.s = function(b, c) {
                var f = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && a.viewstates && a.viewstates[c] && (f = a.viewstates[c].inview)) return !1
                });
                return f
            };
            a.s.t = function(b, c) {
                var f = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[c]) return f = a.viewstates[c].inview, !1
                });
                return f
            };
            a.s.u = function(b, c) {
                var f = !1,
                    d = !1;
                if (b.edgesInView.tlPixelInview && b.edgesInView.brPixelInview && !b.inview) return !1;
                a.b.forEach(b.pixels,
                    function(a) {
                        "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = a.viewstates[c].inview);
                        "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview)
                    });
                b.edgesInView.tlPixelInview = f;
                b.edgesInView.brPixelInview = d;
                return f && d ? !0 : !1
            };
            a.s.v = function(b, c) {
                var f = !1,
                    d = !1,
                    e = !1,
                    h = !1,
                    g = !1,
                    k = !1,
                    t = !1,
                    u = !1;
                a.b.forEach(b.pixels, function(a) {
                    a.config && "topLeft" == a.config.name && a.viewstates &&
                        a.viewstates[c] && (f = a.viewstates[c].inview);
                    a.config && "topLeft30" == a.config.name && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
                    a.config && "topRight" == a.config.name && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
                    a.config && "topRight30" == a.config.name && a.viewstates && a.viewstates[c] && (h = a.viewstates[c].inview);
                    a.config && "bottomLeft" == a.config.name && a.viewstates && a.viewstates[c] && (g = a.viewstates[c].inview);
                    a.config && "bottomLeft30" == a.config.name && a.viewstates && a.viewstates[c] &&
                        (k = a.viewstates[c].inview);
                    a.config && "bottomRight" == a.config.name && a.viewstates && a.viewstates[c] && (t = a.viewstates[c].inview);
                    a.config && "bottomRight30" == a.config.name && a.viewstates && a.viewstates[c] && (u = a.viewstates[c].inview)
                });
                return f && e && (h || d) || g && t && (u || k) || f && g && (d || k) || e && t && (h || u)
            };
            a.s.w = function(b, c) {
                if (b.inview) return !0;
                var f = !1,
                    d = !1,
                    e = !1,
                    h = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = a.viewstates[c].inview);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
                    a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
                    a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (h = a.viewstates[c].inview)
                });
                return f && d || e && h
            };
            a.s.x = function(b, c) {
                if (!b.inview) return !1;
                var f = !1,
                    d = !1,
                    e = !1,
                    h = !1;
                a.b.forEach(b.pixels,
                    function(a) {
                        "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (f = a.viewstates[c].inview);
                        "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
                        a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
                        a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] &&
                            (h = a.viewstates[c].inview)
                    });
                return f && h || e && d
            };
            a.s.y = function(b) {
                a.b.forEach(b.periscopeManagerList, function(a) {
                    a && a.killAllPixels()
                });
                b.periscopeManagerList = null
            };
            a.s.z = function(b) {
                a.m.a.azsx("adKilled", a.s.y, {
                    once: !0,
                    condition: function(a) {
                        return b.zr === a.zr
                    }
                });
                a.s.aa(b.periscopeConfig) || (b.periscopeConfig = a.s.m(b));
                b.periscopeManager = new a.s.ab(b.periscopeConfig, b.zr);
                a.s.a = b.periscopeManager.insertSuccessful;
                b.periscopeManagerList || (b.periscopeManagerList = []);
                b.periscopeManagerList.push(b.periscopeManager);
                return b.periscopeManager.insertSucceeded
            };
            a.s.a = !1;
            a.s.ac = function() {
                b = !0
            };
            a.s.ad = function() {
                return a.d.bi || !a.d.bh || "0" === a.b.ak()
            };
            a.s.n = function() {
                var b = a.s.ad(),
                    f = a.d.by || a.d.et,
                    d = h || c;
                return b && !f ? !1 : (!a.b.j() || f) && !a.d.e && (d || k || a.s.j)
            };
            a.s.ae = function(b) {
                var c = 11;
                a.d.et && (c = 14);
                a.d.by && (c = 12);
                b.viewabilityMethod.pscope = c;
                return b && b.periscopeManager ? (a.o.c(b, !1) && a.af.a() && b.periscopeManager.killDentsuPixels(), b.periscopeManager.getViewStats()) : {
                    isVisible: !1
                }
            };
            a.s.af = function() {};
            a.s.aa = function(b) {
                if ("object" !==
                    typeof b || "function" !== typeof b.insertableFunc || !a.b.d(b.pixels) || 0 == b.pixels.length) return !1;
                var c = !1;
                a.b.forEach(b.pixels, function(a) {
                    a.id && a.target && a.container && "object" === typeof a.position && "string" === typeof a.position.top && "string" === typeof a.position.left || (c = !0)
                });
                return !c
            };
            a.s.ag = function() {
                return t && h && 10 <= g
            };
            a.s.ah = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
            a.s.ai = function() {
                var b = {};
                return function(c) {
                    if ("string" !== typeof c) return !1;
                    if ("undefined" !== typeof b[c]) return b[c];
                    var f, d;
                    (f = c.match(a.s.ah)) &&
                    3 == f.length && (d = f[2], f = -1 != f[1].indexOf(".") ? parseInt(f[1], 10) : parseFloat(f[1], 10));
                    if ("number" !== typeof f) return !1;
                    b[c] = {
                        val: f,
                        type: d
                    };
                    return b[c]
                }
            }();
            a.s.aj = function(c, f) {
                this.config = c;
                this.measurable = this.inserted = !1;
                this.viewstates = {};
                this.manager = f;
                this.killed = !1;
                this.cbNames = [];
                this.skipWidthCheck = !1;
                this.loopIds = [];
                this.getPeriscopeAssetURI = function() {
                    return "https://z.moatads.com/swf/p6.v3.swf"
                };
                this.getDummyPixel = function(b) {
                    if (!b) return !1;
                    var c = !1;
                    a.b.forEach(b.manager && b.manager.pixels,
                        function(a) {
                            a.config && "dummy" === a.config.name && (c = a)
                        });
                    return c
                };
                this.resetDummyPixel = function(b) {
                    if (a.d.by && (b = b && b[0])) {
                        if (b.dummyPixel) b = b.dummyPixel;
                        else {
                            b = this.getDummyPixel(b);
                            if (!b) return;
                            b.dummyPixel = b
                        }
                        var c = b.manager && b.manager.adNum;
                        if ("number" === typeof c && !isNaN(c) && (c = x && x[c])) {
                            var f = b.config && b.config.id;
                            if ("string" === typeof f) {
                                var d = b.element && b.element.getAttribute && b.element.getAttribute("style");
                                if ("string" === typeof d) {
                                    var e = b.wrapperDiv;
                                    if (e) {
                                        var h = b.cbNames && b.cbNames[0];
                                        if (h) {
                                            var g =
                                                b.cbNames && b.cbNames[1];
                                            if (g) {
                                                var k = b.targetDoc;
                                                k && (a.ad.b(c, f, !0), l({
                                                    ad: c,
                                                    elem: e,
                                                    cbName: h,
                                                    rcbName: g,
                                                    options: {
                                                        width: b.width,
                                                        height: b.height,
                                                        style: d,
                                                        id: f,
                                                        frameborder: 0
                                                    },
                                                    noLog: !0,
                                                    isDummy: !0
                                                }), b.element = k.getElementById(f))
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                this.resetDummyPixelCB = a.p.l(a.b.cn([
                    [this]
                ], this.resetDummyPixel, this));
                this.insertIntoDOM = function() {
                    if (this.inserted) return !1;
                    var b, c, e, k;
                    e = -9999;
                    h ? (c = b = 2, a.d.et && 10 > g && (k = e = 0)) : (c = b = 1, k = 0);
                    a.d.by && (c = b = 8);
                    this.config.dimensions && (b = this.config.dimensions.width, c = this.config.dimensions.height);
                    var z = "position: absolute; width: " + b + "px; height: " + c + "px; z-index: " + e + "; border-style: none;";
                    a.s.j && (z = "position: absolute !important; width: " + b + "px !important; height: " + c + "px !important; z-index: " + e + "!important; border-style: none !important; display: block !important; -webkit-transform: translate3d(0, 0, 0) !important;");
                    a.d.by && (z += "pointer-events: none !important;");
                    e = this.config.id;
                    var t = this.getPeriscopeAssetURI(),
                        u = this.calcPosition();
                    if (!u) return !1;
                    var u = z + "left: " + u.left + "px; top: " +
                        u.top + "px;",
                        p = z + "left: 0px; top: 0px;",
                        y = this.config.target.ownerDocument;
                    this.targetDoc = y;
                    var v = a.b.aq(this.config.target);
                    if (!v) return !1;
                    z = "Moat#PSCB_" + x[this.manager.adNum].yg + "_" + r.floor(1E8 * r.random());
                    v[z] = this.onStateChangeCB;
                    this.cbNames.push(z);
                    if (a.d.by) {
                        var D = "Moat#PSRCB" + r.floor(1E8 * r.random());
                        v[D] = this.resetDummyPixelCB;
                        this.cbNames.push(D)
                    }
                    var T = this.config.callback,
                        m = this.config.callbackName;
                    T && m && (v[m] = T, this.cbNames.push(m));
                    v = "sco=" + encodeURIComponent(z) + "&tvs=" + this.manager.getTargetViewState();
                    y = y.createElement("div");
                    y.id = "moatPxDiv" + r.ceil(1E6 * r.random());
                    y.style.width = "0px";
                    y.style.height = "0px";
                    y.style.position = "absolute";
                    y.style.top = "0px";
                    y.style.left = "0px";
                    this.wrapperDiv = y;
                    a.b.bw(y, this.config.container);
                    t = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + b + '" height="' + c + '" style="' + u + '" id="' + e + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + t +
                        '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' + v + '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' + t + '" quality="low" flashvars="' + v + '" bgcolor="" wmode="transparent" width="' + b + '" height="' + c + '" id="' + e + 'e" name="' + e + '" style="' + p + '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>';
                    a.d.et && (this.config.customPixel = !0, this.config.customFn = a.ag.a, this.config.preserveDom = !0, this.config.argument = g, m = z);
                    if (a.d.by) {
                        if (!l({
                                ad: x[f.adNum],
                                elem: y,
                                cbName: z,
                                rcbName: D,
                                options: {
                                    width: b,
                                    height: c,
                                    style: u,
                                    id: e,
                                    frameborder: k
                                },
                                noLog: !1,
                                isDummy: this.config && "dummy" === this.config.name
                            })) return !1;
                        f.measurable = !0;
                        f.fullyMeasurable = !0;
                        f.dentsuMeasurable = !0;
                        f.anyMeasurable = !0
                    } else if (!a.d.bi) y.innerHTML = t;
                    else if (this.config.customPixel) {
                        b = d({
                            ad: x[f.adNum],
                            elem: y,
                            cbName: m,
                            name: this.config.name,
                            options: {
                                width: b,
                                height: c,
                                style: u,
                                id: e,
                                frameborder: k,
                                scrolling: "no"
                            },
                            noLog: !1,
                            customFn: this.config.customFn,
                            argument: this.config.argument,
                            preserveDom: this.config.preserveDom,
                            customPixelDiv: this.config.customPixelDiv
                        });
                        if (!b) return !1;
                        b.killFn && (this.config.killFn = b.killFn);
                        a.d.et && (f.measurable = !0, f.fullyMeasurable = !0, f.dentsuMeasurable = !0, f.anyMeasurable = !0)
                    }
                    return this.inserted = !0
                };
                this.startIntervals = function() {
                    var b = this.getPixelElement();
                    if (!b) return !1;
                    if (8 == g && (this.manager.getTargetViewState() === u.STAGE_WIDTH ||
                            this.manager.getTargetViewState() === u.ACTIVE_STAGE_WIDTH)) {
                        var c = "positionToggle#" + this.config.id;
                        this.loopIds.push(c);
                        a.p.j()[c] || (this.positionTogglingEnabled = !0, this.positionOffsets || (this.positionOffsets = {}), a.p.g(this.positionToggle, {
                            pxSwf: b,
                            pxRef: this
                        }, 100, c))
                    }
                    this.manager.getTargetViewState() === u.STAGE_WIDTH && (c = "stageWidthLoop#" + this.config.id, this.loopIds.push(c), a.p.j()[c] || a.p.g(this.stageWidthToggle, {
                        pxSwf: b,
                        pxRef: this,
                        originalWidth: b.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0
                    }, 150, c));
                    this.manager.getTargetViewState() === u.ACTIVE_STAGE_WIDTH && (c = "activeStageWidthLoop#" + this.config.id, this.loopIds.push(c), a.p.j()[c] || a.p.g(this.stageWidthToggle, {
                        pxSwf: b,
                        pxRef: this,
                        originalWidth: b.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0,
                        active: !0,
                        onWidthCheck: this.config.onWidthCheck
                    }, 200, c))
                };
                this.stageWidthToggle = function(a) {
                    if (!(a.pxSwf && a.pxSwf.parentNode && a.pxRef)) return !1;
                    if (a.onWidthCheck && (a.onWidthCheck(a.pxRef), a.pxRef.skipWidthCheck)) return !0;
                    var b;
                    if (a.parsedWidth || (b = a.pxSwf.style.width.match(a.widthRe)))
                        if (a.parsedWidth ||
                            (a.parsedWidth = parseInt(b[0], 10)), 1 == a.updates ? (a.updates = 0, a.pxSwf.style.width = a.originalWidth, b = a.parsedWidth) : (a.updates = 1, b = 1 < a.parsedWidth ? a.parsedWidth - 1 : a.parsedWidth + 1, a.pxSwf.style.width = b + "px"), a.active && a.pxSwf.currentPW) try {
                            a.pxSwf.currentPW(b)
                        } catch (c) {}
                };
                this.positionToggle = function(a) {
                    if (!a.pxRef || !a.pxRef.element) return !1;
                    0 > a.pxRef.positionOffsets.yOffset ? (a.pxRef.positionOffsets.yOffset = 0, a.pxRef.positionOffsets.xOffset = 0) : (a.pxRef.positionOffsets.yOffset = -2E3, a.pxRef.positionOffsets.xOffset = -2E3);
                    a.pxRef.updatePosition(!0)
                };
                this.onStateChange = function(b) {
                    if (!this.measurable) {
                        this.measurable = !0;
                        var c;
                        b && b[0] && b[0].rev && (c = b[0].rev.match(a.s.ak)) && 3 == c.length && (a.s.al = c[1], a.s.i = c[2]);
                        this.updateFocusState();
                        this.startIntervals()
                    }
                    this.inserted && this.killed ? (this.killed = !1, this.updateFocusState(), this.startIntervals()) : (a.b.forEach(b, function(a) {
                        this.viewstates[a.name] = a
                    }, this), this.manager.onStateChange(this, b))
                };
                this.onStateChangeCB = a.p.l(a.b.cn([], this.onStateChange, this));
                this.calcPosition =
                    function() {
                        var b = {},
                            c = this.config.position.left,
                            f = a.s.ai(this.config.position.top),
                            c = a.s.ai(c),
                            d, e;
                        this.config.positionTarget ? this.config.positionTargetWindow ? this.targetRect = new a.aa.k(this.config.positionTarget, this.config.positionTargetWindow, null, !0) : (this.targetRect = new a.aa.k(this.config.positionTarget, null, null, !0), this.config.positionTargetWindow = this.targetRect.win) : (this.targetRect = this.targetRect ? new a.aa.k(this.config.target, this.targetRect.win, null, !0) : new a.aa.k(this.config.target, null,
                            null, !0), 0 == this.targetRect.left && 0 == this.targetRect.right && 0 == this.targetRect.top && 0 == this.targetRect.bottom && "EMBED" == this.targetRect.el.nodeName && null == this.targetRect.el.offsetParent && this.config.target.parentNode && (this.targetRect = new a.aa.k(this.config.target.parentNode, null, null, !0), this.config.positionTarget = this.config.target.parentNode));
                        d = a.aa.q("left", this.targetRect.win);
                        e = a.aa.q("top", this.targetRect.win);
                        var h;
                        this.wrapperDiv && (h = this.wrapperDiv.offsetParent) && "BODY" !== h.nodeName ? this.offsetRect =
                            this.offsetRect ? new a.aa.k(h, this.offsetRect.win, null, !0) : new a.aa.k(h, null, null, !0) : this.offsetRect = {
                                left: -d,
                                top: -e
                            };
                        if (!f || !c) return !1;
                        if ("%" == f.type) b.relativeTop = f.val / 100 * this.targetRect.height, b.top = this.targetRect.top - this.offsetRect.top + f.val / 100 * this.targetRect.height;
                        else if ("px" == f.type) b.relativeTop = f.val, b.top = this.targetRect.top - this.offsetRect.top + f.val;
                        else return !1;
                        if ("%" == c.type) b.relativeLeft = c.val / 100 * this.targetRect.width, b.left = this.targetRect.left - this.offsetRect.left + c.val /
                            100 * this.targetRect.width;
                        else if ("px" == c.type) b.relativeLeft = c.val, b.left = this.targetRect.left - this.offsetRect.left + c.val;
                        else return !1;
                        b && b.top && b.left && this.targetRect && (b.top == this.targetRect.top + this.targetRect.height && --b.top, b.left == this.targetRect.left + this.targetRect.width && --b.left);
                        return b
                    };
                this.maxPositionUpdateInterval = 200;
                this.getStyle = function(a) {
                    var b;
                    try {
                        b = a && a.style
                    } catch (c) {}
                    return b
                };
                this.updatePosition = function(a) {
                    var b = (new n).getTime(),
                        c;
                    if (!this.element || !(c = this.getStyle(this.element)) ||
                        this.killed || !a && b - this.lastPositionUpdate < this.maxPositionUpdateInterval) return !1;
                    this.lastPositionUpdate = b;
                    a = this.calcPosition();
                    if (!a) return !1;
                    this.positionOffsets && (a.left += this.positionOffsets.xOffset || 0, a.top += this.positionOffsets.yOffset || 0);
                    c.left = this.width + a.relativeLeft > this.targetRect.width ? r.floor(a.left - this.width) + "px" : 0 == a.relativeLeft ? r.floor(a.left) + "px" : r.floor(a.left - .5 * this.width) + "px";
                    c.top = this.height + a.relativeTop > this.targetRect.height ? r.floor(a.top - this.height) + "px" : 0 == a.relativeTop ?
                        r.floor(a.top) + "px" : r.floor(a.top - .5 * this.height) + "px";
                    return !0
                };
                this.updateFocusState = function() {
                    var a = this.getPixelElement();
                    if (a && this.measurable) try {
                        a.updateFocusState(this.currentFocusState)
                    } catch (b) {}
                };
                this.kill = function(b) {
                    var c = this.getPixelElement(),
                        f = a.b.aq(c),
                        d = a.b.aq(this.config.target);
                    f && c && c.dataMoatTIDS && a.b.forEach(c.dataMoatTIDS, function(a) {
                        f.clearTimeout(a)
                    });
                    a.b.forEach(this.loopIds, function(b) {
                        a.p.i(b)
                    });
                    for (var c = 0, e = this.cbNames.length; c < e; c++) try {
                        d[this.cbNames[c]] = null, delete d[this.cbNames[c]]
                    } catch (h) {}
                    this.targetDoc =
                        null;
                    return this.wrapperDiv && this.wrapperDiv.parentNode ? (this.wrapperDiv.parentNode.removeChild(this.wrapperDiv), this.killed = !0, this.inserted = !1, this.element = this.wrapperDiv = null, b && (this.config && this.config.killFn && "function" === typeof this.config.killFn && (this.config.killFn(), this.config.killFn = null), this.config = null), !0) : !1
                };
                this.getPixelElement = function() {
                    var a, b, c = this.config && this.config.id;
                    if (this.targetDoc && c) {
                        a = this.targetDoc.getElementById(c);
                        if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a;
                        a =
                            this.targetDoc.getElementById(c + "e");
                        if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a
                    }
                    return !1
                };
                if ("embed" === c.container.nodeName || "object" === c.container.nodeName) {
                    var e;
                    a.b.forEach(a.b.as(c.container), function(a) {
                        if ("embed" !== a.nodeName && "object" !== a.nodeName) return e = a, !1
                    });
                    if (!e) return !1;
                    this.config.container = e
                }
                if (!b) {
                    var k = document.getElementById("moatPxCont" + this.manager.contId);
                    k || (k = document.createElement("div"), k.id = "moatPxCont" + this.manager.contId, k.offsetWidth = this.config.target.offsetWidth,
                        k.offsetHeight = this.config.target.offsetHeight, k.offsetTop = this.config.target.offsetTop || "0px", k.offsetLeft = this.config.target.offsetLeft || "0px", k.style.position = "absolute", k.style.overflow = "hidden", k.style.zIndex = -9999, a.b.bw(k, this.config.container));
                    this.config.container = k;
                    this.config.container && !this.manager.container && (this.manager.container = this.config.container)
                }
                if (!this.insertIntoDOM()) return !1;
                this.element = this.targetDoc.getElementById(this.config.id);
                if (!this.element) return !1;
                k = new a.aa.k(this.element,
                    null, null, !0);
                this.width = k.width;
                this.height = k.height;
                if (!this.updatePosition()) return !1;
                this.currentFocusState = a.focus.pageIsVisible();
                this.focusCheckingLoop = function(b) {
                    var c = a.focus.pageIsVisible();
                    if (!b.pxRef) return !1;
                    var d = b.pxRef;
                    d.currentFocusState != c && (d.currentFocusState = !d.currentFocusState, d.killed || d.updateFocusState(), a.d.by && (b = f && "number" === typeof f.adNum && x[f.adNum], d = d && d.config && d.config.id, b && d && a.ad && a.ad.call(b, d, "(function(){var innerFunction = window && window['" + (c ? "onFocus" :
                        "onBlur") + "'];if (typeof innerFunction === 'function') { innerFunction(); } }())")))
                };
                this.rebuildOnFocusLoss = function() {
                    h && (this.currentFocusState || this.killed || !this.inserted ? this.currentFocusState && this.killed && !this.inserted && (this.insertIntoDOM.call(this), (this.element = this.targetDoc.getElementById(this.config.id)) && this.updatePosition()) : this.kill())
                };
                this.rebuildTarget = function(a, b) {
                    this.config.target = a;
                    this.config.container = b;
                    this.targetDoc = this.config.target.ownerDocument;
                    this.updatePosition()
                };
                this.positionUpdateLoop = function(a) {
                    if (!a.pxRef) return !1;
                    a.pxRef.killed || a.pxRef.updatePosition()
                };
                var k = "focusCheckingLoop#" + this.config.id,
                    z = "positionUpdateLoop#" + this.config.id;
                this.loopIds.push(k);
                this.loopIds.push(z);
                a.p.g(this.focusCheckingLoop, {
                    pxRef: this
                }, 200, k);
                a.p.g(this.positionUpdateLoop, {
                    pxRef: this
                }, 500, z);
                this.inserted = !0;
                this.insertionTime = (new n).getTime()
            };
            a.s.ak = /([0-9a-z]+-[a-z]+)-(.*)/i;
            a.s.ab = function(f, d) {
                this.insertedAllSuccessfully = this.insertSuccessful = !1;
                this.pixels = [];
                this.adNum =
                    d;
                this.anyInview = this.fullyInview = this.inview = !1;
                this.edgesInView = {};
                this.edgesInView.tlPixelInview = !1;
                this.twentyPercentInView = this.dentsuInview = this.dentsuMeasurable = this.anyMeasurable = this.fullyMeasurable = this.measurable = this.reachedAnyInview = this.reachedFullyInview = this.reachedInview = this.edgesInView.brPixelInview = !1;
                this.getPixelByName = function(b) {
                    var c;
                    a.b.forEach(this.pixels, function(a) {
                        if (a.config.name && a.config.name == b) return c = a, !1
                    });
                    return c || !1
                };
                this.getTargetViewState = function() {
                    var b =
                        u.FRAME_RATE;
                    !h && !c || a.d.et || (b = u.ACTIVE_STAGE_WIDTH);
                    a.s.j && !a.d.by && (b = u.ACTIVE_STAGE_WIDTH);
                    return b
                };
                this.onStateChange = function(b, c) {
                    var f = this.getTargetViewState(),
                        d = a.focus.pageIsVisible(),
                        h = "undefined" != typeof x && x[this.adNum];
                    b.targetRect && (this.isBigAd = a.ac.a(b.targetRect.calcArea()), h && h.viewstats && (h.viewstats.isBigAd = this.isBigAd));
                    this.anyMeasurable || (this.anyMeasurable = !0);
                    this.fullyMeasurable || (this.fullyMeasurable = a.s.p(this, f));
                    this.measurable || (this.measurable = a.s.q(this, f), a.s.am =
                        (new n).getTime());
                    this.dentsuMeasurable || (this.dentsuMeasurable = a.s.r(this, f));
                    if (1 == c.length) {
                        if (c[0].name != f) return !1
                    } else {
                        var g = !0;
                        a.b.forEach(c, function(a) {
                            if (a.name == f) return g = !1
                        });
                        if (g || !d) return !1
                    }
                    this.anyMeasurable && (this.anyInview = a.s.s(this, f));
                    this.measurable && ((this.anyInview = a.s.s(this, f)) && !this.reachedAnyInview && (this.reachedAnyInview = !0), this.inview = a.s.t(this, f), this.thirtyPercentInView = a.s.v(this, f), this.inview && !this.reachedInview && (this.reachedInview = !0), !e && a.s.j && h && (e = !0,
                        a.u.b(h)));
                    this.fullyMeasurable && (this.fullyInview = a.s.u(this, f)) && !this.reachedFullyInview && (this.reachedFullyInview = !0);
                    this.dentsuMeasurable && (this.dentsuInview = a.s.x(this, f), this.twentyPercentInView = a.s.w(this, f));
                    a.m.a.zaxs("periscope:onStateChange", this.adNum)
                };
                this.getViewStats = function() {
                    var b = 0;
                    if (this.fullyInview) b = 1;
                    else if (this.dentsuInview) b = .8;
                    else if (this.inview) b = .5;
                    else if (this.thirtyPercentInView) b = .3;
                    else if (this.twentyPercentInView) b = .2;
                    else if (this.anyInview || this.reachedAnyInview &&
                        !this.sentReachedAnyInview) this.sentReachedAnyInview = !0, b = .01;
                    var c = "pscope" === a.o.b(this.adNum);
                    this.edgesInView && c && a.m.a.zaxs("adEdgesViewStatus", this.adNum, {
                        topLeft: this.edgesInView.tlPixelInview,
                        topRight: this.edgesInView.tlPixelInview,
                        bottomLeft: this.edgesInView.brPixelInview,
                        bottomRight: this.edgesInView.brPixelInview
                    });
                    b = {
                        isVisible: this.inview,
                        isFullyVisible: this.fullyInview,
                        isDentsuVisible: this.dentsuInview,
                        percv: b
                    };
                    b.isVisible = this.inview || this.isBigAd && this.thirtyPercentInView;
                    return b
                };
                this.getPercentViewable = function(b, c) {
                    var f = this.getTargetViewState(),
                        d = [],
                        e = b * c,
                        h, g, k;
                    a.b.forEach(this.pixels, function(a) {
                        a.measurable && a.viewstates && a.viewstates[f] && a.viewstates[f].inview && (g = parseInt(a.config.position.top), -1 < a.config.position.top.indexOf("%") && (g = g / 100 * c), d.push(g))
                    });
                    0 === d.length ? h = 0 : (h = r.min.apply(null, d), k = r.max.apply(null, d), h = b * (k - h));
                    return r.round(h / e * 100)
                };
                this.killDentsuPixels = function() {
                    a.b.forEach(this.pixels, function(b) {
                        !b.config || "dentsuTopLeft" !== b.config.name &&
                            "dentsuBottomRight" !== b.config.name || ((a.d.by || a.d.et) && a.ad.b(x[b.manager.adNum], b.config.id), b.kill())
                    })
                };
                this.rebuildPixelTargets = function(b, c) {
                    if (!b || !c) return !1;
                    a.b.forEach(this.pixels, function(a) {
                        a.rebuildTarget(b, c)
                    })
                };
                this.killAllPixels = function() {
                    a.b.forEach(this.pixels, function(a) {
                        a.kill(!0)
                    });
                    this.pixels = []
                };
                this.updateContainer = function(b) {
                    function c(b, e) {
                        var h = d[e],
                            g = d.style && d.style[b];
                        if (!a.b.cj(h))
                            if (a.b.cj(g)) h = g;
                            else return !1;
                        if (f[e] === h || !f.style) return !1;
                        f.style[b] = h + "px"
                    }
                    b.container ||
                        (b.container = document.getElementById("moatPxCont" + b.contId));
                    b.adElement || (b.adElement = x[b.adNum] && x[b.adNum].aa);
                    var f = b.container,
                        d = b.adElement;
                    if (!f || !d) return !1;
                    c("left", "offsetLeft");
                    c("top", "offsetTop");
                    c("width", "offsetWidth");
                    c("height", "offsetHeight")
                };
                if (f.insertableFunc()) {
                    var g = 0;
                    this.contId = r.ceil(1E6 * r.random());
                    a.b.forEach(f.pixels, function(b, c) {
                        this.pixels.push(new a.s.aj(b, this));
                        this.pixels[c].inserted && (g++, this.insertSuccessful = !0)
                    }, this);
                    this.insertedAllSuccessfully = g === this.pixels.length;
                    b || a.p.g(this.updateContainer, this, 200, "pixelContainerResizeLoop#" + this.contId)
                }
            }
        })(m);
        (function(a) {
            function l(a, b, c) {
                a.IR5.MIN[c] = r.min(b, a.IR5.MIN[c]) || b || 1;
                a.IR5.MAX[c] = r.max(b, a.IR5.MAX[c]) || b
            }

            function d(b) {
                if (y) return !0;
                var c = q.swde.azsx("focusStateChange", function(c) {
                    var f = {
                        type: "blur"
                    };
                    c || (a.ah.g(f, b), a.ah.h(f, b))
                });
                a.m.a.azsx("adKilled", function() {
                    q.swde.sxaz("focusStateChange", {
                        id: c
                    })
                }, {
                    once: !0,
                    condition: function(a) {
                        return b.zr == a.zr
                    }
                });
                y = !0
            }

            function g(a, b) {
                b.be = r.max("undefined" !== typeof b.be ?
                    b.be : 0, a - b.bf);
                "undefined" === typeof b.by && 500 <= b.be && (b.by = b.bk)
            }

            function h(b) {
                b.az === a.ah.a.d.a ? b.az = a.ah.a.d.b : b.az === a.ah.a.d.b && (b.az = a.ah.a.d.a)
            }

            function k(b) {
                b.ba === a.ah.a.d.a ? b.ba = a.ah.a.d.b : b.ba === a.ah.a.d.b && (b.ba = a.ah.a.d.a)
            }

            function c(b) {
                b.ax === a.ah.a.b.a ? b.ax = a.ah.a.b.b : b.ax === a.ah.a.b.b && (b.ax = a.ah.a.b.a)
            }

            function e(b) {
                b.ay === a.ah.a.c.a ? b.ay = a.ah.a.c.b : b.ay === a.ah.a.c.b && (b.ay = a.ah.a.c.a)
            }

            function b(a, b) {
                "undefined" === typeof b.bk && (b.bk = 0);
                b.bk += a - b.bo;
                b.bo = a
            }

            function f(a, b) {
                "undefined" ===
                typeof b.bl && (b.bl = 0);
                b.bl += a - b.bp;
                b.bp = a
            }

            function t(a, b) {
                "undefined" === typeof b.bg && (b.bg = 0);
                "undefined" === typeof b.bc && (b.bc = 0);
                b.bu = a - b.bs;
                b.bu > b.bc && (b.bc = b.bu);
                b.bg += a - b.bq;
                500 <= b.bc && "undefined" === typeof b.bw && (b.bk += a - b.bo, b.bw = b.bk);
                b.bq = a
            }

            function u(a, b) {
                "undefined" === typeof b.bh && (b.bh = 0);
                "undefined" === typeof b.bd && (b.bd = 0);
                b.bv = a - b.bt;
                b.bv > b.bd && (b.bd = b.bv);
                b.bh += a - b.br;
                500 <= b.bd && "undefined" === typeof b.bx && (b.bl += a - b.bp, b.bx = b.bl);
                b.br = a
            }
            a.ah = {};
            var y = !1;
            a.ah.a = {};
            a.ah.a.a = {};
            a.ah.a.a.a =
                0;
            a.ah.a.a.b = 1;
            a.ah.a.b = {};
            a.ah.a.b.a = 0;
            a.ah.a.b.b = 1;
            a.ah.a.c = {};
            a.ah.a.c.a = 0;
            a.ah.a.c.b = 1;
            a.ah.a.d = {};
            a.ah.a.d.a = 0;
            a.ah.a.d.b = 1;
            a.ah.a.e = {};
            a.ah.a.e.a = 0;
            a.ah.a.e.b = 1;
            a.ah.a.f = {};
            a.ah.a.f.a = 0;
            a.ah.a.f.b = 1;
            a.ah.a.f.c = 2;
            a.ah.b = function(a) {
                l(a, a.aj, "x");
                l(a, a.ak, "y");
                a.IR5.AREA = (a.IR5.MAX.x - a.IR5.MIN.x) * (a.IR5.MAX.y - a.IR5.MIN.y)
            };
            a.ah.c = function(b) {
                function c() {
                    500 <= (new n).getTime() - Aa && (a.ah.d({
                        type: "park"
                    }, b), clearInterval(d), b.au = a.ah.a.a.a)
                }
                var f = b.au;
                if (f === a.ah.a.a.a) {
                    Aa = (new n).getTime();
                    var d =
                        a.p.e(c, 50);
                    b.au = a.ah.a.a.b
                } else f === a.ah.a.a.b && (Aa = (new n).getTime())
            };
            a.ah.e = function(b) {
                function c() {
                    3E3 <= (new n).getTime() - Ba && (a.ah.f({
                        type: "park"
                    }, b), clearInterval(d), b.av = a.ah.a.a.a)
                }
                var f = b.av;
                if (f === a.ah.a.a.a) {
                    Ba = (new n).getTime();
                    var d = a.p.e(c, 50);
                    b.av = a.ah.a.a.b
                } else f === a.ah.a.a.b && (Ba = (new n).getTime())
            };
            a.ah.g = function(c, f) {
                var e = c.type;
                d(f);
                if (f.az === a.ah.a.d.a) {
                    if ("mouseover" === e || "mousemove" === e) f.bo = (new n).getTime(), h(f)
                } else if (f.az === a.ah.a.d.b) {
                    "mousemove" === e && b((new n).getTime(),
                        f);
                    if ("mouseout" === e || "blur" === e) b((new n).getTime(), f), h(f);
                    "scooper" === e && b((new n).getTime(), f)
                }
            };
            a.ah.h = function(b, c) {
                var e = b.type;
                d(c);
                if (c.ba === a.ah.a.d.a) {
                    if ("mouseover" === e || "mousemove" === e) c.bp = (new n).getTime(), k(c)
                } else if (c.ba === a.ah.a.d.b) {
                    "mousemove" === e && f((new n).getTime(), c);
                    if ("mouseout" === e || "blur" === e) f((new n).getTime(), c), k(c);
                    "scooper" === e && f((new n).getTime(), c)
                }
            };
            a.ah.d = function(b, f) {
                if (2 != f.an) {
                    var d = b.type;
                    if (f.ax === a.ah.a.b.a) {
                        if ("mouseover" === d || "mousemove" === d) f.bq = (new n).getTime(),
                            f.bs = (new n).getTime(), c(f)
                    } else f.ax === a.ah.a.b.b && ("mousemove" !== d && "mouseout" !== d || t((new n).getTime(), f), "park" === d && t((new n).getTime() - 500, f), "mouseout" !== d && "park" !== d || c(f))
                }
            };
            a.ah.f = function(b, c) {
                if (2 != c.an) {
                    var f = b.type;
                    if (c.ay === a.ah.a.c.a) {
                        if ("mouseover" === f || "mousemove" === f) c.br = (new n).getTime(), c.bt = (new n).getTime(), e(c)
                    } else c.ay === a.ah.a.c.b && ("mousemove" !== f && "mouseout" !== f || u((new n).getTime(), c), "park" === f && u((new n).getTime() - 3E3, c), "mouseout" !== f && "park" !== f || e(c))
                }
            };
            a.ah.i =
                function(b, c) {
                    var f = b.type;
                    if (c.bb == a.ah.a.e.a) {
                        if ("mouseover" == f || "mousemove" == f) c.bf = (new n).getTime(), c.bb = a.ah.a.e.b
                    } else c.bb == a.ah.a.e.b && ("mouseout" == f ? (g((new n).getTime(), c), c.bb = a.ah.a.e.a) : "mousemove" != f && "scooper" != f || g((new n).getTime(), c))
                }
        })(m);
        (function(a) {
            function l(d) {
                var g = !1;
                if (a.d.dk()) return d.viewabilityMethod.sframe = 3, a.aj.a(d);
                if (a.d.cd) return d.viewabilityMethod.sframe = 4, a.ak.a(d);
                if (a.d.ch()) return d.viewabilityMethod.sframe = 5, a.al.a(d);
                if (a.d.bq()) return d.viewabilityMethod.sframe =
                    6, a.am.a(d);
                a.d.cn() && (d.viewabilityMethod.sframe = 7, g = a.an.a(d), 0 < g && (a.d.co = !0));
                return g
            }
            a.ai = {};
            a.ai.a = function(d) {
                var g = a.b.cd(d);
                g && a.ac.a(g) ? (d.viewstats || (d.viewstats = {}), d.viewstats.isBigAd = !0, g = .3) : g = .5;
                g = (d = l(d)) && !isNaN(d) && d >= g;
                g = {
                    isVisible: g,
                    isFullyVisible: g && .98 <= d,
                    percv: d
                };
                .8 <= d && (g.isDentsuVisible = !0);
                return g
            }
        })(m);
        (function(a) {
            a.r = {};
            try {
                var l = -1 < navigator.platform.indexOf("Mac") ? 102 : 117
            } catch (k) {
                l = 117
            }
            var d = "undefined" !== typeof window.devicePixelRatio,
                g = a.d.e && d && "undefined" !==
                typeof window.innerHeight && "undefined" !== typeof window.outerHeight && r.round(window.devicePixelRatio * (a.d.g.outerHeight - a.d.g.innerHeight)),
                h = function() {
                    var d = !1;
                    if (57 <= a.d.er()) return !1;
                    try {
                        d = "undefined" !== typeof window.mozInnerScreenX && "undefined" !== typeof window.screenX
                    } catch (c) {}
                    return d
                }();
            a.r.b = function(h, c) {
                h.viewabilityMethod.pscope = 13;
                var e, b, f, g = {
                    isVisible: !1,
                    isFullyVisible: !1,
                    percv: 0
                };
                try {
                    f = h.aa.getBoundingClientRect();
                    var u = c || h.WINDOW || a.b.aq(h.aa),
                        y = a.d.t(u),
                        p = a.aa.n(f, y),
                        w = u.mozInnerScreenX,
                        D = u.mozInnerScreenY,
                        v = {
                            left: p.left + w,
                            right: p.right + w,
                            top: p.top + D,
                            bottom: p.bottom + D
                        },
                        z = window.screenX,
                        G = window.screenY,
                        m = a.aa.n(v, {
                            left: z,
                            right: z + window.outerWidth,
                            top: G + l / (d ? window.devicePixelRatio : 1),
                            bottom: G + window.outerHeight
                        }),
                        C = f.width * f.height,
                        r = (m.right - m.left) * (m.bottom - m.top) / C;
                    "pscope" === a.o.b(h.zr) && a.m.a.zaxs("rectsAvailable", h.zr, v, m);
                    e = {
                        area: C,
                        percv: r
                    };
                    b = a.aa.g(e, h)
                } catch (q) {}
                f = a.aa.c;
                "undefined" !== typeof e && "undefined" !== typeof b && (g.isVisible = e.percv >= b, g.isFullyVisible = e.percv >= f,
                    g.percv = e.percv, .8 <= e.percv && (g.isDentsuVisible = !0));
                return g
            };
            a.r.a = function() {
                return h
            };
            a.r.c = function() {
                var a = {};
                a.dl = Number(h);
                "number" !== typeof g || isNaN(g) || (a.dn = g);
                return a
            }
        })(m);
        (function(a) {
            function l(a) {
                var d = 0,
                    b;
                return function() {
                    var f = (new n).getTime();
                    150 < f - d && (b = a.apply(this, arguments), d = f);
                    return b
                }
            }

            function d(c) {
                function d(a) {
                    "undefined" !== typeof c.overrideViewMethod && (a.viewabilityMethod[p] = c.overrideViewMethod);
                    return v(a)
                }
                var b = c.isVisibleFn,
                    f = c.isMeasurableFn,
                    h = c.pauseCheckingFn,
                    k = c.careFoc,
                    l = c.qsKeys,
                    p = c.counterLabel,
                    w = p;
                a.d.ao();
                var D = [],
                    v = b,
                    z = 0,
                    G = 0,
                    m = 0,
                    C = 0,
                    J = 0,
                    q = 0,
                    F = 0,
                    K = 0;
                (new n).getTime();
                var R = !1,
                    L = !1,
                    O = !1,
                    W = !1,
                    T, U, oa, ja, ka = 0,
                    N = 0,
                    la = !1,
                    pa = !1,
                    x = 0,
                    S = function() {
                        var b = .98;
                        a.d.j() && "strict" === p && (b = .96);
                        return b
                    }(),
                    qa = 0,
                    Z = 0,
                    A = !1,
                    H = !1,
                    E = !1,
                    Q = a.d.e,
                    I, M;
                if (0 === l) var aa = "as",
                    fa = "ag",
                    ca = "an",
                    ga = "ck",
                    P = "kw",
                    da = "ah",
                    ha = "aj",
                    V = "pg",
                    Y = "pf",
                    ba = "gi",
                    ma = "gf",
                    na = "ix",
                    ia = "gg",
                    X = "ez",
                    la = !0;
                else 1 === l ? (aa = "cc", fa = "bw", ca = "bx", ga = "ci", P = "jz", da = "bu", ha = "dj") : 2 === l ? (aa = "cg", fa = "ce", ca = "cf",
                    ga = "cj", P = "ts", da = "ah", ha = "dk", ba = "gj", ma = "gb", na = "ig", ia = "ge", X = "ez") : 3 === l ? (aa = "cg", fa = "ce", ca = "cf", ga = "cj", P = "ts", da = "ah", ha = "dk", ba = "gi", ma = "gf", na = "ix", ia = "gg", X = "ez") : 5 === l ? (aa = "aa", fa = "ad", ca = "cn", ga = "co", P = "cp", da = "ah", ha = "cq", ba = "gn", ma = "gk", na = "ik", ia = "gl", X = "ez") : 6 === ("number" === typeof l ? l : l.type) && (aa = l.otsKey, fa = l.ivtKey, ca = l.lastivtKey, ga = l.ivtAtOtsKey, P = l.timeToViewSendKey, da = l.timeToViewAskKey, ha = l.visOnLoadKey, ba = l.fullyIvtOtsKey, ma = l.fullyIvtKey, na = l.maxfullyIvtKey, ia = l.lastFullyIvtKey,
                    X = l.wasPartiallyInviewKey);
                this.getLabel = function() {
                    return w
                };
                this.addListener = function(b) {
                    var c = !1;
                    a.b.forEach(D, function(a) {
                        if (a === b) return c = !0, !1
                    });
                    c || D.push(b)
                };
                this.removeListener = function(a) {
                    for (var b, c = D.length; b < c; b++) {
                        var f = !1,
                            d = !1,
                            e;
                        for (e in D[b])
                            if (d || (d = !0), D[b][e] !== a[e]) {
                                f = !0;
                                break
                            }
                        d && !f && D.splice(b, 1)
                    }
                };
                this.hadOTS = function() {
                    return O
                };
                this.hadFullOTS = function() {
                    return W
                };
                this.hadFIT = function() {
                    return 0 < G
                };
                this.hadVideo2SecOTS = function() {
                    return "undefined" != typeof _hadVideo2SecOts &&
                        _hadVideo2SecOts
                };
                this.hadDentsuVideoOTS = function() {
                    return !1
                };
                this.hadDentsuDisplayOTS = function() {
                    return A
                };
                this.getInViewTime = function() {
                    return z
                };
                this.getFullyInViewThreshold = function() {
                    return S
                };
                this.getLastInviewPercent = function() {
                    return x
                };
                this.getLastInviewPercentWithThresholdCap = function() {
                    return x >= S ? 1 : x
                };
                this.getCareAboutFocus = function() {
                    return k
                };
                this.getPauseCheckingFn = function() {
                    return h
                };
                this.visible = function() {
                    return R
                };
                this.fullyVisible = function() {
                    return L
                };
                this.wasPartiallyInview =
                    function() {
                        return pa
                    };
                this.getFullInviewTimeTotal = function() {
                    return G
                };
                this.getMaximumContinuousInViewTime = function() {
                    return r.max(J, q)
                };
                this.getMaximumContinuousFullyInViewTime = function() {
                    return r.max(K, F)
                };
                this.getDentsuInViewTime = function() {
                    return qa
                };
                this.getDentsuAudibleAndVisibleTime = function() {
                    return 0
                };
                this.isAdMeasurable = function(a) {
                    var b = "function" === typeof f && f(a);
                    a && a.isMeasurabilityDisabled() && (b = !1);
                    return b
                };
                this.adStartedOnScreen = function() {
                    return ja
                };
                this.update = function(b, c, p) {
                    if (M ===
                        p) return !1;
                    M = p;
                    p = "function" === typeof f && f(b);
                    b && b.isMeasurabilityDisabled() && (p = !1);
                    if (!p) return !1;
                    var v = z || 0,
                        C = G || 0;
                    p = !1;
                    var m = d(b);
                    m.rect && (b.elementRect = m.rect, b.currentWidth = b.elementRect.right - b.elementRect.left, b.currentHeight = b.elementRect.bottom - b.elementRect.top);
                    b.viewabilityPercent[w] = a.b.cj(m.percv) ? r.round(100 * m.percv) : "-";
                    "number" === typeof m.area && (b.ADAREA = m.area);
                    var B = m.isVisible,
                        n = m.isFullyVisible,
                        N = m.isDentsuVisible,
                        S = m.percv && 0 < m.percv;
                    x = m.percv;
                    !v && m.percv && a.m.a.zaxs("adEntersView",
                        b);
                    var P = h(b),
                        P = (!k || a.u.f(b)) && !P;
                    a.m.a.zaxs("adCheckingState", b, w, P);
                    B = B && P;
                    n = n && P;
                    S = S && P;
                    n && a.m.a.zaxs("adFullyVisible", b, w);
                    E = N && P;
                    !pa && S && (pa = !0);
                    if (B && R) z += c, J += c;
                    else if (B || R) N = r.round(c / 2), z += N, J += N;
                    if (n && L) G += c, F += c;
                    else if (n || L) N = r.round(c / 2), G += N, F += N;
                    if (E && H) qa += c, Z += c;
                    else if (E || H) N = r.round(c / 2), qa += N, Z += N;
                    !O && 1E3 <= J && (p = O = !0, this.timeToView = T = b.counters.query()[da], U = z);
                    !W && 1E3 <= F && (W = !0, a.m.a.zaxs("fullOtsReached", b, w));
                    "undefined" === typeof oa && (N = b.counters.query().bu, 1E3 >= N ? B && (oa = !0) : oa = !1);
                    "undefined" === typeof ja && (N = b.counters.query().bu, 1E3 >= N ? S && (ja = !0) : ja = !1);
                    (b.el = Q) && "undefined" === typeof I && 2 !== l && 3 !== l && m.elGeo && (N = g().y + m.elGeo.foldTop, P = m.elGeo.threshold * m.elGeo.elHeight, N = N > a.o.d() - P, 0 < m.elGeo.totalArea && (I = N, b.dn = I));
                    la && S && (ka = r.min(r.max(x, ka), 1));
                    q < J && (q = J);
                    K < F && (K = F);
                    B || (J = 0);
                    n || (F = 0);
                    R = B;
                    L = n;
                    1E3 <= Z && (A = !0);
                    E || (Z = 0);
                    H = E;
                    a.b.forEach(D, function(a) {
                        var b = m && m.percv,
                            b = "number" === typeof b && 100 * b;
                        if (a.onInViewTimeCount) a.onInViewTimeCount(c, z - v, b, w);
                        if (a.onFullyInViewTimeCount) {
                            var f =
                                r.max(G - C, 0);
                            a.onFullyInViewTimeCount(c, f, b, w)
                        }
                    });
                    if (!a.d.ff) return p;
                    (B = b.aa && m.rect || b.aa.getBoundingClientRect()) && m.isVisible && !b.proxyElementForMouseListeners && (B = (b.aa && b.aa.ownerDocument || document).elementFromPoint((B.left + B.right) / 2, (B.top + B.bottom) / 2)) && ((n = (n = "IFRAME" === B.nodeName && a.k.e(B)) && n.body) && a.b.be(n) ? a.l.c(b, n) : a.l.c(b, B), b.proxyElementForMouseListeners = !0);
                    return p
                };
                this.getQS = function(b, c, f) {
                    m > z && (m = z);
                    C > G && (C = G);
                    b[aa] = Number(O);
                    b[fa] = z;
                    b[ca] = m;
                    if (0 === l || 2 === l || 3 === l || 5 === l ||
                        ("number" === typeof l ? l : l.type)) W && ba && (b[ba] = 1), c = (c = 0 === l && f && "sframe" === f) || a.d.cw() && !a.q.c() && 0 === l, ma && !c && (b[ma] = G, b[ia] = C, c = this.getMaximumContinuousFullyInViewTime(), b[na] = c, w === f && (b.ic = c)), pa && X && (b[X] = 1);
                    "undefined" !== typeof U && (b[ga] = U);
                    "undefined" !== typeof T && (b[P] = T);
                    "undefined" !== typeof oa && (b[ha] = Number(oa));
                    !0 === la && (f = r.round(100 * ka), c = r.round(100 * N), b[V] = f, b[Y] = c, N = ka);
                    "undefined" !== typeof I && (b.ib = Number(I));
                    m = z;
                    C = G
                }
            }

            function g() {
                var c = a.d.g,
                    d = c.document;
                return {
                    y: void 0 !== c.pageYOffset ?
                        c.pageYOffset : (d.documentElement || d.body.parentNode || d.body).scrollTop
                }
            }
            a.o = {};
            var h = {},
                k = {};
            a.o.d = function() {
                return sa ? a.d.t(a.d.g).height : 750
            };
            a.o.e = function() {
                if (!a.b.l() && !a.b.m()) return !1;
                var c = a.d.bn();
                return c = (c = c || a.t.d()) || a.d.cn()
            };
            a.o.f = function() {
                if (!a.o.e()) return !1;
                var c = a.d.bu(),
                    c = c | a.t.e();
                return c |= a.d.co
            };
            a.o.g = function(c) {
                var e = c.zr;
                a.m.a.azsx("adKilled", a.o.h, {
                    once: !0,
                    condition: function(a) {
                        return a.zr == c.zr
                    }
                });
                h[e] = h[e] || {};
                c.viewstats = {
                    isBigAd: !1
                };
                if (c && c.isMeasurabilityDisabled()) return !1;
                if (a.d.dj() || a.d.ao().isInApp && a.d.e) {
                    var b = l(a.aa.f),
                        f;
                    f = a.d.j() ? a.d.cw() ? new d({
                        isVisibleFn: a.q.g,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.u.c,
                        overrideViewMethod: 15,
                        careFoc: !1,
                        qsKeys: 0,
                        counterLabel: "strict"
                    }) : a.d.dx() ? new d({
                        isVisibleFn: a.t.f,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.u.c,
                        careFoc: !1,
                        qsKeys: 0,
                        counterLabel: "strict"
                    }) : new d({
                        isVisibleFn: a.t.f,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.u.c,
                        careFoc: !0,
                        qsKeys: 0,
                        counterLabel: "strict"
                    }) : new d({
                        isVisibleFn: b,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.u.c,
                        careFoc: !0,
                        qsKeys: 0,
                        counterLabel: "strict"
                    });
                    h[e].strict = f;
                    b = new d({
                        isVisibleFn: b,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.u.c,
                        careFoc: !1,
                        qsKeys: 1,
                        counterLabel: "lax"
                    });
                    h[e].lax = b
                } else !0 !== c.isSkin && a.r && a.r.a() && (b = new d({
                    isVisibleFn: a.r.b,
                    isMeasurableFn: a.d["do"],
                    pauseCheckingFn: a.u.c,
                    careFoc: !0,
                    qsKeys: 3,
                    counterLabel: "pscope"
                }), h[e].pscope = b);
                a.s && a.s.n() && !h[e].pscope && (b = new d({
                        isVisibleFn: a.s.ae,
                        isMeasurableFn: a.d.dp,
                        pauseCheckingFn: a.u.c,
                        careFoc: !0,
                        qsKeys: 2,
                        counterLabel: "pscope"
                    }), h[e].pscope =
                    b);
                var g, u, y, p, b = a.ai.a;
                f = !0;
                a.d.de() && (g = !0, b = a.q.g, u = a.q.d, p = 15, f = !1);
                var w = a.d.fa();
                !g && w && (g = !0, y = w.name, u = w.measurableFn);
                g && (g = new d({
                    isVisibleFn: b,
                    isMeasurableFn: u,
                    pauseCheckingFn: a.u.c,
                    viewabilityApiName: y,
                    overrideViewMethod: p,
                    careFoc: f,
                    qsKeys: 5,
                    counterLabel: "sframe"
                }), h[e].sframe = g);
                e = a.m.a.azsx("view:tick", a.b.cn([c], a.o.i), {
                    priority: 5
                });
                k[c.zr] = e;
                a.m.a.zaxs("viewCounterStarted", c);
                (a.b.l() || a.b.m()) && (e = a.o.a(c.zr)) && e.addListener({
                    _wasAnyPixelInView: !1,
                    onInViewTimeCount: function(b, f, d) {
                        return this._wasAnyPixelInView ?
                            !1 : a.o.f() ? (a.u.b(c), this._wasAnyPixelInView = !0, !1) : !0
                    }
                })
            };
            a.o.j = function(c, d, b) {
                return (c || opt_counters) && d && b ? (c = a.o.k(c.zr, d)) && "function" == typeof c[b] && c[b]() : !1
            };
            a.o.l = function(c, e) {
                if (c && e) {
                    var b = a.d.fa(),
                        f;
                    !e.sframe && b && (f = b.measurableFn, b = b.name, h[c.zr].sframe = new d({
                        isVisibleFn: a.ai.a,
                        isMeasurableFn: f,
                        pauseCheckingFn: a.u.c,
                        viewabilityApiName: b,
                        careFoc: !0,
                        qsKeys: 5,
                        counterLabel: "sframe"
                    }), a.m.a.zaxs("viewCounterStarted", c))
                }
            };
            a.o.i = function(c, d, b) {
                if (a.b.cb(c)) {
                    var f = h[c.zr],
                        g;
                    a.o.l(c, f);
                    for (var k in f) f.hasOwnProperty(k) &&
                        f[k].update(c, d, b) && (g = !0);
                    c.fireFullViewEvent = !1;
                    a.b.forEach(c.secondaryCounters, function(a) {
                        a.update(c, d, b)
                    });
                    c.fireFullViewEvent && (a.u.d(c), c.fireFullViewEvent = !1);
                    g && a.u.e(c);
                    a.ac.b(c);
                    c.ao && 1 == c.ao.skin && "width" == a.ab.a && a.ab.c();
                    a.e.d(c) && a.u.b(c)
                }
            };
            a.o.m = function(c, d) {
                return a.o.n(c) >= d
            };
            a.o.n = function(c) {
                var d = 0;
                (c = c && "undefined" !== typeof c.zr && a.o && a.o.a(c.zr)) && (d = c.getInViewTime());
                return d
            };
            a.o.o = function() {
                return "hadOTS"
            };
            a.o.p = function(c, d) {
                var b = a.o.o();
                return c && c && "undefined" != typeof c.zr ?
                    d ? a.o.j(c, d, b) : a.o.j(c, a.o.b(c.zr), b) : null
            };
            a.o.q = function(c, d) {
                var b = a.o.r(c.zr);
                return a.s && a.s.a && b && b.pscope && b.pscope[d ? "hadVideo2SecOTS" : "hadOTS"]()
            };
            a.o.c = function(c, d) {
                var b = a.o.r(c.zr);
                return a.s && a.s.a && b && b.pscope && b.pscope[d ? "hadDentsuVideoOTS" : "hadDentsuDisplayOTS"]()
            };
            a.o.s = function(c, d) {
                var b = a.o && a.o.r(c.zr);
                return a.s && a.s.a && b && b.pscope && b.pscope.getFullInviewTimeTotal() >= d
            };
            a.o.t = function(c) {
                var d = 0;
                (c = c && "undefined" !== typeof c.zr && a.o && a.o.a(c.zr)) && (d = c.getFullInviewTimeTotal());
                return d
            };
            a.o.u = function(c, d) {
                return a.o.t(c) >= d
            };
            a.o.h = function(c) {
                delete h[c.zr];
                k.hasOwnProperty(c.zr) && a.m.a.sxaz("view:tick", {
                    id: k[c.zr]
                })
            };
            a.o.r = function(a) {
                var d;
                h[a] ? d = h[a] : h[a] = d = {};
                return d
            };
            a.o.k = function(c, d) {
                var b = a.o.r(c);
                return b && b[d]
            };
            a.o.v = function(c) {
                var d, b, f;
                if (!c || !c.strict) return !1;
                if (a.d.cw()) return a.q.c();
                c = a.d.ao().isInApp;
                d = a.d.cr();
                b = a.d.cv();
                f = a.d.cu();
                return c && (d || b) || !(c || f)
            };
            a.o.b = function() {
                var c;
                return function(d, b) {
                    var f = null,
                        g = h[d];
                    a.o.v(g) ? f = "strict" : g && g.sframe ?
                        f = "sframe" : g && g.pscope && (f = "pscope");
                    (g = "undefined" !== typeof x && x[d]) && g.isMeasurabilityDisabled() && (f = null);
                    a.e.c() && !b && (f = null);
                    c != f && (c = f, a.m.a.esgf("preferredViewCounterUpdate", x[d]));
                    return f
                }
            }();
            a.o.a = function(c, d) {
                var b = "undefined" !== typeof x && x[c];
                if (!b || !b.isMeasurabilityDisabled()) {
                    var b = a.o.b(c, d),
                        f = h[c];
                    if (!a.e.c() || d) return f && b && f[b]
                }
            };
            a.o.w = function(c, d) {
                var b = {},
                    f = h[c],
                    g = a.o.b(c),
                    k;
                for (k in f) f.hasOwnProperty(k) && f[k].getQS(b, d, g);
                a.ac.c(c, b);
                a.ao.a(c, b);
                a.o.a(c) && a.o.a(c).hadDentsuDisplayOTS() &&
                    (b.nb = 1);
                (f = x[c]) && f.viewstats && f.viewstats.isBigAd && (b.el = 1);
                return b
            }
        })(m);
        (function(a) {
            function l(a) {
                a && a.ao && (a = document.getElementById(a.ao.mmakAdKey)) && a.parentNode && "function" === typeof a.parentNode.removeChild && a.parentNode.removeChild(a)
            }

            function d() {
                return {
                    isVisible: !1,
                    isFullyVisible: !1,
                    percv: 0
                }
            }
            a.n = {};
            a.n.realEstateMeasurements = !1;
            var g;
            a.n.e = function(d) {
                !a.n.realEstateMeasurements && 0 < d.w && 0 < d.h && (a.n.realEstateMeasurements = {
                    w: r.round(d.w),
                    h: r.round(d.h)
                })
            };
            a.n.f = function(d, g, c) {
                d.mmakAdKey =
                    g;
                var e;
                e = document.createElement("div");
                e.id = g;
                c ? (g = c.h, c = c.w) : c = g = "100";
                e.style.cssText = "height: " + g + "px; width: " + c + "px;";
                document.body.appendChild(e);
                a.v.b(17, d);
                d = a.e.e(e, e.tagName, !1, void 0, d, null);
                a.m.a.azsx("adKilled", l);
                return d
            };
            a.n.g = d;
            a.n.h = function(a) {
                var d = {
                    isVisible: !0,
                    isFullyVisible: !0,
                    percv: 1
                };
                a || (d.jsPercv = 1);
                d.isDentsuVisible = !0;
                return d
            };
            a.n.i = function(g, k, c, e, b) {
                var f = d();
                b = b ? .9 : .96;
                var t = c;
                if (!e) {
                    if (a.d.bz()) {
                        if (g = a.aj.a(g), "undefined" === typeof g || null === g) return f
                    } else {
                        k = k ||
                            g.WINDOW || a.b.aq(g.aa);
                        g = a.aa.i(g, k);
                        if (!g || !g.visibleRect) return f;
                        g = g.percv
                    }
                    f.jsPercv = g;
                    t = r.min(c, g)
                }
                f.isVisible = .5 <= t;
                f.originalPercv = t;
                t >= b && (f.isFullyVisible = !0, t = 1);
                f.percv = t;
                t >= r.min(.8, .96) && (f.isDentsuVisible = !0);
                return f
            };
            a.n.j = function(d, g, c, e, b) {
                return b ? {
                    elementRect: c,
                    visibleRect: g
                } : a.aa.p(d.aa, c, e, g)
            };
            a.n.k = function(d, g, c, e) {
                d = "strict" === a.o.b(d);
                !e && d && (e = -1, "function" === typeof g.calcVisiblePercv && (e = g.calcVisiblePercv()), d = -1 < e && r.floor(c.originalPercv) === r.floor(e));
                return d
            };
            a.n.b =
                function() {
                    return 1 == g
                };
            a.n.c = function() {
                return 2 == g
            };
            a.n.a = function() {
                var d;
                return d = (d = (d = a.d.cw() && a.q.f()) || a.d.cw() && a.q.e()) || a.d.dx()
            };
            a.n.l = function(a) {
                "undefined" === typeof g && (g = a)
            };
            a.n.m = function(a) {
                "undefined" !== typeof g && (a.yz = g)
            };
            a.n.d = function() {
                a.t.g();
                a.q.h()
            };
            a.n.n = function(a, d) {
                return a.x === d.x && a.y === d.y && a.w === d.w && a.h === d.h
            }
        })(m);
        (function(a) {
            function l() {
                var a = (19).toString(2).length - 1,
                    c = 1;
                return function() {
                    c <<= 1;
                    0 != c >> a && (c ^= 19);
                    return c
                }
            }

            function d(a) {
                return 9 === a ? 30 : 10 ===
                    a ? 31 : a
            }
            a.f = {};
            a.f.f = 0;
            a.f.d = 1;
            a.f.g = 2;
            a.f.e = 3;
            a.f.h = 4;
            for (var g = [
                    [1, 25],
                    [7, 1],
                    [1, 25],
                    [-74, 1],
                    [1, 9],
                    [-24, 1],
                    [2, 1],
                    [1, 3],
                    [2, 1],
                    [1, 4],
                    [2, 1],
                    [1, 1],
                    [11, 1],
                    [1, 6],
                    [27, 1],
                    [2, 1],
                    [1, 3],
                    [27, 1],
                    [1, 3],
                    [-92, 1]
                ], h = 65, k = "", c = 0, c = 0; c < g.length; c++)
                for (var e = 0; e < g[c][1]; e++) k += String.fromCharCode(h), h += g[c][0];
            k += String.fromCharCode(h);
            a.f.i = k;
            a.f.j = function(a) {
                for (var c = "", d = 0; d < a.length; d++) var e = a.charCodeAt(d) ^ 85,
                    c = c + String.fromCharCode(e);
                a = c;
                for (var c = "", e = d = 0, g, h, l, D = 0; D < a.length; ++D)
                    for (l = a.charCodeAt(D), h =
                        255 < l ? 0 : 1; 2 > h; ++h) d = 0 === h ? d | (l & 65280) / 256 << e : d | (l & 255) << e, e += 8, 13 < e && (g = d & 8191, 88 < g ? (d >>= 13, e -= 13) : (g = d & 16383, d >>= 14, e -= 14), c += k.charAt(g % 91), c += k.charAt(g / 91 | 0));
                0 < e && (c += k.charAt(d % 91), 7 < e || 90 < d) && (c += k.charAt(d / 91 | 0));
                return c
            };
            a.f.k = function(a) {
                for (var c = "", e = l(), g = 0; g < a.length; g++) {
                    var h;
                    h = d(a.charCodeAt(g));
                    var k = 0 === g % 2 ? e() : -1 * e();
                    h = 0 === k ? h : 126 < h + k ? 30 + (k - (126 - h) - 1) : 30 > h + k ? 126 + (k + (h - 30) + 1) : h + k;
                    c += String.fromCharCode(30 === h ? 9 : 31 === h ? 10 : h)
                }
                return c
            };
            a.f.l = function(a) {
                for (var c = "", e = l(), g = 0; g <
                    a.length; g++) {
                    var h = e(),
                        k;
                    k = d(a[g].charCodeAt(0));
                    h = 0 === g % 2 ? h : -1 * h;
                    k = 0 === h ? k : 30 > k - h ? 126 - (h - (k - 30) - 1) : 126 < k - h ? 30 - (h + (126 - k) + 1) : k - h;
                    c += String.fromCharCode(30 === k ? 9 : 31 === k ? 10 : k)
                }
                return c
            };
            a.f.m = function(b, c) {
                var d = [];
                a.b.forEach(b, function(a, b) {
                    if (void 0 !== a && ("string" === typeof(c ? a[c] : a) || "number" === typeof(c ? a[c] : a) || "boolean" === typeof(c ? a[c] : a))) {
                        var e = String(c ? a[c] : a).split("&").join("%26").split("=").join("%3D");
                        d.push(("number" === typeof b ? "" : b + "=") + e)
                    }
                }, null, !0);
                d.sort();
                return d.join("&")
            };
            a.f.b =
                function(a) {
                    for (var c = "", d = 0; d < a.length; d++) a.hasOwnProperty(d) && (c += k[a[d]]);
                    return c
                };
            a.f.n = function() {
                var b = document && document.documentElement && document.documentElement.style || {};
                a.f.o = [!0 === (!!window.chrome && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore)) ? 1 : 0, !0 === ("undefined" !== typeof InstallTrigger || "MozAppearance" in b) ? 1 : 0, !0 === !!window.opera ? 1 : 0, !0 === a.d.o ? 1 : 0, !0 === (!+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in
                    b && "-ms-ime-align" in b) ? 1 : 0];
                for (var b = !1, c = 0; c < a.f.o.length; c++)
                    if (1 === a.f.o[c]) {
                        b = c;
                        break
                    }!1 !== b && (a.f.c = b);
                return a.f.c
            };
            a.f.c = a.f.n()
        })(m);
        (function(a) {
            a.ap = {};
            var l = [];
            a.ap.a = function(a, g) {
                l.push({
                    query: a,
                    callback: g
                });
                return !1
            }
        })(m);
        (function(a) {
            function l(a, b) {
                try {
                    var c = a.split(k),
                        d = b || window,
                        u, l;
                    for (l = 0; l < c.length; l++) {
                        u = c[l];
                        if (null === d || typeof d === g) return 1;
                        d = d[u]
                    }
                    if (typeof d === g) return 2;
                    if (null === d) return 3;
                    var p;
                    var w = a + h + d.toString(),
                        c = 0,
                        D = w.length,
                        v, z;
                    if (0 == D) p = c;
                    else {
                        for (v = 0; v < D; v++) z =
                            w.charCodeAt(v), c = (c << 5) - c + z, c &= c;
                        p = c >>> 0
                    }
                    return 4 + p % 58
                } catch (m) {
                    return 0
                }
            }

            function d() {
                var a, b = [function() {
                        return "c$$b" !== "cab".replace("a", function() {
                            return "$$"
                        })
                    }, function() {
                        return eval('class A { constructor(pp) { this.pp = pp; }\n call() { return this.pp; }\n }\n class B extends A { tS(a) { return super.call(); }\n tT(a){ return this.call(); } }\n  const obj = new B("cab");  (obj.tS() !== obj.tT()); ')
                    }, function() {
                        return eval("'\\\n\r'")
                    }, function() {
                        return eval('((new Date("1300-02-28T21:11:11.000Z")).toISOString() !== "1300-02-28T21:11:11.000Z")')
                    },
                    function() {
                        return eval('(new Date("2835")).toISOString() !== "2835-01-01T00:00:00.000Z"')
                    },
                    function() {
                        return -1 !== "22".localeCompare("122", "de", {
                            numeric: !0
                        })
                    },
                    function() {
                        return "p" === window.atob("cab==")
                    },
                    function() {
                        return "cab" !== "cab".split(/\b/).pop()
                    },
                    function() {
                        return void 0 === Array.prototype.find
                    },
                    function() {
                        return Number.isNaN("MAX_SAFE_INTEGER")
                    },
                    function() {
                        return /(G)+|(X)+X/.test("X ")
                    },
                    function() {
                        return "bec" != "cabecab".match(".?e.?")
                    },
                    function() {
                        var a = {};
                        ["cab", "cab"].sort(a, a);
                        return !0
                    },
                    function() {
                        var a =
                            new Proxy([3, 444], {});
                        return [12, 444].concat(a)[3]
                    },
                    function() {
                        return eval("let x = (e) => { let e = true;};")
                    },
                    function() {
                        return 0 === (new ArrayBuffer(5)).slice(3, 4394878398).byteLength
                    }
                ];
                a = "1-";
                for (var c = 0; c < b.length; c++) {
                    var d;
                    try {
                        d = (0, b[c])() ? "1" : "0"
                    } catch (g) {
                        d = "2"
                    }
                    a += d
                }
                return a
            }
            a.aq = {};
            var g = a.f.b([46, 39, 29, 30, 31, 34, 39, 30, 29]),
                h = a.f.b([77]),
                k = a.f.b([72]),
                c;
            a.aq.a = function() {
                if (void 0 !== c) return a.b.g(c);
                c = {};
                var e = a.d.g;
                try {
                    var b = e.document,
                        f = b.body,
                        g = e.innerWidth || b.documentElement.clientWidth ||
                        f.clientWidth,
                        h = e.innerHeight || b.documentElement.clientHeight || f.clientHeight,
                        k = e.outerWidth || f.offsetWidth,
                        p = e.outerHeight || f.offsetHeight
                } catch (R) {}
                try {
                    var w = e.screenX || e.screenLeft || e.screenX,
                        D = e.screenY || e.screenTop || e.screenY
                } catch (R) {}
                var b = (new n).getTimezoneOffset(),
                    f = a.f.b([84, 41, 33, 26, 39, 45, 40, 38]),
                    v = a.f.b([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38]),
                    e = !0 === ("undefined" != typeof e[f] || "undefined" != typeof e[v]) ? 1 : 0;
                a.b.j() || a.d.ao().isInApp || (c.ud = a.f.c);
                var f = c,
                    z;
                try {
                    for (var m = [a.f.b([33, 26, 43, 29,
                            48, 26, 43, 30, 2, 40, 39, 28, 46, 43, 43, 30, 39, 28, 50
                        ]), a.f.b([47, 30, 39, 29, 40, 43]), a.f.b([41, 37, 26, 45, 31, 40, 43, 38]), a.f.b([46, 44, 30, 43, 0, 32, 30, 39, 45]), a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43])], v = {}, B = 0; B < m.length; B++) v[m[B]] = window.navigator[m[B]];
                    z = a.f.j(a.f.m(v))
                } catch (R) {
                    z = ""
                }
                f.qn = z;
                c.qp = a.f.o.join("");
                z = c;
                if (document && document.body) {
                    m = document.createElement(a.f.b([34, 31, 43, 26, 38, 30]));
                    m.width = a.f.b([53, 41, 49]);
                    m.height = a.f.b([53, 41, 49]);
                    m.style.left = "-" + a.f.b([61, 61, 61, 61, 41, 49]);
                    m.style.top = "-" + a.f.b([61, 61,
                        61, 61, 41, 49
                    ]);
                    m.style.position = a.f.b([26, 27, 44, 40, 37, 46, 45, 30]);
                    document.body.appendChild(m);
                    for (var f = a.f.l('Cjqjghtjx>#V{k/LSFH&Meu8h`}X{OtkumzFpn\te!\ny\\oex`/;|eGWu`teYqqixqXY~pvm<_ndf*EhsfuXfjpa}6jbja6@N9NFSGU~Ngqjm[dnuds9hUwXNqtkzB|Yyo8;c3OCJLKWSBMHJ"Hd T!-q^{bxjp)xZ{V98umqafm:hyeyW=_nmipp)Ghzhs\\ \n#Xjr2fdgq!Fkk[~C{nea{pobr@\n^|e;cflklk&Mjyeja|cudvaMoxc}@\n^|e;DPSW=PIb:18pYd\\ws80IoxU#)v^|X _-@pmhn{dy^YW|b}dI=\\QJY~^|b~e|i/jifjnt!Gb|W"bxsjNmjuhpBKMbDriwcv&o_z\\y^34{hnsqk|eXYxj~^U2aKTcvnhl:cfcl\tRF\\-t]l+tUx`6<aDVdbeiNdf Z3dh_t\nLRUIiqnBpbkms\n{Xnc0;VMZVr[zbpVnQwhm+]9MFSMm<RPGPEEHMkGZBL\tRF\\MwimooWa\\vns\n{Xnc0;VM\\gncpfxinUch}b47^Ni<]F[KFP0;VM^dyW{W=_nmipp)IG^M\tes\nd<CIMLbLQ<NEUQaHUD.?[PYh#go=sTyXs_xarh:cfcl\tRF\\TplioyYoQke"V;gbpw]Dfx#q[uY"[5BUO^^rip)MLaPc8MSIWOC_I19ZEeT{hc^tbXYq`|^|TrMbjy]1hmbj"Jd\'c}n0hmkmhs\'NH[6$Zfnxarh:>SLH>X7hMQ@M\\ZM[@i>`C9;PKTglh\n#khv__brmv*tbt[\tc6=]>]fjlx&il{bUep`"!w`oa4AUA[jsg!CrXeMrd|(zVr[36^@[depTfyh9ikfs~QXu_Xjdh\t[jh5^tapsj(L^zUadop<]rehrl$G[\nV[_li=ajlg(Lbhir) kwerco,p]qa\n]1:vU#`nmv*XOU7PN]B\\8l@OQXJX=`>TDf@^7N+FkkrsYyoPkoXz\\or2dhhsim"KdpZNugj|+SCeZ]HcCP<`IIQEIMGI"L`"X{Ok_|rxYTiZbqe!ifCz]qn:6YU[3a:NS.Avqoh#)NHQFZ<ORc>U;SBJD[Q]BMD.Azouf9n~Zq\\aibaiDlgui1;yd~eNugj|+SC`NOF]GR#FtedHl~dw$uS|X5Dxavq4APOKX[2`B-Cz]qn_dzhjW=6XMPAKQOBR\'PbzVRismv&S;`=d;_;bG\\^GNZ)L`z\\~,@2\tibw2dhhsim"NS|Xy`fA~bth9>KIbF_@OEcHK;_:1=h_tcjcGrmkz"V@c=]H[#H_q]s[p:{[uf=AXMG(PQS@Thk`s6y\\ncrl1hmbj"OF\\?VdpqQqkaPgofs_ %o_q]/B`BQE|f\th}Dnaubth9ikfs~U`trsj|(zVr[3;@$L-Eq{quaO`pb|VYfd_xarh:cfcl\tX$;B0Pmpz9y^y]s\n{Xnc0AG<WZ~Hh`vX7kgjoqn T?LDsj_Xoei&oi"Zw8vg}W7kgjoqn T?LDsj_Xoei&rhxn3dh_t\nRCDPz^tgl^~b}_;cflklk&Ubf]l {Xwfvd4FsUr`Lb!^ngScr\\hlucl9v`"X s0jijk Ti~^\ndrZugsfR\\\tZwlld=_nmipp)Ob\t`|lsT `plSZv_~kjhL`"e!-navdz\\7Dxmz\n[ln`ijIi~bfj5`p`n+Kj|i4Dwp|ZzC!cfq2kxj|dwjlV[bl`na{Ll"w`x`!Y9@orp&U_xVy_}Wc\\vdHkzjgh9n\ti~`\tkfbPgf[xZxEm }Tvd.Evqr" 3LksRx@ucvYwi~#sWtW;>nxGrmkz"OJWXd<l\'-IiqHpqcy$KA\\R_JaLZFTH7H]FsUvXLc}k1c\tI~flE#cyntpma4blho%[R _/qmfk(xZs]{Z;@nck]K^vUmdvb!ZrjJljg1hmbj"TWs\\jCgrq`kg9gogueu#NchadEqnS[lVtWNugj|+GHjOKKU6a#NchadEqnXozft`Jbea{p4blho%[Vq`bIiqv(uhYowWbhyoqn|bj"y\\w^:>r[j_O]|m:ajdnfw\nVdfeiHkm~)xZ{V9DfbmYP_\nViW{S=ajlg(Ubj]lMo\\}cq\\sCvjrlQkjd{ b;REV[U>Y?7Ho]wR`\\tqmgq(zVr[3?tWr`Upzbga9gogueu#NchadM\ngjWt7 exq0hmkmhs\'W^ dn^fAlYqhqa3dh_t\nVnwomPifzgv>#V{k/FSJLT[CY7SQPKRR.I}qghtjx>#V{k/LSFH&ZV{_nS"\\xmRnmiuUoHkgoXri/jifjnt!SW}[vT}nt*tbt[\tc6Gogv^brsj1hmbj"UasXOhnpmo4GSJaXO=Y#OsqZhl:^x?uftZnq0hmkmhs\'Y_t]vef?y\\liOdrfsW"\\xmGrmkz"MG_K:@s]tav]hhOVslheaXwcgnqkm7zi~^%e?;/jifjnt!Tij[{_jsqnVljY9ikfs~\\mfpggqm\ngf_uWs8{qqn6kgap\'ZZuVaiblwawc{cJll`"!VNWOMRV [\\"fs_ 8ebv]vm:cfcl\t_T!lgj|Ftg\tm\tfs_ j/jifjnt!UW\n_ta}Hpo|o{api~l<_ndf*TY|gqcyCh`pZnq0hmkmhs\'ZZ&^reuKefdaqg3dh_t\nYdtbwosUy^oFsR\nlsc2dhhsim"WW Yxqo]v`kBlqs`oevfo,p]qa\n]1Fldub{lcjkbUV~`|oscReup}Dlm\n#sWtW;Cnqhkzjgbn`\\^ `!idcXapcz\\3dh_t\nYhep}ok=yKs\\!f\t\\Xgr\\rq:ajdnfw\nYnyazP{d{g">#V{k/?XWW;^<JJ3B X|dppiqocy)v^|X _-Nv]v_zifjpa}6xmpakqocy)v^|X _-Nv]v_zifjpa}Enbge~bx"w`x`!Y9Gsmkjhm\t:{[uf=@XTUAUL\\97K|h{Z\n\\/pibh]\n#q[uY"[5Otkxbxh#Iy]s=vju,p]qa\n]1Fya&l7btaiqk:\nimmw`{%mcr_wb8Ezio?pajfgn6kgap\'Zn Y`lcqgjlj\n^tdVb"\\xmu*tbt[\tc6I"duJv`w[uc|ineuA\tgrnpo6kgap\'\\MQAr\\sAsfq_oineu;rXNugj|+HIM=VB\\8lGI?W=/L`8U[ldRbwmg_|fubT^o>#V{k/AEHWO^>S=fBW4\\D.N\\@YY~nsh|5rjdpmhwc{c3bl`vgq+TPKPzU\tnZk}gv[fp2fdgq!WJJE"T}rTaxlxh9ikfs~_Xoei&HHPTYEfEc4[S.NikmY9IY=SPO<GMV=/Lq[jhl`rXNqtkz+rYyb~a:Cr]mcgl1i"cP[\ne=ajlg(Zbl`p^~\' V %mcr_wb8GjipltBkrgn~bx"w`x`!Y9JJKH&Ei{a8(\t&=fqthbtb4blho%a:Z;/Dpgdn?\'}*5_xa7kgjoqn ^DW=<Fveu16p7(\tjg$sW}Z}g.O^DGbthkmsU_\\dr2dhhsim"ZHV6uhrLiqn9w`w^|e;cflklk&_KL<L4{XwcGhmjkb\t)]OUPS<CJIFGYYDI;f>d@RMQOQQ_ ^QQ?S4|cppQYwlumJbl_ta}-URO\\L9NJVH`>NKSG\\WWS\\:d>\\7aB]@VA4P\\;Q@Nb eneuJm_knQajcl`"!w`oa4P\\;QdvmscRcfkifw(zVr[3Ee:Y`vd[bm"[<^Aa6TVDSVNHN[TVKH6a4]HE[ZBR ^QQIoeuJfeEjf;nh3FHFWFNFa?]O\\9_Ji<c3V:`PID/Mb<UW{ZbXp@t_I_y"[<^Aa6TVDSVNHN[TVKH6a4]HE[ZBR ^QQIoeuJfeEjf;nh3FHFWFNFa?]O\\9_JiJc2QIBRM;bMYDTJOQa8U+UROMghsNo`Q]|jfNelk(\\6Y>Z7VRUHPA\\Le<ZMSS]?a8M]E:V&_KLFhfwFnfEqzskhzL\tZrcnkjaV]o(\\6Y>Z7VRLTTRMQUS\\PK=`2a@D]WERI`=d7IE;F_FR]|eYYrGsgse|Mfpxaf[x6gi5BPGQRGCg>X7jMOE:Dc>Q_x`V_sAndlf~Inqvek^r5mn8IOEUJFEc;XLb:YEfCd4MQCPQ@eFPG6Ld8]XufW]jFucjjvHte}he]t>hg9KKMVDR>`JMFHN[T[;YFX6JKaNMI2GaBZZ!Y`\\hKsnhn{Gjb5BPGQRGCgIOBPOYXV@_@[MRLDFkGJB3Ee:[dp`moobrDxms_ %SCR<HLUCLUP@c8WSa=]QU ^`mn\nZ pQmpafsb^tbhfxbwDxavq45_Z^:`8RK-QijycoZ\\ey]te[die{qxU\tdyg<_ndf*Wlucz\\3hlb{Tld0hmkmhs\'^b{V_Xoeik1fqcljo\tcejmubwosG\tmoZ{\ny\\oex`/N~ZjMh^zX{-navdz\\7PS>#V{k/KSMV?PGF=3Ga<Nqtkz+tUx`6Na3Pfoli[wc{cJll`"!L@RP]OOBRZZAODR#VQFAqnqgkWjW=ajlg(]pkfX`}loXr?blhdhl\tCfcle\tTld0hmkmhs\'`K^`\n\\/jifjnt!\\;I9[Rmddqo\\xYy_okscl`ods&XHY6XAL6nENMFAZBXSb@L@Z~d\\biQYs(xZs]{Z;JnaCo{bsVwt8Fs^|iz,p]qa\n]1MlTPf|do^tv4Az_\tes\nvdqmvlv(zVr[3ItUJruau_rm9Ok[zV;ebki$Z_n6xil_q_!-ekumo`p)v^|X _-UiZDm\tZrXsk=\\wrv]vqoU\t`8es_tki*[]eAX\'Hetb#gnQgjlbx]ybMh|erou,FMI@QGdLHDX4KKG(_bh;W-Mh{a!kfPifg_~^s]Ja}gnwv*U>^S_@bMcCRVJKE?HYaCNJZ\tfXkFN.Klsd\nooKs_q\\sgr_Fizijn{ a:K@5.N)]YmBV+`V{[fpmfj={cy[\tf=6XKQNg>ZHL>RFS?a(4*[]eAX\'W[uVtermi?wkzY"o8=`2dVCSJ>HL=\'1MlTV?;Qgjlbx]ybMh|erou,HJDQk7Z<M7a$=+YajDR&]`x]scvehAsfw_#i3<Y3\\8KTHBMOe=Y>YF^=RKF]QAVMUCLUHFc4LGOAVQ2Kp]QE@CreecvaqaOdsjlj"![03BgD7%QZL*>79Nf`KD5Lqci[y[}ZLnppmuz"]@X=SCOLGDIJb<XJJUZ;i85Vg^OI8Fpin^\nZ{^Dmrlhr\n#W=?;;JnaIH:Okbo`|b|XPforipw(^<G+=\';JnaIH:Okbo`|b|XPforipw(^<G.\\;;JnaIH:Okbo`|b|XPforipw(`:]J\\DT%A+YajDR&]`x]scvehAsfw_#i3JLJcH[Da.L)]YmBV+`V{[fpmfj={cy[\tf=G[@PONLXAjAO>R3N:L]FMI@QGd8P@S<WF.Sm_M@Njxmsi <wcrl1>NAHBP5Z\n`ddCTOkbo`|b|XPforipw(ODSJLJcRUNUPgTK6RG6PsSTCScr\\hlucl9v`"X s0CMKKFLOOX[:]DBNc@LH`!\\[i9[Enmfazft[Njxmsi %JLZ=UN8LjXN>aXwcgnqkm7zi~^%e;FVRcGIYY:REYK;JnaIHZbtXpmsgu4|euc|l1MO>XIVDn5XW.Sm_M@]`x]scvehAsfw_#i3JLJcH[D414TkVRG^^%e!if,p]qa\n]1MlTZ\\}@peu^z]ziOos_ %DFEFJ?8LjXR["4who]|fubPqog!\ny\\oex`/QqWP_{3}\\v`vewkKjpi~\'|Rz\\-UiZNc\n8XIM[{gnqX]trk"NN]XT:YKFPc@X?kGTJHFT\n`ddGqqIG^Ase!V\tMbjy]1=_Hd<P>c8[^U=\\RX5_@6PsSX`uKi\\l[WZ~;yd~e7LG@Q>e?PTOK`P\\LUNYL/QqWP_{F Twrkpqlt9 `xm<>\\LTCSNHL8LjXR["G{`poqqocy@\n^|e;cflklk&cZgIvUzX}-QLMK2LXGRm!a_\\rsikw(XDF:P@V\naLND|qvFpl\t^ eRmflxLdlsZy$uS|X5WUH\\Mxcn`}l}c;cflklk&meubpUpgrnp?i`nY9\\lh\ne;cflklk&meubpUpgrnp?i`nY9hysOUq%o_q]/[|eq_jS"\\xmE]kek"xj#B!Vzj/asfw[ucx$sW}Z}g.]xmr]n\\~b}_PXdfi&pi%>y[te=Vxmv]qky"y\\w^:R}gmggYwc{cHWjZt!vn|Hmkmhs\'ki~]vZbrmgq=mXm[5e%TyBc_pb4blho%qRp_fq2chs\t#sWtW;Vjbja{+sU\t^r\'|Rz\\-aljrgq#qehVc\\vdu*v^sY7^rk}^r%tcejfb:ajdnfw\nlgtkub4kp]}m}cr%jlwldfx#q[uY"[5bjnwjk"!`ll!`\t\\/grkw[xa3dh_t\nlgtkub4kp]}m}cr%plHgzhxdfZWd~Z{duo6^jXWd}ms_ri/leeh&o]wetW=jnaupwok"ziNh$_yfbbTjra~Zxi5Vxfy`v_p+tUx`6\\vc|df,{]em\ndw[5a}7xvphw^jD}jqksd\n%egwhdno]YeS[!gnmgn6ikbror%qY\tfnc2oh\\\tithl ~aMnyjtlgX[my`\nV\nj/fekOc\tijdld=ajlg(kexcx`8psS\nkppi&rhPd|dsapWYqqczbyg9mof}grCjqx]q_~#q[uY"[5bqj{lrY9^v^oc;ebki$fizhtbl sXkti*v^sY7^yg `y\\/bmj1hmbj"ja}fxkg*lfxlxg8es_tki*ggqm{aj$nd~hyBqht^vgp_8es_tki*ggqm{aj$nd~hyBqht^vgp_8go^r#dmrkrfq#q[uY"[5bqj{lrY9gy`<]rehrl$fizhtbl \texekhm+rYyb~a:T|etmp]1j~dk_sWTam-p]ub2Wzi}hzV;kjkiDra:cfcl\tren`vaQjg[p=sm{R}%mcr_wb8Xwowf~!|tdptb4]xkyk!<rp/jifjnt!hh\nb"b7rw^|ik" `|btj;cflklk&ojxjv_T_nlgj|p4i{b|ZrV;ebki$gc\tefjjZTinmv*v^sY7`x]mRyc`dvYp_\tTndqWrgnc.a\nqkfy\\v\'Wd`\\bpg`Sl{knZldXa|schtbj"^O koa;cflklk&qmy[y`p_7HuOm^xWsK|h#Zq\\sGrkw[xajZ5dtZrrvazBtix)|^ `ymfGr`hluifdjW=\\|HoltbsYyoo]Pj9_jqxgus:ezioE"T}d0hmkmhs\'sgrV$\\eBF$lhpZ}[k6Q!m`v]j^yY~)v^|X _-gr\\hrqYI85Vt_nsg@iqgVlno\'|Rz\\-gwKh] gj9v`"X s.iwskHz)v^|X _-ksrUNOEj[y5~awdepqlt"y\\w^:^|qScumhm\n6s_tS"\\xmHnijk"y\\w^:_nmjeelrl:VufJasXW`oa4kgjtbkm}c;ZqsGddm\t!sW}[vT}nt*obu`z^kmw`{%x_x[kJ{hnjpa}!w`oa4kgjtbkm}c;dpxGgqnmXyi5epin-p]ub2blqs`oe|i/nijpc\thneue=d~dtu6ikbror%|R"`h_xgu(|afjma `5mcrqdghzm8ksXvjucv;rh\nZsjOS}Wudt*tbt[\tc6gogv^brsj1mqg{_jWfb{jgn6dkh]`qb e\tXugsf1hmbj"uS$\\p`vkz+yY}qs\\sH|ilcv&j_\nGj]pe"ejskkvp4`piqmv~{XwgkYwi~#zdyWv\\|sgnXouhz^yeVR{[mcv&q[yZ1eug}_x`f*v^sY7jz^|\ny\\oex`/i|Zs:hfpUjrg*v^sY7jzk<Rq[plw&rhPd|dsapWYqqczbyg9mof}grCjqx]q_~#q[uY"[5ntemkzU\tdyg:anitcJdr[\n#sWtW;cjquaQkz"w`x`!Y9gfpjgugmch[5U{XjqOaip{fpn8es_tki*t]u`{grWuUt!pdvAvqx]pn8es_tki*t]u`{grWuUt!w`xeo^z]zi8MgARVC?GCb@[G\\7Y6;cnqhkzjgbn`8gogv^brmgq(`NU;f@PIRFCPM)vY}ayk{R{Zf,rYycsVy_v`=g!og(zbwipn~:|ZzXugsfIlmbj$uS|X5qgoqwk6#)v^|X _-qgjrfx#q[uY"[5renwir6#)v^|X _-qilLh\nZwlh^=_nmipp)yY\tOsfs`!k/leeh&\tej[jZblwsja{fy"n\\x\\s];cflklk&\tej[jZblwsja{fy"n\\x\\s];ebki$vjqZh^Zk}gqdue{+vU\nno\'zV{^uf0ks_qXmI\n`"[nrko6mgi~`n% ar\\dfWqqntZx_z  X|toa6kgap\'}isVp_Twrlk_\t^x$zbtTthpc4qucw]kk<gvjj`p]/puhzWsHxX\noqn|+vUr`V^te9mjqyYoPuZ|fvd"!y`ia\\lv  d}no]c`futgun:lnZ{Z;jname|@gbn`vKsb!\\trEflgmineu8 Tvd0hmkmhs\' ^p\\vkSRGHh_~8tduWrgrnp*v^sY7ro[yZ Jqci[kA~Vrchd=ajlg(\tbh_to]isVp_Hpeep[~Ani{ {Xwfvd4tkVvd~L~VrZiPi[raz^y_v`=_nmipp)}Ymfsmaar\\dfV]fiscnjpa}!w`oa4vgbo`!\'{Vq`b,w]wG ijI{S"X7kgjoqn #\\x]si;gv`paf@qVykyW=T{dV]jAkgtbxLse `oew=q[najZ5`p`n+{]vakl9k\t[zZp=f_xmu_:ZsWi^tC{nvakq4`piqmv~%Xobip1j Wq_j8tT}tta6dkhb\\ve~R}\\sGr^r(zVr[3kpamdz*xrh`t^P^oe!if,mkSl{ijY{7}Tkkg`6ikbror%&R{[fv2hx\\x^h<lS"h{d0e{Tg`wkkisc_fu_xarh[c3bl`vgq').split(a.f.b([71])),
                            v = f.length, C = [], B = 0; B < v; B++) C.push(l(f[B], m.contentWindow));
                    document.body.removeChild(m);
                    m = a.f.b(C)
                } else m = "";
                z.is = m;
                c.iv = 7;
                c.qt = e;
                c.gz = a.d.ar() ? 1 : 0;
                c.hh = a.d.as() ? 1 : 0;
                c.hn = a.d.at() ? 1 : 0;
                var e = c,
                    r;
                try {
                    r = !a.k.d(window.top) && window.top.name ? a.f.j(window.top.name.substring(0, 50 > window.top.name.length ? window.top.name.length : 50)) : ""
                } catch (R) {
                    r = ""
                }
                e.tw = r;
                c.qc = w;
                c.qd = D;
                c.qf = g;
                c.qe = h;
                c.qh = k;
                c.qg = p;
                c.qm = b;
                c.qa = a.d.y;
                c.qb = a.d.z;
                c.qi = a.d.w;
                c.qj = a.d.x;
                c.po = d();
                var g = c,
                    q, h = a.f.b([28, 26, 39, 47, 26, 44]),
                    k = a.f.b([48,
                        30, 27, 32, 37
                    ]),
                    p = a.f.b([30, 49, 41, 30, 43, 34, 38, 30, 39, 45, 26, 37]),
                    w = a.f.b([22, 4, 1, 6, 11, 84, 29, 30, 27, 46, 32, 84, 43, 30, 39, 29, 30, 43, 30, 43, 84, 34, 39, 31, 40]),
                    D = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 21, 4, 13, 3, 14, 17, 84, 22, 4, 1, 6, 11]);
                r = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 17, 4, 13, 3, 4, 17, 4, 17, 84, 22, 4, 1, 6, 11]);
                b = a.f.b([47, 30, 39, 29, 40, 43]);
                e = a.f.b([43, 30, 39, 29, 30, 43, 30, 43]);
                z = a.f.b([28, 43, 30, 26, 45, 30, 4, 37, 30, 38, 30, 39, 45]);
                m = a.f.b([32, 30, 45, 2, 40, 39, 45, 30, 49, 45]);
                f = a.f.b([32, 30, 45, 4, 49, 45, 30, 39, 44, 34, 40, 39]);
                v = a.f.b([32, 30, 45, 15, 26,
                    43, 26, 38, 30, 45, 30, 43
                ]);
                B = {};
                try {
                    q = document[z](h);
                    var F = q[m](k) || q[m](p + "-" + k),
                        K = F[f](w);
                    B[b] = F[v](K[D]);
                    B[e] = F[v](K[r])
                } catch (R) {}
                q = a.f.j(a.f.m(B));
                g.vy = q;
                return a.b.g(c)
            }
        })(m);
        (function(a) {
            function l(b) {
                var c = a.f.u(!0);
                if ((b = a.v.b(35, b, c, !1, !0)) && b.res) {
                    b = "https://geo.moatads.com/n.js?" + b.res.querystring;
                    var d, c = a.d.c();
                    d = a.d.d();
                    c && d && (d = q[a.f.aj], a.as.a("DOMlessLLD", d, b), a.as.b("DOMlessLLD", d));
                    c || (d = a.d.ax + "." + a.f.aj, b += "&callback=" + d, c = document.createElement("script"), a.b.by(b, document.body ||
                        document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0], c), a.f.ai.push(c))
                }
            }
            a.f.p = 1;
            a.f.q = !1;
            a.f.r = {};
            a.f.s = [];
            a.f.t = {};
            a.f.t.a = "appendSpecifics";
            a.f.t.b = "appendManual";
            a.f.t.c = "onlyHooman";
            a.f.t.d = "onlyBot";
            a.f.t.e = "onlyNonHiddenAd";
            var d = {};
            (function() {
                a.d.ez() && a.p.e(function() {
                    try {
                        a.d.g.navigator.getBattery().then(function(a) {
                            d.charging = a.charging;
                            d.level = a.level
                        })["catch"](function(a) {})
                    } catch (b) {}
                }, 1E3)
            })();
            a.f.u = function(b) {
                var c;
                try {
                    q._c ? c = q._c : (c = a.aq.a(), q._c =
                        c)
                } catch (f) {
                    c = a.aq.a()
                }
                if (void 0 === b || !1 === b) c.ql = a.f.v, c.qo = a.f.w;
                c.qr = a.f.x();
                d && "undefined" !== typeof d.charging && a.b.cj(d.level) && (c.vf = d.charging ? 1 : 0, c.vg = 100 * d.level);
                return c
            };
            var g = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]),
                h = a.f.b([30, 47, 26, 37, 46, 26, 45, 30]),
                k = a.f.b([43, 30, 44, 41, 40, 39, 44, 30]),
                c = [g, h].join("-"),
                e = [c, k].join("-");
            try {
                a.f.v = a.f.j(a.f.m(a.d.g.navigator.plugins, "name"))
            } catch (t) {}
            a.f.x = function() {
                return 0
            };
            a.f.w = 0;
            a.f.y = function() {};
            var b = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            a.f.z =
                function(c, d, f) {
                    if ((a.f.t.a in d || a.f.t.b in d) && void 0 === a.f.aa) return !1;
                    var e = a.b.g(a.f.aa);
                    void 0 === e.n && a.ar.a(f) && (e.n = 1);
                    a.f.t.a in d ? a.b.forEach(b, function(a, b) {
                        c = a in e ? c + ("&" + a + "=1") : c + ("&" + a + "=0")
                    }) : a.f.t.b in d && a.b.forEach(b, function(b, d) {
                        a.b.aj(a.f.t.b, b) && (c = b in e ? c + ("&" + b + "=1") : c + ("&" + b + "=0"))
                    });
                    return a.f.t.c in d && a.f.t.e in d ? a.f.ab(f) ? a.f.ac(c) : !1 : a.f.t.c in d ? 0 === a.f.ad ? a.f.ac(c) : !1 : a.f.t.d in d ? 1 === a.f.ad ? a.f.ac(c) : !1 : a.f.ac(c)
                };
            a.f.ac = function(b) {
                var c, d;
                c = a.d.c();
                d = a.d.d();
                if (c && d) return a.q.i(b, null, null);
                if (!c) return (new a.d.g.Image).src = b, !0
            };
            a.f.ae = function(b, c) {
                b(a.f.ad)
            };
            a.f.af = function(a, b, c) {
                f.add(a, b, c)
            };
            a.f.ag = function(b, c) {
                if (void 0 === a.f.ad) return a.f.s.push({
                    callback: b,
                    opts: c
                });
                a.f.ae(b, c)
            };
            a.f.ah = function() {
                for (var b = 0; b < a.f.s.length; b++)
                    if (a.f.s.hasOwnProperty(b)) {
                        var c = a.f.s[b];
                        a.f.ae(c.callback, c.opts)
                    }
            };
            a.f.ai = [];
            a.f.ak = function(b) {
                if (q) {
                    a.f.aj = "gna" + r.floor(1E6 * r.random());
                    var c;
                    q[a.f.aj] = function(b) {
                        a.f.al = new n - a.f.am;
                        c = b;
                        q[a.f.aj] = null;
                        delete q[a.f.aj];
                        c && (a.f.aa = c, q.jsonpcache = c, a.f.ad = "n" in a.f.aa ? 1 : 0, f.checkPixels(), a.f.ah())
                    };
                    a.f.am = new n;
                    a.p.f(function() {
                        a.f.an = new n - a.f.am
                    }, 0);
                    if (q.jsonpcache) q[a.f.aj](q.jsonpcache);
                    else l(b)
                } else a.p.f(setupNadoListener, 200)
            };
            a.f.ao = function(b, c) {
                void 0 === a.f.r[b] && (a.f.r[b] = 1 / a.f.p < r.random());
                if (a.f.r[b]) return !1;
                var d = a.f.u();
                a.at && a.at.a && a.at.a.imaSDK ? b.moatClientLevel3 && a.v.b(34, b, d, !1, !0) : a.v.b(34, b, d, !1, !0);
                return !0
            };
            a.f.ap = function() {
                return [a.f.b([30, 39, 28, 40, 29, 30, 20, 17, 8]), a.f.b([29, 30, 28, 40, 29,
                    30, 20, 17, 8
                ]), a.f.b([30, 39, 28, 40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45]), a.f.b([29, 30, 28, 40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45])]
            };
            a.f.aq = function(b) {
                if (!0 !== a.f.ar) {
                    a.f.ar = !0;
                    var d = a.f.ao(b);
                    a.b.dg() && a.f.ak(b);
                    a.f.y();
                    if (d) {
                        var f = function() {
                                var c = {};
                                c.qr = a.f.x();
                                c.qo = a.f.w;
                                a.v.b(36, b, c)
                            },
                            g = a.d.g.document;
                        a.p.c(g, c, function(b) {
                            a.p.d(g, c, null, "mswe");
                            a.f.x = function() {
                                return 1
                            };
                            f()
                        }, "mswe");
                        a.p.c(g, e, function(b) {
                            a.p.d(g, e, null, "mswer");
                            a.f.x = function() {
                                return 1
                            };
                            f()
                        }, "mswer")
                    }
                }
            };
            a.f.as = function() {
                if (a.f.ai) {
                    for (var b =
                            0, c = a.f.ai.length; b < c; b++) try {
                        a.f.ai[b].parentNode && a.f.ai[b].parentNode.removeChild(a.f.ai[b])
                    } catch (d) {}
                    a.f.ai = null
                }
            };
            a.f.a = function() {
                var b = a.d.g.document;
                a.p.d(b, c, null, "mswe");
                a.p.d(b, e, null, "mswer");
                a.f.as()
            };
            a.f.ab = function(b) {
                return 0 == a.f.ad && !1 === a.ar.a(b)
            };
            a.f.at = function() {
                return !1
            };
            a.f.au = function() {
                var a;
                a = r && r.sinh ? 1E10 * (r.sinh(r.sinh(r.sinh(r.sinh(1)))) - 3.81278003) : -2;
                a = a.toString();
                return 0 === a.indexOf("7.600") ? a.substring(5) : -1
            };
            var f = function() {
                function b(a, c, d) {
                    this.pixel = a;
                    this.opts =
                        c;
                    this.adNum = d
                }

                function c() {
                    a.b.forEach(d, function(b, c) {
                        a.f.z(b.pixel, b.opts, b.adNum) && delete d[c]
                    })
                }
                var d = {};
                a.m.a.azsx("hiddenAds:updated", c);
                return {
                    add: function(f, e, g) {
                        f = new b(f, e, g);
                        e = a.b.cq();
                        d[e] = f;
                        c()
                    },
                    checkPixels: c
                }
            }();
            a.m.a.azsx("allLocalAdsKilled", a.f.a, {
                once: !0
            })
        })(m);
        (function(a) {
            function l() {
                if (!a.d.j() || !a.d.cv()) return !1;
                var b = b || 1 == a.d.ee("isNative") || !!document.getElementById("mianahwvc");
                return b
            }

            function d(a) {
                a.left = a.x;
                a.top = a.y;
                a.right = a.x + a.w;
                a.bottom = a.y + a.h;
                return a
            }

            function g(a) {
                a.x =
                    r.round(a.x);
                a.y = r.round(a.y);
                a.w = r.round(a.w);
                a.h = r.round(a.h);
                return a
            }

            function h(a, b) {
                a.x *= b;
                a.y *= b;
                a.w *= b;
                a.h *= b;
                return a
            }

            function k(b) {
                v || (v = !0, a.d.ea());
                q._i_.m = b;
                m = b.ma && 1 == parseInt(b.ma) || m;
                a.m.a.zaxs("metadataReady")
            }

            function c(a) {
                try {
                    return q._i_.r[a.MMAK_ID]
                } catch (b) {
                    return null
                }
            }

            function e(a) {
                q._i_.r[a.MMAK_ID] = {}
            }

            function b(b, f) {
                v || (v = !0, a.d.ea());
                var k;
                b: {
                    for (k in b)
                        if (b.hasOwnProperty(k)) {
                            k = !1;
                            break b
                        }
                    k = !0
                }
                if (k) e(f);
                else {
                    k = c(f);
                    var z = 1;
                    if (b.view) {
                        var l = b.view.h,
                            t = a.d.g.innerHeight;
                        l && t || (l = b.view.w, t = a.d.g.innerHeight);
                        l && t && (z = t / l);
                        a.n.e(b.view)
                    }
                    k.s = d(g(h(b.screen, z)));
                    k.v = d(g(h(b.view, z)));
                    k.vv = d(g(h(b.visible, z)));
                    "undefined" !== typeof b.maybe && (k.va = d(g(h(b.maybe, z))));
                    "undefined" !== typeof b.dv && (z = w, w = b.dv, z !== w && a.m.a.zaxs("deviceVolumeChange", f));
                    "undefined" !== typeof b.visiblePercent && (k.isHidden = b.isHidden, k.opacity = b.opacity, k.isAttached = b.isAttached, k.visiblePercent = b.visiblePercent, k.coveredPercent = b.coveredPercent);
                    k.f = b.inFocus;
                    G[f.MMAK_ID] ? B || "undefined" !== typeof b.inFocus &&
                        !b.inFocus || !a.focus.pageIsVisible() || a.n.n(k.v, G[f.MMAK_ID]) || (q.swde.zaxs("scroll"), B = !0) : G[f.MMAK_ID] = k.v;
                    k.uts = +new n
                }
            }

            function f() {
                G = {};
                B = !1
            }

            function t(a) {
                return 0 == a || 1 == a ? a : 2
            }

            function u(b) {
                var c = {
                    truncated: 0
                };
                a.b.forEach(y, function(a) {
                    var d = a[0];
                    a = a[1];
                    b.hasOwnProperty(d) && ("string" === typeof b[d] ? (c[a] = b[d].substring(0, "buildFp" === d ? 50 : 20), c[a].length !== b[d].length && c.truncated++) : c[a] = b[d])
                });
                return c
            }
            a.t = {};
            var y = [
                    ["source", "a"],
                    ["carrier", "b"],
                    ["sim", "c"],
                    ["phone", "d"],
                    ["buildFp", "e"],
                    ["buildModel",
                        "f"
                    ],
                    ["buildMfg", "g"],
                    ["buildBrand", "h"],
                    ["buildProduct", "i"],
                    ["buildTags", "j"],
                    ["f1", "k"],
                    ["f2", "l"],
                    ["f3", "m"],
                    ["f4", "n"]
                ],
                p = a.d.ax + "._i_",
                w, m = !1;
            (function(a) {
                function b(c) {
                    MAX_RETRIES = 10;
                    PROTOCOL = "moat-bridge:";
                    BRIDGE_TYPE = "iframe";
                    this.ad = c;
                    this.bridgeType = BRIDGE_TYPE;
                    this.loopId = "";
                    this.iframeEl = null;
                    this.fnStates = {};
                    this.fnTries = {};
                    this.fnStateTimes = {};
                    this.init = function() {
                        this.createIframe()
                    };
                    this.createIframe = function() {
                        var b = a.d.g.document,
                            c = b.createElement("IFRAME");
                        c.setAttribute("src",
                            "about:blank#Moat");
                        c.style.display = "none";
                        c.id = this.ad.MMAK_ID;
                        b.documentElement.appendChild(c);
                        this.iframeEl = c
                    };
                    this.execute = function(a, b, d) {
                        if (0 === this.fnStates[b]) {
                            var f = this.fnTries[b];
                            if (f && f > MAX_RETRIES) return !1
                        }
                        f = this.fnStateTimes[b];
                        if (300 > (new n).getTime() - f || !a || b && !d || !q._i_.b[c.MMAK_ID]) return !1;
                        f = "";
                        b && (f = e + "." + this.ad.MMAK_ID + "." + b);
                        var g = this;
                        f && !q._i_[b] && (q._i_.b[c.MMAK_ID][b] = function(c) {
                            g.ackAndRun(a, d, b, c)
                        });
                        b && (this.fnStates[b] = 0, this.fnTries[b] || (this.fnTries[b] = 0), this.fnTries[b] +=
                            1, this.fnStateTimes[b] = (new n).getTime());
                        f = PROTOCOL + a + ":" + (f || "");
                        this.iframeEl.setAttribute("src", "about:blank");
                        this.iframeEl.setAttribute("src", f);
                        return !0
                    };
                    this.subscribe = function(b, c, d, f, e) {
                        var g = (new n).getTime(),
                            h = function(a) {
                                return function() {
                                    a.execute(b, d, c)
                                }
                            }(this);
                        if (f) this.loopId = g, a.p.g(h, null, e, this.loopId);
                        else if (0 < e) a.p.f(h, e);
                        else try {
                            h()
                        } catch (k) {}
                    };
                    this.ackAndRun = function(a, b, c, d) {
                        this.fnStates[c] = 1;
                        this.fnStateTimes[c] = (new n).getTime();
                        this.fnTries[c] = 0;
                        if (!b) return !0;
                        try {
                            var f =
                                b(d, this.ad);
                            return "undefined" == typeof f ? "" : f
                        } catch (e) {
                            return e.message || "error"
                        }
                    };
                    this.destroy = function() {
                        a.p.i(this.loopId);
                        delete q._i_.b[c.MMAK_ID];
                        this.iframeEl.parentNode.removeChild(this.iframeEl);
                        delete g[this.ad.MMAK_ID]
                    }
                }

                function c(b) {
                    this.bridgeType = BRIDGE_TYPE = "postMessage";
                    this.ad = b;
                    this.execute = function(a, b, c) {
                        if (!a || b && !c) return !1;
                        var d = "";
                        b && (d = e + "." + b);
                        var f = this;
                        d && !q._i_[b] && (q._i_.b[b] = function(d) {
                            f.ackAndRun(a, c, b, d)
                        });
                        window.webkit.messageHandlers.__z_moat_bridge__.postMessage("moat-bridge:" +
                            a + ":" + (d || ""));
                        return !0
                    };
                    this.subscribe = function(b, c, d, f, e) {
                        var g = (new n).getTime(),
                            h = function(a) {
                                return function() {
                                    a.execute(b, d, c)
                                }
                            }(this);
                        if (f) this.loopId = g, a.p.g(h, null, e, this.loopId);
                        else if (0 < e) a.p.f(h, e);
                        else try {
                            h()
                        } catch (k) {}
                    };
                    this.ackAndRun = function(a, b, c, d) {
                        if (!b) return !0;
                        try {
                            var f = b(d, this.ad);
                            return "undefined" == typeof f ? "" : f
                        } catch (e) {
                            return e.message || "error"
                        }
                    };
                    this.destroy = function() {
                        a.p.i(this.loopId);
                        delete q._i_.b[b.MMAK_ID];
                        delete g[this.ad.MMAK_ID]
                    }
                }

                function d(b) {
                    this.bridgeType =
                        BRIDGE_TYPE = "oneway";
                    this.ad = b;
                    this.subscribe = function(b, c, d, f, e) {
                        d = a.d.ec();
                        var g = this;
                        switch (b) {
                            case "gvr":
                                a.m.a.azsx("adKilled", function(a) {
                                    g.ad === a && g.destroy()
                                });
                                d.lgpr(function(a) {
                                    c(a, g.ad)
                                }, this.ad.MMAK_ID);
                                break;
                            case "gmd":
                                c(a.d.ed())
                        }
                    };
                    this.destroy = function() {
                        var b = this.ad.MMAK_ID;
                        a.d.ec().xrnk(b);
                        delete g[b]
                    }
                }

                function f(a) {
                    return g[a.MMAK_ID]
                }
                var e = p + ".b",
                    g = {};
                a.t.h = {};
                a.t.h.a = function(e) {
                    q._i_.b || (q._i_.b = {});
                    q._i_.b[e.MMAK_ID] = {};
                    if (a.d.g.webkit && a.d.g.webkit.messageHandlers && a.d.g.webkit.messageHandlers.__z_moat_bridge__) bridge =
                        f(e) ? !1 : new c(e);
                    else if (a.d.en()) bridge = f(e) ? !1 : new d(e);
                    else if (a.d.g.__zMoatInit__)
                        if (f(e)) bridge = !1;
                        else {
                            var h = new b(e);
                            h.init();
                            bridge = h
                        }
                    bridge && (g[e.MMAK_ID] = bridge);
                    return bridge
                };
                a.t.h.b = f;
                a.t.h.c = function(a) {
                    return (a = f(a)) ? a.bridgeType : null
                }
            })(a);
            var v = !1,
                z = !1,
                G = {},
                B = !1;
            a.t.i = function(c) {
                if (a.d.j() && !a.t.h.b(c)) {
                    a.u.g.a.push(f);
                    var d = a.d.ao();
                    if (d && d.isInApp) {
                        q._i_ || (q._i_ = {});
                        q._i_.r || (q._i_.r = {});
                        e(c);
                        var g = function(c) {
                            return function() {
                                var d = a.t.h.a(c);
                                d && (d.subscribe("gvr", b, "u", !0, 100),
                                    d.subscribe("gmd", k, "x", !1, 150))
                            }
                        }(c);
                        c = "sml_" + (new n).getTime();
                        a.p.g(function(b) {
                            return a.d.cs() ? (g(), !1) : !0
                        }, {
                            initBridge: g
                        }, 100, c)
                    }
                }
            };
            a.t.f = function(b, d) {
                b.viewabilityMethod.strict = 2;
                var f = c(b),
                    g = a.n.g(),
                    h = f && "undefined" !== typeof f.f && 1 === f.f,
                    k;
                f ? (k = f.uts) ? (k = 500 >= +new n - k) || e(b) : k = !1 : k = !1;
                if (!k || !h) return g;
                h = f.v;
                if (!h) return g;
                k = h.w * h.h;
                var t, u;
                "undefined" === typeof f.visiblePercent || a.b.m() ? (t = f.vv, u = "ESP" === a.d.ef() ? !0 : !1, u || (u = f.va, t = t || u ? t && !u ? t : u && !t ? u : !t.w || !t.h || u.w && u.h ? !u.w || !u.h || t.w &&
                    t.h ? t.w * t.h >= u.w * u.h ? t : u : u : t : !1), u = t.w * t.h / k) : (t = f.vv, u = f.visiblePercent);
                if (!t) return g;
                var w = f.s,
                    g = k >= .95 * w.w * w.h;
                k = l();
                g = a.n.i(b, d, u, k, g);
                f.vjs = g.jsPercv;
                0 < g.percv && (z = !0);
                f = a.n.j(b, t, h, w, k);
                a.n.k(b.zr, f, g, k) && a.m.a.zaxs("rectsAvailable", b.zr, f.elementRect, f.visibleRect);
                return g
            };
            a.t.e = function() {
                return z
            };
            a.t.d = function() {
                return v
            };
            a.t.a = l;
            a.t.j = function() {
                var a = q && q._i_ && q._i_.r;
                if ("undefined" === typeof a) return !0;
                for (var b in a)
                    if (a.hasOwnProperty(b) && (rects = a[b]) && "undefined" !== typeof rects.f &&
                        1 === rects.f) return !1;
                return !0
            };
            a.t.b = function() {
                return q && q._i_ && q._i_.m
            };
            a.t.c = function(b) {
                delete q._i_.r[b.MMAK_ID];
                (b = a.t.h.b(b)) && b.destroy()
            };
            a.t.k = function(b, d, f) {
                (new n).getTime();
                d = function(a, d) {
                    var e = {
                            Screen: "za",
                            View: "zb",
                            Visible: "zc",
                            VisiblePctNative: "zd",
                            VisiblePctJS: "ze"
                        },
                        g = b ? c(b) : null;
                    g && a in e && (g = g[d], formatted = "object" === typeof g ? [g.x, g.y, g.w, g.h].join(":") : g, "undefined" !== typeof formatted && (f[e[a]] = formatted))
                };
                var e = b ? c(b) : null;
                e && "undefined" !== typeof e.f && (d("Screen", "s"), d("View",
                    "v"), d("Visible", "vv"), d("VisiblePctNative", "visiblePercent"), d("VisiblePctJS", "vjs"), (e = b ? c(b) : null) && "undefined" !== typeof e.f && (f.zf = [e.isAttached, e.f, e.isHidden, t(e.opacity)].join(":")), d = a.d.ee("metadata"), "undefined" !== typeof d && d.hasOwnProperty("source") && (f.zMoatDR = a.f.j(JSON.stringify(u(d)))))
            };
            a.t.l = function(b) {
                for (var c = [
                            ["namespace", "zMoatMMAKns"],
                            ["appName", "zMoatMMAKan"],
                            ["appId", "zMoatMMAKai"],
                            ["versionHash", "zMoatMMAKv"],
                            ["deviceOS", "zMoatMMAKOSv"],
                            ["version", "zMoatMMAKvs"]
                        ], d = 0, f =
                        c.length; d < f; d++) {
                    var e = c[d],
                        g = a.d.ee(e[0]);
                    g && (b[e[1]] = g)
                }
                b.zMoatMMAKin = Number(a.d.eb())
            };
            a.t.g = function() {
                var b = function() {
                    if (!a.d.cw()) {
                        a.n.l(1);
                        var b, c = a.d.ec();
                        c ? a.d.em() ? (b = c.vgft() && !c.lkpu(), b = a.d.eo() || b) : b = !0 : b = !0;
                        b ? a.m.a.zaxs("trackingReady") : c.bpsy(function() {
                            a.m.a.zaxs("trackingReady")
                        })
                    }
                };
                if (a.d.cs()) b();
                else {
                    var c = "sml_" + (new n).getTime();
                    a.p.g(function(c) {
                        return a.d.cw() ? !1 : a.d.cs() ? (b(), !1) : !0
                    }, {
                        setupImpressionCallback: b
                    }, 100, c)
                }
            };
            a.t.m = function() {
                return w
            }
        })(m);
        (function(a) {
            function l(b) {
                if ("object" ===
                    typeof b) {
                    var c;
                    a.b.forEach(b, function(a, b) {
                        if (/1\.+/.exec(b)) {
                            var d = a.prototype;
                            if ("object" === typeof d && "function" === typeof d.isSupported && "function" === typeof d.registerSessionObserver && "function" === typeof d.addEventListener && "function" === typeof d.sendUrl) return c = {}, c[b] = a, !1
                        }
                    });
                    return c
                }
            }

            function d() {
                var b;
                b = F ? [l(this.OmidVerificationClient), a.d.g] : a.b.cs("OmidVerificationClient", !1, !0, l);
                var c = b[0];
                b = b[1];
                c || b == a.d.g || (c = l(a.d.g.OmidVerificationClient));
                return c
            }

            function g() {
                if (!L) {
                    var b = d();
                    b && (O = Object.keys(b)[0], L = new b[O], R && a.q.h())
                }
            }

            function h(a) {
                return function(b) {
                    oa.push(b);
                    U || ("undefined" !== typeof la || "sessionStart" !== b.type) && b.adSessionId !== la || a(b)
                }
            }

            function k(a) {
                return h(function(b) {
                    T || !e() ? a(b) : ja.push(b)
                })
            }

            function c(a) {
                var b = r.round(a.x),
                    c = r.round(a.y),
                    d = r.round(a.width),
                    f = r.round(a.height);
                return a ? {
                    x: b,
                    left: b,
                    y: c,
                    top: c,
                    w: d,
                    width: d,
                    h: f,
                    height: f,
                    right: b + d,
                    bottom: c + f
                } : void 0
            }

            function e() {
                return "undefined" !== typeof ya && "native" === ya
            }

            function b() {
                var b = [a.f.b([7, 40, 45, 44,
                    45, 26, 43
                ]), a.f.b([6, 40, 40, 32, 37, 30]), a.f.b([6, 40, 40, 32, 37, 30, 53]), a.f.b([1, 50, 45, 30, 29, 26, 39, 28, 30])];
                return S && a.b.aj(b, S.partnerName) ? !0 : !1
            }

            function f() {
                if (!a.d.cv() && ha && Y && S && A)
                    if (b()) a.e.g(4);
                    else {
                        var c = "https://mb.moatads.com/a.js?yd=" + S.partnerName + ("&ye=" + S.partnerVersion) + ("&yh=" + A.os) + ("&yb=" + Z.libraryVersion) + ("&yi=" + A.deviceType);
                        a.e.g(1);
                        K && K.downloadJavaScriptResource && "function" === typeof K.downloadJavaScriptResource ? K.downloadJavaScriptResource(c, t("native"), u) : (a.as.a("omwl", "om",
                            c), a.as.b("omwl", t(), u))
                    }
            }

            function t(b) {
                return function(c) {
                    var d = c;
                    "native" === b && (d = JSON.parse(c));
                    1 === d.om || "1" === d.om ? (a.e.h(), a.e.g(2)) : a.e.g(3)
                }
            }

            function u() {}

            function y(b) {
                b && (b.x = 0, b.y = 0, b = c(b), a.d.c() && a.a.a(window) && "undefined" === typeof E && (window.screen.width = b.w, window.screen.height = b.h, window.screen.availWidth = b.w, window.screen.availHeight = b.h, a.d.v()));
                E = b
            }

            function p(b) {
                var c = !1,
                    d = !1,
                    f = !1;
                a.b.forEach(b, function(a) {
                    "hidden" === a ? c = !0 : "backgrounded" === a ? d = !0 : "notFound" === a && (f = !0)
                });
                ga = c;
                P = d;
                da = f
            }

            function w(b) {
                b.onScreenGeometry ? (aa = b.percentageInView / 100, M = c(b.onScreenGeometry)) : (M = void 0, aa = 0);
                b.reasons && p(b.reasons);
                if (b.geometry) {
                    var d = I;
                    I = c(b.geometry);
                    a.n.e(I);
                    d && I && !P && 0 != d.w && 0 != d.h && 0 != I.w && 0 != I.h && !a.n.n(d, I) && q.swde.zaxs("scroll")
                }
                V = "undefined" !== typeof b.measuringElement ? b.measuringElement : !1
            }

            function m(b) {
                if ("undefined" !== typeof b && "undefined" !== typeof b.adView) {
                    y(b.viewport);
                    w(b.adView);
                    var c = function(a) {
                        return "(" + [a.x, a.y, a.width, a.height].join() + ")"
                    };
                    b = (b = b.adView.onScreenGeometry) &&
                        b.obstructions;
                    if ("undefined" !== typeof b && 0 != b.length) {
                        var d = a.b.bu(c, b);
                        b = c(E);
                        c = c(I);
                        d = "[" + d.join(",") + "]";
                        (new Image).src = "https://d3.moatads.com/?t=" + +new n + "&vp=" + b + "&av=" + c + "&o=" + d
                    }
                }
            }

            function v() {
                !x || x.ep || x.unloadPixelSent || (x.preventTryFindingAdAgain = !0, a.u.a(x))
            }

            function z(b) {
                if ("sessionStart" === b.type) try {
                    la = b.adSessionId;
                    var c;
                    try {
                        c = JSON.parse(b.data.verificationParameters)
                    } catch (d) {}
                    if (c && "object" === typeof c && !Array.isArray(c)) {
                        var e = "moatClientLevel1 moatClientLevel2 moatClientLevel3 moatClientLevel4 moatClientSlicer1 moatClientSlicer2".split(" ");
                        for (key in c)
                            if (a.b.aj(e, key) || 0 === key.lastIndexOf("zMoat", 0)) {
                                pa = c;
                                break
                            }
                    }
                    var g = b.data.context;
                    ya = g.adSessionType;
                    S = g.omidNativeInfo;
                    qa = g.omidJsInfo;
                    Z = g.app;
                    if ("undefined" !== typeof g.deviceInfo) {
                        var h = g.deviceInfo;
                        "iPhone OS" === h.os && (h.os = "iOS");
                        A = h
                    }
                    ha = !0;
                    f()
                } catch (d) {
                    U = !0
                } else "sessionError" !== b.type && "sessionFinish" === b.type && v()
            }

            function G(c) {
                if ("undefined" === typeof H) {
                    try {
                        H = c.timestamp, "undefined" !== typeof c.data && e() && m(c.data)
                    } catch (d) {
                        U = !0, v()
                    }
                    if (!U) a: if (!a.d.cv()) {
                        if (A && A.os && "ANDROID" ===
                            A.os.toUpperCase() && (c = [a.f.b([28, 40, 38, 72, 28, 39, 39, 72, 38, 40, 27, 34, 37, 30, 72, 26, 39, 29, 43, 40, 34, 29, 72, 41, 33, 40, 39, 30]), a.f.b([28, 40, 38, 72, 28, 39, 39, 72, 28, 39, 39, 38, 40, 39, 30, 50]), a.f.b([28, 40, 38, 72, 27, 37, 30, 26, 28, 33, 30, 43, 43, 30, 41, 40, 43, 45, 72, 26, 39, 29, 43, 40, 34, 29, 72, 45, 30, 26, 38, 44, 45, 43, 30, 26, 38]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 41, 32, 26, 28, 33, 26, 38, 41, 54, 52, 53, 55]), a.f.b([28, 40, 38, 72, 26, 29, 46, 37, 45, 44, 48, 34, 38, 72, 47, 34, 29, 30, 40, 26, 41, 41, 72, 26, 39, 29, 43, 40, 34, 29]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39,
                                30, 43, 72, 28, 39, 47, 34, 29, 30, 40, 26, 41, 41
                            ]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 26, 39, 29, 43, 40, 34, 29, 72, 39, 28, 26, 26])], Z && a.b.aj(c, Z.appId))) break a;
                        a.n.l(2);
                        b() || a.e.f();
                        a.m.a.zaxs("trackingReady")
                    }
                }
            }

            function B(a) {
                m(a.data)
            }

            function C() {
                T = !0;
                var b = ja;
                ja = [];
                var c = H,
                    d = c;
                "undefined" !== typeof d && (b.sort(function(a, b) {
                        return a.timestamp - b.timestamp
                    }), a.b.forEach(b, function(b) {
                        var f = b.timestamp,
                            e = b.type,
                            g = f >= c;
                        g && (a.o.i(x, 0, new n(d)), a.o.i(x, f - d, new n(f)));
                        "geometryChange" === e && B(b);
                        g && (d = f)
                    }), b = new n,
                    a.o.i(x, b - d, b))
            }

            function J() {
                for (var a = "", b = ["mo", "at.", "co", "m-"], c = 0, d = b.length; c < d; c++) a += b[c];
                return a + "turner763610601596"
            }
            a.q = {};
            var x, F = !1,
                K, F = a.d.c();
            K = a.d.bf();
            var R = !1,
                L, O, W = !1,
                T = !1,
                U = !1,
                oa = [],
                ja = [],
                ka, N, la, pa = {},
                ya, S, qa, Z, A, H, E, I, M, V = !1,
                aa, fa, ca, ga = !1,
                P = !1,
                da = !1,
                ha = !1,
                Y = !1,
                ea = !1,
                ba = !1;
            a.q.j = function(b) {
                x = b;
                Y = !0;
                f();
                e() && a.p.f(C, 0)
            };
            a.q.f = e;
            a.q.k = function() {
                return !1
            };
            a.q.g = function(b, c) {
                var d = !1;
                if (!(L && L.isSupported && L.isSupported())) d = !0;
                else if ("undefined" === typeof M) d = !0;
                else if (P ||
                    da) d = !0;
                if (d) return ca = 0, a.n.g();
                var d = ba,
                    f = result = a.n.i(b, c, aa, d, M.w * M.h >= .95 * E.w * E.h);
                if ("strict" === a.o.b(b.zr)) {
                    var e = a.n.j(b, M, I, E, d);
                    a.n.k(b.zr, e, f, d) && a.m.a.zaxs("rectsAvailable", b.zr, e.elementRect, e.visibleRect)
                }
                fa = result.jsPercv;
                ca = result.percv;
                0 < ca && (ea = !0);
                return result
            };
            a.q.c = function() {
                return e() ? !0 : !ba && a.d.e
            };
            a.q.l = function() {
                return ea
            };
            a.q.m = function(a) {
                var b = function(b, c) {
                    var d = {
                        Screen: "za",
                        View: "zb",
                        Visible: "zc",
                        SDKPct: "zd",
                        JSPct: "ze"
                    };
                    b in d && (formatted = "object" === typeof c && null !==
                        c ? [c.x, c.y, c.w, c.h].join(":") : c, "undefined" !== typeof formatted && null !== formatted && (a[d[b]] = formatted))
                };
                b("Screen", E);
                b("View", I);
                b("Visible", M);
                b("SDKPct", aa);
                b("JSPct", fa);
                "undefined" !== typeof M && (a.zf = [Number(!da), Number(!P), Number(ga), "-"].join(":"))
            };
            a.q.b = function(a) {
                var b = function(b, c) {
                    var d = {
                        AppId: "ya",
                        SdkVer: "yb",
                        JsVer: "yc",
                        IntePartName: "yd",
                        IntePartVer: "ye",
                        VeriClientVer: "yf",
                        VerLoadTime: "yg",
                        DeviceType: "yi",
                        OS: "yh",
                        OSVersion: "yj",
                        AdType: "yk",
                        ServiceJSMeasurement: "yl"
                    };
                    "undefined" !== typeof c &&
                        (a[d[b]] = c)
                };
                try {
                    b("AppId", Z.appId), b("SdkVer", Z.libraryVersion), b("JsVer", qa.serviceVersion), b("IntePartName", S.partnerName), b("IntePartVer", S.partnerVersion), b("VeriClientVer", O), b("VerLoadTime", N), "undefined" !== typeof A && (b("DeviceType", A.deviceType), b("OS", A.os), b("OSVersion", A.osVersion)), b("AdType", ya), b("ServiceJSMeasurement", Number(V))
                } catch (c) {}
            };
            a.q.n = function() {
                return P
            };
            a.q.h = function() {
                W || (L && L.isSupported && L.isSupported() ? (L.registerSessionObserver(h(z), J()), L.addEventListener("impression",
                    h(G)), L.addEventListener("geometryChange", k(B)), W = !0) : R = !0)
            };
            a.q.o = function() {
                ba = !0;
                a.n.f(pa, "OMID-" + la, I)
            };
            a.q.a = function() {
                return "undefined" === typeof E ? null : {
                    width: E.w,
                    availWidth: E.w,
                    height: E.h,
                    availHeight: E.h
                }
            };
            var ma = function() {
                var a = document.body && document.body.innerHTML;
                return (null == a || "" === a) && 1 === document.scripts.length
            }();
            a.q.e = function() {
                var b = "undefined" !== typeof window && "undefined" !== typeof window.omid && "undefined" !== typeof window.omid.serviceWindow;
                return a.d.cw() && !e() && (ma || b)
            };
            a.q.d =
                function() {
                    var b = a.q.e(),
                        c = a.d.d() && a.d.dk() && !ba;
                    return b || c
                };
            a.q.i = function(a, b, c) {
                function d() {}

                function f() {}
                b = "function" === typeof b ? b : d;
                c = "function" === typeof c ? c : f;
                if ("undefined" === typeof L && "undefined" === typeof K) return !1;
                "undefined" !== typeof L ? L.sendUrl(a, b, c) : "undefined" !== typeof K && K.sendUrl(a, b, c);
                return !0
            };
            a.q.p = function(a, b) {
                var c = function(b) {
                    var c = {};
                    try {
                        c = JSON.parse(b)
                    } catch (d) {}
                    q.jsonp[a].cachedResponse = c;
                    q.swde.zaxs(a + "JsonpReady", c)
                };
                K && K.downloadJavaScriptResource && K.downloadJavaScriptResource(b,
                    c)
            };
            a.q.q = function() {
                0 == r.floor(50 * r.random()) && a.v.b(17, {
                    moatClientLevel1: Q
                })
            };
            a.q.r = function(a, b) {
                b && b.moatClientLevel1 === Q && (a.i = "OMID_DIAGNOSTIC_EVT_COUNT1", a.cm = 50)
            };
            if (a.d.d() && (F && (a.a.c(K.setTimeout, K.clearTimeout, K), a.a.d(K.setInterval, K.clearInterval, K), Image = new Proxy(function() {}, {
                    construct: function() {
                        return new Proxy({}, {
                            set: function(a, b, c) {
                                if ("src" === b) {
                                    var d = encodeURI(c),
                                        d = d.replace(/%5B/g, "["),
                                        d = d.replace(/%5D/g, "]");
                                    K.sendUrl(d)
                                }
                                a[b] = c
                            }
                        })
                    }
                })), g(), !L)) {
                var na = function() {
                    v()
                };
                ka = new n;
                try {
                    if (F) {
                        var ia = function(a) {
                            try {
                                eval(a), N = new n - ka, g()
                            } catch (b) {
                                v()
                            }
                        };
                        K.downloadJavaScriptResource("https://z.moatads.com/omidverificationclient/verification-client-v1.js", ia, na)
                    } else {
                        var ia = function() {
                                N = new n - ka;
                                g()
                            },
                            X = document.createElement("script");
                        X.src = "https://z.moatads.com/omidverificationclient/verification-client-v1.js";
                        X.onload = ia;
                        X.onerror = na;
                        X.type = "application/javascript";
                        a.b.bn().parentNode.appendChild(X)
                    }
                } catch (Sa) {
                    v()
                }
            }
        })(m);
        (function(a) {
            function l(b) {
                a.focus.pageIsPrerendered() ||
                    (a.m.a.zaxs("noLongerPreRendered"), a.p.d(document, t, l, "pr"))
            }

            function d(a) {
                "undefined" == typeof e && (e = a)
            }
            a.focus = {};
            var g = !1,
                h = a.d.be,
                h = -1 < h.indexOf("Safari") && -1 == h.indexOf("Chrome") && -1 == h.indexOf("Chromium") && !a.b.j(),
                k = a.b.o() && !a.b.j(),
                c = "undefined" !== typeof document.hasFocus,
                e, b = {
                    visible: 0,
                    hidden: 1,
                    prerender: 2
                },
                f, t, u, y;
            "undefined" !== typeof document.hidden ? (f = "hidden", t = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (f = "mozHidden", t = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ?
                (f = "msHidden", t = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (f = "webkitHidden", t = "webkitvisibilitychange");
            for (var p = ["v", "mozV", "msV", "webkitV"], w = 0; w < p.length; w++) {
                var m = p[w] + "isibilityState";
                if ("undefined" !== typeof document[m]) {
                    u = m;
                    break
                }
            }
            y = "undefined" !== typeof f;
            var v, z;
            "undefined" !== typeof window.requestAnimationFrame ? v = "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (v = "webkitRequestAnimationFrame");
            z = h && "string" == typeof v && !y;
            var G = (new n).getTime();
            z && function R() {
                G = (new n).getTime();
                if (!g) window[v](R)
            }();
            a.focus.focusStartTime = !1;
            var B = q.swde.azsx("focusStateChange", function(b) {
                b && (a.focus.focusStartTime = (new n).getTime(), q.swde.sxaz("focusStateChange", {
                    id: B,
                    priority: 1
                }))
            }, {
                priority: 1
            });
            a.focus.getFocusMethod = function() {
                return e
            };
            a.focus.visibilitychange = t;
            a.focus.setFocusListeners = function() {};
            a.focus.getQueryString = function(a) {
                a = {};
                a.em = e;
                F && (a.eo = 1);
                "undefined" != typeof u && (a.en = b[document[u]]);
                return a
            };
            a.focus.supportsPageVisAPI = function() {
                return y
            };
            var r = null;
            a.focus.checkFocus = function() {
                if (a.d.cw()) return !a.q.n();
                if (a.d.j() && a.d.cv() && a.t.j()) return d(0), !1;
                null === r && (r = a.d.dx());
                if (r) return d(3), !0;
                if (a.focus.supportsPageVisAPI()) return d(0), !document[f];
                if (z) return d(1), 100 > (new n).getTime() - G;
                if (k && c) return d(2), document.hasFocus();
                d(3);
                return !0
            };
            var J = !1;
            a.focus.pageIsVisible = function() {
                var b = a.focus.checkFocus();
                if (J != b && q && q.swde) try {
                    q.swde.zaxs("focusStateChange", b)
                } catch (c) {}
                return J = b
            };
            a.focus.pageIsPrerendered = function() {
                return "undefined" !==
                    typeof u ? "prerender" == document[u] : !1
            };
            a.focus.pageIsVisible();
            var x = !1;
            a.m.a.azsx("allLocalAdsKilled", function() {
                x && a.p.d(document, t, l, "pr");
                g = !0
            }, {
                once: !0
            });
            a.focus.pageIsPrerendered() && (a.p.c(document, t, l, "pr"), x = !0);
            var F = a.focus.pageIsPrerendered()
        })(m);
        (function(a) {
            a.au = {};
            a.au.a = function() {
                var l = a.av.a;
                a.av.b(["iframe[id^='ebBannerIFrame']", "$[id|ebBannerIFrame_([0-9]+_[0-9]+)]/.../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe'][id*='$0']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]]);
                a.av.b(["iframe[id^='ebBannerIFrame']", ".../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand", "setCollapseProxyInLoop"], !1, ".../body/#eyeDiv"]);
                a.av.b(["[id^='envIpolli'][name^='envIpolli']", "[id^='envIpolli'][name^='envIpolli']/$[id|envIpolli(\\d+)]/.../body/iframe[id='expIpolli$0_iframe']", ["runWithoutExpand", "expandUnloads", "noCollapseValidation"]]);
                a.av.b(["[id^='OriginPlatformAdUnit'][id$='inpage']", "$[id|OriginPlatformAdUnit-(\\d+)-inpage]/...../[id='OriginPlatformAdUnit-$0-overthepage']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]]);
                a.av.b(["#cac_adhere", "..../$[id|cmAdFrame__crisp-(.*)]/...../iframe#cacPanelIframe__crisp-$0", ["useIsFoundAdKnown", "findExpandInLoop", "setExpandProxyInLoop"], !1, !1, "iframe/=>/div[id='panelContainerDiv']"]);
                a.d.bs && a.d.bs() && "AdMarvel" == a.d.bs() && (a.av.b(["div#normal", "div#expanded", ["noInitialValidation"]]), a.av.b(["div#normal", "div#resized", ["noInitialValidation"]]));
                l.push({
                    onFindAd: function(d, g, h) {
                        if ((d = a.aw.a(["div.CP#collapsed/img"],
                                d)[0]) && a.b.be(d)) return a.av.c[g] = a.av.d(d, g, h), d
                    },
                    onLoop: function(d) {
                        var g = a.aw.a(["../../div.CP#expanded/img"], d.collapsedEl)[0];
                        g && !d.expandedEl && (d.expandedEl = g);
                        d.expandedIsOpen ? d.collapsedEl && a.b.bf(d.collapsedEl) && a.av.e(d, !0) : g && a.b.bf(g) && a.av.f(d.expandedEl, "div", null, d.adNum)
                    }
                }, {
                    onFindAd: function(d, g, h) {
                        if ((d = a.d.da ? a.aw.a(["div[id^='ptela_unitWrapper']"], d)[0] : a.aw.a(["div[id^='ptelaswfholder']"], d)[0]) && a.b.be(d)) return d
                    }
                }, {
                    collapsedRe: /ftdiv\d+/,
                    expandedRe: /ftin\d+/,
                    clipRe: /rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)/,
                    onFindAd: function(d, g, h) {
                        var k = a.av.g(d, this.collapsedRe);
                        d = a.av.g(d, this.expandedRe);
                        if (k && d) return a.av.c[g] = a.av.d(k, g, h), a.av.c[g].expandedEl = d, k
                    },
                    onLoop: function(d) {
                        var g = !1,
                            h = d.expandedEl.style.clip,
                            h = h && h.match(this.clipRe);
                        "0" === (h && h[4]) && (g = !0);
                        g && !d.expandedIsOpen ? a.av.f(d.expandedEl, "div", null, d.adNum) : !g && d.expandedIsOpen && a.av.e(d, !0)
                    }
                }, {
                    re: /(DIV)_(\d{6})_1_(\d{13})/,
                    onFindAd: function(d, g, h) {
                        if (d = a.av.g(d, this.re)) return a.av.c[g] = a.av.d(d, g, h), d
                    },
                    findExpanded: function(a) {
                        if (a = a.id.match(this.re))
                            for (var g = [a[3], Number(a[3]) + 1], h = 0; h < g.length; h++) {
                                var k = ["DIV", a[2], "2", g[h]].join("_");
                                if (k = document.getElementById(k)) return k
                            }
                    }
                }, {
                    re: /pr(flsh)([A-Z0-9]+)/,
                    onFindAd: function(d, g, h) {
                        if (a.d.da) {
                            var k = window.prBnr;
                            if (k && 1 === k.nodeType && a.b.be(k)) {
                                var c = d && d.innerHTML && d.innerHTML.match(/pradi([A-Z0-9]+)/);
                                if ((c = c && c[1]) && k.id && k.id.match(c) && (d = d.ownerDocument.getElementById("prf" + c))) return a.av.c[g] = a.av.d(k, g, h), a.av.c[g].uncle = d, k
                            }
                        }
                    },
                    onLoop: function(d) {
                        var g = !1,
                            h = d.uncle;
                        h && h.children && 1 === h.children.length &&
                            (h = h.children[0]) && 1 === h.children.length && (d.expandedEl = h, g = !0);
                        g && !d.expandedIsOpen ? a.av.f(d.expandedEl, "div", null, d.adNum) : !g && d.expandedIsOpen && a.av.e(d, !0)
                    }
                }, {
                    re: /pradi([A-Z0-9]+)/,
                    onFindAd: function(d, g, h) {
                        var k = d && d.innerHTML && d.innerHTML.match(this.re);
                        if (k) {
                            var c = d.ownerDocument || document;
                            d = c.getElementById("prf" + k[1]);
                            var e;
                            if (d) {
                                var b = d.getElementsByTagName("embed"),
                                    f = d.getElementsByTagName("object"),
                                    t = d.getElementsByTagName("div");
                                b && b[0] && a.b.bf(b[0]) ? e = b[0] : f && f[0] && a.b.bf(f[0]) ? e = f[0] :
                                    t && 0 < t.length && a.b.forEach(t, function(b) {
                                        b && "mal-ad-container" === b.id && a.b.be(b) && (e = b)
                                    });
                                !e && d.children && 1 === d.children.length && (b = d.children[0]) && 1 === b.children.length && a.b.be(b.children[0]) && (e = b.children[0])
                            }
                            e || (k = c.getElementById("prw" + k[1])) && a.b.be(k) && (e = k);
                            if (e) return a.av.c[g] = a.av.d(e, g, h), a.av.c[g].uncle = d, e
                        }
                    },
                    onNewAd: function(d, g) {
                        d && d.uncle && a.l.c(g, d.uncle)
                    }
                }, {
                    re: /VwP(\d+)Div/,
                    onFindAd: function(d, g, h) {
                        if (d = a.av.g(d, this.re)) {
                            var k = d.id.match(this.re);
                            if (k && (k = document.getElementById("VwP" +
                                    k[1] + "Div2")) && (k = k.getElementsByTagName("div"), 3 !== k.length && 1 === k.length)) {
                                k = k[0];
                                if (a.b.be(k)) return k;
                                a.av.c[g] = a.av.d(d, g, h);
                                return d
                            }
                        }
                    },
                    findExpanded: function(d) {
                        if ((d = d.id.match(this.re)) && (d = (d = document.getElementById("VwP" + d[1] + "Div2").getElementsByTagName("div")) && d[0]) && a.b.be(d)) return d
                    }
                });
                l.push({
                    onFindAd: function(d, g, h) {
                        if (a.aw.a(["script[src*='jetpackdigital']"], d)[0] && (d = a.d.g.document.getElementById("jpsuperheader")) && a.b.be(d)) {
                            var k = d.getElementsByTagName("object");
                            if (k && 1 === k.length &&
                                k[0].id && k[0].id.match("jp_embed")) return k = k[0], a.av.c[g] = a.av.d(d, g, h), a.av.c[g].expandedEl = k, a.av.c[g].bgCheck = k && k.parentNode && k.parentNode.parentNode, d
                        }
                    },
                    onLoop: function(d) {
                        var g = !1;
                        d.bgCheck.className && d.bgCheck.className.match("background1") && (g = !0);
                        g && !d.expandedIsOpen ? (a.av.f(d.expandedEl, null, null, d.adNum), a.l.b(x[d.adNum], stage.bgCheck)) : !g && d.expandedIsOpen && a.av.e(d, !0)
                    }
                });
                l.push({
                    isFoundAdKnown: function(d, g, h) {
                        if (d.className && d.className.match("jpplatform")) var k = a.d.g.document.getElementById("jp_overlay"),
                            c = !0;
                        else d.parentNode && d.parentNode.id && "jpd_expfooter" === d.parentNode.id && (k = a.d.g.document.getElementById("jpd_expfooter_overlay"), c = !1);
                        if (k) {
                            var e = a.b.getElementsByClassName("jppanel", "DIV", k);
                            if (e && 0 < e.length) return d = a.av.d(d, g, h), a.av.c[g] = d, a.av.c[g].overlay = k, a.av.c[g].panels = e, a.av.c[g].ignoreVideo = c, !0
                        }
                    },
                    onLoop: function(d) {
                        var g, h = !1;
                        if (d.overlay && d.overlay.style && "-9999px" !== d.overlay.style.top) {
                            if (!d.expandedEl || d.expandedEl && d.expandedEl.style && "-9999px" === d.expandedEl.style.top) d.ignoreVideo ?
                                a.b.forEach(d.panels, function(a) {
                                    if (a && a.style && "-9999px" !== a.style.top && 0 === a.getElementsByTagName("video").length) return g = a, !1
                                }) : a.b.forEach(d.panels, function(a) {
                                    if (a && a.style && "-9999px" !== a.style.top) return g = a, !1
                                }), g && a.b.be(g) && (d.expandedEl = g);
                            d.expandedEl && (h = !0)
                        }
                        h && !d.expandedIsOpen ? a.av.f(d.expandedEl, "div", null, d.adNum) : !h && d.expandedIsOpen && a.av.e(d, !0)
                    }
                });
                l.push({
                    isFoundAdKnown: function(d, g, h) {
                        var k = x[g];
                        if (k.adformCollapsedEl && k.adformExpandedEl) return d = a.av.d(d, g, h), a.av.c[g] = d, a.av.c[g].expandedEl =
                            k.adformExpandedEl, a.av.c[g].hiddenClassRx = /(^| )adform-adbox-hidden($| )/, !0
                    },
                    onLoop: function(d) {
                        var g = !1;
                        d.hiddenClassRx.test(d.collapsedEl.className) && (g = !0);
                        g && !d.expandedIsOpen ? a.av.f(d.expandedEl, null, null, d.adNum) : !g && d.expandedIsOpen && a.av.e(d, !0)
                    }
                });
                l.push({
                    findCollapsedAd: function(d) {
                        if (!d) return !1;
                        if (d = d.getElementById("eyeDiv")) {
                            var g, h = /ebAd\d+_contractedpanel_asset_.*/i;
                            if ((d = d.getElementsByTagName("object")) && 0 < d.length && (a.b.forEach(d, function(a) {
                                        if (a && a.id.match(h)) return g = a, !1
                                    }),
                                    g)) return g
                        }
                        return !1
                    },
                    findExpandedAd: function(d) {
                        if (!d) return !1;
                        if (d = d.getElementById("eyeDiv")) {
                            var g, h = /ebAd\d+_expandedpanel\d*_asset_.*/i;
                            if ((d = d.getElementsByTagName("object")) && 0 < d.length && (a.b.forEach(d, function(a) {
                                    if (a && a.id.match(h)) return g = a, !1
                                }), g)) return g
                        }
                        return !1
                    },
                    isAdExpanded: function(a) {
                        return this.findExpandedAd(a) ? !0 : !1
                    },
                    onFindAd: function(d, g, h) {
                        if (!d || !a.aw.a(["div#mmBillboardShim"], d)[0]) return !1;
                        var k = a.d.g && a.d.g.document;
                        d = this.findCollapsedAd(k);
                        k = this.findExpandedAd(k);
                        if (d ||
                            k) {
                            if (d && !d[A]) return h = a.av.d(d, g, h), a.av.c[g] = h, d;
                            if (k && a.b.be(k)) return h = a.av.d(k, g, h), a.av.c[g] = h, k
                        }
                    },
                    afterAdStateCreated: function(d) {
                        d.pageDocument = a.d.g.document;
                        d.collapseUnloads = !0
                    },
                    onLoop: function(d) {
                        var g = this.isAdExpanded(d.pageDocument);
                        !1 === d.expandedIsOpen && g ? (d.expandedEl = this.findExpandedAd(d.pageDocument), a.av.f(d.expandedEl, null, null, d.adNum)) : d.expandedIsOpen && 0 == g && (d.collapsedEl = this.findCollapsedAd(d.pageDocument), a.av.h(d.collapsedEl, null, null, d.adNum))
                    }
                });
                l.push({
                    findExpandedAd: function(d) {
                        if (!d) return !1;
                        if (d = d.getElementById("eyeDiv")) {
                            var g, h = /ebad\d+_panel\d*_asset_.*/i;
                            if ((d = d.getElementsByTagName("object")) && 0 < d.length && (a.b.forEach(d, function(a) {
                                    if (a && a.id.match(h)) return g = a, !1
                                }), g)) return g
                        }
                        return !1
                    },
                    isAdExpanded: function(a) {
                        return this.findExpandedAd(a) ? !0 : !1
                    },
                    isFoundAdKnown: function(d) {
                        if (!d) return !1;
                        if (d.id && d.id.match("ebRichBannerFlash")) {
                            d = E && E.parentNode && E.parentNode.getElementsByTagName("script");
                            var g = !1;
                            a.b.forEach(d, function(a) {
                                if (a && a.src && a.src.match("ebExpBanner")) return g = !0, !1
                            });
                            if (g) return !0
                        }
                    },
                    afterAdStateCreated: function(d) {
                        d.pageDocument = a.d.g.document
                    },
                    onLoop: function(d) {
                        var g = this.isAdExpanded(d.pageDocument);
                        !1 === d.expandedIsOpen && g ? (d.expandedEl = this.findExpandedAd(d.pageDocument), a.av.f(d.expandedEl, null, null, d.adNum)) : d.expandedIsOpen && 0 == g && a.av.e(d, !0)
                    }
                });
                l.push({
                    findExpandedAd: function(d) {
                        if (d.expandedEl) return d.expandedEl;
                        var g, h, k;
                        if ("banner" === d.expandType) {
                            h = a.ax.a(d.pageDoc.body, a.ax.b);
                            for (var c = h.length - 1; 0 <= c; c--)
                                if ((k = h[c].contentWindow) && k.runtimeParams &&
                                    k.runtimeParams.placementId && k.runtimeParams.clientTimestamp && k.runtimeParams.placementId === d.celtraId && k.runtimeParams.clientTimestamp === d.celtraTimestamp && (g = k.document && k.document.getElementById("celtra-modal")) && a.b.be(g)) return d.parentFrame || (d.parentFrame = a.k.g(g)), d.expandedEl = g
                        } else if ("video" === d.expandType) {
                            h = d.pageDoc.getElementsByTagName("video");
                            if (d.adWin && d.adWin.videoContext && d.adWin.videoContext.url) {
                                var e = d.adWin.videoContext.url;
                                a.b.forEach(h, function(a) {
                                    if (a && a.src === e) return g =
                                        a, !1
                                })
                            } else a.b.forEach(h, function(a) {
                                if (a && a.src && a.src.match && a.src.match("celtra")) return g = a, !1
                            });
                            if (g && a.b.be(g)) return d.expandedEl = g
                        }
                        return !1
                    },
                    isAdExpanded: function(d) {
                        var g = this.findExpandedAd(d);
                        return g ? (d = d.parentFrame || a.k.g(g)) && d.style && "none" === d.style.display ? !1 : !0 : !1
                    },
                    isFoundAdKnown: function(d, g, h) {
                        if (!d) return !1;
                        if (d.id && d.id.match("celtra") || d.className && d.className.match("celtra")) {
                            var k = d.ownerDocument && (d.ownerDocument.defaultView || d.ownerDocument.parentWindow);
                            if (k && k.ExpandableBanner &&
                                k.runtimeParams && k.runtimeParams.placementId && k.runtimeParams.clientTimestamp) return d = a.av.d(d, g, h), a.av.c[g] = d, a.av.c[g].expandType = "banner", a.av.c[g].pageDoc = a.d.g.document, a.av.c[g].celtraId = k.runtimeParams.placementId, a.av.c[g].celtraTimestamp = k.runtimeParams.clientTimestamp, !0;
                            if (k && k.VideoContext) return d = a.av.d(d, g, h), a.av.c[g] = d, a.av.c[g].expandType = "video", a.av.c[g].pageDoc = a.d.g.document, a.av.c[g].adWin = k, !0
                        }
                    },
                    onLoop: function(d) {
                        var g = this.isAdExpanded(d);
                        g && !d.expandedIsOpen ? a.av.f(d.expandedEl,
                            "div", null, d.adNum) : !g && d.expandedIsOpen && a.av.e(d, !0)
                    }
                })
            }
        })(m);
        (function(a) {
            function l(a, c, d) {
                this.collapsedEl = a;
                this.expandedEl = null;
                this.expandedIsOpen = !1;
                this.adNum = c;
                this.configIndex = d
            }

            function d(b, c) {
                var d = a.av.c[c];
                if (!0 !== d.findingExpanded) {
                    d.findingExpanded = !0;
                    var e = function() {
                            d.findingExpanded = !1
                        },
                        h = x[c].aa;
                    a.p.k(function() {
                        var d = b.findExpanded(h);
                        if (d) return a.ax.c(d, c, g, !1, e), !0
                    }, 5, 500, e)
                }
            }

            function g(b, c, d, e) {
                b[I] = e;
                b[A] = !0;
                c = x[e];
                e = a.av.c[e];
                e.expandedIsOpen = !0;
                a.b.bg(b, c);
                e.findingExpanded = !1;
                return !0
            }

            function h(b, c) {
                a.b.bg(b.collapsedEl, x[b.adNum], !0);
                b.expandedIsOpen = !1;
                c || (b.expandedEl && (b.expandedEl[I] = void 0, b.expandedEl[A] = void 0), b.expandedEl = null)
            }

            function k(b, c, d, e) {
                if (!b) return !1;
                b[I] = e;
                b[A] = !0;
                a.av.c[e].expandedIsOpen = !1;
                a.b.bg(b, x[e]);
                return !0
            }
            a.av = {};
            a.av.i = "bac";
            var c = [];
            a.av.a = c;
            a.av.c = {};
            a.av.d = function(a, c, d) {
                return new l(a, c, d)
            };
            a.av.j = function(b) {
                var c = a.av.c[b.zr];
                c && (c.collapsedEl = null, c.expandedEl = null, delete a.av.c[b.zr])
            };
            a.av.k = function(b) {
                return (b = a.av.c[b]) &&
                    !0 === b.expandedIsOpen
            };
            a.av.l = function(b) {
                return (b = a.av.c[b]) && !0 === b.collapseUnloads
            };
            a.av.m = function(b, f) {
                b = b.replace(/^on/, "");
                var e = a.av.c[f],
                    g = x[f];
                if (e) {
                    var l = c[e.configIndex];
                    if ("mousedown" === b && l.findExpanded && !e.expandedIsOpen) d(l, f);
                    else if ("mouseover" === b && l.onMouseOver && !e.expandedIsOpen) l.onMouseOver(e);
                    else if ("loop" === b && l.onLoop) l.onLoop(e);
                    else if ("departed" === b && e.expandedIsOpen) h(e);
                    else if ("collapseUnloads" === b && e.expandedIsOpen) k(e.collapsedEl, null, null, f);
                    else if ("newad" === b &&
                        l.onNewAd) l.onNewAd(e, g)
                }
            };
            a.av.n = function(b, d) {
                for (var e = 0; e < c.length; e++) {
                    var g = c[e],
                        h = g.onFindAd && g.onFindAd(b, d, e);
                    if (h) return a.m.a.azsx("adKilled", a.o.h, {
                        once: !0,
                        condition: function(a) {
                            return a.zr == d
                        }
                    }), a.av.c[d] && g.afterAdStateCreated && g.afterAdStateCreated(a.av.c[d]), Y = g.name, h
                }
            };
            a.av.o = function(b) {
                if (b !== a.av.i && b.aa && b.ao && !a.av.c[e])
                    for (var d = b.aa, e = b.ao.adNum, g = 0; g < c.length; g++) {
                        var h = c[g];
                        if (h && h.isFoundAdKnown && h.isFoundAdKnown(d, e, g)) {
                            a.m.a.azsx("adKilled", a.o.h, {
                                once: !0,
                                condition: function(a) {
                                    return a.zr ==
                                        b.zr
                                }
                            });
                            a.av.c[e] || (d = new l(d, e, g), a.av.c[e] = d);
                            h.afterAdStateCreated && h.afterAdStateCreated(a.av.c[e]);
                            Y = h.name;
                            break
                        }
                    }
            };
            a.av.p = function(a) {
                return "IMG" === a.tagName && a.id && a.id.match(/^pradi[0-9A-Z]+$/) && a.onload && "function" === typeof a.onload.toString && a.onload.toString().match(/shockwave/)
            };
            a.av.q = function(b, c) {
                a.av.k(c.zr) && (a.av.l(c.zr) ? a.av.m("collapseUnloads", c.zr) : a.av.m("departed", c.zr), b.shouldKillAd = !1)
            };
            var e = a.m.a.azsx("beforeAdKilled", a.av.q, {
                priority: 5
            });
            a.m.a.azsx("allLocalAdsKilled",
                function() {
                    a.m.a.sxaz("beforeAdKilled", {
                        id: e
                    })
                }, {
                    once: !0
                });
            a.av.b = function(b) {
                var d = [b[0]],
                    e = [b[1]],
                    u = b[2],
                    y = b[3] && [b[3]],
                    p = b[4] && [b[4]],
                    w = b[5] && [b[5]],
                    m = b[6],
                    v = b[7],
                    z = !1,
                    G = !1,
                    B = !1,
                    r = !1,
                    q = !1,
                    n = !1,
                    F = !1,
                    K, R = K = !1,
                    L = !1,
                    O = !1,
                    W = !1,
                    T = !1,
                    U = !1;
                u && (a.b.aj(u, "checkHiddenStyles") && (z = !0), a.b.aj(u, "noInitialValidation") && (G = !0), a.b.aj(u, "noLoopValidation") && (B = !0), a.b.aj(u, "noCollapseValidation") && (r = !0), a.b.aj(u, "runWithoutExpand") && (q = !0), a.b.aj(u, "collapseUnloads") && (n = !0), a.b.aj(u, "expandUnloads") && (F = !0),
                    a.b.aj(u, "useIsFoundAdKnown") && (K = !0), a.b.aj(u, "setCollapseProxyInLoop") && (R = !0), a.b.aj(u, "setExpandProxyInLoop") && (L = !0), a.b.aj(u, "findExpandInLoop") && (q = O = !0), a.b.aj(u, "addExpandTag") && (W = !0), a.b.aj(u, "setIframeAssetType") && (T = !0), a.b.aj(u, "preferCollapse") && (U = !0));
                c.push({
                    isFoundAdKnown: function(b, c, g) {
                        if (!K || !b) return !1;
                        if (m && v) {
                            if ((b = (b = x[c].ao) && b[m]) && !a.b.aj(v, b)) return !1
                        } else if (a.aw.a(d, b)[0]) {
                            if (q) return a.av.c[c] = new l(b, c, g), a.av.c[c].collapsedQuery = d, a.av.c[c].expandedQuery = e, a.av.c[c].searchableEl =
                                b, a.av.c[c].checkHiddenStyles = z, a.av.c[c].collapseUnloads = n, a.av.c[c].noLoopValidation = B, a.av.c[c].expandUnloads = F, a.av.c[c].expandedSelector = y, a.av.c[c].collapseProxyEl = p, a.av.c[c].expandProxyEl = w, a.av.c[c].collapseUnloads = n, a.av.c[c].setCollapseProxyInLoop = R, a.av.c[c].setExpandProxyInLoop = L, a.av.c[c].findExpandInLoop = O, a.av.c[c].addExpandTag = W, a.av.c[c].setIframeAssetType = T, a.av.c[c].preferCollapse = U, p && a.aw.b(p, x[c], b), !0;
                            var h = a.aw.a(e, b)[0];
                            if (h && (G || a.b.bf(h))) return a.av.c[c] = new l(b, c, g),
                                a.av.c[c].collapsedQuery = d, a.av.c[c].expandedQuery = e, a.av.c[c].searchableEl = b, a.av.c[c].checkHiddenStyles = z, a.av.c[c].collapseUnloads = n, a.av.c[c].noLoopValidation = B, a.av.c[c].expandUnloads = F, a.av.c[c].expandedSelector = y, a.av.c[c].expandedEl = h, a.av.c[c].collapseProxyEl = p, a.av.c[c].expandProxyEl = w, a.av.c[c].collapseUnloads = n, a.av.c[c].setCollapseProxyInLoop = R, a.av.c[c].setExpandProxyInLoop = L, a.av.c[c].findExpandInLoop = O, a.av.c[c].addExpandTag = W, a.av.c[c].setIframeAssetType = T, a.av.c[c].preferCollapse =
                                U, p && a.aw.b(p, x[c], b), w && a.aw.b(w, x[c], h), !0
                        }
                    },
                    onFindAd: function(b, c, g) {
                        if (K) return !1;
                        var h = a.aw.a(d, b)[0];
                        if (h && r && !h[A] || a.b.be(h)) {
                            if (q) return a.av.c[c] = new l(h, c, g), a.av.c[c].collapsedQuery = d, a.av.c[c].expandedQuery = e, a.av.c[c].searchableEl = b, a.av.c[c].checkHiddenStyles = z, a.av.c[c].collapseUnloads = n, a.av.c[c].noLoopValidation = B, a.av.c[c].expandUnloads = F, a.av.c[c].expandedSelector = y, a.av.c[c].collapseProxyEl = p, a.av.c[c].expandProxyEl = w, a.av.c[c].collapseUnloads = n, a.av.c[c].setCollapseProxyInLoop =
                                R, a.av.c[c].setExpandProxyInLoop = L, a.av.c[c].findExpandInLoop = O, a.av.c[c].addExpandTag = W, a.av.c[c].setIframeAssetType = T, a.av.c[c].preferCollapse = U, h;
                            var k = a.aw.a(e, b)[0];
                            if (k && (G || a.b.bf(k))) return a.av.c[c] = new l(h, c, g), a.av.c[c].collapsedQuery = d, a.av.c[c].expandedQuery = e, a.av.c[c].searchableEl = b, a.av.c[c].checkHiddenStyles = z, a.av.c[c].collapseUnloads = n, a.av.c[c].noLoopValidation = B, a.av.c[c].expandUnloads = F, a.av.c[c].expandedSelector = y, a.av.c[c].expandedEl = k, a.av.c[c].collapseProxyEl = p, a.av.c[c].expandProxyEl =
                                w, a.av.c[c].collapseUnloads = n, a.av.c[c].setCollapseProxyInLoop = R, a.av.c[c].setExpandProxyInLoop = L, a.av.c[c].findExpandInLoop = O, a.av.c[c].addExpandTag = W, a.av.c[c].setIframeAssetType = T, a.av.c[c].preferCollapse = U, h
                        }
                    },
                    onNewAd: function(b, c) {
                        b.collapseProxyEl && !b.useIsFoundAdKnown && a.aw.b(b.collapseProxyEl, c, c.aa)
                    },
                    onLoop: function(b) {
                        if (b.stopLoop) return !1;
                        var c = !1;
                        b.setIframeAssetType && (x[b.adNum].hasIframeListener = !0, b.setIframeAssetType = !1);
                        if (b.expandUnloads) {
                            var d = a.aw.a(b.expandedQuery, b.searchableEl)[0];
                            b.expandedEl = d
                        }
                        b.findExpandInLoop && !b.expandedEl && (d = a.aw.a(b.expandedQuery, b.searchableEl)[0], b.expandedEl = d);
                        if (b.expandedEl && (b.noLoopValidation || a.b.bf(b.expandedEl)))
                            if (b.checkHiddenStyles && (b.expandedEl.style && "hidden" === b.expandedEl.style.visibility || "none" === b.expandedEl.style.display) || "0" === a.b.ap(b.expandedEl, "opacity")) c = !1;
                            else if (b.expandedSelector && !a.aw.a(b.expandedSelector, b.expandedEl)[0]) c = !1;
                        else if (c = !0, b.setCollapseProxyInLoop && b.collapseProxyEl && !b.collapseProxySet && (b.collapseProxySet =
                                a.aw.b(b.collapseProxyEl, x[b.adNum], b.collapsedEl)), b.setExpandProxyInLoop && b.expandProxyEl && !b.expandProxySet && (b.expandProxySet = a.aw.b(b.expandProxyEl, x[b.adNum], b.expandedEl)), b.addExpandTag && b.expandedEl.parentNode && (d = E && E.src && E.src.replace(/moatClientLevel4=[^&]*&/, "moatClientLevel4=Expanded&"))) return a.b.by(d, b.expandedEl.parentNode), b.addExpandTag = !1, b.stopLoop = !0, !1;
                        b.preferCollapse && a.b.bf(b.collapsedEl) && (c = !1);
                        c && !b.expandedIsOpen ? g(b.expandedEl, "div", null, b.adNum) : !c && b.expandedIsOpen &&
                            (b.collapseUnloads ? (c = a.aw.a(b.collapsedQuery, b.searchableEl)[0], k(c, null, null, b.adNum)) : h(b, !0))
                    }
                })
            };
            a.av.f = g;
            a.av.e = h;
            a.av.h = k;
            a.av.g = function(b, c, d) {
                d = d || {};
                var e = b.getElementsByTagName("div");
                d.inclSearchableEl && (e = a.b.br(e), e.push(b));
                for (b = 0; b < e.length; b++) {
                    var g = e[b];
                    if (g.id.match(c) && (d.anySize || a.b.be(g))) return g
                }
            };
            a.au.a()
        })(m);
        (function(a) {
            function l(b, c, d, f, e) {
                ("remove" === e ? a.p.d : a.p.c)(b, c, function(c) {
                    c = c || this.event;
                    var f = c.currentTarget || b;
                    try {
                        var e = f[I]
                    } catch (g) {
                        e = f[I]
                    }
                    if (e = x[e]) {
                        var h;
                        h = c;
                        var k = f.getBoundingClientRect();
                        h = -1 != h.type.indexOf("touch") && h.changedTouches && 0 < h.changedTouches.length ? {
                            x: parseInt(h.changedTouches[0].clientX - k.left, 10),
                            y: parseInt(h.changedTouches[0].clientY - k.top, 10)
                        } : {
                            x: parseInt(h.clientX - k.left, 10),
                            y: parseInt(h.clientY - k.top, 10)
                        };
                        e.aj = h.x;
                        e.ak = h.y;
                        e.dm || (e.cb = 2 == a.focus.getFocusMethod() ? e.counters.laxDwell.tCur : e.counters.strictDwell.tCur, e.dm = 1);
                        d.call(b, c, f, e)
                    }
                }, "genmouse")
            }

            function d(b, c, d) {
                l(b, "click", u, c, d);
                l(b, "mousedown", h, c, d);
                sa ? a.d.dw && l(b,
                    "touchstart", k, c, d) : (l(b, "mousemove", g, c, d), l(b, "mouseover", f, c, d), l(b, "mouseout", t, c, d))
            }

            function g(b, c, d) {
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                if (1 != d.ao.skin || !a.ab.d(c, d.adContent, b)) {
                    if (!sa && (d.aj !== d.al || d.ak !== d.am)) {
                        a.ah.d(b, d);
                        a.ah.f(b, d);
                        a.ah.g(b, d);
                        a.ah.i(b, d);
                        a.ah.h(b, d);
                        a.ah.b(d);
                        a.ah.c(d);
                        a.ah.e(d);
                        0 === d.ar.length && (d.ai = p(d));
                        if (100 > d.ar.length || 100 > d.as.length || 100 > d.at.length) d.ar.push(d.aj), d.as.push(d.ak), d.at.push(a.b.an(d));
                        d.al = d.aj;
                        d.am =
                            d.ak
                    }
                    d.ai !== p(d) && 1 < d.ar.length && y(d, "onMouseMove")
                }
            }

            function h(b, c, d) {
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                1 == d.ao.skin && a.ab.d(c, d.adContent, b) || (c = {
                    e: 2
                }, c.q = d.aq[2]++, c.x = d.aj, c.y = d.ak, a.v.a(d, c), a.av.m(b.type, d.zr))
            }

            function k(b, c, d) {
                a.m.a.zaxs("mouseEvent", d);
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                if (1 != d.ao.skin || !a.ab.d(c, d.adContent, b)) {
                    b = {
                        e: 23
                    };
                    b.q = d.aq[23]++;
                    b.x = d.aj;
                    b.y = d.ak;
                    c = (new n).getTime();
                    if ("undefined" === typeof d.ct) d.ct =
                        c;
                    else {
                        var f = c - d.ct;
                        d.ct = c;
                        d.cu = r.min(d.cu, f) || f
                    }
                    b.bz = void 0;
                    a.v.a(d, b)
                }
            }

            function c(c, d, f) {
                var g;
                if (2 == c.an || c.hasIframeListener) g = !0;
                if (g) {
                    g = d.e;
                    var h = c.ck;
                    h == a.ah.a.f.a && 6 === g ? (e(c, 0), c.cl = a.b.an(c), c.ck = a.ah.a.f.b) : h == a.ah.a.f.b ? 22 === g ? (b(c, d), e(c, f), c.cl = a.b.an(c)) : 7 === g && (1E3 < a.b.an(c) - c.cl ? (clearTimeout(c.cm), d.e = 22, b(c, d), c.cn = 0, c.ck = a.ah.a.f.a) : c.ck = a.ah.a.f.c) : h == a.ah.a.f.c && (6 == g ? (1E3 < a.b.an(c) - c.cl && (clearTimeout(c.cm), c.cn = 0, c.cl = a.b.an(c), e(c, 0)), c.ck = a.ah.a.f.b) : 22 == g && (b(c, d), c.ck =
                        a.ah.a.f.a, c.cn = 0))
                }
            }

            function e(b, d) {
                if (a.focus.checkFocus()) {
                    var f = 5 > b.cn ? 1E3 : 2 * d,
                        e = {
                            e: 22
                        };
                    b.cm = a.p.f(function() {
                        c(b, e, f)
                    }, f)
                } else c(b, {
                    e: 7
                }, 0)
            }

            function b(b, c) {
                c.q = b.aq[c.e]++;
                c.m = a.b.an(b);
                b.cl = c.m;
                a.v.a(b, c);
                b.cn++
            }

            function f(b, d, f) {
                a.m.a.zaxs("mouseEvent", f);
                a.m.a.zaxs("mouseEventOnAd", f);
                b = b || window.event;
                d = b.target || b.srcElement;
                1 == f.ao.skin && a.ab.d(d, f.adContent, b) || (a.ah.d(b, f), a.ah.f(b, f), a.ah.g(b, f), a.ah.i(b, f), a.ah.h(b, f), c(f, {
                    e: 6
                }, 0), a.av.m(b.type, f.zr))
            }

            function t(b, d, f) {
                a.m.a.zaxs("mouseEventOnAd",
                    f);
                b = b || window.event;
                d = b.target || b.srcElement;
                1 == f.ao.skin && a.ab.d(d, f.adContent, b) || (a.ah.d(b, f), a.ah.f(b, f), a.ah.g(b, f), a.ah.i(b, f), a.ah.h(b, f), c(f, {
                    e: 7
                }, 0))
            }

            function u(b, c, d) {
                a.m.a.zaxs("mouseEvent", d);
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                1 == d.ao.skin && a.ab.d(c, d.adContent, b) || (b = {
                    e: 3
                }, b.q = d.aq[3]++, b.x = d.aj, b.y = d.ak, a.v.a(d, b))
            }

            function y(b, c) {
                b.ai = p(b);
                var d = {
                    e: 1
                };
                d.q = b.aq[1]++;
                d.x = b.ar.join("a");
                d.y = b.as.join("a");
                for (var f = a.b.an(b), e = b.at, g = [], h = 0; h < e.length; h++) isNaN(e[h]) ||
                    g.push(r.abs(e[h] - f));
                d.c = g.join("a");
                d.m = f;
                a.v.a(b, d);
                b.ar = [];
                b.as = [];
                b.at = []
            }

            function p(b) {
                return r.floor(a.b.an(b) / 1E3)
            }
            a.l = {};
            a.l.d = function(b) {
                if (a.d.dv) {
                    a.m.a.azsx("adKilled", a.l.e, {
                        once: !0,
                        condition: function(a) {
                            return b.zr == a.zr
                        }
                    });
                    b.mouseEventElements || (b.mouseEventElements = []);
                    var c = b.aa;
                    a.l.b(b, c);
                    b.mouseEventElements.push(c)
                }
            };
            a.l.b = function(a, b) {
                if (a) {
                    var c = b || a.aa;
                    c && d(c, a.zr)
                }
            };
            a.l.a = function(a, b) {
                if (a) {
                    var c = b || a.aa;
                    c && d(c, a.zr, "remove")
                }
            };
            a.l.f = function(b) {
                for (var c in x) x.hasOwnProperty(c) &&
                    (b = x[c]) && (a.ah.g({
                        type: "scooper"
                    }, b), a.ah.i({
                        type: "scooper"
                    }, b), a.ah.h({
                        type: "scooper"
                    }, b), 1 < b.ar.length && b.ai !== p(b) && y(b, "scooper"))
            };
            a.l.c = function(b, c) {
                if (!c || !b || "number" === typeof c[I]) return !1;
                !b.hasIframeListener && c.tagName && "iframe" === c.tagName.toLowerCase() && (b.hasIframeListener = !0);
                !b.hasNonIframeListener && c.tagName && "iframe" !== c.tagName.toLowerCase() && (b.hasNonIframeListener = !0);
                c[I] = b.zr;
                a.l.b(b, c);
                b.mouseEventElements || (b.mouseEventElements = []);
                b.mouseEventElements.push(c);
                return b.proxyTrackingEnabled = !0
            };
            a.l.e = function(b) {
                a.b.forEach(b.mouseEventElements, function(c) {
                    try {
                        a.l.a(b, c), c[I] = null
                    } catch (d) {}
                })
            }
        })(m);
        (function(a) {
            a.ay = {};
            a.ay.a = function(a, d) {
                var g;
                d.outerHTML ? g = d.outerHTML : (g = document.createElement("div"), g.appendChild(d.cloneNode(!0)), g = g.innerHTML);
                g = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(g), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(g), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(g), a];
                for (var h, k, c = {}, e = 0; e < g.length; e++) {
                    if ((h = g[e]) && "object" ===
                        typeof h && h[1]) h = h[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/^"/g, "").replace(/"$/g, "").replace(/^'/g, "").replace(/'$/g, "");
                    else if ("string" === typeof h) h = h.split("?")[1];
                    else continue;
                    if (h) {
                        h = h.split("&");
                        for (var b = 0; b < h.length; b++) k = h[b].split("="), 2 > k.length || "function" == k[0].slice(0, 8) || (c[k[0]] = [k[1]])
                    }
                }
                return c
            }
        })(m);
        (function(a) {
            function l(b, c, f, e) {
                u.hasOwnProperty(b) ? u[b][c] && a.b.d(u[b][c]) ? u[b][c].push(f) : u[b][c] = [f] : (u[b] = {}, u[b][c] = [f], e && void 0 !== e.registerEvent && !0 === e.registerEvent &&
                    (y[b] = new d))
            }

            function d() {
                var b = !1;
                this.updateAndConditionallySend = function(a) {
                    !1 === b && (b = !0, this.sendNotification(a))
                };
                this.sendNotification = function(b) {
                    var c = {
                        e: 14
                    };
                    c.q = b.aq[14]++;
                    a.v.a(b, c)
                };
                this.getQS = function(a) {
                    !0 === b && (a.cv = Number(b))
                }
            }

            function g(b, c) {
                return b ? function(d) {
                    if (c) {
                        var f = {};
                        f[a.f.t.a] = !0;
                        a.f.af(b, f, d.zr)
                    } else a.f.ac(b)
                } : function() {}
            }

            function h(b, c) {
                return b ? function(d) {
                    var f = {};
                    f[a.f.t.d] = !0;
                    c && (f[a.f.t.a] = !0);
                    a.f.af(b, f, d.zr)
                } : function() {}
            }

            function k(a, b) {
                var c = y[b];
                void 0 !==
                    c && c.updateAndConditionallySend(a)
            }

            function c(a) {
                return 500 <= (2 === a.an ? a.be : a.bd)
            }

            function e(b, c) {
                try {
                    return a.az.i(b) >= c
                } catch (d) {
                    return !1
                }
            }

            function b(a, b) {
                try {
                    return a.counters.laxDwell.tCur >= b
                } catch (c) {
                    return !1
                }
            }

            function f(a, b) {
                var d;
                c(a) ? ("undefined" !== typeof a.bk && c(a) ? (d = a.bk, d = r.min(3E5, d)) : d = 0, d = d >= b) : d = !1;
                return d
            }

            function t(b, c) {
                try {
                    var d;
                    if (a.d.e && b.activetime) {
                        var f = a.o.b(b.zr),
                            e = a.ba.a(b.activetime.counters, f);
                        d = e && e.get("activeInviewTime")
                    } else d = !1;
                    return d >= c
                } catch (g) {
                    return !1
                }
            }
            a.az = {};
            var u = {},
                y = {},
                p = function(a) {
                    return !!a.el && a.dn
                },
                w = function(a) {
                    return !!a.el && !a.dn
                },
                m = function() {
                    var b = 0;
                    return function() {
                        var c = a.d.g,
                            d = c.document,
                            f = d.body,
                            c = (f.scrollTop || d.documentElement.scrollTop || c.pageYOffset || 0) / f.offsetHeight;
                        c > b && (b = c);
                        return b
                    }
                }(),
                v = {
                    load: function(a) {
                        return a && a.video && !a.video.started ? !1 : !0
                    },
                    adimpression: function(a) {
                        return !1
                    },
                    measurable: function(b) {
                        return b && b.video && !b.video.started ? !1 : a.d.dr(b)
                    },
                    "full-measurable": function(b) {
                        return b && b.video && !b.video.started ? !1 :
                            a.d.dt(b)
                    },
                    "full-inViewX": function(b, c) {
                        return a.o.u(b, c)
                    },
                    "full-inView": function(b) {
                        return a.o.u(b, 1)
                    },
                    "full-inView2": function(b) {
                        return a.o.u(b, 2E3)
                    },
                    nhtReady: function(b) {
                        return b && b.video && !b.video.started ? !1 : a && a.f && a.f.aa
                    },
                    brandSafeReady: function(a) {
                        return a && a.video && !a.video.started ? !1 : q && q.jsonp && q.jsonp.brandsafe
                    },
                    customInView: function(a) {
                        return "Feature Not Enabled"
                    },
                    inViewX: function(b, c) {
                        return a.o.m(b, c)
                    },
                    inView100: function(b) {
                        return a.o.m(b, 1E5)
                    },
                    inView60: function(b) {
                        return a.o.m(b, 6E4)
                    },
                    inView45: function(b) {
                        return a.o.m(b, 45E3)
                    },
                    inView40: function(b) {
                        return a.o.m(b, 4E4)
                    },
                    inView35: function(b) {
                        return a.o.m(b, 35E3)
                    },
                    inView30: function(b) {
                        return a.o.m(b, 3E4)
                    },
                    inView25: function(b) {
                        return a.o.m(b, 25E3)
                    },
                    inView20: function(b) {
                        return a.o.m(b, 2E4)
                    },
                    inView15: function(b) {
                        return a.o.m(b, 15E3)
                    },
                    inView10: function(b) {
                        return a.o.m(b, 1E4)
                    },
                    inView9: function(b) {
                        return a.o.m(b, 9E3)
                    },
                    inView8: function(b) {
                        return a.o.m(b, 8E3)
                    },
                    inView7: function(b) {
                        return a.o.m(b, 7E3)
                    },
                    inView6: function(b) {
                        return a.o.m(b, 6E3)
                    },
                    inView5: function(b) {
                        return a.o.m(b, 5E3)
                    },
                    inView4: function(b) {
                        return a.o.m(b, 4E3)
                    },
                    inView3: function(b) {
                        return a.o.m(b, 3E3)
                    },
                    inView2: function(b) {
                        return a.o.m(b, 2E3)
                    },
                    inView1: function(b) {
                        return a.o.m(b, 1E3)
                    },
                    inView05: function(b) {
                        return a.o.m(b, 500)
                    },
                    anyPercentVisible: function(b) {
                        return (b = b && a.o.a(b.zr)) && b.wasPartiallyInview()
                    },
                    activeInViewTimeX: function(a, b) {
                        return t(a, b)
                    },
                    activeInViewTime05: function(a) {
                        return t(a, 500)
                    },
                    activeInViewTime1: function(a) {
                        return t(a, 1E3)
                    },
                    activeInViewTime2: function(a) {
                        return t(a,
                            2E3)
                    },
                    activeInViewTime3: function(a) {
                        return t(a, 3E3)
                    },
                    activeInViewTime4: function(a) {
                        return t(a, 4E3)
                    },
                    activeInViewTime5: function(a) {
                        return t(a, 5E3)
                    },
                    activeInViewTime6: function(a) {
                        return t(a, 6E3)
                    },
                    activeInViewTime7: function(a) {
                        return t(a, 7E3)
                    },
                    activeInViewTime8: function(a) {
                        return t(a, 8E3)
                    },
                    activeInViewTime10: function(a) {
                        return t(a, 1E4)
                    },
                    activeInViewTime15: function(a) {
                        return t(a, 15E3)
                    },
                    activeInViewTime20: function(a) {
                        return t(a, 2E4)
                    },
                    activeInViewTime25: function(a) {
                        return t(a, 25E3)
                    },
                    activeInViewTime30: function(a) {
                        return t(a,
                            3E4)
                    },
                    activeInViewTime60: function(a) {
                        return t(a, 6E4)
                    },
                    activeInViewTime90: function(a) {
                        return t(a, 9E4)
                    },
                    activeInViewTime120: function(a) {
                        return t(a, 12E4)
                    },
                    activeInViewTime180: function(a) {
                        return t(a, 18E4)
                    },
                    activeInViewTime240: function(a) {
                        return t(a, 24E4)
                    },
                    activeInViewTime300: function(a) {
                        return t(a, 3E5)
                    },
                    fullInView05: function(b) {
                        return a.o.u(b, 500)
                    },
                    fullInView1: function(b) {
                        return a.o.u(b, 1E3)
                    },
                    fullInView2: function(b) {
                        return a.o.u(b, 2E3)
                    },
                    fullInView3: function(b) {
                        return a.o.u(b, 3E3)
                    },
                    fullInView15: function(b) {
                        return a.o.u(b,
                            15E3)
                    },
                    full_inview_05: function(b) {
                        return 600 <= b.INITIAL_HEIGHT && a.o.u(b, 500)
                    },
                    full_inview_1: function(b) {
                        return 600 <= b.INITIAL_HEIGHT && a.o.u(b, 1E3)
                    },
                    full_inview_5: function(b) {
                        return 600 <= b.INITIAL_HEIGHT && a.o.u(b, 5E3)
                    },
                    full_inview_10: function(b) {
                        return 600 <= b.INITIAL_HEIGHT && a.o.u(b, 1E4)
                    },
                    fully_inView2: function(b) {
                        return a.o.u(b, 2E3)
                    },
                    passthrough: function(b) {
                        return a.ac.d(b.zr)
                    },
                    groupmV3: function(a) {
                        return a.groupmV3.checkMilestoneReached()
                    },
                    fullViewInteraction: function(a) {
                        return this.interaction1(a) &&
                            this.full_inview_1(a)
                    },
                    inner_height_1000: function(b) {
                        return 1E3 <= a.d.ab
                    },
                    inner_height_1200: function(b) {
                        return 1200 <= a.d.ab
                    },
                    inner_height_1300: function(b) {
                        return 1300 <= a.d.ab
                    },
                    inner_height_1400: function(b) {
                        return 1400 <= a.d.ab
                    },
                    inner_height_1000_1400: function(b) {
                        return 1E3 <= a.d.ab && 1400 >= a.d.ab
                    },
                    inner_height_1100_1400: function(b) {
                        return 1100 <= a.d.ab && 1400 >= a.d.ab
                    },
                    audibleFullVisibleHalfDuration: function(b) {
                        if (!(b && b.video && b.video.durationMeasurable)) return !1;
                        var c = 98 * b.ao.duration / 100,
                            d = b && a.o.a(b.zr);
                        return (b = d && b.video && b.video.getCounter(d.getLabel())) && b.get("groupmAudibleFullyVisIvt") >= .5 * c
                    },
                    groupmAudVisHumanCap15: function(b) {
                        if (!(a && a.f && a.f.aa && b && b.video && b.ao)) return !1;
                        var c = !1;
                        "number" == typeof b.ao.duration && !isNaN(b.ao.duration) && 0 < b.ao.duration && (c = r.min(15E3, .5 * b.ao.duration));
                        var d = b && a.o.a(b.zr),
                            d = d && b.video.getCounter(d.getLabel());
                        b = a.f.ab(b.zr);
                        return c && d && d.get("groupmAudibleFullyVisIvt") > c && b
                    },
                    scroll_measurable: function(b) {
                        return a.d.e
                    },
                    scroll: function(a) {
                        return "undefined" !==
                            typeof q.z
                    },
                    scrollfirstX: function(a, b) {
                        return q.z > b
                    },
                    scrollfirst1: function(a) {
                        return 1E3 < q.z
                    },
                    scrollfirst2: function(a) {
                        return 2E3 < q.z
                    },
                    scrollfirst2btf: function(a) {
                        return 2E3 < q.z && p(a)
                    },
                    scrollfirst3: function(a) {
                        return 3E3 < q.z
                    },
                    scrollfirst5: function(a) {
                        return 5E3 < q.z
                    },
                    scroll_interaction: function(a) {
                        return this.scroll(a) && this.interaction(a)
                    },
                    hover: function(a) {
                        return a.dm
                    },
                    mobileTouch: function(b) {
                        return a.d.da && b.dm
                    },
                    laxOts: function(b) {
                        return a.o.p(b, "lax")
                    },
                    strictOts: function(b) {
                        return a.o.p(b)
                    },
                    everOutOfFocus: function(b) {
                        return !a.focus.pageIsVisible()
                    },
                    interaction_measurable: function(b) {
                        return !a.b.j() || c(b)
                    },
                    interaction: function(a) {
                        return c(a)
                    },
                    btf: function(a) {
                        return p(a)
                    },
                    btf_strictOts: function(a) {
                        return this.strictOts(a) && p(a)
                    },
                    btf_interaction: function(a) {
                        return c(a) && p(a)
                    },
                    btf_inViewX: function(b, c) {
                        return a.o.m(b, c) && p(b)
                    },
                    btf_inView5: function(b) {
                        return a.o.m(b, 5E3) && p(b)
                    },
                    btf_inView15: function(b) {
                        return a.o.m(b, 15E3) && p(b)
                    },
                    atf: function(a) {
                        return w(a)
                    },
                    atf_inViewX: function(b, c) {
                        return a.o.m(b, c) && w(b)
                    },
                    atf_970_728_inview20: function(b) {
                        return (970 ==
                            b.INITIAL_WIDTH || 728 == b.INITIAL_WIDTH) && w(b) && a.o.m(b, 2E4)
                    },
                    atf_300x250_inview20: function(b) {
                        return 300 == b.INITIAL_WIDTH && 250 == b.INITIAL_HEIGHT && w(b) && a.o.m(b, 2E4)
                    },
                    atf_300x600_inview20: function(b) {
                        return 300 == b.INITIAL_WIDTH && 600 == b.INITIAL_HEIGHT && w(b) && a.o.m(b, 2E4)
                    },
                    btf_300_inview20: function(b) {
                        return 300 == b.INITIAL_WIDTH && p(b) && a.o.m(b, 2E4)
                    },
                    btf_300_inview30: function(b) {
                        return 300 == b.INITIAL_WIDTH && p(b) && a.o.m(b, 3E4)
                    },
                    btf_300_inview40: function(b) {
                        return 300 == b.INITIAL_WIDTH && p(b) && a.o.m(b, 4E4)
                    },
                    inner_height_1000: function(b) {
                        return 1E3 <= a.d.ab
                    },
                    contentA: function(a) {
                        return this.page5(a) && .15 < m()
                    },
                    contentB: function(a) {
                        return this.page10(a) && .35 < m()
                    },
                    contentC: function(a) {
                        return this.page15(a) && .55 < m()
                    },
                    interactionX: function(a, b) {
                        return f(a, b)
                    },
                    interactionAny: function(a) {
                        return f(a, 10)
                    },
                    interaction05: function(a) {
                        return f(a, 500)
                    },
                    interaction1: function(a) {
                        return f(a, 1E3)
                    },
                    interaction2: function(a) {
                        return f(a, 2E3)
                    },
                    interaction3: function(a) {
                        return f(a, 3E3)
                    },
                    interaction4: function(a) {
                        return f(a, 4E3)
                    },
                    interaction5: function(a) {
                        return f(a, 5E3)
                    },
                    interaction6: function(a) {
                        return f(a, 6E3)
                    },
                    interaction7_2: function(a) {
                        return f(a, 7200)
                    },
                    interaction8: function(a) {
                        return f(a, 8E3)
                    },
                    interaction10: function(a) {
                        return f(a, 1E4)
                    },
                    interaction13: function(a) {
                        return f(a, 13E3)
                    },
                    interaction15: function(a) {
                        return f(a, 15E3)
                    },
                    interaction20: function(a) {
                        return f(a, 2E4)
                    },
                    interaction30: function(a) {
                        return f(a, 3E4)
                    },
                    interaction60: function(a) {
                        return f(a, 6E4)
                    },
                    pageX: function(a, b) {
                        return e(a, b)
                    },
                    page1: function(a) {
                        return e(a, 1E3)
                    },
                    page2: function(a) {
                        return e(a, 2E3)
                    },
                    page3: function(a) {
                        return e(a, 3E3)
                    },
                    page5: function(a) {
                        return e(a, 5E3)
                    },
                    page7: function(a) {
                        return e(a, 7E3)
                    },
                    page10: function(a) {
                        return e(a, 1E4)
                    },
                    page15: function(a) {
                        return e(a, 15E3)
                    },
                    page20: function(a) {
                        return e(a, 2E4)
                    },
                    page30: function(a) {
                        return e(a, 3E4)
                    },
                    page45: function(a) {
                        return e(a, 45E3)
                    },
                    page60: function(a) {
                        return e(a, 6E4)
                    },
                    page120: function(a) {
                        return e(a, 12E4)
                    },
                    page180: function(a) {
                        return e(a, 18E4)
                    },
                    page240: function(a) {
                        return e(a, 24E4)
                    },
                    page7_2: function(a) {
                        return e(a,
                            7200)
                    },
                    notmeasurableX: function(a, c) {
                        return b(a, c) && !this.measurable(a)
                    },
                    notmeasurable1: function(a) {
                        return b(a, 1E3) && !this.measurable(a)
                    },
                    notmeasurable3: function(a) {
                        return this.page3(a) && !this.measurable(a)
                    },
                    notmeasurable5: function(a) {
                        return this.page5(a) && !this.measurable(a)
                    },
                    notmeasurable10: function(a) {
                        return this.page10(a) && !this.measurable(a)
                    },
                    sessionX: function(a, c) {
                        return b(a, c)
                    },
                    strictOtsAndSession5: function(a) {
                        return this.strictOts(a) && b(a, 5E3)
                    },
                    inView5AndInteraction2: function(b) {
                        return a.o.m(b,
                            5E3) && 2E3 <= b.bg
                    },
                    inView5AndInteraction1: function(b) {
                        return a.o.m(b, 5E3) && 1E3 <= b.bg
                    },
                    MoatScoreA: function(a) {
                        return b(a, 1E4) && !this.strictOts(a)
                    },
                    MoatScoreB: function(a) {
                        return this.strictOts(a)
                    },
                    MoatScoreC: function(b) {
                        return a.o.m(b, 15E3)
                    },
                    MoatScoreD: function(b) {
                        return a.o.m(b, 25E3) && this.scroll(b)
                    },
                    MoatScoreE: function(b) {
                        return a.o.m(b, 3E4) && f(b, 500) && this.scroll(b)
                    },
                    inView2AndScrollAndPage10: function(a) {
                        return this.inView2(a) && this.page10(a) && this.scroll(a)
                    },
                    page5AndScroll: function(a) {
                        return this.page5(a) &&
                            this.scroll(a)
                    },
                    page10AndScroll: function(a) {
                        return this.page10(a) && this.scroll(a)
                    },
                    scroll5Page15: function(a) {
                        return this.page15(a) || this.scrollfirst5(a)
                    },
                    strictOtsAndInteraction5: function(a) {
                        return this.strictOts(a) && this.interaction5(a)
                    },
                    click: function(a) {
                        return 0 < a.aq[2] || 0 < a.aq[3]
                    },
                    inView10AndScroll: function(a) {
                        return this.scroll(a) && this.inView10(a)
                    },
                    inView10AndScrollAndClick: function(a) {
                        return this.scroll(a) && this.inView10(a) && this.click(a)
                    },
                    page90_btf: function(a) {
                        return e(a, 9E4) && p(a)
                    },
                    moatA: function(a) {
                        return b(a,
                            15E3) && this.inView10(a)
                    },
                    moatB: function(a) {
                        return b(a, 6E4) && this.scroll(a) && this.inView15(a)
                    },
                    moatC: function(a) {
                        return b(a, 15E4) && this.scroll(a) && this.inView20(a)
                    },
                    adNotHidden: function(b) {
                        return !1 === a.ar.a(b.zr)
                    }
                };
            a.az.a = function(b, c, d) {
                a.as.b("brandsafe", function(f) {
                    var e = b;
                    if (e && f) {
                        var h = "",
                            k = "";
                        if (a.b.cj(f.d)) {
                            var l = f.d + 2;
                            2 === l ? h = "Unsafe - Inappropriate Content" : 3 === l ? h = "Unsafe - Geo" : 4 === l ? h = "Unsafe - Blacklist" : 6 === l ? h = "Sensitive" : a.b.aj([0, 1, 5, 7, 8, 9], l) && (h = "Safe")
                        }
                        f.c && a.b.d(f.c) && (k = f.c.join());
                        b = e + ("&BSD=" + h + "&BSC=" + k)
                    } else b = !1;
                    g(b, c)(d)
                })
            };
            a.az.b = function(b, c) {
                l(b, "strictOts", function(b, d) {
                    var f = a.d.g,
                        e = f.document.getElementsByTagName("script")[0],
                        f = f.document.createElement("img");
                    f.src = c;
                    e.parentNode.insertBefore(f, e);
                    b.viewableOcrPixelFired = 1
                })
            };
            a.az.c = function(b, c) {
                if (a.d.fc()) return !1;
                if (q && !q.turnerKruxPixelFired) {
                    var d = c && c.moatClientSlicer1;
                    (d = d && d.split("/")[2]) && "Toon" !== d && (q.turnerKruxPixelFired = !0, l(b, "nhtReady", h(a.d.protocol + "//beacon.krxd.net/event.gif?event_id=Kh_XGpsv&event_type=cact")))
                }
            };
            a.az.d = function() {
                for (var b in x)
                    if (x.hasOwnProperty(b)) {
                        var c = x[b],
                            d = u[b],
                            f;
                        for (f in d) d.hasOwnProperty(f) && v[f](c) && (a.b.forEach(d[f], function(b, d) {
                            var f = typeof b;
                            "string" === f ? (f = a.az.e(c), f = -1 < a.b.indexOf(b, "?") ? "&ord=" + f : "?ord=" + f, g(b + f)(c)) : "function" === f && b(c)
                        }), k(c, b), delete d[f])
                    }
            };
            a.az.f = function(a) {
                var b = {};
                (a = y[a]) && a.getQS(b);
                return b
            };
            a.az.g = function(a, b) {
                if (u.hasOwnProperty(a) && u[a].hasOwnProperty(b)) return !0
            };
            a.az.h = function(a, b) {
                u.hasOwnProperty(a) && u[a].hasOwnProperty(b) && delete u[a][b]
            };
            a.az.e = function(b) {
                var c;
                b.Ord ? c = b.Ord : (c = a.d.p ? a.d.p : (new n).getTime(), b.Ord = c);
                return c
            };
            a.az.j = l;
            a.az.k = function(b, c) {
                return b ? function(d) {
                    var f = {};
                    f[a.f.t.c] = !0;
                    f[a.f.t.e] = !0;
                    c && (f[a.f.t.a] = !0);
                    a.f.af(b, f, d.zr)
                } : function() {}
            }
        })(m);
        (function(a) {
            a.ab = {};
            a.ab.e = {};
            a.ab.a = "divs";
            a.ab.a = "width";
            a.ab.e.a = function(a) {
                return 970
            };
            a.ab.c = function() {
                var l = a.d.g,
                    d = a.d.s && l.document || document,
                    g = d.documentElement,
                    d = d.getElementsByTagName("body")[0];
                try {
                    a.ab.b = l && l.innerWidth || g && g.clientWidth || d && d.clientWidth
                } catch (h) {}
            };
            a.ab.d = function(l, d, g) {
                if ("divs" == a.ab.a) {
                    if (l._Mt_wIC) return !0;
                    if (l._Mt_wOC) return !1;
                    var h = g.currentTarget,
                        k = l;
                    for (g = 0; 1E3 > g && !a.b.aj(d, k); g++) {
                        if (k == h || null == k) return l._Mt_wOC = !0, !1;
                        k = k.parentElement
                    }
                    return l._Mt_wIC = !0
                }
                if ("width" == a.ab.a) {
                    l = d / 2;
                    h = a.ab.b / 2;
                    k = g.clientX;
                    g = g.clientY;
                    var c = a.d.g.scrollY || a.d.g.document.documentElement.scrollTop;
                    return a.ab.b > d && (k > h + l || k < h - l) || 90 > g + c ? !1 : !0
                }
                if ("ad-els" === a.ab.a) {
                    if (l._Mt_wIC) return !0;
                    if (l._Mt_wOC) return !1;
                    h = g.currentTarget;
                    k = l;
                    for (g = 0; 1E3 > g; g++) {
                        if (a.b.aj(d,
                                k)) return l._Mt_wOC = !0, !1;
                        if (k == h || null == k) break;
                        k = k.parentElement
                    }
                    return l._Mt_wIC = !0
                }
            }
        })(m);
        (function(a) {
            function l(b) {
                var c = {
                    window: 0,
                    transparent: 1,
                    opaque: 2,
                    direct: 3,
                    gpu: 4
                };
                if ("EMBED" === b.tagName) var d = a.b.getAttribute(b, "wmode");
                else if ("OBJECT" === b.tagName) {
                    b = b.getElementsByTagName("param");
                    for (var e = 0; e < b.length; e++) {
                        var g = b[e],
                            h = a.b.getAttribute(g, "name"),
                            g = a.b.getAttribute(g, "value");
                        if ("wmode" === h) {
                            d = g;
                            break
                        }
                    }
                }
                return d && c[d.toLowerCase()] || 5
            }

            function d(b) {
                try {
                    if (!b) return !1;
                    var c = b,
                        d;
                    if ("DIV" ===
                        c.tagName || "A" === c.tagName)(c = b.getElementsByTagName("EMBED")[0]) || (c = b.getElementsByTagName("OBJECT")[0]), c || (c = b.getElementsByTagName("IMG")[0]), c || (c = b);
                    1 === c.nodeType && "IMG" !== c.nodeName && "EMBED" !== c.nodeName && "OBJECT" !== c.nodeName && (c = b.getElementsByTagName("EMBED")[0] || b.getElementsByTagName("OBJECT")[0] || b.getElementsByTagName("IMG")[0] || b);
                    if ("OBJECT" === c.tagName) {
                        for (var e = 0; e < c.children.length; e++)
                            if ("movie" === c.children[e].name || "Movie" === c.children[e].name) d = c.children[e].value;
                        c.object &&
                            c.object.Movie ? d = c.object.Movie : c.data && -1 !== c.data.indexOf("swf") && (d = c.data)
                    }
                    "EMBED" !== c.tagName && "IMG" !== c.tagName || !c.src || (d = c.src);
                    d || (d = a.b.ar(c));
                    var g = a.ay.a(d, c);
                    if (!d)
                        for (var h = a.e.i.a, c = 0; c < h.length; c++) {
                            var k = h[c](b);
                            k && (d = k)
                        }
                    return {
                        adURL: d,
                        flashVars: g
                    }
                } catch (l) {
                    return !1
                }
            }

            function g(b) {
                var c = b.el,
                    e = b.url,
                    g = b.flashVars,
                    k = b.adIds,
                    p = b.opt_props;
                this.adContent = b.adContent;
                (new n).getTime();
                this.ao = k;
                this.FIND_AD_TRIES = k.numTries || 0;
                var m = d(c);
                if (m && m.adURL && g)
                    for (var q in m.flashVars) m.flashVars.hasOwnProperty(q) &&
                        (g[q] = m.flashVars[q]);
                m && m.flashVars && (g = m.flashVars);
                if ("string" !== typeof e || "div" === e.toLowerCase() || "a" === e.toLowerCase()) e = m && m.adURL || "-";
                e && 0 !== e.toLowerCase().indexOf("http:") && 0 !== e.toLowerCase().indexOf("https:") && ("//" === e.substring(0, 2) ? e = window.location.protocol + e : "/" === e[0] ? e = window.location.protocol + "//" + window.location.host + e : (m = window.location.pathname.split("/").slice(0, -1).join("/"), e = window.location.protocol + "//" + window.location.host + "/" + m + (m ? "/" : "") + e));
                "IFRAME" !== c.tagName && "IMG" !==
                    c.tagName && -1 === e.indexOf("googlesyndication") && (e = e.split("?")[0]);
                this.zr = k.adNum;
                this.MMAK_ID = k.mmakAdKey ? k.mmakAdKey : "m" + this.zr;
                this.yg = a.b.cq();
                !k.mmakAdKey && a.b.df() && (this.MMAK_ID += "_beta");
                this.TAGID = a.d.bb;
                a.w.h(this.yg, a.d.az.a);
                x[this.zr] = this;
                a.e.k(this.zr, [c]);
                this.ae = e;
                this.aa = c;
                a.m.a.zaxs("adElementUpdate");
                this.WINDOW = e = a.b.aq(this.aa);
                this.isInIframe = e != e.parent;
                this.proxyTrackingEnabled = this.isSREMeasurable = !1;
                this.debugData = {
                    version: "3",
                    trueVisiblePercent: null,
                    update: function(a) {
                        this.trueVisiblePercent =
                            a
                    },
                    getValue: function() {
                        var a;
                        a = "number" === typeof this.trueVisiblePercent ? r.round(100 * this.trueVisiblePercent) : "-";
                        return this.version + ":" + a
                    }
                };
                this.setDimensions = function() {
                    var b;
                    b = new a.aa.k(c);
                    this.INITIAL_WIDTH = parseInt(b.width);
                    this.INITIAL_HEIGHT = parseInt(b.height)
                };
                this.setDimensions();
                "undefined" === typeof g && (g = {});
                a.w.l(ta);
                this.eg = [];
                this.ee = {};
                a.d.bi || !a.d.bh || p && p.IS_PAGE_LEVEL || (this.ed = {}, a.s.z(this));
                this.periscopeManager && this.periscopeManager.insertSuccessful || p && p.IS_PAGE_LEVEL || (this.ed = {}, a.s.z(this));
                a.ac.e.a(this);
                a.ac.f.a(this);
                a.ao.b(this);
                this.DfpSlot = k.trackedFromDfpHeaderTag && k.slotMappingId ? a.y.e()[k.slotMappingId] : a.y.f();
                this.get_width = function() {
                    return k.initWidth ? k.initWidth : this.INITIAL_WIDTH ? this.INITIAL_WIDTH : !1
                };
                this.get_height = function() {
                    return k.initHeight ? k.initHeight : this.INITIAL_HEIGHT ? this.INITIAL_HEIGHT : !1
                };
                this.getScreenRealEstate = function() {
                    var b = a.d.y,
                        c = a.d.z;
                    if (a.n.a()) {
                        var d;
                        creativeWidth = (d = a.n.realEstateMeasurements) && d.w || 0;
                        creativeHeight = d && d.h ||
                            0
                    } else creativeWidth = this.INITIAL_WIDTH, creativeHeight = this.INITIAL_HEIGHT;
                    return b && c && creativeWidth && creativeHeight ? r.max(0, r.min(1, creativeWidth * creativeHeight / (b * c))) : 0
                };
                a.u.h(this);
                a.az.c(this.zr, this.ao);
                this.ag = g;
                this.ai = 0;
                this.an = this.am = this.al = this.ak = this.aj = void 0;
                this.ar = [];
                this.as = [];
                this.at = [];
                this.av = this.au = a.ah.a.a.a;
                this.ax = a.ah.a.b.a;
                this.ay = a.ah.a.c.a;
                this.ba = this.az = a.ah.a.d.a;
                this.bb = a.ah.a.e.a;
                this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp =
                    this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
                this.ca = this.bz = !1;
                this.cb = this.cu = this.ct = void 0;
                this.cc = +new n + 12E4;
                this.ci = +new n;
                this.cl = this.cm = void 0;
                this.cn = 0;
                this.ck = a.ah.a.f.a;
                this.cd = !1;
                this.cy = void 0;
                this.dt = !1;
                this.db = void 0;
                this.cf = this.ce = !1;
                this.af = Number(this.ef);
                this.eq = !1;
                this.ds = this.ch = this.dr = this.cg = 0;
                this.dq = this.bn = void 0;
                this.IR5 = {
                    MIN: {
                        x: void 0,
                        y: void 0
                    },
                    MAX: {
                        x: void 0,
                        y: void 0
                    },
                    AREA: 0
                };
                this.dm = 0;
                this.ep = this.dd = !1;
                this.aq = {};
                this.aq.g = 0;
                this.aq[1] = 0;
                this.aq[2] = 0;
                this.aq[3] = 0;
                this.aq[13] = 0;
                this.aq[0] = 0;
                this.aq[4] = 0;
                this.aq[5] = 0;
                this.aq[6] = 0;
                this.aq[7] = 0;
                this.aq[9] = 0;
                this.aq[8] = 0;
                this.aq[15] = 0;
                this.aq[16] = 0;
                this.aq[21] = 0;
                this.aq[22] = 0;
                this.aq[23] = 0;
                this.aq[37] = 0;
                this.aq.tc = 0;
                this.es = [5, 10, 15, 30, 60];
                this.doa = [5, 10, 15, 30, 60];
                this.wasEverInView = this.isCurrentlyTransparent = this.isCurrentlyStacked = void 0;
                this.aq[14] = 0;
                this.an = b.adType || b.opt_props && b.opt_props.adType || h(c);
                0 === this.an && (this.WMODE = l(c));
                a.b.bh(this.aa);
                b.opt_props &&
                    b.opt_props.components && (this.components = b.opt_props.components, this.isCompositeAd = !0);
                var v = !0;
                this.disableMeasurability = function() {
                    v = !1
                };
                this.enableMeasurability = function() {
                    v = !0
                };
                this.isMeasurabilityDisabled = function() {
                    return !1 === v
                };
                this.viewabilityMethod = {};
                this.viewabilityPercent = {
                    strict: "-",
                    sframe: "-",
                    pscope: "-"
                };
                this.isValidAdSize = function() {
                    return a.b.bf(this.aa)
                };
                a.m.a.zaxs("adInitialized", this);
                a.e.j(this)
            }

            function h(a) {
                return "IFRAME" === a.tagName ? 2 : "IMG" === a.tagName ? 1 : "EMBED" === a.tagName ||
                    "OBJECT" === a.tagName ? 0 : 3
            }

            function k(b, c) {
                for (var d = 0, e = c.length; d < e; d++) a.l.c(b, c[d])
            }
            var c = 0,
                e = !0;
            a.e = {};
            a.e.i = {};
            a.e.e = function(b, c, d, e, k, p, m) {
                p || a.f.aq(k);
                var r;
                r = 1 == arguments.length ? arguments[0] : {
                    el: b,
                    url: c,
                    flashVars: e,
                    adIds: k,
                    opt_props: m
                };
                if (a.ab.e.a && 1 == k.skin) {
                    var v;
                    v = a.ab.e.a(b, k);
                    r.adContent = v
                }
                if (p) {
                    if ("function" === typeof p) return p(b, c, e, k);
                    new n;
                    p.em = !0;
                    x[p.zr] = p;
                    b[I] = p.zr;
                    b[A] = !0;
                    p.aa = b;
                    a.m.a.zaxs("adElementUpdate");
                    p.INITIAL_WIDTH = b.offsetWidth;
                    p.INITIAL_HEIGHT = b.offsetHeight;
                    p.ae = c;
                    p.an = h(b);
                    0 === p.an && (p.WMODE = l(b));
                    p.ag = e || {};
                    a.l.d(p);
                    r = {
                        e: 0
                    };
                    r.q = p.aq[0]++;
                    a.v.a(p, r);
                    a.m.a.zaxs("adLoaded", p);
                    a.d.bi || !a.d.bh || m && m.IS_PAGE_LEVEL || (p.periscopeManager && p.periscopeManager.killAllPixels(), p.periscopeConfig = !1, a.s.z(p));
                    return p
                }
                return x[k.adNum] ? x[k.adNum] : new g(r)
            };
            a.e.j = function(b) {
                b.de = isNaN(b.ao.startTime) ? +new n : b.ao.startTime;
                b.RAND = b.ao.rand;
                (new n).getTime();
                a.d.d() && a.q.j(b);
                a.d.j() && a.t.i(b);
                a.o.g(b);
                a.d.e || a.ak.b.a();
                a.l.d(b);
                a.av.m("newad", b.zr);
                a.aw.b(["../div#html5ClickOverlay"],
                    b, b.aa);
                b.aa.parentNode && "swiffycontainer" === b.aa.parentNode.id && a.aw.b(["..../../iframe ~ #clicktag"], b, b.aa.parentNode);
                a.m.a.zaxs("startAdTracking", b);
                b.dd = !0;
                a.d.el(b);
                var c = {
                    e: 0
                };
                c.q = b.aq[0]++;
                a.v.a(b, c);
                a.m.a.zaxs("adLoaded", b)
            };
            a.e.i.a = [];
            a.e.b = function() {
                var b, c;
                for (c in x) x.hasOwnProperty(c) && (b = x[c]) && !b.ep && a.u.a(b)
            };
            a.e.d = function(b) {
                var c = +new n,
                    d = c - b.ci;
                if (0 < b.doa.length) {
                    var e = 1E3 * b.doa[0];
                    if (b.counters.laxDwell.tCur >= e) {
                        b.doa.shift();
                        var g = b.es.length ? b.es[0] : 60;
                        if (e < g) return !1;
                        if (5E3 <
                            d) return !0
                    }
                }
                return 0 < b.es.length && (g = 1E3 * b.es[0], a.o.m(b, g)) ? (b.es.shift(), !0) : 0 === b.doa.length && c > b.cc ? (b.cc *= 2, !0) : !1
            };
            a.e.k = function(a, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    e[I] = a;
                    e[A] = !0
                }
            };
            a.e.l = function(b, c) {
                a.b.a(c.cc);
                a.e.m(c);
                a.e.a(c, 1) && a.m.a.sxaz("adKilled", {
                    id: b
                })
            };
            a.e.n = function(b, c) {
                a.e.a(c) && a.m.a.sxaz("adNotFound", {
                    id: b
                })
            };
            a.e.a = function(b, c) {
                var d = 0,
                    e;
                for (e in x) x.hasOwnProperty && x.hasOwnProperty(e) && d++;
                return d <= (c || 0) ? (a.m.a.esgf("allLocalAdsKilled"), !0) : !1
            };
            a.e.o = function(a) {
                a.ep = !0;
                delete x[a.zr];
                try {
                    a.aa && (a.aa[A] = null, a.aa[I] = null, a.aa = null, a.DfpSlot = null)
                } catch (c) {}
                a.groupmV2 = null;
                a.groupmV3 = null;
                a.periscopeManager = null;
                a.secondaryCounters = null;
                a.mouseEventElements = null;
                a.publicis = null
            };
            a.e.m = function(b) {
                if (b && b.video && !b.video.started) return !1;
                var c = {
                    e: 21
                };
                c.q = b.aq[21]++;
                a.bb.a && a.bb.b && (c.yco = a.bb.a.YCoord.join("a"), c.yt = a.bb.a.time.join("a"), c.xco = a.bb.b.XCoord.join("a"), c.xt = a.bb.b.time.join("a"));
                a.az && a.az.l && a.az.l(b);
                a.v.a(b, c);
                b.unloadPixelSent = !0
            };
            a.e.p = function(a) {
                return a &&
                    a.video
            };
            a.m.a.azsx("adKilled", a.e.l, {
                includeId: !0
            });
            a.m.a.azsx("adNotFound", a.e.n, {
                includeId: !0
            });
            a.e.q = k;
            a.e.r = function(b, c, d, e, g, h, l, m) {
                var v = {
                    area: 0
                };
                a.b.forEach(b, function(b) {
                    var c = new a.aa.k(b);
                    c.area = c.height * c.width;
                    c && c.area >= v.area && (v = b, v.area = c.area)
                });
                if (c = a.e.e(v, c, d, e, g, h, l)) return c.isMultipartAd = !0, c.multipartComponents = b, a.b.f(m) && m.length === b.length ? k(c, m) : k(c, b), g.adFindingMethod = "MULTIPART_ADS", c
            };
            a.e.s = function(b, c, d, e, g, h, l, m) {
                l = l || {};
                l.components = b;
                if (c = a.e.e(b[0], c, d, e, g,
                        h, l)) return c.isCompositeAd = !0, c.components = b, a.b.f(m) && m.length === b.length ? k(c, m) : k(c, b), g.adFindingMethod = "COMPOSITE_ADS", c
            };
            a.e.g = function(a) {
                "number" === typeof a && (c = a)
            };
            a.e.t = function() {
                return c
            };
            a.e.f = function() {
                e = !1
            };
            a.e.h = function() {
                e = !0
            };
            a.e.c = function() {
                return !1 === e
            }
        })(m);
        (function(a) {
            function l(a) {
                var b = [];
                if ("string" !== typeof a) return !1;
                for (var d, g = !1, h = /(.*?[^\\])(?:\\\\)*\//; a;) {
                    if (k(a, ".../")) d = ".../";
                    else if (k(a, "...../")) d = "...../";
                    else if (k(a, "../") || k(a, "..../")) {
                        d = k(a, "../") ? "../" :
                            "..../";
                        for (var l = d.length; k(a.substring(l), d);) l += d.length;
                        d = a.substring(0, l)
                    } else k(a, "=>/") ? d = "=>/" : k(a, "-/") ? d = "-/" : k(a, "+/") ? d = "+/" : k(a, "$[") ? (d = a.length, l = c(a, "]/") + 2, d = a.substring(0, r.min(d, l))) : k(a, "^/") ? d = "^/" : k(a, "IN_IFRAME/") ? d = "IN_IFRAME/" : k(a, "IN_X_FRAME/") ? d = "IN_X_FRAME/" : (k(a, "${") ? (d = a.length, l = c(a, "}/") + 2, d = a.substring(0, r.min(d, l))) : d = (g = h.exec(a)) && g[0] ? g[0] : a, g = !0);
                    (a = a.substring(d.length)) && g && (d = d.substring(0, d.length - 1), g = !1);
                    b.push(d)
                }
                return b
            }

            function d(c) {
                if (!c) return !1;
                if (!a.d.l || 10 < a.b.n() || c.querySelectorAll && c.querySelector && (!c.MoatQSShimSet || c[h])) return !0;
                c.querySelector = function(a) {
                    a = this.querySelectorAll(a);
                    return a.length ? a[0] : null
                };
                c.querySelectorAll = function(a) {
                    var c = [],
                        d = this.ownerDocument || document,
                        e = d.createElement("style");
                    (d = d.getElementsByTagName("head")[0]) && d.insertBefore(e, d.childNodes[r.max(d.childNodes.length - 1, 0)] || null);
                    e && e.styleSheet && (e.styleSheet.cssText = a + "{shimtest:bar}");
                    a = this.getElementsByTagName("*");
                    for (var d = a.length, g = 0; g < d; g++) a[g].currentStyle &&
                        "bar" === a[g].currentStyle.shimtest && (c[c.length] = a[g]);
                    e.parentNode.removeChild(e);
                    return c
                };
                c.MoatQSShimSet = !0;
                return c[h] = !0
            }

            function g(c, b, f) {
                function g(a) {
                    if (w && 0 < w.length)
                        for (var b = w.length, c = 0; c < b; c++) a = a.replace("$" + c, w[c]);
                    return a
                }
                var h = function(b, c) {
                    if (!b || !c) return !1;
                    if (b.matches) return b.matches(c);
                    if (!d(b.parentNode)) return !1;
                    var f = b.parentNode.querySelectorAll(c);
                    if (!f || !f.length) return !1;
                    var e = !1;
                    a.b.forEach(f, function(a) {
                        a === b && (e = !0);
                        return !e
                    });
                    return e
                };
                c = l(c);
                if (!c) return !1;
                for (var m =
                        b, p = 0, w = [], r = function(b) {
                            return b && a.k.b(b)
                        }, v = function(a) {
                            return a && a.parentElement
                        }, q = function(b) {
                            return b ? (b = a.k.e(b)) && b.body : !1
                        }, n = function(a, b, c) {
                            return a ? (a = a.getAttribute(b)) && (c = (new RegExp(c)).exec(a)) && c.length && 0 < c.length ? c[c.length - 1] : !1 : !1
                        }, B = 0; B < c.length && 100 > p; B++) {
                    var C = c[B];
                    k(C, "${") && (C = C.substring(2, C.length - 1));
                    if (k(C, "../") || k(C, "..../")) {
                        var x, A;
                        k(C, "../") ? (x = "../", A = v) : (x = "..../", A = r);
                        if (0 !== C.length % x.length) return !1;
                        for (var F = 0; F < C.length / x.length; F++) {
                            if (!m || "HTML" === m.nodeName) return !1;
                            m = A(m);
                            p++
                        }
                    } else if (".../" === C)
                        for (C = c[B + 1] && g(c[B + 1]); 100 > p;) {
                            if (m && h(m, C)) {
                                B++;
                                break
                            }
                            if (!m || "HTML" === m.nodeName) return !1;
                            m = m.parentElement;
                            p++
                        } else if ("...../" === C) {
                            m = a.d.g && a.d.g.document && a.d.g.document.body;
                            if (!m) return !1;
                            p++
                        } else if ("=>/" === C) {
                        m = q(m);
                        if (!m) return !1;
                        p++
                    } else if ("-/" === C) {
                        m = a.b.previousElementSibling(m);
                        if (!m) return !1;
                        p++
                    } else if ("+/" === C) {
                        if (m = a.b.nextElementSibling(m), !m) return !1
                    } else if (k(C, "$["))
                        if (C = (x = (C = C.substring(2, C.length - 2)) && C.split("|")) && x[0], x = x && x[1], C && x)
                            if (C =
                                n(m, C, x)) w.push(C), p++;
                            else return !1;
                    else return !1;
                    else if ("^/" === C) {
                        m = b;
                        if (!m) return !1;
                        p++
                    } else if ("IN_IFRAME/" === C) {
                        if (!a.d.r) return !1;
                        p++
                    } else if ("IN_X_FRAME/" === C) {
                        if (!a.d.fg) return !1;
                        p++
                    } else if (C = g(C), !h(m, C)) {
                        if (!d(m)) return !1;
                        m = m.querySelectorAll(C);
                        if (f && B === c.length - 1) return m ? m : !1;
                        if (!m || 1 !== m.length) return !1;
                        m = m[0]
                    }
                }
                return m
            }
            a.aw = {};
            var h = "MoatQSShimOrd_" + Q + "_" + a.d.p,
                k = function(a, b) {
                    return 0 === a.indexOf(b) && b
                },
                c = function(a, b) {
                    var c = a.indexOf(b);
                    return 0 > c ? a.length + 1 : c
                };
            a.aw.a = function(c,
                b) {
                var d = [];
                a.b.forEach(c, function(a) {
                    (a = g(a, b)) && d.push(a)
                });
                return d
            };
            a.aw.c = function(c, b) {
                var d = [];
                a.b.forEach(c, function(a) {
                    if (a = g(a, b, !0))
                        for (var c = 0; c < a.length; c++) d.push(a[c])
                });
                return d
            };
            a.aw.b = function(c, b, d) {
                c = a.aw.a(c, d);
                a.b.forEach(c, function(c) {
                    a.l.c(b, c)
                });
                return !!c
            }
        })(m);
        (function(a) {
            function l(b, c, f, e, l, t) {
                t || (t = window);
                a.ax.e = b;
                var u = a.ax.g,
                    m = a.ax.h,
                    p = a.ax.i,
                    w = 0,
                    v = function() {
                        var l;
                        c.numTries = w++;
                        if (a.d.fh && a.ax.f(v, null, c) || a.d.fi && a.ax.f(v, null, c)) return !0;
                        if (!l) try {
                            m && (l = m(b, c,
                                f, e, null, t))
                        } catch (p) {}
                        if (!l && (l = u(b, c, f, e, null, t), !0 === l)) return !0;
                        if (a.d.j() && a.d.cs() && !l) {
                            var y = d();
                            h(y) && (l = k(c)) && (c.adFindingMethod = "Appscope Body")
                        }
                        a.d.d() && !l && (y = g(), h(y) && (l = k(c)) && (c.adFindingMethod = "Omid Body"));
                        l && a.av.o(l);
                        Y && c && (c.adFindingMethod = c.adFindingMethod ? c.adFindingMethod + (" | " + Y) : Y);
                        (y = l && l !== a.av.i) && a.b.forEach(a.ax.d.a, function(a) {
                            if (a && "function" === typeof a) try {
                                a(l)
                            } catch (b) {}
                        });
                        return y
                    };
                if (a.d.e) {
                    var y = !1,
                        r, q;
                    c && (r = "skin" in c && 1 == c.skin, q = "format" in c && "Wallpaper" ==
                        c.format);
                    c && c.zMoatPS && c.zMoatPS.match(/skin/) && (c.adFindingMethod = "Turner Wallpaper", y = !0);
                    if (r || q || y) "width" == a.ab.a && a.ab.c(), a.d.fj = !0, c.skin = 1, r ? (c.isSkin = 1, c.adFindingMethod = "skin1") : q && (c.isAolSkin = 1, c.adFindingMethod = "AOL Skin"), a.s && (a.s.n = function() {
                        return !1
                    }), v = function() {
                        var b, d = a.d.g.document.body;
                        c.numTries = w++;
                        if (a.ab.e.a(d, c)) return d && a.b.be(d) && (b = a.b.ar(d), b = a.e.e(d, b || d.nodeName, !1, void 0, c, f)), b && !0
                    }
                }
                a.p.k(v, p, 500, l)
            }

            function d() {
                var b = {
                        area: 5E3,
                        height: 40,
                        width: 40
                    },
                    c = a.d.ee &&
                    a.d.ee("appName"),
                    d = a.d.ee && a.d.ee("namespace");
                "NFL Mobile" === c && "NFL" === d && (b.height = 25);
                return b
            }

            function g() {
                var b = {
                    area: 5E3,
                    height: 40,
                    width: 40
                };
                "com.nfl.mobile3.enterprise" === (a.d.bg && a.d.bg("ya")) && (b.height = 25);
                return b
            }

            function h(b) {
                var c = a.d.g.innerWidth,
                    d = a.d.g.innerHeight,
                    f = d >= b.height,
                    e = c >= b.width;
                return c * d >= b.area && f && e
            }

            function k(b) {
                if (1 !== a.d.ao().isInApp) return !1;
                var c = a.d.g;
                if ((c = (c = c && c.document) && c.body) && "undefined" == typeof c.MOATALREADYFOUND) return a.e.e(c, "BODY", !1, void 0, b, !1)
            }

            function c(b, c, d, f, e) {
                var g, h, k, l = a.d.g.document.getElementById("eyeDiv");
                if (E && E.id && 0 <= E.id.indexOf("ebebDnlScript")) {
                    var t = E.id.split("_");
                    t && 3 === t.length && (k = t[1], g = t[2])
                }
                k = k || e.ebAdID;
                g = g || e.ebRand;
                k && g && (h = k + "_" + g);
                if (h && "object" === typeof e.ebAds && e.ebAds[h] && (g = e.ebAds[h].visibilityMgr && e.ebAds[h].visibilityMgr._res) && a.b.be(g) && (g = a.e.e(g, g.nodeName, !1, void 0, c, d))) return c.adFindingMethod = "SIZMEKADS", g;
                if (k && e.gEbBanners && a.b.d(e.gEbBanners)) {
                    var u = !1;
                    a.b.forEach(e.gEbBanners, function(a) {
                        if (a &&
                            a.adData && a.adData.nAdID == k) return u = a, !1
                    });
                    if (u && (e = u.displayUnit && u.displayUnit.defaultPanel && u.displayUnit.defaultPanel.panelDiv) && e.nodeName && "div" == e.nodeName.toLowerCase() && (g = q(e, c, d, f))) return c.adFindingMethod = "SIZMEKADS banner", g
                }
                e = b.getElementsByTagName("div");
                e = a.b.br(e);
                "DIV" === b.nodeName && e.push(b);
                if (e && 0 < e.length) {
                    var m = [];
                    a.b.forEach(e, function(a) {
                        a && a.id && a.id.match(/ebDiv\d+/) && m.push(a)
                    });
                    if (m && 0 < m.length && a.d.g && a.d.g.document) {
                        var p;
                        a.b.forEach(m, function(b) {
                            var c = a.d.g.document.getElementById(b.id);
                            if (c && c !== b) return p = c, !1
                        });
                        if (p) {
                            if (g = q(p, c, d, f)) return g;
                            if (p && a.b.be(p) && f(p)) {
                                if (g = a.e.e(p, p.nodeName, !1, void 0, c, d)) return c.adFindingMethod = "SIZMEKADS adDvi", g
                            } else {
                                b = p.getElementsByTagName("iframe");
                                e = p.id.split("ebDiv")[1];
                                var w = new RegExp("ebBannerIFrame_\\d+_" + e),
                                    v;
                                if (b && 0 < b.length && (a.b.forEach(b, function(b) {
                                        if (b && b.id && b.id.match(w) && a.b.be(b)) return v = b, !1
                                    }), v && f(v) && (g = a.e.e(v, v.nodeName, !1, void 0, c, d)))) return c.adFindingMethod = "SIZMEKADS banner iframe", g
                            }
                        }
                    }
                }
                if (h && l) {
                    f = [];
                    b = a.aw.a(["iframe[id*='header_iframe_" +
                        h + "']"
                    ], l)[0];
                    e = a.aw.a(["iframe[id*='leftgutter_iframe_" + h + "']"], l)[0];
                    g = a.aw.a(["iframe[id*='rightgutter_iframe_" + h + "']"], l)[0];
                    if (b)
                        if (a.b.be(b)) f.push(b);
                        else return !1;
                    if (e)
                        if (a.b.be(e)) f.push(e);
                        else return !1;
                    if (g)
                        if (a.b.be(g)) f.push(g);
                        else return !1;
                    if (f && 0 < f.length && (g = a.e.s(f, f[0].nodeName, !1, void 0, c, d))) return c.adFindingMethod = "SIZMEKADS-1", g;
                    (f = a.aw.a(["div[id*='" + h + "']"], l)[0]) || (f = a.aw.a(["div[id^='eb'][id*='" + h + "']"], l)[0]);
                    if (f) {
                        if (g = q(f, c, d)) return g;
                        if (a.b.be(f) && (g = a.e.e(f, f.nodeName, !1, void 0, c, d))) return c.adFindingMethod = "SIZMEKADS-2", g
                    }
                }
                if ("string" === typeof h && (h = document.getElementById("ebDefaultImg_" + h)) && (g = a.e.e(h, h.nodeName, !1, void 0, c, d))) return c.adFindingMethod = "SIZMEKADS-3", g
            }

            function e(b, c, d, f, e) {
                function g(b) {
                    return b ? a.aw.a(["div.jpstage"], b)[0] || !1 : !1
                }
                var h = g(b),
                    k = a.d.g.document;
                f && !h && (h = a.aw.a(["..../../div.jpplatform_" + f, "...../div[id='jpplatform_" + f + "']", "...../div.jpplatform_" + f], b)[0]);
                h || (h = g(k.getElementById("jpsuperheader")));
                h || (h = g(a.b.getElementsByClassName("jpeditorialunit",
                    "DIV", k.body)[0]));
                h || (h = g(k.getElementById("jpd_adhesion")));
                h || (b = (b = k.getElementById("jp_overlay") || f && k.getElementById("jp_overlay_" + f)) && a.b.getElementsByClassName("jppanel", "DIV", b)) && 1 <= b.length && a.b.forEach(b, function(b) {
                    if (b && a.b.be(b)) return h = b, !1
                });
                h || (k = k.getElementById("jpd_expfooter"), h = g(k));
                if (h && a.b.be(h) && e(h) && (ad = a.e.e(h, h.nodeName, !1, void 0, c, d))) return c.adFindingMethod = "JETPACKDIGITALADS", ad
            }

            function b(b, c, d, f) {
                if ((b = a.b.getElementsByClassName("originplatform-ad", "SCRIPT",
                        a.d.s ? b.ownerDocument && b.ownerDocument.documentElement || b : b)[0]) && b.id && (b = b.id.match(/embed_origin_(\d+)/)) && b[1] && (b = "OriginPlatformAdUnit-" + b[1] + "-inpage", b = document.getElementById(b) || a.d.s && a.d.g.document.getElementById(b)) && (d = a.e.e(b, b.nodeName, !1, void 0, c, d))) return c.adFindingMethod = "ORIGINADS", d
            }

            function f(b, c, d, f) {
                var e, g, h, k = b.childNodes,
                    l = !1;
                for (e = k.length - 1; 0 <= e; e--) {
                    var t = k[e];
                    "#comment" === t.nodeName && /undertone/i.test(t.nodeValue) ? l = !0 : "STYLE" === t.nodeName && (t = t.innerHTML.match(/(utpga\d+).+/i)) &&
                        2 === t.length && (h = t[1])
                }
                if (l) {
                    e = a.d.s ? (e = a.k.g(b)) && e.ownerDocument ? e.ownerDocument : document : document;
                    h && (g = e.getElementById(h), !g && a.d.s && (g = document.getElementsById(h)));
                    g || (h = e.getElementsByTagName("div"), a.b.forEach(h, function(a) {
                        if (a && a.id && a.id.match("utpga")) return g = a, !1
                    }), !g && a.d.s && (h = document.getElementsByTagName("div"), a.b.forEach(h, function(a) {
                        if (a && a.id && a.id.match("utpga")) return g = a, !1
                    })));
                    if (g) {
                        if (h = q(g, c, d, f)) return h;
                        if (a.b.be(g) && f(g) && (h = a.e.e(g, g.nodeName, !1, void 0, c, d))) return c.adFindingMethod =
                            "UNDERTONE pageGrabberDiv", h
                    }
                    if ((h = document.getElementById("utbanner") || a.d.s && a.d.g.document.getElementById("utbanner")) && (h = a.k.e(h)) && h.body && (h = q(h.body, c, d, f))) return c.adFindingMethod = "UNDERTONE fullPageAdIframe", h;
                    if ((h = a.b.getElementsByClassName("ut_container", "DIV")[0] || a.d.s && a.b.getElementsByClassName("ut_container", "DIV", a.d.g.document)[0]) && a.b.be(h) && f(h)) return h = a.e.e(h, h.nodeName, !1, void 0, c, d, {
                        adType: 2
                    }), c.adFindingMethod = "UNDERTONE screenshift", h;
                    if (d = document.getElementById("eyeDiv") ||
                        a.d.s && a.d.g.document.getElementById("eyeDiv"))
                        for (d = d.getElementsByTagName("object"), e = 0; e < d.length; e++)
                            if (h = d[e], "fixed" == h.style.position && a.b.be(h) && f(h)) return h = a.e.e({
                                el: h,
                                adIds: c
                            }), c.adFindingMethod = "UNDERTONE slider", h
                }
            }

            function t(b, c, d, f, e) {
                if ((b = c.tlview_id || c.tlviewID) && (b = document.getElementById(b) || a.d.g.document.getElementById(b)) && a.b.be(b) && (c = a.e.e(b, b.nodeName, !1, void 0, c, d))) return c
            }

            function u(b, c, d, f, e) {
                if (b = a.ax.m(["[tleid]"], b, c, d)) return b
            }

            function m(b, c, d, f, e) {
                if (e._tlCreatives &&
                    1 === e._tlCreatives.length && e._tlCreatives[0].hook && (c = (b = e._tlCreatives[0].hook) && a.ax.m(["-/[tleid]"], b, c, d))) return c
            }

            function p(b, c, d, f, e, g) {
                var h, k, l, t, u = [];
                if (h = f ? f : g.Adform && g.Adform.ADFBannerData && "string" === typeof g.Adform.ADFBannerData.BN && g.Adform.ADFBannerData.BN) {
                    if (f = (b = g.Adform && g.Adform.adRegister) && b[h]) l = f.collapsedContent && f.collapsedContent._element, t = f.expandedContent && f.expandedContent._element, k = f.adBox && f.adBox._attributes && f.adBox._attributes.element;
                    k || a.b.forEach(g.Adform &&
                        g.Adform.adData,
                        function(a) {
                            if (k = a && a.bn && a.bn == h && a.container) return !1
                        });
                    if (l && t && (a.b.be(l) || a.b.be(t)) && (g = a.e.e(l, l.nodeName, !1, void 0, c, d, {
                            adType: 2
                        }))) return c.adFindingMethod = "ADFORMADS two-element expandable", g.adformCollapsedEl = l, g.adformExpandedEl = t, g;
                    if (t && a.b.be(t) && (g = a.e.e(t, t.nodeName, !1, void 0, c, d, {
                            adType: 2
                        }))) return c.adFindingMethod = "ADFORMADS Single-element expandable", g;
                    if (k && a.b.be(k)) {
                        b && a.b.forEach(b, function(b, c) {
                            if (c && c.indexOf && -1 < c.indexOf(h + "#")) {
                                var d = b && b.adBox && b.adBox._attributes &&
                                    b.adBox._attributes.element;
                                d && d !== k && a.b.be(d) && u.push(d)
                            }
                        });
                        if (0 < u.length && (u.unshift(k), g = a.e.s(u, u[0].nodeName, !1, void 0, c, d, {
                                adType: 2
                            }))) return c.adFindingMethod = "ADFORMADS composite", g;
                        if (g = a.e.e(k, k.nodeName, !1, void 0, c, d, {
                                adType: 2
                            })) return c.adFindingMethod = "ADFORMADS-1", g
                    }
                }
            }

            function w(b, c, d, f, e, g) {
                if (e && g && (ad = a.ax.m(["div[id='ym_" + e + "'] > iframe/=>/div[id='" + g + "']"], b, c, d))) return c.adFindingMethod = "YIELDMOADS", ad;
                if (ad = a.ax.m(["..../iframe[id$='_tpi']/$[id|([0-9]*)_tpi]/../[id='$0']", "..../iframe[id$='_tpi']/../div.ym/$[data-lf-id|([0-9]+)]/iframe/=>/[id='$0']"],
                        b, c, d)) return c.adFindingMethod = "YIELDMOADS-1", ad;
                if (ad = a.ax.m(["div.ym/iframe/=>/body/video.video-elem"], b, c, d)) return c.adFindingMethod = "YIELDMOADS-2", ad;
                if (ad = a.ax.m(["div.ym"], b, c, d)) return c.adFindingMethod = "YIELDMOADS-3", ad
            }

            function r(b, c, d, f) {
                var e = function(a, b) {
                        return a && a.moatObject && a.moatObject[b]
                    },
                    g = function(b) {
                        return a.aw.a(["div.moat_trackable"], b)[0]
                    },
                    h = function(b) {
                        return (b = (b = a.k.e(b)) && b.documentElement) && g(b)
                    },
                    k = function(b) {
                        var c;
                        b = a.ax.a(b, a.ax.b);
                        a.b.forEach(b, function(a) {
                            if (c =
                                h(a)) return !1
                        });
                        return c
                    },
                    l = function() {
                        var b = e(t, "adElement");
                        if (b !== u)
                            if (a.b.be(b)) {
                                var d = m;
                                u = b;
                                u[I] = c.adNum;
                                u[A] = !0;
                                a.b.bg(u, d, !0);
                                (b = e(t, "adProxyElement")) && a.l.c(m, b)
                            } else a.b.bf(u) || (b = u, a.u.a(m), t.removeEventListener("adLoaded", l), b[I] = void 0, b[A] = void 0, ra())
                    };
                f = function(b) {
                    if (b) {
                        var f = e(t, "creativeType"),
                            g = e(t, "adProxyElement");
                        switch (f) {
                            case "banner":
                                if (a.b.be(b)) var h = a.e.e(b, b.nodeName, !1, void 0, c, d);
                                g && a.e.q(h, [g]);
                                c.adFindingMethod = "Creative API - Banner";
                                return h;
                            case "multipart":
                                return h =
                                    a.e.r(b, "DIV", !1, void 0, c, d, null, g), c.adFindingMethod = "Creative API - Multipart", h;
                            case "composite":
                                return h = a.e.s(b, "DIV", !1, void 0, c, d, null, g), c.adFindingMethod = "Creative API - Composite", h;
                            case "expandable":
                                return a.b.be(b) && (h = a.e.e(b, b.nodeName, !1, void 0, c, d), g && a.e.q(h, [g]), t.addEventListener("adLoaded", l)), c.adFindingMethod = "Creative API - Expandable", h
                        }
                    }
                };
                var t = function(b) {
                    if (a.d.fh) return a.d.fh;
                    var c = g(b);
                    c || (c = k(b));
                    c || (a.d.r ? (c = a.k.b(b), c = h(c)) : c = void 0);
                    if (!c) a: {
                        if (a.d.s && (b = a.k.g(b))) {
                            var c =
                                a.b.aq(b) === a.d.g,
                                d = a.d.e && "BODY" === b.nodeName;
                            if (!c || !d) {
                                c = g(b);
                                break a
                            }
                        }
                        c = void 0
                    }
                    c && (a.d.fh = c);
                    return c
                }(b);
                if (t) {
                    if (!e(t, "adLoaded")) return !1;
                    var u = e(t, "adElement");
                    if (!u) return !1;
                    var m = f(u);
                    return m ? m : !1
                }
            }

            function v(b, c, d, f) {
                var e = function(b) {
                    return a.aw.a(["div.celtra-ad-v3", "div.celtra-ad-v4"], b)[0]
                };
                f = function(b, c) {
                    var d, f = a.ax.a(b, a.ax.b);
                    a.b.forEach(f, function(b) {
                        if (b.offsetWidth * b.offsetHeight === c) return d = a.k.e(b).body, !1
                    });
                    return d ? d : !1
                };
                var g = function() {
                        var c, d = a.ax.a(b, a.ax.b);
                        a.b.forEach(d,
                            function(b) {
                                if ((b = (b = a.k.e(b)) && b.documentElement) && e(b)) return c = e(b), !1
                            });
                        return c
                    },
                    h = function() {
                        if (a.d.s) {
                            var c = a.k.g(b);
                            if (c) {
                                var d = a.b.aq(c) === a.d.g,
                                    f = a.d.e && "BODY" === c.nodeName;
                                d && f || (celtraDiviInParentFrame = e(c))
                            }
                        }
                    },
                    k;
                a.d.fi ? k = a.d.fi : ((k = e(b)) || (k = g()), k || (k = h()));
                var l;
                k && (l = k && k.celtra && k.celtra.viewabilityObservee);
                if (l && a.b.be(l)) return c.adFindingMethod = "Celtra API", c = a.e.e(l, l.nodeName, !1, void 0, c, d), d = a.b.cd(c), (l = f(l, d)) && a.l.c(c, l), c;
                k && !l && (a.d.fi = k);
                return !1
            }

            function q(b, c, d, f) {
                f =
                    f || function() {
                        return !0
                    };
                if (!b) return !1;
                var e = v(b, c, d, f);
                if (e) return e;
                if (a.d.fi) return !1;
                if ((e = (e = a.aw.a(["div.voxAdData"], b)[0]) && e.elementToTrack) && a.b.be(e)) return c.adFindingMethod = "Vox API", a.e.e(e, e.nodeName, !1, void 0, c, d);
                var e = a.b.n(),
                    g = null !== e && 11 > e;
                if (!g)
                    for (var h = b.getElementsByTagName("embed"), e = 0; e < h.length; e++) {
                        var k = h[e];
                        if (!0 !== k[A] && -1 === k.id.indexOf("moatPx") && a.b.be(k) && k.getAttribute("src") && f(k)) {
                            var l = k.getAttribute("src");
                            f = a.ay.a(l, k);
                            e = a.e.e(k, l, !1, f, c, d);
                            c.adFindingMethod =
                                "AOL-1";
                            return e
                        }
                    }
                for (var t = b.getElementsByTagName("object"), e = 0; e < t.length; e++)
                    if (h = t[e], a.b.be(h) && f(h) && ("undefined" === typeof h[A] || !0 !== h[A]) && -1 == h.id.indexOf("moatPx")) {
                        for (var u = 0; u < h.children.length; u++)
                            if ("movie" === h.children[u].name || "Movie" === h.children[u].name)
                                if (l = h.children[u].value, !l || !l.match("scorecardresearch"))
                                    for (var m = 0; m < h.children.length; m++) {
                                        if (!g && "EMBED" === h.children[m].tagName) {
                                            k = h.children[m];
                                            if ("undefined" !== typeof k[A] && !0 === k[A] || -1 != k.id.indexOf("moatPx")) continue;
                                            if (a.b.be(k) && f(k)) return f = a.ay.a(l, k), e = a.e.e(k, l, !1, f, c, d), c.adFindingMethod = "AOL Embed", e
                                        }
                                        if ("OBJECT" === h.children[m].tagName && (k = h.children[m], a.b.be(k) && !0 !== k[A] && -1 === k.id.indexOf("moatPx") && f(k))) return e = a.e.e(k, void 0, !1, void 0, c, d), c.adFindingMethod = "AOL Object", e
                                    }
                        h.object && h.object.Movie ? l = h.object.Movie : h.data && (l = h.data);
                        if (!l || !l.match("scorecardresearch")) return f = a.ay.a(l, h), e = a.e.e(h, l, !1, f, c, d), c.adFindingMethod = "SWF ads", e
                    }
                if (e = a.ax.p(b, c, d, f)) return e;
                l = b.getElementsByTagName("img");
                for (e = 0; e < l.length; e++)
                    if (g = l[e], ("undefined" === typeof g[A] || !0 !== g[A]) && a.b.be(g) && (k = g.getAttribute("src")) && "" !== k && -1 === document.location.href.indexOf(k) && f(g)) return d = a.e.e(g, k, !1, void 0, c, d), c.adFindingMethod = "Standard Image Ad finding ", d;
                if (b = (l = b.getElementsByTagName("canvas")) && l[0]) {
                    if (1 === l.length && a.b.be(b)) return d = a.e.e(b, b.nodeName, !1, void 0, c, d), c.adFindingMethod = "AKQAGAPGEN Canvas", d;
                    if (1 < l.length) {
                        if (f(b.parentNode) && a.b.be(b.parentNode)) return d = a.e.e(b.parentNode, b.parentNode.nodeName, !1, void 0, c, d), c.adFindingMethod = "AKQAGAPGEN-1", d;
                        if (a.b.be(b) && (d = a.e.e(b, b.nodeName, !1, void 0, c, d))) return a.d.r ? a.aw.b([".../body"], d, b) : a.aw.b(["../div"], d, b), c.adFindingMethod = "AKQAGAPGEN-2", d
                    }
                }
                return !1
            }

            function G(b, c) {
                for (var d = [], f = a.b.d(b) ? b : b.getElementsByTagName("iframe"), e, g = 0; g < f.length; g++)
                    if (e = f[g], !e[A]) {
                        var h = a.k.e(e) ? !1 : !0;
                        (1 === c && h && a.b.be(e) || 2 === c && !h) && d.push(e)
                    }
                return d
            }
            a.ax = {};
            a.ax.d = {};
            a.ax.d.a = [];
            a.ax.e = void 0;
            a.ax.f = function(b, c, d) {
                return a.d.aw.adFindingTimeout ? (a.b.a(a.d.aw.adFindingTimeout),
                    a.d.aw.adFindingTimeout = null, c || (c = function() {
                        a.v.b(11, d)
                    }), a.p.k(b, 9999, 500, c), !0) : !1
            };
            a.ax.c = function() {
                var b = arguments;
                a.focus.pageIsPrerendered() ? a.m.a.azsx("noLongerPreRendered", function(a) {
                    l.apply(this, b)
                }, {
                    once: !0
                }) : l.apply(this, b)
            };
            a.ax.p = function(b, c, d, f) {
                f = f || function() {
                    return !0
                };
                b = G(b, 1);
                if (b[0] && a.b.be(b[0]) && f(b[0])) return d = a.e.e(b[0], b[0].src, !1, void 0, c, d), c.adFindingMethod = "findIframeAds", d
            };
            a.ax.d.b = [];
            a.ax.n = function(b, c, d, f, e) {
                var g, h;
                f = a.ax.a(f || b, a.ax.b);
                for (var k = 0; k < f.length; k++) {
                    h =
                        f[k];
                    var l = a.k.e(h);
                    if (l && l.documentElement) {
                        a: {
                            g = b;
                            for (var t = c, u = d, m = h, p = l, w, v = a.ax.d.b, y = 0; y < v.length; y++)
                                if (w = v[y](g, t, u, m, p)) {
                                    t.adFindingMethod = "override file friendly iframe hooks";
                                    g = w;
                                    break a
                                }
                            g = void 0
                        }
                        if (g) return g;a: {
                            g = c;t = d;
                            if (h.id && h.id.match("ebBannerIFrame") && a.b.be(h) && (h = a.e.e(h, h.nodeName, !1, void 0, g, t))) {
                                g.adFindingMethod = "sizmek banner iframe";
                                g = h;
                                break a
                            }
                            g = void 0
                        }
                        if (g) return g;a: {
                            h = c;g = d;t = l;u = e && e.Adform && e.Adform.BannerData && "string" == typeof e.Adform.BannerData.ADFban && e.Adform.BannerData.ADFban;
                            m = !1;p = void 0;
                            try {
                                p = t && (t.defaultView || t.parentWindow)
                            } catch (r) {}
                            u && p && (frameAdformBannerId = p._Adform && p._Adform.BannerData && p._Adform.BannerData.ADFban, u == frameAdformBannerId && (m = t.getElementById("banner") || t.getElementById("video")));
                            if (m && a.b.be(m) && (ad = a.e.e(m, m.nodeName, !1, void 0, h, g))) {
                                h.adFindingMethod = "ADFORMADS iframe check";
                                g = ad;
                                break a
                            }
                            g = void 0
                        }
                        if (g) return g;
                        if (g = a.ax.m(["[id='ad']"], l.documentElement, c, d)) return c.adFindingMethod = "ad", g;
                        if (g = q(l.documentElement, c, d)) return c.adFindingMethod =
                            "Domsearch friendly iframe", g;
                        if (g) return g;
                        if (g = a.ax.q(l.documentElement, c, d)) return c.adFindingMethod = "Domsearch again in friendly iframe", g
                    }
                }
            };
            a.ax.q = function(b, c, d) {
                var f;
                b = a.ax.a(b, a.ax.b);
                for (var e = 0; e < b.length; e++)
                    if (f = b[e], (f = a.k.e(f)) && f.documentElement && (f = q(f.documentElement, c, d))) return c.adFindingMethod = "FLITEADS  FRIENDLY IFRAMES AGAIN DEFAULT", f
            };
            a.ax.k = function(b, c, d) {
                if ("function" !== typeof d && (b = a.av.n(b, c.adNum))) {
                    if (b === a.av.i) return a.av.i;
                    d = a.e.e(b, "div", !1, void 0, c, d);
                    c.adFindingMethod =
                        "USATODAYV3-2";
                    return d
                }
            };
            a.ax.r = function(b, c) {
                if (!wa && !1 !== b.shouldKillAd) {
                    var d = (new n).getTime() - c.ao.startTime;
                    !0 !== c.em && !0 !== c.preventTryFindingAdAgain && 5E3 > d && (a.ax.s(c), b.shouldKillAd = !1)
                }
            };
            var B = a.m.a.azsx("beforeAdKilled", a.ax.r);
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("beforeAdKilled", {
                    id: B
                })
            }, {
                once: !0
            });
            a.ax.t = function(a) {};
            a.ax.s = function(b) {
                if (!0 !== b.em) {
                    delete x[b.zr];
                    a.b.a(b.cc);
                    b.periscopeManager && b.periscopeManager.killAllPixels();
                    var c;
                    (c = E && E.parentNode) && a.ax.c(c,
                        b.ao, b, void 0,
                        function() {
                            a.u.a(b)
                        }, void 0)
                }
            };
            a.ax.m = function(b, c, d, f) {
                b = a.aw.a(b, c);
                var e;
                a.b.forEach(b, function(b) {
                    if (a.b.be(b)) return e = b, !1
                });
                if (e) return b = a.b.ar(e) || e.src || "DIV", f = a.e.e(e, b, !1, void 0, d, f), d.adFindingMethod = "DOMSEARCH", f
            };
            var C = function(b, c, d, f, e) {
                c = a.aw.a(c, d);
                c = a.b.filter(c, a.b.be);
                if (0 < c.length) return d = a.b.ar(c[0]) || c[0].getAttribute("src") || "DIV", b(c, d, !1, void 0, f, e)
            };
            a.ax.u = function(b, c, d, f) {
                return C(a.e.s, b, c, d, f)
            };
            a.ax.v = function(b, c, d, f) {
                return C(a.e.r, b, c, d, f)
            };
            var J = {
                    pre: [{
                        type: "banner",
                        name: "google_image_div",
                        domSearch: ["div#google_image_div"]
                    }]
                },
                H = function(b, c, d, f) {
                    var e = b.whitelist,
                        g = b.blacklist;
                    if (a.b.bt(e) || a.b.db(e, d))
                        if (a.b.bt(g) || !a.b.db(g, d)) {
                            var h = a.b.bu(function(b) {
                                    return a.b.dc(b, d)
                                }, b.domSearch),
                                k = function() {
                                    var e;
                                    switch (b.type) {
                                        case "banner":
                                            e = a.ax.m(h, c, d, f);
                                            break;
                                        case "composite":
                                            e = a.ax.u(h, c, d, f);
                                            break;
                                        case "multipart":
                                            e = a.ax.v(h, c, d, f);
                                            break;
                                        default:
                                            return
                                    }
                                    if (e) {
                                        var g = e,
                                            k = b.mouseListenerProxy;
                                        a.b.d(k) && (1 === k.length && "auto" === k[0] ? a.d.ff = !0 :
                                            a.aw.b(k, g, c))
                                    }
                                    return e
                                };
                            return b.waitForKnownAd ? (a.ax.f(function() {
                                return k()
                            }, null, d), !0) : k()
                        }
                },
                F = function(b, c, d, f) {
                    if (a.b.d(b)) {
                        var e;
                        a.b.forEach(b, function(a) {
                            var b = H(a, c, d, f);
                            if (b) return e = b, d.adFindingMethod = [Q, "-", a.name].join(""), !1
                        });
                        return e
                    }
                };
            a.ax.l = function(a, b, c) {
                return (a = F(J.pre, a, b, c)) ? a : !1
            };
            a.ax.o = function(a, b, c) {
                return (a = F(J.post, a, b, c)) ? a : !1
            };
            a.ax.j = q;
            a.ax.g = function(d, g, h, k, l, q) {
                q || (q = window);
                l = l || function() {
                    return !0
                };
                var z = a.ax.j,
                    B = a.ax.k;
                if ("undefined" === typeof d) return !1;
                if (a.d.r &&
                    "HEAD" === d.tagName) {
                    var n = d.parentNode;
                    "HTML" === n.tagName && (n = n.getElementsByTagName("body"), 0 < n.length && (d = n[0]))
                }
                if (n = r(d, g, h, l)) return n;
                if (a.d.fh) return !1;
                if (a.d.fi) return (n = v(d, g, h, l)) ? n : !1;
                if ((n = document.getElementById("mianahwvc")) && l(n) && (n = a.e.e(n, n.nodeName, !1, void 0, g, h))) return g.adFindingMethod = "APPSCOPE", n;
                if (n = a.ax.l(d, g, h)) return n;
                if (n = a.ax.m(["[id='ad']"], d, g, h)) return g.adFindingMethod = "DOM Id = ad", n;
                if (n = a.ax.m(["../body/ins[class='dcmads'][data-dcm-rendering-mode='script']"],
                        d, g, h)) return g.adFindingMethod = "DCM ins", n;
                if (n = a.ax.m(["div.teads-player/iframe", "div[id^='playArea']"], d, g, h)) return g.adFindingMethod = "teads", n;
                if (n = a.ax.m(["div.avalanche"], d, g, h)) return g.adFindingMethod = "avalanche", n;
                if (a.d.bs && a.d.bs() && "AdMarvel" == a.d.bs() && (n = a.ax.m(["[class='omws-container']", "[id='fill-wrapper']"], d, g, h))) return g.adFindingMethod = "Opera MRAID", n;
                if (n = c(d, g, h, l, q)) return n;
                if (g && g.zMoatPS && "bnr_atf_01" === g.zMoatPS && (n = a.k.b(d))) {
                    var C = !1;
                    a.b.forEach(a.b.as(n), function(a) {
                        if ("br-ad header" ===
                            a.className) return C = !0, !1
                    });
                    if (C) {
                        var x;
                        a.b.forEach(document.getElementsByTagName("script"), function(a) {
                            var b;
                            if (a.text && (b = a.text.match(/header_click_tag:'([^']*)/))) return x = b[1], !1
                        });
                        if ((n = a.b.aq(n)) && x) {
                            var G;
                            a.b.forEach(n.document.getElementsByTagName("a"), function(a) {
                                if (a.href === x && "logo" === a.className) return G = a, !1
                            });
                            if (G && l(G) && (n = a.e.e(G, G.nodeName, !1, void 0, g, h))) return g.adFindingMethod = "Old Turner Header Anchor", n
                        }
                    }
                }
                if (n = g && g.ntvDomSearch) return d = a.b.getElementsByClassName(n), d = a.b.filter(d,
                    a.b.be), 1 < d.length && (n = a.e.s(d, "DIV", !1, void 0, g, h)) ? (g.adFindingMethod = "NativoAds composite ads", n) : 1 === d.length && (n = a.e.e(d[0], d[0].nodeName, !1, void 0, g, h)) ? (g.adFindingMethod = "NativoAds single ad", n) : !1;
                if (n = a.ax.m(["div.str-adunit", "[data-str-native-key]", "[data-str-sibling]"], d, g, h)) return g.adFindingMethod = "Sharethrough", n;
                if (n = a.ax.m([".../[data-gg-moat]/[data-gg-moat-ifr]", ".../[data-gg-moat]", "[data-gg-moat]"], d, g, h)) return g.adFindingMethod = "GumGum", n;
                var n = (n = a.d.r ? d.ownerDocument.documentElement :
                        d) && n.getElementsByTagName("script"),
                    J = {},
                    F, A;
                n && 0 < n.length && (J.jpd = /ads\.jetpackdigital\.com\/lineitems\/(\d+)\/jpd/, J.adform = /adform\.(?:com|net)\/adfscript\/?\?bn=([0-9]+)/, J.quartz = /ads\.qs\.com/, J.yieldmo = /ads\.yieldmo\.com\/.*\&p=([0-9]+).*\&lf=([0-9]+)/, J.yieldmo2 = /static\.yieldmo\.com\/ym\.[a-z0-9]{2}\.js/, a.b.forEach(n, function(a) {
                    for (var b in J)
                        if (J.hasOwnProperty(b)) {
                            var c = a && a.getAttribute("src");
                            if (c && (F = c.match(J[b]))) return A = b, !1
                        }
                }));
                a.aw.a([".../[class*='jpeditorialunit']", ".../[class*='jpbanner']",
                    ".../[id*='jpplatform']", ".../[id*='jpd_adhesion']"
                ], d)[0] && (A = "jpd");
                if (A && "jpd" === A && (n = e(d, g, h, F && F[1], l)) || (n = b(d, g, h, l)) || A && "adform" === A && (n = p(d, g, h, F && F[1], l, q))) return n;
                if (n = t(d, g, h, l, q)) return g.adFindingMethod = "TRIPLELIFTADS: Moat script query string logic - " + (g.tlview_id ? "tlview_id" : "tlviewID"), n;
                if (n = u(d, g, h, l, q)) return g.adFindingMethod = "TRIPLELIFTADS: Domsearch tleid attribute", n;
                if (n = m(d, g, h, l, q)) return g.adFindingMethod = "TRIPLELIFTADS: Domsearch based on window", n;
                if (n = a.ax.m(["[id='qzad']"],
                        d, g, h)) return g.adFindingMethod = "Quartz", n;
                k = n = "";
                A && a.b.aj(["yieldmo", "yieldmo2"], A) && (n = F && F[1], k = F && F[2]);
                if (n = w(d, g, h, l, n, k)) return n;
                if (q = q.weborama_display_tag && q.weborama_display_tag.mediapath) {
                    n = /https?:\/\/([0-9a-zA-Z\.\/]+)/;
                    q = q.match && q.match(n)[1];
                    k = a.aw.c(["...../div[id^='scr_'][id*='remotediv']"], d);
                    for (var E = 0; E < k.length; E++)
                        if (n = a.ax.m(["${[src*='" + q + "']}", "+/${[src*='" + q + "']}"], k[E], g, h)) return g.adFindingMethod = "Weborama", n
                }
                if ((n = B(d, g, h)) || (n = z(d, g, h, l))) return n;
                if (n = a.ax.n(d,
                        g, h)) return g.adFindingMethod = "friendly iframe", n;
                if (k = a.k.g(d))
                    if (n = a.ax.n(k, g, h)) return g.adFindingMethod = "find iframe parent", n;
                if (a.d.s || k)
                    if (k = k || a.k.g(d))
                        if (q = a.b.aq(k) === a.d.g, n = a.d.e && "BODY" === k.nodeName, !q || !n) {
                            if (n = B(k, g, h)) return g.adFindingMethod = "iframe parent expandable", n;
                            if (n = z(k, g, h, l)) return g.adFindingMethod = "iframe parent findAd", n
                        }
                return (n = f(d, g, h, l)) ? (g.adFindingMethod = "Undertone", n) : (n = a.ax.o(d, g, h)) ? n : (n = a.ax.m(["div.str-content/div.adunit", "article.str-ent-native-card", "div.str-card-exp.str-quad",
                    "div.str-adunit.str-card-exp", "#theContainer"
                ], d, g, h)) ? (g.adFindingMethod = "Domsearch Late", n) : (n = a.ax.m(["../iframe#verve-banner", ".../body/iframe#verve-expandable/=>/div.content", ".../body/iframe#verve-expandable", "iframe#verve-banner/=>/div.content", "iframe#verve-banner"], d, g, h)) ? (g.adFindingMethod = "Verve", n) : (n = a.ax.m(["div.flex-player", "..../../div[id^='google_ads_iframe']/../div.flex-player", "div.flex-play", "..../../div[id^='google_ads_iframe']/../div.flex-play"], d, g, h)) ? (g.adFindingMethod = "WashPost",
                    n) : !1
            };
            a.ax.a = G;
            a.ax.w = function(b, c, d) {
                if (a.d.e && b && a.b.be(b) && a.ab.e.a(b, c)) {
                    "width" == a.ab.a && a.ab.c();
                    a.d.fj = !0;
                    c.skin = 1;
                    a.s && (a.s.n = function() {
                        return !1
                    });
                    var f = a.b.ar(b);
                    if (b = a.e.e(b, f || b.nodeName, !1, void 0, c, d)) return c.adFindingMethod = "WALLPAPERS ADS", b
                }
            };
            a.ax.x = 1;
            a.ax.b = 2;
            a.ax.y = 500;
            a.ax.i = 20;
            a.ax.z = {
                object: 1,
                embed: 1,
                img: 1,
                iframe: 1
            }
        })(m);
        (function(a) {
            function l(a) {
                "object" === typeof a && (a.fq = 0, a.gm = 0, a.ch = 0, a.ga = 0, a.gh = 0, a.hasOwnProperty("lx") && delete a.lx, a.um = 1)
            }

            function d(b) {
                var c = a.y.g(),
                    c = c ? c.length : 0;
                0 !== c && (b.vb = c)
            }

            function g(b) {
                a.b.da(a.d.bc) && 5E3 > encodeURIComponent(a.d.bc).length && (b.gu = a.d.bc, b.id = a.d.bd ? "1" : "0")
            }

            function h(b, c) {
                if (a.d.fl) {
                    var d = b.cm;
                    "number" === typeof d && (b.pc = d);
                    b.cm = 1;
                    !c && a.b.ag() && AB_SCAFFOLD.sampling.set({
                        multiplier: 1,
                        enabled: !1
                    })
                }!c && a.b.de() && AB_SCAFFOLD.sampling.getQueryString(b)
            }

            function k(b, c) {
                var d, e = [],
                    g, h = a.b.ah() ? 2048 : 7750,
                    k = c || {};
                g = {};
                b.fs = "171901";
                for (d in b) b.hasOwnProperty(d) && (1 != b.e || "x" !== d && "y" !== d && "c" !== d ? e.push(encodeURIComponent(d) +
                    "=" + encodeURIComponent(b[d])) : g[d] = b[d].split("a"));
                d = e.join("&");
                var e = h - d.length,
                    l = 0;
                if ("undefined" !== typeof g.x) {
                    for (var m = 0, q = 0; q < g.x.length; q++)
                        if (m += g.x[q].length + (g.y[q] ? g.y[q].length : 0) + (g.c[q] ? g.c[q].length : 0), m < e) l++;
                        else break;
                    0 < l && (d += "&x=" + g.x.slice(0, l - 1).join("a"), d += "&y=" + g.y.slice(0, l - 1).join("a"), d += "&c=" + g.c.slice(0, l - 1).join("a"))
                }
                for (var x in k) k.hasOwnProperty(x) && (g = "&" + encodeURIComponent(x) + "=" + encodeURIComponent(k[x]), g.length + d.length < h && (d += g));
                d = d.replace(/\x27/g, "%27");
                try {
                    var h = d,
                        B;
                    var k = d,
                        C = b.i,
                        J = new n,
                        A = [J.getFullYear(), ("0" + (J.getMonth() + 1)).slice(-2), ("0" + J.getDate()).slice(-2)].join("-"),
                        k = k + (C + A),
                        C = 0;
                    if (0 == k.length) B = C;
                    else {
                        for (J = 0; J < k.length; J++) var F = k.charCodeAt(J),
                            A = C,
                            A = (A << 5) - A + F,
                            C = A & A;
                        B = r.abs(C)
                    }
                    d = h + ("&na=" + B)
                } catch (E) {}
                return d
            }

            function c(b, c) {
                b.j = 25 == c ? "string" == typeof a.d.f && a.d.f.slice(0, 500) || "" : a.b.aa(a.d.f);
                if (!a.d.e) {
                    var d = a.b.v();
                    d && (b.lp = d)
                }
            }
            a.v = {};
            var e = "zMoatMGV_MAX zMoatMMV_MAX zMoatMMV zMoatMGV zMoatMData zMoatMSafety zMoatPS zMoatHT zMoatWD zMoatST zMoatTEAM zMoatSOC zMoatPG zMoatAPP zMoatBUZ zMoatISAPP zMoatCURL zMoatDev zMoatPLATFORM zMoatRetail zMoatPSB zMoatAdUnitRetail zMoatOrigSlicer1 zMoatOrigSlicer2 zMoatAltSL zMoatJS zMoatAppKey zMoatOptimize zMoatOptimize2 zMoatAR zMoatWDAC zMoatDR zMoatAU zMoatBeta cadf gptMoat_pg gptMoat_appname gptMoat_pos gptMoat_mivr zMoatAdUnit1 zMoatAdUnit2 zMoatAdUnit3 zMoatAdUnit4 zMoatNHTCode".split(" ");
            a.v.c = function(b, c) {
                b.hp = 1;
                a.d.e && window.top.document && window.top.document.hasFocus && "function" === typeof window.top.document.hasFocus && (b.wf = window.top.document.hasFocus() ? 1 : 0)
            };
            a.v.b = function(b, f, t, u, m) {
                a.x.b(f, u);
                var p = {};
                p.e = b;
                a.b.bo(p, t);
                p.i = Q;
                a.v.c(p, f);
                d(p);
                a.h && (p.cm = a.b.ac(a.h, a.i).multiplier);
                try {
                    p.kq = a.d.g && a.d.g.devicePixelRatio
                } catch (n) {
                    p.kq = 1
                }
                p.hq = a.d.o ? 1 : 0;
                p.hs = a.d.l ? 1 : 0;
                p.hu = a.d.aj ? 1 : 0;
                p.hr = a.d.af ? 1 : 0;
                p.ht = a.d.am ? 1 : 0;
                p.dnt = a.d.fb ? 1 : 0;
                if (11 === b) {
                    a.m.a.zaxs("adNotFound");
                    b = [];
                    for (var w in Ca) Ca.hasOwnProperty(w) &&
                        b.push(w + "=" + Ca[w]);
                    p.k = b.join("&").slice(0, 300)
                }
                if (!(p.e in Ja)) {
                    p.bq = a.d.ay;
                    1 === f.skin && (p.wp = 1 === f.isSkin ? 1 : 1 === f.isAolSkin ? 2 : 3);
                    p.f = Number(!Ma);
                    a.d.bl && (p.nh = 1);
                    c(p, p.e);
                    p.t = f.startTime;
                    p.de = f.rand;
                    p.m = 0;
                    p.ar = "e2b442bdf4f-clean";
                    p.iw = "e59434f";
                    a.b.bs(p, "ai", q.z);
                    a.b.bs(p, "wr", q.ACTIVETIMEUNTILSCROLL);
                    p.q = q.m++;
                    p.cb = sa ? 1 : 0;
                    p.ym = a.d.c && a.d.c() ? 1 : 0;
                    p.cu = ea;
                    p.ll = a.d.df || 0;
                    a.b.bs(p, "lm", a.d.db());
                    p.ln = a.d.r ? 1 : 0;
                    p.r = a.s.i;
                    a.b.bo(p, a.focus.getQueryString());
                    a.x.l(f, p);
                    "undefined" !== typeof f && (p.d = f.moatClientLevel1 +
                        ":" + f.moatClientLevel2 + ":" + f.moatClientLevel3 + ":" + f.moatClientLevel4, a.b.forEach(e, function(a) {
                            p[a] || f[a] && "-" !== f[a] && (p[a] = f[a])
                        }), !p.zMoatCURL && f.zMoatCURL && (p.zMoatCURL = f.zMoatCURL), !p.zMoatDev && f.zMoatDev && (p.zMoatDev = f.zMoatDev), f.adFindingMethod && (p.hv = f.adFindingMethod), a.f && (p.qs = a.f.p), p.zGSRC = "1", f.zMoatCHNLS && (p.gv = f.zMoatCHNLS), f.zMoatGSCACHE && (p.hw = f.zMoatGSCACHE), g(p), f.zMoatOptimize && (p.zMoatOptimize = f.zMoatOptimize), p.bo = f.moatClientSlicer1, p.bp = f.moatClientSlicer2, p.bd = f.zMoatPS ||
                        "Position Not Identified", p.zMoatPS = f.zMoatPS || "Position Not Identified", p.zMoatPS = f.zMoatPS || "Position Not Identified", p.zMoatAltSL = "zMoatAdUnit1:zMoatAdUnit2:zMoatPS", p.zMoatOrigSlicer1 = f.zMoatOrigSlicer1, p.zMoatOrigSlicer2 = f.zMoatOrigSlicer2, p.dfp = "0,4", p.la = f.zMoatOrigSlicer2, p.gw = "turner763610601596", p.fd = "1");
                    a.d.d() && (a.d.cw() && a.q.m(p), a.q.b(p), a.q.r(p, f));
                    a.d.cs() && (a.d.cv() && a.t.k(null, f, p), a.t.l(p));
                    a.n.m(p);
                    p.ac = 1;
                    p.it = a.ax.y;
                    a.d.ao().isInApp && (p.lv = a.d.cq(), p.zl = a.d.dy() ? 1 : 0, a.d.cr() ?
                        (a.b.ba() && (p.wo = 1), (w = a.b.ax(a.d.be)) && (p.zMoatMMAKns = w)) : a.d.cy() && (p.lx = 1));
                    a.e.c() && l(p);
                    p.ti = M;
                    p.ih = 1;
                    a.b.de() && (p.sk = AB_SCAFFOLD.scaffoldID, p.tn = AB_SCAFFOLD.AB_TEST_NAME);
                    h(p, m);
                    b = k(p);
                    w = za;
                    b = a.v.d(f, b + "&cs=0", p);
                    if (!0 === m) return {
                        qs: p,
                        res: b
                    };
                    b.shouldSendPixel && b.querystring && q.yh.yi(b.querystring, w)
                }
            };
            a.v.a = function(b, f, t) {
                if (window && window.closed || !b || !0 === b.ep) return !1;
                a.v.c(f, b.ao);
                d(f);
                try {
                    f.kq = a.d.g && a.d.g.devicePixelRatio
                } catch (m) {
                    f.kq = 1
                }
                a.ax.t(b);
                if ("undefined" !== typeof b.ao && (2 !== b.an ||
                        1 !== f.e && 3 !== f.e) && !(f.e in Ja)) {
                    f.lo = b.FIND_AD_TRIES;
                    b.proxyTrackingEnabled && (f.tr = 1);
                    f.uk = a.b.ax(a.d.be);
                    var u = a.b.ay(),
                        n = a.b.cv(u.results),
                        p = {
                            article: "pk",
                            page_height: "wk",
                            meta_properties: "rk",
                            favicon: "tk"
                        };
                    a.b.forEach(n, function(a) {
                        f[p[a]] = u.results[a] ? 1 : 0
                    });
                    b.hasNonIframeListener && (f.ni = 1);
                    var w = b.ag,
                        n = {},
                        D = a.o.b(b.zr);
                    if (9 === f.e && 2 === f.q || 25 === f.e) {
                        for (var v in w) w.hasOwnProperty(v) && "" !== v && "undefined" !== typeof w[v] && -1 === v.indexOf("dvContains") && -1 === v.indexOf("indexOf") && -1 === v.toLowerCase().indexOf("clicktag") &&
                            (n["z" + v] = w[v]);
                        f.e = 25
                    }
                    0 === b.an && (f.dc = b.WMODE);
                    a.f && (f.qs = a.f.p);
                    "string" !== typeof b.ae || 0 != f.e && 25 != f.e ? f.ak = "-" : (v = a.d.l ? 700 : 1200, f.ak = b.ae.length <= v ? b.ae : b.ae.slice(0, v));
                    b.bi > b.bg && (b.bg = b.bi);
                    b.bm > b.bk && (b.bk = b.bm);
                    f.i = Q;
                    a.b.bo(f, a.f.u(!0));
                    f.bq = a.d.ay;
                    1 === b.ao.skin && (f.wp = 1 === b.ao.isSkin ? 1 : 1 === b.ao.isAolSkin ? 2 : 3);
                    f.g = b.aq.g++;
                    b.isSREMeasurable || b.setDimensions();
                    a.d.fj ? (w = a.d.t(a.d.g), v = w.width, w = w.height) : b.compositeAdAreaPx ? (v = b.compositeAdAreaPx, w = 1) : (v = b.INITIAL_WIDTH, w = b.INITIAL_HEIGHT);
                    v = v || 0;
                    w = w || 0;
                    0 < v && 0 < w && (b.isSREMeasurable = !0);
                    f.hq = a.d.o ? 1 : 0;
                    f.hs = a.d.l ? 1 : 0;
                    f.hu = a.d.aj ? 1 : 0;
                    f.hr = a.d.af ? 1 : 0;
                    f.ht = a.d.am ? 1 : 0;
                    f.dnt = a.d.fb ? 1 : 0;
                    a.n.a() && a.n.realEstateMeasurements && (v = a.n.realEstateMeasurements.w, w = a.n.realEstateMeasurements.h);
                    f.h = w;
                    f.w = v;
                    a.d.d() && (f.om = a.e.t());
                    a.d.j() && (v = a.d.u(), f.rm = 0 < v.width && 0 < v.height && a.n.realEstateMeasurements ? 1 : 0);
                    try {
                        a.d.dj() && b && b.elementRect && (f.fy = b.elementRect.left, f.gp = b.elementRect.top)
                    } catch (m) {}
                    f.zGSRC = "1";
                    b.ao.zMoatCHNLS && (f.gv = b.ao.zMoatCHNLS);
                    b.ao.zMoatGSCACHE && (f.hw = b.ao.zMoatGSCACHE);
                    g(f);
                    a.h && (f.cm = a.b.ac(a.h, a.i).multiplier);
                    f.f = Number(!Ma);
                    c(f, f.e);
                    f.t = b.ao.startTime;
                    f.de = b.ao.rand;
                    f.cu = ea;
                    f.m = f.m || a.b.an(b);
                    f.ar = "e2b442bdf4f-clean";
                    f.iw = "e59434f";
                    f.cb = sa ? 1 : 0;
                    f.ym = a.d.c && a.d.c() ? 1 : 0;
                    f.ll = a.d.df || 0;
                    a.b.bs(f, "lm", a.d.db());
                    f.ln = a.d.r ? 1 : 0;
                    f.r = a.s.i;
                    a.b.bo(f, a.r.c());
                    a.d.e && (f.gh = 1);
                    a.d.bl && (f.nh = 1);
                    f.xx = a.d.fk + ":" + a.f.au();
                    f.td = a.d.dc;
                    a.d.v();
                    f.qa = a.d.y;
                    f.qb = a.d.z;
                    f.qi = a.d.w;
                    f.qj = a.d.x;
                    f.qf = a.d.aa;
                    f.qe = a.d.ab;
                    f.qh = a.d.ac;
                    f.qg = a.d.ad;
                    try {
                        f.lk = b && b.elementRect && b.elementRect.top + a.d.ae || "undefined"
                    } catch (m) {}
                    f.lb = a.d.i;
                    f.le = Na ? 1 : 0;
                    a.f && void 0 !== a.f.al && (f.lf = a.f.al);
                    a.f && void 0 !== a.f.av && (f.lj = a.f.av);
                    a.f && void 0 !== a.f.aw && (f.li = a.f.aw);
                    a.f && void 0 !== a.f.ad && (f.lg = a.f.ad);
                    a.f && void 0 !== a.f.an && (f.lh = a.f.an);
                    a.o.e() && (f.mn = 1, a.o.f() && (f.mo = 1));
                    a.d.ds() && (f.gm = 1, a.d.e && "sframe" === D && (f.fq = 0));
                    a.d.dk() && (f.io = 1);
                    a.d.cd && (f.fa = 1);
                    "number" !== typeof a.d.cf || isNaN(a.d.cf) || (f.zz = a.d.cf);
                    a.d.ch() && (f.fx = 1);
                    a.d.bn() && a.d.bp() && (f.mm = 1);
                    a.d.cn() && (f.hx = 1);
                    if (a.r && a.r.a()) f.ch = 1, f.gh = 1;
                    else if (a.s && a.s.a) {
                        a.d.by && (f.ss = 1);
                        a.d.et && (f.ie = 1);
                        if (b && b.periscopeManager) {
                            v = !a.focus.pageIsVisible() && b && b.counters && b.counters.strictDwell && 0 == b.counters.strictDwell.tCur && 21 == f.e;
                            w = a.b.ak && "0" != a.b.ak();
                            if (b.periscopeManager.measurable || !a.d.e && v && w) f.ch = 1;
                            b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (f.ga = 1)
                        } else f.ch = 1;
                        "undefined" !== typeof a.s.am && b && b.ao && b.ao.startTime && !isNaN(b.ao.startTime) && (v = a.s.am - b.ao.startTime, f.fg = 0 <=
                            v ? v : 0)
                    } else f.ch = 0;
                    f.vv = D ? b.viewabilityMethod[D] : 0;
                    v = b.viewabilityMethod;
                    f.vw = (v.strict || 0) + ":" + (v.sframe || 0) + ":" + (v.pscope || 0);
                    v = b.viewabilityPercent;
                    f.vp = v[D];
                    f.vx = v.strict + ":" + v.sframe + ":" + v.pscope;
                    a.b.bo(f, a.o.w(b.zr, f));
                    a.b.bo(f, a.focus.getQueryString());
                    a.b.bo(f, a.ar.b(b.zr));
                    a.b.bo(f, a.bc.a(b.zr));
                    a.b.bo(f, a.az.f(b.zr));
                    a.b.bo(f, b.counters.getQs());
                    b.px2 && b.px2.inSample && !b.px2.success && (f.zMoatIDF = 1);
                    a.bd.a(b, f);
                    a.af.b(b, f);
                    a.b.bs(f, "ai", q.z);
                    a.b.bs(f, "wr", q.ACTIVETIMEUNTILSCROLL);
                    a.b.bs(f,
                        "ap", b.cb);
                    a.b.bs(f, "ax", b.bg);
                    a.b.bs(f, "ay", b.bi);
                    a.b.bs(f, "az", b.bk);
                    a.b.bs(f, "ba", b.bm);
                    a.b.bs(f, "aw", b.bc);
                    a.b.bs(f, "bg", b.bd);
                    a.b.bs(f, "be", b.be);
                    a.b.bs(f, "bc", b.bw);
                    a.b.bs(f, "bf", b.by);
                    a.b.bs(f, "bh", b.bx);
                    a.b.bs(f, "bz", b.cu);
                    f.cl = r.round(100 * b.IR5.AREA / (f.w * f.h));
                    0 < b.aq[2] && (f.au = b.aq[2] - 1);
                    0 < b.aq[3] && (f.av = b.aq[3] - 1);
                    0 < b.aq[23] && (f.by = b.aq[23] - 1);
                    f.at = b.dm;
                    a.x.l(b.ao, f);
                    f.d = b.ao.moatClientLevel1 + ":" + b.ao.moatClientLevel2 + ":" + b.ao.moatClientLevel3 + ":" + b.ao.moatClientLevel4;
                    b.ao.zMoatOptimize &&
                        (f.zMoatOptimize = b.ao.zMoatOptimize);
                    f.bo = b.ao.moatClientSlicer1;
                    f.bp = b.ao.moatClientSlicer2;
                    f.bd = b.ao.zMoatPS || "Position Not Identified";
                    f.zMoatPS = b.ao.zMoatPS || "Position Not Identified";
                    f.zMoatPS = b.ao.zMoatPS || "Position Not Identified";
                    f.zMoatAltSL = "zMoatAdUnit1:zMoatAdUnit2:zMoatPS";
                    f.gw = "turner763610601596";
                    f.zMoatOrigSlicer1 = b.ao.zMoatOrigSlicer1;
                    f.zMoatOrigSlicer2 = b.ao.zMoatOrigSlicer2;
                    f.dfp = "0,4";
                    f.la = b.ao.zMoatOrigSlicer2;
                    a.b.forEach(e, function(a) {
                        f[a] || b.ao[a] && "-" !== b.ao[a] && (f[a] = b.ao[a])
                    });
                    !f.zMoatCURL && b.ao.zMoatCURL && (f.zMoatCURL = b.ao.zMoatCURL);
                    !f.zMoatDev && b.ao.zMoatDev && (f.zMoatDev = b.ao.zMoatDev);
                    b.ao.adFindingMethod && (f.hv = b.ao.adFindingMethod);
                    f.ab = b.an;
                    f.ac = 1;
                    f.fd = "1";
                    f.kt = D;
                    f.it = a.ax.y;
                    a.d.d() && (b.aa === a.d.g.document.body && (f.zg = 1), a.d.cw() && a.q.m(f), a.q.b(f));
                    a.d.cs() && (b.aa === a.d.g.document.body && (f.zg = 1), a.d.cv() && a.t.k(b, b.ao, f), a.t.l(f));
                    a.n.m(f);
                    b.bi = b.bg;
                    b.bm = b.bk;
                    a.ac.g(b) && (f.fz = 1);
                    D = a.ac.d(b.zr);
                    f.oq = D ? 1 : 0;
                    "undefined" !== typeof b.zr && (f.ot = a.ac.h[b.zr].stateMask.toString(16));
                    a.d.ao().isInApp && (f.lv = a.d.cq(), f.zl = a.d.dy() ? 1 : 0, a.d.cr() ? (a.b.ba() && (f.wo = 1), (D = a.b.ax(a.d.be)) && (f.zMoatMMAKns = D)) : a.d.cy() && (f.lx = 1));
                    b.debugData && (f.zMoatJS = b.debugData.getValue());
                    f.ti = M;
                    f.ih = 1;
                    a.b.de() && (f.sk = AB_SCAFFOLD.scaffoldID, f.tn = AB_SCAFFOLD.AB_TEST_NAME);
                    b && b.isMeasurabilityDisabled() && l(f);
                    a.e.c() && l(f);
                    a.b.aj([2], f.e) && b.aq.tc++;
                    f.tc = b.aq.tc;
                    h(f, t);
                    v = k(f, n);
                    D = za;
                    if (t) return f;
                    t = a.v.d(b.ao, v + "&cs=0", f, n);
                    t.shouldSendPixel && t.querystring && q.yh.yi(t.querystring, D)
                }
            };
            a.v.e = function(a,
                c) {
                a.zMoatSrcd = a.d;
                a.zMoatSrcbo = a.bo;
                a.zMoatSrcbp = a.bp;
                a.zMoatSrcbd = a.bd;
                a.d = (c.moatClientLevel1 || "") + ":";
                a.d += (c.moatClientLevel2 || "") + ":";
                a.d += (c.moatClientLevel3 || "") + ":";
                a.d += c.moatClientLevel4 || "";
                return a
            };
            a.v.f = function(b, c, d, e, g, h, l) {
                b = "extraPx_" + b;
                c[b] || (c[b] = {});
                e = a.b.g(e);
                e.zMoatSrci = e.i;
                e.i = d;
                l && (e = a.v.e(e, l));
                if (a.f.ax && !c[b].timestampsReset)
                    for (var m = 0; m < a.f.ax.length; m++) {
                        var n = a.f.ax[m];
                        n.zMoatSrci = n.i;
                        n.i = d;
                        l && (n = a.v.e(n, l));
                        n = k(n) + "&cs=0";
                        q.yh.yi(n, g)
                    }
                c[b].timestampsReset || (c[b].timestampsReset = !0, e.lc && (e.lc = 0), e.cd && (e.cd = 0), e.sm && (e.sm = 0), e.fv && (e.fv = 0), e.pn && (e.pn = 0), e.lt && (e.lt = 0), e.ba && (e.ba = 0), e.sq && (e.sq = 0), e.gg && (e.gg = 0), e.mu && (e.mu = 0), e.si && (e.si = 0), e.aq && (e.aq = 0), e.mc && (e.mc = 0), e.dt && (e.dt = 0), e.gt && (e.gt = 0), e.ao && (e.ao = 0), e.mk && (e.mk = 0), e.dr && (e.dr = 0), e.ev && (e.ev = 0), e.ge && (e.ge = 0), e.mx && (e.mx = 0), e.an && (e.an = 0), e.cf && (e.cf = 0), e.gl && (e.gl = 0), e.mw && (e.mw = 0), e.xb && (e.xb = 0), e.db && (e.db = 0), e.am && (e.am = 0), e.fj && (e.fj = 0), e.my && (e.my = 0), e.mz && (e.mz = 0), e.cn && (e.cn = 0), e.es && (e.es = 0), e.sa &&
                    (e.sa = 0), e.fp && (e.fp = 0), e.pf && (e.pf = 0), e.ay && (e.ay = 0), e.fn && (e.fn = 0), e.bx && (e.bx = 0));
                b = k(e, h);
                q.yh.yi(b + "&cs=0", g)
            };
            a.v.d = function(b, c, d, e) {
                b = !0;
                if (a.h && (b = a.b.af(), !b)) {
                    for (var g = [1, 2, 3, 23, 25], h = 0, l = g.length; h < l; h++)
                        if (d.e == g[h]) {
                            b = !0;
                            break
                        }
                    b && (d.cm = 0, c = k(d, e), c += "&cs=0")
                }
                return {
                    shouldSendPixel: b,
                    querystring: c
                }
            };
            a.v.g = function(a, c) {
                if (2 !== a.an || 1 !== c.e && 3 !== c.e)(new Image(1, 1)).src = ""
            };
            a.v.h = function(b) {
                var c = a.v.i(b.data);
                c.i += b.iKeySuffix;
                var d = k(c, b.flashVarsForQS) + "&cs=0";
                if (b.sendNow) {
                    var e =
                        b.useBeacon;
                    if (a.f.ax)
                        for (var g = 0; g < a.f.ax.length; g++) {
                            var h = a.f.ax[g];
                            h.i += b.iKeySuffix;
                            h = k(h) + "&cs=0";
                            q.yh.yi(h, b.pixelURL)
                        }
                    e ? navigator.sendBeacon("//bn.pixel.moatads.com/pixel.gif?" + d, "") : q.yh.yi(d, b.pixelURL)
                }
                return c
            };
            a.v.i = function(b) {
                b = a.b.g(b);
                for (var c = "am an ao aq ay ba bx cd cf db dr dt es ev sa sq si sm mc lc pf xb ge gg cn gl pn fj lt mu mk mw mx my mz fn fp fv".split(" "), d = 0; d < c.length; d++) b[c[d]] && (b[c[d]] = 0);
                return b
            };
            a.v.j = function(a, c) {
                return k(a, c)
            };
            a.v.k = function(b) {
                var c = {
                    e: 16
                };
                c.q = b.aq[16]++;
                a.v.a(b, c)
            };
            a.v.l = function(b) {
                var c = !1,
                    d = a.v.b(8, b.ao, !1, !1, !0);
                if (d && d.qs && d.qs.d) {
                    c = d.qs.d.split(":");
                    c = {
                        viewHash: Q,
                        moatClientLevel1: c[0],
                        moatClientLevel2: c[1],
                        moatClientLevel3: c[2],
                        moatClientLevel4: c[3],
                        tagStartTime: a.d.p
                    };
                    if (b && b.ao)
                        for (var e in b.ao) b.ao.hasOwnProperty(e) && -1 != e.indexOf("zMoat") && (c[e] = b.ao[e]);
                    for (e in d) d.hasOwnProperty(e) && -1 != e.indexOf("zMoat") && (c[e] = d[e])
                }
                return c
            };
            a.v.m = function(b) {
                var c = {
                    e: 8
                };
                c.q = b.aq[8]++;
                return a.v.a(b, c, !0)
            }
        })(m);
        (function(a) {
            function l(d,
                g, c, e, b) {
                var f = 1E4;
                a.d.ao().isInApp && (f = 500);
                (new n).getTime();
                this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
                this.getMaxContinuous = function() {
                    return r.max(this.tContinuous, this.tMaxContinuous)
                };
                this.reset = function() {
                    this.tLast = this.tCur = 0
                };
                this.update = function(a, c, g) {
                    d(a) ? (c = r.min(c, f), a = typeof e, c && 0 > c && (c = 0), this.tCur += c, this.tContinuous += c, "number" === a && 0 < e ? this.tCur > e && (this.tCur = e) : "function" === a && (c = e(), "number" === typeof c && this.tCur > c && 0 < c && (this.tCur = c))) : (this.tMaxContinuous <
                        this.tContinuous && (this.tMaxContinuous = this.tContinuous), this.tContinuous = 0);
                    b && b(this.tCur)
                };
                this.getQs = function(a) {
                    a = this.query(a);
                    this.tLast = this.tCur;
                    return a
                };
                this.query = function(a) {
                    a = a || {};
                    this.tLast > this.tCur && (this.tLast = this.tCur);
                    g && c && (a[g] = this.tCur, a[c] = this.tLast);
                    return a
                }
            }
            a.u = {};
            a.u.g = {};
            a.u.g.a = [];
            a.u.g.b = [];
            var d = !1,
                g = {};
            a.u.i = function() {
                if (!d) {
                    d = !0;
                    try {
                        var g = q.swde.azsx("scroll", a.u.j);
                        a.m.a.azsx("allLocalAdsKilled", function() {
                            q.swde.sxaz("scroll", {
                                id: g
                            })
                        }, {
                            once: !0
                        })
                    } catch (k) {}
                }
            };
            a.u.k = function(d, g) {
                try {
                    if (a.d.c()) return !0;
                    var c = d.aa,
                        e = a.b.as(c, 5),
                        b = e && (6 == e.length || 1 <= e.length && "HTML" === e[e.length - 1].nodeName);
                    g = g || d.WINDOW || a.b.aq(c);
                    return !(c && g && b) || "Unicast Generic" === Y && a.av.k(d.zr) && (3 > c.offsetWidth || 3 > c.offsetHeight) || c.ownerDocument && c.ownerDocument.body && !c.ownerDocument.body.contains(c) ? !1 : !0
                } catch (f) {
                    return !1
                }
            };
            a.u.l = function() {
                function d() {
                    if (!f) try {
                        f = !0, g(b), f = !1
                    } catch (a) {
                        throw f = !1, a;
                    }
                }

                function g(a) {
                    var b = a.Moat;
                    a = a.domNodesIdToAd;
                    for (var d in a) a.hasOwnProperty(d) &&
                        b.av.m("loop", d);
                    b.u.m();
                    d = (new n).getTime();
                    a = r.max(r.min(d - c, e), 0);
                    b.m.a.zaxs("view:tick", a, d);
                    c = d;
                    b.az.d()
                }
                var c = (new n).getTime(),
                    e = 1E4;
                a.d.ao().isInApp && (e = 500);
                var b = {
                        Moat: a,
                        domNodesIdToAd: x
                    },
                    f = !1;
                a.m.a.azsx("periscope:onStateChange", d);
                a.m.a.azsx("viewCounterStarted", d);
                var l = "MOAT_VIEW_LOOP_ID_" + (new n).getTime();
                a.p.g(g, b, 200, l);
                return a.b.cn([b], g)
            }();
            a.u.m = function() {
                var d, g;
                for (g in x) x.hasOwnProperty(g) && (d = x[g], a.u.k(d, d.WINDOW) || a.u.a(d))
            };
            a.u.a = function(d) {
                if (!0 !== d.ep) {
                    if (!wa) {
                        var g = {
                            shouldKillAd: !0
                        };
                        a.m.a.zaxs("beforeAdKilled", g, d);
                        if (!g.shouldKillAd) return
                    }
                    a.m.a.zaxs("adKilled", d);
                    a.e.o(d)
                }
            };
            a.u.e = function(d) {
                d.eq || (d.eq = !0);
                var g = {
                    e: 5
                };
                g.q = d.aq[5]++;
                a.v.a(d, g)
            };
            a.u.d = function(d) {
                if (!d || !d.aq || !d.aq[0]) return !1;
                var g = {
                    e: 37
                };
                g.q = d.aq[37]++;
                a.v.a(d, g)
            };
            a.u.n = [];
            a.u.o = function(d, g) {
                var c = !1;
                if (!d || !d.aq || !d.aq[29] || 3 > d.aq[29]) return !1;
                for (var e = 0; e < g.length; e++) {
                    var b = g[e]; - 1 === a.b.indexOf(a.u.n, b) && (c = !0, a.u.n.push(b))
                }
                c && (c = {
                    e: 37
                }, c.q = d.aq[37]++, a.v.a(d, c))
            };
            a.u.c = function(d) {
                var g;
                g = d.aa;
                if (1 == d.ao.skin) return !1;
                if (a.ar.c(d)) return !0;
                d.elementRect || (d.currentWidth = g.offsetWidth, d.currentHeight = g.offsetHeight);
                g = d.currentWidth;
                d = d.currentHeight;
                var c = !0;
                a.n.a() && (c = !1);
                return c && (3 > g || 3 > d) || a.focus.pageIsPrerendered() ? !0 : !1
            };
            a.u.f = function(d) {
                return d ? a.focus.pageIsVisible() : !1
            };
            a.u.p = function(d) {
                var g = 1;
                screen.deviceXDPI ? g = screen.deviceXDPI / screen.systemXDPI : d.devicePixelRatio && "undefined" !== typeof d.mozInnerScreenX && (g = d.devicePixelRatio);
                return (d = a.d.u()) ? {
                    w: g * d.width,
                    h: g *
                        d.height
                } : {
                    w: 0,
                    h: 0
                }
            };
            a.u.h = function(d) {
                d.counters = {};
                d.counters.laxDwell = new l(function() {
                    return !a.focus.pageIsPrerendered()
                }, "bu", "cd");
                d.counters.strictDwell = new l(a.focus.pageIsVisible, "ah", "am");
                d.counters.query = function() {
                    var a = {},
                        d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var b = this[d];
                            "function" === typeof b.query && b.query(a)
                        }
                    return a
                };
                d.counters.getQs = function() {
                    var a = {},
                        d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var b = this[d];
                            "function" === typeof b.getQs && b.getQs(a)
                        }
                    return a
                };
                d.counters.update =
                    function(a, d, b) {
                        for (var f in this)
                            if (this.hasOwnProperty(f)) {
                                var g = this[f];
                                "function" === typeof g.update && !0 !== a.ep && g.update(a, d, b)
                            }
                    };
                a.m.a.azsx("startAdTracking", a.u.i);
                var k = a.m.a.azsx("view:tick", a.b.cn([d], d.counters.update, d.counters));
                g[d.zr] = k
            };
            a.u.q = function() {
                q.z = void 0;
                q.ACTIVETIMEUNTILSCROLL = void 0;
                q.zs = !1;
                q.xz = !1;
                q.dcsx.wsqa("globalScrollevent" + q.dcsx.uid);
                a.b.forEach(a.u.g.a, function(a) {
                    if (a && "function" === typeof a) try {
                        a()
                    } catch (d) {}
                })
            };
            a.u.j = function(d) {
                if (a.focus.pageIsVisible()) {
                    d =
                        (new n).getTime();
                    "undefined" === typeof q.z && (q.z = d - ea);
                    if ("undefined" === typeof q.ACTIVETIMEUNTILSCROLL) {
                        var g = a.focus.focusStartTime || ea;
                        g < ea && (g = ea);
                        q.ACTIVETIMEUNTILSCROLL = d - g
                    }
                    a: {
                        for (var c in x)
                            if (x.hasOwnProperty(c) && (d = x[c]) && "undefined" !== typeof d.ao) {
                                if (d.ce) break a;
                                g = {
                                    e: 4
                                };
                                g.q = d.aq[4]++;
                                g.ai = q.z;
                                g.wr = q.ACTIVETIMEUNTILSCROLL;
                                a.v.a(d, g);
                                d.ce = !0
                            }
                        try {
                            q.dcsx.wsqa("globalScrollevent" + q.dcsx.uid), q.swde.sxaz("scroll", {
                                callback: a.u.j
                            })
                        } catch (e) {}
                    }
                }
            };
            a.u.b = function(d, g) {
                var c = {
                    e: 9
                };
                c.q = d.aq[9]++;
                d.ci = +new n;
                g && "object" === typeof g && a.b.forEach(g, function(a, b) {
                    c[b] = a
                });
                a.v.a(d, c)
            };
            a.m.a.azsx("adKilled", function(d) {
                d && !d.ep && g.hasOwnProperty(d.zr) && a.m.a.sxaz("view:tick", {
                    id: g[d.zr]
                })
            })
        })(m);
        (function(a) {
            function l(d, g) {
                function h(a) {
                    return function() {
                        try {
                            a.sending && (a.sending = !1, m = 0, k())
                        } catch (b) {}
                    }
                }

                function k(a, b) {
                    if (a) {
                        var c = {
                            qs: a,
                            jsd: b
                        };
                        if (0 === a.indexOf("e=21&")) {
                            e(c, !0);
                            return
                        }
                        l.push(c)
                    }
                    0 === m && 0 < l.length && (m++, c = l.shift(), c.sending = !0, c.uid = g.Math.floor(1E10 * g.Math.random()), c.timeoutId = g.setTimeout(h(c),
                        2E3), q[c.uid] = c, e(c))
                }

                function c() {
                    try {
                        return new n(1, 1)
                    } catch (a) {
                        var b = window.document.createElement("img");
                        b.height = 1;
                        b.width = 1;
                        return b
                    }
                }

                function e(d, e) {
                    if ("object" === typeof a && a && a.d && a.d.c && a.d.c()) a.d.cw() && a.q.i(d.jsd + "/pixel.gif?" + d.qs, function() {
                        f(d)
                    }, function() {
                        b(d)
                    });
                    else {
                        var g = c();
                        g.toSend = d;
                        e || (g.onerror = function() {
                            b(this.toSend)
                        }, g.onload = function() {
                            f(this.toSend)
                        });
                        g.src = d.jsd + "/pixel.gif?" + d.qs
                    }
                }

                function b(a) {
                    a.failedAttempts = "number" == typeof a.failedAttempts ? a.failedAttempts + 1 : 0;
                    var b = (a.jsd + "/pixel.gif?" + a.qs).length;
                    1 > a.failedAttempts ? e(a) : r && b > x && f(a)
                }

                function f(a) {
                    var b = a && a.uid && q && q[a.uid];
                    if (a && a.qs && "tracer=" == a.qs) return !1;
                    if (b) {
                        q[a.uid] = null;
                        try {
                            delete q[a.uid]
                        } catch (c) {}
                        try {
                            clearTimeout(b.timeoutId)
                        } catch (c) {}
                        if ("boolean" != typeof b.sending || b.sending) b.sending = !1;
                        else return !1
                    }
                    0 < m && m--;
                    k()
                }
                var l = [],
                    m = 0,
                    n, p = g[d],
                    w = g.Math.floor(1E10 * g.Math.random()),
                    q = {};
                p.yh = {};
                p = p.yh;
                n = g.Image;
                p.yi = function(a, b) {
                    k(a, b)
                };
                p.xq = function() {
                    return w
                };
                var v, r, x = 2083;
                try {
                    v = document.createElement("div"),
                        v.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e", r = "x" === v.innerHTML
                } catch (B) {
                    r = !1
                }
            }
            a.be = {};
            a.be.a = function(d) {
                try {
                    if (q.yh) return
                } catch (g) {}
                a.d.c() ? l(a.d.ax, d) : a.b.cr(l, "'" + a.d.ax + "',window", d)
            }
        })(m);
        (function(a) {
            a.ba = {};
            a.ba.b = function(l, d) {
                var g = !0;
                d && a.d.dr(l, !0) || (g = !1);
                if (g) {
                    g = !0;
                    d && d.getCareAboutFocus && (g = d.getCareAboutFocus());
                    var h = a.u.c(l),
                        g = (!g || a.u.f(l)) && !h
                }
                return g
            };
            a.ba.c = function(l) {
                this.label = l;
                this.metrics = {};
                this.hasTickUpdateMetrics = !1;
                this.set = function(a, g, h) {
                    this.metrics[a] = this.metrics[a] || {};
                    this.metrics[a].value = g || 0;
                    h && (this.hasTickUpdateMetrics || (this.hasTickUpdateMetrics = !0), this.metrics[a].incrementValue = h.incrementValue || "delta", this.metrics[a].ignoreStateCheck = h.ignoreStateCheck || !1, this.metrics[a].shouldIncrementFn = h.shouldIncrementFn, this.metrics[a].postIncrementationFn = h.postIncrementationFn || !1, h.useDeltaCompensation && (this.metrics[a].useDeltaCompensation = !0, this.metrics[a].incrementedLastTick = !1));
                    return this.metrics[a].value
                };
                this.increment = function(a, g, h, k, c) {
                    var e = !this.metrics[a] ||
                        "number" !== typeof this.metrics[a].value;
                    try {
                        if (k.debugData && e && "publicis_counter" == this.label) {
                            var b;
                            this.metrics[a] ? this.metrics[a].value && (b = this.metrics[a].value) : b = "NONE";
                            var f = [g, b, c].join("-");
                            k.debugData.cache.push(f)
                        }
                    } catch (l) {}
                    g = e ? this.set(a, g) : this.metrics[a].value += g;
                    "number" === typeof h && (g = this.cap(a, g));
                    return g
                };
                this.cap = function(a, g) {
                    return this.set(a, r.min(this.get(a), g))
                };
                this.max = function(a, g) {
                    return this.set(a, r.max(this.get(a), g))
                };
                this.get = function(d, g) {
                    if (!a.e.c() || "visOnLastCheck" ===
                        d) return "undefined" === typeof this.metrics[d] ? this.set(d, "undefined" !== typeof g ? g : 0) : this.metrics[d].value
                };
                this.update = function(d, g, h) {
                    if (d && this.hasTickUpdateMetrics) {
                        h = a.o.a(d.zr, !0);
                        var k = a.ba.b(d, h),
                            c;
                        for (c in this.metrics)
                            if (a.b.cg(this.metrics, c)) {
                                var e = this.metrics[c];
                                if (e.shouldIncrementFn) {
                                    var b = (k || !0 === e.ignoreStateCheck) && e.shouldIncrementFn(d, h);
                                    e.useDeltaCompensation ? (b && e.incrementedLastTick ? this.increment(c, g, void 0, d, 1) : (b || e.incrementedLastTick) && this.increment(c, r.round(g / 2), void 0,
                                        d, 2), e.incrementedLastTick = b) : b && ("delta" === e.incrementValue ? this.increment(c, g, void 0, d, 3) : "addReturnValue" === e.incrementValue ? this.increment(c, b, void 0, d, 4) : "setReturnValue" === e.incrementValue && this.set(c, b));
                                    "function" === typeof e.postIncrementationFn && e.postIncrementationFn(b)
                                }
                            }
                    }
                }
            };
            a.ba.a = function(l, d) {
                if (!l) return !1;
                var g;
                l[d] ? g = l[d] : (g = new a.ba.c(d), l[d] = g);
                return g
            };
            a.ba.d = function(l, d, g) {
                if (!d) return !1;
                d = a.ba.a(d, g);
                l.secondaryCounters = l.secondaryCounters || [];
                l.secondaryCounters.push(d);
                return d
            }
        })(m);
        (function(a) {
            function l(d, g, h) {
                this.name = d;
                this.reachedInViewTimeThreshold = !1;
                this.alwaysInview = !0;
                this.queryStringKey = h.queryStringKey;
                this.timeThreshold = h.timeThreshold || 1E3;
                this.rawPercThreshold = h.percThreshold / 100 || 50;
                this.percThreshold = r.min(h.percThreshold / 100, .98);
                this.continuous = h.continuous || !1;
                this.timePercent = h.timePercent;
                this.capTimeThreshold = h.capTimeThreshold;
                this.audible = h.audible || !1;
                this.video = h.video || !1;
                this.fullscreen = h.fullscreen || !1;
                "undefined" !== this.timeThreshold && (this.timeThreshold =
                    r.max(this.timeThreshold, 1));
                this.counterState = {};
                d = a.ba.a(this.counterState, "customInViewCounter");
                d.set("inViewTime", 0);
                d.set("continuousInViewTime", 0);
                d.set("maxContinuousInViewTime", 0);
                d.set("visOnLastCheck", !1);
                d.set("_tLastChecked", (new n).getTime())
            }
            a.af = {};
            a.af.c = {};
            a.af.d = {};
            a.af.e = function(d, g, h) {
                if (a.af.c.hasOwnProperty(d) || void 0 == h.percThreshold && void 0 == h.fullscreen || void 0 == h.timeThreshold && void 0 == h.timePercent) return !1;
                g = new l(d, g, h);
                return a.af.c[d] = g
            };
            a.af.f = function(d) {
                return a.e.c() ||
                    !a.af.c.hasOwnProperty(d) ? !1 : a.af.c[d]
            };
            a.af.a = function() {
                var d, g;
                for (g in a.af.c)
                    if (a.af.c.hasOwnProperty(g) && (d = a.af.f(g), !d.reachedInViewTimeThreshold)) return !1;
                return !0
            };
            l.prototype.update = function(d, g, h) {
                if (d && this.isMeasurable(d) && !this.reachedInViewTimeThreshold) {
                    var k, c = a.ba.a(this.counterState, "customInViewCounter"),
                        e = a.o.a(d.zr, !0);
                    if (e) {
                        var b = e.getLastInviewPercent();
                        customInviewPercentThreshold = (k = e.getFullyInViewThreshold()) && "number" === typeof k ? r.min(this.percThreshold, k) : this.percThreshold;
                        c.get("_tLastChecked");
                        c.set("_tLastChecked", h);
                        h = !0;
                        e.getCareAboutFocus && (h = e.getCareAboutFocus());
                        d = e.getPauseCheckingFn ? e.getPauseCheckingFn()(d) : a.u.c(d);
                        b = b >= customInviewPercentThreshold;
                        e = !h || a.focus.pageIsVisible();
                        a.af.g && "function" === typeof a.af.g && (b = a.af.g(b));
                        a.af.h && "function" === typeof a.af.h && (e = a.af.h(e));
                        b = b && e && !d;
                        d = c.get("visOnLastCheck");
                        if (b && d) c.increment("inViewTime", g), c.increment("continuousInViewTime", g);
                        else if (b || d) g = r.round(g / 2), c.increment("inViewTime", g), c.increment("continuousInViewTime",
                            g);
                        b || (this.alwaysInview = !1);
                        c.set("visOnLastCheck", b);
                        c.get("continuousInViewTime") > c.get("maxContinuousInViewTime") && c.set("maxContinuousInViewTime", c.get("continuousInViewTime"));
                        b || c.set("continuousInViewTime", 0);
                        this.inViewTimeReached() && (this.reachedInViewTimeThreshold = !0)
                    }
                }
            };
            l.prototype.getInViewTime = function() {
                var d = a.ba.a(this.counterState, "customInViewCounter");
                return this.continuous ? d.get("maxContinuousInViewTime") : d.get("inViewTime")
            };
            l.prototype.inViewTimeReached = function() {
                return "undefined" !==
                    this.timeThreshold && this.getInViewTime() >= this.timeThreshold
            };
            l.prototype.isMeasurable = function(d) {
                if (!d) return !1;
                var g = !1;
                "undefined" !== this.timeThreshold && ("pscope" == a.o.b(d.zr, !0) && d.custominview.periscopeThresholds ? a.b.aj(d.custominview.periscopeThresholds, this.rawPercThreshold) && a.d.dr(d) && (g = !0) : a.d.dr(d, !0) && (g = !0));
                return g
            };
            a.af.i = function(d) {
                if (d && d.isMeasurabilityDisabled()) return !1;
                a.af.e("full_vis_2_sec_continuous", d, {
                    percThreshold: 100,
                    timeThreshold: 2E3,
                    video: !1,
                    continuous: !0,
                    queryStringKey: "wb"
                })
            };
            a.af.j = function(d) {
                a.af.i(d);
                d.custominview = {};
                d.custominview.eventIds = {};
                for (var g = (d.periscopeConfig || a.s.m(d)).pixels, h = [], k = 0, c = g.length; k < c; k++) h.push(parseFloat(g[k].position.top, 10) / 100);
                d.custominview.periscopeThresholds = h;
                d.custominview.eventIds.viewCounterStarted = a.m.a.azsx("viewCounterStarted", a.af.k);
                d.custominview.eventIds["periscope:onStateChange"] = a.m.a.azsx("periscope:onStateChange", a.af.k, {
                    priority: 5
                });
                d.custominview.eventIds.adKilled = a.m.a.azsx("adKilled", a.af.l);
                a.af.k(d)
            };
            a.af.k =
                function(d) {
                    void 0 !== d && (isNaN(d) || (d = x[d]), d && d.custominview && d.custominview.eventIds && a.d.dr(d, !0) && !d.custominview.eventIds["view:tick"] && (d.custominview.eventIds["view:tick"] = a.m.a.azsx("view:tick", a.b.cn([d], a.af.m), {
                        priority: 6
                    })))
                };
            a.af.m = function(d, g, h) {
                if (d && d.isMeasurabilityDisabled()) return !1;
                for (var k in a.af.c) a.af.c.hasOwnProperty(k) && a.af.c[k].update(d, g, h)
            };
            a.af.l = function(d) {
                d && d.custominview && d.custominview.eventIds && (a.m.a.sxaz("view:tick", {
                    id: d.custominview.eventIds["view:tick"],
                    priority: 6
                }), a.m.a.sxaz("viewCounterStarted", {
                    id: d.custominview.eventIds.viewCounterStarted
                }), a.m.a.sxaz("periscope:onStateChange", {
                    id: d.custominview.eventIds["periscope:onStateChange"]
                }), a.m.a.sxaz("adKilled", {
                    id: d.custominview.eventIds.adKilled
                }), a.m.a.sxaz("video:AdVideoComplete", {
                    id: d.custominview.eventIds["video:AdVideoComplete"]
                }))
            };
            a.af.n = function() {
                a.m.a.sxaz("startAdTracking", {
                    id: a.af.d.startAdTracking
                });
                a.m.a.sxaz("allLocalAdsKilled", {
                    id: a.af.d.allLocalAdsKilled
                })
            };
            a.af.b = function(d, g) {
                if (d) {
                    for (var h in a.af.c)
                        if (a.af.c.hasOwnProperty(h)) {
                            var k =
                                a.af.f(h);
                            k && ("custom_inview_module_counter" === h ? (g.wm = 0, g.wi = 0, !a.e.c() && k.isMeasurable(d) && (g.wm = 1, k.inViewTimeReached() && (g.wi = 1))) : void 0 != k.queryStringKey && (g[k.queryStringKey] = 0, !a.e.c() && k.isMeasurable(d) && (g[k.queryStringKey] = 1, k.inViewTimeReached() && (g[k.queryStringKey] = 2))))
                        }
                    return g
                }
            };
            a.af.o = function(d) {
                if (!d) return !1;
                d = !1;
                for (var g in a.af.c)
                    if (a.af.c.hasOwnProperty(g)) {
                        var h = a.af.f(g);
                        h && "custom_inview_module_counter" === g && (d = h.reachedInViewTimeThreshold)
                    }
                return d
            };
            a.af.d.startAdTracking =
                a.m.a.azsx("startAdTracking", a.af.j);
            a.af.d.allLocalAdsKilled = a.m.a.azsx("allLocalAdsKilled", a.af.n)
        })(m);
        (function(a) {
            a.bf = {};
            a.bf.a = !1;
            a.bf.b = function(l) {
                var d = ["46223477917", "138258876683"];
                l && l.moatClientLevel4 && a.b.aj(d, l.moatClientLevel4) && (a.bf.a = !0);
                "function" === typeof a.bf.c && a.bf.c(l);
                l && l.zMoatENV && "x" === l.zMoatENV && (a.bf.a = !0)
            }
        })(m);
        (function(a) {
            function l() {
                e++;
                h = d.pageYOffset;
                c = d.pageXOffset;
                h != g && (a.bb.a.YCoord.push(h.toFixed(2)), a.bb.a.time.push(e), g = h);
                c != k && (a.bb.b.XCoord.push(c.toFixed(2)),
                    a.bb.b.time.push(e), k = c)
            }
            var d, g, h, k, c, e = 0,
                b = !1;
            a.bb = a.bb || {};
            a.bb.c = function() {
                return function() {
                    if (!b && a.d.e) {
                        d = a.d.g;
                        b = !0;
                        g = d.pageYOffset;
                        k = d.pageXOffset;
                        a.bb.a = {
                            YCoord: [d.pageYOffset],
                            time: [0]
                        };
                        a.bb.b = {
                            XCoord: [d.pageXOffset],
                            time: [0]
                        };
                        var c = "scrollInfo#" + (new n).getTime();
                        a.p.g(l, {}, 1E3, c)
                    }
                }
            }()
        })(m);
        (function(a) {
            function l(a) {
                for (var b, c = [], d = 0; 100 >= d; d++) c.push(0 === d ? 0 : d / 100);
                try {
                    b = new IntersectionObserver(a, {
                        rootMargin: "0px",
                        threshold: c
                    })
                } catch (g) {
                    return !1
                }
                return b
            }

            function d(a) {
                return function(b,
                    c) {
                    var d = b.length;
                    1 > d || (d = b[d - 1], a.percentVisible = d.intersectionRatio, a.visibleRect = d.intersectionRect, a.elementRect = d.boundingClientRect)
                }
            }

            function g(a) {
                var b = a && a.intersectionObserver,
                    b = b && b.observer;
                try {
                    b && (b.disconnect(), a.intersectionObserver = null)
                } catch (c) {}
            }

            function h(a) {
                a && a.intersectionObserver && (g(a), k(a))
            }

            function k(e) {
                var b, f, k;
                b = {
                    started: !1,
                    observer: null,
                    percentVisible: null,
                    visibleRect: null,
                    elementRect: null,
                    element: function(a) {
                        return function() {
                            return a && a.aa
                        }
                    }(e)
                };
                e.intersectionObserver =
                    b;
                f = b.element();
                if (f && (k = l(d(b)))) {
                    b.observer = k;
                    try {
                        k.observe(f)
                    } catch (m) {
                        return !1
                    }
                } else return !1;
                b.started = !0;
                a.m.a.azsx("adKilled", a.b.cn([e], g), {
                    condition: function(a) {
                        return "object" === typeof e && "object" === typeof a && e.zr == a.zr
                    },
                    once: !0
                });
                a.m.a.azsx("adElementUpdate", a.b.cn([e], h), {
                    condition: function() {
                        return e && e.intersectionObserver && e.intersectionObserver.started
                    },
                    once: !0
                });
                c && c.startTracking(e);
                return !0
            }
            a.aj = {};
            var c = function(a) {
                function b(a, b, c, d) {
                    function f(a, d) {
                        var e = a.length;
                        1 > e || (e = a[e -
                            1], e = e.intersectionRatio, 0 >= e || !g || g(b, c) && d.disconnect())
                    }

                    function e() {
                        for (var a = [], b = 0; 100 >= b; b++) a.push(0 === b ? 0 : b / 100);
                        return a
                    }
                    var g = a && window && window[a];
                    return g ? function() {
                        try {
                            var a = new IntersectionObserver(f, {
                                rootMargin: "0px",
                                threshold: e()
                            });
                            if (!d) return !1;
                            a.observe(d);
                            return function() {
                                a.disconnect();
                                a = null
                            }
                        } catch (b) {
                            return !1
                        }
                    }() : !1
                }

                function c(a) {
                    k && (k.killAllPixels(), k = null);
                    a && a.periscopeManager && (a.periscopeManager = null)
                }

                function d(b, c) {
                    if (!b || "undefined" === typeof c) return !1;
                    var f = a.b.ca(c);
                    if (!f || !f.isValidAdSize()) return !1;
                    f = {
                        "topLeft:": !1,
                        "topRight:": !1,
                        "bottomLeft:": !1,
                        "bottomRight:": !1
                    };
                    f[b] = !0;
                    a.m.a.zaxs("adEdgesViewStatus", c, f);
                    return !0
                }

                function g(c) {
                    if (!c) return !1;
                    var f = c.adCount,
                        h = c.name,
                        k = c.element,
                        l = c.parent,
                        m = c.top,
                        p = c.left,
                        u = c.width;
                    c = c.height;
                    var n = r.floor(1E8 * r.random());
                    return {
                        name: h,
                        id: "MoatPxIOPT" + f + "_" + n,
                        target: k,
                        container: l,
                        dimensions: {
                            width: u,
                            height: c
                        },
                        position: {
                            top: m,
                            left: p
                        },
                        onWidthCheck: a.s.l,
                        customPixel: !0,
                        customFn: b,
                        callback: d,
                        callbackName: "MoatPxIOPT" + n,
                        preserveDom: !1,
                        customPixelDiv: !0
                    }
                }

                function h(b) {
                    if (!b) return !1;
                    var c = b.zr,
                        d = b.aa,
                        f = d && d.parentNode;
                    if (!d || !f) return !1;
                    var k = b.INITIAL_WIDTH;
                    b = b.INITIAL_HEIGHT;
                    k = a.b.cj(k) ? k - .98 * k : 1;
                    b = a.b.cj(b) ? b - .98 * b : 1;
                    var k = (b = {
                            width: k + 1,
                            height: b + 1
                        }, b.width),
                        l = b && b.height,
                        m = [],
                        t;
                    b = 1;
                    for (var p = [
                            ["topLeft", "0px", "0px"],
                            ["topRight", "0px", "100%"],
                            ["bottomLeft", "100%", "0px"],
                            ["bottomRight", "100%", "100%"]
                        ], n = 0, q = p.length; n < q; n++) t = p[n], m.push(g({
                        adCount: c,
                        name: t[0],
                        element: d,
                        parent: f,
                        top: t[b],
                        left: t[2],
                        width: k,
                        height: l
                    }));
                    return {
                        insertableFunc: a.d.dk,
                        pixels: m
                    }
                }
                var k;
                return {
                    startTracking: function(b) {
                        if (b && !a.d.fj && !a.ac.d(b.zr)) {
                            var d = h(b);
                            d && (b.periscopeConfig = d, a.s.z(b), k = b.periscopeManager, a.m.a.azsx("adKilled", a.b.cn([b], c), {
                                condition: function(a) {
                                    return "object" === typeof b && "object" === typeof a && b.zr == a.zr
                                },
                                once: !0
                            }), a.m.a.azsx("passthrough", a.b.cn([b], c), {
                                once: !0
                            }))
                        }
                    }
                }
            }(a);
            a.aj.a = function(c) {
                if (a.d.dk()) {
                    if (c.intersectionObserver && c.intersectionObserver.started) return c.intersectionObserver.percentVisible;
                    k(c) || a.d.dk(!1)
                }
            }
        })(m);
        (function(a) {
            a.ag = {};
            a.ag.a = function(a, d, g, h) {
                function k() {
                    e("unload", k);
                    e("beforeunload", k);
                    q = !1;
                    clearInterval(x)
                }

                function c(a, b, c) {
                    a && b && c && ("function" === typeof a.addEventListener ? a.addEventListener(b, c) : "function" === typeof a.attachEvent && a.attachEvent("on" + b, c))
                }

                function e(a, b, c) {
                    a && b && c && ("function" === typeof a.removeEventListener ? a.removeEventListener(b, c) : "function" === typeof a.detachEvent && a.detachEvent("on" + b, c))
                }

                function b(a) {
                    if (a !== r) {
                        var b = [{
                            name: "fr",
                            enabled: !0,
                            inview: a
                        }];
                        p && p(b)
                    }
                    r = a
                }

                function f() {
                    try {
                        var a,
                            c;
                        10 > h ? (a = document.elementFromPoint(0, 0), c = !!a) : c = (a = document.msElementsFromPoint(0, 0)) && 0 < a.length;
                        b(c)
                    } catch (d) {}
                    q && window.requestAnimationFrame(f)
                }

                function m() {
                    clearInterval(x);
                    x = window.setInterval(n, 100);
                    window.requestAnimationFrame(u)
                }

                function u() {
                    v ? b(!0) : v = !0;
                    m()
                }

                function n() {
                    b(!1)
                }
                var p = a && window && window.parent && window.parent[a],
                    q = "function" === typeof window.requestAnimationFrame,
                    r = !1,
                    v = !1,
                    x;
                a = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode &&
                    !!window.StyleMedia;
                h = "string" === typeof h ? parseInt(h, 10) : NaN;
                (function() {
                    document.body.style.overflow = "hidden";
                    document.body.style.margin = "0px";
                    document.body.style.padding = "0px";
                    document.body.style.height = "1000px";
                    var a = document.createElement("div");
                    a.style.width = "300px";
                    a.style.height = "250px";
                    document.body.appendChild(a);
                    c("unload", k);
                    c("beforeunload", k)
                })();
                a ? m() : q ? window.requestAnimationFrame(f) : x = window.setInterval(f, 100)
            }
        })(m);
        (function(a) {
            function l() {
                a.d.ch(!1)
            }

            function d(b, c) {
                return function(d) {
                    var e,
                        g;
                    if (c.dfp) a: {
                        if (d && c && "message" === d.type && d.source == c.win && d.data && 0 == d.data.indexOf("amp-")) try {
                            if (g = JSON.parse(d.data.substring(4)), g.sentinel == c.sentinel && "intersection" == g.type) {
                                e = g.changes;
                                break a
                            }
                        } catch (h) {}
                        e = !1
                    }
                    else e = d;
                    if (d = e) e = d.length, 1 > e || (c.context && c.context.hidden ? d = 0 : (d = d[e - 1], e = d.rootBounds, e = {
                            left: 0,
                            right: e.width,
                            top: 0,
                            bottom: e.height
                        }, e = a.aa.p(c.element(), d.boundingClientRect, e), d = e.calcVisiblePercv(), (g = "sframe" === a.o.b(c.zr)) && a.m.a.zaxs("rectsAvailable", b.zr, e.elementRect, e.visibleRect)),
                        c.percentVisible = d)
                }
            }

            function g(b, c) {
                b.amp = {
                    dfp: c.isDfp,
                    win: c.win,
                    sentinel: c.sentinel,
                    started: !1,
                    unlisten: null,
                    eventHandler: null,
                    percentVisible: null,
                    context: a.d.eu(),
                    element: function(a) {
                        return function() {
                            return a && a.aa
                        }
                    }(b),
                    zr: b.zr
                };
                return b.amp
            }

            function h(a, c) {
                if (!c || !c.context || !c.context.observeIntersection) return l(), !1;
                c.eventHandler = d(a, c);
                c.unlisten = c.context.observeIntersection(c.eventHandler);
                c.unlisten || (c.unlisten = function() {
                    c.unlisten = function() {}
                });
                c.started = !0
            }

            function k(b, c) {
                if (a.d.ew()) {
                    var e =
                        "amp-message-" + c.sentinel;
                    c.messageId = e;
                    c.eventHandler = d(b, c);
                    q.dcsx.ynds(window, "message", e, "ampMessageFn" + e);
                    q.swde.azsx(e, c.eventHandler);
                    return c.started = !0
                }
                l();
                return !1
            }

            function c(b, c) {
                if (!b || !b.aa) return l(), !1;
                var d = g(b, c);
                c.isDfp ? k(b, d) : h(b, d);
                d.started && a.m.a.azsx("adKilled", e, {
                    condition: function(a) {
                        return b.zr == a.zr
                    },
                    once: !0
                })
            }

            function e(b) {
                var c = b && b.amp;
                if (!c) return !1;
                try {
                    c.dfp ? (q.dcsx.engn(window, "message", c.messageId), a.m.a.sxaz(c.messsageId, c.eventHandler)) : c.unlisten && "function" ==
                        typeof c.unlisten && c.unlisten()
                } catch (d) {
                    l()
                }
                b.amp = null
            }
            a.al = {};
            a.al.a = function(b) {
                b.amp && b.amp.started || c(b, a.d.ev());
                return b.amp.percentVisible
            }
        })(m);
        (function(a) {
            a.am = {};
            a.am.b = null;
            a.am.c = !1;
            a.am.d = !1;
            a.am.e = function(l) {
                l = l || a.d.bm();
                if (!l) return !1;
                var d;
                d = l.getCurrentPosition();
                l = l.getScreenSize();
                d.top = d.y;
                d.bottom = d.y + d.height;
                d.left = d.x;
                d.right = d.x + d.width;
                l.top = 0;
                l.bottom = l.height;
                l.left = 0;
                l.right = l.width;
                return {
                    geom: d,
                    screen: l
                }
            };
            a.am.f = function(l) {
                var d = a.am.e();
                if (!d) return !1;
                var g = d.screen,
                    d = d.geom;
                return g && d ? (l = a.aa.p(l, d, g)) ? l : !1 : !1
            };
            a.am.g = function(l, d, g) {
                if (d.api && "function" === typeof d.api.getVendor) {
                    var h = d.api.getVendor(),
                        k;
                    "AdColony" === h ? k = "exposureChange" : "AdMarvel" === h && (k = "viewablePercentageChange");
                    if (k) {
                        var c = function(a) {
                            return function(b) {
                                a.percv = b
                            }
                        }(d);
                        d.api.addEventListener(k, c)
                    }
                    g || a.m.a.azsx("adKilled", function() {
                        l.mraid.api.removeEventListener("viewablePercentageChange", c);
                        l.mraid = null
                    }, {
                        condition: function(a) {
                            return l.zr == a.zr
                        },
                        once: !0
                    })
                }
            };
            a.am.h = function() {
                var l = {},
                    d = a.d.bm();
                l.api = d;
                l.percv = -1;
                return l
            };
            a.am.a = function(l) {
                var d, g, h, k, c = !1;
                k = a.d.br();
                if (!l.mraid) {
                    l.mraid = a.am.h();
                    if (!l.mraid.api) return !1;
                    k && a.am.g(l, l.mraid)
                }
                if (!l.mraid.api) return !1;
                h = a.am.f(l.aa);
                if (!h) return !1;
                d = r.floor(100 * h.calcVisiblePercv()) / 100;
                k && (g = r.floor(l.mraid.percv) / 100);
                k ? a.b.cy(g, d, .01) && (c = !0) : c = !0;
                c && "sframe" === a.o.b(l.zr) && a.m.a.zaxs("rectsAvailable", l.zr, h.elementRect, h.visibleRect);
                return k && 0 <= g ? r.min(d, g) : d
            };
            a.am.i = function() {
                var l = a.d.ao().isInApp,
                    d = window === window.top,
                    g = a.b.cs("_#OMF"),
                    h = !a.d.bn(),
                    k = !a.am.c;
                return l && d && g && h && k
            };
            (function() {
                if (a.am.i())
                    for (var l = a.w.j(), d, g = 0, h = l.length; g < h; g++)(d = l[g]) && d.swde && d.swde.zaxs && d.swde.zaxs("mraid")
            })();
            a.m.a.azsx("startAdTracking", a.d.bv)
        })(m);
        (function(a) {
            a.an = {};
            a.an.a = function(l) {
                l.amazon && l.amazon.started || a.an.b(l);
                return l.amazon.percentVisible
            };
            a.an.b = function(l) {
                var d = a.d.cm(),
                    g = a.d.cj(),
                    h = g && g.mraid,
                    k = g && g.Event && g.Event.Viewability,
                    c = h && "function" === typeof h.getScreenSize && h.getScreenSize,
                    e;
                l.amazon = {
                    api: d,
                    element: l.aa,
                    event: null,
                    eventListener: null,
                    getScreenSize: c,
                    mraid: h,
                    percentVisible: null,
                    started: !1,
                    win: g
                };
                if (!d || !k || !c) return !1;
                e = l.amazon;
                e.event = k;
                try {
                    return e.eventListener = function(b) {
                        var c = e.getScreenSize(),
                            d, g;
                        if ("viewable" in b) g = "viewable";
                        else if ("viewablePercentage" in b) g = "viewablePercentage";
                        else return !1;
                        0 === b[g] ? e.percentVisible = 0 : e.element && c ? (d = (c = a.aa.p(e.element, {
                                left: b.x,
                                right: b.x + b.width,
                                top: b.y,
                                bottom: b.y + b.height
                            }, {
                                left: 0,
                                right: c.width,
                                top: 0,
                                bottom: c.height
                            })) && c.calcVisiblePercv() ||
                            !1, b = b[g], b /= 100, g = a.b.cj(d) ? r.min(d, b) : b, e.percentVisible = g, (d = a.b.cy(d, b, .01) && "sframe" === a.o.b(l.zr)) && a.m.a.zaxs("rectsAvailable", l.zr, c.elementRect, c.visibleRect)) : e.percentVisible = null
                    }, e.api.addEventListener(k, e.eventListener), l.amazon.started = !0, a.m.a.azsx("adKilled", a.an.c, {
                        condition: function(a) {
                            return l.zr == a.zr
                        },
                        once: !0
                    }), !0
                } catch (b) {
                    return !1
                }
            };
            a.an.c = function(a) {
                if ((a = a.amazon) && a.eventListener && "function" == typeof a.eventListener && a.event) {
                    try {
                        a.api.removeEventListener(a.event, a.eventListener)
                    } catch (d) {}
                    a.started = !1
                }
            }
        })(m);
        (function(a) {
            a.as = {};
            a.as.c = r.floor(1E8 * r.random());
            a.as.a = function(l, d, g, h) {
                if (q)
                    if (a.d.c() && a.d.d()) q.jsonp || (q.jsonp = {}), q.jsonp[l] || (q.jsonp[l] = {
                        cachedResponse: !1
                    }), a.q.p(l, g);
                    else if (d && a.b.df() && (d += "_beta"), !q.jsonp || !q.jsonp[l]) {
                    q.jsonp = q.jsonp || {};
                    q.jsonp[l] = q.jsonp[l] || {
                        cachedResponse: !1
                    };
                    var k = q.xb || window,
                        c = k.document;
                    k[d] = function(a) {
                        q.jsonp[l].cachedResponse = a;
                        q.swde.zaxs(l + "JsonpReady", a);
                        k[d] = null
                    };
                    var e = c.createElement("script"),
                        c = c.body || c.getElementsByTagName("head")[0] ||
                        c.getElementsByTagName("script")[0];
                    "undefined" === typeof h && (h = "callback");
                    g = [g, "&", h, "=", d].join("");
                    a.b.by(g, c, e)
                }
            };
            a.as.b = function(l, d) {
                q.jsonp && q.jsonp[l] && q.jsonp[l].cachedResponse ? a.b.cn([q.jsonp[l].cachedResponse], d)() : q.swde.azsx(l + "JsonpReady", d, {
                    once: !0
                })
            }
        })(m);
        (function(a) {
            function l(c, d, b) {
                var f = a.ac.h[c].stateMask;
                if (d = k[d] * (b ? 16 : 1)) a.ac.h[c].stateMask = f | d << 0
            }

            function d(c, d, b, f) {
                b = a.b.cy(c.x, d.x, b);
                c = a.b.cy(c.y, d.y, f);
                return b && c
            }

            function g(c, d) {
                a.ac && a.ac.h[c] && (a.ac.h[c].allEdgesSeen = !0, a.b.forEach(a.ac.h[c].mediatorIds, function(b, c) {
                    a.m.a.sxaz(c, {
                        id: b
                    })
                }), d && (a.ac.h[c].failsafe = !0), a.m.a.zaxs("passthrough"))
            }
            var h = {};
            a.ac = {};
            a.ac.i = 242500;
            a.ac.j = 1;
            a.ac.h = {};
            var k = {
                topLeft: 8,
                topRight: 4,
                bottomLeft: 2,
                bottomRight: 1
            };
            a.ac.k = function(c) {
                if (!c || c && c.isMeasurabilityDisabled() || a.e.c()) return !1;
                var d, b;
                a.d["do"]() && (d = !0);
                a.s && a.s.a && c.periscopeManager && c.periscopeManager.fullyMeasurable && (b = !0);
                return a.d.dj() || a.d.ds() || d || b
            };
            a.ac.a = function(c) {
                return "number" !== typeof c || a.b.j() ? !1 :
                    236425 <= c
            };
            a.ac.l = function(a) {
                return a && a.ao ? "slave" == a.ao.moatClientAT ? !0 : !1 : !1
            };
            a.ac.m = function(a) {
                return a && a.ao ? "cpc" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ac.n = function(a) {
                return a && a.ao ? "cpcv" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ac.o = function(a) {
                return a && a.ao ? "flatrate" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ac.p = function(a) {
                return a && a.ao ? "skin" == a.ao.moatClientAT || "hpto" == a.ao.moatClientAT || 1 == a.ao.skin ? !0 : !1 : !1
            };
            a.ac.g = function(c) {
                if (!c || !c.aa) return !1;
                if ("undefined" != typeof c.er) return c.er;
                c.video ? !a.ac.k(c) ||
                    a.ac.n(c) && !c.video.reachedComplete || (c.er = !0) : a.ac.l(c) || a.ac.m(c) || a.ac.o(c) ? c.er = !1 : a.ac.p(c) || c.isCompositeAd || a.ac.a(a.b.cd(c)) ? c.er = !0 : a.ac.k(c) && a.o.u(c, a.ac.j, !0) && (c.er = !0);
                return c.er || !1
            };
            a.ac.b = function(c) {
                if (!c || c.SENT_FIT && c.et || !a.ac.k(c)) return !1;
                var d, b, f = a.o.b(c.zr);
                c.SENT_FIT || (d = a.o.j(c, f, "hadFIT"));
                c.et || (b = a.o.j(c, f, "hadFullOTS"));
                if (d || b) a.u.d(c), c.SENT_FIT = c.SENT_FIT || !!d, c.et = c.et || !!b;
                return d || b
            };
            a.ac.q = function(c, e, b) {
                var f;
                a.b.forEach([null, void 0, !1], function(a) {
                    if (f =
                        e === a || b === a) return !1
                });
                if (!0 === f || !0 !== (a.b.cj(e.top) && a.b.cj(e.bottom) && a.b.cj(b.bottom) && a.b.cj(b.top)) || e.top === e.bottom || e.left === e.right || b.top === b.bottom || b.left === b.right) return !1;
                var g = e.right - e.left,
                    h = e.bottom - e.top,
                    k = g * (1 - .98),
                    l = h * (1 - .98),
                    m = {
                        x: e.left,
                        y: e.top
                    },
                    n = {
                        x: e.right,
                        y: e.top
                    },
                    q = {
                        x: e.left,
                        y: e.bottom
                    },
                    x = {
                        x: e.right,
                        y: e.bottom
                    },
                    A = e.left + k,
                    B = e.top + l,
                    C = e.right - k,
                    E = e.top + l,
                    H = e.left + k,
                    F = e.bottom - l,
                    k = e.right - k,
                    l = e.bottom - l,
                    I = {
                        x: b.left,
                        y: b.top
                    },
                    M = {
                        x: b.right,
                        y: b.top
                    },
                    L = {
                        x: b.left,
                        y: b.bottom
                    },
                    O = {
                        x: b.right,
                        y: b.bottom
                    },
                    g = r.ceil(.01 * g),
                    h = r.ceil(.01 * h),
                    m = d(m, I, g, h),
                    n = d(n, M, g, h),
                    q = d(q, L, g, h),
                    x = d(x, O, g, h);
                a.ac.r(c, {
                    topLeft: m,
                    topRight: n,
                    bottomLeft: q,
                    bottomRight: x
                }, {
                    topLeft: A >= b.left && B >= b.top,
                    topRight: C <= b.right && E >= b.top,
                    bottomLeft: H >= b.left && F <= b.bottom,
                    bottomRight: k <= b.right && l <= b.bottom
                })
            };
            a.ac.s = function(c) {
                if ("undefined" !== typeof c && 0 <= c && !a.ac.h[c]) {
                    a.ac.h[c] = {};
                    a.ac.h[c].allEdgesSeen = !1;
                    a.ac.h[c].mediatorIds = {};
                    a.ac.h[c].outer = {
                        topLeft: !1,
                        topRight: !1,
                        bottomLeft: !1,
                        bottomRight: !1
                    };
                    a.ac.h[c].inner = {
                        topLeft: !1,
                        topRight: !1,
                        bottomLeft: !1,
                        bottomRight: !1
                    };
                    a.ac.h[c].stateMask = 0;
                    var d = "rectsAvailable",
                        b = a.m.a.azsx(d, a.ac.q);
                    a.ac.h[c].mediatorIds[d] = b;
                    d = "adEdgesViewStatus";
                    b = a.m.a.azsx(d, a.ac.r);
                    a.ac.h[c].mediatorIds[d] = b;
                    d = "adFullyVisible";
                    b = a.m.a.azsx(d, g, {
                        condition: function(b, c) {
                            return b && c && !a.ac.d(b.zr) && a.o && a.o.b && c === a.o.b(b.zr)
                        },
                        once: !0
                    });
                    a.ac.h[c].mediatorIds[d] = b
                }
            };
            a.ac.t = function(c) {
                return a.ac.h[c].failsafe
            };
            a.ac.r = function(c, d, b) {
                function f(f, m, n) {
                    n && (a.b.forEach(["topLeft", "topRight",
                        "bottomLeft", "bottomRight"
                    ], function(a) {
                        !h[a] && d[a] && (h[a] = !0, l(c, a, !0));
                        !k[a] && b[a] && (k[a] = !0, l(c, a, !1))
                    }), (h.topLeft && h.topRight && k.bottomLeft && k.bottomRight || k.topLeft && k.topRight && h.bottomLeft && h.bottomRight || h.topLeft && h.bottomLeft && k.topRight && k.bottomRight || k.topLeft && k.bottomLeft && h.topRight && h.bottomRight) && g(c))
                }
                if (!0 !== a.ac.h[c].allEdgesSeen) {
                    b && "object" === typeof b || (b = d);
                    var h = a.ac.h[c].outer,
                        k = a.ac.h[c].inner;
                    a.m.a.azsx("adCheckingState", f, {
                        once: !0,
                        condition: function(b, c) {
                            return a.o.b(b.zr) ===
                                c
                        }
                    })
                }
            };
            a.ac.d = function(c) {
                return "undefined" !== typeof c && c in a.ac.h ? a.ac.h[c].allEdgesSeen : !1
            };
            (function(a) {
                function d(a, b) {
                    return function(c) {
                        var d = a.maxContinuouslyInViewTime,
                            f = b.get("currentContinuouslyInViewTime");
                        f > d && (a.maxContinuouslyInViewTime = f, a.checkMilestoneReached());
                        c || b.set("currentContinuouslyInViewTime", 0)
                    }
                }

                function b() {
                    return !1
                }

                function f(b) {
                    var d = b.fixedInViewTimeRequirement;
                    this.percvRequired = b.percvRequired;
                    this.shouldConsiderLargeAds = a.b.cj(b.largeAdSize);
                    this.largeAdSize = b.largeAdSize;
                    this.largePercvRequired = b.largePercvRequired;
                    this.requiresPassthrough = b.requiresPassthrough;
                    this.qsKey = b.qsKey;
                    b.percvRequiredPassthrough && (this.percvRequiredPassthrough = b.percvRequiredPassthrough);
                    this.getInViewTimeRequirement = function(a) {
                        return d
                    }
                }

                function g(b, d) {
                    return a.b.j() ? d === a.ac.e.n ? a.ac.e.n.b : a.ac.f.m.b : d === a.ac.e.n ? a.ac.e.n.a : a.ac.f.m.a
                }

                function k(b, f, g) {
                    this.label = g;
                    this.config = f;
                    this.groupmMilestoneReached = !1;
                    this.maxContinuouslyInViewTime = 0;
                    this.ad = b;
                    this.fullViewEventPixelFired = !1;
                    var l = this;
                    g = a.ba.d(b, a.ac.u, "groupm_counter_" + b.yg + r.random());
                    var m = d(l, g);
                    if (f === a.ac.f.m.a || f === a.ac.f.m.b) f = a.m.a.azsx("fullOtsReached", function() {
                        l.groupmMilestoneReached = !0;
                        l.milestoneFailsafeTriggered = !0
                    }, {
                        once: !0,
                        condition: function(d, f) {
                            var e = a.o.b(b.zr);
                            return d.zr === b.zr && f === e
                        }
                    }), h[b.zr] = f;
                    this.checkMilestoneReached = function() {
                        var b;
                        b = l.maxContinuouslyInViewTime;
                        var d;
                        if (!0 === l.groupmMilestoneReached) return !0;
                        d = l.config.getInViewTimeRequirement();
                        b = l.config.requiresPassthrough(l.ad) ? a.ac.d(l.ad.zr) &&
                            b >= d : b >= d;
                        l.groupmMilestoneReached = b;
                        !l.fullViewEventPixelFired && b && (l.fullViewEventPixelFired = !0, l.ad.fireFullViewEvent = !0);
                        return l.groupmMilestoneReached
                    };
                    g.set("currentContinuouslyInViewTime", 0, {
                        useDeltaCompensation: !0,
                        shouldIncrementFn: function(b, d) {
                            var f, e;
                            f = d.getLastInviewPercent();
                            var g = l.config.percvRequired,
                                h = l.config.largePercvRequired;
                            e = a.b.cd(b);
                            f = l.config.requiresPassthrough(l.ad) ? f >= l.config.percvRequiredPassthrough : (e = l.config.shouldConsiderLargeAds && e >= l.config.largeAdSize) ? f >= h :
                                f >= g;
                            return f
                        },
                        postIncrementationFn: m
                    })
                }
                a.ac.u = {};
                a.ac.e = {};
                a.ac.e.b = .98;
                a.ac.e.c = 237650;
                a.ac.e.d = .5;
                a.ac.e.e = a.ac.e.b;
                a.ac.e.f = 1E3;
                a.ac.e.g = a.ac.e.f;
                a.ac.e.h = .98;
                a.ac.e.i = 294E3;
                a.ac.e.j = .8;
                a.ac.e.k = 15E3;
                a.ac.e.l = "im";
                a.ac.e.m = "hj";
                a.ac.e.n = {};
                a.ac.e.n.a = {};
                a.ac.e.n.b = {};
                var l = {
                    percvRequired: a.ac.e.b,
                    largeAdSize: a.ac.e.c,
                    largePercvRequired: a.ac.e.d,
                    requiresPassthrough: b,
                    fixedInViewTimeRequirement: a.ac.e.f,
                    viewTimeCap: !1,
                    qsKey: a.ac.e.l
                };
                a.ac.e.n.a = new f(l);
                a.ac.e.n.b = a.ac.e.n.a;
                a.ac.f = {};
                a.ac.f.b =
                    .98;
                a.ac.f.c = 237650;
                a.ac.f.d = .5;
                a.ac.f.e = .98;
                a.ac.f.f = 1E-4;
                a.ac.f.g = 1E3;
                a.ac.f.h = 1E3;
                a.ac.f.i = .98;
                a.ac.f.j = 294E3;
                a.ac.f.k = .8;
                a.ac.f.l = 15E3;
                a.ac.f.m = {};
                a.ac.f.m.a = {};
                a.ac.f.m.b = {};
                a.ac.f.n = "in";
                a.ac.f.o = "hj";
                l = {
                    percvRequired: a.ac.f.b,
                    largeAdSize: a.ac.f.c,
                    largePercvRequired: a.ac.f.d,
                    requiresPassthrough: b,
                    fixedInViewTimeRequirement: a.ac.f.g,
                    viewTimeCap: !1,
                    qsKey: a.ac.f.n
                };
                a.ac.f.m.a = new f(l);
                l = {
                    percvRequired: a.ac.f.e,
                    percvRequiredPassthrough: a.ac.f.f,
                    largeAdSize: !1,
                    largePercvRequired: !1,
                    requiresPassthrough: function(b) {
                        var d;
                        d = a.d.t(a.d.g);
                        var f = b.currentWidth || 0,
                            e = b.currentHeight || 0;
                        a.d.bl ? (b = a.d.y, d = a.d.z) : (b = d.width || 0, d = d.height || 0);
                        return b && d ? e > d || f > b : !1
                    },
                    fixedInViewTimeRequirement: a.ac.f.h,
                    viewTimeCap: !1,
                    qsKey: a.ac.f.n
                };
                a.ac.f.m.b = new f(l);
                a.ac.e.a = function(b) {
                    var d = g(b, a.ac.e.n);
                    if (!1 !== d) return a.ac.s(b.zr), b.groupmV2 = b.groupmV2 || new k(b, d, "GroupM V2"), b.groupmV2
                };
                a.ac.f.a = function(b) {
                    var d = g(b, a.ac.f.m);
                    if (!1 !== d) return a.ac.s(b.zr), b.groupmV3 = b.groupmV3 || new k(b, d, "GroupM V3"), b.groupmV3
                };
                a.ac.c = function(a,
                    b) {
                    b = b || {};
                    var c = x[a];
                    if ("object" !== typeof c) return b;
                    if ("object" === typeof c.groupmV2) {
                        var d = c.groupmV2.config.qsKey;
                        b[d] = c.groupmV2.checkMilestoneReached() ? 1 : 0
                    }
                    "object" === typeof c.groupmV3 && (d = c.groupmV3.config.qsKey, b[d] = c.groupmV3.checkMilestoneReached() ? 1 : 0);
                    return b
                }
            })(a);
            a.m.a.azsx("adKilled", function(c) {
                if (c && !c.ep && (h.hasOwnProperty(c.zr) && a.m.a.sxaz("fullOtsReached", {
                        id: h[c.zr]
                    }), a.ac && a.ac.u && "object" === typeof a.ac.u))
                    for (var d in a.ac.u) a.ac.u.hasOwnProperty(d) && -1 < a.b.indexOf(d, "groupm_counter_" +
                        c.yg) && delete a.ac.u[d]
            })
        })(m);
        (function(a) {
            function l(d, c) {
                return function(c, b) {
                    var f, g;
                    f = {
                        large: d.config.LARGE_SIZE_REQ,
                        normal: d.config.NORMAL_SIZE_REQ
                    };
                    var h = b.getLastInviewPercent();
                    g = a.b.cd(c);
                    f = (g = a.b.j() ? !1 : g >= d.config.LARGE_AD_THRESHOLD) && h >= f.large || !g && h >= f.normal;
                    return d.fullyVisOnLastCheck = f
                }
            }

            function d(d, c) {
                return function(e) {
                    var b = d.maxContinuouslyInViewTime,
                        f = c.get("currentContinuouslyInViewTime");
                    f > b && (d.maxContinuouslyInViewTime = f, b = f >= d.config.TIME_THRESHOLD, a.d.dr(d.ad) && !d.fullViewEventPixelFired &&
                        b && (d.fullViewEventPixelFired = !0, c.set("currentContinuouslyInViewTime", 0, {}), d.ad.fireFullViewEvent = !0));
                    e || c.set("currentContinuouslyInViewTime", 0)
                }
            }

            function g(g, c) {
                this.ad = g;
                this.label = c;
                this.counters = {};
                this.config = h.config;
                this.fullViewEventPixelFired = !1;
                this.maxContinuouslyInViewTime = 0;
                this.fullyVisOnLastCheck = !1;
                var e = a.ba.d(this.ad, this.counters, "publicis_counter_" + g.yg + r.random()),
                    b = l(this, e),
                    f = d(this, e);
                e.set("currentContinuouslyInViewTime", 0, {
                    useDeltaCompensation: !0,
                    shouldIncrementFn: b,
                    postIncrementationFn: f
                })
            }
            a.ao = {};
            var h = {
                v1: {},
                config: {}
            };
            h.v1.display = {};
            h.v1.display.LARGE_AD_THRESHOLD = 237650;
            h.v1.display.NORMAL_SIZE_REQ = .98;
            h.v1.display.LARGE_SIZE_REQ = .3;
            h.v1.display.TIME_THRESHOLD = 1E3;
            h.v1.video = {};
            h.v1.video.LARGE_AD_THRESHOLD = 237650;
            h.v1.video.NORMAL_SIZE_REQ = .98;
            h.v1.video.LARGE_SIZE_REQ = .5;
            h.v1.video.TIME_THRESHOLD = 2E3;
            h.v1.display.VIEWABLE_KEY = "pd";
            h.v1.video.VIEWABLE_KEY = "pv";
            h.config = h.v1.display;
            a.ao.b = function(a) {
                a.publicis = a.publicis || new g(a, "Publicis V1");
                return a.publicis
            };
            a.ao.a = function(a, c) {
                c = c || {};
                var d = x[a];
                if ("object" !== typeof d) return c;
                d = d.publicis;
                "object" === typeof d && (c[d.config.VIEWABLE_KEY] = d.fullViewEventPixelFired ? 1 : 0);
                return c
            };
            a.m.a.azsx("adKilled", function(d) {
                if (d && !d.ep && d.publicis && d.publicis.counters && "object" === typeof d.publicis.counters)
                    for (var c in d.publicis.counters) d.publicis.counters.hasOwnProperty(c) && -1 < a.b.indexOf(c, "publicis_counter_" + d.yg) && delete d.publicis.counters[c]
            })
        })(m);
        (function(a) {
            var l = a.ax.g;
            a.ax.g = function(d, g, h, k) {
                var c;
                if (a.d.s) {
                    var e = a.k.g(d);
                    (c = d.className && -1 !== d.className.indexOf("str-adunit") && e) || (c = c || a.b.getElementsByClassName("str-adunit", !1, e)[0]);
                    if (c)
                        if (a.b.be(c)) {
                            if (c = a.e.e(c, c.nodeName, !1, void 0, g, h)) return c
                        } else return !1
                }
                return (c = l(d, g, h, k)) ? c : !1
            };
            a.bf.c = function(d) {
                var g = a.d.ao().isInApp;
                d = d && d.moatClientSlicer1;
                g && "string" === typeof d && (a.b.aj(["/8663477/NCAA/sports/m_basketball/mml/iphone", "/8663477/NCAA/sports/m_basketball/mml/ipad"], d) ? a.bf.a = !0 : (g = 0 <= d.indexOf("/8663477/PGA/major/new-rydercup"),
                    a.b.l() && g ? a.bf.a = !0 : 0 <= d.indexOf("/Toon/") && (a.bf.a = !0)))
            }
        })(m);
        (function(a) {
            function l(d) {
                if (d.version == a.bg.a) return !0;
                var g = a.bg.a + "-beta" === d.version,
                    c = a.bg.a === d.version + "-beta";
                if ("moatframe" === d.type && (g || c)) return !0
            }
            a.bg = {};
            a.bg.a = "1.2";
            a.b.df() && (a.bg.a += "-beta");
            a.bg.prefix = "MSFAPI";
            a.bg.b = {};
            a.bg.c = {};
            var d = a.d.az.a,
                g = a.d.bb;
            a.bg.d = /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i;
            a.bg.e = /@([a-z0-9]+)@@(.*)/i;
            a.bg.f = function(g) {
                if (g) {
                    var k = a.bg.g(g);
                    k.listening || (q.dcsx.ynds(g,
                        "message", "message-" + d, "ME-" + d), k.listening = !0);
                    var c = q.swde.azsx("message-" + d, a.bg.h);
                    a.m.a.azsx("allLocalAdsKilled", function() {
                        q.swde.sxaz("message-" + d, {
                            id: c
                        });
                        a.bg.i(g)
                    }, {
                        once: !0
                    })
                }
            };
            a.bg.g = function(g) {
                var k = "Moat#PML#" + a.d.au + "#" + a.bg.a;
                g[k] || (g[k] = {
                    id: d,
                    listening: !1
                });
                return g[k]
            };
            a.bg.i = function(g) {
                var k = g && a.bg.g(g);
                a.p.d(g, "message", a.bg.h);
                q.dcsx && q.dcsx.engn({
                    listenerName: "ME-" + d
                });
                q.swde.sxaz("message-" + d, {
                    callback: a.bg.h
                });
                k && (k.listening = !1)
            };
            a.bg.j = function(d) {
                return a.bg.prefix + "#" +
                    d + "#"
            };
            a.bg.k = function(d) {
                var g = d.match(a.bg.d);
                d = !1;
                g && 7 == g.length && (d = {
                    prefix: g[1],
                    version: g[2],
                    uid: g[3],
                    type: g[4],
                    request: g[5],
                    data: g[6]
                }, (g = d.data.match(a.bg.e)) && 3 == g.length && (d.cmd = g[1], d.arg = g[2]), d.version && -1 !== a.b.indexOf(d.version, "-beta") && (d.isBeta = !0));
                return d
            };
            a.bg.h = function(d) {
                if (!(d && d.origin && d.data && "string" === typeof d.data)) return !1;
                var k = a.bg.k(d.data),
                    c = k && k.uid == g.toString();
                if (k && !c && l(k) && (d.msgData = k, k.request in a.bg.c && (d.triggerCallback = function() {
                        a.bg.c[k.request] &&
                            (a.bg.c[k.request](d), a.bg.c[k.request] = null, delete a.bg.c[k.request])
                    }), a.bg.b[k.type]))
                    for (var c = 0, e = a.bg.b[k.type].length; c < e; c++) a.bg.b[k.type][c](d)
            };
            a.bg.l = function(d, g) {
                a.bg.b[d] = [g]
            };
            a.bg.m = function(d, k, c, e) {
                "object" == typeof k && (k = a.b.bj(k));
                e = e || r.floor(1E10 * r.random());
                "function" == typeof c && (a.bg.c[e] = c);
                d = a.bg.j(a.bg.a) + g + "#" + d + "#" + e + "#" + k;
                return {
                    request: e,
                    msg: d
                }
            };
            a.bg.n = function(d, g, c, e, b) {
                "object" == typeof c && (c = a.b.bj(c));
                return a.bg.m(d, "@" + g + "@@" + c, e, b)
            };
            a.bg.o = function(d, g, c) {
                try {
                    if (!d ||
                        !d || !d.source) return !1;
                    d.source.postMessage(a.bg.m(d.msgData.type, g, c, d.msgData.request).msg, "*")
                } catch (e) {
                    return !1
                }
                return !0
            };
            a.bg.p = function(d, g, c) {
                try {
                    var e = a.k.i(g || window.top);
                    if (!e) return a.p.f(function() {
                        a.bg.p(d, g, c)
                    }, 200);
                    for (var b = 0; b < e.length; b++) c && e[b] == window || e[b].postMessage(d, "*")
                } catch (f) {}
            };
            a.m.a.azsx("modulesReady", a.b.cn([window], a.bg.f), {
                once: !0
            });
            a.m.a.azsx("stopPostMessageListeners", a.b.cn([window], a.bg.i), {
                once: !0
            })
        })(m);
        (function(a) {
            a.ak = {};
            a.ak.c = {};
            a.ak.c.a = "CF";
            a.ak.c.b =
                "CNF";
            a.ak.c.c = "CNS";
            a.ak.b = {};
            a.ak.b.b = !1;
            a.ak.b.c = [];
            a.ak.d = {};
            a.ak.e = {};
            var l = !1,
                d = [];
            a.ak.b.a = function() {
                var d = a.ak.f();
                a.ak.b.b || a.d.e || (d = a.bg.n("moatframe", "check", d, function(d) {
                    (d = a.b.bk(d.msgData.data)) && d.available && !a.ak.b.b && (a.d.cd = !0, a.ak.b.b = !0, d = "MoatFrame#geom#" + (new n).getTime(), a.p.g(a.ak.b.d, null, 200, d), a.ak.b.c.push(d), a.m.a.azsx("allLocalAdsKilled", a.ak.g, {
                        once: !0
                    }), a.m.a.zaxs("Moatframe:Ready", d))
                }), a.bg.p(d.msg, !1, !0))
            };
            a.ak.h = function() {
                a.bg.l("moatframe", a.ak.i);
                a.bg.p(a.bg.m("moatframe",
                    "ping").msg, !1, !0)
            };
            a.ak.a = function(d) {
                var h = a.ak.b.e;
                if (!h) return !1;
                var k = a.aa.i(d.aa),
                    c = a.aa.o(k.rect, h.el, h.et),
                    e = a.aa.o(k.visibleRect, h.el, h.et),
                    e = a.aa.n(e, {
                        left: h.vl,
                        right: h.vr,
                        top: h.vt,
                        bottom: h.vb
                    }),
                    k = (e.right - e.left) * (e.bottom - e.top) / k.area,
                    b = !1;
                h && "number" === typeof h.pv && !isNaN(h.pv) && (a.b.cy(k, h.pv, .01) && "sframe" === a.o.b(d.zr) && (b = !0), k = r.min(k, h.pv));
                h.m || (b = !0);
                b && a.m.a.zaxs("rectsAvailable", d.zr, c, e);
                h && "boolean" === typeof h.ia && (a.d.ce = h.ia);
                h && "number" === typeof h.m && !isNaN(h.m) && (a.d.cf =
                    h.m);
                return k
            };
            a.ak.j = function(d) {
                return "undefined" !== typeof d && a.ak.e && a.ak.e[d] ? (a.ak.e[d] = null, !0) : !1
            };
            a.ak.g = function() {
                var d = a.bg.m("moatframe", "kill", null);
                a.bg.p(d.msg, !1, !0)
            };
            a.ak.f = function() {
                var d = a.d.aa,
                    h = a.d.ab;
                return d && h ? {
                    width: d,
                    height: h
                } : !1
            };
            a.ak.k = function() {
                return a.d.e || a.d.bq()
            };
            a.ak.l = function(d) {
                var h = !1;
                a.b.forEach(a.ak.c, function(a) {
                    if (a == d) return h = !0, !1
                });
                return h
            };
            a.ak.i = function(d) {
                var h = d.msgData.cmd || d.msgData.data;
                if (h)
                    if (d.triggerCallback) d.triggerCallback(d);
                    else if (a.ak.d[h]) a.ak.d[h](d);
                else a.ak.l(h) || a.bg.o(d, a.ak.c.b)
            };
            a.ak.m = function(d) {
                var h = {},
                    k = d.msgData.arg && a.b.bk(d.msgData.arg);
                a.ak.n(window, d.source, d.msgData.uid, k) && a.ak.k() ? h.available = !0 : h.available = !1;
                a.bg.o(d, h)
            };
            a.ak.o = function(d, h) {
                if (!d || !h) return !1;
                for (var k = a.k.c(window).pop(), c = a.k.k(d, 10), e = !1, b = !1, f = null, l = null, m, n = c.length - 1; 0 <= n; n--)
                    if (c[n] == k && (e = !0), e && !a.k.j(c[n])) {
                        l = c[n];
                        break
                    }
                e && l && ((f = l && l.parent && l.parent.document) && (m = a.k.f(f, l)), m && (k = m.offsetWidth, c = m.offsetHeight, k == h.width && c == h.height ? b = !0 :
                    (k *= c, c = h.width * h.height, b = .98 <= r.min(k, c) / r.max(k, c))));
                return {
                    isNested: b,
                    iframe: m,
                    iframeParentDoc: f
                }
            };
            a.ak.p = function(d) {
                return d && d.parent && a.k.f(d.parent.document, d)
            };
            a.ak.q = function(d) {
                (d = "undefined" !== typeof d && a.ak.e && a.ak.e[d]) && "boolean" == typeof d.isWithinReach && (d.isNested && !d.iframeParentDoc && (d.isWithinReach = !1), d.isNested || d.win && !a.k.d(d.win) || (d.isWithinReach = !1));
                return d
            };
            a.ak.n = function(d, h, k, c) {
                var e, b, f = {
                    isNested: !1,
                    iframe: null,
                    iframeParentDoc: null
                };
                if ((e = a.ak.q(k)) && e.isWithinReach) return !0;
                b = a.k.m(d, h, !0);
                e && "undefined" == typeof e.isWithinReach ? e.isWithinReach = b : (b ? h = a.ak.p(h) : (f = a.ak.o(h, c), (h = f.iframe) && (b = !0)), e = {
                    dimensions: c,
                    iframe: h,
                    iframeParentDoc: f.iframeParentDoc,
                    isNested: f.isNested,
                    isWithinReach: b,
                    win: d
                }, a.ak.e[k] = e);
                return e.isWithinReach
            };
            a.ak.r = function(a, d, k, c, e) {
                if (!a || !d) return !1;
                a = {
                    w: a.width,
                    h: a.height,
                    el: a.left,
                    et: a.top,
                    er: a.right,
                    eb: a.bottom,
                    vl: d.left,
                    vt: d.top,
                    vr: d.right,
                    vb: d.bottom
                };
                "boolean" === typeof c && (a.ia = c);
                "number" !== typeof k || isNaN(k) || (a.m = k);
                "number" !== typeof e ||
                    isNaN(e) || (a.pv = 1 < e ? e / 100 : e);
                return a
            };
            a.ak.s = function(d) {
                if (!d) return !1;
                if (a.d.ao().isInApp && a.d.bq() && a.am) {
                    d = a.am.f(d);
                    if (!d) return !1;
                    var h = a.am.b;
                    return d = a.ak.r(d.elementRect, d.visibleRect, 1, !0, h && h.percv)
                }
                d = a.aa.i(d);
                return d ? d = a.ak.r(d.cumulRect, d.visibleRect, 0, !1) : !1
            };
            a.ak.b.d = function() {
                if (!l) {
                    l = !0;
                    var d = a.bg.m("moatframe", "geom", function(d) {
                        l = !1;
                        a.ak.l(d.msgData.data) || (a.ak.b.e = a.b.bk(d.msgData.data))
                    });
                    a.bg.p(d.msg, !1, !0)
                }
            };
            a.ak.d.ping = function(d) {
                d && d.source === window || a.b.dg() && d.msgData.isBeta ||
                    !a.d.e && a.d.dg() && a.ak.b.a()
            };
            a.ak.d.check = function(g) {
                if (!a.b.df() || g.msgData.isBeta) {
                    var h = !0;
                    a.d.ao().isInApp && (h = a.d.bq(), !h && a.am.d && d.push(g));
                    h && a.ak.m(g)
                }
            };
            a.ak.d.geom = function(d) {
                if (!a.b.df() || d.msgData.isBeta)
                    if (a.ak.n(window, d.source, d.msgData.uid) && a.ak.k()) {
                        var h = a.ak.e && a.ak.e[d.msgData.uid] && a.ak.e[d.msgData.uid].iframe;
                        if (h && (h = a.ak.s(h))) {
                            a.bg.o(d, h);
                            return
                        }
                        a.bg.o(d, a.ak.c.a)
                    } else a.bg.o(d, a.ak.c.c)
            };
            a.ak.d.kill = function(d) {
                a.ak.j(d.msgData.uid)
            }
        })(m);
        (function(a) {
            a.bd = {};
            a.bd.b =
                5E3;
            a.bd.c = function(l) {
                if (!a.d.e) return !1;
                l.activetime = {};
                l.activetime.counters = {};
                a.bd.d(l);
                a.m.a.azsx("adKilled", a.bd.e, {
                    condition: function(a) {
                        return l.zr == a.zr
                    },
                    once: !0
                });
                a.bd.f(l)
            };
            a.bd.f = function(l) {
                if (l.activetime) {
                    var d = a.o.r(l.zr);
                    if (l.activetime.onInViewTimeCount)
                        for (var g in d) d[g].removeListener && d[g].removeListener(l.activetime);
                    else l.activetime.onInViewTimeCount = a.b.cn([l], a.bd.g);
                    (d = a.o.a(l.zr, !0)) && d.addListener(l.activetime)
                }
            };
            a.bd.d = function(l) {
                l.activetime.mouseSubId = q.swde.azsx("mouseEvent",
                    a.b.cn([l], a.bd.h));
                l.activetime.mouseLocalSubId = a.m.a.azsx("mouseEvent", a.b.cn([l], a.bd.h));
                l.activetime.keyboardSubId = q.swde.azsx("keyboardEvent", a.b.cn([l], a.bd.i));
                l.activetime.focusSubId = q.swde.azsx("focusStateChange", a.b.cn([l], a.bd.j))
            };
            a.bd.e = function(l) {
                if (l.activetime && (q.swde.sxaz("mouseEvent", {
                            id: l.activetime.mouseSubId
                        }), a.m.a.sxaz("mouseEvent", {
                            id: l.activetime.mouseLocalSubId
                        }), q.swde.sxaz("keyboardEvent", {
                            id: l.activetime.keyboardSubId
                        }), q.swde.sxaz("focusStateChange", {
                            id: l.activetime.focusSubId
                        }),
                        l.activetime && l.activetime.counters && "object" === typeof l.activetime.counters))
                    for (var d in l.activetime.counters) delete l.activetime.counters[d]
            };
            a.bd.k = function(l, d) {
                a.bd.l(l, !0)
            };
            a.bd.h = function(l, d) {
                a.bd.l(l, !0)
            };
            a.bd.i = function(l, d) {
                a.bd.l(l, !0)
            };
            a.bd.j = function(l, d) {
                d && a.bd.l(l, !0)
            };
            a.bd.l = function(l, d) {
                var g = (new n).getTime(),
                    g = l.activetime.activeTS && g - l.activetime.activeTS || 0;
                d && (1E3 < g || !l.activetime.active) && (l.activetime.checkID && a.b.a(l.activetime.checkID), l.activetime.activeTS = (new n).getTime(),
                    l.activetime.checkID = a.p.f(a.b.cn([l], a.bd.m), a.bd.b));
                l.activetime.active = d
            };
            a.bd.m = function(l) {
                if (l.activetime.active) {
                    var d = (new n).getTime() - l.activetime.activeTS < a.bd.b;
                    a.bd.l(l, d)
                }
            };
            a.bd.g = function(l, d, g, h, k) {
                g = a.ba.a(l.activetime.counters, k);
                k = a.o.k(l.zr, k);
                k = (l = l.activetime.active) && k && k.visible && k.visible();
                h = g.get("lastActiveVis", !1);
                !g.get("wasEverActiveAndFocused") && l && g.set("wasEverActiveAndFocused", 1);
                h && k ? g.increment("activeInviewTime", r.max(d, 0)) : (h || k) && g.increment("activeInviewTime",
                    r.max(r.round(.5 * d), 0));
                g.set("lastActiveVis", k)
            };
            a.bd.a = function(l, d) {
                if (!a.e.c()) {
                    d.rf = a.d.fm ? 1 : 0;
                    var g;
                    g = a.d.fm;
                    if (!a.d.e) return g = g || a.focus.pageIsVisible() || l && l.counters && l.counters.strictDwell && l.counters.strictDwell.tCur && 0 < l.counters.strictDwell.tCur, d.re = g ? 1 : 0, d;
                    if (!l.activetime) return d;
                    var h = a.o.b(l.zr),
                        h = a.ba.a(l.activetime.counters, h);
                    g = g || h.get("wasEverActiveAndFocused");
                    d.re = g ? 1 : 0;
                    h && 0 < h.get("activeInviewTime") && (d.ft = h.get("activeInviewTime"), d.fv = h.get("lastActiveInviewTime"), d.fw =
                        h.get("activeInviewTimeFirstDelta", h.get("activeInviewTime")), h.set("lastActiveInviewTime", h.get("activeInviewTime")));
                    return d
                }
            };
            a.m.a.azsx("viewCounterStarted", a.bd.f);
            a.m.a.azsx("startAdTracking", a.bd.c)
        })(m);
        (function(a) {
            function l(d) {
                d.functionInProgress = !1;
                return 0 < d.pendingFunctions.length ? (d = d.pendingFunctions.shift(), a.b.cn(d, a.ad.call, a.ad)(), !0) : !1
            }

            function d() {
                try {
                    a = window.__b, (0, window.__w)("INNER_FUNCTION"), window.__w = void 0, window.__b = void 0
                } catch (d) {
                    var g = d.name + " in closure (moat.customIframe): " +
                        d.message + ", stack=" + d.stack;
                    try {
                        var c = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                            e = c ? "" : document.referrer,
                            b = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof Q ? "TURNERDFP1" : Q) + "&ac=1&k=" + escape(g) + "&ar=" + escape("e2b442bdf4f-clean") + "&iw=" + escape("e59434f") + "&j=" + escape(e) + "&cs=" + (new n).getTime();
                        c ? omidNative.sendUrl(b) : (new Image(1, 1)).src = b
                    } catch (h) {}
                }
            }

            function g(g) {
                if (!g) return !1;
                var c = g.iframe,
                    e = c.contentWindow.document,
                    b = g.innerFunction,
                    f = g.innerFunctionCbName,
                    h = g.preserveDom;
                !1 !== a.d.er() ? (h = e.createElement("script"), h.innerHTML = d.toString().replace('"INNER_FUNCTION"', b), e.body.appendChild(h)) : (b = "<html><head></head><body><script>" + d.toString().replace('"INNER_FUNCTION"', b) + "\x3c/script>", h || (b += "<script>setTimeout(function() { document.close(); }, 1);\x3c/script>"), e.write(b + "</body></html>"));
                c.contentWindow.__b = g.Moat;
                c.contentWindow.__w = g.wrapper;
                c.contentWindow[d.toString().match(/function (\w+)\(\)/)[1]]();
                f && a.d.az[f] && (a.d.az[f] = null);
                if (!l(g.frameData)) a: if (e = g.setIframeDomain, g = g.preserveDom, c) {
                    var m;
                    if (!e) try {
                        m = c.contentWindow.document
                    } catch (n) {
                        break a
                    }
                    f = !1 === a.d.er();
                    g ? e ? c.src = "javascript:document.close();" : m.close() : e ? c.src = f ? "javascript:document.open(); document.close();" : 'javascript:document.head && (document.head.innerHTML=""); document.body && (document.body.innerHTML="");' : f ? (m.open(), m.close()) : (m.head && (m.head.innerHTML = ""), m.body && (m.body.innerHTML = ""))
                }
            }

            function h(a) {
                if ("string" !== typeof a) return "";
                var c = a.charAt(0);
                "'" !== c && '"' !== c && (a = "'" + a + "'");
                return a
            }
            a.ad = {};
            a.ad.a = function(d, c, e, b) {
                if (!d) return !1;
                try {
                    var f = document.createElement("iframe"),
                        g = c || a.b.cq();
                    if (!f) return !1;
                    a.b.cw(f, b);
                    var h;
                    e ? (e = a.b.bx(e), h = function() {
                        a.b.bw(f, e)
                    }) : (e = a.d.g.document.body, h = function() {
                        e.insertBefore(f, e.insertBefore[0] || null)
                    });
                    var m = {
                        id: g,
                        iframe: f,
                        functionInProgress: !1,
                        pendingFunctions: [],
                        parent: e,
                        loaded: !1
                    };
                    f.onload = function() {
                        f.contentWindow && f.contentDocument && !m.loaded && (m.loaded = !0, l(m))
                    };
                    h();
                    m.loaded =
                        m.loaded || f.contentDocument && "complete" === f.contentDocument.readyState;
                    d.customIframes || (d.customIframes = {});
                    d.customIframes[g] = m;
                    m.loaded && l(m);
                    a.m.a.azsx("adKilled", function(b) {
                        var c = b.customIframes,
                            d;
                        for (d in c) c.hasOwnProperty(d) && a.ad.b(b, c[d].id)
                    }, {
                        condition: function(a) {
                            return d.zr == a.zr
                        },
                        once: !0
                    });
                    return g
                } catch (p) {}
                return !1
            };
            a.ad.b = function(a, c, d) {
                var b = a.customIframes[c];
                d = b && b.iframe;
                if (!b || !d) return !1;
                b = b.parent;
                if (!b) return !1;
                try {
                    b.removeChild(d)
                } catch (f) {}
                a.customIframes[c] = null;
                delete a.customIframes[c];
                return !0
            };
            a.ad.call = function(d, c, e, b, f, l) {
                if (!d || "undefined" === typeof c) return !1;
                var m = d && d.customIframes && d.customIframes[c];
                if (!m || !e) return !1;
                b = b && "string" !== typeof b ? b.toString() : h(b);
                e && "string" !== typeof e && (e = a.b.ct(e, b));
                f && "function" === typeof f || (f = function() {});
                if (m.functionInProgress || !m.loaded) return m.pendingFunctions.push([d, c, e, b, f, l]), !1;
                d = m.iframe;
                m.functionInProgress = !0;
                c = !1;
                try {
                    if (!m.iframe.contentDocument) throw Error();
                } catch (p) {
                    c = !0
                }
                e = a.p.l(a.b.cn([{
                    iframe: d,
                    frameData: m,
                    Moat: a,
                    wrapper: function(a) {
                        f(a)
                    },
                    innerFunction: e,
                    innerFunctionCbName: n,
                    setIframeDomain: c,
                    preserveDom: l
                }], g));
                if (c) {
                    var n;
                    do n = "Moat#iqcb" + r.floor(1E4 * r.random()); while (a.d.az[n]);
                    a.d.g[a.d.ba][n] = e;
                    d.src = 'javascript:document.open(); document.domain="' + document.domain + '"; window.parent["' + a.d.ba + '"]["' + n + '"]();'
                } else e()
            }
        })(m);
        (function(a) {
            a.ae = {};
            a.ae.a = function(a, d) {
                function g(a) {
                    a = [{
                        name: "fr",
                        enabled: !0,
                        inview: a
                    }];
                    q && q(a)
                }

                function h(a) {
                    a && 5 > n ? n += 1 : a || (n = 0);
                    return n
                }

                function k(a) {
                    var b, c, d;
                    clearTimeout(m);
                    c = x;
                    d = c.inView;
                    b = c.time;
                    a = (new window.Date).getTime();
                    b = 2 < 1E3 / (a - b);
                    var e = x.inView,
                        k = b && !e && 0 === n;
                    p && (!b && e || k) && p && p(void 0);
                    h(b);
                    b = b && 5 === n;
                    b !== d && g(b);
                    c.inView = b;
                    c.time = a;
                    f()
                }

                function c() {
                    var a = x,
                        b = (new window.Date).getTime();
                    500 <= b - a.time && a.inView && (g(!1), a.inView = !1, a.time = b)
                }

                function e() {
                    for (var a = 0, b = r.length; a < b; a++) window.cancelAnimationFrame(r[a]);
                    r = []
                }

                function b() {
                    return {
                        time: (new window.Date).getTime(),
                        inView: !1
                    }
                }

                function f() {
                    x.inView && (m = setTimeout(c, 500));
                    20 <= r.length && e();
                    r.push(window.requestAnimationFrame(k))
                }
                var m, n = 0,
                    q = a && window && window.parent && window.parent[a],
                    p = d && window && window.parent && window.parent[d],
                    r = [],
                    x = b();
                window.onBlur = function() {
                    h(!1);
                    x = b();
                    clearTimeout(m);
                    e()
                };
                window.onFocus = f;
                f()
            }
        })(m);
        (function(a) {
            function l(b) {
                var c = {
                    oz: !0
                };
                if (!a.d.ao().isInApp || a.d.cr()) c.su = !0, c.of = !0;
                if (!e[b]) return !1;
                for (var d in e[b])
                    if (c[d] && e[b].hasOwnProperty(d) && !e[b][d]) return !1;
                return !0
            }

            function d(c) {
                if (!a.d.c()) {
                    a.ar.e(c);
                    a.ar.f(c);
                    a.ar.g(c);
                    a.ar.h(c);
                    var d = l(c.zr);
                    !c.hasAdLoadedfired && d ? b = !0 : !b && d && (d = {
                            e: 9
                        },
                        d.q = c.aq[9]++, a.v.a(c, d), b = !0)
                }
            }

            function g(b) {
                b = a.d.c() ? !0 : !1;
                return {
                    st: b,
                    su: b,
                    of: b,
                    oz: b
                }
            }
            var h = 0,
                k, c = x,
                e = {};
            a.ar = {};
            a.ar.c = function(a) {
                return !1
            };
            a.ar.d = function() {
                var b = (new n).getTime(),
                    e = b - h;
                if (h && !(1E3 > e)) {
                    h = b;
                    for (var g in c) c.hasOwnProperty(g) && d(c[g]);
                    a.m.a.zaxs("hiddenAds:updated")
                }
            };
            var b = !1;
            a.ar.e = function(b) {
                e[b.zr] || (e[b.zr] = g(b));
                if (!0 !== e[b.zr].st) {
                    var c = a.o.a(b.zr);
                    c ? (c = c.adStartedOnScreen(), "undefined" !== typeof c && (b.isCurrentlyStacked = a.aa.s(b), !1 === e[b.zr].st && (e[b.zr].st = !1 === c ||
                        !1 === b.isCurrentlyStacked))) : e[b.zr].st = !0
                }
            };
            a.ar.f = function(b) {
                var c = e,
                    d = b.zr;
                c[d] = e[d] || g(b);
                var h = c[d].su;
                if (!h) {
                    var k = b.WINDOW || window,
                        h = b.AD_RECT || a.aa.l(b.aa, k, b._calcVideoBasedOnContainer),
                        k = a.d.t(k),
                        h = b.isInIframe ? h && k && !(h.left >= k.width || 0 >= h.right || h.top >= k.height || 0 >= h.bottom) : !0;
                    c[d].su = h
                }
            };
            a.ar.g = function(b) {
                var c = e,
                    d = b.zr;
                c[d] = e[d] || g(b);
                var h = c[d].of;
                h || (h = a.d.t(b.WINDOW), h = b.isInIframe ? h && !(5 >= h.width || 5 >= h.height) : !0, c[d].of = h)
            };
            a.ar.h = function(b) {
                var c = e[b.zr];
                e[b.zr] = e[b.zr] || g(b);
                if (b.aa) {
                    var d = 0 < a.b.cm(b);
                    b.isCurrentlyTransparent = !d;
                    c.oz = c.oz || d;
                    return d
                }
                return c.oz
            };
            a.ar.b = function(a) {
                var b = {},
                    c, d;
                for (d in e[a]) e[a].hasOwnProperty(d) && (c = e[a][d], b[d] = c ? 1 : 0);
                return b
            };
            a.ar.a = function(b) {
                return a.d.dy() ? !1 : !l(b)
            };
            a.m.a.azsx("adLoaded", function(a) {
                a.hasAdLoadedfired = !0
            });
            a.m.a.azsx("startAdTracking", function(b) {
                d(b);
                h = (new n).getTime();
                k || (k = (new n).getTime() + "ha", a.m.a.azsx("view:tick", function() {
                    a.ar.d()
                }, {
                    id: k
                }))
            });
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("view:tick", {
                    id: k
                });
                c = null
            }, {
                once: !0
            });
            a.m.a.azsx("adEntersView", function(b) {
                a.ar.e(b)
            }, {
                once: !0
            });
            a.m.a.azsx("adKilled", function(a) {
                a && !a.ep && (delete a.elementsFromPointCache, delete e[a.zr])
            })
        })(m);
        (function(a) {
            a.y = {};
            var l, d;
            a.y.h = function(g) {
                if (d) g();
                else if (l.googletag && l.googletag.apiReady && l.googletag.pubads()) d = l.googletag.pubads(), g();
                else {
                    l.googletag = l.googletag || {};
                    l.googletag.cmd = l.googletag.cmd || [];
                    var h = a.p.l(g),
                        k = function() {
                            var a = l.googletag;
                            (d = a && a.apiReady && a.pubads()) && h()
                        };
                    a.m.a.azsx("adKilled",
                        function() {
                            var c = l.googletag;
                            if (c && a.b.cx(c.apiReady) && c.cmd && a.b.d(c.cmd)) {
                                var d = c.cmd.indexOf(k); - 1 !== d && c.cmd.splice(d, 1)
                            }
                        });
                    l.googletag.cmd.push(k)
                }
            };
            a.y.g = function() {
                if (d && "function" !== typeof d.getSlots) return !1;
                try {
                    return d.getSlots()
                } catch (a) {
                    return []
                }
            };
            a.y.e = function() {
                if (d && "function" === typeof d.getSlotIdMap) return d.getSlotIdMap()
            };
            a.y.i = function(a) {
                return d.getTargeting(a)
            };
            a.y.j = function() {
                if ("function" !== typeof d.getTargetingKeys || "function" !== typeof d.getTargeting) return !1;
                var g = d.getTargetingKeys(),
                    h = {};
                a.b.forEach(g, function(a) {
                    h[a] = d.getTargeting(a)
                });
                return h
            };
            a.y.k = function(a, h) {
                if ("function" !== typeof d.setTargeting) return !1;
                d.setTargeting(a, h);
                return !0
            };
            a.y.l = function(a) {
                if ("function" !== typeof d.clearTargeting) return !1;
                d.clearTargeting(a)
            };
            a.y.m = function(a) {
                if (a && "function" === typeof a.getTargetingKeys) return a.getTargetingKeys()
            };
            a.y.n = function(a, d) {
                return a && "function" === typeof a.getTargeting && d ? a.getTargeting(d) : !1
            };
            a.y.o = function(d) {
                var h = {},
                    k = a.y.m(d);
                a.b.d(k) && a.b.forEach(k, function(c) {
                    h[c] =
                        a.y.n(d, c)
                });
                return h
            };
            a.y.d = function(d) {
                if (d) {
                    d = a.y.o(d);
                    var h = a.y.j();
                    a.b.forEach(d, function(a, c) {
                        h[c] = a
                    });
                    return h
                }
            };
            a.y.p = function(a, d, k) {
                if (!(a && d && k && "function" === typeof a.setTargeting)) return !1;
                a.setTargeting(d, k)
            };
            a.y.q = function(a, d) {
                if (!a || "function" !== typeof a.clearTargeting) return !1;
                a.clearTargeting(d)
            };
            a.y.r = function(g, h) {
                if (g && h && d && "function" === typeof d.addEventListener) {
                    var k = a.p.l(h);
                    d.addEventListener(g, k)
                }
            };
            a.y.b = function(a) {
                if (a && "function" === typeof a.getSlotElementId) return a.getSlotElementId()
            };
            a.y.s = function(a) {
                if (a && "function" === typeof a.getSlotId && (a = a.getSlotId()) && "function" === typeof a.getId) return a = a.getId(), l.document.getElementById("google_ads_iframe_" + a)
            };
            a.y.a = function(a) {
                if (a && "function" === typeof a.getAdUnitPath) return a.getAdUnitPath()
            };
            a.y.c = function(d) {
                if (d = a.y.a(d)) {
                    d = d && d.split("/");
                    var h = [];
                    a.b.forEach(d, function(a) {
                        0 < a.length && h.push(a)
                    });
                    return h
                }
            };
            a.y.t = function(d) {
                var h = [];
                d && "function" === typeof d.getSizes && a.b.forEach(d.getSizes(), function(a) {
                    "function" === typeof a.getWidth &&
                        "function" === typeof a.getHeight && h.push([a.getWidth(), a.getHeight()])
                });
                return h
            };
            a.y.u = function() {
                var a = l && l.googletag && l.googletag.sizeMapping;
                if (a) return a()
            };
            a.y.f = function() {
                if (d) {
                    var g, h = document.body;
                    a.b.forEach(3, function() {
                        g = h;
                        h = a.k.b(h);
                        if (!h) return !1
                    });
                    var k = g && g.id,
                        c, e = !1;
                    k && -1 < k.indexOf("google_ads_iframe") && (e = !0, c = k.replace(/google_ads_iframe_?/, ""));
                    if (e) {
                        var k = d.getSlotIdMap(),
                            b;
                        for (b in k)
                            if (b && "string" === typeof b && b === c) return k[b]
                    }
                }
            };
            a.y.v = function() {
                return l
            };
            a.y.w = function(a,
                h) {
                if (d && "function" !== typeof d.refresh) return !1;
                d.refresh(a, h)
            };
            (function() {
                l = a.d.g;
                var g = l.googletag;
                d = g && g.pubads && g.pubads()
            })()
        })(m);
        (function(a) {
            function l(d) {
                d && (a.d.az.b || (a.d.az.b = !0, q.dcsx && q.dcsx.ynds(window, "deviceorientation", "deviceorientation-" + a.d.az.a, "deviceorientationFn" + a.d.az.a)), b || (b = !0, q.swde.azsx("deviceorientation-" + a.d.az.a, g)), c.hasOwnProperty(d.zr) || (c[d.zr] = new h))
            }

            function d(a) {
                a && delete c[a.zr]
            }

            function g(a) {
                var b = n.now(),
                    d = !1;
                200 < b - e && (e = b, d = !0);
                for (var g in x) x.hasOwnProperty(g) &&
                    c.hasOwnProperty(g) && (b = c[g], 1500 > b.eventsCount && (b.eventsCount += 1, d && b.handleOrientationEvent(a)))
            }

            function h() {
                this.validEventsHandledCount = this.eventsHandledCount = this.eventsCount = 0;
                this.alpha = new k(0, 360);
                this.beta = new k(-180, 180);
                this.gamma = new k(-90, 90)
            }

            function k(a, b) {
                this.minExpectedVal = a;
                this.maxExpectedVal = b;
                this.normalizedMax = r.abs(this.minExpectedVal) + this.maxExpectedVal;
                this.rangeRight = this.rangeLeft = this.origin = null
            }
            a.bc = {};
            var c = {},
                e = 0,
                b = !1;
            h.prototype.isValidEvent = function(a) {
                return !a.alpha &&
                    0 !== a.alpha || !a.beta && 0 !== a.beta || !a.beta && 0 !== a.beta || 0 === a.alpha && 0 === a.beta && 0 == a.gamma ? !1 : !0
            };
            h.prototype.handleOrientationEvent = function(a) {
                this.eventsHandledCount += 1;
                this.isValidEvent(a) && (this.validEventsHandledCount += 1, this.alpha.addValue(a.alpha), this.beta.addValue(a.beta), this.gamma.addValue(a.gamma))
            };
            k.prototype.isOutsideRange = function(a) {
                return this.rangeLeft > this.rangeRight ? this.rangeLeft > a && a > this.rangeRight : a < this.rangeLeft || a > this.rangeRight
            };
            k.prototype.extendRange = function(a) {
                this.isOutsideRange(a) &&
                    ((a < this.rangeLeft ? this.rangeLeft - a : this.rangeLeft + this.normalizedMax - a) <= (a > this.rangeRight ? a - this.rangeRight : this.normalizedMax - this.rangeRight + a) ? this.rangeLeft = a : this.rangeRight = a)
            };
            k.prototype.addValue = function(a) {
                var b = a + r.abs(this.minExpectedVal);
                null === this.origin ? (this.origin = a.toFixed(3), this.rangeRight = this.rangeLeft = b) : this.extendRange(b)
            };
            k.prototype.getRangeLength = function() {
                return null === this.origin ? -1 : this.rangeRight >= this.rangeLeft ? (this.rangeRight - this.rangeLeft).toFixed(3) : (this.normalizedMax -
                    this.rangeLeft + this.rangeRight).toFixed(3)
            };
            a.bc.a = function(a) {
                var b = {};
                c[a] && (a = c[a], b = {
                    oe: [a.eventsCount, a.eventsHandledCount, a.validEventsHandledCount, a.alpha.origin ? a.alpha.origin : "null", a.alpha.getRangeLength(), a.beta.origin ? a.beta.origin : "null", a.beta.getRangeLength(), a.gamma.origin ? a.gamma.origin : "null", a.gamma.getRangeLength()].join(":")
                });
                return b
            };
            a.d.g.DeviceOrientationEvent && (a.m.a.azsx("adInitialized", l), a.m.a.azsx("adKilled", d), a.m.a.azsx("allLocalAdsKilled", function() {
                q && q.dcsx && q.dcsx.engn &&
                    q.dcsx.engn({
                        listenerName: "deviceorientationFn" + a.d.az.a
                    });
                q.swde.sxaz("deviceorientation-" + a.d.az.a, {
                    callback: g
                });
                c = {};
                b = a.d.az.b = !1
            }))
        })(m);
        m.m.a.zaxs("modulesReady", q);
        var Na = m.focus.pageIsVisible();
        m.d.fm = 1 == window.history.length && !Na && (m.d.e && "" != document.referrer || !m.d.e);
        var Ia = !0;
        m.b.ad() && (Ia = !1);
        var xa = m.d.bc;
        m.b.z();
        m.m.a.azsx("adInitialized", function(a) {
            function l(a) {
                window._qs = a;
                (a = window.__b) && a.b.by("https://z.moatads.com/px2/client.js", document.body)
            }

            function d(a) {
                var c = m.f.u();
                a =
                    m.v.b(36, a.ao, c, !1, !0);
                a.qs.i = m.b.dd(Q, "PX2");
                return m.v.j(a.qs)
            }
            if (a) {
                var g = 0 === r.floor(1E3 * r.random());
                a.px2 = {
                    inSample: !1,
                    success: !1
                };
                if (g && (a.px2.inSample = !0, g = m.ad.a(a, "ivt"))) {
                    var h = d(a);
                    m.ad.call(a, g, l, h, null, !0);
                    a.px2.success = !0
                }
            }
        }, {
            once: !0
        });
        m.d.l || m.d.an || m.d.du();
        (m.d.l || m.d.an) && xa && xa.match("audit.adnxs.net") && m.d.du();
        (m.d.l && m.d.ey() || "dummy.url" === m.b.z()) && m.d.du();
        m.d.du();
        m.ak.h();
        var E = m.b.bn(),
            ua = !1,
            Pa;
        za = "https://px.moatads.com";
        m.be.a(La);
        var Ha = function() {
            var a;
            a = arguments &&
                arguments[0];
            a = m.b.m() && m.d.j() && a && a.type && "beforeunload" === a.type ? !0 : !1;
            a || (q.zs && q.dcsx && (q.dcsx.engn({
                listenerName: "unloadFn" + m.d.az.a
            }), q.dcsx.engn({
                listenerName: "beforeunloadFn" + m.d.az.a
            })), wa || (wa = !0, m.e.b()), m.f && m.f.a(), ra(), m.m.a.zaxs("stopPostMessageListeners"))
        };
        !E && m.d.c() && (E = {
            _MoatProxyOf: "thisScript"
        });
        if (!E) return !1;
        m.c = E;
        m.b.bq(E);
        m.m.a.azsx("trackingReady", Fa, {
            once: !0
        });
        var Da = m.x.d(E);
        m.bf.b(Da);
        if (!m.bf.a) {
            if (m.d.j())
                if (m.d.eq()) m.d.ep();
                else {
                    m.n.d();
                    var Da = m.d.d(),
                        Oa = m.d.cs(),
                        Ra = m.d.em && m.d.em(),
                        Ea = !1;
                    Oa && !Ra ? Ea = !0 : Oa || Da || (Ea = !0);
                    Ea && m.m.a.zaxs("trackingReady")
                }
            else m.m.a.zaxs("trackingReady");
            m.d.d() && m.q.q();
            m.m.a.azsx("allLocalAdsKilled", Ka, {
                once: !0
            })
        }
    })(Date, Math)
} catch (n) {
    var GLOBAL_VAR = this,
        ct = (new Date).getTime();
    GLOBAL_VAR["Moat#ETS"] || (GLOBAL_VAR["Moat#ETS"] = ct);
    GLOBAL_VAR["Moat#EMC"] || (GLOBAL_VAR["Moat#EMC"] = 0);
    var et = ct - GLOBAL_VAR["Moat#ETS"],
        hourElapsed = 36E5 <= et,
        msg = n.name + " in closure (global): " + n.message + ", stack=" + n.stack;
    if (!hourElapsed && 10 > GLOBAL_VAR["Moat#EMC"]) {
        GLOBAL_VAR["Moat#EMC"]++;
        try {
            var pixelDomain = "px.moatads.com",
                isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                documentReferrer = isDomless ? "" : document.referrer,
                isBeta = !1,
                viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "TURNERDFP1_BETA" : "TURNERDFP1" : AD_VIEW_HASH,
                pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("e2b442bdf4f-clean") + "&iw=" + escape("e59434f") + "&j=" + escape(documentReferrer) +
                "&cs=" + (new Date).getTime();
            if (isDomless) omidNative.sendUrl(pxSrc);
            else {
                var px = new Image(1, 1);
                px.src = pxSrc
            }
        } catch (r) {}
    } else if (hourElapsed) {
        GLOBAL_VAR["Moat#EMC"] = 1;
        GLOBAL_VAR["Moat#ETS"] = ct;
        try {
            pixelDomain = "px.moatads.com", documentReferrer = (isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ? "" : document.referrer, isBeta = !1, viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "TURNERDFP1_BETA" : "TURNERDFP1" : AD_VIEW_HASH, pxSrc = "https://" + pixelDomain +
                "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("e2b442bdf4f-clean") + "&iw=" + escape("e59434f") + "&j=" + escape(documentReferrer) + "&cs=" + (new Date).getTime(), isDomless ? omidNative.sendUrl(pxSrc) : (px = new Image(1, 1), px.src = pxSrc)
        } catch (r) {}
    }
};