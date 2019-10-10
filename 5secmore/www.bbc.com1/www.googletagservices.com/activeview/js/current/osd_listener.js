(function(window, document) {
    var l;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function q(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    Fb: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Fb;
                break a
            } catch (a) {}
            ea = !1
        }
        da = ea ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = da;

    function t(a, b) {
        a.prototype = ca(b.prototype);
        a.prototype.constructor = a;
        if (ia) ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }
    var ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ka = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function la(a, b) {
        if (b) {
            var c = ka;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ja(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    var ma = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    la("Object.assign", function(a) {
        return a || ma
    });
    var u = this || self;

    function na(a) {
        return "string" == typeof a
    }

    function oa(a) {
        return "number" == typeof a
    }

    function pa() {}

    function v(a) {
        a.Ia = void 0;
        a.g = function() {
            return a.Ia ? a.Ia : a.Ia = new a
        }
    }

    function qa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ra(a) {
        return "array" == qa(a)
    }

    function sa(a) {
        var b = qa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ta(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ua(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function va(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va = ta : va = ua;
        return va.apply(null, arguments)
    }

    function wa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function xa(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function ya(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var za;

    function Aa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function w(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function Ba(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ca(a, b, c) {
        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    }

    function Da(a, b, c) {
        var d = c;
        w(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ea(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Fa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function x(a, b) {
        return 0 <= Aa(a, b)
    }

    function Ga(a, b) {
        b = Aa(a, b);
        0 <= b && Array.prototype.splice.call(a, b, 1)
    }

    function Ha(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ia(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ja(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function Ka(a, b) {
        a.sort(b || La)
    }

    function La(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ma(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (ra(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Ma.apply(null, Ja(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    }

    function Na(a, b) {
        return Ha.apply([], Ca(a, b, void 0))
    };

    function Oa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Pa(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Qa(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Ra(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Sa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function Ta(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function y(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ua.length; f++) c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Va(a) {
        var b = arguments.length;
        if (1 == b && ra(arguments[0])) return Va.apply(null, arguments[0]);
        if (b % 2) throw Error("Uneven number of arguments");
        for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    };

    function Wa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function z(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function Xa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var A;
    a: {
        var Ya = u.navigator;
        if (Ya) {
            var Za = Ya.userAgent;
            if (Za) {
                A = Za;
                break a
            }
        }
        A = ""
    }

    function B(a) {
        return -1 != A.indexOf(a)
    };

    function $a() {
        return B("Safari") && !(ab() || B("Coast") || B("Opera") || B("Edge") || B("Edg/") || B("OPR") || B("Firefox") || B("FxiOS") || B("Silk") || B("Android"))
    }

    function ab() {
        return (B("Chrome") || B("CriOS")) && !B("Edge")
    };

    function bb(a) {
        var b = Number(a);
        return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
    }

    function cb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function db(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function eb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function fb(a) {
        fb[" "](a);
        return a
    }
    fb[" "] = pa;

    function gb(a, b) {
        try {
            return fb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function hb(a, b) {
        var c = ib;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var jb = B("Opera"),
        C = B("Trident") || B("MSIE"),
        kb = B("Edge"),
        lb = B("Gecko") && !(z(A, "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
        mb = z(A, "WebKit") && !B("Edge"),
        nb = mb && B("Mobile");

    function ob() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var pb;
    a: {
        var qb = "",
            rb = function() {
                var a = A;
                if (lb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (kb) return /Edge\/([\d\.]+)/.exec(a);
                if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (mb) return /WebKit\/(\S+)/.exec(a);
                if (jb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();rb && (qb = rb ? rb[1] : "");
        if (C) {
            var sb = ob();
            if (null != sb && sb > parseFloat(qb)) {
                pb = String(sb);
                break a
            }
        }
        pb = qb
    }
    var tb = pb,
        ib = {};

    function ub(a) {
        return hb(a, function() {
            for (var b = 0, c = Wa(String(tb)).split("."), d = Wa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = Xa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Xa(0 == g[2].length, 0 == h[2].length) || Xa(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var vb;
    vb = u.document && C ? ob() : void 0;
    var wb = {},
        xb = null;
    var yb = 0,
        zb = 0;

    function Ab() {
        this.a = []
    }
    Ab.prototype.length = function() {
        return this.a.length
    };

    function Bb(a) {
        var b = a.a;
        a.a = [];
        return b
    }

    function Cb(a, b) {
        for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
        a.a.push(b)
    }

    function Db(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    };

    function Eb() {
        this.b = [];
        this.c = 0;
        this.a = new Ab
    }
    Eb.prototype.reset = function() {
        this.b = [];
        Bb(this.a);
        this.c = 0
    };

    function Fb(a, b, c) {
        if (null != c) {
            Cb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            yb = b;
            zb = d;
            c = yb;
            for (b = zb; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.a.push(c)
        }
    };

    function Gb() {}
    var Ib = "function" == typeof Uint8Array,
        Jb = [];

    function Kb(a, b) {
        if (b < a.f) {
            b += a.c;
            var c = a.a[b];
            return c === Jb ? a.a[b] = [] : c
        }
        if (a.b) return c = a.b[b], c === Jb ? a.b[b] = [] : c
    }

    function Lb(a, b) {
        a = Kb(a, b);
        return null == a ? 0 : a
    }

    function Mb(a, b, c) {
        if (0 !== c)
            if (b < a.f) a.a[b + a.c] = c;
            else {
                var d = a.f + a.c;
                a.a[d] || (a.b = a.a[d] = {});
                a.b[b] = c
            }
        else a.a[b + a.c] = null;
        return a
    }

    function Nb(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if (ra(c))
                    for (var d = 0; d < c.length; d++) c[d] && Nb(c[d]);
                else c && Nb(c)
            }
    }
    Gb.prototype.toString = function() {
        Nb(this);
        return this.a.toString()
    };
    var Ob;
    Ob = ["av.key", "js", "20191009"].slice(-1)[0];

    function Pb(a, b, c, d, e) {
        if (e) c = a + ("&" + b + "=" + c);
        else {
            var f = "&" + b + "=",
                g = a.indexOf(f);
            0 > g ? c = a + f + c : (g += f.length, f = a.indexOf("&", g), c = 0 <= f ? a.substring(0, g) + c + a.substring(f) : a.substring(0, g) + c)
        }
        return 2E3 < c.length ? void 0 !== d ? Pb(a, b, d, void 0, e) : a : c
    };
    var D = document,
        E = window;
    var Qb = C || jb || mb;

    function F(a, b) {
        this.a = void 0 !== a ? a : 0;
        this.b = void 0 !== b ? b : 0
    }
    F.prototype.ceil = function() {
        this.a = Math.ceil(this.a);
        this.b = Math.ceil(this.b);
        return this
    };
    F.prototype.floor = function() {
        this.a = Math.floor(this.a);
        this.b = Math.floor(this.b);
        return this
    };
    F.prototype.round = function() {
        this.a = Math.round(this.a);
        this.b = Math.round(this.b);
        return this
    };

    function G(a, b) {
        this.width = a;
        this.height = b
    }
    G.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    G.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    G.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    G.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Rb(a) {
        return a ? new Sb(Tb(a)) : za || (za = new Sb)
    }

    function Ub(a, b, c) {
        var d = document;
        c = c || d;
        a = a && "*" != a ? String(a).toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
        if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                d = {};
                for (var e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return c
        }
        c = c.getElementsByTagName(a || "*");
        if (b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && x(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }

    function Vb(a) {
        var b = a.scrollingElement ? a.scrollingElement : mb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return C && ub("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Wb(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function Xb(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function Yb(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function Tb(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Zb(a) {
        try {
            return a.contentWindow || (a.contentDocument ? Wb(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function $b(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Sb(a) {
        this.a = a || u.document || document
    };

    function ac() {
        return B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    };
    var bc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function cc(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }

    function dc(a, b, c) {
        if (ra(b))
            for (var d = 0; d < b.length; d++) dc(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    }

    function ec(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) dc(a[b], a[b + 1], c);
        return c.join("&")
    }

    function fc(a, b) {
        var c = 2 == arguments.length ? ec(arguments[1], 0) : ec(arguments, 1);
        if (c) {
            var d = a.indexOf("#");
            0 > d && (d = a.length);
            var e = a.indexOf("?");
            if (0 > e || e > d) {
                e = d;
                var f = ""
            } else f = a.substring(e + 1, d);
            d = [a.substr(0, e), f, a.substr(d)];
            e = d[1];
            d[1] = c ? e ? e + "&" + c : c : e;
            c = d[0] + (d[1] ? "?" + d[1] : "") + d[2]
        } else c = a;
        return c
    };

    function gc(a) {
        try {
            return !!a && null != a.location.href && gb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function hc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function ic(a) {
        var b = [];
        hc(a, function(c, d) {
            b.push(d)
        });
        return b
    }

    function jc() {
        var a = kc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var lc = Oa(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            u.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function mc(a) {
        return a ? a.passive && lc() ? a : a.capture || !1 : !1
    }

    function nc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, mc(d)), !0) : !1
    }

    function oc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, mc(void 0))
    };

    function pc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }

    function qc(a) {
        if (rc()) pc(window, a, !0);
        else {
            var b = u.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                if (!c) {
                    c = (new Sb(b)).a;
                    var d = "IFRAME";
                    "application/xhtml+xml" === c.contentType && (d = d.toLowerCase());
                    c = c.createElement(d);
                    c.style.display = "none";
                    c.id = "goog-srcless-iframe";
                    b.body.appendChild(c)
                }
                b = c
            } else b = null;
            b && b.contentWindow && pc(b.contentWindow, a, !0)
        }
    }
    var rc = Oa(function() {
        return "referrerPolicy" in u.document.createElement("img")
    });
    var sc = {
        ac: 1,
        bc: 2,
        $b: 3
    };
    var tc;
    tc = /^true$/.test("<<<IS_DEBUG_IP:j>>>");

    function H(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    l = H.prototype;
    l.O = function() {
        return this.right - this.left
    };
    l.M = function() {
        return this.bottom - this.top
    };

    function uc(a) {
        return new H(a.top, a.right, a.bottom, a.left)
    }
    l.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function vc(a, b, c) {
        b instanceof F ? (a.left += b.a, a.right += b.a, a.top += b.b, a.bottom += b.b) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    var wc = {};

    function xc(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        C && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }

    function yc(a, b) {
        var c = new F(0, 0),
            d = Wb(Tb(a));
        if (!gb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = Tb(e);
                var g = new F(0, 0);
                var h = f ? Tb(f) : document;
                h = !C || 9 <= Number(vb) || "CSS1Compat" == Rb(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = xc(e), f = Vb(Rb(f).a), g.a = e.left + f.a, g.b = e.top + f.b)
            } else g = xc(a), g = new F(g.left, g.top);
            c.a += g.a;
            c.b += g.b
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };

    function zc(a) {
        a = void 0 === a ? u : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };
    var Ac = !!window.google_async_iframe_id,
        Bc = Ac && window.parent || window;

    function Cc() {
        if (Ac && !gc(Bc)) {
            var a = "." + D.domain;
            try {
                for (; 2 < a.split(".").length && !gc(Bc);) D.domain = a = a.substr(a.indexOf(".") + 1), Bc = window.parent
            } catch (b) {}
            gc(Bc) || (Bc = window)
        }
        return Bc
    };

    function Dc(a) {
        return null !== a && a != a.top
    }

    function Ec(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && Dc(e) && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new G(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new G(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (n) {
                d = new G(-12245933, -12245933)
            }
            a = d;
            var k = Vb(Rb(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var p = new H(m, m, m, m)
            } else p = new H(k.b, k.a + a.width, k.b + a.height, k.a);
            return p
        } catch (n) {
            return new H(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Fc = {
            Eb: "ts=0",
            Db: "opp=1",
            Vb: "adf=1",
            Yb: "gcm=1"
        },
        Gc = {
            NONE: 0,
            Ub: 1
        };

    function Hc() {
        this.a = 0;
        this.h = !1;
        this.c = -1;
        this.b = !1;
        this.f = 0
    }
    Hc.prototype.isVisible = function() {
        return this.b ? .3 <= this.a : .5 <= this.a
    };
    var J = {
            Tb: 0,
            Wb: 1
        },
        Ic = {
            370204018: 0,
            370204019: 1,
            370204052: 2,
            370204026: 0,
            370204027: 1,
            370204053: 2
        },
        Jc = {
            668123728: 0,
            668123729: 1
        },
        Kc = {
            668123028: 0,
            668123029: 1
        },
        Lc = {
            NONE: 0,
            Zb: 1,
            Xb: 2
        },
        Mc = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        Nc = {
            319331040: 0,
            319331041: 1
        },
        Oc = {
            42530094: 0,
            42530095: 1
        },
        Pc = {
            42530173: 0,
            42530174: 1
        },
        Qc = {
            370204070: 1
        },
        Rc = {
            370204078: 0,
            370204079: 1,
            370204080: 0,
            370204081: 1
        };

    function Sc() {
        this.a = null;
        this.b = !1;
        this.c = null
    }

    function K(a) {
        a.b = !0;
        return a
    }

    function Tc(a, b) {
        a.c = void 0 === b ? null : b
    }

    function Uc(a, b) {
        a.c && w(b, function(c) {
            c = a.c[c];
            void 0 !== c && Vc(a, c)
        })
    }

    function Wc(a) {
        Sc.call(this);
        this.f = a
    }
    t(Wc, Sc);

    function Vc(a, b) {
        var c;
        if (!(c = null !== a.a)) {
            a: {
                c = a.f;
                for (d in c)
                    if (c[d] == b) {
                        var d = !0;
                        break a
                    }
                d = !1
            }
            c = !d
        }
        c || (a.a = b)
    };

    function Xc() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    Xc.prototype.reset = function() {
        this.a = {};
        this.c = !0;
        this.b = {}
    };

    function L(a, b, c) {
        a.a[b] || (a.a[b] = new Wc(c));
        return a.a[b]
    }

    function Yc(a, b, c) {
        (a = a.a[b]) && Vc(a, c)
    }

    function M(a, b) {
        var c = a.b;
        if (null !== c && b in c) return a.b[b];
        if (a = a.a[b]) return a.a
    }

    function Zc(a) {
        var b = {},
            c = Ra(a.a, function(d) {
                return d.b
            });
        Qa(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.b && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function $c(a, b) {
        if (!a.c) return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && Vc(e, d)
        }
        return b.join("&")
    }

    function ad(a, b) {
        a.c && w(Sa(a.a), function(c) {
            return Uc(c, b)
        })
    }

    function bd(a, b) {
        a.c && b && na(b) && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = Ca(b, function(c) {
            return Number(c)
        }), ad(a, b))
    };

    function cd(a) {
        L(a, "od", Gc);
        K(L(a, "opac", J));
        L(a, "ue", J);
        L(a, "ud", J);
        K(L(a, "gcm", J));
        K(L(a, "cm", J));
        K(L(a, "sela", J));
        K(L(a, "sbeos", J));
        K(L(a, "prf", J));
        K(L(a, "mwt", J));
        K(L(a, "lcs", J));
        L(a, "iogeo", J);
        K(L(a, "osddt", J))
    };
    var dd = !C && !$a();

    function ed(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (dd && a.dataset) {
            if (!(!B("Android") || ab() || B("Firefox") || B("FxiOS") || B("Opera") || B("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + db(b))
    }

    function fd(a, b) {
        return /-[a-z]/.test(b) ? !1 : dd && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + db(b)) : !!a.getAttribute("data-" + db(b))
    };

    function gd() {
        this.b = this.a = null;
        this.i = this.f = this.h = 0;
        this.c = "no"
    }

    function hd(a) {
        if (!a) return !1;
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function id(a) {
        return Ba(a, function(b) {
            return hd(b)
        })
    }

    function jd(a) {
        return Ba(a, function(b) {
            return "SCRIPT" != b.nodeName && "FONT" != b.nodeName
        })
    }

    function kd(a) {
        if (!a.length) return null;
        var b = id(a);
        return 0 < b.length ? b[0] : a[0]
    }

    function ld(a) {
        if (!a) return null;
        if (!a.children) return a;
        for (var b = jd(Ia(a.children)); b.length;) {
            var c = id(b);
            if (1 == c.length) return c[0];
            if (1 < c.length) break;
            b = Na(b, function(d) {
                return jd(Ia(d.children))
            })
        }
        return a
    }

    function md(a, b) {
        return Ma(Ca(b, function(c) {
            var d = a || document;
            return Ia(d.querySelectorAll && d.querySelector ? d.querySelectorAll("." + c) : Ub("*", c, a))
        }))
    }

    function nd(a, b) {
        b = void 0 === b ? !1 : b;
        var c = void 0 === c ? !1 : c;
        a.b = a.a;
        a.c = "mue";
        if (!hd(a.a)) {
            var d = ld(a.a);
            hd(d) ? (a.b = d, a.c = "ie") : b && (c || E !== E.top) && (b = md(E.document.body, ["GoogleActiveViewInnerContainer"]), 1 == b.length && (a.b = b[0], a.c = "ce"))
        }
    };

    function od(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }

    function pd(a) {
        return !!a.b || !!a.a
    }
    od.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    };

    function N() {}
    N.prototype.a = function() {
        return 0
    };
    N.prototype.c = function() {
        return 0
    };
    N.prototype.f = function() {
        return 0
    };
    N.prototype.b = function() {
        return 0
    };

    function qd() {
        if (!rd()) throw Error();
    }
    t(qd, N);

    function rd() {
        return !(!E || !E.performance)
    }
    qd.prototype.a = function() {
        return rd() && E.performance.now ? E.performance.now() : N.prototype.a.call(this)
    };
    qd.prototype.c = function() {
        return rd() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : N.prototype.c.call(this)
    };
    qd.prototype.f = function() {
        return rd() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : N.prototype.f.call(this)
    };
    qd.prototype.b = function() {
        return rd() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : N.prototype.b.call(this)
    };

    function sd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[D.visibilityState || D.webkitVisibilityState || D.mozVisibilityState || ""] || 0
    };

    function td() {}
    td.prototype.isVisible = function() {
        return 1 === sd()
    };
    var ud = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function vd() {
        var a = u,
            b = [],
            c = null;
        do {
            var d = a;
            if (gc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new wd(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = u;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.lb = !0);
        return b
    }

    function xd(a, b) {
        this.a = a;
        this.b = b
    }

    function wd(a, b, c) {
        this.url = a;
        this.c = b;
        this.lb = !!c;
        this.depth = null
    };

    function yd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }

    function zd(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Ad(a, b, c, d, e) {
        var f = [];
        hc(a, function(g, h) {
            (g = Bd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Bd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Bd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ad(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Cd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = zd(c, d)
    }

    function Dd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ed(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(p, n) {
            return p - n
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Ad(h[k], a.c, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.c;
                        break
                    }
                    a.f && (e = d, m[e - 1] == a.c && --e, b += m.substr(0, e), e = a.c, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Ed(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Fd() {
        this.b = new td;
        this.a = rd() ? new qd : new N
    }
    Fd.prototype.setInterval = function(a, b) {
        return E.setInterval(a, b)
    };
    Fd.prototype.clearInterval = function(a) {
        E.clearInterval(a)
    };
    Fd.prototype.setTimeout = function(a, b) {
        return E.setTimeout(a, b)
    };
    Fd.prototype.clearTimeout = function(a) {
        E.clearTimeout(a)
    };

    function Gd(a) {
        O();
        var b = Cc() || E;
        pc(b, a, !1)
    }
    v(Fd);

    function Hd() {}

    function O() {
        var a = Hd.g();
        if (!a.a) {
            if (!E) throw Error("Context has not been set and window is undefined.");
            a.a = Fd.g()
        }
        return a.a
    }
    v(Hd);

    function Id(a) {
        this.h = null;
        a || (a = []);
        this.c = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || ra(b) || Ib && b instanceof Uint8Array)) {
                    this.f = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.f = Number.MAX_VALUE
        }
    }
    ya(Id, Gb);

    function Jd(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }

    function Kd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.a) return b.apply(null, q(d));
            try {
                return a.a = a.f.a.a(), b.apply(null, q(d))
            } finally {
                a.c += a.f.a.a() - a.a, a.a = -1, a.b += 1
            }
        }
    };

    function Ld(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Jd(a)
    };

    function P() {
        this.i = void 0;
        this.m = 0;
        this.c = new od(0, "");
        this.b = 0;
        this.j = -1;
        this.f = "";
        this.a = new Xc;
        Tc(K(L(this.a, "mv", Lc)), Mc);
        L(this.a, "omid", J);
        K(L(this.a, "epoh", J));
        K(L(this.a, "epph", J));
        Tc(K(L(this.a, "umt", J)), Jc);
        Tc(K(L(this.a, "gmpd", J)), Kc);
        Tc(K(L(this.a, "sel", J)), Ic);
        Tc(K(L(this.a, "buvpe", J)), Nc);
        Tc(K(L(this.a, "imams", J)), Oc);
        Tc(L(this.a, "imar", J), Pc);
        this.a.b.imar = 1;
        Tc(K(L(this.a, "gms", J)), Qc);
        K(L(this.a, "phel", J));
        K(L(this.a, "phell", J));
        K(L(this.a, "oseid", sc));
        K(L(this.a, "xdi", J));
        K(L(this.a, "amp", J));
        K(L(this.a, "prf", J));
        K(L(this.a, "gtx", J));
        K(L(this.a, "mvp_lv", J));
        Tc(K(L(this.a, "lvio", J)), Rc);
        K(L(this.a, "xosd", J));
        this.l = new Ld(O(), this.a);
        this.h = null
    }

    function Md() {
        return P.g().l
    }
    v(P);

    function Nd() {
        var a = "https:";
        E && E.location && "http:" === E.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01
    }

    function Od(a, b, c, d) {
        if (Math.random() < (d || a.a)) try {
            if (c instanceof yd) var e = c;
            else e = new yd, hc(c, function(g, h) {
                var k = e,
                    m = k.h++;
                g = zd(h, g);
                k.a.push(m);
                k.b[m] = g
            });
            var f = Dd(e, a.b, "/pagead/gen_204?id=" + b + "&");
            f && Gd(f)
        } catch (g) {}
    };

    function Pd(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Qd = null;

    function Rd() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Sd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Td(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Q = u.performance,
        Ud = !!(Q && Q.mark && Q.measure && Q.clearMarks),
        Vd = Oa(function() {
            var a;
            if (a = Ud) {
                var b;
                if (null === Qd) {
                    Qd = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Qd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Qd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Wd() {
        var a = Cc();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = Vd() || (null != b ? b : 1 > Math.random())
    }

    function Xd(a) {
        a && Q && Vd() && (Q.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Q.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Wd.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Sd() || Rd();
        a = new Td(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Q && Vd() && Q.mark(b);
        return a
    };

    function Yd() {
        var a = Zd;
        this.i = $d;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }

    function ae(a, b, c) {
        return Kd(Md().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a,
                        g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = Sd() || Rd();
                        g.duration = h - g.value;
                        var k = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        Q && Vd() && Q.mark(k);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else e = c()
            } catch (m) {
                f = a.f;
                try {
                    Xd(d), f = a.j(b, new be(ce(m)), void 0, void 0)
                } catch (p) {
                    a.c(217, p)
                }
                if (!f) throw m;
            }
            return e
        })()
    }

    function de(a, b) {
        var c = ee;
        return Kd(Md().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return ae(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Yd.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new yd;
            f.f = !0;
            Cd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new be(ce(b)));
            b.msg && Cd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (I) {}
            if (d) try {
                d(g)
            } catch (I) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = vd(),
                k = new wd(u.location.href, u, !1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var p = h[d];
                !b && ud.test(p.url) && (b = p);
                if (p.url && !p.lb) {
                    k = p;
                    break
                }
            }
            p = null;
            var n = h.length && h[m].url;
            0 != k.depth && n && (p = h[m]);
            var r = new xd(k, p);
            r.b && Cd(f, 4, "top", r.b.url || "");
            Cd(f, 5, "url", r.a.url || "");
            Od(this.i, e, f, c)
        } catch (I) {
            try {
                Od(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ce(I),
                    url: r && r.a.url
                }, c)
            } catch (Hb) {}
        }
        return this.f
    };

    function ce(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }

    function be(a) {
        Pd.call(this, Error(a), {
            message: a
        })
    }
    t(be, Pd);
    var $d, ee, Zd = new Wd;

    function fe() {
        var a = Cc();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = Zd, a.a = !1, a.b != a.c.google_js_reporting_queue && (Vd() && w(a.b, Xd), a.b.length = 0))
    }(function() {
        $d = new Nd;
        ee = new Yd;
        var a = Cc();
        a && a.document && ("complete" == a.document.readyState ? fe() : Zd.a && nc(a, "load", function() {
            fe()
        }))
    })();

    function ge(a) {
        ee.b = function(b) {
            w(a, function(c) {
                c(b)
            })
        }
    }

    function he(a, b) {
        return ae(ee, a, b)
    }

    function R(a, b) {
        return de(a, b)
    }

    function ie(a, b, c) {
        ee.c(a, b, c, void 0)
    };
    var je = +new Date,
        ke = -1,
        le = !1;

    function S() {
        return +new Date - je
    }

    function me() {
        var a = P.g().i,
            b = le ? S() - ke : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var c = [250, 500, 1E3];
        ie(637, Error(), .001);
        var d = -1; - 1 != b && -1 > b && (d = b);
        for (b = 0; b < a.length; ++b)
            if (d < a[b]) {
                var e = c[b];
                break
            }
        void 0 === e && (e = c[a.length]);
        return e
    };

    function ne(a) {
        return (a = a.document) && "function" == qa(a.elementFromPoint)
    };
    tc && ($d.a = 1);
    if (D && D.URL) {
        var oe, kc = D.URL;
        oe = !!kc && 0 < jc().length;
        ee.f = !oe
    }

    function T(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        c = de(d, c);
        nc(a, b, c, {
            capture: e
        });
        return c
    }

    function pe(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ea(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Da(b, function(c, d) {
            return c.concat(Ia((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function qe(a, b) {
        if (!a) return !1;
        var c = 0,
            d = null;
        a = pe(a);
        for (var e = 0; e < a.length; e++) {
            var f = !1;
            d = a[e];
            switch (d.nodeName) {
                case "IMG":
                    var g = d;
                    if (g.complete || g.naturalWidth) f = !0;
                    break;
                case "FRAME":
                case "IFRAME":
                    g = d;
                    try {
                        if (g.readyState) f = "complete" == g.readyState;
                        else {
                            var h = g.contentWindow || g.contentDocument;
                            h.document && (h = h.document);
                            f = h && h.readyState ? "complete" == h.readyState : !0
                        }
                    } catch (k) {
                        f = !0
                    }
            }
            f || (c++, T(d, "load", function() {
                c--;
                c || b(null)
            }, 116))
        }
        a = d = null;
        return !c
    }

    function re(a, b) {
        function c(d) {
            oc(a, d, c);
            b(d)
        }
        return T(a, "DOMNodeRemoved", c, 156, !1)
    }

    function se(a, b) {
        function c() {
            a();
            d++;
            10 > d && O().setTimeout(de(b, c), 100)
        }
        var d = 0;
        c()
    };

    function te(a, b) {
        a && (a.b && (b[4] = a.b), a.a && (b[12] = a.a))
    }

    function ue(a) {
        var b = [];
        Qa(a, function(c, d) {
            d = encodeURIComponent(d);
            na(c) && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + +new Date);
        return b.join("\n")
    };

    function ve() {
        this.a = null;
        this.status = 0
    };
    var we = 0;

    function xe(a, b) {
        try {
            we++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function ye(a, b) {
        b && (a(b), b.frames && w(b.frames, function(c) {
            ye(a, c)
        }))
    }

    function ze(a, b) {
        0 == a.length ? (b.a = null, b.status = 1) : (a = Yb.apply(null, a), !a || a.tagName ? b.a = a : b.a = a.parentElement, b.a || (b.status = -2))
    }

    function Ae(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)", "i"),
            e = new ve;
        if ("" == b || -1 == c) return e.status = -1, e;
        try {
            b = [];
            var f = (a.document || document).getElementsByTagName("A");
            for (a = 0; a < f.length; a++) {
                var g = f[a],
                    h = c,
                    k = d.exec(g.href),
                    m;
                if (!(m = !k || !k[1])) {
                    var p = k[1],
                        n = p.length;
                    if (0 == n) var r = 0;
                    else {
                        for (var I = 305419896, Hb = 0; Hb < n; Hb++) I ^= (I << 5) + (I >> 2) + p.charCodeAt(Hb) & 4294967295;
                        r = 0 < I ? I : 4294967296 + I
                    }
                    m = h != r
                }
                m || (e.status = 3, b.push(g))
            }
            if (0 < b.length || 0 < b.length) return ze(b, e), e
        } catch (Nh) {
            return e.status = 7, e
        }
        e.status = 1;
        return e
    }

    function Be(a) {
        return new H(a.top, a.right, a.bottom, a.left)
    }

    function Ce() {
        var a = O().b;
        return 0 === sd() ? -1 : a.isVisible() ? 0 : 1
    }

    function De(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }

    function Ee(a) {
        if (!a) return null;
        a = a.split("-");
        return 4 == a.length ? new H(bb(a[0]), bb(a[3]), bb(a[2]), bb(a[1])) : null
    }

    function Fe(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = Ba(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === E.top || f
                    }), a = ba(c), c = a.next(); !c.done; c = a.next()) xe(b, c.value);
            else {
                c = [];
                var d = Zb(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = Ca(Ub("IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return Zb(e)
                    })
                } catch (e) {}
                a = ba(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && ye(wa(xe, b), c)
                    } catch (e) {}
                }
            }
    }

    function Ge(a) {
        if (!a) return 0;
        if (fd(a, "googleAvDm")) switch (ed(a, "googleAvDm")) {
            case "1":
                return 1;
            case "2":
                break;
            case "3":
                return 3;
            default:
                return 1
        }
        return 2
    }

    function He(a) {
        var b = {};
        if (void 0 == a) return b;
        "?" === a.charAt(0) && (a = a.substring(1));
        cc(a, function(c, d) {
            return b[c] = d
        });
        return b
    };

    function Ie() {
        var a = A;
        return a ? Ea("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return z(a, b)
        }) ? !0 : z(a, "Presto") && z(a, "Linux") && !z(a, "X11") && !z(a, "Android") && !z(a, "Mobi") : !1
    }

    function Je() {
        var a = A;
        return z(a, "AppleTV") || z(a, "Apple TV") || z(a, "CFNetwork") || z(a, "tvOS")
    }

    function Ke() {
        var a = A;
        return z(a, "sdk_google_atv_x86") || z(a, "Android TV")
    };

    function U() {
        this.b = !gc(E.top);
        this.i = ac() || !ac() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"));
        var a = vd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(bc)[3] || null) && decodeURI(a);
        this.a = new H(0, 0, 0, 0);
        this.m = new G(0, 0);
        this.f = new G(0, 0);
        this.c = new H(0, 0, 0, 0);
        this.j = new F(0, 0);
        this.l = null;
        if (!(a = !E)) {
            a = E !== E.top;
            for (var b = E.top, c = E, d = c, e = 0; c && c != c.parent;) c = c.parent, e++, gc(c) && (d = c);
            b = b === d;
            a && b && null != E.top.mraid ? a = {
                Pa: E.top.mraid,
                Ta: 3
            } : (c = E.mraid, a = null != c ? a ? b ? {
                Pa: c,
                Ta: 2
            } : {
                Pa: c,
                Ta: 1
            } : {
                Pa: c,
                Ta: 0
            } : null);
            a = !a
        }
        this.h = !a;
        Le(this)
    }

    function Me(a, b) {
        b && b.screen && (a.m = new G(b.screen.width, b.screen.height))
    }

    function Ne(a, b) {
        var c = a.a ? new G(a.a.O(), a.a.M()) : new G(0, 0);
        b = void 0 === b ? E : b;
        Dc(b) && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var k = h.scrollHeight,
                    m = h.scrollWidth,
                    p = h.offsetHeight,
                    n = h.offsetWidth;
                h.clientHeight != p && (k = g.scrollHeight, m = g.scrollWidth, p = g.offsetHeight, n = g.offsetWidth);
                k > c.height ? k > p ? (d = k, e = m) : (d = p, e = n) : k < p ? (d = k, e = m) : (d = p, e = n)
            }
            var r = new G(e, d)
        } catch (I) {
            r = new G(-12245933, -12245933)
        }
        a.f = r
    }

    function Le(a) {
        E && E.document && (a.c = Ec(!1, E, a.i), a.a = Ec(!0, E, a.i), a.l = a.a, Ne(a, E), Me(a, E))
    }

    function Oe() {
        U.g();
        var a = O().b.isVisible(),
            b = 0 === sd();
        return a || b
    }
    v(U);
    var Pe = new H(0, 0, 0, 0);

    function Qe(a, b) {
        try {
            try {
                var c = Be(a.getBoundingClientRect())
            } catch (k) {
                c = new H(0, 0, 0, 0)
            }
            var d = c.right - c.left,
                e = c.bottom - c.top,
                f = yc(a, b),
                g = f.a,
                h = f.b;
            return new H(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
        } catch (k) {
            return uc(Pe)
        }
    }

    function Re(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new H(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new H(0, 0, 0, 0)
    }

    function Se(a, b) {
        b = Te(b);
        return 0 === b ? 0 : Te(a) / b
    }

    function Te(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Ue(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (Qb && !(C && ub("9") && !ub("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;
                    var f = typeof d;e = ("object" == f && null != d || "function" == f) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var g = Tb(a),
                        h = g && Wb(g),
                        k = h && h.frameElement;
                    k && (a = k)
                }
            }
            catch (m) {
                break
            }
        }
        return !1
    }

    function Ve(a, b, c) {
        if (!a || !b) return !1;
        b = vc(uc(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = Cc();
        gc(d.top) && d.top && d.top.document && (d = d.top);
        if (!ne(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = Tb(c)) && b.defaultView && b.defaultView.frameElement) && Ue(b, a);
        d = a === c;
        a = !d && a && $b(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function We(a, b, c, d) {
        return U.g().b ? !1 : 0 >= a.O() || 0 >= a.M() ? !0 : c && d ? he(208, function() {
            return Ve(a, b, c)
        }) : !1
    };

    function Xe(a, b, c) {
        var d = new H(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = c
    };

    function Ye(a, b, c, d, e, f, g) {
        this.j = a;
        this.i = b;
        this.c = c;
        this.b = d;
        this.h = e;
        this.f = f;
        this.a = g
    }

    function Ze(a, b) {
        return b ? Math.max(a.b, a.h) : a.b
    };

    function $e(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    $e.prototype.cancel = function() {
        O().clearTimeout(this.a);
        this.a = null
    };

    function af(a) {
        var b = O();
        a.a = b.setTimeout(Kd(Md().a, R(143, function() {
            a.b++;
            a.c.xb()
        })), me())
    };

    function bf(a, b, c) {
        this.c = a;
        this.D = void 0 === c ? "na" : c;
        this.h = [];
        this.s = !1;
        this.f = new Xe(-1, !0, this);
        this.a = this;
        this.i = b;
        this.u = this.B = this.l = !1;
        this.C = "uk";
        this.j = !0
    }
    l = bf.prototype;
    l.ba = function() {
        return this.H()
    };
    l.H = function() {
        return !1
    };
    l.Ha = function() {
        this.s = !0
    };
    l.ia = function() {
        return this.a.C
    };

    function cf(a, b) {
        a.u || (a.u = !0, a.C = b, a.i = 0, a.wa(), a.a != a || df(a))
    }
    l.G = function() {
        return this.a.D
    };
    l.K = function() {
        return this.a.fb()
    };
    l.fb = function() {
        return {}
    };
    l.N = function() {
        return this.a.i
    };

    function ef(a, b) {
        x(a.h, b) || (a.h.push(b), b.ja(a.a), b.ha(a.f), b.aa() && (a.l = !0))
    }
    l.Ma = function() {
        var a = U.g();
        a.a = Ec(!0, this.c, a.i)
    };
    l.Oa = function() {
        Me(U.g(), this.c)
    };
    l.Na = function() {
        Ne(U.g(), this.c)
    };
    l.rb = function() {
        var a = U.g();
        a.c = Ec(!1, this.c, a.i)
    };
    l.gb = function() {
        return this.f.a
    };

    function ff(a) {
        a = a.a;
        a.Oa();
        a.Ma();
        a.rb();
        a.Na();
        a.f.a = a.gb()
    }
    l.xb = function() {};

    function gf(a) {
        a.l = a.h.length ? Ea(a.h, function(b) {
            return b.aa()
        }) : !1
    }
    l.wa = function() {};

    function hf(a) {
        var b = Ia(a.h);
        w(b, function(c) {
            c.ha(a.f)
        })
    }

    function df(a) {
        var b = Ia(a.h);
        w(b, function(c) {
            c.ja(a.a)
        });
        a.a != a || hf(a)
    }
    l.ja = function(a) {
        var b = this.a,
            c = a.N();
        this.a = c >= this.i ? a : this;
        b !== this.a ? (this.a == this || 1 == c && 0 != this.i || this.wa(), this.j = this.a.j, df(this)) : this.j !== this.a.j && (this.j = this.a.j, df(this))
    };
    l.ha = function(a) {
        if (a.b === this.a) {
            var b;
            if (!(b = this.B)) {
                b = this.f;
                var c = this.l;
                if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c) b = b.a, c = a.a, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
                b = !c
            }
            this.f = a;
            b && hf(this)
        }
    };

    function jf(a, b) {
        a.i !== b && (a.a != a && b > a.a.i && (a.a = a, df(a)), a.i = b)
    }
    l.aa = function() {
        return this.l
    };

    function kf(a, b, c, d) {
        this.c = a;
        this.b = new H(0, 0, 0, 0);
        this.l = new H(0, 0, 0, 0);
        this.a = b;
        this.u = c;
        this.w = d;
        this.timestamp = -1;
        this.h = new Ye(b.f, this.b, new H(0, 0, 0, 0), 0, 0, S(), 0)
    }
    l = kf.prototype;
    l.La = function() {
        return !0
    };
    l.na = function() {};
    l.Ea = function() {
        this.c && (this.b = Qe(this.c, this.a.a.c))
    };
    l.Za = function() {
        this.l = this.a.f.a
    };
    l.fa = function() {
        this.Ea();
        this.h = new Ye(this.a.f, this.b, this.h.c, this.h.b, this.h.h, S(), this.h.a)
    };
    l.K = function() {
        return this.a.K()
    };
    l.N = function() {
        return this.a.N()
    };
    l.ia = function() {
        return this.a.ia()
    };
    l.ja = function() {};
    l.ha = function() {
        this.fa()
    };
    l.aa = function() {
        return this.w
    };

    function lf(a) {
        this.a = a
    }
    l = lf.prototype;
    l.N = function() {
        return this.a.N()
    };
    l.ia = function() {
        return this.a.ia()
    };
    l.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.Fa(a, b, c), ef(this.a, d));
        return d
    };
    l.ba = function() {
        return this.H()
    };
    l.H = function() {
        return !1
    };
    l.sa = function() {
        return !0
    };
    l.K = function() {
        return {}
    };

    function mf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function nf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };

    function of () {
        this.c = 0;
        this.a = [];
        this.b = !1
    } of .prototype.add = function(a, b, c) {
        ++this.c;
        a = new mf(a, b, c);
        this.a.push(new mf(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };

    function pf(a) {
        var b = new of ;
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        hc(a, function(e, f) {
            d && void 0 === e || b.add(f, e, c)
        });
        return b
    }

    function qf(a) {
        var b = rf;
        a.b && (Ka(a.a, function(c, d) {
            return nf(d, c) ? 1 : nf(c, d) ? -1 : 0
        }), a.b = !1);
        return Da(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function rf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" == typeof a ? a ? b : "" : ra(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (x(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function sf(a) {
        var b = [],
            c = [];
        Qa(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch (ra(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                case "aio":
                case "nio":
                case "iem":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
            }
        });
        return b.concat(c)
    }

    function tf() {
        if (/r\d{8}/.test("<<<CAFE_VERSION_ID:j>>>")) return "<<<CAFE_VERSION_ID:j>>>";
        if (Ob && "unreleased" !== Ob) return Ob
    }

    function uf(a) {
        if (/&v=[^&]+/.test(a)) return a;
        var b = tf();
        return b ? a + "&v=" + encodeURIComponent(b) : a
    }

    function vf(a) {
        var b = void 0 === b ? 4E3 : b;
        a = uf(a.toString());
        a = a.substring(0, b);
        Gd(a)
    };

    function wf() {};

    function xf() {
        this.a = this.b = this.c = 0
    }

    function yf(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d) a.b = 0
    };
    var zf = [1, .75, .5, .3, 0];

    function Af(a) {
        this.a = a = void 0 === a ? zf : a;
        this.b = Ca(this.a, function() {
            return new xf
        })
    }

    function Bf(a) {
        return Cf(a, function(b) {
            return b.c
        }, !1)
    }

    function Df(a) {
        return Cf(a, function(b) {
            return b.a
        }, !0)
    }

    function Ef(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f],
                k = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            yf(a.b[f], g && k, e, !g || h)
        }
    }

    function Cf(a, b, c) {
        a = Ca(a.b, function(d) {
            return b(d)
        });
        return c ? a : Ff(a)
    }

    function Ff(a) {
        return Ca(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Gf() {
        this.a = new Af;
        this.c = new xf;
        this.b = -1;
        this.f = new Af([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function Hf(a) {
        return 1E3 <= a.c.a
    };
    var If = new H(0, 0, 0, 0);

    function V(a, b, c) {
        this.V = uc(If);
        this.c = new Gf;
        this.U = -2;
        this.Bb = -1;
        this.Ba = b;
        this.ya = null;
        this.u = -1 != b;
        this.I = null;
        this.F = -1;
        this.W = c;
        this.Cb = this.Qb = pa;
        this.a = new gd;
        this.a.a = a;
        this.a.b = a;
        this.A = !1;
        this.l = {
            ua: null,
            ta: null
        };
        this.X = !0;
        this.Aa = !1;
        P.g().m++;
        this.f = new Hc;
        this.Ab = this.$ = -1;
        this.za = 0;
        this.C = -1;
        this.b = null;
        this.B = new H(0, 0, 0, 0);
        this.tb = !1;
        this.i = new Xc;
        cd(this.i);
        (a = this.a.a) && a.getAttribute && fd(a, "googleAvInapp") && (U.g().h = !0);
        1 == this.W ? Yc(this.i, "od", 1) : Yc(this.i, "od", 0)
    }
    t(V, wf);

    function Jf(a) {
        return a.b ? a.b.b : a.V
    }
    l = V.prototype;
    l.ra = function(a) {
        var b = P.g();
        na(a) && 0 != a.length && (b.f = $c(b.a, a))
    };
    l.qb = function() {
        return !1
    };
    l.Ka = function() {
        this.u = !0
    };
    l.ka = function() {
        return this.u
    };
    l.Qa = function() {
        this.f.a = 0
    };
    l.Ra = function() {
        this.c = new Gf
    };

    function Kf(a, b) {
        b = b.create(a.a.b, a.i, a.qb());
        if (b = null != b && b.La() ? b : null) a.b = b
    }

    function Lf(a, b, c) {
        if (a.b) {
            a.b.fa();
            var d = a.b.h,
                e = d.j,
                f = e.a;
            if (null != d.c) {
                var g = d.i;
                a.I = new F(g.left - f.left, g.top - f.top);
                a.B = d.c
            }
            f = Ze(d, a.zb());
            g = {};
            null !== e.volume && (g.volume = e.volume);
            var h = P.g().a;
            Ea(["imams", "gms"], function(k) {
                return 1 === M(h, k)
            }) || 1 === M(a.i, "osddt") ? (e = 0, a.ya && (e = d.f - a.ya.f), a.ya = d, a.xa(Jf(a), f, b, c, !1, g, e, d.a)) : a.xa(Jf(a), f, b, c, !1, g, void 0, d.a)
        }
    }
    l.xa = function(a, b, c, d, e, f, g, h) {
        void 0 === g && (-1 == this.Ba ? g = 0 : (g = c - this.Ba || 1, g = 1E4 < g ? 1 : g));
        h = void 0 === h ? -1 : h;
        if (!this.A) {
            oa(b) || (this.I = new F(a.left - b.left, a.top - b.top));
            if (this.ka()) {
                f = h;
                f = void 0 === f ? -1 : f;
                h = new Hc;
                h.h = d;
                h.c = Ce();
                if (oa(b)) h.a = Mf(this, b), h.f = f;
                else {
                    h.a = Mf(this, a, b);
                    var k;
                    0 <= f ? k = f : k = h.a * Te(a) / (E.screen.height * E.screen.width);
                    h.f = k
                }
                h.b = this.ma();
                k = this.c;
                f = this.f;
                e = e && this.f.a >= (this.ma() ? .3 : .5);
                k.b = Math.max(k.b, h.a);
                Ef(k.f, h.f, f.f, h.h, g, e);
                Ef(k.a, h.a, f.a, h.h, g, e);
                e = e || f.b != h.b ? f.isVisible() && h.isVisible() : f.isVisible();
                f = !h.isVisible() || h.h;
                yf(k.c, e, g, f);
                this.Ba = c;
                0 < h.a && (-1 === this.$ && (this.$ = c), this.Ab = c); - 1 == this.Bb && Hf(this.c) && (this.Bb = c);
                if (-2 == this.U) try {
                    a: {
                        var m = oa(b) ? null : b;
                        if (a && a != If && 0 != Te(Jf(this))) {
                            var p = U.g();
                            if (!m) {
                                if (!p.a) {
                                    var n = -1;
                                    break a
                                }
                                m = new H(0, p.a.O(), p.a.M(), 0)
                            }
                            n = m.O && 0 < m.O() && m.M && 0 < m.M() ? Mf(this, a, m) : -1
                        } else n = -1
                    }
                    this.U = n
                }
                catch (r) {
                    ie(207, r)
                }
                this.f = h;
                d && (this.f.a = 0)
            }
            this.Qb(this)
        }
    };

    function Mf(a, b, c) {
        if (0 === a.F && 1 === M(a.i, "opac")) return 0;
        if (oa(b)) return b;
        b = Re(b, c);
        var d = 1 == M(a.i, "od");
        if (0 >= Te(Jf(a)) || We(b, c, a.a.b, d)) return 0;
        d = Te(b) / Te(Jf(a));
        c = Se(b, c);
        return a.zb() ? Math.max(d, c) : d
    }
    l.ma = function() {
        return !1
    };
    l.zb = function() {
        return this.tb || this.Aa
    };
    l.Ua = function(a, b, c) {
        if (c) this.V = c;
        else {
            a = b ? a : a.top;
            this.V = uc(If);
            try {
                this.a.b && (this.V = Qe(this.a.b, a))
            } catch (d) {}
        }
    };

    function Nf(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Of(a) {
        a.a.b && (a.l.ua = T(a.a.b, "mouseover", function() {
            var b = S();
            a.C = b
        }, 149), a.l.ta = T(a.a.b, "mouseout", function() {
            var b = S(); - 1 == a.C || b < a.C || (a.za += b - a.C);
            a.C = -1
        }, 150))
    }

    function Pf(a, b) {
        P.g();
        if (b = void 0 === b ? pa : b) a.Cb = b
    };

    function Qf(a) {
        return $a() ? (a = (a = Tb(a)) && Wb(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var Rf = "StopIteration" in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Sf() {}
    Sf.prototype.next = function() {
        throw Rf;
    };
    Sf.prototype.Wa = function() {
        return this
    };

    function Tf(a) {
        if (a instanceof Sf) return a;
        if ("function" == typeof a.Wa) return a.Wa(!1);
        if (sa(a)) {
            var b = 0,
                c = new Sf;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Rf;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function Uf(a, b) {
        if (sa(a)) try {
            w(a, b, void 0)
        } catch (c) {
            if (c !== Rf) throw c;
        } else {
            a = Tf(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Rf) throw c;
            }
        }
    }

    function Vf(a, b) {
        var c = 1;
        Uf(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function Wf(a, b) {
        var c = Tf(a);
        a = new Sf;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw Rf;
        };
        return a
    }

    function Xf(a) {
        var b = Tf(a);
        a = new Sf;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw Rf;
        };
        return a
    };

    function Yf(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(Yf, Sf);
    Yf.prototype.next = function() {
        if (this.b) throw Rf;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (gb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Qf : d;
                if (d(a)) try {
                    var e = Tb(a),
                        f = e && Wb(e),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.a = b;
        return a
    };

    function Zf(a) {
        var b = 1;
        a = Xf(new Yf(a, !0));
        a = Wf(a, function() {
            return 0 < b
        });
        return Vf(a, function(c, d) {
            var e = 1;
            if (gb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = Tb(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[cb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = wc.opacity;
                        if (!h) {
                            var k = cb();
                            h = k;
                            void 0 === d.style[k] && (k = (mb ? "Webkit" : lb ? "Moz" : C ? "ms" : jb ? "O" : null) + eb(k), void 0 !== d.style[k] && (h = k));
                            wc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                oa(f) && !isNaN(f) && (e = f)
            }
            return b = c * e
        })
    };

    function $f(a, b, c, d, e, f, g) {
        f = void 0 === f ? pa : f;
        g = void 0 === g ? [] : g;
        V.call(this, c, d, e);
        this.o = b;
        this.da = this.j = 0;
        this.R = null;
        this.ib = this.Ca = "";
        this.L = [];
        this.P = [];
        this.ca = this.hb = "";
        this.sb = !1;
        this.T = 4;
        this.ub = [];
        this.nb = "";
        this.ab = !1;
        this.wb = -1;
        this.eb = "";
        this.bb = -1;
        this.s = 0;
        this.Z = -1;
        this.S = 0;
        this.J = this.mb = Ce();
        this.h = 0;
        this.Sb = f;
        this.vb = !1;
        this.D = this.Da = this.Ga = this.Y = this.m = -1;
        this.w = {};
        this.Rb = g;
        ag(this, this.a.a);
        this.o && na(this.o) && (b = this.o.match(/fa=([^&;]+)/)) && 2 == b.length && b[1] == (30).toString() && (this.Aa = !0);
        bd(P.g().a, this.o);
        b = U.g();
        this.Ua(a, b.b)
    }
    t($f, V);

    function bg(a, b, c) {
        return (a = String(a[b] || ed(a, c) || "")) ? a.split("|") : []
    }

    function ag(a, b) {
        if (b) {
            if (0 == a.j)
                if (a.a.a) {
                    var c = a.a.a._adk_;
                    c || (c = (c = ed(a.a.a, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.j;
            a.j = c;
            "" == a.Ca && (a.Ca = String(b._avi_ || ""));
            "" == a.ib && (a.ib = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.L.length || (a.L = bg(b, "_avicxn_", "googleAvCxn"));
            a.P.length || (a.P = bg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.hb && (a.hb = String(b._aviextcxn_ || ed(b, "googleAvExtCxn") || ""));
            "" == a.ca && (a.ca = String(b._cid_ || ""));
            a.sb || (a.sb = !!b._imm_ || fd(b, "googleAvImmediate"));
            "" == a.nb && (a.nb = String(b._cvu_ || ed(b, "googleAvCpmav") || ""));
            a.ra(String(b._avm_ || ed(b, "googleAvMetadata") || ""))
        }
    }

    function cg(a, b, c) {
        w(a.Rb, function(d) {
            return d.a(a, c, b)
        })
    }
    l = $f.prototype;
    l.ka = function() {
        return this.u && !(1 == this.h || 3 == this.h)
    };

    function dg(a, b) {
        a.h == b || 2 == a.h || 1 == a.h && 3 == b || (a.h = b, 1 != a.h && 3 != a.h || a.Ra())
    }

    function eg(a) {
        a.ob && oc(a.a.a, "DOMNodeRemoved", a.ob);
        a.ea && a.ea.disconnect()
    }

    function fg(a) {
        a.a.a && (eg(a), a.Z = -1, u.MutationObserver ? (a.ea = new u.MutationObserver(function(b, c) {
            for (var d = 0; d < b.length; d++)
                if ("childList" == b[d].type && b[d].removedNodes.length) {
                    a.Z = S();
                    c.disconnect();
                    break
                }
        }), a.ea.observe(a.a.a, {
            childList: !0,
            subtree: !0
        })) : a.ob = re(a.a.a, function() {
            a.Z = S()
        }))
    }
    l.Qa = function() {
        V.prototype.Qa.call(this);
        this.B = new H(0, 0, 0, 0)
    };
    l.Ra = function() {
        V.prototype.Ra.call(this);
        this.B = new H(0, 0, 0, 0)
    };
    l.Ka = function() {
        this.u || (this.Ga = Rd(), this.wb = S(), gg(this, !1, this.U));
        V.prototype.Ka.call(this);
        hg(this)
    };

    function hg(a) {
        if (a.u && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.D = Math.max(b, a.D));
            cg(a, 4, {})
        }
    }
    l.ra = function(a) {
        if (na(a) && 0 != a.length) {
            var b = new Xc,
                c = P.g();
            L(b, "omid", J);
            $c(b, a);
            b = M(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = $c(this.i, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.X = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.S = 2 : "1" == d && (this.S = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.tb = !0) : 0 == d.lastIndexOf("alp=", 0) ? this.eb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) ? (d = parseInt(d.split("=")[1], 10), isNaN(d) || (this.bb = d)) : "adf=1" == d && (this.vb = !0)
            }
            this.f.b = this.ma();
            V.prototype.ra.call(this, a)
        }
    };
    l.xa = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Hf(this.c),
            h = Math.floor(100 * this.f.a);
        this.S = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        V.prototype.xa.call(this, a, b, c, d, e, f); - 1 == this.J && -1 != this.f.c ? this.J = this.f.c : 0 == this.J && 1 == this.f.c && (this.J = 1);
        oa(b) || (0 < this.f.a ? (b = Re(a, b), this.B = 0 >= Te(Jf(this)) || b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : vc(b, -a.left, -a.top)) : this.B = new H(0, 0, 0, 0));
        a = Hf(this.c);
        b = Math.floor(100 * this.f.a);
        (!g && a || b != h) && gg(this, a, b);
        try {
            this.F = Zf(this.a.b)
        } catch (k) {}
        hg(this)
    };
    l.ma = function() {
        return nb ? !1 : 1 == this.S
    };
    l.Ua = function(a, b, c) {
        if (!b && (-1 != this.wb || -1 != this.Z) && 2 != this.s && 1 != this.s && -1 != this.s && 7 != this.s) {
            var d = null;
            try {
                d = this.a.b && this.a.b.getBoundingClientRect()
            } catch (f) {}
            if (!d || 0 == d.width || 0 == d.height)
                if (d = Ae(a.top, this.eb, this.bb), this.s = d.status, d.a)
                    if (d.a == this.a.b) this.s = 2;
                    else if (d = d.a, eg(this), this.a.b && (this.l.ua && (oc(this.a.b, "mouseover", this.l.ua), this.l.ua = null), this.l.ta && (oc(this.a.b, "mouseout", this.l.ta), this.l.ta = null)), this.a.b = d, Of(this), ag(this, d), fg(this), this.b) {
                var e = this.b;
                e.na();
                e.c = d;
                e.La();
                e.fa()
            }
        }
        V.prototype.Ua.call(this, a, b, c)
    };

    function ig(a, b, c) {
        var d = [],
            e = [];
        d = void 0 === d ? [] : d;
        e = void 0 === e ? [] : e;
        a.L.length || (a.Ca = b, d && (a.L = d), a.ca = void 0 === c ? "" : c);
        !a.P.length && e && (a.P = e)
    }

    function jg(a) {
        var b = a.m;
        var c = a.m;
        c = -1 == c || a.Y < c ? -1 : a.Y - c;
        var d = -1 == a.m || a.Ga < a.m ? -1 : a.Ga - a.m,
            e = kg(a),
            f = {};
        return f.rst = 0 < b ? b : void 0, f.dlt = 0 <= c ? c : void 0, f.rpt = 0 <= d ? d : void 0, f.isd = 0 <= a.Da ? a.Da : void 0, f.msd = 0 <= a.D ? a.D : void 0, f.ext = e ? e : void 0, f
    }

    function kg(a) {
        return a.w && 0 < ic(a.w).length ? encodeURIComponent(Ca(ic(a.w), function(b) {
            return b + "=" + a.w[b]
        }).join("&")) : null
    }

    function lg(a, b) {
        b && hc(b, function(c, d) {
            null == c ? delete a.w[d] : a.w[d] = c
        })
    }

    function gg(a, b, c) {
        if (b = a.Sb(b, c)) lg(a, b), cg(a, 3, {})
    }
    l.qb = function() {
        return !1
    };

    function mg() {}

    function ng(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (ra(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), ng(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), og(d, c), c.push(":"), ng(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    og(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var pg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        qg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function og(a, b) {
        b.push('"', a.replace(qg, function(c) {
            var d = pg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), pg[c] = d);
            return d
        }), '"')
    };

    function rg() {
        this.key = "goog_adspeed";
        this.c = [3, 4];
        this.b = null
    }
    rg.prototype.a = function(a, b, c) {
        if (!x(this.c, c) || !pd(new od(a.j, a.R))) return !1;
        c = {};
        c[0] = this.key;
        var d = jg(a),
            e = [];
        ng(new mg, d, e);
        c = (c[40] = e.join(""), c);
        if (d = this.b) a: {
            d = this.b;
            for (var f in d)
                if (!(f in c) || d[f] !== c[f]) {
                    d = !1;
                    break a
                }
            for (var g in c)
                if (!(g in d)) {
                    d = !1;
                    break a
                }
            d = !0
        }
        if (d) return !1;
        this.b = c;
        f = {};
        y(f, c, b);
        return sg(a, {
            Va: {},
            Ja: f
        })
    };

    function tg() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    tg.prototype.a = function(a, b, c) {
        if (c != this.b || !pd(new od(a.j, a.R))) return !1;
        c = 1 == a.T;
        var d = Hf(a.c),
            e = {},
            f = {};
        b = {
            Ja: (e[0] = this.key, e),
            Va: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.c ? (this.c = d, sg(a, b)) : !1;
        this.c = d;
        return sg(a, b)
    };

    function ug(a) {
        tg.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(ug, tg);

    function vg(a) {
        tg.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(vg, tg);
    vg.prototype.a = function(a, b, c) {
        var d = !a.ab;
        if (Hf(a.c) && a.X || d) {
            if (b = tg.prototype.a.call(this, a, b, c))
                if (Hf(a.c) || (a.ab = !0), Hf(a.c) || a.X) a.X = !1;
            return b
        }
        return !1
    };

    function wg() {
        this.b = [];
        this.a = []
    }

    function xg() {
        var a = W;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : Ha(a.a, a.b)
    }
    wg.prototype.reset = function() {
        this.b = [];
        this.a = []
    };
    v(wg);
    var W = wg.g();

    function yg() {
        this.a = this.b = null
    }

    function zg(a, b) {
        function c(d, e) {
            a.a = null;
            b(d, e)
        }
        if (null == a.b) return !1;
        a.a = Fa(a.b, function(d) {
            return null != d && d.ba() && d.sa(c)
        });
        a.a && ff(a.a.a);
        return null != a.a
    }
    v(yg);

    function Ag(a, b, c, d) {
        kf.call(this, a, b, c, d)
    }
    t(Ag, kf);
    Ag.prototype.kb = function(a) {
        return We(a, this.l, this.c, 1 == M(this.u, "od"))
    };
    Ag.prototype.fa = function() {
        var a = this.a.f;
        this.timestamp = -1 === a.time ? S() : a.time;
        this.Ea();
        this.Za();
        a = Re(this.b, this.l);
        var b = a.top >= a.bottom || a.left >= a.right ? new H(0, 0, 0, 0) : a;
        a = this.a.f;
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.b.bottom - this.b.top) * (this.b.right - this.b.left) && (this.kb(b) ? b = new H(0, 0, 0, 0) : (c = U.g().m, e = new H(0, c.height, c.width, 0), c = Se(b, this.b), d = Se(b, U.g().a), e = Se(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : vc(b, -this.b.left, -this.b.top);
        this.h = new Ye(a, this.b, b, c, d, this.timestamp, e)
    };
    Ag.prototype.G = function() {
        return this.a.G()
    };

    function Bg(a) {
        a = Cg(a);
        this.a = a.length ? a[a.length - 1] : new bf(E, 0);
        this.c = a;
        this.f = pa;
        this.b = null
    }
    t(Bg, lf);
    l = Bg.prototype;
    l.G = function() {
        return (this.b ? this.b : this.a).G()
    };
    l.K = function() {
        return (this.b ? this.b : this.a).K()
    };
    l.N = function() {
        return (this.b ? this.b : this.a).N()
    };
    l.sa = function(a) {
        this.f = a;
        w(this.c, function(b) {
            return b.Ha()
        });
        ef(this.a, this);
        return !0
    };
    l.ba = function() {
        return Ea(this.c, function(a) {
            return a.ba()
        })
    };
    l.H = function() {
        return Ea(this.c, function(a) {
            return a.H()
        })
    };
    l.Fa = function(a, b, c) {
        return new Ag(a, this.a, b, c)
    };
    l.ja = function(a) {
        0 == a.N() && this.f(a.ia(), this)
    };
    l.ha = function(a) {
        this.b = a.b
    };
    l.aa = function() {
        return !1
    };

    function Cg(a) {
        if (!a.length) return [];
        a = Ba(a, function(c) {
            return null != c && c.ba()
        });
        for (var b = 1; b < a.length; b++) ef(a[b - 1], a[b]);
        return a
    };

    function Dg(a, b, c, d) {
        kf.call(this, a, b, c, d);
        this.o = this.m = null
    }
    t(Dg, Ag);
    l = Dg.prototype;
    l.La = function() {
        var a = this;
        this.o || (this.o = S());
        if (he(298, function() {
                return a.s()
            })) return !0;
        cf(this.a, "msf");
        return !1
    };

    function Eg(a, b) {
        try {
            if (b.length) {
                a.m || (a.m = S());
                var c = Fg(b),
                    d = yc(a.c, a.a.a.c),
                    e = d.a,
                    f = d.b;
                a.b = new H(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = Be(c.intersectionRect);
                a.l = vc(g, a.b.left - g.left, a.b.top - g.top)
            }
        } catch (h) {
            a.na(), ie(299, h)
        }
    }

    function Fg(a) {
        return Da(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    l.Ea = function() {};
    l.kb = function() {
        return !1
    };
    l.Za = function() {};
    l.K = function() {
        var a = {};
        return Object.assign(this.a.K(), (a.niot_obs = this.o, a.niot_cbk = this.m, a))
    };
    var Gg = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Hg(a, b, c, d) {
        Dg.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    t(Hg, Dg);
    Hg.prototype.G = function() {
        return "nio"
    };
    Hg.prototype.na = function() {
        if (this.f && this.c) try {
            this.f.unobserve(this.c), this.j ? (this.j.unobserve(this.c), this.j = null) : this.i && (this.i.disconnect(), this.i = null)
        } catch (a) {}
    };

    function Ig(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    Hg.prototype.s = function() {
        var a = this;
        if (!this.c) return !1;
        var b = this.c,
            c = this.a.a.c,
            d = Md().a;
        this.f = new c.IntersectionObserver(Kd(d, function(e) {
            return Eg(a, e)
        }), Gg);
        d = Kd(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            Eg(a, Ig(a))
        });
        c.ResizeObserver ? (this.j = new c.ResizeObserver(d), this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d), this.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        this.f.observe(b);
        Eg(this, Ig(this));
        return !0
    };
    Hg.prototype.fa = function() {
        var a = Ig(this);
        0 < a.length && Eg(this, a);
        Dg.prototype.fa.call(this)
    };

    function Jg(a) {
        a = void 0 === a ? E : a;
        this.a = new bf(a, 2)
    }
    t(Jg, lf);
    Jg.prototype.G = function() {
        return "nio"
    };
    Jg.prototype.H = function() {
        return "exc" !== (P.g(), "ns") && !U.g().h && null != this.a.a.c.IntersectionObserver
    };
    Jg.prototype.Fa = function(a, b, c) {
        return new Hg(a, this.a, b, c)
    };

    function Kg() {}
    v(Kg);

    function Lg(a, b, c) {
        this.f = null != c ? va(a, c) : a;
        this.c = b;
        this.b = va(this.Pb, this);
        this.a = []
    }
    ya(Lg, wf);
    l = Lg.prototype;
    l.va = !1;
    l.ga = null;
    l.cb = function(a) {
        this.a = arguments;
        this.ga ? this.va = !0 : Mg(this)
    };
    l.stop = function() {
        this.ga && (u.clearTimeout(this.ga), this.ga = null, this.va = !1, this.a = [])
    };
    l.Pb = function() {
        this.ga = null;
        this.va && (this.va = !1, Mg(this))
    };

    function Mg(a) {
        var b = a.b;
        var c = a.c;
        if ("function" != qa(b))
            if (b && "function" == typeof b.handleEvent) b = va(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : u.setTimeout(b, c || 0);
        a.ga = b;
        a.f.apply(null, a.a)
    };

    function Ng() {
        this.done = !1;
        this.a = {
            Hb: 0,
            Gb: 0,
            Sa: 0,
            $a: 0,
            qa: -1,
            Mb: 0,
            Lb: 0,
            Nb: 0
        };
        this.s = this.h = this.l = this.i = this.m = null;
        this.u = !1;
        this.o = "";
        this.b = null;
        this.w = 0;
        this.f = new $e(this)
    }

    function Og() {
        var a = (P.g(), "ns");
        return "nio" === a || "aio" === a || "omid" === a
    }

    function Pg(a) {
        var b = X;
        if (!b.u) {
            b.u = !0;
            if (!b.m && !Og()) {
                var c = R(137, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    return b.j.apply(b, q(f))
                });
                b.i = new Lg(c, 100);
                b.m = T(a, "scroll", function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    null !== b.i && b.i.cb.apply(b.i, q(f))
                }, 138)
            }
            b.l || Og() || (c = R(140, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.j.apply(b, q(f))
            }), b.h = new Lg(c, 100), b.l = T(a, "resize", function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                null !== b.h && b.h.cb.apply(b.h, q(f))
            }, 141));
            a = xg();
            for (var d = 0; d < a.length; ++d) c = a[d], c.a.b && Of(c);
            Qg(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.c.apply(b, q(f))
            });
            b.c()
        }
    }
    Ng.prototype.j = function() {
        Rg(this, xg(), !1)
    };
    Ng.prototype.xb = function() {
        Rg(this, xg(), !1)
    };

    function Sg() {
        Kg.g();
        var a = yg.g();
        null != a.a && a.a.a ? ff(a.a.a) : Le(U.g())
    }

    function Rg(a, b, c) {
        if (!a.done && (a.f.cancel(), 0 != b.length)) {
            a.b = null;
            try {
                Sg();
                var d = S();
                P.g().j = d;
                if (null != yg.g().a)
                    for (var e = 0; e < b.length; e++) Lf(b[e], d, c);
                for (e = 0; e < b.length; e++);
                a.a.Sa += S() - d;
                ++a.a.$a;
                Tg(a)
            } finally {
                c ? w(b, function(f) {
                    return f.Qa()
                }) : af(a.f)
            }
        }
    }

    function Qg(a, b) {
        if (!a.s) {
            b = de(142, b);
            O();
            var c;
            D.visibilityState ? c = "visibilitychange" : D.mozVisibilityState ? c = "mozvisibilitychange" : D.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && nc(D, c, b, {
                capture: !1
            }) && (a.s = b)
        }
    }
    Ng.prototype.c = function() {
        var a = Oe(),
            b = S();
        a ? (le || (ke = b, w(W.b, function(c) {
            return c.c.i(b, !c.h())
        })), le = !0) : (this.w = Ug(this, b), le = !1, w(W.b, function(c) {
            c.ka() && c.c.h(b)
        }));
        Rg(this, xg(), !a)
    };

    function Vg(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = -1,
                e = S(); - 1 == a.a.qa && (d = e);
            var f = U.g(),
                g = P.g(),
                h = Zc(g.a),
                k = xg();
            try {
                if (0 < k.length) {
                    var m = f.a;
                    m && (h.bs = [m.O(), m.M()]);
                    var p = f.f;
                    p && (h.ps = [p.width, p.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = -1;
                h.bin = g.b;
                switch (P.g(), "ns") {
                    case "iem":
                        h.iem = 1;
                        break;
                    case "aio":
                        h.aio = 1;
                        break;
                    case "nio":
                        h.nio = 1
                }
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.a.Hb, a.a.Gb, a.a.Sa, a.a.$a, a.a.qa, we, a.f.b, a.a.Mb, a.a.Lb, a.a.Nb].join("-");
                h.tvt = Ug(a, e);
                f.h && (h.inapp = 1);
                if (Dc(b)) {
                    0 < k.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var n = f.c;
                    h.is = [n.O(), n.M()]
                }
            } catch (I) {
                h.error = 1
            }
            a.b = h
        }
        a = Ta(a.b);
        b = Md();
        var r;
        if (1 == M(b.c, "prf")) {
            m = new Id;
            p = b.a;
            n = 0; - 1 < p.a && (n = p.f.a.a() - p.a);
            m = Mb(m, 1, p.c + n);
            p = b.a;
            m = Mb(m, 5, -1 < p.a ? p.b + 1 : p.b);
            m = Mb(m, 2, b.b.a.f());
            m = Mb(m, 3, b.b.a.c());
            m = Mb(m, 4, b.b.a.b());
            b = {};
            p = new Eb;
            n = Kb(m, 1);
            n = null == n ? n : +n;
            n = null == n ? 0 : n;
            if (0 !== n && (c = n, null != c)) {
                Cb(p.a, 9);
                n = p.a;
                e = c;
                e = (c = 0 > e ? 1 : 0) ? -e : e;
                if (0 === e) zb = 0 < 1 / e ? 0 : 2147483648, yb = 0;
                else if (isNaN(e)) zb = 2147483647, yb = 4294967295;
                else if (1.7976931348623157E308 < e) zb = (c << 31 | 2146435072) >>> 0, yb = 0;
                else if (2.2250738585072014E-308 > e) e /= Math.pow(2, -1074), zb = (c << 31 | e / 4294967296) >>> 0, yb = e >>> 0;
                else {
                    f = e;
                    d = 0;
                    if (2 <= f)
                        for (; 2 <= f && 1023 > d;) d++, f /= 2;
                    else
                        for (; 1 > f && -1022 < d;) f *= 2, d--;
                    e *= Math.pow(2, -d);
                    zb = (c << 31 | d + 1023 << 20 | 1048576 * e & 1048575) >>> 0;
                    yb = 4503599627370496 * e >>> 0
                }
                Db(n, yb);
                Db(n, zb)
            }
            n = Lb(m, 2);
            0 !== n && null != n && Fb(p, 2, n);
            n = Lb(m, 3);
            0 !== n && null != n && Fb(p, 3, n);
            n = Lb(m, 4);
            0 !== n && null != n && Fb(p, 4, n);
            n = Lb(m, 5);
            if (0 !== n && null != n && null != n)
                if (Cb(p.a, 40), m = p.a, 0 <= n) Cb(m, n);
                else {
                    for (c = 0; 9 > c; c++) m.a.push(n & 127 | 128), n >>= 7;
                    m.a.push(1)
                }
            m = new Uint8Array(p.c + p.a.length());
            c = p.b;
            d = c.length;
            for (e = n = 0; e < d; e++) f = c[e], m.set(f, n), n += f.length;
            c = Bb(p.a);
            m.set(c, n);
            p.b = [m];
            void 0 === r && (r = 0);
            if (!xb)
                for (xb = {}, p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), n = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                    for (d = p.concat(n[c].split("")), wb[c] = d, e = 0; e < d.length; e++) f = d[e], void 0 === xb[f] && (xb[f] = e);
            r = wb[r];
            p = [];
            for (n = 0; n < m.length; n += 3) g = m[n], h = (c = n + 1 < m.length) ? m[n + 1] : 0, f = (d = n + 2 < m.length) ? m[n + 2] : 0, e = g >> 2, g = (g & 3) << 4 | h >> 4, h = (h & 15) << 2 | f >> 6, f &= 63, d || (f = 64, c || (h = 64)), p.push(r[e], r[g], r[h] || "", r[f] || "");
            r = (b.pf = p.join(""), b)
        } else r = {};
        y(a, r);
        return a
    }

    function Wg() {
        w(xg(), function(a) {
            a.a.a && Kg.g()
        })
    }

    function Tg(a) {
        "osd" == a.o && w(W.a, function(b) {
            var c = {};
            cg(b, 0, (c.r = void 0, c))
        })
    }

    function Ug(a, b) {
        a = a.w;
        le && (a += b - ke);
        return a
    }

    function Xg(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Yg() {
        var a = X;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        ee.h = "av-js";
        $d.a = .01;
        ge([function(c) {
            var d = P.g(),
                e = {};
            y(c, (e.bin = d.b, e.type = "error", e), Zc(d.a), Vg(a, E), b());
            if (d = tf()) e = {}, y(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function Zg(a) {
        var b = new $g;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return a = 4 === P.g().b, [new tg(b), new vg(b), new ug(b)].concat(q(a ? [] : [new rg]))
        }
    }
    v(Ng);
    var X = Ng.g();

    function $g() {}

    function sg(a, b) {
        b = b || {};
        var c = void 0 === b.Va ? {} : b.Va;
        b = void 0 === b.Ja ? {} : b.Ja;
        var d = b.r,
            e = c[0],
            f = Vg(X, Cc(), !1),
            g = {};
        y(g, f, c);
        c = {};
        var h = g;
        h = void 0 === h ? {} : h;
        g = {};
        var k = U.g();
        f = Zc(a.i);
        var m = k.j,
            p = Jf(a);
        f.p = [p.top + m.b, p.left + m.a, p.bottom + m.b, p.right + m.a];
        m = a.c;
        f.tos = Bf(m.a);
        f.mtos = Df(m.a);
        f.mcvt = m.c.a;
        f.rs = a.W;
        (p = 5 == a.W) || (f.ht = a.za);
        0 <= a.$ && (f.tfs = a.$, f.tls = a.Ab);
        f.mc = Nf(m.b);
        f.lte = Nf(a.U);
        f.bas = a.mb;
        f.bac = a.J;
        k.b && (f["if"] = a.A ? 0 : 1);
        f.met = a.a.c;
        p && a.o && (f.req = encodeURIComponent(a.o).substring(0, 100));
        a.ma() && (f.la = "1");
        a.Aa && (f.pa = "1");
        f.avms = a.b ? a.b.G() : (P.g(), "ns");
        a.b && y(f, a.b.K());
        0 != a.h && (f.md = a.h);
        f.lm = a.T;
        y(f, jg(a));
        h && y(f, h);
        f.adk = a.j;
        a.vb && a.da && (f.adf = a.da);
        h = a.A;
        k = P.g();
        !d && h && k.h && (d = k.h);
        d && (f.r = d);
        0 === a.F && (f.invis = 1);
        d = sf(f).join("&");
        g[3] = d;
        g[11] = h;
        g[29] = P.g().b;
        g[0] = e;
        g[7] = a.f.a;
        g[9] = De(a.B);
        g[28] = a.W;
        g[32] = a.b ? a.b.G() : (P.g(), "ns");
        g[5] = Hf(a.c) && 4 != a.T;
        g[13] = Df(a.c.a).join(",");
        g[18] = 0 == Te(Jf(a));
        null != a.I && (g[20] = a.I.b, g[21] = a.I.a);
        e = U.g();
        null != e.c && (g[22] = e.c.O(), g[23] = e.c.M());
        null != e.a && (g[30] = e.a.O(), g[31] = e.a.M(), g[38] = De(e.a));
        d = e.j;
        f = Jf(a);
        g[37] = De(new H(f.top + d.b, f.right + d.a, f.bottom + d.b, f.left + d.a));
        e.f && (e = e.f, g[39] = e.width + "-" + e.height); - 1 != a.F && (g[25] = a.F);
        te(new od(a.j, a.R), g);
        y(c, g, b);
        b = a.a.a;
        a = a.ub;
        try {
            var n = ue(c);
            Fe(b, n, a)
        } catch (r) {}
        return !0
    };

    function ah(a, b, c, d) {
        Dg.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(ah, Dg);
    ah.prototype.G = function() {
        return "aio"
    };
    ah.prototype.na = function() {
        if (this.f) try {
            this.f()
        } catch (a) {}
    };
    ah.prototype.s = function() {
        var a = this;
        if (!this.c) return !1;
        this.f = zc(this.a.a.c).observeIntersection(Kd(Md().a, function(b) {
            return Eg(a, b)
        }));
        return !0
    };

    function bh(a) {
        a = void 0 === a ? E : a;
        this.a = new bf(a, 2)
    }
    t(bh, lf);
    bh.prototype.G = function() {
        return "aio"
    };
    bh.prototype.ba = function() {
        return U.g().b && this.H()
    };
    bh.prototype.H = function() {
        var a;
        if (a = !U.g().h) a = zc(this.a.a.c), a = !(!a || !a.observeIntersection);
        return a
    };
    bh.prototype.Fa = function(a, b, c) {
        return new ah(a, this.a, b, c)
    };

    function ch() {
        bf.call(this, E, 2, "iem")
    }
    t(ch, bf);
    l = ch.prototype;
    l.gb = function() {
        function a(r, I) {
            return !!b.c.document.elementFromPoint(r, I)
        }
        var b = this,
            c = new H(0, this.c.innerWidth || this.c.width, this.c.innerHeight || this.c.height, 0),
            d = Vb(document),
            e = Math.floor(c.left - d.a),
            f = Math.floor(c.top - d.b),
            g = Math.floor(c.right - d.a),
            h = Math.floor(c.bottom - d.b);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new H(f, g, h, e);
        var k = a(g, f),
            m = a(e, h);
        if (c) h = Y(f, h, function(r) {
            return a(e, r)
        }), g = Y(e, g, function(r) {
            return a(r, f)
        });
        else if (k) h = Y(f, h, function(r) {
            return a(g, r)
        }), e = Y(g, e, function(r) {
            return a(r, f)
        });
        else if (m) f = Y(h, f, function(r) {
            return a(e, r)
        }), g = Y(e, g, function(r) {
            return a(r, h)
        });
        else if (d) f = Y(h, f, function(r) {
            return a(g, r)
        }), e = Y(g, e, function(r) {
            return a(r, h)
        });
        else {
            var p = Math.floor((e + g) / 2),
                n = Math.floor((f + h) / 2);
            if (!a(p, n)) return new H(0, 0, 0, 0);
            f = Y(n, f, function(r) {
                return a(p, r)
            });
            h = Y(n, h, function(r) {
                return a(p, r)
            });
            e = Y(p, e, function(r) {
                return a(r, n)
            });
            g = Y(p, g, function(r) {
                return a(r, n)
            })
        }
        return new H(f, g, h, e)
    };

    function Y(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    l.H = function() {
        return U.g().b && C && ub(8) && ne(this.c)
    };
    l.Ma = function() {};
    l.Oa = function() {};
    l.Na = function() {};
    l.rb = function() {};
    v(ch);

    function Z() {
        bf.call(this, E, 1, "osd");
        this.b = null;
        this.A = [];
        this.F = this.w = this.m = this.o = 0;
        this.B = !0
    }
    t(Z, bf);
    l = Z.prototype;
    l.fb = function() {
        var a = {};
        return a.exg = 1, a
    };
    l.Ib = function(a) {
        x(this.A, a) || this.A.push(a)
    };

    function dh(a) {
        var b = 0;
        a = a.c;
        try {
            if (a && a.Goog_AdSense_getAdAdapterInstance) return a
        } catch (c) {}
        for (; a && 5 > b;) {
            try {
                if (a.google_osd_static_frame) return a.google_osd_static_frame
            } catch (c) {}
            try {
                if (a.aswift_0 && a.aswift_0.google_osd_static_frame) return a.aswift_0.google_osd_static_frame
            } catch (c) {}
            b++;
            a = a != a.parent ? a.parent : null
        }
        return null
    }

    function eh(a, b) {
        var c = {};
        te(P.g().c, c);
        c[0] = "goog_request_monitoring";
        c[6] = 4;
        c[16] = !1;
        c[19] = P.g().f;
        a.b && fh(a.b, c);
        try {
            var d = ue(c);
            b.postMessage(d, "*")
        } catch (e) {}
    }

    function gh(a) {
        ++a.w;
        if (2 == a.o) hh(a);
        else {
            if (10 < a.w) {
                if (20 < a.w) {
                    cf(a, "no");
                    return
                }
                11 == a.w && (O().clearInterval(a.m), a.m = O().setInterval(R(197, function() {
                    return gh(a)
                }), 500))
            }
            if (a.c.postMessage)
                if (pd(P.g().c)) {
                    var b = dh(a);
                    b && eh(a, b)
                } else cf(a, "ib");
            else cf(a, "c")
        }
    }
    l.Ha = function() {
        var a = this;
        if (!this.s)
            if (this.s = !0, pd(P.g().c)) {
                T(u, "message", function(c) {
                    if (null != c && c.data && na(c.data)) {
                        var d = c.data;
                        if (na(d)) {
                            var e = {};
                            d = d.split("\n");
                            for (var f = 0; f != d.length; ++f) {
                                var g = d[f],
                                    h = g.indexOf("=");
                                if (!(0 >= h)) {
                                    var k = Number(g.substr(0, h));
                                    g = g.substr(h + 1);
                                    switch (k) {
                                        case 36:
                                        case 26:
                                        case 15:
                                        case 8:
                                        case 11:
                                        case 16:
                                        case 5:
                                        case 18:
                                            g = "true" == g;
                                            break;
                                        case 4:
                                        case 33:
                                        case 6:
                                        case 25:
                                        case 28:
                                        case 29:
                                        case 24:
                                        case 31:
                                        case 30:
                                        case 23:
                                        case 22:
                                        case 7:
                                        case 21:
                                        case 20:
                                            g = Number(g);
                                            break;
                                        case 19:
                                        case 3:
                                            if ("function" == qa(decodeURIComponent)) try {
                                                g = decodeURIComponent(g)
                                            } catch (p) {
                                                throw Error("Error: URI malformed: " + g);
                                            }
                                    }
                                    e[k] = g
                                }
                            }
                            e = e[0] ? e : null
                        } else e = null;
                        if (d = e) d = new od(e[4], e[12]), f = P.g().c, d = f.a || d.a ? f.a == d.a : f.b || d.b ? f.b == d.b : !1;
                        if (d && (d = e[29], f = e[0], x(["goog_acknowledge_monitoring", "goog_get_mode", "goog_update_data", "goog_image_request", "goog_adspeed"], f))) {
                            ih(a, e);
                            if ("goog_get_mode" == f && c.source) {
                                k = {};
                                te(P.g().c, k);
                                k[0] = "goog_provide_mode";
                                k[6] = 4;
                                k[16] = !1;
                                k[19] = P.g().f;
                                a.b && fh(a.b, k);
                                try {
                                    var m = ue(k);
                                    c.source.postMessage(m, c.origin);
                                    jh(a, m)
                                } catch (p) {
                                    ie(406, p)
                                }
                            }
                            if ("goog_get_mode" == f || "goog_acknowledge_monitoring" == f) a.b && (a.b.$ = e[28]), a.o = 2, hh(a);
                            if (c = e[32]) a.D = c;
                            if (a.b || a.h.length) {
                                if (4 != d) {
                                    k = e[0];
                                    m = !1;
                                    f = U.g();
                                    c = a.f.a;
                                    "goog_acknowledge_monitoring" == k && ((void 0 !== e[36] ? e[36] : !e[8]) ? jf(a, 2) : jf(a, 0), df(a));
                                    e[37] && (k = Ee(e[37])) && (m = !0, f.j = new F(k.left, k.top));
                                    if (e[38]) {
                                        if (k = Ee(e[38])) m = !0, f.a = k
                                    } else isNaN(e[30]) || isNaN(e[31]) || (f.a || (f.a = new H(0, 0, 0, 0)), m = !0, f.a.right = f.a.left + e[30], f.a.bottom = f.a.top + e[31]);
                                    e[9] && (m = !0, k = Ee(e[9])) && (c = k, f.l = k);
                                    e[39] && ((k = e[39]) ? (k = k.split("-"), k = 2 == k.length ? new G(bb(k[0]), bb(k[1])) : null) : k = null, k && (f.f = k));
                                    m && (m = S(), f = Oe(), m = new Xe(m, f, a), m.a = c, a.ha(m))
                                }
                                c = He(e[3]).r;
                                d = 4 == d;
                                if (1 == M(P.g().a, "cm")) {
                                    if (d ? kh(a, e, c) : "ac" == c && a.b && lh(a.b, "ac", void 0, void 0), d = e[40]) d = JSON.parse(decodeURIComponent(d)), mh(d.ext), nh({
                                        Ya: d.rst,
                                        Xa: d.dlt,
                                        cc: d.rpt,
                                        jb: d.isd,
                                        pb: d.msd
                                    })
                                } else d || kh(a, e, c);
                                e[11] && (e = He(e[3]).r || "msf", cf(a, e))
                            }
                        }
                    }
                }, 118);
                var b = R(197, function() {
                    gh(a)
                });
                this.o = 1;
                b();
                this.m = O().setInterval(b, 100)
            } else cf(this, "ib")
    };
    l.wa = function() {
        var a = {};
        te(P.g().c, a);
        a[0] = "goog_stop_monitoring";
        jh(this, ue(a));
        hh(this)
    };

    function hh(a) {
        O().clearInterval(a.m);
        a.m = 0
    }

    function jh(a, b) {
        var c = dh(a),
            d = !c;
        d && (c = a.c.parent);
        if (c && c.postMessage) try {
            c.postMessage(b, "*"), d && a.c.postMessage(b, "*"), a.F++
        } catch (e) {}
    }

    function ih(a, b) {
        w(a.A, function(c) {
            c(b)
        })
    }

    function kh(a, b, c) {
        var d = b[0],
            e = 100 * b[25];
        oa(e) && !isNaN(e) && a.b && (window.document["4CGeArbVQ"] = e | 0);
        void 0 != b[18] && a.b && (a.b.Y = b[18]);
        if (void 0 != b[7] && 0 < b[7] && a.b && (e = a.b, e.T)) {
            var f = "//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt=" + b[7];
            e.J && (f += "&avi=" + e.J);
            vf(f);
            e.T = !1
        }
        var g = !!b[5];
        e = !!b[11];
        f = !1;
        if ("goog_update_data" == d || "goog_image_request" == d)
            if ("goog_update_data" == d && (f = !!b[15]), a.b) {
                var h = a.b;
                h.i = He(b[3]);
                ++h.U
            }
        b = !e && "goog_update_data" == d && !b[18];
        switch (d) {
            case "goog_image_request":
                a.b && lh(a.b, c || "u", g, e);
            case "goog_update_data":
                if (b && a.b && (c = a.b, c.B = !0, oh(c) && c.S && (d = c.i, ph(c) && 3 != c.a))) {
                    d.r = "m";
                    for (b = 0; b < c.f.length; ++b) h = qh(c, c.f[b], d, !0), vf(h);
                    c.S = !1
                }
                g && a.b && (g = a.b, oh(g) && (g.C = !0, rh(g, "1"), g.D && ph(g) && 3 != g.a && !g.Y && (qc(g.D), g.D = ""), g.m && !f && (f = Ta(g.i), f.r = "v", sh(g, f, !0), g.R = !0, g.da = +new Date), g.m || 1 != g.c || (g.I = !0)));
                e && a.b && (a = a.b, oh(a) && (a.j = !1, a.S = !1, rh(a, "3"), a.m && (e = Ta(a.i), null !== e && "r" in e || (e.r = "uk"), sh(a, e, !0))))
        }
    }
    l.ba = function() {
        var a = P.g();
        return 4 === a.b ? !!M(a.a, "cm") : this.H()
    };
    l.Ma = function() {};
    l.Oa = function() {};
    l.Na = function() {};
    l.H = function() {
        return U.g().b && !this.u
    };
    v(Z);

    function th() {
        var a = /[&\?#]exk=([^& ]+)/.exec(E.location.href);
        return a && 2 == a.length ? a[1] : null
    };

    function uh() {
        this.w = 0;
        this.J = "";
        this.f = [];
        this.V = "";
        this.Z = this.X = this.R = this.Y = this.B = this.C = this.A = this.j = this.m = this.S = !1;
        this.da = this.ca = 0;
        this.l = new od(null, null);
        var a = {};
        this.i = (a.mtos = "0,0,0,0,0", a.mcvt = "0", a.p = "0,0,0,0", a.tos = "0,0,0,0,0", a);
        this.P = [];
        this.F = null;
        this.I = !1;
        this.D = this.L = "";
        this.b = new gd;
        this.o = !1;
        this.a = 0;
        this.s = this.u = null;
        this.U = this.c = 0;
        this.W = "";
        this.T = !1;
        this.h = null;
        this.ea = this.$ = 0;
        cd(P.g().a);
        Yg()
    }
    l = uh.prototype;
    l.ja = function(a) {
        var b = yg.g().a;
        switch (a.N()) {
            case 0:
                b && (b = b.a, Ga(b.h, this), b.l && this.aa() && gf(b));
                vh(this, a);
                break;
            case 2:
                b && (a = b.a, Ga(a.h, this), a.l && this.aa() && gf(a))
        }
    };
    l.ha = function() {};
    l.aa = function() {
        return !1
    };
    l.Ob = function(a) {
        var b = /^(http[s]?:)?\/\//.test(a) ? a : wh(a);
        if (x(this.f, b)) return !0;
        if (!a || !Dc(E) || this.I || this.X && !this.R) return !1;
        this.Z = !0;
        this.ca = +new Date;
        this.R && (a = Ta(this.i), a.r = "v", a = qh(this, b, a, !0), a = fc(a, "tsvp", +new Date - this.da), vf(a));
        this.f.push(b);
        return !0
    };
    l.yb = function(a, b, c) {
        a = void 0 === c ? 3 : c;
        a = void 0 === a ? 3 : a;
        c = 1 != M(P.g().a, "ud") || 1 == M(P.g().a, "ue");
        this.m && (c || 3 != a) && sh(this, b, !0);
        a = this.C || this.B;
        if (this.A || this.j && a) sh(this, b), this.j = this.A = !1
    };

    function ph(a) {
        return (a = a.F) ? 2 != a() : !0
    }

    function sh(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        a: {
            for (e in b) {
                var e = !1;
                break a
            }
            e = !0
        }
        if (!(e || a.I || 2 != a.c && !c) && ph(a) && 3 != a.a) {
            for (e = 0; e < a.f.length; ++e) {
                var f = qh(a, a.f[e], b, c, d);
                if (M(P.g().a, "sbeos") && !c) {
                    var g = Cc() || E;
                    if (g.navigator && g.navigator.sendBeacon) {
                        var h = uf(f.toString()).split("?");
                        g = g.navigator.sendBeacon(h[0], h[1])
                    } else g = !1;
                    g || vf(f.toString() + "&sberr=1")
                } else vf(f)
            }
            d || (a.X = !0, c ? a.m = !1 : a.I = !0)
        }
    }

    function wh(a, b) {
        var c = [];
        a && c.push("avi=" + a);
        b && c.push("cid=" + b);
        return c.length ? "//pagead2.googlesyndication.com/activeview?" + c.join("&") : "//pagead2.googlesyndication.com/activeview"
    }

    function qh(a, b, c, d, e) {
        var f = void 0 === f ? 4E3 : f;
        d = (void 0 === e ? 0 : e) ? "osdexp" : (void 0 === d ? 0 : d) ? 1 == M(P.g().a, "avxm") ? "osdxm" : "osdim" : a.A ? "osd2" : "osdtos";
        b += -1 < b.indexOf("?") ? "&" : "?";
        e = P.g();
        y(c, Zc(e.a));
        c.id = d;
        c.vs = a.C ? 4 : a.B ? 3 : 2;
        "osd2" == d && a.j && a.C && (c.tsf = 1);
        c.uc = a.U;
        d = Z.g().F;
        c.upc = d;
        c.tgt = a.b.a ? a.b.a ? a.b.a.tagName : "" : "nf";
        c.cl = a.o ? 1 : 0;
        a.Z && (c.lop = 1, c.tslp = +new Date - a.ca);
        if (d = a.b) c.cec = d.h, c.clc = d.i, c.cac = d.f, d = d.a, c.cd = d ? d.clientWidth + "x" + d.clientHeight : "nf", c.itpl = d ? Number(ed(d, "googleAvItpl")) || 0 : -1;
        a.F && (c.crc = Number(a.F()));
        for (d = 0; d < a.P.length; d++) {
            var g = e = void 0,
                h = void 0;
            try {
                var k = ba(a.P[d]());
                e = k.next().value;
                g = k.next().value;
                h = k.next().value
            } catch (m) {}
            c[e] = g.length < f ? g : h || "max_length"
        }
        a = void 0 !== c ? qf(pf(c)) : "";
        return b + a
    }

    function rh(a, b) {
        if (a.L) {
            try {
                qc(Pb(a.L, "vi", b))
            } catch (c) {}
            x(xh, b) && (a.L = "")
        }
    }

    function lh(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        var e = Ta(a.i);
        e.r = b;
        b = !0;
        1 == M(P.g().a, "avxm") && (b = c || d);
        b && a.yb(E, e, c ? 4 : d ? 2 : 3);
        c || d || rh(a, "0")
    }

    function oh(a) {
        return 1 == a.c || 2 == a.c || a.m
    }
    l.Jb = function(a) {
        this.P.push(a)
    };
    l.Kb = function(a) {
        this.F = a
    };

    function yh(a) {
        var b = Z.g();
        P.g().c = a.l;
        b.b = a;
        b.Ha()
    }

    function zh(a) {
        a.a = Ge(a.b.a);
        if (1 == a.a || 3 == a.a) {
            var b = a.b.a;
            a.s = R(283, function() {
                a.a = Ge(a.b.a);
                if (0 != a.a)
                    if (Ah() && a.h) {
                        var d = a.h,
                            e = a.a;
                        d.h != e && (dg(d, e), d.ka() && X.c())
                    } else 2 == a.a && (d = a.b.a, a.u ? (a.u.disconnect(), a.u = null) : d && d.removeEventListener && d.removeEventListener("DOMAttrModified", a.s)), a.s = null, d = {}, te(a.l, d), d[0] = "goog_av_measurement_hold_update", fh(a, d), Bh(d, 282)
            });
            if (MutationObserver && b) {
                var c = {
                    attributes: !0
                };
                c.attributeFilter = ["data-" + db("googleAvDm")];
                a.u = new u.MutationObserver(a.s);
                a.u.observe(b, c)
            } else b && b.addEventListener ? b.addEventListener("DOMAttrModified", a.s) : ie(286, Error())
        }
    }

    function Ah() {
        return 1 == M(P.g().a, "cm")
    }

    function Ch(a) {
        a.o = !0;
        if (Ah()) Dh(a), a = a.h, a.u || (a.Ka(), a.ka() && X.c());
        else {
            var b = {};
            te(a.l, b);
            b[0] = "goog_creative_loaded";
            fh(a, b);
            Bh(b, 115)
        }
    }

    function fh(a, b) {
        var c = P.g(),
            d = Ah() ? 4 : a.c;
        b[6] = d;
        b[16] = a.j;
        b[19] = c.f;
        switch (a.a) {
            case 1:
            case 3:
                b[26] = !0;
                break;
            case 2:
                b[26] = !1
        }
        a.o && (b[35] = !0);
        a = u.performance;
        b[33] = a && a.timing && a.timing.domLoading || -1;
        b[29] = c.b
    }

    function Bh(a, b) {
        var c = ue(a);
        try {
            se(function() {
                jh(Z.g(), c)
            }, b)
        } catch (d) {}
    }

    function Eh() {
        var a = P.g(),
            b = [ch.g()],
            c = 1 == M(a.a, "amp");
        (1 != M(a.a, "xdi") || c) && b.unshift(Z.g());
        return [new Bg(b), new Jg(E), new bh(E)]
    }

    function vh(a, b) {
        if (U.g().b) {
            var c = [new Jg(E), new bh(E)],
                d = yg.g();
            d.b = c;
            zg(d, function(e, f) {
                Fh(a, e, f)
            }) ? Kf(a.h, d.a) : Fh(a, "i", b)
        }
    }

    function Gh(a) {
        P.g();
        var b = yg.g();
        if (null == b.a) {
            if (null == b.b) {
                var c = Eh();
                b.b = c
            }
            zg(b, function() {
                return null
            }) ? X.done || (ef(b.a.a, a), Hh()) : Fh(a, "i")
        }
    }

    function Dh(a) {
        var b = P.g(),
            c = E.location.href,
            d = Zg(a.c),
            e = Ah();
        d = new $f(E, c, a.b.a, -1, a.$, pa, d);
        nd(d.a, e);
        a.h = d;
        d.T = a.c;
        d.ub = [E];
        d.Cb = a.oa;
        d.ra(a.W);
        1 === M(d.i, "osddt") && Yc(P.g().a, "cm", 1);
        d.j = a.l.b;
        d.R = a.l.a;
        d.da = Xg(c);
        ig(d, a.J, a.V);
        W.a.push(d);
        dg(d, a.a);
        Wg();
        c = yg.g();
        null != c.a ? Kf(d, c.a) : Pf(d, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return a.oa.apply(a, q(g))
        });
        b.h && a.oa(d, b.h)
    }

    function Fh(a, b, c) {
        P.g().h = b;
        for (var d = ba(W.a), e = d.next(); !e.done; e = d.next()) a.oa(e.value, b);
        Ih(b, c)
    }

    function mh(a) {
        if (a && (a = decodeURIComponent(a))) {
            var b = Ma(Ca(a.split("&"), function(c) {
                return c.split("=")
            }));
            0 < b.length % 2 || w(W.a, function(c) {
                lg(c, Va(b))
            })
        }
    }

    function nh(a) {
        w(W.a, function(b) {
            void 0 !== a.Ya && -1 == b.m && (b.m = a.Ya || 0);
            void 0 !== a.Xa && -1 == b.Y && (b.Y = b.m + (a.Xa || 0));
            void 0 !== a.pb && (b.D = a.pb || 0);
            void 0 !== a.jb && (b.Da = a.jb || 0)
        })
    }
    l.oa = function(a, b) {
        a.A = !0;
        var c = {};
        cg(a, 2, (c.r = b, c));
        a.b && a.b.na()
    };

    function Ih(a, b) {
        if (!X.done && W.a.length) {
            X.f.cancel();
            var c = Vg(X, Cc(), !1);
            b && (c.avms = b.G(), y(c, b.K()));
            c = {};
            a = (c.r = a, c);
            b && (a.avms = b.G(), y(a, b.K()));
            b = W.a;
            0 < b.length && Rg(X, b, !0);
            b = ba(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, c.A = !0, cg(c, 1, a);
            X.done = !0;
            Z.g().wa()
        }
    }

    function Jh(a, b) {
        a.W = b;
        if (na(b)) {
            b = $c(P.g().a, b).split("&");
            for (var c = b.length - 1; 0 <= c; c--) {
                var d = b[c],
                    e = Fc;
                d == e.Eb ? (a.j = !1, b.splice(c, 1)) : d == e.Db && (a.T = !0, b.splice(c, 1))
            }
            a = P.g();
            b = b.join("&");
            na(b) && 0 != b.length && (a.f = $c(a.a, b))
        }
    }

    function Hh() {
        if (-1 == X.a.qa) {
            var a = Cc();
            Pg(a);
            a.setTimeout(R(131, function() {
                Ih("t")
            }), 36E5);
            X.a.qa = S() - -1
        }
    }

    function Kh(a) {
        function b(e) {
            d && c || (d = !0, lh(a, e, a.C, !a.B))
        }
        var c = 1 == M(P.g().a, "phel"),
            d = !1;
        T(E, "unload", function() {
            b("u")
        }, 119);
        c && T(E, "pagehide", function() {
            b("ph")
        }, 490)
    }

    function Lh(a) {
        zh(a);
        a.o = qe(a.b.a, function() {
            return Ch(a)
        });
        if (Ah()) a.o && Ch(a);
        else if ((a.o || 1 == a.a || 3 == a.a) && Z.g().s) {
            var b = {};
            te(a.l, b);
            b[0] = "goog_listener_status";
            fh(a, b);
            Bh(b, 114)
        }
    }

    function Mh(a, b) {
        function c() {
            if (!a.b.a) {
                var e = a.b;
                var f = null;
                var g = (E.document || document).getElementsByTagName("SCRIPT");
                0 < g.length && (g = g[g.length - 1]) && g.parentElement && (f = g.parentElement);
                f || (f = E.document.body);
                if (f) {
                    g = String(b);
                    for (var h = md(f, ["GoogleActiveViewClass", "GoogleActiveViewElement"]), k = [], m = [], p = ba(h), n = p.next(); !n.done; n = p.next()) n = n.value, fd(n, "googleAvAdk") ? ed(n, "googleAvAdk") == g && k.push(n) : m.push(n);
                    2 == k.length && (Xb(k[0], k[1]) ? k = [k[1]] : Xb(k[1], k[0]) && (k = [k[0]]));
                    e.h = h.length;
                    e.f = k.length;
                    e.i = k.length + m.length;
                    1 == k.length ? e.a = k[0] : e.a = kd(k) || kd(m);
                    e.a = e.a || ld(f)
                }
                d--;
                a.b.a ? Lh(a) : 0 < d && E.setTimeout(de(122, c), 100)
            }
        }
        var d = 10;
        c()
    }
    l.sa = function(a, b, c, d, e, f, g, h, k, m, p) {
        var n = this;
        Date && E && E.screen && E.document && E.document.body && E.document.body.getBoundingClientRect && (P.g().b = 4, this.w = a, this.L = b, this.D = d, this.m = f, g && Jh(this, g), a = P.g(), b = Ah(), a.b = 4, this.j = f, this.l = new od(e, th()), T(E, "load", function() {
            rh(n, "-1")
        }, 117), this.J = c || "", this.V = k, c = m || wh(c, k), x(this.f, c) || this.f.push(c), p && !x(this.f, p) && this.f.push(p), Kh(this), (p = U.g().h || z(A, "CrKey") || z(A, "PlayStation") || z(A, "Roku") || Ie() || z(A, "Xbox") || Je() || Ke()) || (O(), p = 0 !== sd()), p ? (1 == M(a.a, "epoh") && T(E.document, "visibilitychange", function() {
            var r = E.document;
            (null != r.hidden ? r.hidden : null != r.mozHidden ? r.mozHidden : null != r.webkitHidden && r.webkitHidden) && !(3 <= n.ea) && (n.ea++, r = Ta(n.i), r.r = "hvc", sh(n, r, !1, !0))
        }, 455), 1 == M(a.a, "epph") && T(E, "pagehide", Pa(function() {
            if (n.B) {
                var r = Ta(n.i);
                r.r = "ph";
                sh(n, r, !1, !0)
            }
        }), 457), -1 == this.w ? this.c = f ? 3 : 1 : -2 == this.w ? this.c = 3 : 0 < this.w && (this.c = 2, this.A = !0), this.j && !this.A && -1 == this.w && (this.c = 2), b && (X.o = "osd", a.i = 947190542, yh(this), Gh(this)), Mh(this, e), b || yh(this)) : (e = {}, e = (e.r = "pv", e), sh(this, e, !0), this.c = 5, yh(this)))
    };
    v(uh);
    var xh = ["1", "0", "3"];
    xa("osdlfm", R(123, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).sa.apply(d, q(b))
    }));
    xa("osdlac", R(124, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).Jb.apply(d, q(b))
    }));
    xa("osdlamrc", R(125, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = Z.g()).Ib.apply(d, q(b))
    }));
    xa("osdsir", R(126, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        c = uh.g();
        if (Ah()) c.h && lh(c, "ac", Hf(c.h.c), c.h.A);
        else {
            var d = Z.g();
            d && !d.u && 2 == d.o && 0 < c.U && c.yb.apply(c, q(b))
        }
    }));
    xa("osdacrc", R(127, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).Kb.apply(d, q(b))
    }));
    xa("osdpcls", R(128, function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        var d;
        return (d = uh.g()).Ob.apply(d, q(b))
    }));
}).call(this, this, this.document);