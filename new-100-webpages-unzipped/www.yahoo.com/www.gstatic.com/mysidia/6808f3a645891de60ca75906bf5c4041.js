(function() {
    'use strict';
    var ba = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        f;
    if ("function" == typeof Object.setPrototypeOf) f = Object.setPrototypeOf;
    else {
        var g;
        a: {
            var ca = {
                    h: !0
                },
                h = {};
            try {
                h.__proto__ = ca;
                g = h.h;
                break a
            } catch (a) {}
            g = !1
        }
        f = g ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var k = f;

    function l(a, b) {
        a.prototype = ba(b.prototype);
        a.prototype.constructor = a;
        if (k) k(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }
    var n = this || self;

    function p(a) {
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
    var da = Date.now || function() {
        return +new Date
    };

    function ea(a) {
        var b = ["mys", "design", "init"],
            c = n;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function q(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var fa = Array.prototype.forEach ? function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function r(a) {
        r[" "](a);
        return a
    }
    r[" "] = function() {};

    function t() {}
    var ha = "function" == typeof Uint8Array;

    function u(a, b, c) {
        a.b = null;
        b || (b = []);
        a.j = void 0;
        a.f = -1;
        a.a = b;
        a: {
            if (b = a.a.length) {
                --b;
                var d = a.a[b];
                if (null !== d && "object" == typeof d && "array" != p(d) && !(ha && d instanceof Uint8Array)) {
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
                if (d = c[b], d < a.g) d += a.f, a.a[d] = a.a[d] || v;
                else {
                    var e = a.g + a.f;
                    a.a[e] || (a.c = a.a[e] = {});
                    a.c[d] = a.c[d] || v
                }
    }
    var v = [];

    function w(a, b) {
        if (b < a.g) {
            b += a.f;
            var c = a.a[b];
            return c === v ? a.a[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === v ? a.c[b] = [] : c
    }

    function ia(a) {
        a = w(a, 2);
        return null == a ? 0 : a
    }

    function x(a, b) {
        a = w(a, b);
        a = null == a ? a : !!a;
        return null == a ? !1 : a
    }

    function y(a, b, c) {
        a.b || (a.b = {});
        if (!a.b[c]) {
            var d = w(a, c);
            d && (a.b[c] = new b(d))
        }
        return a.b[c]
    }

    function z(a) {
        if (a.b)
            for (var b in a.b) {
                var c = a.b[b];
                if ("array" == p(c))
                    for (var d = 0; d < c.length; d++) c[d] && A(c[d]);
                else c && A(c)
            }
    }

    function A(a) {
        z(a);
        return a.a
    }
    t.prototype.toString = function() {
        z(this);
        return this.a.toString()
    };

    function B(a) {
        u(this, a, ka)
    }
    q(B, t);
    var ka = [17];

    function C(a) {
        u(this, a, la)
    }
    q(C, t);
    var la = [27];

    function D(a) {
        u(this, a, ma)
    }
    q(D, t);
    var ma = [8];
    var E = document;

    function F() {
        var a = G;
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    r(a.foo);
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
    var H = !!window.google_async_iframe_id,
        G = H && window.parent || window;
    var I = null;

    function na(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var J = n.performance,
        oa = !!(J && J.mark && J.measure && J.clearMarks),
        K = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(function() {
            var a;
            if (a = oa) {
                var b;
                if (null === I) {
                    I = "";
                    try {
                        a = "";
                        try {
                            a = n.top.location.hash
                        } catch (c) {
                            a = n.location.hash
                        }
                        a && (I = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = I;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function L() {
        var a = M;
        this.a = [];
        this.c = a || n;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.a = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.b = K() || (null != b ? b : 1 > Math.random())
    }

    function pa(a) {
        a && J && K() && (J.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), J.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    L.prototype.start = function(a, b) {
        if (!this.b) return null;
        var c = void 0 === c ? n : c;
        c = c.performance;
        (c = c && c.now ? c.now() : null) || (c = (c = n.performance) && c.now && c.timing ? Math.floor(c.now() + c.timing.navigationStart) : da());
        a = new na(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        J && K() && J.mark(b);
        return a
    };
    if (H && !F()) {
        var N = "." + E.domain;
        try {
            for (; 2 < N.split(".").length && !F();) E.domain = N = N.substr(N.indexOf(".") + 1), G = window.parent
        } catch (a) {}
        F() || (G = window)
    }
    var M = G,
        O = new L;

    function P() {
        M.google_measure_js_timing || (O.b = !1, O.a != O.c.google_js_reporting_queue && (K() && fa(O.a, pa), O.a.length = 0))
    }
    "number" !== typeof M.google_srt && (M.google_srt = Math.random());
    if ("complete" == M.document.readyState) P();
    else if (O.b) {
        var qa = function() {
                P()
            },
            Q = M;
        Q.addEventListener && Q.addEventListener("load", qa, !1)
    };

    function ra() {};

    function R(a, b) {
        a = a.getElementsByTagName("META");
        for (var c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content");
        return ""
    }

    function S(a, b, c) {
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

    function T(a, b) {
        this.b = a;
        this.a = b;
        a = R(b, "namespace");
        a || (a = "ns-" + Math.random().toString(36).substr(2, 5), S(b, "namespace", a))
    }
    T.prototype.dispatchEvent = function(a, b) {
        a = null == b ? new CustomEvent(a) : new CustomEvent(a, {
            detail: b
        });
        this.a.dispatchEvent(a)
    };

    function U() {
        this.a = {};
        this.b = {};
        this.c = {}
    }
    U.prototype.set = function(a, b) {
        this.a[a] = b
    };
    U.prototype.get = function(a) {
        return this.a[a]
    };

    function sa(a, b) {
        if (b) {
            b = JSON.parse(b);
            for (var c in b) a.set(c, b[c])
        }
    };

    function V(a) {
        this.context = a;
        this.a = new U
    }
    l(V, ra);

    function ta(a, b) {
        this.b = a;
        this.a = b
    }

    function ua(a) {
        if (!mys.Engine) throw Error("MysidiaJsError[2] ");
        var b = a.a.b,
            c = a.a.a;
        sa(a.b.a, R(c, "runtime_data"));
        var d = R(c, "render_config");
        if (!d) throw Error("MysidiaJsError[35] ");
        var e = new D(d ? JSON.parse(d) : null),
            m = mys.Engine.create(b, c, A(e)),
            Y = 0;
        c.addEventListener("browserRender", function() {
            ++Y;
            if (1 == Y) a.a.dispatchEvent("overallStart"), va(a, e), m.enable().then(function() {
                a.a.dispatchEvent("overallQuiet")
            });
            else {
                var Z = c.clientWidth,
                    aa = c.clientHeight;
                Z && aa && m.enable(Z, aa)
            }
        })
    }

    function va(a, b) {
        if (!(2 == ia(b) || y(y(b, C, 1), B, 10) && x(y(y(b, C, 1), B, 10), 16))) {
            var c = a.a.a;
            c.addEventListener("browserStart", function() {
                if (y(y(b, C, 1), B, 10) && x(y(y(b, C, 1), B, 10), 15)) {
                    var d = a.b.a;
                    for (var e in d.c) d.a.hasOwnProperty(e) || d.set(e, JSON.stringify(d.c[e]));
                    for (var m in d.b) d.a.hasOwnProperty(m) || d.set(m, JSON.stringify(d.b[m]));
                    (d = (d = JSON.stringify(d.a)) && "{}" != d ? d : "") && S(c, "runtime_data", d)
                }
            });
            c.addEventListener("browserReady", function() {});
            c.addEventListener("browserQuiet", function() {})
        }
    };

    function W(a) {
        V.call(this, a)
    }
    l(W, V);

    function X() {
        W.apply(this, arguments)
    }
    l(X, W);

    function wa() {
        X.apply(this, arguments)
    }
    l(wa, X);
    (function(a) {
        ea(function(b, c) {
            b = new T(b, c);
            c = a(b);
            ua(new ta(c, b))
        })
    })(function(a) {
        return new wa(a)
    });
}).call(this);