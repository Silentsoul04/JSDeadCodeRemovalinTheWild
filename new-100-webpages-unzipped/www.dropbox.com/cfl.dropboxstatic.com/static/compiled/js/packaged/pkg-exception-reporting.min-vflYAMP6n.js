!(function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define("external/flux", [], e);
    else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.Flux = e()
    }
})(function() {
    return (function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var c = "function" == typeof require && require;
                    if (!s && c) return c(a, !0);
                    if (o) return o(a, !0);
                    var l = new Error("Cannot find module '" + a + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = n[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var n = t[a][1][e];
                    return i(n ? n : e)
                }, u, u.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    })({
        1: [function(e, t, n) {
            t.exports.Dispatcher = e("./lib/Dispatcher")
        }, {
            "./lib/Dispatcher": 2
        }],
        2: [function(e, t, n) {
            "use strict";

            function r() {
                this.$Dispatcher_callbacks = {}, this.$Dispatcher_isPending = {}, this.$Dispatcher_isHandled = {}, this.$Dispatcher_isDispatching = !1, this.$Dispatcher_pendingPayload = null
            }
            var i = e("./invariant"),
                o = 1;
            r.prototype.register = function(e) {
                var t = "ID_" + o++;
                return this.$Dispatcher_callbacks[t] = e, t
            }, r.prototype.unregister = function(e) {
                i(this.$Dispatcher_callbacks[e], "Dispatcher.unregister(...): `%s` does not map to a registered callback.", e), delete this.$Dispatcher_callbacks[e]
            }, r.prototype.waitFor = function(e) {
                i(this.$Dispatcher_isDispatching, "Dispatcher.waitFor(...): Must be invoked while dispatching.");
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    this.$Dispatcher_isPending[n] ? i(this.$Dispatcher_isHandled[n], "Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.", n) : (i(this.$Dispatcher_callbacks[n], "Dispatcher.waitFor(...): `%s` does not map to a registered callback.", n), this.$Dispatcher_invokeCallback(n))
                }
            }, r.prototype.dispatch = function(e) {
                i(!this.$Dispatcher_isDispatching, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."), this.$Dispatcher_startDispatching(e);
                try {
                    for (var t in this.$Dispatcher_callbacks) this.$Dispatcher_isPending[t] || this.$Dispatcher_invokeCallback(t)
                } finally {
                    this.$Dispatcher_stopDispatching()
                }
            }, r.prototype.isDispatching = function() {
                return this.$Dispatcher_isDispatching
            }, r.prototype.$Dispatcher_invokeCallback = function(e) {
                this.$Dispatcher_isPending[e] = !0, this.$Dispatcher_callbacks[e](this.$Dispatcher_pendingPayload), this.$Dispatcher_isHandled[e] = !0
            }, r.prototype.$Dispatcher_startDispatching = function(e) {
                for (var t in this.$Dispatcher_callbacks) this.$Dispatcher_isPending[t] = !1, this.$Dispatcher_isHandled[t] = !1;
                this.$Dispatcher_pendingPayload = e, this.$Dispatcher_isDispatching = !0
            }, r.prototype.$Dispatcher_stopDispatching = function() {
                this.$Dispatcher_pendingPayload = null, this.$Dispatcher_isDispatching = !1
            }, t.exports = r
        }, {
            "./invariant": 3
        }],
        3: [function(e, t, n) {
            "use strict";
            var r = function(e, t, n, r, i, o, a, s) {
                if (!e) {
                    var c;
                    if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var l = [n, r, i, o, a, s],
                            u = 0;
                        c = new Error("Invariant Violation: " + t.replace(/%s/g, function() {
                            return l[u++]
                        }))
                    }
                    throw c.framesToPop = 1, c
                }
            };
            t.exports = r
        }, {}]
    }, {}, [1])(1)
}), (function(e, t) {
    function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }

    function r(e) {
        return void 0 === e
    }
    if (e) {
        var i = {},
            o = e.TraceKit,
            a = [].slice;
        i.noConflict = function() {
            return e.TraceKit = o, i
        }, i.wrap = function(e) {
            function t() {
                try {
                    return e.apply(this, arguments)
                } catch (e) {
                    throw i.report(e), e
                }
            }
            return t
        }, i.report = (function() {
            function t(e) {
                c(), d.push(e)
            }

            function r(e) {
                for (var t = d.length - 1; t >= 0; --t) d[t] === e && d.splice(t, 1)
            }

            function o(e, t) {
                var r = null;
                if (!t || i.collectWindowErrors) {
                    for (var o in d)
                        if (n(d, o)) try {
                            d[o].apply(null, [e].concat(a.call(arguments, 2)))
                        } catch (e) {
                            r = e
                        }
                    if (r) throw r
                }
            }

            function s(e, t, n, r, a) {
                var s = null;
                if (m) i.computeStackTrace.augmentStackTraceWithInitialElement(m, t, n, e), l();
                else if (a) s = i.computeStackTrace(a), o(s, !0);
                else {
                    var c = {
                        url: t,
                        line: n,
                        column: r
                    };
                    c.func = i.computeStackTrace.guessFunctionName(c.url, c.line), c.context = i.computeStackTrace.gatherContext(c.url, c.line), s = {
                        mode: "onerror",
                        message: e,
                        stack: [c]
                    }, o(s, !0)
                }
                return !!f && f.apply(this, arguments)
            }

            function c() {
                p !== !0 && (f = e.onerror, e.onerror = s, p = !0)
            }

            function l() {
                var e = m,
                    t = h;
                h = null, m = null, g = null, o.apply(null, [e, !1].concat(t))
            }

            function u(t) {
                if (m) {
                    if (g === t) return;
                    l()
                }
                var n = i.computeStackTrace(t);
                throw m = n, g = t, h = a.call(arguments, 1), e.setTimeout(function() {
                    g === t && l()
                }, n.incomplete ? 2e3 : 0), t
            }
            var f, p, d = [],
                h = null,
                g = null,
                m = null;
            return u.subscribe = t, u.unsubscribe = r, u
        })(), i.computeStackTrace = (function() {
            function t(t) {
                if (!i.remoteFetching) return "";
                try {
                    var n = function() {
                            try {
                                return new e.XMLHttpRequest
                            } catch (t) {
                                return new e.ActiveXObject("Microsoft.XMLHTTP")
                            }
                        },
                        r = n();
                    return r.open("GET", t, !1), r.send(""), r.responseText
                } catch (e) {
                    return ""
                }
            }

            function o(r) {
                if ("string" != typeof r) return [];
                if (!n(w, r)) {
                    var i = "",
                        o = "";
                    try {
                        o = e.document.domain
                    } catch (e) {}
                    var a = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(r);
                    a && a[2] === o && (i = t(r)), w[r] = i ? i.split("\n") : []
                }
                return w[r]
            }

            function a(e, t) {
                var n, i = /function ([^(]*)\(([^)]*)\)/,
                    a = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                    s = "",
                    c = o(e);
                if (!c.length) return "?";
                for (var l = 0; l < 10; ++l)
                    if (s = c[t - l] + s, !r(s)) {
                        if (n = a.exec(s)) return n[1];
                        if (n = i.exec(s)) return n[1]
                    }
                return "?"
            }

            function s(e, t) {
                var n = o(e);
                if (!n.length) return null;
                var a = [],
                    s = Math.floor(i.linesOfContext / 2),
                    c = s + i.linesOfContext % 2,
                    l = Math.max(0, t - s - 1),
                    u = Math.min(n.length, t + c - 1);
                t -= 1;
                for (var f = l; f < u; ++f) r(n[f]) || a.push(n[f]);
                return a.length > 0 ? a : null
            }

            function c(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
            }

            function l(e) {
                return c(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
            }

            function u(e, t) {
                for (var n, r, i = 0, a = t.length; i < a; ++i)
                    if ((n = o(t[i])).length && (n = n.join("\n"), r = e.exec(n))) return {
                        url: t[i],
                        line: n.substring(0, r.index).split("\n").length,
                        column: r.index - n.lastIndexOf("\n", r.index) - 1
                    };
                return null
            }

            function f(e, t, n) {
                var r, i = o(t),
                    a = new RegExp("\\b" + c(e) + "\\b");
                return n -= 1, i && i.length > n && (r = a.exec(i[n])) ? r.index : null
            }

            function p(t) {
                if (!r(e && e.document)) {
                    for (var n, i, o, a, s = [e.location.href], f = e.document.getElementsByTagName("script"), p = "" + t, d = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, h = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/, g = 0; g < f.length; ++g) {
                        var m = f[g];
                        m.src && s.push(m.src)
                    }
                    if (o = d.exec(p)) {
                        var v = o[1] ? "\\s+" + o[1] : "",
                            _ = o[2].split(",").join("\\s*,\\s*");
                        n = c(o[3]).replace(/;$/, ";?"), i = new RegExp("function" + v + "\\s*\\(\\s*" + _ + "\\s*\\)\\s*{\\s*" + n + "\\s*}")
                    } else i = new RegExp(c(p).replace(/\s+/g, "\\s+"));
                    if (a = u(i, s)) return a;
                    if (o = h.exec(p)) {
                        var x = o[1];
                        if (n = l(o[2]), i = new RegExp("on" + x + "=[\\'\"]\\s*" + n + "\\s*[\\'\"]", "i"), a = u(i, s[0])) return a;
                        if (i = new RegExp(n), a = u(i, s)) return a
                    }
                    return null
                }
            }

            function d(e) {
                if (!e.stack) return null;
                for (var t, n, i = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, o = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, c = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, l = e.stack.split("\n"), u = [], p = /^(.*) is undefined$/.exec(e.message), d = 0, h = l.length; d < h; ++d) {
                    if (t = i.exec(l[d])) {
                        var g = t[2] && t[2].indexOf("native") !== -1;
                        n = {
                            url: g ? null : t[2],
                            func: t[1] || "?",
                            args: g ? [t[2]] : [],
                            line: t[3] ? +t[3] : null,
                            column: t[4] ? +t[4] : null
                        }
                    } else if (t = c.exec(l[d])) n = {
                        url: t[2],
                        func: t[1] || "?",
                        args: [],
                        line: +t[3],
                        column: t[4] ? +t[4] : null
                    };
                    else {
                        if (!(t = o.exec(l[d]))) continue;
                        n = {
                            url: t[3],
                            func: t[1] || "?",
                            args: t[2] ? t[2].split(",") : [],
                            line: t[4] ? +t[4] : null,
                            column: t[5] ? +t[5] : null
                        }
                    }!n.func && n.line && (n.func = a(n.url, n.line)), n.line && (n.context = s(n.url, n.line)), u.push(n)
                }
                return u.length ? (u[0] && u[0].line && !u[0].column && p ? u[0].column = f(p[1], u[0].url, u[0].line) : u[0].column || r(e.columnNumber) || (u[0].column = e.columnNumber + 1), {
                    mode: "stack",
                    name: e.name,
                    message: e.message,
                    stack: u
                }) : null
            }

            function h(e) {
                var t = e.stacktrace;
                if (t) {
                    for (var n, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, o = t.split("\n"), c = [], l = 0; l < o.length; l += 2) {
                        var u = null;
                        if ((n = r.exec(o[l])) ? u = {
                                url: n[2],
                                line: +n[1],
                                column: null,
                                func: n[3],
                                args: []
                            } : (n = i.exec(o[l])) && (u = {
                                url: n[6],
                                line: +n[1],
                                column: +n[2],
                                func: n[3] || n[4],
                                args: n[5] ? n[5].split(",") : []
                            }), u) {
                            if (!u.func && u.line && (u.func = a(u.url, u.line)), u.line) try {
                                u.context = s(u.url, u.line)
                            } catch (e) {}
                            u.context || (u.context = [o[l + 1]]), c.push(u)
                        }
                    }
                    return c.length ? {
                        mode: "stacktrace",
                        name: e.name,
                        message: e.message,
                        stack: c
                    } : null
                }
            }

            function g(t) {
                var r = t.message.split("\n");
                if (r.length < 4) return null;
                var i, c = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                    f = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                    p = /^\s*Line (\d+) of function script\s*$/i,
                    d = [],
                    h = e && e.document && e.document.getElementsByTagName("script"),
                    g = [];
                for (var m in h) n(h, m) && !h[m].src && g.push(h[m]);
                for (var v = 2; v < r.length; v += 2) {
                    var _ = null;
                    if (i = c.exec(r[v])) _ = {
                        url: i[2],
                        func: i[3],
                        args: [],
                        line: +i[1],
                        column: null
                    };
                    else if (i = f.exec(r[v])) {
                        _ = {
                            url: i[3],
                            func: i[4],
                            args: [],
                            line: +i[1],
                            column: null
                        };
                        var x = +i[1],
                            w = g[i[2] - 1];
                        if (w) {
                            var y = o(_.url);
                            if (y) {
                                y = y.join("\n");
                                var b = y.indexOf(w.innerText);
                                b >= 0 && (_.line = x + y.substring(0, b).split("\n").length)
                            }
                        }
                    } else if (i = p.exec(r[v])) {
                        var k = e.location.href.replace(/#.*$/, ""),
                            D = new RegExp(l(r[v + 1])),
                            E = u(D, [k]);
                        _ = {
                            url: k,
                            func: "",
                            args: [],
                            line: E ? E.line : i[1],
                            column: null
                        }
                    }
                    if (_) {
                        _.func || (_.func = a(_.url, _.line));
                        var O = s(_.url, _.line),
                            S = O ? O[Math.floor(O.length / 2)] : null;
                        O && S.replace(/^\s*/, "") === r[v + 1].replace(/^\s*/, "") ? _.context = O : _.context = [r[v + 1]], d.push(_)
                    }
                }
                return d.length ? {
                    mode: "multiline",
                    name: t.name,
                    message: r[0],
                    stack: d
                } : null
            }

            function m(e, t, n, r) {
                var i = {
                    url: t,
                    line: n
                };
                if (i.url && i.line) {
                    e.incomplete = !1, i.func || (i.func = a(i.url, i.line)), i.context || (i.context = s(i.url, i.line));
                    var o = / '([^']+)' /.exec(r);
                    if (o && (i.column = f(o[1], i.url, i.line)), e.stack.length > 0 && e.stack[0].url === i.url) {
                        if (e.stack[0].line === i.line) return !1;
                        if (!e.stack[0].line && e.stack[0].func === i.func) return e.stack[0].line = i.line, e.stack[0].context = i.context, !1
                    }
                    return e.stack.unshift(i), e.partial = !0, !0
                }
                return e.incomplete = !0, !1
            }

            function v(e, t) {
                for (var n, r, o, s = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, c = [], l = {}, u = !1, d = v.caller; d && !u; d = d.caller)
                    if (d !== _ && d !== i.report) {
                        if (r = {
                                url: null,
                                func: "?",
                                args: [],
                                line: null,
                                column: null
                            }, d.name ? r.func = d.name : (n = s.exec(d.toString())) && (r.func = n[1]), void 0 === r.func) try {
                            r.func = n.input.substring(0, n.input.indexOf("{"))
                        } catch (e) {}
                        if (o = p(d)) {
                            r.url = o.url, r.line = o.line, "?" === r.func && (r.func = a(r.url, r.line));
                            var h = / '([^']+)' /.exec(e.message || e.description);
                            h && (r.column = f(h[1], o.url, o.line))
                        }
                        l["" + d] ? u = !0 : l["" + d] = !0, c.push(r)
                    }
                t && c.splice(0, t);
                var g = {
                    mode: "callers",
                    name: e.name,
                    message: e.message,
                    stack: c
                };
                return m(g, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), g
            }

            function _(e, t) {
                var n = null;
                t = null == t ? 0 : +t;
                try {
                    if (n = h(e)) return n
                } catch (e) {}
                try {
                    if (n = d(e)) return n
                } catch (e) {}
                try {
                    if (n = g(e)) return n
                } catch (e) {}
                try {
                    if (n = v(e, t + 1)) return n
                } catch (e) {}
                return {
                    mode: "failed"
                }
            }

            function x(e) {
                e = (null == e ? 0 : +e) + 1;
                try {
                    throw new Error
                } catch (t) {
                    return _(t, e + 1)
                }
            }
            var w = {};
            return _.augmentStackTraceWithInitialElement = m, _.guessFunctionName = a, _.gatherContext = s, _.ofCaller = x, _.getSource = o, _
        })(), i.extendToAsynchronousCallbacks = function() {
            var t = function(t) {
                var n = e[t];
                e[t] = function() {
                    var e = a.call(arguments),
                        t = e[0];
                    return "function" == typeof t && (e[0] = i.wrap(t)), n.apply ? n.apply(this, e) : n(e[0], e[1])
                }
            };
            t("setTimeout"), t("setInterval")
        }, i.remoteFetching || (i.remoteFetching = !0), i.collectWindowErrors || (i.collectWindowErrors = !0), (!i.linesOfContext || i.linesOfContext < 1) && (i.linesOfContext = 11), "undefined" != typeof module && module.exports && this.module !== module ? module.exports = i : "function" == typeof define && define.amd ? define("TraceKit", [], i) : e.TraceKit = i
    }
})("undefined" != typeof window ? window : global), define("modules/clean/csrf", ["require", "exports", "modules/core/cookies"], function(e, t, n) {
    "use strict";

    function r() {
        return n.Cookies.read("__Host-js_csrf")
    }

    function i(e) {
        var t = document.createElement("a");
        t.href = e;
        var n = t.hostname || window.location.hostname;
        if (n.indexOf(".dropbox.com", n.length - ".dropbox.com".length) === -1) throw new Error("Cannot send the CSRF token to " + n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.readCsrfToken = r, t.assertDropboxDomain = i
}), define("modules/core/cookies", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var assert = function(e, t) {
            if (!e) throw new Error(t)
        },
        n = function(e) {
            if (e.match(/^([0-9]{1,3}\.){3}[0-9]{1,3}$/)) return [e];
            for (var t = e.split("."), n = [], r = 0; r < t.length; r++) n.push(t.slice(r).join("."));
            return n
        },
        r = function(e) {
            for (var t = e.split("/"), n = [], r = 0; r < t.length; r++) {
                var i = t.slice(0, t.length - r).join("/");
                "" !== i && n.push(i), n.push(i + "/")
            }
            return n
        },
        i = ["=", ";"],
        o = function(e) {
            if (null == e) return !1;
            for (var t = 0, n = i; t < n.length; t++) {
                var r = n[t];
                if (e.indexOf(r) !== -1) return !0
            }
            return !1
        },
        a = function(e, t, n) {
            void 0 === n && (n = !1), assert("string" == typeof e, t + " must be a string, but was " + typeof e), assert(n || e.length > 0, t + " must not be empty"), assert(!o(e), t + " contains illegal characters")
        },
        s = function(e) {
            return a(e, "Cookie name", !1)
        },
        c = function(e) {
            return a(e, "Cookie value", !0)
        },
        l = function(e) {
            return a(e, "Cookie expiration date", !1)
        },
        u = function(e) {
            return a(e, "Cookie domain", !1)
        },
        f = function(e) {
            return a(e, "Cookie path", !1)
        },
        p = function(e, t, n) {
            void 0 === n && (n = {}), s(e), c(t), n.expires && l(n.expires), n.domain && u(n.domain), n.path && f(n.path), document.cookie = [e + "=" + t, n.expires ? "expires=" + n.expires : void 0, n.domain ? "domain=" + n.domain : void 0, n.path ? "path=" + n.path : void 0].join("; ")
        },
        d = new Date(1).toUTCString();
    t.Cookies = {
        create: function(e, t, n, r) {
            var i;
            if (null != n) {
                assert("number" == typeof n, "Cookie expiration must be a number");
                var o = new Date;
                o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), i = o.toUTCString()
            }
            p(e, t, {
                expires: i,
                path: "/",
                domain: r
            })
        },
        read: function(e) {
            s(e);
            for (var n = [], r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                var o = i[r],
                    a = o.split("=", 1)[0];
                a.trim() === e && n.push(o.substring(a.length + 1, o.length).trim())
            }
            for (var c = !1, l = [], u = 0, f = n; u < f.length; u++) {
                var p = f[u];
                "" === p ? c = !0 : l.push(p)
            }
            return 1 === l.length ? l[0] : l.length > 1 ? (t.Cookies.delete(e), null) : c ? "" : null
        },
        delete: function(e) {
            for (var t = [null].concat(n(window.location.hostname)), i = [null].concat(r(window.location.pathname)), o = 0, a = t; o < a.length; o++)
                for (var s = a[o], c = 0, l = i; c < l.length; c++) {
                    var u = l[c];
                    p(e, "", {
                        expires: d,
                        domain: s,
                        path: u
                    })
                }
        },
        are_enabled: function() {
            return navigator.cookieEnabled ? navigator.cookieEnabled : (document.cookie = "this_is_a_test_cookie", document.cookie.indexOf("this_is_a_test_cookie") !== -1)
        }
    }
}), define("modules/core/exception", ["require", "exports", "tslib", "modules/shims/tracekit", "modules/constants/page_load", "modules/constants/request", "modules/core/exception_tag_registry", "modules/core/xhr"], function(e, t, n, r, i, o, a, s) {
    "use strict";

    function c(e) {
        p.push(e)
    }

    function l(e) {
        var t = p.indexOf(e);
        t >= 0 && p.splice(t, 1)
    }

    function reportException(e) {
        var i = e.err,
            o = e.force,
            a = e.tags,
            s = e.severity,
            c = e.exc_extra;
        if (!i.reported) {
            var l = r.default.computeStackTrace(i),
                u = null != (l && l.stack) ? l.stack : [];
            if (i.isAssertion) {
                var f = i;
                f.assertOptions && f.assertOptions.tags && (a = (a || []).concat(f.assertOptions.tags)), f.assertOptions && f.assertOptions.exc_extra && (c = n.__assign({}, c || {}, f.assertOptions.exc_extra)), p.forEach(function(e) {
                    return e(l)
                })
            }
            t._reportException({
                msg: i.message,
                stack: u,
                force: o,
                tags: a,
                severity: s,
                exc_extra: c
            }), i.reported = !0
        }
    }

    function _reportException(e) {
        var c = e.msg,
            l = e.stack,
            p = e.force,
            h = e.tags,
            g = e.severity,
            m = e.exc_extra;
        if (!d || p) {
            var v = ["\\b_reportException\\b", "\\breportException\\b", "\\bassert\\b", "\\breportStack\\b"],
                _ = [];
            l = u(l, v);
            try {
                throw new Error
            } catch (e) {
                var x = r.default.computeStackTrace(e);
                null != x && null != x.stack && (_ = x.stack), _ = u(_, v)
            }
            var w = l.length - _.length;
            w <= 0 && (w = 1);
            var y = l.slice(0, w),
                b = l.slice(w);
            h || (h = []), h = h.concat(a.get_registered_tags()), m = m ? n.__assign({}, m) : {}, window.DB_FRAME_BUST && (m.DB_FRAME_BUST = !0, g = t.SEVERITY.USER_ERROR), m.client_time = (new Date).toString(), m.client_utc_time = (new Date).toUTCString(), f += 1, m.exception_number = f, m.page_repo_rev = i.REPO_REV, m.page_load_timestamp = o.PAGE_LOAD_TIME, m.yaps_project = i.YAPS_PROJECT, m.yaps_deployment = i.YAPS_DEPLOYMENT, m.user_locale = i.USER_LOCALE;
            var k = {};
            for (var D in window.requireContexts)
                if (window.requireContexts.hasOwnProperty(D)) {
                    var E = {},
                        O = window.requireContexts[D].firstUndefinedModule;
                    O && (E.first_undefined_module = O), k[D] = E
                }
            m.page_alameda_failures = k;
            var S = window.ensemble;
            if (null != S && null != S.getPageletInfoForExceptionReporting) {
                var $ = S.getPageletInfoForExceptionReporting();
                m.pagelet_info = $, m.page_load_timestamp = Math.floor(Math.max.apply(Math, $.map(function(e) {
                    return e.pagelet_client_load_time
                })))
            }
            var C = {
                e: c,
                loc: window.location.href,
                ref: document.referrer,
                stack: JSON.stringify(y.reverse()),
                context_tb: JSON.stringify(b.reverse()),
                tags: JSON.stringify(h),
                sev: g || "",
                exc_extra: JSON.stringify(m || {})
            };
            s.sendXhr("/jse", C), d = c
        }
    }

    function u(e, t) {
        for (var n = function(e) {
                if (!e) return !1;
                for (var n = 0, r = t; n < r.length; n++) {
                    var i = r[n];
                    if (e.search(i) !== -1) return !0
                }
                return !1
            }; e.length > 0 && n(e[0].func);) e = e.slice(1);
        return e
    }

    function assert(e, t, n) {
        if (void 0 === n && (n = {}), !e) {
            var r = new Error("Assertion Error: " + t),
                i = n.tags,
                o = void 0 === i ? [] : i,
                a = n.exc_extra,
                s = void 0 === a ? null : a;
            throw r.assertOptions = {
                tags: o.concat("module:exception", "assert"),
                exc_extra: s
            }, r.isAssertion = !0, r
        }
    }

    function reportStack(e, n) {
        void 0 === n && (n = {}), n = {
            severity: n.severity || t.SEVERITY.NONCRITICAL,
            tags: n.tags || [],
            exc_extra: n.exc_extra || {},
            silent: !!n.silent
        };
        var r = new Error(e);
        t.reportException({
            err: r,
            force: !0,
            tags: (n.tags || []).concat("module:exception", "reportStack"),
            severity: n.severity,
            exc_extra: n.exc_extra
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), i = n.__importStar(i), o = n.__importStar(o);
    var f = 0,
        p = [],
        d = void 0;
    t.SEVERITY = {
        CRITICAL: "critical",
        NONCRITICAL: "non-critical",
        USER_ERROR: "user-error",
        UNCAUGHT: "uncaught",
        OPERATIONAL: "operational"
    }, t.registerOnFailedAssert = c, t.unregisterOnFailedAssert = l, t.reportException = reportException, t._reportException = _reportException, t.cleanup_stack_trace = u, t.assert = assert, t.reportStack = reportStack
}), define("modules/core/exception_tag_registry", ["require", "exports"], function(e, t) {
    "use strict";

    function n() {
        var e = [];
        for (var t in a) a.hasOwnProperty(t) && e.push(t);
        return e
    }

    function r(e) {
        a[e] = !0
    }

    function i(e) {
        delete a[e]
    }

    function o() {
        a = {}
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = {};
    t.get_registered_tags = n, t.register_tag = r, t.unregister_tag = i, t.clear_all_tags = o
}), define("modules/core/xhr", ["require", "exports", "modules/clean/csrf"], function(e, t, n) {
    "use strict";

    function r(e) {
        var t = n.readCsrfToken();
        e.is_xhr = !0, e.t = t
    }

    function i(e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && void 0 !== e[n] && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(String(e[n])));
        return t.join("&")
    }

    function o(e, t, o) {
        void 0 === o && (o = a), n.assertDropboxDomain(e), r(t);
        var s = i(t),
            c = new XMLHttpRequest;
        return c.onreadystatechange = function() {
            c.readyState === XMLHttpRequest.DONE && o(c.status)
        }, c.open("POST", e), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(s), c
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function(e) {};
    t.sendXhr = o
}), define("modules/pagelet_config", ["require", "exports", "module"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r;
    t.REQUIREJS_CONTEXT_NAME = r;
    var i = window.ensemble && window.ensemble.isUsingWaaCServer;
    t.REQUIREJS_CONTEXT_NAME = r = i ? "_" : n.config().REQUIREJS_CONFIG.context
}), define("modules/shims/tracekit", ["require", "exports", "tslib", "external/tracekit"], function(e, t, n, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r), r.default.linesOfContext = 1, r.default.remoteFetching = !1, r.default.noConflict(), t.default = r.default
});
//# sourceMappingURL=pkg-exception-reporting.min.js-vflpQ1aHu.map