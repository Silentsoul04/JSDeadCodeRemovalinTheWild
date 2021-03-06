! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-drawer", [], t) : "object" == typeof exports ? exports["wafer-drawer"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-drawer"] = t())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(a) {
            if (r[a]) return r[a].exports;
            var n = r[a] = {
                i: a,
                l: !1,
                exports: {}
            };
            return e[a].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.d = function(e, r, a) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: a
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

            function a(e, t) {
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

            function o(e, t) {
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
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                    }
                    return e
                },
                u = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                        }
                    }
                    return function(t, r, a) {
                        return r && e(t.prototype, r), a && e(t, a), t
                    }
                }(),
                f = function e(t, r, a) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    if (void 0 === n) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : e(i, r, a)
                    }
                    if ("value" in n) return n.value;
                    var o = n.get;
                    if (void 0 !== o) return o.call(a)
                },
                p = window.wafer,
                d = p.base,
                h = p.utils,
                w = p.WaferBaseClass,
                v = h.bindEvent,
                y = h.unbindEvent,
                g = ["drawerstate"],
                _ = ["click", "transitionend"],
                b = {
                    "open-left": "wafer-drawer-open-left",
                    "open-right": "wafer-drawer-open-right",
                    closed: "wafer-drawer-closed"
                },
                m = ".drawer-swipeable",
                O = function(e) {
                    function t(e) {
                        a(this, t);
                        var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {}, {
                                STATE_ATTRS: g
                            })),
                            i = e.querySelector(m),
                            o = e.querySelector(".drawer-transition"),
                            s = ["swipeleft", "swiperight"];
                        if (!i || !o) {
                            var c;
                            return c = void 0, n(r, c)
                        }
                        return r._util = l({}, r._util, {
                            drag: {
                                endX: 0,
                                endY: 0,
                                overallDirectionX: 0,
                                startX: 0,
                                startY: 0
                            },
                            stateClassMap: b,
                            elem: e,
                            events: s,
                            swipeableElem: i,
                            transitionElem: o
                        }), _.forEach(function(e) {
                            r[e] = r[e].bind(r)
                        }), r.addEventListeners(), r.setInitialState(), r
                    }
                    return i(t, e), u(t, [{
                        key: "setInitialState",
                        value: function() {
                            var e = this._util.elem,
                                t = e.getAttribute("data-wf-drawer-state") || "closed";
                            e.classList.add(this._util.stateClassMap[t] || "wafer-drawer-closed"), this._state = {
                                drawerState: t,
                                isTransitioning: !1
                            }
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            var e = this,
                                r = this._util,
                                a = (r.elem, r.events),
                                n = r.transitionElem;
                            0 !== a.size && (f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addEventListeners", this).call(this), a.forEach(function(t) {
                                n && 0 === t.indexOf("swipe") && v(n, "transitionend", e.transitionend)
                            }))
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            var e = this._util.transitionElem;
                            f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeEventListeners", this).call(this), y(e, "transitionend", this.transitionend)
                        }
                    }, {
                        key: "click",
                        value: function(e) {
                            var t = e && e.target && e.target.getAttribute("data-wf-drawer-state");
                            t && (this._state.drawerState = t, this.processStateChange())
                        }
                    }, {
                        key: "touchstart",
                        value: function(e) {
                            var t = this._util.drag,
                                r = e.touches[0],
                                a = r.clientY,
                                n = r.pageX;
                            t.startX = n, t.startY = a
                        }
                    }, {
                        key: "touchend",
                        value: function(e) {
                            this.clearDrag()
                        }
                    }, {
                        key: "touchmove",
                        value: function(e) {
                            var t = this._util.drag;
                            t.endX = e.touches[0].pageX, t.endY = e.touches[0].clientY;
                            var r = 0;
                            t.startX !== t.endX && (r = t.startX > t.endX ? 1 : -1), t.overallDirectionX = r, this.isValidSwipe() && !this._state.isTransitioning && (e.preventDefault(), this.triggerSwipe(), this.clearDrag(), this.touchstart(e))
                        }
                    }, {
                        key: "isValidSwipe",
                        value: function() {
                            var e = this._util,
                                t = Math.abs(e.drag.startX - e.drag.endX);
                            return t > 30 && t > Math.abs(e.drag.startY - e.drag.endY)
                        }
                    }, {
                        key: "triggerSwipe",
                        value: function() {
                            var e = this._util;
                            1 === e.drag.overallDirectionX ? this.swipeleft() : -1 === e.drag.overallDirectionX && this.swiperight()
                        }
                    }, {
                        key: "swipeleft",
                        value: function() {
                            this.processTargets("swipeleft")
                        }
                    }, {
                        key: "swiperight",
                        value: function() {
                            this.processTargets("swiperight")
                        }
                    }, {
                        key: "clearDrag",
                        value: function() {
                            this._util.drag = {
                                endX: 0,
                                endY: 0,
                                overallDirectionX: 0,
                                startX: 0,
                                startY: 0
                            }
                        }
                    }, {
                        key: "transitionend",
                        value: function() {
                            this._state.isTransitioning = !1
                        }
                    }, {
                        key: "processTargets",
                        value: function(e) {
                            var r = this._util,
                                a = r.elem,
                                n = r.events,
                                i = !1,
                                o = this._state.drawerState;
                            if (a && n && n.includes(e)) {
                                if ("swiperight" === e) switch (o) {
                                    case "closed":
                                        this._state.drawerState = "open-left";
                                        break;
                                    case "open-left":
                                        i = !0;
                                        break;
                                    case "open-right":
                                        this._state.drawerState = "closed"
                                }
                                if ("swipeleft" === e) switch (o) {
                                    case "open-left":
                                        this._state.drawerState = "closed";
                                        break;
                                    case "open-right":
                                        i = !0;
                                        break;
                                    case "closed":
                                        this._state.drawerState = "open-right"
                                }
                                return d._emit({
                                    elem: a,
                                    meta: {
                                        eventName: e,
                                        elem: a,
                                        _state: this._state
                                    },
                                    name: t.name
                                }, "drawer:change"), !i && this.processStateChange()
                            }
                        }
                    }, {
                        key: "processStateChange",
                        value: function() {
                            var e = this._util,
                                t = e.elem,
                                r = e.stateClassMap,
                                a = this._state.drawerState,
                                n = r[a];
                            a && n && (t.classList.contains(n) || (this._state.isTransitioning = !0), t.classList.add(n), Object.values(r).forEach(function(e) {
                                e !== n && t.classList.remove(e)
                            }))
                        }
                    }, {
                        key: "stateDidUpdate",
                        value: function() {
                            var e = this._util.drawerstate;
                            this._state.drawerState = e, this.processStateChange()
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this._util.elem.remove()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            f(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this), this.removeEventListeners()
                        }
                    }]), t
                }(w);
            O.events = {
                click: [
                    ["has-click", "click"]
                ],
                touchstart: [
                    ["drawer-swipeable", "touchstart"]
                ],
                touchmove: [
                    ["drawer-swipeable", "touchmove"]
                ],
                touchend: [
                    ["drawer-swipeable", "touchend"]
                ]
            };
            var k = O,
                j = window.wafer.controllers.WaferBaseController,
                S = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.root,
                            a = void 0 === r ? document : r,
                            n = e.selector,
                            i = void 0 === n ? ".wafer-drawer" : n;
                        o(this, t);
                        var c = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            root: a,
                            selector: i,
                            WaferClass: k
                        }));
                        return c.sync(), c
                    }
                    return c(t, e), t
                }(j),
                E = S;
            t.default = new E({
                selector: ".wafer-drawer"
            })
        }
    })
});