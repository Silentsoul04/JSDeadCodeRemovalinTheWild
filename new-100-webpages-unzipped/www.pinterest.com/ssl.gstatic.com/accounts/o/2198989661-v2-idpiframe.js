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
    p = function(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    },
    ba = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    },
    ca;
if ("function" == typeof Object.setPrototypeOf) ca = Object.setPrototypeOf;
else {
    var da;
    a: {
        var ea = {
                a: !0
            },
            fa = {};
        try {
            fa.__proto__ = ea;
            da = fa.a;
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
var ha = ca,
    ia = function(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (ha) ha(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.kb = b.prototype
    },
    ja = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    },
    q = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global :
    this,
    ka = function(a, b) {
        if (b) {
            var c = q;
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
    },
    la = function() {
        la = function() {};
        q.Symbol || (q.Symbol = ma)
    },
    na = function(a, b) {
        this.Vb = a;
        ja(this, "description", {
            configurable: !0,
            writable: !0,
            value: b
        })
    };
na.prototype.toString = function() {
    return this.Vb
};
var ma = function() {
        function a(c) {
            if (this instanceof a) throw new TypeError("Symbol is not a constructor");
            return new na("jscomp_symbol_" + (c || "") + "_" + b++, c)
        }
        var b = 0;
        return a
    }(),
    pa = function() {
        la();
        var a = q.Symbol.iterator;
        a || (a = q.Symbol.iterator = q.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ja(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return oa(aa(this))
            }
        });
        pa = function() {}
    },
    oa = function(a) {
        pa();
        a = {
            next: a
        };
        a[q.Symbol.iterator] = function() {
            return this
        };
        return a
    },
    t = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
ka("WeakMap", function(a) {
    function b() {}

    function c(k) {
        var l = typeof k;
        return "object" === l && null !== k || "function" === l
    }

    function d(k) {
        if (!t(k, g)) {
            var l = new b;
            ja(k, g, {
                value: l
            })
        }
    }

    function e(k) {
        var l = Object[k];
        l && (Object[k] = function(n) {
            if (n instanceof b) return n;
            d(n);
            return l(n)
        })
    }
    if (function() {
            if (!a || !Object.seal) return !1;
            try {
                var k = Object.seal({}),
                    l = Object.seal({}),
                    n = new a([
                        [k, 2],
                        [l, 3]
                    ]);
                if (2 != n.get(k) || 3 != n.get(l)) return !1;
                n["delete"](k);
                n.set(l, 4);
                return !n.has(k) && 4 == n.get(l)
            } catch (r) {
                return !1
            }
        }()) return a;
    var g = "$jscomp_hidden_" + Math.random();
    e("freeze");
    e("preventExtensions");
    e("seal");
    var f = 0,
        h = function(k) {
            this.na = (f += Math.random() + 1).toString();
            if (k) {
                k = p(k);
                for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
            }
        };
    h.prototype.set = function(k, l) {
        if (!c(k)) throw Error("Invalid WeakMap key");
        d(k);
        if (!t(k, g)) throw Error("WeakMap key fail: " + k);
        k[g][this.na] = l;
        return this
    };
    h.prototype.get = function(k) {
        return c(k) && t(k, g) ? k[g][this.na] : void 0
    };
    h.prototype.has = function(k) {
        return c(k) && t(k, g) && t(k[g],
            this.na)
    };
    h.prototype["delete"] = function(k) {
        return c(k) && t(k, g) && t(k[g], this.na) ? delete k[g][this.na] : !1
    };
    return h
});
ka("Map", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var h = Object.seal({
                        x: 4
                    }),
                    k = new a(p([
                        [h, "s"]
                    ]));
                if ("s" != k.get(h) || 1 != k.size || k.get({
                        x: 4
                    }) || k.set({
                        x: 4
                    }, "t") != k || 2 != k.size) return !1;
                var l = k.entries(),
                    n = l.next();
                if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                n = l.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }()) return a;
    pa();
    var b = new WeakMap,
        c = function(h) {
            this.ka = {};
            this.R =
                g();
            this.size = 0;
            if (h) {
                h = p(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        };
    c.prototype.set = function(h, k) {
        h = 0 === h ? 0 : h;
        var l = d(this, h);
        l.list || (l.list = this.ka[l.id] = []);
        l.w ? l.w.value = k : (l.w = {
            next: this.R,
            S: this.R.S,
            head: this.R,
            key: h,
            value: k
        }, l.list.push(l.w), this.R.S.next = l.w, this.R.S = l.w, this.size++);
        return this
    };
    c.prototype["delete"] = function(h) {
        h = d(this, h);
        return h.w && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.ka[h.id], h.w.S.next = h.w.next, h.w.next.S = h.w.S, h.w.head =
            null, this.size--, !0) : !1
    };
    c.prototype.clear = function() {
        this.ka = {};
        this.R = this.R.S = g();
        this.size = 0
    };
    c.prototype.has = function(h) {
        return !!d(this, h).w
    };
    c.prototype.get = function(h) {
        return (h = d(this, h).w) && h.value
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
    c.prototype.forEach = function(h, k) {
        for (var l = this.entries(), n; !(n = l.next()).done;) n =
            n.value, h.call(k, n[1], n[0], this)
    };
    c.prototype[Symbol.iterator] = c.prototype.entries;
    var d = function(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++f, b.set(k, l)) : l = "p_" + k;
            var n = h.ka[l];
            if (n && t(h.ka, l))
                for (h = 0; h < n.length; h++) {
                    var r = n[h];
                    if (k !== k && r.key !== r.key || k === r.key) return {
                        id: l,
                        list: n,
                        index: h,
                        w: r
                    }
                }
            return {
                id: l,
                list: n,
                index: -1,
                w: void 0
            }
        },
        e = function(h, k) {
            var l = h.R;
            return oa(function() {
                if (l) {
                    for (; l.head != h.R;) l = l.S;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        },
        g = function() {
            var h = {};
            return h.S = h.next = h.head = h
        },
        f = 0;
    return c
});
ka("Set", function(a) {
    if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
            try {
                var c = Object.seal({
                        x: 4
                    }),
                    d = new a(p([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                        x: 4
                    }) != d || 2 != d.size) return !1;
                var e = d.entries(),
                    g = e.next();
                if (g.done || g.value[0] != c || g.value[1] != c) return !1;
                g = e.next();
                return g.done || g.value[0] == c || 4 != g.value[0].x || g.value[1] != g.value[0] ? !1 : e.next().done
            } catch (f) {
                return !1
            }
        }()) return a;
    pa();
    var b = function(c) {
        this.N = new Map;
        if (c) {
            c = p(c);
            for (var d; !(d = c.next()).done;) this.add(d.value)
        }
        this.size = this.N.size
    };
    b.prototype.add = function(c) {
        c = 0 === c ? 0 : c;
        this.N.set(c, c);
        this.size = this.N.size;
        return this
    };
    b.prototype["delete"] = function(c) {
        c = this.N["delete"](c);
        this.size = this.N.size;
        return c
    };
    b.prototype.clear = function() {
        this.N.clear();
        this.size = 0
    };
    b.prototype.has = function(c) {
        return this.N.has(c)
    };
    b.prototype.entries = function() {
        return this.N.entries()
    };
    b.prototype.values = function() {
        return this.N.values()
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function(c, d) {
        var e = this;
        this.N.forEach(function(g) {
            return c.call(d, g, g, e)
        })
    };
    return b
});
ka("Promise", function(a) {
    function b() {
        this.T = null
    }

    function c(f) {
        return f instanceof e ? f : new e(function(h) {
            h(f)
        })
    }
    if (a) return a;
    b.prototype.wb = function(f) {
        if (null == this.T) {
            this.T = [];
            var h = this;
            this.xb(function() {
                h.rc()
            })
        }
        this.T.push(f)
    };
    var d = q.setTimeout;
    b.prototype.xb = function(f) {
        d(f, 0)
    };
    b.prototype.rc = function() {
        for (; this.T && this.T.length;) {
            var f = this.T;
            this.T = [];
            for (var h = 0; h < f.length; ++h) {
                var k = f[h];
                f[h] = null;
                try {
                    k()
                } catch (l) {
                    this.gc(l)
                }
            }
        }
        this.T = null
    };
    b.prototype.gc = function(f) {
        this.xb(function() {
            throw f;
        })
    };
    var e = function(f) {
        this.ua = 0;
        this.fb = void 0;
        this.ea = [];
        var h = this.Oa();
        try {
            f(h.resolve, h.reject)
        } catch (k) {
            h.reject(k)
        }
    };
    e.prototype.Oa = function() {
        function f(l) {
            return function(n) {
                k || (k = !0, l.call(h, n))
            }
        }
        var h = this,
            k = !1;
        return {
            resolve: f(this.Wc),
            reject: f(this.eb)
        }
    };
    e.prototype.Wc = function(f) {
        if (f === this) this.eb(new TypeError("A Promise cannot resolve to itself"));
        else if (f instanceof e) this.dd(f);
        else {
            a: switch (typeof f) {
                case "object":
                    var h = null != f;
                    break a;
                case "function":
                    h = !0;
                    break a;
                default:
                    h = !1
            }
            h ?
            this.Vc(f) : this.Db(f)
        }
    };
    e.prototype.Vc = function(f) {
        var h = void 0;
        try {
            h = f.then
        } catch (k) {
            this.eb(k);
            return
        }
        "function" == typeof h ? this.ed(h, f) : this.Db(f)
    };
    e.prototype.eb = function(f) {
        this.Tb(2, f)
    };
    e.prototype.Db = function(f) {
        this.Tb(1, f)
    };
    e.prototype.Tb = function(f, h) {
        if (0 != this.ua) throw Error("Cannot settle(" + f + ", " + h + "): Promise already settled in state" + this.ua);
        this.ua = f;
        this.fb = h;
        this.sc()
    };
    e.prototype.sc = function() {
        if (null != this.ea) {
            for (var f = 0; f < this.ea.length; ++f) g.wb(this.ea[f]);
            this.ea = null
        }
    };
    var g =
        new b;
    e.prototype.dd = function(f) {
        var h = this.Oa();
        f.xa(h.resolve, h.reject)
    };
    e.prototype.ed = function(f, h) {
        var k = this.Oa();
        try {
            f.call(h, k.resolve, k.reject)
        } catch (l) {
            k.reject(l)
        }
    };
    e.prototype.then = function(f, h) {
        function k(I, W) {
            return "function" == typeof I ? function(kb) {
                try {
                    l(I(kb))
                } catch (lb) {
                    n(lb)
                }
            } : W
        }
        var l, n, r = new e(function(I, W) {
            l = I;
            n = W
        });
        this.xa(k(f, l), k(h, n));
        return r
    };
    e.prototype["catch"] = function(f) {
        return this.then(void 0, f)
    };
    e.prototype.xa = function(f, h) {
        function k() {
            switch (l.ua) {
                case 1:
                    f(l.fb);
                    break;
                case 2:
                    h(l.fb);
                    break;
                default:
                    throw Error("Unexpected state: " + l.ua);
            }
        }
        var l = this;
        null == this.ea ? g.wb(k) : this.ea.push(k)
    };
    e.resolve = c;
    e.reject = function(f) {
        return new e(function(h, k) {
            k(f)
        })
    };
    e.race = function(f) {
        return new e(function(h, k) {
            for (var l = p(f), n = l.next(); !n.done; n = l.next()) c(n.value).xa(h, k)
        })
    };
    e.all = function(f) {
        var h = p(f),
            k = h.next();
        return k.done ? c([]) : new e(function(l, n) {
            function r(kb) {
                return function(lb) {
                    I[kb] = lb;
                    W--;
                    0 == W && l(I)
                }
            }
            var I = [],
                W = 0;
            do I.push(void 0), W++, c(k.value).xa(r(I.length -
                1), n), k = h.next(); while (!k.done)
        })
    };
    return e
});
var u = this || self,
    qa = function(a) {
        return "string" == typeof a
    },
    ra = function() {},
    v = function(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" !=
                    typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    },
    sa = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    },
    ta = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.kb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
var ua = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, ua);
    else {
        var b = Error().stack;
        b && (this.stack = b)
    }
    a && (this.message = String(a))
};
ta(ua, Error);
ua.prototype.name = "CustomError";
var va = function(a, b) {
    a = a.split("%s");
    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    ua.call(this, c + a[d])
};
ta(va, ua);
va.prototype.name = "AssertionError";
var wa = function(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var g = d
        } else a && (e += ": " + a, g = b);
        throw new va("" + e, g || []);
    },
    w = function(a, b, c) {
        a || wa("", null, b, Array.prototype.slice.call(arguments, 2));
        return a
    },
    xa = function(a, b) {
        throw new va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
    },
    ya = function(a, b, c) {
        "string" !== typeof a && wa("Expected string but got %s: %s.", [v(a), a], b, Array.prototype.slice.call(arguments, 2))
    };
var za = Array.prototype.indexOf ? function(a, b) {
    w(null != a.length);
    return Array.prototype.indexOf.call(a, b, void 0)
} : function(a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for (var c = 0; c < a.length; c++)
        if (c in a && a[c] === b) return c;
    return -1
};
var Aa = function(a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
        var e = a.charCodeAt(d);
        255 < e && (b[c++] = e & 255, e >>= 8);
        b[c++] = e
    }
    return b
};
var Ba = function(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a)) return !0;
    return !1
};
var Ea = function(a, b) {
    this.jb = a === Ca && b || "";
    this.ec = Da
};
Ea.prototype.W = !0;
Ea.prototype.V = function() {
    return this.jb
};
Ea.prototype.toString = function() {
    return "Const{" + this.jb + "}"
};
var Fa = function(a) {
        if (a instanceof Ea && a.constructor === Ea && a.ec === Da) return a.jb;
        xa("expected object of type Const, got '" + a + "'");
        return "type_error:Const"
    },
    Da = {},
    Ca = {};
