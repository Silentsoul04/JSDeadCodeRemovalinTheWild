! function() {
    function i() {
        for (; 0 < window.promisePolyfillQueue.length;) try {
            window.promisePolyfillQueue.shift()()
        } catch (e) {
            window.onerror && window.onerror(e.message, e.fileName, e.lineNumber, e.columnNumber, e)
        }
    }

    function e() {
        ! function(n) {
            var r = {};

            function o(e) {
                if (r[e]) return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
            }
            o.m = n, o.c = r, o.d = function(e, t, n) {
                o.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: n
                })
            }, o.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, o.t = function(t, e) {
                if (1 & e && (t = o(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var n = Object.create(null);
                if (o.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) o.d(n, r, function(e) {
                        return t[e]
                    }.bind(null, r));
                return n
            }, o.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return o.d(t, "a", t), t
            }, o.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, o.p = "https://d3fw5vlhllyvee.cloudfront.net/frontend-sentry-bundle/v1.1.2/", o(o.s = 16)
        }([function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__extends", function() {
                return o
            }), n.d(t, "__assign", function() {
                return i
            }), n.d(t, "__rest", function() {
                return a
            }), n.d(t, "__decorate", function() {
                return u
            }), n.d(t, "__param", function() {
                return s
            }), n.d(t, "__metadata", function() {
                return c
            }), n.d(t, "__awaiter", function() {
                return l
            }), n.d(t, "__generator", function() {
                return f
            }), n.d(t, "__exportStar", function() {
                return p
            }), n.d(t, "__values", function() {
                return d
            }), n.d(t, "__read", function() {
                return h
            }), n.d(t, "__spread", function() {
                return v
            }), n.d(t, "__await", function() {
                return g
            }), n.d(t, "__asyncGenerator", function() {
                return y
            }), n.d(t, "__asyncDelegator", function() {
                return m
            }), n.d(t, "__asyncValues", function() {
                return _
            }), n.d(t, "__makeTemplateObject", function() {
                return b
            }), n.d(t, "__importStar", function() {
                return E
            }), n.d(t, "__importDefault", function() {
                return w
            });
            var r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };

            function o(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function a(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && (n[r[o]] = e[r[o]])
                }
                return n
            }

            function u(e, t, n, r) {
                var o, i = arguments.length,
                    a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                else
                    for (var u = e.length - 1; 0 <= u; u--)(o = e[u]) && (a = (i < 3 ? o(a) : 3 < i ? o(t, n, a) : o(t, n)) || a);
                return 3 < i && a && Object.defineProperty(t, n, a), a
            }

            function s(n, r) {
                return function(e, t) {
                    r(e, t, n)
                }
            }

            function c(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(i, a, u, s) {
                return new(u || (u = Promise))(function(e, t) {
                    function n(e) {
                        try {
                            o(s.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function r(e) {
                        try {
                            o(s.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function o(t) {
                        t.done ? e(t.value) : new u(function(e) {
                            e(t.value)
                        }).then(n, r)
                    }
                    o((s = s.apply(i, a || [])).next())
                })
            }

            function f(n, r) {
                var o, i, a, e, u = {
                    label: 0,
                    sent: function() {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                }, "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                    return this
                }), e;

                function t(t) {
                    return function(e) {
                        return function(t) {
                            if (o) throw new TypeError("Generator is already executing.");
                            for (; u;) try {
                                if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                                switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                                    case 0:
                                    case 1:
                                        a = t;
                                        break;
                                    case 4:
                                        return u.label++, {
                                            value: t[1],
                                            done: !1
                                        };
                                    case 5:
                                        u.label++, i = t[1], t = [0];
                                        continue;
                                    case 7:
                                        t = u.ops.pop(), u.trys.pop();
                                        continue;
                                    default:
                                        if (!(a = 0 < (a = u.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                            u = 0;
                                            continue
                                        }
                                        if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                            u.label = t[1];
                                            break
                                        }
                                        if (6 === t[0] && u.label < a[1]) {
                                            u.label = a[1], a = t;
                                            break
                                        }
                                        if (a && u.label < a[2]) {
                                            u.label = a[2], u.ops.push(t);
                                            break
                                        }
                                        a[2] && u.ops.pop(), u.trys.pop();
                                        continue
                                }
                                t = r.call(n, u)
                            } catch (e) {
                                t = [6, e], i = 0
                            } finally {
                                o = a = 0
                            }
                            if (5 & t[0]) throw t[1];
                            return {
                                value: t[0] ? t[1] : void 0,
                                done: !0
                            }
                        }([t, e])
                    }
                }
            }

            function p(e, t) {
                for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function d(e) {
                var t = "function" == typeof Symbol && e[Symbol.iterator],
                    n = 0;
                return t ? t.call(e) : {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                }
            }

            function h(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || 0 < t--) && !(r = i.next()).done;) a.push(r.value)
                } catch (e) {
                    o = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function v() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
                return e
            }

            function g(e) {
                return this instanceof g ? (this.v = e, this) : new g(e)
            }

            function y(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var o, i = n.apply(e, t || []),
                    a = [];
                return o = {}, r("next"), r("throw"), r("return"), o[Symbol.asyncIterator] = function() {
                    return this
                }, o;

                function r(r) {
                    i[r] && (o[r] = function(n) {
                        return new Promise(function(e, t) {
                            1 < a.push([r, n, e, t]) || u(r, n)
                        })
                    })
                }

                function u(e, t) {
                    try {
                        ! function(e) {
                            e.value instanceof g ? Promise.resolve(e.value.v).then(s, c) : l(a[0][2], e)
                        }(i[e](t))
                    } catch (e) {
                        l(a[0][3], e)
                    }
                }

                function s(e) {
                    u("next", e)
                }

                function c(e) {
                    u("throw", e)
                }

                function l(e, t) {
                    e(t), a.shift(), a.length && u(a[0][0], a[0][1])
                }
            }

            function m(r) {
                var e, o;
                return e = {}, t("next"), t("throw", function(e) {
                    throw e
                }), t("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function t(t, n) {
                    e[t] = r[t] ? function(e) {
                        return (o = !o) ? {
                            value: g(r[t](e)),
                            done: "return" === t
                        } : n ? n(e) : e
                    } : n
                }
            }

            function _(o) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, t = o[Symbol.asyncIterator];
                return t ? t.call(o) : (o = d(o), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function n(r) {
                    e[r] = o[r] && function(n) {
                        return new Promise(function(e, t) {
                            (function(t, e, n, r) {
                                Promise.resolve(r).then(function(e) {
                                    t({
                                        value: e,
                                        done: n
                                    })
                                }, e)
                            })(e, t, (n = o[r](n)).done, n.value)
                        })
                    }
                }
            }

            function b(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function E(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(4),
                o = r.getGlobalObject(),
                i = new(function() {
                    function e() {
                        this.enabled = !1
                    }
                    return e.prototype.disable = function() {
                        this.enabled = !1
                    }, e.prototype.enable = function() {
                        this.enabled = !0
                    }, e.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.enabled && r.consoleSandbox(function() {
                            o.console.log("Sentry Logger [Log]: " + e.join(" "))
                        })
                    }, e.prototype.warn = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.enabled && r.consoleSandbox(function() {
                            o.console.warn("Sentry Logger [Warn]: " + e.join(" "))
                        })
                    }, e.prototype.error = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.enabled && r.consoleSandbox(function() {
                            o.console.error("Sentry Logger [Error]: " + e.join(" "))
                        })
                    }, e
                }());
            t.logger = i
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(12);
            t.addGlobalEventProcessor = r.addGlobalEventProcessor, t.Scope = r.Scope;
            var o = n(21);
            t.getCurrentHub = o.getCurrentHub, t.getHubFromCarrier = o.getHubFromCarrier, t.getMainCarrier = o.getMainCarrier, t.Hub = o.Hub, t.setHubOnCarrier = o.setHubOnCarrier
        }, function(e, t, n) {
            "use strict";

            function r(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isError = function(e) {
                switch (Object.prototype.toString.call(e)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return e instanceof Error
                }
            }, t.isErrorEvent = function(e) {
                return "[object ErrorEvent]" === Object.prototype.toString.call(e)
            }, t.isDOMError = function(e) {
                return "[object DOMError]" === Object.prototype.toString.call(e)
            }, t.isDOMException = function(e) {
                return "[object DOMException]" === Object.prototype.toString.call(e)
            }, t.isUndefined = function(e) {
                return void 0 === e
            }, t.isFunction = function(e) {
                return "function" == typeof e
            }, t.isString = function(e) {
                return "[object String]" === Object.prototype.toString.call(e)
            }, t.isPrimitive = function(e) {
                return null === e || "object" != typeof e && "function" != typeof e
            }, t.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, t.isPlainObject = r, t.isRegExp = function(e) {
                return "[object RegExp]" === Object.prototype.toString.call(e)
            }, t.isNaN = function(e) {
                return e != e
            }, t.isSyntheticEvent = function(e) {
                return r(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
            }
        }, function(e, o, a) {
            "use strict";
            (function(e, t) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                });
                var s = a(3);

                function n() {
                    return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0)
                }
                o.dynamicRequire = function(e, t) {
                    return e.require(t)
                }, o.isNodeEnv = n;
                var r = {};

                function i() {
                    return n() ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : r
                }

                function u(e) {
                    var t, n, r, o, i, a = [];
                    if (!e || !e.tagName) return "";
                    if (a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), (t = e.className) && s.isString(t))
                        for (n = t.split(/\s+/), i = 0; i < n.length; i++) a.push("." + n[i]);
                    var u = ["type", "name", "title", "alt"];
                    for (i = 0; i < u.length; i++) r = u[i], (o = e.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                    return a.join("")
                }
                o.getGlobalObject = i, o.uuid4 = function() {
                    var e = i(),
                        t = e.crypto || e.msCrypto;
                    if (void 0 !== t && t.getRandomValues) {
                        var n = new Uint16Array(8);
                        t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                        var r = function(e) {
                            for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                            return t
                        };
                        return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                    }
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    })
                }, o.htmlTreeAsString = function(e) {
                    for (var t, n = e, r = [], o = 0, i = 0, a = " > ".length; n && o++ < 5 && !("html" === (t = u(n)) || 1 < o && 80 <= i + r.length * a + t.length);) r.push(t), i += t.length, n = n.parentNode;
                    return r.reverse().join(" > ")
                }, o.htmlElementAsString = u, o.parseUrl = function(e) {
                    if (!e) return {};
                    var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!t) return {};
                    var n = t[6] || "",
                        r = t[8] || "";
                    return {
                        host: t[4],
                        path: t[5],
                        protocol: t[2],
                        relative: t[5] + n + r
                    }
                }, o.getEventDescription = function(e) {
                    if (e.message) return e.message;
                    if (e.exception && e.exception.values && e.exception.values[0]) {
                        var t = e.exception.values[0];
                        return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
                    }
                    return e.event_id || "<unknown>"
                }, o.consoleSandbox = function(e) {
                    var t = i();
                    if (!("console" in t)) return e();
                    var n = t.console,
                        r = {};
                    ["debug", "info", "warn", "error", "log"].forEach(function(e) {
                        e in t.console && n[e].__sentry__ && (r[e] = n[e].__sentry_wrapped__, n[e] = n[e].__sentry_original__)
                    });
                    var o = e();
                    return Object.keys(r).forEach(function(e) {
                        n[e] = r[e]
                    }), o
                }
            }).call(this, a(11), a(8))
        }, function(e, v, g) {
            "use strict";
            (function(n) {
                Object.defineProperty(v, "__esModule", {
                    value: !0
                });
                var u = g(3),
                    s = g(20),
                    o = g(9);

                function i(e) {
                    return JSON.stringify(e, r({
                        normalize: !1
                    }))
                }

                function t(e) {
                    return JSON.parse(e)
                }
                v.serialize = i, v.deserialize = t, v.clone = function(e) {
                    return t(i(e))
                }, v.fill = function(e, t, n) {
                    if (t in e && !e[t].__sentry__) {
                        var r = e[t],
                            o = n(r);
                        "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                            __sentry__: {
                                enumerable: !1,
                                value: !0
                            },
                            __sentry_original__: {
                                enumerable: !1,
                                value: r
                            },
                            __sentry_wrapped__: {
                                enumerable: !1,
                                value: o
                            }
                        })), e[t] = o
                    }
                }, v.urlEncode = function(t) {
                    return Object.keys(t).map(function(e) {
                        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                    }).join("&")
                };
                var a = 3,
                    c = 102400;

                function l(e) {
                    return function(e) {
                        return ~-encodeURI(e).split(/%..|./).length
                    }(JSON.stringify(e))
                }

                function f(e) {
                    var t = Object.prototype.toString.call(e);
                    if ("string" == typeof e) return o.truncate(e, 40);
                    if ("[object Object]" === t) return "[Object]";
                    if ("[object Array]" === t) return "[Array]";
                    var n = d(e);
                    return u.isPrimitive(n) ? "" + n : t
                }

                function p(e, t) {
                    if (0 === t) return f(e);
                    if (u.isPlainObject(e)) {
                        var n = {},
                            r = e;
                        return Object.keys(r).forEach(function(e) {
                            n[e] = p(r[e], t - 1)
                        }), n
                    }
                    return u.isArray(e) ? e.map(function(e) {
                        return p(e, t - 1)
                    }) : f(e)
                }

                function d(e, t) {
                    return "domain" === t && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== n && e === n ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : "undefined" != typeof Event && e instanceof Event ? Object.getPrototypeOf(e) ? e.constructor.name : "Event" : u.isSyntheticEvent(e) ? "[SyntheticEvent]" : u.isNaN(e) ? "[NaN]" : u.isUndefined(e) ? "[undefined]" : "function" == typeof e ? "[Function: " + (e.name || "<unknown-function-name>") + "]" : e
                }

                function h(e, t, n) {
                    if (void 0 === t && (t = 1 / 0), void 0 === n && (n = new s.Memo), 0 === t) return f(e);
                    var r = d(e);
                    if (u.isPrimitive(r)) return r;
                    var o = u.isError(e) ? function(e) {
                            var t = {
                                message: e.message,
                                name: e.name,
                                stack: e.stack
                            };
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                            return t
                        }(e) : e,
                        i = u.isArray(e) ? [] : {};
                    if (n.memoize(e)) return "[Circular ~]";
                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = h(o[a], t - 1, n));
                    return n.unmemoize(e), i
                }

                function r(n) {
                    return void 0 === n && (n = {
                            normalize: !0
                        }),
                        function(e, t) {
                            return n.normalize ? d(h(t, n.depth), e) : h(t, n.depth)
                        }
                }
                v.serializeObject = p, v.limitObjectDepthToSize = function e(t, n, r) {
                    void 0 === n && (n = a), void 0 === r && (r = c);
                    var o = p(t, n);
                    return l(i(o)) > r ? e(t, n - 1) : o
                }, v.serializeKeysToEventMessage = function(e, t) {
                    if (void 0 === t && (t = 40), !e.length) return "[object has no keys]";
                    if (e[0].length >= t) return o.truncate(e[0], t);
                    for (var n = e.length; 0 < n; n--) {
                        var r = e.slice(0, n).join(", ");
                        if (!(r.length > t)) return n === e.length ? r : o.truncate(r, t)
                    }
                    return ""
                }, v.assign = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var r = Object(e), o = 0; o < t.length; o++) {
                        var i = t[o];
                        if (null !== i)
                            for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
                    }
                    return r
                }, v.decycle = h, v.safeNormalize = function(e, t) {
                    try {
                        return JSON.parse(JSON.stringify(e, r({
                            normalize: !0,
                            depth: t
                        })))
                    } catch (e) {
                        return "**non-serializable**"
                    }
                }
            }).call(this, g(8))
        }, function(e, Qe, Ze) {
            "use strict";
            (function(e, o) {
                Object.defineProperty(Qe, "__esModule", {
                    value: !0
                });
                var h = Ze(0),
                    f = Ze(18),
                    d = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};

                function t(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
                }

                function n(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports), t.exports
                }
                var r = n(function(e, t) {
                    var n, r, o, i;
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), (n = t.Severity || (t.Severity = {})).Fatal = "fatal", n.Error = "error", n.Warning = "warning", n.Log = "log", n.Info = "info", n.Debug = "debug", n.Critical = "critical", (r = t.Severity || (t.Severity = {})).fromString = function(e) {
                        switch (e) {
                            case "debug":
                                return r.Debug;
                            case "info":
                                return r.Info;
                            case "warn":
                            case "warning":
                                return r.Warning;
                            case "error":
                                return r.Error;
                            case "fatal":
                                return r.Fatal;
                            case "critical":
                                return r.Critical;
                            case "log":
                            default:
                                return r.Log
                        }
                    }, (o = t.Status || (t.Status = {})).Unknown = "unknown", o.Skipped = "skipped", o.Success = "success", o.RateLimit = "rate_limit", o.Invalid = "invalid", o.Failed = "failed", (i = t.Status || (t.Status = {})).fromHttpCode = function(e) {
                        return 200 <= e && e < 300 ? i.Success : 429 === e ? i.RateLimit : 400 <= e && e < 500 ? i.Invalid : 500 <= e ? i.Failed : i.Unknown
                    }
                });
                t(r);
                var p = r.Severity,
                    i = r.Status,
                    v = n(function(e, t) {
                        function n(e) {
                            return "[object Object]" === Object.prototype.toString.call(e)
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.isError = function(e) {
                            switch (Object.prototype.toString.call(e)) {
                                case "[object Error]":
                                case "[object Exception]":
                                case "[object DOMException]":
                                    return !0;
                                default:
                                    return e instanceof Error
                            }
                        }, t.isErrorEvent = function(e) {
                            return "[object ErrorEvent]" === Object.prototype.toString.call(e)
                        }, t.isDOMError = function(e) {
                            return "[object DOMError]" === Object.prototype.toString.call(e)
                        }, t.isDOMException = function(e) {
                            return "[object DOMException]" === Object.prototype.toString.call(e)
                        }, t.isUndefined = function(e) {
                            return void 0 === e
                        }, t.isFunction = function(e) {
                            return "function" == typeof e
                        }, t.isString = function(e) {
                            return "[object String]" === Object.prototype.toString.call(e)
                        }, t.isPrimitive = function(e) {
                            return null === e || "object" != typeof e && "function" != typeof e
                        }, t.isArray = function(e) {
                            return "[object Array]" === Object.prototype.toString.call(e)
                        }, t.isPlainObject = n, t.isRegExp = function(e) {
                            return "[object RegExp]" === Object.prototype.toString.call(e)
                        }, t.isNaN = function(e) {
                            return e != e
                        }, t.isSyntheticEvent = function(e) {
                            return n(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e
                        }
                    });
                t(v);
                var g = v.isError,
                    y = v.isErrorEvent,
                    u = v.isDOMError,
                    s = v.isDOMException,
                    O = v.isUndefined,
                    a = v.isFunction,
                    c = v.isString,
                    l = (v.isPrimitive, v.isArray, v.isPlainObject),
                    m = (v.isRegExp, v.isNaN, v.isSyntheticEvent, n(function(e, t) {
                        function n() {
                            return "[object process]" === Object.prototype.toString.call(void 0 !== o ? o : 0)
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.dynamicRequire = function(e, t) {
                            return e.require(t)
                        }, t.isNodeEnv = n;
                        var r = {};

                        function i() {
                            return n() ? d : "undefined" != typeof window ? window : "undefined" != typeof self ? self : r
                        }

                        function u(e) {
                            var t, n, r, o, i, a = [];
                            if (!e || !e.tagName) return "";
                            if (a.push(e.tagName.toLowerCase()), e.id && a.push("#" + e.id), (t = e.className) && v.isString(t))
                                for (n = t.split(/\s+/), i = 0; i < n.length; i++) a.push("." + n[i]);
                            var u = ["type", "name", "title", "alt"];
                            for (i = 0; i < u.length; i++) r = u[i], (o = e.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                            return a.join("")
                        }
                        t.getGlobalObject = i, t.uuid4 = function() {
                            var e = i(),
                                t = e.crypto || e.msCrypto;
                            if (void 0 !== t && t.getRandomValues) {
                                var n = new Uint16Array(8);
                                t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                                var r = function(e) {
                                    for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                                    return t
                                };
                                return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                            }
                            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                                var t = 16 * Math.random() | 0;
                                return ("x" === e ? t : 3 & t | 8).toString(16)
                            })
                        }, t.htmlTreeAsString = function(e) {
                            for (var t, n = e, r = [], o = 0, i = 0, a = " > ".length; n && o++ < 5 && !("html" === (t = u(n)) || 1 < o && 80 <= i + r.length * a + t.length);) r.push(t), i += t.length, n = n.parentNode;
                            return r.reverse().join(" > ")
                        }, t.htmlElementAsString = u, t.parseUrl = function(e) {
                            if (!e) return {};
                            var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                            if (!t) return {};
                            var n = t[6] || "",
                                r = t[8] || "";
                            return {
                                host: t[4],
                                path: t[5],
                                protocol: t[2],
                                relative: t[5] + n + r
                            }
                        }, t.getEventDescription = function(e) {
                            if (e.message) return e.message;
                            if (e.exception && e.exception.values && e.exception.values[0]) {
                                var t = e.exception.values[0];
                                return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
                            }
                            return e.event_id || "<unknown>"
                        }, t.consoleSandbox = function(e) {
                            var t = i();
                            if (!("console" in t)) return e();
                            var n = t.console,
                                r = {};
                            ["debug", "info", "warn", "error", "log"].forEach(function(e) {
                                e in t.console && n[e].__sentry__ && (r[e] = n[e].__sentry_wrapped__, n[e] = n[e].__sentry_original__)
                            });
                            var o = e();
                            return Object.keys(r).forEach(function(e) {
                                n[e] = r[e]
                            }), o
                        }
                    }));
                t(m);
                m.dynamicRequire, m.isNodeEnv;
                var _ = m.getGlobalObject,
                    b = (m.uuid4, m.htmlTreeAsString),
                    E = (m.htmlElementAsString, m.parseUrl),
                    w = m.getEventDescription,
                    S = (m.consoleSandbox, n(function(e, t) {
                        function n() {
                            if (!("fetch" in m.getGlobalObject())) return !1;
                            try {
                                return new Headers, new Request(""), new Response, !0
                            } catch (e) {
                                return !1
                            }
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.supportsErrorEvent = function() {
                            try {
                                return new ErrorEvent(""), !0
                            } catch (e) {
                                return !1
                            }
                        }, t.supportsDOMError = function() {
                            try {
                                return new DOMError(""), !0
                            } catch (e) {
                                return !1
                            }
                        }, t.supportsDOMException = function() {
                            try {
                                return new DOMException(""), !0
                            } catch (e) {
                                return !1
                            }
                        }, t.supportsFetch = n, t.supportsNativeFetch = function() {
                            return !!n() && -1 !== m.getGlobalObject().fetch.toString().indexOf("native")
                        }, t.supportsReportingObserver = function() {
                            return "ReportingObserver" in m.getGlobalObject()
                        }, t.supportsReferrerPolicy = function() {
                            if (!n()) return !1;
                            try {
                                return new Request("pickleRick", {
                                    referrerPolicy: "origin"
                                }), !0
                            } catch (e) {
                                return !1
                            }
                        }, t.supportsHistory = function() {
                            var e = m.getGlobalObject(),
                                t = e.chrome,
                                n = t && t.app && t.app.runtime,
                                r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                            return !n && r
                        }
                    }));
                t(S);
                S.supportsErrorEvent, S.supportsDOMError, S.supportsDOMException;
                var x = S.supportsFetch,
                    j = S.supportsNativeFetch,
                    k = S.supportsReportingObserver,
                    P = S.supportsReferrerPolicy,
                    I = S.supportsHistory,
                    T = n(function(e, t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function() {
                            function e() {
                                this.hasWeakSet = "function" == typeof WeakSet, this.inner = this.hasWeakSet ? new WeakSet : []
                            }
                            return e.prototype.memoize = function(e) {
                                if (this.hasWeakSet) return !!this.inner.has(e) || (this.inner.add(e), !1);
                                for (var t = 0; t < this.inner.length; t++) {
                                    if (this.inner[t] === e) return !0
                                }
                                return this.inner.push(e), !1
                            }, e.prototype.unmemoize = function(e) {
                                if (this.hasWeakSet) this.inner.delete(e);
                                else
                                    for (var t = 0; t < this.inner.length; t++)
                                        if (this.inner[t] === e) {
                                            this.inner.splice(t, 1);
                                            break
                                        }
                            }, e
                        }();
                        t.Memo = n
                    });
                t(T);
                T.Memo;
                var M = n(function(e, t) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.truncate = function(e, t) {
                        return void 0 === t && (t = 0), 0 !== t && v.isString(e) ? e.length <= t ? e : e.substr(0, t) + "..." : e
                    }, t.snipLine = function(e, t) {
                        var n = e,
                            r = n.length;
                        if (r <= 150) return n;
                        r < t && (t = r);
                        var o = Math.max(t - 60, 0);
                        o < 5 && (o = 0);
                        var i = Math.min(o + 140, r);
                        return r - 5 < i && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), 0 < o && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
                    }, t.safeJoin = function(e, t) {
                        if (!Array.isArray(e)) return "";
                        for (var n = [], r = 0; r < e.length; r++) {
                            var o = e[r];
                            try {
                                n.push(String(o))
                            } catch (e) {
                                n.push("[value cannot be serialized]")
                            }
                        }
                        return n.join(t)
                    }, t.includes = function(e, t) {
                        return !(t.length > e.length) && -1 !== e.indexOf(t)
                    }
                });
                t(M);
                var C = M.truncate,
                    R = (M.snipLine, M.safeJoin),
                    D = M.includes,
                    N = n(function(e, t) {
                        function i(e) {
                            return JSON.stringify(e, r({
                                normalize: !1
                            }))
                        }

                        function n(e) {
                            return JSON.parse(e)
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.serialize = i, t.deserialize = n, t.clone = function(e) {
                            return n(i(e))
                        }, t.fill = function(e, t, n) {
                            if (t in e && !e[t].__sentry__) {
                                var r = e[t],
                                    o = n(r);
                                "function" == typeof o && (o.prototype = o.prototype || {}, Object.defineProperties(o, {
                                    __sentry__: {
                                        enumerable: !1,
                                        value: !0
                                    },
                                    __sentry_original__: {
                                        enumerable: !1,
                                        value: r
                                    },
                                    __sentry_wrapped__: {
                                        enumerable: !1,
                                        value: o
                                    }
                                })), e[t] = o
                            }
                        }, t.urlEncode = function(t) {
                            return Object.keys(t).map(function(e) {
                                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
                            }).join("&")
                        };
                        var a = 3,
                            u = 102400;

                        function s(e) {
                            return function(e) {
                                return ~-encodeURI(e).split(/%..|./).length
                            }(JSON.stringify(e))
                        }

                        function c(e) {
                            var t = Object.prototype.toString.call(e);
                            if ("string" == typeof e) return M.truncate(e, 40);
                            if ("[object Object]" === t) return "[Object]";
                            if ("[object Array]" === t) return "[Array]";
                            var n = f(e);
                            return v.isPrimitive(n) ? "" + n : t
                        }

                        function l(e, t) {
                            if (0 === t) return c(e);
                            if (v.isPlainObject(e)) {
                                var n = {},
                                    r = e;
                                return Object.keys(r).forEach(function(e) {
                                    n[e] = l(r[e], t - 1)
                                }), n
                            }
                            return v.isArray(e) ? e.map(function(e) {
                                return l(e, t - 1)
                            }) : c(e)
                        }

                        function f(e, t) {
                            return "domain" === t && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== d && e === d ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : "undefined" != typeof Event && e instanceof Event ? Object.getPrototypeOf(e) ? e.constructor.name : "Event" : v.isSyntheticEvent(e) ? "[SyntheticEvent]" : v.isNaN(e) ? "[NaN]" : v.isUndefined(e) ? "[undefined]" : "function" == typeof e ? "[Function: " + (e.name || "<unknown-function-name>") + "]" : e
                        }

                        function p(e, t, n) {
                            if (void 0 === t && (t = 1 / 0), void 0 === n && (n = new T.Memo), 0 === t) return c(e);
                            var r = f(e);
                            if (v.isPrimitive(r)) return r;
                            var o = v.isError(e) ? function(e) {
                                    var t = {
                                        message: e.message,
                                        name: e.name,
                                        stack: e.stack
                                    };
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                    return t
                                }(e) : e,
                                i = v.isArray(e) ? [] : {};
                            if (n.memoize(e)) return "[Circular ~]";
                            for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (i[a] = p(o[a], t - 1, n));
                            return n.unmemoize(e), i
                        }

                        function r(n) {
                            return void 0 === n && (n = {
                                    normalize: !0
                                }),
                                function(e, t) {
                                    return n.normalize ? f(p(t, n.depth), e) : p(t, n.depth)
                                }
                        }
                        t.serializeObject = l, t.limitObjectDepthToSize = function e(t, n, r) {
                            void 0 === n && (n = a), void 0 === r && (r = u);
                            var o = l(t, n);
                            return s(i(o)) > r ? e(t, n - 1) : o
                        }, t.serializeKeysToEventMessage = function(e, t) {
                            if (void 0 === t && (t = 40), !e.length) return "[object has no keys]";
                            if (e[0].length >= t) return M.truncate(e[0], t);
                            for (var n = e.length; 0 < n; n--) {
                                var r = e.slice(0, n).join(", ");
                                if (!(r.length > t)) return n === e.length ? r : M.truncate(r, t)
                            }
                            return ""
                        }, t.assign = function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                            for (var r = Object(e), o = 0; o < t.length; o++) {
                                var i = t[o];
                                if (null !== i)
                                    for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r[a] = i[a])
                            }
                            return r
                        }, t.decycle = p, t.safeNormalize = function(e, t) {
                            try {
                                return JSON.parse(JSON.stringify(e, r({
                                    normalize: !0,
                                    depth: t
                                })))
                            } catch (e) {
                                return "**non-serializable**"
                            }
                        }
                    });
                t(N);
                var F = N.serialize,
                    A = N.deserialize,
                    H = (N.clone, N.fill),
                    L = (N.urlEncode, N.serializeObject, N.limitObjectDepthToSize),
                    B = N.serializeKeysToEventMessage,
                    U = (N.assign, N.decycle, N.safeNormalize);

                function z(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function G(e, t, n, r, o, i) {
                    return z(function(e, t) {
                        return e << t | e >>> 32 - t
                    }(z(z(t, e), z(r, i)), o), n)
                }

                function W(e, t, n, r, o, i, a) {
                    return G(t & n | ~t & r, e, t, o, i, a)
                }

                function $(e, t, n, r, o, i, a) {
                    return G(t & r | n & ~r, e, t, o, i, a)
                }

                function q(e, t, n, r, o, i, a) {
                    return G(t ^ n ^ r, e, t, o, i, a)
                }

                function V(e, t, n, r, o, i, a) {
                    return G(n ^ (t | ~r), e, t, o, i, a)
                }

                function Y(e, t) {
                    var n, r, o, i, a;
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    var u = 1732584193,
                        s = -271733879,
                        c = -1732584194,
                        l = 271733878;
                    for (n = 0; n < e.length; n += 16) s = V(s = V(s = V(s = V(s = q(s = q(s = q(s = q(s = $(s = $(s = $(s = $(s = W(s = W(s = W(s = W(o = s, c = W(i = c, l = W(a = l, u = W(r = u, s, c, l, e[n], 7, -680876936), s, c, e[n + 1], 12, -389564586), u, s, e[n + 2], 17, 606105819), l, u, e[n + 3], 22, -1044525330), c = W(c, l = W(l, u = W(u, s, c, l, e[n + 4], 7, -176418897), s, c, e[n + 5], 12, 1200080426), u, s, e[n + 6], 17, -1473231341), l, u, e[n + 7], 22, -45705983), c = W(c, l = W(l, u = W(u, s, c, l, e[n + 8], 7, 1770035416), s, c, e[n + 9], 12, -1958414417), u, s, e[n + 10], 17, -42063), l, u, e[n + 11], 22, -1990404162), c = W(c, l = W(l, u = W(u, s, c, l, e[n + 12], 7, 1804603682), s, c, e[n + 13], 12, -40341101), u, s, e[n + 14], 17, -1502002290), l, u, e[n + 15], 22, 1236535329), c = $(c, l = $(l, u = $(u, s, c, l, e[n + 1], 5, -165796510), s, c, e[n + 6], 9, -1069501632), u, s, e[n + 11], 14, 643717713), l, u, e[n], 20, -373897302), c = $(c, l = $(l, u = $(u, s, c, l, e[n + 5], 5, -701558691), s, c, e[n + 10], 9, 38016083), u, s, e[n + 15], 14, -660478335), l, u, e[n + 4], 20, -405537848), c = $(c, l = $(l, u = $(u, s, c, l, e[n + 9], 5, 568446438), s, c, e[n + 14], 9, -1019803690), u, s, e[n + 3], 14, -187363961), l, u, e[n + 8], 20, 1163531501), c = $(c, l = $(l, u = $(u, s, c, l, e[n + 13], 5, -1444681467), s, c, e[n + 2], 9, -51403784), u, s, e[n + 7], 14, 1735328473), l, u, e[n + 12], 20, -1926607734), c = q(c, l = q(l, u = q(u, s, c, l, e[n + 5], 4, -378558), s, c, e[n + 8], 11, -2022574463), u, s, e[n + 11], 16, 1839030562), l, u, e[n + 14], 23, -35309556), c = q(c, l = q(l, u = q(u, s, c, l, e[n + 1], 4, -1530992060), s, c, e[n + 4], 11, 1272893353), u, s, e[n + 7], 16, -155497632), l, u, e[n + 10], 23, -1094730640), c = q(c, l = q(l, u = q(u, s, c, l, e[n + 13], 4, 681279174), s, c, e[n], 11, -358537222), u, s, e[n + 3], 16, -722521979), l, u, e[n + 6], 23, 76029189), c = q(c, l = q(l, u = q(u, s, c, l, e[n + 9], 4, -640364487), s, c, e[n + 12], 11, -421815835), u, s, e[n + 15], 16, 530742520), l, u, e[n + 2], 23, -995338651), c = V(c, l = V(l, u = V(u, s, c, l, e[n], 6, -198630844), s, c, e[n + 7], 10, 1126891415), u, s, e[n + 14], 15, -1416354905), l, u, e[n + 5], 21, -57434055), c = V(c, l = V(l, u = V(u, s, c, l, e[n + 12], 6, 1700485571), s, c, e[n + 3], 10, -1894986606), u, s, e[n + 10], 15, -1051523), l, u, e[n + 1], 21, -2054922799), c = V(c, l = V(l, u = V(u, s, c, l, e[n + 8], 6, 1873313359), s, c, e[n + 15], 10, -30611744), u, s, e[n + 6], 15, -1560198380), l, u, e[n + 13], 21, 1309151649), c = V(c, l = V(l, u = V(u, s, c, l, e[n + 4], 6, -145523070), s, c, e[n + 11], 10, -1120210379), u, s, e[n + 2], 15, 718787259), l, u, e[n + 9], 21, -343485551), u = z(u, r), s = z(s, o), c = z(c, i), l = z(l, a);
                    return [u, s, c, l]
                }

                function J(e) {
                    var t, n = "",
                        r = 32 * e.length;
                    for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                    return n
                }

                function X(e) {
                    var t, n = [];
                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                    var r = 8 * e.length;
                    for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                    return n
                }

                function K(e) {
                    var t, n, r = "0123456789abcdef",
                        o = "";
                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                    return o
                }

                function Q(e) {
                    return unescape(encodeURIComponent(e))
                }

                function Z(e) {
                    return function(e) {
                        return J(Y(X(e), 8 * e.length))
                    }(Q(e))
                }

                function ee(e, t) {
                    return function(e, t) {
                        var n, r, o = X(e),
                            i = [],
                            a = [];
                        for (i[15] = a[15] = void 0, 16 < o.length && (o = Y(o, 8 * e.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
                        return r = Y(i.concat(X(t)), 512 + 8 * t.length), J(Y(a.concat(r), 640))
                    }(Q(e), Q(t))
                }

                function te(e, t, n) {
                    return t ? n ? ee(t, e) : function(e, t) {
                        return K(ee(e, t))
                    }(t, e) : n ? Z(e) : function(e) {
                        return K(Z(e))
                    }(e)
                }
                var ne = _(),
                    re = {
                        wrap: function() {
                            return function() {}
                        },
                        report: !1,
                        collectWindowErrors: !1,
                        computeStackTrace: !1,
                        remoteFetching: !1,
                        linesOfContext: !1,
                        extendToAsynchronousCallbacks: !1
                    },
                    oe = [].slice,
                    ie = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

                function ae(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }

                function ue() {
                    return "undefined" == typeof document || null == document.location ? "" : document.location.href
                }
                re.wrap = function(e) {
                    return function() {
                        try {
                            return e.apply(this, arguments)
                        } catch (e) {
                            throw re.report(e), e
                        }
                    }
                }, re.report = function() {
                    var l, n, r, o, i = [],
                        a = null,
                        f = null;

                    function p(e, t, n) {
                        var r = null;
                        if (!t || re.collectWindowErrors) {
                            for (var o in i)
                                if (ae(i, o)) try {
                                    i[o](e, t, n)
                                } catch (e) {
                                    r = e
                                }
                            if (r) throw r
                        }
                    }

                    function e(e, t, n, r, o) {
                        var i = null;
                        if (o = y(o) ? o.error : o, e = y(e) ? e.message : e, f) re.computeStackTrace.augmentStackTraceWithInitialElement(f, t, n, e), d();
                        else if (o && g(o))(i = re.computeStackTrace(o)).mechanism = "onerror", p(i, !0, o);
                        else {
                            var a, u = {
                                    url: t,
                                    line: n,
                                    column: r
                                },
                                s = e;
                            if ("[object String]" === {}.toString.call(e)) {
                                var c = e.match(ie);
                                c && (a = c[1], s = c[2])
                            }
                            u.func = re.computeStackTrace.guessFunctionName(u.url, u.line), u.context = re.computeStackTrace.gatherContext(u.url, u.line), p(i = {
                                name: a,
                                message: s,
                                mode: "onerror",
                                mechanism: "onerror",
                                stack: [h.__assign({}, u, {
                                    url: u.url || ue()
                                })]
                            }, !0, null)
                        }
                        return !!l && l.apply(this, arguments)
                    }

                    function t(e) {
                        var t = e && (e.detail ? e.detail.reason : e.reason) || e,
                            n = re.computeStackTrace(t);
                        n.mechanism = "onunhandledrejection", p(n, !0, t)
                    }

                    function d() {
                        var e = f,
                            t = a;
                        a = f = null, p(e, !1, t)
                    }

                    function u(e) {
                        if (f) {
                            if (a === e) return;
                            d()
                        }
                        var t = re.computeStackTrace(e);
                        throw f = t, a = e, setTimeout(function() {
                            a === e && d()
                        }, t.incomplete ? 2e3 : 0), e
                    }
                    return u.subscribe = function(e) {
                        i.push(e)
                    }, u.unsubscribe = function(e) {
                        for (var t = i.length - 1; 0 <= t; --t) i[t] === e && i.splice(t, 1);
                        0 === i.length && (n && (ne.onerror = l, n = !1), o && (ne.onunhandledrejection = r, o = !1))
                    }, u.installGlobalHandler = function() {
                        !0 !== n && (l = ne.onerror, ne.onerror = e, n = !0)
                    }, u.installGlobalUnhandledRejectionHandler = function() {
                        !0 !== o && (r = ne.onunhandledrejection, ne.onunhandledrejection = t, o = !0)
                    }, u
                }(), re.computeStackTrace = function() {
                    var r = !1,
                        o = {};

                    function b(e) {
                        if ("string" != typeof e) return [];
                        if (!ae(o, e)) {
                            var t = "",
                                n = "";
                            try {
                                n = ne.document.domain
                            } catch (e) {}
                            var r = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(e);
                            r && r[2] === n && (t = function(e) {
                                if (!re.remoteFetching) return "";
                                try {
                                    var t = function() {
                                        try {
                                            return new ne.XMLHttpRequest
                                        } catch (e) {
                                            return new ne.ActiveXObject("Microsoft.XMLHTTP")
                                        }
                                    }();
                                    return t.open("GET", e, !1), t.send(""), t.responseText
                                } catch (e) {
                                    return ""
                                }
                            }(e)), o[e] = t ? t.split("\n") : []
                        }
                        return o[e]
                    }

                    function E(e, t) {
                        var n, r = /function ([^(]*)\(([^)]*)\)/,
                            o = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                            i = "",
                            a = b(e);
                        if (!a.length) return "?";
                        for (var u = 0; u < 10; ++u)
                            if (i = a[t - u] + i, !O(i)) {
                                if (n = o.exec(i)) return n[1];
                                if (n = r.exec(i)) return n[1]
                            }
                        return "?"
                    }

                    function w(e, t) {
                        var n = b(e);
                        if (!n.length) return null;
                        var r = [],
                            o = Math.floor(re.linesOfContext / 2),
                            i = o + re.linesOfContext % 2,
                            a = Math.max(0, t - o - 1),
                            u = Math.min(n.length, t + i - 1);
                        t -= 1;
                        for (var s = a; s < u; ++s) O(n[s]) || r.push(n[s]);
                        return 0 < r.length ? r : null
                    }

                    function d(e) {
                        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
                    }

                    function S(e) {
                        return d(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
                    }

                    function x(e, t) {
                        for (var n, r, o = 0, i = t.length; o < i; ++o)
                            if ((n = b(t[o])).length && (n = n.join("\n"), r = e.exec(n))) return {
                                url: t[o],
                                line: n.substring(0, r.index).split("\n").length,
                                column: r.index - n.lastIndexOf("\n", r.index) - 1
                            };
                        return null
                    }

                    function _(e, t, n) {
                        var r, o = b(t),
                            i = new RegExp("\\b" + d(e) + "\\b");
                        return n -= 1, o && o.length > n && (r = i.exec(o[n])) ? r.index : null
                    }

                    function p(e) {
                        if (!O(ne && ne.document)) {
                            for (var t, n, r, o, i = [ue()], a = ne.document.getElementsByTagName("script"), u = "" + e, s = 0; s < a.length; ++s) {
                                var c = a[s];
                                c.src && i.push(c.src)
                            }
                            if (r = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(u)) {
                                var l = r[1] ? "\\s+" + r[1] : "",
                                    f = r[2].split(",").join("\\s*,\\s*");
                                t = d(r[3]).replace(/;$/, ";?"), n = new RegExp("function" + l + "\\s*\\(\\s*" + f + "\\s*\\)\\s*{\\s*" + t + "\\s*}")
                            } else n = new RegExp(d(u).replace(/\s+/g, "\\s+"));
                            if (o = x(n, i)) return o;
                            if (r = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(u)) {
                                var p = r[1];
                                if (t = S(r[2]), o = x(n = new RegExp("on" + p + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]", "i"), i[0])) return o;
                                if (o = x(n = new RegExp(t), i)) return o
                            }
                            return null
                        }
                    }

                    function i(e) {
                        if (!e.stack) return null;
                        for (var t, n, r, o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, i = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, a = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, u = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, s = /\((\S*)(?::(\d+))(?::(\d+))\)/, c = e.stack.split("\n"), l = [], f = /^(.*) is undefined$/.exec(e.message), p = 0, d = c.length; p < d; ++p) {
                            if (n = o.exec(c[p])) {
                                var h = n[2] && 0 === n[2].indexOf("native");
                                n[2] && 0 === n[2].indexOf("eval") && (t = s.exec(n[2])) && (n[2] = t[1]), r = {
                                    url: h ? null : n[2],
                                    func: n[1] || "?",
                                    args: h ? [n[2]] : [],
                                    line: n[3] ? +n[3] : null,
                                    column: n[4] ? +n[4] : null
                                }
                            } else if (n = a.exec(c[p])) r = {
                                url: n[2],
                                func: n[1] || "?",
                                args: [],
                                line: +n[3],
                                column: n[4] ? +n[4] : null
                            };
                            else {
                                if (!(n = i.exec(c[p]))) continue;
                                n[3] && -1 < n[3].indexOf(" > eval") && (t = u.exec(n[3])) ? n[3] = t[1] : 0 !== p || n[5] || O(e.columnNumber) || (l[0].column = e.columnNumber + 1), r = {
                                    url: n[3],
                                    func: n[1] || "?",
                                    args: n[2] ? n[2].split(",") : [],
                                    line: n[4] ? +n[4] : null,
                                    column: n[5] ? +n[5] : null
                                }
                            }
                            if (!r.func && r.line && (r.func = E(r.url, r.line)), re.remoteFetching && r.url && "blob:" === r.url.substr(0, 5)) {
                                var v = new XMLHttpRequest;
                                if (v.open("GET", r.url, !1), v.send(""), 200 === v.status) {
                                    var g = v.responseText || "",
                                        y = (g = g.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                                    if (y) {
                                        var m = y[1];
                                        "~" === m.charAt(0) && (m = ("undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "")) + m.slice(1)), r.url = m.slice(0, -4)
                                    }
                                }
                            }
                            r.context = r.line ? w(r.url, r.line) : null, l.push(r)
                        }
                        return l.length ? (l[0] && l[0].line && !l[0].column && f && (l[0].column = _(f[1], l[0].url, l[0].line)), {
                            mode: "stack",
                            name: e.name,
                            message: e.message,
                            stack: l
                        }) : null
                    }

                    function h(e, t, n, r) {
                        var o = {
                            url: t,
                            line: n
                        };
                        if (o.url && o.line) {
                            e.incomplete = !1, o.func || (o.func = E(o.url, o.line)), o.context || (o.context = w(o.url, o.line));
                            var i = / '([^']+)' /.exec(r);
                            if (i && (o.column = _(i[1], o.url, o.line)), 0 < e.stack.length && e.stack[0].url === o.url) {
                                if (e.stack[0].line === o.line) return !1;
                                if (!e.stack[0].line && e.stack[0].func === o.func) return e.stack[0].line = o.line, e.stack[0].context = o.context, !1
                            }
                            return e.stack.unshift(o), e.partial = !0
                        }
                        return !(e.incomplete = !0)
                    }

                    function v(e, t) {
                        for (var n, r, o, i = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, a = [], u = {}, s = !1, c = v.caller; c && !s; c = c.caller)
                            if (c !== g && c !== re.report) {
                                if (r = {
                                        url: null,
                                        func: "?",
                                        args: [],
                                        line: null,
                                        column: null
                                    }, c.name ? r.func = c.name : (n = i.exec(c.toString())) && (r.func = n[1]), void 0 === r.func) try {
                                    r.func = n.input.substring(0, n.input.indexOf("{"))
                                } catch (e) {}
                                if (o = p(c)) {
                                    r.url = o.url, r.line = o.line, "?" === r.func && (r.func = E(r.url, r.line));
                                    var l = / '([^']+)' /.exec(e.message || e.description);
                                    l && (r.column = _(l[1], o.url, o.line))
                                }
                                u["" + c] ? s = !0 : u["" + c] = !0, a.push(r)
                            }
                        t && a.splice(0, t);
                        var f = {
                            mode: "callers",
                            name: e.name,
                            message: e.message,
                            stack: a
                        };
                        return h(f, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), f
                    }

                    function g(e, t) {
                        var n = null;
                        t = null == t ? 0 : +t;
                        try {
                            if (n = function(e) {
                                    var t = e.stacktrace;
                                    if (t) {
                                        for (var n, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, i = t.split("\n"), a = [], u = 0; u < i.length; u += 2) {
                                            var s = null;
                                            if ((n = r.exec(i[u])) ? s = {
                                                    url: n[2],
                                                    line: +n[1],
                                                    column: null,
                                                    func: n[3],
                                                    args: []
                                                } : (n = o.exec(i[u])) && (s = {
                                                    url: n[6],
                                                    line: +n[1],
                                                    column: +n[2],
                                                    func: n[3] || n[4],
                                                    args: n[5] ? n[5].split(",") : []
                                                }), s) {
                                                if (!s.func && s.line && (s.func = E(s.url, s.line)), s.line) try {
                                                    s.context = w(s.url, s.line)
                                                } catch (e) {}
                                                s.context || (s.context = [i[u + 1]]), a.push(s)
                                            }
                                        }
                                        return a.length ? {
                                            mode: "stacktrace",
                                            name: e.name,
                                            message: e.message,
                                            stack: a
                                        } : null
                                    }
                                }(e)) return n
                        } catch (e) {
                            if (r) throw e
                        }
                        try {
                            if (n = i(e)) return n
                        } catch (e) {
                            if (r) throw e
                        }
                        try {
                            if (n = function(e) {
                                    var t = e.message.split("\n");
                                    if (t.length < 4) return null;
                                    var n, r = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                        o = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                                        i = /^\s*Line (\d+) of function script\s*$/i,
                                        a = [],
                                        u = ne && ne.document && ne.document.getElementsByTagName("script"),
                                        s = [];
                                    for (var c in u) ae(u, c) && !u[c].src && s.push(u[c]);
                                    for (var l = 2; l < t.length; l += 2) {
                                        var f = null;
                                        if (n = r.exec(t[l])) f = {
                                            url: n[2],
                                            func: n[3],
                                            args: [],
                                            line: +n[1],
                                            column: null
                                        };
                                        else if (n = o.exec(t[l])) {
                                            f = {
                                                url: n[3],
                                                func: n[4],
                                                args: [],
                                                line: +n[1],
                                                column: null
                                            };
                                            var p = +n[1],
                                                d = s[n[2] - 1];
                                            if (d) {
                                                var h = b(f.url);
                                                if (h) {
                                                    var v = (h = h.join("\n")).indexOf(d.innerText);
                                                    0 <= v && (f.line = p + h.substring(0, v).split("\n").length)
                                                }
                                            }
                                        } else if (n = i.exec(t[l])) {
                                            var g = ue().replace(/#.*$/, ""),
                                                y = x(new RegExp(S(t[l + 1])), [g]);
                                            f = {
                                                url: g,
                                                func: "",
                                                args: [],
                                                line: y ? y.line : n[1],
                                                column: null
                                            }
                                        }
                                        if (f) {
                                            f.func || (f.func = E(f.url, f.line));
                                            var m = w(f.url, f.line),
                                                _ = m ? m[Math.floor(m.length / 2)] : null;
                                            m && _.replace(/^\s*/, "") === t[l + 1].replace(/^\s*/, "") ? f.context = m : f.context = [t[l + 1]], a.push(f)
                                        }
                                    }
                                    return a.length ? {
                                        mode: "multiline",
                                        name: e.name,
                                        message: t[0],
                                        stack: a
                                    } : null
                                }(e)) return n
                        } catch (e) {
                            if (r) throw e
                        }
                        try {
                            if (n = v(e, t + 1)) return n
                        } catch (e) {
                            if (r) throw e
                        }
                        return {
                            original: e,
                            name: e.name,
                            message: e.message,
                            mode: "failed"
                        }
                    }
                    return g.augmentStackTraceWithInitialElement = h, g.computeStackTraceFromStackProp = i, g.guessFunctionName = E, g.gatherContext = w, g.ofCaller = function(t) {
                        t = 1 + (null == t ? 0 : +t);
                        try {
                            throw new Error
                        } catch (e) {
                            return g(e, t + 1)
                        }
                    }, g.getSource = b, g
                }(), re.extendToAsynchronousCallbacks = function() {
                    function e(e) {
                        var n = ne[e];
                        ne[e] = function() {
                            var e = oe.call(arguments),
                                t = e[0];
                            return "function" == typeof t && (e[0] = re.wrap(t)), n.apply ? n.apply(this, e) : n(e[0], e[1])
                        }
                    }
                    e("setTimeout"), e("setInterval")
                }, re.remoteFetching = !1, re.collectWindowErrors = !0, re.linesOfContext = 11;
                var se = re.report.subscribe,
                    ce = re.report.installGlobalHandler,
                    le = re.report.installGlobalUnhandledRejectionHandler,
                    fe = re.computeStackTrace,
                    pe = 50;

                function de(e) {
                    var t = ve(e.stack),
                        n = {
                            type: e.name,
                            value: e.message
                        };
                    return t && t.length && (n.stacktrace = {
                        frames: t
                    }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
                }

                function he(e) {
                    return {
                        exception: {
                            values: [de(e)]
                        }
                    }
                }

                function ve(e) {
                    if (!e || !e.length) return [];
                    var t = e,
                        n = t[0].func || "",
                        r = t[t.length - 1].func || "";
                    return (D(n, "captureMessage") || D(n, "captureException")) && (t = t.slice(1)), D(r, "sentryWrapped") && (t = t.slice(0, -1)), t.map(function(e) {
                        return {
                            colno: e.column,
                            filename: e.url || t[0].url,
                            function: e.func || "?",
                            in_app: !0,
                            lineno: e.line
                        }
                    }).slice(0, pe).reverse()
                }

                function ge(e, t, n) {
                    e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].value = e.exception.values[0].value || t || "", e.exception.values[0].type = e.exception.values[0].type || n || "Error"
                }
                var ye = function() {
                        function e(e) {
                            this.options = e, this.buffer = new f.PromiseBuffer(30), this.url = new f.API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
                        }
                        return e.prototype.sendEvent = function(e) {
                            return h.__awaiter(this, void 0, void 0, function() {
                                return h.__generator(this, function(e) {
                                    throw new f.SentryError("Transport Class has to implement `sendEvent` method")
                                })
                            })
                        }, e.prototype.close = function(t) {
                            return h.__awaiter(this, void 0, void 0, function() {
                                return h.__generator(this, function(e) {
                                    return [2, this.buffer.drain(t)]
                                })
                            })
                        }, e
                    }(),
                    me = _(),
                    _e = function(e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return h.__extends(t, e), t.prototype.sendEvent = function(n) {
                            return h.__awaiter(this, void 0, void 0, function() {
                                var t;
                                return h.__generator(this, function(e) {
                                    return t = {
                                        body: n,
                                        method: "POST",
                                        referrerPolicy: P() ? "origin" : ""
                                    }, [2, this.buffer.add(me.fetch(this.url, t).then(function(e) {
                                        return {
                                            status: i.fromHttpCode(e.status)
                                        }
                                    }))]
                                })
                            })
                        }, t
                    }(ye),
                    be = function(e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return h.__extends(t, e), t.prototype.sendEvent = function(o) {
                            return h.__awaiter(this, void 0, void 0, function() {
                                var r = this;
                                return h.__generator(this, function(e) {
                                    return [2, this.buffer.add(new Promise(function(e, t) {
                                        var n = new XMLHttpRequest;
                                        n.onreadystatechange = function() {
                                            4 === n.readyState && (200 === n.status && e({
                                                status: i.fromHttpCode(n.status)
                                            }), t(n))
                                        }, n.open("POST", r.url), n.send(o)
                                    }))]
                                })
                            })
                        }, t
                    }(ye),
                    Ee = Object.freeze({
                        BaseTransport: ye,
                        FetchTransport: _e,
                        XHRTransport: be
                    }),
                    we = function(t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }
                        return h.__extends(e, t), e.prototype.install = function() {
                            if (!this.options.dsn) throw new f.SentryError("Invariant exception: install() must not be called when disabled");
                            return Error.stackTraceLimit = 50, !0
                        }, e.prototype.setupTransport = function() {
                            if (!this.options.dsn) return t.prototype.setupTransport.call(this);
                            var e = this.options.transportOptions ? this.options.transportOptions : {
                                dsn: this.options.dsn
                            };
                            return this.options.transport ? new this.options.transport(e) : x() ? new _e(e) : new be(e)
                        }, e.prototype.eventFromException = function(i, a) {
                            return h.__awaiter(this, void 0, void 0, function() {
                                var t, n, r, o;
                                return h.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return y(i) && i.error ? (i = (o = i).error, t = he(fe(i)), [3, 7]) : [3, 1];
                                        case 1:
                                            return u(i) || s(i) ? (n = (o = i).name || (u(o) ? "DOMError" : "DOMException"), r = o.message ? n + ": " + o.message : n, [4, this.eventFromMessage(r, p.Error, a)]) : [3, 3];
                                        case 2:
                                            return ge(t = e.sent(), r), [3, 7];
                                        case 3:
                                            return g(i) ? (t = he(fe(i)), [3, 7]) : [3, 4];
                                        case 4:
                                            return l(i) && a && a.syntheticException ? (ge(t = function(e, t) {
                                                var n = Object.keys(e).sort(),
                                                    r = {
                                                        extra: {
                                                            __serialized__: L(e)
                                                        },
                                                        fingerprint: [te(n.join(""))],
                                                        message: "Non-Error exception captured with keys: " + B(n)
                                                    };
                                                if (t) {
                                                    var o = ve(fe(t).stack);
                                                    r.stacktrace = {
                                                        frames: o
                                                    }
                                                }
                                                return r
                                            }(o = i, a.syntheticException), "Custom Object"), [3, 7]) : [3, 5];
                                        case 5:
                                            return o = i, [4, this.eventFromMessage(o, void 0, a)];
                                        case 6:
                                            ge(t = e.sent(), "" + o), e.label = 7;
                                        case 7:
                                            return [2, t = h.__assign({}, t, {
                                                event_id: a && a.event_id,
                                                exception: h.__assign({}, t.exception, {
                                                    mechanism: {
                                                        handled: !0,
                                                        type: "generic"
                                                    }
                                                })
                                            })]
                                    }
                                })
                            })
                        }, e.prototype.eventFromMessage = function(o, i, a) {
                            return void 0 === i && (i = p.Info), h.__awaiter(this, void 0, void 0, function() {
                                var t, n, r;
                                return h.__generator(this, function(e) {
                                    return t = {
                                        event_id: a && a.event_id,
                                        level: i,
                                        message: o
                                    }, this.options.attachStacktrace && a && a.syntheticException && (n = fe(a.syntheticException), r = ve(n.stack), t.stacktrace = {
                                        frames: r
                                    }), [2, t]
                                })
                            })
                        }, e
                    }(f.BaseBackend),
                    Se = n(function(e, t) {
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = m.getGlobalObject(),
                            r = new(function() {
                                function e() {
                                    this.enabled = !1
                                }
                                return e.prototype.disable = function() {
                                    this.enabled = !1
                                }, e.prototype.enable = function() {
                                    this.enabled = !0
                                }, e.prototype.log = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    this.enabled && m.consoleSandbox(function() {
                                        n.console.log("Sentry Logger [Log]: " + e.join(" "))
                                    })
                                }, e.prototype.warn = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    this.enabled && m.consoleSandbox(function() {
                                        n.console.warn("Sentry Logger [Warn]: " + e.join(" "))
                                    })
                                }, e.prototype.error = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    this.enabled && m.consoleSandbox(function() {
                                        n.console.error("Sentry Logger [Error]: " + e.join(" "))
                                    })
                                }, e
                            }());
                        t.logger = r
                    });
                t(Se);
                var xe, Oe, je = Se.logger,
                    ke = "sentry.javascript.browser",
                    Pe = "4.6.6",
                    Ie = function(o) {
                        function e(e) {
                            return o.call(this, we, e) || this
                        }
                        return h.__extends(e, o), e.prototype.prepareEvent = function(t, n, r) {
                            return h.__awaiter(this, void 0, void 0, function() {
                                return h.__generator(this, function(e) {
                                    return t.platform = t.platform || "javascript", t.sdk = h.__assign({}, t.sdk, {
                                        name: ke,
                                        packages: h.__spread(t.sdk && t.sdk.packages || [], [{
                                            name: "npm:@sentry/browser",
                                            version: Pe
                                        }]),
                                        version: Pe
                                    }), [2, o.prototype.prepareEvent.call(this, t, n, r)]
                                })
                            })
                        }, e.prototype.showReportDialog = function(e) {
                            void 0 === e && (e = {});
                            var t = _().document;
                            if (t)
                                if (this.isEnabled()) {
                                    var n = e.dsn || this.getDsn();
                                    if (e.eventId)
                                        if (n) {
                                            var r = t.createElement("script");
                                            r.async = !0, r.src = new f.API(n).getReportDialogEndpoint(e), (t.head || t.body).appendChild(r)
                                        } else je.error("Missing `Dsn` option in showReportDialog call");
                                    else je.error("Missing `eventId` option in showReportDialog call")
                                } else je.error("Trying to call showReportDialog with Sentry Client is disabled")
                        }, e
                    }(f.BaseClient),
                    Te = 0;

                function Me(n, i, r) {
                    if (void 0 === i && (i = {}), !a(n)) return n;
                    try {
                        if (n.__sentry__) return n;
                        if (n.__sentry_wrapped__) return n.__sentry_wrapped__
                    } catch (e) {
                        return n
                    }

                    function e() {
                        var e = this;
                        r && a(r) && r.apply(this, arguments);
                        var o = Array.prototype.slice.call(arguments);
                        try {
                            var t = o.map(function(e) {
                                return Me(e, i)
                            });
                            return n.handleEvent ? n.handleEvent.apply(this, t) : n.apply(this, t)
                        } catch (r) {
                            throw Te += 1, setTimeout(function() {
                                Te -= 1
                            }), f.withScope(function(n) {
                                return h.__awaiter(e, void 0, void 0, function() {
                                    var t = this;
                                    return h.__generator(this, function(e) {
                                        return n.addEventProcessor(function(n) {
                                            return h.__awaiter(t, void 0, void 0, function() {
                                                var t;
                                                return h.__generator(this, function(e) {
                                                    return t = h.__assign({}, n), i.mechanism && (t.exception = t.exception || {}, t.exception.mechanism = i.mechanism), t.extra = h.__assign({}, t.extra, {
                                                        arguments: U(o, 3)
                                                    }), [2, t]
                                                })
                                            })
                                        }), f.captureException(r), [2]
                                    })
                                })
                            }), r
                        }
                    }
                    try {
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                    } catch (e) {}
                    n.prototype = n.prototype || {}, e.prototype = n.prototype, Object.defineProperty(n, "__sentry_wrapped__", {
                        enumerable: !1,
                        value: e
                    }), Object.defineProperties(e, {
                        __sentry__: {
                            enumerable: !1,
                            value: !0
                        },
                        __sentry_original__: {
                            enumerable: !1,
                            value: n
                        }
                    });
                    try {
                        Object.defineProperty(e, "name", {
                            get: function() {
                                return n.name
                            }
                        })
                    } catch (e) {}
                    return e
                }

                function Ce(n) {
                    return function(e) {
                        if (xe = void 0, Oe !== e) {
                            var t;
                            Oe = e;
                            try {
                                t = b(e.target)
                            } catch (e) {
                                t = "<unknown>"
                            }
                            f.getCurrentHub().addBreadcrumb({
                                category: "ui." + n,
                                message: t
                            }, {
                                event: e,
                                name: n
                            })
                        }
                    }
                }

                function Re() {
                    return function(e) {
                        var t;
                        try {
                            t = e.target
                        } catch (e) {
                            return
                        }
                        var n = t && t.tagName;
                        n && ("INPUT" === n || "TEXTAREA" === n || t.isContentEditable) && (xe || Ce("input")(e), clearTimeout(xe), xe = setTimeout(function() {
                            xe = void 0
                        }, 1e3))
                    }
                }
                var De = function() {
                        function o(e) {
                            this.name = o.id, this.options = h.__assign({
                                onerror: !0,
                                onunhandledrejection: !0
                            }, e)
                        }
                        return o.prototype.setupOnce = function() {
                            se(function(e, t, n) {
                                if (!(0 < Te)) {
                                    var r = f.getCurrentHub().getIntegration(o);
                                    r && f.getCurrentHub().captureEvent(r.eventFromGlobalHandler(e), {
                                        originalException: n,
                                        data: {
                                            stack: e
                                        }
                                    })
                                }
                            }), this.options.onerror && (je.log("Global Handler attached: onerror"), ce()), this.options.onunhandledrejection && (je.log("Global Handler attached: onunhandledrejection"), le())
                        }, o.prototype.eventFromGlobalHandler = function(e) {
                            var t = he(e),
                                n = {
                                    mode: e.mode
                                };
                            e.message && (n.message = e.message), e.name && (n.name = e.name);
                            var r = h.__assign({}, t, {
                                exception: h.__assign({}, t.exception, {
                                    mechanism: {
                                        data: n,
                                        handled: !1,
                                        type: e.mechanism
                                    }
                                })
                            });
                            return ge(r, void 0 !== e.original ? "" + C(F(U(e.original)), 300) : "", "onunhandledrejection" === e.mechanism ? "UnhandledRejection" : "Error"), r
                        }, o.id = "GlobalHandlers", o
                    }(),
                    Ne = function() {
                        function e() {
                            this.ignoreOnError = 0, this.name = e.id
                        }
                        return e.prototype.wrapTimeFunction = function(r) {
                            return function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                var n = e[0];
                                return e[0] = Me(n, {
                                    mechanism: {
                                        data: {
                                            function: Fe(r)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), r.apply(this, e)
                            }
                        }, e.prototype.wrapRAF = function(t) {
                            return function(e) {
                                return t(Me(e, {
                                    mechanism: {
                                        data: {
                                            function: "requestAnimationFrame",
                                            handler: Fe(t)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }))
                            }
                        }, e.prototype.wrapEventTarget = function(u) {
                            var e = _(),
                                t = e[u] && e[u].prototype;
                            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (H(t, "addEventListener", function(a) {
                                return function(e, t, n) {
                                    try {
                                        t.handleEvent = Me(t.handleEvent.bind(t), {
                                            mechanism: {
                                                data: {
                                                    function: "handleEvent",
                                                    handler: Fe(t),
                                                    target: u
                                                },
                                                handled: !0,
                                                type: "instrument"
                                            }
                                        })
                                    } catch (e) {}
                                    var r, o, i;
                                    return "EventTarget" !== u && "Node" !== u || (o = Ce("click"), i = Re(), r = function(e) {
                                        if (e) {
                                            var t;
                                            try {
                                                t = e.type
                                            } catch (e) {
                                                return
                                            }
                                            return "click" === t ? o(e) : "keypress" === t ? i(e) : void 0
                                        }
                                    }), a.call(this, e, Me(t, {
                                        mechanism: {
                                            data: {
                                                function: "addEventListener",
                                                handler: Fe(t),
                                                target: u
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }, r), n)
                                }
                            }), H(t, "removeEventListener", function(o) {
                                return function(e, t, n) {
                                    var r = t;
                                    try {
                                        r = r && (r.__sentry_wrapped__ || r)
                                    } catch (e) {}
                                    return o.call(this, e, r, n)
                                }
                            }))
                        }, e.prototype.setupOnce = function() {
                            this.ignoreOnError = this.ignoreOnError;
                            var e = _();
                            H(e, "setTimeout", this.wrapTimeFunction.bind(this)), H(e, "setInterval", this.wrapTimeFunction.bind(this)), H(e, "requestAnimationFrame", this.wrapRAF.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this.wrapEventTarget.bind(this))
                        }, e.id = "TryCatch", e
                    }();

                function Fe(e) {
                    try {
                        return e && e.name || "<anonymous>"
                    } catch (e) {
                        return "<anonymous>"
                    }
                }
                var Ae, He = _(),
                    Le = function() {
                        function l(e) {
                            this.name = l.id, this.options = h.__assign({
                                console: !0,
                                dom: !0,
                                fetch: !0,
                                history: !0,
                                sentry: !0,
                                xhr: !0
                            }, e)
                        }
                        return l.prototype.instrumentConsole = function() {
                            "console" in He && ["debug", "info", "warn", "error", "log"].forEach(function(o) {
                                o in He.console && H(He.console, o, function(r) {
                                    return function() {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        var n = {
                                            category: "console",
                                            data: {
                                                extra: {
                                                    arguments: U(e, 3)
                                                },
                                                logger: "console"
                                            },
                                            level: p.fromString(o),
                                            message: R(e, " ")
                                        };
                                        "assert" === o && !1 === e[0] && (n.message = "Assertion failed: " + (R(e.slice(1), " ") || "console.assert"), n.data.extra.arguments = U(e.slice(1), 3)), l.addBreadcrumb(n, {
                                            input: e,
                                            level: o
                                        }), r && Function.prototype.apply.call(r, He.console, e)
                                    }
                                })
                            })
                        }, l.prototype.instrumentDOM = function() {
                            "document" in He && (He.document.addEventListener("click", Ce("click"), !1), He.document.addEventListener("keypress", Re(), !1))
                        }, l.prototype.instrumentFetch = function() {
                            j() && H(He, "fetch", function(c) {
                                return function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    var n, r = t[0],
                                        o = "GET";
                                    "string" == typeof r ? n = r : "Request" in He && r instanceof Request ? (n = r.url, r.method && (o = r.method)) : n = String(r), t[1] && t[1].method && (o = t[1].method);
                                    var i = f.getCurrentHub().getClient(),
                                        a = i && i.getDsn();
                                    if (a) {
                                        var u = new f.API(a).getStoreEndpoint();
                                        if (u && D(n, u)) return "POST" === o && t[1] && t[1].body && Be(t[1].body), c.apply(He, t)
                                    }
                                    var s = {
                                        method: o,
                                        url: n
                                    };
                                    return c.apply(He, t).then(function(e) {
                                        return s.status_code = e.status, l.addBreadcrumb({
                                            category: "fetch",
                                            data: s,
                                            type: "http"
                                        }, {
                                            input: t,
                                            response: e
                                        }), e
                                    }).catch(function(e) {
                                        throw l.addBreadcrumb({
                                            category: "fetch",
                                            data: s,
                                            level: p.Error,
                                            type: "http"
                                        }, {
                                            error: e,
                                            input: t
                                        }), e
                                    })
                                }
                            })
                        }, l.prototype.instrumentHistory = function() {
                            var r = this;
                            if (I()) {
                                var o = function(e, t) {
                                        var n = E(He.location.href),
                                            r = E(t),
                                            o = E(e);
                                        o.path || (o = n), Ae = t, n.protocol === r.protocol && n.host === r.host && (t = r.relative), n.protocol === o.protocol && n.host === o.host && (e = o.relative), l.addBreadcrumb({
                                            category: "navigation",
                                            data: {
                                                from: e,
                                                to: t
                                            }
                                        })
                                    },
                                    i = He.onpopstate;
                                He.onpopstate = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = He.location.href;
                                    if (o(Ae, n), i) return i.apply(r, e)
                                }, H(He.history, "pushState", e), H(He.history, "replaceState", e)
                            }

                            function e(r) {
                                return function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = 2 < e.length ? e[2] : void 0;
                                    return n && o(Ae, String(n)), r.apply(this, e)
                                }
                            }
                        }, l.prototype.instrumentXHR = function() {
                            if ("XMLHttpRequest" in He) {
                                var e = XMLHttpRequest.prototype;
                                H(e, "open", function(a) {
                                    return function() {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        var n = e[1];
                                        this.__sentry_xhr__ = {
                                            method: e[0],
                                            url: e[1]
                                        };
                                        var r = f.getCurrentHub().getClient(),
                                            o = r && r.getDsn();
                                        if (o) {
                                            var i = new f.API(o).getStoreEndpoint();
                                            c(n) && i && D(n, i) && (this.__sentry_own_request__ = !0)
                                        }
                                        return a.apply(this, e)
                                    }
                                }), H(e, "send", function(o) {
                                    return function() {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        var n = this;

                                        function r() {
                                            if (4 === n.readyState) {
                                                if (n.__sentry_own_request__) return;
                                                try {
                                                    n.__sentry_xhr__ && (n.__sentry_xhr__.status_code = n.status)
                                                } catch (e) {}
                                                l.addBreadcrumb({
                                                    category: "xhr",
                                                    data: n.__sentry_xhr__,
                                                    type: "http"
                                                }, {
                                                    xhr: n
                                                })
                                            }
                                        }
                                        return n.__sentry_own_request__ && Be(e[0]), ["onload", "onerror", "onprogress"].forEach(function(e) {
                                            ! function(t, e) {
                                                t in e && a(e[t]) && H(e, t, function(e) {
                                                    return Me(e, {
                                                        mechanism: {
                                                            data: {
                                                                function: t,
                                                                handler: e && e.name || "<anonymous>"
                                                            },
                                                            handled: !0,
                                                            type: "instrument"
                                                        }
                                                    })
                                                })
                                            }(e, n)
                                        }), "onreadystatechange" in n && a(n.onreadystatechange) ? H(n, "onreadystatechange", function(e) {
                                            return Me(e, {
                                                mechanism: {
                                                    data: {
                                                        function: "onreadystatechange",
                                                        handler: e && e.name || "<anonymous>"
                                                    },
                                                    handled: !0,
                                                    type: "instrument"
                                                }
                                            }, r)
                                        }) : n.onreadystatechange = r, o.apply(this, e)
                                    }
                                })
                            }
                        }, l.addBreadcrumb = function(e, t) {
                            f.getCurrentHub().getIntegration(l) && f.getCurrentHub().addBreadcrumb(e, t)
                        }, l.prototype.setupOnce = function() {
                            this.options.console && this.instrumentConsole(), this.options.dom && this.instrumentDOM(), this.options.xhr && this.instrumentXHR(), this.options.fetch && this.instrumentFetch(), this.options.history && this.instrumentHistory()
                        }, l.id = "Breadcrumbs", l
                    }();

                function Be(e) {
                    try {
                        var t = A(e);
                        Le.addBreadcrumb({
                            category: "sentry",
                            event_id: t.event_id,
                            level: t.level || p.fromString("error"),
                            message: w(t)
                        }, {
                            event: t
                        })
                    } catch (e) {
                        je.error("Error while adding sentry type breadcrumb")
                    }
                }
                var Ue, ze, Ge = function() {
                        function o(e) {
                            void 0 === e && (e = {}), this.name = o.id, this.key = e.key || "cause", this.limit = e.limit || 5
                        }
                        return o.prototype.setupOnce = function() {
                            var e = this;
                            f.addGlobalEventProcessor(function(n, r) {
                                return h.__awaiter(e, void 0, void 0, function() {
                                    var t;
                                    return h.__generator(this, function(e) {
                                        return (t = f.getCurrentHub().getIntegration(o)) ? [2, t.handler(n, r)] : [2, n]
                                    })
                                })
                            })
                        }, o.prototype.handler = function(e, t) {
                            if (!(e.exception && e.exception.values && t && t.originalException instanceof Error)) return e;
                            var n = this.walkErrorTree(t.originalException, this.key);
                            return e.exception.values = h.__spread(n, e.exception.values), e
                        }, o.prototype.walkErrorTree = function(e, t, n) {
                            if (void 0 === n && (n = []), !(e[t] instanceof Error) || n.length + 1 >= this.limit) return n;
                            var r = de(fe(e[t]));
                            return this.walkErrorTree(e[t], t, h.__spread([r], n))
                        }, o.id = "LinkedErrors", o
                    }(),
                    We = _(),
                    $e = function() {
                        function r() {
                            this.name = r.id
                        }
                        return r.prototype.setupOnce = function() {
                            var e = this;
                            f.addGlobalEventProcessor(function(n) {
                                return h.__awaiter(e, void 0, void 0, function() {
                                    var t;
                                    return h.__generator(this, function(e) {
                                        return f.getCurrentHub().getIntegration(r) && We.navigator && We.location ? ((t = n.request || {}).url = t.url || We.location.href, t.headers = t.headers || {}, t.headers["User-Agent"] = We.navigator.userAgent, [2, h.__assign({}, n, {
                                            request: t
                                        })]) : [2, n]
                                    })
                                })
                            })
                        }, r.id = "UserAgent", r
                    }(),
                    qe = function() {
                        function r(e) {
                            void 0 === e && (e = {}), this.name = r.id, this.Ember = e.Ember || _().Ember
                        }
                        return r.prototype.setupOnce = function() {
                            var n = this;
                            if (this.Ember) {
                                var e = this.Ember.onerror;
                                this.Ember.onerror = function(t) {
                                    if (f.getCurrentHub().getIntegration(r) && f.withScope(function(e) {
                                            n.addIntegrationToSdkInfo(e), f.captureException(t)
                                        }), "function" == typeof e) e.call(n.Ember, t);
                                    else if (n.Ember.testing) throw t
                                }, this.Ember.RSVP.on("error", function(t) {
                                    f.getCurrentHub().getIntegration(r) && f.withScope(function(e) {
                                        t instanceof Error ? (e.setExtra("context", "Unhandled Promise error detected"), n.addIntegrationToSdkInfo(e), f.captureException(t)) : (e.setExtra("reason", t), n.addIntegrationToSdkInfo(e), f.captureMessage("Unhandled Promise error detected"))
                                    })
                                })
                            } else je.error("EmberIntegration is missing an Ember instance")
                        }, r.prototype.addIntegrationToSdkInfo = function(e) {
                            var t = this;
                            e.addEventProcessor(function(n) {
                                return h.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return h.__generator(this, function(e) {
                                        return n.sdk && (t = n.sdk.integrations || [], n.sdk = h.__assign({}, n.sdk, {
                                            integrations: h.__spread(t, ["ember"])
                                        })), [2, n]
                                    })
                                })
                            })
                        }, r.id = "Ember", r
                    }(),
                    Ve = function() {
                        function a(e) {
                            void 0 === e && (e = {}), this.name = a.id, this.Vue = e.Vue || _().Vue, this.attachProps = e.attachProps || !0
                        }
                        return a.prototype.formatComponentName = function(e) {
                            if (e.$root === e) return "root instance";
                            var t = e._isVue ? e.$options.name || e.$options._componentTag : e.name;
                            return (t ? "component <" + t + ">" : "anonymous component") + (e._isVue && e.$options.__file ? " at " + e.$options.__file : "")
                        }, a.prototype.setupOnce = function() {
                            var o = this;
                            if (this.Vue && this.Vue.config) {
                                var i = this.Vue.config.errorHandler;
                                this.Vue.config.errorHandler = function(e, t, n) {
                                    var r = {};
                                    l(t) && (r.componentName = o.formatComponentName(t), o.attachProps && (r.propsData = t.$options.propsData)), O(n) || (r.lifecycleHook = n), f.getCurrentHub().getIntegration(a) && f.withScope(function(t) {
                                        Object.keys(r).forEach(function(e) {
                                            t.setExtra(e, r[e])
                                        }), t.addEventProcessor(function(n) {
                                            return h.__awaiter(o, void 0, void 0, function() {
                                                var t;
                                                return h.__generator(this, function(e) {
                                                    return n.sdk && (t = n.sdk.integrations || [], n.sdk = h.__assign({}, n.sdk, {
                                                        integrations: h.__spread(t, ["vue"])
                                                    })), [2, n]
                                                })
                                            })
                                        }), f.captureException(e)
                                    }), "function" == typeof i && i.call(o.Vue, e, t, n)
                                }
                            } else je.error("VueIntegration is missing a Vue instance")
                        }, a.id = "Vue", a
                    }();
                (ze = Ue || (Ue = {})).Crash = "crash", ze.Deprecation = "deprecation", ze.Intervention = "intervention";
                var Ye = function() {
                        function a(e) {
                            void 0 === e && (e = {
                                types: [Ue.Crash, Ue.Deprecation, Ue.Intervention]
                            }), this.options = e, this.name = a.id
                        }
                        return a.prototype.setupOnce = function() {
                            k() && new(_().ReportingObserver)(this.handler.bind(this), {
                                buffered: !0,
                                types: this.options.types
                            }).observe()
                        }, a.prototype.handler = function(e) {
                            var t, n;
                            if (f.getCurrentHub().getIntegration(a)) {
                                var r = function(a) {
                                    f.withScope(function(e) {
                                        e.setExtra("url", a.url);
                                        var t = "ReportingObserver [" + a.type + "]",
                                            n = "No details available";
                                        if (a.body) {
                                            var r, o = {};
                                            for (var i in a.body) o[i] = a.body[i];
                                            if (e.setExtra("body", o), a.type === Ue.Crash) n = [(r = a.body).crashId || "", r.reason || ""].join(" ").trim() || n;
                                            else n = (r = a.body).message || n
                                        }
                                        f.captureMessage(t + ": " + n)
                                    })
                                };
                                try {
                                    for (var o = h.__values(e), i = o.next(); !i.done; i = o.next()) {
                                        r(i.value)
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        i && !i.done && (n = o.return) && n.call(o)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                            }
                        }, a.id = "ReportingObserver", a
                    }(),
                    Je = Object.freeze({
                        GlobalHandlers: De,
                        TryCatch: Ne,
                        Breadcrumbs: Le,
                        LinkedErrors: Ge,
                        UserAgent: $e,
                        Ember: qe,
                        Vue: Ve,
                        ReportingObserver: Ye
                    }),
                    Xe = [new f.Integrations.Dedupe, new f.Integrations.InboundFilters, new f.Integrations.FunctionToString, new f.Integrations.ExtraErrorData, new Ne, new Le, new De, new Ge, new $e];
                var Ke = h.__assign({}, f.Integrations, Je);
                Qe.addGlobalEventProcessor = f.addGlobalEventProcessor, Qe.addBreadcrumb = f.addBreadcrumb, Qe.captureException = f.captureException, Qe.captureEvent = f.captureEvent, Qe.captureMessage = f.captureMessage, Qe.configureScope = f.configureScope, Qe.withScope = f.withScope, Qe.getHubFromCarrier = f.getHubFromCarrier, Qe.getCurrentHub = f.getCurrentHub, Qe.Hub = f.Hub, Qe.Scope = f.Scope, Qe.Integrations = Ke, Qe.Transports = Ee, Qe.Severity = p, Qe.Status = i, Qe.BrowserBackend = we, Qe.BrowserClient = Ie, Qe.defaultIntegrations = Xe, Qe.forceLoad = function() {}, Qe.init = function(e) {
                    void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = Xe), f.initAndBind(Ie, e)
                }, Qe.lastEventId = function() {
                    return f.getCurrentHub().lastEventId()
                }, Qe.onLoad = function(e) {
                    e()
                }, Qe.showReportDialog = function(e) {
                    void 0 === e && (e = {}), e.eventId || (e.eventId = f.getCurrentHub().lastEventId()), f.getCurrentHub().getClient().showReportDialog(e)
                }, Qe.flush = function(t) {
                    return h.__awaiter(this, void 0, void 0, function() {
                        return h.__generator(this, function(e) {
                            return [2, f.getCurrentHub().getClient().flush(t)]
                        })
                    })
                }, Qe.close = function(t) {
                    return h.__awaiter(this, void 0, void 0, function() {
                        return h.__generator(this, function(e) {
                            return [2, f.getCurrentHub().getClient().close(t)]
                        })
                    })
                }, Qe.SDK_NAME = ke, Qe.SDK_VERSION = Pe
            }).call(this, Ze(8), Ze(11))
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                r = function(r) {
                    function e(e) {
                        var t = this.constructor,
                            n = r.call(this, e) || this;
                        return n.message = e, n.name = t.prototype.constructor.name, Object.setPrototypeOf(n, t.prototype), n
                    }
                    return o.__extends(e, r), e
                }(Error);
            t.SentryError = r
        }, function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(3);
            t.truncate = function(e, t) {
                return void 0 === t && (t = 0), 0 !== t && r.isString(e) ? e.length <= t ? e : e.substr(0, t) + "..." : e
            }, t.snipLine = function(e, t) {
                var n = e,
                    r = n.length;
                if (r <= 150) return n;
                r < t && (t = r);
                var o = Math.max(t - 60, 0);
                o < 5 && (o = 0);
                var i = Math.min(o + 140, r);
                return r - 5 < i && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), 0 < o && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
            }, t.safeJoin = function(e, t) {
                if (!Array.isArray(e)) return "";
                for (var n = [], r = 0; r < e.length; r++) {
                    var o = e[r];
                    try {
                        n.push(String(o))
                    } catch (e) {
                        n.push("[value cannot be serialized]")
                    }
                }
                return n.join(t)
            }, t.includes = function(e, t) {
                return !(t.length > e.length) && -1 !== e.indexOf(t)
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = n(0),
                i = n(3),
                h = n(5),
                v = n(7),
                g = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
                r = function() {
                    function e(e) {
                        "string" == typeof e ? this.fromString(e) : this.fromComponents(e), this.validate()
                    }
                    return e.prototype.toString = function(e) {
                        void 0 === e && (e = !1);
                        var t = this,
                            n = t.host,
                            r = t.path,
                            o = t.pass,
                            i = t.port,
                            a = t.projectId;
                        return t.protocol + "://" + t.user + (e && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
                    }, e.prototype.fromString = function(e) {
                        var t = g.exec(e);
                        if (!t) throw new v.SentryError("Invalid Dsn");
                        var n = d.__read(t.slice(1), 6),
                            r = n[0],
                            o = n[1],
                            i = n[2],
                            a = void 0 === i ? "" : i,
                            u = n[3],
                            s = n[4],
                            c = void 0 === s ? "" : s,
                            l = "",
                            f = n[5],
                            p = f.split("/");
                        1 < p.length && (l = p.slice(0, -1).join("/"), f = p.pop()), h.assign(this, {
                            host: u,
                            pass: a,
                            path: l,
                            projectId: f,
                            port: c,
                            protocol: r,
                            user: o
                        })
                    }, e.prototype.fromComponents = function(e) {
                        this.protocol = e.protocol, this.user = e.user, this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
                    }, e.prototype.validate = function() {
                        var t, e;
                        try {
                            for (var n = d.__values(["protocol", "user", "host", "projectId"]), r = n.next(); !r.done; r = n.next()) {
                                var o = r.value;
                                if (!this[o]) throw new v.SentryError("Invalid Dsn: Missing " + o)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                r && !r.done && (e = n.return) && e.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        if ("http" !== this.protocol && "https" !== this.protocol) throw new v.SentryError('Invalid Dsn: Unsupported protocol "' + this.protocol + '"');
                        if (this.port && i.isNaN(parseInt(this.port, 10))) throw new v.SentryError('Invalid Dsn: Invalid port number "' + this.port + '"')
                    }, e
                }();
            t.Dsn = r
        }, function(e, t) {
            var n, r, o = e.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function u(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i
                } catch (e) {
                    n = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    r = a
                }
            }();
            var s, c = [],
                l = !1,
                f = -1;

            function p() {
                l && s && (l = !1, s.length ? c = s.concat(c) : f = -1, c.length && d())
            }

            function d() {
                if (!l) {
                    var e = u(p);
                    l = !0;
                    for (var t = c.length; t;) {
                        for (s = c, c = []; ++f < t;) s && s[f].run();
                        f = -1, t = c.length
                    }
                    s = null, l = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(e)
                }
            }

            function h(e, t) {
                this.fun = e, this.array = t
            }

            function v() {}
            o.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                c.push(new h(e, t)), 1 !== c.length || l || u(d)
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function(e) {
                return []
            }, o.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = n(0),
                r = n(4),
                o = n(5),
                i = function() {
                    function n() {
                        this.notifyingListeners = !1, this.scopeListeners = [], this.eventProcessors = [], this.breadcrumbs = [], this.user = {}, this.tags = {}, this.extra = {}
                    }
                    return n.prototype.addScopeListener = function(e) {
                        this.scopeListeners.push(e)
                    }, n.prototype.addEventProcessor = function(e) {
                        return this.eventProcessors.push(e), this
                    }, n.prototype.notifyScopeListeners = function() {
                        var t = this;
                        this.notifyingListeners || (this.notifyingListeners = !0, setTimeout(function() {
                            t.scopeListeners.forEach(function(e) {
                                e(t)
                            }), t.notifyingListeners = !1
                        }))
                    }, n.prototype.notifyEventProcessors = function(s, c) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o, i, a, u;
                            return l.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        r = s, e.label = 1;
                                    case 1:
                                        e.trys.push([1, 8, 9, 10]), o = l.__values(l.__spread(f(), this.eventProcessors)), i = o.next(), e.label = 2;
                                    case 2:
                                        if (i.done) return [3, 7];
                                        a = i.value, e.label = 3;
                                    case 3:
                                        return e.trys.push([3, 5, , 6]), [4, a(l.__assign({}, r), c)];
                                    case 4:
                                        return null === (r = e.sent()) ? [2, null] : [3, 6];
                                    case 5:
                                        return e.sent(), [3, 6];
                                    case 6:
                                        return i = o.next(), [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        return u = e.sent(), t = {
                                            error: u
                                        }, [3, 10];
                                    case 9:
                                        try {
                                            i && !i.done && (n = o.return) && n.call(o)
                                        } finally {
                                            if (t) throw t.error
                                        }
                                        return [7];
                                    case 10:
                                        return [2, r]
                                }
                            })
                        })
                    }, n.prototype.setUser = function(e) {
                        return this.user = o.safeNormalize(e), this.notifyScopeListeners(), this
                    }, n.prototype.setTag = function(e, t) {
                        var n;
                        return this.tags = l.__assign({}, this.tags, ((n = {})[e] = o.safeNormalize(t), n)), this.notifyScopeListeners(), this
                    }, n.prototype.setExtra = function(e, t) {
                        var n;
                        return this.extra = l.__assign({}, this.extra, ((n = {})[e] = o.safeNormalize(t), n)), this.notifyScopeListeners(), this
                    }, n.prototype.setFingerprint = function(e) {
                        return this.fingerprint = o.safeNormalize(e), this.notifyScopeListeners(), this
                    }, n.prototype.setLevel = function(e) {
                        return this.level = o.safeNormalize(e), this.notifyScopeListeners(), this
                    }, n.clone = function(e) {
                        var t = new n;
                        return o.assign(t, e, {
                            scopeListeners: []
                        }), e && (t.extra = o.assign(e.extra), t.tags = o.assign(e.tags), t.breadcrumbs = l.__spread(e.breadcrumbs), t.eventProcessors = l.__spread(e.eventProcessors)), t
                    }, n.prototype.clear = function() {
                        this.breadcrumbs = [], this.tags = {}, this.extra = {}, this.user = {}, this.level = void 0, this.fingerprint = void 0, this.notifyScopeListeners()
                    }, n.prototype.addBreadcrumb = function(e, t) {
                        this.breadcrumbs = void 0 !== t && 0 <= t ? l.__spread(this.breadcrumbs, [o.safeNormalize(e)]).slice(-t) : l.__spread(this.breadcrumbs, [o.safeNormalize(e)]), this.notifyScopeListeners()
                    }, n.prototype.applyFingerprint = function(e) {
                        e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this.fingerprint ? e.fingerprint = e.fingerprint.concat(this.fingerprint) : e.message && (e.fingerprint = e.fingerprint.concat(e.message)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
                    }, n.prototype.applyToEvent = function(t, n, r) {
                        return l.__awaiter(this, void 0, void 0, function() {
                            return l.__generator(this, function(e) {
                                return this.extra && Object.keys(this.extra).length && (t.extra = l.__assign({}, this.extra, t.extra)), this.tags && Object.keys(this.tags).length && (t.tags = l.__assign({}, this.tags, t.tags)), this.user && Object.keys(this.user).length && (t.user = l.__assign({}, this.user, t.user)), this.level && (t.level = this.level), this.applyFingerprint(t), (!t.breadcrumbs || 0 === t.breadcrumbs.length) && 0 < this.breadcrumbs.length && (t.breadcrumbs = void 0 !== r && 0 <= r ? this.breadcrumbs.slice(-r) : this.breadcrumbs), [2, this.notifyEventProcessors(t, n)]
                            })
                        })
                    }, n
                }();

            function f() {
                var e = r.getGlobalObject();
                return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], e.__SENTRY__.globalEventProcessors
            }
            t.Scope = i, t.addGlobalEventProcessor = function(e) {
                f().push(e)
            }
        }, function(e, t, n) {
            "use strict";
            var r, o, i, a;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (r = t.Severity || (t.Severity = {})).Fatal = "fatal", r.Error = "error", r.Warning = "warning", r.Log = "log", r.Info = "info", r.Debug = "debug", r.Critical = "critical", (o = t.Severity || (t.Severity = {})).fromString = function(e) {
                switch (e) {
                    case "debug":
                        return o.Debug;
                    case "info":
                        return o.Info;
                    case "warn":
                    case "warning":
                        return o.Warning;
                    case "error":
                        return o.Error;
                    case "fatal":
                        return o.Fatal;
                    case "critical":
                        return o.Critical;
                    case "log":
                    default:
                        return o.Log
                }
            }, (i = t.Status || (t.Status = {})).Unknown = "unknown", i.Skipped = "skipped", i.Success = "success", i.RateLimit = "rate_limit", i.Invalid = "invalid", i.Failed = "failed", (a = t.Status || (t.Status = {})).fromHttpCode = function(e) {
                return 200 <= e && e < 300 ? a.Success : 429 === e ? a.RateLimit : 400 <= e && e < 500 ? a.Invalid : 500 <= e ? a.Failed : a.Unknown
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                r = n(7),
                i = function() {
                    function e(e) {
                        this.limit = e, this.buffer = []
                    }
                    return e.prototype.isReady = function() {
                        return void 0 === this.limit || this.length() < this.limit
                    }, e.prototype.add = function(n) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var t = this;
                            return o.__generator(this, function(e) {
                                return this.isReady() ? (-1 === this.buffer.indexOf(n) && this.buffer.push(n), n.then(function() {
                                    return o.__awaiter(t, void 0, void 0, function() {
                                        return o.__generator(this, function(e) {
                                            return [2, this.remove(n)]
                                        })
                                    })
                                }).catch(function() {
                                    return o.__awaiter(t, void 0, void 0, function() {
                                        return o.__generator(this, function(e) {
                                            return [2, this.remove(n).catch(function() {})]
                                        })
                                    })
                                }), [2, n]) : [2, Promise.reject(new r.SentryError("Not adding Promise due to buffer limit reached."))]
                            })
                        })
                    }, e.prototype.remove = function(t) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            return o.__generator(this, function(e) {
                                return [2, this.buffer.splice(this.buffer.indexOf(t), 1)[0]]
                            })
                        })
                    }, e.prototype.length = function() {
                        return this.buffer.length
                    }, e.prototype.drain = function(r) {
                        return o.__awaiter(this, void 0, void 0, function() {
                            var n = this;
                            return o.__generator(this, function(e) {
                                return [2, new Promise(function(e) {
                                    var t = setTimeout(function() {
                                        r && 0 < r && e(!1)
                                    }, r);
                                    Promise.all(n.buffer).then(function() {
                                        clearTimeout(t), e(!0)
                                    }).catch(function() {
                                        e(!0)
                                    })
                                })]
                            })
                        })
                    }, e
                }();
            t.PromiseBuffer = i
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(0),
                o = n(13),
                i = function() {
                    function e() {}
                    return e.prototype.sendEvent = function(e) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                return [2, Promise.resolve({
                                    reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                                    status: o.Status.Skipped
                                })]
                            })
                        })
                    }, e.prototype.close = function(e) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                return [2, Promise.resolve(!0)]
                            })
                        })
                    }, e
                }();
            t.NoopTransport = i
        }, function(e, t, n) {
            e.exports = n(17)
        }, function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(6);

            function i() {
                window.removeEventListener("error", window.IndeedSentry.preInitErrorCatcher), window.IndeedSentry.preInitErrors = []
            }

            function r(r) {
                if (r.isEnabled) {
                    if (window.IndeedSentry.isEnabled = !0, !r.init || !r.init.dsn) throw new Error("Sentry: You must specify init.dsn");
                    o.init(function(o) {
                        for (var e = 1; e < arguments.length; e++) {
                            var i = null != arguments[e] ? arguments[e] : {},
                                t = Object.keys(i);
                            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(i, e).enumerable
                            }))), t.forEach(function(e) {
                                var t, n, r;
                                t = o, r = i[n = e], n in t ? Object.defineProperty(t, n, {
                                    value: r,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[n] = r
                            })
                        }
                        return o
                    }({
                        environment: r.init.environment || "production"
                    }, r.init)), o.configureScope(function(n) {
                        r.user && n.setUser(r.user), r.ctk && n.setTag("ctk", r.ctk), Object.keys(r.tags || []).forEach(function(e) {
                            var t = r.tags[e];
                            n.setTag(e, t)
                        }), Object.keys(r.extra || []).forEach(function(e) {
                            var t = r.tags[e];
                            n.setExtra(e, t)
                        }), r.configureScope && r.configureScope(n)
                    }), window.IndeedSentry && window.IndeedSentry.preInitErrors && window.IndeedSentry.preInitErrors.forEach(o.captureException), i(), Array.isArray(window.IndeedSentry.onReady) && window.IndeedSentry.onReady.forEach(function(e) {
                        e instanceof Function && e()
                    })
                } else window.IndeedSentry.isEnabled = !1, i();
                window.IndeedSentry.isLoaded = !0
            }
            window.IndeedSentry = window.IndeedSentry || {}, window.IndeedSentry.init = r, window.IndeedSentry.loadConfigAndInit = function() {
                var e = document.querySelector("#sentry-json");
                if (e) {
                    var t = e.getAttribute("data-json");
                    t && r(JSON.parse(t))
                }
            }, window.IndeedSentry.Sentry = o, window.IndeedSentry.loadConfigAndInit()
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(19);
            t.addBreadcrumb = r.addBreadcrumb, t.captureException = r.captureException, t.captureEvent = r.captureEvent, t.captureMessage = r.captureMessage, t.configureScope = r.configureScope, t.withScope = r.withScope;
            var o = n(2);
            t.addGlobalEventProcessor = o.addGlobalEventProcessor, t.getCurrentHub = o.getCurrentHub, t.Hub = o.Hub, t.getHubFromCarrier = o.getHubFromCarrier, t.Scope = o.Scope;
            var i = n(23);
            t.API = i.API;
            var a = n(24);
            t.BaseClient = a.BaseClient;
            var u = n(27);
            t.BaseBackend = u.BaseBackend;
            var s = n(10);
            t.Dsn = s.Dsn;
            var c = n(7);
            t.SentryError = c.SentryError;
            var l = n(14);
            t.PromiseBuffer = l.PromiseBuffer;
            var f = n(28);
            t.LogLevel = f.LogLevel;
            var p = n(29);
            t.initAndBind = p.initAndBind;
            var d = n(15);
            t.NoopTransport = d.NoopTransport;
            var h = n(30);
            t.Integrations = h
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = n(2);

            function r(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                var r = i.getCurrentHub();
                if (r && r[e]) return r[e].apply(r, o.__spread(t));
                throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
            }
            t.captureException = function(e) {
                var t;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (e) {
                    t = e
                }
                return r("captureException", e, {
                    originalException: e,
                    syntheticException: t
                })
            }, t.captureMessage = function(e, t) {
                var n;
                try {
                    throw new Error(e)
                } catch (e) {
                    n = e
                }
                return r("captureMessage", e, t, {
                    originalException: e,
                    syntheticException: n
                })
            }, t.captureEvent = function(e) {
                return r("captureEvent", e)
            }, t.addBreadcrumb = function(e) {
                r("addBreadcrumb", e)
            }, t.configureScope = function(e) {
                r("configureScope", e)
            }, t.withScope = function(e) {
                r("withScope", e)
            }, t._callOnClient = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                r.apply(void 0, o.__spread(["invokeClient", e], t))
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function e() {
                    this.hasWeakSet = "function" == typeof WeakSet, this.inner = this.hasWeakSet ? new WeakSet : []
                }
                return e.prototype.memoize = function(e) {
                    if (this.hasWeakSet) return !!this.inner.has(e) || (this.inner.add(e), !1);
                    for (var t = 0; t < this.inner.length; t++) {
                        if (this.inner[t] === e) return !0
                    }
                    return this.inner.push(e), !1
                }, e.prototype.unmemoize = function(e) {
                    if (this.hasWeakSet) this.inner.delete(e);
                    else
                        for (var t = 0; t < this.inner.length; t++)
                            if (this.inner[t] === e) {
                                this.inner.splice(t, 1);
                                break
                            }
                }, e
            }();
            t.Memo = r
        }, function(e, d, t) {
            "use strict";
            (function(r) {
                Object.defineProperty(d, "__esModule", {
                    value: !0
                });
                var i = t(0),
                    a = t(1),
                    o = t(4),
                    u = t(12);
                d.API_VERSION = 3;
                var s = function() {
                    function e(e, t, n) {
                        void 0 === t && (t = new u.Scope), void 0 === n && (n = d.API_VERSION), this.version = n, this.stack = [], this.stack.push({
                            client: e,
                            scope: t
                        })
                    }
                    return e.prototype.invokeClient = function(e) {
                        for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var o = this.getStackTop();
                        o && o.client && o.client[e] && (t = o.client)[e].apply(t, i.__spread(n, [o.scope]))
                    }, e.prototype.invokeClientAsync = function(e) {
                        for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var o = this.getStackTop();
                        o && o.client && o.client[e] && (t = o.client)[e].apply(t, i.__spread(n, [o.scope])).catch(function(e) {
                            a.logger.error(e)
                        })
                    }, e.prototype.isOlderThan = function(e) {
                        return this.version < e
                    }, e.prototype.bindClient = function(t) {
                        var e = this.getStackTop();
                        e.client = t, e && e.scope && t && e.scope.addScopeListener(function(e) {
                            if (t.getBackend) try {
                                t.getBackend().storeScope(e)
                            } catch (e) {}
                        })
                    }, e.prototype.pushScope = function() {
                        var e = this.getStack(),
                            t = 0 < e.length ? e[e.length - 1].scope : void 0,
                            n = u.Scope.clone(t);
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: n
                        }), n
                    }, e.prototype.popScope = function() {
                        return void 0 !== this.getStack().pop()
                    }, e.prototype.withScope = function(e) {
                        var t = this.pushScope();
                        try {
                            e(t)
                        } finally {
                            this.popScope()
                        }
                    }, e.prototype.getClient = function() {
                        return this.getStackTop().client
                    }, e.prototype.getScope = function() {
                        return this.getStackTop().scope
                    }, e.prototype.getStack = function() {
                        return this.stack
                    }, e.prototype.getStackTop = function() {
                        return this.stack[this.stack.length - 1]
                    }, e.prototype.captureException = function(e, t) {
                        var n = this._lastEventId = o.uuid4();
                        return this.invokeClientAsync("captureException", e, i.__assign({}, t, {
                            event_id: n
                        })), n
                    }, e.prototype.captureMessage = function(e, t, n) {
                        var r = this._lastEventId = o.uuid4();
                        return this.invokeClientAsync("captureMessage", e, t, i.__assign({}, n, {
                            event_id: r
                        })), r
                    }, e.prototype.captureEvent = function(e, t) {
                        var n = this._lastEventId = o.uuid4();
                        return this.invokeClientAsync("captureEvent", e, i.__assign({}, t, {
                            event_id: n
                        })), n
                    }, e.prototype.lastEventId = function() {
                        return this._lastEventId
                    }, e.prototype.addBreadcrumb = function(e, t) {
                        this.invokeClient("addBreadcrumb", e, i.__assign({}, t))
                    }, e.prototype.configureScope = function(e) {
                        var t = this.getStackTop();
                        t.scope && t.client && e(t.scope)
                    }, e.prototype.run = function(e) {
                        var t = n(this);
                        try {
                            e(this)
                        } finally {
                            n(t)
                        }
                    }, e.prototype.getIntegration = function(t) {
                        try {
                            return this.getClient().getIntegration(t)
                        } catch (e) {
                            return a.logger.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                        }
                    }, e
                }();

                function c() {
                    var e = o.getGlobalObject();
                    return e.__SENTRY__ = e.__SENTRY__ || {
                        hub: void 0
                    }, e
                }

                function n(e) {
                    var t = c(),
                        n = f(t);
                    return p(t, e), n
                }

                function l(e) {
                    return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
                }

                function f(e) {
                    return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = {}, e.__SENTRY__.hub = new s), e.__SENTRY__.hub
                }

                function p(e, t) {
                    return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0)
                }
                d.Hub = s, d.getMainCarrier = c, d.makeMain = n, d.getCurrentHub = function() {
                    var t = c();
                    l(t) && !f(t).isOlderThan(d.API_VERSION) || p(t, new s);
                    try {
                        var e = o.dynamicRequire(r, "domain").active;
                        if (!e) return f(t);
                        if (!l(e) || f(e).isOlderThan(d.API_VERSION)) {
                            var n = f(t).getStackTop();
                            p(e, new s(n.client, u.Scope.clone(n.scope)))
                        }
                        return f(e)
                    } catch (e) {
                        return f(t)
                    }
                }, d.hasHubOnCarrier = l, d.getHubFromCarrier = f, d.setHubOnCarrier = p
            }).call(this, t(22)(e))
        }, function(e, t) {
            e.exports = function(e) {
                return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                    enumerable: !0,
                    get: function() {
                        return e.l
                    }
                }), Object.defineProperty(e, "id", {
                    enumerable: !0,
                    get: function() {
                        return e.i
                    }
                }), e.webpackPolyfill = 1), e
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(5),
                o = n(10),
                i = function() {
                    function e(e) {
                        this.dsn = e, this.dsnObject = new o.Dsn(e)
                    }
                    return e.prototype.getDsn = function() {
                        return this.dsnObject
                    }, e.prototype.getStoreEndpoint = function() {
                        return "" + this.getBaseUrl() + this.getStoreEndpointPath()
                    }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                        var e = {
                            sentry_key: this.dsnObject.user,
                            sentry_version: "7"
                        };
                        return this.getStoreEndpoint() + "?" + r.urlEncode(e)
                    }, e.prototype.getBaseUrl = function() {
                        var e = this.dsnObject,
                            t = e.protocol ? e.protocol + ":" : "",
                            n = e.port ? ":" + e.port : "";
                        return t + "//" + e.host + n
                    }, e.prototype.getStoreEndpointPath = function() {
                        var e = this.dsnObject;
                        return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
                    }, e.prototype.getRequestHeaders = function(e, t) {
                        var n = this.dsnObject,
                            r = ["Sentry sentry_version=7"];
                        return r.push("sentry_timestamp=" + (new Date).getTime()), r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                            "Content-Type": "application/json",
                            "X-Sentry-Auth": r.join(", ")
                        }
                    }, e.prototype.getReportDialogEndpoint = function(e) {
                        void 0 === e && (e = {});
                        var t = this.dsnObject,
                            n = this.getBaseUrl() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/",
                            r = [];
                        for (var o in r.push("dsn=" + t.toString()), e)
                            if ("user" === o) {
                                if (!e.user) continue;
                                e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                            } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                        return r.length ? n + "?" + r.join("&") : n
                    }, e
                }();
            t.API = i
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = n(0),
                h = n(13),
                v = n(25),
                u = n(3),
                g = n(1),
                y = n(4),
                m = n(9),
                r = n(10),
                o = n(26),
                i = n(14),
                a = function() {
                    function e(e, t) {
                        this.buffer = new i.PromiseBuffer, this.backend = new e(t), (this.options = t).dsn && (this.dsn = new r.Dsn(t.dsn)), this.integrations = o.setupIntegrations(this.options)
                    }
                    return e.prototype.install = function() {
                        if (!this.isEnabled()) return this.installed = !1;
                        var e = this.getBackend();
                        return !this.installed && e.install && e.install(), this.installed = !0
                    }, e.prototype.captureException = function(n, r, o) {
                        return d.__awaiter(this, void 0, void 0, function() {
                            var t = this;
                            return d.__generator(this, function(e) {
                                return [2, this.buffer.add(d.__awaiter(t, void 0, void 0, function() {
                                    var t;
                                    return d.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, this.getBackend().eventFromException(n, r)];
                                            case 1:
                                                return t = e.sent(), [2, this.captureEvent(t, r, o)]
                                        }
                                    })
                                }))]
                            })
                        })
                    }, e.prototype.captureMessage = function(r, o, i, a) {
                        return d.__awaiter(this, void 0, void 0, function() {
                            var t = this;
                            return d.__generator(this, function(e) {
                                return [2, this.buffer.add(d.__awaiter(t, void 0, void 0, function() {
                                    var t, n;
                                    return d.__generator(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return u.isPrimitive(r) ? [4, this.getBackend().eventFromMessage("" + r, o, i)] : [3, 2];
                                            case 1:
                                                return n = e.sent(), [3, 4];
                                            case 2:
                                                return [4, this.getBackend().eventFromException(r, i)];
                                            case 3:
                                                n = e.sent(), e.label = 4;
                                            case 4:
                                                return t = n, [2, this.captureEvent(t, i, a)]
                                        }
                                    })
                                }))]
                            })
                        })
                    }, e.prototype.captureEvent = function(r, o, i) {
                        return d.__awaiter(this, void 0, void 0, function() {
                            var t = this;
                            return d.__generator(this, function(e) {
                                return [2, this.buffer.add(d.__awaiter(t, void 0, void 0, function() {
                                    var n = this;
                                    return d.__generator(this, function(e) {
                                        return [2, this.processEvent(r, function(t) {
                                            return d.__awaiter(n, void 0, void 0, function() {
                                                return d.__generator(this, function(e) {
                                                    return [2, this.getBackend().sendEvent(t)]
                                                })
                                            })
                                        }, o, i)]
                                    })
                                }))]
                            })
                        })
                    }, e.prototype.addBreadcrumb = function(e, t, n) {
                        var r = this.getOptions(),
                            o = r.beforeBreadcrumb,
                            i = r.maxBreadcrumbs,
                            a = void 0 === i ? 30 : i;
                        if (!(a <= 0)) {
                            var u = (new Date).getTime() / 1e3,
                                s = d.__assign({
                                    timestamp: u
                                }, e),
                                c = o ? y.consoleSandbox(function() {
                                    return o(s, t)
                                }) : s;
                            null !== c && this.getBackend().storeBreadcrumb(c) && n && n.addBreadcrumb(c, Math.min(a, 100))
                        }
                    }, e.prototype.getDsn = function() {
                        return this.dsn
                    }, e.prototype.getOptions = function() {
                        return this.options
                    }, e.prototype.getBackend = function() {
                        return this.backend
                    }, e.prototype.isEnabled = function() {
                        return !1 !== this.getOptions().enabled && void 0 !== this.dsn
                    }, e.prototype.prepareEvent = function(l, f, p) {
                        return d.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o, i, a, u, s, c;
                            return d.__generator(this, function(e) {
                                return t = this.getOptions(), n = t.environment, r = t.maxBreadcrumbs, o = void 0 === r ? 30 : r, i = t.release, a = t.dist, void 0 === (u = d.__assign({}, l)).environment && void 0 !== n && (u.environment = n), void 0 === u.release && void 0 !== i && (u.release = i), void 0 === u.dist && void 0 !== a && (u.dist = a), u.message && (u.message = m.truncate(u.message, 250)), (s = u.exception && u.exception.values && u.exception.values[0]) && s.value && (s.value = m.truncate(s.value, 250)), (c = u.request) && c.url && (c.url = m.truncate(c.url, 250)), void 0 === u.event_id && (u.event_id = y.uuid4()), this._addIntegrations(u.sdk), f ? [2, f.applyToEvent(u, p, Math.min(o, 100))] : [2, u]
                            })
                        })
                    }, e.prototype._addIntegrations = function(e) {
                        var t = Object.keys(this.integrations);
                        e && 0 < t.length && (e.integrations = t)
                    }, e.prototype.processEvent = function(c, l, f, p) {
                        return d.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o, i, a, u, s;
                            return d.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.isEnabled() ? (t = this.getOptions(), n = t.beforeSend, "number" == typeof(r = t.sampleRate) && Math.random() > r ? [2, {
                                            status: h.Status.Skipped
                                        }] : [4, this.prepareEvent(c, p, f)]) : [2, {
                                            status: h.Status.Skipped
                                        }];
                                    case 1:
                                        if (null === (o = e.sent())) return [2, {
                                            status: h.Status.Skipped
                                        }];
                                        i = o, e.label = 2;
                                    case 2:
                                        return e.trys.push([2, 5, , 6]), f && f.data && !0 === f.data.__sentry__ || !n ? [3, 4] : [4, n(o, f)];
                                    case 3:
                                        void 0 === (i = e.sent()) && g.logger.error("`beforeSend` method has to return `null` or a valid event"), e.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return a = e.sent(), v.forget(this.captureException(a, {
                                            data: {
                                                __sentry__: !0
                                            },
                                            originalException: a
                                        })), [2, {
                                            reason: "Event processing in beforeSend method threw an exception",
                                            status: h.Status.Invalid
                                        }];
                                    case 6:
                                        if (null === i) return [2, {
                                            reason: "Event dropped due to being discarded by beforeSend method",
                                            status: h.Status.Skipped
                                        }];
                                        e.label = 7;
                                    case 7:
                                        return e.trys.push([7, 9, , 10]), [4, l(i)];
                                    case 8:
                                        return (u = e.sent()).event = i, u.status, h.Status.RateLimit, [2, u];
                                    case 9:
                                        return s = e.sent(), g.logger.error("" + s), [2, {
                                            reason: "" + s,
                                            status: h.Status.Failed
                                        }];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.flush = function(t) {
                        return d.__awaiter(this, void 0, void 0, function() {
                            return d.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Promise.all([this.getBackend().getTransport().close(t), this.buffer.drain(t)])];
                                    case 1:
                                        return [2, e.sent().reduce(function(e, t) {
                                            return e && t
                                        })]
                                }
                            })
                        })
                    }, e.prototype.close = function(t) {
                        return d.__awaiter(this, void 0, void 0, function() {
                            return d.__generator(this, function(e) {
                                return [2, this.flush(t)]
                            })
                        })
                    }, e.prototype.getIntegrations = function() {
                        return this.integrations || {}
                    }, e.prototype.getIntegration = function(t) {
                        try {
                            return this.integrations[t.id] || null
                        } catch (e) {
                            return g.logger.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                        }
                    }, e
                }();
            t.BaseClient = a
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(0);
            t.forget = function(e) {
                e.catch(function(e) {})
            }, t.filterAsync = function(t, r, o) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, Promise.all(t.map(r, o))];
                            case 1:
                                return n = e.sent(), [2, t.filter(function(e, t) {
                                    return n[t]
                                })]
                        }
                    })
                })
            }
        }, function(e, r, t) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var g = t(0),
                o = t(1);

            function i(e) {
                var t, n, r, o, i = e.defaultIntegrations && g.__spread(e.defaultIntegrations) || [],
                    a = e.integrations,
                    u = [];
                if (Array.isArray(a)) {
                    var s = a.map(function(e) {
                            return e.name
                        }),
                        c = [];
                    try {
                        for (var l = g.__values(i), f = l.next(); !f.done; f = l.next()) {
                            var p = f.value; - 1 === s.indexOf(y(p)) && -1 === c.indexOf(y(p)) && (u.push(p), c.push(y(p)))
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            f && !f.done && (n = l.return) && n.call(l)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    try {
                        for (var d = g.__values(a), h = d.next(); !h.done; h = d.next()) {
                            var v = h.value; - 1 === c.indexOf(y(v)) && (u.push(v), c.push(y(v)))
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            h && !h.done && (o = d.return) && o.call(d)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                } else {
                    if ("function" != typeof a) return g.__spread(i);
                    u = a(i), u = Array.isArray(u) ? u : [u]
                }
                return u
            }

            function a(t, n) {
                if (-1 === r.installedIntegrations.indexOf(y(t))) {
                    try {
                        t.setupOnce()
                    } catch (e) {
                        t.install && (o.logger.warn("Integration " + y(t) + ': The install method is deprecated. Use "setupOnce".'), t.install(n))
                    }
                    r.installedIntegrations.push(y(t)), o.logger.log("Integration installed: " + y(t))
                }
            }

            function y(e) {
                return e.constructor.id || e.name
            }
            r.installedIntegrations = [], r.getIntegrationsToSetup = i, r.setupIntegration = a, r.setupIntegrations = function(t) {
                var n = {};
                return i(t).forEach(function(e) {
                    a(n[y(e)] = e, t)
                }), n
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(0),
                o = n(1),
                i = n(5),
                a = n(7),
                u = n(15),
                s = function() {
                    function e(e) {
                        this.options = e, this.options.dsn || o.logger.warn("No DSN provided, backend will not do anything."), this.transport = this.setupTransport()
                    }
                    return e.prototype.setupTransport = function() {
                        return new u.NoopTransport
                    }, e.prototype.eventFromException = function(e, t) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                throw new a.SentryError("Backend has to implement `eventFromException` method")
                            })
                        })
                    }, e.prototype.eventFromMessage = function(e, t, n) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                throw new a.SentryError("Backend has to implement `eventFromMessage` method")
                            })
                        })
                    }, e.prototype.sendEvent = function(t) {
                        return r.__awaiter(this, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
                                return this.transport.captureEvent ? [2, this.transport.captureEvent(t)] : [2, this.transport.sendEvent(i.serialize(t))]
                            })
                        })
                    }, e.prototype.storeBreadcrumb = function(e) {
                        return !0
                    }, e.prototype.storeScope = function(e) {}, e.prototype.getTransport = function() {
                        return this.transport
                    }, e
                }();
            t.BaseBackend = s
        }, function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), (r = t.LogLevel || (t.LogLevel = {}))[r.None = 0] = "None", r[r.Error = 1] = "Error", r[r.Debug = 2] = "Debug", r[r.Verbose = 3] = "Verbose"
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(2),
                o = n(1);
            t.initAndBind = function(e, t) {
                !0 === t.debug && o.logger.enable();
                var n = new e(t);
                r.getCurrentHub().bindClient(n), n.install()
            }
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(31);
            t.Dedupe = r.Dedupe;
            var o = n(32);
            t.FunctionToString = o.FunctionToString;
            var i = n(33);
            t.SDKInformation = i.SDKInformation;
            var a = n(34);
            t.InboundFilters = a.InboundFilters;
            var u = n(35);
            t.ExtraErrorData = u.ExtraErrorData;
            var s = n(36);
            t.Debug = s.Debug;
            var c = n(37);
            t.RewriteFrames = c.RewriteFrames
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = n(2),
                a = n(1),
                u = n(4),
                r = function() {
                    function r() {
                        this.name = r.id
                    }
                    return r.prototype.setupOnce = function() {
                        var e = this;
                        i.addGlobalEventProcessor(function(n) {
                            return o.__awaiter(e, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(e) {
                                    if (t = i.getCurrentHub().getIntegration(r)) {
                                        try {
                                            if (t.shouldDropEvent(n, t.previousEvent)) return [2, null]
                                        } catch (e) {
                                            return [2, t.previousEvent = n]
                                        }
                                        return [2, t.previousEvent = n]
                                    }
                                    return [2, n]
                                })
                            })
                        })
                    }, r.prototype.shouldDropEvent = function(e, t) {
                        return !!t && (this.isSameMessageEvent(e, t) ? (a.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + u.getEventDescription(e)), !0) : !!this.isSameExceptionEvent(e, t) && (a.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + u.getEventDescription(e)), !0))
                    }, r.prototype.isSameMessageEvent = function(e, t) {
                        var n = e.message,
                            r = t.message;
                        return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this.isSameFingerprint(e, t) && !!this.isSameStacktrace(e, t))))
                    }, r.prototype.getFramesFromEvent = function(e) {
                        var t = e.exception;
                        if (!t) return e.stacktrace ? e.stacktrace.frames : void 0;
                        try {
                            return t.values[0].stacktrace.frames
                        } catch (e) {
                            return
                        }
                    }, r.prototype.isSameStacktrace = function(e, t) {
                        var n = this.getFramesFromEvent(e),
                            r = this.getFramesFromEvent(t);
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        if (n = n, (r = r).length !== n.length) return !1;
                        for (var o = 0; o < r.length; o++) {
                            var i = r[o],
                                a = n[o];
                            if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
                        }
                        return !0
                    }, r.prototype.getExceptionFromEvent = function(e) {
                        return e.exception && e.exception.values && e.exception.values[0]
                    }, r.prototype.isSameExceptionEvent = function(e, t) {
                        var n = this.getExceptionFromEvent(t),
                            r = this.getExceptionFromEvent(e);
                        return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this.isSameFingerprint(e, t) && !!this.isSameStacktrace(e, t)))
                    }, r.prototype.isSameFingerprint = function(e, t) {
                        var n = e.fingerprint,
                            r = t.fingerprint;
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        n = n, r = r;
                        try {
                            return !(n.join("") !== r.join(""))
                        } catch (e) {
                            return !1
                        }
                    }, r.id = "Dedupe", r
                }();
            t.Dedupe = r
        }, function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                function e() {
                    this.name = e.id
                }
                return e.prototype.setupOnce = function() {
                    r = Function.prototype.toString, Function.prototype.toString = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = this.__sentry__ ? this.__sentry_original__ : this;
                        return r.apply(n, e)
                    }
                }, e.id = "FunctionToString", e
            }();
            t.FunctionToString = o
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = function() {
                    function e() {
                        this.name = "SDKInformation"
                    }
                    return e.prototype.setupOnce = function() {
                        r.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.")
                    }, e
                }();
            t.SDKInformation = o
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = n(0),
                c = n(2),
                r = n(3),
                o = n(1),
                i = n(4),
                a = n(9),
                l = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                u = function() {
                    function u(e) {
                        void 0 === e && (e = {}), this.options = e, this.name = u.id
                    }
                    return u.prototype.setupOnce = function() {
                        var e = this;
                        c.addGlobalEventProcessor(function(a) {
                            return s.__awaiter(e, void 0, void 0, function() {
                                var t, n, r, o, i;
                                return s.__generator(this, function(e) {
                                    return (t = c.getCurrentHub()) && (n = t.getIntegration(u)) && (r = t.getClient(), o = r ? r.getOptions() : {}, i = n.mergeOptions(o), n.shouldDropEvent(a, i)) ? [2, null] : [2, a]
                                })
                            })
                        })
                    }, u.prototype.shouldDropEvent = function(e, t) {
                        return this.isSentryError(e, t) ? (o.logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + i.getEventDescription(e)), !0) : this.isIgnoredError(e, t) ? (o.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + i.getEventDescription(e)), !0) : this.isBlacklistedUrl(e, t) ? (o.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + i.getEventDescription(e) + ".\nUrl: " + this.getEventFilterUrl(e)), !0) : !this.isWhitelistedUrl(e, t) && (o.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + i.getEventDescription(e) + ".\nUrl: " + this.getEventFilterUrl(e)), !0)
                    }, u.prototype.isSentryError = function(e, t) {
                        if (void 0 === t && (t = {}), !t.ignoreInternal) return !1;
                        try {
                            return "SentryError" === e.exception.values[0].type
                        } catch (e) {
                            return !1
                        }
                    }, u.prototype.isIgnoredError = function(e, n) {
                        var r = this;
                        return void 0 === n && (n = {}), !(!n.ignoreErrors || !n.ignoreErrors.length) && this.getPossibleEventMessages(e).some(function(t) {
                            return n.ignoreErrors.some(function(e) {
                                return r.isMatchingPattern(t, e)
                            })
                        })
                    }, u.prototype.isBlacklistedUrl = function(e, t) {
                        var n = this;
                        if (void 0 === t && (t = {}), !t.blacklistUrls || !t.blacklistUrls.length) return !1;
                        var r = this.getEventFilterUrl(e);
                        return !!r && t.blacklistUrls.some(function(e) {
                            return n.isMatchingPattern(r, e)
                        })
                    }, u.prototype.isWhitelistedUrl = function(e, t) {
                        var n = this;
                        if (void 0 === t && (t = {}), !t.whitelistUrls || !t.whitelistUrls.length) return !0;
                        var r = this.getEventFilterUrl(e);
                        return !r || t.whitelistUrls.some(function(e) {
                            return n.isMatchingPattern(r, e)
                        })
                    }, u.prototype.mergeOptions = function(e) {
                        return void 0 === e && (e = {}), {
                            blacklistUrls: s.__spread(this.options.blacklistUrls || [], e.blacklistUrls || []),
                            ignoreErrors: s.__spread(this.options.ignoreErrors || [], e.ignoreErrors || [], l),
                            ignoreInternal: void 0 === this.options.ignoreInternal || this.options.ignoreInternal,
                            whitelistUrls: s.__spread(this.options.whitelistUrls || [], e.whitelistUrls || [])
                        }
                    }, u.prototype.isMatchingPattern = function(e, t) {
                        return r.isRegExp(t) ? t.test(e) : "string" == typeof t && a.includes(e, t)
                    }, u.prototype.getPossibleEventMessages = function(t) {
                        if (t.message) return [t.message];
                        if (!t.exception) return [];
                        try {
                            var e = t.exception.values[0],
                                n = e.type,
                                r = e.value;
                            return ["" + r, n + ": " + r]
                        } catch (e) {
                            return o.logger.error("Cannot extract message for event " + i.getEventDescription(t)), []
                        }
                    }, u.prototype.getEventFilterUrl = function(t) {
                        try {
                            if (t.stacktrace) {
                                var e = t.stacktrace.frames;
                                return e[e.length - 1].filename
                            }
                            if (t.exception) {
                                var n = t.exception.values[0].stacktrace.frames;
                                return n[n.length - 1].filename
                            }
                            return null
                        } catch (e) {
                            return o.logger.error("Cannot extract url for event " + i.getEventDescription(t)), null
                        }
                    }, u.id = "InboundFilters", u
                }();
            t.InboundFilters = u
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var d = n(0),
                i = n(2),
                h = n(3),
                v = n(1),
                a = n(5),
                r = function() {
                    function o(e) {
                        void 0 === e && (e = {
                            depth: 3
                        }), this.options = e, this.name = o.id
                    }
                    return o.prototype.setupOnce = function() {
                        var e = this;
                        i.addGlobalEventProcessor(function(n, r) {
                            return d.__awaiter(e, void 0, void 0, function() {
                                var t;
                                return d.__generator(this, function(e) {
                                    return (t = i.getCurrentHub().getIntegration(o)) ? [2, t.enhanceEventWithErrorData(n, r)] : [2, n]
                                })
                            })
                        })
                    }, o.prototype.enhanceEventWithErrorData = function(e, t) {
                        if (!t || !t.originalException || !h.isError(t.originalException)) return e;
                        var n = this.extractErrorData(t.originalException);
                        if (n) {
                            var r = d.__assign({}, e.extra),
                                o = a.safeNormalize(n, this.options.depth);
                            return h.isString(o) || (r = d.__assign({}, e.extra, o)), d.__assign({}, e, {
                                extra: r
                            })
                        }
                        return e
                    }, o.prototype.extractErrorData = function(e) {
                        var t, n, r, o = null;
                        try {
                            var i = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber"],
                                a = e.name || e.constructor.name,
                                u = Object.getOwnPropertyNames(e).filter(function(e) {
                                    return -1 === i.indexOf(e)
                                });
                            if (u.length) {
                                var s = {};
                                try {
                                    for (var c = d.__values(u), l = c.next(); !l.done; l = c.next()) {
                                        var f = l.value,
                                            p = e[f];
                                        h.isError(p) && (p = p.toString()), s[f] = p
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (n = c.return) && n.call(c)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }(r = {})[a] = s, o = r
                            }
                        } catch (e) {
                            v.logger.error("Unable to extract extra data from the Error object:", e)
                        }
                        return o
                    }, o.id = "ExtraErrorData", o
                }();
            t.ExtraErrorData = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(0),
                i = n(2),
                r = function() {
                    function r(e) {
                        this.name = r.id, this.options = o.__assign({
                            debugger: !1,
                            stringify: !1
                        }, e)
                    }
                    return r.prototype.setupOnce = function() {
                        var t = this;
                        i.addGlobalEventProcessor(function(n, e) {
                            return o.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return o.__generator(this, function(e) {
                                    return (t = i.getCurrentHub().getIntegration(r)) && (t.options.debugger, t.options.stringify), [2, n]
                                })
                            })
                        })
                    }, r.id = "Debug", r
                }();
            t.Debug = r
        }, function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = n(0),
                o = n(2),
                i = n(38),
                r = function() {
                    function r(e) {
                        void 0 === e && (e = {});
                        var t = this;
                        this.name = r.id, this.iteratee = function(n) {
                            return c.__awaiter(t, void 0, void 0, function() {
                                var t;
                                return c.__generator(this, function(e) {
                                    return n.filename && n.filename.startsWith("/") && (t = this.root ? i.relative(this.root, n.filename) : i.basename(n.filename), n.filename = "app:///" + t), [2, n]
                                })
                            })
                        }, e.root && (this.root = e.root), e.iteratee && (this.iteratee = e.iteratee)
                    }
                    return r.prototype.setupOnce = function() {
                        var e = this;
                        o.addGlobalEventProcessor(function(n) {
                            return c.__awaiter(e, void 0, void 0, function() {
                                var t;
                                return c.__generator(this, function(e) {
                                    return (t = o.getCurrentHub().getIntegration(r)) ? [2, t.process(n)] : [2, n]
                                })
                            })
                        })
                    }, r.prototype.process = function(s) {
                        return c.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, o, i, a, u;
                            return c.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!(t = this.getFramesFromEvent(s))) return [3, 4];
                                        for (r in n = [], t) n.push(r);
                                        o = 0, e.label = 1;
                                    case 1:
                                        return o < n.length ? (i = n[o], a = t, u = i, [4, this.iteratee(t[i])]) : [3, 4];
                                    case 2:
                                        a[u] = e.sent(), e.label = 3;
                                    case 3:
                                        return o++, [3, 1];
                                    case 4:
                                        return [2, s]
                                }
                            })
                        })
                    }, r.prototype.getFramesFromEvent = function(e) {
                        var t = e.exception;
                        if (!t) return e.stacktrace ? e.stacktrace.frames : void 0;
                        try {
                            return t.values[0].stacktrace.frames
                        } catch (e) {
                            return
                        }
                    }, r.id = "RewriteFrames", r
                }();
            t.RewriteFrames = r
        }, function(e, t, n) {
            "use strict";

            function a(e, t) {
                for (var n = 0, r = e.length - 1; 0 <= r; r--) {
                    var o = e[r];
                    "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
                }
                if (t)
                    for (; n--; n) e.unshift("..");
                return e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

            function o(e) {
                var t = r.exec(e);
                return t ? t.slice(1) : []
            }

            function s() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = "", r = !1, o = e.length - 1; - 1 <= o && !r; o--) {
                    var i = 0 <= o ? e[o] : "/";
                    i && (n = i + "/" + n, r = "/" === i.charAt(0))
                }
                return (r ? "/" : "") + (n = a(n.split("/").filter(function(e) {
                    return !!e
                }), !r).join("/")) || "."
            }

            function c(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++);
                for (var n = e.length - 1; 0 <= n && "" === e[n]; n--);
                return n < t ? [] : e.slice(t, n - t + 1)
            }

            function i(e) {
                var t = u(e),
                    n = "/" === e.substr(-1),
                    r = a(e.split("/").filter(function(e) {
                        return !!e
                    }), !t).join("/");
                return r || t || (r = "."), r && n && (r += "/"), (t ? "/" : "") + r
            }

            function u(e) {
                return "/" === e.charAt(0)
            }
            t.resolve = s, t.relative = function(e, t) {
                e = s(e).substr(1), t = s(t).substr(1);
                for (var n = c(e.split("/")), r = c(t.split("/")), o = Math.min(n.length, r.length), i = o, a = 0; a < o; a++)
                    if (n[a] !== r[a]) {
                        i = a;
                        break
                    }
                var u = [];
                for (a = i; a < n.length; a++) u.push("..");
                return (u = u.concat(r.slice(i))).join("/")
            }, t.normalize = i, t.isAbsolute = u, t.join = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return i(e.join("/"))
            }, t.dirname = function(e) {
                var t = o(e),
                    n = t[0],
                    r = t[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
            }, t.basename = function(e, t) {
                var n = o(e)[2];
                return t && n.substr(-1 * t.length) === t && (n = n.substr(0, n.length - t.length)), n
            }
        }])
    }
    "function" == typeof Promise ? e() : (window.promisePolyfillQueue = window.promisePolyfillQueue || [], function(e, t) {
        var n = document.querySelector('script[data-fl-polyfill="promise"]');
        if (window.promisePolyfillQueue.push(t), !(n && 1 < window.promisePolyfillQueue.length)) {
            var r = document.createElement("script");
            r.setAttribute("data-fl-polyfill", "promise"), r.onload = function() {
                i()
            }, r.onerror = function() {
                throw i(), new Error("Failed to load Polyfill script " + e)
            }, r.src = e;
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(r, o)
        }
    }("https://d3fw5vlhllyvee.cloudfront.net/frontend-sentry-bundle/v1.1.2/4.2.4/es6-promise.auto.min.js", e))
}();
//# sourceMappingURL=sentry.js.map