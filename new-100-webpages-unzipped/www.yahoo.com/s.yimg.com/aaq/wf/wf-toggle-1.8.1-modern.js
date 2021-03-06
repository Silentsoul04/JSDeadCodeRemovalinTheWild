! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-toggle", [], t) : "object" == typeof exports ? exports["wafer-toggle"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-toggle"] = t())
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

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function u(e, t) {
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
            var c = function() {
                    function e(e, t) {
                        var r = [],
                            o = !0,
                            n = !1,
                            i = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(o = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); o = !0);
                        } catch (e) {
                            n = !0, i = e
                        } finally {
                            try {
                                !o && a.return && a.return()
                            } finally {
                                if (n) throw i
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
                l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                f = function() {
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
                h = function e(t, r, o) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, r);
                    if (void 0 === n) {
                        var i = Object.getPrototypeOf(t);
                        return null === i ? void 0 : e(i, r, o)
                    }
                    if ("value" in n) return n.value;
                    var s = n.get;
                    if (void 0 !== s) return s.call(o)
                },
                v = window.wafer,
                d = v.utils,
                p = v.WaferBaseClass,
                y = d.bindEvent,
                g = d.convertNodeListToArray,
                m = d.unbindEvent,
                w = [],
                b = ["click", "mouseenter", "mouseEnterDelay", "mouseleave", "mouseLeaveDelay", "onLoad", "touchend", "touchmove", "touchstart"],
                _ = window.wafer.base,
                k = function(e) {
                    var t = new Map;
                    return e && "string" == typeof e && e.split(";").forEach(function(e) {
                        var r = e.split(":");
                        if (3 === r.length) {
                            var o = r[0];
                            t.has(o) || t.set(o, []), t.get(o).push(r.slice(1))
                        }
                    }), t
                },
                O = function(e) {
                    function t(e) {
                        o(this, t);
                        var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {}, {
                                STATE_ATTRS: w
                            })),
                            i = e.getAttribute("data-wf-toggle-target"),
                            s = e.getAttribute("data-wf-toggle-class") || "",
                            a = e.getAttribute("data-wf-toggle-delay"),
                            u = e.getAttribute("data-wf-sync-delay"),
                            c = r._util = l({}, r._util, {
                                delay: null === a || void 0 === a ? 0 : Number(a),
                                drag: {
                                    endX: 0,
                                    endY: 0,
                                    overallDirectionX: 0,
                                    startX: 0,
                                    startY: 0
                                },
                                elem: e,
                                syncDelay: null === u || void 0 === u ? 0 : Number(u),
                                targetSelector: i
                            });
                        return r._state = l({}, r._state, {
                            clickAndMouseExitTimeout: null,
                            isClickAndMouseExit: !1
                        }), s && (b.forEach(function(e) {
                            r[e] = r[e].bind(r)
                        }), c.events = k(s), c.events.get("onLoad") && r.processTargets("onLoad"), r.addEventListeners()), r
                    }
                    return i(t, e), f(t, [{
                        key: "addEventListeners",
                        value: function() {
                            var e = this._util,
                                t = e.elem,
                                r = e.events;
                            if (0 !== r.size) {
                                var o = !0,
                                    n = !1,
                                    i = void 0;
                                try {
                                    for (var s, a = r.keys()[Symbol.iterator](); !(o = (s = a.next()).done); o = !0) {
                                        var u = s.value,
                                            c = this._state.isClickAndMouseExit = "clickAndMouseExit" === u;
                                        "click" === u || c ? t.classList.add("has-toggle-click") : "onLoad" !== u && ("clickOutside" !== u ? 0 === u.indexOf("swipe") ? (y(t, "touchstart", this.touchstart), y(t, "touchend", this.touchend), y(t, "touchmove", this.touchmove, {
                                            passive: !1
                                        })) : 0 === u.indexOf("touch") || y(t, u, this[u]) : this._state.isClickOutside = !0)
                                    }
                                } catch (e) {
                                    n = !0, i = e
                                } finally {
                                    try {
                                        !o && a.return && a.return()
                                    } finally {
                                        if (n) throw i
                                    }
                                }
                            }
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            var e = this._util.elem;
                            m(e, "touchstart", this.touchstart), m(e, "touchend", this.touchend), m(e, "touchmove", this.touchmove, {
                                passive: !1
                            }), m(e, "mouseenter", this.mouseEnterDelay), m(e, "mouseleave", this.mouseLeaveDelay), m(e, "mouseenter", this.mouseenter), m(e, "mouseleave", this.mouseleave)
                        }
                    }, {
                        key: "click",
                        value: function() {
                            if (this._state.isClickAndMouseExit) {
                                var e = this._util.elem;
                                y(e, "mouseenter", this.mouseEnterDelay), y(e, "mouseleave", this.mouseLeaveDelay)
                            }
                            this.processTargets("click")
                        }
                    }, {
                        key: "onLoad",
                        value: function() {
                            this.processTargets("onLoad")
                        }
                    }, {
                        key: "mouseenter",
                        value: function() {
                            this.processTargets("mouseenter")
                        }
                    }, {
                        key: "mouseEnterDelay",
                        value: function() {
                            clearTimeout(this._state.clickAndMouseExitTimeout)
                        }
                    }, {
                        key: "mouseleave",
                        value: function() {
                            this.processTargets("mouseleave")
                        }
                    }, {
                        key: "mouseLeaveDelay",
                        value: function() {
                            var e = this;
                            this._state.clickAndMouseExitTimeout && clearTimeout(this._state.clickAndMouseExitTimeout);
                            var t = this._util.delay;
                            this._state.clickAndMouseExitTimeout = setTimeout(function() {
                                e.processTargets("clickAndMouseExit")
                            }, t)
                        }
                    }, {
                        key: "touchstart",
                        value: function(e) {
                            var t = this._util.drag,
                                r = e.touches[0],
                                o = r.clientY,
                                n = r.pageX;
                            t.startX = n, t.startY = o
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
                            t.startX !== t.endX && (r = t.startX > t.endX ? 1 : -1), t.overallDirectionX = r, this.isValidSwipe() && (e.preventDefault(), this.triggerSwipe(), this.clearDrag(), this.touchstart(e))
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
                        key: "processTargets",
                        value: function(e) {
                            var r = this,
                                o = this._util,
                                n = o.elem,
                                i = o.events,
                                s = o.syncDelay,
                                a = o.targetSelector;
                            if (i.has(e)) {
                                var u = i.get(e);
                                this.getTargets(a).forEach(function(o) {
                                    u.forEach(function(i) {
                                        var a = c(i, 2),
                                            u = a[0],
                                            l = a[1],
                                            f = o.classList,
                                            h = u.replace("WithSync", ""),
                                            v = h !== u;
                                        if ("removeFromOthers" === h) g(document.getElementsByClassName(l)).forEach(function(e) {
                                            e !== o && e.classList.remove(l)
                                        });
                                        else if (f[h]) {
                                            var d = f.contains(l);
                                            r.didComplete(null), ("toggle" === h || "remove" === h && d || "add" === h && !d) && (o.classList[h](l), v && setTimeout(function() {
                                                window.wafer.base.sync(o)
                                            }, s), _._emit({
                                                elem: n,
                                                meta: {
                                                    action: u,
                                                    className: l,
                                                    eventName: e,
                                                    target: o
                                                },
                                                name: t.name
                                            }, "toggle:change"))
                                        }
                                    })
                                })
                            }
                        }
                    }, {
                        key: "getTargets",
                        value: function(e) {
                            return e && "string" == typeof e ? g(document.querySelectorAll(e)) : [this._util.elem]
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this._util.elem.remove()
                        }
                    }, {
                        key: "handleClickOutside",
                        value: function(e) {
                            if (this._state.isClickOutside) {
                                (0, e.waferComposedMap)().get(this._util.elem) || this.processTargets("clickOutside")
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeEventListeners(), h(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]), t
                }(p);
            O.events = {
                click: [
                    ["has-toggle-click", "click"]
                ]
            };
            var E = O,
                T = window.wafer.controllers.WaferBaseController,
                j = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.root,
                            o = void 0 === r ? document : r,
                            n = e.selector,
                            i = void 0 === n ? ".wafer-toggle" : n;
                        s(this, t);
                        var u = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            root: o,
                            selector: i,
                            WaferClass: E
                        }));
                        return u.sync(), u
                    }
                    return u(t, e), t
                }(T),
                x = j;
            t.default = new x({})
        }
    })
});