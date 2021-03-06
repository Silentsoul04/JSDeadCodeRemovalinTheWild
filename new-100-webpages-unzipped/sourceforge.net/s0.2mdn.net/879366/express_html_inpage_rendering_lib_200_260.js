(function() {
    var h, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        da = function(a) {
            if (!(a instanceof Array)) {
                a = ba(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    vb: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.vb;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = fa,
        n = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.P = b.prototype
        },
        la = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global :
        this,
        na = function(a, b) {
            if (b) {
                var c = ma;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    e in c || (c[e] = {});
                    c = c[e]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && la(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    na("Promise", function(a) {
        function b() {
            this.a = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(k) {
                k(g)
            })
        }
        if (a) return a;
        b.prototype.f = function(g) {
            if (null == this.a) {
                this.a = [];
                var k = this;
                this.g(function() {
                    k.o()
                })
            }
            this.a.push(g)
        };
        var d = ma.setTimeout;
        b.prototype.g = function(g) {
            d(g, 0)
        };
        b.prototype.o = function() {
            for (; this.a && this.a.length;) {
                var g = this.a;
                this.a = [];
                for (var k = 0; k < g.length; ++k) {
                    var l = g[k];
                    g[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.j(m)
                    }
                }
            }
            this.a = null
        };
        b.prototype.j = function(g) {
            this.g(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.f = 0;
            this.g = void 0;
            this.a = [];
            var k = this.j();
            try {
                g(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.j = function() {
            function g(m) {
                return function(r) {
                    l || (l = !0, m.call(k, r))
                }
            }
            var k = this,
                l = !1;
            return {
                resolve: g(this.C),
                reject: g(this.o)
            }
        };
        e.prototype.C = function(g) {
            if (g === this) this.o(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.H(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var k = null != g;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1
                }
                k ? this.A(g) : this.B(g)
            }
        };
        e.prototype.A = function(g) {
            var k = void 0;
            try {
                k = g.then
            } catch (l) {
                this.o(l);
                return
            }
            "function" == typeof k ? this.D(k, g) : this.B(g)
        };
        e.prototype.o = function(g) {
            this.s(2, g)
        };
        e.prototype.B = function(g) {
            this.s(1, g)
        };
        e.prototype.s = function(g, k) {
            if (0 != this.f) throw Error("Cannot settle(" + g + ", " + k + "): Promise already settled in state" + this.f);
            this.f = g;
            this.g = k;
            this.v()
        };
        e.prototype.v = function() {
            if (null != this.a) {
                for (var g = 0; g < this.a.length; ++g) f.f(this.a[g]);
                this.a = null
            }
        };
        var f = new b;
        e.prototype.H = function(g) {
            var k =
                this.j();
            g.za(k.resolve, k.reject)
        };
        e.prototype.D = function(g, k) {
            var l = this.j();
            try {
                g.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function(g, k) {
            function l(ca, Aa) {
                return "function" == typeof ca ? function(Oc) {
                    try {
                        m(ca(Oc))
                    } catch (Pc) {
                        r(Pc)
                    }
                } : Aa
            }
            var m, r, Ba = new e(function(ca, Aa) {
                m = ca;
                r = Aa
            });
            this.za(l(g, m), l(k, r));
            return Ba
        };
        e.prototype["catch"] = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.za = function(g, k) {
            function l() {
                switch (m.f) {
                    case 1:
                        g(m.g);
                        break;
                    case 2:
                        k(m.g);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            m.f);
                }
            }
            var m = this;
            null == this.a ? f.f(l) : this.a.push(l)
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(k, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(k, l) {
                for (var m = ba(g), r = m.next(); !r.done; r = m.next()) c(r.value).za(k, l)
            })
        };
        e.all = function(g) {
            var k = ba(g),
                l = k.next();
            return l.done ? c([]) : new e(function(m, r) {
                function Ba(Oc) {
                    return function(Pc) {
                        ca[Oc] = Pc;
                        Aa--;
                        0 == Aa && m(ca)
                    }
                }
                var ca = [],
                    Aa = 0;
                do ca.push(void 0), Aa++, c(l.value).za(Ba(ca.length - 1), r), l = k.next(); while (!l.done)
            })
        };
        return e
    });
    var p = this || self,
        q = function(a) {
            return void 0 !== a
        },
        t = function(a) {
            return "string" == typeof a
        },
        oa = function(a) {
            return "number" == typeof a
        },
        pa = /^[\w+/_-]+[=]{0,2}$/,
        qa = null,
        u = function(a, b) {
            a = a.split(".");
            b = b || p;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        v = function() {},
        ra = function(a) {
            a.La = void 0;
            a.getInstance = function() {
                return a.La ? a.La : a.La = new a
            }
        },
        sa = function(a) {
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
        },
        w = function(a) {
            return "array" == sa(a)
        },
        ta = function(a) {
            var b =
                sa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        ua = function(a) {
            return "function" == sa(a)
        },
        va = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        wa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        xa = 0,
        ya = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        za = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b,
                        e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        x = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = ya : x = za;
            return x.apply(null, arguments)
        },
        Ca = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        y = function() {
            return +new Date
        },
        z = function(a, b) {
            a = a.split(".");
            var c = p;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length &&
                (d = a.shift());) !a.length && q(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
        },
        A = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.P = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var Da = document;
    var B = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, B);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    A(B, Error);
    B.prototype.name = "CustomError";
    var Ea;
    var Fa = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        B.call(this, c + a[d])
    };
    A(Fa, B);
    Fa.prototype.name = "AssertionError";
    var Ga = function(a, b) {
            if (t(a)) return t(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        C = function(a, b, c) {
            for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ha = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = t(a) ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var k = f[g];
                    b.call(void 0, k, g, a) && (d[e++] = k)
                }
            return d
        },
        Ia = function(a, b) {
            for (var c = a.length, d = Array(c), e = t(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Ja = function(a, b) {
            for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Ka = function(a, b, c) {
            for (var d = a.length, e = t(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        La = function(a, b) {
            a: {
                for (var c = a.length, d = t(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    }
                b = -1
            }
            return 0 > b ? null : t(a) ? a.charAt(b) : a[b]
        },
        D = function(a, b) {
            b = Ga(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        Ma = function(a) {
            return Array.prototype.concat.apply([],
                arguments)
        },
        Na = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        Oa = function(a, b) {
            var c = {};
            C(a, function(d, e) {
                c[b.call(void 0, d, e, a)] = d
            });
            return c
        };
    var Pa = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Qa = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Ra = function(a, b) {
            for (var c in a)
                if (!b.call(void 0, a[c], c, a)) return !1;
            return !0
        },
        Sa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Ta = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Va = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ua.length; f++) c = Ua[f],
                    Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Wa = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var E = function(a, b) {
        this.a = a === Xa && b || "";
        this.f = Ya
    };
    E.prototype.ia = !0;
    E.prototype.fa = function() {
        return this.a
    };
    E.prototype.toString = function() {
        return "Const{" + this.a + "}"
    };
    var Za = function(a) {
            return a instanceof E && a.constructor === E && a.f === Ya ? a.a : "type_error:Const"
        },
        Ya = {},
        Xa = {},
        $a = new E(Xa, "");
    var bb = function() {
        this.f = "";
        this.g = ab
    };
    bb.prototype.ia = !0;
    bb.prototype.fa = function() {
        return this.f.toString()
    };
    bb.prototype.Ka = !0;
    bb.prototype.a = function() {
        return 1
    };
    var cb = function(a) {
            if (a instanceof bb && a.constructor === bb && a.g === ab) return a.f;
            sa(a);
            return "type_error:TrustedResourceUrl"
        },
        ab = {},
        db = function(a) {
            var b = new bb;
            b.f = a;
            return b
        };
    var F = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        eb = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        mb = function(a) {
            if (!fb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(gb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(hb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ib, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(jb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(kb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(lb, "&#0;"));
            return a
        },
        gb = /&/g,
        hb = /</g,
        ib = />/g,
        jb = /"/g,
        kb = /'/g,
        lb = /\x00/g,
        fb = /[\x00&<>"']/,
        ob = function(a, b) {
            var c = 0;
            a = eb(String(a)).split(".");
            b = eb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = nb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || nb(0 == f[2].length, 0 == g[2].length) || nb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        nb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var G = function() {
        this.f = "";
        this.g = pb
    };
    G.prototype.ia = !0;
    G.prototype.fa = function() {
        return this.f.toString()
    };
    G.prototype.Ka = !0;
    G.prototype.a = function() {
        return 1
    };
    var qb = function(a) {
            if (a instanceof G && a.constructor === G && a.g === pb) return a.f;
            sa(a);
            return "type_error:SafeUrl"
        },
        rb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        tb = function(a) {
            if (a instanceof G) return a;
            a = "object" == typeof a && a.ia ? a.fa() : String(a);
            rb.test(a) || (a = "about:invalid#zClosurez");
            return sb(a)
        },
        pb = {},
        sb = function(a) {
            var b = new G;
            b.f = a;
            return b
        };
    sb("about:blank");
    var vb = function() {
        this.a = "";
        this.f = ub
    };
    vb.prototype.ia = !0;
    var ub = {};
    vb.prototype.fa = function() {
        return this.a
    };
    var wb = function(a) {
            var b = new vb;
            b.a = a;
            return b
        },
        xb = wb(""),
        Eb = function(a) {
            if (a instanceof G) return 'url("' + qb(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof E) a = Za(a);
            else {
                a = String(a);
                var b = a.replace(yb, "$1").replace(yb, "$1").replace(zb, "url");
                if (Ab.test(b)) {
                    if (b = !Bb.test(a)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && Cb(a)
                    }
                    a = b ? Db(a) : "zClosurez"
                } else a = "zClosurez"
            }
            if (/[{;}]/.test(a)) throw new Fa("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        Cb = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        },
        Ab = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        zb = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        yb = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Bb = /\/\*/,
        Db = function(a) {
            return a.replace(zb,
                function(b, c, d, e) {
                    var f = "";
                    d = d.replace(/^(['"])(.*)\1$/, function(g, k, l) {
                        f = k;
                        return l
                    });
                    b = tb(d).fa();
                    return c + f + b + f + e
                })
        };
    var Fb;
    a: {
        var Gb = p.navigator;
        if (Gb) {
            var Hb = Gb.userAgent;
            if (Hb) {
                Fb = Hb;
                break a
            }
        }
        Fb = ""
    }
    var H = function(a) {
        return -1 != Fb.indexOf(a)
    };
    var Ib = function() {
            return H("Firefox") || H("FxiOS")
        },
        Jb = function() {
            return (H("Chrome") || H("CriOS")) && !H("Edge")
        };
    var Lb = function() {
        this.f = "";
        this.j = Kb;
        this.g = null
    };
    Lb.prototype.Ka = !0;
    Lb.prototype.a = function() {
        return this.g
    };
    Lb.prototype.ia = !0;
    Lb.prototype.fa = function() {
        return this.f.toString()
    };
    var Mb = function(a) {
            if (a instanceof Lb && a.constructor === Lb && a.j === Kb) return a.f;
            sa(a);
            return "type_error:SafeHtml"
        },
        Ob = function(a) {
            if (a instanceof Lb) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.Ka && (c = a.a());
            return Nb(mb(b && a.ia ? a.fa() : String(a)), c)
        },
        Pb = /^[a-zA-Z0-9-]+$/,
        Qb = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Rb = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Tb = function(a) {
            var b = Ob(Sb),
                c = b.a(),
                d = [],
                e = function(f) {
                    w(f) ? C(f, e) : (f = Ob(f), d.push(Mb(f).toString()), f = f.a(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            C(a, e);
            return Nb(d.join(Mb(b).toString()), c)
        },
        Ub = function(a) {
            return Tb(Array.prototype.slice.call(arguments))
        },
        Kb = {},
        Nb = function(a, b) {
            return Vb(a, b)
        },
        Vb = function(a, b) {
            var c = new Lb;
            c.f = a;
            c.g = b;
            return c
        };
    Vb("<!DOCTYPE html>", 0);
    var Sb = Vb("", 0);
    Vb("<br>", 0);
    var Wb = Pa(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = Mb(Sb);
            return !b.parentElement
        }),
        Xb = function(a) {
            var b = db(Za($a));
            a.src = cb(b).toString()
        },
        Yb = function(a, b) {
            a.src = cb(b);
            if (null === qa) b: {
                b = p.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && pa.test(b)) {
                    qa = b;
                    break b
                }
                qa = ""
            }
            b = qa;
            b && a.setAttribute("nonce", b)
        };
    var I = function(a) {
            return null == a ? "" : String(a)
        },
        Zb = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        $b = function(a) {
            var b = t(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(c, d, e) {
                return d + e.toUpperCase()
            })
        };
    var ac = function() {
        return H("iPhone") && !H("iPod") && !H("iPad")
    };
    var bc = function(a) {
        bc[" "](a);
        return a
    };
    bc[" "] = v;
    var cc = function(a, b) {
            try {
                return bc(a[b]), !0
            } catch (c) {}
            return !1
        },
        ec = function(a, b) {
            var c = dc;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var fc = H("Opera"),
        J = H("Trident") || H("MSIE"),
        gc = H("Edge"),
        hc = gc || J,
        ic = H("Gecko") && !(-1 != Fb.toLowerCase().indexOf("webkit") && !H("Edge")) && !(H("Trident") || H("MSIE")) && !H("Edge"),
        jc = -1 != Fb.toLowerCase().indexOf("webkit") && !H("Edge"),
        kc = jc && H("Mobile"),
        lc = H("Android"),
        mc = function() {
            var a = p.document;
            return a ? a.documentMode : void 0
        },
        nc;
    a: {
        var oc = "",
            pc = function() {
                var a = Fb;
                if (ic) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (gc) return /Edge\/([\d\.]+)/.exec(a);
                if (J) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (jc) return /WebKit\/(\S+)/.exec(a);
                if (fc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();pc && (oc = pc ? pc[1] : "");
        if (J) {
            var qc = mc();
            if (null != qc && qc > parseFloat(oc)) {
                nc = String(qc);
                break a
            }
        }
        nc = oc
    }
    var rc = nc,
        dc = {},
        sc = function(a) {
            return ec(a, function() {
                return 0 <= ob(rc, a)
            })
        },
        tc;
    tc = p.document && J ? mc() : void 0;
    var uc = Ib(),
        vc = ac() || H("iPod"),
        wc = H("iPad"),
        xc = H("Android") && !(Jb() || Ib() || H("Opera") || H("Silk")),
        yc = Jb(),
        zc = H("Safari") && !(Jb() || H("Coast") || H("Opera") || H("Edge") || H("Edg/") || H("OPR") || Ib() || H("Silk") || H("Android")) && !(ac() || H("iPad") || H("iPod"));
    var Ac = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };
    var Bc = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        Cc = function(a, b) {
            if (3 == ({
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[b.visibilityState || b.webkitVisibilityState || b.mozVisibilityState || ""] || 0)) return !1;
            a();
            return !0
        },
        Dc = function(a) {
            var b = document;
            if (!Cc(a, b)) {
                var c = !1,
                    d = Bc(b),
                    e = function() {
                        !c && Cc(a, b) && (c = !0, b.removeEventListener && b.removeEventListener(d, e, !1))
                    };
                d && Ac(b,
                    d, e)
            }
        };
    var Ec = function(a, b) {
        this.x = q(a) ? a : 0;
        this.y = q(b) ? b : 0
    };
    Ec.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Ec.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Ec.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var K = function(a, b) {
            this.width = a;
            this.height = b
        },
        Fc = function(a) {
            return new K(a.width, a.height)
        };
    K.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    K.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    K.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    K.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ic = function(a) {
            return a ? new Gc(Hc(a)) : Ea || (Ea = new Gc)
        },
        Jc = function(a, b) {
            return t(b) ? a.getElementById(b) : b
        },
        Lc = function(a, b) {
            Qa(b, function(c, d) {
                c && "object" == typeof c && c.ia && (c = c.fa());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Kc.hasOwnProperty(d) ? a.setAttribute(Kc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        Kc = {
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
        },
        Mc = function(a) {
            return a.scrollingElement ? a.scrollingElement : jc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
        },
        Nc = function(a, b) {
            return a.createElement(String(b))
        },
        Qc = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        Hc = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Gc = function(a) {
            this.a = a || p.document || document
        };
    Gc.prototype.O = function() {
        return Jc(this.a, void 0)
    };
    var Sc = function(a) {
            Rc();
            return db(a)
        },
        Rc = v;
    var Tc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Uc = function(a, b, c) {
            if (w(b))
                for (var d = 0; d < b.length; d++) Uc(a, String(b[d]), c);
            else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        },
        Vc = function(a, b) {
            if (b += "") {
                var c = a.indexOf("#");
                0 > c && (c = a.length);
                var d = a.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var e = ""
                } else e = a.substring(d + 1, c);
                a = [a.substr(0, d), e, a.substr(c)];
                c = a[1];
                a[1] = b ? c ? c + "&" + b : b : c;
                b = a[0] + (a[1] ? "?" + a[1] : "") + a[2]
            } else b =
                a;
            return b
        },
        Wc = /#|$/;
    var Yc = function() {
        var a = Xc;
        try {
            return !!a && null != a.location.href && cc(a, "foo")
        } catch (b) {
            return !1
        }
    };
    var Zc = function(a, b, c) {
            a.google_image_requests || (a.google_image_requests = []);
            var d = a.document.createElement("img");
            c && (d.referrerPolicy = "no-referrer");
            d.src = b;
            a.google_image_requests.push(d)
        },
        $c = Pa(function() {
            return "referrerPolicy" in p.document.createElement("img")
        });
    var ad = function() {
            return jc ? "Webkit" : ic ? "Moz" : J ? "ms" : fc ? "O" : null
        },
        bd = function() {
            return jc ? "-webkit" : ic ? "-moz" : J ? "-ms" : fc ? "-o" : null
        };
    var cd = function(a, b) {
        this.top = a;
        this.left = b
    };
    cd.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.left = Math.ceil(this.left);
        return this
    };
    cd.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.left = Math.floor(this.left);
        return this
    };
    cd.prototype.round = function() {
        this.top = Math.round(this.top);
        this.left = Math.round(this.left);
        return this
    };
    var dd = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    dd.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    dd.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    dd.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var fd = function(a, b, c) {
            if (t(b))(b = ed(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = ed(c, d);
                    f && (c.style[f] = e)
                }
        },
        gd = {},
        ed = function(a, b) {
            var c = gd[b];
            if (!c) {
                var d = Zb(b);
                c = d;
                void 0 === a.style[d] && (d = ad() + $b(d), void 0 !== a.style[d] && (c = d));
                gd[b] = c
            }
            return c
        },
        hd = function(a, b) {
            var c = a.style[Zb(b)];
            return "undefined" !== typeof c ? c : a.style[ed(a, b)] || ""
        },
        id = function(a) {
            a: {
                var b = Hc(a);
                if (b.defaultView && b.defaultView.getComputedStyle && (b = b.defaultView.getComputedStyle(a, null))) {
                    b = b.position || b.getPropertyValue("position") ||
                        "";
                    break a
                }
                b = ""
            }
            b || (b = a.currentStyle ? a.currentStyle.position : null);
            return b || a.style && a.style.position
        },
        kd = function(a, b, c) {
            if (b instanceof K) c = b.height, b = b.width;
            else if (void 0 == c) throw Error("missing height argument");
            a.style.width = jd(b, !0);
            a.style.height = jd(c, !0)
        },
        jd = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        };
    var ld = !!window.google_async_iframe_id,
        Xc = ld && window.parent || window,
        md = function() {
            if (ld && !Yc()) {
                var a = "." + Da.domain;
                try {
                    for (; 2 < a.split(".").length && !Yc();) Da.domain = a = a.substr(a.indexOf(".") + 1), Xc = window.parent
                } catch (b) {}
                Yc() || (Xc = window)
            }
            return Xc
        };
    y();
    var nd = null;
    var od = function(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var pd = p.performance,
        qd = !!(pd && pd.mark && pd.measure && pd.clearMarks),
        rd = Pa(function() {
            var a;
            if (a = qd) {
                var b;
                if (null === nd) {
                    nd = "";
                    try {
                        a = "";
                        try {
                            a = p.top.location.hash
                        } catch (c) {
                            a = p.location.hash
                        }
                        a && (nd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = nd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        sd = function() {
            var a = md();
            this.a = [];
            this.g = a || p;
            var b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.a = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.f = rd() || (null !=
                b ? b : 1 > Math.random())
        },
        td = function(a) {
            a && pd && rd() && (pd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), pd.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
        };
    sd.prototype.start = function(a, b) {
        if (!this.f) return null;
        var c = void 0 === c ? p : c;
        c = c.performance;
        (c = c && c.now ? c.now() : null) || (c = (c = p.performance) && c.now && c.timing ? Math.floor(c.now() + c.timing.navigationStart) : y());
        a = new od(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        pd && rd() && pd.mark(b);
        return a
    };
    var ud = new sd,
        vd = function() {
            var a = md();
            a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (ud.f = !1, ud.a != ud.g.google_js_reporting_queue && (rd() && C(ud.a, td), ud.a.length = 0))
        };
    (function() {
        var a = md();
        a && a.document && ("complete" == a.document.readyState ? vd() : ud.f && Ac(a, "load", function() {
            vd()
        }))
    })();
    if (Da && Da.URL) {
        var wd = Da.URL;
        if (wd && wd) {
            var xd = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                xd.exec(decodeURIComponent(wd))
            } catch (a) {}
        }
    };
    var yd = function(a, b) {
        this.j = Math.random() < a;
        this.s = b;
        this.g = null;
        this.o = ""
    };
    yd.prototype.f = function() {
        return this.j && null !== this.g ? (this.s + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.g + this.o).substring(0, 2E3) : ""
    };
    var zd = function() {};
    z("studio.common.Environment", zd);
    zd.Type = {
        LIVE: 1,
        LOCAL: 2,
        BROWSER: 4,
        IN_APP: 8,
        LAYOUTS_PREVIEW: 16,
        CREATIVE_TOOLSET: 32,
        RENDERING_STUDIO: 64,
        RENDERING_TEST: 128,
        PREVIEW: 256
    };
    var Ad = 6,
        Cd = function(a) {
            Ad |= a;
            Bd(a)
        };
    zd.addType = Cd;
    zd.setType = function(a) {
        Ad = a | 6;
        Bd(Ad)
    };
    var Dd = function(a) {
        return (Ad & a) == a
    };
    zd.hasType = Dd;
    zd.getValue = function() {
        return Ad
    };
    var Bd = function(a) {
            Ed(a, 2, 1);
            Ed(a, 1, 2);
            Ed(a, 4, 8);
            Ed(a, 8, 4);
            Ed(a, 128, 64);
            Ed(a, 64, 128);
            Ed(a, 256, 2)
        },
        Ed = function(a, b, c) {
            (a & b) == b && (Ad |= b, Ad &= ~c)
        };
    var Fd = function(a, b) {
        this.f = {};
        this.a = [];
        this.g = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Fd)
                for (c = a.Ba(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    Fd.prototype.la = function() {
        Gd(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.f[this.a[b]]);
        return a
    };
    Fd.prototype.Ba = function() {
        Gd(this);
        return this.a.concat()
    };
    var Gd = function(a) {
        if (a.g != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                Object.prototype.hasOwnProperty.call(a.f, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.g != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], Object.prototype.hasOwnProperty.call(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    Fd.prototype.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.f, a) ? this.f[a] : b
    };
    Fd.prototype.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.f, a) || (this.g++, this.a.push(a));
        this.f[a] = b
    };
    var Hd = function(a) {
            if (a.la && "function" == typeof a.la) return a.la();
            if (t(a)) return a.split("");
            if (ta(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Sa(a)
        },
        Jd = function(a) {
            var b = Id.a,
                c = Id;
            if ("function" == typeof a.every) return a.every(b, c);
            if (ta(a) || t(a)) return Ka(a, b, c);
            if (a.Ba && "function" == typeof a.Ba) var d = a.Ba();
            else if (a.la && "function" == typeof a.la) d = void 0;
            else if (ta(a) || t(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f)
            } else
                for (f in d = [], e = 0, a) d[e++] = f;
            e = Hd(a);
            f = e.length;
            for (var g = 0; g < f; g++)
                if (!b.call(c, e[g], d && d[g], a)) return !1;
            return !0
        };
    var Kd = function() {
            this.f = new Fd
        },
        Ld = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + (a[wa] || (a[wa] = ++xa)) : b.substr(0, 1) + a
        };
    Kd.prototype.add = function(a) {
        this.f.set(Ld(a), a)
    };
    Kd.prototype.a = function(a) {
        a = Ld(a);
        return Object.prototype.hasOwnProperty.call(this.f.f, a)
    };
    Kd.prototype.la = function() {
        return this.f.la()
    };
    z("studio.common.Feature.Type", {
        ce: 1,
        SDK_EVENT_FORWARDER: 2,
        RL_EVENT_FORWARDER: 3
    });
    var Id = new Kd;
    z("studio.common.Feature.hasFeature", function(a) {
        return Id.a(a)
    });
    z("studio.common.Feature.hasFeatures", function(a) {
        return Jd(a)
    });
    var Md = function(a, b) {
        this.a = a;
        this.f = null != b ? b : 0
    };
    z("studio.common.Orientation", Md);
    Md.Mode = {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape"
    };
    Md.prototype.dc = function() {
        return this.a
    };
    Md.prototype.getMode = Md.prototype.dc;
    Md.prototype.ac = function() {
        return this.f
    };
    Md.prototype.getDegrees = Md.prototype.ac;
    Md.prototype.toString = function() {
        return this.a
    };
    var Nd = function(a, b, c, d, e) {
        if (!F(I(a)) && -1 < a.indexOf("?")) {
            e = oa(e) ? e : 1;
            for (var f = 0; f < e; f++) b = encodeURIComponent(b)
        }
        c && (a = c ? a.replace("[rm_exit_id]", c) : a, b = d ? encodeURIComponent(d + b) : b);
        return a + b
    };
    z("studio.common.Visibility.VISIBILITY_PARAMS_KEY", "visibilityParams");
    z("studio.common.Visibility.VISIBILITY_FRACTION_KEY", "visibilityFraction");
    z("studio.common.Visibility.VISIBLE_BOX_KEY", "visibleBox");
    z("studio.common.Visibility.createVisibilityParams", function(a, b) {
        return {
            visibilityFraction: a,
            visibleBox: b
        }
    });
    z("studio.common.WhitelistedExternalObject", {
        CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
        CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
        CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
        CREATIVE_REPORTER: "creativeReporter",
        CREATIVE_INNOVATION: "gcreativeinnovation",
        GOOGLE_AFMA_SUPPORT: "googleAfmaSupport"
    });
    var L = function() {
        this.H = this.H;
        this.B = this.B
    };
    L.prototype.H = !1;
    L.prototype.dispose = function() {
        this.H || (this.H = !0, this.G())
    };
    L.prototype.G = function() {
        if (this.B)
            for (; this.B.length;) this.B.shift()()
    };
    var Od = function(a) {
            a && "function" == typeof a.dispose && a.dispose()
        },
        Pd = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                ta(d) ? Pd.apply(null, d) : Od(d)
            }
        };
    var Qd = !J || 9 <= Number(tc),
        Rd = J && !sc("9"),
        Sd = function() {
            if (!p.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                p.addEventListener("test", v, b), p.removeEventListener("test", v, b)
            } catch (c) {}
            return a
        }();
    var M = function(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.lb = !0
    };
    M.prototype.j = function() {
        this.lb = !1
    };
    var Ud = function(a, b) {
        M.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.f = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            (b = a.relatedTarget) ? ic && (cc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement :
                "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId =
                a.pointerId || 0;
            this.pointerType = t(a.pointerType) ? a.pointerType : Td[a.pointerType] || "";
            this.state = a.state;
            this.f = a;
            a.defaultPrevented && this.j()
        }
    };
    A(Ud, M);
    var Td = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Ud.prototype.j = function() {
        Ud.P.j.call(this);
        var a = this.f;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Rd) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Vd = "closure_listenable_" + (1E6 * Math.random() | 0),
        Wd = function(a) {
            return !(!a || !a[Vd])
        },
        Xd = 0;
    var Yd = function(a, b, c, d, e) {
            this.listener = a;
            this.a = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ca = e;
            this.key = ++Xd;
            this.ta = this.ya = !1
        },
        Zd = function(a) {
            a.ta = !0;
            a.listener = null;
            a.a = null;
            a.src = null;
            a.Ca = null
        };
    var $d = function(a) {
        this.src = a;
        this.a = {};
        this.f = 0
    };
    $d.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.f++);
        var g = ae(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ya = !1)) : (b = new Yd(b, this.src, f, !!d, e), b.ya = c, a.push(b));
        return b
    };
    var be = function(a, b) {
            var c = b.type;
            c in a.a && D(a.a[c], b) && (Zd(b), 0 == a.a[c].length && (delete a.a[c], a.f--))
        },
        ce = function(a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = ae(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        ae = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.ta && f.listener == b && f.capture == !!c && f.Ca == d) return e
            }
            return -1
        };
    var de = "closure_lm_" + (1E6 * Math.random() | 0),
        ee = {},
        fe = 0,
        he = function(a, b, c, d, e) {
            if (d && d.once) return ge(a, b, c, d, e);
            if (w(b)) {
                for (var f = 0; f < b.length; f++) he(a, b[f], c, d, e);
                return null
            }
            c = ie(c);
            return Wd(a) ? a.j.add(String(b), c, !1, va(d) ? !!d.capture : !!d, e) : je(a, b, c, !1, d, e)
        },
        je = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = va(e) ? !!e.capture : !!e,
                k = ke(a);
            k || (a[de] = k = new $d(a));
            c = k.add(b, c, d, g, f);
            if (c.a) return c;
            d = le();
            c.a = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Sd || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(me(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            fe++;
            return c
        },
        le = function() {
            var a = ne,
                b = Qd ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ge = function(a, b, c, d, e) {
            if (w(b)) {
                for (var f = 0; f < b.length; f++) ge(a, b[f], c, d, e);
                return null
            }
            c = ie(c);
            return Wd(a) ? a.j.add(String(b),
                c, !0, va(d) ? !!d.capture : !!d, e) : je(a, b, c, !0, d, e)
        },
        oe = function(a, b, c, d, e) {
            if (w(b))
                for (var f = 0; f < b.length; f++) oe(a, b[f], c, d, e);
            else d = va(d) ? !!d.capture : !!d, c = ie(c), Wd(a) ? (a = a.j, b = String(b).toString(), b in a.a && (f = a.a[b], c = ae(f, c, d, e), -1 < c && (Zd(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.f--)))) : a && (a = ke(a)) && (c = ce(a, b, c, d, e)) && pe(c)
        },
        pe = function(a) {
            if (!oa(a) && a && !a.ta) {
                var b = a.src;
                if (Wd(b)) be(b.j, a);
                else {
                    var c = a.type,
                        d = a.a;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) :
                        b.detachEvent ? b.detachEvent(me(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    fe--;
                    (c = ke(b)) ? (be(c, a), 0 == c.f && (c.src = null, b[de] = null)) : Zd(a)
                }
            }
        },
        me = function(a) {
            return a in ee ? ee[a] : ee[a] = "on" + a
        },
        re = function(a, b, c, d) {
            var e = !0;
            if (a = ke(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.ta && (f = qe(f, d), e = e && !1 !== f)
                    }
            return e
        },
        qe = function(a, b) {
            var c = a.listener,
                d = a.Ca || a.src;
            a.ya && pe(a);
            return c.call(d, b)
        },
        ne = function(a, b) {
            if (a.ta) return !0;
            if (!Qd) {
                var c =
                    b || u("window.event");
                b = new Ud(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; 0 <= e; e--) {
                        b.a = c[e];
                        var f = re(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; e < c.length; e++) b.a = c[e],
                    f = re(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return qe(a, new Ud(b, this))
        },
        ke = function(a) {
            a = a[de];
            return a instanceof $d ? a : null
        },
        se = "__closure_events_fn_" + (1E9 * Math.random() >>>
            0),
        ie = function(a) {
            if (ua(a)) return a;
            a[se] || (a[se] = function(b) {
                return a.handleEvent(b)
            });
            return a[se]
        };
    var te = function(a) {
        L.call(this);
        this.f = a;
        this.a = {}
    };
    A(te, L);
    var ue = [],
        N = function(a, b, c, d) {
            w(c) || (c && (ue[0] = c.toString()), c = ue);
            for (var e = 0; e < c.length; e++) {
                var f = he(b, c[e], d || a.handleEvent, !1, a.f || a);
                if (!f) break;
                a.a[f.key] = f
            }
        },
        ve = function(a, b, c, d, e, f) {
            if (w(c))
                for (var g = 0; g < c.length; g++) ve(a, b, c[g], d, e, f);
            else(b = ge(b, c, d || a.handleEvent, e, f || a.f || a)) && (a.a[b.key] = b)
        },
        we = function(a, b, c, d, e, f) {
            if (w(c))
                for (var g = 0; g < c.length; g++) we(a, b, c[g], d, e, f);
            else d = d || a.handleEvent, e = va(e) ? !!e.capture : !!e, f = f || a.f || a, d = ie(d), e = !!e, c = Wd(b) ? ce(b.j, String(c), d, e, f) : b ? (b = ke(b)) ?
                ce(b, c, d, e, f) : null : null, c && (pe(c), delete a.a[c.key])
        },
        xe = function(a) {
            Qa(a.a, function(b, c) {
                this.a.hasOwnProperty(c) && pe(b)
            }, a);
            a.a = {}
        };
    te.prototype.G = function() {
        te.P.G.call(this);
        xe(this)
    };
    te.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var O = function() {
        L.call(this);
        this.j = new $d(this);
        this.ja = this;
        this.U = null
    };
    A(O, L);
    O.prototype[Vd] = !0;
    h = O.prototype;
    h.Va = function(a) {
        this.U = a
    };
    h.addEventListener = function(a, b, c, d) {
        he(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        oe(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        var b = this.U;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.U) c.push(b), ++d
        }
        b = this.ja;
        d = a.type || a;
        if (t(a)) a = new M(a, b);
        else if (a instanceof M) a.target = a.target || b;
        else {
            var e = a;
            a = new M(d, b);
            Va(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; 0 <= f; f--) {
                var g = a.a = c[f];
                e = ye(g, d, !0, a) && e
            }
        g = a.a = b;
        e = ye(g, d, !0, a) && e;
        e = ye(g, d, !1, a) && e;
        if (c)
            for (f = 0; f < c.length; f++) g = a.a = c[f], e = ye(g, d, !1, a) && e;
        return e
    };
    h.G = function() {
        O.P.G.call(this);
        if (this.j) {
            var a = this.j,
                b = 0,
                c;
            for (c in a.a) {
                for (var d = a.a[c], e = 0; e < d.length; e++) ++b, Zd(d[e]);
                delete a.a[c];
                a.f--
            }
        }
        this.U = null
    };
    var ye = function(a, b, c, d) {
        b = a.j.a[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ta && g.capture == c) {
                var k = g.listener,
                    l = g.Ca || g.src;
                g.ya && be(a.j, g);
                e = !1 !== k.call(l, d) && e
            }
        }
        return e && 0 != d.lb
    };
    var ze = function(a, b) {
        this.g = a;
        this.j = b;
        this.f = 0;
        this.a = null
    };
    ze.prototype.get = function() {
        if (0 < this.f) {
            this.f--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.g();
        return a
    };
    var Ae = function(a, b) {
        a.j(b);
        100 > a.f && (a.f++, b.next = a.a, a.a = b)
    };
    var Be = function(a) {
            p.setTimeout(function() {
                throw a;
            }, 0)
        },
        Ce, De = function() {
            var a = p.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !H("Presto") && (a = function() {
                var e = document.createElement("IFRAME");
                e.style.display = "none";
                Xb(e);
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(Mb(Sb));
                e.close();
                var g = "callImmediate" + Math.random(),
                    k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = x(function(l) {
                    if (("*" == k || l.origin == k) && l.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, k)
                    }
                }
            });
            if ("undefined" !== typeof a && !H("Trident") && !H("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (q(c.next)) {
                        c = c.next;
                        var e = c.Ya;
                        c.Ya = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        Ya: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ?
                function(e) {
                    var f = document.createElement("SCRIPT");
                    f.onreadystatechange = function() {
                        f.onreadystatechange = null;
                        f.parentNode.removeChild(f);
                        f = null;
                        e();
                        e = null
                    };
                    document.documentElement.appendChild(f)
                } : function(e) {
                    p.setTimeout(e, 0)
                }
        };
    var Ee = function() {
            this.f = this.a = null
        },
        Ge = new ze(function() {
            return new Fe
        }, function(a) {
            a.reset()
        });
    Ee.prototype.add = function(a, b) {
        var c = Ge.get();
        c.set(a, b);
        this.f ? this.f.next = c : this.a = c;
        this.f = c
    };
    var Ie = function() {
            var a = He,
                b = null;
            a.a && (b = a.a, a.a = a.a.next, a.a || (a.f = null), b.next = null);
            return b
        },
        Fe = function() {
            this.next = this.f = this.a = null
        };
    Fe.prototype.set = function(a, b) {
        this.a = a;
        this.f = b;
        this.next = null
    };
    Fe.prototype.reset = function() {
        this.next = this.f = this.a = null
    };
    var Me = function(a, b) {
            Je || Ke();
            Le || (Je(), Le = !0);
            He.add(a, b)
        },
        Je, Ke = function() {
            if (p.Promise && p.Promise.resolve) {
                var a = p.Promise.resolve(void 0);
                Je = function() {
                    a.then(Ne)
                }
            } else Je = function() {
                var b = Ne;
                !ua(p.setImmediate) || p.Window && p.Window.prototype && !H("Edge") && p.Window.prototype.setImmediate == p.setImmediate ? (Ce || (Ce = De()), Ce(b)) : p.setImmediate(b)
            }
        },
        Le = !1,
        He = new Ee,
        Ne = function() {
            for (var a; a = Ie();) {
                try {
                    a.a.call(a.f)
                } catch (b) {
                    Be(b)
                }
                Ae(Ge, a)
            }
            Le = !1
        };
    var Oe = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var P = function(a, b) {
            this.a = 0;
            this.s = void 0;
            this.j = this.f = this.g = null;
            this.o = this.B = !1;
            if (a != v) try {
                var c = this;
                a.call(b, function(d) {
                    Pe(c, 2, d)
                }, function(d) {
                    Pe(c, 3, d)
                })
            } catch (d) {
                Pe(this, 3, d)
            }
        },
        Qe = function() {
            this.next = this.context = this.f = this.j = this.a = null;
            this.g = !1
        };
    Qe.prototype.reset = function() {
        this.context = this.f = this.j = this.a = null;
        this.g = !1
    };
    var Re = new ze(function() {
            return new Qe
        }, function(a) {
            a.reset()
        }),
        Se = function(a, b, c) {
            var d = Re.get();
            d.j = a;
            d.f = b;
            d.context = c;
            return d
        },
        Ue = function(a, b, c) {
            Te(a, b, c, null) || Me(Ca(b, a))
        },
        Ve = function(a) {
            return new P(function(b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function(m, r) {
                            d--;
                            e[m] = r;
                            0 == d && b(e)
                        }, g = function(m) {
                            c(m)
                        }, k = 0, l; k < a.length; k++) l = a[k], Ue(l, Ca(f, k), g);
                else b(e)
            })
        },
        Xe = function() {
            var a, b, c = new P(function(d, e) {
                a = d;
                b = e
            });
            return new We(c, a, b)
        };
    P.prototype.then = function(a, b, c) {
        return Ye(this, ua(a) ? a : null, ua(b) ? b : null, c)
    };
    P.prototype.$goog_Thenable = !0;
    var $e = function(a, b, c) {
        b = Se(b, b, c);
        b.g = !0;
        Ze(a, b)
    };
    P.prototype.cancel = function(a) {
        0 == this.a && Me(function() {
            var b = new af(a);
            bf(this, b)
        }, this)
    };
    var bf = function(a, b) {
            if (0 == a.a)
                if (a.g) {
                    var c = a.g;
                    if (c.f) {
                        for (var d = 0, e = null, f = null, g = c.f; g && (g.g || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.a && 1 == d ? bf(c, b) : (f ? (d = f, d.next == c.j && (c.j = d), d.next = d.next.next) : cf(c), df(c, e, 3, b)))
                    }
                    a.g = null
                } else Pe(a, 3, b)
        },
        Ze = function(a, b) {
            a.f || 2 != a.a && 3 != a.a || ef(a);
            a.j ? a.j.next = b : a.f = b;
            a.j = b
        },
        Ye = function(a, b, c, d) {
            var e = Se(null, null, null);
            e.a = new P(function(f, g) {
                e.j = b ? function(k) {
                    try {
                        var l = b.call(d, k);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.f = c ? function(k) {
                    try {
                        var l = c.call(d,
                            k);
                        !q(l) && k instanceof af ? g(k) : f(l)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.a.g = a;
            Ze(a, e);
            return e.a
        };
    P.prototype.A = function(a) {
        this.a = 0;
        Pe(this, 2, a)
    };
    P.prototype.C = function(a) {
        this.a = 0;
        Pe(this, 3, a)
    };
    var Pe = function(a, b, c) {
            0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Te(c, a.A, a.C, a) || (a.s = c, a.a = b, a.g = null, ef(a), 3 != b || c instanceof af || ff(a, c)))
        },
        Te = function(a, b, c, d) {
            if (a instanceof P) return Ze(a, Se(b || v, c || null, d)), !0;
            if (Oe(a)) return a.then(b, c, d), !0;
            if (va(a)) try {
                var e = a.then;
                if (ua(e)) return gf(a, e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        },
        gf = function(a, b, c, d, e) {
            var f = !1,
                g = function(l) {
                    f || (f = !0, c.call(e, l))
                },
                k = function(l) {
                    f || (f = !0, d.call(e, l))
                };
            try {
                b.call(a,
                    g, k)
            } catch (l) {
                k(l)
            }
        },
        ef = function(a) {
            a.B || (a.B = !0, Me(a.v, a))
        },
        cf = function(a) {
            var b = null;
            a.f && (b = a.f, a.f = b.next, b.next = null);
            a.f || (a.j = null);
            return b
        };
    P.prototype.v = function() {
        for (var a; a = cf(this);) df(this, a, this.a, this.s);
        this.B = !1
    };
    var df = function(a, b, c, d) {
            if (3 == c && b.f && !b.g)
                for (; a && a.o; a = a.g) a.o = !1;
            if (b.a) b.a.g = null, hf(b, c, d);
            else try {
                b.g ? b.j.call(b.context) : hf(b, c, d)
            } catch (e) {
                jf.call(null, e)
            }
            Ae(Re, b)
        },
        hf = function(a, b, c) {
            2 == b ? a.j.call(a.context, c) : a.f && a.f.call(a.context, c)
        },
        ff = function(a, b) {
            a.o = !0;
            Me(function() {
                a.o && jf.call(null, b)
            })
        },
        jf = Be,
        af = function(a) {
            B.call(this, a)
        };
    A(af, B);
    af.prototype.name = "cancel";
    var We = function(a, b, c) {
        this.a = a;
        this.resolve = b;
        this.reject = c
    };
    var kf = function(a, b) {
        O.call(this);
        this.f = a || 1;
        this.a = b || p;
        this.g = x(this.hd, this);
        this.o = y()
    };
    A(kf, O);
    h = kf.prototype;
    h.sa = !1;
    h.aa = null;
    h.setInterval = function(a) {
        this.f = a;
        this.aa && this.sa ? (this.stop(), this.start()) : this.aa && this.stop()
    };
    h.hd = function() {
        if (this.sa) {
            var a = y() - this.o;
            0 < a && a < .8 * this.f ? this.aa = this.a.setTimeout(this.g, this.f - a) : (this.aa && (this.a.clearTimeout(this.aa), this.aa = null), this.dispatchEvent("tick"), this.sa && (this.stop(), this.start()))
        }
    };
    h.start = function() {
        this.sa = !0;
        this.aa || (this.aa = this.a.setTimeout(this.g, this.f), this.o = y())
    };
    h.stop = function() {
        this.sa = !1;
        this.aa && (this.a.clearTimeout(this.aa), this.aa = null)
    };
    h.G = function() {
        kf.P.G.call(this);
        this.stop();
        delete this.a
    };
    var lf = function(a, b, c) {
        if (ua(a)) c && (a = x(a, c));
        else if (a && "function" == typeof a.handleEvent) a = x(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : p.setTimeout(a, b || 0)
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var nf = function(a) {
        var b = mf;
        this.o = [];
        this.D = b;
        this.H = a || null;
        this.j = this.a = !1;
        this.g = void 0;
        this.A = this.F = this.s = !1;
        this.B = 0;
        this.f = null;
        this.v = 0
    };
    nf.prototype.cancel = function(a) {
        if (this.a) this.g instanceof nf && this.g.cancel();
        else {
            if (this.f) {
                var b = this.f;
                delete this.f;
                a ? b.cancel(a) : (b.v--, 0 >= b.v && b.cancel())
            }
            this.D ? this.D.call(this.H, this) : this.A = !0;
            this.a || (a = new of (this), pf(this), qf(this, !1, a))
        }
    };
    nf.prototype.C = function(a, b) {
        this.s = !1;
        qf(this, a, b)
    };
    var qf = function(a, b, c) {
            a.a = !0;
            a.g = c;
            a.j = !b;
            rf(a)
        },
        pf = function(a) {
            if (a.a) {
                if (!a.A) throw new sf(a);
                a.A = !1
            }
        },
        tf = function(a, b, c, d) {
            a.o.push([b, c, d]);
            a.a && rf(a)
        };
    nf.prototype.then = function(a, b, c) {
        var d, e, f = new P(function(g, k) {
            d = g;
            e = k
        });
        tf(this, d, function(g) {
            g instanceof of ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    };
    nf.prototype.$goog_Thenable = !0;
    var uf = function(a) {
            return Ja(a.o, function(b) {
                return ua(b[1])
            })
        },
        rf = function(a) {
            if (a.B && a.a && uf(a)) {
                var b = a.B,
                    c = vf[b];
                c && (p.clearTimeout(c.a), delete vf[b]);
                a.B = 0
            }
            a.f && (a.f.v--, delete a.f);
            b = a.g;
            for (var d = c = !1; a.o.length && !a.s;) {
                var e = a.o.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.j ? g : f) try {
                    var k = f.call(e || a.H, b);
                    q(k) && (a.j = a.j && (k == b || k instanceof Error), a.g = b = k);
                    if (Oe(b) || "function" === typeof p.Promise && b instanceof p.Promise) d = !0, a.s = !0
                } catch (l) {
                    b = l, a.j = !0, uf(a) || (c = !0)
                }
            }
            a.g = b;
            d && (k = x(a.C, a, !0), d = x(a.C,
                a, !1), b instanceof nf ? (tf(b, k, d), b.F = !0) : b.then(k, d));
            c && (b = new wf(b), vf[b.a] = b, a.B = b.a)
        },
        sf = function() {
            B.call(this)
        };
    A(sf, B);
    sf.prototype.message = "Deferred has already fired";
    sf.prototype.name = "AlreadyCalledError";
    var of = function() {
        B.call(this)
    };
    A( of , B); of .prototype.message = "Deferred was canceled"; of .prototype.name = "CanceledError";
    var wf = function(a) {
        this.a = p.setTimeout(x(this.g, this), 0);
        this.f = a
    };
    wf.prototype.g = function() {
        delete vf[this.a];
        throw this.f;
    };
    var vf = {};
    z("studio.common.gdn.Environment.EngagementPhase", {
        INVITATION: 0,
        ENGAGED: 1,
        INVITATION_LARGE_CANVAS: 2
    });
    var xf = function(a) {
        this.a = a
    };
    z("studio.common.mde.Direction", xf);
    xf.Corner = {
        de: 0,
        fe: 1,
        ld: 2,
        nd: 3
    };
    xf.prototype.toString = function() {
        return (this.a & 2 ? "b" : "t") + (this.a & 1 ? "r" : "l")
    };
    var yf = function(a, b, c, d, e) {
            this.name = a;
            this.f = b;
            this.type = c;
            this.j = d;
            this.B = e;
            this.chargeable = !1
        },
        zf = function(a) {
            switch (a) {
                case "Exit":
                    return "Exit";
                case "Count":
                    return "Counter";
                case "Start":
                case "Stop":
                    return "Timer";
                default:
                    throw "Unsupported event action";
            }
        };
    var Af = {
            DISPLAY_TIMER: {
                id: null,
                type: "Timer",
                J: !0,
                K: !0
            },
            INTERACTION_TIMER: {
                id: null,
                type: "Timer",
                J: !0,
                K: !0
            },
            INTERACTIVE_IMPRESSION: {
                id: null,
                type: "Counter",
                J: !0,
                K: !1
            },
            MANUAL_CLOSE: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            EXPAND_TIMER: {
                id: null,
                type: "Timer",
                J: !0,
                K: !1
            },
            FULL_SCREEN: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            SCROLL: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            LARGE_SCROLL: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            SMALL_SCROLL: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            ENGAGEMENT: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_PLAY: {
                id: null,
                type: "Counter",
                J: !0,
                K: !1
            },
            VIDEO_VIEW_TIMER: {
                id: null,
                type: "Timer",
                J: !0,
                K: !0
            },
            VIDEO_COMPLETE: {
                id: null,
                type: "Counter",
                J: !0,
                K: !1
            },
            VIDEO_INTERACTION: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_PAUSE: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_MUTE: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_REPLAY: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_FIRST_QUARTILE: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_MIDPOINT: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_THIRD_QUARTILE: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_STOP: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            VIDEO_UNMUTE: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            BACKUP_IMAGE_IMPRESSION: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            },
            HTML5_CREATIVE_IMPRESSION: {
                id: null,
                type: "Counter",
                J: !0,
                K: !0
            }
        },
        Bf = function(a) {
            var b = Af[a];
            return b ? new yf(a, b.id, b.type, b.J, b.K) : null
        };
    var Cf = {
        3: "INTERACTION_TIMER",
        EVENT_USER_INTERACTION: "INTERACTIVE_IMPRESSION",
        EVENT_MANUAL_CLOSE: "MANUAL_CLOSE",
        EVENT_VIDEO_PLAY: "VIDEO_PLAY",
        EVENT_VIDEO_VIEW_TIMER: "VIDEO_VIEW_TIMER",
        EVENT_VIDEO_COMPLETE: "VIDEO_COMPLETE",
        EVENT_VIDEO_INTERACTION: "VIDEO_INTERACTION",
        EVENT_VIDEO_PAUSE: "VIDEO_PAUSE",
        EVENT_VIDEO_MUTE: "VIDEO_MUTE",
        EVENT_VIDEO_REPLAY: "VIDEO_REPLAY",
        EVENT_VIDEO_FIRSTQUARTILE: "VIDEO_FIRST_QUARTILE",
        EVENT_VIDEO_MIDPOINT: "VIDEO_MIDPOINT",
        EVENT_VIDEO_THIRDQUARTILE: "VIDEO_THIRD_QUARTILE",
        EVENT_VIDEO_STOP: "VIDEO_STOP",
        EVENT_VIDEO_UNMUTE: "VIDEO_UNMUTE",
        EVENT_FULLSCREEN: "FULL_SCREEN",
        DISPLAY_TIMER: "DISPLAY_TIMER",
        INTERACTION_TIMER: "INTERACTION_TIMER",
        INTERACTIVE_IMPRESSION: "INTERACTIVE_IMPRESSION",
        MANUAL_CLOSE: "MANUAL_CLOSE",
        EXPAND_TIMER: "EXPAND_TIMER",
        FULL_SCREEN: "FULL_SCREEN",
        SCROLL: "SCROLL",
        LARGE_SCROLL: "LARGE_SCROLL",
        SMALL_SCROLL: "SMALL_SCROLL",
        ENGAGEMENT: "ENGAGEMENT",
        VIDEO_PLAY: "VIDEO_PLAY",
        VIDEO_VIEW_TIMER: "VIDEO_VIEW_TIMER",
        VIDEO_COMPLETE: "VIDEO_COMPLETE",
        VIDEO_INTERACTION: "VIDEO_INTERACTION",
        VIDEO_PAUSE: "VIDEO_PAUSE",
        VIDEO_MUTE: "VIDEO_MUTE",
        VIDEO_REPLAY: "VIDEO_REPLAY",
        VIDEO_FIRST_QUARTILE: "VIDEO_FIRST_QUARTILE",
        VIDEO_MIDPOINT: "VIDEO_MIDPOINT",
        VIDEO_THIRD_QUARTILE: "VIDEO_THIRD_QUARTILE",
        VIDEO_STOP: "VIDEO_STOP",
        VIDEO_UNMUTE: "VIDEO_UNMUTE",
        BACKUP_IMAGE_IMPRESSION: "BACKUP_IMAGE_IMPRESSION",
        HTML5_CREATIVE_IMPRESSION: "HTML5_CREATIVE_IMPRESSION"
    };
    var Gf = function(a) {
            var b = {},
                c = b.document || document,
                d = cb(a).toString(),
                e = Nc(document, "SCRIPT"),
                f = {
                    nb: e,
                    ub: void 0
                },
                g = new nf(f),
                k = null,
                l = null != b.timeout ? b.timeout : 5E3;
            0 < l && (k = window.setTimeout(function() {
                Df(e, !0);
                var m = new Ef(1, "Timeout reached for loading script " + d);
                pf(g);
                qf(g, !1, m)
            }, l), f.ub = k);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Df(e, b.le || !1, k), pf(g), qf(g, !0, null))
            };
            e.onerror = function() {
                Df(e, !0, k);
                var m = new Ef(0, "Error while loading script " +
                    d);
                pf(g);
                qf(g, !1, m)
            };
            f = b.attributes || {};
            Va(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            Lc(e, f);
            Yb(e, a);
            Ff(c).appendChild(e);
            return g
        },
        Ff = function(a) {
            var b = (a || document).getElementsByTagName("HEAD");
            return b && 0 != b.length ? b[0] : a.documentElement
        },
        mf = function() {
            if (this && this.nb) {
                var a = this.nb;
                a && "SCRIPT" == a.tagName && Df(a, !0, this.ub)
            }
        },
        Df = function(a, b, c) {
            null != c && p.clearTimeout(c);
            a.onload = v;
            a.onerror = v;
            a.onreadystatechange = v;
            b && window.setTimeout(function() {
                Qc(a)
            }, 0)
        },
        Ef = function(a, b) {
            var c = "Jsloader error (code #" +
                a + ")";
            b && (c += ": " + b);
            B.call(this, c);
            this.code = a
        };
    A(Ef, B);
    var Hf = function(a, b, c, d) {
            this.o = a;
            this.a = "";
            b && (this.a = /^(http[s]?:)?\/\//.test(b) ? b : "//pagead2.googlesyndication.com/activeview?avi=" + b);
            this.j = c || "";
            this.f = !1;
            this.g = d || "//www.googletagservices.com/activeview/js/current/lidar.js"
        },
        If = function(a, b) {
            b.setAttribute("id", "DfaVisibilityIdentifier_" + y());
            if (b.classList) b.classList.add("GoogleActiveViewClass");
            else {
                if (b.classList) var c = b.classList.contains("GoogleActiveViewClass");
                else b.classList ? c = b.classList : (c = b.className, c = t(c) && c.match(/\S+/g) || []), c = 0 <= Ga(c, "GoogleActiveViewClass");
                c || (b.className += 0 < b.className.length ? " GoogleActiveViewClass" : "GoogleActiveViewClass")
            }
            b._avicxn_ = a.a;
            b._avm_ = a.j;
            a.f || (Gf(Sc(a.g)), a.f = !0)
        },
        Kf = function(a) {
            a.a && Jf(a.o, a.a + "&id=lidar2&r=w&rs=5r&v=0")
        };
    var Q = function(a, b, c) {
        M.call(this, a);
        this.f = b || void 0;
        this.data = c
    };
    A(Q, M);
    var Lf = function(a, b, c, d) {
        M.call(this, a);
        this.f = b;
        this.B = c;
        this.C = !!d
    };
    A(Lf, M);
    var Mf = function(a, b, c, d) {
        "Count" == b && (d = !0);
        Lf.call(this, a, b, !0, d);
        this.g = c
    };
    A(Mf, Lf);
    var Nf = function(a, b, c, d) {
        Mf.call(this, a, b, c);
        this.videoName = d
    };
    A(Nf, Mf);
    var Of = function(a, b, c, d, e) {
        Lf.call(this, a, b, !1, e);
        this.o = c;
        this.A = d
    };
    A(Of, Lf);
    var Pf = function(a, b) {
        M.call(this, "reportCustomVariable");
        this.f = a;
        this.g = b
    };
    A(Pf, M);
    var Qf = function(a, b, c, d, e, f) {
        Of.call(this, a, "Exit", b, !0);
        this.s = "null" != c ? c : null;
        this.g = "null" != d ? d : null;
        this.v = e;
        this.log = f
    };
    A(Qf, Of);
    var Rf = function(a) {
        M.call(this, "invokeExternalJSFunction");
        this.f = a
    };
    A(Rf, M);
    var Sf = function(a) {
        M.call(this, "setThrottlingWindow");
        this.f = a
    };
    A(Sf, M);
    var Tf = function(a, b, c) {
        M.call(this, "setTimerAdjustment");
        this.o = a;
        this.f = b;
        this.g = c
    };
    A(Tf, M);
    var Uf = function(a) {
        M.call(this, "registerChargeableEventName");
        this.f = a
    };
    A(Uf, M);
    var Vf = function(a) {
        M.call(this, "updateVideoProgress");
        this.duration = a
    };
    A(Vf, M);
    var Yf = function(a, b) {
            switch (a) {
                case "logEvent":
                    return Wf(b);
                case "logVideoEvent":
                    return new Nf("logVideoEvent", b[0], Cf[b[2]], b[1]);
                case "updateVideoProgress":
                    return new Vf(b[1], b[2]);
                case "logEventFlushCounters":
                    return b[0] = "Exit", Wf(b, !0);
                case "logExitFlushEventsOpenPopup":
                    return Xf(b, !0);
                case "launchExit":
                    return Xf(b, !1);
                case "recordTimings":
                    return new Q("recordTimings", null, b[0]);
                case "reportCustomVariable":
                    return new Pf(b[0], b[1]);
                case "flushCounters":
                    return new M("flushCounters");
                case "conduitInitialized":
                    return a =
                        b[1] && w(b[1]) && 0 != b[1].length ? b[1] : null, new Q("conduitInitialized", null, {
                            features: a
                        });
                case "expandAsset":
                    return new Q("expandAsset", null, 1 < b.length ? b[1] : null);
                case "expandRequested":
                    return new Q("expandRequested", null, 1 < b.length ? b[1] : null);
                case "expandFinished":
                case "collapseAsset":
                case "collapseRequested":
                case "collapseFinished":
                case "tellAssetHide":
                    return new Q(a);
                case "tellCompanionAssetHide":
                    return new Q("tellCompanionAssetHide", b[0]);
                case "tellCompanionAssetShow":
                    return new Q("tellCompanionAssetShow",
                        b[0]);
                case "invokeExternalJSFunction":
                    return new Rf(b[0]);
                case "setThrottlingWindow":
                    return new Sf(parseFloat(b[0]));
                case "setTimerAdjustment":
                    return new Tf(Cf[b[0]], parseFloat(b[1]), parseFloat(b[2]));
                case "registerChargeableEventName":
                    return new Uf(b[0]);
                case "fullscreenExpandRequested":
                    return new Q(a, null, b);
                case "setResponsiveBehavior":
                    return new Q(a, null, {
                        behavior: b[0],
                        state: b[1]
                    });
                case "responsiveResize":
                    return new Q(a, null, {
                        width: b[0],
                        height: b[1]
                    });
                case "isFullscreenSupported":
                case "queryFullscreenDimensions":
                case "fullscreenExpandFinished":
                case "fullscreenCollapseRequested":
                case "fullscreenCollapseFinished":
                    return new Q(a);
                case "AD_CLICKED":
                    return new M("AD_CLICKED");
                case "registerEventTypeListenerForType":
                    return new Q(a, null, {
                        type: b[0],
                        me: b[1]
                    });
                case "getHostpageFeatures":
                    return new Q("getHostpageFeatures", null, {
                        type: b[0]
                    })
            }
            return null
        },
        Wf = function(a, b) {
            var c = a[0],
                d = a[1],
                e = Zf(a[3]);
            return Zf(a[4]) ? new Of("logEvent", c, d, e, b) : new Mf("logEvent", c, Cf[d], b)
        },
        Xf = function(a, b) {
            return new Qf("logExitFlushEventsOpenPopup", a[1], a[4], a[5] || null, a[6], b)
        },
        Zf = function(a) {
            return null != a ? "true" == a.toString().toLowerCase() : !1
        };
    var $f = {
            ee: "top",
            be: "right",
            md: "bottom",
            Gd: "left"
        },
        ag = function(a) {
            if (!a) return null;
            a = a.toLowerCase();
            0 == a.lastIndexOf("alignment_", 0) && (a = a.substr(10));
            return Ta($f, a) ? a : null
        };
    var bg = function(a) {
        a = a ? a.toLowerCase() : "";
        switch (a) {
            case "normal":
                return "normal";
            case "lightbox":
                return "lightbox";
            case "push_down":
                return "push_down"
        }
        return null
    };
    var cg = function(a) {
            this.a = a
        },
        dg = {
            ge: "transparent",
            Xd: "opaque",
            he: "window"
        },
        eg = function(a) {
            return a && Ta(dg, a.toLowerCase()) ? a.toLowerCase() : null
        };
    var gg = function(a) {
            this.H = a.eventReportingUrl || "";
            this.W = a.clickUrl || "";
            this.C = a.clickUrlTimesToEscape || "1";
            this.a = a.clickEventTagUrl || "";
            this.j = a.impressionUrl || "";
            this.I = a.geoData || "";
            this.S = a.siteName || "";
            this.U = a.siteId || "";
            this.s = a.adId || "";
            this.A = a.buyId || "";
            this.creativeId = a.creativeId || "";
            this.M = a.placementId || "";
            this.v = a.advertiserId || "";
            this.L = a.keyValueOrdinal || "";
            this.R = a.renderingVersion || "";
            this.N = a.renderingId || "";
            this.randomNumber = a.randomNumber || "";
            this.T = a.stringReportingUrl || "";
            this.g = a.bookingTimeMetaData || {};
            this.o = new fg(a.tag || {});
            this.D = a.exitSuffix || "";
            this.X = a.dynamicData || "";
            this.F = a.exitUrlPatternMacroValues;
            this.f = a.placementDimensions || {
                w: "0",
                h: "0"
            };
            this.Z = a.swiffyRuntimeUrl || "";
            this.B = a.activeViewClkStr || "";
            this.V = a.activeViewUrlPrefix || ""
        },
        fg = function(a) {
            this.g = a.adContainerElementId;
            this.B = a.hideObjects;
            this.j = a.preferFlash;
            this.f = a.runtimeMetaData || {};
            this.expansionMode = bg(a.expansionMode);
            this.o = !!a.renderFloatInplace;
            this.a = {};
            this.a.top = new hg(u("multiFloat.top.duration",
                a), u("multiFloat.top.position", a) ? u("multiFloat.top.position", a).split(",") : []);
            this.a.right = new hg(u("multiFloat.right.duration", a), u("multiFloat.right.position", a) ? u("multiFloat.right.position", a).split(",") : []);
            this.a.bottom = new hg(u("multiFloat.bottom.duration", a), u("multiFloat.bottom.position", a) ? u("multiFloat.bottom.position", a).split(",") : []);
            this.a.left = new hg(u("multiFloat.left.duration", a), u("multiFloat.left.position", a) ? u("multiFloat.left.position", a).split(",") : [])
        },
        hg = function(a, b) {
            this.duration =
                a || "";
            this.top = 1 < b.length ? b[0] : "";
            this.left = 1 < b.length ? b[1] : ""
        };
    var ig = function(a, b) {
        this.a = a;
        this.expansionMode = b;
        this.f = "push_down" == b
    };
    var jg = function(a, b, c, d) {
        this.a = a;
        this.o = b;
        this.g = -1 < b;
        this.endTime = c;
        this.f = -1 < c;
        this.j = d
    };
    var kg = function(a, b) {
        this.f = a;
        this.a = F(I(b)) ? "0_0" : b
    };
    var lg = function() {};
    var ng = function(a, b) {
            this.top = parseInt(a, 10);
            this.f = mg(a);
            this.left = parseInt(b, 10);
            this.a = mg(b)
        },
        mg = function(a) {
            return La(og, function(b) {
                var c = String(b).toLowerCase();
                b = String(a.substr(a.length - b.length, b.length)).toLowerCase();
                return 0 == (c < b ? -1 : c == b ? 0 : 1)
            }) || "px"
        },
        og = ["px", "%", "pxc"];
    var pg = function() {
        this.f = this.a = !1
    };
    var qg = function(a) {
        a = ba(a.renderers);
        for (var b = a.next(); !b.done; b = a.next());
    };
    var rg = {
            qd: "ad_container_id",
            Ad: "hideObjects",
            Zd: "mtfTop",
            Yd: "mtfLeft",
            ke: "zindex",
            sd: "mtfDuration",
            ie: "wmode",
            $d: "preferFlash",
            xd: "as_kw",
            yd: "as_lat",
            zd: "as_lng",
            Bd: "mtfIFPath",
            wd: "expansionMode",
            Vd: "top_container",
            Ud: "mtfTopFloat",
            Td: "mtfTopDuration",
            Wd: "mtfTopWmode",
            Rd: "right_container",
            Qd: "mtfRightFloat",
            Pd: "mtfRightDuration",
            Sd: "mtfRightWmode",
            Jd: "bottom_container",
            Id: "mtfBottomFloat",
            Hd: "mtfBottomDuration",
            Kd: "mtfBottomWmode",
            Nd: "left_container",
            Md: "mtfLeftFloat",
            Ld: "mtfLeftDuration",
            Od: "mtfLeftWmode",
            ae: "mtfRenderFloatInplace",
            je: "tryToWriteHtmlInline",
            rd: "debugjs",
            Ed: "dcapp",
            od: "breakoutiframe",
            Fd: "inMobileAdSdk"
        },
        sg = ["mtfTop", "mtfLeft", "wmode", "mtfDuration"],
        tg = function(a) {
            return "The parameter: " + a + " does not have a multi-floating analog. Please use one of the valid parameters: " + sg.join(", ") + "."
        },
        ug = function(a, b) {
            switch (a) {
                case "left":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfLeftDuration";
                        case "wmode":
                            return "mtfLeftWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfLeftFloat";
                        case "ad_container_id":
                            return "left_container";
                        default:
                            throw Error(tg(b));
                    }
                case "right":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfRightDuration";
                        case "wmode":
                            return "mtfRightWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfRightFloat";
                        case "ad_container_id":
                            return "right_container";
                        default:
                            throw Error(tg(b));
                    }
                case "bottom":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfBottomDuration";
                        case "wmode":
                            return "mtfBottomWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfBottomFloat";
                        case "ad_container_id":
                            return "bottom_container";
                        default:
                            throw Error(tg(b));
                    }
                case "top":
                    switch (b) {
                        case "mtfDuration":
                            return "mtfTopDuration";
                        case "wmode":
                            return "mtfTopWmode";
                        case "mtfTop":
                        case "mtfLeft":
                            return "mtfTopFloat";
                        case "ad_container_id":
                            return "top_container";
                        default:
                            throw Error(tg(b));
                    }
                default:
                    return b
            }
        };
    (function() {
        var a = {};
        Qa(rg, function(b) {
            a[b.toLowerCase()] = b
        });
        return a
    })();
    var vg = function(a, b, c, d, e) {
            this.id = a;
            this.o = b;
            this.g = c;
            this.F = "BANNER" == c || "EXPANDABLE" == c || "VPAID_LINEAR" == c || "VPAID_NON_LINEAR" == c;
            this.width = d.width;
            this.height = d.height;
            this.v = this.C = null;
            this.N = e;
            this.content = null;
            this.L = 0;
            this.M = this.layoutsConfig = this.H = this.j = this.I = this.D = this.a = this.f = this.B = this.A = this.s = null
        },
        wg = {
            adContainerElementId: "ad_container_id",
            zIndex: "zindex",
            expansionMode: "expansionMode",
            hideObjects: "hideObjects",
            duration: "mtfDuration",
            wmode: "wmode",
            top: "mtfTop",
            left: "mtfLeft",
            renderFloatInplace: "mtfRenderFloatInplace",
            "multiFloat.top.renderingSlotId": "top_container",
            "multiFloat.top.duration": "mtfTopDuration",
            "multiFloat.top.wmode": "mtfTopWmode",
            "multiFloat.top.position": "mtfTopFloat",
            "multiFloat.right.renderingSlotId": "right_container",
            "multiFloat.right.duration": "mtfRightDuration",
            "multiFloat.right.wmode": "mtfRightWmode",
            "multiFloat.right.position": "mtfRightFloat",
            "multiFloat.bottom.renderingSlotId": "bottom_container",
            "multiFloat.bottom.duration": "mtfBottomDuration",
            "multiFloat.bottom.wmode": "mtfBottomWmode",
            "multiFloat.bottom.position": "mtfBottomFloat",
            "multiFloat.left.renderingSlotId": "left_container",
            "multiFloat.left.duration": "mtfLeftDuration",
            "multiFloat.left.wmode": "mtfLeftWmode",
            "multiFloat.left.position": "mtfLeftFloat"
        },
        xg = function(a) {
            var b = a.a && a.a.a;
            if (b) {
                var c = b.left,
                    d = b.top;
                3 >= Math.abs(c) && (b.left = 0);
                3 >= Math.abs(d) && (b.top = 0);
                3 >= Math.abs(c + b.width - a.width) && (0 == b.left ? b.width = a.width : b.left = a.width - b.width);
                3 >= Math.abs(d + b.height - a.height) && (0 == b.top ?
                    b.height = a.height : b.top = a.height - b.height)
            }
        };
    vg.prototype.toString = function() {
        return "[PrimaryFile " + this.id + "]"
    };
    var yg = function(a) {
            return "BACKUP_IMAGE" != a.g && "PRE_LOADER" != a.g
        },
        zg = function(a, b) {
            var c = b.zindex;
            null != c && (c = parseInt(c, 10), isNaN(c) || (a.L = c));
            c = b.expansionMode;
            null == c || F(I(c)) || null === a.a || (c = bg(c), null !== c && (a.a.expansionMode = c));
            c = b.hideObjects;
            null == c || F(I(c)) || null === a.j || (a.j.a = "true" == c);
            c = null;
            if (null !== a.f) {
                c = a.f.j || null;
                var d = ug(c, "mtfDuration");
                d = parseInt(b[d], 10);
                isNaN(d) || (a.f.endTime = d, a.f.f = !0);
                d = [];
                if (null === c) {
                    var e = b.mtfLeft;
                    d[0] = b.mtfTop;
                    d[1] = e
                } else e = ug(c, "mtfTop"), null != b[e] &&
                    (d = b[e].split(","));
                2 <= d.length && (e = parseInt(d[0], 10), isNaN(e) || (a.f.a.top = e, a.f.a.f = mg(d[0])), e = parseInt(d[1], 10), isNaN(e) || (a.f.a.left = e, a.f.a.a = mg(d[1])))
            }
            d = b.mtfRenderFloatInplace;
            if (a.F || "true" == d) d = ug(c, "ad_container_id"), d = b[d], F(I(d)) || (a.v = d);
            a.A && (c = ug(c, "wmode"), b = eg(b[c]), null !== b && (a.A.a = b))
        },
        Ag = function(a) {
            return oa(a) && !isNaN(a)
        };
    var Bg = function(a, b, c) {
        this.a = a;
        this.f = b;
        this.ob = !!c
    };
    Bg.prototype.ga = function() {
        return this.a
    };
    Bg.prototype.ping = function() {
        Jf(this.f, this.a, this.ob)
    };
    var Cg = {
            pd: "CLICK",
            Dd: "IMPRESSION_JS",
            Cd: "IMPRESSION_IMG",
            kd: "ARTWORK_IMPRESSION",
            ud: "ENGAGEMENT_IMG",
            vd: "EXPANSION"
        },
        Dg = ["IMPRESSION_IMG", "ARTWORK_IMPRESSION"];
    z("THIRD_PARTY_TYPES_TO_PING_AT_IMPRESSION_TIME", Dg);
    var Eg = function(a) {
        return Ta(Cg, a) ? a : null
    };
    var Fg = function(a) {
            this.a = !!a
        },
        Jf = function(a, b, c) {
            c ? a.a || F(I(b)) || null === b || ($c() ? Zc(window, b, !0) : (a = p.document, a.body ? (c = a.getElementById("goog-srcless-iframe"), c || (c = Nc((new Gc(a)).a, "IFRAME"), c.style.display = "none", c.id = "goog-srcless-iframe", a.body.appendChild(c)), a = c) : a = null, a && a.contentWindow && Zc(a.contentWindow, b, !0))) : a.a || F(I(b)) || (window.studioV2_image_requests || (window.studioV2_image_requests = []), a = Nc(document, "img"), a.src = b, window.studioV2_image_requests.push(a))
        };
    var Gg = function() {
            this.g = this.j = this.B = this.height = this.width = this.f = this.target = this.a = "";
            this.o = []
        },
        Hg = function(a) {
            var b = La(a.primaryFiles, function(f) {
                return "BACKUP_IMAGE" == f.renderAs
            });
            if (null === b) return null;
            var c = new Gg;
            c.f = b.url || c.f;
            c.width = b.width || c.width;
            c.height = b.height || c.height;
            c.B = a.impressionUrl;
            b = La(a.exitEvents, function(f) {
                return !!f.backUpExit
            });
            null !== b && (b.destinationUrl && (c.a = a.clickUrl ? Nd(a.clickUrl, b.destinationUrl, b.reportingId) : b.destinationUrl), c.target = b.targetWindow || c.target);
            b = La(a.thirdPartyUrls, function(f) {
                return "IMPRESSION_IMG" == f.type
            });
            null !== b && (c.g = b.url || c.g);
            if (null != a.thirdPartyUrls) {
                b = a.thirdPartyUrls;
                for (var d = new Fg(a.previewMode || !1), e = 0; e < b.length; e++) "CLICK" == Eg(b[e].type) && c.o.push(new Bg(b[e].url, d, "true" == b[e].scrub))
            }
            a = a.eventTrackingBaseUrl;
            null != a && (";" != a.charAt(a.length - 1) && (a += ";"), c.j = a + "met=1;&timestamp=" + +new Date + ";eid1=9;ecn1=1;etm1=0;");
            return c
        };
    var Ig = function(a, b, c, d) {
            this.name = a;
            this.url = b;
            null != d && (this.url = 0 != this.url.indexOf("/") ? d + "/" + this.url : d + this.url);
            c && (this.url = this.url.replace(/^http:\/\//, "https://"));
            this.f = !1;
            this.a = null
        },
        Kg = function(a, b) {
            b = new Ig(a.name, a.url, b);
            a.isVideo && Jg(b, a.streamingUrl);
            return b
        },
        Jg = function(a, b) {
            a.f = !0;
            a.a = b || null
        };
    var Lg = function(a) {
        var b = a.toLowerCase();
        a = [];
        var c = 0;
        /^https?:\/\//.test(b) ? (a[0] = 0, c = "s" == b.charAt(4) ? 8 : 7) : a[0] = -1;
        a[1] = c;
        b = [b.indexOf(":", c), b.indexOf("/", c), b.indexOf("?", c), b.indexOf("#", c)];
        for (c = 0; c < b.length; ++c)
            if (-1 == b[c]) a[c + 2] = -1;
            else {
                for (var d = !0, e = c + 1; e < b.length; ++e) - 1 < b[e] && b[c] > b[e] && (d = !1);
                a[c + 2] = d ? b[c] : -1
            }
        this.a = a
    };
    var Mg = function(a) {
        return (a = a.match(/([^:]+):([^:]*):([^:]*):(.+)/)) && 5 == a.length ? {
            type: a[1],
            name: unescape(a[2]),
            videoName: unescape(a[3]),
            trigger: a[4]
        } : null
    };
    var Ng = function(a, b) {
        if ("boolean" == typeof a) return a;
        if (t(a)) {
            if ("true" === a) return !0;
            if ("false" === a) return !1
        }
        return b ? b : !1
    };
    var Og = function() {
        this.ra = !1;
        this.s = this.j = this.kb = "";
        this.B = new K(0, 0);
        this.v = "";
        this.qa = !1;
        this.A = new K(0, 0);
        this.f = !1;
        this.R = this.V = this.Pa = "";
        this.$ = [];
        this.Na = this.W = !1;
        this.pa = null;
        this.a = {};
        this.I = "";
        this.da = this.Oa = this.U = !1;
        this.na = null;
        this.D = "";
        this.S = {
            Da: "",
            Ea: ""
        };
        this.o = {};
        this.C = this.ea = this.X = "";
        this.M = 1;
        this.Z = this.ja = this.ca = "";
        this.oa = null;
        this.Ta = !1;
        this.g = [];
        this.ib = [];
        this.mb = [];
        this.Ha = {};
        this.Ra = {};
        this.N = {};
        this.Sa = {};
        this.Ja = {};
        this.H = {};
        this.T = !1;
        this.ka = {};
        this.F = this.L =
            null;
        this.Aa = !1;
        this.ka.Exit = this.N;
        this.ka.Timer = this.Sa;
        this.ka.Counter = this.Ja
    };
    Og.prototype.jb = !1;
    var Pg = function(a) {
            a = ba(a.g);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                var c = b.v;
                if (c && b.I && (b = document.getElementById(c)))
                    for (c = b; b = c.firstChild;) c.removeChild(b)
            }
        },
        Rg = function(a, b) {
            if (!a.ra) {
                a.ra = !0;
                a.kb = b.renderingLibraryData.version;
                var c = b.creativeParameters;
                a.j = c.cid || a.j;
                a.s = c.creative_unique_id || a.s;
                a.B = new K(parseInt(b.width, 10) || a.B.width, parseInt(b.height, 10) || a.B.height);
                a.A = new K(parseInt(b.slotWidth, 10) || a.A.width, parseInt(b.slotHeight, 10) || a.A.height);
                a.f = Ng(b.previewMode, a.f);
                a.Pa = a.f ? b.previewEventsUrl : "";
                a.V = c.rv || a.V;
                a.R = b.flashVersion || a.R;
                w(b.html5Features) && (a.W = 0 <= Ga(b.html5Features, "Modernizr.cssanimations"), a.$ = b.html5Features);
                a.Ta = b.translated_layout;
                a.a = c;
                a.I = c.ad_container_id || a.I;
                a.U = Ng(c.mtfRenderFloatInplace, a.U);
                a.Oa = Ng(c.generate_ad_slot, a.Oa);
                a.Z = c.exit_suffix || a.Z;
                a.ja = c.swiffy_url || a.ja;
                a.qa = !!c.swiffy_url;
                a: {
                    var d = b.primaryFiles;
                    if (null != d)
                        for (var e = 0; e < d.length; ++e)
                            if ("PRE_LOADER" == d[e].renderAs) {
                                d = d[e].url;
                                break a
                            }
                    d = ""
                }
                a.D = d || a.D;
                a.da = "https" ==
                    ((b.renderingLibraryData.renderingLibrary || "").match(Tc)[1] || null);
                d = (d = b.renderingLibraryData.renderingLibrary.match(Tc)[3] || null) ? decodeURI(d) : d;
                a.S = {
                    Da: "http://" + d,
                    Ea: "https://" + d
                };
                F(I(b.dynamicData)) || (a.v = b.dynamicData.replace(/\\"/g, '"'), a.v = a.v.replace(/\\\\/g, "\\"), a.v = a.v.replace(/\\'/g, "'"), a.v = a.v.replace(/:\/\/s(0|1)\.2mdn\.net/g, "://" + d));
                d = new Fg(a.f);
                if (null != b.thirdPartyUrls) {
                    e = b.thirdPartyUrls;
                    for (var f = 0; f < e.length; ++f) {
                        var g = Eg(e[f].type);
                        null != g && (g in a.o || (a.o[g] = []), a.o[g].push(new Bg(e[f].url,
                            d, "true" == e[f].scrub)))
                    }
                }
                a.X = Qg(b.eventTrackingBaseUrl, "met") || a.X;
                a.ea = Qg(b.customEventTrackingBaseUrl, "stragg") || a.ea;
                a.C = b.clickUrl || a.C;
                c = parseInt(c.clickN, 10);
                a.M = isNaN(c) ? a.M : c;
                a.ca = b.impressionUrl || a.ca;
                a.L = Hg(b) || a.L;
                a.Ta || (a.F = new Hf(d, b.activeViewUrlPrefix || b.clickString, b.activeViewMetadata, b.lidarScriptUrl))
            }
        },
        Qg = function(a, b) {
            if (F(I(a))) return "";
            var c = new Lg(a);
            var d = c.a[3];
            if (-1 == d) return a;
            a: {
                for (var e = 4; e < c.a.length; ++e)
                    if (-1 != c.a[e]) {
                        c = c.a[e];
                        break a
                    }
                c = -1
            }
            e = -1 == c ? a.substring(d) : a.substring(d,
                c);
            if (-1 == e.toLowerCase().indexOf(";" + b.toLowerCase() + "=")) e += (";" == e.charAt(e.length - 1) ? "" : ";") + b + "=1;";
            else {
                var f = e.toLowerCase().indexOf(";" + b.toLowerCase() + "="),
                    g = e.indexOf("=", f),
                    k = e.indexOf(";", f + 1);
                e = e.replace(e.substring(f, g + 1) + (-1 == k ? e.substring(g + 1) : e.substring(g + 1, k)), ";" + b + "=1")
            }
            return a.substring(0, d) + e + (-1 == c ? "" : a.substring(c))
        };
    Og.prototype.toString = function() {
        return "Creative_" + this.s
    };
    var Sg = function(a, b, c) {
            return a.pa && void 0 !== a.pa[b] ? a.pa[b] : c
        },
        Tg = function(a) {
            return a.da ? a.S.Ea : a.S.Da
        },
        Ug = function(a, b) {
            if (q(b)) return b in a.o ? Na(a.o[b]) : [];
            b = [];
            for (var c in a.o) b = Ma(b, a.o[c]);
            return b
        },
        Vg = function(a, b) {
            "HTML5" == b.o && (a.jb = !0);
            var c = b.f ? b.f.j : null;
            c && (a.Ha[c] = b);
            a.g.push(b)
        },
        Wg = function(a, b) {
            var c = [];
            C(a.g, function(d) {
                d.o == b && c.push(d)
            });
            return c
        },
        Zg = function(a, b, c) {
            var d = Xg(a, b);
            d && (d.f = c, a.Ra[b] = d, Yg(a, d))
        },
        ah = function(a, b) {
            var c = a.T;
            $g(a, "EXPAND_TIMER", b);
            a.T = c
        },
        $g = function(a,
            b, c) {
            return (b = a.H[bh(b, "Counter") || ""] || a.H[bh(b, "Timer") || ""] || Xg(a, b)) ? (b.chargeable = c, a.T = !0) : !1
        },
        Yg = function(a, b) {
            if (b) {
                var c;
                (c = b.j ? ch(a, b.name) : b.a ? dh(a, b.a.xa, b.a.Xa) : bh(b.name, b.type)) && (a.H[c] = b)
            }
        },
        eh = function(a, b) {
            var c = b.url;
            c = c.replace(/%eaid!/g, a.a.aid || "").replace(/%ebuy!/g, a.a.buy || "").replace(/%epid!/g, a.a.pid || "").replace(/%esid!/g, a.a.sid || "").replace(/%erid!/g, a.a.rid || "").replace(/%ecid!/g, a.a.cid || "").replace(/%ekid!/g, a.a.kid || "").replace(/%eadv!/g, a.a.adv || "").replace(/%erv!/g,
                a.V).replace(/%s/g, a.a.sn || "").replace(/%g/g, a.a.geo || "").replace(/%n/g, a.a.randomNumber || "");
            for (var d in a.oa) {
                var e = a.oa[d],
                    f = "(%pKEY=!;|%%PATTERN:KEY%%)".replace(/KEY/g, d);
                c = c.replace(new RegExp(f, "g"), e)
            }
            b.url = c;
            if (!a.f) {
                c = a.Z;
                d = I(c);
                if (e = !F(d)) {
                    e = b.url;
                    a: {
                        f = e.search(Wc);
                        for (var g = 0, k = d.length; 0 <= (g = e.indexOf(d, g)) && g < f;) {
                            var l = e.charCodeAt(g - 1);
                            if (38 == l || 63 == l)
                                if (l = e.charCodeAt(g + k), !l || 61 == l || 38 == l || 35 == l) {
                                    d = g;
                                    break a
                                }
                            g += k + 1
                        }
                        d = -1
                    }
                    e = !(0 <= d)
                }
                e && (b.url = Vc(b.url, c))
            }
            a.N[b.name] = b;
            Yg(a, b)
        },
        fh = function(a,
            b) {
            a.Ja[b.name] = b;
            Yg(a, b)
        },
        gh = function(a, b) {
            a.Sa[b.name] = b;
            Yg(a, b)
        },
        ch = function(a, b) {
            return (a = Xg(a, b)) ? [b, escape(""), escape(""), a.type].join(":") : null
        },
        bh = function(a, b) {
            return ["CUSTOM_EVENT", escape(a), escape(""), b].join(":")
        },
        dh = function(a, b, c) {
            return (a = Xg(a, b)) && [b, escape(""), escape(c), a.type].join(":")
        },
        ih = function(a, b) {
            if (!b) return null;
            if ("CUSTOM_EVENT" == b.type || b.videoName) {
                if ("CUSTOM_EVENT" == b.type && !b.videoName) {
                    var c = b.trigger;
                    a.ka[c] ? (a = a.ka[c], b = b.name, a = a[b] && a[b].f || null) : a = null;
                    return a
                }
                if ("CUSTOM_EVENT" !=
                    b.type && b.videoName) {
                    a: switch (c = b.videoName, b = Xg(a, b.type), b.type) {
                        case "Timer":
                            a = hh(a.Sa, b, c);
                            a = null != a ? a.f : null;
                            break a;
                        case "Counter":
                            a = hh(a.Ja, b, c);
                            a = null != a ? a.f : null;
                            break a;
                        default:
                            a = null
                    }
                    return a
                }
            } else return (a = Xg(a, b.type)) ? a.f : null;
            return null
        },
        Xg = function(a, b) {
            return a.Ra[b] || (a.Ra[b] = Bf(b))
        },
        hh = function(a, b, c) {
            for (var d in a) {
                var e = a[d];
                if (e.a && e.a.Xa == c && e.a.xa == b.name) return e
            }
            return null
        },
        jh = function(a, b) {
            a.ib.push(b)
        };
    var kh = function(a) {
        this.id = a.id;
        this.uniqueId = a.uniqueId;
        this.a = new gg(a.adServerData || {});
        this.o = a.isPreviewEnvironment;
        this.f = a.thirdPartyImpressionUrls || [];
        this.B = a.thirdPartyArtworkImpressionUrl;
        this.v = a.hasFlashAsset;
        this.A = a.hasHtmlAsset;
        this.Fa = a.requiresCss3Animations;
        this.flashVersion = a.flashVersion;
        this.F = a.renderingLibrary || "";
        this.C = a.httpMediaServer || "";
        this.H = a.httpsMediaServer || "";
        this.g = a.dimensions;
        this.D = a.preloaderUrl;
        this.j = a.html5FeatureChecks;
        var b;
        if (b = a.backupImage) {
            b = a.backupImage;
            var c = this.o,
                d = this.a.a,
                e = this.a.j;
            if (null != b) {
                var f = new Gg;
                f.a = b.exitUrl || f.a;
                f.target = b.target || f.target;
                f.f = b.imageUrl || f.f;
                f.width = b.width || f.width;
                f.height = b.height || f.height;
                f.j = b.backupDisplayActivityUrl || f.j;
                f.g = b.thirdPartyBackupImpressionUrl || f.g;
                f.B = e;
                F(I(d)) || (f.o = [new Bg(d, new Fg(c))]);
                b = f
            } else b = null
        }
        this.s = b || null;
        this.I = a.hasSwiffyHtmlAsset
    };
    var lh = function() {
        this.a = {}
    };
    ra(lh);
    var mh = function(a, b, c) {
        yf.call(this, a, b, "Exit", !1, !0);
        this.url = c;
        this.o = "_blank";
        this.g = null
    };
    A(mh, yf);
    var nh = function() {
        O.call(this);
        this.g = new te(this);
        var a = Ca(Od, this.g);
        this.H ? q(void 0) ? a.call(void 0) : a() : (this.B || (this.B = []), this.B.push(q(void 0) ? x(a, void 0) : a))
    };
    A(nh, O);
    var oh = function() {
        nh.call(this);
        this.a = window.mraid || null;
        this.f = !1
    };
    n(oh, nh);
    h = oh.prototype;
    h.isVisible = function() {
        return this.a.isViewable()
    };
    h.close = function() {
        return this.a.close()
    };
    h.Ia = function() {
        try {
            this.a.removeEventListener("ready", x(this.Ia, this))
        } catch (a) {
            this.a.removeEventListener("ready")
        }
        this.a.addEventListener("viewableChange", x(this.gb, this));
        this.a.addEventListener("stateChange", x(this.lc, this));
        this.dispatchEvent("ready");
        this.a.isViewable() && this.gb()
    };
    h.lc = function() {
        this.dispatchEvent("state_change")
    };
    h.gb = function() {
        this.a.isViewable() ? this.dispatchEvent("show") : this.dispatchEvent("hide");
        this.f || null == this.a || null == this.a.AFMA_LIDAR || (this.a.addEventListener(this.a.AFMA_LIDAR, x(this.mc, this)), this.f = !0)
    };
    h.mc = function(a) {
        var b = this.a.getCurrentPosition();
        b = a.width * a.height / (b.width * b.height);
        var c = new M("viewable_change");
        c.visibleBox = new cd(a.y, a.x);
        c.visibilityFraction = b;
        this.dispatchEvent(c)
    };
    h.G = function() {
        this.a = null;
        nh.prototype.G.call(this)
    };
    ra(oh);
    var ph = /doubleclick.net\/(pf)?ad/;
    var qh = Pa(function() {
        if (J) return sc("10.0");
        var a = Nc(document, "DIV"),
            b = bd(),
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        if (!Pb.test("div")) throw Error("Invalid tag name <div>.");
        if ("DIV" in Rb) throw Error("Tag name <div> is not allowed for SafeHtml.");
        c = null;
        var d = "";
        if (b)
            for (m in b) {
                if (!Pb.test(m)) throw Error('Invalid attribute name "' + m + '".');
                var e = b[m];
                if (null != e) {
                    var f = m;
                    var g = e;
                    if (g instanceof E) g = Za(g);
                    else if ("style" == f.toLowerCase()) {
                        e = void 0;
                        if (!va(g)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof g + " given: " + g);
                        if (!(g instanceof vb)) {
                            var k = "";
                            for (e in g) {
                                if (!/^[-_a-zA-Z0-9]+$/.test(e)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + e);
                                var l = g[e];
                                null != l && (l = w(l) ? Ia(l, Eb).join(" ") : Eb(l), k += e + ":" + l + ";")
                            }
                            g = k ? wb(k) : xb
                        }
                        g instanceof vb && g.constructor === vb && g.f === ub ? e = g.a : (sa(g), e = "type_error:SafeStyle");
                        g = e
                    } else {
                        if (/^on/i.test(f)) throw Error('Attribute "' + f + '" requires goog.string.Const value, "' +
                            g + '" given.');
                        if (f.toLowerCase() in Qb)
                            if (g instanceof bb) g = cb(g).toString();
                            else if (g instanceof G) g = qb(g).toString();
                        else if (t(g)) g = tb(g).fa();
                        else throw Error('Attribute "' + f + '" on tag "div" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + g + '" given.');
                    }
                    g.ia && (g = g.fa());
                    f = f + '="' + mb(String(g)) + '"';
                    d += " " + f
                }
            }
        var m = "<div" + d;
        d = void 0;
        null != d ? w(d) || (d = [d]) : d = [];
        !0 === Wa.div ? m += ">" : (c = Ub(d), m += ">" + Mb(c).toString() + "</div>", c = c.a());
        (b = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(b) ? c = 0 : c = null);
        b = Vb(m, c);
        if (Wb())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Mb(b);
        return "" != hd(a.firstChild, "transition")
    });
    var rh = !1,
        sh = "",
        th = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (rh = !0, a.description)) {
                sh = th(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                rh = !0;
                sh = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], rh = !(!a || !a.enabledPlugin))) {
            sh = th(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                rh = !0;
                sh = th(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                rh = !0;
                sh = "6.0.21";
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), rh = !0, sh = th(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    var uh = sh;
    var vh = function(a) {
            return (a = a.exec(Fb)) ? a[1] : ""
        },
        wh = function() {
            if (uc) return vh(/Firefox\/([0-9.]+)/);
            if (J || gc || fc) return rc;
            if (yc) return ac() || H("iPad") || H("iPod") ? vh(/CriOS\/([0-9.]+)/) : vh(/Chrome\/([0-9.]+)/);
            if (zc && !(ac() || H("iPad") || H("iPod"))) return vh(/Version\/([0-9.]+)/);
            if (vc || wc) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(Fb);
                if (a) return a[1] + "." + a[2]
            } else if (xc) return (a = vh(/Android\s+([0-9.]+)/)) ? a : vh(/Version\/([0-9.]+)/);
            return ""
        }();
    var xh = document.createElement("VIDEO");
    xh && xh.canPlayType && xh.canPlayType("video/mp4").replace(/no/, "");
    var yh = document.createElement("VIDEO");
    yh && yh.canPlayType && yh.canPlayType("video/webm").replace(/no/, "");
    var zh = function(a) {
            return (hc || ic || jc || fc || !1) && !kc && 0 <= ob(uh, a)
        },
        Ah = function(a, b) {
            if (!p.postMessage) return !1;
            a = w(a) ? Na(a) : [];
            La(a, function(c) {
                return "Modernizr.canvas" == c
            }) || a.push("Modernizr.canvas");
            b && !La(a, function(c) {
                return "Modernizr.cssanimations" == c
            }) && a.push("Modernizr.cssanimations");
            return Ka(a, function(c) {
                if ("svgFilters" == c) {
                    if (!(J && sc("10") && 10 <= Number(tc) || yc && 0 <= ob(wh, "18") || uc && 0 <= ob(wh, "11"))) return !1
                } else if ("svgFeImage" == c) {
                    if (!(J && sc("10") && 10 <= Number(tc) || yc && 0 <= ob(wh, "29"))) return !1
                } else if (/Modernizr.canvas/.test(c)) {
                    if (!(document.createElement("canvas").getContext ||
                            J && 0 <= ob(wh, "9"))) return !1
                } else if (/Modernizr.cssanimations/.test(c)) {
                    if (c = Mc(document).style, !q(c.animationName) && !q(c[ad() + "AnimationName"])) return !1
                } else if (/Modernizr.cssgradients/.test(c)) {
                    c = "";
                    for (var d, e = ["", bd() + "-"], f = 0; f < e.length; f++) d = 0 === f ? "to " : "", c += "background-image:" + e[f] + "linear-gradient(" + d + "left top, #9f9, white);";
                    d = Nc(document, "A");
                    d.style.cssText = c + "background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));";
                    if (!(-1 < hd(d, "backgroundImage").indexOf("gradient"))) return !1
                } else if (/Modernizr.csstransitions/.test(c) &&
                    !qh()) return !1;
                return !0
            })
        };
    var Dh = function(a, b, c, d, e, f, g, k, l) {
            if (b) {
                var m = Jc(document, c);
                m.innerHTML = (F(I(b.a)) ? ['<div style="width: ', b.width, "px; height: ", b.height, 'px;"></div>'] : ['<a target="', b.target, '" href="', b.a, '">', '<img src="', b.f, '" ', 'width="', b.width, '" height="', b.height, '" ', 'border="0"></a>']).join("");
                d = new Fg(d);
                var r = I(b.B);
                F(r) || Jf(d, r);
                Jf(d, b.j);
                Jf(d, b.g);
                for (r = 0; r < e.length; r++) Jf(d, e[r]);
                Bh(a);
                null != l && 0 < l.length && Ch(l, c);
                a = new Hf(d, f, g, k);
                a.a && (a.a ? If(a, m) : a.f || Kf(a));
                F(I(b.a)) || he(m, "click", function() {
                    for (var Ba =
                            0; Ba < b.o.length; Ba++) b.o[Ba].ping()
                })
            }
        },
        Ch = function(a, b) {
            var c = Jc(document, b);
            if (null != c) C(a, function(e) {
                c.parentNode.insertBefore(Eh(e), c.nextSibling)
            });
            else {
                var d;
                (b = document.getElementsByTagName("HEAD")) && 0 < b.length ? d = b[0] : d = document.documentElement;
                C(a, function(e) {
                    d.appendChild(Eh(e))
                })
            }
        },
        Eh = function(a) {
            var b = Nc(document, "SCRIPT");
            Yb(b, Sc(a));
            b.type = "text/javascript";
            b.async = !1;
            return b
        },
        Bh = function(a) {
            var b = window.DARTDebugEventHandler;
            if (b) {
                b = new b;
                try {
                    b.handleEventActivity("BACKUP_IMAGE_IMPRESSION",
                        "Counter", 1, 0, !1, a)
                } catch (c) {}
            }
        };
    var Fh = function(a, b) {
        M.call(this, a);
        this.f = b
    };
    n(Fh, M);
    var Gh = "EXPAND EXPAND_REQUEST EXPAND_FINISH COLLAPSE COLLAPSE_REQUEST COLLAPSE_FINISH EXPAND_FULL_SCREEN COLLAPSE_FULL_SCREEN SHOW HIDE".split(" ");
    var R = function(a, b) {
        L.call(this);
        this.f = b;
        this.F = new te(this);
        N(this.F, this.f, Gh, this.I);
        this.a = a;
        this.D = [];
        this.C = [];
        this.s = [];
        this.g = [];
        this.A = [];
        this.v = [];
        this.o = [];
        this.j = []
    };
    n(R, L);
    R.prototype.G = function() {
        this.F.dispose();
        this.j = this.o = this.g = this.v = this.A = this.s = this.C = this.D = null;
        L.prototype.G.call(this)
    };
    R.prototype.I = function(a) {
        if (a.f == this.a) {
            var b = null;
            switch (a.type) {
                case "SHOW":
                    b = this.D;
                    break;
                case "HIDE":
                    b = this.C;
                    break;
                case "COLLAPSE_REQUEST":
                    b = this.o;
                    break;
                case "COLLAPSE_FINISH":
                    b = this.j;
                    break;
                case "COLLAPSE":
                    b = this.g;
                    break;
                case "EXPAND":
                    b = this.s;
                    break;
                case "EXPAND_REQUEST":
                    b = this.A;
                    break;
                case "EXPAND_FINISH":
                    b = this.v
            }
            b && Hh(this, b)
        }
    };
    var Hh = function(a, b) {
            C(b, function(c) {
                c(this)
            }, a)
        },
        Ih = function(a) {
            return a.f.renderers[a.a] || null
        };
    h = R.prototype;
    h.Uc = function() {
        return this.a.g
    };
    h.Tc = function() {
        return this.a.id
    };
    h.fc = function() {
        var a = Ih(this);
        return a && (a = a.O()) ? (a = new Ec(a.offsetLeft, a.offsetTop), {
            x: a.x,
            y: a.y
        }) : null
    };
    h.Xc = function(a, b) {
        var c = Ih(this);
        if (c) {
            c = c.O();
            if (a instanceof Ec) {
                var d = a.x;
                a = a.y
            } else d = a, a = b;
            c.style.left = jd(d, !1);
            c.style.top = jd(a, !1)
        }
    };
    h.Yc = function(a) {
        var b = Ih(this);
        b && fd(b.O(), a)
    };
    h.ec = function() {
        var a = Ih(this);
        if (a) {
            var b = a.O();
            if (b) {
                var c = Hc(b);
                a = new Ec(0, 0);
                var d = c ? Hc(c) : document;
                d = !J || 9 <= Number(tc) || "CSS1Compat" == Ic(d).a.compatMode ? d.documentElement : d.body;
                if (b != d) {
                    b: {
                        try {
                            var e = b.getBoundingClientRect()
                        } catch (f) {
                            e = {
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0
                            };
                            break b
                        }
                        J && b.ownerDocument.body && (b = b.ownerDocument, e.left -= b.documentElement.clientLeft + b.body.clientLeft, e.top -= b.documentElement.clientTop + b.body.clientTop)
                    }
                    b = Ic(c).a;c = Mc(b);b = b.parentWindow || b.defaultView;c = J && sc("10") && b.pageYOffset !=
                    c.scrollTop ? new Ec(c.scrollLeft, c.scrollTop) : new Ec(b.pageXOffset || c.scrollLeft, b.pageYOffset || c.scrollTop);a.x = e.left + c.x;a.y = e.top + c.y
                }
                return {
                    x: a.x,
                    y: a.y
                }
            }
        }
        return null
    };
    h.$a = function() {
        return {
            width: this.a.width,
            height: this.a.height
        }
    };
    h.va = function(a, b) {
        var c = Ih(this);
        c && c.va(a, b)
    };
    h.Yb = function() {
        var a = this.a.a && this.a.a.a;
        return a ? {
            width: a.width,
            height: a.height
        } : this.$a()
    };
    h.Wc = function(a, b, c, d) {
        var e = Ih(this);
        e && (e.O().style.clip = ["rect(", a, "px ", b, "px ", c, "px ", d, "px)"].join(""), e.O().style.position = "absolute")
    };
    h.Zb = function() {
        var a = Ih(this);
        return a ? a.O() : null
    };
    h.Sc = function() {
        var a = Ih(this);
        return a ? a.g : null
    };
    h.Eb = function(a) {
        this.D.push(a)
    };
    h.Ec = function(a) {
        D(this.D, a)
    };
    h.Cb = function(a) {
        this.C.push(a)
    };
    h.Dc = function(a) {
        D(this.C, a)
    };
    h.zb = function(a) {
        this.s.push(a)
    };
    h.Ac = function(a) {
        D(this.s, a)
    };
    h.Bb = function(a) {
        this.A.push(a)
    };
    h.Cc = function(a) {
        D(this.A, a)
    };
    h.Ab = function(a) {
        this.v.push(a)
    };
    h.Bc = function(a) {
        D(this.v, a)
    };
    h.wb = function(a) {
        this.g.push(a)
    };
    h.xc = function(a) {
        D(this.g, a)
    };
    h.yb = function(a) {
        this.o.push(a)
    };
    h.zc = function(a) {
        D(this.o, a)
    };
    h.xb = function(a) {
        this.j.push(a)
    };
    h.yc = function(a) {
        D(this.j, a)
    };
    h.Zc = function() {
        Jh(this.f, this.a)
    };
    h.Vc = function() {
        this.f.C(this.a)
    };
    h.Rc = function() {
        Kh(this.f, this.a)
    };
    h.Qc = function() {
        Lh(this.f, this.a)
    };
    R.prototype.getType = R.prototype.Uc;
    R.prototype.getId = R.prototype.Tc;
    R.prototype.getPosition = R.prototype.fc;
    R.prototype.setPosition = R.prototype.Xc;
    R.prototype.setStyle = R.prototype.Yc;
    R.prototype.getPagePosition = R.prototype.ec;
    R.prototype.getDimension = R.prototype.$a;
    R.prototype.setDimension = R.prototype.va;
    R.prototype.getCollapsedDimension = R.prototype.Yb;
    R.prototype.setClip = R.prototype.Wc;
    R.prototype.getContainerElement = R.prototype.Zb;
    R.prototype.getAssetElement = R.prototype.Sc;
    R.prototype.addShowCallback = R.prototype.Eb;
    R.prototype.removeShowCallback = R.prototype.Ec;
    R.prototype.addHideCallback = R.prototype.Cb;
    R.prototype.removeHideCallback = R.prototype.Dc;
    R.prototype.addExpandCallback = R.prototype.zb;
    R.prototype.removeExpandCallback = R.prototype.Ac;
    R.prototype.addExpandRequestCallback = R.prototype.Bb;
    R.prototype.removeExpandRequestCallback = R.prototype.Cc;
    R.prototype.addExpandFinishCallback = R.prototype.Ab;
    R.prototype.removeExpandFinishCallback = R.prototype.Bc;
    R.prototype.addCollapseCallback = R.prototype.wb;
    R.prototype.removeCollapseCallback = R.prototype.xc;
    R.prototype.addCollapseRequestCallback = R.prototype.yb;
    R.prototype.removeCollapseRequestCallback = R.prototype.zc;
    R.prototype.addCollapseFinishCallback = R.prototype.xb;
    R.prototype.removeCollapseFinishCallback = R.prototype.yc;
    R.prototype.show = R.prototype.Zc;
    R.prototype.hide = R.prototype.Vc;
    R.prototype.expand = R.prototype.Rc;
    R.prototype.collapse = R.prototype.Qc;
    var S = function(a, b) {
        L.call(this);
        this.a = a;
        this.f = b
    };
    n(S, L);
    S.prototype.j = function() {
        return this.a.name
    };
    S.prototype.ga = function() {
        var a = this.a.url;
        return (/^https?/.test(a) ? "" : this.f) + a
    };
    S.prototype.o = function() {
        return this.a.f
    };
    S.prototype.g = function() {
        return this.a.a
    };
    S.prototype.getName = S.prototype.j;
    S.prototype.getUrl = S.prototype.ga;
    S.prototype.isVideo = S.prototype.o;
    S.prototype.getStreamingUrl = S.prototype.g;
    var Mh = function(a, b) {
        this.a = a;
        this.g = b
    };
    Mh.prototype.j = function() {
        return this.a.name
    };
    Mh.prototype.getName = Mh.prototype.j;
    Mh.prototype.ga = function() {
        return this.a.url
    };
    Mh.prototype.getUrl = Mh.prototype.ga;
    Mh.prototype.f = function(a, b) {
        this.g.Qa(new Qf("logExitFlushEventsOpenPopup", this.a.name, a || null, b || null, null, !0))
    };
    Mh.prototype.fireExit = Mh.prototype.f;
    var T = function(a, b) {
        L.call(this);
        this.a = a;
        this.s = b;
        this.f = Nh(a.g, b);
        this.o = Oa(this.f, function(c) {
            return c.a.id
        });
        this.g = Oh(a.ib, Tg(a) || "");
        this.j = Ph(a.N, b);
        this.AssetTypes = Qh;
        Rh(this)
    };
    n(T, L);
    var Nh = function(a, b) {
            return Ia(a, function(c) {
                return new R(c, b)
            })
        },
        Oh = function(a, b) {
            return Ia(a, function(c) {
                return new S(c, b)
            })
        },
        Ph = function(a, b) {
            return Ia(Sa(a), function(c) {
                return new Mh(c, b)
            })
        },
        Rh = function(a) {
            var b = u("studioV2.api.creatives") || [];
            z("studioV2.api.creatives", b);
            b.push(a)
        };
    h = T.prototype;
    h.G = function() {
        var a = u("studioV2.api.creatives");
        a && w(a) && D(a, this);
        Pd(this.f, this.g, this.j);
        L.prototype.G.call(this)
    };
    h.Sb = function() {
        return "1.0"
    };
    h.$b = function() {
        return this.a.s
    };
    h.dd = function() {
        return this.a.a.sid || ""
    };
    h.ed = function() {
        return this.a.a.sn || ""
    };
    h.$c = function() {
        return this.a.a.aid || ""
    };
    h.bd = function() {
        return this.a.a.buy || ""
    };
    h.Rb = function() {
        return this.a.a.cid || ""
    };
    h.cd = function() {
        return this.a.a.pid || ""
    };
    h.ad = function() {
        return this.a.a.adv || ""
    };
    h.Vb = function() {
        return this.f
    };
    h.Xb = function() {
        return this.g
    };
    h.Tb = function(a) {
        return this.f[a] || null
    };
    h.Ub = function(a) {
        return this.o[a] || null
    };
    h.cc = function(a) {
        return La(this.f, function(b) {
            return b.a.g == a
        })
    };
    h.Wb = function(a) {
        return Ha(this.f, function(b) {
            return b.a.g == a
        })
    };
    h.bc = function() {
        return this.j
    };
    h.jd = function() {
        this.s.dispose()
    };
    T.prototype.getApiVersion = T.prototype.Sb;
    T.prototype.getCreativeId = T.prototype.$b;
    T.prototype.getSiteId = T.prototype.dd;
    T.prototype.getSiteName = T.prototype.ed;
    T.prototype.getAdId = T.prototype.$c;
    T.prototype.getBuyId = T.prototype.bd;
    T.prototype.getAdserverCreativeId = T.prototype.Rb;
    T.prototype.getPlacementId = T.prototype.cd;
    T.prototype.getAdvertiserId = T.prototype.ad;
    T.prototype.getAssets = T.prototype.Vb;
    T.prototype.getChildAssets = T.prototype.Xb;
    T.prototype.getAssetAt = T.prototype.Tb;
    T.prototype.getAssetById = T.prototype.Ub;
    T.prototype.getFirstAssetByType = T.prototype.cc;
    T.prototype.getAssetsByType = T.prototype.Wb;
    T.prototype.getExits = T.prototype.bc;
    T.prototype.unload = T.prototype.jd;
    var Qh = {
        INPAGE: "BANNER",
        EXPANDING: "EXPANDABLE",
        FLOAT: "FLOATING",
        OVERLAY: "OVERLAY"
    };
    var Sh = "undefined_type",
        Th = 0,
        Uh = null;
    var Vh = void 0,
        Yh = function() {
            void 0 === Vh && (Vh = La(Wh, Xh) || "none");
            return Vh
        },
        Xh = function(a) {
            switch (a) {
                case "gdn":
                    return !(!p.IN_ADSENSE_IFRAME || !p.CreativeToolset);
                case "yahoo":
                    return window.Y && window.Y.SandBox && window.Y.SandBox.vendor;
                case "msn":
                    a: {
                        try {
                            var b = window.$WLXRmAd || window.parent && window.parent.$WLXRmAd;
                            break a
                        } catch (c) {}
                        b = void 0
                    }
                    return !!b;
                case "safe":
                    return !!u("$sf.ext");
                case "mraid":
                    return window.mraid;
                default:
                    return !1
            }
        },
        Wh = "gdn mraid safe yahoo msn none".split(" ");
    var Zh = function(a) {
        M.call(this, a)
    };
    n(Zh, M);
    z("studio.sdk.logger", null);
    var $h = function() {};
    ra($h);
    $h.prototype.a = 0;
    var U = function() {
        O.call(this);
        this.g = null;
        this.o = {};
        this.a = {};
        this.a.companions = "";
        this.a.desiredBitrate = 256;
        this.a.duration = 15;
        this.a.remainingTime = 15;
        this.a.expanded = !1;
        this.a.height = 0;
        this.a.icons = "";
        this.a.linear = !1;
        this.a.skippableState = !1;
        this.a.viewMode = "normal";
        this.a.width = 0;
        this.a.volume = 1;
        this.f = null
    };
    n(U, O);
    h = U.prototype;
    h.Fb = function() {
        this.a.expanded = !1
    };
    h.Mb = function() {
        return this.a.linear
    };
    h.Qb = function() {
        return this.a.width
    };
    h.Kb = function() {
        return this.a.height
    };
    h.Jb = function() {
        return this.a.expanded
    };
    h.Ob = function() {
        return this.a.skippableState
    };
    h.Nb = function() {
        return this.a.remainingTime
    };
    h.Kc = function(a) {
        this.a.remainingTime = a
    };
    h.Ib = function() {
        return this.a.duration
    };
    h.Jc = function(a) {
        this.a.duration = a
    };
    h.Pb = function() {
        return this.a.volume
    };
    h.Lc = function(a) {
        this.a.volume = a;
        this.dispatchEvent(new Zh("ChangeVolumeVpaidAd"))
    };
    h.Hb = function() {
        return this.a.companions
    };
    h.Lb = function() {
        return this.a.icons
    };
    h.pc = function() {
        return "2.0"
    };
    h.rc = function(a, b, c, d, e, f) {
        this.a.width = a;
        this.a.height = b;
        this.a.viewMode = c;
        this.a.desiredBitrate = d;
        null != f && (this.g = f.slot);
        try {
            if (this.f = JSON.parse(ai(e.AdParameters)), null != this.f) {
                this.f.width = a + "";
                this.f.slotWidth = a + "";
                this.f.height = b + "";
                this.f.slotHeight = b + "";
                F(I(this.g.id)) && (this.g.id = "dclk_video_ad_:" + ($h.getInstance().a++).toString(36));
                this.f.creativeParameters.ad_container_id = this.g.id;
                if (null != this.f.primaryFiles)
                    for (c = 0; c < this.f.primaryFiles.length; c++) this.f.primaryFiles[c].height =
                        b + "", this.f.primaryFiles[c].width = a + "";
                if (null != this.f.ad_creative_def_urls) {
                    var g = this.f.ad_creative_def_urls[this.f.creativeParameters.adId];
                    if (g) {
                        g = g.replace("http:", "");
                        var k = Gf(Sc(g)),
                            l = x(this.s, this);
                        tf(k, l, null, void 0)
                    } else bi(this)
                } else bi(this)
            }
        } catch (m) {}
    };
    var ai = function(a) {
        null != a && (a = a.replace(/\\'/g, "'"));
        return a
    };
    U.prototype.s = function() {
        var a = window.creativeExitOverrides;
        if (null != a && null != this.f.exitEvents)
            for (var b = 0; b < this.f.exitEvents.length; b++)
                if (null != a.exitEvents)
                    for (b = 0; b < a.exitEvents.length; b++) this.f.exitEvents[b].name == a.exitEvents[b].name && (this.f.exitEvents[b].destinationUrl = a.exitEvents[b].url);
        bi(this)
    };
    var bi = function(a) {
        a.dispatchEvent(ci);
        di(a, "AdLoaded")
    };
    h = U.prototype;
    h.Gc = function(a, b, c) {
        this.a.width = a;
        this.a.height = b;
        this.a.viewMode = c;
        this.dispatchEvent(new Zh("ResizeVpaidAd"));
        di(this, "AdSizeChange")
    };
    h.Nc = function() {
        di(this, "AdStarted")
    };
    h.Oc = function() {
        di(this, "AdStopped")
    };
    h.vc = function() {
        this.dispatchEvent(new Zh("PauseVpaidAd"));
        di(this, "AdPaused")
    };
    h.Hc = function() {
        this.dispatchEvent(new Zh("ResumeVpaidAd"));
        di(this, "AdPlaying")
    };
    h.Gb = function() {
        this.a.expanded = !0;
        di(this, "AdExpandedChange")
    };
    h.Mc = function() {
        this.a.skippableState && di(this, "AdSkipped")
    };
    h.fd = function(a, b, c) {
        a = x(a, c);
        this.o[b] = a
    };
    h.gd = function() {};
    var di = function(a, b) {
        if (b in a.o) a.o[b](void 0)
    };
    U.prototype.collapseAd = U.prototype.Fb;
    U.prototype.getAdLinear = U.prototype.Mb;
    U.prototype.getAdWidth = U.prototype.Qb;
    U.prototype.getAdHeight = U.prototype.Kb;
    U.prototype.getAdExpanded = U.prototype.Jb;
    U.prototype.getAdSkippableState = U.prototype.Ob;
    U.prototype.getAdRemainingTime = U.prototype.Nb;
    U.prototype.setAdRemainingTime = U.prototype.Kc;
    U.prototype.getAdDuration = U.prototype.Ib;
    U.prototype.setAdDuration = U.prototype.Jc;
    U.prototype.getAdVolume = U.prototype.Pb;
    U.prototype.setAdVolume = U.prototype.Lc;
    U.prototype.getAdCompanions = U.prototype.Hb;
    U.prototype.getAdIcons = U.prototype.Lb;
    U.prototype.handshakeVersion = U.prototype.pc;
    U.prototype.initAd = U.prototype.rc;
    U.prototype.resizeAd = U.prototype.Gc;
    U.prototype.startAd = U.prototype.Nc;
    U.prototype.stopAd = U.prototype.Oc;
    U.prototype.pauseAd = U.prototype.vc;
    U.prototype.resumeAd = U.prototype.Hc;
    U.prototype.expandAd = U.prototype.Gb;
    U.prototype.skipAd = U.prototype.Mc;
    U.prototype.subscribe = U.prototype.fd;
    U.prototype.unsubscribe = U.prototype.gd;
    var ci = new M("InitVpaidAd");
    var ei = function() {
        nh.call(this);
        this.a = new U
    };
    n(ei, nh);
    ra(ei);
    z("window.getVPAIDAd", function() {
        return ei.getInstance().a
    });
    var gi = function(a, b, c, d) {
        L.call(this);
        this.g = a;
        this.v = b;
        this.s = c;
        this.o = d;
        this.j = !1;
        this.a = {};
        this.a.l = !1;
        this.a.i = !1;
        this.a.x = !1;
        this.a.c = !1;
        this.a.r = !1;
        this.a.n = !1;
        this.a.t = !1;
        this.a.m = !1;
        this.f = fi(this)
    };
    n(gi, L);
    var fi = function(a) {
            return a.g.j && hi(a) ? ge(p, "unload", function() {
                ii(this, "u")
            }, void 0, a) : null
        },
        hi = function(a) {
            return -1 != ob(a.o.replace("_", "."), "01_226".replace("_", "."))
        };
    gi.prototype.G = function() {
        this.f && pe(this.f)
    };
    var ji = function(a) {
            return hi(a) && !a.j && (a.a.u || Ra(a.a, function(b) {
                return b
            }))
        },
        ii = function(a, b) {
            var c = y();
            a.g.a[b] = c - a.s;
            a.a[b] = !0;
            ji(a) && (Jf(a.v, a.g.f()), a.j = !0, a.f && pe(a.f))
        };
    var li = function(a) {
        O.call(this);
        this.a = this.o = null;
        this.f = new te(this);
        this.v = !1;
        ki || (this.a = new kf(100), N(this.f, this.a, "tick", this.g), this.a.start(), N(this.f, document, "DOMContentLoaded", this.g), N(this.f, document, "readystatechange", this.g), N(this.f, window, "load", this.s), this.g(), null != a && oa(a) && lf(this.s, a, this))
    };
    n(li, O);
    li.prototype.g = function() {
        var a;
        if (a = J) {
            a = !1;
            try {
                a = null == window.frameElement
            } catch (c) {}
        }
        if (a && document.documentElement.doScroll)
            if (document.documentElement.doScroll) try {
                document.documentElement.doScroll("left");
                var b = !0
            } catch (c) {
                b = !1
            } else b = !1;
            else "undefined" === document.readyState ? document.getElementsByTagName ? (b = document.getElementsByTagName("*"), b = 0 < b.length ? b[b.length - 1] : null, this.o && b && this.o == b ? b = !0 : (this.o = b, b = !1)) : b = !1 : b = "complete" === document.readyState;
        b && this.s()
    };
    li.prototype.G = function() {
        mi(this);
        O.prototype.G.call(this)
    };
    var mi = function(a) {
        a.f.dispose();
        a.a && (a.a.dispose(), a.a = null)
    };
    li.prototype.s = function() {
        this.v || (ki = this.v = !0, mi(this), this.dispatchEvent(new M("ready")))
    };
    var ki = !1;
    var V = function(a) {
        O.call(this);
        this.V = a || Ic();
        this.I = null;
        this.ma = !1;
        this.a = null;
        this.o = void 0;
        this.D = this.F = this.v = null
    };
    A(V, O);
    V.prototype.ka = $h.getInstance();
    V.prototype.M = function() {
        return this.I || (this.I = ":" + (this.ka.a++).toString(36))
    };
    V.prototype.O = function() {
        return this.a
    };
    var ni = function(a) {
        a.o || (a.o = new te(a));
        return a.o
    };
    V.prototype.Va = function(a) {
        if (this.v && this.v != a) throw Error("Method not supported");
        V.P.Va.call(this, a)
    };
    V.prototype.L = function() {
        this.a = Nc(this.V.a, "DIV")
    };
    V.prototype.ua = function(a) {
        oi(this, a)
    };
    V.prototype.Z = function(a) {
        oi(this, a.parentNode, a)
    };
    var oi = function(a, b, c) {
        if (a.ma) throw Error("Component already rendered");
        a.a || a.L();
        b ? b.insertBefore(a.a, c || null) : a.V.a.body.appendChild(a.a);
        a.v && !a.v.ma || a.ha()
    };
    V.prototype.wa = function(a) {
        this.a = a
    };
    V.prototype.ha = function() {
        this.ma = !0;
        pi(this, function(a) {
            !a.ma && a.O() && a.ha()
        })
    };
    var qi = function(a) {
        pi(a, function(b) {
            b.ma && qi(b)
        });
        a.o && xe(a.o);
        a.ma = !1
    };
    V.prototype.G = function() {
        this.ma && qi(this);
        this.o && (this.o.dispose(), delete this.o);
        pi(this, function(a) {
            a.dispose()
        });
        this.a && Qc(this.a);
        this.v = this.a = this.D = this.F = null;
        V.P.G.call(this)
    };
    var pi = function(a, b) {
        a.F && C(a.F, b, void 0)
    };
    V.prototype.removeChild = function(a, b) {
        if (a) {
            var c = t(a) ? a : a.M();
            this.D && c ? (a = this.D, a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;
            if (c && a) {
                var d = this.D;
                c in d && delete d[c];
                D(this.F, a);
                b && (qi(a), a.a && Qc(a.a));
                b = a;
                if (null == b) throw Error("Unable to set parent component");
                b.v = null;
                V.P.Va.call(b, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var W = function(a, b) {
        V.call(this, b);
        this.ea = a;
        this.$ = null
    };
    A(W, V);
    W.prototype.ua = function(a) {
        this.ea && ri(this);
        W.P.ua.call(this, a)
    };
    W.prototype.Z = function(a) {
        this.ea && ri(this);
        W.P.Z.call(this, a)
    };
    var ri = function(a) {
        a.O() || a.L();
        pi(a, function(b) {
            b.ua(a.O())
        })
    };
    W.prototype.M = function() {
        return this.I || (this.I = (Uh || (Uh = "200_260_" + Sh)) + "_" + (Th++).toString(36))
    };
    W.prototype.toString = function() {
        return this.M()
    };
    var si = function(a) {
            pi(a, function(b) {
                si(b)
            })
        },
        ti = function(a) {
            pi(a, function(b) {
                ti(b)
            })
        },
        ui = function(a) {
            pi(a, function(b) {
                ui(b)
            })
        },
        vi = function(a) {
            pi(a, function(b) {
                vi(b)
            })
        };
    W.prototype.va = function(a, b) {
        kd(this.O(), a, b);
        pi(this, function(c) {
            c.va("100%", "100%")
        })
    };
    var wi = function(a) {
        if (null !== a.$) return a.$;
        var b = Xe();
        a.Ua(b);
        return a.$ = b.a
    };
    W.prototype.Ua = function(a) {
        Dc(a.resolve)
    };
    var xi = function(a, b, c) {
        W.call(this, Sg(b, "disable_eager_child_attachment", !1), c);
        this.T = a;
        this.s = b;
        if (b = a.a && a.a.a) b = a.a.a, b = new K(b.width, b.height);
        this.qa = b || new K(a.width, a.height);
        this.W = !1;
        this.X = [];
        this.ca = null
    };
    A(xi, W);
    h = xi.prototype;
    h.wc = function() {
        for (this.W = !0; 0 < this.X.length;) this.X.shift()
    };
    h.Fc = function() {
        this.W = !1
    };
    h.wa = function(a) {
        xi.P.wa.call(this, a);
        a.style.position = "relative";
        var b = this.qa;
        if (b instanceof K) {
            var c = b.height;
            b = b.width
        } else throw Error("missing height argument");
        b = 0 < parseInt(b, 10) ? b : "100%";
        c = 0 < parseInt(c, 10) ? c : "100%";
        kd(a, b, c);
        "boxSizing" in a.style && (a.style.boxSizing = "content-box");
        b = this.s.F;
        (null == b ? 0 : b.a && 1 == this.s.g.length) ? If(b, a): null != b && b.a && !b.f && Kf(b)
    };
    h.ha = function() {
        var a = ni(this);
        N(a, this, "conduitInitialized", this.wc);
        N(a, this, "RESET", this.Fc);
        xi.P.ha.call(this);
        var b = ni(this);
        this.ca = new li(5E3);
        ki ? this.bb() : N(b, this.ca, "ready", this.bb);
        if (b = this.O()) N(a, b, "mouseover", this.kc), N(a, b, "mouseout", this.eb);
        N(a, this, "logEvent", this.cb);
        N(a, this, "logExitFlushEventsOpenPopup", this.cb)
    };
    h.kc = function() {
        yi(this, "1")
    };
    h.eb = function() {
        yi(this, "0")
    };
    h.cb = function(a) {
        "Exit" == zf(a.f) && this.eb()
    };
    var yi = function(a, b) {
            a.W || a.X.push({
                name: "isMouseOver",
                value: b
            })
        },
        zi = function(a, b, c) {
            (b = Yf(b, c)) && a.dispatchEvent(b)
        };
    var X = function(a) {
        M.call(this, a)
    };
    A(X, M);
    z("studio.events.StudioEvent", X);
    X.INIT = "init";
    X.VISIBLE = "visible";
    X.HIDDEN = "hidden";
    X.VISIBILITY_CHANGE = "visibilityChange";
    X.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
    X.EXIT = "exit";
    X.INTERACTION = "interaction";
    X.PAGE_LOADED = "pageLoaded";
    X.ORIENTATION = "orientation";
    X.ABOUT_TO_EXPAND = "aboutToExpand";
    X.EXPAND_START = "expandStart";
    X.EXPAND_FAILED = "expandFailed";
    X.EXPAND_FINISH = "expandFinish";
    X.COLLAPSE_START = "collapseStart";
    X.COLLAPSE_FINISH = "collapseFinish";
    X.COLLAPSE = "collapse";
    X.FULLSCREEN_SUPPORT = "fullscreenSupport";
    X.HOSTPAGE_FEATURES_LOADED = "hostpageFeaturesLoaded";
    X.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
    X.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
    X.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
    X.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
    X.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
    X.HOSTPAGE_SCROLL = "hostpageScroll";
    X.OPTIONAL_HOSTPAGE_SCROLL = "optHostpageScroll";
    X.SCROLL_INTERACTION = "scrollInteraction";
    X.ENTER_VIEWPORT = "enterViewport";
    X.OPTIONAL_ENTER_VIEWPORT = "optEnterViewport";
    X.EXIT_VIEWPORT = "exitViewport";
    X.OPTIONAL_EXIT_VIEWPORT = "optExitViewport";
    X.VIDEO_START = "videoStart";
    X.prototype.Db = function(a, b) {
        this[a] = b;
        return this
    };
    X.prototype.addProperty = X.prototype.Db;
    var Ai = J ? db(Za(new E(Xa, 'javascript:""'))) : db(Za(new E(Xa, "about:blank")));
    cb(Ai);
    var Bi = J ? db(Za(new E(Xa, 'javascript:""'))) : db(Za(new E(Xa, "javascript:undefined")));
    cb(Bi);
    var Ci = function() {
        this.a = [];
        this.f = []
    };
    h = Ci.prototype;
    h.addReporter = function(a) {
        C(this.a, function(b) {
            b.newReporterCallback(a);
            a.newReporterCallback(b)
        });
        C(this.f, function(b) {
            a.registerChargeableEventName(b)
        });
        this.a.push(a)
    };
    h.reportEvents = function(a) {
        C(this.a, function(b) {
            b.reportEvents(a)
        })
    };
    h.registerChargeableEventName = function(a) {
        C(this.a, function(b) {
            b.registerChargeableEventName(a)
        });
        this.f.push(a)
    };
    h.logCustomVariable = function(a, b) {
        C(this.a, function(c) {
            c.logCustomVariable(a, b)
        })
    };
    h.getType = function() {
        return "UNIFIED_DISPATCHER"
    };
    h.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    h.newReporterCallback = v;
    h.supportsChargeableEvents = function() {
        var a = !1;
        C(this.a, function(b) {
            b.supportsChargeableEvents() && (a = !0)
        });
        return a
    };
    var Di = function(a, b) {
        this.g = a.X;
        this.f = a.ea;
        this.a = a;
        this.j = b
    };
    h = Di.prototype;
    h.reportEvents = function(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = a[c],
                e = ih(this.a, d.unifiedReportingEvent);
            if (e) {
                var f = b;
                d = ["eid", c + 1, "=", e, ";ecn", c + 1, "=", d.count, ";etm", c + 1, "=", d.time, ";"].join("");
                0 == f.length && f.push("");
                e = f.pop();
                950 < e.length + d.length && (f.push(e), e = "");
                f.push(e + d)
            }
        }
        if (b.length)
            for (a = y(), c = 0; c < b.length; c++) document.createElement("img").src = this.g + "&timestamp=" + a + ";" + b[c]
    };
    h.registerChargeableEventName = function(a) {
        var b = this.a.T;
        $g(this.a, a, !0) && !b && ah(this.a, !1)
    };
    h.logCustomVariable = function(a, b) {
        this.f && 0 < this.f.length && (a = [this.f, "&timestamp=", y(), ";str=", a, ";strtype=", b].join(""), Jf(this.j, a))
    };
    h.getType = function() {
        return "STUDIO"
    };
    h.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    h.newReporterCallback = function(a) {
        a.supportsChargeableEvents() && !this.a.T && ah(this.a, !0)
    };
    h.supportsChargeableEvents = function() {
        return !1
    };
    var Ei = function(a) {
        this.g = {};
        this.a = {};
        this.f = {};
        this.A = {};
        this.j = this.ab(a);
        this.D = a;
        this.s = {};
        this.v = {};
        this.o = {}
    };
    A(Ei, L);
    var Gi = function(a, b, c, d) {
            if (c || !a.A[b]) a.A[b] || (a.g[b] = 0, a.A[b] = !0), a.g[b]++, d && Fi(a, d)
        },
        Fi = function(a, b) {
            C(b, function(c) {
                C(Ug(this.D, c), function(d) {
                    d.ping()
                }, this)
            }, a)
        },
        Hi = function(a, b, c, d) {
            if (!(b in a.f)) {
                for (var e = y(), f = a.s[b]; f && 0 < f.length;) e += f.pop();
                a.f[b] = e;
                c && (a.o[c] = a.o[c] || [], a.o[c].push(b));
                Gi(a, b, !1, d)
            }
        },
        Ii = function(a, b, c) {
            if (b in a.f) {
                for (var d = a.f[b], e = y(), f = a.v[b]; f && 0 < f.length;) e += f.pop();
                d = e - d;
                0 > d && (d = 0);
                a.a[b] = a.a[b] || 0;
                a.a[b] += d;
                delete a.f[b];
                c && a.o[c] && D(a.o[c], b)
            }
        },
        Ji = function(a) {
            for (var b in a.f) Ii(a,
                b)
        },
        Ki = function(a) {
            for (var b in a.f) Ii(a, b), Hi(a, b);
            var c = [];
            for (b in a.g) {
                var d = 0,
                    e = a.g[b];
                a.a[b] && (d = Math.floor(a.a[b] / 1E3), a.a[b] -= 1E3 * d);
                a.g[b] = 0;
                (0 < e || 0 < d) && c.push({
                    unifiedReportingEvent: Mg(b),
                    count: e,
                    time: d
                })
            }
            a.j.reportEvents(c)
        };
    Ei.prototype.G = function() {
        Ji(this);
        Ei.P.G.call(this)
    };
    var Li = function(a) {
        this.g = a;
        this.f = !1;
        this.a = new Kd
    };
    h = Li.prototype;
    h.reportEvents = function(a) {
        this.f || C(a, function(b) {
            this.a.a(b.unifiedReportingEvent.name) && (this.f = !0, C(Ug(this.g, "ENGAGEMENT_IMG"), function(c) {
                c.ping()
            }))
        }, this)
    };
    h.registerChargeableEventName = function(a) {
        this.a.add(a)
    };
    h.logCustomVariable = function() {};
    h.getType = function() {
        return "THIRD_PARTY"
    };
    h.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    h.newReporterCallback = function() {};
    h.supportsChargeableEvents = function() {
        return !1
    };
    var Mi = function(a, b) {
        this.C = b;
        Ei.call(this, a)
    };
    A(Mi, Ei);
    h = Mi.prototype;
    h.ab = function(a) {
        if ("gdn" == Yh()) {
            var b = u("googlecreative.reporting.sharedReporter");
            b || (b = new Ci, z("googlecreative.reporting.sharedReporter", b));
            a.Ta || b.addReporter(new Di(a, this.C));
            0 < Ug(a, "ENGAGEMENT_IMG").length && b.addReporter(new Li(a))
        } else b = new Di(a, this.C);
        return b
    };
    h.tb = v;
    h.rb = v;
    h.qb = function(a, b) {
        this.j.logCustomVariable(a, b)
    };
    h.sb = function(a) {
        this.j.registerChargeableEventName(a)
    };
    var Y = function(a) {
        this.o = a;
        this.j = null;
        this.s = !1;
        this.g = null;
        this.v = 5E3;
        this.f = []
    };
    A(Y, L);
    h = Y.prototype;
    h.Wa = v;
    h.fb = v;
    h.ba = function() {
        var a;
        if (a = this.Ma()) {
            a: {
                a = this.o;
                for (c in a.g) {
                    var b = a.D.H[c];
                    if (b && b.B) {
                        var c = !0;
                        break a
                    }
                }
                c = !1
            }
            a = c || !this.Ga()
        }
        a && (Ki(this.o), this.g = y())
    };
    h.Ga = function() {
        return null != this.g && y() - this.g <= this.v
    };
    h.Ma = function() {
        return null != this.j && 12E5 >= y() - this.j
    };
    h.G = function() {
        for (this.ba(); 0 < this.f.length;) {
            var a = this.f.pop();
            oa(a) ? p.clearTimeout(a) : a.dispose()
        }
        Y.P.G.call(this)
    };
    var Ni = function(a, b, c) {
        Y.call(this, a);
        this.A = b;
        this.C = c;
        this.a = new kf(1E3 * this.A);
        he(this.a, "tick", x(this.ba, this))
    };
    n(Ni, Y);
    h = Ni.prototype;
    h.fb = function() {
        this.a.sa || this.a.start()
    };
    h.ba = function() {
        this.a.stop();
        Y.prototype.ba.call(this)
    };
    h.Ma = function() {
        return null != this.j && this.C || Y.prototype.Ma.call(this)
    };
    h.Ga = function() {
        return !1
    };
    h.G = function() {
        this.a.stop();
        this.a.dispose();
        Y.prototype.G.call(this)
    };
    var Oi = function(a, b, c) {
        Y.call(this, a);
        this.a = b;
        this.A = c && 0 < this.a.length ? this.a.pop() : null
    };
    n(Oi, Y);
    Oi.prototype.Wa = function() {
        for (var a = 0; a < this.a.length; a++) this.f.push(lf(x(this.ba, this), 1E3 * this.a[a]));
        null != this.A && (a = new kf(1E3 * this.A), he(a, "tick", x(this.ba, this)), a.start(), this.f.push(a))
    };
    var Pi = [10, 20, 50, 120];
    var Qi = function(a) {
        this.a = a;
        this.f = "undefined" != typeof DARTDebugEventHandler && DARTDebugEventHandler ? new DARTDebugEventHandler : null;
        F(I(this.a.Pa)) || DARTDebugEventHandler.initPreviewSession(this.a.Pa)
    };
    h = Qi.prototype;
    h.reportEvents = function(a) {
        if (this.f)
            for (var b = 0; b < a.length; ++b) {
                var c = a[b],
                    d = c.unifiedReportingEvent;
                d = this.a.H[[d.type, escape(d.name), escape(d.videoName), d.trigger].join(":")];
                try {
                    this.f.handleEventActivity(d.name, d.type, c.count, c.time, !d.j, this.a.j)
                } catch (e) {}
            }
    };
    h.registerChargeableEventName = v;
    h.logCustomVariable = function(a, b) {
        try {
            this.f.handleCustomVariable(unescape(a), b, this.a.j)
        } catch (c) {}
    };
    h.getType = function() {
        return "OUTPUT_CONSOLE"
    };
    h.getConfig = function() {
        return {
            reportingApiVersion: 2
        }
    };
    h.newReporterCallback = v;
    h.supportsChargeableEvents = function() {
        return !1
    };
    var Ri = function(a) {
        Ei.call(this, a)
    };
    n(Ri, Ei);
    h = Ri.prototype;
    h.ab = function(a) {
        return new Qi(a)
    };
    h.tb = function(a, b, c) {
        var d = this.j;
        a = d.a.H[a];
        if (d.f) try {
            d.f.handleEventAction(b, a.name, c, a.type, !a.j, d.a.j)
        } catch (e) {}
    };
    h.rb = function(a) {
        var b = this.j;
        try {
            b.f.handleCustomJSExecution(a, b.a.j)
        } catch (c) {}
    };
    h.qb = function(a, b) {
        this.j.logCustomVariable(a, b)
    };
    h.sb = function() {};
    var Si = function(a, b, c) {
        Y.call(this, a);
        this.A = b;
        this.a = c
    };
    n(Si, Y);
    Si.prototype.Ga = function() {
        return this.a && Y.prototype.Ga.call(this)
    };
    Si.prototype.Wa = function() {
        var a = new kf(1E3 * this.A);
        he(a, "tick", x(this.ba, this));
        a.start();
        this.f.push(a)
    };
    var Z = function(a, b, c, d) {
        O.call(this);
        this.a = a;
        this.da = b;
        this.v = c;
        this.renderers = {};
        this.o = {};
        this.F = new te(this);
        this.M = this.N = !1;
        this.s = this.S = 0;
        this.A = [];
        this.D = {};
        this.T = new T(this.a, this);
        this.L = d;
        this.f = a.f ? new Ri(a) : new Mi(a, this.L);
        this.g = Ti(a, this.f);
        this.I = {};
        J && N(this.F, self, "unload", this.dispose);
        N(this.F, p, "pagehide", x(this.g.ba, this.g));
        null != this.v.a && (a = this.v, "loading" == a.a.getState() ? a.a.addEventListener("ready", x(a.Ia, a)) : a.Ia());
        Cd(1);
        Cd(64);
        window.layoutsPreview && Cd(16);
        "gdn" ==
        Yh() && Cd(32);
        this.a.f && Cd(256);
        null != this.v.a && Cd(8)
    };
    A(Z, O);
    var Ui = {},
        Ti = function(a, b) {
            var c = !1;
            C(a.g, function(d) {
                null != d.a && "lightbox" == d.a.expansionMode && (c = !0)
            });
            return a.f ? new Si(b, 2, !1) : c ? new Ni(b, 2, !0) : new Oi(b, Pi, !0)
        };
    Z.prototype.Z = function() {
        this.s++;
        Vi(this)
    };
    Z.prototype.W = function() {
        Wi(this, new Mf("logEvent", "Count", "FULL_SCREEN"))
    };
    Z.prototype.$ = function(a) {
        "boolean" == typeof a.B && a.B ? Wi(this, a) : Xi(this, a);
        a.C && this.g.ba()
    };
    Z.prototype.V = function() {
        this.g.ba()
    };
    var Xi = function(a, b) {
            var c = zf(b.f);
            c = bh(b.o, c);
            null != c && Yi(a, c, b.f, b.A, b.a)
        },
        Yi = function(a, b, c, d, e, f) {
            if (null !== b) switch (a.f.tb(b, c, d), c) {
                case "Exit":
                    f || (f = []), f.push("CLICK");
                case "Count":
                    Gi(a.f, b, d, f);
                    b = a.a.H[b];
                    c = !1;
                    b && b.chargeable && (b = a.g, b.s ? c = !1 : (Ki(b.o), b.g = y(), c = b.s = !0));
                    c || a.g.fb();
                    break;
                case "Start":
                    Hi(a.f, b, e, f);
                    break;
                case "Stop":
                    Ii(a.f, b, e)
            }
        },
        Wi = function(a, b) {
            if ("DISPLAY_TIMER" == b.g) "Start" == b.f && (a.N || (Zi(a).then(a.ea, void 0, a), a.N = !0), 0 == a.S++ && (b = ch(a.a, "DISPLAY_TIMER")) && Yi(a, b, "Start", !1), a.s--);
            else {
                var c = ch(a.a, b.g);
                if (c) {
                    var d = [];
                    ("FULL_SCREEN" == b.g || "EXPAND_TIMER" == b.g && "Start" == b.f) && d.push("EXPANSION");
                    Yi(a, c, b.f, !1, b.a, d)
                }
            }
        };
    h = Z.prototype;
    h.sc = function(a) {
        Wi(this, a);
        var b = dh(this.a, a.g, a.videoName);
        null != b && Yi(this, b, a.f, !1, a.a)
    };
    h.pb = function() {
        var a = ch(this.a, "DISPLAY_TIMER");
        a && Yi(this, a, "Stop", !1)
    };
    h.Qa = function(a) {
        var b = this.a.N[a.o] || {},
            c = null != a.s ? a.s : b.url;
        null != a.g && !F(I(a.g)) && (c = Vc(c, a.g));
        var d = this.a.M,
            e = Ug(this.a, "CLICK"),
            f = 1 == e.length ? e[0].ga() : "",
            g = c;
        e = null != a.v ? a.v : this.a.C;
        var k = c,
            l;
        "market" == (k.match(Tc)[1] || null) && lc ? l = !0 : l = 1 == lh.getInstance().a[k];
        l ? (c = Nd(this.a.C, "http://ad.doubleclick.net/viewad/817-grey.gif", b.f || null, f, d), Jf(this.L, c)) : g = Nd(e, c, b.f || null, f, d);
        c = g;
        d = b.o;
        b = null != b.g ? b.g : void 0;
        null != this.v.a ? (b = this.v, ph.test(c) ? b.a.expand(c) : b.a.open(c)) : window.open(c, d ||
            "_blank", b || "");
        a.log && -1 == e.indexOf("[rm_exit_id]") && Xi(this, a);
        this.g.ba()
    };
    h.nc = function(a) {
        var b = this.o[a.a];
        switch (a.type) {
            case "expandAsset":
                Kh(this, b);
                break;
            case "expandRequested":
                Kh(this, b);
                break;
            case "expandFinished":
                if (a = this.renderers[b]) ti(a), this.dispatchEvent(new Fh("EXPAND_FINISH", b));
                break;
            case "collapseAsset":
                Lh(this, b);
                break;
            case "collapseRequested":
                Lh(this, b);
                break;
            case "collapseFinished":
                if (a = this.renderers[b]) vi(a), this.dispatchEvent(new Fh("COLLAPSE_FINISH", b));
                break;
            case "tellAssetHide":
                this.C(b)
        }
    };
    h.ic = function(a) {
        a: {
            var b = this.a;
            var c = a.f;
            if (c && (c = ag(c)) && b.Ha[c]) {
                b = b.Ha[c];
                break a
            }
            for (c = 0; c < b.g.length; c++) {
                var d = b.g[c];
                if (this.o[a.a] != d && yg(d)) {
                    b = d;
                    break a
                }
            }
            b = null
        }
        if (b) switch (a.type) {
            case "tellCompanionAssetShow":
                Jh(this, b);
                break;
            case "tellCompanionAssetHide":
                this.C(b)
        }
    };
    h.hc = function(a) {
        a = unescape(a.f);
        this.a.f && this.f.rb(a);
        try {
            eval(a)
        } catch (b) {}
    };
    h.oc = function(a) {
        a = parseInt(a.f, 10);
        !isNaN(a) && 0 < a && (this.g.v = a)
    };
    h.gc = function(a) {
        var b = ch(this.a, a.o);
        if (b) {
            var c = this.f,
                d = a.f;
            a = a.g;
            var e = c.s[b] || (c.s[b] = []);
            b = c.v[b] || (c.v[b] = []);
            0 != d && e.push(d);
            0 != a && b.push(a)
        }
    };
    h.jc = function(a) {
        this.f.qb(a.f, a.g)
    };
    h.Pc = function() {
        this.a.na && Gf(Sc(this.a.na));
        var a = Ug(this.a, "IMPRESSION_JS");
        0 < a.length && (a = Ia(a, function(b) {
            return b.ga()
        }), Ch(a, this.a.I));
        $i(this)
    };
    var $i = function(a) {
            for (var b = a.a.g, c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.f;
                Jh(a, d, e && !e.g ? -1 : 1E3 * (e && e.g && 0 < e.o && e.o || 0))
            }
        },
        Jh = function(a, b, c) {
            c ? 0 < c && (a.s++, a.A.push(lf(x(a.R, a, b), c))) : (a.s++, a.R(b))
        };
    Z.prototype.R = function(a) {
        if (!(a in this.renderers)) {
            var b = this.a;
            if (b = this.da.a(a) ? new aj(a, b) : null) {
                this.renderers[a] = b;
                this.o[b] = a;
                b = this.renderers[a];
                var c = this.F;
                N(c, b, "logEvent", this.$);
                N(c, b, "logVideoEvent", this.sc);
                N(c, b, "logExitFlushEventsOpenPopup", this.Qa);
                N(c, b, "launchExit", this.Qa);
                N(c, b, "expandAsset expandRequested expandFinished collapseAsset collapseRequested collapseFinished tellAssetHide".split(" "), this.nc);
                N(c, b, ["tellCompanionAssetShow", "tellCompanionAssetHide"], this.ic);
                N(c,
                    b, "invokeExternalJSFunction", this.hc);
                N(c, b, "setThrottlingWindow", this.oc);
                N(c, b, "reportCustomVariable", this.jc);
                N(c, b, "setTimerAdjustment", this.gc);
                N(c, b, "flushCounters", this.V);
                N(c, b, "RESET", this.Z);
                N(c, b, "registerChargeableEventName", this.X);
                N(c, b, "fullscreenExpandFinished", this.W);
                if (a.F || this.a.U) {
                    if (b = a.v, c = Jc(document, b)) {
                        var d;
                        if (d = this.a.U) d = !(!F(I(id(c))) && "static" != id(c));
                        d && (c.style.position = "relative");
                        this.a.Oa && (c.style.display = "inline-block", c.style.verticalAlign = "top");
                        a.a && a.a.f &&
                            (this.I[b] = c.style.height, c.style.height = "auto");
                        a.I || this.renderers[a].ua(c);
                        if (a.H)
                            for (b = this.renderers[a], c = a.H.split(";"), d = 0; d < c.length; d++) {
                                var e = c[d].split(":");
                                2 <= e.length && fd(b.O(), e[0], e[1])
                            }
                    }
                } else document.body && document.body.firstChild ? this.renderers[a].Z(document.body.firstChild) : document.body ? this.renderers[a].ua(document.body) : document.documentElement && this.renderers[a].ua(document.documentElement);
                this.dispatchEvent(new Fh("SHOW", a))
            }
        }
        a.f && (b = a.f, b = 1E3 * (b && b.f && 0 < b.endTime && b.endTime ||
            -1), 0 < b && (b = lf(x(this.C, this, a), b), this.A.push(b), this.D[a] = b));
        this.M || (Zi(this).then(this.ca, void 0, this), this.M = !0)
    };
    var Zi = function(a) {
        var b = [];
        Qa(a.renderers, function(c, d) {
            b.push(wi(this.renderers[d]))
        }, a);
        return Ve(b)
    };
    Z.prototype.C = function(a) {
        var b = this.renderers[a];
        if (b) {
            for (var c = this.f, d = c.o[b] || []; 0 < d.length;) Ii(c, d.pop(), b);
            delete this.o[b];
            b.dispose();
            delete this.renderers[a];
            this.D[a] && (p.clearTimeout(this.D[a]), delete this.D[a]);
            this.dispatchEvent(new Fh("HIDE", a));
            Vi(this)
        }
    };
    var Kh = function(a, b) {
            var c = a.renderers[b];
            c && (si(c), a.dispatchEvent(new Fh("EXPAND", b)), a.dispatchEvent(new Fh("EXPAND_REQUEST", b)))
        },
        Lh = function(a, b) {
            var c = a.renderers[b];
            c && (ui(c), a.dispatchEvent(new Fh("COLLAPSE", b)), a.dispatchEvent(new Fh("COLLAPSE_REQUEST", b)))
        };
    Z.prototype.ca = function() {
        bj(this)
    };
    var bj = function(a) {
        a.g.j = y();
        a.a.jb && Wi(a, new Mf("logEvent", "Count", "HTML5_CREATIVE_IMPRESSION"));
        a.a.Na && (a.a.Aa && !a.a.f && "function" === typeof window.vv ? window.vv() : Jf(a.L, a.a.ca));
        var b = [];
        Dg.forEach(function(c) {
            b.push.apply(b, da(Ug(a.a, c)))
        });
        a.a.Aa && "function" === typeof window.pdib3 && !a.a.f ? b.forEach(function(c) {
            var d = c.ga();
            F(I(d)) || (c.ob ? window.pdib3(d, !0) : window.pdib3(d, !1))
        }) : b.forEach(function(c) {
            c.ping()
        })
    };
    Z.prototype.ea = function() {
        this.g.Wa();
        this.A.push(lf(x(this.pb, this), 24E4))
    };
    var Vi = function(a) {
        0 == --a.S && (a.pb(), Ji(a.f), 0 == a.s && a.dispose())
    };
    Z.prototype.X = function(a) {
        this.f.sb(a.f)
    };
    Z.prototype.G = function() {
        for (var a in this.I) Jc(document, a).style.height = this.I[a];
        this.F.dispose();
        for (this.T.dispose(); 0 < this.A.length;) p.clearTimeout(this.A.pop());
        a = this.a.g;
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            c in this.renderers && (this.renderers[c].dispose(), delete this.renderers[c])
        }
        this.o = null;
        this.f.dispose();
        this.f = null;
        a = this.a.s;
        q(Ui[a]) && delete Ui[a];
        Z.P.G.call(this)
    };
    var cj = function(a, b, c, d) {
        yd.call(this, a, b);
        this.a = {};
        this.v = c;
        this.B = d;
        this.g = "rmad_perf"
    };
    A(cj, yd);
    cj.prototype.f = function() {
        var a = "&rl=" + this.v + "&en=" + this.B;
        a: {
            for (b in this.a) {
                var b = !1;
                break a
            }
            b = !0
        }
        if (!b) {
            b = this.a;
            var c = [],
                d;
            for (d in b) Uc(d, b[d], c);
            a += "&" + c.join("&")
        }
        this.o = a;
        return cj.P.f.call(this)
    };
    var dj = function(a, b) {
        yd.call(this, a, "");
        this.B = b;
        this.g = "studio-rl-error";
        this.a = null
    };
    A(dj, yd);
    dj.prototype.f = function() {
        if (null === this.a) return "";
        var a = "&rl=" + this.B + "&err=",
            b = encodeURIComponent;
        if (t(this.a)) var c = this.a;
        else if (this.a instanceof Error) {
            var d = this.a;
            c = d.toString();
            d.name && -1 == c.indexOf(d.name) && (c += ": " + d.name);
            d.message && -1 == c.indexOf(d.message) && (c += ": " + d.message);
            if (d.stack) {
                d = d.stack;
                var e = c;
                try {
                    -1 == d.indexOf(e) && (d = e + "\n" + d);
                    for (var f; d != f;) f = d, d = d.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    c = d.replace(/\n */g, "\n")
                } catch (g) {
                    c = e
                }
            }
        } else c = "Failed to capture error message from: " +
            this.a.toString();
        this.o = a + b(c);
        return dj.P.f.call(this)
    };
    var ej = function(a) {
        L.call(this);
        this.o = a + ".js";
        this.f = new dj(.001, a);
        this.a = this.g = null
    };
    n(ej, L);
    ej.prototype.j = function(a) {
        var b;
        if (b = a instanceof ErrorEvent) {
            b = a.filename;
            var c = this.o,
                d = b.length - c.length;
            b = 0 <= d && b.indexOf(c, d) == d
        }
        b && (this.f.a = a.error instanceof Error ? a.error : a.message, a = this.f.f(), Zc(p, a, !1))
    };
    ej.prototype.G = function() {
        this.a && this.g.removeEventListener("error", this.a, !1);
        L.prototype.G.call(this)
    };
    var fj = function(a) {
        this.a = a
    };
    var gj = function() {
        L.call(this);
        this.v = {};
        this.f = this.a = null;
        this.g = [];
        this.j = !0
    };
    n(gj, L);
    var hj = function(a, b, c) {
        a.j = !1;
        if (null === a.a) {
            var d = ua(p.MutationObserver || p.WebKitMutationObserver) ? a.s : a.o;
            a.a = new P(d, a)
        }
        $e(a.a.then(b, v, c), function() {
            null === this.f || this.f.disconnect();
            this.j = !0
        }, a)
    };
    gj.prototype.s = function(a) {
        ij(this) ? a() : (this.f = new p.MutationObserver(x(function(b, c) {
            var d = !1;
            C(b, function(e) {
                "childList" == e.type && 0 != e.addedNodes.length && (d = !0)
            });
            d && ij(this) && (c.disconnect(), a())
        }, this)), this.f.observe(p.document.documentElement, {
            childList: !0,
            subtree: !0
        }))
    };
    gj.prototype.o = function(a) {
        var b = new li(1500);
        ki ? ij(this) && a() : he(b, "ready", function() {
            ij(this) ? a() : lf(function() {
                ij(this) && a()
            }, 0, this)
        }, !1, this)
    };
    var ij = function(a) {
        for (var b = a.g.length - 1; 0 <= b; --b) {
            var c = a.g[b];
            if (null === Jc(document, c)) {
                b: {
                    var d = window;
                    try {
                        var e = d.parent.document;
                        break b
                    } catch (f) {}
                    e = void 0
                }
                c = e ? null !== e.getElementById(c) : !1
            }
            else c = !0;
            if (!c) return a.g.length = b + 1, !1
        }
        a.g = [];
        return !0
    };
    gj.prototype.G = function() {
        null === this.a || this.a.cancel();
        this.a = null;
        null === this.f || this.f.disconnect();
        this.f = null
    };
    var jj = function() {};
    var kj = null,
        lj = null,
        mj = function(a, b) {
            return Ia(Ug(a, b), function(c) {
                return c.ga()
            })
        },
        nj = function(a) {
            var b = 0 < Wg(a, "FLASH").length,
                c = a.R,
                d = 0 < Wg(a, "HTML5").length,
                e = a.$;
            a = a.W;
            return b && zh(c) || d && Ah(e, a) ? !0 : !1
        },
        pj = function(a) {
            var b = "",
                c = u("dclkStudioV3.startTimes." + a.s),
                d = Wg(a, "HTML5");
            0 < d.length && (b = (b = d[0].B) && b.a ? b.a : "");
            d = !F(b) && "0_0" !== b;
            c && d ? (a = oj(lj, a.f), c = new gi(new cj(4E-5, "https:", "200_260", b), a, c, b)) : c = null;
            return c
        },
        rj = function(a) {
            if (nj(a)) {
                var b = pj(a);
                b && ii(b, "l");
                var c = new gj;
                C(a.g, function(e) {
                    var f =
                        e.v;
                    null != f && (e = e.s, c.j && (f = new fj(f), c.a = null, c.v[null != e ? e : "."] = f, c.g.push(f.a)))
                });
                a = qj(a, b);
                hj(c, a.Pc, a)
            } else if (a.L) {
                Pg(a);
                b = mj(a, "IMPRESSION_IMG");
                var d = mj(a, "IMPRESSION_JS");
                Dh(a.j, a.L, a.I, a.f, b, a.F.a, a.F.j, a.F.g, d)
            }
        },
        tj = function() {
            sj().then(function(a) {
                C(a, rj)
            })
        },
        uj = function(a) {
            Ui[a] && Ui[a].dispose()
        };
    var vj = function(a, b, c, d) {
        this.a = d;
        d = !1;
        this.a && this.a.xa && (d = Bf(this.a.xa).B);
        yf.call(this, a, b, c, !1, d)
    };
    A(vj, yf);
    var wj = function(a, b) {
            this.Xa = a;
            this.xa = b
        },
        yj = function(a) {
            var b = a.split(":");
            if (2 == b.length && (a = b[0], b = xj[b[1]])) return new wj(a, b)
        },
        xj = {
            Complete: "VIDEO_COMPLETE",
            Interaction: "VIDEO_INTERACTION",
            MidPoint: "VIDEO_MIDPOINT",
            Mute: "VIDEO_MUTE",
            Pause: "VIDEO_PAUSE",
            Play: "VIDEO_PLAY",
            Replay: "VIDEO_REPLAY",
            Stop: "VIDEO_STOP",
            Unmute: "VIDEO_UNMUTE",
            ViewTime: "VIDEO_VIEW_TIMER"
        };
    var Aj = function(a, b) {
            var c = new Og,
                d = new kh(a.creativeDto);
            if (!c.ra) {
                c.ra = !0;
                var e = d.a,
                    f = e.o;
                c.j = d.id || c.j;
                c.s = d.uniqueId || c.j || c.s;
                c.B = d.g ? new K(parseInt(d.g.width, 10) || c.B.width, parseInt(d.g.height, 10) || c.B.height) : c.B;
                c.v = e.X || c.v;
                c.qa = d.I || c.qa;
                c.A = e.f ? new K(parseInt(e.f.w, 10) || c.A.width, parseInt(e.f.h, 10) || c.A.height) : c.A;
                c.f = d.o || c.f;
                c.V = e.R || c.V;
                c.R = d.flashVersion || c.R;
                c.$ = d.j || c.$;
                c.W = d.Fa || c.W;
                for (var g in e.g) c.a[g] = e.g[g];
                c.a.sn = e.S;
                c.a.sid = e.U;
                c.a.aid = e.s;
                c.a.cid = e.creativeId;
                c.a.buy = e.A;
                c.a.pid = e.M;
                c.a.adv = e.v;
                c.a.kid = e.L;
                c.a.rid = e.N;
                c.a.geo = e.I;
                c.a.randomNumber = e.randomNumber;
                for (var k in f.f) c.a[k] = f.f[k];
                c.I = f.g || c.I;
                c.U = f.o || c.U;
                c.D = d.D || c.D;
                c.da = "https" == (d.F.match(Tc)[1] || null);
                c.S = {
                    Da: d.C || c.S.Da,
                    Ea: d.H || c.S.Ea
                };
                f = new Fg(c.f);
                F(I(e.a)) || (c.o.CLICK = [new Bg(e.a, f)]);
                if (w(d.f) && 0 < d.f.length)
                    for (c.o.IMPRESSION_IMG = [], g = 0; g < d.f.length; ++g) c.o.IMPRESSION_IMG.push(new Bg(d.f[g], f));
                F(I(d.B)) || (c.o.ARTWORK_IMPRESSION = [new Bg(d.B, f)]);
                c.X = e.H || c.X;
                c.ea = e.T || c.ea;
                c.C = e.W || c.C;
                g = parseInt(e.C,
                    10);
                c.M = isNaN(g) ? c.M : g;
                c.ca = e.j || c.ca;
                c.ja = e.Z || c.ja;
                c.Z = e.D || c.Z;
                c.oa = e.F || c.oa;
                c.L = d.s || c.L;
                c.F = new Hf(f, e.V || e.B)
            }
            c.na = b.customScriptUrl;
            c.Na = b.delayedImpression;
            e = b.standardEventIds;
            for (var l in e) Zg(c, l, e[l]);
            e = b.exitEvents;
            for (l = 0; l < e.length; l++) f = e[l], g = new mh(f.name, f.reportingId, f.url), g.o = f.targetWindow, g.g = f.windowProperties, eh(c, g);
            f = b.timerEvents;
            for (l = 0; l < f.length; l++) e = f[l], gh(c, zj(e, "Timer"));
            f = b.counterEvents;
            for (l = 0; l < f.length; l++) e = f[l], fh(c, zj(e, "Counter"));
            e = c.da;
            f = b.childFiles;
            for (l = 0; l < f.length; l++) jh(c, Kg(f[l], e));
            f = b.videoFiles;
            for (l = 0; l < f.length; l++) jh(c, Kg(f[l], e));
            e = b.videoEntries;
            for (l = 0; l < e.length; l++) c.mb.push(new jj);
            l = d.v;
            e = d.A;
            f = d.a.o.j;
            g = zh(d.flashVersion);
            d = Ah(d.j, d.Fa);
            d = !e || !d || f && l && g ? l && g ? "FLASH" : null : "HTML5";
            b = b.primaryAssets;
            for (e = l = 0; e < b.length; ++e) {
                b[e].floatingDisplayTypeData && !F(I(b[e].floatingDisplayTypeData.alignment)) && l++;
                k = b[e];
                g = a.creativeDto.adServerData.tag;
                f = new vg(k.id, k.artworkType, k.displayType, new K(parseInt(k.width, 10) || 0, parseInt(k.height,
                    10) || 0), (Tg(c) || "") + k.servingPath);
                f.L = k.zIndex;
                f.H = k.customCss;
                f.C = k.location || f.C;
                f.layoutsConfig = k.layoutsConfig;
                f.M = k.layoutsApi;
                var m = k.flashArtworkTypeData;
                m && (f.A = new cg(m.wmode));
                if (m = k.htmlArtworkTypeData) f.B = new kg(m.isTransparent, m.sdkVersion);
                if (m = k.floatingDisplayTypeData) {
                    var r = m.position;
                    r = new ng(r.top + r.topUnit, r.left + r.leftUnit);
                    f.s = ag(m.alignment);
                    f.f = new jg(r, m.startTime, m.endTime, f.s)
                }
                if (m = k.expandingDisplayTypeData) r = m.collapsedRect, f.a = new ig(new dd(r.left, r.top, r.width, r.height),
                    m.isPushdown ? "push_down" : bg(m.expansionMode) || "normal");
                k.imageGalleryTypeData && (f.D = new lg);
                k = k.pageSettings;
                m = new pg;
                k && (m.a = k.hideObjects || !1, m.f = k.updateZIndex || !1);
                f.j = m;
                k = void 0;
                if (null == g) g = {};
                else {
                    m = {};
                    for (k in wg) r = u(k, g), null === r || (m[wg[k]] = r + "");
                    g = m
                }
                zg(f, g);
                xg(f);
                f.o == d && Vg(c, f)
            }
            return c
        },
        zj = function(a, b) {
            if (a.videoData) {
                var c = a.videoData;
                c = new wj(c.associatedVideoEntryReportingIdentifier, c.associatedStandardVideoEvent)
            }
            return new vj(a.name, a.reportingId, b, c)
        };
    var Bj = function(a, b) {
            var c = null;
            "CREATIVE_PARAMETER_LAYOUT_CONFIG" in a && (c = a.CREATIVE_PARAMETER_LAYOUT_CONFIG);
            for (var d = [], e = a.cid || "", f = 0; f < b.length; f++) {
                var g = b[f],
                    k = a,
                    l = c,
                    m = new vg(e + "_" + f, g.type, g.renderAs, new K(parseInt(g.width, 10) || 0, parseInt(g.height, 10) || 0), g.url);
                m.content = g.content;
                m.L = parseInt(g.zIndex, 10);
                m.H = g.customCss;
                m.C = g.location || m.C;
                m.layoutsConfig = l || m.layoutsConfig;
                if (l = g.flashProperties) m.A = new cg(eg(l.wmode) || "transparent");
                if (l = g.htmlProperties) m.B = new kg(l.transparent, l.studioSdkVersion);
                if (l = g.floatingDisplayProperties) {
                    var r = new ng(l.top, l.left);
                    m.s = ag(l.label);
                    m.f = new jg(r, parseInt(l.startTime, 10), parseInt(l.duration, 10), m.s)
                }
                if (r = g.expandingDisplayProperties) l = new dd(parseInt(r.collapsedRectLeft, 10), parseInt(r.collapsedRectTop, 10), parseInt(r.collapsedRectWidth, 10), parseInt(r.collapsedRectHeight, 10)), r = bg(r.expansionMode) || "normal", Ag(l.left) && Ag(l.top) && Ag(l.width) && Ag(l.height) && (m.a = new ig(l, r));
                g.imageGalleryProperties && (m.D = new lg);
                if (l = g.preRenderedProperties) m.I = new qg(l);
                m.j = new pg;
                m.j.a = g.hideFlashObjects;
                m.j.f = !0;
                null != k && zg(m, k);
                xg(m);
                d.push(m)
            }
            return d
        },
        Ej = function(a) {
            var b = new Og;
            Rg(b, a);
            b.Na = !F(I(a.impressionUrl));
            b.na = a.creativeParameters.CREATIVE_PARAMETER_CUSTOM_SCRIPT_URL;
            if (a.creativeParameters.CREATIVE_PARAMETER_EXPERIMENTS) {
                var c = Cj(a.creativeParameters.CREATIVE_PARAMETER_EXPERIMENTS);
                b.pa = c
            }
            b.Aa = Ng(a.creativeParameters.CREATIVE_PARAMETER_IS_B2R_ELIGIBLE);
            for (c = 0; c < a.standardEvents.length; c++) {
                var d = a.standardEvents[c];
                Zg(b, d.name, d.reportingId)
            }
            for (c =
                0; c < a.exitEvents.length; c++)
                if (d = a.exitEvents[c], !d.backUpExit) {
                    var e = new mh(d.name, d.reportingId, d.destinationUrl);
                    e.o = d.targetWindow;
                    e.g = d.windowProperties;
                    eh(b, e)
                }
            /dfa7banner/.test(a.renderingLibraryData.renderingLibrary) && !F(a.clickUrl) && Qa(b.N, function(l) {
                l.url = Nd(a.clickUrl, l.url, null)
            });
            for (c = 0; c < a.timerEvents.length; c++) d = a.timerEvents[c], e = yj(d.name), d = new vj(d.name, d.reportingId, "Timer", e), gh(b, d);
            for (c = 0; c < a.counterEvents.length; c++) d = a.counterEvents[c], e = yj(d.name), d = new vj(d.name, d.reportingId,
                "Counter", e), fh(b, d);
            d = a.primaryFiles;
            e = {};
            for (c = 0; c < d.length; c++) e[d[c].type] = !0;
            d = Dj({
                hb: !!e.FLASH,
                flashVersion: b.R,
                qc: !!e.HTML5,
                html5Features: b.$,
                Fa: b.W
            }, "true" == a.creativeParameters.preferFlash);
            e = !1;
            var f = Bj(a.creativeParameters, a.primaryFiles);
            for (c = 0; c < f.length; c++) {
                var g = f[c];
                d == g.o && Vg(b, g);
                null != g.D && (e = !0)
            }
            d = b.da;
            c = e ? Tg(b) : null;
            e = (e = a.creativeParameters.CREATIVE_PARAMETER_ASSETS_DATA) ? Cj(e) : {};
            for (var k in e) jh(b, new Ig(k, e[k], d, c));
            k = (c = a.creativeParameters.CREATIVE_PARAMETER_VIDEO_ASSETS_DATA) ?
                Cj(c) : [];
            for (c = 0; c < k.length; ++c) e = k[c], f = new Ig(e.name, e.progressiveUrl, d), Jg(f, e.streamingUrl), jh(b, f);
            k = (c = a.creativeParameters.CREATIVE_PARAMETER_VIDEO_DATA) ? Cj(c) : [];
            for (c = 0; c < k.length; ++c) b.mb.push(new jj);
            return b
        },
        Cj = function(a) {
            return JSON.parse(a.replace(/\\"/g, '"'))
        },
        Dj = function(a, b) {
            var c = zh(a.flashVersion),
                d = Ah(a.html5Features, a.Fa);
            return !a.qc || !d || b && a.hb && c ? a.hb && c ? "FLASH" : null : "HTML5"
        };
    var Fj = function() {},
        sj = function() {
            var a = Gj();
            return new P(function(b) {
                var c = [],
                    d = u("studioV2.creatives") || {};
                for (l in d) {
                    var e = d[l],
                        f = e.creativeDefinition;
                    if (f)
                        for (e = e.adResponses; 0 < e.length;) {
                            var g = e.shift(),
                                k = g.creativeDto;
                            if (k.rendererName == Sh && "200_260" == k.templateVersion) c.push(Aj(g, f));
                            else {
                                e.unshift(g);
                                break
                            }
                        }
                }
                d = [];
                var l = u("window.dclkStudioV3.creatives") || [];
                for (f = l.length - 1; 0 <= f; --f) {
                    e = l[f];
                    e.previewMode && (g = e, k = u("window.dclkStudioV3.creativeParametersOverrides"), g && k && (k.CREATIVE_PARAMETER_LAYOUT_CONFIG &&
                        (g.creativeParameters.CREATIVE_PARAMETER_LAYOUT_CONFIG = k.CREATIVE_PARAMETER_LAYOUT_CONFIG), k.PREVIEW_FRAME_NAME && (g.creativeParameters.PREVIEW_FRAME_NAME = k.PREVIEW_FRAME_NAME), k.PREVIEW_FRAME_DEPTH && (g.creativeParameters.PREVIEW_FRAME_DEPTH = k.PREVIEW_FRAME_DEPTH)));
                    e = Ej(e);
                    a: {
                        g = e;k = g.g;
                        for (var m = 0; m < k.length; m++) {
                            var r = k[m];
                            if (yg(r) && !kj.a(r)) {
                                g = !1;
                                break a
                            }
                        }
                        g = "200_260" == g.kb
                    }
                    g && (Array.prototype.splice.call(l, f, 1), d.push(e))
                }
                b(c.concat(d))
            }, a)
        };
    var Hj = function() {
            this.a = null
        },
        oj = function(a, b) {
            a.a || (a.a = new Fg(b));
            return a.a
        };
    var Ij = function() {
            this.g = new Hj;
            this.f = null
        },
        Jj = function(a, b) {
            return w(a) ? 0 <= Ga(a, b) : a == b
        };
    Ij.prototype.a = function() {
        return !1
    };
    var qj = function(a, b) {
            var c = kj,
                d = oj(c.g, a.f),
                e = a.s;
            Ui[e] || (Ui[e] = new Z(a, c, oh.getInstance(), d, b));
            return Ui[e]
        },
        Gj = function() {
            var a = kj;
            a.f || (a.f = new Fj);
            return a.f
        };
    var Kj = function(a, b, c) {
        xi.call(this, a, b, c);
        this.f = b;
        this.S = this.g = null;
        this.da = this.N = !1;
        this.R = -1;
        this.A = null;
        this.C = oh.getInstance()
    };
    n(Kj, xi);
    h = Kj.prototype;
    h.ha = function() {
        if (!F(I(this.f.D))) {
            var a = this.O(),
                b = new Image;
            b.width = Fc(this.f.B).width;
            b.height = Fc(this.f.B).height;
            b.src = this.f.D;
            a.appendChild(b);
            this.S = b
        }
        xi.prototype.ha.call(this)
    };
    h.bb = function() {
        null != this.S && (this.O().removeChild(this.S), this.S = null);
        null != this.g || Lj(this);
        zi(this, "logEvent", ["Start", "DISPLAY_TIMER", null, "false", "false"]);
        N(ni(this), this.g, "mouseover", this.uc);
        N(ni(this), this.g, "mouseout", this.tc);
        var a = ni(this);
        this.A && (we(a, this.A, "tick", this.Za), this.A.dispose());
        this.A = new kf(80);
        N(a, this.A, "tick", this.Za);
        this.A.start()
    };
    h.va = function(a, b) {
        xi.prototype.va.call(this, a, b);
        kd(this.g, "100%", "100%")
    };
    h.Za = function() {
        0 < this.R && !this.N && 1E3 < y() - this.R && (this.N = !0, zi(this, "setTimerAdjustment", ["INTERACTION_TIMER", -1E3, 0]), zi(this, "logEvent", ["Start", "INTERACTION_TIMER", null, "false", "false"]), this.da || (zi(this, "logEvent", ["Count", "EVENT_USER_INTERACTION", null, "false", "false"]), zi(this, "flushCounters", []), this.da = !0))
    };
    h.uc = function() {
        this.R = y()
    };
    h.tc = function() {
        this.N && (zi(this, "logEvent", ["Stop", "INTERACTION_TIMER", null, "false", "false"]), this.N = !1);
        this.R = -1
    };
    h.Ua = function(a) {
        if (null != this.C.a) {
            var b;
            if (b = Sg(this.s, "disable_h5_mraid_imp_ping", !0)) a: {
                b = this.s;
                for (var c = 0; c < b.g.length; c++)
                    if (!b.g[c].F) {
                        b = !1;
                        break a
                    }
                b = !0
            }
            b ? a.resolve() : this.C.isVisible() ? a.resolve() : (b = ni(this), ve(b, this.C, "show", a.resolve, void 0))
        } else xi.prototype.Ua.call(this, a)
    };
    var aj = function(a, b, c) {
        Kj.call(this, a, b, c);
        this.na = this.M() + ".if"
    };
    n(aj, Kj);
    aj.prototype.ha = function() {
        Kj.prototype.ha.call(this);
        N(ni(this), window, ["resize", "orientationchange"], this.ra);
        null != this.C.a && N(ni(this), window, "message", this.pa)
    };
    aj.prototype.L = function() {
        Kj.prototype.L.call(this);
        F(I(this.f.D)) && Lj(this)
    };
    var Lj = function(a) {
        var b = a.O(),
            c = Nc(a.V.a, "iframe");
        b.appendChild(c);
        a.wa(b);
        N(ni(a), c, "load", a.oa)
    };
    aj.prototype.wa = function(a) {
        Kj.prototype.wa.call(this, a);
        this.a = a;
        var b = Fc(this.f.A),
            c = this.T.width || b.width;
        b = this.T.height || b.height;
        kd(a, c, b);
        a.style.position = "relative";
        a = a.firstChild;
        this.f.Aa && !this.f.f && "function" === typeof window.stcc && a && window.stcc(a);
        this.g = a;
        var d = this.na,
            e = this.T;
        kd(a, c, b);
        c = {
            id: d,
            src: e.N,
            width: c,
            height: b,
            frameborder: "0",
            scrolling: "no"
        };
        e.B && e.B.f && (c.allowtransparency = "true");
        Lc(a, c);
        a.setAttribute("allowfullscreen", "true")
    };
    aj.prototype.ra = function() {
        var a = this.T,
            b = this.g,
            c = this.O();
        Dd(8) && (a = new K(window.innerWidth || a.width, window.innerHeight || a.height), b.width = a.width.toString(), b.height = a.height.toString(), kd(b, a), kd(c, a))
    };
    aj.prototype.oa = function() {
        this.g.contentWindow.postMessage(Mj(this), "*")
    };
    var Mj = function(a) {
        var b = a.f.N,
            c = {};
        for (g in b) c[g] = b[g];
        for (var d in c) {
            var e = c[d];
            b = c[d];
            var f = void 0;
            var g = a;
            var k = e.name,
                l = e.f,
                m = e = e.url;
            g.f.f ? window.DARTDebugEventHandler && (l = window.DARTDebugEventHandler, f = l.initPreviewSession(window.location.href), g = l.generateEventData("handleEventActivity", {
                    eventName: k,
                    eventType: "exit",
                    counterValue: 1,
                    durationValue: 0,
                    isCustomEvent: !0,
                    creativeId: g.f.j
                }, !0, Math.floor(1E7 * Math.random())), m = f + "&eventData=" + encodeURIComponent(g) + "&_dc_redir=" + encodeURIComponent(e)) :
                (k = Ug(g.s, "CLICK"), 0 < k.length && (f = k[0].ga()), m = Nd(g.s.C, m, l, f, g.s.M));
            b.url = m
        }
        d = a.f;
        g = null != a.C.a;
        a = {};
        b = [];
        a.clickTags = [];
        for (var r in c) k = c[r], e = k.url, a.clickTags.push({
            name: k.name,
            url: e
        }), b.push(encodeURIComponent(k.name) + "=" + encodeURIComponent(e));
        a.isInitClickTag = !0;
        g && (a.relegateNavigation = "parent");
        d.qa && (a.hasInitSwiffyData = !0, c = {}, c.runtimeUrl = d.ja, c.flashVars = b.join("&"), a.swiffyInfo = c);
        return JSON.stringify(a)
    };
    aj.prototype.pa = function(a) {
        var b = this.C;
        try {
            var c = JSON.parse(a.f.data);
            c.isPostClickTag && c.clickTag && b.a.open.apply(b.a, [c.clickTag])
        } catch (d) {}
    };
    var Nj = function() {
        Ij.call(this)
    };
    A(Nj, Ij);
    Nj.prototype.a = function(a) {
        var b = Jj("BANNER", a.g);
        a = q("HTML5") ? Jj("HTML5", a.o) : !0;
        return b && a
    };
    var Oj = new Nj,
        Pj = Oj.g;
    kj = Oj;
    lj = Pj;
    for (var Qj = document.getElementsByTagName("noscript"), Rj = 0; Rj < Qj.length; Rj++) Qj[Rj].style.display = "none";
    var Sj = u("studioV2.loadedLibraries.200_260.express_html_inpage");
    if (!Sj || !Sj.bootstrap) {
        z("studioV2.loadedLibraries.200_260.express_html_inpage.bootstrap", tj);
        z("studioV2.loadedLibraries.200_260.express_html_inpage.unload", uj);
        var Tj;
        a: {
            var Uj = u("dclkStudioV3.renderingLibraries");
            if (Uj)
                for (var Vj = 0; Vj < Uj.length; ++Vj) {
                    var Wj = Uj[Vj];
                    if ("200_260" == Wj.version && -1 != Wj.url.indexOf("/express_html_inpage")) {
                        Tj = Wj;
                        break a
                    }
                }
            Tj = null
        }
        null !== Tj && (Tj.bootstrapFunction = tj, Tj.unload = uj);
        Sh = "express_html_inpage";
        var Xj = "undefined_type" === Sh ? null : Sh + "_rendering_lib_200_260";
        if (null !=
            Xj && !u("dclkStudioV3.rlErrorSampled") && !u("studioV2.rlErrorSampled")) {
            var Yj = new ej(Xj);
            if (Yj.f.j) {
                Yj.a = x(Yj.j, Yj);
                Yj.g = p;
                p.addEventListener("error", Yj.a);
                var Zj = u("dclkStudioV3");
                Zj ? Zj.Ic = Yj : u("studioV2").Ic = Yj
            }
        }
        var ak = u("studioV2.defer");
        ak && ua(ak) ? ak(tj) : tj()
    };
}).call(this);