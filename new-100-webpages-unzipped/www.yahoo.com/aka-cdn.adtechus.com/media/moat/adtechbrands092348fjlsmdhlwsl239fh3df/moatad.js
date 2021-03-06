/*Copyright (c) 2011, 2018, Oracle and/or its affiliates.  All rights reserved.*/
try {
    (function(x, q) {
        function Ga(a) {
            if (m.b.ac()) return AB_SCAFFOLD.sampling.onReady(function() {
                Ha(a)
            });
            Ha(a)
        }

        function Ha(a) {
            m.m.a.sxaz("trackingReady", {
                callback: Ga
            });
            if (!m.b.ac() || !AB_SCAFFOLD.sampling.tagShouldNotTrack()) {
                ta = t.h;
                t.h++;
                t.i[ta] = !1;
                m.bc.c();
                "undefined" === typeof a && (a = m.w.d && m.w.d(K));
                var l = a && m.u.b(null, a, {}, null, !0);
                l && l.qs && l.qs.d && "string" === typeof l.qs.d && (m.j = l.qs.d.split(":")[0]);
                l = null;
                l = !1;
                if (l = m.b.ac() ? !AB_SCAFFOLD.sampling.isEnabled() : m.d.an().isInApp && !m.d.cr()) delete m.d._sprg,
                    delete m.d._sdrc, ua = !1, m.d.fm = !0, m.d.fk = !0;
                m.h = 32;
                m.i = 3;
                m.b.ac() && (AB_SCAFFOLD.sampling.isActiveSampling() ? m.h = 1 : (delete m.h, delete m.i));
                l && (delete m.h, delete m.i);
                m.h && (ua = !0);
                m.t.l();
                m.d.ay.c || (m.d.ay.c = !0, t.dcsx.ynds(window, "unload", "unload-" + m.d.ay.a, "unloadFn" + m.d.ay.a), t.dcsx.ynds(window, "beforeunload", "unload-" + m.d.ay.a, "beforeunloadFn" + m.d.ay.a));
                t.swde.azsx("unload-" + m.d.ay.a, Ia, {
                    once: !0
                });
                m.m.a.azsx("allLocalAdsKilled", function() {
                    t.swde.sxaz("unload-" + m.d.ay.a, {
                        callback: Ia
                    })
                }, {
                    once: !0
                });
                m.o.e(m.l.f, 100);
                m.b.ag() && m.o.f(ra, 3E5);
                if (m.d.cw() && (m.p.f() || m.p.k())) m.p.o(), m.b.db() && ya && AB_SCAFFOLD.sampling.set({
                    enabled: !1,
                    multiplier: 1,
                    active: !1
                });
                else {
                    "undefined" === typeof a && (a = m.w.d(K));
                    if (m.b.af()) {
                        var l = "number" === typeof m.h,
                            c = 1;
                        ua && (l ? (c = m.b.ab(m.h, m.i), c = c.sample ? c.multiplier : 0) : c = Ma);
                        AB_SCAFFOLD.sampling.set({
                            enabled: ua,
                            multiplier: c,
                            active: l
                        })
                    }
                    l = K.parentNode;
                    "undefined" === typeof a && (a = {});
                    m.v.i(m.d.ay.a, m.d.ba);
                    Na(a, 1E4);
                    m.f.aq(a);
                    m.u.b(17, a);
                    m.aw.c(l, a)
                }
            }
        }

        function Na(a, l) {
            m.d.av.adFindingTimeout =
                m.o.f(function() {
                    a && a.shouldKillTimeout || !1 !== t.i[ta] || (m.u.b(11, a), m.m.a.zaxs("adNotFoundTimeout"), ra())
                }, l)
        }
        var M;
        M = "undefined" === typeof AB_SCAFFOLD ? 0 : AB_SCAFFOLD.type;
        var m = {},
            O = "ADTECHBRANDS1";
        q.floor(q.random() * q.pow(10, 12));
        (function(a) {
            function l(a) {
                return "function" !== typeof a ? function() {
                    return a
                } : a
            }

            function c(a) {
                return {
                    get: function(b, d) {
                        if (b && b._MoatProxySet && "undefined" !== typeof b._MoatProxySet[d]) return b._MoatProxySet[d];
                        if ("string" === typeof d && a)
                            for (var e = 0; e < a.length; e++) {
                                var k = a[e],
                                    c = l(k.func);
                                if (k.exp.constructor === RegExp && k.exp.test(d) || k.exp.constructor === String && k.exp == d) return e = c(b, d), b._MoatProxySet[d] = e
                            }
                        return null
                    },
                    getPrototypeOf: function(a) {
                        return null
                    },
                    set: function(a, b, d) {
                        return a._MoatProxySet[b] = d
                    }
                }
            }

            function f(a, b, d, e) {
                if (!a[b]) {
                    var k;
                    try {
                        k = new Proxy({
                            _MoatProxySet: {
                                _MoatProxyOf: b
                            }
                        }, c(d))
                    } catch (f) {
                        throw f.message = "ES6 proxy not found when proxying " + b, f;
                    }
                    e && (e[b] = k);
                    return k
                }
                return a[b]
            }

            function g(a, b) {
                this.exp = a;
                this.func = b
            }

            function h() {
                return function() {
                    return 0
                }
            }

            function e(a) {
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
            var d = this,
                b = new g(/^get[A-Z]/m, 0);
            new g(/^insert[A-Z]/m, 0);
            new g(/^append[A-Z]/m, 0);
            new g(/erCase$/gm, "");
            var k = new g(/^getElements*[A-Z]/m, function() {
                    return function() {
                        return []
                    }
                }),
                p = new g(/^create[A-Z]/m, h),
                u = new g(/^(?!(MoatSuper|Math|MmJsBridge))[A-Z][a-z].*/m, h);
            new g(/subsc.*_$/m,
                0);
            var n = new g("valueOf", 0),
                r = new g(/^MoatMAK/m, 0),
                z = new g(/.*/m, ""),
                v = new g(/.*/m, 0),
                B = new g(/.*/m, function(a, b) {
                    return d ? d[b] : 0
                });
            a.a.createWindow = function() {
                var e = f(d, "window", [b, r, u, p, n, B], null);
                a.a.a(e) && (e.window = e, e.parent = e, e.top = e, e.Function = Function, e.setTimeout = h(), e.clearTimeout = h(), e.clearInterval = h(), e.setInterval = h(), e.history = []);
                return a.a.b = e
            };
            a.a.navigator = function() {
                return f(d, "navigator", [z], window)
            };
            a.a.document = function() {
                var c = f(d, "document", [k, b], window);
                a.a.a(c) && (c.documentElement =
                    e("HTML"), c.createElement = e, c.defaultView = window, c.body = {
                        appendChild: function(a) {
                            return a
                        },
                        removeChild: function() {}
                    }, c.scripts = []);
                return c
            };
            a.a.location = function() {
                return f(d, "location", [z], window)
            };
            a.a.screen = function() {
                return f(d, "screen", [v], window)
            };
            a.a.c = function(a, b, d, e) {
                e = e || window;
                setTimeout = d ? a.bind(d) : a;
                clearTimeout = d ? b.bind(d) : b;
                a._MoatProxyOf = "setTimeout";
                b._MoatProxyOf = "clearTimeout";
                e.setTimeout = setTimeout;
                e.clearTimeout = clearTimeout
            };
            a.a.d = function(a, b, d, e) {
                e = e || window;
                setInterval =
                    d ? a.bind(d) : a;
                clearInterval = d ? b.bind(d) : b;
                a._MoatProxyOf = "setInterval";
                b._MoatProxyOf = "clearInterval";
                e.setInterval = setInterval;
                e.clearTimeout = clearInterval
            };
            a.a.a = function(a) {
                return a && a._MoatProxyOf
            };
            a.a.e = function(b) {
                return (b = d[b]) && !a.a.a(b)
            };
            a.a.f = !a.a.e("window") && !a.a.e("document");
            a.a.g = function(b) {
                a.a.a(navigator) && (navigator.userAgent = b)
            }
        })(m);
        m.a.f && (this.__moatBPM = m.a, eval("var window = this.__moatBPM.createWindow();var navigator = this.__moatBPM.navigator();var document = this.__moatBPM.document();var location = this.__moatBPM.location();var screen = this.__moatBPM.screen();var setTimeout = window['setTimeout'];var clearTimeout = window['clearTimeout'];var setInterval = window['setInterval'];var clearInterval = window['clearInterval'];"),
            this.__moatBPM = void 0);
        var za, Aa, Ba, ta = 0,
            Ca = {},
            T = {},
            G = {},
            va = [],
            A = {},
            wa = !1,
            Ja = {
                15: "",
                12: "",
                6: "",
                7: ""
            },
            W, Ka = function() {
                for (var a in T) T.hasOwnProperty && T.hasOwnProperty(a) && T[a] && m.b.a(T[a]);
                for (a = 0; a < va.length; a++) m.b.b(va[a]);
                for (var l in G) G.hasOwnProperty && G.hasOwnProperty(l) && G[l] && (m.b.a(G[l].tid), G[l] = !1);
                T = {};
                va = [];
                K = null;
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
            function l(c) {
                return (c = a.b.c.toString.call(c)) && ("[object Array]" ===
                    c || "[object Array Iterator]" === c)
            }
            a.b = {};
            a.b.c = {};
            a.b.d = l;
            a.b.e = function(a) {
                return a && a.document && a.location && a[__ale + rt__] && a[__setInte + rval__]
            };
            a.b.f = function(c) {
                if (null == c || a.b.e(c)) return !1;
                var f = c.length;
                return 1 === c.nodeType && f ? !0 : "string" === typeof c || l(c) || 0 === f || "number" === typeof f && 0 < f && f - 1 in c
            };
            a.b.forEach = function(c, f, g, h) {
                var e, d = typeof c;
                if (c)
                    if ("function" === d)
                        for (e in c) {
                            if ("prototype" != e && "length" != e && "name" != e && (h || !c.hasOwnProperty || c.hasOwnProperty(e)) && (d = f.call(g, c[e], e), "boolean" ===
                                    typeof d && !d)) break
                        } else if ("number" === d)
                            for (e = 0; e < c && (d = f.call(g, c, e), "boolean" !== typeof d || d); e++);
                        else if ("function" === typeof c.every) c.every(function(a, d, e) {
                    a = f.call(g, a, d);
                    return !("boolean" === typeof a && !a)
                });
                else if (a.b.f(c))
                    for (e = 0; e < c.length && (d = f.call(g, c[e], e), "boolean" !== typeof d || d); e++);
                else
                    for (e in c)
                        if (h || c.hasOwnProperty(e))
                            if (d = f.call(g, c[e], e), "boolean" === typeof d && !d) break;
                return c
            };
            a.b.g = function(c) {
                if (!c) return !1;
                var f;
                if (c !== Object(c)) f = c;
                else if (a.b.f(c)) {
                    f = [];
                    for (var g = 0, h =
                            c.length; g < h; g++) f[g] = c[g]
                } else
                    for (g in f = {}, c) f[g] = c[g];
                return f
            };
            a.b.h = function(c, f) {
                if (!c || "function" !== typeof c) return !1;
                var g = !1;
                0 <= String(c).indexOf("[native code]") ? g = !0 : a.d.b || c === Function.prototype.toString || (g = !0);
                g && f && (g = c.toString && c.toString === Function.prototype.toString);
                return g
            };
            a.b.i = function() {
                try {
                    return navigator.userAgent
                } catch (a) {
                    return ""
                }
            };
            a.b.j = function(c) {
                c = c || a.b.i();
                c = /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(c);
                var f = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
                return !(!c && !f)
            };
            a.b.k = function(c) {
                c = c || a.b.i();
                return !!/Android/.exec(c)
            };
            a.b.l = function(c) {
                c = c || a.b.i();
                var f = /Safari|CriOS/i;
                c = /iPhone|iPod|iPad/.exec(c) && !f.exec(c);
                f = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
                return !(!c && !f)
            };
            a.b.m = function(c) {
                c = c || a.b.i();
                return a.b.k(c) ? !!/Version/.exec(c) : !1
            };
            a.b.n = function() {
                if (!navigator) return null;
                var c;
                c = a.b.i();
                return "Microsoft Internet Explorer" == navigator.appName ? parseInt(c.replace(/^.*MSIE (\d+).*$/, "$1"), 10) : "Netscape" ==
                    navigator.appName && (c = c.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(c[1], 10) : null
            };
            a.b.o = function() {
                return null != a.b.n()
            }
        })(m);
        (function(a) {
            function l(a) {
                var d = new RegExp("(^| )" + a + "($| )");
                return function(a) {
                    return a && a.className && a.className.match(d)
                }
            }
            a.b.p = 2500;
            a.b.q = 1E3;
            a.b.r = !1;
            a.b.s = !1;
            a.b.t = function() {
                var e = /Firefox\/(\d+)/.exec(a.b.i());
                return e ? (e = parseInt(e[1], 10), 21 > e && 14 < e) : !1
            }();
            a.b.u = function() {
                var e, d = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                a.d.e || (e = a.b.v(), !e && a.d.f &&
                    (e = a.d.f));
                e || (e = a.d.g.location.hostname);
                var b = a.d.h();
                b && (e = b.sourceUrl);
                return (e = e && e.match && e.match(d)) && e[1] || a.d.g.location.hostname
            };
            a.b.w = function() {
                var e, d, b = !1;
                a.d.e ? (b = !0, e = window.top && window.top.location && window.top.location.href) : (d = a.k.a(), d.parent === window.top ? (e = d.document.referrer, b = !0) : (e = a.b.v(), e || (e = d.document.referrer)));
                return {
                    url: e,
                    isCorrect: b
                }
            };
            a.b.x = function() {
                var e;
                a.d.e ? e = 2 : (e = a.k.a(), e = e.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
                return e
            };
            a.b.v = function() {
                var a =
                    location && location.ancestorOrigins;
                return a ? 0 === a.length ? !1 : a[a.length - 1] : !1
            };
            a.b.y = function() {
                var e, d = a.b.u(),
                    b = d && d.split("."),
                    k = b && b.length;
                3 <= k ? e = "co" === b[k - 2] || "com" === b[k - 2] ? b[k - 3] + "." + b[k - 2] + "." + b[k - 1] : b[k - 2] + "." + b[k - 1] : 2 == k && (e = b[k - 2] + "." + b[k - 1]);
                return e && decodeURIComponent(e) || decodeURIComponent(d)
            };
            a.b.z = function(a) {
                if ("string" !== typeof a) return "";
                var d = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
                d && d[1] && (a = d[1]);
                return a
            };
            a.b.aa = function(a, d) {
                for (var b = [a], k = 1; k <= d; k++) b.push(a + k), b.push(a - k);
                b = b[q.floor(q.random() * b.length)];
                k = q.floor(q.random() * b);
                return {
                    multiplier: b,
                    sample: 0 == k
                }
            };
            a.b.ab = function(e, d) {
                if (a.b.ac()) {
                    var b = AB_SCAFFOLD.sampling.getMultiplier(),
                        k = AB_SCAFFOLD.sampling.inSample();
                    a.b.ad(b, k);
                    return {
                        multiplier: b,
                        sample: k
                    }
                }
                b = a.b.aa(e, d);
                a.b.ad(b.multiplier, b.sample);
                return b
            };
            a.b.ae = function() {
                return a.b.ab(a.h, a.i).sample
            };
            a.b.ad = function(e, d) {
                a.b.ab = function() {
                    return {
                        multiplier: e,
                        sample: d
                    }
                };
                a.b.af() && AB_SCAFFOLD.sampling.set({
                    multiplier: d ? e : 0,
                    isActive: !!a.h
                })
            };
            a.b.ag = function() {
                var e =
                    a.b.n();
                return 5 === e || 6 === e || 7 === e
            };
            a.b.ah = function(e) {
                if (!navigator) return null;
                e = e || a.b.i();
                return e ? (e = e.match(/Edge\/(\d{1,}(.\d{1,})?)/)) ? parseFloat(e[1]) : null : null
            };
            a.b.ai = function(e, d) {
                return -1 !== a.b.indexOf(e, d)
            };
            a.b.aj = function() {
                function a(b) {
                    if (!b) return "";
                    b = b.match(/[\d]+/g);
                    b.length = 3;
                    return b.join(".")
                }
                var d = !1,
                    b = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var k = navigator.plugins["Shockwave Flash"];
                    k && (d = !0, k.description && (b = a(k.description)));
                    navigator.plugins["Shockwave Flash 2.0"] &&
                        (d = !0, b = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)(d = (k = navigator.mimeTypes["application/x-shockwave-flash"]) && k.enabledPlugin && k.enabledPlugin.description) && (b = a(k.enabledPlugin.description));
                else try {
                    k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), d = !0, b = a(k.GetVariable("$version"))
                } catch (c) {
                    try {
                        k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), d = !0, b = "6.0.21"
                    } catch (f) {
                        try {
                            k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), d = !0, b = a(k.GetVariable("$version"))
                        } catch (g) {}
                    }
                }
                return d ?
                    b : "0"
            };
            a.b.getElementsByClassName = function(a, d, b) {
                d = d || "*";
                b = b || document;
                if (b.getElementsByClassName) {
                    var k = [],
                        c = b.getElementsByClassName(a);
                    if ("*" !== d) {
                        a = 0;
                        for (b = c.length; a < b; a++) {
                            var f = c[a];
                            f.tagName === d && k.push(f)
                        }
                        return k
                    }
                    return c
                }
                c = [];
                d = b.getElementsByTagName(d);
                b = l(a);
                f = d.length;
                for (a = 0; a < f; a++) k = d[a], b(k) && c.push(k);
                return c
            };
            a.b.ak = l;
            a.b.al = function(a, d) {
                if (!a || !d) return !1;
                var b = new RegExp("(^| )" + d + "($| )");
                return a.className && a.className.match(b)
            };
            a.b.am = function(a) {
                return new x - a.de
            };
            a.b.an =
                function(a) {
                    return a.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
                };
            a.b.ao = function(e, d, b) {
                if (("undefined" === typeof b || !b) && e && (b = a.b.ap(e), !b)) return;
                if (e && e.nodeType)
                    if ("undefined" === typeof Node) {
                        if (1 != e.nodeType) return
                    } else if (e.nodeType != Node.ELEMENT_NODE) return;
                if (b.getComputedStyle) return b.getComputedStyle(e, "") && b.getComputedStyle(e, "")[d];
                for (b = d.indexOf("-"); - 1 < b;) d = b == d.length - 1 ? d.substr(0, b) : d.substr(0, b) + d.charAt(b + 1).toUpperCase() + d.substr(b + 2), b = d.indexOf("-");
                if (e.currentStyle) return e.currentStyle[d];
                if (e.style) return e.style[d]
            };
            a.b.aq = function(e) {
                if (!e) return !1;
                var d = a.b.ao(e, "background-image");
                d || (d = a.b.ao(e, "backgroundImage"));
                var b;
                d && (b = (b = d.match("url\\((.*)\\)")) && b[1].replace(/\x22/g, ""));
                return b
            };
            a.b.ar = function(e, d, b) {
                if (!e) return [];
                var k = "boolean" === typeof b ? b : !1,
                    c = [e],
                    f = !1;
                a.b.forEach("number" === typeof d ? d : 50, function() {
                    if ((f = a.b.as(e)) && 1 == f.nodeType) e = f, c.push(e);
                    else if (k && f && 9 == f.nodeType)
                        if ((f = a.k.b(e)) && 1 == f.nodeType) e = f, c.push(e);
                        else return !1;
                    else return !1
                });
                return c
            };
            a.b.at = function(e, d) {
                var b = a.b.ar(e);
                return b && -1 !== a.b.indexOf(b, d)
            };
            a.b.as = function(a) {
                return a.parentNode || a.parentElement || !1
            };
            a.b.au = function(e) {
                e = e || a.b.i();
                return !!/iPhone|iPod/.exec(e)
            };
            a.b.av = function(e) {
                e = e || a.b.i();
                return !!/iPad/.exec(e)
            };
            a.b.aw = function() {
                var e = {};
                return function(d) {
                    if ("undefined" !== typeof e[d]) return e[d];
                    e[d] = null;
                    var b = a.f.b([5, 1, 0, 21]),
                        k = a.f.b([19, 48, 34, 45, 45, 30, 43]),
                        c = a.f.b([15, 34, 39, 45, 30, 43, 30, 44, 45]),
                        f = a.f.b([0, 41, 41, 37,
                            30, 13, 30, 48, 44
                        ]),
                        g = a.f.b([8, 39, 44, 45, 26, 32, 43, 26, 38]),
                        h = a.f.b([24, 30, 37, 41]);
                    a.b.forEach([b, k, c, f, g, h], function(a) {
                        if ((new RegExp(a)).test(d)) return e[d] = a, !1
                    });
                    return e[d]
                }
            }();
            a.b.ax = function() {
                var e;
                return function() {
                    if ("undefined" !== typeof e) return e;
                    e = {
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
                    var d = a.d.g && a.d.g.document,
                        b = (d && d.getElementsByTagName("article")).length;
                    0 < b && (e.results.article = !0,
                        e.meta_data.num_articles = b);
                    var b = a.d.i,
                        k = a.d.g && a.d.g.innerHeight,
                        b = b && k && b / k;
                    1.5 <= b && (e.results.page_height = !0, e.meta_data.page_height_ratio = b);
                    var b = d && d.getElementsByTagName("meta"),
                        c = {
                            "fb:app_id": 1,
                            "og:site_name": 1,
                            "og:type": 1,
                            "fb:page_id": 1,
                            "twitter:account_id": 1,
                            "twitter:site": 1
                        };
                    a.b.forEach(b, function(a) {
                        if ((a = a.getAttribute("property")) && c.hasOwnProperty(a)) return e.results.meta_properties = !0, e.meta_data.meta_property_matches.push(a), !1
                    });
                    d = d && d.getElementsByTagName("link");
                    a.b.forEach(d,
                        function(a) {
                            if ("icon" === a.getAttribute("rel") && /favicon\./.test(a.getAttribute("href"))) return e.results.favicon = !0, !1
                        });
                    return e
                }
            }();
            a.b.ay = function() {
                var e = a.b.ax().results;
                for (prop in e)
                    if (e.hasOwnProperty(prop) && e[prop]) return !0;
                return !1
            };
            a.b.az = function() {
                for (var e = [103, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 46, 110, 101, 116], d = "", b = 0, k = e.length; b < k; b++) d += String.fromCharCode(e[b]);
                return (new RegExp("^[^.]+." + d)).test(a.b.u())
            };
            a.b.ba = function() {
                var e = a.d.g.screen;
                if (a.b.l()) {
                    var d;
                    "undefined" !==
                    typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (d = e.width, e = e.height) : (d = e.height, e = e.width) : d = e = 0;
                    return {
                        w: d,
                        h: e
                    }
                }
                if (a.b.m()) {
                    d = a.d.g.devicePixelRatio;
                    var b = 1;
                    .05 > q.abs(e.width / a.d.g.innerWidth - d) && (b = d);
                    return {
                        w: e.width / b,
                        h: e.height / b
                    }
                }
                return {
                    w: e.width,
                    h: e.height
                }
            };
            a.b.bb = function() {
                var a = null;
                "string" === typeof navigator.doNotTrack ? a = navigator.doNotTrack : "string" === typeof navigator.msDoNotTrack ? a = navigator.msDoNotTrack : "string" === typeof window.doNotTrack && (a = window.doNotTrack);
                return !a || "1" !== a[0] && "yes" !== a ? !1 : !0
            };
            a.b.bc = function() {
                var e;
                return function() {
                    if ("undefined" === typeof e) {
                        var d = a.b.y();
                        if (!d) return !1;
                        var b = [a.f.b([39, 34, 28, 36, 72, 28, 40, 38]), a.f.b([39, 34, 28, 36, 35, 43, 72, 28, 40, 38])];
                        e = a.b.ai(b, d)
                    }
                    return e
                }
            }();
            a.b.getAttribute = function(a, d) {
                return a[d] || a.getAttribute(d)
            };
            var c = [function(a) {
                if (!a || "IFRAME" !== a.nodeName) return !1;
                var d = a.offsetHeight;
                return isNaN(d) || 15 < d || "google_conversion_frame" !== a.name ? !1 : !0
            }];
            a.b.bd = function(e, d) {
                return "undefined" === typeof e ||
                    null === e || !1 === e || !a.b.be(e) || e.nodeName && "IMG" == e.nodeName && !e.complete || a.b.filter(c, function(a) {
                        return a(e)
                    }).length || !0 === e[H] ? !1 : !0
            };
            a.b.bf = function(e, d, b) {
                a.l.a(d);
                !0 === b && d.aa && (d.aa[I] = void 0, d.aa[H] = void 0);
                !d.hasIframeListener && e.tagName && "iframe" === e.tagName.toLowerCase() && (d.hasIframeListener = !0);
                d.components && d.components.splice(0, 1, e);
                d.aa = e;
                a.m.a.zaxs("adElementUpdate");
                a.b.bg(d.aa);
                a.l.b(d);
                d.periscopeManager && d.periscopeManager.rebuildPixelTargets(e, e.parentNode)
            };
            a.b.bh = function(a) {
                return a.replace(/:/g,
                    "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
            };
            a.b.bi = function(e) {
                var d = [];
                a.b.forEach(e, function(b, e) {
                    var c = typeof b;
                    "number" == c ? d.push(a.b.bh(e) + ":" + a.b.bh(b + "")) : "string" == c ? d.push(a.b.bh(e) + ":" + a.b.bh('"' + b + '"')) : "undefined" == c ? d.push(a.b.bh(e) + ":" + a.b.bh("undefined")) : "boolean" == c ? d.push(a.b.bh(e) + ":" + a.b.bh(b ? "true" : "false")) : null === b ? d.push(a.b.bh(e) + ":" + a.b.bh("null")) : "object" != c && "function" != c || !b.toString || d.push(a.b.bh(e) + ":" + a.b.bh('"' + b.toString() + '"'))
                }, null, !0);
                d.sort();
                return "{" +
                    d.join(",") + "}"
            };
            a.b.bj = function(a) {
                var d = {};
                if ("string" != typeof a || "{" != a.charAt(0)) return !1;
                a = a.slice(1, -1).split(",");
                for (var b = 0; b < a.length; b++) {
                    var k = a[b].split(":");
                    k[1] = unescape(k[1]);
                    "true" == k[1] ? k[1] = !0 : "false" == k[1] ? k[1] = !1 : '"' == k[1].charAt(0) ? k[1] = k[1].slice(1, -1) : k[1] = "undefined" == k[1] ? void 0 : "null" == k[1] ? null : "NaN" == k[1] ? NaN : parseFloat(k[1]);
                    d[unescape(k[0])] = k[1]
                }
                return d
            };
            a.b.be = function(e) {
                var d = e.offsetWidth,
                    b = e.offsetHeight;
                if (a.b.r && b < a.b.r || a.b.s && d < a.b.s) return !1;
                a.b.forEach(a.b.ar(e,
                    3), function(a) {
                    var e = a.style && a.style.width,
                        c = a.style && a.style.height;
                    a && a.style && "hidden" == a.style.overflow && ("" != e || "" != c) && (a = parseFloat(e), c = parseFloat(c), d = !isNaN(a) && a < d ? a : d, b = !isNaN(c) && c < b ? c : b)
                });
                (e = a.b.bk(e)) && e.width * e.height < a.b.p && (d = e.width < d ? e.width : d, b = e.height < b ? e.height : b);
                return a.d.j() && .9 > d * b / (a.d.g.innerWidth * a.d.g.innerHeight) ? !1 : d * b >= a.b.p
            };
            var f = {};
            a.b.bk = function(e) {
                if (!e || !e.nodeName || "IMG" == !e.nodeName || !e.complete) return !1;
                var d = e.getAttribute("src");
                if (!d) return !1;
                if (f[d]) return f[d];
                try {
                    if ("undefined" !== typeof e.naturalHeight && "undefined" !== typeof e.naturalWidth) {
                        var b = {
                            width: e.naturalWidth,
                            height: e.naturalHeight
                        };
                        return f[e.src] = b
                    }
                } catch (k) {}
                return a.d.a && (a.d.a.src = d, a.d.a.a) ? (b = {
                    width: parseInt(a.d.a.b),
                    height: parseInt(a.d.a.c)
                }, f[d] = b) : !1
            };
            a.b.bl = function(a, d) {
                var b = !1,
                    k = d.body,
                    c = k && k.firstChild;
                k && c && (k.insertBefore(a, c), b = !0);
                return b
            };
            a.b.bm = function() {
                if (!a.d.k) {
                    var e = a.d,
                        d;
                    a: {
                        for (var b = document.getElementsByTagName("script"), k = b.length - 1; - 1 < k; k--)
                            if ((d = b[k]) && d.src &&
                                d.src.indexOf && (-1 !== d.src.indexOf("adtechbrands092348fjlsmdhlwsl239fh3df/moatad.js") || -1 !== d.src.indexOf("adtechbrands092348fjlsmdhlwsl239fh3df%2Fmoatad.js")) && ("undefined" === typeof d[H] || !0 !== d[H])) {
                                d[H] = !0;
                                break a
                            }
                        d = void 0
                    }
                    e.k = d
                }
                return a.d.k ? (a.d.k[H] = !0, a.d.k) : null
            };
            a.b.bn = function(a, d) {
                for (var b in d) d.hasOwnProperty(b) && (a[b] = d[b])
            };
            a.b.bo = function(a) {
                var d, b = /https:/i;
                if (a) d = b.test(a.src || a.href || "http:") ? "https:" : "http:";
                else try {
                    d = window.location.protocol
                } catch (k) {
                    a = document.createElement("a"),
                        a.href = "", d = a.protocol
                }
                return "https:" === d ? "https:" : "http:"
            };
            a.b.bp = function(a) {
                try {
                    return -1 !== (a.src || a.getAttribute("src")).indexOf("psd=1")
                } catch (d) {
                    return !1
                }
            };
            a.b.bq = function(a) {
                for (var d = [], b = 0; b < a.length; b++) d.push(a[b]);
                return d
            };
            a.b.nextElementSibling = function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (; a = a.nextSibling;)
                    if (1 === a.nodeType) return a
            };
            a.b.previousElementSibling = function(a) {
                if (a) {
                    if (a.previousElementSibling) return a.previousElementSibling;
                    for (var d = 0;
                        (a = a.previousSibling) &&
                        1E3 > d;)
                        if (d++, a && 1 === a.nodeType) return a
                }
            };
            a.b.br = function(a, d, b) {
                "undefined" !== typeof b && (a[d] = b)
            };
            a.b.bs = function(e) {
                return a.b.d(e) ? 0 === e.length : !0
            };
            a.b.filter = function(a, d) {
                for (var b = [], k = 0; k < a.length; k++) d(a[k]) && b.push(a[k]);
                return b
            };
            a.b.bt = function(a, d) {
                for (var b = [], k = 0; k < d.length; k++) b.push(a(d[k]));
                return b
            };
            a.b.reduce = function(e, d, b) {
                if (!a.b.f(e) || "function" !== typeof d) return !1;
                b = b ? d(b, e[0]) : e[0];
                for (var k = 1; k < e.length; k++) b = d(b, e[k]);
                return b
            };
            a.b.indexOf = function(e, d) {
                if (!e) return -1;
                if (a.b.d(e)) {
                    for (var b = 0, k = e.length; b < k; b++)
                        if (e[b] === d) return b;
                    return -1
                }
                return "string" === typeof e ? d || "string" !== typeof d ? e.indexOf(d) : -1 : -1
            };
            a.b.lastIndexOf = function(e, d) {
                if (!e) return -1;
                if (a.b.d(e)) {
                    for (var b = e.length - 1; 0 <= b; b--)
                        if (e[b] === d) return b;
                    return -1
                }
                return "string" === typeof e ? "" === d ? -1 : e.lastIndexOf(d) : -1
            };
            a.b.bu = function(a, d) {
                if (a && d && d.childNodes) {
                    var b = d.childNodes;
                    0 < b.length ? d.insertBefore(a, b[0]) : d.appendChild(a)
                }
            };
            a.b.bv = function(e, d) {
                if (!e || !d) return !1;
                var b = a.b.bw(d);
                if (!b) return !1;
                if (a.b.hasChildNodes(b)) {
                    var k = b.childNodes[q.max(0, b.childNodes.length - 1)] || null;
                    b.insertBefore(e, k)
                } else b.appendChild(e);
                return b
            };
            a.b.bx = function(e, d, b) {
                if ("string" != typeof e || !d || !document) return !1;
                b = b || document.createElement("script");
                b.type = "text/javascript";
                d = a.b.bv(b, d);
                if (!d) return !1;
                b.src = e;
                return d
            };
            a.b.hasChildNodes = function(a) {
                return a && a.childNodes && 0 < a.childNodes.length
            };
            a.b.bw = function(e) {
                if (!e) return !1;
                if ("OBJECT" !== e.nodeName && "EMBED" !== e.nodeName) return e;
                e = a.b.ar(e);
                var d = !1;
                a.b.forEach(e, function(a) {
                    if (a && "OBJECT" !== a.nodeName && "EMBED" !== a.nodeName) return d = a, !1
                });
                return d
            };
            a.b.by = function(a, d) {
                if ("undefined" === typeof a) return !1;
                for (var b = 0, k = d.length; b < k; b++)
                    if ("string" == typeof d[b]) {
                        try {
                            a = a[d[b]]
                        } catch (c) {}
                        if ("undefined" === typeof a) return !1
                    }
                return a
            };
            a.b.bz = function(a) {
                return A && "undefined" !== typeof a && A[a] ? A[a] : !1
            };
            a.b.ca = function(e) {
                if (!e || "object" !== typeof e || "number" !== typeof e.zr) return !1;
                var d = a.b.bz(e.zr);
                return d && d === e
            };
            a.b.cb = function(e, d) {
                for (var b = a.b.ar(e,
                        50, !0), k = 0; k < b.length; k++)
                    if (b[k] === d) return !0;
                return !1
            };
            a.b.cc = function(e) {
                if (!e || !e.aa) return !1;
                if ("number" !== typeof e.ADAREA) {
                    var d, b;
                    if (e.isCompositeAd && e.components && 1 < e.components.length)
                        for (d = e.ADAREA = 0; d < e.components.length; d++) e.ADAREA += e.components[d].offsetWidth * e.components[d].offsetHeight;
                    else e.elementRect ? (d = e.elementRect.right - e.elementRect.left, b = e.elementRect.bottom - e.elementRect.top, e.ADAREA = d * b) : e.ADAREA = e.aa.offsetWidth * e.aa.offsetHeight;
                    a.n.a() && a.n.realEstateMeasurements && (d =
                        a.n.realEstateMeasurements.w, b = a.n.realEstateMeasurements.h, e.ADAREA = d * b)
                }
                return e.ADAREA
            };
            a.b.bg = function(e) {
                if (!(!e || e && e.CLIPCHECKINGTARGET)) {
                    var d = a.b.ar(e, 3),
                        b;
                    d && 0 < d.length && (a.b.forEach(d, function(a) {
                        if (a && a.style && a.style.clip) return b = a, !1
                    }), !b && e.style && e.style.clip && (b = e), b && (e.CLIPCHECKINGTARGET = b))
                }
            };
            var g = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            a.b.cd = function(e) {
                e = e.match(g);
                var d = !1;
                e && (e = a.b.bt(function(a) {
                    return parseInt(a, 10)
                }, e), d = {
                    top: e[1],
                    right: e[2],
                    bottom: e[3],
                    left: e[4]
                });
                return d
            };
            a.b.ce = function() {
                var a = function() {
                    var a = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0,
                        b = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                    return a || b ? !document.elementFromPoint(a, b) : !0
                }();
                return function(d, b, k) {
                    if (!a) {
                        var c = k.defaultView || k.parentWindow || window;
                        d += c.pageXOffset;
                        b += c.pageYOffset
                    }
                    return k.elementFromPoint(d, b)
                }
            }();
            a.b.cf = function(a, d) {
                return Object.prototype.hasOwnProperty.call(a, d)
            };
            a.b.cg = function(e) {
                if (!e || !e.style || !e.style.filter) return !1;
                e =
                    e.style.filter.split(" ");
                var d = !1,
                    b;
                a.b.forEach(e, function(a) {
                    var e = a.match(/\d+/);
                    a.search(/opacity/) && e && 0 < e.length && (b = parseFloat(e.join("")), !1 === d || b < d) && (d = b)
                });
                return d
            };
            a.b.ch = function(e, d) {
                var b;
                if (!e) return 100;
                if (d && e.style && "hidden" === e.style.visibility) return 0;
                b = e.style && e.style.opacity ? parseFloat(e.style.opacity) : a.b.cg(e);
                return a.b.ci(b) ? b : 100
            };
            a.b.cj = function(a) {
                return a.backgroundColor ? (a = a.backgroundColor, "transparent" === a ? 0 : -1 !== a.indexOf("rgb") ? 4 > a.split(",").length ? 1 : parseFloat(a.split(",")[3].split(")")[0]) :
                    1) : -1
            };
            a.b.ck = function(e, d) {
                var b = -1;
                if (a.d.g.getComputedStyle) {
                    var k = a.d.g.getComputedStyle(e);
                    if (!k) return b;
                    if (d && "hidden" === k.visibility || "collapse" === k.visibility || d && 0 === a.b.cj(k)) return 0;
                    b = parseFloat(k.opacity)
                }
                return b
            };
            a.b.cl = function(e, d, b) {
                if (!e || !e.aa) return !1;
                "undefined" === typeof e.parentNodeTree && (e.parentNodeTree = a.b.ar(e.aa.parentElement, 50, !0), d && e.parentNodeTree.push(e.aa));
                var k = 100,
                    c, f;
                a.b.forEach(e.parentNodeTree, function(d) {
                    c = a.b.ch(d, b);
                    0 === c && (f = a.b.ck(d, b), a.b.ci(f) && f >=
                        c && (c = f));
                    c < k && (k = c);
                    if (0 === k) return !1
                });
                return k
            };
            a.b.cm = function(a, d, b) {
                return function() {
                    d.apply(b || null, a.concat(a.slice.call(arguments)))
                }
            };
            a.b.ap = function(a) {
                try {
                    var d = a && a.ownerDocument;
                    return d && (d.defaultView || d.parentWindow)
                } catch (b) {
                    return !1
                }
            };
            a.b.cn = function(e, d, b) {
                if (!e || !d) return !1;
                var k = [];
                "number" !== typeof b && (b = 50);
                for (var c = 0; c < b; c++)
                    if (d != d.parent) {
                        if (e = a.k.b(e, d)) k.push(e);
                        else break;
                        d = d.parent
                    } else break;
                return k
            };
            a.b.co = function(a) {
                a = q.max(4, a);
                return ((1 + q.random()) * q.pow(16,
                    a) | 0).toString(16).substring(0, a)
            };
            a.b.cp = function() {
                var e = a.b.co;
                return e(4) + "-" + e(4) + "-" + e(4) + "-" + e(4)
            };
            a.b.a = function(a) {
                window && window.clearTimeout && window.clearTimeout(a)
            };
            a.b.b = function(a) {
                window && window.clearInterval && window.clearInterval(a)
            };
            var h = function(e, d) {
                if (a.b.h(d.toString)) return d.toString();
                if (a.b.h(e && e.Function.prototype.toString)) return d.toString = e.Function.prototype.toString, d.toString();
                var b = a.d.g !== e && a.d.g && a.d.g.Function.prototype.toString;
                if (a.b.h(b)) return d.toString =
                    b, d.toString();
                if (a.d.l && 8 >= a.b.n()) return d.toString();
                var b = e || window,
                    k = b.document.createElement("IFRAME");
                k.style.display = "none";
                k.style.width = "0px";
                k.style.height = "0px";
                k.width = "0";
                k.height = "0";
                a.b.bv(k, b.document.documentElement);
                k.contentWindow && (d.toString = k.contentWindow.Function.prototype.toString);
                var c = d.toString();
                b.document.documentElement.removeChild(k);
                return c
            };
            a.b.toString = function(e, d) {
                d = d || a.d.g;
                var b;
                try {
                    b = h(d, e)
                } catch (k) {
                    b = e.toString()
                }
                return b
            };
            a.b.cq = function(e, d, b) {
                e = a.b.toString(e,
                    b);
                if (a.d.m()) b.eval("(" + e + ")(" + d + ")");
                else if (a.d.n(b))(new b.Function("(" + e + ")(" + d + ")"))();
                else {
                    var k = b.document.createElement("script");
                    k.type = "text/javascript";
                    k.text = "(" + e + ")(" + d + ")";
                    a.b.bv(k, b.document.body)
                }
            };
            a.b.cr = function(e, d, b, k) {
                function c(a, b) {
                    try {
                        return k(b[a])
                    } catch (d) {}
                }
                var f, g;
                if ("string" !== typeof e) return !1;
                "function" !== typeof k && (k = function(a) {
                    return a
                });
                f = window;
                g = c(e, f);
                if (!g) {
                    d = a.k.c(f, "number" === typeof d ? d : 20);
                    if (!d) return !1;
                    for (var h = 0, z = d.length; h < z && (f = d[h], g = c(e, f), "undefined" ===
                            typeof g); h++);
                }
                return b ? [g, f] : g
            };
            a.b.cs = function(a, d) {
                var b = a.toString();
                d && (b = "(" + b + "(" + d + "))");
                return "(function(){try{return(" + b + ")()}catch(e){return false}})()"
            };
            a.b.ct = function() {
                if (!a.d.o) return !1;
                var e = a.b.i(),
                    d = e && "string" === typeof e,
                    b = /Version\/(\d*)/,
                    k = /CPU.*OS\s(\d*)_/,
                    b = (b = d && e.match(b)) && 1 < b.length ? parseInt(b[1], 10) : !1;
                "number" !== typeof b && (b = (b = d && e.match(k)) && 1 < b.length ? parseInt(b[1], 10) : !1);
                return b
            };
            a.b.cu = function(a) {
                if ("object" === typeof a) {
                    if (Object.keys) return Object.keys(a);
                    var d = [],
                        b;
                    for (b in a) d.push(b);
                    return d
                }
            };
            a.b.every = function(a, d) {
                if ("object" !== typeof a || !a || "function" !== typeof d) return !1;
                var b = !0,
                    k;
                for (k in a)
                    if (a.hasOwnProperty(k) && (b = d(a[k]), !1 === b || "boolean" !== typeof b)) break;
                return b
            };
            a.b.cv = function(a, d) {
                d = d || {
                    width: "1px",
                    height: "1px",
                    style: {
                        left: "-9999px",
                        top: "-9999px",
                        position: "absolute"
                    }
                };
                for (var b in d)
                    if (d.hasOwnProperty(b))
                        if ("style" === b)
                            if ("string" === typeof d[b]) a.setAttribute(b, d[b]);
                            else
                                for (var k in d[b]) d[b].hasOwnProperty(k) && (a[b][k] = d[b][k]);
                else a[b] =
                    d[b]
            };
            a.b.some = function(a, d) {
                if ("object" !== typeof a || !a || "function" !== typeof d) return !1;
                for (var b in a)
                    if (a.hasOwnProperty(b)) {
                        var k = d(a[b]);
                        if ("boolean" !== typeof k) break;
                        if (k) return !0
                    }
                return !1
            };
            a.b.cw = function(a) {
                return void 0 === a || null === a || !1 === a || "" === a ? !0 : !1
            };
            a.b.cx = function(e, d, b) {
                return a.b.ci(e) && a.b.ci(d) && a.b.ci(b) ? q.abs(e - d) <= b : !1
            };
            a.b.ci = function(a) {
                return "number" === typeof a && !isNaN(a)
            };
            a.b.cy = function(e, d) {
                if (!a.b.d(d)) return !1;
                var b = 0;
                a.b.forEach(d, function(a) {
                    a === e && b++
                });
                return b
            };
            a.b.cz = function(a) {
                return "string" !== typeof a ? !1 : /^(?:https?:\/\/)?[^.:\/]+(?:\.[^.:\/]+)/.test(a)
            };
            a.b.da = function(e, d) {
                if ("string" !== typeof e || "string" !== typeof d) return e;
                if (!e.match(d)) {
                    var b = e.lastIndexOf("_BETA");
                    a.b.ac() && 0 < b && (e = e.slice(0, b), d += "_BETA");
                    e += d
                }
                return e
            };
            a.b.db = function() {
                return "undefined" === typeof AB_SCAFFOLD ? !1 : 0 !== M
            };
            a.b.af = function() {
                return a.b.db() && 1 === M
            };
            a.b.ac = function() {
                return a.b.db() && 2 === M
            };
            a.b.dc = function() {
                return "undefined" !== typeof M && 2 === M
            };
            a.b.dd = function() {
                return "undefined" ===
                    typeof AB_SCAFFOLD ? !0 : 1 === M || 0 === M
            }
        })(m);
        (function(a) {
            a.k = {};
            a.k.d = function(a) {
                try {
                    var c = typeof a.location.toString;
                    if ("undefined" === c || "unknown" === c) return !0;
                    var f = typeof a.document;
                    if ("undefined" === f || "unknown" === f) return !0;
                    var g = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
                    return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !== typeof g ? !0 : !1
                } catch (h) {
                    return !0
                }
            }
        })(m);
        (function(a) {
            a.k.e = function(l) {
                if (!l) return null;
                try {
                    if (l.moatHostileIframe) return null;
                    var c = l.getAttribute("src");
                    if (c && c.slice && "http" === c.slice(0, 4) && a.b.an(c) != a.b.an(Z.location.toString())) return l.moatHostileIframe = !0, null;
                    var f = l && (l.contentDocument || l.contentWindow && l.contentWindow.document);
                    if (f && "string" === typeof f.location.toString()) return f;
                    l.moatHostileIframe = !0;
                    return null
                } catch (g) {
                    return l.moatHostileIframe = !0, null
                }
            };
            a.k.b = function(l, c) {
                c = c || a.b.ap(l);
                try {
                    return c && c.frameElement
                } catch (f) {
                    return !1
                }
            };
            a.k.f = function(l, c) {
                var f;
                a.b.forEach(l.getElementsByTagName("iframe"),
                    function(a) {
                        if (a && a.contentWindow && a.contentWindow == c) return f = a, !1
                    });
                return f
            };
            a.k.g = function(l) {
                if (l = a.k.b(l)) try {
                    return l.parentNode
                } catch (c) {}
                return null
            };
            a.k.h = function(l, c) {
                if (!l) return !1;
                var f = 0,
                    g = [];
                for (c = c || 10; f < c;)
                    if (f++, l = a.k.b(l)) g.push(l);
                    else return g
            };
            a.k.c = function(l, c) {
                if (!l) return !1;
                var f = 0,
                    g = [l],
                    h;
                for (c = c || 10; f < c;) {
                    f++;
                    try {
                        if (l = (h = l.frameElement) && a.b.ap(h), h && l && !a.k.d(l)) g.push(l);
                        else return g
                    } catch (e) {
                        break
                    }
                }
                return g
            };
            a.k.i = function(l, c, f) {
                function g(c, e, d) {
                    var b = [];
                    c && b.push(c);
                    d = d || 0;
                    if (10 < d || !c || !c.frames) return b;
                    var k;
                    try {
                        k = isNaN(c.frames.length) ? 100 : c.frames.length
                    } catch (f) {
                        k = 100
                    }
                    for (var p = 0; p < k; p++) try {
                        try {
                            if (void 0 == c.frames[p]) break
                        } catch (f) {
                            break
                        }
                        e && !a.k.j(c.frames[p]) ? b.push(c.frames[p]) : b = b.concat(g(c.frames[p], e, d + 1))
                    } catch (f) {
                        break
                    }
                    return b
                }
                return g(l, c, f)
            };
            a.k.k = function(a, c) {
                c = "number" == typeof c && 0 < c ? c : 15;
                var f = [],
                    g;
                try {
                    if (a) {
                        g = a.top;
                        for (var h = 0; h < c; h++)
                            if ((a = a.parent) && a != a.top) f.push(a);
                            else break;
                        f.push(g)
                    }
                } catch (e) {
                    return []
                }
                return f
            };
            a.k.l = [];
            a.k.j = function(l) {
                for (var c,
                        f = 0, g = a.k.l.length; f < g; f++) a.k.l[f].win == l && (c = a.k.l[f]);
                if (!c) {
                    c = {
                        win: l,
                        friendly: !1
                    };
                    try {
                        l.document && (c.friendly = !0)
                    } catch (h) {}
                }
                return c.friendly
            };
            a.k.m = function(l, c, f) {
                l = a.k.c(l).pop();
                l = a.k.i(l, !0);
                for (var g = 0, h = l.length; g < h; g++)
                    if (l[g] == c) {
                        if (f && c.parent && a.k.d(c.parent)) break;
                        return !0
                    }
                return !1
            };
            a.k.a = function() {
                if (a.d.e) return window.top;
                for (var l = 0, c = window; 50 > l;) {
                    l++;
                    if (c === window.top || a.k.d(c.parent)) break;
                    c = c.parent
                }
                return c
            }
        })(m);
        (function(a) {
            function l(a) {
                return function() {
                    var c = !1;
                    return function(h) {
                        try {
                            return a &&
                                a.apply ? a.apply(null, arguments) : a(h)
                        } catch (z) {
                            if (!c) {
                                c = !0;
                                var e = (new x).getTime();
                                this["Moat#ETS"] || (this["Moat#ETS"] = e);
                                this["Moat#EMC"] || (this["Moat#EMC"] = 0);
                                var d = 36E5 <= e - this["Moat#ETS"],
                                    b = "";
                                try {
                                    b = a.toString()
                                } catch (v) {
                                    b = "failed"
                                }
                                b = z.name + " in closure (cb): " + z.message + ", stack=" + z.stack + ", \ncb=" + b + "\n";
                                if (!d && 10 > this["Moat#EMC"]) {
                                    this["Moat#EMC"]++;
                                    try {
                                        var k = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                                            p = k ? "" : document.referrer,
                                            u = "undefined" === typeof O ?
                                            "ADTECHBRANDS1" : O,
                                            n = "https://apx.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(u) + "&ac=1&k=" + escape(b) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(p) + "&cs=" + (new x).getTime();
                                        if (k) omidNative.sendUrl(n);
                                        else {
                                            var r = new Image(1, 1);
                                            r.src = n
                                        }
                                    } catch (v) {}
                                } else if (d) {
                                    this["Moat#EMC"] = 1;
                                    this["Moat#ETS"] = e;
                                    try {
                                        p = (k = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ? "" : document.referrer, u = "undefined" === typeof O ? "ADTECHBRANDS1" : O, n = "https://apx.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                                            escape(u) + "&ac=1&k=" + escape(b) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(p) + "&cs=" + (new x).getTime(), k ? omidNative.sendUrl(n) : (r = new Image(1, 1), r.src = n)
                                    } catch (v) {}
                                }
                            }
                        }
                    }
                }()
            }
            a.o = {};
            var c = {};
            a.o.a = c;
            a.o.b = function(c, g) {
                if (!c || "string" !== typeof g || !c[g] || c == window) return !1;
                if ("string" === typeof c.nodeName && ("OBJECT" === c.nodeName || "EMBED" === c.nodeName)) {
                    var h = a && a.c && a.c[g];
                    if (h && h !== c[g]) return h
                }
                return !1
            };
            a.o.c = function(f, g, h, e) {
                var d, b, k = !1;
                "touchstart" === g && a.d.p && (k = {
                    passive: !0
                });
                e ? c[g + e] ? h = c[g +
                    e] : (h = l(h), c[g + e] = h) : h = l(h);
                if (f.addEventListener) e = "addEventListener", d = "";
                else if (f.attachEvent) e = "attachEvent", d = "on";
                else return !1;
                if (b = a.o.b(f, e)) try {
                    b.call(f, d + g, h, k)
                } catch (p) {
                    f[e](d + g, h, k)
                } else if (f && e && f[e]) try {
                    f[e](d + g, h, k)
                } catch (p) {
                    return !1
                }
            };
            a.o.d = function(f, g, h, e) {
                var d, b;
                h = e ? c[g + e] : h;
                delete c[g + e];
                if (!f) return !1;
                if (f.removeEventListener) e = "removeEventListener", d = "";
                else if (f.detachEvent) e = "detachEvent", d = "on";
                else return !1;
                if (b = a.o.b(f, e)) try {
                    b.call(f, d + g, h, !1)
                } catch (k) {
                    f[e](d + g, h, !1)
                } else try {
                    f[e](d +
                        g, h, !1)
                } catch (k) {}
            };
            a.o.e = function(c, g) {
                c = l(c);
                var h;
                window && window.setInterval && (h = window.setInterval(c, g), 1 == h && (a.b.b(h), h = window.setInterval(c, g)), va.push(h));
                return h
            };
            a.o.f = function(c, g) {
                var h, e = l(function(a) {
                    delete T[h];
                    return c && c.apply ? c.apply(null, arguments) : c(a)
                });
                window && window.setTimeout && (h = window.setTimeout(e, g), 1 == h && (a.b.a(h), h = window.setTimeout(e, g)), T[h] = !0);
                return h
            };
            a.o.g = function(c, g, h, e) {
                if (!e) return !1;
                e += "";
                G[e] && a.b.a(G[e].tid);
                G[e] = {};
                G[e].callback = l(c);
                G[e].params = g;
                G[e].interval =
                    h;
                G[e].tid = a.o.f(a.o.h(e), h);
                callbacks = null
            };
            a.o.h = function(c) {
                return function() {
                    if (!G || !G[c]) return !1;
                    var g = G[c].callback(G[c].params);
                    if ("boolean" === typeof g && !1 === g) return a.b.a(G[c].tid), G[c] = !1;
                    G[c].tid = a.o.f(a.o.h(c), G[c].interval);
                    time = c = null
                }
            };
            a.o.i = function(c) {
                G[c] && (a.b.a(G[c].tid), G[c] = !1)
            };
            a.o.j = function() {
                return G
            };
            a.o.k = function(c, g, h, e) {
                var d = 0,
                    b = function() {
                        d += 1;
                        !0 !== c() && (d < g ? a.o.f(b, h) : "function" === typeof e && e())
                    };
                b()
            };
            a.o.l = l
        })(m);
        (function(a) {
            function l() {
                if ("number" === typeof a.b.ah()) return !1;
                var c = a.b.i();
                return (c = c && c.match(/Chrom(e|ium)\/([0-9]+)\./)) ? parseInt(c[2], 10) : !1
            }
            a.d = {};
            var c = a.k.d(window.parent);
            a.d.q = window != window.parent;
            a.d.r = a.d.q && !c;
            a.d.e = c ? !1 : !a.k.d(window.top);
            a.d.g = a.d.e ? window.top : a.d.r ? window.parent : window;
            a.d.s = function(a) {
                var c, h, e, d = 0,
                    b = 0;
                try {
                    c = a.document;
                    h = c.documentElement;
                    e = c.body;
                    var k = document.getElementById("mianahwvc");
                    if (k) return k.getBoundingClientRect();
                    "undefined" !== typeof a.innerWidth ? (d = a.innerWidth, b = a.innerHeight) : "CSS1Compat" === c.compatMode &&
                        5 !== c.documentMode || !e || "undefined" === typeof e.clientWidth ? h && "undefined" !== typeof h.clientWidth && (d = h.clientWidth, b = h.clientHeight) : (d = e.clientWidth, b = e.clientHeight)
                } catch (p) {}
                return {
                    width: d,
                    height: b,
                    left: 0,
                    right: d,
                    top: 0,
                    bottom: b
                }
            };
            a.d.t = function() {
                var c = a.p && a.p.a();
                if (c) return c;
                if (!a.d.g || !a.d.g.screen) return null;
                c = a.d.g.screen;
                return {
                    width: c.width,
                    height: c.height,
                    availWidth: c.availWidth,
                    availHeight: c.availHeight
                }
            };
            a.d.u = function() {
                var c = a.d.g;
                if (!c) return !1;
                try {
                    var g = c.document && c.document.body,
                        h = c.document && c.document.documentElement
                } catch (d) {}
                try {
                    var e = a.d.t();
                    e && (a.d.v = e.availWidth, a.d.w = e.availHeight, a.d.x = e.width, a.d.y = e.height)
                } catch (d) {
                    a.d.v = a.d.v || 0, a.d.w = a.d.w || 0, a.d.x = a.d.x || 0, a.d.y = a.d.y || 0
                }
                e = a.d.s(c);
                a.d.z = e.width;
                a.d.aa = e.height;
                try {
                    a.d.ab = c.outerWidth || c.document && c.document.body && c.document.body.offsetWidth || 0, a.d.ac = c.outerHeight || c.document && c.document.body && c.document.body.offsetHeight || 0
                } catch (d) {
                    a.d.ab = 0, a.d.ac = 0
                }
                g && h && (a.d.i = q.max(g.scrollHeight, g.offsetHeight, h.clientHeight,
                    h.scrollHeight, h.offsetHeight), a.d.ad = g.scrollTop || h.scrollTop || c.pageYOffset || 0)
            };
            a.d.u();
            a.d.b = 0 <= String(Function.prototype.toString).indexOf("[native code]");
            a.d.ae = -1 !== a.b.i().toLowerCase().indexOf("firefox");
            a.d.l = a.b.o();
            a.d.af = !!window.chrome && a.b.h(window.chrome.csi, !0);
            a.d.ag = !!("opr" in window && "addons" in window.opr && a.b.h(window.DetachedViewControlEvent));
            a.d.ah = !a.d.af && Error.propertyIsEnumerable("captureStackTrace") && void 0 !== window.onorientationchange;
            a.d.ai = a.d.ag || a.d.ah;
            a.d.aj = a.d.af &&
                (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore);
            a.d.ak = a.d.af && !a.d.ai && void 0 !== window.onorientationchange;
            a.d.al = a.d.aj || a.d.ak;
            a.d.am = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
            a.d.o = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || window.HTMLVideoElement && window.HTMLVideoElement.prototype && "webkitWirelessVideoPlaybackDisabled" in
                window.HTMLVideoElement.prototype;
            a.d.an = function() {
                var c;
                return function() {
                    if ("undefined" !== typeof c) return c;
                    c = {
                        isInApp: 0,
                        env: "Not app"
                    };
                    a.b.l() ? (c.isInApp = 1, c.env = "iOS") : a.b.m() && (c.isInApp = 1, c.env = "Android");
                    return c
                }
            }();
            a.d.ao = l;
            a.d.ap = a.d.aj && 40 <= l();
            a.d.aq = function() {
                if (!a.d.ap) return !1;
                var c = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                if (navigator && navigator[c]) return !0;
                if (66 > l()) {
                    var c = a.f.b([28, 33, 43, 40, 38, 30]),
                        g = a.f.b([43, 46, 39, 45, 34, 38, 30]),
                        h = a.f.b([28, 40, 39, 39, 30, 28, 45]);
                    return "undefined" !==
                        typeof window[c] && !(window[c] && window[c][g] && window[c][g][h])
                }
                return !1
            };
            a.d.ar = function() {
                if (a.f.c !== a.f.d.toString()) return !1;
                var c = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                return window && window.navigator && window.navigator[c]
            };
            a.d.as = function() {
                if (a.f.c !== a.f.e.toString()) return !1;
                var c = a.f.b([26, 37, 30, 43, 45]),
                    g = a.f.b([28, 40, 39, 31, 34, 43, 38]),
                    h = a.f.b([41, 43, 40, 38, 41, 45]);
                return !a.d.an().isInApp && a.d.o && a.d.b && !a.b.h(window[c], !0) && !a.b.h(window[g], !0) && !a.b.h(window[h], !0)
            }
        })(m);
        (function(a) {
            function l(a) {
                return a.omid_v1_present ||
                    a.omid
            }

            function c(b, d) {
                if (a.d.d() && a.d.bl || !d && !a.d.an().isInApp) return !1;
                var c = k;
                return (k = c = c && c[0] ? c : a.b.cr("mraid", 20, !0)) ? b ? c : c[0] : !1
            }

            function f(a) {
                return a && a.getVendor && "function" === typeof a.getVendor && a.getVendor()
            }

            function g(a) {
                return a && a.getVendorVersion && "function" === typeof a.getVendorVersion && a.getVendorVersion() + ""
            }

            function h(b, d) {
                b.qmrv(function(b) {
                    d.preventTryFindingAdAgain = !0;
                    a.t.a(d);
                    a.s.c(d)
                }, d.MMAK_ID)
            }

            function e(b, d) {
                a.s.a() && b.hgen && b.hgen(function(b) {
                    b = "click" !== b ? 23 : 3;
                    d && (d.dm ||
                        (d.counters && d.counters.strictDwell && d.counters.strictDwell.tCur && (d.cb = d.counters.strictDwell.tCur), d.dm = 1), data = {}, data.e = b, data.q = d.aq[b]++, a.u.a(d, data))
                }, d.MMAK_ID)
            }

            function d() {
                var b = a.d.bd,
                    d = 53 <= a.d.ao();
                return d ? d : b && -1 < b.search("Spotify")
            }
            a.d.at = "26";
            a.b.dc() && (a.d.at += "_beta");
            a.d.au = "MoatSuperV";
            a.d.av = {};
            a.d._sdrc = 32;
            a.d.aw = a.d.au + a.d.at;
            a.d.ax = 0;
            a.d.ay = window && window["Moat#G" + a.d.at] || {};
            a.d.az = "Moat#G" + a.d.at;
            window[a.d.az] = a.d.ay;
            a.d.ay.a || (a.d.ay.a = q.floor(q.random() * q.pow(10, 12)));
            a.d.ba = q.floor(q.random() * q.pow(10, 12));
            var b = a.b.w();
            a.d.bb = b.url;
            a.d.bc = b.isCorrect;
            b = a.o.l(function() {
                return navigator.userAgent
            });
            a.d.bd = b();
            "string" !== typeof a.d.bd && (a.d.bd = "");
            a.d.c = function() {
                return a.a.f
            };
            a.d.be = function() {
                var b;
                !a.d.c() || "undefined" === typeof omidNative || "function" !== typeof omidNative.setInterval && "function" !== typeof omidNative.clearInterval && "function" !== typeof omidNative.setTimeout && "function" !== typeof omidNative.clearTimeout && "function" !== typeof omidNative.downloadJavaScriptResource &&
                    "function" !== typeof omidNative.sendUrl || (b = omidNative);
                return function() {
                    return b
                }
            }();
            a.d.d = function() {
                var b = !1;
                if ("undefined" !== typeof a.d.be()) b = !0;
                else try {
                    b = !!l(a.d.g.top.frames)
                } catch (d) {
                    b = !1
                }
                return function() {
                    return b
                }
            }();
            a.d.bf = function() {
                var b;
                return function(d) {
                    b || (b = {}, a.p.b(b));
                    return b[d]
                }
            }();
            a.d.bg = (new x).getTime();
            a.d.bh = !0;
            a.d.bi = !1;
            a.d.bj = !1;
            a.d.bk = function(a, b) {
                a = a.split(".");
                b = b.split(".");
                for (var d = 0; 3 > d; d++) {
                    var c = parseInt(a[d]),
                        k = parseInt(b[d]);
                    if (c && isNaN(k)) return 1;
                    if (k &&
                        isNaN(c)) return 0;
                    if (c > k) return 1;
                    if (k > c) return 0
                }
                return 2
            };
            var k, p = !1;
            a.d.bm = c;
            a.d.bn = function() {
                return !!c()
            };
            a.d.bo = function() {
                var a = c(!0);
                return a && a[1]
            };
            a.d.bp = function() {
                if (!a.d.an().isInApp) return !1;
                var b = c(),
                    d;
                if (d = b)
                    if (b)
                        if (p) d = !0;
                        else {
                            d = "";
                            a.b.l() ? d = "ios" : a.b.m() && (d = "android");
                            var k = {
                                AdMarvel: {
                                    ios: "340",
                                    android: "270"
                                },
                                AdColony: {
                                    ios: "3.0",
                                    android: "3.0"
                                }
                            }[f(b)];
                            d = k ? k[d] : null;
                            k = g(b);
                            if (d = d ? 0 !== a.d.bk(k, d) : !1) b: {
                                if (b && b.isViewable && "function" === typeof b.isViewable) try {
                                    d = "undefined" !== typeof b.isViewable();
                                    break b
                                } catch (e) {}
                                d = !1
                            }
                            d = p = d
                        }
                else d = !1;
                return d
            };
            a.d.bq = a.d.bp;
            a.d.br = a.d.bp;
            a.d.bs = function() {
                var a = c();
                return a && f(a)
            };
            a.d.bt = function() {
                var a = c();
                return a && g(a)
            };
            a.d.bu = function() {
                return !1
            };
            a.d.bv = function() {
                if (a.d.bn() && a.d.bp() && a.o && a.o.g) {
                    var b = "___mraid_loop___" + (new x).getTime();
                    a.b.by(a.d.bo(), ["mraid", "isViewable"]) && a.o.g(function() {
                        return c().isViewable() ? (a.d.bu = function() {
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
                        if (a.d.an().isInApp) return !1;
                        var d = a.q && a.q.a();
                        if (a.d.by || d || a.d.bz()) return a.d.by || d || a.d.bz(), !1;
                        b = a.b.by(b, ["$sf"]);
                        if (!b) return !1;
                        var c = b.ext;
                        b = c && c.geom;
                        var d = [
                                ["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")
                            ],
                            k, e = !1;
                        if (c && b && "function" === typeof b) try {
                            if ((b = b()) && b.win) {
                                if (a.b.forEach(b.win, function(a) {
                                        if (a && ("number" === typeof a || "string" === typeof a) && 0 !== parseFloat(a, 10)) return e = !0, !1
                                    }), !e) return !1
                            } else return !1;
                            if (b.par) return !0;
                            for (var c = 0, w = d.length; c < w; c++) {
                                k = d[c][0];
                                for (var g = 1, f = d[c].length; g < f; g++)
                                    if ("undefined" ===
                                        typeof b[k][d[c][g]]) return !1
                            }
                            return !0
                        } catch (h) {}
                        return !1
                    },
                    d, c, k, e;
                a.d.ca = function() {
                    if (e) return !0;
                    d = window;
                    c = document;
                    e = b(d);
                    k = !(!e && !d.$sf);
                    if (!e && a.d.r)
                        for (var g = 0; 20 > g && !e; g++) {
                            var f = a.k.b(c.body);
                            if (!1 !== f && !f) break;
                            c = (d = a.b.ap(f)) && d.document;
                            e = e || b(d);
                            k = k || e || d.$sf
                        }
                    return e
                };
                a.d.cb = function() {
                    return a.d.ca() && d
                };
                a.d.cc = function() {
                    "undefined" === typeof e && a.d.ca();
                    return k
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
            var n = function() {
                var b = function(b) {
                        return a.d.an().isInApp ? !1 : a.b.by(b, ["context", "observeIntersection"]) ? !0 : !1
                    },
                    d = window,
                    c = document,
                    k = b(d),
                    e = !(!k && !d.context);
                if (!k && a.d.r)
                    for (var g = 0; 20 > g && !k; g++) {
                        c = a.k.b(c.body);
                        if (!1 !== c && !c) break;
                        c = (d = a.b.ap(c)) && d.document;
                        k = k || b(d);
                        e = e || k || d.context
                    }
                a.d.cg = function() {
                    return k && d
                };
                a.d.ch = function(a) {
                    "boolean" === typeof a && (k = a);
                    return k
                };
                a.d.ci = function() {
                    return e
                }
            };
            a.d.cg = function() {
                n();
                return a.d.cg()
            };
            a.d.ci = function() {
                n();
                return a.d.ci()
            };
            a.d.ch = function() {
                n();
                return a.d.ch()
            };
            a.d.h = function() {
                var b = a.b.cr("context");
                if (b && a.b.by(b, ["observeIntersection"])) return b;
                b = a.b.cr("AMP_CONTEXT_DATA");
                if (a.b.by(b, ["initialIntersection"])) return b
            };
            var r = function() {
                var b, d = function(d) {
                        return (b = a.b.by(d, ["amazonmobileadsviewablebridge"])) && "function" === typeof b.addEventListener && "function" === typeof b.getVersion ? !0 : b = !1
                    },
                    c = document,
                    k = window,
                    e = d(k),
                    g = b && 1.1 <= b.getVersion();
                if (!e && a.d.r)
                    for (var f = 0; 20 > f && !e; f++) {
                        c = a.k.b(c.body);
                        if (!1 !== c && !c) break;
                        c = (k = a.b.ap(c)) && k.document;
                        e = e || d(k);
                        g = g || b && 1.1 <= b.getVersion()
                    }
                a.d.cj = function() {
                    return e && k
                };
                a.d.ck = function() {
                    return e
                };
                a.d.cl = function() {
                    return g
                };
                a.d.cm = function() {
                    return b
                }
            };
            a.d.cj = function() {
                r();
                return a.d.cj()
            };
            a.d.ck = function() {
                r();
                return a.d.ck()
            };
            a.d.cl = function() {
                r();
                return a.d.cl()
            };
            a.d.cm = function() {
                r();
                return a.d.cm()
            };
            a.d.cn = function() {
                return a.d.ck() && a.d.cl()
            };
            a.d.co = !1;
            a.d.p = function() {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, "passive", {
                        get: function() {
                            a = !0
                        }
                    });
                    window.addEventListener("test",
                        null, b);
                    window.removeEventListener("test", null, b)
                } catch (d) {}
                return a
            }();
            a.d.cp = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    var d = a.d.g,
                        c = a.b.ba();
                    if (a.d.g.navigator.standalone) b = !0;
                    else {
                        var k = d.innerWidth / c.w,
                            d = d.innerHeight / c.h,
                            k = !isNaN(k) && isFinite(k) && .9 <= k && 1.1 >= k,
                            d = !isNaN(d) && isFinite(d) && .75 <= d && 1.1 >= d;
                        b = k && d
                    }
                    a.d.g.MoatMAK ? a.d.g.MoatMAK.namespace && (b = !1) : (k = a.d.g) && k.imraid && "function" === typeof k.imraid.getVendorName && "inmobi" === k.imraid.getVendorName() && (b = !1);
                    return b
                }
            }();
            a.d.cq = function() {
                var b = a.d.an().isInApp ? 0 : void 0;
                a.d.j() ? b = 3 : a.d.cr() && (b = 1);
                return b
            };
            a.d.cr = function() {
                if (a.d.d()) return !1;
                var b = a.d.cp(),
                    d = a.b.y(),
                    c = a.d.bn(),
                    k = window.location && ("applewebdata:" === window.location.protocol || "data:" === window.location.protocol),
                    d = "-" === d || "" === d.replace(/^\s+|\s+$/gm, "");
                return b && !(d || c || k)
            };
            a.d.j = function() {
                var b;
                return function() {
                    return "undefined" !== typeof b ? b : b = a.d.cs() || a.d.d() ? !0 : a.d.cr() ? !1 : a.b.m() || a.b.l()
                }
            }();
            a.d.ct = function() {
                return a.d.g.webkit && a.d.g.webkit.messageHandlers &&
                    a.d.g.webkit.messageHandlers.__z_moat_bridge__
            };
            a.d.cs = function() {
                return !(!a.d.g || !(a.d.g.__zMoatInit__ || a.d.g.MoatMAK || a.d.ct())) || z
            };
            a.d.cu = function() {
                return !1
            };
            a.d.cv = function() {
                return a.n && a.n.b()
            };
            a.d.cw = function() {
                return a.n && a.n.c()
            };
            a.d.cx = function() {
                return a.d.cw() ? a.p && (a.p.c() || a.p.d()) : !1
            };
            a.d.cy = function() {
                if (a.d.cx()) return !0;
                var b = !1;
                return a.d.bw() ? !0 : a.d.e || a.d.ce ? b = (b = b || a.d.j() && a.d.cv()) || a.d.ce || a.d.cr() || a.d.bq() || a.d.cn() : b
            };
            a.d.protocol = a.b.bo();
            a.d.cz = "z.moatads.com";
            a.d.da =
                a.b.j();
            a.d.bl = !a.d.e;
            a.d.db = function(b) {
                var d = 0;
                b = b || window;
                try {
                    if (!a.d.e) {
                        var c;
                        for (c = 0; 20 > c && b != window.top; c++) b = b.parent;
                        d = c
                    }
                } catch (k) {}
                return d
            };
            a.d.e || a.b.v() || 1 == a.d.db(a.k.a()) ? a.d.dc = 1 : a.d.dc = 0;
            a.d.g[a.d.az] || (a.d.g[a.d.az] = new a.d.g.Object);
            a.d.an().isInApp && a.d.e && (a.d.e = a.d.cy() || a.d.j());
            a.d.dd = function() {
                return a.p && a.p.e()
            };
            a.d.de = function() {
                return a.p && a.p.d()
            };
            a.d.f = a.d.g.document.referrer || "";
            try {
                a.d.df = a.d.g.history && a.d.g.history.length
            } catch (B) {}
            a.d.dg = function() {
                if (A)
                    for (var a in A)
                        if (A.hasOwnProperty(a)) return !0;
                return !1
            };
            a.d.dh = function(b) {
                var d = !0;
                a.b.forEach(b && b.parentNode && b.parentNode.childNodes, function(b) {
                    if (a.b.ai(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], b.nodeName)) return d = !1
                });
                return d
            };
            a.d.di = function() {
                for (var a in A)
                    if (A.hasOwnProperty(a)) {
                        var b = A[a];
                        if (b && b.aa && b.aa[H]) return !0
                    }
                return !1
            };
            a.d.dj = function() {
                return a.d.an().isInApp ? a.d.cy() : a.d.e
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
                return a.d.ch &&
                    a.d.ch()
            };
            a.d["do"] = function() {
                return a.q && a.q.a()
            };
            a.d.dp = function(b) {
                var d = !1;
                a.r && a.r.a && (b && b.periscopeManager ? b.periscopeManager.measurable && (d = !0) : d = !0);
                return d
            };
            a.d.by = function() {
                var b = a.b.ct(),
                    d = 1 === a.d.an().isInApp;
                return !(!(9 <= b && window && window.requestAnimationFrame) || d)
            }();
            a.d.dq = function(b) {
                return a.d["do"]() || a.d.dp(b)
            };
            a.d.dr = function(b, d) {
                if (!b || b && b.isMeasurabilityDisabled() || a.e.c() && !d) return !1;
                var c;
                a.d.dq(b) && (c = !0);
                return a.d.dj() || a.d.ds() || c
            };
            a.d.dt = function(b) {
                if (!b || b && b.isMeasurabilityDisabled() ||
                    a.e.c()) return !1;
                var d = !1;
                a.q && a.q.a() ? d = !0 : a.r && a.r.a && b.periscopeManager && b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (d = !0);
                return a.d.dj() || a.d.ds() || d
            };
            a.d.du = function() {
                a.d.bh = !1;
                a.d.bi = !0;
                a.d.bj = !0
            };
            a.d.dv = !0;
            a.d.dw = !0;
            "mlb.com" === a.b.y() && (a.b.au() || a.b.av()) && (a.d.dw = !1);
            a.d.dx = !1;
            a.d.dy = function() {
                return a.s.a()
            };
            a.d.dz = function() {
                if (!a.d.j()) return !1;
                var b;
                return b = (b = a.d.cw() && a.p.f()) || a.s.a()
            };
            a.d.ea = function() {
                return !1
            };
            var z;
            a.d.j() && (a.d.eb = function() {
                z = !0
            });
            var v = {
                version: "sv",
                appName: "lw",
                namespace: "lu",
                isNative: "ma",
                versionHash: "ar",
                deviceOS: "av"
            };
            a.d.ec = function() {
                var b = !!a.d.g.MoatMAK;
                return function() {
                    return b
                }
            }();
            a.d.ed = function() {
                return a.d.g && a.d.g.MoatMAK || null
            };
            a.d.ee = function() {
                var b = {},
                    d = a.d.ed();
                if (d)
                    for (var c in v) v.hasOwnProperty(c) && (b[v[c]] = d[c]);
                return b
            };
            a.d.ef = function(b) {
                var d, c;
                (d = a.d.ed()) && d.hasOwnProperty(b) && (c = d[b]);
                mappedKey = v[b];
                d = a.s.b();
                mappedKey && d && d.hasOwnProperty(mappedKey) && (c = d[mappedKey]);
                "versionHash" === b && "undefined" !== typeof c &&
                    (c = c.slice(0, 7));
                return c
            };
            a.d.eg = function() {
                return a.d.ef("namespace")
            };
            a.d.eh = function() {
                var b = a.d.ef("version");
                return b ? /\d+\.\d+(\.\d+)?/.exec(b) ? b : null : b
            };
            a.d.ei = 0;
            a.d.ej = 1;
            a.d.ek = -1;
            a.d.el = function(b) {
                var d = a.d.eh();
                if (!d) return a.d.ek;
                if (!/\d+\.\d+(\.\d+)?/.exec(b)) return a.d.ej;
                switch (a.d.bk(d, b)) {
                    case 0:
                        return a.d.ek;
                    case 1:
                        return a.d.ej;
                    case 2:
                        return a.d.ei
                }
            };
            a.d.em = function(b) {
                if (a.d.en && a.d.en()) {
                    var d = a.d.ed();
                    d && b && (h(d, b), e(d, b))
                }
            };
            a.d.en = function() {
                if (!a.d.j()) return !1;
                var b;
                a.b.l() ?
                    b = "3.0" : a.b.m() && (b = "1.8");
                return b ? a.d.el(b) !== a.d.ek ? !0 : !1 : !1
            };
            a.d.eo = function() {
                var b;
                a.b.l() ? b = "3.1.1" : a.b.m() && (b = "1.7.7");
                return a.d.el(b) !== a.d.ek
            };
            a.d.ep = function() {
                var b = a.s.a(),
                    d;
                a.b.l() ? d = "3.1" : a.b.m() && (d = "2.1");
                d = a.d.el(d) !== a.d.ek;
                return b && d
            };
            a.d.eq = function() {
                var b = "___mraid_viewable_loop___" + (new x).getTime(),
                    d = a.d.bm();
                a.o.g(function() {
                    return d && d.isViewable && d.isViewable() ? (a.n.d(), a.m.a.zaxs("trackingReady"), !1) : !0
                }, {}, 300, b)
            };
            a.d.er = function() {
                if (a.d.d() && !a.d.cs()) return !1;
                var b = !(!window || !window.MmJsBridge),
                    d = !(!window || !window.imraid || "function" !== typeof window.imraid.getVendorName || "inmobi" !== window.imraid.getVendorName());
                return b || d
            };
            a.d.es = function() {
                var b = a.d.bd;
                return (b = b && b.match(/Firefox\/([0-9]+)\./)) ? parseInt(b[1], 10) : !1
            };
            (function() {
                var b = a.b.by(window, ["IntersectionObserver"]),
                    c = d() || 57 <= a.d.es() || 17 <= a.b.ah(),
                    k = a.d.an().isInApp,
                    e = a.d.d(),
                    g = c && b && "function" === typeof b && (!k || e && a.d.bl);
                a.d.dk = function(a) {
                    "boolean" === typeof a && (g = a);
                    return g
                };
                a.d.et = function() {
                    return g &&
                        b
                }
            })();
            a.d.bi = d();
            a.d.eu = function() {
                if (a.d.e || a.d.bz()) return !1;
                var b = a.d.l || a.d.am && 15.16199 <= a.b.ah();
                if (!b) return !1;
                var d = a.b.n();
                if (a.d.l && 8 >= d) return !1;
                var c = 1 === a.d.an().isInApp,
                    k, e = "function";
                a.d.l ? (8 === d && (e = "object"), k = document && typeof document[10 > d ? "elementFromPoint" : "msElementsFromPoint"] === e) : a.d.am && (k = typeof window.requestAnimationFrame === e);
                return b && !c && k
            }();
            a.d.a = new a.d.g.Image;
            a.d.m = function() {
                if ("undefined" !== typeof a.d.g["Moat#EVA"]) return !0;
                try {
                    if ("undefined" !== typeof a.d.g.eval &&
                        (a.d.g.eval("(function(win){ win['Moat#EVA'] = true; })(window)"), "undefined" !== typeof a.d.g["Moat#EVA"])) return !0
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
                var b = a.b.cr("context"),
                    d = !a.d.an().isInApp && !(!b || !b.observeIntersection),
                    c, k, e, g, f, h;
                if (!d && window.JSON && "function" === typeof window.JSON.parse && (c = location.hash.match(/amp3pSentinel=((\d+)-\d+)/))) {
                    k = c[1];
                    c = Number(c[2]);
                    e = [];
                    for (g = window; g && g != g.parent; g = g.parent) e.unshift(g.parent);
                    f = e[c];
                    d = h = !!f
                }
                a.d.ev = function() {
                    return d && b
                };
                a.d.ch = function(a) {
                    "boolean" === typeof a && (d = a);
                    return d
                };
                a.d.ew = function() {
                    return {
                        isDfp: h,
                        win: f,
                        sentinel: k
                    }
                };
                a.d.ex = function() {
                    return f && f.postMessage && k ? (f.postMessage({
                        sentinel: k,
                        type: "send-intersections"
                    }, "*"), !0) : !1
                }
            })();
            a.d.ey = function() {
                var a = navigator && navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\d{0,1}\.\d)/);
                return a ? parseFloat(a[1]) : -1
            };
            a.d.ez = function() {
                return 6.1 === a.d.ey()
            };
            a.d.fa = function() {
                var b = a.d.g;
                return b.navigator &&
                    "function" === typeof b.navigator.getBattery
            };
            a.d.ds = function() {
                return !!a.d.fb()
            };
            a.d.fb = function() {
                return a.d.dk() ? {
                    measurableFn: a.d.bz
                } : a.d.cd ? {
                    measurableFn: a.d.dl
                } : a.d.ch() ? {
                    measurableFn: a.d.dn
                } : a.d.bq() ? {
                    measurableFn: a.d.bq
                } : a.d.cn() ? {
                    measurableFn: a.d.cn
                } : a.d.de() ? {
                    measurableFn: a.d.dd
                } : !1
            };
            a.d.fc = a.b.bb();
            a.d.fd = function(b) {
                return a.b.dc() ? !0 : b = (b = a.d.fc) || a.b.bc()
            }
        })(m);
        (function(a) {
            function l(a, f, g) {
                function h(a, b) {
                    for (var c in a) a.hasOwnProperty(c) && b.call(null, a[c], c)
                }

                function e(a) {
                    var b = [];
                    h(a, function(a, d) {
                        b.push(d)
                    });
                    return b
                }
                a = f[a];
                a && a.xa.sode || (a.xa.sode = function() {
                    this.desw = {};
                    this.xfgf = [];
                    this.publishing_ = !1;
                    this.xkcd = {};
                    this.edws = []
                }, a.xa.sode.prototype.uxin = function() {
                    var a = function(a) {
                        a = g.max(4, a);
                        return ((1 + g.random()) * g.pow(16, a) | 0).toString(16).substring(0, a)
                    };
                    return function(b) {
                        return a(4) + "-" + a(4) + "-" + a(4) + "-" + a(4)
                    }
                }(), a.xa.sode.prototype.xsza = function(a) {
                    this.desw[a] || (this.desw[a] = {});
                    return this.desw[a]
                }, a.xa.sode.prototype.esgf = function(a, b) {
                    this.publishing_ ? this.xfgf.push(arguments) :
                        this.zaxs.apply(this, arguments)
                }, a.xa.sode.prototype.kswa = function(a, b) {
                    for (var c = this.xkcd[a] || [], e = c && c.length, g = 0; g < e; g++)
                        if (c[g] === b) return !1;
                    c.push(b);
                    c.sort(function(a, b) {
                        return a - b
                    });
                    this.xkcd[a] = c
                }, a.xa.sode.prototype.aksw = function(a, b) {
                    if (!this.xkcd[a]) return !1;
                    for (var c = this.xkcd[a], e = -1, g = c && c.length, f = 0; f < g; f++)
                        if (c[f] === b) {
                            e = f;
                            break
                        } - 1 != e && c.splice(e, 1);
                    this.xkcd[a] = c
                }, a.xa.sode.prototype._getEventPriorities_ = function(a) {
                    return this.xkcd[a] || []
                }, a.xa.sode.prototype.azsx = function(a, b,
                    c) {
                    c = c || {};
                    var e = c.id || this.uxin(),
                        g;
                    g = c.priority;
                    g = !isNaN(g) && isFinite(g) ? parseInt(g, 10) : 10;
                    for (var f = this.xsza(a), h = 0; f[e] && !c.id && 10 > h;) h++, e = this.uxin();
                    f[g] || (f[g] = {});
                    this.kswa(a, g);
                    c.priority = g;
                    f[g][e] = {
                        cb: b,
                        options: c
                    };
                    return e
                }, a.xa.sode.prototype.zaxs = function(a, b) {
                    if (!this.desw[a]) return !1;
                    this.publishing_ = !0;
                    for (var c = this.edws.slice.call(arguments, 1), e = this._getEventPriorities_(a).slice(0), g = 0, f = e.length; g < f; g++) {
                        var h = this.desw[a][e[g]],
                            z;
                        for (z in h)
                            if (h.hasOwnProperty(z)) {
                                var v = h[z];
                                if (v) {
                                    var B;
                                    B = v.options && v.options.includeId ? [z].concat(c) : c;
                                    if (!v.options || !v.options.condition || v.options.condition && v.options.condition.apply(null, B)) v.options && v.options.once && "undefined" !== typeof v.options.priority && this.sxaz(a, {
                                        id: z,
                                        priority: v.options.priority
                                    }), v.cb.apply(null, B)
                                }
                            }
                    }
                    this.publishing_ = !1;
                    for (c = 0; 0 < this.xfgf.length && 500 > c; c++) this.zaxs.apply(this, this.xfgf.pop())
                }, a.xa.sode.prototype.swaq = function(a, b, c) {
                    var g = !1;
                    if (this.desw[a] && this.desw[a][c]) try {
                        delete this.desw[a][c][b], g = !0
                    } catch (f) {}
                    0 === e(this.desw[a][c]).length && this.aksw(a, c);
                    return g
                }, a.xa.sode.prototype.sxaz = function(a, b) {
                    if (!b || "object" != typeof b || !this.desw[a]) return !1;
                    if (b.id && void 0 !== b.priority) return this.swaq(a, b.id, b.priority);
                    if (b.id || b.callback)
                        for (var c = this._getEventPriorities_(a), e = 0, g = c.length; e < g; e++) {
                            var f = c[e];
                            if (b.id && b.callback) {
                                if (this.desw[a][f][b.id] && this.desw[a][f][b.id].cb == b.callback) return this.swaq(a, b.id, f)
                            } else if (b.id) {
                                if (this.desw[a][f][b.id]) return this.swaq(a, b.id, f)
                            } else
                                for (var h in this.desw[a][f])
                                    if (this.desw[a][f][h] &&
                                        this.desw[a][f][h].cb == b.callback) return this.swaq(a, h, f)
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
            a.m.b = function(c) {
                c.xa.sode || (c.xb == window ? l(a.d.aw, window, q) : a.b.cq(l, "'" + a.d.aw + "',window, Math", c.xb));
                a.m.a = new c.xa.sode
            }
        })(m);
        (function(a) {
            function l(c, f) {
                function g(a) {
                    var d = b.xb.Math.pow,
                        c = b.xb.Math.random;
                    a = (0, b.xb.Math.max)(4, a);
                    return ((1 + c()) * d(16, a) | 0).toString(16).substring(0,
                        a)
                }

                function h(a) {
                    return function(b) {
                        return a(b)
                    }
                }

                function e(a, b) {
                    if (!a || "string" !== typeof b || !a[b] || a == d) return !1;
                    if ("string" === typeof a.nodeName && ("OBJECT" === a.nodeName || "EMBED" === a.nodeName)) {
                        var c = document && document.body && document.body[b];
                        if (c && c !== a[b]) return c
                    }
                    return !1
                }
                var d;
                d = "object" === typeof a && a && a.a && a.a.b ? a.a.b : this.window;
                f[c] = f[c] || {
                    zs: !1,
                    zr: 0,
                    yf: {},
                    h: 0,
                    m: 0,
                    i: {},
                    xa: {},
                    xb: f,
                    xc: {},
                    xyds: {}
                };
                var b = f[c],
                    k = {},
                    p = function() {
                        var a = !1;
                        try {
                            var b = Object.defineProperty({}, "passive", {
                                get: function() {
                                    a = !0
                                }
                            });
                            d.addEventListener("test", null, b);
                            d.removeEventListener("test", null, b)
                        } catch (c) {}
                        return a
                    }();
                b.xc.dowg = function(a, d) {
                    b && (b.xyds || (b.xyds = {}), b && b.xyds && (b.xyds[d] ? b.xyds[d].push(a) : b.xyds[d] = [a]))
                };
                b.xc.hsxk = function() {
                    b.dcsx && b.dcsx.dcwn();
                    "undefined" !== typeof a && a && b.xc.esde(a);
                    var a;
                    b.xc.exde(b.xc.hsxk, 1E3)
                };
                b.xc.esde = function(a) {
                    d && d.clearTimeout && d.clearTimeout(a)
                };
                b.xc.ynds = function(a, b, d, c) {
                    var g, f, D = !1;
                    "touchstart" === b && p && (D = {
                        passive: !0
                    });
                    c ? k[b + c] ? d = k[b + c] : (d = h(d), k[b + c] = d) : d = h(d);
                    if (a.addEventListener) c = "addEventListener", g = "";
                    else if (a.attachEvent) c = "attachEvent", g = "on";
                    else return !1;
                    if (f = e(a, c)) try {
                        f.call(a, g + b, d, D)
                    } catch (l) {
                        a[c](g + b, d, D)
                    } else if (a && c && a[c]) try {
                        a[c](g + b, d, D)
                    } catch (l) {
                        return !1
                    }
                };
                b.xc.engn = function(a, b, d, c) {
                    var g, f = b + c,
                        h;
                    if (!a) return delete k[f], !1;
                    d = !1 !== c ? k[f] : d;
                    if (a.removeEventListener) c = "removeEventListener", g = "";
                    else if (a.detachEvent) c = "detachEvent", g = "on";
                    else return delete k[f], !1;
                    if (h = e(a, c)) try {
                        h.call(a, g + b, d, !1)
                    } catch (p) {
                        a[c](g + b, d, !1)
                    } else try {
                        a[c](g +
                            b, d, !1)
                    } catch (p) {}
                    delete k[f]
                };
                b.xc.exde = function(a, b) {
                    a = h(a);
                    var c;
                    d && d.setTimeout && (c = d.setTimeout(a, b));
                    return c
                };
                b.xc.exae = function(a, b, d) {
                    return function() {
                        b.apply(d || null, a.concat(a.slice.call(arguments)))
                    }
                };
                b.xc.uxin = function() {
                    return g(4) + "-" + g(4) + "-" + g(4) + "-" + g(4)
                };
                b.xc.twer = function(a, d) {
                    b && (b.yf || (b.yf = {}), b && b.yf && (b.yf[d] ? b.yf[d].push(a) : b.yf[d] = [a]))
                }
            }
            a.v = {};
            a.v.a = function(c) {
                var f = a.v.b(c),
                    g = !1;
                f || (f = a.v.c(c), g = !0, f.xc.exde(f.xc.hsxk, 1E3));
                window[a.d.aw] = f;
                a.m.b(f);
                g && (f.swde = new f.xa.sode);
                a.m.a.azsx("adKilled", a.v.d);
                a.m.a.azsx("allLocalAdsKilled", a.v.e, {
                    once: !0
                });
                return f
            };
            a.v.e = function() {
                a.m.a.sxaz("adKilled", {
                    callback: a.v.d
                });
                a.v.f(t)
            };
            a.v.d = function(c) {
                a.d.k = null;
                if (t) {
                    try {
                        var f = t.yf[a.d.ay.a];
                        if (f) {
                            var g = a.b.indexOf(f, c.yg); - 1 < g && f.splice(g, 1)
                        }
                        a.v.g(a.d.ay.a, c.TAGID)
                    } catch (h) {}
                    a.v.f(t)
                }
            };
            a.v.h = function(c, f) {
                var g = a.v.b(a.d.g);
                g && g.xc.twer(c, f)
            };
            a.v.i = function(c, f) {
                var g = a.v.b(a.d.g);
                g && g.xc.dowg(f, c)
            };
            a.v.g = function(c, f) {
                var g = t.xyds[c];
                if (g) {
                    var h = a.b.indexOf(g, f); - 1 < h && g.splice(h,
                        1)
                }
            };
            a.v.f = function(c) {
                var f = !1,
                    g = !1,
                    h = 0,
                    e = 0;
                try {
                    c.yf[a.d.ay.a] && (g = 0 === c.yf[a.d.ay.a].length), a.b.forEach(c.yf, function(a) {
                        0 < a.length && h++
                    }), a.v.g(a.d.ay.a, a.d.ba), a.b.forEach(c.xyds, function(a) {
                        0 < a.length && (e += a.length)
                    }), c.xyds[a.d.ay.a] && 0 != c.xyds[a.d.ay.a].length || (g = !0), 0 === e && 0 === h && (f = !0)
                } catch (d) {}
                g && c.swde.esgf("allAdsInWindowKilled", a.d.ay.a);
                f && (a.m.a.sxaz("adKilled", {
                    callback: a.v.d
                }), a.m.a.sxaz("allLocalAdsKilled", {
                    callback: a.v.e
                }), c.swde.esgf("allAdsKilled"))
            };
            a.v.c = function(c) {
                c == window ?
                    l(a.d.aw, window) : a.b.cq(l, "'" + a.d.aw + "',window", c);
                return a.v.b(c)
            };
            a.v.b = function(c) {
                try {
                    return c = c || a.d.g, c[a.d.aw]
                } catch (f) {
                    return null
                }
            };
            a.v.j = function(c) {
                try {
                    var f = [];
                    c = c || a.d.g;
                    if (!c) return !1;
                    var g = a.d.au;
                    if (!g) return !1;
                    var h = new RegExp("^" + g);
                    if (!h) return !1;
                    a.b.forEach(c, function(a, d) {
                        -1 < d.search(h) && a && "number" === typeof a.zr && f.push(a)
                    });
                    return f
                } catch (e) {
                    return !1
                }
            };
            a.v.k = function(c) {
                try {
                    var f = [];
                    c = c || a.d.g;
                    return c ? (f = a.v.j(c)) ? 0 < f.length ? !0 : !1 : !1 : !1
                } catch (g) {
                    return !1
                }
            };
            a.v.l = function(c) {
                var f =
                    a.v.b();
                f && (f.i[c] = !0)
            }
        })(m);
        (function(a) {
            function l(c, g, h) {
                var e = {};
                c = c.replace(/&amp;/g, "&").replace(/(^\s+|\s+$)/g, "");
                c = c.split("&");
                for (var d = 0; d < c.length; d++) {
                    var b = c[d].split("=");
                    if ("string" === typeof b[1]) {
                        b[0] && b[0].match("moatClient") && (e["rawM" + b[0].slice(1)] = b[1]);
                        var k = b,
                            p, u = p = b[1];
                        try {
                            for (var n = 0; 100 > n && (p = decodeURIComponent(p), u != p) && !p.match(/^http(s)?\:/); n++) u = p
                        } catch (z) {}
                        p = p.replace(/(^\s+|\s+$)/g, "");
                        k[1] = p
                    } else b[1] = "";
                    e[b[0]] = b[1];
                    3 <= b.length && (e[b[0]] = b.slice(1, b.length).join("="))
                }
                if ("5113" ==
                    e.rawMoatClientLevel1 || "5071" == e.rawMoatClientLevel1 || "593" == e.rawMoatClientLevel1) {
                    var r;
                    try {
                        r = a.w.g(h)
                    } catch (z) {}
                    e.zMoatMagicNum = r.clientZone
                }
                "undefined" !== typeof g && (e.clientZone = "undefined" !== g ? g : "");
                return e = a.w.h(e)
            }

            function c(a, c) {
                return a && a[c] || "-"
            }
            a.w = {};
            a.w.a = {};
            a.w.a.a = [];
            a.w.b = function(c, g) {
                if (!c) return !1;
                if ("undefined" === typeof c.startTime || g) c.startTime = a.d.bg;
                if ("undefined" === typeof c.rand || g) c.rand = q.floor(q.random() * q.pow(10, 12));
                "undefined" === typeof c.adNum && (c.adNum = t.zr, t.zr++)
            };
            a.w.c = function(c) {
                if (!c) return !1;
                var g = a.b.u();
                a.b.y();
                decodeURIComponent(g);
                return c
            };
            a.w.d = function(c) {
                var g = a.w.e(c);
                g && a.b.forEach(a.w.a.a, function(a) {
                    a(g)
                });
                return g
            };
            a.w.e = function(a) {
                try {
                    var c = a.className,
                        h = a.getAttribute("src");
                    c.split("\n").join(" ");
                    if (-1 !== c.indexOf("moatfooter")) return !1;
                    var e = h.split("?"),
                        d = h.split("#"),
                        c = !1;
                    1 < e.length && 1 < d.length && e[1].length < d[1].length && (c = !0);
                    if (1 == e.length || c) e = d;
                    return 1 < e.length ? l(e[1], "undefined", a.parentNode) : !1
                } catch (b) {
                    return !1
                }
            };
            a.w.f = function(a) {
                if (!a) return !1;
                var c = {};
                try {
                    var h = a && a.className.replace("amp;", "").split("?")[1];
                    return c = h && l(h)
                } catch (e) {
                    return !1
                }
            };
            a.w.h = function(a) {
                if (a) {
                    for (var c in a) a.hasOwnProperty(c) && c && c.match("moatClientLevel") && "string" === typeof a[c] && (a[c] = a[c].replace(/\:/g, "_").replace(/%3A/gi, "_"));
                    return a
                }
            };
            a.w.i = function(a) {
                try {
                    var c = zoneRegEx.exec(a.innerHTML);
                    0 < c.length && (zone = c[1]);
                    return zone
                } catch (h) {}
            };
            a.w.j = function(a) {
                return (a = unescape(unescape(unescape(unescape(a.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/)) ? {
                    adid: c(a,
                        1),
                    cid: c(a, 2)
                } : !1
            };
            a.w.k = function() {
                var a = null;
                return function() {
                    a || (a = (s_265.prop22 ? s_265.prop22 : "").replace(/:/g, "|") || "unknown author");
                    return a
                }
            }();
            a.w.l = function() {
                var a = null;
                return function() {
                    a || "undefined" !== typeof s_265 && s_265.eVar52 && (a = s_265.eVar52.replace("uaid_", ""));
                    return a
                }
            }();
            a.w.g = function(f, g) {
                var h, e;
                "string" === typeof f ? (h = f, e = window.location.href.match(/size=([^;\/]*)/)) : (h = "IFRAME" === f.tagName ? f.contentWindow.document.body.innerHTML : f.innerHTML, e = f.className.match(/uac_(.*)/));
                var d = h.match(/var aolAdId="([0-9]*)\|([0-9]*)"/),
                    b = h.match(/at.atwola.com.*kvmn=([0-9]*).*/),
                    k = h.match(/var aolSize="(.*)"/),
                    p = h.match(/var aolFormat="(.*)"/),
                    u = h.match(/var zMoatVert=(.*)/),
                    n = "undefined" !== typeof aolAdFdBkStr ? aolAdFdBkStr : "";
                !b && d && n && (b = new RegExp("(\\d+)\\|\\d+\\|\\d+\\|" + d[1] + "\\|" + d[2] + "\\|;"), b = n.match(b));
                return d && b ? (h = {
                        adid: c(d, 1),
                        banner: c(d, 2),
                        clientZone: c(b, 1),
                        size: c(e, 1),
                        comment_size: c(k, 1),
                        adtechids: n,
                        format: c(p, 1),
                        zMoatVert: c(u, 1)
                    }, (e = b && c(b, 0).match(/mpid=([^;]*);/)) &&
                    1 < e.length && (h.clientZone = e[1]), h) : (h = a.w.m(unescape(h))) ? (b && b[1] && (h.clientZone = b[1]), h.size = c(e, 1), h.adtechids = n, h.format = p, h) : g && n && (b = new RegExp("(\\d+)\\|" + g.x + "\\|" + g.y + "\\|(\\d+)\\|(\\d+)\\|;"), (e = n.match(b)) && 4 == e.length) ? {
                    adid: e[2],
                    banner: e[3],
                    clientZone: e[1]
                } : !1
            };
            a.w.m = function(a) {
                return (a = /adlink\/[0-9]*\/([0-9]*)\/[0-9]*\/[0-9]*\/AdId=([0-9]*);BnId=([0-9]*)/.exec(a)) ? {
                    adid: c(a, 2),
                    banner: c(a, 3),
                    clientZone: c(a, 1)
                } : !1
            };
            a.w.n = function(a, c) {
                return c || {}
            };
            a.w.o = function(a) {
                a = decodeURIComponent(decodeURIComponent(a)); -
                1 < a.indexOf("anonymous.google") && (a = "anonymous.google");
                var c = a.match(/^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/);
                c && c[1] && (a = c[1]);
                return a.split("/")[0]
            };
            a.w.p = function(c) {
                a.w.b(c);
                a.w.q(c);
                c = a.w.h(c);
                a.w.r && a.w.r(c);
                return c
            }
        })(m);
        m.b.dc() && (O += "_BETA");
        var t = m.v.a(m.d.g),
            Da = m.d.e,
            sa = m.b.j(),
            ma = m.d.bg,
            Z = m.d.g,
            H = "moatFound" + O,
            I = "__moat__" + O;
        m.b.db() && 2 === M && (H = "moatFound" + O + "BETA", I = "__moat__" + O + "BETA");
        (function(a) {
            function l(c, f, g) {
                var h = f[c];
                h && h.xa.txae || (h.xa.txae = function(a, d) {
                    this.sxdc =
                        h.xc.uxin();
                    this.cdxs = a;
                    this.xscd = {};
                    this.swde = d;
                    var b = this,
                        c = this.swde.azsx("allAdsInWindowKilled", function(a) {
                            h.dcsx.engn({
                                listenerName: "unloadFn" + a
                            });
                            h.dcsx.engn({
                                listenerName: "beforeunloadFn" + a
                            })
                        });
                    this.swde.azsx("allAdsKilled", function() {
                        b.swde.sxaz("allAdsInWindowKilled", {
                            id: c
                        });
                        h.dcsx && (h.dcsx.aqsw(), h.zs = !1, h.xz = !1, h.dcsx = !1)
                    }, {
                        once: !0
                    })
                }, h.xa.txae.prototype.wsed = function(a, d, b, c, g) {
                    this.xscd[c] || (this.xscd[c] = {});
                    this.xscd[c].evt = d;
                    this.xscd[c].target = a;
                    this.xscd[c].periodic = !0;
                    var f;
                    f = h.xc.exae([this],
                        function(n, r) {
                            h.xc.engn(a, d, null, c);
                            if (n.xscd[c]) {
                                n.xscd[c].tid && h.xc.esde(n.xscd[c].tid);
                                n.xscd[c].tid = h.xc.exde(function() {
                                    n.xscd[c].tid = null;
                                    h.xc.ynds(a, d, f, c)
                                }, g);
                                try {
                                    n.swde.zaxs(b, r)
                                } catch (z) {}
                            }
                        });
                    h.xc.ynds(a, d, f, c)
                }, h.xa.txae.prototype.wsqa = function(a) {
                    this.xscd[a] && (h.xc.esde(this.xscd[a].tid), h.xc.engn(this.xscd[a].target, this.xscd[a].evt, null, a), delete this.xscd[a])
                }, h.xa.txae.prototype.qaws = function() {
                    if (!("object" === typeof a && a && a.d && a.d.c && a.d.c())) {
                        this.wsed(this.cdxs, "scroll", "scroll",
                            "globalScrollevent" + this.sxdc, 1E3);
                        var c = this.cdxs.document.documentElement;
                        this.wsed(c, "mousedown", "mouseEvent", "globalMouseDown" + this.sxdc, 1E3);
                        this.wsed(c, "mouseover", "mouseEvent", "globalMouseOver" + this.sxdc, 1E3);
                        this.wsed(c, "mousemove", "mouseEvent", "globalMouseMove" + this.sxdc, 5E3);
                        this.wsed(this.cdxs, "mousewheel", "mouseEvent", "globalMouseWheel" + this.sxdc, 5E3);
                        this.wsed(this.cdxs, "DOMMouseScroll", "mouseEvent", "globalMouseScroll" + this.sxdc, 5E3);
                        this.wsed(c, "touchstart", "mouseEvent", "globalTouchStartEvent" +
                            this.sxdc, 1E3);
                        this.wsed(c, "keydown", "keyboardEvent", "globalKeyboardEvent" + this.sxdc, 1E3)
                    }
                }, h.xa.txae.prototype.aqsw = function() {
                    for (var a in this.xscd) this.engn({
                        listenerName: a
                    })
                }, h.xa.txae.prototype.ynds = function(a, d, b, c) {
                    if (!this.xscd[c]) {
                        this.xscd[c] = {};
                        this.xscd[c].evt = d;
                        this.xscd[c].target = a;
                        this.xscd[c].publishEvt = b;
                        var g;
                        g = h.xc.exae([this], function(a, d) {
                            a.xscd[c] && a.swde.zaxs(b, d)
                        });
                        h.xc.ynds(a, d, g, c)
                    }
                }, h.xa.txae.prototype.engn = function(a) {
                    function d(a, b) {
                        a.xscd[b].periodic ? a.wsqa(b) : (h.xc.engn(a.xscd[b].target,
                            a.xscd[b].evt, null, b), delete a.xscd[b])
                    }
                    var b = a.target && a.evt,
                        c = a.target && !a.evt,
                        g = a.all;
                    if (a.listenerName) this.xscd[a.listenerName] && d(this, a.listenerName);
                    else if (b)
                        for (var f in this.xscd)(b = this.xscd[f]) && b.evt == a.evt && b.target == a.target && d(this, f);
                    else if (c)
                        for (f in this.xscd)(b = this.xscd[f]) && b.target == a.target && d(this, f);
                    else if (g)
                        for (f in this.xscd)(b = this.xscd[f]) && d(this, f)
                }, h.xa.txae.prototype.kdmw = function(a) {
                    h.swde.esgf(a.publishEvt)
                }, h.xa.txae.prototype.dcwn = function() {
                    var a = this.xscd,
                        d;
                    for (d in a) {
                        var b = a[d];
                        "unload" === b.evt && b.target && b.target.closed && this.kdmw(b)
                    }
                })
            }
            a.x = {};
            a.x.a = function(c) {
                c && (c.xa.txae || (c.xb == window ? l(a.d.aw, window, q) : a.b.cq(l, "'" + a.d.aw + "',window, Math", c.xb)), c.zs || (c.dcsx = new c.xa.txae(a.d.g, c.swde), c.zs = !0))
            };
            a.m.a.azsx("modulesReady", a.x.a, {
                once: !0
            });
            a.m.a.azsx("startAdTracking", function(c) {
                t && t.zs && !t.xz && (t.dcsx ? (t.xz = !0, t.dcsx.qaws()) : a.x.a(t), a.focus.setFocusListeners())
            })
        })(m);
        (function(a) {
            function l() {
                this.height = this.width = this.absTop = this.absLeft =
                    0;
                this.update = function(a) {
                    var d = b("left", a.win),
                        c = b("top", a.win);
                    !1 !== d && !1 !== c && (this.absLeft = a.left + d, this.absTop = a.top + c, this.width = a.width, this.height = a.height)
                }
            }

            function c(b, d) {
                var c = b.zr;
                z.hasOwnProperty(c) || (z[c] = new l);
                var k = d || new a.y.l(b.aa);
                z[c].update(k)
            }

            function f(b, d, c) {
                return c ? new a.y.l(b.parentNode, d) : new a.y.l(b, d)
            }

            function g(a, b) {
                if (!a) return !1;
                var d = "number" == typeof a.zr,
                    k, w;
                d ? (k = a.aa, w = a._calcVideoBasedOnContainer) : k = a;
                k = f(k, b, w);
                w = k.height;
                var g = k.width;
                d && (a.AD_RECT = k);
                var h =
                    k.calcArea();
                if (0 === h) return {
                    area: h,
                    visibleArea: 0,
                    percv: 0
                };
                var p = e(k),
                    r = p.visibleRect.calcArea(),
                    z = r / h,
                    u;
                a: {
                    var n = p.cumulRect,
                        l = p.cumulRect.getViewportRect();
                    if (0 > n.top && 0 < n.bottom) u = -n.top;
                    else if (0 <= n.top && n.top <= l.height) u = 0;
                    else {
                        u = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    if (0 <= n.bottom && n.bottom <= l.height) n = n.height;
                    else if (n.bottom > l.height && n.top < l.height) n = n.height - (n.bottom - l.height);
                    else {
                        u = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    u = {
                        yMin: u,
                        yMax: n
                    }
                }
                d && c(a, k);
                return {
                    area: h,
                    visibleArea: r,
                    visibleRect: p.visibleRect,
                    cumulRect: p.cumulRect,
                    percv: z,
                    yMinMax: u,
                    elGeo: {
                        elHeight: w,
                        elWidth: g,
                        foldTop: p.cumulRect.top,
                        totalArea: p.parentArea
                    },
                    rect: k.rect
                }
            }

            function h(a, b) {
                for (var d = [], c = 0; c < b.length; c++) d.push(a(b[c]));
                return d
            }

            function e(b) {
                var d, c = [],
                    k = a.b.cn(b.el, b.win, b && b.el && b.el._moatParentCount);
                k && (c = h(function(b) {
                    return new a.y.l(b)
                }, k));
                c.unshift(b);
                k = c.length;
                b = new a.y.l(b.el, a.d.g);
                for (var e = 0; e < k; e++) {
                    var g = c[e];
                    0 === e ? d = g : (d.changeReferenceFrame(g), b.changeReferenceFrame(g));
                    g = g.getViewportRect(e < k - 1 ? c[e + 1] : !1);
                    d = a.y.o(d, g)
                }
                return {
                    visibleRect: d,
                    cumulRect: b,
                    parentArea: c[c.length - 1].calcArea()
                }
            }

            function d(a, b, d, c) {
                a = q.max(a, d);
                b = q.min(b, c);
                return b > a ? [a, b] : [0, 0]
            }

            function b(a, b) {
                b || (b = window);
                try {
                    var d = b.document.documentElement,
                        c = b.document.body;
                    return "left" === a ? b.pageXOffset || d && d.scrollLeft || c && c.scrollLeft : b.pageYOffset || d && d.scrollTop || c && c.scrollTop
                } catch (k) {
                    return !1
                }
            }

            function k(b) {
                function d(a, b) {
                    return {
                        top: q.max(a.top, b.top),
                        right: q.max(a.right, b.right),
                        bottom: q.min(a.bottom, b.bottom),
                        left: q.min(a.left, b.left)
                    }
                }
                var c, k, e;
                c = [];
                k = [];
                if (!a.b.d(b) || 0 === b.length) return !1;
                a.b.forEach(b, function(a) {
                    a.cumulRect && a.visibleRect && (k.push(a.cumulRect), c.push(a.visibleRect))
                });
                b = a.b.reduce(k, d);
                e = a.b.reduce(c, d);
                return {
                    elRect: b,
                    visibleRect: e
                }
            }

            function p(b, d, c, k, e) {
                var f = {
                        IFRAME: !0,
                        VIDEO: !0,
                        OBJECT: !0,
                        EMBED: !0,
                        IMG: !0
                    },
                    h = g(b),
                    p = [],
                    r = A[e];
                c.elementsFromPoint && !r.elementsFromPointCache ? (d = c.elementsFromPoint(d.m[0], d.m[1]) || [], r.elementsFromPointCache = d, p = p.concat(Array.prototype.slice.call(d))) : (d = a.b.ce(d.m[0], d.m[1], c), r.elementsFromPointCache &&
                    (p = p.concat(Array.prototype.slice.call(r.elementsFromPointCache))), d && (p = [d].concat(p)));
                for (r = 0; r < p.length; r++) {
                    if (c = (d = p[r]) && d !== k && d[I] !== e && f[d.nodeName] && !a.b.cb(d, b) && !a.b.cb(b, d)) c = (c = d) && c.nodeName && "map" === c.nodeName.toLowerCase() ? !0 : (c = a.b.bk(c)) && (1 >= c.width || 1 >= c.height) ? !0 : !1, c = !c;
                    c && (c = d, c = !(c && (0 === a.b.cl({
                        aa: c
                    }, !0, !0) || 0 === a.b.ck(c, !0))));
                    if (c) {
                        if (c = d = g(d)) c = ((c = d.cumulRect) ? 100 <= c.width && 50 <= c.height : !1) && h && d && .5 <= a.y.s(h.cumulRect, d.cumulRect);
                        if (c) return !0
                    }
                }
                return !1
            }

            function u(a) {
                var b =
                    .01 * a.width,
                    d = .01 * a.height;
                return {
                    tl: [a.left + b, a.top + d],
                    m: [a.left + (a.right - a.left) / 2, a.top + (a.bottom - a.top) / 2],
                    br: [a.right - b, a.bottom - d]
                }
            }

            function n(b, d) {
                var c = [],
                    k = a.k.h(b);
                k && (c = h(function(d) {
                    var c = e(new a.y.l(b)).visibleRect;
                    new a.y.l(d);
                    return {
                        rect: c,
                        frame: d,
                        doc: d.ownerDocument
                    }
                }, k));
                c.unshift({
                    rect: e(new a.y.l(b)).visibleRect,
                    frame: b,
                    doc: b.ownerDocument
                });
                for (k = 0; k < c.length; k++) {
                    var w = u(c[k].rect),
                        g = !1;
                    if (0 != w.tl[0] || 0 != w.tl[1] || 0 != w.br[0] || 0 != w.br[1]) g = !0;
                    if (g && p(b, w, c[k].doc, c[k].frame, d)) return !0
                }
                return !1
            }
            a.y = {};
            var r = a.d.e,
                z = {};
            a.y.a = .5;
            a.y.b = .3;
            a.y.c = .98;
            a.y.d = void 0;
            a.y.e = function(b, d) {
                d = d || !1;
                return function(c, k) {
                    var e = c.ao.skin ? a.y.f(c, k) : g(c, k);
                    e.isVisible = d ? e.percv > b : e.percv >= b;
                    e.elGeo && (e.elGeo.threshold = b);
                    return e
                }
            };
            a.y.g = function(b) {
                this.checkVisibleArea = function() {
                    this.result = A[b].ao.skin ? a.y.f(A[b]) : g(A[b])
                };
                this.customVisible = function(b) {
                    var d = a.b.g(this.result);
                    d.isVisible = 0 === b ? d.percv > b : d.percv >= b;
                    return d
                }
            };
            a.y.f = function(b, d) {
                function c() {
                    if (b.isMultipartAd && b.multipartComponents &&
                        0 < b.multipartComponents.length) {
                        for (var a, k = 0, e = 0; e < b.multipartComponents.length; e++) {
                            var w = g(b.multipartComponents[e], d);
                            w.visibleArea >= k && (k = w.visibleArea, a = b.multipartComponents[e])
                        }
                        return g(a, d)
                    }
                }

                function e() {
                    if (b.isCompositeAd && b.components && 1 < b.components.length) {
                        for (var c = {
                                area: 0,
                                visibleArea: 0,
                                percv: 0,
                                visibleRect: !1,
                                cumulRect: !1,
                                yMinMax: !1,
                                elGeo: !1,
                                rect: !1,
                                componentResults: []
                            }, w, f = 0; f < b.components.length; f++) w = g(b.components[f], d), c.area += w.area, c.visibleArea += w.visibleArea, c.componentResults.push(w);
                        c.percv = c.visibleArea / c.area;
                        b.compositeAdAreaPx = c.area;
                        (w = k(c.componentResults)) && "strict" === a.aa.a(b.zr) && a.m.a.zaxs("rectsAvailable", b.zr, w.elRect, w.visibleRect)
                    } else c = g(b, d);
                    return c
                }
                b.viewabilityMethod.strict || (b.viewabilityMethod.strict = 1);
                if (1 == b.ao.skin) {
                    for (var w = a.z.a.a(), f = [], h = 0, p = 0, r, z = 0; z < w.length; z++) r = g(w[z], d), f.push(r), h += r.area, p += r.visibleArea;
                    w = 0 == h ? 0 : p / h;
                    a.y.d ? r.percv > a.y.d && (a.y.d = w) : a.y.d = w;
                    f = (r = k(f)) && "strict" === a.aa.a(b.zr);
                    0 < w && f && a.m.a.zaxs("rectsAvailable", b.zr, r.elRect,
                        r.visibleRect);
                    f = a.y.c;
                    return a.ab.a(h) ? {
                        isVisible: w > a.y.b,
                        isFullyVisible: w > f,
                        percv: w
                    } : {
                        isVisible: w > a.y.a,
                        isFullyVisible: w > f,
                        percv: w
                    }
                }
                r = b.isMultipartAd ? c(b, d) : b.isCompositeAd ? e(b, d) : g(b, d);
                (f = "strict" === a.aa.a(b.zr) && a.d.e && !a.d.j()) && a.m.a.zaxs("rectsAvailable", b.zr, r.cumulRect, r.visibleRect);
                h = a.y.h(r, b);
                f = a.y.c;
                r.isVisible = r.percv >= h;
                r.isFullyVisible = r.percv >= f;
                r.elGeo && (r.elGeo.threshold = h);
                b.videoIsFullscreen && 0 < r.percv && (r.isVisible = !0);
                .8 <= r.percv && (r.isDentsuVisible = !0);
                a.y.d ? r.percv > a.y.d &&
                    (a.y.d = r.percv) : a.y.d = r.percv;
                b.AD_RECT = r && r.rect;
                return r
            };
            a.y.h = function(b, d) {
                return a.ab.a(b.area) ? (d.viewstats || (d.viewstats = {}), d.viewstats.isBigAd = !0, a.y.b) : a.y.a
            };
            a.y.i = function() {
                return r
            };
            a.y.j = g;
            a.y.k = function(a, b) {
                r && z.hasOwnProperty(b) || c(a);
                return z[b]
            };
            a.y.m = f;
            a.y.n = a.d.s;
            a.y.l = function(b, d, c, k) {
                try {
                    this.rect = c || b.getBoundingClientRect && b.getBoundingClientRect() || {}
                } catch (e) {
                    this.rect = c || b && {
                        top: b.offsetTop,
                        left: b.offsetLeft,
                        width: b.offsetWidth,
                        height: b.offsetHeight,
                        bottom: b.offsetTop +
                            b.offsetHeight,
                        right: b.offsetLeft + b.offsetWidth
                    } || {}
                }
                c = "left right top bottom width height".split(" ");
                for (k = 0; k < c.length; k++) {
                    var w = c[k];
                    this[w] = this.rect[w]
                }
                b && b.adjustForClip && (c = a.b.cd(b.style.clip)) && (this.left += c.left, this.right = this.left + c.right, this.top += c.top, this.bottom = this.top + c.bottom);
                b && b.CLIPCHECKINGTARGET && b.CLIPCHECKINGTARGET.style && "absolute" === b.CLIPCHECKINGTARGET.style.position && (c = a.b.cd(b.CLIPCHECKINGTARGET.style.clip)) && (this.right = this.left + c.right, this.left += c.left, this.bottom =
                    this.top + c.bottom, this.top += c.top);
                this.width = this.right - this.left;
                this.height = this.bottom - this.top;
                this.el = b;
                this.win = d || b && a.b.ap(b);
                this.changeReferenceFrame = function(a) {
                    this.left += a.left;
                    this.right += a.left;
                    this.top += a.top;
                    this.bottom += a.top
                };
                this.calcArea = function() {
                    return (this.right - this.left) * (this.bottom - this.top)
                };
                this.getViewportRect = function(b) {
                    var d = a.d.s(this.win);
                    b && (b.width < d.width && (d.width = b.width, d.right = d.left + d.width), b.height < d.height && (d.height = b.height, d.bottom = d.top + d.height));
                    return d
                }
            };
            a.y.p = function(a, b, d) {
                return "undefined" === typeof a ? !1 : {
                    left: Number(b) + Number(a.left),
                    right: Number(b) + Number(a.right),
                    top: Number(d) + Number(a.top),
                    bottom: Number(d) + Number(a.bottom)
                }
            };
            a.y.o = function(b, c) {
                if ("undefined" === typeof b || "undefined" === typeof c) return !1;
                var k = d(b.left, b.right, c.left, c.right),
                    e = d(b.top, b.bottom, c.top, c.bottom);
                return new a.y.l(void 0, void 0, {
                    left: k[0],
                    right: k[1],
                    top: e[0],
                    bottom: e[1]
                })
            };
            a.y.q = function(b, d, c, k) {
                if (!b || !d || !c) return !1;
                b = a.y.j(b);
                if (!b) return !1;
                c = k || a.y.o(d,
                    c);
                if (!c) return !1;
                k = a.y.p(b.visibleRect, d.left, d.top);
                return k ? (c = a.y.o(k, c)) ? {
                    elementRect: a.y.p(b.cumulRect, d.left, d.top),
                    visibleRect: c,
                    area: b.area,
                    calcVisiblePercv: function() {
                        return (this.visibleRect.right - this.visibleRect.left) * (this.visibleRect.bottom - this.visibleRect.top) / this.area
                    }
                } : !1 : !1
            };
            a.y.r = b;
            a.y.j = g;
            a.y.t = function(b) {
                var d = b.aa;
                b = b.zr;
                if (d) {
                    if (a.d.r) d = n(d, b);
                    else var c = e(new a.y.l(d)).visibleRect,
                        c = u(c),
                        d = p(d, c, a.d.g.document, null, b);
                    return d
                }
            };
            a.y.u = function(a) {
                return a ? (a.right - a.left) *
                    (a.bottom - a.top) : !1
            };
            a.y.v = function(b) {
                function d(b) {
                    return a.b.ci(b) || "string" === typeof b
                }
                return "object" === typeof b && d(b.left) && d(b.right) && d(b.top) && d(b.bottom) ? !0 : !1
            };
            a.y.s = function(b, d) {
                if (!a.y.v(b) || !a.y.v(d)) return !1;
                var c = a.y.o(b, d);
                if (!c) return !1;
                var k = a.y.u(b);
                return c.calcArea() / k
            };
            a.m.a.azsx("adKilled", function(a) {
                a && !a.ep && delete z[a.zr]
            })
        })(m);
        (function(a) {
            function l(b) {
                var d = b.ad,
                    c = b.elem,
                    k = b.cbName,
                    e = b.rcbName,
                    g = b.options;
                b = b.isDummy;
                if (!d || !c || !g) return !1;
                if (c = a.ac.a(d, g.id, c, g)) {
                    if (b) return a.ac.call(d,
                        c,
                        function() {}), !0;
                    a.ac.call(d, c, a.ad.a, "'" + k + "','" + e + "'");
                    return !0
                }
            }

            function c(b) {
                var d = b.ad,
                    c = b.elem,
                    k = b.cbName,
                    e = b.options,
                    g = b.name,
                    w = b.customFn,
                    f = b.preserveDom,
                    h = b.argument || "";
                if (!(d && c && e && w)) return !1;
                if (b.customPixelDiv) return f = document.createElement("div"), b = e.id || a.b.cp(), a.b.cv(f, e), f.id = b, a.b.bv(f, c), {
                    killFn: w(k, g, d.zr, f)
                };
                b = a.ac.a(d, e.id, c, e);
                if (!b) return !1;
                a.ac.call(d, b, w, "'" + k + "', '" + g + "', '" + d.zr + "', '" + h + "'", null, f);
                return !0
            }
            a.r = {};
            var f = a.b.n(),
                g = null !== f,
                h = "number" === typeof a.d.ao(),
                e = a.d.am,
                d = !1,
                b = !0,
                k = function() {
                    var a = navigator.appVersion.match(/Windows NT (\d\.\d)/);
                    return a ? parseFloat(a[1]) : -1
                }(),
                p = 6.2 <= k;
            a.r.b = f;
            a.r.c = g;
            a.r.d = h;
            a.r.e = k;
            a.r.f = p;
            var u = {
                FRAME_RATE: "fr",
                STAGE_WIDTH: "sd",
                ACTIVE_STAGE_WIDTH: "asd",
                THROTTLE: "td",
                RAPID_THROTTLE: "rtd"
            };
            a.r.g = u;
            a.r.h = a.d.o;
            a.r.i = a.b.aj && a.b.aj();
            a.r.j = !1;
            if (a.r.h) try {
                var n = a.b.ct();
                a.r.j = 5 < n
            } catch (r) {}
            a.r.k = !1;
            a.r.l = function(a) {
                if (a.currentFocusState) {
                    if ("center" != a.config.name) {
                        var b, d, c = (b = a.manager.getPixelByName("center")) && (d =
                            b.viewstates[a.manager.getTargetViewState()]) && d.inview;
                        b = a.manager.reachedAnyInview;
                        if (!c && b) {
                            a.skipWidthCheck = !0;
                            return
                        }
                    }
                    a.skipWidthCheck = !1
                } else a.skipWidthCheck = !0
            };
            a.r.m = function(b) {
                var d = a.r.l,
                    c = b.aa.parentNode,
                    k = {
                        insertableFunc: a.r.n,
                        pixels: [{
                                name: "center",
                                id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                                target: b.aa,
                                container: c,
                                position: {
                                    top: "50%",
                                    left: "50%"
                                },
                                onWidthCheck: d
                            }, {
                                name: "topLeft",
                                id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                                target: b.aa,
                                container: c,
                                position: {
                                    top: "0px",
                                    left: "0px"
                                },
                                onWidthCheck: d
                            },
                            {
                                name: "bottomRight",
                                id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                                target: b.aa,
                                container: c,
                                position: {
                                    top: "100%",
                                    left: "100%"
                                },
                                onWidthCheck: d
                            }
                        ]
                    };
                k.pixels.push({
                    name: "dentsuTopLeft",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "20%",
                        left: "20%"
                    },
                    onWidthCheck: d
                });
                k.pixels.push({
                    name: "dentsuBottomRight",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "80%",
                        left: "80%"
                    },
                    onWidthCheck: d
                });
                k.pixels.push({
                    name: "topLeft30",
                    id: "moatPx" + b.zr + "_" +
                        q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "30%",
                        left: "30%"
                    },
                    onWidthCheck: d
                });
                k.pixels.push({
                    name: "topRight30",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "30%",
                        left: "70%"
                    },
                    onWidthCheck: d
                });
                k.pixels.push({
                    name: "bottomLeft30",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "70%",
                        left: "30%"
                    },
                    onWidthCheck: d
                });
                k.pixels.push({
                    name: "bottomRight30",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "70%",
                        left: "70%"
                    },
                    onWidthCheck: d
                });
                k.pixels.push({
                    name: "bottomLeft",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "100%",
                        left: "0%"
                    },
                    onWidthCheck: d
                });
                k.pixels.push({
                    name: "topRight",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "0%",
                        left: "100%"
                    },
                    onWidthCheck: d
                });
                a.d.by && k.pixels.push({
                    name: "dummy",
                    id: "moatPx" + b.zr + "_" + q.ceil(1E6 * q.random()),
                    target: b.aa,
                    container: c,
                    position: {
                        top: "0%",
                        left: "50%"
                    },
                    onWidthCheck: d
                });
                return k
            };
            a.r.o = function(b) {
                var d = 0,
                    c = b.getTargetViewState();
                a.b.forEach(b.pixels, function(a) {
                    a.measurable && a.viewstates && a.viewstates[c] && d++
                });
                return d === b.pixels.length
            };
            a.r.p = function(b, d) {
                var c = !1,
                    k = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (c = !0);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (k = !0)
                });
                return c && k ? !0 : !1
            };
            a.r.q = function(b, d) {
                var c = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[d]) return c = !0, !1
                });
                return c
            };
            a.r.r = function(b, d) {
                var c = !1,
                    k = !1,
                    e = !1,
                    g = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (c = !0);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (e = !0);
                    a.config && "20%" == a.config.position.left &&
                        "20%" == a.config.position.top && a.viewstates && a.viewstates[d] && (k = !0);
                    a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[d] && (g = !0)
                });
                return c && g && e && k
            };
            a.r.s = function(b, d) {
                var c = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && a.viewstates && a.viewstates[d] && (c = a.viewstates[d].inview)) return !1
                });
                return c
            };
            a.r.t = function(b, d) {
                var c = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates &&
                        a.viewstates[d]) return c = a.viewstates[d].inview, !1
                });
                return c
            };
            a.r.u = function(b, d) {
                var c = !1,
                    k = !1;
                if (b.edgesInView.tlPixelInview && b.edgesInView.brPixelInview && !b.inview) return !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (c = a.viewstates[d].inview);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (k = a.viewstates[d].inview)
                });
                b.edgesInView.tlPixelInview =
                    c;
                b.edgesInView.brPixelInview = k;
                return c && k ? !0 : !1
            };
            a.r.v = function(b, d) {
                var c = !1,
                    k = !1,
                    e = !1,
                    g = !1,
                    w = !1,
                    f = !1,
                    h = !1,
                    p = !1;
                a.b.forEach(b.pixels, function(a) {
                    a.config && "topLeft" == a.config.name && a.viewstates && a.viewstates[d] && (c = a.viewstates[d].inview);
                    a.config && "topLeft30" == a.config.name && a.viewstates && a.viewstates[d] && (k = a.viewstates[d].inview);
                    a.config && "topRight" == a.config.name && a.viewstates && a.viewstates[d] && (e = a.viewstates[d].inview);
                    a.config && "topRight30" == a.config.name && a.viewstates && a.viewstates[d] &&
                        (g = a.viewstates[d].inview);
                    a.config && "bottomLeft" == a.config.name && a.viewstates && a.viewstates[d] && (w = a.viewstates[d].inview);
                    a.config && "bottomLeft30" == a.config.name && a.viewstates && a.viewstates[d] && (f = a.viewstates[d].inview);
                    a.config && "bottomRight" == a.config.name && a.viewstates && a.viewstates[d] && (h = a.viewstates[d].inview);
                    a.config && "bottomRight30" == a.config.name && a.viewstates && a.viewstates[d] && (p = a.viewstates[d].inview)
                });
                return c && e && (g || k) || w && h && (p || f) || c && w && (k || f) || e && h && (g || p)
            };
            a.r.w = function(b,
                d) {
                if (b.inview) return !0;
                var c = !1,
                    k = !1,
                    e = !1,
                    g = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (c = a.viewstates[d].inview);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (e = a.viewstates[d].inview);
                    a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[d] && (k = a.viewstates[d].inview);
                    a.config && "80%" == a.config.position.left &&
                        "80%" == a.config.position.top && a.viewstates && a.viewstates[d] && (g = a.viewstates[d].inview)
                });
                return c && k || e && g
            };
            a.r.x = function(b, d) {
                if (!b.inview) return !1;
                var c = !1,
                    k = !1,
                    e = !1,
                    g = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (c = a.viewstates[d].inview);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[d] && (e = a.viewstates[d].inview);
                    a.config && "20%" == a.config.position.left &&
                        "20%" == a.config.position.top && a.viewstates && a.viewstates[d] && (k = a.viewstates[d].inview);
                    a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[d] && (g = a.viewstates[d].inview)
                });
                return c && g || e && k
            };
            a.r.y = function(b) {
                a.b.forEach(b.periscopeManagerList, function(a) {
                    a && a.killAllPixels()
                });
                b.periscopeManagerList = null
            };
            a.r.z = function(b) {
                a.m.a.azsx("adKilled", a.r.y, {
                    once: !0,
                    condition: function(a) {
                        return b.zr === a.zr
                    }
                });
                a.r.aa(b.periscopeConfig) || (b.periscopeConfig = a.r.m(b));
                b.periscopeManager = new a.r.ab(b.periscopeConfig, b.zr);
                a.r.a = b.periscopeManager.insertSuccessful;
                b.periscopeManagerList || (b.periscopeManagerList = []);
                b.periscopeManagerList.push(b.periscopeManager);
                return b.periscopeManager.insertSucceeded
            };
            a.r.a = !1;
            a.r.ac = function() {
                b = !0
            };
            a.r.ad = function() {
                return a.d.bi || !a.d.bh || "0" === a.b.aj()
            };
            a.r.n = function() {
                var b = a.r.ad(),
                    d = a.d.by || a.d.eu,
                    c = g || e;
                return b && !d ? !1 : (!a.b.j() || d) && !a.d.e && (c || h || a.r.j) && !a.d.e
            };
            a.r.ae = function(b) {
                var d = 11;
                a.d.eu && (d = 14);
                a.d.by && (d =
                    12);
                b.viewabilityMethod.pscope = d;
                return b && b.periscopeManager ? (a.aa.b(b, !1) && a.ae.a() && b.periscopeManager.killDentsuPixels(), b.periscopeManager.getViewStats()) : {
                    isVisible: !1
                }
            };
            a.r.af = function() {};
            a.r.aa = function(b) {
                if ("object" !== typeof b || "function" !== typeof b.insertableFunc || !a.b.d(b.pixels) || 0 == b.pixels.length) return !1;
                var d = !1;
                a.b.forEach(b.pixels, function(a) {
                    a.id && a.target && a.container && "object" === typeof a.position && "string" === typeof a.position.top && "string" === typeof a.position.left || (d = !0)
                });
                return !d
            };
            a.r.ag = function() {
                return p && g && 10 <= f
            };
            a.r.ah = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
            a.r.ai = function() {
                var b = {};
                return function(d) {
                    if ("string" !== typeof d) return !1;
                    if ("undefined" !== typeof b[d]) return b[d];
                    var c, k;
                    (c = d.match(a.r.ah)) && 3 == c.length && (k = c[2], c = -1 != c[1].indexOf(".") ? parseInt(c[1], 10) : parseFloat(c[1], 10));
                    if ("number" !== typeof c) return !1;
                    b[d] = {
                        val: c,
                        type: k
                    };
                    return b[d]
                }
            }();
            a.r.aj = function(d, k) {
                this.config = d;
                this.measurable = this.inserted = !1;
                this.viewstates = {};
                this.manager = k;
                this.killed = !1;
                this.cbNames = [];
                this.skipWidthCheck = !1;
                this.loopIds = [];
                this.getPeriscopeAssetURI = function() {
                    return "https://z.moatads.com/swf/p6.v3.swf"
                };
                this.getDummyPixel = function(b) {
                    if (!b) return !1;
                    var d = !1;
                    a.b.forEach(b.manager && b.manager.pixels, function(a) {
                        a.config && "dummy" === a.config.name && (d = a)
                    });
                    return d
                };
                this.resetDummyPixel = function(b) {
                    if (a.d.by && (b = b && b[0])) {
                        if (b.dummyPixel) b = b.dummyPixel;
                        else {
                            b = this.getDummyPixel(b);
                            if (!b) return;
                            b.dummyPixel = b
                        }
                        var d = b.manager && b.manager.adNum;
                        if ("number" === typeof d &&
                            !isNaN(d) && (d = A && A[d])) {
                            var c = b.config && b.config.id;
                            if ("string" === typeof c) {
                                var k = b.element && b.element.getAttribute && b.element.getAttribute("style");
                                if ("string" === typeof k) {
                                    var e = b.wrapperDiv;
                                    if (e) {
                                        var g = b.cbNames && b.cbNames[0];
                                        if (g) {
                                            var f = b.cbNames && b.cbNames[1];
                                            if (f) {
                                                var h = b.targetDoc;
                                                h && (a.ac.b(d, c, !0), l({
                                                    ad: d,
                                                    elem: e,
                                                    cbName: g,
                                                    rcbName: f,
                                                    options: {
                                                        width: b.width,
                                                        height: b.height,
                                                        style: k,
                                                        id: c,
                                                        frameborder: 0
                                                    },
                                                    noLog: !0,
                                                    isDummy: !0
                                                }), b.element = h.getElementById(c))
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                this.resetDummyPixelCB = a.o.l(a.b.cm([
                        [this]
                    ],
                    this.resetDummyPixel, this));
                this.insertIntoDOM = function() {
                    if (this.inserted) return !1;
                    var b, d, e, h;
                    e = -9999;
                    g ? (d = b = 2, a.d.eu && 10 > f && (h = e = 0)) : (d = b = 1, h = 0);
                    a.d.by && (d = b = 8);
                    this.config.dimensions && (b = this.config.dimensions.width, d = this.config.dimensions.height);
                    var p = "position: absolute; width: " + b + "px; height: " + d + "px; z-index: " + e + "; border-style: none;";
                    a.r.j && (p = "position: absolute !important; width: " + b + "px !important; height: " + d + "px !important; z-index: " + e + "!important; border-style: none !important; display: block !important; -webkit-transform: translate3d(0, 0, 0) !important;");
                    a.d.by && (p += "pointer-events: none !important;");
                    e = this.config.id;
                    var u = this.getPeriscopeAssetURI(),
                        r = this.calcPosition();
                    if (!r) return !1;
                    var r = p + "left: " + r.left + "px; top: " + r.top + "px;",
                        n = p + "left: 0px; top: 0px;",
                        v = this.config.target.ownerDocument;
                    this.targetDoc = v;
                    var B = a.b.ap(this.config.target);
                    if (!B) return !1;
                    p = "Moat#PSCB_" + A[this.manager.adNum].yg + "_" + q.floor(1E8 * q.random());
                    B[p] = this.onStateChangeCB;
                    this.cbNames.push(p);
                    if (a.d.by) {
                        var D = "Moat#PSRCB" + q.floor(1E8 * q.random());
                        B[D] = this.resetDummyPixelCB;
                        this.cbNames.push(D)
                    }
                    var m = this.config.callback,
                        y = this.config.callbackName;
                    m && y && (B[y] = m, this.cbNames.push(y));
                    B = "sco=" + encodeURIComponent(p) + "&tvs=" + this.manager.getTargetViewState();
                    v = v.createElement("div");
                    v.id = "moatPxDiv" + q.ceil(1E6 * q.random());
                    v.style.width = "0px";
                    v.style.height = "0px";
                    v.style.position = "absolute";
                    v.style.top = "0px";
                    v.style.left = "0px";
                    this.wrapperDiv = v;
                    a.b.bv(v, this.config.container);
                    u = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' +
                        b + '" height="' + d + '" style="' + r + '" id="' + e + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + u + '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' + B + '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' + u + '" quality="low" flashvars="' + B + '" bgcolor="" wmode="transparent" width="' + b + '" height="' +
                        d + '" id="' + e + 'e" name="' + e + '" style="' + n + '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>';
                    a.d.eu && (this.config.customPixel = !0, this.config.customFn = a.af.a, this.config.preserveDom = !0, this.config.argument = f, y = p);
                    if (a.d.by) {
                        if (!l({
                                ad: A[k.adNum],
                                elem: v,
                                cbName: p,
                                rcbName: D,
                                options: {
                                    width: b,
                                    height: d,
                                    style: r,
                                    id: e,
                                    frameborder: h
                                },
                                noLog: !1,
                                isDummy: this.config && "dummy" === this.config.name
                            })) return !1;
                        k.measurable = !0;
                        k.fullyMeasurable = !0;
                        k.dentsuMeasurable = !0;
                        k.anyMeasurable = !0
                    } else if (!a.d.bi) v.innerHTML = u;
                    else if (this.config.customPixel) {
                        b = c({
                            ad: A[k.adNum],
                            elem: v,
                            cbName: y,
                            name: this.config.name,
                            options: {
                                width: b,
                                height: d,
                                style: r,
                                id: e,
                                frameborder: h,
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
                        a.d.eu && (k.measurable = !0, k.fullyMeasurable = !0, k.dentsuMeasurable = !0, k.anyMeasurable = !0)
                    }
                    return this.inserted = !0
                };
                this.startIntervals = function() {
                    var b = this.getPixelElement();
                    if (!b) return !1;
                    if (8 == f && (this.manager.getTargetViewState() === u.STAGE_WIDTH || this.manager.getTargetViewState() === u.ACTIVE_STAGE_WIDTH)) {
                        var d = "positionToggle#" + this.config.id;
                        this.loopIds.push(d);
                        a.o.j()[d] || (this.positionTogglingEnabled = !0, this.positionOffsets || (this.positionOffsets = {}), a.o.g(this.positionToggle, {
                            pxSwf: b,
                            pxRef: this
                        }, 100, d))
                    }
                    this.manager.getTargetViewState() === u.STAGE_WIDTH && (d = "stageWidthLoop#" + this.config.id, this.loopIds.push(d),
                        a.o.j()[d] || a.o.g(this.stageWidthToggle, {
                            pxSwf: b,
                            pxRef: this,
                            originalWidth: b.style.width,
                            widthRe: /^[0-9\.]+/i,
                            updates: 0
                        }, 150, d));
                    this.manager.getTargetViewState() === u.ACTIVE_STAGE_WIDTH && (d = "activeStageWidthLoop#" + this.config.id, this.loopIds.push(d), a.o.j()[d] || a.o.g(this.stageWidthToggle, {
                        pxSwf: b,
                        pxRef: this,
                        originalWidth: b.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0,
                        active: !0,
                        onWidthCheck: this.config.onWidthCheck
                    }, 200, d))
                };
                this.stageWidthToggle = function(a) {
                    if (!(a.pxSwf && a.pxSwf.parentNode && a.pxRef)) return !1;
                    if (a.onWidthCheck && (a.onWidthCheck(a.pxRef), a.pxRef.skipWidthCheck)) return !0;
                    var b;
                    if (a.parsedWidth || (b = a.pxSwf.style.width.match(a.widthRe)))
                        if (a.parsedWidth || (a.parsedWidth = parseInt(b[0], 10)), 1 == a.updates ? (a.updates = 0, a.pxSwf.style.width = a.originalWidth, b = a.parsedWidth) : (a.updates = 1, b = 1 < a.parsedWidth ? a.parsedWidth - 1 : a.parsedWidth + 1, a.pxSwf.style.width = b + "px"), a.active && a.pxSwf.currentPW) try {
                            a.pxSwf.currentPW(b)
                        } catch (d) {}
                };
                this.positionToggle = function(a) {
                    if (!a.pxRef || !a.pxRef.element) return !1;
                    0 >
                        a.pxRef.positionOffsets.yOffset ? (a.pxRef.positionOffsets.yOffset = 0, a.pxRef.positionOffsets.xOffset = 0) : (a.pxRef.positionOffsets.yOffset = -2E3, a.pxRef.positionOffsets.xOffset = -2E3);
                    a.pxRef.updatePosition(!0)
                };
                this.onStateChange = function(b) {
                    if (!this.measurable) {
                        this.measurable = !0;
                        var d;
                        b && b[0] && b[0].rev && (d = b[0].rev.match(a.r.ak)) && 3 == d.length && (a.r.al = d[1], a.r.i = d[2]);
                        this.updateFocusState();
                        this.startIntervals()
                    }
                    this.inserted && this.killed ? (this.killed = !1, this.updateFocusState(), this.startIntervals()) :
                        (a.b.forEach(b, function(a) {
                            this.viewstates[a.name] = a
                        }, this), this.manager.onStateChange(this, b))
                };
                this.onStateChangeCB = a.o.l(a.b.cm([], this.onStateChange, this));
                this.calcPosition = function() {
                    var b = {},
                        d = this.config.position.left,
                        c = a.r.ai(this.config.position.top),
                        d = a.r.ai(d),
                        k, e;
                    this.config.positionTarget ? this.config.positionTargetWindow ? this.targetRect = new a.y.l(this.config.positionTarget, this.config.positionTargetWindow, null, !0) : (this.targetRect = new a.y.l(this.config.positionTarget, null, null, !0), this.config.positionTargetWindow =
                        this.targetRect.win) : (this.targetRect = this.targetRect ? new a.y.l(this.config.target, this.targetRect.win, null, !0) : new a.y.l(this.config.target, null, null, !0), 0 == this.targetRect.left && 0 == this.targetRect.right && 0 == this.targetRect.top && 0 == this.targetRect.bottom && "EMBED" == this.targetRect.el.nodeName && null == this.targetRect.el.offsetParent && this.config.target.parentNode && (this.targetRect = new a.y.l(this.config.target.parentNode, null, null, !0), this.config.positionTarget = this.config.target.parentNode));
                    k = a.y.r("left",
                        this.targetRect.win);
                    e = a.y.r("top", this.targetRect.win);
                    var g;
                    this.wrapperDiv && (g = this.wrapperDiv.offsetParent) && "BODY" !== g.nodeName ? this.offsetRect = this.offsetRect ? new a.y.l(g, this.offsetRect.win, null, !0) : new a.y.l(g, null, null, !0) : this.offsetRect = {
                        left: -k,
                        top: -e
                    };
                    if (!c || !d) return !1;
                    if ("%" == c.type) b.relativeTop = c.val / 100 * this.targetRect.height, b.top = this.targetRect.top - this.offsetRect.top + c.val / 100 * this.targetRect.height;
                    else if ("px" == c.type) b.relativeTop = c.val, b.top = this.targetRect.top - this.offsetRect.top +
                        c.val;
                    else return !1;
                    if ("%" == d.type) b.relativeLeft = d.val / 100 * this.targetRect.width, b.left = this.targetRect.left - this.offsetRect.left + d.val / 100 * this.targetRect.width;
                    else if ("px" == d.type) b.relativeLeft = d.val, b.left = this.targetRect.left - this.offsetRect.left + d.val;
                    else return !1;
                    b && b.top && b.left && this.targetRect && (b.top == this.targetRect.top + this.targetRect.height && --b.top, b.left == this.targetRect.left + this.targetRect.width && --b.left);
                    return b
                };
                this.maxPositionUpdateInterval = 200;
                this.getStyle = function(a) {
                    var b;
                    try {
                        b = a && a.style
                    } catch (d) {}
                    return b
                };
                this.updatePosition = function(a) {
                    var b = (new x).getTime(),
                        d;
                    if (!this.element || !(d = this.getStyle(this.element)) || this.killed || !a && b - this.lastPositionUpdate < this.maxPositionUpdateInterval) return !1;
                    this.lastPositionUpdate = b;
                    a = this.calcPosition();
                    if (!a) return !1;
                    this.positionOffsets && (a.left += this.positionOffsets.xOffset || 0, a.top += this.positionOffsets.yOffset || 0);
                    d.left = this.width + a.relativeLeft > this.targetRect.width ? q.floor(a.left - this.width) + "px" : 0 == a.relativeLeft ?
                        q.floor(a.left) + "px" : q.floor(a.left - .5 * this.width) + "px";
                    d.top = this.height + a.relativeTop > this.targetRect.height ? q.floor(a.top - this.height) + "px" : 0 == a.relativeTop ? q.floor(a.top) + "px" : q.floor(a.top - .5 * this.height) + "px";
                    return !0
                };
                this.updateFocusState = function() {
                    var a = this.getPixelElement();
                    if (a && this.measurable) try {
                        a.updateFocusState(this.currentFocusState)
                    } catch (b) {}
                };
                this.kill = function(b) {
                    var d = this.getPixelElement(),
                        c = a.b.ap(d),
                        k = a.b.ap(this.config.target);
                    c && d && d.dataMoatTIDS && a.b.forEach(d.dataMoatTIDS,
                        function(a) {
                            c.clearTimeout(a)
                        });
                    a.b.forEach(this.loopIds, function(b) {
                        a.o.i(b)
                    });
                    for (var d = 0, e = this.cbNames.length; d < e; d++) try {
                        k[this.cbNames[d]] = null, delete k[this.cbNames[d]]
                    } catch (g) {}
                    this.targetDoc = null;
                    return this.wrapperDiv && this.wrapperDiv.parentNode ? (this.wrapperDiv.parentNode.removeChild(this.wrapperDiv), this.killed = !0, this.inserted = !1, this.element = this.wrapperDiv = null, b && (this.config && this.config.killFn && "function" === typeof this.config.killFn && (this.config.killFn(), this.config.killFn = null),
                        this.config = null), !0) : !1
                };
                this.getPixelElement = function() {
                    var a, b, d = this.config && this.config.id;
                    if (this.targetDoc && d) {
                        a = this.targetDoc.getElementById(d);
                        if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a;
                        a = this.targetDoc.getElementById(d + "e");
                        if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a
                    }
                    return !1
                };
                if ("embed" === d.container.nodeName || "object" === d.container.nodeName) {
                    var e;
                    a.b.forEach(a.b.ar(d.container), function(a) {
                        if ("embed" !== a.nodeName && "object" !== a.nodeName) return e = a, !1
                    });
                    if (!e) return !1;
                    this.config.container =
                        e
                }
                if (!b) {
                    var h = document.getElementById("moatPxCont" + this.manager.contId);
                    h || (h = document.createElement("div"), h.id = "moatPxCont" + this.manager.contId, h.offsetWidth = this.config.target.offsetWidth, h.offsetHeight = this.config.target.offsetHeight, h.offsetTop = this.config.target.offsetTop || "0px", h.offsetLeft = this.config.target.offsetLeft || "0px", h.style.position = "absolute", h.style.overflow = "hidden", h.style.zIndex = -9999, a.b.bv(h, this.config.container));
                    this.config.container = h;
                    this.config.container && !this.manager.container &&
                        (this.manager.container = this.config.container)
                }
                if (!this.insertIntoDOM()) return !1;
                this.element = this.targetDoc.getElementById(this.config.id);
                if (!this.element) return !1;
                h = new a.y.l(this.element, null, null, !0);
                this.width = h.width;
                this.height = h.height;
                if (!this.updatePosition()) return !1;
                this.currentFocusState = a.focus.pageIsVisible();
                this.focusCheckingLoop = function(b) {
                    var d = a.focus.pageIsVisible();
                    if (!b.pxRef) return !1;
                    var c = b.pxRef;
                    c.currentFocusState != d && (c.currentFocusState = !c.currentFocusState, c.killed ||
                        c.updateFocusState(), a.d.by && (b = k && "number" === typeof k.adNum && A[k.adNum], c = c && c.config && c.config.id, b && c && a.ac && a.ac.call(b, c, "(function(){var innerFunction = window && window['" + (d ? "onFocus" : "onBlur") + "'];if (typeof innerFunction === 'function') { innerFunction(); } }())")))
                };
                this.rebuildOnFocusLoss = function() {
                    g && (this.currentFocusState || this.killed || !this.inserted ? this.currentFocusState && this.killed && !this.inserted && (this.insertIntoDOM.call(this), (this.element = this.targetDoc.getElementById(this.config.id)) &&
                        this.updatePosition()) : this.kill())
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
                var h = "focusCheckingLoop#" + this.config.id,
                    p = "positionUpdateLoop#" + this.config.id;
                this.loopIds.push(h);
                this.loopIds.push(p);
                a.o.g(this.focusCheckingLoop, {
                    pxRef: this
                }, 200, h);
                a.o.g(this.positionUpdateLoop, {
                        pxRef: this
                    }, 500,
                    p);
                this.inserted = !0;
                this.insertionTime = (new x).getTime()
            };
            a.r.ak = /([0-9a-z]+-[a-z]+)-(.*)/i;
            a.r.ab = function(c, k) {
                this.insertedAllSuccessfully = this.insertSuccessful = !1;
                this.pixels = [];
                this.adNum = k;
                this.anyInview = this.fullyInview = this.inview = !1;
                this.edgesInView = {};
                this.edgesInView.tlPixelInview = !1;
                this.twentyPercentInView = this.dentsuInview = this.dentsuMeasurable = this.anyMeasurable = this.fullyMeasurable = this.measurable = this.reachedAnyInview = this.reachedFullyInview = this.reachedInview = this.edgesInView.brPixelInview = !1;
                this.getPixelByName = function(b) {
                    var d;
                    a.b.forEach(this.pixels, function(a) {
                        if (a.config.name && a.config.name == b) return d = a, !1
                    });
                    return d || !1
                };
                this.getTargetViewState = function() {
                    var b = u.FRAME_RATE;
                    !g && !e || a.d.eu || (b = u.ACTIVE_STAGE_WIDTH);
                    a.r.j && !a.d.by && (b = u.ACTIVE_STAGE_WIDTH);
                    a.d.g && a.d.g.sky && a.d.g.sky.adt && (b = u.FRAME_RATE);
                    return b
                };
                this.onStateChange = function(b, c) {
                    var k = this.getTargetViewState(),
                        e = a.focus.pageIsVisible(),
                        g = "undefined" != typeof A && A[this.adNum];
                    b.targetRect && (this.isBigAd = a.ab.a(b.targetRect.calcArea()),
                        g && g.viewstats && (g.viewstats.isBigAd = this.isBigAd));
                    this.anyMeasurable || (this.anyMeasurable = !0);
                    this.fullyMeasurable || (this.fullyMeasurable = a.r.p(this, k));
                    this.measurable || (this.measurable = a.r.q(this, k), a.r.am = (new x).getTime());
                    this.dentsuMeasurable || (this.dentsuMeasurable = a.r.r(this, k));
                    if (1 == c.length) {
                        if (c[0].name != k) return !1
                    } else {
                        var f = !0;
                        a.b.forEach(c, function(a) {
                            if (a.name == k) return f = !1
                        });
                        if (f || !e) return !1
                    }
                    this.anyMeasurable && (this.anyInview = a.r.s(this, k));
                    this.measurable && ((this.anyInview =
                        a.r.s(this, k)) && !this.reachedAnyInview && (this.reachedAnyInview = !0), this.inview = a.r.t(this, k), this.thirtyPercentInView = a.r.v(this, k), this.inview && !this.reachedInview && (this.reachedInview = !0), !d && a.r.j && g && (d = !0, a.t.b(g)));
                    this.fullyMeasurable && (this.fullyInview = a.r.u(this, k)) && !this.reachedFullyInview && (this.reachedFullyInview = !0);
                    this.dentsuMeasurable && (this.dentsuInview = a.r.x(this, k), this.twentyPercentInView = a.r.w(this, k));
                    a.m.a.zaxs("periscope:onStateChange", this.adNum)
                };
                this.getViewStats = function() {
                    var b =
                        0;
                    if (this.fullyInview) b = 1;
                    else if (this.dentsuInview) b = .8;
                    else if (this.inview) b = .5;
                    else if (this.thirtyPercentInView) b = .3;
                    else if (this.twentyPercentInView) b = .2;
                    else if (this.anyInview || this.reachedAnyInview && !this.sentReachedAnyInview) this.sentReachedAnyInview = !0, b = .01;
                    var d = "pscope" === a.aa.a(this.adNum);
                    this.edgesInView && d && a.m.a.zaxs("adEdgesViewStatus", this.adNum, {
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
                this.getPercentViewable = function(b, d) {
                    var c = this.getTargetViewState(),
                        k = [],
                        e = b * d,
                        g, f, h;
                    a.b.forEach(this.pixels, function(a) {
                        a.measurable && a.viewstates && a.viewstates[c] && a.viewstates[c].inview && (f = parseInt(a.config.position.top), -1 < a.config.position.top.indexOf("%") && (f = f / 100 * d), k.push(f))
                    });
                    0 === k.length ? g = 0 : (g = q.min.apply(null,
                        k), h = q.max.apply(null, k), g = b * (h - g));
                    return q.round(g / e * 100)
                };
                this.killDentsuPixels = function() {
                    a.b.forEach(this.pixels, function(b) {
                        !b.config || "dentsuTopLeft" !== b.config.name && "dentsuBottomRight" !== b.config.name || ((a.d.by || a.d.eu) && a.ac.b(A[b.manager.adNum], b.config.id), b.kill())
                    })
                };
                this.rebuildPixelTargets = function(b, d) {
                    if (!b || !d) return !1;
                    a.b.forEach(this.pixels, function(a) {
                        a.rebuildTarget(b, d)
                    })
                };
                this.killAllPixels = function() {
                    a.b.forEach(this.pixels, function(a) {
                        a.kill(!0)
                    });
                    this.pixels = []
                };
                this.updateContainer =
                    function(b) {
                        function d(b, e) {
                            var g = k[e],
                                f = k.style && k.style[b];
                            if (!a.b.ci(g))
                                if (a.b.ci(f)) g = f;
                                else return !1;
                            if (c[e] === g || !c.style) return !1;
                            c.style[b] = g + "px"
                        }
                        b.container || (b.container = document.getElementById("moatPxCont" + b.contId));
                        b.adElement || (b.adElement = A[b.adNum] && A[b.adNum].aa);
                        var c = b.container,
                            k = b.adElement;
                        if (!c || !k) return !1;
                        d("left", "offsetLeft");
                        d("top", "offsetTop");
                        d("width", "offsetWidth");
                        d("height", "offsetHeight")
                    };
                if (c.insertableFunc()) {
                    var f = 0;
                    this.contId = q.ceil(1E6 * q.random());
                    a.b.forEach(c.pixels,
                        function(b, d) {
                            this.pixels.push(new a.r.aj(b, this));
                            this.pixels[d].inserted && (f++, this.insertSuccessful = !0)
                        }, this);
                    this.insertedAllSuccessfully = f === this.pixels.length;
                    b || a.o.g(this.updateContainer, this, 200, "pixelContainerResizeLoop#" + this.contId)
                }
            }
        })(m);
        (function(a) {
            function l(a, b, d) {
                a.IR5.MIN[d] = q.min(b, a.IR5.MIN[d]) || b || 1;
                a.IR5.MAX[d] = q.max(b, a.IR5.MAX[d]) || b
            }

            function c(b) {
                if (n) return !0;
                var d = t.swde.azsx("focusStateChange", function(d) {
                    var c = {
                        type: "blur"
                    };
                    d || (a.ag.g(c, b), a.ag.h(c, b))
                });
                a.m.a.azsx("adKilled",
                    function() {
                        t.swde.sxaz("focusStateChange", {
                            id: d
                        })
                    }, {
                        once: !0,
                        condition: function(a) {
                            return b.zr == a.zr
                        }
                    });
                n = !0
            }

            function f(a, b) {
                b.be = q.max("undefined" !== typeof b.be ? b.be : 0, a - b.bf);
                "undefined" === typeof b.by && 500 <= b.be && (b.by = b.bk)
            }

            function g(b) {
                b.az === a.ag.a.d.a ? b.az = a.ag.a.d.b : b.az === a.ag.a.d.b && (b.az = a.ag.a.d.a)
            }

            function h(b) {
                b.ba === a.ag.a.d.a ? b.ba = a.ag.a.d.b : b.ba === a.ag.a.d.b && (b.ba = a.ag.a.d.a)
            }

            function e(b) {
                b.ax === a.ag.a.b.a ? b.ax = a.ag.a.b.b : b.ax === a.ag.a.b.b && (b.ax = a.ag.a.b.a)
            }

            function d(b) {
                b.ay ===
                    a.ag.a.c.a ? b.ay = a.ag.a.c.b : b.ay === a.ag.a.c.b && (b.ay = a.ag.a.c.a)
            }

            function b(a, b) {
                "undefined" === typeof b.bk && (b.bk = 0);
                b.bk += a - b.bo;
                b.bo = a
            }

            function k(a, b) {
                "undefined" === typeof b.bl && (b.bl = 0);
                b.bl += a - b.bp;
                b.bp = a
            }

            function p(a, b) {
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
            a.ag = {};
            var n = !1;
            a.ag.a = {};
            a.ag.a.a = {};
            a.ag.a.a.a = 0;
            a.ag.a.a.b = 1;
            a.ag.a.b = {};
            a.ag.a.b.a = 0;
            a.ag.a.b.b = 1;
            a.ag.a.c = {};
            a.ag.a.c.a = 0;
            a.ag.a.c.b = 1;
            a.ag.a.d = {};
            a.ag.a.d.a = 0;
            a.ag.a.d.b = 1;
            a.ag.a.e = {};
            a.ag.a.e.a = 0;
            a.ag.a.e.b = 1;
            a.ag.a.f = {};
            a.ag.a.f.a = 0;
            a.ag.a.f.b = 1;
            a.ag.a.f.c = 2;
            a.ag.b = function(a) {
                l(a, a.aj, "x");
                l(a, a.ak, "y");
                a.IR5.AREA = (a.IR5.MAX.x - a.IR5.MIN.x) * (a.IR5.MAX.y - a.IR5.MIN.y)
            };
            a.ag.c =
                function(b) {
                    function d() {
                        500 <= (new x).getTime() - Aa && (a.ag.d({
                            type: "park"
                        }, b), clearInterval(k), b.au = a.ag.a.a.a)
                    }
                    var c = b.au;
                    if (c === a.ag.a.a.a) {
                        Aa = (new x).getTime();
                        var k = a.o.e(d, 50);
                        b.au = a.ag.a.a.b
                    } else c === a.ag.a.a.b && (Aa = (new x).getTime())
                };
            a.ag.e = function(b) {
                function d() {
                    3E3 <= (new x).getTime() - Ba && (a.ag.f({
                        type: "park"
                    }, b), clearInterval(k), b.av = a.ag.a.a.a)
                }
                var c = b.av;
                if (c === a.ag.a.a.a) {
                    Ba = (new x).getTime();
                    var k = a.o.e(d, 50);
                    b.av = a.ag.a.a.b
                } else c === a.ag.a.a.b && (Ba = (new x).getTime())
            };
            a.ag.g = function(d,
                k) {
                var e = d.type;
                c(k);
                if (k.az === a.ag.a.d.a) {
                    if ("mouseover" === e || "mousemove" === e) k.bo = (new x).getTime(), g(k)
                } else if (k.az === a.ag.a.d.b) {
                    "mousemove" === e && b((new x).getTime(), k);
                    if ("mouseout" === e || "blur" === e) b((new x).getTime(), k), g(k);
                    "scooper" === e && b((new x).getTime(), k)
                }
            };
            a.ag.h = function(b, d) {
                var e = b.type;
                c(d);
                if (d.ba === a.ag.a.d.a) {
                    if ("mouseover" === e || "mousemove" === e) d.bp = (new x).getTime(), h(d)
                } else if (d.ba === a.ag.a.d.b) {
                    "mousemove" === e && k((new x).getTime(), d);
                    if ("mouseout" === e || "blur" === e) k((new x).getTime(),
                        d), h(d);
                    "scooper" === e && k((new x).getTime(), d)
                }
            };
            a.ag.d = function(b, d) {
                if (2 != d.an) {
                    var c = b.type;
                    if (d.ax === a.ag.a.b.a) {
                        if ("mouseover" === c || "mousemove" === c) d.bq = (new x).getTime(), d.bs = (new x).getTime(), e(d)
                    } else d.ax === a.ag.a.b.b && ("mousemove" !== c && "mouseout" !== c || p((new x).getTime(), d), "park" === c && p((new x).getTime() - 500, d), "mouseout" !== c && "park" !== c || e(d))
                }
            };
            a.ag.f = function(b, c) {
                if (2 != c.an) {
                    var k = b.type;
                    if (c.ay === a.ag.a.c.a) {
                        if ("mouseover" === k || "mousemove" === k) c.br = (new x).getTime(), c.bt = (new x).getTime(),
                            d(c)
                    } else c.ay === a.ag.a.c.b && ("mousemove" !== k && "mouseout" !== k || u((new x).getTime(), c), "park" === k && u((new x).getTime() - 3E3, c), "mouseout" !== k && "park" !== k || d(c))
                }
            };
            a.ag.i = function(b, d) {
                var c = b.type;
                if (d.bb == a.ag.a.e.a) {
                    if ("mouseover" == c || "mousemove" == c) d.bf = (new x).getTime(), d.bb = a.ag.a.e.b
                } else d.bb == a.ag.a.e.b && ("mouseout" == c ? (f((new x).getTime(), d), d.bb = a.ag.a.e.a) : "mousemove" != c && "scooper" != c || f((new x).getTime(), d))
            }
        })(m);
        (function(a) {
            function l(c) {
                var f = !1;
                if (a.d.dk()) return c.viewabilityMethod.sframe =
                    3, a.ai.a(c);
                if (a.d.cd) return c.viewabilityMethod.sframe = 4, a.aj.a(c);
                if (a.d.ch()) return c.viewabilityMethod.sframe = 5, a.ak.a(c);
                if (a.d.bq()) return c.viewabilityMethod.sframe = 6, a.al.a(c);
                a.d.cn() && (c.viewabilityMethod.sframe = 7, f = a.am.a(c), 0 < f && (a.d.co = !0));
                return f
            }
            a.ah = {};
            a.ah.a = function(c) {
                var f = a.b.cc(c);
                f && a.ab.a(f) ? (c.viewstats || (c.viewstats = {}), c.viewstats.isBigAd = !0, f = .3) : f = .5;
                f = (c = l(c)) && !isNaN(c) && c >= f;
                f = {
                    isVisible: f,
                    isFullyVisible: f && .98 <= c,
                    percv: c
                };
                .8 <= c && (f.isDentsuVisible = !0);
                return f
            }
        })(m);
        (function(a) {
            a.q = {};
            try {
                var l = -1 < navigator.platform.indexOf("Mac") ? 102 : 117
            } catch (h) {
                l = 117
            }
            var c = "undefined" !== typeof window.devicePixelRatio,
                f = a.d.e && c && "undefined" !== typeof window.innerHeight && "undefined" !== typeof window.outerHeight && q.round(window.devicePixelRatio * (a.d.g.outerHeight - a.d.g.innerHeight)),
                g = function() {
                    var c = !1;
                    if (57 <= a.d.es()) return !1;
                    try {
                        c = "undefined" !== typeof window.mozInnerScreenX && "undefined" !== typeof window.screenX
                    } catch (e) {}
                    return !a.d.e && c
                }();
            a.q.b = function(g, e) {
                g.viewabilityMethod.pscope =
                    13;
                var d, b, k, f = {
                    isVisible: !1,
                    isFullyVisible: !1,
                    percv: 0
                };
                try {
                    k = g.aa.getBoundingClientRect();
                    var u = e || g.WINDOW || a.b.ap(g.aa),
                        n = a.d.s(u),
                        r = a.y.o(k, n),
                        z = u.mozInnerScreenX,
                        v = u.mozInnerScreenY,
                        B = {
                            left: r.left + z,
                            right: r.right + z,
                            top: r.top + v,
                            bottom: r.bottom + v
                        },
                        D = window.screenX,
                        m = window.screenY,
                        w = a.y.o(B, {
                            left: D,
                            right: D + window.outerWidth,
                            top: m + l / (c ? window.devicePixelRatio : 1),
                            bottom: m + window.outerHeight
                        }),
                        C = k.width * k.height,
                        E = (w.right - w.left) * (w.bottom - w.top) / C;
                    "pscope" === a.aa.a(g.zr) && a.m.a.zaxs("rectsAvailable",
                        g.zr, B, w);
                    d = {
                        area: C,
                        percv: E
                    };
                    b = a.y.h(d, g)
                } catch (F) {}
                k = a.y.c;
                "undefined" !== typeof d && "undefined" !== typeof b && (f.isVisible = d.percv >= b, f.isFullyVisible = d.percv >= k, f.percv = d.percv, .8 <= d.percv && (f.isDentsuVisible = !0));
                return f
            };
            a.q.a = function() {
                return g
            };
            a.q.c = function() {
                var a = {};
                a.dl = Number(g);
                "number" !== typeof f || isNaN(f) || (a.dn = f);
                return a
            }
        })(m);
        (function(a) {
            function l(a) {
                var b = 0,
                    c;
                return function() {
                    var e = (new x).getTime();
                    150 < e - b && (c = a.apply(this, arguments), b = e);
                    return c
                }
            }

            function c(d, b) {
                var c = [];
                (new x).getTime();
                var e = {},
                    g = {};
                this.getInViewTime = function(a) {
                    return e[a]
                };
                this.addNewCounter = function(a) {
                    e[a] || (c.push(a), e[a] = 0, g[a] = void 0)
                };
                var f = new a.y.g(d);
                this.getQS = function() {};
                this.update = function(d, h, l) {
                    f.checkVisibleArea();
                    for (l = 0; l < c.length; l++) {
                        var B = c[l],
                            D = f.customVisible(B).isVisible,
                            m = b(d),
                            w;
                        w = a.focus.pageIsVisible();
                        if ((m = D && w && !m) && g[B]) e[B] += h;
                        else if (m || g[B]) D = q.round(h / 2), e[B] += D;
                        g[B] = m
                    }
                    a.m.a.zaxs("adtechCounterUpdate", d)
                }
            }

            function f(d) {
                function b(a) {
                    "undefined" !== typeof d.overrideViewMethod &&
                        (a.viewabilityMethod[z] = d.overrideViewMethod);
                    return D(a)
                }
                var c = d.isVisibleFn,
                    e = d.isMeasurableFn,
                    f = d.pauseCheckingFn,
                    h = d.careFoc,
                    l = d.qsKeys,
                    z = d.counterLabel,
                    v = z;
                a.d.an();
                var B = [],
                    D = c,
                    m = 0,
                    w = 0,
                    C = 0,
                    E = 0,
                    F = 0,
                    P = 0,
                    L = 0,
                    Q = 0;
                (new x).getTime();
                var X = !1,
                    Y = !1,
                    U = !1,
                    t = !1,
                    y, oa, ga, xa, pa = 0,
                    S = 0,
                    A = !1,
                    qa = !1,
                    H = 0,
                    G = 0,
                    K = 0,
                    J = !1,
                    O = !1,
                    I = !1,
                    R = a.d.e,
                    M, T;
                if (0 === l) var da = "as",
                    ha = "ag",
                    aa = "an",
                    ea = "ck",
                    ia = "kw",
                    ja = "ah",
                    ka = "aj",
                    Z = "pg",
                    W = "pf",
                    la = "gi",
                    fa = "gf",
                    ba = "ix",
                    V = "gg",
                    N = "ez",
                    A = !0;
                else 1 === l ? (da = "cc", ha = "bw", aa = "bx", ea = "ci", ia = "jz",
                    ja = "bu", ka = "dj") : 2 === l ? (da = "cg", ha = "ce", aa = "cf", ea = "cj", ia = "ts", ja = "ah", ka = "dk", la = "gj", fa = "gb", ba = "ig", V = "ge", N = "ez") : 3 === l ? (da = "cg", ha = "ce", aa = "cf", ea = "cj", ia = "ts", ja = "ah", ka = "dk", la = "gi", fa = "gf", ba = "ix", V = "gg", N = "ez") : 5 === l ? (da = "aa", ha = "ad", aa = "cn", ea = "co", ia = "cp", ja = "ah", ka = "cq", la = "gn", fa = "gk", ba = "ik", V = "gl", N = "ez") : 6 === ("number" === typeof l ? l : l.type) && (da = l.otsKey, ha = l.ivtKey, aa = l.lastivtKey, ea = l.ivtAtOtsKey, ia = l.timeToViewSendKey, ja = l.timeToViewAskKey, ka = l.visOnLoadKey, la = l.fullyIvtOtsKey, fa =
                    l.fullyIvtKey, ba = l.maxfullyIvtKey, V = l.lastFullyIvtKey, N = l.wasPartiallyInviewKey);
                this.getLabel = function() {
                    return v
                };
                this.addListener = function(b) {
                    var d = !1;
                    a.b.forEach(B, function(a) {
                        if (a === b) return d = !0, !1
                    });
                    d || B.push(b)
                };
                this.removeListener = function(a) {
                    for (var b, d = B.length; b < d; b++) {
                        var c = !1,
                            k = !1,
                            e;
                        for (e in B[b])
                            if (k || (k = !0), B[b][e] !== a[e]) {
                                c = !0;
                                break
                            }
                        k && !c && B.splice(b, 1)
                    }
                };
                this.hadOTS = function() {
                    return U
                };
                this.hadFullOTS = function() {
                    return t
                };
                this.hadFIT = function() {
                    return 0 < w
                };
                this.hadVideo2SecOTS =
                    function() {
                        return "undefined" != typeof _hadVideo2SecOts && _hadVideo2SecOts
                    };
                this.hadDentsuVideoOTS = function() {
                    return !1
                };
                this.hadDentsuDisplayOTS = function() {
                    return J
                };
                this.getInViewTime = function() {
                    return m
                };
                this.getFullyInViewThreshold = function() {
                    return .98
                };
                this.getLastInviewPercent = function() {
                    return H
                };
                this.getLastInviewPercentWithThresholdCap = function() {
                    return .98 <= H ? 1 : H
                };
                this.getCareAboutFocus = function() {
                    return h
                };
                this.getPauseCheckingFn = function() {
                    return f
                };
                this.visible = function() {
                    return X
                };
                this.fullyVisible =
                    function() {
                        return Y
                    };
                this.wasPartiallyInview = function() {
                    return qa
                };
                this.getFullInviewTimeTotal = function() {
                    return w
                };
                this.getMaximumContinuousInViewTime = function() {
                    return q.max(F, P)
                };
                this.getMaximumContinuousFullyInViewTime = function() {
                    return q.max(Q, L)
                };
                this.getDentsuInViewTime = function() {
                    return G
                };
                this.getDentsuAudibleAndVisibleTime = function() {
                    return 0
                };
                this.isAdMeasurable = function(a) {
                    var b = "function" === typeof e && e(a);
                    a && a.isMeasurabilityDisabled() && (b = !1);
                    return b
                };
                this.adStartedOnScreen = function() {
                    return xa
                };
                this.update = function(d, c, k) {
                    if (T === k) return !1;
                    T = k;
                    k = "function" === typeof e && e(d);
                    d && d.isMeasurabilityDisabled() && (k = !1);
                    if (!k) return !1;
                    var C = m || 0,
                        z = w || 0;
                    k = !1;
                    var D = b(d);
                    D.rect && (d.elementRect = D.rect, d.currentWidth = d.elementRect.right - d.elementRect.left, d.currentHeight = d.elementRect.bottom - d.elementRect.top);
                    d.viewabilityPercent[v] = a.b.ci(D.percv) ? q.round(100 * D.percv) : "-";
                    "number" === typeof D.area && (d.ADAREA = D.area);
                    var E = D.isVisible,
                        V = D.isFullyVisible,
                        N = D.isDentsuVisible,
                        x = D.percv && 0 < D.percv;
                    H = D.percv;
                    !C && D.percv && a.m.a.zaxs("adEntersView", d);
                    var S = f(d),
                        S = (!h || a.t.f(d)) && !S;
                    a.m.a.zaxs("adCheckingState", d, v, S);
                    E = E && S;
                    V = V && S;
                    x = x && S;
                    V && a.m.a.zaxs("adFullyVisible", d, v);
                    I = N && S;
                    !qa && x && (qa = !0);
                    if (E && X) m += c, F += c;
                    else if (E || X) N = q.round(c / 2), m += N, F += N;
                    if (V && Y) w += c, L += c;
                    else if (V || Y) N = q.round(c / 2), w += N, L += N;
                    if (I && O) G += c, K += c;
                    else if (I || O) N = q.round(c / 2), G += N, K += N;
                    !U && 1E3 <= F && (k = U = !0, this.timeToView = y = d.counters.query()[ja], oa = m);
                    !t && 1E3 <= L && (t = !0, a.m.a.zaxs("fullOtsReached", d, v));
                    "undefined" === typeof ga &&
                        (N = d.counters.query().bu, 1E3 >= N ? E && (ga = !0) : ga = !1);
                    "undefined" === typeof xa && (N = d.counters.query().bu, 1E3 >= N ? x && (xa = !0) : xa = !1);
                    (d.el = R) && "undefined" === typeof M && 2 !== l && 3 !== l && D.elGeo && (N = g().y + D.elGeo.foldTop, S = D.elGeo.threshold * D.elGeo.elHeight, N = N > a.aa.c() - S, 0 < D.elGeo.totalArea && (M = N, d.dn = M));
                    A && x && (pa = q.min(q.max(H, pa), 1));
                    P < F && (P = F);
                    Q < L && (Q = L);
                    E || (F = 0);
                    V || (L = 0);
                    X = E;
                    Y = V;
                    1E3 <= K && (J = !0);
                    I || (K = 0);
                    O = I;
                    a.b.forEach(B, function(a) {
                        var b = D && D.percv,
                            b = "number" === typeof b && 100 * b;
                        if (a.onInViewTimeCount) a.onInViewTimeCount(c,
                            m - C, b, v);
                        if (a.onFullyInViewTimeCount) {
                            var d = q.max(w - z, 0);
                            a.onFullyInViewTimeCount(c, d, b, v)
                        }
                    });
                    return k
                };
                this.getQS = function(b, d, c) {
                    C > m && (C = m);
                    E > w && (E = w);
                    b[da] = Number(U);
                    b[ha] = m;
                    b[aa] = C;
                    if (0 === l || 2 === l || 3 === l || 5 === l || ("number" === typeof l ? l : l.type)) t && la && (b[la] = 1), d = (d = 0 === l && c && "sframe" === c) || a.d.cw() && !a.p.c() && 0 === l, fa && !d && (b[fa] = w, b[V] = E, d = this.getMaximumContinuousFullyInViewTime(), b[ba] = d, v === c && (b.ic = d)), qa && N && (b[N] = 1);
                    "undefined" !== typeof oa && (b[ea] = oa);
                    "undefined" !== typeof y && (b[ia] = y);
                    "undefined" !==
                    typeof ga && (b[ka] = Number(ga));
                    !0 === A && (c = q.round(100 * pa), d = q.round(100 * S), b[Z] = c, b[W] = d, S = pa);
                    "undefined" !== typeof M && (b.ib = Number(M));
                    C = m;
                    E = w
                }
            }

            function g() {
                var d = a.d.g,
                    b = d.document;
                return {
                    y: void 0 !== d.pageYOffset ? d.pageYOffset : (b.documentElement || b.body.parentNode || b.body).scrollTop
                }
            }
            a.aa = {};
            var h = {},
                e = {};
            a.aa.c = function() {
                return sa ? a.d.s(a.d.g).height : 750
            };
            a.aa.d = function() {
                if (!a.b.l() && !a.b.m()) return !1;
                var d = a.d.bn();
                return d = (d = d || a.s.d()) || a.d.cn()
            };
            a.aa.e = function() {
                if (!a.aa.d()) return !1;
                var d =
                    a.d.bu(),
                    d = d | a.s.e();
                return d |= a.d.co
            };
            a.aa.f = function(d) {
                var b = d.zr;
                a.m.a.azsx("adKilled", a.aa.g, {
                    once: !0,
                    condition: function(a) {
                        return a.zr == d.zr
                    }
                });
                h[b] = h[b] || {};
                d.viewstats = {
                    isBigAd: !1
                };
                if (d && d.isMeasurabilityDisabled()) return !1;
                if (a.d.dj() || a.d.an().isInApp && a.d.e) {
                    var k = l(a.y.f),
                        g;
                    g = a.d.j() ? a.d.cw() ? new f({
                        isVisibleFn: a.p.g,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.t.c,
                        overrideViewMethod: 15,
                        careFoc: !1,
                        qsKeys: 0,
                        counterLabel: "strict"
                    }) : a.d.dy() ? new f({
                        isVisibleFn: a.s.f,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.t.c,
                        careFoc: !1,
                        qsKeys: 0,
                        counterLabel: "strict"
                    }) : new f({
                        isVisibleFn: a.s.f,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.t.c,
                        careFoc: !0,
                        qsKeys: 0,
                        counterLabel: "strict"
                    }) : new f({
                        isVisibleFn: k,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.t.c,
                        careFoc: !0,
                        qsKeys: 0,
                        counterLabel: "strict"
                    });
                    h[b].strict = g;
                    k = new f({
                        isVisibleFn: k,
                        isMeasurableFn: a.d.dj,
                        pauseCheckingFn: a.t.c,
                        careFoc: !1,
                        qsKeys: 1,
                        counterLabel: "lax"
                    });
                    h[b].lax = k
                } else !0 !== d.isSkin && a.q && a.q.a() && (k = new f({
                    isVisibleFn: a.q.b,
                    isMeasurableFn: a.d["do"],
                    pauseCheckingFn: a.t.c,
                    careFoc: !0,
                    qsKeys: 3,
                    counterLabel: "pscope"
                }), h[b].pscope = k);
                a.r && a.r.n() && !h[b].pscope && (k = new f({
                    isVisibleFn: a.r.ae,
                    isMeasurableFn: a.d.dp,
                    pauseCheckingFn: a.t.c,
                    careFoc: !0,
                    qsKeys: 2,
                    counterLabel: "pscope"
                }), h[b].pscope = k);
                var u, n, r, z, k = a.ah.a;
                g = !0;
                a.d.de() && (u = !0, k = a.p.g, n = a.p.d, z = 15, g = !1);
                var v = a.d.fb();
                !u && v && (u = !0, r = v.name, n = v.measurableFn);
                u && (u = new f({
                        isVisibleFn: k,
                        isMeasurableFn: n,
                        pauseCheckingFn: a.t.c,
                        viewabilityApiName: r,
                        overrideViewMethod: z,
                        careFoc: g,
                        qsKeys: 5,
                        counterLabel: "sframe"
                    }), h[b].sframe =
                    u);
                a.aa.h = function(a, b, d) {
                    h[a] || (h[a] = {});
                    h[a].adTechCustomVisCounters || (h[a].adTechCustomVisCounters = new c(a, d));
                    h[a].adTechCustomVisCounters.addNewCounter(b);
                    return {
                        getInViewTime: function() {
                            return h[a].adTechCustomVisCounters.getInViewTime(b)
                        }
                    }
                };
                b = a.m.a.azsx("view:tick", a.b.cm([d], a.aa.i), {
                    priority: 5
                });
                e[d.zr] = b;
                a.m.a.zaxs("viewCounterStarted", d);
                (a.b.l() || a.b.m()) && (b = a.aa.j(d.zr)) && b.addListener({
                    _wasAnyPixelInView: !1,
                    onInViewTimeCount: function(b, c, k) {
                        return this._wasAnyPixelInView ? !1 : a.aa.e() ?
                            (a.t.b(d), this._wasAnyPixelInView = !0, !1) : !0
                    }
                })
            };
            a.aa.k = function(a, b) {
                return h[a.zr][b]
            };
            a.aa.l = function(d, b, c) {
                return (d || opt_counters) && b && c ? (d = a.aa.m(d.zr, b)) && "function" == typeof d[c] && d[c]() : !1
            };
            a.aa.n = function(d, b) {
                if (d && b) {
                    var c = a.d.fb(),
                        e;
                    !b.sframe && c && (e = c.measurableFn, c = c.name, h[d.zr].sframe = new f({
                        isVisibleFn: a.ah.a,
                        isMeasurableFn: e,
                        pauseCheckingFn: a.t.c,
                        viewabilityApiName: c,
                        careFoc: !0,
                        qsKeys: 5,
                        counterLabel: "sframe"
                    }), a.m.a.zaxs("viewCounterStarted", d))
                }
            };
            a.aa.i = function(d, b, c) {
                if (a.b.ca(d)) {
                    var e =
                        h[d.zr],
                        g;
                    a.aa.n(d, e);
                    for (var f in e) e.hasOwnProperty(f) && e[f].update(d, b, c) && (g = !0);
                    d.fireFullViewEvent = !1;
                    a.b.forEach(d.secondaryCounters, function(a) {
                        a.update(d, b, c)
                    });
                    d.fireFullViewEvent && (a.t.d(d), d.fireFullViewEvent = !1);
                    g && a.t.e(d);
                    a.ab.b(d);
                    d.ao && 1 == d.ao.skin && "width" == a.z.b && a.z.c();
                    a.e.d(d) && a.t.b(d)
                }
            };
            a.aa.o = function(d, b) {
                return a.aa.p(d) >= b
            };
            a.aa.p = function(d) {
                var b = 0;
                (d = d && "undefined" !== typeof d.zr && a.aa && a.aa.j(d.zr)) && (b = d.getInViewTime());
                return b
            };
            a.aa.q = function() {
                return "hadOTS"
            };
            a.aa.r = function(d, b) {
                var c = a.aa.q();
                return d && d && "undefined" != typeof d.zr ? b ? a.aa.l(d, b, c) : a.aa.l(d, a.aa.a(d.zr), c) : null
            };
            a.aa.s = function(d, b) {
                var c = a.aa.t(d.zr);
                return a.r && a.r.a && c && c.pscope && c.pscope[b ? "hadVideo2SecOTS" : "hadOTS"]()
            };
            a.aa.b = function(d, b) {
                var c = a.aa.t(d.zr);
                return a.r && a.r.a && c && c.pscope && c.pscope[b ? "hadDentsuVideoOTS" : "hadDentsuDisplayOTS"]()
            };
            a.aa.u = function(d, b) {
                var c = a.aa && a.aa.t(d.zr);
                return a.r && a.r.a && c && c.pscope && c.pscope.getFullInviewTimeTotal() >= b
            };
            a.aa.v = function(d) {
                var b =
                    0;
                (d = d && "undefined" !== typeof d.zr && a.aa && a.aa.j(d.zr)) && (b = d.getFullInviewTimeTotal());
                return b
            };
            a.aa.w = function(d, b) {
                return a.aa.v(d) >= b
            };
            a.aa.g = function(d) {
                delete h[d.zr];
                e.hasOwnProperty(d.zr) && a.m.a.sxaz("view:tick", {
                    id: e[d.zr]
                })
            };
            a.aa.t = function(a) {
                var b;
                h[a] ? b = h[a] : h[a] = b = {};
                return b
            };
            a.aa.m = function(d, b) {
                var c = a.aa.t(d);
                return c && c[b]
            };
            a.aa.x = function(d) {
                var b, c, e;
                if (!d || !d.strict) return !1;
                if (a.d.cw()) return a.p.c();
                d = a.d.an().isInApp;
                b = a.d.cr();
                c = a.d.cv();
                e = a.d.cu();
                return d && (b || c) || !(d ||
                    e)
            };
            a.aa.a = function() {
                var d;
                return function(b, c) {
                    var e = null,
                        g = h[b];
                    a.aa.x(g) ? e = "strict" : g && g.sframe ? e = "sframe" : g && g.pscope && (e = "pscope");
                    (g = "undefined" !== typeof A && A[b]) && g.isMeasurabilityDisabled() && (e = null);
                    a.e.c() && !c && (e = null);
                    d != e && (d = e, a.m.a.esgf("preferredViewCounterUpdate", A[b]));
                    return e
                }
            }();
            a.aa.j = function(d, b) {
                var c = "undefined" !== typeof A && A[d];
                if (!c || !c.isMeasurabilityDisabled()) {
                    var c = a.aa.a(d, b),
                        e = h[d];
                    if (!a.e.c() || b) return e && c && e[c]
                }
            };
            a.aa.y = function(d, b) {
                var c = {},
                    e = h[d],
                    g = a.aa.a(d),
                    f;
                for (f in e) e.hasOwnProperty(f) && e[f].getQS(c, b, g);
                a.ab.c(d, c);
                a.an.a(d, c);
                a.aa.j(d) && a.aa.j(d).hadDentsuDisplayOTS() && (c.nb = 1);
                (e = A[d]) && e.viewstats && e.viewstats.isBigAd && (c.el = 1);
                return c
            }
        })(m);
        (function(a) {
            function l(a) {
                a && a.ao && (a = document.getElementById(a.ao.mmakAdKey)) && a.parentNode && "function" === typeof a.parentNode.removeChild && a.parentNode.removeChild(a)
            }

            function c() {
                return {
                    isVisible: !1,
                    isFullyVisible: !1,
                    percv: 0
                }
            }
            a.n = {};
            a.n.realEstateMeasurements = !1;
            var f;
            a.n.e = function(c) {
                !a.n.realEstateMeasurements &&
                    0 < c.w && 0 < c.h && (a.n.realEstateMeasurements = {
                        w: q.round(c.w),
                        h: q.round(c.h)
                    })
            };
            a.n.f = function(c, f, e) {
                c.mmakAdKey = f;
                var d;
                d = document.createElement("div");
                d.id = f;
                e ? (f = e.h, e = e.w) : e = f = "100";
                d.style.cssText = "height: " + f + "px; width: " + e + "px;";
                document.body.appendChild(d);
                a.u.b(17, c);
                c = a.e.e(d, d.tagName, !1, void 0, c, null);
                a.m.a.azsx("adKilled", l);
                return c
            };
            a.n.g = c;
            a.n.h = function(a) {
                var c = {
                    isVisible: !0,
                    isFullyVisible: !0,
                    percv: 1
                };
                a || (c.jsPercv = 1);
                c.isDentsuVisible = !0;
                return c
            };
            a.n.i = function(g, f, e, d, b) {
                var k =
                    c();
                b = b ? .9 : .98;
                var p = e;
                if (!d) {
                    if (a.d.bz()) {
                        if (g = a.ai.a(g), "undefined" === typeof g || null === g) return k
                    } else {
                        f = f || g.WINDOW || a.b.ap(g.aa);
                        g = a.y.j(g, f);
                        if (!g || !g.visibleRect) return k;
                        g = g.percv
                    }
                    k.jsPercv = g;
                    p = q.min(e, g)
                }
                k.isVisible = .5 <= p;
                k.originalPercv = p;
                p >= b && (k.isFullyVisible = !0, p = 1);
                k.percv = p;
                p >= q.min(.8, .98) && (k.isDentsuVisible = !0);
                return k
            };
            a.n.j = function(c, f, e, d, b) {
                return b ? {
                    elementRect: e,
                    visibleRect: f
                } : a.y.q(c.aa, e, d, f)
            };
            a.n.k = function(c, f, e, d) {
                c = "strict" === a.aa.a(c);
                !d && c && (d = -1, "function" === typeof f.calcVisiblePercv &&
                    (d = f.calcVisiblePercv()), c = -1 < d && q.floor(e.originalPercv) === q.floor(d));
                return c
            };
            a.n.b = function() {
                return 1 == f
            };
            a.n.c = function() {
                return 2 == f
            };
            a.n.a = function() {
                var c;
                return c = (c = (c = a.d.cw() && a.p.f()) || a.d.cw() && a.p.e()) || a.d.dy()
            };
            a.n.l = function(a) {
                "undefined" === typeof f && (f = a)
            };
            a.n.m = function(a) {
                "undefined" !== typeof f && (a.yz = f)
            };
            a.n.d = function() {
                a.s.g();
                a.p.h()
            };
            a.n.n = function(a, c) {
                return a.x === c.x && a.y === c.y && a.w === c.w && a.h === c.h
            }
        })(m);
        (function(a) {
            function l() {
                var a = (19).toString(2).length - 1,
                    d =
                    1;
                return function() {
                    d <<= 1;
                    0 != d >> a && (d ^= 19);
                    return d
                }
            }

            function c(a) {
                return 9 === a ? 30 : 10 === a ? 31 : a
            }
            a.f = {};
            a.f.f = 0;
            a.f.d = 1;
            a.f.g = 2;
            a.f.e = 3;
            a.f.h = 4;
            for (var f = [
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
                ], g = 65, h = "", e = 0, e = 0; e < f.length; e++)
                for (var d = 0; d < f[e][1]; d++) h += String.fromCharCode(g), g += f[e][0];
            h += String.fromCharCode(g);
            a.f.i = h;
            a.f.j = function(a) {
                for (var d = "", c = 0; c < a.length; c++) var e = a.charCodeAt(c) ^ 85,
                    d = d + String.fromCharCode(e);
                a = d;
                for (var d = "", e = c = 0, g, f, l, v = 0; v < a.length; ++v)
                    for (l = a.charCodeAt(v), f = 255 < l ? 0 : 1; 2 > f; ++f) c = 0 === f ? c | (l & 65280) / 256 << e : c | (l & 255) << e, e += 8, 13 < e && (g = c & 8191, 88 < g ? (c >>= 13, e -= 13) : (g = c & 16383, c >>= 14, e -= 14), d += h.charAt(g % 91), d += h.charAt(g / 91 | 0));
                0 < e && (d += h.charAt(c % 91), 7 < e || 90 < c) && (d += h.charAt(c / 91 | 0));
                return d
            };
            a.f.k = function(a) {
                for (var d = "", e = l(), g = 0; g < a.length; g++) {
                    var f;
                    f = c(a.charCodeAt(g));
                    var h = 0 === g % 2 ? e() : -1 * e();
                    f = 0 === h ? f : 126 < f + h ? 30 + (h - (126 - f) - 1) : 30 > f + h ? 126 + (h + (f - 30) + 1) : f + h;
                    d += String.fromCharCode(30 ===
                        f ? 9 : 31 === f ? 10 : f)
                }
                return d
            };
            a.f.l = function(a) {
                for (var d = "", e = l(), g = 0; g < a.length; g++) {
                    var f = e(),
                        h;
                    h = c(a[g].charCodeAt(0));
                    f = 0 === g % 2 ? f : -1 * f;
                    h = 0 === f ? h : 30 > h - f ? 126 - (f - (h - 30) - 1) : 126 < h - f ? 30 - (f + (126 - h) + 1) : h - f;
                    d += String.fromCharCode(30 === h ? 9 : 31 === h ? 10 : h)
                }
                return d
            };
            a.f.m = function(b, d) {
                var c = [];
                a.b.forEach(b, function(a, b) {
                    if (void 0 !== a && ("string" === typeof(d ? a[d] : a) || "number" === typeof(d ? a[d] : a) || "boolean" === typeof(d ? a[d] : a))) {
                        var e = String(d ? a[d] : a).split("&").join("%26").split("=").join("%3D");
                        c.push(("number" ===
                            typeof b ? "" : b + "=") + e)
                    }
                }, null, !0);
                c.sort();
                return c.join("&")
            };
            a.f.b = function(a) {
                for (var d = "", c = 0; c < a.length; c++) a.hasOwnProperty(c) && (d += h[a[c]]);
                return d
            };
            a.f.n = function() {
                var b = document && document.documentElement && document.documentElement.style || {};
                a.f.o = [!0 === (!!window.chrome && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore)) ? 1 : 0, !0 === ("undefined" !== typeof InstallTrigger || "MozAppearance" in b) ? 1 : 0, !0 === !!window.opera ? 1 : 0, !0 === a.d.o ? 1 : 0, !0 ===
                    (!+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in b && "-ms-ime-align" in b) ? 1 : 0
                ];
                for (var b = !1, d = 0; d < a.f.o.length; d++)
                    if (1 === a.f.o[d]) {
                        b = d;
                        break
                    }!1 !== b && (a.f.c = b);
                return a.f.c
            };
            a.f.c = a.f.n()
        })(m);
        (function(a) {
            a.ao = {};
            var l = [];
            a.ao.a = function(a, f) {
                l.push({
                    query: a,
                    callback: f
                });
                return !1
            }
        })(m);
        (function(a) {
            function l(a, b) {
                try {
                    var c = a.split(h),
                        e = b || window,
                        u, l;
                    for (l = 0; l < c.length; l++) {
                        u = c[l];
                        if (null === e || typeof e === f) return 1;
                        e = e[u]
                    }
                    if (typeof e === f) return 2;
                    if (null === e) return 3;
                    var r;
                    var z = a + g + e.toString(),
                        c = 0,
                        v = z.length,
                        B, D;
                    if (0 == v) r = c;
                    else {
                        for (B = 0; B < v; B++) D = z.charCodeAt(B), c = (c << 5) - c + D, c &= c;
                        r = c >>> 0
                    }
                    return 4 + r % 58
                } catch (m) {
                    return 0
                }
            }

            function c() {
                var a, b = [function() {
                        return "c$$b" !== "cab".replace("a", function() {
                            return "$$"
                        })
                    }, function() {
                        return eval('class A { constructor(pp) { this.pp = pp; }\n call() { return this.pp; }\n }\n class B extends A { tS(a) { return super.call(); }\n tT(a){ return this.call(); } }\n  const obj = new B("cab");  (obj.tS() !== obj.tT()); ')
                    }, function() {
                        return eval("'\\\n\r'")
                    },
                    function() {
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
                        var a = new Proxy([3, 444], {});
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
                    var e;
                    try {
                        e = (0, b[c])() ? "1" : "0"
                    } catch (g) {
                        e = "2"
                    }
                    a += e
                }
                return a
            }
            a.ap = {};
            var f = a.f.b([46, 39, 29, 30, 31, 34, 39, 30, 29]),
                g = a.f.b([77]),
                h = a.f.b([72]),
                e;
            a.ap.a = function() {
                if (void 0 !==
                    e) return a.b.g(e);
                e = {};
                var d = a.d.g;
                try {
                    var b = d.document,
                        k = b.body,
                        g = d.innerWidth || b.documentElement.clientWidth || k.clientWidth,
                        f = d.innerHeight || b.documentElement.clientHeight || k.clientHeight,
                        h = d.outerWidth || k.offsetWidth,
                        r = d.outerHeight || k.offsetHeight
                } catch (Q) {}
                try {
                    var z = d.screenX || d.screenLeft || d.screenX,
                        v = d.screenY || d.screenTop || d.screenY
                } catch (Q) {}
                var b = (new x).getTimezoneOffset(),
                    k = a.f.b([84, 41, 33, 26, 39, 45, 40, 38]),
                    B = a.f.b([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38]),
                    d = !0 === ("undefined" != typeof d[k] || "undefined" !=
                        typeof d[B]) ? 1 : 0;
                a.b.j() || a.d.an().isInApp || (e.ud = a.f.c);
                var k = e,
                    D;
                try {
                    for (var m = [a.f.b([33, 26, 43, 29, 48, 26, 43, 30, 2, 40, 39, 28, 46, 43, 43, 30, 39, 28, 50]), a.f.b([47, 30, 39, 29, 40, 43]), a.f.b([41, 37, 26, 45, 31, 40, 43, 38]), a.f.b([46, 44, 30, 43, 0, 32, 30, 39, 45]), a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43])], B = {}, w = 0; w < m.length; w++) B[m[w]] = window.navigator[m[w]];
                    D = a.f.j(a.f.m(B))
                } catch (Q) {
                    D = ""
                }
                k.qn = D;
                e.qp = a.f.o.join("");
                D = e;
                if (document && document.body) {
                    m = document.createElement(a.f.b([34, 31, 43, 26, 38, 30]));
                    m.width = a.f.b([53, 41, 49]);
                    m.height = a.f.b([53, 41, 49]);
                    m.style.left = "-" + a.f.b([61, 61, 61, 61, 41, 49]);
                    m.style.top = "-" + a.f.b([61, 61, 61, 61, 41, 49]);
                    m.style.position = a.f.b([26, 27, 44, 40, 37, 46, 45, 30]);
                    document.body.appendChild(m);
                    for (var k = a.f.l('Cjqjghtjx>#V{k/LSFH&Meu8h`}X{OtkumzFpn\te!\ny\\oex`/;|eGWu`teYqqixqXY~pvm<_ndf*EhsfuXfjpa}6jbja6@N9NFSGU~Ngqjm[dnuds9hUwXNqtkzB|Yyo8;c3OCJLKWSBMHJ"Hd T!-q^{bxjp)xZ{V98umqafm:hyeyW=_nmipp)Ghzhs\\ \n#Xjr2fdgq!Fkk[~C{nea{pobr@\n^|e;cflklk&Mjyeja|cudvaMoxc}@\n^|e;DPSW=PIb:18pYd\\ws80IoxU#)v^|X _-@pmhn{dy^YW|b}dI=\\QJY~^|b~e|i/jifjnt!Gb|W"bxsjNmjuhpBKMbDriwcv&o_z\\y^34{hnsqk|eXYxj~^U2aKTcvnhl:cfcl\tRF\\-t]l+tUx`6<aDVdbeiNdf Z3dh_t\nLRUIiqnBpbkms\n{Xnc0;VMZVr[zbpVnQwhm+]9MFSMm<RPGPEEHMkGZBL\tRF\\MwimooWa\\vns\n{Xnc0;VM\\gncpfxinUch}b47^Ni<]F[KFP0;VM^dyW{W=_nmipp)IG^M\tes\nd<CIMLbLQ<NEUQaHUD.?[PYh#go=sTyXs_xarh:cfcl\tRF\\TplioyYoQke"V;gbpw]Dfx#q[uY"[5BUO^^rip)MLaPc8MSIWOC_I19ZEeT{hc^tbXYq`|^|TrMbjy]1hmbj"Jd\'c}n0hmkmhs\'NH[6$Zfnxarh:>SLH>X7hMQ@M\\ZM[@i>`C9;PKTglh\n#khv__brmv*tbt[\tc6=]>]fjlx&il{bUep`"!w`oa4AUA[jsg!CrXeMrd|(zVr[36^@[depTfyh9ikfs~QXu_Xjdh\t[jh5^tapsj(L^zUadop<]rehrl$G[\nV[_li=ajlg(Lbhir) kwerco,p]qa\n]1:vU#`nmv*XOU7PN]B\\8l@OQXJX=`>TDf@^7N+FkkrsYyoPkoXz\\or2dhhsim"KdpZNugj|+SCeZ]HcCP<`IIQEIMGI"L`"X{Ok_|rxYTiZbqe!ifCz]qn:6YU[3a:NS.Avqoh#)NHQFZ<ORc>U;SBJD[Q]BMD.Azouf9n~Zq\\aibaiDlgui1;yd~eNugj|+SC`NOF]GR#FtedHl~dw$uS|X5Dxavq4APOKX[2`B-Cz]qn_dzhjW=6XMPAKQOBR\'PbzVRismv&S;`=d;_;bG\\^GNZ)L`z\\~,@2\tibw2dhhsim"NS|Xy`fA~bth9>KIbF_@OEcHK;_:1=h_tcjcGrmkz"V@c=]H[#H_q]s[p:{[uf=AXMG(PQS@Thk`s6y\\ncrl1hmbj"OF\\?VdpqQqkaPgofs_ %o_q]/B`BQE|f\th}Dnaubth9ikfs~U`trsj|(zVr[3;@$L-Eq{quaO`pb|VYfd_xarh:cfcl\tX$;B0Pmpz9y^y]s\n{Xnc0AG<WZ~Hh`vX7kgjoqn T?LDsj_Xoei&oi"Zw8vg}W7kgjoqn T?LDsj_Xoei&rhxn3dh_t\nRCDPz^tgl^~b}_;cflklk&Ubf]l {Xwfvd4FsUr`Lb!^ngScr\\hlucl9v`"X s0jijk Ti~^\ndrZugsfR\\\tZwlld=_nmipp)Ob\t`|lsT `plSZv_~kjhL`"e!-navdz\\7Dxmz\n[ln`ijIi~bfj5`p`n+Kj|i4Dwp|ZzC!cfq2kxj|dwjlV[bl`na{Ll"w`x`!Y9@orp&U_xVy_}Wc\\vdHkzjgh9n\ti~`\tkfbPgf[xZxEm }Tvd.Evqr" 3LksRx@ucvYwi~#sWtW;>nxGrmkz"OJWXd<l\'-IiqHpqcy$KA\\R_JaLZFTH7H]FsUvXLc}k1c\tI~flE#cyntpma4blho%[R _/qmfk(xZs]{Z;@nck]K^vUmdvb!ZrjJljg1hmbj"TWs\\jCgrq`kg9gogueu#NchadEqnS[lVtWNugj|+GHjOKKU6a#NchadEqnXozft`Jbea{p4blho%[Vq`bIiqv(uhYowWbhyoqn|bj"y\\w^:>r[j_O]|m:ajdnfw\nVdfeiHkm~)xZ{V9DfbmYP_\nViW{S=ajlg(Ubj]lMo\\}cq\\sCvjrlQkjd{ b;REV[U>Y?7Ho]wR`\\tqmgq(zVr[3?tWr`Upzbga9gogueu#NchadM\ngjWt7 exq0hmkmhs\'W^ dn^fAlYqhqa3dh_t\nVnwomPifzgv>#V{k/FSJLT[CY7SQPKRR.I}qghtjx>#V{k/LSFH&ZV{_nS"\\xmRnmiuUoHkgoXri/jifjnt!SW}[vT}nt*tbt[\tc6Gogv^brsj1hmbj"UasXOhnpmo4GSJaXO=Y#OsqZhl:^x?uftZnq0hmkmhs\'Y_t]vef?y\\liOdrfsW"\\xmGrmkz"MG_K:@s]tav]hhOVslheaXwcgnqkm7zi~^%e?;/jifjnt!Tij[{_jsqnVljY9ikfs~\\mfpggqm\ngf_uWs8{qqn6kgap\'ZZuVaiblwawc{cJll`"!VNWOMRV [\\"fs_ 8ebv]vm:cfcl\t_T!lgj|Ftg\tm\tfs_ j/jifjnt!UW\n_ta}Hpo|o{api~l<_ndf*TY|gqcyCh`pZnq0hmkmhs\'ZZ&^reuKefdaqg3dh_t\nYdtbwosUy^oFsR\nlsc2dhhsim"WW Yxqo]v`kBlqs`oevfo,p]qa\n]1Fldub{lcjkbUV~`|oscReup}Dlm\n#sWtW;Cnqhkzjgbn`\\^ `!idcXapcz\\3dh_t\nYhep}ok=yKs\\!f\t\\Xgr\\rq:ajdnfw\nYnyazP{d{g">#V{k/?XWW;^<JJ3B X|dppiqocy)v^|X _-Nv]v_zifjpa}6xmpakqocy)v^|X _-Nv]v_zifjpa}Enbge~bx"w`x`!Y9Gsmkjhm\t:{[uf=@XTUAUL\\97K|h{Z\n\\/pibh]\n#q[uY"[5Otkxbxh#Iy]s=vju,p]qa\n]1Fya&l7btaiqk:\nimmw`{%mcr_wb8Ezio?pajfgn6kgap\'Zn Y`lcqgjlj\n^tdVb"\\xmu*tbt[\tc6I"duJv`w[uc|ineuA\tgrnpo6kgap\'\\MQAr\\sAsfq_oineu;rXNugj|+HIM=VB\\8lGI?W=/L`8U[ldRbwmg_|fubT^o>#V{k/AEHWO^>S=fBW4\\D.N\\@YY~nsh|5rjdpmhwc{c3bl`vgq+TPKPzU\tnZk}gv[fp2fdgq!WJJE"T}rTaxlxh9ikfs~_Xoei&HHPTYEfEc4[S.NikmY9IY=SPO<GMV=/Lq[jhl`rXNqtkz+rYyb~a:Cr]mcgl1i"cP[\ne=ajlg(Zbl`p^~\' V %mcr_wb8GjipltBkrgn~bx"w`x`!Y9JJKH&Ei{a8(\t&=fqthbtb4blho%a:Z;/Dpgdn?\'}*5_xa7kgjoqn ^DW=<Fveu16p7(\tjg$sW}Z}g.O^DGbthkmsU_\\dr2dhhsim"ZHV6uhrLiqn9w`w^|e;cflklk&_KL<L4{XwcGhmjkb\t)]OUPS<CJIFGYYDI;f>d@RMQOQQ_ ^QQ?S4|cppQYwlumJbl_ta}-URO\\L9NJVH`>NKSG\\WWS\\:d>\\7aB]@VA4P\\;Q@Nb eneuJm_knQajcl`"!w`oa4P\\;QdvmscRcfkifw(zVr[3Ee:Y`vd[bm"[<^Aa6TVDSVNHN[TVKH6a4]HE[ZBR ^QQIoeuJfeEjf;nh3FHFWFNFa?]O\\9_Ji<c3V:`PID/Mb<UW{ZbXp@t_I_y"[<^Aa6TVDSVNHN[TVKH6a4]HE[ZBR ^QQIoeuJfeEjf;nh3FHFWFNFa?]O\\9_JiJc2QIBRM;bMYDTJOQa8U+UROMghsNo`Q]|jfNelk(\\6Y>Z7VRUHPA\\Le<ZMSS]?a8M]E:V&_KLFhfwFnfEqzskhzL\tZrcnkjaV]o(\\6Y>Z7VRLTTRMQUS\\PK=`2a@D]WERI`=d7IE;F_FR]|eYYrGsgse|Mfpxaf[x6gi5BPGQRGCg>X7jMOE:Dc>Q_x`V_sAndlf~Inqvek^r5mn8IOEUJFEc;XLb:YEfCd4MQCPQ@eFPG6Ld8]XufW]jFucjjvHte}he]t>hg9KKMVDR>`JMFHN[T[;YFX6JKaNMI2GaBZZ!Y`\\hKsnhn{Gjb5BPGQRGCgIOBPOYXV@_@[MRLDFkGJB3Ee:[dp`moobrDxms_ %SCR<HLUCLUP@c8WSa=]QU ^`mn\nZ pQmpafsb^tbhfxbwDxavq45_Z^:`8RK-QijycoZ\\ey]te[die{qxU\tdyg<_ndf*Wlucz\\3hlb{Tld0hmkmhs\'^b{V_Xoeik1fqcljo\tcejmubwosG\tmoZ{\ny\\oex`/N~ZjMh^zX{-navdz\\7PS>#V{k/KSMV?PGF=3Ga<Nqtkz+tUx`6Na3Pfoli[wc{cJll`"!L@RP]OOBRZZAODR#VQFAqnqgkWjW=ajlg(]pkfX`}loXr?blhdhl\tCfcle\tTld0hmkmhs\'`K^`\n\\/jifjnt!\\;I9[Rmddqo\\xYy_okscl`ods&XHY6XAL6nENMFAZBXSb@L@Z~d\\biQYs(xZs]{Z;JnaCo{bsVwt8Fs^|iz,p]qa\n]1MlTPf|do^tv4Az_\tes\nvdqmvlv(zVr[3ItUJruau_rm9Ok[zV;ebki$Z_n6xil_q_!-ekumo`p)v^|X _-UiZDm\tZrXsk=\\wrv]vqoU\t`8es_tki*[]eAX\'Hetb#gnQgjlbx]ybMh|erou,FMI@QGdLHDX4KKG(_bh;W-Mh{a!kfPifg_~^s]Ja}gnwv*U>^S_@bMcCRVJKE?HYaCNJZ\tfXkFN.Klsd\nooKs_q\\sgr_Fizijn{ a:K@5.N)]YmBV+`V{[fpmfj={cy[\tf=6XKQNg>ZHL>RFS?a(4*[]eAX\'W[uVtermi?wkzY"o8=`2dVCSJ>HL=\'1MlTV?;Qgjlbx]ybMh|erou,HJDQk7Z<M7a$=+YajDR&]`x]scvehAsfw_#i3<Y3\\8KTHBMOe=Y>YF^=RKF]QAVMUCLUHFc4LGOAVQ2Kp]QE@CreecvaqaOdsjlj"![03BgD7%QZL*>79Nf`KD5Lqci[y[}ZLnppmuz"]@X=SCOLGDIJb<XJJUZ;i85Vg^OI8Fpin^\nZ{^Dmrlhr\n#W=?;;JnaIH:Okbo`|b|XPforipw(^<G+=\';JnaIH:Okbo`|b|XPforipw(^<G.\\;;JnaIH:Okbo`|b|XPforipw(`:]J\\DT%A+YajDR&]`x]scvehAsfw_#i3JLJcH[Da.L)]YmBV+`V{[fpmfj={cy[\tf=G[@PONLXAjAO>R3N:L]FMI@QGd8P@S<WF.Sm_M@Njxmsi <wcrl1>NAHBP5Z\n`ddCTOkbo`|b|XPforipw(ODSJLJcRUNUPgTK6RG6PsSTCScr\\hlucl9v`"X s0CMKKFLOOX[:]DBNc@LH`!\\[i9[Enmfazft[Njxmsi %JLZ=UN8LjXN>aXwcgnqkm7zi~^%e;FVRcGIYY:REYK;JnaIHZbtXpmsgu4|euc|l1MO>XIVDn5XW.Sm_M@]`x]scvehAsfw_#i3JLJcH[D414TkVRG^^%e!if,p]qa\n]1MlTZ\\}@peu^z]ziOos_ %DFEFJ?8LjXR["4who]|fubPqog!\ny\\oex`/QqWP_{3}\\v`vewkKjpi~\'|Rz\\-UiZNc\n8XIM[{gnqX]trk"NN]XT:YKFPc@X?kGTJHFT\n`ddGqqIG^Ase!V\tMbjy]1=_Hd<P>c8[^U=\\RX5_@6PsSX`uKi\\l[WZ~;yd~e7LG@Q>e?PTOK`P\\LUNYL/QqWP_{F Twrkpqlt9 `xm<>\\LTCSNHL8LjXR["G{`poqqocy@\n^|e;cflklk&cZgIvUzX}-QLMK2LXGRm!a_\\rsikw(XDF:P@V\naLND|qvFpl\t^ eRmflxLdlsZy$uS|X5WUH\\Mxcn`}l}c;cflklk&meubpUpgrnp?i`nY9\\lh\ne;cflklk&meubpUpgrnp?i`nY9hysOUq%o_q]/[|eq_jS"\\xmE]kek"xj#B!Vzj/asfw[ucx$sW}Z}g.]xmr]n\\~b}_PXdfi&pi%>y[te=Vxmv]qky"y\\w^:R}gmggYwc{cHWjZt!vn|Hmkmhs\'ki~]vZbrmgq=mXm[5e%TyBc_pb4blho%qRp_fq2chs\t#sWtW;Vjbja{+sU\t^r\'|Rz\\-aljrgq#qehVc\\vdu*v^sY7^rk}^r%tcejfb:ajdnfw\nlgtkub4kp]}m}cr%jlwldfx#q[uY"[5bjnwjk"!`ll!`\t\\/grkw[xa3dh_t\nlgtkub4kp]}m}cr%plHgzhxdfZWd~Z{duo6^jXWd}ms_ri/leeh&o]wetW=jnaupwok"ziNh$_yfbbTjra~Zxi5Vxfy`v_p+tUx`6\\vc|df,{]em\ndw[5a}7xvphw^jD}jqksd\n%egwhdno]YeS[!gnmgn6ikbror%qY\tfnc2oh\\\tithl ~aMnyjtlgX[my`\nV\nj/fekOc\tijdld=ajlg(kexcx`8psS\nkppi&rhPd|dsapWYqqczbyg9mof}grCjqx]q_~#q[uY"[5bqj{lrY9^v^oc;ebki$fizhtbl sXkti*v^sY7^yg `y\\/bmj1hmbj"ja}fxkg*lfxlxg8es_tki*ggqm{aj$nd~hyBqht^vgp_8es_tki*ggqm{aj$nd~hyBqht^vgp_8go^r#dmrkrfq#q[uY"[5bqj{lrY9gy`<]rehrl$fizhtbl \texekhm+rYyb~a:T|etmp]1j~dk_sWTam-p]ub2Wzi}hzV;kjkiDra:cfcl\tren`vaQjg[p=sm{R}%mcr_wb8Xwowf~!|tdptb4]xkyk!<rp/jifjnt!hh\nb"b7rw^|ik" `|btj;cflklk&ojxjv_T_nlgj|p4i{b|ZrV;ebki$gc\tefjjZTinmv*v^sY7`x]mRyc`dvYp_\tTndqWrgnc.a\nqkfy\\v\'Wd`\\bpg`Sl{knZldXa|schtbj"^O koa;cflklk&qmy[y`p_7HuOm^xWsK|h#Zq\\sGrkw[xajZ5dtZrrvazBtix)|^ `ymfGr`hluifdjW=\\|HoltbsYyoo]Pj9_jqxgus:ezioE"T}d0hmkmhs\'sgrV$\\eBF$lhpZ}[k6Q!m`v]j^yY~)v^|X _-gr\\hrqYI85Vt_nsg@iqgVlno\'|Rz\\-gwKh] gj9v`"X s.iwskHz)v^|X _-ksrUNOEj[y5~awdepqlt"y\\w^:^|qScumhm\n6s_tS"\\xmHnijk"y\\w^:_nmjeelrl:VufJasXW`oa4kgjtbkm}c;ZqsGddm\t!sW}[vT}nt*obu`z^kmw`{%x_x[kJ{hnjpa}!w`oa4kgjtbkm}c;dpxGgqnmXyi5epin-p]ub2blqs`oe|i/nijpc\thneue=d~dtu6ikbror%|R"`h_xgu(|afjma `5mcrqdghzm8ksXvjucv;rh\nZsjOS}Wudt*tbt[\tc6gogv^brsj1mqg{_jWfb{jgn6dkh]`qb e\tXugsf1hmbj"uS$\\p`vkz+yY}qs\\sH|ilcv&j_\nGj]pe"ejskkvp4`piqmv~{XwgkYwi~#zdyWv\\|sgnXouhz^yeVR{[mcv&q[yZ1eug}_x`f*v^sY7jz^|\ny\\oex`/i|Zs:hfpUjrg*v^sY7jzk<Rq[plw&rhPd|dsapWYqqczbyg9mof}grCjqx]q_~#q[uY"[5ntemkzU\tdyg:anitcJdr[\n#sWtW;cjquaQkz"w`x`!Y9gfpjgugmch[5U{XjqOaip{fpn8es_tki*t]u`{grWuUt!pdvAvqx]pn8es_tki*t]u`{grWuUt!w`xeo^z]zi8MgARVC?GCb@[G\\7Y6;cnqhkzjgbn`8gogv^brmgq(`NU;f@PIRFCPM)vY}ayk{R{Zf,rYycsVy_v`=g!og(zbwipn~:|ZzXugsfIlmbj$uS|X5qgoqwk6#)v^|X _-qgjrfx#q[uY"[5renwir6#)v^|X _-qilLh\nZwlh^=_nmipp)yY\tOsfs`!k/leeh&\tej[jZblwsja{fy"n\\x\\s];cflklk&\tej[jZblwsja{fy"n\\x\\s];ebki$vjqZh^Zk}gqdue{+vU\nno\'zV{^uf0ks_qXmI\n`"[nrko6mgi~`n% ar\\dfWqqntZx_z  X|toa6kgap\'}isVp_Twrlk_\t^x$zbtTthpc4qucw]kk<gvjj`p]/puhzWsHxX\noqn|+vUr`V^te9mjqyYoPuZ|fvd"!y`ia\\lv  d}no]c`futgun:lnZ{Z;jname|@gbn`vKsb!\\trEflgmineu8 Tvd0hmkmhs\' ^p\\vkSRGHh_~8tduWrgrnp*v^sY7ro[yZ Jqci[kA~Vrchd=ajlg(\tbh_to]isVp_Hpeep[~Ani{ {Xwfvd4tkVvd~L~VrZiPi[raz^y_v`=_nmipp)}Ymfsmaar\\dfV]fiscnjpa}!w`oa4vgbo`!\'{Vq`b,w]wG ijI{S"X7kgjoqn #\\x]si;gv`paf@qVykyW=T{dV]jAkgtbxLse `oew=q[najZ5`p`n+{]vakl9k\t[zZp=f_xmu_:ZsWi^tC{nvakq4`piqmv~%Xobip1j Wq_j8tT}tta6dkhb\\ve~R}\\sGr^r(zVr[3kpamdz*xrh`t^P^oe!if,mkSl{ijY{7}Tkkg`6ikbror%&R{[fv2hx\\x^h<lS"h{d0e{Tg`wkkisc_fu_xarh[c3bl`vgq').split(a.f.b([71])),
                            B = k.length, C = [], w = 0; w < B; w++) C.push(l(k[w], m.contentWindow));
                    document.body.removeChild(m);
                    m = a.f.b(C)
                } else m = "";
                D.is = m;
                e.iv = 7;
                e.qt = d;
                e.gz = a.d.aq() ? 1 : 0;
                e.hh = a.d.ar() ? 1 : 0;
                e.hn = a.d.as() ? 1 : 0;
                var d = e,
                    E;
                try {
                    E = !a.k.d(window.top) && window.top.name ? a.f.j(window.top.name.substring(0, 50 > window.top.name.length ? window.top.name.length : 50)) : ""
                } catch (Q) {
                    E = ""
                }
                d.tw = E;
                e.qc = z;
                e.qd = v;
                e.qf = g;
                e.qe = f;
                e.qh = h;
                e.qg = r;
                e.qm = b;
                e.qa = a.d.x;
                e.qb = a.d.y;
                e.qi = a.d.v;
                e.qj = a.d.w;
                e.po = c();
                var g = e,
                    F, f = a.f.b([28, 26, 39, 47, 26, 44]),
                    h = a.f.b([48,
                        30, 27, 32, 37
                    ]),
                    r = a.f.b([30, 49, 41, 30, 43, 34, 38, 30, 39, 45, 26, 37]),
                    z = a.f.b([22, 4, 1, 6, 11, 84, 29, 30, 27, 46, 32, 84, 43, 30, 39, 29, 30, 43, 30, 43, 84, 34, 39, 31, 40]),
                    v = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 21, 4, 13, 3, 14, 17, 84, 22, 4, 1, 6, 11]);
                E = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 17, 4, 13, 3, 4, 17, 4, 17, 84, 22, 4, 1, 6, 11]);
                b = a.f.b([47, 30, 39, 29, 40, 43]);
                d = a.f.b([43, 30, 39, 29, 30, 43, 30, 43]);
                D = a.f.b([28, 43, 30, 26, 45, 30, 4, 37, 30, 38, 30, 39, 45]);
                m = a.f.b([32, 30, 45, 2, 40, 39, 45, 30, 49, 45]);
                k = a.f.b([32, 30, 45, 4, 49, 45, 30, 39, 44, 34, 40, 39]);
                B = a.f.b([32, 30, 45, 15, 26,
                    43, 26, 38, 30, 45, 30, 43
                ]);
                w = {};
                try {
                    F = document[D](f);
                    var P = F[m](h) || F[m](r + "-" + h),
                        L = P[k](z);
                    w[b] = P[B](L[v]);
                    w[d] = P[B](L[E])
                } catch (Q) {}
                F = a.f.j(a.f.m(w));
                g.vy = F;
                return a.b.g(e)
            }
        })(m);
        (function(a) {
            function l(b) {
                var d = a.f.u(!0);
                if ((b = a.u.b(35, b, d, !1, !0)) && b.res) {
                    b = "https://geo.moatads.com/n.js?" + b.res.querystring;
                    var c, d = a.d.c();
                    c = a.d.d();
                    d && c && (c = t[a.f.aj], a.ar.a("DOMlessLLD", c, b), a.ar.b("DOMlessLLD", c));
                    d || (c = a.d.aw + "." + a.f.aj, b += "&callback=" + c, d = document.createElement("script"), a.b.bx(b, document.body ||
                        document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0], d), a.f.ai.push(d))
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
            var c = {};
            (function() {
                a.d.fa() && a.o.e(function() {
                    try {
                        a.d.g.navigator.getBattery().then(function(a) {
                            c.charging = a.charging;
                            c.level = a.level
                        })["catch"](function(a) {})
                    } catch (b) {}
                }, 1E3)
            })();
            a.f.u = function(b) {
                var d;
                try {
                    t._c ? d = t._c : (d = a.ap.a(), t._c =
                        d)
                } catch (e) {
                    d = a.ap.a()
                }
                if (void 0 === b || !1 === b) d.ql = a.f.v, d.qo = a.f.w;
                d.qr = a.f.x();
                c && "undefined" !== typeof c.charging && a.b.ci(c.level) && (d.vf = c.charging ? 1 : 0, d.vg = 100 * c.level);
                return d
            };
            var f = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]),
                g = a.f.b([30, 47, 26, 37, 46, 26, 45, 30]),
                h = a.f.b([43, 30, 44, 41, 40, 39, 44, 30]),
                e = [f, g].join("-"),
                d = [e, h].join("-");
            try {
                a.f.v = a.f.j(a.f.m(a.d.g.navigator.plugins, "name"))
            } catch (p) {}
            a.f.x = function() {
                return 0
            };
            a.f.w = 0;
            a.f.y = function() {};
            var b = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            a.f.z =
                function(d, c, e) {
                    if ((a.f.t.a in c || a.f.t.b in c) && void 0 === a.f.aa) return !1;
                    var k = a.b.g(a.f.aa);
                    void 0 === k.n && a.aq.a(e) && (k.n = 1);
                    a.f.t.a in c ? a.b.forEach(b, function(a, b) {
                        d = a in k ? d + ("&" + a + "=1") : d + ("&" + a + "=0")
                    }) : a.f.t.b in c && a.b.forEach(b, function(b, c) {
                        a.b.ai(a.f.t.b, b) && (d = b in k ? d + ("&" + b + "=1") : d + ("&" + b + "=0"))
                    });
                    return a.f.t.c in c && a.f.t.e in c ? a.f.ab(e) ? a.f.ac(d) : !1 : a.f.t.c in c ? 0 === a.f.ad ? a.f.ac(d) : !1 : a.f.t.d in c ? 1 === a.f.ad ? a.f.ac(d) : !1 : a.f.ac(d)
                };
            a.f.ac = function(b) {
                var d, c;
                d = a.d.c();
                c = a.d.d();
                if (d && c) return a.p.i(b, null, null);
                if (!d) return (new a.d.g.Image).src = b, !0
            };
            a.f.ae = function(b, d) {
                b(a.f.ad)
            };
            a.f.af = function(a, b, d) {
                k.add(a, b, d)
            };
            a.f.ag = function(b, d) {
                if (void 0 === a.f.ad) return a.f.s.push({
                    callback: b,
                    opts: d
                });
                a.f.ae(b, d)
            };
            a.f.ah = function() {
                for (var b = 0; b < a.f.s.length; b++)
                    if (a.f.s.hasOwnProperty(b)) {
                        var d = a.f.s[b];
                        a.f.ae(d.callback, d.opts)
                    }
            };
            a.f.ai = [];
            a.f.ak = function(b) {
                if (t) {
                    a.f.aj = "gna" + q.floor(1E6 * q.random());
                    var d;
                    t[a.f.aj] = function(b) {
                        a.f.al = new x - a.f.am;
                        d = b;
                        t[a.f.aj] = null;
                        delete t[a.f.aj];
                        d && (a.f.aa = d, t.jsonpcache = d, a.f.ad = "n" in a.f.aa ? 1 : 0, k.checkPixels(), a.f.ah())
                    };
                    a.f.am = new x;
                    a.o.f(function() {
                        a.f.an = new x - a.f.am
                    }, 0);
                    if (t.jsonpcache) t[a.f.aj](t.jsonpcache);
                    else l(b)
                } else a.o.f(setupNadoListener, 200)
            };
            a.f.ao = function(b, d) {
                void 0 === a.f.r[b] && (a.f.r[b] = 1 / a.f.p < q.random());
                if (a.f.r[b]) return !1;
                var c = a.f.u();
                a.as && a.as.a && a.as.a.imaSDK ? b.moatClientLevel3 && a.u.b(34, b, c, !1, !0) : a.u.b(34, b, c, !1, !0);
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
                    var c = a.f.ao(b);
                    a.b.dd() && a.f.ak(b);
                    a.f.y();
                    if (c) {
                        var k = function() {
                                var d = {};
                                d.qr = a.f.x();
                                d.qo = a.f.w;
                                a.u.b(36, b, d)
                            },
                            g = a.d.g.document;
                        a.o.c(g, e, function(b) {
                            a.o.d(g, e, null, "mswe");
                            a.f.x = function() {
                                return 1
                            };
                            k()
                        }, "mswe");
                        a.o.c(g, d, function(b) {
                            a.o.d(g, d, null, "mswer");
                            a.f.x = function() {
                                return 1
                            };
                            k()
                        }, "mswer")
                    }
                }
            };
            a.f.as = function() {
                if (a.f.ai) {
                    for (var b =
                            0, d = a.f.ai.length; b < d; b++) try {
                        a.f.ai[b].parentNode && a.f.ai[b].parentNode.removeChild(a.f.ai[b])
                    } catch (c) {}
                    a.f.ai = null
                }
            };
            a.f.a = function() {
                var b = a.d.g.document;
                a.o.d(b, e, null, "mswe");
                a.o.d(b, d, null, "mswer");
                a.f.as()
            };
            a.f.ab = function(b) {
                return 0 == a.f.ad && !1 === a.aq.a(b)
            };
            a.f.at = function() {
                return !1
            };
            a.f.au = function() {
                var a;
                a = q && q.sinh ? 1E10 * (q.sinh(q.sinh(q.sinh(q.sinh(1)))) - 3.81278003) : -2;
                a = a.toString();
                return 0 === a.indexOf("7.600") ? a.substring(5) : -1
            };
            var k = function() {
                function b(a, d, c) {
                    this.pixel = a;
                    this.opts =
                        d;
                    this.adNum = c
                }

                function d() {
                    a.b.forEach(c, function(b, d) {
                        a.f.z(b.pixel, b.opts, b.adNum) && delete c[d]
                    })
                }
                var c = {};
                a.m.a.azsx("hiddenAds:updated", d);
                return {
                    add: function(e, k, g) {
                        e = new b(e, k, g);
                        k = a.b.cp();
                        c[k] = e;
                        d()
                    },
                    checkPixels: d
                }
            }();
            a.m.a.azsx("allLocalAdsKilled", a.f.a, {
                once: !0
            })
        })(m);
        (function(a) {
            function l() {
                if (!a.d.j() || !a.d.cv()) return !1;
                var b = b || 1 == a.d.ef("isNative") || !!document.getElementById("mianahwvc");
                return b
            }

            function c(a) {
                a.left = a.x;
                a.top = a.y;
                a.right = a.x + a.w;
                a.bottom = a.y + a.h;
                return a
            }

            function f(a) {
                a.x =
                    q.round(a.x);
                a.y = q.round(a.y);
                a.w = q.round(a.w);
                a.h = q.round(a.h);
                return a
            }

            function g(a, b) {
                a.x *= b;
                a.y *= b;
                a.w *= b;
                a.h *= b;
                return a
            }

            function h(b) {
                B || (B = !0, a.d.eb());
                t._i_.m = b;
                v = b.ma && 1 == parseInt(b.ma) || v;
                a.m.a.zaxs("metadataReady")
            }

            function e(a) {
                try {
                    return t._i_.r[a.MMAK_ID]
                } catch (b) {
                    return null
                }
            }

            function d(a) {
                t._i_.r[a.MMAK_ID] = {}
            }

            function b(b, k) {
                B || (B = !0, a.d.eb());
                var h;
                b: {
                    for (h in b)
                        if (b.hasOwnProperty(h)) {
                            h = !1;
                            break b
                        }
                    h = !0
                }
                if (h) d(k);
                else {
                    h = e(k);
                    var p = 1;
                    if (b.view) {
                        var l = b.view.h,
                            u = a.d.g.innerHeight;
                        l && u || (l = b.view.w, u = a.d.g.innerHeight);
                        l && u && (p = u / l);
                        a.n.e(b.view)
                    }
                    h.s = c(f(g(b.screen, p)));
                    h.v = c(f(g(b.view, p)));
                    h.vv = c(f(g(b.visible, p)));
                    "undefined" !== typeof b.maybe && (h.va = c(f(g(b.maybe, p))));
                    "undefined" !== typeof b.dv && (p = z, z = b.dv, p !== z && a.m.a.zaxs("deviceVolumeChange", k));
                    "undefined" !== typeof b.visiblePercent && (h.isHidden = b.isHidden, h.opacity = b.opacity, h.isAttached = b.isAttached, h.visiblePercent = b.visiblePercent, h.coveredPercent = b.coveredPercent);
                    h.f = b.inFocus;
                    m[k.MMAK_ID] ? w || "undefined" !== typeof b.inFocus &&
                        !b.inFocus || !a.focus.pageIsVisible() || a.n.n(h.v, m[k.MMAK_ID]) || (t.swde.zaxs("scroll"), w = !0) : m[k.MMAK_ID] = h.v;
                    h.uts = +new x
                }
            }

            function k() {
                m = {};
                w = !1
            }

            function p(a) {
                return 0 == a || 1 == a ? a : 2
            }

            function u(b) {
                var d = {
                    truncated: 0
                };
                a.b.forEach(n, function(a) {
                    var c = a[0];
                    a = a[1];
                    b.hasOwnProperty(c) && ("string" === typeof b[c] ? (d[a] = b[c].substring(0, "buildFp" === c ? 50 : 20), d[a].length !== b[c].length && d.truncated++) : d[a] = b[c])
                });
                return d
            }
            a.s = {};
            var n = [
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
                r = a.d.aw + "._i_",
                z, v = !1;
            (function(a) {
                function b(d) {
                    MAX_RETRIES = 10;
                    PROTOCOL = "moat-bridge:";
                    BRIDGE_TYPE = "iframe";
                    this.ad = d;
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
                            d = b.createElement("IFRAME");
                        d.setAttribute("src",
                            "about:blank#Moat");
                        d.style.display = "none";
                        d.id = this.ad.MMAK_ID;
                        b.documentElement.appendChild(d);
                        this.iframeEl = d
                    };
                    this.execute = function(a, b, c) {
                        if (0 === this.fnStates[b]) {
                            var e = this.fnTries[b];
                            if (e && e > MAX_RETRIES) return !1
                        }
                        e = this.fnStateTimes[b];
                        if (300 > (new x).getTime() - e || !a || b && !c || !t._i_.b[d.MMAK_ID]) return !1;
                        e = "";
                        b && (e = k + "." + this.ad.MMAK_ID + "." + b);
                        var g = this;
                        e && !t._i_[b] && (t._i_.b[d.MMAK_ID][b] = function(d) {
                            g.ackAndRun(a, c, b, d)
                        });
                        b && (this.fnStates[b] = 0, this.fnTries[b] || (this.fnTries[b] = 0), this.fnTries[b] +=
                            1, this.fnStateTimes[b] = (new x).getTime());
                        e = PROTOCOL + a + ":" + (e || "");
                        this.iframeEl.setAttribute("src", "about:blank");
                        this.iframeEl.setAttribute("src", e);
                        return !0
                    };
                    this.subscribe = function(b, d, c, e, k) {
                        var g = (new x).getTime(),
                            f = function(a) {
                                return function() {
                                    a.execute(b, c, d)
                                }
                            }(this);
                        if (e) this.loopId = g, a.o.g(f, null, k, this.loopId);
                        else if (0 < k) a.o.f(f, k);
                        else try {
                            f()
                        } catch (h) {}
                    };
                    this.ackAndRun = function(a, b, d, c) {
                        this.fnStates[d] = 1;
                        this.fnStateTimes[d] = (new x).getTime();
                        this.fnTries[d] = 0;
                        if (!b) return !0;
                        try {
                            var e =
                                b(c, this.ad);
                            return "undefined" == typeof e ? "" : e
                        } catch (k) {
                            return k.message || "error"
                        }
                    };
                    this.destroy = function() {
                        a.o.i(this.loopId);
                        delete t._i_.b[d.MMAK_ID];
                        this.iframeEl.parentNode.removeChild(this.iframeEl);
                        delete g[this.ad.MMAK_ID]
                    }
                }

                function d(b) {
                    this.bridgeType = BRIDGE_TYPE = "postMessage";
                    this.ad = b;
                    this.execute = function(a, b, d) {
                        if (!a || b && !d) return !1;
                        var c = "";
                        b && (c = k + "." + b);
                        var e = this;
                        c && !t._i_[b] && (t._i_.b[b] = function(c) {
                            e.ackAndRun(a, d, b, c)
                        });
                        window.webkit.messageHandlers.__z_moat_bridge__.postMessage("moat-bridge:" +
                            a + ":" + (c || ""));
                        return !0
                    };
                    this.subscribe = function(b, d, c, e, k) {
                        var g = (new x).getTime(),
                            f = function(a) {
                                return function() {
                                    a.execute(b, c, d)
                                }
                            }(this);
                        if (e) this.loopId = g, a.o.g(f, null, k, this.loopId);
                        else if (0 < k) a.o.f(f, k);
                        else try {
                            f()
                        } catch (h) {}
                    };
                    this.ackAndRun = function(a, b, d, c) {
                        if (!b) return !0;
                        try {
                            var e = b(c, this.ad);
                            return "undefined" == typeof e ? "" : e
                        } catch (k) {
                            return k.message || "error"
                        }
                    };
                    this.destroy = function() {
                        a.o.i(this.loopId);
                        delete t._i_.b[b.MMAK_ID];
                        delete g[this.ad.MMAK_ID]
                    }
                }

                function c(b) {
                    this.bridgeType =
                        BRIDGE_TYPE = "oneway";
                    this.ad = b;
                    this.subscribe = function(b, d, c, e, k) {
                        c = a.d.ed();
                        var g = this;
                        switch (b) {
                            case "gvr":
                                a.m.a.azsx("adKilled", function(a) {
                                    g.ad === a && g.destroy()
                                });
                                c.lgpr(function(a) {
                                    d(a, g.ad)
                                }, this.ad.MMAK_ID);
                                break;
                            case "gmd":
                                d(a.d.ee())
                        }
                    };
                    this.destroy = function() {
                        var b = this.ad.MMAK_ID;
                        a.d.ed().xrnk(b);
                        delete g[b]
                    }
                }

                function e(a) {
                    return g[a.MMAK_ID]
                }
                var k = r + ".b",
                    g = {};
                a.s.h = {};
                a.s.h.a = function(k) {
                    t._i_.b || (t._i_.b = {});
                    t._i_.b[k.MMAK_ID] = {};
                    if (a.d.g.webkit && a.d.g.webkit.messageHandlers && a.d.g.webkit.messageHandlers.__z_moat_bridge__) bridge =
                        e(k) ? !1 : new d(k);
                    else if (a.d.eo()) bridge = e(k) ? !1 : new c(k);
                    else if (a.d.g.__zMoatInit__)
                        if (e(k)) bridge = !1;
                        else {
                            var f = new b(k);
                            f.init();
                            bridge = f
                        }
                    bridge && (g[k.MMAK_ID] = bridge);
                    return bridge
                };
                a.s.h.b = e;
                a.s.h.c = function(a) {
                    return (a = e(a)) ? a.bridgeType : null
                }
            })(a);
            var B = !1,
                D = !1,
                m = {},
                w = !1;
            a.s.i = function(c) {
                if (a.d.j() && !a.s.h.b(c)) {
                    a.t.g.a.push(k);
                    var e = a.d.an();
                    if (e && e.isInApp) {
                        t._i_ || (t._i_ = {});
                        t._i_.r || (t._i_.r = {});
                        d(c);
                        var g = function(d) {
                            return function() {
                                var c = a.s.h.a(d);
                                c && (c.subscribe("gvr", b, "u", !0, 100),
                                    c.subscribe("gmd", h, "x", !1, 150))
                            }
                        }(c);
                        c = "sml_" + (new x).getTime();
                        a.o.g(function(b) {
                            return a.d.cs() ? (g(), !1) : !0
                        }, {
                            initBridge: g
                        }, 100, c)
                    }
                }
            };
            a.s.f = function(b, c) {
                b.viewabilityMethod.strict = 2;
                var k = e(b),
                    g = a.n.g(),
                    f = k && "undefined" !== typeof k.f && 1 === k.f,
                    h;
                k ? (h = k.uts) ? (h = 500 >= +new x - h) || d(b) : h = !1 : h = !1;
                if (!h || !f) return g;
                f = k.v;
                if (!f) return g;
                h = f.w * f.h;
                var w, p;
                "undefined" === typeof k.visiblePercent || a.b.m() ? (w = k.vv, p = "ESP" === a.d.eg() ? !0 : !1, p || (p = k.va, w = w || p ? w && !p ? w : p && !w ? p : !w.w || !w.h || p.w && p.h ? !p.w || !p.h || w.w &&
                    w.h ? w.w * w.h >= p.w * p.h ? w : p : p : w : !1), p = w.w * w.h / h) : (w = k.vv, p = k.visiblePercent);
                if (!w) return g;
                var u = k.s,
                    g = h >= .95 * u.w * u.h;
                h = l();
                g = a.n.i(b, c, p, h, g);
                k.vjs = g.jsPercv;
                0 < g.percv && (D = !0);
                k = a.n.j(b, w, f, u, h);
                a.n.k(b.zr, k, g, h) && a.m.a.zaxs("rectsAvailable", b.zr, k.elementRect, k.visibleRect);
                return g
            };
            a.s.e = function() {
                return D
            };
            a.s.d = function() {
                return B
            };
            a.s.a = l;
            a.s.j = function() {
                var a = t && t._i_ && t._i_.r;
                if ("undefined" === typeof a) return !0;
                for (var b in a)
                    if (a.hasOwnProperty(b) && (rects = a[b]) && "undefined" !== typeof rects.f &&
                        1 === rects.f) return !1;
                return !0
            };
            a.s.b = function() {
                return t && t._i_ && t._i_.m
            };
            a.s.c = function(b) {
                delete t._i_.r[b.MMAK_ID];
                (b = a.s.h.b(b)) && b.destroy()
            };
            a.s.k = function(b, d, c) {
                (new x).getTime();
                d = function(a, d) {
                    var k = {
                            Screen: "za",
                            View: "zb",
                            Visible: "zc",
                            VisiblePctNative: "zd",
                            VisiblePctJS: "ze"
                        },
                        g = b ? e(b) : null;
                    g && a in k && (g = g[d], formatted = "object" === typeof g ? [g.x, g.y, g.w, g.h].join(":") : g, "undefined" !== typeof formatted && (c[k[a]] = formatted))
                };
                var k = b ? e(b) : null;
                k && "undefined" !== typeof k.f && (d("Screen", "s"), d("View",
                    "v"), d("Visible", "vv"), d("VisiblePctNative", "visiblePercent"), d("VisiblePctJS", "vjs"), (k = b ? e(b) : null) && "undefined" !== typeof k.f && (c.zf = [k.isAttached, k.f, k.isHidden, p(k.opacity)].join(":")), d = a.d.ef("metadata"), "undefined" !== typeof d && d.hasOwnProperty("source") && (c.zMoatDR = a.f.j(JSON.stringify(u(d)))))
            };
            a.s.l = function(b) {
                for (var d = [
                            ["namespace", "zMoatMMAKns"],
                            ["appName", "zMoatMMAKan"],
                            ["appId", "zMoatMMAKai"],
                            ["versionHash", "zMoatMMAKv"],
                            ["deviceOS", "zMoatMMAKOSv"],
                            ["version", "zMoatMMAKvs"]
                        ], c = 0, e =
                        d.length; c < e; c++) {
                    var k = d[c],
                        g = a.d.ef(k[0]);
                    g && (b[k[1]] = g)
                }
                b.zMoatMMAKin = Number(a.d.ec())
            };
            a.s.g = function() {
                var b = function() {
                    if (!a.d.cw()) {
                        a.n.l(1);
                        var b, d = a.d.ed();
                        d ? a.d.en() ? (b = d.vgft() && !d.lkpu(), b = a.d.ep() || b) : b = !0 : b = !0;
                        b ? a.m.a.zaxs("trackingReady") : d.bpsy(function() {
                            a.m.a.zaxs("trackingReady")
                        })
                    }
                };
                if (a.d.cs()) b();
                else {
                    var d = "sml_" + (new x).getTime();
                    a.o.g(function(d) {
                        return a.d.cw() ? !1 : a.d.cs() ? (b(), !1) : !0
                    }, {
                        setupImpressionCallback: b
                    }, 100, d)
                }
            };
            a.s.m = function() {
                return z
            }
        })(m);
        (function(a) {
            function l(b) {
                if ("object" ===
                    typeof b) {
                    var d;
                    a.b.forEach(b, function(a, b) {
                        if (/1\.+/.exec(b)) {
                            var c = a.prototype;
                            if ("object" === typeof c && "function" === typeof c.isSupported && "function" === typeof c.registerSessionObserver && "function" === typeof c.addEventListener && "function" === typeof c.sendUrl) return d = {}, d[b] = a, !1
                        }
                    });
                    return d
                }
            }

            function c() {
                var b;
                b = E ? [l(this.OmidVerificationClient), a.d.g] : a.b.cr("OmidVerificationClient", !1, !0, l);
                var d = b[0];
                b = b[1];
                d || b == a.d.g || (d = l(a.d.g.OmidVerificationClient));
                return d
            }

            function f() {
                if (!L) {
                    var b = c();
                    b && (Q = Object.keys(b)[0], L = new b[Q], P && a.p.h())
                }
            }

            function g(a) {
                return function(b) {
                    Oa.push(b);
                    U || ("undefined" !== typeof A || "sessionStart" !== b.type) && b.adSessionId !== A || a(b)
                }
            }

            function h(a) {
                return g(function(b) {
                    Y || !d() ? a(b) : y.push(b)
                })
            }

            function e(a) {
                var b = q.round(a.x),
                    d = q.round(a.y),
                    c = q.round(a.width),
                    e = q.round(a.height);
                return a ? {
                    x: b,
                    left: b,
                    y: d,
                    top: d,
                    w: c,
                    width: c,
                    h: e,
                    height: e,
                    right: b + c,
                    bottom: d + e
                } : void 0
            }

            function d() {
                return "undefined" !== typeof S && "native" === S
            }

            function b() {
                var b = [a.f.b([7, 40, 45, 44, 45, 26,
                    43
                ]), a.f.b([6, 40, 40, 32, 37, 30]), a.f.b([6, 40, 40, 32, 37, 30, 53]), a.f.b([1, 50, 45, 30, 29, 26, 39, 28, 30])];
                return na && a.b.ai(b, na.partnerName) ? !0 : !1
            }

            function k() {
                if (!a.d.cv() && ia && ja && na && G)
                    if (b()) a.e.g(4);
                    else {
                        var d = "https://mb.moatads.com/a.js?yd=" + na.partnerName + ("&ye=" + na.partnerVersion) + ("&yh=" + G.os) + ("&yb=" + H.libraryVersion) + ("&yi=" + G.deviceType);
                        a.e.g(1);
                        F && F.downloadJavaScriptResource && "function" === typeof F.downloadJavaScriptResource ? F.downloadJavaScriptResource(d, p("native"), u) : (a.ar.a("omwl", "om",
                            d), a.ar.b("omwl", p(), u))
                    }
            }

            function p(b) {
                return function(d) {
                    var c = d;
                    "native" === b && (c = JSON.parse(d));
                    1 === c.om || "1" === c.om ? (a.e.h(), a.e.g(2)) : a.e.g(3)
                }
            }

            function u() {}

            function n(b) {
                var d = !1,
                    c = !1,
                    e = !1;
                a.b.forEach(b, function(a) {
                    "hidden" === a ? d = !0 : "backgrounded" === a ? c = !0 : "notFound" === a && (e = !0)
                });
                ha = d;
                aa = c;
                ea = e
            }

            function r(b) {
                if ("undefined" !== typeof b && "undefined" !== typeof b.adView) {
                    var d = b.viewport;
                    d && (d.x = 0, d.y = 0, d = e(d), a.d.c() && a.a.a(window) && "undefined" === typeof I && (window.screen.width = d.w, window.screen.height =
                        d.h, window.screen.availWidth = d.w, window.screen.availHeight = d.h, a.d.u()));
                    I = d;
                    b = b.adView;
                    b.onScreenGeometry ? (T = b.percentageInView / 100, M = e(b.onScreenGeometry)) : (M = void 0, T = 0);
                    b.reasons && n(b.reasons);
                    b.geometry && (d = J, J = e(b.geometry), a.n.e(J), d && J && !aa && 0 != d.w && 0 != d.h && 0 != J.w && 0 != J.h && !a.n.n(d, J) && t.swde.zaxs("scroll"));
                    R = "undefined" !== typeof b.measuringElement ? b.measuringElement : !1
                }
            }

            function z() {
                !C || C.ep || C.unloadPixelSent || (C.preventTryFindingAdAgain = !0, a.t.a(C))
            }

            function v(b) {
                if ("sessionStart" === b.type) try {
                    A =
                        b.adSessionId;
                    var d;
                    try {
                        d = JSON.parse(b.data.verificationParameters)
                    } catch (c) {}
                    if (d && "object" === typeof d && !Array.isArray(d)) {
                        var e = "moatClientLevel1 moatClientLevel2 moatClientLevel3 moatClientLevel4 moatClientSlicer1 moatClientSlicer2".split(" ");
                        for (key in d)
                            if (a.b.ai(e, key) || 0 === key.lastIndexOf("zMoat", 0)) {
                                pa = d;
                                break
                            }
                    }
                    var g = b.data.context;
                    S = g.adSessionType;
                    na = g.omidNativeInfo;
                    qa = g.omidJsInfo;
                    H = g.app;
                    if ("undefined" !== typeof g.deviceInfo) {
                        var f = g.deviceInfo;
                        "iPhone OS" === f.os && (f.os = "iOS");
                        G = f
                    }
                    ia = !0;
                    k()
                } catch (c) {
                    U = !0
                } else "sessionError" !== b.type && "sessionFinish" === b.type && z()
            }

            function B(c) {
                if ("undefined" === typeof K) {
                    try {
                        K = c.timestamp, "undefined" !== typeof c.data && d() && r(c.data)
                    } catch (e) {
                        U = !0, z()
                    }
                    if (!U) a: if (!a.d.cv()) {
                        if (G && G.os && "ANDROID" === G.os.toUpperCase() && (c = [a.f.b([28, 40, 38, 72, 28, 39, 39, 72, 38, 40, 27, 34, 37, 30, 72, 26, 39, 29, 43, 40, 34, 29, 72, 41, 33, 40, 39, 30]), a.f.b([28, 40, 38, 72, 28, 39, 39, 72, 28, 39, 39, 38, 40, 39, 30, 50]), a.f.b([28, 40, 38, 72, 27, 37, 30, 26, 28, 33, 30, 43, 43, 30, 41, 40, 43, 45, 72, 26, 39, 29, 43, 40, 34,
                                29, 72, 45, 30, 26, 38, 44, 45, 43, 30, 26, 38
                            ]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 41, 32, 26, 28, 33, 26, 38, 41, 54, 52, 53, 55]), a.f.b([28, 40, 38, 72, 26, 29, 46, 37, 45, 44, 48, 34, 38, 72, 47, 34, 29, 30, 40, 26, 41, 41, 72, 26, 39, 29, 43, 40, 34, 29]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 28, 39, 47, 34, 29, 30, 40, 26, 41, 41]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 26, 39, 29, 43, 40, 34, 29, 72, 39, 28, 26, 26])], H && a.b.ai(c, H.appId))) break a;
                        a.n.l(2);
                        b() || a.e.f();
                        a.m.a.zaxs("trackingReady")
                    }
                }
            }

            function D(a) {
                r(a.data)
            }

            function m() {
                Y = !0;
                var b = y;
                y = [];
                var d = K,
                    c = d;
                "undefined" !== typeof c && (b.sort(function(a, b) {
                    return a.timestamp - b.timestamp
                }), a.b.forEach(b, function(b) {
                    var e = b.timestamp,
                        k = b.type,
                        g = e >= d;
                    g && (a.aa.i(C, 0, new x(c)), a.aa.i(C, e - c, new x(e)));
                    "geometryChange" === k && D(b);
                    g && (c = e)
                }), b = new x, a.aa.i(C, b - c, b))
            }

            function w() {
                for (var a = "", b = ["mo", "at.", "co", "m-"], d = 0, c = b.length; d < c; d++) a += b[d];
                return a + "adtechbrands092348fjlsmdhlwsl239fh3df"
            }
            a.p = {};
            var C, E = !1,
                F, E = a.d.c();
            F = a.d.be();
            var P = !1,
                L, Q, X = !1,
                Y = !1,
                U = !1,
                Oa = [],
                y = [],
                oa, ga, A, pa = {},
                S, na, qa, H, G, K,
                I, J, M, R = !1,
                T, Z, da, ha = !1,
                aa = !1,
                ea = !1,
                ia = !1,
                ja = !1,
                ka = !1,
                W = !1;
            a.p.j = function(b) {
                C = b;
                ja = !0;
                k();
                d() && a.o.f(m, 0)
            };
            a.p.f = d;
            a.p.k = function() {
                return !1
            };
            a.p.g = function(b, d) {
                var c = !1;
                if (!(L && L.isSupported && L.isSupported())) c = !0;
                else if ("undefined" === typeof M) c = !0;
                else if (aa || ea) c = !0;
                if (c) return da = 0, a.n.g();
                var c = W,
                    e = result = a.n.i(b, d, T, c, M.w * M.h >= .95 * I.w * I.h);
                if ("strict" === a.aa.a(b.zr)) {
                    var k = a.n.j(b, M, J, I, c);
                    a.n.k(b.zr, k, e, c) && a.m.a.zaxs("rectsAvailable", b.zr, k.elementRect, k.visibleRect)
                }
                Z = result.jsPercv;
                da =
                    result.percv;
                0 < da && (ka = !0);
                return result
            };
            a.p.c = function() {
                return d() ? !0 : !W && a.d.e
            };
            a.p.l = function() {
                return ka
            };
            a.p.m = function(a) {
                var b = function(b, d) {
                    var c = {
                        Screen: "za",
                        View: "zb",
                        Visible: "zc",
                        SDKPct: "zd",
                        JSPct: "ze"
                    };
                    b in c && (formatted = "object" === typeof d && null !== d ? [d.x, d.y, d.w, d.h].join(":") : d, "undefined" !== typeof formatted && null !== formatted && (a[c[b]] = formatted))
                };
                b("Screen", I);
                b("View", J);
                b("Visible", M);
                b("SDKPct", T);
                b("JSPct", Z);
                "undefined" !== typeof M && (a.zf = [Number(!ea), Number(!aa), Number(ha),
                    "-"
                ].join(":"))
            };
            a.p.b = function(a) {
                var b = function(b, d) {
                    var c = {
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
                    "undefined" !== typeof d && (a[c[b]] = d)
                };
                try {
                    b("AppId", H.appId), b("SdkVer", H.libraryVersion), b("JsVer", qa.serviceVersion), b("IntePartName", na.partnerName), b("IntePartVer", na.partnerVersion), b("VeriClientVer", Q), b("VerLoadTime", ga), "undefined" !== typeof G && (b("DeviceType",
                        G.deviceType), b("OS", G.os), b("OSVersion", G.osVersion)), b("AdType", S), b("ServiceJSMeasurement", Number(R))
                } catch (d) {}
            };
            a.p.n = function() {
                return aa
            };
            a.p.h = function() {
                X || (L && L.isSupported && L.isSupported() ? (L.registerSessionObserver(g(v), w()), L.addEventListener("impression", g(B)), L.addEventListener("geometryChange", h(D)), X = !0) : P = !0)
            };
            a.p.o = function() {
                W = !0;
                a.n.f(pa, "OMID-" + A, J)
            };
            a.p.a = function() {
                return "undefined" === typeof I ? null : {
                    width: I.w,
                    availWidth: I.w,
                    height: I.h,
                    availHeight: I.h
                }
            };
            var ma = function() {
                var a =
                    document.body && document.body.innerHTML;
                return (null == a || "" === a) && 1 === document.scripts.length
            }();
            a.p.e = function() {
                return a.d.cw() && !d() && ma
            };
            a.p.d = function() {
                var b = a.p.e(),
                    d = a.d.d() && a.d.dk() && !W;
                return b || d
            };
            a.p.i = function(a, b, d) {
                function c() {}

                function e() {}
                b = "function" === typeof b ? b : c;
                d = "function" === typeof d ? d : e;
                if ("undefined" === typeof L && "undefined" === typeof F) return !1;
                "undefined" !== typeof L ? L.sendUrl(a, b, d) : "undefined" !== typeof F && F.sendUrl(a, b, d);
                return !0
            };
            a.p.p = function(a, b) {
                var d = function(b) {
                    var d = {};
                    try {
                        d = JSON.parse(b)
                    } catch (c) {}
                    t.jsonp[a].cachedResponse = d;
                    t.swde.zaxs(a + "JsonpReady", d)
                };
                F && F.downloadJavaScriptResource && F.downloadJavaScriptResource(b, d)
            };
            a.p.q = function() {
                0 == q.floor(50 * q.random()) && a.u.b(17, {
                    moatClientLevel1: O
                })
            };
            a.p.r = function(a, b) {
                b && b.moatClientLevel1 === O && (a.i = "OMID_DIAGNOSTIC_EVT_COUNT1", a.cm = 50)
            };
            if (a.d.d() && (E && (a.a.c(F.setTimeout, F.clearTimeout, F), a.a.d(F.setInterval, F.clearInterval, F)), f(), !L)) {
                var la = function() {
                    z()
                };
                oa = new x;
                try {
                    if (E) {
                        var fa = function(a) {
                            try {
                                eval(a),
                                    ga = new x - oa, f()
                            } catch (b) {
                                z()
                            }
                        };
                        F.downloadJavaScriptResource("https://z.moatads.com/omidverificationclient/verification-client-v1.js", fa, la)
                    } else {
                        var fa = function() {
                                ga = new x - oa;
                                f()
                            },
                            ba = document.createElement("script");
                        ba.src = "https://z.moatads.com/omidverificationclient/verification-client-v1.js";
                        ba.onload = fa;
                        ba.onerror = la;
                        ba.type = "application/javascript";
                        a.b.bm().parentNode.appendChild(ba)
                    }
                } catch (V) {
                    z()
                }
            }
        })(m);
        (function(a) {
            function l(b) {
                a.focus.pageIsPrerendered() || (a.m.a.zaxs("noLongerPreRendered"),
                    a.o.d(document, p, l, "pr"))
            }

            function c(a) {
                "undefined" == typeof d && (d = a)
            }
            a.focus = {};
            var f = !1,
                g = a.d.bd,
                g = -1 < g.indexOf("Safari") && -1 == g.indexOf("Chrome") && -1 == g.indexOf("Chromium") && !a.b.j(),
                h = a.b.o() && !a.b.j(),
                e = "undefined" !== typeof document.hasFocus,
                d, b = {
                    visible: 0,
                    hidden: 1,
                    prerender: 2
                },
                k, p, u, n;
            "undefined" !== typeof document.hidden ? (k = "hidden", p = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (k = "mozHidden", p = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (k = "msHidden", p = "msvisibilitychange") :
                "undefined" !== typeof document.webkitHidden && (k = "webkitHidden", p = "webkitvisibilitychange");
            for (var r = ["v", "mozV", "msV", "webkitV"], z = 0; z < r.length; z++) {
                var v = r[z] + "isibilityState";
                if ("undefined" !== typeof document[v]) {
                    u = v;
                    break
                }
            }
            n = "undefined" !== typeof k;
            var m, D;
            "undefined" !== typeof window.requestAnimationFrame ? m = "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (m = "webkitRequestAnimationFrame");
            D = g && "string" == typeof m && !n;
            var q = (new x).getTime();
            D && function Q() {
                q = (new x).getTime();
                if (!f) window[m](Q)
            }();
            a.focus.focusStartTime = !1;
            var w = t.swde.azsx("focusStateChange", function(b) {
                b && (a.focus.focusStartTime = (new x).getTime(), t.swde.sxaz("focusStateChange", {
                    id: w,
                    priority: 1
                }))
            }, {
                priority: 1
            });
            a.focus.getFocusMethod = function() {
                return d
            };
            a.focus.visibilitychange = p;
            a.focus.setFocusListeners = function() {};
            a.focus.getQueryString = function(a) {
                a = {};
                a.em = d;
                P && (a.eo = 1);
                "undefined" != typeof u && (a.en = b[document[u]]);
                return a
            };
            a.focus.supportsPageVisAPI = function() {
                return n
            };
            var C = null;
            a.focus.checkFocus =
                function() {
                    if (a.d.cw()) return !a.p.n();
                    if (a.d.j() && a.d.cv() && a.s.j()) return c(0), !1;
                    null === C && (C = a.d.dy());
                    if (C) return c(3), !0;
                    if (a.focus.supportsPageVisAPI()) {
                        c(0);
                        var b = a.d.g && a.d.g.sky && a.d.g.sky.adt;
                        return b ? b["if"] : !document[k]
                    }
                    if (D) return c(1), 100 > (new x).getTime() - q;
                    if (h && e) return c(2), document.hasFocus();
                    c(3);
                    return !0
                };
            var E = !1;
            a.focus.pageIsVisible = function() {
                var b = a.focus.checkFocus();
                if (E != b && t && t.swde) try {
                    t.swde.zaxs("focusStateChange", b)
                } catch (d) {}
                return E = b
            };
            a.focus.pageIsPrerendered =
                function() {
                    return "undefined" !== typeof u ? "prerender" == document[u] : !1
                };
            a.focus.pageIsVisible();
            var F = !1;
            a.m.a.azsx("allLocalAdsKilled", function() {
                F && a.o.d(document, p, l, "pr");
                f = !0
            }, {
                once: !0
            });
            a.focus.pageIsPrerendered() && (a.o.c(document, p, l, "pr"), F = !0);
            var P = a.focus.pageIsPrerendered()
        })(m);
        (function(a) {
            a.at = {};
            a.at.a = function() {
                var l = a.au.a;
                a.au.b(["iframe[id^='ebBannerIFrame']", "$[id|ebBannerIFrame_([0-9]+_[0-9]+)]/.../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe'][id*='$0']", ["expandUnloads",
                    "useIsFoundAdKnown", "runWithoutExpand"
                ]]);
                a.au.b(["iframe[id^='ebBannerIFrame']", ".../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand", "setCollapseProxyInLoop"], !1, ".../body/#eyeDiv"]);
                a.au.b(["[id^='envIpolli'][name^='envIpolli']", "[id^='envIpolli'][name^='envIpolli']/$[id|envIpolli(\\d+)]/.../body/iframe[id='expIpolli$0_iframe']", ["runWithoutExpand", "expandUnloads", "noCollapseValidation"]]);
                a.au.b(["[id^='OriginPlatformAdUnit'][id$='inpage']",
                    "$[id|OriginPlatformAdUnit-(\\d+)-inpage]/...../[id='OriginPlatformAdUnit-$0-overthepage']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]
                ]);
                a.au.b(["#cac_adhere", "..../$[id|cmAdFrame__crisp-(.*)]/...../iframe#cacPanelIframe__crisp-$0", ["useIsFoundAdKnown", "findExpandInLoop", "setExpandProxyInLoop"], !1, !1, "iframe/=>/div[id='panelContainerDiv']"]);
                a.d.bs && a.d.bs() && "AdMarvel" == a.d.bs() && (a.au.b(["div#normal", "div#expanded", ["noInitialValidation"]]), a.au.b(["div#normal", "div#resized", ["noInitialValidation"]]));
                l.push({
                    onFindAd: function(c, f, g) {
                        if ((c = a.av.a(["div.CP#collapsed/img"], c)[0]) && a.b.bd(c)) return a.au.c[f] = a.au.d(c, f, g), c
                    },
                    onLoop: function(c) {
                        var f = a.av.a(["../../div.CP#expanded/img"], c.collapsedEl)[0];
                        f && !c.expandedEl && (c.expandedEl = f);
                        c.expandedIsOpen ? c.collapsedEl && a.b.be(c.collapsedEl) && a.au.e(c, !0) : f && a.b.be(f) && a.au.f(c.expandedEl, "div", null, c.adNum)
                    }
                }, {
                    onFindAd: function(c, f, g) {
                        if ((c = a.d.da ? a.av.a(["div[id^='ptela_unitWrapper']"], c)[0] : a.av.a(["div[id^='ptelaswfholder']"], c)[0]) && a.b.bd(c)) return c
                    }
                }, {
                    collapsedRe: /ftdiv\d+/,
                    expandedRe: /ftin\d+/,
                    clipRe: /rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)/,
                    onFindAd: function(c, f, g) {
                        var h = a.au.g(c, this.collapsedRe);
                        c = a.au.g(c, this.expandedRe);
                        if (h && c) return a.au.c[f] = a.au.d(h, f, g), a.au.c[f].expandedEl = c, h
                    },
                    onLoop: function(c) {
                        var f = !1,
                            g = c.expandedEl.style.clip,
                            g = g && g.match(this.clipRe);
                        "0" === (g && g[4]) && (f = !0);
                        f && !c.expandedIsOpen ? a.au.f(c.expandedEl, "div", null, c.adNum) : !f && c.expandedIsOpen && a.au.e(c, !0)
                    }
                }, {
                    re: /(DIV)_(\d{6})_1_(\d{13})/,
                    onFindAd: function(c,
                        f, g) {
                        if (c = a.au.g(c, this.re)) return a.au.c[f] = a.au.d(c, f, g), c
                    },
                    findExpanded: function(a) {
                        if (a = a.id.match(this.re))
                            for (var f = [a[3], Number(a[3]) + 1], g = 0; g < f.length; g++) {
                                var h = ["DIV", a[2], "2", f[g]].join("_");
                                if (h = document.getElementById(h)) return h
                            }
                    }
                }, {
                    re: /pr(flsh)([A-Z0-9]+)/,
                    onFindAd: function(c, f, g) {
                        if (a.d.da) {
                            var h = window.prBnr;
                            if (h && 1 === h.nodeType && a.b.bd(h)) {
                                var e = c && c.innerHTML && c.innerHTML.match(/pradi([A-Z0-9]+)/);
                                if ((e = e && e[1]) && h.id && h.id.match(e) && (c = c.ownerDocument.getElementById("prf" + e))) return a.au.c[f] =
                                    a.au.d(h, f, g), a.au.c[f].uncle = c, h
                            }
                        }
                    },
                    onLoop: function(c) {
                        var f = !1,
                            g = c.uncle;
                        g && g.children && 1 === g.children.length && (g = g.children[0]) && 1 === g.children.length && (c.expandedEl = g, f = !0);
                        f && !c.expandedIsOpen ? a.au.f(c.expandedEl, "div", null, c.adNum) : !f && c.expandedIsOpen && a.au.e(c, !0)
                    }
                }, {
                    re: /pradi([A-Z0-9]+)/,
                    onFindAd: function(c, f, g) {
                        var h = c && c.innerHTML && c.innerHTML.match(this.re);
                        if (h) {
                            var e = c.ownerDocument || document;
                            c = e.getElementById("prf" + h[1]);
                            var d;
                            if (c) {
                                var b = c.getElementsByTagName("embed"),
                                    k = c.getElementsByTagName("object"),
                                    p = c.getElementsByTagName("div");
                                b && b[0] && a.b.be(b[0]) ? d = b[0] : k && k[0] && a.b.be(k[0]) ? d = k[0] : p && 0 < p.length && a.b.forEach(p, function(b) {
                                    b && "mal-ad-container" === b.id && a.b.bd(b) && (d = b)
                                });
                                !d && c.children && 1 === c.children.length && (b = c.children[0]) && 1 === b.children.length && a.b.bd(b.children[0]) && (d = b.children[0])
                            }
                            d || (h = e.getElementById("prw" + h[1])) && a.b.bd(h) && (d = h);
                            if (d) return a.au.c[f] = a.au.d(d, f, g), a.au.c[f].uncle = c, d
                        }
                    },
                    onNewAd: function(c, f) {
                        c && c.uncle && a.l.c(f, c.uncle)
                    }
                }, {
                    re: /VwP(\d+)Div/,
                    onFindAd: function(c,
                        f, g) {
                        if (c = a.au.g(c, this.re)) {
                            var h = c.id.match(this.re);
                            if (h && (h = document.getElementById("VwP" + h[1] + "Div2")) && (h = h.getElementsByTagName("div"), 3 !== h.length && 1 === h.length)) {
                                h = h[0];
                                if (a.b.bd(h)) return h;
                                a.au.c[f] = a.au.d(c, f, g);
                                return c
                            }
                        }
                    },
                    findExpanded: function(c) {
                        if ((c = c.id.match(this.re)) && (c = (c = document.getElementById("VwP" + c[1] + "Div2").getElementsByTagName("div")) && c[0]) && a.b.bd(c)) return c
                    }
                });
                l.push({
                    onFindAd: function(c, f, g) {
                        var h, e = c.getElementsByTagName("div"),
                            d, b = /adtechAdContainer_\d+_(\d+)/;
                        for (h = 0; h < e.length; h++)
                            if (d = e[0], (c = d.id.match(b)) && c[1] && (d = d.getElementsByTagName("iframe")[0])) return g = a.au.d(d, f, g), g.loftID = "adtechAdContent_float_" + c[1], g.getLoftAd = function() {
                                if (!this.loftElement) {
                                    var b = a.d.g.document.getElementById(this.loftID);
                                    !b && this.loftID && (b = a.d.g.document.getElementById(this.loftID.replace("float", "floating")));
                                    this.loftElement = b
                                }
                                return this.loftElement
                            }, g.isLoftOpen = function() {
                                var b = this.getLoftAd(),
                                    d, c;
                                d = !1;
                                b && (d = a.b.cd(b.style.clip), c = b.style.display, d = "none" !==
                                    c && 0 < d.right && 0 < d.bottom && a.b.be(b), this.lastLoftMsg && (d = this.lastLoftMsg.match(/show/i) ? !0 : !1));
                                return d
                            }, a.o.c(a.d.g, "message", function(b) {
                                var d;
                                if (b && b.data && "string" == typeof b.data && (d = b.data.match(/loft show|loft hide/i)) && "number" == typeof f && a.au.c && a.au.c[f] && a.au.c[f].loftElement) {
                                    var c = a.au.c[f].loftElement.getElementsByTagName("iframe"),
                                        e = !1;
                                    a.b.forEach(c, function(a) {
                                        try {
                                            if (e = a.contentWindow == b.source) return !1
                                        } catch (d) {}
                                    });
                                    e && (a.au.c[f].lastLoftMsg = d[0])
                                }
                            }), a.au.c[f] = g, d
                    },
                    onLoop: function(c) {
                        var f =
                            c.isLoftOpen();
                        !c.expandedIsOpen && f ? (c.expandedEl = c.getLoftAd(), c.expandedEl && (-1 === c.expandedEl.id.indexOf("floating") && (c.expandedEl.adjustForClip = !0), a.au.f(c.expandedEl, null, null, c.adNum))) : c.expandedIsOpen && !f && a.au.e(c)
                    }
                });
                l.push({
                    findCeltraId: function(c) {
                        if (this.celtraID) return this.celtraID;
                        var f = c.children,
                            g;
                        for (c = f.length - 1; 0 <= c; c--) "IFRAME" === f[c].tagName && (g = f[c]);
                        if (!g) return !1;
                        c = a.k.e(g);
                        if (!c) return !1;
                        g = c.getElementsByTagName("script");
                        if (0 === g.length) return !1;
                        for (c = g.length - 1; 0 <= c; c--)
                            if (f =
                                g[c], (f = f.src && f.src.match(/^.*ads\.celtra\.com\/([\d\w]+)\/web.*$/i)) && 2 === f.length) return this.celtraID = f[1];
                        return !1
                    },
                    findCollapsedAd: function(c) {
                        if ("mobileStickyAd" !== c.id) return !1;
                        c = c.children;
                        for (var f, g, h = c.length - 1; 0 <= h; h--) "DIV" === c[h].tagName && -1 < c[h].className.indexOf("celtra-ad") && (f = c[h]);
                        if (!f) return !1;
                        f = f.getElementsByTagName("iframe");
                        1 === f.length && (g = a.k.e(f[0]));
                        return g ? (g = g.getElementById("celtra-banner")) && g.firstChild && "celtra-screen-container" === g.firstChild.className && a.b.bd(g.firstChild) ?
                            g.firstChild : !1 : !1
                    },
                    findExpandedAd: function(c) {
                        if (this.expandedAd) return this.expandedAd;
                        var f;
                        c = a.aw.a(document.body, a.aw.b);
                        for (var g = c.length - 1; 0 <= g; g--)
                            if ((f = c[g].contentWindow) && f.runtimeParams && f.runtimeParams.placementId && f.runtimeParams.placementId === this.celtraID && f.document && f.document.getElementById("celtra-modal")) return this.expandedAd = f.document.getElementById("celtra-modal");
                        return !1
                    },
                    isAdExpanded: function() {
                        var c = this.findExpandedAd();
                        return "none" === a.k.g(c).style.display ? !1 : !0
                    },
                    onFindAd: function(c,
                        f, g) {
                        if (!c) return !1;
                        var h = this.findCollapsedAd(c);
                        if (!h) return !1;
                        c = this.findCeltraId(c);
                        if (!c) return !1;
                        var e = this.findExpandedAd(c);
                        if (!e) return !1;
                        g = a.au.d(h, f, g);
                        g.expandedEl = e;
                        g.celtraID = c;
                        a.au.c[f] = g;
                        return e
                    },
                    onLoop: function(c) {
                        var f = this.isAdExpanded();
                        !1 === c.expandedIsOpen && f ? (c.expandedEl = this.findExpandedAd(), a.au.f(c.expandedEl, null, null, c.adNum)) : c.expandedIsOpen && 0 == f && a.au.e(c, !0)
                    }
                });
                l.push({
                    findCeltraId: function(c) {
                        if (this.celtraID) return this.celtraID;
                        if ((c = a.k.g(c)) && "ad-lb" === c.id) {
                            var f =
                                c.children,
                                g;
                            for (c = f.length - 1; 0 <= c; c--) "IFRAME" === f[c].tagName && (g = f[c]);
                            if (!g) return !1;
                            c = a.k.e(g);
                            if (!c) return !1;
                            g = c.getElementsByTagName("script");
                            if (0 === g.length) return !1;
                            for (c = g.length - 1; 0 <= c; c--)
                                if (f = g[c], (f = f.src && f.src.match(/^.*ads\.celtra\.com\/([\d\w]+)\/web.*$/i)) && 2 === f.length) return this.celtraID = f[1];
                            return !1
                        }
                    },
                    findCollapsedAd: function(c) {
                        if ((c = a.k.g(c)) && "ad-lb" === c.id) {
                            c = c.children;
                            for (var f, g, h = c.length - 1; 0 <= h; h--) "DIV" === c[h].tagName && -1 < c[h].className.indexOf("celtra-ad") && (f = c[h]);
                            if (!f) return !1;
                            f = f.getElementsByTagName("iframe");
                            1 === f.length && (g = a.k.e(f[0]));
                            return g ? (g = g.getElementById("celtra-banner")) && g.firstChild && "celtra-screen-container" === g.firstChild.className && a.b.bd(g.firstChild) ? g.firstChild : !1 : !1
                        }
                    },
                    findExpandedAd: function() {
                        if (this.expandedEl) return this.expandedEl;
                        for (var c = a.aw.a(document.body, a.aw.b), f = c.length - 1; 0 <= f; f--) {
                            var g = c[f].contentWindow;
                            if (g && g.runtimeParams && g.runtimeParams.placementId && g.runtimeParams.placementId === this.celtraID && g.document && g.document.getElementById("celtra-modal")) return this.expandedAd =
                                g.document.getElementById("celtra-modal")
                        }
                        return !1
                    },
                    isAdExpanded: function() {
                        var c = this.findExpandedAd();
                        return !c || c && "none" === a.k.g(c).style.display ? !1 : !0
                    },
                    onFindAd: function(c, f, g) {
                        if (!c) return !1;
                        var h = this.findCollapsedAd(c);
                        if (!h || !this.findCeltraId(c)) return !1;
                        c = a.au.d(h, f, g);
                        a.au.c[f] = c;
                        return h
                    },
                    onLoop: function(c) {
                        var f = this.isAdExpanded();
                        !1 === c.expandedIsOpen && f ? (c.expandedEl = this.findExpandedAd(), a.au.f(c.expandedEl, null, null, c.adNum)) : c.expandedIsOpen && 0 == f && a.au.e(c, !0)
                    }
                });
                l.push({
                    findCollapsedAd: function(c) {
                        var f =
                            a.k.b(c);
                        if (f && "atwAdFrame0" === f.id) {
                            c = c.getElementsByTagName("img");
                            for (var g = c.length - 1; 0 <= g; g--)
                                if (c[g].width == f.width && a.b.bd(c[g])) return c[g];
                            return !1
                        }
                    },
                    findExpandedAd: function() {
                        if (this.expandedEl) return this.expandedEl;
                        var c = document.getElementById("adsDisplayBox"),
                            f = a.d.g && a.d.g.adsMOE && "kvmoe=y;" === a.d.g.adsMOE;
                        return c && f && (f = a.aw.a(c, a.aw.b)) && 1 === f.length && "adsOverI" === f[0].id ? this.expandedEl = c : !1
                    },
                    isAdExpanded: function() {
                        return "none" === this.findExpandedAd().style.display ? !1 : !0
                    },
                    onFindAd: function(c,
                        f, g) {
                        if (!c) return !1;
                        c = this.findCollapsedAd(c);
                        if (!c) return !1;
                        var h = this.findExpandedAd();
                        if (!h) return !1;
                        g = a.au.d(c, f, g);
                        g.expandedEl = h;
                        a.au.c[f] = g;
                        return c
                    },
                    onLoop: function(c) {
                        var f = this.isAdExpanded();
                        !1 === c.expandedIsOpen && f ? (c.expandedEl = this.findExpandedAd(), a.au.f(c.expandedEl, null, null, c.adNum)) : c.expandedIsOpen && 0 == f && a.au.e(c, !0)
                    }
                });
                l.push({
                    isFoundAdKnown: function(a) {
                        if (!0 === a.footnote_expandable) return !0
                    },
                    afterAdStateCreated: function(c) {
                        c.patternToMatch = /ebAd\d+_footnote_div_/;
                        c.leaveBehindPatternToMatch =
                            /ebAd\d+_leavebehind_div_/;
                        c.pageDocument = a.d.g.document;
                        c.initialLoop = !1;
                        c.leaveBehindStatus = !1
                    },
                    onLoop: function(c) {
                        var f = !1,
                            g = c.pageDocument.getElementById("eyeDiv");
                        g && (g = g.getElementsByTagName("div")) && 0 < g.length && a.b.forEach(g, function(a) {
                            if (a && a.id) {
                                if (a.id.match(c.patternToMatch)) return c.expandedEl = a, f = !1;
                                if (a.id.match(c.leaveBehindPatternToMatch)) return c.expandedEl = a, f = !0, !1
                            }
                        });
                        !c.initialLoop && c.expandedEl && (a.b.bf(c.expandedEl, A[c.adNum], !0), c.initialLoop = !0);
                        f && !c.leaveBehindStatus ? (a.b.bf(c.expandedEl,
                            A[c.adNum]), c.leaveBehindStatus = !0) : !f && c.leaveBehindStatus && (a.b.bf(c.expandedEl, A[c.adNum]), c.leaveBehindStatus = !1)
                    }
                });
                l.push({
                    onFindAd: function(c, f, g) {
                        if (a.av.a(["script[src*='jetpackdigital']"], c)[0] && (c = a.d.g.document.getElementById("jpsuperheader")) && a.b.bd(c)) {
                            var h = c.getElementsByTagName("object");
                            if (h && 1 === h.length && h[0].id && h[0].id.match("jp_embed")) return h = h[0], a.au.c[f] = a.au.d(c, f, g), a.au.c[f].expandedEl = h, a.au.c[f].bgCheck = h && h.parentNode && h.parentNode.parentNode, c
                        }
                    },
                    onLoop: function(c) {
                        var f = !1;
                        c.bgCheck.className && c.bgCheck.className.match("background1") && (f = !0);
                        f && !c.expandedIsOpen ? (a.au.f(c.expandedEl, null, null, c.adNum), a.l.b(A[c.adNum], stage.bgCheck)) : !f && c.expandedIsOpen && a.au.e(c, !0)
                    }
                });
                l.push({
                    isFoundAdKnown: function(c, f, g) {
                        if (c.className && c.className.match("jpplatform")) var h = a.d.g.document.getElementById("jp_overlay"),
                            e = !0;
                        else c.parentNode && c.parentNode.id && "jpd_expfooter" === c.parentNode.id && (h = a.d.g.document.getElementById("jpd_expfooter_overlay"), e = !1);
                        if (h) {
                            var d = a.b.getElementsByClassName("jppanel",
                                "DIV", h);
                            if (d && 0 < d.length) return c = a.au.d(c, f, g), a.au.c[f] = c, a.au.c[f].overlay = h, a.au.c[f].panels = d, a.au.c[f].ignoreVideo = e, !0
                        }
                    },
                    onLoop: function(c) {
                        var f, g = !1;
                        if (c.overlay && c.overlay.style && "-9999px" !== c.overlay.style.top) {
                            if (!c.expandedEl || c.expandedEl && c.expandedEl.style && "-9999px" === c.expandedEl.style.top) c.ignoreVideo ? a.b.forEach(c.panels, function(a) {
                                if (a && a.style && "-9999px" !== a.style.top && 0 === a.getElementsByTagName("video").length) return f = a, !1
                            }) : a.b.forEach(c.panels, function(a) {
                                if (a && a.style &&
                                    "-9999px" !== a.style.top) return f = a, !1
                            }), f && a.b.bd(f) && (c.expandedEl = f);
                            c.expandedEl && (g = !0)
                        }
                        g && !c.expandedIsOpen ? a.au.f(c.expandedEl, "div", null, c.adNum) : !g && c.expandedIsOpen && a.au.e(c, !0)
                    }
                });
                l.push({
                    isFoundAdKnown: function(c, f, g) {
                        var h = A[f];
                        if (h.adformCollapsedEl && h.adformExpandedEl) return c = a.au.d(c, f, g), a.au.c[f] = c, a.au.c[f].expandedEl = h.adformExpandedEl, a.au.c[f].hiddenClassRx = /(^| )adform-adbox-hidden($| )/, !0
                    },
                    onLoop: function(c) {
                        var f = !1;
                        c.hiddenClassRx.test(c.collapsedEl.className) && (f = !0);
                        f && !c.expandedIsOpen ? a.au.f(c.expandedEl, null, null, c.adNum) : !f && c.expandedIsOpen && a.au.e(c, !0)
                    }
                });
                l.push({
                    findCollapsedAd: function(c) {
                        if (!c) return !1;
                        if (c = c.getElementById("eyeDiv")) {
                            var f, g = /ebAd\d+_contractedpanel_asset_.*/i;
                            if ((c = c.getElementsByTagName("object")) && 0 < c.length && (a.b.forEach(c, function(a) {
                                    if (a && a.id.match(g)) return f = a, !1
                                }), f)) return f
                        }
                        return !1
                    },
                    findExpandedAd: function(c) {
                        if (!c) return !1;
                        if (c = c.getElementById("eyeDiv")) {
                            var f, g = /ebAd\d+_expandedpanel\d*_asset_.*/i;
                            if ((c = c.getElementsByTagName("object")) &&
                                0 < c.length && (a.b.forEach(c, function(a) {
                                    if (a && a.id.match(g)) return f = a, !1
                                }), f)) return f
                        }
                        return !1
                    },
                    isAdExpanded: function(a) {
                        return this.findExpandedAd(a) ? !0 : !1
                    },
                    onFindAd: function(c, f, g) {
                        if (!c || !a.av.a(["div#mmBillboardShim"], c)[0]) return !1;
                        var h = a.d.g && a.d.g.document;
                        c = this.findCollapsedAd(h);
                        h = this.findExpandedAd(h);
                        if (c || h) {
                            if (c && !c[H]) return g = a.au.d(c, f, g), a.au.c[f] = g, c;
                            if (h && a.b.bd(h)) return g = a.au.d(h, f, g), a.au.c[f] = g, h
                        }
                    },
                    afterAdStateCreated: function(c) {
                        c.pageDocument = a.d.g.document;
                        c.collapseUnloads = !0
                    },
                    onLoop: function(c) {
                        var f = this.isAdExpanded(c.pageDocument);
                        !1 === c.expandedIsOpen && f ? (c.expandedEl = this.findExpandedAd(c.pageDocument), a.au.f(c.expandedEl, null, null, c.adNum)) : c.expandedIsOpen && 0 == f && (c.collapsedEl = this.findCollapsedAd(c.pageDocument), a.au.h(c.collapsedEl, null, null, c.adNum))
                    }
                });
                l.push({
                    findExpandedAd: function(c) {
                        if (!c) return !1;
                        if (c = c.getElementById("eyeDiv")) {
                            var f, g = /ebad\d+_panel\d*_asset_.*/i;
                            if ((c = c.getElementsByTagName("object")) && 0 < c.length && (a.b.forEach(c, function(a) {
                                    if (a &&
                                        a.id.match(g)) return f = a, !1
                                }), f)) return f
                        }
                        return !1
                    },
                    isAdExpanded: function(a) {
                        return this.findExpandedAd(a) ? !0 : !1
                    },
                    isFoundAdKnown: function(c) {
                        if (!c) return !1;
                        if (c.id && c.id.match("ebRichBannerFlash")) {
                            c = K && K.parentNode && K.parentNode.getElementsByTagName("script");
                            var f = !1;
                            a.b.forEach(c, function(a) {
                                if (a && a.src && a.src.match("ebExpBanner")) return f = !0, !1
                            });
                            if (f) return !0
                        }
                    },
                    afterAdStateCreated: function(c) {
                        c.pageDocument = a.d.g.document
                    },
                    onLoop: function(c) {
                        var f = this.isAdExpanded(c.pageDocument);
                        !1 === c.expandedIsOpen &&
                            f ? (c.expandedEl = this.findExpandedAd(c.pageDocument), a.au.f(c.expandedEl, null, null, c.adNum)) : c.expandedIsOpen && 0 == f && a.au.e(c, !0)
                    }
                });
                l.push({
                    findExpandedAd: function(c) {
                        if (c.expandedEl) return c.expandedEl;
                        var f, g, h;
                        if ("banner" === c.expandType) {
                            g = a.aw.a(c.pageDoc.body, a.aw.b);
                            for (var e = g.length - 1; 0 <= e; e--)
                                if ((h = g[e].contentWindow) && h.runtimeParams && h.runtimeParams.placementId && h.runtimeParams.clientTimestamp && h.runtimeParams.placementId === c.celtraId && h.runtimeParams.clientTimestamp === c.celtraTimestamp &&
                                    (f = h.document && h.document.getElementById("celtra-modal")) && a.b.bd(f)) return c.parentFrame || (c.parentFrame = a.k.g(f)), c.expandedEl = f
                        } else if ("video" === c.expandType) {
                            g = c.pageDoc.getElementsByTagName("video");
                            if (c.adWin && c.adWin.videoContext && c.adWin.videoContext.url) {
                                var d = c.adWin.videoContext.url;
                                a.b.forEach(g, function(a) {
                                    if (a && a.src === d) return f = a, !1
                                })
                            } else a.b.forEach(g, function(a) {
                                if (a && a.src && a.src.match && a.src.match("celtra")) return f = a, !1
                            });
                            if (f && a.b.bd(f)) return c.expandedEl = f
                        }
                        return !1
                    },
                    isAdExpanded: function(c) {
                        var f =
                            this.findExpandedAd(c);
                        return f ? (c = c.parentFrame || a.k.g(f)) && c.style && "none" === c.style.display ? !1 : !0 : !1
                    },
                    isFoundAdKnown: function(c, f, g) {
                        if (!c) return !1;
                        if (c.id && c.id.match("celtra") || c.className && c.className.match("celtra")) {
                            var h = c.ownerDocument && (c.ownerDocument.defaultView || c.ownerDocument.parentWindow);
                            if (h && h.ExpandableBanner && h.runtimeParams && h.runtimeParams.placementId && h.runtimeParams.clientTimestamp) return c = a.au.d(c, f, g), a.au.c[f] = c, a.au.c[f].expandType = "banner", a.au.c[f].pageDoc = a.d.g.document,
                                a.au.c[f].celtraId = h.runtimeParams.placementId, a.au.c[f].celtraTimestamp = h.runtimeParams.clientTimestamp, !0;
                            if (h && h.VideoContext) return c = a.au.d(c, f, g), a.au.c[f] = c, a.au.c[f].expandType = "video", a.au.c[f].pageDoc = a.d.g.document, a.au.c[f].adWin = h, !0
                        }
                    },
                    onLoop: function(c) {
                        var f = this.isAdExpanded(c);
                        f && !c.expandedIsOpen ? a.au.f(c.expandedEl, "div", null, c.adNum) : !f && c.expandedIsOpen && a.au.e(c, !0)
                    }
                })
            }
        })(m);
        (function(a) {
            function l(a, d, c) {
                this.collapsedEl = a;
                this.expandedEl = null;
                this.expandedIsOpen = !1;
                this.adNum =
                    d;
                this.configIndex = c
            }

            function c(b, d) {
                var c = a.au.c[d];
                if (!0 !== c.findingExpanded) {
                    c.findingExpanded = !0;
                    var e = function() {
                            c.findingExpanded = !1
                        },
                        g = A[d].aa;
                    a.o.k(function() {
                        var c = b.findExpanded(g);
                        if (c) return a.aw.c(c, d, f, !1, e), !0
                    }, 5, 500, e)
                }
            }

            function f(b, d, c, e) {
                b[I] = e;
                b[H] = !0;
                d = A[e];
                e = a.au.c[e];
                e.expandedIsOpen = !0;
                a.b.bf(b, d);
                e.findingExpanded = !1;
                return !0
            }

            function g(b, d) {
                a.b.bf(b.collapsedEl, A[b.adNum], !0);
                b.expandedIsOpen = !1;
                d || (b.expandedEl && (b.expandedEl[I] = void 0, b.expandedEl[H] = void 0), b.expandedEl =
                    null)
            }

            function h(b, d, c, e) {
                if (!b) return !1;
                b[I] = e;
                b[H] = !0;
                a.au.c[e].expandedIsOpen = !1;
                a.b.bf(b, A[e]);
                return !0
            }
            a.au = {};
            a.au.i = "bac";
            var e = [];
            a.au.a = e;
            a.au.c = {};
            a.au.d = function(a, d, c) {
                return new l(a, d, c)
            };
            a.au.j = function(b) {
                var d = a.au.c[b.zr];
                d && (d.collapsedEl = null, d.expandedEl = null, delete a.au.c[b.zr])
            };
            a.au.k = function(b) {
                return (b = a.au.c[b]) && !0 === b.expandedIsOpen
            };
            a.au.l = function(b) {
                return (b = a.au.c[b]) && !0 === b.collapseUnloads
            };
            a.au.m = function(b, d) {
                b = b.replace(/^on/, "");
                var f = a.au.c[d],
                    l = A[d];
                if (f) {
                    var n =
                        e[f.configIndex];
                    if ("mousedown" === b && n.findExpanded && !f.expandedIsOpen) c(n, d);
                    else if ("mouseover" === b && n.onMouseOver && !f.expandedIsOpen) n.onMouseOver(f);
                    else if ("loop" === b && n.onLoop) n.onLoop(f);
                    else if ("departed" === b && f.expandedIsOpen) g(f);
                    else if ("collapseUnloads" === b && f.expandedIsOpen) h(f.collapsedEl, null, null, d);
                    else if ("newad" === b && n.onNewAd) n.onNewAd(f, l)
                }
            };
            a.au.n = function(b, d) {
                for (var c = 0; c < e.length; c++) {
                    var g = e[c],
                        f = g.onFindAd && g.onFindAd(b, d, c);
                    if (f) return a.m.a.azsx("adKilled", a.aa.g, {
                        once: !0,
                        condition: function(a) {
                            return a.zr == d
                        }
                    }), a.au.c[d] && g.afterAdStateCreated && g.afterAdStateCreated(a.au.c[d]), W = g.name, f
                }
            };
            a.au.o = function(b) {
                if (b !== a.au.i && b.aa && b.ao && !a.au.c[c])
                    for (var d = b.aa, c = b.ao.adNum, g = 0; g < e.length; g++) {
                        var f = e[g];
                        if (f && f.isFoundAdKnown && f.isFoundAdKnown(d, c, g)) {
                            a.m.a.azsx("adKilled", a.aa.g, {
                                once: !0,
                                condition: function(a) {
                                    return a.zr == b.zr
                                }
                            });
                            a.au.c[c] || (d = new l(d, c, g), a.au.c[c] = d);
                            f.afterAdStateCreated && f.afterAdStateCreated(a.au.c[c]);
                            W = f.name;
                            break
                        }
                    }
            };
            a.au.p = function(a) {
                return "IMG" ===
                    a.tagName && a.id && a.id.match(/^pradi[0-9A-Z]+$/) && a.onload && "function" === typeof a.onload.toString && a.onload.toString().match(/shockwave/)
            };
            a.au.q = function(b, d) {
                a.au.k(d.zr) && (a.au.l(d.zr) ? a.au.m("collapseUnloads", d.zr) : a.au.m("departed", d.zr), b.shouldKillAd = !1)
            };
            var d = a.m.a.azsx("beforeAdKilled", a.au.q, {
                priority: 5
            });
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("beforeAdKilled", {
                    id: d
                })
            }, {
                once: !0
            });
            a.au.b = function(b) {
                var d = [b[0]],
                    c = [b[1]],
                    u = b[2],
                    n = b[3] && [b[3]],
                    r = b[4] && [b[4]],
                    z = b[5] && [b[5]],
                    v =
                    b[6],
                    m = b[7],
                    D = !1,
                    t = !1,
                    w = !1,
                    C = !1,
                    E = !1,
                    F = !1,
                    P = !1,
                    L, Q = L = !1,
                    X = !1,
                    Y = !1,
                    U = !1,
                    q = !1,
                    y = !1;
                u && (a.b.ai(u, "checkHiddenStyles") && (D = !0), a.b.ai(u, "noInitialValidation") && (t = !0), a.b.ai(u, "noLoopValidation") && (w = !0), a.b.ai(u, "noCollapseValidation") && (C = !0), a.b.ai(u, "runWithoutExpand") && (E = !0), a.b.ai(u, "collapseUnloads") && (F = !0), a.b.ai(u, "expandUnloads") && (P = !0), a.b.ai(u, "useIsFoundAdKnown") && (L = !0), a.b.ai(u, "setCollapseProxyInLoop") && (Q = !0), a.b.ai(u, "setExpandProxyInLoop") && (X = !0), a.b.ai(u, "findExpandInLoop") && (E =
                    Y = !0), a.b.ai(u, "addExpandTag") && (U = !0), a.b.ai(u, "setIframeAssetType") && (q = !0), a.b.ai(u, "preferCollapse") && (y = !0));
                e.push({
                    isFoundAdKnown: function(b, e, g) {
                        if (!L || !b) return !1;
                        if (v && m) {
                            if ((b = (b = A[e].ao) && b[v]) && !a.b.ai(m, b)) return !1
                        } else if (a.av.a(d, b)[0]) {
                            if (E) return a.au.c[e] = new l(b, e, g), a.au.c[e].collapsedQuery = d, a.au.c[e].expandedQuery = c, a.au.c[e].searchableEl = b, a.au.c[e].checkHiddenStyles = D, a.au.c[e].collapseUnloads = F, a.au.c[e].noLoopValidation = w, a.au.c[e].expandUnloads = P, a.au.c[e].expandedSelector =
                                n, a.au.c[e].collapseProxyEl = r, a.au.c[e].expandProxyEl = z, a.au.c[e].collapseUnloads = F, a.au.c[e].setCollapseProxyInLoop = Q, a.au.c[e].setExpandProxyInLoop = X, a.au.c[e].findExpandInLoop = Y, a.au.c[e].addExpandTag = U, a.au.c[e].setIframeAssetType = q, a.au.c[e].preferCollapse = y, r && a.av.b(r, A[e], b), !0;
                            var f = a.av.a(c, b)[0];
                            if (f && (t || a.b.be(f))) return a.au.c[e] = new l(b, e, g), a.au.c[e].collapsedQuery = d, a.au.c[e].expandedQuery = c, a.au.c[e].searchableEl = b, a.au.c[e].checkHiddenStyles = D, a.au.c[e].collapseUnloads = F, a.au.c[e].noLoopValidation =
                                w, a.au.c[e].expandUnloads = P, a.au.c[e].expandedSelector = n, a.au.c[e].expandedEl = f, a.au.c[e].collapseProxyEl = r, a.au.c[e].expandProxyEl = z, a.au.c[e].collapseUnloads = F, a.au.c[e].setCollapseProxyInLoop = Q, a.au.c[e].setExpandProxyInLoop = X, a.au.c[e].findExpandInLoop = Y, a.au.c[e].addExpandTag = U, a.au.c[e].setIframeAssetType = q, a.au.c[e].preferCollapse = y, r && a.av.b(r, A[e], b), z && a.av.b(z, A[e], f), !0
                        }
                    },
                    onFindAd: function(b, e, g) {
                        if (L) return !1;
                        var f = a.av.a(d, b)[0];
                        if (f && C && !f[H] || a.b.bd(f)) {
                            if (E) return a.au.c[e] = new l(f,
                                e, g), a.au.c[e].collapsedQuery = d, a.au.c[e].expandedQuery = c, a.au.c[e].searchableEl = b, a.au.c[e].checkHiddenStyles = D, a.au.c[e].collapseUnloads = F, a.au.c[e].noLoopValidation = w, a.au.c[e].expandUnloads = P, a.au.c[e].expandedSelector = n, a.au.c[e].collapseProxyEl = r, a.au.c[e].expandProxyEl = z, a.au.c[e].collapseUnloads = F, a.au.c[e].setCollapseProxyInLoop = Q, a.au.c[e].setExpandProxyInLoop = X, a.au.c[e].findExpandInLoop = Y, a.au.c[e].addExpandTag = U, a.au.c[e].setIframeAssetType = q, a.au.c[e].preferCollapse = y, f;
                            var h = a.av.a(c,
                                b)[0];
                            if (h && (t || a.b.be(h))) return a.au.c[e] = new l(f, e, g), a.au.c[e].collapsedQuery = d, a.au.c[e].expandedQuery = c, a.au.c[e].searchableEl = b, a.au.c[e].checkHiddenStyles = D, a.au.c[e].collapseUnloads = F, a.au.c[e].noLoopValidation = w, a.au.c[e].expandUnloads = P, a.au.c[e].expandedSelector = n, a.au.c[e].expandedEl = h, a.au.c[e].collapseProxyEl = r, a.au.c[e].expandProxyEl = z, a.au.c[e].collapseUnloads = F, a.au.c[e].setCollapseProxyInLoop = Q, a.au.c[e].setExpandProxyInLoop = X, a.au.c[e].findExpandInLoop = Y, a.au.c[e].addExpandTag =
                                U, a.au.c[e].setIframeAssetType = q, a.au.c[e].preferCollapse = y, f
                        }
                    },
                    onNewAd: function(b, d) {
                        b.collapseProxyEl && !b.useIsFoundAdKnown && a.av.b(b.collapseProxyEl, d, d.aa)
                    },
                    onLoop: function(b) {
                        if (b.stopLoop) return !1;
                        var d = !1;
                        b.setIframeAssetType && (A[b.adNum].hasIframeListener = !0, b.setIframeAssetType = !1);
                        if (b.expandUnloads) {
                            var c = a.av.a(b.expandedQuery, b.searchableEl)[0];
                            b.expandedEl = c
                        }
                        b.findExpandInLoop && !b.expandedEl && (c = a.av.a(b.expandedQuery, b.searchableEl)[0], b.expandedEl = c);
                        if (b.expandedEl && (b.noLoopValidation ||
                                a.b.be(b.expandedEl)))
                            if (b.checkHiddenStyles && (b.expandedEl.style && "hidden" === b.expandedEl.style.visibility || "none" === b.expandedEl.style.display) || "0" === a.b.ao(b.expandedEl, "opacity")) d = !1;
                            else if (b.expandedSelector && !a.av.a(b.expandedSelector, b.expandedEl)[0]) d = !1;
                        else if (d = !0, b.setCollapseProxyInLoop && b.collapseProxyEl && !b.collapseProxySet && (b.collapseProxySet = a.av.b(b.collapseProxyEl, A[b.adNum], b.collapsedEl)), b.setExpandProxyInLoop && b.expandProxyEl && !b.expandProxySet && (b.expandProxySet = a.av.b(b.expandProxyEl,
                                A[b.adNum], b.expandedEl)), b.addExpandTag && b.expandedEl.parentNode && (c = K && K.src && K.src.replace(/moatClientLevel4=[^&]*&/, "moatClientLevel4=Expanded&"))) return a.b.bx(c, b.expandedEl.parentNode), b.addExpandTag = !1, b.stopLoop = !0, !1;
                        b.preferCollapse && a.b.be(b.collapsedEl) && (d = !1);
                        d && !b.expandedIsOpen ? f(b.expandedEl, "div", null, b.adNum) : !d && b.expandedIsOpen && (b.collapseUnloads ? (d = a.av.a(b.collapsedQuery, b.searchableEl)[0], h(d, null, null, b.adNum)) : g(b, !0))
                    }
                })
            };
            a.au.f = f;
            a.au.e = g;
            a.au.h = h;
            a.au.g = function(b, d,
                c) {
                c = c || {};
                var e = b.getElementsByTagName("div");
                c.inclSearchableEl && (e = a.b.bq(e), e.push(b));
                for (b = 0; b < e.length; b++) {
                    var g = e[b];
                    if (g.id.match(d) && (c.anySize || a.b.bd(g))) return g
                }
            };
            a.at.a()
        })(m);
        (function(a) {
            function l(b, d, c, e, k) {
                ("remove" === k ? a.o.d : a.o.c)(b, d, function(d) {
                    d = d || this.event;
                    var e = d.currentTarget || b;
                    try {
                        var k = e[I]
                    } catch (g) {
                        k = e[I]
                    }
                    if (k = A[k]) {
                        var f;
                        f = d;
                        var h = e.getBoundingClientRect();
                        f = -1 != f.type.indexOf("touch") && f.changedTouches && 0 < f.changedTouches.length ? {
                            x: parseInt(f.changedTouches[0].clientX -
                                h.left, 10),
                            y: parseInt(f.changedTouches[0].clientY - h.top, 10)
                        } : {
                            x: parseInt(f.clientX - h.left, 10),
                            y: parseInt(f.clientY - h.top, 10)
                        };
                        k.aj = f.x;
                        k.ak = f.y;
                        k.dm || (k.cb = 2 == a.focus.getFocusMethod() ? k.counters.laxDwell.tCur : k.counters.strictDwell.tCur, k.dm = 1);
                        c.call(b, d, e, k)
                    }
                }, "genmouse")
            }

            function c(b, d, c) {
                l(b, "click", n, d, c);
                l(b, "mousedown", h, d, c);
                sa ? a.d.dw && l(b, "touchstart", e, d, c) : (l(b, "mousemove", g, d, c), l(b, "mouseover", p, d, c), l(b, "mouseout", u, d, c))
            }

            function f(b, d, c) {
                b = 1 == c.ao.skin && a.z.d(d, c.adContent, b);
                c = c.adContent &&
                    c.mouseEventElements && c.adContent.length !== c.mouseEventElements.length;
                return b && c
            }

            function g(b, d, c) {
                a.m.a.zaxs("mouseEventOnAd", c);
                b = b || window.event;
                if (!f(b, b.target || b.srcElement, c)) {
                    if (!sa && (c.aj !== c.al || c.ak !== c.am)) {
                        a.ag.d(b, c);
                        a.ag.f(b, c);
                        a.ag.g(b, c);
                        a.ag.i(b, c);
                        a.ag.h(b, c);
                        a.ag.b(c);
                        a.ag.c(c);
                        a.ag.e(c);
                        0 === c.ar.length && (c.ai = z(c));
                        if (100 > c.ar.length || 100 > c.as.length || 100 > c.at.length) c.ar.push(c.aj), c.as.push(c.ak), c.at.push(a.b.am(c));
                        c.al = c.aj;
                        c.am = c.ak
                    }
                    c.ai !== z(c) && 1 < c.ar.length && r(c, "onMouseMove")
                }
            }

            function h(b, d, c) {
                a.m.a.zaxs("mouseEventOnAd", c);
                b = b || window.event;
                f(b, b.target || b.srcElement, c) || (d = {
                    e: 2
                }, d.q = c.aq[2]++, d.x = c.aj, d.y = c.ak, a.u.a(c, d), a.au.m(b.type, c.zr))
            }

            function e(b, d, c) {
                a.m.a.zaxs("mouseEvent", c);
                a.m.a.zaxs("mouseEventOnAd", c);
                b = b || window.event;
                if (!f(b, b.target || b.srcElement, c)) {
                    b = {
                        e: 23
                    };
                    b.q = c.aq[23]++;
                    b.x = c.aj;
                    b.y = c.ak;
                    d = (new x).getTime();
                    if ("undefined" === typeof c.ct) c.ct = d;
                    else {
                        var e = d - c.ct;
                        c.ct = d;
                        c.cu = q.min(c.cu, e) || e
                    }
                    b.bz = void 0;
                    a.u.a(c, b)
                }
            }

            function d(d, c, e) {
                var g;
                if (2 == d.an ||
                    d.hasIframeListener) g = !0;
                if (g) {
                    g = c.e;
                    var f = d.ck;
                    f == a.ag.a.f.a && 6 === g ? (b(d, 0), d.cl = a.b.am(d), d.ck = a.ag.a.f.b) : f == a.ag.a.f.b ? 22 === g ? (k(d, c), b(d, e), d.cl = a.b.am(d)) : 7 === g && (1E3 < a.b.am(d) - d.cl ? (clearTimeout(d.cm), c.e = 22, k(d, c), d.cn = 0, d.ck = a.ag.a.f.a) : d.ck = a.ag.a.f.c) : f == a.ag.a.f.c && (6 == g ? (1E3 < a.b.am(d) - d.cl && (clearTimeout(d.cm), d.cn = 0, d.cl = a.b.am(d), b(d, 0)), d.ck = a.ag.a.f.b) : 22 == g && (k(d, c), d.ck = a.ag.a.f.a, d.cn = 0))
                }
            }

            function b(b, c) {
                if (a.focus.checkFocus()) {
                    var e = 5 > b.cn ? 1E3 : 2 * c,
                        k = {
                            e: 22
                        };
                    b.cm = a.o.f(function() {
                        d(b,
                            k, e)
                    }, e)
                } else d(b, {
                    e: 7
                }, 0)
            }

            function k(b, d) {
                d.q = b.aq[d.e]++;
                d.m = a.b.am(b);
                b.cl = d.m;
                a.u.a(b, d);
                b.cn++
            }

            function p(b, c, e) {
                a.m.a.zaxs("mouseEvent", e);
                a.m.a.zaxs("mouseEventOnAd", e);
                b = b || window.event;
                f(b, b.target || b.srcElement, e) || (a.ag.d(b, e), a.ag.f(b, e), a.ag.g(b, e), a.ag.i(b, e), a.ag.h(b, e), d(e, {
                    e: 6
                }, 0), a.au.m(b.type, e.zr))
            }

            function u(b, c, e) {
                a.m.a.zaxs("mouseEventOnAd", e);
                b = b || window.event;
                f(b, b.target || b.srcElement, e) || (a.ag.d(b, e), a.ag.f(b, e), a.ag.g(b, e), a.ag.i(b, e), a.ag.h(b, e), d(e, {
                    e: 7
                }, 0))
            }

            function n(b,
                d, c) {
                a.m.a.zaxs("mouseEvent", c);
                a.m.a.zaxs("mouseEventOnAd", c);
                b = b || window.event;
                f(b, b.target || b.srcElement, c) || (b = {
                    e: 3
                }, b.q = c.aq[3]++, b.x = c.aj, b.y = c.ak, a.u.a(c, b))
            }

            function r(b, d) {
                b.ai = z(b);
                var c = {
                    e: 1
                };
                c.q = b.aq[1]++;
                c.x = b.ar.join("a");
                c.y = b.as.join("a");
                for (var e = a.b.am(b), k = b.at, g = [], f = 0; f < k.length; f++) isNaN(k[f]) || g.push(q.abs(k[f] - e));
                c.c = g.join("a");
                c.m = e;
                a.u.a(b, c);
                b.ar = [];
                b.as = [];
                b.at = []
            }

            function z(b) {
                return q.floor(a.b.am(b) / 1E3)
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
                    var d = b.aa;
                    a.l.b(b, d);
                    b.adContent && 1 < b.adContent.length ? a.b.forEach(b.adContent, function(d) {
                        a.l.b(b, d);
                        b.mouseEventElements.push(d)
                    }) : b.mouseEventElements.push(d)
                }
            };
            a.l.b = function(a, b) {
                if (a) {
                    var d = b || a.aa;
                    d && c(d, a.zr)
                }
            };
            a.l.a = function(a, b) {
                if (a) {
                    var d = b || a.aa;
                    d && c(d, a.zr, "remove")
                }
            };
            a.l.f = function(b) {
                for (var d in A) A.hasOwnProperty(d) && (b = A[d]) && (a.ag.g({
                        type: "scooper"
                    }, b), a.ag.i({
                        type: "scooper"
                    }, b),
                    a.ag.h({
                        type: "scooper"
                    }, b), 1 < b.ar.length && b.ai !== z(b) && r(b, "scooper"))
            };
            a.l.c = function(b, d) {
                if (!d || !b || "number" === typeof d[I]) return !1;
                !b.hasIframeListener && d.tagName && "iframe" === d.tagName.toLowerCase() && (b.hasIframeListener = !0);
                !b.hasNonIframeListener && d.tagName && "iframe" !== d.tagName.toLowerCase() && (b.hasNonIframeListener = !0);
                d[I] = b.zr;
                a.l.b(b, d);
                b.mouseEventElements || (b.mouseEventElements = []);
                b.mouseEventElements.push(d);
                return b.proxyTrackingEnabled = !0
            };
            a.l.e = function(b) {
                a.b.forEach(b.mouseEventElements,
                    function(d) {
                        try {
                            a.l.a(b, d), d[I] = null
                        } catch (c) {}
                    })
            }
        })(m);
        (function(a) {
            a.ax = {};
            a.ax.a = function(a, c) {
                var f;
                c.outerHTML ? f = c.outerHTML : (f = document.createElement("div"), f.appendChild(c.cloneNode(!0)), f = f.innerHTML);
                f = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(f), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(f), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(f), a];
                for (var g, h, e = {}, d = 0; d < f.length; d++) {
                    if ((g = f[d]) && "object" === typeof g && g[1]) g = g[1].replace(/&amp;/g, "&").replace(/&quot;/g,
                        '"').replace(/^"/g, "").replace(/"$/g, "").replace(/^'/g, "").replace(/'$/g, "");
                    else if ("string" === typeof g) g = g.split("?")[1];
                    else continue;
                    if (g) {
                        g = g.split("&");
                        for (var b = 0; b < g.length; b++) h = g[b].split("="), 2 > h.length || "function" == h[0].slice(0, 8) || (e[h[0]] = [h[1]])
                    }
                }
                return e
            }
        })(m);
        (function(a) {
            function l(a, d) {
                this.adInMdl = a;
                this.iMdl = d
            }

            function c(a) {
                var d = new RegExp("(^| )" + a + "($| )");
                return function(a) {
                    return a && a.className && a.className.match(d)
                }
            }

            function f(e, d) {
                var b = e.parentNode,
                    k = a.b.ap(e);
                if ("#" ===
                    d[0]) var g = d.slice(1),
                    f = function(a) {
                        return a.id === g
                    };
                else if ("." === d[0]) f = c(d.slice(1));
                else return !1;
                for (var h = 0; 50 > h; h++)
                    if (b) {
                        if (f(b)) return !0;
                        b = b.parentNode
                    } else if (Da && k && k != k.parent) b = k.frameElement, k = k.parent;
                else break;
                return !1
            }
            a.ay = {};
            var g = [{
                    selector: "#frame_qr",
                    isOnPage: -1 !== window.location.href.indexOf("huffingtonpost"),
                    isActive: function() {
                        var a = Z && Z.document && Z.document.getElementById(this.selector.slice(1));
                        if (a && "none" != a.style.display) {
                            var d = a.offsetHeight;
                            if (3 < a.offsetWidth && 3 < d) return !0
                        }
                        return !1
                    }
                }],
                h = {};
            a.ay.a = function(c, d) {
                a.m.a.azsx("adKilled", a.ay.b, {
                    condition: function(a) {
                        return a.zr === c
                    },
                    once: !0
                });
                h[c] = [];
                for (var b = 0; b < g.length; b++) {
                    var k = g[b];
                    k.isOnPage && (k = f(d, k.selector), h[c].push(new l(k, b)))
                }
            };
            a.ay.c = function(a) {
                a = h[a];
                for (var d = 0; d < a.length; d++) {
                    var b = a[d],
                        c = g[b.iMdl].isActive();
                    if (c && !b.adInMdl || !c && b.adInMdl) return !0
                }
                return !1
            };
            a.ay.b = function(a) {
                delete h[a.zr]
            }
        })(m);
        (function(a) {
            function l(a) {
                return a = q.min(3E5, a)
            }

            function c(b, d, c, e) {
                r.hasOwnProperty(b) ? r[b][d] && a.b.d(r[b][d]) ? r[b][d].push(c) :
                    r[b][d] = [c] : (r[b] = {}, r[b][d] = [c], e && void 0 !== e.registerEvent && !0 === e.registerEvent && (z[b] = new f))
            }

            function f() {
                var b = !1;
                this.updateAndConditionallySend = function(a) {
                    !1 === b && (b = !0, this.sendNotification(a))
                };
                this.sendNotification = function(b) {
                    var d = {
                        e: 14
                    };
                    d.q = b.aq[14]++;
                    a.u.a(b, d)
                };
                this.getQS = function(a) {
                    !0 === b && (a.cv = Number(b))
                }
            }

            function g(b, d) {
                return b ? function(c) {
                    if (d) {
                        var e = {};
                        e[a.f.t.a] = !0;
                        a.f.af(b, e, c.zr)
                    } else a.f.ac(b)
                } : function() {}
            }

            function h(b, d) {
                return b ? function(c) {
                    var e = {};
                    e[a.f.t.d] = !0;
                    d &&
                        (e[a.f.t.a] = !0);
                    a.f.af(b, e, c.zr)
                } : function() {}
            }

            function e(a, b) {
                var d = z[b];
                void 0 !== d && d.updateAndConditionallySend(a)
            }

            function d(a) {
                return 500 <= (2 === a.an ? a.be : a.bd)
            }

            function b(b, d) {
                try {
                    return a.az.d(b) >= d
                } catch (c) {
                    return !1
                }
            }

            function k(a, b) {
                try {
                    return a.counters.laxDwell.tCur >= b
                } catch (d) {
                    return !1
                }
            }

            function p(a, b) {
                return d(a) ? n(a) >= b : !1
            }

            function u(b, d) {
                try {
                    var c;
                    if (a.d.e && b.activetime) {
                        var e = a.aa.a(b.zr),
                            k = a.ba.a(b.activetime.counters, e);
                        c = k && k.get("activeInviewTime")
                    } else c = !1;
                    return c >= d
                } catch (g) {
                    return !1
                }
            }

            function n(a) {
                return "undefined" !== typeof a.bk && d(a) ? l(a.bk) : 0
            }
            a.az = {};
            var r = {},
                z = {},
                m = function(a) {
                    return !!a.el && a.dn
                },
                B = function(a) {
                    return !!a.el && !a.dn
                },
                D = function() {
                    var b = 0;
                    return function() {
                        var d = a.d.g,
                            c = d.document,
                            e = c.body,
                            d = (e.scrollTop || c.documentElement.scrollTop || d.pageYOffset || 0) / e.offsetHeight;
                        d > b && (b = d);
                        return b
                    }
                }(),
                ca = {
                    load: function(a) {
                        return a && a.video && !a.video.started ? !1 : !0
                    },
                    adimpression: function(a) {
                        return !1
                    },
                    measurable: function(b) {
                        var d = !a.d.e && -1 !== a.d.bd.indexOf("Chrome") && -1 !== a.d.f.indexOf("mail.aol"),
                            c = !a.d.e && (50 != b.ao.zMoatCustomVisp || 1E3 != b.ao.zMoatCustomVist) && 0 != b.ao.zMoatCustomVisp && 0 != b.ao.zMoatCustomVist;
                        return !a.d.fe && !d && !c && a.d.dr(b)
                    },
                    "full-measurable": function(b) {
                        return b && b.video && !b.video.started ? !1 : a.d.dt(b)
                    },
                    "full-inViewX": function(b, d) {
                        return a.aa.w(b, d)
                    },
                    "full-inView": function(b) {
                        return a.aa.w(b, 1)
                    },
                    "full-inView2": function(b) {
                        return a.aa.w(b, 2E3)
                    },
                    nhtReady: function(b) {
                        return b && b.video && !b.video.started ? !1 : a && a.f && a.f.aa
                    },
                    brandSafeReady: function(a) {
                        return a && a.video && !a.video.started ?
                            !1 : t && t.jsonp && t.jsonp.brandsafe
                    },
                    customInView: function(a) {
                        return "Feature Not Enabled"
                    },
                    inViewX: function(b, d) {
                        return a.aa.o(b, d)
                    },
                    inView100: function(b) {
                        return a.aa.o(b, 1E5)
                    },
                    inView60: function(b) {
                        return a.aa.o(b, 6E4)
                    },
                    inView45: function(b) {
                        return a.aa.o(b, 45E3)
                    },
                    inView40: function(b) {
                        return a.aa.o(b, 4E4)
                    },
                    inView35: function(b) {
                        return a.aa.o(b, 35E3)
                    },
                    inView30: function(b) {
                        return a.aa.o(b, 3E4)
                    },
                    inView25: function(b) {
                        return a.aa.o(b, 25E3)
                    },
                    inView20: function(b) {
                        return a.aa.o(b, 2E4)
                    },
                    inView15: function(b) {
                        return a.aa.o(b,
                            15E3)
                    },
                    inView10: function(b) {
                        return a.aa.o(b, 1E4)
                    },
                    inView9: function(b) {
                        return a.aa.o(b, 9E3)
                    },
                    inView8: function(b) {
                        return a.aa.o(b, 8E3)
                    },
                    inView7: function(b) {
                        return a.aa.o(b, 7E3)
                    },
                    inView6: function(b) {
                        return a.aa.o(b, 6E3)
                    },
                    inView5: function(b) {
                        return a.aa.o(b, 5E3)
                    },
                    inView4: function(b) {
                        return a.aa.o(b, 4E3)
                    },
                    inView3: function(b) {
                        return a.aa.o(b, 3E3)
                    },
                    inView2: function(b) {
                        return a.aa.o(b, 2E3)
                    },
                    inView1: function(b) {
                        return a.aa.o(b, 1E3)
                    },
                    inView05: function(b) {
                        return a.aa.o(b, 500)
                    },
                    anyPercentVisible: function(b) {
                        return (b =
                            b && a.aa.j(b.zr)) && b.wasPartiallyInview()
                    },
                    activeInViewTimeX: function(a, b) {
                        return u(a, b)
                    },
                    activeInViewTime05: function(a) {
                        return u(a, 500)
                    },
                    activeInViewTime1: function(a) {
                        return u(a, 1E3)
                    },
                    activeInViewTime2: function(a) {
                        return u(a, 2E3)
                    },
                    activeInViewTime3: function(a) {
                        return u(a, 3E3)
                    },
                    activeInViewTime4: function(a) {
                        return u(a, 4E3)
                    },
                    activeInViewTime5: function(a) {
                        return u(a, 5E3)
                    },
                    activeInViewTime6: function(a) {
                        return u(a, 6E3)
                    },
                    activeInViewTime7: function(a) {
                        return u(a, 7E3)
                    },
                    activeInViewTime8: function(a) {
                        return u(a,
                            8E3)
                    },
                    activeInViewTime10: function(a) {
                        return u(a, 1E4)
                    },
                    activeInViewTime15: function(a) {
                        return u(a, 15E3)
                    },
                    activeInViewTime20: function(a) {
                        return u(a, 2E4)
                    },
                    activeInViewTime25: function(a) {
                        return u(a, 25E3)
                    },
                    activeInViewTime30: function(a) {
                        return u(a, 3E4)
                    },
                    activeInViewTime60: function(a) {
                        return u(a, 6E4)
                    },
                    activeInViewTime90: function(a) {
                        return u(a, 9E4)
                    },
                    activeInViewTime120: function(a) {
                        return u(a, 12E4)
                    },
                    activeInViewTime180: function(a) {
                        return u(a, 18E4)
                    },
                    activeInViewTime240: function(a) {
                        return u(a, 24E4)
                    },
                    activeInViewTime300: function(a) {
                        return u(a,
                            3E5)
                    },
                    fullInView05: function(b) {
                        return a.aa.w(b, 500)
                    },
                    fullInView1: function(b) {
                        return a.aa.w(b, 1E3)
                    },
                    fullInView2: function(b) {
                        return a.aa.w(b, 2E3)
                    },
                    fullInView3: function(b) {
                        return a.aa.w(b, 3E3)
                    },
                    fullInView15: function(b) {
                        return a.aa.w(b, 15E3)
                    },
                    full_inview_05: function(b) {
                        return 600 <= b.INITIAL_HEIGHT && a.aa.w(b, 500)
                    },
                    full_inview_1: function(b) {
                        return 600 <= b.INITIAL_HEIGHT && a.aa.w(b, 1E3)
                    },
                    full_inview_5: function(b) {
                        return 600 <= b.INITIAL_HEIGHT && a.aa.w(b, 5E3)
                    },
                    full_inview_10: function(b) {
                        return 600 <= b.INITIAL_HEIGHT &&
                            a.aa.w(b, 1E4)
                    },
                    fully_inView2: function(b) {
                        return a.aa.w(b, 2E3)
                    },
                    passthrough: function(b) {
                        return a.ab.d(b.zr)
                    },
                    groupmV3: function(a) {
                        return a.groupmV3.checkMilestoneReached()
                    },
                    fullViewInteraction: function(a) {
                        return this.interaction1(a) && this.full_inview_1(a)
                    },
                    inner_height_1000: function(b) {
                        return 1E3 <= a.d.aa
                    },
                    inner_height_1200: function(b) {
                        return 1200 <= a.d.aa
                    },
                    inner_height_1300: function(b) {
                        return 1300 <= a.d.aa
                    },
                    inner_height_1400: function(b) {
                        return 1400 <= a.d.aa
                    },
                    inner_height_1000_1400: function(b) {
                        return 1E3 <=
                            a.d.aa && 1400 >= a.d.aa
                    },
                    inner_height_1100_1400: function(b) {
                        return 1100 <= a.d.aa && 1400 >= a.d.aa
                    },
                    audibleFullVisibleHalfDuration: function(b) {
                        if (!(b && b.video && b.video.durationMeasurable)) return !1;
                        var d = 98 * b.ao.duration / 100,
                            c = b && a.aa.j(b.zr);
                        return (b = c && b.video && b.video.getCounter(c.getLabel())) && b.get("groupmAudibleFullyVisIvt") >= .5 * d
                    },
                    groupmAudVisHumanCap15: function(b) {
                        if (!(a && a.f && a.f.aa && b && b.video && b.ao)) return !1;
                        var d = !1;
                        "number" == typeof b.ao.duration && !isNaN(b.ao.duration) && 0 < b.ao.duration && (d = q.min(15E3,
                            .5 * b.ao.duration));
                        var c = b && a.aa.j(b.zr),
                            c = c && b.video.getCounter(c.getLabel());
                        b = a.f.ab(b.zr);
                        return d && c && c.get("groupmAudibleFullyVisIvt") > d && b
                    },
                    scroll_measurable: function(b) {
                        return a.d.e
                    },
                    scroll: function(a) {
                        return "undefined" !== typeof t.z
                    },
                    scrollfirstX: function(a, b) {
                        return t.z > b
                    },
                    scrollfirst1: function(a) {
                        return 1E3 < t.z
                    },
                    scrollfirst2: function(a) {
                        return 2E3 < t.z
                    },
                    scrollfirst2btf: function(a) {
                        return 2E3 < t.z && m(a)
                    },
                    scrollfirst3: function(a) {
                        return 3E3 < t.z
                    },
                    scrollfirst5: function(a) {
                        return 5E3 < t.z
                    },
                    scroll_interaction: function(a) {
                        return this.scroll(a) &&
                            this.interaction(a)
                    },
                    hover: function(a) {
                        return a.dm
                    },
                    mobileTouch: function(b) {
                        return a.d.da && b.dm
                    },
                    laxOts: function(b) {
                        return a.aa.r(b, "lax")
                    },
                    strictOts: function(b) {
                        return a.aa.r(b)
                    },
                    everOutOfFocus: function(b) {
                        return !a.focus.pageIsVisible()
                    },
                    interaction_measurable: function(b) {
                        return !a.b.j() || d(b)
                    },
                    interaction: function(a) {
                        return d(a)
                    },
                    btf: function(a) {
                        return m(a)
                    },
                    btf_strictOts: function(a) {
                        return this.strictOts(a) && m(a)
                    },
                    btf_interaction: function(a) {
                        return d(a) && m(a)
                    },
                    btf_inViewX: function(b, d) {
                        return a.aa.o(b,
                            d) && m(b)
                    },
                    btf_inView5: function(b) {
                        return a.aa.o(b, 5E3) && m(b)
                    },
                    btf_inView15: function(b) {
                        return a.aa.o(b, 15E3) && m(b)
                    },
                    atf: function(a) {
                        return B(a)
                    },
                    atf_inViewX: function(b, d) {
                        return a.aa.o(b, d) && B(b)
                    },
                    atf_970_728_inview20: function(b) {
                        return (970 == b.INITIAL_WIDTH || 728 == b.INITIAL_WIDTH) && B(b) && a.aa.o(b, 2E4)
                    },
                    atf_300x250_inview20: function(b) {
                        return 300 == b.INITIAL_WIDTH && 250 == b.INITIAL_HEIGHT && B(b) && a.aa.o(b, 2E4)
                    },
                    atf_300x600_inview20: function(b) {
                        return 300 == b.INITIAL_WIDTH && 600 == b.INITIAL_HEIGHT && B(b) && a.aa.o(b,
                            2E4)
                    },
                    btf_300_inview20: function(b) {
                        return 300 == b.INITIAL_WIDTH && m(b) && a.aa.o(b, 2E4)
                    },
                    btf_300_inview30: function(b) {
                        return 300 == b.INITIAL_WIDTH && m(b) && a.aa.o(b, 3E4)
                    },
                    btf_300_inview40: function(b) {
                        return 300 == b.INITIAL_WIDTH && m(b) && a.aa.o(b, 4E4)
                    },
                    inner_height_1000: function(b) {
                        return 1E3 <= a.d.aa
                    },
                    contentA: function(a) {
                        return this.page5(a) && .15 < D()
                    },
                    contentB: function(a) {
                        return this.page10(a) && .35 < D()
                    },
                    contentC: function(a) {
                        return this.page15(a) && .55 < D()
                    },
                    interactionX: function(a, b) {
                        return p(a, b)
                    },
                    interactionAny: function(a) {
                        return p(a,
                            10)
                    },
                    interaction05: function(a) {
                        return p(a, 500)
                    },
                    interaction1: function(a) {
                        return p(a, 1E3)
                    },
                    interaction2: function(a) {
                        return p(a, 2E3)
                    },
                    interaction3: function(a) {
                        return p(a, 3E3)
                    },
                    interaction4: function(a) {
                        return p(a, 4E3)
                    },
                    interaction5: function(a) {
                        return p(a, 5E3)
                    },
                    interaction6: function(a) {
                        return p(a, 6E3)
                    },
                    interaction7_2: function(a) {
                        return p(a, 7200)
                    },
                    interaction8: function(a) {
                        return p(a, 8E3)
                    },
                    interaction10: function(a) {
                        return p(a, 1E4)
                    },
                    interaction13: function(a) {
                        return p(a, 13E3)
                    },
                    interaction15: function(a) {
                        return p(a,
                            15E3)
                    },
                    interaction20: function(a) {
                        return p(a, 2E4)
                    },
                    interaction30: function(a) {
                        return p(a, 3E4)
                    },
                    interaction60: function(a) {
                        return p(a, 6E4)
                    },
                    pageX: function(a, d) {
                        return b(a, d)
                    },
                    page1: function(a) {
                        return b(a, 1E3)
                    },
                    page2: function(a) {
                        return b(a, 2E3)
                    },
                    page3: function(a) {
                        return b(a, 3E3)
                    },
                    page5: function(a) {
                        return b(a, 5E3)
                    },
                    page7: function(a) {
                        return b(a, 7E3)
                    },
                    page10: function(a) {
                        return b(a, 1E4)
                    },
                    page15: function(a) {
                        return b(a, 15E3)
                    },
                    page20: function(a) {
                        return b(a, 2E4)
                    },
                    page30: function(a) {
                        return b(a, 3E4)
                    },
                    page45: function(a) {
                        return b(a,
                            45E3)
                    },
                    page60: function(a) {
                        return b(a, 6E4)
                    },
                    page120: function(a) {
                        return b(a, 12E4)
                    },
                    page180: function(a) {
                        return b(a, 18E4)
                    },
                    page240: function(a) {
                        return b(a, 24E4)
                    },
                    page7_2: function(a) {
                        return b(a, 7200)
                    },
                    notmeasurableX: function(a, b) {
                        return k(a, b) && !this.measurable(a)
                    },
                    notmeasurable1: function(a) {
                        return k(a, 1E3) && !this.measurable(a)
                    },
                    notmeasurable3: function(a) {
                        return this.page3(a) && !this.measurable(a)
                    },
                    notmeasurable5: function(a) {
                        return this.page5(a) && !this.measurable(a)
                    },
                    notmeasurable10: function(a) {
                        return this.page10(a) &&
                            !this.measurable(a)
                    },
                    sessionX: function(a, b) {
                        return k(a, b)
                    },
                    strictOtsAndSession5: function(a) {
                        return this.strictOts(a) && k(a, 5E3)
                    },
                    inView5AndInteraction2: function(b) {
                        return a.aa.o(b, 5E3) && 2E3 <= b.bg
                    },
                    inView5AndInteraction1: function(b) {
                        return a.aa.o(b, 5E3) && 1E3 <= b.bg
                    },
                    MoatScoreA: function(a) {
                        return k(a, 1E4) && !this.strictOts(a)
                    },
                    MoatScoreB: function(a) {
                        return this.strictOts(a)
                    },
                    MoatScoreC: function(b) {
                        return a.aa.o(b, 15E3)
                    },
                    MoatScoreD: function(b) {
                        return a.aa.o(b, 25E3) && this.scroll(b)
                    },
                    MoatScoreE: function(b) {
                        return a.aa.o(b,
                            3E4) && p(b, 500) && this.scroll(b)
                    },
                    inView2AndScrollAndPage10: function(a) {
                        return this.inView2(a) && this.page10(a) && this.scroll(a)
                    },
                    page5AndScroll: function(a) {
                        return this.page5(a) && this.scroll(a)
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
                        return this.scroll(a) &&
                            this.inView10(a)
                    },
                    inView10AndScrollAndClick: function(a) {
                        return this.scroll(a) && this.inView10(a) && this.click(a)
                    },
                    page90_btf: function(a) {
                        return b(a, 9E4) && m(a)
                    },
                    moatA: function(a) {
                        return k(a, 15E3) && this.inView10(a)
                    },
                    moatB: function(a) {
                        return k(a, 6E4) && this.scroll(a) && this.inView15(a)
                    },
                    moatC: function(a) {
                        return k(a, 15E4) && this.scroll(a) && this.inView20(a)
                    },
                    customVisible: function(b) {
                        return a.aa.z && a.aa.z.getInViewTime() > a.az.a
                    },
                    adTechUnload: function(a) {
                        return k(a, 3E5)
                    },
                    adTechNonMeasurable: function(a) {
                        return !1
                    },
                    adNotHidden: function(b) {
                        return !1 === a.aq.a(b.zr)
                    }
                };
            a.az.b = function(b) {
                return a.e.c() ? {
                    totalInviewTime: 0,
                    fullyInviewTime: 0,
                    ots: 0
                } : {
                    totalInviewTime: l(a.aa.p(b)),
                    fullyInviewTime: l(a.aa.v(b)),
                    ots: a.aa.r(b)
                }
            };
            a.az.c = function(b) {
                if (!a.d.e || !b.activetime) return !1;
                var d = a.aa.a(b.zr);
                return (b = a.ba.a(b.activetime.counters, d)) && b.get("activeInviewTime")
            };
            a.az.d = function(a) {
                return a && a.counters && a.counters.strictDwell && a.counters.strictDwell.tCur ? l(a.counters.strictDwell.tCur) : !1
            };
            a.az.e = function(b) {
                return !a.e.c() &&
                    b && b.counters && b.counters.laxPlayTime && b.counters.laxPlayTime.tCur ? l(b.counters.laxPlayTime.tCur) : !1
            };
            a.az.f = function(b, c, e) {
                var k = a.b.u(),
                    g = a.az.g(b),
                    f = a.az.h(b),
                    h = a.az.i(b),
                    p = a.az.b(b),
                    u = b && a.aa.j(b.zr);
                if ("V2" === e || "V3" === e) var r = {
                    m: a.d.dr(b),
                    iv: p.ots,
                    tuv: p.ots ? h : -1,
                    tet: p.totalInviewTime,
                    fi: 1 <= p.fullyInviewTime,
                    apd: a.az.d(b),
                    ui: d(b),
                    uit: n(b),
                    h: !!b.cb,
                    th: b.cb ? l(b.cb) : -1,
                    s: a.d.e ? !!t.z : -1,
                    ts: a.d.e && t.z ? l(t.z) : -1,
                    bfa: b.el ? b.dn ? !0 : !1 : -1,
                    d: encodeURIComponent(k),
                    L1id: f.moatClientLevel1,
                    L2id: f.moatClientLevel2,
                    L3id: f.moatClientLevel3,
                    L4id: f.moatClientLevel4,
                    S1id: f.moatClientSlicer1,
                    S2id: f.moatClientSlicer2,
                    ord: g,
                    r: b.RAND,
                    t: c ? c : "unload",
                    os: u && u.wasPartiallyInview(),
                    fi2: 2E3 <= p.fullyInviewTime,
                    div1: u && 1E3 <= u.getDentsuInViewTime(),
                    ait: a.az.c(b)
                };
                else "V1" === e && (r = {
                    m: a.d.dr(b),
                    iv: p.ots,
                    tuv: p.ots ? h : -1,
                    tet: p.totalInviewTime,
                    fi: 1 <= p.fullyInviewTime,
                    apd: a.az.d(b),
                    ui: d(b),
                    uit: n(b),
                    h: !!b.cb,
                    th: b.cb ? l(b.cb) : -1,
                    s: a.d.e ? !!t.z : -1,
                    ts: a.d.e && t.z ? l(t.z) : -1,
                    bfa: b.el ? b.dn ? !0 : !1 : -1,
                    d: encodeURIComponent(k),
                    L1id: f.moatClientLevel1,
                    L2id: f.moatClientLevel2,
                    L3id: f.moatClientLevel3,
                    L4id: f.moatClientLevel4,
                    S1id: f.moatClientSlicer1,
                    S2id: f.moatClientSlicer2,
                    ord: g,
                    r: b.RAND,
                    t: c ? c : "unload"
                });
                return r ? r : null
            };
            a.az.j = function(b, d) {
                a.b.u();
                a.az.g(b);
                a.az.h(b);
                a.az.i(b);
                a.az.b(b);
                a.aa.j(b.zr)
            };
            a.az.h = function(a) {
                return a.ao.origLevels ? a.ao.origLevels : a.ao
            };
            a.az.i = function(b) {
                if (a.e.c()) return !1;
                b = a.aa.t(b.zr);
                return l(b.strict && "undefined" !== typeof b.strict.timeToView ? b.strict.timeToView : b.sframe && "undefined" !== typeof b.sframe.timeToView ?
                    b.sframe.timeToView : b.pscope && "undefined" !== typeof b.pscope.timeToView ? b.pscope.timeToView : -1)
            };
            a.az.k = function(b, d) {
                var c = a.az.h(b),
                    e = [],
                    k = function(a) {
                        return "string" !== typeof a ? !0 : -1 === a.indexOf("moatpixel.com") && -1 === a.indexOf("moatads.com")
                    };
                try {
                    if (a.b.d(d)) a.b.forEach(d, function(b) {
                        if (a.b.d(b)) {
                            var d = {};
                            d.src = b[0];
                            if (!a.d.fd() || !k(d.src)) {
                                d.customQueryParams = b[1] || !1;
                                d.opt = b[2] || !1;
                                var g = b[3];
                                if (g) {
                                    if (b = b[4], "string" === typeof g && b && a.b.ai(b, c && c[g] || !1) && e.push(d), "object" === typeof g && !a.b.d(g)) {
                                        b = !1;
                                        var f = {},
                                            h;
                                        for (h in g) f[c && c[h]] = g[h];
                                        for (var p in f)
                                            if (a.b.ai(f[p], p)) {
                                                b = !0;
                                                break
                                            }
                                        b && e.push(d)
                                    }
                                } else e.push(d)
                            }
                        } else "string" === typeof b && (d = {}, d.src = b, a.d.fd() && k(d.src) || (d.customQueryParams = !1, d.opt = !1, e.push(d)))
                    });
                    else if ("string" === typeof d) {
                        var g = {};
                        g.src = d;
                        if (a.d.fd() && k(g.src)) return;
                        e.push(g)
                    }
                } catch (f) {}
                return e
            };
            a.az.l = function(b, d) {
                d && a.b.forEach(d, function(a, d) {
                    b[d] = a
                });
                return b
            };
            a.az.m = function(a, b) {
                var d = "",
                    c = 0,
                    e = !0;
                b && (e = !1);
                if (a && "nosend" !== a) {
                    for (var k in a) a.hasOwnProperty(k) &&
                        (c++, !0 === a[k] ? a[k] = "1" : !1 === a[k] ? a[k] = "0" : "undefined" === typeof a[k] && (a[k] = 0), e && (a[k] = encodeURIComponent(a[k])), d += (1 < c ? "&" : "") + k + "=" + a[k]);
                    e && (d += "&bedc=1")
                } else d = "nosend";
                return d
            };
            a.az.n = function(a) {
                "number" != typeof a.aq.NHTDIRECTSEQUENCE ? a.aq.NHTDIRECTSEQUENCE = 1 : a.aq.NHTDIRECTSEQUENCE++;
                return a.aq.NHTDIRECTSEQUENCE
            };
            a.az.o = function(a) {
                "number" != typeof a.aq.TTPSEQUENCE ? a.aq.TTPSEQUENCE = 1 : a.aq.TTPSEQUENCE++;
                return a.aq.TTPSEQUENCE
            };
            a.az.p = function(b, d, c) {
                a.az.h(b);
                if (a.d.fd()) return !1;
                a.az.r(b.zr,
                    "adTechUnload") && a.bb.a(b);
                return !0
            };
            a.az.q = function(b, d, c, e, k, f) {
                "string" == typeof d ? g(d)(b) : a.b.forEach(d, function(d) {
                    var h = d.src,
                        p = d.opt,
                        l, u, n, r;
                    r = !1;
                    u = "V3";
                    p && (a.b.ai(p, "V1") ? u = "V1" : a.b.ai(p, "V2") ? u = "V2" : a.b.ai(p, "V3") && (u = "V3"), a.b.ai(p, "disableEncoding") && (r = !0));
                    u = p && a.b.ai(p, "xaxis") ? a.az.m(a.az.s(b, c), r) : a.az.m(a.az.f(b, c, u), r);
                    d.customQueryParams && (n = a.az.m(a.az.j(b, c), r));
                    n && p && a.b.ai(p, "addCustom") ? "nosend" !== u && (l = u + "&" + n) : l = d.customQueryParams ? n : u;
                    0 !== h.indexOf("http") && (h = a.d.protocol +
                        h);
                    l && "nosend" !== l && (e && (l = l + "&q=" + a.az.o(b)), a.b.ai(p, "dfp") ? (d = a.az.g(b), h = h + "u=" + l + ";sz=1x1;ord=" + d + "?") : h += l, f ? a.az.t(h, k, b) : k ? g(h, !0)(b) : g(h)(b))
                })
            };
            a.az.t = function(b, d, c) {
                a.ar.b("brandsafe", function(e) {
                    var k = b;
                    if (k && e) {
                        var f = "",
                            h = "";
                        if (a.b.ci(e.d)) {
                            var p = e.d + 2;
                            2 === p ? f = "Unsafe - Inappropriate Content" : 3 === p ? f = "Unsafe - Geo" : 4 === p ? f = "Unsafe - Blacklist" : 6 === p ? f = "Sensitive" : a.b.ai([0, 1, 5, 7, 8, 9], p) && (f = "Safe")
                        }
                        e.c && a.b.d(e.c) && (h = e.c.join());
                        b = k + ("&BSD=" + f + "&BSC=" + h)
                    } else b = !1;
                    g(b, d)(c)
                })
            };
            a.az.u =
                function(b, d) {
                    c(b, "strictOts", function(b, c) {
                        var e = a.d.g,
                            k = e.document.getElementsByTagName("script")[0],
                            e = e.document.createElement("img");
                        e.src = d;
                        k.parentNode.insertBefore(e, k);
                        b.viewableOcrPixelFired = 1
                    })
                };
            a.az.v = function(b, d) {
                if (a.d.fd()) return !1;
                var e = ["5113", "593", "1065"];
                d && d.moatClientLevel1 && a.b.ai(e, d.moatClientLevel1) && !t.adcnp && (t.adcnp = !0, c(b, "load", h("//pixel.advertising.com/ups/86/rt")))
            };
            a.az.w = function() {
                for (var b in A)
                    if (A.hasOwnProperty(b)) {
                        var d = A[b],
                            c = r[b],
                            k;
                        for (k in c) c.hasOwnProperty(k) &&
                            ca[k](d) && (a.b.forEach(c[k], function(b, c) {
                                var e = typeof b;
                                "string" === e ? (e = a.az.g(d), e = -1 < a.b.indexOf(b, "?") ? "&ord=" + e : "?ord=" + e, g(b + e)(d)) : "function" === e && b(d)
                            }), e(d, b), delete c[k])
                    }
            };
            a.az.x = function(a) {
                var b = {};
                (a = z[a]) && a.getQS(b);
                return b
            };
            a.az.r = function(a, b) {
                if (r.hasOwnProperty(a) && r[a].hasOwnProperty(b)) return !0
            };
            a.az.y = function(a, b) {
                r.hasOwnProperty(a) && r[a].hasOwnProperty(b) && delete r[a][b]
            };
            a.az.g = function(b) {
                var d;
                b.Ord ? d = b.Ord : (d = a.d.bg ? a.d.bg : (new x).getTime(), b.Ord = d);
                return d
            };
            a.az.z =
                c;
            a.az.aa = function(b, d) {
                return b ? function(c) {
                    var e = {};
                    e[a.f.t.c] = !0;
                    e[a.f.t.e] = !0;
                    d && (e[a.f.t.a] = !0);
                    a.f.af(b, e, c.zr)
                } : function() {}
            }
        })(m);
        (function(a) {
            a.z = {};
            a.z.a = {};
            a.z.b = "divs";
            a.z.b = "divs";
            a.z.a.a = function(a) {
                return []
            };
            a.z.c = function() {
                var l = a.d.g,
                    c = a.d.r && l.document || document,
                    f = c.documentElement,
                    c = c.getElementsByTagName("body")[0];
                try {
                    a.z.e = l && l.innerWidth || f && f.clientWidth || c && c.clientWidth
                } catch (g) {}
            };
            a.z.d = function(l, c, f) {
                if ("divs" == a.z.b) {
                    if (l._Mt_wIC) return !0;
                    if (l._Mt_wOC) return !1;
                    var g =
                        f.currentTarget,
                        h = l;
                    for (f = 0; 1E3 > f && !a.b.ai(c, h); f++) {
                        if (h == g || null == h) return l._Mt_wOC = !0, !1;
                        h = h.parentElement
                    }
                    return l._Mt_wIC = !0
                }
                if ("width" == a.z.b) {
                    l = c / 2;
                    g = a.z.e / 2;
                    h = f.clientX;
                    f = f.clientY;
                    var e = a.d.g.scrollY || a.d.g.document.documentElement.scrollTop;
                    return a.z.e > c && (h > g + l || h < g - l) || 90 > f + e ? !1 : !0
                }
                if ("ad-els" === a.z.b) {
                    if (l._Mt_wIC) return !0;
                    if (l._Mt_wOC) return !1;
                    g = f.currentTarget;
                    h = l;
                    for (f = 0; 1E3 > f; f++) {
                        if (a.b.ai(c, h)) return l._Mt_wOC = !0, !1;
                        if (h == g || null == h) break;
                        h = h.parentElement
                    }
                    return l._Mt_wIC = !0
                }
            }
        })(m);
        (function(a) {
            function l(b) {
                var d = {
                    window: 0,
                    transparent: 1,
                    opaque: 2,
                    direct: 3,
                    gpu: 4
                };
                if ("EMBED" === b.tagName) var c = a.b.getAttribute(b, "wmode");
                else if ("OBJECT" === b.tagName) {
                    b = b.getElementsByTagName("param");
                    for (var e = 0; e < b.length; e++) {
                        var g = b[e],
                            f = a.b.getAttribute(g, "name"),
                            g = a.b.getAttribute(g, "value");
                        if ("wmode" === f) {
                            c = g;
                            break
                        }
                    }
                }
                return c && d[c.toLowerCase()] || 5
            }

            function c(b) {
                try {
                    if (!b || a.b.t) return !1;
                    var d = b,
                        c;
                    if ("DIV" === d.tagName || "A" === d.tagName)(d = b.getElementsByTagName("EMBED")[0]) || (d = b.getElementsByTagName("OBJECT")[0]),
                        d || (d = b.getElementsByTagName("IMG")[0]), d || (d = b);
                    1 === d.nodeType && "IMG" !== d.nodeName && "EMBED" !== d.nodeName && "OBJECT" !== d.nodeName && (d = b.getElementsByTagName("EMBED")[0] || b.getElementsByTagName("OBJECT")[0] || b.getElementsByTagName("IMG")[0] || b);
                    if ("OBJECT" === d.tagName) {
                        for (var e = 0; e < d.children.length; e++)
                            if ("movie" === d.children[e].name || "Movie" === d.children[e].name) c = d.children[e].value;
                        d.object && d.object.Movie ? c = d.object.Movie : d.data && -1 !== d.data.indexOf("swf") && (c = d.data)
                    }
                    "EMBED" !== d.tagName && "IMG" !==
                        d.tagName || !d.src || (c = d.src);
                    c || (c = a.b.aq(d));
                    var g = a.ax.a(c, d);
                    if (!c)
                        for (var f = a.e.i.a, d = 0; d < f.length; d++) {
                            var h = f[d](b);
                            h && (c = h)
                        }
                    return {
                        adURL: c,
                        flashVars: g
                    }
                } catch (l) {
                    return !1
                }
            }

            function f(b) {
                var d = b.el,
                    e = b.url,
                    f = b.flashVars,
                    h = b.adIds,
                    r = b.opt_props;
                this.adContent = b.adContent;
                (new x).getTime();
                this.ao = h;
                this.FIND_AD_TRIES = h.numTries || 0;
                var m = c(d);
                if (m && m.adURL && f)
                    for (var v in m.flashVars) m.flashVars.hasOwnProperty(v) && (f[v] = m.flashVars[v]);
                m && m.flashVars && (f = m.flashVars);
                if ("string" !== typeof e || "div" ===
                    e.toLowerCase() || "a" === e.toLowerCase()) e = m && m.adURL || "-";
                e && 0 !== e.toLowerCase().indexOf("http:") && 0 !== e.toLowerCase().indexOf("https:") && ("//" === e.substring(0, 2) ? e = window.location.protocol + e : "/" === e[0] ? e = window.location.protocol + "//" + window.location.host + e : (m = window.location.pathname.split("/").slice(0, -1).join("/"), e = window.location.protocol + "//" + window.location.host + "/" + m + (m ? "/" : "") + e));
                "IFRAME" !== d.tagName && "IMG" !== d.tagName && -1 === e.indexOf("googlesyndication") && (e = e.split("?")[0]);
                this.zr = h.adNum;
                this.MMAK_ID = h.mmakAdKey ? h.mmakAdKey : "m" + this.zr;
                this.yg = a.b.cp();
                !h.mmakAdKey && a.b.dc() && (this.MMAK_ID += "_beta");
                this.TAGID = a.d.ba;
                a.v.h(this.yg, a.d.ay.a);
                A[this.zr] = this;
                a.e.k(this.zr, [d]);
                this.ae = e;
                this.aa = d;
                a.m.a.zaxs("adElementUpdate");
                this.WINDOW = e = a.b.ap(this.aa);
                this.isInIframe = e != e.parent;
                this.proxyTrackingEnabled = this.isSREMeasurable = !1;
                this.debugData = {
                    version: "3",
                    trueVisiblePercent: null,
                    update: function(a) {
                        this.trueVisiblePercent = a
                    },
                    getValue: function() {
                        var a;
                        a = "number" === typeof this.trueVisiblePercent ?
                            q.round(100 * this.trueVisiblePercent) : "-";
                        return this.version + ":" + a
                    }
                };
                this.setDimensions = function() {
                    var b;
                    b = new a.y.l(d);
                    this.INITIAL_WIDTH = parseInt(b.width);
                    this.INITIAL_HEIGHT = parseInt(b.height)
                };
                this.setDimensions();
                "undefined" === typeof f && (f = {});
                a.v.l(ta);
                this.eg = [];
                this.ee = {};
                a.d.bi || !a.d.bh || r && r.IS_PAGE_LEVEL || (this.ed = {}, a.r.z(this));
                this.periscopeManager && this.periscopeManager.insertSuccessful || r && r.IS_PAGE_LEVEL || (this.ed = {}, a.r.z(this));
                a.ab.e.a(this);
                a.ab.f.a(this);
                a.an.b(this);
                a.ay.a(this.zr,
                    this.aa);
                this.get_width = function() {
                    return h.initWidth ? h.initWidth : this.INITIAL_WIDTH ? this.INITIAL_WIDTH : !1
                };
                this.get_height = function() {
                    return h.initHeight ? h.initHeight : this.INITIAL_HEIGHT ? this.INITIAL_HEIGHT : !1
                };
                this.getScreenRealEstate = function() {
                    var b = a.d.x,
                        d = a.d.y;
                    if (a.n.a()) {
                        var c;
                        creativeWidth = (c = a.n.realEstateMeasurements) && c.w || 0;
                        creativeHeight = c && c.h || 0
                    } else creativeWidth = this.INITIAL_WIDTH, creativeHeight = this.INITIAL_HEIGHT;
                    return b && d && creativeWidth && creativeHeight ? q.max(0, q.min(1, creativeWidth *
                        creativeHeight / (b * d))) : 0
                };
                a.t.h(this);
                a.az.v(this.zr, this.ao);
                this.ag = f;
                this.ai = 0;
                this.an = this.am = this.al = this.ak = this.aj = void 0;
                this.ar = [];
                this.as = [];
                this.at = [];
                this.av = this.au = a.ag.a.a.a;
                this.ax = a.ag.a.b.a;
                this.ay = a.ag.a.c.a;
                this.ba = this.az = a.ag.a.d.a;
                this.bb = a.ag.a.e.a;
                this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
                this.ca = this.bz = !1;
                this.cb = this.cu = this.ct = void 0;
                this.cc = +new x + 12E4;
                this.ci = +new x;
                this.cl = this.cm = void 0;
                this.cn = 0;
                this.ck = a.ag.a.f.a;
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
                this.aq[8] =
                    0;
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
                this.an = b.adType || b.opt_props && b.opt_props.adType || g(d);
                0 === this.an && (this.WMODE = l(d));
                a.b.bg(this.aa);
                b.opt_props && b.opt_props.components && (this.components = b.opt_props.components, this.isCompositeAd = !0);
                var B = !0;
                this.disableMeasurability = function() {
                    B = !1
                };
                this.enableMeasurability =
                    function() {
                        B = !0
                    };
                this.isMeasurabilityDisabled = function() {
                    return !1 === B
                };
                this.viewabilityMethod = {};
                this.viewabilityPercent = {
                    strict: "-",
                    sframe: "-",
                    pscope: "-"
                };
                this.isValidAdSize = function() {
                    return a.b.be(this.aa)
                };
                a.m.a.zaxs("adInitialized", this);
                a.e.j(this)
            }

            function g(a) {
                return "IFRAME" === a.tagName ? 2 : "IMG" === a.tagName ? 1 : "EMBED" === a.tagName || "OBJECT" === a.tagName ? 0 : 3
            }

            function h(b, d) {
                for (var c = 0, e = d.length; c < e; c++) a.l.c(b, d[c])
            }
            var e = 0,
                d = !0;
            a.e = {};
            a.e.i = {};
            a.e.e = function(b, d, c, e, h, r, m) {
                r || a.f.aq(h);
                var v;
                v = 1 == arguments.length ? arguments[0] : {
                    el: b,
                    url: d,
                    flashVars: e,
                    adIds: h,
                    opt_props: m
                };
                if (a.d.g && a.d.g.adtechAdVisBannerTemplateConfig && a.d.g.adtechAdVisBannerTemplateConfig[h.moatClientLevel4] && (bannerConfig = a.d.g.adtechAdVisBannerTemplateConfig[h.moatClientLevel4], bannerConfig.hasOwnProperty("altGeometry") && (a.y.w = !0, v.el && v.el.parentNode & "DIV" === v.el.parentNode.nodeName ? v.el = v.el.parentNode : v.el && v.el.parentNode && v.el.parentNode.parentNode && "DIV" === v.el.parentNode.parentNode.nodeName && (v.el = v.el.parentNode.parentNode)),
                        bannerConfig.hasOwnProperty("geometry") && 1 < bannerConfig.geometry.length)) {
                    h.skin = !0;
                    var B = bannerConfig.geometry[1].offset;
                    if (B) {
                        var q = B.x,
                            t = B.y;
                        v.el && a.o.k(function() {
                            var b = a.aw.d.getElementsByTagName("div"),
                                d;
                            for (d in b)
                                if (b[d] && b[d].style && "absolute" == b[d].style.position && b[d].style.left == q + "px" && b[d].style.top == t + "px") {
                                    var c = b[d];
                                    c[I] = v.adIds.adNum;
                                    a.z.a.a = function() {
                                        return [v.el, c]
                                    };
                                    a.m.a.azsx("adKilled", function() {
                                        a.z.a.a = function() {}
                                    });
                                    return !0
                                }
                        }, 10, 20)
                    }
                }
                a.z.a.a && 1 == h.skin && (B = a.z.a.a(b, h), v.adContent =
                    B);
                if (r) {
                    if ("function" === typeof r) return r(b, d, e, h);
                    new x;
                    r.em = !0;
                    A[r.zr] = r;
                    b[I] = r.zr;
                    b[H] = !0;
                    r.aa = b;
                    a.m.a.zaxs("adElementUpdate");
                    r.INITIAL_WIDTH = b.offsetWidth;
                    r.INITIAL_HEIGHT = b.offsetHeight;
                    r.ae = d;
                    r.an = g(b);
                    0 === r.an && (r.WMODE = l(b));
                    r.ag = e || {};
                    a.l.d(r);
                    B = {
                        e: 0
                    };
                    B.q = r.aq[0]++;
                    a.u.a(r, B);
                    a.m.a.zaxs("adLoaded", r);
                    a.d.bi || !a.d.bh || m && m.IS_PAGE_LEVEL || (r.periscopeManager && r.periscopeManager.killAllPixels(), r.periscopeConfig = !1, a.r.z(r));
                    return r
                }
                return A[h.adNum] ? A[h.adNum] : new f(v)
            };
            a.e.j = function(b) {
                b.de =
                    isNaN(b.ao.startTime) ? +new x : b.ao.startTime;
                b.RAND = b.ao.rand;
                (new x).getTime();
                a.d.d() && a.p.j(b);
                a.d.j() && a.s.i(b);
                a.aa.f(b);
                a.d.e || a.aj.b.a();
                a.l.d(b);
                a.au.m("newad", b.zr);
                b.aa.parentNode && "swiffycontainer" === b.aa.parentNode.id && a.av.b(["..../../iframe ~ #clicktag"], b, b.aa.parentNode);
                a.m.a.zaxs("startAdTracking", b);
                b.dd = !0;
                a.d.em(b);
                var d = {
                    e: 0
                };
                d.q = b.aq[0]++;
                a.u.a(b, d);
                a.m.a.zaxs("adLoaded", b)
            };
            a.e.i.a = [];
            a.e.b = function() {
                var b, d;
                for (d in A) A.hasOwnProperty(d) && (b = A[d]) && !b.ep && a.t.a(b)
            };
            a.e.d =
                function(b) {
                    var d = +new x,
                        c = d - b.ci;
                    if (0 < b.doa.length) {
                        var e = 1E3 * b.doa[0];
                        if (b.counters.laxDwell.tCur >= e) {
                            b.doa.shift();
                            var g = b.es.length ? b.es[0] : 60;
                            if (e < g) return !1;
                            if (5E3 < c) return !0
                        }
                    }
                    return 0 < b.es.length && (g = 1E3 * b.es[0], a.aa.o(b, g)) ? (b.es.shift(), !0) : 0 === b.doa.length && d > b.cc ? (b.cc *= 2, !0) : !1
                };
            a.e.k = function(a, d) {
                for (var c = 0; c < d.length; c++) {
                    var e = d[c];
                    e[I] = a;
                    e[H] = !0
                }
            };
            a.e.l = function(b, d) {
                a.b.a(d.cc);
                a.e.m(d);
                a.e.a(d, 1) && a.m.a.sxaz("adKilled", {
                    id: b
                })
            };
            a.e.n = function(b, d) {
                a.e.a(d) && a.m.a.sxaz("adNotFound", {
                    id: b
                })
            };
            a.e.a = function(b, d) {
                var c = 0,
                    e;
                for (e in A) A.hasOwnProperty && A.hasOwnProperty(e) && c++;
                return c <= (d || 0) ? (a.m.a.esgf("allLocalAdsKilled"), !0) : !1
            };
            a.e.o = function(a) {
                a.ep = !0;
                delete A[a.zr];
                try {
                    a.aa && (a.aa[H] = null, a.aa[I] = null, a.aa = null)
                } catch (d) {}
                a.groupmV2 = null;
                a.groupmV3 = null;
                a.periscopeManager = null;
                a.secondaryCounters = null;
                a.mouseEventElements = null;
                a.publicis = null
            };
            a.e.m = function(b) {
                if (b && b.video && !b.video.started) return !1;
                var d = {
                    e: 21
                };
                d.q = b.aq[21]++;
                a.bc.a && a.bc.b && (d.yco = a.bc.a.YCoord.join("a"),
                    d.yt = a.bc.a.time.join("a"), d.xco = a.bc.b.XCoord.join("a"), d.xt = a.bc.b.time.join("a"));
                a.az && a.az.p && a.az.p(b);
                a.u.a(b, d);
                b.unloadPixelSent = !0
            };
            a.e.p = function(a) {
                return a && a.video
            };
            a.m.a.azsx("adKilled", a.e.l, {
                includeId: !0
            });
            a.m.a.azsx("adNotFound", a.e.n, {
                includeId: !0
            });
            a.e.q = h;
            a.e.r = function(b, d, c, e, g, f, l, m) {
                var B = {
                    area: 0
                };
                a.b.forEach(b, function(b) {
                    var d = new a.y.l(b);
                    d.area = d.height * d.width;
                    d && d.area >= B.area && (B = b, B.area = d.area)
                });
                if (d = a.e.e(B, d, c, e, g, f, l)) return d.isMultipartAd = !0, d.multipartComponents =
                    b, a.b.f(m) && m.length === b.length ? h(d, m) : h(d, b), g.adFindingMethod = "MULTIPART_ADS", d
            };
            a.e.s = function(b, d, c, e, g, f, l, m) {
                l = l || {};
                l.components = b;
                if (d = a.e.e(b[0], d, c, e, g, f, l)) return d.isCompositeAd = !0, d.components = b, a.b.f(m) && m.length === b.length ? h(d, m) : h(d, b), g.adFindingMethod = "COMPOSITE_ADS", d
            };
            a.e.g = function(a) {
                "number" === typeof a && (e = a)
            };
            a.e.t = function() {
                return e
            };
            a.e.f = function() {
                d = !1
            };
            a.e.h = function() {
                d = !0
            };
            a.e.c = function() {
                return !1 === d
            }
        })(m);
        (function(a) {
            function l(a) {
                var b = [];
                if ("string" !== typeof a) return !1;
                for (var c, g = !1, f = /(.*?[^\\])(?:\\\\)*\//; a;) {
                    if (h(a, ".../")) c = ".../";
                    else if (h(a, "...../")) c = "...../";
                    else if (h(a, "../") || h(a, "..../")) {
                        c = h(a, "../") ? "../" : "..../";
                        for (var l = c.length; h(a.substring(l), c);) l += c.length;
                        c = a.substring(0, l)
                    } else h(a, "=>/") ? c = "=>/" : h(a, "-/") ? c = "-/" : h(a, "+/") ? c = "+/" : h(a, "$[") ? (c = a.length, l = e(a, "]/") + 2, c = a.substring(0, q.min(c, l))) : h(a, "^/") ? c = "^/" : h(a, "IN_IFRAME/") ? c = "IN_IFRAME/" : h(a, "IN_X_FRAME/") ? c = "IN_X_FRAME/" : (h(a, "${") ? (c = a.length, l = e(a, "}/") + 2, c = a.substring(0, q.min(c,
                        l))) : c = (g = f.exec(a)) && g[0] ? g[0] : a, g = !0);
                    (a = a.substring(c.length)) && g && (c = c.substring(0, c.length - 1), g = !1);
                    b.push(c)
                }
                return b
            }

            function c(d) {
                if (!d) return !1;
                if (!a.d.l || 10 < a.b.n() || d.querySelectorAll && d.querySelector && (!d.MoatQSShimSet || d[g])) return !0;
                d.querySelector = function(a) {
                    a = this.querySelectorAll(a);
                    return a.length ? a[0] : null
                };
                d.querySelectorAll = function(a) {
                    var d = [],
                        c = this.ownerDocument || document,
                        e = c.createElement("style");
                    (c = c.getElementsByTagName("head")[0]) && c.insertBefore(e, c.childNodes[q.max(c.childNodes.length -
                        1, 0)] || null);
                    e && e.styleSheet && (e.styleSheet.cssText = a + "{shimtest:bar}");
                    a = this.getElementsByTagName("*");
                    for (var c = a.length, g = 0; g < c; g++) a[g].currentStyle && "bar" === a[g].currentStyle.shimtest && (d[d.length] = a[g]);
                    e.parentNode.removeChild(e);
                    return d
                };
                d.MoatQSShimSet = !0;
                return d[g] = !0
            }

            function f(d, b, e) {
                function g(a) {
                    if (m && 0 < m.length)
                        for (var b = m.length, d = 0; d < b; d++) a = a.replace("$" + d, m[d]);
                    return a
                }
                var f = function(b, d) {
                    if (!b || !d) return !1;
                    if (b.matches) return b.matches(d);
                    if (!c(b.parentNode)) return !1;
                    var e =
                        b.parentNode.querySelectorAll(d);
                    if (!e || !e.length) return !1;
                    var k = !1;
                    a.b.forEach(e, function(a) {
                        a === b && (k = !0);
                        return !k
                    });
                    return k
                };
                d = l(d);
                if (!d) return !1;
                for (var n = b, r = 0, m = [], v = function(b) {
                        return b && a.k.b(b)
                    }, B = function(a) {
                        return a && a.parentElement
                    }, q = function(b) {
                        return b ? (b = a.k.e(b)) && b.body : !1
                    }, t = function(a, b, d) {
                        return a ? (a = a.getAttribute(b)) && (d = (new RegExp(d)).exec(a)) && d.length && 0 < d.length ? d[d.length - 1] : !1 : !1
                    }, w = 0; w < d.length && 100 > r; w++) {
                    var C = d[w];
                    h(C, "${") && (C = C.substring(2, C.length - 1));
                    if (h(C,
                            "../") || h(C, "..../")) {
                        var x, F;
                        h(C, "../") ? (x = "../", F = B) : (x = "..../", F = v);
                        if (0 !== C.length % x.length) return !1;
                        for (var P = 0; P < C.length / x.length; P++) {
                            if (!n || "HTML" === n.nodeName) return !1;
                            n = F(n);
                            r++
                        }
                    } else if (".../" === C)
                        for (C = d[w + 1] && g(d[w + 1]); 100 > r;) {
                            if (n && f(n, C)) {
                                w++;
                                break
                            }
                            if (!n || "HTML" === n.nodeName) return !1;
                            n = n.parentElement;
                            r++
                        } else if ("...../" === C) {
                            n = a.d.g && a.d.g.document && a.d.g.document.body;
                            if (!n) return !1;
                            r++
                        } else if ("=>/" === C) {
                        n = q(n);
                        if (!n) return !1;
                        r++
                    } else if ("-/" === C) {
                        n = a.b.previousElementSibling(n);
                        if (!n) return !1;
                        r++
                    } else if ("+/" === C) {
                        if (n = a.b.nextElementSibling(n), !n) return !1
                    } else if (h(C, "$["))
                        if (C = (x = (C = C.substring(2, C.length - 2)) && C.split("|")) && x[0], x = x && x[1], C && x)
                            if (C = t(n, C, x)) m.push(C), r++;
                            else return !1;
                    else return !1;
                    else if ("^/" === C) {
                        n = b;
                        if (!n) return !1;
                        r++
                    } else if ("IN_IFRAME/" === C) {
                        if (!a.d.q) return !1;
                        r++
                    } else if ("IN_X_FRAME/" === C) {
                        if (!a.d.ff) return !1;
                        r++
                    } else if (C = g(C), !f(n, C)) {
                        if (!c(n)) return !1;
                        n = n.querySelectorAll(C);
                        if (e && w === d.length - 1) return n ? n : !1;
                        if (!n || 1 !== n.length) return !1;
                        n =
                            n[0]
                    }
                }
                return n
            }
            a.av = {};
            var g = "MoatQSShimOrd_" + O + "_" + a.d.bg,
                h = function(a, b) {
                    return 0 === a.indexOf(b) && b
                },
                e = function(a, b) {
                    var c = a.indexOf(b);
                    return 0 > c ? a.length + 1 : c
                };
            a.av.a = function(d, b) {
                var c = [];
                a.b.forEach(d, function(a) {
                    (a = f(a, b)) && c.push(a)
                });
                return c
            };
            a.av.c = function(d, b) {
                var c = [];
                a.b.forEach(d, function(a) {
                    if (a = f(a, b, !0))
                        for (var d = 0; d < a.length; d++) c.push(a[d])
                });
                return c
            };
            a.av.b = function(d, b, c) {
                d = a.av.a(d, c);
                a.b.forEach(d, function(d) {
                    a.l.c(b, d)
                });
                return !!d
            }
        })(m);
        (function(a) {
            function l(a, c) {
                this.re =
                    a;
                this.base = c;
                this.getId = function(a) {
                    return (a = a.id.match(this.re)) && this.base + a[1]
                };
                this.find = function(a) {
                    return (a = this.getId(a)) && Z.document.getElementById(a)
                }
            }
            a.bd = {};
            var c = [new l(/ptelawatcher(\d+)/, "ptelaswfholder"), new l(/ftpos(\d+)/, "ftdiv"), new l(/envIpolli(\d+)/, "expIpolli"), function() {
                var a = new l(/^VwP\d+Div$/, "2");
                a.getId = function(a) {
                    return (a = a.id.match(this.re)) && a[0] + this.base
                };
                return a
            }()];
            a.bd.a = function(a) {
                a = a.getElementsByTagName("div");
                for (var g = 0; g < a.length; g++)
                    for (var h = a[g], e =
                            0; e < c.length; e++) {
                        var d = c[e].find(h);
                        if (d) return d
                    }
            }
        })(m);
        (function(a) {
            function l(b, d, e, k, l, p) {
                p || (p = window);
                a.aw.d = b;
                var u = a.aw.g,
                    r = a.aw.h,
                    n = a.aw.i,
                    m = 0,
                    z = function() {
                        var l;
                        d.numTries = m++;
                        if (a.d.fg && a.aw.f(z, null, d) || a.d.fh && a.aw.f(z, null, d)) return !0;
                        if (!l) try {
                            r && (l = r(b, d, e, k, null, p))
                        } catch (n) {}
                        if (!l && (l = u(b, d, e, k, null, p), !0 === l)) return !0;
                        if (a.d.j() && a.d.cs() && !l) {
                            var v = c();
                            g(v) && (l = h(d)) && (d.adFindingMethod = "Appscope Body")
                        }
                        a.d.d() && !l && (v = f(), g(v) && (l = h(d)) && (d.adFindingMethod = "Omid Body"));
                        l && a.au.o(l);
                        W && d && (d.adFindingMethod = d.adFindingMethod ? d.adFindingMethod + (" | " + W) : W);
                        (v = l && l !== a.au.i) && a.b.forEach(a.aw.e.a, function(a) {
                            if (a && "function" === typeof a) try {
                                a(l)
                            } catch (b) {}
                        });
                        return v
                    };
                if (a.d.e) {
                    var v, w;
                    d && (v = "skin" in d && 1 == d.skin, w = "format" in d && "Wallpaper" == d.format);
                    if (v || w) "width" == a.z.b && a.z.c(), a.d.fi = !0, d.skin = 1, v ? (d.isSkin = 1, d.adFindingMethod = "skin1") : w && (d.isAolSkin = 1, d.adFindingMethod = "AOL Skin"), a.r && (a.r.n = function() {
                        return !1
                    }), z = function() {
                        var b, c = a.d.g.document.body;
                        d.numTries = m++;
                        if (a.z.a.a(c, d)) return c && a.b.bd(c) && (b = a.b.aq(c), b = a.e.e(c, b || c.nodeName, !1, void 0, d, e)), b && !0
                    }
                }
                a.o.k(z, n, 500, l)
            }

            function c() {
                var b = {
                        area: 5E3,
                        height: 40,
                        width: 40
                    },
                    d = a.d.ef && a.d.ef("appName"),
                    c = a.d.ef && a.d.ef("namespace");
                "NFL Mobile" === d && "NFL" === c && (b.height = 25);
                return b
            }

            function f() {
                var b = {
                    area: 5E3,
                    height: 40,
                    width: 40
                };
                "com.nfl.mobile3.enterprise" === (a.d.bf && a.d.bf("ya")) && (b.height = 25);
                return b
            }

            function g(b) {
                var d = a.d.g.innerWidth,
                    c = a.d.g.innerHeight,
                    e = c >= b.height,
                    k = d >= b.width;
                return d * c >= b.area &&
                    e && k
            }

            function h(b) {
                if (1 !== a.d.an().isInApp) return !1;
                var d = a.d.g;
                if ((d = (d = d && d.document) && d.body) && "undefined" == typeof d.MOATALREADYFOUND) return a.e.e(d, "BODY", !1, void 0, b, !1)
            }

            function e(b, d, c, e, k) {
                var g, f, h, l = a.d.g.document.getElementById("eyeDiv");
                if (K && K.id && 0 <= K.id.indexOf("ebebDnlScript")) {
                    var p = K.id.split("_");
                    p && 3 === p.length && (h = p[1], g = p[2])
                }
                h = h || k.ebAdID;
                g = g || k.ebRand;
                h && g && (f = h + "_" + g);
                if (f && "object" === typeof k.ebAds && k.ebAds[f] && (g = k.ebAds[f].visibilityMgr && k.ebAds[f].visibilityMgr._res) &&
                    a.b.bd(g) && (g = a.e.e(g, g.nodeName, !1, void 0, d, c))) return d.adFindingMethod = "SIZMEKADS", g;
                if (h && k.gEbBanners && a.b.d(k.gEbBanners)) {
                    var u = !1;
                    a.b.forEach(k.gEbBanners, function(a) {
                        if (a && a.adData && a.adData.nAdID == h) return u = a, !1
                    });
                    if (u && (k = u.displayUnit && u.displayUnit.defaultPanel && u.displayUnit.defaultPanel.panelDiv) && k.nodeName && "div" == k.nodeName.toLowerCase() && (g = q(k, d, c, e))) return d.adFindingMethod = "SIZMEKADS banner", g
                }
                k = b.getElementsByTagName("div");
                k = a.b.bq(k);
                "DIV" === b.nodeName && k.push(b);
                if (k &&
                    0 < k.length) {
                    var r = [];
                    a.b.forEach(k, function(a) {
                        a && a.id && a.id.match(/ebDiv\d+/) && r.push(a)
                    });
                    if (r && 0 < r.length && a.d.g && a.d.g.document) {
                        var n;
                        a.b.forEach(r, function(b) {
                            var d = a.d.g.document.getElementById(b.id);
                            if (d && d !== b) return n = d, !1
                        });
                        if (n) {
                            if (g = q(n, d, c, e)) return g;
                            if (n && a.b.bd(n) && e(n)) {
                                if (g = a.e.e(n, n.nodeName, !1, void 0, d, c)) return d.adFindingMethod = "SIZMEKADS adDvi", g
                            } else {
                                b = n.getElementsByTagName("iframe");
                                k = n.id.split("ebDiv")[1];
                                var m = new RegExp("ebBannerIFrame_\\d+_" + k),
                                    z;
                                if (b && 0 < b.length &&
                                    (a.b.forEach(b, function(b) {
                                        if (b && b.id && b.id.match(m) && a.b.bd(b)) return z = b, !1
                                    }), z && e(z) && (g = a.e.e(z, z.nodeName, !1, void 0, d, c)))) return d.adFindingMethod = "SIZMEKADS banner iframe", g
                            }
                        }
                    }
                }
                if (f && l) {
                    e = [];
                    b = a.av.a(["iframe[id*='header_iframe_" + f + "']"], l)[0];
                    k = a.av.a(["iframe[id*='leftgutter_iframe_" + f + "']"], l)[0];
                    g = a.av.a(["iframe[id*='rightgutter_iframe_" + f + "']"], l)[0];
                    if (b)
                        if (a.b.bd(b)) e.push(b);
                        else return !1;
                    if (k)
                        if (a.b.bd(k)) e.push(k);
                        else return !1;
                    if (g)
                        if (a.b.bd(g)) e.push(g);
                        else return !1;
                    if (e && 0 < e.length &&
                        (g = a.e.s(e, e[0].nodeName, !1, void 0, d, c))) return d.adFindingMethod = "SIZMEKADS-1", g;
                    (e = a.av.a(["div[id*='" + f + "']"], l)[0]) || (e = a.av.a(["div[id^='eb'][id*='" + f + "']"], l)[0]);
                    if (e) {
                        if (g = q(e, d, c)) return g;
                        if (a.b.bd(e) && (g = a.e.e(e, e.nodeName, !1, void 0, d, c))) return d.adFindingMethod = "SIZMEKADS-2", g
                    }
                }
                if ("string" === typeof f && (f = document.getElementById("ebDefaultImg_" + f)) && (g = a.e.e(f, f.nodeName, !1, void 0, d, c))) return d.adFindingMethod = "SIZMEKADS-3", g
            }

            function d(b, d, c, e, k) {
                function g(b) {
                    return b ? a.av.a(["div.jpstage"],
                        b)[0] || !1 : !1
                }
                var f = g(b),
                    h = a.d.g.document;
                e && !f && (f = a.av.a(["..../../div.jpplatform_" + e, "...../div[id='jpplatform_" + e + "']", "...../div.jpplatform_" + e], b)[0]);
                f || (f = g(h.getElementById("jpsuperheader")));
                f || (f = g(a.b.getElementsByClassName("jpeditorialunit", "DIV", h.body)[0]));
                f || (f = g(h.getElementById("jpd_adhesion")));
                f || (b = (b = h.getElementById("jp_overlay") || e && h.getElementById("jp_overlay_" + e)) && a.b.getElementsByClassName("jppanel", "DIV", b)) && 1 <= b.length && a.b.forEach(b, function(b) {
                    if (b && a.b.bd(b)) return f =
                        b, !1
                });
                f || (h = h.getElementById("jpd_expfooter"), f = g(h));
                if (f && a.b.bd(f) && k(f) && (ad = a.e.e(f, f.nodeName, !1, void 0, d, c))) return d.adFindingMethod = "JETPACKDIGITALADS", ad
            }

            function b(b, d, c, e) {
                if ((b = a.b.getElementsByClassName("originplatform-ad", "SCRIPT", a.d.r ? b.ownerDocument && b.ownerDocument.documentElement || b : b)[0]) && b.id && (b = b.id.match(/embed_origin_(\d+)/)) && b[1] && (b = "OriginPlatformAdUnit-" + b[1] + "-inpage", b = document.getElementById(b) || a.d.r && a.d.g.document.getElementById(b)) && (c = a.e.e(b, b.nodeName, !1,
                        void 0, d, c))) return d.adFindingMethod = "ORIGINADS", c
            }

            function k(b, d, c, e) {
                var k, g, f, h = b.childNodes,
                    l = !1;
                for (k = h.length - 1; 0 <= k; k--) {
                    var p = h[k];
                    "#comment" === p.nodeName && /undertone/i.test(p.nodeValue) ? l = !0 : "STYLE" === p.nodeName && (p = p.innerHTML.match(/(utpga\d+).+/i)) && 2 === p.length && (f = p[1])
                }
                if (l) {
                    k = a.d.r ? (k = a.k.g(b)) && k.ownerDocument ? k.ownerDocument : document : document;
                    f && (g = k.getElementById(f), !g && a.d.r && (g = document.getElementsById(f)));
                    g || (f = k.getElementsByTagName("div"), a.b.forEach(f, function(a) {
                        if (a &&
                            a.id && a.id.match("utpga")) return g = a, !1
                    }), !g && a.d.r && (f = document.getElementsByTagName("div"), a.b.forEach(f, function(a) {
                        if (a && a.id && a.id.match("utpga")) return g = a, !1
                    })));
                    if (g) {
                        if (f = q(g, d, c, e)) return f;
                        if (a.b.bd(g) && e(g) && (f = a.e.e(g, g.nodeName, !1, void 0, d, c))) return d.adFindingMethod = "UNDERTONE pageGrabberDiv", f
                    }
                    if ((f = document.getElementById("utbanner") || a.d.r && a.d.g.document.getElementById("utbanner")) && (f = a.k.e(f)) && f.body && (f = q(f.body, d, c, e))) return d.adFindingMethod = "UNDERTONE fullPageAdIframe",
                        f;
                    if ((f = a.b.getElementsByClassName("ut_container", "DIV")[0] || a.d.r && a.b.getElementsByClassName("ut_container", "DIV", a.d.g.document)[0]) && a.b.bd(f) && e(f)) return f = a.e.e(f, f.nodeName, !1, void 0, d, c, {
                        adType: 2
                    }), d.adFindingMethod = "UNDERTONE screenshift", f;
                    if (c = document.getElementById("eyeDiv") || a.d.r && a.d.g.document.getElementById("eyeDiv"))
                        for (c = c.getElementsByTagName("object"), k = 0; k < c.length; k++)
                            if (f = c[k], "fixed" == f.style.position && a.b.bd(f) && e(f)) return f = a.e.e({
                                    el: f,
                                    adIds: d
                                }), d.adFindingMethod = "UNDERTONE slider",
                                f
                }
            }

            function p(b, d, c, e, k) {
                if ((b = d.tlview_id || d.tlviewID) && (b = document.getElementById(b) || a.d.g.document.getElementById(b)) && a.b.bd(b) && (d = a.e.e(b, b.nodeName, !1, void 0, d, c))) return d
            }

            function u(b, d, c, e, k) {
                if (b = a.aw.l(["[tleid]"], b, d, c)) return b
            }

            function n(b, d, c, e, k) {
                if (k._tlCreatives && 1 === k._tlCreatives.length && k._tlCreatives[0].hook && (d = (b = k._tlCreatives[0].hook) && a.aw.l(["-/[tleid]"], b, d, c))) return d
            }

            function r(b, d, c, e, k, g) {
                var f, h, l, p, u = [];
                if (f = e ? e : g.Adform && g.Adform.ADFBannerData && "string" === typeof g.Adform.ADFBannerData.BN &&
                    g.Adform.ADFBannerData.BN) {
                    if (e = (b = g.Adform && g.Adform.adRegister) && b[f]) l = e.collapsedContent && e.collapsedContent._element, p = e.expandedContent && e.expandedContent._element, h = e.adBox && e.adBox._attributes && e.adBox._attributes.element;
                    h || a.b.forEach(g.Adform && g.Adform.adData, function(a) {
                        if (h = a && a.bn && a.bn == f && a.container) return !1
                    });
                    if (l && p && (a.b.bd(l) || a.b.bd(p)) && (g = a.e.e(l, l.nodeName, !1, void 0, d, c, {
                            adType: 2
                        }))) return d.adFindingMethod = "ADFORMADS two-element expandable", g.adformCollapsedEl = l, g.adformExpandedEl =
                        p, g;
                    if (p && a.b.bd(p) && (g = a.e.e(p, p.nodeName, !1, void 0, d, c, {
                            adType: 2
                        }))) return d.adFindingMethod = "ADFORMADS Single-element expandable", g;
                    if (h && a.b.bd(h)) {
                        b && a.b.forEach(b, function(b, d) {
                            if (d && d.indexOf && -1 < d.indexOf(f + "#")) {
                                var c = b && b.adBox && b.adBox._attributes && b.adBox._attributes.element;
                                c && c !== h && a.b.bd(c) && u.push(c)
                            }
                        });
                        if (0 < u.length && (u.unshift(h), g = a.e.s(u, u[0].nodeName, !1, void 0, d, c, {
                                adType: 2
                            }))) return d.adFindingMethod = "ADFORMADS composite", g;
                        if (g = a.e.e(h, h.nodeName, !1, void 0, d, c, {
                                adType: 2
                            })) return d.adFindingMethod =
                            "ADFORMADS-1", g
                    }
                }
            }

            function m(b, d, c, e, k, g) {
                if (k && g && (ad = a.aw.l(["div[id='ym_" + k + "'] > iframe/=>/div[id='" + g + "']"], b, d, c))) return d.adFindingMethod = "YIELDMOADS", ad;
                if (ad = a.aw.l(["..../iframe[id$='_tpi']/$[id|([0-9]*)_tpi]/../[id='$0']", "..../iframe[id$='_tpi']/../div.ym/$[data-lf-id|([0-9]+)]/iframe/=>/[id='$0']"], b, d, c)) return d.adFindingMethod = "YIELDMOADS-1", ad;
                if (ad = a.aw.l(["div.ym/iframe/=>/body/video.video-elem"], b, d, c)) return d.adFindingMethod = "YIELDMOADS-2", ad;
                if (ad = a.aw.l(["div.ym"], b, d, c)) return d.adFindingMethod =
                    "YIELDMOADS-3", ad
            }

            function v(b, d, c, e) {
                var k = function(a, b) {
                        return a && a.moatObject && a.moatObject[b]
                    },
                    g = function(b) {
                        return a.av.a(["div.moat_trackable"], b)[0]
                    },
                    f = function(b) {
                        return (b = (b = a.k.e(b)) && b.documentElement) && g(b)
                    },
                    h = function(b) {
                        var d;
                        b = a.aw.a(b, a.aw.b);
                        a.b.forEach(b, function(a) {
                            if (d = f(a)) return !1
                        });
                        return d
                    },
                    l = function() {
                        var b = k(p, "adElement");
                        if (b !== u)
                            if (a.b.bd(b)) {
                                var c = n;
                                u = b;
                                u[I] = d.adNum;
                                u[H] = !0;
                                a.b.bf(u, c, !0);
                                (b = k(p, "adProxyElement")) && a.l.c(n, b)
                            } else a.b.be(u) || (b = u, a.t.a(n), p.removeEventListener("adLoaded",
                                l), b[I] = void 0, b[H] = void 0, ra())
                    };
                e = function(b) {
                    if (b) {
                        var e = k(p, "creativeType"),
                            g = k(p, "adProxyElement");
                        switch (e) {
                            case "banner":
                                if (a.b.bd(b)) var f = a.e.e(b, b.nodeName, !1, void 0, d, c);
                                g && a.e.q(f, [g]);
                                d.adFindingMethod = "Creative API - Banner";
                                return f;
                            case "multipart":
                                return f = a.e.r(b, "DIV", !1, void 0, d, c, null, g), d.adFindingMethod = "Creative API - Multipart", f;
                            case "composite":
                                return f = a.e.s(b, "DIV", !1, void 0, d, c, null, g), d.adFindingMethod = "Creative API - Composite", f;
                            case "expandable":
                                return a.b.bd(b) &&
                                    (f = a.e.e(b, b.nodeName, !1, void 0, d, c), g && a.e.q(f, [g]), p.addEventListener("adLoaded", l)), d.adFindingMethod = "Creative API - Expandable", f
                        }
                    }
                };
                var p = function(b) {
                    if (a.d.fg) return a.d.fg;
                    var d = g(b);
                    d || (d = h(b));
                    d || (a.d.q ? (d = a.k.b(b), d = f(d)) : d = void 0);
                    if (!d) a: {
                        if (a.d.r && (b = a.k.g(b))) {
                            var d = a.b.ap(b) === a.d.g,
                                c = a.d.e && "BODY" === b.nodeName;
                            if (!d || !c) {
                                d = g(b);
                                break a
                            }
                        }
                        d = void 0
                    }
                    d && (a.d.fg = d);
                    return d
                }(b);
                if (p) {
                    if (!k(p, "adLoaded")) return !1;
                    var u = k(p, "adElement");
                    if (!u) return !1;
                    var n = e(u);
                    return n ? n : !1
                }
            }

            function B(b,
                d, c, e) {
                var k = function(b) {
                    return a.av.a(["div.celtra-ad-v3", "div.celtra-ad-v4"], b)[0]
                };
                e = function(b, d) {
                    var c, e = a.aw.a(b, a.aw.b);
                    a.b.forEach(e, function(b) {
                        if (b.offsetWidth * b.offsetHeight === d) return c = a.k.e(b).body, !1
                    });
                    return c ? c : !1
                };
                var g = function() {
                        var d, c = a.aw.a(b, a.aw.b);
                        a.b.forEach(c, function(b) {
                            if ((b = (b = a.k.e(b)) && b.documentElement) && k(b)) return d = k(b), !1
                        });
                        return d
                    },
                    f = function() {
                        if (a.d.r) {
                            var d = a.k.g(b);
                            if (d) {
                                var c = a.b.ap(d) === a.d.g,
                                    e = a.d.e && "BODY" === d.nodeName;
                                c && e || (celtraDiviInParentFrame =
                                    k(d))
                            }
                        }
                    },
                    h;
                a.d.fh ? h = a.d.fh : ((h = k(b)) || (h = g()), h || (h = f()));
                var l;
                h && (l = h && h.celtra && h.celtra.viewabilityObservee);
                if (l && a.b.bd(l)) return d.adFindingMethod = "Celtra API", d = a.e.e(l, l.nodeName, !1, void 0, d, c), c = a.b.cc(d), (l = e(l, c)) && a.l.c(d, l), d;
                h && !l && (a.d.fh = h);
                return !1
            }

            function q(b, d, c, e) {
                e = e || function() {
                    return !0
                };
                if (!b) return !1;
                var k = B(b, d, c, e);
                if (k) return k;
                if (a.d.fh) return !1;
                if ((k = (k = a.av.a(["div.voxAdData"], b)[0]) && k.elementToTrack) && a.b.bd(k)) return d.adFindingMethod = "Vox API", a.e.e(k, k.nodeName, !1, void 0, d, c);
                var k = a.b.n(),
                    g = null !== k && 11 > k;
                if (!g)
                    for (var f = b.getElementsByTagName("embed"), f = a.b.t && 0 < f.length ? [b] : f, k = 0; k < f.length; k++) {
                        var h = f[k];
                        if (!0 !== h[H] && -1 === h.id.indexOf("moatPx") && a.b.bd(h)) {
                            if (a.b.t && e(h)) return k = a.e.e(h, h.tagName + "_FF", !1, void 0, d, c), d.adFindingMethod = "AOL", k;
                            if (h.getAttribute("src") && e(h)) {
                                var l = h.getAttribute("src");
                                e = a.ax.a(l, h);
                                k = a.e.e(h, l, !1, e, d, c);
                                d.adFindingMethod = "AOL-1";
                                return k
                            }
                        }
                    }
                for (var p = b.getElementsByTagName("object"), p = a.b.t && 0 < p.length ? [b] : p, k = 0; k <
                    p.length; k++)
                    if (f = p[k], a.b.bd(f) && e(f) && ("undefined" === typeof f[H] || !0 !== f[H]) && -1 == f.id.indexOf("moatPx")) {
                        if (a.b.t && e(f)) return k = a.e.e(f, f.tagName + "_FF", !1, void 0, d, c), d.adFindingMethod = "AOL bad firefox", k;
                        for (var u = 0; u < f.children.length; u++)
                            if ("movie" === f.children[u].name || "Movie" === f.children[u].name)
                                if (l = f.children[u].value, !l || !l.match("scorecardresearch"))
                                    for (var n = 0; n < f.children.length; n++) {
                                        if (!g && "EMBED" === f.children[n].tagName) {
                                            h = f.children[n];
                                            if ("undefined" !== typeof h[H] && !0 === h[H] || -1 !=
                                                h.id.indexOf("moatPx")) continue;
                                            if (a.b.bd(h) && e(h)) return e = a.ax.a(l, h), k = a.e.e(h, l, !1, e, d, c), d.adFindingMethod = "AOL Embed", k
                                        }
                                        if ("OBJECT" === f.children[n].tagName && (h = f.children[n], a.b.bd(h) && !0 !== h[H] && -1 === h.id.indexOf("moatPx") && e(h))) return k = a.e.e(h, void 0, !1, void 0, d, c), d.adFindingMethod = "AOL Object", k
                                    }
                        f.object && f.object.Movie ? l = f.object.Movie : f.data && (l = f.data);
                        if (!l || !l.match("scorecardresearch")) return e = a.ax.a(l, f), k = a.e.e(f, l, !1, e, d, c), d.adFindingMethod = "SWF ads", k
                    }
                if (k = a.aw.n(b, d, c, e)) return k;
                l = b.getElementsByTagName("img");
                for (k = 0; k < l.length; k++)
                    if (g = l[k], ("undefined" === typeof g[H] || !0 !== g[H]) && a.b.bd(g) && (h = g.getAttribute("src")) && "" !== h && -1 === document.location.href.indexOf(h) && e(g)) return c = a.e.e(g, h, !1, void 0, d, c), d.adFindingMethod = "Standard Image Ad finding ", c;
                if (b = (l = b.getElementsByTagName("canvas")) && l[0]) {
                    if (1 === l.length && a.b.bd(b)) return c = a.e.e(b, b.nodeName, !1, void 0, d, c), d.adFindingMethod = "AKQAGAPGEN Canvas", c;
                    if (1 < l.length) {
                        if (e(b.parentNode) && a.b.bd(b.parentNode)) return c =
                            a.e.e(b.parentNode, b.parentNode.nodeName, !1, void 0, d, c), d.adFindingMethod = "AKQAGAPGEN-1", c;
                        if (a.b.bd(b) && (c = a.e.e(b, b.nodeName, !1, void 0, d, c))) return a.d.q ? a.av.b([".../body"], c, b) : a.av.b(["../div"], c, b), d.adFindingMethod = "AKQAGAPGEN-2", c
                    }
                }
                return !1
            }

            function t(b, d) {
                for (var c = [], e = a.b.d(b) ? b : b.getElementsByTagName("iframe"), k, g = 0; g < e.length; g++)
                    if (k = e[g], !k[H]) {
                        var f = a.k.e(k) ? !1 : !0;
                        (1 === d && f && a.b.bd(k) || 2 === d && !f) && c.push(k)
                    }
                return c
            }

            function w(b, d, c, e, k, g) {
                var f = "className";
                "undefined" !== typeof k &&
                    !1 !== k && (f = "id");
                k = b.getElementsByTagName(g || "div");
                var h, l;
                b = void 0;
                for (h = 0; h < k.length; h++) {
                    for (l = 0; l < d.length; l++)
                        if (g = d[l], k[h][f].match(g)) {
                            b = k[h];
                            break
                        }
                    if (b && a.b.bd(b)) break
                }
                if (b && a.b.bd(b)) return d = a.b.aq(b), e = a.e.e(b, d || b.nodeName, !1, void 0, c, e), c.adFindingMethod = "HTML5_BACKGROUND_IMG Ads", e
            }
            a.aw = {};
            a.aw.e = {};
            a.aw.e.a = [];
            a.aw.d = void 0;
            a.aw.f = function(b, d, c) {
                return a.d.av.adFindingTimeout ? (a.b.a(a.d.av.adFindingTimeout), a.d.av.adFindingTimeout = null, d || (d = function() {
                    a.u.b(11, c)
                }), a.o.k(b, 9999,
                    500, d), !0) : !1
            };
            a.aw.c = function() {
                var b = arguments;
                a.focus.pageIsPrerendered() ? a.m.a.azsx("noLongerPreRendered", function(a) {
                    l.apply(this, b)
                }, {
                    once: !0
                }) : l.apply(this, b)
            };
            a.aw.n = function(b, d, c, e) {
                e = e || function() {
                    return !0
                };
                if ((b = t(b, 1)) && 1 < b.length && -1 < b[0].src.indexOf("bannerflow")) {
                    for (e = 0; e < b.length; e++)
                        if ("bf_animated" == b[e].className) return c = a.e.e(b[e], b[e].src, !1, void 0, d, c), d.adFindingMethod = "ADTECH bf_animated", c;
                    return !0
                }
                if (b[0] && a.b.bd(b[0]) && e(b[0])) return c = a.e.e(b[0], b[0].src, !1, void 0, d,
                    c), d.adFindingMethod = "findIframeAds", c
            };
            a.aw.e.b = [];
            a.aw.m = function(b, d, c, e, k) {
                var g, f;
                e = a.aw.a(e || b, a.aw.b);
                for (var h = 0; h < e.length; h++) {
                    f = e[h];
                    var l = a.k.e(f);
                    if (l && l.documentElement) {
                        a: {
                            g = b;
                            for (var p = d, u = c, n = f, r = l, m, z = a.aw.e.b, v = 0; v < z.length; v++)
                                if (m = z[v](g, p, u, n, r)) {
                                    p.adFindingMethod = "override file friendly iframe hooks";
                                    g = m;
                                    break a
                                }
                            g = void 0
                        }
                        if (g) return g;a: {
                            g = d;p = c;
                            if (f.id && f.id.match("ebBannerIFrame") && a.b.bd(f) && (f = a.e.e(f, f.nodeName, !1, void 0, g, p))) {
                                g.adFindingMethod = "sizmek banner iframe";
                                g = f;
                                break a
                            }
                            g = void 0
                        }
                        if (g) return g;a: {
                            f = d;g = c;p = l;u = k && k.Adform && k.Adform.BannerData && "string" == typeof k.Adform.BannerData.ADFban && k.Adform.BannerData.ADFban;n = !1;r = void 0;
                            try {
                                r = p && (p.defaultView || p.parentWindow)
                            } catch (w) {}
                            u && r && (frameAdformBannerId = r._Adform && r._Adform.BannerData && r._Adform.BannerData.ADFban, u == frameAdformBannerId && (n = p.getElementById("banner") || p.getElementById("video")));
                            if (n && a.b.bd(n) && (ad = a.e.e(n, n.nodeName, !1, void 0, f, g))) {
                                f.adFindingMethod = "ADFORMADS iframe check";
                                g = ad;
                                break a
                            }
                            g =
                            void 0
                        }
                        if (g) return g;
                        if (g = a.aw.l(["[id='ad']"], l.documentElement, d, c)) return d.adFindingMethod = "ad", g;
                        if (g = q(l.documentElement, d, c)) return d.adFindingMethod = "Domsearch friendly iframe", g;
                        if (g) return g;
                        if (g = a.aw.o(l.documentElement, d, c)) return d.adFindingMethod = "Domsearch again in friendly iframe", g
                    }
                }
            };
            a.aw.o = function(b, d, c) {
                var e;
                b = a.aw.a(b, a.aw.b);
                for (var k = 0; k < b.length; k++)
                    if (e = b[k], (e = a.k.e(e)) && e.documentElement && (e = q(e.documentElement, d, c))) return d.adFindingMethod = "FLITEADS  FRIENDLY IFRAMES AGAIN DEFAULT",
                        e
            };
            a.aw.k = function(b, d, c) {
                if ("function" !== typeof c && (b = a.au.n(b, d.adNum))) {
                    if (b === a.au.i) return a.au.i;
                    c = a.e.e(b, "div", !1, void 0, d, c);
                    d.adFindingMethod = "USATODAYV3-2";
                    return c
                }
            };
            a.aw.p = function(b, d) {
                if (!wa && !1 !== b.shouldKillAd) {
                    var c = (new x).getTime() - d.ao.startTime;
                    !0 !== d.em && !0 !== d.preventTryFindingAdAgain && 5E3 > c && (a.aw.q(d), b.shouldKillAd = !1)
                }
            };
            var C = a.m.a.azsx("beforeAdKilled", a.aw.p);
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("beforeAdKilled", {
                    id: C
                })
            }, {
                once: !0
            });
            a.aw.r = function(a) {};
            a.aw.q = function(b) {
                if (!0 !== b.em) {
                    delete A[b.zr];
                    a.b.a(b.cc);
                    b.periscopeManager && b.periscopeManager.killAllPixels();
                    var d;
                    (d = K && K.parentNode) && a.aw.c(d, b.ao, b, void 0, function() {
                        a.t.a(b)
                    }, void 0)
                }
            };
            a.aw.l = function(b, d, c, e) {
                b = a.av.a(b, d);
                var k;
                a.b.forEach(b, function(b) {
                    if (a.b.bd(b)) return k = b, !1
                });
                if (k) return b = a.b.aq(k) || k.src || "DIV", e = a.e.e(k, b, !1, void 0, c, e), c.adFindingMethod = "DOMSEARCH", e
            };
            var E = function(b, d, c, e, k) {
                d = a.av.a(d, c);
                d = a.b.filter(d, a.b.bd);
                if (0 < d.length) return c = a.b.aq(d[0]) || d[0].getAttribute("src") ||
                    "DIV", b(d, c, !1, void 0, e, k)
            };
            a.aw.s = function(b, d, c, e) {
                return E(a.e.s, b, d, c, e)
            };
            a.aw.t = function(b, d, c, e) {
                return E(a.e.r, b, d, c, e)
            };
            a.aw.u = w;
            a.aw.j = q;
            a.aw.g = function(c, g, f, h, l, q) {
                q || (q = window);
                l = l || function() {
                    return !0
                };
                var t = a.aw.j,
                    C = a.aw.k;
                if ("undefined" === typeof c) return !1;
                if (a.d.q && "HEAD" === c.tagName) {
                    var y = c.parentNode;
                    "HTML" === y.tagName && (y = y.getElementsByTagName("body"), 0 < y.length && (c = y[0]))
                }
                if (y = v(c, g, f, l)) return y;
                if (a.d.fg) return !1;
                if (a.d.fh) return (y = B(c, g, f, l)) ? y : !1;
                if (c) {
                    var D;
                    a.b.forEach(c.getElementsByTagName("script"),
                        function(a) {
                            var b;
                            if (a.src && (b = a.src.match(/burstingres.*\?adid=([0-9]*)/i))) return D = b[1], !1
                        });
                    if (D) {
                        var x;
                        a.b.forEach(a.d.g.document.getElementsByTagName("div"), function(a) {
                            if (a && a.id && -1 < a.id.indexOf("ebAd" + D)) return x = a, !1
                        });
                        if (x)
                            if (a.b.bd(x) && l(x)) {
                                if (y = a.e.e(x, x.nodeName, !1, void 0, g, f)) return g._szFindAttempts = 0, g.adFindingMethod = "Old Sizmek Expand", y
                            } else if ("number" !== typeof g._szFindAttempts && (g._szFindAttempts = 0), 2 > g._szFindAttempts) return g._szFindAttempts++, !1
                    }
                }
                if ((y = document.getElementById("mianahwvc")) &&
                    l(y) && (y = a.e.e(y, y.nodeName, !1, void 0, g, f))) return g.adFindingMethod = "APPSCOPE", y;
                if (y = a.aw.l(["div.bigsize/iframe/=>/#all", "div#native_category", "div[id='dnvizadparallax']", "..../.../div[id^='abMasterContainer']/iframe[id*='adfm']/=>/div[id^='banner']", "..../.../div[class^='site']/iframe[id*='adfm']/=>/div[id^='banner']"], c, g, f)) return g.adFindingMethod = "Domsearch Early", y;
                if (y = a.aw.l(["[id='ad']"], c, g, f)) return g.adFindingMethod = "DOM Id = ad", y;
                if (y = a.aw.l(["../body/ins[class='dcmads'][data-dcm-rendering-mode='script']"],
                        c, g, f)) return g.adFindingMethod = "DCM ins", y;
                if (y = a.aw.l(["div.teads-player/iframe", "div[id^='playArea']"], c, g, f)) return g.adFindingMethod = "teads", y;
                if (y = a.aw.l(["div.avalanche"], c, g, f)) return g.adFindingMethod = "avalanche", y;
                if (a.d.bs && a.d.bs() && "AdMarvel" == a.d.bs() && (y = a.aw.l(["[class='omws-container']", "[id='fill-wrapper']"], c, g, f))) return g.adFindingMethod = "Opera MRAID", y;
                if (y = e(c, g, f, l, q)) return y;
                if (y = g && g.ntvDomSearch) return c = a.b.getElementsByClassName(y), c = a.b.filter(c, a.b.bd), 1 < c.length &&
                    (y = a.e.s(c, "DIV", !1, void 0, g, f)) ? (g.adFindingMethod = "NativoAds composite ads", y) : 1 === c.length && (y = a.e.e(c[0], c[0].nodeName, !1, void 0, g, f)) ? (g.adFindingMethod = "NativoAds single ad", y) : !1;
                if (y = a.aw.l(["div.str-adunit", "[data-str-native-key]", "[data-str-sibling]"], c, g, f)) return g.adFindingMethod = "Sharethrough", y;
                y = [];
                y = [/mrw_tankContainer\d+/];
                if (y = w(c, y, g, f, !0, void 0)) return g.adFindingMethod = "Check HTML5", y;
                if (y = a.aw.l([".../[data-gg-moat]/[data-gg-moat-ifr]", ".../[data-gg-moat]", "[data-gg-moat]"],
                        c, g, f)) return g.adFindingMethod = "GumGum", y;
                if ((h = a.k.g(c)) && -1 < h.className.indexOf("abAdWrapper")) return a.b.bd(h) && (g.adFindingMethod = "Adtech abAdWrapper parent iframe", y = a.e.e(h, "IFRAME", null, null, g, null)), y;
                var y = (y = a.d.q ? c.ownerDocument.documentElement : c) && y.getElementsByTagName("script"),
                    A = {},
                    E, ca;
                y && 0 < y.length && (A.jpd = /ads\.jetpackdigital\.com\/lineitems\/(\d+)\/jpd/, A.adform = /adform\.(?:com|net)\/adfscript\/?\?bn=([0-9]+)/, A.quartz = /ads\.qs\.com/, A.yieldmo = /ads\.yieldmo\.com\/.*\&p=([0-9]+).*\&lf=([0-9]+)/,
                    A.yieldmo2 = /static\.yieldmo\.com\/ym\.[a-z0-9]{2}\.js/, a.b.forEach(y, function(a) {
                        for (var b in A)
                            if (A.hasOwnProperty(b)) {
                                var d = a && a.getAttribute("src");
                                if (d && (E = d.match(A[b]))) return ca = b, !1
                            }
                    }));
                a.av.a([".../[class*='jpeditorialunit']", ".../[class*='jpbanner']", ".../[id*='jpplatform']", ".../[id*='jpd_adhesion']"], c)[0] && (ca = "jpd");
                if (ca && "jpd" === ca && (y = d(c, g, f, E && E[1], l)) || (y = b(c, g, f, l)) || ca && "adform" === ca && (y = r(c, g, f, E && E[1], l, q))) return y;
                if (y = p(c, g, f, l, q)) return g.adFindingMethod = "TRIPLELIFTADS: Moat script query string logic - " +
                    (g.tlview_id ? "tlview_id" : "tlviewID"), y;
                if (y = u(c, g, f, l, q)) return g.adFindingMethod = "TRIPLELIFTADS: Domsearch tleid attribute", y;
                if (y = n(c, g, f, l, q)) return g.adFindingMethod = "TRIPLELIFTADS: Domsearch based on window", y;
                if (y = a.aw.l(["[id='qzad']"], c, g, f)) return g.adFindingMethod = "Quartz", y;
                h = y = "";
                ca && a.b.ai(["yieldmo", "yieldmo2"], ca) && (y = E && E[1], h = E && E[2]);
                if (y = m(c, g, f, l, y, h)) return y;
                if (q = q.weborama_display_tag && q.weborama_display_tag.mediapath) {
                    y = /https?:\/\/([0-9a-zA-Z\.\/]+)/;
                    q = q.match && q.match(y)[1];
                    h = a.av.c(["...../div[id^='scr_'][id*='remotediv']"], c);
                    for (var G = 0; G < h.length; G++)
                        if (y = a.aw.l(["${[src*='" + q + "']}", "+/${[src*='" + q + "']}"], h[G], g, f)) return g.adFindingMethod = "Weborama", y
                }
                if ((y = C(c, g, f)) || (y = t(c, g, f, l))) return y;
                if (y = a.aw.m(c, g, f)) return g.adFindingMethod = "friendly iframe", y;
                if (h = a.k.g(c))
                    if (y = a.aw.m(h, g, f)) return g.adFindingMethod = "find iframe parent", y;
                y = [];
                if (y = w(c, y, g, f, !0)) return g.adFindingMethod = "Check HTML5 Late", y;
                if (a.d.r || h) {
                    if (h = h || a.k.g(c))
                        if (q = a.b.ap(h) === a.d.g, y = a.d.e &&
                            "BODY" === h.nodeName, !q || !y) {
                            if (y = C(h, g, f)) return g.adFindingMethod = "iframe parent expandable", y;
                            if (y = t(h, g, f, l)) return g.adFindingMethod = "iframe parent findAd", y
                        }
                    q = a.bd.a(h);
                    if (y = C(h, g, f)) return g.adFindingMethod = "DTB Expand", y;
                    if (y = q && t(q, g, f, l)) return g.adFindingMethod = "DTB Uncle", y
                }
                if (y = k(c, g, f, l)) return g.adFindingMethod = "Undertone", y;
                if (y = a.aw.l(["../iframe#verve-banner", ".../body/iframe#verve-expandable/=>/div.content", ".../body/iframe#verve-expandable", "iframe#verve-banner/=>/div.content",
                        "iframe#verve-banner"
                    ], c, g, f)) return g.adFindingMethod = "Verve", y;
                if (y = a.aw.l(["div.flex-player", "..../../div[id^='google_ads_iframe']/../div.flex-player", "div.flex-play", "..../../div[id^='google_ads_iframe']/../div.flex-play"], c, g, f)) return g.adFindingMethod = "WashPost", y;
                if ("is_etusivu_jb1_980x400_1" == c.id)
                    if (adFormTags = c.getElementsByTagName("ADFM-AD"), adFormAds = a.b.getElementsByClassName("adform-adbox", "*", c), adFormTags.length) {
                        if (y = a.e.e(adFormTags[0], adFormTags[0].nodeName, !1, void 0, g, f)) return g.adFindingMethod =
                            "ADTECH", y
                    } else if (adFormAds.length && (y = a.e.e(adFormAds[0], adFormAds[0].nodeName, !1, void 0, g, f))) return g.adFindingMethod = "ADTECH-1", y;
                return !1
            };
            a.aw.a = t;
            a.aw.v = function(b, d, c) {
                if (a.d.e && b && a.b.bd(b) && a.z.a.a(b, d)) {
                    "width" == a.z.b && a.z.c();
                    a.d.fi = !0;
                    d.skin = 1;
                    a.r && (a.r.n = function() {
                        return !1
                    });
                    var e = a.b.aq(b);
                    if (b = a.e.e(b, e || b.nodeName, !1, void 0, d, c)) return d.adFindingMethod = "WALLPAPERS ADS", b
                }
            };
            a.aw.w = 1;
            a.aw.b = 2;
            a.aw.x = 500;
            a.aw.i = 20;
            a.aw.y = {
                object: 1,
                embed: 1,
                img: 1,
                iframe: 1
            }
        })(m);
        (function(a) {
            function l(a) {
                "object" ===
                typeof a && (a.fq = 0, a.gm = 0, a.ch = 0, a.ga = 0, a.gh = 0, a.hasOwnProperty("lx") && delete a.lx, a.um = 1)
            }

            function c(d) {
                a.b.cz(a.d.bb) && 5E3 > encodeURIComponent(a.d.bb).length && (d.gu = a.d.bb, d.id = a.d.bc ? "1" : "0")
            }

            function f(d, b) {
                if (a.d.fk) {
                    var c = d.cm;
                    "number" === typeof c && (d.pc = c);
                    d.cm = 1;
                    !b && a.b.af() && AB_SCAFFOLD.sampling.set({
                        multiplier: 1,
                        enabled: !1
                    })
                }!b && a.b.db() && AB_SCAFFOLD.sampling.getQueryString(d)
            }

            function g(d, b) {
                var c, e = [],
                    g, f = a.b.ag() ? 2048 : 7750,
                    h = b || {};
                g = {};
                d.fs = "169489";
                for (c in d) d.hasOwnProperty(c) && (1 != d.e ||
                    "x" !== c && "y" !== c && "c" !== c ? e.push(encodeURIComponent(c) + "=" + encodeURIComponent(d[c])) : g[c] = d[c].split("a"));
                c = e.join("&");
                var e = f - c.length,
                    l = 0;
                if ("undefined" !== typeof g.x) {
                    for (var m = 0, B = 0; B < g.x.length; B++)
                        if (m += g.x[B].length + (g.y[B] ? g.y[B].length : 0) + (g.c[B] ? g.c[B].length : 0), m < e) l++;
                        else break;
                    0 < l && (c += "&x=" + g.x.slice(0, l - 1).join("a"), c += "&y=" + g.y.slice(0, l - 1).join("a"), c += "&c=" + g.c.slice(0, l - 1).join("a"))
                }
                for (var t in h) h.hasOwnProperty(t) && (g = "&" + encodeURIComponent(t) + "=" + encodeURIComponent(h[t]),
                    g.length + c.length < f && (c += g));
                c = c.replace(/\x27/g, "%27");
                try {
                    var f = c,
                        A;
                    var h = c,
                        w = d.i,
                        C = new x,
                        E = [C.getFullYear(), ("0" + (C.getMonth() + 1)).slice(-2), ("0" + C.getDate()).slice(-2)].join("-"),
                        h = h + (w + E),
                        w = 0;
                    if (0 == h.length) A = w;
                    else {
                        for (C = 0; C < h.length; C++) var F = h.charCodeAt(C),
                            E = w,
                            E = (E << 5) - E + F,
                            w = E & E;
                        A = q.abs(w)
                    }
                    c = f + ("&na=" + A)
                } catch (G) {}
                return c
            }

            function h(d, b) {
                d.j = 25 == b ? "string" == typeof a.d.f && a.d.f.slice(0, 500) || "" : a.b.z(a.d.f);
                if (!a.d.e) {
                    var c = a.b.v();
                    c && (d.lp = c)
                }
            }
            a.u = {};
            var e = ["zMoatBannerInfo"];
            a.u.c = function(d,
                b) {
                d.hp = 1;
                a.d.e && window.top.document && window.top.document.hasFocus && "function" === typeof window.top.document.hasFocus && (d.wf = window.top.document.hasFocus() ? 1 : 0)
            };
            a.u.b = function(d, b, k, p, u) {
                a.w.b(b, p);
                var n = {};
                n.e = d;
                a.b.bn(n, k);
                n.i = O;
                a.u.c(n, b);
                a.h && (n.cm = a.b.ab(a.h, a.i).multiplier);
                try {
                    n.kq = a.d.g && a.d.g.devicePixelRatio
                } catch (m) {
                    n.kq = 1
                }
                n.hq = a.d.o ? 1 : 0;
                n.hs = a.d.l ? 1 : 0;
                n.hu = a.d.ai ? 1 : 0;
                n.hr = a.d.ae ? 1 : 0;
                n.ht = a.d.al ? 1 : 0;
                n.dnt = a.d.fc ? 1 : 0;
                if (11 === d) {
                    a.m.a.zaxs("adNotFound");
                    d = [];
                    for (var r in Ca) Ca.hasOwnProperty(r) &&
                        d.push(r + "=" + Ca[r]);
                    n.k = d.join("&").slice(0, 300)
                }
                if (!(n.e in Ja)) {
                    n.bq = a.d.ax;
                    1 === b.skin && (n.wp = 1 === b.isSkin ? 1 : 1 === b.isAolSkin ? 2 : 3);
                    n.f = Number(!Da);
                    a.d.bl && (n.nh = 1);
                    h(n, n.e);
                    n.t = b.startTime;
                    n.de = b.rand;
                    n.m = 0;
                    n.ar = "21bcfc3260-clean";
                    a.b.br(n, "ai", t.z);
                    a.b.br(n, "wr", t.ACTIVETIMEUNTILSCROLL);
                    n.q = t.m++;
                    n.cb = sa ? 1 : 0;
                    n.ym = a.d.c && a.d.c() ? 1 : 0;
                    n.cu = ma;
                    n.ll = a.d.df || 0;
                    a.b.br(n, "lm", a.d.db());
                    n.ln = a.d.q ? 1 : 0;
                    n.r = a.r.i;
                    a.b.bn(n, a.focus.getQueryString());
                    a.w.n(b, n);
                    "undefined" !== typeof b && (n.d = b.zMoatMaster + ":" +
                        b.zMoatFlight + ":" + b.zMoatBanner + ":-", a.b.forEach(e, function(a) {
                            n[a] || (n[a] = b[a] || "-")
                        }), b.adFindingMethod && (n.hv = b.adFindingMethod), a.f && (n.qs = a.f.p), n.zGSRC = "1", c(n), b.zMoatCHNLS && (n.gv = b.zMoatCHNLS), b.zMoatGSCACHE && (n.hw = b.zMoatGSCACHE), n.zMoatS1 = b.moatClientLevel1, n.zMoatS2 = b.moatClientLevel2, n.zMoatS3 = b.moatClientLevel3, n.zMoatS4 = b.moatClientLevel4, n.zMoatAlias = b.zMoatAlias, n.zMoatMagicNum = b.zMoatMagicNum, n.gw = "adtechbrands092348fjlsmdhlwsl239fh3df", n.fd = "1");
                    a.d.d() && (a.d.cw() && a.p.m(n), a.p.b(n),
                        a.p.r(n, b));
                    a.d.cs() && (a.d.cv() && a.s.k(null, b, n), a.s.l(n));
                    a.n.m(n);
                    n.ac = 1;
                    n.it = a.aw.x;
                    a.d.an().isInApp && (n.lv = a.d.cq(), n.zl = a.d.dz() ? 1 : 0, a.d.cr() ? (a.b.az() && (n.wo = 1), (r = a.b.aw(a.d.bd)) && (n.zMoatMMAKns = r)) : a.d.cy() && (n.lx = 1));
                    a.e.c() && l(n);
                    n.ti = M;
                    n.ih = 1;
                    a.b.db() && (n.sk = AB_SCAFFOLD.scaffoldID, n.tn = AB_SCAFFOLD.AB_TEST_NAME);
                    f(n, u);
                    d = g(n);
                    r = za;
                    d = a.u.d(b, d + "&cs=0", n);
                    if (!0 === u) return {
                        qs: n,
                        res: d
                    };
                    d.shouldSendPixel && d.querystring && t.yh.yi(d.querystring, r)
                }
            };
            a.u.a = function(d, b, k) {
                if (window && window.closed ||
                    !d || !0 === d.ep) return !1;
                a.u.c(b, d.ao);
                try {
                    b.kq = a.d.g && a.d.g.devicePixelRatio
                } catch (m) {
                    b.kq = 1
                }
                a.aw.r(d);
                if ("undefined" !== typeof d.ao && (2 !== d.an || 1 !== b.e && 3 !== b.e) && !(b.e in Ja)) {
                    b.lo = d.FIND_AD_TRIES;
                    d.proxyTrackingEnabled && (b.tr = 1);
                    b.uk = a.b.aw(a.d.bd);
                    var p = a.b.ax(),
                        u = a.b.cu(p.results),
                        n = {
                            article: "pk",
                            page_height: "wk",
                            meta_properties: "rk",
                            favicon: "tk"
                        };
                    a.b.forEach(u, function(a) {
                        b[n[a]] = p.results[a] ? 1 : 0
                    });
                    d.hasNonIframeListener && (b.ni = 1);
                    var r = d.ag,
                        u = {},
                        z = a.aa.a(d.zr);
                    if (9 === b.e && 2 === b.q || 25 === b.e) {
                        for (var v in r) r.hasOwnProperty(v) &&
                            "" !== v && "undefined" !== typeof r[v] && -1 === v.indexOf("dvContains") && -1 === v.indexOf("indexOf") && -1 === v.toLowerCase().indexOf("clicktag") && (u["z" + v] = r[v]);
                        b.e = 25
                    }
                    0 === d.an && (b.dc = d.WMODE);
                    a.f && (b.qs = a.f.p);
                    "string" !== typeof d.ae || 0 != b.e && 25 != b.e ? b.ak = "-" : (v = a.d.l ? 700 : 1200, b.ak = d.ae.length <= v ? d.ae : d.ae.slice(0, v));
                    d.bi > d.bg && (d.bg = d.bi);
                    d.bm > d.bk && (d.bk = d.bm);
                    b.i = O;
                    a.b.bn(b, a.f.u(!0));
                    b.bq = a.d.ax;
                    1 === d.ao.skin && (b.wp = 1 === d.ao.isSkin ? 1 : 1 === d.ao.isAolSkin ? 2 : 3);
                    b.g = d.aq.g++;
                    d.isSREMeasurable || d.setDimensions();
                    a.d.fi ? (r = a.d.s(a.d.g), v = r.width, r = r.height) : d.compositeAdAreaPx ? (v = d.compositeAdAreaPx, r = 1) : (v = d.INITIAL_WIDTH, r = d.INITIAL_HEIGHT);
                    v = v || 0;
                    r = r || 0;
                    0 < v && 0 < r && (d.isSREMeasurable = !0);
                    b.hq = a.d.o ? 1 : 0;
                    b.hs = a.d.l ? 1 : 0;
                    b.hu = a.d.ai ? 1 : 0;
                    b.hr = a.d.ae ? 1 : 0;
                    b.ht = a.d.al ? 1 : 0;
                    b.dnt = a.d.fc ? 1 : 0;
                    a.n.a() && a.n.realEstateMeasurements && (v = a.n.realEstateMeasurements.w, r = a.n.realEstateMeasurements.h);
                    b.h = r;
                    b.w = v;
                    a.d.d() && (b.om = a.e.t());
                    a.d.j() && (v = a.d.t(), b.rm = 0 < v.width && 0 < v.height && a.n.realEstateMeasurements ? 1 : 0);
                    try {
                        a.d.dj() &&
                            d && d.elementRect && (b.fy = d.elementRect.left, b.gp = d.elementRect.top)
                    } catch (m) {}
                    b.zGSRC = "1";
                    c(b);
                    d.ao.zMoatCHNLS && (b.gv = d.ao.zMoatCHNLS);
                    d.ao.zMoatGSCACHE && (b.hw = d.ao.zMoatGSCACHE);
                    a.h && (b.cm = a.b.ab(a.h, a.i).multiplier);
                    b.f = Number(!Da);
                    h(b, b.e);
                    b.t = d.ao.startTime;
                    b.de = d.ao.rand;
                    b.cu = ma;
                    b.m = b.m || a.b.am(d);
                    b.ar = "21bcfc3260-clean";
                    b.cb = sa ? 1 : 0;
                    b.ym = a.d.c && a.d.c() ? 1 : 0;
                    b.ll = a.d.df || 0;
                    a.b.br(b, "lm", a.d.db());
                    b.ln = a.d.q ? 1 : 0;
                    b.r = a.r.i;
                    a.b.bn(b, a.q.c());
                    a.d.e && (b.gh = 1);
                    a.d.bl && (b.nh = 1);
                    b.xx = a.d.fj + ":" + a.f.au();
                    b.td = a.d.dc;
                    a.d.u();
                    b.qa = a.d.x;
                    b.qb = a.d.y;
                    b.qi = a.d.v;
                    b.qj = a.d.w;
                    b.qf = a.d.z;
                    b.qe = a.d.aa;
                    b.qh = a.d.ab;
                    b.qg = a.d.ac;
                    try {
                        b.lk = d && d.elementRect && d.elementRect.top + a.d.ad || "undefined"
                    } catch (m) {}
                    b.lb = a.d.i;
                    b.le = La ? 1 : 0;
                    a.f && void 0 !== a.f.al && (b.lf = a.f.al);
                    a.f && void 0 !== a.f.av && (b.lj = a.f.av);
                    a.f && void 0 !== a.f.aw && (b.li = a.f.aw);
                    a.f && void 0 !== a.f.ad && (b.lg = a.f.ad);
                    a.f && void 0 !== a.f.an && (b.lh = a.f.an);
                    a.aa.d() && (b.mn = 1, a.aa.e() && (b.mo = 1));
                    a.d.ds() && (b.gm = 1, a.d.e && "sframe" === z && (b.fq = 0));
                    a.d.dk() && (b.io = 1);
                    a.d.cd &&
                        (b.fa = 1);
                    "number" !== typeof a.d.cf || isNaN(a.d.cf) || (b.zz = a.d.cf);
                    a.d.ch() && (b.fx = 1);
                    a.d.bn() && a.d.bp() && (b.mm = 1);
                    a.d.cn() && (b.hx = 1);
                    if (a.q && a.q.a()) b.ch = 1, b.gh = 1;
                    else if (a.r && a.r.a) {
                        a.d.by && (b.ss = 1);
                        a.d.eu && (b.ie = 1);
                        if (d && d.periscopeManager) {
                            v = !a.focus.pageIsVisible() && d && d.counters && d.counters.strictDwell && 0 == d.counters.strictDwell.tCur && 21 == b.e;
                            r = a.b.aj && "0" != a.b.aj();
                            if (d.periscopeManager.measurable || !a.d.e && v && r) b.ch = 1;
                            d.periscopeManager.fullyMeasurable && d.ao && 1 != d.ao.skin && (b.ga = 1)
                        } else b.ch =
                            1;
                        "undefined" !== typeof a.r.am && d && d.ao && d.ao.startTime && !isNaN(d.ao.startTime) && (v = a.r.am - d.ao.startTime, b.fg = 0 <= v ? v : 0)
                    } else b.ch = 0;
                    b.vv = z ? d.viewabilityMethod[z] : 0;
                    v = d.viewabilityMethod;
                    b.vw = (v.strict || 0) + ":" + (v.sframe || 0) + ":" + (v.pscope || 0);
                    v = d.viewabilityPercent;
                    b.vp = v[z];
                    b.vx = v.strict + ":" + v.sframe + ":" + v.pscope;
                    a.b.bn(b, a.aa.y(d.zr, b));
                    a.b.bn(b, a.focus.getQueryString());
                    a.b.bn(b, a.aq.b(d.zr));
                    a.b.bn(b, a.be.a(d.zr));
                    a.b.bn(b, a.az.x(d.zr));
                    a.b.bn(b, d.counters.getQs());
                    d.px2 && d.px2.inSample && !d.px2.success &&
                        (b.zMoatIDF = 1);
                    a.bf.a(d, b);
                    a.ae.b(d, b);
                    a.b.br(b, "ai", t.z);
                    a.b.br(b, "wr", t.ACTIVETIMEUNTILSCROLL);
                    a.b.br(b, "ap", d.cb);
                    a.b.br(b, "ax", d.bg);
                    a.b.br(b, "ay", d.bi);
                    a.b.br(b, "az", d.bk);
                    a.b.br(b, "ba", d.bm);
                    a.b.br(b, "aw", d.bc);
                    a.b.br(b, "bg", d.bd);
                    a.b.br(b, "be", d.be);
                    a.b.br(b, "bc", d.bw);
                    a.b.br(b, "bf", d.by);
                    a.b.br(b, "bh", d.bx);
                    a.b.br(b, "bz", d.cu);
                    b.cl = q.round(100 * d.IR5.AREA / (b.w * b.h));
                    0 < d.aq[2] && (b.au = d.aq[2] - 1);
                    0 < d.aq[3] && (b.av = d.aq[3] - 1);
                    0 < d.aq[23] && (b.by = d.aq[23] - 1);
                    b.at = d.dm;
                    a.w.n(d.ao, b);
                    b.d = d.ao.zMoatMaster +
                        ":" + d.ao.zMoatFlight + ":" + d.ao.zMoatBanner + ":-";
                    b.zMoatS1 = d.ao.moatClientLevel1;
                    b.zMoatS2 = d.ao.moatClientLevel2;
                    b.zMoatS3 = d.ao.moatClientLevel3;
                    b.zMoatS4 = d.ao.moatClientLevel4;
                    b.zMoatAlias = d.ao.zMoatAlias;
                    b.zMoatMagicNum = d.ao.zMoatMagicNum;
                    b.gw = "adtechbrands092348fjlsmdhlwsl239fh3df";
                    a.b.forEach(e, function(a) {
                        b[a] || (b[a] = d.ao[a] || "-")
                    });
                    d.ao.adFindingMethod && (b.hv = d.ao.adFindingMethod);
                    b.ab = d.an;
                    b.ac = 1;
                    b.fd = "1";
                    b.kt = z;
                    b.it = a.aw.x;
                    a.d.d() && (d.aa === a.d.g.document.body && (b.zg = 1), a.d.cw() && a.p.m(b), a.p.b(b));
                    a.d.cs() && (d.aa === a.d.g.document.body && (b.zg = 1), a.d.cv() && a.s.k(d, d.ao, b), a.s.l(b));
                    a.n.m(b);
                    d.bi = d.bg;
                    d.bm = d.bk;
                    a.ab.g(d) && (b.fz = 1);
                    z = a.ab.d(d.zr);
                    b.oq = z ? 1 : 0;
                    "undefined" !== typeof d.zr && (b.ot = a.ab.h[d.zr].stateMask.toString(16));
                    a.d.an().isInApp && (b.lv = a.d.cq(), b.zl = a.d.dz() ? 1 : 0, a.d.cr() ? (a.b.az() && (b.wo = 1), (z = a.b.aw(a.d.bd)) && (b.zMoatMMAKns = z)) : a.d.cy() && (b.lx = 1));
                    d.debugData && (b.zMoatJS = d.debugData.getValue());
                    b.ti = M;
                    b.ih = 1;
                    a.b.db() && (b.sk = AB_SCAFFOLD.scaffoldID, b.tn = AB_SCAFFOLD.AB_TEST_NAME);
                    d &&
                        d.isMeasurabilityDisabled() && l(b);
                    a.e.c() && l(b);
                    a.b.ai([2], b.e) && d.aq.tc++;
                    b.tc = d.aq.tc;
                    f(b, k);
                    v = g(b, u);
                    z = za;
                    if (k) return b;
                    k = a.u.d(d.ao, v + "&cs=0", b, u);
                    k.shouldSendPixel && k.querystring && t.yh.yi(k.querystring, z)
                }
            };
            a.u.e = function(a, b) {
                a.zMoatSrcd = a.d;
                a.zMoatSrcbo = a.bo;
                a.zMoatSrcbp = a.bp;
                a.zMoatSrcbd = a.bd;
                a.d = (b.moatClientLevel1 || "") + ":";
                a.d += (b.moatClientLevel2 || "") + ":";
                a.d += (b.moatClientLevel3 || "") + ":";
                a.d += b.moatClientLevel4 || "";
                return a
            };
            a.u.f = function(d, b, c, e, f, h, l) {
                d = "extraPx_" + d;
                b[d] || (b[d] = {});
                e = a.b.g(e);
                e.zMoatSrci = e.i;
                e.i = c;
                l && (e = a.u.e(e, l));
                if (a.f.ax && !b[d].timestampsReset)
                    for (var m = 0; m < a.f.ax.length; m++) {
                        var v = a.f.ax[m];
                        v.zMoatSrci = v.i;
                        v.i = c;
                        l && (v = a.u.e(v, l));
                        v = g(v) + "&cs=0";
                        t.yh.yi(v, f)
                    }
                b[d].timestampsReset || (b[d].timestampsReset = !0, e.lc && (e.lc = 0), e.cd && (e.cd = 0), e.sm && (e.sm = 0), e.fv && (e.fv = 0), e.pn && (e.pn = 0), e.lt && (e.lt = 0), e.ba && (e.ba = 0), e.sq && (e.sq = 0), e.gg && (e.gg = 0), e.mu && (e.mu = 0), e.si && (e.si = 0), e.aq && (e.aq = 0), e.mc && (e.mc = 0), e.dt && (e.dt = 0), e.gt && (e.gt = 0), e.ao && (e.ao = 0), e.mk && (e.mk = 0),
                    e.dr && (e.dr = 0), e.ev && (e.ev = 0), e.ge && (e.ge = 0), e.mx && (e.mx = 0), e.an && (e.an = 0), e.cf && (e.cf = 0), e.gl && (e.gl = 0), e.mw && (e.mw = 0), e.xb && (e.xb = 0), e.db && (e.db = 0), e.am && (e.am = 0), e.fj && (e.fj = 0), e.my && (e.my = 0), e.mz && (e.mz = 0), e.cn && (e.cn = 0), e.es && (e.es = 0), e.sa && (e.sa = 0), e.fp && (e.fp = 0), e.pf && (e.pf = 0), e.ay && (e.ay = 0), e.fn && (e.fn = 0), e.bx && (e.bx = 0));
                d = g(e, h);
                t.yh.yi(d + "&cs=0", f)
            };
            a.u.d = function(d, b, c, e) {
                d = !0;
                if (a.h && (d = a.b.ae(), !d)) {
                    for (var f = [1, 2, 3, 23, 25], h = 0, l = f.length; h < l; h++)
                        if (c.e == f[h]) {
                            d = !0;
                            break
                        }
                    d && (c.cm = 0, b =
                        g(c, e), b += "&cs=0")
                }
                a.d.dx && 25 == c.e && (d = !1);
                return {
                    shouldSendPixel: d,
                    querystring: b
                }
            };
            a.u.g = function(a, b) {
                if (2 !== a.an || 1 !== b.e && 3 !== b.e)(new Image(1, 1)).src = ""
            };
            a.u.h = function(d) {
                var b = a.u.i(d.data);
                b.i += d.iKeySuffix;
                var c = g(b, d.flashVarsForQS) + "&cs=0";
                if (d.sendNow) {
                    var e = d.useBeacon;
                    if (a.f.ax)
                        for (var f = 0; f < a.f.ax.length; f++) {
                            var h = a.f.ax[f];
                            h.i += d.iKeySuffix;
                            h = g(h) + "&cs=0";
                            t.yh.yi(h, d.pixelURL)
                        }
                    e ? navigator.sendBeacon("//bn.pixel.moatads.com/pixel.gif?" + c, "") : t.yh.yi(c, d.pixelURL)
                }
                return b
            };
            a.u.i = function(d) {
                d =
                    a.b.g(d);
                for (var b = "am an ao aq ay ba bx cd cf db dr dt es ev sa sq si sm mc lc pf xb ge gg cn gl pn fj lt mu mk mw mx my mz fn fp fv".split(" "), c = 0; c < b.length; c++) d[b[c]] && (d[b[c]] = 0);
                return d
            };
            a.u.j = function(a, b) {
                return g(a, b)
            };
            a.u.k = function(d) {
                var b = {
                    e: 16
                };
                b.q = d.aq[16]++;
                a.u.a(d, b)
            };
            a.u.l = function(d) {
                var b = !1,
                    c = a.u.b(8, d.ao, !1, !1, !0);
                if (c && c.qs && c.qs.d) {
                    b = c.qs.d.split(":");
                    b = {
                        viewHash: O,
                        moatClientLevel1: b[0],
                        moatClientLevel2: b[1],
                        moatClientLevel3: b[2],
                        moatClientLevel4: b[3],
                        tagStartTime: a.d.bg
                    };
                    if (d && d.ao)
                        for (var e in d.ao) d.ao.hasOwnProperty(e) && -1 != e.indexOf("zMoat") && (b[e] = d.ao[e]);
                    for (e in c) c.hasOwnProperty(e) && -1 != e.indexOf("zMoat") && (b[e] = c[e])
                }
                return b
            };
            a.u.m = function(d) {
                var b = {
                    e: 8
                };
                b.q = d.aq[8]++;
                return a.u.a(d, b, !0)
            }
        })(m);
        (function(a) {
            function l(c, f, e, d, b) {
                var k = 1E4;
                a.d.an().isInApp && (k = 500);
                (new x).getTime();
                this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
                this.getMaxContinuous = function() {
                    return q.max(this.tContinuous, this.tMaxContinuous)
                };
                this.reset = function() {
                    this.tLast =
                        this.tCur = 0
                };
                this.update = function(a, e, f) {
                    c(a) ? (e = q.min(e, k), a = typeof d, e && 0 > e && (e = 0), this.tCur += e, this.tContinuous += e, "number" === a && 0 < d ? this.tCur > d && (this.tCur = d) : "function" === a && (e = d(), "number" === typeof e && this.tCur > e && 0 < e && (this.tCur = e))) : (this.tMaxContinuous < this.tContinuous && (this.tMaxContinuous = this.tContinuous), this.tContinuous = 0);
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
                    f && e && (a[f] = this.tCur, a[e] = this.tLast);
                    return a
                }
            }
            a.t = {};
            a.t.g = {};
            a.t.g.a = [];
            a.t.g.b = [];
            var c = !1,
                f = {};
            a.t.i = function() {
                if (!c) {
                    c = !0;
                    try {
                        var g = t.swde.azsx("scroll", a.t.j);
                        a.m.a.azsx("allLocalAdsKilled", function() {
                            t.swde.sxaz("scroll", {
                                id: g
                            })
                        }, {
                            once: !0
                        })
                    } catch (f) {}
                }
            };
            a.t.k = function(c, f) {
                try {
                    if (a.d.c()) return !0;
                    var e = c.aa,
                        d = a.b.ar(e, 5),
                        b = d && (6 == d.length || 1 <= d.length && "HTML" === d[d.length - 1].nodeName);
                    f = f || c.WINDOW || a.b.ap(e);
                    return !(e && f && b) || "Unicast Generic" === W && a.au.k(c.zr) && (3 > e.offsetWidth || 3 > e.offsetHeight) ||
                        e.ownerDocument && e.ownerDocument.body && !e.ownerDocument.body.contains(e) ? !1 : !0
                } catch (k) {
                    return !1
                }
            };
            a.t.l = function() {
                function c() {
                    if (!k) try {
                        k = !0, f(b), k = !1
                    } catch (a) {
                        throw k = !1, a;
                    }
                }

                function f(a) {
                    var b = a.Moat;
                    a = a.domNodesIdToAd;
                    for (var c in a) a.hasOwnProperty(c) && b.au.m("loop", c);
                    b.t.m();
                    c = (new x).getTime();
                    a = q.max(q.min(c - e, d), 0);
                    b.m.a.zaxs("view:tick", a, c);
                    e = c;
                    b.az.w()
                }
                var e = (new x).getTime(),
                    d = 1E4;
                a.d.an().isInApp && (d = 500);
                var b = {
                        Moat: a,
                        domNodesIdToAd: A
                    },
                    k = !1;
                a.m.a.azsx("periscope:onStateChange", c);
                a.m.a.azsx("viewCounterStarted", c);
                var l = "MOAT_VIEW_LOOP_ID_" + (new x).getTime();
                a.o.g(f, b, 200, l);
                return a.b.cm([b], f)
            }();
            a.t.m = function() {
                var c, f;
                for (f in A) A.hasOwnProperty(f) && (c = A[f], a.t.k(c, c.WINDOW) || a.t.a(c))
            };
            a.t.a = function(c) {
                if (!0 !== c.ep) {
                    if (!wa) {
                        var f = {
                            shouldKillAd: !0
                        };
                        a.m.a.zaxs("beforeAdKilled", f, c);
                        if (!f.shouldKillAd) return
                    }
                    a.m.a.zaxs("adKilled", c);
                    a.e.o(c)
                }
            };
            a.t.e = function(c) {
                c.eq || (c.eq = !0);
                var f = {
                    e: 5
                };
                f.q = c.aq[5]++;
                a.u.a(c, f)
            };
            a.t.d = function(c) {
                if (!c || !c.aq || !c.aq[0]) return !1;
                var f = {
                    e: 37
                };
                f.q = c.aq[37]++;
                a.u.a(c, f)
            };
            a.t.n = [];
            a.t.o = function(c, f) {
                var e = !1;
                if (!c || !c.aq || !c.aq[29] || 3 > c.aq[29]) return !1;
                for (var d = 0; d < f.length; d++) {
                    var b = f[d]; - 1 === a.b.indexOf(a.t.n, b) && (e = !0, a.t.n.push(b))
                }
                e && (e = {
                    e: 37
                }, e.q = c.aq[37]++, a.u.a(c, e))
            };
            a.t.c = function(c) {
                var f, e;
                f = c.aa;
                if (1 == c.ao.skin) return !1;
                if (a.aq.c(c)) return !0;
                c.elementRect || (c.currentWidth = f.offsetWidth, c.currentHeight = f.offsetHeight);
                f = c.currentWidth;
                e = c.currentHeight;
                var d = !0;
                a.n.a() && (d = !1);
                return d && (3 > f || 3 > e) || a.ay.c(c.zr) || a.focus.pageIsPrerendered() ||
                    -1 !== window.location.href.indexOf("mapquest.com/print") && "none" === Z.document.getElementById("ad").style.display ? !0 : !1
            };
            a.t.f = function(c) {
                return c ? a.focus.pageIsVisible() : !1
            };
            a.t.p = function(c) {
                var f = 1;
                screen.deviceXDPI ? f = screen.deviceXDPI / screen.systemXDPI : c.devicePixelRatio && "undefined" !== typeof c.mozInnerScreenX && (f = c.devicePixelRatio);
                return (c = a.d.t()) ? {
                    w: f * c.width,
                    h: f * c.height
                } : {
                    w: 0,
                    h: 0
                }
            };
            a.t.h = function(c) {
                c.counters = {};
                c.counters.laxDwell = new l(function() {
                        return !a.focus.pageIsPrerendered()
                    }, "bu",
                    "cd");
                c.counters.strictDwell = new l(a.focus.pageIsVisible, "ah", "am");
                c.counters.query = function() {
                    var a = {},
                        d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var b = this[d];
                            "function" === typeof b.query && b.query(a)
                        }
                    return a
                };
                c.counters.getQs = function() {
                    var a = {},
                        d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var b = this[d];
                            "function" === typeof b.getQs && b.getQs(a)
                        }
                    return a
                };
                c.counters.update = function(a, d, b) {
                    for (var c in this)
                        if (this.hasOwnProperty(c)) {
                            var f = this[c];
                            "function" === typeof f.update && !0 !== a.ep && f.update(a,
                                d, b)
                        }
                };
                a.m.a.azsx("startAdTracking", a.t.i);
                var h = a.m.a.azsx("view:tick", a.b.cm([c], c.counters.update, c.counters));
                f[c.zr] = h
            };
            a.t.q = function() {
                t.z = void 0;
                t.ACTIVETIMEUNTILSCROLL = void 0;
                t.zs = !1;
                t.xz = !1;
                t.dcsx.wsqa("globalScrollevent" + t.dcsx.uid);
                a.b.forEach(a.t.g.a, function(a) {
                    if (a && "function" === typeof a) try {
                        a()
                    } catch (c) {}
                })
            };
            a.t.j = function(c) {
                if (a.focus.pageIsVisible()) {
                    c = (new x).getTime();
                    "undefined" === typeof t.z && (t.z = c - ma);
                    if ("undefined" === typeof t.ACTIVETIMEUNTILSCROLL) {
                        var f = a.focus.focusStartTime ||
                            ma;
                        f < ma && (f = ma);
                        t.ACTIVETIMEUNTILSCROLL = c - f
                    }
                    a: {
                        for (var e in A)
                            if (A.hasOwnProperty(e) && (c = A[e]) && "undefined" !== typeof c.ao) {
                                if (c.ce) break a;
                                f = {
                                    e: 4
                                };
                                f.q = c.aq[4]++;
                                f.ai = t.z;
                                f.wr = t.ACTIVETIMEUNTILSCROLL;
                                a.u.a(c, f);
                                c.ce = !0
                            }
                        try {
                            t.dcsx.wsqa("globalScrollevent" + t.dcsx.uid), t.swde.sxaz("scroll", {
                                callback: a.t.j
                            })
                        } catch (d) {}
                    }
                }
            };
            a.t.b = function(c, f) {
                var e = {
                    e: 9
                };
                e.q = c.aq[9]++;
                c.ci = +new x;
                f && "object" === typeof f && a.b.forEach(f, function(a, b) {
                    e[b] = a
                });
                a.u.a(c, e)
            };
            a.m.a.azsx("adKilled", function(c) {
                c && !c.ep && f.hasOwnProperty(c.zr) &&
                    a.m.a.sxaz("view:tick", {
                        id: f[c.zr]
                    })
            })
        })(m);
        (function(a) {
            function l(c, f) {
                function g(a) {
                    return function() {
                        try {
                            a.sending && (a.sending = !1, u = 0, h())
                        } catch (b) {}
                    }
                }

                function h(a, b) {
                    if (a) {
                        var c = {
                            qs: a,
                            jsd: b
                        };
                        if (0 === a.indexOf("e=21&")) {
                            d(c, !0);
                            return
                        }
                        l.push(c)
                    }
                    0 === u && 0 < l.length && (u++, c = l.shift(), c.sending = !0, c.uid = f.Math.floor(1E10 * f.Math.random()), c.timeoutId = f.setTimeout(g(c), 2E3), v[c.uid] = c, d(c))
                }

                function e() {
                    try {
                        return new n(1, 1)
                    } catch (a) {
                        var b = window.document.createElement("img");
                        b.height = 1;
                        b.width = 1;
                        return b
                    }
                }

                function d(d, c) {
                    if (d && d.qs && 0 === d.qs.indexOf("e=21&")) return !1;
                    if ("object" === typeof a && a && a.d && a.d.c && a.d.c()) a.d.cw() && a.p.i(d.jsd + "/pixel.gif?" + d.qs, function() {
                        k(d)
                    }, function() {
                        b(d)
                    });
                    else {
                        var f = e();
                        f.toSend = d;
                        c || (f.onerror = function() {
                            b(this.toSend)
                        }, f.onload = function() {
                            k(this.toSend)
                        });
                        f.src = d.jsd + "/pixel.gif?" + d.qs
                    }
                }

                function b(a) {
                    a.failedAttempts = "number" == typeof a.failedAttempts ? a.failedAttempts + 1 : 0;
                    var b = (a.jsd + "/pixel.gif?" + a.qs).length;
                    1 > a.failedAttempts ? d(a) : t && b > x && k(a)
                }

                function k(a) {
                    var b =
                        a && a.uid && v && v[a.uid];
                    if (a && a.qs && "tracer=" == a.qs) return !1;
                    if (b) {
                        v[a.uid] = null;
                        try {
                            delete v[a.uid]
                        } catch (d) {}
                        try {
                            clearTimeout(b.timeoutId)
                        } catch (d) {}
                        if ("boolean" != typeof b.sending || b.sending) b.sending = !1;
                        else return !1
                    }
                    0 < u && u--;
                    h()
                }
                var l = [],
                    u = 0,
                    n, m = f[c],
                    z = f.Math.floor(1E10 * f.Math.random()),
                    v = {};
                m.yh = {};
                m = m.yh;
                n = f.Image;
                m.yi = function(a, b) {
                    h(a, b)
                };
                m.xq = function() {
                    return z
                };
                var q, t, x = 2083;
                try {
                    q = document.createElement("div"), q.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e", t = "x" === q.innerHTML
                } catch (w) {
                    t = !1
                }
            }
            a.bg = {};
            a.bg.a = function(c) {
                try {
                    if (t.yh) return
                } catch (f) {}
                a.d.c() ? l(a.d.aw, c) : a.b.cq(l, "'" + a.d.aw + "',window", c)
            }
        })(m);
        (function(a) {
            a.ba = {};
            a.ba.b = function(l, c) {
                var f = !0;
                c && a.d.dr(l, !0) || (f = !1);
                if (f) {
                    f = !0;
                    c && c.getCareAboutFocus && (f = c.getCareAboutFocus());
                    var g = a.t.c(l),
                        f = (!f || a.t.f(l)) && !g
                }
                return f
            };
            a.ba.c = function(l) {
                this.label = l;
                this.metrics = {};
                this.hasTickUpdateMetrics = !1;
                this.set = function(a, f, g) {
                    this.metrics[a] = this.metrics[a] || {};
                    this.metrics[a].value = f || 0;
                    g && (this.hasTickUpdateMetrics || (this.hasTickUpdateMetrics = !0), this.metrics[a].incrementValue = g.incrementValue || "delta", this.metrics[a].ignoreStateCheck = g.ignoreStateCheck || !1, this.metrics[a].shouldIncrementFn = g.shouldIncrementFn, this.metrics[a].postIncrementationFn = g.postIncrementationFn || !1, g.useDeltaCompensation && (this.metrics[a].useDeltaCompensation = !0, this.metrics[a].incrementedLastTick = !1));
                    return this.metrics[a].value
                };
                this.increment = function(a, f, g, h, e) {
                    var d = !this.metrics[a] || "number" !== typeof this.metrics[a].value;
                    try {
                        if (h.debugData && d && "publicis_counter" ==
                            this.label) {
                            var b;
                            this.metrics[a] ? this.metrics[a].value && (b = this.metrics[a].value) : b = "NONE";
                            var k = [f, b, e].join("-");
                            h.debugData.cache.push(k)
                        }
                    } catch (l) {}
                    f = d ? this.set(a, f) : this.metrics[a].value += f;
                    "number" === typeof g && (f = this.cap(a, f));
                    return f
                };
                this.cap = function(a, f) {
                    return this.set(a, q.min(this.get(a), f))
                };
                this.max = function(a, f) {
                    return this.set(a, q.max(this.get(a), f))
                };
                this.get = function(c, f) {
                    if (!a.e.c() || "visOnLastCheck" === c) return "undefined" === typeof this.metrics[c] ? this.set(c, "undefined" !== typeof f ?
                        f : 0) : this.metrics[c].value
                };
                this.update = function(c, f, g) {
                    if (c && this.hasTickUpdateMetrics) {
                        g = a.aa.j(c.zr, !0);
                        var h = a.ba.b(c, g),
                            e;
                        for (e in this.metrics)
                            if (a.b.cf(this.metrics, e)) {
                                var d = this.metrics[e];
                                if (d.shouldIncrementFn) {
                                    var b = (h || !0 === d.ignoreStateCheck) && d.shouldIncrementFn(c, g);
                                    d.useDeltaCompensation ? (b && d.incrementedLastTick ? this.increment(e, f, void 0, c, 1) : (b || d.incrementedLastTick) && this.increment(e, q.round(f / 2), void 0, c, 2), d.incrementedLastTick = b) : b && ("delta" === d.incrementValue ? this.increment(e,
                                        f, void 0, c, 3) : "addReturnValue" === d.incrementValue ? this.increment(e, b, void 0, c, 4) : "setReturnValue" === d.incrementValue && this.set(e, b));
                                    "function" === typeof d.postIncrementationFn && d.postIncrementationFn(b)
                                }
                            }
                    }
                }
            };
            a.ba.a = function(l, c) {
                if (!l) return !1;
                var f;
                l[c] ? f = l[c] : (f = new a.ba.c(c), l[c] = f);
                return f
            };
            a.ba.d = function(l, c, f) {
                if (!c) return !1;
                c = a.ba.a(c, f);
                l.secondaryCounters = l.secondaryCounters || [];
                l.secondaryCounters.push(c);
                return c
            }
        })(m);
        (function(a) {
            function l(c, f, g) {
                this.name = c;
                this.reachedInViewTimeThreshold = !1;
                this.alwaysInview = !0;
                this.queryStringKey = g.queryStringKey;
                this.timeThreshold = g.timeThreshold || 1E3;
                this.rawPercThreshold = g.percThreshold / 100 || 50;
                this.percThreshold = q.min(g.percThreshold / 100, .98);
                this.continuous = g.continuous || !1;
                this.timePercent = g.timePercent;
                this.capTimeThreshold = g.capTimeThreshold;
                this.audible = g.audible || !1;
                this.video = g.video || !1;
                this.fullscreen = g.fullscreen || !1;
                "undefined" !== this.timeThreshold && (this.timeThreshold = q.max(this.timeThreshold, 1));
                this.counterState = {};
                c = a.ba.a(this.counterState,
                    "customInViewCounter");
                c.set("inViewTime", 0);
                c.set("continuousInViewTime", 0);
                c.set("maxContinuousInViewTime", 0);
                c.set("visOnLastCheck", !1);
                c.set("_tLastChecked", (new x).getTime())
            }
            a.ae = {};
            a.ae.c = {};
            a.ae.d = {};
            a.ae.e = function(c, f, g) {
                if (a.ae.c.hasOwnProperty(c) || void 0 == g.percThreshold && void 0 == g.fullscreen || void 0 == g.timeThreshold && void 0 == g.timePercent) return !1;
                f = new l(c, f, g);
                return a.ae.c[c] = f
            };
            a.ae.f = function(c) {
                return a.e.c() || !a.ae.c.hasOwnProperty(c) ? !1 : a.ae.c[c]
            };
            a.ae.a = function() {
                var c, f;
                for (f in a.ae.c)
                    if (a.ae.c.hasOwnProperty(f) &&
                        (c = a.ae.f(f), !c.reachedInViewTimeThreshold)) return !1;
                return !0
            };
            l.prototype.update = function(c, f, g) {
                if (c && this.isMeasurable(c) && !this.reachedInViewTimeThreshold) {
                    var h, e = a.ba.a(this.counterState, "customInViewCounter"),
                        d = a.aa.j(c.zr, !0);
                    if (d) {
                        var b = d.getLastInviewPercent();
                        customInviewPercentThreshold = (h = d.getFullyInViewThreshold()) && "number" === typeof h ? q.min(this.percThreshold, h) : this.percThreshold;
                        e.get("_tLastChecked");
                        e.set("_tLastChecked", g);
                        g = !0;
                        d.getCareAboutFocus && (g = d.getCareAboutFocus());
                        c =
                            d.getPauseCheckingFn ? d.getPauseCheckingFn()(c) : a.t.c(c);
                        b = b >= customInviewPercentThreshold;
                        d = !g || a.focus.pageIsVisible();
                        a.ae.g && "function" === typeof a.ae.g && (b = a.ae.g(b));
                        a.ae.h && "function" === typeof a.ae.h && (d = a.ae.h(d));
                        b = b && d && !c;
                        c = e.get("visOnLastCheck");
                        if (b && c) e.increment("inViewTime", f), e.increment("continuousInViewTime", f);
                        else if (b || c) f = q.round(f / 2), e.increment("inViewTime", f), e.increment("continuousInViewTime", f);
                        b || (this.alwaysInview = !1);
                        e.set("visOnLastCheck", b);
                        e.get("continuousInViewTime") >
                            e.get("maxContinuousInViewTime") && e.set("maxContinuousInViewTime", e.get("continuousInViewTime"));
                        b || e.set("continuousInViewTime", 0);
                        this.inViewTimeReached() && (this.reachedInViewTimeThreshold = !0)
                    }
                }
            };
            l.prototype.getInViewTime = function() {
                var c = a.ba.a(this.counterState, "customInViewCounter");
                return this.continuous ? c.get("maxContinuousInViewTime") : c.get("inViewTime")
            };
            l.prototype.inViewTimeReached = function() {
                return "undefined" !== this.timeThreshold && this.getInViewTime() >= this.timeThreshold
            };
            l.prototype.isMeasurable =
                function(c) {
                    if (!c) return !1;
                    var f = !1;
                    "undefined" !== this.timeThreshold && ("pscope" == a.aa.a(c.zr, !0) && c.custominview.periscopeThresholds ? a.b.ai(c.custominview.periscopeThresholds, this.rawPercThreshold) && a.d.dr(c) && (f = !0) : a.d.dr(c, !0) && (f = !0));
                    return f
                };
            a.ae.i = function(c) {
                if (c && c.isMeasurabilityDisabled()) return !1;
                a.ae.e("full_vis_2_sec_continuous", c, {
                    percThreshold: 100,
                    timeThreshold: 2E3,
                    video: !1,
                    continuous: !0,
                    queryStringKey: "wb"
                })
            };
            a.ae.j = function(c) {
                a.ae.i(c);
                c.custominview = {};
                c.custominview.eventIds = {};
                for (var f = (c.periscopeConfig || a.r.m(c)).pixels, g = [], h = 0, e = f.length; h < e; h++) g.push(parseFloat(f[h].position.top, 10) / 100);
                c.custominview.periscopeThresholds = g;
                c.custominview.eventIds.viewCounterStarted = a.m.a.azsx("viewCounterStarted", a.ae.k);
                c.custominview.eventIds["periscope:onStateChange"] = a.m.a.azsx("periscope:onStateChange", a.ae.k, {
                    priority: 5
                });
                c.custominview.eventIds.adKilled = a.m.a.azsx("adKilled", a.ae.l);
                a.ae.k(c)
            };
            a.ae.k = function(c) {
                void 0 !== c && (isNaN(c) || (c = A[c]), c && c.custominview && c.custominview.eventIds &&
                    a.d.dr(c, !0) && !c.custominview.eventIds["view:tick"] && (c.custominview.eventIds["view:tick"] = a.m.a.azsx("view:tick", a.b.cm([c], a.ae.m), {
                        priority: 6
                    })))
            };
            a.ae.m = function(c, f, g) {
                if (c && c.isMeasurabilityDisabled()) return !1;
                for (var h in a.ae.c) a.ae.c.hasOwnProperty(h) && a.ae.c[h].update(c, f, g)
            };
            a.ae.l = function(c) {
                c && c.custominview && c.custominview.eventIds && (a.m.a.sxaz("view:tick", {
                        id: c.custominview.eventIds["view:tick"],
                        priority: 6
                    }), a.m.a.sxaz("viewCounterStarted", {
                        id: c.custominview.eventIds.viewCounterStarted
                    }),
                    a.m.a.sxaz("periscope:onStateChange", {
                        id: c.custominview.eventIds["periscope:onStateChange"]
                    }), a.m.a.sxaz("adKilled", {
                        id: c.custominview.eventIds.adKilled
                    }), a.m.a.sxaz("video:AdVideoComplete", {
                        id: c.custominview.eventIds["video:AdVideoComplete"]
                    }))
            };
            a.ae.n = function() {
                a.m.a.sxaz("startAdTracking", {
                    id: a.ae.d.startAdTracking
                });
                a.m.a.sxaz("allLocalAdsKilled", {
                    id: a.ae.d.allLocalAdsKilled
                })
            };
            a.ae.b = function(c, f) {
                if (c) {
                    for (var g in a.ae.c)
                        if (a.ae.c.hasOwnProperty(g)) {
                            var h = a.ae.f(g);
                            h && ("custom_inview_module_counter" ===
                                g ? (f.wm = 0, f.wi = 0, !a.e.c() && h.isMeasurable(c) && (f.wm = 1, h.inViewTimeReached() && (f.wi = 1))) : void 0 != h.queryStringKey && (f[h.queryStringKey] = 0, !a.e.c() && h.isMeasurable(c) && (f[h.queryStringKey] = 1, h.inViewTimeReached() && (f[h.queryStringKey] = 2))))
                        }
                    return f
                }
            };
            a.ae.o = function(c) {
                if (!c) return !1;
                c = !1;
                for (var f in a.ae.c)
                    if (a.ae.c.hasOwnProperty(f)) {
                        var g = a.ae.f(f);
                        g && "custom_inview_module_counter" === f && (c = g.reachedInViewTimeThreshold)
                    }
                return c
            };
            a.ae.d.startAdTracking = a.m.a.azsx("startAdTracking", a.ae.j);
            a.ae.d.allLocalAdsKilled =
                a.m.a.azsx("allLocalAdsKilled", a.ae.n)
        })(m);
        (function(a) {
            a.bh = {};
            a.bh.a = !1;
            a.bh.b = function(l) {
                l && l.zMoatENV && "x" === l.zMoatENV && (a.bh.a = !0)
            }
        })(m);
        (function(a) {
            function l() {
                d++;
                g = c.pageYOffset;
                e = c.pageXOffset;
                g != f && (a.bc.a.YCoord.push(g.toFixed(2)), a.bc.a.time.push(d), f = g);
                e != h && (a.bc.b.XCoord.push(e.toFixed(2)), a.bc.b.time.push(d), h = e)
            }
            var c, f, g, h, e, d = 0,
                b = !1;
            a.bc = a.bc || {};
            a.bc.c = function() {
                return function() {
                    if (!b && a.d.e) {
                        c = a.d.g;
                        b = !0;
                        f = c.pageYOffset;
                        h = c.pageXOffset;
                        a.bc.a = {
                            YCoord: [c.pageYOffset],
                            time: [0]
                        };
                        a.bc.b = {
                            XCoord: [c.pageXOffset],
                            time: [0]
                        };
                        var d = "scrollInfo#" + (new x).getTime();
                        a.o.g(l, {}, 1E3, d)
                    }
                }
            }()
        })(m);
        (function(a) {
            function l(a) {
                for (var b, c = [], e = 0; 100 >= e; e++) c.push(0 === e ? 0 : e / 100);
                try {
                    b = new IntersectionObserver(a, {
                        rootMargin: "0px",
                        threshold: c
                    })
                } catch (f) {
                    return !1
                }
                return b
            }

            function c(a) {
                return function(b, c) {
                    var e = b.length;
                    1 > e || (e = b[e - 1], a.percentVisible = e.intersectionRatio, a.visibleRect = e.intersectionRect, a.elementRect = e.boundingClientRect)
                }
            }

            function f(a) {
                var b = a && a.intersectionObserver,
                    b = b &&
                    b.observer;
                try {
                    b && (b.disconnect(), a.intersectionObserver = null)
                } catch (c) {}
            }

            function g(a) {
                a && a.intersectionObserver && (f(a), h(a))
            }

            function h(d) {
                var b, k, h;
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
                    }(d)
                };
                d.intersectionObserver = b;
                k = b.element();
                if (k && (h = l(c(b)))) {
                    b.observer = h;
                    try {
                        h.observe(k)
                    } catch (u) {
                        return !1
                    }
                } else return !1;
                b.started = !0;
                a.m.a.azsx("adKilled", a.b.cm([d], f), {
                    condition: function(a) {
                        return "object" ===
                            typeof d && "object" === typeof a && d.zr == a.zr
                    },
                    once: !0
                });
                a.m.a.azsx("adElementUpdate", a.b.cm([d], g), {
                    condition: function() {
                        return d && d.intersectionObserver && d.intersectionObserver.started
                    },
                    once: !0
                });
                e && e.startTracking(d);
                return !0
            }
            a.ai = {};
            var e = function(a) {
                function b(a, b, d, c) {
                    function e(a, c) {
                        var f = a.length;
                        1 > f || (f = a[f - 1], f = f.intersectionRatio, 0 >= f || !g || g(b, d) && c.disconnect())
                    }

                    function f() {
                        for (var a = [], b = 0; 100 >= b; b++) a.push(0 === b ? 0 : b / 100);
                        return a
                    }
                    var g = a && window && window[a];
                    return g ? function() {
                        try {
                            var a =
                                new IntersectionObserver(e, {
                                    rootMargin: "0px",
                                    threshold: f()
                                });
                            if (!c) return !1;
                            a.observe(c);
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
                    h && (h.killAllPixels(), h = null);
                    a && a.periscopeManager && (a.periscopeManager = null)
                }

                function e(b, c) {
                    if (!b || "undefined" === typeof c) return !1;
                    var f = a.b.bz(c);
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

                function f(c) {
                    if (!c) return !1;
                    var g = c.adCount,
                        k = c.name,
                        h = c.element,
                        l = c.parent,
                        m = c.top,
                        u = c.left,
                        n = c.width;
                    c = c.height;
                    var r = q.floor(1E8 * q.random());
                    return {
                        name: k,
                        id: "MoatPxIOPT" + g + "_" + r,
                        target: h,
                        container: l,
                        dimensions: {
                            width: n,
                            height: c
                        },
                        position: {
                            top: m,
                            left: u
                        },
                        onWidthCheck: a.r.l,
                        customPixel: !0,
                        customFn: b,
                        callback: e,
                        callbackName: "MoatPxIOPT" + r,
                        preserveDom: !1,
                        customPixelDiv: !0
                    }
                }

                function g(b) {
                    if (!b) return !1;
                    var c = b.zr,
                        e = b.aa,
                        k = e && e.parentNode;
                    if (!e || !k) return !1;
                    var h = b.INITIAL_WIDTH;
                    b = b.INITIAL_HEIGHT;
                    h = a.b.ci(h) ? h - .98 * h : 1;
                    b = a.b.ci(b) ?
                        b - .98 * b : 1;
                    var h = (b = {
                            width: h + 1,
                            height: b + 1
                        }, b.width),
                        l = b && b.height,
                        p = [],
                        m;
                    b = 1;
                    for (var n = [
                            ["topLeft", "0px", "0px"],
                            ["topRight", "0px", "100%"],
                            ["bottomLeft", "100%", "0px"],
                            ["bottomRight", "100%", "100%"]
                        ], r = 0, q = n.length; r < q; r++) m = n[r], p.push(f({
                        adCount: c,
                        name: m[0],
                        element: e,
                        parent: k,
                        top: m[b],
                        left: m[2],
                        width: h,
                        height: l
                    }));
                    return {
                        insertableFunc: a.d.dk,
                        pixels: p
                    }
                }
                var h;
                return {
                    startTracking: function(b) {
                        if (b && !a.d.fi && !a.ab.d(b.zr)) {
                            var e = g(b);
                            e && (b.periscopeConfig = e, a.r.z(b), h = b.periscopeManager, a.m.a.azsx("adKilled",
                                a.b.cm([b], c), {
                                    condition: function(a) {
                                        return "object" === typeof b && "object" === typeof a && b.zr == a.zr
                                    },
                                    once: !0
                                }), a.m.a.azsx("passthrough", a.b.cm([b], c), {
                                once: !0
                            }))
                        }
                    }
                }
            }(a);
            a.ai.a = function(d) {
                if (a.d.dk()) {
                    if (d.intersectionObserver && d.intersectionObserver.started) return d.intersectionObserver.percentVisible;
                    h(d) || a.d.dk(!1)
                }
            }
        })(m);
        (function(a) {
            a.af = {};
            a.af.a = function(a, c, f, g) {
                function h() {
                    d("unload", h);
                    d("beforeunload", h);
                    q = !1;
                    clearInterval(x)
                }

                function e(a, b, d) {
                    a && b && d && ("function" === typeof a.addEventListener ?
                        a.addEventListener(b, d) : "function" === typeof a.attachEvent && a.attachEvent("on" + b, d))
                }

                function d(a, b, d) {
                    a && b && d && ("function" === typeof a.removeEventListener ? a.removeEventListener(b, d) : "function" === typeof a.detachEvent && a.detachEvent("on" + b, d))
                }

                function b(a) {
                    if (a !== v) {
                        var b = [{
                            name: "fr",
                            enabled: !0,
                            inview: a
                        }];
                        r && r(b)
                    }
                    v = a
                }

                function k() {
                    try {
                        var a, d;
                        10 > g ? (a = document.elementFromPoint(0, 0), d = !!a) : d = (a = document.msElementsFromPoint(0, 0)) && 0 < a.length;
                        b(d)
                    } catch (c) {}
                    q && window.requestAnimationFrame(k)
                }

                function p() {
                    clearInterval(x);
                    x = window.setInterval(n, 100);
                    window.requestAnimationFrame(m)
                }

                function m() {
                    t ? b(!0) : t = !0;
                    p()
                }

                function n() {
                    b(!1)
                }
                var r = a && window && window.parent && window.parent[a],
                    q = "function" === typeof window.requestAnimationFrame,
                    v = !1,
                    t = !1,
                    x;
                a = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
                g = "string" === typeof g ? parseInt(g, 10) : NaN;
                (function() {
                    document.body.style.overflow = "hidden";
                    document.body.style.margin = "0px";
                    document.body.style.padding =
                        "0px";
                    document.body.style.height = "1000px";
                    var a = document.createElement("div");
                    a.style.width = "300px";
                    a.style.height = "250px";
                    document.body.appendChild(a);
                    e("unload", h);
                    e("beforeunload", h)
                })();
                a ? p() : q ? window.requestAnimationFrame(k) : x = window.setInterval(k, 100)
            }
        })(m);
        (function(a) {
            function l() {
                a.d.ch(!1)
            }

            function c(b, d) {
                return function(c) {
                    var e, f;
                    if (d.dfp) a: {
                        if (c && d && "message" === c.type && c.source == d.win && c.data && 0 == c.data.indexOf("amp-")) try {
                            if (f = JSON.parse(c.data.substring(4)), f.sentinel == d.sentinel &&
                                "intersection" == f.type) {
                                e = f.changes;
                                break a
                            }
                        } catch (g) {}
                        e = !1
                    }
                    else e = c;
                    if (c = e) e = c.length, 1 > e || (d.context && d.context.hidden ? c = 0 : (c = c[e - 1], e = c.rootBounds, e = {
                        left: 0,
                        right: e.width,
                        top: 0,
                        bottom: e.height
                    }, e = a.y.q(d.element(), c.boundingClientRect, e), c = e.calcVisiblePercv(), (f = "sframe" === a.aa.a(d.zr)) && a.m.a.zaxs("rectsAvailable", b.zr, e.elementRect, e.visibleRect)), d.percentVisible = c)
                }
            }

            function f(b, d) {
                b.amp = {
                    dfp: d.isDfp,
                    win: d.win,
                    sentinel: d.sentinel,
                    started: !1,
                    unlisten: null,
                    eventHandler: null,
                    percentVisible: null,
                    context: a.d.ev(),
                    element: function(a) {
                        return function() {
                            return a && a.aa
                        }
                    }(b),
                    zr: b.zr
                };
                return b.amp
            }

            function g(a, d) {
                if (!d || !d.context || !d.context.observeIntersection) return l(), !1;
                d.eventHandler = c(a, d);
                d.unlisten = d.context.observeIntersection(d.eventHandler);
                d.unlisten || (d.unlisten = function() {
                    d.unlisten = function() {}
                });
                d.started = !0
            }

            function h(b, d) {
                if (a.d.ex()) {
                    var e = "amp-message-" + d.sentinel;
                    d.messageId = e;
                    d.eventHandler = c(b, d);
                    t.dcsx.ynds(window, "message", e, "ampMessageFn" + e);
                    t.swde.azsx(e, d.eventHandler);
                    return d.started = !0
                }
                l();
                return !1
            }

            function e(b, c) {
                if (!b || !b.aa) return l(), !1;
                var e = f(b, c);
                c.isDfp ? h(b, e) : g(b, e);
                e.started && a.m.a.azsx("adKilled", d, {
                    condition: function(a) {
                        return b.zr == a.zr
                    },
                    once: !0
                })
            }

            function d(b) {
                var d = b && b.amp;
                if (!d) return !1;
                try {
                    d.dfp ? (t.dcsx.engn(window, "message", d.messageId), a.m.a.sxaz(d.messsageId, d.eventHandler)) : d.unlisten && "function" == typeof d.unlisten && d.unlisten()
                } catch (c) {
                    l()
                }
                b.amp = null
            }
            a.ak = {};
            a.ak.a = function(b) {
                b.amp && b.amp.started || e(b, a.d.ew());
                return b.amp.percentVisible
            }
        })(m);
        (function(a) {
            a.al = {};
            a.al.b = null;
            a.al.c = !1;
            a.al.d = !1;
            a.al.e = function(l) {
                l = l || a.d.bm();
                if (!l) return !1;
                var c;
                c = l.getCurrentPosition();
                l = l.getScreenSize();
                c.top = c.y;
                c.bottom = c.y + c.height;
                c.left = c.x;
                c.right = c.x + c.width;
                l.top = 0;
                l.bottom = l.height;
                l.left = 0;
                l.right = l.width;
                return {
                    geom: c,
                    screen: l
                }
            };
            a.al.f = function(l) {
                var c = a.al.e();
                if (!c) return !1;
                var f = c.screen,
                    c = c.geom;
                return f && c ? (l = a.y.q(l, c, f)) ? l : !1 : !1
            };
            a.al.g = function(l, c, f) {
                if (c.api && "function" === typeof c.api.getVendor) {
                    var g = c.api.getVendor(),
                        h;
                    "AdColony" ===
                    g ? h = "exposureChange" : "AdMarvel" === g && (h = "viewablePercentageChange");
                    if (h) {
                        var e = function(a) {
                            return function(b) {
                                a.percv = b
                            }
                        }(c);
                        c.api.addEventListener(h, e)
                    }
                    f || a.m.a.azsx("adKilled", function() {
                        l.mraid.api.removeEventListener("viewablePercentageChange", e);
                        l.mraid = null
                    }, {
                        condition: function(a) {
                            return l.zr == a.zr
                        },
                        once: !0
                    })
                }
            };
            a.al.h = function() {
                var l = {},
                    c = a.d.bm();
                l.api = c;
                l.percv = -1;
                return l
            };
            a.al.a = function(l) {
                var c, f, g, h, e = !1;
                h = a.d.br();
                if (!l.mraid) {
                    l.mraid = a.al.h();
                    if (!l.mraid.api) return !1;
                    h && a.al.g(l,
                        l.mraid)
                }
                if (!l.mraid.api) return !1;
                g = a.al.f(l.aa);
                if (!g) return !1;
                c = q.floor(100 * g.calcVisiblePercv()) / 100;
                h && (f = q.floor(l.mraid.percv) / 100);
                h ? a.b.cx(f, c, .01) && (e = !0) : e = !0;
                e && "sframe" === a.aa.a(l.zr) && a.m.a.zaxs("rectsAvailable", l.zr, g.elementRect, g.visibleRect);
                return h && 0 <= f ? q.min(c, f) : c
            };
            a.al.i = function() {
                var l = a.d.an().isInApp,
                    c = window === window.top,
                    f = a.b.cr("_#OMF"),
                    g = !a.d.bn(),
                    h = !a.al.c;
                return l && c && f && g && h
            };
            (function() {
                if (a.al.i())
                    for (var l = a.v.j(), c, f = 0, g = l.length; f < g; f++)(c = l[f]) && c.swde && c.swde.zaxs &&
                        c.swde.zaxs("mraid")
            })();
            a.m.a.azsx("startAdTracking", a.d.bv)
        })(m);
        (function(a) {
            a.am = {};
            a.am.a = function(l) {
                l.amazon && l.amazon.started || a.am.b(l);
                return l.amazon.percentVisible
            };
            a.am.b = function(l) {
                var c = a.d.cm(),
                    f = a.d.cj(),
                    g = f && f.mraid,
                    h = f && f.Event && f.Event.Viewability,
                    e = g && "function" === typeof g.getScreenSize && g.getScreenSize,
                    d;
                l.amazon = {
                    api: c,
                    element: l.aa,
                    event: null,
                    eventListener: null,
                    getScreenSize: e,
                    mraid: g,
                    percentVisible: null,
                    started: !1,
                    win: f
                };
                if (!c || !h || !e) return !1;
                d = l.amazon;
                d.event = h;
                try {
                    return d.eventListener =
                        function(b) {
                            var c = d.getScreenSize(),
                                e, f;
                            if ("viewable" in b) f = "viewable";
                            else if ("viewablePercentage" in b) f = "viewablePercentage";
                            else return !1;
                            0 === b[f] ? d.percentVisible = 0 : d.element && c ? (e = (c = a.y.q(d.element, {
                                    left: b.x,
                                    right: b.x + b.width,
                                    top: b.y,
                                    bottom: b.y + b.height
                                }, {
                                    left: 0,
                                    right: c.width,
                                    top: 0,
                                    bottom: c.height
                                })) && c.calcVisiblePercv() || !1, b = b[f], b /= 100, f = a.b.ci(e) ? q.min(e, b) : b, d.percentVisible = f, (e = a.b.cx(e, b, .01) && "sframe" === a.aa.a(l.zr)) && a.m.a.zaxs("rectsAvailable", l.zr, c.elementRect, c.visibleRect)) :
                                d.percentVisible = null
                        }, d.api.addEventListener(h, d.eventListener), l.amazon.started = !0, a.m.a.azsx("adKilled", a.am.c, {
                            condition: function(a) {
                                return l.zr == a.zr
                            },
                            once: !0
                        }), !0
                } catch (b) {
                    return !1
                }
            };
            a.am.c = function(a) {
                if ((a = a.amazon) && a.eventListener && "function" == typeof a.eventListener && a.event) {
                    try {
                        a.api.removeEventListener(a.event, a.eventListener)
                    } catch (c) {}
                    a.started = !1
                }
            }
        })(m);
        (function(a) {
            a.ar = {};
            a.ar.c = q.floor(1E8 * q.random());
            a.ar.a = function(l, c, f, g) {
                if (t)
                    if (a.d.c() && a.d.d()) t.jsonp || (t.jsonp = {}), t.jsonp[l] ||
                        (t.jsonp[l] = {
                            cachedResponse: !1
                        }), a.p.p(l, f);
                    else if (c && a.b.dc() && (c += "_beta"), !t.jsonp || !t.jsonp[l]) {
                    t.jsonp = t.jsonp || {};
                    t.jsonp[l] = t.jsonp[l] || {
                        cachedResponse: !1
                    };
                    var h = t.xb || window,
                        e = h.document;
                    h[c] = function(a) {
                        t.jsonp[l].cachedResponse = a;
                        t.swde.zaxs(l + "JsonpReady", a);
                        h[c] = null
                    };
                    var d = e.createElement("script"),
                        e = e.body || e.getElementsByTagName("head")[0] || e.getElementsByTagName("script")[0];
                    "undefined" === typeof g && (g = "callback");
                    f = [f, "&", g, "=", c].join("");
                    a.b.bx(f, e, d)
                }
            };
            a.ar.b = function(l, c) {
                t.jsonp &&
                    t.jsonp[l] && t.jsonp[l].cachedResponse ? a.b.cm([t.jsonp[l].cachedResponse], c)() : t.swde.azsx(l + "JsonpReady", c, {
                        once: !0
                    })
            }
        })(m);
        (function(a) {
            function l(c, d, b) {
                var f = a.ab.h[c].stateMask;
                if (d = h[d] * (b ? 16 : 1)) a.ab.h[c].stateMask = f | d << 0
            }

            function c(c, d, b, f) {
                b = a.b.cx(c.x, d.x, b);
                c = a.b.cx(c.y, d.y, f);
                return b && c
            }

            function f(c, d) {
                a.ab && a.ab.h[c] && (a.ab.h[c].allEdgesSeen = !0, a.b.forEach(a.ab.h[c].mediatorIds, function(b, d) {
                    a.m.a.sxaz(d, {
                        id: b
                    })
                }), d && (a.ab.h[c].failsafe = !0), a.m.a.zaxs("passthrough"))
            }
            var g = {};
            a.ab = {};
            a.ab.i = 242500;
            a.ab.j = 1;
            a.ab.h = {};
            var h = {
                topLeft: 8,
                topRight: 4,
                bottomLeft: 2,
                bottomRight: 1
            };
            a.ab.k = function(c) {
                if (!c || c && c.isMeasurabilityDisabled() || a.e.c()) return !1;
                var d, b;
                a.d["do"]() && (d = !0);
                a.r && a.r.a && c.periscopeManager && c.periscopeManager.fullyMeasurable && (b = !0);
                return a.d.dj() || a.d.ds() || d || b
            };
            a.ab.a = function(c) {
                return "number" !== typeof c || a.b.j() ? !1 : 236425 <= c
            };
            a.ab.l = function(a) {
                return a && a.ao ? "slave" == a.ao.moatClientAT ? !0 : !1 : !1
            };
            a.ab.m = function(a) {
                return a && a.ao ? "cpc" == a.ao.moatClientBT ? !0 :
                    !1 : !1
            };
            a.ab.n = function(a) {
                return a && a.ao ? "cpcv" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ab.o = function(a) {
                return a && a.ao ? "flatrate" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ab.p = function(a) {
                return a && a.ao ? "skin" == a.ao.moatClientAT || "hpto" == a.ao.moatClientAT || 1 == a.ao.skin ? !0 : !1 : !1
            };
            a.ab.g = function(c) {
                if (!c || !c.aa) return !1;
                if ("undefined" != typeof c.er) return c.er;
                c.video ? !a.ab.k(c) || a.ab.n(c) && !c.video.reachedComplete || (c.er = !0) : a.ab.l(c) || a.ab.m(c) || a.ab.o(c) ? c.er = !1 : a.ab.p(c) || c.isCompositeAd || a.ab.a(a.b.cc(c)) ? c.er = !0 : a.ab.k(c) && a.aa.w(c, a.ab.j, !0) && (c.er = !0);
                return c.er || !1
            };
            a.ab.b = function(c) {
                if (!c || c.SENT_FIT && c.et || !a.ab.k(c)) return !1;
                var d, b, f = a.aa.a(c.zr);
                c.SENT_FIT || (d = a.aa.l(c, f, "hadFIT"));
                c.et || (b = a.aa.l(c, f, "hadFullOTS"));
                if (d || b) a.t.d(c), c.SENT_FIT = c.SENT_FIT || !!d, c.et = c.et || !!b;
                return d || b
            };
            a.ab.q = function(e, d, b) {
                var f;
                a.b.forEach([null, void 0, !1], function(a) {
                    if (f = d === a || b === a) return !1
                });
                if (!0 === f || !0 !== (a.b.ci(d.top) && a.b.ci(d.bottom) && a.b.ci(b.bottom) && a.b.ci(b.top)) || d.top === d.bottom || d.left ===
                    d.right || b.top === b.bottom || b.left === b.right) return !1;
                var g = d.right - d.left,
                    h = d.bottom - d.top,
                    l = g * (1 - .98),
                    m = h * (1 - .98),
                    t = {
                        x: d.left,
                        y: d.top
                    },
                    v = {
                        x: d.right,
                        y: d.top
                    },
                    B = {
                        x: d.left,
                        y: d.bottom
                    },
                    x = {
                        x: d.right,
                        y: d.bottom
                    },
                    A = d.left + l,
                    w = d.top + m,
                    C = d.right - l,
                    E = d.top + m,
                    F = d.left + l,
                    G = d.bottom - m,
                    l = d.right - l,
                    m = d.bottom - m,
                    H = {
                        x: b.left,
                        y: b.top
                    },
                    I = {
                        x: b.right,
                        y: b.top
                    },
                    J = {
                        x: b.left,
                        y: b.bottom
                    },
                    K = {
                        x: b.right,
                        y: b.bottom
                    },
                    g = q.ceil(.01 * g),
                    h = q.ceil(.01 * h),
                    t = c(t, H, g, h),
                    v = c(v, I, g, h),
                    B = c(B, J, g, h),
                    x = c(x, K, g, h);
                a.ab.r(e, {
                    topLeft: t,
                    topRight: v,
                    bottomLeft: B,
                    bottomRight: x
                }, {
                    topLeft: A >= b.left && w >= b.top,
                    topRight: C <= b.right && E >= b.top,
                    bottomLeft: F >= b.left && G <= b.bottom,
                    bottomRight: l <= b.right && m <= b.bottom
                })
            };
            a.ab.s = function(c) {
                if ("undefined" !== typeof c && 0 <= c && !a.ab.h[c]) {
                    a.ab.h[c] = {};
                    a.ab.h[c].allEdgesSeen = !1;
                    a.ab.h[c].mediatorIds = {};
                    a.ab.h[c].outer = {
                        topLeft: !1,
                        topRight: !1,
                        bottomLeft: !1,
                        bottomRight: !1
                    };
                    a.ab.h[c].inner = {
                        topLeft: !1,
                        topRight: !1,
                        bottomLeft: !1,
                        bottomRight: !1
                    };
                    a.ab.h[c].stateMask = 0;
                    var d = "rectsAvailable",
                        b = a.m.a.azsx(d, a.ab.q);
                    a.ab.h[c].mediatorIds[d] =
                        b;
                    d = "adEdgesViewStatus";
                    b = a.m.a.azsx(d, a.ab.r);
                    a.ab.h[c].mediatorIds[d] = b;
                    d = "adFullyVisible";
                    b = a.m.a.azsx(d, f, {
                        condition: function(b, d) {
                            return b && d && !a.ab.d(b.zr) && a.aa && a.aa.a && d === a.aa.a(b.zr)
                        },
                        once: !0
                    });
                    a.ab.h[c].mediatorIds[d] = b
                }
            };
            a.ab.t = function(c) {
                return a.ab.h[c].failsafe
            };
            a.ab.r = function(c, d, b) {
                function g(k, r, q) {
                    q && (a.b.forEach(["topLeft", "topRight", "bottomLeft", "bottomRight"], function(a) {
                        !h[a] && d[a] && (h[a] = !0, l(c, a, !0));
                        !m[a] && b[a] && (m[a] = !0, l(c, a, !1))
                    }), (h.topLeft && h.topRight && m.bottomLeft &&
                        m.bottomRight || m.topLeft && m.topRight && h.bottomLeft && h.bottomRight || h.topLeft && h.bottomLeft && m.topRight && m.bottomRight || m.topLeft && m.bottomLeft && h.topRight && h.bottomRight) && f(c))
                }
                if (!0 !== a.ab.h[c].allEdgesSeen) {
                    b && "object" === typeof b || (b = d);
                    var h = a.ab.h[c].outer,
                        m = a.ab.h[c].inner;
                    a.m.a.azsx("adCheckingState", g, {
                        once: !0,
                        condition: function(b, d) {
                            return a.aa.a(b.zr) === d
                        }
                    })
                }
            };
            a.ab.d = function(c) {
                return "undefined" !== typeof c && c in a.ab.h ? a.ab.h[c].allEdgesSeen : !1
            };
            (function(a) {
                function d(a, b) {
                    return function(d) {
                        var c =
                            a.maxContinuouslyInViewTime,
                            e = b.get("currentContinuouslyInViewTime");
                        e > c && (a.maxContinuouslyInViewTime = e, a.checkMilestoneReached());
                        d || b.set("currentContinuouslyInViewTime", 0)
                    }
                }

                function b() {
                    return !1
                }

                function c(b) {
                    var d = b.fixedInViewTimeRequirement;
                    this.percvRequired = b.percvRequired;
                    this.shouldConsiderLargeAds = a.b.ci(b.largeAdSize);
                    this.largeAdSize = b.largeAdSize;
                    this.largePercvRequired = b.largePercvRequired;
                    this.requiresPassthrough = b.requiresPassthrough;
                    this.qsKey = b.qsKey;
                    b.percvRequiredPassthrough &&
                        (this.percvRequiredPassthrough = b.percvRequiredPassthrough);
                    this.getInViewTimeRequirement = function(a) {
                        return d
                    }
                }

                function f(b, d) {
                    return a.b.j() ? d === a.ab.e.n ? a.ab.e.n.b : a.ab.f.m.b : d === a.ab.e.n ? a.ab.e.n.a : a.ab.f.m.a
                }

                function h(b, c, f) {
                    this.label = f;
                    this.config = c;
                    this.groupmMilestoneReached = !1;
                    this.maxContinuouslyInViewTime = 0;
                    this.ad = b;
                    this.fullViewEventPixelFired = !1;
                    var k = this;
                    f = a.ba.d(b, a.ab.u, "groupm_counter_" + b.yg + q.random());
                    var l = d(k, f);
                    if (c === a.ab.f.m.a || c === a.ab.f.m.b) c = a.m.a.azsx("fullOtsReached",
                        function() {
                            k.groupmMilestoneReached = !0;
                            k.milestoneFailsafeTriggered = !0
                        }, {
                            once: !0,
                            condition: function(d, c) {
                                var f = a.aa.a(b.zr);
                                return d.zr === b.zr && c === f
                            }
                        }), g[b.zr] = c;
                    this.checkMilestoneReached = function() {
                        var b;
                        b = k.maxContinuouslyInViewTime;
                        var d;
                        if (!0 === k.groupmMilestoneReached) return !0;
                        d = k.config.getInViewTimeRequirement();
                        b = k.config.requiresPassthrough(k.ad) ? a.ab.d(k.ad.zr) && b >= d : b >= d;
                        k.groupmMilestoneReached = b;
                        !k.fullViewEventPixelFired && b && (k.fullViewEventPixelFired = !0, k.ad.fireFullViewEvent = !0);
                        return k.groupmMilestoneReached
                    };
                    f.set("currentContinuouslyInViewTime", 0, {
                        useDeltaCompensation: !0,
                        shouldIncrementFn: function(b, d) {
                            var c, f;
                            c = d.getLastInviewPercent();
                            var g = k.config.percvRequired,
                                h = k.config.largePercvRequired;
                            f = a.b.cc(b);
                            c = k.config.requiresPassthrough(k.ad) ? c >= k.config.percvRequiredPassthrough : (f = k.config.shouldConsiderLargeAds && f >= k.config.largeAdSize) ? c >= h : c >= g;
                            return c
                        },
                        postIncrementationFn: l
                    })
                }
                a.ab.u = {};
                a.ab.e = {};
                a.ab.e.b = .98;
                a.ab.e.c = 237650;
                a.ab.e.d = .5;
                a.ab.e.e = a.ab.e.b;
                a.ab.e.f =
                    1E3;
                a.ab.e.g = a.ab.e.f;
                a.ab.e.h = .98;
                a.ab.e.i = 294E3;
                a.ab.e.j = .8;
                a.ab.e.k = 15E3;
                a.ab.e.l = "im";
                a.ab.e.m = "hj";
                a.ab.e.n = {};
                a.ab.e.n.a = {};
                a.ab.e.n.b = {};
                var l = {
                    percvRequired: a.ab.e.b,
                    largeAdSize: a.ab.e.c,
                    largePercvRequired: a.ab.e.d,
                    requiresPassthrough: b,
                    fixedInViewTimeRequirement: a.ab.e.f,
                    viewTimeCap: !1,
                    qsKey: a.ab.e.l
                };
                a.ab.e.n.a = new c(l);
                a.ab.e.n.b = a.ab.e.n.a;
                a.ab.f = {};
                a.ab.f.b = .98;
                a.ab.f.c = 237650;
                a.ab.f.d = .5;
                a.ab.f.e = .98;
                a.ab.f.f = 1E-4;
                a.ab.f.g = 1E3;
                a.ab.f.h = 1E3;
                a.ab.f.i = .98;
                a.ab.f.j = 294E3;
                a.ab.f.k = .8;
                a.ab.f.l =
                    15E3;
                a.ab.f.m = {};
                a.ab.f.m.a = {};
                a.ab.f.m.b = {};
                a.ab.f.n = "in";
                a.ab.f.o = "hj";
                l = {
                    percvRequired: a.ab.f.b,
                    largeAdSize: a.ab.f.c,
                    largePercvRequired: a.ab.f.d,
                    requiresPassthrough: b,
                    fixedInViewTimeRequirement: a.ab.f.g,
                    viewTimeCap: !1,
                    qsKey: a.ab.f.n
                };
                a.ab.f.m.a = new c(l);
                l = {
                    percvRequired: a.ab.f.e,
                    percvRequiredPassthrough: a.ab.f.f,
                    largeAdSize: !1,
                    largePercvRequired: !1,
                    requiresPassthrough: function(b) {
                        var d;
                        d = a.d.s(a.d.g);
                        var c = b.currentWidth || 0,
                            f = b.currentHeight || 0;
                        a.d.bl ? (b = a.d.x, d = a.d.y) : (b = d.width || 0, d = d.height ||
                            0);
                        return b && d ? f > d || c > b : !1
                    },
                    fixedInViewTimeRequirement: a.ab.f.h,
                    viewTimeCap: !1,
                    qsKey: a.ab.f.n
                };
                a.ab.f.m.b = new c(l);
                a.ab.e.a = function(b) {
                    var d = f(b, a.ab.e.n);
                    if (!1 !== d) return a.ab.s(b.zr), b.groupmV2 = b.groupmV2 || new h(b, d, "GroupM V2"), b.groupmV2
                };
                a.ab.f.a = function(b) {
                    var d = f(b, a.ab.f.m);
                    if (!1 !== d) return a.ab.s(b.zr), b.groupmV3 = b.groupmV3 || new h(b, d, "GroupM V3"), b.groupmV3
                };
                a.ab.c = function(a, b) {
                    b = b || {};
                    var d = A[a];
                    if ("object" !== typeof d) return b;
                    if ("object" === typeof d.groupmV2) {
                        var c = d.groupmV2.config.qsKey;
                        b[c] = d.groupmV2.checkMilestoneReached() ? 1 : 0
                    }
                    "object" === typeof d.groupmV3 && (c = d.groupmV3.config.qsKey, b[c] = d.groupmV3.checkMilestoneReached() ? 1 : 0);
                    return b
                }
            })(a);
            a.m.a.azsx("adKilled", function(c) {
                if (c && !c.ep && (g.hasOwnProperty(c.zr) && a.m.a.sxaz("fullOtsReached", {
                        id: g[c.zr]
                    }), a.ab && a.ab.u && "object" === typeof a.ab.u))
                    for (var d in a.ab.u) a.ab.u.hasOwnProperty(d) && -1 < a.b.indexOf(d, "groupm_counter_" + c.yg) && delete a.ab.u[d]
            })
        })(m);
        (function(a) {
            function l(c, e) {
                return function(d, b) {
                    var e, f;
                    e = {
                        large: c.config.LARGE_SIZE_REQ,
                        normal: c.config.NORMAL_SIZE_REQ
                    };
                    var g = b.getLastInviewPercent();
                    f = a.b.cc(d);
                    e = (f = a.b.j() ? !1 : f >= c.config.LARGE_AD_THRESHOLD) && g >= e.large || !f && g >= e.normal;
                    return c.fullyVisOnLastCheck = e
                }
            }

            function c(c, e) {
                return function(d) {
                    var b = c.maxContinuouslyInViewTime,
                        f = e.get("currentContinuouslyInViewTime");
                    f > b && (c.maxContinuouslyInViewTime = f, b = f >= c.config.TIME_THRESHOLD, a.d.dr(c.ad) && !c.fullViewEventPixelFired && b && (c.fullViewEventPixelFired = !0, e.set("currentContinuouslyInViewTime", 0, {}), c.ad.fireFullViewEvent = !0));
                    d || e.set("currentContinuouslyInViewTime", 0)
                }
            }

            function f(f, e) {
                this.ad = f;
                this.label = e;
                this.counters = {};
                this.config = g.config;
                this.fullViewEventPixelFired = !1;
                this.maxContinuouslyInViewTime = 0;
                this.fullyVisOnLastCheck = !1;
                var d = a.ba.d(this.ad, this.counters, "publicis_counter_" + f.yg + q.random()),
                    b = l(this, d),
                    k = c(this, d);
                d.set("currentContinuouslyInViewTime", 0, {
                    useDeltaCompensation: !0,
                    shouldIncrementFn: b,
                    postIncrementationFn: k
                })
            }
            a.an = {};
            var g = {
                v1: {},
                config: {}
            };
            g.v1.display = {};
            g.v1.display.LARGE_AD_THRESHOLD =
                237650;
            g.v1.display.NORMAL_SIZE_REQ = .98;
            g.v1.display.LARGE_SIZE_REQ = .3;
            g.v1.display.TIME_THRESHOLD = 1E3;
            g.v1.video = {};
            g.v1.video.LARGE_AD_THRESHOLD = 237650;
            g.v1.video.NORMAL_SIZE_REQ = .98;
            g.v1.video.LARGE_SIZE_REQ = .5;
            g.v1.video.TIME_THRESHOLD = 2E3;
            g.v1.display.VIEWABLE_KEY = "pd";
            g.v1.video.VIEWABLE_KEY = "pv";
            g.config = g.v1.display;
            a.an.b = function(a) {
                a.publicis = a.publicis || new f(a, "Publicis V1");
                return a.publicis
            };
            a.an.a = function(a, c) {
                c = c || {};
                var d = A[a];
                if ("object" !== typeof d) return c;
                d = d.publicis;
                "object" ===
                typeof d && (c[d.config.VIEWABLE_KEY] = d.fullViewEventPixelFired ? 1 : 0);
                return c
            };
            a.m.a.azsx("adKilled", function(c) {
                if (c && !c.ep && c.publicis && c.publicis.counters && "object" === typeof c.publicis.counters)
                    for (var e in c.publicis.counters) c.publicis.counters.hasOwnProperty(e) && -1 < a.b.indexOf(e, "publicis_counter_" + c.yg) && delete c.publicis.counters[e]
            })
        })(m);
        (function(a) {
            function l(a) {
                return {
                    adProtocol: a.zURL,
                    mainNetworkId: a.moatClientLevel1,
                    subNetworkId: a.zMoatSubNetID,
                    placementId: a.zMoatPlacementId,
                    placementAlias: a.zMoatAlias,
                    pageId: a.moatClientLevel3,
                    sizeId: a.zMoatSize,
                    adId: a.zMoatAdId,
                    creativeId: a.zMoatCreative,
                    bannerId: a.zMoatBannerID,
                    bannerUid: a.zMoatBanner,
                    isAdvisGoal: a.zMoatIsAdvisGoal,
                    viewEventURL: a.zMoatEventUrl,
                    isSelectedBySampling: a.zMoatisSelected,
                    adServer: a.zMoatadServer,
                    adVisServer: a.zMoatadVisServer,
                    refseqid2: a.zMoatRefSeqId,
                    imprefts: a.zMoatImpRefTs,
                    liveTestCookie: a.zMoatliveTestCookie
                }
            }

            function c(a) {
                a = {
                    customVisibleRatio: Number(a.zMoatCustomVisp),
                    customVisibleTimeMsec: Number(a.zMoatCustomVist)
                };
                0 == a.customVisibleRatio &&
                    0 == a.customVisibleTimeMsec && (a.customVisibleRatio = 50, a.customVisibleTimeMsec = 1E3);
                return a
            }
            var f = window.ADTECH;
            a.bb = {};
            var g = a.az.v;
            a.bb.b = function(b, p) {
                if (!a.aa.h) return !1;
                var m = A[b];
                if (m) {
                    m.adtechoverride = {};
                    m.adtechoverride.eventIds = {};
                    m.adtechoverride.counters = {};
                    var n = a.ba.a(m.adtechoverride.counters, "adtechOverrideCounter");
                    n.set("adInviewRefreshTime", !1);
                    c(p);
                    var r = l(p);
                    a.az.ab = e(r);
                    a.az.ac = d(r);
                    var q = r.placementId,
                        r = r.placementAlias;
                    (q || r) && f && f.getFinalConfigProperty && f.visibilityCallback &&
                        (q = q && r ? {
                            placement: parseInt(q, 10),
                            alias: r
                        } : q ? parseInt(q, 10) : r, q = parseFloat(f.getFinalConfigProperty(q, "gtsTime"), 10), !isNaN(q) && isFinite(q) && 0 < q && (m.preventTryFindingAdAgain = !0, n.set("adInviewRefreshTime", q)));
                    n = {};
                    a.az.ad = void 0;
                    for (q = 0; 90 >= q; q += 10) n[q] = a.aa.h(b, q / 100, a.t.c);
                    a.aa.aa = n;
                    h();
                    a.d.fd() || (a.az.z(b, "adTechNonMeasurable", a.bb.c), a.az.z(b, "measurable", a.bb.d));
                    a.bb.e(m);
                    a.bb.f(m);
                    g(b, p);
                    return !0
                }
            };
            a.bb.e = function(b) {
                b && (b.adtechoverride.eventIds.adtechCounterUpdate && a.m.a.swaq("adtechCounterUpdate", {
                    id: b.adtechoverride.eventIds.adtechCounterUpdate
                }), b.adtechoverride.eventIds.adtechCounterUpdate = a.m.a.azsx("adtechCounterUpdate", a.bb.g))
            };
            a.bb.g = function(b) {
                var d = a.ba.a(b.adtechoverride.counters, "adtechOverrideCounter").get("adInviewRefreshTime");
                d && (50 != a.az.ad || 1E3 != a.az.a ? a.aa.z && a.aa.z.getInViewTime() || 0 : a.aa.p(b)) >= d && a.bb.h(b)
            };
            a.bb.h = function(b) {
                var d = l(b.ao),
                    c = d.placementId,
                    d = d.placementAlias;
                a.t.a(b);
                b = {
                    eventType: "GUARANTEED_VIEW_TIME_REACHED"
                };
                c && (b.placement = parseInt(c, 10));
                d && (b.alias =
                    d);
                f.visibilityCallback(b)
            };
            a.bb.i = function(b) {
                a.az.y(b, "strictOts");
                a.az.y(b, "adTechNonMeasurable");
                a.az.y(b, "customVisible");
                a.az.y(b, "adTechUnload");
                a.az.y(b, "measurable");
                for (var d in a.aa.aa) a.aa.aa.hasOwnProperty(d) && (a.aa.aa[d] = void 0);
                a.aa.z = void 0;
                (b = A[b]) && b.adtechoverride && b.adtechoverride.eventIds && b.adtechoverride.eventIds.adtechCounterUpdate && a.m.a.swaq("adtechCounterUpdate", {
                    id: b.adtechoverride.eventIds.adtechCounterUpdate
                })
            };
            var h = function() {
                a.bb.j = function() {
                    a.az.ab("997", "1");
                    a.az.ac("standard")
                };
                a.bb.k = function() {
                    a.az.ab("995", "1");
                    a.az.ac("custom")
                };
                a.bb.f = function(b) {
                    b && b.ao && void 0 !== b.ao.zMoatUnloadTimeout && (b = parseInt(b.ao.zMoatUnloadTimeout, 10), isNaN(b) || a.o.f(function() {
                        t.swde.zaxs("unload-" + a.d.ay.a)
                    }, b))
                };
                a.bb.a = function(b) {
                    for (var d = 90; 0 <= d; d -= 10);
                    if (!a.d.e) return !0;
                    var d = [999, 998, 0],
                        c = a.aa.k(b, "strict") && a.aa.k(b, "strict").getInViewTime() || a.aa.k(b, "pscope") && a.aa.k(b, "pscope").getInViewTime() || 0,
                        e = b.counters.strictDwell.tCur,
                        f = a.aa.z && a.aa.z.getInViewTime() || 0,
                        g = function(b) {
                            for (var d =
                                    90; 0 <= d; d -= 10)
                                if (a.aa.aa[d].getInViewTime() > b) return d / 10 + 1;
                            return 0
                        };
                    d[2] = 949 + g(1E3);
                    c = [(c / 1E3).toFixed(0), (e / 1E3).toFixed(0), "1"];
                    a.aa.z && (c = c.concat([(f / 1E3).toFixed(0), 1]), d = d.concat([994, 929 + g(a.az.a)]));
                    a.az.ab(d.join(","), c.join(","));
                    a.bb.i(b.zr)
                };
                a.bb.d = function(b) {
                    a.az.y(e, "adTechNonMeasurable");
                    a.az.ab("992", "1");
                    var d = c(b.ao);
                    l(b.ao);
                    var e = b.zr;
                    d.customVisibleRatio && d.customVisibleTimeMsec && (a.az.ad = d.customVisibleRatio, a.az.a = d.customVisibleTimeMsec, 50 != a.az.ad || 1E3 != a.az.a) && (customVisCounter =
                        a.aa.h(e, a.az.ad / 100, a.t.c), a.az.z(e, "customVisible", a.bb.k), a.aa.z = customVisCounter);
                    a.az.z(e, "strictOts", a.bb.j);
                    a.az.z(e, "adTechUnload", a.bb.a)
                };
                a.bb.c = function(b) {
                    a.az.ab("979", "1");
                    unLoadFired = !0;
                    a.bb.i(b.zr)
                }
            };
            a.az.v = function(b, d) {
                a.o.k(function() {
                    return a.bb.b(b, d)
                }, 10, 10)
            };
            a.bb.l = function(a, b, d) {
                var c = d.imprefts;
                return d.adProtocol + "://" + a + "/" + b + "/" + d.mainNetworkId + "." + d.subNetworkId + "/" + d.placementId + "/" + d.pageId + "/" + d.sizeId + "/AdId=" + d.adId + ";CreativeId=" + d.creativeId + ";BnId=" + d.bannerId +
                    ";refseqid2=" + d.refseqid2 + (void 0 === c ? "" : ";imprefts=" + c) + ";BnNum=" + d.bannerUid + ";"
            };
            var e = function(d) {
                    return b(d) ? function() {} : function(b, c) {
                        "1" == d.isSelectedBySampling && "" !== d.adServer && (url = a.bb.l(d.adServer, "custrmevent/3.0", d) + "EventIds=" + b + ";EventVals=" + c, (new Image(1, 1)).src = url);
                        "" !== d.adVisServer && (url = a.bb.l(d.adVisServer, "advis/3", d) + "EventIds=" + b + ";EventVals=" + c + ";CampaignNetworkId=" + d.mainNetworkId + ";CampaignSubNetworkId=" + d.subNetworkId + ";AssetId=" + d.bannerUid, (new Image(1, 1)).src = url)
                    }
                },
                d = function(a) {
                    return b(a) ? function() {} : function(b) {
                        "standard" == b && 1 == a.isAdvisGoal && ((new Image(1, 1)).src = a.viewEventURL);
                        "custom" == b && 2 == a.isAdvisGoal && ((new Image(1, 1)).src = a.viewEventURL)
                    }
                },
                b = function(a) {
                    var b = 0 == a.placementId;
                    return result = void 0 != a.liveTestCookie && "" != a.liveTestCookie && "undefined" != a.liveTestCookie && "null" != a.liveTestCookie || b
                }
        })(m);
        (function(a) {
            function l(c) {
                if (c.version == a.bi.a) return !0;
                var f = a.bi.a + "-beta" === c.version,
                    e = a.bi.a === c.version + "-beta";
                if ("moatframe" === c.type &&
                    (f || e)) return !0
            }
            a.bi = {};
            a.bi.a = "1.2";
            a.b.dc() && (a.bi.a += "-beta");
            a.bi.prefix = "MSFAPI";
            a.bi.b = {};
            a.bi.c = {};
            var c = a.d.ay.a,
                f = a.d.ba;
            a.bi.d = /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i;
            a.bi.e = /@([a-z0-9]+)@@(.*)/i;
            a.bi.f = function(f) {
                if (f) {
                    var h = a.bi.g(f);
                    h.listening || (t.dcsx.ynds(f, "message", "message-" + c, "ME-" + c), h.listening = !0);
                    var e = t.swde.azsx("message-" + c, a.bi.h);
                    a.m.a.azsx("allLocalAdsKilled", function() {
                        t.swde.sxaz("message-" + c, {
                            id: e
                        });
                        a.bi.i(f)
                    }, {
                        once: !0
                    })
                }
            };
            a.bi.g = function(f) {
                var h =
                    "Moat#PML#" + a.d.at + "#" + a.bi.a;
                f[h] || (f[h] = {
                    id: c,
                    listening: !1
                });
                return f[h]
            };
            a.bi.i = function(f) {
                var h = f && a.bi.g(f);
                a.o.d(f, "message", a.bi.h);
                t.dcsx && t.dcsx.engn({
                    listenerName: "ME-" + c
                });
                t.swde.sxaz("message-" + c, {
                    callback: a.bi.h
                });
                h && (h.listening = !1)
            };
            a.bi.j = function(c) {
                return a.bi.prefix + "#" + c + "#"
            };
            a.bi.k = function(c) {
                var f = c.match(a.bi.d);
                c = !1;
                f && 7 == f.length && (c = {
                        prefix: f[1],
                        version: f[2],
                        uid: f[3],
                        type: f[4],
                        request: f[5],
                        data: f[6]
                    }, (f = c.data.match(a.bi.e)) && 3 == f.length && (c.cmd = f[1], c.arg = f[2]), c.version &&
                    -1 !== a.b.indexOf(c.version, "-beta") && (c.isBeta = !0));
                return c
            };
            a.bi.h = function(c) {
                if (!(c && c.origin && c.data && "string" === typeof c.data)) return !1;
                var h = a.bi.k(c.data),
                    e = h && h.uid == f.toString();
                if (h && !e && l(h) && (c.msgData = h, h.request in a.bi.c && (c.triggerCallback = function() {
                        a.bi.c[h.request] && (a.bi.c[h.request](c), a.bi.c[h.request] = null, delete a.bi.c[h.request])
                    }), a.bi.b[h.type]))
                    for (var e = 0, d = a.bi.b[h.type].length; e < d; e++) a.bi.b[h.type][e](c)
            };
            a.bi.l = function(c, f) {
                a.bi.b[c] = [f]
            };
            a.bi.m = function(c, h, e, d) {
                "object" ==
                typeof h && (h = a.b.bi(h));
                d = d || q.floor(1E10 * q.random());
                "function" == typeof e && (a.bi.c[d] = e);
                c = a.bi.j(a.bi.a) + f + "#" + c + "#" + d + "#" + h;
                return {
                    request: d,
                    msg: c
                }
            };
            a.bi.n = function(c, f, e, d, b) {
                "object" == typeof e && (e = a.b.bi(e));
                return a.bi.m(c, "@" + f + "@@" + e, d, b)
            };
            a.bi.o = function(c, f, e) {
                try {
                    if (!c || !c || !c.source) return !1;
                    c.source.postMessage(a.bi.m(c.msgData.type, f, e, c.msgData.request).msg, "*")
                } catch (d) {
                    return !1
                }
                return !0
            };
            a.bi.p = function(c, f, e) {
                try {
                    var d = a.k.i(f || window.top);
                    if (!d) return a.o.f(function() {
                        a.bi.p(c,
                            f, e)
                    }, 200);
                    for (var b = 0; b < d.length; b++) e && d[b] == window || d[b].postMessage(c, "*")
                } catch (k) {}
            };
            a.m.a.azsx("modulesReady", a.b.cm([window], a.bi.f), {
                once: !0
            });
            a.m.a.azsx("stopPostMessageListeners", a.b.cm([window], a.bi.i), {
                once: !0
            })
        })(m);
        (function(a) {
            a.aj = {};
            a.aj.c = {};
            a.aj.c.a = "CF";
            a.aj.c.b = "CNF";
            a.aj.c.c = "CNS";
            a.aj.b = {};
            a.aj.b.b = !1;
            a.aj.b.c = [];
            a.aj.d = {};
            a.aj.e = {};
            var l = !1,
                c = [];
            a.aj.b.a = function() {
                var c = a.aj.f();
                a.aj.b.b || a.d.e || (c = a.bi.n("moatframe", "check", c, function(c) {
                    (c = a.b.bj(c.msgData.data)) && c.available &&
                        !a.aj.b.b && (a.d.cd = !0, a.aj.b.b = !0, c = "MoatFrame#geom#" + (new x).getTime(), a.o.g(a.aj.b.d, null, 200, c), a.aj.b.c.push(c), a.m.a.azsx("allLocalAdsKilled", a.aj.g, {
                            once: !0
                        }), a.m.a.zaxs("Moatframe:Ready", c))
                }), a.bi.p(c.msg, !1, !0))
            };
            a.aj.h = function() {
                a.bi.l("moatframe", a.aj.i);
                a.bi.p(a.bi.m("moatframe", "ping").msg, !1, !0)
            };
            a.aj.a = function(c) {
                var g = a.aj.b.e;
                if (!g) return !1;
                var h = a.y.j(c.aa),
                    e = a.y.p(h.rect, g.el, g.et),
                    d = a.y.p(h.visibleRect, g.el, g.et),
                    d = a.y.o(d, {
                        left: g.vl,
                        right: g.vr,
                        top: g.vt,
                        bottom: g.vb
                    }),
                    h = (d.right -
                        d.left) * (d.bottom - d.top) / h.area,
                    b = !1;
                g && "number" === typeof g.pv && !isNaN(g.pv) && (a.b.cx(h, g.pv, .01) && "sframe" === a.aa.a(c.zr) && (b = !0), h = q.min(h, g.pv));
                g.m || (b = !0);
                b && a.m.a.zaxs("rectsAvailable", c.zr, e, d);
                g && "boolean" === typeof g.ia && (a.d.ce = g.ia);
                g && "number" === typeof g.m && !isNaN(g.m) && (a.d.cf = g.m);
                return h
            };
            a.aj.j = function(c) {
                return "undefined" !== typeof c && a.aj.e && a.aj.e[c] ? (a.aj.e[c] = null, !0) : !1
            };
            a.aj.g = function() {
                var c = a.bi.m("moatframe", "kill", null);
                a.bi.p(c.msg, !1, !0)
            };
            a.aj.f = function() {
                var c = a.d.z,
                    g = a.d.aa;
                return c && g ? {
                    width: c,
                    height: g
                } : !1
            };
            a.aj.k = function() {
                return a.d.e || a.d.bq()
            };
            a.aj.l = function(c) {
                var g = !1;
                a.b.forEach(a.aj.c, function(a) {
                    if (a == c) return g = !0, !1
                });
                return g
            };
            a.aj.i = function(c) {
                var g = c.msgData.cmd || c.msgData.data;
                if (g)
                    if (c.triggerCallback) c.triggerCallback(c);
                    else if (a.aj.d[g]) a.aj.d[g](c);
                else a.aj.l(g) || a.bi.o(c, a.aj.c.b)
            };
            a.aj.m = function(c) {
                var g = {},
                    h = c.msgData.arg && a.b.bj(c.msgData.arg);
                a.aj.n(window, c.source, c.msgData.uid, h) && a.aj.k() ? g.available = !0 : g.available = !1;
                a.bi.o(c,
                    g)
            };
            a.aj.o = function(c, g) {
                if (!c || !g) return !1;
                for (var h = a.k.c(window).pop(), e = a.k.k(c, 10), d = !1, b = !1, k = null, l = null, m, n = e.length - 1; 0 <= n; n--)
                    if (e[n] == h && (d = !0), d && !a.k.j(e[n])) {
                        l = e[n];
                        break
                    }
                d && l && ((k = l && l.parent && l.parent.document) && (m = a.k.f(k, l)), m && (h = m.offsetWidth, e = m.offsetHeight, h == g.width && e == g.height ? b = !0 : (h *= e, e = g.width * g.height, b = .98 <= q.min(h, e) / q.max(h, e))));
                return {
                    isNested: b,
                    iframe: m,
                    iframeParentDoc: k
                }
            };
            a.aj.p = function(c) {
                return c && c.parent && a.k.f(c.parent.document, c)
            };
            a.aj.q = function(c) {
                (c =
                    "undefined" !== typeof c && a.aj.e && a.aj.e[c]) && "boolean" == typeof c.isWithinReach && (c.isNested && !c.iframeParentDoc && (c.isWithinReach = !1), c.isNested || c.win && !a.k.d(c.win) || (c.isWithinReach = !1));
                return c
            };
            a.aj.n = function(c, g, h, e) {
                var d, b, k = {
                    isNested: !1,
                    iframe: null,
                    iframeParentDoc: null
                };
                if ((d = a.aj.q(h)) && d.isWithinReach) return !0;
                b = a.k.m(c, g, !0);
                d && "undefined" == typeof d.isWithinReach ? d.isWithinReach = b : (b ? g = a.aj.p(g) : (k = a.aj.o(g, e), (g = k.iframe) && (b = !0)), d = {
                    dimensions: e,
                    iframe: g,
                    iframeParentDoc: k.iframeParentDoc,
                    isNested: k.isNested,
                    isWithinReach: b,
                    win: c
                }, a.aj.e[h] = d);
                return d.isWithinReach
            };
            a.aj.r = function(a, c, h, e, d) {
                if (!a || !c) return !1;
                a = {
                    w: a.width,
                    h: a.height,
                    el: a.left,
                    et: a.top,
                    er: a.right,
                    eb: a.bottom,
                    vl: c.left,
                    vt: c.top,
                    vr: c.right,
                    vb: c.bottom
                };
                "boolean" === typeof e && (a.ia = e);
                "number" !== typeof h || isNaN(h) || (a.m = h);
                "number" !== typeof d || isNaN(d) || (a.pv = 1 < d ? d / 100 : d);
                return a
            };
            a.aj.s = function(c) {
                if (!c) return !1;
                if (a.d.an().isInApp && a.d.bq() && a.al) {
                    c = a.al.f(c);
                    if (!c) return !1;
                    var g = a.al.b;
                    return c = a.aj.r(c.elementRect,
                        c.visibleRect, 1, !0, g && g.percv)
                }
                c = a.y.j(c);
                return c ? c = a.aj.r(c.cumulRect, c.visibleRect, 0, !1) : !1
            };
            a.aj.b.d = function() {
                if (!l) {
                    l = !0;
                    var c = a.bi.m("moatframe", "geom", function(c) {
                        l = !1;
                        a.aj.l(c.msgData.data) || (a.aj.b.e = a.b.bj(c.msgData.data))
                    });
                    a.bi.p(c.msg, !1, !0)
                }
            };
            a.aj.d.ping = function(c) {
                c && c.source === window || a.b.dd() && c.msgData.isBeta || !a.d.e && a.d.dg() && a.aj.b.a()
            };
            a.aj.d.check = function(f) {
                if (!a.b.dc() || f.msgData.isBeta) {
                    var g = !0;
                    a.d.an().isInApp && (g = a.d.bq(), !g && a.al.d && c.push(f));
                    g && a.aj.m(f)
                }
            };
            a.aj.d.geom =
                function(c) {
                    if (!a.b.dc() || c.msgData.isBeta)
                        if (a.aj.n(window, c.source, c.msgData.uid) && a.aj.k()) {
                            var g = a.aj.e && a.aj.e[c.msgData.uid] && a.aj.e[c.msgData.uid].iframe;
                            if (g && (g = a.aj.s(g))) {
                                a.bi.o(c, g);
                                return
                            }
                            a.bi.o(c, a.aj.c.a)
                        } else a.bi.o(c, a.aj.c.c)
                };
            a.aj.d.kill = function(c) {
                a.aj.j(c.msgData.uid)
            }
        })(m);
        (function(a) {
            a.bf = {};
            a.bf.b = 5E3;
            a.bf.c = function(l) {
                if (!a.d.e) return !1;
                l.activetime = {};
                l.activetime.counters = {};
                a.bf.d(l);
                a.m.a.azsx("adKilled", a.bf.e, {
                    condition: function(a) {
                        return l.zr == a.zr
                    },
                    once: !0
                });
                a.bf.f(l)
            };
            a.bf.f = function(l) {
                if (l.activetime) {
                    var c = a.aa.t(l.zr);
                    if (l.activetime.onInViewTimeCount)
                        for (var f in c) c[f].removeListener && c[f].removeListener(l.activetime);
                    else l.activetime.onInViewTimeCount = a.b.cm([l], a.bf.g);
                    (c = a.aa.j(l.zr, !0)) && c.addListener(l.activetime)
                }
            };
            a.bf.d = function(l) {
                l.activetime.mouseSubId = t.swde.azsx("mouseEvent", a.b.cm([l], a.bf.h));
                l.activetime.mouseLocalSubId = a.m.a.azsx("mouseEvent", a.b.cm([l], a.bf.h));
                l.activetime.keyboardSubId = t.swde.azsx("keyboardEvent", a.b.cm([l], a.bf.i));
                l.activetime.focusSubId = t.swde.azsx("focusStateChange", a.b.cm([l], a.bf.j))
            };
            a.bf.e = function(l) {
                if (l.activetime && (t.swde.sxaz("mouseEvent", {
                        id: l.activetime.mouseSubId
                    }), a.m.a.sxaz("mouseEvent", {
                        id: l.activetime.mouseLocalSubId
                    }), t.swde.sxaz("keyboardEvent", {
                        id: l.activetime.keyboardSubId
                    }), t.swde.sxaz("focusStateChange", {
                        id: l.activetime.focusSubId
                    }), l.activetime && l.activetime.counters && "object" === typeof l.activetime.counters))
                    for (var c in l.activetime.counters) delete l.activetime.counters[c]
            };
            a.bf.k =
                function(l, c) {
                    a.bf.l(l, !0)
                };
            a.bf.h = function(l, c) {
                a.bf.l(l, !0)
            };
            a.bf.i = function(l, c) {
                a.bf.l(l, !0)
            };
            a.bf.j = function(l, c) {
                c && a.bf.l(l, !0)
            };
            a.bf.l = function(l, c) {
                var f = (new x).getTime(),
                    f = l.activetime.activeTS && f - l.activetime.activeTS || 0;
                c && (1E3 < f || !l.activetime.active) && (l.activetime.checkID && a.b.a(l.activetime.checkID), l.activetime.activeTS = (new x).getTime(), l.activetime.checkID = a.o.f(a.b.cm([l], a.bf.m), a.bf.b));
                l.activetime.active = c
            };
            a.bf.m = function(l) {
                if (l.activetime.active) {
                    var c = (new x).getTime() -
                        l.activetime.activeTS < a.bf.b;
                    a.bf.l(l, c)
                }
            };
            a.bf.g = function(l, c, f, g, h) {
                f = a.ba.a(l.activetime.counters, h);
                h = a.aa.m(l.zr, h);
                h = (l = l.activetime.active) && h && h.visible && h.visible();
                g = f.get("lastActiveVis", !1);
                !f.get("wasEverActiveAndFocused") && l && f.set("wasEverActiveAndFocused", 1);
                g && h ? f.increment("activeInviewTime", q.max(c, 0)) : (g || h) && f.increment("activeInviewTime", q.max(q.round(.5 * c), 0));
                f.set("lastActiveVis", h)
            };
            a.bf.a = function(l, c) {
                if (!a.e.c()) {
                    c.rf = a.d.fl ? 1 : 0;
                    var f;
                    f = a.d.fl;
                    if (!a.d.e) return f = f || a.focus.pageIsVisible() ||
                        l && l.counters && l.counters.strictDwell && l.counters.strictDwell.tCur && 0 < l.counters.strictDwell.tCur, c.re = f ? 1 : 0, c;
                    if (!l.activetime) return c;
                    var g = a.aa.a(l.zr),
                        g = a.ba.a(l.activetime.counters, g);
                    f = f || g.get("wasEverActiveAndFocused");
                    c.re = f ? 1 : 0;
                    g && 0 < g.get("activeInviewTime") && (c.ft = g.get("activeInviewTime"), c.fv = g.get("lastActiveInviewTime"), c.fw = g.get("activeInviewTimeFirstDelta", g.get("activeInviewTime")), g.set("lastActiveInviewTime", g.get("activeInviewTime")));
                    return c
                }
            };
            a.m.a.azsx("viewCounterStarted",
                a.bf.f);
            a.m.a.azsx("startAdTracking", a.bf.c)
        })(m);
        (function(a) {
            function l(c) {
                c.functionInProgress = !1;
                return 0 < c.pendingFunctions.length ? (c = c.pendingFunctions.shift(), a.b.cm(c, a.ac.call, a.ac)(), !0) : !1
            }

            function c() {
                try {
                    a = window.__b, (0, window.__w)("INNER_FUNCTION"), window.__w = void 0, window.__b = void 0
                } catch (c) {
                    var f = c.name + " in closure (moat.customIframe): " + c.message + ", stack=" + c.stack;
                    try {
                        var e = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                            d = e ? "" : document.referrer,
                            b = "https://apx.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof O ? "ADTECHBRANDS1" : O) + "&ac=1&k=" + escape(f) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(d) + "&cs=" + (new x).getTime();
                        e ? omidNative.sendUrl(b) : (new Image(1, 1)).src = b
                    } catch (g) {}
                }
            }

            function f(f) {
                if (!f) return !1;
                var e = f.iframe,
                    d = e.contentWindow.document,
                    b = f.innerFunction,
                    g = f.innerFunctionCbName,
                    m = f.preserveDom;
                !1 !== a.d.es() ? (m = d.createElement("script"), m.innerHTML = c.toString().replace('"INNER_FUNCTION"',
                    b), d.body.appendChild(m)) : (b = "<html><head></head><body><script>" + c.toString().replace('"INNER_FUNCTION"', b) + "\x3c/script>", m || (b += "<script>setTimeout(function() { document.close(); }, 1);\x3c/script>"), d.write(b + "</body></html>"));
                e.contentWindow.__b = f.Moat;
                e.contentWindow.__w = f.wrapper;
                e.contentWindow[c.toString().match(/function (\w+)\(\)/)[1]]();
                g && a.d.ay[g] && (a.d.ay[g] = null);
                if (!l(f.frameData)) a: if (d = f.setIframeDomain, f = f.preserveDom, e) {
                    var u;
                    if (!d) try {
                        u = e.contentWindow.document
                    } catch (n) {
                        break a
                    }
                    g = !1 === a.d.es();
                    f ? d ? e.src = "javascript:document.close();" : u.close() : d ? e.src = g ? "javascript:document.open(); document.close();" : 'javascript:document.head && (document.head.innerHTML=""); document.body && (document.body.innerHTML="");' : g ? (u.open(), u.close()) : (u.head && (u.head.innerHTML = ""), u.body && (u.body.innerHTML = ""))
                }
            }

            function g(a) {
                if ("string" !== typeof a) return "";
                var c = a.charAt(0);
                "'" !== c && '"' !== c && (a = "'" + a + "'");
                return a
            }
            a.ac = {};
            a.ac.a = function(c, e, d, b) {
                if (!c) return !1;
                try {
                    var f = document.createElement("iframe"),
                        g = e || a.b.cp();
                    if (!f) return !1;
                    a.b.cv(f, b);
                    var m;
                    d ? (d = a.b.bw(d), m = function() {
                        a.b.bv(f, d)
                    }) : (d = a.d.g.document.body, m = function() {
                        d.insertBefore(f, d.insertBefore[0] || null)
                    });
                    var n = {
                        id: g,
                        iframe: f,
                        functionInProgress: !1,
                        pendingFunctions: [],
                        parent: d,
                        loaded: !1
                    };
                    f.onload = function() {
                        f.contentWindow && f.contentDocument && !n.loaded && (n.loaded = !0, l(n))
                    };
                    m();
                    n.loaded = n.loaded || f.contentDocument && "complete" === f.contentDocument.readyState;
                    c.customIframes || (c.customIframes = {});
                    c.customIframes[g] = n;
                    n.loaded && l(n);
                    a.m.a.azsx("adKilled",
                        function(b) {
                            var c = b.customIframes,
                                d;
                            for (d in c) c.hasOwnProperty(d) && a.ac.b(b, c[d].id)
                        }, {
                            condition: function(a) {
                                return c.zr == a.zr
                            },
                            once: !0
                        });
                    return g
                } catch (r) {}
                return !1
            };
            a.ac.b = function(a, c, d) {
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
            a.ac.call = function(c, e, d, b, k, l) {
                if (!c || "undefined" === typeof e) return !1;
                var m = c && c.customIframes && c.customIframes[e];
                if (!m || !d) return !1;
                b = b && "string" !== typeof b ? b.toString() : g(b);
                d && "string" !== typeof d && (d = a.b.cs(d, b));
                k && "function" === typeof k || (k = function() {});
                if (m.functionInProgress || !m.loaded) return m.pendingFunctions.push([c, e, d, b, k, l]), !1;
                c = m.iframe;
                m.functionInProgress = !0;
                e = !1;
                try {
                    if (!m.iframe.contentDocument) throw Error();
                } catch (r) {
                    e = !0
                }
                d = a.o.l(a.b.cm([{
                    iframe: c,
                    frameData: m,
                    Moat: a,
                    wrapper: function(a) {
                        k(a)
                    },
                    innerFunction: d,
                    innerFunctionCbName: n,
                    setIframeDomain: e,
                    preserveDom: l
                }], f));
                if (e) {
                    var n;
                    do n = "Moat#iqcb" + q.floor(1E4 * q.random());
                    while (a.d.ay[n]);
                    a.d.g[a.d.az][n] = d;
                    c.src = 'javascript:document.open(); document.domain="' + document.domain + '"; window.parent["' + a.d.az + '"]["' + n + '"]();'
                } else d()
            }
        })(m);
        (function(a) {
            a.ad = {};
            a.ad.a = function(a, c) {
                function f(a) {
                    a = [{
                        name: "fr",
                        enabled: !0,
                        inview: a
                    }];
                    n && n(a)
                }

                function g(a) {
                    a && 5 > q ? q += 1 : a || (q = 0);
                    return q
                }

                function h(a) {
                    var b, c, d;
                    clearTimeout(m);
                    c = v;
                    d = c.inView;
                    b = c.time;
                    a = (new window.Date).getTime();
                    b = 2 < 1E3 / (a - b);
                    var e = v.inView,
                        h = b && !e && 0 === q;
                    r && (!b && e || h) && r && r(void 0);
                    g(b);
                    b = b && 5 === q;
                    b !== d && f(b);
                    c.inView = b;
                    c.time = a;
                    k()
                }

                function e() {
                    var a = v,
                        b = (new window.Date).getTime();
                    500 <= b - a.time && a.inView && (f(!1), a.inView = !1, a.time = b)
                }

                function d() {
                    for (var a = 0, b = t.length; a < b; a++) window.cancelAnimationFrame(t[a]);
                    t = []
                }

                function b() {
                    return {
                        time: (new window.Date).getTime(),
                        inView: !1
                    }
                }

                function k() {
                    v.inView && (m = setTimeout(e, 500));
                    20 <= t.length && d();
                    t.push(window.requestAnimationFrame(h))
                }
                var m, q = 0,
                    n = a && window && window.parent && window.parent[a],
                    r = c && window && window.parent && window.parent[c],
                    t = [],
                    v = b();
                window.onBlur =
                    function() {
                        g(!1);
                        v = b();
                        clearTimeout(m);
                        d()
                    };
                window.onFocus = k;
                k()
            }
        })(m);
        (function(a) {
            function l(b) {
                var c = {
                    oz: !0
                };
                if (!a.d.an().isInApp || a.d.cr()) c.st = !0, c.su = !0, c.of = !0;
                if (!d[b]) return !1;
                for (var e in d[b])
                    if (c[e] && d[b].hasOwnProperty(e) && !d[b][e]) return !1;
                return !0
            }

            function c(c) {
                if (!a.d.c()) {
                    a.aq.e(c);
                    a.aq.f(c);
                    a.aq.g(c);
                    a.aq.h(c);
                    var d = l(c.zr);
                    !c.hasAdLoadedfired && d ? b = !0 : !b && d && (d = {
                        e: 9
                    }, d.q = c.aq[9]++, a.u.a(c, d), b = !0)
                }
            }

            function f(b) {
                b = a.d.c() ? !0 : !1;
                return {
                    st: b,
                    su: b,
                    of: b,
                    oz: b
                }
            }
            var g = 0,
                h, e = A,
                d = {};
            a.aq = {};
            a.aq.c = function(a) {
                return !1
            };
            a.aq.d = function() {
                var b = (new x).getTime(),
                    d = b - g;
                if (g && !(1E3 > d)) {
                    g = b;
                    for (var f in e) e.hasOwnProperty(f) && c(e[f]);
                    a.m.a.zaxs("hiddenAds:updated")
                }
            };
            var b = !1;
            a.aq.e = function(b) {
                d[b.zr] || (d[b.zr] = f(b));
                if (!0 !== d[b.zr].st) {
                    var c = a.aa.j(b.zr);
                    c ? (c = c.adStartedOnScreen(), "undefined" !== typeof c && (b.isCurrentlyStacked = a.y.t(b), !1 === d[b.zr].st && (d[b.zr].st = !1 === c || !1 === b.isCurrentlyStacked))) : d[b.zr].st = !0
                }
            };
            a.aq.f = function(b) {
                var c = d,
                    e = b.zr;
                c[e] = d[e] || f(b);
                var g = c[e].su;
                if (!g) {
                    var h =
                        b.WINDOW || window,
                        g = b.AD_RECT || a.y.m(b.aa, h, b._calcVideoBasedOnContainer),
                        h = a.d.s(h),
                        g = b.isInIframe ? g && h && !(g.left >= h.width || 0 >= g.right || g.top >= h.height || 0 >= g.bottom) : !0;
                    c[e].su = g
                }
            };
            a.aq.g = function(b) {
                var c = d,
                    e = b.zr;
                c[e] = d[e] || f(b);
                var g = c[e].of;
                g || (g = a.d.s(b.WINDOW), g = b.isInIframe ? g && !(5 >= g.width || 5 >= g.height) : !0, c[e].of = g)
            };
            a.aq.h = function(b) {
                var c = d[b.zr];
                d[b.zr] = d[b.zr] || f(b);
                if (b.aa) {
                    var e = 0 < a.b.cl(b);
                    b.isCurrentlyTransparent = !e;
                    c.oz = c.oz || e;
                    return e
                }
                return c.oz
            };
            a.aq.b = function(a) {
                var b = {},
                    c,
                    e;
                for (e in d[a]) d[a].hasOwnProperty(e) && (c = d[a][e], b[e] = c ? 1 : 0);
                return b
            };
            a.aq.a = function(b) {
                return a.d.dz() ? !1 : !l(b)
            };
            a.m.a.azsx("adLoaded", function(a) {
                a.hasAdLoadedfired = !0
            });
            a.m.a.azsx("startAdTracking", function(b) {
                c(b);
                g = (new x).getTime();
                h || (h = (new x).getTime() + "ha", a.m.a.azsx("view:tick", function() {
                    a.aq.d()
                }, {
                    id: h
                }))
            });
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("view:tick", {
                    id: h
                });
                e = null
            }, {
                once: !0
            });
            a.m.a.azsx("adEntersView", function(b) {
                a.aq.e(b)
            }, {
                once: !0
            });
            a.m.a.azsx("adKilled", function(a) {
                a &&
                    !a.ep && (delete a.elementsFromPointCache, delete d[a.zr])
            })
        })(m);
        (function(a) {
            function l(c) {
                c && (a.d.ay.b || (a.d.ay.b = !0, t.dcsx && t.dcsx.ynds(window, "deviceorientation", "deviceorientation-" + a.d.ay.a, "deviceorientationFn" + a.d.ay.a)), b || (b = !0, t.swde.azsx("deviceorientation-" + a.d.ay.a, f)), e.hasOwnProperty(c.zr) || (e[c.zr] = new g))
            }

            function c(a) {
                a && delete e[a.zr]
            }

            function f(a) {
                var b = x.now(),
                    c = !1;
                200 < b - d && (d = b, c = !0);
                for (var f in A) A.hasOwnProperty(f) && e.hasOwnProperty(f) && (b = e[f], 1500 > b.eventsCount && (b.eventsCount +=
                    1, c && b.handleOrientationEvent(a)))
            }

            function g() {
                this.validEventsHandledCount = this.eventsHandledCount = this.eventsCount = 0;
                this.alpha = new h(0, 360);
                this.beta = new h(-180, 180);
                this.gamma = new h(-90, 90)
            }

            function h(a, b) {
                this.minExpectedVal = a;
                this.maxExpectedVal = b;
                this.normalizedMax = q.abs(this.minExpectedVal) + this.maxExpectedVal;
                this.rangeRight = this.rangeLeft = this.origin = null
            }
            a.be = {};
            var e = {},
                d = 0,
                b = !1;
            g.prototype.isValidEvent = function(a) {
                return !a.alpha && 0 !== a.alpha || !a.beta && 0 !== a.beta || !a.beta && 0 !== a.beta ||
                    0 === a.alpha && 0 === a.beta && 0 == a.gamma ? !1 : !0
            };
            g.prototype.handleOrientationEvent = function(a) {
                this.eventsHandledCount += 1;
                this.isValidEvent(a) && (this.validEventsHandledCount += 1, this.alpha.addValue(a.alpha), this.beta.addValue(a.beta), this.gamma.addValue(a.gamma))
            };
            h.prototype.isOutsideRange = function(a) {
                return this.rangeLeft > this.rangeRight ? this.rangeLeft > a && a > this.rangeRight : a < this.rangeLeft || a > this.rangeRight
            };
            h.prototype.extendRange = function(a) {
                this.isOutsideRange(a) && ((a < this.rangeLeft ? this.rangeLeft -
                    a : this.rangeLeft + this.normalizedMax - a) <= (a > this.rangeRight ? a - this.rangeRight : this.normalizedMax - this.rangeRight + a) ? this.rangeLeft = a : this.rangeRight = a)
            };
            h.prototype.addValue = function(a) {
                var b = a + q.abs(this.minExpectedVal);
                null === this.origin ? (this.origin = a.toFixed(3), this.rangeRight = this.rangeLeft = b) : this.extendRange(b)
            };
            h.prototype.getRangeLength = function() {
                return null === this.origin ? -1 : this.rangeRight >= this.rangeLeft ? (this.rangeRight - this.rangeLeft).toFixed(3) : (this.normalizedMax - this.rangeLeft + this.rangeRight).toFixed(3)
            };
            a.be.a = function(a) {
                var b = {};
                e[a] && (a = e[a], b = {
                    oe: [a.eventsCount, a.eventsHandledCount, a.validEventsHandledCount, a.alpha.origin ? a.alpha.origin : "null", a.alpha.getRangeLength(), a.beta.origin ? a.beta.origin : "null", a.beta.getRangeLength(), a.gamma.origin ? a.gamma.origin : "null", a.gamma.getRangeLength()].join(":")
                });
                return b
            };
            a.d.g.DeviceOrientationEvent && (a.m.a.azsx("adInitialized", l), a.m.a.azsx("adKilled", c), a.m.a.azsx("allLocalAdsKilled", function() {
                t && t.dcsx && t.dcsx.engn && t.dcsx.engn({
                    listenerName: "deviceorientationFn" +
                        a.d.ay.a
                });
                t.swde.sxaz("deviceorientation-" + a.d.ay.a, {
                    callback: f
                });
                e = {};
                b = a.d.ay.b = !1
            }))
        })(m);
        m.m.a.zaxs("modulesReady", t);
        var La = m.focus.pageIsVisible();
        m.d.fl = 1 == window.history.length && !La && (m.d.e && "" != document.referrer || !m.d.e);
        var ya = !0;
        m.b.ac() && (ya = !1);
        var J = m.d.bb;
        m.b.y();
        m.m.a.azsx("adInitialized", function(a) {
            function l(a) {
                window._qs = a;
                (a = window.__b) && a.b.bx("https://z.moatads.com/px2/client.js", document.body)
            }

            function c(a) {
                var c = m.f.u();
                a = m.u.b(36, a.ao, c, !1, !0);
                a.qs.i = m.b.da(O, "PX2");
                return m.u.j(a.qs)
            }
            if (a) {
                var f = 0 === q.floor(1E3 * q.random());
                a.px2 = {
                    inSample: !1,
                    success: !1
                };
                if (f && (a.px2.inSample = !0, f = m.ac.a(a, "ivt"))) {
                    var g = c(a);
                    m.ac.call(a, f, l, g, null, !0);
                    a.px2.success = !0
                }
            }
        }, {
            once: !0
        });
        m.d.l || m.d.am || m.d.du();
        (m.d.l || m.d.am) && J && J.match("audit.adnxs.net") && m.d.du();
        (m.d.l && m.d.ez() || "dummy.url" === m.b.y()) && m.d.du();
        m.d.du();
        m.aj.h();
        var K = m.b.bm(),
            ua = !1,
            Ma;
        za = "https://apx.moatads.com";
        m.bg.a(Z);
        var J = m.b.bm(),
            R = null,
            R = null,
            R = !1,
            R = (R = J && m.b.as(J)) && m.w.g && m.w.g(R),
            J = ["1185791", "1185793", "264960", "264961"],
            Ea = "531367 135267 135470 135292 516469 511488 135439 136779 mail".split(" ");
        if (R = R && (m.b.ai(J, R.moatClientLevel2) || m.b.ai(Ea, R.moatClientLevel3)) || R && "mail" === R.zMoatVert) m.d.dx = !0, m.d.du(), m.b.ab(15, 2).sample || (m.d.dv = !1);
        J = m.b.bm();
        J = m.w.d(J);
        (ya && J && "5113" == J.rawMoatClientLevel1 || "5071" == J.rawMoatClientLevel1 || "1065.1" == J.rawMoatClientLevel1 || "1065" == J.rawMoatClientLevel1 || "593" == J.rawMoatClientLevel1) && m.b.ad(1, !0);
        var Ia = function() {
            var a;
            a = arguments && arguments[0];
            a = m.b.m() && m.d.j() && a && a.type &&
                "beforeunload" === a.type ? !0 : !1;
            a || (t.zs && t.dcsx && (t.dcsx.engn({
                listenerName: "unloadFn" + m.d.ay.a
            }), t.dcsx.engn({
                listenerName: "beforeunloadFn" + m.d.ay.a
            })), wa || (wa = !0, m.e.b()), m.f && m.f.a(), ra(), m.m.a.zaxs("stopPostMessageListeners"))
        };
        !K && m.d.c() && (K = {
            _MoatProxyOf: "thisScript"
        });
        if (!K) return !1;
        m.c = K;
        m.b.bp(K);
        m.m.a.azsx("trackingReady", Ga, {
            once: !0
        });
        J = m.w.d(K);
        m.bh.b(J);
        if (!m.bh.a) {
            if (m.d.j())
                if (m.d.er()) m.d.eq();
                else {
                    m.n.d();
                    var J = m.d.d(),
                        R = m.d.cs(),
                        Ea = m.d.en && m.d.en(),
                        Fa = !1;
                    R && !Ea ? Fa = !0 : R || J || (Fa = !0);
                    Fa && m.m.a.zaxs("trackingReady")
                }
            else m.m.a.zaxs("trackingReady");
            m.d.d() && m.p.q();
            m.m.a.azsx("allLocalAdsKilled", Ka, {
                once: !0
            })
        }
    })(Date, Math)
} catch (x) {
    var GLOBAL_VAR = this,
        ct = (new Date).getTime();
    GLOBAL_VAR["Moat#ETS"] || (GLOBAL_VAR["Moat#ETS"] = ct);
    GLOBAL_VAR["Moat#EMC"] || (GLOBAL_VAR["Moat#EMC"] = 0);
    var et = ct - GLOBAL_VAR["Moat#ETS"],
        hourElapsed = 36E5 <= et,
        msg = x.name + " in closure (global): " + x.message + ", stack=" + x.stack;
    if (!hourElapsed && 10 > GLOBAL_VAR["Moat#EMC"]) {
        GLOBAL_VAR["Moat#EMC"]++;
        try {
            var pixelDomain =
                "apx.moatads.com",
                isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                documentReferrer = isDomless ? "" : document.referrer,
                isBeta = !1,
                viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "ADTECHBRANDS1_BETA" : "ADTECHBRANDS1" : AD_VIEW_HASH,
                pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(documentReferrer) + "&cs=" + (new Date).getTime();
            if (isDomless) omidNative.sendUrl(pxSrc);
            else {
                var px = new Image(1, 1);
                px.src = pxSrc
            }
        } catch (q) {}
    } else if (hourElapsed) {
        GLOBAL_VAR["Moat#EMC"] = 1;
        GLOBAL_VAR["Moat#ETS"] = ct;
        try {
            pixelDomain = "apx.moatads.com", documentReferrer = (isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ? "" : document.referrer, isBeta = !1, viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "ADTECHBRANDS1_BETA" : "ADTECHBRANDS1" : AD_VIEW_HASH, pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) +
                "&ac=1&k=" + escape(msg) + "&ar=" + escape("21bcfc3260-clean") + "&j=" + escape(documentReferrer) + "&cs=" + (new Date).getTime(), isDomless ? omidNative.sendUrl(pxSrc) : (px = new Image(1, 1), px.src = pxSrc)
        } catch (q) {}
    }
};