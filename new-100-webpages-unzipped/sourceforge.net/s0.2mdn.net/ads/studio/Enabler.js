(function() {
    var DEPS_GRAPH = {
        'enablermodule': [],
        'configurablemodule': ['enablermodule'],
        'gdnmodule': ['enablermodule'],
        'layoutsmodule': ['enablermodule'],
        'videomodule': ['enablermodule'],
        'configurablefillermodule': ['configurablemodule'],
        'layoutsfillermodule': ['layoutsmodule'],
        'rad_ui_videomodule': ['videomodule'],
        '$weak$': ['configurablefillermodule', 'configurablemodule', 'enablermodule', 'gdnmodule', 'layoutsfillermodule', 'layoutsmodule', 'rad_ui_videomodule', 'videomodule']
    };
    window.STUDIO_SDK_START = +new Date();
    var g, aa = function(a) {
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
        ca = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        da;
    if ("function" == typeof Object.setPrototypeOf) da = Object.setPrototypeOf;
    else {
        var ea;
        a: {
            var fa = {
                    gd: !0
                },
                ha = {};
            try {
                ha.__proto__ = fa;
                ea = ha.gd;
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
    var ia = da,
        ja = function(a, b) {
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
            a.v = b.prototype
        },
        ka = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        la = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] =
                c.value)
        },
        ma = function(a, b) {
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
                b != d && null != b && la(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ma("Promise", function(a) {
        function b() {
            this.a = null
        }

        function c(k) {
            return k instanceof e ? k : new e(function(l) {
                l(k)
            })
        }
        if (a) return a;
        b.prototype.b = function(k) {
            if (null == this.a) {
                this.a = [];
                var l = this;
                this.f(function() {
                    l.g()
                })
            }
            this.a.push(k)
        };
        var d = ka.setTimeout;
        b.prototype.f = function(k) {
            d(k, 0)
        };
        b.prototype.g = function() {
            for (; this.a && this.a.length;) {
                var k = this.a;
                this.a = [];
                for (var l = 0; l < k.length; ++l) {
                    var m = k[l];
                    k[l] = null;
                    try {
                        m()
                    } catch (p) {
                        this.h(p)
                    }
                }
            }
            this.a = null
        };
        b.prototype.h = function(k) {
            this.f(function() {
                throw k;
            })
        };
        var e = function(k) {
            this.b = 0;
            this.f = void 0;
            this.a = [];
            var l = this.h();
            try {
                k(l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.h = function() {
            function k(p) {
                return function(r) {
                    m || (m = !0, p.call(l, r))
                }
            }
            var l = this,
                m = !1;
            return {
                resolve: k(this.w),
                reject: k(this.g)
            }
        };
        e.prototype.w = function(k) {
            if (k === this) this.g(new TypeError("A Promise cannot resolve to itself"));
            else if (k instanceof e) this.Y(k);
            else {
                a: switch (typeof k) {
                    case "object":
                        var l = null != k;
                        break a;
                    case "function":
                        l = !0;
                        break a;
                    default:
                        l = !1
                }
                l ? this.o(k) : this.B(k)
            }
        };
        e.prototype.o = function(k) {
            var l = void 0;
            try {
                l = k.then
            } catch (m) {
                this.g(m);
                return
            }
            "function" == typeof l ? this.A(l, k) : this.B(k)
        };
        e.prototype.g = function(k) {
            this.j(2, k)
        };
        e.prototype.B = function(k) {
            this.j(1, k)
        };
        e.prototype.j = function(k, l) {
            if (0 != this.b) throw Error("Cannot settle(" + k + ", " + l + "): Promise already settled in state" + this.b);
            this.b = k;
            this.f = l;
            this.l()
        };
        e.prototype.l = function() {
            if (null != this.a) {
                for (var k = 0; k < this.a.length; ++k) f.b(this.a[k]);
                this.a = null
            }
        };
        var f = new b;
        e.prototype.Y = function(k) {
            var l =
                this.h();
            k.eb(l.resolve, l.reject)
        };
        e.prototype.A = function(k, l) {
            var m = this.h();
            try {
                k.call(l, m.resolve, m.reject)
            } catch (p) {
                m.reject(p)
            }
        };
        e.prototype.then = function(k, l) {
            function m(V, Ba) {
                return "function" == typeof V ? function(ib) {
                    try {
                        p(V(ib))
                    } catch (Ia) {
                        r(Ia)
                    }
                } : Ba
            }
            var p, r, H = new e(function(V, Ba) {
                p = V;
                r = Ba
            });
            this.eb(m(k, p), m(l, r));
            return H
        };
        e.prototype["catch"] = function(k) {
            return this.then(void 0, k)
        };
        e.prototype.eb = function(k, l) {
            function m() {
                switch (p.b) {
                    case 1:
                        k(p.f);
                        break;
                    case 2:
                        l(p.f);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            p.b);
                }
            }
            var p = this;
            null == this.a ? f.b(m) : this.a.push(m)
        };
        e.resolve = c;
        e.reject = function(k) {
            return new e(function(l, m) {
                m(k)
            })
        };
        e.race = function(k) {
            return new e(function(l, m) {
                for (var p = ba(k), r = p.next(); !r.done; r = p.next()) c(r.value).eb(l, m)
            })
        };
        e.all = function(k) {
            var l = ba(k),
                m = l.next();
            return m.done ? c([]) : new e(function(p, r) {
                function H(ib) {
                    return function(Ia) {
                        V[ib] = Ia;
                        Ba--;
                        0 == Ba && p(V)
                    }
                }
                var V = [],
                    Ba = 0;
                do V.push(void 0), Ba++, c(m.value).eb(H(V.length - 1), r), m = l.next(); while (!m.done)
            })
        };
        return e
    });
    var na = function() {
            na = function() {};
            ka.Symbol || (ka.Symbol = oa)
        },
        pa = function(a, b) {
            this.a = a;
            la(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            })
        };
    pa.prototype.toString = function() {
        return this.a
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
            var a = ka.Symbol.iterator;
            a || (a = ka.Symbol.iterator = ka.Symbol("Symbol.iterator"));
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
            a[ka.Symbol.iterator] = function() {
                return this
            };
            return a
        },
        sa = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        };
    ma("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, b, "endsWith");
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    });
    ma("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var k = 0; k < f && c < e;)
                if (d[c++] != b[k++]) return !1;
            return k >= f
        }
    });
    var ta = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    ma("WeakMap", function(a) {
        function b() {}

        function c(m) {
            var p = typeof m;
            return "object" === p && null !== m || "function" === p
        }

        function d(m) {
            if (!ta(m, f)) {
                var p = new b;
                la(m, f, {
                    value: p
                })
            }
        }

        function e(m) {
            var p = Object[m];
            p && (Object[m] = function(r) {
                if (r instanceof b) return r;
                d(r);
                return p(r)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var m = Object.seal({}),
                        p = Object.seal({}),
                        r = new a([
                            [m, 2],
                            [p, 3]
                        ]);
                    if (2 != r.get(m) || 3 != r.get(p)) return !1;
                    r["delete"](m);
                    r.set(p, 4);
                    return !r.has(m) && 4 == r.get(p)
                } catch (H) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var k = 0,
            l = function(m) {
                this.a = (k += Math.random() + 1).toString();
                if (m) {
                    m = ba(m);
                    for (var p; !(p = m.next()).done;) p = p.value, this.set(p[0], p[1])
                }
            };
        l.prototype.set = function(m, p) {
            if (!c(m)) throw Error("Invalid WeakMap key");
            d(m);
            if (!ta(m, f)) throw Error("WeakMap key fail: " + m);
            m[f][this.a] = p;
            return this
        };
        l.prototype.get = function(m) {
            return c(m) && ta(m, f) ? m[f][this.a] : void 0
        };
        l.prototype.has = function(m) {
            return c(m) && ta(m, f) && ta(m[f],
                this.a)
        };
        l.prototype["delete"] = function(m) {
            return c(m) && ta(m, f) && ta(m[f], this.a) ? delete m[f][this.a] : !1
        };
        return l
    });
    ma("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var l = Object.seal({
                            x: 4
                        }),
                        m = new a(ba([
                            [l, "s"]
                        ]));
                    if ("s" != m.get(l) || 1 != m.size || m.get({
                            x: 4
                        }) || m.set({
                            x: 4
                        }, "t") != m || 2 != m.size) return !1;
                    var p = m.entries(),
                        r = p.next();
                    if (r.done || r.value[0] != l || "s" != r.value[1]) return !1;
                    r = p.next();
                    return r.done || 4 != r.value[0].x || "t" != r.value[1] || !p.next().done ? !1 : !0
                } catch (H) {
                    return !1
                }
            }()) return a;
        ra();
        var b = new WeakMap,
            c = function(l) {
                this.b = {};
                this.a =
                    f();
                this.size = 0;
                if (l) {
                    l = ba(l);
                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        c.prototype.set = function(l, m) {
            l = 0 === l ? 0 : l;
            var p = d(this, l);
            p.list || (p.list = this.b[p.id] = []);
            p.X ? p.X.value = m : (p.X = {
                next: this.a,
                ta: this.a.ta,
                head: this.a,
                key: l,
                value: m
            }, p.list.push(p.X), this.a.ta.next = p.X, this.a.ta = p.X, this.size++);
            return this
        };
        c.prototype["delete"] = function(l) {
            l = d(this, l);
            return l.X && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.b[l.id], l.X.ta.next = l.X.next, l.X.next.ta = l.X.ta, l.X.head =
                null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.b = {};
            this.a = this.a.ta = f();
            this.size = 0
        };
        c.prototype.has = function(l) {
            return !!d(this, l).X
        };
        c.prototype.get = function(l) {
            return (l = d(this, l).X) && l.value
        };
        c.prototype.entries = function() {
            return e(this, function(l) {
                return [l.key, l.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(l) {
                return l.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(l) {
                return l.value
            })
        };
        c.prototype.forEach = function(l, m) {
            for (var p = this.entries(), r; !(r = p.next()).done;) r =
                r.value, l.call(m, r[1], r[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(l, m) {
                var p = m && typeof m;
                "object" == p || "function" == p ? b.has(m) ? p = b.get(m) : (p = "" + ++k, b.set(m, p)) : p = "p_" + m;
                var r = l.b[p];
                if (r && ta(l.b, p))
                    for (l = 0; l < r.length; l++) {
                        var H = r[l];
                        if (m !== m && H.key !== H.key || m === H.key) return {
                            id: p,
                            list: r,
                            index: l,
                            X: H
                        }
                    }
                return {
                    id: p,
                    list: r,
                    index: -1,
                    X: void 0
                }
            },
            e = function(l, m) {
                var p = l.a;
                return qa(function() {
                    if (p) {
                        for (; p.head != l.a;) p = p.ta;
                        for (; p.next != p.head;) return p = p.next, {
                            done: !1,
                            value: m(p)
                        };
                        p = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var l = {};
                return l.ta = l.next = l.head = l
            },
            k = 0;
        return c
    });
    ma("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ma("Array.prototype.includes", function(a) {
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
    var h = this || self,
        n = function(a, b, c) {
            a = a.split(".");
            c = c || h;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        ua = /^[\w+/_-]+[=]{0,2}$/,
        va = null,
        wa = function(a, b) {
            a = a.split(".");
            b = b || h;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        xa = function() {},
        ya = function() {
            throw Error("unimplemented abstract method");
        },
        za = function(a) {
            a.Fb = void 0;
            a.na = function() {
                return a.Fb ?
                    a.Fb : a.Fb = new a
            }
        },
        Aa = function(a) {
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
        q = function(a) {
            return "array" == Aa(a)
        },
        Ca = function(a) {
            var b = Aa(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        t = function(a) {
            return "function" == Aa(a)
        },
        u = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Fa = function(a) {
            return a[Da] || (a[Da] = ++Ea)
        },
        Da = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ea = 0,
        Ga = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ha = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d =
                    Array.prototype.slice.call(arguments, 2);
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
        v = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? v = Ga : v = Ha;
            return v.apply(null, arguments)
        },
        Ja = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        Ka = Date.now || function() {
            return +new Date
        },
        w = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.v = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
    var La = function(a, b) {
        this.B = Math.random() < a;
        this.j = b;
        this.h = null;
        this.g = ""
    };
    La.prototype.b = function() {
        return this.B && null !== this.h ? (this.j + "//pagead2.googlesyndication.com/pagead/gen_204/?id=" + this.h + this.g).substring(0, 2E3) : ""
    };
    var Ma = function() {};
    n("studio.common.Environment", Ma, void 0);
    Ma.Type = {
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
    var Na = 6;
    Ma.addType = function(a) {
        Na |= a;
        Oa(a)
    };
    var Pa = function(a) {
        Na = a | 6;
        Oa(Na)
    };
    Ma.setType = Pa;
    var x = function(a) {
        return (Na & a) == a
    };
    Ma.hasType = x;
    Ma.getValue = function() {
        return Na
    };
    var Oa = function(a) {
            Qa(a, 2, 1);
            Qa(a, 1, 2);
            Qa(a, 4, 8);
            Qa(a, 8, 4);
            Qa(a, 128, 64);
            Qa(a, 64, 128);
            Qa(a, 256, 2)
        },
        Qa = function(a, b, c) {
            (a & b) == b && (Na |= b, Na &= ~c)
        };
    var Ra = function(a, b) {
        La.call(this, a, b);
        this.f = this.a = null;
        this.h = "rmad_mod"
    };
    w(Ra, La);
    Ra.prototype.b = function() {
        return null !== this.a && null !== this.f ? (this.g = "&status=" + this.a + "&type=" + this.f, Ra.v.b.call(this)) : ""
    };
    var Sa = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Sa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    w(Sa, Error);
    Sa.prototype.name = "CustomError";
    var Ta;
    var Ua = function(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Sa.call(this, c + a[d])
    };
    w(Ua, Sa);
    Ua.prototype.name = "AssertionError";
    var Va = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) {
                e += ": " + c;
                var f = d
            } else a && (e += ": " + a, f = b);
            throw new Ua("" + e, f || []);
        },
        y = function(a, b, c) {
            a || Va("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Wa = function(a, b) {
            throw new Ua("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Xa = function(a, b, c) {
            "number" !== typeof a && Va("Expected number but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ya = function(a, b, c) {
            "string" !== typeof a && Va("Expected string but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        Za = function(a, b, c) {
            t(a) || Va("Expected function but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        $a = function(a, b, c) {
            q(a) || Va("Expected array but got %s: %s.", [Aa(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        bb = function(a, b, c, d) {
            a instanceof b || Va("Expected instanceof %s but got %s.", [ab(b), ab(a)], c, Array.prototype.slice.call(arguments, 3))
        },
        ab = function(a) {
            return a instanceof Function ? a.displayName || a.name || "unknown type name" :
                a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
        };
    var cb = Array.prototype.indexOf ? function(a, b) {
            y(null != a.length);
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        z = Array.prototype.forEach ? function(a, b, c) {
            y(null != a.length);
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        db = Array.prototype.filter ?
        function(a, b, c) {
            y(null != a.length);
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, k = "string" === typeof a ? a.split("") : a, l = 0; l < d; l++)
                if (l in k) {
                    var m = k[l];
                    b.call(c, m, l, a) && (e[f++] = m)
                }
            return e
        },
        eb = Array.prototype.map ? function(a, b, c) {
            y(null != a.length);
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++) k in f && (e[k] = b.call(c, f[k], k, a));
            return e
        },
        fb = Array.prototype.some ? function(a, b,
            c) {
            y(null != a.length);
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        gb = Array.prototype.every ? function(a, b, c) {
            y(null != a.length);
            return Array.prototype.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        jb = function(a) {
            var b = h.performance.getEntriesByType("resource");
            a = hb(b, a,
                void 0);
            return 0 > a ? null : "string" === typeof b ? b.charAt(a) : b[a]
        },
        hb = function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        lb = function(a, b) {
            b = cb(a, b);
            var c;
            (c = 0 <= b) && kb(a, b);
            return c
        },
        kb = function(a, b) {
            y(null != a.length);
            Array.prototype.splice.call(a, b, 1)
        },
        mb = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        nb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        ob = function(a,
            b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (Ca(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var k = 0; k < f; k++) a[e + k] = d[k]
                } else a.push(d)
            }
        },
        qb = function(a, b, c, d) {
            y(null != a.length);
            Array.prototype.splice.apply(a, pb(arguments, 1))
        },
        pb = function(a, b, c) {
            y(null != a.length);
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        sb = function(a, b) {
            a.sort(b || rb)
        },
        tb = function(a, b) {
            for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
                index: d,
                value: a[d]
            };
            var e = b || rb;
            sb(c, function(f, k) {
                return e(f.value, k.value) || f.index - k.index
            });
            for (d = 0; d < a.length; d++) a[d] = c[d].value
        },
        rb = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };
    var ub = function(a, b) {
            return 0 == a.lastIndexOf(b, 0)
        },
        vb = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        wb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        xb = /&/g,
        yb = /</g,
        zb = />/g,
        Ab = /"/g,
        Bb = /'/g,
        Cb = /\x00/g,
        Db = /[\x00&<>"']/,
        Eb = function(a, b) {
            return -1 != a.indexOf(b)
        },
        Gb = function(a, b) {
            var c = 0;
            a = wb(String(a)).split(".");
            b = wb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    k = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == k[0].length) break;
                    c = Fb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Fb(0 == f[2].length, 0 == k[2].length) || Fb(f[2], k[2]);
                    f = f[3];
                    k = k[3]
                } while (0 == c)
            }
            return c
        },
        Fb = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Hb;
    a: {
        var Ib = h.navigator;
        if (Ib) {
            var Jb = Ib.userAgent;
            if (Jb) {
                Hb = Jb;
                break a
            }
        }
        Hb = ""
    }
    var A = function(a) {
        return Eb(Hb, a)
    };
    var Kb = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Lb = function(a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        Mb = function(a, b, c) {
            var d = {},
                e;
            for (e in a) d[e] = b.call(c, a[e], e, a);
            return d
        },
        Nb = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        Ob = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Pb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Qb = function(a, b) {
            var c = Ca(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null == a) return;
                a = a[d[c]]
            }
            return a
        },
        Rb = function(a, b) {
            return null !== a && b in a
        },
        Sb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Tb = function(a, b) {
            return null !== a && b in a ? a[b] : void 0
        },
        Ub = function(a, b, c) {
            b in a || (a[b] = c)
        },
        Vb = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Wb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Xb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Wb.length; f++) c =
                    Wb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Yb = function(a) {
            var b = arguments.length;
            if (1 == b && q(arguments[0])) return Yb.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        };
    var Zb = function() {
            return A("Firefox") || A("FxiOS")
        },
        $b = function() {
            return (A("Chrome") || A("CriOS")) && !A("Edge")
        };
    var ac = function(a, b) {
        a: {
            try {
                var c = a && a.ownerDocument,
                    d = c && (c.defaultView || c.parentWindow);
                d = d || h;
                if (d.Element && d.Location) {
                    var e = d;
                    break a
                }
            } catch (k) {}
            e = null
        }
        if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
            if (u(a)) try {
                var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
            } catch (k) {
                f = "<object could not be stringified>"
            } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
            Wa("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
                b, f)
        }
    };
    var bc = function() {
            return null
        },
        cc = function(a) {
            var b = 1;
            b = b || 0;
            return function() {
                return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
            }
        };
    var fc = function(a, b) {
        this.a = a === dc && b || "";
        this.b = ec
    };
    fc.prototype.xa = !0;
    fc.prototype.sa = function() {
        return this.a
    };
    fc.prototype.toString = function() {
        return "Const{" + this.a + "}"
    };
    var gc = function(a) {
            if (a instanceof fc && a.constructor === fc && a.b === ec) return a.a;
            Wa("expected object of type Const, got '" + a + "'");
            return "type_error:Const"
        },
        ec = {},
        dc = {},
        hc = new fc(dc, "");
    var kc = function(a, b, c) {
        this.a = a === ic && b || "";
        this.b = a === ic && c || null;
        this.f = jc
    };
    kc.prototype.xa = !0;
    kc.prototype.sa = function() {
        return this.a.toString()
    };
    kc.prototype.toString = function() {
        return "TrustedResourceUrl{" + this.a + "}"
    };
    var lc = function(a) {
            if (a instanceof kc && a.constructor === kc && a.f === jc) return a.a;
            Wa("expected object of type TrustedResourceUrl, got '" + a + "' of type " + Aa(a));
            return "type_error:TrustedResourceUrl"
        },
        jc = {},
        ic = {};
    var oc = function(a, b) {
        this.a = a === mc && b || "";
        this.b = nc
    };
    oc.prototype.xa = !0;
    oc.prototype.sa = function() {
        return this.a.toString()
    };
    oc.prototype.toString = function() {
        return "SafeUrl{" + this.a + "}"
    };
    var pc = function(a) {
            if (a instanceof oc && a.constructor === oc && a.b === nc) return a.a;
            Wa("expected object of type SafeUrl, got '" + a + "' of type " + Aa(a));
            return "type_error:SafeUrl"
        },
        qc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        rc = function(a) {
            if (a instanceof oc) return a;
            a = "object" == typeof a && a.xa ? a.sa() : String(a);
            qc.test(a) || (a = "about:invalid#zClosurez");
            return new oc(mc, a)
        },
        nc = {},
        mc = {};
    var tc = function() {
        this.a = "";
        this.b = sc
    };
    tc.prototype.xa = !0;
    var sc = {};
    tc.prototype.sa = function() {
        return this.a
    };
    tc.prototype.toString = function() {
        return "SafeStyle{" + this.a + "}"
    };
    var uc = function(a) {
            var b = new tc;
            b.a = a;
            return b
        },
        vc = uc(""),
        xc = function(a) {
            if (a instanceof oc) return 'url("' + pc(a).toString().replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            a = a instanceof fc ? gc(a) : wc(String(a));
            if (/[{;}]/.test(a)) throw new Ua("Value does not allow [{;}], got: %s.", [a]);
            return a
        },
        wc = function(a) {
            var b = a.replace(yc, "$1").replace(yc, "$1").replace(zc, "url");
            if (Ac.test(b)) {
                if (Bc.test(a)) return Wa("String value disallows comments, got: " + a), "zClosurez";
                for (var c = b = !0, d = 0; d < a.length; d++) {
                    var e =
                        a.charAt(d);
                    "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                }
                if (!b || !c) return Wa("String value requires balanced quotes, got: " + a), "zClosurez";
                if (!Cc(a)) return Wa("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a), "zClosurez"
            } else return Wa("String value allows only [-,.\"'%_!# a-zA-Z0-9\\[\\]] and simple functions, got: " + a), "zClosurez";
            return Dc(a)
        },
        Cc = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" ==
                    e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        },
        Ac = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        zc = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        yc = /\b(calc|cubic-bezier|fit-content|hsl|hsla|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
        Bc = /\/\*/,
        Dc = function(a) {
            return a.replace(zc, function(b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function(k, l, m) {
                    f = l;
                    return m
                });
                b = rc(d).sa();
                return c + f + b + f + e
            })
        };
    var Fc = function() {
        this.a = "";
        this.b = Ec
    };
    Fc.prototype.xa = !0;
    var Ec = {},
        Hc = function(a, b) {
            if (Eb(a, "<")) throw Error("Selector does not allow '<', got: " + a);
            var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
            if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
            a: {
                for (var d = {
                        "(": ")",
                        "[": "]"
                    }, e = [], f = 0; f < c.length; f++) {
                    var k = c[f];
                    if (d[k]) e.push(d[k]);
                    else if (Sb(d, k) && e.pop() != k) {
                        c = !1;
                        break a
                    }
                }
                c = 0 == e.length
            }
            if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
            if (!(b instanceof tc)) {
                c = "";
                for (var l in b) {
                    if (!/^[-_a-zA-Z0-9]+$/.test(l)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + l);
                    d = b[l];
                    null != d && (d = q(d) ? eb(d, xc).join(" ") : xc(d), c += l + ":" + d + ";")
                }
                b = c ? uc(c) : vc
            }
            b instanceof tc && b.constructor === tc && b.b === sc ? l = b.a : (Wa("expected object of type SafeStyle, got '" + b + "' of type " + Aa(b)), l = "type_error:SafeStyle");
            a = a + "{" + l.replace(/</g, "\\3C ") + "}";
            return Gc(a)
        };
    Fc.prototype.sa = function() {
        return this.a
    };
    Fc.prototype.toString = function() {
        return "SafeStyleSheet{" + this.a + "}"
    };
    var Gc = function(a) {
        var b = new Fc;
        b.a = a;
        return b
    };
    Gc("");
    var Jc = function() {
        this.a = "";
        this.b = Ic
    };
    Jc.prototype.xa = !0;
    Jc.prototype.sa = function() {
        return this.a.toString()
    };
    Jc.prototype.toString = function() {
        return "SafeHtml{" + this.a + "}"
    };
    var Kc = function(a) {
            if (a instanceof Jc && a.constructor === Jc && a.b === Ic) return a.a;
            Wa("expected object of type SafeHtml, got '" + a + "' of type " + Aa(a));
            return "type_error:SafeHtml"
        },
        Ic = {},
        Lc = function(a) {
            var b = new Jc;
            b.a = a;
            return b
        };
    Lc("<!DOCTYPE html>");
    var Mc = Lc("");
    Lc("<br>");
    var Nc = function(a) {
            var b = new kc(ic, gc(hc), null);
            ac(a, "HTMLIFrameElement");
            a.src = b.b ? b.b : lc(b).toString()
        },
        Oc = function(a, b) {
            ac(a, "HTMLScriptElement");
            a.src = lc(b);
            if (null === va) b: {
                b = h.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ua.test(b)) {
                    va = b;
                    break b
                }
                va = ""
            }
            b = va;
            b && a.setAttribute("nonce", b)
        };
    var Pc = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Qc = function(a) {
            Db.test(a) && (-1 != a.indexOf("&") && (a = a.replace(xb, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(yb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(zb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Ab, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Bb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Cb, "&#0;")));
            return a
        },
        Rc = function(a, b) {
            var c = a;
            0 < a.length && 0 < b && (c = a.substr(0, 0) + a.substr(0 + b, a.length - 0 - b));
            return c
        },
        Sc = function(a) {
            return null ==
                a ? "" : String(a)
        },
        Tc = function(a) {
            return Array.prototype.join.call(arguments, "")
        },
        Uc = function(a) {
            for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
            return b
        },
        Vc = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        Wc = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Xc = function() {
            return A("iPhone") && !A("iPod") && !A("iPad")
        },
        Yc = function() {
            return Xc() || A("iPad") || A("iPod")
        };
    var Zc = function(a) {
        Zc[" "](a);
        return a
    };
    Zc[" "] = xa;
    var ad = function(a, b) {
        var c = $c;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var bd = A("Opera"),
        cd = A("Trident") || A("MSIE"),
        dd = A("Edge"),
        ed = dd || cd,
        fd = A("Gecko") && !(Eb(Hb.toLowerCase(), "webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        gd = Eb(Hb.toLowerCase(), "webkit") && !A("Edge"),
        hd = function() {
            var a = h.document;
            return a ? a.documentMode : void 0
        },
        id;
    a: {
        var jd = "",
            kd = function() {
                var a = Hb;
                if (fd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (dd) return /Edge\/([\d\.]+)/.exec(a);
                if (cd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (gd) return /WebKit\/(\S+)/.exec(a);
                if (bd) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();kd && (jd = kd ? kd[1] : "");
        if (cd) {
            var ld = hd();
            if (null != ld && ld > parseFloat(jd)) {
                id = String(ld);
                break a
            }
        }
        id = jd
    }
    var md = id,
        $c = {},
        nd = function(a) {
            return ad(a, function() {
                return 0 <= Gb(md, a)
            })
        },
        od;
    od = h.document && cd ? hd() : void 0;
    var pd = !cd || 9 <= Number(od);
    var qd = function(a, b) {
        this.width = a;
        this.height = b
    };
    g = qd.prototype;
    g.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    g.aspectRatio = function() {
        return this.width / this.height
    };
    g.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var td = function(a) {
            return a ? new rd(sd(a)) : Ta || (Ta = new rd)
        },
        vd = function(a, b) {
            Kb(b, function(c, d) {
                c && "object" == typeof c && c.xa && (c = c.sa());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ud.hasOwnProperty(d) ? a.setAttribute(ud[d], c) : ub(d, "aria-") || ub(d, "data-") ? a.setAttribute(d, c) : a[d] = c
            })
        },
        ud = {
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
        wd = function() {
            var a = window.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new qd(a.clientWidth, a.clientHeight)
        },
        xd = function(a) {
            return a.parentWindow || a.defaultView
        },
        B = function(a, b, c) {
            return yd(document, arguments)
        },
        yd = function(a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!pd && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', Qc(d.name), '"');
                if (d.type) {
                    c.push(' type="', Qc(d.type), '"');
                    var e = {};
                    Xb(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c =
                zd(a, c);
            d && ("string" === typeof d ? c.className = d : q(d) ? c.className = d.join(" ") : vd(c, d));
            2 < b.length && Ad(a, c, b, 2);
            return c
        },
        Ad = function(a, b, c, d) {
            function e(k) {
                k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !Ca(f) || u(f) && 0 < f.nodeType ? e(f) : z(Bd(f) ? nb(f) : f, e)
            }
        },
        zd = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
            return a.createElement(b)
        },
        Cd = function(a, b) {
            y(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
            a.appendChild(b)
        },
        Dd = function(a, b) {
            Ad(sd(a), a, arguments, 1)
        },
        Ed = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        sd = function(a) {
            y(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        Bd = function(a) {
            if (a && "number" == typeof a.length) {
                if (u(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (t(a)) return "function" == typeof a.item
            }
            return !1
        },
        Fd = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                y("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        rd = function(a) {
            this.a = a || h.document || document
        };
    rd.prototype.getElement = function(a) {
        return "string" === typeof a ? this.a.getElementById(a) : a
    };
    var Gd = function(a, b) {
        a = a.a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        a.querySelectorAll && a.querySelector && b ? b = a.querySelectorAll(b + "") : b = a.getElementsByTagName(b || "*");
        return b
    };
    rd.prototype.b = function(a, b, c) {
        return yd(this.a, arguments)
    };
    var Hd = function(a, b) {
        return zd(a.a, b)
    };
    rd.prototype.f = Cd;
    rd.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var Id = {
        vf: "dcm",
        Wf: "studio"
    };
    var Jd = Object.freeze || function(a) {
        return a
    };
    var Kd = function(a, b, c) {
        this.reset(a, b, c, void 0, void 0)
    };
    Kd.prototype.a = null;
    var Ld = 0;
    Kd.prototype.reset = function(a, b, c, d, e) {
        "number" == typeof e || Ld++;
        this.f = d || Ka();
        this.h = a;
        this.g = b;
        this.b = c;
        delete this.a
    };
    var Md = function(a) {
            this.B = a;
            this.a = this.h = this.g = this.f = null
        },
        Nd = function(a, b) {
            this.name = a;
            this.value = b
        };
    Nd.prototype.toString = function() {
        return this.name
    };
    var Od = new Nd("OFF", Infinity),
        Pd = new Nd("SHOUT", 1200),
        Qd = new Nd("SEVERE", 1E3),
        Rd = new Nd("WARNING", 900),
        Sd = new Nd("INFO", 800),
        Td = new Nd("CONFIG", 700),
        Ud = new Nd("FINE", 500),
        Vd = new Nd("FINER", 400),
        Wd = new Nd("FINEST", 300),
        Xd = new Nd("ALL", 0),
        Yd = [Od, Pd, Qd, Rd, Sd, Td, Ud, Vd, Wd, Xd],
        Zd = null;
    Md.prototype.b = function(a) {
        this.g = a
    };
    var $d = function(a) {
        if (a.g) return a.g;
        if (a.f) return $d(a.f);
        Wa("Root logger has no level set.");
        return null
    };
    g = Md.prototype;
    g.log = function(a, b, c) {
        if (a.value >= $d(this).value)
            for (t(b) && (b = b()), a = new Kd(a, String(b), this.B), c && (a.a = c), c = this; c;) {
                var d = c,
                    e = a;
                if (d.a)
                    for (var f = 0; b = d.a[f]; f++) b(e);
                c = c.f
            }
    };
    g.Ve = function(a, b) {
        this.log(Pd, a, b)
    };
    g.Uc = function(a, b) {
        this.log(Qd, a, b)
    };
    g.pb = function(a, b) {
        this.log(Rd, a, b)
    };
    g.C = function(a, b) {
        this.log(Sd, a, b)
    };
    g.ld = function(a, b) {
        this.log(Td, a, b)
    };
    g.Bb = function(a, b) {
        this.log(Ud, a, b)
    };
    g.ud = function(a, b) {
        this.log(Vd, a, b)
    };
    g.vd = function(a, b) {
        this.log(Wd, a, b)
    };
    var ae = {},
        be = null,
        ce = function() {
            be || (be = new Md(""), ae[""] = be, be.b(Td))
        },
        de = function() {
            ce();
            return be
        },
        C = function(a) {
            ce();
            var b;
            if (!(b = ae[a])) {
                b = new Md(a);
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1);
                c = C(a.substr(0, c));
                c.h || (c.h = {});
                c.h[d] = b;
                b.f = c;
                ae[a] = b
            }
            return b
        };
    var ee = function(a, b) {
            a && a.Uc(b, void 0)
        },
        D = function(a, b, c) {
            a && a.pb(b, c)
        },
        E = function(a, b) {
            a && a.C(b, void 0)
        },
        fe = function(a, b) {
            a && a.Bb(b, void 0)
        };
    var F = C("studio.sdk");
    n("studio.sdk.logger", F, void 0);
    n("studio.sdk.logger.setLevel", F.b, void 0);
    n("studio.sdk.logger.Level.OFF", Od, void 0);
    n("studio.sdk.logger.Level.SHOUT", Pd, void 0);
    n("studio.sdk.logger.Level.SEVERE", Qd, void 0);
    n("studio.sdk.logger.Level.WARNING", Rd, void 0);
    n("studio.sdk.logger.Level.INFO", Sd, void 0);
    n("studio.sdk.logger.Level.CONFIG", Td, void 0);
    n("studio.sdk.logger.Level.FINE", Ud, void 0);
    n("studio.sdk.logger.Level.FINER", Vd, void 0);
    n("studio.sdk.logger.Level.FINEST", Wd, void 0);
    n("studio.sdk.logger.Level.ALL", Xd, void 0);
    n("studio.sdk.logger.shout", F.Ve, void 0);
    n("studio.sdk.logger.severe", F.Uc, void 0);
    n("studio.sdk.logger.warning", F.pb, void 0);
    n("studio.sdk.logger.info", F.C, void 0);
    n("studio.sdk.logger.config", F.ld, void 0);
    n("studio.sdk.logger.fine", F.Bb, void 0);
    n("studio.sdk.logger.finer", F.ud, void 0);
    n("studio.sdk.logger.finest", F.vd, void 0);
    var ge = {
        ENABLER: "enabler",
        DCM_ENABLER: "dcmenabler",
        VIDEO: "video",
        CONFIGURABLE: "configurable",
        CONFIGURABLE_FILLER: "configurablefiller",
        LAYOUTS: "layouts",
        FILLER: "layoutsfiller",
        RAD_VIDEO: "rad_ui_video",
        GDN: "gdn"
    };
    n("studio.module.ModuleId", ge, void 0);
    var ie = function(a) {
            he();
            return new kc(ic, a, null)
        },
        he = xa;
    var je = function(a, b) {
        this.f = a;
        this.h = b;
        this.b = 0;
        this.a = null
    };
    je.prototype.get = function() {
        if (0 < this.b) {
            this.b--;
            var a = this.a;
            this.a = a.next;
            a.next = null
        } else a = this.f();
        return a
    };
    var ke = function(a, b) {
        a.h(b);
        100 > a.b && (a.b++, b.next = a.a, a.a = b)
    };
    var le = function(a) {
            h.setTimeout(function() {
                throw a;
            }, 0)
        },
        me, ne = function() {
            var a = h.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
                var e = zd(document, "IFRAME");
                e.style.display = "none";
                Nc(e);
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(Kc(Mc));
                e.close();
                var k = "callImmediate" + Math.random(),
                    l = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = v(function(m) {
                    if (("*" == l || m.origin == l) && m.data == k) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(k, l)
                    }
                }
            });
            if ("undefined" !== typeof a && !A("Trident") && !A("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.Zb;
                        c.Zb = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        Zb: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in zd(document, "SCRIPT") ? function(e) {
                var f =
                    zd(document, "SCRIPT");
                f.onreadystatechange = function() {
                    f.onreadystatechange = null;
                    f.parentNode.removeChild(f);
                    f = null;
                    e();
                    e = null
                };
                document.documentElement.appendChild(f)
            } : function(e) {
                h.setTimeout(e, 0)
            }
        };
    var oe = function() {
            this.b = this.a = null
        },
        qe = new je(function() {
            return new pe
        }, function(a) {
            a.reset()
        });
    oe.prototype.add = function(a, b) {
        var c = qe.get();
        c.set(a, b);
        this.b ? this.b.next = c : (y(!this.a), this.a = c);
        this.b = c
    };
    var se = function() {
            var a = re,
                b = null;
            a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
            return b
        },
        pe = function() {
            this.next = this.scope = this.a = null
        };
    pe.prototype.set = function(a, b) {
        this.a = a;
        this.scope = b;
        this.next = null
    };
    pe.prototype.reset = function() {
        this.next = this.scope = this.a = null
    };
    var we = function(a, b) {
            te || ue();
            ve || (te(), ve = !0);
            re.add(a, b)
        },
        te, ue = function() {
            if (h.Promise && h.Promise.resolve) {
                var a = h.Promise.resolve(void 0);
                te = function() {
                    a.then(xe)
                }
            } else te = function() {
                var b = xe;
                !t(h.setImmediate) || h.Window && h.Window.prototype && !A("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? (me || (me = ne()), me(b)) : h.setImmediate(b)
            }
        },
        ve = !1,
        re = new oe,
        xe = function() {
            for (var a; a = se();) {
                try {
                    a.a.call(a.scope)
                } catch (b) {
                    le(b)
                }
                ke(qe, a)
            }
            ve = !1
        };
    var ye = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Be = function(a) {
            this.a = 0;
            this.j = void 0;
            this.h = this.b = this.f = null;
            this.g = this.B = !1;
            if (a != xa) try {
                var b = this;
                a.call(void 0, function(c) {
                    ze(b, 2, c)
                }, function(c) {
                    if (!(c instanceof Ae)) try {
                        if (c instanceof Error) throw c;
                        throw Error("Promise rejected.");
                    } catch (d) {}
                    ze(b, 3, c)
                })
            } catch (c) {
                ze(this, 3, c)
            }
        },
        Ce = function() {
            this.next = this.context = this.f = this.b = this.a = null;
            this.h = !1
        };
    Ce.prototype.reset = function() {
        this.context = this.f = this.b = this.a = null;
        this.h = !1
    };
    var De = new je(function() {
            return new Ce
        }, function(a) {
            a.reset()
        }),
        Ee = function(a, b, c) {
            var d = De.get();
            d.b = a;
            d.f = b;
            d.context = c;
            return d
        },
        Fe = function(a) {
            if (a instanceof Be) return a;
            var b = new Be(xa);
            ze(b, 2, a);
            return b
        },
        Ge = function(a) {
            return new Be(function(b, c) {
                c(a)
            })
        },
        Ie = function(a, b, c) {
            He(a, b, c, null) || we(Ja(b, a))
        },
        Je = function(a) {
            return new Be(function(b, c) {
                var d = a.length,
                    e = [];
                if (d)
                    for (var f = function(p, r) {
                            d--;
                            e[p] = r;
                            0 == d && b(e)
                        }, k = function(p) {
                            c(p)
                        }, l = 0, m; l < a.length; l++) m = a[l], Ie(m, Ja(f, l), k);
                else b(e)
            })
        };
    Be.prototype.then = function(a, b, c) {
        null != a && Za(a, "opt_onFulfilled should be a function.");
        null != b && Za(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return Ke(this, t(a) ? a : null, t(b) ? b : null, c)
    };
    Be.prototype.$goog_Thenable = !0;
    var Le = function(a, b) {
        return Ke(a, null, b, void 0)
    };
    Be.prototype.cancel = function(a) {
        if (0 == this.a) {
            var b = new Ae(a);
            we(function() {
                Me(this, b)
            }, this)
        }
    };
    var Me = function(a, b) {
            if (0 == a.a)
                if (a.f) {
                    var c = a.f;
                    if (c.b) {
                        for (var d = 0, e = null, f = null, k = c.b; k && (k.h || (d++, k.a == a && (e = k), !(e && 1 < d))); k = k.next) e || (f = k);
                        e && (0 == c.a && 1 == d ? Me(c, b) : (f ? (d = f, y(c.b), y(null != d), d.next == c.h && (c.h = d), d.next = d.next.next) : Ne(c), Oe(c, e, 3, b)))
                    }
                    a.f = null
                } else ze(a, 3, b)
        },
        Qe = function(a, b) {
            a.b || 2 != a.a && 3 != a.a || Pe(a);
            y(null != b.b);
            a.h ? a.h.next = b : a.b = b;
            a.h = b
        },
        Ke = function(a, b, c, d) {
            var e = Ee(null, null, null);
            e.a = new Be(function(f, k) {
                e.b = b ? function(l) {
                        try {
                            var m = b.call(d, l);
                            f(m)
                        } catch (p) {
                            k(p)
                        }
                    } :
                    f;
                e.f = c ? function(l) {
                    try {
                        var m = c.call(d, l);
                        void 0 === m && l instanceof Ae ? k(l) : f(m)
                    } catch (p) {
                        k(p)
                    }
                } : k
            });
            e.a.f = a;
            Qe(a, e);
            return e.a
        };
    Be.prototype.o = function(a) {
        y(1 == this.a);
        this.a = 0;
        ze(this, 2, a)
    };
    Be.prototype.w = function(a) {
        y(1 == this.a);
        this.a = 0;
        ze(this, 3, a)
    };
    var ze = function(a, b, c) {
            0 == a.a && (a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, He(c, a.o, a.w, a) || (a.j = c, a.a = b, a.f = null, Pe(a), 3 != b || c instanceof Ae || Re(a, c)))
        },
        He = function(a, b, c, d) {
            if (a instanceof Be) return null != b && Za(b, "opt_onFulfilled should be a function."), null != c && Za(c, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?"), Qe(a, Ee(b || xa, c || null, d)), !0;
            if (ye(a)) return a.then(b, c, d), !0;
            if (u(a)) try {
                var e = a.then;
                if (t(e)) return Se(a,
                    e, b, c, d), !0
            } catch (f) {
                return c.call(d, f), !0
            }
            return !1
        },
        Se = function(a, b, c, d, e) {
            var f = !1,
                k = function(m) {
                    f || (f = !0, c.call(e, m))
                },
                l = function(m) {
                    f || (f = !0, d.call(e, m))
                };
            try {
                b.call(a, k, l)
            } catch (m) {
                l(m)
            }
        },
        Pe = function(a) {
            a.B || (a.B = !0, we(a.l, a))
        },
        Ne = function(a) {
            var b = null;
            a.b && (b = a.b, a.b = b.next, b.next = null);
            a.b || (a.h = null);
            null != b && y(null != b.b);
            return b
        };
    Be.prototype.l = function() {
        for (var a; a = Ne(this);) Oe(this, a, this.a, this.j);
        this.B = !1
    };
    var Oe = function(a, b, c, d) {
            if (3 == c && b.f && !b.h)
                for (; a && a.g; a = a.f) a.g = !1;
            if (b.a) b.a.f = null, Te(b, c, d);
            else try {
                b.h ? b.b.call(b.context) : Te(b, c, d)
            } catch (e) {
                Ue.call(null, e)
            }
            ke(De, b)
        },
        Te = function(a, b, c) {
            2 == b ? a.b.call(a.context, c) : a.f && a.f.call(a.context, c)
        },
        Re = function(a, b) {
            a.g = !0;
            we(function() {
                a.g && Ue.call(null, b)
            })
        },
        Ue = le,
        Ae = function(a) {
            Sa.call(this, a)
        };
    w(Ae, Sa);
    Ae.prototype.name = "cancel";
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var G = function(a, b) {
        this.j = [];
        this.J = a;
        this.D = b || null;
        this.h = this.a = !1;
        this.f = void 0;
        this.w = this.Y = this.o = !1;
        this.l = 0;
        this.b = null;
        this.g = 0
    };
    G.prototype.cancel = function(a) {
        if (this.a) this.f instanceof G && this.f.cancel();
        else {
            if (this.b) {
                var b = this.b;
                delete this.b;
                a ? b.cancel(a) : (b.g--, 0 >= b.g && b.cancel())
            }
            this.J ? this.J.call(this.D, this) : this.w = !0;
            this.a || this.B(new Ve(this))
        }
    };
    G.prototype.A = function(a, b) {
        this.o = !1;
        We(this, a, b)
    };
    var We = function(a, b, c) {
            a.a = !0;
            a.f = c;
            a.h = !b;
            Xe(a)
        },
        Ze = function(a) {
            if (a.a) {
                if (!a.w) throw new Ye(a);
                a.w = !1
            }
        };
    G.prototype.H = function(a) {
        Ze(this);
        $e(a);
        We(this, !0, a)
    };
    G.prototype.B = function(a) {
        Ze(this);
        $e(a);
        We(this, !1, a)
    };
    var $e = function(a) {
            y(!(a instanceof G), "An execution sequence may not be initiated with a blocking Deferred.")
        },
        bf = function(a, b, c) {
            af(a, b, null, c)
        },
        af = function(a, b, c, d) {
            y(!a.Y, "Blocking Deferreds can not be re-used");
            a.j.push([b, c, d]);
            a.a && Xe(a)
        };
    G.prototype.then = function(a, b, c) {
        var d, e, f = new Be(function(k, l) {
            d = k;
            e = l
        });
        af(this, d, function(k) {
            k instanceof Ve ? f.cancel() : e(k)
        });
        return f.then(a, b, c)
    };
    G.prototype.$goog_Thenable = !0;
    var cf = function(a, b) {
        b instanceof G ? bf(a, v(b.G, b)) : bf(a, function() {
            return b
        })
    };
    G.prototype.G = function(a) {
        var b = new G;
        af(this, b.H, b.B, b);
        a && (b.b = this, this.g++);
        return b
    };
    var df = function(a) {
            return fb(a.j, function(b) {
                return t(b[1])
            })
        },
        Xe = function(a) {
            if (a.l && a.a && df(a)) {
                var b = a.l,
                    c = ef[b];
                c && (h.clearTimeout(c.a), delete ef[b]);
                a.l = 0
            }
            a.b && (a.b.g--, delete a.b);
            b = a.f;
            for (var d = c = !1; a.j.length && !a.o;) {
                var e = a.j.shift(),
                    f = e[0],
                    k = e[1];
                e = e[2];
                if (f = a.h ? k : f) try {
                    var l = f.call(e || a.D, b);
                    void 0 !== l && (a.h = a.h && (l == b || l instanceof Error), a.f = b = l);
                    if (ye(b) || "function" === typeof h.Promise && b instanceof h.Promise) d = !0, a.o = !0
                } catch (m) {
                    b = m, a.h = !0, df(a) || (c = !0)
                }
            }
            a.f = b;
            d && (l = v(a.A, a, !0), d = v(a.A,
                a, !1), b instanceof G ? (af(b, l, d), b.Y = !0) : b.then(l, d));
            c && (b = new ff(b), ef[b.a] = b, a.l = b.a)
        },
        Ye = function() {
            Sa.call(this)
        };
    w(Ye, Sa);
    Ye.prototype.message = "Deferred has already fired";
    Ye.prototype.name = "AlreadyCalledError";
    var Ve = function() {
        Sa.call(this)
    };
    w(Ve, Sa);
    Ve.prototype.message = "Deferred was canceled";
    Ve.prototype.name = "CanceledError";
    var ff = function(a) {
        this.a = h.setTimeout(v(this.f, this), 0);
        this.b = a
    };
    ff.prototype.f = function() {
        y(ef[this.a], "Cannot throw an error that is not scheduled.");
        delete ef[this.a];
        throw this.b;
    };
    var ef = {};
    var lf = function(a) {
            var b = {},
                c = b.document || document,
                d = lc(a).toString(),
                e = zd(document, "SCRIPT"),
                f = {
                    Qc: e,
                    bd: void 0
                },
                k = new G(gf, f),
                l = null,
                m = null != b.timeout ? b.timeout : 5E3;
            0 < m && (l = window.setTimeout(function() {
                hf(e, !0);
                k.B(new jf(1, "Timeout reached for loading script " + d))
            }, m), f.bd = l);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (hf(e, b.Zf || !1, l), k.H(null))
            };
            e.onerror = function() {
                hf(e, !0, l);
                k.B(new jf(0, "Error while loading script " + d))
            };
            f = b.attributes || {};
            Xb(f, {
                type: "text/javascript",
                charset: "UTF-8"
            });
            vd(e, f);
            Oc(e, a);
            kf(c).appendChild(e);
            return k
        },
        kf = function(a) {
            var b;
            return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement
        },
        gf = function() {
            if (this && this.Qc) {
                var a = this.Qc;
                a && "SCRIPT" == a.tagName && hf(a, !0, this.bd)
            }
        },
        hf = function(a, b, c) {
            null != c && h.clearTimeout(c);
            a.onload = xa;
            a.onerror = xa;
            a.onreadystatechange = xa;
            b && window.setTimeout(function() {
                Ed(a)
            }, 0)
        },
        jf = function(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " +
                b);
            Sa.call(this, c);
            this.code = a
        };
    w(jf, Sa);
    var I = function(a, b) {
        this.b = {};
        this.a = [];
        this.f = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof I)
                for (c = a.S(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    g = I.prototype;
    g.aa = function() {
        return this.f
    };
    g.P = function() {
        mf(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    g.S = function() {
        mf(this);
        return this.a.concat()
    };
    g.U = function(a) {
        return nf(this.b, a)
    };
    g.Pa = function(a) {
        for (var b = 0; b < this.a.length; b++) {
            var c = this.a[b];
            if (nf(this.b, c) && this.b[c] == a) return !0
        }
        return !1
    };
    var of = function(a) {
        a.b = {};
        a.a.length = 0;
        a.f = 0
    }, pf = function(a, b) {
        nf(a.b, b) && (delete a.b[b], a.f--, a.a.length > 2 * a.f && mf(a))
    }, mf = function(a) {
        if (a.f != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                nf(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.f != a.a.length) {
            var e = {};
            for (c = b = 0; b < a.a.length;) d = a.a[b], nf(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    I.prototype.get = function(a, b) {
        return nf(this.b, a) ? this.b[a] : b
    };
    I.prototype.set = function(a, b) {
        nf(this.b, a) || (this.f++, this.a.push(a));
        this.b[a] = b
    };
    I.prototype.forEach = function(a, b) {
        for (var c = this.S(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    var nf = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var J = function() {
        this.B = this.B;
        this.Y = this.Y
    };
    J.prototype.B = !1;
    J.prototype.dispose = function() {
        this.B || (this.B = !0, this.s())
    };
    var rf = function(a, b) {
        b = Ja(qf, b);
        a.B ? b() : (a.Y || (a.Y = []), a.Y.push(b))
    };
    J.prototype.s = function() {
        if (this.Y)
            for (; this.Y.length;) this.Y.shift()()
    };
    var qf = function(a) {
            a && "function" == typeof a.dispose && a.dispose()
        },
        sf = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                Ca(d) ? sf.apply(null, d) : qf(d)
            }
        };
    var tf = function(a, b) {
        this.type = a;
        this.a = this.target = b;
        this.b = !1;
        this.Pc = !0
    };
    tf.prototype.stopPropagation = function() {
        this.b = !0
    };
    tf.prototype.f = function() {
        this.Pc = !1
    };
    var uf = function(a) {
        a.f()
    };
    var vf = !cd || 9 <= Number(od),
        wf = cd && !nd("9"),
        xf = function() {
            if (!h.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                h.addEventListener("test", xa, b), h.removeEventListener("test", xa, b)
            } catch (c) {}
            return a
        }();
    var zf = function(a, b) {
        tf.call(this, a ? a.type : "");
        this.relatedTarget = this.a = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.pointerId = 0;
        this.pointerType = "";
        this.$ = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.a = b;
            if (b = a.relatedTarget) {
                if (fd) {
                    a: {
                        try {
                            Zc(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (b =
                        null)
                }
            } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey =
                a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId = a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : yf[a.pointerType] || "";
            this.$ = a;
            a.defaultPrevented && this.f()
        }
    };
    w(zf, tf);
    var yf = Jd({
        2: "touch",
        3: "pen",
        4: "mouse"
    });
    zf.prototype.stopPropagation = function() {
        zf.v.stopPropagation.call(this);
        this.$.stopPropagation ? this.$.stopPropagation() : this.$.cancelBubble = !0
    };
    zf.prototype.f = function() {
        zf.v.f.call(this);
        var a = this.$;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, wf) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    zf.prototype.zd = function() {
        return this.$
    };
    var Af = "closure_listenable_" + (1E6 * Math.random() | 0),
        Bf = function(a) {
            return !(!a || !a[Af])
        },
        Cf = 0;
    var Df = function(a, b, c, d, e) {
            this.listener = a;
            this.a = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Ka = e;
            this.key = ++Cf;
            this.La = this.cb = !1
        },
        Ef = function(a) {
            a.La = !0;
            a.listener = null;
            a.a = null;
            a.src = null;
            a.Ka = null
        };
    var Ff = function(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    };
    Ff.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var k = Gf(a, b, d, e); - 1 < k ? (b = a[k], c || (b.cb = !1)) : (b = new Df(b, this.src, f, !!d, e), b.cb = c, a.push(b));
        return b
    };
    var Hf = function(a, b) {
            var c = b.type;
            if (!(c in a.a)) return !1;
            var d = lb(a.a[c], b);
            d && (Ef(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
            return d
        },
        If = function(a, b) {
            b = b && b.toString();
            var c = 0,
                d;
            for (d in a.a)
                if (!b || d == b) {
                    for (var e = a.a[d], f = 0; f < e.length; f++) ++c, Ef(e[f]);
                    delete a.a[d];
                    a.b--
                }
        },
        Jf = function(a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = Gf(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        Kf = function(a, b) {
            var c = void 0 !== b,
                d = c ? b.toString() : "";
            return Nb(a.a, function(e) {
                for (var f = 0; f < e.length; ++f)
                    if (!c || e[f].type == d) return !0;
                return !1
            })
        },
        Gf = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.La && f.listener == b && f.capture == !!c && f.Ka == d) return e
            }
            return -1
        };
    var Lf = "closure_lm_" + (1E6 * Math.random() | 0),
        Mf = {},
        Nf = 0,
        Pf = function(a, b, c, d, e) {
            if (d && d.once) return Of(a, b, c, d, e);
            if (q(b)) {
                for (var f = 0; f < b.length; f++) Pf(a, b[f], c, d, e);
                return null
            }
            c = Qf(c);
            return Bf(a) ? a.Ia(b, c, u(d) ? !!d.capture : !!d, e) : Rf(a, b, c, !1, d, e)
        },
        Rf = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var k = u(e) ? !!e.capture : !!e,
                l = Sf(a);
            l || (a[Lf] = l = new Ff(a));
            c = l.add(b, c, d, k, f);
            if (c.a) return c;
            d = Tf();
            c.a = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) xf || (e = k), void 0 === e && (e = !1), a.addEventListener(b.toString(),
                d, e);
            else if (a.attachEvent) a.attachEvent(Uf(b.toString()), d);
            else if (a.addListener && a.removeListener) y("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Nf++;
            return c
        },
        Tf = function() {
            var a = Vf,
                b = vf ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        Of = function(a, b, c, d, e) {
            if (q(b)) {
                for (var f = 0; f < b.length; f++) Of(a, b[f], c, d, e);
                return null
            }
            c = Qf(c);
            return Bf(a) ?
                a.h.add(String(b), c, !0, u(d) ? !!d.capture : !!d, e) : Rf(a, b, c, !0, d, e)
        },
        Wf = function(a, b, c, d, e) {
            if (q(b))
                for (var f = 0; f < b.length; f++) Wf(a, b[f], c, d, e);
            else d = u(d) ? !!d.capture : !!d, c = Qf(c), Bf(a) ? a.Sa(b, c, d, e) : a && (a = Sf(a)) && (b = Jf(a, b, c, d, e)) && Xf(b)
        },
        Xf = function(a) {
            if ("number" === typeof a || !a || a.La) return !1;
            var b = a.src;
            if (Bf(b)) return Hf(b.h, a);
            var c = a.type,
                d = a.a;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Uf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            Nf--;
            (c = Sf(b)) ? (Hf(c, a), 0 == c.b && (c.src = null, b[Lf] = null)) : Ef(a);
            return !0
        },
        Yf = function(a, b, c, d, e) {
            c = Qf(c);
            d = !!d;
            return Bf(a) ? Jf(a.h, String(b), c, d, e) : a ? (a = Sf(a)) ? Jf(a, b, c, d, e) : null : null
        },
        Zf = function(a, b) {
            if (Bf(a)) return Kf(a.h, void 0 !== b ? String(b) : void 0);
            a = Sf(a);
            return !!a && Kf(a, b)
        },
        Uf = function(a) {
            return a in Mf ? Mf[a] : Mf[a] = "on" + a
        },
        ag = function(a, b, c, d) {
            var e = !0;
            if (a = Sf(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.La && (f = $f(f, d), e = e && !1 !== f)
                    }
            return e
        },
        $f = function(a,
            b) {
            var c = a.listener,
                d = a.Ka || a.src;
            a.cb && Xf(a);
            return c.call(d, b)
        },
        Vf = function(a, b) {
            if (a.La) return !0;
            if (!vf) {
                var c = b || wa("window.event");
                b = new zf(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (k) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.a; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; !b.b && 0 <= e; e--) {
                        b.a = c[e];
                        var f = ag(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; !b.b && e < c.length; e++) b.a = c[e],
                    f = ag(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return $f(a,
                new zf(b, this))
        },
        Sf = function(a) {
            a = a[Lf];
            return a instanceof Ff ? a : null
        },
        bg = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Qf = function(a) {
            y(a, "Listener can not be null.");
            if (t(a)) return a;
            y(a.handleEvent, "An object listener must have handleEvent method.");
            a[bg] || (a[bg] = function(b) {
                return a.handleEvent(b)
            });
            return a[bg]
        };
    var K = function() {
        J.call(this);
        this.h = new Ff(this);
        this.ne = this;
        this.$a = null
    };
    w(K, J);
    K.prototype[Af] = !0;
    g = K.prototype;
    g.Kb = function(a) {
        this.$a = a
    };
    g.addEventListener = function(a, b, c, d) {
        Pf(this, a, b, c, d)
    };
    g.removeEventListener = function(a, b, c, d) {
        Wf(this, a, b, c, d)
    };
    g.dispatchEvent = function(a) {
        cg(this);
        var b = this.$a;
        if (b) {
            var c = [];
            for (var d = 1; b; b = b.$a) c.push(b), y(1E3 > ++d, "infinite loop")
        }
        b = this.ne;
        d = a.type || a;
        if ("string" === typeof a) a = new tf(a, b);
        else if (a instanceof tf) a.target = a.target || b;
        else {
            var e = a;
            a = new tf(d, b);
            Xb(a, e)
        }
        e = !0;
        if (c)
            for (var f = c.length - 1; !a.b && 0 <= f; f--) {
                var k = a.a = c[f];
                e = dg(k, d, !0, a) && e
            }
        a.b || (k = a.a = b, e = dg(k, d, !0, a) && e, a.b || (e = dg(k, d, !1, a) && e));
        if (c)
            for (f = 0; !a.b && f < c.length; f++) k = a.a = c[f], e = dg(k, d, !1, a) && e;
        return e
    };
    g.s = function() {
        K.v.s.call(this);
        this.h && If(this.h, void 0);
        this.$a = null
    };
    g.Ia = function(a, b, c, d) {
        cg(this);
        return this.h.add(String(a), b, !1, c, d)
    };
    g.Sa = function(a, b, c, d) {
        var e = this.h;
        a = String(a).toString();
        if (a in e.a) {
            var f = e.a[a];
            b = Gf(f, b, c, d); - 1 < b ? (Ef(f[b]), kb(f, b), 0 == f.length && (delete e.a[a], e.b--), e = !0) : e = !1
        } else e = !1;
        return e
    };
    var dg = function(a, b, c, d) {
            b = a.h.a[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var k = b[f];
                if (k && !k.La && k.capture == c) {
                    var l = k.listener,
                        m = k.Ka || k.src;
                    k.cb && Hf(a.h, k);
                    e = !1 !== l.call(m, d) && e
                }
            }
            return e && 0 != d.Pc
        },
        cg = function(a) {
            y(a.h, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
        };
    var eg = function(a, b) {
        K.call(this);
        this.b = a || 1;
        this.a = b || h;
        this.f = v(this.df, this);
        this.g = Ka()
    };
    w(eg, K);
    g = eg.prototype;
    g.Ha = !1;
    g.ka = null;
    g.setInterval = function(a) {
        this.b = a;
        this.ka && this.Ha ? (this.stop(), this.start()) : this.ka && this.stop()
    };
    g.df = function() {
        if (this.Ha) {
            var a = Ka() - this.g;
            0 < a && a < .8 * this.b ? this.ka = this.a.setTimeout(this.f, this.b - a) : (this.ka && (this.a.clearTimeout(this.ka), this.ka = null), this.dispatchEvent("tick"), this.Ha && (this.stop(), this.start()))
        }
    };
    g.start = function() {
        this.Ha = !0;
        this.ka || (this.ka = this.a.setTimeout(this.f, this.b), this.g = Ka())
    };
    g.stop = function() {
        this.Ha = !1;
        this.ka && (this.a.clearTimeout(this.ka), this.ka = null)
    };
    g.s = function() {
        eg.v.s.call(this);
        this.stop();
        delete this.a
    };
    var fg = function(a, b, c) {
        if (t(a)) c && (a = v(a, c));
        else if (a && "function" == typeof a.handleEvent) a = v(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0)
    };
    var gg = {},
        hg = {},
        ig = new Ra(.001, "");
    ig.a = "load";
    var jg = new Ra(.1, "");
    jg.a = "fail";
    var kg = new I;
    kg.set("enabler", "enabler");
    kg.set("dcmenabler", "dcm");
    kg.set("video", "vid");
    kg.set("configurable", "cfg");
    kg.set("configurablefiller", "cfg_fill");
    kg.set("layouts", "lay");
    kg.set("layoutsfiller", "lay_fill");
    kg.set("gdn", "gdn");
    kg.set("rad_ui_video", "rad");
    var lg = function() {
            for (var a = document.getElementsByTagName("script"), b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.src || c.getAttribute("src"))
                    if (c = c.src || c.getAttribute("src"), /Enabler/.test(c)) return c.substring(0, c.lastIndexOf("/") + 1)
            }
            return ""
        },
        mg = function(a) {
            a = gg[a];
            return void 0 !== a && 1 <= a
        },
        ng = function(a) {
            return [lg(), "dev_studio_01_239_", [a, "module"].join(""), ".js"].join("")
        };
    n("goog.exportSymbol", function(a, b, c) {
        n(a, b, c)
    }, this);
    var og = function(a) {
            a += "goog.exportSymbol('studioLoader.context.evalInContext', " + og.toString() + ");";
            eval(a)
        },
        pg = function(a, b) {
            b = kg.get(b) || "unknown";
            a.f = b;
            a = a.b();
            !vb(a) && x(1) && (zd(document, "IMG").src = a)
        },
        qg = function(a, b) {
            gg[a] = 2;
            pg(ig, a);
            b = "number" === typeof b ? b : 2;
            for (var c = ng(a), d = lf(ie(c)), e = 0; e < b; ++e) d = d.then(void 0, function() {
                return lf(ie(c))
            });
            return d.then(function() {
                gg[a] = 3
            }, function() {
                pg(jg, a);
                return Ge()
            })
        },
        rg = function(a) {
            if (mg(a)) return hg[a];
            gg[a] = 1;
            for (var b = [], c = DEPS_GRAPH ? DEPS_GRAPH[[a,
                    "module"
                ].join("")] : [], d = c.length - 1; 0 <= d; d--) {
                var e = c[d].replace(/module$/, "");
                if (e == a) break;
                mg(e) ? b.push(hg[e]) : b.push(rg(e))
            }
            b = Je(b).then(Ja(qg, a, 2));
            return hg[a] = b
        },
        sg = function(a, b) {
            a = rg(a);
            t(b) && (a = a.then(b));
            Le(a, xa)
        };
    n("studioLoader.context.evalInContext", og, void 0);
    var tg = Zb(),
        ug = Xc() || A("iPod"),
        vg = A("iPad"),
        wg = A("Android") && !($b() || Zb() || A("Opera") || A("Silk")),
        xg = $b(),
        yg = A("Safari") && !($b() || A("Coast") || A("Opera") || A("Edge") || A("Edg/") || A("OPR") || Zb() || A("Silk") || A("Android")) && !Yc();
    var zg = function() {},
        Ag = "function" == typeof Uint8Array,
        Bg = function(a, b) {
            a.b = null;
            b || (b = []);
            a.j = void 0;
            a.h = -1;
            a.a = b;
            a: {
                if (b = a.a.length) {
                    --b;
                    var c = a.a[b];
                    if (!(null === c || "object" != typeof c || q(c) || Ag && c instanceof Uint8Array)) {
                        a.g = b - a.h;
                        a.f = c;
                        break a
                    }
                }
                a.g = Number.MAX_VALUE
            }
            a.B = {}
        },
        Cg = Object.freeze ? Object.freeze([]) : [],
        Dg = function(a, b) {
            if (b < a.g) {
                b += a.h;
                var c = a.a[b];
                return c === Cg ? a.a[b] = [] : c
            }
            if (a.f) return c = a.f[b], c === Cg ? a.f[b] = [] : c
        },
        Eg = function(a, b) {
            a.b || (a.b = {});
            if (!a.b[1]) {
                var c = Dg(a, 1);
                c && (a.b[1] = new b(c))
            }
            return a.b[1]
        },
        Gg = function(a) {
            if (a.b)
                for (var b in a.b) {
                    var c = a.b[b];
                    if (q(c))
                        for (var d = 0; d < c.length; d++) c[d] && Fg(c[d]);
                    else c && Fg(c)
                }
        },
        Fg = function(a) {
            Gg(a);
            return a.a
        };
    zg.prototype.toString = function() {
        Gg(this);
        return this.a.toString()
    };
    var Hg = function(a) {
        Bg(this, a)
    };
    w(Hg, zg);
    var Ig = function(a) {
        Bg(this, a)
    };
    w(Ig, zg);
    var Jg = function(a) {
            if (a.P && "function" == typeof a.P) return a.P();
            if ("string" === typeof a) return a.split("");
            if (Ca(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Pb(a)
        },
        Kg = function(a, b) {
            return a.contains && "function" == typeof a.contains ? a.contains(b) : a.Pa && "function" == typeof a.Pa ? a.Pa(b) : Ca(a) || "string" === typeof a ? 0 <= cb(a, b) : Sb(a, b)
        };
    var Lg = function() {
            this.a = new I
        },
        Mg = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + Fa(a) : b.substr(0, 1) + a
        };
    Lg.prototype.aa = function() {
        return this.a.aa()
    };
    Lg.prototype.add = function(a) {
        this.a.set(Mg(a), a)
    };
    var Og = function(a) {
        var b = Ng;
        a = Jg(a);
        for (var c = a.length, d = 0; d < c; d++) b.add(a[d])
    };
    Lg.prototype.contains = function(a) {
        return this.a.U(Mg(a))
    };
    Lg.prototype.P = function() {
        return this.a.P()
    };
    n("studio.common.Feature.Type", {
        Qf: 1,
        SDK_EVENT_FORWARDER: 2,
        RL_EVENT_FORWARDER: 3
    }, void 0);
    var Ng = new Lg;
    n("studio.common.Feature.hasFeature", function(a) {
        return Ng.contains(a)
    }, void 0);
    n("studio.common.Feature.hasFeatures", function(a) {
        var b = Ng;
        a: {
            var c = b.contains;
            if ("function" == typeof a.every) a = a.every(c, b);
            else if (Ca(a) || "string" === typeof a) a = gb(a, c, b);
            else {
                if (a.S && "function" == typeof a.S) var d = a.S();
                else if (a.P && "function" == typeof a.P) d = void 0;
                else if (Ca(a) || "string" === typeof a) {
                    d = [];
                    for (var e = a.length, f = 0; f < e; f++) d.push(f)
                } else
                    for (f in d = [], e = 0, a) d[e++] = f;
                e = Jg(a);
                f = e.length;
                for (var k = 0; k < f; k++)
                    if (!c.call(b, e[k], d && d[k], a)) {
                        a = !1;
                        break a
                    }
                a = !0
            }
        }
        return a
    }, void 0);
    var Pg = function(a, b) {
        this.b = a;
        this.a = null != b ? b : 0
    };
    n("studio.common.Orientation", Pg, void 0);
    var Qg = function() {
            var a = window;
            return a.innerWidth > a.innerHeight ? "landscape" : "portrait"
        },
        Rg = function() {
            return "onorientationchange" in window
        };
    Pg.Mode = {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape"
    };
    Pg.prototype.Hd = function() {
        return this.b
    };
    Pg.prototype.getMode = Pg.prototype.Hd;
    Pg.prototype.Gd = function() {
        return this.a
    };
    Pg.prototype.getDegrees = Pg.prototype.Gd;
    Pg.prototype.toString = function() {
        return this.b
    };
    var Sg = function(a, b, c, d, e, f, k) {
            var l = "";
            a && (l += a + ":");
            c && (l += "//", b && (l += b + "@"), l += c, d && (l += ":" + d));
            e && (l += e);
            f && (l += "?" + f);
            k && (l += "#" + k);
            return l
        },
        Tg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        Ug = function(a) {
            var b = a.indexOf("#");
            return 0 > b ? null : a.substr(b + 1)
        },
        Vg = function(a) {
            a = a.match(Tg);
            return Sg(a[1], a[2], a[3], a[4])
        },
        Wg = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <=
                        d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Pc(e) : "")
                }
            }
        },
        Xg = function(a, b) {
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
            a[1] = b ? c ? c + "&" + b : b : c;
            return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
        },
        Yg = function(a, b, c) {
            Ya(a);
            if (q(b)) {
                $a(b);
                for (var d = 0; d < b.length; d++) Yg(a, String(b[d]), c)
            } else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
        },
        Zg = /#|$/,
        $g = function(a,
            b) {
            var c = a.search(Zg);
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
            return Pc(a.substr(d, e - d))
        };
    var ah = function(a, b) {
            return b ? a.replace("[rm_exit_id]", b) : a
        },
        bh = function(a) {
            vb(Sc(a)) || "market" != (a.match(Tg)[1] || null) || (a = a.match(Tg), a = "https://play.google.com/store/apps/details" + Sg(null, null, null, null, a[5], a[6], a[7]));
            return a
        };
    var ch = {
        CREATIVETOOLSET_CONFIG: "creativeToolsetConfig",
        CREATIVETOOLSET_INTERNALS: "creativeToolsetInternals",
        CREATIVETOOLSET_INTERNALS_GEN204: "creativeToolsetInternalsGen204",
        CREATIVE_REPORTER: "creativeReporter",
        CREATIVE_INNOVATION: "gcreativeinnovation",
        GOOGLE_AFMA_SUPPORT: "googleAfmaSupport"
    };
    n("studio.common.WhitelistedExternalObject", ch, void 0);
    var dh = {};
    var L = function(a) {
        J.call(this);
        this.l = a;
        this.f = {}
    };
    w(L, J);
    var eh = [],
        M = function(a, b, c, d, e, f) {
            q(c) || (c && (eh[0] = c.toString()), c = eh);
            for (var k = 0; k < c.length; k++) {
                var l = Pf(b, c[k], d || a.handleEvent, e || !1, f || a.l || a);
                if (!l) break;
                a.f[l.key] = l
            }
        },
        fh = function(a, b, c, d, e, f) {
            if (q(c))
                for (var k = 0; k < c.length; k++) fh(a, b, c[k], d, e, f);
            else(b = Of(b, c, d || a.handleEvent, e, f || a.l || a)) && (a.f[b.key] = b)
        },
        gh = function(a, b, c, d, e, f) {
            if (q(c))
                for (var k = 0; k < c.length; k++) gh(a, b, c[k], d, e, f);
            else if (b = Yf(b, c, d || a.handleEvent, u(e) ? !!e.capture : !!e, f || a.l || a)) Xf(b), delete a.f[b.key]
        },
        hh = function(a) {
            Kb(a.f,
                function(b, c) {
                    this.f.hasOwnProperty(c) && Xf(b)
                }, a);
            a.f = {}
        };
    L.prototype.s = function() {
        L.v.s.call(this);
        hh(this)
    };
    L.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var ih = {
            1: "NativeMessagingTransport",
            2: "IframePollingTransport",
            3: "DirectTransport"
        },
        jh = ["pu", "lru", "pru", "lpu", "ppu"],
        kh = {},
        mh = function() {
            for (var a = 10, b = lh, c = b.length, d = ""; 0 < a--;) d += b.charAt(Math.floor(Math.random() * c));
            return d
        },
        lh = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        N = C("goog.net.xpc");
    var nh = function(a) {
        J.call(this);
        this.M = a || td()
    };
    w(nh, J);
    nh.prototype.Oa = 0;
    var oh = function(a) {
        return xd(a.M.a)
    };
    var ph = function(a, b) {
        nh.call(this, b);
        this.a = a;
        this.w = new L(this);
        rf(this, this.w);
        this.j = new eg(100, oh(this));
        rf(this, this.j);
        this.h = new G;
        this.g = new G;
        this.b = new G;
        this.o = mh();
        this.l = null;
        this.f = {};
        this.D = this.a.name;
        this.a.Ea(this.a.name + "_" + this.a.W());
        this.A = !1;
        cf(this.b, this.h);
        cf(this.b, this.g);
        bf(this.b, this.Xe, this);
        this.b.H(!0);
        M(this.w, this.j, "tick", this.$c, void 0);
        E(N, "DirectTransport created. role=" + this.a.W())
    };
    w(ph, nh);
    var qh = {},
        th = function(a) {
            var b = new rh(a.channelName, a.service, a.payload);
            a = b.a;
            var c = b.f;
            b = b.b;
            fe(N, "messageReceived: channel=" + a + ", service=" + c + ", payload=" + b);
            var d = dh[a];
            if (d) return d.la(c, b), !0;
            d = sh(b)[0];
            for (var e in dh) {
                var f = dh[e];
                if (1 == f.W() && !f.isConnected() && "tp" == c && "SETUP" == d) return f.Ea(a), f.la(c, b), !0
            }
            E(N, "channel name mismatch; message ignored.");
            return !1
        };
    g = ph.prototype;
    g.Oa = 3;
    g.Ya = function(a) {
        a = sh(a);
        var b = a[1];
        switch (a[0]) {
            case "SETUP_ACK":
                this.h.a || this.h.H(!0);
                break;
            case "SETUP":
                this.R("tp", "SETUP_ACK"), this.g.a || this.g.H(!0), null != this.l && this.l != b && (E(N, "Sending SETUP and changing peer ID to: " + b), this.R("tp", "SETUP," + this.o)), this.l = b
        }
    };
    g.connect = function() {
        var a = oh(this);
        if (a) {
            var b = Fa(a);
            0 == (qh[b] || 0) && null == wa("crosswindowmessaging.channel", a) && n("crosswindowmessaging.channel", th, a);
            qh[b]++;
            this.A = !0;
            this.$c()
        } else fe(N, "connect(): no window to initialize.")
    };
    g.$c = function() {
        this.a.isConnected() ? this.j.stop() : (this.j.start(), this.R("tp", "SETUP," + this.o))
    };
    g.R = function(a, b) {
        this.a.ca ? (a = new rh(this.D + "_" + (0 == this.a.W() ? 1 : 0), a, b), this.a.a.directSyncMode ? this.Zc(a) : this.f[Fa(a)] = fg(v(this.Zc, this, a), 0)) : fe(N, "send(): window not ready")
    };
    g.Zc = function(a) {
        var b = Fa(a);
        this.f[b] && delete this.f[b];
        try {
            var c = wa("crosswindowmessaging.channel", this.a.ca)
        } catch (d) {
            D(N, "Can't access other window, ignoring.", d);
            return
        }
        if (null === c) D(N, "Peer window had no global function.");
        else try {
            c({
                channelName: a.a,
                service: a.f,
                payload: a.b
            }), E(N, "send(): channelName=" + a.a + " service=" + a.f + " payload=" + a.b)
        } catch (d) {
            D(N, "Error performing call, ignoring.", d)
        }
    };
    g.Xe = function() {
        uh(this.a, 0)
    };
    g.s = function() {
        if (this.A) {
            var a = oh(this),
                b = Fa(a);
            1 == --qh[b] && n("crosswindowmessaging.channel", null, a)
        }
        this.f && (Kb(this.f, function(c) {
            h.clearTimeout(c)
        }), this.f = null);
        this.h && (this.h.cancel(), delete this.h);
        this.g && (this.g.cancel(), delete this.g);
        this.b && (this.b.cancel(), delete this.b);
        ph.v.s.call(this)
    };
    var sh = function(a) {
            a = a.split(",");
            a[1] = a[1] || null;
            return a
        },
        rh = function(a, b, c) {
            this.a = a;
            this.f = b;
            this.b = c
        };
    var vh = function(a, b, c, d, e) {
        nh.call(this, c);
        this.f = a;
        this.b = e || 2;
        y(1 <= this.b);
        y(2 >= this.b);
        this.J = b || "*";
        this.D = new L(this);
        this.l = new eg(100, oh(this));
        this.w = !!d;
        this.g = new G;
        this.j = new G;
        this.h = new G;
        this.ha = mh();
        this.A = null;
        this.w ? 1 == this.f.W() ? cf(this.h, this.g) : cf(this.h, this.j) : (cf(this.h, this.g), 2 == this.b && cf(this.h, this.j));
        bf(this.h, this.ua, this);
        this.h.H(!0);
        this.ga = cd && !nd("11");
        M(this.D, this.l, "tick", this.I, void 0);
        E(N, "NativeMessagingTransport created.  protocolVersion=" + this.b + ", oneSidedHandshake=" +
            this.w + ", role=" + this.f.W())
    };
    w(vh, nh);
    vh.prototype.a = null;
    vh.prototype.G = !1;
    vh.prototype.Oa = 1;
    var wh = {};
    vh.prototype.o = 0;
    var yh = function(a) {
        var b = a.$.data;
        if ("string" !== typeof b) return !1;
        var c = b.indexOf("|"),
            d = b.indexOf(":");
        if (-1 == c || -1 == d) return !1;
        var e = b.substring(0, c);
        c = b.substring(c + 1, d);
        b = b.substring(d + 1);
        fe(N, "messageReceived: channel=" + e + ", service=" + c + ", payload=" + b);
        if (d = dh[e]) return d.la(c, b, a.$.origin), !0;
        d = xh(b)[0];
        for (var f in dh) {
            var k = dh[f];
            if (1 == k.W() && !k.isConnected() && "tp" == c && ("SETUP" == d || "SETUP_NTPV2" == d) && k.Va(a.$.origin)) return k.Ea(e), k.la(c, b), !0
        }
        E(N, 'channel name mismatch; message ignored"');
        return !1
    };
    vh.prototype.Ya = function(a) {
        var b = xh(a);
        a = b[1];
        switch (b[0]) {
            case "SETUP_ACK":
                zh(this, 1);
                this.g.a || this.g.H(!0);
                break;
            case "SETUP_ACK_NTPV2":
                2 == this.b && (zh(this, 2), this.g.a || this.g.H(!0));
                break;
            case "SETUP":
                zh(this, 1);
                Ah(this, 1);
                break;
            case "SETUP_NTPV2":
                2 == this.b && (b = this.a, zh(this, 2), Ah(this, 2), 1 != b && null == this.A || this.A == a || (E(N, "Sending SETUP and changing peer ID to: " + a), Bh(this)), this.A = a)
        }
    };
    var Bh = function(a) {
            y(!(1 == a.b && 2 == a.a));
            2 != a.b || null != a.a && 2 != a.a || a.R("tp", "SETUP_NTPV2," + a.ha);
            null != a.a && 1 != a.a || a.R("tp", "SETUP")
        },
        Ah = function(a, b) {
            y(1 != a.b || 2 != b, "Shouldn't try to send a v2 setup ack in v1 mode.");
            if (2 != a.b || null != a.a && 2 != a.a || 2 != b) {
                if (null != a.a && 1 != a.a || 1 != b) return;
                a.R("tp", "SETUP_ACK")
            } else a.R("tp", "SETUP_ACK_NTPV2");
            a.j.a || a.j.H(!0)
        },
        zh = function(a, b) {
            b > a.a && (a.a = b);
            1 == a.a && (a.j.a || a.w || a.j.H(!0), a.A = null)
        };
    vh.prototype.connect = function() {
        var a = oh(this),
            b = Fa(a),
            c = wh[b];
        "number" !== typeof c && (c = 0);
        0 == c && Pf(a.postMessage ? a : a.document, "message", yh, !1, vh);
        wh[b] = c + 1;
        this.G = !0;
        this.I()
    };
    vh.prototype.I = function() {
        var a = 0 == this.f.W();
        this.w && a || this.f.isConnected() || this.B ? this.l.stop() : (this.l.start(), Bh(this))
    };
    var Ch = function(a, b, c) {
        var d = a.f.ca,
            e = a.f.name;
        a.o = 0;
        try {
            var f = d.postMessage ? d : d.document;
            f.postMessage ? (f.postMessage(e + "|" + b + ":" + c, a.J), fe(N, "send(): service=" + b + " payload=" + c + " to hostname=" + a.J)) : D(N, "Peer window had no postMessage function.")
        } catch (k) {
            D(N, "Error performing postMessage, ignoring.", k)
        }
    };
    vh.prototype.R = function(a, b) {
        var c = this;
        this.f.ca ? this.ga ? this.o = fg(function() {
            return void Ch(c, a, b)
        }, 0) : Ch(this, a, b) : fe(N, "send(): window not ready")
    };
    vh.prototype.ua = function() {
        uh(this.f, 1 == this.b || 1 == this.a ? 200 : void 0)
    };
    vh.prototype.s = function() {
        if (this.G) {
            var a = oh(this),
                b = Fa(a),
                c = wh[b];
            wh[b] = c - 1;
            1 == c && Wf(a.postMessage ? a : a.document, "message", yh, !1, vh)
        }
        this.o && (h.clearTimeout(this.o), this.o = 0);
        qf(this.D);
        delete this.D;
        qf(this.l);
        delete this.l;
        this.g.cancel();
        delete this.g;
        this.j.cancel();
        delete this.j;
        this.h.cancel();
        delete this.h;
        delete this.R;
        vh.v.s.call(this)
    };
    var xh = function(a) {
        a = a.split(",");
        a[1] = a[1] || null;
        return a
    };
    var Dh = function(a, b, c) {
        J.call(this);
        this.a = a;
        this.h = b || 0;
        this.b = c;
        this.f = v(this.rd, this)
    };
    w(Dh, J);
    g = Dh.prototype;
    g.Ba = 0;
    g.s = function() {
        Dh.v.s.call(this);
        this.stop();
        delete this.a;
        delete this.b
    };
    g.start = function(a) {
        this.stop();
        this.Ba = fg(this.f, void 0 !== a ? a : this.h)
    };
    g.stop = function() {
        0 != this.Ba && h.clearTimeout(this.Ba);
        this.Ba = 0
    };
    g.rd = function() {
        this.Ba = 0;
        this.a && this.a.call(this.b)
    };
    var Gh = function(a) {
            var b = [];
            Eh(new Fh, a, b);
            return b.join("")
        },
        Fh = function() {},
        Eh = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (q(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), Eh(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), Hh(d, c), c.push(":"), Eh(a, f, c), e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Hh(b, c);
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
        Ih = {
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
        Jh = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        Hh = function(a, b) {
            b.push('"', a.replace(Jh, function(c) {
                var d = Ih[c];
                d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), Ih[c] = d);
                return d
            }), '"')
        };
    var Kh = function() {
        J.call(this);
        this.l = {}
    };
    w(Kh, J);
    g = Kh.prototype;
    g.qc = C("goog.messaging.AbstractChannel");
    g.connect = function(a) {
        a && a()
    };
    g.isConnected = function() {
        return !0
    };
    g.Ta = function(a, b, c) {
        this.l[a] = {
            H: b,
            Ec: !!c
        }
    };
    g.Lc = function(a) {
        this.g = a
    };
    var Lh = function(a, b, c) {
        var d = a.l[b];
        d || (a.g ? d = {
            H: Ja(a.g, b),
            Ec: u(c)
        } : (D(a.qc, 'Unknown service name "' + b + '"'), d = null));
        if (d) {
            a: {
                var e = d.Ec;
                if (e && "string" === typeof c) try {
                    var f = JSON.parse(c);
                    break a
                } catch (k) {
                    D(a.qc, "Expected JSON payload for " + b + ', was "' + c + '"');
                    f = null;
                    break a
                } else if (!e && "string" !== typeof c) {
                    f = Gh(c);
                    break a
                }
                f = c
            }
            null != f && d.H(f)
        }
    };
    Kh.prototype.s = function() {
        Kh.v.s.call(this);
        delete this.l;
        delete this.g
    };
    var Mh = function(a) {
        this.b = this.j = this.h = "";
        this.l = null;
        this.g = this.a = "";
        this.B = !1;
        var b;
        a instanceof Mh ? (this.B = a.B, Nh(this, a.h), this.j = a.j, this.b = a.b, Oh(this, a.l), this.a = a.a, Ph(this, Qh(a.f)), this.g = a.g) : a && (b = String(a).match(Tg)) ? (this.B = !1, Nh(this, b[1] || "", !0), this.j = Rh(b[2] || ""), this.b = Rh(b[3] || "", !0), Oh(this, b[4]), this.a = Rh(b[5] || "", !0), Ph(this, b[6] || "", !0), this.g = Rh(b[7] || "")) : (this.B = !1, this.f = new Sh(null, this.B))
    };
    Mh.prototype.toString = function() {
        var a = [],
            b = this.h;
        b && a.push(Th(b, Uh, !0), ":");
        var c = this.b;
        if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Th(b, Uh, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.l, null != c && a.push(":", String(c));
        if (c = this.a) this.b && "/" != c.charAt(0) && a.push("/"), a.push(Th(c, "/" == c.charAt(0) ? Vh : Wh, !0));
        (c = this.f.toString()) && a.push("?", c);
        (c = this.g) && a.push("#", Th(c, Xh));
        return a.join("")
    };
    Mh.prototype.resolve = function(a) {
        var b = new Mh(this),
            c = !!a.h;
        c ? Nh(b, a.h) : c = !!a.j;
        c ? b.j = a.j : c = !!a.b;
        c ? b.b = a.b : c = null != a.l;
        var d = a.a;
        if (c) Oh(b, a.l);
        else if (c = !!a.a) {
            if ("/" != d.charAt(0))
                if (this.b && !this.a) d = "/" + d;
                else {
                    var e = b.a.lastIndexOf("/"); - 1 != e && (d = b.a.substr(0, e + 1) + d)
                }
            e = d;
            if (".." == e || "." == e) d = "";
            else if (Eb(e, "./") || Eb(e, "/.")) {
                d = ub(e, "/");
                e = e.split("/");
                for (var f = [], k = 0; k < e.length;) {
                    var l = e[k++];
                    "." == l ? d && k == e.length && f.push("") : ".." == l ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && k == e.length &&
                        f.push("")) : (f.push(l), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.a = d : c = "" !== a.f.toString();
        c ? Ph(b, Qh(a.f)) : c = !!a.g;
        c && (b.g = a.g);
        return b
    };
    var Nh = function(a, b, c) {
            a.h = c ? Rh(b, !0) : b;
            a.h && (a.h = a.h.replace(/:$/, ""))
        },
        Oh = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.l = b
            } else a.l = null
        },
        Ph = function(a, b, c) {
            b instanceof Sh ? (a.f = b, Yh(a.f, a.B)) : (c || (b = Th(b, Zh)), a.f = new Sh(b, a.B))
        },
        Rh = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Th = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, $h), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        $h = function(a) {
            a =
                a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Uh = /[#\/\?@]/g,
        Wh = /[#\?:]/g,
        Vh = /[#\?]/g,
        Zh = /[#\?@]/g,
        Xh = /#/g,
        Sh = function(a, b) {
            this.b = this.a = null;
            this.f = a || null;
            this.h = !!b
        },
        ai = function(a) {
            a.a || (a.a = new I, a.b = 0, a.f && Wg(a.f, function(b, c) {
                a.add(Pc(b), c)
            }))
        };
    Sh.prototype.aa = function() {
        ai(this);
        return this.b
    };
    Sh.prototype.add = function(a, b) {
        ai(this);
        this.f = null;
        a = bi(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.b = Xa(this.b) + 1;
        return this
    };
    var ci = function(a, b) {
        ai(a);
        b = bi(a, b);
        a.a.U(b) && (a.f = null, a.b = Xa(a.b) - a.a.get(b).length, pf(a.a, b))
    };
    g = Sh.prototype;
    g.U = function(a) {
        ai(this);
        a = bi(this, a);
        return this.a.U(a)
    };
    g.Pa = function(a) {
        var b = this.P();
        return 0 <= cb(b, a)
    };
    g.forEach = function(a, b) {
        ai(this);
        this.a.forEach(function(c, d) {
            z(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    g.S = function() {
        ai(this);
        for (var a = this.a.P(), b = this.a.S(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    g.P = function(a) {
        ai(this);
        var b = [];
        if ("string" === typeof a) this.U(a) && (b = mb(b, this.a.get(bi(this, a))));
        else {
            a = this.a.P();
            for (var c = 0; c < a.length; c++) b = mb(b, a[c])
        }
        return b
    };
    g.set = function(a, b) {
        ai(this);
        this.f = null;
        a = bi(this, a);
        this.U(a) && (this.b = Xa(this.b) - this.a.get(a).length);
        this.a.set(a, [b]);
        this.b = Xa(this.b) + 1;
        return this
    };
    g.get = function(a, b) {
        if (!a) return b;
        a = this.P(a);
        return 0 < a.length ? String(a[0]) : b
    };
    g.toString = function() {
        if (this.f) return this.f;
        if (!this.a) return "";
        for (var a = [], b = this.a.S(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.P(d);
            for (var f = 0; f < d.length; f++) {
                var k = e;
                "" !== d[f] && (k += "=" + encodeURIComponent(String(d[f])));
                a.push(k)
            }
        }
        return this.f = a.join("&")
    };
    var Qh = function(a) {
            var b = new Sh;
            b.f = a.f;
            a.a && (b.a = new I(a.a), b.b = a.b);
            return b
        },
        bi = function(a, b) {
            b = String(b);
            a.h && (b = b.toLowerCase());
            return b
        },
        Yh = function(a, b) {
            b && !a.h && (ai(a), a.f = null, a.a.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (ci(this, d), ci(this, e), 0 < c.length && (this.f = null, this.a.set(bi(this, e), nb(c)), this.b = Xa(this.b) + c.length))
            }, a));
            a.h = b
        };
    var ei = function(a, b) {
        Kh.call(this);
        for (var c = 0, d; d = jh[c]; c++)
            if (d in a && !/^https?:\/\//.test(a[d])) throw Error("URI " + a[d] + " is invalid for field " + d);
        this.a = a;
        this.name = this.a.cn || mh();
        this.f = b || td();
        this.h = [];
        this.j = new L(this);
        a.lpu = a.lpu || Vg(xd(this.f.a).location.href) + "/robots.txt";
        a.ppu = a.ppu || Vg(a.pu || "") + "/robots.txt";
        dh[this.name] = this;
        Yf(window, "unload", di) || Of(window, "unload", di);
        E(N, "CrossPageChannel created: " + this.name)
    };
    w(ei, Kh);
    var fi = /^%*tp$/,
        gi = /^%+tp$/;
    g = ei.prototype;
    g.za = null;
    g.Da = null;
    g.ja = null;
    g.Na = 1;
    g.isConnected = function() {
        return 2 == this.Na
    };
    g.ca = null;
    g.ob = null;
    g.connect = function(a) {
        this.b = a || xa;
        3 == this.Na && (this.Na = 1);
        this.Da ? bf(this.Da, this.Yc) : this.Yc()
    };
    g.Yc = function() {
        E(N, "continueConnection_()");
        this.Da = null;
        this.a.ifrid && (this.ob = this.f.getElement(this.a.ifrid));
        if (this.ob) {
            var a = this.ob.contentWindow;
            a || (a = window.frames[this.a.ifrid]);
            this.ca = a
        }
        if (!this.ca) {
            if (window == window.top) throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
            this.ca = window.parent
        }
        if (!this.ja) {
            this.a.tp || (this.a.tp = t(document.postMessage) || t(window.postMessage) || cd && window.postMessage ? 1 : 0);
            if (t(this.a.tp)) this.ja = new this.a.tp(this, this.f);
            else switch (this.a.tp) {
                case 1:
                    this.ja =
                        new vh(this, this.a.ph, this.f, !!this.a.osh, this.a.nativeProtocolVersion || 2);
                    break;
                case 3:
                    if (a = this.ca) try {
                        a = window.document.domain == this.ca.document.domain
                    } catch (b) {
                        a = !1
                    }
                    a ? this.ja = new ph(this, this.f) : E(N, "DirectTransport not supported for this window, peer window in different security context or not set yet.")
            }
            if (this.ja) E(N, "Transport created: " + (ih[String(this.ja.Oa)] || ""));
            else throw Error("CrossPageChannel: No suitable transport found! You may try injecting a Transport constructor directly via the channel config object.");
        }
        for (this.ja.connect(); 0 < this.h.length;) this.h.shift()()
    };
    g.close = function() {
        this.Da && (this.Da.cancel(), this.Da = null);
        this.h.length = 0;
        hh(this.j);
        this.Na = 3;
        qf(this.ja);
        this.b = this.ja = null;
        qf(this.za);
        this.za = null;
        E(N, 'Channel "' + this.name + '" closed')
    };
    var uh = function(a, b) {
        a.isConnected() || a.za && 0 != a.za.Ba || (a.Na = 2, E(N, 'Channel "' + a.name + '" connected'), qf(a.za), void 0 !== b ? (a.za = new Dh(a.b, b), a.za.start()) : (a.za = null, a.b()))
    };
    ei.prototype.Ua = function(a, b) {
        if (this.isConnected()) {
            try {
                var c = !!this.ca && !this.ca.closed
            } catch (d) {
                c = !1
            }
            c ? (u(b) && (b = Gh(b)), this.ja.R(hi(a), b)) : (ee(N, "Peer has disappeared."), this.close())
        } else ee(N, "Can't send. Channel not connected.")
    };
    ei.prototype.la = function(a, b, c) {
        this.Da ? this.h.push(v(this.la, this, a, b, c)) : this.Va(c) ? this.B || 3 == this.Na ? D(N, "CrossPageChannel::xpcDeliver(): Channel closed.") : a && "tp" != a ? this.isConnected() ? (a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent), a = gi.test(a) ? a.substring(1) : a, Lh(this, a, b)) : E(N, "CrossPageChannel::xpcDeliver(): Not connected.") : this.ja.Ya(b) : D(N, 'Message received from unapproved origin "' + c + '" - rejected.')
    };
    var hi = function(a) {
        fi.test(a) && (a = "%" + a);
        return a.replace(/[%:|]/g, encodeURIComponent)
    };
    ei.prototype.W = function() {
        var a = this.a.role;
        return "number" === typeof a ? a : window.parent == this.ca ? 1 : 0
    };
    ei.prototype.Ea = function(a) {
        fe(N, "changing channel name to " + a);
        delete dh[this.name];
        this.name = a;
        dh[a] = this
    };
    ei.prototype.Va = function(a) {
        var b = this.a.ph;
        return vb(Sc(a)) || vb(Sc(b)) || a == this.a.ph
    };
    ei.prototype.s = function() {
        this.close();
        this.ob = this.ca = null;
        delete dh[this.name];
        qf(this.j);
        delete this.j;
        ei.v.s.call(this)
    };
    var di = function() {
        for (var a in dh) qf(dh[a])
    };
    var ii = {
            wf: "devicemotion",
            xf: "deviceorientation",
            Mf: "hostpageScroll",
            Bf: "enterViewport",
            Cf: "exitViewport",
            qf: "adLocation"
        },
        ji = {},
        ki;
    for (ki in ii) ji[ii[ki]] = !0;
    var O = function(a) {
        tf.call(this, a)
    };
    w(O, tf);
    n("studio.events.StudioEvent", O, void 0);
    O.INIT = "init";
    O.VISIBLE = "visible";
    O.HIDDEN = "hidden";
    O.VISIBILITY_CHANGE = "visibilityChange";
    O.VISIBILITY_CHANGE_WITH_INFO = "visibilityChangeWithInfo";
    O.EXIT = "exit";
    O.INTERACTION = "interaction";
    O.PAGE_LOADED = "pageLoaded";
    O.ORIENTATION = "orientation";
    O.ABOUT_TO_EXPAND = "aboutToExpand";
    O.EXPAND_START = "expandStart";
    O.EXPAND_FAILED = "expandFailed";
    O.EXPAND_FINISH = "expandFinish";
    O.COLLAPSE_START = "collapseStart";
    O.COLLAPSE_FINISH = "collapseFinish";
    O.COLLAPSE = "collapse";
    O.FULLSCREEN_SUPPORT = "fullscreenSupport";
    O.HOSTPAGE_FEATURES_LOADED = "hostpageFeaturesLoaded";
    O.FULLSCREEN_DIMENSIONS = "fullscreenDimensions";
    O.FULLSCREEN_EXPAND_START = "fullscreenExpandStart";
    O.FULLSCREEN_EXPAND_FINISH = "fullscreenExpandFinish";
    O.FULLSCREEN_COLLAPSE_START = "fullscreenCollapseStart";
    O.FULLSCREEN_COLLAPSE_FINISH = "fullscreenCollapseFinish";
    O.HOSTPAGE_SCROLL = "hostpageScroll";
    O.OPTIONAL_HOSTPAGE_SCROLL = "optHostpageScroll";
    O.SCROLL_INTERACTION = "scrollInteraction";
    O.ENTER_VIEWPORT = "enterViewport";
    O.OPTIONAL_ENTER_VIEWPORT = "optEnterViewport";
    O.EXIT_VIEWPORT = "exitViewport";
    O.OPTIONAL_EXIT_VIEWPORT = "optExitViewport";
    O.VIDEO_START = "videoStart";
    O.prototype.da = function(a, b) {
        this[a] = b;
        return this
    };
    O.prototype.addProperty = O.prototype.da;
    var li = {},
        mi = (li.optHostpageScroll = "hostpageScroll", li.optEnterViewport = "enterViewport", li.optExitViewport = "exitViewport", li);
    var ni = function(a) {
        this.a = a
    };
    n("studio.common.mde.Direction", ni, void 0);
    ni.Corner = {
        Xf: 0,
        Yf: 1,
        rf: 2,
        sf: 3
    };
    ni.prototype.toString = function() {
        return (this.a & 2 ? "b" : "t") + (this.a & 1 ? "r" : "l")
    };
    var oi = {
            TL: new ni(0),
            TR: new ni(1),
            BL: new ni(2),
            BR: new ni(3)
        },
        pi = Pb(oi);
    var qi = {
            Vf: "startExpandInternal",
            Uf: "startCollapseInternal",
            Ef: "finishCollapseInternal",
            pf: "aboutToExpandInternal",
            Rf: "setAdVisibleInternal",
            Sf: "setAdParameters",
            yf: "dispatchEvent",
            Tf: "setParameter",
            Lf: "getParameter",
            Kf: "fullscreenSupportInternal",
            Hf: "fullscreenDimensionsInternal",
            Jf: "fullscreenExpandStartInternal",
            If: "fullscreenExpandFinishInternal",
            Gf: "fullscreenCollapseStartInternal",
            Ff: "fullscreenCollapseFinishInternal",
            Nf: "invokeOnAllVideos",
            Of: "livePreviewChannel",
            zf: "dispatchPageLoaded"
        },
        ri = {},
        si;
    for (si in qi) ri[qi[si]] = !0;
    var ti = [/s0(qa)?\.2mdn\.net/, /^.*\.(prod|corp)\.google\.com/, /localhost/, /tpc\.googlesyndication\.com/, /secureframe\.doubleclick\.net/, /imasdk\.googleapis\.com/, /^.*dot-expandable-ad-tool\.appspot\.com/],
        ui = function() {
            var a = location.hostname;
            return x(2) && !x(16) ? !1 : fb(ti, function(b) {
                return b.test(a)
            })
        };
    var vi = function(a) {
        J.call(this);
        this.b = a;
        this.a = {};
        this.b.Lc(v(this.h, this))
    };
    w(vi, J);
    vi.prototype.f = C("goog.messaging.MultiChannel");
    var xi = function(a, b) {
        if (-1 != b.indexOf(":")) throw Error('Virtual channel name "' + b + '" should not contain colons');
        if (b in a.a) throw Error('Virtual channel "' + b + '" was already created for this multichannel.');
        var c = new wi(a, b);
        return a.a[b] = c
    };
    vi.prototype.h = function(a, b) {
        var c = a.match(/^([^:]*):(.*)/);
        if (c) {
            var d = c[1];
            a = c[2];
            d in this.a ? (c = this.a[d]) ? c.f ? c.f(a, b) : D(this.f, 'Service "' + a + '" is not registered on virtual channel "' + d + '"') : D(this.f, 'Virtual channel "' + d + ' has been disposed, but a message was received for it: "' + a + '"') : D(this.f, 'Virtual channel "' + d + ' does not exist, but a message was received for it: "' + a + '"')
        } else D(this.f, 'Invalid service name "' + a + '": no virtual channel specified')
    };
    vi.prototype.s = function() {
        Kb(this.a, function(a) {
            qf(a)
        });
        qf(this.b);
        delete this.a;
        delete this.b
    };
    var wi = function(a, b) {
        J.call(this);
        this.b = a;
        this.a = b
    };
    w(wi, J);
    g = wi.prototype;
    g.Qd = C("goog.messaging.MultiChannel.VirtualChannel");
    g.connect = function(a) {
        a && a()
    };
    g.isConnected = function() {
        return !0
    };
    g.Ta = function(a, b, c) {
        this.b.b.Ta(this.a + ":" + a, v(this.dc, this, b), c)
    };
    g.Lc = function(a) {
        this.f = v(this.dc, this, a)
    };
    g.Ua = function(a, b) {
        if (this.B) throw Error("#send called for disposed VirtualChannel.");
        this.b.b.Ua(this.a + ":" + a, b)
    };
    g.dc = function(a, b) {
        this.B ? D(this.Qd, 'Virtual channel "' + this.a + '" received  a message after being disposed.') : a.apply({}, Array.prototype.slice.call(arguments, 1))
    };
    g.s = function() {
        this.b = this.b.a[this.a] = null
    };
    var yi = function(a) {
        J.call(this);
        this.b = new vi(a);
        this.g = {};
        this.f = xi(this.b, "private");
        this.h = xi(this.b, "public");
        this.f.Ta("mics", v(this.D, this), !0)
    };
    w(yi, J);
    yi.prototype.I = 0;
    yi.prototype.J = C("goog.messaging.RespondingChannel");
    yi.prototype.s = function() {
        qf(this.b);
        delete this.b;
        delete this.h;
        delete this.f
    };
    var zi = function(a, b, c, d) {
        var e = a.I++;
        a.g[e] = d;
        d = {};
        d.signature = e;
        d.data = c;
        a.h.Ua(b, d)
    };
    yi.prototype.D = function(a) {
        var b = a.signature;
        a = a.data;
        b in this.g ? ((0, this.g[b])(a), delete this.g[b]) : D(this.J, "Received signature is invalid")
    };
    yi.prototype.o = function(a, b) {
        a = a(b.data);
        var c = b.signature;
        Fe(a).then(v(function(d) {
            var e = {};
            e.data = d;
            e.signature = c;
            this.f && this.f.Ua("mics", e)
        }, this))
    };
    var Ai = function(a, b) {
        this.a = this.j = this.w = null;
        this.A = !1;
        var c = {},
            d = 1,
            e = window.parent;
        if (null != b) switch (b) {
            case 3:
                e = window;
            case 2:
                d = 3;
                c.directSyncMode = !0;
                break;
            case 4:
                e = window.parent.frames["goog-messaging-iframe"]
        }
        c.tp = d;
        c.role = 1;
        c.nativeProtocolVersion = 2;
        a && (c.cn = a);
        C("goog.net.xpc").b(Od);
        this.l = new ei(c);
        this.l.ca = e;
        yi.call(this, this.l);
        a = v(this.G, this);
        this.h.Ta("general", v(this.o, this, a), !0)
    };
    w(Ai, yi);
    Ai.prototype.connect = function(a) {
        this.A || ui() ? this.j ? (this.w = Ka(), this.l.connect(v(this.M, this, a))) : ee(F, "You must call setAssetUrl before connecting.") : fe(F, "This class should only listen to messages when served by the rendering libraries.")
    };
    Ai.prototype.M = function(a) {
        P(this, "conduitInitialized", [this.j, Ng.P()]);
        var b = {
            version: "01_239"
        };
        b.x = window.STUDIO_SDK_START || null;
        b.c = this.w;
        b.t = Ka();
        P(this, "recordTimings", [b]);
        a && a()
    };
    Ai.prototype.G = function(a) {
        a: {
            var b = a.methodName;a = a.args;
            if (b in ri) {
                if (this.a) {
                    fe(F, ["Invoking method: ", b, " with args: ", a.join(", ")].join(""));
                    var c = this.a[b];
                    t(c) || (c = this.a.defaultMessageHandler, a = [b, a]);
                    if (t(c)) {
                        b = c.apply(this.a, a);
                        break a
                    }
                }
                b = null
            } else b = void 0
        }
        return b
    };
    var P = function(a, b, c, d) {
        var e = {};
        e.methodName = b;
        e.args = c && q(c) ? c : [];
        zi(a, "general", e, d || xa)
    };
    n("studio.sdk.ContainerState", {
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed",
        EXPANDING: "expanding",
        EXPANDED: "expanded",
        FS_COLLAPSING: "fs_collapsing",
        FS_EXPANDING: "fs_expanding",
        FS_EXPANDED: "fs_expanded"
    }, void 0);
    var Bi = function() {
        L.call(this);
        this.a = new Map;
        this.b = !1;
        this.a.set("nx", null);
        this.a.set("ny", null);
        this.a.set("dim", null)
    };
    ja(Bi, L);
    Bi.prototype.h = function(a) {
        var b = a.clientX,
            c = a.clientY;
        a.changedTouches && a.changedTouches[0] && (b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY);
        this.a.set("nx", Math.round(b));
        this.a.set("ny", Math.round(c))
    };
    Bi.prototype.s = function() {
        this.b = !1;
        L.prototype.s.call(this)
    };
    var Ci = {
        NONE: 0,
        LOG_ONLY: 1
    };
    n("studio.sdk.ExitFlag", Ci, void 0);
    Ci.NONE = 0;
    Ci.LOG_ONLY = 1;
    var Di = {
        GET_CURRENT_POSITION: "getCurrentPosition",
        GET_DEFAULT_POSITION: "getDefaultPosition",
        GET_SCREEN_SIZE: "getScreenSize",
        CREATE_CALENDAR_EVENT: "createCalendarEvent",
        GET_MAX_SIZE: "getMaxSize",
        PLAY_VIDEO: "playVideo",
        STORE_PICTURE: "storePicture",
        SUPPORTS: "supports",
        USE_CUSTOM_CLOSE: "useCustomClose"
    };
    n("studio.sdk.MraidMethod", Di, void 0);
    var Ei = function() {};
    n("studio.sdk.IEnabler", Ei, void 0);
    g = Ei.prototype;
    g.Rc = function() {};
    g.reportManualClose = function() {};
    g.Mc = function() {};
    g.Tc = function() {};
    g.Sc = function() {};
    g.isVisible = function() {};
    g.qa = function() {};
    g.isPageLoaded = function() {};
    g.isInitialized = function() {};
    g.Yb = function() {};
    g.getParameter = function() {};
    g.exit = function() {};
    g.gb = function() {};
    g.ic = function() {};
    g.Qa = function() {};
    g.startTimer = function() {};
    g.stopTimer = function() {};
    g.kc = function() {};
    g.nc = function() {};
    g.mb = function() {};
    g.Db = function() {};
    g.Ma = function() {};
    g.Cb = function() {};
    g.close = function() {};
    g.Ra = function() {};
    g.Wa = function() {};
    g.addEventListener = function() {};
    g.removeEventListener = function() {};
    g.Kc = function() {};
    g.Jc = function() {};
    g.Nc = function() {};
    g.hc = function() {};
    g.Ib = function() {};
    g.gc = function() {};
    g.pc = function() {};
    g.Bc = function() {};
    var Fi = function(a, b) {
            return "The " + (a + (" method has been deprecated. As an alternative please use: " + (b + ".")))
        },
        Gi = function(a, b) {
            return 'Video "' + (a + ('" dispatching "' + (b + '" event.')))
        },
        Hi = function(a, b) {
            return 'Custom event "' + (a + ('" of type "' + (b + '" invoked.')))
        };
    var Ii = function(a) {
            this.a = a;
            this.b = ""
        },
        Ji = /:/,
        Ki = /%(.+)!/,
        Li = function(a, b, c) {
            for (var d = c.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (1 < f.length && f[0].length && f[1].length) {
                    var k = decodeURIComponent(f[0]);
                    f = decodeURIComponent(f[1]);
                    a.a.set(k, f)
                }
            }
            if (null != a.a && a.a.U("exitEvents")) {
                d = {};
                e = a.a.get("exitEvents").toString();
                k = e.split("{DELIM}");
                for (f = 0; f < k.length; f++) {
                    var l = k[f];
                    Eb(e, "%2C") && (l = unescape(l));
                    var m = {};
                    l = l.split(",");
                    for (var p = 0; p < l.length; p++)
                        if (Ji.test(l[p])) {
                            l[p].replace(Ki, "%25$1!");
                            var r = l[p].split(":"),
                                H = r.shift();
                            m[H] = unescape(r.join(":"))
                        }
                    d[m.name] = m
                }
                b.exitEvents = d
            }
            a.b = c
        };
    Ii.prototype.get = function(a, b) {
        return this.a.get(a, b)
    };
    Ii.prototype.set = function(a, b) {
        return this.a.set(a, b)
    };
    Ii.prototype.U = function(a) {
        return this.a.U(a)
    };
    var Mi = function(a) {
            this.a = {};
            this.b = new Ii(a)
        },
        Ni = function(a, b, c, d) {
            var e = c;
            "Number" == d ? e = parseInt(c, 10) : "Boolean" == d && (e = "true" == c.toLowerCase() || "1" == c);
            a.a[b] = e
        },
        Oi = function(a, b) {
            try {
                var c = JSON.parse(b);
                null != c && Xb(a.a, c);
                var d = {};
                Kb(a.a, function(e, f) {
                    e && !u(e) && (f = decodeURIComponent(f), e = decodeURIComponent(e));
                    f && e && (d[f] = e)
                }, a);
                a.a = d
            } catch (e) {
                Li(a.b, a.a, b)
            }
        };
    Mi.prototype.getParameter = function(a, b) {
        return Rb(this.a, a) ? Tb(this.a, a) : this.b.get(a, b)
    };
    Mi.prototype.T = function(a) {
        a = parseInt(this.getParameter(a), 10);
        return isNaN(a) ? null : a
    };
    Mi.prototype.ea = function(a) {
        a = this.getParameter(a);
        return vb(Sc(a)) ? null : a.toString()
    };
    var Pi = function() {
            this.b = !1;
            this.a = []
        },
        Qi = function(a, b, c) {
            a.f ? P(a.f, b, c) : a.a.push({
                type: b,
                hd: c
            })
        },
        Ri = function(a, b, c, d, e, f) {
            Qi(a, f ? "logEventFlushCounters" : "logEvent", [b, c, a.h, !!d, !!e])
        },
        Ti = function(a) {
            a.b || (Ri(a, "Count", "INTERACTIVE_IMPRESSION"), a.b = !0, Si(a))
        },
        Si = function(a) {
            Qi(a, "flushCounters", [a.h])
        },
        Ui = function(a, b, c, d) {
            Qi(a, "logVideoEvent", [b, escape(c), d])
        };
    var Vi = function() {
            this.b = this.a = 0
        },
        Wi = function(a, b) {
            a.b = Math.max(a.b, b);
            switch (a.a) {
                case 3:
                    return !1;
                case 0:
                    return .25 > b && (a.a = 1), !1;
                case 1:
                    return .5 < b && (a.a = 2), !1;
                case 2:
                    return b <= a.b - .5 ? (a.a = 3, !0) : !1;
                default:
                    return !1
            }
        };
    var Xi = function() {
        var a = h.innerHeight;
        this.b = 0;
        this.l = !1;
        this.f = a;
        this.j = this.h = this.B = null;
        this.g = this.a = this.o = 0
    };
    var Yi = function(a, b) {
        J.call(this);
        this.f = a;
        this.b = b;
        this.a = null;
        this.h = new Vi;
        this.j = new Xi
    };
    ja(Yi, J);
    var Zi = function(a) {
        a.a || (a.a = Pf(a.f, "hostpageScroll", v(a.g, a)))
    };
    Yi.prototype.g = function(a) {
        Wi(this.h, a.creativeFramePercentY) && (Ri(this.b, "Count", "LARGE_SCROLL", !1, !1, !1), $i(this));
        var b = this.j;
        b.l || (b.B = a.windowHeight, b.h = b.f / (b.B + b.f), b.j = 1 - b.h, b.l = !0);
        var c = !1,
            d = !1;
        a = a.creativeFramePercentY;
        switch (b.b) {
            case 0:
                a > b.h && a < b.j && (b.g = a, b.b = 1);
                break;
            case 1:
                a < b.a && (d = !0, b.b = Math.abs(b.a - b.g) >= 10 / (b.B + b.f) ? 4 : 3);
                break;
            case 2:
                a < b.a && (d = !0, b.b = 4);
                break;
            case 3:
                a > b.a && (d = !0, b.b = 1);
                break;
            case 4:
                a > b.a && (d = !0, a > b.h && a < b.j && Math.abs(b.a - b.g) >= 10 / (b.B + b.f) ? (b.b = 1, 0 < b.o++ && (c = !0)) : b.b = 2)
        }
        d && (b.g = b.a);
        b.a = a;
        c && (Ri(this.b, "Count", "SMALL_SCROLL", !0, !1, !1), $i(this))
    };
    var $i = function(a) {
        Ri(a.b, "Count", "SCROLL", !1, !1, !1)
    };
    Yi.prototype.s = function() {
        this.a && (Xf(this.a), this.a = null)
    };
    var aj = function(a) {
        L.call(this);
        this.w = a;
        this.a = this.h = null;
        this.D = !1;
        this.b = null;
        this.g = !1;
        this.j = -1;
        this.o = 0
    };
    ja(aj, L);
    aj.prototype.Eb = function() {
        return this.D
    };
    aj.prototype.G = function() {
        this.o = 1;
        this.a && (this.a.stop(), this.a.start())
    };
    aj.prototype.J = function() {
        this.o = 0;
        this.a && this.a.stop()
    };
    aj.prototype.A = function() {
        "1" == this.w.getParameter("isMouseOver") || 1 == this.o ? this.g || (this.D = !0, 1 > this.j ? this.j = Ka() : 1E3 < Ka() - this.j && (this.g = !0, this.w.dispatchEvent(new O("interaction")), bj(this.w, "setTimerAdjustment", ["INTERACTION_TIMER", -1E3, 0]), this.h && (Ri(this.h, "Start", "INTERACTION_TIMER"), Ti(this.h)))) : (this.g && cj(this), this.j = -1)
    };
    var cj = function(a) {
        a.g = !1;
        a.h && Ri(a.h, "Stop", "INTERACTION_TIMER")
    };
    aj.prototype.s = function() {
        this.g && cj(this);
        sf(this.b, this.a);
        L.prototype.s.call(this)
    };
    var dj = function() {
            return new Mh((window.STUDIO_ORIGINAL_ASSET_URL ? window.STUDIO_ORIGINAL_ASSET_URL : window.location.href).replace(/%(?![A-Fa-f0-9][A-Fa-f0-9])/g, "%25"))
        },
        ej = function(a) {
            a && Pa(parseInt(a, 10) || 0)
        };
    var fj = function(a) {
        this.a = a
    };
    fj.prototype.f = function(a) {
        return (null === this.a || this.a.canPlayType) && ub(a, "video/")
    };
    fj.prototype.b = function(a) {
        return this.a ? "probably" == this.a.canPlayType(a.toLowerCase()) : !1
    };
    var gj = function(a) {
        this.a = a
    };
    gj.prototype.f = function(a) {
        return "image/webp" == a.toLowerCase()
    };
    gj.prototype.b = function(a) {
        if (!this.a) return !1;
        a = a.toLowerCase();
        return ub(this.a.toDataURL(a), "data:" + a)
    };
    var hj = function() {
            this.a = Ka()
        },
        ij = null;
    hj.prototype.set = function(a) {
        this.a = a
    };
    hj.prototype.reset = function() {
        this.set(Ka())
    };
    hj.prototype.get = function() {
        return this.a
    };
    var jj = function(a) {
        this.h = a || "";
        ij || (ij = new hj);
        this.g = ij
    };
    jj.prototype.a = !0;
    jj.prototype.b = !0;
    jj.prototype.f = !1;
    var kj = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        lj = function(a, b) {
            a = (a.f - b) / 1E3;
            b = a.toFixed(3);
            var c = 0;
            if (1 > a) c = 2;
            else
                for (; 100 > a;) c++, a *= 10;
            for (; 0 < c--;) b = " " + b;
            return b
        },
        mj = function(a) {
            jj.call(this, a)
        };
    w(mj, jj);
    var nj = function(a, b) {
        var c = [];
        c.push(a.h, " ");
        if (a.b) {
            var d = new Date(b.f);
            c.push("[", kj(d.getFullYear() - 2E3) + kj(d.getMonth() + 1) + kj(d.getDate()) + " " + kj(d.getHours()) + ":" + kj(d.getMinutes()) + ":" + kj(d.getSeconds()) + "." + kj(Math.floor(d.getMilliseconds() / 10)), "] ")
        }
        c.push("[", lj(b, a.g.get()), "s] ");
        c.push("[", b.b, "] ");
        c.push(b.g);
        a.f && (b = b.a) && c.push("\n", b instanceof Error ? b.message : b.toString());
        a.a && c.push("\n");
        return c.join("")
    };
    var oj = function() {
            this.g = v(this.f, this);
            this.a = new mj;
            this.a.b = !1;
            this.a.f = !1;
            this.b = this.a.a = !1;
            this.h = {}
        },
        qj = function() {
            var a = pj;
            if (1 != a.b) {
                var b = de(),
                    c = a.g;
                b.a || (b.a = []);
                b.a.push(c);
                a.b = !0
            }
        };
    oj.prototype.f = function(a) {
        function b(f) {
            if (f) {
                if (f.value >= Qd.value) return "error";
                if (f.value >= Rd.value) return "warn";
                if (f.value >= Td.value) return "log"
            }
            return "debug"
        }
        if (!this.h[a.b]) {
            var c = nj(this.a, a),
                d = rj;
            if (d) {
                var e = b(a.h);
                sj(d, e, c, a.a)
            }
        }
    };
    var pj = null,
        rj = h.console,
        tj = function() {
            pj || (pj = new oj);
            h.location && -1 != h.location.href.indexOf("Debug=true") && qj()
        },
        sj = function(a, b, c, d) {
            if (a[b]) a[b](c, d || "");
            else a.log(c, d || "")
        };
    var vj = function(a, b, c) {
            if ("string" === typeof b)(b = uj(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = uj(c, d);
                    f && (c.style[f] = e)
                }
        },
        wj = {},
        uj = function(a, b) {
            var c = wj[b];
            if (!c) {
                var d = Vc(b);
                c = d;
                void 0 === a.style[d] && (d = (gd ? "Webkit" : fd ? "Moz" : cd ? "ms" : bd ? "O" : null) + Wc(d), void 0 !== a.style[d] && (c = d));
                wj[b] = c
            }
            return c
        },
        xj = function(a) {
            "number" == typeof a && (a = Math.round(a) + "px");
            return a
        },
        yj = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = gd && !b && !c;
            if ((void 0 === b || d) && a.getBoundingClientRect) {
                a: {
                    try {
                        var e =
                            a.getBoundingClientRect()
                    } catch (f) {
                        e = {
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        };
                        break a
                    }
                    cd && a.ownerDocument.body && (a = a.ownerDocument, e.left -= a.documentElement.clientLeft + a.body.clientLeft, e.top -= a.documentElement.clientTop + a.body.clientTop)
                }
                return new qd(e.right - e.left, e.bottom - e.top)
            }
            return new qd(b, c)
        },
        Aj = function(a) {
            var b = td(void 0),
                c = b.a;
            if (cd && c.createStyleSheet) return b = c.createStyleSheet(), zj(b, a), b;
            c = Gd(b, "HEAD")[0];
            if (!c) {
                var d = Gd(b, "BODY")[0];
                c = b.b("HEAD");
                d.parentNode.insertBefore(c, d)
            }
            d = b.b("STYLE");
            zj(d, a);
            b.f(c, d);
            return d
        },
        Bj = function(a) {
            Ed(a.ownerNode || a.owningElement || a)
        },
        zj = function(a, b) {
            b instanceof Fc && b.constructor === Fc && b.b === Ec ? b = b.a : (Wa("expected object of type SafeStyleSheet, got '" + b + "' of type " + Aa(b)), b = "type_error:SafeStyleSheet");
            cd && void 0 !== a.cssText ? a.cssText = b : a.innerHTML = b
        },
        Cj = function(a) {
            a = a.style;
            a.position = "relative";
            cd && !nd("8") ? (a.zoom = "1", a.display = "inline") : a.display = "inline-block"
        };
    var Dj = function(a) {
        Bg(this, a)
    };
    w(Dj, zg);
    var Q = function(a) {
        window.AdobeEdge = window.AdobeEdge || {};
        window.AdobeEdge.bootstrapLoading = !0;
        h.console && (tj(), qj());
        E(F, "");
        if (a != Ej) return ee(F, "You must access the enabler instance using studio.Enabler.getInstance(); or Enabler and not create a duplicate instance."), !1;
        K.call(this);
        this.w = {};
        this.j = {};
        this.J = new Pg(Qg(), Rg() ? window.orientation : 0);
        this.M = new L(this);
        this.ab = !1;
        this.A = null;
        this.f = "collapsed";
        this.tb = !1;
        this.ha = null;
        this.we = 0;
        this.Za = {};
        this.ga = null;
        this.sb = !1;
        this.G = new G;
        this.g =
            null;
        this.qb = [];
        this.ua = {};
        this.vb = [];
        this.b = new Pi;
        this.I = new aj(this);
        this.va = null;
        a = B("CANVAS");
        a.getContext && a.getContext("2d") || (a = null);
        this.mf = new gj(a);
        (a = B("VIDEO")) || (a = null);
        this.wc = new fj(a);
        this.a = new Mi(Fj(this));
        a = this.rb = new Bi;
        a.b = !0;
        M(a, document.body || window, "mousedown", a.h, {
            capture: !0,
            passive: !0
        });
        M(a, document.body || window, "touchstart", a.h, {
            capture: !0,
            passive: !0
        })
    };
    w(Q, K);
    n("studio.Enabler", Q, void 0);
    var Gj = ["c"],
        Ej = Math.random(),
        Hj = !1,
        Ij = null,
        R = function() {
            Ij || (Ij = new Q(Ej));
            return Ij
        };
    Q.getInstance = R;
    g = Q.prototype;
    g.Ic = -1;
    g.xb = null;
    g.Wc = null;
    g.Pb = null;
    g.Vc = !0;
    g.Lb = !1;
    g.Ga = !1;
    g.Gc = !1;
    g.Xc = !1;
    g.Aa = null;
    g.Mb = null;
    g.ma = null;
    g.F = null;
    var Jj = function(a) {
            a.Pb || (a.Pb = dj());
            return a.Pb
        },
        Fj = function(a) {
            var b = Jj(a).f;
            (a = Ug(Jj(a).toString())) && Wg(a, function(c, d) {
                -1 < Gj.indexOf(c) && b.set(c, d)
            });
            return b
        },
        bj = function(a, b, c) {
            P(a.F, b, c, void 0)
        },
        Nj = function(a) {
            a.Lb = !0;
            a.Mb = a.mc();
            a.ma = a.lc();
            if (a.F) {
                var b = a.b,
                    c = a.Mb;
                b.f = a.F;
                b.h = c;
                for (c = nb(b.a); c.length;) {
                    var d = c.shift();
                    Qi(b, d.type, d.hd)
                }
            }
            null == a.a.getParameter("clickN") && Ni(a.a, "clickN", 1);
            a.Vc = "true" != a.a.getParameter("ise");
            b = a.a.getParameter("e", null);
            null != b && ej(b);
            b = a.T("leftOffset") ||
                0;
            c = a.T("topOffset") || 0;
            0 == b && 0 == c || Kj(a, b, c);
            a.j = a.a.getParameter("exitEvents", {});
            b = a.a;
            if (Rb(b.a, "assets") || b.b.U("assets")) b = a.a.getParameter("assets").toString(), Lj(a, b);
            Og(a.a.getParameter("features", []));
            a.I.h = a.b;
            b = a.I;
            x(2) && (M(b, document.body || window, "mouseover", b.G, void 0), M(b, document.body || window, "mouseout", b.J, void 0));
            void 0 !== window.ontouchstart && (b.a = new eg(1E3), M(b, b.a, "tick", b.J, void 0), M(b, document, ["touchstart", "touchmove"], b.G, void 0));
            b.b && (gh(b, b.b, "tick", b.A), b.b.dispose());
            b.b = new eg(80);
            M(b, b.b, "tick", b.A, void 0);
            b.b.start();
            Mj(a);
            if (b = a.getParameter("layoutsConfig")) a.Wc = JSON.parse(String(b));
            (b = a.getParameter("experiments")) && JSON.parse(String(b));
            if (b = a.getParameter("rum_config")) try {
                var e = JSON.parse(String(b));
                b = window;
                if (!b.google_rum_config && e) {
                    var f = new Dj(e),
                        k, l = Dg(f, 2);
                    if (k = null == l ? "" : l) {
                        var m = Eg(f, Ig);
                        if (m) {
                            var p = Eg(m, Hg);
                            if (p) {
                                b.google_timing_url = k;
                                bb(p, zg);
                                bb(p, zg);
                                if (2 < p.g) p.a[2 + p.h] = 3;
                                else {
                                    var r = p.g + p.h;
                                    p.a[r] || (p.f = p.a[r] = {});
                                    p.f[2] = 3
                                }
                                b.google_rum_config =
                                    Fg(m);
                                var H = Dg(f, 3);
                                var V = null == H ? H : !!H;
                                b.google_measure_js_timing = null == V ? !1 : V;
                                var Ba = b.document,
                                    ib = Ba.createElement("script");
                                Oc(ib, ie(k));
                                var Ia = Ba.getElementsByTagName("script")[0];
                                if (Ia && Ia.parentNode) {
                                    Ia.parentNode.insertBefore(ib, Ia);
                                    var im = ib
                                } else im = null;
                                im || (b.google_timing_url = void 0, b.google_rum_config = void 0, b.google_measure_js_timing = void 0)
                            }
                        }
                    }
                }
            } catch (Sr) {}
            a.dispatchEvent(new O("init"));
            a.G.a || a.G.H()
        };
    Q.prototype.Re = function(a) {
        "number" === typeof a ? (this.Ic = a, E(F, "enabler.setProfileId set to: " + a)) : E(F, "enabler.setProfileId invalid profile id value: " + a)
    };
    Q.prototype.setProfileId = Q.prototype.Re;
    Q.prototype.Jd = function() {
        return this.Ic
    };
    Q.prototype.getProfileId = Q.prototype.Jd;
    Q.prototype.Oe = function(a) {
        u(a) ? (this.xb = a, this.isInitialized() && Mj(this)) : E(F, "enabler.setDevDynamicContent invalid dcData value: " + a)
    };
    Q.prototype.setDevDynamicContent = Q.prototype.Oe;
    var Mj = function(a) {
        if (null != a.ea("dcData") || a.xb) window.dynamicContent = null != a.ea("dcData") ? a.hb() : a.xb
    };
    Q.prototype.hb = function() {
        var a = this.getParameter("dcData");
        return a ? JSON.parse(String(a)) : null
    };
    Q.prototype.getDynamicDataPayload = Q.prototype.hb;
    Q.prototype.ra = function() {
        return this.Wc
    };
    Q.prototype.getLayoutsConfig = Q.prototype.ra;
    Q.prototype.De = function() {
        return this.a.b.b || Gh(this.a)
    };
    Q.prototype.getAdParameters = Q.prototype.De;
    Q.prototype.ff = function(a) {
        Oi(this.a, a);
        this.Aa && Xf(this.Aa);
        Nj(this);
        E(F, "Asset properties have been set by host.")
    };
    Q.prototype.setAdParameters = Q.prototype.ff;
    Q.prototype.se = function() {
        this.Aa && Xf(this.Aa);
        E(F, "Using default ad parameters in test environment. Simulating local events.");
        Nj(this)
    };
    Q.setRushSimulatedLocalEvents = function(a) {
        Hj = !!a;
        if (a && Ij) {
            a = Ij;
            for (var b = 0; b < a.qb.length; ++b) a.dispatchEvent(a.qb[b])
        }
    };
    var Oj = function(a, b, c) {
        var d = S;
        c = null != c ? c : 0;
        d.qb.push(b);
        fg(function() {
            this.dispatchEvent(b)
        }, c, d);
        return Of(d, b, a, !1, d)
    };
    Q.prototype.$b = function() {
        var a = Qg(),
            b = this.J.a;
        if (this.J.b != a || Rg() && this.J.a != window.orientation) {
            Rg() && (b = window.orientation);
            var c = new O("orientation");
            c.da("mode", a);
            c.da("degrees", b);
            this.dispatchEvent(c)
        }
    };
    Q.prototype.l = function(a, b, c) {
        if (!this.qa()) {
            var d = v.apply(this, [a, this].concat(Array.prototype.slice.call(arguments, 2)));
            fg(d, b)
        }
    };
    var Lj = function(a, b) {
        0 < b.length && -1 == b.indexOf("=") && (b = decodeURIComponent(b));
        b = b.split("&");
        if (!(2 >= b.length && "" == b[0]))
            for (var c = 0; c < b.length; c++) {
                var d = b[c].split("=");
                a.w[d[0].toLowerCase()] = unescape(d[1])
            }
    };
    Q.prototype.o = function() {
        Si(this.b)
    };
    Q.prototype.reportActivitiesImmediately = Q.prototype.o;
    var Pj = function(a) {
            a.b && Ti(a.b)
        },
        Qj = function(a, b) {
            var c = a.a.getParameter("click", ""),
                d = parseInt(a.a.getParameter("clickN"), 10);
            a = a.a.getParameter("thirdPartyClickRedirect", "");
            a: {
                var e = c;c = b;
                if (!vb(Sc(e))) {
                    e = ah(e, null);
                    if (!ub(b, e)) break a;
                    c = Rc(c, e.length)
                }
                a && (c = decodeURIComponent(c), ub(c, a) && (c = Rc(c, a.length)));
                if (!vb(Sc(e)) && -1 < e.indexOf("?"))
                    for (b = "number" === typeof d ? d : 1, d = 0; d < b; d++) c = unescape(c);b = c
            }
            return b
        },
        Rj = function(a, b, c, d) {
            var e = {};
            e.target = c;
            wg && (e.fullscreen = !0);
            (c = e) || (c = {});
            e = window;
            var f = b instanceof oc ? b : rc("undefined" != typeof b.href ? b.href : String(b));
            b = c.target || b.target;
            var k = [];
            for (l in c) switch (l) {
                case "width":
                case "height":
                case "top":
                case "left":
                    k.push(l + "=" + c[l]);
                    break;
                case "target":
                case "noopener":
                case "noreferrer":
                    break;
                default:
                    k.push(l + "=" + (c[l] ? 1 : 0))
            }
            var l = k.join(",");
            if (Yc() && e.navigator && e.navigator.standalone && b && "_self" != b) l = zd(document, "A"), ac(l, "HTMLAnchorElement"), f instanceof oc || f instanceof oc || (f = "object" == typeof f && f.xa ? f.sa() : String(f), y(qc.test(f), "%s does not match the safe URL pattern",
                f) || (f = "about:invalid#zClosurez"), f = new oc(mc, f)), l.href = pc(f), l.setAttribute("target", b), c.noreferrer && l.setAttribute("rel", "noreferrer"), c = document.createEvent("MouseEvent"), c.initMouseEvent("click", !0, !0, e, 1), l.dispatchEvent(c);
            else if (c.noreferrer) {
                if (e = e.open("", b, l), f = pc(f).toString(), e && (ed && Eb(f, ";") && (f = "'" + f.replace(/'/g, "%27") + "'"), e.opener = null, c = new fc(dc, "b/12014412, meta tag with sanitized URL"), f = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                        Qc(f) + '">', Ya(gc(c), "must provide justification"), y(!vb(gc(c)), "must provide non-empty justification"), c = Lc(f), e = e.document)) e.write(Kc(c)), e.close()
            } else(e = e.open(pc(f).toString(), b, l)) && c.noopener && (e.opener = null);
            d && a.o()
        },
        Sj = function(a, b, c, d, e) {
            P(a.F, e ? "logExitFlushEventsOpenPopup" : "launchExit", ["Count", b, a.Mb, !1, c, null, d])
        },
        Uj = function(a, b, c, d, e) {
            if (vb(Sc(b))) E(F, "There was a problem with the exit call.");
            else if (a.isInitialized()) {
                var f = void 0 !== d ? d : 0;
                d = a.j[b] && a.j[b].target || "_blank";
                var k;
                if (k = !x(8)) k = !(Eb(a.a.getParameter("click", ""), "[rm_exit_id]") && null != a.j[b] && null != a.j[b].reportingId && !vb(a.j[b].reportingId));
                f = !(f & 1);
                var l = a.a.getParameter("click", ""),
                    m = a.rb;
                if (m.b) {
                    var p = wd();
                    m.a.set("dim", p.width + "x" + p.height);
                    p = "";
                    m = ba(m.a);
                    for (var r = m.next(); !r.done; r = m.next()) {
                        var H = ba(r.value);
                        r = H.next().value;
                        H = H.next().value;
                        p = null == H ? p + "&" + r + "=" : p + "&" + r + "=" + H
                    }
                    m = l.toLowerCase().indexOf("&adurl="); - 1 < m && 34 >= p.length && (l = l.substr(0, m) + p + l.substr(m))
                }
                e && e.pIndex && (e = e.pIndex) && (p = l.toLowerCase().indexOf("&adurl="), -1 < p && (l = l.substr(0, p) + "&gpa_pos=" + e + l.substr(p)));
                f && (a.j[b] ? x(8) ? Sj(a, b, c, l, !0) : (e = bh(c), e = Tj(a, e, l, b), Rj(a, e, d, !k)) : c && (a.qa() && x(8) ? Sj(a, b, c, l, !1) : (e = bh(c), e = Tj(a, e, l, null), Rj(a, e, d, !0), k = !1)));
                k && Ri(a.b, "Count", b, !0, !0, !0);
                P(a.F, "AD_CLICKED");
                d = new O("exit");
                d.da("id", b);
                d.da("url", c);
                a.dispatchEvent(d);
                E(F, 'Exit "' + (b + '" invoked.'))
            }
        },
        Vj = function(a, b, c, d, e) {
            a = a.j[b];
            c = !d && a && a.url ? a.url : c;
            var f;
            null == e || vb(Sc(e)) ? f = c : f = Xg(c, e + "");
            return f
        },
        Tj = function(a, b, c, d) {
            var e = null;
            d && (e = a.j[d], e = null !=
                e.reportingId ? e.reportingId : null);
            b = b || "";
            d = a.a.getParameter("thirdPartyClickRedirect", "");
            a = parseInt(a.a.getParameter("clickN"), 10);
            if (!vb(Sc(c)) && -1 < c.indexOf("?")) {
                a = "number" === typeof a ? a : 1;
                for (var f = 0; f < a; f++) b = encodeURIComponent(b)
            }
            e && (c = ah(c, e), b = d ? encodeURIComponent(d + b) : b);
            return c + b
        };
    Q.prototype.reportManualClose = function() {
        E(F, "Ad was closed by user action.");
        Ri(this.b, "Count", "EVENT_MANUAL_CLOSE", void 0, void 0, void 0)
    };
    Q.prototype.reportManualClose = Q.prototype.reportManualClose;
    Q.prototype.Mc = function() {
        Ri(this.b, "Count", "ENGAGEMENT", !1, !1, !1);
        this.o()
    };
    Q.prototype.reportEngagement = Q.prototype.Mc;
    var Wj = function(a, b, c) {
            var d = b;
            100 < d.length && (d = d.substr(0, 100));
            P(a.F, "reportCustomVariable", [escape(d), c]);
            E(F, 'Custom string "' + (b + '" recorded.'))
        },
        Kj = function(a, b, c) {
            a.qa() && !x(8) && (a.ga && Bj(a.ga), a.ga = Aj(Hc("body", {
                position: "relative",
                "margin-left": -b + "px !important",
                "margin-top": -c + "px !important"
            })))
        };
    Q.prototype.jf = function(a, b, c) {
        Ni(this.a, a, b, c)
    };
    Q.prototype.setParameter = Q.prototype.jf;
    Q.prototype.Rb = function() {
        this.dispatchEvent(new O("pageLoaded"))
    };
    Q.prototype.dispatchPageLoaded = Q.prototype.Rb;
    Q.prototype.dispatchEvent = function(a) {
        this.ua[a.type] = (this.ua[a.type] || 0) + 1;
        switch (a.type) {
            case "pageLoaded":
                null != window.AdobeEdge && t(window.AdobeEdge.loadResources) && window.AdobeEdge.loadResources();
                this.Gc = !0;
                break;
            case "orientation":
                this.J.b = a.mode, this.J.a = a.degrees
        }
        return Q.v.dispatchEvent.call(this, a)
    };
    Q.prototype.dispatchEvent = Q.prototype.dispatchEvent;
    Q.prototype.ub = function(a) {
        (this.Xc = a) && !this.ua.visible ? (null != window.AdobeEdge && t(window.AdobeEdge.playWhenReady) && window.AdobeEdge.playWhenReady(), this.Vc && Ri(this.b, "Start", "DISPLAY_TIMER", void 0, void 0, void 0), this.dispatchEvent(new O("visible"))) : this.ua.hidden || this.dispatchEvent(new O("hidden"));
        this.dispatchEvent(new O("visibilityChange"))
    };
    Q.prototype.setAdVisibleInternal = Q.prototype.ub;
    Q.prototype.Be = function() {
        this.ub(!0)
    };
    Q.prototype.dispatchAdVisible = Q.prototype.Be;
    Q.prototype.Rc = function(a, b, c, d, e, f) {
        if (c || d) this.A || (this.A = {}), this.A.width = c, this.A.height = d;
        null != e && (this.ab = !!e);
        null != f && Ni(this.a, "isMultiDirectional", f ? "true" : "false")
    };
    Q.prototype.setExpandingPixelOffsets = Q.prototype.Rc;
    Q.prototype.Tc = function(a) {
        this.ab = !!a
    };
    Q.prototype.setStartExpanded = Q.prototype.Tc;
    Q.prototype.Sc = function(a) {
        Ni(this.a, "isMultiDirectional", a ? "true" : "false")
    };
    Q.prototype.setIsMultiDirectional = Q.prototype.Sc;
    Q.prototype.Ue = function(a) {
        P(this.F, "invokeMraidMethod", ["useCustomClose", [a]]);
        this.sb = 0 == a
    };
    Q.prototype.setUseCustomClose = Q.prototype.Ue;
    Q.prototype.Pe = function() {};
    Q.prototype.setFloatingPixelDimensions = Q.prototype.Pe;
    Q.prototype.isVisible = function() {
        return this.Xc
    };
    Q.prototype.isVisible = Q.prototype.isVisible;
    Q.prototype.qa = function() {
        return x(1)
    };
    Q.prototype.isServingInLiveEnvironment = Q.prototype.qa;
    Q.prototype.isPageLoaded = function() {
        return this.Gc
    };
    Q.prototype.isPageLoaded = Q.prototype.isPageLoaded;
    Q.prototype.isInitialized = function() {
        return this.Lb
    };
    Q.prototype.isInitialized = Q.prototype.isInitialized;
    Q.prototype.Yb = function(a) {
        t(a) && bf(this.G, a)
    };
    Q.prototype.callAfterInitialized = Q.prototype.Yb;
    Q.prototype.getParameter = function(a) {
        return this.a.getParameter(a, null)
    };
    Q.prototype.getParameter = Q.prototype.getParameter;
    Q.prototype.getParameter = Q.prototype.getParameter;
    Q.prototype.T = function(a) {
        return this.a.T(a)
    };
    Q.prototype.getParameterAsInteger = Q.prototype.T;
    Q.prototype.oc = function(a) {
        a = this.a.ea(a);
        return void 0 != a && ("true" == a.toLowerCase() || "1" == a)
    };
    Q.prototype.getParameterAsBoolean = Q.prototype.oc;
    Q.prototype.ea = function(a) {
        return this.a.ea(a)
    };
    Q.prototype.getParameterAsNullableString = Q.prototype.ea;
    Q.prototype.exit = function(a, b, c) {
        void 0 !== b && (b = Qj(this, b));
        Pj(this);
        Uj(this, a, Vj(this, a, b, !1), c)
    };
    Q.prototype.exit = Q.prototype.exit;
    Q.prototype.gb = function(a, b, c) {
        b = Qj(this, b);
        Pj(this);
        Uj(this, a, Vj(this, a, b, !0), c)
    };
    Q.prototype.exitOverride = Q.prototype.gb;
    Q.prototype.sd = function(a, b, c, d, e) {
        e && !e.pIndex ? e.pIndex = c : e || (e = {
            pIndex: c
        });
        b = Qj(this, b);
        Pj(this);
        Uj(this, a, Vj(this, a, b, !0), d, e)
    };
    Q.prototype.dynamicExit = Q.prototype.sd;
    Q.prototype.Ab = function(a, b) {
        Uj(this, a, Vj(this, a, void 0, void 0, b || ""))
    };
    Q.prototype.exitQueryString = Q.prototype.Ab;
    Q.prototype.ic = function(a) {
        return Tj(this, a, this.a.getParameter("click", ""), null)
    };
    Q.prototype.formExitUrlFromOverride = Q.prototype.ic;
    Q.prototype.Qa = function(a, b) {
        E(F, 'Counter "' + (a + '" invoked.'));
        Ri(this.b, "Count", a, b, !0, void 0);
        fe(F, Hi(a, "Count"))
    };
    Q.prototype.counter = Q.prototype.Qa;
    Q.prototype.startTimer = function(a) {
        E(F, 'Timer "' + (a + '" started.'));
        Ri(this.b, "Start", a, void 0, !0, void 0);
        fe(F, Hi(a, "Start"))
    };
    Q.prototype.startTimer = Q.prototype.startTimer;
    Q.prototype.stopTimer = function(a) {
        E(F, 'Timer "' + (a + '" stopped.'));
        Ri(this.b, "Stop", a, void 0, !0, void 0);
        fe(F, Hi(a, "Stop"))
    };
    Q.prototype.stopTimer = Q.prototype.stopTimer;
    Q.prototype.Je = function(a) {
        D(F, Fi("Enabler.reportCustomImpressionVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
        Wj(this, a, 1)
    };
    Q.prototype.reportCustomImpressionVariable = Q.prototype.Je;
    Q.prototype.Ke = function(a) {
        Wj(this, a, 1)
    };
    Q.prototype.reportCustomVariableCount1 = Q.prototype.Ke;
    Q.prototype.Ie = function(a) {
        D(F, Fi("Enabler.reportCustomClickVariable(postString)", "Enabler.reportCustomVariableCount1(customString)"));
        Wj(this, a, 2)
    };
    Q.prototype.reportCustomClickVariable = Q.prototype.Ie;
    Q.prototype.Le = function(a) {
        Wj(this, a, 2)
    };
    Q.prototype.reportCustomVariableCount2 = Q.prototype.Le;
    Q.prototype.kc = function() {
        return this.f
    };
    Q.prototype.getContainerState = Q.prototype.kc;
    Q.prototype.nc = function() {
        return this.ha
    };
    Q.prototype.getExpandDirection = Q.prototype.nc;
    Q.prototype.Se = function(a) {
        this.tb || bj(this, "setResponsiveBehavior", [a ? 2 : 0, 2])
    };
    Q.prototype.setResponsiveExpanding = Q.prototype.Se;
    Q.prototype.Te = function(a, b) {
        bj(this, "responsiveResize", [a, b])
    };
    Q.prototype.setResponsiveSize = Q.prototype.Te;
    Q.prototype.mb = function() {
        if ("collapsed" != this.f) D(F, "Enabler.requestExpand() should not be invoked unless the creative is in the collapsed state.");
        else {
            Zf(this, "expandStart") || D(F, "Please implement the expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.EXPAND_START,\n    function() {/* expand action */});");
            this.tb = !0;
            var a = [this.ma];
            this.A && a.push(this.A);
            P(this.F, "expandRequested", a);
            Xj(this, this.Ma);
            this.l(this.jc, 0)
        }
    };
    Q.prototype.requestExpand = Q.prototype.mb;
    var Xj = function(a, b) {
            if (!a.qa() && a.sb) {
                var c = document.getElementsByTagName("body")[0],
                    d = B("IMG", {
                        width: "15",
                        height: "15",
                        border: "0",
                        src: "http://s0.2mdn.net/ads/studio/close.png"
                    });
                a.g = {
                    H: b,
                    element: B("DIV", {
                        style: "position: absolute;right: 5px;top: 5px;width: 15px;height: 15px;cursor: pointer;"
                    }, d)
                };
                M(a.M, a.g.element, "click", b, void 0);
                Dd(c, a.g.element)
            }
        },
        Yj = function(a) {
            a.g && (Ed(a.g.element), gh(a.M, a.g.element, "click", a.g.H), a.g.element = null, a.g.H = null, a.g = null)
        };
    Q.prototype.me = function() {
        this.dispatchEvent(new O("aboutToExpand"))
    };
    Q.prototype.aboutToExpandInternal = Q.prototype.me;
    Q.prototype.jc = function(a) {
        a && (a = oi[a.toString().toUpperCase()]);
        var b = 0,
            c = 0;
        "true" == this.getParameter("isMultiDirectional") && a && (a.a & 2 && (c = this.T("topOffset")), a.a & 1 && (b = this.T("leftOffset")));
        Kj(this, null === b ? 0 : b, null === c ? 0 : c);
        a ? this.ha = a : this.ha = this.qa() || "true" != this.getParameter("isMultiDirectional") ? null : pi[this.we++ % pi.length];
        this.ab || (Ri(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Pj(this), this.Ga || (this.o(), this.Ga = !0));
        this.ab = !1;
        this.f = "expanding";
        a = new O("expandStart");
        a.da("direction",
            this.ha);
        this.dispatchEvent(a)
    };
    Q.prototype.startExpandInternal = Q.prototype.jc;
    Q.prototype.Db = function() {
        "expanding" != this.f ? D(F, "You must first call Enabler.requestExpand() to initiate the expansion and then call Enabler.finishExpand() when the expand animation has  finished. Cancelling expansion...") : (P(this.F, "expandFinished", [this.ma]), this.f = "expanded", E(F, "The creative has expanded."), this.dispatchEvent(new O("expandFinish")))
    };
    Q.prototype.finishExpand = Q.prototype.Db;
    Q.prototype.expand = function(a, b) {
        D(F, "The Enabler.expand() method has been deprecated. As an alternative please use: Enabler.requestExpand().");
        Kj(this, 0, 0);
        var c = [this.ma];
        b && c.push(b);
        this.sb = !!b && 0 == b.useCustomClose;
        P(this.F, "expandAsset", c);
        a || (Ri(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0), Pj(this));
        this.Ga || (this.o(), this.Ga = !0);
        E(F, "The creative has expanded.")
    };
    Q.prototype.expand = Q.prototype.expand;
    Q.prototype.Ma = function() {
        "expanded" != this.f && D(F, "Enabler.requestCollapse() should not be invoked unless the creative is in the expanded state.");
        Yj(this);
        Zf(this, "collapseStart") || D(F, "Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
        P(this.F, "collapseRequested", [this.ma]);
        this.l(this.fc, 0)
    };
    Q.prototype.requestCollapse = Q.prototype.Ma;
    Q.prototype.fc = function() {
        this.f = "collapsing";
        this.dispatchEvent(new O("collapseStart"))
    };
    Q.prototype.startCollapseInternal = Q.prototype.fc;
    Q.prototype.Cb = function() {
        "collapsing" != this.f ? D(F, "You must first call Enabler.requestCollapse() to initiate the collapse and then call Enabler.finishCollapse() when the collapse animation has  finished. Cancelling collapse...") : (P(this.F, "collapseFinished", [this.ma]), this.l(this.Sb, 0))
    };
    Q.prototype.finishCollapse = Q.prototype.Cb;
    Q.prototype.Sb = function() {
        var a = this.T("leftOffset") || 0,
            b = this.T("topOffset") || 0;
        Kj(this, a, b);
        Ri(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
        this.f = "collapsed";
        E(F, "The creative has collapsed.");
        this.dispatchEvent(new O("collapseFinish"))
    };
    Q.prototype.finishCollapseInternal = Q.prototype.Sb;
    Q.prototype.collapse = function() {
        D(F, "The Enabler.collapse() method has been deprecated. As an alternative please use: Enabler.requestCollapse().");
        Zf(this, "collapse") || D(F, "Please implement collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.COLLAPSE_START,\n    function() {/* Begin collapse animation */});");
        var a = this.T("leftOffset") || 0,
            b = this.T("topOffset") || 0;
        Kj(this, a, b);
        P(this.F, "collapseAsset", [this.ma]);
        this.dispatchEvent(new O("collapse"));
        Ri(this.b, "Stop",
            "EXPAND_TIMER", void 0, void 0, void 0)
    };
    Q.prototype.collapse = Q.prototype.collapse;
    Q.prototype.close = function() {
        this.I.dispose();
        P(this.F, "tellAssetHide", [this.ma]);
        E(F, "Closing ad. If this was invoked by a user action, call Enabler.reportManualClose() as well.")
    };
    Q.prototype.close = Q.prototype.close;
    Q.prototype.jd = function() {
        P(this.F, "tellCompanionAssetHide", [this.ma])
    };
    Q.prototype.closeCompanion = Q.prototype.jd;
    Q.prototype.qd = function() {
        P(this.F, "tellCompanionAssetShow", [this.ma])
    };
    Q.prototype.displayCompanion = Q.prototype.qd;
    Q.prototype.Fd = function() {
        return this.ea("sn")
    };
    Q.prototype.getDartSiteName = Q.prototype.Fd;
    Q.prototype.Ed = function() {
        return this.T("sid")
    };
    Q.prototype.getDartSiteId = Q.prototype.Ed;
    Q.prototype.Bd = function() {
        return this.T("aid")
    };
    Q.prototype.getDartAdId = Q.prototype.Bd;
    Q.prototype.Dd = function() {
        return this.T("pid")
    };
    Q.prototype.getDartPageId = Q.prototype.Dd;
    Q.prototype.mc = function() {
        return this.ea("rid")
    };
    Q.prototype.getDartRenderingId = Q.prototype.mc;
    Q.prototype.Cd = function() {
        return this.T("cid")
    };
    Q.prototype.getDartCreativeId = Q.prototype.Cd;
    Q.prototype.lc = function() {
        return this.ea("varName")
    };
    Q.prototype.getDartAssetId = Q.prototype.lc;
    Q.prototype.Md = function() {
        return this.ea("ct")
    };
    Q.prototype.getUserCountry = Q.prototype.Md;
    Q.prototype.Od = function() {
        return this.ea("st")
    };
    Q.prototype.getUserState = Q.prototype.Od;
    Q.prototype.Pd = function() {
        return this.ea("zp")
    };
    Q.prototype.getUserZipCode = Q.prototype.Pd;
    Q.prototype.Ld = function() {
        var a = this.T("bw");
        return null != a ? a : 0
    };
    Q.prototype.getUserBandwidth = Q.prototype.Ld;
    Q.prototype.Kd = function() {
        return this.ea("ac")
    };
    Q.prototype.getUserAreaCode = Q.prototype.Kd;
    Q.prototype.Nd = function() {
        return this.T("dma")
    };
    Q.prototype.getUserDMACode = Q.prototype.Nd;
    Q.prototype.getFilename = function(a) {
        D(F, "The method: Enabler.getFilename(filename) has been deprecated. As an alternative please use: Enabler.getUrl(filename).");
        return this.Ra(a)
    };
    Q.prototype.getFilename = Q.prototype.getFilename;
    Q.prototype.Ra = function(a) {
        var b = a.toLowerCase(),
            c = b.slice(b.lastIndexOf("/") + 1),
            d = encodeURIComponent(c),
            e = this.w[c];
        e = (e = (e = (e = (e = e || this.w["pro_" + c]) || this.w[b]) || this.w["pro_" + b]) || this.w[d]) || this.w["pro_" + d];
        return null != e ? e : a
    };
    Q.prototype.getUrl = Q.prototype.Ra;
    Q.prototype.Id = function() {
        return this.J
    };
    Q.prototype.getOrientation = Q.prototype.Id;
    Q.prototype.Ne = function(a, b) {
        if (a)
            for (var c = 0; c < this.vb.length; ++c) {
                var d = this.vb[c];
                if (null != d) switch (a) {
                    case "changevolume":
                        null != b && (0 < b && (d.muted = !1), d.volume = b);
                        break;
                    case "pause":
                        d.pause();
                        break;
                    case "resume":
                        d.play()
                }
            }
    };
    Q.prototype.invokeOnAllVideos = Q.prototype.Ne;
    Q.prototype.ec = function(a) {
        null != a && this.vb.push(a)
    };
    Q.prototype.registerVideoElements = Q.prototype.ec;
    Q.prototype.qe = function(a, b) {
        a = lf(ie(a));
        null != b && bf(a, b)
    };
    Q.prototype.loadScript = Q.prototype.qe;
    Q.prototype.Wa = function(a, b) {
        Kg(ge, a) ? bf(this.G, Ja(sg, a, b)) : ee(F, "There is no module called " + (a + "."))
    };
    Q.prototype.loadModule = Q.prototype.Wa;
    Q.prototype.pe = function(a, b) {
        for (var c = a.length, d = 0; d < a.length; ++d) this.Wa(a[d], function() {
            0 == --c && b()
        })
    };
    Q.prototype.loadModules = Q.prototype.pe;
    Q.prototype.Ac = function(a) {
        E(F, 'Dispatching function invocation "' + a + '" on parent.');
        P(this.F, "invokeExternalJSFunction", [escape(a)])
    };
    Q.prototype.invokeExternalJsFunction = Q.prototype.Ac;
    Q.prototype.Bc = function(a, b, c) {
        a in Di || D(F, 'The mraid method "' + (a + "\" isn't allowed to be invoked, please use one of the corresponding Enabler methods."));
        var d = 'Method "' + (a + '" invoked');
        b && (d += 'with arguments "' + (b.join(",") + '"'));
        E(F, d + ".");
        P(this.F, "invokeMraidMethod", [a, b], c)
    };
    Q.prototype.invokeMraidMethod = Q.prototype.Bc;
    Q.prototype.Ee = function() {
        D(F, "The method: Enabler.invokeAdMobMethod has been deprecated.")
    };
    Q.prototype.invokeAdMobMethod = Q.prototype.Ee;
    Q.prototype.D = function(a, b, c, d) {
        Kg(ch, a) ? P(this.F, "invokeExternalJSFunctionWithReturn", [a, b, c], d) : ee(F, 'The whitelist global object "' + (a + "\" isn't whitelisted, please only call methods on one of the existing whitelisted objects."))
    };
    Q.prototype.invokeExternalJsFunctionWithReturn = Q.prototype.D;
    Q.prototype.bf = function(a, b) {
        E(F, "Dispatching function invocation openUrl on parent.");
        P(this.F, "invokeUrlOpen", [a], b)
    };
    Q.prototype.invokeUrlOpen = Q.prototype.bf;
    Q.prototype.s = function() {
        this.ga && Bj(this.ga);
        this.Aa && Xf(this.Aa);
        sf(this.va, this.I, this.b, this.M, this.G, this.rb);
        delete this.Za;
        Q.v.s.call(this)
    };
    Q.prototype.addEventListener = function(a, b, c, d, e) {
        a = mi[a.toString()] || a;
        if (a.toString() in ji) {
            if (!this.qa()) {
                e = b;
                t(b) && (e = function(f) {
                    f.zd ? b(f.$) : b(f)
                });
                M(this.M, window, a, e, c, d);
                return
            }
            "hostpageScroll" != a || this.va || (this.va = new Yi(this, this.b), Zi(this.va));
            P(this.F, "registerEventTypeListenerForType", [a, e])
        }
        "hostpageFeaturesLoaded" == a && P(this.F, "getHostpageFeatures", [a]);
        Pf(this, a, b, c, d)
    };
    Q.prototype.addEventListener = Q.prototype.addEventListener;
    Q.prototype.removeEventListener = function(a, b, c, d) {
        Wf(this, a, b, c, d)
    };
    Q.prototype.removeEventListener = Q.prototype.removeEventListener;
    Q.prototype.wb = function(a, b) {
        this.Za[a] = b
    };
    Q.prototype.addMessageHandler = Q.prototype.wb;
    Q.prototype.Ge = function(a) {
        delete this.Za[a]
    };
    Q.prototype.removeMessageHandler = Q.prototype.Ge;
    Q.prototype.ve = function(a, b) {
        a = this.Za[a];
        t(a) && a.apply(null, b)
    };
    Q.prototype.defaultMessageHandler = Q.prototype.ve;
    Q.prototype.Kc = function() {
        Zf(this, "fullscreenSupport") || D(F, "Please implement an event handler in order to receive support status:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_SUPPORT,\n    function() {/* query event for fullscreen status */});");
        P(this.F, "isFullscreenSupported");
        this.l(this.Xb, 0, !0)
    };
    Q.prototype.queryFullscreenSupport = Q.prototype.Kc;
    Q.prototype.Jc = function() {
        Zf(this, "fullscreenDimensions") || D(F, "Please implement an event handler in order to receive dimensions:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_DIMENSIONS,\n    function() {/* query event for fullscreen dimensions */});");
        P(this.F, "queryFullscreenDimensions");
        if (!this.qa()) {
            var a = wd();
            this.l(this.Qb, 0, a.width, a.height)
        }
    };
    Q.prototype.queryFullscreenDimensions = Q.prototype.Jc;
    Q.prototype.Nc = function(a, b) {
        if ("collapsed" != this.f) D(F, "Enabler.requestFullscreenExpand() should not be invoked unless the  creative is in the collapsed state.");
        else {
            Zf(this, "fullscreenExpandStart") || D(F, "Please implement the fullscreen expansion via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_EXPAND_START,\n    function() {/* expand action */});");
            this.tb = !0;
            var c = [];
            a && b && (c = [a, b]);
            P(this.F, "fullscreenExpandRequested", c);
            Xj(this, this.Ib);
            this.l(this.Wb,
                0, a, b)
        }
    };
    Q.prototype.requestFullscreenExpand = Q.prototype.Nc;
    Q.prototype.hc = function() {
        "fs_expanding" != this.f ? D(F, "You must first call Enabler.requestFullscreenExpand() to initiate the expansion and then call Enabler.finishFullscreenExpand() when the expand animation has finished. Cancelling expansion...") : (P(this.F, "fullscreenExpandFinished"), E(F, "The creative has expanded."), this.l(this.Vb, 0))
    };
    Q.prototype.finishFullscreenExpand = Q.prototype.hc;
    Q.prototype.Ib = function() {
        "fs_expanded" != this.f ? D(F, "Enabler.requestFullscreenCollapse() should not be invoked unless the  creative is in the fullscreen state.") : (Zf(this, "fullscreenCollapseStart") || D(F, "Please implement fullscreen collapse via event handlers:\nEnabler.addEventListener(\n    studio.events.StudioEvent.FULLSCREEN_COLLAPSE_START,\n    function() {/* Begin collapse animation */});"), Yj(this), P(this.F, "fullscreenCollapseRequested"), this.l(this.Ub, 0))
    };
    Q.prototype.requestFullscreenCollapse = Q.prototype.Ib;
    Q.prototype.gc = function() {
        "fs_collapsing" != this.f ? D(F, "You must first call Enabler.requestFullscreenCollapse() to initiate the collapse and then call Enabler.finishFullscreenCollapse() when the collapse animation has finished. Cancelling collapse...") : (P(this.F, "fullscreenCollapseFinished"), this.l(this.Tb, 0))
    };
    Q.prototype.finishFullscreenCollapse = Q.prototype.gc;
    Q.prototype.Fe = function(a) {
        P(this.F, "registerChargeableEventName", [a])
    };
    Q.prototype.registerChargeableEventName = Q.prototype.Fe;
    Q.prototype.Eb = function() {
        return this.I.Eb()
    };
    Q.prototype.hasUserInteracted = Q.prototype.Eb;
    Q.prototype.Xb = function(a) {
        var b = new O("fullscreenSupport");
        b.da("supported", a);
        this.dispatchEvent(b)
    };
    Q.prototype.fullscreenSupportInternal = Q.prototype.Xb;
    Q.prototype.Qb = function(a, b) {
        var c = new O("fullscreenDimensions");
        void 0 != a && void 0 != b && (c.da("width", a), c.da("height", b));
        this.dispatchEvent(c)
    };
    Q.prototype.fullscreenDimensionsInternal = Q.prototype.Qb;
    Q.prototype.Wb = function(a, b, c, d) {
        Ri(this.b, "Start", "EXPAND_TIMER", void 0, void 0, void 0);
        Pj(this);
        this.Ga || (this.o(), this.Ga = !0);
        this.f = "fs_expanding";
        var e = new O("fullscreenExpandStart");
        e.da("width", a);
        e.da("height", b);
        e.da("left", c);
        e.da("top", d);
        this.dispatchEvent(e)
    };
    Q.prototype.fullscreenExpandStartInternal = Q.prototype.Wb;
    Q.prototype.Vb = function() {
        this.f = "fs_expanded";
        this.dispatchEvent(new O("fullscreenExpandFinish"))
    };
    Q.prototype.fullscreenExpandFinishInternal = Q.prototype.Vb;
    Q.prototype.Ub = function() {
        this.f = "fs_collapsing";
        this.dispatchEvent(new O("fullscreenCollapseStart"))
    };
    Q.prototype.fullscreenCollapseStartInternal = Q.prototype.Ub;
    Q.prototype.Tb = function() {
        Ri(this.b, "Stop", "EXPAND_TIMER", void 0, void 0, void 0);
        this.f = "collapsed";
        this.dispatchEvent(new O("fullscreenCollapseFinish"))
    };
    Q.prototype.fullscreenCollapseFinishInternal = Q.prototype.Tb;
    Q.prototype.oe = function() {
        return this.mf.b("image/webp")
    };
    Q.prototype.canRenderWebpImages = Q.prototype.oe;
    Q.prototype.vc = function(a) {
        return this.wc.f(a) ? this.wc.b(a) : !1
    };
    Q.prototype.supportsVideoFormat = Q.prototype.vc;
    Q.prototype.Qe = function() {
        return this
    };
    Q.prototype.setHint = Q.prototype.Qe;
    Q.prototype.pc = function() {
        a: {
            for (a in Id)
                if ("studio" == Id[a]) {
                    var a = "studio";
                    break a
                }
            a = null
        }
        return a || "studio"
    };
    Q.prototype.getSdk = Q.prototype.pc;
    var Zj = R();
    n("Enabler", Zj, void 0);
    var S = R();
    if (!S.Lb) {
        var ak = S.a.getParameter("e", null);
        ej(ak);
        var bk = S.T("leftOffset") || 0,
            ck = S.T("topOffset") || 0;
        0 == bk && 0 == ck || Kj(S, bk, ck);
        var dk = S.oc("ssr"),
            ek;
        ek = Jj(S).h;
        var fk;
        fk = Jj(S).b;
        var gk;
        gk = Jj(S).a;
        var hk = [ek, "://", fk, gk].join(""); of (Ng.a);
        Og([1, 2]);
        var ik;
        ik = S.a.getParameter("c", void 0);
        var jk;
        jk = S.a.T("t");
        S.F = new Ai(ik, jk);
        rf(S, S.F);
        S.F.a = S;
        S.F.j = hk.split("?")[0];
        S.F.A = dk;
        if (!S.qa()) {
            var kk = 1E3;
            Hj && (kk = 0);
            S.Aa = Oj(S.se, "a", kk);
            var lk = 2E3,
                mk = 2500;
            Hj && (mk = lk = 0);
            Oj(S.Rb, "b", lk);
            Oj(Ja(S.ub, !0), "c", mk);
            M(S.M, window, ["resize", "orientationchange"], S.$b, void 0);
            S.$b()
        }
        S.F.connect()
    }
    gg.enabler = 3;
    var T = function() {
        K.call(this);
        this.a = "loading";
        this.b = wa("Enabler");
        this.b.isInitialized() ? this.f() : Pf(this.b, "init", this.f, !1, this)
    };
    w(T, K);
    za(T);
    T.prototype.o = function() {
        return this.a
    };
    T.prototype.getState = T.prototype.o;
    T.prototype.j = function() {
        return "1.0"
    };
    T.prototype.getVersion = T.prototype.j;
    T.prototype.open = function() {
        this.b.exit("MRAID default exit")
    };
    T.prototype.open = T.prototype.open;
    T.prototype.close = function() {
        "expanded" == this.a ? (this.b.Ma(), this.a = "default", this.dispatchEvent("stateChange")) : "default" == this.a && (this.a = "hidden", this.b.close(), this.dispatchEvent("stateChange"))
    };
    T.prototype.close = T.prototype.close;
    T.prototype.l = function() {
        return this.b.isVisible()
    };
    T.prototype.isViewable = T.prototype.l;
    T.prototype.expand = function() {
        "default" == this.a && (this.b.mb(), this.a = "expanded", this.dispatchEvent("stateChange"))
    };
    T.prototype.expand = T.prototype.expand;
    T.prototype.f = function() {
        this.a = "default";
        Pf(this.b, "collapseStart", this.g, !1, this);
        this.dispatchEvent("ready")
    };
    T.prototype.g = function() {
        "expanded" == this.a && (this.a = "default", this.dispatchEvent("stateChange"))
    };
    if (!window.mraid) {
        var nk = T.na();
        n("mraid", nk, void 0)
    };
    n("studio.sdk.hint.ExpansionMode", {
        NORMAL: "normal",
        LIGHTBOX: "lightbox"
    }, void 0);
    n("studio.sdk.hint.ExpansionTrigger", {
        ON_CLICK: "onClick",
        ON_HOVER: "onHover"
    }, void 0);
    n("studio.sdk.hint.Hint", {
        EXPANSION_MODE: "expansionMode",
        EXPANSION_TRIGGER: "expansionTrigger"
    }, void 0);
    var ok, pk, qk, rk, sk, tk, uk = function() {
            return h.navigator ? h.navigator.userAgent : ""
        },
        vk = function(a) {
            return Eb(uk(), a)
        },
        wk = vk("(iPad") || vk("(Macintosh") || vk("(iPod") || vk("(iPhone"),
        xk = vk("Android"),
        yk = vk("MSIE") || vk("IEMobile") || vk("Windows Phone"),
        zk = function() {
            void 0 !== rk || (rk = vk("afma-sdk-a") ? !0 : !1);
            return rk
        },
        Ak = function() {
            if (void 0 === sk) {
                a: {
                    if (void 0 === qk) {
                        if (wk && !vk("Safari")) {
                            var a = qk = !0;
                            break a
                        }
                        qk = !1
                    }
                    a = qk
                }
                sk = a || zk()
            }
            return sk
        };
    var Bk = function(a) {
            return "Config type " + (a + " does not exist")
        },
        Ck = function(a) {
            return "Unable to parse a type for value with JavaScript type " + (Aa(a) + (': "' + (a + '"')))
        },
        Dk = function(a, b) {
            return "Cannot handle description for property " + (b + (" on type " + (a + ".")))
        },
        Ek = function(a, b) {
            return "Array property " + (b + (" on type " + (a + " must have at least one element.")))
        },
        Fk = function(a, b) {
            return "Invalid type for value of property " + (b + (" on type " + (a + ".")))
        },
        Gk = function(a, b) {
            return "No value specified for non-optional property " +
                (b + (" on type " + (a + ".")))
        },
        Hk = function(a, b) {
            return "Property " + (b + (" does not exist on type " + (a + ".")))
        },
        Ik = function(a, b) {
            return "Property " + (b + (" is not an array on type " + (a + ".")))
        },
        Jk = function(a, b, c, d) {
            return "Property " + (b + (" on type " + (a + (" has length " + (c + (", but invalid index " + (d + " was requested.")))))))
        },
        Kk = function(a, b) {
            return "Unknown event with type " + (a + (" and name " + b))
        },
        Lk = function(a) {
            return "The optional property " + (a + " must be a reference")
        };
    var Mk = function() {};
    n("studio.utils.EnablerAccessor", Mk, void 0);
    var Nk = function(a) {
        var b = R();
        b.isInitialized() ? a(b) : b.h.add("init", Ja(a, b), !0, void 0, void 0)
    };
    Mk.getInitializedEnablerByCallback = Nk;
    var Ok = function() {
        return new Be(function(a) {
            var b = R();
            b.isInitialized() ? a(b) : b.h.add("init", Ja(a, b), !0, void 0, void 0)
        })
    };
    Mk.getInitializedEnabler = Ok;
    Mk.loadModuleWhenReady = function(a, b) {
        Nk(function(c) {
            c.Wa(a, b)
        })
    };
    var Pk = function() {};
    za(Pk);
    Pk.prototype.a = 0;
    var U = function(a) {
        K.call(this);
        this.ga = a || td();
        this.J = null;
        this.pa = !1;
        this.a = null;
        this.o = void 0;
        this.l = this.b = this.j = null
    };
    w(U, K);
    U.prototype.ua = Pk.na();
    var Qk = function(a) {
        return a.J || (a.J = ":" + (a.ua.a++).toString(36))
    };
    U.prototype.getElement = function() {
        return this.a
    };
    var Rk = function(a) {
            a.o || (a.o = new L(a));
            return y(a.o)
        },
        Sk = function(a, b) {
            if (a == b) throw Error("Unable to set parent component");
            var c;
            if (c = b && a.j && a.J) {
                c = a.j;
                var d = a.J;
                c = c.l && d ? Tb(c.l, d) || null : null
            }
            if (c && a.j != b) throw Error("Unable to set parent component");
            a.j = b;
            U.v.Kb.call(a, b)
        };
    U.prototype.Kb = function(a) {
        if (this.j && this.j != a) throw Error("Method not supported");
        U.v.Kb.call(this, a)
    };
    U.prototype.ba = function() {
        this.a = Hd(this.ga, "DIV")
    };
    var Tk = function(a, b, c) {
        if (a.pa) throw Error("Component already rendered");
        a.a || a.ba();
        b ? b.insertBefore(a.a, c || null) : a.ga.a.body.appendChild(a.a);
        a.j && !a.j.pa || a.Z()
    };
    U.prototype.Z = function() {
        this.pa = !0;
        Uk(this, function(a) {
            !a.pa && a.getElement() && a.Z()
        })
    };
    var Vk = function(a) {
        Uk(a, function(b) {
            b.pa && Vk(b)
        });
        a.o && hh(a.o);
        a.pa = !1
    };
    U.prototype.s = function() {
        this.pa && Vk(this);
        this.o && (this.o.dispose(), delete this.o);
        Uk(this, function(a) {
            a.dispose()
        });
        this.a && Ed(this.a);
        this.j = this.a = this.l = this.b = null;
        U.v.s.call(this)
    };
    var Wk = function(a, b) {
        var c = a.b ? a.b.length : 0;
        y(!!b, "Provided element must not be null.");
        if (b.pa) throw Error("Component already rendered");
        if (0 > c || c > (a.b ? a.b.length : 0)) throw Error("Child component index out of bounds");
        a.l && a.b || (a.l = {}, a.b = []);
        if (b.j == a) {
            var d = Qk(b);
            a.l[d] = b;
            lb(a.b, b)
        } else {
            d = a.l;
            var e = Qk(b);
            if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
            d[e] = b
        }
        Sk(b, a);
        qb(a.b, c, 0, b);
        b.pa && a.pa && b.j == a ? (a = a.oa(), c = a.childNodes[c] || null, c != b.getElement() && a.insertBefore(b.getElement(),
            c)) : (a.a || a.ba(), c = a.b ? a.b[c + 1] || null : null, Tk(b, a.oa(), c ? c.a : null))
    };
    U.prototype.oa = function() {
        return this.a
    };
    var Uk = function(a, b) {
        a.b && z(a.b, b, void 0)
    };
    U.prototype.removeChild = function(a, b) {
        if (a) {
            var c = "string" === typeof a ? a : Qk(a);
            a = this.l && c ? Tb(this.l, c) || null : null;
            if (c && a) {
                var d = this.l;
                c in d && delete d[c];
                lb(this.b, a);
                b && (Vk(a), a.a && Ed(a.a));
                Sk(a, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var Xk = function(a) {
        for (var b = []; a.b && 0 != a.b.length;) b.push(a.removeChild(a.b ? a.b[0] || null : null, !0))
    };
})();