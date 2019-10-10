! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-scrollview", [], t) : "object" == typeof exports ? exports["wafer-scrollview"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-scrollview"] = t())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (i[r]) return i[r].exports;
            var n = i[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(n.exports, n, n.exports, t), n.l = !0, n.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.d = function(e, i, r) {
            t.o(e, i) || Object.defineProperty(e, i, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var i = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(i, "a", i), i
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function(e, t, i) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function n(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
                return Array.from(e)
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function l(e, t) {
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

            function u(e, t) {
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
            var d = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, i, r) {
                        return i && e(t.prototype, i), r && e(t, r), t
                    }
                }(),
                h = "next",
                v = "prev",
                f = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = t.windowLimit,
                            n = void 0 === i ? 5 : i;
                        r(this, e), this.active = null, this.elemMapping = new Map, this.tail = null, this.cycle = !1, this.head = null, this.scrollItemsLimit = Math.floor(n / 2)
                    }
                    return d(e, [{
                        key: "add",
                        value: function(e) {
                            var t = this.tail,
                                i = this.elemMapping.size;
                            if (t) {
                                var r = this.elemMapping.get(t);
                                this.elemMapping.set(e, new Map([
                                    ["index", i],
                                    [h, r.get(h)],
                                    [v, t]
                                ])), this.elemMapping.get(this.tail).set(h, e), this.elemMapping.get(this.head).set(v, e), this.tail = e
                            } else this.elemMapping.set(e, new Map([
                                ["index", i],
                                [h, e],
                                [v, e]
                            ])), this.head = this.tail = e;
                            this.active || (this.active = e)
                        }
                    }, {
                        key: "getActive",
                        value: function() {
                            return this.active
                        }
                    }, {
                        key: "setNextAsActive",
                        value: function() {
                            this.active = this.elemMapping.get(this.active).get(h)
                        }
                    }, {
                        key: "setPreviousAsActive",
                        value: function() {
                            this.active = this.elemMapping.get(this.active).get(v)
                        }
                    }, {
                        key: "getElementToAppend",
                        value: function() {
                            var e = this.elemMapping.get(this.active),
                                t = e.get("index"),
                                i = this.elemMapping.size,
                                r = this.scrollItemsLimit;
                            return this.cycle ? this.getForward(r + 1) : t < r ? null : i > t + r - 1 ? this.getForward(r + 1) : null
                        }
                    }, {
                        key: "getElementToPrepend",
                        value: function() {
                            var e = this.elemMapping.get(this.active),
                                t = e.get("index"),
                                i = this.elemMapping.size,
                                r = this.scrollItemsLimit;
                            return this.cycle ? this.getBackward(r) : t >= i - r ? null : t - r - 1 >= 0 ? this.getBackward(r + 1) : null
                        }
                    }, {
                        key: "getForward",
                        value: function(e) {
                            for (var t = 0, i = this.active; t++ < e;) {
                                if (i = this.elemMapping.get(i).get(h), !this.cycle && i === this.head) return null
                            }
                            return i
                        }
                    }, {
                        key: "getBackward",
                        value: function(e) {
                            for (var t = 0, i = this.active; t++ < e;) {
                                if (i = this.elemMapping.get(i).get(v), !this.cycle && this.tail === i) return null
                            }
                            return i
                        }
                    }, {
                        key: "appendWithReplace",
                        value: function(e, t) {
                            e = e || this.active;
                            var i = this.elemMapping.get(e),
                                r = i.get(v),
                                n = i.get(h),
                                a = t[0],
                                s = a,
                                l = r;
                            this.elemMapping.get(r).set(h, s);
                            for (var o = 1; o < t.length; o++) {
                                var u = t[o];
                                this.elemMapping.set(s, new Map([
                                    [h, u],
                                    [v, l]
                                ])), l = s, s = u
                            }
                            this.elemMapping.set(s).set(s, new Map([
                                [h, n],
                                [v, l]
                            ])), this.elemMapping.get(n).set(v, s), e === this.head ? this.head = a : e === this.tail && (this.tail = s), e === this.active && (this.active = a), this.elemMapping.delete(e);
                            for (var c = this.elemMapping.get(r), d = c.get("index"); c;) {
                                var f = c.get(h);
                                c = this.elemMapping.get(f), c.set("index", ++d), f === this.tail && (c = null)
                            }
                        }
                    }, {
                        key: "size",
                        get: function() {
                            return this.elemMapping.size
                        }
                    }]), e
                }(),
                p = f,
                g = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                    }
                    return e
                },
                m = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, i, r) {
                        return i && e(t.prototype, i), r && e(t, r), t
                    }
                }(),
                y = function e(t, i, r) {
                    null === t && (t = Function.prototype);
                    var n = Object.getOwnPropertyDescriptor(t, i);
                    if (void 0 === n) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : e(a, i, r)
                    }
                    if ("value" in n) return n.value;
                    var s = n.get;
                    if (void 0 !== s) return s.call(r)
                },
                b = window.wafer,
                w = b.base,
                _ = b.constants,
                E = b.features,
                k = b.utils,
                C = b.WaferBaseClass,
                D = E.transformProperty,
                M = _.ATTR_PREFIX,
                x = k.bindEvent,
                A = k.convertNodeListToArray,
                T = k.elementInView,
                W = k.fetchWithCache,
                B = k.isVisible,
                L = k.throttle,
                O = k.unbindEvent,
                P = 30,
                X = 5,
                j = 250,
                I = "ease-out",
                V = "active",
                z = ["next", "prev"],
                F = function(e, t, i) {
                    e.style.webkitTransition = "transform " + t + "ms " + i, e.style.transition = "transform " + t + "ms " + i
                },
                H = function(e) {
                    e.style.webkitTransition = "", e.style.transition = ""
                },
                Y = function() {
                    var e = [],
                        t = !1;
                    return {
                        add: function(t, i) {
                            e.push(function(e) {
                                return function() {
                                    return t.call(e)
                                }
                            }(i)), this.exec(i._util.transitionDuration + 50)
                        },
                        exec: function(i) {
                            var r = this;
                            t || (t = !0, setTimeout(function() {
                                t = !1, e.shift().call(), e.length && r.exec(i)
                            }, i))
                        }
                    }
                }(),
                N = function(e) {
                    function t(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = i.counter,
                            n = void 0 === r ? 0 : r,
                            l = i.syncDelay,
                            o = void 0 === l ? 25 : l;
                        a(this, t);
                        var u = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {}, {})),
                            c = e.getAttribute(M + "behavior");
                        if (u._util = {
                                elem: e,
                                behavior: c
                            }, "native" === c) {
                            u._syncWithThrottle = L(function() {
                                w.sync(e)
                            }, o, u);
                            var d = void 0;
                            if (A(e.children).some(function(e) {
                                    return !!e.classList.contains(V) && (d = e, !0)
                                }), d && 0 === e.scrollLeft) {
                                var h = e.getBoundingClientRect(),
                                    v = h.width,
                                    f = d.getBoundingClientRect(),
                                    m = f.width,
                                    y = f.left;
                                e.scrollLeft = m >= v ? y - P : y - (v - m) / 2
                            }
                            return u.addEventListeners(), s(u)
                        }
                        var b = parseInt(e.getAttribute(M + "edge-padding")) || 0,
                            _ = parseInt(e.getAttribute(M + "right-padding")) || 0,
                            E = e.getAttribute(M + "resize-end"),
                            k = e.getAttribute(M + "pagination-target"),
                            C = e.getAttribute(M + "trigger-wf-during-transition"),
                            D = e.getAttribute(M + "scrollview-td"),
                            x = e.getAttribute(M + "scrollview-ttf"),
                            T = e.getAttribute(M + "cycle"),
                            W = k && document.body.querySelector(k) || A(e.getElementsByClassName("indicators"))[0],
                            B = void 0,
                            O = void 0;
                        W && "count" === (B = W.getAttribute(M + "pagination-type") || "default") && (O = A(W.getElementsByClassName("current-page"))[0]);
                        var H = new p({
                            windowLimit: X
                        });
                        H.cycle = T;
                        var Y = u._util = g({}, u._util, {
                            counter: n,
                            cycle: null === T || void 0 === T ? 0 : Number(T),
                            dataList: H,
                            drag: {
                                endX: 0,
                                endY: 0,
                                isVerticalDirection: !1,
                                startX: 0,
                                startY: 0
                            },
                            edgePadding: b,
                            elem: e,
                            indicatorCountElem: O,
                            indicatorElem: W,
                            indicatorType: B,
                            nextBtn: A(e.getElementsByClassName("next-btn"))[0],
                            resizeEnd: null === E || void 0 === E ? 0 : Number(E),
                            prevBtn: A(e.getElementsByClassName("prev-btn"))[0],
                            rightPadding: _,
                            sliderElem: A(e.getElementsByClassName("slides"))[0],
                            sliderItemsDataMapping: new Map,
                            transitionDuration: null === D || void 0 === D ? j : Number(D),
                            transitionTimingFunction: null === x || void 0 === x ? I : x,
                            triggerWafersDuringTransition: "1" === C ? 1 : 0
                        });
                        u._state = {
                            disableEventHandlers: !1,
                            hasBeenThreadmilled: !1,
                            slideWidth: null,
                            virtualCounter: null
                        }, Y.sliderItems = A(Y.sliderElem.children), Y.indicatorItems = Y.indicatorElem ? A(Y.indicatorElem.children) : null;
                        var N = Y.sliderItems.length;
                        u._state.slideWidth = 100 / N, u.updateWidth(), F(Y.sliderElem, Y.transitionDuration, Y.transitionTimingFunction), Y.sliderElem.style.cursor = "-webkit-grab", Y.sliderElem.style["padding-left"] = b + "px";
                        for (var S = document.createDocumentFragment(), R = void 0, U = !1, q = 0; q < N; q++) {
                            var G = Y.sliderItems[q];
                            H.add(G), G.style.width = u._state.slideWidth + "%", !U && q > 0 && G.classList.contains(V) && (R = q, U = !0), S.appendChild(G)
                        }
                        if (Y.sliderElem.appendChild(S), R)
                            for (var J = 0; J < R; J++) u.showCurrent(1);
                        return z.forEach(function(e) {
                            u[e] = u[e].bind(u)
                        }), u.addEventListeners(), 0 === n && (u.preFetch(), u.updateIndicators(n), u.updateButtons(!0), H.getActive().classList.add(V)), u
                    }
                    return l(t, e), m(t, [{
                        key: "slidesHasBeenUpdated",
                        value: function() {
                            var e = this._util;
                            e.sliderItems = A(e.sliderElem.children);
                            var t = e.sliderItems.length;
                            this._state.slideWidth = 100 / t;
                            for (var i = 0; i < t; i++) {
                                e.sliderItems[i].style.width = this._state.slideWidth + "%"
                            }
                            this.updateWidth()
                        }
                    }, {
                        key: "updateWidth",
                        value: function() {
                            var e = this._util,
                                t = this._state.virtualCounter,
                                i = e.edgePadding,
                                r = e.rightPadding,
                                n = e.sliderElem,
                                a = e.sliderItems;
                            n.style.width = "", e.containerWidth = n.getBoundingClientRect().width, e.itemWidth = i ? e.containerWidth - 2 * i : r ? e.containerWidth - r : e.containerWidth, n.style.width = e.itemWidth * a.length + "px", n.style[D] = "translateX(-" + (t * e.itemWidth + this.negativeWidthCoefficient) + "px)"
                        }
                    }, {
                        key: "addEventListeners",
                        value: function() {
                            var e = this._util,
                                i = e.elem;
                            if ("native" === e.behavior) return void x(i, "scroll", this._syncWithThrottle);
                            y(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "addEventListeners", this).call(this)
                        }
                    }, {
                        key: "removeEventListeners",
                        value: function() {
                            var e = this._util,
                                i = e.elem;
                            if ("native" === e.behavior) return void O(i, "scroll", this._syncWithThrottle);
                            y(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "removeEventListeners", this).call(this)
                        }
                    }, {
                        key: "preFetch",
                        value: function() {
                            for (var e = this._util.dataList, t = 0; t < 3; t++) {
                                var i = e.getForward(t),
                                    r = e.getBackward(t);
                                i && this.renderSlide(i, {
                                    prefetch: !0
                                }), r && this.renderSlide(r, {
                                    prefetch: !0
                                })
                            }
                        }
                    }, {
                        key: "handleResize",
                        value: function() {
                            var e = this._util,
                                t = e.behavior,
                                i = e.transitionDuration,
                                r = e.transitionTimingFunction;
                            if ("native" !== t) {
                                var n = this._util.sliderElem;
                                B(n) && (H(n), this.updateWidth(), setTimeout(function() {
                                    F(n, i, r)
                                }, 0))
                            }
                        }
                    }, {
                        key: "handleFetch",
                        value: function(e) {
                            var i = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = r.fetchBody,
                                a = r.fetchUrl,
                                s = r.prefetch,
                                l = void 0 !== s && s,
                                o = r.replace,
                                u = void 0 !== o && o,
                                c = r.resultSelector;
                            if (!l || e.parentNode) {
                                var d = this._util,
                                    h = d.dataList,
                                    v = d.sliderItemsDataMapping;
                                v.has(e) || v.set(e, {});
                                var f = v.get(e);
                                !a || void 0 !== f.fetchStatus && 2 !== f.fetchStatus ? (l ? w.prefetch(e) : w.sync(e), u && this.slidesHasBeenUpdated()) : (f.fetchStatus = 0, W(a, {
                                    body: n
                                }).then(function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        r = t.html;
                                    if (r) {
                                        var n = void 0,
                                            a = !1;
                                        if (w.destroy(e), u) {
                                            var s = document.createElement("div"),
                                                o = e.parentNode,
                                                d = A(o.children);
                                            s.innerHTML = r;
                                            var v = c && s.querySelector(c),
                                                p = A((v || s || {}).children),
                                                g = d.indexOf(e),
                                                m = e === h.tail;
                                            h.appendWithReplace(e, p), -1 !== g && (p.forEach(function(t) {
                                                o.insertBefore(t, e)
                                            }), m && (o.removeChild(d[0]), i._state.virtualCounter--, a = e !== h.tail), o.removeChild(e)), n = o, i._state.hasBeenThreadmilled = !1
                                        } else e.innerHTML = r, n = e;
                                        f.fetchStatus = 1, l ? w.prefetch(e) : w.sync(n), a && H(i._util.sliderElem), u && i.slidesHasBeenUpdated()
                                    }
                                }).catch(function(i) {
                                    w.emitError({
                                        name: t.constructor.name,
                                        elem: e,
                                        meta: {
                                            fetchUrl: a
                                        },
                                        stack: i.stack
                                    }), f.fetchStatus = 2
                                }))
                            }
                        }
                    }, {
                        key: "renderSlide",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = t.prefetch,
                                r = void 0 !== i && i,
                                n = this._util.sliderElem;
                            if (!r || T(n, {
                                    offsetX: 0,
                                    offsetY: 0
                                }, w.viewport)) {
                                var a = void 0,
                                    s = void 0,
                                    l = void 0,
                                    o = void 0,
                                    u = e.getAttribute(M + "url");
                                switch (u && (a = "fetch", l = !!Number(e.getAttribute(M + "replace")), s = e.getAttribute(M + "result-selector"), o = e.getAttribute(M + "body")), a) {
                                    case "fetch":
                                        this.handleFetch(e, {
                                            fetchBody: o,
                                            fetchUrl: u,
                                            prefetch: r,
                                            replace: l,
                                            resultSelector: s
                                        });
                                        break;
                                    default:
                                        r ? w.prefetch(e) : setTimeout(function() {
                                            w.sync(e)
                                        }, this._util.transitionDuration)
                                }
                            }
                        }
                    }, {
                        key: "updateElemsUsingVirtualElements",
                        value: function(e, t) {
                            var i = this._util,
                                r = this._state,
                                n = i.cycle,
                                a = i.dataList,
                                s = i.itemWidth,
                                l = i.sliderElem,
                                o = i.transitionTimingFunction,
                                u = i.transitionDuration,
                                c = a.size,
                                d = r.slideWidth,
                                h = r.virtualCounter;
                            if (1 === e) {
                                var v = t + 1 > c;
                                if (n || !v) {
                                    var f = a.getElementToAppend();
                                    if (f && (f.style.width = d + "%"), F(l, u, o), l.style[D] = "translateX(-" + (((h || 0) + 1) * s + this.negativeWidthCoefficient) + "px)", null === h) return r.virtualCounter = 1, this._util.counter = t, void a.setNextAsActive();
                                    if (r.virtualCounter++, a.setNextAsActive(), !f) return;
                                    Y.add(function() {
                                        var e = i.itemWidth,
                                            t = i.sliderElem,
                                            n = A(t.children);
                                        t.removeChild(n[0]), t.appendChild(f), i.sliderItems = A(t.children), r.virtualCounter--, H(t), t.style[D] = "translateX(-" + r.virtualCounter * e + "px)"
                                    }, this)
                                }
                            } else if (-1 === e) {
                                var p = t < 0;
                                if (n || !p) {
                                    var g = a.getElementToPrepend();
                                    if (g && (g.style.width = d + "%"), F(l, u, o), l.style[D] = "translateX(-" + (h - 1) * s + "px)", r.virtualCounter--, a.setPreviousAsActive(), !g) return;
                                    Y.add(function() {
                                        var e = i.itemWidth,
                                            t = i.sliderElem,
                                            n = A(t.children);
                                        t.removeChild(n[n.length - 1]), t.prepend(g), i.sliderItems = A(t.children), r.virtualCounter++, H(t), t.style[D] = "translateX(-" + r.virtualCounter * e + "px)"
                                    }, this)
                                }
                            }
                        }
                    }, {
                        key: "showCurrent",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = this._util,
                                i = t.counter,
                                r = t.cycle,
                                a = t.dataList,
                                s = t.elem,
                                l = t.itemWidth,
                                o = t.sliderElem,
                                u = a.size,
                                c = i;
                            if (this.isValidMove(e)) {
                                if (r) {
                                    if (1 === e) {
                                        var d = c + 1 >= u;
                                        c = d ? 0 : i + e
                                    } else if (-1 === e) {
                                        var h = c <= 0;
                                        c = h ? u - 1 : i + e
                                    }
                                } else c = i + e;
                                if (a.getActive().classList.remove(V), c !== i) {
                                    if (!this._state.hasBeenThreadmilled) {
                                        for (;
                                            [].concat(n(o.children)).length > X;) o.removeChild(o.children[X]);
                                        t.sliderItems = A(o.children), this.slidesHasBeenUpdated(), this._state.hasBeenThreadmilled = !0
                                    }
                                    this.updateElemsUsingVirtualElements(e, c), this._util.counter = c;
                                    var v = a.getActive();
                                    v.classList.add(V), this.renderSlide(v), this.updateIndicators(c, i), this.updateButtons(), this.preFetch(), w.emitWaferEvent("scrollview:change", {
                                        elem: s,
                                        meta: {
                                            index: c + 1,
                                            prevIndex: i + 1
                                        }
                                    })
                                } else {
                                    a.getActive().classList.add(V);
                                    var f = this._state.virtualCounter,
                                        p = "translateX(-" + (f * l + this.negativeWidthCoefficient) + "px)";
                                    p !== this._util.transformValue && (o.style[D] = p, this._util.transformValue = p)
                                }
                            }
                        }
                    }, {
                        key: "updateIndicators",
                        value: function(e, t) {
                            var i = this._util;
                            if ("count" === i.indicatorType) {
                                var r = i.indicatorCountElem;
                                r && (r.innerHTML = e + 1)
                            } else {
                                var n = i.indicatorItems;
                                n && (n[t] && n[t].classList.remove(V), n[e] && n[e].classList.add(V))
                            }
                        }
                    }, {
                        key: "updateButtons",
                        value: function(e) {
                            var t = this._util,
                                i = t.counter,
                                r = t.cycle,
                                n = t.nextBtn,
                                a = t.prevBtn,
                                s = t.dataList,
                                l = s.size;
                            n && (r && !e || i !== l - 1 ? n.removeAttribute("disabled") : n.setAttribute("disabled", !0)), a && (r && !e || 0 !== i ? a.removeAttribute("disabled") : a.setAttribute("disabled", !0))
                        }
                    }, {
                        key: "updateAfterDrag",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = this._util.drag,
                                i = t.currentDirection,
                                r = t.endX,
                                n = t.horizontalDirection,
                                a = t.startX,
                                s = r - a,
                                l = i === n;
                            l && s > 0 && Math.abs(s) > 30 ? this.showCurrent(-1, e) : l && s < 0 && Math.abs(s) > 30 ? this.showCurrent(1, e) : this.showCurrent()
                        }
                    }, {
                        key: "isValidMove",
                        value: function(e) {
                            var t = this._util,
                                i = t.counter,
                                r = t.cycle,
                                n = t.dataList,
                                a = n.size;
                            return r ? 1 === e && i <= a - 1 || -1 === e && i >= 0 || 0 === e : 1 === e && i < a - 1 || -1 === e && i > 0 || 0 === e
                        }
                    }, {
                        key: "grab",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = this._util.drag;
                            this._util.pointerDown = !1, t.endX && this.updateAfterDrag(e), this.clearDrag()
                        }
                    }, {
                        key: "grabbing",
                        value: function() {
                            var e = this._util,
                                t = e.drag,
                                i = e.elem,
                                r = e.itemWidth,
                                n = e.sliderElem,
                                a = e.triggerWafersDuringTransition,
                                s = this._state.virtualCounter,
                                l = t.startX,
                                o = t.endX,
                                u = -1 * (s * r + (l - o)),
                                c = "translateX(" + u + "px)";
                            a && 2 * Math.abs(u) >= r && w.sync(i), c !== this._util.transformValue && (this._util.drag.grabbing = !0, n.style[D] = c, this._util.transformValue = c)
                        }
                    }, {
                        key: "clearDrag",
                        value: function() {
                            var e = this;
                            this._util.drag = {
                                currentDirection: null,
                                endX: 0,
                                endY: 0,
                                grabbing: !1,
                                horizontalDirection: 0,
                                last: 0,
                                startX: 0,
                                startY: 0
                            }, this._util.grabTimeout && clearTimeout(this._grabTimeout), this._util.grabTimeout = setTimeout(function() {
                                e._util.drag.isVerticalDirection = !1
                            }, 50)
                        }
                    }, {
                        key: "next",
                        value: function(e) {
                            e.preventDefault(), e.stopPropagation(), this.showCurrent(1, {
                                source: "button",
                                type: "next",
                                sourceEvent: e
                            })
                        }
                    }, {
                        key: "prev",
                        value: function(e) {
                            e.preventDefault(), e.stopPropagation(), this.showCurrent(-1, {
                                source: "button",
                                type: "prev",
                                sourceEvent: e
                            })
                        }
                    }, {
                        key: "keydown",
                        value: function(e) {
                            this._state.disableEventHandlers || (e = e || window.event, 37 === e.keyCode ? this.showCurrent(-1, {
                                source: "key",
                                type: "prev"
                            }) : 39 === e.keyCode && this.showCurrent(1, {
                                source: "key",
                                type: "next"
                            }))
                        }
                    }, {
                        key: "touchstart",
                        value: function(e) {
                            if (!this._state.disableEventHandlers) {
                                var t = this._util,
                                    i = e.touches[0],
                                    r = i.pageX,
                                    n = i.pageY;
                                t.pointerDown = !0, t.drag.isVerticalDirection = !1, t.drag.startX = r, t.drag.startY = n
                            }
                        }
                    }, {
                        key: "touchend",
                        value: function(e) {
                            this._state.disableEventHandlers || (this._util.pointerDown = !1, this.grab({
                                source: "touch"
                            }))
                        }
                    }, {
                        key: "touchmove",
                        value: function(e) {
                            if (!this._state.disableEventHandlers) {
                                var t = this._util,
                                    i = t.drag,
                                    r = i.startX,
                                    n = i.startY,
                                    a = e.touches[0],
                                    s = a.pageX,
                                    l = a.pageY,
                                    o = 0;
                                i.isVerticalDirection || (Math.abs(n - l) > 8 && (i.isVerticalDirection = n > l ? 1 : -1), r !== s && (o = r > s ? 1 : -1), i.horizontalDirection = o, i.last !== s && (i.currentDirection = i.last > s ? 1 : -1, i.last = s), t.pointerDown && (i.endX = s, i.endY = l, this.isValidMove(o) && (t.drag.grabbing && e.preventDefault(), Math.abs(n - l) > 8 && (i.isVerticalDirection = n > l ? 1 : -1), o && !i.isVerticalDirection && this.grabbing())))
                            }
                        }
                    }, {
                        key: "mousedown",
                        value: function(e) {
                            if (!this._state.disableEventHandlers) {
                                e.preventDefault && e.preventDefault();
                                var t = this._util,
                                    i = e.pageX,
                                    r = e.pageY;
                                t.pointerDown = !0, t.drag.isVerticalDirection = !1, t.drag.startX = i, t.drag.startY = r
                            }
                        }
                    }, {
                        key: "mouseup",
                        value: function(e) {
                            this._state.disableEventHandlers || (this._util.sliderElem.style.cursor = "-webkit-grab", this.grab({
                                source: "mouse"
                            }))
                        }
                    }, {
                        key: "mouseleave",
                        value: function(e) {
                            if (!this._state.disableEventHandlers) {
                                e.preventDefault();
                                var t = this._util,
                                    i = t.pointerDown,
                                    r = t.drag,
                                    n = t.sliderElem;
                                if (i) {
                                    var a = e.pageX,
                                        s = e.pageY;
                                    r.endX = a, r.endY = s, n.style.cursor = "-webkit-grabbing", this.grabbing()
                                }
                            }
                        }
                    }, {
                        key: "mousemove",
                        value: function(e) {
                            if (!this._state.disableEventHandlers) {
                                var t = this._util,
                                    i = t.pointerDown,
                                    r = t.sliderElem,
                                    n = t.drag;
                                if (i) {
                                    var a = e.pageX,
                                        s = e.pageY;
                                    this._util.pointerDown = !1, r.style.cursor = "-webkit-grab", n.endX = a, n.endY = s, this.updateAfterDrag(), this.clearDrag()
                                }
                            }
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this._util.elem.remove()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeEventListeners(), y(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "negativeWidthCoefficient",
                        get: function() {
                            if (!this._util) return 0;
                            var e = this._util,
                                t = e.counter,
                                i = e.dataList,
                                r = e.resizeEnd,
                                n = e.rightPadding;
                            if (t >= i.size - 2) {
                                if (n) return -n;
                                if (r) {
                                    var a = i.tail;
                                    if (!a) return 0;
                                    var s = a.style.width,
                                        l = a.getBoundingClientRect().width;
                                    a.style.width = "";
                                    var o = a.getBoundingClientRect(),
                                        u = o.width;
                                    return a.style.width = s, -(l - Math.min(u, l))
                                }
                            }
                            return 0
                        }
                    }]), t
                }(C);
            N.events = {
                click: [
                    ["next-btn", "next"],
                    ["prev-btn", "prev"]
                ],
                keydown: [
                    ["_self", "keydown"]
                ],
                mousedown: [
                    ["slides", "mousedown"]
                ],
                mouseleave: [
                    ["slides", "mouseleave"]
                ],
                mousemove: [
                    ["slides", "mousemove"]
                ],
                mouseup: [
                    ["slides", "mouseup"]
                ],
                touchend: [
                    ["slides", "touchend"]
                ],
                touchmove: [
                    ["slides", "touchmove"]
                ],
                touchstart: [
                    ["slides", "touchstart"]
                ]
            };
            var S = N,
                R = window.wafer.controllers,
                U = R.WaferBaseController,
                q = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            i = e.root,
                            r = void 0 === i ? document : i,
                            n = e.selector,
                            a = void 0 === n ? ".wafer-scrollview" : n;
                        o(this, t);
                        var s = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                            root: r,
                            selector: a,
                            WaferClass: S
                        }));
                        return s.sync(), s
                    }
                    return c(t, e), t
                }(U),
                G = q;
            t.default = new G({})
        }
    })
});