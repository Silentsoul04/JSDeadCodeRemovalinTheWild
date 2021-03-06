define("external/deep-freeze", ["require", "exports", "module"], function(e, t, r) {
    r.exports = function e(t) {
        return Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function(r) {
            !t.hasOwnProperty(r) || null === t[r] || "object" != typeof t[r] && "function" != typeof t[r] || Object.isFrozen(t[r]) || e(t[r])
        }), t
    }
}.bind(Object.create(null))), (function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define("external/eventemitter3", [], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.EventEmitter3 = e()
    }
})(function() {
    return (function() {
        function e(t, r, n) {
            function o(s, a) {
                if (!r[s]) {
                    if (!t[s]) {
                        var _ = "function" == typeof require && require;
                        if (!a && _) return _(s, !0);
                        if (i) return i(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var u = r[s] = {
                        exports: {}
                    };
                    t[s][0].call(u.exports, function(e) {
                        return o(t[s][1][e] || e)
                    }, u, u.exports, e, t, r, n)
                }
                return r[s].exports
            }
            for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
            return o
        }
        return e
    })()({
        1: [function(e, t, r) {
            "use strict";

            function n() {}

            function o(e, t, r) {
                this.fn = e, this.context = t, this.once = r || !1
            }

            function i(e, t, r, n, i) {
                if ("function" != typeof r) throw new TypeError("The listener must be a function");
                var s = new o(r, n || e, i),
                    a = c ? c + t : t;
                return e._events[a] ? e._events[a].fn ? e._events[a] = [e._events[a], s] : e._events[a].push(s) : (e._events[a] = s, e._eventsCount++), e
            }

            function s(e, t) {
                0 === --e._eventsCount ? e._events = new n : delete e._events[t]
            }

            function a() {
                this._events = new n, this._eventsCount = 0
            }
            var _ = Object.prototype.hasOwnProperty,
                c = "~";
            Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (c = !1)), a.prototype.eventNames = function() {
                var e, t, r = [];
                if (0 === this._eventsCount) return r;
                for (t in e = this._events) _.call(e, t) && r.push(c ? t.slice(1) : t);
                return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
            }, a.prototype.listeners = function(e) {
                var t = c ? c + e : e,
                    r = this._events[t];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var n = 0, o = r.length, i = new Array(o); n < o; n++) i[n] = r[n].fn;
                return i
            }, a.prototype.listenerCount = function(e) {
                var t = c ? c + e : e,
                    r = this._events[t];
                return r ? r.fn ? 1 : r.length : 0
            }, a.prototype.emit = function(e, t, r, n, o, i) {
                var s = c ? c + e : e;
                if (!this._events[s]) return !1;
                var a, _, u = this._events[s],
                    l = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0), l) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, t), !0;
                        case 3:
                            return u.fn.call(u.context, t, r), !0;
                        case 4:
                            return u.fn.call(u.context, t, r, n), !0;
                        case 5:
                            return u.fn.call(u.context, t, r, n, o), !0;
                        case 6:
                            return u.fn.call(u.context, t, r, n, o, i), !0
                    }
                    for (_ = 1, a = new Array(l - 1); _ < l; _++) a[_ - 1] = arguments[_];
                    u.fn.apply(u.context, a)
                } else {
                    var E, d = u.length;
                    for (_ = 0; _ < d; _++) switch (u[_].once && this.removeListener(e, u[_].fn, void 0, !0), l) {
                        case 1:
                            u[_].fn.call(u[_].context);
                            break;
                        case 2:
                            u[_].fn.call(u[_].context, t);
                            break;
                        case 3:
                            u[_].fn.call(u[_].context, t, r);
                            break;
                        case 4:
                            u[_].fn.call(u[_].context, t, r, n);
                            break;
                        default:
                            if (!a)
                                for (E = 1, a = new Array(l - 1); E < l; E++) a[E - 1] = arguments[E];
                            u[_].fn.apply(u[_].context, a)
                    }
                }
                return !0
            }, a.prototype.on = function(e, t, r) {
                return i(this, e, t, r, !1)
            }, a.prototype.once = function(e, t, r) {
                return i(this, e, t, r, !0)
            }, a.prototype.removeListener = function(e, t, r, n) {
                var o = c ? c + e : e;
                if (!this._events[o]) return this;
                if (!t) return s(this, o), this;
                var i = this._events[o];
                if (i.fn) i.fn !== t || n && !i.once || r && i.context !== r || s(this, o);
                else {
                    for (var a = 0, _ = [], u = i.length; a < u; a++)(i[a].fn !== t || n && !i[a].once || r && i[a].context !== r) && _.push(i[a]);
                    _.length ? this._events[o] = 1 === _.length ? _[0] : _ : s(this, o)
                }
                return this
            }, a.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = c ? c + e : e, this._events[t] && s(this, t)) : (this._events = new n, this._eventsCount = 0), this
            }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = c, a.EventEmitter = a, void 0 !== t && (t.exports = a)
        }, {}]
    }, {}, [1])(1)
}), (function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react"), require("react-dom")) : "function" == typeof define && define.amd ? define("react-transition-group", ["react", "react-dom"], t) : "object" == typeof exports ? exports.ReactTransitionGroup = t(require("react"), require("react-dom")) : e.ReactTransitionGroup = t(e.React, e.ReactDOM)
})(this, function(e, t) {
    return (function(e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var r = {};
        return t.m = e, t.c = r, t.i = function(e) {
            return e
        }, t.d = function(e, r, n) {
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
        }, t.p = "", t(t.s = 22)
    })([function(e, t, r) {
        "use strict";

        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function o() {
            throw new Error("clearTimeout has not been defined")
        }

        function i(e) {
            if (l === setTimeout) return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function s(e) {
            if (E === clearTimeout) return clearTimeout(e);
            if ((E === o || !E) && clearTimeout) return E = clearTimeout, clearTimeout(e);
            try {
                return E(e)
            } catch (t) {
                try {
                    return E.call(null, e)
                } catch (t) {
                    return E.call(this, e)
                }
            }
        }

        function a() {
            S && p && (S = !1, p.length ? f = p.concat(f) : h = -1, f.length && _())
        }

        function _() {
            if (!S) {
                var e = i(a);
                S = !0;
                for (var t = f.length; t;) {
                    for (p = f, f = []; ++h < t;) p && p[h].run();
                    h = -1, t = f.length
                }
                p = null, S = !1, s(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function u() {}
        var l, E, d = e.exports = {};
        (function() {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                E = "function" == typeof clearTimeout ? clearTimeout : o
            } catch (e) {
                E = o
            }
        })();
        var p, f = [],
            S = !1,
            h = -1;
        d.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            f.push(new c(e, t)), 1 !== f.length || S || i(_)
        }, c.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function() {
            return "/"
        }, d.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function() {
            return 0
        }
    }, function(t, r) {
        t.exports = e
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            if ("production" !== t.env.NODE_ENV) {
                var o = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                    i = function(e) {
                        return "object" === (void 0 === e ? "undefined" : n(e)) && null !== e && e.$$typeof === o
                    };
                e.exports = r(19)(i, !0)
            } else e.exports = r(18)()
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return function() {
                return e
            }
        }
        var o = function() {};
        o.thatReturns = n, o.thatReturnsFalse = n(!1), o.thatReturnsTrue = n(!0), o.thatReturnsNull = n(null), o.thatReturnsThis = function() {
            return this
        }, o.thatReturnsArgument = function(e) {
            return e
        }, e.exports = o
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            function r(e, t, r, o, i, s, a, _) {
                if (n(t), !e) {
                    var c;
                    if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var u = [r, o, i, s, a, _],
                            l = 0;
                        c = new Error(t.replace(/%s/g, function() {
                            return u[l++]
                        })), c.name = "Invariant Violation"
                    }
                    throw c.framesToPop = 1, c
                }
            }
            var n = function(e) {};
            "production" !== t.env.NODE_ENV && (n = function(e) {
                if (void 0 === e) throw new Error("invariant requires an error message argument")
            }), e.exports = r
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        (function(n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
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
            t.__esModule = !0;
            var _ = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                c = r(11),
                u = o(c),
                l = r(1),
                E = o(l),
                d = r(2),
                p = o(d),
                f = r(20),
                S = o(f),
                h = r(23),
                m = {
                    component: p.default.any,
                    childFactory: p.default.func,
                    children: p.default.node
                },
                O = {
                    component: "span",
                    childFactory: function(e) {
                        return e
                    }
                },
                T = (function(e) {
                    function t(r, n) {
                        i(this, t);
                        var o = s(this, e.call(this, r, n));
                        return o.performAppear = function(e, t) {
                            o.currentlyTransitioningKeys[e] = !0, t.componentWillAppear ? t.componentWillAppear(o._handleDoneAppearing.bind(o, e, t)) : o._handleDoneAppearing(e, t)
                        }, o._handleDoneAppearing = function(e, t) {
                            t.componentDidAppear && t.componentDidAppear(), delete o.currentlyTransitioningKeys[e];
                            var r = (0, h.getChildMapping)(o.props.children);
                            r && r.hasOwnProperty(e) || o.performLeave(e, t)
                        }, o.performEnter = function(e, t) {
                            o.currentlyTransitioningKeys[e] = !0, t.componentWillEnter ? t.componentWillEnter(o._handleDoneEntering.bind(o, e, t)) : o._handleDoneEntering(e, t)
                        }, o._handleDoneEntering = function(e, t) {
                            t.componentDidEnter && t.componentDidEnter(), delete o.currentlyTransitioningKeys[e];
                            var r = (0, h.getChildMapping)(o.props.children);
                            r && r.hasOwnProperty(e) || o.performLeave(e, t)
                        }, o.performLeave = function(e, t) {
                            o.currentlyTransitioningKeys[e] = !0, t.componentWillLeave ? t.componentWillLeave(o._handleDoneLeaving.bind(o, e, t)) : o._handleDoneLeaving(e, t)
                        }, o._handleDoneLeaving = function(e, t) {
                            t.componentDidLeave && t.componentDidLeave(), delete o.currentlyTransitioningKeys[e];
                            var r = (0, h.getChildMapping)(o.props.children);
                            r && r.hasOwnProperty(e) ? o.keysToEnter.push(e) : o.setState(function(t) {
                                var r = _({}, t.children);
                                return delete r[e], {
                                    children: r
                                }
                            })
                        }, o.childRefs = Object.create(null), o.state = {
                            children: (0, h.getChildMapping)(r.children)
                        }, o
                    }
                    return a(t, e), t.prototype.componentWillMount = function() {
                        this.currentlyTransitioningKeys = {}, this.keysToEnter = [], this.keysToLeave = []
                    }, t.prototype.componentDidMount = function() {
                        var e = this.state.children;
                        for (var t in e) e[t] && this.performAppear(t, this.childRefs[t])
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        var t = (0, h.getChildMapping)(e.children),
                            r = this.state.children;
                        this.setState({
                            children: (0, h.mergeChildMappings)(r, t)
                        });
                        for (var n in t) {
                            var o = r && r.hasOwnProperty(n);
                            !t[n] || o || this.currentlyTransitioningKeys[n] || this.keysToEnter.push(n)
                        }
                        for (var i in r) {
                            var s = t && t.hasOwnProperty(i);
                            !r[i] || s || this.currentlyTransitioningKeys[i] || this.keysToLeave.push(i)
                        }
                    }, t.prototype.componentDidUpdate = function() {
                        var e = this,
                            t = this.keysToEnter;
                        this.keysToEnter = [], t.forEach(function(t) {
                            return e.performEnter(t, e.childRefs[t])
                        });
                        var r = this.keysToLeave;
                        this.keysToLeave = [], r.forEach(function(t) {
                            return e.performLeave(t, e.childRefs[t])
                        })
                    }, t.prototype.render = function() {
                        var e = this,
                            t = [],
                            r = function(r) {
                                var o = e.state.children[r];
                                if (o) {
                                    var i = "string" != typeof o.ref,
                                        s = e.props.childFactory(o),
                                        a = function(t) {
                                            e.childRefs[r] = t
                                        };
                                    "production" !== n.env.NODE_ENV && (0, S.default)(i, "string refs are not supported on children of TransitionGroup and will be ignored. Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute"), s === o && i && (a = (0, u.default)(o.ref, a)), t.push(E.default.cloneElement(s, {
                                        key: r,
                                        ref: a
                                    }))
                                }
                            };
                        for (var o in this.state.children) r(o);
                        var i = _({}, this.props);
                        return delete i.transitionLeave, delete i.transitionName, delete i.transitionAppear, delete i.transitionEnter, delete i.childFactory, delete i.transitionLeaveTimeout, delete i.transitionEnterTimeout, delete i.transitionAppearTimeout, delete i.component, E.default.createElement(this.props.component, i, t)
                    }, t
                })(E.default.Component);
            T.displayName = "TransitionGroup", T.propTypes = "production" !== n.env.NODE_ENV ? m : {}, T.defaultProps = O, t.default = T, e.exports = t.default
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = !("undefined" == typeof window || !window.document || !window.document.createElement), e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(3),
                o = n;
            "production" !== t.env.NODE_ENV && (function() {
                var e = function(e) {
                    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                    var o = 0,
                        i = "Warning: " + e.replace(/%s/g, function() {
                            return r[o++]
                        });
                    "undefined" != typeof console && console.error(i);
                    try {
                        throw new Error(i)
                    } catch (e) {}
                };
                o = function(t, r) {
                    if (void 0 === r) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                    if (0 !== r.indexOf("Failed Composite propType: ") && !t) {
                        for (var n = arguments.length, o = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) o[i - 2] = arguments[i];
                        e.apply(void 0, [r].concat(o))
                    }
                }
            })(), e.exports = o
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            var t = "transition" + e + "Timeout",
                r = "transition" + e;
            return function(e) {
                if (e[r]) {
                    if (null == e[t]) return new Error(t + " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
                    if ("number" != typeof e[t]) return new Error(t + " must be a number (in milliseconds)")
                }
                return null
            }
        }
        t.__esModule = !0, t.nameShape = void 0, t.transitionTimeout = o;
        var i = r(1),
            s = (n(i), r(2)),
            a = n(s);
        t.nameShape = a.default.oneOfType([a.default.string, a.default.shape({
            enter: a.default.string,
            leave: a.default.string,
            active: a.default.string
        }), a.default.shape({
            enter: a.default.string,
            enterActive: a.default.string,
            leave: a.default.string,
            leaveActive: a.default.string,
            appear: a.default.string,
            appearActive: a.default.string
        })])
    }, function(e, t, r) {
        "use strict";
        (function(n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
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
            t.__esModule = !0;
            var _ = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                c = r(1),
                u = o(c),
                l = r(2),
                E = o(l),
                d = r(5),
                p = o(d),
                f = r(21),
                S = o(f),
                h = r(9),
                m = {
                    transitionName: h.nameShape.isRequired,
                    transitionAppear: E.default.bool,
                    transitionEnter: E.default.bool,
                    transitionLeave: E.default.bool,
                    transitionAppearTimeout: (0, h.transitionTimeout)("Appear"),
                    transitionEnterTimeout: (0, h.transitionTimeout)("Enter"),
                    transitionLeaveTimeout: (0, h.transitionTimeout)("Leave")
                },
                O = {
                    transitionAppear: !1,
                    transitionEnter: !0,
                    transitionLeave: !0
                },
                T = (function(e) {
                    function t() {
                        var r, n, o;
                        i(this, t);
                        for (var a = arguments.length, _ = Array(a), c = 0; c < a; c++) _[c] = arguments[c];
                        return r = n = s(this, e.call.apply(e, [this].concat(_))), n._wrapChild = function(e) {
                            return u.default.createElement(S.default, {
                                name: n.props.transitionName,
                                appear: n.props.transitionAppear,
                                enter: n.props.transitionEnter,
                                leave: n.props.transitionLeave,
                                appearTimeout: n.props.transitionAppearTimeout,
                                enterTimeout: n.props.transitionEnterTimeout,
                                leaveTimeout: n.props.transitionLeaveTimeout
                            }, e)
                        }, o = r, s(n, o)
                    }
                    return a(t, e), t.prototype.render = function() {
                        return u.default.createElement(p.default, _({}, this.props, {
                            childFactory: this._wrapChild
                        }))
                    }, t
                })(u.default.Component);
            T.displayName = "CSSTransitionGroup", T.propTypes = "production" !== n.env.NODE_ENV ? m : {}, T.defaultProps = O, t.default = T, e.exports = t.default
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        e.exports = function() {
            for (var e = arguments.length, t = [], r = 0; r < e; r++) t[r] = arguments[r];
            if (t = t.filter(function(e) {
                    return null != e
                }), 0 !== t.length) return 1 === t.length ? t[0] : t.reduce(function(e, t) {
                return function() {
                    e.apply(this, arguments), t.apply(this, arguments)
                }
            })
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e, t) {
            e.classList ? e.classList.add(t) : (0, s.default)(e) || (e.className = e.className + " " + t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = o;
        var i = r(13),
            s = n(i);
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function n(e, t) {
            return e.classList ? !!t && e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") !== -1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = n, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        e.exports = function(e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            for (var e = document.createElement("div").style, t = {
                    O: function(e) {
                        return "o" + e.toLowerCase()
                    },
                    Moz: function(e) {
                        return e.toLowerCase()
                    },
                    Webkit: function(e) {
                        return "webkit" + e
                    },
                    ms: function(e) {
                        return "MS" + e
                    }
                }, r = Object.keys(t), n = void 0, o = void 0, i = "", s = 0; s < r.length; s++) {
                var a = r[s];
                if (a + "TransitionProperty" in e) {
                    i = "-" + a.toLowerCase(), n = t[a]("TransitionEnd"), o = t[a]("AnimationEnd");
                    break
                }
            }
            return !n && "transitionProperty" in e && (n = "transitionend"), !o && "animationName" in e && (o = "animationend"), e = null, {
                animationEnd: o,
                transitionEnd: n,
                prefix: i
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = void 0;
        var i = r(6),
            s = n(i),
            a = "transform",
            _ = void 0,
            c = void 0,
            u = void 0,
            l = void 0,
            E = void 0,
            d = void 0,
            p = void 0,
            f = void 0,
            S = void 0,
            h = void 0,
            m = void 0;
        if (s.default) {
            var O = o();
            _ = O.prefix, t.transitionEnd = c = O.transitionEnd, t.animationEnd = u = O.animationEnd, t.transform = a = _ + "-" + a, t.transitionProperty = l = _ + "-transition-property", t.transitionDuration = E = _ + "-transition-duration", t.transitionDelay = p = _ + "-transition-delay", t.transitionTiming = d = _ + "-transition-timing-function", t.animationName = f = _ + "-animation-name", t.animationDuration = S = _ + "-animation-duration", t.animationTiming = h = _ + "-animation-delay", t.animationDelay = m = _ + "-animation-timing-function"
        }
        t.transform = a, t.transitionProperty = l, t.transitionTiming = d, t.transitionDelay = p, t.transitionDuration = E, t.transitionEnd = c, t.animationName = f, t.animationDuration = S, t.animationTiming = h, t.animationDelay = m, t.animationEnd = u, t.default = {
            transform: a,
            end: c,
            property: l,
            timing: d,
            delay: p,
            duration: E
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o(e) {
            var t = (new Date).getTime(),
                r = Math.max(0, 16 - (t - E)),
                n = setTimeout(e, r);
            return E = t, n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(6),
            s = n(i),
            a = ["", "webkit", "moz", "o", "ms"],
            _ = "clearTimeout",
            c = o,
            u = void 0,
            l = function(e, t) {
                return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + "AnimationFrame"
            };
        s.default && a.some(function(e) {
            var t = l(e, "request");
            if (t in window) return _ = l(e, "cancel"), c = function(e) {
                return window[t](e)
            }
        });
        var E = (new Date).getTime();
        u = function(e) {
            return c(e)
        }, u.cancel = function(e) {
            window[_] && "function" == typeof window[_] && window[_](e)
        }, t.default = u, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            function n(e, r, n, c, u) {
                if ("production" !== t.env.NODE_ENV)
                    for (var l in e)
                        if (e.hasOwnProperty(l)) {
                            var E;
                            try {
                                "function" != typeof e[l] && ("production" !== t.env.NODE_ENV ? i(!1, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", c || "React class", n, l) : i(!1)), E = e[l](r, l, c, n, null, a)
                            } catch (e) {
                                E = e
                            }
                            if ("production" !== t.env.NODE_ENV && s(!E || E instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", n, l, void 0 === E ? "undefined" : o(E)), E instanceof Error && !(E.message in _)) {
                                _[E.message] = !0;
                                var d = u ? u() : "";
                                "production" !== t.env.NODE_ENV && s(!1, "Failed %s type: %s%s", n, E.message, null != d ? d : "")
                            }
                        }
            }
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            if ("production" !== t.env.NODE_ENV) var i = r(4),
                s = r(7),
                a = r(8),
                _ = {};
            e.exports = n
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(3),
                o = r(4);
            e.exports = function() {
                function e() {
                    "production" !== t.env.NODE_ENV ? o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types") : o(!1)
                }

                function r() {
                    return e
                }
                e.isRequired = e;
                var i = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: r,
                    element: e,
                    instanceOf: r,
                    node: e,
                    objectOf: r,
                    oneOf: r,
                    oneOfType: r,
                    shape: r
                };
                return i.checkPropTypes = n, i.PropTypes = i, i
            }
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = r(3),
                i = r(4),
                s = r(7),
                a = r(8),
                _ = r(17);
            e.exports = function(e, r) {
                function c(e) {
                    var t = e && (N && e[N] || e["@@iterator"]);
                    if ("function" == typeof t) return t
                }

                function u(e, t) {
                    return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
                }

                function l(e) {
                    this.message = e, this.stack = ""
                }

                function E(e) {
                    function n(n, c, u, E, d, p, f) {
                        if (E = E || "<<anonymous>>", p = p || u, f !== a)
                            if (r) "production" !== t.env.NODE_ENV ? i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types") : i(!1);
                            else if ("production" !== t.env.NODE_ENV && "undefined" != typeof console) {
                            var S = E + ":" + u;
                            !o[S] && _ < 3 && ("production" !== t.env.NODE_ENV && s(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", p, E), o[S] = !0, _++)
                        }
                        return null == c[u] ? n ? new l(null === c[u] ? "The " + d + " `" + p + "` is marked as required in `" + E + "`, but its value is `null`." : "The " + d + " `" + p + "` is marked as required in `" + E + "`, but its value is `undefined`.") : null : e(c, u, E, d, p)
                    }
                    if ("production" !== t.env.NODE_ENV) var o = {},
                        _ = 0;
                    var c = n.bind(null, !1);
                    return c.isRequired = n.bind(null, !0), c
                }

                function d(e) {
                    function t(t, r, n, o, i, s) {
                        var a = t[r];
                        if (g(a) !== e) return new l("Invalid " + o + " `" + i + "` of type `" + L(a) + "` supplied to `" + n + "`, expected `" + e + "`.");
                        return null
                    }
                    return E(t)
                }

                function p() {
                    return E(o.thatReturnsNull)
                }

                function f(e) {
                    function t(t, r, n, o, i) {
                        if ("function" != typeof e) return new l("Property `" + i + "` of component `" + n + "` has invalid PropType notation inside arrayOf.");
                        var s = t[r];
                        if (!Array.isArray(s)) {
                            return new l("Invalid " + o + " `" + i + "` of type `" + g(s) + "` supplied to `" + n + "`, expected an array.")
                        }
                        for (var _ = 0; _ < s.length; _++) {
                            var c = e(s, _, n, o, i + "[" + _ + "]", a);
                            if (c instanceof Error) return c
                        }
                        return null
                    }
                    return E(t)
                }

                function S() {
                    function t(t, r, n, o, i) {
                        var s = t[r];
                        if (!e(s)) {
                            return new l("Invalid " + o + " `" + i + "` of type `" + g(s) + "` supplied to `" + n + "`, expected a single ReactElement.")
                        }
                        return null
                    }
                    return E(t)
                }

                function h(e) {
                    function t(t, r, n, o, i) {
                        if (!(t[r] instanceof e)) {
                            var s = e.name || "<<anonymous>>";
                            return new l("Invalid " + o + " `" + i + "` of type `" + D(t[r]) + "` supplied to `" + n + "`, expected instance of `" + s + "`.")
                        }
                        return null
                    }
                    return E(t)
                }

                function m(e) {
                    function r(t, r, n, o, i) {
                        for (var s = t[r], a = 0; a < e.length; a++)
                            if (u(s, e[a])) return null;
                        return new l("Invalid " + o + " `" + i + "` of value `" + s + "` supplied to `" + n + "`, expected one of " + JSON.stringify(e) + ".")
                    }
                    return Array.isArray(e) ? E(r) : ("production" !== t.env.NODE_ENV && "production" !== t.env.NODE_ENV && s(!1, "Invalid argument supplied to oneOf, expected an instance of array."), o.thatReturnsNull)
                }

                function O(e) {
                    function t(t, r, n, o, i) {
                        if ("function" != typeof e) return new l("Property `" + i + "` of component `" + n + "` has invalid PropType notation inside objectOf.");
                        var s = t[r],
                            _ = g(s);
                        if ("object" !== _) return new l("Invalid " + o + " `" + i + "` of type `" + _ + "` supplied to `" + n + "`, expected an object.");
                        for (var c in s)
                            if (s.hasOwnProperty(c)) {
                                var u = e(s, c, n, o, i + "." + c, a);
                                if (u instanceof Error) return u
                            }
                        return null
                    }
                    return E(t)
                }

                function T(e) {
                    function r(t, r, n, o, i) {
                        for (var s = 0; s < e.length; s++) {
                            if (null == (0, e[s])(t, r, n, o, i, a)) return null
                        }
                        return new l("Invalid " + o + " `" + i + "` supplied to `" + n + "`.")
                    }
                    return Array.isArray(e) ? E(r) : ("production" !== t.env.NODE_ENV && "production" !== t.env.NODE_ENV && s(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), o.thatReturnsNull)
                }

                function R() {
                    function e(e, t, r, n, o) {
                        return C(e[t]) ? null : new l("Invalid " + n + " `" + o + "` supplied to `" + r + "`, expected a ReactNode.")
                    }
                    return E(e)
                }

                function A(e) {
                    function t(t, r, n, o, i) {
                        var s = t[r],
                            _ = g(s);
                        if ("object" !== _) return new l("Invalid " + o + " `" + i + "` of type `" + _ + "` supplied to `" + n + "`, expected `object`.");
                        for (var c in e) {
                            var u = e[c];
                            if (u) {
                                var E = u(s, c, n, o, i + "." + c, a);
                                if (E) return E
                            }
                        }
                        return null
                    }
                    return E(t)
                }

                function C(t) {
                    switch (void 0 === t ? "undefined" : n(t)) {
                        case "number":
                        case "string":
                        case "undefined":
                            return !0;
                        case "boolean":
                            return !t;
                        case "object":
                            if (Array.isArray(t)) return t.every(C);
                            if (null === t || e(t)) return !0;
                            var r = c(t);
                            if (!r) return !1;
                            var o, i = r.call(t);
                            if (r !== t.entries) {
                                for (; !(o = i.next()).done;)
                                    if (!C(o.value)) return !1
                            } else
                                for (; !(o = i.next()).done;) {
                                    var s = o.value;
                                    if (s && !C(s[1])) return !1
                                }
                            return !0;
                        default:
                            return !1
                    }
                }

                function I(e, t) {
                    return "symbol" === e || ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                }

                function g(e) {
                    var t = void 0 === e ? "undefined" : n(e);
                    return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : I(t, e) ? "symbol" : t
                }

                function L(e) {
                    var t = g(e);
                    if ("object" === t) {
                        if (e instanceof Date) return "date";
                        if (e instanceof RegExp) return "regexp"
                    }
                    return t
                }

                function D(e) {
                    return e.constructor && e.constructor.name ? e.constructor.name : "<<anonymous>>"
                }
                var N = "function" == typeof Symbol && Symbol.iterator,
                    v = {
                        array: d("array"),
                        bool: d("boolean"),
                        func: d("function"),
                        number: d("number"),
                        object: d("object"),
                        string: d("string"),
                        symbol: d("symbol"),
                        any: p(),
                        arrayOf: f,
                        element: S(),
                        instanceOf: h,
                        node: R(),
                        objectOf: O,
                        oneOf: m,
                        oneOfType: T,
                        shape: A
                    };
                return l.prototype = Error.prototype, v.checkPropTypes = _, v.PropTypes = v, v
            }
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var r = function() {};
            "production" !== t.env.NODE_ENV && (r = function(e, t, r) {
                var n = arguments.length;
                r = new Array(n > 2 ? n - 2 : 0);
                for (var o = 2; o < n; o++) r[o - 2] = arguments[o];
                if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                if (t.length < 10 || /^[s\W]*$/.test(t)) throw new Error("The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: " + t);
                if (!e) {
                    var i = 0,
                        s = "Warning: " + t.replace(/%s/g, function() {
                            return r[i++]
                        });
                    "undefined" != typeof console && console.error(s);
                    try {
                        throw new Error(s)
                    } catch (e) {}
                }
            }), e.exports = r
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";
        (function(n) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
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

            function _(e, t) {
                return C.length ? C.forEach(function(r) {
                        return e.addEventListener(r, t, !1)
                    }) : setTimeout(t, 0),
                    function() {
                        C.length && C.forEach(function(r) {
                            return e.removeEventListener(r, t, !1)
                        })
                    }
            }
            t.__esModule = !0;
            var c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                u = r(12),
                l = o(u),
                E = r(14),
                d = o(E),
                p = r(16),
                f = o(p),
                S = r(15),
                h = r(1),
                m = o(h),
                O = r(2),
                T = o(O),
                R = r(24),
                A = r(9),
                C = [];
            S.transitionEnd && C.push(S.transitionEnd), S.animationEnd && C.push(S.animationEnd);
            var I = {
                    children: T.default.node,
                    name: A.nameShape.isRequired,
                    appear: T.default.bool,
                    enter: T.default.bool,
                    leave: T.default.bool,
                    appearTimeout: T.default.number,
                    enterTimeout: T.default.number,
                    leaveTimeout: T.default.number
                },
                g = (function(e) {
                    function t() {
                        var r, n, o;
                        i(this, t);
                        for (var a = arguments.length, _ = Array(a), c = 0; c < a; c++) _[c] = arguments[c];
                        return r = n = s(this, e.call.apply(e, [this].concat(_))), n.componentWillAppear = function(e) {
                            n.props.appear ? n.transition("appear", e, n.props.appearTimeout) : e()
                        }, n.componentWillEnter = function(e) {
                            n.props.enter ? n.transition("enter", e, n.props.enterTimeout) : e()
                        }, n.componentWillLeave = function(e) {
                            n.props.leave ? n.transition("leave", e, n.props.leaveTimeout) : e()
                        }, o = r, s(n, o)
                    }
                    return a(t, e), t.prototype.componentWillMount = function() {
                        this.classNameAndNodeQueue = [], this.transitionTimeouts = []
                    }, t.prototype.componentWillUnmount = function() {
                        this.unmounted = !0, this.timeout && clearTimeout(this.timeout), this.transitionTimeouts.forEach(function(e) {
                            clearTimeout(e)
                        }), this.classNameAndNodeQueue.length = 0
                    }, t.prototype.transition = function(e, t, r) {
                        var n = (0, R.findDOMNode)(this);
                        if (!n) return void(t && t());
                        var o = this.props.name[e] || this.props.name + "-" + e,
                            i = this.props.name[e + "Active"] || o + "-active",
                            s = null,
                            a = void 0;
                        (0, l.default)(n, o), this.queueClassAndNode(i, n);
                        var c = function(e) {
                            e && e.target !== n || (clearTimeout(s), a && a(), (0, d.default)(n, o), (0, d.default)(n, i), a && a(), t && t())
                        };
                        r ? (s = setTimeout(c, r), this.transitionTimeouts.push(s)) : S.transitionEnd && (a = _(n, c))
                    }, t.prototype.queueClassAndNode = function(e, t) {
                        var r = this;
                        this.classNameAndNodeQueue.push({
                            className: e,
                            node: t
                        }), this.rafHandle || (this.rafHandle = (0, f.default)(function() {
                            return r.flushClassNameAndNodeQueue()
                        }))
                    }, t.prototype.flushClassNameAndNodeQueue = function() {
                        this.unmounted || this.classNameAndNodeQueue.forEach(function(e) {
                            e.node.scrollTop, (0, l.default)(e.node, e.className)
                        }), this.classNameAndNodeQueue.length = 0, this.rafHandle = null
                    }, t.prototype.render = function() {
                        var e = c({}, this.props);
                        return delete e.name, delete e.appear, delete e.enter, delete e.leave, delete e.appearTimeout, delete e.enterTimeout, delete e.leaveTimeout, delete e.children, m.default.cloneElement(m.default.Children.only(this.props.children), e)
                    }, t
                })(m.default.Component);
            g.displayName = "CSSTransitionGroupChild", g.propTypes = "production" !== n.env.NODE_ENV ? I : {}, t.default = g, e.exports = t.default
        }).call(t, r(0))
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = r(10),
            i = n(o),
            s = r(5),
            a = n(s);
        e.exports = {
            TransitionGroup: a.default,
            CSSTransitionGroup: i.default
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            if (!e) return e;
            var t = {};
            return i.Children.map(e, function(e) {
                return e
            }).forEach(function(e) {
                t[e.key] = e
            }), t
        }

        function o(e, t) {
            function r(r) {
                return t.hasOwnProperty(r) ? t[r] : e[r]
            }
            e = e || {}, t = t || {};
            var n = {},
                o = [];
            for (var i in e) t.hasOwnProperty(i) ? o.length && (n[i] = o, o = []) : o.push(i);
            var s = void 0,
                a = {};
            for (var _ in t) {
                if (n.hasOwnProperty(_))
                    for (s = 0; s < n[_].length; s++) {
                        var c = n[_][s];
                        a[n[_][s]] = r(c)
                    }
                a[_] = r(_)
            }
            for (s = 0; s < o.length; s++) a[o[s]] = r(o[s]);
            return a
        }
        t.__esModule = !0, t.getChildMapping = n, t.mergeChildMappings = o;
        var i = r(1)
    }, function(e, r) {
        e.exports = t
    }])
}), define("modules/clean/accessibility/utils", ["require", "exports", "modules/clean/keycode"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.accessibleColorPalette = ["#006AFF", "#0073E1", "#007BC3", "#007F9B", "#008578", "#008750", "#008928", "#008800", "#0573EB", "#0579C3", "#0580A0", "#05857D", "#058655", "#058932", "#05890A", "#0A71F0", "#0A78CD", "#0A7FAA", "#0A8487", "#0A855F", "#0A8737", "#0A880F", "#0F6EF5", "#0F76D7", "#0F7DB4", "#0F818C", "#0F8669", "#0F8741", "#0F8819", "#146DFF", "#1475DC", "#147BBE", "#14819B", "#148473", "#14864B", "#148723", "#1969FF", "#1972E1", "#1979C3", "#1980A0", "#198278", "#198550", "#198728", "#198700", "#1E70E6", "#1E79C8", "#1E7FA5", "#1E837D", "#1E8555", "#1E8832", "#1E880A", "#236EEB", "#2376D2", "#237CAF", "#238187", "#23845F", "#23883C", "#238914", "#286DF5", "#2876D7", "#287CB4", "#28808C", "#288469", "#288541", "#288619", "#2D6AFA", "#2D73DC", "#2D7BB9", "#2D8096", "#2D836E", "#2D8446", "#2D8823", "#3267FF", "#3271E1", "#3279C3", "#327D9B", "#328378", "#328550", "#328528", "#328600", "#376EE6", "#3777C8", "#377DA5", "#37807D", "#37855A", "#378632", "#37860A", "#3C6CEB", "#3C74CD", "#3C7BAA", "#3C8087", "#3C835F", "#3C8437", "#3C8614", "#416AF5", "#4173D7", "#4179B9", "#417E91", "#418069", "#418341", "#418419", "#4667FA", "#466FDC", "#4676BE", "#467B9B", "#468073", "#46824B", "#468423", "#4B63FF", "#4B6DE1", "#4B75BE", "#4B7B9B", "#4B8078", "#4B8150", "#4B8228", "#4B8300", "#5069E6", "#5072C8", "#5079A5", "#507C7D", "#50815A", "#508232", "#50830A", "#5567F0", "#556FD2", "#5575AA", "#557A87", "#557E5F", "#55823C", "#558314", "#5A65F5", "#5A6DD7", "#5A75B4", "#5A7A91", "#5A7D69", "#5A7F41", "#5A821E", "#5F61FA", "#5F69DC", "#5F71BE", "#5F779B", "#5F7E50", "#5F7F28", "#5F8100", "#6466E6", "#646DC3", "#6475A5", "#647D55", "#647E2D", "#648005", "#6964EB", "#696BC8", "#6972A5", "#697C55", "#697E2D", "#697F05", "#6E62EB", "#6E6AC8", "#6E71A5", "#6E7C46", "#6E7E1E", "#7358FF", "#7363E1", "#736ABE", "#7372A0", "#785CEB", "#7864CD", "#786DAF", "#7D53FF", "#7D5EE1", "#7D66C3", "#7D6EA0", "#8255F5", "#825FD7", "#8268B9", "#826D91", "#8756F0", "#8760D2", "#8766AA", "#8C4AFF", "#8C56E6", "#8C60C8", "#8C66A0", "#914BF5", "#9157DC", "#9160BE", "#916596", "#964BEB", "#9655D2", "#965EAF", "#966691", "#9B47F0", "#9B51D2", "#9B5CB4", "#9B6191", "#A041F5", "#A04EDC", "#A058B9", "#A06196", "#A53BF5", "#A548DC", "#A553BE", "#A55A96", "#AA34FA", "#AA42E6", "#AA4FC8", "#AA58A0", "#AA5F78", "#AA614B", "#AA6623", "#AF29FF", "#AF38E6", "#AF47D2", "#AF52AF", "#AF5782", "#AF5E5A", "#AF622D", "#AF6400", "#B42CF0", "#B43CD7", "#B447B4", "#B45291", "#B45864", "#B45D37", "#B45D05", "#B919FF", "#B92CE6", "#B93BC8", "#B94AAA", "#B9547D", "#B95B4B", "#B95A14", "#BE0CF0", "#BE1FEB", "#BE31CD", "#BE41B4", "#BE4C87", "#BE5455", "#BE561E", "#C307EB", "#C31AE1", "#C32CC8", "#C33DB4", "#C3488C", "#C34F5A", "#C35428", "#C803E1", "#C816E1", "#C826C3", "#C836AF", "#C8428C", "#C8495F", "#C84F32", "#C85200", "#CD11C8", "#CD22C8", "#CD31AF", "#CD3B87", "#CD4664", "#CD4B37", "#CD4D0A", "#D20CC3", "#D21CB4", "#D229A0", "#D23587", "#D23E64", "#D23F37", "#D2430F", "#D708AF", "#D716A0", "#D72291", "#D73087", "#D7355F", "#D73A3C", "#D73A14", "#DC0596", "#DC119B", "#DC1D91", "#DC256E", "#DC2E5A", "#DC343C", "#DC3419", "#E1027D", "#E10C87", "#E11882", "#E11B5A", "#E12755", "#E12A37", "#E12919", "#E13200", "#E6075F", "#E60C4B", "#E61655", "#E61D46", "#E62132", "#E61B14", "#E61A00", "#EB0232", "#EB0214", "#EB0D30"], t.accessibleBrandedColorPalette = ["#61082B", "#CEB4FF", "#FFAFA2", "#FFD830", "#FFCB95", "#D8BEA2", "#0D2481", "#B4D0E7", "#A2D39B", "#005744", "#D0D0D3", "#813BF6"], t.accessibleTriggerProps = function(e, t) {
            return void 0 === t && (t = "button"), {
                role: t,
                tabIndex: 0,
                onClick: function(t) {
                    return e(t)
                },
                onKeyDown: function(t) {
                    if (t.keyCode === r.KeyCode.ENTER || t.keyCode === r.KeyCode.SPACE) return e(t)
                }
            }
        }
}), define("modules/clean/ajax_minimal", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
        return t ? t[2] : ""
    }

    function n(e, t) {
        var n = new XMLHttpRequest;
        n.open("POST", e), n.withCredentials = !0, n.setRequestHeader("X-CSRF-Token", r("__Host-js_csrf")), n.send(t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.post = n
}), define("modules/clean/browse_uri_interface", ["require", "exports", "tslib", "modules/clean/previews/data/preview_type_util", "modules/clean/react/browse/uri_helper", "modules/clean/viewer", "modules/core/uri"], function(e, t, r, n, o, i, s) {
    "use strict";

    function a(e) {
        return o.browse_root(i.Viewer.get_viewer(), e)
    }

    function _(e, t, n) {
        void 0 === n && (n = {});
        return "/" !== t.charAt(0) && (t = "/" + t), new s.URI({
            scheme: "https",
            authority: "www.dropbox.com",
            path: "/preview" + t,
            query: r.__assign({}, n, {
                role: e.role
            })
        })
    }

    function c(e, t) {
        var r;
        if (t.is_dir && (r = a(e) + s.URI.encode_parts(t.fq_path)), t.preview && n.isCloudDoc(t.preview)) {
            r = t.preview.content.exit_url || t.href
        }
        return r || (r = _(e, t.fq_path).toString()), r
    }

    function u(e, t) {
        return new s.URI({
            scheme: "https",
            authority: "www.dropbox.com",
            path: "" + a(e) + t
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.get_browse_root = a, t.preview_uri_for_fq_path = _, t.href_for_file = c, t.browse_uri_for_fq_path = u
}), define("modules/clean/filetypes", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.FILE = 1] = "FILE", e[e.FOLDER = 2] = "FOLDER", e[e.PACKAGE = 3] = "PACKAGE", e[e.SHARED_FOLDER = 4] = "SHARED_FOLDER", e[e.SANDBOX = 5] = "SANDBOX", e[e.TEAM_SHARED_FOLDER = 6] = "TEAM_SHARED_FOLDER", e[e.TEAM_MEMBER_FOLDER = 7] = "TEAM_MEMBER_FOLDER"
    })(t.FileTypes || (t.FileTypes = {}))
}), define("modules/clean/history", ["require", "exports", "tslib", "external/lodash", "modules/core/exception", "modules/core/uri", "modules/clean/ux_analytics/UxAnalyticsDispatcher", "modules/core/browser"], function(e, t, r, n, o, i, s, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), a = r.__importStar(a);
    var _ = (function() {
        function e() {
            s.UxAnalyticsDispatcher.dispatchHistoryChange(a.get_href())
        }
        var t = new RegExp("#|;|\\?|:|@|&|=|\\+|\\$"),
            r = function() {
                var e = window.location.pathname,
                    r = window.location.search;
                return e.search(t) !== -1 && (e = String(new i.URI({
                    path: e
                }))), e + r
            },
            _ = function() {
                var e = i.URI.parse(r());
                return e.setPath(i.URI.encode_parts(e.getPath())), e
            },
            c = function(e, t) {
                return null == t && (t = void 0), String(i.URI.parse(e).setQuery(t))
            },
            u = function(e) {
                return void 0 === e && (e = r()), {
                    url: e,
                    path: e.split("?")[0],
                    qargs: i.URI.parse(e).getQuery()
                }
            },
            l = {},
            E = {},
            d = r(),
            p = null,
            f = "",
            S = function(e) {
                return f + "/" + e.substring(f.length).split("/")[1]
            },
            h = function(e) {
                return f = e
            },
            m = function(e) {
                var t = d,
                    r = u(t),
                    n = S(r.path);
                if (n in e) {
                    var o = r.path.substr(n.length + 1);
                    return Array.from(e[n]).map(function(e) {
                        return e(o, r.qargs)
                    })
                }
            },
            O = function() {
                return m(l)
            },
            T = function() {
                return m(E)
            },
            R = function(e, t, r) {
                if (r[e]) {
                    var n = r[e].indexOf(t);
                    return r[e].splice(n, 1)
                }
            },
            A = function(e, t) {
                if (S(e) !== S(t)) return T()
            },
            C = function() {
                var t = r();
                t !== d && (A(d, t), d = t, O(), e())
            };
        return s.UxAnalyticsDispatcher.initUrl(a.get_href()), {
            init: function() {
                if (!p) return d = r(), p = setInterval(C, 50)
            },
            _add_callback: function(e, t, r) {
                return this.init(), o.assert("string" == typeof e, "DBHistory prefix is not a string"), o.assert(0 === e.indexOf("/"), "DBHistory prefix must be absolute"), o.assert(e.substring(f.length).indexOf("/", 1) === -1, "multi-component prefixes arent supported"), r[e] || (r[e] = []), r[e].push(t)
            },
            add_callback: function(e, t, r) {
                if (void 0 === r && (r = !1), this._add_callback(e, t, l), !r) return O()
            },
            remove_callback: function(e, t) {
                return R(e, t, l)
            },
            remove_exit_callback: function(e, t) {
                return R(e, t, E)
            },
            add_exit_callback: function(e, t) {
                return this._add_callback(e, t, E)
            },
            fire_callbacks: function() {
                return O()
            },
            fire_exit_callbacks: function() {
                return T()
            },
            _build_url_for_state_change: function(e, t) {
                return o.assert("string" == typeof e, "DBHistory path is not a string"), o.assert(0 === e.indexOf("/"), "DBHistory path must be absolute"), o.assert(e.indexOf("//") === -1, "DBHistory path contains //"), c(e, t)
            },
            _pre_state_change: function(e) {
                return e !== d && (A(d, e), !0)
            },
            _post_state_change: function(e) {
                if (void 0 === e && (e = !0), d = r(), e) return O()
            },
            replace_state: function(t, r, o) {
                void 0 === o && (o = {}), o = n.defaults(o, {
                    immediatelyRestoreState: !0
                });
                var i = this._build_url_for_state_change(t, r);
                this._pre_state_change(i) && window.history.replaceState && (window.history.replaceState(null, null, i), this._post_state_change(o.immediatelyRestoreState), e())
            },
            push_state: function(t, r, i) {
                null == i && (i = {}), i = n.defaults(i, {
                    immediatelyRestoreState: !0
                }), o.assert(t.indexOf("?") === -1, "DBHistory path contains ?"), o.assert(t.indexOf("#") === -1, "DBHistory path contains #");
                var s = this._build_url_for_state_change(t, r);
                this._pre_state_change(s) && (window.history.pushState(null, null, s), this._post_state_change(i.immediatelyRestoreState), e())
            },
            update_query_param: function(e, t) {
                var r = this.deconstruct_url();
                return r.qargs[e] = t, this.replace_state(r.path, r.qargs)
            },
            remove_query_param: function(e) {
                var t = this.deconstruct_url();
                return delete t.qargs[e], this.replace_state(t.path, t.qargs)
            },
            reset: function() {
                [l, E].forEach(function(e) {
                    Object.keys(e).forEach(function(t) {
                        e[t].forEach(function(r) {
                            R(t, r, e)
                        })
                    })
                }), d = r(), p = null, f = ""
            },
            get_url: r,
            get_uri: _,
            construct_url: c,
            deconstruct_url: u,
            set_base_prefix: h,
            URL_ESCAPE_REGEX: t
        }
    })();
    t.default = _
}), define("modules/clean/immutability_helper", ["require", "exports", "tslib", "external/deep-freeze"], function(e, t, r, n) {
    "use strict";

    function o(e) {
        if (null == e) throw new TypeError("Cannot thaw null/undefined object");
        if (Array.isArray(e)) return S.call(e);
        for (var t = Object.create(Object.getPrototypeOf(e)), r = Object.getOwnPropertyNames(e), n = 0, o = r; n < o.length; n++) {
            var i = o[n],
                s = Object.getOwnPropertyDescriptor(e, i);
            s && (s.get || s.set) ? (s.configurable = !0, Object.defineProperty(t, i, s)) : t[i] = e[i]
        }
        return t
    }

    function i(e, t) {
        var r = o(e);
        return t(r), n.default(r)
    }

    function s(e, t) {
        if (!t || 0 === t.length) throw new TypeError("Invalid key path: " + JSON.stringify(t));
        return t.reduce(function(e, t) {
            return null == e ? null : e[t]
        }, e)
    }

    function a(e, t, r) {
        if (null == e) throw new TypeError("Object to `set` cannot be null");
        if (e[t] === r) return e;
        var i = o(e);
        return i[t] = r, n.default(i)
    }

    function _(e, t, r) {
        return a(e, t, r(e[t]))
    }

    function c(e, t, r) {
        if (!t || 0 === t.length) throw new TypeError("Invalid key path: " + JSON.stringify(t));
        if (null == e) throw new TypeError("Target object cannot be null");
        var n = t[0];
        return 1 === t.length ? _(e, n, r) : a(e, n, c(e[n], t.slice(1), r))
    }

    function u(e, t, r) {
        if (!t || 0 === t.length) throw new TypeError("Invalid key path: " + JSON.stringify(t));
        if (null == e) throw new TypeError("Target object cannot be null");
        var n = t[0];
        switch (t.length) {
            case 1:
                return a(e, n, r);
            default:
                return a(e, n, u(e[n] || {}, t.slice(1), r))
        }
    }

    function l(e, t) {
        if (null == e || null == t) throw new TypeError("Both target and source cannot be null");
        var r = Object.keys(t).reduce(function(r, n) {
            return t[n] !== e[n] && r.push(n), r
        }, []);
        if (r.length) {
            for (var i = o(e), s = 0, a = r; s < a.length; s++) {
                var _ = a[s],
                    c = Object.getOwnPropertyDescriptor(t, _);
                void 0 !== c && Object.defineProperty(i, _, c)
            }
            return n.default(i)
        }
        return e
    }

    function E(e, t, r) {
        if (null == e || null == r) throw new TypeError("Both target and source cannot be null");
        return c(e, t, function(e) {
            return l(e, r)
        })
    }

    function d(e, t, r) {
        for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
        var s = S.call(e);
        return s.splice.apply(s, [t, r].concat(o)), n.default(s)
    }

    function p(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        var o = S.call(e);
        return o.unshift.apply(o, t), n.default(o)
    }

    function f(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        var o = S.call(e);
        return o.push.apply(o, t), n.default(o)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var S = Array.prototype.slice;
    t.thaw = o, t.withMutations = i, t.getIn = s, t.set = a, t.update = _, t.updateIn = c, t.setIn = u, t.merge = l, t.mergeIn = E, t.splice = d, t.unshift = p, t.push = f
}), define("modules/clean/previews/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.Archive = "archive", e.Audio = "audio", e.CloudDoc = "cloud_doc", e.Excel = "excel", e.HTML = "html", e.Image = "image", e.Linkfile = "linkfile", e.Other = "other", e.SsrDoc = "ssr_doc", e.RawHTML = "raw_html", e.Restricted = "restricted", e.Video = "video", e.Doc = "doc", e.Photo = "photo", e.Text = "text"
    })(t.PreviewType || (t.PreviewType = {})), t.IworkExtensions = ["key", "pages", "numbers", "kth"], t.MAX_ARCHIVE_FILE_SIZE_B = 536870912, t.MAX_PPT_FILE_SIZE_B = 301989888, t.MAX_WORD_DOC_FILE_SIZE_B = 167772160
}), define("modules/clean/previews/data/preview_type_util", ["require", "exports", "modules/clean/previews/constants"], function(e, t, r) {
    "use strict";

    function n(e) {
        return function(t) {
            var r = o(t);
            return !!r && r === e
        }
    }

    function o(e) {
        if (e && e.content) return e.content[".tag"]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isArchive = n(r.PreviewType.Archive), t.isRawHtml = n(r.PreviewType.RawHTML), t.isExcel = n(r.PreviewType.Excel), t.isVideo = n(r.PreviewType.Video), t.isAudio = n(r.PreviewType.Audio), t.isLinkfile = n(r.PreviewType.Linkfile), t.isHtml = n(r.PreviewType.HTML), t.isSsrDoc = n(r.PreviewType.SsrDoc), t.isImage = n(r.PreviewType.Image), t.isCloudDoc = n(r.PreviewType.CloudDoc), t.isRestricted = n(r.PreviewType.Restricted), t.isOther = n(r.PreviewType.Other), t.getPreviewType = o
}), define("modules/clean/prompt/api/rendering", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return void 0 !== e.remindMeLaterText
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isHomeModalContent = r
}), define("modules/clean/react/badge", ["require", "exports", "tslib", "react", "external/classnames", "modules/clean/react/css", "modules/core/i18n"], function(e, t, r, n, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), o = r.__importDefault(o);
    var a;
    (function(e) {
        e.NEW = "new", e.PRO = "pro", e.BETA = "beta", e.PLUS = "plus", e.ALPHA = "alpha"
    })(a = t.BadgeVariant || (t.BadgeVariant = {}));
    var _;
    (function(e) {
        e.NEON_GREEN = "neon-green", e.STONE_FORTY = "stone-forty", e.SQUASH = "squash", e.PINK = "pink", e.PINK_OUTLINE = "pink-outline"
    })(_ = t.BadgeColor || (t.BadgeColor = {}));
    var c = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e, t = this.props,
                i = t.variant,
                _ = t.color,
                c = t.absolute,
                u = t.className,
                l = t.onClick,
                E = {};
            l && (E.onClick = l);
            var d = (e = {}, e[a.NEW] = s._("New"), e[a.PRO] = s._("Pro"), e[a.BETA] = s._("Beta"), e[a.PLUS] = s._("Plus"), e[a.ALPHA] = s._("Alpha"), e);
            return n.default.createElement("span", r.__assign({
                className: o.default("badge", "badge--variant-" + i, "badge--color-" + _, {
                    "badge--absolute": c
                }, u)
            }, E), d[i] || null)
        }, t.defaultProps = {
            color: _.NEON_GREEN,
            absolute: !1
        }, t
    })(n.default.Component);
    t.Badge = i.requireCssWithComponent(c, ["/static/css/react/badge-vfl4JD5sn.css"])
}), define("modules/clean/react/browse/constants", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.NotReady = 0] = "NotReady", e[e.NotLive = 1] = "NotLive", e[e.Live = 2] = "Live"
    })(t.BrowseBoltClientStatus || (t.BrowseBoltClientStatus = {})), t.BROWSE_FILE_VIEWER_ELEMENT_ID = "browse-react-file-viewer-container";
    var n = {
        PAPER: ["paper"],
        PAPER_TEMPLATE: ["papert"],
        IMAGE: ["bmp", "cr2", "gif", "ico", "jpeg", "jpg", "nef", "png", "psd", "tif", "tiff", "svg", "svgz"],
        VIDEO: ["3gp", "3gpp", "3gpp2", "avi", "dv", "flv", "m2t", "m4v", "mkv", "mov", "mp4", "mpeg", "mpg", "mts", "ts", "vob", "wmv"],
        AUDIO: ["aif", "flac", "m4a", "m4p", "mp3", "ogg", "wav", "wma"],
        DOCUMENT: ["ai", "binder", "cdr", "csv", "doc", "docx", "docm", "eps", "fla", "gdoc", "gsheet", "gslides", "indd", "keynote", "numbers", "otf", "pages", "pdf", "ppt", "pptx", "pptm", "pps", "ppsx", "ppsm", "ps", "rtf", "swf", "txt", "wpd", "xls", "xlsx", "xlsm"],
        COMPRESSED_FILE: ["7z", "bz2", "gz", "gzip", "rar", "tar", "zip"],
        CODE: ["as", "as3", "asm", "aspx", "bat", "c", "cc", "cmake", "coffee", "cpp", "cs", "css", "cxx", "diff", "erb", "erl", "groovy", "gry", "h", "haml", "hh", "hpp", "html", "htm", "hxx", "java", "js", "json", "jsx", "less", "lst", "m", "make", "mk", "ml", "mm", "msg", "out", "patch", "php", "pl", "pm", "plist", "properties", "py", "rb", "sass", "scala", "scm", "script", "scss", "sh", "sml", "sql", "vb", "vi", "vim", "xhtml", "xml", "xsd", "xsl", "y", "yaml", "yml", "yxx"],
        DISK_IMAGE: ["dmg", "iso"],
        EXECUTABLE: ["exe"],
        SHORTCUT: ["lnk", "web"],
        LINK: ["url", "webloc"],
        FONT: ["ttf"]
    };
    t.FileTypeCategoryTranslations = {
        FILE: r._("File"),
        FOLDER: r._("Folder"),
        SHARED_FOLDER: r._("Shared folder"),
        TEAM_SHARED_FOLDER: r._("Team folder"),
        TEAM_MEMBER_FOLDER: r._("Member folder"),
        PUBLIC_FOLDER: r._("Folder"),
        IMAGE: r._("Image"),
        VIDEO: r._("Video"),
        AUDIO: r._("Audio"),
        DOCUMENT: r._("Document"),
        COMPRESSED_FILE: r._("Archive", {
            project: "file-types"
        }),
        CODE: r._("Code"),
        DISK_IMAGE: r._("Disk image"),
        EXECUTABLE: r._("Executable"),
        SHORTCUT: r._("Shortcut"),
        LINK: r._("Link", {
            project: "file-types",
            comment: "A noun describing a url link"
        }),
        FONT: r._("Font"),
        SANDBOX: r._("App folder"),
        PAPER: r._("Paper doc", {
            comment: "The category of files that are Paper files"
        }),
        PAPER_TEMPLATE: r._("Paper template", {
            comment: "The category of files that are Paper Template files"
        })
    }, t.FileTypeCapitalizedCategoryTranslations = {
        FILE: r._("FILE"),
        FOLDER: r._("FOLDER"),
        SHARED_FOLDER: r._("SHARED FOLDER"),
        TEAM_SHARED_FOLDER: r._("TEAM FOLDER"),
        TEAM_MEMBER_FOLDER: r._("MEMBER FOLDER"),
        PUBLIC_FOLDER: r._("FOLDER"),
        IMAGE: r._("IMAGE"),
        VIDEO: r._("VIDEO"),
        AUDIO: r._("AUDIO"),
        DOCUMENT: r._("DOCUMENT"),
        COMPRESSED_FILE: r._("ARCHIVE"),
        CODE: r._("CODE"),
        DISK_IMAGE: r._("DISK IMAGE"),
        EXECUTABLE: r._("EXECUTABLE"),
        SHORTCUT: r._("SHORTCUT"),
        LINK: r._("LINK", {
            comment: "A noun describing a url link"
        }),
        FONT: r._("FONT"),
        SANDBOX: r._("APP FOLDER"),
        PAPER: r._("PAPER DOC", {
            comment: "The category of files that are Paper files"
        }),
        PAPER_TEMPLATE: r._("PAPER TEMPLATE", {
            comment: "The category of files that are Paper Template files"
        })
    }, t.DeletedFileTypeCategoryTranslations = {
        FILE: r._("Deleted file"),
        FOLDER: r._("Deleted folder"),
        SHARED_FOLDER: r._("Deleted shared folder"),
        TEAM_SHARED_FOLDER: r._("Deleted team folder"),
        TEAM_MEMBER_FOLDER: r._("Deleted member folder"),
        PUBLIC_FOLDER: r._("Deleted folder"),
        IMAGE: r._("Deleted image"),
        VIDEO: r._("Deleted video"),
        AUDIO: r._("Deleted audio"),
        DOCUMENT: r._("Deleted document"),
        COMPRESSED_FILE: r._("Deleted archive"),
        CODE: r._("Deleted code"),
        DISK_IMAGE: r._("Deleted disk image"),
        EXECUTABLE: r._("Deleted executable"),
        SHORTCUT: r._("Deleted shortcut"),
        LINK: r._("Deleted link"),
        FONT: r._("Deleted font"),
        SANDBOX: r._("Deleted app folder"),
        PAPER: r._("Deleted Paper doc", {
            comment: 'Label for the "type" of a file in a list of files'
        }),
        PAPER_TEMPLATE: r._("Deleted Paper template", {
            comment: 'Label for the "type" of a file in a list of files'
        })
    }, t.DeletedFileTypeCapitalizedCategoryTranslations = {
        FILE: r._("DELETED FILE"),
        FOLDER: r._("DELETED FOLDER"),
        SHARED_FOLDER: r._("DELETED SHARED FOLDER"),
        TEAM_SHARED_FOLDER: r._("DELETED TEAM FOLDER"),
        TEAM_MEMBER_FOLDER: r._("DELETED MEMBER FOLDER"),
        PUBLIC_FOLDER: r._("DELETED FOLDER"),
        IMAGE: r._("DELETED IMAGE"),
        VIDEO: r._("DELETED VIDEO"),
        AUDIO: r._("DELETED AUDIO"),
        DOCUMENT: r._("DELETED DOCUMENT"),
        COMPRESSED_FILE: r._("DELETED ARCHIVE"),
        CODE: r._("DELETED CODE"),
        DISK_IMAGE: r._("DELETED DISK IMAGE"),
        EXECUTABLE: r._("DELETED EXECUTABLE"),
        SHORTCUT: r._("DELETED SHORTCUT"),
        LINK: r._("DELETED LINK"),
        FONT: r._("DELETED FONT"),
        SANDBOX: r._("DELETED APP FOLDER"),
        PAPER: r._("DELETED PAPER DOC"),
        PAPER_TEMPLATE: r._("DELETED PAPER TEMPLATE")
    }, t.ExtensionCategories = {};
    for (var o = 0, i = Object.keys(n); o < i.length; o++)
        for (var s = i[o], a = n[s], _ = 0, c = a; _ < c.length; _++) {
            var u = c[_];
            t.ExtensionCategories[u] = s
        }(function(e) {
            e.SET_SHARED_FOLDER_DATA = "SET_SHARED_FOLDER_DATA", e.SET_SHARED_LINK_DATA = "SET_SHARED_LINK_DATA", e.SET_SHARED_LINK_INFO_FOR_PARENT_PATH = "SET_SHARED_LINK_INFO_FOR_PARENT_PATH", e.SET_SHARED_FILE_DATA = "SET_SHARED_FILE_DATA", e.SIGNAL_SHARED_FILE_DATA_OUT_OF_DATE = "SIGNAL_SHARED_FILE_DATA_OUT_OF_DATE", e.SIGNAL_SHARED_FOLDER_DATA_OUT_OF_DATE = "SIGNAL_SHARED_FOLDER_DATA_OUT_OF_DATE", e.SIGNAL_SHARED_LINK_DATA_OUT_OF_DATE = "SIGNAL_SHARED_LINK_DATA_OUT_OF_DATE", e.CLEAR_SHARED_FOLDER_DATA_FOR_NS = "CLEAR_SHARED_FOLDER_DATA_FOR_NS", e.REMOVE_SHARED_LINK_DATA = "REMOVE_SHARED_LINK_DATA", e.BROWSE_FILES_UPDATED = "BROWSE_FILES_UPDATED", e.BROWSE_FILES_LOADED = "BROWSE_FILES_LOADED", e.INIT_INTEGRATION_DATA = "INIT_INTEGRATION_DATA"
        })(t.SharedWithActionType || (t.SharedWithActionType = {})), t.MAX_FOLDERS_PER_CALL = 100, t.MAX_FOLDER_SIZE_QUEUE_SIZE = 50, t.MAX_FOLDER_SIZE_ITERATIONS = 1e3, t.BROWSE_SORT_COOKIE_NAME = "browse_current_sort";
    (function(e) {
        e.RELEVANCE = "RELEVANCE", e.LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME"
    })(t.SEARCH_ORDER_BY_TYPE || (t.SEARCH_ORDER_BY_TYPE = {}));
    (function(e) {
        e.TRUE = "true", e.FALSE = "false"
    })(t.SEARCH_REVERSE_ORDER_TYPE || (t.SEARCH_REVERSE_ORDER_TYPE = {}));
    var l;
    (function(e) {
        e.country_override = "country_override", e.cProfile = "cProfile", e.d = "d", e.last_fq_path = "last_fq_path", e.path = "path", e.preview = "preview", e.public_mode_override = "public_mode_override", e.query = "query", e.query_unnormalized = "query_unnormalized", e.search_session_id = "search_session_id", e.search_token = "search_token", e.select = "select", e.activity = "activity", e.rewind = "rewind", e.from_desktop_client = "from_desktop_client", e.rewind_optin = "rewind_optin", e.stormcrow_override = "stormcrow_override", e.stormcrow_override_data_field = "stormcrow_override_data_field", e.stormcrow_override_population = "stormcrow_override_population", e.stormcrow_override_ttl = "stormcrow_override_ttl", e.stormcrow_panel = "stormcrow_panel", e.uncompressed_js = "uncompressed_js", e.use_packages = "use_packages", e.file_categories = "file_categories", e.preselected_for_showcase = "preselected_for_showcase", e.search_from = "search_from", e.share = "share", e.reload = "reload", e.folder_overview = "folder_overview", e.search_order_by = "search_order_by", e.search_reverse_order = "search_reverse_order", e.search_type = "search_type", e.rewind_tip = "rewind_tip", e.search_account_id = "search_account_id"
    })(l = t.BrowseQueryArg || (t.BrowseQueryArg = {})), t.FRAMEWORK_ARGS = [
        [l.country_override],
        [l.cProfile],
        [l.public_mode_override],
        [l.stormcrow_override],
        [l.stormcrow_override_data_field],
        [l.stormcrow_override_population],
        [l.stormcrow_override_ttl],
        [l.stormcrow_panel],
        [l.uncompressed_js],
        [l.use_packages]
    ], t.DEFAULT_PAGE_HEADER_HEIGHT = 96, t.COMPACT_PAGE_HEADER_HEIGHT = 76, t.BrowseFolderOverviewComponentNamespace = "BROWSE"
}), define("modules/clean/react/browse/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.APP_INIT = "BROWSE/APP_INIT", e.PUSH_BOLT_IGNORE = "BROWSE/PUSH_BOLT_IGNORE", e.POP_BOLT_IGNORE = "BROWSE/POP_BOLT_IGNORE", e.SELECT_FILES_BY_FQ_PATH = "BROWSE/SELECT_FILES_BY_FQ_PATH", e.SHOW_TIMELINE = "BROWSE/SHOW_TIMELINE", e.HIDE_TIMELINE = "BROWSE/HIDE_TIMELINE", e.OPT_IN_TO_REWIND = "BROWSE/OPTED_IN_TO_REWIND", e.SET_IS_REWIND_ENABLED = "BROWSE/SET_IS_REWIND_ENABLED", e.SET_BROWSE_POST_TTI_EXPERIMENTS = "BROWSE/SET_BROWSE_POST_TTI_EXPERIMENTS", e.SET_CAN_DISPLAY_FOLDER_SIZES = "BROWSE/SET_CAN_DISPLAY_FOLDER_SIZES", e.SET_CLIPBOARD_FILES = "BROWSE/SET_CLIPBOARD_FILES", e.SET_CONTEXT = "BROWSE/SET_CONTEXT", e.SET_FILE_JUMP_FILTER = "BROWSE/SET_FILE_JUMP_FILTER", e.SET_FILE_PATHS_TO_SELECT_ON_NEXT_UPDATE = "BROWSE/SET_FILE_PATHS_TO_SELECT_ON_NEXT_UPDATE", e.SET_FILE_RENAME = "BROWSE/SET_FILE_RENAME", e.SET_FOLDER_SIZES = "BROWSE/SET_FOLDER_SIZES", e.SET_LOADING_STATE = "BROWSE/SET_LOADING_STATE", e.SET_MOUNT_POINTS = "BROWSE/SET_MOUNT_POINTS", e.SET_NEW_FOLDER_CREATION_STATE = "BROWSE/SET_NEW_FOLDER_CREATION_STATE", e.SET_PAGINATED_TOTAL_NUM_FILES = "BROWSE/SET_PAGINATED_TOTAL_NUM_FILES", e.SET_PATH = "BROWSE/SET_PATH", e.SET_SELECTION = "BROWSE/SET_SELECTION", e.SET_SHOULD_SHOW_DELETED_FILES = "BROWSE/SET_SHOULD_SHOW_DELETED_FILES", e.SET_SORT_ORDER = "BROWSE/SET_SORT_ORDER", e.SET_UNSORTED_FILES = "BROWSE/SET_UNSORTED_FILES", e.SET_IS_FILE_VIEWER_SHOWN = "BROWSE/IS_FILE_VIEWER_SHOWN", e.SET_IS_SEARCH_MODE = "BROWSE/SET_IS_SEARCH_MODE", e.REQUEST_FOLDER_SIZES = "BROWSE/REQUEST_FOLDER_SIZES", e.SET_FOLDER_SIZES_PENDING = "BROWSE/SET_FOLDER_SIZES_PENDING", e.COMPLETE_FOLDER_SIZES = "BROWSE/COMPLETE_FOLDER_SIZES"
    })(t.ActionTypes || (t.ActionTypes = {}))
}), define("modules/clean/react/browse/logger_util", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return !!e && !!e.fq_path
    }

    function n(e) {
        return !!e && !!e.pad_id
    }

    function o(e) {
        return void 0 !== e.folder_id
    }

    function i(e) {
        var t = e.filter(function(e) {
            return r(e) && e.is_dir
        }).count();
        return {
            num_files_selected: e.filter(function(e) {
                return r(e) && !e.is_dir
            }).count(),
            num_folders_selected: t
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isFile = r, t.isPaper = n, t.isPaperFolder = o, t.countFilesAndFolders = i
}), define("modules/clean/react/browse/models", ["require", "exports", "tslib", "modules/clean/immutability_helper", "modules/clean/filepath", "modules/clean/filetypes", "modules/clean/react/browse/constants", "modules/clean/sharing/access_level", "modules/clean/display_format", "modules/clean/datetime", "modules/core/i18n", "modules/core/exception"], function(e, t, r, n, o, i, s, a, _, c, u, l) {
    "use strict";

    function E(e) {
        return e instanceof f ? e.fq_path : e instanceof R ? e.file_id : e instanceof m ? e.pad_id : e.folder_id
    }

    function d(e) {
        return e instanceof f || e instanceof R || e instanceof m ? e instanceof f || e instanceof R ? null === e.ts || void 0 === e.ts ? 0 : 1e3 * e.ts : new Date(e.ts).getTime() : (l.assert(!1, "Get timestamp in millisecond is only supported for File, FileSharedWithMe and Paper", {
            tags: ["search"]
        }), 0)
    }

    function p(e) {
        return null === e || void 0 === e ? "" : c.getActingTimeWithAgoEnabled(1e3 * e, !1, !0, 0, !0, !0, !0)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o);
    var f = (function() {
        function e(e) {
            this.bytes = e.bytes, this.direct_blockserver_link = e.direct_blockserver_link, this.event_type = e.event_type, this.ext = e.ext, this.file_id = e.file_id, this.filename_highlights = e.filename_highlights, this.highlight_spans = e.highlight_spans, this.fq_path = e.fq_path, this.href = e.href, this.icon = e.icon, this.is_cloud_doc = e.is_cloud_doc, this.is_dir = e.is_dir, this.is_in_team_folder_tree = e.is_in_team_folder_tree, this.is_locked = e.is_locked, this.is_lockholder = e.is_lockholder, this.is_symlink = e.is_symlink, this.is_unmounted = e.is_unmounted, this.is_versionable = e.is_versionable, this.last_modified_name = e.last_modified_name, this.latest_rev = e.latest_rev, this.lockholder_name = e.lockholder_name, this.lock_info = e.lock_info, this.match_type = e.match_type, this._mount_access_perms = e._mount_access_perms, this.ns_id = e.ns_id, this.ns_path = e.ns_path, this.open_to_url = e.open_to_url, this.preview = e.preview, this.preview_type = e.preview_type, this.read_only = !!e.read_only, this.request_id = e.request_id, this.revision_id = e.revision_id, this.sjid = e.sjid, this.sort_key = e.sort_key, this.sort_rank = e.sort_rank, this.snippets = e.snippets, this.sync_setting = e.sync_setting, this.target_ns = e.target_ns, this.team_folder_status = e.team_folder_status, this.thumbnail_url_tmpl = e.thumbnail_url_tmpl, this.ts = e.ts, this.type = e.type, this.isDeleted = !!e.isDeleted, this.fetchFolderSizesStatus = e.fetchFolderSizesStatus, this.last_action_by_user_ts = e.last_action_by_user_ts
        }
        return Object.defineProperty(e.prototype, "ago", {
            get: function() {
                return p(this.ts)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "agoFromLastActionByUserTs", {
            get: function() {
                return p(this.last_action_by_user_ts)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "size", {
            get: function() {
                return this.isDeleted || this.bytes < 0 ? u._("Deleted") : void 0 === this.bytes ? "" : _.format_bytes(this.bytes)
            },
            enumerable: !0,
            configurable: !0
        }), e.fromServerObject = function(t) {
            return new e(r.__assign({}, t, {
                _mount_access_perms: t.mount_access_perms,
                isDeleted: t.bytes === -1
            }))
        }, e.prototype.set = function(e, t) {
            return n.set(this, e, t)
        }, e.prototype.merge = function(e) {
            return n.merge(this, e)
        }, e.prototype.toJS = function() {
            return Object.assign({}, this)
        }, e.getFilename = function(e) {
            return o.filename(e.fq_path)
        }, e.getExtension = function(e) {
            return e.is_dir ? "" : o.file_extension(o.filename(e.fq_path))
        }, e.getCategoryDescription = function(t, r) {
            void 0 === r && (r = !1);
            var n;
            if (t.is_dir)
                if (t.is_in_team_folder_tree) n = "SHARED_FOLDER";
                else switch (n = "FOLDER", t.type) {
                    case i.FileTypes.TEAM_SHARED_FOLDER:
                        n = "TEAM_SHARED_FOLDER";
                        break;
                    case i.FileTypes.SHARED_FOLDER:
                        n = "SHARED_FOLDER";
                        break;
                    case i.FileTypes.SANDBOX:
                        n = "SANDBOX";
                        break;
                    case i.FileTypes.TEAM_MEMBER_FOLDER:
                        n = "TEAM_MEMBER_FOLDER";
                        break;
                    default:
                        t.target_ns && (n = "SHARED_FOLDER")
                } else n = s.ExtensionCategories[e.getExtension(t)] || "FILE";
            return t.isDeleted ? r ? s.DeletedFileTypeCapitalizedCategoryTranslations[n] : s.DeletedFileTypeCategoryTranslations[n] : r ? s.FileTypeCapitalizedCategoryTranslations[n] : s.FileTypeCategoryTranslations[n]
        }, e.isTeamSharedFolder = function(e) {
            return e.type === i.FileTypes.TEAM_SHARED_FOLDER
        }, e.isTeamMemberFolder = function(e) {
            return e.type === i.FileTypes.TEAM_MEMBER_FOLDER
        }, e.isReadOnlySharedFolder = function(e) {
            var t = e._mount_access_perms;
            return null != t && !t.includes("can_edit")
        }, e.isNoAccessSharedFolder = function(e) {
            var t = e._mount_access_perms;
            return null != t && !t.includes("can_view")
        }, e.canViewFileMembers = function(e, t) {
            var r = e._mount_access_perms;
            return !(r && r.indexOf("can_view_members") < 0) && (!(t && !t.canViewContainingNSMembers) || !!(r && r.indexOf("can_view_members") >= 0))
        }, e.prototype.updateSize = function(e, t) {
            return this.merge({
                bytes: e,
                fetchFolderSizesStatus: t
            })
        }, e
    })();
    t.File = f;
    var S = (function() {
        function e(e) {
            void 0 === e && (e = {}), this.isPublicFolderEnabled = !!e.isPublicFolderEnabled, this.publicFolderFqPath = e.publicFolderFqPath, this.publicAppToken = e.publicAppToken, Object.freeze(this)
        }
        return e.fromServerObject = function(t) {
            return new e({
                isPublicFolderEnabled: t.public_folder_enabled,
                publicFolderFqPath: t.public_folder_fq_path,
                publicAppToken: t.public_app_token
            })
        }, e.prototype.set = function(e, t) {
            return n.set(this, e, t)
        }, e.prototype.toJSON = function() {
            return Object.assign({}, this)
        }, e.prototype.toJS = function() {
            return this.toJSON()
        }, e
    })();
    t.Config = S;
    var h = (function() {
        function e(e) {
            var t = void 0 === e ? {} : e,
                r = t.canViewContainingNSMembers,
                n = t.currentNSID,
                o = t.currentFQPath,
                i = t.currentMountPoint,
                s = t.currentNSPath,
                _ = t.currentSharedFolderPermissionRole,
                c = t.currentNSAllowsNesting,
                u = t.inactiveNSIDByFQPath,
                l = t.permanentDeletionDisabledStateByNSID,
                E = t.isInFolderMode,
                d = t.isCurrentlyInRoot,
                p = t.isInsideSandboxFolder,
                f = t.isInsideSharedFolder,
                h = t.isInsideTeamFolderRoot,
                m = t.isInsideArchivedTeamFolder,
                O = t.isInsideTeamFolderTree,
                T = t.isInsideMyTeamFolderTree,
                R = t.isInsideDeletedFolder,
                A = t.isInsideDeletedSharedFolder,
                C = t.isInsideDeletedNestedSharedFolder,
                I = t.isNonUserRelativeContext,
                g = t.pathRoot,
                L = t.rootNSID,
                D = t.showPinnedTeamFolder,
                N = t.teamFolderOwnerTeamApiId,
                v = t.blockHash,
                y = t.config,
                F = t.syncSetting;
            this.canViewContainingNSMembers = null == r || r, this.currentNSID = n || 0, this.currentFQPath = o || "", this.currentMountPoint = i, this.currentNSPath = s, this.currentSharedFolderPermissionRole = null != _ ? _ : a.NameSpaceAccess.ACCESS_NO_ACCESS, this.currentNSAllowsNesting = !!c, this.inactiveNSIDByFQPath = u || {}, this.permanentDeletionDisabledStateByNSID = l || {}, this.isInFolderMode = null == E || E, this.isCurrentlyInRoot = !!d, this.isInsideSandboxFolder = !!p, this.isInsideSharedFolder = !!f, this.isInsideTeamFolderRoot = !!h, this.isInsideArchivedTeamFolder = !!m, this.isInsideTeamFolderTree = !!O, this.isInsideMyTeamFolderTree = !!T, this.isInsideDeletedFolder = !!R, this.isInsideDeletedSharedFolder = !!A, this.isInsideDeletedNestedSharedFolder = !!C, this.isNonUserRelativeContext = !!I, this.pathRoot = g, this.rootNSID = L, this.showPinnedTeamFolder = !!D, this.teamFolderOwnerTeamApiId = N, this.blockHash = v, this.config = y || new S, this.syncSetting = F
        }
        return e.fromServerObject = function(t) {
            var r = t.containing_fq_path || "";
            r.startsWith("/") || (r = "/" + r);
            var n;
            t.inside_shared_folder && (n = a.NameSpaceAccess.ACCESS_READER);
            var o, i = t.containing_ns_permissions || [],
                s = i.includes("mount_shared_folders");
            return t.inside_shared_folder && (i.includes("edit_contents") && (n = a.NameSpaceAccess.ACCESS_WRITER), i.includes("change_folder_options") && (n = a.NameSpaceAccess.ACCESS_OWNER), i.includes("view_members") || (o = !1)), new e({
                blockHash: t.block_hash,
                canViewContainingNSMembers: o,
                config: S.fromServerObject(t),
                currentFQPath: r,
                currentMountPoint: t.containing_mount_point,
                currentNSAllowsNesting: s,
                currentNSID: t.containing_ns_id,
                currentNSPath: t.containing_ns_path,
                currentSharedFolderPermissionRole: n,
                inactiveNSIDByFQPath: t.old_path_to_ns_id,
                isCurrentlyInRoot: t.in_root_dir,
                isInFolderMode: t.inside_dir,
                isInsideSandboxFolder: t.inside_sandbox_folder,
                isInsideArchivedTeamFolder: t.inside_archived_team_folder,
                isInsideTeamFolderRoot: t.inside_team_folder_root,
                isInsideDeletedFolder: t.inside_deleted_dir,
                isInsideDeletedNestedSharedFolder: t.inside_deleted_nested_shared_folder,
                isInsideDeletedSharedFolder: t.inside_deleted_shared_folder,
                isInsideSharedFolder: t.inside_shared_folder,
                isInsideTeamFolderTree: t.inside_team_folder_tree,
                isInsideMyTeamFolderTree: t.inside_my_team_folder_tree,
                isNonUserRelativeContext: t.is_non_user_relative_context,
                pathRoot: t.path_root,
                permanentDeletionDisabledStateByNSID: t.permanent_delete_is_disabled_by_ns_id,
                rootNSID: t.root_ns_id,
                showPinnedTeamFolder: t.show_pinned_team_folder,
                teamFolderOwnerTeamApiId: t.team_folder_owner_team_dbtid,
                syncSetting: t.sync_setting
            })
        }, e.prototype.set = function(e, t) {
            return n.set(this, e, t)
        }, e.prototype.toJSON = function() {
            return Object.assign({}, this)
        }, e.prototype.toJS = function() {
            return this.toJSON()
        }, e.prototype.isCurrentPathWriteable = function() {
            var e = this,
                t = e.currentSharedFolderPermissionRole;
            return !e.isInsideSharedFolder || t === a.NameSpaceAccess.ACCESS_WRITER || t === a.NameSpaceAccess.ACCESS_OWNER
        }, e.prototype.getNameOfTargetFolder = function() {
            return o.filename(this.currentFQPath)
        }, e
    })();
    t.BrowseContext = h;
    var m = (function() {
        function e(e) {
            this.title = e.title, this.pad_id = e.pad_id, this.url = e.url, this.title_highlights = e.title_highlights, this.highlight_spans = e.highlight_spans, this.creator_name = e.creator_name, this.last_editor_name = e.last_editor_name, this.request_id = e.request_id, this.sort_rank = e.sort_rank, this.snippets = e.snippets, this.ts = e.ts
        }
        return Object.defineProperty(e.prototype, "last_modified_date", {
            get: function() {
                if (!this.ts) return "";
                var e = new Date(this.ts).getTime();
                return c.getActingTimeWithAgoEnabled(e, !1, !0, 0, !0, !0, !0)
            },
            enumerable: !0,
            configurable: !0
        }), e.fromServerObject = function(t) {
            return new e(t)
        }, e
    })();
    t.Paper = m;
    var O = (function() {
        function e(e) {
            this.name = e.name, this.url = e.url, this.folder_id = e.folder_id, this.title_highlights = e.title_highlights, this.highlight_spans = e.highlight_spans, this.request_id = e.request_id, this.sort_rank = e.sort_rank
        }
        return e.fromServerObject = function(t) {
            return new e(t)
        }, e
    })();
    t.PaperFolder = O;
    var T = (function() {
        function e(e) {
            this.renderUserDefinedItemRow = e.renderUserDefinedItemRow
        }
        return e
    })();
    t.UserDefinedItem = T;
    var R = (function() {
        function e(e) {
            this.bytes = e.bytes, this.ext = e.ext, this.file_id = e.file_id, this.filename = e.filename, this.highlight_spans = e.highlight_spans, this.href = e.href, this.icon = e.icon, this.is_cloud_doc = e.is_cloud_doc, this.last_modified_name = e.last_modified_name, this.match_type = e.match_type, this.request_id = e.request_id, this.server_timestamp = e.server_timestamp, this.sort_rank = e.sort_rank, this.snippets = e.snippets, this.thumbnail_url_tmpl = e.thumbnail_url_tmpl, this.ts = e.ts, this.type = e.type, this.last_action_by_user_ts = e.last_action_by_user_ts
        }
        return e.fromServerObject = function(t) {
            return new e(t)
        }, Object.defineProperty(e.prototype, "ago", {
            get: function() {
                return p(this.ts)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "agoFromLastActionByUserTs", {
            get: function() {
                return p(this.last_action_by_user_ts)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "size", {
            get: function() {
                return this.bytes < 0 || void 0 === this.bytes ? "" : _.format_bytes(this.bytes)
            },
            enumerable: !0,
            configurable: !0
        }), e.getFilename = function(e) {
            return e.filename || "Dropbox"
        }, e
    })();
    t.FileSharedWithMe = R, t.itemId = E, t.itemTimestampInMs = d, t.getAgo = p
}), define("modules/clean/react/browse/uri_helper", ["require", "exports", "tslib", "modules/clean/history", "modules/clean/react/browse/constants"], function(e, t, r, n, o) {
    "use strict";

    function i(e, t) {
        return e.is_paired ? "personal" === t.role ? "/personal" : "/work" : "/home"
    }

    function s(e, t) {
        var r = i(e, t);
        return t.is_cdm_member ? r + "/" + t.display_name : r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), t.browse_root = i, t.getUserRoot = s, t.getQueryArgs = function() {
        var e = n.default.deconstruct_url().qargs;
        return {
            d: e[o.BrowseQueryArg.d],
            select: e[o.BrowseQueryArg.select],
            path: e[o.BrowseQueryArg.path],
            last_fq_path: e[o.BrowseQueryArg.last_fq_path],
            query: e[o.BrowseQueryArg.query],
            query_unnormalized: e[o.BrowseQueryArg.query_unnormalized],
            preview: e[o.BrowseQueryArg.preview],
            search_session_id: e[o.BrowseQueryArg.search_session_id],
            country_override: e[o.BrowseQueryArg.country_override],
            cProfile: e[o.BrowseQueryArg.cProfile],
            public_mode_override: e[o.BrowseQueryArg.public_mode_override],
            stormcrow_override: e[o.BrowseQueryArg.stormcrow_override],
            stormcrow_override_data_field: e[o.BrowseQueryArg.stormcrow_override_data_field],
            stormcrow_override_population: e[o.BrowseQueryArg.stormcrow_override_population],
            stormcrow_override_ttl: e[o.BrowseQueryArg.stormcrow_override_ttl],
            stormcrow_panel: e[o.BrowseQueryArg.stormcrow_panel],
            uncompressed_js: e[o.BrowseQueryArg.uncompressed_js],
            use_packages: e[o.BrowseQueryArg.use_packages],
            file_categories: e[o.BrowseQueryArg.file_categories],
            preselected_for_showcase: e[o.BrowseQueryArg.preselected_for_showcase],
            activity: e[o.BrowseQueryArg.activity],
            rewind_optin: e[o.BrowseQueryArg.rewind_optin],
            rewind: e[o.BrowseQueryArg.rewind],
            from_desktop_client: e[o.BrowseQueryArg.from_desktop_client],
            search_from: e[o.BrowseQueryArg.search_from],
            folder_overview: void 0 !== e[o.BrowseQueryArg.folder_overview] || void 0,
            search_order_by: e[o.BrowseQueryArg.search_order_by],
            search_reverse_order: e[o.BrowseQueryArg.search_reverse_order],
            search_type: e[o.BrowseQueryArg.search_type],
            rewind_tip: e[o.BrowseQueryArg.rewind_tip]
        }
    }
}), define("modules/clean/react/files_view/types", ["require", "exports", "modules/clean/web_user_action_events"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.FilesViewActionSource = r.ActionSourceValue;
    (function(e) {
        e.ESC = "ESC", e.SUBMIT = "SUBMIT", e.BLUR = "BLUR"
    })(t.NameInputActionSource || (t.NameInputActionSource = {}));
    (function(e) {
        e.CREATE_FOLDER_INACTIVE = "CREATE_FOLDER_INACTIVE", e.PENDING_INPUT = "PENDING_INPUT", e.SAVING_INPUT = "SAVING_INPUT"
    })(t.NewFolderCreationState || (t.NewFolderCreationState = {}));
    (function(e) {
        e.PENDING_INPUT = "pending-input", e.SAVING_INPUT = "saving-input"
    })(t.RenameState || (t.RenameState = {}));
    (function(e) {
        e.LOADED = "LOADED", e.LOADING_FIRST_PAGE = "LOADING_FIRST_PAGE", e.LOADING_REMAINING_PAGES = "LOADING_REMAINING_PAGES", e.LOAD_ERROR = "LOAD_ERROR"
    })(t.LoadingState || (t.LoadingState = {}));
    (function(e) {
        e.FILENAME = "FILENAME", e.MODIFIED = "MODIFIED", e.CATEGORY = "CATEGORY", e.EXTENSION = "EXTENSION", e.SIZE = "SIZE", e.SHARED_WITH = "SHARED_WITH", e.SYNC_SETTING = "SYNC_SETTING", e.FILE_COUNTS = "FILE_COUNTS", e.RELEVANCE = "RELEVANCE", e.LOCKED_FILES = "LOCKED_FILES"
    })(t.SortField || (t.SortField = {}));
    (function(e) {
        e.FILENAME = "FILES_BY_NAME", e.MODIFIED = "FILES_BY_MODIFIED", e.CATEGORY = "FILES_BY_CATEGORY", e.EXTENSION = "FILES_BY_NAME", e.SIZE = "FILES_BY_SIZE", e.SHARED_WITH = "FILES_BY_NAME", e.SYNC_SETTING = "FILES_BY_SYNC_SETTING", e.FILE_COUNTS = "FILES_BY_FILE_COUNTS", e.RELEVANCE = "FILES_BY_RELEVANCE", e.LOCKED_FILES = "LOCKED_FILES"
    })(t.SortLabel || (t.SortLabel = {}));
    (function(e) {
        e.ASCENDING = "ASCENDING", e.DESCENDING = "DESCENDING"
    })(t.SortDirection || (t.SortDirection = {}));
    (function(e) {
        e.Grid = "GRID_VIEW", e.List = "LIST_VIEW", e.LargeGrid = "LARGE_GRID_VIEW"
    })(t.ViewType || (t.ViewType = {}));
    (function(e) {
        e.LOADING = "LOADING", e.COMPLETE = "COMPLETE", e.NO_ACCESS = "NO_ACCESS", e.ERROR = "ERROR"
    })(t.FetchFolderSizeState || (t.FetchFolderSizeState = {}));
    (function(e) {
        e.NONE = "NONE", e.ALL_FOLDERS = "ALL_FOLDERS", e.NONSELECTED_FOLDERS = "NONSELECTED_FOLDERS", e.NONSELECTED_NONSHARED_FOLDERS = "NONSELECTED_NONSHARED_FOLDERS", e.NONSELECTED_NONSHARED_NONTEAM_FOLDERS = "NONSELECTED_NONSHARED_NONTEAM_FOLDERS"
    })(t.DropTargetHighlightMode || (t.DropTargetHighlightMode = {}));
    (function(e) {
        e.CHECKBOX = "checkbox", e.CLICK = "click"
    })(t.SelectionMethod || (t.SelectionMethod = {}));
    (function(e) {
        e.OFF = "OFF", e.CONTROL = "CONTROL", e.ALL = "ALL", e.CLICK_TO_SELECT = "CLICK_TO_SELECT", e.HIGH_DENSITY = "HIGH_DENSITY"
    })(t.FilesViewRedesignVariants || (t.FilesViewRedesignVariants = {}))
}), define("modules/clean/react/no-jquery", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        if (e.closest) return e.closest(t);
        for (var r = e; r;) {
            var o = n(r);
            if (o && o.call(r, t)) return r;
            r = r.parentElement
        }
        return null
    }

    function n(e) {
        return e.matches || e.msMatchesSelector || e.webkitMatchesSelector
    }

    function o() {
        if (null === s) try {
            var e = new window.XMLHttpRequest;
            s = !!e && "withCredentials" in e
        } catch (e) {
            s = !1
        }
        return s
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.closestElement = r;
    var i = (function() {
        function e(e) {
            this.handlers = {}, this.element = e
        }
        return e.prototype.add = function(e, t, r) {
            this.handlers[e] = this.handlers[e] || {}, this.handlers[e][t] = r, this.element.addEventListener(t, r)
        }, e.prototype.remove = function(e, t, r) {
            this.handlers[e] && this.handlers[e][t] && (this.element.removeEventListener(t, r || this.handlers[e][t]), this.handlers[e][t] === r && delete this.handlers[e][t])
        }, e.prototype.removeAll = function(e) {
            if (this.handlers[e])
                for (var t in this.handlers[e]) this.handlers[e].hasOwnProperty(t) && (this.element.removeEventListener(t, this.handlers[e][t]), delete this.handlers[e][t])
        }, e
    })();
    t.ScopedEventHandlers = i;
    var s = null;
    t.corsSupport = o
}), define("modules/clean/react/prompt/button", ["require", "exports", "tslib", "external/classnames", "external/purify", "react", "modules/core/cookies", "modules/clean/prompt/api/rendering"], function(e, t, r, n, o, i, s, a) {
    "use strict";

    function _(e) {
        return e ? {
            __html: o.sanitize(e)
        } : void 0
    }

    function c(e) {
        function t() {
            if (e.campaign.content.confirmText) {
                var t = {
                    "button-primary": !0
                };
                return e.confirmButtonClassName && (t[e.confirmButtonClassName] = !0), i.default.createElement(u, {
                    className: n.default(t),
                    confirmInNewTab: e.campaign.content.confirmInNewTab,
                    confirmIsPost: e.confirmIsPost,
                    confirmUrl: e.confirmUrl,
                    onConfirm: e.onConfirm,
                    html: e.campaign.content.confirmText
                })
            }
            return null
        }

        function r() {
            var t = e.campaign,
                r = e.onRemindMeLater;
            return a.isHomeModalContent(t.content) && t.content.remindMeLaterText && r ? i.default.createElement(l, {
                className: "remind-me-later cancel-button button-tertiary",
                onDismiss: r,
                html: t.content.remindMeLaterText
            }) : null
        }

        function o() {
            var t = e.campaign,
                r = e.onDismiss,
                o = e.onRemindMeLater,
                s = {
                    "cancel-button": !0
                };
            return t.content.cancelText ? (a.isHomeModalContent(t.content) && t.content.remindMeLaterText && o ? s["cancel-link"] = !0 : s["button-tertiary"] = !0, e.dismissButtonClassName && (s[e.dismissButtonClassName] = !0), i.default.createElement(l, {
                className: n.default(s),
                onDismiss: r,
                html: t.content.cancelText || void 0
            })) : null
        }
        return i.default.createElement("div", {
            className: "upsell-buttons"
        }, t(), r(), o())
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), o = r.__importStar(o), i = r.__importDefault(i), t.sanitizeOptionalHTML = _;
    var u = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = n.default(this.props.className, {
                "confirm-button": !0,
                enabled: !0
            });
            if (this.props.confirmIsPost) {
                var t = s.Cookies.read("__Host-js_csrf");
                return i.default.createElement("form", {
                    className: "form-button-primary",
                    action: this.props.confirmUrl,
                    method: "POST",
                    target: this.getTarget(),
                    onSubmit: this.props.onConfirm
                }, i.default.createElement("input", {
                    type: "hidden",
                    name: "t",
                    value: t
                }), i.default.createElement("button", {
                    type: "submit",
                    className: e,
                    dangerouslySetInnerHTML: _(this.props.html)
                }, this.props.children))
            }
            return i.default.createElement("a", {
                href: this.props.confirmUrl,
                className: e,
                target: this.getTarget(),
                dangerouslySetInnerHTML: _(this.props.html),
                onClick: this.props.onConfirm
            }, this.props.children)
        }, t.prototype.getTarget = function() {
            return this.props.confirmInNewTab ? "_blank" : "_self"
        }, t
    })(i.default.Component);
    t.ConfirmButton = u;
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = n.default(this.props.className, {
                "dismiss-button": !0,
                enabled: !0
            });
            return i.default.createElement("a", {
                href: "#",
                className: e,
                dangerouslySetInnerHTML: _(this.props.html),
                onClick: this.props.onDismiss
            }, this.props.children)
        }, t
    })(i.default.Component);
    t.DismissButton = l, t.PromptButtons = c
}), define("modules/clean/react/prompt/campaign_state_manager", ["require", "exports", "tslib", "modules/core/uri", "modules/clean/react/prompt/version", "modules/clean/upsell/prompt_event_logger", "modules/clean/upsell/prompt_event_emitter"], function(e, t, r, n, o, i, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PROMPT_CONFIRM_ENDPOINT_URL = "/prompt/confirm_v2";
    var a = (function() {
        function e(e) {
            var n = this;
            this.buildConfirmEndpointURI = function(e) {
                if (e = e || n.getConfirmUrlFromContent(), !e || "#" === e) return "#";
                var r = n.eventLogger.getUpsellControllerURI(t.PROMPT_CONFIRM_ENDPOINT_URL),
                    o = n.component.props.campaign.content.confirmIsPost,
                    i = n.getRedirectURL(e);
                return i && r.updateQuery({
                    redirect_url: i
                }), o && r.updateQuery({
                    preserve_post: "1"
                }), r.toString()
            }, this.shouldConfirmUsingPost = function() {
                var e = n.getConfirmUrlFromContent();
                return !!(e && "#" !== e || n.component.props.campaign.content.confirmIsPost)
            }, this.onShow = function() {
                n.component.state.isShown || (n.component.setState(function(e) {
                    return r.__assign({}, e, {
                        isShown: !0
                    })
                }), s.promptBufferedEventEmitter.emit(s.Events.ON_PROMPT_SHOWN, n.component.props.campaign.campaignLocationId), n.eventLogger.triggerExternalEvent("db:prompt:show"), n.eventLogger.recordClientImpression())
            }, this.onConfirm = function(e) {
                n.isAckInProgress() || (n.component.setState(function(e) {
                    return r.__assign({}, e, {
                        isConfirmed: !0
                    })
                }), n.eventLogger.triggerExternalEvent("db:prompt:pre-confirm"), n.ensureConfirmIsRecorded(e))
            }, this.isHTMLAnchorElement = function(e) {
                return void 0 !== e.href
            }, this.isHTMLFormElement = function(e) {
                return void 0 !== e.action
            }, this.onDismiss = function(e, t) {
                n.isAckInProgress() || (n.component.setState(function(e) {
                    return r.__assign({}, e, {
                        isDismissed: !0
                    })
                }), e.preventDefault(), s.promptBufferedEventEmitter.emit(s.Events.ON_PROMPT_DISMISSED, n.component.props.campaign.campaignLocationId), n.eventLogger.triggerExternalEvent("db:prompt:pre-dismiss"), n.eventLogger.recordDismiss(t && t.remindMeLater))
            }, this.enhanceHTMLButtons = function(e, t) {
                var r = void 0 === t ? {} : t,
                    o = r.confirmButtonSelector,
                    i = void 0 === o ? ".confirm-button" : o,
                    s = r.dismissButtonSelector,
                    a = void 0 === s ? ".dismiss-button" : s,
                    _ = r.onConfirmOverride,
                    c = void 0 === _ ? void 0 : _,
                    u = r.onDismissOverride,
                    l = void 0 === u ? void 0 : u;
                if (e) {
                    for (var E = null, d = e.querySelectorAll(i), p = e.querySelectorAll(a), f = 0; f < d.length; f++) E = d[f], n.mayEnhanceButton(E) && (E.href = n.buildConfirmEndpointURI(E.getAttribute("href")), E.target = n.component.props.campaign.content.confirmInNewTab ? "_blank" : "_self", E.addEventListener("click", c || n.onConfirm));
                    for (var f = 0; f < p.length; f++) E = p[f], n.mayEnhanceButton(E) && E.addEventListener("click", l || n.onDismiss)
                }
            }, this.component = e, this.eventLogger = new i.PromptEventLogger(this.component.props)
        }
        return e.prototype.getConfirmUrlFromContent = function() {
            var e = this.component.props.campaign.content;
            return o.isTopNotificationContent(e) ? e.buttonUrl : e.confirmUrl
        }, e.prototype.getRedirectURL = function(e) {
            if (e) {
                if (this.component.props.campaign.addTkParams) {
                    var t = n.URI.parse(e),
                        r = this.component.props.campaign.versionId;
                    return null == r && (r = this.component.props.campaign.campaignId), t.updateQuery({
                        _tk: this.component.props.campaign.campaignLocationTkId,
                        _camp: r.toString()
                    }), t.toString()
                }
                return e
            }
        }, e.prototype.ensureConfirmIsRecorded = function(e) {
            if (!this.eventWillRecordConfirm(e)) {
                this.eventLogger.recordConfirm();
                var t = this.getEventHrefOrAction(e);
                t && "#" !== t || e.preventDefault()
            }
        }, e.prototype.eventWillRecordConfirm = function(e) {
            return (this.getEventHrefOrAction(e) || "").indexOf(t.PROMPT_CONFIRM_ENDPOINT_URL) > -1
        }, e.prototype.getEventHrefOrAction = function(e) {
            var t = null,
                r = e.currentTarget;
            return r && this.isHTMLAnchorElement(r) ? t = r.getAttribute("href") : r && this.isHTMLFormElement(r) && (t = r.getAttribute("action")), t
        }, e.prototype.mayEnhanceButton = function(e) {
            return !e.classList.contains("prompt-enhanced") && (e.classList.add("prompt-enhanced"), !0)
        }, e.prototype.isAckInProgress = function() {
            return this.component.state.isConfirmed || this.component.state.isDismissed
        }, e
    })();
    t.CampaignStateManager = a
}), define("modules/clean/react/prompt/ha", ["require", "exports", "tslib", "jquery", "external/classnames", "external/lodash", "react", "external/react-dom", "modules/clean/react/prompt/legacy_ha_wrapper", "modules/clean/react/css", "modules/clean/react/sprite", "modules/clean/upsell/prompt_event_emitter", "modules/clean/react/prompt/button", "modules/clean/react/prompt/image", "modules/clean/react/prompt/prompt_location", "modules/core/i18n"], function(e, t, r, n, o, i, s, a, _, c, u, l, E, d, p, f) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), o = r.__importDefault(o), i = r.__importStar(i), s = r.__importDefault(s), a = r.__importStar(a);
    var S;
    (function(e) {
        e[e.HIDE = 1] = "HIDE", e[e.NO_IMAGE = 2] = "NO_IMAGE", e[e.SHOW = 3] = "SHOW"
    })(S = t.ShowState || (t.ShowState = {})), t.UPDATE_STATE_PERIODIC_INTERVAL = 1e3;
    var h = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.renderImage = function() {
            var e = this.props.content;
            return e.imageUrl ? s.default.createElement(E.ConfirmButton, {
                className: "confirm-button--illustration",
                confirmInNewTab: e.confirmInNewTab,
                confirmIsPost: this.props.confirmIsPost,
                confirmUrl: this.props.confirmUrl,
                onConfirm: this.props.onConfirm
            }, s.default.createElement(d.Image, {
                src: e.imageUrl,
                srcHiRes: e.imageUrlHiRes,
                onLoad: this.props.onImageLoad
            })) : null
        }, t.prototype.renderText = function() {
            var e = this.props.content;
            return s.default.createElement("p", {
                className: "confirm-button--text-container"
            }, s.default.createElement(E.ConfirmButton, {
                className: "confirm-button--text",
                confirmInNewTab: e.confirmInNewTab,
                confirmIsPost: this.props.confirmIsPost,
                confirmUrl: this.props.confirmUrl,
                html: e.text,
                onConfirm: this.props.onConfirm
            }))
        }, t.prototype.renderConfirmButton = function() {
            var e = this.props.content;
            return e.confirmText ? s.default.createElement(E.ConfirmButton, {
                className: "button",
                confirmInNewTab: e.confirmInNewTab,
                confirmIsPost: this.props.confirmIsPost,
                confirmUrl: this.props.confirmUrl,
                html: e.confirmText,
                onConfirm: this.props.onConfirm
            }) : null
        }, t.prototype.renderDismissButton = function() {
            return s.default.createElement(E.DismissButton, {
                onDismiss: this.props.onDismiss,
                "aria-label": f._("Close")
            }, s.default.createElement(u.Sprite, {
                group: "web",
                name: "close_small",
                alt: f._("Close")
            }))
        }, t.prototype.render = function() {
            var e = this.props.isDismissed,
                t = o.default({
                    ha: !0,
                    "no-image": !e && this.props.showState === S.NO_IMAGE,
                    visible: !e && this.props.showState === S.SHOW,
                    hidden: !e && this.props.showState === S.HIDE,
                    invisible: this.props.isInvisible
                });
            return s.default.createElement("div", {
                className: t,
                role: "dialog"
            }, !this.props.hideImage && this.renderImage(), this.renderText(), this.renderConfirmButton(), this.renderDismissButton())
        }, t.displayName = "HARendererWithoutCSS", t
    })(s.default.Component);
    t.HARendererWithoutCSS = h, t.HARendererWithCSS = c.requireCssWithComponent(h, ["/static/css/upsell/prompt_pagelet-vfl_uoVlu.css"]);
    var m = (function(e) {
        function o(t) {
            var r = e.call(this, t, {
                cloneShowState: S.SHOW,
                isConfirmed: !1,
                isDismissed: !1,
                isShown: !1,
                showState: S.HIDE,
                topOffsetToFit: 0
            }) || this;
            return r.setHaRef = function(e) {
                r.ha = e
            }, r.setHaCloneRef = function(e) {
                r.haClone = e
            }, r.onPageUpdate = r.onPageUpdate.bind(r), r
        }
        return r.__extends(o, e), o.prototype.componentDidMount = function() {
            this.onUpdate(), n.default(window).resize(this.onPageUpdate), l.eventEmitter.addListener(l.Events.REACT_HA_DID_UPDATE, this.onPageUpdate), this.intervalID = setInterval(this.onPageUpdate, t.UPDATE_STATE_PERIODIC_INTERVAL)
        }, o.prototype.componentWillUnmount = function() {
            n.default(window).off("resize", this.onPageUpdate), l.eventEmitter.off(l.Events.REACT_HA_DID_UPDATE, this.onPageUpdate), clearInterval(this.intervalID)
        }, o.prototype.componentDidUpdate = function() {
            this.onUpdate()
        }, o.prototype.onPageUpdate = function() {
            this.setState(function(e) {
                return e.cloneShowState = S.SHOW, e
            })
        }, o.prototype.onUpdate = function() {
            var e = this;
            if (this.state.cloneShowState > S.HIDE && this.canFit()) this.state.showState !== this.state.cloneShowState && this.setState(function(e) {
                return e.showState = e.cloneShowState, e
            }, function() {
                e.state_manager.onShow()
            });
            else {
                var t = this.state.cloneShowState - 1;
                t > S.HIDE ? this.setState(function(e) {
                    return e.cloneShowState = t, e
                }) : this.state.showState !== S.HIDE && this.setState(function(e) {
                    return e.showState = S.HIDE, e
                })
            }
        }, o.prototype.render = function() {
            return s.default.createElement("div", null, s.default.createElement(t.HARendererWithCSS, {
                isInvisible: !1,
                content: this.props.campaign.content,
                confirmUrl: this.state_manager.buildConfirmEndpointURI(),
                confirmIsPost: this.state_manager.shouldConfirmUsingPost(),
                isDismissed: this.state.isDismissed,
                onConfirm: this.state_manager.onConfirm,
                onDismiss: this.state_manager.onDismiss,
                ref: this.setHaRef,
                showState: this.state.showState
            }), s.default.createElement(t.HARendererWithCSS, {
                isInvisible: !0,
                content: this.props.campaign.content,
                confirmUrl: this.state_manager.buildConfirmEndpointURI(),
                confirmIsPost: this.state_manager.shouldConfirmUsingPost(),
                isDismissed: this.state.isDismissed,
                onConfirm: this.state_manager.onConfirm,
                onDismiss: this.state_manager.onDismiss,
                onImageLoad: this.onPageUpdate,
                ref: this.setHaCloneRef,
                showState: this.state.cloneShowState
            }))
        }, o.prototype.canFit = function() {
            var e = this.getMenuHeight();
            if (null === e) return !1;
            var t = this.getHAHeight();
            return null !== t && e + t <= this.getWindowHeight()
        }, o.prototype.getHAHeight = function() {
            var e = n.default(a.findDOMNode(this.haClone));
            if (0 === e.length) return null;
            return e.outerHeight() + 75
        }, o.prototype.getMenuHeight = function() {
            var e = n.default(".maestro-secondary-sidebar, .appactions-menu").first();
            if (0 === e.length) return null;
            var t = e.children(),
                r = e.offset().top - n.default(document).scrollTop();
            return t.each(function(e, t) {
                r += n.default(t).outerHeight(!0)
            }), r
        }, o.prototype.getWindowHeight = function() {
            return n.default(window).height()
        }, o
    })(p.PromptLocation);
    t.HA = m;
    var O = (function(e) {
        function o(t) {
            var r = e.call(this, t, {
                cloneShowState: S.SHOW,
                isConfirmed: !1,
                isDismissed: !1,
                isShown: !1,
                showState: S.HIDE,
                topOffsetToFit: 0
            }) || this;
            return r.onWindowResize = i.debounce(function() {
                r.onPageUpdate()
            }, 250), r.setHaRef = function(e) {
                r.ha = e
            }, r.setHaCloneRef = function(e) {
                r.haClone = e
            }, r.onPageUpdate = r.onPageUpdate.bind(r), r
        }
        return r.__extends(o, e), o.prototype.componentDidMount = function() {
            this.onUpdate(), window.addEventListener("resize", this.onWindowResize), this.intervalID = setInterval(this.onPageUpdate, t.UPDATE_STATE_PERIODIC_INTERVAL)
        }, o.prototype.componentWillUnmount = function() {
            window.removeEventListener("resize", this.onWindowResize), clearInterval(this.intervalID)
        }, o.prototype.componentDidUpdate = function() {
            this.onUpdate()
        }, o.prototype.onPageUpdate = function() {
            this.setState({
                cloneShowState: S.SHOW
            })
        }, o.prototype.onUpdate = function() {
            var e, t = this;
            if (this.state.cloneShowState > S.HIDE && (e = this.getTopOffsetToFit()) > -1) this.state.showState === this.state.cloneShowState && this.state.topOffsetToFit === e || this.setState({
                showState: this.state.cloneShowState,
                topOffsetToFit: e
            }, function() {
                t.state_manager.onShow()
            });
            else {
                var r = this.state.cloneShowState - 1;
                r > S.HIDE ? this.setState({
                    cloneShowState: r
                }) : this.state.showState !== S.HIDE && this.setState({
                    showState: S.HIDE
                })
            }
        }, o.prototype.render = function() {
            return s.default.createElement("div", {
                className: "inline-ha-wrapper",
                style: {
                    top: this.state.topOffsetToFit
                }
            }, s.default.createElement(t.HARendererWithCSS, {
                isInvisible: !1,
                content: this.props.campaign.content,
                confirmUrl: this.state_manager.buildConfirmEndpointURI(),
                confirmIsPost: this.state_manager.shouldConfirmUsingPost(),
                isDismissed: this.state.isDismissed,
                onConfirm: this.state_manager.onConfirm,
                onDismiss: this.state_manager.onDismiss,
                ref: this.setHaRef,
                showState: this.state.showState,
                hideImage: this.props.withinLeftNav
            }), s.default.createElement(t.HARendererWithCSS, {
                isInvisible: !0,
                content: this.props.campaign.content,
                confirmUrl: this.state_manager.buildConfirmEndpointURI(),
                confirmIsPost: this.state_manager.shouldConfirmUsingPost(),
                isDismissed: this.state.isDismissed,
                onConfirm: this.state_manager.onConfirm,
                onDismiss: this.state_manager.onDismiss,
                onImageLoad: this.onPageUpdate,
                ref: this.setHaCloneRef,
                showState: this.state.cloneShowState,
                hideImage: this.props.withinLeftNav
            }))
        }, o.prototype.getTopOffsetToFit = function() {
            var e = this.getHAHeight();
            if (null === e) return -1;
            var t = this.getMenuHeight();
            if (null === t) return -1;
            if (this.props.withinLeftNav) {
                var r = n.default(".maestro-nav__panel").height() - 80;
                return r <= e + t ? -1 : r - e
            }
            return this.getWindowHeight() - t - e
        }, o.prototype.getHAHeight = function() {
            var e = n.default(a.findDOMNode(this.haClone));
            return 0 === e.length ? null : e.outerHeight(!0)
        }, o.prototype.getMenuHeight = function() {
            if (this.props.withinLeftNav) {
                var e = n.default(".maestro-nav__features, .maestro-nav__products").first();
                return 0 === e.length ? null : e.height()
            }
            var t = n.default(".maestro-secondary-sidebar, .appactions-menu").first();
            if (0 === t.length) return null;
            var r = t.children(":not(.inline-ha-wrapper)"),
                o = t.offset().top - n.default(document).scrollTop();
            return r.each(function(e, t) {
                "none" !== getComputedStyle(t).display && (o += n.default(t).outerHeight(!0))
            }), o
        }, o.prototype.getWindowHeight = function() {
            return n.default(window).height()
        }, o
    })(p.PromptLocation);
    t.InlineHA = O;
    var T = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            return this.props.campaign.delegateRendering ? (l.promptBufferedEventEmitter.emit(l.Events.ON_HA_LOADED, this.props), null) : s.default.createElement(m, r.__assign({}, this.props))
        }, t
    })(p.PromptLocation);
    t.DelegatingHARenderer = T, t.MaestroHA = function(e) {
        return e.haProps ? s.default.createElement(O, r.__assign({}, e.haProps)) : s.default.createElement(_.LegacyHAWrapper, null)
    }
}), define("modules/clean/react/prompt/image", ["require", "exports", "tslib", "react"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var o = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.prototype.render = function() {
            var e = this.props.srcHiRes ? this.props.srcHiRes + " 2x" : "";
            return n.default.createElement("img", {
                src: this.props.src,
                srcSet: e,
                alt: this.props.alt,
                onLoad: this.props.onLoad
            })
        }, t
    })(n.default.Component);
    t.Image = o
}), define("modules/clean/react/prompt/legacy_ha_wrapper", ["require", "exports", "tslib", "react", "modules/clean/upsell/prompt_event_emitter"], function(e, t, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var i = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return r.__extends(t, e), t.emitUpdateEvent = function() {
            o.eventEmitter.emit(o.Events.REACT_HA_DID_UPDATE)
        }, t.prototype.componentDidMount = function() {
            t.emitUpdateEvent()
        }, t.prototype.componentDidUpdate = function() {
            t.emitUpdateEvent()
        }, t.prototype.render = function() {
            return n.default.createElement("div", null)
        }, t.displayName = "LegacyHAWrapper", t
    })(n.default.Component);
    t.LegacyHAWrapper = i
}), define("modules/clean/react/prompt/prompt_location", ["require", "exports", "tslib", "react", "modules/clean/react/prompt/campaign_state_manager"], function(e, t, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var i = (function(e) {
        function t(t, r) {
            var n = e.call(this, t) || this;
            return n.state = r, n.state_manager = new o.CampaignStateManager(n), n
        }
        return r.__extends(t, e), t
    })(n.default.Component);
    t.PromptLocation = i;
    var s = (function(e) {
        function t(t) {
            return e.call(this, t, {
                isConfirmed: !1,
                isDismissed: !1,
                isShown: !1
            }) || this
        }
        return r.__extends(t, e), t
    })(i);
    t.PromptLocationWithDefaultState = s
}), define("modules/clean/react/prompt/version", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        var t = e;
        return void 0 !== t.buttonText && void 0 !== t.buttonUrl
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isTopNotificationContent = r
}), define("modules/clean/react/retrieval_success_banner/constants", ["require", "exports", "modules/core/i18n"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BROWSE_SUCCESS_QUESTION = r._("Was Dropbox helpful today?"), t.FEEDBACK_PLACEHOLDER = r._("Share the good, the bad, and the unexpected"), t.SEARCH_SUCCESS_QUESTION = r._("Find what you were looking for?"), t.SEARCH_SUCCESS_OPTION_YES = r._("Yes"), t.SEARCH_SUCCESS_OPTION_NO = r._("No"), t.SEARCH_SUCCESS_OPTION_KIND_OF = r._("Kind of"), t.SEARCH_SUCCESS_THANKS_TEXT = r._("Thanks for the feedback."), t.SEARCH_SUCCESS_MORE_FEEDBACK_LINK_TEXT = r._("Tell us more"), t.SUBMIT_BUTTON_TEXT = r._("Submit"), t.CANCEL_BUTTON_TEXT = r._("Cancel"), t.NEXT_BUTTON_TEXT = r._("Next"), t.MODAL_TITLE_TEXT = r._("Tell us more about your search experience"), t.SEARCH_SUCCESS_OPT_OUT_KEY = "search-success-opt-out", t.SEARCH_SUCCESS_SHOW_BANNER_KEY = "search-success-show-banner-key", t.SEARCH_SUCCESS_SHOW_BANNER_FROM_HOME_KEY = "search-success-show-banner-from-home-key", t.SEARCH_RESULT_CLICK_TIMESTAMP_KEY = "search-result-click-timestamp-key", t.SEARCH_RESULT_PATH_KEY = "search-result-location-key", t.SEARCH_RESULT_CLICK_KEY = "search-result-click-key", t.CLICKABLE_PATH_KEY = "clickable-path-key", t.CLICKABLE_FILE_PATH_CLICK_TIMESTAMP_KEY = "clickable-file-path-click-timestamp-key", t.SEARCH_BAR_ABANDONED_EVENT = "dbxSearchBarAbandonedEvent", t.SEARCH_SUCCESSS_BANNER_HEIGHT_IN_SEARCH_RESULTS = 75, t.BROWSE_SUCCESS_COUNT_DOWN_COMPLETE = "browse-success-count-down-complete", t.BROWSE_SUCCESS_COUNT_DOWN_ID = "browse-success-count-down-id", t.BROWSE_SUCCESS_SHOW_BANNER_KEY = "browse-success-show-banner-key", t.BROWSE_SUCCESS_BANNER_KEY_START_TIMER = "browse-success-banner_key_start_timer", t.BROWSE_SUCCESS_BANNER_KEY_END_TIMER = "browse-success-banner_key_end_timer", t.BROWSE_SUCCESS_BANNER_TRIGGER_ACTION = "browse_success_banner_trigger_action", t.BROWSE_SUCCESS_BROWSE_SESSION_DEPTH = "browse_success_browse_session_depth", t.BROWSE_SUCCESS_BANNER_V1_TIMER = 18e4, t.BROWSE_SUCCESS_BANNER_V2_TIMER = 18e5, t.BROWSE_SUCCESS_BANNER_V3_TIMER = 1e4, t.QUESTION_MODAL_TITLE_TEXT = r._("What did you use Dropbox for today? Check all that apply."), t.OTHER_INPUT_PLACEHOLDER = r._("Please explain"), t.BROWSE_SUCCESS_FEEDBACK_MODAL_TITLE_TEXT = r._("How can Dropbox be more helpful to you?");
    (function(e) {
        e.YES = "yes", e.NO = "no", e.KIND_OF = "kindof"
    })(t.RetrievalSuccessOption || (t.RetrievalSuccessOption = {}));
    (function(e) {
        e.IN_EMBEDDED_APP = "in-embedded-app", e.PREVIEW = "preview", e.SEARCH_RESULTS = "search_results", e.IN_USPS = "in-universal-single-page-search"
    })(t.SearchSuccessDisplayContext || (t.SearchSuccessDisplayContext = {}));
    (function(e) {
        e.NONE = "NONE", e.BSB = "BSB", e.SSB = "SSB"
    })(t.BannerVariant || (t.BannerVariant = {}))
}), define("modules/clean/react/retrieval_success_banner/util", ["require", "exports", "tslib", "modules/clean/filepath", "modules/clean/history", "modules/clean/storage", "modules/clean/react/retrieval_success_banner/constants", "modules/clean/search/types", "modules/clean/web_timing_logger"], function(e, t, r, n, o, i, s, a, _) {
    "use strict";

    function c() {
        return te && re ? Promise.resolve({
            store: te,
            actionCreators: re
        }) : _.waitForTTI().then(function() {
            return Promise.all([new Promise(function(t, r) {
                e(["modules/clean/react/retrieval_success_banner/data/store"], t, r)
            }).then(r.__importStar), new Promise(function(t, r) {
                e(["modules/clean/react/retrieval_success_banner/data/action_creators"], t, r)
            }).then(r.__importStar)]).then(function(e) {
                var t = e[0],
                    r = e[1];
                return te = t.getStoreForSuccessBanner(), re = r, {
                    store: te,
                    actionCreators: re
                }
            })
        })
    }

    function u() {
        i.LocalStorage.delete(s.SEARCH_RESULT_CLICK_KEY)
    }

    function l() {
        return !!i.LocalStorage.get(s.SEARCH_SUCCESS_SHOW_BANNER_KEY)
    }

    function E() {
        var e = !!i.LocalStorage.get(s.SEARCH_SUCCESS_OPT_OUT_KEY),
            t = !!i.LocalStorage.get(s.BROWSE_SUCCESS_COUNT_DOWN_COMPLETE),
            r = !!i.LocalStorage.get(s.SEARCH_SUCCESS_SHOW_BANNER_KEY),
            n = !!i.LocalStorage.get(s.BROWSE_SUCCESS_SHOW_BANNER_KEY);
        return !e && (t || n) && !r
    }

    function d() {
        return !!i.LocalStorage.get(s.SEARCH_SUCCESS_SHOW_BANNER_KEY) && !i.LocalStorage.get(s.SEARCH_SUCCESS_OPT_OUT_KEY)
    }

    function p(e) {
        void 0 === e && (e = !0), D() || (i.LocalStorage.set(s.SEARCH_SUCCESS_SHOW_BANNER_KEY, e), c().then(function(t) {
            var r = t.store,
                n = t.actionCreators.updateSearchSuccessBannerVisibility;
            r.dispatch(n(e))
        }))
    }

    function f() {
        i.LocalStorage.set(s.SEARCH_RESULT_CLICK_TIMESTAMP_KEY, Date.now())
    }

    function S() {
        i.LocalStorage.set(s.CLICKABLE_FILE_PATH_CLICK_TIMESTAMP_KEY, Date.now())
    }

    function h() {
        return i.LocalStorage.get(s.SEARCH_RESULT_CLICK_TIMESTAMP_KEY)
    }

    function m() {
        return i.LocalStorage.get(s.CLICKABLE_FILE_PATH_CLICK_TIMESTAMP_KEY)
    }

    function O(e) {
        i.LocalStorage.set(s.SEARCH_RESULT_PATH_KEY, e)
    }

    function T(e) {
        i.LocalStorage.set(s.CLICKABLE_PATH_KEY, e)
    }

    function R(e) {
        D() || (f(), O(e))
    }

    function A(e) {
        D() || (S(), T(e))
    }

    function C() {
        return i.LocalStorage.get(s.SEARCH_RESULT_PATH_KEY)
    }

    function I() {
        return i.LocalStorage.get(s.CLICKABLE_PATH_KEY)
    }

    function g() {
        D() || i.LocalStorage.set(s.SEARCH_RESULT_CLICK_KEY, !0)
    }

    function L() {
        return !!i.LocalStorage.get(s.SEARCH_RESULT_CLICK_KEY)
    }

    function D() {
        return !!i.LocalStorage.get(s.SEARCH_SUCCESS_OPT_OUT_KEY)
    }

    function N() {
        i.LocalStorage.set(s.SEARCH_SUCCESS_OPT_OUT_KEY, !0)
    }

    function v() {
        i.LocalStorage.set(s.SEARCH_SUCCESS_OPT_OUT_KEY, !0)
    }

    function y() {
        i.LocalStorage.set(s.SEARCH_SUCCESS_SHOW_BANNER_FROM_HOME_KEY, !0)
    }

    function F() {
        return !!i.LocalStorage.get(s.SEARCH_SUCCESS_SHOW_BANNER_FROM_HOME_KEY)
    }

    function P() {
        i.LocalStorage.delete(s.SEARCH_SUCCESS_SHOW_BANNER_FROM_HOME_KEY)
    }

    function w(e, t, r) {
        return n.parent_dir(e) === t && !r
    }

    function b(e) {
        c().then(function(t) {
            var r = t.store,
                n = t.actionCreators.updateSearchBarAbandoned;
            r.dispatch(n(e))
        })
    }

    function B(e) {
        c().then(function(t) {
            var r = t.store,
                n = t.actionCreators.updateSearchResultBannerDismissed;
            r.dispatch(n(e))
        })
    }

    function H(e) {
        D() || c().then(function(t) {
            var r = t.store,
                n = t.actionCreators.updateSearchResultActionClicked;
            r.dispatch(n(e))
        })
    }

    function M() {
        o.default.deconstruct_url(document.referrer).qargs.search_session_id && !L() && p()
    }

    function U(e) {
        window.removeEventListener(s.SEARCH_BAR_ABANDONED_EVENT, e)
    }

    function x() {
        return !!o.default.deconstruct_url().qargs.hasOwnProperty("preview")
    }

    function W(e) {
        void 0 === e && (e = a.BrowseSuccessBannerVariants.V1), k(), G();
        var t = s.BROWSE_SUCCESS_BANNER_V1_TIMER;
        e === a.BrowseSuccessBannerVariants.V3 && (t = s.BROWSE_SUCCESS_BANNER_V3_TIMER);
        var r = setTimeout(function() {
            i.LocalStorage.set(s.BROWSE_SUCCESS_COUNT_DOWN_COMPLETE, !0), c().then(function(e) {
                var t = e.store,
                    r = e.actionCreators.updateBrowseSuccessBannerCounterCompleteKey;
                t.dispatch(r(!0))
            })
        }, t);
        i.LocalStorage.set(s.BROWSE_SUCCESS_COUNT_DOWN_ID, r)
    }

    function G() {
        var e = i.LocalStorage.get(s.BROWSE_SUCCESS_COUNT_DOWN_ID);
        e && (clearTimeout(e), i.LocalStorage.delete(s.BROWSE_SUCCESS_COUNT_DOWN_ID))
    }

    function k() {
        i.LocalStorage.get(s.BROWSE_SUCCESS_COUNT_DOWN_COMPLETE) && (i.LocalStorage.delete(s.BROWSE_SUCCESS_COUNT_DOWN_COMPLETE), c().then(function(e) {
            var t = e.store,
                r = e.actionCreators.updateBrowseSuccessBannerCounterCompleteKey;
            t.dispatch(r(!1))
        }))
    }

    function V(e, t) {
        e || t ? c().then(function(e) {
            var t = e.store,
                r = e.actionCreators.updateRetrievalSuccessBannerVisibility;
            t.dispatch(r(!0))
        }) : c().then(function(e) {
            var t = e.store,
                r = e.actionCreators.updateRetrievalSuccessBannerVisibility;
            t.dispatch(r(!1))
        })
    }

    function Y(e) {
        var t = i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_KEY_START_TIMER),
            r = Date.now();
        !D() && r - t <= s.BROWSE_SUCCESS_BANNER_V2_TIMER && (i.LocalStorage.set(s.BROWSE_SUCCESS_SHOW_BANNER_KEY, !0), c().then(function(e) {
            var t = e.store,
                r = e.actionCreators.updateBrowseSuccessBannerVisibility;
            t.dispatch(r(!0))
        }), e && j(e))
    }

    function K() {
        if (!D())
            if (i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_KEY_START_TIMER)) {
                var e = Date.now(),
                    t = i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_KEY_START_TIMER);
                if (e - t > s.BROWSE_SUCCESS_BANNER_V2_TIMER) i.LocalStorage.set(s.BROWSE_SUCCESS_BANNER_KEY_START_TIMER, Date.now());
                else if (!i.LocalStorage.get(s.BROWSE_SUCCESS_SHOW_BANNER_KEY)) {
                    i.LocalStorage.set(s.BROWSE_SUCCESS_BANNER_KEY_END_TIMER, Date.now()), i.LocalStorage.set(s.BROWSE_SUCCESS_SHOW_BANNER_KEY, !0), c().then(function(e) {
                        var t = e.store,
                            r = e.actionCreators.updateBrowseSuccessBannerVisibility;
                        t.dispatch(r(!0))
                    });
                    var r = q();
                    i.LocalStorage.set(s.BROWSE_SUCCESS_BROWSE_SESSION_DEPTH, r)
                }
            } else i.LocalStorage.set(s.BROWSE_SUCCESS_BANNER_KEY_START_TIMER, Date.now())
    }

    function j(e) {
        D() || i.LocalStorage.set(s.BROWSE_SUCCESS_BANNER_TRIGGER_ACTION, e)
    }

    function q() {
        var e = o.default.deconstruct_url(document.referrer).path.split("/").filter(function(e) {
            return !!e
        }).length;
        return e > 3 ? e - 3 : 0
    }

    function Q() {
        return !!i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_TRIGGER_ACTION)
    }

    function X() {
        return i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_TRIGGER_ACTION)
    }

    function z() {
        return !!i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_KEY_END_TIMER)
    }

    function Z() {
        return (i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_KEY_END_TIMER) - i.LocalStorage.get(s.BROWSE_SUCCESS_BANNER_KEY_START_TIMER)).toString()
    }

    function J() {
        var e = i.LocalStorage.get(s.BROWSE_SUCCESS_BROWSE_SESSION_DEPTH);
        return e ? e : 0
    }

    function $() {
        i.LocalStorage.delete(s.BROWSE_SUCCESS_BANNER_KEY_START_TIMER), i.LocalStorage.delete(s.BROWSE_SUCCESS_BANNER_KEY_END_TIMER), i.LocalStorage.delete(s.BROWSE_SUCCESS_BANNER_TRIGGER_ACTION), i.LocalStorage.delete(s.BROWSE_SUCCESS_BROWSE_SESSION_DEPTH)
    }

    function ee() {
        i.LocalStorage.delete(s.SEARCH_SUCCESS_SHOW_BANNER_KEY)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), o = r.__importDefault(o);
    var te, re;
    t.resetSearchResultClickKey = u, t.shouldShowSearchSuccessBanner = l, t.shouldShowBrowseSuccessBanner = E, t.getSearchSuccessBannerVisibility = d, t.setSearchSuccessBannerVisible = p, t.setSearchResultClickTimestamp = f, t.getSearchResultClickTimestamp = h, t.getClickableFilePathClickTimestamp = m, t.setSearchResultPath = O, t.setFolderSearchResultData = R, t.setClickablePathData = A, t.getSearchResultPath = C, t.getClickablePath = I, t.setClickedOnSearchResultsPageItem = g, t.getClickedOnSearchResultsPageItem = L, t.userIsOptedOutOfRetrievalSuccessBanner = D, t.optOutOfSearchSuccessBanner = N, t.optOutOfBrowseSuccessBanner = v, t.setSearchSuccessBannerVisibleFromHome = y, t.getSearchSuccessBannerVisibleFromHome = F, t.resetSearchSuccessBannerVisibleFromHome = P, t.parentPathOfFileEqualsSearchResultPath = w, t.doSearchBarInteractionBroadcast = b, t.doSearchResultBannerDismissBroadcast = B, t.doSearchResultActionClickBroadcast = H, t.setupSearchSuccessBannerForHome = M, t.tearDownSearchSuccessBannerForHome = U, t.isFilePreview = x, t.startBrowseSuccessBannerCounter = W, t.clearBrowseSuccessBannerCounter = G, t.clearBrowseSuccessBannerKey = k, t.updateRSBVisibility = V, t.setBrowseSuccessBannerVisible = Y, t.setBrowseSuccessBannerTimer = K, t.setBrowseSuccessTriggerAction = j, t.getDepthOfAbandonedBrowseSession = q, t.hasValidTriggerAction = Q, t.getBrowseSuccessTriggerAction = X, t.isAbandonFlow = z, t.getDwellTime = Z, t.getDepthOnLocalStorage = J, t.clearBSBExtraData = $, t.deleteSearchSuccessBannerSettings = ee
}), define("modules/clean/search/constants", ["require", "exports", "modules/clean/search/types"], function(e, t, r) {
    "use strict";
    var n, o;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MaxResults = {
        MAX_SEARCH_SUGGESTIONS: 8,
        MAX_SEARCH_RESULTS: 30
    }, t.FOCUS_SEARCH_BAR_ACTION = "search__FOCUS_SEARCH_BAR", t.BLUR_SEARCH_BAR_ACTION = "search__BLUR_SEARCH_BAR", t.SET_SEARCH_QUERY_ACTION = "search__SET_SEARCH_QUERY", t.SET_SEARCH_SUGGESTIONS_ACTION = "search__SET_SEARCH_SUGGESTIONS", t.SET_SLIM_SEARCH_SUGGESTIONS_ACTION = "search__SET_SLIM_SEARCH_SUGGESTIONS", t.SET_HIGHLIGHTED_ROW_ACTION = "search__SET_HIGHLIGHTED_ROW", t.HIGHLIGHT_PREVIOUS_ROW_ACTION = "search__HIGHLIGHT_PREVIOUS_ROW", t.HIGHLIGHT_NEXT_ROW_ACTION = "search__HIGHLIGHT_NEXT_ROW", t.CLEAR_SEARCH_BAR_ACTION = "search__CLEAR_SEARCH_BAR", t.SEARCH_SUCCESSFUL_ACTION = "search__SEARCH_SUCCESSFUL", t.CLEAR_ALL_HISTORY_ACTION = "search__CLEAR_ALL_HISTORY", t.START_SEARCH_ACTION = "search__START_SEARCH", t.SET_SEARCH_RESULTS_ACTION = "search__SET_SEARCH_RESULTS", t.CONTINUE_SEARCH_ACTION = "search__CONTINUE_SEARCH", t.APPEND_SEARCH_RESULTS_ACTION = "search__APPEND_SEARCH_RESULTS", t.SET_FULL_SEARCH_RESULTS_ACTION = "search__SET_FULL_SEARCH_RESULTS_ACTION", t.CLEAR_SEARCH_ACTION = "search__CLEAR_SEARCH", t.SET_SEARCH_SELECTION_ACTION = "search__SET_SEARCH_SELECTION", t.CHANGE_FILES_ACTION = "search__CHANGE_SEARCH_FILES", t.SET_SCOPE_CHIP_ACTION = "search__SET_SCOPE_CHIP_ACTION", t.SET_FILE_TYPE_FILTER_ACTION = "search__SET_FILE_TYPE_FILTER_ACTION", t.SELECT_FIRST_FILE_ACTION = "search__SET_FIRST_FILE_ACTION", t.SET_FOLDER_SIZE_ACTION = "search__SET_FOLDER_SIZE_ACTION", t.SORT_SEARCH_RESULTS_ACTION = "search__SORT_SEARCH_RESULTS_ACTION", t.SET_IMAGE_SEARCH_SUGGESTION_ACTION = "search__SET_IMAGE_SEARCH_SUGGESTION_ACTION", t.ADMIN_CONSOLE_SEARCH_ENDPOINT = "/search/admin_console_search", t.SEARCH_FRONTEND_SERVICE_ENDPOINT = "/search/full_search_result", t.FILE_INFO_ENDPOINT = "/browse_file_info", t.DIRECT_BLOCKSERVER_LINK = "direct_blockserver_link", t.HREF = "href";
    (function(e) {
        e.ZERO_QUERY = "ZERO_QUERY", e.LOADED = "LOADED", e.LOADING_FIRST_PAGE = "LOADING_FIRST_PAGE", e.LOADING_ADDITIONAL_PAGE = "LOADING_ADDITIONAL_PAGE", e.LOAD_ERROR = "LOAD_ERROR"
    })(t.SearchLoadingState || (t.SearchLoadingState = {}));
    (function(e) {
        e.ALL = "all", e.IMAGE = "image"
    })(t.SearchType || (t.SearchType = {}));
    (function(e) {
        e.ASSISTANT = "assistant", e.COLLAB_BROWSE = "collab_browse", e.WEB = "web"
    })(t.SearchOriginPathway || (t.SearchOriginPathway = {})), t.SEARCH_RECENT_HISTORY_CAPACITY = 5, t.SEARCH_RECENT_HISTORY_STORAGE_KEY = "search_recent_history", t.FILE_CATEGORIES_UNCHECKED = (n = {}, n[r.FileCategory.IMAGE] = "unchecked", n[r.FileCategory.DOCUMENT] = "unchecked", n[r.FileCategory.PDF] = "unchecked", n[r.FileCategory.SPREADSHEET] = "unchecked", n[r.FileCategory.PRESENTATION] = "unchecked", n[r.FileCategory.AUDIO] = "unchecked", n[r.FileCategory.VIDEO] = "unchecked", n[r.FileCategory.FOLDER] = "unchecked", n[r.FileCategory.PAPER] = "unchecked", n[r.FileCategory.OTHER] = "unchecked", n), t.NUMBER_FILE_TYPE_CHECKBOXES_ALWAYS_SHOWN = 4, t.FILE_CATEGORIES_CHECKED = (o = {}, o[r.FileCategory.IMAGE] = "checked", o[r.FileCategory.DOCUMENT] = "checked", o[r.FileCategory.PDF] = "checked", o[r.FileCategory.SPREADSHEET] = "checked", o[r.FileCategory.PRESENTATION] = "checked", o[r.FileCategory.AUDIO] = "checked", o[r.FileCategory.VIDEO] = "checked", o[r.FileCategory.FOLDER] = "checked", o[r.FileCategory.PAPER] = "checked", o[r.FileCategory.OTHER] = "checked", o), t.SEARCH_RECENT_FILES_CAPACITY = 5, t.GET_FILE_METADATA_ENDPOINT = "/home_feed/get_file_metadata", t.ENCODED_FILE_OBJ_ID = "ENCODED_FILE_OBJ_ID", t.FILE_NAME_FONT_SIZE = 14, t.FILE_LOCATION_FONT_SIZE = 12, t.FILE_NAME_CONST_CELL_BUFFER_EM = 2, t.FILE_LOCATION_CONST_CELL_BUFFER_EM = 4, t.FILE_NAME_TOOLTIP_MAX_LINE_LENGTH = 65, t.PAPER_BASE_URL = "https://paper.dropbox.com", t.PAPER_DOC_BASE_URL = t.PAPER_BASE_URL + "/doc/", t.PAPER_FOLDER_BASE_URL = t.PAPER_BASE_URL + "/folder/show/", t.TIME_TO_INVALIDATE_QUERY_SUGGESTIONS_CACHE = 6e4, t.SEARCH_CONTACT_SUGGESTION_CAPACITY = 3
}), define("modules/clean/search/models", ["require", "exports", "tslib", "external/deep-freeze", "modules/clean/immutability_helper", "modules/clean/react/browse/models"], function(e, t, r, n, o, i) {
    "use strict";

    function s(e) {
        return new i.BrowseContext({
            isInFolderMode: e.inside_dir,
            inactiveNSIDByFQPath: e.old_path_to_ns_id,
            blockHash: e.block_hash
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var a = (function() {
        function e(e) {
            this.fq_path = e.fq_path, this.is_unmounted = e.is_unmounted, this.icon = e.icon, this.filename_highlights = e.filename_highlights, this.highlight_spans = e.highlight_spans, this.ns_id = e.ns_id, this.sjid = e.sjid, this.is_dir = e.is_dir, this.is_symlink = e.is_symlink, this.type = e.type, this.ns_path = e.ns_path, this.match_type = e.match_type, this._mount_access_perms = e.mount_access_perms, this.thumbnail_url_tmpl = e.thumbnail_url_tmpl, this.hover_preview_url = e.hover_preview_url, this.request_id = e.request_id, this.sort_rank = e.sort_rank, n.default(this)
        }
        return e.fromServerObject = function(t) {
            return new e(t)
        }, e
    })();
    t.SlimFileSearchResult = a, t.extractBrowseContext = s;
    var _ = (function() {
        function e(e) {
            var t = e.entity;
            this.file_id = t.id, this.fq_path = t.fq_path, this.is_dir = t.is_dir, this.last_viewed_date = e.when_milli
        }
        return e.fromServerObject = function(t) {
            return new e(t)
        }, e.prototype.merge = function(e) {
            return o.merge(this, e)
        }, e
    })();
    t.RecentFile = _;
    var c = (function() {
        function e(e) {
            var t = e.entity;
            this.pad_id = t.id, this.title = t.name, this.last_viewed_date = e.when_milli
        }
        return e.fromServerObject = function(t) {
            return new e(t)
        }, e.prototype.merge = function(e) {
            return o.merge(this, e)
        }, e
    })();
    t.RecentPaper = c;
    var u = (function() {
        function e(e) {
            var t = e.entity;
            this.folder_id = t.id, this.name = t.name, this.last_viewed_date = e.when_milli
        }
        return e.fromServerObject = function(t) {
            return new e(t)
        }, e.prototype.merge = function(e) {
            return o.merge(this, e)
        }, e
    })();
    t.RecentPaperFolder = u
}), define("modules/clean/search/search_bar/chips", ["require", "exports", "tslib", "modules/clean/filepath"], function(e, t, r, n) {
    "use strict";

    function o(e) {
        return n.paths_are_equal(e, "/")
    }

    function i(e) {
        return !!e && !o(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.isScopeChipRoot = o, t.isValidPathForChip = i
}), define("modules/clean/search/search_bar/data/reducer", ["require", "exports", "tslib", "modules/clean/react/browse/data/types", "modules/clean/search/constants", "modules/clean/search/search_bar/chips", "modules/clean/search/search_bar/data/types", "modules/clean/search/search_bar/experiments", "modules/clean/search/store_helpers"], function(e, t, r, n, o, i, s, a, _) {
    "use strict";

    function c(e, r) {
        switch (void 0 === e && (e = t.defaultSearchBarState), r.type) {
            case s.ActionTypes.FOCUS:
                return u(e);
            case s.ActionTypes.BLUR:
                return l(e);
            case s.ActionTypes.UPDATE_HISTORY:
                return E(e, r.payload);
            case s.ActionTypes.SET_QUERY:
                return d(e, r.payload);
            case s.ActionTypes.SET_SEARCH_RESULTS:
                return p(e, r.payload);
            case s.ActionTypes.SET_SLIM_SEARCH_RESULTS:
                return f(e, r.payload);
            case s.ActionTypes.SET_HIGHLIGHTED_ROW:
                return S(e, r.payload);
            case s.ActionTypes.HIGHLIGHT_PREVIOUS_ROW:
                return m(e);
            case s.ActionTypes.HIGHLIGHT_NEXT_ROW:
                return h(e);
            case s.ActionTypes.SET_BROWSE_SCOPE:
                return O(e, r.payload);
            case s.ActionTypes.SET_SCOPE_CHIP:
                return T(e, r.payload);
            case s.ActionTypes.SET_DELETED_CHIP:
                return R(e, r.payload);
            case s.ActionTypes.SET_DELETED_CHIP_ENABLED:
                return A(e, r.payload);
            case s.ActionTypes.CLEAR:
                return C(e);
            case s.ActionTypes.SET_EXPERIMENTS:
                return I(e, r.payload);
            case s.ActionTypes.SET_FILE_CATEGORIES:
                return g(e, r.payload);
            case s.ActionTypes.INVALIDATE_RESULTS:
                return L(e);
            case n.ActionTypes.SET_PATH:
                return D(e, r.payload);
            default:
                return e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), _ = r.__importStar(_), t.defaultSearchBarState = {
        isSearchBarFocused: !1,
        searchHistory: [],
        query: "",
        searchSessionId: _.generateRandomId(),
        searchPath: "",
        isSearchBarLoading: !1,
        searchResults: [],
        hasMoreResults: !1,
        slimSearchResults: [],
        highlightedSearchRow: 0,
        browseScope: "/",
        canScope: !1,
        scopeChip: "/",
        deletedChip: !1,
        deletedChipEnabled: !1,
        experiments: {},
        fileCategories: r.__assign({}, o.FILE_CATEGORIES_UNCHECKED),
        resultsInvalid: !0
    };
    var u = function(e) {
            return r.__assign({}, e, {
                highlightedSearchRow: 0,
                isSearchBarFocused: !0
            })
        },
        l = function(e) {
            return r.__assign({}, e, {
                highlightedSearchRow: 0,
                isSearchBarFocused: !1,
                fileCategories: r.__assign({}, o.FILE_CATEGORIES_UNCHECKED)
            })
        },
        E = function(e, t) {
            var n = t.searchHistory;
            return r.__assign({}, e, {
                searchHistory: n
            })
        },
        d = function(e, t) {
            var n = t.query,
                o = t.searchPath,
                i = t.searchSessionId,
                s = t.keepHighlightedRow,
                a = e.searchSessionId;
            i ? a = i : _.shouldStartNewSearchSession(e.query, n) && (a = _.generateRandomId());
            var c = s ? e.highlightedSearchRow : 0;
            return r.__assign({}, e, {
                query: n,
                searchPath: o,
                searchSessionId: a,
                searchResults: [],
                hasMoreResults: !1,
                isSearchBarLoading: !_.isBlank(n),
                slimSearchResults: [],
                highlightedSearchRow: c
            })
        },
        p = function(e, t) {
            var n = t.searchResults;
            return r.__assign({}, e, {
                searchResults: n.results,
                hasMoreResults: n.hasMore,
                isSearchBarLoading: !1,
                resultsInvalid: !1
            })
        },
        f = function(e, t) {
            var n = t.slimSearchResults;
            return r.__assign({}, e, {
                slimSearchResults: n.results,
                hasMoreResults: n.hasMore,
                isSearchBarLoading: !1,
                resultsInvalid: !1
            })
        },
        S = function(e, t) {
            var n = t.highlightedSearchRow;
            return r.__assign({}, e, {
                highlightedSearchRow: n
            })
        },
        h = function(e) {
            var t = !_.isBlank(e.query),
                n = Math.min(o.MaxResults.MAX_SEARCH_SUGGESTIONS, e.slimSearchResults.length || e.searchResults.length),
                i = n || !t && e.searchHistory.length || 0,
                s = 0;
            s += t ? 1 : 0, s += e.canScope ? 1 : 0;
            var a = Math.min(i + s - 1, e.highlightedSearchRow + 1);
            return r.__assign({}, e, {
                highlightedSearchRow: a
            })
        },
        m = function(e) {
            var t = Math.max(0, e.highlightedSearchRow - 1);
            return r.__assign({}, e, {
                highlightedSearchRow: t
            })
        },
        O = function(e, t) {
            var n = t.browseScope,
                o = e.scopeChip,
                s = i.isValidPathForChip(n);
            return r.__assign({}, e, {
                browseScope: n,
                canScope: s,
                scopeChip: s ? o : "/"
            })
        },
        T = function(e, t) {
            var n = t.scopeChip;
            return r.__assign({}, e, {
                scopeChip: n || "/"
            })
        },
        R = function(e, t) {
            var n = t.deletedChip;
            return r.__assign({}, e, {
                deletedChip: n,
                searchSuggestions: []
            })
        },
        A = function(e, t) {
            var n = t.enabled;
            return r.__assign({}, e, {
                deletedChipEnabled: n,
                searchSuggestions: []
            })
        },
        C = function(e) {
            var n = e.scopeChip,
                o = e.searchHistory,
                i = e.browseScope,
                s = e.experiments,
                _ = e.isSearchBarFocused,
                c = e.fileCategories;
            return a.isInSinglePageSearchExperiment(e.experiments) ? r.__assign({}, t.defaultSearchBarState, {
                scopeChip: n,
                searchHistory: o,
                browseScope: i,
                experiments: s,
                isSearchBarFocused: _,
                fileCategories: c
            }) : r.__assign({}, t.defaultSearchBarState, {
                scopeChip: n,
                searchHistory: o,
                browseScope: i,
                experiments: s
            })
        },
        I = function(e, t) {
            var n = t.experiments;
            return r.__assign({}, e, {
                experiments: n
            })
        },
        g = function(e, t) {
            var n = t.fileCategories;
            return r.__assign({}, e, {
                fileCategories: n
            })
        },
        L = function(e) {
            return r.__assign({}, e, {
                resultsInvalid: !0
            })
        },
        D = function(e, t) {
            return O(C(e), {
                browseScope: t.path
            })
        };
    t.searchBarReducer = c
}), define("modules/clean/search/search_bar/data/selectors", ["require", "exports", "tslib", "external/reselect", "modules/clean/filepath", "modules/clean/react/browse/models", "modules/clean/redux/namespaces", "modules/clean/redux/selectors", "modules/clean/search/search_bar/experiments", "modules/clean/search/store_helpers", "modules/clean/search/types"], function(e, t, r, n, o, i, s, a, _, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), c = r.__importStar(c);
    var l = function(e) {
        return a.getStateAtNamespace(e, s.SEARCH_BAR_NAMESPACE_KEY)
    };
    t.isSearchBarFocused = function(e) {
        return l(e).isSearchBarFocused
    }, t.searchHistory = function(e) {
        return l(e).searchHistory
    }, t.rawQuery = function(e) {
        return l(e).query
    }, t.normalizedQuery = function(e) {
        return c.normalize(t.rawQuery(e))
    }, t.searchSessionId = function(e) {
        return l(e).searchSessionId
    }, t.isSearchBarActive = function(e) {
        return !!t.rawQuery(e)
    }, t.searchPath = function(e) {
        return l(e).searchPath
    }, t.isSearchBarLoading = function(e) {
        return l(e).isSearchBarLoading
    }, t.searchResults = function(e) {
        return l(e).searchResults
    }, t.hasMoreResults = function(e) {
        return l(e).hasMoreResults
    }, t.slimSearchResults = function(e) {
        return l(e).slimSearchResults
    }, t.highlightedSearchRow = function(e) {
        return l(e).highlightedSearchRow
    }, t.searchResultForPath = function(e, r) {
        return t.searchResults(e).find(function(e) {
            return e instanceof i.File && o.paths_are_equal(e.fq_path, r)
        })
    }, t.browseScope = function(e) {
        return l(e).browseScope
    }, t.scopeChip = function(e) {
        return l(e).scopeChip
    }, t.canScope = function(e) {
        return l(e).canScope
    }, t.deletedChip = function(e) {
        return l(e).deletedChip
    }, t.deletedChipEnabled = function(e) {
        return l(e).deletedChipEnabled
    }, t.experiments = function(e) {
        return l(e).experiments
    }, t.fileCategories = function(e) {
        return l(e).fileCategories
    }, t.resultsInvalid = function(e) {
        return l(e).resultsInvalid
    }, t.headerItems = n.createSelector(t.normalizedQuery, t.canScope, t.deletedChipEnabled, t.experiments, function(e, t, r, n) {
        var o = "" !== e,
            i = [];
        return _.isInSinglePageSearchExperiment(n) ? [] : (o && i.push(u.SearchBarDropdownHeaderItemType.SEARCH_ALL), r && _.isInDeletedFilterRightRailExperiment(n) ? i.push(u.SearchBarDropdownHeaderItemType.DELETED_FILES) : t && i.push(u.SearchBarDropdownHeaderItemType.SCOPE_CHIPS), i)
    })
}), define("modules/clean/search/search_bar/data/store", ["require", "exports", "modules/clean/redux/store", "modules/clean/redux/namespaces", "modules/clean/search/search_bar/data/reducer"], function(e, t, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i;
    t.getStoreForSearchBar = function() {
        var e;
        return i || (i = r.getStoreAndRegisterReducers((e = {}, e[n.SEARCH_BAR_NAMESPACE_KEY] = o.searchBarReducer, e))), i
    }
}), define("modules/clean/search/search_bar/data/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.FOCUS = "SEARCH_BAR/FOCUS", e.BLUR = "SEARCH_BAR/BLUR", e.CLEAR = "SEARCH_BAR/CLEAR", e.UPDATE_HISTORY = "SEARCH_BAR/UPDATE_HISTORY", e.SET_QUERY = "SEARCH_BAR/SET_QUERY", e.SET_SEARCH_RESULTS = "SEARCH_BAR/SET_SEARCH_RESULTS", e.SET_SLIM_SEARCH_RESULTS = "SEARCH_BAR/SET_SLIM_SEARCH_RESULTS", e.SET_HIGHLIGHTED_ROW = "SEARCH_BAR/SET_HIGHLIGHTED_ROW", e.HIGHLIGHT_PREVIOUS_ROW = "SEARCH_BAR/HIGHLIGHT_PREVIOUS_ROW", e.HIGHLIGHT_NEXT_ROW = "SEARCH_BAR/HIGHLIGHT_NEXT_ROW", e.SET_BROWSE_SCOPE = "SEARCH_BAR/SET_BROWSE_SCOPE", e.SET_SCOPE_CHIP = "SEARCH_BAR/SET_SCOPE_CHIP", e.SET_DELETED_CHIP = "SEARCH_BAR/SET_DELETED_CHIP", e.SET_DELETED_CHIP_ENABLED = "SEARCH_BAR/SET_DELETED_CHIP_ENABLED", e.SET_EXPERIMENTS = "SEARCH_BAR/SET_EXPERIMENTS", e.SET_FILE_CATEGORIES = "SEARCH_BAR/SET_FILE_CATEGORIES", e.INVALIDATE_RESULTS = "SEARCH_BAR/INVALIDATE_RESULTS"
    })(t.ActionTypes || (t.ActionTypes = {}))
}), define("modules/clean/search/search_bar/experiments", ["require", "exports", "modules/clean/search/types"], function(e, t, r) {
    "use strict";

    function n(e) {
        return !!e && e.expSinglePageSearch === r.SinglePageSearchVariants.ON
    }

    function o(e) {
        return !!e && e.expDeletedFilterRightRail === r.DeletedFilterRightRailVariants.ON
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isInSinglePageSearchExperiment = n, t.isInDeletedFilterRightRailExperiment = o, t.isInShowHelpLinkHelpCenterLinkExperiment = function(e) {
        return !!e && (e.expShowHelpLink === r.ShowHelpLinkVariants.ON || e.expShowHelpLink === r.ShowHelpLinkVariants.HELP_CENTER_LINK)
    }, t.isInShowHelpLinkPlaceholderTextExperiment = function(e) {
        return !!e && (e.expShowHelpLink === r.ShowHelpLinkVariants.ON || e.expShowHelpLink === r.ShowHelpLinkVariants.PLACEHOLDER_TEXT)
    }, t.isInRecentFilesExperiment = function(e) {
        return !!e && (e.expRecentFiles === r.RecentFilesVariants.ON_VIEWED_DATE || e.expRecentFiles === r.RecentFilesVariants.ON_MODIFIED_DATE)
    };
    var i = [r.QuerySuggestionsVariants.POSTERIOR_ONLY_WITH_3_SUGGESTIONS, r.QuerySuggestionsVariants.POSTERIOR_ONLY_WITH_5_SUGGESTIONS, r.QuerySuggestionsVariants.PRIOR_AND_POSTERIOR_SUGGESTIONS, r.QuerySuggestionsVariants.SUGGESTIONS_WITH_NAUTILUS];
    t.isInPosteriorQuerySuggestionsExperiment = function(e) {
        return !(!e || !e.expQuerySuggestions) && i.includes(e.expQuerySuggestions)
    };
    var s = [r.QuerySuggestionsVariants.PRIOR_ONLY_WITH_3_SUGGESTIONS, r.QuerySuggestionsVariants.PRIOR_ONLY_WITH_5_SUGGESTIONS, r.QuerySuggestionsVariants.PRIOR_ONLY_WITH_10_SUGGESTIONS, r.QuerySuggestionsVariants.PRIOR_AND_POSTERIOR_SUGGESTIONS];
    t.isInPriorQuerySuggestionsExperiment = function(e) {
        return !(!e || !e.expQuerySuggestions) && s.includes(e.expQuerySuggestions)
    }, t.isInSearchSuccessBannerExperiment = function(e) {
        return e && !!e.expSearchSuccessBanner
    };
    var a = [r.QuerySuggestionsVariants.FETCH_ONLY_WITH_3_SUGGESTIONS, r.QuerySuggestionsVariants.FETCH_ONLY_WITH_5_SUGGESTIONS];
    t.isInFetchQuerySuggestionsExperiment = function(e) {
        return !(!e || !e.expQuerySuggestions) && a.includes(e.expQuerySuggestions)
    }, t.getNumOfQuerySuggestionsToFetch = function(e) {
        switch (e) {
            case r.QuerySuggestionsVariants.POSTERIOR_ONLY_WITH_3_SUGGESTIONS:
            case r.QuerySuggestionsVariants.PRIOR_ONLY_WITH_3_SUGGESTIONS:
            case r.QuerySuggestionsVariants.FETCH_ONLY_WITH_3_SUGGESTIONS:
                return 3;
            case r.QuerySuggestionsVariants.POSTERIOR_ONLY_WITH_5_SUGGESTIONS:
            case r.QuerySuggestionsVariants.PRIOR_ONLY_WITH_5_SUGGESTIONS:
            case r.QuerySuggestionsVariants.FETCH_ONLY_WITH_5_SUGGESTIONS:
                return 5;
            case r.QuerySuggestionsVariants.PRIOR_ONLY_WITH_10_SUGGESTIONS:
                return 10;
            default:
                return 0
        }
    }
}), define("modules/clean/search/search_helpers", ["require", "exports", "tslib", "external/sjcl", "modules/clean/react/browse/constants", "modules/clean/search/types", "modules/clean/react/files_view/types", "modules/clean/search/constants", "modules/clean/search/models", "modules/clean/search/search_bar/experiments", "modules/core/uri", "modules/clean/browse_uri_interface", "modules/core/cookies"], function(e, t, r, n, o, i, s, a, _, c, u, l, E) {
    "use strict";

    function d(e) {
        var t = e.user,
            n = e.searchPath,
            o = e.normalizedQuery,
            i = e.searchSessionId,
            s = e.searchToken,
            a = e.qargs,
            _ = r.__assign({
                path: n,
                search_session_id: i,
                search_token: s,
                query: o
            }, a);
        return new u.URI({
            path: "/search/" + t.role,
            query: _
        })
    }

    function p(e, t) {
        return e instanceof _.SlimFileSearchResult ? l.browse_uri_for_fq_path(t, e.fq_path).toString() : e.url
    }

    function f(e) {
        return 0 === e.button && !e.altKey && !e.ctrlKey && !e.metaKey
    }

    function S() {
        var e = n.codec.utf8String.toBits(E.Cookies.read("__Host-js_csrf")),
            t = n.codec.utf8String.toBits("search"),
            r = new n.misc.hmac(e);
        return n.codec.base64.fromBits(r.encrypt(t))
    }

    function h(e) {
        return e.expFileTypeFilter === i.FileTypeFilterVariants.ON
    }

    function m(e) {
        var t = [];
        return Object.keys(e).forEach(function(r) {
            "checked" === e[r] && t.push(r)
        }), t.join(",")
    }

    function O(e) {
        var t = r.__assign({}, a.FILE_CATEGORIES_UNCHECKED);
        return e && e.split(",").forEach(function(e) {
            e in t && (t[e] = "checked")
        }), t
    }

    function T(e) {
        if (!e) return JSON.stringify(["all_unchecked"]);
        var t = e.split(","),
            r = t;
        return 10 === t.length ? JSON.stringify(["all_checked"]) : JSON.stringify(r)
    }

    function R(e, t) {
        var n;
        return void 0 === t && (t = !0), t || (e = r.__assign({}, e, (n = {}, n[i.FileCategory.PAPER] = "checked", n))), Object.keys(e).every(function(t) {
            return "checked" === e[t]
        })
    }

    function A(e, t) {
        var n;
        return void 0 === t && (t = !0), t || (e = r.__assign({}, e, (n = {}, n[i.FileCategory.PAPER] = "unchecked", n))), Object.keys(e).every(function(t) {
            return "unchecked" === e[t]
        })
    }

    function C(e, t, r) {
        return void 0 === r && (r = !0), !(!h(t) || !e) && !A(e, r)
    }

    function I(e) {
        switch (e) {
            case s.SortField.MODIFIED:
                return o.SEARCH_ORDER_BY_TYPE.LAST_MODIFIED_TIME;
            case s.SortField.RELEVANCE:
            default:
                return o.SEARCH_ORDER_BY_TYPE.RELEVANCE
        }
    }

    function g(e) {
        switch (e) {
            case o.SEARCH_ORDER_BY_TYPE.LAST_MODIFIED_TIME:
                return s.SortField.MODIFIED;
            case o.SEARCH_ORDER_BY_TYPE.RELEVANCE:
            default:
                return s.SortField.RELEVANCE
        }
    }

    function L(e) {
        switch (e) {
            case s.SortDirection.ASCENDING:
                return o.SEARCH_REVERSE_ORDER_TYPE.TRUE;
            case s.SortDirection.DESCENDING:
            default:
                return o.SEARCH_REVERSE_ORDER_TYPE.FALSE
        }
    }

    function D(e) {
        switch (e) {
            case o.SEARCH_REVERSE_ORDER_TYPE.TRUE:
                return s.SortDirection.ASCENDING;
            case o.SEARCH_REVERSE_ORDER_TYPE.FALSE:
            default:
                return s.SortDirection.DESCENDING
        }
    }

    function N(e, t) {
        return !e && !t || !(!e || !t) && (e.sortField === t.sortField && e.sortDirection === t.sortDirection)
    }

    function v(e) {
        if ("sfj_entity" === e.entity[".tag"]) return _.RecentFile.fromServerObject(e);
        if ("paper_entity" === e.entity[".tag"]) {
            return e.entity.is_dir ? _.RecentPaperFolder.fromServerObject(e) : _.RecentPaper.fromServerObject(e)
        }
        return null
    }

    function y(e) {
        var t = new Map;
        return e.forEach(function(e) {
            if (e instanceof _.RecentFile) {
                var r = "id:" + e.file_id;
                t.set(r, e)
            } else e instanceof _.RecentPaper ? t.set(e.pad_id, e) : e instanceof _.RecentPaperFolder && t.set(e.folder_id, e)
        }), t
    }

    function F(e) {
        return e instanceof _.RecentPaperFolder ? a.PAPER_FOLDER_BASE_URL + e.folder_id : a.PAPER_DOC_BASE_URL + e.pad_id
    }

    function P(e, t, r) {
        return c.isInSinglePageSearchExperiment(e) && c.isInRecentFilesExperiment(e) && t === i.RecentItemsLoadingState.LOADED && r && r.size > 0
    }

    function w(e, t) {
        return c.isInSinglePageSearchExperiment(e) && c.isInRecentFilesExperiment(e) && t === i.RecentItemsLoadingState.LOADING
    }

    function b(e, t, r) {
        return c.isInSinglePageSearchExperiment(e) && c.isInPosteriorQuerySuggestionsExperiment(e) && r === i.QuerySuggestionsLoadingState.LOADED && !!t && t.length > 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.buildSearchURL = d, t.resultObjectToUrl = p, t.shouldHandleClick = f, t.getSearchCsrfToken = S, t.isInFileTypeFilterExperiment = h, t.fileCategoriesToString = m, t.fileCategoriesFromString = O, t.fileCategoryStringToLogValue = T, t.allCategoriesChecked = R, t.allCategoriesUnchecked = A, t.fileCategoriesSet = C, t.sortFieldToOrderBy = I, t.orderByToSortField = g, t.sortDirectionToReverseOrder = L, t.reverseOrderToSortDirection = D, t.areSortOrdersEqual = N, t.recentItemFromServerObject = v, t.createRecentItemsMap = y, t.buildPaperUrl = F, t.areRecentItemsLoaded = P, t.areRecentItemsLoading = w, t.areQuerySuggestionsLoaded = b
}), define("modules/clean/search/store_helpers", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return e.trim().replace(/\ +/g, " ")
    }

    function n(e) {
        return !r(e)
    }

    function o(e, t) {
        return !(!n(e) || n(t)) || (!(n(e) || !n(t)) || e.length >= 3 && 1 === t.length)
    }

    function i() {
        for (var e = "", t = 0; t < 32; t++) {
            var r = Math.floor(10 * Math.random());
            e += String(r)
        }
        return e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.normalize = r, t.isBlank = n, t.shouldStartNewSearchSession = o, t.generateRandomId = i
}), define("modules/clean/search/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SearchResultTypes = {
        FILE: "FILE",
        FILE_SHARED_WITH_ME: "FILE_SHARED_WITH_ME",
        PAPER: "PAPER",
        PAPER_FOLDER: "PAPER_FOLDER"
    };
    (function(e) {
        e.ON = "ON", e.OFF = "OFF", e.CONTROL = "CONTROL"
    })(t.DeletedFilterRightRailVariants || (t.DeletedFilterRightRailVariants = {}));
    (function(e) {
        e.ON = "ON", e.OFF = "OFF", e.CONTROL = "CONTROL", e.HOLDOUT = "HOLDOUT"
    })(t.SinglePageSearchVariants || (t.SinglePageSearchVariants = {}));
    (function(e) {
        e.POSTERIOR_ONLY_WITH_3_SUGGESTIONS = "POSTERIOR_ONLY_WITH_3_SUGGESTIONS", e.POSTERIOR_ONLY_WITH_5_SUGGESTIONS = "POSTERIOR_ONLY_WITH_5_SUGGESTIONS", e.PRIOR_ONLY_WITH_3_SUGGESTIONS = "PRIOR_ONLY_WITH_3_SUGGESTIONS", e.PRIOR_ONLY_WITH_5_SUGGESTIONS = "PRIOR_ONLY_WITH_5_SUGGESTIONS", e.PRIOR_ONLY_WITH_10_SUGGESTIONS = "PRIOR_ONLY_WITH_10_SUGGESTIONS", e.FETCH_ONLY_WITH_3_SUGGESTIONS = "FETCH_ONLY_WITH_3_SUGGESTIONS", e.FETCH_ONLY_WITH_5_SUGGESTIONS = "FETCH_ONLY_WITH_5_SUGGESTIONS", e.PRIOR_AND_POSTERIOR_SUGGESTIONS = "PRIOR_AND_POSTERIOR_SUGGESTIONS", e.SUGGESTIONS_WITH_NAUTILUS = "SUGGESTIONS_WITH_NAUTILUS", e.OFF = "OFF", e.CONTROL = "CONTROL", e.HOLDOUT = "HOLDOUT"
    })(t.QuerySuggestionsVariants || (t.QuerySuggestionsVariants = {}));
    (function(e) {
        e.NOT_LOADED = "NOT_LOADED", e.LOADING = "LOADING", e.LOADED = "LOADED", e.DISMISSED = "DISMISSED", e.FAILED = "FAILED"
    })(t.QuerySuggestionsLoadingState || (t.QuerySuggestionsLoadingState = {}));
    (function(e) {
        e.V1 = "V1", e.V2 = "V2", e.V3 = "V3", e.OFF = "OFF", e.CONTROL = "CONTROL", e.HOLDOUT = "HOLDOUT"
    })(t.BrowseSuccessBannerVariants || (t.BrowseSuccessBannerVariants = {}));
    (function(e) {
        e.ON = "ON", e.OFF = "OFF", e.CONTROL = "CONTROL", e.HOLDOUT = "HOLDOUT"
    })(t.PeopleFilterVariants || (t.PeopleFilterVariants = {}));
    (function(e) {
        e.NOT_LOADED = "NOT_LOADED", e.LOADING = "LOADING", e.LOADED = "LOADED", e.DISMISSED = "DISMISSED", e.FAILED = "FAILED"
    })(t.PeopleSuggestionsLoadingState || (t.PeopleSuggestionsLoadingState = {}));
    (function(e) {
        e.ON = "ON", e.OFF = "OFF", e.CONTROL = "CONTROL"
    })(t.FileTypeFilterVariants || (t.FileTypeFilterVariants = {}));
    (function(e) {
        e.ON = "ON", e.PLACEHOLDER_TEXT = "PLACEHOLDER_TEXT", e.HELP_CENTER_LINK = "HELP_CENTER_LINK", e.OFF = "OFF", e.CONTROL = "CONTROL", e.HOLDOUT = "HOLDOUT"
    })(t.ShowHelpLinkVariants || (t.ShowHelpLinkVariants = {}));
    (function(e) {
        e.IMAGE = "image", e.DOCUMENT = "document", e.PDF = "pdf", e.SPREADSHEET = "spreadsheet", e.PRESENTATION = "presentation", e.AUDIO = "audio", e.VIDEO = "video", e.FOLDER = "folder", e.PAPER = "paper", e.OTHER = "other"
    })(t.FileCategory || (t.FileCategory = {}));
    (function(e) {
        e.ON_VIEWED_DATE = "ON_VIEWED_DATE", e.ON_MODIFIED_DATE = "ON_MODIFIED_DATE", e.OFF = "OFF", e.CONTROL = "CONTROL", e.HOLDOUT = "HOLDOUT"
    })(t.RecentFilesVariants || (t.RecentFilesVariants = {}));
    (function(e) {
        e.NOT_LOADED = "NOT_LOADED", e.LOADING = "LOADING", e.LOADED = "LOADED", e.FAILED = "FAILED"
    })(t.RecentItemsLoadingState || (t.RecentItemsLoadingState = {}));
    (function(e) {
        e.OFF = "OFF", e.IMAGE_PANEL = "IMAGE_PANEL", e.SNACKBAR = "SNACKBAR", e.TAB = "TAB", e.NONE = "NONE"
    })(t.ImageSearchDiscoveryVariants || (t.ImageSearchDiscoveryVariants = {}));
    (function(e) {
        e.OFF = "OFF", e.CONTROL = "CONTROL", e.HOLDOUT = "HOLDOUT", e.FOLDER_OVERVIEW = "FOLDER_OVERVIEW", e.CONTENT_SCROLL = "CONTENT_SCROLL", e.CREATE_FILE_LABEL = "CREATE_FILE_LABEL"
    })(t.DetailsPaneVariants || (t.DetailsPaneVariants = {}));
    (function(e) {
        e.OFF = "OFF", e.CONTROL = "CONTROL", e.A_V1 = "A_V1", e.A_V2 = "A_V2"
    })(t.SearchLockupVariants || (t.SearchLockupVariants = {}));
    (function(e) {
        e.OFF = "OFF", e.CONTROL = "CONTROL", e.SAPPHIRE = "SAPPHIRE"
    })(t.ButtonColorVariants || (t.ButtonColorVariants = {}));
    (function(e) {
        e.SEARCH_ALL = "SEARCH_ALL", e.SCOPE_CHIPS = "SCOPE_CHIPS", e.DELETED_FILES = "DELETED_FILES"
    })(t.SearchBarDropdownHeaderItemType || (t.SearchBarDropdownHeaderItemType = {}))
}), define("modules/clean/sharing/access_level", ["require", "exports", "tslib", "external/lodash"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    (function(e) {
        e[e.ACCESS_NO_ACCESS = 0] = "ACCESS_NO_ACCESS", e[e.ACCESS_READER_NO_COMMENT = -10] = "ACCESS_READER_NO_COMMENT", e[e.ACCESS_READER = 1] = "ACCESS_READER", e[e.ACCESS_WRITER = 2] = "ACCESS_WRITER", e[e.ACCESS_OWNER = 3] = "ACCESS_OWNER"
    })(t.NameSpaceAccess || (t.NameSpaceAccess = {})), t.ACCESS_LEVEL = {
        OWNER: "owner",
        WRITER: "writer",
        READER: "reader",
        READER_NO_COMMENT: "reader_no_comment"
    }, t.ACCESS_VALUES = n.values(t.ACCESS_LEVEL);
    var o = {
        reader_no_comment: -10,
        reader: 1,
        writer: 2,
        owner: 3
    };
    t.isLowerAccess = function(e, r) {
        var n = Object.keys(o);
        return e !== r && n.indexOf(e) !== -1 && n.indexOf(r) !== -1 && t.getMaxAccess([e, r]) === e
    }, t.getMaxAccess = function(e) {
        if (0 === e.length) throw Error("Argument accessLevels are not valid.");
        for (var t = e[0], r = o[t], n = 0; n < e.length; n++) {
            var i = e[n],
                s = o[i];
            s > r && (r = s, t = i)
        }
        return t
    }
}), define("modules/clean/sharing/constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.PUBLIC = 1] = "PUBLIC", e[e.TEAM_ONLY = 2] = "TEAM_ONLY", e[e.PASSWORD = 3] = "PASSWORD",
            e[e.ONLY_YOU = 99] = "ONLY_YOU"
    })(t.SHMODEL_LINK_TOKEN_VISIBILITY || (t.SHMODEL_LINK_TOKEN_VISIBILITY = {})), t.MEMBER_ACTION = {
        LEAVE_A_COPY: "leave_a_copy",
        MAKE_EDITOR: "make_editor",
        MAKE_OWNER: "make_owner",
        MAKE_VIEWER: "make_viewer",
        MAKE_VIEWER_NO_COMMENT: "make_viewer_no_comment",
        REMOVE: "remove",
        ALL: ["leave_a_copy", "make_editor", "make_owner", "make_viewer", "make_viewer_no_comment", "remove"]
    }, t.SNIPPET_SIZES = {
        FILENAME: 22,
        DISPLAY_NAME: 26,
        EMAIL: 30,
        OUT_OF_QUOTA_FOLDER_NAME: 15,
        NEW_FOLDER_MODAL_FOLDER_NAME: 15
    }, t.VALIDATE_PATH_PERMISSIONS_CONFIDENTIAL_AWARE = {
        change_options: "canChangeOptions",
        disable_viewer_info: "disableViewerInfo",
        edit_contents: "canEditContents",
        enable_viewer_info: "enableViewerInfo",
        invite_editor: "canInviteEditor",
        invite_viewer: "canInviteViewer",
        invite_viewer_no_comment: "canInviteViewerNoComment",
        unshare: "canUnshareFolder",
        update_confidentiality: "canUpdateConfidentiality",
        relinquish_membership: "canRelinquishMembership"
    }, t.ALPHA_FOLDER_METADATA_PERMISSIONS = {
        change_options: "canChangeOptions",
        disable_viewer_info: "disableViewerInfo",
        edit_contents: "canEditContents",
        enable_viewer_info: "enableViewerInfo",
        invite_editor: "canInviteEditor",
        invite_viewer: "canInviteViewer",
        invite_viewer_no_comment: "canInviteViewerNoComment",
        leave_a_copy: "leaveACopy",
        relinquish_membership: "canRelinquishMembership",
        remove_download_policy: "removeDownloadPolicy",
        set_download_policy: "setDownloadPolicy",
        unmount: "canUnmountFolder",
        unshare: "canUnshareFolder",
        update_confidentiality: "canUpdateConfidentiality"
    }, t.ALPHA_FILE_METADATA_PERMISSIONS = {
        change_options: "canChangeOptions",
        create_view_link: "createViewLink",
        create_edit_link: "createEditLink",
        disable_viewer_info: "disableViewerInfo",
        enable_viewer_info: "enableViewerInfo",
        invite_viewer: "canInviteViewer",
        invite_editor: "canInviteEditor",
        invite_viewer_no_comment: "canInviteViewerNoComment",
        relinquish_membership: "canRelinquishMembership",
        remove_download_policy: "removeDownloadPolicy",
        set_download_policy: "setDownloadPolicy",
        unshare: "unshare",
        share_message_as_comment: "shareMessageAsComment"
    }, t.FILE_METADATA_PERMISSIONS = {
        invite_viewer: "canInviteViewer",
        invite_editor: "canInviteEditor",
        invite_viewer_no_comment: "canInviteViewerNoComment",
        relinquish_membership: "canRelinquishMembership",
        unshare: "unshare"
    };
    (function(e) {
        e.BROWSE_FILE_ROW = "BROWSE_FILE_ROW", e.FILE_ROW_SHARE_MENU = "FILE_ROW_SHARE_MENU", e.PREVIEW_PAGE = "PREVIEW_PAGE", e.NOTIFICATION_WEB = "NOTIFICATION_WEB", e.RECENTS = "RECENTS", e.SHARE = "SHARE", e.SYNC_MODAL = "SYNC_MODAL", e.GRANT_ACCESS = "GRANT_ACCESS", e.DESKTOP_CLIENT = "DESKTOP_CLIENT", e.WIZARD = "WIZARD", e.OFFICE_INTEGRATION = "OFFICE_INTEGRATION", e.LEGACY_BROWSE = "LEGACY_BROWSE", e.SHARE_LINK_MODAL = "SHARE_LINK_MODAL", e.BROWSE_SHARED_FOLDER_BANNER = "BROWSE_SHARED_FOLDER_BANNER", e.BROWSE_GLOBAL_ACTIONS = "BROWSE_GLOBAL_ACTIONS", e.EVENTS_PAGE = "EVENTS_PAGE", e.BROWSE_FILE_ACTIONS = "BROWSE_FILE_ACTIONS", e.CONTENT_MANAGER = "CONTENT_MANAGER", e.PARENT_FOLDER_MODAL = "PARENT_FOLDER_MODAL", e.OUT_OF_QUOTA_MODAL = "OUT_OF_QUOTA_MODAL", e.LINKS_PAGE = "LINKS_PAGE", e.PREVIEW_PAGE_FACEPILE = "PREVIEW_PAGE_FACEPILE", e.BROWSE_FILE_FACEPILE = "BROWSE_FILE_FACEPILE", e.SHARE_PAGE_FROM_EMAIL = "SHARE_PAGE_FROM_EMAIL", e.SHARE_PAGE_FROM_NOTIFICATION_WEB = "SHARE_PAGE_FROM_NOTIFICATION_WEB", e.COPY_SCL_LINK_MODAL = "COPY_SCL_LINK_MODAL", e.HARMONY = "HARMONY", e.NOTIFICATION_CLIENT = "NOTIFICATION_CLIENT", e.NATIVE_SHARE_CLIENT = "NATIVE_SHARE_CLIENT", e.FILESYSTEM = "FILESYSTEM", e.NOTIFICATION_MOBILE = "NOTIFICATION_MOBILE", e.WEB_MOBILE = "WEB_MOBILE", e.IN_APP = "IN_APP", e.EMAIL = "EMAIL", e.PAPER_INTEGRATION = "PAPER_INTEGRATION", e.GOOGLE_DSS = "GOOGLE_DSS", e.BROWSE_NEW_FOLDER_MODAL = "BROWSE_NEW_FOLDER_MODAL", e.TRELLO_FILE_VIEWER = "TRELLO_FILE_VIEWER", e.STARRED = "STARRED", e.AUTO_MOUNT = "AUTO_MOUNT"
    })(t.SHARE_ACTION_ORIGIN_TYPE || (t.SHARE_ACTION_ORIGIN_TYPE = {}));
    (function(e) {
        e.Content = "c", e.Shmodel = "s"
    })(t.SharedLinkType || (t.SharedLinkType = {})), t.FETCH_FILE_MEMBER_COUNT_LIMIT = 100, t.COLORS = {
        COLOR_INK_60: "#717781"
    }
}), define("modules/clean/upsell/exception", ["require", "exports", "tslib", "modules/core/exception", "modules/core/xhr"], function(e, t, r, n, o) {
    "use strict";

    function i(e) {
        var t = e.severity,
            r = void 0 === t ? n.SEVERITY.CRITICAL : t;
        o.sendXhr("/prompt/log_jse", {
            severity: r
        })
    }

    function reportException(e) {
        var r = e.err,
            o = e.tags,
            i = void 0 === o ? [] : o,
            s = e.severity,
            a = void 0 === s ? n.SEVERITY.CRITICAL : s,
            _ = e.exc_extra,
            c = void 0 === _ ? {} : _;
        i.push(t.TAGS.PROMPT), i.push(t.TAGS.MEGAPHONE), n.reportException({
            err: r,
            tags: i,
            severity: a,
            exc_extra: c
        }), t.logExceptionRate({
            severity: a
        })
    }

    function s(e) {
        var r = e.err,
            o = e.js_controller_options,
            i = void 0 === o ? {} : o,
            s = e.severity,
            a = void 0 === s ? n.SEVERITY.CRITICAL : s,
            _ = e.tags,
            c = void 0 === _ ? [] : _,
            u = {
                "campaign-name": "campaignName",
                location: "campaignLocationId"
            };
        for (var l in u)
            if (u.hasOwnProperty(l)) {
                var E = u[l],
                    d = i[E];
                d && c.push("prompt-" + l + "-" + d)
            }
        t.reportException({
            err: r,
            tags: c,
            severity: a,
            exc_extra: i
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.SEVERITY = n.SEVERITY, t.TAGS = {
        MEGAPHONE: "megaphone",
        PROMPT: "prompt",
        PROMPT_ADMIN: "prompt-admin",
        PROMPT_INIT: "prompt-init",
        LEGACY_TOP_NOTIFICATIONS: "legacy-top-notifications"
    }, t.logExceptionRate = i, t.reportException = reportException, t.reportJsControllerException = s
}), define("modules/clean/upsell/legacy_prompt_event_logging", ["require", "exports", "tslib", "modules/core/uri", "modules/clean/ajax_minimal"], function(e, t, r, n, o) {
    "use strict";

    function i(e, t) {
        var r = {
            campaign_id: t.campaignId.toString()
        };
        if (t.versionId && (r.campaign_id = t.versionId.toString(), r.version_id = t.versionId.toString()), "number" == typeof t.promptQueriedAtMs && (r.prompt_queried_at_ms = t.promptQueriedAtMs.toString()), window && window.performance && window.performance.now) {
            var o = Math.round(window.performance.now());
            r.delta_from_request_start_ms = o.toString()
        }
        return t.activeUserId && (r._subject_uid = String(t.activeUserId)), t.requestId && (r.prompt_parent_request_id = t.requestId), t.eventName && (r.event_name = t.eventName), void 0 !== t.remindMeLater && (r.remind_me_later = (!!t.remindMeLater).toString()), t.csrfToken && (r.csrf_token = encodeURIComponent(t.csrfToken)), t.csrfTokenType && (r.csrf_token_type = encodeURIComponent(t.csrfTokenType)), new n.URI({
            path: e,
            query: r
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = r.__importStar(o), t.LEGACY_EVENT_CONFIRM = "db:prompt:confirm", t.LEGACY_EVENT_DISMISS = "db:prompt:dismiss", t.LEGACY_EVENT_PRE_CONFIRM = "db:prompt:pre-confirm", t.LEGACY_EVENT_PRE_DISMISS = "db:prompt:pre-dismiss", t.LEGACY_EVENT_SHOW = "db:prompt:show", t.getUpsellControllerURI = i;
    var s = (function() {
        function e(e) {
            this.params = e
        }
        return e.prototype.logImpression = function() {
            var e = i("/prompt/log_impression", this.params);
            o.post(e.toString(), "")
        }, e.prototype.logDismissal = function() {
            var e = i("/prompt/dismiss", this.params);
            o.post(e.toString(), "")
        }, e
    })();
    t.LegacyEventLogger = s
}), define("modules/clean/upsell/prompt_event_emitter", ["require", "exports", "tslib", "external/eventemitter3"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var o = {
        ON_HA_LOADED: "ON_HA_LOADED",
        REACT_HA_DID_UPDATE: "REACT_HA_DID_UPDATE",
        ON_PROMPT_INITIALIZED: "ON_PROMPT_INITIALIZED",
        ON_PROMPT_SHOWN: "ON_PROMPT_SHOWN",
        ON_PROMPT_DISMISSED: "ON_PROMPT_DISMISSED"
    };
    t.Events = o;
    var i = new n.default;
    t.eventEmitter = i;
    var s = (function(e) {
        function t() {
            var t = e.call(this) || this;
            return t.allEventBuffers = {}, t
        }
        return r.__extends(t, e), t.prototype.on = function(t, r) {
            var n = this;
            e.prototype.on.call(this, t, r);
            var o = this.allEventBuffers[t.toString()];
            return void 0 !== o && o.forEach(function(e) {
                n.emit(t, e)
            }), this
        }, t.prototype.emit = function(t, r) {
            return t = t.toString(), void 0 === this.allEventBuffers[t] && (this.allEventBuffers[t] = []), this.allEventBuffers[t].push(r), e.prototype.emit.call(this, t, r)
        }, t.prototype.reset = function() {
            this.allEventBuffers = {}, this.removeAllListeners()
        }, t
    })(n.default);
    t.BufferedEventEmitter = s, window.ensemble && !window.ensemble.bufferedEventEmitter && (window.ensemble.bufferedEventEmitter = new s);
    var a = window.ensemble && window.ensemble.bufferedEventEmitter ? window.ensemble.bufferedEventEmitter : new s;
    t.promptBufferedEventEmitter = a
}), define("modules/clean/upsell/prompt_event_logger", ["require", "exports", "tslib", "jquery", "modules/clean/ajax", "modules/clean/upsell/legacy_prompt_event_logging"], function(e, t, r, n, o, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), o = r.__importStar(o);
    var s = (function() {
        function e(e) {
            this.campaignProps = e
        }
        return e.prototype.recordClientImpression = function() {
            var e = this.getUpsellControllerURI("/prompt/log_impression");
            this.recordAck(e)
        }, e.prototype.recordConfirm = function() {
            var e = this.getUpsellControllerURI("/prompt/confirm");
            this.recordAck(e, "db:prompt:confirm")
        }, e.prototype.recordDismiss = function(e) {
            var t = this.getUpsellControllerURI("/prompt/dismiss", {
                remindMeLater: e
            });
            this.recordAck(t, "db:prompt:dismiss")
        }, e.prototype.recordEvent = function(e) {
            var t = this.getUpsellControllerURI("/prompt/log_event", {
                eventName: e
            });
            this.recordAck(t)
        }, e.prototype.recordAck = function(e, t) {
            var r = this;
            o.SilentBackgroundRequest({
                type: "POST",
                url: e.toString()
            }).done(function(e) {
                t && r.triggerExternalEvent(t)
            })
        }, e.prototype.getUpsellControllerURI = function(e, t) {
            return i.getUpsellControllerURI(e, {
                campaignId: this.campaignProps.campaign.campaignId,
                versionId: this.campaignProps.campaign.versionId,
                activeUserId: this.campaignProps.subjectUser,
                promptQueriedAtMs: this.campaignProps.promptQueriedAtMs,
                requestId: this.campaignProps.requestId,
                csrfToken: this.campaignProps.csrfToken,
                csrfTokenType: this.campaignProps.csrfTokenType,
                eventName: t && t.eventName,
                remindMeLater: t && t.remindMeLater
            })
        }, e.prototype.triggerExternalEvent = function(e) {
            n.default(document).trigger(e, {
                campaignName: this.campaignProps.campaign.campaignName
            })
        }, e
    })();
    t.PromptEventLogger = s
}), define("modules/clean/ux_analytics/UxAnalyticsDispatcher", ["require", "exports", "tslib", "modules/clean/ux_analytics/dispatch_custom_event", "modules/core/exception"], function(e, t, r, n, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.UXA_HISTORY_CHANGE_EVENT = "historyChange";
    var i = null;
    t.UxAnalyticsDispatcher = {
        initUrl: function(e) {
            i = e
        },
        dispatchHistoryChange: function(e) {
            o.assert(null !== i, "spaChangesToUxa needs an initial URL");
            var r = i;
            i = e;
            var s = {
                detail: {
                    previousUrl: r,
                    url: i
                }
            };
            n.dispatchCustomEvent(t.UXA_HISTORY_CHANGE_EVENT, s)
        },
        reset: function() {
            i = null
        }
    }
}), define("modules/clean/ux_analytics/dispatch_custom_event", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e, t) {
        if (void 0 === t && (t = {
                detail: null
            }), "function" == typeof CustomEvent) return new CustomEvent(e, t);
        var r = document.createEvent("CustomEvent");
        return r.initCustomEvent(e, !0, !0, t.detail), r
    }

    function n(e, t) {
        window.dispatchEvent(r(e, t))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createCustomEvent = r, t.dispatchCustomEvent = n
}), define("modules/clean/web_user_action_events", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.ADD_COMMENT = "add_comment", e.ARCHIVE = "archive", e.ATTACHMENT_ADD_SUCCESS = "attachment_add_success", e.ATTACHMENT_CLICKED = "attachment_clicked", e.ATTACHMENT_REMOVED = "attachment_removed", e.CALCULATE_SIZE = "calculate_size", e.CALENDAR_TAB_CLICKED = "calendar_tab_clicked", e.CALENDAR_SUGGESTIONS_REMOVED = "calendar_suggestions_removed", e.CLICK_ADD_ATTACHMENT = "click_add_attachment", e.CLICK_CONVERT_INDIVIDUAL_ACCOUNT = "click_convert_individual_account", e.CLICK_LEARN_MORE_ACCOUNT_CONVERSION = "click_learn_more_account_conversion", e.CLICK_PATH_LINK = "click_path_link", e.CLICK_REVIEW_SUMMARY_DELETE_USER = "click_review_summary_delete_user", e.CONTEXT_MENU = "context_menu", e.CONTEXT_MENU_CLICK = "context_menu_click", e.COPY = "copy", e.COPY_REQUEST_SUCCESS = "copy_request_success", e.COPY_REQUEST_FAIL = "copy_request_fail", e.COPY_UNDO = "copy_undo", e.COPY_UNDO_REQUEST_SUCCESS = "copy_undo_request_success", e.COPY_UNDO_REQUEST_FAIL = "copy_undo_request_fail", e.COPY_ACCEPT_CLICK = "copy_accept_click", e.CREATE_FOLDER = "create_folder", e.CREATE_FOLDER_CANCEL = "create_folder_cancel", e.CREATE_FOLDER_ERROR = "create_folder_error", e.CREATE_FOLDER_PENDING = "create_folder_pending", e.CREATE_FOLDER_SUCCESS = "create_folder_success", e.DISBAND_TEAM_KEEP = "disband_team_keep", e.DISBAND_TEAM_LEARN_MORE = "disband_team_learn_more", e.DISBAND_TEAM_VIEW = "disband_team_view", e.DELETE = "delete", e.DELETE_ACCEPT_CLICK = "delete_accept_click", e.DOWNLOAD = "download", e.EVENTS = "events", e.FILE_VIEW = "file_view", e.FILE_UPLOAD_FSW_RETURNED = "file_upload_fsw_returned", e.FOLDER_OPEN = "folder_open", e.KEYBOARD_SHORTCUT = "keyboard_shortcut", e.LEAVE_TEAM_CANCEL = "leave_team_cancel", e.LEAVE_TEAM_LEARN_MORE = "leave_team_learn_more", e.LEAVE_TEAM_VIEW = "leave_team_view", e.LINK_GOOGLE_CAL_CLICKED = "link_google_cal_clicked", e.LINK_GOOGLE_CAL_SUCCESS = "link_google_cal_success", e.MOVE = "move", e.MOVE_REQUEST_SUCCESS = "move_request_success", e.MOVE_REQUEST_FAIL = "move_request_fail", e.MOVE_UNDO = "move_undo", e.MOVE_UNDO_REQUEST_SUCCESS = "move_undo_request_success", e.MOVE_UNDO_REQUEST_FAIL = "move_undo_request_fail", e.MOVE_ACCEPT_CLICK = "move_accept_click", e.OPEN_ADD_TO_COLLECTION_MODAL = "open_add_to_collection_modal", e.OPEN_CALENDAR_FLYOUT = "open_calendar_flyout", e.OPEN_COPY_MODAL = "open_copy_modal", e.OPEN_DELETE_USER_MODAL = "open_delete_user_modal", e.OPEN_MOVE_MODAL = "open_move_modal", e.OPEN_ROW = "open_row", e.PAPER_CONTEXT_MENU = "paper_context_menu", e.PAPER_OPEN = "paper_open", e.PERMANENT_DELETE = "permanent_delete", e.PERMANENT_DELETE_ACCEPT_CLICK = "permanent_delete_accept_click", e.RENAME = "rename", e.RENAME_REQUEST_SUCCESS = "rename_request_success", e.RENAME_REQUEST_FAIL = "rename_request_fail", e.RENAME_UNDO = "rename_undo", e.RENAME_UNDO_REQUEST_SUCCESS = "rename_undo_request_success", e.RENAME_UNDO_REQUEST_FAIL = "rename_undo_request_fail", e.RESTORE = "restore", e.RESTORE_ACCEPT_CLICK = "restore_accept_click", e.SELECT_ROW = "select_row", e.SHARE = "share", e.SHOW_IN_FOLDER = "show_in_folder", e.SORT_RECORDS = "sort_records", e.STAR = "star", e.REMOVE_STAR = "remove_star", e.SWITCH_VIEW_TYPE = "switch_view_type", e.TOGGLE_DELETED_FILES = "toggle_deleted_files", e.VERSIONS = "versions", e.VIEW_SHARE_MODEL = "view_share_model", e.OPEN_DESKTOP = "open_via_unity", e.RESTORE_VERSION = "restore_version", e.CONF_BY_REMOVE_MEMBER = "conf_by_remove_member", e.CONF_BY_DOWNGRADE_MEMBER = "conf_by_downgrade_member", e.CONF_BY_MANAGE_ACCESS = "conf_by_manage_access", e.CONF_BY_UNDO_AFTER_RESTORE_ACCESS = "conf_by_undo_after_restore_access", e.CONF_BY_CREATE_CONFIDENTIAL_FOLDER = "conf_by_create_confidential_folder", e.ADD_MORE_FILES_CLICK = "add_more_files_click", e.CLOSE_MODAL_CLICK = "close_modal_click", e.UPLOAD_BUTTON_CLICK = "upload_button_click", e.VIEW_DETAILS_CLICK = "view_details_click", e.CANCEL_UPLOAD_CLICK = "cancel_upload_click", e.UPLOAD_CLICK = "upload_click", e.UPLOAD_FILES_CLICK = "upload_files_click", e.UPLOAD_FOLDER_CLICK = "upload_folder_click", e.CREATE_COLLECTION_SUCCESS = "create_collection_success", e.CREATE_COLLECTION_FAIL = "create_collection_fail", e.FILE_CREATE_OPEN_MENU = "file_create_open_menu", e.FILE_CREATE_WORD = "file_create_word", e.FILE_CREATE_POWERPOINT = "file_create_powerpoint", e.FILE_CREATE_EXCEL = "file_create_excel", e.FILE_CREATE_HOME_FOLDER_SELECTED = "file_create_home_folder_selected", e.FILE_CREATE_SUCCESS = "file_create_success", e.FILE_CREATE_PAPER = "file_create_paper", e.FILE_CREATE_PAPER_TEMPLATE = "file_create_paper_template", e.FILE_CREATE_BINDER = "file_create_binder", e.FILE_CREATE_GOOGLE_DOC = "file_create_google_doc", e.FILE_CREATE_GOOGLE_SHEET = "file_create_google_sheet", e.FILE_CREATE_GOOGLE_SLIDES = "file_create_google_slides", e.FILE_CREATE_SIMPLE_POINTER = "file_create_simple_pointer", e.FILE_OPEN_PROMPT_ACTION = "file_open_prompt_action", e.FOLDER_OVERVIEW_TOGGLED = "folder_overview_toggled", e.FOLDER_OVERVIEW_EDITED = "folder_overview_edited", e.FOLDER_OVERVIEW_DESCRIPTION_SAVE = "folder_overview_description_save", e.FOLDER_OVERVIEW_UNPIN = "folder_overview_unpin", e.FOLDER_OVERVIEW_PIN = "folder_overview_pin", e.FOLDER_OVERVIEW_PIN_CLICK = "folder_overview_pin_click", e.FOLDER_OVERVIEW_EXAMPLES_CLICK = "folder_overview_examples_click", e.FOLDER_OVERVIEW_TASK_COMPLETED = "folder_overview_task_completed", e.LOCK_FILE = "lock_file", e.UNLOCK_FILE = "unlock_file", e.REQUEST_UNLOCK_FILE = "request_unlock", e.PAGE_VIEW = "page_view"
    })(t.WebUserActionLogEvent || (t.WebUserActionLogEvent = {}));
    (function(e) {
        e.SHARED_FOLDER = "shared folder", e.FILE_FOLDER = "file folder", e.EVERYONE_GROUP_VIEW_ACCESS = "everyone group view access", e.SPECIFIC_PEOPLE = "specific people", e.BROWSE = "browse", e.CONTENT_MANAGER = "content manager"
    })(t.WebUserActionLogExtraValue || (t.WebUserActionLogExtraValue = {}));
    (function(e) {
        e.BROWSE = "browse", e.SEARCH = "search"
    })(t.RetrievalSourceValue || (t.RetrievalSourceValue = {}));
    (function(e) {
        e.OVERFLOW_MENU = "overflow_menu", e.RIGHT_SIDEBAR = "right_sidebar", e.CENTER_PANE = "center_pane"
    })(t.ActionSurfaceLogValue || (t.ActionSurfaceLogValue = {}));
    (function(e) {
        e.ROW_SINGLE_CLICK = "row_single_click", e.ROW_DOUBLE_CLICK = "row_double_click", e.ROW_TITLE = "row_title", e.ROW_PREVIEW_ICON = "row_preview_icon", e.FOLDER_OVERVIEW = "folder_overview", e.KEYBOARD = "keyboard"
    })(t.ActionSourceValue || (t.ActionSourceValue = {}))
}), define("modules/clean/web_user_action_logger", ["require", "exports", "tslib", "modules/clean/ajax"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), t.MAX_ERRORS = 3;
    var o = (function() {
        function e() {
            this.errorCount = 0, this.lastError = Date.now(), this.shouldReport = !0
        }
        return e.prototype.log = function(e, r, o) {
            var i = this;
            return this.shouldReport && (this.errorCount < t.MAX_ERRORS || Date.now() - this.lastError > 6e5) ? new Promise(function(s, a) {
                n.SilentBackgroundRequest({
                    url: "/log/web_user_action",
                    data: {
                        _subject_uid: e,
                        event_type: r,
                        extra_params: JSON.stringify(o)
                    },
                    error: function(e) {
                        429 === e.status ? i.errorCount = t.MAX_ERRORS : i.errorCount++, i.lastError = Date.now(), a(e)
                    },
                    success: function(e) {
                        try {
                            var t = JSON.parse(e);
                            t && !t.continue_sending && (i.shouldReport = !1), i.errorCount = 0, s(e)
                        } catch (e) {
                            throw i.errorCount++, i.lastError = Date.now(), a(e), e
                        }
                    }
                })
            }) : Promise.resolve({})
        }, e
    })();
    t.WebUserActionLogClass = o, t.WebUserActionLog = new o
});
//# sourceMappingURL=pkg-embedded_app.min.js-vfl-hjTcZ.map