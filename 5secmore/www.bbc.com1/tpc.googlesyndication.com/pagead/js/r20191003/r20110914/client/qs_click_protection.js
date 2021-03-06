(function() {
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

    function f(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        da = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ea(a, b) {
        if (b) {
            var c = da;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && ca(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    var fa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    ea("Object.assign", function(a) {
        return a || fa
    });
    var n = this || self;

    function ha() {}

    function q(a) {
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

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
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

    function w(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = ia : w = ja;
        return w.apply(null, arguments)
    }
    var x = Date.now || function() {
        return +new Date
    };

    function y(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.C = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var A = Array.prototype.forEach ? function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function ka(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function B(a, b) {
        this.b = a === C && b || "";
        this.c = la
    }
    B.prototype.f = !0;
    B.prototype.a = function() {
        return this.b.toString()
    };
    var ma = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function na(a) {
        if (a instanceof B) return a;
        a = "object" == typeof a && a.f ? a.a() : String(a);
        ma.test(a) || (a = "about:invalid#zClosurez");
        return new B(C, a)
    }
    var la = {},
        C = {};

    function D(a) {
        D[" "](a);
        return a
    }
    D[" "] = ha;

    function E() {}
    var oa = "function" == typeof Uint8Array;

    function F(a, b, c) {
        a.a = null;
        b || (b = []);
        a.j = void 0;
        a.f = -1;
        a.b = b;
        a: {
            if (b = a.b.length) {
                --b;
                var d = a.b[b];
                if (!(null === d || "object" != typeof d || "array" == q(d) || oa && d instanceof Uint8Array)) {
                    a.g = b - a.f;
                    a.c = d;
                    break a
                }
            }
            a.g = Number.MAX_VALUE
        }
        a.i = {};
        if (c)
            for (b = 0; b < c.length; b++)
                if (d = c[b], d < a.g) d += a.f, a.b[d] = a.b[d] || G;
                else {
                    var e = a.g + a.f;
                    a.b[e] || (a.c = a.b[e] = {});
                    a.c[d] = a.c[d] || G
                }
    }
    var G = [];

    function H(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.b[b];
            return c === G ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === G ? a.c[b] = [] : c
    }

    function I(a, b, c) {
        a = H(a, b);
        return null == a ? c : a
    }

    function J(a, b) {
        a = H(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function qa(a) {
        var b = K;
        a.a || (a.a = {});
        if (!a.a[1]) {
            var c = H(a, 1);
            c && (a.a[1] = new b(c))
        }
        return a.a[1]
    }

    function ra(a) {
        var b = sa;
        a.a || (a.a = {});
        if (!a.a[1]) {
            for (var c = H(a, 1), d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
            a.a[1] = d
        }
        b = a.a[1];
        b == G && (b = a.a[1] = []);
        return b
    }
    E.prototype.toString = function() {
        return this.b.toString()
    };

    function K(a) {
        F(this, a, ta)
    }
    y(K, E);

    function sa(a) {
        F(this, a, null)
    }
    y(sa, E);
    var ta = [1];

    function ua(a) {
        F(this, a, null)
    }
    y(ua, E);
    var L = document,
        M = window;

    function va(a, b, c) {
        if ("array" == q(b))
            for (var d = 0; d < b.length; d++) va(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function N() {
        var a = O;
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    D(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    };
    var wa = {
            capture: !0
        },
        xa = {
            passive: !0
        },
        ya = ka(function() {
            var a = !1;
            try {
                var b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                n.addEventListener("test", null, b)
            } catch (c) {}
            return a
        });

    function za(a) {
        return a ? a.passive && ya() ? a : a.capture || !1 : !1
    }

    function P(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, za(d))
    };
    var Aa = /^((market|itms|intent|itms-appss):\/\/)/i;

    function Ba() {
        var a = (Ca() ? "http:" : "https:") + "//pagead2.googlesyndication.com/pagead/gen_204";
        return function(b) {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) va(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                0 > b && (b = a.length);
                c = a.indexOf("?");
                if (0 > c || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.substr(0, c), e, a.substr(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };

    function Da(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Ca() {
        var a = void 0 === a ? M : a;
        return "http:" === a.location.protocol
    }
    var Ea = !!window.google_async_iframe_id,
        O = Ea && window.parent || window;

    function Fa(a, b) {
        a && Da(b, function(c, d) {
            a.style[d] = c
        })
    }

    function Ga(a) {
        for (var b = L.body, c = document.createDocumentFragment(), d = a.length, e = 0; e < d; ++e) c.appendChild(a[e]);
        b.appendChild(c)
    };

    function Ha(a) {
        a = void 0 === a ? [] : a;
        n.google_logging_queue || (n.google_logging_queue = []);
        n.google_logging_queue.push([12, a])
    };
    var Q = null;

    function Ia(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var R = n.performance,
        Ja = !!(R && R.mark && R.measure && R.clearMarks),
        S = ka(function() {
            var a;
            if (a = Ja) {
                var b;
                if (null === Q) {
                    Q = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (Q = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Q;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ka() {
        var a = T;
        this.a = [];
        this.c = a || n;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.a = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.b = S() || (null != b ? b : 1 > Math.random())
    }

    function La(a) {
        a && R && S() && (R.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), R.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Ka.prototype.start = function(a, b) {
        if (!this.b) return null;
        var c = void 0 === c ? n : c;
        c = c.performance;
        (c = c && c.now ? c.now() : null) || (c = (c = n.performance) && c.now && c.timing ? Math.floor(c.now() + c.timing.navigationStart) : x());
        a = new Ia(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        R && S() && R.mark(b);
        return a
    };
    if (Ea && !N()) {
        var U = "." + L.domain;
        try {
            for (; 2 < U.split(".").length && !N();) L.domain = U = U.substr(U.indexOf(".") + 1), O = window.parent
        } catch (a) {}
        N() || (O = window)
    }
    var T = O,
        V = new Ka;

    function Ma() {
        T.google_measure_js_timing || (V.b = !1, V.a != V.c.google_js_reporting_queue && (S() && A(V.a, La), V.a.length = 0))
    }
    "number" !== typeof T.google_srt && (T.google_srt = Math.random());
    "complete" == T.document.readyState ? Ma() : V.b && P(T, "load", function() {
        Ma()
    });

    function W() {
        this.b = this.b;
        this.c = this.c
    }
    W.prototype.b = !1;

    function Na(a) {
        a.b || (a.b = !0, a.f())
    }
    W.prototype.f = function() {
        if (this.c)
            for (; this.c.length;) this.c.shift()()
    };

    function X(a, b, c) {
        W.call(this);
        this.g = a;
        this.u = b || 0;
        this.i = c;
        this.j = w(this.o, this)
    }
    y(X, W);
    X.prototype.a = 0;
    X.prototype.f = function() {
        X.C.f.call(this);
        this.stop();
        delete this.g;
        delete this.i
    };
    X.prototype.start = function(a) {
        this.stop();
        var b = this.j;
        a = void 0 !== a ? a : this.u;
        if ("function" != q(b))
            if (b && "function" == typeof b.handleEvent) b = w(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.a = 2147483647 < Number(a) ? -1 : n.setTimeout(b, a || 0)
    };
    X.prototype.stop = function() {
        0 != this.a && n.clearTimeout(this.a);
        this.a = 0
    };
    X.prototype.o = function() {
        this.a = 0;
        this.g && this.g.call(this.i)
    };

    function Oa(a) {
        var b = void 0 === b ? null : b;
        P(M, "message", function(c) {
            try {
                var d = JSON.parse(c.data)
            } catch (e) {
                return
            }!d || "ig" !== d.googMsgType || b && /[:|%3A]javascript\(/i.test(c.data) && !b(d, c) || a(d, c)
        })
    };
    var Pa = {
            display: "inline-block",
            position: "absolute"
        },
        Qa = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        };

    function Y(a, b) {
        a && (a.style.display = (void 0 === b ? 0 : b) ? "none" : "inline-block")
    }

    function Ra() {
        this.g = [];
        this.i = this.b = null;
        this.A = [];
        this.a = null;
        this.u = [];
        this.f = [];
        this.j = [];
        this.o = {};
        this.B = [];
        this.c = null
    }
    Ra.prototype.init = function(a) {
        var b = this;
        Ha([a]);
        this.a = new ua(a);
        a = qa(this.a);
        A(ra(a), function(l) {
            b.j.push({
                v: 0,
                m: !1,
                w: 0,
                h: l,
                s: -1
            })
        });
        try {
            var c = L.querySelectorAll("*[data-ifc]")
        } catch (l) {
            c = []
        }
        this.f = c;
        var d = !1;
        c = this.f.length;
        for (a = {
                l: 0
            }; a.l < c; a = {
                l: a.l
            }, ++a.l) {
            var e = new K(JSON.parse(this.f[a.l].getAttribute("data-ifc") || "[]"));
            A(ra(e), function(l) {
                return function(k) {
                    b.j.push({
                        v: 0,
                        m: !1,
                        w: 0,
                        h: k,
                        s: l.l
                    });
                    1 === I(k, 4, 1) && (d = !0)
                }
            }(a))
        }
        c = !1;
        a = f(this.j);
        for (e = a.next(); !e.done; e = a.next()) {
            e = e.value;
            var t = e.h;
            0 < I(t, 2, 0) && 0 < I(t, 5, 1) ? (!this.b && J(t, 9) && (this.b = Sa(this, Qa)), Ta(this, e)) : I(t, 1, "") && J(t, 9) && Ua(this, I(t, 1, ""));
            I(t, 1, "") && (c = !0)
        }
        a = this.g.slice(0);
        this.b && a.push(this.b);
        !d && L.body && Ga(a);
        P(L, "click", function(l) {
            for (var k, r = -1, ba = [], pa = f(b.j), u = pa.next(); !u.done; u = pa.next()) {
                u = u.value;
                var g = u.s,
                    h = -1 !== g;
                if (!(I(u.h, 3, 0) <= r || u.m || h && !1 === ba[g])) {
                    var p = !h || ba[g] || b.f[g].contains(l.target);
                    h && p && (ba[g] = !0);
                    if (g = p)
                        if (p = l, g = u, h = g.h, 0 < I(h, 2, 0) && 0 < I(h, 5, 1)) g = b.o[I(h, 5, 1)], g = void 0 !== g && x() < g + I(h, 2, 0);
                        else if (I(h, 1, "")) {
                        h = 0 <= g.s ? b.f[g.s] : L.body;
                        var z = b.c && J(b.a, 12) && 500 > p.timeStamp - b.c.timeStamp;
                        z = f(z ? [b.c.changedTouches[0].clientX, b.c.changedTouches[0].clientY] : [p.clientX, p.clientY]);
                        p = z.next().value;
                        z = z.next().value;
                        h = h.getBoundingClientRect();
                        var v = parseFloat(L.body.style.zoom || 1);
                        v = f([p / v - h.left, z / v - h.top, h.width, h.height]);
                        h = v.next().value;
                        p = v.next().value;
                        z = v.next().value;
                        v = v.next().value;
                        !(0 < z && 0 < v) || isNaN(h) || isNaN(p) || 0 > h || 0 > p ? g = !1 : (g = Va(I(g.h, 1, "")), g = !(h >= g.left && z - h > g.right && p >= g.top && v - p > g.bottom))
                    } else g = !0;
                    g && (k = u, r = I(u.h, 3, 0))
                }
            }
            if (k) switch (r = k.h, I(r, 4, 1)) {
                case 2:
                case 3:
                    var m = void 0 === m ? !1 : m;
                    l.preventDefault ? l.preventDefault() : l.returnValue = !1;
                    m && l.stopPropagation();
                    m = x();
                    500 < m - k.w && (k.w = m, ++k.v);
                    m = k.h;
                    if (I(m, 8, 0) && k.v >= I(m, 8, 0))
                        if (k.m = !0, b.b && 0 < I(m, 2, 0)) Wa(b);
                        else if (0 < b.g.length && I(m, 1, ""))
                        for (m = f(b.g), k = m.next(); !k.done; k = m.next()) Y(k.value, !0);
                    m = r.b;
                    k = f(b.u);
                    for (r = k.next(); !r.done; r = k.next()) r = r.value, r(l, m)
            }
        }, wa);
        c && J(this.a, 12) && P(L, "touchend", function(l) {
            b.c = l
        }, xa)
    };
    Ra.prototype.registerCallback = function(a) {
        this.u.push(a)
    };

    function Ua(a, b) {
        b = Va(b);
        var c = I(a.a, 9, 0);
        a.g = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(function(d) {
            return Sa(a, d, 9019)
        })
    }

    function Z(a, b) {
        if (!b.m) {
            var c = I(b.h, 5, 1);
            a.o[c] = x();
            J(b.h, 9) && (a.A.push(b), Wa(a))
        }
    }

    function Ta(a, b) {
        switch (I(b.h, 5, 1)) {
            case 2:
                M.AFMA_Communicator && M.AFMA_Communicator.addEventListener && M.AFMA_Communicator.addEventListener("onshow", function() {
                    Z(a, b)
                });
                break;
            case 4:
                P(L, "DOMContentLoaded", function() {
                    Z(a, b)
                });
                break;
            case 8:
                Oa(function(d) {
                    d.rr && Z(a, b)
                });
                break;
            case 9:
                if (M.IntersectionObserver) {
                    var c = new IntersectionObserver(function(d) {
                        d = f(d);
                        for (var e = d.next(); !e.done; e = d.next())
                            if (0 < e.value.intersectionRatio) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(L.body);
                    a.B.push(c)
                }
        }
    }

    function Wa(a) {
        for (var b = 0, c = f(a.A), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = d.h,
                t = a.o[I(e, 5, 1)];
            d.m || void 0 === t || (b = Math.max(b, t + I(e, 2, 0)))
        }
        a.i && Na(a.i);
        b -= x();
        var l = a.b;
        0 < b ? (Y(l), a.i = new X(function() {
            Y(l, !0)
        }, b), a.i.start()) : Y(l, !0)
    }

    function Sa(a, b, c) {
        var d = L.createElement("DIV");
        Fa(d, Object.assign(Pa, {
            "z-index": void 0 === c ? 2147483647 : c
        }, b));
        J(a.a, 10) && P(d, "click", ha);
        if (J(a.a, 11)) {
            a = L.createElement("A");
            b = Ba();
            var e;
            Aa.test("#") ? e = new B(C, "#") : e = "#";
            "about:invalid#zClosurez" === (e instanceof B ? e : na(e)).a() && b(String(e));
            e = e instanceof B ? e : na(e);
            a.href = e instanceof B && e.constructor === B && e.c === la ? e.b : "type_error:SafeUrl";
            a.appendChild(d);
            return a
        }
        return d
    }

    function Va(a) {
        a = void 0 === a ? "" : a;
        var b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 == a.length && a.reduce(function(c, d) {
            return c && !isNaN(d)
        }, !0) && (a = f(a.map(function(c) {
            return +c
        })), b.top = a.next().value, b.right = a.next().value, b.bottom = a.next().value, b.left = a.next().value));
        return b
    };
    window.googqscp = new Ra;
}).call(this);