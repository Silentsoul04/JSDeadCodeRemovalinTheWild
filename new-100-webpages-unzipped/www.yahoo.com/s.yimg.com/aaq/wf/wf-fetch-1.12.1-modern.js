! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("wafer-fetch", [], e) : "object" == typeof exports ? exports["wafer-fetch"] = e() : (t.wafer = t.wafer || {}, t.wafer.wafers = t.wafer.wafers || {}, t.wafer.wafers["wafer-fetch"] = e())
}("undefined" != typeof self ? self : this, function() {
    return function(t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var r = {};
        return e.m = t, e.c = r, e.d = function(t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, e.n = function(t) {
            var r = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "https://s.yimg.com/aaq/wf/", e(e.s = "./src/entry.js")
    }({
        "./src/entry.js": function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function o(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function a(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var u = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                },
                l = function() {
                    function t(t, e) {
                        var r = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return r
                    }
                    return function(e, r) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return t(e, r);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                f = function() {
                    function t(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, r, n) {
                        return r && t(e.prototype, r), n && t(e, n), e
                    }
                }(),
                h = function t(e, r, n) {
                    null === e && (e = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(e, r);
                    if (void 0 === i) {
                        var o = Object.getPrototypeOf(e);
                        return null === o ? void 0 : t(o, r, n)
                    }
                    if ("value" in i) return i.value;
                    var a = i.get;
                    if (void 0 !== a) return a.call(n)
                },
                d = window.wafer,
                y = d.base,
                v = d.constants,
                p = d.utils,
                m = d.WaferBaseClass,
                g = v.ATTR_PREFIX,
                b = p.convertNodeListToArray,
                _ = p.fetchWithCache,
                w = p.findAncestor,
                C = p.loadScriptAsync,
                T = ["handleFetchClick"],
                k = ["body", "cacheKey", "target", "url"],
                A = function(t) {
                    function e(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = r.errorClass,
                            a = r.selector,
                            s = r.successClass;
                        n(this, e);
                        var c = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, {
                                errorClass: o,
                                selector: a,
                                successClass: s
                            }, {
                                STATE_ATTRS: k
                            })),
                            f = c._util.url || t.getAttribute(g + "url"),
                            h = t.getAttribute(g + "boundary"),
                            d = t.getAttribute(g + "cache"),
                            v = c._util.cacheKey || t.getAttribute(g + "cache-key"),
                            p = t.getAttribute(g + "cache-strategy") || "networkFirst",
                            m = t.getAttribute(g + "cache-ttl"),
                            _ = t.getAttribute(g + "delay"),
                            C = t.getAttribute(g + "replace"),
                            A = t.getAttribute(g + "result-selector"),
                            O = t.getAttribute(g + "dependency"),
                            j = O && document.querySelector(O),
                            S = t.getAttribute(g + "silent"),
                            E = t.getAttribute(g + "target"),
                            I = t.getAttribute(g + "timeout"),
                            L = t.getAttribute(g + "type") || "default",
                            P = (t.getAttribute(g + "trigger-offset") || "").split(" "),
                            x = l(P, 2),
                            N = x[0],
                            R = x[1],
                            M = t.getAttribute(g + "trigger") || "viewport",
                            W = c._util.body || t.getAttribute(g + "body"),
                            D = t.getAttribute(g + "retry-count"),
                            q = t.getAttribute(g + "session-retry-count"),
                            F = !1;
                        if (D = null === D || void 0 === D ? null : Number(D), q = null === q || void 0 === q ? null : Number(q), y.isIORetrySupported ? q && (q = Math.min(q, 3)) : ("interval" === M && (M = "delay"), q = null), !D) switch (M) {
                            case "interval":
                            case "onLoad":
                            case "stateChange":
                            case "viewport":
                                D = 2
                        }
                        if ("activate" !== M && "eachClick" !== M && "interval" !== M && "stateChange" !== M && "tabActivate" !== M || (F = !0), !W) {
                            var X = b(t.getElementsByClassName("fetch-body")),
                                H = l(X, 1),
                                K = H[0],
                                Y = void 0 === K ? null : K;
                            Y && (W = Y.innerHTML)
                        }
                        return c._util = u({}, c._util, {
                            body: W,
                            cache: null === d || void 0 === d ? 1 : Number(d),
                            cacheKey: v,
                            cacheStrategy: p,
                            cacheTtl: null === m || void 0 === m ? 60 : Number(m),
                            delay: null === _ || void 0 === _ ? 1e4 : Number(_),
                            dependencyElem: j,
                            timeout: null === I || void 0 === I ? 6e3 : Number(I),
                            elem: t,
                            errorClass: o,
                            hasClick: "eachClick" === M || "click" === M,
                            offsetX: Number(R) || 0,
                            offsetY: Number(N) || 0,
                            replace: null === C || void 0 === C ? 0 : Number(C),
                            resultSelector: A,
                            retryCount: D,
                            targetElem: E && (h && w(t, h) || document.body).querySelector(E) || t,
                            selector: a,
                            sessionRetryCount: q,
                            shouldAlwaysTrigger: F,
                            trigger: M,
                            type: L,
                            url: f,
                            silent: null === S || void 0 === S ? 0 : Number(S),
                            successClass: s
                        }), c._state = {
                            retries: 0,
                            status: status
                        }, T.forEach(function(t) {
                            c[t] = c[t].bind(c)
                        }), c
                    }
                    return o(e, t), f(e, [{
                        key: "fetchDependency",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                r = this._util.dependencyElem;
                            return new Promise(function(n) {
                                if (!r) return void n();
                                setTimeout(function() {
                                    var i = void 0;
                                    if (window.wafer.base._wafers.some(function(t) {
                                            var e = t._options;
                                            return !(!e || "wafer-fetch" !== e.selector) && (i = t, !0)
                                        }), !i) return n();
                                    var o = i._state.elementInstances.get(r) || {},
                                        a = o.instance;
                                    if (!a) return n();
                                    var s = a._state.status;
                                    if (s) return n();
                                    e < 5 && 0 === s && setTimeout(function() {
                                        t.fetchDependency(e++).then(function() {
                                            n()
                                        })
                                    }, 100 * (e + 1)), s || i.trigger(r).then(function() {
                                        t._util.dependencyElem = null, setTimeout(function() {
                                            n()
                                        }, 20)
                                    }).catch(function() {
                                        t._util.status = void 0
                                    })
                                }, 0)
                            })
                        }
                    }, {
                        key: "fetch",
                        value: function() {
                            var t = this,
                                r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = r.disable,
                                i = void 0 === n || n,
                                o = r.currentSessionRetryCount,
                                a = void 0 === o ? 0 : o,
                                s = this._util,
                                c = s.elem,
                                u = s.shouldAlwaysTrigger,
                                l = s.successClass;
                            if (!u && c.classList.contains(l)) return Promise.resolve(!0);
                            var f = this._util,
                                h = f.errorClass,
                                d = f.replace,
                                v = f.resultSelector,
                                p = f.selector,
                                m = f.sessionRetryCount,
                                g = f.silent,
                                b = f.targetElem,
                                w = f.timeout,
                                C = f.type,
                                T = void 0;
                            if (0 !== this._state.status) {
                                var k = this._state.retries,
                                    A = {};
                                return c.classList.add("wafer-fetch-trigger-inprogress"), b.classList.add("wafer-fetch-target-inprogress"), k && (A.retries = k), this._state.status = 0, this.fetchDependency().then(function() {
                                    T = t._util.url;
                                    var e = t._util,
                                        r = e.body,
                                        n = e.cache,
                                        i = e.cacheKey,
                                        o = e.cacheStrategy,
                                        a = e.cacheTtl;
                                    return _(T, {
                                        body: r,
                                        cache: n,
                                        cacheKey: i,
                                        cacheStrategy: o,
                                        cacheTtl: a,
                                        paramsToNotCache: A,
                                        timeout: w
                                    })
                                }).then(function(r) {
                                    var n = C.length ? C[0].toUpperCase() + C.slice(1) : "",
                                        o = t["handle" + n],
                                        a = r._fetchMeta || {},
                                        s = a.duration,
                                        f = a.source;
                                    if (i && (u || c.classList.remove(p.replace(".", "")), c.classList.remove(h), c.classList.remove("wafer-fetch-trigger-inprogress"), c.classList.add(l), b.classList.remove("wafer-fetch-target-inprogress")), g) t._state.status = 1;
                                    else {
                                        y.destroy(b, {
                                            destroySelf: !u
                                        });
                                        var m = void 0,
                                            _ = r.html,
                                            w = void 0 === _ ? r.markup : _;
                                        if (v) {
                                            var k = document.createElement("div");
                                            k.innerHTML = w;
                                            var A = k.querySelector(v);
                                            w = A && A.innerHTML || w
                                        }
                                        if (d) {
                                            var O = b.parentNode;
                                            b.insertAdjacentHTML("beforebegin", w), O.removeChild(b), m = O
                                        } else b.innerHTML = w, m = b;
                                        o && (o.call(t, m), window.wafer.___debugContent && window.wafer.___debugContent(r.html || r.markup))
                                    }
                                    return t._state.retries = 0, y.emitLog({
                                        name: e.constructor.name,
                                        elem: c,
                                        meta: {
                                            duration: s,
                                            source: f,
                                            url: T
                                        }
                                    }), y.emitWaferEvent("fetch:success", {
                                        elem: c,
                                        meta: {
                                            duration: s,
                                            source: f,
                                            url: T
                                        }
                                    }), !0
                                }).catch(function(r) {
                                    if (T = t._util.url, ++a, m && a < m) return t._state.status = 2, c.setAttribute("data-wf-session-retry-counter", a), setTimeout(function() {
                                        t.fetch({
                                            disable: i,
                                            currentSessionRetryCount: a
                                        })
                                    }, w * (a + 1)), !1;
                                    var n = t._util.retryCount;
                                    return y.emitError({
                                        name: e.constructor.name,
                                        elem: c,
                                        meta: {
                                            url: T
                                        },
                                        stack: r.stack
                                    }), c.classList.remove("wafer-fetch-trigger-inprogress"), c.classList.add(h), b.classList.remove("wafer-fetch-target-inprogress"), t._state.status = 2, ++t._state.retries === n && (y.destroy(b), !0)
                                })
                            }
                            return Promise.resolve(!1)
                        }
                    }, {
                        key: "handleDefault",
                        value: function(t) {
                            this._state.status = 1, y.sync(t)
                        }
                    }, {
                        key: "handleTdv1",
                        value: function(t) {
                            this._util.head = this._util.head || document.getElementsByTagName("head")[0];
                            var e = this._util.head;
                            b(t.querySelectorAll("script")).forEach(function(t) {
                                var r = t.getAttribute("type") || "text/javascript",
                                    n = t.innerText;
                                n && "text/javascript" === r && (e.appendChild(t), C({
                                    type: r,
                                    text: n
                                }, function(r) {
                                    r || e.removeChild(t)
                                }))
                            }), this._state.status = 1, y.sync(t)
                        }
                    }, {
                        key: "stateDidUpdate",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = t.stateAttr,
                                r = this._util.trigger;
                            if ("target" === e) {
                                var n = this._util,
                                    i = n.boundary,
                                    o = n.elem,
                                    a = n.target,
                                    s = n.targetElem;
                                this._util.targetElem = a && (i && w(o, i) || document.body).querySelector(a) || s
                            }
                            if ("stateChange" === r) {
                                var c = this._util.retryCount;
                                if (this._state.retries === c) return;
                                return void this.fetch()
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var t = this._util.timeoutInstance;
                            t && (clearTimeout(t), this._util.timeoutInstance = null), h(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "handleFetchClick",
                        value: function(t) {
                            this._util.hasClick && this.fetch()
                        }
                    }, {
                        key: "config",
                        get: function() {
                            var t = this._util;
                            return {
                                delay: t.delay,
                                offsetX: t.offsetX,
                                offsetY: t.offsetY,
                                trigger: t.trigger
                            }
                        }
                    }]), e
                }(m);
            A.events = {
                click: [
                    ["has-fetch-click", "handleFetchClick"]
                ]
            };
            var O = A,
                j = function() {
                    function t(t, e) {
                        var r = [],
                            n = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
                        } catch (t) {
                            i = !0, o = t
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return r
                    }
                    return function(e, r) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e)) return t(e, r);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                S = function() {
                    function t(t, e) {
                        for (var r = 0; r < e.length; r++) {
                            var n = e[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, r, n) {
                        return r && t(e.prototype, r), n && t(e, n), e
                    }
                }(),
                E = this,
                I = window.wafer.utils,
                L = I.elementInView,
                P = I.throttle,
                x = window.wafer.base,
                N = window.wafer.controllers.WaferBaseController,
                R = function(t, e, r) {
                    var n = parseInt(e.getAttribute("data-wf-fetch-iteration-count"), 10) || 0;
                    return e.setAttribute("data-wf-fetch-iteration-count", n + 1), clearTimeout(t._util.timeoutInstance), t._util.timeoutInstance = null, M.call(E, t, e, r)
                },
                M = function(t, e, r) {
                    !t._util.timeoutInstance && (t._util.timeoutInstance = setTimeout(function() {
                        t.fetch().then(function() {
                            return R.call(E, t, e, r)
                        }).catch(function() {
                            return R.call(E, t, e, r)
                        })
                    }, r))
                },
                W = function(t) {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = t.errorClass,
                            n = void 0 === r ? "wafer-fetch-error" : r,
                            i = t.root,
                            o = void 0 === i ? document : i,
                            c = t.selector,
                            u = t.successClass,
                            l = void 0 === u ? "wafer-fetch-complete" : u,
                            f = t.validateDelay,
                            h = void 0 === f ? 25 : f;
                        a(this, e);
                        var d = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                            root: o,
                            selector: c,
                            props: {
                                errorClass: n,
                                selector: c,
                                successClass: l
                            },
                            WaferClass: O
                        }));
                        return d._validateWithThrottle = P(function() {
                            d.validate()
                        }, h, d), d.sync(), d
                    }
                    return c(e, t), S(e, [{
                        key: "handleScroll",
                        value: function() {
                            this._validateWithThrottle()
                        }
                    }, {
                        key: "handleResize",
                        value: function() {
                            this._validateWithThrottle()
                        }
                    }, {
                        key: "handleVisibilityChange",
                        value: function() {
                            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                e = this._state.elementInstances,
                                r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o, a = e.entries()[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                                    var s = o.value,
                                        c = j(s, 2),
                                        u = c[0],
                                        l = c[1],
                                        f = l.instance,
                                        h = f.config,
                                        d = h.delay;
                                    switch (h.trigger) {
                                        case "interval":
                                            t ? M.call(this, f, u, d) : (clearTimeout(f._util.timeoutInstance), f._util.timeoutInstance = null)
                                    }
                                }
                            } catch (t) {
                                n = !0, i = t
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        }
                    }, {
                        key: "didSync",
                        value: function() {
                            var t = this._state,
                                e = t.elementInstances,
                                r = t.mounted;
                            0 === e.size || r || (this._state.mounted = !0)
                        }
                    }, {
                        key: "trigger",
                        value: function(t) {
                            var e = this._state.elementInstances,
                                r = e.get(t);
                            return new Promise(function(t) {
                                if (r) {
                                    var e = r.instance;
                                    if (!e) return t();
                                    e.fetch().then(function(r) {
                                        if (!r) return t();
                                        var n = e.config.trigger;
                                        return "viewport" !== n && "onLoad" !== n || e.destroy(), t()
                                    }).catch(function() {
                                        return t()
                                    })
                                }
                            })
                        }
                    }, {
                        key: "willValidate",
                        value: function() {
                            var t = this,
                                e = this._state.elementInstances,
                                r = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var o, a = e.entries()[Symbol.iterator](); !(r = (o = a.next()).done); r = !0) {
                                    var s = o.value,
                                        c = j(s, 2),
                                        u = c[0],
                                        l = c[1];
                                    ! function(e, r) {
                                        var n = r.instance,
                                            i = n.config,
                                            o = i.delay,
                                            a = i.trigger,
                                            s = i.offsetX,
                                            c = i.offsetY;
                                        switch (a) {
                                            case "delay":
                                                !n._util.timeoutInstance && (n._util.timeoutInstance = setTimeout(function() {
                                                    n.fetch().then(function(t) {
                                                        clearTimeout(n._util.timeoutInstance), t && n.destroy()
                                                    }).catch(function() {
                                                        clearTimeout(n._util.timeoutInstance)
                                                    })
                                                }, o));
                                                break;
                                            case "interval":
                                                M.call(t, n, e, o);
                                                break;
                                            case "viewport":
                                                L(e, {
                                                    offsetX: s,
                                                    offsetY: c
                                                }, x.viewport) && n.fetch().then(function(t) {
                                                    t && n.destroy()
                                                });
                                                break;
                                            case "onLoad":
                                                n.fetch().then(function(t) {
                                                    t && n.destroy()
                                                });
                                                break;
                                            case "click":
                                            case "eachClick":
                                                e.classList.add("has-fetch-click")
                                        }
                                    }(u, l)
                                }
                            } catch (t) {
                                n = !0, i = t
                            } finally {
                                try {
                                    !r && a.return && a.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        }
                    }]), e
                }(N),
                D = W;
            e.default = new D({
                selector: "wafer-fetch"
            })
        }
    })
});