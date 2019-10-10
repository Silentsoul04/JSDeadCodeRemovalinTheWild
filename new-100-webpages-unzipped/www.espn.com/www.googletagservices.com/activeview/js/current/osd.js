(function(window, document) {
    var k;

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

    function r(a) {
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
                    Sb: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.Sb;
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
                    } else a[c] = b[c];
        a.Ib = b.prototype
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
    la("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
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
        a.Ua = void 0;
        a.g = function() {
            return a.Ua ? a.Ua : a.Ua = new a
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

    function ta(a) {
        return "function" == qa(a)
    }

    function ua(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function va(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function wa(a, b, c) {
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

    function xa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? xa = va : xa = wa;
        return xa.apply(null, arguments)
    }

    function ya(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function za(a, b) {
        a = a.split(".");
        var c = u;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Aa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ib = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Ba;

    function Ca(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function x(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function Da(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ea(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Fa(a, b, c) {
        var d = c;
        x(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ga(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ha(a, b) {
        var c = 0;
        x(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }

    function Ia(a, b) {
        b = Ja(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ja(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Ka(a, b) {
        return 0 <= Ca(a, b)
    }

    function La(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ma(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Na(a, b) {
        a.sort(b || Oa)
    }

    function Oa(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Pa(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function Qa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ra(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Sa(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ta(a) {
        var b = Ua,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Va(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var Wa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function y(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Wa.length; f++) c = Wa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function Xa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var Ya = /&/g,
        Za = /</g,
        $a = />/g,
        ab = /"/g,
        cb = /'/g,
        db = /\x00/g,
        eb = /[\x00&<>"']/;

    function z(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function fb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var A;
    a: {
        var gb = u.navigator;
        if (gb) {
            var hb = gb.userAgent;
            if (hb) {
                A = hb;
                break a
            }
        }
        A = ""
    }

    function B(a) {
        return -1 != A.indexOf(a)
    };

    function ib() {
        return B("Safari") && !(jb() || B("Coast") || B("Opera") || B("Edge") || B("Edg/") || B("OPR") || B("Firefox") || B("FxiOS") || B("Silk") || B("Android"))
    }

    function jb() {
        return (B("Chrome") || B("CriOS")) && !B("Edge")
    };

    function kb(a) {
        eb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ya, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Za, "&lt;")), -1 != a.indexOf(">") && (a = a.replace($a, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(ab, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(cb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(db, "&#0;")));
        return a
    }

    function lb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function mb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function nb(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function ob(a) {
        ob[" "](a);
        return a
    }
    ob[" "] = pa;

    function pb(a, b) {
        try {
            return ob(a[b]), !0
        } catch (c) {}
        return !1
    }

    function qb(a, b) {
        var c = rb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var sb = B("Opera"),
        C = B("Trident") || B("MSIE"),
        tb = B("Edge"),
        ub = B("Gecko") && !(z(A, "WebKit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
        vb = z(A, "WebKit") && !B("Edge"),
        wb = vb && B("Mobile");

    function xb() {
        var a = u.document;
        return a ? a.documentMode : void 0
    }
    var yb;
    a: {
        var zb = "",
            Ab = function() {
                var a = A;
                if (ub) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (tb) return /Edge\/([\d\.]+)/.exec(a);
                if (C) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (vb) return /WebKit\/(\S+)/.exec(a);
                if (sb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ab && (zb = Ab ? Ab[1] : "");
        if (C) {
            var Bb = xb();
            if (null != Bb && Bb > parseFloat(zb)) {
                yb = String(Bb);
                break a
            }
        }
        yb = zb
    }
    var Cb = yb,
        rb = {};

    function Db(a) {
        return qb(a, function() {
            for (var b = 0, c = Xa(String(Cb)).split("."), d = Xa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = fb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || fb(0 == g[2].length, 0 == h[2].length) || fb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Eb;
    Eb = u.document && C ? xb() : void 0;
    var Fb = {},
        Gb = null;
    var Hb = 0,
        Ib = 0;

    function Jb() {
        this.a = []
    }
    Jb.prototype.length = function() {
        return this.a.length
    };

    function Kb(a) {
        var b = a.a;
        a.a = [];
        return b
    }

    function Lb(a, b) {
        for (; 127 < b;) a.a.push(b & 127 | 128), b >>>= 7;
        a.a.push(b)
    }

    function Mb(a, b) {
        a.a.push(b >>> 0 & 255);
        a.a.push(b >>> 8 & 255);
        a.a.push(b >>> 16 & 255);
        a.a.push(b >>> 24 & 255)
    };

    function Nb() {
        this.b = [];
        this.c = 0;
        this.a = new Jb
    }
    Nb.prototype.reset = function() {
        this.b = [];
        Kb(this.a);
        this.c = 0
    };

    function Ob(a, b, c) {
        if (null != c) {
            Lb(a.a, 8 * b);
            a = a.a;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            Hb = b;
            Ib = d;
            c = Hb;
            for (b = Ib; 0 < b || 127 < c;) a.a.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.a.push(c)
        }
    };

    function Pb() {}
    var Qb = "function" == typeof Uint8Array,
        Rb = [];

    function Sb(a, b) {
        if (b < a.f) {
            b += a.c;
            var c = a.a[b];
            return c === Rb ? a.a[b] = [] : c
        }
        if (a.b) return c = a.b[b], c === Rb ? a.b[b] = [] : c
    }

    function Tb(a, b) {
        a = Sb(a, b);
        return null == a ? 0 : a
    }

    function Ub(a, b, c) {
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

    function Vb(a) {
        if (a.h)
            for (var b in a.h) {
                var c = a.h[b];
                if (ra(c))
                    for (var d = 0; d < c.length; d++) c[d] && Vb(c[d]);
                else c && Vb(c)
            }
    }
    Pb.prototype.toString = function() {
        Vb(this);
        return this.a.toString()
    };
    var Wb;
    Wb = ["av.key", "js", "20191009"].slice(-1)[0];
    var D = document,
        E = window;
    var Xb = !C || 9 <= Number(Eb),
        Yb = C || sb || vb;

    function F(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    F.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    F.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    F.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
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

    function Zb(a) {
        return a ? new $b(ac(a)) : Ba || (Ba = new $b)
    }

    function bc() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : cc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function cc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Ka(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function dc(a, b) {
        Ra(b, function(c, d) {
            c && "object" == typeof c && c.rc && (c = c.qc());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ec.hasOwnProperty(d) ? a.setAttribute(ec[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var ec = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function fc(a) {
        var b = a.scrollingElement ? a.scrollingElement : vb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return C && Db("10") && a.pageYOffset != b.scrollTop ? new F(b.scrollLeft, b.scrollTop) : new F(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function gc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function hc(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!Xb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', kb(g.name), '"');
            if (g.type) {
                f.push(' type="', kb(g.type), '"');
                var h = {};
                y(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = ic(e, f);
        g && ("string" === typeof g ? f.className = g : ra(g) ? f.className = g.join(" ") : dc(f, g));
        2 < d.length && jc(e, f, d);
        return f
    }

    function jc(a, b, c) {
        function d(g) {
            g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !sa(f) || ua(f) && 0 < f.nodeType ? d(f) : x(kc(f) ? Ma(f) : f, d)
        }
    }

    function ic(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function lc(a) {
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

    function ac(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function mc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? gc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function kc(a) {
        if (a && "number" == typeof a.length) {
            if (ua(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if (ta(a)) return "function" == typeof a.item
        }
        return !1
    }

    function nc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function $b(a) {
        this.a = a || u.document || document
    };

    function oc() {
        return B("iPad") || B("Android") && !B("Mobile") || B("Silk")
    };
    var pc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function qc(a) {
        try {
            return !!a && null != a.location.href && pb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function rc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function sc(a) {
        var b = [];
        rc(a, function(c, d) {
            b.push(d)
        });
        return b
    }

    function tc() {
        var a = uc;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    var vc = Qa(function() {
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

    function wc(a) {
        return a ? a.passive && vc() ? a : a.capture || !1 : !1
    }

    function xc(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, wc(d)), !0) : !1
    }

    function yc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, wc(void 0))
    };

    function zc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }
    var Ac = Qa(function() {
        return "referrerPolicy" in u.document.createElement("img")
    });
    var Bc = {
        nc: 1,
        pc: 2,
        lc: 3
    };
    var Cc;
    Cc = /^true$/.test("<<<IS_DEBUG_IP:j>>>");

    function H(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    k = H.prototype;
    k.H = function() {
        return this.right - this.left
    };
    k.F = function() {
        return this.bottom - this.top
    };

    function Dc(a) {
        return new H(a.top, a.right, a.bottom, a.left)
    }
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Ec(a, b, c) {
        b instanceof F ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    var Fc = {};

    function Gc(a) {
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

    function Hc(a, b) {
        var c = new F(0, 0),
            d = gc(ac(a));
        if (!pb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = ac(e);
                var g = new F(0, 0);
                var h = f ? ac(f) : document;
                h = !C || 9 <= Number(Eb) || "CSS1Compat" == Zb(h).a.compatMode ? h.documentElement : h.body;
                e != h && (e = Gc(e), f = fc(Zb(f).a), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = Gc(a), g = new F(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    var Ic = new function(a) {
        this.a = a
    }(5);

    function Jc(a) {
        return a[Ic.a] || function() {}
    };

    function Kc() {
        this.a = function() {
            return !1
        }
    }
    v(Kc);

    function Lc(a) {
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

    function Mc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Nc() {
        var a = D.documentElement,
            b = I();
        try {
            if (D.createEvent) {
                var c = D.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Mc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Mc(b.Event)) {
                var e = new Event("osd_load", {
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }

    function Oc() {
        var a = I();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Pc = !!window.google_async_iframe_id,
        Qc = Pc && window.parent || window;

    function I() {
        if (Pc && !qc(Qc)) {
            var a = "." + D.domain;
            try {
                for (; 2 < a.split(".").length && !qc(Qc);) D.domain = a = a.substr(a.indexOf(".") + 1), Qc = window.parent
            } catch (b) {}
            qc(Qc) || (Qc = window)
        }
        return Qc
    };

    function Rc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new G(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new G(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (q) {
                d = new G(-12245933, -12245933)
            }
            a = d;
            var n = fc(Zb(b.document).a);
            if (-12245933 == a.width) {
                var m = a.width;
                var l = new H(m, m, m, m)
            } else l = new H(n.y, n.x + a.width, n.y + a.height, n.x);
            return l
        } catch (q) {
            return new H(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Sc = {
        NONE: 0,
        dc: 1
    };

    function Tc() {
        this.o = 0;
        this.f = !1;
        this.b = -1;
        this.a = !1;
        this.c = 0
    }
    Tc.prototype.isVisible = function() {
        return this.a ? .3 <= this.o : .5 <= this.o
    };
    var J = {
            cc: 0,
            ec: 1
        },
        Uc = {
            370204018: 0,
            370204019: 1,
            370204052: 2,
            370204026: 0,
            370204027: 1,
            370204053: 2
        },
        Vc = {
            668123728: 0,
            668123729: 1
        },
        Wc = {
            668123028: 0,
            668123029: 1
        },
        Xc = {
            NONE: 0,
            kc: 1,
            fc: 2
        },
        Yc = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        Zc = {
            319331040: 0,
            319331041: 1
        },
        $c = {
            42530094: 0,
            42530095: 1
        },
        ad = {
            42530173: 0,
            42530174: 1
        },
        bd = {
            370204070: 1
        },
        cd = {
            370204078: 0,
            370204079: 1,
            370204080: 0,
            370204081: 1
        };

    function dd() {
        this.a = null;
        this.b = !1;
        this.c = null
    }

    function K(a) {
        a.b = !0;
        return a
    }

    function ed(a, b) {
        a.c = void 0 === b ? null : b
    }

    function fd(a, b) {
        a.c && x(b, function(c) {
            c = a.c[c];
            void 0 !== c && gd(a, c)
        })
    }

    function hd(a) {
        dd.call(this);
        this.f = a
    }
    t(hd, dd);

    function gd(a, b) {
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

    function id() {
        this.a = {};
        this.c = !0;
        this.b = {}
    }
    id.prototype.reset = function() {
        this.a = {};
        this.c = !0;
        this.b = {}
    };

    function L(a, b, c) {
        a.a[b] || (a.a[b] = new hd(c));
        return a.a[b]
    }

    function jd(a, b, c) {
        (a = a.a[b]) && gd(a, c)
    }

    function M(a, b) {
        var c = a.b;
        if (null !== c && b in c) return a.b[b];
        if (a = a.a[b]) return a.a
    }

    function kd(a) {
        var b = {},
            c = Sa(a.a, function(d) {
                return d.b
            });
        Ra(c, function(d, e) {
            d = void 0 !== a.b[e] ? String(a.b[e]) : d.b && null !== d.a ? String(d.a) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function ld(a, b) {
        if (!a.c) return b;
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.a[e]) && gd(e, d)
        }
        return b.join("&")
    }

    function md(a, b) {
        a.c && x(Va(a.a), function(c) {
            return fd(c, b)
        })
    }

    function nd(a, b) {
        a.c && b && na(b) && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = Ea(b, function(c) {
            return Number(c)
        }), md(a, b))
    };
    var od = !C && !ib();

    function pd(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (od && a.dataset) {
            if (!(!B("Android") || jb() || B("Firefox") || B("FxiOS") || B("Opera") || B("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + mb(b))
    }

    function qd(a, b) {
        return /-[a-z]/.test(b) ? !1 : od && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + mb(b)) : !!a.getAttribute("data-" + mb(b))
    };

    function rd() {
        this.a = this.b = null;
        this.c = "no"
    };

    function sd(a, b) {
        this.b = (void 0 === a ? 0 : a) || 0;
        this.a = (void 0 === b ? "" : b) || ""
    }

    function td(a) {
        return !!a.b || !!a.a
    }
    sd.prototype.toString = function() {
        return this.b + (this.a ? "-" : "") + this.a
    };

    function ud() {}
    ud.prototype.a = function() {
        return 0
    };
    ud.prototype.c = function() {
        return 0
    };
    ud.prototype.f = function() {
        return 0
    };
    ud.prototype.b = function() {
        return 0
    };

    function vd() {
        if (!wd()) throw Error();
    }
    t(vd, ud);

    function wd() {
        return !(!E || !E.performance)
    }
    vd.prototype.a = function() {
        return wd() && E.performance.now ? E.performance.now() : ud.prototype.a.call(this)
    };
    vd.prototype.c = function() {
        return wd() && E.performance.memory ? E.performance.memory.totalJSHeapSize || 0 : ud.prototype.c.call(this)
    };
    vd.prototype.f = function() {
        return wd() && E.performance.memory ? E.performance.memory.usedJSHeapSize || 0 : ud.prototype.f.call(this)
    };
    vd.prototype.b = function() {
        return wd() && E.performance.memory ? E.performance.memory.jsHeapSizeLimit || 0 : ud.prototype.b.call(this)
    };

    function xd() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[D.visibilityState || D.webkitVisibilityState || D.mozVisibilityState || ""] || 0
    };

    function yd() {}
    yd.prototype.isVisible = function() {
        return 1 === xd()
    };
    var zd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Ad() {
        var a = u,
            b = [],
            c = null;
        do {
            var d = a;
            if (qc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new Bd(e || "", d));
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
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.ub = !0);
        return b
    }

    function Cd(a, b) {
        this.a = a;
        this.b = b
    }

    function Bd(a, b, c) {
        this.url = a;
        this.b = b;
        this.ub = !!c;
        this.depth = null
    };

    function Dd() {
        this.c = "&";
        this.f = !1;
        this.b = {};
        this.h = 0;
        this.a = []
    }

    function Ed(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Fd(a, b, c, d, e) {
        var f = [];
        rc(a, function(g, h) {
            (g = Gd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Gd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Gd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Fd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Hd(a, b, c, d) {
        a.a.push(b);
        a.b[b] = Ed(c, d)
    }

    function Id(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Jd(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(l, q) {
            return l - q
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], n = 0; n < h.length; n++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Fd(h[n], a.c, ",$");
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

    function Jd(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Kd() {
        this.b = new yd;
        this.a = wd() ? new vd : new ud
    }
    Kd.prototype.setInterval = function(a, b) {
        return E.setInterval(a, b)
    };
    Kd.prototype.clearInterval = function(a) {
        E.clearInterval(a)
    };
    Kd.prototype.setTimeout = function(a, b) {
        return E.setTimeout(a, b)
    };
    Kd.prototype.clearTimeout = function(a) {
        E.clearTimeout(a)
    };

    function Ld(a) {
        N();
        var b = I() || E;
        zc(b, a, !1)
    }
    v(Kd);

    function Md() {}

    function N() {
        var a = Md.g();
        if (!a.a) {
            if (!E) throw Error("Context has not been set and window is undefined.");
            a.a = Kd.g()
        }
        return a.a
    }
    v(Md);

    function Nd(a) {
        this.h = null;
        a || (a = []);
        this.c = -1;
        this.a = a;
        a: {
            if (a = this.a.length) {
                --a;
                var b = this.a[a];
                if (!(null === b || "object" != typeof b || ra(b) || Qb && b instanceof Uint8Array)) {
                    this.f = a - -1;
                    this.b = b;
                    break a
                }
            }
            this.f = Number.MAX_VALUE
        }
    }
    Aa(Nd, Pb);

    function Od(a) {
        this.f = a;
        this.a = -1;
        this.b = this.c = 0
    }

    function Pd(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.a) return b.apply(null, r(d));
            try {
                return a.a = a.f.a.a(), b.apply(null, r(d))
            } finally {
                a.c += a.f.a.a() - a.a, a.a = -1, a.b += 1
            }
        }
    };

    function Qd(a, b) {
        this.b = a;
        this.c = b;
        this.a = new Od(a)
    };

    function O() {
        this.f = void 0;
        this.c = this.l = 0;
        this.h = this.i = -1;
        this.a = new id;
        ed(K(L(this.a, "mv", Xc)), Yc);
        L(this.a, "omid", J);
        K(L(this.a, "epoh", J));
        K(L(this.a, "epph", J));
        ed(K(L(this.a, "umt", J)), Vc);
        ed(K(L(this.a, "gmpd", J)), Wc);
        ed(K(L(this.a, "sel", J)), Uc);
        ed(K(L(this.a, "buvpe", J)), Zc);
        ed(K(L(this.a, "imams", J)), $c);
        ed(L(this.a, "imar", J), ad);
        this.a.b.imar = 1;
        ed(K(L(this.a, "gms", J)), bd);
        K(L(this.a, "phel", J));
        K(L(this.a, "phell", J));
        K(L(this.a, "oseid", Bc));
        K(L(this.a, "xdi", J));
        K(L(this.a, "amp", J));
        K(L(this.a, "prf", J));
        K(L(this.a, "gtx", J));
        K(L(this.a, "mvp_lv", J));
        ed(K(L(this.a, "lvio", J)), cd);
        K(L(this.a, "xosd", J));
        this.j = new Qd(N(), this.a);
        this.b = null
    }

    function Rd() {
        return O.g().j
    }
    v(O);

    function Sd() {
        var a = "https:";
        E && E.location && "http:" === E.location.protocol && (a = "http:");
        this.b = a;
        this.a = .01
    }

    function Td(a, b, c, d) {
        if (Math.random() < (d || a.a)) try {
            if (c instanceof Dd) var e = c;
            else e = new Dd, rc(c, function(g, h) {
                var n = e,
                    m = n.h++;
                g = Ed(h, g);
                n.a.push(m);
                n.b[m] = g
            });
            var f = Id(e, a.b, "/pagead/gen_204?id=" + b + "&");
            f && Ld(f)
        } catch (g) {}
    };

    function Ud(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var Vd = null;

    function Wd() {
        var a = u.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function Xd() {
        var a = void 0 === a ? u : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Yd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var P = u.performance,
        Zd = !!(P && P.mark && P.measure && P.clearMarks),
        $d = Qa(function() {
            var a;
            if (a = Zd) {
                var b;
                if (null === Vd) {
                    Vd = "";
                    try {
                        a = "";
                        try {
                            a = u.top.location.hash
                        } catch (c) {
                            a = u.location.hash
                        }
                        a && (Vd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Vd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function ae() {
        var a = I();
        this.b = [];
        this.c = a || u;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = $d() || (null != b ? b : 1 > Math.random())
    }

    function be(a) {
        a && P && $d() && (P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), P.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    ae.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = Xd() || Wd();
        a = new Yd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        P && $d() && P.mark(b);
        return a
    };

    function ce() {
        var a = de;
        this.i = ee;
        this.h = "jserror";
        this.f = !0;
        this.b = null;
        this.j = this.c;
        this.a = void 0 === a ? null : a
    }

    function fe(a, b, c) {
        return Pd(Rd().a, function() {
            try {
                if (a.a && a.a.a) {
                    var d = a.a.start(b.toString(), 3);
                    var e = c();
                    var f = a.a,
                        g = d;
                    if (f.a && "number" === typeof g.value) {
                        var h = Xd() || Wd();
                        g.duration = h - g.value;
                        var n = "goog_" + g.label + "_" + g.uniqueId + "_end";
                        P && $d() && P.mark(n);
                        !f.a || 2048 < f.b.length || f.b.push(g)
                    }
                } else e = c()
            } catch (m) {
                f = a.f;
                try {
                    be(d), f = a.j(b, new ge(he(m)), void 0, void 0)
                } catch (l) {
                    a.c(217, l)
                }
                if (!f) throw m;
            }
            return e
        })()
    }

    function ie(a, b) {
        var c = je;
        return Pd(Rd().a, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return fe(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    ce.prototype.c = function(a, b, c, d, e) {
        e = e || this.h;
        try {
            var f = new Dd;
            f.f = !0;
            Hd(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new ge(he(b)));
            b.msg && Hd(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (w) {}
            if (d) try {
                d(g)
            } catch (w) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            var h = Ad(),
                n = new Bd(u.location.href, u, !1);
            b = null;
            var m = h.length - 1;
            for (d = m; 0 <= d; --d) {
                var l = h[d];
                !b && zd.test(l.url) && (b = l);
                if (l.url && !l.ub) {
                    n = l;
                    break
                }
            }
            l = null;
            var q = h.length && h[m].url;
            0 != n.depth && q && (l = h[m]);
            var p = new Cd(n, l);
            p.b && Hd(f, 4, "top", p.b.url || "");
            Hd(f, 5, "url", p.a.url || "");
            Td(this.i, e, f, c)
        } catch (w) {
            try {
                Td(this.i, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: he(w),
                    url: p && p.a.url
                }, c)
            } catch (bb) {}
        }
        return this.f
    };

    function he(a) {
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

    function ge(a) {
        Ud.call(this, Error(a), {
            message: a
        })
    }
    t(ge, Ud);
    var ee, je, de = new ae;

    function ke() {
        var a = I();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = de, a.a = !1, a.b != a.c.google_js_reporting_queue && ($d() && x(a.b, be), a.b.length = 0))
    }(function() {
        ee = new Sd;
        je = new ce;
        var a = I();
        a && a.document && ("complete" == a.document.readyState ? ke() : de.a && xc(a, "load", function() {
            ke()
        }))
    })();

    function le(a) {
        je.b = function(b) {
            x(a, function(c) {
                c(b)
            })
        }
    }

    function me(a, b) {
        return fe(je, a, b)
    }

    function Q(a, b) {
        return ie(a, b)
    }

    function ne(a, b, c, d) {
        je.c(a, b, c, d)
    };
    var oe = +new Date,
        pe = -1,
        qe = -1,
        re = !1;

    function R() {
        return +new Date - oe
    }

    function se() {
        var a = O.g().f,
            b = 0 <= qe ? R() - qe : -1,
            c = re ? R() - pe : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        ne(637, Error(), .001);
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    };

    function te(a) {
        for (var b = a !== a.top, c = a.top, d = a, e = d, f = 0; d && d != d.parent;) d = d.parent, f++, qc(d) && (e = d);
        c = c === e;
        if (b && c && null != a.top.mraid) return {
            Fa: a.top.mraid,
            Ha: 3
        };
        a = a.mraid;
        return null != a ? b ? c ? {
            Fa: a,
            Ha: 2
        } : {
            Fa: a,
            Ha: 1
        } : {
            Fa: a,
            Ha: 0
        } : null
    };

    function ue(a) {
        a = Lc(a);
        return !(!a || !a.observeIntersection)
    }

    function ve(a) {
        return (a = a.document) && ta(a.elementFromPoint)
    };
    Cc && (ee.a = 1);
    if (D && D.URL) {
        var we, uc = D.URL;
        we = !!uc && 0 < tc().length;
        je.f = !we
    }

    function S(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        c = ie(d, c);
        xc(a, b, c, {
            capture: e
        });
        return c
    }

    function xe(a) {
        var b = ["IMG", "FRAME", "IFRAME"];
        return Ga(b, function(c) {
            return a.nodeName == String(c)
        }) ? [a] : Fa(b, function(c, d) {
            return c.concat(Ma((a || document).getElementsByTagName(String(d))))
        }, [])
    }

    function ye(a, b) {
        if (a) {
            var c = 0,
                d = null;
            a = xe(a);
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
                                f = h && h.readyState ? "complete" == h.readyState : !1
                            }
                        } catch (n) {
                            f = !1
                        }
                }
                f || (c++, S(d, "load", function() {
                    c--;
                    c || b(null)
                }, 130))
            }
            a = d = null;
            !c && b(null)
        }
    }

    function ze(a, b) {
        function c(d) {
            yc(a, d, c);
            b(d)
        }
        return S(a, "DOMNodeRemoved", c, 156, !1)
    };

    function Ae(a) {
        var b = [];
        Ra(a, function(c, d) {
            d = encodeURIComponent(d);
            na(c) && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + +new Date);
        return b.join("\n")
    };

    function Be() {
        this.a = null;
        this.status = 0
    };
    var Ce = 0;

    function De(a, b) {
        try {
            Ce++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function Ee(a, b) {
        b && (a(b), b.frames && x(b.frames, function(c) {
            Ee(a, c)
        }))
    }

    function Fe(a, b) {
        0 == a.length ? (b.a = null, b.status = 1) : (a = lc.apply(null, a), !a || a.tagName ? b.a = a : b.a = a.parentElement, b.a || (b.status = -2))
    }

    function Ge(a, b, c) {
        var d = new RegExp("(?:(?:[?&]|%26|&3[f]|%2526|%253[f])" + b + "(?:=|%3[d]|%253[d]))([a-z0-9-_]*)", "i"),
            e = new Be;
        if ("" == b || -1 == c) return e.status = -1, e;
        try {
            b = [];
            var f = (a.document || document).getElementsByTagName("A");
            for (a = 0; a < f.length; a++) {
                var g = f[a],
                    h = c,
                    n = d.exec(g.href),
                    m;
                if (!(m = !n || !n[1])) {
                    var l = n[1],
                        q = l.length;
                    if (0 == q) var p = 0;
                    else {
                        for (var w = 305419896, bb = 0; bb < q; bb++) w ^= (w << 5) + (w >> 2) + l.charCodeAt(bb) & 4294967295;
                        p = 0 < w ? w : 4294967296 + w
                    }
                    m = h != p
                }
                m || (e.status = 3, b.push(g))
            }
            if (0 < b.length || 0 < b.length) return Fe(b, e), e
        } catch (qi) {
            return e.status = 7, e
        }
        e.status = 1;
        return e
    }

    function He(a) {
        return new H(a.top, a.right, a.bottom, a.left)
    }

    function Ie() {
        var a = N().b;
        return 0 === xd() ? -1 : a.isVisible() ? 0 : 1
    }

    function Je(a) {
        return [a.top, a.left, a.bottom, a.right].join("-")
    }

    function Ke(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = Da(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === E.top || f
                    }), a = ba(c), c = a.next(); !c.done; c = a.next()) De(b, c.value);
            else {
                c = [];
                var d = mc(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = Ea(cc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return mc(e)
                    })
                } catch (e) {}
                a = ba(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Ee(ya(De, b), c)
                    } catch (e) {}
                }
            }
    }

    function Le(a, b, c) {
        try {
            var d = Ae(b);
            Ke(a, d, c)
        } catch (e) {}
    };

    function Me() {
        var a = A;
        return a ? Ga("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return z(a, b)
        }) ? !0 : z(a, "Presto") && z(a, "Linux") && !z(a, "X11") && !z(a, "Android") && !z(a, "Mobi") : !1
    }

    function Ne() {
        var a = A;
        return z(a, "AppleTV") || z(a, "Apple TV") || z(a, "CFNetwork") || z(a, "tvOS")
    }

    function Oe() {
        var a = A;
        return z(a, "sdk_google_atv_x86") || z(a, "Android TV")
    };

    function T() {
        this.b = !qc(E.top);
        this.u = !this.b || ue(E);
        this.i = oc() || !oc() && (B("iPod") || B("iPhone") || B("Android") || B("IEMobile"));
        var a = Ad();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(pc)[3] || null) && decodeURI(a);
        this.a = new H(0, 0, 0, 0);
        this.j = new G(0, 0);
        this.h = new G(0, 0);
        this.c = new H(0, 0, 0, 0);
        this.l = new F(0, 0);
        this.s = this.m = !1;
        this.f = !(!E || !te(E));
        Pe(this)
    }

    function Qe(a, b) {
        b && b.screen && (a.j = new G(b.screen.width, b.screen.height))
    }

    function Re(a, b) {
        var c = a.a ? new G(a.a.H(), a.a.F()) : new G(0, 0);
        b = void 0 === b ? E : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var n = h.scrollHeight,
                    m = h.scrollWidth,
                    l = h.offsetHeight,
                    q = h.offsetWidth;
                h.clientHeight != l && (n = g.scrollHeight, m = g.scrollWidth, l = g.offsetHeight, q = g.offsetWidth);
                n > c.height ? n > l ? (d = n, e = m) : (d = l, e = q) : n < l ? (d = n, e = m) : (d = l, e = q)
            }
            var p = new G(e, d)
        } catch (w) {
            p = new G(-12245933, -12245933)
        }
        a.h = p
    }

    function Pe(a) {
        E && E.document && (a.c = Rc(!1, E, a.i), a.a = Rc(!0, E, a.i), Re(a, E), Qe(a, E))
    }

    function Se() {
        if (T.g().s) return !0;
        var a = N().b.isVisible(),
            b = 0 === xd();
        return a || b
    }
    v(T);
    var Te = new H(0, 0, 0, 0);

    function Ue(a, b) {
        try {
            try {
                var c = He(a.getBoundingClientRect())
            } catch (n) {
                c = new H(0, 0, 0, 0)
            }
            var d = c.right - c.left,
                e = c.bottom - c.top,
                f = Hc(a, b),
                g = f.x,
                h = f.y;
            return new H(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
        } catch (n) {
            return Dc(Te)
        }
    }

    function Ve(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new H(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new H(0, 0, 0, 0)
    }

    function We(a, b) {
        b = U(b);
        return 0 === b ? 0 : U(a) / b
    }

    function U(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function Xe(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (Yb && !(C && Db("9") && !Db("10") && u.SVGElement && a instanceof u.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;e = ua(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = ac(a),
                        g = f && gc(f),
                        h = g && g.frameElement;
                    h && (a = h)
                }
            }
            catch (n) {
                break
            }
        }
        return !1
    }

    function Ye(a, b, c) {
        if (!a || !b) return !1;
        b = Ec(Dc(a), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = I();
        qc(d.top) && d.top && d.top.document && (d = d.top);
        if (!ve(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = ac(c)) && b.defaultView && b.defaultView.frameElement) && Xe(b, a);
        d = a === c;
        a = !d && a && nc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Ze(a, b, c, d) {
        return T.g().b ? !1 : 0 >= a.H() || 0 >= a.F() ? !0 : c && d ? me(208, function() {
            return Ye(a, b, c)
        }) : !1
    };

    function $e(a, b, c) {
        var d = new H(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.c = b;
        this.a = d;
        this.b = c
    };

    function af(a, b, c, d, e, f, g) {
        this.i = a;
        this.f = b;
        this.a = c;
        this.c = d;
        this.j = e;
        this.h = f;
        this.b = g
    }

    function bf(a, b) {
        return b ? Math.max(a.c, a.j) : a.c
    };

    function cf(a) {
        this.c = a;
        this.b = 0;
        this.a = null
    }
    cf.prototype.cancel = function() {
        N().clearTimeout(this.a);
        this.a = null
    };

    function df(a) {
        var b = N();
        a.a = b.setTimeout(Pd(Rd().a, Q(143, function() {
            a.b++;
            a.c.Hb()
        })), se())
    };

    function V(a, b, c) {
        this.b = a;
        this.R = void 0 === c ? "na" : c;
        this.h = [];
        this.w = !1;
        this.f = new $e(-1, !0, this);
        this.a = this;
        this.i = b;
        this.M = this.u = !1;
        this.J = "uk";
        this.K = !1;
        this.j = !0
    }
    k = V.prototype;
    k.$ = function() {
        return this.C()
    };
    k.C = function() {
        return !1
    };
    k.sb = function() {
        this.w = !0
    };
    k.ha = function() {
        return this.a.J
    };

    function ef(a, b) {
        a.M || (a.M = !0, a.J = b, a.i = 0, a.a != a || ff(a))
    }
    k.G = function() {
        return this.a.R
    };
    k.O = function() {
        return this.a.ob()
    };
    k.ob = function() {
        return {}
    };
    k.P = function() {
        return this.a.i
    };

    function gf(a, b) {
        Ka(a.h, b) || (a.h.push(b), b.ia(a.a), b.W(a.f), b.T() && (a.u = !0))
    }
    k.Wa = function() {
        var a = T.g();
        a.a = Rc(!0, this.b, a.i)
    };
    k.Xa = function() {
        Qe(T.g(), this.b)
    };
    k.Ab = function() {
        Re(T.g(), this.b)
    };
    k.Bb = function() {
        var a = T.g();
        a.c = Rc(!1, this.b, a.i)
    };
    k.Sa = function() {
        return this.f.a
    };

    function hf(a) {
        a = a.a;
        a.Xa();
        a.Wa();
        a.Bb();
        a.Ab();
        a.f.a = a.Sa()
    }
    k.Hb = function() {};

    function jf(a) {
        a.u = a.h.length ? Ga(a.h, function(b) {
            return b.T()
        }) : !1
    }

    function kf(a) {
        var b = Ma(a.h);
        x(b, function(c) {
            c.W(a.f)
        })
    }

    function ff(a) {
        var b = Ma(a.h);
        x(b, function(c) {
            c.ia(a.a)
        });
        a.a != a || kf(a)
    }
    k.ia = function(a) {
        var b = this.a;
        this.a = a.P() >= this.i ? a : this;
        b !== this.a ? (this.j = this.a.j, ff(this)) : this.j !== this.a.j && (this.j = this.a.j, ff(this))
    };
    k.W = function(a) {
        if (a.b === this.a) {
            var b = this.f,
                c = this.u;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.c == a.c) b = b.a, c = a.a, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
            this.f = a;
            !c && kf(this)
        }
    };
    k.T = function() {
        return this.u
    };
    k.D = function() {
        this.K = !0
    };
    k.ja = function() {
        return this.K
    };

    function lf(a, b, c, d) {
        this.c = a;
        this.b = new H(0, 0, 0, 0);
        this.l = new H(0, 0, 0, 0);
        this.a = b;
        this.B = c;
        this.A = d;
        this.w = !1;
        this.timestamp = -1;
        this.h = new af(b.f, this.b, new H(0, 0, 0, 0), 0, 0, R(), 0)
    }
    k = lf.prototype;
    k.Ca = function() {
        return !0
    };
    k.X = function() {};
    k.Oa = function() {
        this.c && (this.b = Ue(this.c, this.a.a.b))
    };
    k.kb = function() {
        this.l = this.a.f.a
    };
    k.S = function() {
        this.Oa();
        this.h = new af(this.a.f, this.b, this.h.a, this.h.c, this.h.j, R(), this.h.b)
    };
    k.D = function() {
        if (!this.ja()) {
            var a = this.a,
                b = a.h,
                c = Ca(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.u && this.T() && jf(a);
            this.w = !0
        }
    };
    k.ja = function() {
        return this.w
    };
    k.O = function() {
        return this.a.O()
    };
    k.P = function() {
        return this.a.P()
    };
    k.ha = function() {
        return this.a.ha()
    };
    k.ia = function() {};
    k.W = function() {
        this.S()
    };
    k.T = function() {
        return this.A
    };

    function mf(a) {
        this.h = !1;
        this.a = a
    }
    k = mf.prototype;
    k.P = function() {
        return this.a.P()
    };
    k.ha = function() {
        return this.a.ha()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.a && (d = this.ya(a, b, c), gf(this.a, d));
        return d
    };
    k.$ = function() {
        return this.C()
    };
    k.C = function() {
        return !1
    };
    k.zb = function() {
        return !0
    };
    k.D = function() {
        this.h = !0
    };
    k.ja = function() {
        return this.h
    };
    k.O = function() {
        return {}
    };

    function nf(a, b, c) {
        this.c = void 0 === c ? 0 : c;
        this.b = a;
        this.a = null == b ? "" : b
    }

    function of (a) {
        switch (Math.trunc(a.c)) {
            case -16:
                return -16;
            case -8:
                return -8;
            case 0:
                return 0;
            case 8:
                return 8;
            case 16:
                return 16;
            default:
                return 16
        }
    }

    function pf(a, b) {
        return a.c < b.c ? !0 : a.c > b.c ? !1 : a.b < b.b ? !0 : a.b > b.b ? !1 : typeof a.a < typeof b.a ? !0 : typeof a.a > typeof b.a ? !1 : a.a < b.a
    };

    function qf() {
        this.c = 0;
        this.a = [];
        this.b = !1
    }
    qf.prototype.add = function(a, b, c) {
        ++this.c;
        a = new nf(a, b, c);
        this.a.push(new nf(a.b, a.a, a.c + this.c / 4096));
        this.b = !0;
        return this
    };

    function rf(a, b) {
        x(b.a, function(c) {
            a.add(c.b, c.a, of (c))
        })
    }

    function sf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        rc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }

    function tf(a) {
        var b = uf;
        a.b && (Na(a.a, function(c, d) {
            return pf(d, c) ? 1 : pf(c, d) ? -1 : 0
        }), a.b = !1);
        return Fa(a.a, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function uf(a) {
        var b = a.b;
        a = a.a;
        return "" === a ? b : "boolean" == typeof a ? a ? b : "" : ra(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Ka(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function vf(a) {
        var b = void 0 === b ? !0 : b;
        this.a = new qf;
        void 0 !== a && rf(this.a, a);
        b && this.a.add("v", Wb, -16)
    }
    vf.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = tf(this.a);
        0 < b.length && (a += "?" + b);
        return a
    };

    function wf(a) {
        var b = [],
            c = [];
        Ra(a, function(d, e) {
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

    function xf() {
        if (/r\d{8}/.test("<<<CAFE_VERSION_ID:j>>>")) return "<<<CAFE_VERSION_ID:j>>>";
        if (Wb && "unreleased" !== Wb) return Wb
    };

    function yf() {
        this.a = 0
    }
    v(yf);

    function zf(a) {
        this.m = a;
        this.l = !1
    }
    zf.prototype.i = function(a, b) {
        this.a = a;
        this.b = b
    };

    function Af() {
        zf.call(this, "capability")
    }
    t(Af, zf);
    Af.prototype.j = function() {
        return !0
    };
    Af.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U, a.v_name = this.b.U, a
    };

    function Bf() {
        zf.call(this, "diff")
    }
    t(Bf, zf);
    Bf.prototype.j = function() {
        return !(.02 >= Math.abs(this.b.o - this.a.o))
    };
    Bf.prototype.h = function() {
        var a = {};
        return a.b_name = this.a.U, a.v_name = this.b.U, a.b_vp_off = JSON.stringify(this.a.I), a.v_vp_off = JSON.stringify(this.b.I), a.b_vp_sz = JSON.stringify(this.a.cb), a.v_vp_sz = JSON.stringify(this.b.cb), a.b_exp = this.a.o, a.v_exp = this.b.o, a.efp_occ = this.a.Lb, a.sbv = this.a.aa, a
    };

    function Cf() {
        zf.call(this, "capt");
        this.f = [];
        this.c = []
    }
    t(Cf, zf);
    Cf.prototype.i = function(a, b) {
        zf.prototype.i.call(this, a, b);
        20 <= this.c.length || (this.f.push(a.o), this.c.push(b.o))
    };
    Cf.prototype.j = function() {
        return 20 === this.c.length
    };
    Cf.prototype.h = function() {
        var a = Df(this.f, this.c),
            b = Ef(this.f, this.c),
            c = {};
        return c.b_name = this.a.U, c.v_name = this.b.U, c.b_exp = this.f.join(","), c.v_exp = this.c.join(","), c.diff = a, c.diff_buckets = b, c
    };

    function Df(a, b) {
        return Ha(Pa(a, b), function(c) {
            return c[0] !== c[1]
        })
    }

    function Ef(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return Df(Ea(a, c), Ea(b, c))
    };

    function W() {
        this.ba = this.ba;
        this.ua = this.ua
    }
    W.prototype.ba = !1;
    W.prototype.ja = function() {
        return this.ba
    };
    W.prototype.D = function() {
        this.ba || (this.ba = !0, this.N())
    };
    W.prototype.N = function() {
        if (this.ua)
            for (; this.ua.length;) this.ua.shift()()
    };

    function Ff(a, b, c, d, e) {
        e = void 0 === e ? [new Af, new Bf, new Cf] : e;
        W.call(this);
        this.a = a.ya(b, c, this.T());
        this.a.Ca();
        this.c = e;
        this.b = d
    }
    t(Ff, W);
    Ff.prototype.N = function() {
        this.a && (this.a.X(), this.a.D())
    };

    function Gf(a, b, c) {
        x(a.c, function(d) {
            var e = a.b;
            if (!d.l && (d.i(b, c), d.j())) {
                d.l = !0;
                var f = d.h(),
                    g = new qf;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.m);
                d = yf.g();
                g.add("i", d.a++);
                g.add("adk", e);
                sf(g, f);
                e = new vf(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = xf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Ld(e)
            }
        })
    }
    Ff.prototype.W = function() {};
    Ff.prototype.ia = function() {};
    Ff.prototype.T = function() {
        return !1
    };

    function Hf() {
        this.a = this.b = this.c = 0
    }

    function If(a, b, c, d) {
        b && (a.c += c, a.b += c, a.a = Math.max(a.a, a.b));
        if (void 0 === d ? !b : d) a.b = 0
    };
    var Jf = [1, .75, .5, .3, 0];

    function Kf(a) {
        this.a = a = void 0 === a ? Jf : a;
        this.b = Ea(this.a, function() {
            return new Hf
        })
    }

    function Lf(a) {
        return Mf(a, function(b) {
            return b.c
        }, !1)
    }

    function Nf(a) {
        return Mf(a, function(b) {
            return b.a
        }, !0)
    }

    function Of(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.a.length; f++) {
            var h = a.a[f],
                n = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            If(a.b[f], g && n, e, !g || h)
        }
    }

    function Mf(a, b, c) {
        a = Ea(a.b, function(d) {
            return b(d)
        });
        return c ? a : Pf(a)
    }

    function Pf(a) {
        return Ea(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Qf() {
        this.a = new Kf;
        this.c = new Hf;
        this.b = -1;
        this.f = new Kf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function Rf(a) {
        return 1E3 <= a.c.a
    };
    var Sf = new H(0, 0, 0, 0);

    function X(a, b, c) {
        W.call(this);
        this.ta = Dc(Sf);
        this.b = new Qf;
        this.qa = -2;
        this.fb = -1;
        this.Na = b;
        this.Ma = null;
        this.R = -1 != b;
        this.I = null;
        this.J = -1;
        this.ea = c;
        this.gb = this.Pa = pa;
        this.a = new rd;
        this.a.b = a;
        this.a.a = a;
        this.m = !1;
        this.j = {
            Ea: null,
            Da: null
        };
        this.fa = !0;
        this.K = null;
        this.La = !1;
        O.g().l++;
        this.f = new Tc;
        this.eb = this.xa = -1;
        this.Ja = 0;
        this.ca = -1;
        this.c = null;
        this.L = new H(0, 0, 0, 0);
        this.Mb = !1;
        a = this.h = new id;
        L(a, "od", Sc);
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
        K(L(a, "osddt", J));
        (a = this.a.b) && a.getAttribute && qd(a, "googleAvInapp") && (T.g().f = !0);
        1 == this.ea ? jd(this.h, "od", 1) : jd(this.h, "od", 0)
    }
    t(X, W);
    k = X.prototype;
    k.N = function() {
        Tf(this);
        this.K && this.K.D();
        this.c && this.c.D();
        delete this.b;
        delete this.Pa;
        delete this.gb;
        delete this.a.b;
        delete this.a.a;
        delete this.j;
        delete this.K;
        delete this.c;
        delete this.h;
        W.prototype.N.call(this)
    };

    function Uf(a) {
        return a.c ? a.c.b : a.ta
    }
    k.Ba = function(a) {
        var b = O.g();
        na(a) && 0 != a.length && ld(b.a, a)
    };
    k.yb = function() {
        return !1
    };
    k.Z = function() {
        this.R = !0
    };
    k.Aa = function() {
        return this.R
    };
    k.Ya = function() {
        this.f.o = 0
    };
    k.Za = function() {
        this.b = new Qf
    };

    function Vf(a) {
        return a.c ? a.c.G() : (O.g(), "ns")
    }

    function Wf(a, b) {
        b = b.create(a.a.a, a.h, a.yb());
        if (b = null != b && b.Ca() ? b : null) a.c = b
    }

    function Xf(a, b, c) {
        if (a.c) {
            a.c.S();
            var d = a.c.h,
                e = d.i,
                f = e.a;
            if (null != d.a) {
                var g = d.f;
                a.I = new F(g.left - f.left, g.top - f.top);
                a.L = d.a
            }
            f = bf(d, a.aa());
            g = {};
            null !== e.volume && (g.volume = e.volume);
            var h = O.g().a;
            Ga(["imams", "gms"], function(n) {
                return 1 === M(h, n)
            }) || 1 === M(a.h, "osddt") ? (e = 0, a.Ma && (e = d.h - a.Ma.h), a.Ma = d, a.Ia(Uf(a), f, b, c, !1, g, e, d.b)) : a.Ia(Uf(a), f, b, c, !1, g, void 0, d.b)
        }
    }

    function Yf(a) {
        if (a.Aa() && a.K) {
            var b = 1 == M(a.h, "od"),
                c = T.g().a,
                d = a.K,
                e = Vf(a),
                f = new G(c.H(), c.F());
            c = a.aa();
            a = {
                U: e,
                I: a.I,
                cb: f,
                aa: c,
                o: a.f.o,
                Lb: b
            };
            if (b = d.a) {
                b.S();
                e = b.h;
                f = e.i.a;
                var g = null,
                    h = null;
                null != e.a && f && (g = e.f, g = new F(g.left - f.left, g.top - f.top), h = new G(f.right - f.left, f.bottom - f.top));
                c = {
                    U: b.G(),
                    I: g,
                    cb: h,
                    aa: c,
                    Lb: !1,
                    o: bf(e, c)
                }
            } else c = null;
            c && Gf(d, a, c)
        }
    }
    k.Ia = function(a, b, c, d, e, f, g, h) {
        void 0 === g ? -1 == this.Na ? f = 0 : (f = c - this.Na || 1, f = 1E4 < f ? 1 : f) : f = g;
        g = f;
        h = void 0 === h ? -1 : h;
        if (!this.m) {
            oa(b) || (this.I = new F(a.left - b.left, a.top - b.top));
            if (this.Aa()) {
                f = h;
                f = void 0 === f ? -1 : f;
                h = new Tc;
                h.f = d;
                h.b = Ie();
                oa(b) ? (h.o = Zf(this, b), h.c = f) : (h.o = Zf(this, a, b), h.c = 0 <= f ? f : h.o * U(a) / (E.screen.height * E.screen.width));
                h.a = this.ka();
                f = this.b;
                var n = this.f;
                e = e && this.f.o >= (this.ka() ? .3 : .5);
                f.b = Math.max(f.b, h.o);
                Of(f.f, h.c, n.c, h.f, g, e);
                Of(f.a, h.o, n.o, h.f, g, e);
                e = e || n.a != h.a ? n.isVisible() && h.isVisible() : n.isVisible();
                n = !h.isVisible() || h.f;
                If(f.c, e, g, n);
                this.Na = c;
                0 < h.o && (-1 === this.xa && (this.xa = c), this.eb = c); - 1 == this.fb && Rf(this.b) && (this.fb = c);
                if (-2 == this.qa) try {
                    a: {
                        var m = oa(b) ? null : b;
                        if (a && a != Sf && 0 != U(Uf(this))) {
                            var l = T.g();
                            if (!m) {
                                if (!l.a) {
                                    var q = -1;
                                    break a
                                }
                                m = new H(0, l.a.H(), l.a.F(), 0)
                            }
                            q = m.H && 0 < m.H() && m.F && 0 < m.F() ? Zf(this, a, m) : -1
                        } else q = -1
                    }
                    this.qa = q
                }
                catch (p) {
                    ne(207, p)
                }
                this.f = h;
                d && (this.f.o = 0)
            }
            this.Pa(this)
        }
    };

    function Zf(a, b, c) {
        if (0 === a.J && 1 === M(a.h, "opac")) return 0;
        if (oa(b)) return b;
        b = Ve(b, c);
        var d = 1 == M(a.h, "od");
        if (0 >= U(Uf(a)) || Ze(b, c, a.a.a, d)) return 0;
        d = U(b) / U(Uf(a));
        c = We(b, c);
        return a.aa() ? Math.max(d, c) : d
    }
    k.ka = function() {
        return !1
    };
    k.aa = function() {
        return this.Mb || this.La
    };
    k.ab = function(a, b, c) {
        if (c) this.ta = c;
        else {
            a = b ? a : a.top;
            this.ta = Dc(Sf);
            try {
                this.a.a && (this.ta = Ue(this.a.a, a))
            } catch (d) {}
        }
    };

    function $f(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function ag(a) {
        a.a.a && (a.j.Ea = S(a.a.a, "mouseover", function() {
            var b = R();
            a.ca = b
        }, 149), a.j.Da = S(a.a.a, "mouseout", function() {
            var b = R(); - 1 == a.ca || b < a.ca || (a.Ja += b - a.ca);
            a.ca = -1
        }, 150))
    }

    function Tf(a) {
        a.a.a && (a.j.Ea && (yc(a.a.a, "mouseover", a.j.Ea), a.j.Ea = null), a.j.Da && (yc(a.a.a, "mouseout", a.j.Da), a.j.Da = null))
    }

    function bg(a) {
        a.c && a.c.X()
    };

    function cg() {
        dg(this)
    }

    function dg(a) {
        !a.a && ta(E.Goog_AdSense_getAdAdapterInstance) && (a.a = Goog_AdSense_getAdAdapterInstance());
        !a.b && ta(E.Goog_Common_getAdAdapterInstance) && (a.b = Goog_Common_getAdAdapterInstance());
        !a.c && bc() && (a.c = !0)
    }

    function eg(a, b, c, d) {
        dg(a);
        var e = T.g().m;
        a.a && a.a.getNewBlocks(b, e);
        a.b && a.b.getNewBlocks(b, e);
        a.c && !c() && (d(!0), b(bc(), "", 13, !0))
    }

    function fg(a) {
        dg(a);
        return (a.a ? a.a.numBlocks() : 0) + (a.b ? a.b.numBlocks() : 0) + (a.c ? 1 : 0)
    }

    function gg(a) {
        dg(a);
        return a.a ? a.a.getOseId() : a.b ? a.b.getOseId() : 0
    };

    function hg(a) {
        return ib() ? (a = (a = ac(a)) && gc(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var ig = "StopIteration" in u ? u.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function jg() {}
    jg.prototype.next = function() {
        throw ig;
    };
    jg.prototype.hb = function() {
        return this
    };

    function kg(a) {
        if (a instanceof jg) return a;
        if ("function" == typeof a.hb) return a.hb(!1);
        if (sa(a)) {
            var b = 0,
                c = new jg;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw ig;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function lg(a, b) {
        if (sa(a)) try {
            x(a, b, void 0)
        } catch (c) {
            if (c !== ig) throw c;
        } else {
            a = kg(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== ig) throw c;
            }
        }
    }

    function mg(a, b) {
        var c = 1;
        lg(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function ng(a, b) {
        var c = kg(a);
        a = new jg;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw ig;
        };
        return a
    }

    function og(a) {
        var b = kg(a);
        a = new jg;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw ig;
        };
        return a
    };

    function pg(a, b) {
        this.c = b;
        this.b = null == a;
        this.a = a
    }
    t(pg, jg);
    pg.prototype.next = function() {
        if (this.b) throw ig;
        var a = this.a || null;
        this.b = null == a;
        var b;
        if (b = a) {
            b = this.c;
            if (pb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? hg : d;
                if (d(a)) try {
                    var e = ac(a),
                        f = e && gc(e),
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

    function qg(a) {
        var b = 1;
        a = og(new pg(a, !0));
        a = ng(a, function() {
            return 0 < b
        });
        return mg(a, function(c, d) {
            var e = 1;
            if (pb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = ac(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[lb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Fc.opacity;
                        if (!h) {
                            var n = lb();
                            h = n;
                            void 0 === d.style[n] && (n = (vb ? "Webkit" : ub ? "Moz" : C ? "ms" : sb ? "O" : null) + nb(n), void 0 !== d.style[n] && (h = n));
                            Fc.opacity = h
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

    function rg(a, b, c, d, e, f, g) {
        f = void 0 === f ? pa : f;
        g = void 0 === g ? [] : g;
        X.call(this, c, d, e);
        this.w = b;
        this.ma = this.l = 0;
        this.Fb = null;
        this.Eb = this.wb = "";
        this.xb = [];
        this.Cb = [];
        this.nb = this.Db = "";
        this.Kb = !1;
        this.s = 4;
        this.Ob = !1;
        this.da = [];
        this.M = "";
        this.Nb = this.pb = this.Jb = !1;
        this.Qb = -1;
        this.vb = "";
        this.rb = -1;
        this.B = 0;
        this.wa = -1;
        this.oa = 0;
        this.ga = this.Gb = Ie();
        this.i = 0;
        this.Rb = f;
        this.Pb = !1;
        this.ra = this.Qa = this.Ra = this.va = this.u = -1;
        this.A = {};
        this.sa = g;
        sg(this, this.a.b);
        this.w && na(this.w) && (b = this.w.match(/fa=([^&;]+)/)) && 2 == b.length && b[1] == (30).toString() && (this.La = !0);
        nd(O.g().a, this.w);
        b = T.g();
        this.ab(a, b.b)
    }
    t(rg, X);

    function tg(a, b, c) {
        return (a = String(a[b] || pd(a, c) || "")) ? a.split("|") : []
    }

    function sg(a, b) {
        if (b) {
            if (0 == a.l)
                if (a.a.b) {
                    var c = a.a.b._adk_;
                    c || (c = (c = pd(a.a.b, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.l;
            a.l = c;
            "" == a.wb && (a.wb = String(b._avi_ || ""));
            "" == a.Eb && (a.Eb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.xb.length || (a.xb = tg(b, "_avicxn_", "googleAvCxn"));
            a.Cb.length || (a.Cb = tg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.Db && (a.Db = String(b._aviextcxn_ || pd(b, "googleAvExtCxn") || ""));
            "" == a.nb && (a.nb = String(b._cid_ || ""));
            a.Kb || (a.Kb = !!b._imm_ || qd(b, "googleAvImmediate"));
            "" == a.M && (a.M = String(b._cvu_ || pd(b, "googleAvCpmav") || ""));
            a.Ba(String(b._avm_ || pd(b, "googleAvMetadata") || ""))
        }
    }
    k = rg.prototype;
    k.N = function() {
        ug(this);
        delete this.da;
        delete this.sa;
        delete this.Ka;
        delete this.na;
        X.prototype.N.call(this)
    };

    function vg(a, b, c) {
        x(a.sa, function(d) {
            return d.a(a, c, b)
        })
    }
    k.Aa = function() {
        return this.R && !(1 == this.i || 3 == this.i)
    };

    function ug(a) {
        a.Ka && yc(a.a.b, "DOMNodeRemoved", a.Ka);
        a.na && a.na.disconnect()
    }

    function wg(a) {
        a.a.b && (ug(a), a.wa = -1, u.MutationObserver ? (a.na = new u.MutationObserver(function(b, c) {
            for (var d = 0; d < b.length; d++)
                if ("childList" == b[d].type && b[d].removedNodes.length) {
                    a.wa = R();
                    c.disconnect();
                    break
                }
        }), a.na.observe(a.a.b, {
            childList: !0,
            subtree: !0
        })) : a.Ka = ze(a.a.b, function() {
            a.wa = R()
        }))
    }
    k.Ya = function() {
        X.prototype.Ya.call(this);
        this.L = new H(0, 0, 0, 0)
    };
    k.Za = function() {
        X.prototype.Za.call(this);
        this.L = new H(0, 0, 0, 0)
    };
    k.Z = function() {
        this.R || (this.Ra = Wd(), this.Qb = R(), xg(this, !1, this.qa));
        X.prototype.Z.call(this);
        yg(this)
    };

    function yg(a) {
        if (a.R && u == u.top) {
            var b = u.pageYOffset;
            null != b && (a.ra = Math.max(b, a.ra));
            vg(a, 4, {})
        }
    }

    function zg(a) {
        return new sd(a.l, a.Fb)
    }
    k.Ba = function(a) {
        if (na(a) && 0 != a.length) {
            var b = new id,
                c = O.g();
            L(b, "omid", J);
            ld(b, a);
            b = M(b, "omid");
            null !== b && (c.a.b.omid = b);
            a = ld(this.h, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.fa = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.oa = 2 : "1" == d && (this.oa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Mb = !0) : 0 == d.lastIndexOf("alp=", 0) ? this.vb = d.split("=")[1] : 0 == d.lastIndexOf("alh=", 0) ? (d = parseInt(d.split("=")[1], 10), isNaN(d) || (this.rb = d)) : "adf=1" == d && (this.Pb = !0)
            }
            this.f.a = this.ka();
            X.prototype.Ba.call(this, a)
        }
    };
    k.Ia = function(a, b, c, d, e, f) {
        f = void 0 === f ? {} : f;
        var g = Rf(this.b),
            h = Math.floor(100 * this.f.o);
        this.oa = 242500 <= (a.right - a.left) * (a.bottom - a.top) ? 1 : 2;
        X.prototype.Ia.call(this, a, b, c, d, e, f); - 1 == this.ga && -1 != this.f.b ? this.ga = this.f.b : 0 == this.ga && 1 == this.f.b && (this.ga = 1);
        oa(b) || (0 < this.f.o ? (b = Ve(a, b), this.L = 0 >= U(Uf(this)) || b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : Ec(b, -a.left, -a.top)) : this.L = new H(0, 0, 0, 0));
        a = Rf(this.b);
        b = Math.floor(100 * this.f.o);
        (!g && a || b != h) && xg(this, a, b);
        try {
            this.J = qg(this.a.a)
        } catch (n) {}
        yg(this)
    };
    k.ka = function() {
        return wb ? !1 : 1 == this.oa
    };

    function Ag(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = Bg(a);
        d && y(f, d);
        f.adk = a.l;
        a.Pb && a.ma && (f.adf = a.ma);
        d = a.m;
        var g = O.g();
        !c && d && g.b && (c = g.b);
        c && (f.r = c);
        0 === a.J && (f.invis = 1);
        c = wf(f).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = O.g().c;
        e[0] = b;
        e[7] = a.f.o;
        e[9] = Je(a.L);
        e[28] = a.ea;
        e[32] = Vf(a);
        e[5] = Rf(a.b) && 4 != a.s;
        e[13] = Nf(a.b.a).join(",");
        e[18] = 0 == U(Uf(a));
        null != a.I && (e[20] = a.I.y, e[21] = a.I.x);
        b = T.g();
        null != b.c && (e[22] = b.c.H(), e[23] = b.c.F());
        null != b.a && (e[30] = b.a.H(), e[31] = b.a.F(), e[38] = Je(b.a));
        c = b.l;
        f = Uf(a);
        e[37] = Je(new H(f.top + c.y, f.right + c.x, f.bottom + c.y, f.left + c.x));
        b.h && (b = b.h, e[39] = b.width + "-" + b.height); - 1 != a.J && (e[25] = a.J);
        if (a = zg(a)) a.b && (e[4] = a.b), a.a && (e[12] = a.a);
        return e
    }
    k.ab = function(a, b, c) {
        if (!b && (-1 != this.Qb || -1 != this.wa) && 2 != this.B && 1 != this.B && -1 != this.B && 7 != this.B) {
            var d = null;
            try {
                d = this.a.a && this.a.a.getBoundingClientRect()
            } catch (e) {}
            d && 0 != d.width && 0 != d.height || (d = Ge(a.top, this.vb, this.rb), this.B = d.status, d.a && (d.a == this.a.a ? this.B = 2 : Cg(this, d.a)))
        }
        X.prototype.ab.call(this, a, b, c)
    };

    function Bg(a) {
        var b = T.g(),
            c = kd(a.h),
            d = b.l,
            e = Uf(a);
        c.p = [e.top + d.y, e.left + d.x, e.bottom + d.y, e.right + d.x];
        d = a.b;
        c.tos = Lf(d.a);
        c.mtos = Nf(d.a);
        c.mcvt = d.c.a;
        c.rs = a.ea;
        (e = 5 == a.ea) || (c.ht = a.Ja);
        0 <= a.xa && (c.tfs = a.xa, c.tls = a.eb);
        c.mc = $f(d.b);
        c.lte = $f(a.qa);
        c.bas = a.Gb;
        c.bac = a.ga;
        b.b && (c["if"] = a.m ? 0 : 1);
        c.met = a.a.c;
        e && a.w && (c.req = encodeURIComponent(a.w).substring(0, 100));
        a.Nb && (c.ci = "1");
        a.ka() && (c.la = "1");
        a.La && (c.pa = "1");
        c.avms = Vf(a);
        a.c && y(c, a.c.O());
        0 != a.i && (c.md = a.i);
        c.lm = a.s;
        y(c, Dg(a));
        return c
    }

    function Dg(a) {
        var b = a.u;
        var c = a.u;
        c = -1 == c || a.va < c ? -1 : a.va - c;
        var d = -1 == a.u || a.Ra < a.u ? -1 : a.Ra - a.u,
            e = Eg(a),
            f = {};
        return f.rst = 0 < b ? b : void 0, f.dlt = 0 <= c ? c : void 0, f.rpt = 0 <= d ? d : void 0, f.isd = 0 <= a.Qa ? a.Qa : void 0, f.msd = 0 <= a.ra ? a.ra : void 0, f.ext = e ? e : void 0, f
    }

    function Cg(a, b) {
        ug(a);
        Tf(a);
        a.a.a = b;
        ag(a);
        sg(a, b);
        wg(a);
        a.c && (a = a.c, a.X(), a.c = b, a.Ca(), a.S())
    }

    function Eg(a) {
        return a.A && 0 < sc(a.A).length ? encodeURIComponent(Ea(sc(a.A), function(b) {
            return b + "=" + a.A[b]
        }).join("&")) : null
    }

    function Fg(a, b) {
        b && rc(b, function(c, d) {
            null == c ? delete a.A[d] : a.A[d] = c
        })
    }

    function xg(a, b, c) {
        if (b = a.Rb(b, c)) Fg(a, b), vg(a, 3, {})
    }
    k.yb = function() {
        return !1
    };

    function Gg() {}

    function Hg(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (ra(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), Hg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Ig(d, c), c.push(":"), Hg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    Ig(b, c);
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
    var Jg = {
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
        Kg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function Ig(a, b) {
        b.push('"', a.replace(Kg, function(c) {
            var d = Jg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Jg[c] = d);
            return d
        }), '"')
    };

    function Lg() {
        this.key = "goog_adspeed";
        this.c = [3, 4];
        this.b = null
    }
    Lg.prototype.a = function(a, b, c) {
        if (!Ka(this.c, c) || !td(zg(a))) return !1;
        c = {};
        c[0] = this.key;
        var d = Dg(a),
            e = [];
        Hg(new Gg, d, e);
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
        return Mg(a, {
            bb: {},
            Va: f
        })
    };

    function Ng() {
        this.key = "goog_update_data";
        this.b = 0;
        this.c = !1
    }
    Ng.prototype.a = function(a, b, c) {
        if (c != this.b || !td(zg(a))) return !1;
        c = 1 == a.s;
        var d = Rf(a.b),
            e = {},
            f = {};
        b = {
            Va: (e[0] = this.key, e),
            bb: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.c ? (this.c = d, Mg(a, b)) : !1;
        this.c = d;
        return Mg(a, b)
    };

    function Og(a) {
        Ng.call(this, a);
        this.key = "goog_image_request";
        this.b = 2
    }
    t(Og, Ng);

    function Pg(a) {
        Ng.call(this, a);
        this.key = "goog_image_request";
        this.b = 1
    }
    t(Pg, Ng);
    Pg.prototype.a = function(a, b, c) {
        var d = !a.pb;
        if (Rf(a.b) && a.fa || d) {
            if (b = Ng.prototype.a.call(this, a, b, c))
                if (Rf(a.b) || (a.pb = !0), Rf(a.b) || a.fa) a.fa = !1;
            return b
        }
        return !1
    };

    function Qg() {
        this.b = [];
        this.a = []
    }

    function Rg(a) {
        return Ia(Sg.a, function(b) {
            b = zg(b);
            return a.a || b.a ? a.a == b.a : a.b || b.b ? a.b == b.b : !1
        })
    }

    function Tg(a) {
        var b = Sg;
        return a ? Ia(b.a, function(c) {
            return c.a.b == a
        }) : null
    }

    function Ug(a) {
        return Ia(a.a, function() {
            return !1
        })
    }

    function Vg() {
        var a = Sg;
        return 0 == a.b.length ? a.a : 0 == a.a.length ? a.b : La(a.a, a.b)
    }
    Qg.prototype.reset = function() {
        this.b = [];
        this.a = []
    };

    function Wg(a, b) {
        a = a.a;
        var c = Ja(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1), bg(b), b.D(), !0) : !1
    }

    function Xg(a) {
        var b = Sg;
        if (Wg(b, a)) {
            a = function() {
                return null
            };
            a = function() {
                return Ug(b)
            };
            for (var c = a(); c; c = a()) Wg(b, c)
        }
    }
    v(Qg);
    var Sg = Qg.g();

    function Yg() {
        this.a = this.b = null
    }

    function Zg(a, b) {
        function c(d, e) {
            a.a = null;
            b(d, e)
        }
        if (null == a.b) return !1;
        a.a = Ia(a.b, function(d) {
            return null != d && d.$() && d.zb(c)
        });
        a.a && hf(a.a.a);
        return null != a.a
    }
    v(Yg);

    function $g(a, b, c, d) {
        lf.call(this, a, b, c, d)
    }
    t($g, lf);
    $g.prototype.tb = function(a) {
        return Ze(a, this.l, this.c, 1 == M(this.B, "od"))
    };
    $g.prototype.S = function() {
        var a = this.a.f;
        this.timestamp = -1 === a.time ? R() : a.time;
        this.Oa();
        this.kb();
        a = Ve(this.b, this.l);
        var b = a.top >= a.bottom || a.left >= a.right ? new H(0, 0, 0, 0) : a;
        a = this.a.f;
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.b.bottom - this.b.top) * (this.b.right - this.b.left) && (this.tb(b) ? b = new H(0, 0, 0, 0) : (c = T.g().j, e = new H(0, c.height, c.width, 0), c = We(b, this.b), d = We(b, T.g().a), e = We(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : Ec(b, -this.b.left, -this.b.top);
        this.h = new af(a, this.b, b, c, d, this.timestamp, e)
    };
    $g.prototype.G = function() {
        return this.a.G()
    };

    function ah(a) {
        a = bh(a);
        mf.call(this, a.length ? a[a.length - 1] : new V(E, 0));
        this.c = a;
        this.f = pa;
        this.b = null
    }
    t(ah, mf);
    k = ah.prototype;
    k.G = function() {
        return (this.b ? this.b : this.a).G()
    };
    k.O = function() {
        return (this.b ? this.b : this.a).O()
    };
    k.P = function() {
        return (this.b ? this.b : this.a).P()
    };
    k.zb = function(a) {
        this.f = a;
        x(this.c, function(b) {
            return b.sb()
        });
        gf(this.a, this);
        return !0
    };
    k.D = function() {
        x(this.c, function(a) {
            a.D()
        });
        mf.prototype.D.call(this)
    };
    k.$ = function() {
        return Ga(this.c, function(a) {
            return a.$()
        })
    };
    k.C = function() {
        return Ga(this.c, function(a) {
            return a.C()
        })
    };
    k.ya = function(a, b, c) {
        return new $g(a, this.a, b, c)
    };
    k.ia = function(a) {
        0 == a.P() && this.f(a.ha(), this)
    };
    k.W = function(a) {
        this.b = a.b
    };
    k.T = function() {
        return !1
    };

    function bh(a) {
        if (!a.length) return [];
        a = Da(a, function(c) {
            return null != c && c.$()
        });
        for (var b = 1; b < a.length; b++) gf(a[b - 1], a[b]);
        return a
    };

    function ch(a, b, c, d) {
        lf.call(this, a, b, c, d);
        this.s = this.m = null
    }
    t(ch, $g);
    k = ch.prototype;
    k.Ca = function() {
        var a = this;
        this.s || (this.s = R());
        if (me(298, function() {
                return a.u()
            })) return !0;
        ef(this.a, "msf");
        return !1
    };

    function dh(a, b) {
        try {
            if (b.length) {
                a.m || (a.m = R());
                var c = eh(b),
                    d = Hc(a.c, a.a.a.b),
                    e = d.x,
                    f = d.y;
                a.b = new H(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = He(c.intersectionRect);
                a.l = Ec(g, a.b.left - g.left, a.b.top - g.top)
            }
        } catch (h) {
            a.X(), ne(299, h)
        }
    }

    function eh(a) {
        return Fa(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Oa = function() {};
    k.tb = function() {
        return !1
    };
    k.kb = function() {};
    k.O = function() {
        var a = {};
        return Object.assign(this.a.O(), (a.niot_obs = this.s, a.niot_cbk = this.m, a))
    };
    var fh = {
        threshold: [0, .3, .5, .75, 1]
    };

    function gh(a, b, c, d) {
        ch.call(this, a, b, c, d);
        this.i = this.j = this.f = null
    }
    t(gh, ch);
    gh.prototype.G = function() {
        return "nio"
    };
    gh.prototype.X = function() {
        if (this.f && this.c) try {
            this.f.unobserve(this.c), this.j ? (this.j.unobserve(this.c), this.j = null) : this.i && (this.i.disconnect(), this.i = null)
        } catch (a) {}
    };

    function hh(a) {
        return a.f && a.f.takeRecords ? a.f.takeRecords() : []
    }
    gh.prototype.u = function() {
        var a = this;
        if (!this.c) return !1;
        var b = this.c,
            c = this.a.a.b,
            d = Rd().a;
        this.f = new c.IntersectionObserver(Pd(d, function(e) {
            return dh(a, e)
        }), fh);
        d = Pd(d, function() {
            a.f.unobserve(b);
            a.f.observe(b);
            dh(a, hh(a))
        });
        c.ResizeObserver ? (this.j = new c.ResizeObserver(d), this.j.observe(b)) : c.MutationObserver && (this.i = new u.MutationObserver(d), this.i.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        this.f.observe(b);
        dh(this, hh(this));
        return !0
    };
    gh.prototype.S = function() {
        var a = hh(this);
        0 < a.length && dh(this, a);
        ch.prototype.S.call(this)
    };

    function ih(a) {
        a = void 0 === a ? E : a;
        mf.call(this, new V(a, 2))
    }
    t(ih, mf);
    ih.prototype.G = function() {
        return "nio"
    };
    ih.prototype.C = function() {
        return "exc" !== (O.g(), "ns") && !T.g().f && null != this.a.a.b.IntersectionObserver
    };
    ih.prototype.ya = function(a, b, c) {
        return new gh(a, this.a, b, c)
    };

    function jh() {
        var a = kh();
        V.call(this, E.top, a, "geo")
    }
    t(jh, V);
    jh.prototype.Sa = function() {
        return T.g().a
    };
    jh.prototype.C = function() {
        var a = kh();
        this.i !== a && (this.a != this && a > this.a.i && (this.a = this, ff(this)), this.i = a);
        return 2 == a
    };

    function kh() {
        O.g();
        var a = T.g();
        return a.b || a.f ? 0 : 2
    }
    v(jh);
    var lh = {},
        mh = (lh[1] = function() {
            return new ih
        }, lh[2] = function() {
            return new ah([jh.g()])
        }, lh);

    function nh() {
        this.a = null;
        this.b = mh
    }

    function oh() {
        var a = nh.g();
        a: {
            var b = M(O.g().a, "mv");
            if (null != b && (b = a.b[b]) && (b = b()) && b.C()) break a;b = null
        }
        a.a = b
    }
    v(nh);

    function ph(a, b, c) {
        W.call(this);
        this.f = null != c ? xa(a, c) : a;
        this.c = b;
        this.b = xa(this.Zb, this);
        this.a = []
    }
    Aa(ph, W);
    k = ph.prototype;
    k.Ga = !1;
    k.V = null;
    k.mb = function(a) {
        this.a = arguments;
        this.V ? this.Ga = !0 : qh(this)
    };
    k.stop = function() {
        this.V && (u.clearTimeout(this.V), this.V = null, this.Ga = !1, this.a = [])
    };
    k.N = function() {
        ph.Ib.N.call(this);
        this.stop()
    };
    k.Zb = function() {
        this.V = null;
        this.Ga && (this.Ga = !1, qh(this))
    };

    function qh(a) {
        var b = a.b;
        var c = a.c;
        if (!ta(b))
            if (b && "function" == typeof b.handleEvent) b = xa(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        b = 2147483647 < Number(c) ? -1 : u.setTimeout(b, c || 0);
        a.V = b;
        a.f.apply(null, a.a)
    };

    function rh() {
        this.done = !1;
        this.a = {
            jb: 0,
            ib: 0,
            $a: 0,
            lb: 0,
            za: -1,
            Ub: 0,
            Tb: 0,
            Vb: 0
        };
        this.w = this.f = this.m = this.h = this.s = null;
        this.j = this.B = !1;
        this.u = "";
        this.b = null;
        this.A = 0;
        this.c = new cf(this)
    }

    function sh() {
        var a = (O.g(), "ns");
        return "nio" === a || "aio" === a || "omid" === a
    }

    function th(a, b) {
        var c = Y;
        if (!c.B) {
            c.B = !0;
            if (!c.s && !sh()) {
                var d = Q(137, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    return c.l.apply(c, r(f))
                });
                c.h = new ph(d, 100);
                c.s = S(a, "scroll", function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                    null !== c.h && c.h.mb.apply(c.h, r(f))
                }, 138)
            }
            c.m || sh() || (d = Q(140, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return c.l.apply(c, r(f))
            }), c.f = new ph(d, 100), c.m = S(a, "resize", function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                null !== c.f && c.f.mb.apply(c.f, r(f))
            }, 141));
            if (b)
                for (a = Vg(), d = 0; d < a.length; ++d) b = a[d], b.a.a && ag(b);
            uh(c, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return c.i.apply(c, r(f))
            });
            c.i()
        }
    }
    rh.prototype.l = function() {
        vh(this, Vg(), !1)
    };
    rh.prototype.Hb = function() {
        vh(this, Vg(), !1)
    };

    function wh() {
        var a = nh.g();
        null != a.a && a.a.a && hf(a.a.a);
        a = Yg.g();
        null != a.a && a.a.a ? hf(a.a.a) : Pe(T.g())
    }

    function vh(a, b, c) {
        if (!a.done)
            if (a.c.cancel(), 0 == b.length) a.j = !1;
            else {
                a.b = null;
                try {
                    wh();
                    var d = R();
                    O.g().h = d;
                    if (null != Yg.g().a)
                        for (var e = 0; e < b.length; e++) Xf(b[e], d, c);
                    for (e = 0; e < b.length; e++) Yf(b[e]);
                    a.a.$a += R() - d;
                    ++a.a.lb;
                    xh(a)
                } finally {
                    c ? x(b, function(f) {
                        return f.Ya()
                    }) : df(a.c)
                }
            }
    }

    function uh(a, b) {
        if (!a.w) {
            b = ie(142, b);
            N();
            var c;
            D.visibilityState ? c = "visibilitychange" : D.mozVisibilityState ? c = "mozvisibilitychange" : D.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && xc(D, c, b, {
                capture: !1
            }) && (a.w = b)
        }
    }
    rh.prototype.i = function() {
        var a = Se(),
            b = R();
        a ? (re || (pe = b, x(Sg.b, function(c) {
            return c.b.i(b, !c.i())
        })), re = !0) : (this.A = yh(this, b), re = !1, x(Sg.b, function(c) {
            c.Aa() && c.b.h(b)
        }));
        this.j = !0;
        vh(this, Vg(), !a)
    };

    function zh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }

    function Ah(a, b, c) {
        if (!a.b || c) {
            c = b.document;
            var d = 0 <= qe ? R() - qe : -1,
                e = R(); - 1 == a.a.za && (d = e);
            var f = T.g(),
                g = O.g(),
                h = kd(g.a),
                n = Vg();
            try {
                if (0 < n.length) {
                    var m = f.a;
                    m && (h.bs = [m.H(), m.F()]);
                    var l = f.h;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.ss = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = qe;
                h.bin = g.c;
                switch (O.g(), "ns") {
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
                h.deb = [1, a.a.jb, a.a.ib, a.a.$a, a.a.lb, a.a.za, Ce, a.c.b, a.a.Ub, a.a.Tb, a.a.Vb].join("-");
                h.tvt = yh(a, e);
                f.f && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var q = f.c;
                    h.is = [q.H(), q.F()]
                }
            } catch (bb) {
                h.error = 1
            }
            a.b = h
        }
        b = a.b;
        a = {};
        for (var p in b) a[p] = b[p];
        p = Rd();
        var w;
        if (1 == M(p.c, "prf")) {
            b = new Nd;
            m = p.a;
            l = 0; - 1 < m.a && (l = m.f.a.a() - m.a);
            b = Ub(b, 1, m.c + l);
            m = p.a;
            b = Ub(b, 5, -1 < m.a ? m.b + 1 : m.b);
            b = Ub(b, 2, p.b.a.f());
            b = Ub(b, 3, p.b.a.c());
            b = Ub(b, 4, p.b.a.b());
            p = {};
            m = new Nb;
            l = Sb(b, 1);
            l = null == l ? l : +l;
            l = null == l ? 0 : l;
            if (0 !== l && (q = l, null != q)) {
                Lb(m.a, 9);
                l = m.a;
                d = q;
                d = (q = 0 > d ? 1 : 0) ? -d : d;
                if (0 === d) Ib = 0 < 1 / d ? 0 : 2147483648, Hb = 0;
                else if (isNaN(d)) Ib = 2147483647, Hb = 4294967295;
                else if (1.7976931348623157E308 < d) Ib = (q << 31 | 2146435072) >>> 0, Hb = 0;
                else if (2.2250738585072014E-308 > d) d /= Math.pow(2, -1074), Ib = (q << 31 | d / 4294967296) >>> 0, Hb = d >>> 0;
                else {
                    e = d;
                    c = 0;
                    if (2 <= e)
                        for (; 2 <= e && 1023 > c;) c++, e /= 2;
                    else
                        for (; 1 > e && -1022 < c;) e *= 2, c--;
                    d *= Math.pow(2, -c);
                    Ib = (q << 31 | c + 1023 << 20 | 1048576 * d & 1048575) >>> 0;
                    Hb = 4503599627370496 * d >>> 0
                }
                Mb(l, Hb);
                Mb(l, Ib)
            }
            l = Tb(b, 2);
            0 !== l && null != l && Ob(m, 2, l);
            l = Tb(b, 3);
            0 !== l && null != l && Ob(m, 3, l);
            l = Tb(b, 4);
            0 !== l && null != l && Ob(m, 4, l);
            l = Tb(b, 5);
            if (0 !== l && null != l && null != l)
                if (Lb(m.a, 40), b = m.a, 0 <= l) Lb(b, l);
                else {
                    for (q = 0; 9 > q; q++) b.a.push(l & 127 | 128), l >>= 7;
                    b.a.push(1)
                }
            b = new Uint8Array(m.c + m.a.length());
            q = m.b;
            c = q.length;
            for (d = l = 0; d < c; d++) e = q[d], b.set(e, l), l += e.length;
            q = Kb(m.a);
            b.set(q, l);
            m.b = [b];
            void 0 === w && (w = 0);
            if (!Gb)
                for (Gb = {}, m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], q = 0; 5 > q; q++)
                    for (c = m.concat(l[q].split("")), Fb[q] = c, d = 0; d < c.length; d++) e = c[d], void 0 === Gb[e] && (Gb[e] = d);
            w = Fb[w];
            m = [];
            for (l = 0; l < b.length; l += 3) f = b[l], g = (q = l + 1 < b.length) ? b[l + 1] : 0, e = (c = l + 2 < b.length) ? b[l + 2] : 0, d = f >> 2, f = (f & 3) << 4 | g >> 4, g = (g & 15) << 2 | e >> 6, e &= 63, c || (e = 64, q || (g = 64)), m.push(w[d], w[f], w[g] || "", w[e] || "");
            w = (p.pf = m.join(""), p)
        } else w = {};
        y(a, w);
        return a
    }

    function Bh() {
        x(Vg(), function(a) {
            if (a.a.b) {
                var b = a.l || 0,
                    c = nh.g();
                if (b = c.a ? new Ff(c.a, a.a.a, a.h, b) : null) a.K = b
            }
        })
    }

    function Ch() {
        var a = Yg.g();
        if (null != a.a) {
            var b = a.a;
            x(Vg(), function(c) {
                return Wf(c, b)
            })
        }
    }

    function xh(a) {
        "osd" == a.u && x(Sg.a, function(b) {
            var c = {};
            vg(b, 0, (c.r = void 0, c))
        })
    }

    function yh(a, b) {
        a = a.A;
        re && (a += b - pe);
        return a
    }

    function Dh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Eh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function Fh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        je.h = "av-js";
        ee.a = .01;
        le([function(c) {
            var d = O.g(),
                e = {};
            y(c, (e.bin = d.c, e.type = "error", e), kd(d.a), Ah(a, E), b());
            if (d = xf()) e = {}, y(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function Gh(a) {
        var b = new Hh;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return a = 4 === O.g().c, [new Ng(b), new Pg(b), new Og(b)].concat(r(a ? [] : [new Lg]))
        }
    }
    v(rh);
    var Y = rh.g();

    function Hh() {}

    function Mg(a, b) {
        var c = b || {};
        b = void 0 === c.bb ? {} : c.bb;
        c = void 0 === c.Va ? {} : c.Va;
        var d = c.r,
            e = b[0],
            f = Ah(Y, I(), !1),
            g = {};
        y(g, f, b);
        b = {};
        y(b, Ag(a, e, d, g), c);
        Le(a.a.b, b, a.da);
        return !0
    };

    function Ih(a, b, c, d) {
        ch.call(this, a, b, c, d);
        this.f = function() {
            return null
        }
    }
    t(Ih, ch);
    Ih.prototype.G = function() {
        return "aio"
    };
    Ih.prototype.X = function() {
        if (this.f) try {
            this.f()
        } catch (a) {}
    };
    Ih.prototype.u = function() {
        var a = this;
        if (!this.c) return !1;
        this.f = Lc(this.a.a.b).observeIntersection(Pd(Rd().a, function(b) {
            return dh(a, b)
        }));
        return !0
    };

    function Jh(a) {
        a = void 0 === a ? E : a;
        mf.call(this, new V(a, 2))
    }
    t(Jh, mf);
    Jh.prototype.G = function() {
        return "aio"
    };
    Jh.prototype.$ = function() {
        return T.g().b && this.C()
    };
    Jh.prototype.C = function() {
        return !T.g().f && ue(this.a.a.b)
    };
    Jh.prototype.ya = function(a, b, c) {
        return new Ih(a, this.a, b, c)
    };

    function Kh() {
        V.call(this, E, 2, "iem")
    }
    t(Kh, V);
    k = Kh.prototype;
    k.Sa = function() {
        function a(p, w) {
            return !!b.b.document.elementFromPoint(p, w)
        }
        var b = this,
            c = new H(0, this.b.innerWidth || this.b.width, this.b.innerHeight || this.b.height, 0),
            d = fc(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.right - d.x),
            h = Math.floor(c.bottom - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new H(f, g, h, e);
        var n = a(g, f),
            m = a(e, h);
        if (c) h = Z(f, h, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, f)
        });
        else if (n) h = Z(f, h, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, f)
        });
        else if (m) f = Z(h, f, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, h)
        });
        else if (d) f = Z(h, f, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, h)
        });
        else {
            var l = Math.floor((e + g) / 2),
                q = Math.floor((f + h) / 2);
            if (!a(l, q)) return new H(0, 0, 0, 0);
            f = Z(q, f, function(p) {
                return a(l, p)
            });
            h = Z(q, h, function(p) {
                return a(l, p)
            });
            e = Z(l, e, function(p) {
                return a(p, q)
            });
            g = Z(l, g, function(p) {
                return a(p, q)
            })
        }
        return new H(f, g, h, e)
    };

    function Z(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    k.C = function() {
        return T.g().b && C && Db(8) && ve(this.b)
    };
    k.Wa = function() {};
    k.Xa = function() {};
    k.Ab = function() {};
    k.Bb = function() {};
    v(Kh);
    var Ua = {
        bc: "addEventListener",
        gc: "getMaxSize",
        hc: "getScreenSize",
        ic: "getState",
        jc: "getVersion",
        oc: "removeEventListener"
    };

    function Lh() {
        V.call(this, E, 2, "mraid");
        var a = this;
        this.L = 0;
        this.B = this.A = !1;
        this.m = null;
        this.l = 0;
        this.s = -1;
        this.c = null;
        var b = te(this.b);
        b && (this.c = b.Fa, this.s = b.Ha);
        this.c && !Ta(function(c) {
            return ta(a.c[c])
        }) && (this.c = null, this.s = -1);
        this.f.a = new H(0, 0, 0, 0)
    }
    t(Lh, V);
    k = Lh.prototype;
    k.C = function() {
        return null != this.c
    };
    k.ob = function() {
        var a = {};
        this.L && (a.mraid = this.L);
        this.A && (a.mlc = 1);
        this.s && (a.mtop = this.s);
        this.m && (a.mse = this.m);
        return a
    };
    k.Y = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.c[a].apply(this.c, c)
        } catch (e) {
            ne(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function Mh(a, b, c) {
        a.Y("removeEventListener", b, c)
    }
    k.sb = function() {
        var a = this;
        if (!this.w) {
            this.w = !0;
            a: switch (this.s) {
                case 0:
                case 3:
                    var b = !0;
                    break a;
                default:
                    b = !1
            }
            b ? (T.g().s = !0, this.b.document.readyState && "complete" == this.b.document.readyState ? Nh(this) : S(this.b, "load", function() {
                N().setTimeout(Q(292, function() {
                    return Nh(a)
                }), 100)
            }, 292)) : ef(this, "i")
        }
    };

    function Nh(a) {
        "loading" === a.Y("getState") ? (Oh(a), a.Y("addEventListener", "ready", Ph)) : Qh(a)
    }

    function Oh(a) {
        0 == a.l && (a.l = N().setTimeout(Q(293, function() {
            a.l = -1;
            Mh(a, "ready", Ph);
            ne(539, Error());
            a.m = "rt";
            ef(a, "w")
        }), 500))
    }

    function Qh(a) {
        a.l = -1;
        na(a.c.AFMA_LIDAR) ? (a.A = !0, Rh(a)) : (a.m = "nc", ef(a, "w"))
    }

    function Rh(a) {
        a.B = !1;
        N().setTimeout(Q(524, function() {
            a.B || (Sh(a), ne(540, Error()), a.m = "mt", ef(a, "w"))
        }), 500);
        Th(a);
        a.Y("addEventListener", a.c.AFMA_LIDAR, Uh)
    }

    function Th(a) {
        var b = 1 == M(O.g().a, "sneio"),
            c = void 0 !== a.c.AFMA_LIDAR_EXP_1,
            d = void 0 !== a.c.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.c.AFMA_LIDAR_EXP_2 = !0);
        c && (a.c.AFMA_LIDAR_EXP_1 = !b)
    }

    function Sh(a) {
        Mh(a, a.c.AFMA_LIDAR, Uh);
        a.A = !1
    }
    k.Wa = function() {
        var a = T.g(),
            b = Vh(this, "getMaxSize");
        a.a = new H(0, b.width, b.height, 0)
    };
    k.Xa = function() {
        T.g().j = Vh(this, "getScreenSize")
    };

    function Vh(a, b) {
        if ("loading" === a.Y("getState")) return new G(-1, -1);
        b = a.Y(b);
        if (!b) return new G(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new G(-1, -1) : new G(a, b)
    }
    k.D = function() {
        Sh(this);
        V.prototype.D.call(this)
    };

    function Ph() {
        try {
            var a = Lh.g();
            0 < a.l && N().clearTimeout(a.l);
            Mh(a, "ready", Ph);
            Qh(a)
        } catch (b) {
            ne(541, b)
        }
    }

    function Uh(a, b) {
        try {
            var c = Lh.g();
            c.B = !0;
            var d = a ? new H(a.y, a.x + a.width, a.y + a.height, a.x) : new H(0, 0, 0, 0);
            var e = R(),
                f = Se();
            var g = new $e(e, f, c);
            g.a = d;
            g.volume = b;
            c.W(g)
        } catch (h) {
            ne(542, h)
        }
    }
    v(Lh);

    function Wh(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };

    function Xh() {}
    v(Xh);

    function Yh() {}
    v(Yh);
    var Zh = Y.c;

    function $h() {
        this.b = null;
        this.f = this.i = this.c = this.h = !1;
        ai(this);
        Fh()
    }

    function bi() {
        if (void 0 === b) {
            var a = void 0 === a ? u : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        Xh.g();
        Kc.g().a = Jc(b);
        Yh.g();
        b = O.g();
        var c = void 0 === c ? !1 : c;
        Kc.g().a(160, c) && jd(b.a, "gtx", 1)
    }
    k = $h.prototype;
    k.$b = function(a) {
        this.h = a
    };
    k.qb = function() {
        ci(this);
        N().clearTimeout(this.b);
        this.b = null;
        qe = R();
        di(this)
    };

    function ci(a) {
        O.g().c = 1;
        if (!(0 < qe)) {
            try {
                if (!ei(a)) return;
                wh();
                fi(a)
            } catch (b) {}
            a.b = N().setTimeout(Q(129, function() {
                return ci(a)
            }), 250)
        }
    }
    k.ac = function(a, b, c, d, e, f, g, h, n) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        n = void 0 === n ? -1 : n;
        if (zh(E)) {
            var l = new rg(E, b, a, -1, c, g);
            l.sa = Gh(l.s);
            e = O.g();
            wg(l);
            0 < h && -1 == l.u && (l.u = h);
            0 <= n && (l.Qa = n);
            l.Pa = function(q) {
                for (var p = [], w = 0; w < arguments.length; ++w) p[w] = arguments[w];
                return m.Wb.apply(m, r(p))
            };
            l.gb = function(q) {
                for (var p = [], w = 0; w < arguments.length; ++w) p[w] = arguments[w];
                return m.Ta.apply(m, r(p))
            };
            13 != c && (l.l = Dh(b), l.Fb = Wh(b), l.ma = Eh(b));
            f && (l.Nb = !0);
            jd(e.a, "oseid", gg(this.a));
            Sg.a.push(l);
            ++Y.a.ib;
            e.b ? this.Ta(l, e.b) : ((b = Yg.g().a) && Wf(l, b), di(this), e.b || (b = M(e.a, "sel"), 1 == b ? jd(l.h, "sela", d ? 1 : 0) : (2 == b && (d = qd(a, "loadComplete")), d ? (gi(l), l.Z()) : a && ye(a, function() {
                l.ja() || (gi(l), l.Z())
            }), Y.j || Y.i())))
        }
    };

    function fi(a) {
        hi(a);
        eg(a.a, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.ac.apply(a, r(c))
        }, function() {
            return a.h
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.$b.apply(a, r(c))
        })
    }

    function ii(a) {
        O.g();
        var b = [Kh.g(), Lh.g()],
            c = [jh.g()];
        return [new ah(b), new ih(a), new Jh(a), new ah(c)]
    }

    function di(a) {
        if (!a.f) {
            a.f = !0;
            try {
                var b = I(),
                    c = T.g(),
                    d = O.g();
                d.f = 947190542;
                if (ei(a)) {
                    Y.a.jb = fg(a.a);
                    c.m = !0;
                    fi(a);
                    var e;
                    (e = T.g().f || z(A, "CrKey") || z(A, "PlayStation") || z(A, "Roku") || Me() || z(A, "Xbox") || Ne() || Oe()) || (N(), e = 0 !== xd());
                    if (e) {
                        d.i = R();
                        var f = Yg.g();
                        if (null == f.b) {
                            var g = ii(b);
                            f.b = g
                        }
                        Zg(f, function(h) {
                            return ji(a, h)
                        }) ? Y.done || (Ch(), oh(), Bh(), ki(a), Nc()) : ji(a, "i")
                    } else ji(a, "pv")
                } else li(a, "c")
            } catch (h) {
                throw ji(a, "x"), Sg.reset(), h;
            }
        }
    }

    function ki(a) {
        if (-1 == Y.a.za) {
            var b = I(),
                c = 2 == gg(a.a);
            th(b, c);
            N().setTimeout(Q(131, function() {
                li(a, "t")
            }), 36E5);
            Y.a.za = R() - qe
        }
    }

    function ji(a, b) {
        O.g().b = b;
        for (var c = ba(Sg.a), d = c.next(); !d.done; d = c.next()) d.value.m = !0;
        li(a, b, !1)
    }

    function li(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Zh.cancel();
            a.a || (a.a = new cg);
            if (2 == gg(a.a) || a.c)
                for (a = Sg.a, c && 0 < a.length && vh(Y, a, !0), c = ba(a), a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    vg(a, 1, (d.r = b, d));
                    bg(a)
                }
            Y.done = !0
        }
    }

    function ei(a) {
        if (!zh(I())) return !1;
        var b = new cg;
        if (!(b.a || b.b || b.c)) return !1;
        a.a = b;
        return !0
    }
    k.Ta = function(a, b) {
        a.m = !0;
        var c = {};
        vg(a, 2, (c.r = b, c));
        bg(a)
    };
    k.Wb = function(a) {
        if (a && Rf(a.b) && (0 >= U(Uf(a)) ? 0 : null != a.M && null != a.M.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i) && !a.Jb)) {
            var b = a.M;
            if (Ac()) zc(window, b, !0);
            else {
                var c = u.document;
                if (c.body) {
                    var d = c.getElementById("goog-srcless-iframe");
                    d || (d = ic((new $b(c)).a, "IFRAME"), d.style.display = "none", d.id = "goog-srcless-iframe", c.body.appendChild(d));
                    c = d
                } else c = null;
                c && c.contentWindow && zc(c.contentWindow, b, !0)
            }
            a.Jb = !0
        }
    };

    function mi(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if (na(c)) {
                var d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e],
                        g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 26:
                            case 15:
                            case 8:
                            case 11:
                            case 16:
                            case 5:
                            case 18:
                                f = "true" == f;
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
                                f = Number(f);
                                break;
                            case 19:
                            case 3:
                                if (ta(decodeURIComponent)) try {
                                    f = decodeURIComponent(f)
                                } catch (n) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            } else d = null;
            if (c = d)
                if (e = c[0], Ka("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_av_measurement_hold_update goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Rg(new sd(c[4], c[12]))))
                    if (0 < c[33] && -1 == d.va && (d.va = c[33]), "goog_stop_monitoring" === e) Xg(d);
                    else if (h = c[26], void 0 !== h && (h = h ? 1 : 2, d.i == h || 2 == d.i || 1 == d.i && 3 == h || (d.i = h, 1 != d.i && 3 != d.i || d.Za())), (c[35] || "goog_creative_loaded" === e) && d.Z(), Ka(d.da, b.source) || d.da.push(b.source), "goog_request_monitoring" === e || !d.Ob)
                if (d.Ob = !0, void 0 !== c[16] && (d.fa = !!c[16]), c[19] && d.Ba(c[19]), void 0 !== c[6]) {
                    b = c[6];
                    c = ni(b, d.s);
                    if (c != d.s) {
                        if (5 == c) {
                            d.m = !0;
                            Xg(d);
                            return
                        }
                        d.s = c;
                        d.sa = Gh(c)
                    }
                    4 == b && d.Z();
                    b = T.g();
                    c = Ag(d, "goog_acknowledge_monitoring");
                    c[8] = b.b;
                    c[36] = b.u;
                    Le(d.a.b, c, d.da);
                    b = O.g();
                    d.m && b.b ? (a.Ta(d, b.b), Xg(d)) : a.c = !0
                }
        }
    }

    function gi(a) {
        if (a && td(zg(a))) {
            var b = Ag(a, "goog_get_mode");
            Le(a.a.b, b)
        }
    }

    function hi(a) {
        if (!a.i) {
            S(E, "message", function(c) {
                return mi(a, c)
            }, 132);
            var b = oi().contentWindow;
            b && S(b, "message", function(c) {
                return mi(a, c)
            }, 132);
            a.i = !0
        }
    }

    function pi(a) {
        S(I(), "unload", function() {
            li(a, "u")
        }, 133)
    }

    function ni(a, b) {
        return Ia([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Xb = function(a, b) {
        b = void 0 === b ? !1 : b;
        if (a = Tg(a)) {
            var c = I();
            bg(a);
            try {
                var d = a.a.b;
                if (null != d.contentWindow && 3 == a.ea) {
                    switch (a.s) {
                        case 2:
                        case 4:
                            break;
                        default:
                            return
                    }
                    var e = Bg(a);
                    e.adk = a.l;
                    e.adf = a.ma;
                    0 === a.J && (e.invis = 1);
                    e.r = "ac";
                    var f = Ah(Y, c, !1);
                    y(e, f);
                    if (b) b = {}, vg(a, 1, (b.r = "ac", b));
                    else try {
                        c.google_image_requests || (c.google_image_requests = []), d.contentWindow.osdsir(c, e, a.m || 0 >= U(Uf(a)) ? 2 : Rf(a.b) ? 4 : 3)
                    } catch (g) {}
                }
            } finally {
                Xg(a)
            }
        }
    };
    k.Yb = function(a, b) {
        a && b && ua(a) && 1 == a.nodeType && ua(b) && 1 == b.nodeType && (a = Tg(a)) && Cg(a, b, I())
    };

    function oi() {
        var a = hc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        E.document.body.appendChild(a);
        return a
    }

    function ai(a) {
        za("Goog_Osd_UnloadAdBlock", Q(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Xb.apply(a, r(c))
        }));
        za("Goog_Osd_UpdateElementToMeasure", Q(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Yb.apply(a, r(c))
        }))
    };
    me(155, function() {
        bi();
        var a = new $h;
        Y.u = "osd";
        pi(a);
        Oc() ? a.qb() : (ci(a), S(I(), "load", function() {
            N().setTimeout(Q(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return a.qb.apply(a, r(c))
            }), 100)
        }, 154))
    });
}).call(this, this, this.document);