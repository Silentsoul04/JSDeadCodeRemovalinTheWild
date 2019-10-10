! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 45)
}([function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window)
    }
    e.exports = i
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
}, function(e, t) {
    var n, i, r = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            i = a
        }
    }();
    var l, c = [],
        u = !1,
        d = -1;

    function f() {
        u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && p())
    }

    function p() {
        if (!u) {
            var e = s(f);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++d < t;) l && l[d].run();
                d = -1, t = c.length
            }
            l = null, u = !1,
                function(e) {
                    if (i === clearTimeout) return clearTimeout(e);
                    if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                    try {
                        i(e)
                    } catch (t) {
                        try {
                            return i.call(null, e)
                        } catch (t) {
                            return i.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || u || s(p)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = m, r.addListener = m, r.once = m, r.off = m, r.removeListener = m, r.removeAllListeners = m, r.emit = m, r.prependListener = m, r.prependOnceListener = m, r.listeners = function(e) {
        return []
    }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, r.cwd = function() {
        return "/"
    }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, r.umask = function() {
        return 0
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    (function(e) {
        e.jQuery = n(46), n(47), n(48), n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58), n(59), n(60), n(62), n(64), n(65), n(68), n(69), n(70), n(71), n(72), n(74), n(75), n(76), n(77), n(78), n(79), n(80), n(81)
    }).call(this, n(0))
}, function(e, t, n) {
    (function(e) {
        var n, i, r;

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * jQuery JavaScript Library v1.12.3
         * http://jquery.com/
         *
         * Includes Sizzle.js
         * http://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-04-05T19:16Z
         */
        i = "undefined" != typeof window ? window : this, r = function(i, r) {
            var a = [],
                s = i.document,
                l = a.slice,
                c = a.concat,
                u = a.push,
                d = a.indexOf,
                f = {},
                p = f.toString,
                h = f.hasOwnProperty,
                m = {},
                g = function e(t, n) {
                    return new e.fn.init(t, n)
                },
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                v = /^-ms-/,
                y = /-([\da-z])/gi,
                b = function(e, t) {
                    return t.toUpperCase()
                };

            function S(e) {
                var t = !!e && "length" in e && e.length,
                    n = g.type(e);
                return "function" !== n && !g.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            g.fn = g.prototype = {
                jquery: "1.12.3",
                constructor: g,
                selector: "",
                length: 0,
                toArray: function() {
                    return l.call(this)
                },
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : l.call(this)
                },
                pushStack: function(e) {
                    var t = g.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e) {
                    return g.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(g.map(this, (function(t, n) {
                        return e.call(t, n, t)
                    })))
                },
                slice: function() {
                    return this.pushStack(l.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: u,
                sort: a.sort,
                splice: a.splice
            }, g.extend = g.fn.extend = function() {
                var e, t, n, i, r, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" === o(s) || g.isFunction(s) || (s = {}), l === c && (s = this, l--); l < c; l++)
                    if (null != (r = arguments[l]))
                        for (i in r) e = s[i], s !== (n = r[i]) && (u && n && (g.isPlainObject(n) || (t = g.isArray(n))) ? (t ? (t = !1, a = e && g.isArray(e) ? e : []) : a = e && g.isPlainObject(e) ? e : {}, s[i] = g.extend(u, a, n)) : void 0 !== n && (s[i] = n));
                return s
            }, g.extend({
                expando: "jQuery" + ("1.12.3" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === g.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === g.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !g.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                isPlainObject: function(e) {
                    var t;
                    if (!e || "object" !== g.type(e) || e.nodeType || g.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !h.call(e, "constructor") && !h.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (e) {
                        return !1
                    }
                    if (!m.ownFirst)
                        for (t in e) return h.call(e, t);
                    for (t in e);
                    return void 0 === t || h.call(e, t)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" === o(e) || "function" == typeof e ? f[p.call(e)] || "object" : o(e)
                },
                globalEval: function(e) {
                    e && g.trim(e) && (i.execScript || function(e) {
                        i.eval.call(i, e)
                    })(e)
                },
                camelCase: function(e) {
                    return e.replace(v, "ms-").replace(y, b)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (S(e))
                        for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                    else
                        for (i in e)
                            if (!1 === t.call(e[i], i, e[i])) break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(T, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return null != e && (S(Object(e)) ? g.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (d) return d.call(t, e, n);
                        for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, t) {
                    for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
                    if (n != n)
                        for (; void 0 !== t[i];) e[r++] = t[i++];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                    return i
                },
                map: function(e, t, n) {
                    var i, r, o = 0,
                        a = [];
                    if (S(e))
                        for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
                    else
                        for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
                    return c.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, r;
                    if ("string" == typeof t && (r = e[t], t = e, e = r), g.isFunction(e)) return n = l.call(arguments, 2), i = function() {
                        return e.apply(t || this, n.concat(l.call(arguments)))
                    }, i.guid = e.guid = e.guid || g.guid++, i
                },
                now: function() {
                    return +new Date
                },
                support: m
            }), "function" == typeof Symbol && (g.fn[Symbol.iterator] = a[Symbol.iterator]), g.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                f["[object " + t + "]"] = t.toLowerCase()
            }));
            var w =
                /*!
                 * Sizzle CSS Selector Engine v2.2.1
                 * http://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2015-10-17
                 */
                function(e) {
                    var t, n, i, r, o, a, s, l, c, u, d, f, p, h, m, g, T, v, y, b = "sizzle" + 1 * new Date,
                        S = e.document,
                        w = 0,
                        A = 0,
                        C = oe(),
                        x = oe(),
                        E = oe(),
                        P = function(e, t) {
                            return e === t && (d = !0), 0
                        },
                        M = 1 << 31,
                        G = {}.hasOwnProperty,
                        N = [],
                        H = N.pop,
                        k = N.push,
                        B = N.push,
                        D = N.slice,
                        I = function(e, t) {
                            for (var n = 0, i = e.length; n < i; n++)
                                if (e[n] === t) return n;
                            return -1
                        },
                        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        R = "[\\x20\\t\\r\\n\\f]",
                        O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                        _ = "\\[" + R + "*(" + O + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + R + "*\\]",
                        j = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
                        F = new RegExp(R + "+", "g"),
                        V = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                        U = new RegExp("^" + R + "*," + R + "*"),
                        z = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                        W = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
                        q = new RegExp(j),
                        X = new RegExp("^" + O + "$"),
                        K = {
                            ID: new RegExp("^#(" + O + ")"),
                            CLASS: new RegExp("^\\.(" + O + ")"),
                            TAG: new RegExp("^(" + O + "|[*])"),
                            ATTR: new RegExp("^" + _),
                            PSEUDO: new RegExp("^" + j),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + L + ")$", "i"),
                            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                        },
                        Q = /^(?:input|select|textarea|button)$/i,
                        J = /^h\d$/i,
                        $ = /^[^{]+\{\s*\[native \w/,
                        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        Y = /[+~]/,
                        ee = /'|\\/g,
                        te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                        ne = function(e, t, n) {
                            var i = "0x" + t - 65536;
                            return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                        },
                        ie = function() {
                            f()
                        };
                    try {
                        B.apply(N = D.call(S.childNodes), S.childNodes), N[S.childNodes.length].nodeType
                    } catch (e) {
                        B = {
                            apply: N.length ? function(e, t) {
                                k.apply(e, D.call(t))
                            } : function(e, t) {
                                for (var n = e.length, i = 0; e[n++] = t[i++];);
                                e.length = n - 1
                            }
                        }
                    }

                    function re(e, t, i, r) {
                        var o, s, c, u, d, h, T, v, w = t && t.ownerDocument,
                            A = t ? t.nodeType : 9;
                        if (i = i || [], "string" != typeof e || !e || 1 !== A && 9 !== A && 11 !== A) return i;
                        if (!r && ((t ? t.ownerDocument || t : S) !== p && f(t), t = t || p, m)) {
                            if (11 !== A && (h = Z.exec(e)))
                                if (o = h[1]) {
                                    if (9 === A) {
                                        if (!(c = t.getElementById(o))) return i;
                                        if (c.id === o) return i.push(c), i
                                    } else if (w && (c = w.getElementById(o)) && y(t, c) && c.id === o) return i.push(c), i
                                } else {
                                    if (h[2]) return B.apply(i, t.getElementsByTagName(e)), i;
                                    if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) return B.apply(i, t.getElementsByClassName(o)), i
                                }
                            if (n.qsa && !E[e + " "] && (!g || !g.test(e))) {
                                if (1 !== A) w = t, v = e;
                                else if ("object" !== t.nodeName.toLowerCase()) {
                                    for ((u = t.getAttribute("id")) ? u = u.replace(ee, "\\$&") : t.setAttribute("id", u = b), s = (T = a(e)).length, d = X.test(u) ? "#" + u : "[id='" + u + "']"; s--;) T[s] = d + " " + me(T[s]);
                                    v = T.join(","), w = Y.test(e) && pe(t.parentNode) || t
                                }
                                if (v) try {
                                    return B.apply(i, w.querySelectorAll(v)), i
                                } catch (e) {} finally {
                                    u === b && t.removeAttribute("id")
                                }
                            }
                        }
                        return l(e.replace(V, "$1"), t, i, r)
                    }

                    function oe() {
                        var e = [];
                        return function t(n, r) {
                            return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                        }
                    }

                    function ae(e) {
                        return e[b] = !0, e
                    }

                    function se(e) {
                        var t = p.createElement("div");
                        try {
                            return !!e(t)
                        } catch (e) {
                            return !1
                        } finally {
                            t.parentNode && t.parentNode.removeChild(t), t = null
                        }
                    }

                    function le(e, t) {
                        for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                    }

                    function ce(e, t) {
                        var n = t && e,
                            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || M) - (~e.sourceIndex || M);
                        if (i) return i;
                        if (n)
                            for (; n = n.nextSibling;)
                                if (n === t) return -1;
                        return e ? 1 : -1
                    }

                    function ue(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e
                        }
                    }

                    function de(e) {
                        return function(t) {
                            var n = t.nodeName.toLowerCase();
                            return ("input" === n || "button" === n) && t.type === e
                        }
                    }

                    function fe(e) {
                        return ae((function(t) {
                            return t = +t, ae((function(n, i) {
                                for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                            }))
                        }))
                    }

                    function pe(e) {
                        return e && void 0 !== e.getElementsByTagName && e
                    }
                    for (t in n = re.support = {}, o = re.isXML = function(e) {
                            var t = e && (e.ownerDocument || e).documentElement;
                            return !!t && "HTML" !== t.nodeName
                        }, f = re.setDocument = function(e) {
                            var t, r, a = e ? e.ownerDocument || e : S;
                            return a !== p && 9 === a.nodeType && a.documentElement ? (h = (p = a).documentElement, m = !o(p), (r = p.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = se((function(e) {
                                return e.className = "i", !e.getAttribute("className")
                            })), n.getElementsByTagName = se((function(e) {
                                return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                            })), n.getElementsByClassName = $.test(p.getElementsByClassName), n.getById = se((function(e) {
                                return h.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                            })), n.getById ? (i.find.ID = function(e, t) {
                                if (void 0 !== t.getElementById && m) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : []
                                }
                            }, i.filter.ID = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }) : (delete i.find.ID, i.filter.ID = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                            } : function(e, t) {
                                var n, i = [],
                                    r = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                    return i
                                }
                                return o
                            }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                                if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e)
                            }, T = [], g = [], (n.qsa = $.test(p.querySelectorAll)) && (se((function(e) {
                                h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + R + "*(?:value|" + L + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                            })), se((function(e) {
                                var t = p.createElement("input");
                                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                            }))), (n.matchesSelector = $.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && se((function(e) {
                                n.disconnectedMatch = v.call(e, "div"), v.call(e, "[s!='']:x"), T.push("!=", j)
                            })), g = g.length && new RegExp(g.join("|")), T = T.length && new RegExp(T.join("|")), t = $.test(h.compareDocumentPosition), y = t || $.test(h.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e,
                                    i = t && t.parentNode;
                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, P = t ? function(e, t) {
                                if (e === t) return d = !0, 0;
                                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === p || e.ownerDocument === S && y(S, e) ? -1 : t === p || t.ownerDocument === S && y(S, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
                            } : function(e, t) {
                                if (e === t) return d = !0, 0;
                                var n, i = 0,
                                    r = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!r || !o) return e === p ? -1 : t === p ? 1 : r ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;
                                if (r === o) return ce(e, t);
                                for (n = e; n = n.parentNode;) a.unshift(n);
                                for (n = t; n = n.parentNode;) s.unshift(n);
                                for (; a[i] === s[i];) i++;
                                return i ? ce(a[i], s[i]) : a[i] === S ? -1 : s[i] === S ? 1 : 0
                            }, p) : p
                        }, re.matches = function(e, t) {
                            return re(e, null, null, t)
                        }, re.matchesSelector = function(e, t) {
                            if ((e.ownerDocument || e) !== p && f(e), t = t.replace(W, "='$1']"), n.matchesSelector && m && !E[t + " "] && (!T || !T.test(t)) && (!g || !g.test(t))) try {
                                var i = v.call(e, t);
                                if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                            } catch (e) {}
                            return re(t, p, null, [e]).length > 0
                        }, re.contains = function(e, t) {
                            return (e.ownerDocument || e) !== p && f(e), y(e, t)
                        }, re.attr = function(e, t) {
                            (e.ownerDocument || e) !== p && f(e);
                            var r = i.attrHandle[t.toLowerCase()],
                                o = r && G.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                            return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                        }, re.error = function(e) {
                            throw new Error("Syntax error, unrecognized expression: " + e)
                        }, re.uniqueSort = function(e) {
                            var t, i = [],
                                r = 0,
                                o = 0;
                            if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(P), d) {
                                for (; t = e[o++];) t === e[o] && (r = i.push(o));
                                for (; r--;) e.splice(i[r], 1)
                            }
                            return u = null, e
                        }, r = re.getText = function(e) {
                            var t, n = "",
                                i = 0,
                                o = e.nodeType;
                            if (o) {
                                if (1 === o || 9 === o || 11 === o) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                                } else if (3 === o || 4 === o) return e.nodeValue
                            } else
                                for (; t = e[i++];) n += r(t);
                            return n
                        }, (i = re.selectors = {
                            cacheLength: 50,
                            createPseudo: ae,
                            match: K,
                            attrHandle: {},
                            find: {},
                            relative: {
                                ">": {
                                    dir: "parentNode",
                                    first: !0
                                },
                                " ": {
                                    dir: "parentNode"
                                },
                                "+": {
                                    dir: "previousSibling",
                                    first: !0
                                },
                                "~": {
                                    dir: "previousSibling"
                                }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                },
                                CHILD: function(e) {
                                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                                },
                                PSEUDO: function(e) {
                                    var t, n = !e[6] && e[2];
                                    return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && q.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e ? function() {
                                        return !0
                                    } : function(e) {
                                        return e.nodeName && e.nodeName.toLowerCase() === t
                                    }
                                },
                                CLASS: function(e) {
                                    var t = C[e + " "];
                                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && C(e, (function(e) {
                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                    }))
                                },
                                ATTR: function(e, t, n) {
                                    return function(i) {
                                        var r = re.attr(i, e);
                                        return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                    }
                                },
                                CHILD: function(e, t, n, i, r) {
                                    var o = "nth" !== e.slice(0, 3),
                                        a = "last" !== e.slice(-4),
                                        s = "of-type" === t;
                                    return 1 === i && 0 === r ? function(e) {
                                        return !!e.parentNode
                                    } : function(t, n, l) {
                                        var c, u, d, f, p, h, m = o !== a ? "nextSibling" : "previousSibling",
                                            g = t.parentNode,
                                            T = s && t.nodeName.toLowerCase(),
                                            v = !l && !s,
                                            y = !1;
                                        if (g) {
                                            if (o) {
                                                for (; m;) {
                                                    for (f = t; f = f[m];)
                                                        if (s ? f.nodeName.toLowerCase() === T : 1 === f.nodeType) return !1;
                                                    h = m = "only" === e && !h && "nextSibling"
                                                }
                                                return !0
                                            }
                                            if (h = [a ? g.firstChild : g.lastChild], a && v) {
                                                for (y = (p = (c = (u = (d = (f = g)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && c[1]) && c[2], f = p && g.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || h.pop();)
                                                    if (1 === f.nodeType && ++y && f === t) {
                                                        u[e] = [w, p, y];
                                                        break
                                                    }
                                            } else if (v && (y = p = (c = (u = (d = (f = t)[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === w && c[1]), !1 === y)
                                                for (;
                                                    (f = ++p && f && f[m] || (y = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== T : 1 !== f.nodeType) || !++y || (v && ((u = (d = f[b] || (f[b] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [w, y]), f !== t)););
                                            return (y -= r) === i || y % i == 0 && y / i >= 0
                                        }
                                    }
                                },
                                PSEUDO: function(e, t) {
                                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae((function(e, n) {
                                        for (var i, o = r(e, t), a = o.length; a--;) e[i = I(e, o[a])] = !(n[i] = o[a])
                                    })) : function(e) {
                                        return r(e, 0, n)
                                    }) : r
                                }
                            },
                            pseudos: {
                                not: ae((function(e) {
                                    var t = [],
                                        n = [],
                                        i = s(e.replace(V, "$1"));
                                    return i[b] ? ae((function(e, t, n, r) {
                                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                                    })) : function(e, r, o) {
                                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                    }
                                })),
                                has: ae((function(e) {
                                    return function(t) {
                                        return re(e, t).length > 0
                                    }
                                })),
                                contains: ae((function(e) {
                                    return e = e.replace(te, ne),
                                        function(t) {
                                            return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                                        }
                                })),
                                lang: ae((function(e) {
                                    return X.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                        function(t) {
                                            var n;
                                            do {
                                                if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1
                                        }
                                })),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id
                                },
                                root: function(e) {
                                    return e === h
                                },
                                focus: function(e) {
                                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                },
                                enabled: function(e) {
                                    return !1 === e.disabled
                                },
                                disabled: function(e) {
                                    return !0 === e.disabled
                                },
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                                },
                                selected: function(e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0
                                },
                                parent: function(e) {
                                    return !i.pseudos.empty(e)
                                },
                                header: function(e) {
                                    return J.test(e.nodeName)
                                },
                                input: function(e) {
                                    return Q.test(e.nodeName)
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return "input" === t && "button" === e.type || "button" === t
                                },
                                text: function(e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                },
                                first: fe((function() {
                                    return [0]
                                })),
                                last: fe((function(e, t) {
                                    return [t - 1]
                                })),
                                eq: fe((function(e, t, n) {
                                    return [n < 0 ? n + t : n]
                                })),
                                even: fe((function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                odd: fe((function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e
                                })),
                                lt: fe((function(e, t, n) {
                                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                                    return e
                                })),
                                gt: fe((function(e, t, n) {
                                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                    return e
                                }))
                            }
                        }).pseudos.nth = i.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) i.pseudos[t] = ue(t);
                    for (t in {
                            submit: !0,
                            reset: !0
                        }) i.pseudos[t] = de(t);

                    function he() {}

                    function me(e) {
                        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                        return i
                    }

                    function ge(e, t, n) {
                        var i = t.dir,
                            r = n && "parentNode" === i,
                            o = A++;
                        return t.first ? function(t, n, o) {
                            for (; t = t[i];)
                                if (1 === t.nodeType || r) return e(t, n, o)
                        } : function(t, n, a) {
                            var s, l, c, u = [w, o];
                            if (a) {
                                for (; t = t[i];)
                                    if ((1 === t.nodeType || r) && e(t, n, a)) return !0
                            } else
                                for (; t = t[i];)
                                    if (1 === t.nodeType || r) {
                                        if ((s = (l = (c = t[b] || (t[b] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && s[0] === w && s[1] === o) return u[2] = s[2];
                                        if (l[i] = u, u[2] = e(t, n, a)) return !0
                                    }
                        }
                    }

                    function Te(e) {
                        return e.length > 1 ? function(t, n, i) {
                            for (var r = e.length; r--;)
                                if (!e[r](t, n, i)) return !1;
                            return !0
                        } : e[0]
                    }

                    function ve(e, t, n, i, r) {
                        for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
                        return a
                    }

                    function ye(e, t, n, i, r, o) {
                        return i && !i[b] && (i = ye(i)), r && !r[b] && (r = ye(r, o)), ae((function(o, a, s, l) {
                            var c, u, d, f = [],
                                p = [],
                                h = a.length,
                                m = o || function(e, t, n) {
                                    for (var i = 0, r = t.length; i < r; i++) re(e, t[i], n);
                                    return n
                                }(t || "*", s.nodeType ? [s] : s, []),
                                g = !e || !o && t ? m : ve(m, f, e, s, l),
                                T = n ? r || (o ? e : h || i) ? [] : a : g;
                            if (n && n(g, T, s, l), i)
                                for (c = ve(T, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (T[p[u]] = !(g[p[u]] = d));
                            if (o) {
                                if (r || e) {
                                    if (r) {
                                        for (c = [], u = T.length; u--;)(d = T[u]) && c.push(g[u] = d);
                                        r(null, T = [], c, l)
                                    }
                                    for (u = T.length; u--;)(d = T[u]) && (c = r ? I(o, d) : f[u]) > -1 && (o[c] = !(a[c] = d))
                                }
                            } else T = ve(T === a ? T.splice(h, T.length) : T), r ? r(null, a, T, l) : B.apply(a, T)
                        }))
                    }

                    function be(e) {
                        for (var t, n, r, o = e.length, a = i.relative[e[0].type], s = a || i.relative[" "], l = a ? 1 : 0, u = ge((function(e) {
                                return e === t
                            }), s, !0), d = ge((function(e) {
                                return I(t, e) > -1
                            }), s, !0), f = [function(e, n, i) {
                                var r = !a && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                                return t = null, r
                            }]; l < o; l++)
                            if (n = i.relative[e[l].type]) f = [ge(Te(f), n)];
                            else {
                                if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                                    for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                    return ye(l > 1 && Te(f), l > 1 && me(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(V, "$1"), n, l < r && be(e.slice(l, r)), r < o && be(e = e.slice(r)), r < o && me(e))
                                }
                                f.push(n)
                            }
                        return Te(f)
                    }
                    return he.prototype = i.filters = i.pseudos, i.setFilters = new he, a = re.tokenize = function(e, t) {
                        var n, r, o, a, s, l, c, u = x[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (s = e, l = [], c = i.preFilter; s;) {
                            for (a in n && !(r = U.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), n = !1, (r = z.exec(s)) && (n = r.shift(), o.push({
                                    value: n,
                                    type: r[0].replace(V, " ")
                                }), s = s.slice(n.length)), i.filter) !(r = K[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), o.push({
                                value: n,
                                type: a,
                                matches: r
                            }), s = s.slice(n.length));
                            if (!n) break
                        }
                        return t ? s.length : s ? re.error(e) : x(e, l).slice(0)
                    }, s = re.compile = function(e, t) {
                        var n, r = [],
                            o = [],
                            s = E[e + " "];
                        if (!s) {
                            for (t || (t = a(e)), n = t.length; n--;)(s = be(t[n]))[b] ? r.push(s) : o.push(s);
                            (s = E(e, function(e, t) {
                                var n = t.length > 0,
                                    r = e.length > 0,
                                    o = function(o, a, s, l, u) {
                                        var d, h, g, T = 0,
                                            v = "0",
                                            y = o && [],
                                            b = [],
                                            S = c,
                                            A = o || r && i.find.TAG("*", u),
                                            C = w += null == S ? 1 : Math.random() || .1,
                                            x = A.length;
                                        for (u && (c = a === p || a || u); v !== x && null != (d = A[v]); v++) {
                                            if (r && d) {
                                                for (h = 0, a || d.ownerDocument === p || (f(d), s = !m); g = e[h++];)
                                                    if (g(d, a || p, s)) {
                                                        l.push(d);
                                                        break
                                                    }
                                                u && (w = C)
                                            }
                                            n && ((d = !g && d) && T--, o && y.push(d))
                                        }
                                        if (T += v, n && v !== T) {
                                            for (h = 0; g = t[h++];) g(y, b, a, s);
                                            if (o) {
                                                if (T > 0)
                                                    for (; v--;) y[v] || b[v] || (b[v] = H.call(l));
                                                b = ve(b)
                                            }
                                            B.apply(l, b), u && !o && b.length > 0 && T + t.length > 1 && re.uniqueSort(l)
                                        }
                                        return u && (w = C, c = S), y
                                    };
                                return n ? ae(o) : o
                            }(o, r))).selector = e
                        }
                        return s
                    }, l = re.select = function(e, t, r, o) {
                        var l, c, u, d, f, p = "function" == typeof e && e,
                            h = !o && a(e = p.selector || e);
                        if (r = r || [], 1 === h.length) {
                            if ((c = h[0] = h[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && m && i.relative[c[1].type]) {
                                if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return r;
                                p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                            }
                            for (l = K.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !i.relative[d = u.type]);)
                                if ((f = i.find[d]) && (o = f(u.matches[0].replace(te, ne), Y.test(c[0].type) && pe(t.parentNode) || t))) {
                                    if (c.splice(l, 1), !(e = o.length && me(c))) return B.apply(r, o), r;
                                    break
                                }
                        }
                        return (p || s(e, h))(o, t, !m, r, !t || Y.test(e) && pe(t.parentNode) || t), r
                    }, n.sortStable = b.split("").sort(P).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = se((function(e) {
                        return 1 & e.compareDocumentPosition(p.createElement("div"))
                    })), se((function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                    })) || le("type|href|height|width", (function(e, t, n) {
                        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    })), n.attributes && se((function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                    })) || le("value", (function(e, t, n) {
                        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                    })), se((function(e) {
                        return null == e.getAttribute("disabled")
                    })) || le(L, (function(e, t, n) {
                        var i;
                        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                    })), re
                }(i);
            g.find = w, g.expr = w.selectors, g.expr[":"] = g.expr.pseudos, g.uniqueSort = g.unique = w.uniqueSort, g.text = w.getText, g.isXMLDoc = w.isXML, g.contains = w.contains;
            var A = function(e, t, n) {
                    for (var i = [], r = void 0 !== n;
                        (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (r && g(e).is(n)) break;
                            i.push(e)
                        }
                    return i
                },
                C = function(e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                x = g.expr.match.needsContext,
                E = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                P = /^.[^:#\[\.,]*$/;

            function M(e, t, n) {
                if (g.isFunction(t)) return g.grep(e, (function(e, i) {
                    return !!t.call(e, i, e) !== n
                }));
                if (t.nodeType) return g.grep(e, (function(e) {
                    return e === t !== n
                }));
                if ("string" == typeof t) {
                    if (P.test(t)) return g.filter(t, e, n);
                    t = g.filter(t, e)
                }
                return g.grep(e, (function(e) {
                    return g.inArray(e, t) > -1 !== n
                }))
            }
            g.filter = function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? g.find.matchesSelector(i, e) ? [i] : [] : g.find.matches(e, g.grep(t, (function(e) {
                    return 1 === e.nodeType
                })))
            }, g.fn.extend({
                find: function(e) {
                    var t, n = [],
                        i = this,
                        r = i.length;
                    if ("string" != typeof e) return this.pushStack(g(e).filter((function() {
                        for (t = 0; t < r; t++)
                            if (g.contains(i[t], this)) return !0
                    })));
                    for (t = 0; t < r; t++) g.find(e, i[t], n);
                    return (n = this.pushStack(r > 1 ? g.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
                },
                filter: function(e) {
                    return this.pushStack(M(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(M(this, e || [], !0))
                },
                is: function(e) {
                    return !!M(this, "string" == typeof e && x.test(e) ? g(e) : e || [], !1).length
                }
            });
            var G, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (g.fn.init = function(e, t, n) {
                var i, r;
                if (!e) return this;
                if (n = n || G, "string" == typeof e) {
                    if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (t = t instanceof g ? t[0] : t, g.merge(this, g.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : s, !0)), E.test(i[1]) && g.isPlainObject(t))
                            for (i in t) g.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this
                    }
                    if ((r = s.getElementById(i[2])) && r.parentNode) {
                        if (r.id !== i[2]) return G.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = s, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : g.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(g) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), g.makeArray(e, this))
            }).prototype = g.fn, G = g(s);
            var H = /^(?:parents|prev(?:Until|All))/,
                k = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function B(e, t) {
                do {
                    e = e[t]
                } while (e && 1 !== e.nodeType);
                return e
            }
            g.fn.extend({
                has: function(e) {
                    var t, n = g(e, this),
                        i = n.length;
                    return this.filter((function() {
                        for (t = 0; t < i; t++)
                            if (g.contains(this, n[t])) return !0
                    }))
                },
                closest: function(e, t) {
                    for (var n, i = 0, r = this.length, o = [], a = x.test(e) || "string" != typeof e ? g(e, t || this.context) : 0; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? g.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? g.inArray(this[0], g(e)) : g.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), g.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return A(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return A(e, "parentNode", n)
                },
                next: function(e) {
                    return B(e, "nextSibling")
                },
                prev: function(e) {
                    return B(e, "previousSibling")
                },
                nextAll: function(e) {
                    return A(e, "nextSibling")
                },
                prevAll: function(e) {
                    return A(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return A(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return A(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return C((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return C(e.firstChild)
                },
                contents: function(e) {
                    return g.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : g.merge([], e.childNodes)
                }
            }, (function(e, t) {
                g.fn[e] = function(n, i) {
                    var r = g.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = g.filter(i, r)), this.length > 1 && (k[e] || (r = g.uniqueSort(r)), H.test(e) && (r = r.reverse())), this.pushStack(r)
                }
            }));
            var D, I, L = /\S+/g;

            function R() {
                s.addEventListener ? (s.removeEventListener("DOMContentLoaded", O), i.removeEventListener("load", O)) : (s.detachEvent("onreadystatechange", O), i.detachEvent("onload", O))
            }

            function O() {
                (s.addEventListener || "load" === i.event.type || "complete" === s.readyState) && (R(), g.ready())
            }
            for (I in g.Callbacks = function(e) {
                    e = "string" == typeof e ? function(e) {
                        var t = {};
                        return g.each(e.match(L) || [], (function(e, n) {
                            t[n] = !0
                        })), t
                    }(e) : g.extend({}, e);
                    var t, n, i, r, o = [],
                        a = [],
                        s = -1,
                        l = function() {
                            for (r = e.once, i = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                            e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                        },
                        c = {
                            add: function() {
                                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                                    g.each(n, (function(n, i) {
                                        g.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== g.type(i) && t(i)
                                    }))
                                }(arguments), n && !t && l()), this
                            },
                            remove: function() {
                                return g.each(arguments, (function(e, t) {
                                    for (var n;
                                        (n = g.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                                })), this
                            },
                            has: function(e) {
                                return e ? g.inArray(e, o) > -1 : o.length > 0
                            },
                            empty: function() {
                                return o && (o = []), this
                            },
                            disable: function() {
                                return r = a = [], o = n = "", this
                            },
                            disabled: function() {
                                return !o
                            },
                            lock: function() {
                                return r = !0, n || c.disable(), this
                            },
                            locked: function() {
                                return !!r
                            },
                            fireWith: function(e, n) {
                                return r || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                            },
                            fire: function() {
                                return c.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!i
                            }
                        };
                    return c
                }, g.extend({
                    Deferred: function(e) {
                        var t = [
                                ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", g.Callbacks("memory")]
                            ],
                            n = "pending",
                            i = {
                                state: function() {
                                    return n
                                },
                                always: function() {
                                    return r.done(arguments).fail(arguments), this
                                },
                                then: function() {
                                    var e = arguments;
                                    return g.Deferred((function(n) {
                                        g.each(t, (function(t, o) {
                                            var a = g.isFunction(e[t]) && e[t];
                                            r[o[1]]((function() {
                                                var e = a && a.apply(this, arguments);
                                                e && g.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                            }))
                                        })), e = null
                                    })).promise()
                                },
                                promise: function(e) {
                                    return null != e ? g.extend(e, i) : i
                                }
                            },
                            r = {};
                        return i.pipe = i.then, g.each(t, (function(e, o) {
                            var a = o[2],
                                s = o[3];
                            i[o[1]] = a.add, s && a.add((function() {
                                n = s
                            }), t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                                return r[o[0] + "With"](this === r ? i : this, arguments), this
                            }, r[o[0] + "With"] = a.fireWith
                        })), i.promise(r), e && e.call(r, r), r
                    },
                    when: function(e) {
                        var t, n, i, r = 0,
                            o = l.call(arguments),
                            a = o.length,
                            s = 1 !== a || e && g.isFunction(e.promise) ? a : 0,
                            c = 1 === s ? e : g.Deferred(),
                            u = function(e, n, i) {
                                return function(r) {
                                    n[e] = this, i[e] = arguments.length > 1 ? l.call(arguments) : r, i === t ? c.notifyWith(n, i) : --s || c.resolveWith(n, i)
                                }
                            };
                        if (a > 1)
                            for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && g.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(c.reject) : --s;
                        return s || c.resolveWith(i, o), c.promise()
                    }
                }), g.fn.ready = function(e) {
                    return g.ready.promise().done(e), this
                }, g.extend({
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(e) {
                        e ? g.readyWait++ : g.ready(!0)
                    },
                    ready: function(e) {
                        (!0 === e ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== e && --g.readyWait > 0 || (D.resolveWith(s, [g]), g.fn.triggerHandler && (g(s).triggerHandler("ready"), g(s).off("ready"))))
                    }
                }), g.ready.promise = function(e) {
                    if (!D)
                        if (D = g.Deferred(), "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll) i.setTimeout(g.ready);
                        else if (s.addEventListener) s.addEventListener("DOMContentLoaded", O), i.addEventListener("load", O);
                    else {
                        s.attachEvent("onreadystatechange", O), i.attachEvent("onload", O);
                        var t = !1;
                        try {
                            t = null == i.frameElement && s.documentElement
                        } catch (e) {}
                        t && t.doScroll && function e() {
                            if (!g.isReady) {
                                try {
                                    t.doScroll("left")
                                } catch (t) {
                                    return i.setTimeout(e, 50)
                                }
                                R(), g.ready()
                            }
                        }()
                    }
                    return D.promise(e)
                }, g.ready.promise(), g(m)) break;
            m.ownFirst = "0" === I, m.inlineBlockNeedsLayout = !1, g((function() {
                    var e, t, n, i;
                    (n = s.getElementsByTagName("body")[0]) && n.style && (t = s.createElement("div"), (i = s.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", m.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
                })),
                function() {
                    var e = s.createElement("div");
                    m.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        m.deleteExpando = !1
                    }
                    e = null
                }();
            var _, j = function(e) {
                    var t = g.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
                },
                F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                V = /([A-Z])/g;

            function U(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var i = "data-" + t.replace(V, "-$1").toLowerCase();
                    if ("string" == typeof(n = e.getAttribute(i))) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? g.parseJSON(n) : n)
                        } catch (e) {}
                        g.data(e, t, n)
                    } else n = void 0
                }
                return n
            }

            function z(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !g.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function W(e, t, n, i) {
                if (j(e)) {
                    var r, s, l = g.expando,
                        c = e.nodeType,
                        u = c ? g.cache : e,
                        d = c ? e[l] : e[l] && l;
                    if (d && u[d] && (i || u[d].data) || void 0 !== n || "string" != typeof t) return d || (d = c ? e[l] = a.pop() || g.guid++ : l), u[d] || (u[d] = c ? {} : {
                        toJSON: g.noop
                    }), "object" !== o(t) && "function" != typeof t || (i ? u[d] = g.extend(u[d], t) : u[d].data = g.extend(u[d].data, t)), s = u[d], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[g.camelCase(t)] = n), "string" == typeof t ? null == (r = s[t]) && (r = s[g.camelCase(t)]) : r = s, r
                }
            }

            function q(e, t, n) {
                if (j(e)) {
                    var i, r, o = e.nodeType,
                        a = o ? g.cache : e,
                        s = o ? e[g.expando] : g.expando;
                    if (a[s]) {
                        if (t && (i = n ? a[s] : a[s].data)) {
                            r = (t = g.isArray(t) ? t.concat(g.map(t, g.camelCase)) : t in i ? [t] : (t = g.camelCase(t)) in i ? [t] : t.split(" ")).length;
                            for (; r--;) delete i[t[r]];
                            if (n ? !z(i) : !g.isEmptyObject(i)) return
                        }(n || (delete a[s].data, z(a[s]))) && (o ? g.cleanData([e], !0) : m.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                    }
                }
            }
            g.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return !!(e = e.nodeType ? g.cache[e[g.expando]] : e[g.expando]) && !z(e)
                },
                data: function(e, t, n) {
                    return W(e, t, n)
                },
                removeData: function(e, t) {
                    return q(e, t)
                },
                _data: function(e, t, n) {
                    return W(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return q(e, t, !0)
                }
            }), g.fn.extend({
                data: function(e, t) {
                    var n, i, r, a = this[0],
                        s = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = g.data(a), 1 === a.nodeType && !g._data(a, "parsedAttrs"))) {
                            for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && U(a, i = g.camelCase(i.slice(5)), r[i]);
                            g._data(a, "parsedAttrs", !0)
                        }
                        return r
                    }
                    return "object" === o(e) ? this.each((function() {
                        g.data(this, e)
                    })) : arguments.length > 1 ? this.each((function() {
                        g.data(this, e, t)
                    })) : a ? U(a, e, g.data(a, e)) : void 0
                },
                removeData: function(e) {
                    return this.each((function() {
                        g.removeData(this, e)
                    }))
                }
            }), g.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) return t = (t || "fx") + "queue", i = g._data(e, t), n && (!i || g.isArray(n) ? i = g._data(e, t, g.makeArray(n)) : i.push(n)), i || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = g.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        o = g._queueHooks(e, t);
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function() {
                        g.dequeue(e, t)
                    }), o)), !i && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return g._data(e, n) || g._data(e, n, {
                        empty: g.Callbacks("once memory").add((function() {
                            g._removeData(e, t + "queue"), g._removeData(e, n)
                        }))
                    })
                }
            }), g.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? g.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                        var n = g.queue(this, e, t);
                        g._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && g.dequeue(this, e)
                    }))
                },
                dequeue: function(e) {
                    return this.each((function() {
                        g.dequeue(this, e)
                    }))
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1,
                        r = g.Deferred(),
                        o = this,
                        a = this.length,
                        s = function() {
                            --i || r.resolveWith(o, [o])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = g._data(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                    return s(), r.promise(t)
                }
            }), m.shrinkWrapBlocks = function() {
                return null != _ ? _ : (_ = !1, (t = s.getElementsByTagName("body")[0]) && t.style ? (e = s.createElement("div"), (n = s.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(s.createElement("div")).style.width = "5px", _ = 3 !== e.offsetWidth), t.removeChild(n), _) : void 0);
                var e, t, n
            };
            var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                K = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
                Q = ["Top", "Right", "Bottom", "Left"],
                J = function(e, t) {
                    return e = t || e, "none" === g.css(e, "display") || !g.contains(e.ownerDocument, e)
                };

            function $(e, t, n, i) {
                var r, o = 1,
                    a = 20,
                    s = i ? function() {
                        return i.cur()
                    } : function() {
                        return g.css(e, t, "")
                    },
                    l = s(),
                    c = n && n[3] || (g.cssNumber[t] ? "" : "px"),
                    u = (g.cssNumber[t] || "px" !== c && +l) && K.exec(g.css(e, t));
                if (u && u[3] !== c) {
                    c = c || u[3], n = n || [], u = +l || 1;
                    do {
                        u /= o = o || ".5", g.style(e, t, u + c)
                    } while (o !== (o = s() / l) && 1 !== o && --a)
                }
                return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
            }
            var Z, Y, ee, te = function e(t, n, i, r, o, a, s) {
                    var l = 0,
                        c = t.length,
                        u = null == i;
                    if ("object" === g.type(i))
                        for (l in o = !0, i) e(t, n, l, i[l], !0, a, s);
                    else if (void 0 !== r && (o = !0, g.isFunction(r) || (s = !0), u && (s ? (n.call(t, r), n = null) : (u = n, n = function(e, t, n) {
                            return u.call(g(e), n)
                        })), n))
                        for (; l < c; l++) n(t[l], i, s ? r : r.call(t[l], l, n(t[l], i)));
                    return o ? t : u ? n.call(t) : c ? n(t[0], i) : a
                },
                ne = /^(?:checkbox|radio)$/i,
                ie = /<([\w:-]+)/,
                re = /^$|\/(?:java|ecma)script/i,
                oe = /^\s+/,
                ae = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

            function se(e) {
                var t = ae.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n
            }
            Z = s.createElement("div"), Y = s.createDocumentFragment(), ee = s.createElement("input"), Z.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", m.leadingWhitespace = 3 === Z.firstChild.nodeType, m.tbody = !Z.getElementsByTagName("tbody").length, m.htmlSerialize = !!Z.getElementsByTagName("link").length, m.html5Clone = "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML, ee.type = "checkbox", ee.checked = !0, Y.appendChild(ee), m.appendChecked = ee.checked, Z.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!Z.cloneNode(!0).lastChild.defaultValue, Y.appendChild(Z), (ee = s.createElement("input")).setAttribute("type", "radio"), ee.setAttribute("checked", "checked"), ee.setAttribute("name", "t"), Z.appendChild(ee), m.checkClone = Z.cloneNode(!0).cloneNode(!0).lastChild.checked, m.noCloneEvent = !!Z.addEventListener, Z[g.expando] = 1, m.attributes = !Z.getAttribute(g.expando);
            var le = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: m.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };

            function ce(e, t) {
                var n, i, r = 0,
                    o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                if (!o)
                    for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || g.nodeName(i, t) ? o.push(i) : g.merge(o, ce(i, t));
                return void 0 === t || t && g.nodeName(e, t) ? g.merge([e], o) : o
            }

            function ue(e, t) {
                for (var n, i = 0; null != (n = e[i]); i++) g._data(n, "globalEval", !t || g._data(t[i], "globalEval"))
            }
            le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td;
            var de = /<|&#?\w+;/,
                fe = /<tbody/i;

            function pe(e) {
                ne.test(e.type) && (e.defaultChecked = e.checked)
            }

            function he(e, t, n, i, r) {
                for (var o, a, s, l, c, u, d, f = e.length, p = se(t), h = [], T = 0; T < f; T++)
                    if ((a = e[T]) || 0 === a)
                        if ("object" === g.type(a)) g.merge(h, a.nodeType ? [a] : a);
                        else if (de.test(a)) {
                    for (l = l || p.appendChild(t.createElement("div")), c = (ie.exec(a) || ["", ""])[1].toLowerCase(), d = le[c] || le._default, l.innerHTML = d[1] + g.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
                    if (!m.leadingWhitespace && oe.test(a) && h.push(t.createTextNode(oe.exec(a)[0])), !m.tbody)
                        for (o = (a = "table" !== c || fe.test(a) ? "<table>" !== d[1] || fe.test(a) ? 0 : l : l.firstChild) && a.childNodes.length; o--;) g.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
                    for (g.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                    l = p.lastChild
                } else h.push(t.createTextNode(a));
                for (l && p.removeChild(l), m.appendChecked || g.grep(ce(h, "input"), pe), T = 0; a = h[T++];)
                    if (i && g.inArray(a, i) > -1) r && r.push(a);
                    else if (s = g.contains(a.ownerDocument, a), l = ce(p.appendChild(a), "script"), s && ue(l), n)
                    for (o = 0; a = l[o++];) re.test(a.type || "") && n.push(a);
                return l = null, p
            }! function() {
                var e, t, n = s.createElement("div");
                for (e in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) t = "on" + e, (m[e] = t in i) || (n.setAttribute(t, "t"), m[e] = !1 === n.attributes[t].expando);
                n = null
            }();
            var me = /^(?:input|select|textarea)$/i,
                ge = /^key/,
                Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                ve = /^(?:focusinfocus|focusoutblur)$/,
                ye = /^([^.]*)(?:\.(.+)|)/;

            function be() {
                return !0
            }

            function Se() {
                return !1
            }

            function we() {
                try {
                    return s.activeElement
                } catch (e) {}
            }

            function Ae(e, t, n, i, r, a) {
                var s, l;
                if ("object" === o(t)) {
                    for (l in "string" != typeof n && (i = i || n, n = void 0), t) Ae(e, l, n, i, t[l], a);
                    return e
                }
                if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
                else if (!r) return e;
                return 1 === a && (s = r, (r = function(e) {
                    return g().off(e), s.apply(this, arguments)
                }).guid = s.guid || (s.guid = g.guid++)), e.each((function() {
                    g.event.add(this, t, r, i, n)
                }))
            }
            g.event = {
                global: {},
                add: function(e, t, n, i, r) {
                    var o, a, s, l, c, u, d, f, p, h, m, T = g._data(e);
                    if (T) {
                        for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = g.guid++), (a = T.events) || (a = T.events = {}), (u = T.handle) || ((u = T.handle = function(e) {
                                return void 0 === g || e && g.event.triggered === e.type ? void 0 : g.event.dispatch.apply(u.elem, arguments)
                            }).elem = e), s = (t = (t || "").match(L) || [""]).length; s--;) p = m = (o = ye.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (c = g.event.special[p] || {}, p = (r ? c.delegateType : c.bindType) || p, c = g.event.special[p] || {}, d = g.extend({
                            type: p,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && g.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, l), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, h, u) || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), g.event.global[p] = !0);
                        e = null
                    }
                },
                remove: function(e, t, n, i, r) {
                    var o, a, s, l, c, u, d, f, p, h, m, T = g.hasData(e) && g._data(e);
                    if (T && (u = T.events)) {
                        for (c = (t = (t || "").match(L) || [""]).length; c--;)
                            if (p = m = (s = ye.exec(t[c]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (d = g.event.special[p] || {}, f = u[p = (i ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                                l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, T.handle) || g.removeEvent(e, p, T.handle), delete u[p])
                            } else
                                for (p in u) g.event.remove(e, p + t[c], n, i, !0);
                        g.isEmptyObject(u) && (delete T.handle, g._removeData(e, "events"))
                    }
                },
                trigger: function(e, t, n, r) {
                    var a, l, c, u, d, f, p, m = [n || s],
                        T = h.call(e, "type") ? e.type : e,
                        v = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (c = f = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !ve.test(T + g.event.triggered) && (T.indexOf(".") > -1 && (v = T.split("."), T = v.shift(), v.sort()), l = T.indexOf(":") < 0 && "on" + T, (e = e[g.expando] ? e : new g.Event(T, "object" === o(e) && e)).isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : g.makeArray(t, [e]), d = g.event.special[T] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                        if (!r && !d.noBubble && !g.isWindow(n)) {
                            for (u = d.delegateType || T, ve.test(u + T) || (c = c.parentNode); c; c = c.parentNode) m.push(c), f = c;
                            f === (n.ownerDocument || s) && m.push(f.defaultView || f.parentWindow || i)
                        }
                        for (p = 0;
                            (c = m[p++]) && !e.isPropagationStopped();) e.type = p > 1 ? u : d.bindType || T, (a = (g._data(c, "events") || {})[e.type] && g._data(c, "handle")) && a.apply(c, t), (a = l && c[l]) && a.apply && j(c) && (e.result = a.apply(c, t), !1 === e.result && e.preventDefault());
                        if (e.type = T, !r && !e.isDefaultPrevented() && (!d._default || !1 === d._default.apply(m.pop(), t)) && j(n) && l && n[T] && !g.isWindow(n)) {
                            (f = n[l]) && (n[l] = null), g.event.triggered = T;
                            try {
                                n[T]()
                            } catch (e) {}
                            g.event.triggered = void 0, f && (n[l] = f)
                        }
                        return e.result
                    }
                },
                dispatch: function(e) {
                    e = g.event.fix(e);
                    var t, n, i, r, o, a = [],
                        s = l.call(arguments),
                        c = (g._data(this, "events") || {})[e.type] || [],
                        u = g.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                        for (a = g.event.handlers.call(this, e, c), t = 0;
                            (r = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = r.elem, n = 0;
                                (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (i = ((g.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, t) {
                    var n, i, r, o, a = [],
                        s = t.delegateCount,
                        l = e.target;
                    if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; l != this; l = l.parentNode || this)
                            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                                for (i = [], n = 0; n < s; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? g(r, this).index(l) > -1 : g.find(r, this, null, [l]).length), i[r] && i.push(o);
                                i.length && a.push({
                                    elem: l,
                                    handlers: i
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                },
                fix: function(e) {
                    if (e[g.expando]) return e;
                    var t, n, i, r = e.type,
                        o = e,
                        a = this.fixHooks[r];
                    for (a || (this.fixHooks[r] = a = Te.test(r) ? this.mouseHooks : ge.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new g.Event(o), t = i.length; t--;) e[n = i[t]] = o[n];
                    return e.target || (e.target = o.srcElement || s), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, i, r, o = t.button,
                            a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || s).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== we() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === we() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (g.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                        },
                        _default: function(e) {
                            return g.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n) {
                    var i = g.extend(new g.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    g.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
                }
            }, g.removeEvent = s.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            } : function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && (void 0 === e[i] && (e[i] = null), e.detachEvent(i, n))
            }, g.Event = function(e, t) {
                if (!(this instanceof g.Event)) return new g.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? be : Se) : this.type = e, t && g.extend(this, t), this.timeStamp = e && e.timeStamp || g.now(), this[g.expando] = !0
            }, g.Event.prototype = {
                constructor: g.Event,
                isDefaultPrevented: Se,
                isPropagationStopped: Se,
                isImmediatePropagationStopped: Se,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = be, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = be, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = be, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, g.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(e, t) {
                g.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            o = e.handleObj;
                        return r && (r === i || g.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            })), m.submit || (g.event.special.submit = {
                setup: function() {
                    if (g.nodeName(this, "form")) return !1;
                    g.event.add(this, "click._submit keypress._submit", (function(e) {
                        var t = e.target,
                            n = g.nodeName(t, "input") || g.nodeName(t, "button") ? g.prop(t, "form") : void 0;
                        n && !g._data(n, "submit") && (g.event.add(n, "submit._submit", (function(e) {
                            e._submitBubble = !0
                        })), g._data(n, "submit", !0))
                    }))
                },
                postDispatch: function(e) {
                    e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && g.event.simulate("submit", this.parentNode, e))
                },
                teardown: function() {
                    if (g.nodeName(this, "form")) return !1;
                    g.event.remove(this, "._submit")
                }
            }), m.change || (g.event.special.change = {
                setup: function() {
                    if (me.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (g.event.add(this, "propertychange._change", (function(e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    })), g.event.add(this, "click._change", (function(e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1), g.event.simulate("change", this, e)
                    }))), !1;
                    g.event.add(this, "beforeactivate._change", (function(e) {
                        var t = e.target;
                        me.test(t.nodeName) && !g._data(t, "change") && (g.event.add(t, "change._change", (function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || g.event.simulate("change", this.parentNode, e)
                        })), g._data(t, "change", !0))
                    }))
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return g.event.remove(this, "._change"), !me.test(this.nodeName)
                }
            }), m.focusin || g.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(e, t) {
                var n = function(e) {
                    g.event.simulate(t, e.target, g.event.fix(e))
                };
                g.event.special[t] = {
                    setup: function() {
                        var i = this.ownerDocument || this,
                            r = g._data(i, t);
                        r || i.addEventListener(e, n, !0), g._data(i, t, (r || 0) + 1)
                    },
                    teardown: function() {
                        var i = this.ownerDocument || this,
                            r = g._data(i, t) - 1;
                        r ? g._data(i, t, r) : (i.removeEventListener(e, n, !0), g._removeData(i, t))
                    }
                }
            })), g.fn.extend({
                on: function(e, t, n, i) {
                    return Ae(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return Ae(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, g(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" === o(e)) {
                        for (r in e) this.off(r, t, e[r]);
                        return this
                    }
                    return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each((function() {
                        g.event.remove(this, e, n, t)
                    }))
                },
                trigger: function(e, t) {
                    return this.each((function() {
                        g.event.trigger(e, t, this)
                    }))
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return g.event.trigger(e, t, n, !0)
                }
            });
            var Ce = / jQuery\d+="(?:null|\d+)"/g,
                xe = new RegExp("<(?:" + ae + ")[\\s/>]", "i"),
                Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                Pe = /<script|<style|<link/i,
                Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ge = /^true\/(.*)/,
                Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                He = se(s).appendChild(s.createElement("div"));

            function ke(e, t) {
                return g.nodeName(e, "table") && g.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function Be(e) {
                return e.type = (null !== g.find.attr(e, "type")) + "/" + e.type, e
            }

            function De(e) {
                var t = Ge.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Ie(e, t) {
                if (1 === t.nodeType && g.hasData(e)) {
                    var n, i, r, o = g._data(e),
                        a = g._data(t, o),
                        s = o.events;
                    if (s)
                        for (n in delete a.handle, a.events = {}, s)
                            for (i = 0, r = s[n].length; i < r; i++) g.event.add(t, n, s[n][i]);
                    a.data && (a.data = g.extend({}, a.data))
                }
            }

            function Le(e, t) {
                var n, i, r;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !m.noCloneEvent && t[g.expando]) {
                        for (i in (r = g._data(t)).events) g.removeEvent(t, i, r.handle);
                        t.removeAttribute(g.expando)
                    }
                    "script" === n && t.text !== e.text ? (Be(t).text = e.text, De(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), m.html5Clone && e.innerHTML && !g.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ne.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
            }

            function Re(e, t, n, i) {
                t = c.apply([], t);
                var r, o, a, s, l, u, d = 0,
                    f = e.length,
                    p = f - 1,
                    h = t[0],
                    T = g.isFunction(h);
                if (T || f > 1 && "string" == typeof h && !m.checkClone && Me.test(h)) return e.each((function(r) {
                    var o = e.eq(r);
                    T && (t[0] = h.call(this, r, o.html())), Re(o, t, n, i)
                }));
                if (f && (r = (u = he(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                    for (a = (s = g.map(ce(u, "script"), Be)).length; d < f; d++) o = u, d !== p && (o = g.clone(o, !0, !0), a && g.merge(s, ce(o, "script"))), n.call(e[d], o, d);
                    if (a)
                        for (l = s[s.length - 1].ownerDocument, g.map(s, De), d = 0; d < a; d++) o = s[d], re.test(o.type || "") && !g._data(o, "globalEval") && g.contains(l, o) && (o.src ? g._evalUrl && g._evalUrl(o.src) : g.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ne, "")));
                    u = r = null
                }
                return e
            }

            function Oe(e, t, n) {
                for (var i, r = t ? g.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || g.cleanData(ce(i)), i.parentNode && (n && g.contains(i.ownerDocument, i) && ue(ce(i, "script")), i.parentNode.removeChild(i));
                return e
            }
            g.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Ee, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var i, r, o, a, s, l = g.contains(e.ownerDocument, e);
                    if (m.html5Clone || g.isXMLDoc(e) || !xe.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (He.innerHTML = e.outerHTML, He.removeChild(o = He.firstChild)), !(m.noCloneEvent && m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || g.isXMLDoc(e)))
                        for (i = ce(o), s = ce(e), a = 0; null != (r = s[a]); ++a) i[a] && Le(r, i[a]);
                    if (t)
                        if (n)
                            for (s = s || ce(e), i = i || ce(o), a = 0; null != (r = s[a]); a++) Ie(r, i[a]);
                        else Ie(e, o);
                    return (i = ce(o, "script")).length > 0 && ue(i, !l && ce(e, "script")), i = s = r = null, o
                },
                cleanData: function(e, t) {
                    for (var n, i, r, o, s = 0, l = g.expando, c = g.cache, u = m.attributes, d = g.event.special; null != (n = e[s]); s++)
                        if ((t || j(n)) && (o = (r = n[l]) && c[r])) {
                            if (o.events)
                                for (i in o.events) d[i] ? g.event.remove(n, i) : g.removeEvent(n, i, o.handle);
                            c[r] && (delete c[r], u || void 0 === n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), a.push(r))
                        }
                }
            }), g.fn.extend({
                domManip: Re,
                detach: function(e) {
                    return Oe(this, e, !0)
                },
                remove: function(e) {
                    return Oe(this, e)
                },
                text: function(e) {
                    return te(this, (function(e) {
                        return void 0 === e ? g.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
                    }), null, e, arguments.length)
                },
                append: function() {
                    return Re(this, arguments, (function(e) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ke(this, e).appendChild(e)
                    }))
                },
                prepend: function() {
                    return Re(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = ke(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    }))
                },
                before: function() {
                    return Re(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    }))
                },
                after: function() {
                    return Re(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    }))
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && g.cleanData(ce(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && g.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map((function() {
                        return g.clone(this, e, t)
                    }))
                },
                html: function(e) {
                    return te(this, (function(e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ce, "") : void 0;
                        if ("string" == typeof e && !Pe.test(e) && (m.htmlSerialize || !xe.test(e)) && (m.leadingWhitespace || !oe.test(e)) && !le[(ie.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = g.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (g.cleanData(ce(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (e) {}
                        }
                        t && this.empty().append(e)
                    }), null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Re(this, arguments, (function(t) {
                        var n = this.parentNode;
                        g.inArray(this, e) < 0 && (g.cleanData(ce(this)), n && n.replaceChild(t, this))
                    }), e)
                }
            }), g.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(e, t) {
                g.fn[e] = function(e) {
                    for (var n, i = 0, r = [], o = g(e), a = o.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), g(o[i])[t](n), u.apply(r, n.get());
                    return this.pushStack(r)
                }
            }));
            var _e, je = {
                HTML: "block",
                BODY: "block"
            };

            function Fe(e, t) {
                var n = g(t.createElement(e)).appendTo(t.body),
                    i = g.css(n[0], "display");
                return n.detach(), i
            }

            function Ve(e) {
                var t = s,
                    n = je[e];
                return n || ("none" !== (n = Fe(e, t)) && n || ((t = ((_e = (_e || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || _e[0].contentDocument).document).write(), t.close(), n = Fe(e, t), _e.detach()), je[e] = n), n
            }
            var Ue = /^margin/,
                ze = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
                We = function(e, t, n, i) {
                    var r, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
                    return r
                },
                qe = s.documentElement;
            ! function() {
                var e, t, n, r, o, a, l = s.createElement("div"),
                    c = s.createElement("div");

                function u() {
                    var u, d, f = s.documentElement;
                    f.appendChild(l), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", e = n = a = !1, t = o = !0, i.getComputedStyle && (d = i.getComputedStyle(c), e = "1%" !== (d || {}).top, a = "2px" === (d || {}).marginLeft, n = "4px" === (d || {
                        width: "4px"
                    }).width, c.style.marginRight = "50%", t = "4px" === (d || {
                        marginRight: "4px"
                    }).marginRight, (u = c.appendChild(s.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", u.style.marginRight = u.style.width = "0", c.style.width = "1px", o = !parseFloat((i.getComputedStyle(u) || {}).marginRight), c.removeChild(u)), c.style.display = "none", (r = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (u = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (r = 0 === u[0].offsetHeight) && (u[0].style.display = "", u[1].style.display = "none", r = 0 === u[0].offsetHeight)), f.removeChild(l)
                }
                c.style && (c.style.cssText = "float:left;opacity:.5", m.opacity = "0.5" === c.style.opacity, m.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, (l = s.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), m.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, g.extend(m, {
                    reliableHiddenOffsets: function() {
                        return null == e && u(), r
                    },
                    boxSizingReliable: function() {
                        return null == e && u(), n
                    },
                    pixelMarginRight: function() {
                        return null == e && u(), t
                    },
                    pixelPosition: function() {
                        return null == e && u(), e
                    },
                    reliableMarginRight: function() {
                        return null == e && u(), o
                    },
                    reliableMarginLeft: function() {
                        return null == e && u(), a
                    }
                }))
            }();
            var Xe, Ke, Qe = /^(top|right|bottom|left)$/;

            function Je(e, t) {
                return {
                    get: function() {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            i.getComputedStyle ? (Xe = function(e) {
                var t = e.ownerDocument.defaultView;
                return t && t.opener || (t = i), t.getComputedStyle(e)
            }, Ke = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return "" !== (a = (n = n || Xe(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || g.contains(e.ownerDocument, e) || (a = g.style(e, t)), n && !m.pixelMarginRight() && ze.test(a) && Ue.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), void 0 === a ? a : a + ""
            }) : qe.currentStyle && (Xe = function(e) {
                return e.currentStyle
            }, Ke = function(e, t, n) {
                var i, r, o, a, s = e.style;
                return null == (a = (n = n || Xe(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), ze.test(a) && !Qe.test(t) && (i = s.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto"
            });
            var $e = /alpha\([^)]*\)/i,
                Ze = /opacity\s*=\s*([^)]*)/i,
                Ye = /^(none|table(?!-c[ea]).+)/,
                et = new RegExp("^(" + X + ")(.*)$", "i"),
                tt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                nt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                it = ["Webkit", "O", "Moz", "ms"],
                rt = s.createElement("div").style;

            function ot(e) {
                if (e in rt) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = it.length; n--;)
                    if ((e = it[n] + t) in rt) return e
            }

            function at(e, t) {
                for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = g._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && J(i) && (o[a] = g._data(i, "olddisplay", Ve(i.nodeName)))) : (r = J(i), (n && "none" !== n || !r) && g._data(i, "olddisplay", r ? n : g.css(i, "display"))));
                for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
                return e
            }

            function st(e, t, n) {
                var i = et.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }

            function lt(e, t, n, i, r) {
                for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += g.css(e, n + Q[o], !0, r)), i ? ("content" === n && (a -= g.css(e, "padding" + Q[o], !0, r)), "margin" !== n && (a -= g.css(e, "border" + Q[o] + "Width", !0, r))) : (a += g.css(e, "padding" + Q[o], !0, r), "padding" !== n && (a += g.css(e, "border" + Q[o] + "Width", !0, r)));
                return a
            }

            function ct(e, t, n) {
                var r = !0,
                    o = "width" === t ? e.offsetWidth : e.offsetHeight,
                    a = Xe(e),
                    l = m.boxSizing && "border-box" === g.css(e, "boxSizing", !1, a);
                if (s.msFullscreenElement && i.top !== i && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[t])), o <= 0 || null == o) {
                    if (((o = Ke(e, t, a)) < 0 || null == o) && (o = e.style[t]), ze.test(o)) return o;
                    r = l && (m.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
                }
                return o + lt(e, t, n || (l ? "border" : "content"), r, a) + "px"
            }

            function ut(e, t, n, i, r) {
                return new ut.prototype.init(e, t, n, i, r)
            }
            g.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ke(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    float: m.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, a, s, l = g.camelCase(t),
                            c = e.style;
                        if (t = g.cssProps[l] || (g.cssProps[l] = ot(l) || l), s = g.cssHooks[t] || g.cssHooks[l], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                        if ("string" === (a = o(n)) && (r = K.exec(n)) && r[1] && (n = $(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (g.cssNumber[l] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                            c[t] = n
                        } catch (e) {}
                    }
                },
                css: function(e, t, n, i) {
                    var r, o, a, s = g.camelCase(t);
                    return t = g.cssProps[s] || (g.cssProps[s] = ot(s) || s), (a = g.cssHooks[t] || g.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Ke(e, t, i)), "normal" === o && t in nt && (o = nt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
                }
            }), g.each(["height", "width"], (function(e, t) {
                g.cssHooks[t] = {
                    get: function(e, n, i) {
                        if (n) return Ye.test(g.css(e, "display")) && 0 === e.offsetWidth ? We(e, tt, (function() {
                            return ct(e, t, i)
                        })) : ct(e, t, i)
                    },
                    set: function(e, n, i) {
                        var r = i && Xe(e);
                        return st(0, n, i ? lt(e, t, i, m.boxSizing && "border-box" === g.css(e, "boxSizing", !1, r), r) : 0)
                    }
                }
            })), m.opacity || (g.cssHooks.opacity = {
                get: function(e, t) {
                    return Ze.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style,
                        i = e.currentStyle,
                        r = g.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        o = i && i.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === g.trim(o.replace($e, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = $e.test(o) ? o.replace($e, r) : o + " " + r)
                }
            }), g.cssHooks.marginRight = Je(m.reliableMarginRight, (function(e, t) {
                if (t) return We(e, {
                    display: "inline-block"
                }, Ke, [e, "marginRight"])
            })), g.cssHooks.marginLeft = Je(m.reliableMarginLeft, (function(e, t) {
                if (t) return (parseFloat(Ke(e, "marginLeft")) || (g.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - We(e, {
                    marginLeft: 0
                }, (function() {
                    return e.getBoundingClientRect().left
                })) : 0)) + "px"
            })), g.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(e, t) {
                g.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Q[i] + t] = o[i] || o[i - 2] || o[0];
                        return r
                    }
                }, Ue.test(e) || (g.cssHooks[e + t].set = st)
            })), g.fn.extend({
                css: function(e, t) {
                    return te(this, (function(e, t, n) {
                        var i, r, o = {},
                            a = 0;
                        if (g.isArray(t)) {
                            for (i = Xe(e), r = t.length; a < r; a++) o[t[a]] = g.css(e, t[a], !1, i);
                            return o
                        }
                        return void 0 !== n ? g.style(e, t, n) : g.css(e, t)
                    }), e, t, arguments.length > 1)
                },
                show: function() {
                    return at(this, !0)
                },
                hide: function() {
                    return at(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                        J(this) ? g(this).show() : g(this).hide()
                    }))
                }
            }), g.Tween = ut, ut.prototype = {
                constructor: ut,
                init: function(e, t, n, i, r, o) {
                    this.elem = e, this.prop = n, this.easing = r || g.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (g.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = ut.propHooks[this.prop];
                    return e && e.get ? e.get(this) : ut.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = ut.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ut.propHooks._default.set(this), this
                }
            }, ut.prototype.init.prototype = ut.prototype, ut.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = g.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                    },
                    set: function(e) {
                        g.fx.step[e.prop] ? g.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[g.cssProps[e.prop]] && !g.cssHooks[e.prop] ? e.elem[e.prop] = e.now : g.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, ut.propHooks.scrollTop = ut.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, g.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, g.fx = ut.prototype.init, g.fx.step = {};
            var dt, ft, pt = /^(?:toggle|show|hide)$/,
                ht = /queueHooks$/;

            function mt() {
                return i.setTimeout((function() {
                    dt = void 0
                })), dt = g.now()
            }

            function gt(e, t) {
                var n, i = {
                        height: e
                    },
                    r = 0;
                for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function Tt(e, t, n) {
                for (var i, r = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                    if (i = r[o].call(n, t, e)) return i
            }

            function vt(e, t, n) {
                var i, r, o = 0,
                    a = vt.prefilters.length,
                    s = g.Deferred().always((function() {
                        delete l.elem
                    })),
                    l = function() {
                        if (r) return !1;
                        for (var t = dt || mt(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(i);
                        return s.notifyWith(e, [c, i, n]), i < 1 && a ? n : (s.resolveWith(e, [c]), !1)
                    },
                    c = s.promise({
                        elem: e,
                        props: g.extend({}, t),
                        opts: g.extend(!0, {
                            specialEasing: {},
                            easing: g.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: dt || mt(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var i = g.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function(t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) c.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (function(e, t) {
                        var n, i, r, o, a;
                        for (n in e)
                            if (r = t[i = g.camelCase(n)], o = e[n], g.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = g.cssHooks[i]) && "expand" in a)
                                for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                            else t[i] = r
                    }(u, c.opts.specialEasing); o < a; o++)
                    if (i = vt.prefilters[o].call(c, e, u, c.opts)) return g.isFunction(i.stop) && (g._queueHooks(c.elem, c.opts.queue).stop = g.proxy(i.stop, i)), i;
                return g.map(u, Tt, c), g.isFunction(c.opts.start) && c.opts.start.call(e, c), g.fx.timer(g.extend(l, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }
            g.Animation = g.extend(vt, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return $(n.elem, e, K.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        g.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(L);
                        for (var n, i = 0, r = e.length; i < r; i++) n = e[i], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
                    },
                    prefilters: [function(e, t, n) {
                        var i, r, o, a, s, l, c, u = this,
                            d = {},
                            f = e.style,
                            p = e.nodeType && J(e),
                            h = g._data(e, "fxshow");
                        for (i in n.queue || (null == (s = g._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                                s.unqueued || l()
                            }), s.unqueued++, u.always((function() {
                                u.always((function() {
                                    s.unqueued--, g.queue(e, "fx").length || s.empty.fire()
                                }))
                            }))), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (c = g.css(e, "display")) ? g._data(e, "olddisplay") || Ve(e.nodeName) : c) && "none" === g.css(e, "float") && (m.inlineBlockNeedsLayout && "inline" !== Ve(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", m.shrinkWrapBlocks() || u.always((function() {
                                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                            }))), t)
                            if (r = t[i], pt.exec(r)) {
                                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                                    if ("show" !== r || !h || void 0 === h[i]) continue;
                                    p = !0
                                }
                                d[i] = h && h[i] || g.style(e, i)
                            } else c = void 0;
                        if (g.isEmptyObject(d)) "inline" === ("none" === c ? Ve(e.nodeName) : c) && (f.display = c);
                        else
                            for (i in h ? "hidden" in h && (p = h.hidden) : h = g._data(e, "fxshow", {}), o && (h.hidden = !p), p ? g(e).show() : u.done((function() {
                                    g(e).hide()
                                })), u.done((function() {
                                    var t;
                                    for (t in g._removeData(e, "fxshow"), d) g.style(e, t, d[t])
                                })), d) a = Tt(p ? h[i] : 0, i, u), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
                    }],
                    prefilter: function(e, t) {
                        t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
                    }
                }), g.speed = function(e, t, n) {
                    var i = e && "object" === o(e) ? g.extend({}, e) : {
                        complete: n || !n && t || g.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !g.isFunction(t) && t
                    };
                    return i.duration = g.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in g.fx.speeds ? g.fx.speeds[i.duration] : g.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                        g.isFunction(i.old) && i.old.call(this), i.queue && g.dequeue(this, i.queue)
                    }, i
                }, g.fn.extend({
                    fadeTo: function(e, t, n, i) {
                        return this.filter(J).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, i)
                    },
                    animate: function(e, t, n, i) {
                        var r = g.isEmptyObject(e),
                            o = g.speed(t, n, i),
                            a = function() {
                                var t = vt(this, g.extend({}, e), o);
                                (r || g._data(this, "finish")) && t.stop(!0)
                            };
                        return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                    },
                    stop: function(e, t, n) {
                        var i = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each((function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                o = g.timers,
                                a = g._data(this);
                            if (r) a[r] && a[r].stop && i(a[r]);
                            else
                                for (r in a) a[r] && a[r].stop && ht.test(r) && i(a[r]);
                            for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                            !t && n || g.dequeue(this, e)
                        }))
                    },
                    finish: function(e) {
                        return !1 !== e && (e = e || "fx"), this.each((function() {
                            var t, n = g._data(this),
                                i = n[e + "queue"],
                                r = n[e + "queueHooks"],
                                o = g.timers,
                                a = i ? i.length : 0;
                            for (n.finish = !0, g.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                            for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                            delete n.finish
                        }))
                    }
                }), g.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = g.fn[t];
                    g.fn[t] = function(e, i, r) {
                        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(gt(t, !0), e, i, r)
                    }
                })), g.each({
                    slideDown: gt("show"),
                    slideUp: gt("hide"),
                    slideToggle: gt("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(e, t) {
                    g.fn[e] = function(e, n, i) {
                        return this.animate(t, e, n, i)
                    }
                })), g.timers = [], g.fx.tick = function() {
                    var e, t = g.timers,
                        n = 0;
                    for (dt = g.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                    t.length || g.fx.stop(), dt = void 0
                }, g.fx.timer = function(e) {
                    g.timers.push(e), e() ? g.fx.start() : g.timers.pop()
                }, g.fx.interval = 13, g.fx.start = function() {
                    ft || (ft = i.setInterval(g.fx.tick, g.fx.interval))
                }, g.fx.stop = function() {
                    i.clearInterval(ft), ft = null
                }, g.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, g.fn.delay = function(e, t) {
                    return e = g.fx && g.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                        var r = i.setTimeout(t, e);
                        n.stop = function() {
                            i.clearTimeout(r)
                        }
                    }))
                },
                function() {
                    var e, t = s.createElement("input"),
                        n = s.createElement("div"),
                        i = s.createElement("select"),
                        r = i.appendChild(s.createElement("option"));
                    (n = s.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", m.getSetAttribute = "t" !== n.className, m.style = /top/.test(e.getAttribute("style")), m.hrefNormalized = "/a" === e.getAttribute("href"), m.checkOn = !!t.value, m.optSelected = r.selected, m.enctype = !!s.createElement("form").enctype, i.disabled = !0, m.optDisabled = !r.disabled, (t = s.createElement("input")).setAttribute("value", ""), m.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), m.radioValue = "t" === t.value
                }();
            var yt = /\r/g,
                bt = /[\x20\t\r\n\f]+/g;
            g.fn.extend({
                val: function(e) {
                    var t, n, i, r = this[0];
                    return arguments.length ? (i = g.isFunction(e), this.each((function(n) {
                        var r;
                        1 === this.nodeType && (null == (r = i ? e.call(this, n, g(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : g.isArray(r) && (r = g.map(r, (function(e) {
                            return null == e ? "" : e + ""
                        }))), (t = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    }))) : r ? (t = g.valHooks[r.type] || g.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(yt, "") : null == n ? "" : n : void 0
                }
            }), g.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = g.find.attr(e, "value");
                            return null != t ? t : g.trim(g.text(e)).replace(bt, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                                if (((n = i[l]).selected || l === r) && (m.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !g.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = g(n).val(), o) return t;
                                    a.push(t)
                                }
                            return a
                        },
                        set: function(e, t) {
                            for (var n, i, r = e.options, o = g.makeArray(t), a = r.length; a--;)
                                if (i = r[a], g.inArray(g.valHooks.option.get(i), o) > -1) try {
                                    i.selected = n = !0
                                } catch (e) {
                                    i.scrollHeight
                                } else i.selected = !1;
                            return n || (e.selectedIndex = -1), r
                        }
                    }
                }
            }), g.each(["radio", "checkbox"], (function() {
                g.valHooks[this] = {
                    set: function(e, t) {
                        if (g.isArray(t)) return e.checked = g.inArray(g(e).val(), t) > -1
                    }
                }, m.checkOn || (g.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            }));
            var St, wt, At = g.expr.attrHandle,
                Ct = /^(?:checked|selected)$/i,
                xt = m.getSetAttribute,
                Et = m.input;
            g.fn.extend({
                attr: function(e, t) {
                    return te(this, g.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each((function() {
                        g.removeAttr(this, e)
                    }))
                }
            }), g.extend({
                attr: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? g.prop(e, t, n) : (1 === o && g.isXMLDoc(e) || (t = t.toLowerCase(), r = g.attrHooks[t] || (g.expr.match.bool.test(t) ? wt : St)), void 0 !== n ? null === n ? void g.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = g.find.attr(e, t)) ? void 0 : i)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!m.radioValue && "radio" === t && g.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i, r = 0,
                        o = t && t.match(L);
                    if (o && 1 === e.nodeType)
                        for (; n = o[r++];) i = g.propFix[n] || n, g.expr.match.bool.test(n) ? Et && xt || !Ct.test(n) ? e[i] = !1 : e[g.camelCase("default-" + n)] = e[i] = !1 : g.attr(e, n, ""), e.removeAttribute(xt ? n : i)
                }
            }), wt = {
                set: function(e, t, n) {
                    return !1 === t ? g.removeAttr(e, n) : Et && xt || !Ct.test(n) ? e.setAttribute(!xt && g.propFix[n] || n, n) : e[g.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, g.each(g.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                var n = At[t] || g.find.attr;
                Et && xt || !Ct.test(t) ? At[t] = function(e, t, i) {
                    var r, o;
                    return i || (o = At[t], At[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, At[t] = o), r
                } : At[t] = function(e, t, n) {
                    if (!n) return e[g.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            })), Et && xt || (g.attrHooks.value = {
                set: function(e, t, n) {
                    if (!g.nodeName(e, "input")) return St && St.set(e, t, n);
                    e.defaultValue = t
                }
            }), xt || (St = {
                set: function(e, t, n) {
                    var i = e.getAttributeNode(n);
                    if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
                }
            }, At.id = At.name = At.coords = function(e, t, n) {
                var i;
                if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
            }, g.valHooks.button = {
                get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified) return n.value
                },
                set: St.set
            }, g.attrHooks.contenteditable = {
                set: function(e, t, n) {
                    St.set(e, "" !== t && t, n)
                }
            }, g.each(["width", "height"], (function(e, t) {
                g.attrHooks[t] = {
                    set: function(e, n) {
                        if ("" === n) return e.setAttribute(t, "auto"), n
                    }
                }
            }))), m.style || (g.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || void 0
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Pt = /^(?:input|select|textarea|button|object)$/i,
                Mt = /^(?:a|area)$/i;
            g.fn.extend({
                prop: function(e, t) {
                    return te(this, g.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = g.propFix[e] || e, this.each((function() {
                        try {
                            this[e] = void 0, delete this[e]
                        } catch (e) {}
                    }))
                }
            }), g.extend({
                prop: function(e, t, n) {
                    var i, r, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o) return 1 === o && g.isXMLDoc(e) || (t = g.propFix[t] || t, r = g.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = g.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), m.hrefNormalized || g.each(["href", "src"], (function(e, t) {
                g.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            })), m.optSelected || (g.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                g.propFix[this.toLowerCase()] = this
            })), m.enctype || (g.propFix.enctype = "encoding");
            var Gt = /[\t\r\n\f]/g;

            function Nt(e) {
                return g.attr(e, "class") || ""
            }
            g.fn.extend({
                addClass: function(e) {
                    var t, n, i, r, o, a, s, l = 0;
                    if (g.isFunction(e)) return this.each((function(t) {
                        g(this).addClass(e.call(this, t, Nt(this)))
                    }));
                    if ("string" == typeof e && e)
                        for (t = e.match(L) || []; n = this[l++];)
                            if (r = Nt(n), i = 1 === n.nodeType && (" " + r + " ").replace(Gt, " ")) {
                                for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                r !== (s = g.trim(i)) && g.attr(n, "class", s)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, i, r, o, a, s, l = 0;
                    if (g.isFunction(e)) return this.each((function(t) {
                        g(this).removeClass(e.call(this, t, Nt(this)))
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(L) || []; n = this[l++];)
                            if (r = Nt(n), i = 1 === n.nodeType && (" " + r + " ").replace(Gt, " ")) {
                                for (a = 0; o = t[a++];)
                                    for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                                r !== (s = g.trim(i)) && g.attr(n, "class", s)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = o(e);
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : g.isFunction(e) ? this.each((function(n) {
                        g(this).toggleClass(e.call(this, n, Nt(this), t), t)
                    })) : this.each((function() {
                        var t, i, r, o;
                        if ("string" === n)
                            for (i = 0, r = g(this), o = e.match(L) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                        else void 0 !== e && "boolean" !== n || ((t = Nt(this)) && g._data(this, "__className__", t), g.attr(this, "class", t || !1 === e ? "" : g._data(this, "__className__") || ""))
                    }))
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + Nt(n) + " ").replace(Gt, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            }), g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
                g.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            })), g.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var Ht = i.location,
                kt = g.now(),
                Bt = /\?/,
                Dt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            g.parseJSON = function(e) {
                if (i.JSON && i.JSON.parse) return i.JSON.parse(e + "");
                var t, n = null,
                    r = g.trim(e + "");
                return r && !g.trim(r.replace(Dt, (function(e, i, r, o) {
                    return t && i && (n = 0), 0 === n ? e : (t = r || i, n += !o - !r, "")
                }))) ? Function("return " + r)() : g.error("Invalid JSON: " + e)
            }, g.parseXML = function(e) {
                var t;
                if (!e || "string" != typeof e) return null;
                try {
                    i.DOMParser ? t = (new i.DOMParser).parseFromString(e, "text/xml") : ((t = new i.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
                } catch (e) {
                    t = void 0
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + e), t
            };
            var It = /#.*$/,
                Lt = /([?&])_=[^&]*/,
                Rt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Ot = /^(?:GET|HEAD)$/,
                _t = /^\/\//,
                jt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Ft = {},
                Vt = {},
                Ut = "*/".concat("*"),
                zt = Ht.href,
                Wt = jt.exec(zt.toLowerCase()) || [];

            function qt(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r = 0,
                        o = t.toLowerCase().match(L) || [];
                    if (g.isFunction(n))
                        for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function Xt(e, t, n, i) {
                var r = {},
                    o = e === Vt;

                function a(s) {
                    var l;
                    return r[s] = !0, g.each(e[s] || [], (function(e, s) {
                        var c = s(t, n, i);
                        return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
                    })), l
                }
                return a(t.dataTypes[0]) || !r["*"] && a("*")
            }

            function Kt(e, t) {
                var n, i, r = g.ajaxSettings.flatOptions || {};
                for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
                return n && g.extend(!0, e, n), e
            }

            function Qt(e) {
                return e.style && e.style.display || g.css(e, "display")
            }
            g.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: zt,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Wt[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ut,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": g.parseJSON,
                        "text xml": g.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Kt(Kt(e, g.ajaxSettings), t) : Kt(g.ajaxSettings, e)
                },
                ajaxPrefilter: qt(Ft),
                ajaxTransport: qt(Vt),
                ajax: function(e, t) {
                    "object" === o(e) && (t = e, e = void 0), t = t || {};
                    var n, r, a, s, l, c, u, d, f = g.ajaxSetup({}, t),
                        p = f.context || f,
                        h = f.context && (p.nodeType || p.jquery) ? g(p) : g.event,
                        m = g.Deferred(),
                        T = g.Callbacks("once memory"),
                        v = f.statusCode || {},
                        y = {},
                        b = {},
                        S = 0,
                        w = "canceled",
                        A = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (2 === S) {
                                    if (!d)
                                        for (d = {}; t = Rt.exec(s);) d[t[1].toLowerCase()] = t[2];
                                    t = d[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return 2 === S ? s : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return S || (e = b[n] = b[n] || e, y[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return S || (f.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (S < 2)
                                        for (t in e) v[t] = [v[t], e[t]];
                                    else A.always(e[A.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || w;
                                return u && u.abort(t), C(0, t), this
                            }
                        };
                    if (m.promise(A).complete = T.add, A.success = A.done, A.error = A.fail, f.url = ((e || f.url || zt) + "").replace(It, "").replace(_t, Wt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = g.trim(f.dataType || "*").toLowerCase().match(L) || [""], null == f.crossDomain && (n = jt.exec(f.url.toLowerCase()), f.crossDomain = !(!n || n[1] === Wt[1] && n[2] === Wt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Wt[3] || ("http:" === Wt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = g.param(f.data, f.traditional)), Xt(Ft, f, t, A), 2 === S) return A;
                    for (r in (c = g.event && f.global) && 0 == g.active++ && g.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (Bt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Lt.test(a) ? a.replace(Lt, "$1_=" + kt++) : a + (Bt.test(a) ? "&" : "?") + "_=" + kt++)), f.ifModified && (g.lastModified[a] && A.setRequestHeader("If-Modified-Since", g.lastModified[a]), g.etag[a] && A.setRequestHeader("If-None-Match", g.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && A.setRequestHeader("Content-Type", f.contentType), A.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]), f.headers) A.setRequestHeader(r, f.headers[r]);
                    if (f.beforeSend && (!1 === f.beforeSend.call(p, A, f) || 2 === S)) return A.abort();
                    for (r in w = "abort", {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) A[r](f[r]);
                    if (u = Xt(Vt, f, t, A)) {
                        if (A.readyState = 1, c && h.trigger("ajaxSend", [A, f]), 2 === S) return A;
                        f.async && f.timeout > 0 && (l = i.setTimeout((function() {
                            A.abort("timeout")
                        }), f.timeout));
                        try {
                            S = 1, u.send(y, C)
                        } catch (e) {
                            if (!(S < 2)) throw e;
                            C(-1, e)
                        }
                    } else C(-1, "No Transport");

                    function C(e, t, n, r) {
                        var o, d, y, b, w, C = t;
                        2 !== S && (S = 2, l && i.clearTimeout(l), u = void 0, s = r || "", A.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, n && (b = function(e, t, n) {
                            for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                                "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                            if (r)
                                for (a in s)
                                    if (s[a] && s[a].test(r)) {
                                        l.unshift(a);
                                        break
                                    }
                            if (l[0] in n) o = l[0];
                            else {
                                for (a in n) {
                                    if (!l[0] || e.converters[a + " " + l[0]]) {
                                        o = a;
                                        break
                                    }
                                    i || (i = a)
                                }
                                o = o || i
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(f, A, n)), b = function(e, t, n, i) {
                            var r, o, a, s, l, c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                            for (o = u.shift(); o;)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                if (!(a = c[l + " " + o] || c["* " + o]))
                                    for (r in c)
                                        if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                            !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e.throws) t = a(t);
                                    else try {
                                        t = a(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: a ? e : "No conversion from " + l + " to " + o
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: t
                            }
                        }(f, b, A, o), o ? (f.ifModified && ((w = A.getResponseHeader("Last-Modified")) && (g.lastModified[a] = w), (w = A.getResponseHeader("etag")) && (g.etag[a] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, o = !(y = b.error))) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), A.status = e, A.statusText = (t || C) + "", o ? m.resolveWith(p, [d, C, A]) : m.rejectWith(p, [A, C, y]), A.statusCode(v), v = void 0, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [A, f, o ? d : y]), T.fireWith(p, [A, C]), c && (h.trigger("ajaxComplete", [A, f]), --g.active || g.event.trigger("ajaxStop")))
                    }
                    return A
                },
                getJSON: function(e, t, n) {
                    return g.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return g.get(e, void 0, t, "script")
                }
            }), g.each(["get", "post"], (function(e, t) {
                g[t] = function(e, n, i, r) {
                    return g.isFunction(n) && (r = r || i, i = n, n = void 0), g.ajax(g.extend({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    }, g.isPlainObject(e) && e))
                }
            })), g._evalUrl = function(e) {
                return g.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, g.fn.extend({
                wrapAll: function(e) {
                    if (g.isFunction(e)) return this.each((function(t) {
                        g(this).wrapAll(e.call(this, t))
                    }));
                    if (this[0]) {
                        var t = g(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        })).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return g.isFunction(e) ? this.each((function(t) {
                        g(this).wrapInner(e.call(this, t))
                    })) : this.each((function() {
                        var t = g(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    }))
                },
                wrap: function(e) {
                    var t = g.isFunction(e);
                    return this.each((function(n) {
                        g(this).wrapAll(t ? e.call(this, n) : e)
                    }))
                },
                unwrap: function() {
                    return this.parent().each((function() {
                        g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
                    })).end()
                }
            }), g.expr.filters.hidden = function(e) {
                return m.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
                    for (; e && 1 === e.nodeType;) {
                        if ("none" === Qt(e) || "hidden" === e.type) return !0;
                        e = e.parentNode
                    }
                    return !1
                }(e)
            }, g.expr.filters.visible = function(e) {
                return !g.expr.filters.hidden(e)
            };
            var Jt = /%20/g,
                $t = /\[\]$/,
                Zt = /\r?\n/g,
                Yt = /^(?:submit|button|image|reset|file)$/i,
                en = /^(?:input|select|textarea|keygen)/i;

            function tn(e, t, n, i) {
                var r;
                if (g.isArray(t)) g.each(t, (function(t, r) {
                    n || $t.test(e) ? i(e, r) : tn(e + "[" + ("object" === o(r) && null != r ? t : "") + "]", r, n, i)
                }));
                else if (n || "object" !== g.type(t)) i(e, t);
                else
                    for (r in t) tn(e + "[" + r + "]", t[r], n, i)
            }
            g.param = function(e, t) {
                var n, i = [],
                    r = function(e, t) {
                        t = g.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(e) || e.jquery && !g.isPlainObject(e)) g.each(e, (function() {
                    r(this.name, this.value)
                }));
                else
                    for (n in e) tn(n, e[n], t, r);
                return i.join("&").replace(Jt, "+")
            }, g.fn.extend({
                serialize: function() {
                    return g.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map((function() {
                        var e = g.prop(this, "elements");
                        return e ? g.makeArray(e) : this
                    })).filter((function() {
                        var e = this.type;
                        return this.name && !g(this).is(":disabled") && en.test(this.nodeName) && !Yt.test(e) && (this.checked || !ne.test(e))
                    })).map((function(e, t) {
                        var n = g(this).val();
                        return null == n ? null : g.isArray(n) ? g.map(n, (function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Zt, "\r\n")
                            }
                        })) : {
                            name: t.name,
                            value: n.replace(Zt, "\r\n")
                        }
                    })).get()
                }
            }), g.ajaxSettings.xhr = void 0 !== i.ActiveXObject ? function() {
                return this.isLocal ? sn() : s.documentMode > 8 ? an() : /^(get|post|head|put|delete|options)$/i.test(this.type) && an() || sn()
            } : an;
            var nn = 0,
                rn = {},
                on = g.ajaxSettings.xhr();

            function an() {
                try {
                    return new i.XMLHttpRequest
                } catch (e) {}
            }

            function sn() {
                try {
                    return new i.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            i.attachEvent && i.attachEvent("onunload", (function() {
                for (var e in rn) rn[e](void 0, !0)
            })), m.cors = !!on && "withCredentials" in on, (on = m.ajax = !!on) && g.ajaxTransport((function(e) {
                var t;
                if (!e.crossDomain || m.cors) return {
                    send: function(n, r) {
                        var o, a = e.xhr(),
                            s = ++nn;
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) a[o] = e.xhrFields[o];
                        for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                        a.send(e.hasContent && e.data || null), t = function(n, i) {
                            var o, l, c;
                            if (t && (i || 4 === a.readyState))
                                if (delete rn[s], t = void 0, a.onreadystatechange = g.noop, i) 4 !== a.readyState && a.abort();
                                else {
                                    c = {}, o = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (e) {
                                        l = ""
                                    }
                                    o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                                }
                            c && r(o, l, c, a.getAllResponseHeaders())
                        }, e.async ? 4 === a.readyState ? i.setTimeout(t) : a.onreadystatechange = rn[s] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            })), g.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return g.globalEval(e), e
                    }
                }
            }), g.ajaxPrefilter("script", (function(e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            })), g.ajaxTransport("script", (function(e) {
                if (e.crossDomain) {
                    var t, n = s.head || g("head")[0] || s.documentElement;
                    return {
                        send: function(i, r) {
                            (t = s.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                            }, n.insertBefore(t, n.firstChild)
                        },
                        abort: function() {
                            t && t.onload(void 0, !0)
                        }
                    }
                }
            }));
            var ln = [],
                cn = /(=)\?(?=&|$)|\?\?/;
            g.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = ln.pop() || g.expando + "_" + kt++;
                    return this[e] = !0, e
                }
            }), g.ajaxPrefilter("json jsonp", (function(e, t, n) {
                var r, o, a, s = !1 !== e.jsonp && (cn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(e.data) && "data");
                if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = g.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(cn, "$1" + r) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return a || g.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = i[r], i[r] = function() {
                    a = arguments
                }, n.always((function() {
                    void 0 === o ? g(i).removeProp(r) : i[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, ln.push(r)), a && g.isFunction(o) && o(a[0]), a = o = void 0
                })), "script"
            })), g.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || s;
                var i = E.exec(e),
                    r = !n && [];
                return i ? [t.createElement(i[1])] : (i = he([e], t, r), r && r.length && g(r).remove(), g.merge([], i.childNodes))
            };
            var un = g.fn.load;

            function dn(e) {
                return g.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            g.fn.load = function(e, t, n) {
                if ("string" != typeof e && un) return un.apply(this, arguments);
                var i, r, a, s = this,
                    l = e.indexOf(" ");
                return l > -1 && (i = g.trim(e.slice(l, e.length)), e = e.slice(0, l)), g.isFunction(t) ? (n = t, t = void 0) : t && "object" === o(t) && (r = "POST"), s.length > 0 && g.ajax({
                    url: e,
                    type: r || "GET",
                    dataType: "html",
                    data: t
                }).done((function(e) {
                    a = arguments, s.html(i ? g("<div>").append(g.parseHTML(e)).find(i) : e)
                })).always(n && function(e, t) {
                    s.each((function() {
                        n.apply(this, a || [e.responseText, t, e])
                    }))
                }), this
            }, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                g.fn[t] = function(e) {
                    return this.on(t, e)
                }
            })), g.expr.filters.animated = function(e) {
                return g.grep(g.timers, (function(t) {
                    return e === t.elem
                })).length
            }, g.offset = {
                setOffset: function(e, t, n) {
                    var i, r, o, a, s, l, c = g.css(e, "position"),
                        u = g(e),
                        d = {};
                    "static" === c && (e.style.position = "relative"), s = u.offset(), o = g.css(e, "top"), l = g.css(e, "left"), ("absolute" === c || "fixed" === c) && g.inArray("auto", [o, l]) > -1 ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), g.isFunction(t) && (t = t.call(e, n, g.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
                }
            }, g.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                        g.offset.setOffset(this, e, t)
                    }));
                    var t, n, i = {
                            top: 0,
                            left: 0
                        },
                        r = this[0],
                        o = r && r.ownerDocument;
                    return o ? (t = o.documentElement, g.contains(t, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = dn(o), {
                        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : i) : void 0
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                                top: 0,
                                left: 0
                            },
                            i = this[0];
                        return "fixed" === g.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), g.nodeName(e[0], "html") || (n = e.offset()), n.top += g.css(e[0], "borderTopWidth", !0), n.left += g.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - g.css(i, "marginTop", !0),
                            left: t.left - n.left - g.css(i, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var e = this.offsetParent; e && !g.nodeName(e, "html") && "static" === g.css(e, "position");) e = e.offsetParent;
                        return e || qe
                    }))
                }
            }), g.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(e, t) {
                var n = /Y/.test(t);
                g.fn[e] = function(i) {
                    return te(this, (function(e, i, r) {
                        var o = dn(e);
                        if (void 0 === r) return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
                        o ? o.scrollTo(n ? g(o).scrollLeft() : r, n ? r : g(o).scrollTop()) : e[i] = r
                    }), e, i, arguments.length, null)
                }
            })), g.each(["top", "left"], (function(e, t) {
                g.cssHooks[t] = Je(m.pixelPosition, (function(e, n) {
                    if (n) return n = Ke(e, t), ze.test(n) ? g(e).position()[t] + "px" : n
                }))
            })), g.each({
                Height: "height",
                Width: "width"
            }, (function(e, t) {
                g.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, (function(n, i) {
                    g.fn[i] = function(i, r) {
                        var o = arguments.length && (n || "boolean" != typeof i),
                            a = n || (!0 === i || !0 === r ? "margin" : "border");
                        return te(this, (function(t, n, i) {
                            var r;
                            return g.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? g.css(t, n, a) : g.style(t, n, i, a)
                        }), t, o ? i : void 0, o, null)
                    }
                }))
            })), g.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), g.fn.size = function() {
                return this.length
            }, g.fn.andSelf = g.fn.addBack, void 0 === (n = function() {
                return g
            }.apply(t, [])) || (e.exports = n);
            var fn = i.jQuery,
                pn = i.$;
            return g.noConflict = function(e) {
                return i.$ === g && (i.$ = pn), e && i.jQuery === g && (i.jQuery = fn), g
            }, r || (i.jQuery = i.$ = g), g
        }, "object" === o(e) && "object" === o(e.exports) ? e.exports = i.document ? r(i, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return r(e)
        } : r(i)
    }).call(this, n(1)(e))
}, function(e, t) {
    Date.now || (Date.now = function() {
        "use strict";
        return (new Date).getTime()
    })
}, function(e, t) {
    Math.sign || (Math.sign = function(e) {
        "use strict";
        return (e > 0) - (e < 0) || +e
    })
}, function(e, t) {
    var n, i;
    document.all && !window.setTimeout.isPolyfill && (n = window.setTimeout, window.setTimeout = function(e, t) {
        "use strict";
        var i = Array.prototype.slice.call(arguments, 2);
        return n(e instanceof Function ? function() {
            e.apply(null, i)
        } : e, t)
    }, window.setTimeout.isPolyfill = !0), document.all && !window.setInterval.isPolyfill && (i = window.setInterval, window.setInterval = function(e, t) {
        "use strict";
        var n = Array.prototype.slice.call(arguments, 2);
        return i(e instanceof Function ? function() {
            e.apply(null, n)
        } : e, t)
    }, window.setInterval.isPolyfill = !0)
}, function(e, t, n) {
    (function(e) {
        ! function(t) {
            "use strict";
            var n, i, r, o, a, s, l, c, u, d = [],
                f = [],
                p = null,
                h = function() {},
                m = function() {},
                g = [],
                T = !1,
                v = !1;
            if (void 0 === t.performance && (t.performance = {}), t._perfRefForUserTimingPolyfill = t.performance, t.performance.userTimingJsNow = !1, t.performance.userTimingJsNowPrefixed = !1, t.performance.userTimingJsUserTiming = !1, t.performance.userTimingJsUserTimingPrefixed = !1, t.performance.userTimingJsPerformanceTimeline = !1, t.performance.userTimingJsPerformanceTimelinePrefixed = !1, "function" != typeof t.performance.now) {
                for (t.performance.userTimingJsNow = !0, f = ["webkitNow", "msNow", "mozNow"], l = 0; l < f.length; l++)
                    if ("function" == typeof t.performance[f[l]]) {
                        t.performance.now = t.performance[f[l]], t.performance.userTimingJsNowPrefixed = !0;
                        break
                    }
                n = +new Date, t.performance.timing && t.performance.timing.navigationStart ? n = t.performance.timing.navigationStart : void 0 !== e && "function" == typeof e.hrtime && (n = e.hrtime(), t.performance.now = function() {
                    var t = e.hrtime(n);
                    return 1e3 * t[0] + 1e-6 * t[1]
                }), "function" != typeof t.performance.now && (Date.now ? t.performance.now = function() {
                    return Date.now() - n
                } : t.performance.now = function() {
                    return +new Date - n
                })
            }
            if (u = t.performance.now(), "function" != typeof t.performance.getEntries || "function" != typeof t.performance.mark) {
                for ("function" == typeof t.performance.getEntries && "function" != typeof t.performance.mark && (v = !0), t.performance.userTimingJsPerformanceTimeline = !0, d = ["webkit", "moz"], f = ["getEntries", "getEntriesByName", "getEntriesByType"], l = 0; l < f.length; l++)
                    for (c = 0; c < d.length; c++) p = d[c] + f[l].substr(0, 1).toUpperCase() + f[l].substr(1), "function" == typeof t.performance[p] && (t.performance[f[l]] = t.performance[p], t.performance.userTimingJsPerformanceTimelinePrefixed = !0);
                h = function(e) {
                    g.push(e), "measure" === e.entryType && (T = !0)
                }, a = function() {
                    T && (g.sort((function(e, t) {
                        return e.startTime - t.startTime
                    })), T = !1)
                }, m = function(e, t) {
                    for (l = 0; l < g.length;) g[l].entryType !== e ? l++ : void 0 !== t && g[l].name !== t ? l++ : g.splice(l, 1)
                }, ("function" != typeof t.performance.getEntries || v) && (i = t.performance.getEntries, t.performance.getEntries = function() {
                    var e;
                    return a(), e = g.slice(0), v && i && (Array.prototype.push.apply(e, i.call(t.performance)), e.sort((function(e, t) {
                        return e.startTime - t.startTime
                    }))), e
                }), ("function" != typeof t.performance.getEntriesByType || v) && (o = t.performance.getEntriesByType, t.performance.getEntriesByType = function(e) {
                    var n;
                    if (void 0 === e || "mark" !== e && "measure" !== e) return v && o ? o.call(t.performance, e) : [];
                    for ("measure" === e && a(), n = [], l = 0; l < g.length; l++) g[l].entryType === e && n.push(g[l]);
                    return n
                }), ("function" != typeof t.performance.getEntriesByName || v) && (r = t.performance.getEntriesByName, t.performance.getEntriesByName = function(e, n) {
                    var i;
                    if (n && "mark" !== n && "measure" !== n) return v && r ? r.call(t.performance, e, n) : [];
                    for (void 0 !== n && "measure" === n && a(), i = [], l = 0; l < g.length; l++) void 0 !== n && g[l].entryType !== n || g[l].name === e && i.push(g[l]);
                    return v && r && (Array.prototype.push.apply(i, r.call(t.performance, e, n)), i.sort((function(e, t) {
                        return e.startTime - t.startTime
                    }))), i
                })
            }
            if ("function" != typeof t.performance.mark) {
                for (t.performance.userTimingJsUserTiming = !0, d = ["webkit", "moz", "ms"], f = ["mark", "measure", "clearMarks", "clearMeasures"], l = 0; l < f.length; l++)
                    for (c = 0; c < d.length; c++) p = d[c] + f[l].substr(0, 1).toUpperCase() + f[l].substr(1), "function" == typeof t.performance[p] && (t.performance[f[l]] = t.performance[p], t.performance.userTimingJsUserTimingPrefixed = !0);
                s = {}, t.performance.timing && t.performance.timing.responseEnd || (s.responseEnd = [u]), "function" != typeof t.performance.mark && (t.performance.mark = function(e) {
                    var n = t.performance.now();
                    if (void 0 === e) throw new SyntaxError("Mark name must be specified");
                    if (t.performance.timing && e in t.performance.timing) throw new SyntaxError("Mark name is not allowed");
                    s[e] || (s[e] = []), s[e].push(n), h({
                        entryType: "mark",
                        name: e,
                        startTime: n,
                        duration: 0
                    })
                }), "function" != typeof t.performance.clearMarks && (t.performance.clearMarks = function(e) {
                    e ? s[e] = [] : s = {}, m("mark", e)
                }), "function" != typeof t.performance.measure && (t.performance.measure = function(e, n, i) {
                    var r, o = t.performance.now(),
                        a = 0;
                    if (void 0 === e) throw new SyntaxError("Measure must be specified");
                    if (n) {
                        if (t.performance.timing && n in t.performance.timing) {
                            if ("navigationStart" !== n && 0 === t.performance.timing[n]) throw new Error(n + " has a timing of 0");
                            a = t.performance.timing[n] - t.performance.timing.navigationStart
                        } else {
                            if (!(n in s)) throw new Error(n + " mark not found");
                            a = s[n][s[n].length - 1]
                        }
                        if (r = o, i)
                            if (r = 0, t.performance.timing && i in t.performance.timing) {
                                if ("navigationStart" !== i && 0 === t.performance.timing[i]) throw new Error(i + " has a timing of 0");
                                r = t.performance.timing[i] - t.performance.timing.navigationStart
                            } else {
                                if (!(i in s)) throw new Error(i + " mark not found");
                                r = s[i][s[i].length - 1]
                            }
                        h({
                            entryType: "measure",
                            name: e,
                            startTime: a,
                            duration: r - a
                        })
                    } else h({
                        entryType: "measure",
                        name: e,
                        startTime: 0,
                        duration: o
                    })
                }), "function" != typeof t.performance.clearMeasures && (t.performance.clearMeasures = function(e) {
                    m("measure", e)
                })
            }
        }(window)
    }).call(this, n(2))
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var i = window.CNN || {};
    i.Features = i.Features || {}, i.PageParams = {},
        function(e) {
            "use strict";
            var t, r, o = jQuery(e),
                a = null;
            jQuery.noConflict(), i.pageVis = {
                hiddenEvent: "",
                hiddenKey: "",
                isDocumentHidden: function() {
                    return this.hiddenKey.length > 0 && !0 === e[this.hiddenKey]
                },
                isDocumentVisible: function() {
                    return this.hiddenKey.length > 0 && !1 === e[this.hiddenKey]
                }
            }, void 0 !== e.hidden ? (i.pageVis.hiddenKey = "hidden", i.pageVis.hiddenEvent = "visibilitychange") : void 0 !== e.mozHidden ? (i.pageVis.hiddenKey = "mozHidden", i.pageVis.hiddenEvent = "mozvisibilitychange") : void 0 !== e.msHidden ? (i.pageVis.hiddenKey = "msHidden", i.pageVis.hiddenEvent = "msvisibilitychange") : void 0 !== e.webkitHidden ? (i.pageVis.hiddenKey = "webkitHidden", i.pageVis.hiddenEvent = "webkitvisibilitychange") : (e.createEvent && (a || (a = e.createEvent("HTMLEvents")).initEvent("visibilitychange", !0, !0)), i.pageVis.hiddenKey = "hidden", i.pageVis.hiddenEvent = "visibilitychange", e.hidden = !1, o.on("focus", (function() {
                e.hidden && (e.hidden = !1, e.dispatchEvent(a))
            })), o.on("blur", (function() {
                e.hidden || (e.hidden = !0, e.dispatchEvent(a))
            }))), i._analyticsMetadataEvent = !1, i._analyticsReadyEvent = !1, i._articleLengthChange = !1, i._corePlayerReady = !1, i._onCarouselLoaded = !1, i._segmentReadyEvent = !1, i._videoContentStarted = !1, i._zonesRenderedEvent = !1, i._zonesAndDomReadyEvent = !1, i._zoneRenderedEvent = !1, jQuery.fn.extend({
                onAnalyticsMetadataReady: function(e) {
                    "function" == typeof e && (!0 === i._analyticsMetadataEvent ? e(jQuery) : jQuery(this).on("cnn-analytics-metadata-added", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onAnalyticsReady: function(e) {
                    "function" == typeof e && (!0 === i._analyticsReadyEvent ? e(jQuery) : jQuery(this).on("cnnAnalyticsReady", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onSegmentReady: function(e) {
                    "function" == typeof e && (!0 === i._segmentReadyEvent ? e(jQuery) : jQuery(this).on("cnnSegmentReady", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onVisibilityChange: function(e) {
                    "function" == typeof e && jQuery(this).on(i.pageVis.hiddenEvent, {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    }))
                },
                onZonesAndDomReady: function(e) {
                    "function" == typeof e && (!0 === i._zonesAndDomReadyEvent ? e(jQuery) : jQuery(this).on("allZonesAndDomReady", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onZonesRendered: function(e) {
                    "function" == typeof e && (!0 === i._zonesRenderedEvent ? e(jQuery) : jQuery(this).on("allZonesRenderComplete", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onZoneRendered: function(e) {
                    "function" == typeof e && (!0 === i._zoneRenderedEvent ? e(jQuery) : jQuery(this).on("zoneRenderComplete", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onArticleLengthChange: function(e) {
                    "function" == typeof e && (!0 === i._articleLengthChange ? e(jQuery) : jQuery(this).on("articleLengthChange", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onCorePlayerReady: function(e) {
                    "function" == typeof e && (!0 === i._corePlayerReady ? e(jQuery) : jQuery(this).on("corePlayerReady", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onVideoContentStarted: function(e) {
                    "function" == typeof e && (!0 === i._onVideoContentStarted ? e(jQuery) : jQuery(this).on("videoContentStarted", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                onCarouselLoaded: function(e) {
                    "function" == typeof e && (!0 === i._onCarouselLoaded ? e(jQuery) : jQuery(this).on("carouselLoaded", {
                        handler: e
                    }, (function(e) {
                        "object" === n((e = e || {}).data) && null !== e.data && "function" == typeof e.data.handler && e.data.handler(jQuery)
                    })))
                },
                triggerAnalyticsMetadataReady: function() {
                    i._analyticsMetadataEvent = !0, jQuery(this).trigger("cnn-analytics-metadata-added")
                },
                triggerAnalyticsReady: function() {
                    i._analyticsReadyEvent = !0, jQuery(this).trigger("cnnAnalyticsReady")
                },
                triggerArticleLengthChange: function() {
                    i._articleLengthChange = !0, o.trigger("articleLengthChange")
                },
                triggerCarouselLoaded: function() {
                    i._onCarouselLoaded = !0, o.trigger("carouselLoaded")
                },
                triggerCorePlayerReady: function() {
                    i._corePlayerReady = !0, o.trigger("corePlayerReady")
                },
                triggerSegmentReady: function() {
                    i._segmentEvent = !0, jQuery(this).trigger("cnnSegmentReady")
                },
                triggerVideoContentStarted: function() {
                    i._videoContentStarted = !0, o.trigger("videoContentStarted")
                },
                triggerZonesRendered: function() {
                    var t = jQuery(e);
                    i._zonesRenderedEvent = !0, t.trigger("allZonesRenderComplete"), t.ready((function() {
                        i._zonesAndDomReadyEvent = !0, jQuery(e).trigger("allZonesAndDomReady")
                    }))
                }
            }), !0 !== i.LazyLoad && o.ready((function() {
                jQuery(e).triggerZonesRendered()
            })), window.location.search && function() {
                var e, t, n = window.location.search.substr(1).split("&");
                for (t = 0; t < n.length; t++) {
                    e = n[t].indexOf("=");
                    try {
                        e > 0 ? i.PageParams[n[t].substr(0, e)] = decodeURIComponent(n[t].substr(e + 1).replace(/\+/g, " ")) : e < 0 && (i.PageParams[n[t]] = "")
                    } catch (e) {}
                }
            }(), !1 !== i.Features.enableRefreshTimers && ("object" === n(i.pageTimer) && "number" == typeof i.pageTimer.interval && i.pageTimer.interval > 0 || "object" === n(i.adTimers) && null !== i.adTimers || "object" === n(i.eventTimers) && null !== i.eventTimers) && (t = (new Date).getTime(), i.goActiveUntil = "number" == typeof i.goActiveUntil ? i.goActiveUntil : 0, i.refreshTimer = {
                adList: [],
                forceReset: 0,
                hiddenResetDelay: 0,
                hiddenResetThreshold: 0,
                hiddenTime: 0,
                intervals: {},
                intervalsCount: 0,
                intervalsId: null,
                intervalsVis: {},
                intervalsVisCount: 0,
                intervalsVisId: null,
                startTime: t,
                visibleTime: 0,
                visibleTimeAccrued: 0
            }, i.pageTimer && i.pageTimer.interval && (i.pageTimer.isPage = !0, !0 === i.pageTimer.isVisible ? (i.refreshTimer.intervalsVis[i.pageTimer.interval] = [i.pageTimer], i.refreshTimer.intervalsVisCount++, "number" == typeof i.pageTimer.resetThreshold && i.pageTimer.resetThreshold > 0 && (i.refreshTimer.hiddenResetThreshold = 6e4 * i.pageTimer.resetThreshold, i.refreshTimer.hiddenResetDelay = 6e4 * ("number" == typeof i.pageTimer.resetDelay ? i.pageTimer.resetDelay : 0))) : (i.refreshTimer.intervals[i.pageTimer.interval] = [i.pageTimer], i.refreshTimer.intervalsCount++)), r = function(e, t) {
                var n, r = i.refreshTimer;
                for (n in e)
                    if (e.hasOwnProperty(n) && e[n].interval) {
                        if ("ad" === t) e[n].className = ".ad-refresh-" + n;
                        else if ("string" != typeof e[n].eventName || e[n].eventName.length <= 0) continue;
                        !0 === e[n].isVisible ? void 0 !== r.intervalsVis[e[n].interval] && !0 === jQuery.isArray(r.intervalsVis[e[n].interval]) ? r.intervalsVis[e[n].interval].push(e[n]) : (r.intervalsVis[e[n].interval] = [e[n]], r.intervalsVisCount++) : void 0 !== r.intervals[e[n].interval] && !0 === jQuery.isArray(r.intervals[e[n].interval]) ? r.intervals[e[n].interval].push(e[n]) : (r.intervals[e[n].interval] = [e[n]], r.intervalsCount++)
                    }
            }, "object" === n(i.eventTimers) && null !== i.eventTimers && r(i.eventTimers, "event"), "object" === n(i.adTimers) && null !== i.adTimers && r(i.adTimers, "ad"), i.refreshTimer.triggerTimer = function(t) {
                var r, o, a;
                if ("string" == typeof t.eventName && t.eventName.length > 0 && jQuery(e).trigger(t.eventName), !0 !== t.isPage) {
                    if ("object" === ("undefined" == typeof AdFuel ? "undefined" : n(AdFuel)) && "function" == typeof AdFuel.refresh && "string" == typeof t.className && t.className.length > 0 && null !== (o = jQuery(t.className)) && o.length > 0)
                        for (r = 0; r < o.length; r++) "string" == typeof(a = o.eq(r).attr("id")) && a.length > 0 && i.refreshTimer.adList.push(a)
                } else window.location.href.search(/[\&\?]refresh\=/) >= 0 ? window.location.reload(!0) : (r = window.location.href.indexOf("#"), window.location.href.indexOf("?") >= 0 ? r >= 0 ? window.location.replace(window.location.href.substr(0, r) + "&refresh=1" + window.location.href.substr(r)) : window.location.replace(window.location.href + "&refresh=1") : r >= 0 ? window.location.replace(window.location.href.substr(0, r) + "?refresh=1" + window.location.href.substr(r)) : window.location.replace(window.location.href + "?refresh=1"))
            }, i.refreshTimer.intervalAction = function() {
                var e, t, n, r = i.refreshTimer,
                    o = (new Date).getTime(),
                    a = Math.floor((o - r.startTime + 1e4) / 6e4);
                if (a > 0) {
                    for (e in r.adList = [], r.intervals)
                        if (r.intervals.hasOwnProperty(e) && (t = parseInt(e, 10)) > 0 && a % t == 0 && void 0 !== r.intervals[e] && jQuery.isArray(r.intervals[e]))
                            for (n = 0; n < r.intervals[e].length; n++) r.triggerTimer(r.intervals[e][n]);
                    if (r.adList.length > 0) try {
                        AdFuel.refresh(r.adList)
                    } catch (e) {
                        console.log("Failed to refresh ads (" + r.adList.join(",") + "): ", e)
                    }
                }
            }, i.refreshTimer.intervalVisAction = function() {
                var e, t, n, r, o, a = i.refreshTimer,
                    s = (new Date).getTime();
                if (a.visibleTime > 0 && (e = s - a.visibleTime, a.visibleTimeAccrued += e, s >= i.goActiveUntil && a.forceReset > 0 && (a.forceReset -= e, a.forceReset <= 0 && a.triggerTimer(i.pageTimer)), a.visibleTime = s), i.pageVis.isDocumentHidden()) a.handleVisibilityChange();
                else if (n = Math.floor((a.visibleTimeAccrued + 1e4) / 6e4), a.intervalsVisId = setTimeout(a.intervalVisAction, 6e4 * (n + 1) - a.visibleTimeAccrued), n > 0) {
                    for (t in a.adList = [], a.intervalsVis)
                        if (a.intervalsVis.hasOwnProperty(t) && (r = parseInt(t, 10)) > 0 && n % r == 0 && void 0 !== a.intervalsVis[t] && jQuery.isArray(a.intervalsVis[t]))
                            for (o = 0; o < a.intervalsVis[t].length; o++)(!a.intervalsVis[t][o].isPage || s >= i.goActiveUntil) && a.triggerTimer(a.intervalsVis[t][o]);
                    if (a.adList.length > 0) try {
                        AdFuel.refresh(a.adList)
                    } catch (e) {
                        console.log("Failed to refresh ads (" + a.adList.join(",") + "): ", e)
                    }
                }
            }, i.refreshTimer.handleVisibilityChange = function() {
                var e, t, n = i.refreshTimer,
                    r = (new Date).getTime();
                i.pageVis.isDocumentHidden() ? null !== n.intervalsVisId && (clearTimeout(n.intervalsVisId), n.intervalsVisId = null, n.hiddenTime = r, n.visibleTime > 0 && (n.visibleTimeAccrued += r - n.visibleTime, n.visibleTime = 0)) : null === n.intervalsVisId && (t = 6e4 - n.visibleTimeAccrued % 6e4, n.visibleTime = r, n.hiddenResetThreshold > 0 && n.hiddenTime > 0 && i.goActiveUntil <= r && (e = r - n.hiddenTime, (n.forceReset > 0 || n.hiddenResetThreshold < e && n.hiddenResetDelay < 6e4 * (i.pageTimer.interval - 1) - n.visibleTimeAccrued) && (n.forceReset > 0 ? n.forceReset -= e : n.forceReset = n.hiddenResetDelay, n.forceReset <= 0 && n.triggerTimer(i.pageTimer))), n.hiddenTime = 0, n.intervalsVisId = setTimeout(n.intervalVisAction, t))
            }, i.refreshTimer.intervalsCount > 0 && (i.refreshTimer.intervalsId = setInterval(i.refreshTimer.intervalAction, 6e4)), i.refreshTimer.intervalsVisCount > 0 && (o.onVisibilityChange(i.refreshTimer.handleVisibilityChange), i.pageVis.isDocumentHidden() ? i.refreshTimer.hiddenTime = t : (i.refreshTimer.visibleTime = t, i.refreshTimer.intervalsVisId = setTimeout(i.refreshTimer.intervalVisAction, 6e4))))
        }(document)
}, function(e, t) {
    ! function(e) {
        "use strict";
        e.fn.throttleEvent = function(t, n, i, r) {
            var o = !0;
            "function" == typeof n && this.each((function() {
                var a = null;
                e(this).on(t, r, (function(e) {
                    var t = n.bind(this);
                    o && (t(e), o = !1), window.clearTimeout(a), a = window.setTimeout(t, i, e)
                }))
            }))
        }
    }(jQuery)
}, function(e, t) {
    Object.create || (Object.create = function() {
        "use strict";

        function e() {}
        return function(t) {
            if (1 !== arguments.length) throw new Error("Object.create implementation only accepts one parameter.");
            return e.prototype = t, new e
        }
    }())
}, function(e, t) {
    ! function(e) {
        "use strict";
        var t, n = function() {},
            i = [];
        e.console = e.console || {}, (t = e.console).log || (t.log = n), t.debug || (t.debug = t.log), t.error || (t.error = t.log), t.info || (t.info = t.log), t.warn || (t.warn = t.log), t.trace || (t.trace = n), t.group || (t.group = function(e) {
            "string" != typeof e && (e = Number(i.length + 1).toString()), i.push(e), t.log("---- START GROUP: " + e)
        }, t.groupCollapsed = t.group, t.groupEnd = function() {
            t.log("---- END GROUP: " + (i.length > 0 ? i.pop() : "???"))
        })
    }(window)
}, function(e, t) {
    Array.prototype.find || (Array.prototype.find = function(e) {
        "use strict";
        var t, n, i, r, o;
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof e) throw new TypeError("predicate must be a function");
        for (i = (n = Object(this)).length >>> 0, r = arguments[1], t = 0; t < i; t++)
            if (o = n[t], e.call(r, o, t, n)) return o
    })
}, function(e, t) {
    "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? function() {
        "use strict";
        var e, t, n = document.createElement("_");
        n.classList.add("c1", "c2"), n.classList.contains("c2") || ((t = function(e) {
            var t = DOMTokenList.prototype[e];
            DOMTokenList.prototype[e] = function(e) {
                var n, i = arguments.length;
                for (n = 0; n < i; n++) e = arguments[n], t.call(this, e)
            }
        })("add"), t("remove")), n.classList.toggle("c3", !1), n.classList.contains("c3") && (e = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function(t, n) {
            return 1 in arguments && !this.contains(t) == !n ? n : e.call(this, t)
        }), n = null
    }() : function(e) {
        "use strict";
        if ("Element" in e) {
            var t, n = e.Element.prototype,
                i = Object,
                r = String.prototype.trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                o = Array.prototype.indexOf || function(e) {
                    for (var t = 0, n = this.length; t < n; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                a = function(e, t) {
                    this.name = e, this.code = DOMException[e], this.message = t
                },
                s = function(e, t) {
                    if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return o.call(e, t)
                },
                l = function(e) {
                    for (var t = r.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, o = n.length; i < o; i++) this.push(n[i]);
                    this._updateClassName = function() {
                        e.setAttribute("class", this.toString())
                    }
                },
                c = l.prototype = [],
                u = function() {
                    return new l(this)
                };
            if (a.prototype = Error.prototype, c.item = function(e) {
                    return this[e] || null
                }, c.contains = function(e) {
                    return -1 !== s(this, e += "")
                }, c.add = function() {
                    var e, t = arguments,
                        n = 0,
                        i = t.length,
                        r = !1;
                    do {
                        e = t[n] + "", -1 === s(this, e) && (this.push(e), r = !0)
                    } while (++n < i);
                    r && this._updateClassName()
                }, c.remove = function() {
                    var e, t, n = arguments,
                        i = 0,
                        r = n.length,
                        o = !1;
                    do {
                        for (e = n[i] + "", t = s(this, e); - 1 !== t;) this.splice(t, 1), o = !0, t = s(this, e)
                    } while (++i < r);
                    o && this._updateClassName()
                }, c.toggle = function(e, t) {
                    e += "";
                    var n = this.contains(e),
                        i = n ? !0 !== t && "remove" : !1 !== t && "add";
                    return i && this[i](e), !0 === t || !1 === t ? t : !n
                }, c.toString = function() {
                    return this.join(" ")
                }, i.defineProperty) {
                t = {
                    get: u,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    i.defineProperty(n, "classList", t)
                } catch (e) {
                    -2146823252 === e.number && (t.enumerable = !1, i.defineProperty(n, "classList", t))
                }
            } else i.prototype.__defineGetter__ && n.__defineGetter__("classList", u)
        }
    }(self))
}, function(e, t) {
    ! function() {
        "use strict";
        var e = null;
        window.CNN = window.CNN || {}, window.CNN.eventListenerWithOptions = window.CNN.passiveEventListeners || {
            browserSupportsCaptureOption: !1,
            addListener: function(e, t, n, i) {
                var r = i;
                window.CNN.eventListenerWithOptions.browserSupportsCaptureOption || (r = i.capture || !1), e.addEventListener(t, n, r)
            }
        };
        try {
            e = Object.defineProperty({}, "capture", {
                get: function() {
                    window.CNN.eventListenerWithOptions.browserSupportsCaptureOption = !0
                }
            }), window.addEventListener("test", null, e)
        } catch (e) {}
    }()
}, function(e, t) {
    ! function() {
        "use strict";
        if ("function" == typeof window.CustomEvent && "function" == typeof window.Event) return !1;

        function e(e, t) {
            var n;
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        }
        e.prototype = window.Event.prototype, "function" != typeof window.CustomEvent && (window.CustomEvent = e), "function" != typeof window.Event && (window.Event = e)
    }()
}, function(e, t) {
    function n() {
        "use strict";
        var e, t = 0,
            n = ["mousewheel", "touchcancel", "touchdrag", "touchend", "touchstart"],
            i = null,
            r = !1,
            o = "";
        try {
            i = new Event("test"), i = Object.defineProperty({}, "passive", {
                get: function() {
                    r = !0
                }
            }), window.addEventListener ? (window.addEventListener("test", null, i), o = "addEventListener") : (window.attachEvent("test", null, i), o = "attachEvent")
        } catch (e) {}
        if (r)
            for (; t < n.length; t++) e = n[t], window[o](e, (function() {}), {
                passive: !0
            })
    }
    window.addEventListener ? window.addEventListener("load", n) : window.attachEvent("onload", n)
}, function(e, t, n) {
    (function(t) {
        e.exports = t.HcSticky = n(61)
    }).call(this, n(0))
}, function(e, t, n) {
    (function(e) {
        var n, i, r;

        function o(e) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * HC-Sticky
         * =========
         * Version: 2.1.3
         * Author: Some Web Media
         * Author URL: http://somewebmedia.com
         * Plugin URL: https://github.com/somewebmedia/hc-sticky
         * Description: Cross-browser plugin that makes any element on your page visible while you scroll
         * License: MIT
         */
        ! function(a, s) {
            "use strict";
            if ("object" == o(e) && "object" == o(e.exports)) {
                if (!a.document) throw new Error("HC-Sticky requires a browser to run.");
                e.exports = s(a)
            } else i = [], n = s(a), void 0 === (r = "function" == typeof n ? n.apply(t, i) : n) || (e.exports = r)
        }("undefined" != typeof window ? window : this, (function(e) {
            "use strict";
            var t = {
                    top: 0,
                    bottom: 0,
                    bottomEnd: 0,
                    innerTop: 0,
                    innerSticker: null,
                    stickyClass: "sticky",
                    stickTo: null,
                    followScroll: !0,
                    queries: null,
                    queryFlow: "down",
                    onStart: null,
                    onStop: null,
                    onBeforeResize: null,
                    onResize: null,
                    resizeDebounce: 100,
                    disable: !1
                },
                n = e.document,
                i = function i(r, a) {
                    if ("string" == typeof r && (r = n.querySelector(r)), !r) return !1;
                    var s = {},
                        l = i.Helpers,
                        c = r.parentNode;
                    "static" === l.getStyle(c, "position") && (c.style.position = "relative");
                    var u = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            l.isEmptyObject(e) && !l.isEmptyObject(s) || (s = Object.assign({}, t, s, e))
                        },
                        d = function() {
                            return s.disable
                        },
                        f = function() {
                            if (s.queries) {
                                var n = e.innerWidth,
                                    i = s.queryFlow,
                                    r = s.queries;
                                if (function(e) {
                                        s = Object.assign({}, t, e || {})
                                    }(a), "up" === i)
                                    for (var o in r) n >= o && !l.isEmptyObject(r[o]) && u(r[o]);
                                else {
                                    var c = [];
                                    for (var d in s.queries) {
                                        var f = {};
                                        f[d] = r[d], c.push(f)
                                    }
                                    for (var p = c.length - 1; p >= 0; p--) {
                                        var h = c[p],
                                            m = Object.keys(h)[0];
                                        n <= m && !l.isEmptyObject(h[m]) && u(h[m])
                                    }
                                }
                            }
                        },
                        p = {
                            css: {},
                            position: null,
                            stick: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                l.hasClass(r, s.stickyClass) || (!1 === h.isAttached && h.attach(), p.position = "fixed", r.style.position = "fixed", r.style.left = h.offsetLeft + "px", r.style.width = h.width, void 0 === e.bottom ? r.style.bottom = "auto" : r.style.bottom = e.bottom + "px", void 0 === e.top ? r.style.top = "auto" : r.style.top = e.top + "px", r.classList ? r.classList.add(s.stickyClass) : r.className += " " + s.stickyClass, s.onStart && s.onStart.call(r, s))
                            },
                            reset: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (e.disable = e.disable || !1, "fixed" === p.position || null === p.position || !(void 0 === e.top && void 0 === e.bottom || void 0 !== e.top && (parseInt(l.getStyle(r, "top")) || 0) === e.top || void 0 !== e.bottom && (parseInt(l.getStyle(r, "bottom")) || 0) === e.bottom)) {
                                    !0 === e.disable ? !0 === h.isAttached && h.detach() : !1 === h.isAttached && h.attach();
                                    var t = e.position || p.css.position;
                                    p.position = t, r.style.position = t, r.style.left = !0 === e.disable ? p.css.left : h.positionLeft + "px", r.style.width = "absolute" !== t ? p.css.width : h.width, void 0 === e.bottom ? r.style.bottom = !0 === e.disable ? "" : "auto" : r.style.bottom = e.bottom + "px", void 0 === e.top ? r.style.top = !0 === e.disable ? "" : "auto" : r.style.top = e.top + "px", r.classList ? r.classList.remove(s.stickyClass) : r.className = r.className.replace(new RegExp("(^|\\b)" + s.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), s.onStop && s.onStop.call(r, s)
                                }
                            }
                        },
                        h = {
                            el: n.createElement("div"),
                            offsetLeft: null,
                            positionLeft: null,
                            width: null,
                            isAttached: !1,
                            init: function() {
                                for (var e in p.css) h.el.style[e] = p.css[e];
                                var t = l.getStyle(r);
                                h.offsetLeft = l.offset(r).left - (parseInt(t.marginLeft) || 0), h.positionLeft = l.position(r).left, h.width = l.getStyle(r, "width")
                            },
                            attach: function() {
                                c.insertBefore(h.el, r.nextSibling), h.isAttached = !0
                            },
                            detach: function() {
                                h.el = c.removeChild(h.el), h.isAttached = !1
                            }
                        },
                        m = void 0,
                        g = void 0,
                        T = void 0,
                        v = void 0,
                        y = void 0,
                        b = void 0,
                        S = void 0,
                        w = void 0,
                        A = void 0,
                        C = void 0,
                        x = void 0,
                        E = void 0,
                        P = void 0,
                        M = void 0,
                        G = void 0,
                        N = void 0,
                        H = void 0,
                        k = void 0,
                        B = e.pageYOffset || n.documentElement.scrollTop,
                        D = 0,
                        I = void 0,
                        L = function() {
                            G = k(), v = H(), P = y + v - w - x, M = G > S;
                            var t = e.pageYOffset || n.documentElement.scrollTop,
                                i = Math.round(l.offset(r).top),
                                o = i - t,
                                a = void 0;
                            I = t < B ? "up" : "down", D = t - B, B = t, t > E ? P + w + (M ? A : 0) - (s.followScroll && M ? 0 : w) <= t + G - C - (G - C > S - (E - C) && s.followScroll && (a = G - S - C) > 0 ? a : 0) ? p.reset({
                                position: "absolute",
                                bottom: b + c.offsetHeight - P - w
                            }) : M && s.followScroll ? "down" === I ? o + G + A <= S ? p.stick({
                                bottom: A
                            }) : "fixed" === p.position && p.reset({
                                position: "absolute",
                                top: i - w - E - D + C
                            }) : o + C < 0 && "fixed" === p.position ? p.reset({
                                position: "absolute",
                                top: i - w - E + C - D
                            }) : i >= t + w - C && p.stick({
                                top: w - C
                            }) : p.stick({
                                top: w - C
                            }) : p.reset({
                                disable: !0
                            })
                        },
                        R = !1,
                        O = !1,
                        _ = function() {
                            R && (l.event.unbind(e, "scroll", L), R = !1)
                        },
                        j = function() {
                            p.css = function(e) {
                                var t = l.getCascadedStyle(e),
                                    n = l.getStyle(e),
                                    i = {
                                        height: e.offsetHeight + "px",
                                        left: t.left,
                                        right: t.right,
                                        top: t.top,
                                        bottom: t.bottom,
                                        position: n.position,
                                        display: n.display,
                                        verticalAlign: n.verticalAlign,
                                        boxSizing: n.boxSizing,
                                        marginLeft: t.marginLeft,
                                        marginRight: t.marginRight,
                                        marginTop: t.marginTop,
                                        marginBottom: t.marginBottom,
                                        paddingLeft: t.paddingLeft,
                                        paddingRight: t.paddingRight
                                    };
                                return t.float && (i.float = t.float || "none"), t.cssFloat && (i.cssFloat = t.cssFloat || "none"), n.MozBoxSizing && (i.MozBoxSizing = n.MozBoxSizing), i.width = "auto" !== t.width ? t.width : "border-box" === i.boxSizing || "border-box" === i.MozBoxSizing ? e.offsetWidth + "px" : n.width, i
                            }(r), h.init(), m = !(!s.stickTo || !("document" === s.stickTo || s.stickTo.nodeType && 9 === s.stickTo.nodeType || "object" == o(s.stickTo) && s.stickTo instanceof("undefined" != typeof HTMLDocument ? HTMLDocument : Document))), g = s.stickTo ? m ? n : "string" == typeof s.stickTo ? n.querySelector(s.stickTo) : s.stickTo : c, G = (k = function() {
                                var e = r.offsetHeight + (parseInt(p.css.marginTop) || 0) + (parseInt(p.css.marginBottom) || 0),
                                    t = (G || 0) - e;
                                return t >= -1 && t <= 1 ? G : e
                            })(), v = (H = function() {
                                return m ? Math.max(n.documentElement.clientHeight, n.body.scrollHeight, n.documentElement.scrollHeight, n.body.offsetHeight, n.documentElement.offsetHeight) : g.offsetHeight
                            })(), y = m ? 0 : l.offset(g).top, b = s.stickTo ? m ? 0 : l.offset(c).top : y, S = e.innerHeight, N = r.offsetTop - (parseInt(p.css.marginTop) || 0), T = s.innerSticker ? "string" == typeof s.innerSticker ? n.querySelector(s.innerSticker) : s.innerSticker : null, w = isNaN(s.top) && s.top.indexOf("%") > -1 ? parseFloat(s.top) / 100 * S : s.top, A = isNaN(s.bottom) && s.bottom.indexOf("%") > -1 ? parseFloat(s.bottom) / 100 * S : s.bottom, C = T ? T.offsetTop : s.innerTop ? s.innerTop : 0, x = isNaN(s.bottomEnd) && s.bottomEnd.indexOf("%") > -1 ? parseFloat(s.bottomEnd) / 100 * S : s.bottomEnd, E = y - w + C + N, G >= v ? _() : (L(), R || (l.event.bind(e, "scroll", L), R = !0))
                        },
                        F = function() {
                            r.style.position = "", r.style.left = "", r.style.top = "", r.style.bottom = "", r.style.width = "", r.classList ? r.classList.remove(s.stickyClass) : r.className = r.className.replace(new RegExp("(^|\\b)" + s.stickyClass.split(" ").join("|") + "(\\b|$)", "gi"), " "), p.css = {}, p.position = null, !0 === h.isAttached && h.detach()
                        },
                        V = function() {
                            F(), f(), d() ? _() : j()
                        },
                        U = function() {
                            s.onBeforeResize && s.onBeforeResize.call(r, s), V(), s.onResize && s.onResize.call(r, s)
                        },
                        z = s.resizeDebounce ? l.debounce(U, s.resizeDebounce) : U,
                        W = function() {
                            O && (l.event.unbind(e, "resize", z), O = !1), _()
                        },
                        q = function() {
                            O || (l.event.bind(e, "resize", z), O = !0), f(), d() ? _() : j()
                        };
                    this.options = function(e) {
                        return e ? s.option || null : Object.assign({}, s)
                    }, this.reinit = V, this.update = function(e) {
                        u(e), V()
                    }, this.attach = q, this.detach = W, this.destroy = function() {
                        W(), F()
                    }, u(a), q(), l.event.bind(e, "load", V)
                };
            if (void 0 !== e.jQuery) {
                var r = e.jQuery;
                r.fn.extend({
                    hcSticky: function(e) {
                        return this.length ? this.each((function() {
                            var t = r.data(this, "hcSticky");
                            t ? t.update(e) : (t = new i(this, e), r.data(this, "hcSticky", t))
                        })) : this
                    }
                })
            }
            return e.hcSticky = e.hcSticky || i, i
        })),
        function(e) {
            "use strict";
            var t = e.hcSticky,
                n = e.document;
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function(e, t) {
                    if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                    for (var n = Object(e), i = 1; i < arguments.length; i++) {
                        var r = arguments[i];
                        if (null != r)
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o])
                    }
                    return n
                },
                writable: !0,
                configurable: !0
            });
            var i = function() {
                    function t(t) {
                        var n = e.event;
                        return n.target = n.target || n.srcElement || t, n
                    }
                    var i = n.documentElement,
                        r = function() {};
                    i.addEventListener ? r = function(e, t, n) {
                        e.addEventListener(t, n, !1)
                    } : i.attachEvent && (r = function(e, n, i) {
                        e[n + i] = i.handleEvent ? function() {
                            var n = t(e);
                            i.handleEvent.call(i, n)
                        } : function() {
                            var n = t(e);
                            i.call(e, n)
                        }, e.attachEvent("on" + n, e[n + i])
                    });
                    var o = function() {};
                    return i.removeEventListener ? o = function(e, t, n) {
                        e.removeEventListener(t, n, !1)
                    } : i.detachEvent && (o = function(e, t, n) {
                        e.detachEvent("on" + t, e[t + n]);
                        try {
                            delete e[t + n]
                        } catch (i) {
                            e[t + n] = void 0
                        }
                    }), {
                        bind: r,
                        unbind: o
                    }
                }(),
                r = function(t, i) {
                    return e.getComputedStyle ? i ? n.defaultView.getComputedStyle(t, null).getPropertyValue(i) : n.defaultView.getComputedStyle(t, null) : t.currentStyle ? i ? t.currentStyle[i.replace(/-\w/g, (function(e) {
                        return e.toUpperCase().replace("-", "")
                    }))] : t.currentStyle : void 0
                },
                o = function(t) {
                    var i = t.getBoundingClientRect(),
                        r = e.pageYOffset || n.documentElement.scrollTop,
                        o = e.pageXOffset || n.documentElement.scrollLeft;
                    return {
                        top: i.top + r,
                        left: i.left + o
                    }
                };
            t.Helpers = {
                isEmptyObject: function(e) {
                    for (var t in e) return !1;
                    return !0
                },
                debounce: function(e, t, n) {
                    var i = void 0;
                    return function() {
                        var r = this,
                            o = arguments,
                            a = n && !i;
                        clearTimeout(i), i = setTimeout((function() {
                            i = null, n || e.apply(r, o)
                        }), t), a && e.apply(r, o)
                    }
                },
                hasClass: function(e, t) {
                    return e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className)
                },
                offset: o,
                position: function(e) {
                    var t = e.offsetParent,
                        n = o(t),
                        i = o(e),
                        a = r(t),
                        s = r(e);
                    return n.top += parseInt(a.borderTopWidth) || 0, n.left += parseInt(a.borderLeftWidth) || 0, {
                        top: i.top - n.top - (parseInt(s.marginTop) || 0),
                        left: i.left - n.left - (parseInt(s.marginLeft) || 0)
                    }
                },
                getStyle: r,
                getCascadedStyle: function(t) {
                    var i = t.cloneNode(!0);
                    i.style.display = "none", Array.prototype.slice.call(i.querySelectorAll('input[type="radio"]')).forEach((function(e) {
                        e.removeAttribute("name")
                    })), t.parentNode.insertBefore(i, t.nextSibling);
                    var r = void 0;
                    i.currentStyle ? r = i.currentStyle : e.getComputedStyle && (r = n.defaultView.getComputedStyle(i, null));
                    var o = {};
                    for (var a in r) !isNaN(a) || "string" != typeof r[a] && "number" != typeof r[a] || (o[a] = r[a]);
                    if (Object.keys(o).length < 3)
                        for (var s in o = {}, r) isNaN(s) || (o[r[s].replace(/-\w/g, (function(e) {
                            return e.toUpperCase().replace("-", "")
                        }))] = r.getPropertyValue(r[s]));
                    if (o.margin || "auto" !== o.marginLeft ? o.margin || o.marginLeft !== o.marginRight || o.marginLeft !== o.marginTop || o.marginLeft !== o.marginBottom || (o.margin = o.marginLeft) : o.margin = "auto", !o.margin && "0px" === o.marginLeft && "0px" === o.marginRight) {
                        var l = t.offsetLeft - t.parentNode.offsetLeft,
                            c = l - (parseInt(o.left) || 0) - (parseInt(o.right) || 0),
                            u = t.parentNode.offsetWidth - t.offsetWidth - l - (parseInt(o.right) || 0) + (parseInt(o.left) || 0) - c;
                        0 !== u && 1 !== u || (o.margin = "auto")
                    }
                    return i.parentNode.removeChild(i), i = null, o
                },
                event: i
            }
        }(window)
    }).call(this, n(1)(e))
}, function(e, t, n) {
    (function(t) {
        e.exports = t.Popper = n(63)
    }).call(this, n(0))
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            for (
                /**!
                 * @fileOverview Kickass library to create and place poppers near their reference elements.
                 * @version 1.15.0
                 * @license
                 * Copyright (c) 2016 Federico Zivolo and contributors
                 *
                 * Permission is hereby granted, free of charge, to any person obtaining a copy
                 * of this software and associated documentation files (the "Software"), to deal
                 * in the Software without restriction, including without limitation the rights
                 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                 * copies of the Software, and to permit persons to whom the Software is
                 * furnished to do so, subject to the following conditions:
                 *
                 * The above copyright notice and this permission notice shall be included in all
                 * copies or substantial portions of the Software.
                 *
                 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                 * SOFTWARE.
                 */
                var n = "undefined" != typeof window && "undefined" != typeof document, i = ["Edge", "Trident", "Firefox"], r = 0, o = 0; o < i.length; o += 1)
                if (n && navigator.userAgent.indexOf(i[o]) >= 0) {
                    r = 1;
                    break
                }
            var a = n && window.Promise ? function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, window.Promise.resolve().then((function() {
                        t = !1, e()
                    })))
                }
            } : function(e) {
                var t = !1;
                return function() {
                    t || (t = !0, setTimeout((function() {
                        t = !1, e()
                    }), r))
                }
            };

            function s(e) {
                return e && "[object Function]" === {}.toString.call(e)
            }

            function l(e, t) {
                if (1 !== e.nodeType) return [];
                var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                return t ? n[t] : n
            }

            function c(e) {
                return "HTML" === e.nodeName ? e : e.parentNode || e.host
            }

            function u(e) {
                if (!e) return document.body;
                switch (e.nodeName) {
                    case "HTML":
                    case "BODY":
                        return e.ownerDocument.body;
                    case "#document":
                        return e.body
                }
                var t = l(e),
                    n = t.overflow,
                    i = t.overflowX,
                    r = t.overflowY;
                return /(auto|scroll|overlay)/.test(n + r + i) ? e : u(c(e))
            }
            var d = n && !(!window.MSInputMethodContext || !document.documentMode),
                f = n && /MSIE 10/.test(navigator.userAgent);

            function p(e) {
                return 11 === e ? d : 10 === e ? f : d || f
            }

            function h(e) {
                if (!e) return document.documentElement;
                for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                var i = n && n.nodeName;
                return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === l(n, "position") ? h(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
            }

            function m(e) {
                return null !== e.parentNode ? m(e.parentNode) : e
            }

            function g(e, t) {
                if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                    i = n ? e : t,
                    r = n ? t : e,
                    o = document.createRange();
                o.setStart(i, 0), o.setEnd(r, 0);
                var a, s, l = o.commonAncestorContainer;
                if (e !== l && t !== l || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || "HTML" !== s && h(a.firstElementChild) !== a ? h(l) : l;
                var c = m(e);
                return c.host ? g(c.host, t) : g(e, m(t).host)
            }

            function T(e) {
                var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                    n = e.nodeName;
                if ("BODY" === n || "HTML" === n) {
                    var i = e.ownerDocument.documentElement;
                    return (e.ownerDocument.scrollingElement || i)[t]
                }
                return e[t]
            }

            function v(e, t) {
                var n = "x" === t ? "Left" : "Top",
                    i = "Left" === n ? "Right" : "Bottom";
                return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
            }

            function y(e, t, n, i) {
                return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
            }

            function b(e) {
                var t = e.body,
                    n = e.documentElement,
                    i = p(10) && getComputedStyle(n);
                return {
                    height: y("Height", t, n, i),
                    width: y("Width", t, n, i)
                }
            }
            var S = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                },
                w = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                A = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                },
                C = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                };

            function x(e) {
                return C({}, e, {
                    right: e.left + e.width,
                    bottom: e.top + e.height
                })
            }

            function E(e) {
                var t = {};
                try {
                    if (p(10)) {
                        t = e.getBoundingClientRect();
                        var n = T(e, "top"),
                            i = T(e, "left");
                        t.top += n, t.left += i, t.bottom += n, t.right += i
                    } else t = e.getBoundingClientRect()
                } catch (e) {}
                var r = {
                        left: t.left,
                        top: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    },
                    o = "HTML" === e.nodeName ? b(e.ownerDocument) : {},
                    a = o.width || e.clientWidth || r.right - r.left,
                    s = o.height || e.clientHeight || r.bottom - r.top,
                    c = e.offsetWidth - a,
                    u = e.offsetHeight - s;
                if (c || u) {
                    var d = l(e);
                    c -= v(d, "x"), u -= v(d, "y"), r.width -= c, r.height -= u
                }
                return x(r)
            }

            function P(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = p(10),
                    r = "HTML" === t.nodeName,
                    o = E(e),
                    a = E(t),
                    s = u(e),
                    c = l(t),
                    d = parseFloat(c.borderTopWidth, 10),
                    f = parseFloat(c.borderLeftWidth, 10);
                n && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
                var h = x({
                    top: o.top - a.top - d,
                    left: o.left - a.left - f,
                    width: o.width,
                    height: o.height
                });
                if (h.marginTop = 0, h.marginLeft = 0, !i && r) {
                    var m = parseFloat(c.marginTop, 10),
                        g = parseFloat(c.marginLeft, 10);
                    h.top -= d - m, h.bottom -= d - m, h.left -= f - g, h.right -= f - g, h.marginTop = m, h.marginLeft = g
                }
                return (i && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) && (h = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = T(t, "top"),
                        r = T(t, "left"),
                        o = n ? -1 : 1;
                    return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
                }(h, t)), h
            }

            function M(e) {
                if (!e || !e.parentElement || p()) return document.documentElement;
                for (var t = e.parentElement; t && "none" === l(t, "transform");) t = t.parentElement;
                return t || document.documentElement
            }

            function G(e, t, n, i) {
                var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    o = {
                        top: 0,
                        left: 0
                    },
                    a = r ? M(e) : g(e, t);
                if ("viewport" === i) o = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = P(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        a = t ? 0 : T(n),
                        s = t ? 0 : T(n, "left");
                    return x({
                        top: a - i.top + i.marginTop,
                        left: s - i.left + i.marginLeft,
                        width: r,
                        height: o
                    })
                }(a, r);
                else {
                    var s = void 0;
                    "scrollParent" === i ? "BODY" === (s = u(c(t))).nodeName && (s = e.ownerDocument.documentElement) : s = "window" === i ? e.ownerDocument.documentElement : i;
                    var d = P(s, a, r);
                    if ("HTML" !== s.nodeName || function e(t) {
                            var n = t.nodeName;
                            if ("BODY" === n || "HTML" === n) return !1;
                            if ("fixed" === l(t, "position")) return !0;
                            var i = c(t);
                            return !!i && e(i)
                        }(a)) o = d;
                    else {
                        var f = b(e.ownerDocument),
                            p = f.height,
                            h = f.width;
                        o.top += d.top - d.marginTop, o.bottom = p + d.top, o.left += d.left - d.marginLeft, o.right = h + d.left
                    }
                }
                var m = "number" == typeof(n = n || 0);
                return o.left += m ? n : n.left || 0, o.top += m ? n : n.top || 0, o.right -= m ? n : n.right || 0, o.bottom -= m ? n : n.bottom || 0, o
            }

            function N(e, t, n, i, r) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                if (-1 === e.indexOf("auto")) return e;
                var a = G(n, i, o, r),
                    s = {
                        top: {
                            width: a.width,
                            height: t.top - a.top
                        },
                        right: {
                            width: a.right - t.right,
                            height: a.height
                        },
                        bottom: {
                            width: a.width,
                            height: a.bottom - t.bottom
                        },
                        left: {
                            width: t.left - a.left,
                            height: a.height
                        }
                    },
                    l = Object.keys(s).map((function(e) {
                        return C({
                            key: e
                        }, s[e], {
                            area: (t = s[e], t.width * t.height)
                        });
                        var t
                    })).sort((function(e, t) {
                        return t.area - e.area
                    })),
                    c = l.filter((function(e) {
                        var t = e.width,
                            i = e.height;
                        return t >= n.clientWidth && i >= n.clientHeight
                    })),
                    u = c.length > 0 ? c[0].key : l[0].key,
                    d = e.split("-")[1];
                return u + (d ? "-" + d : "")
            }

            function H(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return P(n, i ? M(t) : g(t, n), i)
            }

            function k(e) {
                var t = e.ownerDocument.defaultView.getComputedStyle(e),
                    n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                    i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                return {
                    width: e.offsetWidth + i,
                    height: e.offsetHeight + n
                }
            }

            function B(e) {
                var t = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return t[e]
                }))
            }

            function D(e, t, n) {
                n = n.split("-")[0];
                var i = k(e),
                    r = {
                        width: i.width,
                        height: i.height
                    },
                    o = -1 !== ["right", "left"].indexOf(n),
                    a = o ? "top" : "left",
                    s = o ? "left" : "top",
                    l = o ? "height" : "width",
                    c = o ? "width" : "height";
                return r[a] = t[a] + t[l] / 2 - i[l] / 2, r[s] = n === s ? t[s] - i[c] : t[B(s)], r
            }

            function I(e, t) {
                return Array.prototype.find ? e.find(t) : e.filter(t)[0]
            }

            function L(e, t, n) {
                return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                    if (Array.prototype.findIndex) return e.findIndex((function(e) {
                        return e[t] === n
                    }));
                    var i = I(e, (function(e) {
                        return e[t] === n
                    }));
                    return e.indexOf(i)
                }(e, "name", n))).forEach((function(e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && s(n) && (t.offsets.popper = x(t.offsets.popper), t.offsets.reference = x(t.offsets.reference), t = n(t, e))
                })), t
            }

            function R() {
                if (!this.state.isDestroyed) {
                    var e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    };
                    e.offsets.reference = H(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = N(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = D(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = L(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                }
            }

            function O(e, t) {
                return e.some((function(e) {
                    var n = e.name;
                    return e.enabled && n === t
                }))
            }

            function _(e) {
                for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                    var r = t[i],
                        o = r ? "" + r + n : e;
                    if (void 0 !== document.body.style[o]) return o
                }
                return null
            }

            function j() {
                return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[_("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
            }

            function F(e) {
                var t = e.ownerDocument;
                return t ? t.defaultView : window
            }

            function V(e, t, n, i) {
                n.updateBound = i, F(e).addEventListener("resize", n.updateBound, {
                    passive: !0
                });
                var r = u(e);
                return function e(t, n, i, r) {
                    var o = "BODY" === t.nodeName,
                        a = o ? t.ownerDocument.defaultView : t;
                    a.addEventListener(n, i, {
                        passive: !0
                    }), o || e(u(a.parentNode), n, i, r), r.push(a)
                }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
            }

            function U() {
                this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate))
            }

            function z() {
                var e, t;
                this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, F(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                    e.removeEventListener("scroll", t.updateBound)
                })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
            }

            function W(e) {
                return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
            }

            function q(e, t) {
                Object.keys(t).forEach((function(n) {
                    var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && W(t[n]) && (i = "px"), e.style[n] = t[n] + i
                }))
            }
            var X = n && /Firefox/i.test(navigator.userAgent);

            function K(e, t, n) {
                var i = I(e, (function(e) {
                        return e.name === t
                    })),
                    r = !!i && e.some((function(e) {
                        return e.name === n && e.enabled && e.order < i.order
                    }));
                if (!r) {
                    var o = "`" + t + "`",
                        a = "`" + n + "`";
                    console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                }
                return r
            }
            var Q = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                J = Q.slice(3);

            function $(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = J.indexOf(e),
                    i = J.slice(n + 1).concat(J.slice(0, n));
                return t ? i.reverse() : i
            }
            var Z = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            };

            function Y(e, t, n, i) {
                var r = [0, 0],
                    o = -1 !== ["right", "left"].indexOf(i),
                    a = e.split(/(\+|\-)/).map((function(e) {
                        return e.trim()
                    })),
                    s = a.indexOf(I(a, (function(e) {
                        return -1 !== e.search(/,|\s/)
                    })));
                a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                var l = /\s*,\s*|\s+/,
                    c = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                return (c = c.map((function(e, i) {
                    var r = (1 === i ? !o : o) ? "height" : "width",
                        a = !1;
                    return e.reduce((function(e, t) {
                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                    }), []).map((function(e) {
                        return function(e, t, n, i) {
                            var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                o = +r[1],
                                a = r[2];
                            if (!o) return e;
                            if (0 === a.indexOf("%")) {
                                var s = void 0;
                                switch (a) {
                                    case "%p":
                                        s = n;
                                        break;
                                    case "%":
                                    case "%r":
                                    default:
                                        s = i
                                }
                                return x(s)[t] / 100 * o
                            }
                            if ("vh" === a || "vw" === a) {
                                return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                            }
                            return o
                        }(e, r, t, n)
                    }))
                }))).forEach((function(e, t) {
                    e.forEach((function(n, i) {
                        W(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                    }))
                })), r
            }
            var ee = {
                    placement: "bottom",
                    positionFixed: !1,
                    eventsEnabled: !0,
                    removeOnDestroy: !1,
                    onCreate: function() {},
                    onUpdate: function() {},
                    modifiers: {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var r = e.offsets,
                                        o = r.reference,
                                        a = r.popper,
                                        s = -1 !== ["bottom", "top"].indexOf(n),
                                        l = s ? "left" : "top",
                                        c = s ? "width" : "height",
                                        u = {
                                            start: A({}, l, o[l]),
                                            end: A({}, l, o[l] + o[c] - a[c])
                                        };
                                    e.offsets.popper = C({}, a, u[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    r = e.offsets,
                                    o = r.popper,
                                    a = r.reference,
                                    s = i.split("-")[0],
                                    l = void 0;
                                return l = W(+n) ? [+n, 0] : Y(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.boundariesElement || h(e.instance.popper);
                                e.instance.reference === n && (n = h(n));
                                var i = _("transform"),
                                    r = e.instance.popper.style,
                                    o = r.top,
                                    a = r.left,
                                    s = r[i];
                                r.top = "", r.left = "", r[i] = "";
                                var l = G(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                r.top = o, r.left = a, r[i] = s, t.boundaries = l;
                                var c = t.priority,
                                    u = e.offsets.popper,
                                    d = {
                                        primary: function(e) {
                                            var n = u[e];
                                            return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), A({}, e, n)
                                        },
                                        secondary: function(e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = u[n];
                                            return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), A({}, n, i)
                                        }
                                    };
                                return c.forEach((function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    u = C({}, u, d[t](e))
                                })), e.offsets.popper = u, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    r = e.placement.split("-")[0],
                                    o = Math.floor,
                                    a = -1 !== ["top", "bottom"].indexOf(r),
                                    s = a ? "right" : "bottom",
                                    l = a ? "left" : "top",
                                    c = a ? "width" : "height";
                                return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[c]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var r = e.placement.split("-")[0],
                                    o = e.offsets,
                                    a = o.popper,
                                    s = o.reference,
                                    c = -1 !== ["left", "right"].indexOf(r),
                                    u = c ? "height" : "width",
                                    d = c ? "Top" : "Left",
                                    f = d.toLowerCase(),
                                    p = c ? "left" : "top",
                                    h = c ? "bottom" : "right",
                                    m = k(i)[u];
                                s[h] - m < a[f] && (e.offsets.popper[f] -= a[f] - (s[h] - m)), s[f] + m > a[h] && (e.offsets.popper[f] += s[f] + m - a[h]), e.offsets.popper = x(e.offsets.popper);
                                var g = s[f] + s[u] / 2 - m / 2,
                                    T = l(e.instance.popper),
                                    v = parseFloat(T["margin" + d], 10),
                                    y = parseFloat(T["border" + d + "Width"], 10),
                                    b = g - e.offsets.popper[f] - v - y;
                                return b = Math.max(Math.min(a[u] - m, b), 0), e.arrowElement = i, e.offsets.arrow = (A(n = {}, f, Math.round(b)), A(n, p, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(e, t) {
                                if (O(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = G(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    r = B(i),
                                    o = e.placement.split("-")[1] || "",
                                    a = [];
                                switch (t.behavior) {
                                    case Z.FLIP:
                                        a = [i, r];
                                        break;
                                    case Z.CLOCKWISE:
                                        a = $(i);
                                        break;
                                    case Z.COUNTERCLOCKWISE:
                                        a = $(i, !0);
                                        break;
                                    default:
                                        a = t.behavior
                                }
                                return a.forEach((function(s, l) {
                                    if (i !== s || a.length === l + 1) return e;
                                    i = e.placement.split("-")[0], r = B(i);
                                    var c = e.offsets.popper,
                                        u = e.offsets.reference,
                                        d = Math.floor,
                                        f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                                        p = d(c.left) < d(n.left),
                                        h = d(c.right) > d(n.right),
                                        m = d(c.top) < d(n.top),
                                        g = d(c.bottom) > d(n.bottom),
                                        T = "left" === i && p || "right" === i && h || "top" === i && m || "bottom" === i && g,
                                        v = -1 !== ["top", "bottom"].indexOf(i),
                                        y = !!t.flipVariations && (v && "start" === o && p || v && "end" === o && h || !v && "start" === o && m || !v && "end" === o && g),
                                        b = !!t.flipVariationsByContent && (v && "start" === o && h || v && "end" === o && p || !v && "start" === o && g || !v && "end" === o && m),
                                        S = y || b;
                                    (f || T || S) && (e.flipped = !0, (f || T) && (i = a[l + 1]), S && (o = function(e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = C({}, e.offsets.popper, D(e.instance.popper, e.offsets.reference, e.placement)), e = L(e.instance.modifiers, e, "flip"))
                                })), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    r = i.popper,
                                    o = i.reference,
                                    a = -1 !== ["left", "right"].indexOf(n),
                                    s = -1 === ["top", "left"].indexOf(n);
                                return r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0), e.placement = B(t), e.offsets.popper = x(r), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = I(e.instance.modifiers, (function(e) {
                                        return "preventOverflow" === e.name
                                    })).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    i = t.y,
                                    r = e.offsets.popper,
                                    o = I(e.instance.modifiers, (function(e) {
                                        return "applyStyle" === e.name
                                    })).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var a = void 0 !== o ? o : t.gpuAcceleration,
                                    s = h(e.instance.popper),
                                    l = E(s),
                                    c = {
                                        position: r.position
                                    },
                                    u = function(e, t) {
                                        var n = e.offsets,
                                            i = n.popper,
                                            r = n.reference,
                                            o = Math.round,
                                            a = Math.floor,
                                            s = function(e) {
                                                return e
                                            },
                                            l = o(r.width),
                                            c = o(i.width),
                                            u = -1 !== ["left", "right"].indexOf(e.placement),
                                            d = -1 !== e.placement.indexOf("-"),
                                            f = t ? u || d || l % 2 == c % 2 ? o : a : s,
                                            p = t ? o : s;
                                        return {
                                            left: f(l % 2 == 1 && c % 2 == 1 && !d && t ? i.left - 1 : i.left),
                                            top: p(i.top),
                                            bottom: p(i.bottom),
                                            right: f(i.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !X),
                                    d = "bottom" === n ? "top" : "bottom",
                                    f = "right" === i ? "left" : "right",
                                    p = _("transform"),
                                    m = void 0,
                                    g = void 0;
                                if (g = "bottom" === d ? "HTML" === s.nodeName ? -s.clientHeight + u.bottom : -l.height + u.bottom : u.top, m = "right" === f ? "HTML" === s.nodeName ? -s.clientWidth + u.right : -l.width + u.right : u.left, a && p) c[p] = "translate3d(" + m + "px, " + g + "px, 0)", c[d] = 0, c[f] = 0, c.willChange = "transform";
                                else {
                                    var T = "bottom" === d ? -1 : 1,
                                        v = "right" === f ? -1 : 1;
                                    c[d] = g * T, c[f] = m * v, c.willChange = d + ", " + f
                                }
                                var y = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = C({}, y, e.attributes), e.styles = C({}, c, e.styles), e.arrowStyles = C({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                var t, n;
                                return q(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                })), e.arrowElement && Object.keys(e.arrowStyles).length && q(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, n, i, r) {
                                var o = H(r, t, e, n.positionFixed),
                                    a = N(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", a), q(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    }
                },
                te = function() {
                    function e(t, n) {
                        var i = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        S(this, e), this.scheduleUpdate = function() {
                            return requestAnimationFrame(i.update)
                        }, this.update = a(this.update.bind(this)), this.options = C({}, e.Defaults, r), this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(C({}, e.Defaults.modifiers, r.modifiers)).forEach((function(t) {
                            i.options.modifiers[t] = C({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                        })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                            return C({
                                name: e
                            }, i.options.modifiers[e])
                        })).sort((function(e, t) {
                            return e.order - t.order
                        })), this.modifiers.forEach((function(e) {
                            e.enabled && s(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                        })), this.update();
                        var o = this.options.eventsEnabled;
                        o && this.enableEventListeners(), this.state.eventsEnabled = o
                    }
                    return w(e, [{
                        key: "update",
                        value: function() {
                            return R.call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            return j.call(this)
                        }
                    }, {
                        key: "enableEventListeners",
                        value: function() {
                            return U.call(this)
                        }
                    }, {
                        key: "disableEventListeners",
                        value: function() {
                            return z.call(this)
                        }
                    }]), e
                }();
            te.Utils = ("undefined" != typeof window ? window : e).PopperUtils, te.placements = Q, te.Defaults = ee, t.default = te
        }.call(this, n(0))
}, function(e, t, n) {
    (function(e) {
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * modernizr v3.6.0
         * Build https://modernizr.com/download?-csscolumns-csstransforms3d-flash-flexbox-fontface-geolocation-localstorage-textshadow-touchevents-websockets-webworkers-addtest-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin
         *
         * Copyright (c)
         *  Faruk Ates
         *  Paul Irish
         *  Alex Sexton
         *  Ryan Seddon
         *  Patrick Kettner
         *  Stu Cox
         *  Richard Herrera

         * MIT License
         */
        ! function(n, i, r) {
            var o = [],
                a = [],
                s = {
                    _version: "3.6.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout((function() {
                            t(n[e])
                        }), 0)
                    },
                    addTest: function(e, t, n) {
                        a.push({
                            name: e,
                            fn: t,
                            options: n
                        })
                    },
                    addAsyncTest: function(e) {
                        a.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                l = function() {};

            function c(e, n) {
                return t(e) === n
            }
            l.prototype = s, l = new l;
            var u = i.documentElement,
                d = "svg" === u.nodeName.toLowerCase();

            function f(e) {
                var t = u.className,
                    n = l._config.classPrefix || "";
                if (d && (t = t.baseVal), l._config.enableJSClass) {
                    var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                    t = t.replace(i, "$1" + n + "js$2")
                }
                l._config.enableClasses && (t += " " + n + e.join(" " + n), d ? u.className.baseVal = t : u.className = t)
            }
            var p = s._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            s._prefixes = p, d || function(n, i) {
                    var r, o, a = n.html5 || {},
                        s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                        l = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                        c = "_html5shiv",
                        u = 0,
                        d = {};

                    function f() {
                        var e = g.elements;
                        return "string" == typeof e ? e.split(" ") : e
                    }

                    function p(e) {
                        var t = d[e[c]];
                        return t || (t = {}, u++, e[c] = u, d[u] = t), t
                    }

                    function h(e, t, n) {
                        return t || (t = i), o ? t.createElement(e) : (n || (n = p(t)), !(r = n.cache[e] ? n.cache[e].cloneNode() : l.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e)).canHaveChildren || s.test(e) || r.tagUrn ? r : n.frag.appendChild(r));
                        var r
                    }

                    function m(e) {
                        e || (e = i);
                        var t = p(e);
                        return !g.shivCSS || r || t.hasCSS || (t.hasCSS = !! function(e, t) {
                            var n = e.createElement("p"),
                                i = e.getElementsByTagName("head")[0] || e.documentElement;
                            return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                        }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), o || function(e, t) {
                            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                                return g.shivMethods ? h(n, e, t) : t.createElem(n)
                            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + f().join().replace(/[\w\-:]+/g, (function(e) {
                                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                            })) + ");return n}")(g, t.frag)
                        }(e, t), e
                    }! function() {
                        try {
                            var e = i.createElement("a");
                            e.innerHTML = "<xyz></xyz>", r = "hidden" in e, o = 1 == e.childNodes.length || function() {
                                i.createElement("a");
                                var e = i.createDocumentFragment();
                                return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                            }()
                        } catch (e) {
                            r = !0, o = !0
                        }
                    }();
                    var g = {
                        elements: a.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
                        version: "3.7.3",
                        shivCSS: !1 !== a.shivCSS,
                        supportsUnknownElements: o,
                        shivMethods: !1 !== a.shivMethods,
                        type: "default",
                        shivDocument: m,
                        createElement: h,
                        createDocumentFragment: function(e, t) {
                            if (e || (e = i), o) return e.createDocumentFragment();
                            for (var n = (t = t || p(e)).frag.cloneNode(), r = 0, a = f(), s = a.length; r < s; r++) n.createElement(a[r]);
                            return n
                        },
                        addElements: function(e, t) {
                            var n = g.elements;
                            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), g.elements = n + " " + e, m(t)
                        }
                    };
                    n.html5 = g, m(i), "object" == t(e) && e.exports && (e.exports = g)
                }(void 0 !== n ? n : this, i),
                /*!
                  {
                    "name": "Geolocation API",
                    "property": "geolocation",
                    "caniuse": "geolocation",
                    "tags": ["media"],
                    "notes": [{
                      "name": "MDN documentation",
                      "href": "https://developer.mozilla.org/en-US/docs/WebAPI/Using_geolocation"
                    }],
                    "polyfills": [
                      "joshuabell-polyfill",
                      "webshims",
                      "geo-location-javascript",
                      "geolocation-api-polyfill"
                    ]
                  }
                  !*/
                l.addTest("geolocation", "geolocation" in navigator);
            /*!
              {
                "name": "WebSockets Support",
                "property": "websockets",
                "authors": ["Phread [fearphage]", "Mike Sherov [mikesherov]", "Burak Yigit Kaya [BYK]"],
                "caniuse": "websockets",
                "tags": ["html5"],
                "warnings": [
                  "This test will reject any old version of WebSockets even if it is not prefixed such as in Safari 5.1"
                ],
                "notes": [{
                  "name": "CLOSING State and Spec",
                  "href": "https://www.w3.org/TR/websockets/#the-websocket-interface"
                }],
                "polyfills": [
                  "sockjs",
                  "socketio",
                  "kaazing-websocket-gateway",
                  "websocketjs",
                  "atmosphere",
                  "graceful-websocket",
                  "portal",
                  "datachannel"
                ]
              }
              !*/
            var h = !1;
            try {
                h = "WebSocket" in n && 2 === n.WebSocket.CLOSING
            } catch (e) {}

            function m() {
                return "function" != typeof i.createElement ? i.createElement(arguments[0]) : d ? i.createElementNS.call(i, "http://www.w3.org/2000/svg", arguments[0]) : i.createElement.apply(i, arguments)
            }
            l.addTest("websockets", h),
                /*!
                  {
                    "name": "Local Storage",
                    "property": "localstorage",
                    "caniuse": "namevalue-storage",
                    "tags": ["storage"],
                    "knownBugs": [],
                    "notes": [],
                    "warnings": [],
                    "polyfills": [
                      "joshuabell-polyfill",
                      "cupcake",
                      "storagepolyfill",
                      "amplifyjs",
                      "yui-cacheoffline"
                    ]
                  }
                  !*/
                l.addTest("localstorage", (function() {
                    var e = "modernizr";
                    try {
                        return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                    } catch (e) {
                        return !1
                    }
                })),
                /*!
                  {
                    "name": "Web Workers",
                    "property": "webworkers",
                    "caniuse" : "webworkers",
                    "tags": ["performance", "workers"],
                    "notes": [{
                      "name": "W3C Reference",
                      "href": "https://www.w3.org/TR/workers/"
                    }, {
                      "name": "HTML5 Rocks article",
                      "href": "http://www.html5rocks.com/en/tutorials/workers/basics/"
                    }, {
                      "name": "MDN documentation",
                      "href": "https://developer.mozilla.org/en-US/docs/Web/Guide/Performance/Using_web_workers"
                    }],
                    "polyfills": ["fakeworker", "html5shims"]
                  }
                  !*/
                l.addTest("webworkers", "Worker" in n);
            var g, T, v = s._config.usePrefixes ? "Moz O ms Webkit".toLowerCase().split(" ") : [];

            function y(e, n) {
                if ("object" == t(e))
                    for (var i in e) g(e, i) && y(i, e[i]);
                else {
                    var r = (e = e.toLowerCase()).split("."),
                        o = l[r[0]];
                    if (2 == r.length && (o = o[r[1]]), void 0 !== o) return l;
                    n = "function" == typeof n ? n() : n, 1 == r.length ? l[r[0]] = n : (!l[r[0]] || l[r[0]] instanceof Boolean || (l[r[0]] = new Boolean(l[r[0]])), l[r[0]][r[1]] = n), f([(n && 0 != n ? "" : "no-") + r.join("-")]), l._trigger(e, n)
                }
                return l
            }

            function b() {
                var e = i.body;
                return e || ((e = m(d ? "svg" : "body")).fake = !0), e
            }

            function S(e, t, n, r) {
                var o, a, s, l, c = "modernizr",
                    d = m("div"),
                    f = b();
                if (parseInt(n, 10))
                    for (; n--;)(s = m("div")).id = r ? r[n] : c + (n + 1), d.appendChild(s);
                return (o = m("style")).type = "text/css", o.id = "s" + c, (f.fake ? f : d).appendChild(o), f.appendChild(d), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(i.createTextNode(e)), d.id = c, f.fake && (f.style.background = "", f.style.overflow = "hidden", l = u.style.overflow, u.style.overflow = "hidden", u.appendChild(f)), a = t(d, e), f.fake ? (f.parentNode.removeChild(f), u.style.overflow = l, u.offsetHeight) : d.parentNode.removeChild(d), !!a
            }
            s._domPrefixes = v, g = c(T = {}.hasOwnProperty, "undefined") || c(T.call, "undefined") ? function(e, t) {
                    return t in e && c(e.constructor.prototype[t], "undefined")
                } : function(e, t) {
                    return T.call(e, t)
                }, s._l = {}, s.on = function(e, t) {
                    this._l[e] || (this._l[e] = []), this._l[e].push(t), l.hasOwnProperty(e) && setTimeout((function() {
                        l._trigger(e, l[e])
                    }), 0)
                }, s._trigger = function(e, t) {
                    if (this._l[e]) {
                        var n = this._l[e];
                        setTimeout((function() {
                            var e;
                            for (e = 0; e < n.length; e++)(0, n[e])(t)
                        }), 0), delete this._l[e]
                    }
                }, l._q.push((function() {
                    s.addTest = y
                })),
                /*!
                    {
                    "name": "Flash",
                    "property": "flash",
                    "tags": ["flash"],
                    "polyfills": ["shumway"]
                    }
                    !*/
                l.addAsyncTest((function() {
                    var e, t = function(e) {
                            u.contains(e) || u.appendChild(e)
                        },
                        r = function(e) {
                            e.fake && e.parentNode && e.parentNode.removeChild(e)
                        },
                        o = function(e, t) {
                            var n = !!e;
                            if (n && ((n = new Boolean(n)).blocked = "blocked" === e), y("flash", (function() {
                                    return n
                                })), t && c.contains(t)) {
                                for (; t.parentNode !== c;) t = t.parentNode;
                                c.removeChild(t)
                            }
                        };
                    try {
                        e = "ActiveXObject" in n && "Pan" in new n.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                    if (!("plugins" in navigator && "Shockwave Flash" in navigator.plugins || e) || d) o(!1);
                    else {
                        var a, s, l = m("embed"),
                            c = b();
                        if (l.type = "application/x-shockwave-flash", c.appendChild(l), !("Pan" in l || e)) return t(c), o("blocked", l), void r(c);
                        a = function() {
                            if (t(c), !u.contains(c)) return c = i.body || c, (l = m("embed")).type = "application/x-shockwave-flash", c.appendChild(l), setTimeout(a, 1e3);
                            u.contains(l) ? (s = l.style.cssText, o("" === s || "blocked", l)) : o("blocked"), r(c)
                        }, setTimeout(a, 10)
                    }
                }));
            var w, A, C, x = s.testStyles = S;
            /*!
              {
                "name": "Touch Events",
                "property": "touchevents",
                "caniuse" : "touch",
                "tags": ["media", "attribute"],
                "notes": [{
                  "name": "Touch Events spec",
                  "href": "https://www.w3.org/TR/2013/WD-touch-events-20130124/"
                }],
                "warnings": [
                  "Indicates if the browser supports the Touch Events spec, and does not necessarily reflect a touchscreen device"
                ],
                "knownBugs": [
                  "False-positive on some configurations of Nokia N900",
                  "False-positive on some BlackBerry 6.0 builds – https://github.com/Modernizr/Modernizr/issues/372#issuecomment-3112695"
                ]
              }
              !*/
            l.addTest("touchevents", (function() {
                var e;
                if ("ontouchstart" in n || n.DocumentTouch && i instanceof DocumentTouch) e = !0;
                else {
                    var t = ["@media (", p.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                    x(t, (function(t) {
                        e = 9 === t.offsetTop
                    }))
                }
                return e
            })), (w = navigator.userAgent, A = w.match(/w(eb)?osbrowser/gi), C = w.match(/windows phone/gi) && w.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9, A || C) ? l.addTest("fontface", !1) : x('@font-face {font-family:"font";src:url("https://")}', (function(e, t) {
                var n = i.getElementById("smodernizr"),
                    r = n.sheet || n.styleSheet,
                    o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "",
                    a = /src/i.test(o) && 0 === o.indexOf(t.split(" ")[0]);
                l.addTest("fontface", a)
            }));
            /*!
              {
                "name": "CSS Supports",
                "property": "supports",
                "caniuse": "css-featurequeries",
                "tags": ["css"],
                "builderAliases": ["css_supports"],
                "notes": [{
                  "name": "W3 Spec",
                  "href": "http://dev.w3.org/csswg/css3-conditional/#at-supports"
                },{
                  "name": "Related Github Issue",
                  "href": "https://github.com/Modernizr/Modernizr/issues/648"
                },{
                  "name": "W3 Info",
                  "href": "http://dev.w3.org/csswg/css3-conditional/#the-csssupportsrule-interface"
                }]
              }
              !*/
            var E = "CSS" in n && "supports" in n.CSS,
                P = "supportsCSS" in n;
            l.addTest("supports", E || P);
            var M = s._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];

            function G(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            s._cssomPrefixes = M;
            var N = {
                elem: m("modernizr")
            };
            l._q.push((function() {
                delete N.elem
            }));
            var H = {
                style: N.elem.style
            };

            function k(e) {
                return e.replace(/([A-Z])/g, (function(e, t) {
                    return "-" + t.toLowerCase()
                })).replace(/^ms-/, "-ms-")
            }

            function B(e, t) {
                var i = e.length;
                if ("CSS" in n && "supports" in n.CSS) {
                    for (; i--;)
                        if (n.CSS.supports(k(e[i]), t)) return !0;
                    return !1
                }
                if ("CSSSupportsRule" in n) {
                    for (var o = []; i--;) o.push("(" + k(e[i]) + ":" + t + ")");
                    return S("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(e) {
                        return "absolute" == function(e, t, i) {
                            var r;
                            if ("getComputedStyle" in n) {
                                r = getComputedStyle.call(n, e, t);
                                var o = n.console;
                                if (null !== r) i && (r = r.getPropertyValue(i));
                                else if (o) o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                            } else r = !t && e.currentStyle && e.currentStyle[i];
                            return r
                        }(e, null, "position")
                    }))
                }
                return r
            }

            function D(e, t, n, i) {
                if (i = !c(i, "undefined") && i, !c(n, "undefined")) {
                    var o = B(e, n);
                    if (!c(o, "undefined")) return o
                }
                for (var a, s, l, u, d, f = ["modernizr", "tspan", "samp"]; !H.style && f.length;) a = !0, H.modElem = m(f.shift()), H.style = H.modElem.style;

                function p() {
                    a && (delete H.style, delete H.modElem)
                }
                for (l = e.length, s = 0; s < l; s++)
                    if (u = e[s], d = H.style[u], ~("" + u).indexOf("-") && (u = u.replace(/([a-z])-([a-z])/g, (function(e, t, n) {
                            return t + n.toUpperCase()
                        })).replace(/^-/, "")), H.style[u] !== r) {
                        if (i || c(n, "undefined")) return p(), "pfx" != t || u;
                        try {
                            H.style[u] = n
                        } catch (e) {}
                        if (H.style[u] != d) return p(), "pfx" != t || u
                    }
                return p(), !1
            }
            l._q.unshift((function() {
                delete H.style
            }));
            var I = s.testProp = function(e, t, n) {
                return D([e], r, t, n)
            };
            /*!
              {
                "name": "CSS textshadow",
                "property": "textshadow",
                "caniuse": "css-textshadow",
                "tags": ["css"],
                "knownBugs": ["FF3.0 will false positive on this test"]
              }
              !*/
            function L(e, t, n, i, r) {
                var o = e.charAt(0).toUpperCase() + e.slice(1),
                    a = (e + " " + M.join(o + " ") + o).split(" ");
                return c(t, "string") || c(t, "undefined") ? D(a, t, i, r) : function(e, t, n) {
                    var i;
                    for (var r in e)
                        if (e[r] in t) return !1 === n ? e[r] : c(i = t[e[r]], "function") ? G(i, n || t) : i;
                    return !1
                }(a = (e + " " + v.join(o + " ") + o).split(" "), t, n)
            }

            function R(e, t, n) {
                return L(e, r, r, t, n)
            }
            l.addTest("textshadow", I("textShadow", "1px 1px")), s.testAllProps = L, s.testAllProps = R,
                /*!
                  {
                    "name": "CSS Columns",
                    "property": "csscolumns",
                    "caniuse": "multicolumn",
                    "polyfills": ["css3multicolumnjs"],
                    "tags": ["css"]
                  }
                  !*/
                function() {
                    l.addTest("csscolumns", (function() {
                        var e = !1,
                            t = R("columnCount");
                        try {
                            (e = !!t) && (e = new Boolean(e))
                        } catch (e) {}
                        return e
                    }));
                    for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], i = 0; i < n.length; i++) e = n[i].toLowerCase(), t = R("column" + n[i]), "breakbefore" !== e && "breakafter" !== e && "breakinside" != e || (t = t || R(n[i])), l.addTest("csscolumns." + e, t)
                }(),
                /*!
                  {
                    "name": "Flexbox",
                    "property": "flexbox",
                    "caniuse": "flexbox",
                    "tags": ["css"],
                    "notes": [{
                      "name": "The _new_ flexbox",
                      "href": "http://dev.w3.org/csswg/css3-flexbox"
                    }],
                    "warnings": [
                      "A `true` result for this detect does not imply that the `flex-wrap` property is supported; see the `flexwrap` detect."
                    ]
                  }
                  !*/
                l.addTest("flexbox", R("flexBasis", "1px", !0)),
                /*!
                  {
                    "name": "CSS Transforms 3D",
                    "property": "csstransforms3d",
                    "caniuse": "transforms3d",
                    "tags": ["css"],
                    "warnings": [
                      "Chrome may occassionally fail this test on some systems; more info: https://code.google.com/p/chromium/issues/detail?id=129004"
                    ]
                  }
                  !*/
                l.addTest("csstransforms3d", (function() {
                    return !!R("perspective", "1px", !0)
                })),
                function() {
                    var e, t, n, i, r, s;
                    for (var u in a)
                        if (a.hasOwnProperty(u)) {
                            if (e = [], (t = a[u]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                                for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                            for (i = c(t.fn, "function") ? t.fn() : t.fn, r = 0; r < e.length; r++) 1 === (s = e[r].split(".")).length ? l[s[0]] = i : (!l[s[0]] || l[s[0]] instanceof Boolean || (l[s[0]] = new Boolean(l[s[0]])), l[s[0]][s[1]] = i), o.push((i ? "" : "no-") + s.join("-"))
                        }
                }(), f(o), delete s.addTest, delete s.addAsyncTest;
            for (var O = 0; O < l._q.length; O++) l._q[O]();
            n.Modernizr = l
        }(window, document)
    }).call(this, n(1)(e))
}, function(e, t, n) {
    (function(t) {
        e.exports = t.MobileDetect = n(66)
    }).call(this, n(0))
}, function(e, t, n) {
    (function(t) {
        e.exports = t.mobileDetect = n(67)
    }).call(this, n(0))
}, function(e, t, n) {
    var i;
    ! function(e, t) {
        "use strict";
        var n, i = {
                phones: {
                    iPhone: "\\biPhone.*(Mobile|PhoneGap)|\\biPod",
                    BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                    HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                    Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile",
                    Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                    Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925",
                    Samsung: "Samsung|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E",
                    LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802)",
                    Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i",
                    Asus: "Asus.*Galaxy|PadFone.*Mobile",
                    Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                    Palm: "PalmSource|Palm",
                    Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                    Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                    Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                    iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                    SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                    GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
                },
                tablets: {
                    iPad: "iPad|iPad.*Mobile",
                    NexusTablet: "Android.*Nexus[\\s]+(7|10)|^.*Android.*Nexus(?:(?!Mobile).)*$",
                    SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-I9205|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705C|SM-T535|SM-T331",
                    Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE)\\b",
                    SurfaceTablet: "Windows NT [0-9.]+; ARM;",
                    HPTablet: "HP Slate 7|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8",
                    AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|TX201LA",
                    BlackBerryTablet: "PlayBook|RIM Tablet",
                    HTCtablet: "HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200",
                    MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                    NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                    AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-830)\\b|W3-810|\\bA3-A10\\b",
                    ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                    LGTablet: "\\bL-06C|LG-V900|LG-V500|LG-V909|LG-V500|LG-V510|LG-VK810\\b",
                    FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                    PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD",
                    LenovoTablet: "IdeaTab|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A1000|A2107|A2109|A1107|B6000|B8000|B8080-F)",
                    YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                    MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                    ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT",
                    IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab",
                    IRUTablet: "M702pro",
                    MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                    EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                    AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                    ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|ARCHOS 101G10|Archos 101 Neon",
                    AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                    SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551",
                    CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                    CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                    MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733",
                    SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                    RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                    FlyTablet: "IQ310|Fly Vision",
                    bqTablet: "bq.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant)|Maxwell.*Lite|Maxwell.*Plus",
                    HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                    NecTablet: "\\bN-06D|\\bN-08D",
                    PantechTablet: "Pantech.*P4100",
                    BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                    VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                    ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                    PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                    NabiTablet: "Android.*\\bNabi",
                    KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                    DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                    TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                    PlaystationTablet: "Playstation.*(Portable|Vita)",
                    TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A",
                    PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                    AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                    DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                    GalapadTablet: "Android.*\\bG1\\b",
                    MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                    KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                    AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                    PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                    YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                    ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                    GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                    PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                    OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                    HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                    DPSTablet: "DPS Dream 9|DPS Dual 7",
                    VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                    CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                    MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                    ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                    GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                    ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                    VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                    ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                    StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                    VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10",
                    EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                    RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                    iMobileTablet: "i-mobile i-note",
                    TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                    AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                    AMPETablet: "Android.* A78 ",
                    SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                    TecnoTablet: "TECNO P9",
                    JXDTablet: "Android.*\\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                    iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                    FX2Tablet: "FX2 PAD7|FX2 PAD10",
                    XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                    ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                    OdysTablet: "LOOX|XENO10|ODYS Space",
                    CaptivaTablet: "CAPTIVA PAD",
                    IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                    Hudl: "Hudl HT7S3",
                    TelstraTablet: "T-Hub2",
                    GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4"
                },
                oss: {
                    AndroidOS: "Android",
                    BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                    PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                    SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                    WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                    WindowsPhoneOS: "Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7",
                    iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                    MeeGoOS: "MeeGo",
                    MaemoOS: "Maemo",
                    JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                    webOS: "webOS|hpwOS",
                    badaOS: "\\bBada\\b",
                    BREWOS: "BREW"
                },
                uas: {
                    Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                    Dolfin: "\\bDolfin\\b",
                    Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                    Skyfire: "Skyfire",
                    IE: "IEMobile|MSIEMobile",
                    Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                    Bolt: "bolt",
                    TeaShark: "teashark",
                    Blazer: "Blazer",
                    Safari: "Version.*Mobile.*Safari|Safari.*Mobile",
                    Tizen: "Tizen",
                    UCBrowser: "UC.*Browser|UCWEB",
                    DiigoBrowser: "DiigoBrowser",
                    Puffin: "Puffin",
                    Mercury: "\\bMercury\\b",
                    GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger"
                },
                props: {
                    Mobile: "Mobile/[VER]",
                    Build: "Build/[VER]",
                    Version: "Version/[VER]",
                    VendorID: "VendorID/[VER]",
                    iPad: "iPad.*CPU[a-z ]+[VER]",
                    iPhone: "iPhone.*CPU[a-z ]+[VER]",
                    iPod: "iPod.*CPU[a-z ]+[VER]",
                    Kindle: "Kindle/[VER]",
                    Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                    Coast: ["Coast/[VER]"],
                    Dolfin: "Dolfin/[VER]",
                    Firefox: "Firefox/[VER]",
                    Fennec: "Fennec/[VER]",
                    IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];"],
                    NetFront: "NetFront/[VER]",
                    NokiaBrowser: "NokiaBrowser/[VER]",
                    Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                    "Opera Mini": "Opera Mini/[VER]",
                    "Opera Mobi": "Version/[VER]",
                    "UC Browser": "UC Browser[VER]",
                    MQQBrowser: "MQQBrowser/[VER]",
                    MicroMessenger: "MicroMessenger/[VER]",
                    Safari: ["Version/[VER]", "Safari/[VER]"],
                    Skyfire: "Skyfire/[VER]",
                    Tizen: "Tizen/[VER]",
                    Webkit: "webkit[ /][VER]",
                    Gecko: "Gecko/[VER]",
                    Trident: "Trident/[VER]",
                    Presto: "Presto/[VER]",
                    iOS: " \\bOS\\b [VER] ",
                    Android: "Android [VER]",
                    BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                    BREW: "BREW [VER]",
                    Java: "Java/[VER]",
                    "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                    "Windows Phone": "Windows Phone [VER]",
                    "Windows CE": "Windows CE/[VER]",
                    "Windows NT": "Windows NT [VER]",
                    Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                    webOS: ["webOS/[VER]", "hpwOS/[VER];"]
                },
                utils: {
                    DesktopMode: "WPDesktop",
                    TV: "SonyDTV|HbbTV",
                    WebKit: "(webkit)[ /]([\\w.]+)",
                    Bot: "Googlebot|DoCoMo|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|facebookexternalhit",
                    MobileBot: "Googlebot-Mobile|DoCoMo|YahooSeeker/M1A1-R2D2",
                    Console: "\\b(Nintendo|Nintendo WiiU|PLAYSTATION|Xbox)\\b",
                    Watch: "SM-V700"
                }
            },
            r = {
                fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
                shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
            },
            o = Object.prototype.hasOwnProperty,
            a = "UnknownPhone",
            s = "UnknownTablet",
            l = "UnknownMobile";

        function c(e) {
            for (var t in e) o.call(e, t) && (e[t] = new RegExp(e[t], "i"))
        }

        function u(e, t) {
            for (var n in e)
                if (o.call(e, n) && e[n].test(t)) return n;
            return null
        }

        function d(e, t) {
            var n, r, a, s, l = i.props;
            if (o.call(l, e))
                for (a = (n = l[e]).length, r = 0; r < a; ++r)
                    if (null !== (s = n[r].exec(t))) return s[1];
            return null
        }

        function f(e, t) {
            var n = d(e, t);
            return n ? function(e) {
                var t;
                1 === (t = e.split(/[a-z._ \/\-]/i)).length && (e = t[0]);
                t.length > 1 && (e = t[0] + ".", t.shift(), e += t.join(""));
                return Number(e)
            }(n) : NaN
        }

        function p(e, t) {
            return null != e && null != t && e.toLowerCase() === t.toLowerCase()
        }

        function h(e, n, o) {
            if (e.mobile === t) {
                var c, d, f;
                if (d = u(i.tablets, n)) return e.mobile = e.tablet = d, void(e.phone = null);
                if (c = u(i.phones, n)) return e.mobile = e.phone = c, void(e.tablet = null);
                ! function(e) {
                    return r.fullPattern.test(e) || r.shortPattern.test(e.substr(0, 4))
                }(n) ? e.mobile = e.tablet = e.phone = null: (f = m.isPhoneSized(o)) === t ? e.mobile = e.tablet = e.phone = l : f ? (e.mobile = e.phone = a, e.tablet = null) : (e.mobile = e.tablet = s, e.phone = null)
            }
        }

        function m(e, t) {
            this.ua = e || "", this._cache = {}, this.maxPhoneWidth = t || 650
        }
        n = "isArray" in Array ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            function() {
                var e, t, r, a, s, l;
                for (e in i.props)
                    if (o.call(i.props, e)) {
                        for (t = i.props[e], n(t) || (t = [t]), s = t.length, a = 0; a < s; ++a)(l = (r = t[a]).indexOf("[VER]")) >= 0 && (r = r.substring(0, l) + "([\\w._\\+]+)" + r.substring(l + 5)), t[a] = new RegExp(r, "i");
                        i.props[e] = t
                    }
                c(i.oss), c(i.phones), c(i.tablets), c(i.uas), c(i.utils)
            }(), m.prototype = {
                constructor: m,
                mobile: function() {
                    return h(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return h(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return h(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === t && (this._cache.userAgent = u(i.uas, this.ua)), this._cache.userAgent
                },
                os: function() {
                    return this._cache.os === t && (this._cache.os = u(i.oss, this.ua)), this._cache.os
                },
                version: function(e) {
                    return f(e, this.ua)
                },
                versionStr: function(e) {
                    return d(e, this.ua)
                },
                is: function(e) {
                    return p(e, this.userAgent()) || p(e, this.os()) || p(e, this.phone()) || p(e, this.tablet()) || p(e, u(i.utils, this.ua))
                },
                match: function(e) {
                    return e instanceof RegExp || (e = new RegExp(e, "i")), e.test(this.ua)
                },
                isPhoneSized: function(e) {
                    return m.isPhoneSized(e || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    var e, n;
                    return this._cache.grade === t && (this._cache.grade = (n = null !== (e = this).mobile(), e.os("iOS") && e.version("iPad") >= 4.3 || e.os("iOS") && e.version("iPhone") >= 3.1 || e.os("iOS") && e.version("iPod") >= 3.1 || e.version("Android") > 2.1 && e.is("Webkit") || e.version("Windows Phone OS") >= 7 || e.is("BlackBerry") && e.version("BlackBerry") >= 6 || e.match("Playbook.*Tablet") || e.version("webOS") >= 1.4 && e.match("Palm|Pre|Pixi") || e.match("hp.*TouchPad") || e.is("Firefox") && e.version("Firefox") >= 12 || e.is("Chrome") && e.is("AndroidOS") && e.version("Android") >= 4 || e.is("Skyfire") && e.version("Skyfire") >= 4.1 && e.is("AndroidOS") && e.version("Android") >= 2.3 || e.is("Opera") && e.version("Opera Mobi") > 11 && e.is("AndroidOS") || e.is("MeeGoOS") || e.is("Tizen") || e.is("Dolfin") && e.version("Bada") >= 2 || (e.is("UC Browser") || e.is("Dolfin")) && e.version("Android") >= 2.3 || e.match("Kindle Fire") || e.is("Kindle") && e.version("Kindle") >= 3 || e.is("AndroidOS") && e.is("NookTablet") || e.version("Chrome") >= 11 && !n || e.version("Safari") >= 5 && !n || e.version("Firefox") >= 4 && !n || e.version("MSIE") >= 7 && !n || e.version("Opera") >= 10 && !n ? "A" : e.os("iOS") && e.version("iPad") < 4.3 || e.os("iOS") && e.version("iPhone") < 3.1 || e.os("iOS") && e.version("iPod") < 3.1 || e.is("Blackberry") && e.version("BlackBerry") >= 5 && e.version("BlackBerry") < 6 || e.version("Opera Mini") >= 5 && e.version("Opera Mini") <= 6.5 && (e.version("Android") >= 2.3 || e.is("iOS")) || e.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || e.version("Opera Mobi") >= 11 && e.is("SymbianOS") ? "B" : (e.version("BlackBerry") < 5 || e.match("MSIEMobile|Windows CE.*Mobile") || e.version("Windows Mobile"), "C"))), this._cache.grade
                }
            }, e(m)
    }((function(r, o) {
        "undefined" != typeof window && window.screen && window.screen.width ? r.isPhoneSized = function(e) {
            return e < 0 ? o : window.screen.width / (window.devicePixelRatio || 1) <= e
        } : r.isPhoneSized = function() {}, e.exports ? e.exports = r : (i = function() {
            return r
        }.call(t, n, t, e)) === o || (e.exports = i)
    }))
}, function(e, t) {
    ! function(e, t) {
        "use strict";
        var n = new MobileDetect(navigator.userAgent),
            i = n.mobileGrade();
        t.addTest({
            mobile: !!n.mobile(),
            phone: !!n.phone(),
            tablet: !!n.tablet(),
            mobilegradea: "A" === i
        }), e.mobileDetect = n
    }(window, Modernizr)
}, function(e, t) {
    ! function() {
        for (var e = 0, t = ["webkit", "moz"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, n) {
            var i = (new Date).getTime(),
                r = Math.max(0, 16 - (i - e)),
                o = window.setTimeout((function() {
                    t(i + r)
                }), r);
            return e = i + r, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        })
    }()
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var i = window.CNN || {};
    i.Utils = i.Utils || function(e, t, r, o) {
        "use strict";
        var a = 36e5,
            s = "Thu, 01 Jan 1970 00:00:00 UTC";

        function l(e) {
            var t, n, i = !0;
            for (t = 0; t < arguments.length; t++)
                if ((n = arguments[t]) === o || null === n) {
                    i = !1;
                    break
                }
            return i
        }

        function c(e) {
            return null !== u(e)
        }

        function u(e) {
            var t = new RegExp("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)"),
                n = r.cookie.match(t);
            return n ? n.pop() : null
        }

        function d(e, t, n, i, o, s) {
            var c, u, d = "";
            l(e) && l(t) && (u = null, "string" == typeof(c = n) && Date.parse(c) ? u = c : "number" == typeof c && (u = new Date(Date.now() + c * a).toGMTString()), n = u, i = l(i) ? i : "/", o = l(o) ? o : "", s = !!l(s) && s, d += e + "=" + encodeURIComponent(t), l(n) && (d += ";expires=" + n), i && (d += ";path=" + i), o && (d += ";domain=" + o), s && (d += "; secure"), r.cookie = d)
        }

        function f(e, t, n) {
            var i = "";
            l(e) && (t = l(t) ? t : "/", n = l(n) ? n : "", i += e + "=;expires=" + s, t && (i += ";path=" + t), n && (i += ";domain=" + n), r.cookie = i)
        }

        function p(e) {
            if ("string" == typeof e && e.length > 0)
                if (!1 === i.hasLocalStorage) f(e);
                else {
                    try {
                        t.localStorage.removeItem(e), t.localStorage.removeItem(e + "__expires")
                    } catch (e) {}
                    try {
                        t.sessionStorage.removeItem(e)
                    } catch (e) {}
                }
        }
        return i.hasLocalStorage = function() {
            var e = "__test_it";
            try {
                return t.localStorage.setItem(e, e), t.localStorage.removeItem(e), t.sessionStorage.setItem(e, e), t.sessionStorage.removeItem(e), !0
            } catch (e) {
                return !1
            }
        }(), {
            b64Decode: function(e) {
                var n, i, r, o, a, s, l, c, u = e;
                if ("function" == typeof t.atob) try {
                    n = t.atob(u)
                } catch (e) {
                    console.log(e.message, "\nString to decode: " + u)
                } else {
                    for (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), r = {}, c = 0; c < i.length; c++) r[i[c]] = c;
                    for (a = "=" === (u = u.replace(new RegExp("[^" + i.join("") + "=]", "g"), "")).charAt(u.length - 1) ? "=" === u.charAt(u.length - 2) ? "AA" : "A" : "", o = "", u = u.substr(0, u.length - a.length) + a, s = 0; s < u.length; s += 4) l = (r[u.charAt(s)] << 18) + (r[u.charAt(s + 1)] << 12) + (r[u.charAt(s + 2)] << 6) + r[u.charAt(s + 3)], o += String.fromCharCode(l >>> 16 & 255, l >>> 8 & 255, 255 & l);
                    n = o.substring(0, o.length - a.length)
                }
                return n
            },
            b64Encode: function(e) {
                var n, i, r, o, a, s, l = e;
                if ("function" == typeof t.btoa) try {
                    n = t.btoa(l)
                } catch (i) {
                    n = t.btoa(e.replace(/[^\w\+\/]/g, "+"))
                } else {
                    if (i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), r = "", o = "", (a = l.length % 3) > 0)
                        for (; a < 3; a++) o += "=", l += "\0";
                    for (a = 0; a < l.length; a += 3) a > 0 && a / 3 * 4 % 76 == 0 && (r += "\r\n"), r += i[(s = [(s = (l.charCodeAt(a) << 16) + (l.charCodeAt(a + 1) << 8) + l.charCodeAt(a + 2)) >>> 18 & 63, s >>> 12 & 63, s >>> 6 & 63, 63 & s])[0]] + i[s[1]] + i[s[2]] + i[s[3]];
                    n = r.substring(0, r.length - o.length) + o
                }
                return n
            },
            cookieExists: c,
            deleteCNNCookie: function(e) {
                f(e, "/", ".cnn.com")
            },
            deleteCookie: f,
            deleteLocalValue: p,
            exists: l,
            existsObject: function(e) {
                var t, i, r = !0;
                for (t = 0; t < arguments.length; t++)
                    if ("object" !== n(i = arguments[t]) || null === i) {
                        r = !1;
                        break
                    }
                return r
            },
            existsString: function(e) {
                var t, n, i = !0;
                for (t = 0; t < arguments.length; t++)
                    if (!("string" == typeof(n = arguments[t]) && n.length > 0)) {
                        i = !1;
                        break
                    }
                return i
            },
            getCookie: u,
            getCookies: function() {
                var e, t, n = {},
                    i = 0;
                if (r.cookie)
                    for (e = r.cookie.split("; "); i < e.length; i++) n[(t = e[i].split("="))[0]] = decodeURIComponent(t[1]) || null;
                return n
            },
            getLocalValue: function(e) {
                var n, r = null;
                if ("string" == typeof e && e.length > 0) try {
                    !1 === i.hasLocalStorage ? r = u(e) : null !== (n = t.localStorage.getItem(e + "__expires")) ? parseInt(n, 10) > Date.now() ? r = t.localStorage.getItem(e) : p(e) : l(r = t.sessionStorage.getItem(e)) || (r = t.localStorage.getItem(e))
                } catch (e) {}
                return r
            },
            hasLocalValue: function(e) {
                if ("string" == typeof e && e.length > 0) {
                    if (!1 === i.hasLocalStorage) return c(e);
                    try {
                        if (l(t.sessionStorage.getItem(e)) || l(t.localStorage.getItem(e + "__expires"))) return !0
                    } catch (e) {}
                }
                return !1
            },
            isPhone: function() {
                return t.Modernizr.phone
            },
            isWindows7: function() {
                return /(Windows 7|Windows NT 6.1)/.test(navigator.userAgent)
            },
            setCNNCookie: function(e, t, n, i) {
                d(e, t, n, "/", ".cnn.com", i)
            },
            setCookie: d,
            storeLocalValue: function(e, n, r) {
                var o;
                if ("string" == typeof e && e.length > 0 && "string" == typeof n)
                    if (!1 === i.hasLocalStorage) d(e, n, "session" === r ? null : r, "/", ".cnn.com", !1);
                    else try {
                        "session" === r ? t.sessionStorage.setItem(e, n) : (t.localStorage.setItem(e, n), "number" == typeof r ? (o = new Date(Date.now() + r * a), t.localStorage.setItem(e + "__expires", o.getTime().toString(10))) : "string" == typeof r && "session" !== r && (o = new Date(r)).getTime() > Date.now() && t.localStorage.setItem(e + "__expires", o.getTime().toString(10)))
                    } catch (e) {}
            },
            stripHash: function(e) {
                return e.replace("#", "")
            },
            throttle: function(e, t, n) {
                var i = n || this,
                    r = null;
                return function() {
                    r || (e.apply(i, arguments), r = setTimeout((function() {
                        r = null
                    }), t))
                }
            }
        }
    }(jQuery, window, document)
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    CNN.Features = CNN.Features || {}, CNN.VideoConfig = CNN.VideoConfig || {}, CNN.VideoConfig.liveStream = CNN.VideoConfig.liveStream || {}, CNN.GeoCheck = function(e, t) {
        "use strict";
        var i, r, o, a = null;
        return CNN._geoCheckReadyEvent = !1, e.fn.extend({
            onGeoCheckReady: function(i) {
                "function" == typeof i && (!0 === CNN._geoCheckReadyEvent ? i(e) : e(t).on("geoCheckReady", {
                    handler: i
                }, (function(t) {
                    "object" === n((t = t || {}).data) && null !== t.data && "function" == typeof t.data.handler && t.data.handler(e)
                })))
            },
            triggerGeoCheckReady: function() {
                CNN._geoCheckReadyEvent = !0, e(t).trigger("geoCheckReady")
            }
        }), null !== (o = CNN.Utils.getCookie("geoData")) && (i = o.split("|")).length > 4 && ((a = {
            city: "?" === i[0] ? "" : i[0],
            region: "?" === i[1] ? "" : i[1].toUpperCase(),
            postCode: "?" === i[2] ? "" : i[2].toUpperCase(),
            country: "?" === i[3] ? "" : i[3].toUpperCase(),
            continent: "?" === i[4] ? "" : i[4].toUpperCase()
        }).inGDPR = -1 !== a.country.search(/^(GB|DE|FR|IT|ES|PL|RO|NL|BE|GR|CZ|PT|SE|HU|AT|BG|DK|FI|SK|IE|HR|LT|SI|LV|EE|CY|LU|MT|NO|IS|LI)$/)), 0 !== (r = t.getElementsByTagName("html")).length && r[0].classList.add(a && !0 === a.inGDPR ? "gdpr" : "no-gdpr"), e(t).triggerGeoCheckReady(), {
            getData: function() {
                return a
            },
            inTarget: function(e) {
                var t, n, i, r, o, s = !0;
                if (null !== a && !0 === Array.isArray(e) && e.length > 0)
                    for (r = (i = a.country + ":" + a.region) + ":" + a.city.toLowerCase(), t = 0; t < e.length; t++) "-" === (o = e[t]).charAt(0) ? (o = o.slice(1), n = !1) : n = !0, "*" === o ? s = n : "#" === o.charAt(0) ? a.continent === o.slice(1) && (s = n) : (2 === o.length && a.country === o || 5 === o.length && i === o || o.length > 6 && r === o) && (s = n);
                return s
            },
            isReady: function() {
                return CNN._geoCheckReadyEvent
            }
        }
    }(jQuery, document)
}, function(e, t, n) {
    (function(t) {
        e.exports = t.UAParser = n(73)
    }).call(this, n(0))
}, function(e, t, n) {
    (function(e) {
        var i;

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        /*!
         * UAParser.js v0.7.20
         * Lightweight JavaScript-based User-Agent string parser
         * https://github.com/faisalman/ua-parser-js
         *
         * Copyright © 2012-2019 Faisal Salman <f@faisalman.com>
         * Licensed under MIT License
         */
        ! function(o, a) {
            "use strict";
            var s = "model",
                l = "name",
                c = "type",
                u = "vendor",
                d = "version",
                f = "mobile",
                p = "tablet",
                h = {
                    extend: function(e, t) {
                        var n = {};
                        for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                        return n
                    },
                    has: function(e, t) {
                        return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                    },
                    lowerize: function(e) {
                        return e.toLowerCase()
                    },
                    major: function(e) {
                        return "string" === r(e) ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                    },
                    trim: function(e) {
                        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                    }
                },
                m = {
                    rgx: function(e, t) {
                        for (var n, i, o, a, s, l, c = 0; c < t.length && !s;) {
                            var u = t[c],
                                d = t[c + 1];
                            for (n = i = 0; n < u.length && !s;)
                                if (s = u[n++].exec(e))
                                    for (o = 0; o < d.length; o++) l = s[++i], "object" === r(a = d[o]) && a.length > 0 ? 2 == a.length ? "function" == r(a[1]) ? this[a[0]] = a[1].call(this, l) : this[a[0]] = a[1] : 3 == a.length ? "function" !== r(a[1]) || a[1].exec && a[1].test ? this[a[0]] = l ? l.replace(a[1], a[2]) : void 0 : this[a[0]] = l ? a[1].call(this, l, a[2]) : void 0 : 4 == a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : void 0) : this[a] = l || void 0;
                            c += 2
                        }
                    },
                    str: function(e, t) {
                        for (var n in t)
                            if ("object" === r(t[n]) && t[n].length > 0) {
                                for (var i = 0; i < t[n].length; i++)
                                    if (h.has(t[n][i], e)) return "?" === n ? void 0 : n
                            } else if (h.has(t[n], e)) return "?" === n ? void 0 : n;
                        return e
                    }
                },
                g = {
                    browser: {
                        oldsafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                "Fire Phone": ["SD", "KF"]
                            }
                        },
                        sprint: {
                            model: {
                                "Evo Shift 4G": "7373KT"
                            },
                            vendor: {
                                HTC: "APA",
                                Sprint: "Sprint"
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2e3: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM"
                            }
                        }
                    }
                },
                T = {
                    browser: [
                        [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                        [l, d],
                        [/(opios)[\/\s]+([\w\.]+)/i],
                        [
                            [l, "Opera Mini"], d
                        ],
                        [/\s(opr)\/([\w\.]+)/i],
                        [
                            [l, "Opera"], d
                        ],
                        [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                        [l, d],
                        [/(konqueror)\/([\w\.]+)/i],
                        [
                            [l, "Konqueror"], d
                        ],
                        [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                        [
                            [l, "IE"], d
                        ],
                        [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                        [
                            [l, "Edge"], d
                        ],
                        [/(yabrowser)\/([\w\.]+)/i],
                        [
                            [l, "Yandex"], d
                        ],
                        [/(puffin)\/([\w\.]+)/i],
                        [
                            [l, "Puffin"], d
                        ],
                        [/(focus)\/([\w\.]+)/i],
                        [
                            [l, "Firefox Focus"], d
                        ],
                        [/(opt)\/([\w\.]+)/i],
                        [
                            [l, "Opera Touch"], d
                        ],
                        [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        [
                            [l, "UCBrowser"], d
                        ],
                        [/(comodo_dragon)\/([\w\.]+)/i],
                        [
                            [l, /_/g, " "], d
                        ],
                        [/(windowswechat qbcore)\/([\w\.]+)/i],
                        [
                            [l, "WeChat(Win) Desktop"], d
                        ],
                        [/(micromessenger)\/([\w\.]+)/i],
                        [
                            [l, "WeChat"], d
                        ],
                        [/(brave)\/([\w\.]+)/i],
                        [
                            [l, "Brave"], d
                        ],
                        [/(qqbrowserlite)\/([\w\.]+)/i],
                        [l, d],
                        [/(QQ)\/([\d\.]+)/i],
                        [l, d],
                        [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                        [l, d],
                        [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                        [l, d],
                        [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                        [l, d],
                        [/(MetaSr)[\/\s]?([\w\.]+)/i],
                        [l],
                        [/(LBBROWSER)/i],
                        [l],
                        [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        [d, [l, "MIUI Browser"]],
                        [/;fbav\/([\w\.]+);/i],
                        [d, [l, "Facebook"]],
                        [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                        [l, d],
                        [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        [d, [l, "Chrome Headless"]],
                        [/\swv\).+(chrome)\/([\w\.]+)/i],
                        [
                            [l, /(.+)/, "$1 WebView"], d
                        ],
                        [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                        [
                            [l, /(.+(?:g|us))(.+)/, "$1 $2"], d
                        ],
                        [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                        [d, [l, "Android Browser"]],
                        [/(sailfishbrowser)\/([\w\.]+)/i],
                        [
                            [l, "Sailfish Browser"], d
                        ],
                        [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        [l, d],
                        [/(dolfin)\/([\w\.]+)/i],
                        [
                            [l, "Dolphin"], d
                        ],
                        [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                        [
                            [l, "Chrome"], d
                        ],
                        [/(coast)\/([\w\.]+)/i],
                        [
                            [l, "Opera Coast"], d
                        ],
                        [/fxios\/([\w\.-]+)/i],
                        [d, [l, "Firefox"]],
                        [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                        [d, [l, "Mobile Safari"]],
                        [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                        [d, l],
                        [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [
                            [l, "GSA"], d
                        ],
                        [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        [l, [d, m.str, g.browser.oldsafari.version]],
                        [/(webkit|khtml)\/([\w\.]+)/i],
                        [l, d],
                        [/(navigator|netscape)\/([\w\.-]+)/i],
                        [
                            [l, "Netscape"], d
                        ],
                        [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                        [l, d]
                    ],
                    cpu: [
                        [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        [
                            ["architecture", "amd64"]
                        ],
                        [/(ia32(?=;))/i],
                        [
                            ["architecture", h.lowerize]
                        ],
                        [/((?:i[346]|x)86)[;\)]/i],
                        [
                            ["architecture", "ia32"]
                        ],
                        [/windows\s(ce|mobile);\sppc;/i],
                        [
                            ["architecture", "arm"]
                        ],
                        [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        [
                            ["architecture", /ower/, "", h.lowerize]
                        ],
                        [/(sun4\w)[;\)]/i],
                        [
                            ["architecture", "sparc"]
                        ],
                        [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                        [
                            ["architecture", h.lowerize]
                        ]
                    ],
                    device: [
                        [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                        [s, u, [c, p]],
                        [/applecoremedia\/[\w\.]+ \((ipad)/],
                        [s, [u, "Apple"],
                            [c, p]
                        ],
                        [/(apple\s{0,1}tv)/i],
                        [
                            [s, "Apple TV"],
                            [u, "Apple"]
                        ],
                        [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                        [u, s, [c, p]],
                        [/(kf[A-z]+)\sbuild\/.+silk\//i],
                        [s, [u, "Amazon"],
                            [c, p]
                        ],
                        [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                        [
                            [s, m.str, g.device.amazon.model],
                            [u, "Amazon"],
                            [c, f]
                        ],
                        [/android.+aft([bms])\sbuild/i],
                        [s, [u, "Amazon"],
                            [c, "smarttv"]
                        ],
                        [/\((ip[honed|\s\w*]+);.+(apple)/i],
                        [s, u, [c, f]],
                        [/\((ip[honed|\s\w*]+);/i],
                        [s, [u, "Apple"],
                            [c, f]
                        ],
                        [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                        [u, s, [c, f]],
                        [/\(bb10;\s(\w+)/i],
                        [s, [u, "BlackBerry"],
                            [c, f]
                        ],
                        [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                        [s, [u, "Asus"],
                            [c, p]
                        ],
                        [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                        [
                            [u, "Sony"],
                            [s, "Xperia Tablet"],
                            [c, p]
                        ],
                        [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        [s, [u, "Sony"],
                            [c, f]
                        ],
                        [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                        [u, s, [c, "console"]],
                        [/android.+;\s(shield)\sbuild/i],
                        [s, [u, "Nvidia"],
                            [c, "console"]
                        ],
                        [/(playstation\s[34portablevi]+)/i],
                        [s, [u, "Sony"],
                            [c, "console"]
                        ],
                        [/(sprint\s(\w+))/i],
                        [
                            [u, m.str, g.device.sprint.vendor],
                            [s, m.str, g.device.sprint.model],
                            [c, f]
                        ],
                        [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        [u, [s, /_/g, " "],
                            [c, f]
                        ],
                        [/(nexus\s9)/i],
                        [s, [u, "HTC"],
                            [c, p]
                        ],
                        [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                        [s, [u, "Huawei"],
                            [c, f]
                        ],
                        [/(microsoft);\s(lumia[\s\w]+)/i],
                        [u, s, [c, f]],
                        [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                        [s, [u, "Microsoft"],
                            [c, "console"]
                        ],
                        [/(kin\.[onetw]{3})/i],
                        [
                            [s, /\./g, " "],
                            [u, "Microsoft"],
                            [c, f]
                        ],
                        [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                        [s, [u, "Motorola"],
                            [c, f]
                        ],
                        [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        [s, [u, "Motorola"],
                            [c, p]
                        ],
                        [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        [
                            [u, h.trim],
                            [s, h.trim],
                            [c, "smarttv"]
                        ],
                        [/hbbtv.+maple;(\d+)/i],
                        [
                            [s, /^/, "SmartTV"],
                            [u, "Samsung"],
                            [c, "smarttv"]
                        ],
                        [/\(dtv[\);].+(aquos)/i],
                        [s, [u, "Sharp"],
                            [c, "smarttv"]
                        ],
                        [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                        [
                            [u, "Samsung"], s, [c, p]
                        ],
                        [/smart-tv.+(samsung)/i],
                        [u, [c, "smarttv"], s],
                        [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                        [
                            [u, "Samsung"], s, [c, f]
                        ],
                        [/sie-(\w*)/i],
                        [s, [u, "Siemens"],
                            [c, f]
                        ],
                        [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                        [
                            [u, "Nokia"], s, [c, f]
                        ],
                        [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        [s, [u, "Acer"],
                            [c, p]
                        ],
                        [/android.+([vl]k\-?\d{3})\s+build/i],
                        [s, [u, "LG"],
                            [c, p]
                        ],
                        [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                        [
                            [u, "LG"], s, [c, p]
                        ],
                        [/(lg) netcast\.tv/i],
                        [u, s, [c, "smarttv"]],
                        [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                        [s, [u, "LG"],
                            [c, f]
                        ],
                        [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                        [u, s, [c, p]],
                        [/android.+(ideatab[a-z0-9\-\s]+)/i],
                        [s, [u, "Lenovo"],
                            [c, p]
                        ],
                        [/(lenovo)[_\s-]?([\w-]+)/i],
                        [u, s, [c, f]],
                        [/linux;.+((jolla));/i],
                        [u, s, [c, f]],
                        [/((pebble))app\/[\d\.]+\s/i],
                        [u, s, [c, "wearable"]],
                        [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                        [u, s, [c, f]],
                        [/crkey/i],
                        [
                            [s, "Chromecast"],
                            [u, "Google"]
                        ],
                        [/android.+;\s(glass)\s\d/i],
                        [s, [u, "Google"],
                            [c, "wearable"]
                        ],
                        [/android.+;\s(pixel c)[\s)]/i],
                        [s, [u, "Google"],
                            [c, p]
                        ],
                        [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                        [s, [u, "Google"],
                            [c, f]
                        ],
                        [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [s, /_/g, " "],
                            [u, "Xiaomi"],
                            [c, f]
                        ],
                        [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                        [
                            [s, /_/g, " "],
                            [u, "Xiaomi"],
                            [c, p]
                        ],
                        [/android.+;\s(m[1-5]\snote)\sbuild/i],
                        [s, [u, "Meizu"],
                            [c, f]
                        ],
                        [/(mz)-([\w-]{2,})/i],
                        [
                            [u, "Meizu"], s, [c, f]
                        ],
                        [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                        [s, [u, "OnePlus"],
                            [c, f]
                        ],
                        [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                        [s, [u, "RCA"],
                            [c, p]
                        ],
                        [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                        [s, [u, "Dell"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                        [s, [u, "Verizon"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                        [
                            [u, "Barnes & Noble"], s, [c, p]
                        ],
                        [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                        [s, [u, "NuVision"],
                            [c, p]
                        ],
                        [/android.+;\s(k88)\sbuild/i],
                        [s, [u, "ZTE"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                        [s, [u, "Swiss"],
                            [c, f]
                        ],
                        [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                        [s, [u, "Swiss"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                        [s, [u, "Zeki"],
                            [c, p]
                        ],
                        [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                        [
                            [u, "Dragon Touch"], s, [c, p]
                        ],
                        [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                        [s, [u, "Insignia"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                        [s, [u, "NextBook"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                        [
                            [u, "Voice"], s, [c, f]
                        ],
                        [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                        [
                            [u, "LvTel"], s, [c, f]
                        ],
                        [/android.+;\s(PH-1)\s/i],
                        [s, [u, "Essential"],
                            [c, f]
                        ],
                        [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                        [s, [u, "Envizen"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                        [u, s, [c, p]],
                        [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                        [s, [u, "MachSpeed"],
                            [c, p]
                        ],
                        [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                        [u, s, [c, p]],
                        [/android.+[;\/]\s*TU_(1491)\s+build/i],
                        [s, [u, "Rotor"],
                            [c, p]
                        ],
                        [/android.+(KS(.+))\s+build/i],
                        [s, [u, "Amazon"],
                            [c, p]
                        ],
                        [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                        [u, s, [c, p]],
                        [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        [
                            [c, h.lowerize], u, s
                        ],
                        [/[\s\/\(](smart-?tv)[;\)]/i],
                        [
                            [c, "smarttv"]
                        ],
                        [/(android[\w\.\s\-]{0,9});.+build/i],
                        [s, [u, "Generic"]]
                    ],
                    engine: [
                        [/windows.+\sedge\/([\w\.]+)/i],
                        [d, [l, "EdgeHTML"]],
                        [/webkit\/537\.36.+chrome\/(?!27)/i],
                        [
                            [l, "Blink"]
                        ],
                        [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                        [l, d],
                        [/rv\:([\w\.]{1,9}).+(gecko)/i],
                        [d, l]
                    ],
                    os: [
                        [/microsoft\s(windows)\s(vista|xp)/i],
                        [l, d],
                        [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                        [l, [d, m.str, g.os.windows.version]],
                        [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        [
                            [l, "Windows"],
                            [d, m.str, g.os.windows.version]
                        ],
                        [/\((bb)(10);/i],
                        [
                            [l, "BlackBerry"], d
                        ],
                        [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                        [l, d],
                        [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                        [
                            [l, "Symbian"], d
                        ],
                        [/\((series40);/i],
                        [l],
                        [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        [
                            [l, "Firefox OS"], d
                        ],
                        [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                        [l, d],
                        [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        [
                            [l, "Chromium OS"], d
                        ],
                        [/(sunos)\s?([\w\.\d]*)/i],
                        [
                            [l, "Solaris"], d
                        ],
                        [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                        [l, d],
                        [/(haiku)\s(\w+)/i],
                        [l, d],
                        [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                        [
                            [d, /_/g, "."],
                            [l, "iOS"]
                        ],
                        [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                        [
                            [l, "Mac OS"],
                            [d, /_/g, "."]
                        ],
                        [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                        [l, d]
                    ]
                },
                v = function e(t, n) {
                    if ("object" === r(t) && (n = t, t = void 0), !(this instanceof e)) return new e(t, n).getResult();
                    var i = t || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : ""),
                        a = n ? h.extend(T, n) : T;
                    return this.getBrowser = function() {
                        var e = {
                            name: void 0,
                            version: void 0
                        };
                        return m.rgx.call(e, i, a.browser), e.major = h.major(e.version), e
                    }, this.getCPU = function() {
                        var e = {
                            architecture: void 0
                        };
                        return m.rgx.call(e, i, a.cpu), e
                    }, this.getDevice = function() {
                        var e = {
                            vendor: void 0,
                            model: void 0,
                            type: void 0
                        };
                        return m.rgx.call(e, i, a.device), e
                    }, this.getEngine = function() {
                        var e = {
                            name: void 0,
                            version: void 0
                        };
                        return m.rgx.call(e, i, a.engine), e
                    }, this.getOS = function() {
                        var e = {
                            name: void 0,
                            version: void 0
                        };
                        return m.rgx.call(e, i, a.os), e
                    }, this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }, this.getUA = function() {
                        return i
                    }, this.setUA = function(e) {
                        return i = e, this
                    }, this
                };
            v.VERSION = "0.7.20", v.BROWSER = {
                NAME: l,
                MAJOR: "major",
                VERSION: d
            }, v.CPU = {
                ARCHITECTURE: "architecture"
            }, v.DEVICE = {
                MODEL: s,
                VENDOR: u,
                TYPE: c,
                CONSOLE: "console",
                MOBILE: f,
                SMARTTV: "smarttv",
                TABLET: p,
                WEARABLE: "wearable",
                EMBEDDED: "embedded"
            }, v.ENGINE = {
                NAME: l,
                VERSION: d
            }, v.OS = {
                NAME: l,
                VERSION: d
            }, "undefined" !== r(t) ? ("undefined" !== r(e) && e.exports && (t = e.exports = v), t.UAParser = v) : void 0 === (i = function() {
                return v
            }.call(t, n, t, e)) || (e.exports = i);
            var y = o && (o.jQuery || o.Zepto);
            if ("undefined" !== r(y) && !y.ua) {
                var b = new v;
                y.ua = b.getResult(), y.ua.get = function() {
                    return b.getUA()
                }, y.ua.set = function(e) {
                    b.setUA(e);
                    var t = b.getResult();
                    for (var n in t) y.ua[n] = t[n]
                }
            }
        }("object" === ("undefined" == typeof window ? "undefined" : r(window)) ? window : this)
    }).call(this, n(1)(e))
}, function(e, t, n) {
    "use strict";
    CNN = CNN || {}, CNN.Features = CNN.Features || {}, CNN.Features.enableUserConsent = !!CNN.Features.enableUserConsent, CNN.UserConsentConfig = CNN.UserConsentConfig || {
        confirmCookie: "OptanonAlertBoxClosed",
        consentCookie: "OptanonConsent",
        gdprAppliesGlobally: !1,
        src: ""
    }, CNN.UserConsent = function(e, t) {
        function n(e) {
            var t = new RegExp("(^|;)\\s*".concat(e, "\\s*=\\s*([^;]+)")),
                n = document.cookie.match(t);
            return n ? n.pop() : null
        }
        var i = function() {
                var e = !1,
                    t = n("geoData");
                if (null !== t) {
                    var i = t.split("|");
                    i.length > 4 && (e = -1 !== ("?" === i[3] ? "" : i[3].toUpperCase()).search(/^(GB|DE|FR|IT|ES|PL|RO|NL|BE|GR|CZ|PT|SE|HU|AT|BG|DK|FI|SK|IE|HR|LT|SI|LV|EE|CY|LU|MT|NO|IS|LI)$/))
                }
                return e
            }(),
            r = !1 === CNN.Features.enableUserConsent || !i,
            o = {
                2: "performance",
                3: "personalization",
                4: "advertising",
                8: "social"
            };

        function a() {
            var e = n(CNN.UserConsentConfig.confirmCookie),
                i = n(CNN.UserConsentConfig.consentCookie),
                a = {
                    required: !0,
                    performance: r,
                    personalization: r,
                    advertising: r,
                    social: r
                };
            if (!e) return i && (t.cookie = "".concat(CNN.UserConsentConfig.consentCookie, "=; Domain=.cnn.com; Path=/; Expires=Thu, 01 Jan 2000 00:00:01 GMT;")), a;
            if (!i) return a;
            for (var s = i.split("&"), l = 0; l < s.length; l++) {
                var c = s[l];
                if (c) {
                    var u = c.split("="),
                        d = u[0],
                        f = u[1];
                    if ("groups" === d && f) {
                        for (var p = decodeURIComponent(f).split(","), h = 0; h < p.length; h++) {
                            var m = p[h].split(":"),
                                g = m[0],
                                T = m[1];
                            g && T && o[g] && (a[o[g]] = "0" !== T)
                        }
                        break
                    }
                }
            }
            return a
        }
        var s, l, c, u = a(),
            d = null,
            f = new Event("optanonLoaded");
        return !0 === CNN.Features.enableUserConsent && (c = t.createElement("script"), s = d, "string" == typeof(l = n(CNN.UserConsentConfig.confirmCookie)) && 0 !== l.length && (s = new Date(l), !0 === e.isNaN(s.valueOf()) && (s = null)), null !== (d = s) && (u = a(), c.async = !0), c.addEventListener("load", (function() {
            t.dispatchEvent(f)
        }), !1), c.src = CNN.UserConsentConfig.src, t.getElementsByTagName("head")[0].appendChild(c)), e.OptanonWrapper = function() {
            setTimeout((function() {
                var t;
                (t = a()).performance === u.performance && t.personalization === u.personalization && t.advertising === u.advertising && t.social === u.social || e.location.reload()
            }), 2e3)
        }, {
            getConsentState: function() {
                return u
            },
            getConsentTime: function() {
                return d
            },
            getUserConsentPerformanceState: function() {
                return u.performance
            },
            getUserConsentPersonalizationState: function() {
                return u.personalization
            },
            getUserConsentAdvertisingState: function() {
                return u.advertising
            },
            getUserConsentSocialState: function() {
                return u.social
            },
            inUserConsentState: function(e) {
                var t;
                for (e = Array.isArray(e) ? e : [e], t = 0; t < e.length; t++)
                    if (!1 === u[e[t]]) return !1;
                return !0
            },
            isEnabled: function() {
                return CNN.Features.enableUserConsent
            },
            isInGdprRegion: function() {
                return i
            }
        }
    }(window, document), !0 === CNN.Features.enableUserConsent && !0 === CNN.UserConsent.isInGdprRegion() && function(e, t) {
        function n(e) {
            var n, i = "string" == typeof e.data;
            try {
                n = i ? JSON.parse(e.data) : e.data
            } catch (e) {
                n = {}
            }
            if (n.__cmpCall) {
                var r = n.__cmpCall;
                t.__cmp(r.command, r.parameter, (function(t, n) {
                    var o = {
                        __cmpReturn: {
                            returnValue: t,
                            success: n,
                            callId: r.callId
                        }
                    };
                    e.source.postMessage(i ? JSON.stringify(o) : o, "*")
                }))
            }
        }! function n() {
            if (!t.frames.__cmpLocator)
                if (e.body) {
                    var i = e.createElement("iframe");
                    i.style = "display:none", i.name = "__cmpLocator", e.body.appendChild(i)
                } else setTimeout(n, 5)
        }(), "function" != typeof t.__cmp && (t.__cmp = function() {
            var e = arguments,
                n = !0 === CNN.UserConsentConfig.gdprAppliesGlobally;
            if (t.__cmp.a = t.__cmp.a || [], !e.length) return t.__cmp.a;
            "ping" === e[0] ? e[2]({
                gdprAppliesGlobally: n,
                cmpLoaded: !1
            }, !0) : t.__cmp.a.push([].slice.apply(e))
        }, t.__cmp.msgHandler = n, t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n))
    }(document, window)
}, function(e, t, n) {
    var i;
    (function() {
        function t(e) {
            return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }! function(r) {
            "use strict";
            var o = function() {},
                a = r.requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.msRequestAnimationFrame || function(e) {
                    return setTimeout(e, 16)
                };

            function s() {
                this.reads = [], this.writes = [], this.raf = a.bind(r), o("initialized", this)
            }

            function l(e) {
                e.scheduled || (e.scheduled = !0, e.raf(c.bind(null, e)), o("flush scheduled"))
            }

            function c(e) {
                o("flush");
                var t, n = e.writes,
                    i = e.reads;
                try {
                    o("flushing reads", i.length), u(i), o("flushing writes", n.length), u(n)
                } catch (e) {
                    t = e
                }
                if (e.scheduled = !1, (i.length || n.length) && l(e), t) {
                    if (o("task errored", t.message), !e.catch) throw t;
                    e.catch(t)
                }
            }

            function u(e) {
                var t;
                for (o("run tasks"); t = e.shift();) t()
            }

            function d(e, t) {
                var n = e.indexOf(t);
                return !!~n && !!e.splice(n, 1)
            }
            s.prototype = {
                constructor: s,
                measure: function(e, t) {
                    o("measure");
                    var n = t ? e.bind(t) : e;
                    return this.reads.push(n), l(this), n
                },
                mutate: function(e, t) {
                    o("mutate");
                    var n = t ? e.bind(t) : e;
                    return this.writes.push(n), l(this), n
                },
                clear: function(e) {
                    return o("clear", e), d(this.reads, e) || d(this.writes, e)
                },
                extend: function(e) {
                    if (o("extend", e), "object" != t(e)) throw new Error("expected object");
                    var n = Object.create(this);
                    return function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    }(n, e), n.fastdom = this, n.initialize && n.initialize(), n
                },
                catch: null
            };
            var f = r.fastdom = r.fastdom || new s;
            void 0 === (i = function() {
                return f
            }.call(f, n, f, e)) || (e.exports = i)
        }("undefined" != typeof window ? window : this)
    }).call(window)
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var i;
    "object" === ("undefined" == typeof fastdom ? "undefined" : n(fastdom)) && "function" != typeof fastdom.read && (i = function(e, t, n) {
        "use strict";
        return {
            defer: function n(i, r) {
                i <= 0 ? r() : (i--, requestAnimationFrame(e.proxy(n, t, i, r)))
            },
            read: function(e, t) {
                return n.measure(e, t)
            },
            sync: function() {},
            write: function(e, t) {
                return n.mutate(e, t)
            }
        }
    }(jQuery, window, fastdom), window.fastdom = fastdom.extend(i))
}, function(e, t) {
    ! function(e, t, n) {
        "use strict";
        e.CurrentSize = n.extend({}, {
            lastKnownHeight: -1,
            lastKnownWidth: -1,
            lastKnownScrollTop: -1,
            getClientHeight: function() {
                return -1 === this.lastKnownHeight && console.warn("getClientHeight: Requesting the height before this object was initialized!"), this.lastKnownHeight
            },
            getClientWidth: function() {
                return -1 === this.lastKnownWidth && console.warn("getClientWidth: Requesting the width before this object was initialized!"), this.lastKnownWidth
            },
            getClientScrollTop: function() {
                return -1 === this.lastKnownScrollTop && console.warn("getClientScrollTop: Requesting the scrollTop before this object was initialized!"), this.lastKnownScrollTop
            },
            trackClientSize: function() {
                var e = n(t).scrollTop();
                this.lastKnownScrollTop = e > 0 ? e : 0, this.lastKnownHeight = n(t).height(), this.lastKnownWidth = n(t).width()
            },
            trackAndStoreClientSize: function() {
                var e = n(t).scrollTop();
                t.sessionStorage.cnnST = this.lastKnownScrollTop = e > 0 ? e : 0, t.sessionStorage.cnnWd = this.lastKnownWidth = n(t).width()
            },
            trackClientScrollTop: function() {
                var e = n(t).scrollTop();
                this.lastKnownScrollTop = e > 0 ? e : 0
            },
            trackAndStoreClientScrollTop: function() {
                var e = n(t).scrollTop();
                t.sessionStorage.cnnST = this.lastKnownScrollTop = e > 0 ? e : 0
            },
            readySetGo: function() {
                var e = !1,
                    i = "__testing";
                try {
                    t.sessionStorage.setItem(i, i), t.sessionStorage.removeItem(i), e = !0
                } catch (e) {}
                this.lastKnownHeight = n(t).height(), this.lastKnownWidth = n(t).width(), !1 === e ? (this.lastKnownScrollTop = n(t).scrollTop() || 0, n(t).on("scroll", n.proxy(this.trackClientScrollTop, this)), n(t).on("resize", n.proxy(this.trackClientSize, this))) : (t.sessionStorage.cnnLP === t.location.pathname && t.sessionStorage.cnnWd === this.lastKnownWidth && t.sessionStorage.cnnLT > Date.now() - 36e5 ? this.lastKnownScrollTop = t.sessionStorage.cnnScrollTop || 0 : (this.lastKnownScrollTop = n(t).scrollTop() || 0, t.sessionStorage.cnnST = this.lastKnownScrollTop, t.sessionStorage.cnnLP = t.location.pathname), t.sessionStorage.cnnLT = Date.now(), n(t).on("scroll", n.proxy(this.trackAndStoreClientScrollTop, this)), n(t).on("resize", n.proxy(this.trackAndStoreClientSize, this)))
            }
        }, e.CurrentSize), e.CurrentSize.readySetGo()
    }(CNN, window, jQuery)
}, function(e, t) {
    ! function(e, t) {
        "use strict";
        var n = e.CurrentSize && "function" == typeof e.CurrentSize.getClientWidth ? e.CurrentSize.getClientWidth() : -1;
        t.desktopSSID = e.AdsConfig.desktopSSID, t.mobileSSID = e.AdsConfig.mobileSSID, t.randNum = Math.floor(9e4 * Math.random()) + 1e4, t.ssid = n < 600 ? t.mobileSSID : t.desktopSSID, t.fw_params = {
            scan_delay: 0,
            server: "bea4.v.fwmrm.net",
            network_id: e.AdsConfig.fwNetworkId,
            profile: e.AdsConfig.fwProfile,
            site_section_id: t.ssid,
            other_global_params: "csid=" + t.ssid + "&pvrn=" + t.randNum,
            key_values: "cnn_platform=offdeck"
        }
    }(CNN, window)
}, function(e, t) {
    if (CNN = window.CNN || {}, CNN.AdsConfig = CNN.AdsConfig || {}, !CNN.AdsConfig.amazonOverride) {
        function n(e, t) {
            e.write(t), e.close()
        }
        var i, r = r || {};
        r.CPM_JS || (r.CSM_JS = "//c.amazon-adsystem.com/aax2/csm.js.gz"), (i = function(e, t, r) {
            "use strict";

            function o(t, n, i) {
                this.startTime = null, this.stopTime = null, this.sourceId = n, this.sync = t, this.mode = i, this.latency = null, o.prototype.startTimer = function() {
                    this.startTime = Date.now()
                }, o.prototype.stopTimer = function() {
                    this.stopTime = Date.now()
                }, o.prototype.stopTimerAndReportLatency = function() {
                    this.stopTimer(), this.calculateLatency(), this.isThrottled() || this.reportLatency()
                }, o.prototype.calculateLatency = function() {
                    this.latency = this.stopTime - this.startTime
                }, o.prototype.isThrottled = function() {
                    var t = parseInt(e.latencySamplingRate, 10);
                    if (!isNaN(t)) {
                        if (0 == t) return !0;
                        if (100 == t) return !1;
                        if (t >= 100 * Math.random()) return !1
                    }
                    return !0
                }, o.prototype.reportLatency = function() {
                    var t, n;
                    null != this.latency && this.latency > 0 && (t = '/{"c":"dtb","src":"' + this.sourceId + '","' + (this.sync ? "bls" : "bla") + '":"' + this.latency + '","m":"' + this.mode + '"}', n = e.protocol + e.host + e.px_svc + "PH" + t, (new Image).src = n)
                }
            }
            var a, s, l = "https:" === t.location.protocol;
            return e.latencyUtil = e.latencyUtil || null, e.protocol = l ? "https://" : "http://", e.DEFAULT_HOST = "aax.amazon-adsystem.com", e.host = e.DEFAULT_HOST, e.dtb_svc = "/e/dtb/bid", e.pb_svc = "/x/getad", e.px_svc = "/x/px/", e.debug_mode = e.debug_mode || !1, e.MIN_TIMEOUT = 0, e.DEFAULT_TIMEOUT = 1e3, e.targetingKey = "amznslots", e.latencySamplingRate = 1, e.vidKey = "amzn_vid", e.tasks = e.tasks || [], e.VIEWABILITY_CUTOFF_AREA = e.VIEWABILITY_CUTOFF_AREA || .5, e.VIEWABILITY_CUTOFF_DURATION_SEC = e.VIEWABILITY_CUTOFF_DURATION_SEC || 1, e.CSM_JS = "//c.amazon-adsystem.com/aax2/csm.js.gz", e.vads = {}, "_d", a = !1, (s = new function() {
                this.metrics = {}, this.t0 = Date.now(), this.i = 0, this.addTimer = function(e, t) {
                    t || (t = Date.now()), this.metrics[e] = t - this.t0
                }, this.set = function(e, t) {
                    this.metrics[e] = t
                }, this.schedule = function(t, n) {
                    var i = this;
                    t || (t = 5e3), n || (n = "PH"), n += "/", setTimeout((function() {
                        var t, r;
                        i.metrics.i = i.i, i.metrics.t0 = i.t0, i.metrics.site = i.getTopDomain(e), t = JSON.stringify(i.metrics), r = e.protocol + e.host + e.px_svc + n + encodeURIComponent(t), (new Image).src = r, i.metrics = {}, i.t0 = Date.now(), i.i++
                    }), t)
                }, this.getTopDomain = function(e) {
                    var t = decodeURIComponent(e.getReferrerURL());
                    return (t.indexOf("://") > -1 ? t.split("/")[2] : t.split("/")[0]).split(":")[0]
                }
            }).addTimer("tlt"), e.ads || (e.ads = {}), e.updateAds = function(t) {
                var n, i;
                if (a = !0, e.ads = t.ads, e.ev = t.ev, t.vads) {
                    for (n in e.vads = t.vads, e.ads || (e.ads = {}), i = !1, t.vads) t.vads.hasOwnProperty(n) && -1 != n.indexOf("_d") && (e.ads[n] = t.vads[n], e.amzn_vid = t.vads[n], i = !0);
                    if (!i)
                        for (n in t.vads) t.vads.hasOwnProperty(n) && (e.ads[n] = t.vads[n], e.amzn_vid = t.vads[n])
                }
                e.doAllTasks(), e.tasks.push = function(t) {
                    e.doTask(t)
                };
                try {
                    t.lsr && (e.latencySamplingRate = t.lsr), t.rm && (s.addTimer("br"), s.set("brs", "1"), s.schedule(t.to, t.id)), null != e.latencyUtil && e.latencyUtil.stopTimerAndReportLatency()
                } catch (e) {}
            }, e.aaxPunt = function(e) {
                try {
                    a = !0, s.addTimer("br"), s.set("brs", "0"), e && e.rm && s.schedule(e.to, e.id)
                } catch (e) {}
            }, e.saveAds = function(t) {
                e.saved_ads = t.ads, e.updateAds(t)
            }, e.getAdForSlot = function(i, r, o) {
                var a, s, l, c;
                e.src_id = i, s = (a = a || {}).u, e.host = 3e3 == i ? "aax-cpm.amazon-adsystem.com" : e.host, s || (s = e.getReferrerURL()), s && -1 !== s.indexOf("amzn_debug_mode") && (e.debug_mode = !0), l = "src=" + e.src_id + "&slot_uuid=" + r + "&c=100&u=" + s + "&cb=" + Math.round(1e7 * Math.random()), c = e.protocol + e.host + e.pb_svc + "?jsd=1&" + l, o ? e.appendScriptTag(c) : n(t, "<script type='text/javascript' src='" + c + "'><\/script>")
            }, e.getAdsCallback = function(t, n, i, r, o) {
                var a = null;
                o = o || {};
                try {
                    n && "function" == typeof n && (a = e.handleCallBack(n, i))
                } catch (e) {}
                o.to || (o.to = i), e.doGetAdsAsync(t, r, o, a)
            }, e.getVideoAdsCallback = function(t, n, i, r, o) {
                (o = o || {}).mt = "V", e.getAdsCallback(t, n, i, r, o)
            }, e.getDisplayAdsCallback = function(t, n, i, r, o) {
                (o = o || {}).mt = "D", e.getAdsCallback(t, n, i, r, o)
            }, e.getAdsAsync = function(t, n, i) {
                e.doGetAdsAsync(t, n, i)
            }, e.getVideoAdsAsync = function(t, n, i) {
                (i = i || {}).mt = "V", e.getAdsAsync(t, n, i)
            }, e.getDisplayAdsAsync = function(t, n, i) {
                (i = i || {}).mt = "D", e.getAdsAsync(t, n, i)
            }, e.handleCallBack = function(t, n) {
                var i = !1,
                    o = null,
                    a = function(e) {
                        if (!i) {
                            try {
                                t(e), o && clearTimeout(o), e || s.set("to", "1")
                            } catch (e) {}
                            i = !0
                        }
                    },
                    l = e.getValidMilliseconds(n);
                return o = l ? r.setTimeout(a, l) : r.setTimeout(a, e.DEFAULT_TIMEOUT), a
            }, e.getValidMilliseconds = function(t) {
                if (!t) return !1;
                try {
                    var n = ~~Number(t);
                    if (n > e.MIN_TIMEOUT) return n
                } catch (e) {
                    return !1
                }
                return !1
            }, e.getAds = function(i, r, l, c) {
                if (a = !1, c) e.doGetAdsAsync(i, r, l);
                else {
                    var u = e.getScriptSource(i, r, l);
                    try {
                        e.latencyUtil = new o(!0, i, l && l.mt ? l.mt : "DV"), e.latencyUtil.startTimer(), s.addTimer("sb"), s.set("src", i)
                    } catch (e) {}
                    u && n(t, "<script type='text/javascript' src='" + u + "'><\/script>")
                }
            }, e.getVideoAds = function(t, n, i, r) {
                (i = i || {}).mt = "V", e.getAds(t, n, i, r)
            }, e.getDisplayAds = function(t, n, i, r) {
                (i = i || {}).mt = "D", e.getAds(t, n, i, r)
            }, e.doGetAdsAsync = function(t, n, i, r) {
                a = !1;
                var l = e.getScriptSource(t, n, i);
                try {
                    e.latencyUtil = new o(!1, t, i && i.mt ? i.mt : "DV"), e.latencyUtil.startTimer(), s.addTimer("ab"), s.set("src", t)
                } catch (e) {}
                e.appendScriptTag(l, r)
            }, e.getScriptSource = function(n, i, r) {
                var o, a, l, c, u;
                if (!e.ssb) {
                    if (e.src_id = n, o = (r = r || {}).u, a = r.d, l = r.to, c = r.mt, o || (o = e.getReferrerURL()), o && -1 !== o.indexOf("amzn_debug_mode") && (e.debug_mode = !0), r.mt && "V" != r.mt && "DV" != r.mt || e.vads && (e.vads = {}, delete e.amzn_vid), e.ads && (e.clearTargetingFromGPTAsync(), e.ads = {}), e.startTime && s.addTimer("st", e.startTime), e.saved_ads && (e.ads = e.saved_ads), a) try {
                        t.domain = a
                    } catch (e) {}
                    return u = "src=" + n + "&u=" + o + "&cb=" + Math.round(1e7 * Math.random()), i && (u += "&sz=" + i), l && (u += "&t=" + l), c && (u += "&mt=" + c), e.protocol + e.host + e.dtb_svc + "?" + u
                }
                e.ssb = !1
            }, e.getReferrerURL = function() {
                var n = encodeURIComponent(t.documentURI);
                try {
                    (n = encodeURIComponent(r.top.location.href)) && "undefined" != n || (n = e.detectIframeAndGetURL())
                } catch (t) {
                    n = e.detectIframeAndGetURL()
                }
                return n
            }, e.detectIframeAndGetURL = function() {
                try {
                    if (r.top !== r.self) return encodeURIComponent(t.referrer)
                } catch (e) {
                    return encodeURIComponent(t.documentURI)
                }
            }, e.appendScriptTag = function(e, n) {
                var i, r;
                if (e || !n || "function" != typeof n) {
                    i = t.getElementsByTagName("script")[0], (r = t.createElement("script")).type = "text/javascript", r.async = !0, e && (r.src = e);
                    try {
                        n && "function" == typeof n && (r.readyState ? r.onreadystatechange = function() {
                            ("loaded" == r.readyState || "complete" == r.readyState) && (r.onreadystatechange = null, n(!0))
                        } : r.onload = function() {
                            n(!0)
                        })
                    } catch (e) {}
                    i.parentNode.insertBefore(r, i)
                } else n.apply(this, [!0])
            }, e.renderAd = function(t, i) {
                var r, o, a, l, c;
                if (e.ads[i]) s.addTimer("imp"), r = e.ads[i], e.ev && (o = "amznad" + Math.round(1e6 * Math.random()), r = (r = r.replace("window.top.amznads.detectViewability", "window.amzncsm.rmD")).replace(/id=[^ ]*/, 'id="' + o + '"'), a = "<script type='text/javascript' src='" + e.CSM_JS + "'><\/script>\n", e.host != e.DEFAULT_HOST && (a += "<script type='text/javascript'>try{amzncsm.host=window.top.amznads.host;}catch(e){amzncsm.host=amznads.host;}<\/script>\n"), r = a + r), n(t, r);
                else {
                    s.set("kvm", "1"), (l = new Object).c = "dtb", l.src = e.src_id, l.kvmismatch = 1, l.pubReturnedKey = i, l.aaxReturnedKeys = e.getTokens(), l.cb = Math.round(1e7 * Math.random());
                    try {
                        l.u = encodeURIComponent(location.host + location.pathname), navigator && (l.ua = encodeURIComponent(navigator.userAgent))
                    } catch (e) {}
                    c = encodeURIComponent(JSON.stringify(l)), n(t, "<img src='" + (e.protocol + e.host + "/x/px/p/0/" + c) + "'/>")
                }
            }, e.hasAds = function(t) {
                var n;
                if (!t) try {
                    return Object.keys(e.ads).length > 0
                } catch (t) {
                    for (n in e.ads)
                        if (e.ads.hasOwnProperty(n)) return !0
                }
                for (n in e.ads)
                    if (e.ads.hasOwnProperty(n) && n.indexOf(t) > 0) return !0;
                return !1
            }, e.getTargeting = function(t) {
                var n = {},
                    i = 0;
                e.getTokens() && e.getTokens().length > 0 ? (i = 1, n[e.targetingKey] = e.getTokens(), e.amzn_vid && (n[e.vidKey] = e.amzn_vid)) : a || (i = 2);
                try {
                    s.addTimer("gk"), s.set("gks", i)
                } catch (e) {}
                return n
            }, e.setTargeting = function(t, n) {
                var i;
                for (i in e.ads)
                    if (e.ads.hasOwnProperty(i)) {
                        if (n && i.indexOf(n) < 0) continue;
                        t(i, "1")
                    }
            }, e.setTargetingForGPTAsync = function(t) {
                var n, r;
                try {
                    if (t) e.targetingKey = t, void 0 !== (n = e.getTokens()) && n.length > 0 && googletag.cmd.push((function() {
                        googletag.pubads().setTargeting(t, n), e.amzn_vid && googletag.pubads().setTargeting(e.vidKey, e.amzn_vid)
                    }));
                    else
                        for (r in e.ads) e.ads.hasOwnProperty(r) && function() {
                            var t = r;
                            googletag.cmd.push((function() {
                                i.debug_mode, googletag.pubads().setTargeting(t, "1"), e.amzn_vid && googletag.pubads().setTargeting(e.vidKey, e.amzn_vid)
                            }))
                        }()
                } catch (e) {}
            }, e.setTargetingForGPTSync = function(t) {
                var n, i;
                try {
                    if (t) e.targetingKey = t, void 0 !== (n = e.getTokens()) && n.length > 0 && (googletag.pubads().setTargeting(t, n), e.amzn_vid && googletag.pubads().setTargeting(e.vidKey, e.amzn_vid));
                    else
                        for (i in e.ads) e.ads.hasOwnProperty(i) && (googletag.pubads().setTargeting(i, "1"), e.amzn_vid && googletag.pubads().setTargeting(e.vidKey, e.amzn_vid))
                } catch (e) {}
            }, e.clearTargetingFromGPTAsync = function() {
                try {
                    googletag && googletag.pubads() && googletag.pubads().clearTargeting(e.targetingKey), googletag.pubads().clearTargeting(e.vidKey)
                } catch (e) {}
            }, e.appendTargetingToAdServerUrl = function(t) {
                var n;
                try {
                    for (n in -1 === t.indexOf("?") && (t += "?"), e.ads) e.ads.hasOwnProperty(n) && (t += "&" + n + "=1")
                } catch (e) {}
                return t
            }, e.appendTargetingToQueryString = function(t) {
                var n;
                try {
                    for (n in e.ads) e.ads.hasOwnProperty(n) && (t += "&" + n + "=1")
                } catch (e) {}
                return t
            }, e.getTokens = function(t) {
                var n, i = [];
                try {
                    for (n in e.ads)
                        if (e.ads.hasOwnProperty(n)) {
                            if (t && n.indexOf(t) < 0) continue;
                            i.push(n)
                        }
                } catch (e) {}
                return i
            }, e.getKeys = e.getTokens, e.getVid = function() {
                return e.amzn_vid
            }, e.doAllTasks = function() {
                for (; e.tasks.length > 0;) {
                    var t = e.tasks.shift();
                    e.doTask(t)
                }
            }, e.doTask = function(e) {
                try {
                    e.call()
                } catch (e) {}
            }, e.tryGetAdsAsync = function() {
                e.ssb && e.__ads && e.updateAds(e.__ads), e.asyncParams && (e.startTime = e.asyncParams.startTime, e.getAdsCallback(e.asyncParams.id, e.asyncParams.callbackFn, e.asyncParams.timeout, e.asyncParams.size, e.asyncParams.data))
            }, e
        }(i || {}, document, window)).tryGetAdsAsync(), window.amzn_ads = function(e) {
            "use strict";
            try {
                i.updateAds(e)
            } catch (e) {}
        }, window.amznads = i
    }
}, function(e, t) {
    CNN = CNN || {}, CNN.bundleHost = CNN.bundleHost || "/",
        function(e, t) {
            "use strict";
            var n, i, r, o, a, s, l, c, u, d = e.WebpackAssets || [],
                f = {},
                p = {};
            n = function(e) {
                return (f = f || {})[e]
            }, o = function(e) {
                e.progress({
                    isLoaded: !0,
                    exists: !0
                })
            }, r = function(e) {
                e.reject({
                    isLoaded: !1,
                    exists: !0
                })
            }, a = function(e) {
                e.resolve({
                    isLoaded: !0,
                    exists: !0
                })
            }, i = function(e) {
                e.reject({
                    isLoaded: !1,
                    exists: !0
                })
            }, s = function() {
                t("[data-bundle]").each((function(n, i) {
                    var r = t(i).data().bundle,
                        o = t(i).data().host || "",
                        a = t(i).data().source || "";
                    a ? e.INJECTOR.loadFeatureForSource(r, a) : o ? e.INJECTOR.loadFeatureForHost(r, o) : e.INJECTOR.loadFeature(r)
                }))
            }, l = function(e) {
                var n = t.Deferred();
                return t.ajax({
                    dataType: "script",
                    cache: !0,
                    url: e
                }).done((function() {
                    n.resolve()
                })).fail((function() {
                    n.reject()
                })), n
            }, u = function(e) {
                var t, n, i = "",
                    r = 0,
                    o = 0;
                for (r = 0; r < d.length; r++)
                    for (t = (n = d[r]).chunkNames, o = 0; o < t.length; o++) t[o] === e && (i = n.name);
                return i
            }, e.INJECTOR = e.INJECTOR || {}, e.INJECTOR.readyState = "loading", e.INJECTOR.createDeferredForFeature = function(e) {
                return f[e] = t.Deferred(), f[e]
            }, e.INJECTOR.registerEvents = function(e) {
                for (var n = 0; n < e.length; n++) f.footer ? f.footer.done(t(document)[e[n]](s)) : document.addEventListener(e[n], s)
            }, e.INJECTOR.getUrlForFeatureName = function(t, n) {
                var i = e.bundleHost,
                    r = u(t),
                    o = "";
                return (n = n || {}).params && (o = n.params), i + r + o
            }, e.INJECTOR.loadFeature = function(r) {
                var o = n(r),
                    s = e.INJECTOR.getUrlForFeatureName(r, {});
                return void 0 === o && "rejected" !== (o = e.INJECTOR.createDeferredForFeature(r)).state() && l(s).then(t.proxy(a, null, o), t.proxy(i, null, o)), o.promise()
            }, e.INJECTOR.loadFeatureForSource = function(r, o) {
                var s = o,
                    c = n(r);
                return void 0 === c && "rejected" !== (c = e.INJECTOR.createDeferredForFeature(r)).state() && l(s).then(t.proxy(a, null, c), t.proxy(i, null, c)), c.promise()
            }, e.INJECTOR.loadFeatureForHost = function(r, o) {
                var s = o + u(r),
                    c = n(r);
                return void 0 === c && "rejected" !== (c = e.INJECTOR.createDeferredForFeature(r)).state() && l(s).then(t.proxy(a, null, c), t.proxy(i, null, c)), c.promise()
            }, e.INJECTOR.executeFeature = function(i, a) {
                var s = n(i),
                    c = e.INJECTOR.getUrlForFeatureName(i, a);
                return void 0 === s && "rejected" !== (s = e.INJECTOR.createDeferredForFeature(i, a)).state() && l(c).then(t.proxy(o, null, s), t.proxy(r, null, s)), s.promise()
            }, e.INJECTOR.scriptComplete = function(e) {
                f[e].resolve({
                    isLoaded: !0,
                    exists: !0,
                    executed: !0
                })
            }, e.INJECTOR.resetNameSpaceFeature = function(e) {
                p[e] = t.Deferred()
            }, e.INJECTOR.getNameSpaceFeature = function(e) {
                var n, i, r = e.split("."),
                    o = window,
                    a = !0;
                if (p[e]) n = p[e].promise();
                else {
                    for (p[e] = t.Deferred(), n = p[e].promise(), i = 0; i < r.length; i++) void 0 === (o = o[r[i]]) && (a = !1);
                    a ? p[e].resolve({
                        isLoaded: !0
                    }) : p[e].reject({
                        isLoaded: !1
                    })
                }
                return n
            }, e.INJECTOR.readyState = "ready", document.createEvent ? (c = document.createEvent("Event")).initEvent("injectorReady", !1, !0) : c = new Event("injectorReady"), document.dispatchEvent(c)
        }(CNN, jQuery)
}, function(e, t, n) {
    (function(t) {
        e.exports = t.eqjs = n(82)
    }).call(this, n(0))
}, function(e, t, n) {
    var i;
    ! function(r) {
        "use strict";

        function o() {
            this.nodes = [], this.eqsLength = 0, this.widths = [], this.points = [], this.callback = void 0
        }

        function a(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, (function() {
                return n.call(e, window.event)
            }))
        }

        function s(e) {
            return window.getComputedStyle(e, ":before").getPropertyValue("content").slice(1, -1)
        }
        o.prototype.query = function(e, t) {
            var n, i = Object.getPrototypeOf(r);
            t && "function" == typeof t && (i.callback = t), e && "number" != typeof e ? n = e.length : (e = i.nodes, n = i.nodesLength);
            var o, a = [],
                l = [];
            for (o = 0; o < n; o++) {
                var c = e[o].getBoundingClientRect(),
                    u = c.width;
                void 0 === u && (u = c.right - c.left), a.push(u);
                try {
                    l.push(i.sortObj(e[o].getAttribute("data-eq-pts")))
                } catch (t) {
                    try {
                        l.push(i.sortObj(s(e[o])))
                    } catch (e) {
                        l.push([{
                            key: "",
                            value: 0
                        }])
                    }
                }
            }
            i.widths = a, i.points = l, e && "number" != typeof e ? i.nodeWrites(e, a, l) : t && "function" != typeof t ? i.nodeWrites() : window.requestAnimationFrame(i.nodeWrites)
        }, o.prototype.nodeWrites = function(e) {
            var t, n, i, o, a, s, l, c = Object.getPrototypeOf(r),
                u = c.widths,
                d = c.points;
            for (e && "number" != typeof e ? o = e.length : (e = c.nodes, o = c.nodesLength), t = 0; t < o; t++) {
                var f = u[t],
                    p = e[t],
                    h = d[t],
                    m = [],
                    g = h.length;
                if (f < h[0].value) l = null;
                else if (f >= h[g - 1].value) {
                    for (i = 0; i < g; i++) m.push(h[i].key);
                    l = m.join(" ")
                } else
                    for (n = 0; n < g; n++) {
                        var T = h[n],
                            v = h[n + 1];
                        if (m.push(T.key), 0 === n && f < T.value) {
                            l = null;
                            break
                        }
                        if (void 0 !== v && void 0 === v.value) {
                            m.push(v.key), l = m.join(" ");
                            break
                        }
                        if (f >= T.value && f < v.value) {
                            l = m.join(" ");
                            break
                        }
                    }
                null === l ? p.removeAttribute("data-eq-state") : p.setAttribute("data-eq-state", l), s = new CustomEvent("eqResize", {
                    detail: l,
                    bubbles: !0
                }), p.dispatchEvent(s)
            }
            c.callback && (a = c.callback, c.callback = void 0, a(e))
        }, o.prototype.refreshNodes = function() {
            var e = Object.getPrototypeOf(r);
            e.nodes = document.querySelectorAll("[data-eq-pts]"), s(document.querySelector("html")).split(", ").forEach((function(t) {
                var n, i;
                "" !== t && (e.nodes = (n = e.nodes, i = document.querySelectorAll(t), [].slice.call(n).concat([].slice.call(i))))
            })), e.nodesLength = e.nodes.length
        }, o.prototype.sortObj = function(e) {
            for (var t = [], n = e.split(","), i = 0; i < n.length; i++) {
                var r = n[i].split(":");
                t.push({
                    key: r[0].replace(/^\s+|\s+$/g, ""),
                    value: parseFloat(r[1])
                })
            }
            return t.sort((function(e, t) {
                return e.value - t.value
            }))
        }, o.prototype.definePts = function(e, t) {
            return t = t || {}, t = (t = (t = (t = (t = JSON.stringify(t)).substring(1, t.length - 1)).replace(/:/g, ": ")).replace(/,/g, ", ")).replace(/"/g, ""), e.setAttribute("data-eq-pts", t), t
        }, o.prototype.all = function(e) {
            var t = Object.getPrototypeOf(r),
                n = !!e;
            t.refreshNodes(), n ? t.query(void 0, e) : window.requestAnimationFrame(t.query)
        }, r = r || new o, a(window, "DOMContentLoaded", (function() {
            r.all(!1)
        })), a(window, "load", (function() {
            r.all(!0)
        })), a(window, "resize", (function() {
            r.all(!0)
        })), e.exports ? e.exports = r : void 0 === (i = function() {
            return r
        }.call(t, n, t, e)) || (e.exports = i)
    }(window.eqjs)
}]);