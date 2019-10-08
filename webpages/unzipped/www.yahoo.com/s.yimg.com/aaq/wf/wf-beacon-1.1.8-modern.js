! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-beacon", [], t) : "object" == typeof exports ? exports["wafer-beacon"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-beacon"] = t())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function c(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                f = function() {
                    function e(e, t) {
                        var r = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return r
                    }
                    return function(t, r) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, r);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                u = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                h = ["image-beacons", "beacons"],
                v = window.wafer,
                p = v.base,
                y = v.constants,
                d = v.WaferBaseClass,
                b = window.wafer.utils,
                g = b.elementInView,
                w = b.fireBeacon,
                m = ["handleBeaconClick"],
                _ = y.ATTR_PREFIX,
                O = function(e) {
                    function t(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = r.selector,
                            a = r.successClass;
                        n(this, t);
                        var s = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                                selector: o,
                                successClass: a
                            }, {
                                STATE_ATTRS: h
                            })),
                            c = e.getAttribute(_ + "trigger-delay"),
                            u = c ? parseInt(c, 10) : 1e3,
                            v = s._util["image-beacons"] || e.getAttribute(_ + "image-beacons"),
                            p = s._util.beacons || e.getAttribute(_ + "beacons"),
                            y = (e.getAttribute(_ + "trigger-offset") || "").split(" "),
                            d = f(y, 2),
                            b = d[0],
                            g = d[1],
                            w = e.getAttribute(_ + "trigger") || "viewport",
                            O = (e.getAttribute(_ + "trigger-percentage") || "").split(" "),
                            T = f(O, 2),
                            k = T[0],
                            j = T[1],
                            C = k ? Math.max(Math.min(100, parseInt(k, 10)), 0) : 50,
                            P = j ? Math.max(Math.min(100, parseInt(j, 10)), 0) : 50,
                            x = e.hasAttribute(_ + "trigger-cumulative"),
                            A = e.getAttribute(_ + "beacon-container-class") || "",
                            S = !!x;
                        return s._util = l({}, s._util, {
                            "image-beacons": v,
                            beacons: p,
                            delay: u,
                            elem: e,
                            hasOffsetY: !!b,
                            hasOffsetX: !!g,
                            offsetX: Number(g) || 0,
                            offsetY: Number(b) || 0,
                            selector: o,
                            containerClass: A,
                            successClass: a,
                            trigger: w,
                            triggerCumulative: S,
                            inviewTime: 0,
                            inviewStartTime: 0,
                            triggerPercentY: isNaN(C) ? 50 : C,
                            triggerPercentX: isNaN(P) ? 50 : P,
                            url: e.getAttribute(_ + "url")
                        }), m.forEach(function(e) {
                            s[e] = s[e].bind(s)
                        }), s
                    }
                    return o(t, e), u(t, [{
                        key: "load",
                        value: function() {
                            var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                r = t.checkViewport,
                                n = void 0 === r || r,
                                i = this._util,
                                o = i.elem,
                                a = i.inviewStartTime,
                                s = i.successClass,
                                c = i.triggerCumulative,
                                f = this.shouldAlwaysTrigger();
                            return c && 0 === a && (this._util.inviewStartTime = Date.now()), new Promise(function(t) {
                                if (!f && o.classList.contains(s) && t(!1), o.classList.contains("wafer-beacon-in-progress")) t(!1);
                                else {
                                    var r = i["image-beacons"],
                                        a = i.beacons,
                                        c = i.delay,
                                        u = i.inviewTime,
                                        h = i.offsetX,
                                        v = i.offsetY,
                                        y = i.selector,
                                        d = Math.max(0, c - u);
                                    o.classList.add("wafer-beacon-in-progress"), setTimeout(function() {
                                        if ((f || !o.classList.contains(s)) && (0 === d || n && p.isPageVisible && g(o, l({}, i, {
                                                offsetX: h,
                                                offsetY: v
                                            }), p.viewport))) return a && a.split("|").forEach(function(e) {
                                            return w(e)
                                        }), r && r.split("|").forEach(function(e) {
                                            return w(e, {
                                                useNavigator: !1,
                                                useTimestamp: !1
                                            })
                                        }), e.shouldAlwaysTrigger() || o.classList.remove(y.replace(".", "")), o.classList.add(s), o.classList.remove("wafer-beacon-in-progress"), void t(!0);
                                        o.classList.remove("wafer-beacon-in-progress"), t(!1)
                                    }, d)
                                }
                            })
                        }
                    }, {
                        key: "shouldAlwaysTrigger",
                        value: function() {
                            return "eachClick" === this._util.trigger
                        }
                    }, {
                        key: "nodeOutofView",
                        value: function() {
                            var e = this._util,
                                t = e.inviewStartTime;
                            if (t > 0) {
                                var r = Date.now();
                                this._util.inviewTime += r - t
                            }
                            this._util.inviewStartTime = 0
                        }
                    }, {
                        key: "stateDidUpdate",
                        value: function() {}
                    }, {
                        key: "handleBeaconClick",
                        value: function() {
                            this.load()
                        }
                    }, {
                        key: "offsetY",
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this._util.offsetY = this._util.offsetY || e
                        }
                    }, {
                        key: "offsetX",
                        set: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this._util.offsetX = this._util.offsetX || e
                        }
                    }, {
                        key: "config",
                        get: function() {
                            var e = this._util;
                            return {
                                offsetX: e.offsetX,
                                offsetY: e.offsetY,
                                successClass: e.successClass,
                                trigger: e.trigger
                            }
                        }
                    }]), t
                }(d);
            O.events = {
                click: [
                    ["has-beacon-click", "handleBeaconClick"]
                ]
            };
            var T = O,
                k = function() {
                    function e(e, t) {
                        var r = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return r
                    }
                    return function(t, r) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, r);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                j = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                C = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }(),
                P = window.wafer.utils,
                x = P.bindEvent,
                A = P.each,
                S = P.elementInView,
                E = P.throttle,
                X = P.unbindEvent,
                Y = window.wafer.base,
                I = window.wafer.controllers.WaferBaseController,
                L = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = (e.beaconTriggerDelay, e.containerClass),
                            n = void 0 === r ? null : r,
                            i = e.root,
                            o = void 0 === i ? document : i,
                            c = e.selector,
                            l = e.successClass,
                            f = void 0 === l ? "wafer-beacon-loaded" : l,
                            u = e.validateDelay,
                            h = void 0 === u ? 25 : u;
                        a(this, t);
                        var v = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            root: o,
                            selector: c,
                            props: {
                                selector: c,
                                successClass: f
                            },
                            WaferClass: T
                        }));
                        return v._options = j({}, v._options, {
                            container: !!n && o.getElementsByClassName(n)
                        }), v._validateWithThrottle = E(function() {
                            v.validate()
                        }, h, v), v.sync(), v
                    }
                    return c(t, e), C(t, [{
                        key: "handleScroll",
                        value: function() {
                            this._validateWithThrottle()
                        }
                    }, {
                        key: "handleVisibilityChange",
                        value: function() {
                            if (arguments.length > 0 && void 0 !== arguments[0] && !arguments[0]) {
                                var e = this._state.elementInstances,
                                    t = !0,
                                    r = !1,
                                    n = void 0;
                                try {
                                    for (var i, o = e.values()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) i.value.instance.nodeOutofView()
                                } catch (e) {
                                    r = !0, n = e
                                } finally {
                                    try {
                                        !t && o.return && o.return()
                                    } finally {
                                        if (r) throw n
                                    }
                                }
                            } else this._validateWithThrottle()
                        }
                    }, {
                        key: "handleResize",
                        value: function() {
                            this._mapOffset(), this._validateWithThrottle()
                        }
                    }, {
                        key: "willDestroy",
                        value: function() {
                            var e = this,
                                t = this._options.container;
                            t && A(t, function(t) {
                                X(t, "scroll", e._validateWithThrottle)
                            })
                        }
                    }, {
                        key: "didSync",
                        value: function() {
                            var e = this,
                                t = this._state,
                                r = t.elementInstances,
                                n = t.mounted;
                            if (0 !== r.size) {
                                if (!n) {
                                    var i = this._options.container;
                                    this._state.mounted = !0, i && A(i, function(t) {
                                        x(t, "scroll", e._validateWithThrottle)
                                    })
                                }
                                this._mapOffset()
                            }
                        }
                    }, {
                        key: "willValidate",
                        value: function() {
                            var e = this._state.elementInstances,
                                t = this._options;
                            this._mapOffset();
                            var r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o, a = e.entries()[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                                    var s = o.value,
                                        c = k(s, 2),
                                        l = c[0],
                                        f = c[1];
                                    ! function(e, r) {
                                        var n = r.instance,
                                            i = n.config,
                                            o = i.offsetX,
                                            a = i.offsetY,
                                            s = i.successClass;
                                        switch (i.trigger) {
                                            case "viewport":
                                                e.classList.contains(s) || S(e, j({}, t, {
                                                    offsetX: o,
                                                    offsetY: a
                                                }), Y.viewport) ? n.load(e).then(function(e) {
                                                    e && n.destroy()
                                                }) : n.nodeOutofView();
                                            case "click":
                                            case "eachClick":
                                                e.classList.add("has-beacon-click")
                                        }
                                    }(l, f)
                                }
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        }
                    }, {
                        key: "_mapOffset",
                        value: function() {
                            var e = this._state.elementInstances,
                                t = !0,
                                r = !1,
                                n = void 0;
                            try {
                                for (var i, o = e.entries()[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
                                    var a = i.value,
                                        s = k(a, 2),
                                        c = s[0],
                                        l = s[1],
                                        f = l.instance,
                                        u = f._util,
                                        h = u.hasOffsetY,
                                        v = u.hasOffsetX,
                                        p = u.triggerPercentY,
                                        y = u.triggerPercentX;
                                    !h && (l.instance.offsetY = -parseInt(c.clientHeight * p / 100, 10)), !v && (l.instance.offsetX = -parseInt(c.clientWidth * y / 100, 10))
                                }
                            } catch (e) {
                                r = !0, n = e
                            } finally {
                                try {
                                    !t && o.return && o.return()
                                } finally {
                                    if (r) throw n
                                }
                            }
                        }
                    }]), t
                }(I),
                W = L;
            t.default = new W({
                selector: ".wafer-beacon"
            })
        }
    })
});