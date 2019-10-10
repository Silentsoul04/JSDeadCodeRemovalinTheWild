(function() {
    var m, aa = function(a) {
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
        ca = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        p = function(a) {
            if (!(a instanceof Array)) {
                a = ca(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.a;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea,
        ka = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c]
        },
        la = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        na = function() {
            na =
                function() {};
            ma.Symbol || (ma.Symbol = oa)
        },
        pa = function(a, b) {
            this.uf = a;
            la(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    pa.prototype.toString = function() {
        return this.uf
    };
    var oa = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new pa("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        ra = function() {
            na();
            var a = ma.Symbol.iterator;
            a || (a = ma.Symbol.iterator = ma.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && la(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return qa(aa(this))
                }
            });
            ra = function() {}
        },
        qa = function(a) {
            ra();
            a = {
                next: a
            };
            a[ma.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        sa = function() {
            this.Ec = !1;
            this.ra = null;
            this.$b = void 0;
            this.xa = 1;
            this.sc = this.zb = 0;
            this.sa = null
        };
    m = sa.prototype;
    m.bd = function() {
        if (this.Ec) throw new TypeError("Generator is already running");
        this.Ec = !0
    };
    m.cd = function() {
        this.Ec = !1
    };
    m.Zh = function() {
        this.xa = this.zb || this.sc
    };
    m.lb = function(a) {
        this.$b = a
    };
    m.rb = function(a) {
        this.sa = {
            exception: a,
            Th: !0
        };
        this.Zh()
    };
    m["return"] = function(a) {
        this.sa = {
            "return": a
        };
        this.xa = this.sc
    };
    m.tf = function(a, b) {
        this.xa = b;
        return {
            value: a
        }
    };
    m.dj = function(a, b) {
        this.zb = a;
        void 0 != b && (this.sc = b)
    };
    m.$h = function(a, b) {
        this.xa = a;
        this.zb = b || 0
    };
    m.wg = function(a) {
        this.zb = a || 0;
        a = this.sa.exception;
        this.sa = null;
        return a
    };
    var ta = function(a) {
        this.m = new sa;
        this.xi = a
    };
    m = ta.prototype;
    m.lb = function(a) {
        this.m.bd();
        if (this.m.ra) return this.kd(this.m.ra.next, a, this.m.lb);
        this.m.lb(a);
        return this.kb()
    };
    m.Xi = function(a) {
        this.m.bd();
        var b = this.m.ra;
        if (b) return b = "return" in b ? b["return"] : function(c) {
            return {
                value: c,
                done: !0
            }
        }, this.kd(b, a, this.m["return"]);
        this.m["return"](a);
        return this.kb()
    };
    m.rb = function(a) {
        this.m.bd();
        if (this.m.ra) return this.kd(this.m.ra["throw"], a, this.m.lb);
        this.m.rb(a);
        return this.kb()
    };
    m.kd = function(a, b, c) {
        try {
            var d = a.call(this.m.ra, b);
            if (!(d instanceof Object)) throw new TypeError("Iterator result " + d + " is not an object");
            if (!d.done) return this.m.cd(), d;
            var e = d.value
        } catch (f) {
            return this.m.ra = null, this.m.rb(f), this.kb()
        }
        this.m.ra = null;
        c.call(this.m, e);
        return this.kb()
    };
    m.kb = function() {
        for (; this.m.xa;) try {
            var a = this.xi(this.m);
            if (a) return this.m.cd(), {
                value: a.value,
                done: !1
            }
        } catch (b) {
            this.m.$b = void 0, this.m.rb(b)
        }
        this.m.cd();
        if (this.m.sa) {
            a = this.m.sa;
            this.m.sa = null;
            if (a.Th) throw a.exception;
            return {
                value: a["return"],
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    var ua = function(a) {
            this.next = function(b) {
                return a.lb(b)
            };
            this["throw"] = function(b) {
                return a.rb(b)
            };
            this["return"] = function(b) {
                return a.Xi(b)
            };
            ra();
            this[Symbol.iterator] = function() {
                return this
            }
        },
        va = function(a, b) {
            b = new ua(new ta(b));
            ja && ja(b, a.prototype);
            return b
        },
        wa = function(a, b) {
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
    wa("Promise", function(a) {
        function b() {
            this.ha = null
        }

        function c(l) {
            return l instanceof h ? l : new h(function(n) {
                n(l)
            })
        }
        if (a) return a;
        b.prototype.wd = function(l) {
            if (null == this.ha) {
                this.ha = [];
                var n = this;
                this.xd(function() {
                    n.Ag()
                })
            }
            this.ha.push(l)
        };
        var d = ma.setTimeout;
        b.prototype.xd = function(l) {
            d(l, 0)
        };
        b.prototype.Ag = function() {
            for (; this.ha && this.ha.length;) {
                var l = this.ha;
                this.ha = [];
                for (var n = 0; n < l.length; ++n) {
                    var q = l[n];
                    l[n] = null;
                    try {
                        q()
                    } catch (u) {
                        this.Wf(u)
                    }
                }
            }
            this.ha = null
        };
        b.prototype.Wf = function(l) {
            this.xd(function() {
                throw l;
            })
        };
        var e = 0,
            f = 1,
            g = 2,
            h = function(l) {
                this.v = e;
                this.Xa = void 0;
                this.Qa = [];
                var n = this.lc();
                try {
                    l(n.resolve, n.reject)
                } catch (q) {
                    n.reject(q)
                }
            };
        h.prototype.lc = function() {
            function l(u) {
                return function(t) {
                    q || (q = !0, u.call(n, t))
                }
            }
            var n = this,
                q = !1;
            return {
                resolve: l(this.Vi),
                reject: l(this.Vc)
            }
        };
        h.prototype.Vi = function(l) {
            if (l === this) this.Vc(new TypeError("A Promise cannot resolve to itself"));
            else if (l instanceof h) this.kj(l);
            else {
                a: switch (typeof l) {
                    case "object":
                        var n = null != l;
                        break a;
                    case "function":
                        n = !0;
                        break a;
                    default:
                        n = !1
                }
                n ? this.Ui(l) : this.Sd(l)
            }
        };
        h.prototype.Ui = function(l) {
            var n = void 0;
            try {
                n = l.then
            } catch (q) {
                this.Vc(q);
                return
            }
            "function" == typeof n ? this.lj(n, l) : this.Sd(l)
        };
        h.prototype.Vc = function(l) {
            this.$e(g, l)
        };
        h.prototype.Sd = function(l) {
            this.$e(f, l)
        };
        h.prototype.$e = function(l, n) {
            if (this.v != e) throw Error("Cannot settle(" + l + ", " + n + "): Promise already settled in state" + this.v);
            this.v = l;
            this.Xa = n;
            this.Cg()
        };
        h.prototype.Cg = function() {
            if (null != this.Qa) {
                for (var l = 0; l < this.Qa.length; ++l) k.wd(this.Qa[l]);
                this.Qa =
                    null
            }
        };
        var k = new b;
        h.prototype.kj = function(l) {
            var n = this.lc();
            l.yb(n.resolve, n.reject)
        };
        h.prototype.lj = function(l, n) {
            var q = this.lc();
            try {
                l.call(n, q.resolve, q.reject)
            } catch (u) {
                q.reject(u)
            }
        };
        h.prototype.then = function(l, n) {
            function q(y, A) {
                return "function" == typeof y ? function(B) {
                    try {
                        u(y(B))
                    } catch (Z) {
                        t(Z)
                    }
                } : A
            }
            var u, t, w = new h(function(y, A) {
                u = y;
                t = A
            });
            this.yb(q(l, u), q(n, t));
            return w
        };
        h.prototype["catch"] = function(l) {
            return this.then(void 0, l)
        };
        h.prototype.yb = function(l, n) {
            function q() {
                switch (u.v) {
                    case f:
                        l(u.Xa);
                        break;
                    case g:
                        n(u.Xa);
                        break;
                    default:
                        throw Error("Unexpected state: " + u.v);
                }
            }
            var u = this;
            null == this.Qa ? k.wd(q) : this.Qa.push(q)
        };
        h.resolve = c;
        h.reject = function(l) {
            return new h(function(n, q) {
                q(l)
            })
        };
        h.race = function(l) {
            return new h(function(n, q) {
                for (var u = ca(l), t = u.next(); !t.done; t = u.next()) c(t.value).yb(n, q)
            })
        };
        h.all = function(l) {
            var n = ca(l),
                q = n.next();
            return q.done ? c([]) : new h(function(u, t) {
                function w(B) {
                    return function(Z) {
                        y[B] = Z;
                        A--;
                        0 == A && u(y)
                    }
                }
                var y = [],
                    A = 0;
                do y.push(void 0), A++, c(q.value).yb(w(y.length -
                    1), t), q = n.next(); while (!q.done)
            })
        };
        return h
    }, "es6", "es3");
    var xa = function(a, b) {
        ra();
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    };
    wa("Array.prototype.keys", function(a) {
        return a ? a : a = function() {
            return xa(this, function(b) {
                return b
            })
        }
    }, "es6", "es3");
    wa("Array.prototype.entries", function(a) {
        return a ? a : a = function() {
            return xa(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6", "es3");
    var v = this || self,
        ya = function(a) {
            return "string" == typeof a
        },
        za = function(a) {
            return "number" == typeof a
        },
        Ca = function(a, b, c) {
            a = a.split(".");
            c = c || v;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        },
        Fa = function(a) {
            if (a && a != v) return Da(a.document);
            null === Ea && (Ea = Da(v.document));
            return Ea
        },
        Ga = /^[\w+/_-]+[=]{0,2}$/,
        Ea = null,
        Da = function(a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) &&
                (a = a.nonce || a.getAttribute("nonce")) && Ga.test(a) ? a : ""
        },
        Ha = function() {},
        Ka = function(a) {
            a.Cc = void 0;
            a.Xd = function() {
                return a.Cc ? a.Cc : a.Cc = new a
            }
        },
        La = function(a) {
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
        Ma = function(a) {
            return null != a
        },
        x = function(a) {
            return "array" == La(a)
        },
        Na = function(a) {
            var b = La(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Oa = function(a) {
            return "function" == La(a)
        },
        Pa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" ==
                b
        },
        Qa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ra = 0,
        Sa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ta = function(a, b, c) {
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
        },
        Ua = function(a, b, c) {
            Ua = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Sa : Ta;
            return Ua.apply(null,
                arguments)
        },
        $a = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        z = Date.now || function() {
            return +new Date
        },
        ab = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var bb = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, bb);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    ab(bb, Error);
    bb.prototype.name = "CustomError";
    var cb;
    var db = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) {
            var f = e < b.length ? b[e] : "%s";
            c += a[e] + f
        }
        b = c + a[d];
        bb.call(this, b)
    };
    ab(db, bb);
    db.prototype.name = "AssertionError";
    var eb = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, c);
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        fb = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        gb = Array.prototype.filter ?
        function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, h = 0; h < d; h++)
                if (h in g) {
                    var k = g[h];
                    b.call(c, k, h, a) && (e[f++] = k)
                }
            return e
        },
        hb = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        ib = Array.prototype.reduce ? function(a, b, c, d) {
            d && (b = Ua(b, d));
            return Array.prototype.reduce.call(a,
                b, c)
        } : function(a, b, c, d) {
            var e = c;
            fb(a, function(f, g) {
                e = b.call(d, e, f, g, a)
            });
            return e
        },
        jb = Array.prototype.some ? function(a, b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        kb = function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        lb = function(a, b) {
            return 0 <= eb(a, b)
        },
        mb = function(a, b) {
            b = eb(a, b);
            var c;
            (c =
                0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        nb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        ob = function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (Na(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var g = 0; g < f; g++) a[e + g] = d[g]
                } else a.push(d)
            }
        },
        pb = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        qb = function(a, b, c) {
            b = b || a;
            var d = function(k) {
                return Pa(k) ? "o" + (k[Qa] ||
                    (k[Qa] = ++Ra)) : (typeof k).charAt(0) + k
            };
            c = c || d;
            d = {};
            for (var e = 0, f = 0; f < a.length;) {
                var g = a[f++],
                    h = c(g);
                Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, b[e++] = g)
            }
            b.length = e
        },
        sb = function(a, b) {
            a.sort(b || rb)
        },
        rb = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        tb = function(a, b) {
            for (var c = [], d = 0; d < b; d++) c[d] = a;
            return c
        },
        ub = function(a) {
            for (var b = [], c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                if (x(d))
                    for (var e = 0; e < d.length; e += 8192) {
                        var f = pb(d, e, e + 8192);
                        f = ub.apply(null, f);
                        for (var g = 0; g < f.length; g++) b.push(f[g])
                    } else b.push(d)
            }
            return b
        };
    var vb = function(a) {
            return a
        },
        wb = function(a) {
            var b = arguments,
                c = b.length;
            return function() {
                for (var d = this, e = 0; e < c; e++)
                    if (!b[e].apply(d, arguments)) return !1;
                return !0
            }
        },
        xb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        yb = function(a, b, c) {
            var d = 0;
            return function(e) {
                v.clearTimeout(d);
                var f = arguments;
                d = v.setTimeout(function() {
                    a.apply(c, f)
                }, b)
            }
        },
        zb = function(a, b, c) {
            var d = 0,
                e = !1,
                f = [],
                g = function() {
                    d = 0;
                    e && (e = !1, h())
                },
                h = function() {
                    d = v.setTimeout(g, b);
                    a.apply(c, f)
                };
            return function(k) {
                f = arguments;
                d ? e = !0 : h()
            }
        };
    var Ab = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Bb = function(a, b, c) {
            var d = {},
                e;
            for (e in a) b.call(c, a[e], e, a) && (d[e] = a[e]);
            return d
        },
        Gb = function(a, b) {
            return null !== a && b in a
        },
        Hb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Jb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ib.length; f++) c = Ib[f], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        };
    var Kb = {
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
    var Nb = function(a, b) {
        this.df = a === Lb && b || "";
        this.Df = Mb
    };
    Nb.prototype.V = !0;
    Nb.prototype.L = function() {
        return this.df
    };
    var Ob = function(a) {
            return a instanceof Nb && a.constructor === Nb && a.Df === Mb ? a.df : "type_error:Const"
        },
        Mb = {},
        Lb = {},
        Pb = new Nb(Lb, "");
    var Qb = function() {
        this.Ce = ""
    };
    Qb.prototype.V = !0;
    Qb.prototype.L = function() {
        return this.Ce.toString()
    };
    Qb.prototype.Y = function(a) {
        this.Ce = a;
        return this
    };
    (new Qb).Y("");
    var Tb = function(a, b, c) {
        this.Ee = a === Rb && b || "";
        this.ab = a === Rb && c || null;
        this.Ef = Sb
    };
    m = Tb.prototype;
    m.V = !0;
    m.L = function() {
        return this.Ee.toString()
    };
    m.zc = !0;
    m.Ka = function() {
        return 1
    };
    m.fg = function(a, b) {
        var c = Ub(this).toString(),
            d = Vb.exec(c);
        c = d[1];
        var e = d[2] || "";
        d = d[3] || "";
        return Wb(c + Xb("?", e, a) + Xb("#", d, b))
    };
    var Ub = function(a) {
            return a instanceof Tb && a.constructor === Tb && a.Ef === Sb ? a.Ee : "type_error:TrustedResourceUrl"
        },
        $b = function(a, b) {
            var c = Ob(a);
            if (!Yb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Zb, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Nb ? Ob(d) : encodeURIComponent(String(d))
            });
            return Wb(a)
        },
        Zb = /%{(\w+)}/g,
        Yb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        Vb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Sb = {},
        Wb = function(a) {
            return new Tb(Rb, a, null)
        },
        Xb = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c) {
                var e = c[d];
                e = x(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
            return b
        },
        Rb = {};
    var ac = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        ic = function(a, b) {
            if (b) a = a.replace(bc, "&amp;").replace(cc, "&lt;").replace(dc, "&gt;").replace(ec, "&quot;").replace(fc, "&#39;").replace(gc, "&#0;");
            else {
                if (!hc.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(bc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(cc, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(dc, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ec, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(fc,
                    "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(gc, "&#0;"))
            }
            return a
        },
        bc = /&/g,
        cc = /</g,
        dc = />/g,
        ec = /"/g,
        fc = /'/g,
        gc = /\x00/g,
        hc = /[\x00&<>"']/,
        pc = function(a, b) {
            var c = 0;
            a = ac(String(a)).split(".");
            b = ac(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = 0 == f[1].length ? 0 : parseInt(f[1], 10);
                    var h = 0 == g[1].length ? 0 : parseInt(g[1], 10);
                    c = oc(c, h) || oc(0 == f[2].length, 0 == g[2].length) || oc(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        oc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var C = function(a, b) {
        this.De = a === qc && b || "";
        this.Cf = rc
    };
    C.prototype.V = !0;
    C.prototype.L = function() {
        return this.De.toString()
    };
    C.prototype.zc = !0;
    C.prototype.Ka = function() {
        return 1
    };
    var sc = function(a) {
            return a instanceof C && a.constructor === C && a.Cf === rc ? a.De : "type_error:SafeUrl"
        },
        tc = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i,
        uc = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i,
        vc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        wc = function(a) {
            if (a instanceof C) return a;
            a = "object" == typeof a && a.V ? a.L() : String(a);
            vc.test(a) ||
                (a = "about:invalid#zClosurez");
            return new C(qc, a)
        },
        xc = function(a, b) {
            if (a instanceof C) return a;
            a = "object" == typeof a && a.V ? a.L() : String(a);
            if (b && /^data:/i.test(a)) {
                b = a.replace(/(%0A|%0D)/g, "");
                var c = b.match(uc);
                c = c && tc.test(c[1]);
                b = new C(qc, c ? b : "about:invalid#zClosurez");
                if (b.L() == a) return b
            }
            vc.test(a) || (a = "about:invalid#zClosurez");
            return new C(qc, a)
        },
        rc = {},
        qc = {};
    var zc = function() {
        this.Qc = "";
        this.Bf = yc
    };
    zc.prototype.V = !0;
    var yc = {};
    zc.prototype.L = function() {
        return this.Qc
    };
    var Ac = function(a) {
        return a instanceof zc && a.constructor === zc && a.Bf === yc ? a.Qc : "type_error:SafeStyle"
    };
    zc.prototype.Y = function(a) {
        this.Qc = a;
        return this
    };
    var Bc = (new zc).Y(""),
        Dc = function(a) {
            var b = "",
                c;
            for (c in a) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
                var d = a[c];
                null != d && (d = x(d) ? hb(d, Cc).join(" ") : Cc(d), b += c + ":" + d + ";")
            }
            return b ? (new zc).Y(b) : Bc
        },
        Cc = function(a) {
            if (a instanceof C) return a = sc(a).toString(), 'url("' + a.replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            a = a instanceof Nb ? Ob(a) : Ec(String(a));
            if (/[{;}]/.test(a)) throw new db("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        Ec = function(a) {
            var b =
                a.replace(Fc, "$1").replace(Fc, "$1").replace(Gc, "url");
            if (Hc.test(b)) {
                if (Ic.test(a)) return "zClosurez";
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e = a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                b = b && c;
                if (!b || !Jc(a)) return "zClosurez"
            } else return "zClosurez";
            return Kc(a)
        },
        Jc = function(a) {
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
        Hc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        Gc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        Lc = "calc cubic-bezier fit-content hsl hsla matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" "),
        Fc = new RegExp("\\b(" + Lc.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g"),
        Ic = /\/\*/,
        Kc = function(a) {
            return a.replace(Gc, function(b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) {
                    f = h;
                    return k
                });
                b = wc(d).L();
                return c + f + b + f + e
            })
        };
    var Nc = function() {
        this.Pc = "";
        this.Af = Mc
    };
    Nc.prototype.V = !0;
    var Mc = {},
        D = function(a, b) {
            if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " + a);
            var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
            a: {
                for (var d = {
                        "(": ")",
                        "[": "]"
                    }, e = [], f = 0; f < c.length; f++) {
                    var g = c[f];
                    if (d[g]) e.push(d[g]);
                    else if (Hb(d, g) && e.pop() != g) {
                        c = !1;
                        break a
                    }
                }
                c = 0 == e.length
            }
            if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
            b instanceof zc || (b = Dc(b));
            a = a + "{" + Ac(b).replace(/</g, "\\3C ") + "}";
            return (new Nc).Y(a)
        },
        Pc = function(a) {
            var b = "",
                c = function(d) {
                    x(d) ? fb(d, c) : b += Oc(d)
                };
            fb(arguments, c);
            return (new Nc).Y(b)
        };
    Nc.prototype.L = function() {
        return this.Pc
    };
    var Oc = function(a) {
        return a instanceof Nc && a.constructor === Nc && a.Af === Mc ? a.Pc : "type_error:SafeStyleSheet"
    };
    Nc.prototype.Y = function(a) {
        this.Pc = a;
        return this
    };
    (new Nc).Y("");
    var Qc;
    a: {
        var Rc = v.navigator;
        if (Rc) {
            var Sc = Rc.userAgent;
            if (Sc) {
                Qc = Sc;
                break a
            }
        }
        Qc = ""
    }
    var F = function(a) {
            var b = Qc;
            return -1 != b.indexOf(a)
        },
        Tc = function(a) {
            var b = Qc;
            return -1 != b.toLowerCase().indexOf(a.toLowerCase())
        },
        Uc = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var kd = function() {
            return F("Opera")
        },
        ld = function() {
            return F("Trident") || F("MSIE")
        },
        nd = function() {
            return F("Safari") && !(md() || F("Coast") || kd() || F("Edge") || F("Edg/") || F("OPR") || F("Firefox") || F("FxiOS") || F("Silk") || F("Android"))
        },
        md = function() {
            return (F("Chrome") || F("CriOS")) && !F("Edge")
        },
        pd = function() {
            function a(e) {
                var f = kb(e, d, void 0);
                e = 0 > f ? null : "string" === typeof e ? e.charAt(f) : e[f];
                return c[e] || ""
            }
            var b = Qc;
            if (ld()) return od(b);
            b = Uc(b);
            var c = {};
            fb(b, function(e) {
                var f = e[0];
                e = e[1];
                c[f] = e
            });
            var d = $a(Gb,
                c);
            return kd() ? a(["Version", "Opera"]) : F("Edge") ? a(["Edge"]) : F("Edg/") ? a(["Edg"]) : md() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
        },
        qd = function(a) {
            return 0 <= pc(pd(), a)
        },
        od = function(a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) return b[1];
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                    if (a && a[1]) switch (a[1]) {
                        case "4.0":
                            b = "8.0";
                            break;
                        case "5.0":
                            b = "9.0";
                            break;
                        case "6.0":
                            b = "10.0";
                            break;
                        case "7.0":
                            b = "11.0"
                    } else b = "7.0";
                    else b = c[1];
            return b
        };
    var sd = function() {
        this.Oc = "";
        this.zf = rd;
        this.Hd = null
    };
    sd.prototype.zc = !0;
    sd.prototype.Ka = function() {
        return this.Hd
    };
    sd.prototype.V = !0;
    sd.prototype.L = function() {
        return this.Oc.toString()
    };
    var td = function(a) {
            return a instanceof sd && a.constructor === sd && a.zf === rd ? a.Oc : "type_error:SafeHtml"
        },
        vd = function(a) {
            if (a instanceof sd) return a;
            var b = "object" == typeof a,
                c = null;
            b && a.zc && (c = a.Ka());
            a = b && a.V ? a.L() : String(a);
            return ud(ic(a), c)
        },
        wd = /^[a-zA-Z0-9-]+$/,
        xd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        yd = {
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
        zd = function(a, b) {
            a = vd(a);
            var c = a.Ka(),
                d = [],
                e = function(f) {
                    x(f) ? fb(f, e) : (f = vd(f), d.push(td(f).toString()), f = f.Ka(), 0 == c ? c = f : 0 != f && c != f && (c = null))
                };
            fb(b, e);
            return ud(d.join(td(a).toString()), c)
        },
        Bd = function(a) {
            return zd(Ad, Array.prototype.slice.call(arguments))
        },
        rd = {},
        ud = function(a, b) {
            return (new sd).Y(a, b)
        };
    sd.prototype.Y = function(a, b) {
        this.Oc = a;
        this.Hd = b;
        return this
    };
    ud("<!DOCTYPE html>", 0);
    var Ad = ud("", 0);
    ud("<br>", 0);
    var Cd = xb(function() {
            var a = document.createElement("div"),
                b = document.createElement("div");
            b.appendChild(document.createElement("div"));
            a.appendChild(b);
            b = a.firstChild.firstChild;
            a.innerHTML = td(Ad);
            return !b.parentElement
        }),
        Dd = function(a, b) {
            a.src = b.ab ? b.ab : Ub(b).toString()
        },
        Ed = function(a, b, c) {
            a.rel = c;
            a.href = -1 != c.toLowerCase().indexOf("stylesheet") ? b.ab ? b.ab : Ub(b).toString() : b instanceof Tb ? b.ab ? b.ab : Ub(b).toString() : b instanceof C ? sc(b) : sc(xc(b))
        },
        Fd = function(a, b) {
            a.src = Ub(b);
            (b = Fa()) && a.setAttribute("nonce",
                b)
        };
    var Gd = function(a, b) {
            return a = ic(a, b)
        },
        Hd = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        Id = {
            "'": "\\'"
        },
        Jd = function(a) {
            return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        Kd = function() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ z()).toString(36)
        },
        Ld = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        Md = function(a, b) {
            b = (b = "string" === typeof b ? Jd(b) : "\\s") ? "|[" + b + "]+" : "";
            b = new RegExp("(^" + b + ")([a-z])", "g");
            return a.replace(b, function(c, d, e) {
                return d + e.toUpperCase()
            })
        };
    var Nd = function(a) {
        Nd[" "](a);
        return a
    };
    Nd[" "] = Ha;
    var Od = function(a, b) {
            try {
                return Nd(a[b]), !0
            } catch (c) {}
            return !1
        },
        Pd = function(a, b, c, d) {
            d = d ? d(b) : b;
            return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
        };
    var Qd = kd(),
        G = ld(),
        Rd = F("Edge"),
        Sd = F("Gecko") && !(Tc("WebKit") && !F("Edge")) && !(F("Trident") || F("MSIE")) && !F("Edge"),
        Td = Tc("WebKit") && !F("Edge"),
        Ud = function() {
            var a = Qc;
            if (Sd) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (Rd) return /Edge\/([\d\.]+)/.exec(a);
            if (G) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (Td) return /WebKit\/(\S+)/.exec(a);
            if (Qd) return /(?:Version)[ \/]?(\S+)/.exec(a)
        },
        Vd = function() {
            var a = v.document;
            return a ? a.documentMode : void 0
        },
        Wd;
    a: {
        var Xd = "",
            Yd = Ud();Yd && (Xd = Yd ? Yd[1] : "");
        if (G) {
            var Zd = Vd();
            if (null != Zd && Zd > parseFloat(Xd)) {
                Wd = String(Zd);
                break a
            }
        }
        Wd = Xd
    }
    var $d = Wd,
        ae = {},
        be = function(a) {
            return Pd(ae, a, function() {
                return 0 <= pc($d, a)
            })
        },
        ce;
    var de = v.document;
    ce = de && G ? Vd() : void 0;
    var ee = ce;
    var fe = {},
        ge = null;
    var he = function() {},
        ie = "function" == typeof Uint8Array,
        ne = function(a, b, c, d, e, f) {
            a.D = null;
            b || (b = c ? [c] : []);
            a.Bl = c ? String(c) : void 0;
            a.Fa = 0 === c ? -1 : 0;
            a.J = b;
            a: {
                b = a;
                var g = b.J.length;c = -1;
                if (g && (c = g - 1, g = b.J[c], !(null === g || "object" != typeof g || x(g) || ie && g instanceof Uint8Array))) {
                    b.Sa = c - b.Fa;
                    b.O = g;
                    break a
                } - 1 < d ? (b.Sa = Math.max(d, c + 1 - b.Fa), b.O = null) : b.Sa = Number.MAX_VALUE
            }
            a.sl = {};
            if (e)
                for (b = 0; b < e.length; b++) d = e[b], d < a.Sa ? (d += a.Fa, a.J[d] = a.J[d] || je) : (ke(a), a.O[d] = a.O[d] || je);
            if (f && f.length)
                for (b = 0; b < f.length; b++) {
                    d =
                        e = void 0;
                    c = a;
                    g = f[b];
                    for (var h = 0; h < g.length; h++) {
                        var k = g[h],
                            l = le(c, k);
                        null != l && (d = k, e = l, me(c, k, void 0))
                    }
                    d && me(c, d, e)
                }
        },
        je = [],
        ke = function(a) {
            var b = a.Sa + a.Fa;
            a.J[b] || (a.O = a.J[b] = {})
        },
        le = function(a, b) {
            if (b < a.Sa) {
                b += a.Fa;
                var c = a.J[b];
                return c === je ? a.J[b] = [] : c
            }
            if (a.O) return c = a.O[b], c === je ? a.O[b] = [] : c
        },
        me = function(a, b, c) {
            b < a.Sa ? a.J[b + a.Fa] = c : (ke(a), a.O[b] = c);
            return a
        };
    he.prototype.Ya = ie ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            var b = void 0;
            void 0 === b && (b = 0);
            if (!ge) {
                ge = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    fe[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g],
                            k = ge[h];
                        void 0 === k && (ge[h] = g)
                    }
                }
            }
            b = fe[b];
            c = [];
            for (d = 0; d < this.length; d += 3) {
                k = this[d];
                var l = (e = d + 1 < this.length) ? this[d + 1] : 0;
                h = (f = d + 2 < this.length) ? this[d +
                    2] : 0;
                g = k >> 2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return b = c.join("")
        };
        try {
            return JSON.stringify(this.J && this.J, oe)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.J && this.J, oe)
    };
    var oe = function(a, b) {
            return za(b) && (isNaN(b) || Infinity === b || -Infinity === b) ? String(b) : b
        },
        Re = function(a, b) {
            return a = new a(b ? JSON.parse(b) : null)
        };
    he.prototype.toString = function() {
        return this.J.toString()
    };
    he.prototype.getExtension = function(a) {
        if (this.O) {
            this.D || (this.D = {});
            var b = a.ul;
            if (a.zl) {
                if (a.Uh()) return this.D[b] || (this.D[b] = hb(this.O[b] || [], function(c) {
                    return new a.lg(c)
                })), this.D[b]
            } else if (a.Uh()) return !this.D[b] && this.O[b] && (this.D[b] = new a.lg(this.O[b])), this.D[b];
            return this.O[b]
        }
    };
    he.prototype.clone = function() {
        return new this.constructor(Se(this.J))
    };
    var Se = function(a) {
        if (x(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Se(d) : d)
            }
            return b
        }
        if (ie && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Se(d) : d);
        return b
    };

    function Te(a, b, c, d) {
        c = void 0 === c ? !1 : c;
        return new Promise(function(e, f) {
            function g() {
                h.onload = null;
                h.onerror = null;
                b.document.body.removeChild(h)
            }
            var h = b.document.createElement("script");
            h.onload = function() {
                g();
                e()
            };
            h.onerror = function() {
                g();
                f(d)
            };
            h.type = "text/javascript";
            h.async = c;
            Fd(h, a);
            b.document.body.appendChild(h)
        })
    };
    /*
     Copyright (c) Microsoft Corporation. All rights reserved.
     Licensed under the Apache License, Version 2.0 (the "License"); you may not use
     this file except in compliance with the License. You may obtain a copy of the
     License at http://www.apache.org/licenses/LICENSE-2.0

     THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
     WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
     MERCHANTABLITY OR NON-INFRINGEMENT.

     See the Apache Version 2.0 License for specific language governing permissions
     and limitations under the License.
    */
    var Ue = function(a, b, c, d) {
        return new(c || (c = Promise))(function(e, f) {
            function g(l) {
                try {
                    k(d.next(l))
                } catch (n) {
                    f(n)
                }
            }

            function h(l) {
                try {
                    k(d["throw"](l))
                } catch (n) {
                    f(n)
                }
            }

            function k(l) {
                l.done ? e(l.value) : (new c(function(n) {
                    n(l.value)
                })).then(g, h)
            }
            k((d = d.apply(a, b)).next())
        })
    };

    function Ve(a, b, c, d) {
        return Ue(this, void 0, void 0, function f() {
            var g, h;
            return va(f, function(k) {
                switch (k.xa) {
                    case 1:
                        return g = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + (a + "&tv=" + b), h = void 0, k.dj(2), k.tf(We(g), 4);
                    case 4:
                        h = k.$b;
                        k.$h(3);
                        break;
                    case 2:
                        k.wg();
                    case 3:
                        return h ? (d = d || h.sodar_query_id) && h.bg_hash_basename && h.bg_binary ? k["return"]({
                            context: c,
                            Zf: h.bg_hash_basename,
                            Yf: h.bg_binary,
                            ei: a + "_" + b,
                            Yh: d
                        }) : k["return"](void 0) : k["return"](void 0)
                }
            })
        })
    }
    var We = function(a) {
        return new Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };

    function Xe(a, b, c, d, e, f) {
        f = void 0 === f ? "sodar2" : f;
        return Ue(this, void 0, void 0, function h() {
            var k;
            return va(h, function(l) {
                if (1 == l.xa) return l.tf(Ve(a, b, c, d), 2);
                k = l.$b;
                if (!k) return l["return"](void 0);
                var n = f;
                n = void 0 === n ? "sodar2" : n;
                var q = window,
                    u = q.GoogleGcLKhOms;
                u && "function" === typeof u.push || (u = q.GoogleGcLKhOms = []);
                var t = {};
                u.push((t._ctx_ = k.context, t._bgv_ = k.Zf, t._bgp_ = k.Yf, t._li_ = k.ei, t._jk_ = k.Yh, t));
                if (u = q.GoogleDX5YKUSk) q.GoogleDX5YKUSk = void 0, u[1]();
                n = $b(new Nb(Lb, "//tpc.googlesyndication.com/sodar/%{basename}.js"), {
                    basename: n
                });
                Te(n, window, !0);
                return l["return"](k)
            })
        })
    };
    var Ze = function(a) {
        ne(this, a, 0, -1, Ye, null)
    };
    ab(Ze, he);
    var $e = function(a) {
        ne(this, a, 0, -1, null, null)
    };
    ab($e, he);
    var Ye = [2, 3];
    Ze.prototype.Ah = function() {
        return le(this, 1)
    };
    Ze.prototype.Ch = function() {
        return null != le(this, 1)
    };
    Ze.prototype.th = function() {
        var a = $e;
        this.D || (this.D = {});
        if (!this.D[2]) {
            for (var b = le(this, 2), c = [], d = 0; d < b.length; d++) c[d] = new a(b[d]);
            this.D[2] = c
        }
        a = this.D[2];
        a == je && (a = this.D[2] = []);
        return a
    };
    Ze.prototype.eh = function() {
        return le(this, 3)
    };
    var af = document,
        H = window;
    var bf = function(a) {
        ne(this, a, 0, -1, null, null)
    };
    ab(bf, he);
    var cf = function(a) {
        ne(this, a, 0, -1, null, null)
    };
    ab(cf, he);
    cf.prototype.Qg = function() {
        return le(this, 1)
    };
    cf.prototype.Zg = function() {
        return le(this, 2)
    };
    bf.prototype.Pg = function() {
        var a = cf;
        this.D || (this.D = {});
        if (!this.D[3]) {
            var b = le(this, 3);
            b && (this.D[3] = new a(b))
        }
        return a = this.D[3]
    };
    var df = function(a) {
        this.B = a || {
            cookie: ""
        }
    };
    m = df.prototype;
    m.isEnabled = function() {
        return navigator.cookieEnabled
    };
    m.Wh = function(a) {
        return !/[;=\s]/.test(a)
    };
    m.Xh = function(a) {
        return !/[;\r\n]/.test(a)
    };
    m.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.El;
            f = c.Fl;
            e = c.domain;
            d = c.path;
            c = c.Al
        }
        if (!this.Wh(a)) throw Error('Invalid cookie name "' + a + '"');
        if (!this.Xh(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        0 > c ? c = "" : 0 == c ? (c = new Date(1970, 1, 1), c = ";expires=" + c.toUTCString()) : (c = new Date(z() + 1E3 * c), c = ";expires=" + c.toUTCString());
        g = null != g ? ";samesite=" + g : "";
        this.ej(a + "=" + b + e + d + c + f + g)
    };
    m.get = function(a, b) {
        for (var c = a + "=", d = this.$d(), e = 0, f; e < d.length; e++) {
            f = ac(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    m.remove = function(a, b, c) {
        var d = this.gg(a);
        this.set(a, "", 0, b, c);
        return d
    };
    m.isEmpty = function() {
        return !this.B.cookie
    };
    m.gg = function(a) {
        return void 0 !== this.get(a)
    };
    m.clear = function() {
        for (var a = this.bh().keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
    };
    m.ej = function(a) {
        this.B.cookie = a
    };
    m.$d = function() {
        return (this.B.cookie || "").split(";")
    };
    m.bh = function() {
        for (var a = this.$d(), b = [], c = [], d, e, f = 0; f < a.length; f++) e = ac(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var ff = function(a) {
            var b = (b = (new df(a)).get("FCCDCF", "")) ? b : null;
            if (!b) return ef(a);
            try {
                var c = Re(bf, b)
            } catch (d) {
                c = null
            }
            if (!c) return ef(a);
            c = c.Pg();
            if (!c) return ef(a);
            a = c.Zg();
            a ? (b = z(), a = b < a ? !1 : b <= a + 33696E6) : a = !1;
            return a ? c.Qg() : null
        },
        ef = function(a) {
            return (a = (new df(a)).get("DATA_USE_CONSENT", "")) ? a : null
        };
    var hf = function(a) {
        ne(this, a, 0, -1, gf, null)
    };
    ab(hf, he);
    var gf = [1, 2, 3, 4];
    hf.prototype.ph = function() {
        return le(this, 3)
    };
    hf.prototype.hh = function() {
        return le(this, 4)
    };
    hf.prototype.fh = function() {
        return le(this, 5)
    };
    hf.prototype.ah = function() {
        var a = le(this, 7);
        return a = null == a ? a : !!a
    };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var jf = !G || 9 <= Number(ee),
        kf = G || Qd || Td;
    var lf = function(a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    var I = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    m = I.prototype;
    m.clone = function() {
        return new I(this.x, this.y)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.translate = function(a, b) {
        a instanceof I ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.x *= a;
        this.y *= b;
        return this
    };
    var mf = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = mf.prototype;
    m.clone = function() {
        return new mf(this.width, this.height)
    };
    m.Tf = function() {
        return this.width * this.height
    };
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.isEmpty = function() {
        return !this.Tf()
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.width *= a;
        this.height *= b;
        return this
    };
    var pf = function(a) {
            return a ? new nf( of (a)) : cb || (cb = new nf)
        },
        qf = function(a, b) {
            return "string" === typeof b ? a.getElementById(b) : b
        },
        sf = function(a, b) {
            Ab(b, function(c, d) {
                c && "object" == typeof c && c.V && (c = c.L());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : rf.hasOwnProperty(d) ? a.setAttribute(rf[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        rf = {
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
        tf = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new mf(a.clientWidth, a.clientHeight)
        },
        uf = function(a) {
            return a.scrollingElement ? a.scrollingElement : Td || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
        },
        vf = function(a) {
            return a.parentWindow || a.defaultView
        },
        wf = function(a, b, c, d) {
            function e(h) {
                h && b.appendChild("string" ===
                    typeof h ? a.createTextNode(h) : h)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                if (!Na(f) || Pa(f) && 0 < f.nodeType) e(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Pa(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if (Oa(f)) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    fb(g ? nb(f) : f, e)
                }
            }
        },
        xf = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        yf = function(a) {
            if (1 != a.nodeType) return !1;
            switch (a.tagName) {
                case "APPLET":
                case "AREA":
                case "BASE":
                case "BR":
                case "COL":
                case "COMMAND":
                case "EMBED":
                case "FRAME":
                case "HR":
                case "IMG":
                case "INPUT":
                case "IFRAME":
                case "ISINDEX":
                case "KEYGEN":
                case "LINK":
                case "NOFRAMES":
                case "NOSCRIPT":
                case "META":
                case "OBJECT":
                case "PARAM":
                case "SCRIPT":
                case "SOURCE":
                case "STYLE":
                case "TRACK":
                case "WBR":
                    return !1
            }
            return !0
        },
        zf = function(a, b) {
            a.appendChild(b)
        },
        Af = function(a, b) {
            wf( of (a), a, arguments, 1)
        },
        Bf = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        Cf = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        Df = function(a) {
            if (kf) {
                var b = G && be("9") && !be("10");
                if (!(b && v.SVGElement && a instanceof v.SVGElement) && (b = a.parentElement)) return b
            }
            b = a.parentNode;
            return Pa(b) && 1 == b.nodeType ? b : null
        },
        Ef = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a ==
                b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Ff = function(a) {
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
        },
        of = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        nf = function(a) {
            this.B = a || v.document || document
        };
    m = nf.prototype;
    m.getElementsByTagName = function(a, b) {
        b = b || this.B;
        return b.getElementsByTagName(String(a))
    };
    m.Vd = function(a, b, c) {
        c = c || this.B;
        a = a && "*" != a ? String(a).toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (a || b)) b = a + (b ? "." + b : ""), b = c.querySelectorAll(b);
        else if (b && c.getElementsByClassName)
            if (c = c.getElementsByClassName(b), a) {
                for (var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
                d.length = e;
                b = d
            } else b = c;
        else if (c = c.getElementsByTagName(a || "*"), b) {
            d = {};
            for (f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && lb(a.split(/\s+/), b) && (d[e++] = g);
            d.length = e;
            b = d
        } else b = c;
        return b
    };
    m.ae = function(a) {
        return tf(a || this.jb() || window)
    };
    m.Ed = function(a, b, c) {
        var d = this.B;
        var e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!jf && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', Gd(g.name), '"');
            if (g.type) {
                f.push(' type="', Gd(g.type), '"');
                var h = {};
                Jb(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = xf(d, f);
        g && ("string" === typeof g ? f.className = g : x(g) ? f.className = g.join(" ") : sf(f, g));
        2 < e.length && wf(d, f, e, 2);
        return d = f
    };
    m.createElement = function(a) {
        return xf(this.B, a)
    };
    m.createTextNode = function(a) {
        return this.B.createTextNode(String(a))
    };
    m.Ph = function() {
        return "CSS1Compat" == this.B.compatMode
    };
    m.jb = function() {
        return vf(this.B)
    };
    m.Ug = function() {
        return uf(this.B)
    };
    m.Ud = function() {
        var a = this.B;
        var b = uf(a);
        a = vf(a);
        return b = G && be("10") && a.pageYOffset != b.scrollTop ? new I(b.scrollLeft, b.scrollTop) : new I(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    };
    m.appendChild = zf;
    m.append = Af;
    m.canHaveChildren = yf;
    m.removeNode = Cf;
    m.contains = Ef;
    m.Hg = Ff;
    var Hf = function(a) {
            Gf();
            return Wb(a)
        },
        Gf = Ha;
    var Jf = function() {
            return !If() && (F("iPod") || F("iPhone") || F("Android") || F("IEMobile"))
        },
        If = function() {
            return F("iPad") || F("Android") && !F("Mobile") || F("Silk")
        };
    var Kf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Lf = function(a, b) {
            return a ? b ? decodeURI(a) : decodeURIComponent(a) : a
        },
        Mf = function(a, b) {
            if (!b) return a;
            var c = a.indexOf("#");
            0 > c && (c = a.length);
            var d = a.indexOf("?");
            if (0 > d || d > c) {
                d = c;
                var e = ""
            } else e = a.substring(d + 1, c);
            a = [a.substr(0, d), e, a.substr(c)];
            c = a[1];
            b = b ? c ? c + "&" + b : b : c;
            a[1] = b;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        },
        Nf = function(a, b, c) {
            if (x(b))
                for (var d = 0; d < b.length; d++) Nf(a, String(b[d]),
                    c);
            else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        };
    var J = function(a) {
            try {
                return !!a && null != a.location.href && Od(a, "foo")
            } catch (b) {
                return !1
            }
        },
        Pf = function(a, b, c, d) {
            d = d || v;
            c && (d = Of(d));
            for (c = 0; d && 40 > c++ && (!b && !J(d) || !a(d));) d = Of(d)
        },
        Qf = function() {
            var a = v;
            Pf(function(b) {
                a = b;
                return !1
            });
            return a
        },
        Of = function(a) {
            try {
                var b = a.parent;
                if (b && b != a) return b
            } catch (c) {}
            return null
        },
        Rf = function(a, b) {
            var c = a.createElement("script");
            Fd(c, Hf(b));
            return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
        },
        Sf = function(a, b) {
            return b.getComputedStyle ?
                b.getComputedStyle(a, null) : a.currentStyle
        },
        Vf = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = !1;
            c || (d = Tf());
            if (!d && !Uf() && (c = Math.random(), c < b)) {
                if (v.crypto) try {
                    var e = new Uint32Array(1);
                    v.crypto.getRandomValues(e);
                    c = e[0] / 65536 / 65536
                } catch (f) {
                    c = Math.random()
                } else c = Math.random();
                b = Math.floor(c * a.length);
                return a[b]
            }
            return null
        },
        Wf = function(a, b, c) {
            if (a)
                for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
        },
        Xf = function(a) {
            var b = [];
            Wf(a, function(c, d) {
                b.push(d)
            });
            return b
        },
        Yf = function(a) {
            var b = [];
            Wf(a, function(c) {
                b.push(c)
            });
            return b
        },
        Zf = function(a, b) {
            var c = a.length;
            if (0 == c) return 0;
            b = b || 305419896;
            for (var d = 0; d < c; d++) {
                var e = a.charCodeAt(d);
                b ^= (b << 5) + (b >> 2) + e & 4294967295
            }
            return 0 < b ? b : 4294967296 + b
        },
        Uf = xb(function() {
            return -1 != Qc.indexOf("Google Web Preview") || 1E-4 > Math.random()
        }),
        Tf = xb(function() {
            return -1 != Qc.indexOf("MSIE")
        }),
        $f = /^([0-9.]+)px$/,
        ag = /^(-?[0-9.]{1,30})$/,
        bg = function(a, b) {
            return ag.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
        },
        cg = function(a, b) {
            return b ? !/^false$/.test(a) :
                /^true$/.test(a)
        },
        dg = function(a) {
            return (a = $f.exec(a)) ? +a[1] : null
        },
        eg = function(a) {
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        },
        fg = {
            Oj: "allow-forms",
            Pj: "allow-modals",
            Qj: "allow-orientation-lock",
            Rj: "allow-pointer-lock",
            Sj: "allow-popups",
            Tj: "allow-popups-to-escape-sandbox",
            Uj: "allow-presentation",
            Vj: "allow-same-origin",
            Wj: "allow-scripts",
            Xj: "allow-top-navigation",
            Yj: "allow-top-navigation-by-user-activation"
        },
        gg = xb(function() {
            return Yf(fg)
        }),
        hg = function(a) {
            var b = gg();
            return a.length ? gb(b, function(c) {
                return !lb(a, c)
            }) : b
        },
        ig = function(a) {
            a = a || xf(document, "IFRAME");
            var b = a.sandbox,
                c = b && b.supports;
            if (!c) return {};
            var d = {};
            fb(gg(), function(e) {
                c.call(b, e) && (d[e] = !0)
            });
            return d
        },
        jg = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        kg = function(a, b, c) {
            for (var d = 0; d < c; ++d) {
                if (jg(a, b)) return a;
                if (!(a = Of(a))) break
            }
            return null
        },
        lg = {
            "http://googleads.g.doubleclick.net": !0,
            "http://pagead2.googlesyndication.com": !0,
            "https://googleads.g.doubleclick.net": !0,
            "https://pagead2.googlesyndication.com": !0
        },
        mg = /\.google\.com(:\d+)?$/,
        ng = function(a, b) {
            b = void 0 === b ? !1 : b;
            return !!lg[a] || b && mg.test(a)
        },
        bh = function(a, b, c) {
            b = kb(a, b, c);
            return 0 <= b ? (c = a[b], Array.prototype.splice.call(a, b, 1), c) : null
        },
        ch = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Math.floor(Math.random() * Math.pow(2, 52))
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        };
    var dh = {
        Gk: 0,
        vk: 1,
        uk: 2,
        tk: 3,
        Rk: 4,
        Sk: 5,
        yk: 6,
        wk: 7
    };
    var eh = {
            passive: !0
        },
        fh = xb(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                v.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function gh(a) {
        return a ? a.passive && fh() ? a : a.capture || !1 : !1
    }
    var K = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, gh(d)), !0) : !1
        },
        hh = function(a, b, c, d) {
            return a.removeEventListener ? (a.removeEventListener(b, c, gh(d)), !0) : !1
        };
    var jh = function(a, b, c, d) {
            c = void 0 === c ? null : c;
            d = void 0 === d ? !1 : d;
            return ih(a, b, c, !1, d)
        },
        ih = function(a, b, c, d, e) {
            a.google_image_requests || (a.google_image_requests = []);
            var f = a.document.createElement("img");
            if (c || e) {
                var g = function(h) {
                    c && c(h);
                    e && mb(a.google_image_requests, f);
                    hh(f, "load", g);
                    hh(f, "error", g)
                };
                K(f, "load", g);
                K(f, "error", g)
            }
            d && (f.referrerPolicy = "no-referrer");
            f.src = b;
            a.google_image_requests.push(f);
            return f
        };
    var kh = !1,
        lh = function(a) {
            try {
                var b = ff(document);
                var c = b ? Re(hf, b) : null
            } catch (d) {
                c = null
            }
            if (!c) return 0;
            if (c.ah()) return 4;
            b = z() - (c.fh() || 0);
            if (6048E5 < b) return 0;
            if (a) {
                if (lb(c.ph(), a)) return 2;
                if (lb(c.hh(), a)) return 3
            }
            return 1
        };

    function mh(a) {
        return jg(v.top, a) || jg(Qf(), a)
    }

    function nh(a, b, c) {
        c = void 0 === c ? !1 : c;
        switch (a) {
            case 2:
            case 4:
                return !1;
            case 3:
                return !0;
            case 1:
                return b;
            default:
                return c && b
        }
    }
    var oh = xb(function() {
            var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
            try {
                return a.test(v.top.location.href)
            } catch (b) {
                return a.test(v.location.href)
            }
        }),
        ph = {},
        qh = null,
        rh = null,
        th = function() {
            var a = sh();
            a && v.setTimeout && .01 > Math.random() && v.setTimeout(function() {
                v.__cmp && v.__cmp("getConsentData", null, function(b) {
                    b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd=" + JSON.stringify(b);
                    jh(v, b)
                })
            }, 1E4);
            return a
        },
        sh = function() {
            if (v.__cmp) {
                var a = !1;
                try {
                    v.__cmp("ping", null, function() {
                        a = !0
                    })
                } catch (b) {}
                if (a) return !0
            }
            rh =
                kg(v, "__cmpLocator", 40);
            return !!rh
        },
        uh = 1,
        vh = function() {
            if (!v.__cmp && rh) {
                try {
                    if (rh.__cmp) {
                        v.__cmp = rh.__cmp;
                        return
                    }
                } catch (b) {}
                v.__cmp = function(b, c, d) {
                    var e = "google_cmp_callback_" + uh;
                    uh++;
                    b = {
                        __cmpCall: {
                            command: b,
                            parameter: c,
                            callId: e
                        }
                    };
                    ph[e] = d;
                    rh.postMessage(b, "*")
                };
                var a = function(b) {
                    b = b.data;
                    if ("string" == typeof b) try {
                        b = JSON.parse(b)
                    } catch (c) {}(b = b.__cmpReturn) && "function" == typeof ph[b.callId] && (ph[b.callId](b.returnValue, b.success), delete ph[b.callId])
                };
                K(v, "message", a)
            }
        },
        wh = function(a, b, c) {
            var d = c =
                void 0 === c ? function() {} : c,
                e = mh("GoogleSetNPA"),
                f = tb(0, Xf(dh).length);
            f[0] = a ? 1 : 2;
            f[6] = 1;
            f[5] = e ? 1 : 2;
            var g = !1;
            b = function(l, n) {
                n && l && (g = !!l.gdprAppliesGlobally)
            };
            v.__cmp && v.__cmp("ping", null, b);
            if (g || a) {
                var h = function(l) {
                    l && (l.gdprApplies ? (f[6] = 8, qh = {
                        sb: 5,
                        qb: e,
                        Za: !1,
                        La: f.join("."),
                        Yb: l.consentData,
                        ce: l.googleVendorIds
                    }) : qh = {
                        sb: 5,
                        qb: e,
                        Za: !1,
                        La: f.join(".")
                    }, d(qh))
                };
                a = Qf().GoogleMostRecentCmpConsentData;
                var k = !!a;
                a && h(a);
                v.__cmp && v.__cmp("getConsentData", null, function(l, n) {
                    n && (Qf().GoogleMostRecentCmpConsentData =
                        l, k || h(l))
                })
            } else qh = {
                sb: 5,
                qb: e,
                Za: !1,
                La: f.join(".")
            }, d(qh)
        },
        xh = function(a, b) {
            var c = tb(0, Xf(dh).length);
            oh() && (a = !0);
            c[0] = a ? 1 : 2;
            var d = mh("GoogleSetNPA");
            c[5] = d ? 1 : 2;
            if (kh && th()) return vh(), wh(a, b), qh || (c[6] = 7, qh = {
                sb: 5,
                qb: d,
                Za: !0,
                La: c.join("."),
                Yb: "NCS"
            }), qh;
            c[4] = 2;
            var e = !!v.googlefc || jg(v.top, "googlefcPresent");
            c[1] = e ? 1 : 2;
            var f = lh(b);
            if (0 != f) b = {
                be: f,
                de: 3
            };
            else {
                a: if (f = v.top, jg(f, "googlefcInactive")) b = 4;
                    else {
                        if (b && (b = "googlefcPA-" + b, jg(f, b))) {
                            b = 2;
                            break a
                        }
                        b = jg(f, "googlefcNPA") ? 3 : 0
                    }b = {
                    be: b,
                    de: 2
                }
            }
            f = b;
            b =
                f.be;
            f = f.de;
            c[f] = b;
            return {
                sb: b,
                qb: d || nh(b, a, e),
                Za: 0 == b && a && e,
                La: c.join(".")
            }
        },
        yh = function(a, b, c) {
            var d = kh && th();
            d ? (vh(), wh(a, b, c)) : (d = xh(a, b), d.Za ? v.setTimeout(function() {
                yh(a, b, c)
            }, 1E3) : c(d))
        };
    var zh = function(a, b, c, d) {
        this.X = a;
        this.pubWin = b;
        this.iframeWin = c;
        this.j = d || c || {};
        this.Ma = b.document.getElementById(this.j.google_async_iframe_id + "_anchor");
        this.hb = -1;
        this.ec = !1;
        this.Lc = "";
        this.rc = 0;
        this.Rh = !1;
        this.hc = null;
        this.Mc = 0;
        this.ri = null;
        this.oj = 0
    };
    var Ah = function(a, b) {
            a = parseFloat(a);
            return isNaN(a) || 1 < a || 0 > a ? b : a
        },
        Bh = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/,
        Ch = function(a, b) {
            return a ? (a = a.match(Bh)) ? a[0] : b : b
        };
    var Dh = function() {
            return "r20191003"
        },
        Eh = cg("false", !1),
        Fh = cg("false", !1),
        Gh = cg("false", !1),
        Hh = cg("false", !1),
        Ih = cg("true", !1),
        Jh = cg("true", !1),
        Kh = Jh || !Hh,
        Lh = Ah("0.02", 0),
        Mh = Ah("0.0", 0);
    var Nh = function() {
            return Ch("", "googleads.g.doubleclick.net")
        },
        Oh = function() {
            return Ch("", "pagead2.googlesyndication.com")
        };
    var Ph = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m = Ph.prototype;
    m.getWidth = function() {
        return this.right - this.left
    };
    m.getHeight = function() {
        return this.bottom - this.top
    };
    m.clone = function() {
        return new Ph(this.top, this.right, this.bottom, this.left)
    };
    m.contains = function(a) {
        return Qh(this, a)
    };
    m.expand = function(a, b, c, d) {
        Pa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    var Qh = function(a, b) {
            return a && b ? b instanceof Ph ? b.left >= a.left && b.right <= a.right && b.top >= a.top && b.bottom <= a.bottom : b.x >= a.left && b.x <= a.right && b.y >= a.top && b.y <= a.bottom : !1
        },
        Rh = function(a, b) {
            return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
        };
    m = Ph.prototype;
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    m.translate = function(a, b) {
        a instanceof I ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Sh = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    Sh.prototype.clone = function() {
        return new Sh(this.left, this.top, this.width, this.height)
    };
    Sh.prototype.xj = function() {
        var a = this.left + this.width,
            b = this.top + this.height;
        return new Ph(this.top, a, b, this.left)
    };
    var Th = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Sh(c, e, d - c, a - e)
            }
            return null
        },
        Uh = function(a, b) {
            var c = Th(a, b);
            if (!c || !c.height || !c.width) return [a.clone()];
            c = [];
            var d = a.top,
                e = a.height,
                f = a.left + a.width,
                g = a.top + a.height,
                h = b.left + b.width,
                k = b.top + b.height;
            b.top > a.top && (c.push(new Sh(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
            k < g && (c.push(new Sh(a.left,
                k, a.width, g - k)), e = k - d);
            b.left > a.left && c.push(new Sh(a.left, d, b.left - a.left, e));
            h < f && c.push(new Sh(h, d, f - h, e));
            return c
        };
    m = Sh.prototype;
    m.contains = function(a) {
        return a instanceof I ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    m.wh = function() {
        return new I(this.left, this.top)
    };
    m.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.translate = function(a, b) {
        a instanceof I ? (this.left += a.x, this.top += a.y) : (this.left += a, "number" === typeof b && (this.top += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var Wh = function(a, b, c) {
            if ("string" === typeof b) {
                var d = c;
                (b = Vh(a, b)) && (a.style[b] = d)
            } else
                for (d in b) {
                    c = a;
                    var e = b[d],
                        f = Vh(c, d);
                    f && (c.style[f] = e)
                }
        },
        Xh = {},
        Vh = function(a, b) {
            var c = Xh[b];
            if (!c) {
                var d = Ld(b);
                c = d;
                void 0 === a.style[d] && (d = (Td ? "Webkit" : Sd ? "Moz" : G ? "ms" : Qd ? "O" : null) + Md(d), void 0 !== a.style[d] && (c = d));
                Xh[b] = c
            }
            return c
        },
        Yh = function(a, b) {
            var c = of (a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        },
        Zh = function(a, b) {
            return Yh(a,
                b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        $h = function(a) {
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
            G && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        ai = function(a) {
            if (G && !(8 <= Number(ee))) return a.offsetParent;
            var b = of (a),
                c = Zh(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType &&
                    a.host && (a = a.host), c = Zh(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        },
        bi = function(a) {
            var b = of (a),
                c = new I(0, 0);
            var d = b ? of (b) : document;
            d = !G || 9 <= Number(ee) || pf(d).Ph() ? d.documentElement : d.body;
            if (a == d) return c;
            a = $h(a);
            b = pf(b).Ud();
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        ci = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Td && !b && !c;
            return (void 0 === b || d) &&
                a.getBoundingClientRect ? (a = $h(a), new mf(a.right - a.left, a.bottom - a.top)) : new mf(b, c)
        },
        ei = function(a, b) {
            b = pf(b);
            var c = b.B;
            if (G && c.createStyleSheet) return b = c.createStyleSheet(), di(b, a), b;
            c = b.Vd("HEAD")[0];
            if (!c) {
                var d = b.Vd("BODY")[0];
                c = b.Ed("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.Ed("STYLE");
            di(d, a);
            b.appendChild(c, d);
            return d
        },
        di = function(a, b) {
            b = Oc(b);
            G && void 0 !== a.cssText ? a.cssText = b : a.innerHTML = b
        },
        fi = function(a, b, c, d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var e = a.style[c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return +b
        },
        gi = function(a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? fi(a, b, "left", "pixelLeft") : 0
        },
        hi = {
            thin: 2,
            medium: 4,
            thick: 6
        },
        ii = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in hi ? hi[b] : fi(a, b, "left", "pixelLeft")
        };
    var ji = function() {
        this.Og = function() {
            return !1
        }
    };
    Ka(ji);
    var ki = function(a, b) {
        b = void 0 === b ? !1 : b;
        return ji.Xd().Og(a, b)
    };
    var li = {
            "AMP-CAROUSEL": "ac",
            "AMP-FX-FLYING-CARPET": "fc",
            "AMP-LIGHTBOX": "lb",
            "AMP-STICKY-AD": "sa"
        },
        mi = function(a) {
            a = void 0 === a ? v : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        ni = function(a) {
            return (a = a || mi()) && a.initialIntersection
        },
        oi = function(a) {
            return (a = a || mi()) ? J(a.master) ? a.master : null : null
        },
        qi = function(a, b, c, d) {
            var e = a.ampInaboxIframes = a.ampInaboxIframes || [],
                f = function() {};
            b && (e.push(b), d && b.setAttribute("data-amp-allowed", d), f = function() {
                a.AMP && a.AMP.inaboxUnregisterIframe ? a.AMP.inaboxUnregisterIframe(b) : mb(e, b)
            });
            if (a.ampInaboxInitialized) return f;
            a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
            c && /^\d{15,20}$/.test(c) && pi(a, c);
            if (!e.google_amp_listener_added) {
                e.google_amp_listener_added = !0;
                var g = function(h) {
                    if (a.ampInaboxInitialized) return hh(a, "message", g), f;
                    var k, l = ki(198) && "amp-ini-load" === h.data;
                    a.ampInaboxPendingMessages && !l && (k = /^amp-(\d{15,20})?/.exec(h.data)) &&
                        (a.ampInaboxPendingMessages.push(h), pi(a, k[1]))
                };
                K(a, "message", g)
            }
            return f
        },
        pi = function(a, b) {
            a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Rf(a.document, "https://cdn.ampproject.org/" + (b ? "rtv/" + b + "/" : "") + "amp4ads-host-v0.js")
        };
    var ri = /^((market|itms|intent|itms-appss):\/\/)/i;

    function si(a, b) {
        var c = a instanceof C ? a : xc(a);
        "about:invalid#zClosurez" === c.L() && b(String(a))
    }
    var ti = function(a, b) {
        return function(c) {
            var d = b;
            c = {
                id: "unsafeurl",
                ctx: a,
                url: c
            };
            var e = [];
            for (f in c) Nf(f, c[f], e);
            var f = e.join("&");
            d = Mf(d, f);
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var ui = function(a, b) {
            return typeof a === b
        },
        vi = function(a) {
            return ui(a, "object")
        },
        wi = function(a) {
            return ui(a, "function")
        },
        xi = function(a, b, c) {
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
        },
        yi = function(a) {
            return !(!a || !a.call) && wi(a)
        },
        zi = function(a, b, c) {
            if (a.filter) return a.filter(b, c);
            for (var d = [], e = 0; e < a.length; e++) b.call(c, a[e], e, a) && d.push(a[e]);
            return d
        },
        Ai = function(a, b) {
            if (a.indexOf) return a = a.indexOf(b), 0 < a || 0 === a;
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) return !0;
            return !1
        },
        Bi = function(a) {
            "google_onload_fired" in a || (a.google_onload_fired = !1, K(a, "load", function() {
                a.google_onload_fired = !0
            }))
        },
        Ci = function(a, b) {
            var c = b.slice(-1),
                d = "?" === c || "#" === c ? "" : "&",
                e = [b];
            xi(a, function(f, g) {
                if (f || 0 === f || !1 === f) ui(f, "boolean") && (f = f ? 1 : 0), e.push(d), e.push(g), e.push("="), e.push(encodeURIComponent(String(f))), d = "&"
            });
            return e.join("")
        },
        Di = function(a) {
            a = void 0 === a ? H : a;
            try {
                return a.history.length
            } catch (b) {
                return 0
            }
        },
        Ei = function(a) {
            a = oi(mi(a)) || a;
            a.google_unique_id ? ++a.google_unique_id : a.google_unique_id =
                1;
            return a.google_unique_id
        },
        Fi = function(a) {
            a = a.google_unique_id;
            return ui(a, "number") ? a : 0
        },
        Gi = function(a, b) {
            b = void 0 === b ? !1 : b;
            var c = "";
            b || (c = (c = 9 !== a.nodeType && a.id) ? "/" + c : "");
            b = a.nodeName && a.nodeName.toString().toLowerCase();
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var d = a.parentElement,
                        e = a.nodeName.toString().toLowerCase();
                    d = d.childNodes;
                    for (var f = 0, g = 0; g < d.length; ++g) {
                        var h = d[g];
                        if (h.nodeName && h.nodeName.toString().toLowerCase() === e) {
                            if (a === h) {
                                a = "." + f;
                                break a
                            }++f
                        }
                    }
                }
                a = ""
            }
            return b + c + a
        },
        Hi = function(a) {
            return !!a.google_async_iframe_id
        },
        Ii = Hi(window),
        Ji = Ii && window.parent || window,
        L = function() {
            if (Ii && !J(Ji)) {
                var a = "." + af.domain;
                try {
                    for (; 2 < a.split(".").length && !J(Ji);) af.domain = a = a.substr(a.indexOf(".") + 1), Ji = window.parent
                } catch (b) {}
                J(Ji) || (Ji = window)
            }
            return Ji
        },
        Ki = /(^| )adsbygoogle($| )/,
        Li = function(a) {
            return function() {
                if (a) {
                    var b = a;
                    a = null;
                    b.apply(null, arguments)
                }
            }
        },
        Mi = Wb(Ob(new Nb(Lb, "//fonts.googleapis.com/css"))),
        Ni = function(a, b) {
            b = pf(b).createElement("LINK");
            b.type = "text/css";
            var c = ti(638, "https://pagead2.googlesyndication.com/pagead/gen_204");
            a = Mi.fg({
                family: a
            });
            a instanceof Tb || si(a, c);
            Ed(b, a, "stylesheet");
            return b
        },
        Oi = function() {
            var a, b = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    var c = 3;
                    for (a = 1; a;) try {
                        a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                    } catch (d) {
                        a = null
                    }
                    return c.toString()
                }
                if (ld()) {
                    a = null;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        c = 0;
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === c) return c.toString()
                        }
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
                }
            }
            return "0"
        },
        Pi = function(a) {
            return (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1
        },
        Qi = function(a) {
            if (Gh) {
                a = a || H;
                try {
                    var b = a.google_cafe_host || a.top.google_cafe_host;
                    if (b) return b
                } catch (c) {}
            }
            return Oh()
        },
        Ri = function(a) {
            return Gh && a.google_top_window || a.top
        },
        Si = function(a) {
            a = Ri(a);
            return J(a) ? a : null
        },
        Ti = function(a, b) {
            try {
                b = b || H;
                for (var c = 0; 20 > c; c++) {
                    if (a == b) return !0;
                    if (a == b.top) break;
                    a = a.parent
                }
            } catch (d) {}
            return !1
        };
    var Ui = function(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    };
    var M = {},
        Vi = (M.google_ad_channel = "channel", M.google_ad_type = "ad_type", M.google_ad_format = "format", M.google_color_bg = "color_bg", M.google_color_border = "color_border", M.google_color_link = "color_link", M.google_color_text = "color_text", M.google_color_url = "color_url", M.google_page_url = "url", M.google_allow_expandable_ads = "ea", M.google_ad_section = "region", M.google_cpm = "cpm", M.google_encoding = "oe", M.google_safe = "adsafe", M.google_flash_version = "flash", M.google_font_face = "f", M.google_font_size = "fs", M.google_hints =
            "hints", M.google_ad_host = "host", M.google_ad_host_channel = "h_ch", M.google_ad_host_tier_id = "ht_id", M.google_kw_type = "kw_type", M.google_kw = "kw", M.google_contents = "contents", M.google_targeting = "targeting", M.google_adtest = "adtest", M.google_alternate_color = "alt_color", M.google_alternate_ad_url = "alternate_ad_url", M.google_cust_age = "cust_age", M.google_cust_ch = "cust_ch", M.google_cust_gender = "cust_gender", M.google_cust_interests = "cust_interests", M.google_cust_job = "cust_job", M.google_cust_l = "cust_l", M.google_cust_lh =
            "cust_lh", M.google_cust_u_url = "cust_u_url", M.google_cust_id = "cust_id", M.google_language = "hl", M.google_city = "gcs", M.google_country = "gl", M.google_region = "gr", M.google_available_width = "avail_w", M.google_content_recommendation_ad_positions = "ad_pos", M.google_content_recommendation_columns_num = "cr_col", M.google_content_recommendation_rows_num = "cr_row", M.google_content_recommendation_ui_type = "crui", M.google_content_recommendation_use_square_imgs = "cr_sq_img", M.google_color_line = "color_line", M.google_disable_video_autoplay =
            "disable_video_autoplay", M.google_full_width_responsive_allowed = "fwr", M.google_full_width_responsive = "fwrattr", M.efwr = "efwr", M.google_pgb_reactive = "pra", M.google_resizing_allowed = "rs", M.google_resizing_height = "rh", M.google_resizing_width = "rw", M.rpe = "rpe", M.google_responsive_formats = "resp_fmts", M.google_safe_for_responsive_override = "sfro", M.google_video_doc_id = "video_doc_id", M.google_video_product_type = "video_product_type", M.google_webgl_support = "wgl", M.google_refresh_count = "rc", M),
        N = {},
        Wi = (N.google_ad_block =
            "ad_block", N.google_ad_client = "client", N.google_ad_output = "output", N.google_ad_callback = "callback", N.google_ad_height = "h", N.google_ad_resize = "twa", N.google_ad_slot = "slotname", N.google_ad_unit_key = "adk", N.google_ad_dom_fingerprint = "adf", N.google_ad_width = "w", N.google_captcha_token = "captok", N.google_content_recommendation_columns_num = "cr_col", N.google_content_recommendation_rows_num = "cr_row", N.google_ctr_threshold = "ctr_t", N.google_cust_criteria = "cust_params", N.gfwrnwer = "fwrn", N.gfwrnher = "fwrnh", N.google_bfa =
            "bfa", N.ebfa = "ebfa", N.ebfaca = "ebfaca", N.google_image_size = "image_size", N.google_last_modified_time = "lmt", N.google_loeid = "loeid", N.google_max_num_ads = "num_ads", N.google_max_radlink_len = "max_radlink_len", N.google_mtl = "mtl", N.google_native_settings_key = "nsk", N.google_enable_content_recommendations = "ecr", N.google_infinite_scroll_slot_type = "ifsl", N.google_num_radlinks = "num_radlinks", N.google_num_radlinks_per_unit = "num_radlinks_per_unit", N.google_pucrd = "pucrd", N.google_reactive_plaf = "plaf", N.google_reactive_plat =
            "plat", N.google_reactive_fba = "fba", N.google_reactive_sra_channels = "plach", N.google_responsive_auto_format = "rafmt", N.armr = "armr", N.google_rl_dest_url = "rl_dest_url", N.google_rl_filtering = "rl_filtering", N.google_rl_mode = "rl_mode", N.google_rt = "rt", N.google_source_type = "src_type", N.google_tag_for_child_directed_treatment = "tfcd", N.google_tag_for_under_age_of_consent = "tfua", N.google_tag_origin = "to", N.google_ad_semantic_area = "sem", N.google_tfs = "tfs", N.google_package = "pwprc", N.google_tag_partner = "tp", N.fra =
            "fpla", N.google_ml_rank = "mlr", N.google_apsail = "psa", N),
        Xi = {},
        Yi = (Xi.google_core_dbp = "dbp", Xi.google_lact = "lact", Xi.google_only_pyv_ads = "pyv", Xi.google_scs = "scs", Xi.google_video_url_to_fetch = "durl", Xi.google_yt_pt = "yt_pt", Xi.google_yt_up = "yt_up", Xi);
    var Zi = function(a, b) {
        a.rc |= b
    };
    var $i = function(a, b, c) {
        Zi(a, 2);
        return b[c % b.length]
    };
    var aj = {
        wf: 1,
        xf: 2,
        sk: 8,
        dl: 9,
        bl: 16,
        $j: 26,
        Zj: 27,
        yf: 30,
        Dk: 32
    };
    var bj = function(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var cj = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i],
        dj = function(a) {
            return jb(cj, function(b) {
                return b.test(a)
            })
        },
        ej = function(a) {
            if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
                a = a[0].toLowerCase();
                for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
                a = b;
                switch (a) {
                    case 1967261364:
                        return 0;
                    case 3147493546:
                        return 1;
                    case 1567346461:
                        return 2;
                    case 2183041838:
                        return 3;
                    case 763236279:
                        return 4;
                    case 1342279801:
                        return 5;
                    case 526831769:
                        return 6;
                    case 352806002:
                        return 7;
                    case 2755048925:
                        return 8;
                    case 3306848407:
                        return 9;
                    case 2207000920:
                        return 10;
                    case 484037040:
                        return 11;
                    case 3506871055:
                        return 12;
                    case 672143848:
                        return 13;
                    case 2528751226:
                        return 14;
                    case 2744854768:
                        return 15;
                    case 3703278665:
                        return 16;
                    case 2014749173:
                        return 17;
                    case 133063824:
                        return 18;
                    case 2749334602:
                        return 19;
                    case 3131239845:
                        return 20;
                    case 2074086763:
                        return 21;
                    case 795772493:
                        return 22;
                    case 290857819:
                        return 23;
                    case 3035947606:
                        return 24;
                    case 2983138003:
                        return 25;
                    case 2197138676:
                        return 26;
                    case 4216016165:
                        return 27;
                    case 239803524:
                        return 28;
                    case 975993579:
                        return 29;
                    case 1794940339:
                        return 30;
                    case 1314429186:
                        return 31;
                    case 1643618937:
                        return 32;
                    case 497159982:
                        return 33
                }
            }
            return -1
        },
        fj = function(a) {
            if (!a.length) return 0;
            for (var b = [], c = 0; 33 >= c; c++) b[c] = 0;
            for (c = a.length -
                1; 0 <= c; c--) {
                var d = ej(a[c]);
                0 <= d && (b[33 - d] = 1)
            }
            return parseInt(b.join(""), 2)
        };
    var gj = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        hj = function(a) {
            this.ma = a || v;
            this.Ac()
        };
    m = hj.prototype;
    m.Ac = function() {
        var a = this.ma || v;
        this.Eh = a = a.top == a ? 1 : J(a.top) ? 2 : 3;
        3 != this.Eh && (a = v.top.document, Date.parse(a.lastModified));
        this.pa = ij(this.ma)
    };
    m.Tg = function() {
        return this.pa[0]
    };
    m.xh = function() {
        var a = Math.max(this.pa.length - 1, 0);
        return this.pa[a]
    };
    m.sg = function() {
        for (var a = [], b = Math.min(this.pa.length, 27), c = 1; c < b; c++) this.pa[c] && this.pa[c].url && (a[c - 1] = this.pa[c].url);
        return this.Jd(a.reverse())
    };
    m.tg = function(a) {
        a = a || (this.ma.document && this.ma.document.scripts ? this.ma.document.scripts : []);
        if (!a) return 0;
        for (var b = [], c = a.length - 1; 0 <= c && 26 > b.length;) a[c].src && b.unshift(a[c].src), c--;
        return this.Jd(b)
    };
    m.Jd = function(a) {
        for (var b, c = 0, d = (b = this.xh().url || null) && Lf(b.match(Kf)[3] || null, !0), e = Math.min(a.length, 26), f = 0; f < e; f++) b = null != a[f] && Lf(a[f].match(Kf)[3] || null, !0) || "", c *= 4, b && (d && b == d ? c += 3 : dj(a[f]) ? c += 2 : b && 0 <= ej(b) && (c += 1));
        return c
    };
    m.Sg = function(a) {
        a = a || this.pa;
        for (var b = [], c = a.length - 1; 0 < c; c--) {
            var d = a[c];
            d && null != d.url && b.push(Lf(d.url.match(Kf)[3] || null, !0))
        }
        return fj(b)
    };
    m.rh = function(a) {
        a = a || (this.ma.document && this.ma.document.scripts ? this.ma.document.scripts : []);
        if (!a) return 0;
        for (var b = [], c = a.length - 1; 0 <= c; c--) {
            var d = a[c];
            d && null != d.src && b.push(Lf(d.src.match(Kf)[3] || null, !0))
        }
        return fj(b)
    };
    var ij = function(a) {
            var b = a || v,
                c = [],
                d = null;
            do {
                var e = b;
                if (J(e)) {
                    var f = e.location.href;
                    d = e.document && e.document.referrer || null;
                    var g = !0
                } else f = d, d = null, g = !1;
                c.push(new jj(f || "", e, g));
                try {
                    b = e.parent
                } catch (h) {
                    b = null
                }
            } while (b && e != b);
            e = 0;
            for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
            e = a || v;
            if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)
                for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.ke = !0);
            return c
        },
        kj = function(a, b) {
            this.hf = a;
            this.jf =
                b
        },
        jj = function(a, b, c, d, e) {
            this.url = a;
            this.Ba = b;
            this.ke = !!d;
            this.depth = "number" === typeof e ? e : null
        };
    var lj = function(a, b, c, d, e) {
            this.qe = c || 4E3;
            this.ob = a || "&";
            this.Uf = b || ",$";
            this.Xb = void 0 !== d ? d : "trn";
            this.Aj = e || null;
            this.ud = !1;
            this.vb = {};
            this.ji = 0;
            this.eb = []
        },
        mj = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        oj = function(a, b, c, d, e) {
            var f = [];
            Wf(a, function(g, h) {
                (g = nj(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        nj = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(nj(a[g], b,
                        c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(oj(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        };
    m = lj.prototype;
    m.sd = function(a, b) {
        this.eb.push(a);
        this.vb[a] = b
    };
    m.ub = function(a, b, c) {
        this.eb.push(a);
        this.vb[a] = mj(b, c)
    };
    m.Pf = function(a, b) {
        var c = this.ji++;
        this.sd(c, mj(a, b))
    };
    m.fj = function(a) {
        this.ud = a
    };
    m.zh = function(a, b, c, d) {
        a = a + "//" + b + c;
        var e = this.gh() - c.length - d.length;
        if (0 > e) return "";
        this.eb.sort(function(n, q) {
            return n - q
        });
        c = null;
        b = "";
        for (var f = 0; f < this.eb.length; f++)
            for (var g = this.eb[f], h = this.vb[g], k = 0; k < h.length; k++) {
                if (!e) {
                    c = null == c ? g : c;
                    break
                }
                var l = oj(h[k], this.ob, this.Uf);
                if (l) {
                    l = b + l;
                    if (e >= l.length) {
                        e -= l.length;
                        a += l;
                        b = this.ob;
                        break
                    }
                    this.ud && (b = e, l[b - 1] == this.ob && --b, a += l.substr(0, b), b = this.ob, e = 0);
                    c = null == c ? g : c
                }
            }
        f = "";
        this.Xb && null != c && (c = this.Aj || c, f = b + this.Xb + "=" + c);
        return a + f + d
    };
    m.gh = function() {
        if (!this.Xb) return this.qe;
        var a = 1,
            b;
        for (b in this.vb) a = b.length > a ? b.length : a;
        return this.qe - this.Xb.length - a - this.ob.length - 1
    };
    var pj = function(a, b, c, d) {
        this.zi = a;
        this.qg = b;
        this.vi = c;
        this.mg = d;
        this.bf = Math.random()
    };
    pj.prototype.hj = function(a) {
        0 <= a && 1 >= a && (this.bf = a)
    };
    pj.prototype.Nb = function(a, b, c, d, e) {
        if (this.nj(!!c, d)) try {
            if (b instanceof lj) var f = b;
            else f = new lj, Wf(b, function(h, k) {
                f.Pf(k, h)
            });
            var g = f.zh(this.zi, this.qg, this.vi + a + "&", "");
            g && ("undefined" === typeof e ? jh(v, g) : jh(v, g, e))
        } catch (h) {}
    };
    pj.prototype.nj = function(a, b) {
        b = b || this.mg;
        a = a ? this.bf : Math.random();
        return a < b
    };
    var qj = null,
        rj = function(a) {
            this.la = {};
            this.W = {};
            a = a || [];
            for (var b = 0, c = a.length; b < c; ++b) this.W[a[b]] = ""
        },
        sj = function(a) {
            var b = new rj;
            Wf(a.la, function(c, d) {
                b.la[d] = c
            });
            Wf(a.W, function(c, d) {
                b.Kg(c, d)
            });
            return b
        },
        tj = function() {
            if (null === qj) {
                qj = "";
                try {
                    var a = "";
                    try {
                        a = v.top.location.hash
                    } catch (c) {
                        a = v.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        qj = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return qj
        };
    m = rj.prototype;
    m.qj = function() {
        return Nd(!0)
    };
    m.Kg = function(a, b) {
        this.W[b] = a
    };
    m.Ze = function(a, b) {
        return "" == a ? "" : b ? this.W.hasOwnProperty(b) ? this.W[b] = a : "" : (this.la[a] = !0, a)
    };
    m.Hb = function(a) {
        return this.W.hasOwnProperty(a) ? this.W[a] : ""
    };
    m.Wd = function() {
        var a = [];
        Wf(this.la, function(c, d) {
            a.push(d)
        });
        var b = function(c) {
            "" != c && a.push(c)
        };
        Wf(this.W, b);
        return a
    };
    var uj = function() {
            var a = v.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : z()
        },
        vj = function(a) {
            a = void 0 === a ? v : a;
            return (a = a.performance) && a.now ? a.now() : null
        };
    var wj = function(a, b, c, d, e) {
        d = void 0 === d ? 0 : d;
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var xj = v.performance,
        yj = !!(xj && xj.mark && xj.measure && xj.clearMarks),
        zj = xb(function() {
            var a;
            if (a = yj) a = tj(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        Aj = function(a, b) {
            this.events = [];
            this.Nh = b || v;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.ja = zj() || (null != c ? c : Math.random() < a)
        };
    Aj.prototype.disable = function() {
        this.ja = !1;
        this.events != this.Nh.google_js_reporting_queue && (zj() && fb(this.events, Bj), this.events.length = 0)
    };
    Aj.prototype.Fi = function(a) {
        !this.ja || 2048 < this.events.length || this.events.push(a)
    };
    var Bj = function(a) {
        a && xj && zj() && (xj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), xj.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Aj.prototype.start = function(a, b) {
        if (!this.ja) return null;
        var c = vj() || uj();
        a = new wj(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        xj && zj() && xj.mark(b);
        return a
    };
    Aj.prototype.end = function(a) {
        if (this.ja && "number" === typeof a.value) {
            var b = vj() || uj();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            xj && zj() && xj.mark(b);
            this.Fi(a)
        }
    };
    Aj.prototype.gi = function(a, b) {
        if (!this.ja) return b();
        a = this.start(String(a), 3);
        try {
            var c = b()
        } catch (d) {
            throw Bj(a), d;
        }
        this.end(a);
        return c
    };
    var Cj = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        this.Nc = a;
        this.zg = b;
        this.ad = c;
        this.dc = null;
        this.yg = this.Mb;
        this.Wb = d;
        this.hd = !1
    };
    m = Cj.prototype;
    m.xe = function() {
        return this.Nc
    };
    m.Ye = function(a) {
        this.dc = a
    };
    m.gj = function(a) {
        this.ad = a
    };
    m.jj = function(a) {
        this.hd = a
    };
    m.Rc = function(a, b, c) {
        try {
            if (this.Wb && this.Wb.ja) {
                var d = this.Wb.start(a.toString(), 3);
                var e = b();
                this.Wb.end(d)
            } else e = b()
        } catch (g) {
            b = this.ad;
            try {
                Bj(d);
                var f = new bj(g, {
                    message: Dj(g)
                });
                b = this.yg(a, f, void 0, c)
            } catch (h) {
                this.Mb(217, h)
            }
            if (!b) throw g;
        }
        return e
    };
    m.Sc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            var k = g;
            g = function() {
                return b.apply(c, k)
            };
            return e.Rc(a, g, d)
        }
    };
    m.Mb = function(a, b, c, d, e) {
        e = e || this.zg;
        try {
            var f = new lj;
            f.fj(!0);
            f.ub(1, "context", a);
            b.error && b.meta && b.id || (b = new bj(b, {
                message: Dj(b)
            }));
            b.msg && f.ub(2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            this.Mf(g, d);
            f.sd(3, [g]);
            var h = ij(),
                k = new jj(v.location.href, v, !0, !1);
            b = null;
            var l = h.length - 1;
            for (d = l; 0 <= d; --d) {
                var n = h[d];
                !b && gj.test(n.url) && (b = n);
                if (n.url && !n.ke) {
                    k = n;
                    break
                }
            }
            n = null;
            var q = 0 != k.depth,
                u = h.length && h[l].url;
            q && u && (n = h[l]);
            var t = new kj(k, n, b);
            t.jf && f.ub(4, "top", t.jf.url || "");
            f.ub(5, "url",
                t.hf.url || "");
            this.Nc.Nb(e, f, this.hd, c)
        } catch (w) {
            try {
                this.Nc.Nb(e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Dj(w),
                    url: t && t.hf.url
                }, this.hd, c)
            } catch (y) {}
        }
        return this.ad
    };
    m.Mf = function(a, b) {
        if (this.dc) try {
            this.dc(a)
        } catch (c) {}
        if (b) try {
            b(a)
        } catch (c) {}
    };
    var Dj = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var Ej, Fj, Gj, Hj = L(),
        Ij = new Aj(1, Hj),
        Jj = function() {
            var a = void 0;
            a = void 0 === a ? H : a;
            return a = (a = "http:" === a.location.protocol) ? "http:" : "https:"
        },
        Kj = function(a) {
            null != a && (Hj.google_measure_js_timing = a);
            Hj.google_measure_js_timing || Ij.disable()
        },
        Lj = function(a) {
            var b = H.jerExpIds;
            if (x(b) && 0 !== b.length) {
                var c = a.eid;
                c ? (b = [].concat(p(c.split(",")), p(b)), qb(b), a.eid = b.join(",")) : a.eid = b.join(",")
            }
        },
        Mj = function(a) {
            var b = H.jerUserAgent;
            b && (a.useragent = b)
        },
        Nj = function() {
            Ej = new pj(Jj(), "pagead2.googlesyndication.com",
                "/pagead/gen_204?id=", .01);
            "number" !== typeof Hj.google_srt && (Hj.google_srt = Math.random());
            Ej.hj(Hj.google_srt);
            Fj = new Cj(Ej, "jserror", !0, Ij);
            Fj.Ye(function(b) {
                Lj(b);
                Gj && (b.jc = Gj);
                Mj(b)
            });
            Fj.jj(!0);
            "complete" == Hj.document.readyState ? Kj() : Ij.ja && K(Hj, "load", function() {
                Kj()
            });
            var a = af.currentScript;
            Gj = a ? a.dataset.jc : ""
        };
    Nj();
    var Oj = function(a) {
            Fj.Ye(function(b) {
                fb(a, function(c) {
                    c(b)
                });
                Lj(b);
                Gj && (b.jc = Gj);
                Mj(b)
            })
        },
        O = function(a, b, c, d) {
            return Fj.Sc(a, b, c, d)
        },
        Q = function(a, b, c, d) {
            Ej.Nb(a, b, !0, c, d)
        },
        Pj = function(a) {
            var b = Jj();
            return ti(a, b + "//pagead2.googlesyndication.com/pagead/gen_204")
        },
        Qj = function(a, b) {
            Q("rmvasft", {
                code: a,
                branch: b ? "exp" : "cntr"
            })
        };
    var Rj = function(a, b, c) {
            c = "google_debug" + (c ? "=" + c : "") + "&";
            return [b ? c : "", "xpc=", a, "&p=", encodeURIComponent(v.document.location.protocol), "//", encodeURIComponent(v.document.location.host)].join("")
        },
        Sj = function(a, b, c) {
            c = c ? encodeURIComponent : function(f) {
                return f
            };
            var d = eg(v.document.URL),
                e = 0 < d.length;
            return a + (-1 == a.indexOf(c("?")) ? c("?") : c("&")) + c(Rj(b, e, d))
        };
    var Tj = function(a) {
        this.Tb = a
    };
    Tj.prototype.Ya = function(a) {
        var b = [];
        this.Zc(a, b);
        return b.join("")
    };
    Tj.prototype.Zc = function(a, b) {
        if (null == a) b.push("null");
        else {
            if ("object" == typeof a) {
                if (x(a)) {
                    this.aj(a, b);
                    return
                }
                if (a instanceof String || a instanceof Number || a instanceof Boolean) a = a.valueOf();
                else {
                    this.cj(a, b);
                    return
                }
            }
            switch (typeof a) {
                case "string":
                    this.Xe(a, b);
                    break;
                case "number":
                    this.bj(a, b);
                    break;
                case "boolean":
                    b.push(String(a));
                    break;
                case "function":
                    b.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof a);
            }
        }
    };
    var Uj = {
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
        Vj = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
    Tj.prototype.Xe = function(a, b) {
        b.push('"', a.replace(Vj, function(c) {
            var d = Uj[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Uj[c] = d);
            return d
        }), '"')
    };
    Tj.prototype.bj = function(a, b) {
        b.push(isFinite(a) && !isNaN(a) ? String(a) : "null")
    };
    Tj.prototype.aj = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var d = "", e = 0; e < c; e++) b.push(d), d = a[e], this.Zc(this.Tb ? this.Tb.call(a, String(e), d) : d, b), d = ",";
        b.push("]")
    };
    Tj.prototype.cj = function(a, b) {
        b.push("{");
        var c = "",
            d;
        for (d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = a[d];
                "function" != typeof e && (b.push(c), this.Xe(d, b), b.push(":"), this.Zc(this.Tb ? this.Tb.call(a, d, e) : e, b), c = ",")
            }
        b.push("}")
    };
    var Wj = function(a) {
        this.Ub = this.Yc = null;
        Oa(a) ? this.Ub = a : this.Yc = a
    };
    Wj.prototype.getVerifier = function(a) {
        return this.Yc ? this.Yc[a] : null
    };
    Wj.prototype.getSchema = function(a) {
        return this.Ub ? this.Ub(a) : null
    };
    Wj.prototype.doesReturnAnotherSchema = function() {
        return this.Ub ? !0 : !1
    };
    var Xj = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = function(g) {
                try {
                    var h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            K(a, "message", e);
            var f = !1;
            return function() {
                var g = !1;
                f || (f = !0, g = hh(a, "message", e));
                return g
            }
        },
        Yj = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = Xj(a, b, wb(c, function() {
                return e()
            }), d);
            return e
        },
        Zj = function(a, b, c) {
            this.Fg = b;
            this.Gg = c
        };
    ab(Zj, Error);
    var ak = function(a, b, c, d, e) {
            if (x(a)) {
                var f = a;
                for (var g = 0; g < a.length; g++) a[g] = ak(a[g], b, c, d, e)
            } else if (Pa(a)) {
                if (b.doesReturnAnotherSchema())
                    if (f = b.getSchema(a)) {
                        if (b = f, b.doesReturnAnotherSchema()) return ak(a, b, c, d, e)
                    } else throw new Zj("in_sc", c ? c : "root", a);
                f = {};
                for (g in a)
                    if (Object.prototype.hasOwnProperty.call(a, g)) {
                        d = b.getVerifier(g);
                        c = a[g];
                        var h = b;
                        if (d) {
                            var k = d.predicate || d;
                            if (Oa(k)) {
                                h = k(c);
                                if (!h) {
                                    if (!d || !d.nullOnInvalid) throw new Zj("sm", g, c);
                                    e && (e[g] = !0);
                                    f[g] = null;
                                    continue
                                }
                                if (h instanceof Wj) d =
                                    null;
                                else {
                                    f[g] = c;
                                    continue
                                }
                            }
                        } else if (!Pa(c)) continue;
                        f[g] = ak(c, h, g, d, e)
                    }
            } else if (f = a, b = d ? d.predicate || d : void 0, b instanceof RegExp && !b.test("string" === typeof a || void 0 == a ? a : String(a)) || Oa(b) && !b(a)) {
                if (!d || !d.nullOnInvalid) throw new Zj("sm", c, a);
                e && (e[c] = !0);
                f = null
            }
            return f
        },
        bk = function(a, b, c, d, e, f, g) {
            return Xj(a, b, function(h, k) {
                var l = d;
                try {
                    f && (h = f(h));
                    var n = g ? {} : null,
                        q = ak(h, l, null, null, n);
                    c(q, k);
                    if (g) {
                        l = [];
                        q = 0;
                        for (var u in n) l[q++] = u;
                        var t = l;
                        t.length && g(t)
                    }
                } catch (w) {
                    if (w instanceof Zj) e(w.Fg, w.Gg,
                        h, k);
                    else throw w;
                }
            })
        },
        ck = function(a, b, c, d, e) {
            if (!(0 >= e)) {
                var f = a,
                    g = c,
                    h = d;
                g.googMsgType = b;
                f.postMessage((new Tj(void 0)).Ya(g), h);
                if (a = a.frames)
                    for (f = 0; f < a.length; ++f) 1 < e && ck(a[f], b, c, d, --e)
            }
        };
    var dk = new Wj({
            notify: /^expandable-xpc-ready$/
        }),
        fk = function(a, b, c, d) {
            ng(d.origin, Gh) && "expandable-xpc-ready" == c.notify && ek(a, b)
        },
        ek = function(a, b) {
            var c = a.yc;
            c.google_eas_queue = c.google_eas_queue || [];
            c.google_eas_queue.push({
                a: a.id,
                b: a.url,
                c: a.width,
                d: a.height,
                e: a.ta,
                f: a.Bi,
                g: a.Vf,
                h: a.Mh,
                i: void 0
            });
            a = Li($a(function(d) {
                Rf(c.document, d)
            }, b));
            v.setTimeout(O(220, a), 0)
        };
    var gk = {
            ak: "google_ads_preview",
            hk: "google_mc_lab",
            xf: "google_anchor_debug",
            wf: "google_bottom_anchor_debug",
            Ck: "google_ifsl_debug",
            Ek: "google_ia_debug",
            Ak: "google_scr_debug",
            Fk: "google_ia_debug_allow_onclick",
            Qk: "googleads",
            yf: "google_pedestal_debug",
            Xk: "google_resize_debug",
            el: "google_shoppable_images_debug",
            fl: "google_shoppable_images_cookie",
            gl: "google_shoppable_images_forced",
            Yk: "google_responsive_slot_debug",
            $k: "google_responsive_slot_preview",
            Zk: "google_responsive_dummy_ad"
        },
        hk = {},
        ik = (hk.google_bottom_anchor_debug =
            1, hk.google_anchor_debug = 2, hk.google_ia_debug = 8, hk.google_resize_debug = 16, hk.google_ifsl_debug = 32, hk.google_scr_debug = 9, hk.googleads = 2, hk.google_pedestal_debug = 30, hk);
    var kk = function(a, b) {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = jk(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        jk = function(a) {
            var b = "";
            xi(a.split("_"), function(c) {
                b += c.substr(0, 2)
            });
            return b
        };
    var lk = function() {
        this.Db = this.Db;
        this.Pb = this.Pb
    };
    lk.prototype.Db = !1;
    lk.prototype.nc = function() {
        this.Db || (this.Db = !0, this.K())
    };
    lk.prototype.K = function() {
        if (this.Pb)
            for (; this.Pb.length;) this.Pb.shift()()
    };
    var nk = function() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.isReactiveTagFirstOnPage = this.wasReactiveAdConfigHandlerRegistered = this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.adRegion = null;
            this.improveCollisionDetection = 1;
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new mk
        },
        ok = function(a) {
            var b = a;
            b.google_reactive_ads_global_state ?
                null == b.google_reactive_ads_global_state.floatingAdsStacking && (b.google_reactive_ads_global_state.floatingAdsStacking = new mk) : b.google_reactive_ads_global_state = new nk;
            return a.google_reactive_ads_global_state
        },
        mk = function() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        };
    var pk = 728 * 1.38,
        qk = function(a) {
            return a != a.top ? 512 : 0
        },
        sk = function(a, b) {
            b = void 0 === b ? 420 : b;
            return (a = rk(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
        },
        tk = function(a) {
            var b = rk(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        rk = function(a) {
            a = a.document;
            var b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        uk = function(a, b) {
            var c = rk(a);
            return b ? (a = rk(a).clientHeight, c.scrollHeight == a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
        },
        vk = function(a,
            b) {
            return a.adCount ? 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) && 27 != b && 26 != b ? 1 <= a : !1 : !1
        },
        wk = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        xk = function(a) {
            return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
        },
        yk = function(a, b) {
            b = b || {};
            var c;
            x(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    var d = c[a];
                    if ("key" in d && "value" in d) {
                        var e = d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        };
    var zk = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        lk.call(this);
        var e = this;
        this.A = a;
        this.Nd = b;
        this.xe = c;
        this.Qh = d;
        this.re = {};
        this.yi = this.Nd.Sc(168, function(f, g) {
            return void e.hi(f, g)
        });
        this.Lj = this.Nd.Sc(169, function(f, g) {
            e.xe.Nb("ras::xsf", {
                c: g.data.substring(0, 500),
                u: e.A.location.href.substring(0, 500)
            }, !0, .1);
            return f = !0
        });
        this.Gc = [];
        this.Ac()
    };
    ka(zk, lk);
    m = zk.prototype;
    m.Ac = function() {
        this.Ta(this.re);
        this.me(this.A)
    };
    m.me = function(a) {
        this.Gc.push(Xj(a, "sth", this.yi, this.Lj))
    };
    m.hi = function(a, b) {
        try {
            if (!this.he(b.origin)) return
        } catch (e) {
            return
        }
        var c = a.msg_type,
            d;
        "string" === typeof c && (d = this.re[c]) && d.call(this, a, b)
    };
    m.he = function(a) {
        return ng(a, this.Qh)
    };
    m.K = function() {
        for (var a = ca(this.Gc), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.Gc.length = 0;
        lk.prototype.K.call(this)
    };
    var R = function(a) {
        zk.call(this, a, Fj, Ej, Gh);
        this.A = a
    };
    ka(R, zk);
    var Ak = function(a, b, c) {
        this.bi = c;
        this.kg = a;
        this.Wc = b;
        this.Ob = 0;
        this.Kb = null
    };
    Ak.prototype.get = function() {
        if (0 < this.Ob) {
            this.Ob--;
            var a = this.Kb;
            this.Kb = a.next;
            a.next = null
        } else a = this.kg();
        return a
    };
    Ak.prototype.put = function(a) {
        this.Wc(a);
        this.Ob < this.bi && (this.Ob++, a.next = this.Kb, this.Kb = a)
    };
    var Bk = [],
        Ck = !1;
    var Dk = function(a) {
            v.setTimeout(function() {
                throw a;
            }, 0)
        },
        Ek, Fk = function() {
            var a = v.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function() {
                var e = xf(document, "IFRAME");
                e.style.display = "none";
                Dd(e, Wb(Ob(Pb)));
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(td(Ad));
                e.close();
                var g = "callImmediate" + Math.random(),
                    h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = Ua(function(k) {
                    if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, h)
                    }
                }
            });
            if ("undefined" !== typeof a && !ld()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.Ad;
                        c.Ad = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        Ad: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in xf(document, "SCRIPT") ? function(e) {
                var f = xf(document,
                    "SCRIPT");
                f.onreadystatechange = function() {
                    f.onreadystatechange = null;
                    f.parentNode.removeChild(f);
                    f = null;
                    e();
                    e = null
                };
                document.documentElement.appendChild(f)
            } : function(e) {
                v.setTimeout(e, 0)
            }
        },
        Gk = vb;
    if (Ck)
        for (var Hk = 0; Hk < Bk.length; Hk++) Gk = Ua(Bk[Hk].Hl, Bk[Hk]);
    var Ik = function() {
            this.Zb = this.cb = null
        },
        Kk = new Ak(function() {
            return new Jk
        }, function(a) {
            a.reset()
        }, 100);
    Ik.prototype.add = function(a, b) {
        var c = this.yh();
        c.set(a, b);
        this.Zb ? this.Zb.next = c : this.cb = c;
        this.Zb = c
    };
    Ik.prototype.remove = function() {
        var a = null;
        this.cb && (a = this.cb, this.cb = this.cb.next, this.cb || (this.Zb = null), a.next = null);
        return a
    };
    Ik.prototype.Wi = function(a) {
        Kk.put(a)
    };
    Ik.prototype.yh = function() {
        return Kk.get()
    };
    var Jk = function() {
        this.next = this.scope = this.ib = null
    };
    Jk.prototype.set = function(a, b) {
        this.ib = a;
        this.scope = b;
        this.next = null
    };
    Jk.prototype.reset = function() {
        this.next = this.scope = this.ib = null
    };
    var Pk = function(a, b) {
            Lk || Mk();
            Nk || (Lk(), Nk = !0);
            Ok.add(a, b)
        },
        Lk, Mk = function() {
            if (v.Promise && v.Promise.resolve) {
                var a = v.Promise.resolve(void 0);
                Lk = function() {
                    a.then(Qk)
                }
            } else Lk = function() {
                var b = Qk;
                b = Gk(b);
                !Oa(v.setImmediate) || v.Window && v.Window.prototype && !F("Edge") && v.Window.prototype.setImmediate == v.setImmediate ? (Ek || (Ek = Fk()), Ek(b)) : v.setImmediate(b)
            }
        },
        Nk = !1,
        Ok = new Ik,
        Qk = function() {
            for (var a; a = Ok.remove();) {
                try {
                    a.ib.call(a.scope)
                } catch (b) {
                    Dk(b)
                }
                Ok.Wi(a)
            }
            Nk = !1
        };
    var Rk = function(a, b) {
            this.v = 0;
            this.Xa = void 0;
            this.Ha = this.ia = this.ya = null;
            this.Jb = this.pc = !1;
            if (a != Ha) try {
                var c = this;
                a.call(b, function(d) {
                    c.Wa(2, d)
                }, function(d) {
                    c.Wa(3, d)
                })
            } catch (d) {
                this.Wa(3, d)
            }
        },
        Sk = function() {
            this.next = this.context = this.Pa = this.nb = this.ua = null;
            this.wb = !1
        };
    Sk.prototype.reset = function() {
        this.context = this.Pa = this.nb = this.ua = null;
        this.wb = !1
    };
    var Tk = new Ak(function() {
            return new Sk
        }, function(a) {
            a.reset()
        }, 100),
        Uk = function(a, b, c) {
            var d = Tk.get();
            d.nb = a;
            d.Pa = b;
            d.context = c;
            return d
        },
        Wk = function() {
            var a, b, c = new Rk(function(d, e) {
                a = d;
                b = e
            });
            return new Vk(c, a, b)
        };
    Rk.prototype.then = function(a, b, c) {
        return this.rd(Oa(a) ? a : null, Oa(b) ? b : null, c)
    };
    Rk.prototype.$goog_Thenable = !0;
    m = Rk.prototype;
    m.vj = function(a, b, c) {
        this.qd(Uk(a || Ha, b || null, c))
    };
    m.ef = function(a, b) {
        return this.rd(null, a, b)
    };
    m.cancel = function(a) {
        if (0 == this.v) {
            var b = new Xk(a);
            Pk(function() {
                this.zd(b)
            }, this)
        }
    };
    m.zd = function(a) {
        0 == this.v && (this.ya ? (this.ya.dg(this, a), this.ya = null) : this.Wa(3, a))
    };
    m.dg = function(a, b) {
        if (this.ia) {
            for (var c = 0, d = null, e = null, f = this.ia; f && (f.wb || (c++, f.ua == a && (d = f), !(d && 1 < c))); f = f.next) d || (e = f);
            d && (0 == this.v && 1 == c ? this.zd(b) : (e ? this.Li(e) : this.ze(), this.Pd(d, 3, b)))
        }
    };
    m.qd = function(a) {
        this.Bh() || 2 != this.v && 3 != this.v || this.Te();
        this.Ci(a)
    };
    m.rd = function(a, b, c) {
        var d = Uk(null, null, null);
        d.ua = new Rk(function(e, f) {
            d.nb = a ? function(g) {
                try {
                    var h = a.call(c, g);
                    e(h)
                } catch (k) {
                    f(k)
                }
            } : e;
            d.Pa = b ? function(g) {
                try {
                    var h = b.call(c, g);
                    void 0 === h && g instanceof Xk ? f(g) : e(h)
                } catch (k) {
                    f(k)
                }
            } : f
        });
        d.ua.ya = this;
        this.qd(d);
        return d.ua
    };
    m.Dj = function(a) {
        this.v = 0;
        this.Wa(2, a)
    };
    m.Ej = function(a) {
        this.v = 0;
        this.Wa(3, a)
    };
    m.Wa = function(a, b) {
        if (0 == this.v) {
            this === b && (a = 3, b = new TypeError("Promise cannot resolve to itself"));
            this.v = 1;
            a: {
                var c = b,
                    d = this.Dj,
                    e = this.Ej;
                if (c instanceof Rk) {
                    c.vj(d, e, this);
                    var f = !0
                } else {
                    if (c) try {
                        var g = !!c.$goog_Thenable
                    } catch (k) {
                        g = !1
                    } else g = !1;
                    if (g) c.then(d, e, this), f = !0;
                    else {
                        if (Pa(c)) try {
                            var h = c.then;
                            if (Oa(h)) {
                                Yk(c, h, d, e, this);
                                f = !0;
                                break a
                            }
                        } catch (k) {
                            e.call(this, k);
                            f = !0;
                            break a
                        }
                        f = !1
                    }
                }
            }
            f || (this.Xa = b, this.v = a, this.ya = null, this.Te(), 3 != a || b instanceof Xk || Zk(this, b))
        }
    };
    var Yk = function(a, b, c, d, e) {
        var f = !1,
            g = function(k) {
                f || (f = !0, c.call(e, k))
            },
            h = function(k) {
                f || (f = !0, d.call(e, k))
            };
        try {
            b.call(a, g, h)
        } catch (k) {
            h(k)
        }
    };
    m = Rk.prototype;
    m.Te = function() {
        this.pc || (this.pc = !0, Pk(this.Bg, this))
    };
    m.Bh = function() {
        return !!this.ia
    };
    m.Ci = function(a) {
        this.Ha ? this.Ha.next = a : this.ia = a;
        this.Ha = a
    };
    m.ze = function() {
        var a = null;
        this.ia && (a = this.ia, this.ia = a.next, a.next = null);
        this.ia || (this.Ha = null);
        return a
    };
    m.Li = function(a) {
        a.next == this.Ha && (this.Ha = a);
        a.next = a.next.next
    };
    m.Bg = function() {
        for (var a; a = this.ze();) this.Pd(a, this.v, this.Xa);
        this.pc = !1
    };
    m.Pd = function(a, b, c) {
        3 == b && a.Pa && !a.wb && this.Mi();
        if (a.ua) a.ua.ya = null, $k(a, b, c);
        else try {
            a.wb ? a.nb.call(a.context) : $k(a, b, c)
        } catch (d) {
            al.call(null, d)
        }
        Tk.put(a)
    };
    var $k = function(a, b, c) {
        2 == b ? a.nb.call(a.context, c) : a.Pa && a.Pa.call(a.context, c)
    };
    Rk.prototype.Mi = function() {
        var a;
        for (a = this; a && a.Jb; a = a.ya) a.Jb = !1
    };
    var Zk = function(a, b) {
            a.Jb = !0;
            Pk(function() {
                a.Jb && al.call(null, b)
            })
        },
        al = Dk,
        Xk = function(a) {
            bb.call(this, a)
        };
    ab(Xk, bb);
    Xk.prototype.name = "cancel";
    var Vk = function(a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c
    };
    var S = function(a, b, c, d) {
        a = void 0 === a ? null : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? [] : c;
        d = void 0 === d ? [] : d;
        if (a && b || !a && !b) throw Error("Invalid model");
        this.nodeType = a ? 0 : 1;
        this.tagName = (a || "DIV").toString();
        this.text = b || "";
        this.attributes = c;
        this.children = d;
        this.Id = Wk()
    };
    m = S.prototype;
    m.F = function(a, b) {
        if (!this.Vh(a)) throw Error("Unsupported attr");
        this.attributes.push([a, b.toString()]);
        return this
    };
    m.G = function(a) {
        this.children.push(a);
        return this
    };
    m.mb = function(a) {
        this.Id.promise.then(a);
        return this
    };
    m.Vh = function(a) {
        switch (a) {
            case "aria-hidden":
            case "class":
            case "dir":
            case "href":
            case "id":
            case "src":
            case "target":
                return !0
        }
        return !1
    };
    m.create = function(a, b) {
        switch (this.nodeType) {
            case 0:
                a = a.createElement(this.tagName.toString());
                for (var c = ca(this.attributes), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    d = ca(d);
                    var e = d.next().value;
                    d = d.next().value;
                    switch (e) {
                        case "aria-hidden":
                        case "class":
                        case "dir":
                        case "id":
                        case "target":
                            a.setAttribute(e, d);
                            break;
                        case "href":
                            e = a;
                            var f = Pj(611);
                            d = d instanceof C || !ri.test(d) ? d : new C(qc, d);
                            si(d, f);
                            d = d instanceof C ? d : xc(d);
                            e.href = sc(d);
                            break;
                        case "src":
                            e = a;
                            si(d, Pj(611));
                            d instanceof C || (f = /^data:image\//i.test(d),
                                d = xc(d, f));
                            e.src = sc(d);
                            break;
                        default:
                            throw Error("Bad attr");
                    }
                }
                break;
            case 1:
                a = a.createTextNode(this.text);
                break;
            default:
                throw Error("Bad nodeType");
        }
        b.appendChild(a);
        this.Id.resolve(a);
        return a
    };
    var bl = function(a, b, c) {
        c = ca(c);
        for (var d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = d.create(a, b);
            bl(a, e, d.children)
        }
    };
    var cl = function(a, b, c, d, e, f) {
        lk.call(this);
        this.ta = a;
        this.status = 1;
        this.Ra = b;
        this.pb = c;
        this.Hj = d;
        this.Sh = !!e;
        this.Eb = Math.random();
        this.$c = {};
        this.Ab = this.Fd = null;
        this.se = Ua(this.Di, this);
        this.We = f
    };
    ka(cl, lk);
    m = cl.prototype;
    m.Di = function(a) {
        a.origin !== this.pb || !this.Sh && a.source != this.Ra || this.Ei(a)
    };
    m.Ei = function(a) {
        var b = null;
        try {
            b = JSON.parse(a.data)
        } catch (d) {}
        if (Pa(b)) {
            a = b.c;
            var c = b.i;
            if (a === this.ta && c != this.Eb && (this.isConnected() || this.pi(), a = b.s, b = b.p, "string" === typeof a && ("string" === typeof b || Pa(b))))
                if (this.$c.hasOwnProperty(a)) this.$c[a](b);
                else this.Fd && this.Fd(a, b)
        }
    };
    m.Ve = function() {
        var a = {};
        a.c = this.ta;
        a.i = this.Eb;
        this.We && (a.e = this.We);
        this.Ra.postMessage((new Tj(void 0)).Ya(a), this.pb)
    };
    m.pi = function() {
        try {
            this.status = 2, this.Ve(), this.Ab && (this.Ab(), this.Ab = null)
        } catch (a) {}
    };
    m.ye = function() {
        if (1 === this.status) {
            try {
                this.Ra.postMessage && this.Ve()
            } catch (a) {}
            window.setTimeout(Ua(this.ye, this), 50)
        }
    };
    m.isConnected = function() {
        return 2 === this.status
    };
    m.connect = function(a) {
        a && (this.Ab = a);
        K(window, "message", this.se);
        this.Hj && this.ye()
    };
    m.Ji = function(a, b, c) {
        this.$c[a] = c ? function(d) {
            if ("string" === typeof d) try {
                d = JSON.parse(d)
            } catch (e) {
                return
            }
            b(d)
        } : b
    };
    m.send = function(a, b) {
        var c = {};
        c.c = this.ta;
        c.i = this.Eb;
        c.s = a;
        c.p = b;
        try {
            this.Ra.postMessage((new Tj(void 0)).Ya(c), this.pb)
        } catch (d) {}
    };
    m.K = function() {
        this.status = 3;
        hh(window, "message", this.se);
        lk.prototype.K.call(this)
    };
    var dl = function(a, b, c, d, e) {
        cl.call(this, a, b, c, d);
        this.ue = e
    };
    ka(dl, cl);
    dl.prototype.send = function(a, b) {
        this.kf(a, b)
    };
    dl.prototype.$f = function(a, b) {
        this.kf(a, b)
    };
    dl.prototype.jg = function() {
        this.$f("apmc:bc:cr", {})
    };
    dl.prototype.kf = function(a, b) {
        var c = this;
        b = void 0 === b ? {} : b;
        var d = {},
            e = (d.c = this.ta, d.i = this.Eb, d.s = a, d.p = b, d);
        this.ue && (e.msg_type = this.ue);
        G ? v.setTimeout(function() {
            c.Ra.postMessage(JSON.stringify(e), c.pb)
        }, 0) : this.Ra.postMessage(JSON.stringify(e), this.pb)
    };
    var el = function(a, b) {
        if (!b.source || !ng(b.origin, Gh)) throw Q("mcca", {
            context: "badinit"
        }), Error("Bad eventData");
        lk.call(this);
        var c = this;
        this.channel = new dl(a, b.source, b.origin, !1);
        this.channel.connect();
        setTimeout(function() {
            c.channel.jg()
        }, 50)
    };
    ka(el, lk);
    el.prototype.K = function() {
        this.channel.nc();
        lk.prototype.K.call(this)
    };
    var fl = function(a) {
        R.call(this, a);
        this.mc = this.I = this.na = this.Z = null;
        this.Qd = this.Dc = !1
    };
    ka(fl, R);
    m = fl.prototype;
    m.Uc = function(a, b) {
        if (this.Z && this.Z.channel) this.Z.channel.Ji(a, b);
        else throw Error("register failed");
    };
    m.Vb = function(a, b) {
        if (this.Z && this.Z.channel) this.Z.channel.send(a, b);
        else throw Error("send failed");
    };
    m.ai = function(a, b) {
        var c = this;
        b.source && Ti(b.source) && !this.Z && (this.Z = new el("mta-ch", b), this.Uc("show-lbx", Ua(this.Of, this)), this.Uc("chk-lbx", Ua(this.oi, this)), this.Uc("hide-lbx", function() {
            c.Ua()
        }))
    };
    m.Of = function(a) {
        var b = this;
        if (!this.A.document.getElementById("mta-lbx")) {
            this.I = xf(document, "IFRAME");
            this.I.setAttribute("id", "mta-lbx");
            a = Ua(this.Nf, this, a);
            K(this.I, "load", a);
            this.mc = $a(hh, this.I, "load", a);
            this.A.document.body.appendChild(this.I);
            if (this.na["d-elbbi"]) {
                this.A.history.pushState(null, "", "#");
                this.Dc = !0;
                var c = function() {
                    b.Dc = !1;
                    b.Ua(6);
                    hh(b.A, "popstate", c)
                };
                K(this.A, "popstate", c)
            }
            a = {};
            Q("gdn::mta-lbx", (a.exit = 0, a), 1)
        }
    };
    m.Nf = function() {
        var a = this;
        this.mc && this.mc();
        Wh(this.I, {
            display: "none",
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "0px",
            border: "0px",
            margin: "0px"
        });
        ei(Pc(D("body", {
                margin: "0px"
            }), D("#fe", {
                transition: "opacity 0.25s linear",
                opacity: "0"
            }), D("#fe.show", {
                opacity: "1"
            }), D(".hcb", {
                "float": "right"
            }), D('[dir="rtl"] .hcb', {
                "float": "left"
            }), D(".mtasw", {
                "background-color": "rgba(0,0,0,0.8)",
                bottom: "0px",
                opacity: "1",
                "overflow-y": "auto",
                position: "absolute",
                top: "0px",
                width: "100%"
            }), D(".mtas", {
                display: "block",
                "font-size": "16px",
                margin: "126px auto 96px auto",
                transition: "margin-top 0.25s linear",
                width: "320px",
                "max-width": "92%"
            }), D(".show .mtas", {
                "margin-top": "96px"
            }), D(".mtas span, .mta-menu span", {
                display: "inline-block"
            }), D(".mtas img", {
                height: "24px",
                "margin-top": "12px",
                width: "24px"
            }), D(".mtas div", {
                display: "block",
                width: "100%"
            }), D(".sh", {
                "background-color": "#4285f4",
                color: "#FFFFFF",
                display: "block",
                width: "100%",
                "border-top-left-radius": "3px",
                "-webkit-border-top-left-radius": "3px",
                "border-top-right-radius": "3px",
                "-webkit-border-top-right-radius": "3px"
            }), D(".sh>div", {
                padding: "24px",
                width: "auto"
            }), D(".sh span", {
                "font-size": "1.25em",
                "font-family": '"Roboto-Light", arial, sans-serif',
                "max-width": "224px"
            }), D(".sh img", {
                margin: "0",
                opacity: "0.4",
                cursor: "pointer"
            }), D(".bsctr", {
                "border-radius": "3px",
                "-webkit-border-radius": "3px",
                "background-color": "#FFFFFF",
                "box-shadow": "0 2px 7px 1px rgba(0,0,0,0.8)"
            }), D(".bs", {
                "border-top": "1px solid rgb(221, 221, 221)",
                padding: "0.8em 0px"
            }), D(".bs a", {
                cursor: "pointer"
            }), D(".bs a", {
                "box-sizing": "border-box",
                display: "block",
                padding: "0 24px",
                width: "100%"
            }), D(".bs a span", {
                color: "rgba(0, 0, 0, 0.54)",
                "font-family": '"Roboto-Medium", arial, sans-serif',
                "font-size": "1em",
                margin: "14px 0",
                "max-width": "224px"
            }), D(".mctr", {
                position: "absolute",
                top: "15px",
                left: "15px"
            }), D(".mbs", {
                padding: "5px 0",
                margin: "0",
                "box-shadow": "0 0 3px 3px rgba(0,0,0,0.2)"
            }), D(".mbs img", {
                height: "21px",
                margin: "3px 14px 0 0"
            }), D(".mbs a", {
                "box-sizing": "border-box",
                display: "table",
                padding: "0 14px",
                width: "100%"
            }),
            D(".mbs a div", {
                display: "table-cell",
                "vertical-align": "middle"
            }), D("div.ictr", {
                width: "35px"
            }), D(".mbs a span", {
                display: "inline-block",
                color: "rgba(0, 0, 0, 0.54)",
                "font-family": '"Roboto-Medium", arial, sans-serif',
                "font-size": "1em",
                margin: "11px 0",
                "max-width": "224px"
            })), this.I.contentDocument.head);
        this.I.contentDocument.head.appendChild(Ni("Roboto:300,500", this.I.contentDocument));
        var b = function() {
                a.Ua(2)
            },
            c = (new S("IMG")).F("class", "hcb").F("id", "ex").F("src", this.na["d-pgh"] + "/images/icons/material/system/2x/close_white_24dp.png").mb(function(k) {
                K(k,
                    "click", b)
            });
        c = (new S("DIV")).F("class", "sh").G((new S("DIV")).G((new S("SPAN")).G(new S(null, this.na["d-lht"]))).G(c));
        for (var d = (new S("DIV")).F("id", "fb").F("class", "bs"), e = this.na["d-oa"], f = {
                Ca: 0
            }; f.Ca < e.length; f = {
                Ca: f.Ca
            }, ++f.Ca) {
            var g = e[f.Ca];
            d.G((new S("A")).G((new S("SPAN")).G(new S(null, g))).mb(function(k) {
                return function(l) {
                    K(l, "click", function() {
                        a.si(k.Ca)
                    })
                }
            }(f)))
        }
        c = (new S("DIV")).F("class", "bsctr").G(c).G(d);
        if (this.na["d-els"]) {
            var h = function() {
                a.Ua(4)
            };
            d = (new S("DIV")).F("class", "bs").G((new S("A")).F("id",
                "as").F("target", "_blank").F("href", "//www.google.com/settings/ads/anonymous").G((new S("SPAN")).G(new S(null, this.na["d-sbt"]))).G((new S("IMG")).F("class", "hcb").F("src", this.na["d-siu"]))).mb(function(k) {
                K(k, "click", function() {
                    return setTimeout(h, 0)
                })
            });
            c.G(d)
        }
        c = (new S("DIV")).F("id", "fe").G((new S("DIV")).F("id", "sbg").F("class", "mtasw").G((new S("DIV")).F("class", "mtas").G((new S("DIV")).F("id", "sv").G(c).mb(function(k) {
            K(k, "click", function(l) {
                l.stopPropagation ? l.stopPropagation() : l.cancelBubble = !0
            })
        })))).mb(function(k) {
            v.setTimeout(function() {
                k.className = "show"
            }, 50)
        });
        bl(this.I.contentDocument, this.I.contentDocument.body, [c]);
        c = this.I.contentDocument;
        K(c, "click", function() {
            a.Ua(3)
        });
        Wh(this.I, {
            height: "100%",
            display: "block",
            "z-index": "2147483647"
        });
        this.Vb("lbx-dis", {})
    };
    m.Ua = function(a) {
        a = void 0 === a ? null : a;
        Cf(this.I);
        this.I = null;
        this.Vb("lbx-hid", {});
        this.Dc && this.A.history.back();
        if (a && !this.Qd) {
            var b = {};
            Q("gdn::mta-lbx", (b.exit = a, b), 1);
            this.Qd = !0
        }
    };
    m.oi = function(a) {
        ya(a) || (this.na = a.ufd, this.Vb("lbx-rdy", {}))
    };
    m.si = function(a) {
        var b = {};
        this.Vb("lbx-exit", (b.foi = a, b));
        this.Ua(1)
    };
    m.K = function() {
        this.Z && this.Z.nc();
        Cf(this.I);
        this.I = null;
        R.prototype.K.call(this)
    };
    m.Ta = function(a) {
        a["mta-lbx"] = this.ai
    };
    var gl = {
        13: "",
        22: "",
        24: "",
        28: "",
        29: "",
        60: "",
        66: "",
        79: "",
        82: "",
        98: "",
        99: "",
        100: "",
        103: "",
        118: "",
        126: "",
        128: "",
        129: "",
        135: "",
        136: "",
        137: "",
        149: "",
        150: "",
        155: "",
        160: "",
        161: "",
        162: "",
        165: "",
        173: "",
        174: "",
        177: "",
        179: "",
        180: "",
        185: "",
        189: "",
        190: "",
        193: "",
        194: ""
    };
    var hl = null,
        Dl = function(a) {
            this.Gd = a
        };
    Dl.prototype.ih = function(a) {
        a = parseFloat(this.Gd[a]);
        return a = isNaN(a) ? 0 : a
    };
    Dl.prototype.Ng = function(a) {
        return cg(this.Gd[a], !1)
    };
    var gn = null,
        kn = function(a, b) {
            for (var c = 0, d = a, e = 0; a && a != a.parent;)
                if (a = a.parent, e++, J(a)) d = a, c = e;
                else if (b) break;
            return {
                Ba: d,
                level: c
            }
        },
        ln = function(a) {
            a = kn(a, !1);
            return a.Ba
        },
        mn = function() {
            if (!gn) {
                var a = kn(v, !0);
                gn = a.Ba
            }
            return gn
        };
    var nn = function(a) {
        rj.call(this, a);
        this.dfltBktExt = this.la;
        this.lrsExt = this.W
    };
    ka(nn, rj);
    var on = function() {
            this.S = {}
        },
        pn = function() {
            var a = L(),
                b = mi(a);
            if (b) return (b = b || mi()) ? (a = b.pageViewId, b = b.clientId, "string" === typeof b && (a += b.replace(/\D/g, "").substr(0, 6))) : a = null, +a;
            a = ln(a);
            (b = a.google_global_correlator) || (a.google_global_correlator = b = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
            return b
        },
        rn = function() {
            if (qn) return qn;
            var a = oi() || L(),
                b = a.google_persistent_state_async;
            return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? qn = b : a.google_persistent_state_async = qn = new on
        },
        T = function(a, b, c) {
            b = sn[b] || "google_ps_" + b;
            a = a.S;
            var d = a[b];
            return void 0 === d ? a[b] = c : d
        },
        tn = function(a, b, c) {
            a = a.S;
            return a[sn[b] || "google_ps_" + b] = c
        },
        qn = null,
        un = {},
        sn = (un[8] = "google_prev_ad_formats_by_region", un[9] = "google_prev_ad_slotnames_by_region", un);
    var vn = function() {
        this.sh = function() {
            return []
        }
    };
    Ka(vn);
    var wn = {
            xk: 5,
            qk: 7,
            Hk: 17,
            dk: 41,
            Tk: 62,
            Kk: 67,
            Vk: 82,
            Wk: 83,
            Pk: 87,
            fk: 89,
            gk: 103,
            zk: 106,
            ql: 107,
            rk: 108,
            Lk: 114,
            Mj: 124,
            pl: 126,
            Nj: 128,
            Bk: 132,
            Uk: 134,
            Ik: 138,
            Ok: 139
        },
        xn = null,
        yn = function(a) {
            try {
                return !!a && a.qj()
            } catch (b) {
                return !1
            }
        },
        zn = function() {
            if (yn(xn)) return !0;
            var a = rn();
            if (a = T(a, 3, null)) {
                var b = a && a.dfltBktExt && a.lrsExt;
                b ? (b = new nn, b.la = a.dfltBktExt, b.dfltBktExt = b.la, b.W = a.lrsExt, b.lrsExt = b.W, a = b) : a = null;
                a || (a = new nn, b = {
                    context: "ps::gpes::cf",
                    url: L().location.href
                }, Q("jserror", b))
            }
            return yn(a) ? (xn = a, !0) : !1
        },
        An = null,
        Bn = function() {
            if (!An) {
                if (zn()) var a = xn;
                else {
                    a = rn();
                    var b = new nn(Yf(wn));
                    a = xn = a = tn(a, 3, b)
                }
                An = sj(a)
            }
            return An
        },
        Cn = {
            vf: "618018085",
            ac: "618018086"
        },
        Dn = {},
        En = {
            vf: "423550200",
            ac: "423550201"
        };
    L();
    var Fn = function(a) {
            a = void 0 === a ? Bn() : a;
            return zi(a.Wd(), function(b) {
                return !!Dn[b]
            })
        },
        Gn = function(a) {
            a = void 0 === a ? Bn() : a;
            return zi(a.Wd(), function(b) {
                return !Dn[b]
            })
        };
    var Hn = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        a && null !== b && b != b.top && (b = b.top);
        try {
            return c ? (new mf(b.innerWidth, b.innerHeight)).round() : tf(b || window).round()
        } catch (d) {
            return new mf(-12245933, -12245933)
        }
    };
    var In, Jn = parseInt("2019", 10),
        Kn = In = isNaN(Jn) ? 2012 : Jn;
    var Ln = function(a, b, c) {
            c || (c = Kh ? "https" : "http");
            v.location && "https:" == v.location.protocol && "http" == c && (c = "https");
            return a = [c, "://", a, b].join("")
        },
        Mn = function(a, b, c) {
            a = Ln(a, b, c);
            (b = ki(182)) && 2012 < Kn && (b = new RegExp(Jd(".js"), "g"), a = a.replace(b, ("_fy" + Kn + ".js").replace(/\$/g, "$$$$")));
            ki(202) && (b = 0 < a.indexOf("?") ? "&" : "?", a += b + "cache=bust");
            return a
        };
    var Nn = null,
        On = function() {
            if (!Gh) return !1;
            if (null != Nn) return Nn;
            Nn = !1;
            try {
                var a = Si(v);
                a && -1 != a.location.hash.indexOf("google_logging") && (Nn = !0);
                v.localStorage.getItem("google_logging") && (Nn = !0)
            } catch (b) {}
            return Nn
        },
        Pn = function(a, b) {
            b = void 0 === b ? [] : b;
            var c = !1;
            v.google_logging_queue || (c = !0, v.google_logging_queue = []);
            v.google_logging_queue.push([a, b]);
            c && On() && (a = Mn(Oh(), "/pagead/js/logging_library.js"), Rf(v.document, a))
        };
    var Qn = function(a) {
            a = a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || "";
            var b = {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            };
            return b[a] || 0
        },
        Rn = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        Sn = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        };
    var Tn = function(a, b) {
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (e) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            if (!0 === c) var d = 2;
            else !1 !== c && (d = Vf([0], a), null == d && ((d = Vf([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    var Un = new Aj(1, L()),
        Vn = function(a) {
            var b = L();
            b && "undefined" != typeof b.google_measure_js_timing && (null != a && (b.google_measure_js_timing = a), b.google_measure_js_timing || Un.disable())
        },
        Wn = function() {
            var a = L();
            a && a.document && ("complete" == a.document.readyState ? Vn() : Un.ja && K(a, "load", function() {
                Vn()
            }))
        };
    Wn();
    z();
    var Xn = function(a, b, c) {
            a && (c ? K(a, "load", b) : hh(a, "load", b))
        },
        Yn = function(a) {
            a = a || v;
            a = a.google_osd_amcb;
            return Oa(a) ? a : null
        },
        Zn = function(a, b) {
            a = void 0 === a ? !1 : a;
            b = void 0 === b ? "/r20100101" : b;
            a = a ? "http:" : "https:";
            return a + "//www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(b)
        };
    var $n = function(a, b) {
        this.Qb = b && b.Qb ? b.Qb : 0;
        this.kc = b ? b.kc : "";
        this.aa = b && b.aa ? b.aa : [];
        this.ci = !0;
        this.Hc = !!this.ci;
        if (b)
            for (a = 0; a < this.aa.length; ++a) this.aa[a].ie = !0
    };
    m = $n.prototype;
    m.ag = function() {
        return Zn(!Kh, "/r20110914")
    };
    m.di = function() {
        var a = this.Hc ? L() : v;
        a = a || v;
        a.google_osd_loaded ? a = !1 : (Rf(a.document, ao), a = a.google_osd_loaded = !0);
        a && Bi(L())
    };
    m.$i = function(a, b) {
        a = "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + a + ("&req=" + b);
        jh(v, a)
    };
    m.getNewBlocks = function(a, b) {
        for (var c = this.aa.length, d = 0; d < c; d++) {
            var e = this.aa[d];
            !e.ee && e.cc && (e.ee = !0, a(e.cc, e.Lf, e.Pi, e.md, void 0, e.ie, e.ii, e.Oi, e.Ni))
        }
        b && (b = (b = L()) || v, b.google_osd_amcb = a)
    };
    m.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = Tn(bo, co);
        if (!b) return 0;
        this.Qb = b;
        this.kc = String(a || 0);
        return this.getOseId()
    };
    m.getOseId = function() {
        return window && Math.random && navigator ? this.Qb : -1
    };
    m.getCorrelator = function() {
        return this.kc
    };
    m.numBlocks = function() {
        return this.aa.length
    };
    m.registerAdBlock = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? function() {
            return null
        } : g;
        e = Yn(L());
        f = uj() || -1;
        var h = v.pageYOffset;
        0 <= h || (h = -1);
        e && d ? e(d, a, b, !1, void 0, !1, g, f, h) : (c = new eo(a, b, c, d, g, f, h), this.aa.push(c), Xn(d, c.we, !0), ao || (this.$i(b, a), ao = this.ag()), this.di())
    };
    m.unloadAdBlock = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        var d = this.Hc ? L() : window;
        void 0 !== d.Goog_Osd_UnloadAdBlock && d.Goog_Osd_UnloadAdBlock(a, b);
        c && (b = bh(this.aa, function(e) {
            return e.cc == a
        })) && Xn(a, b.we, !1)
    };
    m.setLoadOsdJsOnPubWindow = function(a) {
        this.Hc = a
    };
    var fo = function() {
            var a = L(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new $n(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new $n(a, b)
            } catch (c) {
                return a.__google_ad_urls = new $n(a)
            }
        },
        ao = "",
        co = 0,
        bo = 0,
        eo = function(a, b, c, d, e, f, g) {
            var h = this;
            e = void 0 === e ? Ha : e;
            f = void 0 === f ? -1 : f;
            g = void 0 === g ? -1 : g;
            this.Lf = a;
            this.Pi = b;
            this.cc = d;
            this.ie = this.ee = this.md = !1;
            this.ii = e;
            this.Oi = f;
            this.Ni = g;
            this.we = function() {
                return h.md = !0
            }
        };
    Ca("Goog_AdSense_getAdAdapterInstance", fo, void 0);
    Ca("Goog_AdSense_OsdAdapter", $n, void 0);
    var go = function() {};
    m = go.prototype;
    m.getNewBlocks = function() {};
    m.setupOse = function() {};
    m.getOseId = function() {
        return -1
    };
    m.getCorrelator = function() {
        return ""
    };
    m.numBlocks = function() {
        return 0
    };
    m.registerAdBlock = function() {};
    m.unloadAdBlock = function() {};
    m.setLoadOsdJsOnPubWindow = function() {};
    var ho = function() {
        var a = L(),
            b = a.__google_ad_urls;
        return b ? b : a.__google_ad_urls = new go
    };
    var io = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (a && a.top == a) return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        jo = function(a, b) {
            xi(a, function(c, d) {
                b[d] = c
            })
        },
        ko = function(a) {
            var b = a.location.href;
            if (a == a.top) return {
                url: b,
                Fc: !0
            };
            var c = !1,
                d = a.document;
            d && d.referrer && (b = d.referrer, a.parent ==
                a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                Fc: c
            }
        },
        lo = function(a) {
            if (a == a.top) return 0;
            for (; a && a != a.top && J(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var mo = function(a) {
        R.call(this, a)
    };
    ka(mo, R);
    mo.prototype.Ta = function(a) {
        a["ifsl-load-rec"] = this.Lh
    };
    mo.prototype.he = function() {
        return !0
    };
    mo.prototype.Lh = function(a, b) {
        if (!b.isHandled_ && (b.isHandled_ = !0, b = this.$g())) {
            var c = yk(a);
            a = c.ifsl_url;
            var d = c.ifsl_purl,
                e = c.ifsl_t,
                f = c.ifsl_s,
                g = c.ifsl_img,
                h = c.ifsl_qqid,
                k = c.ifsl_gqid;
            c = c.ifsl_pch;
            a && d && e && b.tryAddRecommendation({
                url: a,
                pingUrl: d,
                title: e,
                imageUrl: g,
                snippet: f,
                header: c
            });
            h && k && b.updateReporterParams(h, k)
        }
    };
    mo.prototype.$g = function() {
        var a = ok(this.A);
        return (a = a.stateForType[32]) ? a : null
    };
    var no = {
            google: 1,
            googlegroups: 1,
            gmail: 1,
            googlemail: 1,
            googleimages: 1,
            googleprint: 1
        },
        oo = /(corp|borg)\.google\.com:\d+$/;
    var po = function(a) {
            a = a.google_reactive_ad_format;
            return Hb(aj, a) ? "" + a : null
        },
        qo = function(a) {
            return !!po(a) || null != a.google_pgb_reactive
        },
        ro = function(a) {
            a = po(a);
            return 26 == a || 27 == a || 30 == a || 16 == a
        };
    var so = function(a) {
            var b = 0;
            try {
                b |= qk(a)
            } catch (c) {
                b |= 32
            }
            return b
        },
        to = function(a, b) {
            if (b = po(b)) {
                if ("32" == b) return 1;
                if ("30" == b) return 0
            }
            b = L();
            a: {
                for (; b && J(b);) {
                    if (b.name && -1 != b.name.indexOf("google_ifsl_cifr")) {
                        b = !0;
                        break a
                    }
                    if (b.parent == b) break;
                    b = b.parent
                }
                b = !1
            }
            if (b) return 3;
            if (!J(a)) return 0;
            a = ok(a);
            return (b = a.stateForType[32]) ? 2 : (a = a.stateForType[30]) ? 4 : 0
        };
    var uo = function(a) {
        var b = 0;
        try {
            b |= qk(a), b |= a.getComputedStyle ? 0 : 2097152, b |= sk(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var vo = function(a) {
        var b = 0;
        try {
            b |= qk(a), b |= a.getComputedStyle ? 0 : 2097152, b |= a.document.querySelectorAll && a.document.querySelector ? 0 : 4194304, b |= sk(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var wo = !G && !nd(),
        xo = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (wo && a.dataset) {
                if (!(!F("Android") || md() || F("Firefox") || F("FxiOS") || kd() || F("Silk") || b in a.dataset)) return null;
                b = a.dataset[b];
                return void 0 === b ? null : b
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var yo = function(a) {
        var b = 0;
        try {
            b |= qk(a);
            b |= a.getComputedStyle ? 0 : 2097152;
            Jf() || (b |= 1048576);
            var c, d = a,
                e, f = d.document.body;
            d = e = Math.floor(f.getBoundingClientRect().width);
            hl || (hl = new Dl(gl));
            var g = hl;
            var h = g.ih(79);
            (c = d <= h) || (b |= 32768);
            a: {
                var k = a.document.getElementsByClassName("adsbygoogle");
                for (a = 0; a < k.length; a++) {
                    var l = k[a];
                    if ("autorelaxed" == xo(l, "adFormat")) {
                        var n = !0;
                        break a
                    }
                }
                n = !1
            }
            n && (b |= 33554432)
        } catch (q) {
            b |= 32
        }
        return b
    };
    var zo = function(a, b) {
        return !!a.google_ad_resizable && !a.google_reactive_ad_format && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && Ri(b) == b
    };
    var Ao = function() {
        var a = Wk();
        this.promise = a.promise;
        this.resolve = a.resolve
    };

    function Bo(a, b, c) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        b[a] || (b[a] = new Ao, c && c());
        return b[a]
    }
    var Co = function(a, b, c) {
        a = Bo(a, b, function() {
            Rf(b.document, c)
        });
        return a.promise
    };
    var Do = function(a, b) {
        var c = 0;
        try {
            c |= qk(a);
            var d, e = a.screen.width || 0,
                f = a.screen.height || 0;
            var g = (d = Math.min(e, f)) ? 320 > d ? 8192 : 0 : 2048;
            c |= g;
            var h;
            if (h = a.navigator) {
                var k = a.navigator.userAgent;
                h = /Firefox/.test(k) || /Android 2/.test(k) || /iPhone OS [34]_/.test(k) || /Windows Phone (?:OS )?[67]/.test(k)
            }
            var l = h ? 1048576 : 0;
            c |= l
        } catch (n) {
            c |= 32
        }
        g = 0;
        try {
            g |= a.innerHeight >= a.innerWidth ? 0 : 8, g |= sk(a, pk), g |= tk(a)
        } catch (n) {
            g |= 32
        }
        if (2 == b) {
            l = a;
            b = l.innerWidth;
            a = ok(l);
            a = a.improveCollisionDetection;
            h = l.innerWidth;
            h /= 320;
            h =
                Math.round(50 * h + 15);
            k = [];
            for (d = 0; 3 > d; d++)
                for (e = 0; 3 > e; e++) k.push({
                    x: e / 2 * b,
                    y: d / 2 * h
                });
            b = k;
            a: {
                for (h = 0; h < b.length; h++) {
                    k = l;
                    f = b[h];
                    d = k.document;
                    d.elementFromPoint(f.x, f.y);
                    e = f.x;
                    f = f.y;
                    d.hasOwnProperty("_goog_efp_called_") || (d._goog_efp_called_ = d.elementFromPoint(e, f));
                    if (d = d.elementFromPoint(e, f)) {
                        if (!(e = "fixed" == Zh(d, "position")) && (e = 1 == a)) b: {
                            k = k.document;
                            for (d = d.offsetParent; d && d != k.body; d = d.offsetParent)
                                if ("fixed" == Zh(d, "position")) {
                                    e = !0;
                                    break b
                                }
                            e = !1
                        }
                        k = e ? !0 : !1
                    } else k = !1;
                    if (k) {
                        a = !0;
                        break a
                    }
                }
                a = !1
            }
            a && (g |=
                16777216)
        }
        return c | g
    };
    var Eo = function(a) {
        var b = 0;
        try {
            b |= qk(a), b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (d) {
            b |= 32
        }
        var c = 0;
        try {
            c |= sk(a, pk), c |= tk(a), c |= a.innerHeight >= a.innerWidth ? 0 : 8
        } catch (d) {
            c |= 32
        }
        a = c;
        return b | a
    };
    var Fo = function(a) {
        var b = 0;
        try {
            b |= qk(a), b |= tk(a), b |= sk(a), b |= a.innerHeight >= a.innerWidth ? 0 : 8, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (c) {
            b |= 32
        }
        return b
    };
    var Go = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        var f = a.createElement("link");
        try {
            Ed(f, b, c)
        } catch (g) {
            return null
        }
        d && "preload" == c && (f.as = d);
        e && f.setAttribute("nonce", e);
        a = a.getElementsByTagName("head")[0];
        if (!a) return null;
        try {
            a.appendChild(f)
        } catch (g) {}
        return f
    };
    var Ho = {},
        Io = (Ho[16] = 4, Ho[27] = 512, Ho[26] = 128, Ho[32] = 16, Ho),
        Jo = function(a, b, c) {
            switch (c) {
                case 1:
                case 2:
                    return !Do(a, c);
                case 8:
                    return 0 == Eo(a);
                case 9:
                    return !Fo(a);
                case 32:
                    return b = ok(a), a = (b = !!b.wasReactiveAdConfigReceived[32]) && 0 == so(a);
                case 30:
                    return 0 == yo(a);
                case 26:
                    return 0 == vo(a) && !0;
                case 27:
                    return !uo(a) && !0;
                default:
                    return !1
            }
        },
        Ko = function(a, b, c) {
            switch (c) {
                case 1:
                case 2:
                    return Do(a, c);
                case 8:
                    return Eo(a);
                case 9:
                    return Fo(a);
                case 32:
                    return so(a);
                case 16:
                    return zo(b, a) ? 0 : 8388608;
                case 30:
                    return yo(a);
                case 26:
                    return vo(a);
                case 27:
                    return uo(a);
                default:
                    return 32
            }
        },
        Lo = function(a, b) {
            var c = b.google_reactive_ad_format;
            if (!Hb(aj, c)) return !1;
            a = Si(a);
            if (!a || !Jo(a, b, c)) return !1;
            b = ok(a);
            if (vk(b, c)) return !1;
            b.adCount[c] || (b.adCount[c] = 0);
            b.adCount[c]++;
            return !0
        },
        Mo = function(a) {
            return !a.google_reactive_ads_config && qo(a) && 16 != a.google_reactive_ad_format
        },
        No = function(a) {
            if (!a.hash) return null;
            var b = null;
            xi(gk, function(c) {
                !b && kk(a, c) && (b = ik[c])
            });
            return b
        },
        Po = function(a, b) {
            if (!b) return null;
            var c = ok(b);
            if (!c.wasReactiveAdConfigHandlerRegistered) return null;
            var d = 0;
            xi(aj, function(e) {
                var f = Io[e];
                f && 0 === Oo(a, b, e) && (d |= f)
            });
            c.wasPlaTagProcessed && (d |= 256);
            c.isReactiveTagFirstOnPage && (d |= 1024);
            return d ? "" + d : null
        },
        Oo = function(a, b, c) {
            if (!b) return 256;
            var d = 0,
                e = ok(b),
                f = vk(e, c);
            if (a.google_reactive_ad_format == c || 26 != c && 27 != c && f) d |= 64;
            var g = !1;
            xi(e.reactiveTypeDisabledByPublisher, function(h, k) {
                String(c) === k && (g = !0)
            });
            g && No(b.location) !== c && (d |= 128);
            return d | Ko(b, a, c)
        },
        Qo = function(a, b) {
            var c = z(),
                d = {
                    context: a,
                    type: "time"
                },
                e = !1,
                f = function() {
                    e || (e = !0, d.elapsed = z() -
                        c, Q("rctlib", d, .001))
                },
                g = v.setTimeout(function() {
                    f()
                }, 2E4);
            return function(h) {
                v.clearTimeout(g);
                f();
                return b(h)
            }
        },
        Ro = function() {
            var a = Qi(),
                b = "/pagead/js/" + Dh() + "/r20110914/reactive_library.js",
                c = Jh ? "https" : "http";
            return Mn(a, b, c)
        },
        So = function(a, b) {
            a = O(a, Qo(a, b));
            return Co(1, L(), Ro()).then(a)
        };
    Nd("script");
    /*

     Copyright 2019 The AMP HTML Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var To = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };
    var Uo = "google_ad_block google_ad_channel google_ad_client google_ad_format google_ad_height google_ad_host google_ad_host_channel google_ad_host_tier_id google_ad_layout google_ad_layout_key google_ad_modifications google_ad_output google_ad_region google_ad_section google_ad_slot google_ad_type google_ad_unit_key google_ad_dom_fingerprint google_ad_semantic_area google_ad_width google_adtest google_allow_expandable_ads google_alternate_ad_url google_alternate_color google_analytics_domain_name google_analytics_uacct google_apsail google_available_width google_captcha_token google_city google_color_bg google_color_border google_color_line google_color_link google_color_text google_color_url google_container_id google_content_recommendation_ad_positions google_content_recommendation_columns_num google_content_recommendation_rows_num google_content_recommendation_ui_type google_content_recommendation_use_square_imgs google_contents google_core_dbp google_country google_cpm google_ctr_threshold google_cust_age google_cust_ch google_cust_criteria google_cust_gender google_cust_id google_cust_interests google_cust_job google_cust_l google_cust_lh google_cust_u_url google_disable_video_autoplay google_bfa ebfa ebfaca google_eids google_enable_content_recommendations google_enable_ose google_encoding google_font_face google_font_size google_frame_id google_full_width_responsive_allowed efwr google_full_width_responsive gfwroh gfwrow gfwroml gfwromr gfwroz gfwrnh gfwrnwer gfwrnher google_gl google_hints google_image_size google_kw google_kw_type google_lact google_language google_loeid google_max_num_ads google_max_radlink_len google_max_responsive_height google_ml_rank google_mtl google_native_ad_template google_native_settings_key google_num_radlinks google_num_radlinks_per_unit google_only_pyv_ads google_override_format google_page_url google_pgb_reactive google_pucrd google_referrer_url google_region google_resizing_allowed google_resizing_height google_resizing_width rpe google_responsive_formats google_responsive_auto_format armr google_rl_dest_url google_rl_filtering google_rl_mode google_rt google_safe google_safe_for_responsive_override google_scs google_source_type google_tag_for_child_directed_treatment google_tag_for_under_age_of_consent google_tag_origin google_tag_partner google_targeting google_tfs google_video_doc_id google_video_product_type google_video_url_to_fetch google_webgl_support google_yt_pt google_yt_up google_package google_debug_params google_enable_single_iframe dash google_refresh_count".split(" "),
        Vo = function(a) {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0], (a = a.match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && /google_ad_client/.test(a[1])) return a[1];
            return null
        },
        Wo = function(a) {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && /google_ad_client/.test(a[1])) return a[1];
            return null
        },
        Zo = function(a) {
            try {
                a: {
                    var b = a.document.getElementsByTagName("script"),
                        c = a.navigator && a.navigator.userAgent || "",
                        d;
                    if (!(d = /appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa\/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube/i.test(c))) {
                        var e;
                        if (e = /i(phone|pad|pod)/i.test(c)) {
                            var f;
                            if (f = /applewebkit/i.test(c) && !/version|safari/i.test(c)) {
                                c = void 0;
                                c = void 0 === c ? H : c;
                                try {
                                    var g = !(!c.navigator.standalone && !Ri(c).navigator.standalone)
                                } catch (t) {
                                    g = !1
                                }
                                f = !g
                            }
                            e = f
                        }
                        d = e
                    }
                    d = d ? Vo : Wo;
                    for (var h = b.length - 1; 0 <= h; h--) {
                        var k = b[h];
                        if (!k.google_parsed_script) {
                            k.google_parsed_script = !0;
                            var l = d(k);
                            if (l) {
                                var n = l;
                                break a
                            }
                        }
                    }
                    n = null
                }
            }
            catch (t) {
                return !1
            }
            if (!n) return !1;
            try {
                b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                h = {};
                for (var q; q = b.exec(n);) h[q[1]] = Xo(q[2]);
                var u = h;
                Yo(u, a)
            } catch (t) {
                return !1
            }
            return !!a.google_ad_client
        },
        Xo = function(a) {
            var b;
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    return b;
                default:
                    try {
                        var c = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (c) return c[1] || c[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            var d = parseFloat(a);
                            return d ===
                                d ? d : b
                        }
                    } catch (e) {}
                    return b
            }
        },
        Yo = function(a, b) {
            for (var c = 0; c < Uo.length; c++) {
                var d = Uo[c];
                null == b[d] && null != a[d] && (b[d] = a[d])
            }
        };
    var $o = function(a, b, c) {
        if (zo(c, b)) {
            var d;
            if (d = b.document.getElementById(c.google_async_iframe_id))
                for (d = d.parentElement; d && !Ki.test(d.className);) d = d.parentElement;
            else d = null;
            if (d) {
                b = ok(b);
                b.stateForType[16] || (b.stateForType[16] = []);
                b = b.stateForType[16];
                if (a == c) {
                    var e = a;
                    a = {};
                    null == e.google_ad_client && Zo(e) && (a.google_loader_features_used = 2048);
                    Yo(e, a);
                    e = a
                } else {
                    a = c;
                    c = {};
                    for (e in a) c[e] = a[e];
                    e = c
                }
                b.push({
                    Dl: d,
                    j: e,
                    offsetWidth: d.offsetWidth
                })
            }
        }
    };
    var hp = function(a, b) {
            var c = ap(b, ".google-auto-placed"),
                d = bp(b),
                e = cp(b),
                f = dp(b),
                g = ep(b),
                h = fp(b),
                k = [].concat(ap(b, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), ap(b, "ins.adsbygoogle"));
            b = [];
            a = ca([
                [a.Gh, c],
                [a.Hh, d],
                [a.Jh, e],
                [a.Ih, f],
                [a.Kh, g],
                [a.Fh, h]
            ]);
            for (c = a.next(); !c.done; c = a.next()) c = c.value, d = ca(c), c = d.next().value, d = d.next().value, !1 === c ? b = b.concat(d) : k = k.concat(d);
            k = gp(k);
            a = gp(b);
            b = k.slice(0);
            k = ca(a);
            for (a = k.next(); !a.done; a = k.next())
                for (a = a.value, c = 0; c < b.length; c++)(a.contains(b[c]) || b[c].contains(a)) &&
                    b.splice(c, 1);
            return b
        },
        ip = function(a, b) {
            var c = ap(b, ".google-auto-placed"),
                d = bp(b),
                e = cp(b),
                f = dp(b),
                g = ep(b);
            b = fp(b);
            return gp([].concat(!0 === a.Gh ? c : [], !0 === a.Hh ? d : [], !0 === a.Jh ? e : [], !0 === a.Ih ? f : [], !0 === a.Kh ? g : [], !0 === a.Fh ? b : []))
        },
        jp = function(a) {
            try {
                return gb(hb(a.googletag.pubads().getSlots(), function(b) {
                    return a.document.getElementById(b.getSlotElementId())
                }), Ma)
            } catch (b) {}
            return null
        },
        ap = function(a, b) {
            return nb(a.document.querySelectorAll(b))
        },
        bp = function(a) {
            return ap(a, 'ins.adsbygoogle[data-anchor-shown="true"]')
        },
        cp = function(a) {
            return ap(a, "ins.adsbygoogle[data-ad-format=autorelaxed]")
        },
        dp = function(a) {
            var b = a;
            b = jp(b) || ap(b, "div[id^=div-gpt-ad]");
            return b.concat(ap(a, "iframe[id^=google_ads_iframe]"))
        },
        ep = function(a) {
            return ap(a, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")
        },
        fp = function(a) {
            return ap(a, "ins.adsbygoogle-ablated-ad-slot")
        },
        gp = function(a) {
            var b = [];
            a = ca(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                for (var d = !0, e = 0; e < b.length; e++) {
                    var f = b[e];
                    if (f.contains(c)) {
                        d = !1;
                        break
                    }
                    if (c.contains(f)) {
                        d = !1;
                        b[e] = c;
                        break
                    }
                }
                d && b.push(c)
            }
            return b
        };
    O(453, hp);
    O(454, ip);
    var kp = function(a) {
        this.Ic = {};
        this.le = {};
        a && this.addAll(a)
    };
    kp.prototype.add = function(a) {
        this.Ic[a] = !0;
        this.le[a] = a
    };
    kp.prototype.addAll = function(a) {
        for (var b = 0; b < a.length; ++b) this.add(a[b])
    };
    kp.prototype.remove = function(a) {
        this.Ic[a] = !1;
        this.le[a] = void 0
    };
    kp.prototype.contains = function(a) {
        return !!this.Ic[a]
    };
    new kp("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    var lp = function(a) {
        return 5 == a.google_pgb_reactive && !!a.google_reactive_ads_config
    };
    var mp = {},
        np = (mp.client = "google_ad_client", mp.format = "google_ad_format", mp.slotname = "google_ad_slot", mp.ad_type = "google_ad_type", mp),
        op = function(a) {
            Wf(np, function(b, c) {
                try {
                    null != v[b] && (a[c] = v[b])
                } catch (d) {}
            })
        },
        pp = function(a) {
            a.shv = Dh()
        };
    Fj.gj(!Gh);
    var qp = function(a) {
            this.Sb = [];
            this.qa = a || window;
            this.v = 0;
            this.Rb = null;
            this.ff = 0
        },
        rp;
    m = qp.prototype;
    m.ug = function(a, b) {
        0 != this.v || 0 != this.Sb.length || b && b != window ? this.Kd(a, b) : (this.v = 2, this.Qe(new sp(a, window)))
    };
    m.Kd = function(a, b) {
        this.Sb.push(new sp(a, b || this.qa));
        this.Xc()
    };
    m.wi = function(a) {
        this.v = 1;
        if (a) {
            var b = O(188, Ua(this.Oe, this, !0));
            this.Rb = this.qa.setTimeout(b, a)
        }
    };
    m.Oe = function(a) {
        a && ++this.ff;
        1 == this.v && (null != this.Rb && (this.qa.clearTimeout(this.Rb), this.Rb = null), this.v = 0);
        this.Xc()
    };
    m.rj = function() {
        return !(!window || !Array)
    };
    m.vh = function() {
        return this.ff
    };
    m.Xc = function() {
        var a = O(189, Ua(this.Cj, this));
        this.qa.setTimeout(a, 0)
    };
    m.Cj = function() {
        if (0 == this.v && this.Sb.length) {
            var a = this.Sb.shift();
            this.v = 2;
            var b = O(190, Ua(this.Qe, this, a));
            a.Ba.setTimeout(b, 0);
            this.Xc()
        }
    };
    m.Qe = function(a) {
        this.v = 0;
        a.ib()
    };
    var tp = function(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    };
    qp.prototype.nq = qp.prototype.ug;
    qp.prototype.nqa = qp.prototype.Kd;
    qp.prototype.al = qp.prototype.wi;
    qp.prototype.rl = qp.prototype.Oe;
    qp.prototype.sz = qp.prototype.rj;
    qp.prototype.tc = qp.prototype.vh;
    var sp = function(a, b) {
        this.ib = a;
        this.Ba = b
    };
    var vp = function(a, b, c) {
        R.call(this, a);
        var d = this;
        this.o = b;
        this.$a = c;
        this.te = !1;
        this.nd = function() {
            !d.te && d.o.getAttribute("data-google-query-id") && up(d.A, d.$a.google_ad_client, null)
        };
        K(this.o, "load", this.nd)
    };
    ka(vp, R);
    vp.prototype.K = function() {
        hh(this.o, "load", this.nd);
        R.prototype.K.call(this)
    };
    var wp = function(a) {
            try {
                var b = a.localStorage.getItem("google_adsense_settings");
                if (!b) return {};
                var c = JSON.parse(b);
                return c !== Object(c) ? {} : Bb(c, function(d, e) {
                    return Object.prototype.hasOwnProperty.call(c, e) && ya(e) && x(d)
                })
            } catch (d) {
                return {}
            }
        },
        up = function(a, b, c) {
            var d = wp(a),
                e = null == c,
                f = null != c && 0 == c.th().length && 0 == c.eh().length;
            !e && !f || ki(211) ? e || (d[b] = c.J) : delete d[b];
            try {
                a: {
                    for (var g in d) {
                        var h = !1;
                        break a
                    }
                    h = !0
                }
                h && !ki(211) ? a.localStorage.removeItem("google_adsense_settings") : a.localStorage.setItem("google_adsense_settings",
                    JSON.stringify(d));
                return !0
            }
            catch (k) {
                return !1
            }
        };
    vp.prototype.Ta = function(a) {
        a["adsense-labs"] = this.Kf
    };
    vp.prototype.Kf = function(a) {
        a = yk(a);
        if (a = a.settings) try {
            var b = new Ze(JSON.parse(a));
            b.Ch() && up(this.A, b.Ah() || "", b) && (this.te = !0)
        } catch (c) {}
    };
    var xp = (new Date).getTime();
    var zp = function(a, b) {
            b = void 0 === b ? "dtd" : b;
            var c = xp,
                d = {};
            d[b] = yp(c);
            return Ci(d, a)
        },
        yp = function(a) {
            return a = Ap((new Date).getTime(), a)
        },
        Ap = function(a, b, c) {
            c = void 0 === c ? 1E5 : c;
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    var Bp = function(a) {
        var b = this;
        this.qa = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(c, d) {
                return b.Fj(c, d)
            }
        });
        this.tj = a.google_iframe_oncopy
    };
    Bp.prototype.set = function(a, b) {
        var c = this;
        this.tj.handlers[a] = b;
        this.qa.addEventListener && this.qa.addEventListener("load", function() {
            return c.Jg(a)
        }, !1)
    };
    Bp.prototype.Jg = function(a) {
        a = this.qa.document.getElementById(a);
        try {
            var b = a.contentWindow.document;
            if (a.onload && b && (!b.body || !b.body.firstChild)) a.onload()
        } catch (c) {}
    };
    Bp.prototype.Fj = function(a, b) {
        var c = "rx";
        var d = a,
            e = new RegExp("\\b" + c + "=(\\d+)"),
            f = e.exec(d);
        f && (f = +f[1] + 1 || 1, d = d.replace(e, c + "=" + f));
        c = d;
        d = Number;
        a: {
            if (a && (a = a.match("dt=([^&]+)")) && 2 == a.length) {
                a = a[1];
                break a
            }
            a = ""
        }
        a = d(a);
        c = c.replace(/&dtd=(\d+|-?M)/, "&dtd=" + yp(a));
        this.set(b, c);
        return c
    };
    Gd("var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}");

    function Cp(a) {
        switch (a) {
            case "":
            case "Test":
            case "Real":
                return !0;
            default:
                return !1
        }
    }
    var Dp = function(a, b) {
        b = void 0 === b ? !1 : b;
        this.Ij = a;
        this.nf = b;
        this.ic = new df(a.document)
    };
    Dp.prototype.read = function() {
        var a = this.ic.get("__gads", "");
        return this.nf && !Cp(a) ? "Real" : a
    };
    Dp.prototype.write = function(a) {
        var b = a.yl();
        if (this.nf) {
            if (!Cp(this.ic.get("__gads", ""))) return;
            Cp(b) || (b = "Real")
        }
        this.ic.set("__gads", b, a.wl() - this.Ij.Date.now() / 1E3, a.xl(), a.vl(), !1)
    };
    var Ep = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Fp = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        Gp = function() {
            return v
        },
        Hp = v,
        Ip = function(a, b) {
            a = "https://adservice" + (b + "/adsid/integrator." + a);
            b = ["domain=" + encodeURIComponent(v.location.hostname)];
            U[3] >= z() && b.push("adsid=" + encodeURIComponent(U[1]));
            return a + "?" + b.join("&")
        },
        U, W, Jp = function() {
            Hp = Gp();
            U = Hp.googleToken = Hp.googleToken || {};
            var a = z();
            a = !!U[1] && U[3] > a && 0 < U[2];
            a || (U[1] = "", U[2] = -1, U[3] = -1, U[4] = "", U[6] = "");
            W = Hp.googleIMState = Hp.googleIMState || {};
            a = W[1];
            (a = Ep.test(a) &&
                !Fp.test(a)) || (W[1] = ".google.com");
            x(W[5]) || (W[5] = []);
            "boolean" !== typeof W[6] && (W[6] = !1);
            x(W[7]) || (W[7] = []);
            "number" !== typeof W[8] && (W[8] = 0)
        },
        Kp = function(a) {
            try {
                a()
            } catch (b) {
                v.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Lp = {
            vc: function() {
                return 0 < W[8]
            },
            Hi: function() {
                W[8]++
            },
            Ii: function() {
                0 < W[8] && W[8]--
            },
            Ki: function() {
                W[8] = 0
            },
            Tc: function() {},
            Gl: function() {
                return !1
            },
            Td: function() {
                return W[5]
            },
            yd: Kp
        },
        Mp = 1E-5,
        Np = function() {
            if (!Lp.vc()) {
                var a = v.document,
                    b = function(e) {
                        e = Ip("js", e);
                        a: {
                            try {
                                var f = Fa();
                                break a
                            } catch (h) {}
                            f =
                            void 0
                        }
                        Go(a, e, "preload", "script", f);
                        f = a.createElement("script");
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return v.processGoogleToken({}, 2)
                        };
                        e = Hf(e);
                        Fd(f, e);
                        try {
                            var g = a.head || a.body || a.documentElement;
                            g.appendChild(f);
                            Lp.Hi()
                        } catch (h) {}
                    },
                    c = W[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                v.setTimeout(function() {
                    return v.processGoogleToken(d, 1)
                }, 1E3)
            }
        };
    Lp.Tc = Np;
    var Op = function(a, b) {
            Jp();
            var c = Hp.googleToken[5] || 0;
            a && (0 != c || U[3] >= z() ? b.yd(a) : (c = b.Td(), c.push(a), b.Tc()));
            U[3] >= z() && U[2] >= z() || b.Tc()
        },
        Pp = function(a) {
            v.processGoogleToken = v.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                Jp();
                1 == c ? Lp.Ki() : Lp.Ii();
                var k = Hp.googleToken = Hp.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" ===
                    typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !Lp.vc() && (!(U[3] >= z()) || "NT" == U[1]);
                var n = !(U[3] >= z()) && 0 != c;
                if (l || e || n) e = z(), f = e + 1E3 * f, g = e + 1E3 * g, Math.random() < Mp && (e = "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c, jh(v, e)), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, Jp();
                if (l || !Lp.vc()) {
                    c = Lp.Td();
                    for (b = 0; b < c.length; b++) Lp.yd(c[b]);
                    c.length = 0
                }
                return c = void 0
            };
            Op(a, Lp)
        };
    Nd("script");
    var Qp = O(215, function(a) {
            var b = a.google_sa_queue,
                c = b.shift();
            a.google_sa_impl || Q("shimpl", {
                t: "no_fn"
            });
            Oa(c) && Fj.Rc(216, c, void 0);
            b.length && a.setTimeout(function() {
                return Qp(a)
            }, 0)
        }),
        Rp = function(a) {
            var b = xf(document, "IFRAME");
            xi(a, function(c, d) {
                null != c && b.setAttribute(d, c)
            });
            return b
        },
        Sp = function(a) {
            var b = ["<iframe"];
            xi(a, function(c, d) {
                null != c && b.push(" " + d + '="' + Gd(c) + '"')
            });
            b.push("></iframe>");
            return b.join("")
        },
        Tp = function(a, b, c, d, e) {
            d = d ? '"' : "";
            var f = d + "0" + d;
            null != b && (a.width = b && d + b + d);
            null != c &&
                (a.height = c && d + c + d);
            a.frameborder = f;
            e && (a.src = d + e + d);
            a.marginwidth = f;
            a.marginheight = f;
            a.vspace = f;
            a.hspace = f;
            a.allowtransparency = d + "true" + d;
            a.scrolling = d + "no" + d;
            a.allowfullscreen = d + "true" + d
        };
    var Up = function(a, b) {
        Yj(a, "adpnt", function(c, d) {
            var e = b;
            wk(d, e.contentWindow) ? (e.dataset.googleQueryId || (c = yk(c), c = c.qid, e.setAttribute("data-google-query-id", c)), e = !0) : e = !1;
            return e
        })
    };
    var Vp = function(a, b, c) {
        lk.call(this);
        var d = this;
        this.fd = a;
        this.o = b;
        this.af = c;
        this.li = 0;
        this.af && (this.rf = this.je(), this.Yi = yb(this.ni, 63, this), this.ed = O(433, function() {
            var e = d.Yi;
            H.requestAnimationFrame ? H.requestAnimationFrame(e) : e()
        }), K(this.fd, "scroll", this.ed, eh))
    };
    ka(Vp, lk);
    Vp.prototype.je = function() {
        var a = this.af.getBoundingClientRect(),
            b = a.top > this.fd.innerHeight;
        a = 0 > a.top + a.height;
        return !b && !a
    };
    Vp.prototype.ni = function() {
        var a = this.je();
        a && !this.rf && this.mi({
            rr: "vis-bcr"
        });
        this.rf = a
    };
    Vp.prototype.mi = function(a) {
        var b = this.o.contentWindow;
        b && (ck(b, "ig", a, "*", 2), 10 <= ++this.li && this.pg())
    };
    Vp.prototype.pg = function() {
        this.ed && hh(this.fd, "scroll", this.ed, eh)
    };
    var Wp = {
            display: "block",
            left: "auto",
            position: "fixed",
            bottom: "0px"
        },
        Xp = function(a, b, c) {
            a.X && R.call(this, a.X);
            var d = this;
            this.o = b;
            this.Ga = (this.ca = a.iframeWin && Hi(a.j) ? a.iframeWin.frameElement : b) ? this.ca : a.Ma;
            this.ba = c;
            this.wc = this.ba.parentElement;
            this.Be = parseInt(this.ba.style.height, 10);
            this.qc = null;
            this.Ue = !1;
            this.Ge = "";
            this.ka = 0;
            this.Ea = bi(this.Ga).y;
            this.He = null;
            this.Ie = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
            this.Fe = O(636, function() {
                return d.ga()
            })
        };
    ka(Xp, R);
    var Yp = function(a, b) {
        var c = a.pubWin.document.getElementById(a.j.google_async_iframe_id + "_anchor");
        return c ? new Xp(a, b, c) : null
    };
    m = Xp.prototype;
    m.Ta = function(a) {
        a["parallax-scroll"] = this.Zi
    };
    m.Zi = function(a, b) {
        a = yk(a);
        this.qc = a.i_expid;
        this.Ge = a.qid;
        this.He = a.gen204_fraction;
        if (!this.Ue && (b.source === this.o.contentWindow || b.source.parent === this.o.contentWindow)) {
            this.Ue = !0;
            a = this.hg(a);
            var c = {};
            c = (c.msg_type = "parallax-scroll-result", c.ps_success = "0" === a, c);
            b = b.source;
            c.googMsgType = "sth";
            b.postMessage((new Tj(void 0)).Ya(c), "*");
            this.za("pscrl", {
                err: a
            })
        }
    };
    m.hg = function(a) {
        if (!this.Ie) return "1";
        a = bg(a.r_nh);
        this.ka = null == a ? 0 : a;
        if (0 >= this.ka) return "2";
        this.Ea = bi(this.Ga).y;
        a = this.A.innerHeight;
        if (this.Ea + this.Be < a) return "4";
        if (this.Ea > uk(this.A) - a) return "3";
        this.ij();
        this.Fe();
        return "0"
    };
    m.ij = function() {
        this.Ga && (this.Ga.setAttribute("height", this.ka), this.Ga.style.height = this.ka + "px");
        this.o.setAttribute("height", this.ka);
        this.o.style.height = this.ka + "px";
        Wh(this.ba, Wp);
        this.ba.style.height = this.ka + "px";
        this.wc.style.position = "relative"
    };
    m.vg = function() {
        var a = "rect(3000px, " + this.o.width + "px, 0px, 0px)";
        Wh(this.ba, {
            clip: a
        })
    };
    m.ga = function() {
        this.Ie.call(this.A, this.Fe);
        var a = this.A.innerHeight,
            b = xk(this.A);
        this.Ea = bi(this.wc).y;
        b + a > this.Ea ? this.uj(b, a) : this.vg()
    };
    m.uj = function(a, b) {
        b = a + b - this.Ea;
        a = Math.min(b, this.Be);
        b = this.ka - b;
        b = Math.max(0, b);
        0 >= b ? Wh(this.ba, {
            position: "absolute",
            top: "0px",
            bottom: "auto"
        }) : Wh(this.ba, {
            position: "fixed",
            top: "auto",
            bottom: "0px"
        });
        a = "rect(" + b + "px, " + this.o.width + "px, " + (b + a) + "px, 0px)";
        Wh(this.ba, {
            clip: a
        })
    };
    m.za = function(a, b) {
        b = void 0 === b ? {} : b;
        this.qc && (b.eid = this.qc);
        b.qid = this.Ge;
        var c = Ah(String(this.He), .05);
        Q(a, b, c)
    };
    m.K = function() {
        this.wc = this.ba = this.Ga = this.ca = this.o = null;
        R.prototype.K.call(this)
    };
    var bq = function(a, b, c, d, e) {
            b = void 0 === b ? Zp : b;
            c = void 0 === c ? $p : c;
            d = void 0 === d ? aq : d;
            e = void 0 === e ? 0 : e;
            this.H = pf(a);
            this.pe = b;
            this.fi = c;
            this.ne = d;
            this.$ = e
        },
        cq = function(a, b, c, d, e) {
            return new bq(a, b, c, d, e)
        };
    m = bq.prototype;
    m.ve = function(a, b) {
        var c = this,
            d = this.H.jb(),
            e = this.H.B;
        return new Rk(function(f, g) {
            var h = d.IntersectionObserver;
            if (h)
                if (e.elementsFromPoint)
                    if (e.createNodeIterator)
                        if (e.createRange)
                            if (d.Range.prototype.getBoundingClientRect) {
                                null != b && d.setTimeout(function() {
                                    g(new Xk("6"))
                                }, b);
                                var k = new h(function(l) {
                                    var n = new Aj(1),
                                        q = n.gi(491, function() {
                                            return c.jh(l)
                                        });
                                    q && (n.events.length && (n = n.events[0], n = Number(n.duration), q.executionTime = Math.round(n)), k.disconnect(), f(q))
                                }, dq);
                                k.observe(a)
                            } else g(new Xk("5"));
            else g(new Xk("4"));
            else g(new Xk("3"));
            else g(new Xk("2"));
            else g(new Xk("1"))
        })
    };
    m.jh = function(a) {
        var b = this;
        a = a && a[0];
        if (!a) return null;
        a = a.target;
        var c = a.getBoundingClientRect(),
            d = this.H.ae();
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = this.Ib(a, c, this.Vg(c), 1, []),
            f = this.Ib(a, c, this.Yg(c), 2, e.wa),
            g = this.Ib(a, c, this.Wg(c), 3, [].concat(p(e.wa), p(f.wa))),
            h = this.Ib(a, c, this.Xg(c), 4, [].concat(p(e.wa), p(f.wa), p(g.wa))),
            k = this.Lg(a, c),
            l = function(q) {
                return lb(b.pe, q.overlapType) && lb(b.fi, q.overlapDepth) && lb(b.ne, q.overlapDetectionPoint)
            };
        e = gb([].concat(p(e.entries),
            p(f.entries), p(g.entries), p(h.entries)), l);
        l = gb(k, l);
        k = [].concat(p(e), p(l));
        f = c.left < -this.$ || c.right > d.width + this.$;
        f = 0 < k.length || f;
        g = this.H.Ud();
        var n = new Sh(c.left, c.top, c.width, c.height);
        e = [].concat(p(hb(e, function(q) {
            return new Sh(q.elementRect.left, q.elementRect.top, q.elementRect.width, q.elementRect.height)
        })), p(ub(hb(l, function(q) {
            return Uh(n, q.elementRect)
        }))), p(gb(Uh(n, new Sh(0, 0, d.width, d.height)), function(q) {
            return 0 <= q.top && q.top + q.height <= d.height
        })));
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: a,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? this.oh(n, e) : this.mh(c, e)
        }
    };
    m.oh = function(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = 1; d < 1 << b.length; d++) {
            for (var e = a, f = 0, g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Th(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    };
    m.mh = function(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        for (var c = 0, d = a.left; d <= a.right; d++)
            for (var e = a.top; e <= a.bottom; e++)
                for (var f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    };
    m.Vg = function(a) {
        var b = lf(a.left + a.width / 2, a.left, a.right - 1);
        a = lf(a.bottom - 1 - this.$, a.top, a.bottom - 1);
        return this.H.B.elementsFromPoint(b, a)
    };
    m.Yg = function(a) {
        var b = lf(a.left + a.width / 2, a.left, a.right - 1);
        a = lf(a.top + this.$, a.top, a.bottom - 1);
        return this.H.B.elementsFromPoint(b, a)
    };
    m.Wg = function(a) {
        var b = lf(a.left + this.$, a.left, a.right - 1);
        a = lf(a.top + a.height / 2, a.top, a.bottom - 1);
        return this.H.B.elementsFromPoint(b, a)
    };
    m.Xg = function(a) {
        var b = lf(a.right - 1 - this.$, a.left, a.right - 1);
        a = lf(a.top + a.height / 2, a.top, a.bottom - 1);
        return this.H.B.elementsFromPoint(b, a)
    };
    m.Ib = function(a, b, c, d, e) {
        if (0 === b.width || 0 === b.height) return {
            entries: [],
            wa: []
        };
        for (var f = [], g = [], h = 0; h < c.length; h++) {
            var k = c[h];
            if (k !== a && !lb(e, k)) {
                g.push(k);
                var l = k.getBoundingClientRect();
                if (this.H.contains(k, a)) f.push(this.va(a, b, k, l, 1, d));
                else if (this.H.contains(a, k)) f.push(this.va(a, b, k, l, 2, d));
                else {
                    var n = this.Ig(a, b, k, l) || {},
                        q = n.suspectAncestor;
                    n = n.overlapType;
                    q && n ? f.push(this.va(a, b, k, l, n, d, q)) : f.push(this.va(a, b, k, l, 9, d))
                }
            }
        }
        return {
            entries: f,
            wa: g
        }
    };
    m.Lg = function(a, b) {
        for (var c = [], d = a.parentElement; d; d = d.parentElement) {
            var e = d.getBoundingClientRect();
            if (e) {
                var f = this.H.jb();
                if ((f = Sf(d, f)) && "visible" !== f.overflow) {
                    var g = "auto" === f.overflowY || "scroll" === f.overflowY;
                    !g && b.bottom > e.bottom + this.$ ? c.push(this.va(a, b, d, e, 5, 1)) : (f = "auto" === f.overflowX || "scroll" === f.overflowX, !f && b.left < e.left - this.$ ? c.push(this.va(a, b, d, e, 5, 3)) : !f && b.right > e.right + this.$ && c.push(this.va(a, b, d, e, 5, 4)))
                }
            }
        }
        return c
    };
    m.va = function(a, b, c, d, e, f, g) {
        a = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        lb(this.pe, e) && lb(this.ne, f) && (a.overlapDepth = this.lh(b, c, d));
        g && (a.suspectAncestor = g);
        return a
    };
    m.Ig = function(a, b, c, d) {
        var e = this.H.Hg(a, c);
        if (!e) return null;
        var f = this.Rd(a, b, e, c) || {};
        b = f.suspectAncestor;
        f = f.Ia;
        c = this.Rd(c, d, e, a) || {};
        a = c.suspectAncestor;
        c = c.Ia;
        if (b && f && a && c) {
            if (f <= c) return f = eq[f], {
                suspectAncestor: b,
                overlapType: f
            };
            b = fq[c];
            return {
                suspectAncestor: a,
                overlapType: b
            }
        }
        return b && f ? (f = eq[f], {
            suspectAncestor: b,
            overlapType: f
        }) : a && c ? (b = fq[c], {
            suspectAncestor: a,
            overlapType: b
        }) : null
    };
    m.Rd = function(a, b, c, d) {
        b = [];
        for (var e = a; e && e !== c; e = e.parentElement) b.unshift(e);
        c = this.H.jb();
        for (e = 0; e < b.length; e++) {
            var f = b[e],
                g = Sf(f, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: f,
                    Ia: 1
                };
                if ("sticky" === g.position && this.H.contains(f.parentElement, d)) return {
                    suspectAncestor: f,
                    Ia: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: f,
                    Ia: 3
                };
                if ("none" !== g.cssFloat) {
                    g = f === b[0];
                    var h = b.slice(0, e);
                    h = this.Yd(h, f);
                    if (g || h) return {
                        suspectAncestor: f,
                        Ia: 4
                    }
                }
            }
        }
        return (a = this.Yd(b, a)) ? {
            suspectAncestor: a,
            Ia: 5
        } : null
    };
    m.Yd = function(a, b) {
        var c = b.getBoundingClientRect();
        if (!c) return null;
        for (var d = 0; d < a.length; d++) {
            var e = a[d];
            if (this.H.contains(e, b)) {
                var f = e.getBoundingClientRect();
                if (f) {
                    var g = this.H.jb();
                    if ((g = Sf(e, g)) && c.bottom > f.bottom + this.$ && "visible" === g.overflowY) return e
                }
            }
        }
        return null
    };
    m.lh = function(a, b, c) {
        a = new Ph(a.top, a.right - 1, a.bottom - 1, a.left);
        var d = this.uh(b);
        if (d && Rh(a, d)) return 4;
        d = this.Rg(b, c);
        if (Rh(a, d)) return 3;
        b = this.Zd(b, c);
        return Rh(a, b) ? 2 : 1
    };
    m.Zd = function(a, b) {
        var c = a;
        if (!G || 9 <= Number(ee)) a = Yh(c, "borderLeftWidth"), d = Yh(c, "borderRightWidth"), e = Yh(c, "borderTopWidth"), c = Yh(c, "borderBottomWidth"), a = new Ph(parseFloat(e), parseFloat(d), parseFloat(c), parseFloat(a));
        else {
            a = ii(c, "borderLeft");
            var d = ii(c, "borderRight"),
                e = ii(c, "borderTop");
            c = ii(c, "borderBottom");
            a = new Ph(e, d, c, a)
        }
        return new Ph(b.top + a.top, b.right - 1 - a.right, b.bottom - 1 - a.bottom, b.left + a.left)
    };
    m.Rg = function(a, b) {
        b = this.Zd(a, b);
        var c = a,
            d = "padding";
        if (G) {
            a = gi(c, d + "Left");
            var e = gi(c, d + "Right"),
                f = gi(c, d + "Top");
            c = gi(c, d + "Bottom");
            a = new Ph(f, e, c, a)
        } else a = Yh(c, d + "Left"), e = Yh(c, d + "Right"), f = Yh(c, d + "Top"), c = Yh(c, d + "Bottom"), a = new Ph(parseFloat(f), parseFloat(e), parseFloat(c), parseFloat(a));
        return new Ph(b.top + a.top, b.right - a.right, b.bottom - a.bottom, b.left + a.left)
    };
    m.uh = function(a) {
        var b = this.H.B,
            c = b.createRange();
        if (!c) return null;
        b = b.createNodeIterator(a, NodeFilter.SHOW_TEXT, {
            acceptNode: function(d) {
                return /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
        });
        for (a = b.nextNode(); b.nextNode(););
        b = b.previousNode();
        if (!a || !b) return null;
        c.setStartBefore(a);
        c.setEndAfter(b);
        c = c.getBoundingClientRect();
        return 0 === c.width || 0 === c.height ? null : new Ph(c.top, c.right, c.bottom, c.left)
    };
    var gq = {
            nk: 1,
            pk: 2,
            il: 3,
            jl: 4,
            ll: 5,
            jk: 6,
            kk: 7,
            mk: 8,
            Mk: 9,
            kl: 10,
            lk: 11,
            hl: 12,
            ik: 13
        },
        hq = {
            bk: 1,
            Nk: 2,
            ek: 3,
            ml: 4
        },
        iq = {
            ck: 1,
            nl: 2,
            Jk: 3,
            cl: 4
        },
        jq = {},
        eq = (jq[1] = 3, jq[4] = 10, jq[3] = 12, jq[2] = 4, jq[5] = 5, jq),
        kq = {},
        fq = (kq[1] = 6, kq[4] = 11, kq[3] = 13, kq[2] = 7, kq[5] = 8, kq),
        Zp = gb(Yf(gq), function(a) {
            return !lb([1, 2], a)
        }),
        $p = Yf(hq),
        aq = Yf(iq),
        dq = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };
    var lq = function(a, b) {
            x(b) || (b = [b]);
            b = hb(b, function(c) {
                return "string" === typeof c ? c : c = c.Cl + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
            });
            Wh(a, "transition", b.join(","))
        },
        mq = xb(function() {
            if (G) return be("10.0");
            var a = xf(document, "DIV"),
                b = Td ? "-webkit" : Sd ? "-moz" : G ? "-ms" : Qd ? "-o" : null,
                c = {
                    transition: "opacity 1s linear"
                };
            b && (c[b + "-transition"] = "opacity 1s linear");
            b = "div";
            c = {
                style: c
            };
            var d = String(b);
            if (!wd.test(d)) throw Error("");
            if (d.toUpperCase() in yd) throw Error("");
            b = String(b);
            d = null;
            var e = "<" + b,
                f = c,
                g =
                "";
            if (f)
                for (l in f) {
                    if (!wd.test(l)) throw Error("");
                    var h = f[l];
                    if (null != h) {
                        var k = l;
                        if (h instanceof Nb) h = Ob(h);
                        else if ("style" == k.toLowerCase()) {
                            if (!Pa(h)) throw Error("");
                            h instanceof zc || (h = Dc(h));
                            h = Ac(h)
                        } else {
                            if (/^on/i.test(k)) throw Error("");
                            if (k.toLowerCase() in xd)
                                if (h instanceof Tb) h = Ub(h).toString();
                                else if (h instanceof C) h = sc(h).toString();
                            else if ("string" === typeof h) h = wc(h).L();
                            else throw Error("");
                        }
                        h.V && (h = h.L());
                        k = k + '="' + ic(String(h)) + '"';
                        g += " " + k
                    }
                }
            var l = g;
            e += l;
            l = void 0;
            null == l ? l = [] : x(l) ||
                (l = [l]);
            !0 === Kb[b.toLowerCase()] ? e += ">" : (l = Bd(l), e += ">" + td(l).toString() + "</" + b + ">", d = l.Ka());
            (l = c && c.dir) && (d = /^(ltr|rtl|auto)$/i.test(l) ? 0 : null);
            b = ud(e, d);
            l = a;
            if (Cd())
                for (; l.lastChild;) l.removeChild(l.lastChild);
            l.innerHTML = td(b);
            a = a.firstChild;
            l = "transition";
            b = a.style[Ld(l)];
            a = "undefined" !== typeof b ? b : a.style[Vh(a, l)] || "";
            return "" != a
        });
    var nq = function(a, b) {
        this.ea = ["", ""];
        this.l = a || "";
        this.Ja = b || ""
    };
    m = nq.prototype;
    m.Wc = function() {
        this.ea[0] = "";
        this.Ja = this.l = this.ea[1] = ""
    };
    m.Oa = function(a, b) {
        0 > this.ea[a].indexOf(b) && (this.ea[a] += b);
        return this
    };
    m.xc = function(a) {
        return 0 <= this.l.indexOf(a)
    };
    m.R = function(a) {
        this.xc(a) || (this.l = a + this.l);
        return this
    };
    m.tb = function(a) {
        0 > this.Ja.indexOf(a) && (this.Ja = a + this.Ja);
        return this
    };
    m.toString = function() {
        return [this.ea[0], this.ea[1], this.l, this.Ja].join("|")
    };
    m.ng = function(a, b) {
        return null != a && this.ea[0] || null != b && this.ea[1] ? !1 : !0
    };
    m.ld = function() {
        var a = this.Ke("", null, 0);
        if (null === a) return "XS";
        a = a ? "C" : "N";
        var b = this.l;
        return 0 <= b.indexOf("a") ? a + "A" : 0 <= b.indexOf("f") ? a + "F" : a + "S"
    };
    m.Ke = function(a, b, c) {
        if ("" != this.Ja || a) return null;
        a = this.l;
        return "" == a.replace(oq, "") ? this.ng(b, c) : !1
    };
    var sq = function(a, b, c, d, e, f, g) {
        this.Ai = a;
        this.Bc = c;
        this.Da = b;
        this.pd = (a = this.Da.ownerDocument) && (a.defaultView || a.parentWindow);
        this.P = new pq(this.Da);
        this.N = g;
        this.If = qq(this.P, d.dd, d.height, d.Re);
        this.U = this.N ? this.P.boundingClientRect ? this.P.boundingClientRect.right - this.P.boundingClientRect.left : null : e;
        this.T = this.N ? this.P.boundingClientRect ? this.P.boundingClientRect.bottom - this.P.boundingClientRect.top : null : f;
        this.M = rq(d.width);
        this.C = rq(d.height);
        this.Kc = this.N ? rq(d.opacity) : null;
        this.Dd = d.check;
        this.ga = "animate" == d.dd && !this.P.Lb(this.C, this.Se) && mq();
        this.Rf = !!d.vd;
        this.l = new nq;
        this.P.Lb(this.C, this.Se) && this.l.R("r");
        this.P.ge() && this.l.R("b");
        this.Gb = this.Va = null;
        this.od = !1;
        this.Je = !!d.Qi;
        this.Ti = !!d.Me;
        this.Se = !!d.Re
    };
    m = sq.prototype;
    m.qf = function() {
        if (this.N && !this.If || null == this.M && null == this.C && null == this.Kc && this.N) return this.l;
        var a = this.N;
        this.N = !1;
        this.Ne();
        this.N = a;
        if (!a || null != this.Dd && !this.l.Ke(this.Dd, this.M, this.C)) return this.l;
        this.l.xc("n") && (this.T = this.U = null);
        if (null == this.U && null !== this.M || null == this.T && null !== this.C) this.ga = !1;
        0 != this.M && 0 != this.C || !this.l.xc("l") || (this.C = this.M = 0);
        this.l.Wc();
        this.Ri();
        return this.Ne()
    };
    m.Ri = function() {
        var a = this.Da;
        a.style.overflow = this.Rf ? "visible" : "hidden";
        this.ga && (this.Gb ? (lq(a, tq), lq(this.Gb, tq)) : lq(a, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== this.Kc && (a.style.opacity = this.Kc);
        var b = null != this.U && null != this.M && (this.Je || this.M > this.U) ? this.M : null,
            c = null != this.T && null != this.C && (this.Je || this.C > this.T) ? this.C : null;
        if (this.Bc)
            for (var d = this.Bc.length, e = 0; e < d; e++) uq(this.Bc[e], b, c);
        var f = this.M,
            g = this.C,
            h = this.Gb,
            k = this.od;
        b = function() {
            uq(a, f, g);
            if (h && !k && !g) {
                var l = function(n) {
                    for (var q = 0; q < n.length; q++) Wh(h, n[q], "0px")
                };
                l(vq);
                l(wq)
            }
        };
        this.ga ? v.setTimeout(b, 1E3) : b()
    };
    m.eg = function(a) {
        var b = !1;
        "none" == a.display && (this.l.R("n"), this.N && (b = !0));
        "hidden" != a.visibility && "collapse" != a.visibility || this.l.R("v");
        "hidden" == a.overflow && this.l.R("o");
        "absolute" == a.position ? (this.l.R("a"), b = !0) : "fixed" == a.position && (this.l.R("f"), b = !0);
        return b
    };
    m.Ne = function() {
        var a = this.pd;
        this.Va = function() {};
        this.Cd(this.Da, a);
        var b = this.Da.parentElement;
        if (!b) return this.l;
        for (var c = !0, d = null; b;) {
            try {
                d = /^head|html$/i.test(b.nodeName) ? null : Sf(b, a)
            } catch (f) {
                this.l.tb("c")
            }
            var e = this.Bj(a, b, d);
            b.classList.contains("adsbygoogle") && d && (/^\-.*/.test(d["margin-left"]) || /^\-.*/.test(d["margin-right"])) && (this.od = !0);
            if (c && !e && xq(d)) {
                this.l.R("l");
                this.Gb = b;
                break
            }
            c = c && e;
            if (d && this.eg(d)) break;
            b = b.parentElement;
            if (!b) {
                if (a === this.Ai) break;
                try {
                    if (b = a.frameElement,
                        a = a.parent, !J(a)) {
                        this.l.R("c");
                        break
                    }
                } catch (f) {
                    this.l.R("c");
                    break
                }
            }
        }
        this.ga && this.N && this.Sf();
        return this.l
    };
    m.ki = function(a, b) {
        if (3 == a.nodeType) return b = a, /\S/.test(b.data) ? 1 : 0;
        if (1 == a.nodeType) {
            if (/^(head|script|style)$/i.test(a.nodeName)) return 0;
            var c = null;
            try {
                c = Sf(a, b)
            } catch (d) {}
            if (c) {
                if ("none" == c.display || "fixed" == c.position) return 0;
                if ("absolute" == c.position) {
                    if (!this.P.boundingClientRect || "hidden" == c.visibility || "collapse" == c.visibility) return 0;
                    b = null;
                    try {
                        b = a.getBoundingClientRect()
                    } catch (d) {
                        return 0
                    }
                    return (b.right > this.P.boundingClientRect.left ? 2 : 0) | (b.bottom > this.P.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    };
    m.Cd = function(a, b) {
        var c = 0;
        if (!a || !a.parentElement) return !0;
        for (var d = !1, e = 0, f = a.parentElement.childNodes, g = 0; g < f.length; g++) {
            var h = f[g];
            h == a ? d = !0 : (h = this.ki(h, b), c |= h, d && (e |= h))
        }
        e & 1 && (c & 2 && this.l.Oa(0, "o"), c & 4 && this.l.Oa(1, "o"));
        return !(c & 1)
    };
    m.lf = function(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = bg(f);
                null == f && (this.l.tb("n"), this.l.Oa(a, b))
            }
            if (null != f)
                if (c) {
                    if (this.N)
                        if (this.ga) {
                            var k = Math.max(f + h - (g || 0), 0),
                                l = this.Va;
                            this.Va = function(n, q) {
                                n == a && d.setAttribute(e, k - q);
                                l && l(n, q)
                            }
                        } else d.setAttribute(e, h)
                } else this.l.Oa(a, b)
        }
    };
    m.bb = function(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            d = f && f[g];
            "string" != typeof d || ("m" == b ? yq(d) : zq(d)) || (d = dg(d), null == d ? this.l.R("p") : null != k && this.l.R(d == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == b ? yq(h) : zq(h)) return;
                h = dg(h);
                null == h && (this.l.tb("p"), this.l.Oa(a, b))
            }
            if (null != h)
                if (c && e) {
                    var n = e;
                    if (this.N)
                        if (this.ga) {
                            var q = Math.max(h + l - (k || 0), 0),
                                u = this.Va;
                            this.Va = function(t, w) {
                                t == a && (n[g] = q - w + "px");
                                u && u(t, w)
                            }
                        } else n[g] = l + "px"
                } else this.l.Oa(a, b)
        }
    };
    m.Bj = function(a, b, c) {
        var d = null;
        try {
            d = b.style
        } catch (w) {
            this.l.tb("s")
        }
        var e = b.getAttribute("width"),
            f = bg(e),
            g = b.getAttribute("height"),
            h = bg(g),
            k = c && /^block$/.test(c.display) || d && /^block$/.test(d.display);
        a = this.Cd(b, a);
        var l = c && c.width,
            n = c && c.height,
            q = d && d.width,
            u = d && d.height,
            t = dg(l) == this.U && dg(n) == this.T;
        l = t ? l : q;
        u = t ? n : u;
        q = dg(l);
        t = dg(u);
        f = null !== this.U && (null !== q && this.U >= q || null !== f && this.U >= f);
        t = null !== this.T && (null !== t && this.T >= t || null !== h && this.T >= h);
        h = !a && xq(c);
        t = a || t || h || !(e || l || c && (!yq(String(c.minWidth)) ||
            !zq(String(c.maxWidth))));
        k = a || f || h || k || !(g || u || c && (!yq(String(c.minHeight)) || !zq(String(c.maxHeight))));
        this.lf(0, "d", t, b, "width", e, this.U, this.M);
        this.bb(0, "d", t, b, d, c, "width", l, this.U, this.M);
        this.bb(0, "m", t, b, d, c, "minWidth", d && d.minWidth, this.U, this.M);
        this.bb(0, "M", t, b, d, c, "maxWidth", d && d.maxWidth, this.U, this.M);
        this.Ti ? (b = /^html|body$/i.test(b.nodeName), e = dg(n), g = null != this.C && c && e && Math.round(e) !== this.C && "auto" !== c.overflowY && "scroll" !== c.overflowY && "100%" !== c.minHeight, this.N && !b && g && (d.setProperty("height",
            "auto", "important"), c && !yq(String(c.minHeight)) && d.setProperty("min-height", "0px", "important"), c && !zq(String(c.maxHeight)) && this.C && Math.round(e) < this.C && d.setProperty("max-height", "none", "important"))) : (this.lf(1, "d", k, b, "height", g, this.T, this.C), this.bb(1, "d", k, b, d, c, "height", u, this.T, this.C), this.bb(1, "m", k, b, d, c, "minHeight", d && d.minHeight, this.T, this.C), this.bb(1, "M", k, b, d, c, "maxHeight", d && d.maxHeight, this.T, this.C));
        return a
    };
    m.Sf = function() {
        var a = 31.25,
            b = this.pd,
            c = this.Da,
            d = this.M,
            e = this.C,
            f = this.Va,
            g, h = function() {
                if (0 < a) {
                    var k = Sf(c, b) || {},
                        l = dg(k.width);
                    k = dg(k.height);
                    null !== l && null !== d && f && f(0, d - l);
                    null !== k && null !== e && f && f(1, e - k);
                    --a
                } else v.clearInterval(g), f && (f(0, 0), f(1, 0))
            };
        v.setTimeout(function() {
            g = v.setInterval(h, 16)
        }, 990)
    };
    var pq = function(a) {
        var b = a && a.ownerDocument,
            c = b && (b.defaultView || b.parentWindow);
        c = c && (J(c.top) ? c.top : null);
        this.Cb = !!c;
        this.boundingClientRect = null;
        if (a) try {
            this.boundingClientRect = a.getBoundingClientRect()
        } catch (d) {}
        this.oc = this.yj(a);
        c = c || v;
        this.jd = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
        b = b && Qn(b);
        this.pf = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >=
            this.boundingClientRect.right)
    };
    m = pq.prototype;
    m.yj = function(a) {
        for (var b = 0, c = this.boundingClientRect; a;) try {
            c && (b += c.top);
            var d = a.ownerDocument,
                e = d && (d.defaultView || d.parentWindow);
            (a = e && e.frameElement) && (c = a.getBoundingClientRect())
        } catch (f) {
            break
        }
        return b
    };
    m.ge = function() {
        return this.Cb && this.oc >= this.jd
    };
    m.Oh = function(a) {
        a = this.oc + Math.min(a, rq(this.getHeight()));
        return this.Cb && a >= this.jd
    };
    m.Lb = function(a, b) {
        return this.Cb && (!this.pf || (b ? this.Oh(a) : this.ge()))
    };
    m.isVisible = function() {
        return this.pf
    };
    m.getWidth = function() {
        return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
    };
    m.getHeight = function() {
        return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
    };
    for (var qq = function(a, b, c, d) {
            switch (b) {
                case "no_rsz":
                    return !1;
                case "force":
                case "animate":
                    return !0;
                default:
                    return a.Lb(c, d)
            }
        }, xq = function(a) {
            return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
        }, Aq = function(a, b, c, d) {
            a = new sq(a, b, d, c, null, null, !0);
            return a.qf()
        }, Bq = new nq("s", ""), oq = /[lonvafrbpEe]/g, zq = function(a) {
            return !a || /^(auto|none|100%)$/.test(a)
        }, yq = function(a) {
            return !a || /^(0px|auto|none|0%)$/.test(a)
        }, uq = function(a, b, c) {
            null !== b && null !== bg(a.getAttribute("width")) && a.setAttribute("width",
                b);
            null !== c && null !== bg(a.getAttribute("height")) && a.setAttribute("height", c);
            null !== b && (a.style.width = b + "px");
            null !== c && (a.style.height = c + "px")
        }, vq = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "), wq = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" "), Cq, Dq = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s", Eq = vq, Fq = 0; Fq < Eq.length; Fq++) Dq +=
        ", " + Eq[Fq] + " .2s cubic-bezier(.4, 0, 1, 1)";
    Eq = wq;
    for (var Gq = 0; Gq < Eq.length; Gq++) Dq += ", " + Eq[Gq] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var tq = Cq = Dq,
        rq = function(a) {
            return "string" === typeof a ? bg(a) : "number" === typeof a && isFinite(a) ? a : null
        };
    var Hq = function(a, b, c, d) {
        R.call(this, a);
        this.o = b;
        this.ca = c;
        this.Qf = String(d.google_ad_unit_key || "");
        this.td = String(d.google_ad_dom_fingerprint || "");
        this.Jf = String(d.google_ad_format || "");
        this.Eg = Ui(d).eids || [];
        this.pj = String(d.google_ad_slot || "");
        this.Gj = String(d.google_page_url || "")
    };
    ka(Hq, R);
    m = Hq.prototype;
    m.Ta = function(a) {
        a["ablate-me"] = this.Gf;
        a["resize-me"] = this.Si
    };
    m.Gf = function(a, b) {
        wk(b, this.o.contentWindow) && (a = yk(a), this.Ff(a))
    };
    m.Si = function(a, b) {
        if (wk(b, this.o.contentWindow)) {
            a = yk(a);
            var c = a.r_chk;
            if (null == c || "" === c) {
                var d = bg(a.r_nw),
                    e = bg(a.r_nh),
                    f = bg(a.r_no);
                null != f || 0 !== d && 0 !== e || (f = 0);
                var g = a.r_str;
                g = g ? g : null;
                var h = cg(a.r_ao, !1),
                    k = cg(a.r_ifr, !1),
                    l = cg(a.r_cab, !1);
                c = this.Le(c, d, e, f, g, h, k, l, a);
                c = {
                    msg_type: "resize-result",
                    r_str: g,
                    r_status: c
                };
                b = b.source;
                c.googMsgType = "sth";
                b.postMessage((new Tj(void 0)).Ya(c), "*");
                this.o.dataset.googleQueryId || (b = a.qid, this.o.setAttribute("data-google-query-id", b))
            }
        }
    };
    m.Mg = function(a, b) {
        var c = xk(this.A || L()),
            d = {
                scrl: c,
                adk: this.Qf,
                adf: this.td,
                fmt: this.Jf
            };
        a && (d.str = a.Lb(bg(b.r_nh), cg(b.r_cab, !1)), d.ad_y = a.oc, d.vph = a.jd);
        xi(b, function(e, f) {
            d[f] = e
        });
        return d
    };
    m.Ff = function(a) {
        var b = a["collapse-after-close"],
            c = a.clp_btf_only;
        b = "animate" === b ? "animate" : "1" === c ? "safe" : "force";
        this.Le(null, null, 0, 0, b, !1, !1, !1, a)
    };
    m.Le = function(a, b, c, d, e, f, g, h, k) {
        var l = this,
            n = L();
        if (!this.o || !n) return k.err = "2", this.za("resize", k, null), !1;
        if ("no_rsz" === e) return k.err = "7", this.za("resize", k, null), !0;
        var q = new pq(this.ca || this.o);
        if (!q.Cb) return k.err = "3", this.za("resize", k, null), !1;
        var u = q.getWidth();
        null != u && (k.w = u);
        u = q.getHeight();
        null != u && (k.h = u);
        if (qq(q, e, c, h)) {
            var t = (u = this.ca && this.ca.ownerDocument.getElementById(this.ca.id + "_anchor")) ? [this.ca, this.o] : null;
            u = u || this.o;
            var w = ki(154);
            a = Aq(n, u, {
                width: b,
                height: c,
                opacity: d,
                check: a,
                dd: e,
                vd: f,
                Qi: g,
                Me: w,
                Re: h
            }, t);
            null != b && (k.nw = b);
            null != c && (k.nh = c);
            k.rsz = a.toString();
            k.abl = a.ld();
            k.frsz = ("force" === e).toString();
            k.err = "0";
            this.za("resize", k, q);
            (b = jb(vn.Xd().sh(), function(y) {
                return lb([248427477, 248427478], y)
            })) && this.A === n && cq(this.A, [5, 8, 9], [3, 4], void 0, 2).ve(u).then(function(y) {
                Pn(8, [y]);
                return y
            }).then(function(y) {
                Q("resize-ovlp", {
                    adf: l.td,
                    eid: l.Eg.join(","),
                    io: Number(y.isOverlappingOrOutsideViewport),
                    oa: y.overlappedArea.toFixed(2),
                    qid: k.qid || "",
                    slot: l.pj,
                    url: l.Gj,
                    vp: y.viewportSize.width +
                        "x" + y.viewportSize.height
                }, 1)
            }).ef(function(y) {
                Q("resize-ovlp-err", {
                    err: y.message
                }, 1)
            });
            return !0
        }
        k.err = "1";
        this.za("resize", k, q);
        return !1
    };
    m.za = function(a, b, c) {
        var d = b.gen204_fraction;
        d = Ah(String(d), .05);
        b = this.Mg(c, b);
        b.url = this.A.document.URL;
        Q(a, b, d)
    };
    var Kq = function(a, b) {
        b = void 0 === b ? {} : b;
        this.root = b.root ? b.root : null;
        this.Pe = b.rootMargin ? Iq(b.rootMargin) : [{
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }, {
            value: 0,
            type: "px"
        }];
        this.rootMargin = hb(this.Pe, function(c) {
            return "" + c.value + c.type
        }).join(" ");
        this.thresholds = Jq(b.threshold);
        this.cg = a;
        this.Aa = [];
        this.Fb = [];
        this.Jc = !1;
        this.Na = null;
        this.gb = zb(this.Bd, 100, this)
    };
    m = Kq.prototype;
    m.qh = function() {
        var a = window.performance;
        return a && a.now ? a.now() : 0
    };
    m.Dg = function() {
        if (this.root) var a = Lq(this.root);
        else {
            var b = tf(window);
            a = {
                top: 0,
                right: b.width,
                bottom: b.height,
                left: 0,
                width: b.width,
                height: b.height
            }
        }
        b = hb(this.Pe, function(c, d) {
            return "px" == c.type ? c.value : c.value * (d % 2 ? a.width : a.height) / 100
        });
        return {
            top: a.top - b[0],
            right: a.right + b[1],
            bottom: a.bottom + b[2],
            left: a.left - b[3],
            width: a.width + b[1] + b[3],
            height: a.height + b[0] + b[2]
        }
    };
    m.mj = function(a, b) {
        if (!a || a.isIntersecting != b.isIntersecting) return !0;
        var c = a.intersectionRatio,
            d = b.intersectionRatio;
        return c == d ? !1 : jb(this.thresholds, function(e) {
            return e < c != e < d
        })
    };
    m.Bd = function() {
        var a = this,
            b = this.Dg();
        fb(this.Aa, function(c) {
            var d = c.target,
                e = Lq(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                n = h - l,
                q = k - g;
            g = 0 <= n && 0 <= q ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: n,
                height: q
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            f = f ? k / f : h ? 1 : 0;
            k = a.qh();
            d = {
                boundingClientRect: e,
                intersectionRatio: f,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: k
            };
            a.mj(c.Ld, d) && a.Fb.push(d);
            c.Ld = d
        });
        this.Fb.length && this.cg(this.takeRecords(), this)
    };
    m.observe = function(a) {
        jb(this.Aa, function(b) {
            return b.target == a
        }) || (this.Aa.push({
            target: a,
            Ld: null
        }), this.Bd(), this.Jc || (this.Jc = !0, K(v, "scroll", this.gb), K(v, "resize", this.gb), v.MutationObserver && !this.Na && (this.Na = new MutationObserver(this.gb), this.Na.observe(v.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    m.unobserve = function(a) {
        this.Aa = gb(this.Aa, function(b) {
            return b.target != a
        });
        0 == this.Aa.length && this.disconnect()
    };
    m.disconnect = function() {
        this.Jc = !1;
        this.Aa.length = 0;
        hh(v, "scroll", this.gb);
        hh(v, "resize", this.gb);
        this.Na && (this.Na.disconnect(), this.Na = null)
    };
    m.takeRecords = function() {
        var a = [].concat(p(this.Fb));
        this.Fb.length = 0;
        return a
    };

    function Iq(a) {
        a = hb(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    }

    function Jq(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = gb(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        qb(a);
        sb(a, function(b, c) {
            return b - c
        });
        return a
    }

    function Lq(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    var Mq = function(a, b, c) {
            return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new Kq(c, b)
        },
        Nq = function(a, b, c) {
            K(a, b, c);
            return function() {
                return hh(a, b, c)
            }
        },
        Oq = null,
        Pq = function() {
            Oq = uj()
        },
        Qq = function(a, b) {
            if (!b) return !1;
            if (null === Oq) return K(a, "mousemove", Pq, {
                passive: !0
            }), K(a, "scroll", Pq, {
                passive: !0
            }), Pq(), !1;
            a = uj() - Oq;
            return a >= 1E3 * b
        },
        Rq = function(a) {
            var b = a.Ba,
                c = a.element,
                d = a.wj,
                e = a.sj,
                f = void 0 === a.cf ? 0 : a.cf,
                g = a.bg,
                h = a.xg;
            a = void 0 === a.options ? {} : a.options;
            var k = null,
                l = !1,
                n = !1,
                q = [],
                u = Mq(b, a,
                    function(t, w) {
                        try {
                            var y = function() {
                                    q.length || (e && (q.push(Nq(c, "mouseenter", function() {
                                        l = !0;
                                        y()
                                    })), q.push(Nq(c, "mouseleave", function() {
                                        l = !1;
                                        y()
                                    }))), q.push(Nq(b.document, "visibilitychange", function() {
                                        return y()
                                    })));
                                    var B = Qq(b, f);
                                    !n || l || B || Sn(b.document) ? (b.clearTimeout(k), k = null) : k = k || b.setTimeout(function() {
                                        Qq(b, f) ? y() : (g(), w.disconnect())
                                    }, 1E3 * d)
                                },
                                A = t[t.length - 1];
                            n = A.isIntersecting;
                            y()
                        } catch (B) {
                            h && h(B)
                        }
                    });
            u.observe(c);
            return function() {
                u.disconnect();
                for (var t = ca(q), w = t.next(); !w.done; w = t.next()) w =
                    w.value, w();
                null != k && b.clearTimeout(k)
            }
        };
    var Sq = function(a, b, c, d) {
        R.call(this, a);
        this.o = b;
        this.$a = c;
        this.og = d;
        this.gc = null;
        this.gd = !1;
        (b = (b = b.contentWindow) && b.parent) && a != b && this.me(b)
    };
    ka(Sq, R);
    Sq.prototype.Ta = function(a) {
        var b = this;
        a.av_ref = function(c, d) {
            return b.rg(c, d)
        }
    };
    Sq.prototype.rg = function(a, b) {
        var c = this;
        if (wk(b, this.o.contentWindow)) {
            this.gd = !!a.tac;
            this.nc();
            a = yk(a);
            b = parseInt(a["int"], 10);
            var d = !!a.ocpc;
            if (!d || !this.gd) {
                for (d = (d = this.A.document.getElementById(this.$a.google_async_iframe_id)) && Df(d); d && !Ki.test(d.className);) d = Df(d);
                if (d && !(0 >= b)) {
                    var e = d;
                    b -= .2;
                    a = parseInt(a.idt, 10) || 3;
                    this.gc = Rq({
                        Ba: this.A,
                        element: e,
                        sj: !Jf(),
                        cf: b * a,
                        wj: b,
                        bg: function() {
                            return c.Gi(e)
                        },
                        options: {
                            threshold: 1
                        },
                        xg: function(f) {
                            return Fj.Mb(623, f, void 0, void 0)
                        }
                    })
                }
            }
        }
    };
    Sq.prototype.Gi = function(a) {
        var b = this,
            c = this.gd;
        this.og(c);
        setTimeout(O(624, function() {
                b.$a.google_refresh_count = (parseInt(b.$a.google_refresh_count, 10) || 0) + 1;
                Bf(a);
                b.o = null;
                var d = a,
                    e = b.$a,
                    f = b.A;
                d.setAttribute("data-adsbygoogle-status", "reserved");
                d.className += " adsbygoogle-noablate";
                var g = f;
                if (!g.adsbygoogle) {
                    g.adsbygoogle = [];
                    var h = Ln(Qi(), "/pagead/js/adsbygoogle.js");
                    Rf(g.document, h)
                }
                f.adsbygoogle.push({
                    element: d,
                    params: e
                })
            }),
            200)
    };
    Sq.prototype.K = function() {
        R.prototype.K.call(this);
        this.o = null;
        this.gc && this.gc()
    };
    var Tq = function(a, b, c, d) {
        return new Sq(a, b, c, d)
    };
    var Uq = navigator,
        Vq = function() {
            try {
                return Uq.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        Wq = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Xq = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Wq(a.toLowerCase())
        },
        Yq = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Zq = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        $q = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    var ar = /^blogger$/,
        br = /^wordpress(.|\s|$)/i,
        cr = /^joomla!/i,
        dr = /^drupal/i,
        er = /\/wp-content\//,
        fr = /\/wp-content\/plugins\/advanced-ads/,
        gr = /\/wp-content\/themes\/genesis/,
        hr = /\/wp-content\/plugins\/genesis/,
        ir = function(a) {
            for (var b = a.getElementsByTagName("script"), c = b.length, d = 0; d < c; ++d) {
                var e = b[d];
                if (e.hasAttribute("src")) {
                    e = e.getAttribute("src");
                    if (fr.test(e)) return 5;
                    if (hr.test(e)) return 6
                }
            }
            b = a.getElementsByTagName("link");
            c = b.length;
            for (d = 0; d < c; ++d)
                if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"),
                        gr.test(e) || hr.test(e))) return 6;
            a = a.getElementsByTagName("meta");
            d = a.length;
            for (e = 0; e < d; ++e) {
                var f = a[e];
                if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                    f = f.getAttribute("content");
                    if (ar.test(f)) return 1;
                    if (br.test(f)) return 2;
                    if (cr.test(f)) return 3;
                    if (dr.test(f)) return 4
                }
            }
            for (a = 0; a < c; ++a)
                if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), er.test(d))) return 2;
            return 0
        };
    var jr = function() {
        this.Bb = [];
        this.xb = -1
    };
    jr.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.Bb[a] != b && (this.Bb[a] = b, this.xb = -1)
    };
    jr.prototype.get = function(a) {
        return !!this.Bb[a]
    };
    jr.prototype.ui = function() {
        -1 == this.xb && (this.xb = ib(this.Bb, function(a, b, c) {
            return b ? a + Math.pow(2, c) : a
        }, 0));
        return this.xb
    };
    var kr = /[+, ]/,
        qr = function(a, b) {
            var c = a.j,
                d, e = L().document,
                f = {},
                g = L(),
                h, k = e,
                l = {};
            l.gf = ln(L());
            l.zj = ko(l.gf);
            l.fe = io(L(), k, c.google_ad_width, c.google_ad_height);
            var n = l.fe,
                q = l.zj.Fc,
                u = L();
            var t = u.top == u ? 0 : J(u.top) ? 1 : 2;
            var w = t,
                y = 4;
            n || 1 != w ? n || 2 != w ? n && 1 == w ? y = 7 : n && 2 == w && (y = 8) : y = 6 : y = 5;
            q && (y |= 16);
            var A = "" + y;
            l.Dh = A;
            l.Md = lo(L());
            var B = h = l,
                Z = B.gf,
                E = B.fe,
                pe = !!c.google_page_url;
            f.google_iframing = B.Dh;
            0 != B.Md && (f.google_iframing_environment = B.Md);
            if (!pe && "ad.yieldmanager.com" == e.domain) {
                for (var Vc = e.URL.substring(e.URL.lastIndexOf("http")); - 1 <
                    Vc.indexOf("%");) try {
                    Vc = decodeURIComponent(Vc)
                } catch (X) {
                    break
                }
                c.google_page_url = Vc;
                pe = !!Vc
            }
            if (pe) {
                var il = e;
                f.google_page_url = c.google_page_url;
                f.google_page_location = (E ? il.referrer : il.URL) || "EMPTY"
            } else {
                if (E && J(g.top) && e.referrer && g.top.document.referrer === e.referrer) {
                    var Hr = g.top.document.URL;
                    f.google_page_url = Hr
                } else f.google_page_url = E ? e.referrer : e.URL;
                f.google_page_location = null
            }
            a: {
                if (e.URL == f.google_page_url) try {
                    var jl = Date.parse(e.lastModified) / 1E3;
                    break a
                } catch (X) {}
                jl = null
            }
            f.google_last_modified_time =
                jl;
            if (Z == Z.top) var kl = Z.document.referrer;
            else {
                var Ir, ll = mi();
                kl = (Ir = ll && ll.referrer) || ""
            }
            f.google_referrer_url = kl;
            var Jr = d = f;
            jo(Jr, c);
            var qe = c.google_page_location || c.google_page_url;
            "EMPTY" == qe && (qe = c.google_page_url);
            if (Gh || !qe) var og = !1;
            else {
                var Aa = qe.toString();
                0 == Aa.indexOf("http://") ? Aa = Aa.substring(7, Aa.length) : 0 == Aa.indexOf("https://") && (Aa = Aa.substring(8, Aa.length));
                var pg = Aa.indexOf("/"); - 1 == pg && (pg = Aa.length);
                var ml = Aa.substring(0, pg);
                if (oo.test(ml)) og = !1;
                else {
                    var jc = ml.split("."),
                        re = !1;
                    3 <= jc.length && (re = jc[jc.length - 3] in no);
                    2 <= jc.length && (re = re || jc[jc.length - 2] in no);
                    og = re
                }
            }
            var nl = og ? Ch("", "pagead2.googlesyndication.com") : Nh(),
                Kr, ba = a,
                qg = b,
                r = {};
            lr(ba, r);
            Jp();
            var Mr = U[1];
            r.adsid = Mr;
            Jp();
            var Nr = U[6];
            r.pucrd = Nr;
            var Ba = ba,
                Ia = Ba.j,
                ol = Ba,
                Wc = ol.j;
            r.dt = xp;
            Hi(Wc) && Wc.google_bpp && (r.bpp = Wc.google_bpp);
            var Or = L();
            b: {
                var Pr = L();
                try {
                    var kc = Pr.performance;
                    if (kc && kc.timing && kc.now) {
                        var Qr = kc.timing.navigationStart + Math.round(kc.now());
                        var pl = Qr - kc.timing.domLoading;
                        break b
                    }
                } catch (X) {}
                pl = null
            }
            var ql = pl;
            if (ql) {
                var Rr = xp,
                    Sr = Or.Date.now() - Rr,
                    Tr = Ap(ql, Sr, 1E6);
                var rl = Tr
            } else rl = null;
            var sl = rl;
            sl && (r.bdt = sl);
            var tl = Wc.google_iframe_start_time;
            if (za(tl)) {
                Wc.google_iframe_start_time = null;
                var Ur = Ap(tl, xp);
                var ul = Ur
            } else ul = null;
            var vl = ul;
            null != vl && (r.fdt = vl);
            r.idt = Ap(ol.oj, xp);
            var wl = Ba.j;
            r.shv = Dh();
            r.cbv = "/r20110914".replace("/", "");
            /^\w{1,3}$/.test(wl.google_loader_used) && (r.saldr = wl.google_loader_used);
            Eh && (r.jscb = 1);
            Fh && (r.jscd = 1);
            var rg = mi(Ba.pubWin);
            if (rg) {
                r.is_amp = 1;
                var sg = rg || mi();
                var Vr = sg && sg.mode ? +sg.mode.version || null : null;
                r.amp_v = Vr;
                var tg = rg || mi();
                if (tg && tg.container) {
                    for (var xl = tg.container.split(","), yl = [], ug = 0; ug < xl.length; ug++) yl.push(li[xl[ug]] || "x");
                    var zl = yl.join()
                } else zl = null;
                var Al = zl;
                Al && (r.act = Al)
            }
            L() == window.top && (r.abxe = 1);
            if ("_gfp_a_" in Ba.pubWin) {
                var vg = Ba.pubWin._gfp_a_;
                if ("boolean" !== typeof vg) throw Error("Illegal value of _gfp_a_: " + vg);
                if (vg && ki(225)) {
                    var wg = (new Dp(Ba.pubWin,
                        ki(226))).read();
                    wg && (r.cookie = wg, r.crv = "Test" !== wg)
                }
            }
            var Cb = rn(),
                Bl = T(Cb, 8, {}),
                se = Ia.google_ad_section;
            Bl[se] && (r.prev_fmts = Bl[se]);
            var Cl = T(Cb, 9, {});
            Cl[se] && (r.prev_slotnames = Cl[se].toLowerCase());
            mr(Ia, Cb);
            var El = T(Cb, 15, 0);
            0 < El && (r.nras = String(El));
            r.correlator = T(Cb, 7, pn());
            Bn().la["21060549"] && (r.rume = 1);
            if (Ia.google_ad_channel) {
                for (var Fl = T(Cb, 10, {}), Gl = "", Hl = Ia.google_ad_channel.split(kr), xg = 0; xg < Hl.length; xg++) {
                    var yg = Hl[xg];
                    Fl[yg] ? Gl += yg + "+" : Fl[yg] = !0
                }
                r.pv_ch = Gl
            }
            if (Ia.google_ad_host_channel) {
                for (var Il,
                        te = T(Cb, 11, []), Jl = Ia.google_ad_host_channel.split("|"), ue = -1, zg = [], Va = 0; Va < Jl.length; Va++) {
                    var Kl = Jl[Va].split(kr);
                    te[Va] || (te[Va] = {});
                    for (var Xc = "", Ag = 0; Ag < Kl.length; Ag++) {
                        var ve = Kl[Ag];
                        "" !== ve && (te[Va][ve] ? Xc += "+" + ve : te[Va][ve] = !0)
                    }
                    Xc = Xc.slice(1);
                    zg[Va] = Xc;
                    "" !== Xc && (ue = Va)
                }
                var Bg = "";
                if (-1 < ue) {
                    for (var Cg = 0; Cg < ue; Cg++) Bg += zg[Cg] + "|";
                    Bg += zg[ue]
                }
                Il = Bg;
                r.pv_h_ch = Il
            }
            r.frm = Ia.google_iframing;
            r.ife = Ia.google_iframing_environment;
            var Ll = Ia.google_ad_client;
            try {
                var Ml = mn(),
                    we = Ml.google_prev_clients;
                we || (we =
                    Ml.google_prev_clients = {});
                if (Ll in we) var Dg = 1;
                else we[Ll] = !0, Dg = 2
            } catch (X) {
                Dg = 0
            }
            r.pv = Dg;
            var Eg = Ba.pubWin.document,
                Nl = Ba.j,
                Ol = "";
            try {
                Ol = Eg.cookie
            } catch (X) {}
            var Pl = Eg.domain,
                Yc = Ol,
                Wr = Di(),
                Xr = Ba.pubWin.screen,
                Yr = Eg.referrer;
            if (mi()) var Ql = L().gaGlobal || {};
            else {
                var Fg = Math.round((new Date).getTime() / 1E3),
                    Gg = Nl.google_analytics_domain_name,
                    xe = "undefined" == typeof Gg ? Xq("auto", Pl) : Xq(Gg, Pl),
                    Zr = -1 < Yc.indexOf("__utma=" + xe + "."),
                    $r = -1 < Yc.indexOf("__utmb=" + xe),
                    as = oi() || L();
                var bs = as.gaGlobal;
                var Hg;
                if (!(Hg =
                        bs)) {
                    var cs = {},
                        ds = oi() || L();
                    Hg = ds.gaGlobal = cs
                }
                var P = Hg,
                    Rl = !1;
                if (Zr) {
                    var Ig = Yc.split("__utma=" + xe + ".")[1].split(";")[0].split(".");
                    $r ? P.sid = Ig[3] + "" : P.sid || (P.sid = Fg + "");
                    P.vid = Ig[0] + "." + Ig[1];
                    P.from_cookie = !0
                } else {
                    P.sid || (P.sid = Fg + "");
                    if (!P.vid) {
                        Rl = !0;
                        var es = Math.round(2147483647 * Math.random()),
                            fs = Yc,
                            Sl = Wr,
                            ye = Xr,
                            gs = Yr,
                            Tl, Db = [Uq.appName, Uq.version, Uq.language ? Uq.language : Uq.browserLanguage, Uq.platform, Uq.userAgent, Vq() ? 1 : 0].join("");
                        if (ye) Db += ye.width + "x" + ye.height + ye.colorDepth;
                        else if (v.java && v.java.awt) {
                            var Ul =
                                v.java.awt.Toolkit.getDefaultToolkit().getScreenSize();
                            Db += Ul.screen.width + "x" + Ul.screen.height
                        }
                        Db += fs;
                        Db += gs || "";
                        for (Tl = Db.length; 0 < Sl;) Db += Sl-- ^ Tl++;
                        var hs = Wq(Db);
                        var is = es ^ hs & 2147483647;
                        P.vid = is + "." + Fg
                    }
                    P.from_cookie = !1
                }
                if (!P.cid) {
                    b: {
                        var lc = Gg,
                            Vl = 999;lc && (lc = 0 == lc.indexOf(".") ? lc.substr(1) : lc, Vl = ("" + lc).split(".").length);
                        for (var Wl, Xl = 999, ze = Yc.split(";"), Zc = 0; Zc < ze.length; Zc++) {
                            var Ae = Yq.exec(ze[Zc]) || Zq.exec(ze[Zc]) || $q.exec(ze[Zc]);
                            if (Ae) {
                                var Jg = Ae[1] || 0;
                                if (Jg == Vl) {
                                    var Yl = Ae[2];
                                    break b
                                }
                                Jg < Xl &&
                                    (Xl = Jg, Wl = Ae[2])
                            }
                        }
                        Yl = Wl
                    }
                    var $c = Yl;Rl && $c && -1 != $c.search(/^\d+\.\d+$/) ? P.vid = $c : $c != P.vid && (P.cid = $c)
                }
                P.dh = xe;
                P.hid || (P.hid = Math.round(2147483647 * Math.random()));
                Ql = P
            }
            var ad = Ql;
            r.ga_vid = ad.vid;
            r.ga_sid = ad.sid;
            r.ga_hid = ad.hid;
            r.ga_fc = ad.from_cookie;
            r.ga_cid = ad.cid;
            r.ga_wpids = Nl.google_analytics_uacct;
            var bd = Ba.pubWin,
                cd = new hj(bd);
            bd.location && bd.location.ancestorOrigins && (r.iag = cd.sg());
            r.icsg = cd.tg();
            var Kg = cd.Tg().depth;
            Kg && 0 < Kg && (r.nhd = Kg);
            r.dssz = bd.document.scripts ? bd.document.scripts.length : 0;
            r.mdo = cd.Sg();
            r.mso = cd.rh();
            var Lg = Ia.google_ad_layout;
            Lg && 0 <= To[Lg] && (r.rplot = To[Lg]);
            r.u_tz = -(new Date).getTimezoneOffset();
            r.u_his = Di();
            r.u_java = !!H.navigator && !ui(H.navigator.javaEnabled, "unknown") && !!H.navigator.javaEnabled && H.navigator.javaEnabled();
            H.screen && (r.u_h = H.screen.height, r.u_w = H.screen.width, r.u_ah = H.screen.availHeight, r.u_aw = H.screen.availWidth, r.u_cd = H.screen.colorDepth);
            H.navigator && H.navigator.plugins && (r.u_nplug = H.navigator.plugins.length);
            H.navigator && H.navigator.mimeTypes &&
                (r.u_nmime = H.navigator.mimeTypes.length);
            if (qg) try {
                var Zl = ba,
                    dd = qg;
                var js, $l = mi(),
                    Wa, am = js = $l && (Wa = $l.initialLayoutRect) && "number" === typeof Wa.top && "number" === typeof Wa.left && "number" === typeof Wa.width && "number" === typeof Wa.height ? new Sh(Wa.left, Wa.top, Wa.width, Wa.height) : null;
                if (am) var bm = am.wh();
                else {
                    var mc = ni();
                    bm = mc && Pa(mc.rootBounds) ? new I(mc.rootBounds.left + mc.boundingClientRect.left, mc.rootBounds.top + mc.boundingClientRect.top) : null
                }
                var cm = bm;
                if (cm) var Mg = cm;
                else try {
                    var dm = dd,
                        em = Zl.X,
                        ed = new I(0,
                            0),
                        fm = of (dm);
                    var Xa = fm ? vf(fm) : window;
                    if (Od(Xa, "parent")) {
                        var Ng = dm;
                        do {
                            if (Xa == em) var gm = bi(Ng);
                            else {
                                var hm = $h(Ng);
                                gm = new I(hm.left, hm.top)
                            }
                            var im = gm;
                            ed.x += im.x;
                            ed.y += im.y
                        } while (Xa && Xa != em && Xa != Xa.parent && (Ng = Xa.frameElement) && (Xa = Xa.parent))
                    }
                    Mg = ed
                } catch (X) {
                    Mg = new I(-12245933, -12245933)
                }
                var Be = Mg;
                r.adx && -12245933 != r.adx && r.ady && -12245933 != r.ady || (r.adx = Math.round(Be.x), r.ady = Math.round(Be.y));
                try {
                    var jm = !(!dd || !(dd.offsetWidth || dd.offsetHeight || dd.getClientRects().length))
                } catch (X) {
                    jm = !1
                }
                jm || (ki(186) &&
                    (r.adx = -12245933, r.ady = -12245933), Q("asihe", {
                        x: Be.x,
                        y: Be.y,
                        url: Zl.j.google_page_url
                    }))
            } catch (X) {}
            var Og = ba,
                ks, Ce = ni(),
                Pg = (ks = Ce && Pa(Ce.rootBounds) ? new mf(Ce.rootBounds.width, Ce.rootBounds.height) : null) || Hn(!1, Ri(Og.pubWin));
            Pg && (r.biw = Pg.width, r.bih = Pg.height);
            var km = Og.pubWin;
            var ls = Ri(km) == km;
            if (!ls) {
                var Qg = Hn(!1, Og.pubWin);
                Qg && (r.isw = Qg.width, r.ish = Qg.height)
            }
            var Eb = ba.pubWin;
            if (null !== Eb && Eb != Eb.top) {
                var De = [Eb.document.URL];
                Eb.name && De.push(Eb.name);
                var lm = Hn(!1, Eb, !1);
                De.push(lm.width.toString());
                De.push(lm.height.toString());
                var mm = Zf(De.join(""))
            } else mm = 0;
            var nm = mm;
            0 !== nm && (r.ifk = nm);
            var Ee = Si(ba.pubWin);
            if (Ee && Ee.document) {
                var Fe = Ee.document,
                    fd = Ee;
                fd = void 0 === fd ? v : fd;
                var om = Fe.scrollingElement || ("CSS1Compat" == Fe.compatMode ? Fe.documentElement : Fe.body);
                var pm = new I(fd.pageXOffset || om.scrollLeft, fd.pageYOffset || om.scrollTop)
            } else pm = new I(-12245933, -12245933);
            var Ge = pm;
            ki(196) ? (r.scr_x = Math.round(Ge.x), r.scr_y = Math.round(Ge.y)) : (r.scr_x = Ge.x, r.scr_y = Ge.y);
            var He = ba,
                qm = Bn(),
                rm = Gn(qm),
                Ie = He.j.google_eids;
            if (x(Ie)) {
                Zi(He, 64);
                for (var Je = 0; Je < Ie.length; Je++) ya(Ie[Je]) && rm.push(Ie[Je])
            }
            r.eid = rm.join();
            var sm = Fn(qm),
                tm = He.j.google_loeid;
            ya(tm) && (Zi(He, 4096), ob(sm, tm.split(",")));
            r.loeid = sm.join();
            ba.Mc && (r.oid = ba.Mc);
            var ms = ba,
                ns = Bn().Hb(139),
                os = En.ac;
            if (ns === os) {
                var um = Si(ms.pubWin);
                um && (r.pg_h = uk(um, !0))
            }
            var ps = ba,
                vm = T(rn(), 20, {})[ps.j.google_ad_client];
            vm && (r.psts = vm.join());
            r.pvsid = ch(ba.pubWin);
            a: {
                var wm = ba.pubWin,
                    Ke = -1;
                try {
                    wm.localStorage && (Ke = parseInt(wm.localStorage.getItem("google_pem_mod"), 10))
                } catch (X) {
                    var xm =
                        null;
                    break a
                }
                xm = 0 <= Ke && 1E3 > Ke ? Ke : null
            }
            r.pem = xm;
            var Ja = ba,
                ym = qg,
                V = Ja.j,
                Y = Ja.pubWin,
                zm = mn();
            r.ref = V.google_referrer_url;
            r.loc = V.google_page_location;
            var Le = mi(Ja.pubWin);
            if (Le && Pa(Le.data) && "string" === typeof Le.data.type) {
                var Rg = Le.data.type.toLowerCase();
                var Am = "doubleclick" == Rg || "adsense" == Rg ? null : Rg
            } else Am = null;
            var Bm = Am;
            Bm && (r.apn = Bm.substr(0, 10));
            var gd = ko(zm);
            r.url || r.loc || !gd.url || (r.url = gd.url, gd.Fc || (r.usrc = 1));
            var qs = r.loc || r.url;
            gd.url != qs && (r.top = gd.url);
            V.google_async_rrc && (r.rr = V.google_async_rrc);
            r.rx = 0;
            var rs;
            if (rp && tp(rp)) var Cm = rp;
            else {
                var Sg = mn(),
                    Ya = Sg.google_jobrunner;
                Cm = Ya && (vi(Ya) || wi(Ya)) && tp(Ya) && yi(Ya.nq) && yi(Ya.nqa) && yi(Ya.al) && yi(Ya.rl) ? rp = Ya : Sg.google_jobrunner = rp = new qp(Sg)
            }
            var Dm = Cm,
                Em = rs = yi(Dm.tc) ? Dm.tc() : null;
            Em && (r.jtc = Em);
            0 <= Ja.hb && (r.eae = Ja.hb);
            var Fm = Po(V, Ja.X);
            Fm && (r.fc = Fm);
            if (!Pi(V)) {
                var hd = (Ja.iframeWin || Ja.pubWin).document,
                    Gm = "";
                if (hd.documentMode) {
                    var Fb = (new nf(hd)).createElement("IFRAME");
                    Fb.frameBorder = "0";
                    Fb.style.height = 0;
                    Fb.style.width = 0;
                    Fb.style.position = "absolute";
                    if (hd.body) {
                        hd.body.appendChild(Fb);
                        try {
                            var Me = Fb.contentWindow.document;
                            Me.open();
                            Me.write("<!DOCTYPE html>");
                            Me.close();
                            Gm += Me.documentMode
                        } catch (X) {}
                        hd.body.removeChild(Fb)
                    }
                }
                var ss = Gm;
                r.docm = ss
            }
            var ts;
            try {
                var us = Y.screenX;
                var vs = Y.screenY
            } catch (X) {}
            try {
                var ws = Y.outerWidth;
                var xs = Y.outerHeight
            } catch (X) {}
            try {
                var ys = Y.innerWidth;
                var zs = Y.innerHeight
            } catch (X) {}
            var As = ts = [Y.screenLeft, Y.screenTop, us, vs, Y.screen ? Y.screen.availWidth : void 0, Y.screen ? Y.screen.availTop : void 0, ws, xs, ys, zs];
            r.brdim = As.join();
            var Bs = Cn.ac,
                Cs = Bn();
            var Ds = Cs.Hb(67) === Bs;
            var Es, Ne = 0;
            void 0 === v.postMessage && (Ne |= 1);
            if (Ds) {
                var Fs, Hm = mi(Y);
                (Fs = !(!Hm || !Hm.observeIntersection)) && (Ne |= 256);
                var Gs, Hs = Y,
                    Im = Hs.document;
                (Gs = Im && Oa(Im.elementFromPoint)) && (Ne |= 1024)
            }
            var Jm = Es = Ne;
            0 < Jm && (r.osd = Jm);
            r.vis = Qn(Y.document);
            if (ym) {
                if (qo(V)) var Km = Bq;
                else {
                    var Is = new sq(Y, ym, null, {
                        width: 0,
                        height: 0
                    }, V.google_ad_width, V.google_ad_height, !1);
                    Km = Is.qf()
                }
                var Lm = Km;
                r.rsz = Lm.toString();
                r.abl = Lm.ld()
            }
            if (!qo(V)) {
                a: {
                    var id = Number(V.google_ad_width),
                        jd =
                        Number(V.google_ad_height);
                    if (!(0 < id && 0 < jd)) {
                        b: {
                            try {
                                var Tg = String(V.google_ad_format);
                                if (Tg && Tg.match) {
                                    var Ug = Tg.match(/(\d+)x(\d+)/i);
                                    if (Ug) {
                                        var Mm = parseInt(Ug[1], 10),
                                            Nm = parseInt(Ug[2], 10);
                                        if (0 < Mm && 0 < Nm) {
                                            var Om = {
                                                width: Mm,
                                                height: Nm
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (X) {}
                            Om = null
                        }
                        var Vg = Om;
                        if (!Vg) {
                            var Pm = null;
                            break a
                        }
                        id = 0 < id ? id : Vg.width;jd = 0 < jd ? jd : Vg.height
                    }
                    Pm = {
                        width: id,
                        height: jd
                    }
                }
                var Wg = Pm;
                if (Wg) {
                    var Qm = 0,
                        Rm = V.google_async_iframe_id;
                    a: {
                        try {
                            var Sm = L().document;
                            if (Rm) var Tm = Sm.getElementById(Rm);
                            else {
                                var Um = Sm.getElementsByTagName("script"),
                                    Vm = Um[Um.length - 1];
                                Tm = Vm && Vm.parentNode || null
                            }
                            var Wm = Tm;
                            if (Wm) {
                                for (var Js, Xm = [], Oe = Wm, Ks = 0, Ls = z(); 100 >= ++Ks && 50 > z() - Ls && (Oe = nr(Oe));) 1 === Oe.nodeType && Xm.push(Oe);
                                var Pe = Js = Xm;
                                b: {
                                    for (var Xg = 0; Xg < Pe.length; Xg++) {
                                        c: {
                                            var Za = Pe[Xg];
                                            try {
                                                var Ns = !(!(Za.parentNode && 0 < Za.offsetWidth && 0 < Za.offsetHeight && Za.style && "none" !== Za.style.display && "hidden" !== Za.style.visibility) || Za.style.opacity && 0 === Number(Za.style.opacity));
                                                if (Ns) {
                                                    var Ym = Za.getBoundingClientRect();
                                                    var Zm = 0 < Ym.right && 0 < Ym.bottom;
                                                    break c
                                                }
                                            } catch (X) {}
                                            Zm = !1
                                        }
                                        if (!Zm) {
                                            var $m = !1;
                                            break b
                                        }
                                    }
                                    $m = !0
                                }
                                if ($m) {
                                    b: {
                                        for (var Os = z(), Ps = /^html|body$/i, Qs = /^fixed/i, Yg = 0; Yg < Pe.length && 50 > z() - Os; Yg++) {
                                            var Qe = Pe[Yg];
                                            if (!Ps.test(Qe.tagName) && Qs.test(Qe.style.position || Zh(Qe, "position"))) {
                                                var Zg = Qe;
                                                break b
                                            }
                                        }
                                        Zg = null
                                    }
                                    break a
                                }
                            }
                        } catch (X) {}
                        Zg = null
                    }
                    var $g = Zg;
                    if ($g) {
                        var Rs = $g.offsetWidth * $g.offsetHeight,
                            Ss = Wg.width * Wg.height;
                        Rs <= 4 * Ss && (Qm = 1)
                    }
                    r.pfx = Qm
                }
            }
            var Ts = Bn().Hb(41);
            if ("26835106" === Ts && Ja.X) {
                try {
                    var an = Ja.X.document.getElementsByTagName("head")[0];
                    var bn = an ? ir(an) : 0
                } catch (X) {
                    bn =
                        0
                }
                var cn = bn;
                0 !== cn && (r.cms = cn)
            }
            var dn = to(zm, V);
            0 != dn && (r.ifsl = dn);
            V.google_lrv !== Dh() && (r.alvm = V.google_lrv || "none");
            r.fu = ba.rc;
            var nc = new jr;
            v.SVGElement && v.document.createElementNS && nc.set(0);
            var en = ig();
            en["allow-top-navigation-by-user-activation"] && nc.set(1);
            en["allow-popups-to-escape-sandbox"] && nc.set(2);
            v.crypto && v.crypto.subtle && nc.set(3);
            v.TextDecoder && v.TextEncoder && nc.set(4);
            var Us = nc.ui();
            r.bc = Us;
            Jp();
            var Vs = U[4];
            r.jar = Vs;
            if (Gh) {
                if (Gh) {
                    var fn = tj();
                    fn && (r.debug_experiment_id = fn)
                }
                r.creatives =
                    or(/\b(?:creatives)=([\d,]+)/);
                r.adgroups = or(/\b(?:adgroups)=([\d,]+)/);
                r.adgroups && (r.adtest = "on", r.disable_budget_throttling = !0, r.use_budget_filtering = !1, r.retrieve_only = !0, r.disable_fcap = !0)
            }
            On() && (r.atl = !0);
            var Ws = Kr = r,
                Xs, hn = a.j,
                Ys = hn.google_ad_client,
                Zs = hn.google_ad_channel,
                jn = "/pagead/ads?";
            "ca-pub-6219811747049371" === Ys && pr.test(Zs) && (jn = "/pagead/lopri?");
            var at = Xs = jn,
                ah = Ln(nl, at);
            3 === Qn(a.pubWin.document) && (a.ec = !0, a.Lc = ah, ah = Ln(nl, "/pagead/blank.gif#?"));
            var bt = Gh && c.google_debug_params ?
                c.google_debug_params : "",
                ct = Ci(Ws, ah + bt);
            return c.google_ad_url = ct
        },
        rr = function(a) {
            var b = "RS-" + a.google_reactive_sra_index + "-",
                c = {};
            return Ci((c.adk = a.google_ad_unit_key, c.client = a.google_ad_client, c.fa = a.google_reactive_ad_format, c), Ln(Nh(), ["/pagead/html/", Dh(), "/r20110914/zrt_lookup.html#", encodeURIComponent(b)].join("")))
        },
        nr = function(a) {
            try {
                if (a.parentNode) return a.parentNode
            } catch (e) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    var b =
                        a ? vf(a) : window;
                    if (b) {
                        var c = b.frameElement;
                        if (c && J(b.parent)) {
                            var d = c;
                            break a
                        }
                    }
                } catch (e) {}
                d = null
            }
            else d = null;
            return d
        },
        or = function(a) {
            try {
                var b = v.top.location.hash;
                if (b) {
                    var c = b.match(a);
                    return c && c[1] || ""
                }
            } catch (d) {}
            return ""
        },
        mr = function(a, b) {
            var c = T(b, 8, {});
            b = T(b, 9, {});
            var d = a.google_ad_section,
                e = a.google_ad_format;
            a = a.google_ad_slot;
            e ? c[d] = c[d] ? c[d] + ("," + e) : e : a && (b[d] = b[d] ? b[d] + ("," + a) : a)
        },
        sr = function(a, b) {
            if (a = a.hc) a.qb && (b.npa = 1), a.La && (b.guci = a.La), a.Yb && (b.vcd = a.Yb, a.ce && (b.gvcd = a.ce))
        },
        lr =
        function(a, b) {
            var c = a.j;
            xi(Wi, function(d, e) {
                b[d] = c[e]
            });
            sr(a, b);
            xi(Vi, function(d, e) {
                b[d] = c[e]
            });
            xi(Yi, function(d, e) {
                b[d] = c[e]
            });
            qo(c) && (a = po(c), b.fa = a)
        },
        pr = /YtLoPri/;
    var tr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var ur = function(a, b, c, d) {
        try {
            Xe(b, c, "pt", d, a)
        } catch (e) {}
    };

    function vr(a, b, c, d) {
        d = void 0 === d ? ur : d;
        if (!a.goog_sdr_l) {
            Object.defineProperty(a, "goog_sdr_l", {
                value: !0
            });
            var e = String(ch(a));
            "complete" === a.document.readyState ? d(a, b, c, e) : K(a, "load", function() {
                d(a, b, c, e)
            })
        }
    };
    var wr = this,
        zr = function(a, b, c, d) {
            var e = d.iframeWin ? d.j.google_container_id : d.Ma.id;
            c.src = zp(a);
            var f = (d.iframeWin || d.pubWin).document,
                g = f.currentScript || f.scripts && f.scripts[0],
                h = L() == window.top;
            if (kd() || !g && !e) c = Sp(c), h && (qi(d.pubWin), v.setTimeout(O(222, function() {
                var l = f.getElementById(b);
                l ? qi(d.pubWin, l) : (l = {
                    adUrl: a
                }, Q("inabox:no-iframe", l))
            }), 0)), e ? xr(e, f, c) : f.write(c);
            else {
                var k = (new nf(f)).createElement("IFRAME");
                xi(c, function(l, n) {
                    null != l && k.setAttribute(n, l)
                });
                h && qi(d.pubWin, k);
                e ? yr(e, f, k) :
                    g.parentNode.insertBefore(k, g.nextSibling)
            }
        },
        Ar = function(a, b, c) {
            return a.X ? So(525, function(d) {
                var e = a.iframeWin ? a.iframeWin.document.body : a.Ma;
                e.appendChild(b);
                d.createAdSlot(a.X, a.j, c, b);
                return b
            }) : (Q("jserror", {
                context: "ac_crai"
            }), null)
        },
        Gr = function(a, b, c, d, e) {
            e = void 0 === e ? !1 : e;
            ki(215) && vr(a.pubWin, "gda", Dh());
            var f = ya(b) ? (a.iframeWin || a.pubWin).document.getElementById(b) : b;
            if (f) {
                var g = a.X,
                    h = a.iframeWin && Hi(a.j) ? a.iframeWin.frameElement : f;
                K(f, "load", function() {
                    f && f.setAttribute("data-load-complete", !0);
                    var q = a.j.ovlp || ki(190);
                    q && g && g === a.pubWin && h && (q = h.ownerDocument.getElementById(h.id + "_expand")) && Br(g, a, q, f)
                });
                var k = Cr(a);
                !g || qo(a.j) && !ro(a.j) || (new Hq(g, f, h, a.j), Yp(a, f), g.IntersectionObserver || new Vp(g, f, a.Ma), Tq(g, f, a.j, O(627, function(q) {
                    q || k();
                    q = !ld() || qd(11) ? fo() : ho();
                    q.getOseId() && q.unloadAdBlock(f, !0)
                })));
                g && (new mo(g), new fl(g), new vp(g, f, a.j), $o(a.iframeWin, g, a.j), Up(g, f));
                a.ec && Dr(a, f, a.pubWin.document);
                Er(c, f);
                f && f.setAttribute("data-google-container-id", d);
                e = a.j.iaaso;
                if (null !=
                    e && h) {
                    var l = h.ownerDocument.getElementById(h.id + "_expand"),
                        n = l.parentElement;
                    l = n && Ki.test(n.className) ? n : l;
                    l.setAttribute("data-auto-ad-size", e)
                }
                Fr(a)
            } else e ? (e = {
                context: "ac::nfrm",
                url: c
            }, Q("jserror", e)) : (e = O(162, function() {
                return Gr(a, b, c, d, !0)
            }), v.setTimeout(e, 0))
        },
        Cr = function(a) {
            var b = a.iframeWin || a.pubWin;
            if (!b) return function() {};
            var c = a.j.google_ad_client,
                d = T(rn(), 20, {}),
                e = null,
                f = Xj(b, "pvt", function(g, h) {
                    h.source && ya(g.token) && Ti(h.source, b) && (e = g.token, f(), d[c] = d[c] || [], d[c].push(e), 100 < d[c].length &&
                        d[c].shift())
                });
            return function() {
                e && x(d[c]) && (mb(d[c], e), d[c].length || delete d[c], e = null)
            }
        },
        Fr = function(a) {
            var b = mi(a.pubWin);
            if (b)
                if ("AMP-STICKY-AD" === b.container) {
                    var c = a.iframeWin || a.pubWin,
                        d = function(f) {
                            "fill_sticky" === f.data && (b.renderStart && b.renderStart(), a.iframeWin && hh(c, "message", d))
                        },
                        e = O(616, d, wr);
                    K(c, "message", e)
                } else b.renderStart && b.renderStart()
        },
        Br = function(a, b, c, d) {
            (new bq(a, [5, 8, 9], [3, 4], void 0, 2)).ve(c).then(function(e) {
                Pn(8, [e]);
                return e
            }).then(function(e) {
                var f = c.parentElement;
                f = f && Ki.test(f.className) ? f : c;
                f.setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
                return e
            }).then(function(e) {
                var f = b.j.armr || "",
                    g = (Ui(b.j).eids || []).join(","),
                    h = e.executionTime || "",
                    k = null == b.j.iaaso ? "" : Number(b.j.iaaso),
                    l = Number(e.isOverlappingOrOutsideViewport),
                    n = hb(e.entries, function(B) {
                        return B.overlapType + ":" + B.overlapDepth + ":" + B.overlapDetectionPoint
                    }),
                    q = e.overlappedArea.toFixed(2),
                    u = d.dataset.googleQueryId || "",
                    t = q * e.targetRect.width * e.targetRect.height,
                    w = e.scrollPosition.scrollX +
                    "," + e.scrollPosition.scrollY,
                    y = Gi(e.target),
                    A = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
                e = e.viewportSize.width + "x" + e.viewportSize.height;
                Q("ovlp", {
                    adf: b.j.google_ad_dom_fingerprint,
                    armr: f,
                    client: b.j.google_ad_client,
                    eid: g,
                    et: h,
                    fwrattr: b.j.google_full_width_responsive,
                    iaaso: k,
                    io: l,
                    saldr: b.j.google_loader_used,
                    oa: q,
                    oe: n.join(","),
                    qid: u,
                    rafmt: b.j.google_responsive_auto_format,
                    roa: t,
                    slot: b.j.google_ad_slot,
                    sp: w,
                    tgt: y,
                    tr: A,
                    url: b.j.google_page_url,
                    vp: e
                }, 1)
            }).ef(function(e) {
                Pn(8, ["Error:", e.message, c]);
                Q("ovlp-err", {
                    err: e.message
                }, 1)
            })
        },
        Dr = function(a, b, c) {
            if (3 !== Qn(c)) Lr(a.Lc, b);
            else {
                var d = Rn(c);
                if (d) {
                    var e = function() {
                        Lr(a.Lc, b);
                        hh(c, d, e)
                    };
                    K(c, d, e)
                }
            }
            a.ec = !1
        },
        Ms = function(a) {
            a.sandbox = hg(["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation"]).join(" ")
        },
        $s = function(a) {
            var b = F("Edge") ? 4E3 : 8100;
            var c = a;
            var d = b - 8;
            c.length > b && (c = c.substring(0, d), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
            c !== a && (b -= 8, d = a.lastIndexOf("&", b), -1 === d && (d = a.lastIndexOf("?", b)), b = -1 === d ? "" : a.substring(d + 1), a = {
                ol: a.length,
                tr: b,
                url: a
            }, Q("trn", a, .01));
            return c
        },
        dt = function(a, b) {
            var c = a.j,
                d = Fi(c);
            c = a.iframeWin ? "google_ads_frame" + d : c.google_async_iframe_id;
            var e = a,
                f = b,
                g = 0 === a.hb;
            b = e.j;
            a = b.google_async_iframe_id;
            var h = e.iframeWin ? "google_ads_frame" + d : a,
                k = b.google_ad_width,
                l = b.google_ad_height,
                n = {
                    id: h,
                    name: h
                },
                q = za(b.google_reactive_sra_index),
                u = !q && !lp(b) && Mo(b),
                t;
            if ((t = ki(228)) || ki(207)) {
                var w = ig();
                w = !(!w["allow-top-navigation-by-user-activation"] ||
                    !w["allow-popups-to-escape-sandbox"]);
                t = !t && w
            } else t = !(u || q) && !Jf() && !If() && md() && qd(58);
            var y = t;
            y && (t = "=" + encodeURIComponent("1"), f = Mf(f, "fsb" + t), Ms(n));
            w = f;
            f = $s(f);
            var A = g ? f.replace(/&ea=[^&]*/, "") + "&ea=0" : f;
            Tp(n, k, l, !1, zp(A));
            t = Sp(n);
            var B = "";
            if (g) {
                B = 10;
                A = tr;
                for (var Z = A.length, E = ""; 0 < B--;) E += A.charAt(Math.floor(Math.random() * Z));
                B = E;
                f = Sj(f, B);
                Sj(w, B)
            } else f = A;
            b.dash && (n.srcdoc = b.dash);
            w = null;
            q ? (w = e, n = f, A = w.j, q = A.google_ad_width, u = A.google_ad_height, A = A.google_reactive_sra_index, q && u && null != A ? (A =
                w.iframeWin ? "google_ads_frame_rsra_" + A : w.j.google_async_iframe_id, A = {
                    id: A,
                    name: A
                }, y && Ms(A), Tp(A, q, u, !1, n), y = Rp(A), w = Ar(w, y, a)) : w = null) : u ? (w = e, n.src = zp(f), y = Rp(n), w = Ar(w, y, a)) : zr(f, h, n, e);
            g && (g = e, y = Ln(Qi(), "/pagead/js/r20191003/r20110914/creativetoolset/xpc_expansion_embed.js"), d = {
                    id: h,
                    url: f,
                    width: k,
                    height: l,
                    ta: B,
                    Bi: g.pubWin,
                    Vf: a || void 0,
                    tl: "google_expandable_ad_slot" + d,
                    Mh: y,
                    yc: g.iframeWin || g.pubWin
                }, !d.id || !d.url || 0 >=
                d.width || 0 >= d.height || !d.ta || !d.yc || bk(d.yc, "ct", $a(fk, d, y), dk, Ha));
            if (e.iframeWin && Hi(b)) {
                d = ["<!DOCTYPE html><html><body>", t, "</body></html>"].join("");
                d = String(d);
                e = ['"'];
                for (b = 0; b < d.length; b++) {
                    k = d.charAt(b);
                    l = k.charCodeAt(0);
                    h = b + 1;
                    if (!(f = Hd[k])) {
                        if (!(31 < l && 127 > l))
                            if (l = k, l in Id) k = Id[l];
                            else if (l in Hd) k = Id[l] = Hd[l];
                        else {
                            f = l.charCodeAt(0);
                            if (31 < f && 127 > f) k = l;
                            else {
                                if (256 > f) {
                                    if (k = "\\x", 16 > f || 256 < f) k += "0"
                                } else k = "\\u", 4096 > f && (k += "0");
                                k += f.toString(16).toUpperCase()
                            }
                            k = Id[l] = k
                        }
                        f = k
                    }
                    e[h] = f
                }
                e.push('"');
                d = e.join("");
                d = "javascript:" + d;
                e = L();
                (new Bp(e)).set(a, d)
            }
            return (a = w) || c
        },
        Er = function(a, b) {
            var c = !ld() || qd(11) ? fo() : ho();
            if (c.getOseId()) {
                var d = L();
                Ca("Goog_AdSense_getAdAdapterInstance", fo, d);
                c.setLoadOsdJsOnPubWindow(!0);
                c.registerAdBlock(a, 1, "", b)
            }
        },
        gt = function(a, b, c) {
            var d = a.j,
                e = "";
            za(d.google_reactive_sra_index) ? (e = rr(d), mr(d, rn()), et(d)) : (lp(d) || !Mo(d) || Lo(a.pubWin, d)) && et(d) && (e = qr(a, b));
            Pn(2, [a.j, e]);
            b && b.id == c && Cf(b);
            if (e) {
                Hi(d) || Ei(a.pubWin);
                b = Fi(a.j);
                var f = v.window === v.window.top ? "a!" +
                    b.toString(36) : b.toString(36) + "." + Kd();
                c = {};
                b = (c.ifi = b, c.uci = f, c);
                e = Ci(b, e);
                c = Ai(Ui(a.pubWin).eids || [], "20040013");
                d = Ai(Ui(a.pubWin).eids || [], "20040012");
                (c || d) && Qj("cr_urlbuilt", c);
                b = dt(a, e);
                e = $s(e);
                a: {
                    try {
                        var g = a.iframeWin.frameElement;
                        break a
                    } catch (h) {}
                    g = null
                }
                ft(a, g || a.Ma);
                (c || d) && Qj("cr_postwrite", c);
                g = function(h) {
                    Gr(a, h, e, f)
                };
                ya(b) ? g(b) : b.then(g).then(null, function(h) {
                    Fj.Mb(223, h, void 0, void 0)
                })
            }
        },
        ht = function(a, b, c, d) {
            var e = a.j;
            e = "aa" === e.google_loader_used || "sa" === e.google_loader_used;
            var f =
                O(449, d);
            e && nd() && qd(11) ? (Pp(function() {
                f(a, b, c)
            }), a.ri = Pp) : d(a, b, c)
        },
        it = function(a, b, c, d) {
            var e = a.j,
                f = "aa" === e.google_loader_used || "sa" === e.google_loader_used,
                g = Bn();
            hl || (hl = new Dl(a.pubWin.google_t12n_vars || {}));
            var h = hl;
            kh = g = h.Ng(128) || "21062175" === g.Hb(126);
            var k = e.google_ad_client;
            e = xh(Ih, k);
            if (f && e.Za) {
                f = function() {
                    Q("abg:cmpnc", {
                        client: a.j.google_ad_client,
                        url: a.j.google_page_url,
                        consent: JSON.stringify(xh(Ih, k))
                    })
                };
                var l = v.setTimeout(f, 1E4);
                a.Rh = !0;
                yh(Ih, k, O(450, function(n) {
                    v.clearTimeout(l);
                    a.hc = n;
                    ht(a, b, c, d)
                }))
            } else g && th() && 5 == e.sb && "NCS" == e.Yb && Q("sync:cmpnc", {
                client: a.j.google_ad_client,
                url: a.j.google_page_url,
                consent: JSON.stringify(e)
            }), a.hc = e, ht(a, b, c, d)
        },
        yr = function(a, b, c) {
            if (a = b.getElementById(a)) a.style.visibility = "visible", Bf(a), a.appendChild(c)
        },
        xr = function(a, b, c) {
            a && (a = b.getElementById(a)) && c && (a.style.visibility = "visible", a.innerHTML = c)
        },
        Lr = function(a, b) {
            var c = b.src,
                d = "/pagead/blank.gif#?",
                e = c.indexOf(d);
            a = -1 === e ? c : a + c.substr(e + d.length);
            a !== c && (c = b.nextSibling, d = b.parentNode,
                d.removeChild(b), b.src = a, d.insertBefore(b, c))
        },
        et = function(a) {
            var b = rn(),
                c = a.google_ad_section;
            qo(a) && tn(b, 15, T(b, 15, 0) + 1);
            if (Pi(a)) {
                if (100 < tn(b, 5, T(b, 5, 0) + 1)) return !1
            } else if (a = tn(b, 6, T(b, 6, 0) + 1), b = a - T(b, 15, 0), 100 < b && "" == c) return !1;
            return !0
        },
        ft = function(a, b) {
            b && a.j.rpe && Aq(a.pubWin, b, {
                height: a.j.google_ad_height,
                dd: "force",
                vd: !0,
                Me: !0
            })
        };
    var jt = function(a, b) {
        b = void 0 === b ? null : b;
        this.da = null;
        this.Ae = !1;
        this.fb = null;
        this.mf = b || "gam";
        this.sf = a + "_" + this.mf
    };
    jt.prototype.kh = function() {
        var a = (new Date).valueOf();
        null == this.fb && (H.gdbg_offset ? this.fb = H.gdbg_offset : (this.fb = a, H.gdbg_offset = this.fb));
        return a - this.fb
    };
    jt.prototype.Od = function(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    };
    jt.prototype.ig = function() {
        if (null == this.da && !this.Ae)
            if (this.da = H.open("", "GoogleDebug_" + this.sf, "width=1100, height=600, status=no,resizable=yes, scrollbars=yes")) {
                var a = "Google Ad Manager Debug Output";
                "gam" != this.mf && (a = "Google Debug Output");
                var b = this.da.document,
                    c = "";
                c += "<html>";
                c += "<head><title>" + a + "</title><style>";
                c += "h2 {font-size: 1em;margin: 0 0 0.5em 0;color: #353C43}";
                c += "th {background: #e5e5e5;font-weight: normal;color: #444444;";
                c += "text-align: left;}";
                c += "td {border-bottom: 1px solid #dddddd}";
                c += "tbody tr:hover {background: #ffffcc}";
                c += ".dn {display: none;} .lightText {color: #a0a0a0;}";
                c += "</style>";
                c += "</head>";
                c += "<body><h2>" + a + "</h2><br/>";
                c += 'Page URL: <span id="pageUrl"></span><br/><br/>';
                c += '<form action="" method="post">';
                c += '<table id="google_slot_table" width="100%" class="dn" ';
                c += 'cellspacing="0">';
                c += "<thead><tr><th>&nbsp;";
                c += '<span id="numSlots">0</span> slots on page</th>';
                c += "<th>&nbsp;</th>";
                c += "<th>&nbsp;</th>";
                c += "</tr><tr>";
                c += "<th>&nbsp;&nbsp;Ad Slot Name</th>";
                c += "<th>Ad Request URL</th>";
                c += "<th>Delivery Analysis ";
                c += '<span class="lightText">(login required)</span></th>';
                c += "</tr></thead>";
                c += "<tbody>";
                c += '<tr class="dn"><td></td>';
                c += "<td></td></tr>";
                c += "</tbody></table><br/>";
                c += '<table id="google_msg_table" width="100%" cellspacing="0">';
                c += "<thead><tr><th>Offset (msec)</th><th>Type</th>";
                c += "<th>Message</th></tr></thead>";
                c += '<tbody id="google_msg_body">';
                c += '<tr class="dn"><td></td><td></td><td></td></tr>';
                c += "</tbody></table></form></body></html>";
                b.write(c);
                b.getElementById("pageUrl").innerHTML = this.Od(af.URL);
                b.close()
            } else this.Ae = !0
    };
    var kt = {
        Information: "black",
        Warning: "orange",
        Error: "red",
        Internal: "green"
    };
    jt.prototype.uc = function(a, b) {
        return '<font color="' + kt[a] + '">' + b + "</font>"
    };
    jt.prototype.Kj = function(a, b, c) {
        var d = this.da;
        if (d)
            if (d = this.da.document.getElementById("google_msg_table"), null != d) {
                d = d.insertRow(-1);
                var e = d.insertCell(0);
                e.innerHTML = this.uc(a, "" + this.kh());
                e = d.insertCell(1);
                e.innerHTML = this.uc(a, a + "&nbsp;&nbsp;");
                d = d.insertCell(2);
                c || (b = this.Od(b));
                d.innerHTML = this.uc(a, b)
            } else alert("fails to add to console: " + a + ", " + b)
    };
    jt.prototype.Hf = function() {
        if (null == this.da) {
            var a = "gdbg_console_" + this.sf;
            H[a] ? this.da = H[a] : (this.ig(), H[a] = this.da)
        }
    };
    jt.prototype.Jj = function(a) {
        this.Kj("Error", a, !1)
    };
    var lt = null,
        mt = function(a) {
            if (!lt) {
                var b = void 0,
                    c = (b = void 0 === b ? null : b) || "gam";
                b = "gdbg_logger_showcompanionads_" + c;
                H[b] || (H[b] = new jt("showcompanionads", c), c = af.URL, (c = !!c && 0 < eg(c).length) && H[b].Hf());
                lt = H[b]
            }
            lt.Jj(a)
        },
        nt = function() {
            var a = [],
                b = document.getElementsByTagName("base");
            if (b)
                for (var c = 0, d = b.length; c < d; ++c) {
                    var e = b[c],
                        f = e.getAttribute("target");
                    f && (a.push({
                        Xf: e,
                        ti: f
                    }), e.removeAttribute("target"))
                }
            return a
        },
        ot = function(a) {
            if (a)
                for (var b = 0, c = a.length; b < c; ++b) {
                    var d = a[b];
                    d.Xf.setAttribute("target",
                        d.ti)
                }
        };
    var pt = 0,
        qt = function(a, b) {
            a = {
                method: a,
                caller: b
            };
            Q("gpt_sca", a, .001)
        };

    function rt() {
        return !0
    }
    Ca("googleCompanionsServicePresent", rt, void 0);

    function st() {
        var a = [],
            b = tt();
        if (b && (b = b.getSlots()))
            for (var c = 0, d = b.length; c < d; c++) {
                var e = b[c];
                var f = {};
                if (e) {
                    f.slotId = e.getSlotId().getId();
                    f.adType = e.get("ad_type");
                    e = e.getSizes();
                    var g = [];
                    if (e && x(e))
                        for (var h = 0, k = e.length; h < k; h++) {
                            var l = {};
                            ya(e[h]) || (l.adWidth = e[h].getWidth(), l.adHeight = e[h].getHeight(), g.push(l))
                        }
                    e = g;
                    f.adSizes = e
                }
                a.push(f)
            }
        return a
    }
    Ca("googleGetCompanionAdSlots", st, void 0);

    function ut(a, b, c) {
        qt("gscac", c);
        if ((b = tt()) && a && x(a) && (c = b.getSlotIdMap()))
            for (var d = 0, e = a.length; d < e; d++) {
                var f = a[d],
                    g = f.slotId;
                if (g in c) {
                    g = c[g];
                    var h = g;
                    var k = tt();
                    h = k && null != k.isSlotAPersistentRoadblock ? k.isSlotAPersistentRoadblock(h) : !1;
                    if (!h && f.adContent) {
                        h = g.getSlotId().getDomId();
                        if (h = qf(document, h)) h.style.display = "";
                        if (f.friendlyIframeRendering) {
                            k = g;
                            h = f.adContent;
                            var l = f.adWidth,
                                n = f.adHeight,
                                q = k.getSlotId().getDomId(),
                                u = qf(document, q);
                            if (u) {
                                if (q = qf(document, q)) q.innerHTML = "";
                                q = "google_companion_" +
                                    k.getSlotId().getId();
                                l = l ? l : k.getSizes()[0].getWidth();
                                k = n ? n : k.getSizes()[0].getHeight();
                                n = document;
                                n = n.createElement("iframe");
                                n.id = q;
                                n.name = q;
                                null != l && null != k && (n.width = String(l), n.height = String(k));
                                n.vspace = "0";
                                n.hspace = "0";
                                n.allowTransparency = "true";
                                n.scrolling = "no";
                                n.marginWidth = "0";
                                n.marginHeight = "0";
                                n.frameBorder = "0";
                                n.style.border = "0";
                                n.style.verticalAlign = "bottom";
                                n.src = "about:blank";
                                u.appendChild(n);
                                k = n;
                                if (G) {
                                    try {
                                        var t = !!k.contentWindow.document
                                    } catch (B) {
                                        t = !1
                                    }
                                    if (t) {
                                        n = nt();
                                        try {
                                            window.frames[k.name].contents =
                                                h, k.src = 'javascript:window["contents"]'
                                        } catch (B) {
                                            mt("Could not write third party content into IE iframe: " + B.message)
                                        } finally {
                                            ot(n)
                                        }
                                    } else {
                                        n = nt();
                                        try {
                                            var w = "google-ad-content-" + Kd();
                                            window[w] = h;
                                            var y = 'document.domain = "' + document.domain + '";var adContent = window.parent["' + (w + '"];window.parent["') + (w + '"] = null;document.write(adContent);document.close();');
                                            k.src = 'javascript:\'<script type="text/javascript">' + y + "\x3c/script>'"
                                        } catch (B) {
                                            window[w] = null, mt("Could not write third party content into IE iframe with modified document.domain: " +
                                                B.message)
                                        } finally {
                                            ot(n)
                                        }
                                    }
                                } else try {
                                    var A = k.contentWindow ? k.contentWindow.document : k.contentDocument;
                                    Sd && A.open("text/html", "replace");
                                    A.write(h);
                                    A.close()
                                } catch (B) {
                                    mt("Could not write content into iframe using the DOM standards method. " + B.message)
                                }
                            }
                            b.slotRenderEnded(g, f.adWidth, f.adHeight)
                        } else b.fillSlot(g, f.adContent, f.adWidth, f.adHeight);
                        if (null != f.onAdContentSet) f.onAdContentSet(qf(document, g.getSlotId().getDomId()))
                    }
                }
            }
    }
    Ca("googleSetCompanionAdContents", ut, void 0);

    function tt() {
        if ("undefined" != typeof googletag && googletag && "function" == typeof googletag.companionAds) {
            var a = googletag.companionAds();
            return a
        }
        return null
    }

    function vt(a) {
        qt("gsca");
        var b = window,
            c = document;
        if (b.google_container_id)
            if (c = c.getElementById(b.google_container_id), a) c.innerHTML = a, c.style.visibility = "visible";
            else {
                var d = c;
                a = [b.google_ad_slot, b.google_orig_ad_format || b.google_ad_format, b.google_ad_type, b.google_orig_ad_width || b.google_ad_width, b.google_orig_ad_height || b.google_ad_height];
                c = [];
                for (var e = 0; d && 25 > e; d = d.parentNode, ++e) 9 === d.nodeType ? c.push("") : c.push(d.id);
                (c = c.join()) && a.push(c);
                a = Zf(a.join(":")).toString();
                b.google_ad_unit_key =
                    a;
                b.google_loader_used = "ca";
                b = new zh(Si(b), L(), b);
                ac("") && (a = Bn(), a.Ze(""));
                a = Bn();
                c = Ui(window).eids || [];
                for (e = 0; e < c.length; e++) a.Ze(c[e]);
                c = a = b;
                e = a;
                d = e.j.google_ad_width;
                var f = e.j.google_ad_height,
                    g = e.pubWin.document,
                    h = e.j,
                    k = 0;
                try {
                    !1 === h.google_allow_expandable_ads && (k |= 1);
                    if (!g.body || isNaN(h.google_ad_height) || isNaN(h.google_ad_width) || e.iframeWin && g.domain != e.iframeWin.location.hostname || !/^http/.test(g.location.protocol)) k |=
                        2;
                    a: {
                        var l = navigator.userAgent,
                            n = navigator.platform;h = /Win|Mac|Linux|iPad|iPod|iPhone/;
                        var q = /WebKit\/(\d+)/,
                            u = /rv:(\d+\.\d+)/,
                            t = /rv:1\.8([^.]|\.0)/,
                            w = 11,
                            y = 27,
                            A = 536;
                        if (h.test(n) && !/^Opera/.test(l)) {
                            var B = (q.exec(l) || [0, 0])[1],
                                Z = (u.exec(l) || [0, 0])[1];
                            if (/Win/.test(n) && /Trident/.test(l) && g.documentMode >= w || !B && "Gecko" === navigator.product && Z >= y && !t.test(l) || B >= A) {
                                var E = !0;
                                break a
                            }
                        }
                        E = !1
                    }
                    E || (k |= 4)
                } catch (pe) {
                    k |= 8
                }
                E = k;
                io(e.pubWin, e.pubWin.document, d, f) && (E |= 2);
                c.hb = E;
                0 === a.hb || (a.j.google_allow_expandable_ads = !1);
                E = b;
                mn() != E.pubWin && Zi(E, 4);
                Kh && Zi(E, 16);
                Hh && Zi(E, 8);
                3 === Qn(E.pubWin.document) && Zi(E, 32);
                if (l = E.X) n = E.X, l = rk(n).clientWidth, n = rk(n).scrollWidth, l = n <= l, l = !l;
                l && Zi(E, 1024);
                null == E.iframeWin && Zi(E, 8192);
                b.j.google_loader_features_used && Zi(b, b.j.google_loader_features_used);
                E = b;
                ao = l = Zn(!Kh);
                co = Lh;
                bo = Mh;
                l = !ld() || qd(11) ? fo() : ho();
                n = rn();
                E.Mc = l.setupOse(T(n, 7, pn()));
                E = "";
                (l = b.j.google_async_iframe_id) && null == b.iframeWin ? l = b.Ma : l ? l = b.pubWin.document.getElementById(l) : (l = E = "google_temp_span", n = b.j.google_container_id,
                    B = b.iframeWin.document, Z = n && B.getElementById(n) || B.getElementById(l), Z || n || !l || (B.write("<span id=" + l + "></span>"), Z = B.getElementById(l)), l = Z);
                Gp = L;
                Jp();
                Ep.test(".google.be") && !Fp.test(".google.be") && (W[1] = ".google.be");
                it(b, l, E, gt)
            }
    }
    Ca("google_show_companion_ad", vt, void 0);

    function wt(a, b, c) {
        qt("gscais", c);
        a && b && (a = document.getElementById(a), a.innerHTML = b, a.style.visibility = "visible")
    }
    Ca("google_show_companion_ad_in_slot", wt, void 0);

    function xt() {
        var a = {},
            b = window;
        b.google_container_id && (a.adType = b.google_ad_type, a.adHeight = b.google_ad_height, a.adWidth = b.google_ad_width, a.adContainerId = b.google_container_id);
        return a
    }
    Ca("google_get_companion_slot_params", xt, void 0);

    function yt(a) {
        a && (a += "&label=elementview&value=0", jh(H, a, void 0))
    }
    Ca("google_companion_error", yt, void 0);

    function zt(a) {
        qt("gcl");
        if (a) {
            var b = At();
            b = a + "&label=elementview&value=" + b;
            jh(H, b, void 0);
            Bt() && Ct() && Dt(a)
        }
    }
    Ca("google_companion_loaded", zt, void 0);

    function Et() {
        pt++
    }
    Ca("google_increment_num_ad_mouseovers", Et, void 0);

    function At() {
        var a = af.getElementById(H.google_container_id);
        if (!a) return 3;
        if (Ft(a)) return 4;
        if (Gt(a)) return 5;
        if (!Ct()) return 7;
        var b = a;
        var c = bi(b);
        var d = ci;
        var e = b;
        if ("none" != Zh(e, "display")) d = d(e);
        else {
            b = e.style;
            var f = b.display,
                g = b.visibility,
                h = b.position;
            b.visibility = "hidden";
            b.position = "absolute";
            b.display = "inline";
            d = d(e);
            b.display = f;
            b.position = h;
            b.visibility = g
        }
        c = new Sh(c.x, c.y, d.width, d.height);
        c = c.xj();
        h = a;
        a = new Ph(0, Infinity, Infinity, 0);
        d = pf(h);
        f = d.B.body;
        g = d.B.documentElement;
        for (b = d.Ug(); h =
            ai(h);)
            if (!(G && 0 == h.clientWidth || Td && 0 == h.clientHeight && h == f) && h != f && h != g && "visible" != Zh(h, "overflow")) {
                e = bi(h);
                var k = new I(h.clientLeft, h.clientTop);
                e.x += k.x;
                e.y += k.y;
                a.top = Math.max(a.top, e.y);
                a.right = Math.min(a.right, e.x + h.clientWidth);
                a.bottom = Math.min(a.bottom, e.y + h.clientHeight);
                a.left = Math.max(a.left, e.x)
            }
        f = b.scrollLeft;
        b = b.scrollTop;
        a.left = Math.max(a.left, f);
        a.top = Math.max(a.top, b);
        d = d.ae();
        a.right = Math.min(a.right, f + d.width);
        a.bottom = Math.min(a.bottom, b + d.height);
        a = 0 <= a.top && 0 <= a.left && a.bottom >
            a.top && a.right > a.left ? a : null;
        return Qh(a, c) ? 1 : Rh(a, c) ? 2 : 6
    }

    function Ct() {
        var a = af.getElementById(H.google_container_id);
        if (a) {
            a = a.childNodes;
            for (var b = 0; b < a.length; b++)
                if ("aw0" == a[b].id) return a[b].href
        }
        return ""
    }

    function Bt() {
        var a = af.getElementById(H.google_container_id);
        return a ? !Ft(a) && !Gt(a) : !1
    }

    function Dt(a) {
        var b = Ct(),
            c = a + "&label=overlayadclose",
            d = 0,
            e = 0;
        a = function() {
            if (0 != e && (d += 5E3, 18E5 <= d || !Bt() || b != Ct())) {
                clearInterval(e);
                var f = c + "&value=";
                f = 18E5 <= d ? f + 4 : Bt() ? Ct() ? f + 2 : f + 3 : f + 1;
                0 < pt && (f += ";numOfMouseOvers=" + pt, pt = 0);
                jh(H, f, void 0)
            }
        };
        e = setInterval(a, 5E3)
    }

    function Ft(a) {
        for (; a;) {
            if (a.style) {
                if ("hidden" == a.style.visibility || "collapse" == a.style.visibility) return !0;
                if ("visible" == a.style.visibility) break
            }
            a = a.parentNode
        }
        return !1
    }

    function Gt(a) {
        for (; a;) {
            if (a.style && "none" == a.style.display) return !0;
            a = a.parentNode
        }
        return !1
    }
    var Ht = tt();
    if (Ht && Ht.onImplementationLoaded) Ht.onImplementationLoaded();

    function It() {
        Oj([pp, op]);
        var a = new zh(Si(H), L(), H),
            b = a.j;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase()) && "ca-" != c.substring(0, 3) && (c = "ca-" + c): c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        if (null == b.google_flash_version) {
            try {
                var d = Oi()
            } catch (e) {
                d = "0"
            }
            b.google_flash_version = d
        }
        b.google_webgl_support = !!H.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section ||
            b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        d = (new Date).getTime();
        x(b.google_color_bg) && (b.google_color_bg = $i(a, b.google_color_bg, d));
        x(b.google_color_text) && (b.google_color_text = $i(a, b.google_color_text, d));
        x(b.google_color_link) && (b.google_color_link = $i(a, b.google_color_link, d));
        x(b.google_color_url) && (b.google_color_url = $i(a, b.google_color_url, d));
        x(b.google_color_border) && (b.google_color_border = $i(a, b.google_color_border, d));
        x(b.google_color_line) && (b.google_color_line =
            $i(a, b.google_color_line, d))
    }
    Fj.Rc(475, It, void 0);
}).call(this);