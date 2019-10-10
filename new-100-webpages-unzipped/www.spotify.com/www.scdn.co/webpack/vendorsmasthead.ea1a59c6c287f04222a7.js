(window.wwwWebpack = window.wwwWebpack || []).push([
    [5], {
        359: function(n, e, t) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.renderSvelte = void 0;
            var r = function(n) {
                if (n && n.__esModule) return n;
                var e = {};
                if (null != n)
                    for (var t in n)
                        if (Object.prototype.hasOwnProperty.call(n, t)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(n, t) : {};
                            r.get || r.set ? Object.defineProperty(e, t, r) : e[t] = n[t]
                        }
                return e.default = n, e
            }(t(153));
            e.renderSvelte = function(n, e) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    o = t.includeCss;
                return (0, r.default)({
                    server: function() {
                        return function(t) {
                            var a = e.render(t),
                                s = a.css,
                                i = a.html,
                                l = (0, r.serialize)(n, i, t),
                                c = "";
                            return o && s && s.code && (c = '<style type="text/css">'.concat(s.code, "</style>\n")), "".concat(c).concat(l)
                        }
                    },
                    client: function() {
                        var t = (0, r.load)(n);
                        return t && t.forEach(function(n) {
                            var t = n.node,
                                r = n.data;
                            new e({
                                target: t,
                                props: r,
                                hydrate: !0
                            })
                        }), e
                    }
                })
            }
        },
        360: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, "Footer", function() {
                return Rt
            }), t.d(e, "Header", function() {
                return ct
            });
            t(135), t(110), t(144), t(121), t(123), t(133), t(106), t(107), t(95), t(122), t(134), t(113), t(125), t(152), t(60), t(120), t(96), t(142), t(129), t(148), t(124);

            function r(n) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                })(n)
            }

            function o(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                }
            }

            function s(n, e, t) {
                return e && a(n.prototype, e), t && a(n, t), n
            }

            function i(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }

            function l(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), r.forEach(function(e) {
                        i(n, e, t[e])
                    })
                }
                return n
            }

            function c(n, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        writable: !0,
                        configurable: !0
                    }
                }), e && f(n, e)
            }

            function u(n) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                    return n.__proto__ || Object.getPrototypeOf(n)
                })(n)
            }

            function f(n, e) {
                return (f = Object.setPrototypeOf || function(n, e) {
                    return n.__proto__ = e, n
                })(n, e)
            }

            function m(n) {
                if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return n
            }

            function d(n, e) {
                return !e || "object" != typeof e && "function" != typeof e ? m(n) : e
            }

            function h(n, e) {
                return function(n) {
                    if (Array.isArray(n)) return n
                }(n) || function(n, e) {
                    var t = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var s, i = n[Symbol.iterator](); !(r = (s = i.next()).done) && (t.push(s.value), !e || t.length !== e); r = !0);
                    } catch (n) {
                        o = !0, a = n
                    } finally {
                        try {
                            r || null == i.return || i.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return t
                }(n, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function v(n) {
                return function(n) {
                    if (Array.isArray(n)) {
                        for (var e = 0, t = new Array(n.length); e < n.length; e++) t[e] = n[e];
                        return t
                    }
                }(n) || function(n) {
                    if (Symbol.iterator in Object(n) || "[object Arguments]" === Object.prototype.toString.call(n)) return Array.from(n)
                }(n) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function p() {}
            var g = function(n) {
                return n
            };

            function N(n, e) {
                for (var t in e) n[t] = e[t];
                return n
            }

            function $(n) {
                return n()
            }

            function b() {
                return Object.create(null)
            }

            function C(n) {
                n.forEach($)
            }

            function y(n) {
                return "function" == typeof n
            }

            function k(n, e) {
                return n != n ? e == e : n !== e || n && "object" === r(n) || "function" == typeof n
            }

            function w(n, e, t) {
                return n[1] ? N({}, N(e.$$scope.ctx, n[1](t ? t(e) : {}))) : e.$$scope.ctx
            }
            var A, x = new Set,
                E = !1;

            function L() {
                x.forEach(function(n) {
                    n[0](window.performance.now()) || (x.delete(n), n[1]())
                }), (E = x.size > 0) && requestAnimationFrame(L)
            }

            function M(n) {
                var e;
                return E || (E = !0, requestAnimationFrame(L)), {
                    promise: new Promise(function(t) {
                        x.add(e = [n, t])
                    }),
                    abort: function() {
                        x.delete(e)
                    }
                }
            }

            function I(n, e) {
                n.appendChild(e)
            }

            function O(n, e, t) {
                n.insertBefore(e, t || null)
            }

            function T(n) {
                n.parentNode.removeChild(n)
            }

            function _(n, e) {
                for (var t = 0; t < n.length; t += 1) n[t] && n[t].d(e)
            }

            function D(n) {
                return document.createElement(n)
            }

            function P(n) {
                return document.createElementNS("http://www.w3.org/2000/svg", n)
            }

            function z(n) {
                return document.createTextNode(n)
            }

            function j() {
                return z(" ")
            }

            function B() {
                return z("")
            }

            function S(n, e, t, r) {
                return n.addEventListener(e, t, r),
                    function() {
                        return n.removeEventListener(e, t, r)
                    }
            }

            function W(n, e, t) {
                null == t ? n.removeAttribute(e) : n.setAttribute(e, t)
            }

            function H(n, e) {
                for (var t in e) "style" === t ? n.style.cssText = e[t] : t in n ? n[t] = e[t] : W(n, t, e[t])
            }

            function V(n) {
                return Array.from(n.childNodes)
            }

            function G(n, e, t, r) {
                for (var o = 0; o < n.length; o += 1) {
                    var a = n[o];
                    if (a.nodeName === e) {
                        for (var s = 0; s < a.attributes.length; s += 1) {
                            var i = a.attributes[s];
                            t[i.name] || a.removeAttribute(i.name)
                        }
                        return n.splice(o, 1)[0]
                    }
                }
                return r ? P(e) : D(e)
            }

            function U(n, e) {
                for (var t = 0; t < n.length; t += 1) {
                    var r = n[t];
                    if (3 === r.nodeType) return r.data = e, n.splice(t, 1)[0]
                }
                return z(e)
            }

            function Y(n, e) {
                e = "" + e, n.data !== e && (n.data = e)
            }

            function q(n, e, t) {
                n.classList[t ? "add" : "remove"](e)
            }
            var R, F = 0,
                X = {};

            function Q(n, e, t, r, o, a, s) {
                for (var i = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, l = 16.666 / r, c = "{\n", u = 0; u <= 1; u += l) {
                    var f = e + (t - e) * a(u);
                    c += 100 * u + "%{".concat(s(f, 1 - f), "}\n")
                }
                var m = c + "100% {".concat(s(t, 1 - t), "}\n}"),
                    d = "__svelte_".concat(function(n) {
                        for (var e = 5381, t = n.length; t--;) e = (e << 5) - e ^ n.charCodeAt(t);
                        return e >>> 0
                    }(m), "_").concat(i);
                if (!X[d]) {
                    if (!A) {
                        var h = D("style");
                        document.head.appendChild(h), A = h.sheet
                    }
                    X[d] = !0, A.insertRule("@keyframes ".concat(d, " ").concat(m), A.cssRules.length)
                }
                var v = n.style.animation || "";
                return n.style.animation = "".concat(v ? "".concat(v, ", ") : "").concat(d, " ").concat(r, "ms linear ").concat(o, "ms 1 both"), F += 1, d
            }

            function J(n, e) {
                n.style.animation = (n.style.animation || "").split(", ").filter(e ? function(n) {
                    return n.indexOf(e) < 0
                } : function(n) {
                    return -1 === n.indexOf("__svelte")
                }).join(", "), e && !--F && requestAnimationFrame(function() {
                    if (!F) {
                        for (var n = A.cssRules.length; n--;) A.deleteRule(n);
                        X = {}
                    }
                })
            }

            function K(n) {
                R = n
            }

            function Z() {
                if (!R) throw new Error("Function called outside component initialization");
                return R
            }

            function nn(n) {
                Z().$$.on_mount.push(n)
            }
            var en, tn, rn = [],
                on = Promise.resolve(),
                an = !1,
                sn = [],
                ln = [],
                cn = [];

            function un(n) {
                sn.push(n)
            }

            function fn(n) {
                ln.push(n)
            }

            function mn() {
                var n = new Set;
                do {
                    for (; rn.length;) {
                        var e = rn.shift();
                        K(e), dn(e.$$)
                    }
                    for (; sn.length;) sn.shift()();
                    for (; ln.length;) {
                        var t = ln.pop();
                        n.has(t) || (t(), n.add(t))
                    }
                } while (rn.length);
                for (; cn.length;) cn.pop()();
                an = !1
            }

            function dn(n) {
                n.fragment && (n.update(n.dirty), C(n.before_render), n.fragment.p(n.dirty, n.ctx), n.dirty = null, n.after_render.forEach(fn))
            }

            function hn() {
                return en || (en = Promise.resolve()).then(function() {
                    en = null
                }), en
            }

            function vn(n, e, t) {
                var r, o;
                n.dispatchEvent((r = "".concat(e ? "intro" : "outro").concat(t), (o = document.createEvent("CustomEvent")).initCustomEvent(r, !1, !1, void 0), o))
            }

            function pn() {
                tn = {
                    remaining: 0,
                    callbacks: []
                }
            }

            function gn() {
                tn.remaining || C(tn.callbacks)
            }

            function Nn(n) {
                tn.callbacks.push(n)
            }

            function $n(n, e, t) {
                var r, o, a = e(n, t),
                    s = !1,
                    i = 0;

                function l() {
                    r && J(n, r)
                }

                function c() {
                    var e = a,
                        t = e.delay,
                        c = void 0 === t ? 0 : t,
                        u = e.duration,
                        f = void 0 === u ? 300 : u,
                        m = e.easing,
                        d = void 0 === m ? g : m,
                        h = e.tick,
                        v = void 0 === h ? p : h,
                        N = e.css;
                    N && (r = Q(n, 0, 1, f, c, d, N, i++)), v(0, 1);
                    var $ = window.performance.now() + c,
                        b = $ + f;
                    o && o.abort(), s = !0, o = M(function(n) {
                        if (s) {
                            if (n >= b) return v(1, 0), l(), s = !1;
                            if (n >= $) {
                                var e = d((n - $) / f);
                                v(e, 1 - e)
                            }
                        }
                        return s
                    })
                }
                var u = !1;
                return {
                    start: function() {
                        u || (J(n), "function" == typeof a ? (a = a(), hn().then(c)) : c())
                    },
                    invalidate: function() {
                        u = !1
                    },
                    end: function() {
                        s && (l(), s = !1)
                    }
                }
            }

            function bn(n, e, t, r) {
                var o = e(n, t),
                    a = r ? 0 : 1,
                    s = null,
                    i = null,
                    l = null;

                function c() {
                    l && J(n, l)
                }

                function u(n, e) {
                    var t = n.b - a;
                    return e *= Math.abs(t), {
                        a: a,
                        b: n.b,
                        d: t,
                        duration: e,
                        start: n.start,
                        end: n.start + e,
                        group: n.group
                    }
                }

                function f(e) {
                    var t = o,
                        r = t.delay,
                        f = void 0 === r ? 0 : r,
                        m = t.duration,
                        d = void 0 === m ? 300 : m,
                        h = t.easing,
                        v = void 0 === h ? g : h,
                        N = t.tick,
                        $ = void 0 === N ? p : N,
                        b = t.css,
                        y = {
                            start: window.performance.now() + f,
                            b: e
                        };
                    e || (y.group = tn, tn.remaining += 1), s ? i = y : (b && (c(), l = Q(n, a, e, d, f, v, b)), e && $(0, 1), s = u(y, d), fn(function() {
                        return vn(n, e, "start")
                    }), M(function(e) {
                        if (i && e > i.start && (s = u(i, d), i = null, vn(n, s.b, "start"), b && (c(), l = Q(n, a, s.b, s.duration, 0, v, o.css))), s)
                            if (e >= s.end) $(a = s.b, 1 - a), vn(n, s.b, "end"), i || (s.b ? c() : --s.group.remaining || C(s.group.callbacks)), s = null;
                            else if (e >= s.start) {
                            var t = e - s.start;
                            a = s.a + s.d * v(t / s.duration), $(a, 1 - a)
                        }
                        return !(!s && !i)
                    }))
                }
                return {
                    run: function(n) {
                        "function" == typeof o ? hn().then(function() {
                            o = o(), f(n)
                        }) : f(n)
                    },
                    end: function() {
                        c(), s = i = null
                    }
                }
            }

            function Cn(n, e) {
                for (var t = {}, r = {}, o = {
                        $$scope: 1
                    }, a = n.length; a--;) {
                    var s = n[a],
                        i = e[a];
                    if (i) {
                        for (var l in s) l in i || (r[l] = 1);
                        for (var c in i) o[c] || (t[c] = i[c], o[c] = 1);
                        n[a] = i
                    } else
                        for (var u in s) o[u] = 1
                }
                for (var f in r) f in t || (t[f] = void 0);
                return t
            }

            function yn(n, e, t) {
                var r = n.$$,
                    o = r.fragment,
                    a = r.on_mount,
                    s = r.on_destroy,
                    i = r.after_render;
                o.m(e, t), fn(function() {
                    var e = a.map($).filter(y);
                    s ? s.push.apply(s, v(e)) : C(e), n.$$.on_mount = []
                }), i.forEach(fn)
            }

            function kn(n, e, t, r, o, a) {
                var s = R;
                K(n);
                var i = e.props || {},
                    l = n.$$ = {
                        fragment: null,
                        ctx: null,
                        props: a,
                        update: p,
                        not_equal: o,
                        bound: b(),
                        on_mount: [],
                        on_destroy: [],
                        before_render: [],
                        after_render: [],
                        context: new Map(s ? s.$$.context : []),
                        callbacks: b(),
                        dirty: null
                    },
                    c = !1;
                l.ctx = t ? t(n, i, function(e, t) {
                    l.ctx && o(l.ctx[e], l.ctx[e] = t) && (l.bound[e] && l.bound[e](t), c && function(n, e) {
                        n.$$.dirty || (rn.push(n), an || (an = !0, on.then(mn)), n.$$.dirty = b()), n.$$.dirty[e] = !0
                    }(n, e))
                }) : i, l.update(), c = !0, C(l.before_render), l.fragment = r(l.ctx), e.target && (e.hydrate ? l.fragment.l(V(e.target)) : l.fragment.c(), e.intro && n.$$.fragment.i && n.$$.fragment.i(), yn(n, e.target, e.anchor), mn()), K(s)
            }
            var wn = function() {
                    function n() {
                        o(this, n)
                    }
                    return s(n, [{
                        key: "$destroy",
                        value: function() {
                            (function(n, e) {
                                n.$$ && (C(n.$$.on_destroy), n.$$.fragment.d(e), n.$$.on_destroy = n.$$.fragment = null, n.$$.ctx = {})
                            })(this, !0), this.$destroy = p
                        }
                    }, {
                        key: "$on",
                        value: function(n, e) {
                            var t = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
                            return t.push(e),
                                function() {
                                    var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                                }
                        }
                    }, {
                        key: "$set",
                        value: function() {}
                    }]), n
                }(),
                An = function() {
                    return document.cookie
                },
                xn = function(n) {
                    return document.cookie = n
                },
                En = function() {
                    return window.location
                },
                Ln = function() {
                    return Promise.race([new Promise(function(n) {
                        var e = new XMLHttpRequest;
                        e.addEventListener("load", n), e.open("GET", "https://pixel.spotify.com/v1/cpua", !0), e.send()
                    }), new Promise(function(n) {
                        return setTimeout(n, 1e3)
                    })])
                },
                Mn = ["data-tracking", "data-ga-category", "data-ga-action", "data-gtm-event-name"];

            function In(n) {
                return n ? Object.keys(n).filter(function(n) {
                    return Mn.includes(n)
                }).reduce(function(e, t) {
                    return l({}, e, i({}, t, n[t]))
                }, {}) : null
            }

            function On(n) {
                var e, t, r, o, a, s;
                return {
                    c: function() {
                        e = D("span"), t = P("svg"), r = P("g"), o = P("path"), a = j(), s = z(n.alt), this.h()
                    },
                    l: function(i) {
                        var l = V(e = G(i, "SPAN", {
                                class: !0
                            }, !1)),
                            c = V(t = G(l, "svg", {
                                viewBox: !0,
                                xmlns: !0,
                                preserveAspectRatio: !0
                            }, !0)),
                            u = V(r = G(c, "g", {
                                "fill-rule": !0,
                                class: !0
                            }, !0));
                        V(o = G(u, "path", {
                            d: !0
                        }, !0)).forEach(T), u.forEach(T), c.forEach(T), a = U(l, "\n  "), s = U(l, n.alt), l.forEach(T), this.h()
                    },
                    h: function() {
                        W(o, "d", "M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"), W(r, "fill-rule", "evenodd"), W(r, "class", "svelte-1gcdbl9"), W(t, "viewBox", "0 0 63 20"), W(t, "xmlns", "http://www.w3.org/2000/svg"), W(t, "preserveAspectRatio", "xMidYMin meet"), e.className = n.className + " svelte-1gcdbl9"
                    },
                    m: function(n, i) {
                        O(n, e, i), I(e, t), I(t, r), I(r, o), I(e, a), I(e, s)
                    },
                    p: function(n, t) {
                        n.alt && Y(s, t.alt), n.className && (e.className = t.className + " svelte-1gcdbl9")
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function Tn(n, e, t) {
                var r = e.alt,
                    o = e.className;
                return n.$set = function(n) {
                    "alt" in n && t("alt", r = n.alt), "className" in n && t("className", o = n.className)
                }, {
                    alt: r,
                    className: o
                }
            }
            var _n = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Tn, On, k, ["alt", "className"]), t
                }
                return c(e, wn), e
            }();

            function Dn(n) {
                for (var e, t, r = new _n({
                        props: {
                            alt: n.alt,
                            className: n.className
                        }
                    }), o = [{
                        href: n.href
                    }, {
                        class: n.className + " svelte-18o1xvt"
                    }, n.normalisedDataAttributes], a = {}, s = 0; s < o.length; s += 1) a = N(a, o[s]);
                return {
                    c: function() {
                        e = D("a"), r.$$.fragment.c(), this.h()
                    },
                    l: function(n) {
                        var t = V(e = G(n, "A", {
                            href: !0,
                            class: !0
                        }, !1));
                        r.$$.fragment.l(t), t.forEach(T), this.h()
                    },
                    h: function() {
                        H(e, a)
                    },
                    m: function(n, o) {
                        O(n, e, o), yn(r, e, null), t = !0
                    },
                    p: function(n, t) {
                        var a = {};
                        n.alt && (a.alt = t.alt), n.className && (a.className = t.className), r.$set(a), H(e, Cn(o, [n.href && {
                            href: t.href
                        }, n.className && {
                            class: t.className + " svelte-18o1xvt"
                        }, n.normalisedDataAttributes && t.normalisedDataAttributes]))
                    },
                    i: function(n) {
                        t || (r.$$.fragment.i(n), t = !0)
                    },
                    o: function(n) {
                        r.$$.fragment.o(n), t = !1
                    },
                    d: function(n) {
                        n && T(e), r.$destroy()
                    }
                }
            }

            function Pn(n, e, t) {
                var r, o = e.href,
                    a = e.alt,
                    s = e.className,
                    i = e.dataAttributes,
                    l = void 0 === i ? {} : i;
                return n.$set = function(n) {
                    "href" in n && t("href", o = n.href), "alt" in n && t("alt", a = n.alt), "className" in n && t("className", s = n.className), "dataAttributes" in n && t("dataAttributes", l = n.dataAttributes)
                }, n.$$.update = function() {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        dataAttributes: 1
                    }).dataAttributes && t("normalisedDataAttributes", r = In(l))
                }, {
                    href: o,
                    alt: a,
                    className: s,
                    dataAttributes: l,
                    normalisedDataAttributes: r
                }
            }
            var zn = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Pn, Dn, k, ["href", "alt", "className", "dataAttributes"]), t
                }
                return c(e, wn), e
            }();

            function jn(n) {
                var e = n - 1;
                return e * e * e + 1
            }
            var Bn = 4,
                Sn = .001,
                Wn = 1e-7,
                Hn = 10,
                Vn = 11,
                Gn = 1 / (Vn - 1),
                Un = "function" == typeof Float32Array;

            function Yn(n, e) {
                return 1 - 3 * e + 3 * n
            }

            function qn(n, e) {
                return 3 * e - 6 * n
            }

            function Rn(n) {
                return 3 * n
            }

            function Fn(n, e, t) {
                return ((Yn(e, t) * n + qn(e, t)) * n + Rn(e)) * n
            }

            function Xn(n, e, t) {
                return 3 * Yn(e, t) * n * n + 2 * qn(e, t) * n + Rn(e)
            }

            function Qn(n) {
                return n
            }
            var Jn = function(n, e, t, r) {
                    if (!(0 <= n && n <= 1 && 0 <= t && t <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                    if (n === e && t === r) return Qn;
                    for (var o = Un ? new Float32Array(Vn) : new Array(Vn), a = 0; a < Vn; ++a) o[a] = Fn(a * Gn, n, t);

                    function s(e) {
                        for (var r = 0, a = 1, s = Vn - 1; a !== s && o[a] <= e; ++a) r += Gn;
                        var i = r + (e - o[--a]) / (o[a + 1] - o[a]) * Gn,
                            l = Xn(i, n, t);
                        return l >= Sn ? function(n, e, t, r) {
                            for (var o = 0; o < Bn; ++o) {
                                var a = Xn(e, t, r);
                                if (0 === a) return e;
                                e -= (Fn(e, t, r) - n) / a
                            }
                            return e
                        }(e, i, n, t) : 0 === l ? i : function(n, e, t, r, o) {
                            var a, s, i = 0;
                            do {
                                (a = Fn(s = e + (t - e) / 2, r, o) - n) > 0 ? t = s : e = s
                            } while (Math.abs(a) > Wn && ++i < Hn);
                            return s
                        }(e, r, r + Gn, n, t)
                    }
                    return function(n) {
                        return 0 === n ? 0 : 1 === n ? 1 : Fn(s(n), e, r)
                    }
                },
                Kn = {
                    short: 240,
                    normal: 300
                },
                Zn = { in: Jn(.3, 0, 0, 1),
                    out: Jn(1, 0, .7, 1)
                },
                ne = function(n) {
                    return function(n, e) {
                        var t = e.delay,
                            r = void 0 === t ? 0 : t,
                            o = e.duration,
                            a = void 0 === o ? 400 : o,
                            s = +getComputedStyle(n).opacity;
                        return {
                            delay: r,
                            duration: a,
                            css: function(n) {
                                return "opacity: ".concat(n * s)
                            }
                        }
                    }(n, {
                        duration: Kn.short,
                        easing: Zn.in
                    })
                },
                ee = function(n) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = e.delayMultiplier,
                        r = void 0 === t ? 0 : t,
                        o = e.duration,
                        a = void 0 === o ? Kn.normal : o,
                        s = e.easing,
                        i = void 0 === s ? Zn.in : s,
                        l = e.x,
                        c = void 0 === l ? 100 : l;
                    return function(n, e) {
                        var t = e.delay,
                            r = void 0 === t ? 0 : t,
                            o = e.duration,
                            a = void 0 === o ? 400 : o,
                            s = e.easing,
                            i = void 0 === s ? jn : s,
                            l = e.x,
                            c = void 0 === l ? 0 : l,
                            u = e.y,
                            f = void 0 === u ? 0 : u,
                            m = e.opacity,
                            d = void 0 === m ? 0 : m,
                            h = getComputedStyle(n),
                            v = +h.opacity,
                            p = "none" === h.transform ? "" : h.transform,
                            g = v * (1 - d);
                        return {
                            delay: r,
                            duration: a,
                            easing: i,
                            css: function(n, e) {
                                return "\n\t\t\ttransform: ".concat(p, " translate(").concat((1 - n) * c, "px, ").concat((1 - n) * f, "px);\n\t\t\topacity: ").concat(v - g * e)
                            }
                        }
                    }(n, {
                        delay: 17 * r,
                        duration: a,
                        easing: i,
                        x: "rtl" === getComputedStyle(n).direction ? -1 * c : c
                    })
                };

            function te(n) {
                for (var e, t, r, o, a = [{
                        href: n.href
                    }, {
                        class: (2 === n.tier ? n.colorClassNames.secondary : n.colorClassNames.primary) + " svelte-yew4z8"
                    }, n.normalisedDataAttributes], s = {}, i = 0; i < a.length; i += 1) s = N(s, a[i]);
                return {
                    c: function() {
                        e = D("li"), t = D("a"), r = z(n.text), this.h()
                    },
                    l: function(o) {
                        var a = V(e = G(o, "LI", {
                                class: !0
                            }, !1)),
                            s = V(t = G(a, "A", {
                                href: !0,
                                class: !0
                            }, !1));
                        r = U(s, n.text), s.forEach(T), a.forEach(T), this.h()
                    },
                    h: function() {
                        H(t, s), q(t, "mh-tier-2", 2 === n.tier), e.className = "svelte-yew4z8"
                    },
                    m: function(n, o) {
                        O(n, e, o), I(e, t), I(t, r)
                    },
                    p: function(n, e) {
                        n.text && Y(r, e.text), H(t, Cn(a, [n.href && {
                            href: e.href
                        }, (n.tier || n.colorClassNames) && {
                            class: (2 === e.tier ? e.colorClassNames.secondary : e.colorClassNames.primary) + " svelte-yew4z8"
                        }, n.normalisedDataAttributes && e.normalisedDataAttributes])), n.tier && q(t, "mh-tier-2", 2 === e.tier)
                    },
                    i: function(t) {
                        o || fn(function() {
                            (o = $n(e, ee, {
                                delayMultiplier: n.index
                            })).start()
                        })
                    },
                    o: p,
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function re(n, e, t) {
                var r, o = e.index,
                    a = void 0 === o ? 0 : o,
                    s = e.href,
                    i = e.text,
                    l = e.dataAttributes,
                    c = void 0 === l ? {} : l,
                    u = e.tier,
                    f = void 0 === u ? 1 : u,
                    m = e.colorClassNames;
                return n.$set = function(n) {
                    "index" in n && t("index", a = n.index), "href" in n && t("href", s = n.href), "text" in n && t("text", i = n.text), "dataAttributes" in n && t("dataAttributes", c = n.dataAttributes), "tier" in n && t("tier", f = n.tier), "colorClassNames" in n && t("colorClassNames", m = n.colorClassNames)
                }, n.$$.update = function() {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        dataAttributes: 1
                    }).dataAttributes && t("normalisedDataAttributes", r = In(c))
                }, {
                    index: a,
                    href: s,
                    text: i,
                    dataAttributes: c,
                    tier: f,
                    colorClassNames: m,
                    normalisedDataAttributes: r
                }
            }
            var oe = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, re, te, k, ["index", "href", "text", "dataAttributes", "tier", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function ae(n) {
                var e, t, r;
                return {
                    c: function() {
                        e = D("li"), this.h()
                    },
                    l: function(n) {
                        V(e = G(n, "LI", {
                            role: !0,
                            class: !0
                        }, !1)).forEach(T), this.h()
                    },
                    h: function() {
                        W(e, "role", "separator"), e.className = t = n.colorClassNames.primary + " svelte-1wung5m"
                    },
                    m: function(n, t) {
                        O(n, e, t)
                    },
                    p: function(n, r) {
                        n.colorClassNames && t !== (t = r.colorClassNames.primary + " svelte-1wung5m") && (e.className = t)
                    },
                    i: function(t) {
                        r || fn(function() {
                            (r = $n(e, ee, {
                                delayMultiplier: n.index
                            })).start()
                        })
                    },
                    o: p,
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function se(n, e, t) {
                var r = e.index,
                    o = void 0 === r ? 0 : r,
                    a = e.colorClassNames;
                return n.$set = function(n) {
                    "index" in n && t("index", o = n.index), "colorClassNames" in n && t("colorClassNames", a = n.colorClassNames)
                }, {
                    index: o,
                    colorClassNames: a
                }
            }
            var ie = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, se, ae, k, ["index", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function le(n) {
                var e, t, r;
                return {
                    c: function() {
                        e = P("svg"), t = P("path"), this.h()
                    },
                    l: function(n) {
                        var r = V(e = G(n, "svg", {
                            viewBox: !0,
                            style: !0,
                            class: !0
                        }, !0));
                        V(t = G(r, "path", {
                            d: !0
                        }, !0)).forEach(T), r.forEach(T), this.h()
                    },
                    h: function() {
                        W(t, "d", "M476.455 806.696L95.291 425.532Q80.67 410.911 80.67 390.239t14.621-34.789 35.293-14.117 34.789 14.117L508.219 698.8l349.4-349.4q14.621-14.117 35.293-14.117t34.789 14.117 14.117 34.789-14.117 34.789L546.537 800.142q-19.159 19.159-38.318 19.159t-31.764-12.605z"), W(e, "viewBox", "0 0 1024 1024"), W(e, "style", r = "up" === n.direction ? "transform: scaleY(-1)" : ""), W(e, "class", "svelte-13ynk3t")
                    },
                    m: function(n, r) {
                        O(n, e, r), I(e, t)
                    },
                    p: function(n, t) {
                        n.direction && r !== (r = "up" === t.direction ? "transform: scaleY(-1)" : "") && W(e, "style", r)
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function ce(n, e, t) {
                var r = e.direction,
                    o = void 0 === r ? "down" : r;
                return n.$set = function(n) {
                    "direction" in n && t("direction", o = n.direction)
                }, {
                    direction: o
                }
            }
            var ue = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, ce, le, k, ["direction"]), t
                }
                return c(e, wn), e
            }();

            function fe(n) {
                var e, t, r;
                return {
                    c: function() {
                        e = D("div"), t = P("svg"), r = P("path"), this.h()
                    },
                    l: function(n) {
                        var o = V(e = G(n, "DIV", {
                                class: !0
                            }, !1)),
                            a = V(t = G(o, "svg", {
                                viewBox: !0,
                                class: !0
                            }, !0));
                        V(r = G(a, "path", {
                            d: !0
                        }, !0)).forEach(T), a.forEach(T), o.forEach(T), this.h()
                    },
                    h: function() {
                        W(r, "d", "M730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084Q106.388 763.84 84.96 802.41t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"), W(t, "viewBox", "0 0 1024 1024"), W(t, "class", "svelte-1o9rgok"), e.className = "svelte-1o9rgok"
                    },
                    m: function(n, o) {
                        O(n, e, o), I(e, t), I(t, r)
                    },
                    p: p,
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function me(n) {
                var e;
                return {
                    c: function() {
                        e = D("img"), this.h()
                    },
                    l: function(n) {
                        V(e = G(n, "IMG", {
                            src: !0,
                            alt: !0,
                            class: !0
                        }, !1)).forEach(T), this.h()
                    },
                    h: function() {
                        e.src = n.userIconUrl, e.alt = n.userIconAlt, e.className = "svelte-1o9rgok"
                    },
                    m: function(n, t) {
                        O(n, e, t)
                    },
                    p: function(n, t) {
                        n.userIconUrl && (e.src = t.userIconUrl), n.userIconAlt && (e.alt = t.userIconAlt)
                    },
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function de(n) {
                var e;

                function t(n) {
                    return n.userIconUrl ? me : fe
                }
                var r = t(n),
                    o = r(n);
                return {
                    c: function() {
                        o.c(), e = B()
                    },
                    l: function(n) {
                        o.l(n), e = B()
                    },
                    m: function(n, t) {
                        o.m(n, t), O(n, e, t)
                    },
                    p: function(n, a) {
                        r === (r = t(a)) && o ? o.p(n, a) : (o.d(1), (o = r(a)) && (o.c(), o.m(e.parentNode, e)))
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        o.d(n), n && T(e)
                    }
                }
            }

            function he(n, e, t) {
                var r = e.userIconUrl,
                    o = void 0 === r ? "" : r,
                    a = e.userIconAlt,
                    s = void 0 === a ? "" : a;
                return n.$set = function(n) {
                    "userIconUrl" in n && t("userIconUrl", o = n.userIconUrl), "userIconAlt" in n && t("userIconAlt", s = n.userIconAlt)
                }, {
                    userIconUrl: o,
                    userIconAlt: s
                }
            }
            var ve = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, he, de, k, ["userIconUrl", "userIconAlt"]), t
                }
                return c(e, wn), e
            }();

            function pe(n, e, t) {
                var r = Object.create(n);
                return r.item = e[t], r.index = t, r
            }

            function ge(n) {
                for (var e, t, r, o, a = n.item.parameters.text, s = n.index, i = [{
                        class: (n.item.parameters.isSubtle ? "mh-subtle" : "") + " svelte-1azgt5a"
                    }, {
                        href: n.item.parameters.href
                    }, In(n.item.parameters.dataAttributes)], l = {}, c = 0; c < i.length; c += 1) l = N(l, i[c]);
                return {
                    c: function() {
                        e = D("li"), t = D("a"), r = z(a), o = j(), this.h()
                    },
                    l: function(n) {
                        var s = V(e = G(n, "LI", {
                                class: !0
                            }, !1)),
                            i = V(t = G(s, "A", {
                                class: !0,
                                href: !0
                            }, !1));
                        r = U(i, a), i.forEach(T), o = U(s, "\n    "), s.forEach(T), this.h()
                    },
                    h: function() {
                        H(t, l), e.className = "svelte-1azgt5a"
                    },
                    m: function(a, i) {
                        O(a, e, i), I(e, t), I(t, r), un(function() {
                            return n.a_binding(t, null, s)
                        }), I(e, o)
                    },
                    p: function(e, o) {
                        n = o, e.items && a !== (a = n.item.parameters.text) && Y(r, a), e.items && (n.a_binding(null, t, s), s = n.index, n.a_binding(t, null, s)), H(t, Cn(i, [e.items && {
                            class: (n.item.parameters.isSubtle ? "mh-subtle" : "") + " svelte-1azgt5a"
                        }, e.items && {
                            href: n.item.parameters.href
                        }, (e.normaliseDataAttributes || e.items) && In(n.item.parameters.dataAttributes)]))
                    },
                    d: function(r) {
                        r && T(e), n.a_binding(null, t, s)
                    }
                }
            }

            function Ne(n) {
                for (var e, t = n.items, r = [], o = 0; o < t.length; o += 1) r[o] = ge(pe(n, t, o));
                return {
                    c: function() {
                        e = D("ul");
                        for (var n = 0; n < r.length; n += 1) r[n].c();
                        this.h()
                    },
                    l: function(n) {
                        for (var t = V(e = G(n, "UL", {
                                class: !0
                            }, !1)), o = 0; o < r.length; o += 1) r[o].l(t);
                        t.forEach(T), this.h()
                    },
                    h: function() {
                        e.className = "svelte-1azgt5a"
                    },
                    m: function(n, t) {
                        O(n, e, t);
                        for (var o = 0; o < r.length; o += 1) r[o].m(e, null)
                    },
                    p: function(n, o) {
                        if (n.items || n.normaliseDataAttributes || n.itemAnchors) {
                            t = o.items;
                            for (var a = 0; a < t.length; a += 1) {
                                var s = pe(o, t, a);
                                r[a] ? r[a].p(n, s) : (r[a] = ge(s), r[a].c(), r[a].m(e, null))
                            }
                            for (; a < r.length; a += 1) r[a].d(1);
                            r.length = t.length
                        }
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        n && T(e), _(r, n)
                    }
                }
            }

            function $e(n, e, t) {
                var r = e.brand,
                    o = e.items,
                    a = [],
                    s = function(n) {
                        var e = a.findIndex(function(n) {
                            return document.activeElement === n
                        });
                        a[Math.max(0, Math.min(e + n, o.length - 1))].focus()
                    };
                return n.$set = function(n) {
                    "brand" in n && t("brand", r = n.brand), "items" in n && t("items", o = n.items)
                }, {
                    brand: r,
                    items: o,
                    itemAnchors: a,
                    selectNext: function() {
                        return s(1)
                    },
                    selectPrevious: function() {
                        return s(-1)
                    },
                    a_binding: function(n, e, r) {
                        (n || !n && a[r] === e) && (a[r] = n), t("itemAnchors", a)
                    }
                }
            }
            var be = function(n) {
                    function e(n) {
                        var t;
                        return o(this, e), kn(m(t = d(this, u(e).call(this))), n, $e, Ne, k, ["brand", "items", "selectNext", "selectPrevious"]), t
                    }
                    return c(e, wn), s(e, [{
                        key: "selectNext",
                        get: function() {
                            return this.$$.ctx.selectNext
                        }
                    }, {
                        key: "selectPrevious",
                        get: function() {
                            return this.$$.ctx.selectPrevious
                        }
                    }]), e
                }(),
                Ce = {
                    "breakpoint-mobile-narrow": 480,
                    "breakpoint-mobile": 768,
                    "breakpoint-tablet": 992,
                    "breakpoint-desktop": 1200
                };

            function ye(n) {
                for (var e, t = [n.user], r = {}, o = 0; o < t.length; o += 1) r = N(r, t[o]);
                var a = new ve({
                    props: r
                });
                return {
                    c: function() {
                        a.$$.fragment.c()
                    },
                    l: function(n) {
                        a.$$.fragment.l(n)
                    },
                    m: function(n, t) {
                        yn(a, n, t), e = !0
                    },
                    p: function(n, e) {
                        var r = n.user ? Cn(t, [e.user]) : {};
                        a.$set(r)
                    },
                    i: function(n) {
                        e || (a.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        a.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        a.$destroy(n)
                    }
                }
            }

            function ke(n) {
                var e, t, r, o, a, s, i, l, c, u, f, m, d = n.user && ye(n),
                    h = new ue({
                        props: {
                            direction: n.open ? "up" : "down"
                        }
                    }),
                    v = {
                        items: n.items,
                        brand: n.brand
                    },
                    p = new be({
                        props: v
                    });
                return un(function() {
                    return n.profiledropdownmenu_binding(p)
                }), {
                    c: function() {
                        e = D("li"), t = D("button"), d && d.c(), r = j(), o = D("div"), a = D("span"), s = z(n.text), i = j(), h.$$.fragment.c(), c = j(), u = D("div"), p.$$.fragment.c(), this.h()
                    },
                    l: function(l) {
                        var f = V(e = G(l, "LI", {
                                class: !0
                            }, !1)),
                            m = V(t = G(f, "BUTTON", {
                                linkButton: !0,
                                class: !0
                            }, !1));
                        d && d.l(m), r = U(m, "\n    ");
                        var v = V(o = G(m, "DIV", {
                                class: !0
                            }, !1)),
                            g = V(a = G(v, "SPAN", {
                                class: !0
                            }, !1));
                        s = U(g, n.text), g.forEach(T), i = U(v, "\n      "), h.$$.fragment.l(v), v.forEach(T), m.forEach(T), c = U(f, "\n\n  ");
                        var N = V(u = G(f, "DIV", {
                            class: !0
                        }, !1));
                        p.$$.fragment.l(N), N.forEach(T), f.forEach(T), this.h()
                    },
                    h: function() {
                        var r;
                        a.className = "svelte-1uykb4d", o.className = "mh-profile-title svelte-1uykb4d", W(t, "linkbutton", ""), t.className = l = n.colorClassNames.primary + " svelte-1uykb4d", u.className = "mh-dropdown-menu svelte-1uykb4d", q(u, "mh-open", n.open), e.className = "svelte-1uykb4d", m = [S(window, "click", n.click_handler), S(t, "click", (r = n.click_handler_1, function(n) {
                            return n.stopPropagation(), r.call(this, n)
                        })), S(e, "keydown", n.handleMenuNavigation)]
                    },
                    m: function(l, m) {
                        O(l, e, m), I(e, t), d && d.m(t, null), I(t, r), I(t, o), I(o, a), I(a, s), I(o, i), yn(h, o, null), un(function() {
                            return n.button_1_binding(t, null)
                        }), I(e, c), I(e, u), yn(p, u, null), f = !0
                    },
                    p: function(n, e) {
                        e.user ? d ? (d.p(n, e), d.i(1)) : ((d = ye(e)).c(), d.i(1), d.m(t, r)) : d && (pn(), Nn(function() {
                            d.d(1), d = null
                        }), d.o(1), gn()), f && !n.text || Y(s, e.text);
                        var o = {};
                        n.open && (o.direction = e.open ? "up" : "down"), h.$set(o), n.items && (e.button_1_binding(null, t), e.button_1_binding(t, null)), f && !n.colorClassNames || l === (l = e.colorClassNames.primary + " svelte-1uykb4d") || (t.className = l);
                        var a = {};
                        n.items && (a.items = e.items), n.brand && (a.brand = e.brand), p.$set(a), n.open && q(u, "mh-open", e.open)
                    },
                    i: function(n) {
                        f || (d && d.i(), h.$$.fragment.i(n), p.$$.fragment.i(n), f = !0)
                    },
                    o: function(n) {
                        d && d.o(), h.$$.fragment.o(n), p.$$.fragment.o(n), f = !1
                    },
                    d: function(r) {
                        r && T(e), d && d.d(), h.$destroy(), n.button_1_binding(null, t), n.profiledropdownmenu_binding(null), p.$destroy(), C(m)
                    }
                }
            }

            function we(n, e, t) {
                var r, o, a = e.user,
                    s = e.text,
                    i = e.items,
                    l = e.brand,
                    c = e.colorClassNames,
                    u = !1;
                return n.$set = function(n) {
                    "user" in n && t("user", a = n.user), "text" in n && t("text", s = n.text), "items" in n && t("items", i = n.items), "brand" in n && t("brand", l = n.brand), "colorClassNames" in n && t("colorClassNames", c = n.colorClassNames)
                }, {
                    user: a,
                    text: s,
                    items: i,
                    brand: l,
                    colorClassNames: c,
                    button: r,
                    menu: o,
                    open: u,
                    handleMenuNavigation: function(n) {
                        window.innerWidth < Ce["breakpoint-tablet"] || (["Escape", "ArrowDown", "ArrowUp"].includes(n.key) && (n.stopPropagation(), n.preventDefault()), "Escape" === n.key ? (t("open", u = !1), r.focus()) : "ArrowDown" === n.key ? (t("open", u = !0), o.selectNext()) : "ArrowUp" === n.key && (t("open", u = !0), o.selectPrevious()))
                    },
                    click_handler: function() {
                        var n = u = !1;
                        return t("open", u), n
                    },
                    button_1_binding: function(n, e) {
                        t("button", r = n)
                    },
                    click_handler_1: function() {
                        var n = u = !u;
                        return t("open", u), n
                    },
                    profiledropdownmenu_binding: function(n) {
                        t("menu", o = n)
                    }
                }
            }
            var Ae = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, we, ke, k, ["user", "text", "items", "brand", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function xe(n) {
                var e, t, r, o, a, s, i, l, c, u;
                return {
                    c: function() {
                        e = D("button"), t = D("span"), r = z("Toggle navigation"), o = j(), a = D("span"), s = j(), i = D("span"), l = j(), c = D("span"), this.h()
                    },
                    l: function(n) {
                        var u = V(e = G(n, "BUTTON", {
                                type: !0,
                                role: !0,
                                class: !0
                            }, !1)),
                            f = V(t = G(u, "SPAN", {
                                class: !0
                            }, !1));
                        r = U(f, "Toggle navigation"), f.forEach(T), o = U(u, "\n  "), V(a = G(u, "SPAN", {
                            class: !0
                        }, !1)).forEach(T), s = U(u, "\n  "), V(i = G(u, "SPAN", {
                            class: !0
                        }, !1)).forEach(T), l = U(u, "\n  "), V(c = G(u, "SPAN", {
                            class: !0
                        }, !1)).forEach(T), u.forEach(T), this.h()
                    },
                    h: function() {
                        t.className = "mh-sr-only svelte-v64zdx", a.className = "mh-icon-bar svelte-v64zdx", i.className = "mh-icon-bar svelte-v64zdx", c.className = "mh-icon-bar svelte-v64zdx", e.type = "button", W(e, "role", "menu"), e.className = n.className + " svelte-v64zdx", q(e, "mh-menu-closed", !n.menuOpen), u = S(e, "click", n.click_handler)
                    },
                    m: function(n, u) {
                        O(n, e, u), I(e, t), I(t, r), I(e, o), I(e, a), I(e, s), I(e, i), I(e, l), I(e, c)
                    },
                    p: function(n, t) {
                        n.className && (e.className = t.className + " svelte-v64zdx"), (n.className || n.menuOpen) && q(e, "mh-menu-closed", !t.menuOpen)
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        n && T(e), u()
                    }
                }
            }

            function Ee(n, e, t) {
                var r = e.menuOpen,
                    o = void 0 !== r && r,
                    a = e.className,
                    s = void 0 === a ? "" : a;
                return n.$set = function(n) {
                    "menuOpen" in n && t("menuOpen", o = n.menuOpen), "className" in n && t("className", s = n.className)
                }, {
                    menuOpen: o,
                    className: s,
                    click_handler: function(e) {
                        ! function(n, e) {
                            var t = n.$$.callbacks[e.type];
                            t && t.slice().forEach(function(n) {
                                return n(e)
                            })
                        }(n, e)
                    }
                }
            }
            var Le = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Ee, xe, k, ["menuOpen", "className"]), t
                }
                return c(e, wn), e
            }();

            function Me(n) {
                return {
                    c: p,
                    l: p,
                    m: p,
                    p: p,
                    i: p,
                    o: p,
                    d: p
                }
            }

            function Ie(n, e, t) {
                var r, o, a = e.scrollingElementAccessor,
                    s = void 0 === a ? function() {
                        return document.body
                    } : a,
                    i = e.enable,
                    l = void 0 !== i && i;
                return nn(function() {
                    var n = r = s();
                    return t("scrollingElement", r), n
                }), o = function() {
                    r && r.classList[l ? "add" : "remove"]("suppress-scroll")
                }, Z().$$.after_render.push(o), Z().$$.on_destroy.push(function() {
                    r && r.classList.remove("suppress-scroll")
                }), n.$set = function(n) {
                    "scrollingElementAccessor" in n && t("scrollingElementAccessor", s = n.scrollingElementAccessor), "enable" in n && t("enable", l = n.enable)
                }, {
                    scrollingElementAccessor: s,
                    enable: l
                }
            }
            var Oe = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Ie, Me, k, ["scrollingElementAccessor", "enable"]), t
                }
                return c(e, wn), e
            }();

            function Te(n, e, t) {
                var r = Object.create(n);
                return r.item = e[t], r.index = t, r
            }

            function _e(n, e, t) {
                var r = Object.create(n);
                return r.item = e[t], r
            }

            function De(n) {
                for (var e, t = [{
                        colorClassNames: n.colorClassNames
                    }, n.item.parameters, {
                        user: n.user
                    }, {
                        brand: n.brand
                    }], r = {}, o = 0; o < t.length; o += 1) r = N(r, t[o]);
                var a = new Ae({
                    props: r
                });
                return {
                    c: function() {
                        a.$$.fragment.c()
                    },
                    l: function(n) {
                        a.$$.fragment.l(n)
                    },
                    m: function(n, t) {
                        yn(a, n, t), e = !0
                    },
                    p: function(n, e) {
                        var r = n.colorClassNames || n.items || n.user || n.brand ? Cn(t, [n.colorClassNames && {
                            colorClassNames: e.colorClassNames
                        }, n.items && e.item.parameters, n.user && {
                            user: e.user
                        }, n.brand && {
                            brand: e.brand
                        }]) : {};
                        a.$set(r)
                    },
                    i: function(n) {
                        e || (a.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        a.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        a.$destroy(n)
                    }
                }
            }

            function Pe(n) {
                var e, t = new ie({
                    props: {
                        colorClassNames: n.colorClassNames
                    }
                });
                return {
                    c: function() {
                        t.$$.fragment.c()
                    },
                    l: function(n) {
                        t.$$.fragment.l(n)
                    },
                    m: function(n, r) {
                        yn(t, n, r), e = !0
                    },
                    p: function(n, e) {
                        var r = {};
                        n.colorClassNames && (r.colorClassNames = e.colorClassNames), t.$set(r)
                    },
                    i: function(n) {
                        e || (t.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        t.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        t.$destroy(n)
                    }
                }
            }

            function ze(n) {
                for (var e, t = [{
                        colorClassNames: n.colorClassNames
                    }, n.item.parameters], r = {}, o = 0; o < t.length; o += 1) r = N(r, t[o]);
                var a = new oe({
                    props: r
                });
                return {
                    c: function() {
                        a.$$.fragment.c()
                    },
                    l: function(n) {
                        a.$$.fragment.l(n)
                    },
                    m: function(n, t) {
                        yn(a, n, t), e = !0
                    },
                    p: function(n, e) {
                        var r = n.colorClassNames || n.items ? Cn(t, [n.colorClassNames && {
                            colorClassNames: e.colorClassNames
                        }, n.items && e.item.parameters]) : {};
                        a.$set(r)
                    },
                    i: function(n) {
                        e || (a.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        a.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        a.$destroy(n)
                    }
                }
            }

            function je(n) {
                var e, t, r, o, a = [ze, Pe, De],
                    s = [];

                function i(n) {
                    return "link" === n.item.type ? 0 : "sep" === n.item.type ? 1 : "profile" === n.item.type ? 2 : -1
                }
                return ~(e = i(n)) && (t = s[e] = a[e](n)), {
                    c: function() {
                        t && t.c(), r = B()
                    },
                    l: function(n) {
                        t && t.l(n), r = B()
                    },
                    m: function(n, t) {
                        ~e && s[e].m(n, t), O(n, r, t), o = !0
                    },
                    p: function(n, o) {
                        var l = e;
                        (e = i(o)) === l ? ~e && s[e].p(n, o) : (t && (pn(), Nn(function() {
                            s[l].d(1), s[l] = null
                        }), t.o(1), gn()), ~e ? ((t = s[e]) || (t = s[e] = a[e](o)).c(), t.i(1), t.m(r.parentNode, r)) : t = null)
                    },
                    i: function(n) {
                        o || (t && t.i(), o = !0)
                    },
                    o: function(n) {
                        t && t.o(), o = !1
                    },
                    d: function(n) {
                        ~e && s[e].d(n), n && T(r)
                    }
                }
            }

            function Be(n) {
                var e, t, r, o, a = [We, Se],
                    s = [];

                function i(n) {
                    return n.mobileMenu.profileLink ? 0 : 1
                }
                return e = i(n), t = s[e] = a[e](n), {
                    c: function() {
                        t.c(), r = B()
                    },
                    l: function(n) {
                        t.l(n), r = B()
                    },
                    m: function(n, t) {
                        s[e].m(n, t), O(n, r, t), o = !0
                    },
                    p: function(n, o) {
                        var l = e;
                        (e = i(o)) === l ? s[e].p(n, o) : (pn(), Nn(function() {
                            s[l].d(1), s[l] = null
                        }), t.o(1), gn(), (t = s[e]) || (t = s[e] = a[e](o)).c(), t.i(1), t.m(r.parentNode, r))
                    },
                    i: function(n) {
                        o || (t && t.i(), o = !0)
                    },
                    o: function(n) {
                        t && t.o(), o = !1
                    },
                    d: function(n) {
                        s[e].d(n), n && T(r)
                    }
                }
            }

            function Se(n) {
                for (var e, t = [n.user], r = {}, o = 0; o < t.length; o += 1) r = N(r, t[o]);
                var a = new ve({
                    props: r
                });
                return {
                    c: function() {
                        a.$$.fragment.c()
                    },
                    l: function(n) {
                        a.$$.fragment.l(n)
                    },
                    m: function(n, t) {
                        yn(a, n, t), e = !0
                    },
                    p: function(n, e) {
                        var r = n.user ? Cn(t, [e.user]) : {};
                        a.$set(r)
                    },
                    i: function(n) {
                        e || (a.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        a.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        a.$destroy(n)
                    }
                }
            }

            function We(n) {
                for (var e, t, r, o, a, s = [n.user], i = {}, l = 0; l < s.length; l += 1) i = N(i, s[l]);
                var c = new ve({
                    props: i
                });
                return {
                    c: function() {
                        e = D("a"), c.$$.fragment.c(), this.h()
                    },
                    l: function(n) {
                        var t = V(e = G(n, "A", {
                            href: !0,
                            alt: !0,
                            class: !0
                        }, !1));
                        c.$$.fragment.l(t), t.forEach(T), this.h()
                    },
                    h: function() {
                        e.href = t = n.mobileMenu.profileLink.href, W(e, "alt", r = n.mobileMenu.profileLink.alt || ""), e.className = o = n.colorClassNames.primary + " svelte-4ldyho"
                    },
                    m: function(n, t) {
                        O(n, e, t), yn(c, e, null), a = !0
                    },
                    p: function(n, i) {
                        var l = n.user ? Cn(s, [i.user]) : {};
                        c.$set(l), a && !n.mobileMenu || t === (t = i.mobileMenu.profileLink.href) || (e.href = t), a && !n.mobileMenu || r === (r = i.mobileMenu.profileLink.alt || "") || W(e, "alt", r), a && !n.colorClassNames || o === (o = i.colorClassNames.primary + " svelte-4ldyho") || (e.className = o)
                    },
                    i: function(n) {
                        a || (c.$$.fragment.i(n), a = !0)
                    },
                    o: function(n) {
                        c.$$.fragment.o(n), a = !1
                    },
                    d: function(n) {
                        n && T(e), c.$destroy()
                    }
                }
            }

            function He(n) {
                var e, t = new Le({
                    props: {
                        menuOpen: n.menuOpen,
                        className: n.colorClassNames.primary
                    }
                });
                return t.$on("click", n.click_handler), {
                    c: function() {
                        t.$$.fragment.c()
                    },
                    l: function(n) {
                        t.$$.fragment.l(n)
                    },
                    m: function(n, r) {
                        yn(t, n, r), e = !0
                    },
                    p: function(n, e) {
                        var r = {};
                        n.menuOpen && (r.menuOpen = e.menuOpen), n.colorClassNames && (r.className = e.colorClassNames.primary), t.$set(r)
                    },
                    i: function(n) {
                        e || (t.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        t.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        t.$destroy(n)
                    }
                }
            }

            function Ve(n) {
                for (var e, t, r, o, a, s, i, l, c, u, f, m, d = n.mobileItems, h = [], v = 0; v < d.length; v += 1) h[v] = Ye(Te(n, d, v));

                function $(n, e, t) {
                    h[n] && (e && Nn(function() {
                        h[n].d(e), h[n] = null
                    }), h[n].o(t))
                }
                var b = [{
                        className: n.colorClassNames.primary
                    }, n.brand],
                    y = {};
                for (v = 0; v < b.length; v += 1) y = N(y, b[v]);
                var k = new zn({
                    props: y
                });
                return {
                    c: function() {
                        e = D("div"), r = j(), o = D("nav"), a = D("ul");
                        for (var n = 0; n < h.length; n += 1) h[n].c();
                        s = j(), i = D("div"), k.$$.fragment.c(), this.h()
                    },
                    l: function(n) {
                        V(e = G(n, "DIV", {
                            class: !0
                        }, !1)).forEach(T), r = U(n, "\n\n    ");
                        for (var t = V(o = G(n, "NAV", {
                                role: !0,
                                class: !0
                            }, !1)), l = V(a = G(t, "UL", {
                                class: !0
                            }, !1)), c = 0; c < h.length; c += 1) h[c].l(l);
                        l.forEach(T), s = U(t, "\n\n      ");
                        var u = V(i = G(t, "DIV", {
                            class: !0
                        }, !1));
                        k.$$.fragment.l(u), u.forEach(T), t.forEach(T), this.h()
                    },
                    h: function() {
                        e.className = "mh-overlay svelte-4ldyho", a.className = "svelte-4ldyho", i.className = "mh-brand-wrapper svelte-4ldyho", W(o, "role", "navigation"), o.className = "svelte-4ldyho", m = S(e, "click", n.click_handler_1)
                    },
                    m: function(n, t) {
                        O(n, e, t), O(n, r, t), O(n, o, t), I(o, a);
                        for (var l = 0; l < h.length; l += 1) h[l].m(a, null);
                        I(o, s), I(o, i), yn(k, i, null), f = !0
                    },
                    p: function(n, e) {
                        if (n.mobileItems || n.colorClassNames) {
                            d = e.mobileItems;
                            for (var t = 0; t < d.length; t += 1) {
                                var r = Te(e, d, t);
                                h[t] ? (h[t].p(n, r), h[t].i(1)) : (h[t] = Ye(r), h[t].c(), h[t].i(1), h[t].m(a, null))
                            }
                            for (pn(); t < h.length; t += 1) $(t, 1, 1);
                            gn()
                        }
                        var o = n.colorClassNames || n.brand ? Cn(b, [n.colorClassNames && {
                            className: e.colorClassNames.primary
                        }, n.brand && e.brand]) : {};
                        k.$set(o)
                    },
                    i: function(r) {
                        if (!f) {
                            fn(function() {
                                t || (t = bn(e, ne, {}, !0)), t.run(1)
                            });
                            for (var a = 0; a < d.length; a += 1) h[a].i();
                            k.$$.fragment.i(r), l || fn(function() {
                                (l = $n(i, ee, {
                                    delayMultiplier: n.mobileBrandDelayMultiplier
                                })).start()
                            }), fn(function() {
                                u && u.end(1), c || (c = $n(o, ee, {})), c.start()
                            }), f = !0
                        }
                    },
                    o: function(n) {
                        t || (t = bn(e, ne, {}, !1)), t.run(0), h = h.filter(Boolean);
                        for (var r = 0; r < h.length; r += 1) $(r, 0);
                        k.$$.fragment.o(n), c && c.invalidate(), n && (u = function(n, e, t) {
                            var r, o = e(n, t),
                                a = !0,
                                s = tn;

                            function i() {
                                var e = o,
                                    t = e.delay,
                                    i = void 0 === t ? 0 : t,
                                    l = e.duration,
                                    c = void 0 === l ? 300 : l,
                                    u = e.easing,
                                    f = void 0 === u ? g : u,
                                    m = e.tick,
                                    d = void 0 === m ? p : m,
                                    h = e.css;
                                h && (r = Q(n, 1, 0, c, i, f, h));
                                var v = window.performance.now() + i,
                                    N = v + c;
                                M(function(n) {
                                    if (a) {
                                        if (n >= N) return d(0, 1), --s.remaining || C(s.callbacks), !1;
                                        if (n >= v) {
                                            var e = f((n - v) / c);
                                            d(1 - e, e)
                                        }
                                    }
                                    return a
                                })
                            }
                            return s.remaining += 1, "function" == typeof o ? hn().then(function() {
                                o = o(), i()
                            }) : i(), {
                                end: function(e) {
                                    e && o.tick && o.tick(1, 0), a && (r && J(n, r), a = !1)
                                }
                            }
                        }(o, ee, {
                            duration: Kn.short,
                            easing: Zn.out
                        })), f = !1
                    },
                    d: function(n) {
                        n && (T(e), t && t.end(), T(r), T(o)), _(h, n), k.$destroy(), n && u && u.end(), m()
                    }
                }
            }

            function Ge(n) {
                var e, t = new ie({
                    props: {
                        colorClassNames: n.colorClassNames,
                        index: n.index
                    }
                });
                return {
                    c: function() {
                        t.$$.fragment.c()
                    },
                    l: function(n) {
                        t.$$.fragment.l(n)
                    },
                    m: function(n, r) {
                        yn(t, n, r), e = !0
                    },
                    p: function(n, e) {
                        var r = {};
                        n.colorClassNames && (r.colorClassNames = e.colorClassNames), t.$set(r)
                    },
                    i: function(n) {
                        e || (t.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        t.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        t.$destroy(n)
                    }
                }
            }

            function Ue(n) {
                for (var e, t = [{
                        colorClassNames: n.colorClassNames
                    }, {
                        index: n.index
                    }, n.item.parameters], r = {}, o = 0; o < t.length; o += 1) r = N(r, t[o]);
                var a = new oe({
                    props: r
                });
                return {
                    c: function() {
                        a.$$.fragment.c()
                    },
                    l: function(n) {
                        a.$$.fragment.l(n)
                    },
                    m: function(n, t) {
                        yn(a, n, t), e = !0
                    },
                    p: function(n, e) {
                        var r = n.colorClassNames || n.mobileItems ? Cn(t, [n.colorClassNames && {
                            colorClassNames: e.colorClassNames
                        }, {
                            index: e.index
                        }, n.mobileItems && e.item.parameters]) : {};
                        a.$set(r)
                    },
                    i: function(n) {
                        e || (a.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        a.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        a.$destroy(n)
                    }
                }
            }

            function Ye(n) {
                var e, t, r, o, a = [Ue, Ge],
                    s = [];

                function i(n) {
                    return "link" === n.item.type ? 0 : "sep" === n.item.type ? 1 : -1
                }
                return ~(e = i(n)) && (t = s[e] = a[e](n)), {
                    c: function() {
                        t && t.c(), r = B()
                    },
                    l: function(n) {
                        t && t.l(n), r = B()
                    },
                    m: function(n, t) {
                        ~e && s[e].m(n, t), O(n, r, t), o = !0
                    },
                    p: function(n, o) {
                        var l = e;
                        (e = i(o)) === l ? ~e && s[e].p(n, o) : (t && (pn(), Nn(function() {
                            s[l].d(1), s[l] = null
                        }), t.o(1), gn()), ~e ? ((t = s[e]) || (t = s[e] = a[e](o)).c(), t.i(1), t.m(r.parentNode, r)) : t = null)
                    },
                    i: function(n) {
                        o || (t && t.i(), o = !0)
                    },
                    o: function(n) {
                        t && t.o(), o = !1
                    },
                    d: function(n) {
                        ~e && s[e].d(n), n && T(r)
                    }
                }
            }

            function qe(n) {
                var e, t, r, o, a, s, i, l, c;
                fn(n.onwindowresize);
                for (var u = new Oe({
                        props: {
                            scrollingElementAccessor: n.scrollingElementAccessor,
                            enable: n.menuOpen
                        }
                    }), f = n.items, m = [], d = 0; d < f.length; d += 1) m[d] = je(_e(n, f, d));

                function h(n, e, t) {
                    m[n] && (e && Nn(function() {
                        m[n].d(e), m[n] = null
                    }), m[n].o(t))
                }
                var v = n.user && Be(n),
                    p = n.mobileItems.length > 0 && He(n),
                    g = n.menuOpen && Ve(n);
                return {
                    c: function() {
                        u.$$.fragment.c(), e = j(), t = D("nav"), r = D("ul");
                        for (var n = 0; n < m.length; n += 1) m[n].c();
                        o = j(), a = D("div"), v && v.c(), s = j(), p && p.c(), i = j(), g && g.c(), this.h()
                    },
                    l: function(n) {
                        u.$$.fragment.l(n), e = U(n, "\n\n");
                        for (var l = V(t = G(n, "NAV", {
                                role: !0,
                                class: !0
                            }, !1)), c = V(r = G(l, "UL", {
                                class: !0
                            }, !1)), f = 0; f < m.length; f += 1) m[f].l(c);
                        c.forEach(T), l.forEach(T), o = U(n, "\n\n");
                        var d = V(a = G(n, "DIV", {
                            class: !0
                        }, !1));
                        v && v.l(d), s = U(d, "\n\n  "), p && p.l(d), i = U(d, "\n\n  "), g && g.l(d), d.forEach(T), this.h()
                    },
                    h: function() {
                        r.className = "svelte-4ldyho", W(t, "role", "navigation"), t.className = "mh-desktop svelte-4ldyho", a.className = "mh-mobile-menu svelte-4ldyho", c = S(window, "resize", n.onwindowresize)
                    },
                    m: function(n, c) {
                        yn(u, n, c), O(n, e, c), O(n, t, c), I(t, r);
                        for (var f = 0; f < m.length; f += 1) m[f].m(r, null);
                        O(n, o, c), O(n, a, c), v && v.m(a, null), I(a, s), p && p.m(a, null), I(a, i), g && g.m(a, null), l = !0
                    },
                    p: function(n, e) {
                        var t = {};
                        if (n.scrollingElementAccessor && (t.scrollingElementAccessor = e.scrollingElementAccessor), n.menuOpen && (t.enable = e.menuOpen), u.$set(t), n.items || n.colorClassNames || n.user || n.brand) {
                            f = e.items;
                            for (var o = 0; o < f.length; o += 1) {
                                var l = _e(e, f, o);
                                m[o] ? (m[o].p(n, l), m[o].i(1)) : (m[o] = je(l), m[o].c(), m[o].i(1), m[o].m(r, null))
                            }
                            for (pn(); o < m.length; o += 1) h(o, 1, 1);
                            gn()
                        }
                        e.user ? v ? (v.p(n, e), v.i(1)) : ((v = Be(e)).c(), v.i(1), v.m(a, s)) : v && (pn(), Nn(function() {
                            v.d(1), v = null
                        }), v.o(1), gn()), e.mobileItems.length > 0 ? p ? (p.p(n, e), p.i(1)) : ((p = He(e)).c(), p.i(1), p.m(a, i)) : p && (pn(), Nn(function() {
                            p.d(1), p = null
                        }), p.o(1), gn()), e.menuOpen ? g ? (g.p(n, e), g.i(1)) : ((g = Ve(e)).c(), g.i(1), g.m(a, null)) : g && (pn(), Nn(function() {
                            g.d(1), g = null
                        }), g.o(1), gn())
                    },
                    i: function(n) {
                        if (!l) {
                            u.$$.fragment.i(n);
                            for (var e = 0; e < f.length; e += 1) m[e].i();
                            v && v.i(), p && p.i(), g && g.i(), l = !0
                        }
                    },
                    o: function(n) {
                        u.$$.fragment.o(n), m = m.filter(Boolean);
                        for (var e = 0; e < m.length; e += 1) h(e, 0);
                        v && v.o(), p && p.o(), g && g.o(), l = !1
                    },
                    d: function(n) {
                        u.$destroy(n), n && (T(e), T(t)), _(m, n), n && (T(o), T(a)), v && v.d(), p && p.d(), g && g.d(), c()
                    }
                }
            }

            function Re(n, e, t) {
                var r, o, a, s = e.user,
                    i = void 0 === s ? null : s,
                    c = e.brand,
                    u = e.items,
                    f = void 0 === u ? null : u,
                    m = e.mobileMenu,
                    d = void 0 === m ? null : m,
                    h = e.colorClassNames,
                    p = e.scrollingElementAccessor,
                    g = !1;
                return n.$set = function(n) {
                    "user" in n && t("user", i = n.user), "brand" in n && t("brand", c = n.brand), "items" in n && t("items", f = n.items), "mobileMenu" in n && t("mobileMenu", d = n.mobileMenu), "colorClassNames" in n && t("colorClassNames", h = n.colorClassNames), "scrollingElementAccessor" in n && t("scrollingElementAccessor", p = n.scrollingElementAccessor)
                }, n.$$.update = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        items: 1,
                        mobileItems: 1
                    };
                    n.items && t("items", f = f || []), n.items && t("mobileItems", o = f.reduce(function(n, e) {
                        return [].concat(v(n), v("profile" === e.type ? e.parameters.items.map(function(n) {
                            return l({}, n, {
                                parameters: l({}, n.parameters, {
                                    tier: 2
                                })
                            })
                        }) : [e]))
                    }, [])), n.mobileItems && t("mobileBrandDelayMultiplier", a = o.length + 5)
                }, {
                    user: i,
                    brand: c,
                    items: f,
                    mobileMenu: d,
                    colorClassNames: h,
                    scrollingElementAccessor: p,
                    innerWidth: r,
                    menuOpen: g,
                    mobileItems: o,
                    mobileBrandDelayMultiplier: a,
                    onwindowresize: function() {
                        r = window.innerWidth, t("innerWidth", r)
                    },
                    click_handler: function() {
                        var n = g = !g;
                        return t("menuOpen", g), n
                    },
                    click_handler_1: function() {
                        var n = g = !1;
                        return t("menuOpen", g), n
                    }
                }
            }
            var Fe = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Re, qe, k, ["user", "brand", "items", "mobileMenu", "colorClassNames", "scrollingElementAccessor"]), t
                }
                return c(e, wn), e
            }();

            function Xe(n) {
                var e, t, r, o, a, s, i, l, c = !1,
                    u = function() {
                        c = !1
                    };
                fn(n.onwindowscroll), fn(n.onwindowresize);
                for (var f = [{
                        className: n.scrollY > 30 && n.fixed && n.viewPortWidth > Ce["breakpoint-tablet"] ? n.scrollColorClassNames.primary : n.colorClassNames.primary
                    }, n.brand], m = {}, d = 0; d < f.length; d += 1) m = N(m, f[d]);
                var h = new zn({
                        props: m
                    }),
                    v = new Fe({
                        props: {
                            colorClassNames: n.scrollY > 30 && n.fixed && n.viewPortWidth > Ce["breakpoint-tablet"] ? n.scrollColorClassNames : n.colorClassNames,
                            scrollingElementAccessor: n.scrollingElementAccessor,
                            items: n.nav,
                            user: n.user,
                            brand: n.brand,
                            mobileMenu: n.mobileMenu
                        }
                    });
                return {
                    c: function() {
                        t = D("header"), r = D("div"), o = D("div"), h.$$.fragment.c(), a = j(), v.$$.fragment.c(), this.h()
                    },
                    l: function(n) {
                        var e = V(t = G(n, "HEADER", {
                                role: !0,
                                class: !0
                            }, !1)),
                            s = V(r = G(e, "DIV", {
                                class: !0
                            }, !1)),
                            i = V(o = G(s, "DIV", {
                                class: !0
                            }, !1));
                        h.$$.fragment.l(i), i.forEach(T), a = U(s, "\n    "), v.$$.fragment.l(s), s.forEach(T), e.forEach(T), this.h()
                    },
                    h: function() {
                        o.className = "mh-brand-wrapper svelte-1uvwsus", r.className = "mh-container svelte-1uvwsus", W(t, "role", "banner"), t.className = s = (n.scrollY > 30 && n.fixed && n.viewPortWidth > Ce["breakpoint-tablet"] ? n.scrollColorClassNames.hover : n.colorClassNames.hover) + " " + n.zIndexClassName + " svelte-1uvwsus", q(t, "mh-transparent", n.transparent), q(t, "mh-semitransparent-top", n.transparent && "semitransparent" === n.topTransparencyMode), q(t, "mh-fixed", n.fixed), q(t, "mh-sticky", n.scrollY > 30 && n.fixed), l = [S(window, "scroll", function() {
                            c = !0, clearTimeout(e), e = setTimeout(u, 100), n.onwindowscroll()
                        }), S(window, "resize", n.onwindowresize)]
                    },
                    m: function(n, e) {
                        O(n, t, e), I(t, r), I(r, o), yn(h, o, null), I(r, a), yn(v, r, null), i = !0
                    },
                    p: function(n, r) {
                        n.scrollY && !c && (c = !0, clearTimeout(e), window.scrollTo(window.pageXOffset, r.scrollY), e = setTimeout(u, 100));
                        var o = n.scrollY || n.fixed || n.viewPortWidth || n.breakpoints || n.scrollColorClassNames || n.colorClassNames || n.brand ? Cn(f, [(n.scrollY || n.fixed || n.viewPortWidth || n.breakpoints || n.scrollColorClassNames || n.colorClassNames) && {
                            className: r.scrollY > 30 && r.fixed && r.viewPortWidth > Ce["breakpoint-tablet"] ? r.scrollColorClassNames.primary : r.colorClassNames.primary
                        }, n.brand && r.brand]) : {};
                        h.$set(o);
                        var a = {};
                        (n.scrollY || n.fixed || n.viewPortWidth || n.breakpoints || n.scrollColorClassNames || n.colorClassNames) && (a.colorClassNames = r.scrollY > 30 && r.fixed && r.viewPortWidth > Ce["breakpoint-tablet"] ? r.scrollColorClassNames : r.colorClassNames), n.scrollingElementAccessor && (a.scrollingElementAccessor = r.scrollingElementAccessor), n.nav && (a.items = r.nav), n.user && (a.user = r.user), n.brand && (a.brand = r.brand), n.mobileMenu && (a.mobileMenu = r.mobileMenu), v.$set(a), (!i || n.scrollY || n.fixed || n.viewPortWidth || n.scrollColorClassNames || n.colorClassNames || n.zIndexClassName) && s !== (s = (r.scrollY > 30 && r.fixed && r.viewPortWidth > Ce["breakpoint-tablet"] ? r.scrollColorClassNames.hover : r.colorClassNames.hover) + " " + r.zIndexClassName + " svelte-1uvwsus") && (t.className = s), (n.scrollY || n.fixed || n.viewPortWidth || n.breakpoints || n.scrollColorClassNames || n.colorClassNames || n.zIndexClassName || n.transparent) && q(t, "mh-transparent", r.transparent), (n.scrollY || n.fixed || n.viewPortWidth || n.breakpoints || n.scrollColorClassNames || n.colorClassNames || n.zIndexClassName || n.transparent || n.topTransparencyMode) && q(t, "mh-semitransparent-top", r.transparent && "semitransparent" === r.topTransparencyMode), (n.scrollY || n.fixed || n.viewPortWidth || n.breakpoints || n.scrollColorClassNames || n.colorClassNames || n.zIndexClassName || n.fixed) && q(t, "mh-fixed", r.fixed), (n.scrollY || n.fixed || n.viewPortWidth || n.breakpoints || n.scrollColorClassNames || n.colorClassNames || n.zIndexClassName || n.scrollY || n.fixed) && q(t, "mh-sticky", r.scrollY > 30 && r.fixed)
                    },
                    i: function(n) {
                        i || (h.$$.fragment.i(n), v.$$.fragment.i(n), i = !0)
                    },
                    o: function(n) {
                        h.$$.fragment.o(n), v.$$.fragment.o(n), i = !1
                    },
                    d: function(n) {
                        n && T(t), h.$destroy(), v.$destroy(), C(l)
                    }
                }
            }

            function Qe(n, e, t) {
                var r, o, a = e.zIndexClassName,
                    s = e.colorClassNames,
                    i = e.scrollColorClassNames,
                    l = e.transparent,
                    c = e.topTransparencyMode,
                    u = e.fixed,
                    f = e.scrollingElementAccessor,
                    m = e.brand,
                    d = void 0 === m ? null : m,
                    h = e.user,
                    v = void 0 === h ? null : h,
                    p = e.nav,
                    g = void 0 === p ? null : p,
                    N = e.mobileMenu,
                    $ = void 0 === N ? null : N;
                return n.$set = function(n) {
                    "zIndexClassName" in n && t("zIndexClassName", a = n.zIndexClassName), "colorClassNames" in n && t("colorClassNames", s = n.colorClassNames), "scrollColorClassNames" in n && t("scrollColorClassNames", i = n.scrollColorClassNames), "transparent" in n && t("transparent", l = n.transparent), "topTransparencyMode" in n && t("topTransparencyMode", c = n.topTransparencyMode), "fixed" in n && t("fixed", u = n.fixed), "scrollingElementAccessor" in n && t("scrollingElementAccessor", f = n.scrollingElementAccessor), "brand" in n && t("brand", d = n.brand), "user" in n && t("user", v = n.user), "nav" in n && t("nav", g = n.nav), "mobileMenu" in n && t("mobileMenu", $ = n.mobileMenu)
                }, n.$$.update = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        colorClassNames: 1,
                        scrollColorClassNames: 1
                    };
                    n.colorClassNames && t("colorClassNames", s = Object.assign({
                        primary: "mh-header-primary",
                        secondary: "mh-header-secondary",
                        hover: "mh-header-hover"
                    }, s)), (n.colorClassNames || n.scrollColorClassNames) && t("scrollColorClassNames", i = Object.assign({
                        primary: s.primary,
                        secondary: s.secondary,
                        hover: s.hover
                    }, i))
                }, {
                    zIndexClassName: a,
                    colorClassNames: s,
                    scrollColorClassNames: i,
                    transparent: l,
                    topTransparencyMode: c,
                    fixed: u,
                    scrollingElementAccessor: f,
                    brand: d,
                    user: v,
                    nav: g,
                    mobileMenu: $,
                    scrollY: r,
                    viewPortWidth: o,
                    onwindowscroll: function() {
                        r = window.pageYOffset, t("scrollY", r)
                    },
                    onwindowresize: function() {
                        o = window.innerWidth, t("viewPortWidth", o)
                    }
                }
            }
            var Je = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Qe, Xe, k, ["zIndexClassName", "colorClassNames", "scrollColorClassNames", "transparent", "topTransparencyMode", "fixed", "scrollingElementAccessor", "brand", "user", "nav", "mobileMenu"]), t
                }
                return c(e, wn), e
            }();

            function Ke(n) {
                for (var e, t, r, o, a, s = [{
                        class: "mh-html-text svelte-f6ll6r"
                    }, n.dir ? {
                        dir: n.dir
                    } : {}], i = {}, l = 0; l < s.length; l += 1) i = N(i, s[l]);

                function c(n) {
                    return n.activeAcknowledgeLabel ? Ze : nt
                }
                var u = c(n),
                    f = u(n);
                return {
                    c: function() {
                        e = D("div"), t = D("div"), r = D("div"), o = j(), f.c(), this.h()
                    },
                    l: function(n) {
                        var a = V(e = G(n, "DIV", {
                                class: !0
                            }, !1)),
                            s = V(t = G(a, "DIV", {
                                class: !0
                            }, !1));
                        V(r = G(s, "DIV", {
                            class: !0
                        }, !1)).forEach(T), o = U(s, "\n    "), f.l(s), s.forEach(T), a.forEach(T), this.h()
                    },
                    h: function() {
                        H(r, i), t.className = "mh-container svelte-f6ll6r", q(t, "mh-active-acknowledge-label", n.activeAcknowledgeLabel), e.className = "mh-message-bar svelte-f6ll6r", a = S(r, "click", n.handleClick, !0)
                    },
                    m: function(a, s) {
                        O(a, e, s), I(e, t), I(t, r), r.innerHTML = n.messageHTML, un(function() {
                            return n.div0_binding(r, null)
                        }), I(t, o), f.m(t, null)
                    },
                    p: function(n, e) {
                        n.messageHTML && (r.innerHTML = e.messageHTML), n.items && (e.div0_binding(null, r), e.div0_binding(r, null)), H(r, Cn(s, [{
                            class: "mh-html-text svelte-f6ll6r"
                        }, n.dir && (e.dir ? {
                            dir: e.dir
                        } : {})])), u === (u = c(e)) && f ? f.p(n, e) : (f.d(1), (f = u(e)) && (f.c(), f.m(t, null))), n.activeAcknowledgeLabel && q(t, "mh-active-acknowledge-label", e.activeAcknowledgeLabel)
                    },
                    d: function(t) {
                        t && T(e), n.div0_binding(null, r), f.d(), a()
                    }
                }
            }

            function Ze(n) {
                var e, t, r;
                return {
                    c: function() {
                        e = D("button"), t = z(n.activeAcknowledgeLabel), this.h()
                    },
                    l: function(r) {
                        var o = V(e = G(r, "BUTTON", {
                            class: !0
                        }, !1));
                        t = U(o, n.activeAcknowledgeLabel), o.forEach(T), this.h()
                    },
                    h: function() {
                        e.className = "mh-active-acknowledge svelte-f6ll6r", r = S(e, "click", n.setAcknowledgedAndUpdateState)
                    },
                    m: function(n, r) {
                        O(n, e, r), I(e, t)
                    },
                    p: function(n, e) {
                        n.activeAcknowledgeLabel && Y(t, e.activeAcknowledgeLabel)
                    },
                    d: function(n) {
                        n && T(e), r()
                    }
                }
            }

            function nt(n) {
                var e, t, r, o, a, s, i;
                return {
                    c: function() {
                        e = D("button"), t = D("span"), r = z("✕"), o = j(), a = D("span"), s = z("Close"), this.h()
                    },
                    l: function(n) {
                        var i = V(e = G(n, "BUTTON", {
                                class: !0
                            }, !1)),
                            l = V(t = G(i, "SPAN", {
                                "aria-hidden": !0
                            }, !1));
                        r = U(l, "✕"), l.forEach(T), o = U(i, "\n      ");
                        var c = V(a = G(i, "SPAN", {
                            class: !0
                        }, !1));
                        s = U(c, "Close"), c.forEach(T), i.forEach(T), this.h()
                    },
                    h: function() {
                        W(t, "aria-hidden", "true"), a.className = "mh-screen-reader-only svelte-f6ll6r", e.className = "mh-close svelte-f6ll6r", i = S(e, "click", n.setAcknowledgedAndUpdateState)
                    },
                    m: function(n, i) {
                        O(n, e, i), I(e, t), I(t, r), I(e, o), I(e, a), I(a, s)
                    },
                    p: p,
                    d: function(n) {
                        n && T(e), i()
                    }
                }
            }

            function et(n) {
                var e, t = n.isVisible && Ke(n);
                return {
                    c: function() {
                        t && t.c(), e = B()
                    },
                    l: function(n) {
                        t && t.l(n), e = B()
                    },
                    m: function(n, r) {
                        t && t.m(n, r), O(n, e, r)
                    },
                    p: function(n, r) {
                        r.isVisible ? t ? t.p(n, r) : ((t = Ke(r)).c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null)
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        t && t.d(n), n && T(e)
                    }
                }
            }

            function tt(n, e, t) {
                var r, o, a = e.getAcknowledged,
                    s = e.setAcknowledged,
                    i = e.onDisplay,
                    l = void 0 === i ? function() {} : i,
                    c = e.clickHandlers,
                    u = void 0 === c ? {} : c,
                    f = e.messageHTML,
                    m = e.dir,
                    d = e.activeAcknowledgeLabel;
                return nn(function() {
                    t("isVisible", o = !a()), setTimeout(l, 250)
                }), n.$set = function(n) {
                    "getAcknowledged" in n && t("getAcknowledged", a = n.getAcknowledged), "setAcknowledged" in n && t("setAcknowledged", s = n.setAcknowledged), "onDisplay" in n && t("onDisplay", l = n.onDisplay), "clickHandlers" in n && t("clickHandlers", u = n.clickHandlers), "messageHTML" in n && t("messageHTML", f = n.messageHTML), "dir" in n && t("dir", m = n.dir), "activeAcknowledgeLabel" in n && t("activeAcknowledgeLabel", d = n.activeAcknowledgeLabel)
                }, {
                    getAcknowledged: a,
                    setAcknowledged: s,
                    onDisplay: l,
                    clickHandlers: u,
                    messageHTML: f,
                    dir: m,
                    activeAcknowledgeLabel: d,
                    messageContainer: r,
                    isVisible: o,
                    handleClick: function(n) {
                        Object.entries(u).forEach(function(e) {
                            var t = h(e, 2),
                                o = t[0],
                                a = t[1];
                            n.target === r.querySelector(o) && a(n)
                        })
                    },
                    setAcknowledgedAndUpdateState: function() {
                        s(), t("isVisible", o = !1)
                    },
                    div0_binding: function(n, e) {
                        t("messageContainer", r = n)
                    }
                }
            }
            var rt = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, tt, et, k, ["getAcknowledged", "setAcknowledged", "onDisplay", "clickHandlers", "messageHTML", "dir", "activeAcknowledgeLabel"]), t
                }
                return c(e, wn), e
            }();

            function ot(n, e, t) {
                var r = Object.create(n);
                return r.messageHTML = e[t].messageHTML, r.dir = e[t].dir, r.options = e[t].options, r.index = t, r
            }

            function at(n) {
                var e, t = new rt({
                    props: {
                        messageHTML: n.messageHTML,
                        dir: n.dir,
                        activeAcknowledgeLabel: n.options.activeAcknowledgeLabel,
                        onDisplay: n.onDisplayWrapper(n.options),
                        getAcknowledged: n.getAcknowledgedWrapper(n.options, n.index),
                        setAcknowledged: n.setAcknowledgedWrapper(n.options, n.index),
                        clickHandlers: n.clickHandlers(n.options)
                    }
                });
                return {
                    c: function() {
                        t.$$.fragment.c()
                    },
                    l: function(n) {
                        t.$$.fragment.l(n)
                    },
                    m: function(n, r) {
                        yn(t, n, r), e = !0
                    },
                    p: function(n, e) {
                        var r = {};
                        n.messageBars && (r.messageHTML = e.messageHTML), n.messageBars && (r.dir = e.dir), n.messageBars && (r.activeAcknowledgeLabel = e.options.activeAcknowledgeLabel), (n.onDisplayWrapper || n.messageBars) && (r.onDisplay = e.onDisplayWrapper(e.options)), (n.getAcknowledgedWrapper || n.messageBars) && (r.getAcknowledged = e.getAcknowledgedWrapper(e.options, e.index)), (n.setAcknowledgedWrapper || n.messageBars) && (r.setAcknowledged = e.setAcknowledgedWrapper(e.options, e.index)), (n.clickHandlers || n.messageBars) && (r.clickHandlers = e.clickHandlers(e.options)), t.$set(r)
                    },
                    i: function(n) {
                        e || (t.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        t.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        t.$destroy(n)
                    }
                }
            }

            function st(n) {
                for (var e, t = [n.navigation, {
                        colorClassNames: n.colorClassNames
                    }, {
                        scrollColorClassNames: n.scrollColorClassNames
                    }, {
                        zIndexClassName: n.zIndexClassName
                    }, {
                        scrollingElementAccessor: n.scrollingElementAccessor
                    }, {
                        transparent: n.transparent && n.allBarsAcknowledged
                    }, {
                        topTransparencyMode: n.topTransparencyMode
                    }, {
                        fixed: n.fixed && n.allBarsAcknowledged
                    }], r = {}, o = 0; o < t.length; o += 1) r = N(r, t[o]);
                var a = new Je({
                    props: r
                });
                return {
                    c: function() {
                        a.$$.fragment.c()
                    },
                    l: function(n) {
                        a.$$.fragment.l(n)
                    },
                    m: function(n, t) {
                        yn(a, n, t), e = !0
                    },
                    p: function(n, e) {
                        var r = n.navigation || n.colorClassNames || n.scrollColorClassNames || n.zIndexClassName || n.scrollingElementAccessor || n.transparent || n.allBarsAcknowledged || n.topTransparencyMode || n.fixed ? Cn(t, [n.navigation && e.navigation, n.colorClassNames && {
                            colorClassNames: e.colorClassNames
                        }, n.scrollColorClassNames && {
                            scrollColorClassNames: e.scrollColorClassNames
                        }, n.zIndexClassName && {
                            zIndexClassName: e.zIndexClassName
                        }, n.scrollingElementAccessor && {
                            scrollingElementAccessor: e.scrollingElementAccessor
                        }, (n.transparent || n.allBarsAcknowledged) && {
                            transparent: e.transparent && e.allBarsAcknowledged
                        }, n.topTransparencyMode && {
                            topTransparencyMode: e.topTransparencyMode
                        }, (n.fixed || n.allBarsAcknowledged) && {
                            fixed: e.fixed && e.allBarsAcknowledged
                        }]) : {};
                        a.$set(r)
                    },
                    i: function(n) {
                        e || (a.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        a.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        a.$destroy(n)
                    }
                }
            }

            function it(n) {
                for (var e, t, r, o = n.messageBars, a = [], s = 0; s < o.length; s += 1) a[s] = at(ot(n, o, s));

                function i(n, e, t) {
                    a[n] && (e && Nn(function() {
                        a[n].d(e), a[n] = null
                    }), a[n].o(t))
                }
                var l = n.navigation && st(n);
                return {
                    c: function() {
                        for (var n = 0; n < a.length; n += 1) a[n].c();
                        e = j(), l && l.c(), t = B()
                    },
                    l: function(n) {
                        for (var r = 0; r < a.length; r += 1) a[r].l(n);
                        e = U(n, "\n"), l && l.l(n), t = B()
                    },
                    m: function(n, o) {
                        for (var s = 0; s < a.length; s += 1) a[s].m(n, o);
                        O(n, e, o), l && l.m(n, o), O(n, t, o), r = !0
                    },
                    p: function(n, r) {
                        if (n.messageBars || n.onDisplayWrapper || n.getAcknowledgedWrapper || n.setAcknowledgedWrapper || n.clickHandlers) {
                            o = r.messageBars;
                            for (var s = 0; s < o.length; s += 1) {
                                var c = ot(r, o, s);
                                a[s] ? (a[s].p(n, c), a[s].i(1)) : (a[s] = at(c), a[s].c(), a[s].i(1), a[s].m(e.parentNode, e))
                            }
                            for (pn(); s < a.length; s += 1) i(s, 1, 1);
                            gn()
                        }
                        r.navigation ? l ? (l.p(n, r), l.i(1)) : ((l = st(r)).c(), l.i(1), l.m(t.parentNode, t)) : l && (pn(), Nn(function() {
                            l.d(1), l = null
                        }), l.o(1), gn())
                    },
                    i: function(n) {
                        if (!r) {
                            for (var e = 0; e < o.length; e += 1) a[e].i();
                            l && l.i(), r = !0
                        }
                    },
                    o: function(n) {
                        a = a.filter(Boolean);
                        for (var e = 0; e < a.length; e += 1) i(e, 0);
                        l && l.o(), r = !1
                    },
                    d: function(n) {
                        _(a, n), n && T(e), l && l.d(n), n && T(t)
                    }
                }
            }

            function lt(n, e, t) {
                var r, o = e.navigation,
                    a = void 0 === o ? null : o,
                    s = e.messageBars,
                    l = void 0 === s ? [] : s,
                    c = e.transparent,
                    u = void 0 === c || c,
                    f = e.topTransparencyMode,
                    m = void 0 === f ? "transparent" : f,
                    d = e.fixed,
                    v = void 0 === d || d,
                    p = e.colorClassNames,
                    g = void 0 === p ? {} : p,
                    N = e.scrollColorClassNames,
                    $ = void 0 === N ? {} : N,
                    b = e.zIndexClassName,
                    C = void 0 === b ? "mh-default-z-index" : b,
                    y = e.scrollingElementAccessor,
                    k = void 0 === y ? function() {
                        return document.body
                    } : y,
                    w = e.onThirdPartyCookiesAuthorized,
                    A = void 0 === w ? function() {} : w,
                    x = [];
                return nn(function() {
                    t("messageBarsState", x = l.map(function() {
                        return {
                            Acknowledged: null
                        }
                    }))
                }), n.$set = function(n) {
                    "navigation" in n && t("navigation", a = n.navigation), "messageBars" in n && t("messageBars", l = n.messageBars), "transparent" in n && t("transparent", u = n.transparent), "topTransparencyMode" in n && t("topTransparencyMode", m = n.topTransparencyMode), "fixed" in n && t("fixed", v = n.fixed), "colorClassNames" in n && t("colorClassNames", g = n.colorClassNames), "scrollColorClassNames" in n && t("scrollColorClassNames", $ = n.scrollColorClassNames), "zIndexClassName" in n && t("zIndexClassName", C = n.zIndexClassName), "scrollingElementAccessor" in n && t("scrollingElementAccessor", k = n.scrollingElementAccessor), "onThirdPartyCookiesAuthorized" in n && t("onThirdPartyCookiesAuthorized", A = n.onThirdPartyCookiesAuthorized)
                }, n.$$.update = function() {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        messageBarsState: 1
                    }).messageBarsState && t("allBarsAcknowledged", r = x.every(function(n) {
                        return n.Acknowledged
                    }))
                }, {
                    navigation: a,
                    messageBars: l,
                    transparent: u,
                    topTransparencyMode: m,
                    fixed: v,
                    colorClassNames: g,
                    scrollColorClassNames: $,
                    zIndexClassName: C,
                    scrollingElementAccessor: k,
                    onThirdPartyCookiesAuthorized: A,
                    getAcknowledgedWrapper: function(n, e) {
                        return function() {
                            var r, o, a;
                            return ["cookie", "multiLanguage"].includes(n.type) ? (o = n.cookie, a = o.name, r = An().split("; ").some(function(n) {
                                return n === "".concat(a, "=1")
                            })) : r = !1, x[e].Acknowledged = r, t("messageBarsState", x), r
                        }
                    },
                    setAcknowledgedWrapper: function(n, e) {
                        return function() {
                            ["cookie", "multiLanguage"].includes(n.type) && function(n) {
                                var e, t, r = n.name,
                                    o = n.expirationDays,
                                    a = n.multiDomain,
                                    s = ["".concat(r, "=1"), "Path=/", "Expires=".concat((e = o, t = new Date, t.setDate(t.getDate() + e), t.toUTCString()))];
                                if (a) {
                                    var i = h(En().host.split(":"), 1)[0].split(".").slice(-2).join(".");
                                    s.push("Domain=".concat(i))
                                }
                                xn(s.join("; "))
                            }(n.cookie);
                            var r = Promise.resolve();
                            "onAcknowledge" === n.trackingMode && (r = Ln()), n.isThirdPartyCookieAcknowledge && r.then(A), x[e].Acknowledged = !0, t("messageBarsState", x)
                        }
                    },
                    onDisplayWrapper: function(n) {
                        return function() {
                            "onDisplay" === n.trackingMode && Ln()
                        }
                    },
                    clickHandlers: function(n) {
                        return "multiLanguage" === n.type ? i({}, n.multiLanguage.updatePreferredLocaleLinkSelector, function() {
                            var e = new XMLHttpRequest;
                            e.open("GET", n.multiLanguage.updatePreferredLocaleUrl, !0), e.send()
                        }) : {}
                    },
                    allBarsAcknowledged: r
                }
            }
            var ct = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, lt, it, k, ["navigation", "messageBars", "transparent", "topTransparencyMode", "fixed", "colorClassNames", "scrollColorClassNames", "zIndexClassName", "scrollingElementAccessor", "onThirdPartyCookiesAuthorized"]), t
                }
                return c(e, wn), e
            }();

            function ut(n, e, t) {
                var r = Object.create(n);
                return r.link = e[t], r
            }

            function ft(n) {
                for (var e, t, r, o, a = n.link.title, s = [{
                        href: n.link.href
                    }, {
                        class: n.colorClassNames.primary + " svelte-12h6dnj"
                    }, In(n.link.dataAttributes)], i = {}, l = 0; l < s.length; l += 1) i = N(i, s[l]);
                return {
                    c: function() {
                        e = D("dd"), t = D("a"), r = z(a), o = j(), this.h()
                    },
                    l: function(n) {
                        var s = V(e = G(n, "DD", {
                                class: !0
                            }, !1)),
                            i = V(t = G(s, "A", {
                                href: !0,
                                class: !0
                            }, !1));
                        r = U(i, a), i.forEach(T), o = U(s, "\n    "), s.forEach(T), this.h()
                    },
                    h: function() {
                        H(t, i), e.className = "svelte-12h6dnj"
                    },
                    m: function(n, a) {
                        O(n, e, a), I(e, t), I(t, r), I(e, o)
                    },
                    p: function(n, e) {
                        n.links && a !== (a = e.link.title) && Y(r, a), H(t, Cn(s, [n.links && {
                            href: e.link.href
                        }, n.colorClassNames && {
                            class: e.colorClassNames.primary + " svelte-12h6dnj"
                        }, (n.normaliseDataAttributes || n.links) && In(e.link.dataAttributes)]))
                    },
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function mt(n) {
                for (var e, t, r, o = n.links, a = [], s = 0; s < o.length; s += 1) a[s] = ft(ut(n, o, s));
                return {
                    c: function() {
                        e = D("dl"), t = D("dt"), r = z(n.title);
                        for (var o = 0; o < a.length; o += 1) a[o].c();
                        this.h()
                    },
                    l: function(o) {
                        var s = V(e = G(o, "DL", {
                                class: !0
                            }, !1)),
                            i = V(t = G(s, "DT", {
                                class: !0
                            }, !1));
                        r = U(i, n.title), i.forEach(T);
                        for (var l = 0; l < a.length; l += 1) a[l].l(s);
                        s.forEach(T), this.h()
                    },
                    h: function() {
                        t.className = "svelte-12h6dnj", e.className = "svelte-12h6dnj"
                    },
                    m: function(n, o) {
                        O(n, e, o), I(e, t), I(t, r);
                        for (var s = 0; s < a.length; s += 1) a[s].m(e, null)
                    },
                    p: function(n, t) {
                        if (n.title && Y(r, t.title), n.links || n.colorClassNames || n.normaliseDataAttributes) {
                            o = t.links;
                            for (var s = 0; s < o.length; s += 1) {
                                var i = ut(t, o, s);
                                a[s] ? a[s].p(n, i) : (a[s] = ft(i), a[s].c(), a[s].m(e, null))
                            }
                            for (; s < a.length; s += 1) a[s].d(1);
                            a.length = o.length
                        }
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        n && T(e), _(a, n)
                    }
                }
            }

            function dt(n, e, t) {
                var r = e.title,
                    o = e.links,
                    a = e.colorClassNames;
                return n.$set = function(n) {
                    "title" in n && t("title", r = n.title), "links" in n && t("links", o = n.links), "colorClassNames" in n && t("colorClassNames", a = n.colorClassNames)
                }, {
                    title: r,
                    links: o,
                    colorClassNames: a
                }
            }
            var ht = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, dt, mt, k, ["title", "links", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function vt(n, e, t) {
                var r = Object.create(n);
                return r.group = e[t], r
            }

            function pt(n) {
                for (var e, t = [{
                        colorClassNames: n.colorClassNames
                    }, n.group], r = {}, o = 0; o < t.length; o += 1) r = N(r, t[o]);
                var a = new ht({
                    props: r
                });
                return {
                    c: function() {
                        a.$$.fragment.c()
                    },
                    l: function(n) {
                        a.$$.fragment.l(n)
                    },
                    m: function(n, t) {
                        yn(a, n, t), e = !0
                    },
                    p: function(n, e) {
                        var r = n.colorClassNames || n.topLinkGroups ? Cn(t, [n.colorClassNames && {
                            colorClassNames: e.colorClassNames
                        }, n.topLinkGroups && e.group]) : {};
                        a.$set(r)
                    },
                    i: function(n) {
                        e || (a.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        a.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        a.$destroy(n)
                    }
                }
            }

            function gt(n) {
                for (var e, t, r = n.topLinkGroups, o = [], a = 0; a < r.length; a += 1) o[a] = pt(vt(n, r, a));

                function s(n, e, t) {
                    o[n] && (e && Nn(function() {
                        o[n].d(e), o[n] = null
                    }), o[n].o(t))
                }
                return {
                    c: function() {
                        for (var n = 0; n < o.length; n += 1) o[n].c();
                        e = B()
                    },
                    l: function(n) {
                        for (var t = 0; t < o.length; t += 1) o[t].l(n);
                        e = B()
                    },
                    m: function(n, r) {
                        for (var a = 0; a < o.length; a += 1) o[a].m(n, r);
                        O(n, e, r), t = !0
                    },
                    p: function(n, t) {
                        if (n.colorClassNames || n.topLinkGroups) {
                            r = t.topLinkGroups;
                            for (var a = 0; a < r.length; a += 1) {
                                var i = vt(t, r, a);
                                o[a] ? (o[a].p(n, i), o[a].i(1)) : (o[a] = pt(i), o[a].c(), o[a].i(1), o[a].m(e.parentNode, e))
                            }
                            for (pn(); a < o.length; a += 1) s(a, 1, 1);
                            gn()
                        }
                    },
                    i: function(n) {
                        if (!t) {
                            for (var e = 0; e < r.length; e += 1) o[e].i();
                            t = !0
                        }
                    },
                    o: function(n) {
                        o = o.filter(Boolean);
                        for (var e = 0; e < o.length; e += 1) s(e, 0);
                        t = !1
                    },
                    d: function(n) {
                        _(o, n), n && T(e)
                    }
                }
            }

            function Nt(n, e, t) {
                var r = e.topLinkGroups,
                    o = e.colorClassNames;
                return n.$set = function(n) {
                    "topLinkGroups" in n && t("topLinkGroups", r = n.topLinkGroups), "colorClassNames" in n && t("colorClassNames", o = n.colorClassNames)
                }, {
                    topLinkGroups: r,
                    colorClassNames: o
                }
            }
            var $t = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Nt, gt, k, ["topLinkGroups", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function bt(n, e, t) {
                var r = Object.create(n);
                return r.link = e[t], r
            }

            function Ct(n) {
                var e, t, r, o, a, s, i, l, c;
                return {
                    c: function() {
                        e = D("li"), t = D("a"), r = D("span"), c = j(), this.h()
                    },
                    l: function(n) {
                        var o = V(e = G(n, "LI", {
                                class: !0
                            }, !1)),
                            a = V(t = G(o, "A", {
                                href: !0,
                                title: !0,
                                class: !0
                            }, !1));
                        V(r = G(a, "SPAN", {
                            role: !0,
                            "aria-label": !0,
                            class: !0
                        }, !1)).forEach(T), a.forEach(T), c = U(o, "\n  "), o.forEach(T), this.h()
                    },
                    h: function() {
                        W(r, "role", "img"), W(r, "aria-label", o = n.link.name), r.className = a = "mh-social-icon-" + n.link.icon + " svelte-dnye4j", t.href = s = n.link.href, t.title = i = n.link.name, t.className = l = n.colorClassNames.primary + " svelte-dnye4j", e.className = "svelte-dnye4j"
                    },
                    m: function(n, o) {
                        O(n, e, o), I(e, t), I(t, r), I(e, c)
                    },
                    p: function(n, e) {
                        n.links && o !== (o = e.link.name) && W(r, "aria-label", o), n.links && a !== (a = "mh-social-icon-" + e.link.icon + " svelte-dnye4j") && (r.className = a), n.links && s !== (s = e.link.href) && (t.href = s), n.links && i !== (i = e.link.name) && (t.title = i), n.colorClassNames && l !== (l = e.colorClassNames.primary + " svelte-dnye4j") && (t.className = l)
                    },
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function yt(n) {
                for (var e, t = n.links, r = [], o = 0; o < t.length; o += 1) r[o] = Ct(bt(n, t, o));
                return {
                    c: function() {
                        e = D("ul");
                        for (var n = 0; n < r.length; n += 1) r[n].c();
                        this.h()
                    },
                    l: function(n) {
                        for (var t = V(e = G(n, "UL", {
                                class: !0
                            }, !1)), o = 0; o < r.length; o += 1) r[o].l(t);
                        t.forEach(T), this.h()
                    },
                    h: function() {
                        e.className = "svelte-dnye4j"
                    },
                    m: function(n, t) {
                        O(n, e, t);
                        for (var o = 0; o < r.length; o += 1) r[o].m(e, null)
                    },
                    p: function(n, o) {
                        if (n.links || n.colorClassNames) {
                            t = o.links;
                            for (var a = 0; a < t.length; a += 1) {
                                var s = bt(o, t, a);
                                r[a] ? r[a].p(n, s) : (r[a] = Ct(s), r[a].c(), r[a].m(e, null))
                            }
                            for (; a < r.length; a += 1) r[a].d(1);
                            r.length = t.length
                        }
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        n && T(e), _(r, n)
                    }
                }
            }

            function kt(n, e, t) {
                var r = e.links,
                    o = void 0 === r ? [] : r,
                    a = e.colorClassNames;
                return n.$set = function(n) {
                    "links" in n && t("links", o = n.links), "colorClassNames" in n && t("colorClassNames", a = n.colorClassNames)
                }, {
                    links: o,
                    colorClassNames: a
                }
            }
            var wt = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, kt, yt, k, ["links", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function At(n) {
                for (var e, t, r = n.$$slots.default, o = function(n, e, t) {
                        if (n) {
                            var r = w(n, e, null);
                            return n[0](r)
                        }
                    }(r, n), a = [{
                        href: n.href
                    }, {
                        class: n.colorClassNames.secondary + " svelte-1ouzkfx"
                    }, n.attributes, n.normalisedDataAttributes], s = {}, i = 0; i < a.length; i += 1) s = N(s, a[i]);
                return {
                    c: function() {
                        e = D("a"), o && o.c(), this.h()
                    },
                    l: function(n) {
                        var t = V(e = G(n, "A", {
                            href: !0,
                            class: !0
                        }, !1));
                        o && o.l(t), t.forEach(T), this.h()
                    },
                    h: function() {
                        H(e, s), q(e, "mh-compact", n.compact)
                    },
                    m: function(n, r) {
                        O(n, e, r), o && o.m(e, null), t = !0
                    },
                    p: function(n, t) {
                        o && o.p && n.$$scope && o.p(function(n, e, t, r) {
                            return n[1] ? N({}, N(e.$$scope.changed || {}, n[1]({}))) : e.$$scope.changed || {}
                        }(r, t), w(r, t, null)), H(e, Cn(a, [n.href && {
                            href: t.href
                        }, n.colorClassNames && {
                            class: t.colorClassNames.secondary + " svelte-1ouzkfx"
                        }, n.attributes && t.attributes, n.normalisedDataAttributes && t.normalisedDataAttributes])), n.compact && q(e, "mh-compact", t.compact)
                    },
                    i: function(n) {
                        t || (o && o.i && o.i(n), t = !0)
                    },
                    o: function(n) {
                        o && o.o && o.o(n), t = !1
                    },
                    d: function(n) {
                        n && T(e), o && o.d(n)
                    }
                }
            }

            function xt(n, e, t) {
                var r, o, a = e.href,
                    s = e.compact,
                    i = void 0 !== s && s,
                    l = e.external,
                    c = void 0 !== l && l,
                    u = e.dataAttributes,
                    f = void 0 === u ? {} : u,
                    m = e.colorClassNames,
                    d = e.$$slots,
                    h = void 0 === d ? {} : d,
                    v = e.$$scope;
                return n.$set = function(n) {
                    "href" in n && t("href", a = n.href), "compact" in n && t("compact", i = n.compact), "external" in n && t("external", c = n.external), "dataAttributes" in n && t("dataAttributes", f = n.dataAttributes), "colorClassNames" in n && t("colorClassNames", m = n.colorClassNames), "$$scope" in n && t("$$scope", v = n.$$scope)
                }, n.$$.update = function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        external: 1,
                        dataAttributes: 1
                    };
                    n.external && t("attributes", r = c ? {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    } : {}), n.dataAttributes && t("normalisedDataAttributes", o = In(f))
                }, {
                    href: a,
                    compact: i,
                    external: c,
                    dataAttributes: f,
                    colorClassNames: m,
                    attributes: r,
                    normalisedDataAttributes: o,
                    $$slots: h,
                    $$scope: v
                }
            }
            var Et = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, xt, At, k, ["href", "compact", "external", "dataAttributes", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function Lt(n) {
                var e, t, r, o;
                return {
                    c: function() {
                        e = z(n.name), t = j(), r = D("img"), this.h()
                    },
                    l: function(o) {
                        e = U(o, n.name), t = U(o, "\n  "), V(r = G(o, "IMG", {
                            src: !0,
                            alt: !0,
                            class: !0
                        }, !1)).forEach(T), this.h()
                    },
                    h: function() {
                        r.src = o = It + "/flags/" + n.flagCode + ".svg", r.alt = "", r.className = "svelte-11cxugd"
                    },
                    m: function(n, o) {
                        O(n, e, o), O(n, t, o), O(n, r, o)
                    },
                    p: function(n, t) {
                        n.name && Y(e, t.name), n.flagCode && o !== (o = It + "/flags/" + t.flagCode + ".svg") && (r.src = o)
                    },
                    d: function(n) {
                        n && (T(e), T(t), T(r))
                    }
                }
            }

            function Mt(n) {
                var e, t = new Et({
                    props: {
                        href: n.href,
                        colorClassNames: n.colorClassNames,
                        compact: !0,
                        dataAttributes: n.dataAttributes,
                        $$slots: {
                            default: [Lt]
                        },
                        $$scope: {
                            ctx: n
                        }
                    }
                });
                return {
                    c: function() {
                        t.$$.fragment.c()
                    },
                    l: function(n) {
                        t.$$.fragment.l(n)
                    },
                    m: function(n, r) {
                        yn(t, n, r), e = !0
                    },
                    p: function(n, e) {
                        var r = {};
                        n.href && (r.href = e.href), n.colorClassNames && (r.colorClassNames = e.colorClassNames), n.dataAttributes && (r.dataAttributes = e.dataAttributes), (n.$$scope || n.flagCode || n.name) && (r.$$scope = {
                            changed: n,
                            ctx: e
                        }), t.$set(r)
                    },
                    i: function(n) {
                        e || (t.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        t.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        t.$destroy(n)
                    }
                }
            }
            var It = "https://masthead.scdn.co/29c1b3e4c97482ddf9ddaabdb3bcf977";

            function Ot(n, e, t) {
                var r = e.href,
                    o = e.name,
                    a = e.dataAttributes,
                    s = void 0 === a ? {} : a,
                    i = e.flagCode,
                    l = e.colorClassNames;
                return n.$set = function(n) {
                    "href" in n && t("href", r = n.href), "name" in n && t("name", o = n.name), "dataAttributes" in n && t("dataAttributes", s = n.dataAttributes), "flagCode" in n && t("flagCode", i = n.flagCode), "colorClassNames" in n && t("colorClassNames", l = n.colorClassNames)
                }, {
                    href: r,
                    name: o,
                    dataAttributes: s,
                    flagCode: i,
                    colorClassNames: l
                }
            }
            var Tt = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Ot, Mt, k, ["href", "name", "dataAttributes", "flagCode", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function _t(n) {
                var e;
                return {
                    c: function() {
                        e = z(n.title)
                    },
                    l: function(t) {
                        e = U(t, n.title)
                    },
                    m: function(n, t) {
                        O(n, e, t)
                    },
                    p: function(n, t) {
                        n.title && Y(e, t.title)
                    },
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function Dt(n) {
                var e, t = new Et({
                    props: {
                        href: n.href,
                        colorClassNames: n.colorClassNames,
                        external: n.external,
                        $$slots: {
                            default: [_t]
                        },
                        $$scope: {
                            ctx: n
                        }
                    }
                });
                return {
                    c: function() {
                        t.$$.fragment.c()
                    },
                    l: function(n) {
                        t.$$.fragment.l(n)
                    },
                    m: function(n, r) {
                        yn(t, n, r), e = !0
                    },
                    p: function(n, e) {
                        var r = {};
                        n.href && (r.href = e.href), n.colorClassNames && (r.colorClassNames = e.colorClassNames), n.external && (r.external = e.external), (n.$$scope || n.title) && (r.$$scope = {
                            changed: n,
                            ctx: e
                        }), t.$set(r)
                    },
                    i: function(n) {
                        e || (t.$$.fragment.i(n), e = !0)
                    },
                    o: function(n) {
                        t.$$.fragment.o(n), e = !1
                    },
                    d: function(n) {
                        t.$destroy(n)
                    }
                }
            }

            function Pt(n, e, t) {
                var r = e.href,
                    o = e.title,
                    a = e.external,
                    s = void 0 !== a && a,
                    i = e.colorClassNames;
                return n.$set = function(n) {
                    "href" in n && t("href", r = n.href), "title" in n && t("title", o = n.title), "external" in n && t("external", s = n.external), "colorClassNames" in n && t("colorClassNames", i = n.colorClassNames)
                }, {
                    href: r,
                    title: o,
                    external: s,
                    colorClassNames: i
                }
            }
            var zt = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Pt, Dt, k, ["href", "title", "external", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function jt(n, e, t) {
                var r = Object.create(n);
                return r.link = e[t], r
            }

            function Bt(n) {
                for (var e, t, r, o = [{
                        colorClassNames: n.colorClassNames
                    }, n.link], a = {}, s = 0; s < o.length; s += 1) a = N(a, o[s]);
                var i = new zt({
                    props: a
                });
                return {
                    c: function() {
                        e = D("li"), i.$$.fragment.c(), t = j(), this.h()
                    },
                    l: function(n) {
                        var r = V(e = G(n, "LI", {
                            class: !0
                        }, !1));
                        i.$$.fragment.l(r), t = U(r, "\n    "), r.forEach(T), this.h()
                    },
                    h: function() {
                        e.className = "svelte-dyqhn3"
                    },
                    m: function(n, o) {
                        O(n, e, o), yn(i, e, null), I(e, t), r = !0
                    },
                    p: function(n, e) {
                        var t = n.colorClassNames || n.bottomLinks ? Cn(o, [n.colorClassNames && {
                            colorClassNames: e.colorClassNames
                        }, n.bottomLinks && e.link]) : {};
                        i.$set(t)
                    },
                    i: function(n) {
                        r || (i.$$.fragment.i(n), r = !0)
                    },
                    o: function(n) {
                        i.$$.fragment.o(n), r = !1
                    },
                    d: function(n) {
                        n && T(e), i.$destroy()
                    }
                }
            }

            function St(n) {
                for (var e, t, r = n.bottomLinks, o = [], a = 0; a < r.length; a += 1) o[a] = Bt(jt(n, r, a));

                function s(n, e, t) {
                    o[n] && (e && Nn(function() {
                        o[n].d(e), o[n] = null
                    }), o[n].o(t))
                }
                return {
                    c: function() {
                        e = D("ul");
                        for (var n = 0; n < o.length; n += 1) o[n].c();
                        this.h()
                    },
                    l: function(n) {
                        for (var t = V(e = G(n, "UL", {
                                class: !0
                            }, !1)), r = 0; r < o.length; r += 1) o[r].l(t);
                        t.forEach(T), this.h()
                    },
                    h: function() {
                        e.className = "svelte-dyqhn3"
                    },
                    m: function(n, r) {
                        O(n, e, r);
                        for (var a = 0; a < o.length; a += 1) o[a].m(e, null);
                        t = !0
                    },
                    p: function(n, t) {
                        if (n.colorClassNames || n.bottomLinks) {
                            r = t.bottomLinks;
                            for (var a = 0; a < r.length; a += 1) {
                                var i = jt(t, r, a);
                                o[a] ? (o[a].p(n, i), o[a].i(1)) : (o[a] = Bt(i), o[a].c(), o[a].i(1), o[a].m(e, null))
                            }
                            for (pn(); a < o.length; a += 1) s(a, 1, 1);
                            gn()
                        }
                    },
                    i: function(n) {
                        if (!t) {
                            for (var e = 0; e < r.length; e += 1) o[e].i();
                            t = !0
                        }
                    },
                    o: function(n) {
                        o = o.filter(Boolean);
                        for (var e = 0; e < o.length; e += 1) s(e, 0);
                        t = !1
                    },
                    d: function(n) {
                        n && T(e), _(o, n)
                    }
                }
            }

            function Wt(n, e, t) {
                var r = e.bottomLinks,
                    o = e.colorClassNames;
                return n.$set = function(n) {
                    "bottomLinks" in n && t("bottomLinks", r = n.bottomLinks), "colorClassNames" in n && t("colorClassNames", o = n.colorClassNames)
                }, {
                    bottomLinks: r,
                    colorClassNames: o
                }
            }
            var Ht = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Wt, St, k, ["bottomLinks", "colorClassNames"]), t
                }
                return c(e, wn), e
            }();

            function Vt(n) {
                var e, t;
                return {
                    c: function() {
                        e = D("span"), t = z(n.copyrightNotice), this.h()
                    },
                    l: function(r) {
                        var o = V(e = G(r, "SPAN", {
                            class: !0
                        }, !1));
                        t = U(o, n.copyrightNotice), o.forEach(T), this.h()
                    },
                    h: function() {
                        e.className = "svelte-1so9ic8"
                    },
                    m: function(n, r) {
                        O(n, e, r), I(e, t)
                    },
                    p: function(n, e) {
                        n.copyrightNotice && Y(t, e.copyrightNotice)
                    },
                    i: p,
                    o: p,
                    d: function(n) {
                        n && T(e)
                    }
                }
            }

            function Gt(n, e, t) {
                var r = e.copyrightNotice;
                return n.$set = function(n) {
                    "copyrightNotice" in n && t("copyrightNotice", r = n.copyrightNotice)
                }, {
                    copyrightNotice: r
                }
            }
            var Ut = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, Gt, Vt, k, ["copyrightNotice"]), t
                }
                return c(e, wn), e
            }();

            function Yt(n) {
                for (var e, t, r, o, a, s, i, l, c, u, f, m, d, h, v = [{
                        className: n.colorClassNames.primary
                    }, n.brand], p = {}, g = 0; g < v.length; g += 1) p = N(p, v[g]);
                var $ = new zn({
                        props: p
                    }),
                    b = new $t({
                        props: {
                            colorClassNames: n.colorClassNames,
                            topLinkGroups: n.topLinkGroups
                        }
                    }),
                    C = new wt({
                        props: {
                            colorClassNames: n.colorClassNames,
                            links: n.socialLinks
                        }
                    }),
                    y = [{
                        colorClassNames: n.colorClassNames
                    }, n.country],
                    k = {};
                for (g = 0; g < y.length; g += 1) k = N(k, y[g]);
                var w = new Tt({
                        props: k
                    }),
                    A = new Ht({
                        props: {
                            colorClassNames: n.colorClassNames,
                            bottomLinks: n.bottomLinks
                        }
                    }),
                    x = new Ut({
                        props: {
                            copyrightNotice: n.copyrightNotice
                        }
                    });
                return {
                    c: function() {
                        e = D("footer"), t = D("nav"), r = D("div"), $.$$.fragment.c(), o = j(), a = D("div"), b.$$.fragment.c(), s = j(), i = D("div"), C.$$.fragment.c(), l = j(), c = D("div"), w.$$.fragment.c(), u = j(), f = D("div"), A.$$.fragment.c(), m = j(), x.$$.fragment.c(), this.h()
                    },
                    l: function(n) {
                        var d = V(e = G(n, "FOOTER", {
                                class: !0
                            }, !1)),
                            h = V(t = G(d, "NAV", {
                                class: !0
                            }, !1)),
                            v = V(r = G(h, "DIV", {
                                class: !0
                            }, !1));
                        $.$$.fragment.l(v), v.forEach(T), o = U(h, "\n\n    ");
                        var p = V(a = G(h, "DIV", {
                            class: !0
                        }, !1));
                        b.$$.fragment.l(p), p.forEach(T), s = U(h, "\n\n    ");
                        var g = V(i = G(h, "DIV", {
                            class: !0
                        }, !1));
                        C.$$.fragment.l(g), g.forEach(T), l = U(h, "\n\n    ");
                        var N = V(c = G(h, "DIV", {
                            class: !0
                        }, !1));
                        w.$$.fragment.l(N), N.forEach(T), u = U(h, "\n\n    ");
                        var y = V(f = G(h, "DIV", {
                            class: !0
                        }, !1));
                        A.$$.fragment.l(y), m = U(y, "\n      "), x.$$.fragment.l(y), y.forEach(T), h.forEach(T), d.forEach(T), this.h()
                    },
                    h: function() {
                        r.className = "mh-brand svelte-ox727r", a.className = "mh-top-links svelte-ox727r", i.className = "mh-social-icons svelte-ox727r", c.className = "mh-country svelte-ox727r", f.className = "mh-bottom-links svelte-ox727r", t.className = "svelte-ox727r", e.className = d = n.colorClassNames.hover + " svelte-ox727r"
                    },
                    m: function(n, d) {
                        O(n, e, d), I(e, t), I(t, r), yn($, r, null), I(t, o), I(t, a), yn(b, a, null), I(t, s), I(t, i), yn(C, i, null), I(t, l), I(t, c), yn(w, c, null), I(t, u), I(t, f), yn(A, f, null), I(f, m), yn(x, f, null), h = !0
                    },
                    p: function(n, t) {
                        var r = n.colorClassNames || n.brand ? Cn(v, [n.colorClassNames && {
                            className: t.colorClassNames.primary
                        }, n.brand && t.brand]) : {};
                        $.$set(r);
                        var o = {};
                        n.colorClassNames && (o.colorClassNames = t.colorClassNames), n.topLinkGroups && (o.topLinkGroups = t.topLinkGroups), b.$set(o);
                        var a = {};
                        n.colorClassNames && (a.colorClassNames = t.colorClassNames), n.socialLinks && (a.links = t.socialLinks), C.$set(a);
                        var s = n.colorClassNames || n.country ? Cn(y, [n.colorClassNames && {
                            colorClassNames: t.colorClassNames
                        }, n.country && t.country]) : {};
                        w.$set(s);
                        var i = {};
                        n.colorClassNames && (i.colorClassNames = t.colorClassNames), n.bottomLinks && (i.bottomLinks = t.bottomLinks), A.$set(i);
                        var l = {};
                        n.copyrightNotice && (l.copyrightNotice = t.copyrightNotice), x.$set(l), h && !n.colorClassNames || d === (d = t.colorClassNames.hover + " svelte-ox727r") || (e.className = d)
                    },
                    i: function(n) {
                        h || ($.$$.fragment.i(n), b.$$.fragment.i(n), C.$$.fragment.i(n), w.$$.fragment.i(n), A.$$.fragment.i(n), x.$$.fragment.i(n), h = !0)
                    },
                    o: function(n) {
                        $.$$.fragment.o(n), b.$$.fragment.o(n), C.$$.fragment.o(n), w.$$.fragment.o(n), A.$$.fragment.o(n), x.$$.fragment.o(n), h = !1
                    },
                    d: function(n) {
                        n && T(e), $.$destroy(), b.$destroy(), C.$destroy(), w.$destroy(), A.$destroy(), x.$destroy()
                    }
                }
            }

            function qt(n, e, t) {
                var r = e.brand,
                    o = e.topLinkGroups,
                    a = e.socialLinks,
                    s = e.country,
                    i = e.colorClassNames,
                    l = e.bottomLinks,
                    c = e.copyrightNotice;
                return n.$set = function(n) {
                    "brand" in n && t("brand", r = n.brand), "topLinkGroups" in n && t("topLinkGroups", o = n.topLinkGroups), "socialLinks" in n && t("socialLinks", a = n.socialLinks), "country" in n && t("country", s = n.country), "colorClassNames" in n && t("colorClassNames", i = n.colorClassNames), "bottomLinks" in n && t("bottomLinks", l = n.bottomLinks), "copyrightNotice" in n && t("copyrightNotice", c = n.copyrightNotice)
                }, n.$$.update = function() {
                    (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        colorClassNames: 1
                    }).colorClassNames && t("colorClassNames", i = Object.assign({
                        primary: "mh-footer-primary",
                        secondary: "mh-footer-secondary",
                        hover: "mh-footer-hover"
                    }, i))
                }, {
                    brand: r,
                    topLinkGroups: o,
                    socialLinks: a,
                    country: s,
                    colorClassNames: i,
                    bottomLinks: l,
                    copyrightNotice: c
                }
            }
            var Rt = function(n) {
                function e(n) {
                    var t;
                    return o(this, e), kn(m(t = d(this, u(e).call(this))), n, qt, Yt, k, ["brand", "topLinkGroups", "socialLinks", "country", "colorClassNames", "bottomLinks", "copyrightNotice"]), t
                }
                return c(e, wn), e
            }()
        }
    }
]);
//# sourceMappingURL=vendors~masthead.ea1a59c6c287f04222a7.js.map