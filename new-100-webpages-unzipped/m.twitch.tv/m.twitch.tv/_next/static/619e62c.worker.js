! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
                i: r,
                l: !1,
                exports: {}
            },
            i = !0;
        try {
            t[r].call(o.exports, o, o.exports, n), i = !1
        } finally {
            i && delete e[r]
        }
        return o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = "Pcr7")
}({
    "+nN8": function(t, e, n) {
        var r = n("MrWc"),
            o = n("ApsS");
        n("2qJG")("keys", function() {
            return function(t) {
                return o(r(t))
            }
        })
    },
    "+s2R": function(t, e, n) {
        "use strict"
    },
    "/QkT": function(t, e, n) {
        "use strict"
    },
    "/r3m": function(t, e, n) {
        "use strict";
        var r = n("S7IX")(!0);
        n("S49y")(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    },
    "0lEX": function(t, e, n) {
        "use strict"
    },
    "1bLK": function(t, e, n) {
        var r = n("vbc5"),
            o = n("hR4s").document,
            i = r(o) && r(o.createElement);
        t.exports = function(t) {
            return i ? o.createElement(t) : {}
        }
    },
    "1sfF": function(t, e, n) {
        var r = n("M25K"),
            o = n("eD9m")("iterator"),
            i = n("tReM");
        t.exports = n("rFq9").getIteratorMethod = function(t) {
            if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)]
        }
    },
    "1srY": function(t, e, n) {
        n("CrJZ"), t.exports = n("rFq9").Object.getOwnPropertySymbols
    },
    "2G83": function(t, e, n) {
        "use strict"
    },
    "2qJG": function(t, e, n) {
        var r = n("IFjL"),
            o = n("rFq9"),
            i = n("7S/a");
        t.exports = function(t, e) {
            var n = (o.Object || {})[t] || Object[t],
                s = {};
            s[t] = e(n), r(r.S + r.F * i(function() {
                n(1)
            }), "Object", s)
        }
    },
    3555: function(t, e, n) {
        var r = n("UwCj"),
            o = n("8fQz"),
            i = n("ApsS");
        t.exports = n("ObEa") ? Object.defineProperties : function(t, e) {
            o(t);
            for (var n, s = i(e), a = s.length, c = 0; a > c;) r.f(t, n = s[c++], e[n]);
            return t
        }
    },
    "3ioZ": function(t, e, n) {
        var r = n("Hs7Z"),
            o = n("VeTy").f;
        n("2qJG")("getOwnPropertyDescriptor", function() {
            return function(t, e) {
                return o(r(t), e)
            }
        })
    },
    "3poC": function(t, e, n) {
        var r = n("IFjL"),
            o = n("Qllj"),
            i = n("Hs7Z"),
            s = n("VeTy"),
            a = n("9bSt");
        r(r.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                for (var e, n, r = i(t), c = s.f, u = o(r), l = {}, f = 0; u.length > f;) void 0 !== (n = c(r, e = u[f++])) && a(l, e, n);
                return l
            }
        })
    },
    "3thp": function(t, e, n) {
        n("wnlw"), t.exports = n("rFq9").Array.isArray
    },
    "3yYM": function(t, e, n) {
        var r = function(t) {
            "use strict";
            var e, n = Object.prototype,
                r = n.hasOwnProperty,
                o = "function" === typeof Symbol ? Symbol : {},
                i = o.iterator || "@@iterator",
                s = o.asyncIterator || "@@asyncIterator",
                a = o.toStringTag || "@@toStringTag";

            function c(t, e, n, r) {
                var o = e && e.prototype instanceof d ? e : d,
                    i = Object.create(o.prototype),
                    s = new k(r || []);
                return i._invoke = function(t, e, n) {
                    var r = l;
                    return function(o, i) {
                        if (r === h) throw new Error("Generator is already running");
                        if (r === p) {
                            if ("throw" === o) throw i;
                            return j()
                        }
                        for (n.method = o, n.arg = i;;) {
                            var s = n.delegate;
                            if (s) {
                                var a = C(s, n);
                                if (a) {
                                    if (a === m) continue;
                                    return a
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (r === l) throw r = p, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = h;
                            var c = u(t, e, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? p : f, c.arg === m) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (r = p, n.method = "throw", n.arg = c.arg)
                        }
                    }
                }(t, n, s), i
            }

            function u(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (r) {
                    return {
                        type: "throw",
                        arg: r
                    }
                }
            }
            t.wrap = c;
            var l = "suspendedStart",
                f = "suspendedYield",
                h = "executing",
                p = "completed",
                m = {};

            function d() {}

            function g() {}

            function v() {}
            var y = {};
            y[i] = function() {
                return this
            };
            var b = Object.getPrototypeOf,
                _ = b && b(b(L([])));
            _ && _ !== n && r.call(_, i) && (y = _);
            var w = v.prototype = d.prototype = Object.create(y);

            function x(t) {
                ["next", "throw", "return"].forEach(function(e) {
                    t[e] = function(t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function O(t) {
                var e;
                this._invoke = function(n, o) {
                    function i() {
                        return new Promise(function(e, i) {
                            ! function e(n, o, i, s) {
                                var a = u(t[n], t, o);
                                if ("throw" !== a.type) {
                                    var c = a.arg,
                                        l = c.value;
                                    return l && "object" === typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then(function(t) {
                                        e("next", t, i, s)
                                    }, function(t) {
                                        e("throw", t, i, s)
                                    }) : Promise.resolve(l).then(function(t) {
                                        c.value = t, i(c)
                                    }, function(t) {
                                        return e("throw", t, i, s)
                                    })
                                }
                                s(a.arg)
                            }(n, o, e, i)
                        })
                    }
                    return e = e ? e.then(i, i) : i()
                }
            }

            function C(t, n) {
                var r = t.iterator[n.method];
                if (r === e) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return", n.arg = e, C(t, n), "throw" === n.method)) return m;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return m
                }
                var o = u(r, t.iterator, n.arg);
                if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, m;
                var i = o.arg;
                return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, m) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
            }

            function E(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function S(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function k(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(E, this), this.reset(!0)
            }

            function L(t) {
                if (t) {
                    var n = t[i];
                    if (n) return n.call(t);
                    if ("function" === typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            s = function n() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                return n.value = e, n.done = !0, n
                            };
                        return s.next = s
                    }
                }
                return {
                    next: j
                }
            }

            function j() {
                return {
                    value: e,
                    done: !0
                }
            }
            return g.prototype = w.constructor = v, v.constructor = g, v[a] = g.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                var e = "function" === typeof t && t.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }, t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, a in t || (t[a] = "GeneratorFunction")), t.prototype = Object.create(w), t
            }, t.awrap = function(t) {
                return {
                    __await: t
                }
            }, x(O.prototype), O.prototype[s] = function() {
                return this
            }, t.AsyncIterator = O, t.async = function(e, n, r, o) {
                var i = new O(c(e, n, r, o));
                return t.isGeneratorFunction(n) ? i : i.next().then(function(t) {
                    return t.done ? t.value : i.next()
                })
            }, x(w), w[a] = "Generator", w[i] = function() {
                return this
            }, w.toString = function() {
                return "[object Generator]"
            }, t.keys = function(t) {
                var e = [];
                for (var n in t) e.push(n);
                return e.reverse(),
                    function n() {
                        for (; e.length;) {
                            var r = e.pop();
                            if (r in t) return n.value = r, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
            }, t.values = L, k.prototype = {
                constructor: k,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(S), !t)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done) throw t;
                    var n = this;

                    function o(r, o) {
                        return a.type = "throw", a.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var s = this.tryEntries[i],
                            a = s.completion;
                        if ("root" === s.tryLoc) return o("end");
                        if (s.tryLoc <= this.prev) {
                            var c = r.call(s, "catchLoc"),
                                u = r.call(s, "finallyLoc");
                            if (c && u) {
                                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                                if (this.prev < s.finallyLoc) return o(s.finallyLoc)
                            } else if (c) {
                                if (this.prev < s.catchLoc) return o(s.catchLoc, !0)
                            } else {
                                if (!u) throw new Error("try statement without catch or finally");
                                if (this.prev < s.finallyLoc) return o(s.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var s = i ? i.completion : {};
                    return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, m) : this.complete(s)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), S(n), m
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                S(n)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, n, r) {
                    return this.delegate = {
                        iterator: L(t),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = e), m
                }
            }, t
        }(t.exports);
        try {
            regeneratorRuntime = r
        } catch (o) {
            Function("r", "regeneratorRuntime = r")(r)
        }
    },
    "4iaB": function(t, e, n) {
        n("nX7j");
        var r = n("rFq9").Object;
        t.exports = function(t, e) {
            return r.create(t, e)
        }
    },
    "6UZt": function(t, e, n) {
        var r = n("Jo0e"),
            o = Math.max,
            i = Math.min;
        t.exports = function(t, e) {
            return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
        }
    },
    "6YAS": function(t, e, n) {
        var r = n("hR4s"),
            o = n("CmYO").set,
            i = r.MutationObserver || r.WebKitMutationObserver,
            s = r.process,
            a = r.Promise,
            c = "process" == n("e7fL")(s);
        t.exports = function() {
            var t, e, n, u = function() {
                var r, o;
                for (c && (r = s.domain) && r.exit(); t;) {
                    o = t.fn, t = t.next;
                    try {
                        o()
                    } catch (i) {
                        throw t ? n() : e = void 0, i
                    }
                }
                e = void 0, r && r.enter()
            };
            if (c) n = function() {
                s.nextTick(u)
            };
            else if (!i || r.navigator && r.navigator.standalone)
                if (a && a.resolve) {
                    var l = a.resolve(void 0);
                    n = function() {
                        l.then(u)
                    }
                } else n = function() {
                    o.call(r, u)
                };
            else {
                var f = !0,
                    h = document.createTextNode("");
                new i(u).observe(h, {
                    characterData: !0
                }), n = function() {
                    h.data = f = !f
                }
            }
            return function(r) {
                var o = {
                    fn: r,
                    next: void 0
                };
                e && (e.next = o), t || (t = o, n()), e = o
            }
        }
    },
    "6w1l": function(t, e) {
        t.exports = "\t\n\v\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"
    },
    "7S/a": function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (e) {
                return !0
            }
        }
    },
    "8fQz": function(t, e, n) {
        var r = n("vbc5");
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    "8k7s": function(t, e, n) {
        t.exports = n("1srY")
    },
    "9O4T": function(t, e, n) {
        n("3poC"), t.exports = n("rFq9").Object.getOwnPropertyDescriptors
    },
    "9YHp": function(t, e, n) {
        var r = n("hR4s"),
            o = n("rFq9"),
            i = n("UtsQ"),
            s = n("dWcX"),
            a = n("UwCj").f;
        t.exports = function(t) {
            var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
            "_" == t.charAt(0) || t in e || a(e, t, {
                value: s.f(t)
            })
        }
    },
    "9bSt": function(t, e, n) {
        "use strict";
        var r = n("UwCj"),
            o = n("jHgz");
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, o(0, n)) : t[e] = n
        }
    },
    "9v8s": function(t, e, n) {
        var r = n("dWRk"),
            o = n("9vFK"),
            i = n("fawX"),
            s = n("8fQz"),
            a = n("MPuG"),
            c = n("1sfF"),
            u = {},
            l = {};
        (e = t.exports = function(t, e, n, f, h) {
            var p, m, d, g, v = h ? function() {
                    return t
                } : c(t),
                y = r(n, f, e ? 2 : 1),
                b = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (i(v)) {
                for (p = a(t.length); p > b; b++)
                    if ((g = e ? y(s(m = t[b])[0], m[1]) : y(t[b])) === u || g === l) return g
            } else
                for (d = v.call(t); !(m = d.next()).done;)
                    if ((g = o(d, y, m.value, e)) === u || g === l) return g
        }).BREAK = u, e.RETURN = l
    },
    "9vFK": function(t, e, n) {
        var r = n("8fQz");
        t.exports = function(t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n)
            } catch (s) {
                var i = t.return;
                throw void 0 !== i && r(i.call(t)), s
            }
        }
    },
    ApsS: function(t, e, n) {
        var r = n("J0XI"),
            o = n("guEv");
        t.exports = Object.keys || function(t) {
            return r(t, o)
        }
    },
    Bkdt: function(t, e, n) {
        var r = n("8fQz"),
            o = n("1sfF");
        t.exports = n("rFq9").getIterator = function(t) {
            var e = o(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return r(e.call(t))
        }
    },
    CHRr: function(t, e, n) {
        n("HWod");
        var r = n("rFq9").Object;
        t.exports = function(t, e, n) {
            return r.defineProperty(t, e, n)
        }
    },
    CmYO: function(t, e, n) {
        var r, o, i, s = n("dWRk"),
            a = n("IAQa"),
            c = n("wHU4"),
            u = n("1bLK"),
            l = n("hR4s"),
            f = l.process,
            h = l.setImmediate,
            p = l.clearImmediate,
            m = l.MessageChannel,
            d = l.Dispatch,
            g = 0,
            v = {},
            y = function() {
                var t = +this;
                if (v.hasOwnProperty(t)) {
                    var e = v[t];
                    delete v[t], e()
                }
            },
            b = function(t) {
                y.call(t.data)
            };
        h && p || (h = function(t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return v[++g] = function() {
                a("function" == typeof t ? t : Function(t), e)
            }, r(g), g
        }, p = function(t) {
            delete v[t]
        }, "process" == n("e7fL")(f) ? r = function(t) {
            f.nextTick(s(y, t, 1))
        } : d && d.now ? r = function(t) {
            d.now(s(y, t, 1))
        } : m ? (i = (o = new m).port2, o.port1.onmessage = b, r = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
            l.postMessage(t + "", "*")
        }, l.addEventListener("message", b, !1)) : r = "onreadystatechange" in u("script") ? function(t) {
            c.appendChild(u("script")).onreadystatechange = function() {
                c.removeChild(this), y.call(t)
            }
        } : function(t) {
            setTimeout(s(y, t, 1), 0)
        }), t.exports = {
            set: h,
            clear: p
        }
    },
    CrJZ: function(t, e, n) {
        "use strict";
        var r = n("hR4s"),
            o = n("YVtA"),
            i = n("ObEa"),
            s = n("IFjL"),
            a = n("Eolq"),
            c = n("aRFn").KEY,
            u = n("7S/a"),
            l = n("kz3d"),
            f = n("KnMe"),
            h = n("b1KM"),
            p = n("eD9m"),
            m = n("dWcX"),
            d = n("9YHp"),
            g = n("Hjik"),
            v = n("gNE/"),
            y = n("8fQz"),
            b = n("vbc5"),
            _ = n("MrWc"),
            w = n("Hs7Z"),
            x = n("Kc1g"),
            O = n("jHgz"),
            C = n("yew7"),
            E = n("QdMa"),
            S = n("VeTy"),
            k = n("dptC"),
            L = n("UwCj"),
            j = n("ApsS"),
            T = S.f,
            P = L.f,
            N = E.f,
            I = r.Symbol,
            R = r.JSON,
            M = R && R.stringify,
            A = p("_hidden"),
            D = p("toPrimitive"),
            F = {}.propertyIsEnumerable,
            H = l("symbol-registry"),
            U = l("symbols"),
            J = l("op-symbols"),
            W = Object.prototype,
            z = "function" == typeof I && !!k.f,
            G = r.QObject,
            B = !G || !G.prototype || !G.prototype.findChild,
            q = i && u(function() {
                return 7 != C(P({}, "a", {
                    get: function() {
                        return P(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, e, n) {
                var r = T(W, e);
                r && delete W[e], P(t, e, n), r && t !== W && P(W, e, r)
            } : P,
            Y = function(t) {
                var e = U[t] = C(I.prototype);
                return e._k = t, e
            },
            K = z && "symbol" == typeof I.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof I
            },
            Q = function(t, e, n) {
                return t === W && Q(J, e, n), y(t), e = x(e, !0), y(n), o(U, e) ? (n.enumerable ? (o(t, A) && t[A][e] && (t[A][e] = !1), n = C(n, {
                    enumerable: O(0, !1)
                })) : (o(t, A) || P(t, A, O(1, {})), t[A][e] = !0), q(t, e, n)) : P(t, e, n)
            },
            V = function(t, e) {
                y(t);
                for (var n, r = g(e = w(e)), o = 0, i = r.length; i > o;) Q(t, n = r[o++], e[n]);
                return t
            },
            Z = function(t) {
                var e = F.call(this, t = x(t, !0));
                return !(this === W && o(U, t) && !o(J, t)) && (!(e || !o(this, t) || !o(U, t) || o(this, A) && this[A][t]) || e)
            },
            X = function(t, e) {
                if (t = w(t), e = x(e, !0), t !== W || !o(U, e) || o(J, e)) {
                    var n = T(t, e);
                    return !n || !o(U, e) || o(t, A) && t[A][e] || (n.enumerable = !0), n
                }
            },
            $ = function(t) {
                for (var e, n = N(w(t)), r = [], i = 0; n.length > i;) o(U, e = n[i++]) || e == A || e == c || r.push(e);
                return r
            },
            tt = function(t) {
                for (var e, n = t === W, r = N(n ? J : w(t)), i = [], s = 0; r.length > s;) !o(U, e = r[s++]) || n && !o(W, e) || i.push(U[e]);
                return i
            };
        z || (a((I = function() {
            if (this instanceof I) throw TypeError("Symbol is not a constructor!");
            var t = h(arguments.length > 0 ? arguments[0] : void 0),
                e = function(n) {
                    this === W && e.call(J, n), o(this, A) && o(this[A], t) && (this[A][t] = !1), q(this, t, O(1, n))
                };
            return i && B && q(W, t, {
                configurable: !0,
                set: e
            }), Y(t)
        }).prototype, "toString", function() {
            return this._k
        }), S.f = X, L.f = Q, n("z7HR").f = E.f = $, n("DIWJ").f = Z, k.f = tt, i && !n("UtsQ") && a(W, "propertyIsEnumerable", Z, !0), m.f = function(t) {
            return Y(p(t))
        }), s(s.G + s.W + s.F * !z, {
            Symbol: I
        });
        for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) p(et[nt++]);
        for (var rt = j(p.store), ot = 0; rt.length > ot;) d(rt[ot++]);
        s(s.S + s.F * !z, "Symbol", {
            for: function(t) {
                return o(H, t += "") ? H[t] : H[t] = I(t)
            },
            keyFor: function(t) {
                if (!K(t)) throw TypeError(t + " is not a symbol!");
                for (var e in H)
                    if (H[e] === t) return e
            },
            useSetter: function() {
                B = !0
            },
            useSimple: function() {
                B = !1
            }
        }), s(s.S + s.F * !z, "Object", {
            create: function(t, e) {
                return void 0 === e ? C(t) : V(C(t), e)
            },
            defineProperty: Q,
            defineProperties: V,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: $,
            getOwnPropertySymbols: tt
        });
        var it = u(function() {
            k.f(1)
        });
        s(s.S + s.F * it, "Object", {
            getOwnPropertySymbols: function(t) {
                return k.f(_(t))
            }
        }), R && s(s.S + s.F * (!z || u(function() {
            var t = I();
            return "[null]" != M([t]) || "{}" != M({
                a: t
            }) || "{}" != M(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (n = e = r[1], (b(e) || void 0 !== t) && !K(t)) return v(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e
                }), r[1] = e, M.apply(R, r)
            }
        }), I.prototype[D] || n("b95h")(I.prototype, D, I.prototype.valueOf), f(I, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
    },
    DIWJ: function(t, e) {
        e.f = {}.propertyIsEnumerable
    },
    DcBZ: function(t, e) {
        t.exports = {
            BGSYNC_URL_PARAM: "allow_stream=true"
        }
    },
    EWHn: function(t, e, n) {
        var r = n("eD9m")("iterator"),
            o = !1;
        try {
            var i = [7][r]();
            i.return = function() {
                o = !0
            }, Array.from(i, function() {
                throw 2
            })
        } catch (s) {}
        t.exports = function(t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = [7],
                    a = i[r]();
                a.next = function() {
                    return {
                        done: n = !0
                    }
                }, i[r] = function() {
                    return a
                }, t(i)
            } catch (s) {}
            return n
        }
    },
    Eolq: function(t, e, n) {
        t.exports = n("b95h")
    },
    FIas: function(t, e, n) {
        t.exports = n("bjdl")
    },
    Fk9O: function(t, e, n) {
        n("j/aJ");
        for (var r = n("hR4s"), o = n("b95h"), i = n("tReM"), s = n("eD9m")("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < a.length; c++) {
            var u = a[c],
                l = r[u],
                f = l && l.prototype;
            f && !f[s] && o(f, s, u), i[u] = i.Array
        }
    },
    HCc6: function(t, e, n) {
        var r = n("hR4s").parseInt,
            o = n("ZrV4").trim,
            i = n("6w1l"),
            s = /^[-+]?0[xX]/;
        t.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function(t, e) {
            var n = o(String(t), 3);
            return r(n, e >>> 0 || (s.test(n) ? 16 : 10))
        } : r
    },
    HWod: function(t, e, n) {
        var r = n("IFjL");
        r(r.S + r.F * !n("ObEa"), "Object", {
            defineProperty: n("UwCj").f
        })
    },
    Hjik: function(t, e, n) {
        var r = n("ApsS"),
            o = n("dptC"),
            i = n("DIWJ");
        t.exports = function(t) {
            var e = r(t),
                n = o.f;
            if (n)
                for (var s, a = n(t), c = i.f, u = 0; a.length > u;) c.call(t, s = a[u++]) && e.push(s);
            return e
        }
    },
    HoF5: function(t, e, n) {
        n("dUHx"), n("/r3m"), n("Fk9O"), n("Y+Rv"), n("aSQu"), n("YR+c"), t.exports = n("rFq9").Promise
    },
    Hs7Z: function(t, e, n) {
        var r = n("aAA+"),
            o = n("rU52");
        t.exports = function(t) {
            return r(o(t))
        }
    },
    I1QY: function(t, e, n) {
        n("+nN8"), t.exports = n("rFq9").Object.keys
    },
    IAQa: function(t, e) {
        t.exports = function(t, e, n) {
            var r = void 0 === n;
            switch (e.length) {
                case 0:
                    return r ? t() : t.call(n);
                case 1:
                    return r ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    },
    IFjL: function(t, e, n) {
        var r = n("hR4s"),
            o = n("rFq9"),
            i = n("dWRk"),
            s = n("b95h"),
            a = n("YVtA"),
            c = function(t, e, n) {
                var u, l, f, h = t & c.F,
                    p = t & c.G,
                    m = t & c.S,
                    d = t & c.P,
                    g = t & c.B,
                    v = t & c.W,
                    y = p ? o : o[e] || (o[e] = {}),
                    b = y.prototype,
                    _ = p ? r : m ? r[e] : (r[e] || {}).prototype;
                for (u in p && (n = e), n)(l = !h && _ && void 0 !== _[u]) && a(y, u) || (f = l ? _[u] : n[u], y[u] = p && "function" != typeof _[u] ? n[u] : g && l ? i(f, r) : v && _[u] == f ? function(t) {
                    var e = function(e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    return e.prototype = t.prototype, e
                }(f) : d && "function" == typeof f ? i(Function.call, f) : f, d && ((y.virtual || (y.virtual = {}))[u] = f, t & c.R && b && !b[u] && s(b, u, f)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    },
    IVrg: function(t, e, n) {
        t.exports = n("xLJM")
    },
    J0XI: function(t, e, n) {
        var r = n("YVtA"),
            o = n("Hs7Z"),
            i = n("J1Io")(!1),
            s = n("ubhL")("IE_PROTO");
        t.exports = function(t, e) {
            var n, a = o(t),
                c = 0,
                u = [];
            for (n in a) n != s && r(a, n) && u.push(n);
            for (; e.length > c;) r(a, n = e[c++]) && (~i(u, n) || u.push(n));
            return u
        }
    },
    J1Io: function(t, e, n) {
        var r = n("Hs7Z"),
            o = n("MPuG"),
            i = n("6UZt");
        t.exports = function(t) {
            return function(e, n, s) {
                var a, c = r(e),
                    u = o(c.length),
                    l = i(s, u);
                if (t && n != n) {
                    for (; u > l;)
                        if ((a = c[l++]) != a) return !0
                } else
                    for (; u > l; l++)
                        if ((t || l in c) && c[l] === n) return t || l || 0;
                return !t && -1
            }
        }
    },
    Jn7W: function(t, e, n) {
        "use strict";
        var r = n("hR4s"),
            o = n("rFq9"),
            i = n("UwCj"),
            s = n("ObEa"),
            a = n("eD9m")("species");
        t.exports = function(t) {
            var e = "function" == typeof o[t] ? o[t] : r[t];
            s && e && !e[a] && i.f(e, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    Jo0e: function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    Kc1g: function(t, e, n) {
        var r = n("vbc5");
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    KnMe: function(t, e, n) {
        var r = n("UwCj").f,
            o = n("YVtA"),
            i = n("eD9m")("toStringTag");
        t.exports = function(t, e, n) {
            t && !o(t = n ? t : t.prototype, i) && r(t, i, {
                configurable: !0,
                value: e
            })
        }
    },
    LMaB: function(t, e, n) {
        t.exports = !n("ObEa") && !n("7S/a")(function() {
            return 7 != Object.defineProperty(n("1bLK")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    LcAa: function(t, e, n) {
        t.exports = n("CHRr")
    },
    M25K: function(t, e, n) {
        var r = n("e7fL"),
            o = n("eD9m")("toStringTag"),
            i = "Arguments" == r(function() {
                return arguments
            }());
        t.exports = function(t) {
            var e, n, s;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                try {
                    return t[e]
                } catch (n) {}
            }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
        }
    },
    MIMp: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    },
    MPuG: function(t, e, n) {
        var r = n("Jo0e"),
            o = Math.min;
        t.exports = function(t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    },
    MRcB: function(t, e, n) {
        n("neMx");
        var r = n("rFq9").Object;
        t.exports = function(t, e) {
            return r.defineProperties(t, e)
        }
    },
    Ml6p: function(t, e, n) {
        t.exports = n("HoF5")
    },
    MrWc: function(t, e, n) {
        var r = n("rU52");
        t.exports = function(t) {
            return Object(r(t))
        }
    },
    ObEa: function(t, e, n) {
        t.exports = !n("7S/a")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    Pcr7: function(t, e, n) {
        self.window = self;
        var r = new(0, n("lZaJ").ChatService)(function(t) {
            self.importScripts(t)
        }, function(t) {
            self.postMessage(t)
        });
        self.addEventListener("message", r.messageHandler.bind(r))
    },
    QdMa: function(t, e, n) {
        var r = n("Hs7Z"),
            o = n("z7HR").f,
            i = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return s && "[object Window]" == i.call(t) ? function(t) {
                try {
                    return o(t)
                } catch (e) {
                    return s.slice()
                }
            }(t) : o(r(t))
        }
    },
    Qllj: function(t, e, n) {
        var r = n("z7HR"),
            o = n("dptC"),
            i = n("8fQz"),
            s = n("hR4s").Reflect;
        t.exports = s && s.ownKeys || function(t) {
            var e = r.f(i(t)),
                n = o.f;
            return n ? e.concat(n(t)) : e
        }
    },
    QwS4: function(t, e, n) {
        var r = n("hR4s").navigator;
        t.exports = r && r.userAgent || ""
    },
    S49y: function(t, e, n) {
        "use strict";
        var r = n("UtsQ"),
            o = n("IFjL"),
            i = n("Eolq"),
            s = n("b95h"),
            a = n("tReM"),
            c = n("zjfI"),
            u = n("KnMe"),
            l = n("ax0Y"),
            f = n("eD9m")("iterator"),
            h = !([].keys && "next" in [].keys()),
            p = function() {
                return this
            };
        t.exports = function(t, e, n, m, d, g, v) {
            c(n, e, m);
            var y, b, _, w = function(t) {
                    if (!h && t in E) return E[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                x = e + " Iterator",
                O = "values" == d,
                C = !1,
                E = t.prototype,
                S = E[f] || E["@@iterator"] || d && E[d],
                k = S || w(d),
                L = d ? O ? w("entries") : k : void 0,
                j = "Array" == e && E.entries || S;
            if (j && (_ = l(j.call(new t))) !== Object.prototype && _.next && (u(_, x, !0), r || "function" == typeof _[f] || s(_, f, p)), O && S && "values" !== S.name && (C = !0, k = function() {
                    return S.call(this)
                }), r && !v || !h && !C && E[f] || s(E, f, k), a[e] = k, a[x] = p, d)
                if (y = {
                        values: O ? k : w("values"),
                        keys: g ? k : w("keys"),
                        entries: L
                    }, v)
                    for (b in y) b in E || i(E, b, y[b]);
                else o(o.P + o.F * (h || C), e, y);
            return y
        }
    },
    S7IX: function(t, e, n) {
        var r = n("Jo0e"),
            o = n("rU52");
        t.exports = function(t) {
            return function(e, n) {
                var i, s, a = String(o(e)),
                    c = r(n),
                    u = a.length;
                return c < 0 || c >= u ? t ? "" : void 0 : (i = a.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? a.charAt(c) : i : t ? a.slice(c, c + 2) : s - 56320 + (i - 55296 << 10) + 65536
            }
        }
    },
    SmK6: function(t, e, n) {
        var r = n("8fQz"),
            o = n("Vzpu"),
            i = n("eD9m")("species");
        t.exports = function(t, e) {
            var n, s = r(t).constructor;
            return void 0 === s || void 0 == (n = r(s)[i]) ? e : o(n)
        }
    },
    TPw6: function(t, e, n) {
        t.exports = n("I1QY")
    },
    Tqks: function(t, e, n) {
        t.exports = n("4iaB")
    },
    UtsQ: function(t, e) {
        t.exports = !0
    },
    UwCj: function(t, e, n) {
        var r = n("8fQz"),
            o = n("LMaB"),
            i = n("Kc1g"),
            s = Object.defineProperty;
        e.f = n("ObEa") ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = i(e, !0), r(n), o) try {
                return s(t, e, n)
            } catch (a) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    },
    VeTy: function(t, e, n) {
        var r = n("DIWJ"),
            o = n("jHgz"),
            i = n("Hs7Z"),
            s = n("Kc1g"),
            a = n("YVtA"),
            c = n("LMaB"),
            u = Object.getOwnPropertyDescriptor;
        e.f = n("ObEa") ? u : function(t, e) {
            if (t = i(t), e = s(e, !0), c) try {
                return u(t, e)
            } catch (n) {}
            if (a(t, e)) return o(!r.f.call(t, e), t[e])
        }
    },
    Vzpu: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    WOjp: function(t, e, n) {
        "use strict";
        var r = n("Vzpu");

        function o(t) {
            var e, n;
            this.promise = new t(function(t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            }), this.resolve = r(e), this.reject = r(n)
        }
        t.exports.f = function(t) {
            return new o(t)
        }
    },
    "Y+Rv": function(t, e, n) {
        "use strict";
        var r, o, i, s, a = n("UtsQ"),
            c = n("hR4s"),
            u = n("dWRk"),
            l = n("M25K"),
            f = n("IFjL"),
            h = n("vbc5"),
            p = n("Vzpu"),
            m = n("s0lH"),
            d = n("9v8s"),
            g = n("SmK6"),
            v = n("CmYO").set,
            y = n("6YAS")(),
            b = n("WOjp"),
            _ = n("y7sZ"),
            w = n("QwS4"),
            x = n("Y0Jp"),
            O = c.TypeError,
            C = c.process,
            E = C && C.versions,
            S = E && E.v8 || "",
            k = c.Promise,
            L = "process" == l(C),
            j = function() {},
            T = o = b.f,
            P = !! function() {
                try {
                    var t = k.resolve(1),
                        e = (t.constructor = {})[n("eD9m")("species")] = function(t) {
                            t(j, j)
                        };
                    return (L || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof e && 0 !== S.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
                } catch (r) {}
            }(),
            N = function(t) {
                var e;
                return !(!h(t) || "function" != typeof(e = t.then)) && e
            },
            I = function(t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    y(function() {
                        for (var r = t._v, o = 1 == t._s, i = 0, s = function(e) {
                                var n, i, s, a = o ? e.ok : e.fail,
                                    c = e.resolve,
                                    u = e.reject,
                                    l = e.domain;
                                try {
                                    a ? (o || (2 == t._h && A(t), t._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === e.promise ? u(O("Promise-chain cycle")) : (i = N(n)) ? i.call(n, c, u) : c(n)) : u(r)
                                } catch (f) {
                                    l && !s && l.exit(), u(f)
                                }
                            }; n.length > i;) s(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && R(t)
                    })
                }
            },
            R = function(t) {
                v.call(c, function() {
                    var e, n, r, o = t._v,
                        i = M(t);
                    if (i && (e = _(function() {
                            L ? C.emit("unhandledRejection", o, t) : (n = c.onunhandledrejection) ? n({
                                promise: t,
                                reason: o
                            }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", o)
                        }), t._h = L || M(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
                })
            },
            M = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            A = function(t) {
                v.call(c, function() {
                    var e;
                    L ? C.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            D = function(t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), I(e, !0))
            },
            F = function(t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw O("Promise can't be resolved itself");
                        (e = N(t)) ? y(function() {
                            var r = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t, u(F, r, 1), u(D, r, 1))
                            } catch (o) {
                                D.call(r, o)
                            }
                        }): (n._v = t, n._s = 1, I(n, !1))
                    } catch (r) {
                        D.call({
                            _w: n,
                            _d: !1
                        }, r)
                    }
                }
            };
        P || (k = function(t) {
            m(this, k, "Promise", "_h"), p(t), r.call(this);
            try {
                t(u(F, this, 1), u(D, this, 1))
            } catch (e) {
                D.call(this, e)
            }
        }, (r = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n("qa3O")(k.prototype, {
            then: function(t, e) {
                var n = T(g(this, k));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = L ? C.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), i = function() {
            var t = new r;
            this.promise = t, this.resolve = u(F, t, 1), this.reject = u(D, t, 1)
        }, b.f = T = function(t) {
            return t === k || t === s ? new i(t) : o(t)
        }), f(f.G + f.W + f.F * !P, {
            Promise: k
        }), n("KnMe")(k, "Promise"), n("Jn7W")("Promise"), s = n("rFq9").Promise, f(f.S + f.F * !P, "Promise", {
            reject: function(t) {
                var e = T(this);
                return (0, e.reject)(t), e.promise
            }
        }), f(f.S + f.F * (a || !P), "Promise", {
            resolve: function(t) {
                return x(a && this === s ? k : this, t)
            }
        }), f(f.S + f.F * !(P && n("EWHn")(function(t) {
            k.all(t).catch(j)
        })), "Promise", {
            all: function(t) {
                var e = this,
                    n = T(e),
                    r = n.resolve,
                    o = n.reject,
                    i = _(function() {
                        var n = [],
                            i = 0,
                            s = 1;
                        d(t, !1, function(t) {
                            var a = i++,
                                c = !1;
                            n.push(void 0), s++, e.resolve(t).then(function(t) {
                                c || (c = !0, n[a] = t, --s || r(n))
                            }, o)
                        }), --s || r(n)
                    });
                return i.e && o(i.v), n.promise
            },
            race: function(t) {
                var e = this,
                    n = T(e),
                    r = n.reject,
                    o = _(function() {
                        d(t, !1, function(t) {
                            e.resolve(t).then(n.resolve, r)
                        })
                    });
                return o.e && r(o.v), n.promise
            }
        })
    },
    Y0Jp: function(t, e, n) {
        var r = n("8fQz"),
            o = n("vbc5"),
            i = n("WOjp");
        t.exports = function(t, e) {
            if (r(t), o(e) && e.constructor === t) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise
        }
    },
    YLTe: function(t, e, n) {
        var r = n("IFjL"),
            o = n("HCc6");
        r(r.G + r.F * (parseInt != o), {
            parseInt: o
        })
    },
    YQQD: function(t, e, n) {
        "use strict"
    },
    "YR+c": function(t, e, n) {
        "use strict";
        var r = n("IFjL"),
            o = n("WOjp"),
            i = n("y7sZ");
        r(r.S, "Promise", {
            try: function(t) {
                var e = o.f(this),
                    n = i(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise
            }
        })
    },
    YVtA: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    },
    ZrV4: function(t, e, n) {
        var r = n("IFjL"),
            o = n("rU52"),
            i = n("7S/a"),
            s = n("6w1l"),
            a = "[" + s + "]",
            c = RegExp("^" + a + a + "*"),
            u = RegExp(a + a + "*$"),
            l = function(t, e, n) {
                var o = {},
                    a = i(function() {
                        return !!s[t]() || "\u200b\x85" != "\u200b\x85" [t]()
                    }),
                    c = o[t] = a ? e(f) : s[t];
                n && (o[n] = c), r(r.P + r.F * a, "String", o)
            },
            f = l.trim = function(t, e) {
                return t = String(o(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(u, "")), t
            };
        t.exports = l
    },
    "aAA+": function(t, e, n) {
        var r = n("e7fL");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    aRFn: function(t, e, n) {
        var r = n("b1KM")("meta"),
            o = n("vbc5"),
            i = n("YVtA"),
            s = n("UwCj").f,
            a = 0,
            c = Object.isExtensible || function() {
                return !0
            },
            u = !n("7S/a")(function() {
                return c(Object.preventExtensions({}))
            }),
            l = function(t) {
                s(t, r, {
                    value: {
                        i: "O" + ++a,
                        w: {}
                    }
                })
            },
            f = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function(t, e) {
                    if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, r)) {
                        if (!c(t)) return "F";
                        if (!e) return "E";
                        l(t)
                    }
                    return t[r].i
                },
                getWeak: function(t, e) {
                    if (!i(t, r)) {
                        if (!c(t)) return !0;
                        if (!e) return !1;
                        l(t)
                    }
                    return t[r].w
                },
                onFreeze: function(t) {
                    return u && f.NEED && c(t) && !i(t, r) && l(t), t
                }
            }
    },
    aSQu: function(t, e, n) {
        "use strict";
        var r = n("IFjL"),
            o = n("rFq9"),
            i = n("hR4s"),
            s = n("SmK6"),
            a = n("Y0Jp");
        r(r.P + r.R, "Promise", {
            finally: function(t) {
                var e = s(this, o.Promise || i.Promise),
                    n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return a(e, t()).then(function() {
                        return n
                    })
                } : t, n ? function(n) {
                    return a(e, t()).then(function() {
                        throw n
                    })
                } : t)
            }
        })
    },
    ax0Y: function(t, e, n) {
        var r = n("YVtA"),
            o = n("MrWc"),
            i = n("ubhL")("IE_PROTO"),
            s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    },
    b1KM: function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    },
    b95h: function(t, e, n) {
        var r = n("UwCj"),
            o = n("jHgz");
        t.exports = n("ObEa") ? function(t, e, n) {
            return r.f(t, e, o(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    },
    bjdl: function(t, e, n) {
        n("3ioZ");
        var r = n("rFq9").Object;
        t.exports = function(t, e) {
            return r.getOwnPropertyDescriptor(t, e)
        }
    },
    dUHx: function(t, e) {},
    dWRk: function(t, e, n) {
        var r = n("Vzpu");
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    },
    dWcX: function(t, e, n) {
        e.f = n("eD9m")
    },
    dptC: function(t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    e7fL: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    },
    eD9m: function(t, e, n) {
        var r = n("kz3d")("wks"),
            o = n("b1KM"),
            i = n("hR4s").Symbol,
            s = "function" == typeof i;
        (t.exports = function(t) {
            return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t))
        }).store = r
    },
    emby: function(t, e, n) {
        t.exports = n("MRcB")
    },
    f3oX: function(t, e, n) {
        n("YLTe"), t.exports = n("rFq9").parseInt
    },
    fawX: function(t, e, n) {
        var r = n("tReM"),
            o = n("eD9m")("iterator"),
            i = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || i[o] === t)
        }
    },
    "gNE/": function(t, e, n) {
        var r = n("e7fL");
        t.exports = Array.isArray || function(t) {
            return "Array" == r(t)
        }
    },
    guEv: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    hR4s: function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    "j/aJ": function(t, e, n) {
        "use strict";
        var r = n("wOJj"),
            o = n("MIMp"),
            i = n("tReM"),
            s = n("Hs7Z");
        t.exports = n("S49y")(Array, "Array", function(t, e) {
            this._t = s(t), this._i = 0, this._k = e
        }, function() {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
    },
    jHgz: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    jRMw: function(t, e, n) {
        var r = n("TPw6");
        t.exports = function(t, e) {
            if (null == t) return {};
            var n, o, i = {},
                s = r(t);
            for (o = 0; o < s.length; o++) n = s[o], e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i
        }
    },
    jp4N: function(t, e, n) {
        var r = n("LcAa");
        t.exports = function(t, e, n) {
            return e in t ? r(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
    },
    jpyh: function(t, e, n) {
        "use strict"
    },
    k9sC: function(t, e, n) {
        t.exports = n("3yYM")
    },
    kz3d: function(t, e, n) {
        var r = n("rFq9"),
            o = n("hR4s"),
            i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n("UtsQ") ? "pure" : "global",
            copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    lZaJ: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("k9sC"),
            o = n.n(r),
            i = n("Ml6p"),
            s = n.n(i);

        function a(t, e, n, r, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value
            } catch (l) {
                return void n(l)
            }
            c.done ? e(u) : s.a.resolve(u).then(r, o)
        }

        function c(t) {
            return function() {
                var e = this,
                    n = arguments;
                return new s.a(function(r, o) {
                    var i = t.apply(e, n);

                    function s(t) {
                        a(i, r, o, s, c, "next", t)
                    }

                    function c(t) {
                        a(i, r, o, s, c, "throw", t)
                    }
                    s(void 0)
                })
            }
        }

        function u(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        var l = n("LcAa"),
            f = n.n(l);

        function h(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), f()(t, r.key, r)
            }
        }

        function p(t, e, n) {
            return e && h(t.prototype, e), n && h(t, n), t
        }

        function m(t, e, n) {
            return e in t ? f()(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
        var d = n("emby"),
            g = n.n(d),
            v = n("sXAp"),
            y = n.n(v),
            b = n("FIas"),
            _ = n.n(b),
            w = n("8k7s"),
            x = n.n(w),
            O = n("TPw6"),
            C = n.n(O);

        function E(t, e) {
            var n = C()(t);
            if (x.a) {
                var r = x()(t);
                e && (r = r.filter(function(e) {
                    return _()(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function S(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? E(n, !0).forEach(function(e) {
                    m(t, e, n[e])
                }) : y.a ? g()(t, y()(n)) : E(n).forEach(function(e) {
                    f()(t, e, _()(n, e))
                })
            }
            return t
        }
        var k = new(function() {
                function t() {
                    u(this, t), m(this, "badges", void 0), this.badges = {}
                }
                return p(t, [{
                    key: "init",
                    value: function() {
                        var t = c(o.a.mark(function t(e) {
                            var n;
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, s.a.all([this.getGlobalBadges(), this.getChannelBadges(e)]);
                                    case 2:
                                        n = t.sent, this.badges = this.mergeBadges(n);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "getBadgeData",
                    value: function(t) {
                        var e = this;
                        return t ? C()(t).reduce(function(n, r) {
                            var o;
                            try {
                                o = e.badges[r].versions[t[r]], n.push({
                                    alt: o.description,
                                    images: {
                                        "1x": o.image_url_1x,
                                        "2x": o.image_url_2x,
                                        "4x": o.image_url_4x
                                    }
                                })
                            } catch (i) {}
                            return n
                        }, []) : []
                    }
                }, {
                    key: "getGlobalBadges",
                    value: function() {
                        return this.fetch("https://badges.twitch.tv/v1/badges/global/display")
                    }
                }, {
                    key: "getChannelBadges",
                    value: function(t) {
                        return this.fetch(function(t) {
                            return "https://badges.twitch.tv/v1/badges/channels/".concat(t, "/display")
                        }(t))
                    }
                }, {
                    key: "fetch",
                    value: function(t) {
                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }, e
                    }(function() {
                        var t = c(o.a.mark(function t(e) {
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, fetch(e);
                                    case 3:
                                        return t.next = 5, t.sent.json();
                                    case 5:
                                        return t.abrupt("return", t.sent.badge_sets);
                                    case 8:
                                        return t.prev = 8, t.t0 = t.catch(0), t.abrupt("return", {});
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, null, [
                                [0, 8]
                            ])
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }, {
                    key: "mergeBadges",
                    value: function(t) {
                        return t.reduce(function(t, e) {
                            return C()(e).forEach(function(n) {
                                t[n] ? t[n].versions = S({}, t[n].versions, {}, e[n].versions) : t[n] = S({}, e[n])
                            }), t
                        }, {})
                    }
                }]), t
            }()),
            L = n("yyOJ"),
            j = n("s37A"),
            T = !1,
            P = new(function() {
                function t() {
                    u(this, t), m(this, "client", void 0), m(this, "currentChannel", void 0), this.client = j.client({
                        connection: {
                            reconnect: !0,
                            secure: !0,
                            timeout: 2e3
                        },
                        options: {
                            clientId: L.CLIENT_ID,
                            debug: T
                        }
                    })
                }
                return p(t, [{
                    key: "connect",
                    value: function() {
                        var t = c(o.a.mark(function t(e) {
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return this.currentChannel = e, t.next = 3, this.client.connect();
                                    case 3:
                                        return t.next = 5, this.client.join(this.currentChannel);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "disconnect",
                    value: function() {
                        return this.client.disconnect()
                    }
                }, {
                    key: "changeChannel",
                    value: function() {
                        var t = c(o.a.mark(function t(e) {
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.currentChannel) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.next = 3, this.client.part(this.currentChannel);
                                    case 3:
                                        return this.currentChannel = e, t.next = 6, this.client.join(this.currentChannel);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "setConnectedHandler",
                    value: function(t) {
                        this.client.addListener("connected", t)
                    }
                }, {
                    key: "setDisconnectedHandler",
                    value: function(t) {
                        this.client.addListener("disconnected", t)
                    }
                }, {
                    key: "setReconnectHandler",
                    value: function(t) {
                        this.client.addListener("reconnect", t)
                    }
                }, {
                    key: "setHostingHandler",
                    value: function(t) {
                        this.client.addListener("hosting", t)
                    }
                }, {
                    key: "setUnhostHandler",
                    value: function(t) {
                        this.client.addListener("unhost", t)
                    }
                }, {
                    key: "setChatHandler",
                    value: function(t) {
                        this.client.addListener("chat", t), this.client.addListener("cheer", t)
                    }
                }, {
                    key: "setActionHandler",
                    value: function(t) {
                        this.client.addListener("action", t)
                    }
                }, {
                    key: "setTimeoutHandler",
                    value: function(t) {
                        this.client.addListener("timeout", t)
                    }
                }, {
                    key: "setBanHandler",
                    value: function(t) {
                        this.client.addListener("ban", t)
                    }
                }, {
                    key: "setSubcriptionHandler",
                    value: function(t) {
                        this.client.addListener("subscription", t)
                    }
                }, {
                    key: "setResubscriptionHandler",
                    value: function(t) {
                        this.client.addListener("resub", t)
                    }
                }, {
                    key: "isSocketOpen",
                    value: function() {
                        return "OPEN" === this.client.readyState()
                    }
                }]), t
            }()),
            N = n("o9XM"),
            I = n.n(N),
            R = n("ysci"),
            M = n.n(R);
        var A = n("IVrg"),
            D = n.n(A);

        function F(t, e) {
            return function(t) {
                if (M()(t)) return t
            }(t) || function(t, e) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var s, a = D()(t); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
                } catch (c) {
                    o = !0, i = c
                } finally {
                    try {
                        r || null == a.return || a.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var H = /^[\x00-\x7F]*$/;

        function U(t) {
            return !H.test(t)
        }

        function J(t, e) {
            var n = t,
                r = !1;
            return n ? U(n) && (r = !0) : n = e, {
                isIntl: r,
                usernameDisplay: n
            }
        }

        function W(t, e) {
            var n = C()(t);
            if (x.a) {
                var r = x()(t);
                e && (r = r.filter(function(e) {
                    return _()(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function z(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? W(n, !0).forEach(function(e) {
                    m(t, e, n[e])
                }) : y.a ? g()(t, y()(n)) : W(n).forEach(function(e) {
                    f()(t, e, _()(n, e))
                })
            }
            return t
        }
        var G = /\b(cheer|doodlecheer|pogchamp|showlove|pride|heyguys|frankerz|seemsgood|party|kappa|dansgame|elegiggle|trihard|kreygasm|4head|swiftrage|notlikethis|failfish|vohiyo|pjsalt|mrdestructoid|bday|ripcheer|shamrock|bitboss|streamlabs|muxy|holidaycheer|goal|charity|anon)(\d+)\b/gi,
            B = /([^\w@#%\-+=:~])?(?:(https?:\/\/)?(?:[\w@#%\-+=:~]+\.)+[a-z]{2,6}(?:\/[\w.\/@#%&()\-+=:?~]*)?)([^\w.\/@#%&()\-+=:?~]|\s|$)/g,
            q = "TEXT",
            Y = "LINK",
            K = "EMOTE";

        function Q(t, e, n) {
            return {
                badges: n,
                deleted: !1,
                messageParts: t ? V(t, e.emotes, e.bits) : void 0,
                user: z({}, J(e["display-name"], e.username), {
                    color: e.color,
                    username: e.username
                })
            }
        }

        function V(t, e, n) {
            var r = [],
                o = 0,
                i = Array(t.length),
                s = function(t) {
                    return t.match(/[^\uD800-\uDFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g) || []
                }(t),
                a = !!n;
            e && C()(e).forEach(function(t) {
                e[t].forEach(function(e) {
                    var n = F(e.split("-"), 2),
                        r = n[0],
                        o = n[1],
                        s = I()(r, 10),
                        a = I()(o, 10) + 1;
                    i[s] = {
                        data: {
                            images: {
                                "1x": nt(t, 1),
                                "2x": nt(t, 2),
                                "4x": nt(t, 4)
                            }
                        },
                        endIndex: a,
                        startIndex: s
                    }
                })
            }), i.forEach(function(t) {
                var e = s.slice(o, t.startIndex).join("");
                e && (r = r.concat(a ? Z(e) : X(e))), r.push({
                    content: z({
                        alt: s.slice(t.startIndex, t.endIndex).join("")
                    }, t.data),
                    type: K
                }), o = t.endIndex
            });
            var c = s.slice(o).join("");
            return c && (r = r.concat(a ? Z(c) : X(c))), r
        }

        function Z(t) {
            return function(t) {
                var e = [],
                    n = G.exec(t),
                    r = 0;
                for (; n;) {
                    var o = n.index,
                        i = n[1].toLowerCase(),
                        s = I()(n[2], 10),
                        a = tt(s),
                        c = a.floor,
                        u = a.color;
                    o > r && e.push({
                        content: t.slice(r, o),
                        type: q
                    }), e.push({
                        content: {
                            alt: (l = i, l.split(" ").map(function(t) {
                                return "" + t.charAt(0).toUpperCase() + t.slice(1)
                            }).join(" ")),
                            cheerAmount: s,
                            cheerColor: u,
                            images: {
                                "1.5x": et(i, c, 1.5),
                                "1x": et(i, c, 1),
                                "2x": et(i, c, 2),
                                "3x": et(i, c, 3),
                                "4x": et(i, c, 4)
                            }
                        },
                        type: K
                    }), r = G.lastIndex, n = G.exec(t)
                }
                var l;
                r < t.length && e.push({
                    content: t.slice(r),
                    type: q
                });
                return e
            }(t).reduce(function(t, e) {
                return t.concat(e.type === q ? X(e.content) : e)
            }, [])
        }

        function X(t) {
            for (var e = [], n = 0, r = !1, o = B.exec(t); o;) {
                var i = o.index,
                    s = !1,
                    a = o[1];
                a && (i += 1, /\s/.test(a) || (s = !0)), i !== n && e.push({
                    content: "".concat(r ? " " : "").concat(t.slice(n, i)).concat(s ? " " : ""),
                    type: q
                }), r = !1;
                var c = B.lastIndex,
                    u = o[3];
                u && (c -= 1, /\s/.test(u) || (r = !0));
                var l = o[2];
                e.push({
                    content: {
                        displayText: t.slice(i, c),
                        url: "".concat(l ? "" : "https://").concat(t.slice(i, c))
                    },
                    type: Y
                }), n = c, o = B.exec(t)
            }
            var f = t.slice(n);
            return f && e.push({
                content: "".concat(r ? " " : "").concat(f),
                type: q
            }), e
        }
        var $ = {
            blue: "#0099fe",
            gray: "#979797",
            green: "#1db2a5",
            purple: "#9c3ee8",
            red: "#f43021"
        };

        function tt(t) {
            var e, n;
            return t >= 1e4 ? (e = 1e4, n = $.red) : t >= 5e3 ? (e = 5e3, n = $.blue) : t >= 1e3 ? (e = 1e3, n = $.green) : t >= 100 ? (e = 100, n = $.purple) : (e = 1, n = $.gray), {
                color: n,
                floor: e
            }
        }

        function et(t, e, n) {
            return "https://d3aqoihi2n8ty8.cloudfront.net/actions/".concat(t, "/light/animated/").concat(e, "/").concat(n, ".gif")
        }

        function nt(t, e) {
            return 4 === e && (e = 3), "https://static-cdn.jtvnw.net/emoticons/v1/".concat(t, "/").concat(e, ".0")
        }

        function rt(t) {
            return "".concat(t, "-").concat((new Date).valueOf())
        }

        function ot(t, e) {
            var n = C()(t);
            if (x.a) {
                var r = x()(t);
                e && (r = r.filter(function(e) {
                    return _()(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function it(t, e, n, r) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ot(n, !0).forEach(function(e) {
                        m(t, e, n[e])
                    }) : y.a ? g()(t, y()(n)) : ot(n).forEach(function(e) {
                        f()(t, e, _()(n, e))
                    })
                }
                return t
            }({}, Q(e, n, r), {
                id: n.id || rt("".concat(n.username, "-msg")),
                type: t
            })
        }
        var st = "CONNECTED",
            at = "DISCONNECTED",
            ct = "RECONNECT",
            ut = "HOSTING",
            lt = "UNHOST";

        function ft() {
            return {
                id: rt("connected"),
                type: st
            }
        }

        function ht() {
            return {
                id: rt("reconnect"),
                type: ct
            }
        }

        function pt(t, e) {
            var n = C()(t);
            if (x.a) {
                var r = x()(t);
                e && (r = r.filter(function(e) {
                    return _()(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }
        var mt = "SUBSCRIPTION",
            dt = "RESUBSCRIPTION";

        function gt(t, e, n, r, o, i, s) {
            return function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pt(n, !0).forEach(function(e) {
                        m(t, e, n[e])
                    }) : y.a ? g()(t, y()(n)) : pt(n).forEach(function(e) {
                        f()(t, e, _()(n, e))
                    })
                }
                return t
            }({}, o ? Q(o, i, s) : function(t) {
                return {
                    user: {
                        color: null,
                        isIntl: !1,
                        username: t,
                        usernameDisplay: t
                    }
                }
            }(e), {
                channel: t,
                id: rt("".concat(e, "-sub")),
                isPrime: n,
                months: r,
                type: dt
            })
        }
        var vt, yt = n("q5o0"),
            bt = n.n(yt),
            _t = function() {
                function t(t, e) {
                    this.middleware = t, this.serializer = e || function(t) {
                        return t
                    }
                }
                var e = t.prototype;
                return e.getLogOutput = function(t, e) {
                    return this.serializer(this.getLogObject(t, e))
                }, e.getLogObject = function(t, e) {
                    return this.middleware.reduce(function(t, e) {
                        return e(t)
                    }, {
                        level: t,
                        message: e,
                        time: Date.now()
                    })
                }, t
            }();
        ! function(t) {
            t.DEBUG = "DEBUG", t.INFO = "INFO", t.WARNING = "WARNING", t.ERROR = "ERROR"
        }(vt || (vt = {}));
        var wt = n("jp4N"),
            xt = n.n(wt),
            Ot = n("jRMw"),
            Ct = n.n(Ot);

        function Et(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), n.push.apply(n, r)
            }
            return n
        }

        function St(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Et(n, !0).forEach(function(e) {
                    xt()(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Et(n).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }

        function kt(t) {
            t.message;
            return Ct()(t, ["message"])
        }
        var Lt = "undefined" !== typeof console,
            jt = new(function(t) {
                function e() {
                    var e;
                    return (e = t.apply(this, arguments) || this).debugLogMethod = console.debug ? "debug" : "log", e
                }
                bt()(e, t);
                var n = e.prototype;
                return n.debug = function(t) {
                    Lt && console[this.debugLogMethod](this.getLogOutput(vt.DEBUG, t))
                }, n.log = function(t) {
                    Lt && console.log(this.getLogOutput(vt.DEBUG, t))
                }, n.info = function(t) {
                    Lt && console.info(this.getLogOutput(vt.INFO, t))
                }, n.warn = function(t) {
                    Lt && console.warn(this.getLogOutput(vt.WARNING, t))
                }, n.error = function(t) {
                    Lt && console.error(this.getLogOutput(vt.ERROR, t))
                }, e
            }(_t))([function(t) {
                return Array.isArray(t.message) && t.message.every(function(t) {
                    return "string" === typeof t
                }) ? St({
                    message: t.message.join(" ")
                }, kt(t)) : t
            }, function(t) {
                return t.message instanceof Object && t.message.message ? St({}, t.message, {}, kt(t)) : t
            }, function(t) {
                return t.message instanceof Object && t.message.event ? St({}, t.message, {}, kt(t)) : t
            }], function(t) {
                return "undefined" !== typeof window ? t : JSON.stringify(t)
            }),
            Tt = new(function() {
                function t(t) {
                    this.loggers = t
                }
                var e = t.prototype;
                return e.register = function(t) {
                    this.loggers.push(t)
                }, e.setLoggers = function(t) {
                    this.loggers = t
                }, e.debug = function(t) {
                    this.loggers.forEach(function(e) {
                        return e.debug(t)
                    })
                }, e.log = function(t) {
                    this.loggers.forEach(function(e) {
                        return e.log(t)
                    })
                }, e.info = function(t) {
                    this.loggers.forEach(function(e) {
                        return e.info(t)
                    })
                }, e.warn = function(t) {
                    this.loggers.forEach(function(e) {
                        return e.warn(t)
                    })
                }, e.error = function(t) {
                    this.loggers.forEach(function(e) {
                        return e.error(t)
                    })
                }, t
            }())([jt]);

        function Pt(t) {
            return null === t ? "No message (null)" : "undefined" === typeof t ? "No message (undefined)" : t instanceof Error ? t.toString() : "object" === typeof t ? function(t) {
                var e = {};
                return Object.getOwnPropertyNames(t).forEach(function(n) {
                    e[n] = t[n]
                }), JSON.stringify(e, null, ",")
            }(t) : t
        }
        n.d(e, "CHAT_WORKER_CONNECTED", function() {
            return Nt
        }), n.d(e, "CHAT_WORKER_CHANNEL_CHANGED", function() {
            return It
        }), n.d(e, "ChatService", function() {
            return Rt
        });
        var Nt = "CHAT_WORKER_CONNECTED",
            It = "CHAT_WORKER_CHANNEL_CHANGED",
            Rt = function() {
                function t(e, n) {
                    var r = this,
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : k;
                    u(this, t), m(this, "channelName", void 0), m(this, "channelID", void 0), m(this, "importScripts", void 0), m(this, "postMessage", void 0), m(this, "client", void 0), m(this, "badger", void 0), m(this, "onConnectedEvent", function(t, e) {
                        return r.postMessage(ft())
                    }), m(this, "onChannelChangeEvent", function() {
                        return r.postMessage(ft())
                    }), m(this, "onDisconnectedEvent", function(t) {
                        return r.postMessage(function(t) {
                            return {
                                id: rt("disconnected"),
                                reason: t,
                                type: at
                            }
                        }(t))
                    }), m(this, "onReconnectEvent", function() {
                        return r.postMessage(ht())
                    }), m(this, "onHostingEvent", function(t, e, n) {
                        return r.postMessage(function(t, e) {
                            return {
                                channel: t,
                                hostedChannel: e,
                                id: rt("hosting"),
                                type: ut
                            }
                        }(t.slice(1), e))
                    }), m(this, "onUnhostEvent", function(t, e) {
                        return r.postMessage(function(t) {
                            return {
                                channel: t,
                                id: rt("unhost"),
                                type: lt
                            }
                        }(t.slice(1)))
                    }), m(this, "onChatEvent", function(t) {
                        return function(e, n, o, i) {
                            return r.postMessage(it(t, o, n, r.badger.getBadgeData(n.badges)))
                        }
                    }), m(this, "onModerationEvent", function(t) {
                        return function(e, n, o, i) {
                            return r.postMessage(function(t, e, n, r) {
                                return {
                                    duration: r || 0,
                                    id: rt("".concat(e, "-mod")),
                                    reason: n,
                                    type: t,
                                    username: e
                                }
                            }(t, n, o, i))
                        }
                    }), m(this, "onSubscriptionEvent", function(t, e, n) {
                        return r.postMessage(function(t, e, n) {
                            return {
                                channel: t,
                                id: rt("".concat(e, "-sub")),
                                isPrime: n,
                                type: mt,
                                username: e
                            }
                        }(t.slice(1), e, n.prime))
                    }), m(this, "onResubscriptionEvent", function(t, e, n, o, i, s) {
                        return r.postMessage(gt(t.slice(1), e, s.prime, n, o, i, i ? r.badger.getBadgeData(i.badges) : []))
                    }), this.importScripts = e, this.postMessage = n, this.client = o, this.badger = i
                }
                return p(t, [{
                    key: "messageHandler",
                    value: function(t) {
                        switch (t.data.command) {
                            case Nt:
                                if (t.data.payload.polyfillURI) try {
                                    Tt.info(["Polyfilling worker:", t.data.payload.polyfillURI]), this.importScripts(t.data.payload.polyfillURI)
                                } catch (e) {
                                    Tt.error({
                                        error: Pt(e),
                                        message: "Error fetching polyfill in chat service"
                                    })
                                } else Tt.error("No polyfill URI provided in chat service");
                                return this.channelName = t.data.payload.channelName, this.channelID = t.data.payload.channelID, this.connect();
                            case "CHAT_WORKER_DISCONNECTED":
                                return this.disconnect();
                            case It:
                                return this.channelName = t.data.payload.channelName, this.channelID = t.data.payload.channelID, this.changeChannel();
                            default:
                                return Tt.error({
                                    message: "Unknown message type:",
                                    messageData: t.data
                                }), s.a.resolve(void 0)
                        }
                    }
                }, {
                    key: "connect",
                    value: function() {
                        var t = c(o.a.mark(function t() {
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.channelName && this.channelID) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("Insufficient state to connect to chat. Need name and ID.");
                                    case 2:
                                        return Tt.info("Instantiating client and connecting to ".concat(this.channelName)), this.client.setConnectedHandler(this.onConnectedEvent), this.client.setDisconnectedHandler(this.onDisconnectedEvent), this.client.setReconnectHandler(this.onReconnectEvent), this.client.setHostingHandler(this.onHostingEvent), this.client.setUnhostHandler(this.onUnhostEvent), this.client.setChatHandler(this.onChatEvent("POST")), this.client.setActionHandler(this.onChatEvent("ACTION")), this.client.setTimeoutHandler(this.onModerationEvent("TIMEOUT")), this.client.setBanHandler(this.onModerationEvent("BAN")), this.client.setSubcriptionHandler(this.onSubscriptionEvent), this.client.setResubscriptionHandler(this.onResubscriptionEvent), t.prev = 14, t.next = 17, s.a.all([this.client.connect(this.channelName), this.badger.init(this.channelID)]);
                                    case 17:
                                        t.next = 23;
                                        break;
                                    case 19:
                                        t.prev = 19, t.t0 = t.catch(14), Tt.error({
                                            error: Pt(t.t0),
                                            message: "Error with initial connection to chat service"
                                        }), this.client.isSocketOpen() || this.postMessage(ht());
                                    case 23:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [14, 19]
                            ])
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "disconnect",
                    value: function() {
                        var t = c(o.a.mark(function t() {
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return Tt.info("Disconnecting client and closing worker"), t.next = 3, this.client.disconnect();
                                    case 3:
                                        close();
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this)
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }, {
                    key: "changeChannel",
                    value: function() {
                        var t = c(o.a.mark(function t() {
                            return o.a.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.channelName && this.channelID) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("Cannot change channel without channel name & ID");
                                    case 2:
                                        return Tt.info("Changing channel connection to ".concat(this.channelName)), t.prev = 3, t.next = 6, s.a.all([this.client.changeChannel(this.channelName), this.badger.init(this.channelID)]);
                                    case 6:
                                        this.onChannelChangeEvent(), t.next = 12;
                                        break;
                                    case 9:
                                        t.prev = 9, t.t0 = t.catch(3), Tt.error({
                                            error: Pt(t.t0),
                                            message: "Error with changing chat channel"
                                        });
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }, t, this, [
                                [3, 9]
                            ])
                        }));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }()
                }]), t
            }()
    },
    nX7j: function(t, e, n) {
        var r = n("IFjL");
        r(r.S, "Object", {
            create: n("yew7")
        })
    },
    neMx: function(t, e, n) {
        var r = n("IFjL");
        r(r.S + r.F * !n("ObEa"), "Object", {
            defineProperties: n("3555")
        })
    },
    o9XM: function(t, e, n) {
        t.exports = n("f3oX")
    },
    q5o0: function(t, e, n) {
        var r = n("Tqks");
        t.exports = function(t, e) {
            t.prototype = r(e.prototype), t.prototype.constructor = t, t.__proto__ = e
        }
    },
    qa3O: function(t, e, n) {
        var r = n("b95h");
        t.exports = function(t, e, n) {
            for (var o in e) n && t[o] ? t[o] = e[o] : r(t, o, e[o]);
            return t
        }
    },
    rFq9: function(t, e) {
        var n = t.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = n)
    },
    rU52: function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    s0lH: function(t, e) {
        t.exports = function(t, e, n, r) {
            if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    },
    s37A: function(t, e) {
        t.exports = function(t) {
            var e = {};

            function n(r) {
                if (e[r]) return e[r].exports;
                var o = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
            }
            return n.m = t, n.c = e, n.d = function(t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                })
            }, n.r = function(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, n.t = function(t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var o in t) n.d(r, o, function(e) {
                        return t[e]
                    }.bind(null, o));
                return r
            }, n.n = function(t) {
                var e = t && t.__esModule ? function() {
                    return t.default
                } : function() {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 2)
        }([function(t, e, n) {
            (function(e) {
                var n = t.exports = {
                    get: function(t, e) {
                        return void 0 === t ? e : t
                    },
                    isBoolean: function(t) {
                        return "boolean" == typeof t
                    },
                    isFinite: function(t) {
                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }, e
                    }(function(t) {
                        return isFinite(t) && !isNaN(parseFloat(t))
                    }),
                    isInteger: function(t) {
                        return !isNaN(n.toNumber(t, 0))
                    },
                    isJustinfan: function(t) {
                        return RegExp("^(justinfan)(\\d+$)", "g").test(t)
                    },
                    isNull: function(t) {
                        return null === t
                    },
                    isRegex: function(t) {
                        return /[\|\\\^\$\*\+\?\:\#]/.test(t)
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isURL: function(t) {
                        return RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$", "i").test(t)
                    },
                    justinfan: function() {
                        return "justinfan" + Math.floor(8e4 * Math.random() + 1e3)
                    },
                    password: function(t) {
                        return "SCHMOOPIIE" === t ? "SCHMOOPIIE" : "oauth:" + t.toLowerCase().replace("oauth:", "")
                    },
                    promiseDelay: function(t) {
                        return new Promise(function(e) {
                            setTimeout(e, t)
                        })
                    },
                    replaceAll: function(t, e) {
                        if (null == t) return null;
                        for (var n in e) t = t.replace(new RegExp(n, "g"), e[n]);
                        return t
                    },
                    unescapeHtml: function(t) {
                        return t.replace(/\\&amp\\;/g, "&").replace(/\\&lt\\;/g, "<").replace(/\\&gt\\;/g, ">").replace(/\\&quot\\;/g, '"').replace(/\\&#039\\;/g, "'")
                    },
                    addWord: function(t, e) {
                        return 0 != t.length && (t += " "), t + e
                    },
                    channel: function(t) {
                        var e = null == t ? "" : t;
                        return "#" === e.charAt(0) ? e.toLowerCase() : "#" + e.toLowerCase()
                    },
                    extractNumber: function(t) {
                        for (var e = t.split(" "), r = 0; r < e.length; r++)
                            if (n.isInteger(e[r])) return ~~e[r];
                        return 0
                    },
                    formatDate: function(t) {
                        var e = t.getHours(),
                            n = t.getMinutes();
                        return (e = (e < 10 ? "0" : "") + e) + ":" + (n < 10 ? "0" : "") + n
                    },
                    inherits: function(t, e) {
                        t.super_ = e;
                        var n = function() {};
                        n.prototype = e.prototype, t.prototype = new n, t.prototype.constructor = t
                    },
                    isNode: function() {
                        try {
                            return t.exports = "object" == typeof e && "[object process]" === Object.prototype.toString.call(e)
                        } catch (t) {
                            return !1
                        }
                    },
                    isExtension: function() {
                        try {
                            return !!(window.chrome && chrome.runtime && chrome.runtime.id)
                        } catch (t) {
                            return !1
                        }
                    },
                    merge: function(t, e) {
                        for (var r in e) try {
                            e[r].constructor == Object ? t[r] = n.merge(t[r], e[r]) : t[r] = e[r]
                        } catch (n) {
                            t[r] = e[r]
                        }
                        return t
                    },
                    splitLine: function(t, e) {
                        var n = t.substring(0, e).lastIndexOf(" ");
                        return [t.substring(0, n), t.substring(n + 1)]
                    },
                    toNumber: function(t, e) {
                        if (null === t) return 0;
                        var r = Math.pow(10, n.isFinite(e) ? e : 0);
                        return Math.round(t * r) / r
                    },
                    union: function(t, e) {
                        for (var n = {}, r = [], o = 0; o < t.length; o++) n[i = t[o]] || (n[i] = !0, r.push(i));
                        for (o = 0; o < e.length; o++) {
                            var i;
                            n[i = e[o]] || (n[i] = !0, r.push(i))
                        }
                        return r
                    },
                    username: function(t) {
                        var e = null == t ? "" : t;
                        return "#" === e.charAt(0) ? e.substring(1).toLowerCase() : e.toLowerCase()
                    }
                }
            }).call(this, n(5))
        }, function(t, e, n) {
            (function(e) {
                var r = n(4),
                    o = n(6).EventEmitter,
                    i = n(7),
                    s = n(8),
                    a = n(9),
                    c = e.WebSocket || e.MozWebSocket || n(10),
                    u = n(0),
                    l = function t(e) {
                        if (this instanceof t == 0) return new t(e);
                        this.setMaxListeners(0), this.opts = u.get(e, {}), this.opts.channels = this.opts.channels || [], this.opts.connection = this.opts.connection || {}, this.opts.identity = this.opts.identity || {}, this.opts.options = this.opts.options || {}, this.clientId = u.get(this.opts.options.clientId, null), this.maxReconnectAttempts = u.get(this.opts.connection.maxReconnectAttempts, 1 / 0), this.maxReconnectInterval = u.get(this.opts.connection.maxReconnectInterval, 3e4), this.reconnect = u.get(this.opts.connection.reconnect, !1), this.reconnectDecay = u.get(this.opts.connection.reconnectDecay, 1.5), this.reconnectInterval = u.get(this.opts.connection.reconnectInterval, 1e3), this.reconnecting = !1, this.reconnections = 0, this.reconnectTimer = this.reconnectInterval, this.secure = u.get(this.opts.connection.secure, !1), this.emotes = "", this.emotesets = {}, this.badgesRaw = "", this.badges = {}, this.channels = [], this.currentLatency = 0, this.globaluserstate = {}, this.lastJoined = "", this.latency = new Date, this.moderators = {}, this.pingLoop = null, this.pingTimeout = null, this.reason = "", this.username = "", this.userstate = {}, this.wasCloseCalled = !1, this.ws = null;
                        var n = "error";
                        this.opts.options.debug && (n = "info"), this.log = this.opts.logger || i;
                        try {
                            i.setLevel(n)
                        } catch (t) {}
                        this.opts.channels.forEach(function(t, e, n) {
                            n[e] = u.channel(t)
                        }), o.call(this)
                    };
                for (var f in u.inherits(l, o), r) l.prototype[f] = r[f];
                l.prototype.handleMessage = function(t) {
                    var e = this;
                    if (!u.isNull(t)) {
                        var n = u.channel(u.get(t.params[0], null)),
                            r = u.get(t.params[1], null),
                            o = u.get(t.tags["msg-id"], null);
                        if (t.tags = s.badges(s.emotes(t.tags)), t.tags)
                            for (var i in t.tags)
                                if ("emote-sets" !== i && "ban-duration" !== i && "bits" !== i)
                                    if ("slow" === i) t.tags[i] = parseInt(t.tags[i], 10) || 0;
                                    else if ("followers-only" === i) {
                            var c = parseInt(t.tags[i], 10);
                            isNaN(c) ? t.tags[i] = -1 : t.tags[i] = c
                        } else u.isBoolean(t.tags[i]) ? t.tags[i] = null : "1" === t.tags[i] ? t.tags[i] = !0 : "0" === t.tags[i] && (t.tags[i] = !1);
                        if (u.isNull(t.prefix)) switch (t.command) {
                            case "PING":
                                this.emit("ping"), u.isNull(this.ws) || 2 === this.ws.readyState || 3 === this.ws.readyState || this.ws.send("PONG");
                                break;
                            case "PONG":
                                var l = new Date;
                                this.currentLatency = (l.getTime() - this.latency.getTime()) / 1e3, this.emits(["pong", "_promisePing"], [
                                    [this.currentLatency],
                                    [this.currentLatency]
                                ]), clearTimeout(this.pingTimeout);
                                break;
                            default:
                                this.log.warn("Could not parse message with no prefix:\n" + JSON.stringify(t, null, 4))
                        } else if ("tmi.twitch.tv" === t.prefix) switch (t.command) {
                            case "002":
                            case "003":
                            case "004":
                            case "375":
                            case "376":
                            case "CAP":
                                break;
                            case "001":
                                this.username = t.params[0];
                                break;
                            case "372":
                                this.log.info("Connected to server."), this.userstate["#tmijs"] = {}, this.emits(["connected", "_promiseConnect"], [
                                    [this.server, this.port],
                                    [null]
                                ]), this.reconnections = 0, this.reconnectTimer = this.reconnectInterval, this.pingLoop = setInterval(function() {
                                    u.isNull(e.ws) || 2 === e.ws.readyState || 3 === e.ws.readyState || e.ws.send("PING"), e.latency = new Date, e.pingTimeout = setTimeout(function() {
                                        u.isNull(e.ws) || (e.wasCloseCalled = !1, e.log.error("Ping timeout."), e.ws.close(), clearInterval(e.pingLoop), clearTimeout(e.pingTimeout))
                                    }, u.get(e.opts.connection.timeout, 9999))
                                }, 6e4);
                                var f = new a.queue(2e3),
                                    h = u.union(this.opts.channels, this.channels);
                                this.channels = [];
                                for (var p = 0; p < h.length; p++) {
                                    var m = this;
                                    f.add(function(t) {
                                        u.isNull(m.ws) || 2 === m.ws.readyState || 3 === m.ws.readyState || m.ws.send("JOIN " + u.channel(h[t]))
                                    }.bind(this, p))
                                }
                                f.run();
                                break;
                            case "NOTICE":
                                switch (o) {
                                    case "subs_on":
                                        this.log.info("[" + n + "] This room is now in subscribers-only mode."), this.emits(["subscriber", "subscribers", "_promiseSubscribers"], [
                                            [n, !0],
                                            [n, !0],
                                            [null]
                                        ]);
                                        break;
                                    case "subs_off":
                                        this.log.info("[" + n + "] This room is no longer in subscribers-only mode."), this.emits(["subscriber", "subscribers", "_promiseSubscribersoff"], [
                                            [n, !1],
                                            [n, !1],
                                            [null]
                                        ]);
                                        break;
                                    case "emote_only_on":
                                        this.log.info("[" + n + "] This room is now in emote-only mode."), this.emits(["emoteonly", "_promiseEmoteonly"], [
                                            [n, !0],
                                            [null]
                                        ]);
                                        break;
                                    case "emote_only_off":
                                        this.log.info("[" + n + "] This room is no longer in emote-only mode."), this.emits(["emoteonly", "_promiseEmoteonlyoff"], [
                                            [n, !1],
                                            [null]
                                        ]);
                                        break;
                                    case "slow_on":
                                    case "slow_off":
                                        break;
                                    case "followers_on_zero":
                                    case "followers_on":
                                    case "followers_off":
                                        break;
                                    case "r9k_on":
                                        this.log.info("[" + n + "] This room is now in r9k mode."), this.emits(["r9kmode", "r9kbeta", "_promiseR9kbeta"], [
                                            [n, !0],
                                            [n, !0],
                                            [null]
                                        ]);
                                        break;
                                    case "r9k_off":
                                        this.log.info("[" + n + "] This room is no longer in r9k mode."), this.emits(["r9kmode", "r9kbeta", "_promiseR9kbetaoff"], [
                                            [n, !1],
                                            [n, !1],
                                            [null]
                                        ]);
                                        break;
                                    case "room_mods":
                                        var d = r.split(":")[1].replace(/,/g, "").split(":").toString().toLowerCase().split(" ");
                                        for (p = d.length - 1; p >= 0; p--) "" === d[p] && d.splice(p, 1);
                                        this.emits(["_promiseMods", "mods"], [
                                            [null, d],
                                            [n, d]
                                        ]);
                                        break;
                                    case "no_mods":
                                        this.emit("_promiseMods", null, []);
                                        break;
                                    case "msg_channel_suspended":
                                        this.emits(["notice", "_promiseJoin"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "already_banned":
                                    case "bad_ban_admin":
                                    case "bad_ban_broadcaster":
                                    case "bad_ban_global_mod":
                                    case "bad_ban_self":
                                    case "bad_ban_staff":
                                    case "usage_ban":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseBan"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "ban_success":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseBan"], [
                                            [n, o, r],
                                            [null]
                                        ]);
                                        break;
                                    case "usage_clear":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseClear"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "usage_mods":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseMods"], [
                                            [n, o, r],
                                            [o, []]
                                        ]);
                                        break;
                                    case "mod_success":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseMod"], [
                                            [n, o, r],
                                            [null]
                                        ]);
                                        break;
                                    case "usage_mod":
                                    case "bad_mod_banned":
                                    case "bad_mod_mod":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseMod"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "unmod_success":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseUnmod"], [
                                            [n, o, r],
                                            [null]
                                        ]);
                                        break;
                                    case "usage_unmod":
                                    case "bad_unmod_mod":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseUnmod"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "color_changed":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseColor"], [
                                            [n, o, r],
                                            [null]
                                        ]);
                                        break;
                                    case "usage_color":
                                    case "turbo_only_color":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseColor"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "commercial_success":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseCommercial"], [
                                            [n, o, r],
                                            [null]
                                        ]);
                                        break;
                                    case "usage_commercial":
                                    case "bad_commercial_error":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseCommercial"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "hosts_remaining":
                                        this.log.info("[" + n + "] " + r);
                                        var g = isNaN(r.charAt(0)) ? 0 : r.charAt(0);
                                        this.emits(["notice", "_promiseHost"], [
                                            [n, o, r],
                                            [null, ~~g]
                                        ]);
                                        break;
                                    case "bad_host_hosting":
                                    case "bad_host_rate_exceeded":
                                    case "bad_host_error":
                                    case "usage_host":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseHost"], [
                                            [n, o, r],
                                            [o, null]
                                        ]);
                                        break;
                                    case "already_r9k_on":
                                    case "usage_r9k_on":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseR9kbeta"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "already_r9k_off":
                                    case "usage_r9k_off":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseR9kbetaoff"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "timeout_success":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseTimeout"], [
                                            [n, o, r],
                                            [null]
                                        ]);
                                        break;
                                    case "already_subs_off":
                                    case "usage_subs_off":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseSubscribersoff"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "already_subs_on":
                                    case "usage_subs_on":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseSubscribers"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "already_emote_only_off":
                                    case "usage_emote_only_off":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseEmoteonlyoff"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "already_emote_only_on":
                                    case "usage_emote_only_on":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseEmoteonly"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "usage_slow_on":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseSlow"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "usage_slow_off":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseSlowoff"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "usage_timeout":
                                    case "bad_timeout_admin":
                                    case "bad_timeout_broadcaster":
                                    case "bad_timeout_duration":
                                    case "bad_timeout_global_mod":
                                    case "bad_timeout_self":
                                    case "bad_timeout_staff":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseTimeout"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "unban_success":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseUnban"], [
                                            [n, o, r],
                                            [null]
                                        ]);
                                        break;
                                    case "usage_unban":
                                    case "bad_unban_no_ban":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseUnban"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "usage_unhost":
                                    case "not_hosting":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseUnhost"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "whisper_invalid_login":
                                    case "whisper_invalid_self":
                                    case "whisper_limit_per_min":
                                    case "whisper_limit_per_sec":
                                    case "whisper_restricted_recipient":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseWhisper"], [
                                            [n, o, r],
                                            [o]
                                        ]);
                                        break;
                                    case "no_permission":
                                    case "msg_banned":
                                        this.log.info("[" + n + "] " + r), this.emits(["notice", "_promiseBan", "_promiseClear", "_promiseUnban", "_promiseTimeout", "_promiseMods", "_promiseMod", "_promiseUnmod", "_promiseCommercial", "_promiseHost", "_promiseUnhost", "_promiseR9kbeta", "_promiseR9kbetaoff", "_promiseSlow", "_promiseSlowoff", "_promiseFollowers", "_promiseFollowersoff", "_promiseSubscribers", "_promiseSubscribersoff", "_promiseEmoteonly", "_promiseEmoteonlyoff"], [
                                            [n, o, r],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o],
                                            [o]
                                        ]);
                                        break;
                                    case "unrecognized_cmd":
                                        this.log.info("[" + n + "] " + r), this.emit("notice", n, o, r), "/w" === r.split(" ").splice(-1)[0] && this.log.warn("You must be connected to a group server to send or receive whispers.");
                                        break;
                                    case "cmds_available":
                                    case "host_target_went_offline":
                                    case "msg_censored_broadcaster":
                                    case "msg_duplicate":
                                    case "msg_emoteonly":
                                    case "msg_verified_email":
                                    case "msg_ratelimit":
                                    case "msg_subsonly":
                                    case "msg_timedout":
                                    case "no_help":
                                    case "usage_disconnect":
                                    case "usage_help":
                                    case "usage_me":
                                    case "raid_error_self":
                                    case "raid_error_already_raiding":
                                    case "raid_error_forbidden":
                                    case "raid_error_unexpected":
                                    case "unraid_error_unexpected":
                                    case "unraid_success":
                                    case "raid_notice_mature":
                                    case "raid_notice_owner":
                                    case "raid_notice_restricted_chat":
                                    case "invalid_user":
                                        this.log.info("[" + n + "] " + r), this.emit("notice", n, o, r);
                                        break;
                                    case "host_on":
                                    case "host_off":
                                        break;
                                    default:
                                        r.includes("Login unsuccessful") || r.includes("Login authentication failed") ? (this.wasCloseCalled = !1, this.reconnect = !1, this.reason = r, this.log.error(this.reason), this.ws.close()) : r.includes("Error logging in") || r.includes("Improperly formatted auth") ? (this.wasCloseCalled = !1, this.reconnect = !1, this.reason = r, this.log.error(this.reason), this.ws.close()) : r.includes("Invalid NICK") ? (this.wasCloseCalled = !1, this.reconnect = !1, this.reason = "Invalid NICK.", this.log.error(this.reason), this.ws.close()) : this.log.warn("Could not parse NOTICE from tmi.twitch.tv:\n" + JSON.stringify(t, null, 4))
                                }
                                break;
                            case "USERNOTICE":
                                if ("resub" === o) {
                                    var v = t.tags["display-name"] || t.tags.login,
                                        y = t.tags["msg-param-sub-plan"],
                                        b = u.replaceAll(u.get(t.tags["msg-param-sub-plan-name"], null), {
                                            "\\\\s": " ",
                                            "\\\\:": ";",
                                            "\\\\\\\\": "\\",
                                            "\\r": "\r",
                                            "\\n": "\n"
                                        }),
                                        _ = u.get(~~t.tags["msg-param-months"], null),
                                        w = y.includes("Prime"),
                                        x = null;
                                    r && ((x = t.tags)["message-type"] = "resub"), this.emits(["resub", "subanniversary"], [
                                        [n, v, _, r, x, {
                                            prime: w,
                                            plan: y,
                                            planName: b
                                        }],
                                        [n, v, _, r, x, {
                                            prime: w,
                                            plan: y,
                                            planName: b
                                        }]
                                    ])
                                } else if ("sub" == o) v = t.tags["display-name"] || t.tags.login, y = t.tags["msg-param-sub-plan"], b = u.replaceAll(u.get(t.tags["msg-param-sub-plan-name"], null), {
                                    "\\\\s": " ",
                                    "\\\\:": ";",
                                    "\\\\\\\\": "\\",
                                    "\\r": "\r",
                                    "\\n": "\n"
                                }), w = y.includes("Prime"), x = null, r && ((x = t.tags)["message-type"] = "sub"), this.emit("subscription", n, v, {
                                    prime: w,
                                    plan: y,
                                    planName: b
                                }, r, x);
                                else if ("unraid" == o) {
                                    v = t.tags["display-name"] || t.tags.login;
                                    var O = u.replaceAll(u.get(t.tags["system-msg"], null), {
                                        "\\\\s": " ",
                                        "\\\\:": ";",
                                        "\\\\\\\\": "\\",
                                        "\\r": "\r",
                                        "\\n": "\n"
                                    });
                                    this.emit("unraid", n, v, O)
                                } else if ("raid" == o) {
                                    v = t.tags["display-name"] || t.tags.login;
                                    var C = t.tags["msg-id"],
                                        E = t.tags["msg-param-displayName"],
                                        S = t.tags["msg-param-viewerCount"],
                                        k = t.tags["msg-param-login"];
                                    !0 === S ? S = "1" : !1 === S && (S = "0"), this.emit("raid", n, v, {
                                        displayName: E,
                                        viewerCount: S,
                                        msgId: C,
                                        login: k
                                    })
                                }
                                break;
                            case "HOSTTARGET":
                                if ("-" === r.split(" ")[0]) this.log.info("[" + n + "] Exited host mode."), this.emits(["unhost", "_promiseUnhost"], [
                                    [n, ~~r.split(" ")[1] || 0],
                                    [null]
                                ]);
                                else {
                                    var L = ~~r.split(" ")[1] || 0;
                                    this.log.info("[" + n + "] Now hosting " + r.split(" ")[0] + " for " + L + " viewer(s)."), this.emit("hosting", n, r.split(" ")[0], L)
                                }
                                break;
                            case "CLEARCHAT":
                                if (t.params.length > 1) {
                                    var j = u.get(t.tags["ban-duration"], null),
                                        T = u.replaceAll(u.get(t.tags["ban-reason"], null), {
                                            "\\\\s": " ",
                                            "\\\\:": ";",
                                            "\\\\\\\\": "\\",
                                            "\\r": "\r",
                                            "\\n": "\n"
                                        });
                                    u.isNull(j) ? (this.log.info("[" + n + "] " + r + " has been banned. Reason: " + (T || "n/a")), this.emit("ban", n, r, T)) : (this.log.info("[" + n + "] " + r + " has been timed out for " + j + " seconds. Reason: " + (T || "n/a")), this.emit("timeout", n, r, T, ~~j))
                                } else this.log.info("[" + n + "] Chat was cleared by a moderator."), this.emits(["clearchat", "_promiseClear"], [
                                    [n],
                                    [null]
                                ]);
                                break;
                            case "RECONNECT":
                                this.log.info("Received RECONNECT request from Twitch.."), this.log.info("Disconnecting and reconnecting in " + Math.round(this.reconnectTimer / 1e3) + " seconds.."), this.disconnect(), setTimeout(function() {
                                    e.connect()
                                }, this.reconnectTimer);
                                break;
                            case "SERVERCHANGE":
                                break;
                            case "USERSTATE":
                                t.tags.username = this.username, "mod" === t.tags["user-type"] && (this.moderators[this.lastJoined] || (this.moderators[this.lastJoined] = []), this.moderators[this.lastJoined].indexOf(this.username) < 0 && this.moderators[this.lastJoined].push(this.username)), u.isJustinfan(this.getUsername()) || this.userstate[n] || (this.userstate[n] = t.tags, this.lastJoined = n, this.channels.push(n), this.log.info("Joined " + n), this.emit("join", n, u.username(this.getUsername()), !0)), t.tags["emote-sets"] !== this.emotes && this._updateEmoteset(t.tags["emote-sets"]), t.tags["badges-raw"] !== this.badgesRaw && (this._updateBadges(t.tags.badges, t.tags["badges-raw"]), this.emit("badgesupdated", u.username(this.getUsername()), this.badges)), this.userstate[n] = t.tags;
                                break;
                            case "GLOBALUSERSTATE":
                                this.globaluserstate = t.tags, void 0 !== t.tags["emote-sets"] && this._updateEmoteset(t.tags["emote-sets"]), t.tags["badges-raw"] !== this.badgesRaw && (this._updateBadges(t.tags.badges, t.tags["badges-raw"]), this.emit("badgesupdated", u.username(this.getUsername()), this.badges));
                                break;
                            case "ROOMSTATE":
                                if (u.channel(this.lastJoined) === u.channel(t.params[0]) && this.emit("_promiseJoin", null), t.tags.channel = u.channel(t.params[0]), this.emit("roomstate", u.channel(t.params[0]), t.tags), t.tags.hasOwnProperty("slow") && !t.tags.hasOwnProperty("subs-only") && (0 === t.tags.slow ? (this.log.info("[" + n + "] This room is no longer in slow mode."), this.emits(["slow", "slowmode", "_promiseSlowoff"], [
                                        [n, !1, 0],
                                        [n, !1, 0],
                                        [null]
                                    ])) : (this.log.info("[" + n + "] This room is now in slow mode."), this.emits(["slow", "slowmode", "_promiseSlow"], [
                                        [n, !0, ~~t.tags.slow],
                                        [n, !0, ~~t.tags.slow],
                                        [null]
                                    ]))), t.tags.hasOwnProperty("followers-only") && !t.tags.hasOwnProperty("subs-only"))
                                    if (-1 === t.tags["followers-only"]) this.log.info("[" + n + "] This room is no longer in followers-only mode."), this.emits(["followersonly", "followersmode", "_promiseFollowersoff"], [
                                        [n, !1, 0],
                                        [n, !1, 0],
                                        [null]
                                    ]);
                                    else {
                                        var P = ~~t.tags["followers-only"];
                                        this.log.info("[" + n + "] This room is now in follower-only mode."), this.emits(["followersonly", "followersmode", "_promiseFollowers"], [
                                            [n, !0, P],
                                            [n, !0, P],
                                            [null]
                                        ])
                                    }
                                break;
                            default:
                                this.log.warn("Could not parse message from tmi.twitch.tv:\n" + JSON.stringify(t, null, 4))
                        } else if ("jtv" === t.prefix) switch (t.command) {
                            case "MODE":
                                "+o" === r ? (this.moderators[n] || (this.moderators[n] = []), this.moderators[n].indexOf(t.params[2]) < 0 && this.moderators[n].push(t.params[2]), this.emit("mod", n, t.params[2])) : "-o" === r && (this.moderators[n] || (this.moderators[n] = []), this.moderators[n].filter(function(e) {
                                    return e != t.params[2]
                                }), this.emit("unmod", n, t.params[2]));
                                break;
                            default:
                                this.log.warn("Could not parse message from jtv:\n" + JSON.stringify(t, null, 4))
                        } else switch (t.command) {
                            case "353":
                                this.emit("names", t.params[2], t.params[3].split(" "));
                                break;
                            case "366":
                                break;
                            case "JOIN":
                                u.isJustinfan(this.getUsername()) && this.username === t.prefix.split("!")[0] && (this.lastJoined = n, this.channels.push(n), this.log.info("Joined " + n), this.emit("join", n, t.prefix.split("!")[0], !0)), this.username !== t.prefix.split("!")[0] && this.emit("join", n, t.prefix.split("!")[0], !1);
                                break;
                            case "PART":
                                var N, I = !1;
                                this.username === t.prefix.split("!")[0] && (I = !0, this.userstate[n] && delete this.userstate[n], -1 !== (N = this.channels.indexOf(n)) && this.channels.splice(N, 1), -1 !== (N = this.opts.channels.indexOf(n)) && this.opts.channels.splice(N, 1), this.log.info("Left " + n), this.emit("_promisePart", null)), this.emit("part", n, t.prefix.split("!")[0], I);
                                break;
                            case "WHISPER":
                                this.log.info("[WHISPER] <" + t.prefix.split("!")[0] + ">: " + r), t.tags.hasOwnProperty("username") || (t.tags.username = t.prefix.split("!")[0]), t.tags["message-type"] = "whisper";
                                var R = u.channel(t.tags.username);
                                this.emits(["whisper", "message"], [
                                    [R, t.tags, r, !1],
                                    [R, t.tags, r, !1]
                                ]);
                                break;
                            case "PRIVMSG":
                                if (t.tags.username = t.prefix.split("!")[0], "jtv" === t.tags.username)
                                    if (r.includes("hosting you for")) {
                                        var M = u.extractNumber(r);
                                        this.emit("hosted", n, u.username(r.split(" ")[0]), M, r.includes("auto"))
                                    } else r.includes("hosting you") && this.emit("hosted", n, u.username(r.split(" ")[0]), 0, r.includes("auto"));
                                else r.match(/^\u0001ACTION ([^\u0001]+)\u0001$/) ? (t.tags["message-type"] = "action", this.log.info("[" + n + "] *<" + t.tags.username + ">: " + r.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1]), this.emits(["action", "message"], [
                                    [n, t.tags, r.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], !1],
                                    [n, t.tags, r.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], !1]
                                ])) : t.tags.hasOwnProperty("bits") ? this.emit("cheer", n, t.tags, r) : (t.tags["message-type"] = "chat", this.log.info("[" + n + "] <" + t.tags.username + ">: " + r), this.emits(["chat", "message"], [
                                    [n, t.tags, r, !1],
                                    [n, t.tags, r, !1]
                                ]));
                                break;
                            default:
                                this.log.warn("Could not parse message:\n" + JSON.stringify(t, null, 4))
                        }
                    }
                }, l.prototype.connect = function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        t.server = u.get(t.opts.connection.server, "irc-ws.chat.twitch.tv"), t.port = u.get(t.opts.connection.port, 80), t.secure && (t.port = 443), 443 === t.port && (t.secure = !0), t.reconnectTimer = t.reconnectTimer * t.reconnectDecay, t.reconnectTimer >= t.maxReconnectInterval && (t.reconnectTimer = t.maxReconnectInterval), t._openConnection(), t.once("_promiseConnect", function(r) {
                            r ? n(r) : e([t.server, ~~t.port])
                        })
                    })
                }, l.prototype._openConnection = function() {
                    this.ws = new c((this.secure ? "wss" : "ws") + "://" + this.server + ":" + this.port + "/", "irc"), this.ws.onmessage = this._onMessage.bind(this), this.ws.onerror = this._onError.bind(this), this.ws.onclose = this._onClose.bind(this), this.ws.onopen = this._onOpen.bind(this)
                }, l.prototype._onOpen = function() {
                    u.isNull(this.ws) || 1 !== this.ws.readyState || (this.log.info("Connecting to " + this.server + " on port " + this.port + ".."), this.emit("connecting", this.server, ~~this.port), this.username = u.get(this.opts.identity.username, u.justinfan()), this.password = u.password(u.get(this.opts.identity.password, "SCHMOOPIIE")), this.log.info("Sending authentication to server.."), this.emit("logon"), this.ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership"), this.ws.send("PASS " + this.password), this.ws.send("NICK " + this.username), this.ws.send("USER " + this.username + " 8 * :" + this.username))
                }, l.prototype._onMessage = function(t) {
                    var e = this;
                    t.data.split("\r\n").forEach(function(t) {
                        u.isNull(t) || e.handleMessage(s.msg(t))
                    })
                }, l.prototype._onError = function() {
                    var t = this;
                    this.moderators = {}, this.userstate = {}, this.globaluserstate = {}, clearInterval(this.pingLoop), clearTimeout(this.pingTimeout), this.reason = u.isNull(this.ws) ? "Connection closed." : "Unable to connect.", this.emits(["_promiseConnect", "disconnected"], [
                        [this.reason],
                        [this.reason]
                    ]), this.reconnect && this.reconnections === this.maxReconnectAttempts && (this.emit("maxreconnect"), this.log.error("Maximum reconnection attempts reached.")), this.reconnect && !this.reconnecting && this.reconnections <= this.maxReconnectAttempts - 1 && (this.reconnecting = !0, this.reconnections = this.reconnections + 1, this.log.error("Reconnecting in " + Math.round(this.reconnectTimer / 1e3) + " seconds.."), this.emit("reconnect"), setTimeout(function() {
                        t.reconnecting = !1, t.connect()
                    }, this.reconnectTimer)), this.ws = null
                }, l.prototype._onClose = function() {
                    var t = this;
                    this.moderators = {}, this.userstate = {}, this.globaluserstate = {}, clearInterval(this.pingLoop), clearTimeout(this.pingTimeout), this.wasCloseCalled ? (this.wasCloseCalled = !1, this.reason = "Connection closed.", this.log.info(this.reason), this.emits(["_promiseConnect", "_promiseDisconnect", "disconnected"], [
                        [this.reason],
                        [null],
                        [this.reason]
                    ])) : (this.emits(["_promiseConnect", "disconnected"], [
                        [this.reason],
                        [this.reason]
                    ]), this.reconnect && this.reconnections === this.maxReconnectAttempts && (this.emit("maxreconnect"), this.log.error("Maximum reconnection attempts reached.")), this.reconnect && !this.reconnecting && this.reconnections <= this.maxReconnectAttempts - 1 && (this.reconnecting = !0, this.reconnections = this.reconnections + 1, this.log.error("Could not connect to server. Reconnecting in " + Math.round(this.reconnectTimer / 1e3) + " seconds.."), this.emit("reconnect"), setTimeout(function() {
                        t.reconnecting = !1, t.connect()
                    }, this.reconnectTimer))), this.ws = null
                }, l.prototype._getPromiseDelay = function() {
                    return this.currentLatency <= 600 ? 600 : this.currentLatency + 100
                }, l.prototype._sendCommand = function(t, e, n, r) {
                    var o = this;
                    return new Promise(function(i, s) {
                        u.promiseDelay(t).then(function() {
                            s("No response from Twitch.")
                        }), u.isNull(o.ws) || 2 === o.ws.readyState || 3 === o.ws.readyState ? s("Not connected to server.") : (u.isNull(e) ? (o.log.info("Executing command: " + n), o.ws.send(n)) : (o.log.info("[" + u.channel(e) + "] Executing command: " + n), o.ws.send("PRIVMSG " + u.channel(e) + " :" + n)), r(i, s))
                    })
                }, l.prototype._sendMessage = function(t, e, n, r) {
                    var o = this;
                    return new Promise(function(i, a) {
                        if (u.isNull(o.ws) || 2 === o.ws.readyState || 3 === o.ws.readyState || u.isJustinfan(o.getUsername())) a("Not connected to server.");
                        else {
                            if (o.userstate[u.channel(e)] || (o.userstate[u.channel(e)] = {}), n.length >= 500) {
                                var c = u.splitLine(n, 500);
                                n = c[0], setTimeout(function() {
                                    o._sendMessage(t, e, c[1], function() {})
                                }, 350)
                            }
                            o.ws.send("PRIVMSG " + u.channel(e) + " :" + n);
                            var l = {};
                            Object.keys(o.emotesets).forEach(function(t) {
                                o.emotesets[t].forEach(function(t) {
                                    if (u.isRegex(t.code)) return s.emoteRegex(n, t.code, t.id, l);
                                    s.emoteString(n, t.code, t.id, l)
                                })
                            });
                            var f = u.merge(o.userstate[u.channel(e)], s.emotes({
                                emotes: s.transformEmotes(l) || null
                            }));
                            n.match(/^\u0001ACTION ([^\u0001]+)\u0001$/) ? (f["message-type"] = "action", o.log.info("[" + u.channel(e) + "] *<" + o.getUsername() + ">: " + n.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1]), o.emits(["action", "message"], [
                                [u.channel(e), f, n.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], !0],
                                [u.channel(e), f, n.match(/^\u0001ACTION ([^\u0001]+)\u0001$/)[1], !0]
                            ])) : (f["message-type"] = "chat", o.log.info("[" + u.channel(e) + "] <" + o.getUsername() + ">: " + n), o.emits(["chat", "message"], [
                                [u.channel(e), f, n, !0],
                                [u.channel(e), f, n, !0]
                            ])), r(i, a)
                        }
                    })
                }, l.prototype._updateEmoteset = function(t) {
                    this.emotes = t
                }, l.prototype._updateBadges = function(t, e) {
                    this.badges = t, this.badgesRaw = e
                }, l.prototype.getUsername = function() {
                    return this.username
                }, l.prototype.getOptions = function() {
                    return this.opts
                }, l.prototype.getChannels = function() {
                    return this.channels
                }, l.prototype.isMod = function(t, e) {
                    return this.moderators[u.channel(t)] || (this.moderators[u.channel(t)] = []), this.moderators[u.channel(t)].indexOf(u.username(e)) >= 0
                }, l.prototype.readyState = function() {
                    return u.isNull(this.ws) ? "CLOSED" : ["CONNECTING", "OPEN", "CLOSING", "CLOSED"][this.ws.readyState]
                }, l.prototype.disconnect = function() {
                    var t = this;
                    return new Promise(function(e, n) {
                        u.isNull(t.ws) || 3 === t.ws.readyState ? (t.log.error("Cannot disconnect from server. Socket is not opened or connection is already closing."), n("Cannot disconnect from server. Socket is not opened or connection is already closing.")) : (t.wasCloseCalled = !0, t.log.info("Disconnecting from server.."), t.ws.close(), t.once("_promiseDisconnect", function() {
                            e([t.server, ~~t.port])
                        }))
                    })
                }, l.prototype.utils = {
                    levenshtein: function(t, e, n) {
                        if ((n = u.get(n, !1)) || (t = t.toLowerCase(), e = e.toLowerCase()), t == e) return 0;
                        var r = t.length,
                            o = e.length;
                        if (0 === r) return 1 * o;
                        if (0 === o) return 1 * r;
                        var i = !1;
                        try {
                            i = !"0" [0]
                        } catch (t) {
                            i = !0
                        }
                        i && (t = t.split(""), e = e.split(""));
                        var s, a, c, l, f, h, p = new Array(o + 1),
                            m = new Array(o + 1);
                        for (a = 0; a <= o; a++) p[a] = 1 * a;
                        for (s = 0; s < r; s++) {
                            for (m[0] = p[0] + 1, a = 0; a < o; a++) c = p[a] + (t[s] == e[a] ? 0 : 1), (l = p[a + 1] + 1) < c && (c = l), (f = m[a] + 1) < c && (c = f), m[a + 1] = c;
                            h = p, p = m, m = h
                        }
                        return p[o]
                    },
                    raffle: {
                        init: function(t) {
                            this.raffleChannels || (this.raffleChannels = {}), this.raffleChannels[u.channel(t)] || (this.raffleChannels[u.channel(t)] = [])
                        },
                        enter: function(t, e) {
                            this.init(t), this.raffleChannels[u.channel(t)].push(e.toLowerCase())
                        },
                        leave: function(t, e) {
                            this.init(t);
                            var n = this.raffleChannels[u.channel(t)].indexOf(u.username(e));
                            return n >= 0 && (this.raffleChannels[u.channel(t)].splice(n, 1), !0)
                        },
                        pick: function(t) {
                            this.init(t);
                            var e = this.raffleChannels[u.channel(t)].length;
                            return e >= 1 ? this.raffleChannels[u.channel(t)][Math.floor(Math.random() * e)] : null
                        },
                        reset: function(t) {
                            this.init(t), this.raffleChannels[u.channel(t)] = []
                        },
                        count: function(t) {
                            return this.init(t), this.raffleChannels[u.channel(t)] ? this.raffleChannels[u.channel(t)].length : 0
                        },
                        isParticipating: function(t, e) {
                            return this.init(t), this.raffleChannels[u.channel(t)].indexOf(u.username(e)) >= 0
                        }
                    },
                    symbols: function(t) {
                        for (var e = 0, n = 0; n < t.length; n++) {
                            var r = t.substring(n, n + 1).charCodeAt(0);
                            (r <= 30 || r >= 127 || 65533 === r) && e++
                        }
                        return Math.ceil(e / t.length * 100) / 100
                    },
                    uppercase: function(t) {
                        var e = t.length,
                            n = t.match(/[A-Z]/g);
                        return u.isNull(n) ? 0 : n.length / e
                    }
                }, t.exports && (t.exports = l), "undefined" != typeof window && (window.tmi = {}, window.tmi.client = l)
            }).call(this, n(3))
        }, function(t, e, n) {
            String.prototype.includes || (String.prototype.includes = function() {
                return -1 !== String.prototype.indexOf.apply(this, arguments)
            }), String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
                return e = e || 0, this.indexOf(t, e) === e
            }), Object.setPrototypeOf || (Object.setPrototypeOf = function(t, e) {
                return t.__proto__ = e, t
            }), t.exports = {
                client: n(1),
                Client: n(1)
            }
        }, function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }, function(t, e, n) {
            var r = n(0);

            function o(t, e) {
                var n = this;
                return t = r.channel(t), e = r.get(e, 30), this._sendCommand(this._getPromiseDelay(), t, "/followers " + e, function(r, o) {
                    n.once("_promiseFollowers", function(n) {
                        n ? o(n) : r([t, ~~e])
                    })
                })
            }

            function i(t) {
                var e = this;
                return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/followersoff", function(n, r) {
                    e.once("_promiseFollowersoff", function(e) {
                        e ? r(e) : n([t])
                    })
                })
            }

            function s(t) {
                var e = this;
                return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), null, "PART " + t, function(n, r) {
                    e.once("_promisePart", function(e) {
                        e ? r(e) : n([t])
                    })
                })
            }

            function a(t) {
                var e = this;
                return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/r9kbeta", function(n, r) {
                    e.once("_promiseR9kbeta", function(e) {
                        e ? r(e) : n([t])
                    })
                })
            }

            function c(t) {
                var e = this;
                return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/r9kbetaoff", function(n, r) {
                    e.once("_promiseR9kbetaoff", function(e) {
                        e ? r(e) : n([t])
                    })
                })
            }

            function u(t, e) {
                var n = this;
                return t = r.channel(t), e = r.get(e, 300), this._sendCommand(this._getPromiseDelay(), t, "/slow " + e, function(r, o) {
                    n.once("_promiseSlow", function(n) {
                        n ? o(n) : r([t, ~~e])
                    })
                })
            }

            function l(t) {
                var e = this;
                return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/slowoff", function(n, r) {
                    e.once("_promiseSlowoff", function(e) {
                        e ? r(e) : n([t])
                    })
                })
            }
            t.exports = {
                action: function(t, e) {
                    return t = r.channel(t), e = "\x01ACTION " + e + "\x01", this._sendMessage(this._getPromiseDelay(), t, e, function(n, r) {
                        n([t, e])
                    })
                },
                ban: function(t, e, n) {
                    var o = this;
                    return t = r.channel(t), e = r.username(e), n = r.get(n, ""), this._sendCommand(this._getPromiseDelay(), t, "/ban " + e + " " + n, function(r, i) {
                        o.once("_promiseBan", function(o) {
                            o ? i(o) : r([t, e, n])
                        })
                    })
                },
                clear: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/clear", function(n, r) {
                        e.once("_promiseClear", function(e) {
                            e ? r(e) : n([t])
                        })
                    })
                },
                color: function(t, e) {
                    var n = this;
                    return e = r.get(e, t), this._sendCommand(this._getPromiseDelay(), "#tmijs", "/color " + e, function(t, r) {
                        n.once("_promiseColor", function(n) {
                            n ? r(n) : t([e])
                        })
                    })
                },
                commercial: function(t, e) {
                    var n = this;
                    return t = r.channel(t), e = r.get(e, 30), this._sendCommand(this._getPromiseDelay(), t, "/commercial " + e, function(r, o) {
                        n.once("_promiseCommercial", function(n) {
                            n ? o(n) : r([t, ~~e])
                        })
                    })
                },
                emoteonly: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/emoteonly", function(n, r) {
                        e.once("_promiseEmoteonly", function(e) {
                            e ? r(e) : n([t])
                        })
                    })
                },
                emoteonlyoff: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/emoteonlyoff", function(n, r) {
                        e.once("_promiseEmoteonlyoff", function(e) {
                            e ? r(e) : n([t])
                        })
                    })
                },
                followersonly: o,
                followersmode: o,
                followersonlyoff: i,
                followersmodeoff: i,
                host: function(t, e) {
                    var n = this;
                    return t = r.channel(t), e = r.username(e), this._sendCommand(2e3, t, "/host " + e, function(r, o) {
                        n.once("_promiseHost", function(n, i) {
                            n ? o(n) : r([t, e, ~~i])
                        })
                    })
                },
                join: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), null, "JOIN " + t, function(n, r) {
                        e.once("_promiseJoin", function(e) {
                            e ? r(e) : n([t])
                        })
                    })
                },
                mod: function(t, e) {
                    var n = this;
                    return t = r.channel(t), e = r.username(e), this._sendCommand(this._getPromiseDelay(), t, "/mod " + e, function(r, o) {
                        n.once("_promiseMod", function(n) {
                            n ? o(n) : r([t, e])
                        })
                    })
                },
                mods: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/mods", function(n, r) {
                        e.once("_promiseMods", function(o, i) {
                            o ? r(o) : (i.forEach(function(n) {
                                e.moderators[t] || (e.moderators[t] = []), e.moderators[t].indexOf(n) < 0 && e.moderators[t].push(n)
                            }), n(i))
                        })
                    })
                },
                part: s,
                leave: s,
                ping: function() {
                    var t = this;
                    return this._sendCommand(this._getPromiseDelay(), null, "PING", function(e, n) {
                        t.latency = new Date, t.pingTimeout = setTimeout(function() {
                            null !== t.ws && (t.wasCloseCalled = !1, t.log.error("Ping timeout."), t.ws.close(), clearInterval(t.pingLoop), clearTimeout(t.pingTimeout))
                        }, r.get(t.opts.connection.timeout, 9999)), t.once("_promisePing", function(t) {
                            e([parseFloat(t)])
                        })
                    })
                },
                r9kbeta: a,
                r9kmode: a,
                r9kbetaoff: c,
                r9kmodeoff: c,
                raw: function(t) {
                    return this._sendCommand(this._getPromiseDelay(), null, t, function(e, n) {
                        e([t])
                    })
                },
                say: function(t, e) {
                    return t = r.channel(t), e.startsWith(".") && !e.startsWith("..") || e.startsWith("/") || e.startsWith("\\") ? "me " === e.substr(1, 3) ? this.action(t, e.substr(4)) : this._sendCommand(this._getPromiseDelay(), t, e, function(n, r) {
                        n([t, e])
                    }) : this._sendMessage(this._getPromiseDelay(), t, e, function(n, r) {
                        n([t, e])
                    })
                },
                slow: u,
                slowmode: u,
                slowoff: l,
                slowmodeoff: l,
                subscribers: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/subscribers", function(n, r) {
                        e.once("_promiseSubscribers", function(e) {
                            e ? r(e) : n([t])
                        })
                    })
                },
                subscribersoff: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(this._getPromiseDelay(), t, "/subscribersoff", function(n, r) {
                        e.once("_promiseSubscribersoff", function(e) {
                            e ? r(e) : n([t])
                        })
                    })
                },
                timeout: function(t, e, n, o) {
                    var i = this;
                    return t = r.channel(t), e = r.username(e), r.isNull(n) || r.isInteger(n) || (o = n, n = 300), n = r.get(n, 300), o = r.get(o, ""), this._sendCommand(this._getPromiseDelay(), t, "/timeout " + e + " " + n + " " + o, function(r, s) {
                        i.once("_promiseTimeout", function(i) {
                            i ? s(i) : r([t, e, ~~n, o])
                        })
                    })
                },
                unban: function(t, e) {
                    var n = this;
                    return t = r.channel(t), e = r.username(e), this._sendCommand(this._getPromiseDelay(), t, "/unban " + e, function(r, o) {
                        n.once("_promiseUnban", function(n) {
                            n ? o(n) : r([t, e])
                        })
                    })
                },
                unhost: function(t) {
                    var e = this;
                    return t = r.channel(t), this._sendCommand(2e3, t, "/unhost", function(n, r) {
                        e.once("_promiseUnhost", function(e) {
                            e ? r(e) : n([t])
                        })
                    })
                },
                unmod: function(t, e) {
                    var n = this;
                    return t = r.channel(t), e = r.username(e), this._sendCommand(this._getPromiseDelay(), t, "/unmod " + e, function(r, o) {
                        n.once("_promiseUnmod", function(n) {
                            n ? o(n) : r([t, e])
                        })
                    })
                },
                whisper: function(t, e) {
                    var n = this;
                    return (t = r.username(t)) === this.getUsername() ? Promise.reject("Cannot send a whisper to the same account.") : this._sendCommand(this._getPromiseDelay(), "#tmijs", "/w " + t + " " + e, function(o, i) {
                        var s = r.channel(t),
                            a = r.merge({
                                "message-type": "whisper",
                                "message-id": null,
                                "thread-id": null,
                                username: n.getUsername()
                            }, n.globaluserstate);
                        n.emits(["whisper", "message"], [
                            [s, a, e, !0],
                            [s, a, e, !0]
                        ]), o([t, e])
                    })
                }
            }
        }, function(t, e) {
            var n, r, o = t.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function s() {
                throw new Error("clearTimeout has not been defined")
            }

            function a(t) {
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
                } catch (t) {
                    n = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : s
                } catch (t) {
                    r = s
                }
            }();
            var c, u = [],
                l = !1,
                f = -1;

            function h() {
                l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && p())
            }

            function p() {
                if (!l) {
                    var t = a(h);
                    l = !0;
                    for (var e = u.length; e;) {
                        for (c = u, u = []; ++f < e;) c && c[f].run();
                        f = -1, e = u.length
                    }
                    c = null, l = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function m(t, e) {
                this.fun = t, this.array = e
            }

            function d() {}
            o.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                u.push(new m(t, e)), 1 !== u.length || l || a(p)
            }, m.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(t) {
                return []
            }, o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        }, function(t, e) {
            function n() {
                this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
            }

            function r(t) {
                return "function" == typeof t
            }

            function o(t) {
                return "object" == typeof t && null !== t
            }

            function i(t) {
                return void 0 === t
            }
            String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
                return e = e || 0, this.indexOf(t, e) === e
            }), t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
                return this._maxListeners = t, this
            }, n.prototype.emits = function(t, e) {
                for (var n = 0; n < t.length; n++) e[n].unshift(t[n]), this.emit.apply(this, e[n])
            }, n.prototype.emit = function(t) {
                var e, n, s, a, c, u;
                if (this._events || (this._events = {}), "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                    if ((e = arguments[1]) instanceof Error) throw e;
                    throw TypeError('Uncaught, unspecified "error" event.')
                }
                if (i(n = this._events[t])) return !1;
                if (r(n)) switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        a = Array.prototype.slice.call(arguments, 1), n.apply(this, a)
                } else if (o(n))
                    for (a = Array.prototype.slice.call(arguments, 1), s = (u = n.slice()).length, c = 0; c < s; c++) u[c].apply(this, a);
                return !0
            }, n.prototype.addListener = function(t, e) {
                var s;
                if (!r(e)) throw TypeError("listener must be a function");
                return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, r(e.listener) ? e.listener : e), this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, o(this._events[t]) && !this._events[t].warned && (s = i(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[t].length > s && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
            }, n.prototype.on = n.prototype.addListener, n.prototype.once = function(t, e) {
                if (!r(e)) throw TypeError("listener must be a function");
                var n = !1;
                if (this._events.hasOwnProperty(t) && "_" === t.charAt(0)) {
                    var o = 1,
                        i = t;
                    for (var s in this._events) this._events.hasOwnProperty(s) && s.startsWith(i) && o++;
                    t += o
                }

                function a() {
                    "_" !== t.charAt(0) || isNaN(t.substr(t.length - 1)) || (t = t.substring(0, t.length - 1)), this.removeListener(t, a), n || (n = !0, e.apply(this, arguments))
                }
                return a.listener = e, this.on(t, a), this
            }, n.prototype.removeListener = function(t, e) {
                var n, i, s, a;
                if (!r(e)) throw TypeError("listener must be a function");
                if (!this._events || !this._events[t]) return this;
                if (s = (n = this._events[t]).length, i = -1, n === e || r(n.listener) && n.listener === e) {
                    if (delete this._events[t], this._events.hasOwnProperty(t + "2") && "_" === t.charAt(0)) {
                        var c = t;
                        for (var u in this._events) this._events.hasOwnProperty(u) && u.startsWith(c) && (isNaN(parseInt(u.substr(u.length - 1))) || (this._events[t + parseInt(u.substr(u.length - 1) - 1)] = this._events[u], delete this._events[u]));
                        this._events[t] = this._events[t + "1"], delete this._events[t + "1"]
                    }
                    this._events.removeListener && this.emit("removeListener", t, e)
                } else if (o(n)) {
                    for (a = s; a-- > 0;)
                        if (n[a] === e || n[a].listener && n[a].listener === e) {
                            i = a;
                            break
                        }
                    if (i < 0) return this;
                    1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e)
                }
                return this
            }, n.prototype.removeAllListeners = function(t) {
                var e, n;
                if (!this._events) return this;
                if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
                if (0 === arguments.length) {
                    for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
                    return this.removeAllListeners("removeListener"), this._events = {}, this
                }
                if (r(n = this._events[t])) this.removeListener(t, n);
                else if (n)
                    for (; n.length;) this.removeListener(t, n[n.length - 1]);
                return delete this._events[t], this
            }, n.prototype.listeners = function(t) {
                return this._events && this._events[t] ? r(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
            }, n.prototype.listenerCount = function(t) {
                if (this._events) {
                    var e = this._events[t];
                    if (r(e)) return 1;
                    if (e) return e.length
                }
                return 0
            }, n.listenerCount = function(t, e) {
                return t.listenerCount(e)
            }
        }, function(t, e, n) {
            var r = n(0),
                o = "info",
                i = {
                    trace: 0,
                    debug: 1,
                    info: 2,
                    warn: 3,
                    error: 4,
                    fatal: 5
                };

            function s(t) {
                return function(e) {
                    i[t] >= i[o] && console.log("[" + r.formatDate(new Date) + "] " + t + ": " + e)
                }
            }
            t.exports = {
                setLevel: function(t) {
                    o = t
                },
                trace: s("trace"),
                debug: s("debug"),
                info: s("info"),
                warn: s("warn"),
                error: s("error"),
                fatal: s("fatal")
            }
        }, function(t, e, n) {
            var r = n(0);
            t.exports = {
                badges: function(t) {
                    if (r.isString(t.badges)) {
                        for (var e = {}, n = t.badges.split(","), o = 0; o < n.length; o++) {
                            var i = n[o].split("/");
                            if (!i[1]) return;
                            e[i[0]] = i[1]
                        }
                        t["badges-raw"] = t.badges, t.badges = e
                    }
                    return r.isBoolean(t.badges) && (t["badges-raw"] = null), t
                },
                emotes: function(t) {
                    if (r.isString(t.emotes)) {
                        for (var e = t.emotes.split("/"), n = {}, o = 0; o < e.length; o++) {
                            var i = e[o].split(":");
                            if (!i[1]) return;
                            n[i[0]] = i[1].split(",")
                        }
                        t["emotes-raw"] = t.emotes, t.emotes = n
                    }
                    return r.isBoolean(t.emotes) && (t["emotes-raw"] = null), t
                },
                emoteRegex: function(t, e, n, o) {
                    for (var i, s = /\S+/g, a = new RegExp("(\\b|^|s)" + r.unescapeHtml(e) + "(\\b|$|s)"); null !== (i = s.exec(t));) a.test(i[0]) && (o[n] = o[n] || [], o[n].push([i.index, s.lastIndex - 1]))
                },
                emoteString: function(t, e, n, o) {
                    for (var i, s = /\S+/g; null !== (i = s.exec(t));) i[0] === r.unescapeHtml(e) && (o[n] = o[n] || [], o[n].push([i.index, s.lastIndex - 1]))
                },
                transformEmotes: function(t) {
                    var e = "";
                    return Object.keys(t).forEach(function(n) {
                        e = e + n + ":", t[n].forEach(function(t) {
                            e = e + t.join("-") + ","
                        }), e = e.slice(0, -1) + "/"
                    }), e.slice(0, -1)
                },
                msg: function(t) {
                    var e = {
                            raw: t,
                            tags: {},
                            prefix: null,
                            command: null,
                            params: []
                        },
                        n = 0,
                        r = 0;
                    if (64 === t.charCodeAt(0)) {
                        if (-1 === (r = t.indexOf(" "))) return null;
                        for (var o = t.slice(1, r).split(";"), i = 0; i < o.length; i++) {
                            var s = o[i],
                                a = s.split("=");
                            e.tags[a[0]] = s.substring(s.indexOf("=") + 1) || !0
                        }
                        n = r + 1
                    }
                    for (; 32 === t.charCodeAt(n);) n++;
                    if (58 === t.charCodeAt(n)) {
                        if (-1 === (r = t.indexOf(" ", n))) return null;
                        for (e.prefix = t.slice(n + 1, r), n = r + 1; 32 === t.charCodeAt(n);) n++
                    }
                    if (-1 === (r = t.indexOf(" ", n))) return t.length > n ? (e.command = t.slice(n), e) : null;
                    for (e.command = t.slice(n, r), n = r + 1; 32 === t.charCodeAt(n);) n++;
                    for (; n < t.length;) {
                        if (r = t.indexOf(" ", n), 58 === t.charCodeAt(n)) {
                            e.params.push(t.slice(n + 1));
                            break
                        }
                        if (-1 === r) {
                            if (-1 === r) {
                                e.params.push(t.slice(n));
                                break
                            }
                        } else
                            for (e.params.push(t.slice(n, r)), n = r + 1; 32 === t.charCodeAt(n);) n++
                    }
                    return e
                }
            }
        }, function(t, e) {
            function n(t) {
                this.queue = [], this.index = 0, this.defaultDelay = t || 3e3
            }
            n.prototype.add = function(t, e) {
                this.queue.push({
                    fn: t,
                    delay: e
                })
            }, n.prototype.run = function(t) {
                (t || 0 === t) && (this.index = t), this.next()
            }, n.prototype.next = function() {
                var t = this,
                    e = this.index++,
                    n = this.queue[e],
                    r = this.queue[this.index];
                n && (n.fn(), r && setTimeout(function() {
                    t.next()
                }, r.delay || this.defaultDelay))
            }, n.prototype.reset = function() {
                this.index = 0
            }, n.prototype.clear = function() {
                this.index = 0, this.queue = []
            }, e.queue = n
        }, function(t, e) {}])
    },
    sNHY: function(t, e, n) {
        "use strict";
        var r = "".concat("/", "_next/static/"),
            o = "".concat("619e62c", ".worker.js");
        "".concat(r).concat(o)
    },
    sSpL: function(t, e, n) {
        "use strict"
    },
    sXAp: function(t, e, n) {
        t.exports = n("9O4T")
    },
    tReM: function(t, e) {
        t.exports = {}
    },
    uAyS: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return r
        });
        var r = "r8s4dac0uhzifbpu9sjdiwzctle17ff"
    },
    "uP2+": function(t, e, n) {
        "use strict"
    },
    ubhL: function(t, e, n) {
        var r = n("kz3d")("keys"),
            o = n("b1KM");
        t.exports = function(t) {
            return r[t] || (r[t] = o(t))
        }
    },
    vbc5: function(t, e) {
        t.exports = function(t) {
            return "object" === typeof t ? null !== t : "function" === typeof t
        }
    },
    wHU4: function(t, e, n) {
        var r = n("hR4s").document;
        t.exports = r && r.documentElement
    },
    wOJj: function(t, e) {
        t.exports = function() {}
    },
    wnlw: function(t, e, n) {
        var r = n("IFjL");
        r(r.S, "Array", {
            isArray: n("gNE/")
        })
    },
    xLJM: function(t, e, n) {
        n("Fk9O"), n("/r3m"), t.exports = n("Bkdt")
    },
    y7sZ: function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (e) {
                return {
                    e: !0,
                    v: e
                }
            }
        }
    },
    yew7: function(t, e, n) {
        var r = n("8fQz"),
            o = n("3555"),
            i = n("guEv"),
            s = n("ubhL")("IE_PROTO"),
            a = function() {},
            c = function() {
                var t, e = n("1bLK")("iframe"),
                    r = i.length;
                for (e.style.display = "none", n("wHU4").appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; r--;) delete c.prototype[i[r]];
                return c()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[s] = t) : n = c(), void 0 === e ? n : o(n, e)
        }
    },
    ysci: function(t, e, n) {
        t.exports = n("3thp")
    },
    yyOJ: function(t, e, n) {
        "use strict";
        var r = n("DcBZ");
        n.o(r, "CLIENT_ID") && n.d(e, "CLIENT_ID", function() {
            return r.CLIENT_ID
        });
        n("zLaN"), n("jpyh"), n("+s2R"), n("uP2+"), n("sSpL"), n("ztrp"), n("0lEX"), n("/QkT"), n("YQQD"), n("2G83");
        var o = n("uAyS");
        n.d(e, "CLIENT_ID", function() {
            return o.a
        });
        n("sNHY")
    },
    z7HR: function(t, e, n) {
        var r = n("J0XI"),
            o = n("guEv").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return r(t, o)
        }
    },
    zLaN: function(t, e, n) {
        "use strict"
    },
    zjfI: function(t, e, n) {
        "use strict";
        var r = n("yew7"),
            o = n("jHgz"),
            i = n("KnMe"),
            s = {};
        n("b95h")(s, n("eD9m")("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r(s, {
                next: o(1, n)
            }), i(t, e + " Iterator")
        }
    },
    ztrp: function(t, e, n) {
        "use strict"
    }
});