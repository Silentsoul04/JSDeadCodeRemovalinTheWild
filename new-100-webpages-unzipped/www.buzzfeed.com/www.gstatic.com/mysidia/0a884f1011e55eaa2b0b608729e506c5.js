(function() {
    'use strict';
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

    function q(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    var ba = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ca;
    if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
    else {
        var da;
        a: {
            var ea = {
                    Ra: !0
                },
                ha = {};
            try {
                ha.__proto__ = ea;
                da = ha.Ra;
                break a
            } catch (a) {}
            da = !1
        }
        ca = da ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ia = ca;

    function ka(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (ia) ia(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.L = b.prototype
    }
    var la = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ma = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        };

    function na(a, b) {
        if (b) {
            var c = la;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ma(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    na("Promise", function(a) {
        function b(g) {
            this.g = 0;
            this.h = void 0;
            this.b = [];
            var h = this.j();
            try {
                g(h.resolve, h.reject)
            } catch (m) {
                h.reject(m)
            }
        }

        function c() {
            this.b = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.g = function(g) {
            if (null == this.b) {
                this.b = [];
                var h = this;
                this.h(function() {
                    h.v()
                })
            }
            this.b.push(g)
        };
        var e = la.setTimeout;
        c.prototype.h = function(g) {
            e(g, 0)
        };
        c.prototype.v = function() {
            for (; this.b && this.b.length;) {
                var g = this.b;
                this.b = [];
                for (var h = 0; h < g.length; ++h) {
                    var m =
                        g[h];
                    g[h] = null;
                    try {
                        m()
                    } catch (l) {
                        this.j(l)
                    }
                }
            }
            this.b = null
        };
        c.prototype.j = function(g) {
            this.h(function() {
                throw g;
            })
        };
        b.prototype.j = function() {
            function g(l) {
                return function(n) {
                    m || (m = !0, l.call(h, n))
                }
            }
            var h = this,
                m = !1;
            return {
                resolve: g(this.F),
                reject: g(this.v)
            }
        };
        b.prototype.F = function(g) {
            if (g === this) this.v(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.G(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.C(g) : this.w(g)
            }
        };
        b.prototype.C = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (m) {
                this.v(m);
                return
            }
            "function" == typeof h ? this.K(h, g) : this.w(g)
        };
        b.prototype.v = function(g) {
            this.A(2, g)
        };
        b.prototype.w = function(g) {
            this.A(1, g)
        };
        b.prototype.A = function(g, h) {
            if (0 != this.g) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.g);
            this.g = g;
            this.h = h;
            this.B()
        };
        b.prototype.B = function() {
            if (null != this.b) {
                for (var g = 0; g < this.b.length; ++g) f.g(this.b[g]);
                this.b = null
            }
        };
        var f = new c;
        b.prototype.G = function(g) {
            var h = this.j();
            g.fa(h.resolve, h.reject)
        };
        b.prototype.K = function(g, h) {
            var m = this.j();
            try {
                g.call(h, m.resolve, m.reject)
            } catch (l) {
                m.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function m(r, z) {
                return "function" == typeof r ? function(A) {
                    try {
                        l(r(A))
                    } catch (w) {
                        n(w)
                    }
                } : z
            }
            var l, n, p = new b(function(r, z) {
                l = r;
                n = z
            });
            this.fa(m(g, l), m(h, n));
            return p
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.fa = function(g, h) {
            function m() {
                switch (l.g) {
                    case 1:
                        g(l.h);
                        break;
                    case 2:
                        h(l.h);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            l.g);
                }
            }
            var l = this;
            null == this.b ? f.g(m) : this.b.push(m)
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, m) {
                m(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, m) {
                for (var l = q(g), n = l.next(); !n.done; n = l.next()) d(n.value).fa(h, m)
            })
        };
        b.all = function(g) {
            var h = q(g),
                m = h.next();
            return m.done ? d([]) : new b(function(l, n) {
                function p(A) {
                    return function(w) {
                        r[A] = w;
                        z--;
                        0 == z && l(r)
                    }
                }
                var r = [],
                    z = 0;
                do r.push(void 0), z++, d(m.value).fa(p(r.length - 1), n), m = h.next(); while (!m.done)
            })
        };
        return b
    });

    function oa() {
        oa = function() {};
        la.Symbol || (la.Symbol = pa)
    }

    function qa(a, b) {
        this.b = a;
        ma(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
    qa.prototype.toString = function() {
        return this.b
    };
    var pa = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new qa("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }();

    function ra() {
        oa();
        var a = la.Symbol.iterator;
        a || (a = la.Symbol.iterator = la.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ma(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return sa(aa(this))
            }
        });
        ra = function() {}
    }

    function sa(a) {
        ra();
        a = {
            next: a
        };
        a[la.Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ta() {
        this.v = !1;
        this.g = null;
        this.h = void 0;
        this.b = 1;
        this.A = 0;
        this.j = null
    }

    function ua(a) {
        if (a.v) throw new TypeError("Generator is already running");
        a.v = !0
    }
    ta.prototype.w = function(a) {
        this.h = a
    };

    function va(a, b) {
        a.j = {
            Va: b,
            Ya: !0
        };
        a.b = a.A
    }
    ta.prototype.return = function(a) {
        this.j = {
            return: a
        };
        this.b = this.A
    };

    function wa(a, b) {
        a.b = 2;
        return {
            value: b
        }
    }

    function xa(a) {
        this.b = new ta;
        this.g = a
    }

    function ya(a, b) {
        ua(a.b);
        var c = a.b.g;
        if (c) return za(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.b.return);
        a.b.return(b);
        return Aa(a)
    }

    function za(a, b, c, d) {
        try {
            var e = b.call(a.b.g, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.b.v = !1, e;
            var f = e.value
        } catch (g) {
            return a.b.g = null, va(a.b, g), Aa(a)
        }
        a.b.g = null;
        d.call(a.b, f);
        return Aa(a)
    }

    function Aa(a) {
        for (; a.b.b;) try {
            var b = a.g(a.b);
            if (b) return a.b.v = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.b.h = void 0, va(a.b, c)
        }
        a.b.v = !1;
        if (a.b.j) {
            b = a.b.j;
            a.b.j = null;
            if (b.Ya) throw b.Va;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }

    function Ba(a) {
        this.next = function(b) {
            ua(a.b);
            a.b.g ? b = za(a, a.b.g.next, b, a.b.w) : (a.b.w(b), b = Aa(a));
            return b
        };
        this.throw = function(b) {
            ua(a.b);
            a.b.g ? b = za(a, a.b.g["throw"], b, a.b.w) : (va(a.b, b), b = Aa(a));
            return b
        };
        this.return = function(b) {
            return ya(a, b)
        };
        ra();
        this[Symbol.iterator] = function() {
            return this
        }
    }

    function Ca(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    }

    function Da(a) {
        return Ca(new Ba(new xa(a)))
    }
    var Ea = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    na("Object.assign", function(a) {
        return a || Ea
    });
    na("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    na("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    na("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    na("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    var t = this || self;

    function Fa(a) {
        return "string" == typeof a
    }

    function Ga(a) {
        return "number" == typeof a
    }

    function u(a, b, c) {
        a = a.split(".");
        c = c || t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    var Ha = /^[\w+/_-]+[=]{0,2}$/,
        Ia = null;

    function Ja() {}

    function Ka(a) {
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

    function x(a) {
        return "array" == Ka(a)
    }

    function La(a) {
        return "function" == Ka(a)
    }

    function Ma(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var Na = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Pa = 0;

    function Qa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ra(a, b, c) {
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

    function y(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? y = Qa : y = Ra;
        return y.apply(null, arguments)
    }

    function Sa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    var B = Date.now || function() {
        return +new Date
    };

    function C(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.L = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Ta;
    var Ua = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Va = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Wa = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Xa = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Ya = Array.prototype.some ? function(a, b) {
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d =
                    "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function Za(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function $a(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function ab() {
        return null
    };

    function bb(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function cb(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    }

    function db(a) {
        for (var b in a) return !1;
        return !0
    }

    function eb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    }
    var fb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function gb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < fb.length; f++) c = fb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };

    function ib(a, b) {
        this.h = a === jb && b || "";
        this.j = kb
    }
    ib.prototype.g = !0;
    ib.prototype.b = function() {
        return this.h.toString()
    };

    function lb(a) {
        if (a instanceof ib && a.constructor === ib && a.j === kb) return a.h;
        Ka(a);
        return "type_error:TrustedResourceUrl"
    }
    var kb = {},
        jb = {};

    function D(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }

    function nb(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    }

    function ob(a) {
        return /^[\s\xa0]*$/.test(a)
    }
    var pb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        qb = /&/g,
        rb = /</g,
        sb = />/g,
        tb = /"/g,
        ub = /'/g,
        vb = /\x00/g,
        wb = /[\x00&<>"']/;

    function xb(a, b) {
        var c = 0;
        a = pb(String(a)).split(".");
        b = pb(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = yb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || yb(0 == f[2].length, 0 == g[2].length) || yb(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function yb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function E(a, b) {
        this.h = a === zb && b || "";
        this.j = Ab
    }
    E.prototype.g = !0;
    E.prototype.b = function() {
        return this.h.toString()
    };

    function Bb(a) {
        if (a instanceof E && a.constructor === E && a.j === Ab) return a.h;
        Ka(a);
        return "type_error:SafeUrl"
    }

    function Db(a) {
        var b = String(a.substr(0, 4)).toLowerCase();
        0 == ("tel:" < b ? -1 : "tel:" == b ? 0 : 1) || (a = "about:invalid#zClosurez");
        return new E(zb, a)
    }
    var Eb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Fb(a) {
        if (a instanceof E) return a;
        a = "object" == typeof a && a.g ? a.b() : String(a);
        Eb.test(a) || (a = "about:invalid#zClosurez");
        return new E(zb, a)
    }
    var Ab = {},
        zb = {};
    var F;
    a: {
        var Gb = t.navigator;
        if (Gb) {
            var Hb = Gb.userAgent;
            if (Hb) {
                F = Hb;
                break a
            }
        }
        F = ""
    }

    function G(a) {
        return -1 != F.indexOf(a)
    };

    function Ib() {
        return G("Firefox") || G("FxiOS")
    }

    function Jb() {
        return (G("Chrome") || G("CriOS")) && !G("Edge")
    };

    function Kb(a, b) {
        b = b instanceof E ? b : Fb(b);
        a.href = Bb(b)
    };

    function Lb(a) {
        return encodeURIComponent(String(a))
    }

    function Mb(a) {
        return decodeURIComponent(a.replace(/\+/g, " "))
    }

    function Nb(a) {
        return null == a ? "" : String(a)
    }

    function Ob(a) {
        return Array.prototype.join.call(arguments, "")
    }

    function H() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ B()).toString(36)
    }

    function Pb(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    };

    function Qb() {
        return G("iPhone") && !G("iPod") && !G("iPad")
    };

    function Rb(a) {
        Rb[" "](a);
        return a
    }
    Rb[" "] = Ja;

    function Sb(a, b) {
        try {
            return Rb(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Tb = G("Opera"),
        Ub = G("Trident") || G("MSIE"),
        Vb = G("Edge"),
        Wb = G("Gecko") && !(-1 != F.toLowerCase().indexOf("webkit") && !G("Edge")) && !(G("Trident") || G("MSIE")) && !G("Edge"),
        Xb = -1 != F.toLowerCase().indexOf("webkit") && !G("Edge"),
        Yb = G("Macintosh"),
        Zb = G("Windows"),
        $b = G("Android"),
        ac = Qb(),
        bc = G("iPad"),
        cc = G("iPod");

    function dc() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var ec;
    a: {
        var fc = "",
            gc = function() {
                var a = F;
                if (Wb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Vb) return /Edge\/([\d\.]+)/.exec(a);
                if (Ub) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Xb) return /WebKit\/(\S+)/.exec(a);
                if (Tb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();gc && (fc = gc ? gc[1] : "");
        if (Ub) {
            var hc = dc();
            if (null != hc && hc > parseFloat(fc)) {
                ec = String(hc);
                break a
            }
        }
        ec = fc
    }
    var ic = ec,
        jc = {},
        kc;
    kc = t.document && Ub ? dc() : void 0;
    var lc = Ib(),
        mc = Qb() || G("iPod"),
        nc = G("iPad"),
        pc = G("Android") && !(Jb() || Ib() || G("Opera") || G("Silk")),
        qc = Jb(),
        rc = G("Safari") && !(Jb() || G("Coast") || G("Opera") || G("Edge") || G("Edg/") || G("OPR") || Ib() || G("Silk") || G("Android")) && !(Qb() || G("iPad") || G("iPod"));

    function sc() {}
    var tc = "function" == typeof Uint8Array;

    function uc(a, b, c) {
        a.g = null;
        b || (b = []);
        a.A = void 0;
        a.j = -1;
        a.b = b;
        a: {
            if (b = a.b.length) {
                --b;
                var d = a.b[b];
                if (!(null === d || "object" != typeof d || x(d) || tc && d instanceof Uint8Array)) {
                    a.v = b - a.j;
                    a.h = d;
                    break a
                }
            }
            a.v = Number.MAX_VALUE
        }
        a.w = {};
        if (c)
            for (b = 0; b < c.length; b++)
                if (d = c[b], d < a.v) d += a.j, a.b[d] = a.b[d] || vc;
                else {
                    var e = a.v + a.j;
                    a.b[e] || (a.h = a.b[e] = {});
                    a.h[d] = a.h[d] || vc
                }
    }
    var vc = [];

    function wc(a, b) {
        if (b < a.v) {
            b += a.j;
            var c = a.b[b];
            return c === vc ? a.b[b] = [] : c
        }
        if (a.h) return c = a.h[b], c === vc ? a.h[b] = [] : c
    }

    function xc(a, b, c) {
        a = wc(a, b);
        return null == a ? c : a
    }

    function yc(a, b) {
        a = wc(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function zc(a, b, c) {
        a.g || (a.g = {});
        if (!a.g[c]) {
            var d = wc(a, c);
            d && (a.g[c] = new b(d))
        }
        return a.g[c]
    }

    function Ac(a) {
        if (a.g)
            for (var b in a.g) {
                var c = a.g[b];
                if (x(c))
                    for (var d = 0; d < c.length; d++) c[d] && Bc(c[d]);
                else c && Bc(c)
            }
    }

    function Bc(a) {
        Ac(a);
        return a.b
    }
    sc.prototype.toString = function() {
        Ac(this);
        return this.b.toString()
    };

    function Cc(a) {
        uc(this, a, Dc)
    }
    C(Cc, sc);
    var Dc = [3];

    function Ec() {
        var a = Fc();
        return yc(a, 5)
    }

    function Gc() {
        var a = Fc();
        return yc(a, 7)
    }

    function Hc() {
        var a = Fc();
        return yc(a, 8)
    }

    function Ic() {
        var a = Fc();
        return xc(a, 9, "")
    };

    function Jc(a) {
        uc(this, a, Kc)
    }
    C(Jc, sc);
    var Kc = [17];

    function Lc(a) {
        uc(this, a, Mc)
    }
    C(Lc, sc);
    var Mc = [27];

    function Nc(a) {
        uc(this, a, Oc)
    }
    C(Nc, sc);
    var Oc = [8];
    var Pc = document,
        I = window;

    function Qc(a, b) {
        this.width = a;
        this.height = b
    }
    Qc.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    Qc.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Qc.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Qc.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Rc(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Sc(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }

    function Tc(a) {
        this.b = a || t.document || document
    };

    function Uc(a) {
        Vc();
        return new ib(jb, a, null)
    }
    var Vc = Ja;

    function Wc(a, b, c, d, e, f, g) {
        var h = "";
        a && (h += a + ":");
        c && (h += "//", b && (h += b + "@"), h += c, d && (h += ":" + d));
        e && (h += e);
        f && (h += "?" + f);
        g && (h += "#" + g);
        return h
    }
    var Xc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Yc(a) {
        return a ? decodeURI(a) : a
    }

    function J(a, b) {
        return b.match(Xc)[a] || null
    }

    function Zc(a) {
        return Yc(J(3, a))
    }

    function $c(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("="),
                    e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else f = a[c];
                b(f, e ? Mb(e) : "")
            }
        }
    }

    function ad(a) {
        var b = a.indexOf("#");
        0 > b && (b = a.length);
        var c = a.indexOf("?");
        if (0 > c || c > b) {
            c = b;
            var d = ""
        } else d = a.substring(c + 1, b);
        return [a.substr(0, c), d, a.substr(b)]
    }

    function bd(a, b) {
        return b ? a ? a + "&" + b : b : a
    }

    function cd(a, b) {
        if (!b) return a;
        a = ad(a);
        a[1] = bd(a[1], b);
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function dd(a, b, c) {
        if (x(b))
            for (var d = 0; d < b.length; d++) dd(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + Lb(b)))
    }

    function ed(a, b) {
        var c = [];
        for (b = b || 0; b < a.length; b += 2) dd(a[b], a[b + 1], c);
        return c.join("&")
    }

    function fd(a) {
        var b = [],
            c;
        for (c in a) dd(c, a[c], b);
        return b.join("&")
    }

    function gd(a, b) {
        var c = 2 == arguments.length ? ed(arguments[1], 0) : ed(arguments, 1);
        return cd(a, c)
    }

    function hd(a, b) {
        b = fd(b);
        return cd(a, b)
    }

    function id(a, b, c) {
        c = null != c ? "=" + Lb(c) : "";
        return cd(a, b + c)
    }

    function jd(a, b, c, d) {
        for (var e = c.length; 0 <= (b = a.indexOf(c, b)) && b < d;) {
            var f = a.charCodeAt(b - 1);
            if (38 == f || 63 == f)
                if (f = a.charCodeAt(b + e), !f || 61 == f || 38 == f || 35 == f) return b;
            b += e + 1
        }
        return -1
    }
    var kd = /#|$/;

    function K(a, b) {
        var c = a.search(kd),
            d = jd(a, 0, b, c);
        if (0 > d) return null;
        var e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return Mb(a.substr(d, e - d))
    }
    var ld = /[?&]($|#)/;

    function M(a, b, c) {
        for (var d = a.search(kd), e = 0, f, g = []; 0 <= (f = jd(a, e, b, d));) g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
        g.push(a.substr(e));
        a = g.join("").replace(ld, "$1");
        return id(a, b, c)
    }

    function md(a, b) {
        a = ad(a);
        var c = a[1],
            d = [];
        c && Va(c.split("&"), function(e) {
            var f = e.indexOf("=");
            b.hasOwnProperty(0 <= f ? e.substr(0, f) : e) || d.push(e)
        });
        a[1] = bd(d.join("&"), fd(b));
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    };

    function nd() {
        var a = od;
        try {
            return !!a && null != a.location.href && Sb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function pd(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    };

    function qd(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };

    function rd(a, b) {
        a.src = lb(b);
        if (null === Ia) a: {
            b = t.document;
            if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && Ha.test(b)) {
                Ia = b;
                break a
            }
            Ia = ""
        }(b = Ia) && a.setAttribute("nonce", b)
    }

    function sd(a, b) {
        "about:invalid#zClosurez" === (a instanceof E ? a : Fb(a)).b() && b(String(a))
    }

    function td(a) {
        var b = (ud() ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/gen_204";
        return function(c) {
            c = hd(b, {
                id: "unsafeurl",
                ctx: a,
                url: c
            });
            navigator.sendBeacon && navigator.sendBeacon(c, "")
        }
    };

    function vd(a, b) {
        var c = void 0 === c ? document : c;
        var d = Rc((c ? new Tc(9 == c.nodeType ? c : c.ownerDocument || c.document) : Ta || (Ta = new Tc)).b, "SCRIPT");
        d.type = "text/javascript";
        b && (void 0 !== d.onreadystatechange ? d.onreadystatechange = function() {
            if ("complete" == d.readyState || "loaded" == d.readyState) try {
                b()
            } catch (f) {}
        } : d.onload = b);
        rd(d, Uc(a));
        var e = c.getElementsByTagName("head")[0];
        if (e) try {
            t.setTimeout(function() {
                e.appendChild(d)
            }, 0)
        } catch (f) {}
    }

    function ud() {
        var a = void 0 === a ? I : a;
        return "http:" === a.location.protocol
    }
    var wd = !!window.google_async_iframe_id,
        od = wd && window.parent || window;

    function xd() {
        this.h = "&";
        this.g = {};
        this.j = 0;
        this.b = []
    }

    function yd(a, b, c, d, e) {
        var f = [];
        pd(a, function(g, h) {
            (g = zd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function zd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(zd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(yd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ad(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Bd(a) - c.length;
        if (0 > d) return "";
        a.b.sort(function(n, p) {
            return n - p
        });
        c = null;
        for (var e = "", f = 0; f < a.b.length; f++)
            for (var g = a.b[f], h = a.g[g], m = 0; m < h.length; m++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var l = yd(h[m], a.h, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        b += l;
                        e = a.h;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Bd(a) {
        var b = 1,
            c;
        for (c in a.g) b = c.length > b ? c.length : b;
        return 3997 - b - a.h.length - 1
    };

    function Cd(a, b) {
        var c = Dd;
        if (1 > c.b) try {
            if (b instanceof xd) var d = b;
            else d = new xd, pd(b, function(f, g) {
                var h = d,
                    m = h.j++,
                    l = {};
                l[g] = f;
                f = [l];
                h.b.push(m);
                h.g[m] = f
            });
            var e = Ad(d, c.g, "/pagead/gen_204?id=" + a + "&");
            e && qd(t, e)
        } catch (f) {}
    };
    var Ed = null;

    function Fd(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Gd = t.performance,
        Hd = !!(Gd && Gd.mark && Gd.measure && Gd.clearMarks),
        Id = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a;
            if (a = Hd) {
                var b;
                if (null === Ed) {
                    Ed = "";
                    try {
                        a = "";
                        try {
                            a = t.top.location.hash
                        } catch (c) {
                            a = t.location.hash
                        }
                        a && (Ed = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Ed;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Jd() {
        var a = Kd;
        this.b = [];
        this.h = a || t;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = Id() || (null != b ? b : 1 > Math.random())
    }

    function Ld(a) {
        a && Gd && Id() && (Gd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Gd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Jd.prototype.start = function(a, b) {
        if (!this.g) return null;
        var c = void 0 === c ? t : c;
        c = c.performance;
        (c = c && c.now ? c.now() : null) || (c = (c = t.performance) && c.now && c.timing ? Math.floor(c.now() + c.timing.navigationStart) : B());
        a = new Fd(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Gd && Id() && Gd.mark(b);
        return a
    };
    var Dd;
    if (wd && !nd()) {
        var Md = "." + Pc.domain;
        try {
            for (; 2 < Md.split(".").length && !nd();) Pc.domain = Md = Md.substr(Md.indexOf(".") + 1), od = window.parent
        } catch (a) {}
        nd() || (od = window)
    }
    var Kd = od,
        Nd = new Jd;

    function Od() {
        Kd.google_measure_js_timing || (Nd.g = !1, Nd.b != Nd.h.google_js_reporting_queue && (Id() && Va(Nd.b, Ld), Nd.b.length = 0))
    }
    Dd = new function() {
        this.g = ud() ? "http:" : "https:";
        this.b = Math.random()
    };
    "number" !== typeof Kd.google_srt && (Kd.google_srt = Math.random());
    var Pd = Dd,
        Qd = Kd.google_srt;
    0 <= Qd && 1 >= Qd && (Pd.b = Qd);
    if ("complete" == Kd.document.readyState) Od();
    else if (Nd.g) {
        var Rd = function() {
                Od()
            },
            Sd = Kd;
        Sd.addEventListener && Sd.addEventListener("load", Rd, !1)
    };

    function Td(a, b) {
        this.j = b;
        this.h = null;
        this.g = "";
        this.b = "1";
        vd(a, y(this.v, this))
    }
    Td.prototype.v = function() {
        this.b = null;
        if (window.botguard)
            if (window.botguard.bg) try {
                this.h = new window.botguard.bg(this.j)
            } catch (a) {
                this.b = "5"
            } else this.b = "3";
            else this.b = "2"
    };

    function Ud(a) {
        if (a.b) return "";
        if (!a.h.invoke) return a.b = "4", "";
        try {
            var b = a.h.invoke()
        } catch (c) {
            return a.b = "6", ""
        }
        return b && b.length ? b : (a.b = "6", "")
    };

    function Vd(a) {
        var b = Wd;
        return function() {
            var c = this || t;
            c = c.closure_memoize_cache_ || (c.closure_memoize_cache_ = {});
            var d = b(a[Na] || (a[Na] = ++Pa), arguments);
            return c.hasOwnProperty(d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    }

    function Wd(a, b) {
        a = [a];
        for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
        return a.join("\x0B")
    };

    function Xd(a, b, c) {
        if (!c && !b) return a;
        if (!c) {
            c = id(a, "bg", b);
            if (2E3 >= c.length) return c;
            c = "9"
        }
        "8" != c && "9" != c || Yd(b);
        return id(a, "bg", c)
    }
    var Yd = Vd(function(a) {
        var b = {};
        b.bg = a;
        Cd("bg", b)
    });
    var N = {
            CLOSE: "c",
            DIRECTIONS: "d",
            IN_APP_PURCHASE: "p",
            LOCATION: "l",
            TELEPHONE: "t",
            LOCATION_FORMAT_MAP: "l_m",
            LOCATION_FORMAT_LANDING_PAGE: "l_l",
            LOCATION_FORMAT_STORE_INFO: "l_s",
            LOCATION_FORMAT_DIRECTIONS: "l_d",
            LOCATION_FORMAT_CALL: "l_c",
            LOCATION_FORMAT_TEXT: "l_t",
            LOCATION_FORMAT_IMAGE: "l_i",
            QUERY: "q",
            OPF_CLICK_CONFIRMATION: "opfc"
        },
        Zd = {
            d: 11,
            l: 41,
            q: 76,
            l_m: 77,
            l_l: 78,
            l_s: 79,
            l_d: 80,
            l_c: 81,
            l_t: 82,
            l_i: 83
        },
        $d = {
            l_m: "location_format_map",
            l_l: "location_format_landing_page",
            l_s: "location_format_store_info",
            l_d: "location_format_directions",
            l_t: "location_format_text",
            l_i: "location_format_image"
        },
        ae = {
            d: 34,
            l: 17,
            q: 17,
            l_m: 33,
            l_l: 8,
            l_s: 35,
            l_d: 34,
            l_c: 14,
            l_t: 0,
            l_i: 9,
            opfc: 12
        };
    var be = Vd(function(a, b, c, d) {
        d = d || {};
        d.i = a.creativeId;
        d.t = a.templateId;
        d.c = b;
        d.m = c;
        d.lp = a.layoutPath;
        a.experimentId && (d.e = a.experimentId);
        a.Da && (d.gqi = a.Da);
        a.Ja && (d.qqi = a.Ja);
        a.fb(d)
    });

    function ce(a) {
        return function(b, c, d) {
            var e = {};
            d && (e.jsl = d);
            c && (e.jsf = c);
            be(a, "j", b, e)
        }
    }

    function de(a, b) {
        try {
            b()
        } catch (e) {
            b = e.toString();
            e.name && -1 == b.indexOf(e.name) && (b += ": " + e.name);
            e.message && -1 == b.indexOf(e.message) && (b += ": " + e.message);
            if (e.stack) {
                var c = e.stack;
                try {
                    -1 == c.indexOf(b) && (c = b + "\n" + c);
                    for (var d; c != d;) d = c, c = c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = c.replace(/\n */g, "\n")
                } catch (f) {}
            }
            ce(a)(b, e.lineNumber, e.fileName)
        }
    }

    function ee(a) {
        Cd("html5-mon", a)
    };

    function fe() {
        this.b = new XMLHttpRequest
    }
    fe.prototype.get = function(a, b) {
        if (this.b && (0 == this.b.readyState || 4 == this.b.readyState)) try {
            this.b.onreadystatechange = y(this.g, this, b), this.b.open("GET", a, !0), this.b.send(null)
        } catch (c) {
            b()
        }
    };
    fe.prototype.g = function(a) {
        4 == this.b.readyState && a()
    };

    function ge(a, b, c, d) {
        c = c || function() {
            var f = window.top.location,
                g = Db(b);
            sd(g, td(606));
            Kb(f, g)
        };
        var e = new fe;
        (void 0 === d ? 0 : d) ? (e.get(a, Ja), setTimeout(c, 0)) : e.get(a, c)
    }

    function he(a, b, c, d) {
        this.W = a;
        this.Oa = b;
        this.$ = null;
        this.K = c;
        this.ba = d;
        this.g = this.F = this.v = this.h = this.j = !1;
        this.G = void 0;
        this.b = this.w = this.A = null;
        this.aa = this.Pa = this.va = this.C = this.B = this.P = this.ta = this.V = this.wa = 0
    }
    he.prototype.Na = function() {
        this.B = B();
        this.j = !1;
        ie(this)
    };
    he.prototype.sa = function() {
        try {
            this.b && 4 == this.b.readyState && this.h && (this.C = B(), this.h = !1, this.b.responseText && 0 < this.b.responseText.length && (this.A = "tel:" + this.b.responseText))
        } finally {
            ie(this)
        }
    };
    he.prototype.Qa = function() {
        this.P = B();
        this.g = !1;
        ie(this)
    };

    function ie(a) {
        a.v || (a.j || a.h ? a.g || je(a) : (a.g && (a.g = !1, window.clearTimeout(a.G), a.G = void 0), je(a)))
    }

    function je(a) {
        if (!a.v) {
            a.v = !0;
            a.F = !0;
            var b = 0 == a.B ? 0 : a.B - a.V,
                c = 0 == a.C ? 0 : a.C - a.ta,
                d = 0 == a.P ? 0 : a.P - a.wa,
                e = a.w && a.w.b ? a.w.b.status : "noreq",
                f = a.b ? a.b.status : "noreq",
                g = /&ctype=\d+/.exec(a.W);
            g = g ? g[0] : "";
            a.va++;
            a.$ = ["//pagead2.googlesyndication.com/pagead/gen_204?id=ctc_metrics", g, "&dc=" + a.aa, "&ec=0", "&rc=" + a.va, "&ct=0", "&ctc_num=" + a.K, "&ctc_gvn=" + a.A, "&ctc_cs_time=" + b, "&ctc_gv_time=" + c, "&ctc_to_time=" + d, "&ctc_cs_status=" + e, "&ctc_gv_status=" + f].join("");
            (new fe).get(a.$, y(a.ua, a));
            window.setTimeout(y(a.ua,
                a), 2E3)
        }
    }
    he.prototype.ua = function() {
        if (this.F)
            if (this.g = this.h = this.j = this.F = !1, null != this.ba) this.ba(this.A || this.K);
            else {
                var a = window.top.location,
                    b = Db(this.A || this.K);
                sd(b, td(607));
                Kb(a, b)
            }
    };

    function ke(a) {
        var b = B();
        a.j || a.h || a.g ? a.aa++ : a.Pa = b;
        var c = !1,
            d = !1,
            e = !1;
        a.j || (a.j = !0, a.v = !1, a.V = b, a.B = b, d = !0);
        a.h || null != a.A || (a.h = !0, a.v = !1, a.ta = b, a.C = b, e = !0);
        a.g || (a.g = !0, a.v = !1, a.wa = b, c = !0);
        c && (a.G = window.setTimeout(y(a.Qa, a), 2E3));
        d && (a.w = new fe, a.w.get(a.W, y(a.Na, a)));
        if (e) try {
            a.b = new XMLHttpRequest, a.b.onreadystatechange = y(a.sa, a), a.b.open("GET", a.Oa, !0), a.b.send(null)
        } catch (f) {
            a.sa()
        }
    }
    u("ctc_bd", ge, void 0);
    u("init_gvc", function(a, b, c, d) {
        return new he(a, b, c, d)
    }, void 0);
    u("ctc_bd_gv", function(a) {
        ke(a)
    }, void 0);

    function le() {
        this.j = this.j;
        this.h = this.h
    }
    le.prototype.j = !1;
    le.prototype.ya = function() {
        this.j || (this.j = !0, this.H())
    };
    le.prototype.H = function() {
        if (this.h)
            for (; this.h.length;) this.h.shift()()
    };

    function me(a) {
        a && "function" == typeof a.ya && a.ya()
    };

    function ne(a, b) {
        this.type = a;
        this.b = this.target = b;
        this.g = !1;
        this.Ka = !0
    }
    ne.prototype.stopPropagation = function() {
        this.g = !0
    };
    ne.prototype.preventDefault = function() {
        this.Ka = !1
    };
    var oe;
    (oe = !Ub) || (oe = 9 <= Number(kc));
    var pe = oe,
        qe;
    if (qe = Ub) qe = !(Object.prototype.hasOwnProperty.call(jc, "9") ? jc["9"] : jc["9"] = 0 <= xb(ic, "9"));
    var re = qe,
        se = function() {
            if (!t.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                t.addEventListener("test", Ja, b), t.removeEventListener("test", Ja, b)
            } catch (c) {}
            return a
        }();

    function te(a, b) {
        ne.call(this, a ? a.type : "");
        this.relatedTarget = this.b = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.b = b;
            (b = a.relatedTarget) ? Wb && (Sb(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement : "mouseout" ==
                c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId ||
                0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ue[a.pointerType] || "";
            this.h = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    C(te, ne);
    var ue = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    te.prototype.stopPropagation = function() {
        te.L.stopPropagation.call(this);
        this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
    };
    te.prototype.preventDefault = function() {
        te.L.preventDefault.call(this);
        var a = this.h;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, re) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var ve = "closure_listenable_" + (1E6 * Math.random() | 0),
        we = 0;

    function xe(a, b, c, d, e) {
        this.listener = a;
        this.b = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.N = e;
        this.key = ++we;
        this.U = this.ea = !1
    }

    function ye(a) {
        a.U = !0;
        a.listener = null;
        a.b = null;
        a.src = null;
        a.N = null
    };

    function ze(a) {
        this.src = a;
        this.b = {};
        this.g = 0
    }
    ze.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.b[f];
        a || (a = this.b[f] = [], this.g++);
        var g = Ae(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ea = !1)) : (b = new xe(b, this.src, f, !!d, e), b.ea = c, a.push(b));
        return b
    };

    function Be(a, b, c, d, e) {
        b = b.toString();
        if (b in a.b) {
            var f = a.b[b];
            c = Ae(f, c, d, e); - 1 < c && (ye(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.b[b], a.g--))
        }
    }

    function Ce(a, b) {
        var c = b.type;
        if (c in a.b) {
            var d = a.b[c],
                e = Ua(d, b),
                f;
            (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
            f && (ye(b), 0 == a.b[c].length && (delete a.b[c], a.g--))
        }
    }

    function Ae(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.U && f.listener == b && f.capture == !!c && f.N == d) return e
        }
        return -1
    };
    var De = "closure_lm_" + (1E6 * Math.random() | 0),
        Ee = {},
        Fe = 0;

    function Ge(a, b, c, d, e) {
        if (d && d.once) return He(a, b, c, d, e);
        if (x(b)) {
            for (var f = 0; f < b.length; f++) Ge(a, b[f], c, d, e);
            return null
        }
        c = Ie(c);
        return a && a[ve] ? a.b.add(String(b), c, !1, Ma(d) ? !!d.capture : !!d, e) : Je(a, b, c, !1, d, e)
    }

    function Je(a, b, c, d, e, f) {
        if (!b) throw Error("Invalid event type");
        var g = Ma(e) ? !!e.capture : !!e,
            h = Ke(a);
        h || (a[De] = h = new ze(a));
        c = h.add(b, c, d, g, f);
        if (c.b) return c;
        d = Le();
        c.b = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) se || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Me(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Fe++;
        return c
    }

    function Le() {
        var a = Ne,
            b = pe ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    }

    function He(a, b, c, d, e) {
        if (x(b)) {
            for (var f = 0; f < b.length; f++) He(a, b[f], c, d, e);
            return null
        }
        c = Ie(c);
        return a && a[ve] ? a.b.add(String(b), c, !0, Ma(d) ? !!d.capture : !!d, e) : Je(a, b, c, !0, d, e)
    }

    function Oe(a, b, c, d, e) {
        if (x(b))
            for (var f = 0; f < b.length; f++) Oe(a, b[f], c, d, e);
        else(d = Ma(d) ? !!d.capture : !!d, c = Ie(c), a && a[ve]) ? Be(a.b, String(b), c, d, e) : a && (a = Ke(a)) && (b = a.b[b.toString()], a = -1, b && (a = Ae(b, c, d, e)), (c = -1 < a ? b[a] : null) && Pe(c))
    }

    function Pe(a) {
        if ("number" !== typeof a && a && !a.U) {
            var b = a.src;
            if (b && b[ve]) Ce(b.b, a);
            else {
                var c = a.type,
                    d = a.b;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Me(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                Fe--;
                (c = Ke(b)) ? (Ce(c, a), 0 == c.g && (c.src = null, b[De] = null)) : ye(a)
            }
        }
    }

    function Me(a) {
        return a in Ee ? Ee[a] : Ee[a] = "on" + a
    }

    function Qe(a, b, c, d) {
        var e = !0;
        if (a = Ke(a))
            if (b = a.b[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.U && (f = Re(f, d), e = e && !1 !== f)
                }
        return e
    }

    function Re(a, b) {
        var c = a.listener,
            d = a.N || a.src;
        a.ea && Pe(a);
        return c.call(d, b)
    }

    function Ne(a, b) {
        if (a.U) return !0;
        if (!pe) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = t, d = 0; d < b.length; d++)
                    if (c = c[b[d]], null == c) {
                        b = null;
                        break a
                    }
                b = c
            }
            d = b;
            b = new te(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (g) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.b; e; e = e.parentNode) d.push(e);a = a.type;
                for (e = d.length - 1; !b.g && 0 <= e; e--) {
                    b.b = d[e];
                    var f = Qe(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; !b.g && e < d.length; e++) b.b = d[e],
                f = Qe(d[e], a, !1, b),
                c = c && f
            }
            return c
        }
        return Re(a, new te(b, this))
    }

    function Ke(a) {
        a = a[De];
        return a instanceof ze ? a : null
    }
    var Se = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Ie(a) {
        if (La(a)) return a;
        a[Se] || (a[Se] = function(b) {
            return a.handleEvent(b)
        });
        return a[Se]
    };

    function O() {
        le.call(this);
        this.b = new ze(this);
        this.C = this;
        this.w = null
    }
    C(O, le);
    O.prototype[ve] = !0;
    O.prototype.addEventListener = function(a, b, c, d) {
        Ge(this, a, b, c, d)
    };
    O.prototype.removeEventListener = function(a, b, c, d) {
        Oe(this, a, b, c, d)
    };
    O.prototype.dispatchEvent = function(a) {
        var b, c = this.w;
        if (c)
            for (b = []; c; c = c.w) b.push(c);
        c = this.C;
        var d = a.type || a;
        if ("string" === typeof a) a = new ne(a, c);
        else if (a instanceof ne) a.target = a.target || c;
        else {
            var e = a;
            a = new ne(d, c);
            gb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; !a.g && 0 <= f; f--) {
                var g = a.b = b[f];
                e = Te(g, d, !0, a) && e
            }
        a.g || (g = a.b = c, e = Te(g, d, !0, a) && e, a.g || (e = Te(g, d, !1, a) && e));
        if (b)
            for (f = 0; !a.g && f < b.length; f++) g = a.b = b[f], e = Te(g, d, !1, a) && e;
        return e
    };
    O.prototype.H = function() {
        O.L.H.call(this);
        if (this.b) {
            var a = this.b,
                b = 0,
                c;
            for (c in a.b) {
                for (var d = a.b[c], e = 0; e < d.length; e++) ++b, ye(d[e]);
                delete a.b[c];
                a.g--
            }
        }
        this.w = null
    };

    function Te(a, b, c, d) {
        b = a.b.b[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.U && g.capture == c) {
                var h = g.listener,
                    m = g.N || g.src;
                g.ea && Ce(a.b, g);
                e = !1 !== h.call(m, d) && e
            }
        }
        return e && 0 != d.Ka
    };

    function Ue(a, b) {
        O.call(this);
        this.v = a || 1;
        this.g = b || t;
        this.A = y(this.gb, this);
        this.B = B()
    }
    C(Ue, O);
    k = Ue.prototype;
    k.S = !1;
    k.I = null;
    k.setInterval = function(a) {
        this.v = a;
        this.I && this.S ? (this.stop(), this.start()) : this.I && this.stop()
    };
    k.gb = function() {
        if (this.S) {
            var a = B() - this.B;
            0 < a && a < .8 * this.v ? this.I = this.g.setTimeout(this.A, this.v - a) : (this.I && (this.g.clearTimeout(this.I), this.I = null), this.dispatchEvent("tick"), this.S && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.S = !0;
        this.I || (this.I = this.g.setTimeout(this.A, this.v), this.B = B())
    };
    k.stop = function() {
        this.S = !1;
        this.I && (this.g.clearTimeout(this.I), this.I = null)
    };
    k.H = function() {
        Ue.L.H.call(this);
        this.stop();
        delete this.g
    };

    function Ve(a, b, c) {
        le.call(this);
        this.b = a;
        this.w = b || 0;
        this.g = c;
        this.v = y(this.za, this)
    }
    C(Ve, le);
    k = Ve.prototype;
    k.T = 0;
    k.H = function() {
        Ve.L.H.call(this);
        this.stop();
        delete this.b;
        delete this.g
    };
    k.start = function(a) {
        this.stop();
        var b = this.v;
        a = void 0 !== a ? a : this.w;
        if (!La(b))
            if (b && "function" == typeof b.handleEvent) b = y(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.T = 2147483647 < Number(a) ? -1 : t.setTimeout(b, a || 0)
    };
    k.stop = function() {
        0 != this.T && t.clearTimeout(this.T);
        this.T = 0
    };
    k.za = function() {
        this.T = 0;
        this.b && this.b.call(this.g)
    };

    function We(a, b) {
        this.g = {};
        this.b = [];
        this.h = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof We)
                for (c = a.X(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    k = We.prototype;
    k.R = function() {
        Xe(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.g[this.b[b]]);
        return a
    };
    k.X = function() {
        Xe(this);
        return this.b.concat()
    };

    function Xe(a) {
        if (a.h != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                Ye(a.g, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.h != a.b.length) {
            var e = {};
            for (c = b = 0; b < a.b.length;) d = a.b[b], Ye(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    }
    k.get = function(a, b) {
        return Ye(this.g, a) ? this.g[a] : b
    };
    k.set = function(a, b) {
        Ye(this.g, a) || (this.h++, this.b.push(a));
        this.g[a] = b
    };
    k.forEach = function(a, b) {
        for (var c = this.X(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };

    function Ye(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };

    function P(a, b) {
        this.h = this.A = this.j = "";
        this.B = null;
        this.v = this.g = "";
        this.w = !1;
        var c;
        a instanceof P ? (this.w = void 0 !== b ? b : a.w, Ze(this, a.j), this.A = a.A, this.h = a.h, $e(this, a.B), this.g = a.g, af(this, bf(a.b)), this.v = a.v) : a && (c = String(a).match(Xc)) ? (this.w = !!b, Ze(this, c[1] || "", !0), this.A = cf(c[2] || ""), this.h = cf(c[3] || "", !0), $e(this, c[4]), this.g = cf(c[5] || "", !0), af(this, c[6] || "", !0), this.v = cf(c[7] || "")) : (this.w = !!b, this.b = new df(null, this.w))
    }
    P.prototype.toString = function() {
        var a = [],
            b = this.j;
        b && a.push(ef(b, ff, !0), ":");
        var c = this.h;
        if (c || "file" == b) a.push("//"), (b = this.A) && a.push(ef(b, ff, !0), "@"), a.push(Lb(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.B, null != c && a.push(":", String(c));
        if (c = this.g) this.h && "/" != c.charAt(0) && a.push("/"), a.push(ef(c, "/" == c.charAt(0) ? gf : hf, !0));
        (c = this.b.toString()) && a.push("?", c);
        (c = this.v) && a.push("#", ef(c, jf));
        return a.join("")
    };
    P.prototype.resolve = function(a) {
        var b = new P(this),
            c = !!a.j;
        c ? Ze(b, a.j) : c = !!a.A;
        c ? b.A = a.A : c = !!a.h;
        c ? b.h = a.h : c = null != a.B;
        var d = a.g;
        if (c) $e(b, a.B);
        else if (c = !!a.g) {
            if ("/" != d.charAt(0))
                if (this.h && !this.g) d = "/" + d;
                else {
                    var e = b.g.lastIndexOf("/"); - 1 != e && (d = b.g.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = D(e, "/");
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(),
                        d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.g = d : c = "" !== a.b.toString();
        c ? af(b, bf(a.b)) : c = !!a.v;
        c && (b.v = a.v);
        return b
    };

    function Ze(a, b, c) {
        a.j = c ? cf(b, !0) : b;
        a.j && (a.j = a.j.replace(/:$/, ""))
    }

    function $e(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.B = b
        } else a.B = null
    }

    function af(a, b, c) {
        b instanceof df ? (a.b = b, kf(a.b, a.w)) : (c || (b = ef(b, lf)), a.b = new df(b, a.w))
    }

    function mf(a, b) {
        return a.b.get(b)
    }

    function nf(a) {
        return a instanceof P ? new P(a) : new P(a, void 0)
    }

    function cf(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }

    function ef(a, b, c) {
        return "string" === typeof a ? (a = encodeURI(a).replace(b, of ), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
    }

    function of (a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var ff = /[#\/\?@]/g,
        hf = /[#\?:]/g,
        gf = /[#\?]/g,
        lf = /[#\?@]/g,
        jf = /#/g;

    function df(a, b) {
        this.g = this.b = null;
        this.h = a || null;
        this.j = !!b
    }

    function pf(a) {
        a.b || (a.b = new We, a.g = 0, a.h && $c(a.h, function(b, c) {
            a.add(Mb(b), c)
        }))
    }
    k = df.prototype;
    k.add = function(a, b) {
        pf(this);
        this.h = null;
        a = qf(this, a);
        var c = this.b.get(a);
        c || this.b.set(a, c = []);
        c.push(b);
        this.g += 1;
        return this
    };

    function rf(a, b) {
        pf(a);
        b = qf(a, b);
        Ye(a.b.g, b) && (a.h = null, a.g -= a.b.get(b).length, a = a.b, Ye(a.g, b) && (delete a.g[b], a.h--, a.b.length > 2 * a.h && Xe(a)))
    }

    function sf(a, b) {
        pf(a);
        b = qf(a, b);
        return Ye(a.b.g, b)
    }
    k.forEach = function(a, b) {
        pf(this);
        this.b.forEach(function(c, d) {
            Va(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.X = function() {
        pf(this);
        for (var a = this.b.R(), b = this.b.X(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.R = function(a) {
        pf(this);
        var b = [];
        if ("string" === typeof a) sf(this, a) && (b = Za(b, this.b.get(qf(this, a))));
        else {
            a = this.b.R();
            for (var c = 0; c < a.length; c++) b = Za(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        pf(this);
        this.h = null;
        a = qf(this, a);
        sf(this, a) && (this.g -= this.b.get(a).length);
        this.b.set(a, [b]);
        this.g += 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.R(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.h) return this.h;
        if (!this.b) return "";
        for (var a = [], b = this.b.X(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = Lb(d);
            d = this.R(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + Lb(d[f]));
                a.push(g)
            }
        }
        return this.h = a.join("&")
    };

    function bf(a) {
        var b = new df;
        b.h = a.h;
        a.b && (b.b = new We(a.b), b.g = a.g);
        return b
    }

    function qf(a, b) {
        b = String(b);
        a.j && (b = b.toLowerCase());
        return b
    }

    function kf(a, b) {
        b && !a.j && (pf(a), a.h = null, a.b.forEach(function(c, d) {
            var e = d.toLowerCase();
            d != e && (rf(this, d), rf(this, e), 0 < c.length && (this.h = null, this.b.set(qf(this, e), $a(c)), this.g += c.length))
        }, a));
        a.j = b
    };

    function tf(a) {
        a: {
            for (b in N)
                if (N[b] == a) {
                    var b = !0;
                    break a
                }
            b = !1
        }
        if (b && "opfc" != a) return a
    }
    var uf = !0,
        vf = H(),
        wf = !1,
        xf = ["Custom_layout", "destinationUrl", "displayUrl"];

    function yf(a, b, c, d, e, f, g, h, m) {
        this.J = a;
        this.b = b;
        (a = this.b.monitoring) && c && (this.g = {
            creativeId: a.creativeId || -1,
            templateId: a.templateId || -1,
            experimentId: a.experimentId,
            reportErrors: a.reportErrors || !1,
            reportPerf: a.reportPerf || !1,
            fb: c,
            layoutPath: a.layoutPath,
            Da: a.gqi,
            Ja: a.qqi,
            rumUrl: a.rumUrl,
            kb: a.rumc,
            jb: a.navStart
        });
        this.V = Ga(d) ? d : 0;
        this.W = Ga(e) ? e : 0;
        this.$ = Ga(f) ? f : 0;
        this.aa = !0 === h;
        this.B = Ga(m) ? m : 0;
        this.F = Fa(g) ? document.getElementById(g) : null;
        this.K = new Ve(this.eb, 1E4, this);
        this.h = [];
        this.A = "";
        this.w =
            null;
        this.J.registerApplicationHandler("exit", y(this.Ea, this));
        uf && zf(this)
    }
    k = yf.prototype;
    k.Ea = function(a, b) {
        var c = this;
        Af(this, a.d);
        var d = tf(a.r);
        if (a.o) this.Za(a.f, a.c, a.r);
        else if (Bf(this, a.d) || "c" == d) {
            this.A = a.br || "";
            this.w = a.be || null;
            var e = function() {
                    c.na(a.f, a.c, d, b)
                },
                f = window.window_focus_for_click;
            if (f) {
                var g = document.createEvent("MouseEvents");
                g.initMouseEvent("click", !0, !1, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null);
                f.handleClick(g)
            }
            this.g ? de(this.g, e) : e()
        }
    };

    function zf(a) {
        I.addEventListener("message", y(function(b) {
            if (Ma(b.data) && b.data.n == vf && b.data.er) {
                var c = b.data.er;
                c.hasOwnProperty("f") ? this.Ea(b.data.er, Jb()) : (c.hasOwnProperty("i"), c.hasOwnProperty("u"))
            }
        }, a), !1);
        a.J.sendMessage("exit-pmcfg", vf)
    }
    k.Ba = function(a) {
        return a.t
    };
    k.Za = Ja;

    function Cf(a, b, c, d) {
        if (b && -1 != xf.indexOf(b)) throw a.g && be(a.g, "be", "5"), Error();
        if (d) {
            var e = ae[d];
            var f = $d[d]
        }
        d = b && Q(a, b);
        d || (f && wf ? (c = f, (f = a.b.redirect_url) ? (c && (f = gd(f, "label", c)), void 0 != e && (f = gd(f, "nb", e)), c = f) : (a.g && be(a.g, "be", "3"), c = "")) : (f = a.b.redirect_url) ? (c && -1 == f.indexOf("ctype=38") && (f = gd(f, "ctype", c)), void 0 != e && (f = gd(f, "nb", e)), c = f) : (a.g && be(a.g, "be", "3"), c = ""), d = c);
        d = Df(a, d);
        d = Xd(d, a.A, a.w);
        a.g && Ef(d) && be(a.g, "be", "1:" + (b || ""));
        return d
    }

    function Ff(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var e = c && Zd[c];
        c = c && ae[c];
        var f = a.b.ctc_formatted_phone_number,
            g = a.b.ctc_click_tracking_url;
        (a = a.b.ctc_google_voice_url) && (e = 51);
        e && (g = gd(g, "ctype", e));
        c && (g = gd(g, "nb", c));
        a ? ke(new he(g, a, f, b)) : ge(g, f, b && Sa(b, f), d)
    }
    k.Y = function(a) {
        return "d" == a || "l_d" == a ? Gf(this, "exit_url_directions") : Gf(this, "exit_url_place")
    };

    function Hf(a, b) {
        var c = a.Y(b),
            d = Zd[b],
            e = ae[b];
        (b = $d[b]) && wf ? (d = nf(a.b.google_click_url), b && d.b.set("label", b), void 0 != e && d.b.set("nb", e), c ? (rf(d.b, "adurl"), "" !== d.b.toString() ? c = Ob(d.toString(), "&", "adurl", "=", Lb(c)) : (d.b.set("adurl", c), c = d.toString())) : c = d.toString()) : (b = nf(a.b.google_click_url), d && "38" != mf(b, "ctype") && b.b.set("ctype", d), void 0 != e && b.b.set("nb", e), c ? (rf(b.b, "adurl"), "" !== b.b.toString() ? c = Ob(b.toString(), "&", "adurl", "=", Lb(c)) : (b.b.set("adurl", c), c = b.toString())) : c = b.toString());
        c = Df(a, c);
        c = Xd(c, a.A, a.w);
        a.g && Ef(c) && be(a.g, "be", "1:");
        return c
    }

    function Ef(a) {
        a = mf(new P(a), "adurl");
        return void 0 == a || "" == a || "undefined" == a
    }

    function Q(a, b) {
        return (a = If(a, "adData")) && a[0] && a[0][b]
    }

    function Gf(a, b) {
        return (a = If(a, "locationData")) && a[0] && a[0][b]
    }

    function If(a, b) {
        return (a = a.b.google_template_data) && a[b]
    }

    function Bf(a, b) {
        var c;
        if (!(c = !x(b)) && (c = a.Fa(b[b.length - 1]))) {
            var d = b[b.length - 1];
            b = a.b.google_width;
            c = a.b.google_height;
            a.F && (b = a.F.clientWidth, c = a.F.clientHeight);
            c = new Qc(b, c);
            b = a.Ba(d);
            var e = d.x,
                f = d.y;
            d = e;
            e = f;
            f = a.W;
            var g = c.width - a.V - 1,
                h = c.height - a.W - 1;
            c = a.aa && (d <= a.B || c.width - d <= a.B) && e <= a.B;
            d = d >= a.V && d <= g && e >= f && e <= h;
            c = (0 > b || b >= a.$) && d && !c
        }
        return c
    }
    k.Fa = function(a) {
        return null != a && Ga(a.x) && Ga(a.y) && Ga(a.t) && Ga(a.e)
    };

    function Af(a, b) {
        x(b) && (a.h.push(b[b.length - 1]), Bf(a, b) ? (a = a.K, a.stop(), a.za()) : 0 != a.K.T || a.K.start())
    }
    k.eb = function() {
        if (x(this.h) && this.g) {
            var a = Xa(Wa(this.h, this.Fa), function(b) {
                var c = b.x,
                    d = b.y;
                return [c.toFixed(), d.toFixed(), b.t, b.e].join("_")
            }.bind(this));
            a = Ob(Bf(this, this.h) ? "1!" : "0!", a.length, "!", this.h.length - a.length, "!", a.join("~"));
            be(this.g, "cd", a);
            this.h = []
        }
    };

    function Df(a, b) {
        if (!a.h || 0 == a.h.length) return b;
        a = a.h;
        var c = a[a.length - 1];
        a = c.x;
        c = c.y;
        return gd(b, "nx", Math.round(a), "ny", Math.round(c))
    };

    function Jf(a, b) {
        this.h = b;
        this.b = {};
        this.g = !1
    }

    function Kf(a, b) {
        a.b[b] || (a.b[b] = {
            pa: !1,
            ia: [],
            N: null
        });
        return a.b[b]
    }

    function Lf(a, b) {
        var c = Kf(a, b);
        if (c.pa) {
            for (var d = c.ia.length, e = 0; e < d; e++) a.sendMessage(b, c.ia[e]);
            c.ia = []
        }
    }

    function Mf(a, b) {
        if (a.g) {
            var c = {
                t: 2
            };
            c.s = a.h;
            c.n = b;
            a.send(c)
        }
    }
    Jf.prototype.registerApplicationHandler = function(a, b) {
        Kf(this, a).N = b;
        Mf(this, a)
    };
    Jf.prototype.sendMessage = function(a, b) {
        var c = Kf(this, a);
        this.g && c.pa ? (c = {
            t: 1
        }, c.s = this.h, c.n = a, c.d = b, this.send(c)) : c.ia.push(b)
    };
    Jf.prototype.isInitialized = function() {
        return this.g
    };

    function Nf(a, b, c, d, e, f, g) {
        return new Of(a, b, c, d, e, f, g)
    }

    function Of(a, b, c, d, e, f, g) {
        yf.call(this, a, b, ee, c, d, e, f);
        this.j = !!g
    }
    C(Of, yf);
    Of.prototype.na = function(a, b, c, d) {
        if ("l_c" == c || "t" == c) Ff(this, null, c);
        else if ("c" != c) {
            b = b || c && Zd[c];
            "l_m" == c || "l_s" == c || "l_d" == c || "l" == c || "d" == c ? (a = Hf(this, c), qd(I, a), c = this.Y(c)) : c = "l_t" == c || "l_i" == c || "l_l" == c ? Cf(this, a, b, c) : Cf(this, a, b);
            if ((a = /[?&]adurl=([^&]+)/.exec(c)) && /[?&]ae=1(&|$)/.test(c) && !/[?&]dsh=1(&|$)/.test(c)) try {
                decodeURIComponent(a[1])
            } catch (e) {}
            if (d || this.j) {
                if (I.open(c, "_blank")) return;
                this.g && be(this.g, "be", "4")
            }
            d = I.top.location;
            sd(c, td(604));
            Kb(d, c)
        }
    };

    function Pf(a) {
        if (a.changedTouches && 0 < a.changedTouches.length) {
            var b = a.changedTouches[0].clientX;
            a = a.changedTouches[0].clientY
        } else b = a.clientX, a = a.clientY;
        return {
            x: Math.round(b),
            y: Math.round(a)
        }
    }

    function Qf(a, b) {
        this.J = a;
        this.Ha = I.parent;
        this.ca = b;
        this.oa = !1;
        this.xa = [];
        this.ha = Infinity;
        this.ka = this.da = null;
        this.Aa = 0;
        if (a = this.ca.bg) this.da = new Td(a.u, a.c);
        this.J.registerApplicationHandler("event", y(this.Xa, this));
        window.addEventListener("click", y(this.$a, this), !0);
        if ("function" == typeof TouchEvent) {
            var c = [];
            TouchEvent.prototype.preventDefault = function() {
                var e = Date.now() + 1500;
                this instanceof Event ? c.push({
                    position: Pf(this),
                    Ma: e
                }) : c.push({
                    position: void 0,
                    Ma: e
                })
            };
            a = function(e) {
                for (var f = -1, g =
                        Pf(e), h = Date.now(), m = 0; m < c.length; ++m) {
                    var l = c[m];
                    if (h > l.Ma) f == m - 1 && (f = m);
                    else if (null == l.position || l.position.x == g.x && l.position.y == g.y) {
                        e.stopPropagation();
                        break
                    }
                } - 1 != f && c.splice(0, f - 1)
            };
            window.addEventListener("mousemove", a, !0);
            window.addEventListener("mousedown", a, !0);
            window.addEventListener("mouseup", a, !0);
            window.addEventListener("click", a, !0);
            var d = function() {};
            window.addEventListener("touchend", function(e) {
                e.target && e.target.addEventListener("click", d)
            }, !0)
        }
        window.addEventListener("touchstart",
            y(this.cb, this), !0);
        Rf(this);
        this.exit = this.exit;
        this.exitNonCharging = this.exitNonCharging;
        this.RedirectType = N;
        this.reportInteraction_ = this.reportInteraction_;
        this.updateUrls_ = this.updateUrls_;
        this.configureCloseButton = this.configureCloseButton
    }

    function Rf(a) {
        a.J.registerApplicationHandler("exit-pmcfg", y(function(b) {
            this.Ia = b
        }, a))
    }
    k = Qf.prototype;
    k.exit = function(a, b) {
        this.oa || Sf(this, a, void 0, b)
    };
    k.exitNonCharging = function(a) {
        this.oa || Sf(this, a, 38)
    };
    k.reportInteraction_ = function(a) {
        var b = {};
        b.i = a;
        a = {};
        a.i = b;
        Tf(this, a) || this.J.sendMessage("interactions", b)
    };
    k.updateUrls_ = function(a) {
        var b = {};
        b.f = a;
        a = {};
        a.u = b;
        Tf(this, a) || this.J.sendMessage("url_update", b)
    };
    k.configureCloseButton = function(a) {
        var b = {};
        b.t = a;
        this.J.sendMessage("mb_close_btn", b)
    };

    function Sf(a, b, c, d) {
        var e = Date.now();
        e < a.Aa ? Uf(a, b, c, d) : a.ka = {
            Sa: b,
            Ta: c,
            ra: d,
            Wa: e + 1500
        }
    }

    function Uf(a, b, c, d) {
        if (1 != a.ca.exit_strategy || d) var e = !1;
        else {
            var f;
            if (f = b) f = (f = (f = a.ca.google_template_data) && f.adData) && f[0] && f[0][b];
            f = f || a.ca.redirect_url;
            e = Fa(f) && J(1, f);
            e = Fa(e) && 0 == e.toLowerCase().indexOf("http") ? null != I.open(f, "_blank") : !1
        }
        f = {};
        f.f = b;
        f.c = c;
        f.r = d;
        f.d = a.xa;
        f.o = e;
        a.da && (b = a.da, b.g = Ud(b), f.br = b.g, b = a.da, f.be = b.b ? b.b : b.g.length ? 3 > b.g.length ? "7" : 1124 < b.g.length ? "8" : null : null);
        Tf(a, f) || a.J.sendMessage("exit", f)
    }

    function Tf(a, b) {
        if (a.Ia && a.Ha.postMessage) {
            var c = {};
            c.n = a.Ia;
            c.er = b;
            a.Ha.postMessage(c, "*");
            return !0
        }
        return !1
    }

    function Vf(a, b, c) {
        var d = b.y,
            e = {};
        e.x = b.x;
        e.y = d;
        e.e = c;
        e.t = Date.now() - a.ha;
        e.ts = Date.now();
        a.xa.push(e)
    }
    k.$a = function(a) {
        this.oa && Sf(this);
        Vf(this, Pf(a), 0);
        a = Date.now();
        if (this.ka) {
            var b = this.ka;
            a < b.Wa && Uf(this, b.Sa, b.Ta, b.ra)
        }
        this.ka = null;
        this.Aa = a + 200
    };
    k.cb = function(a) {
        a.changedTouches && 0 < a.changedTouches.length && Vf(this, Pf(a), 1)
    };
    k.Xa = function(a) {
        switch (a.e) {
            case "onshow":
                this.ha = B()
        }
    };
    var Wf, Xf, Yf, Zf, $f, ag;

    function bg() {
        return t.navigator ? t.navigator.userAgent : ""
    }

    function R(a) {
        return -1 != bg().indexOf(a)
    }
    var cg = R("(iPad") || R("(Macintosh") || R("(iPod") || R("(iPhone"),
        dg = R("Android"),
        eg = R("MSIE") || R("IEMobile") || R("Windows Phone");

    function fg() {
        if (void 0 === Wf) {
            var a = /CPU\s+(?:(?:i?OS)|(?:iPhone)|(?:iPhone\s+OS))\s+([0-9_|\.]+)/.exec(bg());
            Wf = a && 2 == a.length ? a[1].replace(/_/g, ".") : R("(Macintosh") ? "13.0" : ""
        }
        return Wf
    }

    function gg() {
        if (void 0 === Xf) {
            if (cg && !R("Safari")) return Xf = !0;
            Xf = !1
        }
        return Xf
    }

    function hg() {
        void 0 !== Yf || (Yf = R("afma-sdk-a") ? !0 : !1);
        return Yf
    }

    function ig() {
        void 0 !== Zf || (Zf = gg() || hg());
        return Zf
    }

    function jg(a) {
        var b;
        void 0 === $f && ($f = hg() ? (b = bg().match(/afma\-sdk\-a\-v\.?([\d+\.]+)/)) ? b[1] : "" : "");
        return (b = $f) ? 0 <= xb(b, a) : !1
    }

    function kg(a) {
        if (!gg()) return !1;
        if (void 0 === ag) {
            if (gg()) {
                var b = (new P(window.location.href)).b.R("js");
                a: {
                    if ((b = b.length ? b[0] : "") && D(b, "afma-")) {
                        var c = b.lastIndexOf("v");
                        if (-1 < c && (b = b.substr(c + 1).match(/^(\d+\.\d+\.\d+|^\d+\.\d+|^\d+)(-.*)?$/))) {
                            b = b[1];
                            break a
                        }
                    }
                    b = "0.0.0"
                }
            } else b = "0.0.0";
            ag = b
        }
        return (b = ag) ? 0 <= xb(b, a) : !1
    };

    function lg(a, b) {
        this.messageName = a;
        this.parameters = b || {}
    }

    function mg(a, b) {
        ne.call(this, a.messageName, b);
        this.params = a.parameters || {}
    }
    C(mg, ne);

    function S(a) {
        var b = id("https://pagead2.googlesyndication.com/pagead/gen_204", "zx", H());
        ng(b, a)
    }

    function og(a, b) {
        Math.random() <= a && S(b)
    }

    function ng(a, b) {
        a = md(a, b || {});
        try {
            window.googleJsEnvironment && window.googleJsEnvironment.pinger && window.googleJsEnvironment.pinger.pingUrl ? window.googleJsEnvironment.pinger.pingUrl(a) : qd(window, a)
        } catch (c) {}
    };

    function pg(a) {
        le.call(this);
        this.g = a;
        this.b = {}
    }
    C(pg, le);
    var qg = [];

    function rg(a) {
        bb(a.b, function(b, c) {
            this.b.hasOwnProperty(c) && Pe(b)
        }, a);
        a.b = {}
    }
    pg.prototype.H = function() {
        pg.L.H.call(this);
        rg(this)
    };
    pg.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function sg() {
        if (window.googleJsEnvironment && ("rhino" == window.googleJsEnvironment.environment || "jscore" == window.googleJsEnvironment.environment)) return new tg;
        if (eg && window.external && "notify" in window.external) return new ug;
        if (dg && window.googleAdsJsInterface && "notify" in window.googleAdsJsInterface) try {
            return window.googleAdsJsInterface.notify("gmsg://mobileads.google.com/noop"), new tg
        } catch (a) {} else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.gadGMSGHandler) return new vg;
        return new wg
    }

    function xg() {
        yg || (yg = sg());
        return yg
    }
    var yg = null;

    function zg() {}
    C(zg, le);

    function Ag(a) {
        var b = "gmsg://mobileads.google.com/" + a.messageName;
        a = eb(a.parameters);
        a["google.afma.Notify_dt"] = (new Date).getTime();
        var c = {},
            d;
        for (d in a) {
            var e = Lb(d);
            c[e] = a[d]
        }
        return hd(b, c)
    }

    function Bg(a, b) {
        this.A = a;
        this.B = b || 1;
        this.w = [];
        this.v = new Ue(this.B);
        a = this.C = new pg(this);
        b = this.v;
        var c = this.F,
            d = "tick";
        x(d) || (d && (qg[0] = d.toString()), d = qg);
        for (var e = 0; e < d.length; e++) {
            var f = Ge(b, d[e], c || a.handleEvent, !1, a.g || a);
            if (!f) break;
            a.b[f.key] = f
        }
    }
    C(Bg, zg);
    Bg.prototype.sendMessage = function(a) {
        this.w.push(a);
        this.v.S || (a = this.w.shift(), this.A(a), this.v.start())
    };
    Bg.prototype.F = function() {
        var a = this.w.shift();
        a ? this.A(a) : this.v.stop()
    };

    function ug() {}
    C(ug, zg);
    ug.prototype.sendMessage = function(a) {
        a = Ag(a);
        window.external.notify(a)
    };

    function wg() {
        Bg.call(this, this.G);
        this.b = [];
        this.g = 0
    }
    C(wg, Bg);
    wg.prototype.G = function(a) {
        var b = this.b[this.g];
        b || (b = Rc(document, "IFRAME"), b.id = "afma-notify-" + (new Date).getTime(), b.style.display = "none", this.b[this.g] = b);
        this.g = (this.g + 1) % 25;
        a = Ag(a);
        b.src = a;
        b.parentNode || document.body.appendChild(b)
    };
    wg.prototype.H = function() {
        this.b.forEach(Sc);
        this.b = [];
        wg.L.H.call(this)
    };

    function tg() {}
    C(tg, zg);
    tg.prototype.sendMessage = function(a) {
        a = Ag(a);
        window.googleAdsJsInterface.notify(a);
        window.googleAdsJsInterface.DEBUG && console.log(a)
    };

    function vg() {}
    C(vg, zg);
    vg.prototype.sendMessage = function(a) {
        a = Ag(a);
        window.webkit.messageHandlers.gadGMSGHandler.postMessage(a)
    };

    function Cg() {
        var a = this;
        this.h = [];
        this.g = window === window.top;
        this.j = !1;
        this.b = 0;
        "undefined" !== typeof window.addEventListener && window.addEventListener("message", function(b) {
            var c = b.data;
            if ((b = b.source) && c) {
                var d = a.h;
                if ("arwebview_iframe_loaded" === c && a.g) u("JavascriptWebViewBridge.incoming.postMessage", a.v.bind(a), t), -1 === d.indexOf(b) && d.push(b);
                else {
                    var e = c.messageName;
                    c = c.parameters;
                    if (a.g) switch (e) {
                        case "mraid_loaded":
                            !1 === c.is_top_win && (a.j = !0, t.AFMA_updateActiveView || u("AFMA_updateActiveView",
                                a.w.bind(a), t), -1 === d.indexOf(b) && (d.push(b), "undefined" !== typeof b.postMessage && b.postMessage(new lg("mraid_env_obj", window.MRAID_ENV), "*")));
                            break;
                        case "start_tracking_action":
                            0 == a.b && window.AFMA_SendMessage("trackActiveViewUnit");
                            a.b += 1;
                            break;
                        case "stop_tracking_action":
                            --a.b, 0 == a.b && (window.AFMA_SendMessage("untrackActiveViewUnit", {
                                hashCode: c.hashCode
                            }), window.AFMA_updateActiveView = ab)
                    } else switch (e) {
                        case "mraid_env_obj":
                            window.MRAID_ENV = c;
                            break;
                        case "update_activeview_action":
                            window.AFMA_updateActiveView(c);
                            break;
                        case "receive_message_action":
                            window.AFMA_ReceiveMessage(c.messageName, c.parameters)
                    }
                }
            }
        })
    }
    Cg.prototype.w = function(a) {
        this.g && Dg(this, new lg("update_activeview_action", a))
    };
    Cg.prototype.v = function(a) {
        this.g && Dg(this, {
            name: "arwebview_message_forwarded",
            message: a
        })
    };

    function Dg(a, b) {
        a.h.forEach(function(c) {
            return c.postMessage(b, "*")
        })
    };

    function Eg() {
        O.call(this);
        this.v = xg();
        this.v = xg();
        var a = Sa(me, this.v);
        this.j ? a() : (this.h || (this.h = []), this.h.push(a));
        this.g = {};
        this.A = new Cg
    }
    C(Eg, O);
    k = Eg.prototype;
    k.sendMessage = function(a, b) {
        var c;
        "string" === typeof a ? c = new lg(a, b) : a instanceof lg && (c = a);
        "loading" == document.readyState ? (a = y(this.v.sendMessage, this.v, c), He(t, "DOMContentLoaded", a, !1, this)) : this.v.sendMessage(c)
    };
    k.receiveMessage = function(a, b) {
        this.shouldForwardMessageToIframe() && this.forwardMessage(new lg("receive_message_action", new lg(a, b)));
        "onshow" == a && "loading" == document.readyState ? (a = y(Fg, t, a, b), He(t, "DOMContentLoaded", a)) : this.dispatchEvent(new mg(new lg(a, b), this))
    };
    k.addObserver = function(a, b, c) {
        c = y(c, b);
        var d = y(function(e) {
            c(e.type, e.params)
        }, b);
        this.b.add(String(a), d, !1, void 0, void 0);
        this.g[a] || (this.g[a] = {});
        this.g[a][b] = d
    };
    k.removeObserver = function(a, b) {
        this.g[a] && this.g[a][b] && (Be(this.b, String(a), this.g[a][b], void 0, void 0), delete this.g[a][b])
    };
    k.shouldForwardMessageToIframe = function() {
        return this.A.j
    };
    k.forwardMessage = function(a) {
        Dg(this.A, a)
    };

    function T(a, b) {
        t.AFMA_Communicator ? t.AFMA_Communicator.sendMessage(a, b) : Gg(a, b)
    }

    function Gg(a, b) {
        "loading" == document.readyState ? (a = y(Gg, null, a, b), He(t, "DOMContentLoaded", a, !1)) : (a = new lg(a, b), xg().sendMessage(a))
    }

    function Fg(a, b) {
        t.AFMA_Communicator.receiveMessage(a, b)
    }

    function Hg(a, b, c, d) {
        t.AFMA_Communicator.removeEventListener(a, b, c, d)
    }

    function U(a, b, c, d) {
        t.AFMA_Communicator.addEventListener(a, b, c, d)
    }

    function Ig(a, b, c) {
        t.AFMA_Communicator.addObserver(a, b, c)
    }

    function Jg(a, b) {
        t.AFMA_Communicator.removeObserver(a, b)
    }
    t.AFMA_Communicator || (u("AFMA_AddEventListener", U, t), u("AFMA_RemoveEventListener", Hg, t), u("AFMA_AddObserver", Ig, t), u("AFMA_RemoveObserver", Jg, t), u("AFMA_ReceiveMessage", Fg, t), u("AFMA_SendMessage", T, t), t.AFMA_Communicator = new Eg);
    var Kg = {},
        Lg = {},
        Mg = {};

    function Ng() {
        throw Error("Do not instantiate directly");
    }
    Ng.prototype.b = null;
    Ng.prototype.Ca = function() {
        return this.content
    };
    Ng.prototype.toString = function() {
        return this.content
    };

    function Og() {
        Ng.call(this)
    }
    C(Og, Ng);
    Og.prototype.ma = Kg;
    var Pg = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.b = d);
                return c
            }
        }(Og),
        Qg = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        };

    function Rg(a) {
        return Qg[a]
    }
    var Sg = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Tg(a) {
        return Sg[a]
    }
    var Ug = /[\x00\x22\x27\x3c\x3e]/g,
        Vg = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Wg = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Xg = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Yg = /</g;
    var Zg;

    function Fc() {
        Zg || (Zg = I.google_casm ? new Cc(I.google_casm) : new Cc);
        return Zg
    }

    function $g(a) {
        if (pc || $b) {
            if ("/store/apps/details/" == Yc(J(5, a))) {
                var b = "/store/apps/details";
                D(b, "/") || (b = "/" + b);
                a = a.match(Xc);
                a = Wc(a[1], a[2], a[3], a[4], b, a[6], a[7])
            }
            return a.replace(/https?:\/\/(market.android.com|play.google.com\/store\/apps)\//, "market://")
        }
        return a
    }

    function V(a, b, c) {
        b = Lb(b);
        c = Lb(c);
        return a.replace("?", "?" + b + "=" + c + "&")
    }

    function ah(a) {
        if (I.jstiming && La(I.jstiming.report)) {
            var b = new I.jstiming.Timer;
            a.send();
            b.tick && (b.tick("cr_csr"), I.jstiming.report(b))
        } else a.send()
    }

    function bh(a) {
        if (a.match(/market[.]android[.]com|play[.]google[.]com/) && a.match(/[\?&]sa=L/) && !a.match(/googleadservices[.]com/)) {
            if (Gc()) a = ch(a);
            else {
                var b = I.location.host;
                if (b) {
                    var c = 1,
                        d = b.split(":");
                    for (b = []; 0 < c && d.length;) b.push(d.shift()), c--;
                    d.length && b.push(d.join(":"));
                    c = b[0];
                    b = b[1];
                    a = a.match(Xc);
                    a = Wc(a[1], a[2], c, b, a[5], a[6], a[7])
                }
            }
            a = V(a, "rct", "j");
            c = new XMLHttpRequest;
            c.open("GET", a, !1);
            try {
                ah(c)
            } catch (e) {
                return S({
                        id: "gmob-apps",
                        event: "ajax-click-ping-error",
                        fl: "shared_util",
                        error: e.message
                    }),
                    null
            }
            c.responseText && (c = c.responseText.match(/URL='([^']*)'/), 1 < c.length && (a = c[1].replace(/&amp;/g, "&")));
            return $g(a)
        }
        return null
    }

    function ch(a) {
        if (Gc()) return dh(a);
        var b = a.match(Xc);
        b = Wc(null, null, null, null, b[5], b[6], b[7]);
        var c = I.location.toString(),
            d = Zc(c);
        c = J(1, c);
        !c && t.self && t.self.location && (c = t.self.location.protocol, c = c.substr(0, c.length - 1));
        c = c ? c.toLowerCase() : "";
        "http" != c && "https" != c && (c = "https", d = Zc(a));
        return c + "://" + d + (b || "")
    }

    function dh(a) {
        var b = J(1, window.location.toString()),
            c = a.match(Xc);
        return "http" === b || c[4] ? a : Wc("https", c[2], c[3], c[4], c[5], c[6], c[7])
    }
    var eh = "2mdn.net dartmotif.net doubleclick.net doubleclick.com gstatic.com app-measurement.com google-analytics.com".split(" ");

    function fh(a) {
        var b = Zc(a);
        return b ? Ya(eh, function(c) {
            return nb(b, c)
        }) : !0
    }

    function gh(a) {
        if (a.match(/[\?&]sa=L/)) {
            a = ch(a);
            a = V(a, "rct", "j");
            try {
                if (null != window.googleJsEnvironment && null != window.googleJsEnvironment.httpClient) {
                    var b = window.googleJsEnvironment.httpClient.sendSync({
                        http_request_id: H(),
                        url: a
                    });
                    var c = b.success ? b.response.body || "" : void 0
                } else {
                    var d = new XMLHttpRequest;
                    d.open("GET", a, !1);
                    ah(d);
                    c = d.responseText
                }
            } catch (f) {
                var e = f
            }
            og(.1, {
                id: "gmob-apps",
                event: "xhr-request",
                is_success: null == e,
                exception: e ? e.toString() : void 0,
                "click-url-domain": Zc(a),
                "click-url-path": Yc(J(5,
                    a))
            });
            if (c && (a = c.match(/URL='([^']*)'/), 1 < a.length)) return a[1].replace(/&amp;/g, "&")
        }
    }

    function hh(a) {
        var b = Zc(I.location.toString()) || "",
            c = Zc(a) || "";
        a = Yc(J(5, a)) || "";
        og(.1, {
            id: "gmob-apps",
            event: "measure-fixclickurl-issues",
            success: b + ":" + c + ":" + a
        })
    }

    function ih(a, b) {
        function c(f, g) {
            if (!e) {
                e = !0;
                var h = function(m) {
                    m = m.match(Xc);
                    return Wc(m[1], m[2], m[3], m[4], m[5])
                };
                S({
                    id: "gmob-apps",
                    event: "click-server-ping",
                    status: g,
                    adUrlPrefix: h(window.location.toString()),
                    clickUrlPrefix: h(a)
                });
                f ? (g = K(f, "gclid"), S({
                    id: "gmob-apps",
                    event: "gclid-status",
                    success: !ob(Nb(g))
                }), b(f, g)) : b(null, null)
            }
        }
        var d = new XMLHttpRequest,
            e = !1;
        hh(a);
        a = dh(a);
        a = ch(a);
        a = V(a, "rct", "j");
        d.timeout = 0;
        d.onload = function() {
            if (200 == d.status && d.responseText) {
                var f = d.responseText.match(/URL='([^']*)'/);
                f && 1 < f.length ? c(f[1].replace(/&amp;/g, "&"), "ok") : c(null, "missing-landing-page")
            } else c(null, "http-fail")
        };
        d.onerror = function() {
            c(null, "error")
        };
        S({
            id: "gmob-apps",
            event: "ajax-clickping-ping"
        });
        d.open("GET", a, !0);
        d.send()
    }

    function jh(a) {
        function b(L) {
            h({
                "ping-method": "sync-image"
            });
            return new Promise(function(W) {
                var Oa = new Image;
                Oa.onload = function() {
                    W()
                };
                Oa.onerror = function() {
                    W()
                };
                Oa.src = L
            })
        }

        function c(L) {
            h({
                "ping-method": "async-image"
            });
            return new Promise(function(W) {
                (new Image).src = L;
                W()
            })
        }

        function d(L) {
            h({
                "ping-method": "sync-xhr"
            });
            return new Promise(function(W) {
                var Oa = new XMLHttpRequest;
                Oa.open("GET", L, !1);
                Oa.send();
                W()
            })
        }

        function e(L) {
            h({
                "ping-method": "async-sdk"
            });
            return new Promise(function(W) {
                a.O(L);
                W()
            })
        }

        function f() {
            return ""
        }

        function g() {
            return Promise.resolve()
        }

        function h() {}
        if (!a.ga || !a.M || a.Z && fh(a.Z) || !kh(a.M) && !lh(a.M) || !a.O || !a.qa) return !1;
        var m = a.qa,
            l = kh(a.M),
            n = lh(a.M),
            p = "",
            r = Ec();
        if (r) {
            p = H() + H();
            var z = {
                event: "third-party-async-ping",
                is_android: pc || $b,
                is_ios: mc || nc || ac || bc,
                flow_ios: l,
                flow_android: n,
                random: p,
                measurement_version: 5
            };
            h = function(L) {
                gb(z, L)
            };
            f = function() {
                var L = hd("https://pagead2.googlesyndication.com/pagead/gen_204?id=gmob-apps", z);
                return M(L, "zx", H())
            };
            p = Math.random();
            .25 >= p ?
                (g = e, p = "async") : .5 >= p ? (g = d, p = "syncxhr") : .75 >= p ? (g = c, p = "asyncimage") : (g = b, p = "syncimage");
            m = function(L) {
                function W() {
                    a.qa(L)
                }
                g(f()).then(W, W)
            }
        }
        var A = a.M,
            w = a.ga,
            v = a.Z;
        if (!mh(w)) return h({
            "early-exit-reason": "not-single-redirect"
        }), g(f()), !1;
        if (l) return kh(v) && (h({
            "tracking-url-itunes": !0
        }), A = v, v = void 0), w = ch(w), w = V(w, "rct", "j"), a.O(w), v && (h({
            "has-tracking-url": !0
        }), v = M(v, "urlloadedinbrowser", "false"), a.O(v)), m(A), !0;
        if (n) {
            r && (w = V(w, "gtprrv", (5).toString()));
            n = "1" == K(w, "ae");
            l = K(w, "adurl") || "";
            h({
                "is-async": n,
                "is-ad-url-play-store": lh(l)
            });
            if (n && lh(l)) {
                h({
                    "async-click-due-to-ae": !0
                });
                v = nh(l) || {
                    prefix: l
                };
                n = K(v.prefix, "referrer") || "";
                var Cb = K(v.prefix, "gclid") || "",
                    oc = K(w, "ai");
                l = K(l, "gref");
                var fa = [];
                n && fa.push(n);
                l || (-1 == n.indexOf("gclid") && Cb && fa.push("gclid=" + Cb), -1 == n.indexOf("ai=") && oc && fa.push("ai=" + oc));
                r && (fa.push("gtprr=true"), fa.push("gtprrv=5"), fa.push("gtprrm=" + p));
                if (r = fa.join("&")) h({
                    "combined-referer": !0
                }), v.prefix = M(v.prefix, "referrer", r);
                Hc() && (v.prefix = M(v.prefix, "aclk_ms", Date.now()));
                w = V(w, "act", "1");
                w = V(w, "ri", "1");
                null != v.params ? A = oh(v.prefix, v.params) : A = v.prefix;
                (r = Ic()) && a.appendClickSignals && a.Ga ? (p = function() {
                    return m(A)
                }, v = function() {
                    w = a.appendClickSignals(w);
                    w = a.Ga(w)
                }, "async" === r ? e(w).then(p, p) : "sync-xhr" === r ? (v(), d(w).then(p, p)) : "async-image" === r ? (v(), c(w).then(p, p)) : "sync-image" === r ? (v(), b(w).then(p, p)) : (a.O(w), m(A))) : (a.O(w), m(A))
            } else {
                h({
                    "async-click-due-to-ae": !1
                });
                l = nh(A) || {
                    prefix: A
                };
                v = gh(w) || v;
                n = nh(v) || {
                    prefix: v
                };
                Cb = K(n.prefix, "referrer");
                oc = K(n.prefix, "gref");
                fa = K(l.prefix, "referrer");
                lh(v) && (h({
                    "tracking-url-play": !0
                }), l = n, n = void 0);
                v = [];
                fa && (h({
                    "referrer-from-final": !0
                }), v.push(fa));
                Cb && (h({
                    "referrer-from-click-server": !0
                }), v.push(Cb));
                r && (v.push("gtprr=true"), v.push("gtprrv=5"), v.push("gtprrm=" + p));
                oc || v.push("network=d");
                if (r = v.join("&")) h({
                    "combined-referer": !0
                }), l.prefix = M(l.prefix, "referrer", r), n && (n.prefix = M(n.prefix, "referrer", r));
                Hc() && (l.prefix = M(l.prefix, "aclk_ms", Date.now()));
                l.prefix = $g(l.prefix);
                r = ob(l.prefix);
                h({
                    "store-url-empty": r,
                    "store-market-url": !r &&
                        D(l.prefix, "market"),
                    "store-intent-url": !r && D(l.prefix, "intent"),
                    "store-http-url": !r && D(l.prefix, "http")
                });
                n && (h({
                    "has-tracking-url": !0
                }), n.prefix = M(n.prefix, "urlloadedinbrowser", "false"), a.O(n.prefix));
                null != l.params ? A = oh(l.prefix, l.params) : A = l.prefix;
                m(A)
            }
            return !0
        }
        return !1
    }

    function mh(a) {
        return a ? "L" == K(a, "sa") : !1
    }

    function lh(a) {
        if (!a) return !1;
        var b = J(1, a),
            c = Zc(a),
            d = Yc(J(5, a));
        a = nh(a);
        return "market" == b || "market.android.com" == c || "play.google.com" == c && ("/store/apps/details" == d || "/store/apps/details/" == d) || a && "com.android.vending" == a.params["package"] || !1
    }

    function kh(a) {
        if (!a) return !1;
        var b = J(1, a);
        return b ? "itunes.apple.com" == Zc(a) && ("http" == b || "https" == b || "itms-apps" == b || "itms-appss" == b) : !1
    }

    function nh(a) {
        if ("intent" === a.match(Xc)[1]) {
            var b = a.lastIndexOf("#Intent");
            if (-1 === b) return {
                prefix: a,
                params: {}
            };
            var c = {
                prefix: a.substring(0, b),
                params: {}
            };
            a = q(a.substring(b + 7).split(";"));
            for (b = a.next(); !b.done; b = a.next())
                if (b = b.value, "" !== b) {
                    var d = b.indexOf("="); - 1 !== d && (c.params[b.substring(0, d)] = b.substring(d + 1))
                }
            return c
        }
    }

    function oh(a, b) {
        b = void 0 === b ? {} : b;
        var c = ["#Intent"],
            d = Object.keys(b).sort();
        d = q(d);
        for (var e = d.next(); !e.done; e = d.next()) e = e.value, c.push(e + "=" + b[e]);
        c.push("end");
        return a + c.join(";")
    }

    function ph(a) {
        var b = {};
        b = void 0 === b ? {} : b;
        if ("intent" === a.match(Xc)[1]) {
            b = void 0 === b ? {} : b;
            var c = nh(a);
            if (c) {
                a = q(Object.keys(b));
                for (var d = a.next(); !d.done; d = a.next()) d = d.value, c.params[d] = b[d];
                b = oh(c.prefix, c.params)
            } else b = a
        } else b = void 0 === b ? {} : b, c = a.match(Xc), a = Wc("intent", c[2], c[3], c[4], c[5], c[6], c[7]), b.scheme = c[1] || b.scheme || "http", b = oh(a, b);
        return b
    };

    function qh(a, b) {
        this.g = a | 0;
        this.b = b | 0
    }

    function rh(a) {
        return 4294967296 * a.b + (a.g >>> 0)
    }
    k = qh.prototype;
    k.toString = function(a) {
        a = a || 10;
        if (2 > a || 36 < a) throw Error("radix out of range: " + a);
        var b = this.b >> 21;
        if (0 == b || -1 == b && (0 != this.g || -2097152 != this.b)) return b = rh(this), 10 == a ? "" + b : b.toString(a);
        b = 14 - (a >> 2);
        var c = Math.pow(a, b),
            d = X(c, c / 4294967296);
        c = sh(this, d);
        d = Math.abs(rh(this.add(th(uh(c, d)))));
        var e = 10 == a ? "" + d : d.toString(a);
        e.length < b && (e = "0000000000000".substr(e.length - b) + e);
        d = rh(c);
        return (10 == a ? d : d.toString(a)) + e
    };

    function vh(a) {
        return 0 == a.g && 0 == a.b
    }

    function wh(a, b) {
        return a.g == b.g && a.b == b.b
    }

    function xh(a, b) {
        return a.b == b.b ? a.g == b.g ? 0 : a.g >>> 0 > b.g >>> 0 ? 1 : -1 : a.b > b.b ? 1 : -1
    }

    function th(a) {
        var b = ~a.g + 1 | 0;
        return X(b, ~a.b + !b | 0)
    }
    k.add = function(a) {
        var b = this.b >>> 16,
            c = this.b & 65535,
            d = this.g >>> 16,
            e = a.b >>> 16,
            f = a.b & 65535,
            g = a.g >>> 16;
        a = (this.g & 65535) + (a.g & 65535);
        g = (a >>> 16) + (d + g);
        d = g >>> 16;
        d += c + f;
        b = (d >>> 16) + (b + e) & 65535;
        return X((g & 65535) << 16 | a & 65535, b << 16 | d & 65535)
    };

    function uh(a, b) {
        if (vh(a)) return a;
        if (vh(b)) return b;
        var c = a.b >>> 16,
            d = a.b & 65535,
            e = a.g >>> 16;
        a = a.g & 65535;
        var f = b.b >>> 16,
            g = b.b & 65535,
            h = b.g >>> 16;
        b = b.g & 65535;
        var m = a * b;
        var l = (m >>> 16) + e * b;
        var n = l >>> 16;
        l = (l & 65535) + a * h;
        n += l >>> 16;
        n += d * b;
        var p = n >>> 16;
        n = (n & 65535) + e * h;
        p += n >>> 16;
        n = (n & 65535) + a * g;
        p = p + (n >>> 16) + (c * b + d * h + e * g + a * f) & 65535;
        return X((l & 65535) << 16 | m & 65535, p << 16 | n & 65535)
    }

    function sh(a, b) {
        if (vh(b)) throw Error("division by zero");
        if (0 > a.b) {
            if (wh(a, yh)) {
                if (wh(b, zh) || wh(b, Ah)) return yh;
                if (wh(b, yh)) return zh;
                var c = 1;
                if (0 == c) c = a;
                else {
                    var d = a.b;
                    c = 32 > c ? X(a.g >>> c | d << 32 - c, d >> c) : X(d >> c - 32, 0 <= d ? 0 : -1)
                }
                c = sh(c, b);
                d = 1;
                if (0 != d) {
                    var e = c.g;
                    c = 32 > d ? X(e << d, c.b << d | e >>> 32 - d) : X(0, e << d - 32)
                }
                if (wh(c, Bh)) return 0 > b.b ? zh : Ah;
                a = a.add(th(uh(b, c)));
                return c.add(sh(a, b))
            }
            return 0 > b.b ? sh(th(a), th(b)) : th(sh(th(a), b))
        }
        if (vh(a)) return Bh;
        if (0 > b.b) return wh(b, yh) ? Bh : th(sh(a, th(b)));
        for (d = Bh; 0 <= xh(a, b);) {
            c =
                Math.max(1, Math.floor(rh(a) / rh(b)));
            e = Math.ceil(Math.log(c) / Math.LN2);
            e = 48 >= e ? 1 : Math.pow(2, e - 48);
            for (var f = Ch(c), g = uh(f, b); 0 > g.b || 0 < xh(g, a);) c -= e, f = Ch(c), g = uh(f, b);
            vh(f) && (f = zh);
            d = d.add(f);
            a = a.add(th(g))
        }
        return d
    }
    k.and = function(a) {
        return X(this.g & a.g, this.b & a.b)
    };
    k.or = function(a) {
        return X(this.g | a.g, this.b | a.b)
    };
    k.xor = function(a) {
        return X(this.g ^ a.g, this.b ^ a.b)
    };

    function Ch(a) {
        return 0 < a ? 0x7fffffffffffffff <= a ? Dh : new qh(a, a / 4294967296) : 0 > a ? -9223372036854775808 >= a ? yh : th(new qh(-a, -a / 4294967296)) : Bh
    }

    function X(a, b) {
        return new qh(a, b)
    }
    var Bh = X(0, 0),
        zh = X(1, 0),
        Ah = X(-1, -1),
        Dh = X(4294967295, 2147483647),
        yh = X(0, 2147483648);
    var Eh, Fh = !1;

    function Gh(a) {
        return a.match(/^\/\//) ? "http:" + a : a
    }

    function Hh(a) {
        T("log", {
            string: "<Google:HTML> " + a
        })
    }

    function Ih() {
        var a = fg();
        if (!(a && 0 <= xb(a, "8.0")) || kg("7.5.2")) return !1;
        var b = window.location.toString();
        a = K(b, "js");
        b = K(b, "submodel");
        if (void 0 == a || void 0 == b) return !1;
        b = b.match(/([a-zA-Z]+)(\d+)/);
        if (void 0 == b) return !1;
        a = b[1].toLowerCase();
        b = parseInt(b[2], 10);
        return "ipad" == a && 4 <= b || "iphone" == a && 6 <= b || "ipod" == a && 7 <= b
    }

    function Jh(a) {
        a && (a = Gh(a), Ih() ? a && (a = Gh(a), ng(a)) : T("click", {
            u: a
        }))
    }
    u("google.afma.support.blockPageClosed", function() {
        T("delayPageClosed", {
            start: 1
        })
    }, void 0);
    u("google.afma.support.unblockPageClosed", function() {
        T("delayPageClosed", {
            stop: 1
        })
    }, void 0);
    u("google.afma.support.blockPageLoaded", function() {
        T("delayPageLoaded", {
            start: 1
        })
    }, void 0);

    function Kh() {
        T("delayPageLoaded", {
            stop: 1
        })
    }
    u("google.afma.support.unblockPageLoaded", Kh, void 0);
    u("google.afma.support.cancelPageLoaded", function() {
        hg() && !jg("9047000.0.0") ? Kh() : T("delayPageLoaded", {
            cancel: 1
        })
    }, void 0);

    function Lh(a) {
        T("backButton", {
            disabled: a
        })
    }
    u("google.afma.support.disableBackButton", Lh, void 0);

    function Mh() {
        T("reward", {
            action: "video_start"
        })
    }
    u("google.afma.support.notifyRewardedVideoStart", Mh, void 0);

    function Nh() {
        T("reward", {
            action: "video_complete"
        })
    }
    u("google.afma.support.notifyRewardedVideoComplete", Nh, void 0);

    function Oh(a) {
        var b = {
            action: "grant"
        };
        a ? (b.amount = a.amount, b.type = a.type) : b.amount = 0;
        T("reward", b)
    }
    u("google.afma.support.grantReward", Oh, void 0);

    function Ph(a) {
        if (window.googleAdsJsInterface && "getClickSignals" in window.googleAdsJsInterface) try {
            return window.googleAdsJsInterface.getClickSignals(a)
        } catch (b) {}
        return ""
    }

    function Qh(a) {
        return Da(function(b) {
            return b.return(Ph(a))
        })
    }
    var Rh = ["www.googleadservices.com", "googleads.g.doubleclick.net", "adclick.g.doubleclick.net", "ad.doubleclick.net", "www.google.com"];

    function Sh(a, b) {
        if (a) {
            var c = Yc(J(5, a)),
                d = Zc(a);
            if (0 > Ua(Rh, d) || "/aclk" != c && "/pagead/aclk" != c) return a;
            c = K(a, "ai");
            d = K(a, "ms");
            if (!ob(Nb(d)) || !b && ob(Nb(c))) return a;
            b = b || Ph(c);
            if (ob(Nb(b))) return a;
            c = a.indexOf("&adurl=");
            return 0 > c ? a : a.substring(0, c) + "&ms=" + b + a.substring(c, a.length)
        }
    }

    function Th(a, b) {
        return Da(function(c) {
            return c.return(Sh(a, b))
        })
    }

    function Uh(a) {
        Fh || T("customClose", {
            custom_close: a ? 1 : 0
        })
    }

    function Vh(a) {
        T("close", a ? {
            a: "notifyParent"
        } : void 0)
    }

    function Wh(a, b, c) {
        return Xh({
            id: H(),
            action: b,
            url: a,
            mimeType: c
        })
    }

    function Yh(a) {
        if (a && D(a, "intent:")) {
            var b = a.indexOf("#Intent;");
            if (!(0 > b)) {
                var c = {
                    id: a,
                    url: a.substr(9, b - 9)
                };
                a = a.substr(b + 8).split(";");
                b = "";
                for (var d = 0; d < a.length; d++) {
                    var e = a[d].split("=");
                    if (2 == e.length) switch (e[0]) {
                        case "package":
                            c.D = e[1];
                            break;
                        case "action":
                            c.action = e[1];
                            break;
                        case "scheme":
                            b = e[1]
                    }
                }
                b && (c.url = b + "://" + c.url);
                return c
            }
        }
    }

    function Xh(a) {
        if (!hg()) return !1;
        var b = {
            a: "intent",
            u: a.url
        };
        if (D(a.url, "intent://")) {
            b.intent_url = a.url;
            var c = Yh(a.url);
            c && (c.url && (b.u = c.url), c.action && (b.i = c.action), c.D && (b.p = c.packageName))
        }
        a.action && (b.i = a.action);
        a.mimeType && (b.m = a.mimeType);
        a.D && (b.p = a.D);
        a.flags && (b.f = a.flags);
        T("open", b);
        return !0
    }

    function Zh(a) {
        if (!/^https?:\/\//.test(a) || /^https?:\/\/((itunes)|(phobos))\.apple\.com\//.test(a) || /^https?:\/\/market\.android\.com\//.test(a) || /^https?:\/\/play\.google\.com\//.test(a) || /^https?:\/\/maps\.google\.com\//.test(a) && gg()) $h(a);
        else {
            var b;
            if (b = hg()) b = Yc(J(5, a)), b = /\.(3gp|m3u8|mkv|mov|mp4|m4v|ts|webm)$/i.test(b);
            b ? hg() ? Wh(a, "android.intent.action.VIEW", "video/*") : gg() ? (null != a && a.ma === Lg || null != a && a.ma === Mg ? a = String(a).replace(Vg, Tg) : a instanceof E ? a = String(Bb(a).toString()).replace(Vg,
                Tg) : a instanceof ib ? a = String(lb(a).toString()).replace(Vg, Tg) : (a = String(a), a = Wg.test(a) ? a.replace(Vg, Tg) : "about:invalid#zSoyz"), null != a && a.ma === Kg ? a = String(String(a.Ca()).replace(Xg, "").replace(Yg, "&lt;")).replace(Ug, Rg) : (a = String(a), wb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(qb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(rb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(sb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(tb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(ub, "&#39;")), -1 != a.indexOf("\x00") && (a =
                a.replace(vb, "&#0;")))), a = Pg('<!DOCTYPE html><meta charset="utf-8"><meta name="viewport" content="user-scalable=no initial-scale=1.0 width=device-width"><script>function resizeVid() {var vid = document.getElementById(\'vid\'); var windowHeight = window.innerHeight; vid.style.height = String(windowHeight) + \'px\';}window.addEventListener(\'orientationchange\', resizeVid, false);\x3c/script><style>body {margin: 0px; padding: 0px;}video {position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; margin: 0px; padding: 0px;}</style><video width="100%" controls autoplay webkit-playsinline id="vid" onloadedmetadata="resizeVid();"><source src="' +
                a + '"></video>'), T("open", {
                a: "webapp",
                html: a.toString()
            })) : (a = {
                a: "webapp",
                u: a
            }, og(.1, {
                id: "gmob-apps",
                event: "open-web-app"
            }), T("open", a)) : ai(a)
        }
    }

    function bi(a, b, c, d) {
        var e = /^https?:\/\//i.test(a);
        if (hg()) {
            var f = {
                id: a,
                url: a,
                D: d
            };
            ci([f], function(n, p) {
                a && p[a] && (d || !e ? Xh(f) : c ? p[a] = !1 : Zh(a));
                b(p[a])
            })
        } else {
            var g = !1,
                h = H();
            var m = function(n) {
                if (n.params.event_id == h && (Hg("openDeepLink", m), !g)) {
                    g = !0;
                    var p = Mb(a);
                    b(n.params[p])
                }
            };
            var l = !di(10);
            !kg("7.19.0") || l && e ? c ? b(!1) : ($h(a), b(!0)) : (U("openDeepLink", m), T("open", {
                a: "deep_link",
                u: a,
                event_id: h
            }))
        }
    }

    function ei(a, b) {
        if (hg()) /^https?:\/\//i.test(a) ? Zh(a) : Xh({
            id: a,
            url: a,
            D: ""
        }), b(!0);
        else {
            var c = /^https?:\/\//i.test(a),
                d = !di(10);
            if (!kg("7.19.0") || d && c) $h(a), b(!0);
            else {
                var e = !1,
                    f = H(),
                    g = function(h) {
                        h.params.event_id == f && (Hg("openDeepLink", g), e || (e = !0, h = h.params[a], S({
                            id: "gmob-apps",
                            event: "can-open-in-app-ios-post-9",
                            canOpen: h,
                            packageName: "",
                            promotedAppIsInstalledHint: !0
                        }), b(h)))
                    };
                U("openDeepLink", g);
                T("open", {
                    a: "deep_link",
                    u: a,
                    event_id: f
                })
            }
        }
    }

    function fi(a, b) {
        if (a) {
            var c = /^https?:\/\//i.test(a);
            if (hg())
                if (c) b(!0);
                else {
                    c = ph(a);
                    var d = H();
                    ci([{
                        id: d,
                        url: c,
                        D: ""
                    }], function(e, f) {
                        b(f[d] || !1)
                    })
                }
            else c || di(9) ? b(!0) : gi([a], function(e, f) {
                e = f[a] || !1;
                S({
                    id: "gmob-apps",
                    event: "can-open-in-app-ios-pre-9",
                    canOpen: e
                });
                b(e)
            })
        } else b(!0)
    }

    function di(a) {
        return cg ? 0 <= xb(fg(), a) : !1
    }

    function ai(a) {
        og(.1, {
            id: "gmob-apps",
            event: "open-browser"
        });
        T("open", {
            a: "browser",
            u: a
        })
    }

    function hi(a) {
        og(.1, {
            id: "gmob-apps",
            event: "open-inline-browser"
        });
        T("open", {
            a: "inline_browser",
            u: a
        })
    }

    function $h(a) {
        a = Gh(a);
        T("open", {
            a: "app",
            u: a
        })
    }

    function ii(a, b) {
        a = Gh(a);
        Eh || (Eh = window.google_casm ? new Cc(window.google_casm) : new Cc);
        (yc(Eh, 4) || b.useCustomTabs) && gg() ? hi(a) : (a = {
            a: "app",
            u: a
        }, jg("8400000.0.0") && gb(a, {
            system_browser: !0,
            use_first_package: b.useFirstPackage,
            use_running_process: b.useRunningProcess,
            use_custom_tabs: b.useCustomTabs
        }), T("open", a))
    }

    function ji(a, b, c) {
        void 0 === c && (c = !0);
        a = {
            a: "in_app_store",
            product_id: a,
            wait_for_fetch: c
        };
        b && (b = Gh(b), a.u = b);
        T("open", a)
    }

    function ki(a, b) {
        a = {
            product_id: a
        };
        if (b) {
            var c = H();
            a.request_id = c;
            var d = !1,
                e = function(f) {
                    d || "fetch_completed" != f.params.action || f.params.request_id != c || (d = !0, b(!!parseInt(f.params.result, 10)), Hg("in_app_store", e))
                };
            (new Ve(function() {
                d || (d = !0, b(!1), Hg("in_app_store", e))
            }, 6E5)).start();
            U("in_app_store", e)
        }
        T("fetchAppStore", a)
    }

    function li(a) {
        0 == a.indexOf("tel://") && (a = a.substring(6));
        0 == a.indexOf("tel:") && (a = a.substring(4));
        a = a.replace(/ /g, "");
        T("open", {
            a: "call",
            u: "tel:" + a
        })
    }

    function gi(a, b, c, d) {
        var e = c || function() {};
        c = d || 500;
        var f = a instanceof Array ? a : [a];
        if (di(9)) {
            a = {};
            for (c = 0; c < f.length; ++c) a[f[c]] = !0;
            b("openableURLs", a)
        } else {
            a = f.join(",");
            var g = !1,
                h = function(m) {
                    Hg("openableURLs", h);
                    if (!g) {
                        g = !0;
                        for (var l = eb(m.params), n = 0; n < f.length; ++n) {
                            var p = f[n],
                                r = Mb(p);
                            r = l[r];
                            null != r && (l[p] = r)
                        }
                        b(m.type, l)
                    }
                };
            U("openableURLs", h);
            T("canOpenURLs", {
                urls: a
            });
            setTimeout(function() {
                g || (g = !0, e())
            }, c)
        }
    }
    u("google.afma.support.canOpenURLs", gi, void 0);

    function ci(a, b, c, d) {
        function e(r) {
            Hg("openableIntents", e);
            if (!g) {
                g = !0;
                var z = eb(r.params),
                    A = {},
                    w;
                for (w in z) A[h[w]] = z[w];
                b(r.type, A)
            }
        }
        if (!hg()) return !1;
        var f = c || function() {};
        c = d || 500;
        var g = !1,
            h = {};
        d = [];
        for (var m = 0; m < a.length; ++m) {
            var l = a[m],
                n = Pb(l.id).toString();
            h[n] = l.id;
            n = {
                id: n
            };
            l.url && (n.u = l.url);
            if (l.url && (D(l.url, "intent:") || D(l.url, "Intent#"))) {
                n.intent_url = l.url;
                delete n.u;
                var p = Yh(l.url);
                p && (p.url && (n.u = p.url), p.D && (n.p = p.D), p.action && (n.i = p.action))
            }
            l.mimeType && (n.m = l.mimeType);
            l.D && (n.p =
                l.D);
            l.action && (n.i = l.action);
            d.push(n)
        }
        a = {
            intents: d
        };
        U("openableIntents", e);
        T("canOpenIntents", {
            data: JSON.stringify(a)
        });
        setTimeout(function() {
            g || (g = !0, f())
        }, c);
        return !0
    }
    u("google.afma.support.canOpenIntents", ci, void 0);
    u("google.afma.support.trackActiveViewUnit", function() {
        T("trackActiveViewUnit")
    }, void 0);
    u("google.afma.support.untrackActiveViewUnit", function() {
        T("untrackActiveViewUnit")
    }, void 0);
    u("google.afma.support.sendInstrumentGmsg", function(a) {
        T("instrument", a)
    }, void 0);
    Fh = !1;
    U("onshow", function() {});
    U("onhide", function() {
        Fh = !0
    });

    function Y() {
        this.b = {}
    }
    Y.g = void 0;
    Y.b = function() {
        return Y.g ? Y.g : Y.g = new Y
    };

    function mi(a, b) {
        if (void 0 === a.b[b]) return !1;
        a = a.b[b];
        return "string" === typeof a && "true" === a.toLowerCase() || !0 === a
    };

    function ni() {}
    k = ni.prototype;
    k.appendClickSignals = function(a, b) {
        return Sh(a, b)
    };
    k.appendClickSignalsAsync = function(a, b) {
        return Da(function(c) {
            return 1 == c.b ? wa(c, Th(a, b)) : c.return(c.h)
        })
    };
    k.canOpenIntents = function(a, b, c, d) {
        return ci(a, b, c, d)
    };
    k.canOpenURLs = function(a, b, c, d) {
        gi(a, b, c, d)
    };
    k.click = function(a) {
        Jh(a)
    };
    k.close = function(a) {
        Vh(a)
    };
    k.closeResizedAd = function() {
        T("mraid", {
            a: "closeResizedAd"
        })
    };
    k.createCalendarEventFromAd = function(a) {
        a ? (a.a = "createCalendarEvent", a.hasOwnProperty("start") && (a.start_ticks = (new Date(a.start)).getTime()), a.hasOwnProperty("end") && (a.end_ticks = (new Date(a.end)).getTime()), T("mraid", a)) : Hh("No parameters set.")
    };
    k.disableBackButton = function(a) {
        Lh(a)
    };
    k.fetchAppStoreOverlay = function(a, b) {
        ki(a, b)
    };
    k.forceOrientation = function(a, b, c) {
        a = {
            orientation: a,
            override: b ? "1" : "0"
        };
        c && (a.animationDuration = c);
        T("forceOrientation", a)
    };
    k.getClickSignals = function(a) {
        return Ph(a)
    };
    k.getClickSignalsAsync = function(a) {
        return Da(function(b) {
            return 1 == b.b ? wa(b, Qh(a)) : b.return(b.h)
        })
    };
    k.grantReward = function(a) {
        Oh(a)
    };
    k.notifyRewardedVideoStart = function() {
        Mh()
    };
    k.notifyRewardedVideoComplete = function() {
        Nh()
    };
    k.openBrowser = function(a) {
        ai(a)
    };
    k.openDeepLinkUrl = function(a, b, c, d) {
        bi(a, b, c, d)
    };
    k.openInAppStore = function(a, b, c) {
        ji(a, b, c)
    };
    k.openInlineBrowser = function(a) {
        hi(a)
    };
    k.openIntent = function(a, b, c) {
        return Wh(a, b, c)
    };
    k.openIntentExtended = function(a) {
        return Xh(a)
    };
    k.openNativeApp = function(a) {
        D(a, "intent:") ? Wh(a) : $h(a)
    };
    k.openStoreOverlay = function(a) {
        a: {
            a = Gh(a);
            if (kh(a)) {
                var b = (b = a.match(/^https?:\/\/itunes[.]apple[.]com\/[^\/]+\/(?:[^\/]+\/)*id(\d+)/)) ? b[1] : void 0;
                var c = K(a, "pid"),
                    d = K(a, "cid");
                if (b && !d && !c) {
                    ji(b, a, !1);
                    break a
                }
            }
            $h(a)
        }
    };
    k.openSystemBrowser = function(a, b) {
        ii(a, b)
    };
    k.openUrl = function(a) {
        Zh(a)
    };
    k.setOrientationProperties = function(a) {
        a ? (a.a = "setOrientationProperties", T("mraid", a)) : Hh("No properties set to setOrientationProperties.")
    };
    k.storePictureFromAd = function(a) {
        if (ob(Nb(a))) Hh("No image url.");
        else {
            var b = {
                a: "storePicture"
            };
            b.iurl = a;
            T("mraid", b)
        }
    };
    k.useCustomClose = function(a) {
        Uh(a)
    };

    function oi() {}
    k = oi.prototype;
    k.appendClickSignals = function(a, b) {
        return window.unity.afma.appendClickSignals(a, b)
    };
    k.appendClickSignalsAsync = function(a, b) {
        return Da(function(c) {
            return 1 == c.b ? window.unity.afma.appendClickSignalsAsync ? wa(c, window.unity.afma.appendClickSignalsAsync(a, b)) : c.return(a) : c.return(c.h)
        })
    };
    k.canOpenIntents = function(a, b, c, d) {
        return window.unity.afma.canOpenIntents(a, b, c, d)
    };
    k.canOpenURLs = function(a, b, c, d) {
        window.unity.afma.canOpenURLs(a, b, c, d)
    };
    k.click = function(a) {
        window.unity.afma.click(a)
    };
    k.close = function(a) {
        window.unity.afma.close(a)
    };
    k.closeResizedAd = function() {
        window.unity.afma.closeResizedAd()
    };
    k.createCalendarEventFromAd = function(a) {
        window.unity.afma.createCalendarEventFromAd(a)
    };
    k.disableBackButton = function(a) {
        window.unity.afma.disableBackButton(a)
    };
    k.fetchAppStoreOverlay = function(a, b) {
        window.unity.afma.fetchAppStoreOverlay(a, b)
    };
    k.forceOrientation = function(a, b, c) {
        window.unity.afma.forceOrientation(a, b, c)
    };
    k.getClickSignals = function(a) {
        return window.unity.afma.getClickSignals(a)
    };
    k.getClickSignalsAsync = function(a) {
        return Da(function(b) {
            return 1 == b.b ? window.unity.afma.getClickSignalsAsync ? wa(b, window.unity.afma.getClickSignalsAsync(a)) : b.return("") : b.return(b.h)
        })
    };
    k.grantReward = function(a) {
        window.unity.afma.grantReward(a)
    };
    k.notifyRewardedVideoStart = function() {
        window.unity.afma.notifyRewardedVideoStart()
    };
    k.notifyRewardedVideoComplete = function() {};
    k.openBrowser = function(a) {
        window.unity.afma.openBrowser(a)
    };
    k.openDeepLinkUrl = function(a, b, c, d) {
        window.unity.afma.openDeepLinkUrl(a, b, c, d)
    };
    k.openInAppStore = function(a, b, c) {
        window.unity.afma.openInAppStore(a, b, c)
    };
    k.openInlineBrowser = function(a) {
        window.unity.afma.openInlineBrowser(a)
    };
    k.openIntent = function(a, b, c) {
        return window.unity.afma.openIntent(a, b, c)
    };
    k.openIntentExtended = function(a) {
        return window.unity.afma.openIntentExtended(a)
    };
    k.openNativeApp = function(a) {
        D(a, "intent:") ? window.unity.afma.openIntent(a) : window.unity.afma.openNativeApp(a)
    };
    k.openStoreOverlay = function(a) {
        window.unity.afma.openStoreOverlay(a)
    };
    k.openSystemBrowser = function(a, b) {
        window.unity.afma.openSystemBrowser(a, b)
    };
    k.openUrl = function(a) {
        window.unity.afma.openUrl(a)
    };
    k.setOrientationProperties = function(a) {
        window.unity.afma.setOrientationProperties(a)
    };
    k.storePictureFromAd = function(a) {
        window.unity.afma.storePictureFromAd(a)
    };
    k.useCustomClose = function(a) {
        window.unity.afma.useCustomClose(a)
    };
    var pi;

    function Z() {
        pi || (window.unity && window.unity.afma ? pi = new oi : pi = new ni);
        return pi
    };

    function qi() {
        return mi(Y.b(), "uses_octagon_sdk")
    };
    var ri = 0;

    function si(a) {
        ri = B();
        if (qi()) {
            a = ch(a);
            var b = new XMLHttpRequest;
            b.open("GET", V(a.toString(), "rct", "j"), !1);
            if (window.jstiming && La(window.jstiming.report)) a = new window.jstiming.Timer, b.send(), a.tick("cr_csr"), window.jstiming.report(a);
            else {
                S({
                    id: "gmob-apps",
                    event: "sdu-clickpingattempt"
                });
                try {
                    b.send()
                } catch (c) {
                    S({
                        id: "gmob-apps",
                        event: "ajax-click-ping-error",
                        fl: "sdk_util",
                        error: c.message,
                        stack: c.stack,
                        origin: window.location.origin
                    });
                    return
                }
            }
            if (b.responseText && (b = b.responseText.match(/URL='([^']*)'/)) && 1 <
                b.length) return b[1].replace(/&amp;/g, "&")
        }
    }

    function ti(a, b) {
        if (a && (a = new P(a), mf(a, b))) return Mb(mf(a, b))
    }

    function ui(a, b) {
        var c = K(a, "referrer");
        ob(Nb(c)) ? c = b : ob(Nb(b)) || (c = c + "&" + b);
        ob(Nb(c)) || (a = M(a, "referrer", c));
        return a
    }

    function vi(a, b, c, d, e) {
        e = void 0 === e ? 55 : e;
        if (wi()) return !0;
        if (!qi() || !a) return !1;
        if (!e || 0 >= e) e = 55;
        b = V(b, "ctype", e.toString());
        return xi() ? (Z().click(b), Z().openNativeApp(c), !0) : (pc || $b) && mh(b) ? (a = si(b), c = ui(c, ti(a, "referrer")), (a = ti(a, "gclid")) && d && (c = M(c, "gclid", a)), c = yi(c), Z().openNativeApp(c), !0) : b && "/pcs/click" == Yc(J(5, b)) ? (Z().click(b), c = yi(c), Z().openNativeApp(c), !0) : !1
    }

    function zi(a, b, c, d, e, f) {
        f = void 0 === f ? 55 : f;
        if (wi()) return !0;
        if (!a || !qi()) return !1;
        if (!f || 0 >= f) f = 55;
        if (!pc && !$b) return vi(a, c, d, e, f);
        if (!mh(c)) return !1;
        c = V(c, "ctype", f.toString());
        a = si(c);
        d = ui(d, ti(a, "referrer"));
        (a = ti(a, "gclid")) && e && (d = M(d, "gclid", a));
        d = yi(d);
        b = {
            url: d,
            id: d,
            D: b ? b : void 0
        };
        Z().openIntentExtended(b);
        return !0
    }

    function yi(a) {
        return a.match(/^[^:]+:\/\/.*/) ? a : a.split(/:(.+)?/, 2).join("://")
    }

    function xi() {
        return mc || ac || nc || bc
    }

    function Ai(a, b) {
        if (!qi() || !b) return !1;
        if (b.match(/^https?:\/\/itunes[.]apple[.]com/)) return Z().click(a), Z().openNativeApp(b), !0;
        if (b.match("/play[.]google[.]com/redeem?")) return Z().click(a), Z().openIntentExtended({
            action: "android.intent.action.VIEW",
            id: "OpenRedeemIntent",
            D: "com.android.vending",
            url: b
        }), !0;
        b = qi() ? bh(a) : null;
        if (!b) return !1;
        Z().openNativeApp(b);
        return !0
    }

    function Bi(a) {
        return qi() ? jh({
            ga: a.ga,
            Z: a.Z,
            M: a.M,
            O: Z().click,
            qa: a.ib ? Z().openStoreOverlay : Z().openNativeApp,
            appendClickSignals: Z().appendClickSignals,
            Ga: Ci
        }) : !1
    }

    function wi() {
        var a = Y.b();
        a = parseInt(a.b.ignore_clicks_during_sjax_duration, 10) || -Infinity;
        return B() - ri < a
    }

    function Di(a, b, c, d) {
        var e = "n/a";
        e = e ? e : "";
        mh(a) ? fi(b, function(f) {
            f ? (d && 0 < d && (a = V(a, "ctype", d.toString())), ih(a, function(g, h) {
                function m(r, z, A) {
                    return r ? z ? gd(r, "gclid", z) : r : A
                }
                var l = b,
                    n = c;
                b = m(b, h, g);
                c = m(c, h, g);
                if (b) {
                    S({
                        id: "gmob-apps",
                        event: "try-to-open-in-app-link",
                        originalInAppUrl: l,
                        originalFallbackUrl: n,
                        inAppUrl: b,
                        finalFallbackUrl: c,
                        reengagementPingTag: e,
                        packageName: "",
                        promotedAppIsInstalledHint: !0
                    });
                    var p = B();
                    ei(b, function(r) {
                        var z = B() - p;
                        og(.01, {
                            id: "gmob-apps",
                            event: "appopendelay",
                            o: xi ? "i" : "a",
                            s: r,
                            d: z
                        });
                        r || (S({
                            id: "gmob-apps",
                            event: "fallback-after-failing-to-open-in-app-link",
                            reengagementPingTag: e,
                            packageName: "",
                            promotedAppIsInstalledHint: !0
                        }), c && Z().openNativeApp(c))
                    })
                } else c && Z().openNativeApp(c)
            })) : (S({
                id: "gmob-apps",
                event: "can-not-open-in-app",
                inAppUrl: b,
                reengagementPingTag: e
            }), Z().openNativeApp(a))
        }) : Z().openNativeApp(a)
    }

    function Ci(a) {
        -1 < a.indexOf("[gw_fbsaeid]") || (a = a.replace("?", "?fbs_aeid=[gw_fbsaeid]&"));
        if (-1 < a.indexOf("[gw_fbsaeid]")) {
            var b = rh(yh);
            b = Ch(b + Math.random() * (rh(Dh) - b));
            a = a.replace("[gw_fbsaeid]", b.toString());
            T("logScionEvent", {
                eventType: 0,
                eventId: b,
                eventName: "_ac"
            })
        }
        return a
    };

    function Ei(a, b, c, d, e, f, g, h, m, l, n) {
        return new Fi(a, b, c, d, e, f, g, h, m, void 0 === l ? !1 : l, void 0 === n ? !1 : n)
    }

    function Fi(a, b, c, d, e, f, g, h, m, l, n) {
        l = void 0 === l ? !1 : l;
        n = void 0 === n ? !1 : n;
        yf.call(this, a, b, ee, c, d, e, f, h, m);
        this.j = {};
        this.G = 0;
        g && Gi(this);
        this.P = l;
        this.C = this.v = 0;
        this.ba = n;
        a.registerApplicationHandler("mb_close_btn", y(this.Ua, this));
        (a = Q(this, "FLAG_client_side_flag_overrides")) && Hi(a);
        (a = this.b.deep_link_url) && (this.j[a] = !1);
        (a = If(this, "locationData")) && 0 < a.length && gg() && (this.j["comgooglemapsurl://www.google.com/maps"] = !1);
        a = If(this, "adData");
        var p = {};
        bb(a ? a[0] : {}, function(r, z) {
            nb(z, "_dynDL") && r &&
                (this.j[r] = !1, p[r] = z.substring(0, z.length - 6))
        }, this);
        db(this.j) || (a = cb(this.j), b = Xa(a, function(r) {
            var z = Ii(this, p[r]);
            return {
                url: r,
                id: r,
                D: z ? z : void 0
            }
        }, this), ci(b, y(this.La, this)) || gi(a, y(this.La, this)))
    }
    C(Fi, yf);

    function Ii(a, b) {
        if (b) var c = Q(a, b + "_dynAppId") || Q(a, b) || null;
        else a: {
            a = [a.b.destination_url, a.b.final_url];
            for (b = 0; b < a.length; b++) {
                var d = a[b];
                if (!Fa(d) || d.match(/^(https?:\/\/(www\.)?play\.google\.com.*)/)) try {
                    var e = mf(new P(d), "id");
                    c = e ? e : null;
                    break a
                } catch (f) {}
            }
            c = null
        }
        return c
    }
    k = Fi.prototype;
    k.La = function(a, b) {
        b && (this.j = b)
    };
    k.na = function(a, b, c) {
        var d = this,
            e = this.b.destination_url;
        if (c != N.IN_APP_PURCHASE)
            if (c == N.CLOSE && ig()) this.P || Vh();
            else if (c == N.LOCATION_FORMAT_MAP || c == N.LOCATION_FORMAT_STORE_INFO || c == N.LOCATION_FORMAT_DIRECTIONS || c == N.LOCATION || c == N.DIRECTIONS) e = Hf(this, c), Jh(Ci(e)), e = this.Y(c), gg() ? $h(e) : ii(e, {
            useFirstPackage: !0,
            useRunningProcess: !0
        });
        else if (c == N.TELEPHONE || c == N.LOCATION_FORMAT_CALL) e = mi(Y.b(), "enable_ios_call_fix"), Ff(this, li, c, e);
        else {
            var f = a ? Q(this, a + "_dynDL") || Q(this, a) || "" : this.b.deep_link_url,
                g = Cf(this, a, b || c && Zd[c], c);
            if (c == N.LOCATION_FORMAT_TEXT || c == N.LOCATION_FORMAT_IMAGE || c == N.LOCATION_FORMAT_LANDING_PAGE) g = Ci(g);
            if (this.ba && "function" == typeof t.copfcChm && "opfc" != c) e = document.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !1, window, 1), t.copfcChm(e, void 0, function(p) {
                p.preventDefault();
                d.na(a, b, "opfc")
            });
            else {
                var h = this.j[f] || !1;
                c = Y.b();
                var m = "True" == Q(this, "FLAG_pass_gclid_to_deeplink_url");
                og(.001, {
                    id: "gmob-apps",
                    event: "iaheub_pass_gclid_to_deeplink_url",
                    value: m
                });
                var l = parseInt(Q(this,
                    a + "_dynAppClickType"), 10);
                if (h) {
                    var n = Ii(this, a);
                    try {
                        if (zi(h, n, g, f, m, l)) return
                    } catch (p) {
                        og(.01, {
                            id: "gmob-apps",
                            event: "iaheub-dl-redirect-error"
                        })
                    }
                }
                f = Q(this, a + "_dynExpandedFinalUrl");
                gg() && a && "true" === Q(this, a + "_dynUserHasApp") && f ? Di(g, Q(this, a + "_dynIosCL") || f, "True" == Q(this, "FLAG_enable_expanded_final_url_as_fallback") ? f : g, l) : (f = this.b.final_url, mi(c, "html5_gmob_app_promo_u2_click_handling") && f && Bi({
                    ga: g,
                    Z: e,
                    M: f,
                    ib: !1
                }) || e && Ai(g, e) || ii(g, {
                    useFirstPackage: !0,
                    useRunningProcess: !0
                }))
            }
        }
    };
    k.Y = function(a) {
        a = Fi.L.Y.call(this, a);
        return gg() && !di(9) && this.j["comgooglemapsurl://www.google.com/maps"] ? a = a.replace(/^https?/i, "comgooglemapsurl") : a
    };

    function Gi(a) {
        U("onshow", y(function() {
            this.G = B();
            this.J.sendMessage("event", {
                e: "onshow"
            });
            Ji(this)
        }, a))
    }
    k.Ua = function(a) {
        !this.P && Ga(a.t) && 0 == this.v && (this.v = Math.min(a.t, 5), Ji(this))
    };

    function Ji(a) {
        0 >= a.v || (Uh(!0), a.C && t.clearTimeout(a.C), a.C = t.setTimeout(function() {
            Uh(!1)
        }, 1E3 * a.v))
    }
    k.Ba = function(a) {
        return this.G && a.ts ? a.ts - this.G : a.t
    };

    function Hi(a) {
        try {
            var b = Y.b(),
                c = JSON.parse(a);
            x(c) && Va(c, function(d) {
                b.b[d.name] = d.value
            })
        } catch (d) {}
    };

    function Ki() {
        Jf.call(this, window, "");
        this.g = !0;
        for (var a in this.b) this.b[a].N && Mf(this, a), Lf(this, a)
    }
    C(Ki, Jf);
    Ki.prototype.send = function(a) {
        var b = a.n;
        switch (a.t) {
            case 1:
                a = a.d;
                Kf(this, b).N(a);
                break;
            case 2:
                Kf(this, b).pa = !0, Lf(this, b)
        }
    };

    function Li(a, b) {
        var c = Mi(Ei, a, b);
        U("onshow", function() {
            var d = B();
            c.ha = d
        }, !1, c);
        return c
    }

    function Mi(a, b, c) {
        var d = new Ki;
        u("secureChannel", d, void 0);
        a(d, b, void 0, void 0, void 0, void 0, c);
        a = new Qf(d, b);
        b = B();
        a.ha = b;
        return a
    };
    U("onshow", function() {
        B()
    });
    U("onhide", function() {});
    (function() {
        if (Zb) {
            var a = /Windows NT ([0-9.]+)/;
            return (a = a.exec(F)) ? a[1] : "0"
        }
        return Yb ? (a = /10[_.][0-9_.]+/, (a = a.exec(F)) ? a[0].replace(/_/g, ".") : "10") : $b ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(F)) ? a[1] : "") : ac || bc || cc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(F)) ? a[1].replace(/_/g, ".") : "") : ""
    })();

    function Ni(a) {
        return (a = a.exec(F)) ? a[1] : ""
    }(function() {
        if (lc) return Ni(/Firefox\/([0-9.]+)/);
        if (Ub || Vb || Tb) return ic;
        if (qc) return Qb() || G("iPad") || G("iPod") ? Ni(/CriOS\/([0-9.]+)/) : Ni(/Chrome\/([0-9.]+)/);
        if (rc && !(Qb() || G("iPad") || G("iPod"))) return Ni(/Version\/([0-9.]+)/);
        if (mc || nc) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(F);
            if (a) return a[1] + "." + a[2]
        } else if (pc) return (a = Ni(/Android\s+([0-9.]+)/)) ? a : Ni(/Version\/([0-9.]+)/);
        return ""
    })();
    var Oi = {};

    function Pi(a) {
        a.stopPropagation();
        a.preventDefault();
        Oi.clo_n = (Oi.clo_n || 0) + 1;
        a = B() - Oi.clo_e_t;
        1 == Oi.clo_n && (Oi.clo_t = a);
        Oi.clo_t_n = a;
        S(Oi);
        Vh()
    };

    function Qi(a, b, c) {
        var d = document;
        b = "string" === typeof b ? d.getElementById(b) : b;
        b.innerHTML = a;
        if (void 0 !== b.firstElementChild) a = b.firstElementChild;
        else
            for (a = b.firstChild; a && 1 != a.nodeType;) a = a.nextSibling;
        a.setAttribute("fill", c || "none");
        a.setAttribute("width", "100%");
        a.setAttribute("height", "100%");
        a.style.maxHeight = "100%";
        a.style.maxWidth = "100%";
        return a
    }
    var Ri = Sa(Qi, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');

    function Si() {}
    Si.prototype.h = function() {};
    Si.prototype.g = function() {};
    var Ti = NaN;

    function Ui() {
        U("onshow", function() {
            Ti = B()
        });
        U("onhide", function() {
            Ti = NaN
        })
    }

    function Vi() {
        Uh(!0);
        U("onshow", function() {
            Uh(!0)
        })
    };

    function Wi(a, b) {
        a = a.getElementsByTagName("META");
        for (var c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content");
        return ""
    }

    function Xi(a, b, c) {
        for (var d = a.getElementsByTagName("META"), e = 0; e < d.length; ++e)
            if (d[e].getAttribute("name") === b) {
                d[e].setAttribute("content", c);
                return
            }
        d = document.createElement("META");
        d.setAttribute("name", b);
        d.setAttribute("content", c);
        a.appendChild(d)
    };

    function Yi(a, b) {
        this.g = a;
        this.b = b;
        a = Wi(b, "namespace");
        a || (a = "ns-" + Math.random().toString(36).substr(2, 5), Xi(b, "namespace", a))
    }
    Yi.prototype.Ca = function() {
        return Wi(this.b, void 0)
    };
    Yi.prototype.dispatchEvent = function(a, b) {
        a = null == b ? new CustomEvent(a) : new CustomEvent(a, {
            detail: b
        });
        this.b.dispatchEvent(a)
    };

    function Zi() {
        this.b = {};
        this.g = {};
        this.h = {}
    }
    Zi.prototype.set = function(a, b) {
        this.b[a] = b
    };
    Zi.prototype.get = function(a) {
        return this.b[a]
    };

    function $i(a, b) {
        if (b) {
            b = JSON.parse(b);
            for (var c in b) a.set(c, b[c])
        }
    };

    function aj(a) {
        this.context = a;
        this.b = new Zi
    }
    ka(aj, Si);

    function bj(a, b) {
        this.g = a;
        this.b = b
    }

    function cj(a) {
        if (!mys.Engine) throw Error("MysidiaJsError[2] ");
        var b = a.b.g,
            c = a.b.b;
        $i(a.g.b, Wi(c, "runtime_data"));
        var d = Wi(c, "render_config");
        if (!d) throw Error("MysidiaJsError[35] ");
        var e = new Nc(d ? JSON.parse(d) : null),
            f = mys.Engine.create(b, c, Bc(e)),
            g = 0;
        c.addEventListener("browserRender", function() {
            ++g;
            if (1 == g) a.b.dispatchEvent("overallStart"), dj(a, e), f.enable().then(function() {
                a.b.dispatchEvent("overallQuiet")
            });
            else {
                var h = c.clientWidth,
                    m = c.clientHeight;
                h && m && f.enable(h, m)
            }
        })
    }

    function dj(a, b) {
        if (!(2 == xc(b, 2, 0) || zc(zc(b, Lc, 1), Jc, 10) && yc(zc(zc(b, Lc, 1), Jc, 10), 16))) {
            var c = a.b.b;
            a.g.h();
            c.addEventListener("browserStart", function() {
                if (zc(zc(b, Lc, 1), Jc, 10) && yc(zc(zc(b, Lc, 1), Jc, 10), 15)) {
                    var d = a.g.b;
                    for (var e in d.h) d.b.hasOwnProperty(e) || d.set(e, JSON.stringify(d.h[e]));
                    for (var f in d.g) d.b.hasOwnProperty(f) || d.set(f, JSON.stringify(d.g[f]));
                    (d = (d = JSON.stringify(d.b)) && "{}" != d ? d : "") && Xi(c, "runtime_data", d)
                }
            });
            c.addEventListener("browserReady", function() {
                a.g.g()
            });
            c.addEventListener("browserQuiet",
                function() {})
        }
    };

    function ej(a) {
        a = a.google_template_data.rendering_settings;
        if ("object" != Ka(a)) return null;
        a = a.octagonSdkRequest;
        return "string" === typeof a ? a : null
    }

    function fj(a) {
        uf = !1;
        "true" === a.is_evc_enabled && (wf = !0);
        var b = "_blank" == ("_blank" == a.link_target ? "_blank" : "_top") || "true" == ej(a),
            c;
        "true" == ej(a) ? c = Li(a, b) : c = Mi(Nf, a, b);
        return c
    };

    function gj(a) {
        this.b = fj(a);
        this.g = [];
        this.h = Date.now();
        for (var b = a.google_template_data.locationData || [], c = 0; c < b.length; ++c) {
            var d = b[c],
                e = Object.assign({}, a);
            d && d.click_url && (e.google_click_url = d.click_url);
            this.g.push(fj(e))
        }
    }

    function hj(a, b, c) {
        for (var d = {}, e = q(Object.keys(c)), f = e.next(); !f.done; d = {
                la: d.la
            }, f = e.next()) f = f.value, d.la = c[f], Array.from(document.querySelectorAll(f)).forEach(function(g) {
            return function(h) {
                h.addEventListener("click", function(m) {
                    var l = Ti;
                    if (Date.now() - (0 < l ? l : a.h) >= b) {
                        var n = g.la;
                        l = n.ra;
                        var p = n.ab || void 0;
                        n = n.bb || 0;
                        ["LOCATION_FORMAT_MAP", "LOCATION_FORMAT_DIRECTIONS", "LOCATION_FORMAT_STORE_INFO"].includes(l) ? (n = a.g[n], n.exit(p, n.RedirectType[l])) : a.b.exit(p, a.b.RedirectType[l])
                    }
                    m.stopImmediatePropagation();
                    m.preventDefault()
                })
            }
        }(d))
    };

    function ij(a) {
        aj.call(this, a)
    }
    ka(ij, aj);
    ij.prototype.h = function() {
        ig() && Ui()
    };
    ij.prototype.g = function() {
        for (var a = q([
                [".directions-icon", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M43.41 22.59l-18-18c-.78-.78-2.05-.78-2.82 0l-18 18c-.78.78-.78 2.05 0 2.83l18 17.99v.01c.78.78 2.05.78 2.83 0l18-18c.78-.79.78-2.05-.01-2.83zM28 29v-5h-8v6h-4v-8c0-1.11.89-2 2-2h10v-5l7 7-7 7z"/><path d="M0 0h48v48H0z" fill="none"/></svg>', "#0085F7"],
                [".website-icon", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 35.86C14.11 38.88 8 32.16 8 24c0-1.23.15-2.43.42-3.58L18 30v2c0 2.21 1.79 4 4 4v3.86zm13.79-5.07C35.28 33.17 33.78 32 32 32h-2v-6c0-1.1-.9-2-2-2H16v-4h4c1.1 0 2-.9 2-2v-4h4c2.21 0 4-1.79 4-4v-.83c5.86 2.37 10 8.11 10 14.83 0 4.16-1.6 7.94-4.21 10.79z"/><path d="M0 0h48v48H0z" fill="none"/></svg>', "#0085F7"],
                [".store-info-icon", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z"/><path d="M0 0h48v48H0z" fill="none"/></svg>', "#0085F7"],
                [".map-pin-icon", '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
                    "#E53935"
                ]
            ]), b = a.next(); !b.done; b = a.next()) {
            var c = q(b.value),
                d = c.next().value;
            b = c.next().value;
            c = c.next().value;
            (d = document.querySelector(d)) && Qi(b, d, c)
        }
        a = this.b.get("layoutType");
        var e = "interstitial" == a ? 20 : 10,
            f = document.querySelector(".x-layout");
        b = null;
        b = "banner" === a ? f : document.querySelector(".ad-card");
        b.addEventListener("click", function(g) {
            var h = [e, e, e, e],
                m = f.getBoundingClientRect(),
                l = g.clientX,
                n = g.clientY;
            if (n - h[0] < m.top || l + h[1] > m.right || n + h[2] > m.bottom || l - h[3] < m.left) g.stopImmediatePropagation(),
                g.preventDefault()
        }, !0);
        switch (a) {
            case "interstitial":
                jj(this);
                break;
            case "square":
                kj(this, {
                    ".top-panel, .logo, .headline, .description, .store-name": "LOCATION_FORMAT_TEXT",
                    ".website-button": "LOCATION_FORMAT_LANDING_PAGE",
                    ".directions-button": "LOCATION_FORMAT_DIRECTIONS",
                    ".map, .map-city, .map-pin-icon": "LOCATION_FORMAT_MAP"
                });
                break;
            case "banner":
                kj(this, {
                    ".frame12": "LOCATION_FORMAT_TEXT",
                    ".white-capsule, .directions-icon-container, .small-directions-icon": "LOCATION_FORMAT_DIRECTIONS",
                    ".map-city, .open-hours, .frame3": "LOCATION_FORMAT_MAP"
                })
        }
    };

    function jj(a) {
        var b = document.querySelector(".close-button");
        Ri(b, "#757575");
        Oi.clo_e_t = B();
        Oi.clo = b.id;
        b.addEventListener("click", Pi);
        document.querySelector(".close-button-container").addEventListener("click", function(c) {
            c.stopImmediatePropagation();
            c.preventDefault()
        });
        Vi();
        kj(a, {
            ".logo-panel, .text-panel, .store-name, .rating": "LOCATION_FORMAT_TEXT",
            ".logo, .headline, .description": "LOCATION_FORMAT_TEXT",
            ".website-button": "LOCATION_FORMAT_LANDING_PAGE",
            ".product-image": "LOCATION_FORMAT_IMAGE",
            ".directions-button": "LOCATION_FORMAT_DIRECTIONS",
            ".store-info-button": "LOCATION_FORMAT_STORE_INFO",
            ".rating": "LOCATION_FORMAT_STORE_INFO",
            ".map": "LOCATION_FORMAT_MAP"
        })
    }

    function kj(a, b) {
        var c = parseInt(a.b.get("clickDelayMs"), 10);
        a = JSON.parse(a.b.get("h5data") || "{}");
        a = new gj(a);
        var d = {};
        b = q(Object.entries(b));
        for (var e = b.next(); !e.done; e = b.next()) {
            var f = q(e.value);
            e = f.next().value;
            f = f.next().value;
            d[e] = {
                ra: f,
                ab: null,
                bb: 0
            }
        }
        hj(a, c, d)
    };

    function lj() {
        ij.apply(this, arguments)
    }
    ka(lj, ij);
    (function(a) {
        u("mys.design.init", function(b, c) {
            b = new Yi(b, c);
            c = a(b);
            cj(new bj(c, b))
        }, void 0)
    })(function(a) {
        return new lj(a)
    });
}).call(this);