var Ga = function() {
    this.Za = ""
};
Ga.prototype.W = !0;
Ga.prototype.V = function() {
    return this.Za.toString()
};
Ga.prototype.toString = function() {
    return "SafeScript{" + this.Za + "}"
};
Ga.prototype.X = function(a) {
    this.Za = a;
    return this
};
(new Ga).X("");
var Ha = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    Pa = function(a, b) {
        if (b) a = a.replace(Ia, "&amp;").replace(Ja, "&lt;").replace(Ka, "&gt;").replace(La, "&quot;").replace(Ma, "&#39;").replace(Na, "&#0;");
        else {
            if (!Oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ia, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ja, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ka, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(La, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ma,
                "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Na, "&#0;"))
        }
        return a
    },
    Ia = /&/g,
    Ja = /</g,
    Ka = />/g,
    La = /"/g,
    Ma = /'/g,
    Na = /\x00/g,
    Oa = /[\x00&<>"']/,
    Qa = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
var Ta = function(a, b) {
    this.bb = a === Ra && b || "";
    this.dc = Sa
};
m = Ta.prototype;
m.W = !0;
m.V = function() {
    return this.bb.toString()
};
m.Ib = !0;
m.Sa = function() {
    return 1
};
m.toString = function() {
    return "SafeUrl{" + this.bb + "}"
};
var Ua = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Sa = {},
    Ra = {};
var Va = function() {
    this.ab = ""
};
Va.prototype.W = !0;
Va.prototype.V = function() {
    return this.ab
};
Va.prototype.toString = function() {
    return "SafeStyle{" + this.ab + "}"
};
Va.prototype.X = function(a) {
    this.ab = a;
    return this
};
(new Va).X("");
var Wa = function() {
    this.$a = ""
};
Wa.prototype.W = !0;
Wa.prototype.V = function() {
    return this.$a
};
Wa.prototype.toString = function() {
    return "SafeStyleSheet{" + this.$a + "}"
};
Wa.prototype.X = function(a) {
    this.$a = a;
    return this
};
(new Wa).X("");
var x;
a: {
    var Xa = u.navigator;
    if (Xa) {
        var Ya = Xa.userAgent;
        if (Ya) {
            x = Ya;
            break a
        }
    }
    x = ""
};
var y = function() {
    this.Ba = "";
    this.cc = Za;
    this.Cb = null
};
m = y.prototype;
m.Ib = !0;
m.Sa = function() {
    return this.Cb
};
m.W = !0;
m.V = function() {
    return this.Ba.toString()
};
m.toString = function() {
    return "SafeHtml{" + this.Ba + "}"
};
var $a = function(a) {
        if (a instanceof y && a.constructor === y && a.cc === Za) return a.Ba;
        xa("expected object of type SafeHtml, got '" + a + "' of type " + v(a));
        return "type_error:SafeHtml"
    },
    bb = function(a) {
        if (a instanceof y) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.Ib && (c = a.Sa());
        return ab(Pa(b && a.W ? a.V() : String(a)), c)
    },
    Za = {},
    ab = function(a, b) {
        return (new y).X(a, b)
    };
y.prototype.X = function(a, b) {
    this.Ba = a;
    this.Cb = b;
    return this
};
ab("<!DOCTYPE html>", 0);
var cb = ab("", 0);
ab("<br>", 0);
var db = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        if ("undefined" === typeof document) return !1;
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        if (!a.firstChild) return !1;
        b = a.firstChild.firstChild;
        a.innerHTML = $a(cb);
        return !b.parentElement
    }),
    eb = function(a) {
        var b = document.location;
        a: {
            try {
                var c = b && b.ownerDocument,
                    d = c && (c.defaultView || c.parentWindow);
                d = d || u;
                if (d.Element && d.Location) {
                    var e =
                        d;
                    break a
                }
            } catch (f) {}
            e = null
        }
        if (e && (!b || !(b instanceof e.Location) && b instanceof e.Element)) {
            if (sa(b)) try {
                var g = b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b)
            } catch (f) {
                g = "<object could not be stringified>"
            } else g = void 0 === b ? "undefined" : null === b ? "null" : typeof b;
            xa("Argument is not a Location (or a non-Element mock); got: %s", g)
        }
        a instanceof Ta || a instanceof Ta || (a = "object" == typeof a && a.W ? a.V() : String(a), w(Ua.test(a), "%s does not match the safe URL pattern", a) || (a = "about:invalid#zClosurez"),
            a = new Ta(Ra, a));
        a instanceof Ta && a.constructor === Ta && a.dc === Sa ? a = a.bb : (xa("expected object of type SafeUrl, got '" + a + "' of type " + v(a)), a = "type_error:SafeUrl");
        b.href = a
    };
var fb = function(a) {
    fb[" "](a);
    return a
};
fb[" "] = ra;
var gb = -1 != x.indexOf("Opera"),
    hb = -1 != x.indexOf("Trident") || -1 != x.indexOf("MSIE"),
    ib = -1 != x.indexOf("Edge"),
    jb = -1 != x.indexOf("Gecko") && !(-1 != x.toLowerCase().indexOf("webkit") && -1 == x.indexOf("Edge")) && !(-1 != x.indexOf("Trident") || -1 != x.indexOf("MSIE")) && -1 == x.indexOf("Edge"),
    mb = -1 != x.toLowerCase().indexOf("webkit") && -1 == x.indexOf("Edge"),
    nb = function() {
        var a = u.document;
        return a ? a.documentMode : void 0
    },
    ob;
