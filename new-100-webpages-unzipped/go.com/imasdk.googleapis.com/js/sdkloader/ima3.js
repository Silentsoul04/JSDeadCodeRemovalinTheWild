// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    var k, aa = function(a) {
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
        ca = function(a) {
            if (!(a instanceof Array)) {
                a = ba(a);
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
                    Xd: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.Xd;
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
    var ka = ea,
        p = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.sa = b.prototype
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
        },
        oa = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
    na("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    na("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = oa(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    });
    var pa = function() {
            pa = function() {};
            ma.Symbol || (ma.Symbol = qa)
        },
        ra = function(a, b) {
            this.g = a;
            la(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    ra.prototype.toString = function() {
        return this.g
    };
    var qa = function() {
            function a(c) {
                if (this instanceof a) throw new TypeError("Symbol is not a constructor");
                return new ra("jscomp_symbol_" + (c || "") + "_" + b++, c)
            }
            var b = 0;
            return a
        }(),
        ta = function() {
            pa();
            var a = ma.Symbol.iterator;
            a || (a = ma.Symbol.iterator = ma.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] && la(Array.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return sa(aa(this))
                }
            });
            ta = function() {}
        },
        sa = function(a) {
            ta();
            a = {
                next: a
            };
            a[ma.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ua = function(a, b) {
            ta();
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
    na("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    });
    na("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
                return c
            })
        }
    });
    var va = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        wa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) va(d, e) && (a[e] = d[e])
            }
            return a
        };
    na("Object.assign", function(a) {
        return a || wa
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
    na("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== oa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    na("WeakMap", function(a) {
        function b() {}

        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function d(l) {
            if (!va(l, f)) {
                var m = new b;
                la(l, f, {
                    value: m
                })
            }
        }

        function e(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof b) return n;
                d(n);
                return m(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(m)) return !1;
                    n["delete"](l);
                    n.set(m, 4);
                    return !n.has(l) && 4 == n.get(m)
                } catch (v) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(l) {
                this.g = (g += Math.random() + 1).toString();
                if (l) {
                    l = ba(l);
                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        h.prototype.set = function(l, m) {
            if (!c(l)) throw Error("Invalid WeakMap key");
            d(l);
            if (!va(l, f)) throw Error("WeakMap key fail: " + l);
            l[f][this.g] = m;
            return this
        };
        h.prototype.get = function(l) {
            return c(l) && va(l, f) ? l[f][this.g] : void 0
        };
        h.prototype.has = function(l) {
            return c(l) && va(l, f) && va(l[f],
                this.g)
        };
        h.prototype["delete"] = function(l) {
            return c(l) && va(l, f) && va(l[f], this.g) ? delete l[f][this.g] : !1
        };
        return h
    });
    na("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(ba([
                            [h, "s"]
                        ]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
                } catch (v) {
                    return !1
                }
            }()) return a;
        ta();
        var b = new WeakMap,
            c = function(h) {
                this.h = {};
                this.g =
                    f();
                this.size = 0;
                if (h) {
                    h = ba(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(h, l) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this.h[m.id] = []);
            m.oa ? m.oa.value = l : (m.oa = {
                next: this.g,
                Ia: this.g.Ia,
                head: this.g,
                key: h,
                value: l
            }, m.list.push(m.oa), this.g.Ia.next = m.oa, this.g.Ia = m.oa, this.size++);
            return this
        };
        c.prototype["delete"] = function(h) {
            h = d(this, h);
            return h.oa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.oa.Ia.next = h.oa.next, h.oa.next.Ia =
                h.oa.Ia, h.oa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Ia = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).oa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).oa) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, l) {
            for (var m = this.entries(),
                    n; !(n = m.next()).done;) n = n.value, h.call(l, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
                var n = h.h[m];
                if (n && va(h.h, m))
                    for (h = 0; h < n.length; h++) {
                        var v = n[h];
                        if (l !== l && v.key !== v.key || l === v.key) return {
                            id: m,
                            list: n,
                            index: h,
                            oa: v
                        }
                    }
                return {
                    id: m,
                    list: n,
                    index: -1,
                    oa: void 0
                }
            },
            e = function(h, l) {
                var m = h.g;
                return sa(function() {
                    if (m) {
                        for (; m.head != h.g;) m = m.Ia;
                        for (; m.next != m.head;) return m =
                            m.next, {
                                done: !1,
                                value: l(m)
                            };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ia = h.next = h.head = h
            },
            g = 0;
        return c
    });
    na("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.w()
                })
            }
            this.g.push(g)
        };
        var d = ma.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.w = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (m) {
                        this.o(m)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.h = 0;
            this.l = void 0;
            this.g = [];
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.o = function() {
            function g(m) {
                return function(n) {
                    l || (l = !0, m.call(h, n))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.D),
                reject: g(this.w)
            }
        };
        e.prototype.D = function(g) {
            if (g === this) this.w(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.F(g);
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
                h ? this.K(g) : this.A(g)
            }
        };
        e.prototype.K = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.w(l);
                return
            }
            "function" == typeof h ? this.H(h, g) : this.A(g)
        };
        e.prototype.w = function(g) {
            this.C(2, g)
        };
        e.prototype.A = function(g) {
            this.C(1, g)
        };
        e.prototype.C = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.l = h;
            this.G()
        };
        e.prototype.G = function() {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
                this.g = null
            }
        };
        var f = new b;
        e.prototype.F = function(g) {
            var h =
                this.o();
            g.Ib(h.resolve, h.reject)
        };
        e.prototype.H = function(g, h) {
            var l = this.o();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function(g, h) {
            function l(r, u) {
                return "function" == typeof r ? function(z) {
                    try {
                        m(r(z))
                    } catch (T) {
                        n(T)
                    }
                } : u
            }
            var m, n, v = new e(function(r, u) {
                m = r;
                n = u
            });
            this.Ib(l(g, m), l(h, n));
            return v
        };
        e.prototype["catch"] = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Ib = function(g, h) {
            function l() {
                switch (m.h) {
                    case 1:
                        g(m.l);
                        break;
                    case 2:
                        h(m.l);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            m.h);
                }
            }
            var m = this;
            null == this.g ? f.h(l) : this.g.push(l)
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, l) {
                for (var m = ba(g), n = m.next(); !n.done; n = m.next()) c(n.value).Ib(h, l)
            })
        };
        e.all = function(g) {
            var h = ba(g),
                l = h.next();
            return l.done ? c([]) : new e(function(m, n) {
                function v(z) {
                    return function(T) {
                        r[z] = T;
                        u--;
                        0 == u && m(r)
                    }
                }
                var r = [],
                    u = 0;
                do r.push(void 0), u++, c(l.value).Ib(v(r.length - 1), n), l = h.next(); while (!l.done)
            })
        };
        return e
    });
    na("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    na("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    na("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) va(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    var xa = xa || {},
        q = this || self,
        t = function(a) {
            return void 0 !== a
        },
        ya = function(a) {
            return "string" == typeof a
        },
        za = function(a) {
            return "boolean" == typeof a
        },
        Aa = function(a) {
            return "number" == typeof a
        },
        w = function(a, b, c) {
            a = a.split(".");
            c = c || q;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        Da = function() {
            if (null === Ba) a: {
                var a = q.document;
                if ((a = a.querySelector && a.querySelector("script[nonce]")) &&
                    (a = a.nonce || a.getAttribute("nonce")) && Ca.test(a)) {
                    Ba = a;
                    break a
                }
                Ba = ""
            }
            return Ba
        },
        Ca = /^[\w+/_-]+[=]{0,2}$/,
        Ba = null,
        Ea = function(a, b) {
            a = a.split(".");
            b = b || q;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        Fa = function() {},
        Ga = function(a) {
            a.tc = void 0;
            a.B = function() {
                return a.tc ? a.tc : a.tc = new a
            }
        },
        Ha = function(a) {
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
        Ia = function(a) {
            return "array" == Ha(a)
        },
        Ja = function(a) {
            var b = Ha(a);
            return "array" == b || "object" ==
                b && "number" == typeof a.length
        },
        x = function(a) {
            return "function" == Ha(a)
        },
        Ka = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        La = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ma = 0,
        Na = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Oa = function(a, b, c) {
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
                return a.apply(b,
                    arguments)
            }
        },
        Pa = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Pa = Na : Pa = Oa;
            return Pa.apply(null, arguments)
        },
        Qa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        y = Date.now || function() {
            return +new Date
        },
        A = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.sa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var Ra = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ra);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    A(Ra, Error);
    Ra.prototype.name = "CustomError";
    var Sa;
    var Ua = function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        B = function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Va = function(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
        },
        Wa = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h =
                        f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        },
        Xa = function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Ya = function(a, b, c) {
            var d = c;
            B(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        Za = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        ab = function(a, b) {
            b = $a(a, b, void 0);
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        },
        $a =
        function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        bb = function(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) return d;
            return -1
        },
        cb = function(a, b) {
            return 0 <= Ua(a, b)
        },
        db = function(a, b) {
            b = Ua(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        eb = function(a, b) {
            var c = 0;
            Va(a, function(d, e) {
                b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length &&
                    c++
            })
        },
        fb = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        gb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        ib = function(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++];
                var f = e;
                f = Ka(f) ? "o" + (f[La] || (f[La] = ++Ma)) : (typeof f).charAt(0) + f;
                Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
            }
            a.length = c
        },
        kb = function(a, b) {
            a.sort(b || jb)
        },
        jb = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        lb = function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = "";
            return b
        };
    var nb = function(a) {
        return Xa(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };
    var ob = function(a) {
            return function() {
                return a
            }
        },
        qb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        rb = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = q.setTimeout(e, 1E3);
                    a.apply(void 0, d)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var sb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        tb = function(a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        vb = function(a) {
            var b = ub,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return !0;
            return !1
        },
        xb = function(a) {
            var b = wb,
                c;
            for (c in b)
                if (!a.call(void 0, b[c], c, b)) return !1;
            return !0
        },
        yb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        zb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Ab = function(a, b) {
            var c = Ja(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null ==
                    a) return;
                a = a[d[c]]
            }
            return a
        },
        Bb = function(a, b) {
            return null !== a && b in a
        },
        Cb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Eb = function(a) {
            var b = Db,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return c
        },
        Fb = function(a) {
            for (var b in a) return !1;
            return !0
        },
        Gb = function(a) {
            for (var b in a) delete a[b]
        },
        Hb = function(a, b, c) {
            return null !== a && b in a ? a[b] : c
        },
        Ib = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Jb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d =
                    arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ib.length; f++) c = Ib[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Mb = function(a, b) {
        this.g = a === Kb && b || "";
        this.h = Lb
    };
    Mb.prototype.Va = !0;
    Mb.prototype.La = function() {
        return this.g
    };
    var Nb = function(a) {
            return a instanceof Mb && a.constructor === Mb && a.h === Lb ? a.g : "type_error:Const"
        },
        Ob = function(a) {
            return new Mb(Kb, a)
        },
        Lb = {},
        Kb = {},
        Pb = Ob("");
    var Sb = function(a, b, c) {
        this.g = a === Qb && b || "";
        this.jb = a === Qb && c || null;
        this.h = Rb
    };
    Sb.prototype.Va = !0;
    Sb.prototype.La = function() {
        return this.g.toString()
    };
    Sb.prototype.rc = !0;
    Sb.prototype.kc = function() {
        return 1
    };
    var Tb = function(a) {
            if (a instanceof Sb && a.constructor === Sb && a.h === Rb) return a.g;
            Ha(a);
            return "type_error:TrustedResourceUrl"
        },
        Rb = {},
        Ub = function(a) {
            return new Sb(Qb, a, null)
        },
        Qb = {};
    var Vb = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        Wb = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Xb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        fc = function(a, b) {
            if (b) a = a.replace(Yb, "&amp;").replace(Zb, "&lt;").replace($b, "&gt;").replace(ac, "&quot;").replace(cc, "&#39;").replace(dc, "&#0;");
            else {
                if (!ec.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Yb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Zb, "&lt;")); -
                1 != a.indexOf(">") && (a = a.replace($b, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ac, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(cc, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(dc, "&#0;"))
            }
            return a
        },
        Yb = /&/g,
        Zb = /</g,
        $b = />/g,
        ac = /"/g,
        cc = /'/g,
        dc = /\x00/g,
        ec = /[\x00&<>"']/,
        gc = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        ic = function(a, b) {
            var c = 0;
            a = Xb(String(a)).split(".");
            b = Xb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = hc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || hc(0 == f[2].length, 0 == g[2].length) || hc(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        hc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var lc = function(a, b) {
        this.g = a === jc && b || "";
        this.h = kc
    };
    lc.prototype.Va = !0;
    lc.prototype.La = function() {
        return this.g.toString()
    };
    lc.prototype.rc = !0;
    lc.prototype.kc = function() {
        return 1
    };
    var mc = function(a) {
            if (a instanceof lc && a.constructor === lc && a.h === kc) return a.g;
            Ha(a);
            return "type_error:SafeUrl"
        },
        nc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        oc = function(a) {
            if (a instanceof lc) return a;
            a = "object" == typeof a && a.Va ? a.La() : String(a);
            nc.test(a) || (a = "about:invalid#zClosurez");
            return new lc(jc, a)
        },
        kc = {},
        jc = {};
    var pc;
    a: {
        var qc = q.navigator;
        if (qc) {
            var rc = qc.userAgent;
            if (rc) {
                pc = rc;
                break a
            }
        }
        pc = ""
    }
    var C = function(a) {
        return -1 != pc.indexOf(a)
    };
    var sc = function() {
            return C("Trident") || C("MSIE")
        },
        tc = function() {
            return C("Firefox") || C("FxiOS")
        },
        vc = function() {
            return C("Safari") && !(uc() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || tc() || C("Silk") || C("Android"))
        },
        uc = function() {
            return (C("Chrome") || C("CriOS")) && !C("Edge")
        };
    var xc = function() {
        this.g = "";
        this.l = wc;
        this.h = null
    };
    xc.prototype.rc = !0;
    xc.prototype.kc = function() {
        return this.h
    };
    xc.prototype.Va = !0;
    xc.prototype.La = function() {
        return this.g.toString()
    };
    var yc = function(a) {
            if (a instanceof xc && a.constructor === xc && a.l === wc) return a.g;
            Ha(a);
            return "type_error:SafeHtml"
        },
        wc = {},
        zc = function(a, b) {
            var c = new xc;
            c.g = a;
            c.h = b;
            return c
        };
    zc("<!DOCTYPE html>", 0);
    var Ac = zc("", 0);
    zc("<br>", 0);
    var Bc = function(a) {
            var b = Ub(Nb(Pb));
            a.src = b.jb ? b.jb : Tb(b).toString()
        },
        Cc = function(a, b) {
            a.src = Tb(b);
            (b = Da()) && a.setAttribute("nonce", b)
        };
    var Dc = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Ec = function(a) {
            return a = fc(a, void 0)
        },
        Fc = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        Gc = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Hc = function(a) {
            return null == a ? "" : String(a)
        },
        Ic = 2147483648 * Math.random() | 0,
        Jc = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        Kc = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        Lc = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Mc = function() {
            return C("iPhone") && !C("iPod") && !C("iPad")
        },
        Nc = function() {
            return Mc() || C("iPad") || C("iPod")
        };
    var Oc = function(a) {
        Oc[" "](a);
        return a
    };
    Oc[" "] = Fa;
    var Pc = function(a, b) {
            try {
                return Oc(a[b]), !0
            } catch (c) {}
            return !1
        },
        Rc = function(a, b) {
            var c = Qc;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Sc = C("Opera"),
        Tc = sc(),
        Uc = C("Edge"),
        Vc = C("Gecko") && !(gc(pc, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        Wc = gc(pc, "WebKit") && !C("Edge"),
        Xc = C("Macintosh"),
        Yc = C("Android"),
        Zc = Mc(),
        $c = C("iPad"),
        ad = C("iPod"),
        bd = Nc(),
        cd = function() {
            var a = q.document;
            return a ? a.documentMode : void 0
        },
        dd;
    a: {
        var ed = "",
            fd = function() {
                var a = pc;
                if (Vc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Uc) return /Edge\/([\d\.]+)/.exec(a);
                if (Tc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Wc) return /WebKit\/(\S+)/.exec(a);
                if (Sc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();fd && (ed = fd ? fd[1] : "");
        if (Tc) {
            var gd = cd();
            if (null != gd && gd > parseFloat(ed)) {
                dd = String(gd);
                break a
            }
        }
        dd = ed
    }
    var hd = dd,
        Qc = {},
        id = function(a) {
            return Rc(a, function() {
                return 0 <= ic(hd, a)
            })
        },
        jd;
    jd = q.document && Tc ? cd() : void 0;
    var kd = tc(),
        ld = Mc() || C("iPod"),
        md = C("iPad"),
        nd = C("Android") && !(uc() || tc() || C("Opera") || C("Silk")),
        od = uc(),
        pd = vc() && !Nc();
    var qd = {},
        rd = null,
        sd = function(a, b) {
            void 0 === b && (b = 0);
            if (!rd) {
                rd = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    qd[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === rd[h] && (rd[h] = g)
                    }
                }
            }
            b = qd[b];
            c = [];
            for (d = 0; d < a.length; d += 3) {
                var l = a[d],
                    m = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f = d + 2 < a.length) ? a[d + 2] : 0;
                g = l >> 2;
                l = (l & 3) << 4 | m >> 4;
                m = (m & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (m = 64));
                c.push(b[g], b[l], b[m] || "", b[h] ||
                    "")
            }
            return c.join("")
        };
    var td = 0,
        ud = 0;
    var vd = function() {
        this.g = []
    };
    vd.prototype.length = function() {
        return this.g.length
    };
    vd.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var wd = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        xd = function(a, b) {
            a.g.push(b >>> 0 & 255);
            a.g.push(b >>> 8 & 255);
            a.g.push(b >>> 16 & 255);
            a.g.push(b >>> 24 & 255)
        };
    var yd = function() {
        this.h = [];
        this.l = 0;
        this.g = new vd
    };
    yd.prototype.reset = function() {
        this.h = [];
        this.g.end();
        this.l = 0
    };
    var zd = function(a, b, c) {
        if (null != c) {
            wd(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            td = b;
            ud = d;
            c = td;
            for (b = ud; 0 < b || 127 < c;) a.g.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.g.push(c)
        }
    };
    var Ad = function() {},
        Bd = "function" == typeof Uint8Array,
        Ed = function(a, b, c) {
            a.h = null;
            b || (b = []);
            a.C = void 0;
            a.o = -1;
            a.g = b;
            a: {
                if (b = a.g.length) {
                    --b;
                    var d = a.g[b];
                    if (!(null === d || "object" != typeof d || Ia(d) || Bd && d instanceof Uint8Array)) {
                        a.w = b - a.o;
                        a.l = d;
                        break a
                    }
                }
                a.w = Number.MAX_VALUE
            }
            a.A = {};
            if (c)
                for (b = 0; b < c.length; b++) d = c[b], d < a.w ? (d += a.o, a.g[d] = a.g[d] || Cd) : (Dd(a), a.l[d] = a.l[d] || Cd)
        },
        Cd = [],
        Dd = function(a) {
            var b = a.w + a.o;
            a.g[b] || (a.l = a.g[b] = {})
        },
        Fd = function(a, b) {
            if (b < a.w) {
                b += a.o;
                var c = a.g[b];
                return c === Cd ? a.g[b] = [] :
                    c
            }
            if (a.l) return c = a.l[b], c === Cd ? a.l[b] = [] : c
        },
        Gd = function(a, b) {
            a = Fd(a, b);
            return null == a ? 0 : a
        },
        Hd = function(a, b, c) {
            0 !== c ? b < a.w ? a.g[b + a.o] = c : (Dd(a), a.l[b] = c) : a.g[b + a.o] = null;
            return a
        },
        Ld = function(a) {
            if (a.h)
                for (var b in a.h) {
                    var c = a.h[b];
                    if (Ia(c))
                        for (var d = 0; d < c.length; d++) c[d] && Kd(c[d]);
                    else c && Kd(c)
                }
        },
        Kd = function(a) {
            Ld(a);
            return a.g
        };
    Ad.prototype.toString = function() {
        Ld(this);
        return this.g.toString()
    };
    Ad.prototype.clone = function() {
        return new this.constructor(Md(Kd(this)))
    };
    var Md = function(a) {
        if (Ia(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Md(d) : d)
            }
            return b
        }
        if (Bd && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Md(d) : d);
        return b
    };
    var Nd = document,
        D = window;
    var Od = function(a) {
        Ed(this, a, null)
    };
    A(Od, Ad);
    var Pd = function(a) {
        Ed(this, a, null)
    };
    A(Pd, Ad);
    var Qd = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    k = Qd.prototype;
    k.isEnabled = function() {
        return navigator.cookieEnabled
    };
    k.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.o;
            f = c.w;
            e = c.g;
            d = c.h;
            c = c.l
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        e = e ? ";domain=" + e : "";
        d = d ? ";path=" + d : "";
        f = f ? ";secure" : "";
        c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
        this.g.cookie = a + "=" + b + e + d + c + f + (null != g ? ";samesite=" + g : "")
    };
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Xb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.Ba = function() {
        return Rd(this).keys
    };
    k.la = function() {
        return Rd(this).values
    };
    k.isEmpty = function() {
        return !this.g.cookie
    };
    k.clear = function() {
        for (var a = Rd(this).keys, b = a.length - 1; 0 <= b; b--) {
            var c = a[b];
            this.get(c);
            this.set(c, "", 0, void 0, void 0)
        }
    };
    var Rd = function(a) {
            a = (a.g.cookie || "").split(";");
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Xb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return {
                keys: b,
                values: c
            }
        },
        Sd = new Qd("undefined" == typeof document ? null : document);
    var Td = function(a) {
            return (a = (new Qd(a)).get("DATA_USE_CONSENT", "")) ? a : null
        },
        Ud = function(a) {
            var b = (b = (new Qd(a)).get("FCCDCF", "")) ? b : null;
            try {
                var c = b ? new Od(b ? JSON.parse(b) : null) : null
            } catch (d) {
                c = null
            }
            if (!c) return Td(a);
            c.h || (c.h = {});
            c.h[3] || (b = Fd(c, 3)) && (c.h[3] = new Pd(b));
            c = c.h[3];
            if (!c || null == Fd(c, 1)) return Td(a);
            a = Fd(c, 2);
            b = y();
            if (a) {
                if (b < a || b > a + 33696E6) return null
            } else return null;
            return Fd(c, 1)
        };
    var Wd = function(a) {
        Ed(this, a, Vd)
    };
    A(Wd, Ad);
    var Vd = [1, 2, 3, 4];
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var Xd = !Tc || 9 <= Number(jd),
        Yd = Tc || Sc || Wc;
    var Zd = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    k = Zd.prototype;
    k.clone = function() {
        return new Zd(this.x, this.y)
    };
    k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var E = function(a, b) {
        this.width = a;
        this.height = b
    };
    k = E.prototype;
    k.clone = function() {
        return new E(this.width, this.height)
    };
    k.aspectRatio = function() {
        return this.width / this.height
    };
    k.isEmpty = function() {
        return !(this.width * this.height)
    };
    k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var be = function(a) {
            return a ? new $d(ae(a)) : Sa || (Sa = new $d)
        },
        ce = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
        },
        ee = function(a, b) {
            sb(b, function(c, d) {
                c && "object" == typeof c && c.Va && (c = c.La());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : de.hasOwnProperty(d) ? a.setAttribute(de[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        de = {
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
        fe = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new E(a.clientWidth, a.clientHeight)
        },
        ge = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Wc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return Tc && id("10") && a.pageYOffset != b.scrollTop ? new Zd(b.scrollLeft, b.scrollTop) : new Zd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        F = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        je = function(a, b, c) {
            var d = arguments,
                e = document,
                f = String(d[0]),
                g = d[1];
            if (!Xd && g && (g.name || g.type)) {
                f = ["<", f];
                g.name && f.push(' name="', Ec(g.name), '"');
                if (g.type) {
                    f.push(' type="', Ec(g.type), '"');
                    var h = {};
                    Jb(h, g);
                    delete h.type;
                    g = h
                }
                f.push(">");
                f = f.join("")
            }
            f = he(e, f);
            g && ("string" === typeof g ? f.className =
                g : Ia(g) ? f.className = g.join(" ") : ee(f, g));
            2 < d.length && ie(e, f, d);
            return f
        },
        ie = function(a, b, c) {
            function d(g) {
                g && b.appendChild("string" === typeof g ? a.createTextNode(g) : g)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                !Ja(f) || Ka(f) && 0 < f.nodeType ? d(f) : B(ke(f) ? gb(f) : f, d)
            }
        },
        he = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        le = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        me = function(a) {
            var b;
            if (Yd && !(Tc && id("9") && !id("10") && q.SVGElement &&
                    a instanceof q.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return Ka(b) && 1 == b.nodeType ? b : null
        },
        ne = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        ae = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        oe = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? F(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        ke = function(a) {
            if (a && "number" == typeof a.length) {
                if (Ka(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (x(a)) return "function" == typeof a.item
            }
            return !1
        },
        pe = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        $d = function(a) {
            this.g = a || q.document || document
        };
    $d.prototype.createElement = function(a) {
        return he(this.g, a)
    };
    $d.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    $d.prototype.contains = ne;
    var re = function(a) {
            qe();
            return Ub(a)
        },
        qe = Fa;
    var te = function() {
            return !se() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
        },
        se = function() {
            return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
        };
    var ue = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        ve = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Dc(e) : "")
                }
            }
        },
        we = /#|$/,
        xe = function(a, b) {
            var c = a.search(we);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Dc(a.substr(d, e - d))
        };
    var ye = function(a) {
            try {
                return !!a && null != a.location.href && Pc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        ze = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        Ae = /https?:\/\/[^\/]+/,
        Be = function(a) {
            return (a = Ae.exec(a)) && a[0] || ""
        },
        Ce = function() {
            var a = q;
            var b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        },
        Ee = function() {
            var a = De;
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        },
        Fe = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        };
    var Ge = qb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function He(a) {
        return a ? a.passive && Ge() ? a : a.capture || !1 : !1
    }
    var Ie = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, He(d)), !0) : !1
        },
        Je = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, He(void 0))
        },
        Ke = function(a) {
            var b = void 0 === b ? {} : b;
            if (x(window.CustomEvent)) var c = new CustomEvent("rum_blp", b);
            else c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
            a.dispatchEvent(c)
        };
    var Le = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    var Me = function(a) {
        var b = document;
        try {
            var c = Ud(b);
            var d = c ? new Wd(c ? JSON.parse(c) : null) : null
        } catch (e) {
            d = null
        }
        if (!d) return 0;
        b = Fd(d, 7);
        if (null == b ? b : b) return 4;
        if (6048E5 < y() - (Fd(d, 5) || 0)) return 0;
        if (a) {
            if (cb(Fd(d, 3), a)) return 2;
            if (cb(Fd(d, 4), a)) return 3
        }
        return 1
    };
    var Ne = {
        ih: 1,
        zh: 2,
        Zg: 3
    };
    var G = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    G.prototype.h = function() {
        return this.right - this.left
    };
    G.prototype.g = function() {
        return this.bottom - this.top
    };
    G.prototype.clone = function() {
        return new G(this.top, this.right, this.bottom, this.left)
    };
    G.prototype.contains = function(a) {
        return this && a ? a instanceof G ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    var Oe = function(a, b) {
        return a == b ? !0 : a && b ? a.top == b.top && a.right == b.right && a.bottom == b.bottom && a.left == b.left : !1
    };
    G.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    G.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    G.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Pe = function(a, b, c) {
        b instanceof Zd ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    G.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Qe = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    Qe.prototype.clone = function() {
        return new Qe(this.left, this.top, this.width, this.height)
    };
    var Re = function(a) {
        return new G(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    k = Qe.prototype;
    k.contains = function(a) {
        return a instanceof Zd ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    k.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var Te = function(a, b) {
            if ("string" === typeof b)(b = Se(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = Se(d, c);
                    f && (d.style[f] = e)
                }
        },
        Ue = {},
        Se = function(a, b) {
            var c = Ue[b];
            if (!c) {
                var d = Jc(b);
                c = d;
                void 0 === a.style[d] && (d = (Wc ? "Webkit" : Vc ? "Moz" : Tc ? "ms" : Sc ? "O" : null) + Lc(d), void 0 !== a.style[d] && (c = d));
                Ue[b] = c
            }
            return c
        },
        Ve = function(a, b) {
            var c = a.style[Jc(b)];
            return "undefined" !== typeof c ? c : a.style[Se(a, b)] || ""
        },
        We = function(a) {
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
            Tc &&
                a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            return b
        },
        Xe = function(a) {
            var b = ae(a),
                c = new Zd(0, 0);
            var d = b ? ae(b) : document;
            d = !Tc || 9 <= Number(jd) || "CSS1Compat" == be(d).g.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = We(a);
            b = ge(be(b).g);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        Ye = function(a, b) {
            var c = new Zd(0, 0),
                d = F(ae(a));
            if (!Pc(d, "parent")) return c;
            do {
                if (d == b) var e = Xe(a);
                else e = We(a), e = new Zd(e.left,
                    e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        Ze = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Wc && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = We(a), new E(a.right - a.left, a.bottom - a.top)) : new E(b, c)
        };
    var $e = function(a) {
        a = void 0 === a ? q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };
    var bf = /^((market|itms|intent|itms-appss):\/\/)/i;
    var cf = !!window.google_async_iframe_id,
        df = cf && window.parent || window,
        ef = function() {
            if (cf && !ye(df)) {
                var a = "." + Nd.domain;
                try {
                    for (; 2 < a.split(".").length && !ye(df);) Nd.domain = a = a.substr(a.indexOf(".") + 1), df = window.parent
                } catch (b) {}
                ye(df) || (df = window)
            }
            return df
        };
    Ub(Nb(Ob("//fonts.googleapis.com/css")));
    var ff = function(a, b, c) {
            c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        },
        gf = function(a) {
            return !!(a.error && a.meta && a.id)
        };
    var hf = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        mf = function(a) {
            a = a || jf();
            for (var b = new kf(q.location.href, q, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
                var f = a[e];
                !c && hf.test(f.url) && (c = f);
                if (f.url && !f.vc) {
                    b = f;
                    break
                }
            }
            e = null;
            f = a.length && a[d].url;
            0 != b.depth && f && (e = a[d]);
            return new lf(b, e, c)
        },
        jf = function() {
            var a = q,
                b = [],
                c = null;
            do {
                var d = a;
                if (ye(d)) {
                    var e = d.location.href;
                    c = d.document && d.document.referrer || null
                } else e = c, c = null;
                b.push(new kf(e || "", d));
                try {
                    a = d.parent
                } catch (f) {
                    a = null
                }
            } while (a &&
                d != a);
            d = 0;
            for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
            d = q;
            if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
                for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.vc = !0);
            return b
        },
        lf = function(a, b, c) {
            this.g = a;
            this.h = b;
            this.l = c
        },
        kf = function(a, b, c) {
            this.url = a;
            this.ma = b;
            this.vc = !!c;
            this.depth = null
        };
    var nf = function() {
            this.h = "&";
            this.o = !1;
            this.l = {};
            this.w = 0;
            this.g = []
        },
        of = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        qf = function(a, b, c, d, e) {
            var f = [];
            ze(a, function(g, h) {
                (g = pf(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        pf = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(pf(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(qf(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        rf = function(a, b, c) {
            a.g.push(b);
            a.l[b] = c
        },
        sf = function(a, b, c, d) {
            a.g.push(b);
            a.l[b] = of (c, d)
        },
        uf = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = tf(a) - c.length;
            if (0 > d) return "";
            a.g.sort(function(n, v) {
                return n - v
            });
            c = null;
            for (var e = "", f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.l[g], l = 0; l < h.length; l++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var m = qf(h[l], a.h, ",$");
                    if (m) {
                        m = e + m;
                        if (d >= m.length) {
                            d -= m.length;
                            b += m;
                            e = a.h;
                            break
                        }
                        a.o && (e = d, m[e - 1] == a.h && --e, b +=
                            m.substr(0, e), e = a.h, d = 0);
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c && (a = e + "trn=" + c);
            return b + a + ""
        },
        tf = function(a) {
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return 3997 - b - a.h.length - 1
        };
    var vf = function() {
            var a = void 0 === a ? D : a;
            this.h = "http:" === a.location.protocol ? "http:" : "https:";
            this.g = Math.random()
        },
        yf = function() {
            var a = wf,
                b = xf.google_srt;
            0 <= b && 1 >= b && (a.g = b)
        },
        zf = function(a, b, c, d, e) {
            if ((d ? a.g : Math.random()) < (e || .01)) try {
                if (c instanceof nf) var f = c;
                else f = new nf, ze(c, function(h, l) {
                    var m = f,
                        n = m.w++;
                    rf(m, n, of (l, h))
                });
                var g = uf(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && Le(q, g)
            } catch (h) {}
        };
    var Af = null;
    var Bf = function() {
            var a = q.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : y()
        },
        Cf = function() {
            var a = void 0 === a ? q : a;
            return (a = a.performance) && a.now ? a.now() : null
        },
        Df = function(a) {
            var b = q.performance;
            return b && b.timing && b.timing[a] || 0
        },
        Ef = function() {
            var a = Math.min(Df("domLoading") || Infinity, Df("domInteractive") || Infinity);
            return Infinity == a ? Math.max(Df("responseEnd"), Df("navigationStart")) : a
        };
    var Ff = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var Gf = q.performance,
        Hf = !!(Gf && Gf.mark && Gf.measure && Gf.clearMarks),
        If = qb(function() {
            var a;
            if (a = Hf) {
                var b;
                if (null === Af) {
                    Af = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (Af = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Af;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        Jf = function(a, b) {
            this.events = [];
            this.g = b || q;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.h = If() || (null !=
                c ? c : Math.random() < a)
        };
    Jf.prototype.C = function() {
        this.h = !1;
        this.events != this.g.google_js_reporting_queue && (If() && B(this.events, Kf), this.events.length = 0)
    };
    Jf.prototype.G = function(a) {
        !this.h || 2048 < this.events.length || this.events.push(a)
    };
    var Kf = function(a) {
        a && Gf && If() && (Gf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Gf.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Jf.prototype.start = function(a, b) {
        if (!this.h) return null;
        var c = Cf() || Bf();
        a = new Ff(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Gf && If() && Gf.mark(b);
        return a
    };
    Jf.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            var b = Cf() || Bf();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Gf && If() && Gf.mark(b);
            this.G(a)
        }
    };
    var Mf = function() {
        var a = Lf;
        this.l = wf;
        this.A = "jserror";
        this.o = !0;
        this.h = null;
        this.C = this.Ha;
        this.g = void 0 === a ? null : a;
        this.w = !1
    };
    k = Mf.prototype;
    k.pinger = function() {
        return this.l
    };
    k.ac = function(a) {
        this.h = a
    };
    k.Nc = function(a) {
        this.A = a
    };
    k.Oc = function(a) {
        this.o = a
    };
    k.Pc = function(a) {
        this.w = a
    };
    k.Za = function(a, b, c) {
        try {
            if (this.g && this.g.h) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (g) {
            b = this.o;
            try {
                Kf(d);
                var f = new ff(g, {
                    message: Nf(g)
                });
                b = this.C(a, f, void 0, c)
            } catch (h) {
                this.Ha(217, h)
            }
            if (!b) throw g;
        }
        return e
    };
    k.Jc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.Za(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    k.Ha = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new nf;
            f.o = !0;
            sf(f, 1, "context", a);
            gf(b) || (b = new ff(b, {
                message: Nf(b)
            }));
            b.msg && sf(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (l) {}
            if (d) try {
                d(g)
            } catch (l) {}
            rf(f, 3, [g]);
            var h = mf();
            h.h && sf(f, 4, "top", h.h.url || "");
            sf(f, 5, "url", h.g.url || "");
            zf(this.l, e, f, this.w, c)
        } catch (l) {
            try {
                zf(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Nf(l),
                    url: h && h.g.url
                }, this.w, c)
            } catch (m) {}
        }
        return this.o
    };
    var Nf = function(a) {
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
    var Of = function() {
        this.h = "jserror";
        this.l = !1;
        this.g = null;
        this.o = !1;
        this.A = Math.random();
        this.w = this.Ha
    };
    k = Of.prototype;
    k.Nc = function(a) {
        this.h = a
    };
    k.ac = function(a) {
        this.g = a
    };
    k.Oc = function(a) {
        this.l = a
    };
    k.Pc = function(a) {
        this.o = a
    };
    k.Ha = function(a, b, c, d, e) {
        e = void 0 === e ? this.h : e;
        if ((this.o ? this.A : Math.random()) > (void 0 === c ? .01 : c)) return this.l;
        gf(b) || (b = new ff(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        q.google_js_errors = q.google_js_errors || [];
        q.google_js_errors.push(b);
        q.error_rep_loaded || (b = q.document, a = b.createElement("script"), Cc(a, re(q.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a,
            b), q.error_rep_loaded = !0);
        return this.l
    };
    k.Za = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.w(a, e, .01, c, this.h)) throw e;
        }
        return d
    };
    k.Jc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.Za(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var wf, Pf, Qf, xf = ef(),
        Lf = new Jf(1, xf);
    (function() {
        wf = new vf;
        "number" !== typeof xf.google_srt && (xf.google_srt = Math.random());
        yf();
        Pf = new Mf;
        Pf.ac(function(b) {
            var c = D.jerExpIds;
            if (Ia(c) && 0 !== c.length) {
                var d = b.eid;
                d ? (c = [].concat(ca(d.split(",")), ca(c)), ib(c), b.eid = c.join(",")) : b.eid = c.join(",")
            }
            Qf && (b.jc = Qf);
            (c = D.jerUserAgent) && (b.useragent = c)
        });
        Pf.Pc(!0);
        "complete" == xf.document.readyState ? xf.google_measure_js_timing || Lf.C() : Lf.h && Ie(xf, "load", function() {
            xf.google_measure_js_timing || Lf.C()
        });
        var a = Nd.currentScript;
        Qf = a ? a.dataset.jc : ""
    })();
    var Rf = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, ye(a) && (c = a, b = d);
        return {
            ma: c,
            level: b
        }
    };
    var Sf = function() {
            this.S = {}
        },
        Vf = function() {
            if (Tf) var a = Tf;
            else {
                a = ((a = $e()) ? ye(a.master) ? a.master : null : null) || ef();
                var b = a.google_persistent_state_async;
                a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Tf = b : a.google_persistent_state_async = Tf = new Sf
            }
            b = ef();
            var c = $e(b);
            c ? ((c = c || $e()) ? (b = c.pageViewId, c = c.clientId, "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = Rf(b).ma, (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2,
                43))), b = c);
            c = Uf[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            a = void 0 === d ? a[c] = b : d;
            return a
        },
        Tf = null,
        Wf = {},
        Uf = (Wf[8] = "google_prev_ad_formats_by_region", Wf[9] = "google_prev_ad_slotnames_by_region", Wf);
    var Zf = function(a) {
            var b = [];
            Xf(new Yf, a, b);
            return b.join("")
        },
        Yf = function() {},
        Xf = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Ia(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), Xf(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), $f(d, c), c.push(":"), Xf(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        $f(b, c);
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
        },
        ag = {
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
        bg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        $f = function(a, b) {
            b.push('"', a.replace(bg, function(c) {
                var d = ag[c];
                d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), ag[c] = d);
                return d
            }), '"')
        };
    var cg = function() {
            this.g = null;
            this.h = "missing-id"
        },
        eg = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return dg("missing-element", a.h), a.g = "", null
            }
            if (1 < b.length) return dg("multiple-elements", a.h), a.g = "", null;
            b = b[0];
            return b ? b.innerHTML : (dg("missing-element", a.h), a.g = "", null)
        },
        gg = function() {
            var a = fg,
                b = eg(a);
            if (null !== b)
                if (/^\s*$/.test(b) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                        "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
                    var c = JSON.parse(b);
                    b = c.experimentFlags;
                    c = c.binaryIdentifier;
                    var d = ya(c);
                    d && (a.h = c);
                    ya(b) ? (d || dg("missing-binary-id", a.h), a.g = b) : (dg("missing-flags", a.h), a.g = "")
                } else dg("invalid-json", a.h), a.g = ""
        };
    cg.prototype.reset = function() {
        this.g = null;
        this.h = "missing-id"
    };
    var hg = function(a, b, c) {
            this.id = a;
            this.L = b;
            this.g = c;
            this.Bb = !1
        },
        ig = function() {
            this.g = []
        },
        jg = function() {
            this.g = new Map;
            this.h = !1;
            this.o = new ig;
            this.w = new hg(0, 0, !1);
            this.l = [this.o]
        },
        H = function(a) {
            var b = kg;
            if (b.h || b.g.has(a.id) || null == a.L && null == a.control) return b.w;
            var c = b.o;
            if (null != a.control)
                for (var d = ba(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else null != a.Pb && (c = a.Pb);
            d = 0;
            null != a.control ? d = a.control.L : null != a.L && (d = a.L);
            a = new hg(a.id, d, !!a.Ch);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        lg = function() {
            var a = kg;
            return [].concat(ca(a.g.keys())).filter(function(b) {
                b = this.g.get(b);
                return b.Bb || b.g
            }, a)
        },
        mg = function(a) {
            var b = kg;
            b.h || (a.g(b.l, b.g), b.h = !0)
        };
    jg.prototype.reset = function() {
        for (var a = ba(this.g), b = a.next(); !b.done; b = a.next()) b = ba(b.value), b.next(), b.next().value.Bb = !1;
        this.h = !1
    };
    var kg = new jg;
    var ng = function() {};
    ng.prototype.g = function(a) {
        a = ba(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(1E3 * Math.random());
            b = ba(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.L, d < c) {
                    e.Bb = !0;
                    break
                }
        }
    };
    var og = function(a) {
        this.h = a
    };
    og.prototype.g = function(a, b) {
        a = ba(this.h);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.Bb = !0
    };
    var pg = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        qg = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };
    var rg = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    var sg = function(a, b, c) {
            ze(b, function(d, e) {
                var f = c && c[e];
                !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
            });
            return a
        },
        zg = function(a, b, c, d, e, f, g, h) {
            f = void 0 === f ? Infinity : f;
            g = void 0 === g ? !1 : g;
            Jf.call(this, a, h);
            var l = this;
            this.K = 0;
            this.M = f;
            this.aa = b;
            this.N = c;
            this.$ = d;
            this.ia = e;
            this.Y = !("csi.gstatic.com" !== this.N || !this.g.navigator || !this.g.navigator.sendBeacon);
            this.w = {};
            this.I = {};
            this.g.performance && this.g.performance.now || tg(this, "dat", 1);
            this.g.navigator &&
                this.g.navigator.deviceMemory && tg(this, "dmc", this.g.navigator.deviceMemory);
            this.V = !g;
            this.O = function() {
                l.g.setTimeout(function() {
                    return ug(l)
                }, 1100)
            };
            this.ra = [];
            this.Z = function() {
                vg(l, 1)
            };
            this.P = function() {
                vg(l, 2)
            };
            this.na = rb(function() {
                ug(l)
            });
            this.Aa = function() {
                var n = l.g.document;
                (null != n.hidden ? n.hidden : null != n.mozHidden ? n.mozHidden : null != n.webkitHidden && n.webkitHidden) && l.na()
            };
            this.D = this.g.setTimeout(function() {
                return ug(l)
            }, 5E3);
            this.A = {};
            this.o = b.length + c.length + d.length + e.length + 3;
            this.l =
                0;
            B(this.events, function(n) {
                return wg(l, n)
            });
            this.H = [];
            a = rg(this.g);
            var m = function(n) {
                var v = n[0];
                n = n[1];
                var r = v.length + n.length + 2;
                8E3 < l.o + l.l + r && ug(l);
                l.H.push([v, n]);
                l.l += r;
                6E3 <= l.o + l.l && ug(l);
                return 0
            };
            B(a, function(n) {
                return m(n)
            });
            a.length = 0;
            a.push = m;
            xg(this);
            yg(this)
        };
    p(zg, Jf);
    var yg = function(a) {
            "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
                return ug(a)
            }, 0) : Ie(a.g, "load", a.O);
            var b = qg(a.g.document);
            "undefined" !== typeof b && Ie(a.g, b, a.Aa);
            Ie(a.g, "unload", a.Z);
            Ie(a.g, "pagehide", a.P)
        },
        tg = function(a, b, c) {
            c = String(c);
            a.o = null != a.w[b] ? a.o + (c.length - a.w[b].length) : a.o + (b.length + c.length + 2);
            a.w[b] = c
        },
        Ag = function(a) {
            null != a.w.uet && (a.o -= 3 + a.w.uet.length + 2, delete a.w.uet)
        },
        Bg = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            var f = null == a.A[b] ? b.length + c.length + 2 : d ? c.length +
                e.length : c.length - a.A[b].length;
            8E3 < a.o + a.l + f && (ug(a), f = b.length + c.length + 2);
            a.A[b] = d && null != a.A[b] ? a.A[b] + ("" + e + c) : c;
            a.l += f;
            6E3 <= a.o + a.l && ug(a)
        },
        ug = function(a) {
            if (a.h && a.V) {
                try {
                    if (a.l) {
                        var b = a.A;
                        a.K++;
                        var c = Cg(a, b);
                        b = !1;
                        try {
                            b = a.Y && a.g.navigator && a.g.navigator.sendBeacon(c, null)
                        } catch (d) {
                            a.Y = !1
                        }
                        b || Le(a.g, c);
                        xg(a);
                        a.K === a.M && a.C()
                    }
                } catch (d) {
                    (new Of).Ha(358, d)
                }
                a.A = {};
                a.l = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.D);
                a.D = 0
            }
        },
        Cg = function(a, b) {
            var c = a.aa + "//" + a.N + a.$ + a.ia,
                d = {};
            c = sg(c, a.w, d);
            c = sg(c, b, d);
            a.g.google_timing_params &&
                (c = sg(c, a.g.google_timing_params, d), a.g.google_timing_params = void 0);
            B(a.H, function(e) {
                var f = ba(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = sg(c, (g[e] = f, g))
            });
            a.H.length = 0;
            return c
        },
        xg = function(a) {
            tg(a, "puid", (a.K + 1).toString(36) + "~" + y().toString(36))
        },
        wg = function(a, b) {
            var c = "met." + b.type,
                d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
                e = Math.round(b.duration);
            b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 < e ? "_" + e.toString(36) : "");
            Bg(a, c, b, !0, "~")
        };
    zg.prototype.G = function(a) {
        this.h && this.K < this.M && (Jf.prototype.G.call(this, a), wg(this, a))
    };
    zg.prototype.F = function() {
        this.V = !0;
        ug(this)
    };
    zg.prototype.C = function() {
        Jf.prototype.C.call(this);
        this.g.clearTimeout(this.D);
        this.l = this.D = 0;
        this.A = {};
        Gb(this.I);
        Gb(this.w);
        Je(this.g, "load", this.O);
        Je(this.g, "unload", this.Z);
        Je(this.g, "pagehide", this.P)
    };
    var vg = function(a, b) {
        tg(a, "uet", b);
        B(a.ra, function(c) {
            try {
                c()
            } catch (d) {}
        });
        Ke(a.g);
        ug(a);
        Ag(a)
    };
    var I = function() {
        this.g = new zg(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
        var a = Vf();
        null != a && tg(this.g, "c", a)
    };
    I.prototype.F = function() {
        this.g.F()
    };
    var Dg = function(a, b, c) {
            if (null != c) {
                a = a.g;
                var d = b + "=" + c;
                a.I[d] || (Bg(a, b, c, !1), 1E3 > d.length && (a.I[d] = !0))
            }
        },
        Eg = function(a, b) {
            a = a.g;
            var c = Bf() - 0;
            a.h && a.G(new Ff(b, 4, c, 0, void 0))
        };
    Ga(I);
    var Fg = function(a, b) {
        this.h = a;
        this.l = b
    };
    p(Fg, og);
    Fg.prototype.g = function(a, b) {
        og.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = ba(this.h), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",");
        a = a.map(String).join(",");
        Dg(I.B(), "sei", b);
        Dg(I.B(), "nsei", a);
        Dg(I.B(), "bi", this.l)
    };
    var Gg = function() {
        cg.apply(this, arguments)
    };
    p(Gg, cg);
    var dg = function(a, b) {
        var c = I.B();
        Dg(c, "eee", a);
        Dg(c, "bi", b)
    };
    Ga(Gg);
    var Ig = function() {
        return Hg.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var Jg = new ig;
    H({
        id: 418572103,
        L: 0
    });
    H({
        id: 420706097,
        L: 10
    });
    H({
        id: 420706098,
        L: 10
    });
    H({
        id: 21061786,
        L: 10
    });
    H({
        id: 21061817,
        L: 10
    });
    H({
        id: 21061824,
        L: 50
    });
    H({
        id: 21061888,
        L: 10
    });
    H({
        id: 21061893,
        L: 10
    });
    H({
        id: 21062100,
        L: 0
    });
    H({
        id: 21063062,
        L: 0
    });
    H({
        id: 420706109,
        L: 10
    });
    H({
        id: 420706110,
        L: 10
    });
    H({
        id: 21062347,
        L: 0
    });
    H({
        id: 21063070,
        L: 0
    });
    H({
        id: 21063072,
        L: 0
    });
    H({
        id: 21063100,
        L: 0
    });
    H({
        id: 420706116,
        L: 0
    });
    H({
        id: 420706105,
        L: 10
    });
    H({
        id: 420706106,
        L: 10
    });
    H({
        id: 75259402,
        L: 10
    });
    H({
        id: 75259403,
        L: 10
    });
    H({
        id: 21064018,
        L: 0
    });
    H({
        id: 21064020,
        L: 0
    });
    H({
        id: 21064022,
        L: 0
    });
    H({
        id: 21064024,
        L: 0
    });
    H({
        id: 21064075,
        L: 0
    });
    H({
        id: 21064201,
        L: 50
    });
    var Kg = H({
        id: 210640812,
        L: 10
    });
    H({
        id: 420706142,
        L: 0
    });
    H({
        id: 21064347,
        L: 0
    });
    H({
        id: 21064362,
        L: 0
    });
    H({
        id: 324123050,
        L: 10
    });
    H({
        id: 370204070,
        L: 0,
        Pb: Jg
    });
    H({
        id: 370204079,
        L: 10,
        Pb: Jg
    });
    H({
        id: 418572E3,
        L: 0
    });
    H({
        id: 420706143,
        L: 50
    });
    H({
        id: 420706144,
        L: 50
    });
    H({
        id: 72811302,
        L: 0
    });
    H({
        id: 72811303,
        L: 0
    });
    H({
        id: 72811304,
        L: 0
    });
    H({
        id: 72811305,
        L: 0
    });
    H({
        id: 72811306,
        L: 0
    });
    H({
        id: 72811307,
        L: 0
    });
    H({
        id: 21064565,
        L: 0
    });
    H({
        id: 668123728,
        L: 20,
        Pb: Jg
    });
    H({
        id: 21064567,
        L: 0
    });
    H({
        id: 21064572,
        L: 10
    });
    H({
        id: 21064573,
        L: 10
    });
    H({
        id: 418572001,
        L: 0
    });
    if ("undefined" === typeof window.v8_flag_map) {
        var fg = Gg.B();
        null === fg.g && gg();
        var Hg = fg.g,
            Lg;
        null === fg.g && gg();
        Lg = fg.h;
        if (Hg) {
            var Mg = new Fg(Ig(), Lg);
            mg(Mg)
        }
    };
    kg.reset();
    mg(new ng);
    q.console && "function" === typeof q.console.log && Pa(q.console.log, q.console);
    var Pg = function(a) {
        for (var b = [], c = a = F(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var Qg = !Tc || 9 <= Number(jd),
        Rg = Tc && !id("9"),
        Sg = function() {
            if (!q.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                q.addEventListener("test", Fa, b), q.removeEventListener("test", Fa, b)
            } catch (c) {}
            return a
        }();
    var J = function() {
        this.K = this.K;
        this.G = this.G
    };
    J.prototype.K = !1;
    J.prototype.wb = function() {
        return this.K
    };
    J.prototype.X = function() {
        this.K || (this.K = !0, this.T())
    };
    var Ug = function(a, b) {
        b = Qa(Tg, b);
        a.K ? b() : (a.G || (a.G = []), a.G.push(b))
    };
    J.prototype.T = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };
    var Tg = function(a) {
        a && "function" == typeof a.X && a.X()
    };
    var Vg = function(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.Ed = !0
    };
    Vg.prototype.l = function() {
        this.Ed = !1
    };
    var Xg = function(a, b) {
        Vg.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            (b = a.relatedTarget) ? Vc && (Pc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement :
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
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Wg[a.pointerType] || "";
            this.state = a.state;
            this.h = a;
            a.defaultPrevented && this.l()
        }
    };
    A(Xg, Vg);
    var Wg = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    Xg.prototype.l = function() {
        Xg.sa.l.call(this);
        var a = this.h;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Rg) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Yg = "closure_listenable_" + (1E6 * Math.random() | 0),
        Zg = function(a) {
            return !(!a || !a[Yg])
        },
        $g = 0;
    var ah = function(a, b, c, d, e) {
            this.listener = a;
            this.g = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Lb = e;
            this.key = ++$g;
            this.gb = this.Hb = !1
        },
        bh = function(a) {
            a.gb = !0;
            a.listener = null;
            a.g = null;
            a.src = null;
            a.Lb = null
        };
    var ch = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    ch.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = dh(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Hb = !1)) : (b = new ah(b, this.src, f, !!d, e), b.Hb = c, a.push(b));
        return b
    };
    var eh = function(a, b) {
            var c = b.type;
            c in a.g && db(a.g[c], b) && (bh(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
        },
        fh = function(a, b, c, d, e) {
            a = a.g[b.toString()];
            b = -1;
            a && (b = dh(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        dh = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.gb && f.listener == b && f.capture == !!c && f.Lb == d) return e
            }
            return -1
        };
    var gh = "closure_lm_" + (1E6 * Math.random() | 0),
        hh = {},
        ih = 0,
        kh = function(a, b, c, d, e) {
            if (d && d.once) return jh(a, b, c, d, e);
            if (Ia(b)) {
                for (var f = 0; f < b.length; f++) kh(a, b[f], c, d, e);
                return null
            }
            c = lh(c);
            return Zg(a) ? a.R(b, c, Ka(d) ? !!d.capture : !!d, e) : mh(a, b, c, !1, d, e)
        },
        mh = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Ka(e) ? !!e.capture : !!e,
                h = nh(a);
            h || (a[gh] = h = new ch(a));
            c = h.add(b, c, d, g, f);
            if (c.g) return c;
            d = oh();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) Sg || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(ph(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            ih++;
            return c
        },
        oh = function() {
            var a = qh,
                b = Qg ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        jh = function(a, b, c, d, e) {
            if (Ia(b)) {
                for (var f = 0; f < b.length; f++) jh(a, b[f], c, d, e);
                return null
            }
            c = lh(c);
            return Zg(a) ? a.o.add(String(b), c, !0, Ka(d) ? !!d.capture : !!d, e) :
                mh(a, b, c, !0, d, e)
        },
        rh = function(a, b, c, d, e) {
            if (Ia(b))
                for (var f = 0; f < b.length; f++) rh(a, b[f], c, d, e);
            else d = Ka(d) ? !!d.capture : !!d, c = lh(c), Zg(a) ? a.Da(b, c, d, e) : a && (a = nh(a)) && (b = fh(a, b, c, d, e)) && sh(b)
        },
        sh = function(a) {
            if ("number" !== typeof a && a && !a.gb) {
                var b = a.src;
                if (Zg(b)) eh(b.o, a);
                else {
                    var c = a.type,
                        d = a.g;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ph(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    ih--;
                    (c = nh(b)) ? (eh(c, a), 0 == c.h && (c.src = null, b[gh] = null)) :
                    bh(a)
                }
            }
        },
        ph = function(a) {
            return a in hh ? hh[a] : hh[a] = "on" + a
        },
        uh = function(a, b, c, d) {
            var e = !0;
            if (a = nh(a))
                if (b = a.g[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.gb && (f = th(f, d), e = e && !1 !== f)
                    }
            return e
        },
        th = function(a, b) {
            var c = a.listener,
                d = a.Lb || a.src;
            a.Hb && sh(a);
            return c.call(d, b)
        },
        qh = function(a, b) {
            if (a.gb) return !0;
            if (!Qg) {
                var c = b || Ea("window.event");
                b = new Xg(c, this);
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
                    for (e = b.g; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; 0 <= e; e--) {
                        b.g = c[e];
                        var f = uh(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; e < c.length; e++) b.g = c[e],
                    f = uh(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return th(a, new Xg(b, this))
        },
        nh = function(a) {
            a = a[gh];
            return a instanceof ch ? a : null
        },
        vh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        lh = function(a) {
            if (x(a)) return a;
            a[vh] || (a[vh] = function(b) {
                return a.handleEvent(b)
            });
            return a[vh]
        };
    var K = function() {
        J.call(this);
        this.o = new ch(this);
        this.Qa = this;
        this.ia = null
    };
    A(K, J);
    K.prototype[Yg] = !0;
    k = K.prototype;
    k.addEventListener = function(a, b, c, d) {
        kh(this, a, b, c, d)
    };
    k.removeEventListener = function(a, b, c, d) {
        rh(this, a, b, c, d)
    };
    k.dispatchEvent = function(a) {
        var b, c = this.ia;
        if (c)
            for (b = []; c; c = c.ia) b.push(c);
        c = this.Qa;
        var d = a.type || a;
        if ("string" === typeof a) a = new Vg(a, c);
        else if (a instanceof Vg) a.target = a.target || c;
        else {
            var e = a;
            a = new Vg(d, c);
            Jb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var g = a.g = b[f];
                e = wh(g, d, !0, a) && e
            }
        g = a.g = c;
        e = wh(g, d, !0, a) && e;
        e = wh(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.g = b[f], e = wh(g, d, !1, a) && e;
        return e
    };
    k.T = function() {
        K.sa.T.call(this);
        if (this.o) {
            var a = this.o,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, bh(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.ia = null
    };
    k.R = function(a, b, c, d) {
        return this.o.add(String(a), b, !1, c, d)
    };
    k.Da = function(a, b, c, d) {
        var e = this.o;
        a = String(a).toString();
        if (a in e.g) {
            var f = e.g[a];
            b = dh(f, b, c, d); - 1 < b && (bh(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--))
        }
    };
    var wh = function(a, b, c, d) {
        b = a.o.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.gb && g.capture == c) {
                var h = g.listener,
                    l = g.Lb || g.src;
                g.Hb && eh(a.o, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && 0 != d.Ed
    };
    var xh = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    xh.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var yh = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    var zh = function(a) {
            q.setTimeout(function() {
                throw a;
            }, 0)
        },
        Ah, Bh = function() {
            var a = q.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
                var e = he(document, "IFRAME");
                e.style.display = "none";
                Bc(e);
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(yc(Ac));
                e.close();
                var g = "callImmediate" + Math.random(),
                    h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = Pa(function(l) {
                    if (("*" == h || l.origin == h) && l.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, h)
                    }
                }
            });
            if ("undefined" !== typeof a && !sc()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.bd;
                        c.bd = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        bd: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in he(document, "SCRIPT") ? function(e) {
                var f = he(document,
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
                q.setTimeout(e, 0)
            }
        };
    var Ch = function() {
            this.h = this.g = null
        },
        Eh = new xh(function() {
            return new Dh
        }, function(a) {
            a.reset()
        });
    Ch.prototype.add = function(a, b) {
        var c = Eh.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    var Gh = function() {
            var a = Fh,
                b = null;
            a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
            return b
        },
        Dh = function() {
            this.next = this.h = this.g = null
        };
    Dh.prototype.set = function(a, b) {
        this.g = a;
        this.h = b;
        this.next = null
    };
    Dh.prototype.reset = function() {
        this.next = this.h = this.g = null
    };
    var Kh = function(a, b) {
            Hh || Ih();
            Jh || (Hh(), Jh = !0);
            Fh.add(a, b)
        },
        Hh, Ih = function() {
            if (q.Promise && q.Promise.resolve) {
                var a = q.Promise.resolve(void 0);
                Hh = function() {
                    a.then(Lh)
                }
            } else Hh = function() {
                var b = Lh;
                !x(q.setImmediate) || q.Window && q.Window.prototype && !C("Edge") && q.Window.prototype.setImmediate == q.setImmediate ? (Ah || (Ah = Bh()), Ah(b)) : q.setImmediate(b)
            }
        },
        Jh = !1,
        Fh = new Ch,
        Lh = function() {
            for (var a; a = Gh();) {
                try {
                    a.g.call(a.h)
                } catch (b) {
                    zh(b)
                }
                yh(Eh, a)
            }
            Jh = !1
        };
    var Nh = function(a, b) {
            this.g = 0;
            this.C = void 0;
            this.o = this.h = this.l = null;
            this.w = this.A = !1;
            if (a != Fa) try {
                var c = this;
                a.call(b, function(d) {
                    Mh(c, 2, d)
                }, function(d) {
                    Mh(c, 3, d)
                })
            } catch (d) {
                Mh(this, 3, d)
            }
        },
        Oh = function() {
            this.next = this.context = this.h = this.l = this.g = null;
            this.o = !1
        };
    Oh.prototype.reset = function() {
        this.context = this.h = this.l = this.g = null;
        this.o = !1
    };
    var Ph = new xh(function() {
            return new Oh
        }, function(a) {
            a.reset()
        }),
        Qh = function(a, b, c) {
            var d = Ph.get();
            d.l = a;
            d.h = b;
            d.context = c;
            return d
        },
        Rh = function(a) {
            return new Nh(function(b, c) {
                c(a)
            })
        };
    Nh.prototype.then = function(a, b, c) {
        return Sh(this, x(a) ? a : null, x(b) ? b : null, c)
    };
    Nh.prototype.$goog_Thenable = !0;
    Nh.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new Th(a);
            Kh(function() {
                Uh(this, b)
            }, this)
        }
    };
    var Uh = function(a, b) {
            if (0 == a.g)
                if (a.l) {
                    var c = a.l;
                    if (c.h) {
                        for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.g && 1 == d ? Uh(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : Vh(c), Wh(c, e, 3, b)))
                    }
                    a.l = null
                } else Mh(a, 3, b)
        },
        Yh = function(a, b) {
            a.h || 2 != a.g && 3 != a.g || Xh(a);
            a.o ? a.o.next = b : a.h = b;
            a.o = b
        },
        Sh = function(a, b, c, d) {
            var e = Qh(null, null, null);
            e.g = new Nh(function(f, g) {
                e.l = b ? function(h) {
                    try {
                        var l = b.call(d, h);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.h = c ? function(h) {
                    try {
                        var l = c.call(d,
                            h);
                        void 0 === l && h instanceof Th ? g(h) : f(l)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.g.l = a;
            Yh(a, e);
            return e.g
        };
    Nh.prototype.K = function(a) {
        this.g = 0;
        Mh(this, 2, a)
    };
    Nh.prototype.D = function(a) {
        this.g = 0;
        Mh(this, 3, a)
    };
    var Mh = function(a, b, c) {
            if (0 == a.g) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.K,
                        f = a.D;
                    if (d instanceof Nh) {
                        Yh(d, Qh(e || Fa, f || null, a));
                        var g = !0
                    } else {
                        if (d) try {
                            var h = !!d.$goog_Thenable
                        } catch (m) {
                            h = !1
                        } else h = !1;
                        if (h) d.then(e, f, a), g = !0;
                        else {
                            if (Ka(d)) try {
                                var l = d.then;
                                if (x(l)) {
                                    Zh(d, l, e, f, a);
                                    g = !0;
                                    break a
                                }
                            } catch (m) {
                                f.call(a, m);
                                g = !0;
                                break a
                            }
                            g = !1
                        }
                    }
                }
                g || (a.C = c, a.g = b, a.l = null, Xh(a), 3 != b || c instanceof Th || $h(a, c))
            }
        },
        Zh = function(a, b, c, d, e) {
            var f = !1,
                g = function(l) {
                    f || (f = !0, c.call(e,
                        l))
                },
                h = function(l) {
                    f || (f = !0, d.call(e, l))
                };
            try {
                b.call(a, g, h)
            } catch (l) {
                h(l)
            }
        },
        Xh = function(a) {
            a.A || (a.A = !0, Kh(a.G, a))
        },
        Vh = function(a) {
            var b = null;
            a.h && (b = a.h, a.h = b.next, b.next = null);
            a.h || (a.o = null);
            return b
        };
    Nh.prototype.G = function() {
        for (var a; a = Vh(this);) Wh(this, a, this.g, this.C);
        this.A = !1
    };
    var Wh = function(a, b, c, d) {
            if (3 == c && b.h && !b.o)
                for (; a && a.w; a = a.l) a.w = !1;
            if (b.g) b.g.l = null, ai(b, c, d);
            else try {
                b.o ? b.l.call(b.context) : ai(b, c, d)
            } catch (e) {
                bi.call(null, e)
            }
            yh(Ph, b)
        },
        ai = function(a, b, c) {
            2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c)
        },
        $h = function(a, b) {
            a.w = !0;
            Kh(function() {
                a.w && bi.call(null, b)
            })
        },
        bi = zh,
        Th = function(a) {
            Ra.call(this, a)
        };
    A(Th, Ra);
    Th.prototype.name = "cancel";
    var ci = function(a, b) {
        K.call(this);
        this.h = a || 1;
        this.g = b || q;
        this.l = Pa(this.ig, this);
        this.w = y()
    };
    A(ci, K);
    k = ci.prototype;
    k.ub = !1;
    k.ya = null;
    k.setInterval = function(a) {
        this.h = a;
        this.ya && this.ub ? (this.stop(), this.start()) : this.ya && this.stop()
    };
    k.ig = function() {
        if (this.ub) {
            var a = y() - this.w;
            0 < a && a < .8 * this.h ? this.ya = this.g.setTimeout(this.l, this.h - a) : (this.ya && (this.g.clearTimeout(this.ya), this.ya = null), this.dispatchEvent("tick"), this.ub && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.ub = !0;
        this.ya || (this.ya = this.g.setTimeout(this.l, this.h), this.w = y())
    };
    k.stop = function() {
        this.ub = !1;
        this.ya && (this.g.clearTimeout(this.ya), this.ya = null)
    };
    k.T = function() {
        ci.sa.T.call(this);
        this.stop();
        delete this.g
    };
    var di = function(a, b, c) {
        if (x(a)) c && (a = Pa(a, c));
        else if (a && "function" == typeof a.handleEvent) a = Pa(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0)
    };
    var ei = function() {
            return Math.round(y() / 1E3)
        },
        fi = function(a) {
            var b = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
            return null != b ? b : null != a ? a : ei()
        };
    var gi = function() {
        this.h = -1
    };
    var hi = function() {
        this.g = {};
        return this
    };
    hi.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var ii = function(a, b) {
        a.g.eb = Hb(a.g, "eb", 0) | b
    };
    hi.prototype.get = function(a) {
        return Hb(this.g, a, null)
    };
    var ji = null,
        ki = function() {
            this.g = {};
            this.h = 0
        },
        li = function(a, b) {
            this.A = a;
            this.o = !0;
            this.h = b
        };
    li.prototype.getName = function() {
        return this.A
    };
    li.prototype.g = function() {
        return this.h
    };
    li.prototype.l = function() {
        return String(this.h)
    };
    var mi = function(a, b) {
        li.call(this, String(a), b);
        this.w = a;
        this.h = !!b
    };
    A(mi, li);
    mi.prototype.l = function() {
        return this.h ? "1" : "0"
    };
    var ni = function(a, b) {
        li.call(this, a, b)
    };
    A(ni, li);
    ni.prototype.l = function() {
        return this.h ? Math.round(this.h.top) + "." + Math.round(this.h.left) + "." + (Math.round(this.h.top) + Math.round(this.h.height)) + "." + (Math.round(this.h.left) + Math.round(this.h.width)) : ""
    };
    var oi = function(a) {
            if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
                a = a.split(".");
                var b = Number(a[0]),
                    c = Number(a[1]);
                return new ni("", new Qe(c, b, Number(a[3]) - c, Number(a[2]) - b))
            }
            return new ni("", new Qe(0, 0, 0, 0))
        },
        pi = function() {
            ji || (ji = new ki);
            return ji
        },
        qi = function(a, b) {
            a.g[b.getName()] = b
        };
    var ri = function(a) {
            var b = new Qe(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Qe(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var l = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (l <= f) {
                            e.left = g;
                            e.top = l;
                            e.width = h - g;
                            e.height = f - l;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        si = function(a, b) {
            var c = a.getBoundingClientRect();
            a = Ye(a,
                b);
            return new Qe(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        ti = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new Qe(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;qi(a, new li("vp", d));d && 0 < d ? (e = Re(b), f = Re(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;qi(a, new mi(512,
                    e));d && 0 < d ? (e = Re(b), f = Re(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;qi(a, new mi(1024, e));d && 0 < d ? (e = Re(b), f = Re(c), e = e.left >= f.left && e.left < f.right) : e = !1;qi(a, new mi(2048, e));d && 0 < d ? (b = Re(b), c = Re(c), c = b.right <= c.right && b.right > c.left) : c = !1;qi(a, new mi(4096, c))
            }
        };
    var ui = function(a, b) {
        var c = 0;
        Ab(F(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = pi();
            a.g = {};
            var e = new mi(32, !0);
            e.o = !1;
            qi(a, e);
            e = F().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            qi(a, new mi(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = F().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (n) {
                    g = !1
                }
                if (g) {
                    var h = Pg(d);
                    var l = h && 0 != h.length ? "1" : "0"
                } else l = "2"
            } catch (n) {
                l = "2"
            }
            qi(a, new mi(256,
                "2" == l));
            qi(a, new mi(128, "1" == l));
            h = g = F().top;
            "2" == l && (h = F());
            f = si(d, h);
            qi(a, new ni("er", f));
            try {
                var m = h.document && !h.document.body ? null : fe(h || window)
            } catch (n) {
                m = null
            }
            m ? (h = ge(be(h.document).g), qi(a, new mi(16384, !!h)), m = h ? new Qe(h.x, h.y, m.width, m.height) : null) : m = null;
            qi(a, new ni("vi", m));
            if (m && "1" == l) {
                l = Pg(d);
                d = [];
                for (h = 0; h < l.length; h++)(e = si(l[h], g)) && d.push(e);
                d.push(m);
                m = ri(d)
            }
            ti(a, f, m);
            a.h && (l = ei() - a.h, qi(a, new li("ts", l)));
            a.h = ei()
        } else a = pi(), a.g = {}, a.h = ei(), qi(a, new mi(32, !1));
        this.l = a;
        this.g =
            new hi;
        this.g.set("ve", 4);
        c && ii(this.g, 1);
        Ab(F(), "ima", "video", "client", "crossdomainTag") && ii(this.g, 4);
        Ab(F(), "ima", "video", "client", "sdkTag") && ii(this.g, 8);
        Ab(F(), "ima", "video", "client", "jsTag") && ii(this.g, 2);
        b && Hb(b, "fullscreen", !1) && ii(this.g, 16);
        this.h = b = null;
        if (c && (c = Ab(F(), "ima", "video", "client"), c.getEData)) {
            this.h = c.getEData();
            if (c = Ab(F(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi,
                    b && a && (b = oi(b).g(), a = oi(a).g(), l = null, Hb(c.g, "er", null) && (l = Hb(c.g, "er", null).g(), l.top += b.top, l.left += b.left, qi(c, new ni("er", l))), Hb(c.g, "vi", null) && (m = Hb(c.g, "vi", null).g(), m.top += b.top, m.left += b.left, d = [], d.push(m), d.push(b), d.push(a), b = ri(d), ti(c, l, b), qi(c, new ni("vi", a))));
            a: {
                if (this.h) {
                    if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a
                    }
                    if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        this.g.set("td", ei() - fi(b))
    };
    var vi = new ci(200),
        wi = function(a, b) {
            try {
                var c = new ui(a, b);
                a = [];
                var d = Number(c.g.get("eb")),
                    e = c.g.g;
                "eb" in e && delete e.eb;
                var f, g = c.g;
                e = [];
                for (var h in g.g) e.push(h + g.g[h]);
                (f = e.join("_")) && a.push(f);
                if (c.h) {
                    var l = c.h.serialize();
                    l && a.push(l)
                }
                var m, n = c.l;
                f = d;
                g = [];
                f || (f = 0);
                for (var v in n.g) {
                    var r = n.g[v];
                    if (r instanceof mi) r.g() && (f |= r.w);
                    else {
                        var u, z = n.g[v];
                        (u = z.o ? z.l() : "") && g.push(v + u)
                    }
                }
                g.push("eb" + String(f));
                (m = g.join("_")) && a.push(m);
                c.g.set("eb", d);
                return a.join("_")
            } catch (T) {
                return "tle;" + Fc(T.name,
                    12) + ";" + Fc(T.message, 40)
            }
        },
        xi = function(a, b) {
            kh(vi, "tick", function() {
                var c = wi(b);
                a(c)
            });
            vi.start();
            vi.dispatchEvent("tick")
        };
    var yi;
    yi = ["av.key", "js", "unreleased"].slice(-1)[0];
    var zi = function(a, b, c, d) {
        if (d) c = a + ("&" + b + "=" + c);
        else {
            var e = "&" + b + "=",
                f = a.indexOf(e);
            0 > f ? c = a + e + c : (f += e.length, e = a.indexOf("&", f), c = 0 <= e ? a.substring(0, f) + c + a.substring(e) : a.substring(0, f) + c)
        }
        return 2E3 < c.length ? t(void 0) ? zi(a, b, void 0, d) : a : c
    };
    var Ai = [0, 2, 1],
        Bi = null;
    document.addEventListener && document.addEventListener("mousedown", function(a) {
        Bi = a
    }, !0);
    window.mb = function(a) {
        if (a) {
            var b;
            if (b = window.event || Bi) {
                var c;
                (c = b.which ? 1 << Ai[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                c && b.altKey && (c |= 16);
                c && b.ctrlKey && (c |= 32);
                b = c
            } else b = null;
            b && (window.css ? window.css(a.id, "mb", b, void 0, void 0) : a && (a.href = zi(a.href, "mb", b, void 0)))
        }
    };
    var Ci = function(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                d = (void 0 === c ? 0 : c) ? (new E(e.innerWidth, e.innerHeight)).round() : fe(e || window).round()
            } catch (l) {
                d = new E(-12245933, -12245933)
            }
            a = d;
            var f = ge(be(b.document).g);
            if (-12245933 == a.width) {
                var g = a.width;
                var h = new G(g, g, g, g)
            } else h = new G(f.y, f.x + a.width, f.y + a.height, f.x);
            return h
        } catch (l) {
            return new G(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Di = function(a) {
        var b = {};
        B(a, function(c) {
            var d = c.event,
                e = b[d];
            b.hasOwnProperty(d) ? null === e || c.g(e) || (b[d] = null) : b[d] = c
        });
        eb(a, function(c) {
            return null === b[c.event]
        })
    };
    var Ei = {
        NONE: 0,
        yg: 1
    };
    var Fi = function() {
        this.W = 0;
        this.g = !1;
        this.h = -1;
        this.Wa = !1;
        this.ha = 0
    };
    Fi.prototype.isVisible = function() {
        return this.Wa ? .3 <= this.W : .5 <= this.W
    };
    var M = {
            wg: 0,
            Cg: 1
        },
        Gi = {
            370204018: 0,
            370204019: 1,
            370204052: 2,
            370204026: 0,
            370204027: 1,
            370204053: 2
        },
        Hi = {
            668123728: 0,
            668123729: 1
        },
        Ii = {
            668123028: 0,
            668123029: 1
        },
        Ji = {
            NONE: 0,
            Tg: 1,
            Gg: 2
        },
        Ki = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        },
        Li = {
            319331040: 0,
            319331041: 1
        },
        Mi = {
            42530094: 0,
            42530095: 1
        },
        Ni = {
            42530173: 0,
            42530174: 1
        },
        Oi = {
            370204070: 1
        },
        Pi = {
            370204078: 0,
            370204079: 1,
            370204080: 0,
            370204081: 1
        };
    var Qi = function() {
            this.h = null;
            this.o = !1;
            this.w = null
        },
        N = function(a) {
            a.o = !0;
            return a
        },
        Ri = function(a, b) {
            a.w = void 0 === b ? null : b
        },
        Si = function(a, b) {
            a.w && B(b, function(c) {
                c = a.w[c];
                void 0 !== c && a.l(c)
            })
        };
    Qi.prototype.g = function() {
        return this.h
    };
    var Ti = function(a) {
        Qi.call(this);
        this.A = a
    };
    p(Ti, Qi);
    Ti.prototype.l = function(a) {
        null === this.h && Cb(this.A, a) && (this.h = a)
    };
    var Ui = function() {
        Qi.call(this)
    };
    p(Ui, Qi);
    Ui.prototype.l = function(a) {
        null === this.h && ya(a) && (this.h = a)
    };
    var Vi = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    Vi.prototype.enable = function() {
        this.l = !0
    };
    Vi.prototype.isEnabled = function() {
        return this.l
    };
    Vi.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    var O = function(a, b, c) {
            a.g[b] || (a.g[b] = new Ti(c));
            return a.g[b]
        },
        Wi = function(a, b, c) {
            (a = a.g[b]) && a.l(c)
        },
        Xi = function(a, b) {
            if (Bb(a.h, b)) return a.h[b];
            if (a = a.g[b]) return a.g()
        },
        Yi = function(a) {
            var b = {},
                c = tb(a.g, function(d) {
                    return d.o
                });
            sb(c, function(d, e) {
                d = void 0 !== a.h[e] ? String(a.h[e]) : d.o && null !== d.h ? String(d.h) : "";
                0 < d.length && (b[e] = d)
            }, a);
            return b
        },
        Zi = function(a) {
            a = Yi(a);
            var b = [];
            sb(a, function(c, d) {
                d in Object.prototype || "undefined" != typeof c && b.push([d, ":", c].join(""))
            });
            return b
        },
        $i = function(a) {
            var b =
                P.B().J;
            b.l && B(yb(b.g), function(c) {
                return Si(c, a)
            })
        };
    var aj = !Tc && !vc();
    var bj = function() {
        this.g = this.Na = null
    };
    var cj = function() {};
    cj.prototype.now = function() {
        return 0
    };
    cj.prototype.h = function() {
        return 0
    };
    cj.prototype.l = function() {
        return 0
    };
    cj.prototype.g = function() {
        return 0
    };
    var ej = function() {
        if (!dj()) throw Error();
    };
    p(ej, cj);
    var dj = function() {
        return !(!D || !D.performance)
    };
    ej.prototype.now = function() {
        return dj() && D.performance.now ? D.performance.now() : cj.prototype.now.call(this)
    };
    ej.prototype.h = function() {
        return dj() && D.performance.memory ? D.performance.memory.totalJSHeapSize || 0 : cj.prototype.h.call(this)
    };
    ej.prototype.l = function() {
        return dj() && D.performance.memory ? D.performance.memory.usedJSHeapSize || 0 : cj.prototype.l.call(this)
    };
    ej.prototype.g = function() {
        return dj() && D.performance.memory ? D.performance.memory.jsHeapSizeLimit || 0 : cj.prototype.g.call(this)
    };
    var fj = function() {};
    fj.prototype.isVisible = function() {
        return 1 === pg(Nd)
    };
    var gj = function(a, b) {
            this.g = a;
            this.depth = b
        },
        ij = function(a) {
            a = a || jf();
            var b = Math.max(a.length - 1, 0),
                c = mf(a);
            a = c.g;
            var d = c.h,
                e = c.l,
                f = [];
            c = function(h, l) {
                return null == h ? l : h
            };
            e && f.push(new gj([e.url, e.vc ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new gj([d.url, 2], 0));
            a.url && a != e && f.push(new gj([a.url, 0], c(a.depth, b)));
            var g = Xa(f, function(h, l) {
                return f.slice(0, f.length - l)
            });
            !a.url || (e || d) && a != e || (d = Be(a.url)) && g.push([new gj([d, 1], c(a.depth, b))]);
            g.push([]);
            return Xa(g, function(h) {
                return hj(b, h)
            })
        };

    function hj(a, b) {
        var c = Ya(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = lb(c + 2);
        d[0] = a;
        B(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    var jj = function() {
        var a = ij();
        return Xa(a, function(b) {
            return pf(b)
        })
    };
    var kj = function() {
            this.h = new fj;
            this.g = dj() ? new ej : new cj
        },
        mj = function() {
            lj();
            var a = D.document;
            return !!(a && a.body && a.body.getBoundingClientRect && x(D.setInterval) && x(D.clearInterval) && x(D.setTimeout) && x(D.clearTimeout))
        };
    kj.prototype.setInterval = function(a, b) {
        return D.setInterval(a, b)
    };
    kj.prototype.clearInterval = function(a) {
        D.clearInterval(a)
    };
    kj.prototype.setTimeout = function(a, b) {
        return D.setTimeout(a, b)
    };
    kj.prototype.clearTimeout = function(a) {
        D.clearTimeout(a)
    };
    var nj = function(a) {
            lj();
            var b = ef() || D;
            Le(b, a)
        },
        oj = function() {
            lj();
            return jj()
        };
    Ga(kj);
    var pj = function() {};
    pj.prototype.getContext = function() {
        if (!this.g) {
            if (!D) throw Error("Context has not been set and window is undefined.");
            this.g = kj.B()
        }
        return this.g
    };
    Ga(pj);
    var lj = function() {
        return pj.B().getContext()
    };
    var qj = function(a) {
        Ed(this, a, null)
    };
    A(qj, Ad);
    var rj = function(a) {
            this.o = a;
            this.g = -1;
            this.h = this.l = 0
        },
        sj = function(a, b) {
            return function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                if (-1 < a.g) return b.apply(null, ca(d));
                try {
                    return a.g = a.o.g.now(), b.apply(null, ca(d))
                } finally {
                    a.l += a.o.g.now() - a.g, a.g = -1, a.h += 1
                }
            }
        };
    var tj = function(a, b) {
        this.h = a;
        this.l = b;
        this.g = new rj(a)
    };
    var P = function() {
        this.h = void 0;
        this.l = this.w = 0;
        this.U = "ns";
        this.o = -1;
        this.J = new Vi;
        Ri(N(O(this.J, "mv", Ji)), Ki);
        O(this.J, "omid", M);
        N(O(this.J, "epoh", M));
        N(O(this.J, "epph", M));
        Ri(N(O(this.J, "umt", M)), Hi);
        Ri(N(O(this.J, "gmpd", M)), Ii);
        Ri(N(O(this.J, "sel", M)), Gi);
        Ri(N(O(this.J, "buvpe", M)), Li);
        Ri(N(O(this.J, "imams", M)), Mi);
        Ri(O(this.J, "imar", M), Ni);
        this.J.h.imar = 1;
        Ri(N(O(this.J, "gms", M)), Oi);
        N(O(this.J, "phel", M));
        N(O(this.J, "phell", M));
        N(O(this.J, "oseid", Ne));
        N(O(this.J, "xdi", M));
        N(O(this.J, "amp", M));
        N(O(this.J,
            "prf", M));
        O(this.J, "uup", M);
        this.J.h.uup = 1;
        N(O(this.J, "gtx", M));
        N(O(this.J, "mvp_lv", M));
        Ri(N(O(this.J, "lvio", M)), Pi);
        N(O(this.J, "xosd", M));
        this.g = new tj(lj(), this.J)
    };
    P.prototype.Ic = function(a) {
        if (ya(a) && 0 != a.length) {
            var b = this.J;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("="),
                        e = d[0];
                    d = 1 < d.length ? parseInt(d[1], 10) : 1;
                    isNaN(d) || (e = b.g[e]) && e.l(d)
                }
            }
        }
    };
    Ga(P);
    var uj = function() {
            var a = "https:";
            D && D.location && "http:" === D.location.protocol && (a = "http:");
            this.h = a;
            this.g = .01;
            this.l = Math.random()
        },
        vj = function(a, b, c, d, e) {
            if ((d ? a.l : Math.random()) < (e || a.g)) try {
                if (c instanceof nf) var f = c;
                else f = new nf, ze(c, function(h, l) {
                    var m = f,
                        n = m.w++;
                    rf(m, n, of (l, h))
                });
                var g = uf(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && nj(g)
            } catch (h) {}
        };
    var yj = function() {
        var a = wj;
        this.l = xj;
        this.A = "jserror";
        this.o = !0;
        this.h = null;
        this.C = this.Ha;
        this.g = void 0 === a ? null : a;
        this.w = !1
    };
    k = yj.prototype;
    k.pinger = function() {
        return this.l
    };
    k.ac = function(a) {
        this.h = a
    };
    k.Nc = function(a) {
        this.A = a
    };
    k.Oc = function(a) {
        this.o = a
    };
    k.Pc = function(a) {
        this.w = a
    };
    k.Za = function(a, b, c) {
        var d = this;
        return sj(P.B().g.g, function() {
            try {
                if (d.g && d.g.h) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (l) {
                var g = d.o;
                try {
                    Kf(e);
                    var h = new zj(Aj(l));
                    g = d.C(a, h, void 0, c)
                } catch (m) {
                    d.Ha(217, m)
                }
                if (!g) throw l;
            }
            return f
        })()
    };
    k.Jc = function(a, b, c, d) {
        var e = this;
        return sj(P.B().g.g, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.Za(a, function() {
                return b.apply(c, g)
            }, d)
        })
    };
    k.Ha = function(a, b, c, d, e) {
        e = e || this.A;
        try {
            var f = new nf;
            f.o = !0;
            sf(f, 1, "context", a);
            gf(b) || (b = new zj(Aj(b)));
            b.msg && sf(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (l) {}
            if (d) try {
                d(g)
            } catch (l) {}
            rf(f, 3, [g]);
            var h = mf();
            h.h && sf(f, 4, "top", h.h.url || "");
            sf(f, 5, "url", h.g.url || "");
            vj(this.l, e, f, this.w, c)
        } catch (l) {
            try {
                vj(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Aj(l),
                    url: h && h.g.url
                }, this.w, c)
            } catch (m) {}
        }
        return this.o
    };
    var Aj = function(a) {
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
        },
        zj = function(a) {
            ff.call(this, Error(a), {
                message: a
            })
        };
    p(zj, ff);
    var xj, Bj, wj = new Jf(1, ef()),
        Cj = function() {
            var a = ef();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || wj.C())
        };
    (function() {
        xj = new uj;
        Bj = new yj;
        var a = ef();
        a && a.document && ("complete" == a.document.readyState ? Cj() : wj.h && Ie(a, "load", function() {
            Cj()
        }))
    })();
    var Dj = function(a) {
            Bj.ac(function(b) {
                B(a, function(c) {
                    c(b)
                })
            })
        },
        Ej = function(a, b) {
            return Bj.Za(a, b, void 0)
        },
        Fj = function(a, b, c, d) {
            return Bj.Jc(a, b, c, d)
        },
        Gj = function(a, b, c, d) {
            Bj.Ha(a, b, c, d)
        };
    var Hj = y(),
        Ij = -1,
        Jj = -1,
        Kj, Lj = -1,
        Mj = !1,
        Q = function() {
            return y() - Hj
        },
        Nj = function(a) {
            var b = 0 <= Jj ? Q() - Jj : -1,
                c = Mj ? Q() - Ij : -1,
                d = 0 <= Lj ? Q() - Lj : -1;
            if (947190542 == a) return 100;
            if (79463069 == a) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            Gj(637, Error(), .001);
            var f = b; - 1 != c && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                }
            void 0 === g && (g = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : g
        };
    var Oj = function(a) {
        var b = a !== a.top,
            c = a.top === Rf(a).ma;
        if (b && c && null != a.top.mraid) return {
            Zb: a.top.mraid,
            bc: 3
        };
        a = a.mraid;
        return null != a ? b ? c ? {
            Zb: a,
            bc: 2
        } : {
            Zb: a,
            bc: 1
        } : {
            Zb: a,
            bc: 0
        } : null
    };
    var Pj = function(a) {
        return (a = a.document) && x(a.elementFromPoint)
    };
    if (Nd && Nd.URL) {
        var Qj, De = Nd.URL;
        Qj = !!De && 0 < Ee().length;
        Bj.Oc(!Qj)
    }
    var Rj = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = Fj(d, c);
        Ie(a, b, c, {
            capture: e
        });
        return c
    };
    var Sj = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        Db = {
            gc: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            Td: "metric",
            fc: "pause",
            Uc: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            Ud: "mute",
            Vd: "unmute",
            FULLSCREEN: "fullscreen",
            Qd: "exitfullscreen",
            Tc: "bufferstart",
            Sc: "bufferfinish",
            Rd: "fully_viewable_audible_half_duration_impression",
            Sd: "measurable_impression",
            Ld: "abandon",
            Pd: "engagedview",
            IMPRESSION: "impression",
            Nd: "creativeview",
            LOADED: "loaded",
            jh: "progress",
            ug: "close",
            vg: "collapse",
            $g: "overlay_resize",
            ah: "overlay_unmeasurable_impression",
            bh: "overlay_unviewable_impression",
            fh: "overlay_viewable_immediate_impression",
            eh: "overlay_viewable_end_of_session_impression",
            Od: "custom_metric_viewable"
        },
        Tj = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        Uj = ["start", "firstquartile", "midpoint", "thirdquartile"],
        Vj = ["abandon"],
        Wj = {
            yh: -1,
            gc: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            Td: 5,
            fc: 6,
            Uc: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            Ud: 10,
            Vd: 11,
            FULLSCREEN: 12,
            Qd: 13,
            Rd: 14,
            Sd: 15,
            Ld: 16,
            Pd: 17,
            IMPRESSION: 18,
            Nd: 19,
            LOADED: 20,
            Od: 21,
            Tc: 22,
            Sc: 23
        };

    function Xj(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && Pc(a, "parentElement") ? Xj(me(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var Yj = function(a, b, c, d) {
        if (!a) return d;
        d = Xj(a, b, c, d);
        if (!d.done) try {
            var e = ae(a),
                f = e && F(e);
            return Yj(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };

    function Zj(a) {
        var b = !Tc || id(8);
        return Yj(a, function(c, d) {
            c = Pc(d, "style") && d.style && Ve(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var ak = function(a) {
            return Yj(a, function(b, c) {
                return !(!Pc(c, "style") || !c.style || "none" !== Ve(c, "display"))
            }, function(b) {
                return b
            }, !1) ? !0 : Zj(a)
        },
        bk = function(a) {
            return new G(a.top, a.right, a.bottom, a.left)
        },
        ck = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new G(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        dk = function(a) {
            return null != a && 0 <= a && 1 >= a
        };

    function ek() {
        var a = pc;
        return a ? Za("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;OMI/".split(";"), function(b) {
            return gc(a, b)
        }) ? !0 : gc(a, "Presto") && gc(a, "Linux") && !gc(a, "X11") && !gc(a, "Android") && !gc(a, "Mobi") : !1
    }

    function fk() {
        var a = pc;
        return gc(a, "AppleTV") || gc(a, "Apple TV") || gc(a, "CFNetwork") || gc(a, "tvOS")
    }

    function gk() {
        var a = pc;
        return gc(a, "sdk_google_atv_x86") || gc(a, "Android TV")
    }

    function hk() {
        return gc(pc, "CrKey") || gc(pc, "PlayStation") || gc(pc, "Roku") || ek() || gc(pc, "Xbox") || fk() || gk()
    };
    var R = function() {
            this.K = !1;
            this.h = !ye(D.top);
            this.C = se() || te();
            var a = jf();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(ue)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.F = a;
            this.g = new G(0, 0, 0, 0);
            this.w = new E(0, 0);
            this.o = new E(0, 0);
            this.G = new G(0, 0, 0, 0);
            this.H = null;
            this.A = 0;
            this.D = !1;
            this.l = !(!D || !Oj(D));
            ik(this)
        },
        jk = function(a, b) {
            b && b.screen && (a.w = new E(b.screen.width, b.screen.height))
        },
        kk = function(a, b) {
            var c = a.g ? new E(a.g.h(), a.g.g()) : new E(0, 0);
            b = void 0 === b ? D : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0,
                e = 0;
            try {
                var f = b.document,
                    g = f.body,
                    h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var l = h.scrollHeight,
                        m = h.scrollWidth,
                        n = h.offsetHeight,
                        v = h.offsetWidth;
                    h.clientHeight != n && (l = g.scrollHeight, m = g.scrollWidth, n = g.offsetHeight, v = g.offsetWidth);
                    l > c.height ? l > n ? (d = l, e = m) : (d = n, e = v) : l < n ? (d = l, e = m) : (d = n, e = v)
                }
                var r = new E(e, d)
            } catch (u) {
                r = new E(-12245933, -12245933)
            }
            a.o = r
        },
        ik = function(a) {
            D && D.document && (a.G = Ci(!1, D, a.C), a.g = Ci(!0, D, a.C), a.H = a.g, kk(a, D), jk(a, D))
        },
        lk = function() {
            var a = R.B();
            if (0 < a.A || a.D) return !0;
            a = lj().h.isVisible();
            var b = 0 === pg(Nd);
            return a || b
        };
    Ga(R);
    var mk = new G(0, 0, 0, 0),
        nk = function(a, b) {
            try {
                try {
                    var c = bk(a.getBoundingClientRect())
                } catch (l) {
                    c = new G(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = Ye(a, b),
                    g = f.x,
                    h = f.y;
                return new G(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (l) {
                return mk.clone()
            }
        },
        ok = function(a, b) {
            return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new G(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new G(0, 0, 0, 0)
        },
        qk = function(a, b) {
            b =
                pk(b);
            return 0 === b ? 0 : pk(a) / b
        },
        pk = function(a) {
            return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
        },
        rk = function(a, b) {
            if (!a || !b) return !1;
            for (var c = 0; null !== a && 100 > c++;) {
                if (a === b) return !0;
                try {
                    if (a = me(a) || a) {
                        var d = ae(a),
                            e = d && F(d),
                            f = e && e.frameElement;
                        f && (a = f)
                    }
                } catch (g) {
                    break
                }
            }
            return !1
        },
        sk = function(a, b, c) {
            if (!a || !b) return !1;
            b = Pe(a.clone(), -b.left, -b.top);
            a = (b.left + b.right) / 2;
            b = (b.top + b.bottom) / 2;
            var d = ef();
            ye(d.top) && d.top && d.top.document && (d = d.top);
            if (!Pj(d)) return !1;
            a = d.document.elementFromPoint(a,
                b);
            if (!a) return !1;
            b = (b = (b = ae(c)) && b.defaultView && b.defaultView.frameElement) && rk(b, a);
            d = a === c;
            a = !d && a && pe(a, function(e) {
                return e === c
            });
            return !(b || d || a)
        },
        tk = function(a, b, c, d) {
            return R.B().h ? !1 : 0 >= a.h() || 0 >= a.g() ? !0 : c && d ? Ej(208, function() {
                return sk(a, b, c)
            }) : !1
        };
    var uk = function(a, b, c) {
        var d = new G(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.h = c
    };
    var vk = function(a, b, c, d, e, f, g) {
        this.G = a;
        this.w = b;
        this.g = c;
        this.o = d;
        this.C = e;
        this.A = f;
        this.h = g
    };
    vk.prototype.l = function() {
        return this.G
    };
    var wk = function(a, b) {
        return b ? Math.max(a.o, a.C) : a.o
    };
    var xk = function(a) {
        this.l = a;
        this.h = 0;
        this.g = null
    };
    xk.prototype.cancel = function() {
        lj().clearTimeout(this.g);
        this.g = null
    };
    var yk = function(a) {
        var b = lj();
        a.g = b.setTimeout(sj(P.B().g.g, Fj(143, function() {
            a.h++;
            a.l.ra()
        })), Nj(P.B().h))
    };
    var zk = function(a, b, c) {
        this.ma = a;
        this.Qa = void 0 === c ? "na" : c;
        this.A = [];
        this.I = !1;
        this.w = new uk(-1, !0, this);
        this.g = this;
        this.C = b;
        this.na = this.Aa = this.D = !1;
        this.O = "uk";
        this.Y = !1;
        this.o = !0
    };
    zk.prototype.$a = function() {
        return this.ua()
    };
    zk.prototype.ua = function() {
        return !1
    };
    zk.prototype.Z = function() {
        this.I = !0
    };
    zk.prototype.tb = function() {
        return this.g.O
    };
    var Bk = function(a, b) {
        a.na || (a.na = !0, a.O = b, a.C = 0, a.g != a || Ak(a))
    };
    zk.prototype.getName = function() {
        return this.g.Qa
    };
    zk.prototype.Ka = function() {
        return this.g.P()
    };
    zk.prototype.P = function() {
        return {}
    };
    zk.prototype.Fa = function() {
        return this.g.C
    };
    var Ck = function(a, b) {
        cb(a.A, b) || (a.A.push(b), b.bb(a.g), b.Ua(a.w), b.Ca() && (a.D = !0))
    };
    zk.prototype.$ = function() {
        var a = R.B();
        a.g = Ci(!0, this.ma, a.C)
    };
    zk.prototype.aa = function() {
        jk(R.B(), this.ma)
    };
    zk.prototype.Ra = function() {
        kk(R.B(), this.ma)
    };
    zk.prototype.V = function() {
        return this.w.g
    };
    var Dk = function(a) {
        a = a.g;
        a.aa();
        a.$();
        var b = R.B();
        b.G = Ci(!1, a.ma, b.C);
        a.Ra();
        a.w.g = a.V()
    };
    zk.prototype.ra = function() {};
    var Ek = function(a, b) {
        a.g != a ? Ek(a.g, b) : a.o !== b && (a.o = b, Ak(a))
    };
    zk.prototype.uc = function() {
        return this.g.o
    };
    var Fk = function(a) {
        a.D = a.A.length ? Za(a.A, function(b) {
            return b.Ca()
        }) : !1
    };
    zk.prototype.l = function() {
        return this.w
    };
    var Gk = function(a) {
            var b = gb(a.A);
            B(b, function(c) {
                c.Ua(a.w)
            })
        },
        Ak = function(a) {
            var b = gb(a.A);
            B(b, function(c) {
                c.bb(a.g)
            });
            a.g != a || Gk(a)
        };
    k = zk.prototype;
    k.bb = function(a) {
        var b = this.g;
        this.g = a.Fa() >= this.C ? a : this;
        b !== this.g ? (this.o = this.g.o, Ak(this)) : this.o !== this.g.o && (this.o = this.g.o, Ak(this))
    };
    k.Ua = function(a) {
        if (a.h === this.g) {
            var b;
            if (!(b = this.Aa)) {
                b = this.w;
                var c = this.D;
                b = !(a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l && Oe(b.g, a.g))
            }
            this.w = a;
            b && Gk(this)
        }
    };
    k.Ca = function() {
        return this.D
    };
    k.X = function() {
        this.Y = !0
    };
    k.wb = function() {
        return this.Y
    };
    var Hk = function(a, b, c, d) {
        this.element = a;
        this.h = new G(0, 0, 0, 0);
        this.w = new G(0, 0, 0, 0);
        this.g = b;
        this.J = c;
        this.H = d;
        this.F = !1;
        this.timestamp = -1;
        this.o = new vk(b.l(), this.h, new G(0, 0, 0, 0), 0, 0, Q(), 0)
    };
    k = Hk.prototype;
    k.zc = function() {
        return !0
    };
    k.Ac = function() {};
    k.Gb = function() {
        this.element && (this.h = nk(this.element, this.g.g.ma))
    };
    k.Zc = function() {
        this.w = this.g.l().g
    };
    k.Ea = function() {
        this.Gb();
        this.o = new vk(this.g.l(), this.h, this.o.g, this.o.o, this.o.C, Q(), this.o.h)
    };
    k.X = function() {
        if (!this.wb()) {
            var a = this.g;
            db(a.A, this);
            a.D && this.Ca() && Fk(a);
            this.F = !0
        }
    };
    k.wb = function() {
        return this.F
    };
    k.Ka = function() {
        return this.g.Ka()
    };
    k.Fa = function() {
        return this.g.Fa()
    };
    k.tb = function() {
        return this.g.tb()
    };
    k.bb = function() {};
    k.Ua = function() {
        this.Ea()
    };
    k.Ca = function() {
        return this.H
    };
    var Ik = function(a) {
        this.w = !1;
        this.g = a
    };
    k = Ik.prototype;
    k.Fa = function() {
        return this.g.Fa()
    };
    k.tb = function() {
        return this.g.tb()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Yb(a, b, c), Ck(this.g, d));
        return d
    };
    k.$a = function() {
        return this.ua()
    };
    k.ua = function() {
        return !1
    };
    k.wd = function() {
        return !0
    };
    k.X = function() {
        this.w = !0
    };
    k.wb = function() {
        return this.w
    };
    k.Ka = function() {
        return {}
    };
    var Jk = function(a, b, c) {
            this.l = void 0 === c ? 0 : c;
            this.h = a;
            this.g = null == b ? "" : b
        },
        Kk = function(a) {
            switch (Math.trunc(a.l)) {
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
        },
        Lk = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var Mk = function() {
        this.l = 0;
        this.g = [];
        this.h = !1
    };
    Mk.prototype.add = function(a, b, c) {
        ++this.l;
        a = new Jk(a, b, c);
        this.g.push(new Jk(a.h, a.g, a.l + this.l / 4096));
        this.h = !0;
        return this
    };
    var Nk = function(a, b) {
            B(b.g, function(c) {
                a.add(c.h, c.g, Kk(c))
            })
        },
        Ok = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = void 0 === d ? !0 : d;
            ze(b, function(e, f) {
                d && void 0 === e || a.add(f, e, c)
            });
            return a
        },
        Qk = function(a) {
            var b = Pk;
            a.h && (kb(a.g, function(c, d) {
                return Lk(d, c) ? 1 : Lk(c, d) ? -1 : 0
            }), a.h = !1);
            return Ya(a.g, function(c, d) {
                d = b(d);
                return "" + c + ("" != c && "" != d ? "&" : "") + d
            }, "")
        };
    var Pk = function(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : za(a) ? a ? b : "" : Ia(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (cb(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var Rk = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new Mk;
        void 0 !== a && Nk(this.g, a);
        b && this.g.add("v", yi, -16)
    };
    Rk.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = Qk(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };
    var Sk = function(a) {
            var b = [],
                c = [];
            sb(a, function(d, e) {
                if (!(e in Object.prototype) && "undefined" != typeof d) switch (Ia(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
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
        },
        Tk = function() {
            if (yi && "unreleased" !== yi) return yi
        },
        Uk = function(a) {
            var b = void 0 === b ? 4E3 : b;
            a = a.toString();
            if (!/&v=[^&]+/.test(a)) {
                var c = Tk();
                a = c ? a + "&v=" + encodeURIComponent(c) : a
            }
            a = a.substring(0, b);
            nj(a)
        };
    var Vk = function() {
        this.g = 0
    };
    Ga(Vk);
    var Wk = function(a, b, c) {
        B(a.h, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.h(),
                    g = new Mk;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.w);
                d = Vk.B();
                g.add("i", d.g++);
                g.add("adk", e);
                Ok(g, f);
                e = new Rk(g);
                Uk(e)
            }
        })
    };
    var Xk = function() {
            this.h = this.l = this.o = this.g = 0
        },
        Yk = function(a, b, c, d) {
            b && (a.g += c, a.h += c, a.o += c, a.l = Math.max(a.l, a.o));
            if (void 0 === d ? !b : d) a.o = 0
        };
    var Zk = [1, .75, .5, .3, 0],
        $k = function(a) {
            this.h = a = void 0 === a ? Zk : a;
            this.g = Xa(this.h, function() {
                return new Xk
            })
        },
        bl = function(a, b) {
            return al(a, function(c) {
                return c.g
            }, void 0 === b ? !0 : b)
        },
        dl = function(a, b) {
            return cl(a, b, function(c) {
                return c.g
            })
        },
        el = function(a, b) {
            return al(a, function(c) {
                return c.l
            }, void 0 === b ? !0 : b)
        },
        fl = function(a, b) {
            return cl(a, b, function(c) {
                return c.l
            })
        },
        gl = function(a, b) {
            return cl(a, b, function(c) {
                return c.h
            })
        },
        hl = function(a) {
            B(a.g, function(b) {
                b.h = 0
            })
        },
        il = function(a, b, c, d, e, f, g) {
            g = void 0 ===
                g ? !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.h.length; f++) {
                var h = a.h[f],
                    l = 0 < c && c >= h;
                h = !(0 < b && b >= h) || d;
                Yk(a.g[f], g && l, e, !g || h)
            }
        },
        al = function(a, b, c) {
            a = Xa(a.g, function(d) {
                return b(d)
            });
            return c ? a : jl(a)
        },
        cl = function(a, b, c) {
            var d = bb(a.h, function(e) {
                return b <= e
            });
            return -1 == d ? 0 : c(a.g[d])
        },
        jl = function(a) {
            return Xa(a, function(b, c, d) {
                return 0 < c ? d[c] - d[c - 1] : d[c]
            })
        };
    var kl = function() {
            this.l = new $k;
            this.V = new Xk;
            this.F = this.C = -1;
            this.$ = 1E3;
            this.aa = new $k([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.N = this.H = -1
        },
        ll = function(a, b) {
            return el(a.l, void 0 === b ? !0 : b)
        };
    kl.prototype.I = function(a, b, c, d) {
        this.C = -1 != this.C ? Math.min(this.C, b.W) : b.W;
        this.F = Math.max(this.F, b.W);
        this.H = -1 != this.H ? Math.min(this.H, b.ha) : b.ha;
        this.N = Math.max(this.N, b.ha);
        il(this.aa, b.ha, c.ha, b.g, a, d);
        il(this.l, b.W, c.W, b.g, a, d);
        c = d || c.Wa != b.Wa ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        Yk(this.V, c, a, b)
    };
    kl.prototype.Xa = function() {
        return this.V.l >= this.$
    };
    var ml = new G(0, 0, 0, 0),
        nl = function(a, b, c) {
            J.call(this);
            this.position = ml.clone();
            this.Tb = this.Kb();
            this.xc = -2;
            this.jg = y();
            this.Hd = -1;
            this.Ya = b;
            this.Ob = null;
            this.Jb = -1 != b;
            this.yb = null;
            this.opacity = -1;
            this.gg = c;
            this.Id = this.Ub = Fa;
            this.ka = new bj;
            this.ka.Na = a;
            this.ka.g = a;
            this.Ga = !1;
            this.Sa = {
                Ec: null,
                Dc: null
            };
            this.Fd = !0;
            this.Db = null;
            this.fb = !1;
            P.B().w++;
            this.qd = 0;
            this.ba = this.pc();
            this.Gd = -1;
            this.U = null;
            this.ec = new G(0, 0, 0, 0);
            a = this.J = new Vi;
            O(a, "od", Ei);
            N(O(a, "opac", M));
            O(a, "ue", M);
            O(a, "ud", M);
            N(O(a, "gcm",
                M));
            N(O(a, "cm", M));
            N(O(a, "sela", M));
            N(O(a, "sbeos", M));
            N(O(a, "prf", M));
            N(O(a, "mwt", M));
            N(O(a, "lcs", M));
            O(a, "iogeo", M);
            O(a, "iza", M);
            a.h.iza = 1;
            N(O(a, "osddt", M));
            (a = this.ka.Na) && a.getAttribute && !/-[a-z]/.test("googleAvInapp") && (aj && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Kc()) : a.getAttribute("data-" + Kc())) && (R.B().l = !0);
            1 == this.gg ? Wi(this.J, "od", 1) : Wi(this.J, "od", 0)
        };
    p(nl, J);
    k = nl.prototype;
    k.T = function() {
        this.ka.g && (this.Sa.Ec && (Je(this.ka.g, "mouseover", this.Sa.Ec), this.Sa.Ec = null), this.Sa.Dc && (Je(this.ka.g, "mouseout", this.Sa.Dc), this.Sa.Dc = null));
        this.Db && this.Db.X();
        this.U && this.U.X();
        delete this.Tb;
        delete this.Ub;
        delete this.Id;
        delete this.ka.Na;
        delete this.ka.g;
        delete this.Sa;
        delete this.Db;
        delete this.U;
        delete this.J;
        J.prototype.T.call(this)
    };
    k.va = function() {
        return this.U ? this.U.h : this.position
    };
    k.Ic = function(a) {
        P.B().Ic(a)
    };
    k.Ca = function() {
        return !1
    };
    k.Kb = function() {
        return new kl
    };
    k.pa = function() {
        return this.Tb
    };
    var ol = function(a, b) {
        b != a.fb && (a.fb = b, a = R.B(), b ? a.A++ : 0 < a.A && a.A--)
    };
    nl.prototype.yc = function() {};
    nl.prototype.rd = function() {};
    nl.prototype.nd = function() {};
    nl.prototype.dc = function() {};
    var pl = function(a, b, c) {
            var d = a.ba.ha,
                e = c ? a.ba.W : a.qd,
                f = a.va();
            a.ec && !Oe(a.ec, new G(0, 0, 0, 0)) && (e = Pe(a.ec.clone(), f.left, f.top));
            a.lb(f, e, b, c, !1, {}, void 0, d)
        },
        ql = function(a, b) {
            b = b.create(a.ka.g, a.J, a.Ca());
            if (b = null != b && b.zc() ? b : null) a.U = b
        },
        rl = function(a, b, c) {
            if (a.U) {
                a.U.Ea();
                var d = a.U.o,
                    e = d.l(),
                    f = e.g;
                if (null != d.g) {
                    var g = d.w;
                    a.yb = new Zd(g.left - f.left, g.top - f.top);
                    a.ec = d.g
                }
                f = wk(d, a.Cb());
                g = {};
                null !== e.volume && (g.volume = e.volume);
                var h = P.B().J;
                Za(["imams", "gms"], function(l) {
                        return 1 === Xi(h, l)
                    }) || 1 ===
                    Xi(a.J, "osddt") ? (e = 0, a.Ob && (e = d.A - a.Ob.A), a.Ob = d, a.lb(a.va(), f, b, c, !1, g, e, d.h)) : a.lb(a.va(), f, b, c, !1, g, void 0, d.h)
            }
        },
        sl = function(a) {
            if (a.Jb && a.Db) {
                var b = 1 == Xi(a.J, "od"),
                    c = R.B().g,
                    d = a.Db,
                    e = a.U ? a.U.getName() : P.B().U,
                    f = new E(c.h(), c.g());
                c = a.Cb();
                a = {
                    hg: e,
                    yb: a.yb,
                    mg: f,
                    Cb: c,
                    W: a.ba.W,
                    kg: b
                };
                if (b = d.l) {
                    b.Ea();
                    e = b.o;
                    f = e.l().g;
                    var g = null,
                        h = null;
                    null != e.g && f && (g = e.w, g = new Zd(g.left - f.left, g.top - f.top), h = new E(f.right - f.left, f.bottom - f.top));
                    e = wk(e, c);
                    c = {
                        hg: b.getName(),
                        yb: g,
                        mg: h,
                        Cb: c,
                        kg: !1,
                        W: e
                    }
                } else c = null;
                c &&
                    Wk(d, a, c)
            }
        };
    k = nl.prototype;
    k.lb = function(a, b, c, d, e, f, g, h) {
        f = void 0 === f ? {} : f;
        g = void 0 === g ? this.ld(c, f) : g;
        h = void 0 === h ? -1 : h;
        if (!this.Ga) {
            Aa(b) || (this.yb = new Zd(a.left - b.left, a.top - b.top));
            if (this.Jb) {
                f = this.hc(a, b, d, f, h);
                e = e && this.ba.W >= (this.Wa() ? .3 : .5);
                this.Rc(g, f, e);
                this.Ya = c;
                0 < f.W && -1 === this.Gd && (this.Gd = c); - 1 == this.Hd && this.Xa() && (this.Hd = c);
                if (-2 == this.xc) try {
                    a: {
                        var l = Aa(b) ? null : b;
                        if (a && a != ml && 0 != pk(this.va())) {
                            var m = R.B();
                            if (!l) {
                                if (!m.g) {
                                    var n = -1;
                                    break a
                                }
                                l = new G(0, m.g.h(), m.g.g(), 0)
                            }
                            n = l.h && 0 < l.h() && l.g && 0 < l.g() ? this.sb(a,
                                l) : -1
                        } else n = -1
                    }
                    this.xc = n
                }
                catch (v) {
                    Gj(207, v)
                }
                this.ba = f;
                d && (this.ba.W = 0)
            }
            this.Ub(this)
        }
    };
    k.Rc = function(a, b, c) {
        this.pa().I(a, b, this.ba, c)
    };
    k.pc = function() {
        return new Fi
    };
    k.hc = function(a, b, c, d, e) {
        e = void 0 === e ? -1 : e;
        d = this.pc();
        d.g = c;
        c = lj().h;
        c = 0 === pg(Nd) ? -1 : c.isVisible() ? 0 : 1;
        d.h = c;
        if (Aa(b)) d.W = this.sb(b), d.ha = e;
        else {
            d.W = this.sb(a, b);
            var f;
            0 <= e ? f = e : f = d.W * pk(a) / (D.screen.height * D.screen.width);
            d.ha = f
        }
        d.Wa = this.Wa();
        return d
    };
    k.ld = function(a) {
        if (-1 == this.Ya) return 0;
        a = a - this.Ya || 1;
        return 1E4 < a ? 1 : a
    };
    k.sb = function(a, b) {
        if (0 === this.opacity && 1 === Xi(this.J, "opac")) return 0;
        if (Aa(a)) return a;
        a = ok(a, b);
        var c = 1 == Xi(this.J, "od");
        if (0 >= pk(this.va()) || tk(a, b, this.ka.g, c)) return 0;
        c = pk(a) / pk(this.va());
        b = qk(a, b);
        return this.Cb() ? Math.max(c, b) : c
    };
    k.Wa = function() {
        return !1
    };
    k.Cb = function() {
        return !1
    };
    var tl = function(a, b, c, d) {
        if (d) a.position = d;
        else {
            b = c ? b : b.top;
            a.position = ml.clone();
            try {
                a.ka.g && (a.position = nk(a.ka.g, b))
            } catch (e) {}
        }
    };
    nl.prototype.wa = function() {
        return 0
    };
    nl.prototype.Xa = function() {
        return this.Tb.Xa()
    };
    var ul = function(a, b) {
            b = Math.pow(10, b);
            return Math.floor(a * b) / b
        },
        vl = function(a) {
            a.Ya = -1;
            a.Ob = null;
            a.yc(Q())
        },
        wl = function(a, b) {
            P.B();
            if (b = void 0 === b ? Fa : b) a.Id = b
        };
    var xl = "StopIteration" in q ? q.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        yl = function() {};
    yl.prototype.next = function() {
        throw xl;
    };
    yl.prototype.Eb = function() {
        return this
    };
    var zl = function(a) {
            if (a instanceof yl) return a;
            if ("function" == typeof a.Eb) return a.Eb(!1);
            if (Ja(a)) {
                var b = 0,
                    c = new yl;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) throw xl;
                        if (b in a) return a[b++];
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        Al = function(a, b) {
            if (Ja(a)) try {
                B(a, b, void 0)
            } catch (c) {
                if (c !== xl) throw c;
            } else {
                a = zl(a);
                try {
                    for (;;) b.call(void 0, a.next(), void 0, a)
                } catch (c) {
                    if (c !== xl) throw c;
                }
            }
        };
    var Bl = function() {
            this.o = this.g = this.l = this.h = this.w = 0
        },
        Cl = function(a) {
            var b = {};
            var c = y() - a.w;
            b = (b.ptlt = c, b);
            (c = a.h) && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.o) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var Dl = function() {
        Fi.call(this);
        this.l = !1;
        this.volume = void 0;
        this.w = !1;
        this.o = -1
    };
    p(Dl, Fi);
    var El = function(a) {
        return dk(a.volume) && .1 <= a.volume
    };
    var Fl = function() {
            var a = {};
            this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a);
            this.g = {};
            for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
            this.l = 0
        },
        Gl = function(a, b) {
            var c = a.h[b],
                d = c[1];
            a.l += c[0];
            0 < d && 0 == a.g[b] && (a.g[b] = 1)
        },
        Il = function(a) {
            return Hl(a, zb(a.h))
        },
        Hl = function(a, b) {
            var c = 0,
                d;
            for (d in a.g) cb(b, d) &&
                1 == a.g[d] && (c += a.h[d][1], a.g[d] = 2);
            return c
        },
        Jl = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (1 == d || 2 == d) b += a.h[c][1]
            }
            return b
        };
    var Kl = function() {
        this.h = this.l = 0
    };
    Kl.prototype.g = function() {
        return this.l
    };
    var Ll = function(a, b, c) {
        32 <= b || (a.h & 1 << b && !c ? a.l &= ~(1 << b) : a.h & 1 << b || !c || (a.l |= 1 << b), a.h |= 1 << b)
    };
    var Ml = function() {
        kl.call(this);
        this.g = new Xk;
        this.P = this.K = this.M = 0;
        this.G = -1;
        this.ia = new Xk;
        this.w = new Xk;
        this.h = new $k;
        this.A = this.o = -1;
        this.D = new Xk;
        this.$ = 2E3;
        this.O = new Kl;
        this.Z = new Kl;
        this.Y = new Kl
    };
    p(Ml, kl);
    var Nl = function(a, b, c) {
        var d = a.P;
        Mj || c || -1 == a.G || (d += b - a.G);
        return d
    };
    Ml.prototype.I = function(a, b, c, d) {
        if (!b.w) {
            kl.prototype.I.call(this, a, b, c, d);
            var e = El(b) && El(c),
                f = .5 <= (d ? Math.min(b.W, c.W) : c.W);
            dk(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.A = Math.max(this.A, b.volume));
            f && (this.M += a, this.K += e ? a : 0);
            il(this.h, b.W, c.W, b.g, a, d, e);
            Yk(this.g, !0, a);
            Yk(this.w, e, a);
            Yk(this.D, c.l, a);
            Yk(this.ia, e && !f, a);
            a = Math.floor(b.o / 1E3);
            Ll(this.O, a, b.isVisible());
            Ll(this.Z, a, 1 <= b.W);
            Ll(this.Y, a, El(b))
        }
    };
    var Ol = function() {
        this.g = !1
    };
    var Pl = function(a, b) {
        this.g = !1;
        this.o = a;
        this.G = b;
        this.h = 0
    };
    p(Pl, Ol);
    var Ql = function(a, b) {
        return a.l(b) ? (b = a.G.report(a.o, b), a.h |= b, 0 == b) : !1
    };
    Pl.prototype.l = function() {
        return !0
    };
    Pl.prototype.w = function() {
        return !1
    };
    Pl.prototype.getId = function() {
        var a = this,
            b = Eb(function(c) {
                return c == a.o
            });
        return Wj[b].toString()
    };
    Pl.prototype.toString = function() {
        var a = "";
        this.w() && (a += "c");
        this.g && (a += "s");
        0 < this.h && (a += ":" + this.h);
        return this.getId() + a
    };
    var Rl = new G(0, 0, 0, 0),
        Sl = {},
        Tl = (Sl.firstquartile = 0, Sl.midpoint = 1, Sl.thirdquartile = 2, Sl.complete = 3, Sl),
        Ul = function(a, b, c, d, e, f) {
            e = void 0 === e ? null : e;
            f = void 0 === f ? [] : f;
            nl.call(this, b, c, d);
            this.Z = 0;
            this.o = {};
            this.ea = new Fl;
            this.td = {};
            this.ga = "";
            this.Oa = null;
            this.md = !1;
            this.g = [];
            this.C = e;
            this.D = f;
            this.w = null;
            this.A = -1;
            this.ia = this.I = void 0;
            this.M = this.N = 0;
            this.V = -1;
            this.Yc = this.pb = !1;
            this.nb = this.jd = 0;
            this.ra = !1;
            this.dd = this.fd = -1;
            this.P = this.F = this.h = 0;
            this.od = this.aa = -1;
            this.gd = 0;
            this.Fb = new $k;
            this.Y =
                this.Aa = this.$ = 0;
            this.Ra = -1;
            this.Qa = 0;
            this.H = !1;
            this.da = 0;
            this.ob = !1;
            this.na = Fa;
            this.O = [this.Kb()];
            this.Qf = 2;
            b = R.B();
            tl(this, a, b.h);
            this.ab = {};
            this.ab.pause = "p";
            this.ab.resume = "r";
            this.ab.skip = "s";
            this.ab.mute = "m";
            this.ab.unmute = "um";
            this.ab.exitfullscreen = "ef";
            this.l = null
        };
    p(Ul, nl);
    Ul.prototype.Ca = function() {
        return !0
    };
    var Vl = function(a, b, c) {
        a.da = 1;
        a.o = {};
        a.o.firstquartile = !1;
        a.o.midpoint = !1;
        a.o.thirdquartile = !1;
        a.o.complete = !1;
        a.o.pause = !1;
        a.o.skip = !1;
        a.o.viewable_impression = !1;
        a.Z = 0;
        c || (a.pa().G = b)
    };
    Ul.prototype.Qc = function() {
        if (this.C) {
            var a = this.C;
            a.g || (a.g = Ql(a, this))
        }
    };
    Ul.prototype.yc = function(a) {
        var b = this,
            c = a - this.fd;
        this.ra && 1E3 >= c || (c = Ea("ima.bridge.getNativeViewability"), x(c) && (c(this.ga, function(d) {
            b.ra = !1;
            b.H && (b.ob = !0);
            Fb(d) && b.Qa++;
            b.dc(d)
        }), this.ra = !0, this.fd = a))
    };
    Ul.prototype.rd = function(a) {
        var b = P.B();
        a - this.dd > Nj(b.h) && (a = Ea("ima.admob.getViewability"), x(a) && a(this.ga))
    };
    var Wl = function(a) {
        return t(a) ? Number(a) ? ul(a, 3) : 0 : a
    };
    k = Ul.prototype;
    k.nd = function(a) {
        this.dd = Q();
        this.dc(a)
    };
    k.dc = function(a) {
        var b = a.opt_nativeViewBounds || {},
            c = a.opt_nativeViewVisibleBounds || {},
            d = a.opt_nativeTime || -1,
            e = a.opt_nativeVolume;
        b = new G(b.top || 0, b.left + b.width || 0, b.top + b.height || 0, b.left || 0);
        a = a.opt_nativeViewHidden ? Rl.clone() : new G(c.top || 0, c.left + c.width || 0, c.top + c.height || 0, c.left || 0);
        c = void 0;
        if ("n" == this.w || "ml" == this.w) c = {
            volume: e
        };
        e = c;
        e = void 0 === e ? {} : e;
        this.position = b;
        this.lb(b, a, d, !1, !0, e)
    };
    k.lb = function(a, b, c, d, e, f, g, h) {
        var l = this;
        f = void 0 === f ? {} : f;
        var m = this.na(this) || {};
        Jb(m, f);
        this.A = m.duration || this.A;
        this.I = m.isVpaid || this.I;
        this.ia = m.isYouTube || this.ia;
        nl.prototype.lb.call(this, a, b, c, d, e, m, g, h);
        (1 != Xi(P.B().J, "buvpe") || this.C && this.C.g) && B(this.D, function(n) {
            n.g || (n.g = Ql(n, l))
        })
    };
    k.Rc = function(a, b, c) {
        nl.prototype.Rc.call(this, a, b, c);
        Xl(this).I(a, b, this.ba, c);
        this.Yc = El(this.ba) && El(b); - 1 == this.V && this.pb && (this.V = this.pa().g.g);
        this.ea.l = 0;
        a = this.Xa();
        b.isVisible() && Gl(this.ea, "vs");
        a && Gl(this.ea, "vw");
        dk(b.volume) && Gl(this.ea, "am");
        El(b) && Gl(this.ea, "a");
        this.fb && Gl(this.ea, "f"); - 1 != b.h && (Gl(this.ea, "bm"), 1 == b.h && Gl(this.ea, "b"));
        El(b) && b.isVisible() && Gl(this.ea, "avs");
        this.Yc && a && Gl(this.ea, "avw");
        0 < b.W && Gl(this.ea, "pv");
        Yl(this, this.pa().g.g, !0) && Gl(this.ea, "gdr");
        2E3 <=
            fl(this.pa().l, 1) && Gl(this.ea, "pmx")
    };
    k.Kb = function() {
        return new Ml
    };
    k.pa = function() {
        return this.Tb
    };
    var Xl = function(a, b) {
        var c;
        null != b && b < a.O.length ? c = b : c = a.O.length - 1;
        return a.O[c]
    };
    Ul.prototype.pc = function() {
        return new Dl
    };
    Ul.prototype.hc = function(a, b, c, d, e) {
        a = nl.prototype.hc.call(this, a, b, c, d, void 0 === e ? -1 : e);
        a.l = this.fb;
        a.w = 2 == this.da;
        a.volume = d.volume;
        dk(a.volume) || (this.jd++, b = this.ba, dk(b.volume) && (a.volume = b.volume));
        d = d.currentTime;
        a.o = t(d) && 0 <= d ? d : -1;
        return a
    };
    var Zl = function(a) {
        var b = !!Xi(P.B().J, "umt");
        return a.I || !b && !a.ia ? 0 : 1
    };
    Ul.prototype.ld = function(a, b) {
        b = t(b.currentTime) ? b.currentTime : this.N;
        if (-1 == this.Ya || 2 == this.da) a = 0;
        else {
            a = a - this.Ya || 1;
            var c = 1E4;
            t(this.A) && -1 != this.A && (c = Math.max(c, this.A / 3));
            a = a > c ? 1 : a
        }
        c = b - this.N;
        var d = 0;
        0 <= c ? (this.M += a, this.Y += Math.max(a - c, 0), d = Math.min(c, this.M)) : this.Aa += Math.abs(c);
        0 != c && (this.M = 0); - 1 == this.Ra && 0 < c && (this.Ra = 0 <= Lj ? Q() - Lj : -1);
        this.N = b;
        return 1 == Zl(this) ? d : a
    };
    Ul.prototype.sb = function(a, b) {
        return this.H ? 0 : this.fb ? 1 : nl.prototype.sb.call(this, a, b)
    };
    Ul.prototype.wa = function() {
        return 1
    };
    Ul.prototype.getDuration = function() {
        return this.A
    };
    var $l = function(a, b) {
            Za(a.D, function(c) {
                return c.o == b.o
            }) || a.D.push(b)
        },
        Yl = function(a, b, c) {
            return 15E3 <= b ? !0 : a.pb ? (void 0 === c ? 0 : c) ? !0 : am(a.A) ? b >= a.A / 2 : am(a.V) ? b >= a.V : !1 : !1
        },
        am = function(a) {
            return 1 == Xi(P.B().J, "gmpd") ? 0 < a : -1 != a
        },
        bm = function(a) {
            var b = {},
                c = R.B();
            b.insideIframe = c.h;
            b.unmeasurable = a.Ga;
            b.position = a.va();
            b.exposure = a.ba.W;
            b.documentSize = c.o;
            b.viewportSize = new E(c.g.h(), c.g.g());
            null != a.l && (b.presenceData = a.l);
            b.screenShare = a.ba.ha;
            return b
        },
        cm = function(a) {
            var b = ul(a.ba.W, 2),
                c = a.ea.l,
                d =
                a.ba,
                e = Xl(a),
                f = Wl(e.o),
                g = Wl(e.A),
                h = Wl(d.volume),
                l = ul(e.C, 2),
                m = ul(e.F, 2),
                n = ul(d.W, 2),
                v = ul(e.H, 2),
                r = ul(e.N, 2);
            d = ul(d.ha, 2);
            a = a.va().clone();
            a.round();
            e = ll(e, !1);
            return {
                lg: b,
                vb: c,
                Vb: f,
                Qb: g,
                qb: h,
                Wb: l,
                Rb: m,
                W: n,
                Xb: v,
                Sb: r,
                ha: d,
                position: a,
                $b: e
            }
        },
        em = function(a, b) {
            dm(a.g, b, function() {
                return {
                    lg: 0,
                    vb: void 0,
                    Vb: -1,
                    Qb: -1,
                    qb: -1,
                    Wb: -1,
                    Rb: -1,
                    W: -1,
                    Xb: -1,
                    Sb: -1,
                    ha: -1,
                    position: void 0,
                    $b: []
                }
            });
            a.g[b] = cm(a)
        },
        dm = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        hm = function(a, b, c) {
            var d = a.td[b];
            if (null != d) return d;
            d = fm(a, b);
            var e = Eb(function(f) {
                return f == b
            });
            c = gm(a, d, d, c, Tl[Db[e]]);
            "fully_viewable_audible_half_duration_impression" == b && (c.std = "csm", c.ic = Hl(a.ea, ["gdr"]));
            return c
        },
        im = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        gm = function(a, b, c, d, e) {
            if (a.Ga) return {
                "if": 0
            };
            var f = a.va().clone();
            f.round();
            var g = R.B(),
                h = P.B(),
                l = a.pa(),
                m = {};
            m["if"] = g.h ? 1 : void 0;
            m.sdk = a.w ? a.w : void 0;
            m.t = a.jg;
            m.p = [f.top, f.left, f.bottom, f.right];
            m.tos = bl(l.l, !1);
            m.mtos = ll(l);
            m.mcvt = l.V.l;
            m.ps = void 0;
            f = Nl(l,
                Q(), 2 == a.da);
            m.vht = f;
            m.mut = l.ia.l;
            m.a = Wl(a.ba.volume);
            m.mv = Wl(l.A);
            m.fs = a.fb ? 1 : 0;
            m.ft = l.D.g;
            m.at = l.w.g;
            m.as = .1 <= l.o ? 1 : 0;
            m.atos = bl(l.h);
            m.ssb = bl(l.aa, !1);
            m.amtos = el(l.h);
            m.uac = a.jd;
            m.vpt = l.g.g;
            "nio" == h.U && (m.nio = 1, m.avms = "nio");
            m.gmm = "4";
            m.gdr = Yl(a, l.g.g, !0) ? 1 : 0;
            m.efpf = a.Qf;
            0 < a.Qa && (m.nnut = a.Qa);
            m.tcm = Zl(a);
            m.nmt = a.Aa;
            m.bt = a.Y;
            m.pst = a.Ra;
            m.vpaid = a.I;
            m.dur = a.A;
            m.vmtime = a.N;
            m.is = a.ea.l;
            1 <= a.g.length && (m.i0 = a.g[0].vb, m.a0 = [a.g[0].qb], m.c0 = [a.g[0].W], m.ss0 = [a.g[0].ha], f = a.g[0].position, m.p0 = f ? [f.top, f.left,
                f.bottom, f.right
            ] : void 0);
            2 <= a.g.length && (m.i1 = a.g[1].vb, m.a1 = im(a.g[1].Vb, a.g[1].qb, a.g[1].Qb), m.c1 = im(a.g[1].Wb, a.g[1].W, a.g[1].Rb), m.ss1 = im(a.g[1].Xb, a.g[1].ha, a.g[1].Sb), f = a.g[1].position, m.p1 = f ? [f.top, f.left, f.bottom, f.right] : void 0, m.mtos1 = a.g[1].$b);
            3 <= a.g.length && (m.i2 = a.g[2].vb, m.a2 = im(a.g[2].Vb, a.g[2].qb, a.g[2].Qb), m.c2 = im(a.g[2].Wb, a.g[2].W, a.g[2].Rb), m.ss2 = im(a.g[2].Xb, a.g[2].ha, a.g[2].Sb), f = a.g[2].position, m.p2 = f ? [f.top, f.left, f.bottom, f.right] : void 0, m.mtos2 = a.g[2].$b);
            4 <= a.g.length &&
                (m.i3 = a.g[3].vb, m.a3 = im(a.g[3].Vb, a.g[3].qb, a.g[3].Qb), m.c3 = im(a.g[3].Wb, a.g[3].W, a.g[3].Rb), m.ss3 = im(a.g[3].Xb, a.g[3].ha, a.g[3].Sb), f = a.g[3].position, m.p3 = f ? [f.top, f.left, f.bottom, f.right] : void 0, m.mtos3 = a.g[3].$b);
            m.cs = Jl(a.ea);
            b && (m.ic = Il(a.ea), m.dvpt = l.g.h, m.dvs = gl(l.l, .5), m.dfvs = gl(l.l, 1), m.davs = gl(l.h, .5), m.dafvs = gl(l.h, 1), c && (l.g.h = 0, hl(l.l), hl(l.h)), a.Xa() && (m.dtos = l.M, m.dav = l.K, m.dtoss = a.Z + 1, c && (l.M = 0, l.K = 0, a.Z++)), m.dat = l.w.h, m.dft = l.D.h, c && (l.w.h = 0, l.D.h = 0));
            m.ps = [g.o.width, g.o.height];
            m.bs = [g.g.h(), g.g.g()];
            m.scs = [g.w.width, g.w.height];
            m.dom = g.F;
            a.nb && (m.vds = a.nb);
            if (0 < a.D.length || a.C) b = gb(a.D), a.C && b.push(a.C), m.pings = Xa(b, function(n) {
                return n.toString()
            });
            b = Xa(Wa(a.D, function(n) {
                return n.w()
            }), function(n) {
                return n.getId()
            });
            ib(b);
            m.ces = b;
            a.h && (m.vmer = a.h);
            a.F && (m.vmmk = a.F);
            a.P && (m.vmiec = a.P);
            m.avms = a.U ? a.U.getName() : P.B().U;
            a.U && Jb(m, a.U.Ka());
            "exc" == h.U && (m.femt = a.aa, m.femvt = a.od, m.emc = a.gd, m.emb = bl(a.Fb, !1), m.emuc = a.$, m.avms = "exc");
            d ? (m.c = ul(a.ba.W, 2), m.ss = ul(a.ba.ha, 2)) : m.tth =
                Q() - Kj;
            m.mc = ul(l.F, 2);
            m.nc = ul(l.C, 2);
            m.mv = Wl(l.A);
            m.nv = Wl(l.o);
            m.lte = ul(a.xc, 2);
            d = Xl(a, e);
            ll(l);
            m.qmtos = ll(d);
            m.qnc = ul(d.C, 2);
            m.qmv = Wl(d.A);
            m.qnv = Wl(d.o);
            m.qas = .1 <= d.o ? 1 : 0;
            m.qi = a.ga;
            m.avms || (m.avms = "geo");
            m.psm = l.O.h;
            m.psv = l.O.g();
            m.psfv = l.Z.g();
            m.psa = l.Y.g();
            h = Zi(h.J);
            h.length && (m.veid = h);
            a.l && Jb(m, Cl(a.l));
            return m
        },
        fm = function(a, b) {
            if (cb(Vj, b)) return !0;
            var c = a.o[b];
            return t(c) ? (a.o[b] = !0, !c) : !1
        };
    var jm = y(),
        mm = function() {
            this.g = {};
            var a = F();
            km(this, a, document);
            var b = lm();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) km(this, c, c.document);
                    km(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        lm = function() {
            var a = document.documentElement;
            try {
                if (!ye(F().top)) return "2";
                var b = [],
                    c = F(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && 0 != b.length ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        km = function(a, b, c) {
            Rj(c, "mousedown", function() {
                return nm(a)
            }, 301);
            Rj(b,
                "scroll",
                function() {
                    return om(a)
                }, 302);
            Rj(c, "touchmove", function() {
                return pm(a)
            }, 303);
            Rj(c, "mousemove", function() {
                return qm(a)
            }, 304);
            Rj(c, "keydown", function() {
                return rm(a)
            }, 305)
        },
        nm = function(a) {
            sb(a.g, function(b) {
                1E5 < b.l || ++b.l
            })
        },
        om = function(a) {
            sb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        pm = function(a) {
            sb(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        rm = function(a) {
            sb(a.g, function(b) {
                1E5 < b.h || ++b.h
            })
        },
        qm = function(a) {
            sb(a.g, function(b) {
                1E5 < b.o || ++b.o
            })
        };
    var sm = function() {
            this.g = [];
            this.h = []
        },
        tm = function(a, b) {
            return ab(a.g, function(c) {
                return c.ga == b
            })
        },
        um = function(a, b) {
            return b ? ab(a.g, function(c) {
                return c.ka.Na == b
            }) : null
        },
        vm = function(a, b) {
            return ab(a.h, function(c) {
                return 2 == c.wa() && c.ga == b
            })
        },
        xm = function() {
            var a = wm;
            return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : fb(a.h, a.g)
        };
    sm.prototype.reset = function() {
        this.g = [];
        this.h = []
    };
    var ym = function(a, b) {
            a = 1 == b.wa() ? a.g : a.h;
            var c = $a(a, function(d) {
                return d == b
            });
            return -1 != c ? (a.splice(c, 1), b.U && b.U.Ac(), b.X(), !0) : !1
        },
        zm = function(a) {
            var b = wm;
            if (ym(b, a)) {
                switch (a.wa()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return vm(b, a.ga)
                        };
                        break;
                    case 1:
                        c = function() {
                            return tm(b, a.ga)
                        }
                }
                for (var d = c(); d; d = c()) ym(b, d)
            }
        },
        Am = function(a) {
            var b = wm;
            a = Wa(a, function(c) {
                return !um(b, c.ka.Na)
            });
            b.g.push.apply(b.g, ca(a))
        },
        Bm = function(a) {
            var b = wm,
                c = [];
            B(a, function(d) {
                Za(b.g, function(e) {
                    return e.ka.Na ===
                        d.ka.Na && e.ga === d.ga
                }) || (b.g.push(d), c.push(d))
            })
        };
    Ga(sm);
    var wm = sm.B();
    var Cm = function() {
            this.g = this.h = null
        },
        Dm = function(a, b) {
            if (null == a.h) return !1;
            var c = function(d, e) {
                a.g = null;
                b(d, e)
            };
            a.g = ab(a.h, function(d) {
                return null != d && d.$a() && d.wd(c)
            });
            a.g && Dk(a.g.g);
            return null != a.g
        };
    Ga(Cm);
    var Em = function(a, b, c, d) {
        Hk.call(this, a, b, c, d)
    };
    p(Em, Hk);
    Em.prototype.D = function(a) {
        var b = 1 == Xi(this.J, "od");
        return tk(a, this.w, this.element, b)
    };
    Em.prototype.$c = function() {
        var a = this.g.l();
        this.timestamp = -1 === a.time ? Q() : a.time
    };
    Em.prototype.Ea = function() {
        this.$c();
        this.Gb();
        this.Zc();
        var a = ok(this.h, this.w);
        var b = a.top >= a.bottom || a.left >= a.right ? new G(0, 0, 0, 0) : a;
        a = this.g.l();
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.h.bottom - this.h.top) * (this.h.right - this.h.left) && (this.D(b) ? b = new G(0, 0, 0, 0) : (c = R.B().w, e = new G(0, c.height, c.width, 0), c = qk(b, this.h), d = qk(b, R.B().g), e = qk(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new G(0, 0, 0, 0) : Pe(b, -this.h.left, -this.h.top);
        this.o = new vk(a, this.h, b, c, d, this.timestamp, e)
    };
    Em.prototype.getName = function() {
        return this.g.getName()
    };
    var Gm = function(a) {
        a = Fm(a);
        Ik.call(this, a.length ? a[a.length - 1] : new zk(D, 0));
        this.l = a;
        this.o = Fa;
        this.h = null
    };
    p(Gm, Ik);
    k = Gm.prototype;
    k.getName = function() {
        return (this.h ? this.h : this.g).getName()
    };
    k.Ka = function() {
        return (this.h ? this.h : this.g).Ka()
    };
    k.Fa = function() {
        return (this.h ? this.h : this.g).Fa()
    };
    k.wd = function(a) {
        this.o = a;
        B(this.l, function(b) {
            return b.Z()
        });
        Ck(this.g, this);
        return !0
    };
    k.X = function() {
        B(this.l, function(a) {
            a.X()
        });
        Ik.prototype.X.call(this)
    };
    k.$a = function() {
        return Za(this.l, function(a) {
            return a.$a()
        })
    };
    k.ua = function() {
        return Za(this.l, function(a) {
            return a.ua()
        })
    };
    k.Yb = function(a, b, c) {
        return new Em(a, this.g, b, c)
    };
    k.bb = function(a) {
        0 == a.Fa() && this.o(a.tb(), this)
    };
    k.Ua = function(a) {
        this.h = a.h
    };
    k.Ca = function() {
        return !1
    };
    var Fm = function(a) {
        if (!a.length) return [];
        a = Wa(a, function(c) {
            return null != c && c.$a()
        });
        for (var b = 1; b < a.length; b++) Ck(a[b - 1], a[b]);
        return a
    };
    var Hm = function(a, b, c, d) {
        Hk.call(this, a, b, c, d);
        this.K = this.G = null
    };
    p(Hm, Em);
    Hm.prototype.zc = function() {
        var a = this;
        this.K || (this.K = Q());
        if (Ej(298, function() {
                return Im(a)
            })) return !0;
        Bk(this.g, "msf");
        return !1
    };
    var Km = function(a, b) {
            try {
                if (b.length) {
                    a.G || (a.G = Q());
                    var c = Jm(b),
                        d = Ye(a.element, a.g.g.ma),
                        e = d.x,
                        f = d.y;
                    a.h = new G(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = bk(c.intersectionRect);
                    a.w = Pe(g, a.h.left - g.left, a.h.top - g.top)
                }
            } catch (h) {
                a.Ac(), Gj(299, h)
            }
        },
        Jm = function(a) {
            return Ya(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    Hm.prototype.Gb = function() {};
    Hm.prototype.D = function() {
        return !1
    };
    Hm.prototype.Zc = function() {};
    Hm.prototype.Ka = function() {
        var a = {};
        return Object.assign(this.g.Ka(), (a.niot_obs = this.K, a.niot_cbk = this.G, a))
    };
    var Lm = {
            threshold: [0, .3, .5, .75, 1]
        },
        Mm = function(a, b, c, d) {
            Hm.call(this, a, b, c, d);
            this.A = this.C = this.l = null
        };
    p(Mm, Hm);
    Mm.prototype.getName = function() {
        return "nio"
    };
    Mm.prototype.Ac = function() {
        if (this.l && this.element) try {
            this.l.unobserve(this.element), this.C ? (this.C.unobserve(this.element), this.C = null) : this.A && (this.A.disconnect(), this.A = null)
        } catch (a) {}
    };
    var Nm = function(a) {
            return a.l && a.l.takeRecords ? a.l.takeRecords() : []
        },
        Im = function(a) {
            if (!a.element) return !1;
            var b = a.element,
                c = a.g.g.ma,
                d = P.B().g.g;
            a.l = new c.IntersectionObserver(sj(d, function(e) {
                return Km(a, e)
            }), Lm);
            d = sj(d, function() {
                a.l.unobserve(b);
                a.l.observe(b);
                Km(a, Nm(a))
            });
            c.ResizeObserver ? (a.C = new c.ResizeObserver(d), a.C.observe(b)) : c.MutationObserver && (a.A = new q.MutationObserver(d), a.A.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.l.observe(b);
            Km(a, Nm(a));
            return !0
        };
    Mm.prototype.Ea = function() {
        var a = Nm(this);
        0 < a.length && Km(this, a);
        Hm.prototype.Ea.call(this)
    };
    var Om = function(a) {
        a = void 0 === a ? D : a;
        Ik.call(this, new zk(a, 2))
    };
    p(Om, Ik);
    Om.prototype.getName = function() {
        return "nio"
    };
    Om.prototype.ua = function() {
        return "exc" !== P.B().U && !R.B().l && null != this.g.g.ma.IntersectionObserver
    };
    Om.prototype.Yb = function(a, b, c) {
        return new Mm(a, this.g, b, c)
    };
    var Qm = function() {
        var a = Pm();
        zk.call(this, D.top, a, "geo")
    };
    p(Qm, zk);
    Qm.prototype.V = function() {
        return R.B().g
    };
    Qm.prototype.ua = function() {
        var a = Pm();
        this.C !== a && (this.g != this && a > this.g.C && (this.g = this, Ak(this)), this.C = a);
        return 2 == a
    };
    var Pm = function() {
        P.B();
        var a = R.B();
        return a.h || a.l ? 0 : 2
    };
    Ga(Qm);
    var Rm = function() {};
    Ga(Rm);
    var Sm = function(a, b, c) {
        J.call(this);
        this.o = null != c ? Pa(a, c) : a;
        this.l = b;
        this.h = Pa(this.$f, this);
        this.g = []
    };
    A(Sm, J);
    k = Sm.prototype;
    k.ib = !1;
    k.Ab = 0;
    k.Ta = null;
    k.hd = function(a) {
        this.g = arguments;
        this.Ta || this.Ab ? this.ib = !0 : Tm(this)
    };
    k.stop = function() {
        this.Ta && (q.clearTimeout(this.Ta), this.Ta = null, this.ib = !1, this.g = [])
    };
    k.pause = function() {
        this.Ab++
    };
    k.resume = function() {
        this.Ab--;
        this.Ab || !this.ib || this.Ta || (this.ib = !1, Tm(this))
    };
    k.T = function() {
        Sm.sa.T.call(this);
        this.stop()
    };
    k.$f = function() {
        this.Ta = null;
        this.ib && !this.Ab && (this.ib = !1, Tm(this))
    };
    var Tm = function(a) {
        a.Ta = di(a.h, a.l);
        a.o.apply(null, a.g)
    };
    var Um = function() {
            this.done = !1;
            this.g = {
                Yd: 0,
                Vc: 0,
                Lc: 0,
                ed: 0,
                sc: -1,
                $d: 0,
                Zd: 0,
                ae: 0
            };
            this.D = this.o = this.C = this.w = this.G = null;
            this.F = !1;
            this.h = null;
            this.H = 0;
            this.l = new xk(this)
        },
        Vm = function() {
            var a = P.B().U;
            return "nio" === a || "aio" === a || "omid" === a
        },
        Ym = function() {
            var a = Wm;
            if (!a.F) {
                a.F = !0;
                if (!a.G && !Vm()) {
                    var b = Fj(137, function(c) {
                        for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                        return a.A.apply(a, ca(d))
                    });
                    a.w = new Sm(b, 100);
                    a.G = Rj(D, "scroll", function(c) {
                        for (var d = [], e = 0; e < arguments.length; ++e) d[e -
                            0] = arguments[e];
                        null !== a.w && a.w.hd.apply(a.w, ca(d))
                    }, 138)
                }
                a.C || Vm() || (b = Fj(140, function(c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    return a.A.apply(a, ca(d))
                }), a.o = new Sm(b, 100), a.C = Rj(D, "resize", function(c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    null !== a.o && a.o.hd.apply(a.o, ca(d))
                }, 141));
                Xm(a, function(c) {
                    for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                    return a.K.apply(a, ca(d))
                });
                a.K()
            }
        };
    Um.prototype.A = function() {
        Zm(this, xm(), !1)
    };
    Um.prototype.ra = function() {
        Zm(this, xm(), !1)
    };
    var $m = function() {
            Rm.B();
            var a = Cm.B();
            null != a.g && a.g.g ? Dk(a.g.g) : ik(R.B())
        },
        Zm = function(a, b, c) {
            if (!a.done && (a.l.cancel(), 0 != b.length)) {
                a.h = null;
                try {
                    $m();
                    var d = Q(),
                        e = P.B();
                    e.o = d;
                    if (null != Cm.B().g)
                        for (e = 0; e < b.length; e++) rl(b[e], d, c);
                    else switch (e.U) {
                        case "exc":
                            for (e = 0; e < b.length; e++) pl(b[e], d, c);
                            break;
                        case "nis":
                            for (e = 0; e < b.length; e++) t(void 0) ? b[e].dc(void 0) : b[e].yc(d);
                            break;
                        case "gsv":
                            for (e = 0; e < b.length; e++) t(void 0) ? b[e].nd(void 0) : b[e].rd(d)
                    }
                    for (e = 0; e < b.length; e++) sl(b[e]);
                    a.g.Lc += Q() - d;
                    ++a.g.ed
                } finally {
                    c ?
                        B(b, function(f) {
                            f.ba.W = 0
                        }) : yk(a.l)
                }
            }
        },
        Xm = function(a, b) {
            if (!a.D) {
                b = Fj(142, b);
                lj();
                var c = qg(Nd);
                c && Ie(Nd, c, b, {
                    capture: !1
                }) && (a.D = b)
            }
        };
    Um.prototype.K = function() {
        var a = lk(),
            b = Q();
        a ? (Mj || (Ij = b, B(wm.g, function(c) {
            var d = c.pa();
            d.P = Nl(d, b, 1 != c.da)
        })), Mj = !0) : (this.H = an(this, b), Mj = !1, Kj = b, B(wm.g, function(c) {
            c.Jb && (c.pa().G = b)
        }));
        Zm(this, xm(), !a)
    };
    var bn = function() {
            var a = Cm.B();
            if (null != a.g) {
                var b = a.g;
                B(xm(), function(c) {
                    return ql(c, b)
                })
            }
        },
        an = function(a, b) {
            a = a.H;
            Mj && (a += b - Ij);
            return a
        },
        cn = function(a) {
            var b = Wm;
            a = void 0 === a ? function() {
                return {}
            } : a;
            Bj.Nc("av-js");
            xj.g = .01;
            Dj([function(c) {
                var d = P.B(),
                    e = {};
                e = (e.bin = d.l, e.type = "error", e);
                d = Yi(d.J);
                if (!b.h) {
                    var f = D.document,
                        g = 0 <= Jj ? Q() - Jj : -1,
                        h = Q(); - 1 == b.g.sc && (g = h);
                    var l = R.B(),
                        m = P.B(),
                        n = Yi(m.J),
                        v = xm();
                    try {
                        if (0 < v.length) {
                            var r = l.g;
                            r && (n.bs = [r.h(), r.g()]);
                            var u = l.o;
                            u && (n.ps = [u.width, u.height]);
                            D.screen &&
                                (n.ss = [D.screen.width, D.screen.height])
                        } else n.url = encodeURIComponent(D.location.href.substring(0, 512)), f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        n.tt = g;
                        n.pt = Jj;
                        n.bin = m.l;
                        switch (P.B().U) {
                            case "iem":
                                n.iem = 1;
                                break;
                            case "aio":
                                n.aio = 1;
                                break;
                            case "nio":
                                n.nio = 1
                        }
                        void 0 !== D.google_osd_load_pub_page_exp && (n.olpp = D.google_osd_load_pub_page_exp);
                        n.deb = [1, b.g.Yd, b.g.Vc, b.g.Lc, b.g.ed, b.g.sc, 0, b.l.h, b.g.$d, b.g.Zd, b.g.ae].join("-");
                        n.tvt = an(b, h);
                        l.l && (n.inapp = 1);
                        if (null !== D && D != D.top) {
                            0 <
                                v.length && (n.iframe_loc = encodeURIComponent(D.location.href.substring(0, 512)));
                            var z = l.G;
                            n.is = [z.h(), z.g()]
                        }
                    } catch (pb) {
                        n.error = 1
                    }
                    b.h = n
                }
                u = b.h;
                r = {};
                for (var T in u) r[T] = u[T];
                T = P.B().g;
                if (1 == Xi(T.l, "prf")) {
                    u = new qj;
                    z = T.g;
                    f = 0; - 1 < z.g && (f = z.o.g.now() - z.g);
                    u = Hd(u, 1, z.l + f);
                    z = T.g;
                    u = Hd(u, 5, -1 < z.g ? z.h + 1 : z.h);
                    u = Hd(u, 2, T.h.g.l());
                    u = Hd(u, 3, T.h.g.h());
                    z = Hd(u, 4, T.h.g.g());
                    T = {};
                    u = new yd;
                    f = Fd(z, 1);
                    f = null == f ? f : +f;
                    f = null == f ? 0 : f;
                    if (0 !== f && (g = f, null != g)) {
                        wd(u.g, 9);
                        f = u.g;
                        l = g;
                        l = (g = 0 > l ? 1 : 0) ? -l : l;
                        if (0 === l) ud = 0 < 1 / l ? 0 : 2147483648,
                            td = 0;
                        else if (isNaN(l)) ud = 2147483647, td = 4294967295;
                        else if (1.7976931348623157E308 < l) ud = (g << 31 | 2146435072) >>> 0, td = 0;
                        else if (2.2250738585072014E-308 > l) l /= Math.pow(2, -1074), ud = (g << 31 | l / 4294967296) >>> 0, td = l >>> 0;
                        else {
                            m = l;
                            h = 0;
                            if (2 <= m)
                                for (; 2 <= m && 1023 > h;) h++, m /= 2;
                            else
                                for (; 1 > m && -1022 < h;) m *= 2, h--;
                            l *= Math.pow(2, -h);
                            ud = (g << 31 | h + 1023 << 20 | 1048576 * l & 1048575) >>> 0;
                            td = 4503599627370496 * l >>> 0
                        }
                        xd(f, td);
                        xd(f, ud)
                    }
                    f = Gd(z, 2);
                    0 !== f && null != f && zd(u, 2, f);
                    f = Gd(z, 3);
                    0 !== f && null != f && zd(u, 3, f);
                    f = Gd(z, 4);
                    0 !== f && null != f && zd(u, 4, f);
                    f = Gd(z, 5);
                    if (0 !== f && null != f && null != f)
                        if (wd(u.g, 40), z = u.g, 0 <= f) wd(z, f);
                        else {
                            for (g = 0; 9 > g; g++) z.g.push(f & 127 | 128), f >>= 7;
                            z.g.push(1)
                        }
                    z = new Uint8Array(u.l + u.g.length());
                    g = u.h;
                    h = g.length;
                    for (l = f = 0; l < h; l++) m = g[l], z.set(m, f), f += m.length;
                    g = u.g.end();
                    z.set(g, f);
                    u.h = [z];
                    T = (T.pf = sd(z), T)
                } else T = {};
                Jb(r, T);
                Jb(c, e, d, r, a());
                if (e = Tk()) d = {}, Jb(c, (d.v = encodeURIComponent(e), d))
            }])
        };
    Ga(Um);
    var Wm = Um.B();
    var dn = null,
        en = "",
        fn = !1,
        gn = function() {
            var a = dn || D;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };
    var hn = function(a) {
            return function(b) {
                return !t(b[a]) && t(0) ? 0 : b[a]
            }
        },
        kn = function() {
            var a = [0, 2, 4];
            return function(b) {
                b = b.tos;
                if (Ia(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return t(a) ? jn(c, a) : c
                }
            }
        },
        ln = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Ia(f) && d(e)) return jn(f, b, c)
            }
        },
        mn = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        nn = function(a) {
            return function(b) {
                for (var c = 0; c < a.length; c++)
                    if (a[c] ===
                        b.e || !t(a[c]) && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        jn = function(a, b, c) {
            return void 0 === c || c ? Wa(a, function(d, e) {
                return cb(b, e)
            }) : Xa(b, function(d, e, f) {
                return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g + h
                }, 0)
            })
        };
    var on = nn([void 0, 1, 2, 3, 4, 8, 16]),
        pn = nn([void 0, 4, 8, 16]),
        qn = {
            sv: "sv",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: mn("p0", pn),
            p1: mn("p1", pn),
            p2: mn("p2", pn),
            p3: mn("p3", pn),
            tos: "tos",
            mtos: "mtos",
            mtos1: ln("mtos1", [0, 2, 4], !1, pn),
            mtos2: ln("mtos2", [0, 2, 4], !1, pn),
            mtos3: ln("mtos3", [0, 2, 4], !1, pn),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: mn("a0", pn),
            a1: mn("a1", pn),
            a2: mn("a2", pn),
            a3: mn("a3", pn),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: mn("c0", pn),
            c1: mn("c1", pn),
            c2: mn("c2", pn),
            c3: mn("c3", pn),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: mn("qmtos", on),
            qnc: mn("qnc", on),
            qmv: mn("qmv", on),
            qnv: mn("qnv", on),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: mn("ss0", pn),
            ss1: mn("ss1", pn),
            ss2: mn("ss2", pn),
            ss3: mn("ss3", pn),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids"
        },
        rn = {
            c: hn("c"),
            at: "at",
            atos: ln("atos", [0, 2, 4]),
            ta: function(a, b) {
                return function(c) {
                    if (!t(c[a])) return b
                }
            }("tth",
                "1"),
            a: "a",
            dur: "dur",
            p: "p",
            tos: kn(),
            j: "dom",
            mtos: ln("mtos", [0, 2, 4]),
            gmm: "gmm",
            gdr: "gdr",
            ss: hn("ss"),
            vsv: ob("w2"),
            t: "t"
        },
        sn = {
            atos: "atos",
            amtos: "amtos",
            avt: ln("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: hn("ss"),
            t: "t"
        },
        tn = {
            a: "a",
            tos: kn(),
            at: "at",
            c: hn("c"),
            mtos: ln("mtos", [0, 2, 4]),
            dur: "dur",
            fs: "fs",
            p: "p",
            vpt: "vpt",
            vsv: ob("ias_w2"),
            dom: "dom",
            gmm: "gmm",
            gdr: "gdr",
            t: "t"
        },
        un = {
            tos: kn(),
            at: "at",
            c: hn("c"),
            mtos: ln("mtos", [0, 2, 4]),
            p: "p",
            vpt: "vpt",
            vsv: ob("dv_w4"),
            gmm: "gmm",
            gdr: "gdr",
            dom: "dom",
            t: "t",
            mv: "mv",
            qmpt: ln("qmtos", [0, 2, 4]),
            qvs: function(a, b) {
                return function(c) {
                    var d = c[a];
                    if (Aa(d)) return Xa(b, function(e) {
                        return 0 < d && d >= e ? 1 : 0
                    })
                }
            }("qnc", [1, .5, 0]),
            qmv: "qmv",
            qa: "qas",
            a: "a"
        };
    var wn = function(a, b) {
            var c = {
                sv: "791",
                cb: "j"
            };
            c.nas = wm.g.length;
            c.msg = a;
            t(b) && (a = vn(b)) && (c.e = Wj[a]);
            return c
        },
        xn = function(a) {
            return 0 == a.lastIndexOf("custom_metric_viewable", 0)
        },
        vn = function(a) {
            var b = xn(a) ? "custom_metric_viewable" : a.toLowerCase();
            return Eb(function(c) {
                return c == b
            })
        };
    var yn = function(a) {
        Pl.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    p(yn, Pl);
    yn.prototype.l = function(a) {
        var b = dl(a.pa().h, 1);
        return Yl(a, b)
    };
    var zn = function(a, b) {
        Pl.call(this, a, b)
    };
    p(zn, Pl);
    zn.prototype.l = function(a) {
        return a.pa().Xa()
    };
    var An = function() {
        this.h = this.o = this.A = this.w = this.l = this.g = ""
    };
    var Bn = function() {},
        Cn = function(a, b, c, d, e) {
            var f = {};
            if (t(a))
                if (null != b)
                    for (var g in b) {
                        var h = b[g];
                        g in Object.prototype || null != h && (x(h) ? f[g] = h(a) : f[g] = a[h])
                    } else Jb(f, a);
            t(c) && Jb(f, c);
            a = Qk(Ok(new Mk, f));
            0 < a.length && t(d) && t(e) && (e = e(a), a += "&" + d + "=" + e);
            return a
        };
    var Dn = function() {};
    p(Dn, Bn);
    Dn.prototype.g = function(a) {
        var b = new An;
        b.g = Cn(a, qn);
        b.l = Cn(a, sn);
        return b
    };
    var En = new G(0, 0, 0, 0),
        Fn = function(a, b, c) {
            Hk.call(this, null, a, b, c);
            this.A = a.uc()
        };
    p(Fn, Em);
    k = Fn.prototype;
    k.zc = function() {
        this.l();
        return !0
    };
    k.Ua = function() {
        Em.prototype.Ea.call(this)
    };
    k.$c = function() {};
    k.Gb = function() {};
    k.Ea = function() {
        this.l();
        Em.prototype.Ea.call(this)
    };
    k.bb = function(a) {
        a = a.uc();
        a !== this.A && (a ? this.l() : (R.B().g = new G(0, 0, 0, 0), this.h = new G(0, 0, 0, 0), this.w = new G(0, 0, 0, 0), this.timestamp = -1));
        this.A = a
    };
    var Gn = function(a, b, c) {
        Fn.call(this, a, b, c)
    };
    p(Gn, Fn);
    Gn.prototype.l = function() {
        var a = Ea("ima.admob.getViewability"),
            b = Xi(this.J, "queryid");
        x(a) && b && a(b)
    };
    Gn.prototype.getName = function() {
        return "gsv"
    };
    var Hn = function(a) {
        a = void 0 === a ? D : a;
        Ik.call(this, new zk(a, 2))
    };
    p(Hn, Ik);
    Hn.prototype.$a = function() {
        return 1 === Xi(P.B().J, "gms") && this.ua()
    };
    Hn.prototype.getName = function() {
        return "gsv"
    };
    Hn.prototype.ua = function() {
        var a = R.B();
        P.B();
        return a.l && !1
    };
    Hn.prototype.Yb = function(a, b, c) {
        return new Gn(this.g, b, c)
    };
    var In = function(a, b, c) {
        Fn.call(this, a, b, c)
    };
    p(In, Fn);
    In.prototype.l = function() {
        var a = this,
            b = Ea("ima.bridge.getNativeViewability"),
            c = Xi(this.J, "queryid");
        x(b) && c && b(c, function(d) {
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.h = ck(d.opt_nativeViewBounds || {});
            var g = a.g.l();
            g.g = f ? En.clone() : ck(e);
            a.timestamp = d.opt_nativeTime || -1;
            R.B().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    };
    In.prototype.getName = function() {
        return "nis"
    };
    var Jn = function(a) {
        a = void 0 === a ? D : a;
        Ik.call(this, new zk(a, 2))
    };
    p(Jn, Ik);
    Jn.prototype.$a = function() {
        return 1 === Xi(P.B().J, "imams") && this.ua()
    };
    Jn.prototype.getName = function() {
        return "nis"
    };
    Jn.prototype.ua = function() {
        var a = R.B();
        P.B();
        return a.l && !1
    };
    Jn.prototype.Yb = function(a, b, c) {
        return new In(this.g, b, c)
    };
    var wb = {
            ng: "addEventListener",
            Hg: "getMaxSize",
            Ig: "getScreenSize",
            Jg: "getState",
            Kg: "getVersion",
            kh: "removeEventListener"
        },
        Kn = function() {
            zk.call(this, D, 2, "mraid");
            var a = this;
            this.ia = 0;
            this.M = this.N = !1;
            this.F = null;
            this.G = 0;
            this.H = -1;
            this.h = null;
            var b = Oj(this.ma);
            b && (this.h = b.Zb, this.H = b.bc);
            this.h && !xb(function(c) {
                return x(a.h[c])
            }) && (this.h = null, this.H = -1);
            this.w.g = new G(0, 0, 0, 0)
        };
    p(Kn, zk);
    Kn.prototype.ua = function() {
        return null != this.h
    };
    Kn.prototype.P = function() {
        var a = {};
        this.ia && (a.mraid = this.ia);
        this.N && (a.mlc = 1);
        this.H && (a.mtop = this.H);
        this.F && (a.mse = this.F);
        return a
    };
    Kn.prototype.K = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h[a].apply(this.h, c)
        } catch (e) {
            Gj(538, e, .01, function(f) {
                f.method = a
            })
        }
    };
    var Ln = function(a, b, c) {
        a.K("removeEventListener", b, c)
    };
    Kn.prototype.Z = function() {
        var a = this;
        if (!this.I) {
            this.I = !0;
            a: switch (this.H) {
                case 0:
                case 3:
                    var b = !0;
                    break a;
                default:
                    b = !1
            }
            b ? (R.B().D = !0, this.ma.document.readyState && "complete" == this.ma.document.readyState ? Mn(this) : Rj(this.ma, "load", function() {
                lj().setTimeout(Fj(292, function() {
                    return Mn(a)
                }), 100)
            }, 292)) : Bk(this, "i")
        }
    };
    var Mn = function(a) {
            "loading" === a.K("getState") ? (Nn(a), a.K("addEventListener", "ready", On)) : Pn(a)
        },
        Nn = function(a) {
            0 == a.G && (a.G = lj().setTimeout(Fj(293, function() {
                a.G = -1;
                Ln(a, "ready", On);
                Gj(539, Error());
                a.F = "rt";
                Bk(a, "w")
            }), 500))
        },
        Pn = function(a) {
            a.G = -1;
            ya(a.h.AFMA_LIDAR) ? (a.N = !0, Qn(a)) : (a.F = "nc", Bk(a, "w"))
        },
        Qn = function(a) {
            a.M = !1;
            lj().setTimeout(Fj(524, function() {
                a.M || (Rn(a), Gj(540, Error()), a.F = "mt", Bk(a, "w"))
            }), 500);
            Sn(a);
            a.K("addEventListener", a.h.AFMA_LIDAR, Tn)
        },
        Sn = function(a) {
            var b = 1 == Xi(P.B().J, "sneio"),
                c = t(a.h.AFMA_LIDAR_EXP_1),
                d = t(a.h.AFMA_LIDAR_EXP_2);
            (b = b && d) && (a.h.AFMA_LIDAR_EXP_2 = !0);
            c && (a.h.AFMA_LIDAR_EXP_1 = !b)
        },
        Rn = function(a) {
            Ln(a, a.h.AFMA_LIDAR, Tn);
            a.N = !1
        };
    Kn.prototype.$ = function() {
        var a = R.B(),
            b = Un(this, "getMaxSize");
        a.g = new G(0, b.width, b.height, 0)
    };
    Kn.prototype.aa = function() {
        R.B().w = Un(this, "getScreenSize")
    };
    var Un = function(a, b) {
        if ("loading" === a.K("getState")) return new E(-1, -1);
        b = a.K(b);
        if (!b) return new E(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new E(-1, -1) : new E(a, b)
    };
    Kn.prototype.X = function() {
        Rn(this);
        zk.prototype.X.call(this)
    };
    var On = function() {
            try {
                var a = Kn.B();
                0 < a.G && lj().clearTimeout(a.G);
                Ln(a, "ready", On);
                Pn(a)
            } catch (b) {
                Gj(541, b)
            }
        },
        Tn = function(a, b) {
            try {
                var c = Kn.B();
                c.M = !0;
                var d = a ? new G(a.y, a.x + a.width, a.y + a.height, a.x) : new G(0, 0, 0, 0);
                var e = Q(),
                    f = lk();
                var g = new uk(e, f, c);
                g.g = d;
                g.volume = b;
                c.Ua(g)
            } catch (h) {
                Gj(542, h)
            }
        };
    Ga(Kn);
    var Wn = function() {
        this.l = this.N = !1;
        this.g = null;
        this.o = new Dn;
        this.h = null;
        var a = {};
        this.I = (a.start = this.ne, a.firstquartile = this.ie, a.midpoint = this.ke, a.thirdquartile = this.oe, a.complete = this.ge, a.pause = this.Hc, a.resume = this.Dd, a.skip = this.me, a.viewable_impression = this.Ma, a.mute = this.kb, a.unmute = this.kb, a.fullscreen = this.je, a.exitfullscreen = this.he, a.fully_viewable_audible_half_duration_impression = this.Ma, a.measurable_impression = this.Ma, a.abandon = this.Hc, a.engagedview = this.Ma, a.impression = this.Ma, a.creativeview =
            this.Ma, a.progress = this.kb, a.custom_metric_viewable = this.Ma, a.bufferstart = this.Hc, a.bufferfinish = this.Dd, a);
        a = {};
        this.P = (a.overlay_resize = this.le, a.abandon = this.qc, a.close = this.qc, a.collapse = this.qc, a.overlay_unmeasurable_impression = function(b) {
                return hm(b, "overlay_unmeasurable_impression", lk())
            }, a.overlay_viewable_immediate_impression = function(b) {
                return hm(b, "overlay_viewable_immediate_impression", lk())
            }, a.overlay_unviewable_impression = function(b) {
                return hm(b, "overlay_unviewable_impression", lk())
            },
            a.overlay_viewable_end_of_session_impression = function(b) {
                return hm(b, "overlay_viewable_end_of_session_impression", lk())
            }, a);
        P.B().l = 3;
        Vn(this)
    };
    Wn.prototype.A = function(a) {
        ol(a, !1);
        zm(a)
    };
    Wn.prototype.C = function() {};
    var Xn = function(a, b, c, d) {
        b = a.K(null, d, !0, b);
        b.w = c;
        b.Ub = function(e) {
            a.D(e)
        };
        Am([b]);
        return b
    };
    Wn.prototype.K = function(a, b, c, d) {
        this.h || (this.h = this.cd());
        b = c ? b : -1;
        null == this.h || this.l ? a = new Ul(D, a, b, 7) : (c = this.h, a = new Ul(D, a, b, 7, new Pl("measurable_impression", this.h), [new zn("viewable_impression", c), new yn(c)]));
        a.ga = d;
        d = a.J;
        d.g.queryid || (d.g.queryid = new Ui);
        Wi(a.J, "queryid", a.ga);
        a.Ic("");
        return a
    };
    var Yn = function() {
            var a = [];
            R.B();
            var b = P.B();
            "exc" != b.U && a.push(Qm.B());
            Xi(b.J, "mvp_lv") && a.push(Kn.B());
            var c = [new Hn, new Jn];
            1 == Xi(b.J, "lvio") && c.push(new Om(D));
            c.push(new Gm(a));
            return c
        },
        $n = function(a) {
            if (!a.N) {
                a.N = !0;
                try {
                    var b = Q(),
                        c = P.B(),
                        d = R.B();
                    Jj = b;
                    c.h = 79463069;
                    "o" !== a.g && (dn = Rf(D).ma);
                    var e = c.J,
                        f = 1 !== Xi(e, "imams") && "nis" === c.U,
                        g = 1 !== Xi(e, "gms") && "gsv" === c.U;
                    if (!f && !g)
                        if (mj()) {
                            Wm.g.Vc = 0;
                            Wm.g.sc = Q() - b;
                            var h = Yn(),
                                l = Cm.B();
                            l.h = h;
                            Dm(l, function() {
                                    Zn()
                                }) ? Wm.done || (bn(), Ck(l.g.g, a), Ym()) : d.h && "exc" !==
                                c.U ? Zn() : Ym()
                        } else fn = !0
                } catch (m) {
                    throw wm.reset(), m;
                }
            }
        },
        ao = function(a) {
            Wm.l.cancel();
            en = a;
            Wm.done = !0
        },
        bo = function(a) {
            var b = P.B();
            if (a.g) return a.g;
            var c = Cm.B().g;
            if (c) switch (c.getName()) {
                case "nis":
                    a.g = "n";
                    break;
                case "gsv":
                    a.g = "m"
            } else switch (b.U) {
                case "nis":
                    a.g = "n";
                    break;
                case "gsv":
                    a.g = "m"
            }
            a.g || (a.g = "h");
            return a.g
        },
        co = function(a, b, c) {
            if (null == a.h) return b.nb |= 4, !1;
            a = a.h.report(c, b);
            b.nb |= a;
            return 0 == a
        };
    Wn.prototype.bb = function(a) {
        switch (a.Fa()) {
            case 0:
                if (a = Cm.B().g) a = a.g, db(a.A, this), a.D && this.Ca() && Fk(a);
                Zn();
                break;
            case 2:
                Ym()
        }
    };
    Wn.prototype.Ua = function() {};
    Wn.prototype.Ca = function() {
        return !1
    };
    var Zn = function() {
        var a = [new Om(D)],
            b = Cm.B();
        b.h = a;
        Dm(b, function() {
            ao("i")
        }) ? Wm.done || (bn(), Ym()) : ao("i")
    };
    Wn.prototype.O = function(a, b) {
        a.Ga = !0;
        switch (a.wa()) {
            case 1:
                eo(this, a, b);
                break;
            case 2:
                this.Kc(a)
        }
        this.Mc(a)
    };
    var eo = function(a, b, c) {
        if (!b.md) {
            var d = hm(b, "start", lk());
            a = a.o.g(d).g;
            var e = {};
            e.r = c;
            e.v = "791v";
            ve(a, function(f, g) {
                return e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g)
            });
            c = gn();
            ve(c, function(f, g) {
                return e[f] = encodeURIComponent(g)
            });
            e.id = "lidarvf";
            c = "//pagead2.googlesyndication.com/pagead/gen_204?" + Qk(Ok(new Mk, e));
            Uk(c);
            b.md = !0
        }
    };
    k = Wn.prototype;
    k.ne = function(a) {
        em(a, 0);
        return hm(a, "start", lk())
    };
    k.kb = function(a, b, c) {
        Zm(Wm, [a], !lk());
        return this.Ma(a, b, c)
    };
    k.Ma = function(a, b, c) {
        return hm(a, c, lk())
    };
    k.ie = function(a) {
        return fo(a, "firstquartile", 1)
    };
    k.ke = function(a) {
        a.pb = !0;
        return fo(a, "midpoint", 2)
    };
    k.oe = function(a) {
        return fo(a, "thirdquartile", 3)
    };
    k.ge = function(a) {
        var b = fo(a, "complete", 4);
        0 != a.da && (a.da = 3);
        return b
    };
    var fo = function(a, b, c) {
        Zm(Wm, [a], !lk());
        em(a, c);
        4 != c && dm(a.O, c, a.Kb);
        return hm(a, b, lk())
    };
    k = Wn.prototype;
    k.Dd = function(a, b, c) {
        b = lk();
        if (2 == a.da && !b) {
            var d = Q();
            a.pa().G = d
        }
        Zm(Wm, [a], !b);
        2 == a.da && (a.da = 1);
        return hm(a, c, b)
    };
    k.me = function(a, b) {
        b = this.kb(a, b || {}, "skip");
        0 != a.da && (a.da = 3);
        return b
    };
    k.je = function(a, b) {
        ol(a, !0);
        return this.kb(a, b || {}, "fullscreen")
    };
    k.he = function(a, b) {
        ol(a, !1);
        return this.kb(a, b || {}, "exitfullscreen")
    };
    k.Hc = function(a, b, c) {
        b = a.pa();
        var d = Q();
        b.P = Nl(b, d, 1 != a.da);
        Zm(Wm, [a], !lk());
        1 == a.da && (a.da = 2);
        return hm(a, c, lk())
    };
    k.le = function(a) {
        Zm(Wm, [a], !lk());
        return a.h()
    };
    k.qc = function(a) {
        Zm(Wm, [a], !lk());
        this.Cd(a);
        0 != a.da && (a.da = 3);
        return a.h()
    };
    var go = function(a, b, c) {
            if (0 == b.da) {
                "i" != en && (Wm.done = !1);
                var d = Cm.B();
                null != d.g && ql(b, d.g);
                wl(b, function(e) {
                    for (var f = [], g = 0; g < arguments.length; ++g) f[g - 0] = arguments[g];
                    return a.O.apply(a, ca(f))
                });
                b.ka.Na && Rm.B();
                c = t(c) ? c.opt_nativeTime : void 0;
                Lj = c = Aa(c) ? c : Q();
                b.Jb = !0;
                d = lk();
                Vl(b, c, d);
                Zm(Wm, [b], !d)
            }
        },
        Vn = function(a) {
            cn(function() {
                var b = ho();
                null != a.g && (b.sdk = a.g);
                b.avms = P.B().U;
                return b
            })
        },
        io = function(a, b, c, d) {
            var e = um(wm, c);
            null !== e && e.ga !== b && (a.A(e), e = null);
            e || (b = a.K(c, Q(), !1, b), (c = Cm.B().g) && ql(b,
                c), b.Ub = Pa(a.D, a), 0 == wm.h.length && (P.B().h = 79463069), Bm([b]), Ym(), e = b, e.w = bo(a), d && (e.Oa = d));
            return e
        };
    Wn.prototype.D = function() {};
    var ko = function(a, b) {
        b.F = 0;
        for (var c in Sj) null == a[c] && (b.F |= Sj[c]);
        jo(a, "currentTime");
        jo(a, "duration")
    };
    k = Wn.prototype;
    k.Kc = function() {};
    k.Cd = function() {};
    k.ud = function() {};
    k.Mc = function() {};
    k.cd = function() {};
    var jo = function(a, b) {
            var c = a[b];
            t(c) && 0 < c && (a[b] = Math.floor(1E3 * c))
        },
        ho = function() {
            var a = R.B(),
                b = {};
            return b.sv = "791", b["if"] = a.h ? "1" : "0", b.nas = String(wm.g.length), b
        };
    var lo = {
            Dg: "visible",
            pg: "audible",
            uh: "time",
            wh: "timetype"
        },
        mo = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return "0" == a || "1" == a
            },
            timetype: function(a) {
                return "mtos" == a || "tos" == a
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        no = function() {
            this.g = void 0;
            this.h = !1;
            this.l = 0;
            this.o = -1;
            this.w = "tos"
        },
        oo = function(a) {
            try {
                var b = a.split(",");
                return b.length > zb(lo).length ? null : Ya(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (2 != d.length || !t(mo[d[0]]) ||
                        !mo[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        po = function(a, b) {
            if (void 0 == a.g) return 0;
            switch (a.w) {
                case "mtos":
                    return a.h ? fl(b.h, a.g) : fl(b.l, a.g);
                case "tos":
                    return a.h ? dl(b.h, a.g) : dl(b.l, a.g)
            }
            return 0
        };
    var qo = function(a, b, c, d) {
        Pl.call(this, b, d);
        this.C = a;
        this.A = c
    };
    p(qo, Pl);
    qo.prototype.getId = function() {
        return this.C
    };
    qo.prototype.w = function() {
        return !0
    };
    qo.prototype.l = function(a) {
        var b = a.pa(),
            c = a.getDuration();
        return Za(this.A, function(d) {
            if (void 0 != d.g) var e = po(d, b);
            else b: {
                switch (d.w) {
                    case "mtos":
                        e = d.h ? b.w.l : b.g.g;
                        break b;
                    case "tos":
                        e = d.h ? b.w.g : b.g.g;
                        break b
                }
                e = 0
            }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : t(c) && 0 < c ? d.o * c : -1, d = -1 != d && e >= d);
            return d
        })
    };
    var ro = y(),
        so = !1,
        to = !1,
        uo = !1,
        vo = function(a) {
            return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
        },
        wo = function(a) {
            return !!(1 << a & ro)
        },
        xo = [function(a) {
                return !(!a.chrome || !a.chrome.webstore)
            }, function(a) {
                return !!a.document.documentMode
            }, function(a) {
                return !!a.document.fonts.ready
            }, function() {
                return wo(0)
            }, function(a) {
                return !!a.ActiveXObject
            }, function(a) {
                return !!a.chrome
            }, function(a) {
                return !!a.navigator.serviceWorker
            },
            function(a) {
                return !!a.opera
            },
            function(a) {
                return !!a.sidebar
            },
            function() {
                return !+"\v1"
            },
            function() {
                return wo(1)
            },
            function(a) {
                return !a.ActiveXObject
            },
            function(a) {
                return "-ms-ime-align" in a.document.documentElement.style
            },
            function(a) {
                return "-ms-scroll-limit" in a.document.documentElement.style
            },
            function(a) {
                return "-webkit-font-feature-settings" in a.document.body.style
            },
            function() {
                return wo(2)
            },
            function(a) {
                return "ActiveXObject" in a
            },
            function(a) {
                return "MozAppearance" in a.document.documentElement.style
            },
            function(a) {
                return "_phantom" in
                    a
            },
            function(a) {
                return "callPhantom" in a
            },
            function(a) {
                return "content" in a.document.createElement("template")
            },
            function(a) {
                return "getEntriesByType" in a.performance
            },
            function() {
                return wo(3)
            },
            function(a) {
                return "image-rendering" in a.document.body.style
            },
            function(a) {
                return "object-fit" in a.document.body.style
            },
            function(a) {
                return "open" in a.document.createElement("details")
            },
            function(a) {
                return "orientation" in a.screen
            },
            function(a) {
                return "performance" in a
            },
            function(a) {
                return "shape-image-threshold" in a.document.body.style
            },
            function() {
                return wo(4)
            },
            function(a) {
                return "srcset" in a.document.createElement("img")
            },
            function() {
                return to
            },
            function() {
                return uo
            },
            function() {
                return wo(5)
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "-webkit-min-content";
                a.style.width = "min-content";
                return "1px" != a.style.width
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "calc(1px - 1px)";
                a.style.width = "-webkit-calc(1px - 1px)";
                return "1px" != a.style.width
            },
            function() {
                var a = !1;
                eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                try {
                    DummyFunction1()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = !1;
                try {
                    DummyFunction2()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                return !1
            },
            function() {
                return wo(6)
            },
            function(a) {
                var b = a.document.createElement("canvas");
                b.width = b.height = 1;
                b = b.getContext("2d");
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(0,255,255)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0, 0, 1, 1).data;
                return b[0] == b[2] && b[1] == b[3] || vo(a.navigator.vibrate)
            },
            function(a) {
                a =
                    a.document.createElement("canvas");
                a.width = a.height = 1;
                a = a.getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.fillStyle = "rgb(0,255,255)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = "rgb(255,255,0)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3]
            },
            function(a) {
                return vo(a.document.createElement("div").matches)
            },
            function(a) {
                a = a.document.createElement("input");
                a.setAttribute("type", "range");
                return "text" !== a.type
            },
            function(a) {
                return a.CSS.supports("image-rendering",
                    "pixelated")
            },
            function(a) {
                return a.CSS.supports("object-fit", "contain")
            },
            function() {
                return wo(7)
            },
            function(a) {
                return a.CSS.supports("object-fit", "inherit")
            },
            function(a) {
                return a.CSS.supports("shape-image-threshold", "0.9")
            },
            function(a) {
                return a.CSS.supports("word-break", "keep-all")
            },
            function() {
                return eval("1 == [for (item of [1,2,3]) item][0]")
            },
            function(a) {
                return vo(a.CSS.supports)
            },
            function() {
                return vo(Intl.Collator)
            },
            function(a) {
                return vo(a.document.createElement("dialog").show)
            },
            function() {
                return wo(8)
            },
            function(a) {
                return vo(a.document.createElement("div").animate([{
                    transform: "scale(1)",
                    easing: "ease-in"
                }, {
                    transform: "scale(1.3)",
                    easing: "ease-in"
                }], {
                    duration: 1300,
                    iterations: 1
                }).reverse)
            },
            function(a) {
                return vo(a.document.createElement("div").animate)
            },
            function(a) {
                return vo(a.document.documentElement.webkitRequestFullScreen)
            },
            function(a) {
                return vo(a.navigator.getBattery)
            },
            function(a) {
                return vo(a.navigator.permissions.query)
            },
            function() {
                return !1
            },
            function() {
                return wo(9)
            },
            function() {
                return vo(webkitRequestAnimationFrame)
            },
            function(a) {
                return vo(a.BroadcastChannel.call)
            },
            function(a) {
                return vo(a.FontFace)
            },
            function(a) {
                return vo(a.Gamepad)
            },
            function() {
                return wo(10)
            },
            function(a) {
                return vo(a.MutationEvent)
            },
            function(a) {
                return vo(a.MutationObserver)
            },
            function(a) {
                return vo(a.crypto.getRandomValues)
            },
            function(a) {
                return vo(a.document.body.createShadowRoot)
            },
            function(a) {
                return vo(a.document.body.webkitCreateShadowRoot)
            },
            function(a) {
                return vo(a.fetch)
            },
            function() {
                return wo(11)
            },
            function(a) {
                return vo(a.navigator.serviceWorker.register)
            },
            function(a) {
                return vo(a.navigator.webkitGetGamepads)
            },
            function(a) {
                return vo(a.speechSynthesis.speak)
            },
            function(a) {
                return vo(a.webkitRTCPeerConnection)
            },
            function(a) {
                return a.CSS.supports("--fake-var", "0")
            },
            function() {
                return wo(12)
            },
            function(a) {
                return a.CSS.supports("cursor", "grab")
            },
            function(a) {
                return a.CSS.supports("cursor", "zoom-in")
            },
            function(a) {
                return a.CSS.supports("image-orientation", "270deg")
            },
            function() {
                return wo(13)
            },
            function(a) {
                return a.CSS.supports("position", "sticky")
            },
            function(a) {
                return void 0 ===
                    a.document.createElement("style").scoped
            },
            function(a) {
                return a.performance.getEntriesByType("resource") instanceof Array
            },
            function() {
                return "undefined" == typeof InstallTrigger
            },
            function() {
                return "object" == typeof(new Intl.Collator).resolvedOptions()
            },
            function(a) {
                return "boolean" == typeof a.navigator.onLine
            },
            function() {
                return wo(14)
            },
            function(a) {
                return "undefined" == typeof a.navigator.Eh
            },
            function(a) {
                return "number" == typeof a.performance.now()
            },
            function() {
                return 0 == (new Uint16Array(1))[0]
            },
            function(a) {
                return -1 ==
                    a.ActiveXObject.toString().indexOf("native")
            },
            function(a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
            }
        ],
        yo = [function(a) {
                a = a.document.createElement("div");
                var b = null,
                    c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                try {
                    a.style.behavior = "url(#default#clientcaps)"
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                    try {
                        b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                    } catch (e) {}
                    if (b) return b.split(".")[0]
                }
                return !1
            },
            function() {
                return (new Date).getTimezoneOffset()
            },
            function(a) {
                return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
            },
            function(a) {
                return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
            },
            function(a) {
                return a.screen.availWidth / a.screen.availHeight
            },
            function(a) {
                return a.screen.width /
                    a.screen.height
            }
        ],
        zo = [function(a) {
            return a.navigator.userAgent
        }, function(a) {
            return a.navigator.platform
        }, function(a) {
            return a.navigator.vendor
        }],
        Bo = function() {
            try {
                Ao()
            } catch (d) {}
            var a = "a=1&b=" + ro + "&",
                b = [],
                c = 99;
            B(xo, function(d, e) {
                var f = !1;
                try {
                    f = d(D)
                } catch (g) {}
                b[e / 32 >>> 0] |= f << e % 32
            });
            B(b, function(d, e) {
                a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&"
            });
            c = 105;
            B(yo, function(d) {
                var e = "false";
                try {
                    e = d(D)
                } catch (f) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            B(zo, function(d) {
                var e = "";
                try {
                    var f = d(D);
                    d = [];
                    for (var g = 0, h = 0; h < f.length; h++) {
                        var l = f.charCodeAt(h);
                        255 < l && (d[g++] = l & 255, l >>= 8);
                        d[g++] = l
                    }
                    e = sd(d, 3)
                } catch (m) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            return a.slice(0, -1)
        },
        Ao = function() {
            if (!so) {
                var a = function() {
                    to = !0;
                    D.document.removeEventListener("webdriver-evaluate", a, !0)
                };
                D.document.addEventListener("webdriver-evaluate", a, !0);
                var b = function() {
                    uo = !0;
                    D.document.removeEventListener("webdriver-evaluate-response", b, !0)
                };
                D.document.addEventListener("webdriver-evaluate-response", b, !0);
                so = !0
            }
        };
    var Co = function() {
        this.h = 64;
        this.g = Array(4);
        this.w = Array(this.h);
        this.o = this.l = 0;
        this.reset()
    };
    A(Co, gi);
    Co.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.o = this.l = 0
    };
    var Do = function(a, b, c) {
            c || (c = 0);
            var d = Array(16);
            if ("string" === typeof b)
                for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
            else
                for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
            b = a.g[0];
            c = a.g[1];
            e = a.g[2];
            var f = a.g[3];
            var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>>
                15);
            g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
            f = b + (g << 12 & 4294967295 |
                g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
            b = c + (g << 7 & 4294967295 | g >>> 25);
            g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
            f = b + (g << 12 & 4294967295 | g >>> 20);
            g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
            e = f + (g << 17 & 4294967295 | g >>> 15);
            g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
            c = e + (g << 22 & 4294967295 | g >>> 10);
            g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
            b = c + (g <<
                5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
            c =
                e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
            b = c + (g << 5 & 4294967295 | g >>> 27);
            g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
            f = b + (g << 9 & 4294967295 | g >>> 23);
            g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
            e = f + (g << 14 & 4294967295 | g >>> 18);
            g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
            c = e + (g << 20 & 4294967295 | g >>> 12);
            g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
            f = b + (g << 11 & 4294967295 |
                g >>> 21);
            g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
            b = c + (g << 4 & 4294967295 | g >>> 28);
            g = f + (b ^ c ^ e) + d[12] +
                3873151461 & 4294967295;
            f = b + (g << 11 & 4294967295 | g >>> 21);
            g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
            e = f + (g << 16 & 4294967295 | g >>> 16);
            g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
            c = e + (g << 23 & 4294967295 | g >>> 9);
            g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
                4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
                4294967295;
            c = e + (g << 21 & 4294967295 | g >>> 11);
            g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
            b = c + (g << 6 & 4294967295 | g >>> 26);
            g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
            f = b + (g << 10 & 4294967295 | g >>> 22);
            g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
            e = f + (g << 15 & 4294967295 | g >>> 17);
            g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
            a.g[0] = a.g[0] + b & 4294967295;
            a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
            a.g[2] = a.g[2] + e & 4294967295;
            a.g[3] = a.g[3] + f & 4294967295
        },
        Eo = function(a, b) {
            if (void 0 === c) var c = b.length;
            for (var d = c - a.h, e = a.w,
                    f = a.l, g = 0; g < c;) {
                if (0 == f)
                    for (; g <= d;) Do(a, b, g), g += a.h;
                if ("string" === typeof b)
                    for (; g < c;) {
                        if (e[f++] = b.charCodeAt(g++), f == a.h) {
                            Do(a, e);
                            f = 0;
                            break
                        }
                    } else
                        for (; g < c;)
                            if (e[f++] = b[g++], f == a.h) {
                                Do(a, e);
                                f = 0;
                                break
                            }
            }
            a.l = f;
            a.o += c
        };
    var Fo = function() {
        this.h = null
    };
    p(Fo, Dn);
    Fo.prototype.g = function(a) {
        var b = Dn.prototype.g.call(this, a);
        var c = ro = y();
        var d = wo(5);
        c = (to ? !d : d) ? c | 2 : c & -3;
        d = wo(2);
        c = (uo ? !d : d) ? c | 8 : c & -9;
        c = {
            s1: (c >>> 0).toString(16)
        };
        this.h || (this.h = Bo());
        b.w = this.h;
        b.A = Cn(a, rn, c, "h", Go("kArwaWEsTs"));
        b.o = Cn(a, tn, {}, "h", Go("b96YPMzfnx"));
        b.h = Cn(a, un, {}, "h", Go("yb8Wev6QDg"));
        return b
    };
    var Go = function(a) {
        return function(b) {
            var c = new Co;
            Eo(c, b + a);
            var d = Array((56 > c.l ? c.h : 2 * c.h) - c.l);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b) d[b] = 0;
            var e = 8 * c.o;
            for (b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
            Eo(c, d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b)
                for (var f = 0; 32 > f; f += 8) d[e++] = c.g[b] >>> f & 255;
            return nb(d).slice(-8)
        }
    };
    var Ho = function(a, b) {
        this.h = a;
        this.l = b
    };
    Ho.prototype.report = function(a, b) {
        var c = this.g(b);
        if (x(c)) {
            var d = {};
            d = (d.sv = "791", d.cb = "j", d.e = Io(a), d);
            var e = hm(b, a, lk());
            Jb(d, e);
            b.td[a] = e;
            d = 2 == b.wa() ? Sk(d).join("&") : this.l.g(d).g;
            try {
                return c(b.ga, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var Io = function(a) {
        var b = xn(a) ? "custom_metric_viewable" : a;
        a = Eb(function(c) {
            return c == b
        });
        return Wj[a]
    };
    Ho.prototype.g = function() {
        return Ea(this.h)
    };
    var Jo = function(a, b, c) {
        Ho.call(this, a, b);
        this.o = c
    };
    p(Jo, Ho);
    Jo.prototype.g = function(a) {
        if (!a.Oa) return Ho.prototype.g.call(this, a);
        var b = this.o[a.Oa];
        if (b) return function(c, d, e) {
            Ko(b, c, d, e)
        };
        Gj(393, Error());
        return null
    };
    var Lo = function() {
        Wn.call(this);
        this.G = void 0;
        this.H = null;
        this.F = !1;
        this.w = {};
        this.M = 0;
        this.o = new Fo
    };
    p(Lo, Wn);
    Lo.prototype.C = function(a, b) {
        var c = this,
            d = P.B(),
            e = Cm.B();
        if (null != e.g) switch (e.g.getName()) {
            case "nis":
                var f = Mo(this, a, b);
                break;
            case "gsv":
                f = No(this, a, b)
        } else switch (d.U) {
            case "nis":
                f = Mo(this, a, b);
                break;
            case "gsv":
                f = No(this, a, b);
                break;
            case "exc":
                f = Oo(this, a)
        }
        f || (b.opt_overlayAdElement ? f = void 0 : b.opt_adElement ? f = io(this, a, b.opt_adElement, b.opt_osdId) : f = tm(wm, a) || void 0);
        f && 1 == f.wa() && (f.na == Fa && (f.na = function(g) {
            return c.ud(g)
        }), Po(this, f, b));
        return f
    };
    var Po = function(a, b, c) {
            c = c.opt_configurable_tracking_events;
            if (null != a.h && Ia(c)) {
                var d = a.h;
                Di(c);
                B(c, function(e) {
                    var f = Xa(e.Bh, function(g) {
                        var h = oo(g);
                        if (null == h) g = null;
                        else if (g = new no, null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
                            var l = "mtos" == h.timetype ? "mtos" : "tos",
                                m = Vb(h.time, "%") ? "%" : "ms";
                            h = parseInt(h.time, 10);
                            "%" == m && (h /= 100);
                            "ms" == m ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                            g.w = void 0 === l ? "tos" : l
                        }
                        return g
                    });
                    Za(f, function(g) {
                        return null == g
                    }) || $l(b, new qo(e.id, e.event,
                        f, d))
                })
            }
        },
        Qo = function() {
            var a = Cm.B().g,
                b = "";
            a && (b = a.getName());
            a = P.B();
            return "exc" === a.U || "nis" === a.U || "nis" === b
        };
    Lo.prototype.ud = function(a) {
        a.h = 0;
        a.P = 0;
        if ("h" == a.w || "n" == a.w) {
            if (Qo()) var b = Ea("ima.bridge.getVideoMetadata");
            else if (a.Oa && Ro(this)) {
                var c = this.w[a.Oa];
                c ? b = function(e) {
                    return So(c, e)
                } : null !== c && Gj(379, Error())
            } else b = Ea("ima.common.getVideoMetadata");
            if (x(b)) try {
                var d = b(a.ga)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2
        } else if ("b" == a.w)
            if (b = Ea("ytads.bulleit.getVideoMetadata"), x(b)) try {
                d = b(a.ga)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else if ("ml" == a.w)
            if (b = Ea("ima.common.getVideoMetadata"), x(b)) try {
                d = b(a.ga)
            } catch (e) {
                a.h |=
                    4
            } else a.h |= 2;
            else a.h |= 1;
        a.h || (t(d) ? null === d ? a.h |= 16 : Fb(d) ? a.h |= 32 : null != d.errorCode && (a.P = d.errorCode, a.h |= 64) : a.h |= 8);
        null != d || (d = {});
        ko(d, a);
        dk(d.volume) && dk(this.G) && (d.volume *= this.G);
        return d
    };
    var No = function(a, b, c) {
            var d = tm(wm, b);
            d || (d = c.opt_nativeTime || -1, d = Xn(a, b, bo(a), d), c.opt_osdId && (d.Oa = c.opt_osdId));
            return d
        },
        Mo = function(a, b, c) {
            var d = tm(wm, b);
            d || (d = Xn(a, b, "n", c.opt_nativeTime || -1), d.H = R.B().K);
            return d
        },
        Oo = function(a, b) {
            var c = tm(wm, b);
            c || (c = Xn(a, b, "h", -1));
            return c
        };
    Lo.prototype.cd = function() {
        if (Ro(this)) return new Jo("ima.common.triggerExternalActivityEvent", this.o, this.w);
        var a = To(this);
        return null != a ? new Ho(a, this.o) : null
    };
    var To = function(a) {
        var b = P.B();
        switch (bo(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
                if ("exc" == b.U) return "ima.bridge.triggerExternalActivityEvent";
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    Lo.prototype.Kc = function(a) {
        !a.g && a.Ga && co(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    Lo.prototype.Cd = function(a) {
        a.Fd && (a.Xa() ? co(this, a, "overlay_viewable_end_of_session_impression") : co(this, a, "overlay_unviewable_impression"), a.Fd = !1)
    };
    var Uo = function(a, b, c, d) {
            c = void 0 === c ? {} : c;
            var e = {};
            Jb(e, {
                opt_adElement: void 0,
                opt_fullscreen: void 0
            }, c);
            if (e.opt_bounds) return a.o.g(wn("ol", d));
            if (t(d))
                if (c = vn(d), t(c))
                    if (fn) b = wn("ue", d);
                    else if (b = a.C(b, e)) {
                b: {
                    $n(a);
                    "i" == en && (b.Ga = !0, a.Mc(b));c = e.opt_fullscreen;t(c) && ol(b, !!c);
                    var f;
                    if (c = !R.B().l && !hk()) lj(),
                    c = 0 === pg(Nd);
                    if (f = c) {
                        switch (b.wa()) {
                            case 1:
                                eo(a, b, "pv");
                                break;
                            case 2:
                                a.Kc(b)
                        }
                        ao("pv")
                    }
                    c = d.toLowerCase();!f && cb(Tj, c) && go(a, b, e);0 != b.da && cb(Uj, c) && (b.Ga || a.l || b.Qc());
                    (f = b.ab[c]) && Gl(b.ea, f);
                    switch (b.wa()) {
                        case 1:
                            var g = xn(c) ? a.I.custom_metric_viewable : a.I[c];
                            break;
                        case 2:
                            g = a.P[c]
                    }
                    if (g && (d = g.call(a, b, e, d), t(d))) {
                        e = wn(void 0, c);
                        Jb(e, d);
                        d = e;
                        break b
                    }
                    d = void 0
                }
                3 == b.da && a.A(b);b = d
            }
            else b = wn("nf", d);
            else b = void 0;
            else fn ? b = wn("ue") : (b = a.C(b, e)) ? (d = wn(), Jb(d, gm(b, !0, !1, !1)), b = d) : b = wn("nf");
            return ya(b) ? a.o.g(void 0) : a.o.g(b)
        },
        Vo = function(a, b, c) {
            a = R.B();
            if (a.K != b)
                if (a.K = b, a = Cm.B().g) Ek(a.g, !b);
                else {
                    var d = Za(wm.g, function(e) {
                        return e.ob
                    });
                    B(wm.g, function(e) {
                        if (!b && !d) {
                            var f = P.B().J;
                            ["imams", "gms",
                                "imar"
                            ].some(function(g) {
                                return 1 === Xi(f, g)
                            }) ? vl(e) : e.Ya = c
                        }
                        e.H = b;
                        e.ob = !1
                    })
                }
        };
    Lo.prototype.D = function(a) {
        this.l && 1 == a.wa() && Wo(this, a)
    };
    Lo.prototype.Mc = function(a) {
        this.l && 1 == a.wa() && Wo(this, a)
    };
    var Wo = function(a, b) {
            var c;
            if (b.Oa && Ro(a)) {
                var d = a.w[b.Oa];
                d ? c = function(f, g) {
                    Xo(d, f, g)
                } : null !== d && Gj(379, Error())
            } else c = Ea("ima.common.triggerViewabilityMeasurementUpdate");
            if (x(c)) {
                var e = bm(b);
                e.nativeVolume = a.G;
                c(b.ga, e)
            }
        },
        Yo = function(a, b, c) {
            a.w[b] = c
        },
        Ro = function(a) {
            return "exc" == P.B().U || "h" != bo(a) && "m" != bo(a) ? !1 : 0 != a.M
        };
    Lo.prototype.K = function(a, b, c, d) {
        a = Wn.prototype.K.call(this, a, b, c, d);
        this.F && (b = this.H, null == a.l && (a.l = new Bl), b.g[a.ga] = a.l, a.l.w = jm);
        return a
    };
    Lo.prototype.A = function(a) {
        a && 1 == a.wa() && this.F && delete this.H.g[a.ga];
        return Wn.prototype.A.call(this, a)
    };
    var Zo = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.l, b.moatInit = a.w, b.moatViewability = a.A, b.integralAdsViewability = a.o, b.doubleVerifyViewability = a.h, b
        },
        $o = function(a, b, c) {
            c = void 0 === c ? {} : c;
            a = Uo(Lo.B(), b, c, a);
            return Zo(a)
        };
    Ga(Lo);
    var ap = new An;
    ap.w = "stopped";
    ap.g = "stopped";
    ap.l = "stopped";
    ap.A = "stopped";
    ap.o = "stopped";
    ap.h = "stopped";
    Object.freeze(ap);
    var bp = Fj(193, $o, void 0, ho);
    w("Goog_AdSense_Lidar_sendVastEvent", bp, void 0);
    var cp = Fj(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = Uo(Lo.B(), a, b);
        return Zo(a)
    });
    w("Goog_AdSense_Lidar_getViewability", cp, void 0);
    var dp = Fj(195, function() {
        return oj()
    });
    w("Goog_AdSense_Lidar_getUrlSignalsArray", dp, void 0);
    var ep = Fj(196, function() {
        return Zf(oj())
    });
    w("Goog_AdSense_Lidar_getUrlSignalsList", ep, void 0);
    var fp = function(a, b) {
        this.h = {};
        this.g = [];
        this.o = this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof fp)
                for (c = a.Ba(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    fp.prototype.la = function() {
        gp(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    fp.prototype.Ba = function() {
        gp(this);
        return this.g.concat()
    };
    fp.prototype.isEmpty = function() {
        return 0 == this.l
    };
    fp.prototype.clear = function() {
        this.h = {};
        this.o = this.l = this.g.length = 0
    };
    var ip = function(a, b) {
            hp(a.h, b) && (delete a.h[b], a.l--, a.o++, a.g.length > 2 * a.l && gp(a))
        },
        gp = function(a) {
            if (a.l != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    hp(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.l != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], hp(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        };
    k = fp.prototype;
    k.get = function(a, b) {
        return hp(this.h, a) ? this.h[a] : b
    };
    k.set = function(a, b) {
        hp(this.h, a) || (this.l++, this.g.push(a), this.o++);
        this.h[a] = b
    };
    k.forEach = function(a, b) {
        for (var c = this.Ba(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new fp(this)
    };
    k.Eb = function(a) {
        gp(this);
        var b = 0,
            c = this.o,
            d = this,
            e = new yl;
        e.next = function() {
            if (c != d.o) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) throw xl;
            var f = d.g[b++];
            return a ? f : d.h[f]
        };
        return e
    };
    var hp = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var jp = function(a) {
            if (a.la && "function" == typeof a.la) return a.la();
            if ("string" === typeof a) return a.split("");
            if (Ja(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return yb(a)
        },
        kp = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (Ja(a) || "string" === typeof a) B(a, b, void 0);
            else {
                if (a.Ba && "function" == typeof a.Ba) var c = a.Ba();
                else if (a.la && "function" == typeof a.la) c = void 0;
                else if (Ja(a) || "string" === typeof a) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c =
                    zb(a);
                d = jp(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
    var lp = function(a, b) {
        this.g = this.C = this.o = "";
        this.G = null;
        this.w = this.l = "";
        this.A = !1;
        var c;
        a instanceof lp ? (this.A = void 0 !== b ? b : a.A, mp(this, a.o), this.C = a.C, this.g = a.g, np(this, a.G), this.l = a.l, op(this, a.h.clone()), this.w = a.w) : a && (c = String(a).match(ue)) ? (this.A = !!b, mp(this, c[1] || "", !0), this.C = pp(c[2] || ""), this.g = pp(c[3] || "", !0), np(this, c[4]), this.l = pp(c[5] || "", !0), op(this, c[6] || "", !0), this.w = pp(c[7] || "")) : (this.A = !!b, this.h = new qp(null, this.A))
    };
    lp.prototype.toString = function() {
        var a = [],
            b = this.o;
        b && a.push(rp(b, sp, !0), ":");
        var c = this.g;
        if (c || "file" == b) a.push("//"), (b = this.C) && a.push(rp(b, sp, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.G, null != c && a.push(":", String(c));
        if (c = this.l) this.g && "/" != c.charAt(0) && a.push("/"), a.push(rp(c, "/" == c.charAt(0) ? tp : up, !0));
        (c = this.h.toString()) && a.push("?", c);
        (c = this.w) && a.push("#", rp(c, vp));
        return a.join("")
    };
    lp.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.o;
        c ? mp(b, a.o) : c = !!a.C;
        c ? b.C = a.C : c = !!a.g;
        c ? b.g = a.g : c = null != a.G;
        var d = a.l;
        if (c) np(b, a.G);
        else if (c = !!a.l) {
            if ("/" != d.charAt(0))
                if (this.g && !this.l) d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/"); - 1 != e && (d = b.l.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length &&
                        "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.l = d : c = "" !== a.h.toString();
        c ? op(b, a.h.clone()) : c = !!a.w;
        c && (b.w = a.w);
        return b
    };
    lp.prototype.clone = function() {
        return new lp(this)
    };
    var mp = function(a, b, c) {
            a.o = c ? pp(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        },
        np = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.G = b
            } else a.G = null
        },
        op = function(a, b, c) {
            b instanceof qp ? (a.h = b, wp(a.h, a.A)) : (c || (b = rp(b, xp)), a.h = new qp(b, a.A))
        },
        yp = function(a, b, c) {
            a.h.set(b, c);
            return a
        },
        pp = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        rp = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, zp), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g,
                "%$1")), a) : null
        },
        zp = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        sp = /[#\/\?@]/g,
        up = /[#\?:]/g,
        tp = /[#\?]/g,
        xp = /[#\?@]/g,
        vp = /#/g,
        qp = function(a, b) {
            this.h = this.g = null;
            this.l = a || null;
            this.o = !!b
        },
        Ap = function(a) {
            a.g || (a.g = new fp, a.h = 0, a.l && ve(a.l, function(b, c) {
                a.add(Dc(b), c)
            }))
        };
    qp.prototype.add = function(a, b) {
        Ap(this);
        this.l = null;
        a = Bp(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    };
    var Cp = function(a, b) {
        Ap(a);
        b = Bp(a, b);
        hp(a.g.h, b) && (a.l = null, a.h -= a.g.get(b).length, ip(a.g, b))
    };
    qp.prototype.clear = function() {
        this.g = this.l = null;
        this.h = 0
    };
    qp.prototype.isEmpty = function() {
        Ap(this);
        return 0 == this.h
    };
    var Dp = function(a, b) {
        Ap(a);
        b = Bp(a, b);
        return hp(a.g.h, b)
    };
    k = qp.prototype;
    k.forEach = function(a, b) {
        Ap(this);
        this.g.forEach(function(c, d) {
            B(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.Ba = function() {
        Ap(this);
        for (var a = this.g.la(), b = this.g.Ba(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.la = function(a) {
        Ap(this);
        var b = [];
        if ("string" === typeof a) Dp(this, a) && (b = fb(b, this.g.get(Bp(this, a))));
        else {
            a = this.g.la();
            for (var c = 0; c < a.length; c++) b = fb(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        Ap(this);
        this.l = null;
        a = Bp(this, a);
        Dp(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.la(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = this.g.Ba(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.la(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    k.clone = function() {
        var a = new qp;
        a.l = this.l;
        this.g && (a.g = this.g.clone(), a.h = this.h);
        return a
    };
    var Bp = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        wp = function(a, b) {
            b && !a.o && (Ap(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (Cp(this, d), Cp(this, e), 0 < c.length && (this.l = null, this.g.set(Bp(this, e), gb(c)), this.h += c.length))
            }, a));
            a.o = b
        };
    var Ep = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        Fp = /\bocr\b/,
        Gp = 0,
        Hp = {},
        Jp = function(a) {
            if (Wb(Hc(a))) return !1;
            if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")) return !0;
            try {
                var b = new lp(a)
            } catch (c) {
                return null !=
                    ab(Ep, function(d) {
                        return 0 < a.search(d)
                    })
            }
            return b.w.match(Fp) ? !0 : null != ab(Ep, function(c) {
                return null != a.match(c)
            })
        },
        Np = function(a) {
            if (a && (a = Kp(a), !Wb(a))) {
                var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                Lp(function(c) {
                    Mp(c ? b : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                })
            }
        },
        Mp = function(a) {
            var b = je("IFRAME", {
                src: a,
                style: "display:none"
            });
            a = ae(b).body;
            var c = di(function() {
                sh(d);
                le(b)
            }, 15E3);
            var d = jh(b, ["load",
                "error"
            ], function() {
                di(function() {
                    q.clearTimeout(c);
                    le(b)
                }, 5E3)
            });
            a.appendChild(b)
        },
        Lp = function(a) {
            var b = Hp.imageLoadingEnabled;
            if (null != b) a(b);
            else {
                var c = !1;
                Op(function(d, e) {
                    delete Hp[e];
                    c || (c = !0, null != Hp.imageLoadingEnabled || (Hp.imageLoadingEnabled = d), a(d))
                })
            }
        },
        Op = function(a) {
            var b = new Image,
                c = "" + Gp++;
            Hp[c] = b;
            b.onload = function() {
                clearTimeout(d);
                a(!0, c)
            };
            var d = setTimeout(function() {
                a(!1, c)
            }, 300);
            b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        Pp = function(a) {
            if (a) {
                var b =
                    he(document, "OBJECT");
                b.data = a;
                b.width = "1";
                b.height = "1";
                b.style.visibility = "hidden";
                var c = "" + Gp++;
                Hp[c] = b;
                b.onload = b.onerror = function() {
                    delete Hp[c]
                };
                document.body.appendChild(b)
            }
        },
        Qp = function(a) {
            if (a) {
                var b = new Image,
                    c = "" + Gp++;
                Hp[c] = b;
                b.onload = b.onerror = function() {
                    delete Hp[c]
                };
                b.src = a
            }
        },
        Rp = function(a) {
            a && Lp(function(b) {
                b ? Qp(a) : Pp(a)
            })
        },
        Kp = function(a) {
            a instanceof lc || (a = "object" == typeof a && a.Va ? a.La() : String(a), nc.test(a) || (a = "about:invalid#zClosurez"), a = new lc(jc, a));
            var b = mc(a).toString();
            if ("about:invalid#zClosurez" ===
                b) return "";
            if (b instanceof xc) a = b;
            else {
                var c = "object" == typeof b;
                a = null;
                c && b.rc && (a = b.kc());
                b = fc(c && b.Va ? b.La() : String(b));
                a = zc(b, a)
            }
            a = yc(a).toString();
            return encodeURIComponent(String(Zf(a)))
        };
    var Sp = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var Tp = function(a) {
        var b = a.Ja,
            c = void 0 === a.za ? !1 : a.za;
        this.A = a.Pa;
        this.g = b;
        this.w = c
    };
    var Up = function(a) {
        var b = a.Kd,
            c = a.Xc,
            d = a.Jd,
            e = a.Wc;
        Tp.call(this, {
            Pa: a.Pa,
            Ja: a.Ja,
            height: a.height,
            width: a.width,
            za: void 0 === a.za ? !1 : a.za
        });
        this.o = b;
        this.l = c;
        this.C = d;
        this.h = e
    };
    p(Up, Tp);
    Up.prototype.getVideoUrl = function() {
        return this.o
    };
    var Vp = function(a) {
        var b = a.sd;
        Tp.call(this, {
            Pa: a.Pa,
            Ja: a.Ja,
            height: a.height,
            width: a.width,
            za: void 0 === a.za ? !1 : a.za
        });
        this.h = b
    };
    p(Vp, Tp);
    var Wp = function() {
        this.g = y()
    };
    Wp.prototype.reset = function() {
        this.g = y()
    };
    var Xp = function(a) {
        var b = y();
        a = a.g + 5E3 - b;
        return 0 < a ? a : 0
    };
    var Yp = ["*.youtu.be", "*.youtube.com"],
        Zp = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        $p = ["c.googlesyndication.com"],
        dq = function(a, b) {
            b = void 0 === b ? window.location.protocol : b;
            var c = !1;
            if (aq(a,
                    $p)) c = !1;
            else {
                var d;
                if (d = !bq(a))
                    if (null == a) d = !1;
                    else {
                        d = a;
                        if (bq(a)) b: {
                            try {
                                var e = new lp(a);
                                if ("gcache" == e.o) {
                                    var f = e.h.get("url");
                                    if (f && !Wb(Hc(f))) {
                                        d = f;
                                        break b
                                    }
                                }
                            } catch (g) {}
                            d = a
                        }
                        d = cq(d)
                    }
                d ? c = !0 : "https:" == b && aq(a, Zp) && (c = !0)
            }
            if (c) {
                b = new lp(a);
                if ("https" == b.o) return a;
                Dg(I.B(), "htp", "1");
                mp(b, "https");
                return b.toString()
            }
            return a
        },
        bq = function(a) {
            if (!a) return !1;
            try {
                var b = new lp(a);
                return "gcache" == b.o && !!b.h.get("url")
            } catch (c) {
                return !1
            }
        };

    function aq(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    }
    var cq = function(a) {
        try {
            var b = (new lp(a)).g;
            b = b.replace(/^www./i, "");
            return Yp.some(function(c) {
                return eq(c, b)
            })
        } catch (c) {
            return !1
        }
    };

    function eq(a, b) {
        if (Wb(Hc(b))) return !1;
        a = a.toLowerCase();
        b = b.toLowerCase();
        return "*." == a.substr(0, 2) ? (a = a.substr(2), a.length > b.length ? !1 : b.substr(-a.length) == a && (b.length == a.length || "." == b.charAt(b.length - a.length - 1))) : a == b
    };
    var fq = function(a) {
        return (a = a.exec(pc)) ? a[1] : ""
    };
    (function() {
        if (kd) return fq(/Firefox\/([0-9.]+)/);
        if (Tc || Uc || Sc) return hd;
        if (od) return Nc() ? fq(/CriOS\/([0-9.]+)/) : fq(/Chrome\/([0-9.]+)/);
        if (pd && !Nc()) return fq(/Version\/([0-9.]+)/);
        if (ld || md) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(pc);
            if (a) return a[1] + "." + a[2]
        } else if (nd) return (a = fq(/Android\s+([0-9.]+)/)) ? a : fq(/Version\/([0-9.]+)/);
        return ""
    })();
    var gq = /OS (\S+) like/,
        hq = /Android ([\d\.]+)/;

    function iq(a, b) {
        a = (a = a.exec(pc)) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= ic(a, b)
    }
    var jq = function(a) {
            return bd && iq(gq, a)
        },
        kq = function(a) {
            return (a = void 0 === a ? null : a) && x(a.getAttribute) ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var lq = function() {
            if (!Tc) return !1;
            try {
                return new ActiveXObject("MSXML2.DOMDocument"), !0
            } catch (a) {
                return !1
            }
        },
        mq = Tc && lq();
    var nq = function(a) {
        J.call(this);
        this.o = a;
        this.h = {}
    };
    A(nq, J);
    var oq = [];
    nq.prototype.R = function(a, b, c, d) {
        return pq(this, a, b, c, d)
    };
    var pq = function(a, b, c, d, e, f) {
            Ia(c) || (c && (oq[0] = c.toString()), c = oq);
            for (var g = 0; g < c.length; g++) {
                var h = kh(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
                if (!h) break;
                a.h[h.key] = h
            }
            return a
        },
        rq = function(a, b, c, d) {
            qq(a, b, c, d, void 0)
        },
        qq = function(a, b, c, d, e, f) {
            if (Ia(c))
                for (var g = 0; g < c.length; g++) qq(a, b, c[g], d, e, f);
            else(b = jh(b, c, d || a.handleEvent, e, f || a.o || a)) && (a.h[b.key] = b)
        };
    nq.prototype.Da = function(a, b, c, d, e) {
        if (Ia(b))
            for (var f = 0; f < b.length; f++) this.Da(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Ka(d) ? !!d.capture : !!d, e = e || this.o || this, c = lh(c), d = !!d, b = Zg(a) ? fh(a.o, String(b), c, d, e) : a ? (a = nh(a)) ? fh(a, b, c, d, e) : null : null, b && (sh(b), delete this.h[b.key])
    };
    var sq = function(a) {
        sb(a.h, function(b, c) {
            this.h.hasOwnProperty(c) && sh(b)
        }, a);
        a.h = {}
    };
    nq.prototype.T = function() {
        nq.sa.T.call(this);
        sq(this)
    };
    nq.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var tq = function() {};
    tq.prototype.g = null;
    tq.prototype.getOptions = function() {
        var a;
        (a = this.g) || (a = {}, uq(this) && (a[0] = !0, a[1] = !0), a = this.g = a);
        return a
    };
    var vq, wq = function() {};
    A(wq, tq);
    var xq = function(a) {
            return (a = uq(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        uq = function(a) {
            if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.h = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.h
        };
    vq = new wq;
    var yq = function(a) {
        K.call(this);
        this.headers = new fp;
        this.H = a || null;
        this.h = !1;
        this.F = this.g = null;
        this.N = "";
        this.w = 0;
        this.l = this.M = this.A = this.I = !1;
        this.D = 0;
        this.C = null;
        this.Z = "";
        this.O = this.P = !1
    };
    A(yq, K);
    var zq = /^https?$/i,
        Aq = ["POST", "PUT"],
        Bq = function(a, b) {
            a.D = Math.max(0, b)
        };
    yq.prototype.send = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.N + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.N = a;
        this.w = 0;
        this.I = !1;
        this.h = !0;
        this.g = this.H ? xq(this.H) : xq(vq);
        this.F = this.H ? this.H.getOptions() : vq.getOptions();
        this.g.onreadystatechange = Pa(this.Y, this);
        try {
            this.M = !0, this.g.open(b, String(a), !0), this.M = !1
        } catch (f) {
            Cq(this);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && kp(d, function(f, g) {
            e.set(g, f)
        });
        d = ab(e.Ba(), Dq);
        c = q.FormData &&
            a instanceof q.FormData;
        !cb(Aq, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.g.setRequestHeader(g, f)
        }, this);
        this.Z && (this.g.responseType = this.Z);
        "withCredentials" in this.g && this.g.withCredentials !== this.P && (this.g.withCredentials = this.P);
        try {
            Eq(this), 0 < this.D && ((this.O = Fq(this.g)) ? (this.g.timeout = this.D, this.g.ontimeout = Pa(this.V, this)) : this.C = di(this.V, this.D, this)), this.A = !0, this.g.send(a), this.A = !1
        } catch (f) {
            Cq(this)
        }
    };
    var Fq = function(a) {
            return Tc && id(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        Dq = function(a) {
            return "content-type" == a.toLowerCase()
        };
    yq.prototype.V = function() {
        "undefined" != typeof xa && this.g && (this.w = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var Cq = function(a) {
            a.h = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.w = 5;
            Gq(a);
            Hq(a)
        },
        Gq = function(a) {
            a.I || (a.I = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    yq.prototype.abort = function(a) {
        this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.w = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hq(this))
    };
    yq.prototype.T = function() {
        this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), Hq(this, !0));
        yq.sa.T.call(this)
    };
    yq.prototype.Y = function() {
        this.wb() || (this.M || this.A || this.l ? Iq(this) : this.$())
    };
    yq.prototype.$ = function() {
        Iq(this)
    };
    var Iq = function(a) {
            if (a.h && "undefined" != typeof xa && (!a.F[1] || 4 != Jq(a) || 2 != Kq(a)))
                if (a.A && 4 == Jq(a)) di(a.Y, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == Jq(a)) {
                a.h = !1;
                try {
                    var b = Kq(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.N).match(ue)[1] || null;
                            if (!f && q.self && q.self.location) {
                                var g = q.self.location.protocol;
                                f = g.substr(0, g.length - 1)
                            }
                            e = !zq.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.w = 6, Gq(a))
                } finally {
                    Hq(a)
                }
            }
        },
        Hq = function(a, b) {
            if (a.g) {
                Eq(a);
                var c = a.g,
                    d = a.F[0] ? Fa : null;
                a.g = null;
                a.F = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        Eq = function(a) {
            a.g && a.O && (a.g.ontimeout = null);
            a.C && (q.clearTimeout(a.C), a.C = null)
        };
    yq.prototype.uc = function() {
        return !!this.g
    };
    var Jq = function(a) {
            return a.g ? a.g.readyState : 0
        },
        Kq = function(a) {
            try {
                return 2 < Jq(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        Lq = function(a) {
            try {
                return a.g ? a.g.responseText : ""
            } catch (b) {
                return ""
            }
        },
        Mq = function(a, b) {
            if (a.g && 4 == Jq(a)) return a = a.g.getResponseHeader(b), null === a ? void 0 : a
        };
    var Nq = function() {};
    Nq.prototype.get = function(a, b) {
        return Oq(this, a, b)
    };
    var Oq = function(a, b, c) {
            return Pq(a, b, !0, c).then(function(d) {
                if (!(d instanceof Nh)) {
                    var e = new Nh(Fa);
                    Mh(e, 2, d);
                    d = e
                }
                return d
            }, function(d) {
                return d instanceof Error && 6 == d.message ? Pq(a, b, !1, c) : Rh(d)
            })
        },
        Pq = function(a, b, c, d) {
            var e = new yq;
            e.P = c;
            Bq(e, Xp(d));
            var f = new nq;
            return new Nh(function(g, h) {
                rq(f, e, "success", function() {
                    try {
                        var l = e.g ? e.g.responseXML : null
                    } catch (u) {
                        l = null
                    }
                    if (null == l)
                        if (l = Lq(e), "undefined" != typeof DOMParser) {
                            var m = new DOMParser;
                            qe();
                            l = zc(l, null);
                            l = m.parseFromString(yc(l), "application/xml")
                        } else if (mq) {
                        m =
                            new ActiveXObject("MSXML2.DOMDocument");
                        m.resolveExternals = !1;
                        m.validateOnParse = !1;
                        try {
                            m.setProperty("ProhibitDTD", !0), m.setProperty("MaxXMLSize", 2048), m.setProperty("MaxElementDepth", 256)
                        } catch (u) {}
                        m.loadXML(l);
                        l = m
                    } else throw Error("Your browser does not support loading xml documents");
                    m = Kg.Bb || Kg.g;
                    var n;
                    if (n = l) l && l.documentElement && "VAST" != !l.documentElement.nodeName ? (n = l.documentElement.getAttribute("version")) ? (n = parseInt(n, 10), n = null == n || isNaN(n) ? null : n) : n = null : n = null, n = null == n || 2 > n || 4 < n ? !1 :
                        !0;
                    if (!n && m) {
                        m = {
                            vastUrl: b.substring(0, 200),
                            responseText: Lq(e).substring(0, 200),
                            status: Kq(e),
                            contentType: Mq(e, "Content-Type"),
                            acao: Mq(e, "Access-Control-Allow-Origin"),
                            acac: Mq(e, "Access-Control-Allow-Credentials"),
                            origin: window.location.origin
                        };
                        n = I.B();
                        for (var v = ba(Object.keys(m)), r = v.next(); !r.done; r = v.next()) r = r.value, Dg(n, r, m[r])
                    }
                    g(l);
                    f.X();
                    e.X()
                });
                rq(f, e, ["error", "timeout"], function() {
                    h(Error(e.w));
                    f.X();
                    e.X()
                });
                e.send(dq(b), "GET", void 0)
            }, a)
        };
    var Qq = function(a) {
            var b = {};
            a.split(",").forEach(function(c) {
                var d = c.split("=");
                2 == d.length && (c = Xb(d[0]), d = Xb(d[1]), 0 < c.length && (b[c] = d))
            });
            return b
        },
        Rq = function(a) {
            var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
            if (!a) return null;
            a = a.toLowerCase().replace("-", "_");
            if (b.includes(a)) return a;
            a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
            return b.includes(a) ? a : null
        };
    var Sq = {
        qg: "autoplayDisallowed",
        rg: "beginFullscreen",
        sg: "canPlay",
        tg: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        zg: "end",
        Ag: "endFullscreen",
        Bg: "error",
        Fg: "focusSkipButton",
        Wg: "loadStart",
        LOADED: "loaded",
        Xg: "mediaLoadTimeout",
        Yg: "mediaPlaybackTimeout",
        fc: "pause",
        gh: "play",
        mh: "seeked",
        nh: "seeking",
        qh: "skip",
        rh: "skipShown",
        gc: "start",
        xh: "timeUpdate",
        vh: "timedMetadata",
        Wd: "volumeChange",
        Ah: "waiting"
    };
    var Tq = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        return new(Function.prototype.bind.apply(a, [null].concat(ca(c))))
    };
    var Uq = function() {
        Sd.set("GoogleAdServingTest", "Good");
        var a = "Good" == Sd.get("GoogleAdServingTest");
        a && (Sd.get("GoogleAdServingTest"), Sd.set("GoogleAdServingTest", "", 0, void 0, void 0));
        return a
    };
    var Vq = function() {};
    var Wq = function() {
        return !!window.MediaSource
    };
    var Xq = function(a, b, c) {
        var d = new Vq;
        this.url = a;
        this.mimeType = b;
        this.g = c;
        this.h = void 0 === d ? null : d
    };
    var Zq = function(a, b, c, d, e) {
        J.call(this);
        this.$ = a;
        this.F = new lp(b.url);
        this.h = c;
        this.l = e;
        this.H = b.g;
        this.Z = d;
        (this.I = b.h) || Cp(this.F.h, "alr");
        Dg(I.B(), "sl_dv" + this.l, (null != this.I).toString());
        this.M = !this.I;
        this.V = 0;
        this.g = new XMLHttpRequest;
        this.C = this.Y = this.A = this.o = 0;
        this.O = .1;
        this.w = [];
        this.D = !1;
        this.P = this.N = null;
        Yq(this)
    };
    p(Zq, J);
    var Yq = function(a) {
            a.N = kh(a.g, "load", function() {
                $q(a);
                if (a.M) {
                    var b = a.g.responseText;
                    a.D = !b || b.length < a.H;
                    a.C = 0;
                    Eg(I.B(), "sl_cc" + a.l + "-" + a.A);
                    a.A++;
                    ar(a)
                }
            });
            a.P = kh(a.g, "progress", function() {
                $q(a)
            });
            a.g.addEventListener("error", function() {
                Eg(I.B(), "sl_ec" + a.l + "-" + a.o)
            });
            a.h.addEventListener("updateend", function() {
                a.h.buffered.length && (a.Y = a.h.buffered.end(0), a.D && !a.h.updating && a.o == a.A && (Eg(I.B(), "sl_lc" + a.l), a.Z()))
            });
            a.h.addEventListener("update", function() {
                a.w.length && !a.h.updating && a.h.appendBuffer(a.w.shift())
            });
            a.h.addEventListener("error", function() {
                Eg(I.B(), "msb_err" + a.l)
            });
            br(a)
        },
        br = function(a) {
            Eg(I.B(), "sl_rc" + a.l + "-" + a.o);
            var b = a.o * a.H;
            b = yp(a.F, "range", b + "-" + (b + a.H - 1)).toString();
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.o++
        },
        $q = function(a) {
            if (!a.M) {
                var b = a.g.getResponseHeader("content-type");
                if (b && 0 <= b.indexOf("text/plain")) {
                    a.g.readyState == XMLHttpRequest.DONE && (a.F = new lp(a.g.response), a.o = 0, a.A = 0, a.V++, br(a));
                    return
                }
                a.M = !0;
                Eg(I.B(), "sl_redc" + a.l);
                Dg(I.B(), "sl_tr" + a.l, a.V.toString())
            }
            Cp(a.F.h, "alr");
            if (a.g.readyState == XMLHttpRequest.LOADING || a.g.readyState == XMLHttpRequest.DONE) {
                b = a.g.response;
                for (var c = new Uint8Array(b.length - a.C), d = 0; d < c.length; d++) c[d] = b.charCodeAt(d + a.C) & 255;
                a.C = b.length;
                b = c.buffer;
                0 < b.byteLength && (a.h.updating || a.w.length ? a.w.push(b) : a.h.appendBuffer(b))
            }
        },
        ar = function(a) {
            var b = a.A == a.o && !a.h.updating && !a.w.length;
            !a.D && b && a.$.currentTime >= a.O && (a.O = a.Y + .1, br(a))
        };
    Zq.prototype.T = function() {
        sh(this.N);
        sh(this.P);
        J.prototype.T.call(this)
    };
    var dr = function(a, b) {
        J.call(this);
        var c = this;
        this.A = a;
        this.D = b;
        this.h = new MediaSource;
        this.C = [];
        this.l = [];
        this.g = this.w = null;
        this.o = !1;
        this.h.addEventListener("sourceopen", function() {
            return cr(c)
        })
    };
    p(dr, J);
    var cr = function(a) {
        Eg(I.B(), "msmsw_oso");
        a.w = kh(a.A, "timeupdate", function() {
            if (!a.o)
                for (var e = ba(a.l), f = e.next(); !f.done; f = e.next()) ar(f.value)
        });
        for (var b = 0; b < a.D.length; b++) {
            var c = a.D[b];
            Dg(I.B(), "msmsw_mime" + b, c.mimeType);
            Dg(I.B(), "msmsw_cs" + b, c.mimeType);
            var d = a.h.addSourceBuffer(c.mimeType);
            d ? (a.C.push(d), c = Tq(Zq, a.A, c, d, function() {
                    a: if (!a.o) {
                        for (var e = ba(a.l), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, !f.D || f.h.updating || f.w.length) break a;
                        a.h.endOfStream();
                        a.o = !0;
                        sh(a.w)
                    }
                }, b), a.l.push(c)) :
                Eg(I.B(), "msmsw_sbf" + b)
        }
        Dg(I.B(), "msmsw_ns", a.C.length.toString())
    };
    dr.prototype.T = function() {
        this.g && window.URL.revokeObjectURL(this.g);
        for (var a = ba(this.l), b = a.next(); !b.done; b = a.next()) b.value.X();
        sh(this.w);
        J.prototype.T.call(this)
    };
    var er = function() {
        throw Error("Do not instantiate directly");
    };
    er.prototype.g = null;
    er.prototype.getContent = function() {
        return this.content
    };
    er.prototype.toString = function() {
        return this.content
    };
    var fr = function() {
        er.call(this)
    };
    A(fr, er);
    var gr = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.g = d);
            return c
        }
    }(fr);
    var hr = function() {
        if (window.MutationObserver) {
            var a = [];
            (new MutationObserver(function() {
                a.forEach(function(b) {
                    return b()
                });
                a = []
            })).observe(document.createTextNode(""), {
                characterData: !0
            })
        }
    };
    "function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || hr();
    var ir = function(a) {
        this.h = a
    };
    ir.prototype.g = function() {
        return this.h
    };
    var jr = function(a) {
        K.call(this);
        this.g = a || "goog_" + Ic++;
        this.l = []
    };
    A(jr, K);
    jr.prototype.h = !1;
    jr.prototype.connect = function() {
        for (this.h = !0; 0 != this.l.length;) {
            var a = this.l.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    };
    jr.prototype.send = function(a, b, c) {
        this.h ? this.sendMessage(a, b, c) : this.l.push({
            name: a,
            type: b,
            data: c
        })
    };
    var kr = function(a, b, c, d, e) {
        Vg.call(this, a);
        this.ca = b;
        this.fa = c;
        this.Mb = d;
        this.zd = e
    };
    A(kr, Vg);
    kr.prototype.toString = function() {
        return ""
    };
    var lr = function(a, b) {
        K.call(this);
        this.l = a;
        this.A = b;
        this.h = this.l.currentTime;
        this.g = new ci(250);
        Ug(this, this.g);
        this.w = new nq(this);
        Ug(this, this.w);
        pq(this.w, this.g, "tick", this.C, !1, this)
    };
    p(lr, K);
    lr.prototype.va = function() {
        return this.h
    };
    lr.prototype.start = function() {
        mr(this);
        this.g.start()
    };
    lr.prototype.stop = function() {
        this.g.stop()
    };
    lr.prototype.C = function() {
        var a = this.l.currentTime;
        a != this.va() && (this.h = a, mr(this))
    };
    var mr = function(a) {
        a.A.send("contentTimeUpdate", "contentTimeUpdate", {
            currentTime: a.va()
        })
    };
    var nr = function(a, b) {
        this.h = a;
        this.g = b
    };
    nr.prototype.o = function() {
        return this.h
    };
    nr.prototype.l = function() {
        return this.g
    };
    var or = function() {
        this.loadVideoTimeout = 8E3
    };
    k = or.prototype;
    k.autoAlign = !0;
    k.bitrate = -1;
    k.uiElements = null;
    k.disableClickThrough = !1;
    k.enablePreloading = !1;
    k.mimeTypes = null;
    k.restoreCustomPlaybackStateOnAdBreakComplete = !1;
    k.useLearnMoreButton = !1;
    k.useStyledLinearAds = !1;
    k.useStyledNonLinearAds = !1;
    k.playAdsAfterTime = -1;
    k.useVideoAdUi = !0;
    k.loadVideoTimeout = 8E3;
    k.disableUi = !1;
    var pr = function(a) {
            this.g = a
        },
        sr = function() {
            var a = qr();
            return rr(a, "disableExperiments")
        },
        rr = function(a, b) {
            return Bb(a.g, b) && (a = a.g[b], za(a)) ? a : !1
        },
        tr = function(a) {
            if (Bb(a.g, "forceExperimentIds")) {
                a = a.g.forceExperimentIds;
                var b = [],
                    c = 0;
                Ia(a) && a.forEach(function(d) {
                    Aa(d) && (b[c++] = d)
                });
                return b
            }
            return null
        };
    var S = function() {
            this.A = "always";
            this.K = 4;
            this.I = 1;
            this.g = 0;
            this.o = !0;
            this.h = !1;
            this.G = "en";
            this.O = !1;
            this.F = this.D = "";
            this.H = null;
            this.Z = this.P = -1;
            this.Y = this.N = this.M = "";
            this.l = !1;
            this.w = !0;
            try {
                this.ia = ij(void 0)[0]
            } catch (a) {}
        },
        ur = function(a) {
            a = Hc(a);
            Wb(a) || (a = a.substring(0, 20));
            return a
        };
    k = S.prototype;
    k.xf = function(a) {
        this.A = a
    };
    k.mf = function() {
        return this.A
    };
    k.Df = function(a) {
        this.K = a
    };
    k.rf = function() {
        return this.K
    };
    k.Gf = function(a) {
        this.V = a
    };
    k.uf = function() {
        return this.V
    };
    k.If = function(a) {
        za(a) && (this.I = a ? 1 : 0)
    };
    k.Jf = function(a) {
        this.I = a
    };
    k.wf = function(a) {
        this.o = a
    };
    k.vf = function() {
        return this.o
    };
    k.Hf = function(a) {
        this.h = a
    };
    k.Pf = function() {
        return this.h
    };
    k.Bf = function(a) {
        this.O = a
    };
    k.xb = function() {
        return this.O
    };
    k.Cf = function(a) {
        if (a = Rq(a)) this.G = a
    };
    k.ce = function() {
        return this.G
    };
    k.Ef = function(a) {
        this.D = ur(a)
    };
    k.sf = function() {
        return this.D
    };
    k.Ff = function(a) {
        this.F = ur(a)
    };
    k.tf = function() {
        return this.F
    };
    var qr = function() {
        var a = U;
        if (null == a.H) {
            var b = {};
            var c = (new lp(F().location.href)).h;
            if (Dp(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.H = new pr(b)
        }
        return a.H
    };
    S.prototype.$ = function(a) {
        this.P = a
    };
    S.prototype.aa = function(a) {
        this.Z = a
    };
    var xr = function() {
            var a = U;
            vr();
            a.M = wr[1] || ""
        },
        yr = function() {
            var a = U;
            vr();
            a.Y = wr[6] || ""
        },
        zr = function() {
            var a = U;
            vr();
            a.N = wr[4] || ""
        };
    k = S.prototype;
    k.zf = function(a) {
        this.l = a
    };
    k.nf = function() {
        return this.l
    };
    k.yf = function(a) {
        this.w = a
    };
    k.Af = function() {};
    k.qf = function() {
        return !0
    };
    var U = new S;
    var Ar = function(a, b, c) {
        this.l = b;
        this.h = c;
        this.o = a
    };
    A(Ar, Error);
    k = Ar.prototype;
    k.qe = function() {
        return this.g
    };
    k.re = function() {
        return this.l
    };
    k.pe = function() {
        return this.h
    };
    k.de = function() {
        return 1E3 > this.h ? this.h : 900
    };
    k.se = function() {
        return this.o
    };
    k.toString = function() {
        return "AdError " + this.h + ": " + this.l + (null != this.g ? " Caused by: " + this.g : "")
    };
    var Br = function(a) {
        if (null == a.errorCode || null == a.errorMessage || null == a.type) return null;
        for (var b = new Ar(a.type, a.errorMessage, a.errorCode), c = b, d = a.innerError, e = 0; 3 > e; ++e)
            if (d instanceof Object) {
                var f = new Ar(d.type, d.errorMessage, d.errorCode);
                c = c.g = f;
                d = d.innerError
            } else {
                null != d && (c.g = Error(a.innerError));
                break
            }
        return b
    };
    var Cr = function(a, b) {
        Vg.call(this, "adError");
        this.h = a;
        this.o = b ? b : null
    };
    A(Cr, Vg);
    Cr.prototype.w = function() {
        return this.h
    };
    Cr.prototype.A = function() {
        return this.o
    };
    var V = {},
        Dr = (V.creativeView = "creativeview", V.start = "start", V.midpoint = "midpoint", V.firstQuartile = "firstquartile", V.thirdQuartile = "thirdquartile", V.complete = "complete", V.mute = "mute", V.unmute = "unmute", V.pause = "pause", V.rewind = "rewind", V.resume = "resume", V.fullscreen = "fullscreen", V.exitFullscreen = "exitfullscreen", V.expand = "expand", V.collapse = "collapse", V.close = "close", V.acceptInvitation = "acceptinvitation", V.userInteraction = "userInteraction", V.adCanPlay = "adCanPlay", V.adStarted = "adStarted", V.abandon = "abandon",
            V.acceptInvitationLinear = "acceptinvitationlinear", V.engagedView = "engagedview", V.instreamAdComplete = "instreamAdComplete", V.skipShown = "skipshown", V.skippableStateChanged = "skippableStateChanged", V.skip = "skip", V.progress = "progress", V.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", V.annotation_start = "annotation_start", V.annotation_click = "annotation_click", V.annotation_close = "annotation_close", V.cta_annotation_shown = "cta_annotation_shown", V.cta_annotation_clicked = "cta_annotation_clicked", V.cta_annotation_closed =
            "cta_annotation_closed", V.replay = "replay", V.stop = "stop", V.autoplayDisallowed = "autoplayDisallowed", V.error = "error", V.mediaLoadTimeout = "mediaLoadTimeout", V.linearChanged = "linearChanged", V.click = "click", V.contentPauseRequested = "contentPauseRequested", V.contentResumeRequested = "contentResumeRequested", V.discardAdBreak = "discardAdBreak", V.updateAdsRenderingSettings = "updateAdsRenderingSettings", V.durationChange = "durationChange", V.expandedChanged = "expandedChanged", V.autoClose = "autoClose", V.userClose = "userClose",
            V.userRecall = "userRecall", V.prefetched = "prefetched", V.loaded = "loaded", V.init = "init", V.allAdsCompleted = "allAdsCompleted", V.adMetadata = "adMetadata", V.adBreakReady = "adBreakReady", V.adBreakFetchError = "adBreakFetchError", V.log = "log", V.volumeChange = "volumeChange", V.companionBackfill = "companionBackfill", V.companionInitialized = "companionInitialized", V.companionImpression = "companionImpression", V.companionClick = "companionClick", V.impression = "impression", V.interaction = "interaction", V.adProgress = "adProgress",
            V.adBuffering = "adBuffering", V.trackingUrlPinged = "trackingUrlPinged", V.measurable_impression = "measurable_impression", V.custom_metric_viewable = "custom_metric_viewable", V.viewable_impression = "viewable_impression", V.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", V.overlay_resize = "overlay_resize", V.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", V.overlay_unviewable_impression = "overlay_unviewable_impression", V.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", V.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", V.externalActivityEvent = "externalActivityEvent", V.adEvent = "adEvent", V.configure = "configure", V.remainingTime = "remainingTime", V.destroy = "destroy", V.resize = "resize", V.volume = "volume", V.sendAbandonUrls = "sendAbandonUrls", V.authorIconClicked = "videoAuthorIconClicked", V.authorNameClicked = "videoAuthorClicked", V.videoClicked = "videoClicked", V.videoIconClicked = "videoIconClicked", V.learnMoreClicked =
            "videoLearnMoreClicked", V.muteClicked = "videoMuteClicked", V.titleClicked = "videoTitleClicked", V.skipShown = "SKIP_SHOWN", V.videoSkipClicked = "SKIPPED", V.unmuteClicked = "videoUnmuteClicked", V.helpIconClicked = "whyThisAdIconClicked", V.vpaidEvent = "vpaidEvent", V.show_ad = "show_ad", V.video_card_endcap_collapse = "video_card_endcap_collapse", V.video_card_endcap_dismiss = "video_card_endcap_dismiss", V.video_card_endcap_impression = "video_card_endcap_impression", V.mediaUrlPinged = "mediaUrlPinged", V.breakstart = "breakstart",
            V.breakend = "breakend", V.omidReady = "omidReady", V.omidUnavailable = "omidUnavailable", V.omidAdSessionCompleted = "omidAdSessionCompleted", V.omidAdSessionAbandoned = "omidAdSessionAbandoned", V.verificationNotExecuted = "verificationNotExecuted", V.loadStart = "loadStart", V.seeked = "seeked", V.seeking = "seeking", V);
    var W = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        Vg.call(this, a);
        this.A = b;
        this.w = null != c ? c : null
    };
    A(W, Vg);
    W.prototype.C = function() {
        return this.A
    };
    W.prototype.G = function() {
        return this.w
    };
    var Er = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var Gr = function(a) {
            return U.xb() || Fr() && (!($c || jq(10) && U.l) || !a) || Yc && (!Yc || !iq(hq, 4)) || hk() ? !0 : !1
        },
        Hr = function(a) {
            return null == a ? !1 : U.h || U.xb() ? !0 : Fr() ? kq(a) ? $c || jq(10) && U.l ? !1 : !0 : !0 : Yc && (!Yc || !iq(hq, 4)) || hk() ? !0 : !1
        },
        Ir = function() {
            var a = qr();
            return a && rr(a, "disableOnScreenDetection") ? !1 : !fk()
        },
        Fr = function() {
            return bd || ($c || Xc && "ontouchstart" in document.documentElement) && !1
        };

    function Jr(a) {
        a = dq(a, fk() ? "https" : window.location.protocol);
        if (fk()) Kr(a);
        else try {
            a && (Jp(a) ? Np(a) : Rp(a))
        } catch (b) {}
    }

    function Kr(a) {
        (new Nq).get(a, new Wp).then(function() {}, function() {})
    };
    var Lr = function(a, b) {
            this.message = a;
            this.g = b
        },
        Mr = new Lr("Invalid usage of the API. Cause: {0}", 900),
        Nr = new Lr("Failed to initialize ad playback element before starting ad playback.", 400),
        Or = new Lr("The provided {0} information: {1} is invalid.", 1101),
        Pr = function(a, b, c) {
            var d = void 0 === b ? null : b;
            if (!(d instanceof Ar)) {
                var e = a.g,
                    f = a.message,
                    g = Array.prototype.slice.call(arguments, 2);
                if (0 < g.length)
                    for (var h = 0; h < g.length; h++) f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
                e = new Ar("adPlayError", f, e);
                e.g =
                    d;
                d = e
            }
            return d
        };
    var Qr = function(a, b, c) {
        this.l = a;
        this.g = Math.min(Math.max(b || 0, 0), 1);
        this.h = null != c ? c : !0
    };
    Qr.prototype.getId = function() {
        return this.l
    };
    var Rr = function(a) {
        this.l = a;
        this.h = new fp;
        this.g = null
    };
    Rr.prototype.getId = function() {
        return this.l
    };
    var Sr = function(a) {
        var b = Math.random(),
            c = 0,
            d = a.h.la();
        d.forEach(function(h) {
            c += h.g
        });
        var e = 1 < c ? c : 1;
        a.g = null;
        for (var f = 0, g = 0; g < d.length; ++g)
            if (f += d[g].g, f / e >= b) {
                a.g = d[g];
                break
            }
    };
    var Tr = function() {
        return null != q.G_testRunner
    };
    var Xr = function() {
            this.h = !1;
            this.g = new fp;
            Ur(this, "GvnExternalLayer", 31061774, .01);
            Ur(this, "GvnExternalLayer", 31061775, .01);
            Ur(this, "GvnExternalLayer", 651800007, .05);
            Ur(this, "GvnExternalLayer", 651800008, .05);
            Ur(this, "ActiveViewExternalLayer", 42530094, .05);
            Ur(this, "ActiveViewExternalLayer", 42530095, .05);
            Ur(this, "ActiveViewExternalLayer", 42530173, .01);
            Ur(this, "ActiveViewExternalLayer", 42530174, .01);
            Ur(this, "ActiveViewExternalLayer", 668123728, .01);
            Ur(this, "ActiveViewExternalLayer", 668123729, .01);
            Ur(this,
                "ActiveViewExternalLayer", 370204080, .001);
            Ur(this, "ActiveViewExternalLayer", 370204081, .001);
            Ur(this, "GvnExternalLayer", 504733015, 0);
            Ur(this, "GvnExternalLayer", 504733016, 0);
            Ur(this, "GvnExternalLayer", 40819802, .01);
            Ur(this, "GvnExternalLayer", 40819803, .01);
            Ur(this, "GvnExternalLayer", 420706136, .01);
            Ur(this, "GvnExternalLayer", 420706137, .01);
            Ur(this, "GvnExternalLayer", 420706138, .01);
            Ur(this, "GvnExternalLayer", 420706139, .01);
            Ur(this, "GvnExternalLayer", 420706140, .01);
            Ur(this, "GvnExternalLayer", 420706141,
                .01);
            Vr(this);
            var a = qr();
            a = tr(a);
            null != a && (this.h = !0, Wr(this, a.map(String)))
        },
        Yr = ["ActiveViewExternalLayer"],
        Zr = null,
        $r = function() {
            Zr || (Zr = new Xr);
            return Zr
        },
        Ur = function(a, b, c, d) {
            Wb(Hc(b)) || isNaN(c) || 0 >= c || (c = new Qr(c, d), as(a, b).h.set(c.getId(), c))
        },
        Vr = function(a) {
            sr() || a.g.la().forEach(function(b) {
                Sr(b)
            })
        },
        bs = function(a, b, c, d) {
            isNaN(b) || 0 >= b || Wb(Hc(c)) || (a.h = !0, d = null != d ? d : !0, as(a, c).g = new Qr(b, 0, d))
        },
        Wr = function(a, b) {
            b.forEach(function(c) {
                bs(a, Number(c), "FORCED_PUB_EXP_LAYER_" + c, void 0)
            })
        },
        cs = function() {
            var a = {};
            $r().g.la().forEach(function(b) {
                var c = b.g;
                if (c) {
                    var d = {};
                    d.experimentId = c.getId();
                    d.shouldReport = c.h;
                    a[b.getId()] = d
                } else a[b.getId()] = {}
            });
            return a
        },
        ds = function(a, b) {
            return a.h || (sr() ? 0 : !Tr()) ? a.g.la().some(function(c) {
                return !!c.g && c.g.getId() == b
            }) : !1
        },
        es = function() {
            var a = $r();
            if (!a.h && (sr() || Tr())) return "";
            var b = [];
            a.g.la().forEach(function(c) {
                (c = c.g) && c.h && b.push(c.getId())
            });
            a = lg();
            return b.concat(a).sort().join(",")
        },
        as = function(a, b) {
            var c = a.g.get(b);
            null == c && (c = new Rr(b), a.g.set(b, c));
            return c
        },
        fs = function() {
            var a = [319331041],
                b = $r();
            Yr.forEach(function(c) {
                (c = (c = as(b, c)) ? c.g : null) && a.push(c.getId())
            });
            return a
        };
    var is = function() {
            var a = "h.3.339.0";
            null != gs && (a += "/n." + gs, null != hs && (a += "/" + hs));
            return a
        },
        hs = null,
        js = null,
        gs = null;
    ds($r(), 504733016);
    var ks = null;
    var ls = function() {
        this.g = .01 > Math.random();
        this.h = Math.floor(4503599627370496 * Math.random())
    };
    ls.prototype.report = function(a, b, c) {
        if (!Tr() && (this.g || c)) {
            b = b || {};
            b.lid = a;
            b.sdkv = is();
            a = es();
            Wb(Hc(a)) || (b.e = a);
            b = ms(this, b);
            var d = new lp("http://pagead2.googlesyndication.com/pagead/gen_204");
            sb(b, function(e, f) {
                yp(d, f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            a = ns();
            mp(d, a.o);
            a = d.toString();
            b = d.h.get("url");
            null != b && sc() && 2083 < a.length && (a = os(d, b));
            Jr(a)
        }
    };
    var os = function(a, b) {
            yp(a, "url", "");
            try {
                var c = 2083 - a.toString().length - 1;
                if (0 >= c) return a.toString();
                for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
                yp(a, "url", d)
            } catch (g) {}
            return a.toString()
        },
        ms = function(a, b) {
            b.id = "ima_html5";
            var c = ns();
            b.c = a.h;
            b.domain = c.g;
            return b
        },
        ns = function() {
            var a = F(),
                b = document;
            return new lp(a.parent == a ? a.location.href : b.referrer)
        };
    Ga(ls);
    var ps = function() {
        K.call(this);
        this.C = this.H = this.M = this.D = !1;
        this.h = 0;
        this.w = [];
        this.F = !1;
        this.O = this.N = Infinity;
        this.l = 0;
        this.A = new nq(this);
        this.I = {}
    };
    p(ps, K);
    var rs = function(a, b) {
            null == b || a.D || (a.g = b, qs(a), a.D = !0)
        },
        us = function(a) {
            null != a.g && a.D && (ts(a), a.D = !1, a.H = !1, a.C = !1, a.h = 0, a.w = [], a.F = !1)
        },
        qs = function(a) {
            ts(a);
            !(a.g instanceof K) && "ontouchstart" in document.documentElement && bd ? (a.I = {
                touchstart: Pa(a.$, a),
                touchmove: Pa(a.Y, a),
                touchend: Pa(a.Z, a)
            }, sb(a.I, function(b, c) {
                this.g.addEventListener(c, b, !1)
            }, a)) : a.A.R(a.g, "click", a.V)
        },
        ts = function(a) {
            a.A.Da(a.g, "click", a.V);
            sb(a.I, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.I = {}
        };
    ps.prototype.$ = function(a) {
        this.H = !0;
        this.h = a.touches.length;
        this.l && (window.clearTimeout(this.l), this.l = 0, this.M = !0);
        (this.F = vs(this, a.touches) || 1 != a.touches.length) ? this.O = this.N = Infinity: (this.N = a.touches[0].clientX, this.O = a.touches[0].clientY);
        a = a.touches;
        this.w = [];
        for (var b = 0; b < a.length; b++) this.w.push(a[b].identifier)
    };
    ps.prototype.Y = function(a) {
        this.h = a.touches.length;
        if (!jq(8) || Math.pow(a.changedTouches[0].clientX - this.N, 2) + Math.pow(a.changedTouches[0].clientY - this.O, 2) > Math.pow(5, 2)) this.C = !0
    };
    ps.prototype.Z = function(a) {
        !this.H || 1 != this.h || this.C || this.M || this.F || !vs(this, a.changedTouches) || (this.l = window.setTimeout(Pa(this.P, this), 300));
        this.h = a.touches.length;
        0 == this.h && (this.C = this.H = !1, this.w = []);
        this.M = !1
    };
    ps.prototype.V = function() {
        this.P()
    };
    var vs = function(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a.w.includes(b[c].identifier)) return !0;
        return !1
    };
    ps.prototype.P = function() {
        this.l = 0;
        this.dispatchEvent(new Vg("click"))
    };
    ps.prototype.T = function() {
        us(this);
        this.A.X();
        this.A = null;
        K.prototype.T.call(this)
    };
    var ws = function(a, b) {
        jr.call(this, b);
        this.w = a;
        this.xa = null;
        this.A = new nq(this);
        this.A.R(F(), "message", this.C)
    };
    A(ws, jr);
    var xs = function(a) {
        if (null == a || !ya(a) || 0 != a.lastIndexOf("ima://", 0)) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    ws.prototype.sendMessage = function(a, b, c) {
        null != this.xa && null != this.xa.postMessage && this.xa.postMessage(ys(this, a, b, c), "*");
        null != this.xa && null == this.xa.postMessage && ls.B().report(11)
    };
    ws.prototype.T = function() {
        Tg(this.A);
        this.xa = null;
        ws.sa.T.call(this)
    };
    ws.prototype.C = function(a) {
        a = a.h;
        var b = xs(a.data);
        if (zs(this, b)) {
            if (null == this.xa) this.xa = a.source, this.h || this.connect();
            else if (this.xa != a.source) return;
            zs(this, b) && this.dispatchEvent(new kr(b.name, b.type, b.data || {}, b.sid, a.origin))
        }
    };
    var ys = function(a, b, c, d) {
            var e = {};
            e.name = b;
            e.type = c;
            null != d && (e.data = d);
            e.sid = a.g;
            e.channel = a.w;
            return "ima://" + Zf(e)
        },
        zs = function(a, b) {
            if (null == b) return !1;
            var c = b.channel;
            if (null == c || c != a.w) return !1;
            b = b.sid;
            return null == b || "*" != a.g && b != a.g ? !1 : !0
        };
    var As = function(a, b) {
        K.call(this);
        this.w = a;
        this.l = b;
        this.g = {};
        this.h = new nq(this);
        this.h.R(F(), "message", this.A)
    };
    A(As, K);
    As.prototype.send = function(a) {
        var b = a.h;
        this.g.hasOwnProperty(b) && this.g[b].send(a.type, a.ca, a.fa)
    };
    var Cs = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new ws(b, c), a.h.R(c, a.w, function(e) {
            this.dispatchEvent(new Bs(e.type, e.ca, e.fa, e.Mb, e.zd, b))
        }), c.xa = d, c.connect(), a.g[b] = c)
    };
    As.prototype.T = function() {
        this.h.X();
        for (var a in this.g) Tg(this.g[a]);
        As.sa.T.call(this)
    };
    As.prototype.A = function(a) {
        a = a.h;
        var b = xs(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.l && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                Cs(this, c, d, a.source);
                this.dispatchEvent(new Bs(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };
    var Bs = function(a, b, c, d, e, f) {
        kr.call(this, a, b, c, d, e);
        this.h = f
    };
    A(Bs, kr);
    var Es = function() {
        var a = Ea("google.ima.gptProxyInstance", F());
        if (null != a) return a;
        nq.call(this);
        this.l = new As("gpt", !0);
        Ug(this, this.l);
        this.R(this.l, "gpt", this.A);
        this.g = null;
        Ds() || F().top === F() || (this.g = new As("gpt", !1), Ug(this, this.g), this.R(this.g, "gpt", this.w))
    };
    A(Es, nq);
    var Ds = function() {
            return !!Ea("googletag.cmd", F())
        },
        Fs = function() {
            var a = Ea("googletag.console", F());
            return null != a ? a : null
        };
    Es.prototype.A = function(a) {
        var b = a.zd,
            c = "//imasdk.googleapis.com".match(ue);
        b = b.match(ue);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g) Cs(this.g, a.h, a.Mb, F().parent), null != this.g && this.g.send(a);
            else if (c = a.fa, null != c && t(c.scope)) {
            b = c.scope;
            c = c.args;
            var d;
            if ("proxy" == b) c = a.ca, "isGptPresent" == c ? d = Ds() : "isConsolePresent" == c && (d = null != Fs());
            else if (Ds())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.ca;
                    var e = F().googletag;
                    if (null != e && null != e[b] && (e = e[b](), null != e && (d = e[d], null != d))) try {
                        var f = d.apply(e, c)
                    } catch (g) {}
                    d =
                        f
                } else if ("console" == b) {
                if (f = Fs(), null != f && (e = f[a.ca], null != e)) try {
                    e.apply(f, c)
                } catch (g) {}
            } else if (null === b) {
                d = a.ca;
                f = F();
                if (["googleGetCompanionAdSlots", "googleSetCompanionAdContents"].includes(d) && (d = f[d], null != d)) try {
                    e = d.apply(f, c)
                } catch (g) {}
                d = e
            }
            t(d) && (a.fa.returnValue = d, this.l.send(a))
        }
    };
    Es.prototype.w = function(a) {
        this.l.send(a)
    };
    var Gs = function(a, b) {
        if (a.g) {
            var c = a.g;
            Tg(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, Tg(a.g[b]), delete a.g[b])
    };
    var Hs = Ub(Nb(Ob("http://pagead2.googlesyndication.com/omsdk/releases/live/omsdk-v1.js")));
    var Is = function(a, b) {
            if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
            if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string.");
            if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
        },
        Js = function(a, b) {
            if (null == b) throw Error("Value for " + a + " is undefined or null");
        },
        Ks = function(a, b) {
            if (null == b) throw Error(a + " must not be null or undefined.");
            if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
        };
    var Ls = function() {
            return /\d+\.\d+\.\d+(-.*)?/.test("1.2.19-google_20190912")
        },
        Ms = function() {
            for (var a = ["1", "2", "19"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
                var d = parseInt(a[c], 10),
                    e = parseInt(b[c], 10);
                if (d > e) break;
                else if (d < e) return !1
            }
            return !0
        };
    var Ns = {
        LOADED: "loaded",
        gc: "start",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        fc: "pause",
        Uc: "resume",
        Tc: "bufferStart",
        Sc: "bufferFinish",
        SKIPPED: "skipped",
        Wd: "volumeChange",
        hh: "playerStateChange",
        og: "adUserInteraction"
    };
    var Os = function(a, b, c, d) {
            this.h = a;
            this.method = b;
            this.version = c;
            this.g = d
        },
        Ps = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        Qs = function(a) {
            return new Os(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        },
        Rs = function(a) {
            var b = {};
            b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
            void 0 !== a.g && (b.omid_message_args = a.g);
            return b
        };
    var Ss = function(a) {
        this.h = a
    };

    function Ts(a, b) {
        return a && (a[b] || (a[b] = {}))
    }
    var Us = function(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(Ts, c)[a[a.length - 1]] = b
    };
    var Vs = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };
    var Ws = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var Xs = function(a) {
        this.h = a;
        this.handleExportedMessage = Xs.prototype.l.bind(this)
    };
    p(Xs, Ss);
    Xs.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(Rs(a), this)
    };
    Xs.prototype.l = function(a, b) {
        Ps(a) && this.g && this.g(Qs(a), b)
    };
    var Ys = eval("this"),
        Zs = function() {
            if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
            if ("undefined" !== typeof global && global) return global;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof Ys && Ys) return Ys;
            throw Error("Could not determine global object context.");
        }();
    var $s = function(a, b) {
        this.h = b = void 0 === b ? Zs : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                Ps(e) && d.source && c.g && c.g(Qs(e), d.source)
            }
        })
    };
    p($s, Ss);
    $s.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(Rs(a), "*")
    };
    var at = ["omid", "v1_SessionServiceCommunication"];

    function bt(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }
    var ct = function(a) {
        if (a === Zs) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };

    function dt(a) {
        return at.reduce(function(b, c) {
            return b && b[c]
        }, a)
    };
    Us("OmidSessionClient.Partner", function(a, b) {
        Is("Partner.name", a);
        Is("Partner.version", b);
        this.name = a;
        this.version = b
    });
    Us("OmidSessionClient.VerificationScriptResource", function(a, b, c) {
        Is("VerificationScriptResource.resourceUrl", a);
        this.h = a;
        this.l = b;
        this.g = c
    });
    Us("OmidSessionClient.Context", function(a, b) {
        Js("Context.partner", a);
        this.g = a;
        this.h = b
    });
    var et = {
            sessionError: "reportError"
        },
        ft = Object.keys(Ns).map(function(a) {
            return Ns[a]
        }),
        gt = ["impressionOccurred"],
        ht = function() {
            var a = void 0 === a ? Zs : a;
            this.g = a.omidSessionInterface
        };
    ht.prototype.sendMessage = function(a, b, c) {
        "registerSessionObserver" == a && (c = [b]);
        et[a] && (a = et[a]);
        b = this.g;
        0 <= gt.indexOf(a) && (b = b.adEvents);
        0 <= ft.indexOf(a) && (b = b.videoEvents);
        b = b[a];
        if (!b) throw Error("Unrecognized method name: " + a + ".");
        b.apply(null, ca(c))
    };
    var kt = function(a, b, c) {
            Js("AdSession.context", a);
            this.C = a;
            if (!b) {
                var d;
                "undefined" === typeof d && "undefined" !== typeof window && window && (d = window);
                d = bt(d) ? d : Zs;
                var e = void 0 === e ? Ws : e;
                a: {
                    b = ba([d, bt(d) ? d.top : Zs]);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        b: {
                            var g = d;f = f.value;
                            var h = e;
                            if (!ct(f)) try {
                                var l = dt(f);
                                if (l) {
                                    var m = new Xs(l);
                                    break b
                                }
                            } catch (n) {}
                            m = h(f) ? new $s(g, f) : null
                        }
                        if (g = m) {
                            b = g;
                            break a
                        }
                    }
                    b = null
                }
            }
            this.h = b;
            this.G = c || new ht;
            this.A = this.w = this.o = !1;
            this.l = {};
            this.h && (this.h.g = this.K.bind(this));
            this.g("setClientInfo",
                "1.2.19-google_20190912", this.C.g.name, this.C.g.version);
            it(this, a.h);
            jt(this)
        },
        lt = function(a, b) {
            a.sendMessage("registerSessionObserver", b)
        };
    kt.prototype.error = function(a, b) {
        this.g("sessionError", a, b)
    };
    kt.prototype.g = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.sendMessage.apply(this, [a, null].concat(ca(c)))
    };
    kt.prototype.sendMessage = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        if (this.h) e = Vs(), b && (this.l[e] = b), d = new Os(e, "SessionService." + a, "1.2.19-google_20190912", Ls() && Ms() ? d : JSON.stringify(d)), this.h.sendMessage(d);
        else if (null != this.G.g) try {
            this.G.sendMessage(a, b, d)
        } catch (f) {}
    };
    kt.prototype.K = function(a) {
        var b = a.h,
            c = a.g;
        "response" === a.method && this.l[b] && (a = Ls() && Ms() ? c ? c : [] : c && "string" === typeof c ? JSON.parse(c) : [], this.l[b].apply(this, a))
    };
    var it = function(a, b) {
            b && (b = b.map(function(c) {
                return {
                    resourceUrl: c.h,
                    vendorKey: c.l,
                    verificationParameters: c.g
                }
            }), a.g("injectVerificationScriptResources", b))
        },
        jt = function(a) {
            lt(a, function(b) {
                "sessionStart" === b.type && (a.A = !0);
                "sessionFinish" === b.type && (a.A = !1)
            })
        };
    Us("OmidSessionClient.AdSession", kt);
    var mt = function() {
        this.A = 1;
        this.l = -1;
        this.g = 1;
        this.w = this.o = 0;
        this.h = !1
    };
    k = mt.prototype;
    k.ye = function() {
        return this.A
    };
    k.ve = function() {
        return this.l
    };
    k.te = function() {
        return this.g
    };
    k.we = function() {
        return this.o
    };
    k.xe = function() {
        return this.w
    };
    k.ue = function() {
        return this.h
    };
    var nt = function() {
        K.call(this);
        this.g = new fp;
        this.h = null;
        this.l = new Map;
        this.w = new nq(this);
        Ug(this, this.w);
        this.D = new Map;
        this.C = null;
        this.A = -1;
        Ir()
    };
    A(nt, K);
    var ot = null,
        pt = function() {
            null == ot && (ot = new nt);
            return ot
        },
        qt = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            pt().dispatchEvent(new W("measurable_impression", null, c))
        },
        rt = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            pt().dispatchEvent(new W("viewable_impression", null, c))
        },
        tt = function(a, b, c) {
            var d = {};
            d.queryId = a;
            d.viewabilityString = b;
            d.eventName = c;
            pt().dispatchEvent(new W("externalActivityEvent", null, d))
        };
    nt.prototype.destroy = function() {
        this.w.Da(this.h, "activityMonitor", this.F);
        this.h = null
    };
    nt.prototype.F = function(a) {
        var b = a.fa;
        switch (a.ca) {
            case "appStateChanged":
                Vo(Lo.B(), b.appState, b.nativeTime);
                break;
            case "externalActivityEvent":
                tt(b.queryId, b.viewabilityString, b.eventName);
                break;
            case "measurableImpression":
                qt(b.queryId, b.viewabilityString);
                break;
            case "viewableImpression":
                rt(b.queryId, b.viewabilityString);
                break;
            case "engagementData":
                b = b.engagementString;
                pt().C = b;
                pt().A = y();
                break;
            case "viewability":
                a = b.queryId;
                var c = b.vastEvent;
                this.l.get(a) && "start" == c && this.l.get(a);
                a = b.eventId;
                window.clearTimeout(a);
                if (c = this.g.get(a)) ip(this.g, a), c(b.viewabilityData);
                break;
            case "viewabilityMeasurement":
                var d = Lo.B(),
                    e = b.queryId;
                b = b.viewabilityData;
                c = P.B();
                a = R.B();
                if ("exc" == c.U) {
                    d.G = b.nativeVolume;
                    c = b.exposure || 0;
                    var f = b.unmeasurable;
                    d = d.C(e, {});
                    null != b.presenceData && (null === d.l && (d.l = new Bl), Jb(d.l, b.presenceData)); - 1 == d.aa && (d.aa = Q(), d.od = d.pa().g.g);
                    d.$ += f ? 1 : 0;
                    d.gd++;
                    il(d.Fb, c, c, !1, 1, !1);
                    e = b.insideIframe;
                    t(e) && 0 == e && (a.h = !1);
                    d.Ga = f || d.Ga;
                    b.position && tl(d, D, a.h, new G(b.position.top, b.position.right,
                        b.position.bottom, b.position.left));
                    b.documentSize && (a.o = new E(b.documentSize.width, b.documentSize.height));
                    b.viewportSize && (a.g = new G(0, b.viewportSize.width, b.viewportSize.height, 0));
                    b = b.screenShare;
                    d.ba.W = Math.min(Math.max(c, 0), 1);
                    d.qd = d.ba.W;
                    d.ba.ha = Math.min(Math.max(b, 0), 1)
                }
                break;
            case "engagement":
                a = b.eventId, window.clearTimeout(a), c = this.g.get(a), ls.B().g && (d = -1, this.H && (d = y() - this.H), e = !1, c || (e = !0), Bb(b, "loggingId") && ls.B().report(43, {
                    step: "receivedResponse",
                    time: y(),
                    timeout: e,
                    logid: b.loggingId,
                    timediff: d
                })), c && (ip(this.g, a), c(b.engagementString))
        }
    };
    w("ima.bridge.getNativeViewability", function(a, b) {
        pt();
        b({})
    }, void 0);
    w("ima.bridge.getVideoMetadata", function(a) {
        return (a = pt().D.get(a)) ? a() : {}
    }, void 0);
    w("ima.bridge.triggerViewEvent", rt, void 0);
    w("ima.bridge.triggerMeasurableEvent", qt, void 0);
    w("ima.bridge.triggerExternalActivityEvent", tt, void 0);
    var ut = Tc ? Ub(Nb(Ob('javascript:""'))) : Ub(Nb(Ob("about:blank")));
    Tb(ut);
    var vt = Tc ? Ub(Nb(Ob('javascript:""'))) : Ub(Nb(Ob("javascript:undefined")));
    Tb(vt);
    var wt = function() {};
    wt.prototype.allowCustom = !0;
    var xt = {
            Sg: "Image",
            Eg: "Flash",
            Md: "All"
        },
        yt = {
            Pg: "Html",
            Qg: "IFrame",
            sh: "Static",
            Md: "All"
        },
        zt = {
            Rg: "IgnoreSize",
            oh: "SelectExactMatch",
            ph: "SelectNearMatch"
        },
        At = {
            xg: "DisallowResize",
            lh: "ResizeSmaller"
        };
    var Bt = !1,
        Ct = function(a) {
            if (a = a.match(/[\d]+/g)) a.length = 3
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Bt = !0, a.description)) {
                Ct(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Bt = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Bt = !(!a || !a.enabledPlugin))) {
            Ct(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                Bt = !0;
                Ct(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                Bt = !0;
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Bt = !0, Ct(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    var Dt = Bt;
    var Ft = function(a, b) {
            b = void 0 === b ? null : b;
            if (null == a || 0 >= a.width || 0 >= a.height) throw Pr(Or, null, "ad slot size", a.toString());
            this.h = a;
            this.g = null != b ? b : new wt;
            this.w = Et(yt, this.g.resourceType) ? this.g.resourceType : "All";
            this.o = Et(xt, this.g.creativeType) ? this.g.creativeType : "All";
            this.C = Et(zt, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
            this.G = Et(At, this.g.g) ? this.g.g : "DisallowResize";
            this.l = null != this.g.adSlotIds ? this.g.adSlotIds : [];
            this.A = Aa(this.g.nearMatchPercent) && 0 < this.g.nearMatchPercent &&
                100 >= this.g.nearMatchPercent ? this.g.nearMatchPercent : 90
        },
        It = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.g.allowCustom && (!Wb(d.g) && (isNaN(d.A) || isNaN(d.o) || d.o == d.A) && Gt(a, d) ? c.push(d) : (d = Ht(a, d), null != d && !Wb(d.g) && c.push(d)))
            });
            return c
        },
        Gt = function(a, b) {
            var c;
            if (c = "Flash" != b.h || Dt) {
                if (c = "All" == a.w || a.w == b.D) c = b.h, c = null == c ? !0 : "All" == a.o || a.o == c;
                c && (c = b.F, c = 0 == a.l.length ? !0 : null != c ? a.l.includes(c) : !1)
            }
            if (c)
                if (b = b.l, (c = "IgnoreSize" == a.C) || (c = a.h, c = c == b ? !0 : c && b ? c.width == b.width && c.height == b.height :
                        !1), c) a = !0;
                else {
                    if (c = "SelectNearMatch" == a.C) "ResizeSmaller" == a.G ? (b.width <= a.h.width && b.height <= a.h.height || (c = a.h, c = Math.min(c.width / b.width, c.height / b.height), b = new E(c * b.width, c * b.height)), c = b.width, b = b.height) : (c = b.width, b = b.height), c = c > a.h.width || b > a.h.height || c < a.A / 100 * a.h.width || b < a.A / 100 * a.h.height ? !1 : !0;
                    a = c
                }
            else a = !1;
            return a
        },
        Ht = function(a, b) {
            b = b.w;
            return null == b ? null : b.find(function(c) {
                return Gt(a, c)
            }) || null
        },
        Et = function(a, b) {
            return null != b && Cb(a, b)
        };
    var Jt = function(a) {
        this.g = a.content;
        this.h = a.contentType;
        this.l = a.size;
        this.o = a.masterSequenceNumber;
        this.D = a.resourceType;
        this.A = a.sequenceNumber;
        this.F = a.adSlotId;
        this.w = [];
        a = a.backupCompanions;
        null != a && (this.w = a.map(function(b) {
            return new Jt(b)
        }))
    };
    Jt.prototype.getContent = function() {
        return this.g
    };
    Jt.prototype.C = function() {
        return this.h
    };
    Jt.prototype.K = function() {
        return this.l.width
    };
    Jt.prototype.G = function() {
        return this.l.height
    };
    var X = function(a) {
        this.g = a
    };
    X.prototype.h = function() {
        return this.g.adId
    };
    X.prototype.l = function() {
        return this.g.creativeAdId
    };
    X.prototype.o = function() {
        return this.g.creativeId
    };
    var Kt = function(a) {
        return a.g.adQueryId
    };
    k = X.prototype;
    k.Ae = function() {
        return this.g.adSystem
    };
    k.Be = function() {
        return this.g.advertiserName
    };
    k.Ce = function() {
        return this.g.apiFramework
    };
    k.Xe = function() {
        return this.g.adWrapperIds
    };
    k.Ze = function() {
        return this.g.adWrapperCreativeIds
    };
    k.Ye = function() {
        return this.g.adWrapperSystems
    };
    k.isLinear = function() {
        return this.g.linear
    };
    k.$e = function() {
        return this.g.skippable
    };
    k.Ee = function() {
        return this.g.contentType
    };
    k.Ge = function() {
        return this.g.description
    };
    k.Me = function() {
        return this.g.title
    };
    k.getDuration = function() {
        return this.g.duration
    };
    k.Ve = function() {
        return this.g.vastMediaWidth
    };
    k.Ue = function() {
        return this.g.vastMediaHeight
    };
    k.We = function() {
        return this.g.width
    };
    k.He = function() {
        return this.g.height
    };
    k.Pe = function() {
        return this.g.uiElements
    };
    k.Je = function() {
        return this.g.minSuggestedDuration
    };
    k.ze = function() {
        var a = this.g.adPodInfo,
            b = new mt;
        b.o = a.podIndex;
        b.w = a.timeOffset;
        b.A = a.totalAds;
        b.g = a.adPosition;
        b.h = a.isBumper;
        b.l = a.maxDuration;
        return b
    };
    k.De = function(a, b, c) {
        var d = this.g.companions.map(function(e) {
            return new Jt(e)
        });
        return It(new Ft(new E(a, b), c), d)
    };
    k.Ne = function() {
        return Qq(Hc(this.g.traffickingParameters))
    };
    k.Oe = function() {
        return this.g.traffickingParameters
    };
    k.Te = function() {
        return this.g.vastMediaBitrate
    };
    k.Ie = function() {
        return this.g.mediaUrl
    };
    k.Le = function() {
        return this.g.surveyUrl
    };
    k.Fe = function() {
        return this.g.dealId
    };
    k.Se = function() {
        return (this.g.universalAdIds || []).map(function(a) {
            return new nr(a.adIdValue, a.adIdRegistry)
        })
    };
    k.Re = function() {
        return this.g.universalAdIdValue
    };
    k.Qe = function() {
        return this.g.universalAdIdRegistry
    };
    k.Ke = function() {
        return this.g.skipTimeOffset
    };
    k.af = function() {
        return this.g.disableUi
    };
    var Lt = function() {
            K.call(this);
            this.g = null;
            this.D = new nq(this);
            Ug(this, this.D);
            this.h = new Map;
            this.w = new Map;
            this.l = this.A = !1;
            this.C = null
        },
        Mt;
    A(Lt, K);
    var Nt = null,
        Ot = function() {
            null == Nt && (Nt = new Lt);
            return Nt
        };
    Lt.prototype.Qc = function(a, b) {
        var c = {};
        c.queryId = a;
        c.viewabilityString = b;
        this.g ? this.g.send("activityMonitor", "measurableImpression", c) : this.dispatchEvent(new W("measurable_impression", null, c))
    };
    var Xo = function(a, b, c) {
            var d = {};
            d.queryId = b;
            d.viewabilityData = c;
            a.g && a.g.send("activityMonitor", "viewabilityMeasurement", d)
        },
        Ko = function(a, b, c, d) {
            var e = {};
            e.queryId = b;
            e.viewabilityString = c;
            e.eventName = d;
            a.g ? a.g.send("activityMonitor", "externalActivityEvent", e) : a.dispatchEvent(new W("externalActivityEvent", null, e))
        };
    Lt.prototype.destroy = function() {
        this.D.Da(this.g, "activityMonitor", this.F);
        this.l = !1;
        this.h.clear();
        this === Mt && (Mt = null)
    };
    Lt.prototype.T = function() {
        this.destroy();
        Lt.sa.T.call(this)
    };
    var Qt = function(a) {
            if (null == a) return !1;
            if ((Zc || ad) && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            var b = window.screen.availWidth || window.screen.width,
                c = window.screen.availHeight || window.screen.height;
            a = Pt(a);
            return 0 >= b - a.width && 42 >= c - a.height
        },
        Pt = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                x(a.getBoundingClientRect) && ne(ae(a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        Rt = function(a, b, c, d, e) {
            if (a.l) {
                e = e || {};
                d && null == e.opt_osdId && (e.opt_osdId = d);
                if (a.C) return a.C(b, c, e);
                if (a = d ? a.w.get(d) : U.C) null == e.opt_fullscreen && (e.opt_fullscreen = Qt(a)), null == e.opt_adElement && (e.opt_adElement = a);
                return Pf.Za(469, Qa($o, b, c, e), void 0) || {}
            }
            return {}
        },
        St = function(a, b) {
            var c = $r(),
                d = String(Math.floor(1E9 * Math.random()));
            a.w.set(d, b);
            if (ds(c, 31061775)) try {
                xi(function(e) {
                    if (a.g) {
                        var f = {};
                        f.engagementString = e;
                        a.g.send("activityMonitor", "engagementData", f)
                    }
                }, function() {
                    return b
                })
            } catch (e) {}
            0 != U.g && Yo(Lo.B(), d, a);
            return d
        },
        Tt =
        function(a, b, c) {
            if (c) a.h.get(c) == b && a.h["delete"](c);
            else {
                var d = [];
                a.h.forEach(function(e, f) {
                    e == b && d.push(f)
                });
                d.forEach(a.h["delete"], a.h)
            }
        },
        So = function(a, b) {
            a = a.h.get(b);
            return x(a) ? a() : {}
        },
        Ut = function(a) {
            if (x(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                a.g.send("activityMonitor", "pageSignals", b)
            }
        };
    Lt.prototype.F = function(a) {
        var b = a.fa,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.ca) {
            case "getPageSignals":
                Ut(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = Rt(this, e, c, a, f);
                this.g.send("activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, Bb(b, "isFullscreen") && (e = b.isFullscreen), Bb(b, "loggingId") && (b = b.loggingId, c.loggingId = b, ls.B().report(43, {
                    step: "beforeLookup",
                    logid: b,
                    time: y()
                })), c.engagementString = Vt(this, a, e), this.g && this.g.send("activityMonitor", "engagement", c)
        }
    };
    var Vt = function(a, b, c) {
        var d = b ? a.w.get(b) : U.C;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = wi(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + Fc(e.name, 12) + ";" + Fc(e.message, 40)
        }
        return c
    };
    w("ima.common.getVideoMetadata", function(a) {
        return So(Ot(), a)
    }, void 0);
    w("ima.common.triggerViewEvent", function(a, b) {
        var c = Ot(),
            d = {};
        d.queryId = a;
        d.viewabilityString = b;
        c.g ? c.g.send("activityMonitor", "viewableImpression", d) : c.dispatchEvent(new W("viewable_impression", null, d))
    }, void 0);
    w("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        Xo(Ot(), a, b)
    }, void 0);
    w("ima.common.triggerMeasurableEvent", function(a, b) {
        Ot().Qc(a, b)
    }, void 0);
    w("ima.common.triggerExternalActivityEvent", function(a, b, c) {
        Ko(Ot(), a, b, c)
    }, void 0);
    Ot();
    Object.entries({
        "application/dash+xml": 1,
        "application/x-javascript": 2,
        "application/x-mpegurl": 3,
        "application/javascript": 4,
        "audio/ogg": 5,
        "audio/mp4": 6,
        "audio/mpeg": 7,
        "audio/wav": 8,
        "text/javascript": 9,
        "video/m4v": 10,
        "video/ogg": 11,
        "video/x-flv": 12,
        "video/3gpp": 13,
        "video/mpt2": 14,
        "video/mp4": 15,
        "video/mpeg": 16,
        "video/quicktime": 17,
        "video/webm": 18
    });
    Us("OmidSessionClient.AdEvents", function(a) {
        Js("AdEvents.adSession", a);
        try {
            if (a.o) throw Error("AdEvents already registered.");
            a.o = !0;
            a.g("registerAdEvents")
        } catch (b) {
            throw Error("AdSession already has an ad events instance registered");
        }
    });
    var Wt = function(a) {
        Js("VideoEvents.adSession", a);
        try {
            if (a.w) throw Error("VideoEvents already registered.");
            a.w = !0;
            a.g("registerVideoEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has a video events instance registered");
        }
    };
    Wt.prototype.loaded = function(a) {
        Js("VideoEvents.loaded.vastProperties", a);
        this.g.g("loaded", a)
    };
    Wt.prototype.start = function(a, b) {
        Ks("VideoEvents.start.duration", a);
        Ks("VideoEvents.start.videoPlayerVolume", b);
        if (0 > b || 1 < b) throw Error("Value for VideoEvents.start.videoPlayerVolume is outside the range [0,1]");
        this.g.g("start", a, b)
    };
    Wt.prototype.pause = function() {
        this.g.g("pause")
    };
    Wt.prototype.resume = function() {
        this.g.g("resume")
    };
    Us("OmidSessionClient.VideoEvents", Wt);
    var Xt = Vc || Wc || Tc && id(11) || Uc,
        au = function(a, b) {
            Yt ? a.srcdoc = b : Xt ? (a = a.contentWindow) && Zt(a.document, b) : $t(a, b)
        },
        Yt = Wc && "srcdoc" in he(document, "IFRAME"),
        Zt = function(a, b) {
            a.open("text/html", "replace");
            a.write(b);
            a.close()
        },
        $t = function(a, b) {
            Tc && id(7) && !id(10) && 6 > bu() && cu(b) && (b = du(b));
            var c = function() {
                    var f = a.contentWindow;
                    f && (f.goog_content = b, f.location.replace("javascript:window.goog_content"))
                },
                d;
            if (d = Tc) {
                try {
                    var e = ye(a.contentWindow)
                } catch (f) {
                    e = !1
                }
                d = !e
            }
            d ? eu(a, c) : c()
        },
        bu = function() {
            var a = navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);
            return a ? parseFloat(a[1]) : 0
        },
        fu = 0,
        eu = function(a, b) {
            var c = "goog_rendering_callback" + fu++;
            q[c] = b;
            a.src = "javascript:'<script>(function() {document.domain = \"" + document.domain + '";var continuation = window.parent.' + c + ";window.parent." + c + " = null;continuation();})()\x3c/script>'"
        },
        cu = function(a) {
            for (var b = 0; b < a.length; ++b)
                if (127 < a.charCodeAt(b)) return !0;
            return !1
        },
        du = function(a) {
            a = unescape(encodeURIComponent(a));
            for (var b = Math.floor(a.length / 2), c = [], d = 0; d < b; ++d) c[d] = String.fromCharCode(256 * a.charCodeAt(2 *
                d + 1) + a.charCodeAt(2 * d));
            1 == a.length % 2 && (c[b] = a.charAt(a.length - 1));
            return c.join("")
        };

    function gu(a) {
        return (a = oe(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }

    function hu(a, b) {
        var c = je("IFRAME", {
            name: b,
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none"
        });
        a.appendChild(c);
        a = "<script src=" + Hs.La() + ">\x3c/script>";
        b = new Promise(function(d, e) {
            c.addEventListener("load", function() {
                gu(c) ? d(c) : e()
            })
        });
        au(c, a);
        return b
    };
    var iu = function(a, b) {
        K.call(this);
        this.h = gu(a);
        this.g = b
    };
    p(iu, K);
    var ku = function(a) {
            try {
                a.h.registerSessionObserver(function(b) {
                    "sessionStart" == b.type ? ju(a, a.g) : "sessionFinish" == b.type && ku(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        ju = function(a, b) {
            try {
                a.h.setVideoElement(b)
            } catch (c) {
                a.dispatchEvent(new Event("error"))
            }
        };
    var ou = function(a, b, c) {
        J.call(this);
        var d = this;
        this.l = b;
        this.o = c;
        b = new nq(this);
        Ug(this, b);
        this.w = "goog_" + Ic++;
        this.g = this.h = null;
        hu(a, this.w).then(function(e) {
            return void lu(d, e)
        })["catch"](function() {
            return void mu(d)
        });
        b.R(this.l, "adsManager", function(e) {
            "allAdsCompleted" == e.ca && nu(d)
        })
    };
    p(ou, J);
    var lu = function(a, b) {
            a.h = b;
            var c = {};
            c = (c.frameName = a.w, c);
            a.l.send("omid", "iframeReady", c);
            a.g = new iu(b, a.o);
            a.g.R("error", function() {
                return void mu(a)
            });
            ku(a.g)
        },
        mu = function(a) {
            a.l.send("omid", "iframeFailed");
            a.X()
        },
        nu = function(a) {
            setTimeout(function() {
                a.X()
            }, 3E3)
        };
    ou.prototype.T = function() {
        this.h && (le(this.h), this.h = null);
        J.prototype.T.call(this)
    };
    var pu = function(a) {
            this.g = a;
            this.l = "";
            this.h = -1;
            this.o = !1
        },
        ru = function(a, b) {
            if (0 <= a.h) {
                var c = null == b ? function() {} : b,
                    d = function() {
                        qu(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.l;
                a.g.load()
            } else null != b && b()
        },
        qu = function(a, b) {
            var c = 0 < a.g.seekable.length;
            a.o ? c ? (a.g.currentTime = a.h, tu(a), b()) : setTimeout(function() {
                return qu(a, b)
            }, 100) : (tu(a), b())
        },
        tu = function(a) {
            a.h = -1;
            a.l = "";
            a.o = !1
        };
    var uu = function(a) {
        K.call(this);
        this.g = a;
        this.Y = null;
        this.w = new pu(a);
        this.A = 0;
        this.F = this.M = this.N = this.$ = this.D = !1;
        this.H = this.l = null;
        this.aa = new E(this.g.offsetWidth, this.g.offsetHeight);
        this.Z = Qt(this.g);
        this.V = !1
    };
    p(uu, K);
    uu.prototype.na = function() {
        var a = this.w;
        a.l = a.g.currentSrc;
        a.o = 0 < a.g.seekable.length;
        a.h = a.g.ended ? -1 : a.g.currentTime
    };
    uu.prototype.P = function(a) {
        ru(this.w, a)
    };
    uu.prototype.load = function(a, b) {
        var c = I.B(),
            d = parseInt(c.g.w.c, 10) / 2;
        null != d && tg(c.g, "slotId", d);
        I.B().F();
        Eg(I.B(), "hvd_lc");
        vu(this);
        this.N = !1;
        if (b)
            if (Eg(I.B(), "hvd_ad"), b instanceof Vp) {
                if (Eg(I.B(), "hvd_mad"), b = b.h) {
                    Eg(I.B(), "hvd_admu");
                    wu(this, b);
                    return
                }
            } else if (b instanceof Up) {
            Eg(I.B(), "hvd_dad");
            c = b.getVideoUrl();
            d = b.l;
            var e = b.C,
                f = b.h,
                g = b.A,
                h = b.g;
            if (c && d && e && f && g && h && (Eg(I.B(), "hvd_addu"), b.w)) {
                Eg(I.B(), "hvd_admse");
                b = e + '; codecs="' + g + '"';
                f = f + '; codecs="' + h + '"';
                if (Wq() && Wq() && MediaSource.isTypeSupported(b) &&
                    Wq() && MediaSource.isTypeSupported(f)) {
                    Eg(I.B(), "hvd_ymse");
                    Eg(I.B(), "hvd_mse");
                    this.Y = new dr(this.g, [new Xq(c, b, 35E4), new Xq(d, f, 82E3)]);
                    Ug(this, this.Y);
                    a = this.g;
                    b = this.Y;
                    b.g || (b.g = window.URL.createObjectURL(b.h));
                    b = b.g;
                    a.src = b;
                    this.g.load();
                    return
                }
                Eg(I.B(), "hvd_nmse")
            }
        } else Eg(I.B(), "hvd_uad");
        a ? wu(this, a) : (Eg(I.B(), "hvd_vn"), this.g.load())
    };
    var wu = function(a, b) {
            Eg(I.B(), "hvd_src");
            a.g.src = b;
            a.g.load()
        },
        xu = function(a) {
            vu(a);
            a.N = !1;
            a.g.src = "";
            a.g.load()
        };
    uu.prototype.getVideoUrl = function() {
        return this.g.src
    };
    uu.prototype.setVolume = function(a) {
        this.g.volume = a;
        this.g.muted = 0 == a ? !0 : !1
    };
    uu.prototype.getVolume = function() {
        return this.g.volume
    };
    var yu = function(a) {
        a.V = !1;
        a.N || sc() ? (a.F = !1, a.l = a.g.play(), null != a.l && (a.H = null, a.l.then(function() {
            a.l = null;
            a.yd(a.H);
            a.H = null
        })["catch"](function(b) {
            a.l = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent("autoplayDisallowed") : a.Cc()
        }))) : a.F = !0
    };
    uu.prototype.pause = function() {
        null == this.l && (this.V = !0, this.g.pause())
    };
    uu.prototype.isMuted = function() {
        return this.g.muted
    };
    var zu = function(a) {
        (Zc || ad) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen()
    };
    uu.prototype.getCurrentTime = function() {
        return this.g.currentTime
    };
    uu.prototype.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    uu.prototype.T = function() {
        Au(this);
        K.prototype.T.call(this)
    };
    var Bu = function(a) {
            Au(a);
            a.h = new nq(a);
            a.h.R(a.g, Er, a.ra);
            a.h.R(a.g, "ended", a.Uf);
            a.h.R(a.g, "webkitbeginfullscreen", a.Fc);
            a.h.R(a.g, "webkitendfullscreen", a.xd);
            a.h.R(a.g, "loadedmetadata", a.Wf);
            a.h.R(a.g, "pause", a.Zf);
            a.h.R(a.g, "playing", a.yd);
            a.h.R(a.g, "timeupdate", a.Sf);
            a.h.R(a.g, "volumechange", a.cg);
            a.h.R(a.g, "error", a.Cc);
            a.h.R(a.g, nd || bd && !jq(8) ? "loadeddata" : "canplay", a.Xf);
            a.I = new ps;
            a.h.R(a.I, "click", a.Rf);
            rs(a.I, a.g);
            a.O = new ci(1E3);
            a.h.R(a.O, "tick", a.Vf);
            a.O.start()
        },
        Au = function(a) {
            null !=
                a.I && (us(a.I), a.I = null);
            null != a.O && a.O.X();
            null != a.h && (a.h.X(), a.h = null);
            vu(a)
        },
        vu = function(a) {
            a.$ = !1;
            a.M = !1;
            a.D = !1;
            a.F = !1;
            a.A = 0;
            a.l = null;
            a.H = null;
            Tg(a.C)
        };
    uu.prototype.ra = function(a) {
        this.dispatchEvent(a.type)
    };
    var Cu = function(a, b) {
        if (!a.M) {
            a.M = !0;
            a.dispatchEvent("start");
            var c = x(a.g.getAttribute) && null != a.g.getAttribute("playsinline");
            ($c || jq(10) && U.l) && c || gk() || (Zc || ad ? 0 : (!Yc || Yc && iq(hq, 4)) && !hk()) || !Yc || Yc && iq(hq, 3) || (Zc || ad) && !jq(4) || a.Fc(b)
        }
    };
    k = uu.prototype;
    k.Wf = function() {
        this.N = !0;
        this.F && yu(this);
        this.F = !1
    };
    k.Xf = function() {
        this.$ || (this.$ = !0, this.dispatchEvent("loaded"))
    };
    k.yd = function(a) {
        null != this.l ? this.H = a : (this.dispatchEvent("play"), Fr() || nd || Cu(this, a))
    };
    k.Sf = function(a) {
        if (!this.M && (Fr() || nd)) {
            if (0 >= this.getCurrentTime()) return;
            if (nd && this.g.ended && 1 == this.getDuration()) {
                this.Cc(a);
                return
            }
            Cu(this, a)
        }
        if (bd || gc(pc, "Nintendo WiiU")) {
            if (1.5 < this.getCurrentTime() - this.A) {
                this.D = !0;
                this.g.currentTime = this.A;
                return
            }
            this.D = !1;
            this.getCurrentTime() > this.A && (this.A = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    };
    k.cg = function() {
        this.dispatchEvent("volumeChange")
    };
    k.Zf = function() {
        if (this.M && bd && !this.V && (2 > Du(this) || this.D)) {
            this.C = new ci(250);
            this.h.R(this.C, "tick", this.Tf);
            this.C.start();
            var a = !0
        } else a = !1;
        a || this.l || this.dispatchEvent("pause")
    };
    k.Uf = function() {
        var a = !0;
        if (bd || gc(pc, "Nintendo WiiU")) a = this.A >= this.g.duration - 1.5;
        !this.D && a && this.dispatchEvent("end")
    };
    k.Fc = function() {
        this.dispatchEvent("beginFullscreen")
    };
    k.xd = function() {
        this.dispatchEvent("endFullscreen")
    };
    k.Cc = function() {
        this.dispatchEvent("error")
    };
    k.Rf = function() {
        this.dispatchEvent("click")
    };
    k.Vf = function() {
        var a = new E(this.g.offsetWidth, this.g.offsetHeight),
            b = Qt(this.g);
        if (a.width != this.aa.width || a.height != this.aa.height) !this.Z && b ? this.Fc() : this.Z && !b && this.xd(), this.aa = a, this.Z = b
    };
    k.Tf = function() {
        if (!this.g.ended && this.g.paused && (bd || od ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime,
                b = Du(this);
            0 < b && (2 <= b || 2 > a) && (Tg(this.C), yu(this))
        } else Tg(this.C)
    };
    var Du = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b;) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    var Eu = function(a, b, c, d) {
        J.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.h = new nq(this);
        Ug(this, this.h);
        this.h.R(this.o, d, this.A)
    };
    p(Eu, J);
    var Hu = function(a, b) {
        var c = b.fa;
        switch (b.ca) {
            case "showVideo":
                Fu(a.l);
                break;
            case "hide":
                Gu(a.l);
                break;
            case "getPreloadDisplay":
            case "resizeAndPositionVideo":
                a = a.l.g;
                c = c.resizeAndPositionVideo;
                a.g.style.left = String(c.x);
                a.g.style.top = String(c.y);
                a.g.style.width = String(c.width);
                a.g.style.height = String(c.height);
                break;
            case "restoreSizeAndPositionVideo":
                c = a.l.g, c.g.style.width = "100%", c.g.style.height = "100%", c.g.style.left = "0", c.g.style.right = "0"
        }
    };
    Eu.prototype.A = function(a) {
        var b = a.fa;
        switch (a.ca) {
            case "activate":
                a = this.l;
                if (a.g != this.g && a.h && a.o && a.l) {
                    var c = a.g;
                    a.g = a.l;
                    a.l = c;
                    c = a.h;
                    a.h = a.o;
                    a.o = c
                }
                break;
            case "startTracking":
                a = this.g;
                c = this.w;
                this.h.R(a, yb(Sq), c);
                this.h.R(a, Er, c);
                Bu(this.g);
                break;
            case "stopTracking":
                a = this.g;
                c = this.w;
                this.h.Da(a, yb(Sq), c);
                this.h.Da(a, Er, c);
                Au(this.g);
                break;
            case "exitFullscreen":
                zu(this.g);
                break;
            case "play":
                yu(this.g);
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                Bu(this.g);
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    l = b.demuxedVideoUrl,
                    m = b.demuxedAudioMimeType,
                    n = b.demuxedVideoMimeType,
                    v = b.demuxedAudioCodec,
                    r = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var u = null;
                l && h && b && n && m && r && v && (u = new Up({
                    Kd: l,
                    Xc: h,
                    Jd: n,
                    Wc: m,
                    Pa: r,
                    Ja: v,
                    height: null,
                    width: null,
                    za: b
                }));
                h = null;
                d && e && g && f && (h = new Vp({
                    sd: d,
                    mimeType: e,
                    Pa: g,
                    Ja: f,
                    height: null,
                    width: null,
                    za: b
                }));
                u ? a.load(c, u) : h ? a.load(c, h) : a.load(c, null);
                break;
            case "unload":
                xu(this.g);
                break;
            case "setCurrentTime":
                this.g.g.currentTime =
                    b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    Eu.prototype.w = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        this.o.send(this.C,
            a, b)
    };
    var Iu = function(a, b) {
        J.call(this);
        this.h = b;
        this.l = new Eu(a, b, this.h.g, "videoDisplay1");
        Ug(this, this.l);
        this.g = null;
        var c = this.h.l;
        null != c && (this.g = new Eu(a, b, c, "videoDisplay2"), Ug(this, this.g))
    };
    p(Iu, J);
    Iu.prototype.Bc = function() {};
    Iu.prototype.A = function(a) {
        Hu(this.l, a);
        this.g && Hu(this.g, a)
    };
    var Ku = function(a, b) {
        J.call(this);
        this.w = a;
        this.l = b;
        this.o = new nq(this);
        Ug(this, this.o);
        this.g = this.l.g;
        null != this.g && (this.o.R(this.w, "videoDisplay1", this.ag), this.o.R(this.w, "videoDisplay2", this.fe), Ju(this, this.g, this.zb));
        this.h = null
    };
    p(Ku, J);
    k = Ku.prototype;
    k.Bc = function(a) {
        this.g && Lu(this, this.g, this.zb);
        this.g = a;
        Ju(this, this.g, this.zb)
    };
    k.ag = function(a) {
        if (null != this.g) {
            var b = a.fa;
            switch (a.ca) {
                case "startTracking":
                    Bu(this.g);
                    break;
                case "stopTracking":
                    Au(this.g);
                    break;
                case "exitFullscreen":
                    zu(this.g);
                    break;
                case "play":
                    yu(this.g);
                    break;
                case "pause":
                    this.g.pause();
                    break;
                case "load":
                    Mu(this.g, b);
                    break;
                case "unload":
                    xu(this.g);
                    break;
                case "setCurrentTime":
                    this.g.g.currentTime = b.currentTime;
                    break;
                case "setVolume":
                    this.g.setVolume(b.volume)
            }
        }
    };
    k.fe = function(a) {
        if (null != this.h) {
            var b = a.fa;
            switch (a.ca) {
                case "startTracking":
                    Bu(this.h);
                    break;
                case "stopTracking":
                    Au(this.h);
                    break;
                case "load":
                    Mu(this.h, b)
            }
        }
    };
    k.Gc = function(a) {
        switch (a.type) {
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            default:
                return
        }
        this.w.send("videoDisplay2", a, {})
    };
    k.zb = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        this.w.send("videoDisplay1",
            a, b)
    };
    var Ju = function(a, b, c) {
            a.o.R(b, yb(Sq), c);
            a.o.R(b, Er, c)
        },
        Lu = function(a, b, c) {
            a.o.Da(b, yb(Sq), c);
            a.o.Da(b, Er, c)
        };
    Ku.prototype.A = function(a) {
        switch (a.ca) {
            case "showVideo":
                Fu(this.l);
                break;
            case "hide":
                Gu(this.l);
                break;
            case "getPreloadDisplay":
                null != this.g && null == this.h && (this.h = this.l.l, Ju(this, this.h, this.Gc), null == this.h ? ls.B().report(112, {
                    outer: !0,
                    "null": !0
                }) : ls.B().report(112, {
                    outer: !0,
                    "null": !1
                }));
                break;
            case "swapVideoDisplays":
                if (null != this.g && null != this.h) {
                    Lu(this, this.g, this.zb);
                    Lu(this, this.h, this.Gc);
                    a = this.l;
                    if (a.h && a.o && a.l) {
                        var b = a.g;
                        a.g = a.l;
                        a.l = b;
                        b = a.h;
                        a.h = a.o;
                        a.o = b;
                        b = a.G;
                        a = a.g;
                        b.F.Bc(a);
                        b.C && (b =
                            b.C, a = a.w.g, b.o = a, b.g && (b = b.g, b.g = a, ju(b, a)))
                    }
                    this.g = this.l.g;
                    this.h = this.l.l;
                    Ju(this, this.g, this.zb);
                    Ju(this, this.h, this.Gc)
                }
        }
    };
    var Mu = function(a, b) {
        var c = b.videoUrl,
            d = b.muxedMediaUrl,
            e = b.muxedMimeType,
            f = b.muxedAudioCodec,
            g = b.muxedVideoCodec,
            h = b.demuxedAudioUrl,
            l = b.demuxedVideoUrl,
            m = b.demuxedAudioMimeType,
            n = b.demuxedVideoMimeType,
            v = b.demuxedAudioCodec,
            r = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var u = null;
        l && h && b && n && m && r && v && (u = new Up({
            Kd: l,
            Xc: h,
            Jd: n,
            Wc: m,
            Pa: r,
            Ja: v,
            height: null,
            width: null,
            za: b
        }));
        h = null;
        d && e && g && f && (h = new Vp({
            sd: d,
            mimeType: e,
            Pa: g,
            Ja: f,
            height: null,
            width: null,
            za: b
        }));
        u ? a.load(c, u) : h ? a.load(c, h) : a.load(c, null)
    };
    var Ou = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, l, m, n, v) {
                if ("%" == m) return "%";
                var r = c.shift();
                if ("undefined" == typeof r) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = r;
                return Nu[m].apply(null, arguments)
            })
        },
        Nu = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Gc(" ", Number(c) - a.length) : Gc(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + Gc(" ", a) : f + Gc(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return Nu.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    Nu.i = Nu.d;
    Nu.u = Nu.d;
    var Qu = function(a, b) {
        K.call(this);
        this.w = new nq(this);
        Ug(this, this.w);
        this.I = !1;
        this.H = "goog_" + Ic++;
        this.A = new fp;
        var c = this.H,
            d = (Ce() ? "https:" : "http:") + Ou("//imasdk.googleapis.com/js/core/bridge3.339.0_%s.html", U.G);
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (g) {}
                    e = e.parent
                } while (e != e.top)
            } catch (g) {}
            f = !1
        }
        f && (d += "?f=" + c);
        c = je("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: "autoplay",
            style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
        });
        rq(this.w, c, "load", this.V);
        a.appendChild(c);
        this.g = c;
        this.l = Pu(this);
        this.D = b;
        this.h = null;
        this.F = ds($r(), 651800008) ? new Iu(this.l, this.D) : new Ku(this.l, this.D);
        Ug(this, this.F);
        this.D.g && this.w.R(this.l, "displayContainer", this.N);
        this.w.R(this.l, "mouse", this.O);
        this.w.R(this.l, "touch", this.P);
        c = F();
        d = Ea("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new Es, w("google.ima.gptProxyInstance", d, c), c = d);
        this.M = c;
        ds($r(), 504733016) && (this.C = new ou(a, this.l, b.g.w.g), Ug(this, this.C))
    };
    A(Qu, K);
    var Pu = function(a, b) {
        b = b || "*";
        var c = a.A.get(b);
        null == c && (c = new ws(a.H, b), a.I && (c.xa = oe(a.g), c.connect()), a.A.set(b, c));
        return c
    };
    Qu.prototype.T = function() {
        null !== this.h && (this.h.X(), this.h = null);
        this.A.forEach(function(a) {
            Tg(a)
        });
        this.A.clear();
        Gs(this.M, this.H);
        le(this.g);
        Qu.sa.T.call(this)
    };
    Qu.prototype.O = function(a) {
        var b = a.fa,
            c = Xe(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.ca, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    };
    var Ru = function(a, b) {
        var c = Xe(a.g),
            d = !!("TouchEvent" in window && 0 < TouchEvent.length);
        b = b.map(function(e) {
            return d ? new Touch({
                identifier: e.identifier,
                target: a.g,
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX + c.x,
                pageY: e.pageY + c.y
            }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY)
        });
        return d ? b : document.createTouchList.apply(document, b)
    };
    Qu.prototype.P = function(a) {
        var b = a.fa,
            c = Xe(this.g);
        if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: Ru(this, b.touches),
            targetTouches: Ru(this, b.targetTouches),
            changedTouches: Ru(this, b.changedTouches)
        }, a = new TouchEvent(a.ca, b), this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.ca, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX +
                c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, Ru(this, b.touches), Ru(this, b.targetTouches), Ru(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    };
    Qu.prototype.N = function(a) {
        switch (a.ca) {
            case "showVideo":
                null == this.h ? (this.h = new ps, this.w.R(this.h, "click", this.Y)) : us(this.h);
                rs(this.h, Su(this.D));
                break;
            case "hide":
                null !== this.h && (this.h.X(), this.h = null)
        }
        this.F.A(a)
    };
    Qu.prototype.Y = function() {
        this.l.send("displayContainer", "videoClick")
    };
    Qu.prototype.V = function() {
        var a = this;
        js = Ef();
        ks = Bf();
        Al(this.A.Eb(!1), function(b) {
            b.xa = oe(a.g);
            b.connect()
        });
        this.I = !0
    };
    var Uu = function() {
        K.call(this);
        this.buffered = new Tu;
        this.w = new Tu;
        this.h = new nq(this);
        this.src = this.l = "";
        this.A = !1;
        this.g = null;
        var a = qr();
        if (a) {
            a: {
                if (Bb(a.g, "videoElementMockDuration") && (a = a.g.videoElementMockDuration, Aa(a))) break a;a = NaN
            }
            this.duration = a
        }
    };
    A(Uu, K);
    var Vu = new fp,
        Wu = function() {
            var a = ["video/mp4"],
                b = ["video/ogg"],
                c = new Uu;
            c.canPlayType = function(d) {
                return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
            };
            c.width = 0;
            c.height = 0;
            c.offsetWidth = 0;
            c.offsetHeight = 0;
            return c
        },
        Xu = function(a) {
            this.endTime = a
        },
        Tu = function() {
            this.length = 0;
            this.g = []
        };
    Tu.prototype.start = function() {
        return 0
    };
    Tu.prototype.end = function(a) {
        return this.g[a].endTime
    };
    k = Uu.prototype;
    k.readyState = 0;
    k.currentTime = 0;
    k.duration = NaN;
    k.Nb = !0;
    k.autoplay = !1;
    k.loop = !1;
    k.controls = !1;
    k.volume = 1;
    k.muted = !1;
    Object.defineProperty(Uu.prototype, "src", {
        get: function() {
            return Uu.prototype.l
        },
        set: function(a) {
            var b = Uu.prototype;
            b.A && null != b.g ? (b.g.reject(), b.g = null) : b.l = a
        }
    });
    k = Uu.prototype;
    k.wc = 0;
    k.rb = null;
    k.cc = null;
    k.pause = function() {
        this.autoplay = !1;
        this.Nb || (null.stop(), this.Nb = !0, this.dispatchEvent("timeupdate"), this.dispatchEvent("pause"))
    };
    k.load = function() {
        this.readyState = 0;
        this.Nb = !0;
        this.dispatchEvent("loadstart");
        this.setProperty("duration", isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration);
        var a = this.w;
        a.g.push(new Xu(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new Xu(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress")
    };
    k.setProperty = function(a, b) {
        switch (a) {
            case "currentTime":
                a = Number(b);
                this.dispatchEvent("seeking");
                this.currentTime = a;
                this.dispatchEvent("seeked");
                a = y() - this.wc;
                b = this.currentTime + a / 1E3;
                this.wc += a;
                2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
                this.dispatchEvent("timeupdate");
                this.currentTime == this.duration && (this.Nb = !0, null.stop(), this.dispatchEvent("ended"));
                break;
            case "duration":
                this.duration = Number(b);
                this.dispatchEvent("durationchange");
                break;
            case "volume":
                this.volume = Number(b),
                    this.dispatchEvent("volumechange")
        }
    };
    k.setAttribute = function(a, b) {
        null != a && Vu.set(a, b)
    };
    k.getAttribute = function(a) {
        return Vu.get(a)
    };
    k.T = function() {
        this.h.X()
    };
    k.bg = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.cc && (this.cc.innerText = b);
        c && this.rb && (this.rb.style.backgroundColor = c)
    };
    var Yu = function(a, b) {
        J.call(this);
        if (null == a || !ne(ae(a), a)) throw Pr(Or, null, "containerElement", "element");
        this.o = a;
        this.l = this.g = null;
        a = qr();
        if (rr(a, "useVideoElementMock")) {
            a = Wu();
            var c = je("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            });
            for (d in a) c[d] = a[d];
            a.rb = je("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            });
            a.cc = je("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            });
            a.rb.appendChild(a.cc);
            c.appendChild(a.rb);
            a.h.R(a, ["loadeddata", "playing", "pause", "ended"], a.bg);
            var d = c
        } else d = je("VIDEO", {
            style: "background-color:#000;position:absolute;width:100%;height:100%;left:0px;top:0px;",
            title: gr("Advertisement").toString()
        });
        d.setAttribute("webkit-playsinline", !0);
        d.setAttribute("playsinline", !0);
        this.h = d;
        this.g = je("DIV", {
            style: "display:none;"
        });
        this.o.appendChild(this.g);
        this.g.appendChild(this.h);
        b && (this.l = je("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        }), this.g.appendChild(this.l))
    };
    p(Yu, J);
    Yu.prototype.T = function() {
        le(this.g);
        J.prototype.T.call(this)
    };
    Yu.prototype.show = function() {
        var a = this.g;
        null != a && (a.style.display = "block")
    };
    var av = function(a, b, c) {
        if (null == a || !ne(ae(a), a)) throw Pr(Or, null, "containerElement", "element");
        this.A = b;
        this.Z = Hr(this.A || null);
        this.Y = kq(this.A || null);
        this.P = String(Math.floor(1E9 * Math.random()));
        this.M = !1;
        this.F = a;
        this.I = null != b;
        if (!this.I && U.h) throw Pr(Mr, null, "Custom video element was not provided even though the setting restrictToCustomPlayback is set to true.");
        U.g = 2;
        this.K = Zu(b ? b : null);
        var d = je("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.w = d;
        this.h = null;
        $u(this) &&
            b ? a = new uu(b) : (this.h = new Yu(this.w, !0), a = new uu(this.h.h));
        this.g = a;
        this.l = this.o = null;
        a = Yc && !(Yc && iq(hq, 4));
        d = Zc || ad;
        !this.h || $u(this) || !U.o || hk() || a || d || (this.o = new Yu(this.w, !0), this.l = new uu(this.o.h));
        this.C = c || null;
        this.O = null != this.C;
        $u(this) && b ? x(b.getBoundingClientRect) ? c = b : (c = this.w, U.C = c) : c = this.w;
        this.D = c;
        this.G = new Qu(this.w, this);
        this.N = new E(0, 0);
        this.H = "";
        b && (b = b.src || b.currentSrc, b = b instanceof lp ? b.clone() : new lp(b, void 0), 200 > b.toString().length ? this.H = b.toString() : 200 > b.g.length &&
            (this.H = b.g))
    };
    av.prototype.V = function() {
        this.M = !0;
        if (null != this.h) {
            var a = this.h;
            a.h && a.h.load()
        }
        null != this.o && (a = this.o, a.h && a.h.load())
    };
    av.prototype.destroy = function() {
        var a = this;
        this.A = null;
        Tg(this.h);
        Tg(this.o);
        Tg(this.G);
        this.g.P(function() {
            return Tg(a.g)
        });
        null != this.l && this.l.P(function() {
            return Tg(a.l)
        });
        le(this.w)
    };
    var Fu = function(a) {
            null != a.h && a.h.show()
        },
        Gu = function(a) {
            null != a.h && (a = a.h.g, null != a && (a.style.display = "none"))
        },
        Su = function(a) {
            return a.O && a.C ? a.C : null != a.h ? a.h.l : null
        },
        $u = function(a) {
            return U.h ? !0 : Gr(a.K) && a.I
        };
    av.prototype.setSize = function(a, b) {
        var c = this.w;
        null != c && (-1 == a ? (c.style.right = "0", c.style.left = "0") : c.style.width = a + "px", -1 == b ? (c.style.bottom = "0", c.style.top = "0") : c.style.height = b + "px");
        c = this.G;
        c.g.width = -1 == a ? "100%" : a;
        c.g.height = -1 == b ? "100%" : b;
        c.g.offsetTop = c.g.offsetTop;
        this.N = new E(a, b)
    };
    var Zu = function(a) {
        return null != a && x(a.getAttribute) && null != a.getAttribute("playsinline") ? !0 : !1
    };
    var bv = function(a, b) {
        W.call(this, "adMetadata", a);
        this.h = b || null
    };
    A(bv, W);
    bv.prototype.o = function() {
        return this.h
    };
    var cv = function(a, b) {
        K.call(this);
        this.h = a;
        this.g = null;
        this.H = this.F = "";
        this.I = 0;
        this.C = this.l = null;
        this.w = b;
        this.A = null;
        this.D = ""
    };
    p(cv, K);
    cv.prototype.M = function(a) {
        try {
            var b = a.h.data;
            try {
                var c = JSON.parse(b)
            } catch (L) {
                return
            }
            var d = c.session;
            if (null != d && this.D == d) switch (c.type) {
                case "friendlyReady":
                    var e = dv(this);
                    if (null != e) this.g = e, this.F = e.currentSrc, this.H = e.style.cssText, this.I = e.currentTime;
                    else {
                        var f = this.h.F,
                            g = this.h.N;
                        var h = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (g.width + "px; ");
                        h += "height:" + g.height + "px;";
                        this.g = je("VIDEO", {
                            style: h,
                            autoplay: !0
                        });
                        f.appendChild(this.g)
                    }
                    var l = {};
                    if (null != e) l.provided = "y";
                    else {
                        l.provided = "n";
                        var m = this.h.g;
                        if (m instanceof uu) {
                            l.vidDisp = "y";
                            var n = m.w.g;
                            l.vidElem = n instanceof HTMLVideoElement ? "y" : null == n ? "0" : "n"
                        } else l.vidDisp = null == m ? "0" : "n"
                    }
                    ls.B().report(88, l);
                    var v = this.h.F;
                    e = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var r = this.g;
                    b: {
                        var u = ae(r);
                        if (u.defaultView && u.defaultView.getComputedStyle) {
                            var z = u.defaultView.getComputedStyle(r, null);
                            if (z) {
                                var T = z.display || z.getPropertyValue("display") || "";
                                break b
                            }
                        }
                        T = ""
                    }
                    if ("none" != (T || (r.currentStyle ? r.currentStyle.display :
                            null) || r.style && r.style.display)) var pb = Ze(r);
                    else {
                        var Ta = r.style,
                            Id = Ta.display,
                            Ng = Ta.visibility,
                            Og = Ta.position;
                        Ta.visibility = "hidden";
                        Ta.position = "absolute";
                        Ta.display = "inline";
                        var af = Ze(r);
                        Ta.display = Id;
                        Ta.position = Og;
                        Ta.visibility = Ng;
                        pb = af
                    }
                    e += "width:" + pb.width + "px; ";
                    e += "height:" + pb.height + "px;";
                    this.C = je("DIV", {
                        style: e
                    });
                    v.appendChild(this.C);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.C)
                    } catch (L) {
                        ev(this)
                    }
                    this.w.send("vpaid", "", b);
                    break;
                case "destroyFriendlyIframe":
                    this.X();
                    break;
                case "becameLinear":
                    this.g && !te() && !se() && Te(this.g, {
                        visibility: "visible"
                    });
                    this.w.send("vpaid", "", b);
                    break;
                case "becameNonlinear":
                    fv(this);
                    this.w.send("vpaid", "", b);
                    break;
                case "startAd":
                    v = {};
                    if (this.g) {
                        l = this.g.paused;
                        var Jd = 0 < this.g.currentTime;
                        v.apl = Jd && !l ? "1" : "0";
                        v.ip = l ? "1" : "0";
                        v.iavp = Jd ? "1" : "0"
                    } else v.apl = "n";
                    ls.B().report(99, v);
                    this.w.send("vpaid", "", b);
                    null != dv(this) && Fu(this.h);
                    break;
                default:
                    this.w.send("vpaid", "", b)
            }
        } catch (L) {
            ev(this)
        }
    };
    var ev = function(a) {
            var b = {
                type: "error"
            };
            b.session = a.D;
            a = Zf(b);
            window.postMessage(a, "*")
        },
        dv = function(a) {
            a = a.h.g;
            return a instanceof uu && a.w.g instanceof HTMLVideoElement ? a.w.g : null
        },
        fv = function(a) {
            a.g && !te() && !se() && Te(a.g, {
                visibility: "hidden"
            })
        };
    cv.prototype.T = function() {
        K.sa.T.call(this);
        Tg(this.A);
        this.A = null;
        le(this.C);
        this.C = null;
        le(this.l);
        this.l = null;
        var a = dv(this);
        null != a ? (a.style.cssText = this.H, te() || se() ? (a.src = this.F, a.currentTime = this.I) : (a.src = "", Gu(this.h))) : (le(this.g), this.g = null)
    };
    var gv = function() {
        this.g = [];
        this.h = []
    };
    gv.prototype.isEmpty = function() {
        return 0 == this.g.length && 0 == this.h.length
    };
    gv.prototype.clear = function() {
        this.g = [];
        this.h = []
    };
    gv.prototype.contains = function(a) {
        return cb(this.g, a) || cb(this.h, a)
    };
    gv.prototype.la = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b) a.push(this.h[b]);
        return a
    };
    var Y = function(a, b, c, d, e, f, g) {
        K.call(this);
        var h = this;
        this.M = a;
        this.g = b;
        this.I = c;
        this.pb = e;
        this.h = new or;
        this.H = g;
        this.P = !1;
        this.N = 1;
        this.ob = d;
        this.na = -1;
        this.w = this.l = null;
        this.F = new lr({
            currentTime: 0
        }, this.H);
        this.D = new gv;
        this.Aa = this.$ = !1;
        this.V = new Map;
        this.Y = this.ra = !1;
        this.A = null;
        this.aa = f && null != this.g.C;
        this.O = function() {
            return h.ee
        };
        this.Z = new nq(this);
        this.Z.R(this.H, "adsManager", this.Fb)
    };
    p(Y, K);
    Y.prototype.Fb = function(a) {
        var b = this,
            c = a.ca,
            d = a.fa;
        switch (c) {
            case "error":
                hv(this);
                iv(this, d);
                break;
            case "contentPauseRequested":
                jv(this);
                kv(this, a.ca, a.fa);
                break;
            case "contentResumeRequested":
                lv(this, function() {
                    return kv(b, c, d)
                });
                break;
            case "remainingTime":
                this.na = d.remainingTime;
                break;
            case "skip":
                kv(this, c, d);
                break;
            case "log":
                a = d.adData;
                kv(this, c, a, d.logData);
                break;
            case "companionBackfill":
                a = Ea("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipShown":
                this.P = !0;
                kv(this, c, d);
                break;
            case "interaction":
                a = d.adData;
                kv(this, c, a, d.interactionData);
                break;
            case "vpaidEvent":
                mv(this, a);
                break;
            case "skippableStateChanged":
                a = d.adData;
                null != a.skippable && (this.P = a.skippable);
                kv(this, c, d);
                break;
            case "volumeChange":
                a = d.adData;
                null != a && Aa(a.volume) && (this.N = a.volume);
                kv(this, c, d);
                break;
            case "firstQuartile":
                kv(this, Dr.firstQuartile, d);
                kv(this, c, d);
                break;
            case "thirdQuartile":
                kv(this, Dr.thirdQuartile, d);
                kv(this, c, d);
                break;
            default:
                kv(this, c, d)
        }
    };
    var mv = function(a, b) {
            try {
                var c = b.fa,
                    d = c.vpaidEventType;
                if ("createFriendlyIframe" == d) {
                    a.A = new cv(a.g, a.H);
                    var e = a.A;
                    e.D = c.session;
                    b = "about:self";
                    Tc && (b = "");
                    e.l = je("IFRAME", {
                        src: b,
                        allowtransparency: !0,
                        background: "transparent"
                    });
                    Te(e.l, {
                        display: "none",
                        width: "0",
                        height: "0"
                    });
                    var f = e.h.F;
                    f.appendChild(e.l);
                    var g = f.ownerDocument,
                        h = g.defaultView || g.parentWindow;
                    null == e.A && (e.A = new nq(e));
                    e.A.R(h, "message", e.M);
                    var l = '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' +
                        (e.D + '");\x3c/script></body>');
                    if (od || kd || Uc) {
                        var m = e.l;
                        if (Xt) {
                            var n = m.contentWindow;
                            n && Zt(n.document, l)
                        } else $t(m, l)
                    } else au(e.l, l)
                } else "vpaidNonLinear" == d && a.A && fv(a.A)
            } catch (v) {
                iv(a, v.fa)
            }
        },
        kv = function(a, b, c, d) {
            if (null == c.companions) {
                var e = a.V.get(c.adId);
                c.companions = null != e ? e : []
            }
            var f = c.adData;
            e = null == f ? null : new X(f);
            a.l = e;
            switch (b) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new W(b, null, c);
                    break;
                case "adMetadata":
                    b = null;
                    null != c.adCuePoints && (b = new ir(c.adCuePoints));
                    b = new bv(e, b);
                    break;
                case "allAdsCompleted":
                    a.l =
                        null;
                    a.ra = !0;
                    b = new W(b, e);
                    break;
                case "contentPauseRequested":
                    a.Y = !1;
                    b = new W(b, e);
                    break;
                case "contentResumeRequested":
                    a.l = null;
                    a.Y = !0;
                    b = new W(b, e);
                    break;
                case "loaded":
                    a.na = e.getDuration();
                    Ir() && (d = a.M, c = a.pb, d.h.set(Kt(e), a.O), (0 != U.g ? Lo.B().l : d.A) && Rt(d, "loaded", Kt(e), c));
                    null != f.gfpCookie && U.w && Uq() && (d = f.gfpCookie, Sd.set("__gads", d.value, d.expires, d.path, d.domain), delete f.gfpCookie);
                    b = new W(b, e, f);
                    break;
                case "start":
                    a.V.set(c.adId, c.companions);
                    null != Su(a.g) && (null == a.w ? (a.w = new ps, a.Z.R(a.w, "click",
                        a.Yf)) : us(a.w), rs(a.w, Su(a.g)));
                    b = new W(b, e);
                    break;
                case "complete":
                    null != a.w && us(a.w);
                    Ir() && Tt(a.M, a.O, Kt(e));
                    a.l = null;
                    a.V["delete"](c.adId);
                    b = new W(b, e);
                    break;
                case "log":
                    f = null;
                    null != d && null != d.type ? (c = d.type, c = "adLoadError" == c || "adPlayError" == c) : c = !1;
                    c && (f = {
                        adError: Br(d)
                    });
                    b = new W(b, e, f);
                    break;
                case "interaction":
                    b = new W(b, e, d);
                    break;
                case "adProgress":
                    b = new W(b, e, c);
                    break;
                default:
                    b = new W(b, e)
            }
            a.dispatchEvent(b);
            a.ra && a.Y && a.destroy()
        },
        iv = function(a, b) {
            var c = new Cr(Br(b));
            a.$ ? (a.dispatchEvent(c),
                Ir() && a.l && Tt(a.M, a.O, Kt(a.l)), a.l = null) : a.D.h.push(c);
            a = {
                error: b.errorCode,
                vis: pg(document)
            };
            ls.B().report(7, a)
        },
        nv = function(a, b, c) {
            a.H.send("adsManager", b, c)
        },
        lv = function(a, b) {
            hv(a, b)
        },
        jv = function(a) {
            var b = a.g.g;
            $u(a.g) && null != a.h && a.h.restoreCustomPlaybackStateOnAdBreakComplete && null != b.na && b.na()
        },
        hv = function(a, b) {
            var c = a.g.g;
            $u(a.g) && null != a.h && a.h.restoreCustomPlaybackStateOnAdBreakComplete && null != c.P ? c.P(b) : b && b()
        };
    k = Y.prototype;
    k.jf = function(a, b, c, d) {
        if (this.D.isEmpty()) {
            var e = this.g,
                f = null;
            e.A && null == d && (f = {
                vd: "setnull"
            });
            e.A && e.A === d && (f = {
                vd: "match"
            });
            if (e.A && e.A !== d) {
                f = Hr(d || null);
                var g = kq(d || null);
                f = {
                    vd: "diff",
                    oc: e.Z,
                    nc: f,
                    oi: e.Y,
                    ni: g
                }
            }!e.A && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.P, ls.B().report(93, f));
            null != d && (e.K = Zu(d), U.h || Gr(e.K)) && (e.I = !0, Tg(e.h), Tg(e.o), Tg(e.l), e.h = null, e.o = null, e.l = null, Tg(e.g), e.g = new uu(d), x(d.getBoundingClientRect) ? e.D = d : (e.D = e.w, U.C = e.D), d = e.G, e = e.g, d.F.Bc(e), d.C && (d = d.C, e = e.w.g, d.o = e, d.g && (d =
                d.g, d.g = e, ju(d, e))));
            this.$ = !0;
            this.pd(a, b, c);
            nv(this, "init", {
                adsRenderingSettings: ov(this),
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.D.isEmpty();) b = a = this.D, 0 == b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
            this.X()
        }
    };
    k.Of = function() {
        return $u(this.g)
    };
    k.Nf = function() {
        return this.aa
    };
    k.hf = function() {
        return this.na
    };
    k.df = function() {
        return this.P
    };
    k.be = function() {
        nv(this, "discardAdBreak")
    };
    k.lf = function(a) {
        if (null != a) {
            var b = this.h ? this.h.bitrate : -1,
                c = a.bitrate;
            ls.B().report(96, {
                init: this.$ ? "1" : "0",
                start: this.Aa ? "1" : "0",
                old: b,
                "new": c,
                changed: b != c ? "1" : "0"
            });
            this.h = a;
            nv(this, "updateAdsRenderingSettings", {
                adsRenderingSettings: ov(this)
            })
        }
    };
    k.ee = function() {
        var a = null != this.l ? this.l.g.vpaid : !1,
            b = this.g.g,
            c = b.getCurrentTime();
        b = b.getDuration();
        return {
            currentTime: c,
            duration: b,
            isPlaying: !0,
            isVpaid: a,
            isYouTube: !1,
            volume: this.N
        }
    };
    k.kf = function() {
        nv(this, "skip")
    };
    k.start = function() {
        if (this.I) {
            (Zc || ad) && ls.B().report(50, {
                customPlayback: $u(this.g)
            });
            this.g.M || ls.B().report(26, {
                adtagurl: this.I,
                customPlayback: $u(this.g)
            });
            ak(this.g.w) && ls.B().report(30, {
                adtagurl: this.I,
                customPlayback: $u(this.g)
            });
            var a = this.g.C,
                b = this.g.w,
                c;
            if (c = a && b && !ak(a)) a = Pt(a), b = Pt(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && ls.B().report(31, {
                adtagurl: this.I,
                customPlayback: $u(this.g)
            })
        }
        if (!this.g.M &&
            !$u(this.g)) throw Pr(Nr);
        b = this.g;
        b.O = this.aa && null != b.C;
        this.g.G.g.style.opacity = 1;
        null != this.C && 1 == this.getVolume() && (za(this.C.muted) && this.C.muted ? this.setVolume(0) : Aa(this.C.volume) && (b = this.C.volume, 0 <= b && 1 >= b && this.setVolume(this.C.volume)));
        this.Aa = !0;
        nv(this, "start")
    };
    k.Yf = function() {
        if ((null == this.h || !this.h.disableClickThrough) && null != this.l) {
            var a = this.l.g.clickThroughUrl;
            if (null != a) {
                var b = Ob("_blank");
                if (!Wb(Hc(a))) {
                    var c = a instanceof lc || !bf.test(a) ? a : new lc(jc, a);
                    a = window;
                    c = c instanceof lc ? c : oc(c);
                    (a || q).open(mc(c), b ? Nb(b) : "", "", void 0)
                }
            }
        }
    };
    k.pd = function(a, b, c) {
        this.g.setSize(a, b);
        nv(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    };
    k.stop = function() {
        nv(this, "stop")
    };
    k.cf = function() {
        nv(this, "expand")
    };
    k.bf = function() {
        nv(this, "collapse")
    };
    k.getVolume = function() {
        return this.N
    };
    k.setVolume = function(a) {
        this.N = a;
        this.g.g.setVolume(a);
        nv(this, "volume", {
            volume: a
        })
    };
    k.pause = function() {
        nv(this, "pause")
    };
    k.resume = function() {
        nv(this, "resume")
    };
    k.destroy = function() {
        null != this.A && (this.A.X(), this.A = null);
        this.X()
    };
    k.ff = function() {
        return this.ob
    };
    k.gf = function() {
        return this.l
    };
    k.T = function() {
        nv(this, "destroy");
        null != this.w && this.w.X();
        this.Z.X();
        this.D.clear();
        this.F && (this.F.stop(), this.F.X());
        Ir() && Tt(this.M, this.O);
        K.prototype.T.call(this)
    };
    var ov = function(a) {
        var b = {};
        null != a.h && Jb(b, a.h);
        a.aa && (b.useClickElement = !1, b.disableClickThrough = !0);
        return b
    };
    Y.prototype.Ra = function() {
        nv(this, "click")
    };
    var pv = function(a, b) {
        Vg.call(this, "adsManagerLoaded");
        this.h = a;
        this.o = b
    };
    A(pv, Vg);
    pv.prototype.w = function(a, b) {
        var c = this.h;
        c.C = a;
        null != a.currentTime && (c.F = new lr(a, c.H), c.F.start());
        null != b && (c.h = b);
        return this.h
    };
    pv.prototype.A = function() {
        return this.o
    };
    var qv = function(a, b, c) {
        this.h = c;
        0 == b.length && (b = [
            []
        ]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length;) {
                var h = d[f++];
                if (128 > h) e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var l = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | l & 63)
                } else if (239 < h && 365 > h) {
                    l = d[f++];
                    var m = d[f++],
                        n = d[f++];
                    h = ((h & 7) << 18 | (l & 63) << 12 | (m & 63) << 6 | n & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else l = d[f++], m = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                    (l & 63) << 6 | m & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    qv.prototype.match = function(a) {
        var b = this;
        return this.g.some(function(c) {
            c = a.match(c);
            return null == c ? !1 : !b.h || 1 <= c.length && "3.339.0" == c[1] || 2 <= c.length && "3.339.0" == c[2] ? !0 : !1
        })
    };
    var rv = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        tv = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        uv = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        vv = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92,
                46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        wv = new qv(rv, uv, !1),
        xv = new qv(rv, vv, !0),
        yv = new qv(tv, uv, !1),
        zv = new qv(tv,
            vv, !0),
        Av = new qv([104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47], uv, !1),
        Bv = new qv([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115, 121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41,
            47
        ], [], !1),
        Cv = new qv(rv, [
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123,
                50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ]
        ], !0),
        ub = {
            Ng: wv,
            Lg: xv,
            Vg: yv,
            Ug: zv,
            Og: Av,
            th: Bv,
            Mg: Cv
        };
    var Dv = function(a) {
        try {
            var b = new lp(a);
            if (!b.g.includes(".cdn.ampproject.org")) return null;
            var c = b.l.split("/").slice(1),
                d = "s" == c[1] && 3 > c.length;
            if (2 > c.length || d) return null;
            var e = "s" == c[1];
            c = e ? c.slice(2) : c.slice(1);
            var f = decodeURIComponent(c[0]) + "/";
            return e ? "https://" + f + c.slice(1).join("/") : "http://" + f + c.slice(1).join("/")
        } catch (g) {
            return null
        }
    };
    var Ev = function(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload", e.href = gc("preload", "stylesheet") ? b.jb ? b.jb : Tb(b).toString() : b instanceof Sb ? b.jb ? b.jb : Tb(b).toString() : b instanceof lc ? mc(b) : mc(oc(b))
        } catch (f) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (f) {}
    };
    var Fv = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Gv = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        Hv = q,
        Iv = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(q.location.hostname)];
            wr[3] >= y() && b.push("adsid=" + encodeURIComponent(wr[1]));
            return a + "?" + b.join("&")
        },
        wr, Jv, vr = function() {
            Hv = q;
            wr = Hv.googleToken = Hv.googleToken || {};
            var a = y();
            wr[1] && wr[3] > a && 0 < wr[2] || (wr[1] = "", wr[2] = -1, wr[3] = -1, wr[4] = "", wr[6] = "");
            Jv = Hv.googleIMState = Hv.googleIMState || {};
            a = Jv[1];
            Fv.test(a) && !Gv.test(a) ||
                (Jv[1] = ".google.com");
            Ia(Jv[5]) || (Jv[5] = []);
            "boolean" !== typeof Jv[6] && (Jv[6] = !1);
            Ia(Jv[7]) || (Jv[7] = []);
            "number" !== typeof Jv[8] && (Jv[8] = 0)
        },
        Kv = {
            lc: function() {
                return 0 < Jv[8]
            },
            dg: function() {
                Jv[8]++
            },
            eg: function() {
                0 < Jv[8] && Jv[8]--
            },
            fg: function() {
                Jv[8] = 0
            },
            Dh: function() {
                return !1
            },
            kd: function() {
                return Jv[5]
            },
            ad: function(a) {
                try {
                    a()
                } catch (b) {
                    q.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Bd: function() {
                if (!Kv.lc()) {
                    var a = q.document,
                        b = function(e) {
                            e = Iv(e);
                            a: {
                                try {
                                    var f = Da();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Ev(a, e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return q.processGoogleToken({}, 2)
                            };
                            e = re(e);
                            Cc(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Kv.dg()
                            } catch (g) {}
                        },
                        c = Jv[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    q.setTimeout(function() {
                        return q.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        Lv = function(a) {
            vr();
            var b = Hv.googleToken[5] || 0;
            a && (0 != b || wr[3] >= y() ? Kv.ad(a) : (Kv.kd().push(a), Kv.Bd()));
            wr[3] >= y() && wr[2] >= y() || Kv.Bd()
        },
        Mv = function(a) {
            q.processGoogleToken = q.processGoogleToken ||
                function(b, c) {
                    var d = b;
                    d = void 0 === d ? {} : d;
                    c = void 0 === c ? 0 : c;
                    b = d.newToken || "";
                    var e = "NT" == b,
                        f = parseInt(d.freshLifetimeSecs || "", 10),
                        g = parseInt(d.validLifetimeSecs || "", 10),
                        h = d["1p_jar"] || "";
                    d = d.pucrd || "";
                    vr();
                    1 == c ? Kv.fg() : Kv.eg();
                    var l = Hv.googleToken = Hv.googleToken || {},
                        m = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                    e = e && !Kv.lc() && (!(wr[3] >= y()) || "NT" == wr[1]);
                    var n = !(wr[3] >= y()) && 0 != c;
                    if (m || e || n) e = y(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Le(q,
                        "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), l[5] = c, l[1] = b, l[2] = f, l[3] = g, l[4] = h, l[6] = d, vr();
                    if (m || !Kv.lc()) {
                        c = Kv.kd();
                        for (b = 0; b < c.length; b++) Kv.ad(c[b]);
                        c.length = 0
                    }
                };
            Lv(a)
        };
    (function() {
        if (!vb(function(e) {
                return e.match(F().location.href)
            })) {
            for (var a = ce(), b = null, c = null, d = 0; d < a.length; d++)
                if (c = a[d], vb(function(e) {
                        return e.match(c.src)
                    })) {
                    b = c;
                    break
                }
            if (null == b) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
        }
    })();
    var Ov = function(a) {
        K.call(this);
        this.g = a;
        this.A = new Map;
        this.l = this.g.G;
        this.C = new nq(this);
        0 != U.g ? (this.h = new Lt, Ug(this, this.h)) : this.h = Ot();
        if (Ir()) {
            a = this.h;
            var b = Pu(this.l);
            if (!a.l) {
                a.g = b || null;
                a.g && (a.D.R(a.g, "activityMonitor", a.F), Ut(a));
                if (!(q.ima && q.ima.video && q.ima.video.client && q.ima.video.client.tagged)) {
                    w("ima.video.client.sdkTag", !0, void 0);
                    var c = q.document;
                    b = he(document, "SCRIPT");
                    var d = Ub(Nb(Ob("https://s0.2mdn.net/instream/video/client.js")));
                    Cc(b, d);
                    b.async = !0;
                    b.type = "text/javascript";
                    c = c.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c)
                }
                b = fs();
                $i(b);
                Lo.B().M = U.g;
                a.A = !0;
                Lo.B().l = !0;
                a.C = (x(null), null);
                b = Lo.B();
                c = "h" == bo(b) || "b" == bo(b);
                d = "exc" != P.B().U;
                c && d && (b.F = !0, b.H = new mm);
                a.l = !0
            }
            this.w = St(this.h, this.g.D)
        }
        Nv();
        a = (window.location.origin || "null").trim();
        b = "null" === a;
        c = window == window.top;
        d = !1;
        try {
            d = null != window.top.location.hostname
        } catch (e) {}
        ls.B().report(121, {
            origin: a,
            is_null: b,
            is_top: c,
            is_friendly_to_top: d,
            is_vpaid_adapter: U.xb()
        })
    };
    A(Ov, K);
    k = Ov.prototype;
    k.T = function() {
        this.C.X();
        var a = this.w;
        this.h.w["delete"](a);
        0 != U.g && (Lo.B().w[a] = null);
        Ov.sa.T.call(this)
    };
    k.destroy = function() {
        this.X()
    };
    k.Mf = function(a, b) {
        var c = this;
        Mv(function() {
            xr();
            yr();
            zr();
            var d = a.adTagUrl;
            d && ls.B().report(8, {
                adtagurl: d,
                customPlayback: $u(c.g),
                customClick: null != c.g.C,
                restrict: U.h
            });
            var e = "goog_" + Ic++;
            c.A.set(e, b || null);
            if (d) {
                var f = /iu=\/(\d+)\//.exec(Dc(d));
                (f = f && 2 == f.length ? f[1] : null) || (f = Hc((new lp(d)).h.get("client")), f = Wb(f) ? null : f)
            } else f = null;
            f = f || "";
            var g = Me(f);
            0 != g ? f = g : (g = q.top, f = Fe(g, "googlefcInactive") ? 4 : f && Fe(g, "googlefcPA-" + f) ? 2 : Fe(g, "googlefcNPA") ? 3 : 0);
            g = f;
            f = {};
            f.gfcPresent = (!!q.googlefc || Fe(q.top,
                "googlefcPresent")) && 4 != g;
            f.gfcUserConsent = g;
            g = {};
            if (U.w) {
                var h = Uq();
                if (g.isBrowserCookieEnabled = h) {
                    h = new lp(d);
                    var l = h.l;
                    h = Vb(h.g, "doubleclick.net") && (Wb(l) ? !1 : /\/gampad\/(live\/)?ads/.test(l))
                }
                h && (h = Sd.get("__gads"), g.gfpCookieValue = Hc(h))
            }
            try {
                -1 != window.location.search.indexOf("goog_newman=651800008") && (bs($r(), 651800008, "GvnExternalLayer"), console && console.log && console.log("goog_newman=651800008"))
            } catch (Ip) {}
            h = cs();
            l = {};
            l.limaExperimentIds = lg().sort().join(",");
            var m = 0 != U.g ? Lo.B().l : c.h.A;
            m =
                void 0 === m ? null : m;
            var n = {};
            null != m && (n.activeViewPushUpdates = m);
            n.activityMonitorMode = U.g;
            n.adsToken = U.M;
            n.autoPlayAdBreaks = U.o;
            n.companionBackfill = U.A;
            n.cookiesEnabled = U.w;
            n.disableCustomPlaybackForIOS10Plus = U.l;
            n.engagementDetection = !0;
            n.isGdpr = !0;
            n.isFunctionalTest = !1;
            n.isVpaidAdapter = U.xb();
            n["1pJar"] = U.N;
            n.numRedirects = U.K;
            n.pageCorrelator = U.P;
            n.persistentStateCorrelator = Vf();
            n.playerType = U.D;
            n.playerVersion = U.F;
            n.ppid = U.V;
            n.privacyControls = U.Y;
            n.reportMediaRequests = !1;
            n.restrictToCustomPlayback =
                U.h;
            n.streamCorrelator = U.Z;
            n.testingConfig = qr().g;
            n.unloadAbandonPingEnabled = !0;
            n.urlSignals = U.ia;
            n.vpaidMode = U.I;
            m = {};
            m.contentMediaUrl = c.g.H;
            m.customClickTrackingProvided = null != c.g.C;
            a: {
                var v = jf();v = ba(v);
                for (var r = v.next(); !r.done; r = v.next())
                    if (r = r.value, r.url && r.url.includes("amp=1")) {
                        v = !0;
                        break a
                    }
                v = null != window.context ? 0 < parseInt(window.context.ampcontextVersion, 10) : null != mf().l
            }
            m.isAmp = v;
            a: {
                try {
                    var u = window.top.location.href
                } catch (Ip) {
                    u = 2;
                    break a
                }
                u = null == u ? 2 : u == window.document.location.href ?
                    0 : 1
            }
            m.iframeState = u;
            m.imaHostingDomain = window.document.domain;
            if (fk()) u = window.location.href;
            else {
                r = mf();
                u = r.h;
                v = r.g;
                r = r.l;
                var z = null;
                r && (z = Dv(r.url));
                u = z ? z : u && u.url ? u.url : v && v.url ? v.url : ""
            }
            m.location = u;
            m.referrer = window.document.referrer;
            m.domLoadTime = js;
            m.sdkImplLoadTime = ks;
            u = F().location.ancestorOrigins;
            m.topOrigin = u ? 0 < u.length && 200 > u[u.length - 1].length ? u[u.length - 1] : "" : null;
            m.osdId = c.w;
            m.usesCustomVideoPlayback = $u(c.g);
            m.usesInlinePlayback = c.g.K;
            v = c.g.F;
            u = [];
            z = r = "";
            if (null != v) {
                r = v;
                z = !0;
                z = void 0 ===
                    z ? !1 : z;
                for (var T = [], pb = 0; r && 25 > pb; ++pb) {
                    var Ta = "";
                    void 0 !== z && z || (Ta = (Ta = 9 !== r.nodeType && r.id) ? "/" + Ta : "");
                    a: {
                        if (r && r.nodeName && r.parentElement) {
                            var Id = r.nodeName.toString().toLowerCase();
                            for (var Ng = r.parentElement.childNodes, Og = 0, af = 0; af < Ng.length; ++af) {
                                var Jd = Ng[af];
                                if (Jd.nodeName && Jd.nodeName.toString().toLowerCase() === Id) {
                                    if (r === Jd) {
                                        Id = "." + Og;
                                        break a
                                    }++Og
                                }
                            }
                        }
                        Id = ""
                    }
                    T.push((r.nodeName && r.nodeName.toString().toLowerCase()) + Ta + Id);
                    r = r.parentElement
                }
                r = T.join();
                if (v) {
                    v = (v = v.ownerDocument) && (v.defaultView ||
                        v.parentWindow) || null;
                    z = [];
                    if (v) try {
                        var L = v.parent;
                        for (T = 0; L && L !== v && 25 > T; ++T) {
                            var bc = L.frames;
                            for (pb = 0; pb < bc.length; ++pb)
                                if (v === bc[pb]) {
                                    z.push(pb);
                                    break
                                }
                            v = L;
                            L = v.parent
                        }
                    } catch (Ip) {}
                    z = z.join()
                } else z = ""
            }
            u.push(r, z);
            if (null != d) {
                for (L = 0; L < Sp.length - 1; ++L) u.push(xe(d, Sp[L]) || "");
                d = xe(d, "videoad_start_delay");
                L = "";
                d && (d = parseInt(d, 10), L = 0 > d ? "postroll" : 0 == d ? "preroll" : "midroll");
                u.push(L)
            } else
                for (d = 0; d < Sp.length; ++d) u.push("");
            d = u.join(":");
            L = d.length;
            if (0 == L) d = 0;
            else {
                bc = 305419896;
                for (u = 0; u < L; u++) bc ^= (bc <<
                    5) + (bc >> 2) + d.charCodeAt(u) & 4294967295;
                d = 0 < bc ? bc : 4294967296 + bc
            }
            m.videoAdKey = d.toString();
            d = {};
            L = {};
            L.adsResponse = a.adsResponse;
            L.videoPlayActivation = a.videoPlayActivation;
            L.videoPlayMuted = a.videoPlayMuted;
            L.videoContinuousPlay = a.videoContinuousPlay;
            L.adTagUrl = a.adTagUrl;
            L.contentDuration = a.contentDuration;
            L.contentKeywords = a.contentKeywords;
            L.contentTitle = a.contentTitle;
            L.linearAdSlotWidth = a.linearAdSlotWidth;
            L.linearAdSlotHeight = a.linearAdSlotHeight;
            L.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth;
            L.nonLinearAdSlotHeight =
                a.nonLinearAdSlotHeight;
            L.forceNonLinearFullSlot = a.forceNonLinearFullSlot;
            L.liveStreamPrefetchSeconds = a.liveStreamPrefetchSeconds;
            L.vastLoadTimeout = a.vastLoadTimeout;
            Jb(d, L);
            d.consentSettings = f;
            d.cookieSettings = g;
            d.experimentState = h;
            d.imalibExperiments = l;
            d.settings = n;
            d.videoEnvironment = m;
            e = Pu(c.l, e);
            c.C.R(e, "adsLoader", c.D);
            e.send("adsLoader", "requestAds", d)
        })
    };
    k.Lf = function() {
        return U
    };
    k.Kf = function() {
        Pu(this.l).send("adsLoader", "contentComplete")
    };
    var Nv = function() {
        Mv(function() {
            xr();
            yr();
            zr()
        })
    };
    Ov.prototype.D = function(a) {
        var b = a.ca;
        switch (b) {
            case "adsLoaded":
                b = a.fa;
                a = a.Mb;
                b = new Y(this.h, this.g, b.adTagUrl || "", b.adCuePoints, this.w, b.isCustomClickTrackingAllowed, Pu(this.l, a));
                this.dispatchEvent(new pv(b, Pv(this, a)));
                break;
            case "error":
                b = a.fa;
                a = a.Mb;
                var c = Br(b);
                this.dispatchEvent(new Cr(c, Pv(this, a)));
                a = {
                    error: b.errorCode,
                    vis: pg(document)
                };
                ls.B().report(7, a);
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new W(b, null, a.fa))
        }
    };
    var Pv = function(a, b) {
        var c = a.A.get(b);
        a.A["delete"](b);
        return c
    };
    var Z = function() {};
    k = Z.prototype;
    k.clone = function() {
        var a = new Z;
        a.videoContinuousPlay = this.videoContinuousPlay;
        a.videoPlayActivation = this.videoPlayActivation;
        a.videoPlayMuted = this.videoPlayMuted;
        a.adTagUrl = this.adTagUrl;
        a.adsResponse = this.adsResponse;
        a.contentDuration = this.contentDuration;
        a.contentKeywords = this.contentKeywords ? this.contentKeywords.slice() : null;
        a.contentTitle = this.contentTitle;
        a.linearAdSlotWidth = this.linearAdSlotWidth;
        a.linearAdSlotHeight = this.linearAdSlotHeight;
        a.nonLinearAdSlotWidth = this.nonLinearAdSlotWidth;
        a.nonLinearAdSlotHeight =
            this.nonLinearAdSlotHeight;
        a.forceNonLinearFullSlot = this.forceNonLinearFullSlot;
        a.liveStreamPrefetchSeconds = this.liveStreamPrefetchSeconds;
        a.vastLoadTimeout = this.vastLoadTimeout;
        return a
    };
    k.videoPlayActivation = "unknown";
    k.videoPlayMuted = "unknown";
    k.videoContinuousPlay = "0";
    k.liveStreamPrefetchSeconds = 0;
    k.linearAdSlotWidth = 0;
    k.linearAdSlotHeight = 0;
    k.nonLinearAdSlotWidth = 0;
    k.nonLinearAdSlotHeight = 0;
    k.forceNonLinearFullSlot = !1;
    k.setAdWillAutoPlay = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    };
    k.setAdWillPlayMuted = function(a) {
        this.videoPlayMuted = a ? "muted" : "unmuted"
    };
    k.setContinuousPlayback = function(a) {
        this.videoContinuousPlay = a ? "2" : "1"
    };
    k.vastLoadTimeout = 5E3;
    X.prototype.getCompanionAds = X.prototype.De;
    X.prototype.isLinear = X.prototype.isLinear;
    X.prototype.isSkippable = X.prototype.$e;
    X.prototype.isUiDisabled = X.prototype.af;
    X.prototype.getAdId = X.prototype.h;
    X.prototype.getAdSystem = X.prototype.Ae;
    X.prototype.getAdvertiserName = X.prototype.Be;
    X.prototype.getApiFramework = X.prototype.Ce;
    X.prototype.getContentType = X.prototype.Ee;
    X.prototype.getCreativeId = X.prototype.o;
    X.prototype.getCreativeAdId = X.prototype.l;
    X.prototype.getDescription = X.prototype.Ge;
    X.prototype.getTitle = X.prototype.Me;
    X.prototype.getDuration = X.prototype.getDuration;
    X.prototype.getHeight = X.prototype.He;
    X.prototype.getWidth = X.prototype.We;
    X.prototype.getVastMediaHeight = X.prototype.Ue;
    X.prototype.getVastMediaWidth = X.prototype.Ve;
    X.prototype.getVastMediaBitrate = X.prototype.Te;
    X.prototype.getWrapperCreativeIds = X.prototype.Ze;
    X.prototype.getWrapperAdIds = X.prototype.Xe;
    X.prototype.getWrapperAdSystems = X.prototype.Ye;
    X.prototype.getTraffickingParameters = X.prototype.Ne;
    X.prototype.getTraffickingParametersString = X.prototype.Oe;
    X.prototype.getAdPodInfo = X.prototype.ze;
    X.prototype.getUiElements = X.prototype.Pe;
    X.prototype.getMinSuggestedDuration = X.prototype.Je;
    X.prototype.getMediaUrl = X.prototype.Ie;
    X.prototype.getSurveyUrl = X.prototype.Le;
    X.prototype.getSkipTimeOffset = X.prototype.Ke;
    X.prototype.getDealId = X.prototype.Fe;
    X.prototype.getUniversalAdIds = X.prototype.Se;
    X.prototype.getUniversalAdIdValue = X.prototype.Re;
    X.prototype.getUniversalAdIdRegistry = X.prototype.Qe;
    ir.prototype.getCuePoints = ir.prototype.g;
    w("google.ima.AdCuePoints.PREROLL", 0, window);
    w("google.ima.AdCuePoints.POSTROLL", -1, window);
    w("google.ima.AdDisplayContainer", av, window);
    av.prototype.initialize = av.prototype.V;
    av.prototype.destroy = av.prototype.destroy;
    mt.prototype.getPodIndex = mt.prototype.we;
    mt.prototype.getTimeOffset = mt.prototype.xe;
    mt.prototype.getTotalAds = mt.prototype.ye;
    mt.prototype.getMaxDuration = mt.prototype.ve;
    mt.prototype.getAdPosition = mt.prototype.te;
    mt.prototype.getIsBumper = mt.prototype.ue;
    nr.prototype.getAdIdValue = nr.prototype.o;
    nr.prototype.getAdIdRegistry = nr.prototype.l;
    w("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
    w("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
    w("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
    w("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
    w("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
    w("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
    w("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
    w("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
    w("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
    w("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
    w("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
    w("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
    w("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
    w("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
    w("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
    w("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
    w("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
    w("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
    w("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
    w("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
    w("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
    w("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
    w("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
    w("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
    w("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
    w("google.ima.AdError.ErrorCode.AUTOPLAY_DISALLOWED", 1205, window);
    w("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    w("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    w("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    w("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    w("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    w("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    w("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    w("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
    w("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
    Ar.prototype.getErrorCode = Ar.prototype.pe;
    Ar.prototype.getVastErrorCode = Ar.prototype.de;
    Ar.prototype.getInnerError = Ar.prototype.qe;
    Ar.prototype.getMessage = Ar.prototype.re;
    Ar.prototype.getType = Ar.prototype.se;
    w("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
    Cr.prototype.getError = Cr.prototype.w;
    Cr.prototype.getUserRequestContext = Cr.prototype.A;
    w("google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED", "contentResumeRequested", window);
    w("google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED", "contentPauseRequested", window);
    w("google.ima.AdEvent.Type.CLICK", "click", window);
    w("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
    w("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
    w("google.ima.AdEvent.Type.STARTED", "start", window);
    w("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
    w("google.ima.AdEvent.Type.PAUSED", "pause", window);
    w("google.ima.AdEvent.Type.RESUMED", "resume", window);
    w("google.ima.AdEvent.Type.AD_PROGRESS", "adProgress", window);
    w("google.ima.AdEvent.Type.AD_BUFFERING", "adBuffering", window);
    w("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstQuartile", window);
    w("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
    w("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdQuartile", window);
    w("google.ima.AdEvent.Type.COMPLETE", "complete", window);
    w("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
    w("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
    w("google.ima.AdEvent.Type.LOADED", "loaded", window);
    w("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
    w("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
    w("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
    w("google.ima.AdEvent.Type.INTERACTION", "interaction", window);
    w("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
    w("google.ima.AdEvent.Type.SKIPPED", "skip", window);
    w("google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED", "skippableStateChanged", window);
    w("google.ima.AdEvent.Type.LOG", "log", window);
    w("google.ima.AdEvent.Type.VIEWABLE_IMPRESSION", "viewable_impression", window);
    w("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
    w("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
    W.prototype.type = W.prototype.type;
    W.prototype.getAd = W.prototype.C;
    W.prototype.getAdData = W.prototype.G;
    bv.prototype.getAdCuePoints = bv.prototype.o;
    w("google.ima.AdsLoader", Ov, window);
    Ov.prototype.getSettings = Ov.prototype.Lf;
    Ov.prototype.requestAds = Ov.prototype.Mf;
    Ov.prototype.contentComplete = Ov.prototype.Kf;
    Ov.prototype.destroy = Ov.prototype.destroy;
    w("google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED", "adsManagerLoaded", window);
    pv.prototype.getAdsManager = pv.prototype.w;
    pv.prototype.getUserRequestContext = pv.prototype.A;
    w("google.ima.CompanionAdSelectionSettings", wt, window);
    w("google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE", "Image", void 0);
    w("google.ima.CompanionAdSelectionSettings.CreativeType.FLASH", "Flash", void 0);
    w("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
    w("google.ima.CompanionAdSelectionSettings.ResourceType.HTML", "Html", void 0);
    w("google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME", "IFrame", void 0);
    w("google.ima.CompanionAdSelectionSettings.ResourceType.STATIC", "Static", void 0);
    w("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
    w("google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE", "IgnoreSize", void 0);
    w("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH", "SelectExactMatch", void 0);
    w("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH", "SelectNearMatch", void 0);
    w("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    w("ima.ImaSdkSettings", S, window);
    w("google.ima.settings", U, window);
    S.prototype.setCompanionBackfill = S.prototype.xf;
    S.prototype.getCompanionBackfill = S.prototype.mf;
    S.prototype.setAutoPlayAdBreaks = S.prototype.wf;
    S.prototype.isAutoPlayAdBreak = S.prototype.vf;
    S.prototype.setPpid = S.prototype.Gf;
    S.prototype.getPpid = S.prototype.uf;
    S.prototype.setVpaidAllowed = S.prototype.If;
    S.prototype.setVpaidMode = S.prototype.Jf;
    S.prototype.setIsVpaidAdapter = S.prototype.Bf;
    S.prototype.isVpaidAdapter = S.prototype.xb;
    S.prototype.setRestrictToCustomPlayback = S.prototype.Hf;
    S.prototype.isRestrictToCustomPlayback = S.prototype.Pf;
    S.prototype.setNumRedirects = S.prototype.Df;
    S.prototype.getNumRedirects = S.prototype.rf;
    S.prototype.getLocale = S.prototype.ce;
    S.prototype.setLocale = S.prototype.Cf;
    S.prototype.getPlayerType = S.prototype.sf;
    S.prototype.setPlayerType = S.prototype.Ef;
    S.prototype.getDisableFlashAds = S.prototype.qf;
    S.prototype.setDisableFlashAds = S.prototype.Af;
    S.prototype.getPlayerVersion = S.prototype.tf;
    S.prototype.setPlayerVersion = S.prototype.Ff;
    S.prototype.setPageCorrelator = S.prototype.$;
    S.prototype.setStreamCorrelator = S.prototype.aa;
    S.prototype.setDisableCustomPlaybackForIOS10Plus = S.prototype.zf;
    S.prototype.getDisableCustomPlaybackForIOS10Plus = S.prototype.nf;
    S.prototype.setCookiesEnabled = S.prototype.yf;
    w("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
    w("google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD", "on_master_ad", void 0);
    w("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
    w("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
    w("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
    w("google.ima.AdsRenderingSettings", or, window);
    w("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    w("google.ima.AdsRequest", Z, window);
    Z.prototype.adTagUrl = Z.prototype.adTagUrl;
    Z.prototype.adsResponse = Z.prototype.adsResponse;
    Z.prototype.nonLinearAdSlotHeight = Z.prototype.nonLinearAdSlotHeight;
    Z.prototype.nonLinearAdSlotWidth = Z.prototype.nonLinearAdSlotWidth;
    Z.prototype.linearAdSlotHeight = Z.prototype.linearAdSlotHeight;
    Z.prototype.linearAdSlotWidth = Z.prototype.linearAdSlotWidth;
    Z.prototype.setAdWillAutoPlay = Z.prototype.setAdWillAutoPlay;
    Z.prototype.setAdWillPlayMuted = Z.prototype.setAdWillPlayMuted;
    Z.prototype.setContinuousPlayback = Z.prototype.setContinuousPlayback;
    Z.prototype.contentDuration = Z.prototype.contentDuration;
    Z.prototype.contentKeywords = Z.prototype.contentKeywords;
    Z.prototype.contentTitle = Z.prototype.contentTitle;
    Z.prototype.vastLoadTimeout = Z.prototype.vastLoadTimeout;
    w("google.ima.VERSION", "3.339.0", void 0);
    w("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
    w("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
    w("google.ima.ViewMode.NORMAL", "normal", void 0);
    w("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
    Y.prototype.isCustomPlaybackUsed = Y.prototype.Of;
    Y.prototype.isCustomClickTrackingUsed = Y.prototype.Nf;
    Y.prototype.destroy = Y.prototype.destroy;
    Y.prototype.init = Y.prototype.jf;
    Y.prototype.start = Y.prototype.start;
    Y.prototype.stop = Y.prototype.stop;
    Y.prototype.pause = Y.prototype.pause;
    Y.prototype.resume = Y.prototype.resume;
    Y.prototype.getCuePoints = Y.prototype.ff;
    Y.prototype.getCurrentAd = Y.prototype.gf;
    Y.prototype.getRemainingTime = Y.prototype.hf;
    Y.prototype.expand = Y.prototype.cf;
    Y.prototype.collapse = Y.prototype.bf;
    Y.prototype.getAdSkippableState = Y.prototype.df;
    Y.prototype.resize = Y.prototype.pd;
    Y.prototype.skip = Y.prototype.kf;
    Y.prototype.getVolume = Y.prototype.getVolume;
    Y.prototype.setVolume = Y.prototype.setVolume;
    Y.prototype.discardAdBreak = Y.prototype.be;
    Y.prototype.updateAdsRenderingSettings = Y.prototype.lf;
    Y.prototype.clicked = Y.prototype.Ra;
    Jt.prototype.getContent = Jt.prototype.getContent;
    Jt.prototype.getContentType = Jt.prototype.C;
    Jt.prototype.getHeight = Jt.prototype.G;
    Jt.prototype.getWidth = Jt.prototype.K;
})();