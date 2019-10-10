/*Copyright (c) 2011, 2018, Oracle and/or its affiliates.  All rights reserved.*/
try {
    (function(u, n) {
        var q = {
            a: {}
        };
        q.a.a = function() {};
        n.floor(n.random() * n.pow(10, 12));
        var E = [],
            r = {},
            F = [],
            B = {};
        (function(a) {
            function h(d) {
                return (d = a.b.a.toString.call(d)) && ("[object Array]" === d || "[object Array Iterator]" === d)
            }
            a.b = {};
            a.b.a = {};
            a.b.b = h;
            a.b.c = function(a) {
                return a && a.document && a.location && a[__ale + rt__] && a[__setInte + rval__]
            };
            a.b.d = function(d) {
                if (null == d || a.b.c(d)) return !1;
                var g = d.length;
                return 1 === d.nodeType && g ? !0 : "string" === typeof d || h(d) || 0 === g || "number" === typeof g && 0 < g && g - 1 in d
            };
            a.b.forEach =
                function(d, g, k, h) {
                    var l, b = typeof d;
                    if (d)
                        if ("function" === b)
                            for (l in d) {
                                if ("prototype" != l && "length" != l && "name" != l && (h || !d.hasOwnProperty || d.hasOwnProperty(l)) && (b = g.call(k, d[l], l), "boolean" === typeof b && !b)) break
                            } else if ("number" === b)
                                for (l = 0; l < d && (b = g.call(k, d, l), "boolean" !== typeof b || b); l++);
                            else if ("function" === typeof d.every) d.every(function(a, b, f) {
                        a = g.call(k, a, b);
                        return !("boolean" === typeof a && !a)
                    });
                    else if (a.b.d(d))
                        for (l = 0; l < d.length && (b = g.call(k, d[l], l), "boolean" !== typeof b || b); l++);
                    else
                        for (l in d)
                            if (h ||
                                d.hasOwnProperty(l))
                                if (b = g.call(k, d[l], l), "boolean" === typeof b && !b) break;
                    return d
                };
            a.b.e = function(d) {
                if (!d) return !1;
                var g;
                if (d !== Object(d)) g = d;
                else if (a.b.d(d)) {
                    g = [];
                    for (var k = 0, h = d.length; k < h; k++) g[k] = d[k]
                } else
                    for (k in g = {}, d) g[k] = d[k];
                return g
            };
            a.b.f = function(d, g) {
                if (!d || "function" !== typeof d) return !1;
                var k = !1;
                0 <= String(d).indexOf("[native code]") ? k = !0 : a.c.a || d === Function.prototype.toString || (k = !0);
                k && g && (k = d.toString && d.toString === Function.prototype.toString);
                return k
            };
            a.b.g = function(a) {
                return !!/iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(a ||
                    navigator && navigator.userAgent || "")
            };
            a.b.h = function(a) {
                return !!/Android/.exec(a || navigator && navigator.userAgent || "")
            };
            a.b.i = function(a) {
                a = a || navigator && navigator.userAgent || "";
                var g = /Safari|CriOS/i;
                return !(!/iPhone|iPod|iPad/.exec(a) || g.exec(a))
            };
            a.b.j = function(d) {
                d = d || navigator && navigator.userAgent || "";
                return a.b.h(d) ? !!/Version/.exec(d) : !1
            };
            a.b.k = function() {
                if (!navigator) return null;
                var a;
                a = navigator.userAgent;
                return "Microsoft Internet Explorer" == navigator.appName ? parseInt(a.replace(/^.*MSIE (\d+).*$/,
                    "$1"), 10) : "Netscape" == navigator.appName && (a = a.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(a[1], 10) : null
            };
            a.b.l = function() {
                return null != a.b.k()
            }
        })(q);
        (function(a) {
            function h(a) {
                var c = new RegExp("(^| )" + a + "($| )");
                return function(a) {
                    return a && a.className && a.className.match(c)
                }
            }

            function d(a) {
                var c = {},
                    e;
                for (e in a) "number" === typeof a[e] && (c[e] = n.round(a[e]));
                return c
            }
            a.b.m = 2500;
            a.b.n = 1E3;
            a.b.o = !1;
            a.b.p = !1;
            a.b.q = function() {
                var a = /Firefox\/(\d+)/.exec(navigator.userAgent);
                return a ? (a = parseInt(a[1],
                    10), 21 > a && 14 < a) : !1
            }();
            a.b.r = function() {
                var b, c = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                a.c.b || (b = a.b.s(), !b && a.c.c && (b = a.c.c));
                b || (b = a.c.d.location.hostname);
                var e = a.c.e();
                e && (b = e.sourceUrl);
                return (b = b && b.match && b.match(c)) && b[1] || a.c.d.location.hostname
            };
            a.b.t = function() {
                var b, c;
                a.c.b ? b = window.top && window.top.location && window.top.location.href : (c = a.d.a(), c.parent === window.top ? b = c.document.referrer : (b = a.b.s(), b || (b = c.document.referrer)));
                return b
            };
            a.b.u = function() {
                var b = !1,
                    c, e = /^https?:\/\/(.*?)\/([^?#]*)/;
                a.c.b ? (b = window.location.hostname.replace("www.", ""), b += window.location.pathname) : (c = a.d.a(), c.parent === window.top && (b = c.document.referrer) && (c = e.exec(b)) && (b = c[1].replace("www.", "") + "/" + c[2]));
                "string" === typeof b && "/" === b.charAt(b.length - 1) && (b = b.substr(0, b.length - 1));
                return b
            };
            a.b.v = function() {
                var b;
                a.c.b ? b = 2 : (b = a.d.a(), b = b.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
                return b
            };
            a.b.s = function() {
                var a = location && location.ancestorOrigins;
                return a ? 0 === a.length ? !1 : a[a.length - 1] : !1
            };
            a.b.w = function() {
                var b, c = a.b.r(),
                    e = c && c.split("."),
                    f = e && e.length;
                3 <= f ? b = "co" === e[f - 2] || "com" === e[f - 2] ? e[f - 3] + "." + e[f - 2] + "." + e[f - 1] : e[f - 2] + "." + e[f - 1] : 2 == f && (b = e[f - 2] + "." + e[f - 1]);
                return b && decodeURIComponent(b) || decodeURIComponent(c)
            };
            a.b.x = function(a) {
                if ("string" !== typeof a) return "";
                var c = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
                c && c[1] && (a = c[1]);
                return a
            };
            a.b.y = function(a, c) {
                for (var e = [a], f = 1; f <= c; f++) e.push(a + f), e.push(a - f);
                e = e[n.floor(n.random() * e.length)];
                f = n.floor(n.random() * e);
                return {
                    multiplier: e,
                    sample: 0 ==
                        f
                }
            };
            a.b.z = function(b, c) {
                var e = a.b.y(b, c);
                a.b.z = function() {
                    return e
                };
                return e
            };
            a.b.aa = function() {
                return a.b.z(a.e, a.f).sample
            };
            a.b.ab = function() {
                var b = a.b.k();
                return 5 === b || 6 === b || 7 === b
            };
            a.b.ac = function(a) {
                if (!navigator) return null;
                a = a || navigator.userAgent;
                return a ? (a = a.match(/Edge\/(\d{1,}(.\d{1,})?)/)) ? parseFloat(a[1]) : null : null
            };
            a.b.ad = function(b, c) {
                return -1 !== a.b.indexOf(b, c)
            };
            a.b.ae = function() {
                function a(b) {
                    if (!b) return "";
                    b = b.match(/[\d]+/g);
                    b.length = 3;
                    return b.join(".")
                }
                var c = !1,
                    e = "";
                if (navigator.plugins &&
                    navigator.plugins.length) {
                    var f = navigator.plugins["Shockwave Flash"];
                    f && (c = !0, f.description && (e = a(f.description)));
                    navigator.plugins["Shockwave Flash 2.0"] && (c = !0, e = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)(c = (f = navigator.mimeTypes["application/x-shockwave-flash"]) && f.enabledPlugin && f.enabledPlugin.description) && (e = a(f.enabledPlugin.description));
                else try {
                    f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), c = !0, e = a(f.GetVariable("$version"))
                } catch (g) {
                    try {
                        f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                            c = !0, e = "6.0.21"
                    } catch (d) {
                        try {
                            f = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), c = !0, e = a(f.GetVariable("$version"))
                        } catch (l) {}
                    }
                }
                return c ? e : "0"
            };
            a.b.getElementsByClassName = function(a, c, e) {
                c = c || "*";
                e = e || document;
                if (e.getElementsByClassName) {
                    var f = [],
                        g = e.getElementsByClassName(a);
                    if ("*" !== c) {
                        a = 0;
                        for (e = g.length; a < e; a++) {
                            var d = g[a];
                            d.tagName === c && f.push(d)
                        }
                        return f
                    }
                    return g
                }
                g = [];
                c = e.getElementsByTagName(c);
                e = h(a);
                d = c.length;
                for (a = 0; a < d; a++) f = c[a], e(f) && g.push(f);
                return g
            };
            a.b.af = h;
            a.b.ag = function(a,
                c) {
                if (!a || !c) return !1;
                var e = new RegExp("(^| )" + c + "($| )");
                return a.className && a.className.match(e)
            };
            a.b.ah = function(a) {
                return new u - a.de
            };
            a.b.ai = function(a) {
                return a.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
            };
            a.b.aj = function(b, c, e) {
                if (("undefined" === typeof e || !e) && b && (e = a.b.ak(b), !e)) return;
                if (b && b.nodeType)
                    if ("undefined" === typeof Node) {
                        if (1 != b.nodeType) return
                    } else if (b.nodeType != Node.ELEMENT_NODE) return;
                if (e.getComputedStyle) return e.getComputedStyle(b, "") &&
                    e.getComputedStyle(b, "")[c];
                for (e = c.indexOf("-"); - 1 < e;) c = e == c.length - 1 ? c.substr(0, e) : c.substr(0, e) + c.charAt(e + 1).toUpperCase() + c.substr(e + 2), e = c.indexOf("-");
                if (b.currentStyle) return b.currentStyle[c];
                if (b.style) return b.style[c]
            };
            a.b.al = function(b) {
                if (!b) return !1;
                var c = a.b.aj(b, "background-image");
                c || (c = a.b.aj(b, "backgroundImage"));
                var e;
                c && (e = (e = c.match("url\\((.*)\\)")) && e[1].replace(/\x22/g, ""));
                return e
            };
            a.b.am = function(b, c, e) {
                if (!b) return !1;
                var f = "boolean" === typeof e ? e : !1,
                    g = [b],
                    d = !1;
                a.b.forEach("number" ===
                    typeof c ? c : 50,
                    function() {
                        if ((d = a.b.an(b)) && 1 == d.nodeType) b = d, g.push(b);
                        else if (f && d && 9 == d.nodeType)
                            if ((d = a.d.b(b)) && 1 == d.nodeType) b = d, g.push(b);
                            else return !1;
                        else return !1
                    });
                return g
            };
            a.b.ao = function(b, c) {
                var e = a.b.am(b);
                return e && -1 !== a.b.indexOf(e, c)
            };
            a.b.an = function(a) {
                return a.parentNode || a.parentElement || !1
            };
            a.b.ap = function(a) {
                return !!/iPhone|iPod/.exec(a || navigator && navigator.userAgent || "")
            };
            a.b.aq = function(a) {
                return !!/iPad/.exec(a || navigator && navigator.userAgent || "")
            };
            a.b.ar = function() {
                var b = {};
                return function(c) {
                    if ("undefined" !== typeof b[c]) return b[c];
                    b[c] = null;
                    var e = a.g.a([5, 1, 0, 21]),
                        f = a.g.a([19, 48, 34, 45, 45, 30, 43]),
                        d = a.g.a([15, 34, 39, 45, 30, 43, 30, 44, 45]),
                        g = a.g.a([0, 41, 41, 37, 30, 13, 30, 48, 44]),
                        l = a.g.a([8, 39, 44, 45, 26, 32, 43, 26, 38]),
                        k = a.g.a([24, 30, 37, 41]);
                    a.b.forEach([e, f, d, g, l, k], function(a) {
                        if ((new RegExp(a)).test(c)) return b[c] = a, !1
                    });
                    return b[c]
                }
            }();
            a.b.as = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    b = {
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
                    var c = a.c.d && a.c.d.document,
                        e = (c && c.getElementsByTagName("article")).length;
                    0 < e && (b.results.article = !0, b.meta_data.num_articles = e);
                    var e = a.c.f,
                        f = a.c.d && a.c.d.innerHeight,
                        e = e && f && e / f;
                    1.5 <= e && (b.results.page_height = !0, b.meta_data.page_height_ratio = e);
                    var e = c && c.getElementsByTagName("meta"),
                        d = {
                            "fb:app_id": 1,
                            "og:site_name": 1,
                            "og:type": 1,
                            "fb:page_id": 1,
                            "twitter:account_id": 1,
                            "twitter:site": 1
                        };
                    a.b.forEach(e, function(a) {
                        if ((a = a.getAttribute("property")) &&
                            d.hasOwnProperty(a)) return b.results.meta_properties = !0, b.meta_data.meta_property_matches.push(a), !1
                    });
                    c = c && c.getElementsByTagName("link");
                    a.b.forEach(c, function(a) {
                        if ("icon" === a.getAttribute("rel") && /favicon\./.test(a.getAttribute("href"))) return b.results.favicon = !0, !1
                    });
                    return b
                }
            }();
            a.b.at = function() {
                var b = a.b.as().results;
                for (prop in b)
                    if (b.hasOwnProperty(prop) && b[prop]) return !0;
                return !1
            };
            a.b.au = function() {
                for (var b = [103, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 46, 110, 101, 116], c = "", e = 0, f = b.length; e <
                    f; e++) c += String.fromCharCode(b[e]);
                return (new RegExp("^[^.]+." + c)).test(a.b.r())
            };
            a.b.av = function() {
                var b = a.c.d.screen;
                if (a.b.i()) {
                    var c;
                    "undefined" !== typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (c = b.width, b = b.height) : (c = b.height, b = b.width) : c = b = 0;
                    return {
                        w: c,
                        h: b
                    }
                }
                if (a.b.j()) {
                    c = a.c.d.devicePixelRatio;
                    var e = 1;
                    .05 > n.abs(b.width / a.c.d.innerWidth - c) && (e = c);
                    return {
                        w: b.width / e,
                        h: b.height / e
                    }
                }
                return {
                    w: b.width,
                    h: b.height
                }
            };
            a.b.aw = function() {
                var a = null;
                "string" === typeof navigator.doNotTrack ?
                    a = navigator.doNotTrack : "string" === typeof navigator.msDoNotTrack ? a = navigator.msDoNotTrack : "string" === typeof window.doNotTrack && (a = window.doNotTrack);
                return !a || "1" !== a[0] && "yes" !== a ? !1 : !0
            };
            a.b.ax = function() {
                var b;
                return function() {
                    if ("undefined" === typeof b) {
                        var c = a.b.w();
                        if (!c) return !1;
                        var e = [a.g.a([39, 34, 28, 36, 72, 28, 40, 38]), a.g.a([39, 34, 28, 36, 35, 43, 72, 28, 40, 38]), a.g.a([29, 34, 44, 39, 30, 50, 72, 28, 40, 38])];
                        b = a.b.ad(e, c)
                    }
                    return b
                }
            }();
            a.b.getAttribute = function(a, c) {
                return a[c] || a.getAttribute(c)
            };
            var g = [function(a) {
                if (!a ||
                    "IFRAME" !== a.nodeName) return !1;
                var c = a.offsetHeight;
                return isNaN(c) || 15 < c || "google_conversion_frame" !== a.name ? !1 : !0
            }];
            a.b.ay = function(b, c) {
                return "undefined" === typeof b || null === b || !1 === b || !a.b.az(b) || b.nodeName && "IMG" == b.nodeName && !b.complete || a.b.filter(g, function(a) {
                    return a(b)
                }).length || !0 === b[MOATALREADYFOUND] ? !1 : !0
            };
            a.b.ba = function(b, c, e) {
                a.h.a(c);
                !0 === e && c.aa && (c.aa[DOM_NODE_KEY] = void 0, c.aa[MOATALREADYFOUND] = void 0);
                !c.hasIframeListener && b.tagName && "iframe" === b.tagName.toLowerCase() && (c.hasIframeListener = !0);
                c.components && c.components.splice(0, 1, b);
                c.aa = b;
                a.i.a.zaxs("adElementUpdate");
                a.b.bb(c.aa);
                a.h.b(c);
                c.periscopeManager && c.periscopeManager.rebuildPixelTargets(b, b.parentNode)
            };
            a.b.bc = function(a) {
                return a.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
            };
            a.b.bd = function(b) {
                var c = [];
                a.b.forEach(b, function(b, f) {
                    var d = typeof b;
                    "number" == d ? c.push(a.b.bc(f) + ":" + a.b.bc(b + "")) : "string" == d ? c.push(a.b.bc(f) + ":" + a.b.bc('"' + b + '"')) : "undefined" == d ? c.push(a.b.bc(f) + ":" + a.b.bc("undefined")) : "boolean" ==
                        d ? c.push(a.b.bc(f) + ":" + a.b.bc(b ? "true" : "false")) : null === b ? c.push(a.b.bc(f) + ":" + a.b.bc("null")) : "object" != d && "function" != d || !b.toString || c.push(a.b.bc(f) + ":" + a.b.bc('"' + b.toString() + '"'))
                }, null, !0);
                c.sort();
                return "{" + c.join(",") + "}"
            };
            a.b.be = function(a) {
                var c = {};
                if ("string" != typeof a || "{" != a.charAt(0)) return !1;
                a = a.slice(1, -1).split(",");
                for (var e = 0; e < a.length; e++) {
                    var f = a[e].split(":");
                    f[1] = unescape(f[1]);
                    "true" == f[1] ? f[1] = !0 : "false" == f[1] ? f[1] = !1 : '"' == f[1].charAt(0) ? f[1] = f[1].slice(1, -1) : f[1] = "undefined" ==
                        f[1] ? void 0 : "null" == f[1] ? null : "NaN" == f[1] ? NaN : parseFloat(f[1]);
                    c[unescape(f[0])] = f[1]
                }
                return c
            };
            a.b.az = function(b) {
                var c = b.offsetWidth,
                    e = b.offsetHeight;
                if (a.b.o && e < a.b.o || a.b.p && c < a.b.p) return !1;
                a.b.forEach(a.b.am(b, 3), function(a) {
                    var b = a.style && a.style.width,
                        d = a.style && a.style.height;
                    a && a.style && "hidden" == a.style.overflow && ("" != b || "" != d) && (a = parseFloat(b), d = parseFloat(d), c = !isNaN(a) && a < c ? a : c, e = !isNaN(d) && d < e ? d : e)
                });
                if (b = a.b.bf(b)) c = b.width < c ? b.width : c, e = b.height < e ? b.height : e;
                return a.c.g() && .9 > c *
                    e / (a.c.d.innerWidth * a.c.d.innerHeight) ? !1 : c * e >= a.b.m
            };
            var k = {};
            a.b.bf = function(b) {
                if (!b || !b.nodeName || "IMG" == !b.nodeName || !b.complete) return !1;
                var c = b.getAttribute("src");
                if (!c) return !1;
                if (k[c]) return k[c];
                try {
                    if ("undefined" !== typeof b.naturalHeight && "undefined" !== typeof b.naturalWidth) {
                        var e = {
                            width: b.naturalWidth,
                            height: b.naturalHeight
                        };
                        return k[b.src] = e
                    }
                } catch (f) {}
                return a.c.h && (a.c.h.src = c, a.c.h.a) ? (e = {
                    width: parseInt(a.c.h.b),
                    height: parseInt(a.c.h.c)
                }, k[c] = e) : !1
            };
            a.b.bg = function() {
                if (!a.c.i) {
                    var b =
                        a.c,
                        c;
                    a: {
                        for (var e = document.getElementsByTagName("script"), f = e.length - 1; - 1 < f; f--)
                            if ((c = e[f]) && c.src && c.src.indexOf && (-1 !== c.src.indexOf("buzzfeedprebidheader126112369715/yi.js") || -1 !== c.src.indexOf("buzzfeedprebidheader126112369715%2Fyi.js")) && ("undefined" === typeof c[MOATALREADYFOUND] || !0 !== c[MOATALREADYFOUND])) {
                                c[MOATALREADYFOUND] = !0;
                                break a
                            }
                        c = void 0
                    }
                    b.i = c
                }
                return a.c.i ? (a.c.i[MOATALREADYFOUND] = !0, a.c.i) : null
            };
            a.b.bh = function(a, c) {
                for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e])
            };
            a.b.bi = function(a) {
                var c,
                    e = /https:/i;
                if (a) c = e.test(a.src || a.href || "http:") ? "https:" : "http:";
                else try {
                    c = window.location.protocol
                } catch (f) {
                    a = document.createElement("a"), a.href = "", c = a.protocol
                }
                return "https:" === c ? "https:" : "http:"
            };
            a.b.bj = function(a) {
                try {
                    return -1 !== (a.src || a.getAttribute("src")).indexOf("psd=1")
                } catch (c) {
                    return !1
                }
            };
            a.b.bk = function(a) {
                for (var c = [], e = 0; e < a.length; e++) c.push(a[e]);
                return c
            };
            a.b.nextElementSibling = function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (; a = a.nextSibling;)
                    if (1 === a.nodeType) return a
            };
            a.b.previousElementSibling = function(a) {
                if (a) {
                    if (a.previousElementSibling) return a.previousElementSibling;
                    for (var c = 0;
                        (a = a.previousSibling) && 1E3 > c;)
                        if (c++, a && 1 === a.nodeType) return a
                }
            };
            a.b.bl = function(a, c, e) {
                "undefined" !== typeof e && (a[c] = e)
            };
            a.b.bm = function(b) {
                return a.b.b(b) ? 0 === b.length : !0
            };
            a.b.filter = function(a, c) {
                for (var e = [], f = 0; f < a.length; f++) c(a[f]) && e.push(a[f]);
                return e
            };
            a.b.bn = function(a, c) {
                for (var e = [], f = 0; f < c.length; f++) e.push(a(c[f]));
                return e
            };
            a.b.reduce = function(b, c, e) {
                if (!a.b.d(b) ||
                    "function" !== typeof c) return !1;
                e = e ? c(e, b[0]) : b[0];
                for (var f = 1; f < b.length; f++) e = c(e, b[f]);
                return e
            };
            a.b.indexOf = function(b, c) {
                if (!b) return -1;
                if (a.b.b(b)) {
                    for (var e = 0, f = b.length; e < f; e++)
                        if (b[e] === c) return e;
                    return -1
                }
                return "string" === typeof b ? c || "string" !== typeof c ? b.indexOf(c) : -1 : -1
            };
            a.b.lastIndexOf = function(b, c) {
                if (!b) return -1;
                if (a.b.b(b)) {
                    for (var e = b.length - 1; 0 <= e; e--)
                        if (b[e] === c) return e;
                    return -1
                }
                return "string" === typeof b ? "" === c ? -1 : b.lastIndexOf(c) : -1
            };
            a.b.bo = function(b, c) {
                if (!b || !c) return !1;
                var e =
                    a.b.bp(c);
                if (!e) return !1;
                if (a.b.hasChildNodes(e)) {
                    var f = e.childNodes[n.max(0, e.childNodes.length - 1)] || null;
                    e.insertBefore(b, f)
                } else e.appendChild(b);
                return e
            };
            a.b.bq = function(b, c, e) {
                if ("string" != typeof b || !c || !document) return !1;
                e = e || document.createElement("script");
                e.type = "text/javascript";
                c = a.b.bo(e, c);
                if (!c) return !1;
                e.src = b;
                return c
            };
            a.b.hasChildNodes = function(a) {
                return a && a.childNodes && 0 < a.childNodes.length
            };
            a.b.bp = function(b) {
                if (!b) return !1;
                if ("OBJECT" !== b.nodeName && "EMBED" !== b.nodeName) return b;
                b = a.b.am(b);
                var c = !1;
                a.b.forEach(b, function(a) {
                    if (a && "OBJECT" !== a.nodeName && "EMBED" !== a.nodeName) return c = a, !1
                });
                return c
            };
            a.b.br = function(a, c) {
                if ("undefined" === typeof a) return !1;
                for (var e = 0, f = c.length; e < f; e++)
                    if ("string" == typeof c[e]) {
                        try {
                            a = a[c[e]]
                        } catch (d) {}
                        if ("undefined" === typeof a) return !1
                    }
                return a
            };
            a.b.bs = function(a) {
                return B && "undefined" !== typeof a && B[a] ? B[a] : !1
            };
            a.b.bt = function(b, c) {
                for (var e = a.b.am(b, 50, !0), f = 0; f < e.length; f++)
                    if (e[f] === c) return !0;
                return !1
            };
            a.b.bu = function(b) {
                if (!b || !b.aa) return !1;
                if ("number" !== typeof b.ADAREA) {
                    var c, e;
                    if (b.isCompositeAd && b.components && 1 < b.components.length)
                        for (c = b.ADAREA = 0; c < b.components.length; c++) b.ADAREA += b.components[c].offsetWidth * b.components[c].offsetHeight;
                    else b.elementRect ? (c = b.elementRect.right - b.elementRect.left, e = b.elementRect.bottom - b.elementRect.top, b.ADAREA = c * e) : b.ADAREA = b.aa.offsetWidth * b.aa.offsetHeight;
                    a.c.j() && a.j.realEstateMeasurements && (c = a.j.realEstateMeasurements.w, e = a.j.realEstateMeasurements.h, b.ADAREA = c * e)
                }
                return b.ADAREA
            };
            a.b.bb =
                function(b) {
                    if (!(!b || b && b.CLIPCHECKINGTARGET)) {
                        var c = a.b.am(b, 3),
                            e;
                        c && 0 < c.length && (a.b.forEach(c, function(a) {
                            if (a && a.style && a.style.clip) return e = a, !1
                        }), !e && b.style && b.style.clip && (e = b), e && (b.CLIPCHECKINGTARGET = e))
                    }
                };
            var m = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            a.b.bv = function(b) {
                b = b.match(m);
                var c = !1;
                b && (b = a.b.bn(function(a) {
                    return parseInt(a, 10)
                }, b), c = {
                    top: b[1],
                    right: b[2],
                    bottom: b[3],
                    left: b[4]
                });
                return c
            };
            a.b.bw = function(a, c) {
                var e = "",
                    f;
                for (f in a)
                    if (a.hasOwnProperty(f)) var d = encodeURIComponent(a[f]),
                        e = e + ("&" + f + "=" + d);
                return e.slice(1)
            };
            a.b.bx = function(a, c) {
                var e = new u,
                    e = [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-");
                a += c + e;
                var f = 0;
                if (0 == a.length) return f;
                for (e = 0; e < a.length; e++) var d = a.charCodeAt(e),
                    f = (f << 5) - f + d,
                    f = f & f;
                return n.abs(f)
            };
            a.b.by = function() {
                var a = function() {
                    var a = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0,
                        b = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                    return a || b ? !document.elementFromPoint(a, b) : !0
                }();
                return function(c,
                    e, f) {
                    if (!a) {
                        var d = f.defaultView || f.parentWindow || window;
                        c += d.pageXOffset;
                        e += d.pageYOffset
                    }
                    return f.elementFromPoint(c, e)
                }
            }();
            a.b.bz = function(a, c) {
                return Object.prototype.hasOwnProperty.call(a, c)
            };
            a.b.ca = function(b) {
                if (!b || !b.style || !b.style.filter) return !1;
                b = b.style.filter.split(" ");
                var c = !1,
                    e;
                a.b.forEach(b, function(a) {
                    var b = a.match(/\d+/);
                    a.search(/opacity/) && b && 0 < b.length && (e = parseFloat(b.join("")), !1 === c || e < c) && (c = e)
                });
                return c
            };
            a.b.cb = function(b, c) {
                var e;
                if (!b) return 100;
                if (c && b.style && "hidden" ===
                    b.style.visibility) return 0;
                e = b.style && b.style.opacity ? parseFloat(b.style.opacity) : a.b.ca(b);
                return a.b.cc(e) ? e : 100
            };
            a.b.cd = function(b, c) {
                var e = -1;
                if (a.c.d.getComputedStyle) {
                    var f = a.c.d.getComputedStyle(b);
                    if (!f) return e;
                    if (c && "hidden" === f.visibility) return 0;
                    e = parseFloat(f.opacity)
                }
                return e
            };
            a.b.ce = function(b, c, e) {
                if (!b || !b.aa) return !1;
                "undefined" === typeof b.parentNodeTree && (b.parentNodeTree = a.b.am(b.aa.parentElement, 50, !0), c && b.parentNodeTree.push(b.aa));
                var f = 100,
                    d, g;
                a.b.forEach(b.parentNodeTree,
                    function(b) {
                        d = a.b.cb(b, e);
                        0 === d && (g = a.b.cd(b, e), a.b.cc(g) && g >= d && (d = g));
                        d < f && (f = d);
                        if (0 === f) return !1
                    });
                return f
            };
            a.b.cf = function(a, c, e) {
                return function() {
                    c.apply(e || null, a.concat(a.slice.call(arguments)))
                }
            };
            a.b.ak = function(a) {
                try {
                    var c = a && a.ownerDocument;
                    return c && (c.defaultView || c.parentWindow)
                } catch (e) {
                    return !1
                }
            };
            a.b.cg = function(b, c, e) {
                if (!b || !c) return !1;
                var f = [];
                "number" !== typeof e && (e = 50);
                for (var d = 0; d < e; d++)
                    if (c != c.parent) {
                        if (b = a.d.b(b, c)) f.push(b);
                        else break;
                        c = c.parent
                    } else break;
                return f
            };
            a.b.ch = function(a) {
                a = n.max(4, a);
                return ((1 + n.random()) * n.pow(16, a) | 0).toString(16).substring(0, a)
            };
            a.b.ci = function() {
                var b = a.b.ch;
                return b(4) + "-" + b(4) + "-" + b(4) + "-" + b(4)
            };
            a.b.cj = function(a) {
                window && window.clearTimeout && window.clearTimeout(a)
            };
            a.b.ck = function(a) {
                window && window.clearInterval && window.clearInterval(a)
            };
            var l = function(b, c) {
                if (a.b.f(c.toString)) return c.toString();
                if (a.b.f(b && b.Function.prototype.toString)) return c.toString = b.Function.prototype.toString, c.toString();
                var e = a.c.d !== b && a.c.d &&
                    a.c.d.Function.prototype.toString;
                if (a.b.f(e)) return c.toString = e, c.toString();
                if (a.c.k && 8 >= a.b.k()) return c.toString();
                var e = b || window,
                    f = e.document.createElement("IFRAME");
                f.style.display = "none";
                f.style.width = "0px";
                f.style.height = "0px";
                f.width = "0";
                f.height = "0";
                a.b.bo(f, e.document.documentElement);
                f.contentWindow && (c.toString = f.contentWindow.Function.prototype.toString);
                var d = c.toString();
                e.document.documentElement.removeChild(f);
                return d
            };
            a.b.toString = function(b, c) {
                c = c || a.c.d;
                var e;
                try {
                    e = l(c, b)
                } catch (f) {
                    e =
                        b.toString()
                }
                return e
            };
            a.b.cl = function(b, c, e) {
                b = a.b.toString(b, e);
                if (a.c.l()) e.eval("(" + b + ")(" + c + ")");
                else if (a.c.m(e))(new e.Function("(" + b + ")(" + c + ")"))();
                else {
                    var f = e.document.createElement("script");
                    f.type = "text/javascript";
                    f.text = "(" + b + ")(" + c + ")";
                    a.b.bo(f, e.document.body)
                }
            };
            a.b.cm = function(b, c, e, f) {
                function d(a, b) {
                    try {
                        return f(b[a])
                    } catch (c) {}
                }
                var g, l;
                if ("string" !== typeof b) return !1;
                "function" !== typeof f && (f = function(a) {
                    return a
                });
                g = window;
                l = d(b, g);
                if (!l) {
                    c = a.d.c(g, "number" === typeof c ? c : 20);
                    if (!c) return !1;
                    for (var k = 0, h = c.length; k < h && (g = c[k], l = d(b, g), "undefined" === typeof l); k++);
                }
                return e ? [l, g] : l
            };
            a.b.cn = function(a, c) {
                var e = a.toString();
                c && (e = "(" + e + "(" + c + "))");
                return "(function(){try{return(" + e + ")()}catch(e){return false}})()"
            };
            a.b.co = function() {
                if (!a.c.n) return !1;
                var b = window && window.navigator,
                    c = (b = b && b.userAgent) && "string" === typeof b,
                    e = /Version\/(\d*)/,
                    f = /CPU.*OS\s(\d*)_/,
                    e = (e = c && b.match(e)) && 1 < e.length ? parseInt(e[1], 10) : !1;
                "number" !== typeof e && (e = (e = c && b.match(f)) && 1 < e.length ? parseInt(e[1], 10) : !1);
                return e
            };
            a.b.cp = function(a) {
                if ("object" === typeof a) {
                    if (Object.keys) return Object.keys(a);
                    var c = [],
                        e;
                    for (e in a) c.push[e];
                    return c
                }
            };
            a.b.every = function(a, c) {
                if ("object" !== typeof a || !a || "function" !== typeof c) return !1;
                var e = !0,
                    f;
                for (f in a)
                    if (e = c(a[f]), !1 === e || "boolean" !== typeof e) break;
                return e
            };
            a.b.some = function(a, c) {
                if ("object" !== typeof a || !a || "function" !== typeof c) return !1;
                for (var e in a) {
                    var f = c(a[e]);
                    if ("boolean" !== typeof f) break;
                    if (f) return !0
                }
                return !1
            };
            a.b.cq = function(b) {
                return b && a.b.b(b) &&
                    0 < b.length ? b[0] : b
            };
            a.b.cr = function(b, c) {
                win = c || window;
                if (!win || !win.performance || !win.performance.getEntries) return {
                    msg: "ns"
                };
                var e = win.performance.getEntries(),
                    f = [];
                a.b.forEach(e, function(a) {
                    b.test(a.name) && f.push(d(a))
                });
                return 0 === f.length ? {
                    msg: "nf"
                } : f
            };
            a.b.cs = function(b, c, e) {
                return a.b.cc(b) && a.b.cc(c) && a.b.cc(e) ? n.abs(b - c) <= e : !1
            };
            a.b.cc = function(a) {
                return "number" === typeof a && !isNaN(a)
            };
            a.b.ct = function(b, c) {
                if (!a.b.b(c)) return !1;
                var e = 0;
                a.b.forEach(c, function(a) {
                    a === b && e++
                });
                return e
            }
        })(q);
        (function(a) {
            a.d = {};
            a.d.d = function(a) {
                try {
                    var d = typeof a.location.toString;
                    if ("undefined" === d || "unknown" === d) return !0;
                    var g = typeof a.document;
                    if ("undefined" === g || "unknown" === g) return !0;
                    var k = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
                    return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !== typeof k ? !0 : !1
                } catch (m) {
                    return !0
                }
            }
        })(q);
        (function(a) {
            a.d.e = function(h) {
                if (!h) return null;
                try {
                    if (h.moatHostileIframe) return null;
                    var d = h.getAttribute("src");
                    if (d && d.slice && "http" ===
                        d.slice(0, 4) && a.b.ai(d) != a.b.ai(pageWin.location.toString())) return h.moatHostileIframe = !0, null;
                    var g = h && (h.contentDocument || h.contentWindow && h.contentWindow.document);
                    if (g && "string" === typeof g.location.toString()) return g;
                    h.moatHostileIframe = !0;
                    return null
                } catch (k) {
                    return h.moatHostileIframe = !0, null
                }
            };
            a.d.b = function(h, d) {
                d = d || a.b.ak(h);
                try {
                    return d && d.frameElement
                } catch (g) {
                    return !1
                }
            };
            a.d.f = function(h, d) {
                var g;
                a.b.forEach(h.getElementsByTagName("iframe"), function(a) {
                    if (a && a.contentWindow && a.contentWindow ==
                        d) return g = a, !1
                });
                return g
            };
            a.d.g = function(h) {
                if (h = a.d.b(h)) try {
                    return h.parentNode
                } catch (d) {}
                return null
            };
            a.d.h = function(h, d) {
                if (!h) return !1;
                var g = 0,
                    k = [];
                for (d = d || 10; g < d;)
                    if (g++, h = a.d.b(h)) k.push(h);
                    else return k
            };
            a.d.c = function(h, d) {
                if (!h) return !1;
                var g = 0,
                    k = [h],
                    m;
                for (d = d || 10; g < d;) {
                    g++;
                    try {
                        if (h = (m = h.frameElement) && a.b.ak(m), m && h && !a.d.d(h)) k.push(h);
                        else return k
                    } catch (l) {
                        break
                    }
                }
                return k
            };
            a.d.i = function(h, d, g) {
                function k(d, g, b) {
                    var c = [];
                    d && c.push(d);
                    b = b || 0;
                    if (10 < b || !d || !d.frames) return c;
                    var e;
                    try {
                        e =
                            isNaN(d.frames.length) ? 100 : d.frames.length
                    } catch (y) {
                        e = 100
                    }
                    for (var f = 0; f < e; f++) try {
                        try {
                            if (void 0 == d.frames[f]) break
                        } catch (y) {
                            break
                        }
                        g && !a.d.j(d.frames[f]) ? c.push(d.frames[f]) : c = c.concat(k(d.frames[f], g, b + 1))
                    } catch (y) {
                        break
                    }
                    return c
                }
                return k(h, d, g)
            };
            a.d.k = function(a, d) {
                d = "number" == typeof d && 0 < d ? d : 15;
                var g = [],
                    k;
                try {
                    if (a) {
                        k = a.top;
                        for (var m = 0; m < d; m++)
                            if ((a = a.parent) && a != a.top) g.push(a);
                            else break;
                        g.push(k)
                    }
                } catch (l) {
                    return []
                }
                return g
            };
            a.d.l = [];
            a.d.j = function(h) {
                for (var d, g = 0, k = a.d.l.length; g < k; g++) a.d.l[g].win ==
                    h && (d = a.d.l[g]);
                if (!d) {
                    d = {
                        win: h,
                        friendly: !1
                    };
                    try {
                        h.document && (d.friendly = !0)
                    } catch (m) {}
                }
                return d.friendly
            };
            a.d.m = function(h, d, g) {
                h = a.d.c(h).pop();
                h = a.d.i(h, !0);
                for (var k = 0, m = h.length; k < m; k++)
                    if (h[k] == d) {
                        if (g && d.parent && a.d.d(d.parent)) break;
                        return !0
                    }
                return !1
            };
            a.d.a = function() {
                if (a.c.b) return window.top;
                for (var h = 0, d = window; 50 > h;) {
                    h++;
                    if (d === window.top || a.d.d(d.parent)) break;
                    d = d.parent
                }
                return d
            }
        })(q);
        (function(a) {
            function h(a) {
                return function() {
                    var d = !1;
                    return function(h) {
                        try {
                            return a && a.apply ? a.apply(null,
                                arguments) : a(h)
                        } catch (y) {
                            if (!d) {
                                d = !0;
                                var l = (new u).getTime();
                                window["Moat#ETS"] || (window["Moat#ETS"] = l);
                                window["Moat#EMC"] || (window["Moat#EMC"] = 0);
                                var b = 36E5 <= l - window["Moat#ETS"],
                                    c = "";
                                try {
                                    c = a.toString()
                                } catch (z) {
                                    c = "failed"
                                }
                                c = y.name + " in closure (cb): " + y.message + ", stack=" + y.stack + ", \ncb=" + c + "\n";
                                if (!b && 10 > window["Moat#EMC"]) {
                                    window["Moat#EMC"]++;
                                    try {
                                        var e = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("BUZZFEED_PREBID_HEADER1") + "&ac=1&k=" + escape(c) + "&ar=" + escape("dfc91e5-clean") +
                                            "&j=" + escape(document.referrer) + "&cs=" + (new u).getTime(),
                                            f = new Image(1, 1);
                                        f.src = e
                                    } catch (z) {}
                                } else if (b) {
                                    window["Moat#EMC"] = 1;
                                    window["Moat#ETS"] = l;
                                    try {
                                        e = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("BUZZFEED_PREBID_HEADER1") + "&ac=1&k=" + escape(c) + "&ar=" + escape("dfc91e5-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new u).getTime(), f = new Image(1, 1), f.src = e
                                    } catch (z) {}
                                }
                            }
                        }
                    }
                }()
            }
            a.k = {};
            var d = {};
            a.k.a = d;
            a.k.b = function(d, k) {
                if (!d || "string" !== typeof k || !d[k] || d == window) return !1;
                if ("string" === typeof d.nodeName && ("OBJECT" === d.nodeName || "EMBED" === d.nodeName)) {
                    var h = a && a.l && a.l[k];
                    if (h && h !== d[k]) return h
                }
                return !1
            };
            a.k.c = function(g, k, m, l) {
                var b, c, e = !1;
                "touchstart" === k && a.c.o && (e = {
                    passive: !0
                });
                l ? d[k + l] ? m = d[k + l] : (m = h(m), d[k + l] = m) : m = h(m);
                if (g.addEventListener) l = "addEventListener", b = "";
                else if (g.attachEvent) l = "attachEvent", b = "on";
                else return !1;
                if (c = a.k.b(g, l)) try {
                    c.call(g, b + k, m, e)
                } catch (f) {
                    g[l](b + k, m, e)
                } else if (g && l && g[l]) try {
                    g[l](b + k, m, e)
                } catch (f) {
                    return !1
                }
            };
            a.k.d = function(g, k,
                h, l) {
                var b, c;
                if (!g) return !1;
                h = l ? d[k + l] : h;
                if (g.removeEventListener) l = "removeEventListener", b = "";
                else if (g.detachEvent) l = "detachEvent", b = "on";
                else return delete d[fullKey], !1;
                if (c = a.k.b(g, l)) try {
                    c.call(g, b + k, h, !1)
                } catch (e) {
                    g[l](b + k, h, !1)
                } else try {
                    g[l](b + k, h, !1)
                } catch (e) {}
            };
            a.k.e = function(d, k) {
                d = h(d);
                var m;
                window && window.setInterval && (m = window.setInterval(d, k), 1 == m && (a.b.ck(m), m = window.setInterval(d, k)), F.push(m));
                return m
            };
            a.k.f = function(d, k) {
                d = h(d);
                var m;
                window && window.setTimeout && (m = window.setTimeout(d,
                    k), 1 == m && (a.b.cj(m), m = window.setTimeout(d, k)), E.push(m));
                return m
            };
            a.k.g = function(d, k, m, l) {
                if (!l) return !1;
                l += "";
                r[l] && a.b.cj(r[l].tid);
                r[l] = {};
                r[l].callback = h(d);
                r[l].params = k;
                r[l].interval = m;
                r[l].tid = a.k.f(a.k.h(l), m);
                callbacks = null
            };
            a.k.h = function(d) {
                return function() {
                    if (!r || !r[d]) return !1;
                    var k = r[d].callback(r[d].params);
                    if ("boolean" === typeof k && !1 === k) return a.b.cj(r[d].tid), r[d] = !1;
                    r[d].tid = a.k.f(a.k.h(d), r[d].interval);
                    time = d = null
                }
            };
            a.k.i = function(d) {
                r[d] && (a.b.cj(r[d].tid), r[d] = !1)
            };
            a.k.j =
                function() {
                    return r
                };
            a.k.k = function(d, k, h, l) {
                var b = 0,
                    c = function() {
                        b += 1;
                        !0 !== d() && (b < k ? a.k.f(c, h) : "function" === typeof l && l())
                    };
                c()
            };
            a.k.l = h
        })(q);
        (function(a) {
            function h() {
                var a = window.navigator && window.navigator.userAgent;
                return (a = a && a.match(/Chrom(e|ium)\/([0-9]+)\./)) ? parseInt(a[2], 10) : !1
            }
            a.c = {};
            var d = a.d.d(window.parent);
            a.c.p = window != window.parent;
            a.c.q = a.c.p && !d;
            a.c.b = d ? !1 : !a.d.d(window.top);
            a.c.d = a.c.b ? window.top : a.c.q ? window.parent : window;
            a.c.r = function(a) {
                var d, h, l, b = 0,
                    c = 0;
                try {
                    d = a.document;
                    h = d.documentElement;
                    l = d.body;
                    var e = document.getElementById("mianahwvc");
                    if (e) return e.getBoundingClientRect();
                    "undefined" !== typeof a.innerWidth ? (b = a.innerWidth, c = a.innerHeight) : "CSS1Compat" === d.compatMode && 5 !== d.documentMode || !l || "undefined" === typeof l.clientWidth ? h && "undefined" !== typeof h.clientWidth && (b = h.clientWidth, c = h.clientHeight) : (b = l.clientWidth, c = l.clientHeight)
                } catch (f) {}
                return {
                    width: b,
                    height: c,
                    left: 0,
                    right: b,
                    top: 0,
                    bottom: c
                }
            };
            a.c.s = function() {
                var d = a.c.d;
                if (!d) return !1;
                try {
                    var k = d.document &&
                        d.document.body,
                        h = d.document && d.document.documentElement
                } catch (b) {}
                try {
                    var l = a.c.t();
                    l && (a.c.u = l.availWidth, a.c.v = l.availHeight, a.c.w = l.width, a.c.x = l.height)
                } catch (b) {
                    a.c.u = a.c.u || 0, a.c.v = a.c.v || 0, a.c.w = a.c.w || 0, a.c.x = a.c.x || 0
                }
                l = a.c.r(d);
                a.c.y = l.width;
                a.c.z = l.height;
                try {
                    a.c.aa = d.outerWidth || d.document && d.document.body && d.document.body.offsetWidth || 0, a.c.ab = d.outerHeight || d.document && d.document.body && d.document.body.offsetHeight || 0
                } catch (b) {
                    a.c.aa = 0, a.c.ab = 0
                }
                k && h && (a.c.f = n.max(k.scrollHeight, k.offsetHeight,
                    h.clientHeight, h.scrollHeight, h.offsetHeight), a.c.ac = k.scrollTop || h.scrollTop || d.pageYOffset || 0)
            };
            a.c.s();
            a.c.a = 0 <= String(Function.prototype.toString).indexOf("[native code]");
            a.c.ad = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            a.c.k = a.b.l();
            a.c.ae = !!window.chrome && a.b.f(window.chrome.csi, !0);
            a.c.af = !!("opr" in window && "addons" in window.opr && a.b.f(window.DetachedViewControlEvent));
            a.c.ag = !a.c.ae && Error.propertyIsEnumerable("captureStackTrace") && void 0 !== window.onorientationchange;
            a.c.ah =
                a.c.af || a.c.ag;
            a.c.ai = a.c.ae && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore);
            a.c.aj = a.c.ae && !a.c.ah && void 0 !== window.onorientationchange;
            a.c.ak = a.c.ai || a.c.aj;
            a.c.al = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
            a.c.n = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || window.HTMLVideoElement && window.HTMLVideoElement.prototype && "webkitWirelessVideoPlaybackDisabled" in
                window.HTMLVideoElement.prototype;
            a.c.am = function() {
                var d;
                return function() {
                    if ("undefined" !== typeof d) return d;
                    d = {
                        isInApp: 0,
                        env: "Not app"
                    };
                    a.b.i() ? (d.isInApp = 1, d.env = "iOS") : a.b.j() && (d.isInApp = 1, d.env = "Android");
                    return d
                }
            }();
            a.c.an = h;
            a.c.ao = a.c.ai && 40 <= h();
            a.c.ap = function() {
                if (!a.c.ao) return !1;
                var d = a.g.a([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                if (navigator && navigator[d]) return !0;
                if (66 > h()) {
                    var d = a.g.a([28, 33, 43, 40, 38, 30]),
                        k = a.g.a([43, 46, 39, 45, 34, 38, 30]),
                        m = a.g.a([28, 40, 39, 39, 30, 28, 45]);
                    return "undefined" !==
                        typeof window[d] && !(window[d] && window[d][k] && window[d][k][m])
                }
                return !1
            };
            a.c.aq = function() {
                if (a.g.b !== a.g.c.toString()) return !1;
                var d = a.g.a([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                return window && window.navigator && window.navigator[d]
            };
            a.c.ar = function() {
                if (a.g.b !== a.g.d.toString()) return !1;
                var d = a.g.a([26, 37, 30, 43, 45]),
                    h = a.g.a([28, 40, 39, 31, 34, 43, 38]),
                    m = a.g.a([41, 43, 40, 38, 41, 45]);
                return !a.c.am().isInApp && a.c.n && a.c.a && !a.b.f(window[d], !0) && !a.b.f(window[h], !0) && !a.b.f(window[m], !0)
            }
        })(q);
        (function(a) {
            function h(b,
                e) {
                if (a.c.ba() && a.c.bh || !e && !a.c.am().isInApp) return !1;
                var f = c;
                return (c = f = f && f[0] ? f : a.b.cm("mraid", 20, !0)) ? b ? f : f[0] : !1
            }

            function d(a) {
                return a && a.getVendor && "function" === typeof a.getVendor && a.getVendor()
            }

            function g(a) {
                return a && a.getVendorVersion && "function" === typeof a.getVendorVersion && a.getVendorVersion() + ""
            }

            function k(b) {
                function c(a) {
                    if ((a = a && a.isViewable) && "function" === typeof a) try {
                        return "undefined" !== typeof a()
                    } catch (b) {}
                    return !1
                }
                return b ? e ? !0 : e = function(b) {
                    var c = "";
                    a.b.i() ? c = "ios" : a.b.j() &&
                        (c = "android");
                    var e = {
                            AdMarvel: {
                                ios: "340",
                                android: "270"
                            },
                            AdColony: {
                                ios: "3.0",
                                android: "3.0"
                            }
                        }[d(b)],
                        c = e ? e[c] : null;
                    b = g(b);
                    return c ? 0 !== a.c.bg(b, c) : !1
                }(b) && c(b) : !1
            }

            function m(b, c) {
                b.qmrv(function(b) {
                    c.preventTryFindingAdAgain = !0;
                    a.r.a(c);
                    a.q.b(c)
                }, c.MMAK_ID)
            }

            function l(b, c) {
                parseInt(a.c.dw("isNative")) && b.hgen && b.hgen(function(b) {
                    b = "click" !== b ? 23 : 3;
                    c && (c.dm || (c.counters && c.counters.strictDwell && c.counters.strictDwell.tCur && (c.cb = c.counters.strictDwell.tCur), c.dm = 1), data = {}, data.e = b, data.q = c.aq[b]++, a.a.b(c,
                        data))
                }, c.MMAK_ID)
            }

            function b() {
                var b = window.navigator && window.navigator.userAgent,
                    c = 53 <= a.c.an();
                return c ? c : b && -1 < b.search("Spotify")
            }
            a.c.as = "26";
            a.c.at = "MoatSuperV";
            a.c.au = a.c.at + a.c.as;
            a.c.av = 11;
            a.c.aw = window && window["Moat#G" + a.c.as] || {};
            a.c.ax = "Moat#G" + a.c.as;
            window[a.c.ax] = a.c.aw;
            a.c.aw.a || (a.c.aw.a = n.floor(n.random() * n.pow(10, 12)));
            a.c.ay = n.floor(n.random() * n.pow(10, 12));
            a.c.az = function() {
                return function() {}
            }();
            a.c.ba = function() {
                var b = !1;
                if ("undefined" !== typeof a.c.az()) b = !0;
                else try {
                    var c =
                        window.top.frames,
                        b = c.omid_v1_present || c.omid
                } catch (e) {
                    b = !1
                }
                return function() {
                    return b
                }
            }();
            a.c.bb = function() {
                var b;
                return function(c) {
                    b || (b = {}, a.m.a(b));
                    return b[c]
                }
            }();
            a.c.bc = (new u).getTime();
            a.c.bd = !0;
            a.c.be = !0;
            a.c.bf = !1;
            a.c.bf = !0;
            a.c.bg = function(a, b) {
                a = a.split(".");
                b = b.split(".");
                for (var c = 0; 3 > c; c++) {
                    var e = parseInt(a[c]),
                        f = parseInt(b[c]);
                    if (e && isNaN(f)) return 1;
                    if (f && isNaN(e)) return 0;
                    if (e > f) return 1;
                    if (f > e) return 0
                }
                return 2
            };
            var c, e = !1;
            a.c.bi = h;
            a.c.bj = function() {
                return !!h()
            };
            a.c.bk = function() {
                var a =
                    h(!0);
                return a && a[1]
            };
            a.c.bl = function() {
                if (!a.c.am().isInApp) return !1;
                var b = h();
                return b && k(b)
            };
            a.c.bm = a.c.bl;
            a.c.bn = a.c.bl;
            a.c.bo = function() {
                var a = h();
                return a && d(a)
            };
            a.c.bp = function() {
                var a = h();
                return a && g(a)
            };
            a.c.bq = function() {
                return !1
            };
            a.c.br = function() {
                if (a.c.bj() && a.c.bl() && a.k && a.k.g) {
                    var b = "___mraid_loop___" + (new u).getTime(),
                        c = a.b.br(a.c.bk(), ["mraid", "isViewable"]);
                    c && a.k.g(function() {
                        return c() ? (a.c.bq = function() {
                            return !0
                        }, !1) : !0
                    }, {}, 300, b)
                }
            };
            a.c.bs = function() {
                return !1
            };
            a.c.bt = !1;
            var f =
                function() {
                    var b = function(b) {
                            if (a.c.am().isInApp) return !1;
                            var c = a.n && a.n.a();
                            if (a.c.bu || c || a.c.bv()) return a.c.bu || c || a.c.bv(), !1;
                            b = a.b.br(b, ["$sf"]);
                            if (!b) return !1;
                            var e = b.ext;
                            b = e && e.geom;
                            var c = [
                                    ["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")
                                ],
                                f, d = !1;
                            if (e && b && "function" === typeof b) try {
                                if ((b = b()) && b.win) {
                                    if (a.b.forEach(b.win, function(a) {
                                            if (a && ("number" === typeof a || "string" === typeof a) && 0 !== parseFloat(a, 10)) return d = !0, !1
                                        }), !d) return !1
                                } else return !1;
                                if (b.par) return !0;
                                for (var e = 0, t = c.length; e <
                                    t; e++) {
                                    f = c[e][0];
                                    for (var g = 1, l = c[e].length; g < l; g++)
                                        if ("undefined" === typeof b[f][c[e][g]]) return !1
                                }
                                return !0
                            } catch (h) {}
                            return !1
                        },
                        c, e, f, d;
                    a.c.bw = function() {
                        if (d) return !0;
                        c = window;
                        e = document;
                        d = b(c);
                        f = !(!d && !c.$sf);
                        if (!d && a.c.q)
                            for (var g = 0; 20 > g && !d; g++) {
                                var l = a.d.b(e.body);
                                if (!1 !== l && !l) break;
                                e = (c = a.b.ak(l)) && c.document;
                                d = d || b(c);
                                f = f || d || c.$sf
                            }
                        return d
                    };
                    a.c.bx = function() {
                        return a.c.bw() && c
                    };
                    a.c.by = function() {
                        "undefined" === typeof d && a.c.bw();
                        return f
                    }
                };
            a.c.bz = !1;
            a.c.ca = !1;
            a.c.cb = null;
            a.c.bx = function() {
                f();
                return a.c.bx()
            };
            a.c.by = function() {
                f();
                return a.c.by()
            };
            a.c.bw = function() {
                f();
                return a.c.bw()
            };
            var y = function() {
                var b = function(b) {
                        return a.c.am().isInApp ? !1 : a.b.br(b, ["context", "observeIntersection"]) ? !0 : !1
                    },
                    c = window,
                    e = document,
                    f = b(c),
                    d = !(!f && !c.context);
                if (!f && a.c.q)
                    for (var g = 0; 20 > g && !f; g++) {
                        e = a.d.b(e.body);
                        if (!1 !== e && !e) break;
                        e = (c = a.b.ak(e)) && c.document;
                        f = f || b(c);
                        d = d || f || c.context
                    }
                a.c.cc = function() {
                    return f && c
                };
                a.c.cd = function(a) {
                    "boolean" === typeof a && (f = a);
                    return f
                };
                a.c.ce = function() {
                    return d
                }
            };
            a.c.cc = function() {
                y();
                return a.c.cc()
            };
            a.c.ce = function() {
                y();
                return a.c.ce()
            };
            a.c.cd = function() {
                y();
                return a.c.cd()
            };
            a.c.e = function() {
                var b = a.b.cm("context");
                if (b && a.b.br(b, ["observeIntersection"])) return b;
                b = a.b.cm("AMP_CONTEXT_DATA");
                if (a.b.br(b, ["initialIntersection"])) return b
            };
            var z = function() {
                var b, c = function(c) {
                        return (b = a.b.br(c, ["amazonmobileadsviewablebridge"])) && "function" === typeof b.addEventListener && "function" === typeof b.getVersion ? !0 : b = !1
                    },
                    e = document,
                    f = window,
                    d = c(f),
                    g = b && 1.1 <= b.getVersion();
                if (!d && a.c.q)
                    for (var l = 0; 20 > l && !d; l++) {
                        e = a.d.b(e.body);
                        if (!1 !== e && !e) break;
                        e = (f = a.b.ak(e)) && f.document;
                        d = d || c(f);
                        g = g || b && 1.1 <= b.getVersion()
                    }
                a.c.cf = function() {
                    return d && f
                };
                a.c.cg = function() {
                    return d
                };
                a.c.ch = function() {
                    return g
                };
                a.c.ci = function() {
                    return b
                }
            };
            a.c.cf = function() {
                z();
                return a.c.cf()
            };
            a.c.cg = function() {
                z();
                return a.c.cg()
            };
            a.c.ch = function() {
                z();
                return a.c.ch()
            };
            a.c.ci = function() {
                z();
                return a.c.ci()
            };
            a.c.cj = function() {
                return a.c.cg() && a.c.ch()
            };
            a.c.ck = !1;
            a.c.o = function() {
                var a = !1;
                try {
                    var b =
                        Object.defineProperty({}, "passive", {
                            get: function() {
                                a = !0
                            }
                        });
                    window.addEventListener("test", null, b);
                    window.removeEventListener("test", null, b)
                } catch (c) {}
                return a
            }();
            a.c.t = function() {
                var b = a.m && a.m.b();
                if (b) return b;
                if (!a.c.d || !a.c.d.screen) return null;
                b = a.c.d.screen;
                return {
                    width: b.width,
                    height: b.height,
                    availWidth: b.availWidth,
                    availHeight: b.availHeight
                }
            };
            a.c.cl = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    var c = a.c.d,
                        e = a.b.av();
                    if (a.c.d.navigator.standalone) b = !0;
                    else {
                        var f = c.innerWidth /
                            e.w,
                            c = c.innerHeight / e.h,
                            f = !isNaN(f) && isFinite(f) && .9 <= f && 1.1 >= f,
                            c = !isNaN(c) && isFinite(c) && .75 <= c && 1.1 >= c;
                        b = f && c
                    }
                    a.c.d.MoatMAK ? a.c.d.MoatMAK.namespace && (b = !1) : (f = a.c.d) && f.imraid && "function" === typeof f.imraid.getVendorName && "inmobi" === f.imraid.getVendorName() && (b = !1);
                    return b
                }
            }();
            a.c.cm = function() {
                var b = a.c.am().isInApp ? 0 : void 0;
                a.c.g() ? b = 3 : a.c.cl() && (b = a.c.cn() ? 1 : 2);
                return b
            };
            a.c.cn = function() {
                if (a.c.ba()) return !1;
                var b = a.c.cl(),
                    c = a.b.w(),
                    e = a.c.bj(),
                    f = window.location && ("applewebdata:" === window.location.protocol ||
                        "data:" === window.location.protocol),
                    c = "-" === c || "" === c.replace(/^\s+|\s+$/gm, "");
                return b && !(c || e || f)
            };
            a.c.g = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    b = a.c.co();
                    b = a.c.cn() ? !1 : (b = b || a.b.j()) || a.b.i();
                    return b
                }
            }();
            a.c.cp = function() {
                return a.c.d.webkit && a.c.d.webkit.messageHandlers && a.c.d.webkit.messageHandlers.__z_moat_bridge__
            };
            a.c.co = function() {
                return !(!a.c.d || !(a.c.d.__zMoatInit__ || a.c.d.MoatMAK || a.c.cp())) || w
            };
            a.c.cq = function() {
                return !1
            };
            a.c.cr = function() {
                return a.j &&
                    a.j.a()
            };
            a.c.cs = function() {
                return a.j && a.j.b()
            };
            a.c.ct = function() {
                return a.c.cs() ? a.m && (a.m.c() || a.m.d()) : !1
            };
            a.c.cu = function() {
                if (a.c.ct()) return !0;
                var b = !1;
                return a.c.bs() ? !0 : a.c.b || a.c.ca ? b = (b = b || a.c.g() && a.c.cr()) || a.c.ca || a.c.cn() || a.c.bm() || a.c.cj() : b
            };
            a.c.protocol = a.b.bi();
            a.c.cv = "z.moatads.com";
            a.c.cw = a.b.g();
            a.c.bh = !a.c.b;
            a.c.cx = function(b) {
                var c = 0;
                b = b || window;
                try {
                    if (!a.c.b) {
                        var e;
                        for (e = 0; 20 > e && b != window.top; e++) b = b.parent;
                        c = e
                    }
                } catch (f) {}
                return c
            };
            a.c.b || a.b.s() || 1 == a.c.cx(a.d.a()) ? a.c.cy =
                1 : a.c.cy = 0;
            a.c.d[a.c.ax] || (a.c.d[a.c.ax] = new a.c.d.Object);
            a.c.am().isInApp && a.c.b && (a.c.b = a.c.cu() || a.c.g());
            a.c.cz = function() {
                return a.m && a.m.e()
            };
            a.c.da = function() {
                return a.m && a.m.d()
            };
            a.c.c = a.c.d.document.referrer || "";
            try {
                a.c.db = a.c.d.history && a.c.d.history.length
            } catch (t) {}
            a.c.dc = function() {
                if (B)
                    for (var a in B)
                        if (B.hasOwnProperty(a)) return !0;
                return !1
            };
            a.c.dd = function(b) {
                var c = !0;
                a.b.forEach(b && b.parentNode && b.parentNode.childNodes, function(b) {
                    if (a.b.ad(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], b.nodeName)) return c = !1
                });
                return c
            };
            a.c.de = function() {
                for (var a in B)
                    if (B.hasOwnProperty(a)) {
                        var b = B[a];
                        if (b && b.aa && b.aa[MOATALREADYFOUND]) return !0
                    }
                return !1
            };
            a.c.df = function() {
                return a.c.am().isInApp ? a.c.cu() : a.c.b
            };
            a.c.bv = function() {
                return a.c.dg && a.c.dg()
            };
            a.c.dh = function() {
                return a.c.bz
            };
            a.c.di = function() {
                return a.c.bw && a.c.bw()
            };
            a.c.dj = function() {
                return a.c.cd && a.c.cd()
            };
            a.c.dk = function() {
                return a.n && a.n.a()
            };
            a.c.dl = function(b) {
                var c = !1;
                a.o && a.o.a && (b && b.periscopeManager ? b.periscopeManager.measurable && (c = !0) : c = !0);
                return c
            };
            a.c.bu = function() {
                var b = a.b.co(),
                    c = 1 === a.c.am().isInApp;
                return !(!(9 <= b && window && window.requestAnimationFrame) || c)
            }();
            a.c.dm = function() {
                if (a.c.b) return !1;
                var b = a.c.k || a.c.al && 15.16199 <= a.b.ac();
                if (!b) return !1;
                var c = a.b.k();
                if (a.c.k && 8 >= c) return !1;
                var e = 1 === a.c.am().isInApp,
                    f, d = "function";
                a.c.k ? (8 === c && (d = "object"), f = document && typeof document[10 > c ? "elementFromPoint" : "msElementsFromPoint"] === d) : a.c.al && (f = typeof window.requestAnimationFrame === d);
                return b && !e && f
            }();
            a.c.dn = function(b) {
                return a.c.dk() ||
                    a.c.dl(b)
            };
            a.c["do"] = function(b, c) {
                if (!b || b && b.isMeasurabilityDisabled() || a.p.a() && !c) return !1;
                var e;
                a.c.dn(b) && (e = !0);
                return a.c.df() || a.c.dp() || e
            };
            a.c.dq = function(b) {
                if (!b || b && b.isMeasurabilityDisabled() || a.p.a()) return !1;
                var c = !1;
                a.n && a.n.a() ? c = !0 : a.o && a.o.a && b.periscopeManager && b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (c = !0);
                return a.c.df() || a.c.dp() || c
            };
            a.c.dr = function() {
                a.c.bd = !1;
                a.c.be = !0;
                a.c.bf = !0
            };
            a.c.ds = !0;
            a.c.dt = !0;
            "mlb.com" === a.b.w() && (a.b.ap() || a.b.aq()) && (a.c.dt = !1);
            var v;
            a.c.du = function(a) {
                v = a
            };
            a.c.dv = function() {
                return a.c.g() && a.c.cr() ? v || parseInt(a.c.dw("isNative")) ? !0 : !!document.getElementById("mianahwvc") : !1
            };
            a.c.j = function() {
                if (!a.c.g()) return !1;
                var b;
                return b = (b = a.c.cs() && a.m.f()) || a.c.dv()
            };
            a.c.dx = function() {
                return !1
            };
            var w;
            a.c.g() && (a.c.dy = function() {
                w = !0
            });
            var A = {
                version: "sv",
                appName: "lw",
                namespace: "lu",
                isNative: "ma",
                versionHash: "ar",
                deviceOS: "av"
            };
            a.c.dz = function() {
                var b = !!a.c.d.MoatMAK;
                return function() {
                    return b
                }
            }();
            a.c.ea = function() {
                return a.c.d && a.c.d.MoatMAK ||
                    null
            };
            a.c.eb = function() {
                var b = {},
                    c = a.c.ea();
                if (c)
                    for (var e in A) A.hasOwnProperty(e) && (b[A[e]] = c[e]);
                return b
            };
            a.c.dw = function(b) {
                var c, e;
                (c = a.c.ea()) && c.hasOwnProperty(b) && (e = c[b]);
                mappedKey = A[b];
                c = a.q.a();
                mappedKey && c && c.hasOwnProperty(mappedKey) && (e = c[mappedKey]);
                "versionHash" === b && "undefined" !== typeof e && (e = e.slice(0, 7));
                return e
            };
            a.c.ec = function() {
                return a.c.dw("namespace")
            };
            a.c.ed = function() {
                var b = a.c.dw("version");
                return b ? /\d+\.\d+(\.\d+)?/.exec(b) ? b : null : b
            };
            a.c.ee = 0;
            a.c.ef = 1;
            a.c.eg = -1;
            a.c.eh =
                function(b) {
                    var c = a.c.ed();
                    if (!c) return a.c.eg;
                    if (!/\d+\.\d+(\.\d+)?/.exec(b)) return a.c.ef;
                    switch (a.c.bg(c, b)) {
                        case 0:
                            return a.c.eg;
                        case 1:
                            return a.c.ef;
                        case 2:
                            return a.c.ee
                    }
                };
            a.c.ei = function(b) {
                if (a.c.ej && a.c.ej()) {
                    var c = a.c.ea();
                    c && b && (m(c, b), l(c, b))
                }
            };
            a.c.ej = function() {
                if (!a.c.g()) return !1;
                var b;
                a.b.i() ? b = "3.0" : a.b.j() && (b = "1.8");
                return b ? a.c.eh(b) !== a.c.eg ? !0 : !1 : !1
            };
            a.c.ek = function() {
                var b;
                a.b.i() ? b = "3.1.1" : a.b.j() && (b = "1.7.7");
                return a.c.eh(b) !== a.c.eg
            };
            a.c.el = function() {
                var b = parseInt(a.c.dw("isNative")),
                    c;
                a.b.i() ? c = "3.1" : a.b.j() && (c = "2.1");
                c = a.c.eh(c) !== a.c.eg;
                return b && c
            };
            a.c.em = function() {
                var b = "___mraid_viewable_loop___" + (new u).getTime(),
                    c = a.c.bi();
                a.k.g(function() {
                    return c && c.isViewable && c.isViewable() ? (a.j.c(), a.i.a.zaxs("trackingReady"), !1) : !0
                }, {}, 300, b)
            };
            a.c.en = function() {
                var a = !(!window || !window.MmJsBridge),
                    b = !(!window || !window.imraid || "function" !== typeof window.imraid.getVendorName || "inmobi" !== window.imraid.getVendorName());
                return a || b
            };
            a.c.eo = function() {
                var a = window.navigator && window.navigator.userAgent;
                return (a = a && a.match(/Firefox\/([0-9]+)\./)) ? parseInt(a[1], 10) : !1
            };
            (function() {
                var c = a.b.br(window, ["IntersectionObserver"]),
                    e = b() || 57 <= a.c.eo(),
                    f = a.c.am().isInApp,
                    d = a.c.ba(),
                    g = e && c && "function" === typeof c && (!f || d && a.c.bh);
                a.c.dg = function(a) {
                    "boolean" === typeof a && (g = a);
                    return g
                };
                a.c.ep = function() {
                    return g && c
                }
            })();
            a.c.be = b();
            a.c.h = new a.c.d.Image;
            a.c.l = function() {
                if ("undefined" !== typeof a.c.d["Moat#EVA"]) return !0;
                try {
                    if ("undefined" !== typeof a.c.d.eval && (a.c.d.eval("(function(win){ win['Moat#EVA'] = true; })(window)"),
                            "undefined" !== typeof a.c.d["Moat#EVA"])) return !0
                } catch (b) {}
                return !1
            };
            a.c.m = function(a) {
                try {
                    return new a.Function(""), !0
                } catch (b) {
                    return !1
                }
            };
            (function() {
                var b = a.b.cm("context"),
                    c = !a.c.am().isInApp && !(!b || !b.observeIntersection),
                    e, f, d, g, l, h;
                if (!c && window.JSON && "function" === typeof window.JSON.parse && (e = location.hash.match(/amp3pSentinel=((\d+)-\d+)/))) {
                    f = e[1];
                    e = Number(e[2]);
                    d = [];
                    for (g = window; g && g != g.parent; g = g.parent) d.unshift(g.parent);
                    l = d[e];
                    c = h = !!l
                }
                a.c.eq = function() {
                    return c && b
                };
                a.c.cd = function(a) {
                    "boolean" ===
                    typeof a && (c = a);
                    return c
                };
                a.c.er = function() {
                    return {
                        isDfp: h,
                        win: l,
                        sentinel: f
                    }
                };
                a.c.es = function() {
                    return l && l.postMessage && f ? (l.postMessage({
                        sentinel: f,
                        type: "send-intersections"
                    }, "*"), !0) : !1
                }
            })();
            a.c.et = function() {
                return !1
            };
            a.c.eu = function() {
                return !1
            };
            a.c.ev = function() {
                return !1
            };
            a.c.ew = function() {
                return !1
            };
            a.c.ex = function() {
                return !1
            };
            a.c.ey = function() {
                return !1
            };
            a.c.ez = function() {
                var a = navigator && navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\d{0,1}\.\d)/);
                return a ? parseFloat(a[1]) :
                    -1
            };
            a.c.fa = function() {
                return 6.1 === a.c.ez()
            };
            a.c.fb = function() {
                var b = a.c.d;
                return b.navigator && "function" === typeof b.navigator.getBattery
            };
            a.c.dp = function() {
                return !!a.c.fc()
            };
            a.c.fc = function() {
                return a.c.dg() ? {
                    measurableFn: a.c.bv
                } : a.c.bz ? {
                    measurableFn: a.c.dh
                } : a.c.cd() ? {
                    measurableFn: a.c.dj
                } : a.c.bm() ? {
                    measurableFn: a.c.bm
                } : a.c.cj() ? {
                    measurableFn: a.c.cj
                } : a.c.da() ? {
                    measurableFn: a.c.cz
                } : !1
            };
            a.c.fd = a.b.aw();
            a.c.fe = function(b) {
                return b = (b = a.c.fd) || a.b.ax()
            };
            a.c.ff = {
                a: "waiting",
                b: "noHistData",
                c: "dataAvailable",
                d: "slotWaiting",
                e: "slotNoHistData",
                f: "slotNoSlotData"
            }
        })(q);
        (function(a) {
            function h(a, g, h) {
                function m(a, c) {
                    for (var e in a) a.hasOwnProperty(e) && c.call(null, a[e], e)
                }

                function l(a) {
                    var c = [];
                    m(a, function(a, b) {
                        c.push(b)
                    });
                    return c
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
                    return function(c) {
                        return a(4) +
                            "-" + a(4) + "-" + a(4) + "-" + a(4)
                    }
                }(), a.xa.sode.prototype.xsza = function(a) {
                    this.desw[a] || (this.desw[a] = {});
                    return this.desw[a]
                }, a.xa.sode.prototype.esgf = function(a, c) {
                    this.publishing_ ? this.xfgf.push(arguments) : this.zaxs.apply(this, arguments)
                }, a.xa.sode.prototype.kswa = function(a, c) {
                    for (var e = this.xkcd[a] || [], f = e && e.length, d = 0; d < f; d++)
                        if (e[d] === c) return !1;
                    e.push(c);
                    e.sort(function(a, b) {
                        return a - b
                    });
                    this.xkcd[a] = e
                }, a.xa.sode.prototype.aksw = function(a, c) {
                    if (!this.xkcd[a]) return !1;
                    for (var e = this.xkcd[a], f = -1,
                            d = e && e.length, g = 0; g < d; g++)
                        if (e[g] === c) {
                            f = g;
                            break
                        } - 1 != f && e.splice(f, 1);
                    this.xkcd[a] = e
                }, a.xa.sode.prototype._getEventPriorities_ = function(a) {
                    return this.xkcd[a] || []
                }, a.xa.sode.prototype.azsx = function(a, c, e) {
                    e = e || {};
                    var f = e.id || this.uxin(),
                        d;
                    d = e.priority;
                    d = !isNaN(d) && isFinite(d) ? parseInt(d, 10) : 10;
                    for (var g = this.xsza(a), l = 0; g[f] && !e.id && 10 > l;) l++, f = this.uxin();
                    g[d] || (g[d] = {});
                    this.kswa(a, d);
                    e.priority = d;
                    g[d][f] = {
                        cb: c,
                        options: e
                    };
                    return f
                }, a.xa.sode.prototype.zaxs = function(a, c) {
                    if (!this.desw[a]) return !1;
                    this.publishing_ = !0;
                    for (var e = this.edws.slice.call(arguments, 1), f = this._getEventPriorities_(a).slice(0), d = 0, g = f.length; d < g; d++) {
                        var l = this.desw[a][f[d]],
                            h;
                        for (h in l)
                            if (l.hasOwnProperty(h)) {
                                var k = l[h];
                                if (k) {
                                    var m;
                                    m = k.options && k.options.includeId ? [h].concat(e) : e;
                                    if (!k.options || !k.options.condition || k.options.condition && k.options.condition.apply(null, m)) k.options && k.options.once && "undefined" !== typeof k.options.priority && this.sxaz(a, {
                                        id: h,
                                        priority: k.options.priority
                                    }), k.cb.apply(null, m)
                                }
                            }
                    }
                    this.publishing_ = !1;
                    for (e = 0; 0 < this.xfgf.length && 500 > e; e++) this.zaxs.apply(this, this.xfgf.pop())
                }, a.xa.sode.prototype.swaq = function(a, c, e) {
                    var f = !1;
                    if (this.desw[a] && this.desw[a][e]) try {
                        delete this.desw[a][e][c], f = !0
                    } catch (d) {}
                    0 === l(this.desw[a][e]).length && this.aksw(a, e);
                    return f
                }, a.xa.sode.prototype.sxaz = function(a, c) {
                    if (!c || "object" != typeof c || !this.desw[a]) return !1;
                    if (c.id && void 0 !== c.priority) return this.swaq(a, c.id, c.priority);
                    if (c.id || c.callback)
                        for (var e = this._getEventPriorities_(a), f = 0, d = e.length; f < d; f++) {
                            var g =
                                e[f];
                            if (c.id && c.callback) {
                                if (this.desw[a][g][c.id] && this.desw[a][g][c.id].cb == c.callback) return this.swaq(a, c.id, g)
                            } else if (c.id) {
                                if (this.desw[a][g][c.id]) return this.swaq(a, c.id, g)
                            } else
                                for (var l in this.desw[a][g])
                                    if (this.desw[a][g][l] && this.desw[a][g][l].cb == c.callback) return this.swaq(a, l, g)
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
            a.i = {};
            a.i.b = function(d) {
                d.xa.sode || (d.xb == window ? h(a.c.au,
                    window, n) : a.b.cl(h, "'" + a.c.au + "',window, Math", d.xb));
                a.i.a = new d.xa.sode
            }
        })(q);
        (function(a) {
            function h(a, g) {
                function h(a) {
                    var c = b.xb.Math.pow,
                        e = b.xb.Math.random;
                    a = (0, b.xb.Math.max)(4, a);
                    return ((1 + e()) * c(16, a) | 0).toString(16).substring(0, a)
                }

                function m(a) {
                    return function(b) {
                        return a(b)
                    }
                }

                function l(a, b) {
                    if (!a || "string" !== typeof b || !a[b] || a == window) return !1;
                    if ("string" === typeof a.nodeName && ("OBJECT" === a.nodeName || "EMBED" === a.nodeName)) {
                        var c = document && document.body && document.body[b];
                        if (c && c !== a[b]) return c
                    }
                    return !1
                }
                g[a] = g[a] || {
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
                var b = g[a],
                    c = {},
                    e = function() {
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
                b.xc.dowg = function(a, c) {
                    b && (b.xyds || (b.xyds = {}), b && b.xyds && (b.xyds[c] ? b.xyds[c].push(a) : b.xyds[c] = [a]))
                };
                b.xc.hsxk = function() {
                    b.dcsx && b.dcsx.dcwn();
                    "undefined" !== typeof a && a && b.xc.esde(a);
                    var a;
                    b.xc.exde(b.xc.hsxk, 1E3)
                };
                b.xc.esde =
                    function(a) {
                        window && window.clearTimeout && window.clearTimeout(a)
                    };
                b.xc.ynds = function(a, b, d, g) {
                    var h, k, t = !1;
                    "touchstart" === b && e && (t = {
                        passive: !0
                    });
                    g ? c[b + g] ? d = c[b + g] : (d = m(d), c[b + g] = d) : d = m(d);
                    if (a.addEventListener) g = "addEventListener", h = "";
                    else if (a.attachEvent) g = "attachEvent", h = "on";
                    else return !1;
                    if (k = l(a, g)) try {
                        k.call(a, h + b, d, t)
                    } catch (n) {
                        a[g](h + b, d, t)
                    } else if (a && g && a[g]) try {
                        a[g](h + b, d, t)
                    } catch (n) {
                        return !1
                    }
                };
                b.xc.engn = function(a, b, e, d) {
                    var g, h = b + d,
                        k;
                    if (!a) return delete c[h], !1;
                    e = !1 !== d ? c[h] : e;
                    if (a.removeEventListener) d =
                        "removeEventListener", g = "";
                    else if (a.detachEvent) d = "detachEvent", g = "on";
                    else return delete c[h], !1;
                    if (k = l(a, d)) try {
                        k.call(a, g + b, e, !1)
                    } catch (m) {
                        a[d](g + b, e, !1)
                    } else try {
                        a[d](g + b, e, !1)
                    } catch (m) {}
                    delete c[h]
                };
                b.xc.exde = function(a, b) {
                    a = m(a);
                    var c;
                    window && window.setTimeout && (c = window.setTimeout(a, b));
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
            a.s = {};
            a.s.a = function(d) {
                var g = a.s.b(d),
                    h = !1;
                g || (g = a.s.c(d), h = !0, g.xc.exde(g.xc.hsxk, 1E3));
                window[a.c.au] = g;
                a.i.b(g);
                h && (g.swde = new g.xa.sode);
                a.i.a.azsx("adKilled", a.s.d);
                a.i.a.azsx("allLocalAdsKilled", a.s.e, {
                    once: !0
                });
                return g
            };
            a.s.e = function() {
                a.i.a.sxaz("adKilled", {
                    callback: a.s.d
                });
                a.s.f(p)
            };
            a.s.d = function(d) {
                a.c.i = null;
                if (p) {
                    try {
                        var g = p.yf[a.c.aw.a];
                        if (g) {
                            var h = a.b.indexOf(g, d.yg); - 1 < h && g.splice(h, 1)
                        }
                        a.s.g(a.c.aw.a, d.TAGID)
                    } catch (m) {}
                    a.s.f(p)
                }
            };
            a.s.h = function(d, g) {
                var h = a.s.b(a.c.d);
                h && h.xc.twer(d, g)
            };
            a.s.i = function(d, g) {
                var h = a.s.b(a.c.d);
                h && h.xc.dowg(g, d)
            };
            a.s.g = function(d, g) {
                var h = p.xyds[d];
                if (h) {
                    var m = a.b.indexOf(h, g); - 1 < m && h.splice(m, 1)
                }
            };
            a.s.f = function(d) {
                var g = !1,
                    h = !1,
                    m = 0,
                    l = 0;
                try {
                    d.yf[a.c.aw.a] && (h = 0 === d.yf[a.c.aw.a].length), a.b.forEach(d.yf, function(a) {
                        0 < a.length && m++
                    }), a.s.g(a.c.aw.a, a.c.ay), a.b.forEach(d.xyds, function(a) {
                        0 < a.length && (l += a.length)
                    }), d.xyds[a.c.aw.a] && 0 != d.xyds[a.c.aw.a].length || (h = !0), 0 === l && 0 === m && (g = !0)
                } catch (b) {}
                h &&
                    d.swde.esgf("allAdsInWindowKilled", a.c.aw.a);
                g && (a.i.a.sxaz("adKilled", {
                    callback: a.s.d
                }), a.i.a.sxaz("allLocalAdsKilled", {
                    callback: a.s.e
                }), d.swde.esgf("allAdsKilled"))
            };
            a.s.c = function(d) {
                d == window ? h(a.c.au, window) : a.b.cl(h, "'" + a.c.au + "',window", d);
                return a.s.b(d)
            };
            a.s.b = function(d) {
                try {
                    return d = d || a.c.d, d[a.c.au]
                } catch (g) {
                    return null
                }
            };
            a.s.j = function(d) {
                try {
                    var g = [];
                    d = d || a.c.d;
                    if (!d) return !1;
                    var h = a.c.at;
                    if (!h) return !1;
                    var m = new RegExp("^" + h);
                    if (!m) return !1;
                    a.b.forEach(d, function(a, b) {
                        -1 < b.search(m) &&
                            a && "number" === typeof a.zr && g.push(a)
                    });
                    return g
                } catch (l) {
                    return !1
                }
            };
            a.s.k = function(d) {
                try {
                    var g = [];
                    d = d || a.c.d;
                    return d ? (g = a.s.j(d)) ? 0 < g.length ? !0 : !1 : !1 : !1
                } catch (h) {
                    return !1
                }
            };
            a.s.l = function(d) {
                var g = a.s.b();
                g && (g.i[d] = !0)
            }
        })(q);
        var p = q.s.a(q.c.d);
        q.i.a.zaxs("modulesReady", p);
        var G = q.c.b;
        q.b.g();
        (function(a) {
            function h(a, g) {
                function h(a) {
                    return function() {
                        try {
                            a.sending && (a.sending = !1, f = 0, m())
                        } catch (b) {}
                    }
                }

                function m(a, c) {
                    if (a) {
                        var d = {
                            qs: a,
                            jsd: c
                        };
                        if (0 === a.indexOf("e=21&")) {
                            b(d, !0);
                            return
                        }
                        e.push(d)
                    }
                    0 ===
                        f && 0 < e.length && (f++, d = e.shift(), d.sending = !0, d.uid = g.Math.floor(1E10 * g.Math.random()), d.timeoutId = setTimeout(h(d), 2E3), w[d.uid] = d, b(d))
                }

                function l() {
                    try {
                        return new y(1, 1)
                    } catch (a) {
                        var b = window.document.createElement("img");
                        b.height = 1;
                        b.width = 1;
                        return b
                    }
                }

                function b(a, e) {
                    var d = l();
                    d.toSend = a;
                    e || (d.onerror = function() {
                        var a = this.toSend;
                        a.failedAttempts = "number" == typeof a.failedAttempts ? a.failedAttempts + 1 : 0;
                        var e = (a.jsd + "/pixel.gif?" + a.qs).length;
                        1 > a.failedAttempts ? b(a) : t && e > n && c(a)
                    }, d.onload = function() {
                        c(this.toSend)
                    });
                    d.src = a.jsd + "/pixel.gif?" + a.qs
                }

                function c(a) {
                    var b = a && a.uid && w && w[a.uid];
                    if (a && a.qs && "tracer=" == a.qs) return !1;
                    if (b) {
                        w[a.uid] = null;
                        try {
                            delete w[a.uid]
                        } catch (c) {}
                        try {
                            clearTimeout(b.timeoutId)
                        } catch (c) {}
                        if ("boolean" != typeof b.sending || b.sending) b.sending = !1;
                        else return !1
                    }
                    0 < f && f--;
                    m()
                }
                var e = [],
                    f = 0,
                    y, z = g[a],
                    v = g.Math.floor(1E10 * g.Math.random()),
                    w = {};
                z.yh = {};
                z = z.yh;
                y = g.Image;
                z.yi = function(a, b) {
                    m(a, b)
                };
                z.xq = function() {
                    return v
                };
                var A, t, n = 2083;
                try {
                    A = document.createElement("div"), A.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e",
                        t = "x" === A.innerHTML
                } catch (H) {
                    t = !1
                }
            }
            a.t = {};
            a.t.a = function(d) {
                try {
                    if (p.yh) return
                } catch (g) {}
                a.b.cl(h, "'" + a.c.au + "',window", d)
            }
        })(q);
        (function(a) {
            a.g = {};
            a.g.e = 0;
            a.g.c = 1;
            a.g.f = 2;
            a.g.d = 3;
            a.g.g = 4;
            for (var h = [
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
                ], d = 65, g = "", k = 0, k = 0; k < h.length; k++)
                for (var m = 0; m < h[k][1]; m++) g += String.fromCharCode(d), d += h[k][0];
            g += String.fromCharCode(d);
            a.g.h = g;
            a.g.i = function(a) {
                for (var b = "", c = 0; c < a.length; c++) var e =
                    a.charCodeAt(c) ^ 85,
                    b = b + String.fromCharCode(e);
                a = b;
                for (var b = "", e = c = 0, d, h, k, m = 0; m < a.length; ++m)
                    for (k = a.charCodeAt(m), h = 255 < k ? 0 : 1; 2 > h; ++h) c = 0 === h ? c | (k & 65280) / 256 << e : c | (k & 255) << e, e += 8, 13 < e && (d = c & 8191, 88 < d ? (c >>= 13, e -= 13) : (d = c & 16383, c >>= 14, e -= 14), b += g.charAt(d % 91), b += g.charAt(d / 91 | 0));
                0 < e && (b += g.charAt(c % 91), 7 < e || 90 < c) && (b += g.charAt(c / 91 | 0));
                return b
            };
            a.g.j = function(d, b) {
                var c = [];
                a.b.forEach(d, function(a, d) {
                    if (void 0 !== a && ("string" === typeof(b ? a[b] : a) || "number" === typeof(b ? a[b] : a) || "boolean" === typeof(b ?
                            a[b] : a))) {
                        var g = String(b ? a[b] : a).split("&").join("%26").split("=").join("%3D");
                        c.push(("number" === typeof d ? "" : d + "=") + g)
                    }
                }, null, !0);
                c.sort();
                return c.join("&")
            };
            a.g.a = function(a) {
                for (var b = "", c = 0; c < a.length; c++) a.hasOwnProperty(c) && (b += g[a[c]]);
                return b
            };
            a.g.k = function() {
                var d = document && document.documentElement && document.documentElement.style || {};
                a.g.l = [!0 === (!!window.chrome && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore)) ? 1 : 0, !0 === ("undefined" !==
                    typeof InstallTrigger || "MozAppearance" in d) ? 1 : 0, !0 === !!window.opera ? 1 : 0, !0 === a.c.n ? 1 : 0, !0 === (!+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in d && "-ms-ime-align" in d) ? 1 : 0];
                for (var d = !1, b = 0; b < a.g.l.length; b++)
                    if (1 === a.g.l[b]) {
                        d = b;
                        break
                    }!1 !== d && (a.g.b = d);
                return a.g.b
            };
            a.g.b = a.g.k()
        })(q);
        (function(a) {
            a.u = {};
            var h = [];
            a.u.a = function(a, g) {
                h.push({
                    query: a,
                    callback: g
                });
                return !1
            }
        })(q);
        (function(a) {
            function h(a, b) {
                try {
                    var d = a.split(l),
                        g = b || window,
                        h, v;
                    for (v = 0; v < d.length; v++) {
                        h = d[v];
                        if (null === g || typeof g === k) return 1;
                        g = g[h]
                    }
                    if (typeof g === k) return 2;
                    if (null === g) return 3;
                    var w;
                    var A = a + m + g.toString(),
                        d = 0,
                        t = A.length,
                        n, p;
                    if (0 == t) w = d;
                    else {
                        for (n = 0; n < t; n++) p = A.charCodeAt(n), d = (d << 5) - d + p, d &= d;
                        w = d >>> 0
                    }
                    return 4 + w % 58
                } catch (q) {
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
                    },
                    function() {
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
                for (var d = 0; d < b.length; d++) {
                    var g;
                    try {
                        g = (0, b[d])() ? "1" : "0"
                    } catch (h) {
                        g = "2"
                    }
                    a += g
                }
                return a
            }
            a.v = {};
            var g = [0, 39, 34, 38, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72,
                    13, 14, 13, 4, 71, 0, 41, 41, 1, 26, 39, 39, 30, 43, 15, 43, 40, 38, 41, 45, 17, 30, 44, 46, 37, 45, 72, 37, 30, 39, 32, 45, 33, 71, 0, 41, 41, 1, 26, 39, 39, 30, 43, 15, 43, 40, 38, 41, 45, 17, 30, 44, 46, 37, 45, 72, 39, 26, 38, 30, 71, 0, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 2, 7, 4, 2, 10, 8, 13, 6, 71, 0, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 1, 20, 1, 1, 11, 8, 13, 6, 84, 15, 7, 0, 18, 4, 71, 0, 43, 43, 26, 50, 72, 40, 27, 44, 30, 43, 47, 30, 72, 39, 26, 38, 30, 71, 0, 45, 40, 38, 34, 28, 44, 72, 44, 45, 40, 43, 30, 72, 37, 30, 39, 32, 45, 33, 71, 0, 45, 40, 38, 34, 28, 44, 72,
                    48, 26, 34, 45, 72, 39, 26, 38, 30, 71, 0, 46, 29, 34, 40, 15, 43, 40, 28, 30, 44, 44, 34, 39, 32, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 0, 46, 45, 40, 28, 40, 38, 41, 37, 30, 45, 30, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 12, 14, 21, 4, 71, 1, 34, 32, 20, 34, 39, 45, 58, 56, 0, 43, 43, 26, 50, 72, 37, 30, 39, 32, 45, 33, 71, 1, 37, 46, 30, 45, 40, 40, 45, 33, 17, 30, 38, 40, 45, 30, 6, 0, 19, 19, 3, 30, 44, 28, 43, 34, 41, 45, 40, 43, 72, 37, 30, 39, 32, 45, 33, 71, 1, 37, 46, 30, 45, 40, 40, 45, 33, 17, 30, 38, 40, 45, 30, 6, 0, 19, 19, 18, 30, 43, 47, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 1, 37, 46, 30, 45, 40, 40, 45, 33, 17,
                    30, 38, 40, 45, 30, 6, 0, 19, 19, 18, 30, 43, 47, 30, 43, 72, 39, 26, 38, 30, 71, 2, 18, 18, 72, 43, 26, 29, 72, 39, 26, 38, 30, 71, 2, 18, 18, 8, 38, 26, 32, 30, 21, 26, 37, 46, 30, 72, 39, 26, 38, 30, 71, 2, 18, 18, 12, 26, 45, 33, 13, 30, 32, 26, 45, 30, 72, 39, 26, 38, 30, 71, 2, 18, 18, 13, 26, 38, 30, 44, 41, 26, 28, 30, 17, 46, 37, 30, 72, 22, 4, 1, 10, 8, 19, 84, 10, 4, 24, 5, 17, 0, 12, 4, 18, 84, 17, 20, 11, 4, 71, 2, 18, 18, 13, 46, 38, 30, 43, 34, 28, 21, 26, 37, 46, 30, 72, 39, 26, 38, 30, 71, 2, 18, 18, 15, 43, 34, 38, 34, 45, 34, 47, 30, 21, 26, 37, 46, 30, 72, 2, 18, 18, 84, 2, 14, 20, 13, 19, 4, 17, 71, 2, 18, 18, 17, 40, 45, 26, 45, 30, 72, 37, 30,
                    39, 32, 45, 33, 71, 2, 18, 18, 17, 46, 37, 30, 72, 22, 4, 1, 10, 8, 19, 84, 17, 4, 6, 8, 14, 13, 84, 17, 20, 11, 4, 71, 2, 18, 18, 18, 45, 50, 37, 30, 3, 30, 28, 37, 26, 43, 26, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 2, 18, 18, 20, 39, 41, 26, 43, 44, 30, 29, 21, 26, 37, 46, 30, 72, 41, 26, 43, 44, 30, 0, 37, 37, 72, 37, 30, 39, 32, 45, 33, 71, 2, 18, 18, 21, 26, 37, 46, 30, 72, 2, 18, 18, 84, 21, 0, 11, 20, 4, 84, 11, 8, 18, 19, 71, 2, 18, 18, 21, 26, 43, 34, 26, 27, 37, 30, 17, 30, 31, 30, 43, 30, 39, 28, 30, 21, 26, 37, 46, 30, 72, 39, 26, 38, 30, 71, 2, 43, 50, 41, 45, 40, 72, 37, 30, 39, 32, 45, 33, 71, 3, 14, 12, 4, 49, 28, 30, 41, 45, 34, 40, 39, 72, 8, 13, 21,
                    0, 11, 8, 3, 84, 13, 14, 3, 4, 84, 19, 24, 15, 4, 84, 4, 17, 17, 71, 3, 14, 12, 15, 40, 34, 39, 45, 72, 31, 43, 40, 38, 15, 40, 34, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 3, 14, 12, 15, 40, 34, 39, 45, 72, 31, 43, 40, 38, 15, 40, 34, 39, 45, 72, 39, 26, 38, 30, 71, 3, 14, 12, 15, 40, 34, 39, 45, 17, 30, 26, 29, 14, 39, 37, 50, 72, 39, 26, 38, 30, 71, 3, 14, 12, 17, 30, 28, 45, 11, 34, 44, 45, 72, 39, 26, 38, 30, 71, 3, 26, 45, 26, 19, 43, 26, 39, 44, 31, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 3, 26, 45, 26, 21, 34, 30, 48, 72, 37, 30, 39, 32, 45, 33, 71, 3, 26, 45, 26, 21, 34, 30, 48, 72, 39, 26, 38, 30, 71, 3, 30, 27, 46, 32, 72, 48, 43, 34, 45, 30, 37, 39, 72,
                    37, 30, 39, 32, 45, 33, 71, 3, 40, 28, 46, 38, 30, 39, 45, 72, 15, 17, 14, 2, 4, 18, 18, 8, 13, 6, 84, 8, 13, 18, 19, 17, 20, 2, 19, 8, 14, 13, 84, 13, 14, 3, 4, 71, 3, 40, 28, 46, 38, 30, 39, 45, 5, 43, 26, 32, 38, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 3, 43, 26, 32, 4, 47, 30, 39, 45, 72, 12, 14, 25, 84, 18, 14, 20, 17, 2, 4, 84, 10, 4, 24, 1, 14, 0, 17, 3, 71, 4, 39, 45, 30, 43, 15, 34, 28, 45, 46, 43, 30, 8, 39, 15, 34, 28, 45, 46, 43, 30, 4, 47, 30, 39, 45, 72, 0, 19, 84, 19, 0, 17, 6, 4, 19, 71, 4, 39, 45, 34, 45, 50, 72, 3, 14, 2, 20, 12, 4, 13, 19, 84, 5, 17, 0, 6, 12, 4, 13, 19, 84, 13, 14, 3, 4, 71, 4, 43, 43, 40, 43, 72, 44, 45, 26, 28, 36, 19, 43, 26, 28,
                    30, 11, 34, 38, 34, 45, 71, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 12, 14, 21, 4, 71, 4, 47, 26, 37, 4, 43, 43, 40, 43, 72, 39, 26, 38, 30, 71, 4, 47, 30, 39, 45, 72, 12, 4, 19, 0, 84, 12, 0, 18, 10, 71, 4, 47, 30, 39, 45, 18, 40, 46, 43, 28, 30, 72, 2, 14, 13, 13, 4, 2, 19, 8, 13, 6, 71, 5, 34, 37, 30, 4, 43, 43, 40, 43, 72, 15, 0, 19, 7, 84, 4, 23, 8, 18, 19, 18, 84, 4, 17, 17, 71, 5, 37, 40, 26, 45, 55, 54, 0, 43, 43, 26, 50, 72, 37, 30, 39, 32, 45, 33, 71, 6, 26, 38, 30, 41, 26, 29, 4, 47, 30, 39, 45, 72, 2, 0, 15, 19, 20, 17, 8, 13, 6, 84, 15, 7, 0, 18, 4, 71, 6, 26, 38, 30, 41, 26, 29, 4, 47, 30, 39, 45, 72, 10, 4, 24, 3, 14, 22, 13, 71, 6, 26,
                    38, 30, 41, 26, 29, 4, 47, 30, 39, 45, 72, 13, 14, 13, 4, 71, 7, 19, 12, 11, 8, 38, 26, 32, 30, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 7, 19, 12, 11, 12, 30, 39, 46, 8, 45, 30, 38, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 7, 19, 12, 11, 14, 46, 45, 41, 46, 45, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 7, 34, 44, 45, 40, 43, 50, 72, 39, 26, 38, 30, 71, 8, 53, 53, 2, 72, 2, 46, 44, 45, 40, 38, 3, 30, 31, 34, 39, 30, 11, 40, 28, 26, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 8, 53, 54, 2, 72, 19, 30, 44, 45, 4, 39, 28, 40, 29, 30, 72, 39, 26, 38, 30, 71, 8, 3, 1, 10, 30, 50, 17, 26, 39, 32, 30, 72, 37, 30, 39, 32, 45, 33, 71, 8, 3, 1, 10, 30,
                    50, 17, 26, 39, 32, 30, 72, 37, 40, 48, 30, 43, 1, 40, 46, 39, 29, 72, 37, 30, 39, 32, 45, 33, 71, 8, 3, 1, 10, 30, 50, 17, 26, 39, 32, 30, 72, 40, 39, 37, 50, 72, 39, 26, 38, 30, 71, 8, 3, 1, 19, 43, 26, 39, 44, 26, 28, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 8, 38, 26, 32, 30, 72, 37, 30, 39, 32, 45, 33, 71, 8, 38, 26, 32, 30, 1, 34, 45, 38, 26, 41, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 39, 26, 38, 30, 71, 8, 39, 45, 30, 43, 44, 30, 28, 45, 34, 40, 39, 14, 27, 44, 30, 43, 47, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 8, 39, 45, 30, 43, 44, 30, 28, 45, 34, 40, 39, 14, 27, 44, 30, 43, 47, 30, 43, 4, 39, 45, 43, 50, 72, 37, 30, 39,
                    32, 45, 33, 71, 8, 39, 45, 37, 72, 13, 46, 38, 27, 30, 43, 5, 40, 43, 38, 26, 45, 72, 39, 26, 38, 30, 71, 8, 39, 45, 37, 72, 15, 37, 46, 43, 26, 37, 17, 46, 37, 30, 44, 72, 44, 46, 41, 41, 40, 43, 45, 30, 29, 11, 40, 28, 26, 37, 30, 44, 14, 31, 72, 37, 30, 39, 32, 45, 33, 71, 8, 39, 45, 37, 72, 17, 30, 37, 26, 45, 34, 47, 30, 19, 34, 38, 30, 5, 40, 43, 38, 26, 45, 72, 44, 46, 41, 41, 40, 43, 45, 30, 29, 11, 40, 28, 26, 37, 30, 44, 14, 31, 72, 39, 26, 38, 30, 71, 8, 39, 45, 37, 72, 47, 60, 1, 43, 30, 26, 36, 8, 45, 30, 43, 26, 45, 40, 43, 72, 39, 26, 38, 30, 71, 10, 30, 50, 4, 47, 30, 39, 45, 72, 3, 14, 12, 84, 21, 10, 84, 52, 71, 10, 30, 50, 4, 47, 30, 39, 45, 72,
                    3, 14, 12, 84, 21, 10, 84, 15, 17, 8, 13, 19, 71, 12, 18, 12, 30, 29, 34, 26, 10, 30, 50, 44, 72, 34, 44, 19, 50, 41, 30, 18, 46, 41, 41, 40, 43, 45, 30, 29, 72, 39, 26, 38, 30, 71, 12, 26, 45, 33, 72, 44, 34, 39, 33, 72, 37, 30, 39, 32, 45, 33, 71, 12, 30, 29, 34, 26, 2, 26, 41, 26, 27, 34, 37, 34, 45, 34, 30, 44, 8, 39, 31, 40, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26, 3, 30, 47, 34, 28, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 12, 30, 29, 34, 26, 10, 30, 50, 13, 30, 30, 29, 30, 29, 4, 47, 30, 39, 45, 72, 0, 19, 84, 19, 0, 17, 6, 4, 19, 71, 12, 30, 29, 34, 26, 10, 30, 50, 18, 50, 44, 45, 30, 38, 0, 28, 28, 30, 44, 44, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26,
                    10, 30, 50, 44, 72, 34, 44, 19, 50, 41, 30, 18, 46, 41, 41, 40, 43, 45, 30, 29, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26, 10, 30, 50, 44, 72, 37, 30, 39, 32, 45, 33, 71, 12, 30, 29, 34, 26, 10, 30, 50, 44, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26, 12, 30, 45, 26, 29, 26, 45, 26, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26, 17, 30, 28, 40, 43, 29, 30, 43, 4, 43, 43, 40, 43, 4, 47, 30, 39, 45, 72, 18, 7, 8, 5, 19, 84, 12, 0, 18, 10, 71, 12, 30, 29, 34, 26, 18, 30, 44, 44, 34, 40, 39, 72, 39, 26, 38, 30, 71, 12, 30, 29, 34, 26, 18, 45, 43, 30, 26, 38, 72, 37, 30, 39, 32, 45, 33, 71, 12, 30, 29, 34, 26, 18, 45, 43, 30, 26, 38, 4, 43, 43, 40, 43, 72, 37, 30, 39, 32,
                    45, 33, 71, 12, 30, 44, 44, 26, 32, 30, 2, 33, 26, 39, 39, 30, 37, 72, 39, 26, 38, 30, 71, 12, 40, 46, 44, 30, 18, 28, 43, 40, 37, 37, 4, 47, 30, 39, 45, 72, 7, 14, 17, 8, 25, 14, 13, 19, 0, 11, 84, 0, 23, 8, 18, 71, 12, 46, 45, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 13, 14, 13, 4, 71, 13, 26, 47, 34, 32, 26, 45, 34, 40, 39, 15, 43, 30, 37, 40, 26, 29, 12, 26, 39, 26, 32, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 13, 26, 47, 34, 32, 26, 45, 40, 43, 72, 37, 30, 39, 32, 45, 33, 71, 13, 26, 47, 34, 32, 26, 45, 40, 43, 72, 39, 26, 38, 30, 71, 13, 40, 29, 30, 5, 34, 37, 45, 30, 43, 72, 18, 7, 14, 22, 84, 0, 11, 11, 71, 13, 46, 38, 27, 30, 43, 72, 34, 44, 8, 39, 45, 30,
                    32, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 14, 31, 31, 37, 34, 39, 30, 0, 46, 29, 34, 40, 2, 40, 38, 41, 37, 30, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 1, 11, 20, 17, 71, 14, 31, 31, 44, 28, 43, 30, 30, 39, 2, 26, 39, 47, 26, 44, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 54, 3, 72, 37, 30, 39, 32, 45, 33, 71, 14, 44, 28, 34, 37, 37, 26, 45, 40, 43, 13, 40, 29, 30, 72, 39, 26, 38, 30, 71, 14, 47, 30, 43, 28, 40, 39, 44, 45, 43, 26, 34, 39, 30, 29, 4, 43, 43, 40, 43, 72, 39, 26, 38, 30, 71, 15, 26, 32, 30, 19, 43, 26, 39, 44, 34, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 20, 15, 71, 15, 26, 50, 38, 30, 39, 45, 0, 29, 29, 43, 30,
                    44, 44, 72, 39, 26, 38, 30, 71, 15, 26, 50, 38, 30, 39, 45, 8, 39, 44, 45, 43, 46, 38, 30, 39, 45, 44, 72, 37, 30, 39, 32, 45, 33, 71, 15, 26, 50, 38, 30, 39, 45, 8, 39, 44, 45, 43, 46, 38, 30, 39, 45, 44, 72, 39, 26, 38, 30, 71, 15, 26, 50, 38, 30, 39, 45, 12, 26, 39, 26, 32, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 15, 26, 50, 38, 30, 39, 45, 12, 26, 39, 26, 32, 30, 43, 72, 39, 26, 38, 30, 71, 15, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 12, 30, 26, 44, 46, 43, 30, 72, 37, 30, 39, 32, 45, 33, 71, 15, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 13, 26, 47, 34, 32, 26, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 15, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 14, 27,
                    44, 30, 43, 47, 30, 43, 4, 39, 45, 43, 50, 11, 34, 44, 45, 72, 39, 26, 38, 30, 71, 15, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 17, 30, 44, 40, 46, 43, 28, 30, 19, 34, 38, 34, 39, 32, 72, 39, 26, 38, 30, 71, 15, 34, 28, 45, 46, 43, 30, 8, 39, 15, 34, 28, 45, 46, 43, 30, 22, 34, 39, 29, 40, 48, 72, 37, 30, 39, 32, 45, 33, 71, 15, 40, 48, 30, 43, 18, 46, 41, 41, 37, 50, 4, 47, 30, 39, 45, 72, 0, 19, 84, 19, 0, 17, 6, 4, 19, 71, 15, 43, 30, 44, 30, 39, 45, 26, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 15, 43, 30, 44, 30, 39, 45, 26, 45, 34, 40, 39, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 15, 43, 30, 44, 30, 39, 45, 26, 45, 34, 40,
                    39, 17, 30, 28, 30, 34, 47, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 15, 43, 40, 32, 43, 30, 44, 44, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 12, 14, 21, 4, 71, 15, 43, 40, 38, 34, 44, 30, 72, 43, 30, 35, 30, 28, 45, 72, 37, 30, 39, 32, 45, 33, 71, 15, 43, 40, 41, 30, 43, 45, 50, 13, 40, 29, 30, 11, 34, 44, 45, 72, 37, 30, 39, 32, 45, 33, 71, 15, 43, 40, 49, 50, 72, 28, 43, 30, 26, 45, 30, 5, 46, 39, 28, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 15, 46, 44, 33, 12, 26, 39, 26, 32, 30, 43, 72, 39, 26, 38, 30, 71, 15, 46, 44, 33, 18, 46, 27, 44, 28, 43, 34, 41, 45, 34, 40, 39, 14, 41, 45, 34, 40, 39, 44, 72, 37, 30, 39, 32, 45, 33, 71, 15, 46, 44, 33, 18, 46,
                    27, 44, 28, 43, 34, 41, 45, 34, 40, 39, 14, 41, 45, 34, 40, 39, 44, 72, 39, 26, 38, 30, 71, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 8, 28, 30, 4, 47, 30, 39, 45, 72, 1, 20, 1, 1, 11, 8, 13, 6, 84, 15, 7, 0, 18, 4, 71, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 8, 28, 30, 4, 47, 30, 39, 45, 72, 2, 0, 15, 19, 20, 17, 8, 13, 6, 84, 15, 7, 0, 18, 4, 71, 17, 19, 2, 18, 30, 44, 44, 34, 40, 39, 3, 30, 44, 28, 43, 34, 41, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 17, 19, 2, 18, 45, 26, 45, 44, 15, 43, 40, 47, 34, 29, 30, 43, 72, 39, 26, 38, 30, 71, 17, 19, 2, 18, 45, 26, 45, 44, 17, 30, 41, 40, 43, 45, 72, 39, 26, 38, 30,
                    71, 17, 26, 39, 32, 30, 72, 4, 13, 3, 84, 19, 14, 84, 18, 19, 0, 17, 19, 71, 17, 26, 39, 32, 30, 72, 13, 14, 3, 4, 84, 1, 4, 5, 14, 17, 4, 71, 17, 30, 31, 30, 43, 30, 39, 28, 30, 4, 43, 43, 40, 43, 72, 37, 30, 39, 32, 45, 33, 71, 17, 30, 31, 37, 30, 28, 45, 72, 40, 48, 39, 10, 30, 50, 44, 72, 39, 26, 38, 30, 71, 17, 30, 31, 37, 30, 28, 45, 72, 44, 30, 45, 72, 37, 30, 39, 32, 45, 33, 71, 17, 30, 44, 34, 51, 30, 14, 27, 44, 30, 43, 47, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 18, 8, 12, 3, 72, 1, 40, 40, 37, 55, 54, 49, 56, 72, 44, 33, 46, 31, 31, 37, 30, 72, 39, 26, 38, 30, 71, 18, 8, 12, 3, 72, 5, 37, 40, 26, 45, 55, 54, 49, 56, 72, 38, 34, 39, 72, 37, 30, 39, 32, 45,
                    33, 71, 18, 8, 12, 3, 72, 20, 34, 39, 45, 55, 54, 49, 56, 72, 44, 46, 27, 72, 37, 30, 39, 32, 45, 33, 71, 18, 21, 6, 0, 39, 34, 38, 26, 45, 30, 29, 17, 30, 28, 45, 72, 37, 30, 39, 32, 45, 33, 71, 18, 21, 6, 2, 37, 34, 41, 15, 26, 45, 33, 4, 37, 30, 38, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 18, 21, 6, 5, 4, 1, 37, 30, 39, 29, 4, 37, 30, 38, 30, 39, 45, 72, 18, 21, 6, 84, 5, 4, 1, 11, 4, 13, 3, 84, 12, 14, 3, 4, 84, 11, 20, 12, 8, 13, 14, 18, 8, 19, 24, 71, 18, 21, 6, 5, 4, 2, 40, 37, 40, 43, 12, 26, 45, 43, 34, 49, 4, 37, 30, 38, 30, 39, 45, 72, 18, 21, 6, 84, 5, 4, 2, 14, 11, 14, 17, 12, 0, 19, 17, 8, 23, 84, 19, 24, 15, 4, 84, 7, 20, 4, 17, 14, 19, 0, 19, 4, 71, 18,
                    21, 6, 5, 4, 3, 34, 44, 45, 26, 39, 45, 11, 34, 32, 33, 45, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 18, 21, 6, 5, 34, 37, 45, 30, 43, 4, 37, 30, 38, 30, 39, 45, 72, 39, 26, 38, 30, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 0, 43, 28, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 2, 20, 1, 8, 2, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 0, 43, 28, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 17, 4, 11, 71, 18, 21,
                    6, 15, 26, 45, 33, 18, 30, 32, 0, 43, 28, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 18, 12, 14, 14, 19, 7, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 2, 37, 40, 44, 30, 15, 26, 45, 33, 72, 15, 0, 19, 7, 18, 4, 6, 84, 11, 8, 13, 4, 19, 14, 84, 7, 14, 17, 8, 25, 14, 13, 19, 0, 11, 84, 0, 1, 18, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 2, 46, 43, 47, 30, 45, 40, 16, 46, 26, 29, 43, 26, 45, 34, 28, 17, 30, 37, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 18, 12, 14, 14, 19, 7, 84, 0, 1, 18, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 11, 34, 39, 30,
                    45, 40, 21, 30, 43, 45, 34, 28, 26, 37, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 0, 17, 2, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 11, 34, 39, 30, 45, 40, 21, 30, 43, 45, 34, 28, 26, 37, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 2, 20, 17, 21, 4, 19, 14, 84, 16, 20, 0, 3, 17, 0, 19, 8, 2, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 11, 34, 39, 30, 45, 40, 21, 30, 43, 45, 34, 28, 26, 37, 0, 27, 44, 72, 15, 0, 19, 7, 18, 4, 6, 84, 11, 8, 13, 4, 19, 14, 84, 21, 4, 17, 19, 8, 2, 0, 11, 84, 17, 4, 11, 71, 18, 21, 6, 15, 26, 45, 33, 18, 30, 32, 12, 40, 47, 30, 45, 40, 17, 30, 37, 72, 15, 0, 19, 7, 18, 4, 6, 84, 11, 8, 13, 4, 19, 14, 84, 7, 14, 17,
                    8, 25, 14, 13, 19, 0, 11, 84, 17, 4, 11, 71, 18, 21, 6, 17, 30, 39, 29, 30, 43, 34, 39, 32, 8, 39, 45, 30, 39, 45, 72, 17, 4, 13, 3, 4, 17, 8, 13, 6, 84, 8, 13, 19, 4, 13, 19, 84, 0, 20, 19, 14, 71, 18, 30, 28, 46, 43, 34, 45, 50, 15, 40, 37, 34, 28, 50, 21, 34, 40, 37, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 0, 19, 84, 19, 0, 17, 6, 4, 19, 71, 18, 30, 43, 47, 34, 28, 30, 22, 40, 43, 36, 30, 43, 17, 30, 32, 34, 44, 45, 43, 26, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 18, 45, 43, 34, 39, 32, 72, 43, 30, 41, 37, 26, 28, 30, 72, 37, 30, 39, 32, 45, 33, 71, 19, 34, 38, 30, 17, 26, 39, 32, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 19, 43, 26, 39, 44, 31, 40, 43, 38, 18,
                    45, 43, 30, 26, 38, 72, 37, 30, 39, 32, 45, 33, 71, 19, 43, 30, 30, 22, 26, 37, 36, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 20, 8, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 3, 17, 0, 6, 71, 20, 17, 8, 4, 43, 43, 40, 43, 72, 39, 26, 38, 30, 71, 20, 18, 1, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 2, 0, 15, 19, 20, 17, 8, 13, 6, 84, 15, 7, 0, 18, 4, 71, 20, 18, 1, 8, 39, 45, 30, 43, 31, 26, 28, 30, 72, 39, 26, 38, 30, 71, 20, 44, 30, 43, 12, 30, 44, 44, 26, 32, 30, 7, 26, 39, 29, 37, 30, 43, 44, 13, 26, 38, 30, 44, 41, 26, 28, 30, 72, 37, 30, 39, 32, 45, 33, 71, 21, 17, 15, 40, 44, 30, 72, 37, 30, 39, 32, 45, 33, 71, 22, 4, 1, 6, 11, 84, 29, 30, 27,
                    46, 32, 84, 43, 30, 39, 29, 30, 43, 30, 43, 84, 34, 39, 31, 40, 72, 20, 13, 12, 0, 18, 10, 4, 3, 84, 17, 4, 13, 3, 4, 17, 4, 17, 84, 22, 4, 1, 6, 11, 71, 22, 30, 26, 36, 12, 26, 41, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 0, 44, 44, 30, 38, 27, 37, 50, 72, 12, 30, 38, 40, 43, 50, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 0, 44, 44, 30, 38, 27, 37, 50, 72, 12, 40, 29, 46, 37, 30, 72, 34, 38, 41, 40, 43, 45, 44, 72, 39, 26, 38, 30, 71, 22, 30, 27, 0, 44, 44, 30, 38, 27, 37, 50, 72, 19, 26, 27, 37, 30, 72, 39, 26, 38, 30, 71, 22, 30, 27, 0, 44, 44, 30, 38, 27, 37, 50, 72, 28, 40, 38, 41, 34, 37, 30, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 0, 44, 44, 30, 38,
                    27, 37, 50, 72, 34, 39, 44, 45, 26, 39, 45, 34, 26, 45, 30, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 6, 11, 54, 2, 40, 38, 41, 46, 45, 30, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 1, 20, 5, 5, 4, 17, 84, 21, 0, 17, 8, 0, 1, 11, 4, 71, 22, 30, 27, 6, 11, 54, 2, 40, 38, 41, 46, 45, 30, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 12, 0, 23, 84, 19, 4, 23, 19, 20, 17, 4, 84, 8, 12, 0, 6, 4, 84, 20, 13, 8, 19, 18, 71, 22, 30, 27, 6, 11, 54, 2, 40, 38, 41, 46, 45, 30, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 17, 6, 1, 0, 55, 54, 5, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40,
                    39, 45, 30, 49, 45, 72, 2, 14, 11, 14, 17, 84, 0, 19, 19, 0, 2, 7, 12, 4, 13, 19, 53, 55, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 3, 17, 0, 22, 84, 1, 20, 5, 5, 4, 17, 53, 54, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 3, 17, 0, 22, 84, 1, 20, 5, 5, 4, 17, 53, 56, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 5, 17, 0, 12, 4, 1, 20, 5, 5, 4, 17, 84, 8, 13, 2, 14, 12, 15, 11, 4, 19, 4, 84, 12, 8, 18, 18, 8, 13, 6, 84, 0, 19, 19, 0, 2, 7, 12, 4, 13, 19, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39,
                    45, 30, 49, 45, 72, 17, 53, 53, 5, 84, 6, 53, 53, 5, 84, 1, 53, 52, 5, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 17, 4, 13, 3, 4, 17, 1, 20, 5, 5, 4, 17, 84, 1, 11, 20, 4, 84, 18, 8, 25, 4, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 17, 6, 60, 8, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 17, 6, 1, 57, 58, 57, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 17, 6, 1, 60, 20, 8, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19,
                    4, 23, 19, 20, 17, 4, 54, 60, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 4, 23, 19, 20, 17, 4, 84, 54, 3, 71, 22, 30, 27, 6, 11, 54, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 17, 0, 13, 18, 5, 14, 17, 12, 84, 5, 4, 4, 3, 1, 0, 2, 10, 84, 1, 20, 5, 5, 4, 17, 84, 1, 8, 13, 3, 8, 13, 6, 71, 22, 30, 27, 6, 11, 2, 40, 39, 45, 30, 49, 45, 4, 47, 30, 39, 45, 72, 3, 1, 11, 2, 11, 8, 2, 10, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 2, 14, 13, 19, 4, 23, 19, 84, 11, 14, 18, 19, 84, 22, 4, 1, 6, 11, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32,
                    2, 40, 39, 45, 30, 49, 45, 72, 6, 4, 13, 4, 17, 0, 19, 4, 84, 12, 8, 15, 12, 0, 15, 84, 7, 8, 13, 19, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 8, 13, 21, 4, 17, 19, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 14, 20, 19, 84, 14, 5, 84, 12, 4, 12, 14, 17, 24, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 18, 2, 8, 18, 18, 14, 17, 84, 1, 14, 23, 71, 22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 19, 4, 23, 19, 20, 17, 4, 54, 57, 71, 22, 30, 27, 6, 11, 19, 30, 49, 45, 46, 43, 30, 72, 37, 30, 39, 32,
                    45, 33, 71, 22, 30, 27, 10, 34, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 2, 7, 0, 13, 6, 4, 71, 22, 30, 27, 10, 34, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 10, 34, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 39, 26, 38, 30, 71, 22, 30, 27, 10, 34, 45, 2, 18, 18, 5, 34, 37, 45, 30, 43, 21, 26, 37, 46, 30, 72, 2, 18, 18, 84, 5, 8, 11, 19, 4, 17, 84, 7, 20, 4, 84, 17, 14, 19, 0, 19, 4, 71, 22, 30, 27, 10, 34, 45, 2, 18, 18, 5, 34, 37, 45, 30, 43, 21, 26, 37, 46, 30, 72, 2, 18, 18, 84, 5, 8, 11, 19, 4, 17, 84, 18, 0, 19, 20, 17, 0, 19, 4, 71, 22, 30, 27, 10, 34, 45, 12, 30,
                    29, 34, 26, 10, 30, 50, 4, 43, 43, 40, 43, 72, 12, 4, 3, 8, 0, 84, 10, 4, 24, 4, 17, 17, 84, 14, 20, 19, 15, 20, 19, 71, 22, 30, 27, 10, 34, 45, 19, 43, 26, 39, 44, 34, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 12, 14, 20, 18, 4, 14, 21, 4, 17, 71, 22, 30, 27, 10, 34, 45, 19, 43, 26, 39, 44, 34, 45, 34, 40, 39, 4, 47, 30, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 22, 30, 27, 18, 40, 28, 36, 30, 45, 72, 14, 15, 4, 13, 71, 23, 12, 11, 7, 45, 45, 41, 17, 30, 42, 46, 30, 44, 45, 72, 11, 14, 0, 3, 8, 13, 6, 71, 23, 12, 11, 7, 45, 45, 41, 17, 30, 42, 46, 30, 44, 45, 4, 47, 30, 39, 45, 19, 26, 43, 32, 30, 45, 72, 39, 26, 38, 30, 71, 23, 18, 11, 19, 15, 43, 40, 28, 30, 44, 44, 40,
                    43, 72, 37, 30, 39, 32, 45, 33, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 26, 27, 40, 43, 45, 72, 37, 30, 39, 32, 45, 33, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 38, 40, 51, 0, 29, 29, 72, 39, 26, 38, 30, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 38, 40, 51, 8, 45, 30, 38, 44, 72, 28, 40, 39, 45, 26, 34, 39, 44, 72, 37, 30, 39, 32, 45, 33, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 38, 40, 51, 8, 45, 30, 38, 44, 72, 28, 40, 39, 45, 26, 34, 39, 44, 72, 39, 26, 38, 30, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 38, 40, 51,
                    11, 30, 39, 32, 45, 33, 71, 26, 41, 41, 37, 34, 28, 26, 45, 34, 40, 39, 2, 26, 28, 33, 30, 72, 44, 48, 26, 41, 2, 26, 28, 33, 30, 72, 39, 26, 38, 30, 71, 28, 26, 28, 33, 30, 44, 72, 36, 30, 50, 44, 72, 39, 26, 38, 30, 71, 28, 26, 28, 33, 30, 44, 72, 38, 26, 45, 28, 33, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 37, 40, 26, 29, 19, 34, 38, 30, 44, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 44, 30, 26, 43, 28, 33, 72, 37, 30, 39, 32, 45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 34, 39, 44, 45, 26, 37, 37, 72, 37, 30, 39, 32, 45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 34, 39, 44, 45,
                    26, 37, 37, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 26, 29, 29, 11, 34, 44, 45, 30, 39, 30, 43, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 29, 34, 44, 41, 26, 45, 28, 33, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 29, 34, 44, 41, 26, 45, 28, 33, 19, 40, 11, 34, 44, 45, 30, 39, 30, 43, 72, 37, 30, 39, 32,
                    45, 33, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 33, 26, 44, 11, 34, 44, 45, 30, 39, 30, 43, 72, 39, 26, 38, 30, 71, 28, 33, 43, 40, 38, 30, 72, 48, 30, 27, 44, 45, 40, 43, 30, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 43, 30, 38, 40, 47, 30, 11, 34, 44, 45, 30, 39, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 28, 37, 30, 26, 43, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72, 29, 30, 27, 46, 32, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72, 29, 34, 43, 72, 39, 26, 38, 30, 71, 28,
                    40, 39, 44, 40, 37, 30, 72, 29, 34, 43, 49, 38, 37, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 32, 43, 40, 46, 41, 2, 40, 37, 37, 26, 41, 44, 30, 29, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 32, 43, 40, 46, 41, 2, 40, 37, 37, 26, 41, 44, 30, 29, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 37, 40, 32, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 41, 43, 40, 31, 34, 37, 30, 72, 37, 30, 39, 32, 45, 33, 71, 28, 40, 39, 44, 40, 37, 30, 72, 41, 43, 40, 31, 34, 37, 30, 4, 39, 29, 72, 39, 26, 38, 30, 71, 28, 40, 39, 44, 40, 37, 30, 72,
                    45, 34, 38, 30, 11, 40, 32, 72, 39, 26, 38, 30, 71, 28, 43, 30, 26, 45, 30, 8, 38, 26, 32, 30, 1, 34, 45, 38, 26, 41, 72, 37, 30, 39, 32, 45, 33, 71, 28, 43, 50, 41, 45, 40, 72, 44, 46, 27, 45, 37, 30, 72, 34, 38, 41, 40, 43, 45, 10, 30, 50, 72, 37, 30, 39, 32, 45, 33, 71, 28, 43, 50, 41, 45, 40, 72, 44, 46, 27, 45, 37, 30, 72, 47, 30, 43, 34, 31, 50, 72, 37, 30, 39, 32, 45, 33, 71, 28, 46, 44, 45, 40, 38, 4, 37, 30, 38, 30, 39, 45, 44, 72, 46, 41, 32, 43, 26, 29, 30, 72, 39, 26, 38, 30, 71, 29, 34, 44, 41, 26, 45, 28, 33, 4, 47, 30, 39, 45, 72, 39, 26, 38, 30, 71, 30, 39, 29, 84, 26, 37, 37, 84, 31, 43, 26, 38, 30, 44, 84, 34, 39, 35, 30, 28, 45, 30, 29, 71, 30,
                    49, 45, 30, 43, 39, 26, 37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29, 30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 18, 19, 48, 43, 26, 41, 72, 37, 30, 39, 32, 45, 33, 71, 30, 49, 45, 30, 43, 39, 26, 37, 72, 8, 44, 18, 30, 26, 43, 28, 33, 15, 43, 40, 47, 34, 29, 30, 43, 8, 39, 44, 45, 26, 37, 37, 30, 29, 72, 43, 30, 32, 34, 44, 45, 30, 43, 4, 39, 46, 38, 72, 43, 30, 44, 40, 37, 47, 30, 8, 39, 33, 30, 43, 34, 45, 26, 39, 28, 30, 72, 34, 44, 8, 38, 41, 37, 30, 38, 30, 39, 45, 30, 29, 1, 50, 71, 33, 34, 44, 45, 40, 43, 50, 72, 41, 46, 44, 33, 18, 45, 26, 45, 30, 72, 37, 30, 39, 32, 45, 33, 71, 34, 39, 29, 30, 49, 30, 29, 3, 1, 71, 34, 39, 29, 30, 49,
                    30, 29, 3, 1, 72, 29, 26, 45, 26, 27, 26, 44, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 34, 39, 29, 30, 49, 30, 29, 3, 1, 72, 29, 30, 37, 30, 45, 30, 3, 26, 45, 26, 27, 26, 44, 30, 72, 39, 26, 38, 30, 71, 34, 44, 18, 30, 28, 46, 43, 30, 2, 40, 39, 45, 30, 49, 45, 71, 38, 40, 47, 30, 19, 40, 72, 37, 30, 39, 32, 45, 33, 71, 38, 40, 51, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 38, 40, 51, 17, 30, 42, 46, 30, 44, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 5, 43, 26, 38, 30, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 26, 41, 41, 2, 40, 29, 30, 13, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 28,
                    41, 46, 2, 37, 26, 44, 44, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 32, 30, 40, 37, 40, 28, 26, 45, 34, 40, 39, 72, 48, 26, 45, 28, 33, 15, 40, 44, 34, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 38, 40, 51, 2, 40, 39, 45, 26, 28, 45, 44, 72, 44, 26, 47, 30, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 41, 30, 43, 38, 34, 44, 44, 34, 40, 39, 44, 72, 42, 46, 30, 43, 50, 72, 37, 30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 41, 37, 26, 45, 31, 40, 43, 38, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 43, 30, 32, 34, 44, 45, 30, 43, 2, 40, 39, 45, 30, 39, 45, 7, 26, 39, 29, 37, 30, 43, 72, 37,
                    30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 44, 30, 43, 47, 34, 28, 30, 22, 40, 43, 36, 30, 43, 72, 32, 30, 45, 17, 30, 32, 34, 44, 45, 43, 26, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 44, 30, 43, 47, 34, 28, 30, 22, 40, 43, 36, 30, 43, 72, 32, 30, 45, 17, 30, 32, 34, 44, 45, 43, 26, 45, 34, 40, 39, 44, 72, 37, 30, 39, 32, 45, 33, 71, 39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 46, 39, 43, 30, 32, 34, 44, 45, 30, 43, 15, 43, 40, 45, 40, 28, 40, 37, 7, 26, 39, 29, 37, 30, 43, 72, 39, 26, 38, 30, 71, 40, 39, 46, 39, 37, 40, 26, 29, 72, 39, 26, 38, 30, 71, 40, 41, 30, 39, 72, 37, 30, 39, 32, 45, 33, 71, 40, 41,
                    30, 39, 3, 26, 45, 26, 27, 26, 44, 30, 72, 39, 26, 38, 30, 71, 40, 41, 43, 72, 26, 29, 29, 40, 39, 44, 72, 40, 39, 3, 40, 48, 39, 37, 40, 26, 29, 15, 43, 40, 32, 43, 30, 44, 44, 72, 43, 30, 38, 40, 47, 30, 11, 34, 44, 45, 30, 39, 30, 43, 72, 37, 30, 39, 32, 45, 33, 71, 40, 43, 34, 30, 39, 45, 26, 45, 34, 40, 39, 71, 41, 26, 43, 44, 30, 5, 37, 40, 26, 45, 72, 39, 26, 38, 30, 71, 41, 26, 43, 44, 30, 8, 39, 45, 72, 37, 30, 39, 32, 45, 33, 71, 41, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 72, 28, 37, 30, 26, 43, 12, 30, 26, 44, 46, 43, 30, 44, 72, 37, 30, 39, 32, 45, 33, 71, 41, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 72, 32, 30, 45, 4, 39, 45, 43, 34, 30, 44, 72, 37,
                    30, 39, 32, 45, 33, 71, 41, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 72, 39, 26, 47, 34, 32, 26, 45, 34, 40, 39, 72, 19, 24, 15, 4, 84, 1, 0, 2, 10, 84, 5, 14, 17, 22, 0, 17, 3, 71, 41, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 72, 39, 26, 47, 34, 32, 26, 45, 34, 40, 39, 72, 19, 24, 15, 4, 84, 13, 0, 21, 8, 6, 0, 19, 4, 71, 41, 30, 43, 31, 40, 43, 38, 26, 39, 28, 30, 72, 39, 26, 47, 34, 32, 26, 45, 34, 40, 39, 72, 45, 50, 41, 30, 71, 43, 30, 42, 46, 30, 44, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 5, 43, 26, 38, 30, 72, 39, 26, 38, 30, 71, 43, 30, 44, 34, 51, 30, 1, 50, 72, 37, 30, 39, 32, 45, 33, 71, 44, 28, 43, 40, 37, 37, 72, 37, 30, 39, 32, 45, 33, 71, 44, 28, 43, 40,
                    37, 37, 1, 50, 72, 37, 30, 39, 32, 45, 33, 71, 44, 30, 45, 8, 39, 45, 30, 43, 47, 26, 37, 72, 37, 30, 39, 32, 45, 33, 71, 44, 30, 45, 19, 34, 38, 30, 40, 46, 45, 72, 39, 26, 38, 30, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 72, 28, 26, 39, 28, 30, 37, 72, 37, 30, 39, 32, 45, 33, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 72, 28, 26, 39, 28, 30, 37, 72, 39, 26, 38, 30, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 72, 41, 26, 46, 44, 30, 72, 37, 30, 39, 32, 45, 33, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 72, 41, 26, 46, 44, 30, 29, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33,
                    30, 44, 34, 44, 72, 43, 30, 44, 46, 38, 30, 72, 39, 26, 38, 30, 71, 44, 41, 30, 30, 28, 33, 18, 50, 39, 45, 33, 30, 44, 34, 44, 72, 44, 41, 30, 26, 36, 34, 39, 32, 71, 45, 40, 40, 37, 27, 26, 43, 72, 47, 34, 44, 34, 27, 37, 30, 71, 47, 34, 44, 46, 26, 37, 21, 34, 30, 48, 41, 40, 43, 45, 72, 41, 26, 32, 30, 11, 30, 31, 45, 71, 47, 34, 44, 46, 26, 37, 21, 34, 30, 48, 41, 40, 43, 45, 72, 41, 26, 32, 30, 19, 40, 41, 71, 47, 34, 44, 46, 26, 37, 21, 34, 30, 48, 41, 40, 43, 45, 72, 48, 34, 29, 45, 33, 71, 48, 30, 27, 36, 34, 45, 2, 26, 39, 28, 30, 37, 17, 30, 42, 46, 30, 44, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 5, 43, 26, 38, 30, 72, 37, 30, 39, 32, 45, 33, 71, 48,
                    30, 27, 36, 34, 45, 17, 19, 2, 15, 30, 30, 43, 2, 40, 39, 39, 30, 28, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 48, 30, 27, 36, 34, 45, 18, 41, 30, 30, 28, 33, 6, 43, 26, 38, 38, 26, 43, 72, 39, 26, 38, 30, 71, 48, 30, 27, 36, 34, 45, 18, 41, 30, 30, 28, 33, 6, 43, 26, 38, 38, 26, 43, 11, 34, 44, 45, 72, 37, 30, 39, 32, 45, 33, 71, 48, 30, 27, 36, 34, 45, 18, 41, 30, 30, 28, 33, 17, 30, 28, 40, 32, 39, 34, 45, 34, 40, 39, 72, 37, 30, 39, 32, 45, 33, 71, 48, 30, 27, 36, 34, 45, 18, 41, 30, 30, 28, 33, 17, 30, 28, 40, 32, 39, 34, 45, 34, 40, 39, 72, 39, 26, 38, 30, 71, 50, 26, 39, 29, 30, 49, 72, 38, 30, 29, 34, 26, 72, 44, 30, 45, 12, 46, 45, 30, 18, 45, 26, 45, 30,
                    72, 37, 30, 39, 32, 45, 33, 71, 50, 26, 39, 29, 30, 49, 72, 41, 46, 27, 37, 34, 28, 5, 30, 26, 45, 46, 43, 30, 72, 26, 43, 30, 19, 26, 27, 3, 30, 44, 34, 32, 39, 18, 30, 45, 45, 34, 39, 32, 44, 4, 39, 26, 27, 37, 30, 29, 72, 39, 26, 38, 30, 71, 50, 26, 39, 29, 30, 49, 72, 41, 46, 27, 37, 34, 28, 5, 30, 26, 45, 46, 43, 30, 72, 30, 39, 26, 27, 37, 30, 15, 43, 40, 45, 30, 28, 45, 72, 37, 30, 39, 32, 45, 33, 71, 50, 26, 39, 29, 30, 49, 72, 41, 46, 27, 37, 34, 28, 5, 30, 26, 45, 46, 43, 30, 72, 32, 30, 45, 22, 26, 37, 37, 41, 26, 41, 30, 43, 8, 39, 31, 40, 72, 39, 26, 38, 30, 71, 50, 26, 39, 29, 30, 49, 72, 41, 46, 27, 37, 34, 28, 5, 30, 26, 45, 46, 43, 30, 72, 34, 44,
                    15, 43, 40, 45, 30, 28, 45, 4, 39, 26, 27, 37, 30, 29, 72, 37, 30, 39, 32, 45, 33, 71, 50, 26, 39, 29, 30, 49, 72, 41, 46, 27, 37, 34, 28, 5, 30, 26, 45, 46, 43, 30, 72, 34, 44, 22, 26, 37, 37, 41, 26, 41, 30, 43, 17, 40, 45, 26, 45, 34, 40, 39, 14, 39, 72, 37, 30, 39, 32, 45, 33
                ],
                k = a.g.a([46, 39, 29, 30, 31, 34, 39, 30, 29]),
                m = a.g.a([77]),
                l = a.g.a([72]),
                b;
            a.v.a = function() {
                if (void 0 !== b) return a.b.e(b);
                b = {};
                var c = a.c.d;
                try {
                    var e = c.document,
                        f = e.body,
                        l = c.innerWidth || e.documentElement.clientWidth || f.clientWidth,
                        k = c.innerHeight || e.documentElement.clientHeight || f.clientHeight,
                        m =
                        c.outerWidth || f.offsetWidth,
                        w = c.outerHeight || f.offsetHeight
                } catch (n) {}
                try {
                    var A = c.screenX || c.screenLeft || c.screenX,
                        t = c.screenY || c.screenTop || c.screenY
                } catch (n) {}
                var e = (new u).getTimezoneOffset(),
                    f = a.g.a([84, 41, 33, 26, 39, 45, 40, 38]),
                    p = a.g.a([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38]),
                    c = !0 === ("undefined" != typeof c[f] || "undefined" != typeof c[p]) ? 1 : 0;
                a.b.g() || a.c.am().isInApp || (b.ud = a.g.b);
                var f = b,
                    q;
                try {
                    for (var x = [a.g.a([47, 30, 39, 29, 40, 43]), a.g.a([41, 37, 26, 45, 31, 40, 43, 38]), a.g.a([46, 44, 30, 43, 0, 32, 30, 39, 45]), a.g.a([48,
                            30, 27, 29, 43, 34, 47, 30, 43
                        ])], p = {}, C = 0; C < x.length; C++) p[x[C]] = window.navigator[x[C]];
                    q = a.g.i(a.g.j(p))
                } catch (n) {
                    q = ""
                }
                f.qn = q;
                b.qp = a.g.l.join("");
                q = b;
                if (document && document.body) {
                    x = document.createElement(a.g.a([34, 31, 43, 26, 38, 30]));
                    x.width = a.g.a([53, 41, 49]);
                    x.height = a.g.a([53, 41, 49]);
                    x.style.left = "-" + a.g.a([61, 61, 61, 61, 41, 49]);
                    x.style.top = "-" + a.g.a([61, 61, 61, 61, 41, 49]);
                    x.style.position = a.g.a([26, 27, 44, 40, 37, 46, 45, 30]);
                    document.body.appendChild(x);
                    for (var f = a.g.a(g).split(a.g.a([71])), p = f.length, r = [], C =
                            0; C < p; C++) r.push(h(f[C], x.contentWindow));
                    document.body.removeChild(x);
                    x = a.g.a(r)
                } else x = "";
                q.is = x;
                b.iv = 7;
                b.qt = c;
                b.gz = a.c.ap() ? 1 : 0;
                b.hh = a.c.aq() ? 1 : 0;
                b.hn = a.c.ar() ? 1 : 0;
                var c = b,
                    D;
                try {
                    D = !a.d.d(window.top) && window.top.name ? a.g.i(window.top.name.substring(0, 50 > window.top.name.length ? window.top.name.length : 50)) : ""
                } catch (n) {
                    D = ""
                }
                c.tw = D;
                b.qc = A;
                b.qd = t;
                b.qf = l;
                b.qe = k;
                b.qh = m;
                b.qg = w;
                b.qm = e;
                b.qa = a.c.w;
                b.qb = a.c.x;
                b.qi = a.c.u;
                b.qj = a.c.v;
                b.po = d();
                return a.b.e(b)
            }
        })(q);
        (function(a) {
            function h(b) {
                var c = a.g.r(!0);
                (b =
                    a.a.a(35, b, c, !1, !0)) && b.res && (b = "https://geo.moatads.com/n.js?" + b.res.querystring + ("&callback=" + (a.c.au + "." + a.g.ag)), c = document.createElement("script"), a.b.bq(b, document.body || document.getElementsByTagName("script")[0] || document.getElementsByTagName("head")[0], c), a.g.af.push(c))
            }
            a.g.m = 1;
            a.g.n = !1;
            a.g.o = {};
            a.g.p = [];
            a.g.q = {};
            a.g.q.a = "appendSpecifics";
            a.g.q.b = "appendManual";
            a.g.q.c = "onlyHooman";
            a.g.q.d = "onlyBot";
            a.g.q.e = "onlyNonHiddenAd";
            var d = {};
            (function() {
                a.c.fb() && a.k.e(function() {
                    try {
                        a.c.d.navigator.getBattery().then(function(a) {
                            d.charging =
                                a.charging;
                            d.level = a.level
                        })["catch"](function(a) {})
                    } catch (b) {}
                }, 1E3)
            })();
            a.g.r = function(b) {
                var c = a.v.a();
                if (void 0 === b || !1 === b) c.ql = a.g.s, c.qo = a.g.t;
                c.qr = a.g.u();
                d && "undefined" !== typeof d.charging && a.b.cc(d.level) && (c.vf = d.charging ? 1 : 0, c.vg = 100 * d.level);
                return c
            };
            var g = a.g.a([48, 30, 27, 29, 43, 34, 47, 30, 43]),
                k = a.g.a([30, 47, 26, 37, 46, 26, 45, 30]),
                m = a.g.a([43, 30, 44, 41, 40, 39, 44, 30]),
                l = [g, k].join("-"),
                b = [l, m].join("-");
            try {
                a.g.s = a.g.i(a.g.j(a.c.d.navigator.plugins, "name"))
            } catch (f) {}
            a.g.u = function() {
                return 0
            };
            a.g.t = 0;
            a.g.v = function() {};
            var c = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            a.g.w = function(b, e, d) {
                if ((a.g.q.a in e || a.g.q.b in e) && void 0 === a.g.x) return !1;
                var g = a.b.e(a.g.x);
                void 0 === g.n && a.w.a(d) && (g.n = 1);
                a.g.q.a in e ? a.b.forEach(c, function(a, c) {
                    b = a in g ? b + ("&" + a + "=1") : b + ("&" + a + "=0")
                }) : a.g.q.b in e && a.b.forEach(c, function(c, e) {
                    a.b.ad(a.g.q.b, c) && (b = c in g ? b + ("&" + c + "=1") : b + ("&" + c + "=0"))
                });
                return a.g.q.c in e && a.g.q.e in e ? a.g.y(d) ? a.g.z(b) : !1 : a.g.q.c in e ? 0 === a.g.aa ? a.g.z(b) : !1 : a.g.q.d in e ? 1 ===
                    a.g.aa ? a.g.z(b) : !1 : a.g.z(b)
            };
            a.g.z = function(b) {
                (new a.c.d.Image).src = b;
                return !0
            };
            a.g.ab = function(b, c) {
                b(a.g.aa)
            };
            a.g.ac = function(a, b, c) {
                e.add(a, b, c)
            };
            a.g.ad = function(b, c) {
                if (void 0 === a.g.aa) return a.g.p.push({
                    callback: b,
                    opts: c
                });
                a.g.ab(b, c)
            };
            a.g.ae = function() {
                for (var b = 0; b < a.g.p.length; b++)
                    if (a.g.p.hasOwnProperty(b)) {
                        var c = a.g.p[b];
                        a.g.ab(c.callback, c.opts)
                    }
            };
            a.g.af = [];
            a.g.ah = function(b) {
                if (p) {
                    a.g.ag = "gna" + n.floor(1E6 * n.random());
                    var c;
                    p[a.g.ag] = function(b) {
                        a.g.ai = new u - a.g.aj;
                        c = b;
                        p[a.g.ag] = null;
                        delete p[a.g.ag];
                        c && (a.g.x = c, p.jsonpcache = c, a.g.aa = "n" in a.g.x ? 1 : 0, e.checkPixels(), a.g.ae())
                    };
                    a.g.aj = new u;
                    a.k.f(function() {
                        a.g.ak = new u - a.g.aj
                    }, 0);
                    if (p.jsonpcache) p[a.g.ag](p.jsonpcache);
                    else h(b)
                } else a.k.f(setupNadoListener, 200)
            };
            a.g.al = function(b, c) {
                void 0 === a.g.o[b] && (a.g.o[b] = 1 / a.g.m < n.random());
                if (a.g.o[b]) return !1;
                var e = a.g.r();
                a.x && a.x.a && a.x.a.imaSDK ? b.moatClientLevel3 && a.a.a(34, b, e, !1, !0) : a.a.a(34, b, e, !1, !0);
                return !0
            };
            a.g.am = function() {
                return [a.g.a([30, 39, 28, 40, 29, 30, 20, 17, 8]), a.g.a([29,
                    30, 28, 40, 29, 30, 20, 17, 8
                ]), a.g.a([30, 39, 28, 40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45]), a.g.a([29, 30, 28, 40, 29, 30, 20, 17, 8, 2, 40, 38, 41, 40, 39, 30, 39, 45])]
            };
            a.g.an = function(c) {
                if (!0 !== a.g.ao && (a.g.ao = !0, a.g.al(c))) {
                    var e = function() {
                            var b = {};
                            b.qr = a.g.u();
                            b.qo = a.g.t;
                            a.a.a(36, c, b)
                        },
                        d = a.c.d.document;
                    a.k.c(d, l, function(b) {
                        a.k.d(d, l, null, "mswe");
                        a.g.u = function() {
                            return 1
                        };
                        e()
                    }, "mswe");
                    a.k.c(d, b, function(c) {
                        a.k.d(d, b, null, "mswer");
                        a.g.u = function() {
                            return 1
                        };
                        e()
                    }, "mswer")
                }
            };
            a.g.ap = function() {
                if (a.g.af) {
                    for (var b =
                            0, c = a.g.af.length; b < c; b++) try {
                        a.g.af[b].parentNode && a.g.af[b].parentNode.removeChild(a.g.af[b])
                    } catch (e) {}
                    a.g.af = null
                }
            };
            a.g.aq = function() {
                var c = a.c.d.document;
                a.k.d(c, l, null, "mswe");
                a.k.d(c, b, null, "mswer");
                a.g.ap()
            };
            a.g.y = function(b) {
                return 0 == a.g.aa && !1 === a.w.a(b)
            };
            a.g.ar = function() {
                return !1
            };
            a.g.as = function() {
                var a;
                a = n && n.sinh ? 1E10 * (n.sinh(n.sinh(n.sinh(n.sinh(1)))) - 3.81278003) : -2;
                a = a.toString();
                return 0 === a.indexOf("7.600") ? a.substring(5) : -1
            };
            var e = function() {
                function b(a, c, e) {
                    this.pixel = a;
                    this.opts =
                        c;
                    this.adNum = e
                }

                function c() {
                    a.b.forEach(e, function(b, c) {
                        a.g.w(b.pixel, b.opts, b.adNum) && delete e[c]
                    })
                }
                var e = {};
                a.i.a.azsx("hiddenAds:updated", c);
                return {
                    add: function(d, g, h) {
                        d = new b(d, g, h);
                        g = a.b.ci();
                        e[g] = d;
                        c()
                    },
                    checkPixels: c
                }
            }();
            a.i.a.azsx("allLocalAdsKilled", a.g.aq, {
                once: !0
            })
        })(q);
        (function(a) {
            function h(d) {
                d.functionInProgress = !1;
                return 0 < d.pendingFunctions.length ? (d = d.pendingFunctions.shift(), a.b.cf(d, a.y.call, a.y)(), !0) : !1
            }

            function d() {
                try {
                    a = window.__b, (0, window.__w)("INNER_FUNCTION"), window.__w =
                        void 0, window.__b = void 0
                } catch (c) {
                    var d = c.name + " in closure (moat.customIframe): " + c.message + ", stack=" + c.stack;
                    try {
                        var b = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("BUZZFEED_PREBID_HEADER1") + "&ac=1&k=" + escape(d) + "&ar=" + escape("dfc91e5-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new u).getTime();
                        (new Image(1, 1)).src = b
                    } catch (e) {}
                }
            }

            function g(g) {
                if (!g) return !1;
                var b = g.iframe,
                    c = b.contentWindow.document,
                    e = g.innerFunction,
                    f = g.innerFunctionCbName,
                    k = g.preserveDom;
                !1 !== a.c.eo() ? (k = c.createElement("script"), k.innerHTML = d.toString().replace('"INNER_FUNCTION"', e), c.body.appendChild(k)) : (e = "<html><head></head><body><script>" + d.toString().replace('"INNER_FUNCTION"', e) + "\x3c/script>", k || (e += "<script>setTimeout(function() { document.close(); }, 1);\x3c/script>"), c.write(e + "</body></html>"));
                b.contentWindow.__b = g.Moat;
                b.contentWindow.__w = g.wrapper;
                b.contentWindow[d.toString().match(/function (\w+)\(\)/)[1]]();
                f && a.c.aw[f] && (a.c.aw[f] = null);
                if (!h(g.frameData)) a: if (c =
                    g.setIframeDomain, g = g.preserveDom, b) {
                    var m;
                    if (!c) try {
                        m = b.contentWindow.document
                    } catch (n) {
                        break a
                    }
                    f = !1 === a.c.eo();
                    g ? c ? b.src = "javascript:document.close();" : m.close() : c ? b.src = f ? "javascript:document.open(); document.close();" : 'javascript:document.head && (document.head.innerHTML=""); document.body && (document.body.innerHTML="");' : f ? (m.open(), m.close()) : (m.head && (m.head.innerHTML = ""), m.body && (m.body.innerHTML = ""))
                }
            }

            function k(a, b) {
                b = b || {
                    width: "1px",
                    height: "1px",
                    style: {
                        left: "-9999px",
                        top: "-9999px",
                        position: "absolute"
                    }
                };
                for (var c in b)
                    if (b.hasOwnProperty(c))
                        if ("style" === c)
                            if ("string" === typeof b[c]) a.setAttribute(c, b[c]);
                            else
                                for (var e in b[c]) b[c].hasOwnProperty(e) && (a[c][e] = b[c][e]);
                else a[c] = b[c]
            }

            function m(a) {
                if ("string" !== typeof a) return "";
                var b = a.charAt(0);
                "'" !== b && '"' !== b && (a = "'" + a + "'");
                return a
            }
            a.y = {};
            a.y.a = function(d, b, c, e) {
                if (!d) return !1;
                try {
                    var f = document.createElement("iframe"),
                        g = b || a.b.ci();
                    if (!f) return !1;
                    k(f, e);
                    var m;
                    c ? (c = a.b.bp(c), m = function() {
                        a.b.bo(f, c)
                    }) : (c = a.c.d.document.body, m = function() {
                        c.insertBefore(f,
                            c.insertBefore[0] || null)
                    });
                    var n = {
                        id: g,
                        iframe: f,
                        functionInProgress: !1,
                        pendingFunctions: [],
                        parent: c,
                        loaded: !1
                    };
                    f.onload = function() {
                        f.contentWindow && f.contentDocument && !n.loaded && (n.loaded = !0, h(n))
                    };
                    m();
                    n.loaded = n.loaded || f.contentDocument && "complete" === f.contentDocument.readyState;
                    d.customIframes || (d.customIframes = {});
                    d.customIframes[g] = n;
                    n.loaded && h(n);
                    a.i.a.azsx("adKilled", function() {
                        var b = d.customIframes,
                            c;
                        for (c in b) b.hasOwnProperty(c) && a.y.b(d, b[c].id)
                    }, {
                        condition: function(a) {
                            return d.zr == a.zr
                        },
                        once: !0
                    });
                    return g
                } catch (w) {}
                return !1
            };
            a.y.b = function(a, b, c) {
                var d = a.customIframes[b];
                c = d && d.iframe;
                if (!d || !c) return !1;
                d = d.parent;
                if (!d) return !1;
                try {
                    d.removeChild(c)
                } catch (f) {}
                a.customIframes[b] = null;
                delete a.customIframes[b];
                return !0
            };
            a.y.call = function(d, b, c, e, f, h) {
                if (!d || "undefined" === typeof b) return !1;
                var k = d && d.customIframes && d.customIframes[b];
                if (!k || !c) return !1;
                e = e && "string" !== typeof e ? e.toString() : m(e);
                c && "string" !== typeof c && (c = a.b.cn(c, e));
                f && "function" === typeof f || (f = function() {});
                if (k.functionInProgress ||
                    !k.loaded) return k.pendingFunctions.push([d, b, c, e, f, h]), !1;
                d = k.iframe;
                k.functionInProgress = !0;
                b = !1;
                try {
                    if (!k.iframe.contentDocument) throw Error();
                } catch (w) {
                    b = !0
                }
                c = a.k.l(a.b.cf([{
                    iframe: d,
                    frameData: k,
                    Moat: a,
                    wrapper: function(a) {
                        f(a)
                    },
                    innerFunction: c,
                    innerFunctionCbName: p,
                    setIframeDomain: b,
                    preserveDom: h
                }], g));
                if (b) {
                    var p;
                    do p = "Moat#iqcb" + n.floor(1E4 * n.random()); while (a.c.aw[p]);
                    a.c.d[a.c.ax][p] = c;
                    d.src = 'javascript:document.open(); document.domain="' + document.domain + '"; window.parent["' + a.c.ax + '"]["' +
                        p + '"]();'
                } else c()
            }
        })(q);
        (function(a) {
            a.z = {};
            a.z.a = n.floor(1E8 * n.random());
            a.z.b = function(h, d, g, k) {
                if (p && (d && (d += "_" + a.z.a), !p.jsonp || !p.jsonp[h])) {
                    p.jsonp = p.jsonp || {};
                    p.jsonp[h] = p.jsonp[h] || {
                        cachedResponse: !1
                    };
                    var m = p.xb || window,
                        l = m.document;
                    m[d] = function(a) {
                        p.jsonp[h].cachedResponse = a;
                        p.swde.zaxs(h + "JsonpReady", a);
                        m[d] = null
                    };
                    var b = l.createElement("script"),
                        l = l.body || l.getElementsByTagName("head")[0] || l.getElementsByTagName("script")[0];
                    "undefined" === typeof k && (k = "callback");
                    g = [g, "&", k, "=", d].join("");
                    a.b.bq(g, l, b)
                }
            };
            a.z.c = function(h, d) {
                p.jsonp && p.jsonp[h] && p.jsonp[h].cachedResponse ? a.b.cf([p.jsonp[h].cachedResponse], d)() : p.swde.azsx(h + "JsonpReady", d, {
                    once: !0
                })
            }
        })(q);
        (function(a) {
            a.aa = {};
            var h = (googletag = window.googletag || {}, googletag.apiReady) && googletag.pubads() || !1;
            googletag.apiReady && h || (googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
                h = googletag && googletag.apiReady && googletag.pubads()
            }));
            a.aa.a = function(d) {
                if (h) d();
                else if (googletag && googletag.apiReady && googletag.pubads()) h =
                    googletag.pubads(), d();
                else {
                    googletag = window.googletag || {};
                    googletag.cmd = googletag.cmd || [];
                    var g = a.k.l(d);
                    googletag.cmd.push(function() {
                        (h = googletag && googletag.apiReady && googletag.pubads()) && g()
                    })
                }
            };
            a.aa.b = function() {
                return "function" !== typeof h.getSlots ? !1 : h.getSlots()
            };
            a.aa.c = function(a) {
                return h.getTargeting(a)
            };
            a.aa.d = function() {
                if ("function" !== typeof h.getTargetingKeys || "function" !== typeof h.getTargeting) return !1;
                var d = h.getTargetingKeys(),
                    g = {};
                a.b.forEach(d, function(a) {
                    g[a] = h.getTargeting(a)
                });
                return g
            };
            a.aa.e = function(a, g) {
                if ("function" !== typeof h.setTargeting) return !1;
                h.setTargeting(a, g);
                return !0
            };
            a.aa.f = function(a) {
                if ("function" !== typeof h.clearTargeting) return !1;
                h.clearTargeting(a)
            };
            a.aa.g = function(a, g) {
                return a && "function" === typeof a.getTargeting && g ? a.getTargeting(g) : !1
            };
            a.aa.h = function(a, g, h) {
                if (!(a && g && h && "function" === typeof a.setTargeting)) return !1;
                a.setTargeting(g, h)
            };
            a.aa.i = function(a, g) {
                if (!a || "function" !== typeof a.clearTargeting) return !1;
                a.clearTargeting(g)
            };
            a.aa.j = function(a) {
                if (!a) return !1;
                for (var g = "function" === typeof a.getSlotElementId && a.getSlotElementId(), h = g && document.getElementById(g), m = "function" === typeof a.getAdUnitPath && a.getAdUnitPath(), l = "function" === typeof a.getTargetingKeys && "function" === typeof a.getTargeting && a.getTargetingKeys(), b = {}, c = 0; c < l.length; c++) b[l[c]] = a.getTargeting(l[c]);
                return {
                    id: g,
                    element: h,
                    adUnitPath: m,
                    targetingKeys: l,
                    targetingKeyValues: b
                }
            };
            a.aa.k = function(d, g) {
                if (d && g && h && "function" === typeof h.addEventListener) {
                    var k = a.k.l(g);
                    h.addEventListener(d, k)
                }
            }
        })(q);
        (function(a) {
            function h() {
                if (!r && q !== c.LOADING) {
                    r = !0;
                    a.ab.a.allData = (new u).getTime();
                    var b = window.moatYieldReady;
                    "function" === typeof b && a.k.l(b)()
                }
            }

            function d(b) {
                var c;
                c = g(b) ? f.c : f.b;
                a.aa.a(function() {
                    a.aa.e(e.d, c);
                    a.aa.e(e.e, c)
                })
            }

            function g(a) {
                return "object" === typeof a && !1 !== a._pbd
            }

            function k() {
                function b(a) {
                    k && console.log(">>>MOAT YIELD INTELLIGENCE/" + a)
                }

                function c(b, d) {
                    return a.b.bn(function(c) {
                        return (c = a.aa.g(b, c)) && c.length && 1 <= c.length ? c[0] : ""
                    }, d).join("|")
                }

                function d(k) {
                    var l, m, n;
                    if (!p) return b("setMoatTargetingForSlot: No data mapping available, not setting targeting."),
                        a.aa.h(k, e.d, f.d), a.aa.h(k, e.e, f.d), !1;
                    if (!g(p)) return b("setMoatTargetingForSlot: No data mapping available, not setting targeting."), a.aa.h(k, e.d, f.e), a.aa.h(k, e.e, f.e), !1;
                    if (!k || "function" !== typeof k.getSlotElementId) return b("setMoatTargetingForSlot: Slot is missing, not setting targeting."), !1;
                    l = k.getSlotElementId();
                    if (a.b.b("pos")) n = c(k, "pos");
                    else {
                        m = a.aa.g(k, "pos");
                        if (!m) return b("setMoatTargetingForSlot: slotId " + l + "; Failed to get pos targeting array, not setting targeting."), !1;
                        n = m[0];
                        if ("undefined" ===
                            typeof n) return b("setMoatTargetingForSlot: slotId " + l + "; No targeting data set for pos, not setting targeting."), !1
                    }
                    m = p[n] && p[n][h];
                    if (!m) return b("setMoatTargetingForSlot: slotId " + l + "; No historical data found for pos of " + n + ", not setting targeting."), a.aa.h(k, e.d, f.f), a.aa.h(k, e.e, f.f), !1;
                    for (var t in m)
                        if (a.b.bz(m, t)) {
                            var q = m[t];
                            if (a.b.cc(q)) {
                                b("setMoatTargetingForSlot: slotId " + l + "; Setting " + t + " value of " + q + ".");
                                n = parseInt(q);
                                q = q.toString();
                                if ("number" === typeof n && 0 === n % 10 && 10 < n && 100 >= n)
                                    for (q = [q], n = n / 10 - 1; 0 < n; n--) q.push((10 * n).toString());
                                a.aa.h(k, t, q)
                            }
                        }
                }
                var h, k = !1,
                    l, m, n, p;
                h = a.c.cw ? "Mobile" : "Desktop";
                this.slotDataAvailable = function() {
                    return g(p) ? !!p : !1
                };
                this.pageDataAvailable = function() {
                    return !1
                };
                this.safetyDataAvailable = function() {
                    return !1
                };
                this.enableLogging = function() {
                    return k = !0
                };
                this.disableLogging = function() {
                    k = !1;
                    return !0
                };
                this.setMoatTargetingForSlot = function(b) {
                    b = a.b.cf([b], d);
                    a.aa.a(b)
                };
                this.setMoatTargetingForAllSlots = function() {
                    a.aa.a(function() {
                        var c = a.aa.b();
                        if (!c) return b("setMoatTargetingForAllSlots: Failed to get slots from GPT, not setting targeting."), !1;
                        a.b.forEach(c, function(a) {
                            d(a)
                        }, this)
                    })
                };
                this.getMoatTargetingForSlot = function(d) {
                    var e, f;
                    switch (typeof d) {
                        case "string":
                            var g = a.aa.b();
                            if (!a.b.b(g)) {
                                b("getMoatTargetingForSlot: No valid slot identifier provided, exiting.");
                                return
                            }
                            a.b.forEach(g, function(a) {
                                if ("function" === typeof a.getSlotElementId && a.getSlotElementId() === d) return f = a, !1
                            });
                            break;
                        case "object":
                            if ("function" !== typeof d.getSlotElementId) {
                                b("getMoatTargetingForSlot: No valid slot identifier provided, exiting.");
                                return
                            }
                            f = d;
                            f.getSlotElementId();
                            break;
                        default:
                            b("getMoatTargetingForSlot: No valid slot identifier provided, exiting.");
                            return
                    }
                    if ("object" === typeof f && "function" === typeof f.getTargeting) {
                        var k = "pos";
                        a.b.b(k) ? e = c(f, k) : "string" === typeof k && (g = a.aa.g(f, k)) && g.length && 1 <= g.length && (e = g[0])
                    } else b("getMoatTargetingForSlot: Failed to get slot targeting, GPT slot object is invalid.");
                    "string" !== typeof e && (e = "");
                    e = p && p[e] && p[e][h] || {};
                    e[k.b] = _safetyTargeting;
                    e[k.c] = _categoryTargeting;
                    e[k.a] = _ivtTargeting;
                    return e
                };
                this.getMoatTargetingForPage =
                    function() {
                        var a = {};
                        a[e.b] = l;
                        a[e.c] = m;
                        a[e.a] = n;
                        return a
                    };
                this.__A = function(a, b) {
                    l = a;
                    m = b
                };
                this.__B = function(a) {
                    n = a
                };
                this.__C = function(a) {
                    p = a
                }
            }
            a.ab = {};
            var m = n.floor(n.random() * n.pow(10, 12)),
                l = a.b.w(),
                b = a.b.u();
            a.ab.a = {
                wrapper: window.moatHeaderInitTime || a.c.bc,
                apiReady: null,
                nadoData: null,
                allData: null
            };
            a.ab.b = {
                rendered: 0,
                slotTargetingLoaded: 0,
                slotTargetingSet: 0,
                pageDataTargetingSet: 0,
                safetyTargetingSet: 0,
                emptySlot: 0
            };
            var c = {
                    LOADING: "0",
                    LOADED: "1"
                },
                e = {
                    a: "m_data",
                    b: "m_safety",
                    c: "m_categories",
                    d: "m_mv",
                    e: "m_gv"
                },
                f = a.c.ff,
                q = c.LOADING,
                r = !1;
            a.ab.c = function() {
                function b(c) {
                    if (!c || !a.b.b(c)) return c;
                    var e = "gv_adult gv_arms gv_crime gv_death_injury gv_download gv_drugs gv_hatespeech gv_military gv_obscenity gv_terrorism gv_tobacco moat_safe moat_unsafe moat_sensitive".split(" ");
                    return a.b.filter(c, function(a) {
                        return a && -1 !== e.indexOf(a)
                    })
                }
                var f = new k;
                window.moatPrebidApi = f;
                h();
                a.ab.d(0);
                a.ab.a.apiReady = (new u).getTime();
                a.z.c("nado-all", function(g) {
                    var k, l, m;
                    if ("object" !== typeof g) return !1;
                    m = "0";
                    g &&
                        "n" in g && (m = "1");
                    a.aa.a(function() {
                        a.aa.e(e.a, m)
                    });
                    f.pageDataAvailable = function() {
                        return !0
                    };
                    f.__B(m);
                    var p = a.b.cr(new RegExp(".*callback=" + g.callback + ".*"));
                    (p = a.b.cq(p)) && p.responseEnd && g.h && (a.ab.a.nadoResponseEnd = p.responseEnd, a.ab.a.nadoResponseExecution = n.round(g.h));
                    a.b.cc(g.d) && (p = g.d + 2, a.b.ad([2, 3, 4], p) ? k = "unsafe" : 6 === p ? k = "sensitive" : a.b.ad([0, 1, 5, 7, 8, 9], p) && (k = "safe"));
                    g.c && a.b.b(g.c) && (l = g.c);
                    k && a.aa.a(function() {
                        a.aa.e(e.b, k)
                    });
                    l && (l = b(l), a.aa.a(function() {
                        a.aa.e(e.c, l)
                    }));
                    f.safetyDataAvailable =
                        function() {
                            return !0
                        };
                    f.__A(k, l);
                    g = g.yi;
                    d(g);
                    f.__C(g);
                    a.ab.a.nadoData = (new u).getTime();
                    q = c.LOADED;
                    h();
                    a.ab.d(44)
                })
            };
            a.ab.e = function() {
                var b = a.b.cf(["slotRenderEnded", function(b) {
                    if ("undefined" !== typeof b && "undefined" !== typeof b.slot) {
                        var c = window.moatPrebidApi,
                            d = b.slot;
                        if (!c) return !1;
                        var f = {
                            slotTargetingLoaded: !1,
                            slotTargetingSet: !1,
                            pageDataTargetingSet: !1,
                            safetyTargetingSet: !1,
                            emptySlot: !1
                        };
                        f.slotTargetingLoaded = c.slotDataAvailable();
                        "undefined" !== typeof a.aa.g(d, e.d)[0] && (f.slotTargetingSet = !0);
                        b.isEmpty && (f.emptySlot = !0);
                        "undefined" !== typeof a.aa.c(e.a)[0] && (f.pageDataTargetingSet = !0);
                        "undefined" !== typeof a.aa.c(e.b)[0] && (f.safetyTargetingSet = !0);
                        a.ab.b.rendered++;
                        a.b.forEach(f, function(b, c) {
                            !0 === b && a.ab.b[c]++
                        });
                        a.ab.d(43, d, f)
                    }
                }], a.aa.k);
                a.aa.a(b)
            };
            a.ab.d = function(c, e, d) {
                d = {};
                d.e = c;
                d.t = a.c.bc;
                d.de = m;
                d.d = "BUZZFEED_PREBID_HEADER1:" + (a.c.cw ? "Mobile" : "Desktop") + ":-:-";
                d.i = "YIELD_INTELLIGENCE_INTERNAL1";
                d.ar = "dfc91e5-clean";
                43 === c && "undefined" !== typeof e && (c = e.getSlotElementId(), d.zMoatDfpSlotId =
                    c || "-");
                d.zMoatRendered = a.ab.b.rendered;
                d.zMoatSlotTargetingLoaded = a.ab.b.slotTargetingLoaded;
                d.zMoatSlotTargetingSet = a.ab.b.slotTargetingSet;
                d.zMoatPageDataTargetingSet = a.ab.b.pageDataTargetingSet;
                d.zMoatSafetyTargetingSet = a.ab.b.safetyTargetingSet;
                d.zMoatEmptySlot = a.ab.b.emptySlot;
                e = a.ab.a.wrapper;
                var f = a.ab.a.nadoData;
                c = a.ab.a.allData;
                d.zMoatNadoDataLoadTime = f && f - e || "Not Loaded";
                d.zMoatAllDataLoadTime = c && c - e || "Not Loaded";
                a.ab.a.nadoResponseEnd && a.ab.a.nadoResponseExecution && (d.zMoatNL = a.ab.a.nadoResponseExecution -
                    a.ab.a.nadoResponseEnd);
                d.bo = l;
                d.bd = b;
                d.ac = 1;
                d.bq = a.c.av;
                d.f = Number(!G);
                (e = window.moatPrebidApi) && "function" === typeof e.slotDataAvailable && (d.zn = e.slotDataAvailable() ? 1 : 0);
                c = c && c - a.c.bc;
                a.b.cc(c) && (d["if"] = c);
                c = a.b.bw(d, !0);
                c += "&na=" + a.b.bx(c, d.i);
                p.yh.yi(c + "&cs=0", "https://px.moatads.com", null, !0)
            };
            (function() {
                a.aa.a(function() {
                    a.b.forEach(e, function(b, c) {
                        a.aa.e(b, f.a)
                    })
                })
            })();
            var v = a.g.r(!0);
            v.tw = a.c.fg && a.g.at(a.c.fg) || null;
            v.url = a.b.t();
            v.confidence = a.b.v();
            v.pcode = "buzzfeedprebidheader126112369715";
            v = a.b.bw(v, !0);
            a.z.b("nado-all", "MoatNadoAllJsonpRequest", "https://mb.moatads.com/yi.js?" + v)
        })(q);
        q.t.a(q.c.d);
        q.g.an({});
        q.ab.d(17);
        q.ab.c();
        q.ab.e()
    })(Date, Math)
} catch (u) {
    var ct = (new Date).getTime();
    window["Moat#ETS"] || (window["Moat#ETS"] = ct);
    window["Moat#EMC"] || (window["Moat#EMC"] = 0);
    var et = ct - window["Moat#ETS"],
        hourElapsed = 36E5 <= et,
        msg = u.name + " in closure (global): " + u.message + ", stack=" + u.stack;
    if (!hourElapsed && 10 > window["Moat#EMC"]) {
        window["Moat#EMC"]++;
        try {
            var pixelDomain = "px.moatads.com",
                pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "BUZZFEED_PREBID_HEADER1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("dfc91e5-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(),
                px = new Image(1, 1);
            px.src = pxSrc
        } catch (n) {}
    } else if (hourElapsed) {
        window["Moat#EMC"] = 1;
        window["Moat#ETS"] = ct;
        try {
            pixelDomain = "px.moatads.com", pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" ===
                typeof AD_VIEW_HASH ? "BUZZFEED_PREBID_HEADER1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("dfc91e5-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(), px = new Image(1, 1), px.src = pxSrc
        } catch (n) {}
    }
};