a: {
    var pb = "",
        qb = function() {
            var a = x;
            if (jb) return /rv:([^\);]+)(\)|;)/.exec(a);
            if (ib) return /Edge\/([\d\.]+)/.exec(a);
            if (hb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (mb) return /WebKit\/(\S+)/.exec(a);
            if (gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();qb && (pb = qb ? qb[1] : "");
    if (hb) {
        var rb = nb();
        if (null != rb && rb > parseFloat(pb)) {
            ob = String(rb);
            break a
        }
    }
    ob = pb
}
var sb = ob,
    tb = {},
    ub;
ub = u.document && hb ? nb() : void 0;
var vb = {},
    wb = null;
var xb = function() {
    this.u = -1
};
var yb = function(a, b, c) {
    this.u = -1;
    this.G = a;
    this.u = c || a.u || 16;
    this.Kb = Array(this.u);
    this.Ya = Array(this.u);
    a = b;
    a.length > this.u && (this.G.update(a), a = this.G.digest(), this.G.reset());
    for (c = 0; c < this.u; c++) b = c < a.length ? a[c] : 0, this.Kb[c] = b ^ 92, this.Ya[c] = b ^ 54;
    this.G.update(this.Ya)
};
ta(yb, xb);
yb.prototype.reset = function() {
    this.G.reset();
    this.G.update(this.Ya)
};
yb.prototype.update = function(a, b) {
    this.G.update(a, b)
};
yb.prototype.digest = function() {
    var a = this.G.digest();
    this.G.reset();
    this.G.update(this.Kb);
    this.G.update(a);
    return this.G.digest()
};
var zb = function() {
    this.u = 64;
    this.o = Array(4);
    this.ic = Array(this.u);
    this.Fa = this.ja = 0;
    this.reset()
};
ta(zb, xb);
zb.prototype.reset = function() {
    this.o[0] = 1732584193;
    this.o[1] = 4023233417;
    this.o[2] = 2562383102;
    this.o[3] = 271733878;
    this.Fa = this.ja = 0
};
var Ab = function(a, b, c) {
    c || (c = 0);
    var d = Array(16);
    if ("string" === typeof b)
        for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
    else
        for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
    b = a.o[0];
    c = a.o[1];
    e = a.o[2];
    var g = a.o[3];
    var f = b + (g ^ c & (e ^ g)) + d[0] + 3614090360 & 4294967295;
    b = c + (f << 7 & 4294967295 | f >>> 25);
    f = g + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    g = b + (f << 12 & 4294967295 | f >>> 20);
    f = e + (c ^ g & (b ^ c)) + d[2] + 606105819 & 4294967295;
    e = g + (f << 17 & 4294967295 | f >>>
        15);
    f = c + (b ^ e & (g ^ b)) + d[3] + 3250441966 & 4294967295;
    c = e + (f << 22 & 4294967295 | f >>> 10);
    f = b + (g ^ c & (e ^ g)) + d[4] + 4118548399 & 4294967295;
    b = c + (f << 7 & 4294967295 | f >>> 25);
    f = g + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    g = b + (f << 12 & 4294967295 | f >>> 20);
    f = e + (c ^ g & (b ^ c)) + d[6] + 2821735955 & 4294967295;
    e = g + (f << 17 & 4294967295 | f >>> 15);
    f = c + (b ^ e & (g ^ b)) + d[7] + 4249261313 & 4294967295;
    c = e + (f << 22 & 4294967295 | f >>> 10);
    f = b + (g ^ c & (e ^ g)) + d[8] + 1770035416 & 4294967295;
    b = c + (f << 7 & 4294967295 | f >>> 25);
    f = g + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    g = b + (f << 12 & 4294967295 |
        f >>> 20);
    f = e + (c ^ g & (b ^ c)) + d[10] + 4294925233 & 4294967295;
    e = g + (f << 17 & 4294967295 | f >>> 15);
    f = c + (b ^ e & (g ^ b)) + d[11] + 2304563134 & 4294967295;
    c = e + (f << 22 & 4294967295 | f >>> 10);
    f = b + (g ^ c & (e ^ g)) + d[12] + 1804603682 & 4294967295;
    b = c + (f << 7 & 4294967295 | f >>> 25);
    f = g + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    g = b + (f << 12 & 4294967295 | f >>> 20);
    f = e + (c ^ g & (b ^ c)) + d[14] + 2792965006 & 4294967295;
    e = g + (f << 17 & 4294967295 | f >>> 15);
    f = c + (b ^ e & (g ^ b)) + d[15] + 1236535329 & 4294967295;
    c = e + (f << 22 & 4294967295 | f >>> 10);
    f = b + (e ^ g & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    b = c + (f <<
        5 & 4294967295 | f >>> 27);
    f = g + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
    g = b + (f << 9 & 4294967295 | f >>> 23);
    f = e + (b ^ c & (g ^ b)) + d[11] + 643717713 & 4294967295;
    e = g + (f << 14 & 4294967295 | f >>> 18);
    f = c + (g ^ b & (e ^ g)) + d[0] + 3921069994 & 4294967295;
    c = e + (f << 20 & 4294967295 | f >>> 12);
    f = b + (e ^ g & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    b = c + (f << 5 & 4294967295 | f >>> 27);
    f = g + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
    g = b + (f << 9 & 4294967295 | f >>> 23);
    f = e + (b ^ c & (g ^ b)) + d[15] + 3634488961 & 4294967295;
    e = g + (f << 14 & 4294967295 | f >>> 18);
    f = c + (g ^ b & (e ^ g)) + d[4] + 3889429448 & 4294967295;
    c =
        e + (f << 20 & 4294967295 | f >>> 12);
    f = b + (e ^ g & (c ^ e)) + d[9] + 568446438 & 4294967295;
    b = c + (f << 5 & 4294967295 | f >>> 27);
    f = g + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
    g = b + (f << 9 & 4294967295 | f >>> 23);
    f = e + (b ^ c & (g ^ b)) + d[3] + 4107603335 & 4294967295;
    e = g + (f << 14 & 4294967295 | f >>> 18);
    f = c + (g ^ b & (e ^ g)) + d[8] + 1163531501 & 4294967295;
    c = e + (f << 20 & 4294967295 | f >>> 12);
    f = b + (e ^ g & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    b = c + (f << 5 & 4294967295 | f >>> 27);
    f = g + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
    g = b + (f << 9 & 4294967295 | f >>> 23);
    f = e + (b ^ c & (g ^ b)) + d[7] + 1735328473 & 4294967295;
    e = g + (f << 14 & 4294967295 | f >>> 18);
    f = c + (g ^ b & (e ^ g)) + d[12] + 2368359562 & 4294967295;
    c = e + (f << 20 & 4294967295 | f >>> 12);
    f = b + (c ^ e ^ g) + d[5] + 4294588738 & 4294967295;
    b = c + (f << 4 & 4294967295 | f >>> 28);
    f = g + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    g = b + (f << 11 & 4294967295 | f >>> 21);
    f = e + (g ^ b ^ c) + d[11] + 1839030562 & 4294967295;
    e = g + (f << 16 & 4294967295 | f >>> 16);
    f = c + (e ^ g ^ b) + d[14] + 4259657740 & 4294967295;
    c = e + (f << 23 & 4294967295 | f >>> 9);
    f = b + (c ^ e ^ g) + d[1] + 2763975236 & 4294967295;
    b = c + (f << 4 & 4294967295 | f >>> 28);
    f = g + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    g = b + (f << 11 & 4294967295 |
        f >>> 21);
    f = e + (g ^ b ^ c) + d[7] + 4139469664 & 4294967295;
    e = g + (f << 16 & 4294967295 | f >>> 16);
    f = c + (e ^ g ^ b) + d[10] + 3200236656 & 4294967295;
    c = e + (f << 23 & 4294967295 | f >>> 9);
    f = b + (c ^ e ^ g) + d[13] + 681279174 & 4294967295;
    b = c + (f << 4 & 4294967295 | f >>> 28);
    f = g + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    g = b + (f << 11 & 4294967295 | f >>> 21);
    f = e + (g ^ b ^ c) + d[3] + 3572445317 & 4294967295;
    e = g + (f << 16 & 4294967295 | f >>> 16);
    f = c + (e ^ g ^ b) + d[6] + 76029189 & 4294967295;
    c = e + (f << 23 & 4294967295 | f >>> 9);
    f = b + (c ^ e ^ g) + d[9] + 3654602809 & 4294967295;
    b = c + (f << 4 & 4294967295 | f >>> 28);
    f = g + (b ^ c ^ e) + d[12] +
        3873151461 & 4294967295;
    g = b + (f << 11 & 4294967295 | f >>> 21);
    f = e + (g ^ b ^ c) + d[15] + 530742520 & 4294967295;
    e = g + (f << 16 & 4294967295 | f >>> 16);
    f = c + (e ^ g ^ b) + d[2] + 3299628645 & 4294967295;
    c = e + (f << 23 & 4294967295 | f >>> 9);
    f = b + (e ^ (c | ~g)) + d[0] + 4096336452 & 4294967295;
    b = c + (f << 6 & 4294967295 | f >>> 26);
    f = g + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
    g = b + (f << 10 & 4294967295 | f >>> 22);
    f = e + (b ^ (g | ~c)) + d[14] + 2878612391 & 4294967295;
    e = g + (f << 15 & 4294967295 | f >>> 17);
    f = c + (g ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
    c = e + (f << 21 & 4294967295 | f >>> 11);
    f = b + (e ^ (c | ~g)) + d[12] + 1700485571 &
        4294967295;
    b = c + (f << 6 & 4294967295 | f >>> 26);
    f = g + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
    g = b + (f << 10 & 4294967295 | f >>> 22);
    f = e + (b ^ (g | ~c)) + d[10] + 4293915773 & 4294967295;
    e = g + (f << 15 & 4294967295 | f >>> 17);
    f = c + (g ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
    c = e + (f << 21 & 4294967295 | f >>> 11);
    f = b + (e ^ (c | ~g)) + d[8] + 1873313359 & 4294967295;
    b = c + (f << 6 & 4294967295 | f >>> 26);
    f = g + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
    g = b + (f << 10 & 4294967295 | f >>> 22);
    f = e + (b ^ (g | ~c)) + d[6] + 2734768916 & 4294967295;
    e = g + (f << 15 & 4294967295 | f >>> 17);
    f = c + (g ^ (e | ~b)) + d[13] + 1309151649 &
        4294967295;
    c = e + (f << 21 & 4294967295 | f >>> 11);
    f = b + (e ^ (c | ~g)) + d[4] + 4149444226 & 4294967295;
    b = c + (f << 6 & 4294967295 | f >>> 26);
    f = g + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
    g = b + (f << 10 & 4294967295 | f >>> 22);
    f = e + (b ^ (g | ~c)) + d[2] + 718787259 & 4294967295;
    e = g + (f << 15 & 4294967295 | f >>> 17);
    f = c + (g ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
    a.o[0] = a.o[0] + b & 4294967295;
    a.o[1] = a.o[1] + (e + (f << 21 & 4294967295 | f >>> 11)) & 4294967295;
    a.o[2] = a.o[2] + e & 4294967295;
    a.o[3] = a.o[3] + g & 4294967295
};
zb.prototype.update = function(a, b) {
    void 0 === b && (b = a.length);
    for (var c = b - this.u, d = this.ic, e = this.ja, g = 0; g < b;) {
        if (0 == e)
            for (; g <= c;) Ab(this, a, g), g += this.u;
        if ("string" === typeof a)
            for (; g < b;) {
                if (d[e++] = a.charCodeAt(g++), e == this.u) {
                    Ab(this, d);
                    e = 0;
                    break
                }
            } else
                for (; g < b;)
                    if (d[e++] = a[g++], e == this.u) {
                        Ab(this, d);
                        e = 0;
                        break
                    }
    }
    this.ja = e;
    this.Fa += b
};
zb.prototype.digest = function() {
    var a = Array((56 > this.ja ? this.u : 2 * this.u) - this.ja);
    a[0] = 128;
    for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
    var c = 8 * this.Fa;
    for (b = a.length - 8; b < a.length; ++b) a[b] = c & 255, c /= 256;
    this.update(a);
    a = Array(16);
    for (b = c = 0; 4 > b; ++b)
        for (var d = 0; 32 > d; d += 8) a[c++] = this.o[b] >>> d & 255;
    return a
};
Object.freeze && Object.freeze([]);
var Bb = Object.freeze || function(a) {
    return a
};
var Cb = function(a) {
    var b = document;
    return "string" === typeof a ? b.getElementById(a) : a
};
var Db = function(a, b, c) {
        for (; 0 <= (b = a.indexOf("hl", b)) && b < c;) {
            var d = a.charCodeAt(b - 1);
            if (38 == d || 63 == d)
                if (d = a.charCodeAt(b + 2), !d || 61 == d || 38 == d || 35 == d) return b;
            b += 3
        }
        return -1
    },
    Eb = /#|$/,
    Fb = /[?&]($|#)/,
    Gb = function(a) {
        var b = document.location.href;
        for (var c = b.search(Eb), d = 0, e, g = []; 0 <= (e = Db(b, d, c));) g.push(b.substring(d, e)), d = Math.min(b.indexOf("&", e) + 1 || c, c);
        g.push(b.substr(d));
        b = g.join("").replace(Fb, "$1");
        (a = "hl" + (null != a ? "=" + encodeURIComponent(String(a)) : "")) ? (c = b.indexOf("#"), 0 > c && (c = b.length), d = b.indexOf("?"),
            0 > d || d > c ? (d = c, e = "") : e = b.substring(d + 1, c), b = [b.substr(0, d), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
        return a
    };
var Hb = {
        pd: !0
    },
    z = function() {
        throw Error("Do not instantiate directly");
    };
z.prototype.Na = null;
z.prototype.toString = function() {
    return this.content
};
var Ib = function() {
    z.call(this)
};
ta(Ib, z);
Ib.prototype.aa = Hb;
var Kb = function(a, b, c, d) {
        w(b, "Soy template may not be null.");
        c = b(c || Jb, void 0, d);
        if (sa(c))
            if (c instanceof z) {
                if (c.aa !== Hb) throw Error("Sanitized content was not of kind HTML.");
                b = c.toString();
                c = c.Na;
                d = new Ea(Ca, "Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value.");
                ya(Fa(d), "must provide justification");
                w(!/^[\s\xa0]*$/.test(Fa(d)), "must provide non-empty justification");
                b = ab(b, c || null)
            } else xa("Soy template output is unsafe for use as HTML: " + c), b = bb("zSoyz");
        else b = bb(String(c));
        a = w(a);
        if (db())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = $a(b)
    },
    Jb = {};
/*

 Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

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
(function() {}).prototype = Object.create(null);
var Lb = function(a) {
    var b = null != a && a.aa === Hb;
    b && w(a.constructor === Ib);
    return b
};
var Mb = function(a) {
        if (null != a) switch (a.Na) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    },
    Ob = function(a) {
        return Lb(a) ? a : a instanceof y ? A($a(a).toString(), a.Sa()) : A(Nb(String(a)), Mb(a))
    },
    A = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Na = d);
            return c
        }
    }(Ib),
    B = function(a) {
        return Lb(a) ? String(String(a.content).replace(Pb, "").replace(Qb, "&lt;")).replace(Rb, Sb) : Nb(a)
    },
    Tb = function(a, b) {
        a || (a = b instanceof Function ? b.displayName ||
            b.name || "unknown type name" : b instanceof Object ? b.constructor.displayName || b.constructor.name || Object.prototype.toString.call(b) : null === b ? "null" : typeof b, xa("expected param origin of type string, but got " + a + "."));
        return b
    },
    Nb = function(a) {
        a = String(a);
        return a = Pa(a, void 0)
    },
    Ub = {
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
    },
    Sb = function(a) {
        return Ub[a]
    },
    Rb = /[\x00\x22\x27\x3c\x3e]/g,
    Pb = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Qb = /</g;
var Vb = function() {
        var a = '<div class="' + B("dialog-header") + '"><div class="' + B("google-icon") + '">';
        var b = A('<svg class="' + B("icon") + '" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/><path fill="none" d="M2 2h44v44H2z"/></svg>');
        return A(a + b + "</div><p>Continue with Google</p></div>")
    },
    Wb = function(a) {
        var b = A,
            c = '<div class="' + B("dialog-footer") + '">',
            d = a.Pa;
        a = a.languages;
        var e = '<div id="language_selector" class="' + B("language-selector") + '"><div class="' + B("language-selected") + '">';
        if ((d instanceof z ? d.content : d) && (a instanceof z ? a.content : a)) {
            for (var g = "", f = a.length, h = 0; h < f; h++) {
                var k = a[h];
                var l = k.code;
                var n = d;
                l = "function" == v(l) && "function" == v(n) ? l.aa !== n.aa ? !1 : l.toString() === n.toString() : l instanceof z && n instanceof z ? l.aa !=
                    n.aa ? !1 : l.toString() == n.toString() : l == n;
                g += l ? "" + k.displayName : ""
            }
            e += "<div>" + Ob(g) + "</div>"
        }
        e += '<div class="' + B("chevron") + '"></div></div><div id="language_list" class="' + B("language-list") + '">';
        if (a)
            for (d = a.length, f = 0; f < d; f++) h = a[f], e += '<div class="' + B("language-option") + '" data-languagecode="' + B(h.code) + '">' + Ob(h.displayName) + "</div>";
        a = A(e + "</div></div>");
        c += a;
        a = '<ul class="' + B("footer-menu") + '"><li class="' + B("menu-item") + '"><a class="' + B("menu-content") + '" href="#">';
        a = a + 'Help</a></li><li class="' +
            (B("menu-item") + '"><a class="' + B("menu-content") + '" href="#">');
        a = a + 'Privacy</a></li><li class="' + (B("menu-item") + '"><a class="' + B("menu-content") + '" href="#">');
        a = A(a + "Terms</a></li></ul>");
        return b(c + a + "</div>")
    };
var Xb = function(a, b, c) {
    b = c || b;
    var d = Tb(qa(a.origin), a.origin);
    a = A;
    c = '<div class="' + B("dialog-container dialog-modal") + '"><div class="' + B("dialog inflated-dialog") + '"><div class="' + B("dialog-body") + '">' + Vb() + '<div class="' + B("dialog-content") + '">';
    var e = '<h1 class="' + B("title") + '">';
    e = A(e + "You'll need to give Safari permission to continue</h1>");
    c += e;
    e = Tb(qa(d), d);
    d = '<div class="' + B("consent-form") + '"><p class="' + B("consent-text") + '">';
    e = "In order to continue with your Google Account, Safari will ask if it's ok for Google to use cookies on " +
        (Ob(e) + ".");
    d = A(d + e + "</p></div>");
    c += d;
    d = '<div class="' + B("button-group") + '"><div class="' + B("button button-cancel") + '" id="confirm_no">';
    d = d + 'Cancel</div><div class="' + (B("button button-confirm") + '" id="confirm_yes">');
    d = A(d + "Continue</div></div>");
    return a(c + d + "</div></div>" + Wb(b) + "</div></div>")
};
Xb.hd = "oauth2.gsi.soy.itp.newgrant.dialog";
var Yb = function(a, b, c) {
    b = c || b;
    var d = Tb(qa(a.origin), a.origin);
    a = A;
    c = '<div class="' + B("dialog-container dialog-modal") + '"><div class="' + B("dialog") + '"><div class="' + B("dialog-body") + '">' + Vb() + '<div class="' + B("dialog-content") + '">';
    var e = Tb(qa(d), d);
    d = '<h1 class="' + B("title") + '">';
    e = "Do you still want Safari to let Google use cookies on " + (Ob(e) + "?");
    d = A(d + e + "</h1>");
    c += d;
    d = '<div class="' + B("button-group button-group-high") + '"><div class="' + B("button button-cancel") + '" id="confirm_no">';
    d = d + 'No thanks</div><div class="' +
        (B("button button-confirm") + '" id="confirm_yes">');
    d = A(d + "Yes</div></div>");
    return a(c + d + "</div></div>" + Wb(b) + "</div></div>")
};
Yb.hd = "oauth2.gsi.soy.itp.regrant.dialog";
var Zb;
(Zb = !hb) || (Zb = 9 <= Number(ub));
var $b = Zb,
    ac;
if (ac = hb) {
    var bc;
    if (Object.prototype.hasOwnProperty.call(tb, "9")) bc = tb["9"];
    else {
        for (var cc = 0, dc = Ha(String(sb)).split("."), ec = Ha("9").split("."), fc = Math.max(dc.length, ec.length), gc = 0; 0 == cc && gc < fc; gc++) {
            var hc = dc[gc] || "",
                ic = ec[gc] || "";
            do {
                var jc = /(\d*)(\D*)(.*)/.exec(hc) || ["", "", "", ""],
                    kc = /(\d*)(\D*)(.*)/.exec(ic) || ["", "", "", ""];
                if (0 == jc[0].length && 0 == kc[0].length) break;
                cc = Qa(0 == jc[1].length ? 0 : parseInt(jc[1], 10), 0 == kc[1].length ? 0 : parseInt(kc[1], 10)) || Qa(0 == jc[2].length, 0 == kc[2].length) || Qa(jc[2], kc[2]);
                hc = jc[3];
                ic = kc[3]
            } while (0 == cc)
        }
        bc = tb["9"] = 0 <= cc
    }
    ac = !bc
}
var lc = ac,
    mc = function() {
        if (!u.addEventListener || !Object.defineProperty) return !1;
        var a = !1,
            b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
        try {
            u.addEventListener("test", ra, b), u.removeEventListener("test", ra, b)
        } catch (c) {}
        return a
    }();
var nc = function(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.cb = !1
};
nc.prototype.stopPropagation = function() {
    this.cb = !0
};
nc.prototype.preventDefault = function() {
    this.defaultPrevented = !0
};
var oc;
oc = mb ? "webkitTransitionEnd" : gb ? "otransitionend" : "transitionend";
var C = function(a, b) {
    nc.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.key = "";
    this.charCode = this.keyCode = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.ma = null;
    a && this.I(a, b)
};
ta(C, nc);
var pc = Bb({
    2: "touch",
    3: "pen",
    4: "mouse"
});
C.prototype.I = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    if (b = a.relatedTarget) {
        if (jb) {
            a: {
                try {
                    fb(b.nodeName);
                    var e = !0;
                    break a
                } catch (g) {}
                e = !1
            }
            e || (b = null)
        }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
        d.screenY || 0) : (this.offsetX = mb || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = mb || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.key = a.key || "";
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId =
        a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : pc[a.pointerType] || "";
    this.state = a.state;
    this.ma = a;
    a.defaultPrevented && this.preventDefault()
};
C.prototype.stopPropagation = function() {
    C.kb.stopPropagation.call(this);
    this.ma.stopPropagation ? this.ma.stopPropagation() : this.ma.cancelBubble = !0
};
C.prototype.preventDefault = function() {
    C.kb.preventDefault.call(this);
    var a = this.ma;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, lc) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var qc = "closure_listenable_" + (1E6 * Math.random() | 0),
    rc = 0;
var sc = function(a, b, c, d, e) {
        this.listener = a;
        this.Ca = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.i = e;
        this.key = ++rc;
        this.sa = this.Ma = !1
    },
    tc = function(a) {
        a.sa = !0;
        a.listener = null;
        a.Ca = null;
        a.src = null;
        a.i = null
    };
var uc = function(a) {
    this.src = a;
    this.J = {};
    this.Ga = 0
};
uc.prototype.add = function(a, b, c, d, e) {
    var g = a.toString();
    a = this.J[g];
    a || (a = this.J[g] = [], this.Ga++);
    var f = vc(a, b, d, e); - 1 < f ? (b = a[f], c || (b.Ma = !1)) : (b = new sc(b, this.src, g, !!d, e), b.Ma = c, a.push(b));
    return b
};
uc.prototype.remove = function(a, b, c, d) {
    a = a.toString();
    if (!(a in this.J)) return !1;
    var e = this.J[a];
    b = vc(e, b, c, d);
    return -1 < b ? (tc(e[b]), w(null != e.length), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.J[a], this.Ga--), !0) : !1
};
uc.prototype.hasListener = function(a, b) {
    var c = void 0 !== a,
        d = c ? a.toString() : "",
        e = void 0 !== b;
    return Ba(this.J, function(g) {
        for (var f = 0; f < g.length; ++f)
            if (!(c && g[f].type != d || e && g[f].capture != b)) return !0;
        return !1
    })
};
var vc = function(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var g = a[e];
        if (!g.sa && g.listener == b && g.capture == !!c && g.i == d) return e
    }
    return -1
};
var wc = "closure_lm_" + (1E6 * Math.random() | 0),
    xc = {},
    yc = 0,
    Ac = function(a, b, c, d, e) {
        if (d && d.once) return zc(a, b, c, d, e);
        if ("array" == v(b)) {
            for (var g = 0; g < b.length; g++) Ac(a, b[g], c, d, e);
            return null
        }
        c = Bc(c);
        return a && a[qc] ? D(a, b, c, sa(d) ? !!d.capture : !!d) : Cc(a, b, c, !1, d, e)
    },
    Cc = function(a, b, c, d, e, g) {
        if (!b) throw Error("Invalid event type");
        var f = sa(e) ? !!e.capture : !!e,
            h = Dc(a);
        h || (a[wc] = h = new uc(a));
        c = h.add(b, c, d, f, g);
        if (c.Ca) return c;
        d = Ec();
        c.Ca = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) mc || (e = f), void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Fc(b.toString()), d);
        else if (a.addListener && a.removeListener) w("change" === b, "MediaQueryList only has a change event"), a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        yc++;
        return c
    },
    Ec = function() {
        var a = Gc,
            b = $b ? function(c) {
                return a.call(b.src, b.listener, c)
            } : function(c) {
                c = a.call(b.src, b.listener, c);
                if (!c) return c
            };
        return b
    },
    zc = function(a, b, c, d, e) {
        if ("array" == v(b)) {
            for (var g = 0; g < b.length; g++) zc(a,
                b[g], c, d, e);
            return null
        }
        c = Bc(c);
        return a && a[qc] ? a.od(b, c, sa(d) ? !!d.capture : !!d, e) : Cc(a, b, c, !0, d, e)
    },
    Hc = function(a) {
        if ("number" !== typeof a && a && !a.sa) {
            var b = a.src;
            if (b && b[qc]) b.qd(a);
            else {
                var c = a.type,
                    d = a.Ca;
                b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Fc(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                yc--;
                if (c = Dc(b)) {
                    d = a.type;
                    if (d in c.J) {
                        var e = c.J[d],
                            g = za(e, a),
                            f;
                        if (f = 0 <= g) w(null != e.length), Array.prototype.splice.call(e, g, 1);
                        f && (tc(a), 0 == c.J[d].length &&
                            (delete c.J[d], c.Ga--))
                    }
                    0 == c.Ga && (c.src = null, b[wc] = null)
                } else tc(a)
            }
        }
    },
    Fc = function(a) {
        return a in xc ? xc[a] : xc[a] = "on" + a
    },
    Jc = function(a, b, c, d) {
        var e = !0;
        if (a = Dc(a))
            if (b = a.J[b.toString()])
                for (b = b.concat(), a = 0; a < b.length; a++) {
                    var g = b[a];
                    g && g.capture == c && !g.sa && (g = Ic(g, d), e = e && !1 !== g)
                }
        return e
    },
    Ic = function(a, b) {
        var c = a.listener,
            d = a.i || a.src;
        a.Ma && Hc(a);
        return c.call(d, b)
    },
    Gc = function(a, b) {
        if (a.sa) return !0;
        if (!$b) {
            if (!b) a: {
                b = ["window", "event"];
                for (var c = u, d = 0; d < b.length; d++)
                    if (c = c[b[d]], null == c) {
                        b = null;
                        break a
                    }
                b = c
            }
            d = b;
            b = new C(d, this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode) try {
                        d.keyCode = -1;
                        break a
                    } catch (f) {
                        e = !0
                    }
                    if (e || void 0 == d.returnValue) d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode) d.push(e);a = a.type;
                for (e = d.length - 1; !b.cb && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var g = Jc(d[e], a, !0, b);
                    c = c && g
                }
                for (e = 0; !b.cb && e < d.length; e++) b.currentTarget = d[e],
                g = Jc(d[e], a, !1, b),
                c = c && g
            }
            return c
        }
        return Ic(a, new C(b, this))
    },
    Dc = function(a) {
        a = a[wc];
        return a instanceof uc ? a : null
    },
    Kc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
    Bc = function(a) {
        w(a, "Listener can not be null.");
        if ("function" == v(a)) return a;
        w(a.handleEvent, "An object listener must have handleEvent method.");
        a[Kc] || (a[Kc] = function(b) {
            return a.handleEvent(b)
        });
        return a[Kc]
    };
var Lc = function() {
        this.za = new Set
    },
    D = function(a, b, c, d) {
        b = Ac(b, c, d);
        a.za.add(b);
        return b
    },
    Mc = function(a, b) {
        Hc(b);
        a.za["delete"](b)
    };
var Nc = function() {
    this.za = new Set;
    this.zb = null
};
ia(Nc, Lc);
var Oc = function(a, b) {
    if (a.zb) throw Error("Component already rendered.");
    a.zb = b
};
var Pc = function() {
    this.za = new Set;
    this.Y = this.hb = this.Da = null;
    this.Qb = !1
};
ia(Pc, Lc);
Pc.prototype.register = function(a, b) {
    var c = this;
    if (this.Qb) throw Error("LanguageSelectorModel is already registered.");
    this.Qb = !0;
    this.hb = a;
    this.Y = b;
    this.Nb = D(this, this.hb, "click", function() {
        return Qc(c)
    })
};
var Qc = function(a) {
        a.Y.style.visibility = "visible";
        a.Y.style.opacity = 1;
        Mc(a, a.Nb);
        a.Jc = D(a, document, "mouseup", function(b) {
            return Rc(a, b)
        })
    },
    Rc = function(a, b) {
        a.Da = b.target.getAttribute("data-languagecode");
        if (null != a.Da || b.target != a.Y) Mc(a, a.Jc), a.Ic = D(a, a.Y, oc, function() {
            return Sc(a)
        }), a.Y.style.opacity = 0
    },
    Sc = function(a) {
        Mc(a, a.Ic);
        a.Y.style.visibility = "hidden";
        a.Nb = D(a, a.hb, "click", function() {
            return Qc(a)
        });
        if (null != a.Da) {
            var b = Gb(a.Da);
            eb(b)
        }
    };
var Tc = function(a) {
    var b = a.origin,
        c = a.Pa;
    a = a.languages;
    Nc.call(this);
    this.h = b;
    this.Bb = c;
    this.Ob = a
};
ia(Tc, Nc);
Tc.prototype.Tc = function(a, b, c) {
    Oc(this, a);
    Kb(a, Xb, {
        origin: this.h
    }, {
        Pa: this.Bb,
        languages: this.Ob
    });
    a = Cb("confirm_yes");
    D(this, a, "click", function() {
        (void 0 == document.hasStorageAccess ? Promise.resolve() : document.requestStorageAccess()).then(function() {
            return b()
        }, function() {
            return c()
        })
    });
    a = Cb("confirm_no");
    D(this, a, "click", function() {
        return c()
    });
    Uc(this)
};
Tc.prototype.Uc = function(a, b, c) {
    Oc(this, a);
    Kb(a, Yb, {
        origin: this.h
    }, {
        Pa: this.Bb,
        languages: this.Ob
    });
    a = Cb("confirm_yes");
    D(this, a, "click", function() {
        return b()
    });
    a = Cb("confirm_no");
    D(this, a, "click", function() {
        return c()
    });
    Uc(this)
};
var Uc = function(a) {
    void 0 == a.Mb && (a.Mb = new Pc);
    var b = Cb("language_selector"),
        c = Cb("language_list");
    a.Mb.register(b, c)
};
var Vc, Wc, Xc = void 0,
    E = function(a) {
        try {
            return u.JSON.parse.call(u.JSON, a)
        } catch (b) {
            return !1
        }
    },
    F = function(a) {
        return Object.prototype.toString.call(a)
    },
    Yc = F(0),
    Zc = F(new Date(0)),
    $c = F(!0),
    ad = F(""),
    bd = F({}),
    cd = F([]),
    dd = function(a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c]) throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = F(a);
            if (null != a && "function" === typeof a.toJSON && (Object.prototype.hasOwnProperty.call(a,
                    "toJSON") || (e !== cd || a.constructor !== Array && a.constructor !== Object) && (e !== bd || a.constructor !== Array && a.constructor !== Object) && e !== ad && e !== Yc && e !== $c && e !== Zc)) return dd(a.toJSON.call(a), c);
            if (null == a) b[b.length] = "null";
            else if (e === Yc) a = Number(a), isNaN(a) || isNaN(a - a) ? a = "null" : -0 === a && 0 > 1 / a && (a = "-0"), b[b.length] = String(a);
            else if (e === $c) b[b.length] = String(!!Number(a));
            else {
                if (e === Zc) return dd(a.toISOString.call(a), c);
                if (e === cd && F(a.length) === Yc) {
                    b[b.length] = "[";
                    var g = 0;
                    for (d = Number(a.length) >> 0; g < d; ++g) g &&
                        (b[b.length] = ","), b[b.length] = dd(a[g], c) || "null";
                    b[b.length] = "]"
                } else if (e == ad && F(a.length) === Yc) {
                    b[b.length] = '"';
                    g = 0;
                    for (c = Number(a.length) >> 0; g < c; ++g) d = String.prototype.charAt.call(a, g), e = String.prototype.charCodeAt.call(a, g), b[b.length] = "\b" === d ? "\\b" : "\f" === d ? "\\f" : "\n" === d ? "\\n" : "\r" === d ? "\\r" : "\t" === d ? "\\t" : "\\" === d || '"' === d ? "\\" + d : 31 >= e ? "\\u" + (e + 65536).toString(16).substr(1) : 32 <= e && 65535 >= e ? d : "\ufffd";
                    b[b.length] = '"'
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (g in a) Object.prototype.hasOwnProperty.call(a,
                        g) && (e = dd(a[g], c), void 0 !== e && (d++ && (b[b.length] = ","), b[b.length] = dd(g), b[b.length] = ":", b[b.length] = e));
                    b[b.length] = "}"
                } else return
            }
            return b.join("")
        }
    },
    ed = /[\0-\x07\x0b\x0e-\x1f]/,
    fd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/,
    gd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/,
    hd = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/,
    id = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g,
    jd = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g,
    kd = /[ \t\n\r]+/g,
    ld = /[^"]:/,
    md = /""/g,
    nd = /true|false|null/g,
    od = /00/,
    pd = /[\{]([^0\}]|0[^:])/,
    qd = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/,
    rd = /[^\[,:][\[\{]/,
    sd = /^(\{|\}|\[|\]|,|:|0)+/,
    td = /\u2028/g,
    ud = /\u2029/g,
    vd = function(a) {
        a = String(a);
        if (ed.test(a) || fd.test(a) || gd.test(a) || hd.test(a)) return !1;
        var b = a.replace(id, '""');
        b = b.replace(jd, "0");
        b = b.replace(kd, "");
        if (ld.test(b)) return !1;
        b = b.replace(md, "0");
        b = b.replace(nd, "0");
        if (od.test(b) || pd.test(b) || qd.test(b) || rd.test(b) || !b || (b = b.replace(sd, ""))) return !1;
        a = a.replace(td, "\\u2028").replace(ud,
            "\\u2029");
        b = void 0;
        try {
            b = Xc ? [E(a)] : eval("(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" + a + "\n)")
        } catch (c) {
            return !1
        }
        return b && 1 === b.length ? b[0] : !1
    },
    wd = function() {
        var a = ((u.document || {}).scripts || []).length;
        if ((void 0 === Vc || void 0 === Xc || Wc !== a) && -1 !== Wc) {
            Vc = Xc = !1;
            Wc = -1;
            try {
                try {
                    Xc = !!u.JSON && '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' === u.JSON.stringify.call(u.JSON, {
                        a: [3, !0, new Date(0)],
                        c: function() {}
                    }) && !0 === E("true") && 3 === E('[{"a":3}]')[0].a
                } catch (b) {}
                Vc = Xc && !E("[00]") &&
                    !E('"\u0007"') && !E('"\\0"') && !E('"\\v"')
            } finally {
                Wc = a
            }
        }
    },
    xd = !Date.prototype.toISOString || "function" !== typeof Date.prototype.toISOString || "1970-01-01T00:00:00.000Z" !== (new Date(0)).toISOString(),
    yd = function() {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [0 > a ? "-" + String(1E6 - a).substr(1) : 9999 >= a ? String(1E4 + a).substr(1) : "+" + String(1E6 + a).substr(1), "-", String(101 + Date.prototype.getUTCMonth.call(this)).substr(1), "-", String(100 + Date.prototype.getUTCDate.call(this)).substr(1), "T", String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
            ":", String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1), ":", String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1), ".", String(1E3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1), "Z"
        ].join("")
    };
Date.prototype.toISOString = xd ? yd : Date.prototype.toISOString;
var zd, Ad = !1,
    G = function(a) {
        try {
            Ad && window.console && window.console.log && window.console.log(a)
        } catch (b) {}
    },
    H = function(a, b) {
        if (!a) return -1;
        if (a.indexOf) return a.indexOf(b, void 0);
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b) return c;
        return -1
    },
    J = function(a, b) {
        function c() {}
        if (!a) throw "Child class cannot be empty.";
        if (!b) throw "Parent class cannot be empty.";
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    },
    Bd = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    },
    Cd =
    function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (null === d || void 0 === d) d = "";
                b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
        return b.join("&")
    },
    Dd = function(a) {
        var b = window.location.hash;
        a = new RegExp("[&#]" + a + "=([^&]*)");
        b = decodeURIComponent(b);
        b = a.exec(b);
        return null == b ? "" : b[1].replace(/\+/g, " ")
    },
    Ed = function(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1);
        else if (a.attachEvent) a.attachEvent("on" + b, c);
        else throw "Add event handler for " + b + " failed.";
    },
    Fd = function(a,
        b) {
        a = (a || "").split(" ");
        b = (b || "").split(" ");
        for (var c = 0; c < b.length; c++)
            if (b[c] && 0 > H(a, b[c])) return !1;
        return !0
    },
    Gd = function() {
        if ("undefined" != typeof zd) return zd;
        a: {
            try {
                if (window.localStorage) {
                    var a = window.localStorage;
                    break a
                }
            } catch (b) {}
            a = void 0
        }
        if (!a) return zd = !1;
        try {
            a.setItem("test", "test"), a.removeItem("test"), zd = !0
        } catch (b) {
            zd = !1
        }
        return zd
    },
    Hd = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 != a.indexOf("msie") && 8 == parseInt(a.split("msie")[1], 10)
    },
    Id = function() {
        return Object.hasOwnProperty.call(window,
            "ActiveXObject") && !window.ActiveXObject
    },
    Jd = function() {
        var a = navigator.userAgent.toLowerCase();
        return 0 > a.indexOf("edge/") && (-1 < a.indexOf("chrome/") || -1 < a.indexOf("crios/"))
    },
    Kd = function() {
        var a = navigator.userAgent,
            b;
        if (b = !!a && -1 != a.indexOf("CriOS")) b = -1, (a = a.match(/CriOS\/(\d+)/)) && a[1] && (b = parseInt(a[1], 10) || -1), b = 48 > b;
        return b
    },
    Ld = function() {
        var a = navigator.userAgent.toLowerCase();
        return -1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android")
    },
    K = window.JSON,
    L = function(a) {
        this.nb = a || [];
        this.H = {}
    };
L.prototype.addEventListener = function(a, b) {
    if (!(0 <= H(this.nb, a))) throw "Unrecognized event type: " + a;
    if (!Bd(b)) throw "The listener for event '" + a + "' is not a function.";
    this.H[a] || (this.H[a] = []);
    0 > H(this.H[a], b) && this.H[a].push(b)
};
L.prototype.removeEventListener = function(a, b) {
    if (!(0 <= H(this.nb, a))) throw "Unrecognized event type: " + a;
    Bd(b) && this.H[a] && this.H[a].length && (b = H(this.H[a], b), 0 <= b && this.H[a].splice(b, 1))
};
L.prototype.dispatchEvent = function(a) {
    var b = a.type;
    if (!(b && 0 <= H(this.nb, b))) throw "Failed to dispatch unrecognized event type: " + b;
    if (this.H[b] && this.H[b].length)
        for (var c = 0, d = this.H[b].length; c < d; c++) this.H[b][c](a)
};
K = {
    parse: function(a) {
        a = "[" + String(a) + "]"; - 1 === Wc ? a = !1 : (wd(), a = (Vc ? E : vd)(a));
        if (!1 === a || 1 !== a.length) throw new SyntaxError("JSON parsing failed.");
        return a[0]
    },
    stringify: function(a) {
        -1 !== Wc ? (wd(), a = Xc ? u.JSON.stringify.call(u.JSON, a) : dd(a)) : a = void 0;
        return a
    }
};
var M = {
        md: {}
    },
    N = N || {};
N.U = function(a) {
    a = encodeURIComponent(a);
    var b = N.Eb();
    if (b && (a = b.match("(^|;) ?" + a + "=([^;]*)(;|$)")) && 2 < a.length && (a = a[2])) return decodeURIComponent(a)
};
N.xc = function(a) {
    var b;
    (a = N.U(a)) && (b = String(Md(a)));
    return b
};
N.Eb = function() {
    return document.cookie
};
N.ad = function(a) {
    document.cookie = a
};
M = M || {};
M.Gc = function(a, b, c) {
    if (!0 === M.Va) a();
    else {
        var d = 2,
            e = function() {
                d--;
                0 == d && (M.Va = !0, a())
            },
            g = function(f) {
                b(f)
            };
        switch (Nd()) {
            case "sessionStorage":
                M.va = new Od;
                M.va.I(e, g);
                if (c) try {
                    M.va.clear()
                } catch (f) {}
                break;
            case "inMemoryStorage":
                M.va = new Pd;
                M.va.I(e, g);
                break;
            default:
                c = Error("Unsupported storage type: " + Nd());
                b(c);
                return
        }
        switch (Qd()) {
            case "localStorage":
                M.fa = new Rd;
                M.fa.I(e, g);
                break;
            case "indexedDb":
                M.fa = new Sd;
                M.fa.I(e, g);
                break;
            case "cookieStorage":
                M.fa = new Td;
                M.fa.I(e, g);
                break;
            default:
                c = Error("Unsupported storage type: " +
                    Qd()), b(c)
        }
    }
};
M.Gb = function() {
    if (!M.Va) throw Error("Storages are not initialized yet!");
    return M.fa
};
M.Dc = function() {
    if (!M.Va) throw Error("Storages are not initialized yet!");
    return M.va
};
var Rd = function() {};
m = Rd.prototype;
m.I = function(a, b) {
    Gd() ? (this.la = window.localStorage, a()) : b && b(Error("localStorage is not available in the current environment."))
};
m.getItem = function(a, b) {
    b(this.la.getItem(a))
};
m.setItem = function(a, b, c) {
    void 0 === b || null === b ? this.la.removeItem(a) : this.la.setItem(a, b);
    c && c()
};
m.removeItem = function(a, b) {
    this.la.removeItem(a);
    b && b()
};
m.clear = function(a) {
    this.la.clear();
    a && a()
};
var Sd = function() {};
m = Sd.prototype;
m.I = function(a, b) {
    var c = this,
        d = window.indexedDB.open("oauth");
    d.onsuccess = function(e) {
        c.ya = e.target.result;
        a()
    };
    d.onupgradeneeded = function(e) {
        e.target.result.createObjectStore("oauth")
    };
    d.onerror = function(e) {
        e = e.target.errorCode;
        b && b(Error("IndexedDb initialization failed: " + e))
    }
};
m.getItem = function(a, b) {
    var c = this.ya.transaction("oauth", "readwrite").objectStore("oauth").get(a);
    c.onsuccess = function() {
        b(c.result)
    }
};
m.setItem = function(a, b, c) {
    var d = this.ya.transaction("oauth", "readwrite").objectStore("oauth");
    if (void 0 === b || null === b) d["delete"](a);
    else d.put(b, a);
    d.transaction.oncomplete = function() {
        c && c()
    }
};
m.removeItem = function(a, b) {
    var c = this.ya.transaction("oauth", "readwrite").objectStore("oauth");
    c["delete"](a);
    c.transaction.oncomplete = function() {
        b && b()
    }
};
m.clear = function(a) {
    var b = this.ya.transaction("oauth", "readwrite").objectStore("oauth");
    b.clear();
    b.transaction.oncomplete = function() {
        a && a()
    }
};
var Pd = function() {};
m = Pd.prototype;
m.I = function(a) {
    this.Ea = {};
    a()
};
m.getItem = function(a, b) {
    b(this.Ea[a] || null)
};
m.setItem = function(a, b, c) {
    this.Ea[a] = b;
    c && c()
};
m.removeItem = function(a, b) {
    delete this.Ea[a];
    b && b()
};
m.clear = function(a) {
    this.Ea = {};
    a && a()
};
var Od = function() {};
m = Od.prototype;
m.I = function(a, b) {
    Gd() ? (this.ta = window.sessionStorage, a()) : b && b(Error("sessionStorage is not available in the current environment."))
};
m.getItem = function(a, b) {
    b(this.ta.getItem(a))
};
m.setItem = function(a, b, c) {
    void 0 === b || null === b ? this.ta.removeItem(a) : this.ta.setItem(a, b);
    c && c()
};
m.removeItem = function(a, b) {
    this.ta.removeItem(a);
    b && b()
};
m.clear = function(a) {
    this.ta.clear();
    a && a()
};
var Td = function() {
    this.Mc = O.Xb
};
m = Td.prototype;
m.I = function(a, b) {
    navigator.cookieEnabled ? a() : b && b(Error("Cookies are not enabled in current environment."))
};
m.getItem = function(a, b) {
    for (var c = null, d = Ud(a), e = 0; e < d.length; e++)
        if (d[e].key == a) {
            c = d[e].value;
            break
        }
    b(c)
};
m.setItem = function(a, b, c) {
    var d = O.Ra(a.split(O.m)[0]);
    if (d) {
        var e = Vd(d);
        b = {
            key: a,
            value: b
        };
        for (var g = 0; g < e.length; g++)
            if (e[g].key == a) {
                e.splice(g, 1);
                break
            }
        e.push(b);
        Wd(this, d, e)
    }
    c && c()
};
m.removeItem = function(a, b) {
    for (var c = Ud(a), d = 0; d < c.length; d++)
        if (c[d].key == a) {
            c.splice(d, 1);
            break
        }(a = O.Ra(a.split(O.m)[0])) && Wd(this, a, c);
    b && b()
};
m.clear = function(a) {
    M.lc();
    a && a()
};
var Ud = function(a) {
        return (a = O.Ra(a.split(O.m)[0])) ? Vd(a) : []
    },
    Vd = function(a) {
        a = N.U(a);
        return M.nc(a || null)
    },
    Wd = function(a, b, c) {
        var d = M.qc(c);
        d.length > a.Mc ? (c.splice(0, 1), 0 < c.length ? Wd(a, b, c) : G("Failed to write Cookie based cache due to the big size.")) : M.Sb(b, d)
    };
M.mc = function(a) {
    try {
        return atob(a)
    } catch (b) {
        return a
    }
};
M.pc = function(a) {
    try {
        return btoa(a)
    } catch (b) {
        return a
    }
};
M.nc = function(a) {
    if (!a) return [];
    a = M.mc(a);
    try {
        return K.parse(a).items || []
    } catch (b) {
        return G("Error while parsing items from cookie:" + b.message), []
    }
};
M.qc = function(a) {
    return M.pc(K.stringify({
        items: a
    }))
};
M.Sb = function(a, b) {
    var c = window.location.hostname,
        d = window.location.pathname;
    a = encodeURIComponent(a) + "=" + encodeURIComponent(b) + "; domain=" + c + ";"; - 1 != navigator.userAgent.toLowerCase().indexOf("msie") || Id() || (a += " path=" + d + ";");
    "https:" == window.location.protocol && (a += " secure;");
    N.ad(a)
};
M.lc = function() {
    var a = O.Ia,
        b = N.Eb();
    if (b) {
        b = b.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:=[^;]*)?;\s*/);
        for (var c = 0; c < b.length; c++) {
            var d = decodeURIComponent(b[c]);
            0 == d.indexOf(a) && M.Sb(d, "")
        }
    }
};
var Xd = function(a) {
    this.Lb = a;
    L.call(this, ["storageValueChanged"])
};
J(Xd, L);
var Yd = function(a, b) {
    M.Gb().getItem(a.Lb, b)
};
Xd.prototype.addListener = function(a) {
    this.addEventListener("storageValueChanged", a)
};
Xd.prototype.start = function() {
    var a = this;
    Yd(this, function(b) {
        a.Qc = b;
        a.Pb = 0;
        a.Wa = window.setInterval(Zd(a), 200)
    })
};
Xd.prototype.stop = function() {
    void 0 !== this.Wa && (clearInterval(this.Wa), this.Wa = void 0)
};
var Zd = function(a) {
        return function() {
            a.Pb++;
            Yd(a, function(b) {
                b != a.Qc ? (a.dispatchEvent({
                    type: "storageValueChanged",
                    key: a.Lb,
                    newValue: b
                }), a.stop()) : 1500 <= a.Pb && a.stop()
            })
        }
    },
    Md = function(a) {
        var b = 0,
            c;
        if (a) {
            var d = 0;
            for (c = a.length; d < c; d++) {
                var e = a.charCodeAt(d);
                b = (b << 5) - b + e;
                b |= 0
            }
        }
        return b
    },
    P = function(a) {
        return !!a && 0 <= a.indexOf(O.m)
    },
    $d = function(a, b) {
        if (!a && !b) return !0;
        if (!a || !b) return !1;
        a = a.extraQueryParams;
        b = b.extraQueryParams;
        if (!a && !b) return !0;
        if (!a || !b || Object.keys && Object.keys(a).length != Object.keys(b).length) return !1;
        for (var c in a)
            if (a[c] !== b[c]) return !1;
        if (!Object.keys)
            for (c in b)
                if (a[c] !== b[c]) return !1;
        return !0
    },
    O = O || {};
O.La = "SID";
O.tb = "SSID";
O.Wb = 100;
O.vb = "/oauth2/sessionstate/action/updateState";
O.ob = "/oauth2/sessionstate/action/checkOrigin";
O.sb = "/oauth2/permission/action/refresh";
O.rb = "/oauth2/permission/action/code";
O.Ka = "/oauth2/permission/action/listSessions";
O.bc = "/o/oauth2/revoke";
O.wa = "response_type login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes nonce".split(" ");
O.Zb = "login_hint client_id origin scope ss_domain authuser hd enable_serial_consent include_granted_scopes".split(" ");
O.$b = "client_id origin scope ss_domain authuser hd enable_serial_consent".split(" ");
O.m = "::";
O.Ja = "_ss_";
O.qb = "_tr_";
O.ia = "oauth2_ss";
O.pb = "oauth2_cs";
O.ub = "oauth2_tr";
O.Yb = "oauth2_is";
O.ha = "oauth2_ar";
O.Ia = "oauth2c_";
O.Xb = 1500;
O.ld = function() {
    var a = {
            Ja: 1,
            qb: 2,
            ia: 3,
            pb: 4,
            ub: 5,
            ha: 6
        },
        b;
    for (b in a)
        if (a = O[b], !a || 0 <= a.indexOf(O.m)) throw "Invalid value for 'oauth2.spi." + b + "'.";
};
O.ld();
O.ac = 512;
O.fc = function(a) {
    var b;
    (b = void 0 === a.hint) || (b = a.hint, b = ("" === b ? !0 : b ? "string" == typeof b || "object" == typeof b && b.constructor === String : !1) && a.hint.length <= O.ac);
    return !a.id && b
};
O.Bc = function() {
    return "https:" == window.location.protocol ? O.tb : O.La
};
O.Ra = function(a) {
    switch (a) {
        case O.ha:
            return O.Ia + O.ha;
        case O.ia:
            return O.Ia + O.ia;
        default:
            return null
    }
};
var Qd = function() {
        return (Ld() || Jd()) && !Gd() || Id() && !window.indexedDB ? "cookieStorage" : Id() ? "indexedDb" : "localStorage"
    },
    Nd = function() {
        return !Ld() && !Jd() || Gd() ? "sessionStorage" : "inMemoryStorage"
    };
N = N || {};
N.Ha = "cookieValueChanged";
var ae = function(a, b) {
    this.Ab = a;
    this.Hc = b;
    L.call(this, [N.Ha])
};
J(ae, L);
ae.prototype.U = function() {
    return N.U(this.Ab)
};
var Q = function(a) {
    return N.xc(a.Ab)
};
ae.prototype.addListener = function(a) {
    this.addEventListener(N.Ha, a)
};
var de = function(a) {
        be(a);
        a.Aa = a.U();
        a.lb = window.setInterval(ce(a), a.Hc);
        G("IDP Session Cookie monitor is started.")
    },
    be = function(a) {
        void 0 !== a.lb && (window.clearInterval(a.lb), a.lb = void 0, G("IDP Session Cookie monitor is stoped."))
    },
    ce = function(a) {
        return function() {
            var b = a.U();
            if (a.Aa != b) {
                var c = {
                    type: N.Ha,
                    newHash: b && Md(b),
                    oldHash: a.Aa && Md(a.Aa)
                };
                a.Aa = b;
                a.dispatchEvent(c)
            }
        }
    },
    ee = function(a) {
        this.h = a;
        this.Ub = void 0
    },
    fe = function(a, b, c) {
        var d = O.bc,
            e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (4 ==
                e.readyState && 200 == e.status) {
                var h;
                e.responseText && (h = K.parse(e.responseText));
                c(h)
            } else 4 == e.readyState && 0 == e.status ? c({
                error: "network_error"
            }) : 4 == e.readyState && c({
                error: "server_error",
                error_subtype: e.responseText
            })
        };
        e.open("POST", d, !0);
        e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var g = "xsrfToken=";
        a.Ub && (g += a.Ub);
        if (b)
            for (var f in b) f && b[f] && (g += "&" + f + "=" + encodeURIComponent(b[f]));
        G("Call " + d + " with postData: " + g);
        e.send(g)
    },
    ge = function(a, b, c, d) {
        var e = new XMLHttpRequest;
        e.onreadystatechange = function() {
            if (4 == e.readyState && 200 == e.status) {
                var f;
                if (e.responseText && (f = K.parse(e.responseText))) {
                    var h = f;
                    if (h.error) {
                        h.thrown_by = "server";
                        try {
                            h.error = h.error.toLowerCase()
                        } catch (k) {}
                    }
                }
                d(f)
            } else 4 == e.readyState && 0 == e.status ? d({
                error: "network_error"
            }) : 4 == e.readyState && d({
                error: "server_error",
                error_subtype: e.responseText
            })
        };
        if (b = Cd(b)) a += 0 > a.indexOf("?") ? "?" : "&", a += b;
        e.open("GET", a, !0);
        e.setRequestHeader("X-Requested-With", "XmlHttpRequest");
        if (c)
            for (var g in c)
                if (c.hasOwnProperty(g)) {
                    b =
                        c[g];
                    if (null === b || void 0 === b) b = "";
                    e.setRequestHeader(g, b)
                }
        G("Call " + a + " with Get method.");
        e.send()
    },
    he = function(a, b, c) {
        ge(O.ob, {
            origin: a.h,
            client_id: b
        }, null, c)
    },
    ie = function(a, b, c) {
        b && b.length ? ge(O.vb, {
            login_hint: b.join(" "),
            origin: a.h
        }, null, c) : c({
            activeHints: {}
        })
    },
    ke = function(a, b, c) {
        b.origin = a.h;
        0 > O.wa.indexOf("enable_serial_consent") && O.wa.push("enable_serial_consent");
        b = je(b, O.wa);
        ge(O.sb, b, null, c)
    },
    le = function(a, b, c) {
        b.origin = a.h;
        b = je(b, O.Zb);
        ge(O.rb, b, null, c)
    },
    me = function(a, b, c) {
        b.origin = a.h;
        b = je(b, O.$b);
        ge(O.Ka, b, null, c)
    },
    ne = function(a, b, c) {
        fe(a, {
            token: b
        }, c)
    },
    je = function(a, b) {
        for (var c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            void 0 !== a[e] && null !== a[e] && (c[e] = a[e])
        }
        return c
    };
M = M || {};
var oe = function() {};
oe.prototype.F = function() {
    return !1
};
var pe = {};
M.Sc = function() {
    var a = new qe;
    if (!a) throw "policy cannot be empty.";
    if (M.Jb("DEFAULT")) throw "Duplicate policyName [DEFAULT].";
    pe.DEFAULT = a
};
M.Jb = function(a) {
    for (var b in pe)
        if (a == b) return !0;
    return !1
};
M.Fb = function(a) {
    return a && M.Jb(a) ? a : "DEFAULT"
};
M.yc = function(a) {
    return pe[M.Fb(a)]
};
M.F = function(a, b, c, d) {
    return M.yc(d).F(a, b, c)
};
M.nd = function(a, b, c, d) {
    if (!M.F(a, b, c, d)) throw "permission_error";
};
var re = function() {};
J(re, oe);
re.prototype.F = function(a, b, c) {
    a = c ? this.Ta(a) : this.Ua(a);
    return 0 <= H(a, b)
};
re.prototype.Ua = function(a) {
    var b = [];
    if (a && (b.push(a), "http://" == a.substring(0, 7) || "https://" == a.substring(0, 8))) {
        var c = document.createElement("a");
        c.href = a;
        a != c.protocol + "//" + c.hostname && b.push(c.protocol + "//" + c.hostname);
        "https:" == c.protocol && b.push("http://" + c.hostname)
    }
    return b
};
re.prototype.Ta = function(a) {
    var b = [];
    if (a) {
        b.push(a);
        var c = document.createElement("a");
        c.href = a;
        if ("http:" == c.protocol || "https:" == c.protocol)
            for (a = c.hostname.split("."); 1 < a.length;) b.push(c.protocol + "//" + a.join(".")), "https:" == c.protocol && b.push("http://" + a.join(".")), a.shift()
    }
    return b
};
var qe = function() {};
J(qe, oe);
qe.prototype.F = function(a, b, c) {
    a = c ? this.Ta(a) : this.Ua(a);
    return 0 <= H(a, b)
};
qe.prototype.Ua = function(a) {
    var b = [];
    if (a && (b.push(a), "https://" == a.substring(0, 8))) {
        var c = document.createElement("a");
        c.href = a;
        "" != c.port && 0 != c.port && 443 != c.port || b.push("http://" + c.hostname)
    }
    return b
};
qe.prototype.Ta = function(a) {
    var b = [];
    if (a) {
        var c = document.createElement("a");
        c.href = a;
        if ("https:" == c.protocol && ("" == c.port || 0 == c.port || 443 == c.port) || "http:" == c.protocol && ("" == c.port || 0 == c.port || 80 == c.port))
            for (a = c.hostname.split("."); 1 < a.length;) b.push(c.protocol + "//" + a.join(".")), "https:" == c.protocol && b.push("http://" + a.join(".")), a.shift();
        else b.push(a)
    }
    return b
};
M.Sc();
var R = function() {};
R.prototype.Xa = function() {
    return !0
};
var S = function(a) {
    return a.Xa() ? M.Dc() : M.Gb()
};
R.prototype.l = function() {
    throw Error("unimplemented abstract method");
};
R.prototype.da = function() {
    throw Error("unimplemented abstract method");
};
R.prototype.B = function() {
    throw Error("unimplemented abstract method");
};
R.prototype.C = function() {
    throw Error("unimplemented abstract method");
};
var T = function() {};
J(T, R);
T.prototype.B = function(a, b, c) {
    var d = this,
        e = this.l(a);
    S(this).getItem(e, function(g) {
        if (g) try {
            var f = K.parse(g);
            if (f.cookieHash != b) {
                S(d).removeItem(e, function() {
                    c(void 0)
                });
                return
            }
            var h = f && f.cachedValue
        } catch (k) {}
        c(h)
    })
};
T.prototype.C = function(a, b, c, d) {
    a = this.l(a);
    void 0 === b || null === b ? S(this).removeItem(a, d) : (b = K.stringify({
        cookieHash: c,
        cachedValue: b
    }), S(this).setItem(a, b, d))
};
var se = function() {};
J(se, R);
se.prototype.B = function(a, b, c) {
    S(this).getItem(this.l(a), function(d) {
        if (d) try {
            var e = K.parse(d);
            var g = e && e.cachedValue
        } catch (f) {}
        c(g)
    })
};
se.prototype.C = function(a, b, c, d) {
    a = this.l(a);
    void 0 === b || null === b ? S(this).removeItem(a, d) : (b = K.stringify({
        cachedValue: b
    }), S(this).setItem(a, b, d))
};
var te = function() {};
J(te, se);
te.prototype.Xa = function() {
    return !1
};
te.prototype.l = function(a) {
    return [O.ha, a.origin, a.clientId, a.id].join(O.m)
};
te.prototype.da = function(a) {
    var b = {};
    a && (a = a.split(O.m), 4 == a.length && (b.origin = a[1], b.clientId = a[2], b.id = a[3]));
    return b
};
var ue = function() {};
J(ue, T);
ue.prototype.l = function(a) {
    return [O.pb, a.origin, a.clientId].join(O.m)
};
ue.prototype.da = function(a) {
    a = a.split(O.m);
    var b = {};
    3 == a.length && (b.origin = a[1], b.clientId = a[2]);
    return b
};
var ve = function() {};
J(ve, T);
ve.prototype.l = function(a) {
    return [O.Yb, a.origin, a.clientId].join(O.m)
};
ve.prototype.B = function(a, b, c) {
    var d = this;
    T.prototype.B.call(this, a, b, function(e) {
        e && e.expires_at ? 6E4 > e.expires_at - (new Date).getTime() ? S(d).removeItem(d.l(a), c) : Fd(e.scope, a.scope) && Fd(a.scope, e.scope) ? (e.expires_in = Math.floor((e.expires_at - (new Date).getTime()) / 1E3), c && c(e)) : S(d).removeItem(d.l(a), c) : c && c(void 0)
    })
};
ve.prototype.C = function(a, b, c, d) {
    var e;
    b && b.expires_at && 18E4 < b.expires_at - (new Date).getTime() && (e = b);
    T.prototype.C.call(this, a, e, c, d)
};
var we = function() {};
J(we, se);
we.prototype.Xa = function() {
    return !1
};
we.prototype.l = function(a) {
    return [O.ia, a.domain, a.crossSubDomains ? "1" : "0", M.Fb(a.policy), a.id || O.Ja].join(O.m)
};
we.prototype.da = function(a) {
    a = a.split(O.m);
    var b = {};
    5 == a.length && (b.domain = a[1], b.crossSubDomains = "1" == a[2], b.policy = a[3], b.id = a[4]);
    "DEFAULT" == b.policy && delete b.policy;
    b.id == O.Ja && delete b.id;
    return b
};
var xe = function(a) {
    this.Pc = a || O.ub
};
J(xe, T);
xe.prototype.l = function(a) {
    return [this.Pc, a.origin, a.clientId, a.id || O.qb].join(O.m)
};
xe.prototype.B = function(a, b, c) {
    var d = this;
    T.prototype.B.call(this, a, b, function(e) {
        e && e.ga && e.ga.expires_at ? a.loginHint != e.ga.login_hint ? S(d).removeItem(d.l(a), c) : 6E4 > e.ga.expires_at - (new Date).getTime() ? S(d).removeItem(d.l(a), c) : Fd(e.ga.scope, a.scope) ? Fd(e.responseType, a.responseType) ? (e = e.ga, e.expires_in = Math.floor((e.expires_at - (new Date).getTime()) / 1E3), c && c(e)) : S(d).removeItem(d.l(a), c) : S(d).removeItem(d.l(a), c) : c && c(void 0)
    })
};
xe.prototype.C = function(a, b, c, d) {
    var e;
    b && b.expires_at && 18E4 < b.expires_at - (new Date).getTime() && (e = {
        ga: b,
        responseType: a.responseType
    });
    T.prototype.C.call(this, a, e, c, d)
};
var ye = function(a, b) {
        this.h = a;
        this.gb = b;
        this.Qa = !1;
        this.ra = {};
        this.qa = {};
        this.pa = {}
    },
    ze = function(a, b) {
        if (!b) throw "message object cannot be null.";
        b.rpcToken = a.gb;
        b = K.stringify(b);
        G("IDP IFrame sends message: " + b);
        window.parent.postMessage(b, a.h)
    },
    U = function(a, b, c) {
        b && ze(a, {
            id: b,
            result: c
        })
    };
ye.prototype.Rc = function(a) {
    if (a.source == window.parent && a.origin == this.h) {
        G("IDP Session State IFrame receive message:" + a.data);
        try {
            var b = K.parse(a.data)
        } catch (d) {
            return
        }
        if ((b.rpcToken || this.gb) && b.rpcToken != this.gb) G("RPC token mismatch.");
        else if (b && b.method && ("showDialog" == b.method || this.ra[b.method]))
            if ("showDialog" == b.method)
                if (this.Qa) ze(this, {
                    id: b.id,
                    error: "dialog_already_displayed"
                });
                else if (a = b.params, b.id && a && a.dialogType && this.pa[a.dialogType]) {
            var c = this.pa[a.dialogType];
            c.s && !c.s(a) ?
                (G("Bad request."), ze(this, {
                    id: b.id,
                    error: "bad_request"
                })) : c.i(b)
        } else G("Bad dialog request.");
        else a = this.ra[b.method], a.O && !b.id ? G("Bad request.") : a.s && !a.s(b) ? (G("Bad request."), ze(this, {
            id: b.id,
            error: "bad_request"
        })) : a.i(b);
        else G("Bad request.")
    }
};
var V = function(a, b) {
        if (b && b.type && a.qa[b.type]) {
            var c = a.qa[b.type].filter;
            c && !c(b) || ze(a, {
                method: "fireIdpEvent",
                params: b
            })
        } else G("Invalid event type.")
    },
    Ae = function(a) {
        V(a, {
            type: "displayIFrame",
            Fc: !1,
            options: {
                fullScreen: !0
            }
        });
        a.Qa = !0
    },
    Be = function(a) {
        V(a, {
            type: "displayIFrame",
            Fc: !0
        });
        a.Qa = !1
    },
    Ce = function(a, b) {
        a.ra = {};
        a.qa = {};
        a.pa = {};
        if (b) {
            if (b.A)
                for (var c = 0; c < b.A.length; c++) {
                    var d = b.A[c];
                    if (!d.method || !d.i) throw "Error in RPC policy: method or handler is empty.";
                    if (a.ra[d.method]) throw "Error in RPC policy: duplicate entry for RPC '" +
                        d.method + "'.";
                    var e = d.method;
                    a.ra[e] = {
                        i: d.i,
                        O: d.O,
                        s: d.s,
                        method: e
                    }
                }
            if (b.M)
                for (c = 0; c < b.M.length; c++) {
                    d = b.M[c];
                    if (!d.type) throw "Error in Event policy: type is empty.";
                    if (a.qa[d.type]) throw "Error in Event policy: duplicate entry for type '" + d.type + "'.";
                    e = d.type;
                    a.qa[e] = {
                        filter: d.filter,
                        type: e
                    }
                }
            if (b.ba)
                for (c = 0; c < b.ba.length; c++) {
                    d = b.ba[c];
                    if (!d.ca) throw "Error in Dialog policy: dialogType is empty.";
                    if (a.pa[d.ca]) throw "Error in Dialog policy: duplicate entry for dialogType '" + d.ca + "'.";
                    e = d.ca;
                    a.pa[e] = {
                        ca: e,
                        i: d.i,
                        s: d.s
                    }
                }
        }
    },
    De = function(a, b, c, d) {
        V(a, {
            type: "sessionStateChanged",
            clientId: b,
            user: c,
            sessionState: d
        })
    },
    Ee = function(a) {
        var b = new we,
            c = O.ia + O.m;
        return function(d) {
            if (d.key && 0 === d.key.indexOf(c)) {
                var e = b.da(d.key);
                if (M.F(a.h, e.domain, e.crossSubDomains, e.policy)) {
                    var g;
                    if (d.newValue) try {
                        var f = K.parse(d.newValue);
                        f && (g = f.cachedValue)
                    } catch (h) {
                        return
                    }
                    V(a, {
                        type: "sessionSelectorChanged",
                        newValue: g,
                        crossSubDomains: e.crossSubDomains,
                        domain: e.domain,
                        policy: e.policy,
                        id: e.id
                    })
                }
            }
        }
    },
    Fe = function(a) {
        var b = new te,
            c = [O.ha, a.h].join(O.m) + O.m;
        return function(d) {
            if (!d.key && Hd()) {
                var e = null,
                    g = [];
                for (d = 0; d < window.localStorage.length; d++) {
                    var f = window.localStorage.key(d);
                    if (0 === f.indexOf(c))
                        if (e) g.push(f);
                        else {
                            var h = window.localStorage.getItem(f);
                            g.push(f);
                            if (h) {
                                try {
                                    var k = K.parse(h)
                                } catch (l) {
                                    continue
                                }
                                k && k.cachedValue && (e = b.da(f), e = {
                                    type: "authResult",
                                    clientId: e.clientId,
                                    id: e.id,
                                    authResult: k.cachedValue
                                })
                            }
                        }
                }
                for (d = 0; d < g.length; d++) window.localStorage.removeItem(g[d]);
                (k = e) && V(a, k)
            } else if (d.key && 0 === d.key.indexOf(c) &&
                d.newValue) {
                try {
                    g = K.parse(d.newValue)
                } catch (l) {
                    return
                }
                g && g.cachedValue && (k = b.da(d.key), k = {
                    type: "authResult",
                    clientId: k.clientId,
                    id: k.id,
                    authResult: g.cachedValue
                }, V(a, k))
            }
        }
    },
    Ge = function(a, b) {
        this.h = a;
        this.v = b;
        this.yb = new ue;
        this.Rb = new we;
        this.mb = new xe;
        this.Hb = new ve
    },
    He = function(a, b, c, d, e) {
        a.yb.C({
            origin: a.h,
            clientId: b
        }, {
            user: c.L,
            session: c.L ? c.Z : void 0
        }, d, e)
    },
    Ie = function(a, b, c) {
        a.yb.B({
            origin: a.h,
            clientId: b
        }, Q(a.v), c)
    },
    Je = function(a, b, c, d, e, g, f) {
        a.mb.B({
            loginHint: b,
            origin: a.h,
            clientId: c,
            responseType: d,
            scope: e,
            id: g
        }, Q(a.v), f)
    },
    Ke = function(a, b, c, d, e, g, f) {
        a.mb.C({
            origin: a.h,
            clientId: c,
            responseType: d,
            id: g
        }, e, b, f)
    },
    Le = function(a, b, c) {
        var d = a.mb;
        a = {
            origin: a.h,
            clientId: b
        };
        S(d).removeItem(d.l(a), c)
    },
    Me = function(a, b, c, d, e, g) {
        if (!a.F(b, c, e)) throw "Permission denied for '" + a.h + "' to read session selector for domain '" + b + "'.";
        a.Rb.B({
            domain: b,
            crossSubDomains: c,
            policy: e,
            id: d
        }, void 0, function(f) {
            g && g(f)
        })
    },
    Ne = function(a, b, c, d, e, g, f) {
        if (!a.F(b, c, g)) throw "Permission denied for '" + a.h + "' to write session selector for domain '" +
            b + "'.";
        a.Rb.C({
            domain: b,
            crossSubDomains: c,
            policy: g,
            id: e
        }, d, void 0, f)
    };
Ge.prototype.F = function(a, b, c) {
    return M.F(this.h, a, b, c)
};
var Oe = function(a, b, c, d) {
        a.Hb.B({
            origin: a.h,
            clientId: b,
            scope: c
        }, Q(a.v), d)
    },
    Pe = function(a, b, c, d, e) {
        a.Hb.C({
            origin: a.h,
            clientId: c
        }, d, b, e)
    },
    Qe = function(a, b, c) {
        this.$ = a;
        this.g = b;
        this.j = c
    },
    Re = function(a, b, c) {
        a.L ? c && void 0 !== c[a.L] ? (c = c[a.L], $d(a.Z, c) || (a.Z = c, He(a.j, a.$, a, b, function() {
            De(a.g, a.$, a.L, a.Z)
        }))) : a.Z && (a.Z = void 0, He(a.j, a.$, a, b, function() {
            De(a.g, a.$, a.L, void 0)
        })) : b && De(a.g, a.$, a.L, void 0)
    },
    Te = function(a, b, c, d) {
        this.v = a;
        this.g = b;
        this.K = c;
        this.j = d;
        this.oa = void 0;
        this.D = {};
        this.ib = [];
        var e = this;
        this.v.addListener(function(g) {
            Se(e, g)
        })
    },
    Ue = function(a) {
        var b = [],
            c;
        for (c in a.D) {
            var d = a.D[c].L;
            d && b.push(d)
        }
        return b
    },
    Se = function(a, b) {
        if (b.newHash) ie(a.K, Ue(a), function(d) {
            for (var e in a.D) Re(a.D[e], b.newHash, d && d.activeHints)
        });
        else
            for (var c in a.D) Re(a.D[c], b.newHash, void 0)
    },
    Ve = function(a, b, c, d, e) {
        var g = a.D[b];
        g || (g = new Qe(b, a.g, a.j), a.D[b] = g);
        a = g;
        b = c.login_hint;
        c = c.session_state;
        a.L != b ? (a.L = b, a.Z = b ? c : void 0, He(a.j, a.$, a, d, e)) : e && e()
    },
    We = function(a, b, c) {
        var d = a.D[b];
        d ? c(!0) : Ie(a.j, b, function(e) {
            e ?
                (d = new Qe(b, a.g, a.j), a.D[b] = d, d.L = e.user, d.Z = e.session, c(!0)) : he(a.K, b, function(g) {
                    g && g.valid ? (g = new Qe(b, a.g, a.j), a.D[b] = g, He(a.j, b, g, Q(a.v), function() {
                        c(!0)
                    })) : c(!1)
                })
        })
    },
    Xe = function(a, b) {
        Id() || Kd() ? a.ib.push(b) : Ed(Hd() ? document : window, "storage", b)
    },
    X = function(a, b, c) {
        this.h = a;
        this.kc = c;
        this.g = new ye(a, b);
        this.v = new ae(O.La, O.Wb);
        this.K = new ee(a);
        this.j = new Ge(a, this.v);
        this.P = new Te(this.v, this.g, this.K, this.j)
    };
m = X.prototype;
m.start = function() {
    var a = this,
        b = function() {
            a.g.Rc.apply(a.g, arguments)
        },
        c = function() {
            V(a.g, {
                type: "idpReady"
            });
            G("Initialize IDP IFrame successfully.")
        },
        d = function(e) {
            var g = window;
            if (g.removeEventListener) g.removeEventListener("message", b, !1);
            else if (g.detachEvent) g.detachEvent("onmessage", b);
            else throw "Remove event handler for message failed.";
            be(a.v);
            V(a.g, {
                type: "idpError",
                error: e.message
            })
        };
    try {
        Ce(this.g, this.createPolicy()), Ed(window, "message", b), Xe(this.P, Ee(this.g)), Xe(this.P, Fe(this.g)), de(this.v),
            M.Gc(c, d, this.kc)
    } catch (e) {
        d(e)
    }
};
m.Nc = function(a) {
    var b = this;
    We(this.P, (a.params || {}).clientId, function(c) {
        U(b.g, a.id, c)
    })
};
m.wc = function(a) {
    var b = a.params || {},
        c = this,
        d = function(r) {
            U(c.g, a.id, r)
        },
        e = b.clientId,
        g = b.loginHint,
        f = b.request,
        h = b.sessionSelector;
    f.client_id = e;
    f.login_hint = g;
    f.ss_domain = h.domain;
    var k = Q(this.v);
    if (k) {
        var l = !!f.enable_serial_consent,
            n = function(r) {
                r && !r.error && r.login_hint ? (r.first_issued_at = (new Date).getTime(), r.expires_at = r.first_issued_at + 1E3 * r.expires_in, r.session_state || (r.session_state = {}), l || r.scope || (r.scope = f.scope), b.skipCache ? Ve(c.P, e, r, k, function() {
                    d(r)
                }) : Ke(c.j, k, e, f.response_type,
                    r, b.id,
                    function() {
                        Ve(c.P, e, r, k, function() {
                            d(r)
                        })
                    })) : (r = r || {}, d(r))
            };
        b.forceRefresh ? ke(this.K, f, n) : Je(this.j, g, e, f.response_type, f.scope, b.id, function(r) {
            r && 18E4 < r.expires_at - (new Date).getTime() ? Ve(c.P, e, r, k, function() {
                d(r)
            }) : ke(c.K, f, n)
        })
    } else U(c.g, a.id, {
        error: "user_logged_out"
    })
};
m.zc = function(a) {
    var b = this,
        c = function(f) {
            U(b.g, a.id, f)
        };
    if (Q(this.v)) {
        var d = a.params || {},
            e = d.request,
            g = d.sessionSelector;
        e.client_id = d.clientId;
        e.login_hint = d.loginHint;
        e.ss_domain = g.domain;
        le(this.K, e, c)
    } else c({
        error: "user_logged_out"
    })
};
m.Xc = function(a) {
    var b = a.params || {},
        c = b.clientId,
        d = this;
    ne(this.K, b.token, function(e) {
        Le(d.j, c, function() {
            U(d.g, a.id, e)
        })
    })
};
m.jd = function(a) {
    if (Id() || Kd()) {
        var b = a.params || {},
            c = (new te).l({
                clientId: b.clientId,
                id: b.id,
                origin: b.origin
            });
        b = this.P;
        if (Id() || Kd()) {
            b.oa && b.oa.stop();
            b.oa = new Xd(c);
            for (c = 0; c < b.ib.length; c++) b.oa.addListener(b.ib[c]);
            b.oa.start()
        }
    }
    U(this.g, a.id, !0)
};
m.vc = function(a) {
    var b = this,
        c = a.params || {};
    Me(this.j, c.domain, c.crossSubDomains, c.id, c.policy, function(d) {
        U(b.g, a.id, d)
    })
};
m.bd = function(a) {
    var b = a.params || {},
        c = b.hint,
        d = !!b.disabled,
        e = b.domain,
        g = b.crossSubDomains,
        f = b.id,
        h = b.policy,
        k = this;
    if (c || d) var l = {
        hint: c,
        disabled: d
    };
    Ne(this.j, e, g, l, f, h, function() {
        V(k.g, {
            type: "sessionSelectorChanged",
            newValue: l,
            domain: e,
            crossSubDomains: g,
            id: f,
            policy: h
        });
        U(k.g, a.id, !0)
    })
};
m.Kc = function(a) {
    var b = a.params || {},
        c = this,
        d = function(l) {
            U(c.g, a.id, l)
        },
        e = b.clientId,
        g = b.request,
        f = b.sessionSelector;
    g.client_id = e;
    g.response_type = "id_token";
    g.ss_domain = f.domain;
    var h = Q(this.v);
    if (h) {
        var k = function(l) {
            l && !l.error ? (l.first_issued_at = (new Date).getTime(), l.expires_at = l.first_issued_at + 1E3 * l.expires_in, l.scope = g.scope, Pe(c.j, h, e, l, function() {
                d(l)
            })) : (l = l || {
                error: "No response returned from Server."
            }, d(l))
        };
        b.forceRefresh ? me(this.K, g, k) : Oe(this.j, e, g.scope, function(l) {
            l ? d(l) : me(c.K, g,
                k)
        })
    } else d({
        scope: g.scope,
        sessions: []
    })
};
m.jc = function(a) {
    if (document.hasStorageAccess && Bd(document.hasStorageAccess)) {
        var b = this;
        document.hasStorageAccess().then(function(c) {
            U(b.g, a.id, {
                hasAccess: c
            })
        }, function(c) {
            G("CheckStorageAccess failed: " + c);
            U(b.g, a.id, {
                hasAccess: !1
            })
        })
    } else U(this.g, a.id, {
        hasAccess: !0
    })
};
m.Oc = function(a) {
    a = a && a.params || {};
    return a.clientId && !P(a.clientId)
};
m.Ec = function(a) {
    var b = a && a.params || {};
    a = b.loginHint;
    var c = !P(b.id),
        d = b.clientId && !P(b.clientId),
        e = !!b.request,
        g = e && b.request.scope;
    (b = (e = e && b.request.response_type) && 0 <= b.request.response_type.indexOf("code")) && G("Bad request: 'code' response_type is not supported.");
    return a && c && d && g && e && !b
};
m.Ac = function(a) {
    a = a && a.params || {};
    var b = !P(a.id),
        c = a.clientId && !P(a.clientId),
        d = !!a.request && a.request.scope;
    return a.loginHint && b && c && d
};
m.Cc = function(a) {
    a = a && a.params || {};
    var b = a.domain && !P(a.domain),
        c = !P(a.policy);
    return !P(a.id) && b && c && this.j.F(a.domain, !!a.crossSubDomains, a.policy)
};
m.cd = function(a) {
    a = a && a.params || {};
    var b = a.domain && !P(a.domain),
        c = !P(a.policy);
    return !P(a.id) && b && c && this.j.F(a.domain, !!a.crossSubDomains, a.policy) && O.fc(a)
};
m.Lc = function(a) {
    a = a && a.params || {};
    var b = a.clientId && !P(a.clientId),
        c = !!a.request && a.request.scope;
    return !P(a.id) && b && c
};
m.Yc = function(a) {
    a = a && a.params || {};
    var b = !!a.token,
        c = a.clientId && !P(a.clientId);
    return !P(a.id) && b && c
};
m.kd = function(a) {
    a = a && a.params || {};
    var b = a.origin && !P(a.origin),
        c = a.id && !P(a.id);
    return a.clientId && !P(a.clientId) && b && c
};
m.$c = function(a) {
    var b;
    if (b = a.clientId) a = a.clientId, b = !(!a || !this.P.D[a]);
    return b
};
m.hc = function(a) {
    var b;
    if (b = a.clientId) b = a.clientId, b = !(!b || !this.P.D[b]);
    return b && a.id && a.authResult
};
m.oc = function(a) {
    return !!a.hide || !!a.options
};
m.Zc = function(a) {
    return a.domain && this.j.F(a.domain, a.crossSubDomains, a.policy)
};
var Y = function(a, b) {
    return function() {
        return b.apply(a, arguments)
    }
};
X.prototype.createPolicy = function() {
    var a = {
        A: [],
        M: [],
        ba: []
    };
    Ye(this, a);
    return a
};
var Ye = function(a, b) {
    b.A.push({
        method: "monitorClient",
        i: Y(a, a.Nc),
        O: !1,
        s: Y(a, a.Oc)
    });
    b.A.push({
        method: "getTokenResponse",
        i: Y(a, a.wc),
        O: !0,
        s: Y(a, a.Ec)
    });
    b.A.push({
        method: "getOnlineCode",
        i: Y(a, a.zc),
        O: !0,
        s: Y(a, a.Ac)
    });
    b.A.push({
        method: "getSessionSelector",
        i: Y(a, a.vc),
        O: !0,
        s: Y(a, a.Cc)
    });
    b.A.push({
        method: "setSessionSelector",
        i: Y(a, a.bd),
        O: !1,
        s: Y(a, a.cd)
    });
    b.A.push({
        method: "listIdpSessions",
        i: Y(a, a.Kc),
        O: !0,
        s: Y(a, a.Lc)
    });
    b.A.push({
        method: "revoke",
        i: Y(a, a.Xc),
        s: Y(a, a.Yc)
    });
    b.A.push({
        method: "startPolling",
        i: Y(a, a.jd),
        s: Y(a, a.kd)
    });
    b.M.push({
        type: "idpReady"
    });
    b.M.push({
        type: "idpError"
    });
    b.M.push({
        type: "sessionStateChanged",
        filter: Y(a, a.$c)
    });
    b.M.push({
        type: "sessionSelectorChanged",
        filter: Y(a, a.Zc)
    });
    b.M.push({
        type: "authResult",
        filter: Y(a, a.hc)
    });
    b.M.push({
        type: "displayIFrame",
        filter: Y(a, a.oc)
    });
    b.A.push({
        method: "checkStorageAccess",
        i: Y(a, a.jc),
        O: !0
    })
};
var Ze = "client_id origin ss_domain scope privileged authuser".split(" ");
O.wa = "response_type login_hint client_id origin scope ss_domain authuser hd include_granted_scopes nonce spec_compliant".split(" ");
var af = function(a, b, c) {
    b.origin = a.h;
    b.privileged = !0;
    b = je(b, Ze);
    ge(O.Ka, b, $e(a.h), function(d) {
        c(d)
    })
};

function $e(a) {
    var b = {},
        c = N.U(O.Bc());
    if (c) {
        if (!c) throw Error("Session cookie value cannot be empty.");
        c = new yb(new zb, Aa(c));
        a = Aa(a);
        c.reset();
        c.update(a);
        a = c.digest();
        var d;
        c = v(a);
        w("array" == c || "object" == c && "number" == typeof a.length, "encodeByteArray takes an array as a parameter");
        void 0 === d && (d = 0);
        if (!wb) {
            wb = {};
            c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
            for (var e = ["+/=", "+/", "-_=", "-_.", "-_"], g = 0; 5 > g; g++) {
                var f = c.concat(e[g].split(""));
                vb[g] = f;
                for (var h = 0; h < f.length; h++) {
                    var k =
                        f[h],
                        l = wb[k];
                    void 0 === l ? wb[k] = h : w(l === h)
                }
            }
        }
        d = vb[d];
        c = [];
        for (e = 0; e < a.length; e += 3) {
            l = a[e];
            var n = (g = e + 1 < a.length) ? a[e + 1] : 0;
            k = (f = e + 2 < a.length) ? a[e + 2] : 0;
            h = l >> 2;
            l = (l & 3) << 4 | n >> 4;
            n = (n & 15) << 2 | k >> 6;
            k &= 63;
            f || (k = 64, g || (n = 64));
            c.push(d[h], d[l], d[n] || "", d[k] || "")
        }
        b["X-Csrf-Token"] = c.join("")
    }
    return b
};
var bf = function() {};
J(bf, T);
bf.prototype.l = function(a) {
    a = void 0 === a ? {} : a;
    return ["gsi_gs", void 0 === a.origin ? null : a.origin, void 0 === a.clientId ? null : a.clientId].join(O.m)
};
bf.prototype.B = function(a, b, c) {
    var d = this;
    c = void 0 === c ? function() {} : c;
    T.prototype.B.call(this, a, b, function(e) {
        e ? !e.expires_at || e.expires_at <= (new Date).getTime() ? S(d).removeItem(d.l(a), function() {
            return c(null)
        }) : (e.expires_at = void 0, c(e)) : c(null)
    })
};
bf.prototype.C = function(a, b, c, d) {
    b && (b.expires_at = (new Date).getTime() + 864E5);
    T.prototype.C.call(this, a, b, c, d)
};
X.prototype.tc = function(a) {
    var b = this;
    a = void 0 === a ? {} : a;
    var c = a.id,
        d = void 0 === a.params ? {} : a.params,
        e = function(n) {
            n && n.sessions ? (n = cf(g, n.sessions), U(b.g, c, n)) : U(b.g, c, null)
        },
        g = d.loginHint;
    delete d.loginHint;
    var f = Q(this.v);
    if (f) {
        a = d.clientId;
        var h = d.request;
        d = d.sessionSelector;
        h.client_id = a;
        h.ss_domain = d.domain;
        var k = new bf,
            l = {
                clientId: a,
                origin: this.h
            };
        k.B(l, f, function(n) {
            n ? e(n) : af(b.K, h, function(r) {
                !r || r.error ? e(null) : k.C(l, r, f, function() {
                    e(r)
                })
            })
        })
    } else e(null)
};

function cf(a, b) {
    if (!b.length) return null;
    var c = a.toLowerCase();
    b = p(b);
    for (var d = b.next(); !d.done; d = b.next())
        if (d = d.value, d.login_hint) {
            if (a === d.obfuscatedGaiaId) return d.login_hint;
            if (d.emails && d.emails.length)
                for (var e = p(d.emails), g = e.next(); !g.done; g = e.next())
                    if (c === g.value.toLowerCase()) return d.login_hint
        }
    return null
}
X.prototype.fd = function(a) {
    df(this, a, !1)
};
X.prototype.gd = function(a) {
    df(this, a, !0)
};
var df = function(a, b, c) {
    document.requestStorageAccess && Bd(document.requestStorageAccess) ? document.hasStorageAccess().then(function(d) {
        if (d) U(a.g, b.id, {
            hasAccess: !0
        });
        else {
            d = new Tc({
                origin: a.h
            });
            var e = document.getElementById("container");
            (c ? d.Uc : d.Tc).call(d, e, function() {
                Be(a.g);
                U(a.g, b.id, {
                    hasAccess: !0
                })
            }, function() {
                Be(a.g);
                U(a.g, b.id, {
                    hasAccess: !1
                })
            });
            Ae(a.g)
        }
    }, function(d) {
        G("StorageAccess check failed: " + d);
        U(a.g, b.id, {
            hasAccess: !1
        })
    }) : U(a.g, b.id, {
        hasAccess: !0
    })
};
X.prototype.uc = function(a) {
    a = void 0 === a ? {} : a;
    a = void 0 === a.params ? {} : a.params;
    var b = !!a.clientId && !P(a.clientId),
        c = !!a.request,
        d = !!a.sessionSelector;
    return !!a.loginHint && b && c && d
};
X.prototype.createPolicy = function() {
    var a = {
        A: [],
        ba: [],
        M: []
    };
    Ye(this, a);
    a.A.push({
        method: "gsi:fetchLoginHint",
        i: Y(this, this.tc),
        O: !0,
        s: Y(this, this.uc)
    });
    a.ba.push({
        ca: "itpNewGrant",
        i: Y(this, this.fd)
    });
    a.ba.push({
        ca: "itpRegrant",
        i: Y(this, this.gd)
    });
    return a
};
O.La = "APISID";
O.tb = "SAPISID";
O.vb = "/o/oauth2/iframerpc?action=sessionState";
O.ob = "/o/oauth2/iframerpc?action=checkOrigin";
O.sb = "/o/oauth2/iframerpc?action=issueToken";
O.rb = "/o/oauth2/iframerpc?action=issueOnlineCode";
O.Ka = "/o/oauth2/iframerpc?action=listSessions";
var ef = function() {
        var a = Dd("origin");
        if (!a) throw "Failed to get parent origin from URL hash!";
        var b = Dd("rpcToken");
        if (!b) throw "Failed to get rpcToken from URL hash!";
        var c = !!Dd("clearCache"),
            d = Dd("debug");
        Ad = "0" != d && !!d;
        (new X(a, b, c)).start()
    },
    ff = ["lso", "startIdpIFrame"],
    Z = u;
ff[0] in Z || "undefined" == typeof Z.execScript || Z.execScript("var " + ff[0]);
for (var gf; ff.length && (gf = ff.shift());) ff.length || void 0 === ef ? Z = Z[gf] && Z[gf] !== Object.prototype[gf] ? Z[gf] : Z[gf] = {} : Z[gf] = ef;