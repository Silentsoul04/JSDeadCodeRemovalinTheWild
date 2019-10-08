! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-progress-loader", [], t) : "object" == typeof exports ? exports["wafer-progress-loader"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-progress-loader"] = t())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(o) {
            if (r[o]) return r[o].exports;
            var n = r[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function(e, r, o) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: o
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

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function i(e, t) {
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

            function l(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function s(e, t) {
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
            var c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                u = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                f = function e(t, r, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    if (void 0 === n) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : e(i, r, o)
                    }
                    if ("value" in n) return n.value;
                    var a = n.get;
                    if (void 0 !== a) return a.call(o)
                },
                h = window.wafer,
                d = h.constants,
                p = h.features,
                v = h.utils,
                y = h.WaferBaseClass,
                b = window.wafer.base,
                g = d.ATTR_PREFIX,
                w = v.elementInView,
                m = v.findAncestor,
                _ = function(e) {
                    function t(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = (r.counter, r.selector);
                        r.syncDelay;
                        o(this, t);
                        var a = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                                selector: i
                            }, {})),
                            l = e.getAttribute(g + "behavior") || "scroll",
                            s = e.getAttribute(g + "boundary"),
                            u = e.getAttribute(g + "direction") || "normal",
                            f = e.getAttribute(g + "type") || "circle",
                            h = document.createElement("canvas"),
                            d = h.getContext("2d"),
                            p = e.getAttribute(g + "stroke-color") || "#000",
                            v = e.getAttribute(g + "stroke-end-color"),
                            y = e.getAttribute(g + "target"),
                            b = e.getAttribute(g + "iteration-count"),
                            w = e.getAttribute(g + "scroll-height-container"),
                            _ = e.offsetWidth,
                            C = e.offsetHeight,
                            O = 2 * Math.PI,
                            j = window,
                            k = j.devicePixelRatio,
                            P = void 0 === k ? 1 : k,
                            x = e.getAttribute(g + "line-width") || 10;
                        if (x = null === x || void 0 === x ? 20 : Number(x), h.setAttribute("height", P * C), h.setAttribute("width", P * _), d.clearRect(0, 0, _, C), e.appendChild(h), a._util = c({}, a._util, {
                                behavior: l,
                                direction: u,
                                height: C,
                                iterationCount: null === b || void 0 === b ? 1 : Number(b),
                                lineWidth: x,
                                loaderElem: h,
                                loaderElemCtx: d,
                                scrollHeightContainer: document.querySelector(w) || document.body,
                                stokeStartPosition: O,
                                strokeColor: p,
                                strokeEndColor: v,
                                targetElem: y && (s && m(e, s) || document.body).querySelector(y),
                                type: f,
                                width: _
                            }), "circle" === f) {
                            var E = _ / 2,
                                T = C / 2;
                            a._util.arcX = E, a._util.arcY = T, a._util.arcR = Math.max(E - x / 2, 0)
                        }
                        return a._state = {
                            heightToCompare: a.heightToCompare,
                            loaderCompleteRatio: 0,
                            scrollContainerObserver: null,
                            strokeColor: null
                        }, a.addEventListeners(), a
                    }
                    return i(t, e), u(t, [{
                        key: "addEventListeners",
                        value: function() {
                            var e = this;
                            if (p.mutationObserver) {
                                var t = this._util.scrollHeightContainer;
                                this._state.scrollContainerObserver = new MutationObserver(function() {
                                    e._state.heightToCompare = e.heightToCompare, e.draw()
                                }), this._state.scrollContainerObserver.observe(t, {
                                    childList: !0,
                                    subtree: !0
                                })
                            }
                        }
                    }, {
                        key: "didSync",
                        value: function() {
                            this._state.heightToCompare = this.heightToCompare
                        }
                    }, {
                        key: "draw",
                        value: function() {
                            var e = this;
                            return new Promise(function(t) {
                                var r = e.loaderCompleteRatio;
                                if (r) {
                                    var o = e._util,
                                        n = o.direction,
                                        i = o.height,
                                        a = o.iterationCount,
                                        l = o.lineWidth,
                                        s = o.loaderElemCtx,
                                        c = o.stokeStartPosition,
                                        u = o.strokeEndColor,
                                        f = o.type,
                                        h = o.width,
                                        d = e._util.strokeColor,
                                        p = e._state.strokeColor;
                                    if (!("both" !== n && e._state.loaderCompleteRatio >= r)) {
                                        if (e._state.loaderCompleteRatio = r, s.clearRect(0, 0, h, i), s.beginPath(), 1 === r && u && (d = e._state.strokeColor = u), "circle" === f) {
                                            var v = e._util,
                                                y = v.arcX,
                                                b = v.arcY,
                                                g = v.arcR,
                                                w = void 0;
                                            w = 1 === r ? 0 : r * Math.PI * 2, s.arc(y, b, g, c, w, !1), s.lineWidth = l, s.strokeStyle = p || d, s.stroke()
                                        } else s.fillStyle = p || d, s.rect(0, 0, h * r, i), s.fill();
                                        if (1 === a && 1 === r) return void t(!0);
                                        t()
                                    }
                                }
                            })
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this._state.scrollContainerObserver;
                            e && e.disconnect(), f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "heightToCompare",
                        get: function() {
                            if (this._util) {
                                var e = this._util,
                                    t = e.scrollHeightContainer,
                                    r = e.targetElem,
                                    o = 0;
                                return r && (o = r.offsetHeight), Math.max(t.scrollHeight - o - document.documentElement.clientHeight, 0)
                            }
                        }
                    }, {
                        key: "config",
                        get: function() {
                            return this._util ? {
                                behavior: this._util.behavior
                            } : {}
                        }
                    }, {
                        key: "loaderCompleteRatio",
                        get: function() {
                            if (!this._util) return 0;
                            var e = this._util.targetElem,
                                t = 0;
                            if (e) {
                                if (!w(e, {
                                        offsetX: 0,
                                        offsetY: 0
                                    }, b.viewport)) return 0;
                                t = e.getBoundingClientRect().top
                            }
                            var r = window,
                                o = r.scrollY,
                                n = Math.max(o - t, 0);
                            return Math.min(n / this._state.heightToCompare, 1)
                        }
                    }]), t
                }(y),
                C = _,
                O = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                j = window.wafer.utils.throttle,
                k = window.wafer.controllers.WaferBaseController,
                P = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.root,
                            o = void 0 === r ? document : r,
                            n = e.selector,
                            i = void 0 === n ? ".wafer-progress-loader" : n,
                            s = e.validateDelay,
                            c = void 0 === s ? 25 : s;
                        a(this, t);
                        var u = l(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            root: o,
                            selector: i,
                            WaferClass: C
                        }));
                        return u._validateWithThrottle = j(function() {
                            u.validate()
                        }, c, u), u.sync(), u
                    }
                    return s(t, e), O(t, [{
                        key: "handleScroll",
                        value: function() {
                            this._validateWithThrottle()
                        }
                    }, {
                        key: "didSync",
                        value: function() {
                            var e = this._state,
                                t = e.elementInstances,
                                r = e.mounted;
                            if (0 !== t.size) {
                                if (!r) return void(this._state.mounted = !0);
                                var o = !0,
                                    n = !1,
                                    i = void 0;
                                try {
                                    for (var a, l = t.values()[Symbol.iterator](); !(o = (a = l.next()).done); o = !0) {
                                        var s = a.value,
                                            c = s.instance;
                                        switch (c.config.behavior) {
                                            case "scroll":
                                                c.didSync()
                                        }
                                    }
                                } catch (e) {
                                    n = !0, i = e
                                } finally {
                                    try {
                                        !o && l.return && l.return()
                                    } finally {
                                        if (n) throw i
                                    }
                                }
                            }
                        }
                    }, {
                        key: "willValidate",
                        value: function() {
                            var e = this._state.elementInstances,
                                t = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var n, i = e.values()[Symbol.iterator](); !(t = (n = i.next()).done); t = !0) {
                                    var a = n.value;
                                    ! function(e) {
                                        var t = e.instance;
                                        switch (t.config.behavior) {
                                            case "scroll":
                                                t.draw().then(function(e) {
                                                    e && t.destroy()
                                                })
                                        }
                                    }(a)
                                }
                            } catch (e) {
                                r = !0, o = e
                            } finally {
                                try {
                                    !t && i.return && i.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                        }
                    }]), t
                }(k),
                x = P;
            t.default = new x({
                selector: ".wafer-progress-loader"
            })
        }
    })
});