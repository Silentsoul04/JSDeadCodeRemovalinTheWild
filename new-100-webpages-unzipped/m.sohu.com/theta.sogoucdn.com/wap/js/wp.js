var ___sogouNamespaceName = "WapStarNamespace";
(function() {
    var c = ___sogouNamespaceName;
    var g = window,
        a = 0,
        f = false,
        b = false;
    while ((g != window.top || g != g.parent) && a < 10) {
        f = true;
        try {
            g.parent.location.toString()
        } catch (e) {
            b = true;
            break
        }
        a++;
        g = g.parent
    }
    if (a >= 10) {
        b = true
    }
    var d = function(h, j, i) {
        h.baseName = c;
        h.isInIframe = j;
        h.isCrossDomain = i;
        h.needInitTop = 0;
        h.buildInObject = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object Window]": 1
        };
        h.clone = function(o) {
            var l = o,
                m, k;
            if (!o || o instanceof Number || o instanceof String || o instanceof Boolean) {
                return l
            } else {
                if (o instanceof Array) {
                    l = [];
                    var n = 0;
                    for (m = 0, k = o.length; m < k; m++) {
                        l[n++] = this.clone(o[m])
                    }
                } else {
                    if ("object" === typeof o) {
                        if (this.buildInObject[Object.prototype.toString.call(o)]) {
                            return l
                        }
                        l = {};
                        for (m in o) {
                            if (o.hasOwnProperty(m)) {
                                l[m] = this.clone(o[m])
                            }
                        }
                    }
                }
            }
            return l
        };
        h.create = function(m, p) {
            var l = Array.prototype.slice.call(arguments, 0);
            l.shift();
            var n = function(q) {
                this.initialize = this.initialize || function() {};
                this.initializeDOM = this.initializeDOM || function() {};
                this.initializeEvent = this.initializeEvent || function() {};
                this.initialize.apply(this, q);
                this.initializeDOM.apply(this, q);
                this.initializeEvent.apply(this, q)
            };
            n.prototype = m;
            var k = new n(l);
            for (var o in m) {
                if (k[o] && typeof k[o] === "object" && k[o].modifier && k[o].modifier.indexOf("dynamic") > -1) {
                    k[o] = this.clone(k[o])
                }
            }
            k.instances = null;
            m.instances = m.instances || [];
            m.instances.push(k);
            return k
        };
        h.registerMethod = function(o, k) {
            var p = {};
            var l = {};
            var s, q, r;
            for (q in k) {
                s = k[q];
                if (!q || !s) {
                    continue
                }
                if (typeof s === "object" && s.modifier && s.modifier === "dynamic") {
                    this.registerMethod(o[q], s)
                } else {
                    if (typeof s === "function") {
                        p[q] = s
                    } else {
                        l[q] = s
                    }
                }
            }
            for (q in p) {
                s = p[q];
                if (q && s) {
                    o[q] = s
                }
            }
            if (o.instances && o.instances.length && o.instances.length > 0) {
                for (var m = 0, n = o.instances.length; m < n; m++) {
                    r = o.instances[m];
                    this.registerMethod(r, k)
                }
            }
        };
        h.registerObj = function(m, o) {
            var l = Array.prototype.slice.call(arguments, 0);
            l.shift();
            var n = function(p) {
                this.register = this.register || function() {};
                this.register.apply(this, p)
            };
            n.prototype = m;
            n.prototype.instances = null;
            var k = new n(l);
            return k
        };
        h.registerNamespaceByWin = function(m, o) {
            var o = m.win = o || window;
            var l = m.fullName.replace("$baseName", this.baseName);
            namespaceNames = l.split(".");
            var p = namespaceNames.length;
            var s = o;
            var r;
            for (var n = 0; n < p - 1; n++) {
                var k = namespaceNames[n];
                if (s == o) {
                    s[k] = o[k] = o[k] || {};
                    r = k;
                    m.baseName = r
                } else {
                    s[k] = s[k] || {}
                }
                s = s[k]
            }
            var q = s[namespaceNames[p - 1]] || {};
            if (q.fullName && q.version) {
                this.registerMethod(q, m)
            } else {
                q = this.registerObj(m);
                q.instances = null;
                s[namespaceNames[p - 1]] = q
            }
        };
        h.registerNamespace = function(k) {
            if (!k || !k.fullName || !k.version) {
                return
            }
            this.registerNamespaceByWin(k, window)
        };
        h.registerClass = h.registerNamespace;
        h.using = function(m, p) {
            var k;
            p = p || window;
            m = m.replace("$baseName", this.baseName);
            var l = m.split(".");
            k = p[l[0]];
            for (var n = 1, o = l.length; n < o; n++) {
                if (k && k[l[n]]) {
                    k = k[l[n]]
                } else {
                    k = null
                }
            }
            return k
        }
    };
    window[c] = window[c] || {};
    d(window[c], f, b)
})();
(function(b) {
    var a = {
        fullName: "$baseName.Utility",
        version: "1.0.0",
        register: function() {
            this.browser = this.browser || {};
            if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
                this.browser.ie = document.documentMode || +RegExp["\x241"]
            }
            if (/opera\/(\d+\.\d)/i.test(navigator.userAgent)) {
                this.browser.opera = +RegExp["\x241"]
            }
            if (/firefox\/(\d+\.\d)/i.test(navigator.userAgent)) {
                this.browser.firefox = +RegExp["\x241"]
            }
            if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent)) {
                this.browser.safari = +(RegExp["\x241"] || RegExp["\x242"])
            }
            if (/chrome\/(\d+\.\d)/i.test(navigator.userAgent)) {
                this.browser.chrome = +RegExp["\x241"]
            }
            try {
                if (/(\d+\.\d)/.test(external.max_version)) {
                    this.browser.maxthon = +RegExp["\x241"]
                }
            } catch (c) {}
            this.browser.isWebkit = /webkit/i.test(navigator.userAgent);
            this.browser.isGecko = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
            this.browser.isStrict = document.compatMode == "CSS1Compat"
        },
        browser: {},
        isWindow: function(e) {
            var c = false;
            try {
                if (e && typeof e === "object" && e.document && "setInterval" in e) {
                    c = true
                }
            } catch (d) {
                c = false
            }
            return c
        },
        isInIframe: function(c) {
            c = c || window;
            return c != window.top && c != c.parent
        },
        isInCrossDomainIframe: function(g, d) {
            var c = false;
            g = g || window;
            d = d || window.top;
            parentWin = g.parent;
            var f = 0;
            while ((g != d || g != g.parent) && f < 10) {
                f++;
                if (this.isWindow(g) && this.isWindow(g.parent)) {
                    try {
                        g.parent.location.toString()
                    } catch (e) {
                        c = true;
                        break
                    }
                } else {
                    c = true;
                    break
                }
                g = g.parent
            }
            if (f >= 10) {
                c = true
            }
            return c
        },
        g: function(d, c) {
            c = c || window;
            if ("string" === typeof d || d instanceof String) {
                return c.document.getElementById(d)
            } else {
                if (d && d.nodeName && (d.nodeType == 1 || d.nodeType == 9)) {
                    return d
                }
            }
            return d
        },
        sendRequestViaImage: function(d, e) {
            var c = new Image();
            var f = "cx_log_" + Math.floor(Math.random() * 2147483648).toString(36);
            e = e || window;
            e[f] = c;
            c.onload = c.onerror = c.onabort = function() {
                c.onload = c.onerror = c.onabort = null;
                e[f] = null;
                c = null
            };
            c.src = d
        },
        getDocument: function(c) {
            if (!c) {
                return document
            }
            c = this.g(c);
            return c.nodeType == 9 ? c : c.ownerDocument || c.document
        },
        getWindow: function(c) {
            c = this.g(c);
            var d = this.getDocument(c);
            return d.parentWindow || d.defaultView || null
        },
        getTopWindow: function(c) {
            c = c || window;
            if (this.isInIframe(c) && !this.isInCrossDomainIframe(c, c.top) && this.isWindow(c.top)) {
                return c.top
            }
            return c
        },
        bind: function(c, d, e) {
            c = this.g(c);
            d = d.replace(/^on/i, "").toLowerCase();
            if (c.addEventListener) {
                c.addEventListener(d, e, false)
            } else {
                if (c.attachEvent) {
                    c.attachEvent("on" + d, e)
                }
            }
            return c
        },
        proxy: function(d, c) {
            var f = d;
            var e = c;
            return function() {
                return f.apply(e || {}, arguments)
            }
        },
        getStyle: function(e, d) {
            var c;
            e = this.g(e);
            var g = this.getDocument(e);
            var h = "";
            if (d.indexOf("-") > -1) {
                h = d.replace(/[-_][^-_]{1}/g, function(i) {
                    return i.charAt(1).toUpperCase()
                })
            } else {
                h = d.replace(/[A-Z]{1}/g, function(i) {
                    return "-" + i.charAt(0).toLowerCase()
                })
            }
            var f;
            if (g && g.defaultView && g.defaultView.getComputedStyle) {
                f = g.defaultView.getComputedStyle(e, null);
                if (f) {
                    c = f.getPropertyValue(d)
                }
                if (typeof c !== "boolean" && !c) {
                    c = f.getPropertyValue(h)
                }
            } else {
                if (e.currentStyle) {
                    f = e.currentStyle;
                    if (f) {
                        c = f[d]
                    }
                    if (typeof c !== "boolean" && !c) {
                        c = f[h]
                    }
                }
            }
            return c
        },
        getPositionCore: function(c) {
            c = this.g(c);
            var k = this.getDocument(c),
                f = this.browser,
                d = f.isGecko > 0 && k.getBoxObjectFor && this.getStyle(c, "position") == "absolute" && (c.style.top === "" || c.style.left === ""),
                i = {
                    left: 0,
                    top: 0
                },
                h = (f.ie && !f.isStrict) ? k.body : k.documentElement,
                l, e;
            if (c == h) {
                return i
            }
            if (c.getBoundingClientRect) {
                e = c.getBoundingClientRect();
                i.left = Math.floor(e.left) + Math.max(k.documentElement.scrollLeft, k.body.scrollLeft);
                i.top = Math.floor(e.top) + Math.max(k.documentElement.scrollTop, k.body.scrollTop);
                i.left -= k.documentElement.clientLeft;
                i.top -= k.documentElement.clientTop;
                var j = k.body,
                    m = parseInt(this.getStyle(j, "borderLeftWidth")),
                    g = parseInt(this.getStyle(j, "borderTopWidth"));
                if (f.ie && !f.isStrict) {
                    i.left -= isNaN(m) ? 2 : m;
                    i.top -= isNaN(g) ? 2 : g
                }
            } else {
                l = c;
                do {
                    i.left += l.offsetLeft;
                    i.top += l.offsetTop;
                    if (f.isWebkit > 0 && this.getStyle(l, "position") == "fixed") {
                        i.left += k.body.scrollLeft;
                        i.top += k.body.scrollTop;
                        break
                    }
                    l = l.offsetParent
                } while (l && l != c);
                if (f.opera > 0 || (f.isWebkit > 0 && this.getStyle(c, "position") == "absolute")) {
                    i.top -= k.body.offsetTop
                }
                l = c.offsetParent;
                while (l && l != k.body) {
                    i.left -= l.scrollLeft;
                    if (!f.opera || l.tagName != "TR") {
                        i.top -= l.scrollTop
                    }
                    l = l.offsetParent
                }
            }
            return i
        },
        getPosition: function(h, g) {
            g = g || window;
            var e = this.g(h, g);
            if (!e) {
                return
            }
            var c = this.getPositionCore(e);
            var d;
            var f = 10;
            count = 0;
            while (g != g.parent && count < f) {
                count++;
                d = {
                    top: 0,
                    left: 0
                };
                if (!this.isInCrossDomainIframe(g, g.parent) && g.frameElement) {
                    d = this.getPositionCore(g.frameElement)
                } else {
                    break
                }
                c.left += d.left;
                c.top += d.top;
                g = g.parent
            }
            return c
        },
        getOuterWidth: function(e, d) {
            e = this.g(e);
            d = d || false;
            var c = e.offsetWidth;
            if (d) {
                var g = this.getStyle(e, "marginLeft").toString().toLowerCase().replace("px", "").replace("auto", "0");
                var f = this.getStyle(e, "marginRight").toString().toLowerCase().replace("px", "").replace("auto", "0");
                c = c + parseInt(g || 0) + parseInt(f || 0)
            }
            return c
        },
        getOuterHeight: function(e, d) {
            e = this.g(e);
            d = d || false;
            var c = e.offsetHeight;
            if (d) {
                var f = this.getStyle(e, "marginTop").toString().toLowerCase().replace("px", "").replace("auto", "0");
                var g = this.getStyle(e, "marginBottom").toString().toLowerCase().replace("px", "").replace("auto", "0");
                c = c + parseInt(f || 0) + parseInt(g || 0)
            }
            return c
        },
        getTopIframe: function(f) {
            var c = this.g(f);
            var d = this.getWindow(c);
            var e = 0;
            if (this.isInIframe(window) && !this.isInCrossDomainIframe(window)) {
                while (d.parent != window.top && e < 10) {
                    e++;
                    d = d.parent
                }
                if (e < 10) {
                    c = d.frameElement || c
                }
            }
            return c
        },
        getOpacityInWin: function(k) {
            var j = this.g(k);
            var h = this.getWindow(j);
            var c = 100;
            var f = j;
            var i;
            try {
                while (f && f.tagName) {
                    i = 100;
                    if (this.browser.ie) {
                        if (this.browser.ie > 5) {
                            try {
                                i = f.filters.alpha.opacity || 100
                            } catch (g) {}
                        }
                        c = c > i ? i : c
                    } else {
                        try {
                            i = (h.getComputedStyle(f, null).opacity || 1) * 100
                        } catch (g) {}
                        c = c * (i / 100)
                    }
                    f = f.parentNode
                }
            } catch (d) {}
            return c || 100
        },
        getOpacity: function(i) {
            var h = this.g(i);
            var g = this.getWindow(h);
            var c = this.getOpacityInWin(h);
            var d = 100;
            var e = 0,
                f = 10;
            while (this.isInIframe(g)) {
                e++;
                if (!this.isInCrossDomainIframe(g, g.parent)) {
                    d = 100;
                    if (g.frameElement) {
                        d = this.getOpacityInWin(g.frameElement)
                    }
                    c = c * (d / 100)
                } else {
                    break
                }
                g = g.parent
            }
            return c
        },
        dateToString: function(d, c) {
            var g = {
                "M+": d.getMonth() + 1,
                "d+": d.getDate(),
                "h+": d.getHours() % 12 == 0 ? 12 : d.getHours() % 12,
                "H+": d.getHours(),
                "m+": d.getMinutes(),
                "s+": d.getSeconds(),
                "q+": Math.floor((d.getMonth() + 3) / 3),
                S: d.getMilliseconds()
            };
            var f = {
                "0": "\u65e5",
                "1": "\u4e00",
                "2": "\u4e8c",
                "3": "\u4e09",
                "4": "\u56db",
                "5": "\u4e94",
                "6": "\u516d"
            };
            if (/(y+)/.test(c)) {
                c = c.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length))
            }
            if (/(E+)/.test(c)) {
                c = c.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + f[d.getDay() + ""])
            }
            for (var e in g) {
                if (new RegExp("(" + e + ")").test(c)) {
                    c = c.replace(RegExp.$1, (RegExp.$1.length == 1) ? (g[e]) : (("00" + g[e]).substr(("" + g[e]).length)))
                }
            }
            return c
        },
        param: function(h, i) {
            var c = new Array(),
                g, f, d;
            for (var e in h) {
                d = true;
                if (i) {
                    g = i[e] ? i[e] : e;
                    d = i[e] ? true : false
                }
                if (!d) {
                    continue
                }
                var f = h[e];
                switch (typeof f) {
                    case "string":
                    case "number":
                        c.push(g + "=" + f.toString());
                        break;
                    case "boolean":
                        c.push(g + "=" + (f ? "1" : "0"));
                        break;
                    case "object":
                        if (f instanceof Date) {
                            c.push(g + "=" + this.dateToString(f, "yyyyMMddhhmmssS"))
                        }
                        break;
                    default:
                        break
                }
            }
            return c.join("&")
        },
        getLength: function(e) {
            var c = 0;
            if (typeof e === "object") {
                if (e instanceof Array) {
                    c = e.length
                } else {
                    var d;
                    for (d in e) {
                        if (d) {
                            c++
                        }
                    }
                }
            }
            return c
        },
        encodeByMove: function(j, c) {
            if (!j) {
                return ""
            }
            var e = 4,
                c = c || 1,
                h = c * e,
                k = c * 1,
                d = [],
                g = 0;
            for (var f = 0; f < j.length; f++) {
                g = j[f].charCodeAt();
                g -= h;
                d.push(String.fromCharCode(g));
                if (h <= -1 * e || h >= e) {
                    k = -1 * k
                }
                h += k
            }
            return d.join("")
        },
        md5: function(s) {
            function N(d, c) {
                return (d << c) | (d >>> (32 - c))
            }

            function M(F, d) {
                var H, c, x, G, k;
                x = (F & 2147483648);
                G = (d & 2147483648);
                H = (F & 1073741824);
                c = (d & 1073741824);
                k = (F & 1073741823) + (d & 1073741823);
                if (H & c) {
                    return (k ^ 2147483648 ^ x ^ G)
                }
                if (H | c) {
                    if (k & 1073741824) {
                        return (k ^ 3221225472 ^ x ^ G)
                    } else {
                        return (k ^ 1073741824 ^ x ^ G)
                    }
                } else {
                    return (k ^ x ^ G)
                }
            }

            function r(c, k, d) {
                return (c & k) | ((~c) & d)
            }

            function q(c, k, d) {
                return (c & d) | (k & (~d))
            }

            function p(c, k, d) {
                return (c ^ k ^ d)
            }

            function n(c, k, d) {
                return (k ^ (c | (~d)))
            }

            function u(G, F, ac, ab, k, H, I) {
                G = M(G, M(M(r(F, ac, ab), k), I));
                return M(N(G, H), F)
            }

            function g(G, F, ac, ab, k, H, I) {
                G = M(G, M(M(q(F, ac, ab), k), I));
                return M(N(G, H), F)
            }

            function J(G, F, ac, ab, k, H, I) {
                G = M(G, M(M(p(F, ac, ab), k), I));
                return M(N(G, H), F)
            }

            function t(G, F, ac, ab, k, H, I) {
                G = M(G, M(M(n(F, ac, ab), k), I));
                return M(N(G, H), F)
            }

            function e(F) {
                var I;
                var x = F.length;
                var k = x + 8;
                var d = (k - (k % 64)) / 64;
                var H = (d + 1) * 16;
                var ab = Array(H - 1);
                var c = 0;
                var G = 0;
                while (G < x) {
                    I = (G - (G % 4)) / 4;
                    c = (G % 4) * 8;
                    ab[I] = (ab[I] | (F.charCodeAt(G) << c));
                    G++
                }
                I = (G - (G % 4)) / 4;
                c = (G % 4) * 8;
                ab[I] = ab[I] | (128 << c);
                ab[H - 2] = x << 3;
                ab[H - 1] = x >>> 29;
                return ab
            }

            function D(k) {
                var d = "",
                    x = "",
                    F, c;
                for (c = 0; c <= 3; c++) {
                    F = (k >>> (c * 8)) & 255;
                    x = "0" + F.toString(16);
                    d = d + x.substr(x.length - 2, 2)
                }
                return d
            }

            function L(k) {
                k = k.replace(/\r\n/g, "\n");
                var d = "";
                for (var F = 0; F < k.length; F++) {
                    var x = k.charCodeAt(F);
                    if (x < 128) {
                        d += String.fromCharCode(x)
                    } else {
                        if ((x > 127) && (x < 2048)) {
                            d += String.fromCharCode((x >> 6) | 192);
                            d += String.fromCharCode((x & 63) | 128)
                        } else {
                            d += String.fromCharCode((x >> 12) | 224);
                            d += String.fromCharCode(((x >> 6) & 63) | 128);
                            d += String.fromCharCode((x & 63) | 128)
                        }
                    }
                }
                return d
            }
            var E = Array();
            var R, i, K, v, h, aa, Z, Y, X;
            var U = 7,
                S = 12,
                P = 17,
                O = 22;
            var B = 5,
                A = 9,
                z = 14,
                y = 20;
            var o = 4,
                m = 11,
                l = 16,
                j = 23;
            var W = 6,
                V = 10,
                T = 15,
                Q = 21;
            s = L(s);
            E = e(s);
            aa = 1732584193;
            Z = 4023233417;
            Y = 2562383102;
            X = 271733878;
            for (R = 0; R < E.length; R += 16) {
                i = aa;
                K = Z;
                v = Y;
                h = X;
                aa = u(aa, Z, Y, X, E[R + 0], U, 3614090360);
                X = u(X, aa, Z, Y, E[R + 1], S, 3905402710);
                Y = u(Y, X, aa, Z, E[R + 2], P, 606105819);
                Z = u(Z, Y, X, aa, E[R + 3], O, 3250441966);
                aa = u(aa, Z, Y, X, E[R + 4], U, 4118548399);
                X = u(X, aa, Z, Y, E[R + 5], S, 1200080426);
                Y = u(Y, X, aa, Z, E[R + 6], P, 2821735955);
                Z = u(Z, Y, X, aa, E[R + 7], O, 4249261313);
                aa = u(aa, Z, Y, X, E[R + 8], U, 1770035416);
                X = u(X, aa, Z, Y, E[R + 9], S, 2336552879);
                Y = u(Y, X, aa, Z, E[R + 10], P, 4294925233);
                Z = u(Z, Y, X, aa, E[R + 11], O, 2304563134);
                aa = u(aa, Z, Y, X, E[R + 12], U, 1804603682);
                X = u(X, aa, Z, Y, E[R + 13], S, 4254626195);
                Y = u(Y, X, aa, Z, E[R + 14], P, 2792965006);
                Z = u(Z, Y, X, aa, E[R + 15], O, 1236535329);
                aa = g(aa, Z, Y, X, E[R + 1], B, 4129170786);
                X = g(X, aa, Z, Y, E[R + 6], A, 3225465664);
                Y = g(Y, X, aa, Z, E[R + 11], z, 643717713);
                Z = g(Z, Y, X, aa, E[R + 0], y, 3921069994);
                aa = g(aa, Z, Y, X, E[R + 5], B, 3593408605);
                X = g(X, aa, Z, Y, E[R + 10], A, 38016083);
                Y = g(Y, X, aa, Z, E[R + 15], z, 3634488961);
                Z = g(Z, Y, X, aa, E[R + 4], y, 3889429448);
                aa = g(aa, Z, Y, X, E[R + 9], B, 568446438);
                X = g(X, aa, Z, Y, E[R + 14], A, 3275163606);
                Y = g(Y, X, aa, Z, E[R + 3], z, 4107603335);
                Z = g(Z, Y, X, aa, E[R + 8], y, 1163531501);
                aa = g(aa, Z, Y, X, E[R + 13], B, 2850285829);
                X = g(X, aa, Z, Y, E[R + 2], A, 4243563512);
                Y = g(Y, X, aa, Z, E[R + 7], z, 1735328473);
                Z = g(Z, Y, X, aa, E[R + 12], y, 2368359562);
                aa = J(aa, Z, Y, X, E[R + 5], o, 4294588738);
                X = J(X, aa, Z, Y, E[R + 8], m, 2272392833);
                Y = J(Y, X, aa, Z, E[R + 11], l, 1839030562);
                Z = J(Z, Y, X, aa, E[R + 14], j, 4259657740);
                aa = J(aa, Z, Y, X, E[R + 1], o, 2763975236);
                X = J(X, aa, Z, Y, E[R + 4], m, 1272893353);
                Y = J(Y, X, aa, Z, E[R + 7], l, 4139469664);
                Z = J(Z, Y, X, aa, E[R + 10], j, 3200236656);
                aa = J(aa, Z, Y, X, E[R + 13], o, 681279174);
                X = J(X, aa, Z, Y, E[R + 0], m, 3936430074);
                Y = J(Y, X, aa, Z, E[R + 3], l, 3572445317);
                Z = J(Z, Y, X, aa, E[R + 6], j, 76029189);
                aa = J(aa, Z, Y, X, E[R + 9], o, 3654602809);
                X = J(X, aa, Z, Y, E[R + 12], m, 3873151461);
                Y = J(Y, X, aa, Z, E[R + 15], l, 530742520);
                Z = J(Z, Y, X, aa, E[R + 2], j, 3299628645);
                aa = t(aa, Z, Y, X, E[R + 0], W, 4096336452);
                X = t(X, aa, Z, Y, E[R + 7], V, 1126891415);
                Y = t(Y, X, aa, Z, E[R + 14], T, 2878612391);
                Z = t(Z, Y, X, aa, E[R + 5], Q, 4237533241);
                aa = t(aa, Z, Y, X, E[R + 12], W, 1700485571);
                X = t(X, aa, Z, Y, E[R + 3], V, 2399980690);
                Y = t(Y, X, aa, Z, E[R + 10], T, 4293915773);
                Z = t(Z, Y, X, aa, E[R + 1], Q, 2240044497);
                aa = t(aa, Z, Y, X, E[R + 8], W, 1873313359);
                X = t(X, aa, Z, Y, E[R + 15], V, 4264355552);
                Y = t(Y, X, aa, Z, E[R + 6], T, 2734768916);
                Z = t(Z, Y, X, aa, E[R + 13], Q, 1309151649);
                aa = t(aa, Z, Y, X, E[R + 4], W, 4149444226);
                X = t(X, aa, Z, Y, E[R + 11], V, 3174756917);
                Y = t(Y, X, aa, Z, E[R + 2], T, 718787259);
                Z = t(Z, Y, X, aa, E[R + 9], Q, 3951481745);
                aa = M(aa, i);
                Z = M(Z, K);
                Y = M(Y, v);
                X = M(X, h)
            }
            var w = function(x) {
                var c = x;
                for (var d = 0, k = 8 - x.length; d < k; d++) {
                    c = "0" + c
                }
                return c
            };
            var C = ((parseInt("0x" + D(aa), 16) + parseInt("0x" + D(Z), 16)) % 4294967296).toString(16);
            var f = ((parseInt("0x" + D(Y), 16) + parseInt("0x" + D(X), 16)) % 4294967296).toString(16);
            if (C.length < 8) {
                C = w(C)
            }
            if (f.length < 8) {
                f = w(f)
            }
            return C + f
        },
        getScrollWidth: function(d) {
            try {
                d = d || window;
                if (d.document.compatMode === "BackCompat") {
                    return d.document.body.scrollWidth
                } else {
                    return d.document.documentElement.scrollWidth
                }
            } catch (c) {
                return 0
            }
        },
        getScrollHeight: function(d) {
            try {
                d = d || window;
                if (d.document.compatMode === "BackCompat") {
                    return d.document.body.scrollHeight
                } else {
                    return d.document.documentElement.scrollHeight
                }
            } catch (c) {
                return 0
            }
        },
        getClientWidth: function(d) {
            try {
                d = d || window;
                if (d.document.compatMode === "BackCompat") {
                    return d.document.body.clientWidth
                } else {
                    return d.document.documentElement.clientWidth
                }
            } catch (c) {
                return 0
            }
        },
        getClientHeight: function(d) {
            try {
                d = d || window;
                if (d.document.compatMode === "BackCompat") {
                    return d.document.body.clientHeight
                } else {
                    return d.document.documentElement.clientHeight
                }
            } catch (c) {
                return 0
            }
        },
        getScrollTop: function(c) {
            c = c || window;
            var e = c.document;
            return c.pageYOffset || e.documentElement.scrollTop || e.body.scrollTop
        },
        getScrollLeft: function(c) {
            c = c || window;
            var e = c.document;
            return c.pageXOffset || e.documentElement.scrollLeft || e.body.scrollLeft
        },
        escapeToEncode: function(d) {
            var c = d || "";
            if (c) {
                c = c.replace(/%u[\d|\w]{4}/g, function(e) {
                    return encodeURIComponent(unescape(e))
                })
            }
            return c
        },
        template: function(e, d) {
            var c = /{(.*?)}/g;
            return e.replace(c, function(h, g, f, i) {
                return d[g] || ""
            })
        },
        extend: function(e, c) {
            for (var d in c) {
                if (c.hasOwnProperty(d)) {
                    e[d] = c[d]
                }
            }
            return e
        },
        log: function(f, d) {
            d = typeof d === "undefined" ? true : false;
            if (!this.logMsg) {
                this.logMsg = document.getElementById("baiduCproLogMsg");
                if (!this.logMsg) {
                    return
                }
            }
            var c = new Array();
            if (typeof(f) === "object") {
                for (var e in f) {
                    if (e !== "analysisUrl") {
                        c.push(e + ":" + f[e])
                    }
                }
            } else {
                c.push("" + f)
            }
            this.logMsg.innerHTML = d ? this.logMsg.innerHTML : "";
            this.logMsg.innerHTML += c.join("<br/>") + "<br/>"
        },
        getCookieRaw: function(d, h) {
            var c;
            var h = h || window;
            var g = h.document;
            var e = new RegExp("(^| )" + d + "=([^;]*)(;|\x24)");
            var f = e.exec(g.cookie);
            if (f) {
                c = f[2]
            }
            return c
        },
        setCookieRaw: function(e, f, d) {
            d = d || {};
            var c = d.expires;
            if ("number" == typeof d.expires) {
                c = new Date();
                c.setTime(c.getTime() + d.expires)
            }
            document.cookie = e + "=" + f + (d.path ? "; path=" + d.path : "") + (c ? "; expires=" + c.toGMTString() : "") + (d.domain ? "; domain=" + d.domain : "") + (d.secure ? "; secure" : "")
        },
        jsonToObj: function(c) {
            return (new Function("return " + c))()
        },
        getUrlQueryValue: function(d, e) {
            var f = new RegExp("(^|&|\\?|#)" + e + "=([^&]*)(&|\x24)", "");
            var c = d.match(f);
            if (c) {
                return c[2]
            }
            return null
        },
        ready: function(h, d, g) {
            g = g || this.win || window;
            var f = g.document;
            d = d || 0;
            this.domReadyMonitorRunTimes = 0;
            this.readyFuncArray = this.readyFuncArray || [];
            this.readyFuncArray.push({
                func: h,
                delay: d,
                done: false
            });
            var c = this.proxy(function() {
                var n = false;
                this.domReadyMonitorRunTimes++;
                var r = false;
                try {
                    if (g.frameElement) {
                        r = true
                    }
                } catch (s) {
                    r = true
                }
                if (this.browser.ie && this.browser.ie < 9 && !r) {
                    try {
                        f.documentElement.doScroll("left");
                        n = true
                    } catch (q) {}
                } else {
                    if (f.readyState === "complete" || this.domContentLoaded) {
                        n = true
                    } else {
                        if (this.domReadyMonitorRunTimes > 300000) {
                            if (this.domReadyMonitorId) {
                                g.clearInterval(this.domReadyMonitorId);
                                this.domReadyMonitorId = null
                            }
                            return
                        }
                    }
                }
                if (n) {
                    try {
                        if (this.readyFuncArray && this.readyFuncArray.length) {
                            for (var k = 0, m = this.readyFuncArray.length; k < m; k++) {
                                var l = this.readyFuncArray[k];
                                if (!l || !l.func || l.done) {
                                    continue
                                }
                                if (!l.delay) {
                                    l.done = true;
                                    l.func()
                                } else {
                                    l.done = true;
                                    g.setTimeout(l.func, l.delay)
                                }
                            }
                        }
                    } catch (j) {
                        throw j
                    } finally {
                        if (this.domReadyMonitorId) {
                            g.clearInterval(this.domReadyMonitorId);
                            this.domReadyMonitorId = null
                        }
                    }
                }
            }, this);
            var e = this.proxy(function() {
                this.domContentLoaded = true;
                c()
            }, this);
            if (!this.domReadyMonitorStarted) {
                this.domReadyMonitorStarted = true;
                this.domReadyMonitorId = g.setInterval(c, 50);
                if (f.addEventListener) {
                    f.addEventListener("DOMContentLoaded", e, false);
                    g.addEventListener("load", e, false)
                } else {
                    if (f.attachEvent) {
                        g.attachEvent("onload", e, false)
                    }
                }
            }
        },
        canFixed: function() {
            var c = true;
            if (this.browser.ie && (this.browser.ie < 7 || document.compatMode === "BackCompat")) {
                c = false
            }
            return c
        },
        getPara: function(k) {
            var j = {};
            if (k && typeof k == "string" && k.indexOf("?") > -1) {
                var f = k.split("?")[1].split("&");
                for (var g = 0, c = f.length; g < c; g++) {
                    var d = f[g].split("=");
                    var e = d[0];
                    var h = d[1];
                    j[e] = h
                }
            }
            return j
        },
        ajaxLoad: function(e, j, h, d, i, g) {
            if (!e) {
                return null
            }
            h = h || "";
            if (typeof(d) !== "boolean") {
                d = false
            }
            if (!d) {
                if (e.indexOf("?") < 0) {
                    e += "?"
                }
                e += "&_nocache_=" + Math.random()
            }
            var c = ["GET", "POST", "get", "post"];
            if (c.indexOf(i) < 0) {
                i = "GET"
            }
            if (typeof g !== "boolean") {
                g = true
            }
            var f = null;
            if (window.XMLHttpRequest) {
                f = new XMLHttpRequest()
            } else {
                f = new ActiveXObject("Microsoft.XMLHTTP")
            }
            if (f) {
                f.onreadystatechange = function() {
                    if (f.readyState == 4) {
                        if (typeof(j) == "function") {
                            j(f.responseText, f.status, f)
                        }
                    }
                };
                f.open(i, e, g);
                f.send(h)
            }
        },
        getOffset: function(g, h) {
            if (!g || typeof(g) !== "object") {
                return null
            }
            h = h || window;
            var k = h.document;
            var j = g.getBoundingClientRect();
            var e = {
                top: j.top,
                right: j.right,
                bottom: j.bottom,
                left: j.left,
                width: j.right - j.left,
                height: j.bottom - j.top
            };
            var f = k.documentElement.clientTop || k.body.clientTop || 0;
            var i = k.documentElement.clientLeft || k.body.clientLeft || 0;
            var c = h.pageYOffset || k.documentElement.scrollTop || k.body.scrollTop || 0;
            var d = h.pageXOffset || k.documentElement.scrollLeft || k.body.scrollLeft || 0;
            e.top = e.top + c - f;
            e.bottom = e.bottom + c - f;
            e.left = e.left + d - i;
            e.right = e.right + d - i;
            return e
        }
    };
    b.registerNamespace(a)
})(window[___sogouNamespaceName]);
(function(a) {
    var b = {
        fullName: "$baseName.Business",
        version: "1.0.0",
        register: function() {
            this.G = a.using("$baseName", this.win);
            this.U = a.using("$baseName.Utility", this.win)
        },
        randomArray: [],
        clientTree: {},
        displayCounter: 1,
        displayTypeCounter: {},
        adsArray: [],
        adsWrapStore: {},
        winFocused: true,
        iframeIdPrefix: "starIframe",
        iframeWrapperIdPrefix: "starIframe_wrapper_",
        isAsyn: false,
        getSlotDataFromWapUnion: function(e, j) {
            if (typeof(e) == "undefined" || !j || !window[j]) {
                return null
            }
            var i = "";
            var d = ["w-0"];
            var c = this.getAntiBlockServiceUrl();
            var h = 100;
            if (document.location.protocol.indexOf("https") > -1) {
                i = "https://wuliao.epro.sogou.com/ask?id={slotId}&cb={callbackName}&ssi0={ssi0}";
                h = 99
            } else {
                i = "http://" + c.domain + "/ask?id={slotId}&cb={callbackName}&ssi0={ssi0}";
                h = c.index + 1
            }
            d.push("dx-" + h);
            if (window.sg_gdt) {
                i = i + "&gdt=1"
            }
            i += "&wsg=" + d.join("_");
            i += "&_v=2b7519d3";
            var f = this.Param.ssi0.get();
            var g = this.U.template(i, {
                slotId: e,
                callbackName: j,
                ssi0: f
            });
            if (/\d+/.test(e)) {
                document.write('<script type="text/javascript" charset="utf-8" src="' + g + '"><\/script>')
            } else {
                window[j](null)
            }
        },
        parseSlotDataFromStar: function(d) {
            var c = {};
            for (var e in d) {
                if (e && d.hasOwnProperty(e)) {
                    return d[e]
                }
            }
            return null
        },
        getAdsDomId: function(c) {
            return c.slice(-8)
        },
        getAdsWrapperDomId: function(c) {
            return c.slice(0, 8)
        },
        checkAdsCounter: function(e, g, d) {
            var c = false;
            var f;
            switch (e.toLowerCase()) {
                case "inlay":
                    f = 5;
                    break;
                case "float":
                    f = 1;
                    break;
                case "ui":
                    f = 3;
                    if (d == "sogouDEFINE") {
                        f = 4
                    }
                    break;
                default:
                    f = 3;
                    break
            }
            g.__star__displayTypeCounter = g.__star__displayTypeCounter || {};
            g.__star__displayTypeCounter[e] = g.__star__displayTypeCounter[e] || 0;
            if (g.__star__displayTypeCounter[e] >= f) {
                c = true
            }
            return c
        },
        addAdsCounter: function(c, d) {
            d.__star__displayTypeCounter = d.__star__displayTypeCounter || {};
            d.__star__displayTypeCounter[c] = d.__star__displayTypeCounter[c] || 0;
            d.__star__displayTypeCounter[c]++;
            return true
        },
        checkAdsCounterLu: function(e, g, d) {
            var c = false;
            var f;
            switch (e.toLowerCase()) {
                case "inlay":
                    f = 5;
                    break;
                case "photo":
                    f = 100;
                    break;
                default:
                    f = 3;
                    break
            }
            g.__linkunit__displayTypeCounter = g.__linkunit__displayTypeCounter || {};
            g.__linkunit__displayTypeCounter[e] = g.__linkunit__displayTypeCounter[e] || 0;
            if (g.__linkunit__displayTypeCounter[e] >= f) {
                c = true
            }
            return c
        },
        addAdsCounterLu: function(c, d) {
            d.__linkunit__displayTypeCounter = d.__linkunit__displayTypeCounter || {};
            d.__linkunit__displayTypeCounter[c] = d.__linkunit__displayTypeCounter[c] || 0;
            d.__linkunit__displayTypeCounter[c]++;
            return true
        },
        getAntiBlockServiceUrl: function() {
            var c = ["kcru.ujhxd0tofmr*`ml", "emwn.ujhxd0tofmr*`ml", "^clhq/vkiwc/snelq+anm", "ngev.ujhxd0tofmr*`ml", "erq-mftfyu{/snelq+anm", "uqvi.ngugxtz.rmdkr,bon", "jucr.ngugxtz.rmdkr,bon", "njmdu/ohvfwsy-qlcls-cpo", "bvag.vtdrxu/snelq+anm", "gqgun/wueqwt.rmdkr,bon", "tqpth/wueqwt.rmdkr,bon", "kpa-uscqyv0tofmr*`ml", "rtfh.hqx2vqhot,`kj", "lpdp.hqx2vqhot,`kj", "]jdh.hqx2vqhot,`kj", "muk-pmwws1upgns+_lk", "udjn.qnxxr0tofmr*`ml", "l`vyo/roywq/snelq+anm", "cuc-hvun}1upgns+_lk", "fqg-hvun}1upgns+_lk", "^pgdt/jxwn{/snelq+anm", "tind.iwvo|0tofmr*`ml", "mej-bfcokh0tofmr*`ml", "j^rps/dheoif.rmdkr,bon", "_ccn.cgdpjg/snelq+anm", "_gpnq/dheoif.rmdkr,bon", "qcmir/irpggo1-qlcls-cpo", "fplo.hqohhp2.rmdkr,bon", "lgwt.hqohhp2.rmdkr,bon", "agxq.hqohhp2.rmdkr,bon"];
            var d = Math.floor(Math.random() * c.length + 1) - 1;
            var e = c[d];
            return {
                domain: this.U.encodeByMove(e, -1),
                index: d
            }
        }
    };
    a.registerNamespace(b)
})(window[___sogouNamespaceName]);
(function(b) {
    var a = {
        fullName: "$baseName.Business.Param",
        version: "1.0.0",
        register: function() {
            this.G = b.using("$baseName", this.win);
            this.U = b.using("$baseName.Utility", this.win);
            this.BL = b.using("$baseName.Business", this.win)
        },
        initialize: function(c) {
            this.currentWindow = c.currentWindow;
            this.doc = this.win.document;
            this.nav = this.win.navigator;
            this.scr = this.win.screen;
            this.displayType = c.displayType || "inlay";
            this.startTime = (new Date());
            this.BL.pnTypeArray = this.BL.pnTypeArray || [];
            this.BL.pnTypeArray[this.displayType] = this.BL.pnTypeArray[this.displayType] || [];
            this.timeStamp = c.timeStamp || (new Date()).getTime()
        },
        getSlot2UIMapping: function(e) {
            var d = {};
            var c;
            for (c in e) {
                if (c && e[c] && e[c].slotParamName) {
                    d[e[c].slotParamName] = c
                }
            }
            return d
        },
        getCust2UIMapping: function(e) {
            var d = {};
            var c;
            for (c in e) {
                if (c && e[c] && e[c].custParamName) {
                    d[e[c].custParamName] = c
                }
            }
            return d
        },
        mergeSlot2UI: function(f, e, d) {
            if (!f || !e || !d) {
                return null
            }
            var c, g;
            for (g in e) {
                if (g && e[g] && e.hasOwnProperty(g)) {
                    c = d[g];
                    f.set(c, e[g])
                }
            }
            return f
        },
        serialize: function(f) {
            var e = [];
            var d, c;
            for (d in f) {
                if (d && f[d] && (typeof f[d] === "object") && f[d].isUIParam && f[d].isUIParam[f.displayType]) {
                    c = f.get(d);
                    if (c == null) {
                        continue
                    }
                    if (f[d].encode || f.displayType == "ui") {
                        c = encodeURIComponent(c)
                    }
                    e.push(d + "=" + c)
                }
            }
            return e.join("&")
        },
        snap: function(f) {
            var e = {};
            var d, c;
            for (d in f) {
                if (d && f[d] && (typeof f[d] === "object") && f[d].defaultValue) {
                    c = f.get(d);
                    if (c == null) {
                        continue
                    }
                    if (f[d].encode || f.displayType == "ui") {
                        c = encodeURIComponent(c)
                    }
                    e[d] = c
                }
            }
            return e
        },
        get: function(e) {
            var c;
            if (this[e].get && this[e].get !== "default") {
                var d = Array.prototype.slice.call(arguments, 0);
                d.shift();
                if (!this[e]._init) {
                    this[e]._value = this[e].defaultValue[this.displayType]
                }
                c = this.U.proxy(this[e].get, this, d)()
            } else {
                if (!this[e]._init) {
                    c = this[e].defaultValue[this.displayType]
                } else {
                    c = this[e]._value
                }
            }
            return c
        },
        set: function(e, f) {
            var c = false;
            if (this[e].set && this[e].set !== "default") {
                var d = Array.prototype.slice.call(arguments, 0);
                d.shift();
                c = this.U.proxy(this[e].set, this, (d))()
            } else {
                this[e]._value = f;
                this[e]._init = true;
                c = true
            }
            return c
        },
        pid: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: "default",
            set: "default"
        },
        id: {
            slotParamName: "slotId",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true
            },
            get: "default",
            set: "default"
        },
        h: {
            slotParamName: "star_h",
            custParamName: "h",
            modifier: "dynamic",
            defaultValue: {
                inlay: "125",
                "float": "270",
                ui: null
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true
            },
            get: "default",
            set: "default"
        },
        w: {
            slotParamName: "star_w",
            custParamName: "w",
            modifier: "dynamic",
            defaultValue: {
                inlay: "125",
                "float": "120",
                ui: null
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true
            },
            get: "default",
            set: "default"
        },
        fv: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "0",
                "float": "0",
                ui: "",
                post: ""
            },
            encode: true,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                var c = "ShockwaveFlash.ShockwaveFlash",
                    g = this.nav,
                    d, h;
                if (this.nav.plugins && g.mimeTypes.length) {
                    d = g.plugins["Shockwave Flash"];
                    if (d && d.description) {
                        return d.description.replace(/[^\d\.]/g, "").split(".")[0]
                    }
                } else {
                    if (this.U.browser.ie) {
                        h = ActiveXObject;
                        try {
                            d = new h(c + ".7")
                        } catch (f) {
                            try {
                                d = new h(c + ".6");
                                d.AllowScriptAccess = "always";
                                return 6
                            } catch (f) {}
                            try {
                                d = new h(c)
                            } catch (f) {}
                        }
                        if (d != null) {
                            try {
                                return d.GetVariable("$version").split(" ")[1].split(",")[0]
                            } catch (f) {}
                        }
                    }
                }
                return 0
            },
            set: "default"
        },
        "if": {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "0",
                "float": "0",
                ui: "0",
                post: "0"
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                var d = 0;
                if (this.U.isInIframe()) {
                    d += 1
                }
                if (this.U.isInCrossDomainIframe()) {
                    d += 2
                }
                var c = this.get("w");
                var f = this.get("h");
                var e = this.U.getClientWidth(this.currentWindow);
                var g = this.U.getClientHeight(this.currentWindow);
                if (e < 40 || g < 10) {
                    d += 4
                } else {
                    if (e < c || g < f) {
                        d += 8
                    }
                }
                if ((e >= 2 * c) || (g >= 2 * f)) {
                    d += 16
                }
                return d
            },
            set: "default"
        },
        mi: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            set: "default",
            get: function() {
                if (this.mi.__value != undefined) {
                    return this.mi.__value
                }
                var c = function() {
                    if (top == self) {
                        return 0
                    } else {
                        if (top == window.parent) {
                            return 1
                        } else {
                            return 2
                        }
                    }
                };
                var d = function(g) {
                    if (!g) {
                        return ""
                    }
                    var f = g.split(".");
                    if (f.length <= 2) {
                        return g
                    }
                    var h = 2;
                    if (f[f.length - 2] == "com" || f[f.length - 2] == "net" || f[f.length - 2] == "org") {
                        h += 1
                    }
                    f.splice(0, f.length - h);
                    return f.join(".")
                };
                var e = function() {
                    ret = -1;
                    mi = c();
                    var q = window.location.host;
                    var o = document.referrer;
                    var n = "";
                    if (o) {
                        n = /^(http:\/\/|https:\/\/)+?([^\/]*)/.exec(o)[2]
                    } else {
                        try {
                            n = window.parent.location.host
                        } catch (m) {}
                    }
                    if (mi == 0) {
                        ret = 0
                    } else {
                        if (mi == 1) {
                            if (n == q) {
                                ret = 1
                            } else {
                                if (d(n) == d(q)) {
                                    ret = 2
                                } else {
                                    ret = 3
                                }
                            }
                        } else {
                            if (mi == 2) {
                                var j = 0;
                                var k = window;
                                var g = window;
                                var h = 1;
                                var l = 0;
                                var p = [];
                                while (j < 10) {
                                    p.push(k);
                                    k = k.parent;
                                    try {
                                        var f = k.document.title
                                    } catch (m) {
                                        if (p.length >= 1) {
                                            var g = p[p.length - 1];
                                            var n = /^(http:\/\/|https:\/\/)+?([^\/]*)/.exec(g.document.referrer)[2];
                                            if (d(n) == d(g.location.host)) {
                                                ret = 6;
                                                break
                                            }
                                            if (p.length >= 2) {
                                                var g = p[p.length - 2];
                                                if (g.location.host == g.parent.location.host) {
                                                    ret = 7;
                                                    break
                                                } else {
                                                    ret = 8;
                                                    break
                                                }
                                            }
                                        }
                                        ret = 9;
                                        break
                                    }
                                    if (k.location.host != self.location.host) {
                                        h = 0
                                    }
                                    if (k == window.top) {
                                        break
                                    }
                                    j++
                                }
                                if (j == 10) {
                                    ret = 10
                                } else {
                                    if (ret > 5) {
                                        ret = ret
                                    } else {
                                        if (h) {
                                            ret = 4
                                        } else {
                                            if (!h) {
                                                ret = 5
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (ret < 0) {
                        ret = 15
                    }
                    return ret
                };
                this.mi.__value = e();
                return this.mi.__value
            },
            encode: true
        },
        sohuurl: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: true,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                var h = this.currentWindow;
                var o, l = 10,
                    e = 0;
                var f = this.get("w") || 0;
                var m = this.get("h") || 0;
                o = h.document.location.href;
                if (this.U.isInIframe(h)) {
                    for (e = 0; e < l; e++) {
                        if (!this.U.isInCrossDomainIframe(h, h.parent)) {
                            h = h.parent;
                            if (!this.U.isInIframe(h, h.parent)) {
                                o = h.location.href;
                                break
                            }
                        } else {
                            try {
                                o = h.document.referrer || h.document.location
                            } catch (j) {
                                var i = null;
                                try {
                                    i = window.top.location.href
                                } catch (k) {
                                    i = o
                                }
                                var n = document.location;
                                if (n != i) {
                                    o = n
                                } else {
                                    o = i
                                }
                                return o
                            }
                            var g = o.toString();
                            var d = null;
                            if (this.U.isWindow(h.parent)) {
                                try {
                                    d = h.parent.location.toString()
                                } catch (j) {
                                    d = null
                                }
                            }
                            if (d != null && (g != d || h != h.parent)) {
                                h = h.parent;
                                continue
                            }
                            h = h.parent;
                            if (!this.U.isInCrossDomainIframe(h, h.parent)) {
                                break
                            }
                        }
                    }
                    if (e >= 10) {
                        o = h.document.referrer || h.document.location
                    }
                }
                return o
            },
            set: "default"
        },
        refer: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: true,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.U.escapeToEncode(this.doc.referrer || "")
            },
            set: "default"
        },
        ti: {
            slotParamName: "",
            custParamName: "",
            modifer: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: true,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                var d = "";
                if (top == window) {
                    d = document.title
                } else {
                    try {
                        return window.top.document.title.substring(0, 60)
                    } catch (c) {}
                }
                return d.substring(0, 60)
            },
            set: "default"
        },
        rnd: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                if (!this["rnd"]._value) {
                    if (b.page_id) {
                        this["rnd"]._value = b.page_id
                    } else {
                        this["rnd"]._value = this.U.md5(this.BL.randomArray.join("") + Math.random() * 1000000 + this.doc.location.href);
                        b.page_id = this["rnd"]._value
                    }
                    this["rnd"]._init = true
                }
                return this["rnd"]._value
            },
            set: function() {
                this["rnd"]._value = ""
            }
        },
        z: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                if (!this["z"]._value) {
                    this["z"]._value = this.U.md5(this.BL.randomArray.join("") + Math.random() * 1000000 + this.doc.location.href);
                    this["z"]._init = true
                }
                return this["z"]._value
            },
            set: function() {
                this["z"]._value = ""
            }
        },
        hs: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                if (!this["hs"]._value) {
                    this["hs"]._value = 0;
                    if (this.doc.location.protocol == "https:") {
                        this["hs"]._value = 1
                    }
                    this["hs"]._init = true
                }
                return this["hs"]._value
            },
            set: function() {
                this["hs"]._value = 0
            }
        },
        js: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "c",
                "float": "f",
                ui: "ui",
                post: "post"
            },
            encode: false,
            isUIParam: {
                inlay: false,
                "float": false,
                ui: true,
                post: true
            },
            get: "default",
            set: "default"
        },
        lmt: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return Date.parse(this.doc.lastModified) / 1000
            },
            set: "default"
        },
        bs: {
            slotParamName: "",
            custParamName: "",
            modifer: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                try {
                    if (document.documentElement.clientHeight == 0) {
                        return document.body.clientWidth + "," + document.body.clientHeight
                    } else {
                        return document.documentElement.clientWidth + "," + document.documentElement.clientHeight
                    }
                } catch (c) {}
                return ""
            },
            set: "default"
        },
        srp: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.scr.width + "," + this.scr.height
            },
            set: "default"
        },
        srn: {
            slotParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": ""
            },
            encode: false,
            isUIParam: {
                inlay: false,
                "float": false
            },
            get: function() {
                return this.scr.availWidth + "," + this.scr.availHeight
            },
            set: "default"
        },
        ccd: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.scr.colorDepth || 0
            },
            set: "default"
        },
        lhi: {
            slotParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true
            },
            get: function() {
                return this.win.history.length || 0
            },
            set: "default"
        },
        eja: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                try {
                    return this.nav.javaEnabled().toString()
                } catch (c) {}
                return ""
            },
            set: "default"
        },
        npl: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.nav.plugins.length || 0
            },
            set: "default"
        },
        nmi: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.nav.mimeTypes.length || 0
            },
            set: "default"
        },
        ece: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.nav.cookieEnabled || 0
            },
            set: "default"
        },
        lan: {
            uuserApiName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.nav.systemLanguage || this.nav.language
            },
            set: "default"
        },
        bi: {
            uuserApiName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "1",
                "float": "1",
                ui: "1",
                post: "1"
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return this.BL.displayCounter || 1
            },
            set: function() {
                this.BL.displayCounter = this.BL.displayCounter || 1;
                this.BL.displayCounter++;
                return true
            }
        },
        t1: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                var c = 0;
                if (this.startTime) {
                    c = (new Date()).getTime() - this.startTime.getTime()
                }
                return c
            },
            set: "default"
        },
        t2: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                return Math.round((new Date).getTime() / 1000)
            },
            set: "default"
        },
        pvt: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "0",
                "float": "0",
                ui: "0",
                post: "0"
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                if (!this.BL.pageFirstRequestTime) {
                    this.BL.pageFirstRequestTime = (new Date()).getTime()
                }
                return this.BL.pageFirstRequestTime || ""
            },
            set: "default"
        },
        ssi0: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "0",
                "float": "0",
                ui: "0",
                post: "0"
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                var d = navigator.userAgent.toLowerCase();
                var e = 0;
                if (d.indexOf("windows") > -1) {
                    e = 1
                } else {
                    if (d.indexOf("mac") > -1) {
                        e = 2
                    } else {
                        if (d.indexOf("linux") > -1) {
                            e = 3
                        } else {
                            if (d.indexOf("solaris") > -1) {
                                e = 4
                            } else {
                                if (d.indexOf("x11") > -1) {
                                    e = 5
                                }
                            }
                        }
                    }
                }
                if (!!d.match(/AppleWebKit.*Mobile.*/) || !!d.match(/AppleWebKit/)) {
                    e = 6
                } else {
                    if (d.indexOf("ios") > -1) {
                        e = 6
                    } else {
                        if (d.indexOf("android") > -1) {
                            e = 7
                        } else {
                            if (d.indexOf("iphone") > -1) {
                                e = 8
                            } else {
                                if (d.indexOf("ipad") > -1) {
                                    e = 9
                                }
                            }
                        }
                    }
                }
                var c = 0;
                if (d.indexOf("android") > -1) {
                    if (d.indexOf("safari") > -1 || d.indexOf("chrome") > -1) {
                        c = 4
                    }
                } else {
                    if (d.indexOf("mac") > -1) {
                        if (d.indexOf("safari") > -1) {
                            c = 5
                        }
                    }
                }
                if (d.indexOf("mqqbrowser") > -1) {
                    c = 2;
                    if (d.indexOf("nettype") > -1) {
                        c = 1
                    }
                } else {
                    if (d.indexOf("qq") > -1) {
                        c = 1
                    } else {
                        if (d.indexOf("ucbrowser") > -1) {
                            c = 3
                        } else {
                            if (d.indexOf("crios") > -1) {
                                c = 4
                            } else {
                                if (d.indexOf("liebaofast") > -1) {
                                    c = 6
                                } else {
                                    if (d.indexOf("qhbrowser") > -1 || (d.indexOf("360") > -1 && d.indexOf("aphone") > -1) || d.indexOf("360browser") > -1) {
                                        c = 7
                                    } else {
                                        if (d.indexOf("baidubrowser") > -1) {
                                            c = 8
                                        } else {
                                            if (d.indexOf("baiduboxapp") > -1) {
                                                c = 9
                                            } else {
                                                if (d.indexOf("sogousearch") > -1) {
                                                    c = 10
                                                } else {
                                                    if (d.indexOf("sogoumobilebrowser") > -1 || d.indexOf("sogoumse") > -1) {
                                                        c = 11
                                                    } else {
                                                        if (d.indexOf("opios") > -1 || d.indexOf("opr") > -1) {
                                                            c = 12
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return ((e & 255) << 8) | (c & 255)
            },
            set: "default"
        },
        ia: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "0",
                "float": "0",
                ui: "0",
                post: "0"
            },
            encode: false,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                try {
                    var c = window.navigator.userAgent;
                    var f = "SogouSearch Android";
                    if (c.indexOf(f) != -1) {
                        if (window.JSInvoker && window.JSInvoker.getEncryptDeviceId) {
                            return window.JSInvoker.getEncryptDeviceId()
                        }
                    }
                    return ""
                } catch (d) {
                    return ""
                }
            },
            set: "default"
        },
        enc: {
            custParamName: "charset",
            modifier: "dynamic",
            defaultValue: {
                ui: null
            },
            encode: true,
            isUIParam: {
                ui: true
            },
            get: function() {
                if (typeof(this["enc"]._value) == "string") {
                    switch (this["enc"]._value.toLowerCase()) {
                        case "gb2312":
                        case "gbk":
                            return "0";
                            break;
                        case "utf8":
                        case "utf-8":
                            return "1";
                            break;
                        default:
                            return null;
                            break
                    }
                }
            },
            set: "default"
        },
        wg: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "0",
                "float": "0",
                ui: "0",
                post: "0"
            },
            encode: true,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (!c) {
                    return 0
                }
                var d = c.type;
                if (typeof d == "undefined" || d == null) {
                    return 0
                }
                d = ("" + d).toLowerCase();
                if (d == "2" || d == "wifi") {
                    return 1
                } else {
                    if (d == "cellular" || d == "3" || d == "4" || d == "5") {
                        return 2
                    } else {
                        return 3
                    }
                }
            },
            set: "default"
        },
        wwtag: {
            slotParamName: "",
            custParamName: "",
            modifier: "dynamic",
            defaultValue: {
                inlay: "",
                "float": "",
                ui: "",
                post: ""
            },
            encode: true,
            isUIParam: {
                inlay: true,
                "float": true,
                ui: true,
                post: true
            },
            get: function() {
                if (window.questionToAd && window.questionToAd.tags) {
                    return window.questionToAd.tags[0] || ""
                } else {
                    return ""
                }
            },
            set: "default"
        }
    };
    b.registerClass(a)
})(window[___sogouNamespaceName]);
(function(a) {
    var b = {
        fullName: "$baseName.Business.ViewWatch",
        version: "1.0.0",
        register: function() {
            this.G = a.using("$baseName", this.win);
            this.U = a.using("$baseName.Utility", this.win);
            this.BL = a.using("$baseName.Business", this.win)
        },
        view_watch_array: [],
        client_params: {},
        analysis_url: "http://eff.inte.sogou.com/answer",
        long_time: 300000,
        check_view: function(c, g) {
            if (!g) {
                g = 1
            }
            var j = document.getElementById(c.domId);
            var d = this.U.getClientWidth(window);
            var m = this.U.getClientHeight(window);
            var n = this.U.getPosition(c.domId, window);
            var h = this.U.getScrollTop(window);
            var f = this.U.getScrollLeft(window);
            var i = this.U.getOuterWidth(j);
            var l = this.U.getOuterHeight(j);
            var k = 0;
            if (h - n.top <= 0) {
                if (h + m - n.top > l * g) {
                    k = 1
                }
            } else {
                if (h - n.top < l * (1 - g)) {
                    k = 1
                }
            }
            var e = 0;
            if (f - n.left <= 0) {
                if (f + d - n.left > i * g) {
                    e = 1
                }
            } else {
                if (f - n.left < i * (1 - g)) {
                    e = 1
                }
            }
            return e & k
        },
        set_pt_time: function(c, d) {
            if (d) {
                c.ps = (new Date()).getTime();
                if (c.pt_stamp) {
                    c.pt = (c.ps - c.pt_stamp)
                }
                return c.pt
            }
            c.pt_stamp = (new Date()).getTime();
            return
        },
        set_it_time: function(c, d) {
            if (d) {
                if (c.it_stamp) {
                    c.it = ((new Date()).getTime() - c.it_stamp)
                }
                return c.it
            }
            if (c.it_stamp) {
                ((new Date()).getTime() - c.it_stamp)
            }
            if (this.check_view(c, 0.35)) {
                c.it_stamp = (new Date()).getTime()
            }
            return
        },
        set_vt_time: function(d, e) {
            var c = this.check_view(d, 0.5);
            if (e) {
                if (d.vt_stamp) {
                    d.vt += ((new Date()).getTime() - d.vt_stamp)
                }
                return d.vt
            }
            if (d.vt_stamp && !c) {
                d.vt += ((new Date()).getTime() - d.vt_stamp);
                d.vt_stamp = null
            } else {
                if (c && !d.vt_stamp) {
                    d.vt_stamp = (new Date()).getTime()
                }
            }
            return d.vt
        },
        set_ft_time: function(c, e) {
            var d = document.getElementById(c.domId);
            if (e) {
                if (c.ft_stamp) {
                    c.ft += ((new Date()).getTime() - c.ft_stamp)
                }
                return c.ft
            }
            this.U.bind(d, "mouseenter", function() {
                c.ft_stamp = (new Date()).getTime()
            });
            this.U.bind(d, "mouseleave", function() {
                c.ft += ((new Date()).getTime() - c.ft_stamp);
                c.ft_stamp = null
            })
        },
        set_vs: function(c) {
            c.vs = this.check_view(c, 0.5);
            return c.vs
        },
        set_custom: function(d) {
            var c = this.U.getPosition(d.domId, window);
            d.left = c.left;
            d.top = c.top;
            d.op = this.U.getOpacityInWin(d.domId)
        },
        get_client_params: function() {
            this.client_params.csp = window.screen.availWidth + "," + window.screen.availHeight;
            this.client_params.bcl = this.U.getClientWidth(window) + "," + this.U.getClientHeight(window);
            this.client_params.pof = this.U.getScrollWidth(window) + "," + this.U.getScrollHeight(window);
            this.client_params.fs = 1
        },
        init_params: function(c) {
            var d = this;
            c.it = 0;
            c.ft = 0;
            c.vt = 0;
            c.vs = 0;
            c.left = 0;
            c.top = 0;
            c.op = 100;
            this.set_pt_time(c);
            this.U.ready(function() {
                d.set_it_time(c);
                d.U.bind(window, "scroll", function() {
                    d.set_it_time(c);
                    d.set_vt_time(c)
                });
                d.set_vt_time(c);
                d.set_custom(c)
            });
            this.set_ft_time(c)
        },
        template: function(e, d) {
            var c = /{(.*?)}/g;
            return e.replace(c, function(h, g, f, i) {
                if (!d) {
                    return ""
                }
                if (d[g] != undefined && d[g] != null) {
                    return d[g]
                } else {
                    return ""
                }
            })
        },
        build_url: function(c) {
            var d = this.analysis_url;
            d += "?id={id}&bi={bi}&sohuurl={sohuurl}&rnd={rnd}&if={if}&w={w}&h={h}&js={js}&z={z}";
            d = this.template(d, c.uiParamSnap);
            this.set_pt_time(c, 1);
            this.set_it_time(c, 1);
            this.set_vt_time(c, 1);
            this.set_ft_time(c, 1);
            this.set_vs(c);
            this.set_custom(c);
            d += "&pt={pt}&ps={ps}&it={it}&vs={vs}&ft={ft}&vt={vt}&left={left}&top={top}&op={op}";
            d = this.template(d, c);
            d += "&csp={csp}&bcl={bcl}&pof={pof}&fs={fs}&total=" + this.view_watch_array.length;
            d = this.template(d, this.client_params);
            return d
        },
        sendback: function() {
            this.get_client_params();
            for (var d = 0; d < this.view_watch_array.length; d++) {
                var c = this.build_url(this.view_watch_array[d]);
                this.U.sendRequestViaImage(c)
            }
        },
        getInstance: function() {
            var d = this.BL.adsArray[this.BL.adsArray.length - 1];
            var e = this;
            this.init_params(d);
            this.view_watch_array.push(d);
            if (this.view_watch_array.length == 1) {
                var f;
                var c = function() {
                    if (e.vw_send_flag) {
                        return
                    }
                    clearTimeout(f);
                    e.vw_send_flag = true;
                    e.sendback()
                };
                f = setTimeout(c, this.long_time);
                this.U.bind(window, "beforeunload", c);
                this.U.bind(window, "pagehide", c);
                this.U.bind(window, "unload", c);
                this.U.bind(document, "visibilityChange", c)
            }
            window.vw = this.view_watch_array
        }
    };
    a.registerNamespace(b)
})(window[___sogouNamespaceName]);
(function(p) {
    var p = p;
    var f = p.using("$baseName.Utility");
    var w = p.using("$baseName.Business");
    var b = "wp";
    var o = "inlay";
    w.randomArray.push(Math.random() * 1000000);
    var y = "_sg" + f.md5(w.randomArray.join(""));
    var x = window[y];
    var e = 0;
    while (typeof x !== "undefined") {
        if (e == 10) {
            y = "SOGOU_WAP_SETJSONADSLOT";
            x = window[y];
            break
        }
        w.randomArray.push(Math.random() * 1000000);
        y = "_sg" + f.md5(w.randomArray.join(""));
        x = window[y];
        e++
    }
    var s = window.sogou_ad_id;
    var u = window.sogou_ad_width;
    var a = window.sogou_ad_height;
    var j = window.sogou_ad_content_width;
    var q = window.sogou_ad_content_height;
    var n = (function() {
        var z = typeof(u) == "undefined" || typeof(a) == "undefined";
        var A = typeof(q) == "undefined";
        if (z && A) {
            return 0
        }
        if (!z) {
            return 1
        }
        if (!A) {
            return 2
        }
    })();
    var l = function() {
        var B = f.getClientWidth();
        var z = f.getClientHeight();
        var A = B < z ? B : z;
        if (n === 2) {
            u = 1;
            a = 1;
            j = Number(j || A);
            q = Number(q)
        } else {
            if (n === 1) {
                u = Number(u);
                a = Number(a);
                j = Number(j || A);
                q = j / u * a
            }
        }
        if (j > 1200) {
            j = 1200
        }
        if (u <= 0 || a <= 0 || j <= 0 || q <= 0) {
            return false
        }
        return true
    };
    var t = function() {
        window.sogou_ad_id = undefined;
        window.sogou_ad_height = undefined;
        window.sogou_ad_width = undefined;
        window.sogou_ad_content_width = undefined;
        window.sogou_ad_content_height = undefined
    };
    var h = function() {
        if (top == window) {
            return 0
        } else {
            if (top == window.parent) {
                return 1
            } else {
                return 2
            }
        }
    };
    var c = function(C, D) {
        if (!(C instanceof Array)) {
            return
        }
        document.write('<div id = "' + D + '">');
        for (var B = 0, z = C.length; B < z; B++) {
            var A = decodeURIComponent(C[B]);
            document.writeln(A)
        }
        document.write("</div>")
    };
    var r = function(E, F, B) {
        var I = window.sogou_ad_width;
        var D = window.sogou_ad_height;
        var C = f.getClientWidth();
        var K = f.getClientHeight();
        var H = h();
        var G = {};
        if (!H) {
            var A = C > K ? K : C
        } else {
            var A = C > K ? C : K
        }
        if (!E.fxw && window.sogou_ad_content_width) {
            E.fxw = window.sogou_ad_content_width
        }
        if (E.fxw && E.fxw >= 240) {
            A = E.fxw;
            E.zoom = 0;
            E.fw = 0
        }
        if (E.zoom && E.zoom >= 50) {
            A = A * E.zoom / 100
        } else {
            E.zoom = 0
        }
        if (A > 1200) {
            A = 1200
        }
        G.real_w = A;
        var z = A;
        if (!E.fxh && window.sogou_ad_content_height) {
            E.fxh = window.sogou_ad_content_height
        }
        if (!E.fxh) {
            var J = A / I * D;
            G.real_h = A / I * D
        } else {
            if (E.fxh < 15) {
                E.fxh = 15
            }
            var J = E.fxh;
            G.real_h = E.fxh
        }
        if (E.fp && E.fp > 0 && E.fp < 5) {
            if (E.fp == 2 || E.fp == 4) {
                B += "position:fixed;top:0;z-index:2147483646;"
            } else {
                B += "position:fixed;bottom:0;z-index:2147483646;"
            }
        } else {
            B += "position:relative;"
        }
        B += "width:100%;";
        B += "height:" + J + "px;";
        if (E.al) {
            F += "position:absolute;left:0;"
        } else {
            F += "position:absolute;left:0;right:0;margin:auto;"
        }
        if (E.fw == 1) {
            if (E.zoom >= 50) {
                F += "width:" + E.zoom + "%;"
            } else {
                F += "width:1px;min-width:100%;"
            }
        } else {
            F += "width:" + z + "px;"
        }
        F += "height:" + J + "px;";
        return {
            iframe_style: F,
            div_style: B,
            real_w: z,
            real_h: J
        }
    };
    var v = function(B, E, z) {
        var D = document.createElement("div");
        var C = document.createElement("div");
        var A = function() {
            D.parentNode.parentNode.setAttribute("style", "display:none")
        };
        f.bind(D, "click", A);
        f.bind(D, "touchend", function(I) {
            var G = I.changedTouches[0];
            var F = G.pageX;
            var J = G.pageY;
            var H = D.getBoundingClientRect();
            if (F > H.left && F < H.right && J > H.top && J < H.bottom) {
                A()
            }
        });
        if (E == 2) {
            D.setAttribute("style", " width:" + j / 18 + "px; height:" + j / 18 + "px; background-color:#ccc; background-image:url(" + z + "); background-size:80%, 80%; z-index:9999; background-position:center; background-repeat:no-repeat; cursor:pointer; display:block; overflow:hidden; position:absolute; bottom:-" + j / 18 + "px; left:0;");
            C.setAttribute("style", " width:" + j / 9 + "px; height:" + j / 36 + "px;z-index:9999;position:absolute;left:0;bottom:-1px;")
        } else {
            if (E == 1) {
                D.setAttribute("style", " width:" + j / 18 + "px; height:" + j / 18 + "px; background-color:#ccc; background-image:url(" + z + "); background-size:80%, 80%; z-index:9999; background-position:center; background-repeat:no-repeat; cursor:pointer; display:block; overflow:hidden; position:absolute; top:-" + j / 18 + "px; right:0;");
                C.setAttribute("style", " width:" + j / 9 + "px; height:" + j / 36 + "px;z-index:9999;position:absolute;right:0;top:-1px;")
            }
        }
        document.getElementById(B).appendChild(D);
        document.getElementById(B).appendChild(C)
    };
    var m = function(V, ab, A, M, Y) {
        var ah = {};
        w.randomArray.push(Math.random() * 1000000);
        unionSlotParams = w.parseSlotDataFromStar(V);
        if (V == null) {
            document.write('<div style="display:none">code id is not valid</div>');
            return
        }
        ah = p.create(w.Param, {
            displayType: o,
            currentWindow: window,
            timeStamp: (new Date()).getTime()
        });
        ah.set("js", b);
        if (w.checkAdsCounter(o, window)) {
            return
        }
        var aa = unionSlotParams.st;
        var P = "//img02.sogoucdn.com/app/a/100200019/1423040208.png";
        var J = "";
        var U = ah.get("ssi0");
        var ad = ["w-0"];
        var ag = w.getAntiBlockServiceUrl();
        var T = 100;
        if (aa == 0) {
            if (document.location.protocol.indexOf("https") > -1) {
                J = "https://wuliao.epro.sogou.com/wapxml";
                T = 99
            } else {
                J = "http://" + ag.domain + "/wapxml";
                T = ag.index + 1
            }
        } else {
            if (aa == 1) {
                J = "http://sw.mobile.sogou.com/query"
            } else {
                if (aa == 2) {
                    if (window.sg_gdt) {
                        return
                    }
                    window.sg_gdt = true;
                    c(unionSlotParams.ssp_arr, w.getAdsWrapperDomId(ah.get("z")));
                    return
                } else {
                    return
                }
            }
        }
        ad.push("dx-" + T);
        var G = "";
        var z = "border:none;";
        var S = Number(ab);
        var ac = Number(A);
        var X = unionSlotParams.is_float;
        var F = unionSlotParams.is_close;
        var ae = unionSlotParams.ex || "";
        var Z = unionSlotParams.m || "";
        var E = ah.get("bi");
        if (unionSlotParams.np) {
            var I = r(unionSlotParams, z, G);
            var M = I.real_w;
            var Y = I.real_h
        } else {
            if (unionSlotParams.is_ifeng == 1) {
                unionSlotParams.fw = 1
            }
            if (unionSlotParams.is_float && unionSlotParams.is_float == 1) {
                if (ac == 2) {
                    unionSlotParams.fp = 2
                } else {
                    unionSlotParams.fp = 1
                }
            }
            var I = r(unionSlotParams, z, G);
            var M = I.real_w;
            var Y = I.real_h
        }
        z = I.iframe_style;
        G = I.div_style;
        ah.set("w", ab);
        ah.set("h", A);
        ah.set("id", sogou_ad_id);
        ah.set("pid", null);
        var R = M;
        var L = Y;
        var D = '<div style="display:none">-</div> <div style="{divStyle}"><div id="{wrapperId}" style="{iframeStyle}"><iframe id="{iframeId}" onload="document.sogou_ads{bi}_loaded=true;" src="{starServiceUrl}?{paramString}" style="{iframeStyle}" align="center,center" marginwidth="0"  marginheight="0" scrolling="no" frameborder="0" allowtransparency="true" ></iframe></div></div>';
        var W = w.getAdsDomId(ah.get("z"));
        var C = w.getAdsWrapperDomId(ah.get("z"));
        var O = w.Param.serialize(ah);
        O += "&ua=" + encodeURIComponent(navigator.userAgent);
        O += "&is_float=" + X;
        O += "&is_close=" + F;
        O += "&wd=" + R;
        O += "&hd=" + L;
        O += "&ex=" + ae;
        O += "&wsg=" + ad.join("_");
        O += "&_v=2b7519d3";
        if ((U & 15) == 3) {
            O += "&uc_param_str=dnnt"
        }
        O += "&m=" + Z;
        var af = unionSlotParams.ztd;
        if (af == 1) {
            if (window.sogou && window.sogou.PersonalReader && window.sogou.PersonalReader.getObj) {
                var H = window.sogou.PersonalReader.getObj();
                var Q = "query=" + H.query + "&url=" + H.url + "&from=" + H.from + "&uid=" + H.uid + "&type=" + H.type + "&stype=" + H.stype + "&click_id=" + H.click_id;
                O += "&ztds=" + encodeURIComponent(Q)
            }
        }
        var K = {
            iframeId: W,
            wrapperId: C,
            bi: E,
            paramString: O,
            divStyle: G,
            iframeStyle: z,
            starServiceUrl: J
        };
        var B = f.g("star_" + ah.get("id"));
        if (B) {
            B.innerHTML = f.template(D, K)
        } else {
            document.write(f.template(D, K))
        }
        if (unionSlotParams.fp == 1 || unionSlotParams.fp) {
            v(C, unionSlotParams.fp, P)
        }
        ah.set("bi");
        var N = w.Param.snap(ah);
        w.adsArray.push({
            domId: W,
            uiParamSnap: N,
            win: window,
            js: b
        });
        w.addAdsCounterLu(o, window);
        if (document.location.protocol.indexOf("https") == -1) {
            if (typeof(document.wb_pb) == "undefined") {
                document.wb_pb = new Array()
            }
            window.setTimeout("(function(){if(!document.sogou_ads" + E + '_loaded){var a=new Image();a.src = "http://eff.lu.sogou.com/answer?asid=' + sogou_ad_id + "&r=" + ah.get("rnd") + '";document.wb_pb.push(a);}}())', 6000)
        }
        t()
    };
    var g = window[y] = function(z) {
        m(z, u, a, j, q)
    };
    if (b === "wp") {
        if (typeof(window.sogou_ad_id) == "undefined") {
            return
        }
        if (!n) {
            return
        }
        if (!l()) {
            return
        }
        var d = document.getElementsByTagName("script");
        var k = d[d.length - 1].src;
        var i = f.getPara(k);
        w.isAsyn = i.asyn;
        w.getSlotDataFromWapUnion(sogou_ad_id, y)
    }
})(window[___sogouNamespaceName]);
(function(f, i) {
    var e = "SOGOU_STAR_URL_CALLBACK";
    var d = "SOGOU_STAR_URL_DATA";
    var a = "dsp.brand.sogou.com";
    var l = "http://img.lu.sogoucdn.com/wap/js/pe.js";
    try {
        a = f[___sogouNamespaceName].Business.getAntiBlockServiceUrl().domain
    } catch (c) {}
    try {
        a = f._SOGOU_CX._package.WF.Bussiness.get_antiblock_service_url().domain
    } catch (c) {}
    var h = "http://" + a + "/wap_ask_service";
    if (i.location.protocol.indexOf("https") !== -1) {
        l = "https://theta.sogoucdn.com/wap/js/pe.js";
        h = "https://service.epro.sogou.com/wap_ask_service"
    }
    var k = function(q) {
        var p = q;
        var o = 0;
        while ((p.parent != p) && (o < 10)) {
            o++;
            try {
                var r = p.parent.document.title;
                p = p.parent
            } catch (n) {
                break
            }
        }
        return p
    };
    var g = function(q) {
        var p = q;
        var n = "";
        try {
            n = p.document.location.href;
            if (p.parent != p) {
                n = p.document.referrer || p.document.location.href
            }
        } catch (o) {
            n = ""
        }
        return n
    };
    var j = function(o, q) {
        var p = h + "?callback=" + o + "&url=" + q;
        var n = i.createElement("script");
        n.src = p;
        i.body.appendChild(n)
    };
    var m = f[e] = function(n) {
        if (n == null || n.want != "1") {
            return
        }
        f[d] = n;
        var o = i.createElement("script");
        o.src = l;
        i.body.appendChild(o)
    };

    function b() {
        var n = k(f) || f;
        if (n.pe_has_loaded) {
            return
        } else {
            n.pe_has_loaded = true
        }
        var o = g(n);
        o = encodeURIComponent(o);
        j(e, o)
    }
    b()
})(window, document);