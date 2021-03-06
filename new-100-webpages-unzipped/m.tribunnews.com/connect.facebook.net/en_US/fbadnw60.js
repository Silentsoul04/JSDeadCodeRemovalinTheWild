/*1570706544,,JIT Construction: v1001278076,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {
    (window.FB && !window.FB.__buffer) || (function(window, fb_fif_window) {
        var apply = Function.prototype.apply;

        function bindContext(fn, thisArg) {
            return function _sdkBound() {
                return apply.call(fn, thisArg, arguments);
            };
        }
        var global = {
            __type: 'JS_SDK_SANDBOX',
            window: window,
            document: window.document
        };
        var sandboxWhitelist = ['setTimeout', 'setInterval', 'clearTimeout', 'clearInterval'];
        for (var i = 0; i < sandboxWhitelist.length; i++) {
            global[sandboxWhitelist[i]] = bindContext(window[sandboxWhitelist[i]], window);
        }(function() {
            var self = window;
            var __DEV__ = 0;

            function emptyFunction() {};
            var __transform_includes = {};
            var __annotator, __bodyWrapper;
            var __buffer = window.FB && window.FB.__buffer;
            var __w, __t;
            var undefined;
            var __p;
            with(this) {
                (function() {
                    var a = {},
                        b = function(a, b) {
                            if (!a && !b) return null;
                            var c = {};
                            typeof a !== "undefined" && (c.type = a);
                            typeof b !== "undefined" && (c.signature = b);
                            return c
                        },
                        c = function(a, c) {
                            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                                return /\?/.test(a) ? "?" + a.replace("?", "") : a
                            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
                        },
                        d = function(a, b, c) {
                            return a
                        },
                        e = function(a, b, d) {
                            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
                            if ("typechecks" in __transform_includes) {
                                b = c(b ? b.name : void 0, d);
                                b && __w(a, b)
                            }
                            return a
                        },
                        f = function(a, b, c) {
                            return c.apply(a, b)
                        },
                        g = function(a, b, c, d) {
                            d && d.params && __t.apply(a, d.params);
                            c = c.apply(a, b);
                            d && d.returns && __t([c, d.returns]);
                            return c
                        },
                        h = function(b, c, d, e, f) {
                            if (f) {
                                f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                                e = f.callId;
                                a[e] = (a[e] || 0) + 1
                            }
                            return d.apply(b, c)
                        };
                    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = h, __bodyWrapper.getCodeUsage = function() {
                        return a
                    }, __bodyWrapper.clearCodeUsage = function() {
                        a = {}
                    }) : "typechecks" in __transform_includes ? __bodyWrapper = g : __bodyWrapper = f)
                })();
                __t = function(a) {
                    return a[0]
                }, __w = function(a) {
                    return a
                };
                var require, __d;
                (function(a) {
                    var b = {},
                        c = {},
                        d = ["global", "require", "requireDynamic", "requireLazy", "module", "exports"];
                    require = function(d, e) {
                        if (Object.prototype.hasOwnProperty.call(c, d)) return c[d];
                        if (!Object.prototype.hasOwnProperty.call(b, d)) {
                            if (e) return null;
                            throw new Error("Module " + d + " has not been defined")
                        }
                        e = b[d];
                        var f = e.deps,
                            g = e.factory.length,
                            h, i = [];
                        for (var j = 0; j < g; j++) {
                            switch (f[j]) {
                                case "module":
                                    h = e;
                                    break;
                                case "exports":
                                    h = e.exports;
                                    break;
                                case "global":
                                    h = a;
                                    break;
                                case "require":
                                    h = require;
                                    break;
                                case "requireDynamic":
                                    h = null;
                                    break;
                                case "requireLazy":
                                    h = null;
                                    break;
                                default:
                                    h = require.call(null, f[j])
                            }
                            i.push(h)
                        }
                        e.factory.apply(a, i);
                        c[d] = e.exports;
                        return e.exports
                    };
                    __d = function(a, e, f, g) {
                        typeof f === "function" ? (b[a] = {
                            factory: f,
                            deps: d.concat(e),
                            exports: {}
                        }, g === 3 && require.call(null, a)) : c[a] = f
                    };
                    a.$RefreshReg$ = function() {};
                    a.$RefreshSig$ = function() {
                        return function(a) {
                            return a
                        }
                    }
                })(this);
                __d("ES5Array", [], (function(a, b, c, d, e, f) {
                    a = {};
                    a.isArray = function(a) {
                        return Object.prototype.toString.call(a) == "[object Array]"
                    };
                    e.exports = a
                }), null);
                __d("ES5ArrayPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {};
                    g.map = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c, d = this.length,
                            e = new Array(d);
                        for (c = 0; c < d; ++c) c in this && (e[c] = a.call(b, this[c], c, this));
                        return e
                    };
                    g.forEach = function(a, b) {
                        g.map.call(this, a, b)
                    };
                    g.filter = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c, d, e = this.length,
                            f = [];
                        for (c = 0; c < e; ++c) c in this && (d = this[c], a.call(b, d, c, this) && f.push(d));
                        return f
                    };
                    g.every = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c = new Object(this),
                            d = c.length;
                        for (var e = 0; e < d; e++)
                            if (e in c && !a.call(b, c[e], e, c)) return !1;
                        return !0
                    };
                    g.some = function(a, b) {
                        if (typeof a !== "function") throw new TypeError();
                        var c = new Object(this),
                            d = c.length;
                        for (var e = 0; e < d; e++)
                            if (e in c && a.call(b, c[e], e, c)) return !0;
                        return !1
                    };
                    g.indexOf = function(a, b) {
                        var c = this.length;
                        b |= 0;
                        b < 0 && (b += c);
                        for (; b < c; b++)
                            if (b in this && this[b] === a) return b;
                        return -1
                    };
                    e.exports = g
                }), null);
                __d("ES5Date", [], (function(a, b, c, d, e, f) {
                    a = {};
                    a.now = function() {
                        return new Date().getTime()
                    };
                    e.exports = a
                }), null);
                __d("ES5FunctionPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = {};
                    a.bind = function(a) {
                        if (typeof this !== "function") throw new TypeError("Bind must be called on a function");
                        var b = this,
                            c = Array.prototype.slice.call(arguments, 1);

                        function d() {
                            return b.apply(a, c.concat(Array.prototype.slice.call(arguments)))
                        }
                        d.displayName = "bound:" + (b.displayName || b.name || "(?)");
                        d.toString = function() {
                            return "bound: " + b
                        };
                        return d
                    };
                    e.exports = a
                }), null);
                __d("ie8DontEnum", [], (function(a, b, c, d, e, f) {
                    var g = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "prototypeIsEnumerable", "constructor"],
                        h = {}.hasOwnProperty;
                    a = function() {};
                    ({
                        toString: !0
                    }).propertyIsEnumerable("toString") && (a = function(a, b) {
                        for (var c = 0; c < g.length; c++) {
                            var d = g[c];
                            h.call(a, d) && b(d)
                        }
                    });
                    e.exports = a
                }), null);
                __d("ES5Object", ["ie8DontEnum"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.hasOwnProperty;
                    a = {};

                    function h() {}
                    a.create = function(a) {
                        var b = typeof a;
                        if (b != "object" && b != "function") throw new TypeError("Object prototype may only be a Object or null");
                        h.prototype = a;
                        return new h()
                    };
                    a.keys = function(a) {
                        var c = typeof a;
                        if (c != "object" && c != "function" || a === null) throw new TypeError("Object.keys called on non-object");
                        var d = [];
                        for (var e in a) g.call(a, e) && d.push(e);
                        b("ie8DontEnum")(a, function(a) {
                            return d.push(a)
                        });
                        return d
                    };
                    a.freeze = function(a) {
                        return a
                    };
                    a.isFrozen = function() {
                        return !1
                    };
                    a.seal = function(a) {
                        return a
                    };
                    e.exports = a
                }), null);
                __d("ES5StringPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = {};
                    a.trim = function() {
                        if (this == null) throw new TypeError("String.prototype.trim called on null or undefined");
                        return String.prototype.replace.call(this, /^\s+|\s+$/g, "")
                    };
                    a.startsWith = function(a) {
                        var b = String(this);
                        if (this == null) throw new TypeError("String.prototype.startsWith called on null or undefined");
                        var c = arguments.length > 1 ? Number(arguments[1]) : 0;
                        isNaN(c) && (c = 0);
                        var d = Math.min(Math.max(c, 0), b.length);
                        return b.indexOf(String(a), c) == d
                    };
                    a.endsWith = function(a) {
                        var b = String(this);
                        if (this == null) throw new TypeError("String.prototype.endsWith called on null or undefined");
                        var c = b.length,
                            d = String(a),
                            e = arguments.length > 1 ? Number(arguments[1]) : c;
                        isNaN(e) && (e = 0);
                        var f = Math.min(Math.max(e, 0), c),
                            g = f - d.length;
                        return g < 0 ? !1 : b.lastIndexOf(d, g) == g
                    };
                    a.includes = function(a) {
                        if (this == null) throw new TypeError("String.prototype.contains called on null or undefined");
                        var b = String(this),
                            c = arguments.length > 1 ? Number(arguments[1]) : 0;
                        isNaN(c) && (c = 0);
                        return b.indexOf(String(a), c) != -1
                    };
                    a.contains = a.includes;
                    a.repeat = function(a) {
                        __p && __p();
                        if (this == null) throw new TypeError("String.prototype.repeat called on null or undefined");
                        var b = String(this);
                        a = a ? Number(a) : 0;
                        isNaN(a) && (a = 0);
                        if (a < 0 || a === Infinity) throw RangeError();
                        if (a === 1) return b;
                        if (a === 0) return "";
                        var c = "";
                        while (a) a & 1 && (c += b), (a >>= 1) && (b += b);
                        return c
                    };
                    e.exports = a
                }), null);
                __d("ES6Array", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        from: function(a) {
                            __p && __p();
                            if (a == null) throw new TypeError("Object is null or undefined");
                            var b = arguments[1],
                                c = arguments[2],
                                d = this,
                                e = Object(a),
                                f = typeof Symbol === "function" ? typeof Symbol === "function" ? Symbol.iterator : "@@iterator" : "@@iterator",
                                g = typeof b === "function",
                                h = typeof e[f] === "function",
                                i = 0,
                                j, k;
                            if (h) {
                                j = typeof d === "function" ? new d() : [];
                                var l = e[f](),
                                    m;
                                while (!(m = l.next()).done) k = m.value, g && (k = b.call(c, k, i)), j[i] = k, i += 1;
                                j.length = i;
                                return j
                            }
                            var n = e.length;
                            (isNaN(n) || n < 0) && (n = 0);
                            j = typeof d === "function" ? new d(n) : new Array(n);
                            while (i < n) k = e[i], g && (k = b.call(c, k, i)), j[i] = k, i += 1;
                            j.length = i;
                            return j
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES6ArrayPrototype", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {
                        find: function(a, b) {
                            if (this == null) throw new TypeError("Array.prototype.find called on null or undefined");
                            if (typeof a !== "function") throw new TypeError("predicate must be a function");
                            a = g.findIndex.call(this, a, b);
                            return a === -1 ? void 0 : this[a]
                        },
                        findIndex: function(a, b) {
                            if (this == null) throw new TypeError("Array.prototype.findIndex called on null or undefined");
                            if (typeof a !== "function") throw new TypeError("predicate must be a function");
                            var c = Object(this),
                                d = c.length >>> 0;
                            for (var e = 0; e < d; e++)
                                if (a.call(b, c[e], e, c)) return e;
                            return -1
                        },
                        fill: function(a) {
                            if (this == null) throw new TypeError("Array.prototype.fill called on null or undefined");
                            var b = Object(this),
                                c = b.length >>> 0,
                                d = arguments[1],
                                e = d >> 0,
                                f = e < 0 ? Math.max(c + e, 0) : Math.min(e, c),
                                g = arguments[2],
                                h = g === void 0 ? c : g >> 0,
                                i = h < 0 ? Math.max(c + h, 0) : Math.min(h, c);
                            while (f < i) b[f] = a, f++;
                            return b
                        }
                    };
                    e.exports = g
                }), null);
                __d("ES6DatePrototype", [], (function(a, b, c, d, e, f) {
                    function g(a) {
                        return (a < 10 ? "0" : "") + a
                    }
                    a = {
                        toISOString: function() {
                            if (!isFinite(this)) throw new Error("Invalid time value");
                            var a = this.getUTCFullYear();
                            a = (a < 0 ? "-" : a > 9999 ? "+" : "") + ("00000" + Math.abs(a)).slice(0 <= a && a <= 9999 ? -4 : -6);
                            return a + "-" + g(this.getUTCMonth() + 1) + "-" + g(this.getUTCDate()) + "T" + g(this.getUTCHours()) + ":" + g(this.getUTCMinutes()) + ":" + g(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES6Number", [], (function(a, b, c, d, e, f) {
                    __p && __p();
                    a = Math.pow(2, -52);
                    b = Math.pow(2, 53) - 1;
                    c = -1 * b;
                    d = {
                        isFinite: function(a) {
                            function b(b) {
                                return a.apply(this, arguments)
                            }
                            b.toString = function() {
                                return a.toString()
                            };
                            return b
                        }(function(a) {
                            return typeof a === "number" && isFinite(a)
                        }),
                        isNaN: function(a) {
                            function b(b) {
                                return a.apply(this, arguments)
                            }
                            b.toString = function() {
                                return a.toString()
                            };
                            return b
                        }(function(a) {
                            return typeof a === "number" && isNaN(a)
                        }),
                        isInteger: function(a) {
                            return this.isFinite(a) && Math.floor(a) === a
                        },
                        isSafeInteger: function(a) {
                            return this.isFinite(a) && a >= this.MIN_SAFE_INTEGER && a <= this.MAX_SAFE_INTEGER && Math.floor(a) === a
                        },
                        EPSILON: a,
                        MAX_SAFE_INTEGER: b,
                        MIN_SAFE_INTEGER: c
                    };
                    e.exports = d
                }), null);
                __d("ES6Object", ["ie8DontEnum"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.hasOwnProperty;
                    a = {
                        assign: function(a) {
                            __p && __p();
                            if (a == null) throw new TypeError("Object.assign target cannot be null or undefined");
                            a = Object(a);
                            for (var c = 0; c < (arguments.length <= 1 ? 0 : arguments.length - 1); c++) {
                                var d = c + 1 < 1 || arguments.length <= c + 1 ? void 0 : arguments[c + 1];
                                if (d == null) continue;
                                d = Object(d);
                                for (var e in d) g.call(d, e) && (a[e] = d[e]);
                                b("ie8DontEnum")(d, function(b) {
                                    return a[b] = d[b]
                                })
                            }
                            return a
                        },
                        is: function(a, b) {
                            if (a === b) return a !== 0 || 1 / a === 1 / b;
                            else return a !== a && b !== b
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES7ArrayPrototype", ["ES5Array", "ES5ArrayPrototype"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = b("ES5Array").isArray,
                        h = b("ES5ArrayPrototype").indexOf;

                    function i(a) {
                        return Math.min(Math.max(j(a), 0), Number.MAX_SAFE_INTEGER)
                    }

                    function j(a) {
                        a = Number(a);
                        return isFinite(a) && a !== 0 ? k(a) * Math.floor(Math.abs(a)) : a
                    }

                    function k(a) {
                        return a >= 0 ? 1 : -1
                    }
                    a = {
                        includes: function(a) {
                            "use strict";
                            __p && __p();
                            if (a !== void 0 && g(this) && !(typeof a === "number" && isNaN(a))) return h.apply(this, arguments) !== -1;
                            var b = Object(this),
                                c = b.length ? i(b.length) : 0;
                            if (c === 0) return !1;
                            var d = arguments.length > 1 ? j(arguments[1]) : 0,
                                e = d < 0 ? Math.max(c + d, 0) : d,
                                f = isNaN(a) && typeof a === "number";
                            while (e < c) {
                                var k = b[e];
                                if (k === a || typeof k === "number" && f && isNaN(k)) return !0;
                                e++
                            }
                            return !1
                        }
                    };
                    e.exports = a
                }), null);
                __d("ES7Object", ["ie8DontEnum"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.hasOwnProperty;
                    a = {};
                    a.entries = function(a) {
                        if (a == null) throw new TypeError("Object.entries called on non-object");
                        var c = [];
                        for (var d in a) g.call(a, d) && c.push([d, a[d]]);
                        b("ie8DontEnum")(a, function(b) {
                            return c.push([b, a[b]])
                        });
                        return c
                    };
                    a.values = function(a) {
                        if (a == null) throw new TypeError("Object.values called on non-object");
                        var c = [];
                        for (var d in a) g.call(a, d) && c.push(a[d]);
                        b("ie8DontEnum")(a, function(b) {
                            return c.push(a[b])
                        });
                        return c
                    };
                    e.exports = a
                }), null);
                __d("ES7StringPrototype", [], (function(a, b, c, d, e, f) {
                    a = {};
                    a.trimLeft = function() {
                        return this.replace(/^\s+/, "")
                    };
                    a.trimRight = function() {
                        return this.replace(/\s+$/, "")
                    };
                    e.exports = a
                }), null);
                /**
                 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
                 */
                __d("json3-3.3.2", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = {},
                        h = {
                            exports: g
                        },
                        i;

                    function j() {
                        __p && __p();
                        (function() {
                            __p && __p();
                            var b = typeof i === "function" && i.amd,
                                c = {
                                    "function": !0,
                                    object: !0
                                },
                                d = c[typeof g] && g && !g.nodeType && g,
                                e = c[typeof window] && window || this,
                                j = d && c[typeof h] && h && !h.nodeType && typeof a == "object" && a;
                            j && (j.global === j || j.window === j || j.self === j) && (e = j);

                            function k(b, a) {
                                __p && __p();
                                b || (b = e.Object());
                                a || (a = e.Object());
                                var d = b.Number || e.Number,
                                    g = b.String || e.String,
                                    h = b.Object || e.Object,
                                    i = b.Date || e.Date,
                                    j = b.SyntaxError || e.SyntaxError,
                                    l = b.TypeError || e.TypeError,
                                    m = b.Math || e.Math;
                                b = b.JSON || e.JSON;
                                typeof b == "object" && b && (a.stringify = b.stringify, a.parse = b.parse);
                                b = h.prototype;
                                var n = b.toString,
                                    o, p, q, r = new i(-3509827334573292);
                                try {
                                    r = r.getUTCFullYear() == -109252 && r.getUTCMonth() === 0 && r.getUTCDate() === 1 && r.getUTCHours() == 10 && r.getUTCMinutes() == 37 && r.getUTCSeconds() == 6 && r.getUTCMilliseconds() == 708
                                } catch (a) {}

                                function s(b) {
                                    __p && __p();
                                    if (s[b] !== q) return s[b];
                                    var c;
                                    if (b == "bug-string-char-index") c = "a" [0] != "a";
                                    else if (b == "json") c = s("json-stringify") && s("json-parse");
                                    else {
                                        var e, f = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                        if (b == "json-stringify") {
                                            var h = a.stringify,
                                                j = typeof h == "function" && r;
                                            if (j) {
                                                (e = function() {
                                                    return 1
                                                }).toJSON = e;
                                                try {
                                                    j = h(0) === "0" && h(new d()) === "0" && h(new g()) == '""' && h(n) === q && h(q) === q && h() === q && h(e) === "1" && h([e]) == "[1]" && h([q]) == "[null]" && h(null) == "null" && h([q, n, null]) == "[null,null,null]" && h({
                                                        a: [e, !0, !1, null, "\0\b\n\f\r\t"]
                                                    }) == f && h(null, e) === "1" && h([1, 2], null, 1) == "[\n 1,\n 2\n]" && h(new i(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && h(new i(864e13)) == '"+275760-09-13T00:00:00.000Z"' && h(new i(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && h(new i(-1)) == '"1969-12-31T23:59:59.999Z"'
                                                } catch (a) {
                                                    j = !1
                                                }
                                            }
                                            c = j
                                        }
                                        if (b == "json-parse") {
                                            h = a.parse;
                                            if (typeof h == "function") try {
                                                if (h("0") === 0 && !h(!1)) {
                                                    e = h(f);
                                                    var k = e.a.length == 5 && e.a[0] === 1;
                                                    if (k) {
                                                        try {
                                                            k = !h('"\t"')
                                                        } catch (a) {}
                                                        if (k) try {
                                                            k = h("01") !== 1
                                                        } catch (a) {}
                                                        if (k) try {
                                                            k = h("1.") !== 1
                                                        } catch (a) {}
                                                    }
                                                }
                                            } catch (a) {
                                                k = !1
                                            }
                                            c = k
                                        }
                                    }
                                    return s[b] = !!c
                                }
                                if (!s("json")) {
                                    var t = "[object Function]",
                                        u = "[object Date]",
                                        v = "[object Number]",
                                        w = "[object String]",
                                        x = "[object Array]",
                                        y = "[object Boolean]",
                                        z = s("bug-string-char-index");
                                    if (!r) var A = m.floor,
                                        B = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                        C = function(a, b) {
                                            return B[b] + 365 * (a - 1970) + A((a - 1969 + (b = +(b > 1))) / 4) - A((a - 1901 + b) / 100) + A((a - 1601 + b) / 400)
                                        };
                                    (o = b.hasOwnProperty) || (o = function(a) {
                                        var b = {},
                                            c;
                                        (b.__proto__ = null, b.__proto__ = {
                                            toString: 1
                                        }, b).toString != n ? o = function(a) {
                                            var b = this.__proto__;
                                            a = a in (this.__proto__ = null, this);
                                            this.__proto__ = b;
                                            return a
                                        } : (c = b.constructor, o = function(a) {
                                            var b = (this.constructor || c).prototype;
                                            return a in this && !(a in b && this[a] === b[a])
                                        });
                                        return o.call(this, a)
                                    });
                                    p = function(a, b) {
                                        __p && __p();
                                        var d = 0,
                                            e, f;
                                        (e = function() {
                                            this.valueOf = 0
                                        }).prototype.valueOf = 0;
                                        f = new e();
                                        for (e in f) o.call(f, e) && d++;
                                        f = null;
                                        !d ? (f = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function(a, b) {
                                            var d = n.call(a) == t,
                                                e, g = !d && typeof a.constructor != "function" && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
                                            for (e in a) !(d && e == "prototype") && g.call(a, e) && b(e);
                                            for (d = f.length; e = f[--d]; g.call(a, e) && b(e));
                                        }) : d == 2 ? p = function(a, b) {
                                            var c = {},
                                                d = n.call(a) == t,
                                                e;
                                            for (e in a) !(d && e == "prototype") && !o.call(c, e) && (c[e] = 1) && o.call(a, e) && b(e)
                                        } : p = function(a, b) {
                                            var c = n.call(a) == t,
                                                d, e;
                                            for (d in a) !(c && d == "prototype") && o.call(a, d) && !(e = d === "constructor") && b(d);
                                            (e || o.call(a, d = "constructor")) && b(d)
                                        };
                                        return p(a, b)
                                    };
                                    if (!s("json-stringify")) {
                                        var D = {
                                                92: "\\\\",
                                                34: '\\"',
                                                8: "\\b",
                                                12: "\\f",
                                                10: "\\n",
                                                13: "\\r",
                                                9: "\\t"
                                            },
                                            E = "000000",
                                            F = function(a, b) {
                                                return (E + (b || 0)).slice(-a)
                                            },
                                            G = "\\u00",
                                            H = function(a) {
                                                __p && __p();
                                                var b = '"',
                                                    c = 0,
                                                    d = a.length,
                                                    e = !z || d > 10,
                                                    f = e && (z ? a.split("") : a);
                                                for (; c < d; c++) {
                                                    var g = a.charCodeAt(c);
                                                    switch (g) {
                                                        case 8:
                                                        case 9:
                                                        case 10:
                                                        case 12:
                                                        case 13:
                                                        case 34:
                                                        case 92:
                                                            b += D[g];
                                                            break;
                                                        default:
                                                            if (g < 32) {
                                                                b += G + F(2, g.toString(16));
                                                                break
                                                            }
                                                            b += e ? f[c] : a.charAt(c)
                                                    }
                                                }
                                                return b + '"'
                                            },
                                            I = function(a, b, c, d, e, f, g) {
                                                __p && __p();
                                                var h, i, j, k, m, r, s, t, z, B;
                                                try {
                                                    h = b[a]
                                                } catch (a) {}
                                                if (typeof h == "object" && h) {
                                                    i = n.call(h);
                                                    if (i == u && !o.call(h, "toJSON"))
                                                        if (h > -1 / 0 && h < 1 / 0) {
                                                            if (C) {
                                                                m = A(h / 864e5);
                                                                for (j = A(m / 365.2425) + 1970 - 1; C(j + 1, 0) <= m; j++);
                                                                for (k = A((m - C(j, 0)) / 30.42); C(j, k + 1) <= m; k++);
                                                                m = 1 + m - C(j, k);
                                                                r = (h % 864e5 + 864e5) % 864e5;
                                                                s = A(r / 36e5) % 24;
                                                                t = A(r / 6e4) % 60;
                                                                z = A(r / 1e3) % 60;
                                                                r = r % 1e3
                                                            } else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), s = h.getUTCHours(), t = h.getUTCMinutes(), z = h.getUTCSeconds(), r = h.getUTCMilliseconds();
                                                            h = (j <= 0 || j >= 1e4 ? (j < 0 ? "-" : "+") + F(6, j < 0 ? -j : j) : F(4, j)) + "-" + F(2, k + 1) + "-" + F(2, m) + "T" + F(2, s) + ":" + F(2, t) + ":" + F(2, z) + "." + F(3, r) + "Z"
                                                        } else h = null;
                                                    else typeof h.toJSON == "function" && (i != v && i != w && i != x || o.call(h, "toJSON")) && (h = h.toJSON(a))
                                                }
                                                c && (h = c.call(b, a, h));
                                                if (h === null) return "null";
                                                i = n.call(h);
                                                if (i == y) return "" + h;
                                                else if (i == v) return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
                                                else if (i == w) return H("" + h);
                                                if (typeof h == "object") {
                                                    for (j = g.length; j--;)
                                                        if (g[j] === h) throw l();
                                                    g.push(h);
                                                    B = [];
                                                    k = f;
                                                    f += e;
                                                    if (i == x) {
                                                        for (m = 0, j = h.length; m < j; m++) s = I(m, h, c, d, e, f, g), B.push(s === q ? "null" : s);
                                                        t = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + k + "]" : "[" + B.join(",") + "]" : "[]"
                                                    } else p(d || h, function(a) {
                                                        var b = I(a, h, c, d, e, f, g);
                                                        b !== q && B.push(H(a) + ":" + (e ? " " : "") + b)
                                                    }), t = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + k + "}" : "{" + B.join(",") + "}" : "{}";
                                                    g.pop();
                                                    return t
                                                }
                                            };
                                        a.stringify = function(a, b, d) {
                                            __p && __p();
                                            var e, f, g, h;
                                            if (c[typeof b] && b)
                                                if ((h = n.call(b)) == t) f = b;
                                                else if (h == x) {
                                                g = {};
                                                for (var i = 0, j = b.length, k; i < j; k = b[i++], (h = n.call(k), h == w || h == v) && (g[k] = 1));
                                            }
                                            if (d)
                                                if ((h = n.call(d)) == v) {
                                                    if ((d -= d % 1) > 0)
                                                        for (e = "", d > 10 && (d = 10); e.length < d; e += " ");
                                                } else h == w && (e = d.length <= 10 ? d : d.slice(0, 10));
                                            return I("", (k = {}, k[""] = a, k), f, g, e, "", [])
                                        }
                                    }
                                    if (!s("json-parse")) {
                                        var J = g.fromCharCode,
                                            K = {
                                                92: "\\",
                                                34: '"',
                                                47: "/",
                                                98: "\b",
                                                116: "\t",
                                                110: "\n",
                                                102: "\f",
                                                114: "\r"
                                            },
                                            L, M, N = function() {
                                                L = M = null;
                                                throw j()
                                            },
                                            O = function() {
                                                __p && __p();
                                                var a = M,
                                                    b = a.length,
                                                    c, d, e, f, g;
                                                while (L < b) {
                                                    g = a.charCodeAt(L);
                                                    switch (g) {
                                                        case 9:
                                                        case 10:
                                                        case 13:
                                                        case 32:
                                                            L++;
                                                            break;
                                                        case 123:
                                                        case 125:
                                                        case 91:
                                                        case 93:
                                                        case 58:
                                                        case 44:
                                                            c = z ? a.charAt(L) : a[L];
                                                            L++;
                                                            return c;
                                                        case 34:
                                                            for (c = "@", L++; L < b;) {
                                                                g = a.charCodeAt(L);
                                                                if (g < 32) N();
                                                                else if (g == 92) {
                                                                    g = a.charCodeAt(++L);
                                                                    switch (g) {
                                                                        case 92:
                                                                        case 34:
                                                                        case 47:
                                                                        case 98:
                                                                        case 116:
                                                                        case 110:
                                                                        case 102:
                                                                        case 114:
                                                                            c += K[g];
                                                                            L++;
                                                                            break;
                                                                        case 117:
                                                                            d = ++L;
                                                                            for (e = L + 4; L < e; L++) g = a.charCodeAt(L), g >= 48 && g <= 57 || g >= 97 && g <= 102 || g >= 65 && g <= 70 || N();
                                                                            c += J("0x" + a.slice(d, L));
                                                                            break;
                                                                        default:
                                                                            N()
                                                                    }
                                                                } else {
                                                                    if (g == 34) break;
                                                                    g = a.charCodeAt(L);
                                                                    d = L;
                                                                    while (g >= 32 && g != 92 && g != 34) g = a.charCodeAt(++L);
                                                                    c += a.slice(d, L)
                                                                }
                                                            }
                                                            if (a.charCodeAt(L) == 34) {
                                                                L++;
                                                                return c
                                                            }
                                                            N();
                                                        default:
                                                            d = L;
                                                            g == 45 && (f = !0, g = a.charCodeAt(++L));
                                                            if (g >= 48 && g <= 57) {
                                                                g == 48 && (g = a.charCodeAt(L + 1), g >= 48 && g <= 57) && N();
                                                                f = !1;
                                                                for (; L < b && (g = a.charCodeAt(L), g >= 48 && g <= 57); L++);
                                                                if (a.charCodeAt(L) == 46) {
                                                                    e = ++L;
                                                                    for (; e < b && (g = a.charCodeAt(e), g >= 48 && g <= 57); e++);
                                                                    e == L && N();
                                                                    L = e
                                                                }
                                                                g = a.charCodeAt(L);
                                                                if (g == 101 || g == 69) {
                                                                    g = a.charCodeAt(++L);
                                                                    (g == 43 || g == 45) && L++;
                                                                    for (e = L; e < b && (g = a.charCodeAt(e), g >= 48 && g <= 57); e++);
                                                                    e == L && N();
                                                                    L = e
                                                                }
                                                                return +a.slice(d, L)
                                                            }
                                                            f && N();
                                                            if (a.slice(L, L + 4) == "true") {
                                                                L += 4;
                                                                return !0
                                                            } else if (a.slice(L, L + 5) == "false") {
                                                                L += 5;
                                                                return !1
                                                            } else if (a.slice(L, L + 4) == "null") {
                                                                L += 4;
                                                                return null
                                                            }
                                                            N()
                                                    }
                                                }
                                                return "$"
                                            },
                                            P = function(a) {
                                                __p && __p();
                                                var b, c;
                                                a == "$" && N();
                                                if (typeof a == "string") {
                                                    if ((z ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                                                    if (a == "[") {
                                                        b = [];
                                                        for (;; c || (c = !0)) {
                                                            a = O();
                                                            if (a == "]") break;
                                                            c && (a == "," ? (a = O(), a == "]" && N()) : N());
                                                            a == "," && N();
                                                            b.push(P(a))
                                                        }
                                                        return b
                                                    } else if (a == "{") {
                                                        b = {};
                                                        for (;; c || (c = !0)) {
                                                            a = O();
                                                            if (a == "}") break;
                                                            c && (a == "," ? (a = O(), a == "}" && N()) : N());
                                                            (a == "," || typeof a != "string" || (z ? a.charAt(0) : a[0]) != "@" || O() != ":") && N();
                                                            b[a.slice(1)] = P(O())
                                                        }
                                                        return b
                                                    }
                                                    N()
                                                }
                                                return a
                                            },
                                            Q = function(a, b, c) {
                                                c = R(a, b, c);
                                                c === q ? delete a[b] : a[b] = c
                                            },
                                            R = function(a, b, c) {
                                                var d = a[b],
                                                    e;
                                                if (typeof d == "object" && d)
                                                    if (n.call(d) == x)
                                                        for (e = d.length; e--;) Q(d, e, c);
                                                    else p(d, function(a) {
                                                        Q(d, a, c)
                                                    });
                                                return c.call(a, b, d)
                                            };
                                        a.parse = function(a, b) {
                                            var c;
                                            L = 0;
                                            M = "" + a;
                                            a = P(O());
                                            O() != "$" && N();
                                            L = M = null;
                                            return b && n.call(b) == t ? R((c = {}, c[""] = a, c), "", b) : a
                                        }
                                    }
                                }
                                a.runInContext = k;
                                return a
                            }
                            if (d && !b) k(e, d);
                            else {
                                var l = e.JSON,
                                    m = e.JSON3,
                                    n = !1,
                                    o = k(e, e.JSON3 = {
                                        noConflict: function() {
                                            n || (n = !0, e.JSON = l, e.JSON3 = m, l = m = null);
                                            return o
                                        }
                                    });
                                e.JSON = {
                                    parse: o.parse,
                                    stringify: o.stringify
                                }
                            }
                            b && i(function() {
                                return o
                            })
                        }).call(this)
                    }
                    var k = !1,
                        l = function() {
                            k || (k = !0, j());
                            return h.exports
                        };
                    b = function(a) {
                        switch (a) {
                            case void 0:
                                return l()
                        }
                    };
                    e.exports = b
                }), null);
                __d("json3", ["json3-3.3.2"], (function(a, b, c, d, e, f) {
                    e.exports = b("json3-3.3.2")()
                }), null);
                __d("ES", ["ES5Array", "ES5ArrayPrototype", "ES5Date", "ES5FunctionPrototype", "ES5Object", "ES5StringPrototype", "ES6Array", "ES6ArrayPrototype", "ES6DatePrototype", "ES6Number", "ES6Object", "ES7ArrayPrototype", "ES7Object", "ES7StringPrototype", "json3"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {}.toString,
                        h = {
                            "JSON.stringify": b("json3").stringify,
                            "JSON.parse": b("json3").parse
                        };
                    d = {
                        "Array.prototype": b("ES5ArrayPrototype"),
                        "Function.prototype": b("ES5FunctionPrototype"),
                        "String.prototype": b("ES5StringPrototype"),
                        Object: b("ES5Object"),
                        Array: b("ES5Array"),
                        Date: b("ES5Date")
                    };
                    f = {
                        Object: b("ES6Object"),
                        "Array.prototype": b("ES6ArrayPrototype"),
                        "Date.prototype": b("ES6DatePrototype"),
                        Number: b("ES6Number"),
                        Array: b("ES6Array")
                    };
                    b = {
                        Object: b("ES7Object"),
                        "String.prototype": b("ES7StringPrototype"),
                        "Array.prototype": b("ES7ArrayPrototype")
                    };

                    function a(a) {
                        __p && __p();
                        for (var b in a) {
                            if (!Object.prototype.hasOwnProperty.call(a, b)) continue;
                            var c = a[b],
                                d = b.split(".");
                            if (d.length === 2) {
                                var e = d[0],
                                    f = d[1];
                                if (!e || !f || !window[e] || !window[e][f]) {
                                    var g = e ? window[e] : "-",
                                        i = e && window[e] && f ? window[e][f] : "-";
                                    throw new Error("Unexpected state (t11975770): " + (e + ", " + f + ", " + g + ", " + i + ", " + b))
                                }
                            }
                            e = d.length === 2 ? window[d[0]][d[1]] : window[b];
                            for (var j in c) {
                                if (!Object.prototype.hasOwnProperty.call(c, j)) continue;
                                if (typeof c[j] !== "function") {
                                    h[b + "." + j] = c[j];
                                    continue
                                }
                                f = e[j];
                                h[b + "." + j] = f && /\{\s+\[native code\]\s\}/.test(f) ? f : c[j]
                            }
                        }
                    }
                    a(d);
                    a(f);
                    a(b);

                    function c(a, b, c) {
                        var d = c ? g.call(a).slice(8, -1) + ".prototype" : a,
                            e = h[d + "." + b] || a[b];
                        if (typeof e === "function") {
                            for (var f = arguments.length, i = new Array(f > 3 ? f - 3 : 0), j = 3; j < f; j++) i[j - 3] = arguments[j];
                            return e.apply(a, i)
                        } else if (e) return e;
                        throw new Error("Polyfill " + d + " does not have implementation of " + b)
                    }
                    e.exports = c
                }), null);
                __d("sdk.babelHelpers", ["ES5FunctionPrototype", "ES5Object", "ES6Object"], (function(a, b, c, d, e, f) {
                    __p && __p();
                    var g = {},
                        h = Object.prototype.hasOwnProperty;
                    g.inheritsLoose = function(a, c) {
                        b("ES6Object").assign(a, c);
                        a.prototype = b("ES5Object").create(c && c.prototype);
                        a.prototype.constructor = a;
                        a.__superConstructor__ = c;
                        return c
                    };
                    g.inherits = g.inheritsLoose;
                    g.wrapNativeSuper = function(a) {
                        __p && __p();
                        var b = typeof Map === "function" ? new Map() : void 0;
                        g.wrapNativeSuper = function(a) {
                            __p && __p();
                            if (a === null) return null;
                            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
                            if (b !== void 0) {
                                if (b.has(a)) return b.get(a);
                                b.set(a, c)
                            }
                            g.inheritsLoose(c, a);

                            function c() {
                                a.apply(this, arguments)
                            }
                            return c
                        };
                        return g.wrapNativeSuper(a)
                    };
                    g.assertThisInitialized = function(a) {
                        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return a
                    };
                    g._extends = b("ES6Object").assign;
                    g["extends"] = g._extends;
                    g.construct = function(a, b) {
                        var c = [null];
                        c.push.apply(c, b);
                        return new(Function.prototype.bind.apply(a, c))()
                    };
                    g.objectWithoutPropertiesLoose = function(a, b) {
                        var c = {};
                        for (var d in a) {
                            if (!h.call(a, d) || b.indexOf(d) >= 0) continue;
                            c[d] = a[d]
                        }
                        return c
                    };
                    g.objectWithoutProperties = g.objectWithoutPropertiesLoose;
                    g.taggedTemplateLiteralLoose = function(a, b) {
                        b || (b = a.slice(0));
                        a.raw = b;
                        return a
                    };
                    g.bind = b("ES5FunctionPrototype").bind;
                    e.exports = g
                }), null);
                var ES = require('ES');
                var babelHelpers = require('sdk.babelHelpers');
                (function(a, b) {
                    var c = "keys",
                        d = "values",
                        e = "entries",
                        f = function() {
                            var a = h(Array),
                                b;
                            a || (b = function() {
                                "use strict";

                                function a(a, b) {
                                    this.$1 = a, this.$2 = b, this.$3 = 0
                                }
                                var b = a.prototype;
                                b.next = function() {
                                    if (this.$1 == null) return {
                                        value: void 0,
                                        done: !0
                                    };
                                    var a = this.$1,
                                        b = this.$1.length,
                                        f = this.$3,
                                        g = this.$2;
                                    if (f >= b) {
                                        this.$1 = void 0;
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }
                                    this.$3 = f + 1;
                                    if (g === c) return {
                                        value: f,
                                        done: !1
                                    };
                                    else if (g === d) return {
                                        value: a[f],
                                        done: !1
                                    };
                                    else if (g === e) return {
                                        value: [f, a[f]],
                                        done: !1
                                    }
                                };
                                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                    return this
                                };
                                return a
                            }());
                            return {
                                keys: a ? function(a) {
                                    return a.keys()
                                } : function(a) {
                                    return new b(a, c)
                                },
                                values: a ? function(a) {
                                    return a.values()
                                } : function(a) {
                                    return new b(a, d)
                                },
                                entries: a ? function(a) {
                                    return a.entries()
                                } : function(a) {
                                    return new b(a, e)
                                }
                            }
                        }(),
                        g = function() {
                            var a = h(String),
                                b;
                            a || (b = function() {
                                "use strict";

                                function a(a) {
                                    this.$1 = a, this.$2 = 0
                                }
                                var b = a.prototype;
                                b.next = function() {
                                    if (this.$1 == null) return {
                                        value: void 0,
                                        done: !0
                                    };
                                    var a = this.$2,
                                        b = this.$1,
                                        c = b.length;
                                    if (a >= c) {
                                        this.$1 = void 0;
                                        return {
                                            value: void 0,
                                            done: !0
                                        }
                                    }
                                    var d = b.charCodeAt(a);
                                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                                    else {
                                        c = b.charCodeAt(a + 1);
                                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                                    }
                                    this.$2 = a + d.length;
                                    return {
                                        value: d,
                                        done: !1
                                    }
                                };
                                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                    return this
                                };
                                return a
                            }());
                            return {
                                keys: function() {
                                    throw TypeError("Strings default iterator doesn't implement keys.")
                                },
                                values: a ? function(a) {
                                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                                } : function(a) {
                                    return new b(a)
                                },
                                entries: function() {
                                    throw TypeError("Strings default iterator doesn't implement entries.")
                                }
                            }
                        }();

                    function h(a) {
                        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
                    }
                    var i = function() {
                            "use strict";

                            function a(a, b) {
                                this.$1 = a, this.$2 = b, this.$3 = ES("Object", "keys", !1, a), this.$4 = 0
                            }
                            var b = a.prototype;
                            b.next = function() {
                                var a = this.$3.length,
                                    b = this.$4,
                                    f = this.$2,
                                    g = this.$3[b];
                                if (b >= a) {
                                    this.$1 = void 0;
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }
                                this.$4 = b + 1;
                                if (f === c) return {
                                    value: g,
                                    done: !1
                                };
                                else if (f === d) return {
                                    value: this.$1[g],
                                    done: !1
                                };
                                else if (f === e) return {
                                    value: [g, this.$1[g]],
                                    done: !1
                                }
                            };
                            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                return this
                            };
                            return a
                        }(),
                        j = {
                            keys: function(a) {
                                return new i(a, c)
                            },
                            values: function(a) {
                                return new i(a, d)
                            },
                            entries: function(a) {
                                return new i(a, e)
                            }
                        };

                    function k(a, b) {
                        if (typeof a === "string") return g[b || d](a);
                        else if (ES("Array", "isArray", !1, a)) return f[b || d](a);
                        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
                        else return j[b || e](a)
                    }
                    ES("Object", "assign", !1, k, {
                        KIND_KEYS: c,
                        KIND_VALUES: d,
                        KIND_ENTRIES: e,
                        keys: function(a) {
                            return k(a, c)
                        },
                        values: function(a) {
                            return k(a, d)
                        },
                        entries: function(a) {
                            return k(a, e)
                        },
                        generic: j.entries
                    });
                    a.FB_enumerate = k
                })(typeof global === "undefined" ? this : global);
                (function(a, b) {
                    var c = a.window || a;

                    function d() {
                        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
                    }

                    function e(a) {
                        var b = a ? a.ownerDocument || a : document;
                        b = b.defaultView || c;
                        return !!(a && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
                    }

                    function f(a) {
                        a = c[a];
                        if (a == null) return !0;
                        if (typeof c.Symbol !== "function") return !0;
                        var b = a.prototype;
                        return a == null || typeof a !== "function" || typeof b.clear !== "function" || new a().size !== 0 || typeof b.keys !== "function" || typeof b.forEach !== "function"
                    }
                    var g = a.FB_enumerate,
                        h = function() {
                            if (!f("Map")) return c.Map;
                            var b = "key",
                                i = "value",
                                j = "key+value",
                                k = "$map_",
                                l, m = "IE_HASH_",
                                a = function() {
                                    "use strict";

                                    function a(a) {
                                        if (!r(this)) throw new TypeError("Wrong map object type.");
                                        q(this);
                                        if (a != null) {
                                            a = g(a);
                                            var b;
                                            while (!(b = a.next()).done) {
                                                if (!r(b.value)) throw new TypeError("Expected iterable items to be pair objects.");
                                                this.set(b.value[0], b.value[1])
                                            }
                                        }
                                    }
                                    var c = a.prototype;
                                    c.clear = function() {
                                        q(this)
                                    };
                                    c.has = function(a) {
                                        a = o(this, a);
                                        return !!(a != null && this._mapData[a])
                                    };
                                    c.set = function(a, b) {
                                        var c = o(this, a);
                                        c != null && this._mapData[c] ? this._mapData[c][1] = b : (c = this._mapData.push([a, b]) - 1, p(this, a, c), this.size += 1);
                                        return this
                                    };
                                    c.get = function(a) {
                                        a = o(this, a);
                                        if (a == null) return void 0;
                                        else return this._mapData[a][1]
                                    };
                                    c["delete"] = function(a) {
                                        var b = o(this, a);
                                        if (b != null && this._mapData[b]) {
                                            p(this, a, void 0);
                                            this._mapData[b] = void 0;
                                            this.size -= 1;
                                            return !0
                                        } else return !1
                                    };
                                    c.entries = function() {
                                        return new n(this, j)
                                    };
                                    c.keys = function() {
                                        return new n(this, b)
                                    };
                                    c.values = function() {
                                        return new n(this, i)
                                    };
                                    c.forEach = function(a, b) {
                                        if (typeof a !== "function") throw new TypeError("Callback must be callable.");
                                        a = ES(a, "bind", !0, b || void 0);
                                        b = this._mapData;
                                        for (var c = 0; c < b.length; c++) {
                                            var d = b[c];
                                            d != null && a(d[1], d[0], this)
                                        }
                                    };
                                    c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                        return this.entries()
                                    };
                                    return a
                                }(),
                                n = function() {
                                    "use strict";

                                    function c(a, c) {
                                        if (!(r(a) && a._mapData)) throw new TypeError("Object is not a map.");
                                        if (ES([b, j, i], "indexOf", !0, c) === -1) throw new Error("Invalid iteration kind.");
                                        this._map = a;
                                        this._nextIndex = 0;
                                        this._kind = c
                                    }
                                    var d = c.prototype;
                                    d.next = function() {
                                        if (!this instanceof a) throw new TypeError("Expected to be called on a MapIterator.");
                                        var c = this._map,
                                            d = this._nextIndex,
                                            e = this._kind;
                                        if (c == null) return s(void 0, !0);
                                        c = c._mapData;
                                        while (d < c.length) {
                                            var f = c[d];
                                            d += 1;
                                            this._nextIndex = d;
                                            if (f)
                                                if (e === b) return s(f[0], !1);
                                                else if (e === i) return s(f[1], !1);
                                            else if (e) return s(f, !1)
                                        }
                                        this._map = void 0;
                                        return s(void 0, !0)
                                    };
                                    d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                        return this
                                    };
                                    return c
                                }();

                            function o(a, b) {
                                if (r(b)) {
                                    var c = w(b);
                                    return c ? a._objectIndex[c] : void 0
                                } else {
                                    c = k + b;
                                    if (typeof b === "string") return a._stringIndex[c];
                                    else return a._otherIndex[c]
                                }
                            }

                            function p(a, b, c) {
                                var d = c == null;
                                if (r(b)) {
                                    var e = w(b);
                                    e || (e = x(b));
                                    d ? delete a._objectIndex[e] : a._objectIndex[e] = c
                                } else {
                                    e = k + b;
                                    typeof b === "string" ? d ? delete a._stringIndex[e] : a._stringIndex[e] = c : d ? delete a._otherIndex[e] : a._otherIndex[e] = c
                                }
                            }

                            function q(a) {
                                a._mapData = [], a._objectIndex = {}, a._stringIndex = {}, a._otherIndex = {}, a.size = 0
                            }

                            function r(a) {
                                return a != null && (typeof a === "object" || typeof a === "function")
                            }

                            function s(a, b) {
                                return {
                                    value: a,
                                    done: b
                                }
                            }
                            a.__isES5 = function() {
                                try {
                                    Object.defineProperty({}, "__.$#x", {});
                                    return !0
                                } catch (a) {
                                    return !1
                                }
                            }();

                            function t(b) {
                                if (!a.__isES5 || !Object.isExtensible) return !0;
                                else return Object.isExtensible(b)
                            }

                            function u(a) {
                                var b;
                                switch (a.nodeType) {
                                    case 1:
                                        b = a.uniqueID;
                                        break;
                                    case 9:
                                        b = a.documentElement.uniqueID;
                                        break;
                                    default:
                                        return null
                                }
                                if (b) return m + b;
                                else return null
                            }
                            var v = d();

                            function w(b) {
                                if (b[v]) return b[v];
                                else if (!a.__isES5 && b.propertyIsEnumerable && b.propertyIsEnumerable[v]) return b.propertyIsEnumerable[v];
                                else if (!a.__isES5 && e(b) && u(b)) return u(b);
                                else if (!a.__isES5 && b[v]) return b[v]
                            }
                            var x = function() {
                                var b = Object.prototype.propertyIsEnumerable,
                                    c = 0;
                                return function(d) {
                                    if (t(d)) {
                                        c += 1;
                                        if (a.__isES5) Object.defineProperty(d, v, {
                                            enumerable: !1,
                                            writable: !1,
                                            configurable: !1,
                                            value: c
                                        });
                                        else if (d.propertyIsEnumerable) d.propertyIsEnumerable = function() {
                                            return b.apply(this, arguments)
                                        }, d.propertyIsEnumerable[v] = c;
                                        else if (e(d)) d[v] = c;
                                        else throw new Error("Unable to set a non-enumerable property on object.");
                                        return c
                                    } else throw new Error("Non-extensible objects are not allowed as keys.")
                                }
                            }();
                            return __annotator(a, {
                                name: "Map"
                            })
                        }();
                    b = function() {
                        if (!f("Set")) return c.Set;
                        var a = function() {
                            "use strict";

                            function a(a) {
                                if (this == null || typeof this !== "object" && typeof this !== "function") throw new TypeError("Wrong set object type.");
                                b(this);
                                if (a != null) {
                                    a = g(a);
                                    var c;
                                    while (!(c = a.next()).done) this.add(c.value)
                                }
                            }
                            var c = a.prototype;
                            c.add = function(a) {
                                this._map.set(a, a);
                                this.size = this._map.size;
                                return this
                            };
                            c.clear = function() {
                                b(this)
                            };
                            c["delete"] = function(a) {
                                a = this._map["delete"](a);
                                this.size = this._map.size;
                                return a
                            };
                            c.entries = function() {
                                return this._map.entries()
                            };
                            c.forEach = function(a) {
                                var b = arguments[1],
                                    c = this._map.keys(),
                                    d;
                                while (!(d = c.next()).done) a.call(b, d.value, d.value, this)
                            };
                            c.has = function(a) {
                                return this._map.has(a)
                            };
                            c.values = function() {
                                return this._map.values()
                            };
                            c.keys = function() {
                                return this.values()
                            };
                            c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                                return this.values()
                            };
                            return a
                        }();

                        function b(a) {
                            a._map = new h(), a.size = a._map.size
                        }
                        return __annotator(a, {
                            name: "Set"
                        })
                    }();
                    a.Map = h;
                    a.Set = b
                })(typeof global === "undefined" ? this : global);
                __d("ViewabilitySettings", [], {
                    "fl_test": true,
                    "raf_safari_fix": true
                });
                __d("JSSDKCssConfig", [], {
                    "rules": "._2vfx{font-size:100px;overflow:hidden}._2vfy{overflow:hidden}._2vf-{overflow:hidden}._11u9{float:left;overflow:hidden;position:relative;text-decoration:none}._8edz{background-color:rgba(0, 0, 0, .6);border-radius:15px;color:#fff;font-size:12px;padding:5px 12px;position:absolute;right:8px;top:8px}._8ee0{background-color:#fff;font-size:12px;height:22px;text-align:center;width:100\u0025}._8ed-{background-color:lightgray;border-radius:3px;display:inline-block;height:6px;margin:15px 2px;margin-bottom:0;width:6px}._8ed_{background-color:#3578e5}._11u-{background:linear-gradient(rgba(0, 0, 0, 0) 0\u0025, rgba(0, 0, 0, .2) 100\u0025);bottom:0;left:0;position:absolute;right:0;top:60\u0025}._11u- ._11u_{bottom:8px;color:#fff;left:0;margin-top:0;padding-left:8px;padding-right:8px;position:absolute;right:0;text-shadow:0 1px 3px black}._11u_{bottom:10px;color:#606770;font-size:12\u0025;font-weight:normal;margin-top:4.023\u0025;padding-left:20px;padding-right:20px}._11v0,._11vj{line-height:1.4;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._11v0{font-weight:500}._11vj{font-weight:normal}._11us{background-position:center center;background-repeat:no-repeat;background-size:cover;width:100\u0025}._11ur{overflow:hidden;position:relative}._11vk._7m01{background-color:#3578e5;color:#fff}._8fks{display:none}._8fkr{margin:0 8px}._8flf{border:1px solid #dadde1;border-radius:8px}._8flg{align-items:center;background:unset;display:flex;flex-flow:row nowrap;left:62px;top:0}._8flg._11u- ._11u_{bottom:unset;left:unset;padding-left:4px;padding-right:4px;right:unset;text-shadow:unset}._8fla{font-size:14px}._8flb{color:#1c1e21;font-family:SFUIText-Semibold, -apple-system, roboto, 'Helvetica Neue', sans-serif;line-height:16px;overflow:hidden;text-overflow:unset;white-space:unset}._8fld{margin-bottom:4px;max-height:32px}._8flc{max-height:48px}._8fle{color:#00a400;line-height:16px;max-height:32px;overflow:hidden;text-overflow:unset;white-space:unset}\n._7_ce{border-radius:50px;box-shadow:0 3px 10px rgba(0, 0, 0, .3);height:50px;left:50\u0025;overflow:hidden;position:absolute;top:50\u0025;transform:translate(-50\u0025, -50\u0025);width:50px}._7_cf{left:50\u0025;position:absolute;text-align:center;top:50\u0025;transform:translate(-50\u0025, -50\u0025);width:100\u0025}._7_cf ._7_ce{left:auto;margin:10px auto;position:relative;top:auto;transform:none}._7_cf ._7_c-{-webkit-font-smoothing:subpixel-antialiased;padding:0 10px}._7_c_ ._7_ce{transform:translate(-150\u0025, -50\u0025)}._7_c_._85o- ._7_ce{height:40px;left:0;transform:translate(-50\u0025, -50\u0025);width:40px}._7_d0{background-position:center center;background-repeat:no-repeat;background-size:cover;flex:1 0;position:relative}._7_d0:before{content:'';float:left;padding-top:100\u0025}._7_d1{display:flex}\n._8fl8{height:calc(100\u0025 - 76px);margin-bottom:12px;overflow:hidden;position:relative}._8fl9{bottom:12px;color:#fff;font-size:14px;left:12px;line-height:16px;position:absolute;right:12px;text-shadow:0 1px 3px black}._8fkt{color:#fff;font-family:SFUIText-Semibold, -apple-system, roboto, 'Helvetica Neue', sans-serif;margin-bottom:4px;max-height:32px;overflow:hidden}._8fku{font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;overflow:hidden}\n._1xj7{background-color:#000;height:100\u0025;overflow:hidden;position:relative;width:100\u0025}._1xj8{height:100\u0025;left:0;position:absolute;top:0;width:100\u0025}._1xj9{background-position:center;background-repeat:no-repeat;background-size:contain;bottom:12px;cursor:pointer;height:20px;position:absolute;right:12px;width:20px}._73wr ._1xj9{background-color:rgba(0, 0, 0, .3);background-size:16px 16px;border-radius:30px;padding:14px;right:8px;top:50px}._8e1m._1xj9{left:12px;right:unset}._7jun ._1xj9{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y-\/r\/muQZaN-Pay7.png)}._1xj9{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yp\/r\/BISw5vI_8Pz.png)}._3c3s{background-color:rgba(0, 0, 0, .6);background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yv\/r\/j9woTBMUYPw.png);background-position:center;background-repeat:no-repeat;height:100\u0025;opacity:0;position:absolute;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden;width:100\u0025}._7juo ._3c3s._7kbt,._7kc3 ._3c3s._7kbu{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._6pfr{background-position:center center;background-repeat:no-repeat;background-size:cover;bottom:-30px;filter:blur(20px);left:-30px;pointer-events:none;position:absolute;right:-30px;top:-30px}._7462 ._3c3s,._7462 ._1xj9,._7462 ._1xj8{display:none}\u0040media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx){._7jun ._1xj9{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yX\/r\/8S5uxp36YUs.png)}._1xj9{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yL\/r\/EaMNviiJm9Y.png)}}._8e1n{bottom:0;left:0;position:absolute;right:0;top:0}\n._74hs{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y8\/r\/PJDwifb8hqb.png);background-position:center;background-repeat:no-repeat;background-size:cover;height:24px;position:absolute;right:16px;top:16px;width:52px}\n._7pnj{display:flex;height:100\u0025}._7pnh{background-color:#fff;height:100\u0025;width:1px}._7pni{background-position:top center;background-repeat:no-repeat;background-size:contain;height:100\u0025;width:100\u0025}\n._74vg{align-items:center;background-color:rgba(0, 0, 0, .6);display:flex;height:100\u0025;justify-content:center;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity .3s;width:100\u0025;z-index:100}._727i{align-items:center;background-color:#fff;border-radius:12px;display:flex;flex-direction:column;font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;justify-content:center;margin:10px;padding:12px 12px;text-align:center;width:200px}._727l{background-size:contain;border-radius:50\u0025;height:60px;margin-right:4px;margin-top:24px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:60px}._727m{margin:4px 4px 0 0}._727k{margin-right:4px;margin-top:4px}._727n{background-color:#3578e5;border-radius:4px;box-sizing:border-box;color:#fff;font-weight:normal;margin-top:24px;padding:6px;width:80\u0025}._727o{opacity:1}._727j{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yI\/r\/3akokJiVmV1.png);background-size:contain;height:16px;margin-left:auto;text-align:right;width:16px}\n._7vl6{bottom:0;left:0;position:absolute;right:0;top:0}._7vl7{bottom:0;left:0;position:absolute;right:0}._7vl8{background:linear-gradient(transparent, rgba(0, 0, 0, .9));bottom:0;display:flex;flex-direction:column;justify-content:flex-end;left:0;position:absolute;right:0}._7juo ._7vl6{top:inherit}._7vln{align-items:center;display:flex;flex-direction:row;font-size:14px;font-weight:normal;padding:12px 16px}._7vl7{background:linear-gradient( transparent, rgba(0, 0, 0, .2), rgba(0, 0, 0, .4) );height:60px;opacity:1;transition:opacity 1s}._7vk_{align-items:flex-start;background:linear-gradient(rgba(0, 0, 0, .5), transparent);display:flex;flex-direction:column;left:0;padding:10px;position:absolute;right:0;text-shadow:0 0 1px black;top:0}._7vl0{align-items:center;display:flex;flex-direction:row}._7vk_ .fbAdIcon{border-radius:50\u0025;height:48px;overflow:hidden;width:48px}._7vl2{margin-left:5px}._7vl2 .fbAdSubtitle{color:#fff;font-weight:bolder}._7vl3{color:whitesmoke}._7vl4{margin-top:8px;text-shadow:0 0 1px black;transition:opacity 1s}._7vl4 .fbAdTitle{color:#fff;font-weight:bolder}._7vl4 .fbAdBody{color:whitesmoke}._7vl5{display:flex;flex-direction:row;justify-content:flex-end}._7vl6 .fbAdCallToAction{background-color:rgba(255, 255, 255, .8);border-radius:6px;bottom:50;color:#000;margin-right:16px;padding:10px 20px}._7vl5{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._7vkw ._7vlo,._7vkw ._7vky,._7vkw ._7vl7,._7vkw ._7vl4,._7juo ._7vl5,._7juo ._7vk_{opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._7vkz{color:#fff;display:inline-block;flex-grow:0;min-width:40px;padding:0 12px;padding-left:0;text-align:center;text-shadow:0 0 1px rgba(0, 0, 0, .4)}._7vlo{background-color:rgba(255, 255, 255, .6);border-radius:2px;display:inline-block;flex-grow:1;height:2px;margin:0 12px;overflow:hidden;transition:opacity 1s}._7vky{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ym\/r\/7Ri190UbT7O.png);background-position:center;background-repeat:no-repeat;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:24px;padding-left:0;transition:opacity 1s;width:24px}._7juo ._7vky{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yW\/r\/8qlISslWDk2.png)}._7vk-{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yp\/r\/BISw5vI_8Pz.png);background-position:center;background-repeat:no-repeat;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:20px;width:20px}._7jun ._7vk-{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y-\/r\/muQZaN-Pay7.png)}._7vkx{background-color:#3578e5;height:2px;transition:width .5s}\n._82tp,._82tr,._82tq{bottom:0;left:0;position:absolute;right:0}._82tp{top:0}._7juo ._82tp{top:initial}._8biy ._82to{background-position:50\u0025 50\u0025;background-size:20px 20px;height:40px;left:16px;position:relative;top:12px;width:40px}._8biy ._82tq,._8biy ._82tn,._8biy ._82tm,._8i36 ._82tm{display:none}._82tp ._82tr{align-items:center;display:flex;flex-direction:row;font-size:14px;font-weight:normal;padding:12px 16px;position:absolute}._82tq{background:linear-gradient( transparent, rgba(0, 0, 0, .2), rgba(0, 0, 0, .4) );height:60px;opacity:1;transition:opacity 1s}._82tn{color:#fff;display:inline-block;flex-grow:0;min-width:40px;padding:0;text-align:center;text-shadow:0 0 1px rgba(0, 0, 0, .4)}._82ts{flex:1 1 0px}._82tm{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ym\/r\/7Ri190UbT7O.png);background-position:center;background-repeat:no-repeat;background-size:contain;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:24px;padding-left:0;transition:opacity 1s;width:24px}._7juo ._82tm{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yW\/r\/8qlISslWDk2.png)}._8i34 ._8i36 ._82to{display:none}._82to{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yp\/r\/BISw5vI_8Pz.png);background-position:center;background-repeat:no-repeat;background-size:contain;cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:20px;margin-left:12px;width:20px}._7jun ._82to{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y-\/r\/muQZaN-Pay7.png)}._8f5c ._82tm{background-size:24px;margin-bottom:-20px;margin-left:-20px;padding:20px}._8f5c ._82to{background-size:20px;margin-bottom:-20px;margin-right:-20px;padding:20px}._8f5c ._82tn{margin-right:-20px;margin-top:20px}\u0040media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx){._82tm{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y9\/r\/DawR9iRE7xR.png)}._7jun ._82to{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yX\/r\/8S5uxp36YUs.png)}._82to{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yL\/r\/EaMNviiJm9Y.png)}}\n._7kc0{opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._7kb_{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._7kc1,._7kb_{bottom:0;left:0;position:absolute;right:0;top:0}._7kc1{align-items:center;display:flex;justify-content:center;padding:20px}._7juo ._7kc0{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._7kb-{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;margin-bottom:30px;max-width:100\u0025;padding:20px}.fbAdNoCallToAction ._7kc0 .fbAdCallToAction{display:none}._7kc0 .fbAdCallToAction{background-color:#fff;border-radius:6px;color:#23272f;padding:10px 20px}._7kc0 .fbAdSubtitle{color:#fff;margin-bottom:20px;max-width:100\u0025;text-shadow:0 0 1px black}._7kc0 .fbAdIcon{border-radius:50\u0025;height:48px;margin-bottom:8px;overflow:hidden;width:48px}\n._7kby{opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._7kbx{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._7kbz,._7kbx{bottom:0;left:0;position:absolute;right:0;top:0}._7kbz{align-items:center;display:flex;justify-content:center;padding:0 20px}._7kc2 ._7kby{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._7kbv{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yg\/r\/cGwBF2i3A8v.png);bottom:12px;height:24px;left:12px;position:absolute;width:24px}._7kbw{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;max-width:100\u0025;padding:20px}._7kby .fbAdCallToAction{background-color:rgba(255, 255, 255, .9);border-radius:6px;color:#23272f;padding:10px 20px}.fbAdNoCallToAction ._7kby .fbAdCallToAction{display:none}._7kby .fbAdSubtitle{color:#fff;margin-bottom:20px;text-shadow:0 0 1px black;max-width:100\u0025}._7kby .fbAdIcon{border-radius:50\u0025;height:48px;margin-bottom:8px;overflow:hidden;width:48px}\n._808y{font-size:16px;line-height:22px;opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._808x{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._8091,._808x{bottom:0;left:0;position:absolute;right:0;top:0}._8091{align-items:center;display:flex;justify-content:center;padding:0 12px}._7kc2 ._808y{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._808u{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yg\/r\/cGwBF2i3A8v.png);bottom:12px;height:24px;left:12px;position:absolute;width:24px}._808v{align-items:center;box-sizing:border-box;color:#fff;display:flex;flex-direction:column;justify-content:center;margin-bottom:30px;max-width:100\u0025;max-width:100\u0025;padding:20px;text-align:center;text-shadow:0 0 1px black}._808y .fbAdSubtitle,._808y .fbAdTitle{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._808y .fbAdIcon{border-radius:50\u0025;height:64px;overflow:hidden;width:64px}._808y .fbAdBody{max-height:44px;overflow:hidden}.fbAdNoCallToAction ._808y .fbAdCallToAction{display:none}._808y .fbAdCallToAction{background-color:rgba(255, 255, 255, .8);border-radius:6px;color:#23272f;padding:10px 20px}._808y .fbAdSubtitle{line-height:16px;margin-bottom:2px}._808y .fbAdTitle,._808y .fbAdSubtitle{margin-top:12px;max-width:100\u0025}._808y .fbAdCallToAction{margin-top:24px}\n._808s{font-size:16px;line-height:22px;opacity:0;transition:visibility 0s linear 300ms, opacity 300ms;visibility:hidden}._808r{background-color:#000;background-position:center;background-repeat:no-repeat;background-size:contain;filter:blur(8px) brightness(.5);transform:scale3d(1.05, 1.05, 1)}._808t,._808r,._808s{bottom:0;left:0;position:absolute;right:0;top:0}._808t{align-items:center;display:flex;justify-content:center;padding:20px}._7juo ._808s{opacity:1;transition:visibility 0s linear 0s, opacity 300ms;visibility:visible}._808f{align-items:center;box-sizing:border-box;color:#fff;display:flex;flex-direction:column;justify-content:center;margin-bottom:30px;max-width:100\u0025;max-width:100\u0025;padding:20px;text-align:center;text-shadow:0 0 1px black}._808s .fbAdSubtitle,._808s .fbAdTitle{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._808s .fbAdIcon{border-radius:50\u0025;height:64px;overflow:hidden;width:64px}._808s .fbAdBody{max-height:44px;overflow:hidden}.fbAdNoCallToAction ._808s .fbAdCallToAction{display:none}._808s .fbAdCallToAction{background-color:rgba(255, 255, 255, .8);border-radius:6px;color:#23272f;padding:10px 20px}._808s .fbAdSubtitle{line-height:16px;margin-bottom:2px}._808s .fbAdTitle,._808s .fbAdSubtitle{margin-top:12px;max-width:100\u0025}._808s .fbAdCallToAction{margin-top:24px}\n._7juk,._7lkn,._7lkm{bottom:0;left:0;position:absolute;right:0}._7lkn{align-items:center;display:flex;flex-direction:row;font-size:14px;font-weight:normal;padding:12px 16px;position:absolute}._7lkm{background:linear-gradient( transparent, rgba(0, 0, 0, .2), rgba(0, 0, 0, .4) );height:60px;opacity:1;transition:opacity 1s}._7jum ._7jul,._7jum ._7jue,._7jum ._7lkm,._7kc3 ._7juk{opacity:0}._7jui{color:#fff;display:inline-block;flex-grow:0;min-width:40px;padding:0 12px;padding-left:0;text-align:center;text-shadow:0 0 1px rgba(0, 0, 0, .4)}._7jul{background-color:rgba(255, 255, 255, .6);border-radius:2px;display:inline-block;flex-grow:1;height:2px;margin:0 12px;overflow:hidden;transition:opacity 1s}._7jue{background:no-repeat center\/contain url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y_\/r\/SFCq-evAN3w.png);cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:20px;padding-left:0;transition:opacity 1s;width:20px}._7juo ._7jue{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yw\/r\/3ojVzHWpcu_.png)}._7juj{background:no-repeat center\/contain url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yp\/r\/BISw5vI_8Pz.png);cursor:pointer;filter:drop-shadow(0 0 1px rgba(0, 0, 0, .4));height:20px;width:20px}._7jun ._7juj{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yX\/r\/8S5uxp36YUs.png)}._7juh{background-color:#3578e5;height:2px;transition:width .5s}\u0040media (-webkit-min-device-pixel-ratio: 2),(min-resolution: 2dppx){._7jue{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yo\/r\/GMzBSraVZWM.png)}._7juj{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yL\/r\/EaMNviiJm9Y.png)}._7juo ._7jue{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yU\/r\/L7truXq89HH.png)}._7jun ._7juj{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yX\/r\/8S5uxp36YUs.png)}}\n._6qhh{font-family:-apple-system, roboto, 'Helvetica Neue', sans-serif;font-size:14px;font-weight:normal;text-align:left}._6qhd{align-items:center;animation:fadeIn .3s ease-in-out both;background:#dadde1;bottom:0;display:flex;justify-content:center;left:0;padding:5px;position:absolute;right:0;top:0;z-index:100}._6wfr ._6qhd{bottom:-0.5px;left:-0.5px;right:-0.5px;top:-0.5px}._6qhe{animation:fadeIn .3s ease-in-out both;background:white;border-radius:10px;box-shadow:0 2px 8px 0 rgba(0, 0, 0, .3);box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;max-width:320px;position:relative}._6qha{overflow-x:hidden;overflow-y:auto;padding-top:10px}._6qhg{height:23px;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0}._6qhg:after{background-color:rgba(255, 255, 255, .8);background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ys\/r\/gX9Zgekva9J.png);background-position:27px 3px;background-repeat:no-repeat;background-size:12px 12px;border-radius:0 0 0 6px;box-shadow:0 0 4px 0 rgba(0, 0, 0, .15);content:'';display:block;height:18px;margin-left:5px;margin-top:0;width:42px}._6qhg:before{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yu\/r\/4l2RpWw-PLG.png);background-position:0 4px;background-repeat:no-repeat;background-size:10px 10px;border-right:1px solid rgba(0, 0, 0, .2);content:'';height:18px;left:11px;position:absolute;top:0;width:15px}._8bwk._6qhg{height:43px;width:77px}._8bwk._6qhg:after{margin-left:35px}._8bwk._6qhg:before{left:41px}._7-er._6qhg:before{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y0\/r\/IYnD98CCX60.png);background-position:0 3px;background-size:12px 12px}._7-e_._6qhg:before{display:none}._7-e_._6qhg:after{background-position:7px 3px;width:24px}._8bwv._6qhg{height:43px;width:59px}._8bwv._6qhg:after{margin-left:35px}._6qhb{box-sizing:border-box;display:flex;flex-direction:column;max-height:100\u0025;padding:10px 16px}._6qhc{padding-bottom:0;overflow:hidden}._6qhk,._6qgk._6qgi,._6qgl._6qgi{background-repeat:no-repeat;background-size:18px 18px;display:inline-block;height:18px;width:18px}._6qhh ._6qho{align-items:center;display:flex;flex-direction:row;margin:10px 0;text-decoration:none}._6qhk{flex-shrink:0;margin-right:10px}._6qhm{color:#1c1e21;font-weight:normal}._6qhl{font-size:16px;line-height:19px}._6qhn{color:#606770;font-size:14px;line-height:16px}._6qgk{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yc\/r\/NOeCWD5no4s.png)}._6qgl{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yA\/r\/BKiZzia0l7j.png)}._6qhp{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/ys\/r\/gX9Zgekva9J.png)}._6qi1{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/y4\/r\/PITveVN_6ro.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:20px;vertical-align:middle;width:20px}._6qhz{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yd\/r\/kS3NV5igXMY.png);background-repeat:no-repeat;background-size:100\u0025;display:inline-block;height:11px;margin-right:6px;width:15px}._6qh6{font-weight:normal;padding-bottom:4px;position:relative}._6qh6:after{background:linear-gradient(white, rgba(255, 255, 255, 0));content:'';height:10px;left:0;position:absolute;right:0;top:100\u0025}._6qgh{border-bottom:1px solid #ccc;font-size:16px;line-height:20px;margin-bottom:6px;padding-bottom:6px;text-align:center}._6qh5{align-items:center;display:flex;flex-direction:row}._7swf{margin-bottom:6px}._6qh4{color:#606770}._6qgi._6qgk,._6qgi._6qgl{flex-shrink:0;margin-right:10px}._6qh9{margin:0 -8px}._6qh9 ._6qh7{display:inline-block;margin-bottom:20px;margin-left:8px;margin-right:8px;vertical-align:middle}._6qh7{background:#ebedf0;border:none;border-radius:20px;color:#606770;font-size:14px;line-height:14px;padding:13px 16px;white-space:nowrap}._6qh7:focus,._6qh7:active{border:none;outline:none}._6qh7:active,._6qh8{background:#3578e5;color:#fff}._6qi4{align-items:center;display:flex;flex-direction:column}._6qhx{color:#1c1e21;font-size:16px;line-height:24px;margin-top:6px}._6qhy{color:#606770;font-size:14px;line-height:19px;margin:10px 0;text-align:center}._6qhu{background-position:center center;background-repeat:no-repeat;background-size:16px 16px;border-radius:50\u0025;height:42px;width:42px}._6qhv{background-color:#3578e5;background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yE\/r\/oy4B7rSgGV0.png)}._6qhw{background-color:#f7923b;background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yo\/r\/TQU64J6qQUe.png)}._6qi2{display:flex;flex-direction:row;margin-bottom:20px}._6qhh ._6qi0{align-items:center;color:#3578e5;display:flex;flex-direction:row;margin-top:auto;text-decoration:none;width:auto}._6qi1{margin-right:6px}._6qh-{border-radius:50\u0025;height:40px;margin-right:5px;width:40px}._6qhh ._6qi3{background-image:url(https:\/\/static.xx.fbcdn.net\/rsrc.php\/v3\/yF\/r\/tlUefGrS_4W.png);background-position:center center;background-repeat:no-repeat;background-size:13px 13px;height:13px;margin-right:-10px;margin-top:-10px;padding:10px;position:absolute;right:16px;top:13px;width:13px}._6qhf{align-self:flex-start;color:#8d949e;font-size:16px;margin-top:20px}\u0040keyframes fadeIn{0\u0025{opacity:0}100\u0025{opacity:1}}._7t3e ._6qh5{display:none}._7t3e ._6qh6:after{display:none}._7t3e ._6qgh{border-bottom:none;margin-bottom:0}._7t3e ._6qhq{padding-bottom:10px}._7t3e ._6qhc{padding-bottom:2px}._7t3e ._6qh7{margin-bottom:8px;margin-left:0;padding:10px 12px}._7t3e ._6qh9{margin:0}._7t3e ._6qhu{display:none}._7tu- ._6qhd:after{align-items:center;background:rgba(0, 0, 0, .3);bottom:0;content:'';display:flex;justify-content:center;left:0;padding:5px;position:absolute;right:0;top:0;z-index:-100}",
                    "components": ["css:ANCarousel", "css:ANCollage", "css:ANDPAContainer", "css:ANWebVideoPlayer", "css:ANXOutRewardedVideo", "css:ANStitchedImage", "css:ANWebTwoStepClickDialog", "css:ANFullscreenWebVideoPlayerControls", "css:ANWebClickThroughVideoPlayerControls", "css:ANWebIconAndCtaPauseCard", "css:ANWebSimpleEndCard", "css:ANWebVerticalVideoEndCard", "css:ANWebVerticalVideoPauseCard", "css:ANWebVideoPlayerControls", "css:ANXOut"]
                });
                __d("ScreenOrientation.adquality", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        getScreenOrientation: function() {
                            __p && __p();
                            if (!window) return "u";
                            if (typeof window.orientation === "number") return window.orientation === 0 || window.orientation === 180 ? "v" : "h";
                            var a = window.screen && (window.screen.orientation || window.screen.msOrientation || window.screen.mozOrientation);
                            if (a) {
                                a = typeof a === "string" ? a : (a || {}).type;
                                if (typeof a === "string") return a === "portrait-primary" || a === "portrait-secondary" ? "v" : "h"
                            }
                            if (window.matchMedia) {
                                a = window.matchMedia("(orientation: portrait)");
                                if (a) return a.matches ? "v" : "h"
                            }
                            return "u"
                        }
                    };
                    e.exports = a
                }), null);
                __d("nullthrows", [], (function(a, b, c, d, e, f) {
                    a = function(a, b) {
                        b === void 0 && (b = "Got unexpected null or undefined");
                        if (a != null) return a;
                        a = new Error(b);
                        a.framesToPop = 1;
                        throw a
                    };
                    e.exports = a
                }), null);
                __d("ANUtils", ["ScreenOrientation.adquality", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "\u2026",
                        h = -1,
                        i = 0,
                        j = 1,
                        k = [/^https?:\/\/itunes\.apple\.com\/([^\/]+\/)?app\//, /^market:\/\/details/];

                    function l(a) {
                        var b = ES(a, "indexOf", !0, "/", ES(a, "indexOf", !0, "://") + 3);
                        return b === -1 ? a : a.substring(0, b)
                    }

                    function m(a) {
                        var b = l(a);
                        a = ES(a, "indexOf", !0, ":", ES(a, "indexOf", !0, "://") + 3);
                        a !== -1 && (b = b.substring(0, a));
                        a = ES(b, "indexOf", !0, "://");
                        return a === -1 ? b : b.substring(a + 3)
                    }

                    function n() {
                        var a = location.ancestorOrigins || [],
                            b = a[a.length - 1] || location.origin;
                        a = a[a.length - 2] || location.origin;
                        if (o(b) && p(a)) return a;
                        else return b
                    }

                    function a() {
                        return m(n())
                    }
                    var o = function(a) {
                        var b = /^https?:\/\/www\.google(\.com?)?.\w{2,3}$/;
                        return !!a.match(b)
                    };

                    function p(a) {
                        return ES(a, "endsWith", !0, "cdn.ampproject.org")
                    }

                    function q(a) {
                        var b;
                        ES(a, "indexOf", !0, "://") > -1 ? b = a.split("/")[2] : b = a.split("/")[0];
                        b = b.split(":")[0];
                        b = b.split("?")[0];
                        b = b.split(";")[0];
                        return b
                    }

                    function c(a, b) {
                        a = q(a);
                        a = a.substring(a.length - b.length);
                        return a === b
                    }

                    function r(a) {
                        a === void 0 && (a = null);
                        a = a || window;
                        var b = [a];
                        try {
                            while (a.parent && a !== a.parent && a.parent.document) b.push(a = a.parent)
                        } catch (a) {}
                        return b.reverse()
                    }

                    function d() {
                        var a = s();
                        a = a.performance && a.performance.timing && a.performance.timing.navigationStart || 0;
                        return a
                    }

                    function s() {
                        return r()[0]
                    }

                    function t(a) {
                        __p && __p();
                        var b = r();
                        for (var c = 0; c < b.length; c++) {
                            var d = b[c],
                                e = d.ADNW || {};
                            d.ADNW = e;
                            if (!d.ADNW) continue;
                            e[a] = e[a] || {};
                            e[a].ads = e[a].ads || [];
                            e[a].window = e[a].window || d;
                            return e[a]
                        }
                        throw new Error("no_writable_global")
                    }

                    function f() {
                        return t("v55")
                    }

                    function u() {
                        return t("v60")
                    }

                    function v(a) {
                        if (a instanceof Node) return a;
                        return a && a.ownerDocument && a.ownerDocument.defaultView && a.ownerDocument.defaultView.Node && a instanceof a.ownerDocument.defaultView.Node ? a : null
                    }

                    function w(a) {
                        a = v(a);
                        return a && (a instanceof HTMLElement || a instanceof a.ownerDocument.defaultView.HTMLElement) ? a : null
                    }

                    function x(a) {
                        return a && (a instanceof HTMLBodyElement || a instanceof a.ownerDocument.defaultView.HTMLBodyElement) ? a : null
                    }

                    function y(a) {
                        return !!(a && a.id && (a.id.match(/^div-gpt/) || a.hasAttribute("data-google-query-id")))
                    }

                    function z(a) {
                        return a.ownerDocument.defaultView.frameElement
                    }

                    function A(a) {
                        return !!(a && a.id && a.id.match(/^google_ads_iframe_/))
                    }

                    function B(a) {
                        while (a != null) {
                            if (A(a)) return !0;
                            a = z(a)
                        }
                        return !1
                    }

                    function C(a) {
                        var b = z(a);
                        if (b == null) return;
                        if (!A(b)) return;
                        F(b, "100%", b.clientHeight);
                        F(b, "100%", a.clientHeight)
                    }

                    function D(a, c) {
                        __p && __p();
                        var d = c.ownerDocument;
                        d = d.createElement("iframe");
                        a.appendChild(d);
                        d.contentDocument.open();
                        d.contentDocument.close();
                        a = b("nullthrows")(d.contentDocument.body);
                        a.appendChild(c);
                        a.style.margin = "0";
                        d.style.border = "none";
                        F(d, "100%", null);
                        return d
                    }

                    function E(a) {
                        return a == null ? "" : typeof a === "string" ? a : a + "px"
                    }

                    function F(a, b, c) {
                        b === void 0 && (b = null);
                        c === void 0 && (c = null);
                        if (!a) return;
                        a.style.width = E(b);
                        a.style.height = E(c)
                    }

                    function G(a, b) {
                        return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : ""
                    }

                    function H(a) {
                        return !!(a && a.id && a.id.match(/^apstag-f-iframe-/))
                    }

                    function I(a) {
                        H(a) && (a = a.ownerDocument.defaultView.frameElement);
                        a = a.parentElement && a.parentElement.parentElement;
                        return y(a) ? a : null
                    }

                    function J(a) {
                        var b = a.ownerDocument.defaultView;
                        return parseInt(b.getComputedStyle(a).width, 10)
                    }

                    function K(a) {
                        var b = a.ownerDocument.defaultView;
                        return parseInt(b.getComputedStyle(a).height, 10)
                    }

                    function L() {
                        return window.screen.width
                    }

                    function M() {
                        return window.screen.height
                    }

                    function N() {
                        return b("ScreenOrientation.adquality").getScreenOrientation() == "v"
                    }

                    function O(a) {
                        if (!a) return !1;
                        for (var b = 0; b < k.length; b++) {
                            var c = k[b];
                            if (a.match(c)) return !0
                        }
                        return !1
                    }

                    function P(a, b) {
                        __p && __p();
                        a = a;
                        while (a) {
                            H(a) && (a = a.ownerDocument.defaultView.frameElement);
                            if (window.getComputedStyle(a).overflowX !== "visible" || !b && !a.parentElement) break;
                            if (!b) a = a.parentElement;
                            else if (a.parentElement) a = a.parentElement;
                            else if (a.ownerDocument.defaultView.frameElement) a = a.ownerDocument.defaultView.frameElement;
                            else break
                        }
                        return a
                    }

                    function Q(a) {
                        a = a.getBoundingClientRect();
                        var b = a.left;
                        a = L() - a.right;
                        return Math.max(a, b)
                    }

                    function R(a) {
                        return a.scrollHeight > a.clientHeight + 3
                    }

                    function S(a, b, c, d) {
                        __p && __p();
                        d === void 0 && (d = " ");
                        var e = c.slice(0, b).join(d) + g;
                        a.textContent = e;
                        if (R(a)) return j;
                        if (b >= c.length) return i;
                        a.textContent = c.slice(0, b + 1).join(d) + g;
                        if (R(a)) {
                            a.textContent = e;
                            return i
                        }
                        a.textContent = e;
                        return h
                    }

                    function T(a, b) {
                        __p && __p();
                        b === void 0 && (b = " ");
                        if (!R(a)) return;
                        var c = a.textContent,
                            d = a.textContent.split(b),
                            e = 0,
                            f = d.length - 1;
                        while (e <= f) {
                            var g = Math.floor((e + f) / 2),
                                h = S(a, g, d, b);
                            if (h === i) break;
                            h === j ? f = g - 1 : e = g + 1
                        }
                        a.textContent.length === 1 && b === " " && (a.textContent = c, T(a, ""))
                    }

                    function U(a, b) {
                        b === void 0 && (b = function() {});
                        a = a.querySelectorAll("[data-auto-fit-text=true]");
                        for (var c = 0; c < a.length; c++) T(a[c]), ES(a[c].textContent, "trim", !0) === g && b()
                    }

                    function V(a) {
                        var b = !1;
                        return function() {
                            b || (b = !0, a.apply(void 0, arguments))
                        }
                    }

                    function W(a) {
                        if (typeof a === "string") return a;
                        else return ""
                    }

                    function X(a, b, c) {
                        a.contentWindow.postMessage(c, b)
                    }

                    function Y(a) {
                        return a instanceof Promise ? !0 : a !== null && typeof a === "object" && typeof a.then === "function" && typeof a["catch"] === "function"
                    }

                    function Z(a) {
                        return !a || !a.nodeType || a.nodeType !== Node.ELEMENT_NODE ? null : a
                    }

                    function $(a) {
                        if (a.nodeName === "BODY") return !1;
                        var b = window.getComputedStyle(a).overflowY;
                        if (b === "scroll" || b === "auto") return !1;
                        return K(a) > M() * 2 ? !1 : !0
                    }
                    e.exports = {
                        autofitIfInDfpIframe: C,
                        calculateLargestMargin: Q,
                        cssSize: E,
                        extractOrigin: l,
                        extractDomain: m,
                        extractHostname: q,
                        findWidestParentElement: P,
                        getDFPRoot: I,
                        getElementWidth: J,
                        getElementHeight: K,
                        getContainingIframe: z,
                        getScreenHeight: M,
                        getScreenWidth: L,
                        getStyle: G,
                        getNavigationStart: d,
                        getTopMostAccessibleWindow: s,
                        getV55TagStateContainer: f,
                        getV60TagStateContainer: u,
                        getWindowHierarchy: r,
                        isA9Container: H,
                        isAppStoreURL: O,
                        isInDfpIframe: B,
                        isDfpContainer: y,
                        isPromiseLike: Y,
                        isSameRootDomain: c,
                        maybeHTMLElement: w,
                        maybeHTMLBodyElement: x,
                        maybeNode: v,
                        once: V,
                        onlyString: W,
                        resizeElement: F,
                        screenIsPortrait: N,
                        sendToFacebook: X,
                        truncateTextToFitElement: T,
                        autofitTextWhereNeeded: U,
                        getTopDomain: a,
                        wrapInIframe: D,
                        checkHTMLElement: Z,
                        shouldContinueTraversing: $
                    }
                }), null);
                __d("SimplePromise.adquality", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 0,
                        h = 1,
                        i = 2;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = g, this.$4 = [], this.$5 = [], a(ES(this.$6, "bind", !0, this), ES(this.$7, "bind", !0, this))
                        }
                        var b = a.prototype;
                        b.then = function(a, b) {
                            if (this.$1 === g) {
                                this.$4.push(a);
                                b && this.$5.push(b);
                                return
                            }
                            this.$1 === h ? a(this.$2) : this.$1 === i && b && b(this.$3)
                        };
                        b.$6 = function(a) {
                            if (this.$1 !== g) return;
                            this.$2 = a;
                            this.$1 = h;
                            while (this.$4.length > 0) this.$4.shift()(this.$2)
                        };
                        b.$7 = function(a) {
                            if (this.$1 !== g) return;
                            this.$3 = a;
                            this.$1 = i;
                            while (this.$5.length > 0) this.$5.shift()(this.$3)
                        };
                        a.resolve = function(b) {
                            return new a(function(a, c) {
                                a(b)
                            })
                        };
                        a.reject = function(b) {
                            return new a(function(a, c) {
                                c(b)
                            })
                        };
                        a.all = function(b) {
                            return new a(function(a, c) {
                                var d = [],
                                    e = 0,
                                    f = function(f) {
                                        var g = f;
                                        b[f].then(function(c) {
                                            d[g] = c, e++, e === b.length && a(d)
                                        }, function(a) {
                                            c(a)
                                        })
                                    };
                                for (var g = 0; g < b.length; g++) f(g)
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AMPContextLoader", ["ANUtils", "SimplePromise.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = function(a) {
                        try {
                            return ES("JSON", "parse", !1, decodeURI(a.name))._context.ampcontextFilepath
                        } catch (a) {
                            return null
                        }
                    };

                    function h(a) {
                        return a && a.sourceUrl
                    }
                    var i = function(a, c) {
                        __p && __p();
                        var d = b("ANUtils").getTopMostAccessibleWindow();
                        if (h(d.context)) {
                            a(d.context);
                            return
                        }
                        var e = g(d);
                        if (e == null) {
                            c();
                            return
                        }
                        d.addEventListener("amp-windowContextCreated", function() {
                            a(d.context)
                        });
                        c = d.document;
                        var f = c.createElement("script");
                        f.src = e;
                        c.head.appendChild(f)
                    };
                    a = {
                        genAMPContext: function() {
                            return new(b("SimplePromise.adquality"))(i)
                        },
                        isAMP: function() {
                            var a = b("ANUtils").getTopMostAccessibleWindow();
                            return h(a.context) || g(a) != null
                        }
                    };
                    e.exports = a
                }), null);
                __d("ANAdChoices", ["nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d) {
                            this.$1 = a, this.$2 = b, this.$3 = c, this.$4 = d
                        }
                        var c = a.prototype;
                        c.$5 = function(a) {
                            __p && __p();
                            var b = this.$6(),
                                c = this.$7();
                            b.appendChild(c);
                            var d = this.$8();
                            b.appendChild(d);
                            d.addEventListener("click", function() {
                                c.style.paddingRight = "1px";
                                c.style.visibility = "visible";
                                c.style.width = "55px";
                                a.style.width = "72px";
                                a.style.transition = "0.0s";
                                window.setTimeout(function() {
                                    c.style.paddingLeft = "0px", c.style.visibility = "hidden", c.style.width = "1px", a.style.transition = "0.3s"
                                }, 3e3);
                                return !0
                            });
                            return b
                        };
                        c.$6 = function() {
                            __p && __p();
                            var a = document.createElement("div");
                            a.className = "fbAdChoices";
                            a.style.backgroundColor = "#ccc";
                            this.$9(a);
                            a.style.cursor = "pointer";
                            a.style.right = "0";
                            a.style.padding = "2px";
                            a.style.lineHeight = "normal";
                            a.style.textAlign = "center";
                            a.style.position = "absolute";
                            a.style.top = "0";
                            return a
                        };
                        c.$7 = function() {
                            __p && __p();
                            var a = document.createElement("a");
                            a.innerText = "AdChoices";
                            a.href = b("nullthrows")(this.$2.adChoicesHref);
                            a.style.color = "rgba(0,0,0,.8)";
                            a.style.display = "inline-block";
                            a.style.fontFamily = "sans-serif";
                            a.style.fontSize = "10px";
                            a.style.overflow = "hidden";
                            a.style.left = "0";
                            a.style.paddingLeft = "0px";
                            a.style.textDecoration = "none";
                            a.style.top = "0";
                            a.style.transition = "0.3s";
                            a.style.verticalAlign = "middle";
                            a.style.visibility = "hidden";
                            a.style.width = "1px";
                            a.target = "_blank";
                            return a
                        };
                        c.$8 = function() {
                            var a = document.createElement("img");
                            a.src = this.$2.adChoicesIcon;
                            a.style.backgroundColor = "#ccc";
                            a.style.display = "inline-block";
                            a.style.height = "12px";
                            a.style.margin = "0";
                            a.style.verticalAlign = "bottom";
                            a.style.width = "12px";
                            return a
                        };
                        c.$10 = function(a) {
                            a.style.top = "0", this.$4.showMultiAds === !0 && this.$4.resizeMediaView === !0 ? a.style.right = "12px" : this.$4.useBannerV3 === !0 ? a.style.left = "0" : a.style.right = "0"
                        };
                        c.$9 = function(a) {
                            this.$4.useBannerV3 === !0 ? (a.style.borderTopLeftRadius = "4px", a.style.borderBottomRightRadius = "4px") : a.style.borderBottomLeftRadius = "4px"
                        };
                        c.render = function() {
                            __p && __p();
                            var a = this,
                                c = document.createElement("iframe");
                            c.style.position = "absolute";
                            this.$10(c);
                            c.style.border = "0";
                            c.style.height = "16px";
                            c.style.width = "18px";
                            this.$1.appendChild(c);
                            var d = function() {
                                var d = a.$5(c),
                                    e = b("nullthrows")(c.contentDocument.body);
                                e.style.margin = "0";
                                e.style.padding = "0";
                                e.style.overflow = "hidden";
                                e.appendChild(d)
                            };
                            c.contentDocument == null ? (this.$3.event("IFRAME_DOCUMENT_FALLBACK"), c.addEventListener("load", function() {
                                d()
                            })) : (c.contentDocument.open(), c.contentDocument.close(), d())
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANBanner", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "fbBannerCallToActionOverlay",
                        h = "fbInteractiveBanner";
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$1 = a.getElementsByClassName(h), this.$2 = a.getElementsByClassName(g)[0], this.$3 = b, b.bannerMovingMedia === !0 && this.$4(a)
                        }
                        var b = a.prototype;
                        b.init = function() {
                            this.$3.bannerTwoStepClick === !0 && this.$5()
                        };
                        b.$5 = function() {
                            var a = this;
                            for (var b = 0; b < this.$1.length; b++) this.$1[b].addEventListener("touchend", function() {
                                a.$6()
                            });
                            this.$2.addEventListener("touchend", function() {
                                a.$7()
                            })
                        };
                        b.$6 = function() {
                            this.$2.classList.remove("hidden")
                        };
                        b.$7 = function() {
                            this.$2.classList.add("hidden")
                        };
                        b.$4 = function(a) {
                            var b = a.getElementsByClassName("fbBannerMovingImage")[0];
                            a = a.getElementsByClassName("fbBannerCallToActionContainer")[0];
                            b.style.width = 318 - a.clientWidth + "px"
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("PageVisibility.adquality", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = ["webkit", "moz", "ms", "o"];
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var b = this;
                            this.$6 = function() {
                                __p && __p();
                                var a = b.getVisibilityState();
                                for (var c = b.$5, d = ES("Array", "isArray", !1, c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var f;
                                    if (d) {
                                        if (e >= c.length) break;
                                        f = c[e++]
                                    } else {
                                        e = c.next();
                                        if (e.done) break;
                                        f = e.value
                                    }
                                    f = f;
                                    f(a)
                                }
                            };
                            this.$1 = a;
                            this.$5 = [];
                            this.$1.hidden != null && (this.$2 = "hidden", this.$3 = "visibilityState", this.$4 = "visibilitychange");
                            for (var a = 0; a < g.length; a++) {
                                var c = g[a];
                                if (this.$1[c + "Hidden"] != null) {
                                    this.$2 = c + "Hidden";
                                    this.$3 = c + "VisibilityState";
                                    this.$4 = c + "visibilitychange";
                                    break
                                }
                            }
                        }
                        var b = a.prototype;
                        b.isHidden = function() {
                            return this.$1[this.$2]
                        };
                        b.getVisibilityState = function() {
                            return this.$1[this.$3]
                        };
                        b.addVisibilityListener = function(a) {
                            this.$5.length === 0 && this.$1.addEventListener(this.$4, this.$6), this.$5.push(a)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANBounceBackManager", ["PageVisibility.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = !1, this.$2 = 0, this.$4 = a, this.$3 = []
                        }
                        var c = a.prototype;
                        c.$5 = function() {
                            __p && __p();
                            var a = ES("Date", "now", !1) - this.$2;
                            for (var b = this.$3, c = ES("Array", "isArray", !1, b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var e;
                                if (c) {
                                    if (d >= b.length) break;
                                    e = b[d++]
                                } else {
                                    d = b.next();
                                    if (d.done) break;
                                    e = d.value
                                }
                                e = e;
                                e(a)
                            }
                            this.$3 = []
                        };
                        c.$6 = function() {
                            var a = this;
                            this.$2 = ES("Date", "now", !1);
                            var c = new(b("PageVisibility.adquality"))(this.$4);
                            c.addVisibilityListener(function() {
                                var b = c.getVisibilityState();
                                b === "visible" && a.$5()
                            });
                            this.$1 = !0
                        };
                        c.onBounceBack = function(a) {
                            this.$1 || this.$6(), this.$3.push(a)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANCallbackManager", ["ANUtils"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();

                    function g(a) {
                        return a ? b("ANUtils").once(a) : null
                    }
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d) {
                            this.$1 = a, this.$2 = b, this.$3 = g(c), this.$4 = g(d), this.$5 = !1, this.$7 = !1
                        }
                        var c = a.prototype;
                        c.enableReward = function() {
                            this.$5 = !0
                        };
                        c.isRewardEnabled = function() {
                            return this.$5
                        };
                        c.rewardCompleted = function() {
                            if (!this.$5 || !this.$3) return;
                            this.$3()
                        };
                        c.adClosed = function() {
                            if (!this.$5 || !this.$4) return;
                            this.$4()
                        };
                        c.setVideo = function(a) {
                            this.$6 = a
                        };
                        c.mediaLoaded = function() {
                            var a = this.$2;
                            if (this.$7 || !a) return;
                            this.$7 = !0;
                            var c = this.$6;
                            a(this.$1, c ? b("ANUtils").once(function() {
                                window.setTimeout(function() {
                                    return c.play(!0)
                                }, 0)
                            }) : function() {})
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("VPAIDDomUtils", ["nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function a(c) {
                        __p && __p();
                        var d = this;
                        this.dom = function(a, b, c) {
                            __p && __p();
                            b === void 0 && (b = {});
                            c === void 0 && (c = []);
                            a = document.createElement(a);
                            ES("Object", "assign", !1, a, b);
                            for (var b = c, c = ES("Array", "isArray", !1, b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var e;
                                if (c) {
                                    if (d >= b.length) break;
                                    e = b[d++]
                                } else {
                                    d = b.next();
                                    if (d.done) break;
                                    e = d.value
                                }
                                e = e;
                                a.appendChild(e)
                            }
                            return a
                        };
                        this.div = function(a, b) {
                            return d.dom("div", {
                                className: a
                            }, b || [])
                        };
                        this.anchor = function(a, b) {
                            return d.dom("a", {
                                className: a,
                                href: b || "#",
                                target: "_blank"
                            })
                        };
                        this.span = function(a, b) {
                            return d.dom("span", {
                                className: a,
                                textContent: b
                            })
                        };
                        this.find = function(a, c) {
                            return b("nullthrows")(a.querySelector(c))
                        };
                        this.withDocument = function(b) {
                            return new a(b)
                        };
                        this.$1 = c
                    };
                    e.exports = new a(document)
                }), null);
                __d("csx", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        throw new Error("csx: Unexpected class selector transformation.")
                    }
                    e.exports = a
                }), null);
                __d("cx", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        throw new Error("cx: Unexpected class transformation.")
                    }
                    e.exports = a
                }), null);
                __d("ANCarouselItem", ["csx", "cx", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
                    "use strict";
                    __p && __p();
                    var i = b("VPAIDDomUtils").div,
                        j = b("VPAIDDomUtils").dom,
                        k = b("VPAIDDomUtils").find,
                        l = function(a, b) {
                            __p && __p();
                            b === void 0 && (b = []);
                            var c = document.createElement("a");
                            c.className = a;
                            for (var a = b, b = ES("Array", "isArray", !1, a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var e;
                                if (b) {
                                    if (d >= a.length) break;
                                    e = a[d++]
                                } else {
                                    d = a.next();
                                    if (d.done) break;
                                    e = d.value
                                }
                                e = e;
                                c.appendChild(e)
                            }
                            c.href = "#";
                            return c
                        },
                        m = function(a, b) {
                            b === void 0 && (b = "");
                            return j("div", {
                                className: a,
                                textContent: b
                            })
                        },
                        n = 62;
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e) {
                            this.$4 = c, this.$1 = a, this.$5 = d, this.$6 = e == null ? "" : b("nullthrows")(e), this.$2 = this.$7()
                        }
                        var c = a.prototype;
                        c.setItemSize = function(a) {
                            a = a + "px";
                            this.$2.style.width = a;
                            if (this.$5) {
                                var b = n + "px";
                                this.$3.style.width = b;
                                this.$3.style.height = b
                            } else this.$3.style.width = a, this.$3.style.height = a
                        };
                        c.$8 = function() {
                            if (this.$5) {
                                var a = this.$6 === "" ? i("_8fla _11u_", [m("_8flb _8flc _11v0", b("nullthrows")(this.$1.adTitle))]) : i("_8fla _11u_", [m("_8flb _8fld _11v0", b("nullthrows")(this.$1.adTitle)), m("_8fle _11vj", this.$6)]);
                                return l("_8flf _11u9", [i("_11ur", [i("_11us"), i("_8flg _11u-", [a])])])
                            }
                            return l("_11u9", [i("_11ur", [i("_11us")])])
                        };
                        c.$7 = function() {
                            __p && __p();
                            var a = this.$8();
                            this.$3 = k(a, "._11us");
                            var c = this.$4;
                            if (c != null) {
                                var d = new Image();
                                d.addEventListener("load", function() {
                                    c()
                                });
                                d.src = b("nullthrows")(this.$1.adImage)
                            }
                            this.$3.style.backgroundImage = "url(" + b("nullthrows")(this.$1.adImage) + ")";
                            return a
                        };
                        c.getElement = function() {
                            return this.$2
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANCarouselMotion", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = function(a, b) {
                            a.style.transform = b, a.style.webkitTransform = b
                        },
                        h = 0;
                    a = function(a) {
                        var b = ES("Date", "now", !1),
                            c = Math.max(0, 16 - (b - h));
                        h = b + c;
                        return window.setTimeout(a, c)
                    };
                    var i = window.requestAnimationFrame || a,
                        j = window.cancelAnimationFrame || function(a) {
                            return window.clearTimeout(a)
                        },
                        k = 4,
                        l = 1,
                        m = 0,
                        n = 401,
                        o = 1,
                        p = 400,
                        q = 400;
                    b = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$2 = !1, this.$6 = !1, this.$8 = 0, this.$11 = a, this.$10 = a.getRail(), this.$12 = b || function() {}, g(this.$10, "translateX(0px)")
                        }
                        var b = a.prototype;
                        b.$13 = function() {
                            this.$10.style.transition = ""
                        };
                        b.$14 = function() {
                            this.$10.style.transition = "none"
                        };
                        b.$15 = function(a, b) {
                            a = this.$11.closestIndex(a);
                            this.$11["goto"](a, p);
                            this.$12(a, b)
                        };
                        b.$16 = function(a) {
                            if (this.$11.isWithinRange(a)) return a;
                            if (a > 0) return a / k;
                            var b = -this.$11.getMaxOffset();
                            return b + (a - b) / k
                        };
                        b.onMoveStart = function(a) {
                            this.$11.onCriticalAnimationStart(), this.$7 && window.clearTimeout(this.$7), this.$14(), this.$4 = this.$5 = a, this.$1 = this.$8 - a.x * l, this.$3 = ES("Date", "now", !1), this.$2 = !1, this.$6 = !1
                        };
                        b.onMove = function(a, b) {
                            __p && __p();
                            var c = this;
                            if (this.$6)
                                if (this.$2) a.preventDefault();
                                else return;
                            this.$9 && j(this.$9);
                            this.$5 = b;
                            if (this.$1 == null || this.$4 == null || this.$5 == null) return;
                            a = this.$4;
                            var d = this.$5;
                            if (this.$6) this.$2 && (this.$9 = i(function() {
                                c.scrollTo(c.$16(c.$1 + b.x * l))
                            }));
                            else if (ES("Date", "now", !1) - this.$3 > 2 * (1e3 / 60)) {
                                var e = a.x - d.x;
                                a = a.y - d.y;
                                e === 0 ? d = Infinity : d = a / e;
                                Math.abs(d) < o && (this.$2 = !0);
                                this.$6 = !0
                            }
                        };
                        b.onMoveEnd = function() {
                            __p && __p();
                            var a = this;
                            if (!this.$2) return;
                            this.$9 && j(this.$9);
                            var b = "left";
                            this.$5 != null && this.$4 != null && (b = this.$5.x < this.$4.x ? "right" : "left");
                            this.$13();
                            this.$1 = this.$4 = this.$5 = null;
                            var c = -this.$8,
                                d = Math.round(m * this.$11.getItemWidthRatio()),
                                e = ES("Date", "now", !1) - this.$3 <= q;
                            e = e ? this.$11.getWidth() / 3 : 0;
                            b === "right" ? c += e + d : c -= e + d;
                            this.$7 = window.setTimeout(function() {
                                a.$11.onCriticalAnimationEnd()
                            }, n);
                            this.$15(c, b)
                        };
                        b.scrollTo = function(a, b) {
                            b != null ? this.$10.style.transitionDuration = b / 1e3 + "s" : this.$10.style.transitionDuration = "", g(this.$10, "translateX(" + a + "px)"), this.$8 = a
                        };
                        b.scrollToTransition = function(a, b) {
                            var c = this;
                            this.$13();
                            this.$8 = a;
                            this.$9 = i(function() {
                                c.scrollTo(a, b)
                            })
                        };
                        b.getCurrentOffset = function() {
                            return -this.$8
                        };
                        return a
                    }();
                    e.exports = b
                }), null);
                __d("ANCarousel", ["csx", "cx", "ANCarouselMotion", "VPAIDDomUtils", "ANCarouselItem"], (function(a, b, c, d, e, f, g, h) {
                    "use strict";
                    __p && __p();
                    var i = b("VPAIDDomUtils").div,
                        j = b("VPAIDDomUtils").find,
                        k = function() {},
                        l = function(a) {
                            return {
                                x: a.touches[0].clientX,
                                y: a.touches[0].clientY
                            }
                        },
                        m = 300,
                        n = 172,
                        o = 4,
                        p = 1,
                        q = 8,
                        r = 1.2;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var b = a.ads,
                                c = a.onEvent,
                                d = a.onCriticalAnimationStart,
                                e = a.onCriticalAnimationEnd,
                                f = a.onLoadEventCounter;
                            a = a.adFeatures;
                            this.$10 = m;
                            this.$11 = n;
                            this.$12 = o;
                            this.$13 = p;
                            this.$15 = f;
                            this.$6 = b;
                            this.$9 = c || k;
                            this.onCriticalAnimationStart = d || k;
                            this.onCriticalAnimationEnd = e || k;
                            this.$16 = a;
                            this.$18 = !!this.$16.useDPADesign;
                            this.$19 = this.$16.dpaPriceLabels == null ? null : this.$16.dpaPriceLabels.slice(1);
                            this.$20()
                        }
                        var c = a.prototype;
                        c.$20 = function() {
                            __p && __p();
                            var a = this;
                            this.$8 = 0;
                            this.$7 = [];
                            this.$17 = !!this.$16.useLargeCarouselWithCounter;
                            var c = i("_2vf-");
                            this.$18 && (c = i("_8fkr _2vf-"));
                            this.$3 = [];
                            var d = [c];
                            this.$17 && (d = [c, i("_8edz")]);
                            c = [i("_2vfy", d), this.$21()];
                            this.$1 = i("_2vfx", c);
                            this.$17 && (this.$4 = j(this.$1, "._8edz"), this.$22());
                            this.$5 = j(this.$1, "._2vf-");
                            this.$2 = j(this.$1, "._2vfy");
                            this.$15.addRequiredEvent();
                            ES(this.$6, "forEach", !0, function(c, d) {
                                var e = a.$19 != null ? a.$19[d] : null;
                                c = new(b("ANCarouselItem"))(c, d === 0 ? function() {
                                    return a.$15.requiredEventFired()
                                } : null, a.$18, e);
                                a.$7.push(c);
                                a.$5.appendChild(c.getElement())
                            });
                            this.$14 = new(b("ANCarouselMotion"))(this, function(b, c) {
                                a.$23(), a.$17 && a.$24(), a.$9("AN_CAROUSEL_EVENT_SWIPE", {
                                    index: b,
                                    direction: c
                                })
                            });
                            this.ensureSizes();
                            this.$25()
                        };
                        c.$26 = function() {
                            return this.$1.clientWidth
                        };
                        c.$25 = function() {
                            var a = this;
                            this.$5.addEventListener("touchstart", function(b) {
                                a.$14.onMoveStart(l(b))
                            });
                            this.$5.addEventListener("touchmove", function(b) {
                                a.$14.onMove(b, l(b))
                            });
                            this.$5.addEventListener("touchend", function(b) {
                                a.$14.onMoveEnd()
                            })
                        };
                        c.$27 = function(a) {
                            if (this.isWithinRange(a)) return a;
                            return a > 0 ? 0 : -this.getMaxOffset()
                        };
                        c.$28 = function() {
                            return this.$18 ? this.$6.length === 2 ? (this.$10 - 4 * this.$12 - 2 * q) / 2 : (this.$10 - 3 * this.$12) / 2 + 2 * this.$13 : this.$10
                        };
                        c.$29 = function() {
                            return this.$18 ? o : 0
                        };
                        c.$30 = function() {
                            return this.$18 ? p : 0
                        };
                        c.$31 = function() {
                            return this.$10 > m ? r : 1
                        };
                        c.$32 = function(a) {
                            return this.$18 ? (this.$11 + 2 * this.$12) * a + q : this.$11 * a
                        };
                        c.$33 = function() {
                            return i("_8ed-")
                        };
                        c.$21 = function() {
                            var a = [];
                            for (var b = 0; b < this.$6.length; b++) {
                                var c = this.$33();
                                a.push(c);
                                b === 0 && a[b].classList.add("_8ed_")
                            }
                            c = this.$18 ? i("_8fks _8ee0", a) : i("_8ee0", a);
                            this.$3 = a;
                            return c
                        };
                        c.$23 = function() {
                            for (var a = 0; a < this.$6.length; a++) this.isIndexVisible(a) ? this.$3[a].classList.add("_8ed_") : this.$3[a].classList.remove("_8ed_")
                        };
                        c.$22 = function() {
                            this.$4 && (this.$4.innerText = "1/" + this.$6.length)
                        };
                        c.$24 = function() {
                            this.$4 && (this.$4.innerText = this.$8 + 1 + "/" + this.$6.length)
                        };
                        c.getLinks = function() {
                            return ES(this.$7, "map", !0, function(a) {
                                return a.getElement()
                            })
                        };
                        c.getElement = function() {
                            return this.$1
                        };
                        c.getRail = function() {
                            return this.$5
                        };
                        c.getItemWidthRatio = function() {
                            return this.$18 ? this.$11 / n : this.$10 / m
                        };
                        c.getFullWidth = function() {
                            return this.$6.length * (this.$11 + 2 * this.$12)
                        };
                        c.getMaxOffset = function() {
                            return this.$18 ? this.getFullWidth() - this.$10 + q * 2 : this.getFullWidth() - this.$10
                        };
                        c.getIndex = function() {
                            return this.$8
                        };
                        c.getWidth = function() {
                            return this.$10
                        };
                        c.isIndexVisible = function(a) {
                            var b = this.$14.getCurrentOffset();
                            a = this.$32(a);
                            return a >= b && a + this.$11 <= b + this.$10
                        };
                        c["goto"] = function(a, b) {
                            var c = -a * (this.$11 + 2 * this.$12);
                            c += (this.$10 - this.$11 - 2 * this.$12) / 2 - 2 * this.$12;
                            c = this.$27(c);
                            this.$14.scrollToTransition(c, b);
                            this.$8 = a
                        };
                        c.closestIndex = function(a) {
                            var b = this.$11 + this.$12;
                            a = a + this.$10 / 2;
                            a = Math.floor(a / b);
                            if (a >= this.$6.length) return this.$6.length - 1;
                            else if (a < 0) return 0;
                            return a
                        };
                        c.isWithinRange = function(a) {
                            return a > 0 ? !1 : a > -this.getMaxOffset()
                        };
                        c.ensureSizes = function() {
                            __p && __p();
                            var a = this;
                            this.$10 = this.$26() || m;
                            this.$11 = this.$28();
                            this.$12 = this.$29();
                            this.$13 = this.$30();
                            this.$1.style.fontSize = this.$31() * 100 + "px";
                            this.$5.style.width = this.getFullWidth() + "px";
                            ES(this.$7, "forEach", !0, function(b, c) {
                                if (a.$18) {
                                    b.setItemSize(a.$11 - 2);
                                    c = b.getElement();
                                    c.style.marginRight = a.$12 + "px";
                                    c.style.marginLeft = a.$12 + "px"
                                } else b.setItemSize(a.$11)
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("joinClasses", [], (function(a, b, c, d, e, f) {
                    "use strict";

                    function a(a) {
                        var b = a || "",
                            c = arguments.length <= 1 ? 0 : arguments.length - 1;
                        for (var d = 0; d < c; d++) {
                            var e = d + 1 < 1 || arguments.length <= d + 1 ? void 0 : arguments[d + 1];
                            e != null && e !== "" && (b = (b ? b + " " : "") + e)
                        }
                        return b
                    }
                    e.exports = a
                }), null);
                __d("ANCollage", ["cx", "VPAIDDomUtils", "joinClasses", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var b = a.ads,
                                c = a.onLoadEventCounter,
                                d = a.adFeatures;
                            a = a.extended;
                            this.$3 = c;
                            this.$2 = b;
                            this.$4 = d;
                            this.$10 = a;
                            this.$5 = [];
                            this.$6 = 0;
                            this.$7 = 0;
                            this.$9 = !1;
                            this.$8 = !1;
                            this.$1 = this.$11();
                            this.$12();
                            this.$9 || this.$13();
                            this.$3.addRequiredEvent()
                        }
                        var c = a.prototype;
                        c.$11 = function() {
                            var a = this.$2.length,
                                b;
                            h("_7_cd");
                            !this.$10 ? a <= 2 ? b = h("_7_cd", [this.$14()]) : a <= 4 ? b = h("_7_cd", [this.$14(), this.$14()]) : b = h("_7_cd", [this.$14(), this.$15()]) : a <= 2 ? b = h("_7_cd", [this.$14()]) : a <= 4 ? b = h("_7_cd", [this.$14(), this.$14()]) : a <= 6 ? b = h("_7_cd", [this.$14(), this.$14(), this.$14()]) : b = h("_7_cd", [this.$14(), this.$14(), this.$15()]);
                            return b
                        };
                        c.$12 = function() {
                            var a = this;
                            ES(this.$2, "forEach", !0, function(c, d) {
                                if (!a.$9) {
                                    d = c.adImage;
                                    c = a.$16();
                                    a.$17(c, b("nullthrows")(d))
                                }
                            })
                        };
                        c.$13 = function() {
                            var a = this.$5[this.$6 - 1],
                                b;
                            !this.$10 ? this.$7 === 3 ? b = this.$18() : this.$7 === 5 ? b = this.$19() : b = this.$20() : this.$7 === 3 ? b = this.$18() : this.$7 === 5 ? b = this.$18() : this.$7 === 7 ? b = this.$19() : b = this.$20();
                            a.appendChild(b)
                        };
                        c.$20 = function() {
                            return h(b("joinClasses")("fbAdLink", "fbAdIcon", "_7_ce"))
                        };
                        c.$18 = function() {
                            return h(b("joinClasses")("fbAdLink", "_7_cf"), [h(b("joinClasses")("fbAdIcon", "_7_ce")), h(b("joinClasses")("fbAdSubtitle", "_7_c-"))])
                        };
                        c.$19 = function() {
                            return h(b("joinClasses")("fbAdLink", "_7_c_"), [h(b("joinClasses")("fbAdIcon", "_7_ce"))])
                        };
                        c.$14 = function() {
                            var a = h("_7_d0");
                            this.$5.push(a);
                            this.$6++;
                            var b = h("_7_d0");
                            this.$5.push(b);
                            this.$6++;
                            return h("_7_d1", [a, b])
                        };
                        c.$15 = function() {
                            var a = h("_7_d0");
                            this.$5.push(a);
                            this.$6++;
                            return h("_7_d1", [a, h("_7_d0", [this.$14(), this.$14()])])
                        };
                        c.$16 = function() {
                            var a = this.$5[this.$7];
                            this.$7 === this.$6 - 1 && (this.$9 = !0);
                            this.$7++;
                            return a
                        };
                        c.$17 = function(a, b) {
                            var c = this,
                                d = document.createElement("img");
                            d.addEventListener("load", function() {
                                a.style.backgroundImage = "url(" + b + ")", c.$8 || (c.$8 = !0, c.$3.requiredEventFired())
                            });
                            d.src = b
                        };
                        c.getElement = function() {
                            return this.$1
                        };
                        c.getCells = function() {
                            return this.$5
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANDPAContainer", ["cx", "VPAIDDomUtils"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div,
                        i = b("VPAIDDomUtils").dom,
                        j = function(a, b) {
                            b === void 0 && (b = "");
                            return i("div", {
                                className: a,
                                textContent: b
                            })
                        };
                    a = function() {
                        function a(a, b) {
                            this.$1 = h("_8fl8", [h("_8fl9", [j("_8fkt", b), j("_8fku", a)])])
                        }
                        var b = a.prototype;
                        b.getElement = function() {
                            return this.$1
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANEventCounter", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a() {
                            this.$1 = 0, this.$2 = !1, this.$3 = []
                        }
                        var b = a.prototype;
                        b.addRequiredEvent = function() {
                            this.addRequiredEvents()
                        };
                        b.addRequiredEvents = function(a) {
                            a === void 0 && (a = 1), this.$1 += a
                        };
                        b.requiredEventFired = function() {
                            this.$1 -= 1, !this.$2 && this.$1 === 0 && (this.$2 = !0, this.$4())
                        };
                        b.addListener = function(a) {
                            this.$2 ? window.setTimeout(a, 0) : this.$3.push(a)
                        };
                        b.$4 = function() {
                            __p && __p();
                            for (var a = this.$3, b = ES("Array", "isArray", !1, a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var d;
                                if (b) {
                                    if (c >= a.length) break;
                                    d = a[c++]
                                } else {
                                    c = a.next();
                                    if (c.done) break;
                                    d = c.value
                                }
                                d = d;
                                d()
                            }
                        };
                        b.hasFired = function() {
                            return this.$2
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANStyleChangeTracker", ["ANUtils", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 0;

                    function h() {
                        g++;
                        return "fban-fw-sct-" + g
                    }

                    function i(a, b, c) {
                        if (a.has(c)) return;
                        var d = b.style.getPropertyValue(c);
                        d ? a.set(c, {
                            property: c,
                            value: b.style.getPropertyValue(c),
                            priority: b.style.getPropertyPriority(c)
                        }) : a.set(c, {
                            property: c
                        })
                    }
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = new Map(), this.$2 = new Map(), this.$3 = new Map(), this.$4 = a
                        }
                        var c = a.prototype;
                        c.resize = function(a, c, d) {
                            this.$4 === !0 ? this.addChanges(a, {
                                width: b("ANUtils").cssSize(c)
                            }) : this.addChanges(a, {
                                width: b("ANUtils").cssSize(c),
                                height: b("ANUtils").cssSize(d)
                            })
                        };
                        c.addChanges = function(a, c) {
                            __p && __p();
                            var d = this.$5(a);
                            this.$1.has(d) || (this.$1.set(d, new Map()), this.$2.set(d, new Map()));
                            var e = b("nullthrows")(this.$1.get(d));
                            d = b("nullthrows")(this.$2.get(d));
                            var f = ES("Object", "keys", !1, c);
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                e.set(h, c[h]);
                                i(d, a, h)
                            }
                        };
                        c.applyChanges = function() {
                            __p && __p();
                            for (var a = this.$1.entries(), c = ES("Array", "isArray", !1, a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var e;
                                if (c) {
                                    if (d >= a.length) break;
                                    e = a[d++]
                                } else {
                                    d = a.next();
                                    if (d.done) break;
                                    e = d.value
                                }
                                e = e;
                                var f = e[0];
                                e = e[1];
                                f = b("nullthrows")(this.$3.get(f));
                                for (var e = e.entries(), g = ES("Array", "isArray", !1, e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var i;
                                    if (g) {
                                        if (h >= e.length) break;
                                        i = e[h++]
                                    } else {
                                        h = e.next();
                                        if (h.done) break;
                                        i = h.value
                                    }
                                    i = i;
                                    var j = i[0];
                                    i = i[1];
                                    f.style.setProperty(j, i, "important")
                                }
                            }
                        };
                        c.restoreOriginalStyles = function() {
                            __p && __p();
                            for (var a = this.$2.entries(), c = ES("Array", "isArray", !1, a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var e;
                                if (c) {
                                    if (d >= a.length) break;
                                    e = a[d++]
                                } else {
                                    d = a.next();
                                    if (d.done) break;
                                    e = d.value
                                }
                                e = e;
                                var f = e[0];
                                e = e[1];
                                f = b("nullthrows")(this.$3.get(f));
                                for (var e = e.entries(), g = ES("Array", "isArray", !1, e), h = 0, e = g ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var i;
                                    if (g) {
                                        if (h >= e.length) break;
                                        i = e[h++]
                                    } else {
                                        h = e.next();
                                        if (h.done) break;
                                        i = h.value
                                    }
                                    i = i;
                                    var j = i[0];
                                    i = i[1];
                                    i.value == null ? f.style.removeProperty(j) : f.style.setProperty(j, i.value, i.priority)
                                }
                            }
                        };
                        c.$5 = function(a) {
                            a.id || (a.id = h());
                            this.$3.set(a.id, a);
                            return a.id
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANFullWidthIFrame", ["ANStyleChangeTracker", "ANUtils", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e, f, g, h, i, j) {
                            this.$1 = new(b("ANStyleChangeTracker"))(i), this.$2 = a, this.$3 = c, this.$4 = d, this.$5 = e, this.$6 = f, this.$7 = g, this.$8 = h, this.$9 = j
                        }
                        var c = a.prototype;
                        c.resize = function(a, c) {
                            __p && __p();
                            this.$7 || this.$1.resize(this.$4, a, c);
                            var d = this.$2;
                            if (this.$7) {
                                this.$1.addChanges(this.$3, {
                                    display: "block"
                                });
                                b("ANUtils").isA9Container(this.$2) && (this.$1.resize(d, a, c), d = this.$2.ownerDocument.defaultView.frameElement);
                                this.$1.resize(d, a, c);
                                var e = b("ANUtils").getDFPRoot(d);
                                e != null ? this.$10(e, d, a, c) : (this.$1.addChanges(d, {
                                    overflow: "visible",
                                    "margin-left": "auto",
                                    "margin-right": "auto"
                                }), this.$9 || this.$1.addChanges(d, {
                                    position: "initial"
                                }))
                            }
                            this.$1.applyChanges();
                            e = d.ownerDocument.defaultView.frameElement;
                            this.$8 && e ? (this.$1.resize(e, a, c), this.$1.applyChanges()) : this.$7 && (this.$11(d), this.$1.applyChanges())
                        };
                        c.$10 = function(a, c, d, e) {
                            c = b("nullthrows")(b("ANUtils").maybeHTMLElement(c.parentElement));
                            this.$1.addChanges(a, {
                                overflow: "visible",
                                "margin-left": "auto",
                                "margin-right": "auto",
                                height: "auto",
                                width: "auto"
                            });
                            this.$1.resize(c, d, e);
                            this.$1.addChanges(c, {
                                "margin-left": "0"
                            });
                            this.$9 || (this.$1.addChanges(a, {
                                position: "initial"
                            }), this.$1.addChanges(c, {
                                position: "initial"
                            }))
                        };
                        c.restoreOriginalStyles = function() {
                            this.$1.restoreOriginalStyles()
                        };
                        c.$11 = function(a) {
                            this.$1.addChanges(a, {
                                "max-width": "none"
                            });
                            a = b("ANUtils").maybeHTMLElement(a.parentElement);
                            if (!a) return;
                            var c = this.$6 - a.getBoundingClientRect().left;
                            this.$1.addChanges(a, {
                                "margin-left": b("ANUtils").cssSize(c)
                            });
                            this.$1.addChanges(a, {
                                "max-width": "none"
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANFullWidthInline", ["ANStyleChangeTracker", "ANUtils"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e, f, g) {
                            this.$1 = new(b("ANStyleChangeTracker"))(f), this.$2 = a, this.$3 = c, this.$4 = d, this.$5 = e, this.$6 = g
                        }
                        var c = a.prototype;
                        c.resize = function(a, c) {
                            __p && __p();
                            this.$1.resize(this.$3, a, c);
                            if (this.$5) {
                                this.$1.addChanges(this.$2, {
                                    display: "block"
                                });
                                var d = this.$7(this.$3);
                                d && (this.$1.resize(d, a, c), this.$1.addChanges(d, {
                                    "margin-left": "auto",
                                    "margin-right": "auto"
                                }), this.$1.addChanges(this.$2, {
                                    display: "block"
                                }))
                            }
                            this.$1.applyChanges();
                            d = b("ANUtils").maybeHTMLElement(this.$3.parentElement);
                            var e = !1;
                            this.$6 && (e = this.$6.inline_resize_parent);
                            d && b("ANUtils").getElementHeight(d) < c && e === !0 && this.$1.resize(d, a, c);
                            this.$1.applyChanges();
                            this.$8();
                            this.$1.applyChanges()
                        };
                        c.restoreOriginalStyles = function() {
                            this.$1.restoreOriginalStyles()
                        };
                        c.$7 = function(a) {
                            a = a.parentElement && a.parentElement.parentElement && a.parentElement.parentElement.parentElement;
                            return a && b("ANUtils").isDfpContainer(a) ? b("ANUtils").maybeHTMLElement(a) : null
                        };
                        c.$8 = function() {
                            var a = this.$3,
                                c = this.$4 - a.getBoundingClientRect().left;
                            this.$1.addChanges(a, {
                                "margin-left": b("ANUtils").cssSize(c),
                                "max-width": "none"
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANFullWidthLoader", ["ANFullWidthIFrame", "ANFullWidthInline", "ANUtils"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "fbOriginalHeightResizeChecks",
                        h = "ADNW_FW_PRE_RESIZE_CHECK_FAIL",
                        i = "ADNW_FW_POST_RESIZE_CHECK_FAIL",
                        j = 0;
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e, f, h, i, k, l, m) {
                            this.$1 = a, this.$2 = c, this.$3 = d, this.$4 = e, this.$5 = f, this.$6 = h, this.$9 = [], this.$10 = g + j++, this.$12 = k, this.$11 = i, this.$13 = l, this.$14 = m != null && m.shouldResizeBanner, this.$15 = m != null && m.shouldResizeBanner && m.isStickyBanner, this.$2 ? (this.$7 = "iframe", this.$8 = new(b("ANFullWidthIFrame"))(this.$2, this.$3, this.$4, this.$6, this.$11, this.$12, !1, this.$14, this.$15)) : (this.$7 = "inline", this.$8 = new(b("ANFullWidthInline"))(this.$3, this.$4, i, k, this.$14, this.$13))
                        }
                        var c = a.prototype;
                        c.resize = function(a, c) {
                            __p && __p();
                            var d = !1;
                            if (this.$1 && this.$12) {
                                d = this.$16();
                                if (!d && this.$1) {
                                    this.$17();
                                    return !1
                                }
                            } else this.$2 && this.$18() && (this.$8 = new(b("ANFullWidthIFrame"))(this.$2, this.$3, this.$4, this.$6, this.$11, this.$12, !0, this.$14, this.$15));
                            this.$8.resize(a, c);
                            this.$3.style.visibility = "";
                            if (!this.$12) return !0;
                            a = d;
                            this.$1 && d && (a = this.$19());
                            this.$17();
                            return a
                        };
                        c.restoreOriginalStyles = function() {
                            this.$8.restoreOriginalStyles()
                        };
                        c.$17 = function() {
                            while (this.$9.length) {
                                var a = this.$9.pop();
                                delete a.dataset[this.$10]
                            }
                        };
                        c.$20 = function() {
                            return this.$2 ? this.$2 : this.$3
                        };
                        c.$16 = function() {
                            __p && __p();
                            var a = this.$20();
                            if (!a) return !1;
                            var c = b("ANUtils").isA9Container(this.$2);
                            if (a.ownerDocument.defaultView.frameElement && !c)
                                if (this.$2 && this.$18()) this.$8 = new(b("ANFullWidthIFrame"))(this.$2, this.$3, this.$4, this.$6, this.$11, this.$12, !0, this.$14, this.$15);
                                else {
                                    this.$6.event(h, "iframe");
                                    return !1
                                }
                            if (!b("ANUtils").screenIsPortrait()) return !1;
                            c = 0;
                            var d = "";
                            while (a && b("ANUtils").shouldContinueTraversing(a)) d = d || this.$21(a, c), a.dataset[this.$10] = b("ANUtils").getElementHeight(a) + "", this.$9.push(a), a = b("ANUtils").checkHTMLElement(a.parentElement), c++;
                            if (d) {
                                this.$6.event(h, d);
                                return !1
                            }
                            return !0
                        };
                        c.$18 = function() {
                            return this.$7 === "iframe" && this.$13 && this.$13.iframe_resize_parent === !0
                        };
                        c.$21 = function(a, c) {
                            __p && __p();
                            var d = b("ANUtils").getStyle(a, "position");
                            if (d && d !== "static" && !(c === 0 && d === "relative"))
                                if (d === "relative")
                                    for (var d = a.children, a = ES("Array", "isArray", !1, d), e = 0, d = a ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                        var f;
                                        if (a) {
                                            if (e >= d.length) break;
                                            f = d[e++]
                                        } else {
                                            e = d.next();
                                            if (e.done) break;
                                            f = e.value
                                        }
                                        f = f;
                                        f = b("ANUtils").getStyle(f, "position");
                                        if (f === "absolute") return "sibling_" + c
                                    } else return "position_" + c;
                            return ""
                        };
                        c.$22 = function(a) {
                            return Object.prototype.hasOwnProperty.call(a.dataset, this.$10) ? b("ANUtils").getElementHeight(a) - parseInt(a.dataset[this.$10], 10) : null
                        };
                        c.$19 = function() {
                            __p && __p();
                            var a = this.$20();
                            if (!a) return !1;
                            var c = this.$13 != null && this.$13.off_screen_10 === !0;
                            c = c ? 10 : 0;
                            if (this.$2) {
                                var d = this.$2.getBoundingClientRect();
                                if (d.left < -c || d.right > b("ANUtils").getScreenWidth() + c) {
                                    this.$6.event(i, "off_screen");
                                    return !1
                                }
                            }
                            while (a && b("ANUtils").shouldContinueTraversing(a)) {
                                d = this.$22(a);
                                if (d == null) {
                                    this.$6.event(i, "height_null");
                                    return !1
                                }
                                if (d === 0) {
                                    this.$6.event(i, "height_unchanged");
                                    return !1
                                }
                                a = b("ANUtils").checkHTMLElement(a.parentElement)
                            }
                            return !0
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANLinkOpener", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = a, this.$2 = document.createElement("a"), this.$2.rel = "noopener noreferrer", this.$1.appendChild(this.$2)
                        }
                        var b = a.prototype;
                        b.$3 = function(a, b) {
                            this.$2.href = a, this.$2.target = b ? "_blank" : "_top", this.$2.click()
                        };
                        b.openNewTab = function(a) {
                            this.$3(a, !0)
                        };
                        b.open = function(a) {
                            this.$3(a, !1)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("getTime", [], (function(a, b, c, d, e, f) {
                    "use strict";

                    function a() {
                        return ES("Date", "now", !1)
                    }
                    e.exports = a
                }), null);
                __d("ANLogger", ["ANUtils", "getTime", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = ["ADNW_PAGE_UNLOADED"];
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d, e, f) {
                            this.$1 = a, this.$3 = b, this.$2 = c, this.$4 = d, this.$5 = e, this.$6 = f, this.$7 = [], this.$8 = null, this.$9 = !1
                        }
                        var c = a.prototype;
                        c.setLogLevel = function(a) {
                            this.$1 = a
                        };
                        c.frameReady = function() {
                            __p && __p();
                            this.$9 = !0;
                            for (var a = this.$7, b = ES("Array", "isArray", !1, a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var d;
                                if (b) {
                                    if (c >= a.length) break;
                                    d = a[c++]
                                } else {
                                    c = a.next();
                                    if (c.done) break;
                                    d = c.value
                                }
                                d = d;
                                this.$10(d.timestamp, d.params)
                            }
                            this.$7 = []
                        };
                        c.setUnifiedLoggingURL = function(a) {
                            this.$8 = a
                        };
                        c.debug = function(a, b) {
                            this.$1 <= 1 && this.event(a, b)
                        };
                        c.error = function(a) {
                            this.$1 <= 3 && this.event("ADNW_ADERROR", a)
                        };
                        c.warn = function(a) {
                            this.$1 <= 2 && this.event("ADNW_ADWARNING", a)
                        };
                        c.event = function(a, b, c) {
                            a = {
                                event_name: a
                            };
                            b != null && (a.error_message = "" + b);
                            c != null && (a.error_stack_trace = c);
                            this.eventWithParams(a)
                        };
                        c.eventWithParams = function(a) {
                            var c = b("getTime")();
                            if (!this.$9) {
                                this.$7.push({
                                    timestamp: c,
                                    params: a
                                });
                                return
                            }
                            this.$10(c, a)
                        };
                        c.$10 = function(a, c) {
                            c.client_ts = a, this.$2 > 0 && (c.latency_since_navigation_start = a - this.$2), c.latency_since_sdk_init = a - this.$3, window.$11 && (c.visibility_changed = !0), ES(g, "includes", !0, c.event_name) ? this.$12([{
                                type: "client",
                                key: b("ANUtils").onlyString(this.$4),
                                top_domain: b("ANUtils").getTopDomain(),
                                payload: c
                            }]) : b("ANUtils").sendToFacebook(this.$5, this.$6, {
                                name: "client_event",
                                params: {
                                    key: b("ANUtils").onlyString(this.$4),
                                    payload: c
                                }
                            })
                        };
                        c.logClick = function(a, c) {
                            var d = a.action != null ? a.action : 0,
                                e = b("getTime")();
                            e = {
                                name: "client_event",
                                params: {
                                    key: a.key,
                                    payload: {
                                        event_name: "ADNW_CLICK",
                                        error_message: String(e - c),
                                        error_stack_trace: a.adElementType,
                                        video_duration: a.videoDuration,
                                        video_playback_time: a.videoPlaybackTime
                                    }
                                }
                            };
                            c = {
                                type: d,
                                time: a.clickParams.clktm,
                                delay: a.clickParams.clkdel,
                                pos: a.pos
                            };
                            a.recircUnitId != null && (c.recirc_unit_id = a.recircUnitId);
                            this.$12([{
                                type: "clk",
                                key: a.key,
                                top_domain: b("ANUtils").getTopDomain(),
                                payload: c
                            }, {
                                type: "client",
                                key: a.key,
                                top_domain: b("ANUtils").getTopDomain(),
                                payload: e.params.payload
                            }])
                        };
                        c.logPerfStats = function(a) {
                            this.$12([{
                                type: "perf",
                                key: a.key,
                                top_domain: b("ANUtils").getTopDomain(),
                                payload: a.payload
                            }])
                        };
                        c.$12 = function(a) {
                            if (!this.isPublisherSideLoggingSupported()) throw new Error("unsupported_pub_side_logging");
                            window.navigator.sendBeacon(b("nullthrows")(this.$8), ES("JSON", "stringify", !1, a))
                        };
                        c.isPublisherSideLoggingSupported = function() {
                            return window.navigator && window.navigator.sendBeacon
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("NativePromise", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = Promise;
                    e.exports = a
                }), null);
                __d("ANMoatSivt", ["NativePromise", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 1e4;
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$1 = a, this.$2 = b
                        }
                        var c = a.prototype;
                        c.getMeasurements = function() {
                            var a = this;
                            return new(b("NativePromise"))(function(b, c) {
                                var d = !1,
                                    e = window.setTimeout(function() {
                                        d = !0, c()
                                    }, g),
                                    f = a.$3();
                                f.push(function(a) {
                                    if (d) return;
                                    window.clearTimeout(e);
                                    b(a)
                                })
                            })
                        };
                        c.$3 = function() {
                            var a = this.$2.defaultView;
                            a.ADNW = a.ADNW || {};
                            if (a.ADNW.moat) return a.ADNW.moat;
                            a.ADNW.moat = [];
                            this.$4();
                            return a.ADNW.moat
                        };
                        c.$4 = function() {
                            var a = this.$2.createElement("script");
                            a.src = this.$1;
                            a.async = !0;
                            b("nullthrows")(this.$2.body).appendChild(a)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANMultiAdsSingleCard", ["ANUtils"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 10,
                        h = 6,
                        i = 16;
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$1 = a, this.$2 = a / 2, this.$3 = b
                        }
                        var c = a.prototype;
                        c.resizeAd = function() {
                            this.$4(), this.$5()
                        };
                        c.$5 = function() {
                            var a = this.$2 - 2 * h,
                                c = this.$3.getElementsByClassName("fbAdMedia")[0];
                            b("ANUtils").resizeElement(c, a, a)
                        };
                        c.$4 = function() {
                            var a = this.$2 - 2 * h - 2 * g,
                                c = a,
                                d = this.$3.getElementsByClassName("adnwMultiAdsContent")[0],
                                e = this.$3.getElementsByClassName("fbAdBody")[0],
                                f = this.$3.getElementsByClassName("fbAdTitle")[0];
                            d.style.width = b("ANUtils").cssSize(a);
                            d = f.clientHeight;
                            a = Math.floor((c - 48 - d) / i);
                            e.style.maxHeight = b("ANUtils").cssSize(Math.max(0, a * i))
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANPageNavigationManager", ["PageVisibility.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = !1, this.$3 = a, this.$2 = []
                        }
                        var c = a.prototype;
                        c.$4 = function() {
                            __p && __p();
                            for (var a = this.$2, b = ES("Array", "isArray", !1, a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var d;
                                if (b) {
                                    if (c >= a.length) break;
                                    d = a[c++]
                                } else {
                                    c = a.next();
                                    if (c.done) break;
                                    d = c.value
                                }
                                d = d;
                                d()
                            }
                            this.$2 = []
                        };
                        c.$5 = function() {
                            var a = this,
                                c = new(b("PageVisibility.adquality"))(this.$3);
                            c.addVisibilityListener(function() {
                                var b = c.getVisibilityState();
                                (b === "hidden" || b === "unloaded") && a.$4()
                            });
                            this.$1 = !0
                        };
                        c.onNavigation = function(a) {
                            this.$1 || this.$5(), this.$2.push(a)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANRewardedVideoPlayer", ["cx", "ANUtils", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div,
                        i = 31,
                        j = 4,
                        k = 4 * 1e3;
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e) {
                            __p && __p();
                            var f = this;
                            this.$1 = a;
                            this.$2 = c;
                            this.$3 = d;
                            this.$4 = !1;
                            this.$5 = !1;
                            e && (this.$11 = h("_74hs"));
                            this.$9 = b("nullthrows")(c.querySelector(".adnwRVFooterInfo"));
                            this.$6 = b("nullthrows")(c.querySelector(".skipProgressWheel"));
                            this.$7 = b("nullthrows")(this.$6.querySelector(".skipProgressWheelLeft .skipProgressWheelCircle"));
                            this.$8 = b("nullthrows")(this.$6.querySelector(".skipProgressWheelRight .skipProgressWheelCircle"));
                            this.$10 = b("nullthrows")(c.querySelector(".skipButton"));
                            this.$12 = b("ANUtils").once(function() {
                                return f.$1.adClosed()
                            })
                        }
                        var c = a.prototype;
                        c.makeRewarded = function() {
                            __p && __p();
                            var a = this,
                                b = this.$3.getVideoElement();
                            b.loop = !1;
                            this.$3.setMuted(!1);
                            this.$13();
                            this.$3.getElement().classList.add("_73wr");
                            if (this.$11) {
                                var c = this.$11;
                                this.$2.appendChild(c);
                                c.addEventListener("click", function() {
                                    a.$3.pause(!0)
                                })
                            }
                            var d = null;
                            b.addEventListener("suspend", function() {
                                d !== null && window.clearTimeout(d)
                            });
                            b.addEventListener("stalled", function() {
                                d = window.setTimeout(a.$12, k)
                            });
                            b.addEventListener("error", this.$12)
                        };
                        c.getXoutButton = function() {
                            return this.$11
                        };
                        c.$14 = function() {
                            var a = b("nullthrows")(this.$2.querySelector(".closeArea"));
                            a.addEventListener("click", this.$12);
                            this.$3.pause();
                            this.$15();
                            this.$2.classList.add("endCardShowing");
                            this.$3.getElement().classList.add("_7462");
                            this.$1.rewardCompleted()
                        };
                        c.$16 = function() {
                            if (this.$4) return;
                            this.$4 = !0;
                            this.$9.classList.add("fadeIn")
                        };
                        c.$15 = function() {
                            if (!this.$4) return;
                            this.$4 = !1;
                            this.$9.classList.remove("fadeIn")
                        };
                        c.$17 = function() {
                            var a = this.$3.getVideoElement();
                            if (a.duration <= i || this.$5) return;
                            if (a.currentTime >= i) this.$18();
                            else {
                                this.$6.classList.add("skipProgressWheelShow");
                                a = Math.ceil(360 * a.currentTime / i);
                                a <= 180 ? (this.$7.style.transform = "rotate(0deg) translate(100%, 0)", this.$8.style.transform = "rotate(" + a + "deg) translate(-100%, 0)") : (this.$8.style.transform = "rotate(180deg) translate(-100%, 0)", this.$7.style.transform = "rotate(" + (a - 180) + "deg) translate(100%, 0)")
                            }
                        };
                        c.$18 = function() {
                            if (this.$5) return;
                            this.$5 = !0;
                            this.$6.classList.remove("skipProgressWheelShow");
                            var a = b("nullthrows")(this.$2.querySelector(".skipButton"));
                            a.classList.add("skipButtonShow");
                            a.addEventListener("click", b("ANUtils").once(ES(this.$14, "bind", !0, this)))
                        };
                        c.$19 = function() {
                            var a = this.$3.getVideoElement();
                            a = a.duration - a.currentTime;
                            return a < j
                        };
                        c.$13 = function() {
                            __p && __p();
                            var a = this,
                                c = b("nullthrows")(this.$2.querySelector(".adnwRVProgressBar")),
                                d = this.$3.getVideoElement(),
                                e = this.$2.ownerDocument.defaultView,
                                f = function b() {
                                    var f = 100 * (d.currentTime / d.duration);
                                    f = Math.min(f, 100);
                                    a.$17();
                                    c.style.width = f + "%";
                                    (d.paused || a.$19()) && a.$16();
                                    f >= 100 ? a.$14() : d.paused || e.requestAnimationFrame(b);
                                    d.currentTime >= i && a.$18()
                                };
                            d.addEventListener("play", function() {
                                a.$19() || a.$15(), e.requestAnimationFrame(f)
                            });
                            !d.paused ? e.requestAnimationFrame(f) : this.$16()
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANStitchedImage", ["cx", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$1 = !1, this.$2 = a, this.$3 = b
                        }
                        var c = a.prototype;
                        c.render = function(a, b) {
                            var c = this.$4(),
                                d = c[0],
                                e = c[1];
                            c = c[2];
                            this.$2.addRequiredEvent();
                            this.$5(e, a);
                            this.$5(c, b);
                            return d
                        };
                        c.$4 = function() {
                            var a = h("_7pnh"),
                                b = h("_7pni"),
                                c = h("_7pni");
                            a = h("_7pnj", [b, a, c]);
                            return [a, b, c]
                        };
                        c.$5 = function(a, c) {
                            var d = this,
                                e = document.createElement("img");
                            e.addEventListener("load", function() {
                                a.style.backgroundImage = "url(" + b("nullthrows")(c.adImage) + ")", d.$1 || (d.$1 = !0, d.$2.requiredEventFired()), e.naturalWidth === 1 && e.naturalHeight === 1 && d.$3.eventWithParams({
                                    event_name: "ADNW_ADERROR",
                                    error_message: "Image loading error (1x1)",
                                    error_stack_trace: e.src
                                })
                            });
                            e.addEventListener("error", function() {
                                d.$3.eventWithParams({
                                    event_name: "ADNW_ADERROR",
                                    error_message: "Image loading error (uncaught)",
                                    error_stack_trace: e.src
                                })
                            });
                            e.src = b("nullthrows")(c.adImage);
                            return a
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANTextOnlyLoader", ["ANStyleChangeTracker", "ANUtils"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e) {
                            this.$1 = new(b("ANStyleChangeTracker"))(), this.$2 = a, this.$3 = c, this.$4 = d, this.$5 = e, this.$6 = this.getAdHeight(), this.$7 = b("ANUtils").getElementWidth(this.$8())
                        }
                        var c = a.prototype;
                        c.$8 = function() {
                            return this.$2 ? this.$2 : this.$3
                        };
                        c.getAdHeight = function() {
                            var a = this.$8();
                            return b("ANUtils").getElementHeight(a)
                        };
                        c.resize = function() {
                            var a = Math.max(210, this.$6);
                            this.$2 && this.$1.resize(this.$2, this.$7, a);
                            this.$1.resize(this.$4, this.$7, a);
                            this.$1.resize(this.$5, this.$7, a);
                            var b = this.$9(this.$4);
                            b && this.$1.resize(b, this.$7, a);
                            this.$1.applyChanges()
                        };
                        c.restoreOriginalStyles = function() {
                            this.$1.restoreOriginalStyles()
                        };
                        c.$9 = function(a) {
                            a = a.parentElement && a.parentElement.parentElement && a.parentElement.parentElement.parentElement;
                            return a && b("ANUtils").isDfpContainer(a) ? a : null
                        };
                        c.getBackgroundColor = function() {
                            return b("ANUtils").getStyle(this.$5, "background-color")
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("sdk.fbt", [], (function(a, b, c, d, e, f) {
                    a = {
                        _: function(a) {
                            return typeof a === "string" ? a : a[0]
                        }
                    };
                    e.exports = a
                }), null);
                __d("ANWebTwoStepClickDialog", ["csx", "cx", "ANUtils", "VPAIDDomUtils", "nullthrows", "sdk.fbt"], (function(a, b, c, d, e, f, g, h) {
                    "use strict";
                    __p && __p();
                    var i = b("ANUtils").maybeNode,
                        j = b("VPAIDDomUtils").div,
                        k = b("VPAIDDomUtils").span,
                        l = b("sdk.fbt")._("Continue to"),
                        m = b("sdk.fbt")._("Continue");
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$1 = a, this.$2 = b, this.$4 = [], this.$5 = []
                        }
                        a.openDialog = function(b, c, d) {
                            c = new a(c, d);
                            c.$6();
                            c.$7(b);
                            return c
                        };
                        var c = a.prototype;
                        c.onConfirm = function(a) {
                            this.$4.push(a);
                            return this
                        };
                        c.onDismiss = function(a) {
                            this.$5.push(a);
                            return this
                        };
                        c.$6 = function() {
                            __p && __p();
                            var a = this,
                                c = this.$3;
                            c || (c = j("_74vg", [j("_727i", [k("_727j", ""), k("_727k", l), k("_727l", ""), k("_727m", this.$1), k("_727n", m)])]), b("nullthrows")(c.querySelector("._727l")).style.backgroundImage = "url(" + this.$2 + ")", c.addEventListener("click", function(d) {
                                __p && __p();
                                var e = b("nullthrows")(i(d.target)),
                                    f = b("nullthrows")(b("nullthrows")(c).querySelector("._727i")),
                                    g = b("nullthrows")(b("nullthrows")(c).querySelector("._727j"));
                                if (e === g) a.$8(d);
                                else if (e === f || ES(f, "contains", !0, e))
                                    for (var g = a.$4, f = ES("Array", "isArray", !1, g), e = 0, g = f ? g : g[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                        var h;
                                        if (f) {
                                            if (e >= g.length) break;
                                            h = g[e++]
                                        } else {
                                            e = g.next();
                                            if (e.done) break;
                                            h = e.value
                                        }
                                        h = h;
                                        h(d)
                                    } else a.$8(d)
                            }));
                            this.$3 = c
                        };
                        c.$8 = function(a) {
                            __p && __p();
                            var c = this,
                                d = b("nullthrows")(this.$3);
                            d.classList.remove("_727o");
                            b("nullthrows")(this.$3).style.opacity = "0";
                            window.setTimeout(function() {
                                __p && __p();
                                d.parentNode && d.parentNode.removeChild(d);
                                for (var b = c.$5, e = ES("Array", "isArray", !1, b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var g;
                                    if (e) {
                                        if (f >= b.length) break;
                                        g = b[f++]
                                    } else {
                                        f = b.next();
                                        if (f.done) break;
                                        g = f.value
                                    }
                                    g = g;
                                    g(a)
                                }
                            }, 300)
                        };
                        c.$7 = function(a) {
                            var c = this;
                            a.appendChild(b("nullthrows")(this.$3));
                            window.setTimeout(function() {
                                b("nullthrows")(c.$3).classList.add("_727o")
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AudienceNetworkVideoLoggingUtils", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 1e3,
                        h = 100;

                    function i(a) {
                        return Math.floor(a * g)
                    }

                    function a(a) {
                        var b;
                        return {
                            vla: a.avgVolume,
                            vlm: a.minVolume,
                            vlmax: a.maxVolume,
                            vwa: (b = a.avgViewableRatio) != null ? b : 0,
                            vwm: (b = a.minViewableRatio) != null ? b : 0,
                            vwmax: (b = a.maxViewableRatio) != null ? b : 0,
                            vtime_ms: i(a.viewableSeconds),
                            atime_ms: i(a.audibleSeconds),
                            mcat_ms: i(a.maxContinuousAudibleSeconds),
                            mcpt_ms: i(a.maxContinuousPlaySeconds),
                            mcvt_ms: i(a.maxContinuousViewableSeconds),
                            spt_ms: i(a.stickyAdSeconds),
                            maa: a.maxAdArea.maxAdAreaNotFullscreen,
                            ortn: a.maxAdArea.screenOrientation,
                            vw_d: a.viewableDetection,
                            vw_rsn: a.viewableReason,
                            pbra: a.avgPlaybackRate === null ? void 0 : a.avgPlaybackRate
                        }
                    }

                    function b() {
                        __p && __p();
                        var a = h,
                            b = [],
                            c = window;
                        while (a > 0) {
                            try {
                                b.push(c.document.hasFocus() ? 1 : 2)
                            } catch (a) {
                                b.push(0)
                            }
                            if (c === window.top) break;
                            c = c.parent;
                            a--
                        }
                        return b
                    }

                    function c(a) {
                        return /iPhone|iPod/.test(a)
                    }
                    e.exports = {
                        getStatsFields: a,
                        getFocus: b,
                        isIPhoneOrIPod: c,
                        MAX_LAYERS: h
                    }
                }), null);
                __d("BrowserDetectionFeature", [], (function(a, b, c, d, e, f) {
                    e.exports = ES("Object", "freeze", !1, {
                        UA: "ua",
                        VERSION: "version",
                        PLATFORM: "platform",
                        IS_IFRAME: "isIframe",
                        REFERER: "ref",
                        URL: "url",
                        SCREEN_WIDTH: "width",
                        SCREEN_HEIGHT: "height",
                        AVAILABLE_WIDTH: "awidth",
                        AVAILABLE_HEIGHT: "aheight",
                        SCREEN_LEFT: "left",
                        SCREEN_TOP: "top",
                        CSS_ALL: "css_all",
                        CSS_FEATURE_QUERIES: "cfq",
                        CSS_VAR: "cssvar",
                        SCOPED_CSS: "scope",
                        STICKY: "sticky",
                        HAS_SCROLL: "scroll",
                        PLUGIN_COUNT: "plugins",
                        PHANTOM_MODE: "pmode",
                        COLOR_DEPTH: "colorDepth",
                        WEBSQL: "websql",
                        DRAG_AND_DROP: "dnd",
                        CUSTOM_ELEMENT: "ce",
                        HAS_IMPORTS: "imp",
                        TIME_ZONE: "tz",
                        OGG: "ogg",
                        DIALOG: "dialog",
                        VIDEO: "video",
                        AUDIO: "audio",
                        AUDIO_CONTEXT: "ac",
                        ANCESTOR: "ancestor",
                        CHROME: "chrome",
                        CHROME_WEB_STORE: "chromewebstore",
                        RANDOM: "random",
                        IE: "ie",
                        USERDATA: "userdata",
                        SRCSET: "srcset",
                        HAS_CANVAS: "canvas",
                        EMOJI: "emoji",
                        HAS_PIC_ELEMENT: "pic",
                        WC: "wc",
                        CHROME_EXTENSION: "ext",
                        FOCUS: "focus",
                        IS_POPUP: "pop",
                        HREF: "href",
                        DEVORIENT: "devorient",
                        DEVMOTION: "devmotion",
                        CANVAS_HASH: "canvasfp",
                        TIME: "time",
                        FEATURE_TIMES: "feature_times",
                        AVAIL_DIMENSIONS: "avail_dimensions",
                        COLOR_AND_PIXEL_DEPTH: "colorPixelDepth",
                        DIMENSIONS: "dimensions",
                        TOP_WINDOW_DRIVER: "topWindowDriver",
                        DOM_AUTOMATION: "domAutomation",
                        WEBDRIVER_CACHE: "webdriverCache",
                        EXTERNAL_URL: "externalUrl",
                        OPERA_A: "operaA",
                        OPERA_B: "operaB",
                        WEB_DRIVER: "webDriver",
                        ENGINE: "engine",
                        IE_EXTERNAL: "ieExternal",
                        FONT_DIFF: "fontDiff",
                        FONTS: "fonts"
                    })
                }), null);
                __d("FastBrowserDetectionFeature", [], (function(a, b, c, d, e, f) {
                    e.exports = ES("Object", "freeze", !1, {
                        UA: "ua",
                        CSS_ALL: "css_all",
                        CSS_FEATURE_QUERIES: "cfq",
                        CSS_VAR: "cssvar",
                        SCOPED_CSS: "scope",
                        STICKY: "sticky",
                        HAS_SCROLL: "scroll",
                        PLUGIN_COUNT: "plugins",
                        PHANTOM_MODE: "pmode",
                        COLOR_DEPTH: "colorDepth",
                        WEBSQL: "websql",
                        DRAG_AND_DROP: "dnd",
                        CUSTOM_ELEMENT: "ce",
                        HAS_IMPORTS: "imp",
                        TIME_ZONE: "tz",
                        OGG: "ogg",
                        DIALOG: "dialog",
                        VIDEO: "video",
                        AUDIO: "audio",
                        CHROME: "chrome",
                        CHROME_WEB_STORE: "chromewebstore",
                        RANDOM: "random",
                        IE: "ie",
                        USERDATA: "userdata",
                        SRCSET: "srcset",
                        HAS_CANVAS: "canvas",
                        HAS_PIC_ELEMENT: "pic",
                        WC: "wc",
                        CHROME_EXTENSION: "ext",
                        DEVORIENT: "devorient",
                        DEVMOTION: "devmotion",
                        TIME: "time"
                    })
                }), null);
                __d("PluginBrowserFeatures", ["BrowserDetectionFeature", "FastBrowserDetectionFeature"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        getBrowserFeaturesMap: function(a) {
                            __p && __p();
                            var c = h(),
                                d = {},
                                e = {},
                                f = a ? b("FastBrowserDetectionFeature") : b("BrowserDetectionFeature");
                            ES(ES("Object", "keys", !1, f), "forEach", !0, function(a) {
                                a = f[a];
                                var b = h();
                                try {
                                    a in i ? d[a] = i[a]() : d[a] = "Not implemented"
                                } catch (b) {
                                    d[a] = b.message
                                }
                                e[a] = h() - b
                            });
                            d[f.TIME] = h() - c;
                            a || (d.feature_times = e);
                            return d
                        },
                        getAllBrowserFeatures: function() {
                            return ES("JSON", "stringify", !1, this.getBrowserFeaturesMap(!1))
                        },
                        getFastBrowserFeatures: function() {
                            return ES("JSON", "stringify", !1, this.getBrowserFeaturesMap(!0))
                        }
                    };

                    function g(a) {
                        var b = 0,
                            c = a.length;
                        if (c === 0) return b;
                        for (var d = 0; d < c; d++) {
                            var e = a.charCodeAt(d);
                            b = b * 32 - b + e;
                            b |= 0
                        }
                        return b
                    }

                    function h() {
                        if (!!window.performance && !!window.performance.now) return window.performance.now();
                        else if (ES("Date", "now", !1)) return ES("Date", "now", !1);
                        else return new Date()
                    }
                    var i = (c = {}, c.css_all = function() {
                        return "all" in document.documentElement.style
                    }, c.cfq = function() {
                        var a = "CSS" in window && "supports" in window.CSS;
                        return a || "supportsCSS" in window
                    }, c.dnd = function() {
                        var a = document.createElement("div");
                        return "draggable" in a || "ondragstart" in a && "ondrop" in a
                    }, c.ogg = function() {
                        var a = document.createElement("video"),
                            b = !1;
                        try {
                            if (b = !!a.canPlayType) {
                                a = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
                                b = a != ""
                            }
                        } catch (a) {}
                        return b
                    }, c.cssvar = function() {
                        return window.CSS != null && window.CSS.supports != null && window.CSS.supports("--fake-var", 0)
                    }, c.scope = function() {
                        var a = document.createElement("style");
                        a.setAttribute("scoped", "true");
                        return a.scoped === !0
                    }, c.sticky = function() {
                        var a = "position:",
                            b = "sticky",
                            c = ["-webkit-", "-moz-", "-o-", "-ms-"],
                            d = document.createElement("a");
                        d = d.style;
                        d.cssText = a + c.join(b + ";" + a).slice(0, -a.length);
                        return ES(d.position, "indexOf", !0, b) !== -1
                    }, c.tz = function() {
                        var a = new Date();
                        return a.getTimezoneOffset()
                    }, c.dialog = function() {
                        var a = document.createElement("dialog");
                        return !!a.show
                    }, c.video = function() {
                        var a = document.createElement("video");
                        return !!a.canPlayType
                    }, c.audio = function() {
                        var a = document.createElement("audio");
                        return !!a.canPlayType
                    }, c.ac = function() {
                        try {
                            var a = new window.AudioContext();
                            a = a.createOscillator();
                            a.frequency.value = 10;
                            return a.frequency.value == 10
                        } catch (a) {
                            return !1
                        }
                    }, c.ancestor = function() {
                        var a = "";
                        if (!!window.location && !!location.ancestorOrigins && location.ancestorOrigins.length > 0) {
                            a = location.ancestorOrigins.item(0);
                            for (var b = 1; b < location.ancestorOrigins.length; ++b) a = a + "," + location.ancestorOrigins.item(b)
                        }
                        return a
                    }, c.random = function() {
                        return !!window.crypto && !!window.crypto.getRandomValues || !!window.msCrypto && !!window.msCrypto.getRandomValues
                    }, c.userdata = function() {
                        var a = document.createElement("div");
                        return !a.addBehavior
                    }, c.ext = function() {
                        return !!window.chrome && !!window.chrome.runtime && !!window.chrome.runtime.id
                    }, c.pop = function() {
                        return !!window.opener && window.opener !== window
                    }, c.href = function() {
                        if (!!window.opener && !!window.opener.location && !!window.opener.location.href) return window.opener.location.href;
                        return !!window.location && !!window.location.href ? window.location.href : ""
                    }, c.canvas = function() {
                        var a = document.createElement("canvas");
                        return !!(a.getContext && a.getContext("2d"))
                    }, c.emoji = function() {
                        __p && __p();
                        if (!i.canvas()) return !1;
                        var a = window.devicePixelRatio || 1;
                        a = 12 * a;
                        var b = document.createElement("canvas");
                        b = b.getContext("2d");
                        b.fillStyle = "#f00";
                        b.textBaseline = "top";
                        b.font = "32px Arial";
                        b.fillText("\ud83d\udc28", 0, 0);
                        return b.getImageData(a, a, 1, 1).data[0] !== 0
                    }, c.canvasfp = function() {
                        __p && __p();
                        if (!i.canvas()) return 0;
                        var a = document.createElement("canvas"),
                            b = a.getContext("2d"),
                            c = "text";
                        b.textBaseline = "top";
                        b.font = "14px Arial";
                        b.textBaseline = "alphabetic";
                        b.fillStyle = "#f60";
                        b.fillRect(125, 1, 62, 20);
                        b.fillStyle = "#069";
                        b.fillText(c, 2, 15);
                        b.fillStyle = "rgba(102, 204, 0, 0.7)";
                        b.fillText(c, 4, 17);
                        return g(a.toDataURL())
                    }, c.ua = function() {
                        return navigator.userAgent
                    }, c.version = function() {
                        return navigator.appVersion
                    }, c.platform = function() {
                        return navigator.platform
                    }, c.isIframe = function() {
                        return parent !== window
                    }, c.ref = function() {
                        return document.referrer
                    }, c.url = function() {
                        return document.URL
                    }, c.height = function() {
                        return screen.height
                    }, c.width = function() {
                        return screen.width
                    }, c.aheight = function() {
                        return screen.height
                    }, c.awidth = function() {
                        return screen.width
                    }, c.left = function() {
                        return window.screenLeft ? window.screenLeft : window.screenX
                    }, c.top = function() {
                        return window.screenTop ? window.screenTop : window.screenY
                    }, c.scroll = function() {
                        return "scrollBehavior" in document.documentElement.style
                    }, c.pic = function() {
                        return "HTMLPictureElement" in window
                    }, c.plugins = function() {
                        return navigator.plugins.length
                    }, c.pmode = function() {
                        try {
                            null[0]()
                        } catch (b) {
                            var a = b.stack;
                            if (a.search("phantomjs") != -1) return !0
                        }
                        return !!window.callPhantom || !!window._phantom
                    }, c.colorDepth = function() {
                        return screen.colorDepth
                    }, c.websql = function() {
                        return !!window.openDatabase
                    }, c.ce = function() {
                        return "registerElement" in document
                    }, c.imp = function() {
                        return "import" in document.createElement("link")
                    }, c.chrome = function() {
                        return !!window.chrome
                    }, c.chromewebstore = function() {
                        return !!window.chrome && !!window.chrome.webstore
                    }, c.ie = function() {
                        return !window.ActiveXObject
                    }, c.wc = function() {
                        return "willChange" in document.documentElement.style
                    }, c.devorient = function() {
                        return "DeviceOrientationEvent" in window
                    }, c.devmotion = function() {
                        return "DeviceMotionEvent" in window
                    }, c.srcset = function() {
                        return "srcset" in document.createElement("img")
                    }, c.avail_dimensions = function() {
                        return screen.availHeight <= 1 || screen.availWidth <= 1
                    }, c.colorPixelDepth = function() {
                        return screen.colorDepth <= 8 || screen.pixelDepth <= 8 || window.devicePixelRatio <= 0
                    }, c.dimensions = function() {
                        return screen.height <= 1 || screen.width <= 1
                    }, c.topWindowDriver = function() {
                        return top == null || top.window == null || document.location.ancestorOrigins != null && document.location.ancestorOrigins.length > 0 && document.location.ancestorOrigins[0] !== document.location.protocol + "//" + document.location.host || top.window.name == null ? void 0 : ES(top.window.name, "indexOf", !0, "driver") > -1
                    }, c.domAutomation = function() {
                        return document.documentElement.hasAttribute("webdriver") || window.domAutomation != null || window.domAutomationController != null || window._WEBDRIVER_ELEM_CACHE != null
                    }, c.webdriverCache = function() {
                        return window._WEBDRIVER_ELEM_CACHE != null
                    }, c.externalUrl = function() {
                        return window.isExternalUrlSafeForNavigation != null
                    }, c.operaA = function() {
                        return window.opera != null && window.opera._browserjsran != null && window.opera.browserjsran === 0
                    }, c.operaB = function() {
                        return window.opera != null && window.opera._browserjsran != null && window.opera.browserjsran === !1
                    }, c.webDriver = function() {
                        return window.webdriver != null || document.webdriver != null || document.documentElement.hasAttribute("webdriver")
                    }, c.engine = function() {
                        __p && __p();
                        var a = {},
                            b = [],
                            c = "unknown",
                            d = {
                                trident: 0,
                                gecko: 0,
                                presto: 0,
                                webkit: 0,
                                unknown: -1
                            },
                            e = document.createElement("fake");
                        for (var f in e.style) {
                            e = (/^([A-Za-z][a-z]*)[A-Z]/.exec(f) || [])[1];
                            e != null && (e = e.toLowerCase());
                            e in a ? a[e]++ : a[e] = 1
                        }
                        for (var g in a) b.push([g, a[g]]);
                        b.sort(function(a, b) {
                            return b[1] - a[1]
                        }).slice(0, 10);
                        for (var e = 0, a = b.length; e < a; e++) {
                            var h = b[e][0].toLowerCase();
                            h === "moz" ? d.gecko += 5 : h === "ms" ? d.trident += 5 : h === "get" ? d.webkit++ : h === "webkit" ? d.webkit += 5 : (h === "o" || h === "xv") && (d.presto += 2)
                        }
                        "onhelp" in window && d.trident++;
                        "maxConnectionsPerServer" in window && d.trident++;
                        try {
                            window.ActiveXObject.toString != null && (d.trident += 5)
                        } catch (a) {}
                        Function.prototype.toSource !== void 0 && (d.gecko += 5);
                        for (var i in d) d[i] > d[c] && (c = i);
                        return c
                    }, c.ieExternal = function() {
                        var a = ["AddChannel", "AddDesktopComponent", "AddFavorite", "AddSearchProvider", "AddService", "AddToFavoritesBar", "AutoCompleteSaveForm", "AutoScan", "bubbleEvent", "ContentDiscoveryReset", "ImportExportFavorites", "InPrivateFilteringEnabled", "IsSearchProviderInstalled", "IsServiceInstalled", "IsSubscribed", "msActiveXFilteringEnabled", "msAddSiteMode", "msAddTrackingProtectionList", "msClearTile", "msEnableTileNotificationQueue", "msEnableTileNotificationQueueForSquare150x150", "msEnableTileNotificationQueueForSquare310x310", "msEnableTileNotificationQueueForWide310x150", "msIsSiteMode", "msIsSiteModeFirstRun", "msPinnedSiteState", "msProvisionNetworks", "msRemoveScheduledTileNotification", "msReportSafeUrl", "msScheduledTileNotification", "msSiteModeActivate", "msSiteModeAddButtonStyle", "msSiteModeAddJumpListItem", "msSiteModeAddThumbBarButton", "msSiteModeClearBadge", "msSiteModeClearIconOverlay", "msSiteModeClearJumpList", "msSiteModeCreateJumpList", "msSiteModeRefreshBadge", "msSiteModeSetIconOverlay", "msSiteModeShowButtonStyle", "msSiteModeShowJumpList", "msSiteModeShowThumbBar", "msSiteModeUpdateThumbBarButton", "msStartPeriodicBadgeUpdate", "msStartPeriodicTileUpdate", "msStartPeriodicTileUpdateBatch", "msStopPeriodicBadgeUpdate", "msStopPeriodicTileUpdate", "msTrackingProtectionEnabled", "NavigateAndFind", "raiseEvent", "setContextMenu", "ShowBrowserUI", "menuArguments", "onvisibilitychange", "scrollbar", "selectableContent", "version", "visibility", "mssitepinned", "AddUrlAuthentication", "CloseRegPopup", "FeatureEnabled", "GetJsonWebData", "GetRegValue", "Log", "LogShellErrorsOnly", "OpenPopup", "ReadFile", "RunGutsScript", "SaveRegInfo", "SetAppMaximizeTimeToRestart", "SetAppMinimizeTimeToRestart", "SetAutoStart", "SetAutoStartMinimized", "SetMaxMemory", "ShareEventFromBrowser", "ShowPopup", "ShowRadar", "WriteFile", "WriteRegValue", "summonWalrus"],
                            b = {};
                        if (window.external != null)
                            for (var c = 0; c < a.length; c++) {
                                var d = a[c];
                                b[d] = window.external[d] != null
                            }
                        return ES("JSON", "stringify", !1, b)
                    }, c.fontDiff = function() {
                        __p && __p();
                        var a = document.createElement("div"),
                            b = document.createElement("div");
                        a.style.top = "-1000px";
                        a.style.setProperty("-webkit-text-size-adjust", "auto", "important");
                        a.style.fontSize = "xx-small";
                        a.style.position = "absolute";
                        b.style.setProperty("-webkit-text-size-adjust", "auto", "important");
                        b.style.fontSize = "1%";
                        b.textContent = "l";
                        a.appendChild(b);
                        document.body.appendChild(a);
                        b = b.clientHeight;
                        document.body.removeChild(a);
                        return b
                    }, c.fonts = function() {
                        __p && __p();
                        var a = ["Ubuntu", "Utopia", "URW Gothic L", "Bitstream Charter", "FreeMono", "DejaVu Sans", "Droid Serif", "Liberation Sans", "Vrinda", "Kartika", "Sylfaen", "CordiaUPC", "Angsana New Bold Italic", "DFKai-SB", "Ebrima", "Lao UI", "Segoe UI Symbol", "Vijaya", "Roboto", "Apple Color Emoji", "Baskerville", "Marker Felt", "Apple Symbols", "Chalkboard", "Herculanum", "Skia"],
                            b = ["monospace", "sans-serif", "serif"],
                            c = "mmmmmmmmmmlli",
                            d = document.body,
                            e = document.createElement("span"),
                            f = {},
                            g = {},
                            h = {};
                        e.style.fontSize = "72px";
                        e.textContent = c;
                        for (var c = 0; c < b.length; c++) {
                            var i = b[c];
                            e.style.fontFamily = i;
                            d.appendChild(e);
                            f[i] = e.offsetWidth;
                            g[i] = e.offsetHeight;
                            d.removeChild(e)
                        }
                        for (var i = 0; i < a.length; i++) {
                            c = a[i];
                            var j = !1;
                            for (var k = 0; k < b.length; k++) {
                                var l = b[k];
                                e.style.fontFamily = c + "," + l;
                                d.appendChild(e);
                                l = e.offsetWidth != f[l] || e.offsetHeight != g[l];
                                d.removeChild(e);
                                j = j || l
                            }
                            h[c] = j
                        }
                        return ES("JSON", "stringify", !1, h)
                    }, c);
                    e.exports = a
                }), null);
                __d("ANWebVideoLogger.anweb", ["AudienceNetworkVideoLoggingUtils", "PluginBrowserFeatures"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("AudienceNetworkVideoLoggingUtils").getFocus,
                        h = b("AudienceNetworkVideoLoggingUtils").getStatsFields,
                        i = b("AudienceNetworkVideoLoggingUtils").isIPhoneOrIPod;
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d, e, f) {
                            __p && __p();
                            var g = this;
                            this.$1 = a;
                            this.$2 = b;
                            this.$3 = c;
                            this.$4 = d;
                            this.$5 = e;
                            this.$6 = f;
                            this.$7 = !1;
                            this.$2.addEventListener("play", function(a) {
                                g.$7 ? g.$8() : g.$7 = !0
                            }, !1);
                            this.$2.addEventListener("pause", function(a) {
                                g.$2.getDuration() !== g.$2.getCurrentTime() && g.$9()
                            }, !1)
                        }
                        var c = a.prototype;
                        c.setPlayer = function(a) {
                            if (this.$2 != a) throw new Error("players should be the same")
                        };
                        c.logMRCEvent = function(a, b, c, d, e, f) {
                            e = this.$10(b, c, d, a);
                            this.$11(3, e)
                        };
                        c.logImpressionEvent = function(a, b, c, d) {
                            this.$6()
                        };
                        c.logMoatSivt = function() {};
                        c.logViewableImpressionEvent = function(a, b, c) {
                            b = this.$10(b, c, null, a);
                            this.$11(10, b)
                        };
                        c.logTimeEvent = function(a, b, c, d, e, f, g) {
                            e = this.$10(a, b, c, d);
                            this.$11(2, e);
                            g()
                        };
                        c.logMuteEvent = function() {
                            if (!this.$2.isMuted()) return;
                            this.$12(6)
                        };
                        c.logUnMuteEvent = function() {
                            if (this.$2.isMuted()) return;
                            this.$12(7)
                        };
                        c.$9 = function() {
                            this.$12(4)
                        };
                        c.$8 = function() {
                            this.$12(5)
                        };
                        c.$12 = function(a) {
                            this.$11(a, {
                                time: this.$2.getCurrentTime()
                            })
                        };
                        c.$10 = function(a, b, c, d) {
                            var e = c ? c.offsetRect : null,
                                f = c ? c.offsetHeight : null,
                                j = c ? c.offsetWidth : null,
                                k = c ? c.viewportRect : null;
                            if (i(navigator.userAgent) && j === 0 && f === 0) {
                                var l = this.$2.getWidth(),
                                    m = this.$2.getHeight();
                                l !== null && m !== null && (j = l, f = m)
                            }
                            return babelHelpers["extends"]({
                                time: b,
                                ptime: a,
                                pt: e == null ? void 0 : e.y,
                                pl: e == null ? void 0 : e.x,
                                ph: typeof f === "number" ? f : void 0,
                                pw: typeof j === "number" ? j : void 0,
                                vph: k == null ? void 0 : k.height,
                                vpw: k == null ? void 0 : k.width,
                                inline: Number(this.$2.isFullscreen()),
                                autoplay: 1,
                                detected_page_domain: c && c.pageDomain !== null ? c.pageDomain : void 0,
                                detected_page_url: c && c.pageURL !== null ? c.pageURL : void 0,
                                domain_detection_method: c ? c.domainDetectionMethod : 0,
                                bf: this.$13(),
                                focus: g()
                            }, h(d))
                        };
                        c.$13 = function() {
                            try {
                                return b("PluginBrowserFeatures").getAllBrowserFeatures()
                            } catch (a) {
                                return ""
                            }
                        };
                        c.$11 = function(a, b) {
                            if (!this.$1) return;
                            this.$5({
                                name: "video",
                                params: {
                                    key: this.$3,
                                    payload: {
                                        type: a,
                                        params: b
                                    }
                                }
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANWebVideoManager", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = a
                        }
                        var b = a.prototype;
                        b.getViewabilityMeasurementElement = function() {
                            return this.$1.getVideoSlot()
                        };
                        b.getAdWidth = function() {
                            return this.$1.getWidth() || 0
                        };
                        b.getAdHeight = function() {
                            return this.$1.getHeight() || 0
                        };
                        b.getGatingConfig = function() {
                            return {
                                killswitches: [],
                                gatekeepers: [],
                                qes: [],
                                qrts: {}
                            }
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANFullscreenWebVideoPlayerControls", ["cx", "VPAIDDomUtils", "joinClasses", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a() {
                            __p && __p();
                            var a = this;
                            this.$13 = function(c) {
                                var d = b("nullthrows")(a.$10);
                                d.setMuted(!d.isMuted());
                                c.stopPropagation()
                            };
                            this.$14 = function(c) {
                                var d = b("nullthrows")(a.$10);
                                d.getVideoElement().paused ? d.play(!0) : d.pause(!0);
                                c.stopPropagation()
                            };
                            this.$18 = function() {
                                a.$19()
                            };
                            this.$15 = function(b) {
                                a.$21(), a.$22()
                            };
                            this.$17 = function() {
                                a.$2.classList.add("_7vkw"), a.$21()
                            };
                            this.$16 = function() {
                                a.$2.classList.remove("_7vkw"), a.$22()
                            };
                            var c = this.$12(),
                                d = c[0],
                                e = c[1],
                                f = c[2],
                                g = c[3],
                                h = c[4],
                                i = c[5],
                                j = c[6];
                            c = c[7];
                            this.$2 = d;
                            this.$3 = e;
                            this.$4 = f;
                            this.$5 = g;
                            this.$6 = h;
                            this.$7 = i;
                            this.$11 = null;
                            this.$8 = j;
                            this.$9 = c
                        }
                        var c = a.prototype;
                        c.$12 = function() {
                            var a = h("_7vkx"),
                                c = h("_7vky"),
                                d = h("_7vkz"),
                                e = h("_7vk-"),
                                f = h("_7vl4", [h("fbAdTitle"), h("fbAdBody")]),
                                g = h("_7vk_", [h("_7vl0", [h("fbAdIcon"), h("_7vl2", [h("fbAdSubtitle"), h("_7vl3", [document.createTextNode("Sponsored")])])]), f]),
                                i = h(b("joinClasses")("_7vl5"), [h(b("joinClasses")("fbAdCallToAction", "fbAdLink"))]),
                                j = h("_7vl6", [h("_7vl7"), g, h("_7vl8", [i, h("_7vln", [c, h("_7vlo", [a]), d, e])])]);
                            e.addEventListener("click", this.$13);
                            c.addEventListener("click", this.$14);
                            return [j, a, c, d, e, g, f, i]
                        };
                        c.attach = function(a) {
                            __p && __p();
                            this.$10 != null && (this.detach(), this.$10 = null);
                            this.$10 = a;
                            a.getElement().appendChild(this.$2);
                            this.$2.addEventListener("click", this.$15);
                            a = a.getVideoElement();
                            a.addEventListener("click", this.$15);
                            a.addEventListener("play", this.$16);
                            a.addEventListener("pause", this.$17);
                            a.addEventListener("timeupdate", this.$18);
                            this.$19()
                        };
                        c.detach = function() {
                            this.$2.parentNode && (this.$2.parentNode.removeChild(this.$2), this.$2.removeEventListener("click", this.$15));
                            var a = this.$10;
                            if (a) {
                                a = a.getVideoElement();
                                a.removeEventListener("click", this.$15);
                                a.removeEventListener("play", this.$16);
                                a.removeEventListener("pause", this.$17);
                                a.removeEventListener("timeupdate", this.$18)
                            }
                        };
                        c.$20 = function() {
                            this.$11 != null && (window.clearTimeout(this.$11), this.$11 = null)
                        };
                        c.$21 = function() {
                            this.$2.classList.remove("_7vkw"), this.$20()
                        };
                        c.$22 = function() {
                            var b = this;
                            this.$20();
                            this.$11 = window.setTimeout(function() {
                                b.$2.classList.add("_7vkw")
                            }, a.$1)
                        };
                        c.$19 = function() {
                            var a = b("nullthrows")(this.$10),
                                c = a.getDuration();
                            a = a.getCurrentTime();
                            var d = "0";
                            c > 0 && (d = a / c * 100 + "%");
                            this.$3.style.width = d;
                            d = (c - a) / 1e3;
                            c = Math.floor(d / 60);
                            a = Math.floor(d % 60);
                            this.$5.textContent = "- " + c + ":" + (a < 10 ? "0" + a : a)
                        };
                        return a
                    }();
                    a.$1 = 3e3;
                    e.exports = a
                }), null);
                __d("ANWebClickThroughVideoPlayerControls", ["cx", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div,
                        i = {
                            MINIMAL: "MINIMAL",
                            NORMAL: "NORMAL",
                            PADDED: "PADDED",
                            NO_PAUSE: "NO_PAUSE"
                        };
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var c = this;
                            a === void 0 && (a = i.NORMAL);
                            this.$8 = function(a) {
                                var d = b("nullthrows")(c.$5);
                                d.setMuted(!d.isMuted());
                                a.stopPropagation()
                            };
                            this.$9 = function(a) {
                                var d = b("nullthrows")(c.$5);
                                d.getVideoElement().paused ? d.play(!0) : d.pause(!0);
                                a.stopPropagation()
                            };
                            this.$10 = function() {
                                c.$11()
                            };
                            this.$6 = a;
                            a = this.$7();
                            var d = a[0],
                                e = a[1],
                                f = a[2];
                            a = a[3];
                            this.$1 = d;
                            this.$2 = e;
                            this.$3 = f;
                            this.$4 = a
                        }
                        var c = a.prototype;
                        c.$7 = function() {
                            var a = h("_82tm"),
                                b = h("_82tn"),
                                c = h("_82to"),
                                d = h("_82tp" + (this.$6 === i.MINIMAL ? " _8biy" : "") + (this.$6 === i.PADDED ? " _8f5c" : "") + (this.$6 === i.NO_PAUSE ? " _8i36" : "") + " fbAdLink", [h("_82tq"), h("_82tr", [a, h("_82ts"), b, c])]);
                            c.addEventListener("click", this.$8);
                            a.addEventListener("click", this.$9);
                            return [d, a, b, c]
                        };
                        c.attach = function(a) {
                            this.$5 != null && (this.detach(), this.$5 = null);
                            this.$5 = a;
                            a.getElement().appendChild(this.$1);
                            a = a.getVideoElement();
                            a.addEventListener("timeupdate", this.$10);
                            this.$11()
                        };
                        c.detach = function() {
                            this.$1.parentNode && this.$1.parentNode.removeChild(this.$1);
                            var a = this.$5;
                            if (a) {
                                a = a.getVideoElement();
                                a.removeEventListener("timeupdate", this.$10)
                            }
                        };
                        c.$11 = function() {
                            var a = b("nullthrows")(this.$5),
                                c = a.getDuration();
                            a = a.getCurrentTime();
                            c = (c - a) / 1e3;
                            a = Math.floor(c / 60);
                            c = Math.floor(c % 60);
                            this.$3.textContent = "- " + a + ":" + (c < 10 ? "0" + c : c)
                        };
                        return a
                    }();
                    a.controlTypes = i;
                    e.exports = a
                }), null);
                __d("ANWebIconAndCtaPauseCard", ["cx", "VPAIDDomUtils", "joinClasses"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            var b = this;
                            this.$5 = function(a) {
                                b.$3 && b.$3.play(), a.stopPropagation()
                            };
                            this.$1 = a;
                            a = this.$4();
                            this.$2 = a
                        }
                        var c = a.prototype;
                        c.$4 = function() {
                            var a = h(b("joinClasses")("_7kb-", "fbAdLink"), [h("fbAdIcon"), h("fbAdSubtitle"), h("fbAdCallToAction")]),
                                c = h("_7kb_");
                            a = h("_7kc0", [c, h("_7kc1", [a])]);
                            c.style.backgroundImage = "url(" + this.$1 + ")";
                            return a
                        };
                        c.attach = function(a) {
                            this.$3 != null && (this.detach(), this.$3 = null), this.$2.addEventListener("click", this.$5), this.$3 = a, a.getElement().appendChild(this.$2)
                        };
                        c.detach = function() {
                            this.$2.parentNode && (this.$2.parentNode.removeChild(this.$2), this.$2.removeEventListener("click", this.$5))
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANWebMuteOnlyPlayerChrome", ["cx", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div,
                        i = {
                            LEFT: "LEFT",
                            RIGHT: "RIGHT"
                        };
                    a = function() {
                        __p && __p();

                        function a(a, c) {
                            __p && __p();
                            var d = this;
                            a === void 0 && (a = !1);
                            c === void 0 && (c = i.RIGHT);
                            this.$6 = function(a) {
                                var c = b("nullthrows")(d.$2);
                                c.setMuted(!c.isMuted());
                                a.stopPropagation()
                            };
                            this.$3 = a;
                            this.$4 = c;
                            this.$1 = this.$5()
                        }
                        var c = a.prototype;
                        c.$5 = function() {
                            var a = h((this.$4 === i.LEFT ? "_8e1m" : "") + " _1xj9");
                            a.addEventListener("click", this.$6, !1);
                            if (this.$3) {
                                var b = h("_8e1n fbAdLink", [a]);
                                return b
                            }
                            return a
                        };
                        c.attach = function(a) {
                            this.$2 != null && (this.detach(), this.$2 = null), this.$2 = a, a.getElement().appendChild(this.$1)
                        };
                        c.detach = function() {
                            this.$1.parentNode && this.$1.parentNode.removeChild(this.$1)
                        };
                        return a
                    }();
                    e.exports = {
                        ANWebMuteOnlyPlayerChrome: a,
                        ANWebVideoMuteButtonPositionTypes: i
                    }
                }), null);
                __d("ANWebPlayButtonCard", ["cx", "VPAIDDomUtils"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.$1 = this.$3(a, b)
                        }
                        var b = a.prototype;
                        b.$3 = function(a, b) {
                            return h("_3c3s" + (a ? " _7kbt" : "") + (b ? " _7kbu" : ""))
                        };
                        b.attach = function(a) {
                            this.$2 != null && (this.detach(), this.$2 = null), this.$2 = a, a.getElement().appendChild(this.$1)
                        };
                        b.detach = function() {
                            this.$1.parentNode && this.$1.parentNode.removeChild(this.$1)
                        };
                        a.pauseCard = function() {
                            return new a(!0, !1)
                        };
                        a.autoplayCard = function() {
                            return new a(!1, !0)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANWebSimpleEndCard", ["cx", "VPAIDDomUtils", "joinClasses", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var c = this;
                            this.$7 = function(a) {
                                var d = b("nullthrows")(c.$5);
                                d.play();
                                a.stopPropagation()
                            };
                            this.$1 = a;
                            a = this.$6();
                            var d = a[0],
                                e = a[1];
                            a = a[2];
                            this.$2 = d;
                            this.$3 = e;
                            this.$4 = a
                        }
                        var c = a.prototype;
                        c.$6 = function() {
                            var a = h("_7kbv"),
                                c = h(b("joinClasses")("_7kbw", "fbAdLink"), [h("fbAdIcon"), h("fbAdSubtitle"), h("fbAdCallToAction")]),
                                d = h("_7kbx"),
                                e = h("_7kby", [d, h("_7kbz", [c]), a]);
                            d.style.backgroundImage = "url(" + this.$1 + ")";
                            return [e, c, a]
                        };
                        c.attach = function(a) {
                            this.$5 != null && (this.detach(), this.$5 = null), this.$5 = a, a.getElement().appendChild(this.$2), a.getVideoElement().loop = !1, this.$4.addEventListener("click", this.$7), this.$2.addEventListener("click", this.$8)
                        };
                        c.$8 = function(a) {
                            a.stopPropagation()
                        };
                        c.detach = function() {
                            this.$2.parentNode && (this.$2.parentNode.removeChild(this.$2), this.$4.removeEventListener("click", this.$7), this.$2.removeEventListener("click", this.$8))
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANWebVerticalVideoEndCard", ["cx", "VPAIDDomUtils", "joinClasses", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div,
                        i = b("VPAIDDomUtils").span;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var c = this;
                            this.$7 = function(a) {
                                var d = b("nullthrows")(c.$5);
                                d.play();
                                a.stopPropagation()
                            };
                            this.$1 = a;
                            a = this.$6();
                            var d = a[0],
                                e = a[1];
                            a = a[2];
                            this.$2 = d;
                            this.$3 = e;
                            this.$4 = a
                        }
                        var c = a.prototype;
                        c.$6 = function() {
                            var a = h("_808u"),
                                c = h(b("joinClasses")("_808v", "fbAdLink"), [h("fbAdIcon"), h("fbAdSubtitle"), i("_808w", "Sponsored"), h("fbAdTitle"), h("fbAdBody"), h("fbAdCallToAction")]),
                                d = h("_808x");
                            d.style.backgroundImage = "url(" + this.$1 + ")";
                            d = h("_808y", [d, h("_808z", [h("_808-", [h("fbAdIcon"), h("_808_", [h("fbAdSubtitle"), h("_808w", [document.createTextNode("Sponsored")])])]), h("_8090", [h("fbAdTitle"), h("fbAdBody")])]), h("_8091", [c]), a]);
                            return [d, c, a]
                        };
                        c.attach = function(a) {
                            this.$5 != null && (this.detach(), this.$5 = null), this.$5 = a, a.getElement().appendChild(this.$2), a.getVideoElement().loop = !1, this.$4.addEventListener("click", this.$7), this.$2.addEventListener("click", this.$8)
                        };
                        c.$8 = function(a) {
                            a.stopPropagation()
                        };
                        c.detach = function() {
                            this.$2.parentNode && (this.$2.parentNode.removeChild(this.$2), this.$4.removeEventListener("click", this.$7), this.$2.removeEventListener("click", this.$8))
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANWebVerticalVideoPauseCard", ["cx", "VPAIDDomUtils", "joinClasses"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div,
                        i = b("VPAIDDomUtils").span;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            var b = this;
                            this.$5 = function(a) {
                                b.$3 && b.$3.play(), a.stopPropagation()
                            };
                            this.$1 = a;
                            a = this.$4();
                            this.$2 = a
                        }
                        var c = a.prototype;
                        c.$4 = function() {
                            var a = h(b("joinClasses")("_808f", "fbAdLink"), [h("fbAdIcon"), h("fbAdSubtitle"), i("_808q", "Sponsored"), h("fbAdTitle"), h("fbAdBody"), h("fbAdCallToAction")]),
                                c = h("_808r");
                            c.style.backgroundImage = "url(" + this.$1 + ")";
                            c = h("_808s", [c, h("_808t", [a])]);
                            return c
                        };
                        c.attach = function(a) {
                            this.$3 != null && (this.detach(), this.$3 = null), this.$2.addEventListener("click", this.$5), this.$3 = a, a.getElement().appendChild(this.$2)
                        };
                        c.detach = function() {
                            this.$2.parentNode && (this.$2.parentNode.removeChild(this.$2), this.$2.removeEventListener("click", this.$5))
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANWebVideoPlayerControls", ["cx", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a() {
                            __p && __p();
                            var a = this;
                            this.$10 = function(c) {
                                var d = b("nullthrows")(a.$7);
                                d.setMuted(!d.isMuted());
                                c.stopPropagation()
                            };
                            this.$11 = function(c) {
                                var d = b("nullthrows")(a.$7);
                                d.getVideoElement().paused ? d.play(!0) : d.pause(!0);
                                c.stopPropagation()
                            };
                            this.$15 = function() {
                                a.$16()
                            };
                            this.$12 = function(b) {
                                a.$18(), a.$19()
                            };
                            this.$14 = function() {
                                a.$18()
                            };
                            this.$13 = function() {
                                a.$19()
                            };
                            var c = this.$9(),
                                d = c[0],
                                e = c[1],
                                f = c[2],
                                g = c[3];
                            c = c[4];
                            this.$2 = d;
                            this.$3 = e;
                            this.$4 = f;
                            this.$5 = g;
                            this.$6 = c;
                            this.$8 = null
                        }
                        var c = a.prototype;
                        c.$9 = function() {
                            var a = h("_7juh"),
                                b = h("_7jue"),
                                c = h("_7jui"),
                                d = h("_7juj"),
                                e = h("_7juk", [h("_7lkm"), h("_7lkn", [b, h("_7jul", [a]), c, d])]);
                            d.addEventListener("click", this.$10);
                            b.addEventListener("click", this.$11);
                            return [e, a, b, c, d]
                        };
                        c.attach = function(a) {
                            __p && __p();
                            this.$7 != null && (this.detach(), this.$7 = null);
                            this.$7 = a;
                            a.getElement().appendChild(this.$2);
                            this.$2.addEventListener("click", this.$12);
                            a = a.getVideoElement();
                            a.addEventListener("click", this.$12);
                            a.addEventListener("play", this.$13);
                            a.addEventListener("pause", this.$14);
                            a.addEventListener("timeupdate", this.$15);
                            this.$16()
                        };
                        c.detach = function() {
                            this.$2.parentNode && (this.$2.parentNode.removeChild(this.$2), this.$2.removeEventListener("click", this.$12));
                            var a = this.$7;
                            if (a) {
                                a = a.getVideoElement();
                                a.removeEventListener("click", this.$12);
                                a.removeEventListener("play", this.$13);
                                a.removeEventListener("pause", this.$14);
                                a.removeEventListener("timeupdate", this.$15)
                            }
                        };
                        c.$17 = function() {
                            this.$8 != null && (window.clearTimeout(this.$8), this.$8 = null)
                        };
                        c.$18 = function() {
                            this.$2.classList.remove("_7jum"), this.$17()
                        };
                        c.$19 = function() {
                            var b = this;
                            this.$17();
                            this.$8 = window.setTimeout(function() {
                                b.$2.classList.add("_7jum")
                            }, a.$1)
                        };
                        c.$16 = function() {
                            var a = b("nullthrows")(this.$7),
                                c = a.getDuration();
                            a = a.getCurrentTime();
                            var d = "0";
                            c > 0 && (d = a / c * 100 + "%");
                            this.$3.style.width = d;
                            d = (c - a) / 1e3;
                            c = Math.floor(d / 60);
                            a = Math.floor(d % 60);
                            this.$5.textContent = "- " + c + ":" + (a < 10 ? "0" + a : a)
                        };
                        return a
                    }();
                    a.$1 = 3e3;
                    e.exports = a
                }), null);
                __d("ANWebVideoPlayer.anweb", ["csx", "cx", "ANFullscreenWebVideoPlayerControls", "ANUtils", "ANWebClickThroughVideoPlayerControls", "ANWebIconAndCtaPauseCard", "ANWebMuteOnlyPlayerChrome", "ANWebPlayButtonCard", "ANWebSimpleEndCard", "ANWebVerticalVideoEndCard", "ANWebVerticalVideoPauseCard", "ANWebVideoPlayerControls", "NativePromise", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g, h) {
                    "use strict";
                    __p && __p();
                    var i = b("ANUtils").isPromiseLike,
                        j = b("ANWebMuteOnlyPlayerChrome").ANWebMuteOnlyPlayerChrome,
                        k = b("ANWebMuteOnlyPlayerChrome").ANWebVideoMuteButtonPositionTypes,
                        l = b("VPAIDDomUtils").div,
                        m = b("VPAIDDomUtils").dom;

                    function n(a, c, d) {
                        d === void 0 && (d = HTMLElement);
                        a = b("nullthrows")(a.querySelector(c));
                        if (a instanceof d) return a;
                        throw new Error("Invalid element type")
                    }
                    var o = ES("Object", "freeze", !1, {
                        controls: "mute_only",
                        endCard: "none",
                        pauseCard: "play_button"
                    });

                    function p(a) {
                        __p && __p();
                        a = a || o.controls;
                        if (a === "full") return new(b("ANWebVideoPlayerControls"))();
                        if (a === "full_vertical") return new(b("ANFullscreenWebVideoPlayerControls"))();
                        if (a === "clickthrough") return new(b("ANWebClickThroughVideoPlayerControls"))();
                        if (a === "clickthrough_padded") return new(b("ANWebClickThroughVideoPlayerControls"))(b("ANWebClickThroughVideoPlayerControls").controlTypes.PADDED);
                        if (a === "clickthrough_minimal") return new(b("ANWebClickThroughVideoPlayerControls"))(b("ANWebClickThroughVideoPlayerControls").controlTypes.MINIMAL);
                        if (a === "clickthrough_mute_only") return new j(!0, k.LEFT);
                        return a === "clickthrough_no_pause" ? new(b("ANWebClickThroughVideoPlayerControls"))(b("ANWebClickThroughVideoPlayerControls").controlTypes.NO_PAUSE) : new j()
                    }

                    function q(a, c) {
                        a = a || o.pauseCard;
                        if (a === "icon_and_cta") return new(b("ANWebIconAndCtaPauseCard"))(c);
                        return a === "vertical" ? new(b("ANWebVerticalVideoPauseCard"))(c) : b("ANWebPlayButtonCard").pauseCard()
                    }

                    function r(a, c) {
                        a = a || o.endCard;
                        if (a === "v1") return new(b("ANWebSimpleEndCard"))(c);
                        return a === "vertical" ? new(b("ANWebVerticalVideoEndCard"))(c) : null
                    }
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e, f, g) {
                            __p && __p();
                            var h = this;
                            this.$6 = !1;
                            this.$7 = !1;
                            this.$17 = function() {
                                h.$13.loop || (h.$12.classList.add("_7kc2"), h.$6 = !0)
                            };
                            this.$1 = a;
                            this.$2 = c;
                            this.$3 = e;
                            this.$5 = f;
                            this.$4 = g;
                            this.$14 = !0;
                            this.$8 = p(d.controls);
                            this.$9 = q(d.pauseCard, c);
                            this.$11 = r(d.endCard, c);
                            this.$10 = b("ANWebPlayButtonCard").autoplayCard();
                            a = this.$15();
                            e = a[0];
                            f = a[1];
                            this.$12 = e;
                            this.$13 = f;
                            this.$16();
                            this.$9.attach(this);
                            this.$8.attach(this);
                            this.$10.attach(this);
                            this.$11 && this.$11.attach(this)
                        }
                        var c = a.prototype;
                        c.$15 = function() {
                            __p && __p();
                            var a = this,
                                b = l("_6pfr");
                            b.style.backgroundImage = "url(" + this.$2 + ")";
                            if (this.$5) {
                                var c = new Image();
                                c.addEventListener("load", function() {
                                    a.$5 && a.$5()
                                });
                                c.src = this.$2
                            }
                            c = l("_1xj7 _7jun _7kc3" + (this.$3 ? "" : " _8i34"), [b, m("video", {
                                className: "_1xj8",
                                muted: !0,
                                loop: !0,
                                controls: !1,
                                src: this.$1
                            }, [])]);
                            b = document.defaultView.HTMLVideoElement;
                            b = n(c, "._1xj8", b);
                            b.poster = this.$2;
                            b.setAttribute("webkit-playsinline", "true");
                            b.setAttribute("playsinline", "true");
                            return [c, b]
                        };
                        c.$16 = function() {
                            var a = this;
                            this.$12.addEventListener("click", function(b) {
                                a.$13.paused ? a.play(!0) : a.pause(!0), a.$4 && a.$4(), b.stopPropagation()
                            });
                            this.$13.addEventListener("ended", this.$17);
                            var b = function(b) {
                                return a.pause(!0)
                            };
                            this.$13.addEventListener("webkitendfullscreen", b);
                            this.$13.addEventListener("fullscreenchange", b);
                            this.$13.addEventListener("webkitfullscreenchange", b)
                        };
                        c.getElement = function() {
                            return this.$12
                        };
                        c.setMuted = function(a) {
                            this.$14 = a, this.$13.muted = a, this.$12.classList.toggle("_7jun", this.$14)
                        };
                        c.isMuted = function() {
                            return this.$14
                        };
                        c.play = function(a) {
                            __p && __p();
                            var c = this;
                            this.$7 = !0;
                            this.$6 = this.$6 && !a;
                            a = this.$13.play();
                            if (a instanceof Promise || i(a)) return a.then(function() {
                                c.$12.classList.remove("_7juo"), c.$12.classList.remove("_7kc2"), c.$12.classList.remove("_7kc3")
                            })["catch"](function(a) {
                                c.$12.classList.add("_7juo");
                                throw a
                            });
                            else {
                                this.$12.classList.remove("_7juo");
                                return b("NativePromise").resolve()
                            }
                        };
                        c.pause = function(a) {
                            this.$6 = this.$6 || !!a, this.$13.pause(), this.$12.classList.add("_7juo")
                        };
                        c.wasManuallyPaused = function() {
                            return this.$6
                        };
                        c.hasPlayed = function() {
                            return this.$7
                        };
                        c.getVideoElement = function() {
                            return this.$13
                        };
                        c.getDuration = function() {
                            return this.$13 == null ? 0 : Math.round(this.$13.duration * 1e3) || 0
                        };
                        c.getCurrentTime = function() {
                            return this.$13 == null ? 0 : Math.round(this.$13.currentTime * 1e3)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANXOutConfirmationStep", ["cx", "VPAIDDomUtils"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d, e, f) {
                            this.$2 = a, this.$3 = b, this.$1 = c, this.$4 = d, this.$5 = e, this.$6 = f
                        }
                        var b = a.prototype;
                        b.$7 = function() {
                            __p && __p();
                            var a = this,
                                b = h("_6qhu" + (this.$4 === "hide" ? " _6qhv" : "") + (this.$4 === "report" ? " _6qhw" : "")),
                                c = h("_6qhx");
                            c.innerText = this.$4 === "hide" ? this.$2.finished_hide_ad : this.$2.finished_report_ad;
                            var d = h("_6qhy");
                            d.innerText = this.$2.finished_description;
                            var e = h("_6qh7 _6qh8", [h("_6qhz")]);
                            e.appendChild(document.createTextNode(this.$3.title));
                            var f = document.createElement("img");
                            f.className = "_6qh-";
                            f.src = this.$1;
                            var g = h("_6qh_");
                            g.textContent = this.$2.manage_ad_preferences;
                            var i = document.createElement("a");
                            i.href = this.$2.manage_ad_preferences_uri;
                            i.target = "_blank";
                            i.className = "_6qi0";
                            i.appendChild(h("_6qi1"));
                            i.appendChild(g);
                            g = h("_6qi2", [f, e]);
                            f = document.createElement("a");
                            f.className = "_6qi3";
                            this.$6 != null && (f.href = this.$6);
                            this.$6 == null && f.addEventListener("click", function(b) {
                                a.$5()
                            });
                            return h("_6qi4", [b, c, d, g, i, f])
                        };
                        b.render = function() {
                            var a = h("_6qhb _6qi5"),
                                b = this.$7();
                            a.appendChild(b);
                            return a
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANXOutInitialStep", ["cx", "VPAIDDomUtils", "joinClasses"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d) {
                            this.$3 = c, this.$4 = d, this.$1 = b, this.$2 = a
                        }
                        var c = a.prototype;
                        c.$5 = function(a, c, d, e, f) {
                            __p && __p();
                            c = h(b("joinClasses")("_6qhk", c));
                            var g = h("_6qhl");
                            g.textContent = a;
                            a = h("_6qhm", [g]);
                            if (d != null) {
                                g = h("_6qhn");
                                g.textContent = d;
                                a.appendChild(g)
                            }
                            d = document.createElement("a");
                            d.className = "_6qho";
                            d.appendChild(c);
                            d.appendChild(a);
                            f != null && (d.href = f, d.target = "_blank");
                            d.addEventListener("click", function(a) {
                                f == null && a.preventDefault(), e()
                            });
                            return d
                        };
                        c.render = function() {
                            var a = this,
                                b = this.$5(this.$2.hide_ad, "_6qgk", this.$2.hide_ad_description, function() {
                                    a.$3("hide")
                                }),
                                c = this.$5(this.$2.report_ad, "_6qgl", this.$2.report_ad_description, function() {
                                    a.$3("report")
                                }),
                                d = this.$5(this.$2.why_am_i_seeing_this, "_6qhp", null, function() {
                                    a.$3()
                                }, this.$1),
                                e = document.createElement("a");
                            e.className = "_6qi3";
                            e.addEventListener("click", function(b) {
                                b.preventDefault(), a.$4()
                            });
                            return h("_6qhb _6qhq", [b, c, d, e])
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANXOutOptionStep", ["cx", "VPAIDDomUtils"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d) {
                            this.$3 = a, this.$2 = b, this.$1 = c, this.$4 = d
                        }
                        var b = a.prototype;
                        b.$5 = function() {
                            var a = h("_6qgh"),
                                b = h("_6qgi" + (this.$2 === "hide" ? " _6qgk" : "") + (this.$2 === "report" ? " _6qgl" : "")),
                                c = h("_6qh4");
                            b = h("_6qh5", [b, c]);
                            b = h("_6qh6", [a, b]);
                            a.textContent = this.$6();
                            c.textContent = this.$7();
                            return b
                        };
                        b.$6 = function() {
                            if (this.$2 === "hide") return this.$3.hide_ad;
                            else return this.$3.report_ad
                        };
                        b.$7 = function() {
                            if (this.$2 === "hide") return this.$3.hide_ad_follow_up_heading;
                            else return this.$3.report_ad_follow_up_heading
                        };
                        b.$8 = function() {
                            if (this.$2 === "hide") return this.$3.hide_ad_options;
                            else return this.$3.report_ad_options
                        };
                        b.$9 = function() {
                            var a = this,
                                b = this.$10(this.$8()),
                                c = document.createElement("a");
                            c.className = "_6qi3";
                            c.addEventListener("click", function(b) {
                                b.preventDefault(), a.$4()
                            });
                            return h("_6qha", [b, c])
                        };
                        b.$10 = function(a) {
                            var b = this;
                            a = ES(a, "map", !0, function(a) {
                                var c = document.createElement("button");
                                c.className = "_6qh7";
                                c.textContent = a.title;
                                c.addEventListener("click", function() {
                                    c.classList.add("_6qh8"), b.$1(a)
                                });
                                return c
                            });
                            return h("_6qh9", a)
                        };
                        b.render = function() {
                            var a = h("_6qhb _6qhc");
                            a.appendChild(this.$5());
                            a.appendChild(this.$9());
                            return a
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANXOut", ["cx", "ANXOutConfirmationStep", "ANXOutInitialStep", "ANXOutOptionStep", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = a.parentEl, this.$5 = a.adIcon, this.$6 = a.adChoicesLink, this.$7 = a.content, this.$8 = a.onXOutStart, this.$9 = a.onXOutCancel, this.$10 = a.onXOutOption, this.$11 = a.onXOutFinish, this.$4 = a.buttonEl, this.$13 = a.endURL, this.$14 = !!a.isCondensed
                        }
                        var c = a.prototype;
                        c.$15 = function() {
                            this.$3 == null && (this.$3 = h("_6qhd"), this.getRoot().appendChild(b("nullthrows")(this.$3)));
                            return b("nullthrows")(this.$3)
                        };
                        c.$16 = function() {
                            this.$3 != null && (this.getRoot().removeChild(b("nullthrows")(this.$3)), this.$3 = null)
                        };
                        c.$17 = function() {
                            return h("_6qhe")
                        };
                        c.$18 = function(a) {
                            var b = this.$15(),
                                c = this.$17();
                            this.$19();
                            c.appendChild(a);
                            b.appendChild(c)
                        };
                        c.$19 = function() {
                            var a = this.$15();
                            while (a.firstChild) a.removeChild(a.firstChild)
                        };
                        c.$20 = function() {
                            var a = this.$15(),
                                b = h("_6qhf");
                            this.$19();
                            b.innerText = this.$7.ad_removed;
                            a.appendChild(b)
                        };
                        c.onInitialStepDone = function() {
                            this.$12 != null && this.$21()
                        };
                        c.$21 = function() {
                            var a = this,
                                c = new(b("ANXOutOptionStep"))(this.$7, b("nullthrows")(this.$12), function(b) {
                                    a.$22(b)
                                }, function() {
                                    a.$9(), a.$16()
                                });
                            this.$18(c.render())
                        };
                        c.$22 = function(a) {
                            __p && __p();
                            var c = this;
                            this.$10(a.option_type);
                            if (a.option_type === this.$7.follow_up_report) {
                                this.$12 = "report";
                                this.$21();
                                return
                            }
                            this.$11();
                            a = new(b("ANXOutConfirmationStep"))(this.$7, a, this.$5, b("nullthrows")(this.$12), function() {
                                c.$20()
                            }, this.$13);
                            this.$18(a.render())
                        };
                        c.$23 = function() {
                            var a = this,
                                c = new(b("ANXOutInitialStep"))(this.$7, this.$6, function(b) {
                                    b === "hide" && a.$10(a.$7.dislike_option), b === "report" && a.$10(a.$7.follow_up_report), a.$12 = b, a.onInitialStepDone()
                                }, function() {
                                    a.$9(), a.$16()
                                });
                            this.$18(c.render())
                        };
                        c.getButton = function() {
                            return b("nullthrows")(this.$4)
                        };
                        c.getRoot = function() {
                            return b("nullthrows")(this.$2)
                        };
                        c.render = function() {
                            var a = this;
                            this.$2 = h("_6qhh" + (this.$14 ? " _7t3e" : "") + (this.$14 ? " _7tu-" : ""), []);
                            this.$4.addEventListener("click", function(b) {
                                b.preventDefault(), a.$23(), a.$8()
                            });
                            this.$1.appendChild(this.getRoot())
                        };
                        c.setOverlayBackgroundColor = function(a) {
                            b("nullthrows")(this.$15()).style.setProperty("background", a)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("OnScreenBehavior.anweb", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a() {}
                        var b = a.prototype;
                        b.onPartiallyEntered = function() {};
                        b.onMostlyEntered = function() {};
                        b.onCompletelyEntered = function() {};
                        b.onPartiallyLeft = function() {};
                        b.onMostlyLeft = function() {};
                        b.onCompletelyLeft = function() {};
                        b.onBecameInvalid = function() {};
                        b.onBecameValid = function() {};
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdImpressionBehavior.anweb", ["OnScreenBehavior.anweb"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(b, a);

                        function b(b, c) {
                            var d;
                            d = a.call(this) || this;
                            d.$AdImpressionBehavior1 = !0;
                            d.$AdImpressionBehavior2 = !0;
                            d.$AdImpressionBehavior3 = !1;
                            d.$AdImpressionBehavior4 = !1;
                            d.$AdImpressionBehavior5 = b;
                            d.$AdImpressionBehavior6 = c;
                            return d
                        }
                        var c = b.prototype;
                        c.onPartiallyEntered = function() {
                            this.$AdImpressionBehavior4 = !0, this.$AdImpressionBehavior7()
                        };
                        c.onCompletelyLeft = function() {
                            this.$AdImpressionBehavior4 = !1
                        };
                        c.onBecameInvalid = function() {
                            this.$AdImpressionBehavior2 && this.$AdImpressionBehavior6(), this.$AdImpressionBehavior2 = !1
                        };
                        c.mediaLoaded = function() {
                            this.$AdImpressionBehavior3 = !0, this.$AdImpressionBehavior7()
                        };
                        c.$AdImpressionBehavior7 = function() {
                            if (!this.$AdImpressionBehavior3 || !this.$AdImpressionBehavior4) return;
                            this.$AdImpressionBehavior1 && this.$AdImpressionBehavior5();
                            this.$AdImpressionBehavior1 = !1;
                            this.$AdImpressionBehavior2 = !1
                        };
                        return b
                    }(b("OnScreenBehavior.anweb"));
                    e.exports = a
                }), null);
                __d("AdMostlyViewableImpressionBehavior.anweb", ["OnScreenBehavior.anweb"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 1e3;
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(b, a);

                        function b(b) {
                            var c;
                            c = a.call(this) || this;
                            c.$AdMostlyViewableImpressionBehavior4 = null;
                            c.$AdMostlyViewableImpressionBehavior1 = !0;
                            c.$AdMostlyViewableImpressionBehavior2 = !1;
                            c.$AdMostlyViewableImpressionBehavior3 = !1;
                            c.$AdMostlyViewableImpressionBehavior5 = b;
                            return c
                        }
                        var c = b.prototype;
                        c.onMostlyEntered = function() {
                            this.$AdMostlyViewableImpressionBehavior3 = !0, this.$AdMostlyViewableImpressionBehavior2 && this.$AdMostlyViewableImpressionBehavior6()
                        };
                        c.onMostlyLeft = function() {
                            this.$AdMostlyViewableImpressionBehavior3 = !1, window.clearTimeout(this.$AdMostlyViewableImpressionBehavior4)
                        };
                        c.mediaLoaded = function() {
                            this.$AdMostlyViewableImpressionBehavior2 = !0, this.$AdMostlyViewableImpressionBehavior3 && this.$AdMostlyViewableImpressionBehavior6()
                        };
                        c.$AdMostlyViewableImpressionBehavior6 = function() {
                            var a = this;
                            this.$AdMostlyViewableImpressionBehavior1 && this.$AdMostlyViewableImpressionBehavior4 === null && (this.$AdMostlyViewableImpressionBehavior4 = window.setTimeout(function() {
                                a.$AdMostlyViewableImpressionBehavior5()
                            }, g));
                            this.$AdMostlyViewableImpressionBehavior1 = !1
                        };
                        return b
                    }(b("OnScreenBehavior.anweb"));
                    e.exports = a
                }), null);
                __d("AdQualityMeasurementResult.adquality", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();
                        a.unknownResult = function(b, c) {
                            b === void 0 && (b = "n");
                            c === void 0 && (c = "");
                            return new a({
                                vd: b,
                                r: c
                            })
                        };

                        function a(a) {
                            var b = a.ar,
                                c = a.e,
                                d = a.vd,
                                e = a.r,
                                f = a.vr,
                                g = a.cont;
                            a = a.maa;
                            this.$3 = d;
                            this.$5 = f;
                            this.$1 = b;
                            this.$7 = a;
                            this.$2 = c || null;
                            this.$4 = d === "n" ? "" : e || d;
                            this.$6 = g || !1
                        }
                        var b = a.prototype;
                        b.appendResult = function(a) {
                            this.$5 || (this.$5 = a.$5), this.$1 || (this.$1 = a.$1), this.$4 = a.$4, this.$3 = a.$3, this.$6 = a.$6, this.$7 = this.$7 || a.$7
                        };
                        b.getData = function() {
                            var a = null;
                            if (this.$2) try {
                                a = this.$2.toString()
                            } catch (b) {
                                a = "Unknown error"
                            }
                            return {
                                error: a,
                                viewabilityDetection: this.$3,
                                reason: this.$4,
                                viewableRatio: this.getViewableRatio()
                            }
                        };
                        b.getAdRect = function() {
                            return this.$1
                        };
                        b.getError = function() {
                            return this.$2
                        };
                        b.getMaxAdArea = function() {
                            return this.$7
                        };
                        b.getIsContinuous = function() {
                            return this.$6
                        };
                        b.getViewableRect = function() {
                            return this.$5
                        };
                        b.getViewableRatio = function() {
                            return this.$8(function(a) {
                                return a.area()
                            })
                        };
                        b.getViewableHeightRatio = function() {
                            return this.$8(function(a) {
                                return a.height
                            })
                        };
                        b.getViewableWidthRatio = function() {
                            return this.$8(function(a) {
                                return a.width
                            })
                        };
                        b.$8 = function(a) {
                            var b = this.$1,
                                c = this.$5;
                            return c && a(c) === 0 || b && a(b) === 0 ? 0 : c && b ? a(c) / a(b) : null
                        };
                        b.getViewabilityDetection = function() {
                            return this.$3
                        };
                        b.getReason = function() {
                            return this.$4
                        };
                        b.isConclusive = function() {
                            return typeof this.getViewableRatio() === "number"
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdQualityMeasurement.adquality", ["AdQualityMeasurementResult.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            this.__parentWindow = b
                        }
                        var c = a.prototype;
                        c.destroy = function() {};
                        c.getMeasurement = function(a) {
                            a(b("AdQualityMeasurementResult.adquality").unknownResult(this.__viewabilityDetection, this.__viewabilityDetection + "-na"))
                        };
                        c.getViewabilityDetection = function() {
                            return this.__viewabilityDetection
                        };
                        c.getParentWindow = function() {
                            return this.__parentWindow
                        };
                        c.isAvailable = function(a) {
                            return !1
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdQualityUtils.adquality", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();

                    function g() {
                        var a = navigator.userAgent.toLowerCase();
                        a = a.match(/chrome\/(\d+)/);
                        a = a ? parseInt(a[1], 10) : null;
                        return a
                    }

                    function h() {
                        var a = navigator.userAgent.toLowerCase();
                        a = a.match(/firefox\/(\d+)/);
                        a = a ? parseInt(a[1], 10) : null;
                        return a
                    }

                    function i() {
                        var a = navigator.userAgent.toLowerCase(),
                            b = /safari\//.test(a) && !/chrome\//.test(a);
                        a = a.match(/version\/(\d+)/);
                        b = b && a ? parseInt(a[1], 10) : null;
                        return b
                    }

                    function j() {
                        var a = navigator.userAgent.toLowerCase();
                        return ES(a, "indexOf", !0, "trident") > -1 && ES(a, "indexOf", !0, "msie") === -1
                    }

                    function k() {
                        return ES(navigator.platform, "indexOf", !0, "Mac") > -1
                    }

                    function a() {
                        var a = !!document.documentMode;
                        a = !a && !!window.StyleMedia;
                        return a && l()
                    }

                    function l() {
                        var a = navigator.userAgent.toLowerCase();
                        return /\Wedge\/(\d|\.)+/i.test(a)
                    }
                    var m = ES("Object", "freeze", !1, {
                        CHROME_MAC: 97,
                        CHROME_WIN: 89,
                        FIREFOX_MAC: 102,
                        FIREFOX_WIN: 124,
                        FIREFOX_WIN_MAX: 130,
                        IE_11: 86,
                        SAFARI: 38
                    });

                    function b(a) {
                        __p && __p();
                        if (g()) return k() ? m.CHROME_MAC : m.CHROME_WIN;
                        else if (h()) {
                            var b = a.screen,
                                c = b.height;
                            b = b.width;
                            var d = a.outerHeight;
                            a = a.outerWidth;
                            d = d === c && a === b;
                            return k() ? m.FIREFOX_MAC : d ? m.FIREFOX_WIN_MAX : m.FIREFOX_WIN
                        } else if (j()) return m.IE_11;
                        else if (i()) return m.SAFARI;
                        else return 0
                    }
                    e.exports = {
                        getBrowserBarOffset: b,
                        getChromeVersion: g,
                        getFirefoxVersion: h,
                        getSafariVersion: i,
                        isIE11: j,
                        isEdge: a,
                        isEdgeUA: l
                    }
                }), null);
                __d("Rectangle.adquality", ["AdQualityUtils.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, b, c, d) {
                            this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
                        }
                        a.RectangleZero = function() {
                            return new a(0, 0, 0, 0)
                        };
                        a.RectangleFromClientRect = function(b) {
                            return new a(b.left || 0, b.top || 0, b.width || b.right - b.left || 0, b.height || b.bottom - b.top || 0)
                        };
                        a.ClientRectFromRectangle = function(a) {
                            return {
                                width: a.width,
                                height: a.height,
                                left: a.x,
                                top: a.y,
                                right: a.x + a.width,
                                bottom: a.y + a.height
                            }
                        };
                        a.RectangleFromWindow = function(b) {
                            try {
                                var c = b.document,
                                    d = b.document.documentElement,
                                    e = d.hasOwnProperty ? Object.prototype.hasOwnProperty.call(d, "ontouchstart") : !1,
                                    f = c.compatMode === "BackCompat";
                                e ? (e = b.innerWidth, b = b.innerHeight) : f ? (e = c.body.clientWidth, b = c.body.clientHeight) : (e = d.clientWidth, b = d.clientHeight);
                                return new a(0, 0, e, b)
                            } catch (a) {
                                return null
                            }
                        };
                        a.RectangleFromViewport = function(c) {
                            var d = b("AdQualityUtils.adquality").getBrowserBarOffset(c);
                            return new a(c.screenX, c.screenY + d, c.outerWidth, c.outerHeight - d)
                        };
                        var c = a.prototype;
                        c.area = function() {
                            return this.width * this.height
                        };
                        c.getData = function() {
                            return {
                                x: this.x,
                                y: this.y,
                                width: this.width,
                                height: this.height
                            }
                        };
                        c.intersection = function(b) {
                            var c = Math.max(this.x, b.x),
                                d = Math.max(this.y, b.y),
                                e = Math.min(this.x + this.width, b.x + b.width);
                            b = Math.min(this.y + this.height, b.y + b.height);
                            return e >= c && b >= d ? new a(c, d, e - c, b - d) : null
                        };
                        c.offset = function(b, c) {
                            return new a(this.x + b, this.y + c, this.width, this.height)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AMPMeasurement.adquality", ["AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "AdQualityUtils.adquality", "AMPContextLoader", "Rectangle.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("AdQualityUtils.adquality").getBrowserBarOffset;
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(c, d) {
                            __p && __p();
                            var e;
                            e = a.call(this, c, d) || this;
                            e.$AMPMeasurement5 = function(a) {
                                a = a[a.length - 1];
                                var c = a.boundingClientRect;
                                a = a.intersectionRect;
                                e.$AMPMeasurement1 = b("Rectangle.adquality").RectangleFromClientRect(c);
                                e.$AMPMeasurement4 = b("Rectangle.adquality").RectangleFromClientRect(a).offset(e.__parentWindow.screenX, e.__parentWindow.screenY + g(e.__parentWindow));
                                e.$AMPMeasurement4 = e.$AMPMeasurement2 && e.$AMPMeasurement2.hidden || !e.$AMPMeasurement4 ? b("Rectangle.adquality").RectangleZero() : e.$AMPMeasurement4
                            };
                            e.$AMPMeasurement1 = null;
                            e.$AMPMeasurement2 = null;
                            e.__viewabilityDetection = "amp";
                            e.$AMPMeasurement3 = null;
                            e.$AMPMeasurement4 = null;
                            b("AMPContextLoader").genAMPContext().then(function(a) {
                                e.$AMPMeasurement2 = a, e.$AMPMeasurement3 = a.observeIntersection(e.$AMPMeasurement5)
                            });
                            return e
                        }
                        var d = c.prototype;
                        d.destroy = function() {
                            this.$AMPMeasurement3 && this.$AMPMeasurement3()
                        };
                        d.isAvailable = function() {
                            return b("AMPContextLoader").isAMP()
                        };
                        d.getMeasurement = function(a) {
                            a(new(b("AdQualityMeasurementResult.adquality"))({
                                ar: this.$AMPMeasurement1,
                                vd: this.__viewabilityDetection,
                                vr: this.$AMPMeasurement4
                            }))
                        };
                        return c
                    }(b("AdQualityMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("AdQualityMeasurementQueue.adquality", ["AdQualityMeasurementResult.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = a
                        }
                        var c = a.prototype;
                        c.destroy = function() {
                            ES(this.$1, "forEach", !0, function(a) {
                                a.destroy()
                            }), this.$1 = []
                        };
                        c.getMeasurement = function(a) {
                            this.$2(0, b("AdQualityMeasurementResult.adquality").unknownResult(), a)
                        };
                        c.$2 = function(a, c, d) {
                            var e = this;
                            c.appendResult(b("AdQualityMeasurementResult.adquality").unknownResult());
                            if (a < this.$1.length) {
                                var f = this.$1[a];
                                !f.isAvailable(this.$1) ? this.$2(a + 1, c, d) : f.getMeasurement(function(b) {
                                    c.appendResult(b), c.isConclusive() ? e.$3(c, d) : e.$2(a + 1, c, d)
                                })
                            } else this.$3(c, d)
                        };
                        c.$3 = function(a, b) {
                            b(a)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdQualityPlayerSizeMonitor.adquality", ["ScreenOrientation.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a() {
                            this.$1 = {
                                h: 0,
                                u: 0,
                                v: 0
                            }
                        }
                        var c = a.prototype;
                        c.destroy = function() {
                            this.$1 = {
                                h: 0,
                                u: 0,
                                v: 0
                            }
                        };
                        c.getMaxAdAreaForScreenOrientation = function(a) {
                            var c = b("ScreenOrientation.adquality").getScreenOrientation();
                            if (a.getReason() !== "fullscreen") {
                                a = a.getAdRect();
                                a = a && a.area() || 0;
                                this.$1[c] = Math.max(this.$1[c], a)
                            }
                            return {
                                maxAdAreaNotFullscreen: this.$1[c],
                                screenOrientation: c
                            }
                        };
                        c.getMaxAdAreaByScreenOrientation = function(a) {
                            return {
                                maxAdAreaNotFullscreen: this.$1[a],
                                screenOrientation: a
                            }
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdQualityStatistics.adquality", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, b, c) {
                            b === void 0 && (b = .05), c === void 0 && (c = .33), this.$23 = a, this.$2 = b, this.$28 = c, this.resetNonContinuousStatistics(), this.$20 = "n", this.$21 = "", this.$5 = 0, this.$7 = 0, this.$6 = 0, this.$9 = 0, this.$10 = 0, this.$11 = 0, this.$27 = {
                                maxAdAreaNotFullscreen: 0,
                                screenOrientation: "u"
                            }
                        }
                        var b = a.prototype;
                        b.getViewableRatio = function() {
                            return this.$23
                        };
                        b.getData = function() {
                            return {
                                audibleSeconds: this.$1,
                                avgPlaybackRate: isFinite(this.$18 / this.$24) ? Math.round(this.$18 * 100 / this.$24) / 100 : null,
                                avgViewableRatio: this.$3,
                                avgVolume: this.$4,
                                curViewableRatio: this.$8,
                                maxContinuousAudibleSeconds: this.$9,
                                maxContinuousPlaySeconds: this.$10,
                                maxContinuousViewableSeconds: this.$11,
                                maxViewableRatio: this.$12,
                                maxVolume: this.$13,
                                measurementSeconds: this.$14,
                                minViewableRatio: this.$15,
                                minVolume: this.$16,
                                viewableDetection: this.$20,
                                viewableReason: this.$21,
                                viewableSeconds: this.$22,
                                stickyAdSeconds: this.$26,
                                maxAdArea: this.$27
                            }
                        };
                        b.registerProgress = function(a, b) {
                            __p && __p();
                            this.$14 += a;
                            var c = b.getViewableRatio() || 0;
                            this.$20 = b.getViewabilityDetection();
                            this.$21 = b.getReason();
                            this.$8 = c;
                            this.$17 += c * a;
                            this.$14 > 0 && (this.$3 = this.$17 / this.$14);
                            (this.$15 === null || this.$15 === void 0 || this.$15 > c) && (this.$15 = c);
                            (this.$12 === null || this.$12 === void 0 || this.$12 < c) && (this.$12 = c);
                            this.$27 = b.getMaxAdArea() || this.$27;
                            var d = b.getAdRect();
                            b.getReason() !== "fullscreen" && d && d.area() < this.$28 * this.$27.maxAdAreaNotFullscreen && (this.$26 += a);
                            d = c >= this.$23;
                            d && (this.$22 += a);
                            this.$6 += a;
                            (!b.getIsContinuous() || !d) && (this.$6 = 0);
                            this.$11 = Math.max(this.$11, this.$6);
                            this.$7 += a;
                            b.getIsContinuous() || (this.$7 = 0);
                            this.$10 = Math.max(this.$10, this.$7)
                        };
                        b.registerVolume = function(a, b, c) {
                            __p && __p();
                            this.$25++;
                            this.$19 += b;
                            this.$4 = this.$19 / this.$25;
                            this.$13 = Math.max(this.$13, b);
                            this.$16 = this.$25 !== 1 ? Math.min(this.$16, b) : b;
                            b = b >= this.$2;
                            b && (this.$1 += a);
                            this.$5 += a;
                            (!c || !b) && (this.$5 = 0);
                            this.$9 = Math.max(this.$9, this.$5)
                        };
                        b.registerPlaybackRate = function(a, b) {
                            this.$24 += a, this.$18 += b * a
                        };
                        b.resetNonContinuousStatistics = function() {
                            this.$1 = 0, this.$3 = null, this.$4 = 0, this.$8 = null, this.$12 = null, this.$13 = 0, this.$14 = 0, this.$15 = null, this.$16 = 0, this.$18 = 0, this.$17 = 0, this.$19 = 0, this.$22 = 0, this.$24 = 0, this.$25 = 0, this.$26 = 0
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdQualityManager.adquality", ["AdQualityMeasurementQueue.adquality", "AdQualityMeasurementResult.adquality", "AdQualityPlayerSizeMonitor.adquality", "AdQualityStatistics.adquality", "NativePromise"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = .5;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var c = a.element,
                                d = a.parentWindow,
                                e = a.rules;
                            this.$1 = !0;
                            this.$2 = c;
                            this.$3 = new(b("AdQualityMeasurementQueue.adquality"))(a.measurementTests);
                            this.$4 = new(b("AdQualityPlayerSizeMonitor.adquality"))();
                            this.$5 = d;
                            this.$8 = e;
                            this.$6 = new(b("AdQualityStatistics.adquality"))(g);
                            this.$7 = ES(this.$8, "map", !0, function(a) {
                                return a.createTest(a)
                            });
                            this.$9 = a.gatingConfig
                        }
                        var c = a.prototype;
                        c.getStatistics = function() {
                            return this.$6.getData()
                        };
                        c.getViewableRatio = function(a, c) {
                            var d = this;
                            this.$3.getMeasurement(function(e) {
                                var f = e.getAdRect();
                                c(new(b("AdQualityMeasurementResult.adquality"))({
                                    ar: f,
                                    e: e.getError(),
                                    vd: e.getViewabilityDetection(),
                                    r: a ? "fullscreen" : e.getReason(),
                                    vr: a ? f : e.getViewableRect(),
                                    maa: d.$4.getMaxAdAreaForScreenOrientation(e)
                                }))
                            })
                        };
                        c.registerProgress = function(a, c) {
                            __p && __p();
                            var d = this;
                            if (!this.$1) {
                                c && c(this.getStatistics());
                                return
                            }
                            this.$3.getMeasurement(function(e) {
                                if (d.$1) {
                                    var f = e.getAdRect();
                                    f = new(b("AdQualityMeasurementResult.adquality"))({
                                        ar: f,
                                        e: e.getError(),
                                        vd: e.getViewabilityDetection(),
                                        r: a.isFullScreen ? "fullscreen" : e.getReason(),
                                        vr: a.isFullScreen ? f : e.getViewableRect(),
                                        cont: a.isContinuous,
                                        maa: d.$4.getMaxAdAreaForScreenOrientation(e)
                                    });
                                    d.$10(f, parseFloat(a.loggingTimeInterval), d.getStatistics(), a, a.volume, a.playbackRate);
                                    c && c(d.getStatistics())
                                }
                            })
                        };
                        c.resetStatistics = function() {
                            this.$6.resetNonContinuousStatistics()
                        };
                        c.addRule = function(a) {
                            this.$8.push(a), this.$7.push(a.createTest(a))
                        };
                        c.$10 = function(a, b, c, d, e, f) {
                            this.$6.registerVolume(b, e, a.getIsContinuous()), this.$6.registerPlaybackRate(b, f), this.$6.registerProgress(b, a), ES(this.$7, "forEach", !0, function(e) {
                                e.registerProgress(b, a, c, d)
                            })
                        };
                        c.getMeasurementResult = function() {
                            var a = this;
                            return new(b("NativePromise"))(function(b, c) {
                                a.$3.getMeasurement(function(a) {
                                    b(a)
                                })
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdViewability", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = ES("Object", "freeze", !1, {
                        PARTIALLY_VISIBLE: "PARTIALLY_VISIBLE",
                        FULLY_VISIBLE: "FULLY_VISIBLE",
                        HIDDEN_TAB: "HIDDEN_TAB",
                        SAFEFRAME_OFFSCREEN: "SAFEFRAME_OFFSCREEN",
                        OFFSCREEN_ABOVE: "OFFSCREEN_ABOVE",
                        OFFSCREEN_BELOW: "OFFSCREEN_BELOW",
                        OFFSCREEN_HORIZONTAL: "OFFSCREEN_HORIZONTAL",
                        OFFSCREEN_INFINITY: "OFFSCREEN_INFINITY",
                        MISSING_ELEMENTS: "MISSING_ELEMENTS",
                        INVALID_SAFEFRAME_API: "INVALID_SAFEFRAME_API",
                        UNKNOWN: "UNKNOWN"
                    });
                    e.exports = a
                }), null);
                __d("HTMLElementFrameContext.adquality", ["ANUtils", "Rectangle.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 0,
                        h = 1,
                        i = 2,
                        j = 3,
                        k = 0,
                        l = 1,
                        m = 2;
                    a = function() {
                        __p && __p();

                        function a(c, d) {
                            __p && __p();
                            this.ancestorIframes = [];
                            this.ancestorURLs = [];
                            this.crossDomainWindowCount = 0;
                            this.error = null;
                            this.focus = null;
                            this.offsetHeight = null;
                            this.offsetRect = null;
                            this.offsetWidth = null;
                            this.pageURL = null;
                            this.parentWindow = null;
                            this.topWindow = null;
                            this.topWindowLevel = 0;
                            this.type = null;
                            this.viewportRect = null;
                            this.windowCount = 0;
                            this.domainDetectionMethod = g;
                            this.pageDomain = null;
                            this.transparent = null;
                            try {
                                try {
                                    this.offsetHeight = c.offsetHeight, this.offsetWidth = c.offsetWidth
                                } catch (a) {}
                                var e = c.ownerDocument;
                                this.parentWindow = d || c.ownerDocument.defaultView || e.parentWindow;
                                if (this.parentWindow) {
                                    d = c;
                                    e = this.parentWindow;
                                    while (e && this.windowCount < 100) {
                                        this.windowCount++;
                                        c = null;
                                        var f = null;
                                        try {
                                            f = e.document.referrer, c = e.location.href || e.document.location.href, this.topWindow = e, this.topWindowLevel = this.windowCount
                                        } catch (a) {
                                            this.crossDomainWindowCount++
                                        }
                                        this.ancestorURLs.push(c || f || "");
                                        var n = null;
                                        try {
                                            d && a.isElementVisible(d) === !1 && (this.transparent = !0)
                                        } catch (a) {}
                                        var o = null;
                                        if (d && d.getBoundingClientRect && this.crossDomainWindowCount === 0) try {
                                            o = d.getBoundingClientRect()
                                        } catch (a) {}
                                        o && this.crossDomainWindowCount === 0 && (!this.offsetRect ? this.offsetRect = b("Rectangle.adquality").RectangleFromClientRect(o) : this.offsetRect = this.offsetRect.offset(o.left, o.top));
                                        if (!this.parentWindow || !this.parentWindow.top) e = null;
                                        else if (e === this.parentWindow.top) c && (this.pageURL = c, this.pageDomain = b("ANUtils").extractDomain(c), this.domainDetectionMethod = h, this.focus = n), this.windowCount > 1 ? c ? this.type = l : this.type = m : this.type = k, this.type !== m && (this.viewportRect = b("Rectangle.adquality").RectangleFromWindow(e), this.transparent === null && (this.transparent = !1)), e = null;
                                        else {
                                            f && e.parent === this.parentWindow.top && (this.pageURL = f, this.pageDomain = b("ANUtils").extractDomain(f), this.domainDetectionMethod = i);
                                            d = null;
                                            try {
                                                d = e.frameElement, d && this.ancestorIframes.push(d)
                                            } catch (a) {}
                                            e = e.parent
                                        }
                                    }
                                    if (!this.pageURL) {
                                        o = window.location.ancestorOrigins;
                                        o && o.length > 0 && (this.pageDomain = b("ANUtils").extractDomain(o[o.length - 1]), this.domainDetectionMethod = j)
                                    }
                                }
                            } catch (a) {
                                this.error = a
                            }
                        }
                        var c = a.prototype;
                        c.getData = function() {
                            var a = null;
                            if (this.error) try {
                                a = this.error.toString()
                            } catch (b) {
                                a = "Unknown error"
                            }
                            return {
                                crossDomainWindowCount: this.crossDomainWindowCount,
                                error: a,
                                focus: this.focus,
                                offsetHeight: this.offsetHeight,
                                offsetRect: this.offsetRect ? this.offsetRect.getData() : null,
                                offsetWidth: this.offsetWidth,
                                pageDomain: this.pageDomain,
                                pageURL: this.pageURL,
                                domainDetectionMethod: this.domainDetectionMethod,
                                topWindowLevel: this.topWindowLevel,
                                type: this.type,
                                viewportRect: this.viewportRect ? this.viewportRect.getData() : null,
                                windowCount: this.windowCount,
                                transparent: this.transparent
                            }
                        };
                        c.isSafeframe = function() {
                            return !!this.getSafeFrameAPI()
                        };
                        c.getSafeFrameAPI = function() {
                            return this.$1(function(a) {
                                return a.$sf && a.$sf.ext
                            })
                        };
                        c.getMRAIDAPI = function() {
                            return this.$1(function(a) {
                                return a.mraid
                            })
                        };
                        c.$1 = function(a) {
                            __p && __p();
                            var c = b("ANUtils").getWindowHierarchy(this.parentWindow);
                            for (var c = c, d = ES("Array", "isArray", !1, c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var f;
                                if (d) {
                                    if (e >= c.length) break;
                                    f = c[e++]
                                } else {
                                    e = c.next();
                                    if (e.done) break;
                                    f = e.value
                                }
                                f = f;
                                f = a(f);
                                if (f) return f
                            }
                            return null
                        };
                        c.getNestLevel = function() {
                            return this.ancestorURLs.length - 1
                        };
                        c.getTopURL = function() {
                            return this.ancestorURLs[this.ancestorURLs.length - 1]
                        };
                        c.isCrossDomain = function() {
                            return this.crossDomainWindowCount > 0
                        };
                        c.getOverlayedArea = function(a) {
                            __p && __p();
                            try {
                                var b = this.topWindow,
                                    c = this.ancestorIframes[this.ancestorIframes.length - 1];
                                if (!b || !c) return 0;
                                var d = function(a) {
                                        a = b.document.elementFromPoint(a.x, a.y);
                                        return a && a !== c && ES("Object", "keys", !1, a).length > 0
                                    },
                                    e = a.getData(),
                                    f = e.height,
                                    g = e.width,
                                    h = e.x;
                                e = e.y;
                                h = [{
                                    x: h,
                                    y: e
                                }, {
                                    x: h + g - 1,
                                    y: e
                                }, {
                                    x: h,
                                    y: e + f - 1
                                }, {
                                    x: h + g - 1,
                                    y: e + f - 1
                                }, {
                                    x: h + g / 2,
                                    y: e + f / 2
                                }, {
                                    x: h + g / 4,
                                    y: e + f / 2
                                }, {
                                    x: h + 3 * g / 4,
                                    y: e + f / 2
                                }, {
                                    x: h + g / 2,
                                    y: e + f / 4
                                }, {
                                    x: h + g / 2,
                                    y: e + 3 * f / 4
                                }];
                                g = Math.min(1, ES(h, "map", !0, d).reduce(function(a, b) {
                                    return a + (b ? 1 / 9 : 0)
                                }, 0));
                                return g * a.area()
                            } catch (a) {}
                            return 0
                        };
                        a.isElementVisible = function(a) {
                            if (!a.style) return !0;
                            if (a.style.opacity && a.style.opacity < "0.9") return !1;
                            if (a.style.visibility && a.style.visibility === "hidden") return !1;
                            return a.parentElement ? this.isElementVisible(a.parentElement) : !0
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("GeometricMeasurement.adquality", ["AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "HTMLElementFrameContext.adquality", "PageVisibility.adquality", "Rectangle.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(c, d) {
                            var e;
                            e = a.call(this, c, d) || this;
                            e.$GeometricMeasurement1 = c;
                            d = new(b("HTMLElementFrameContext.adquality"))(c, d);
                            e.$GeometricMeasurement2 = !!(d.viewportRect && d.offsetRect);
                            e.__viewabilityDetection = "geo";
                            e.$GeometricMeasurement3 = new(b("PageVisibility.adquality"))(c.ownerDocument);
                            return e
                        }
                        var d = c.prototype;
                        d.isAvailable = function() {
                            return this.$GeometricMeasurement2
                        };
                        d.getMeasurement = function(a) {
                            __p && __p();
                            var c = new(b("HTMLElementFrameContext.adquality"))(this.$GeometricMeasurement1, this.__parentWindow),
                                d = null,
                                e = null,
                                f = "",
                                g = null,
                                h = null;
                            try {
                                var i = this.$GeometricMeasurement3.isHidden();
                                typeof i === "boolean" && (e = !i);
                                h = c.offsetRect;
                                c.focus !== null && (e = c.focus);
                                if (c.transparent === !0) {
                                    a(new(b("AdQualityMeasurementResult.adquality"))({
                                        ar: h,
                                        vd: this.__viewabilityDetection,
                                        r: "geo-trans",
                                        vr: b("Rectangle.adquality").RectangleZero()
                                    }), c);
                                    return
                                }
                                c.viewportRect && h && c.crossDomainWindowCount === 0 ? (g = c.viewportRect.intersection(h) || b("Rectangle.adquality").RectangleZero(), f = g.area() > 0 ? "geo-area" : "geo-no-vr") : h || (f = "geo-no-or");
                                e === !1 && (g = b("Rectangle.adquality").RectangleZero(), f = "geo-pv")
                            } catch (a) {
                                d = a
                            }
                            a(new(b("AdQualityMeasurementResult.adquality"))({
                                ar: h,
                                e: d,
                                vd: this.__viewabilityDetection,
                                r: f,
                                vr: g
                            }), c)
                        };
                        return c
                    }(b("AdQualityMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("IntersectionObserverMeasurement.adquality", ["AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "HTMLElementFrameContext.adquality", "PageVisibility.adquality", "Rectangle.adquality", "SimplePromise.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 300,
                        h = [];
                    for (var a = 0; a <= 10; a += 1) h.push(a / 10);
                    c = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(c, d) {
                            __p && __p();
                            var e;
                            e = a.call(this, c, d) || this;
                            e.$IntersectionObserverMeasurement2 = c;
                            e.isAvailable() && (e.$IntersectionObserverMeasurement4 = new(b("SimplePromise.adquality"))(function(a, f) {
                                __p && __p();
                                var i = window.setTimeout(function() {
                                        return f()
                                    }, g),
                                    j = new(b("HTMLElementFrameContext.adquality"))(c, d),
                                    k = j.offsetRect;
                                j = j.topWindow;
                                var l = c;
                                if (k && j) {
                                    var m = b("Rectangle.adquality").RectangleFromWindow(j);
                                    m && (k.y < m.y || k.x < m.x || k.height > m.height || k.width > m.width) && (l = j.document.documentElement || c)
                                }
                                k = e.__parentWindow.IntersectionObserver;
                                e.$IntersectionObserverMeasurement3 = new k(function(b) {
                                    var c = !!e.$IntersectionObserverMeasurement1;
                                    e.$IntersectionObserverMeasurement1 = b[b.length - 1];
                                    c || (window.clearTimeout(i), a())
                                }, {
                                    threshold: h
                                });
                                e.$IntersectionObserverMeasurement3.observe(l);
                                e.$IntersectionObserverMeasurement5 = new(b("PageVisibility.adquality"))(c.ownerDocument)
                            }));
                            e.__viewabilityDetection = "io";
                            return e
                        }
                        var d = c.prototype;
                        d.destroy = function() {
                            this.$IntersectionObserverMeasurement3 && this.$IntersectionObserverMeasurement3.disconnect()
                        };
                        d.isAvailable = function() {
                            return "IntersectionObserver" in this.__parentWindow
                        };
                        d.getMeasurement = function(a) {
                            __p && __p();
                            var b = this;
                            if (this.$IntersectionObserverMeasurement1) {
                                this.$IntersectionObserverMeasurement6(a);
                                return
                            }
                            if (!this.$IntersectionObserverMeasurement4) {
                                this.$IntersectionObserverMeasurement7(a);
                                return
                            }
                            this.$IntersectionObserverMeasurement4.then(function() {
                                return b.$IntersectionObserverMeasurement6(a)
                            }, function() {
                                return b.$IntersectionObserverMeasurement7(a)
                            })
                        };
                        d.$IntersectionObserverMeasurement6 = function(a) {
                            __p && __p();
                            if (!this.$IntersectionObserverMeasurement1) {
                                this.$IntersectionObserverMeasurement7(a);
                                return
                            }
                            var c = this.$IntersectionObserverMeasurement1,
                                d = c.boundingClientRect;
                            c = c.intersectionRect;
                            var e = !this.$IntersectionObserverMeasurement5.isHidden(),
                                f = new(b("HTMLElementFrameContext.adquality"))(this.$IntersectionObserverMeasurement2, this.__parentWindow);
                            f.focus !== null && (e = e && Boolean(f.focus));
                            f = e ? b("Rectangle.adquality").RectangleFromClientRect(c) : b("Rectangle.adquality").RectangleZero();
                            a(new(b("AdQualityMeasurementResult.adquality"))({
                                ar: b("Rectangle.adquality").RectangleFromClientRect(d),
                                vd: this.__viewabilityDetection,
                                vr: f
                            }))
                        };
                        d.$IntersectionObserverMeasurement7 = function(a) {
                            a(b("AdQualityMeasurementResult.adquality").unknownResult(this.__viewabilityDetection, this.__viewabilityDetection + "-na"))
                        };
                        return c
                    }(b("AdQualityMeasurement.adquality"));
                    e.exports = c
                }), null);
                __d("SafeframeMeasurement.adquality", ["AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "HTMLElementFrameContext.adquality", "Rectangle.adquality", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(c, d) {
                            var e;
                            e = a.call(this, c, d) || this;
                            e.$SafeframeMeasurement1 = new(b("HTMLElementFrameContext.adquality"))(c, d).getSafeFrameAPI();
                            e.__viewabilityDetection = "sf";
                            return e
                        }
                        var d = c.prototype;
                        d.isAvailable = function() {
                            return !!this.$SafeframeMeasurement1
                        };
                        d.getMeasurement = function(a) {
                            var c = b("nullthrows")(this.$SafeframeMeasurement1);
                            c = c.geom;
                            c = c();
                            c = c.self;
                            var d = Number(c.h),
                                e = Number(c.w),
                                f = Number(c.l),
                                g = Number(c.t);
                            a(new(b("AdQualityMeasurementResult.adquality"))({
                                ar: new(b("Rectangle.adquality"))(f, g, e, d),
                                vd: this.__viewabilityDetection,
                                vr: new(b("Rectangle.adquality"))(f, g, Number(c.xiv) * e, Number(c.yiv) * d)
                            }))
                        };
                        return c
                    }(b("AdQualityMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("AdQualityViewabilityMonitor", ["AdQualityManager.adquality", "AdViewability", "AMPMeasurement.adquality", "GeometricMeasurement.adquality", "IntersectionObserverMeasurement.adquality", "SafeframeMeasurement.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 100;
                    a = function() {
                        __p && __p();

                        function a(a, c) {
                            this.$1 = !1;
                            this.$3 = null;
                            var d = a.ownerDocument.defaultView,
                                e = [new(b("GeometricMeasurement.adquality"))(a, d), new(b("SafeframeMeasurement.adquality"))(a, d), new(b("AMPMeasurement.adquality"))(a, d)],
                                f = new(b("IntersectionObserverMeasurement.adquality"))(a, d);
                            c ? e = [f].concat(e) : e.push(f);
                            this.$2 = new(b("AdQualityManager.adquality"))({
                                element: a,
                                parentWindow: d,
                                rules: [],
                                measurementTests: e
                            })
                        }
                        var c = a.prototype;
                        c.pause = function() {
                            this.$1 = !0
                        };
                        c.resume = function() {
                            this.$1 = !1
                        };
                        c.getDimensions = function() {
                            return !this.$4 ? null : this.$4.getAdRect()
                        };
                        c.attachBehaviorManager = function(a) {
                            this.$3 = a, this.$7()
                        };
                        c.$7 = function() {
                            __p && __p();
                            var a = this;
                            if (this.$6 !== void 0) return;
                            this.$6 = window.setInterval(function() {
                                if (a.$1) return;
                                a.$2.getViewableRatio(!1, function(b) {
                                    a.$4 = b;
                                    a.$5 == null && (a.$5 = b);
                                    var c = b.getViewableWidthRatio();
                                    b = b.getViewableHeightRatio();
                                    a.$3 != null && c != null && b != null && a.$3.updateView(c, b)
                                })
                            }, g)
                        };
                        c.getLastViewabilityState = function() {
                            return this.getViewabilityStateType(this.$4)
                        };
                        c.getInitialViewabilityState = function() {
                            return !this.$5 ? null : this.getViewabilityStateType(this.$5)
                        };
                        c.getCurrentViewabilityState = function() {
                            var a = this;
                            return this.$2.getMeasurementResult().then(function(b) {
                                return a.getViewabilityStateType(b)
                            })
                        };
                        c.getViewabilityStateType = function(a) {
                            __p && __p();
                            if (!a) return {
                                viewabilityLevels: [b("AdViewability").UNKNOWN]
                            };
                            var c = a.getViewableRatio(),
                                d = a.getViewableWidthRatio(),
                                e = a.getViewableHeightRatio(),
                                f = a.getViewabilityDetection();
                            a = a.getReason();
                            if (c == null || d == null || e == null) return {
                                viewabilityLevels: [b("AdViewability").UNKNOWN]
                            };
                            if (c <= 0) return {
                                viewabilityLevels: [b("AdViewability").OFFSCREEN_INFINITY],
                                viewableRatio: 0
                            };
                            if (d <= .99) return {
                                viewabilityLevels: [b("AdViewability").OFFSCREEN_HORIZONTAL],
                                viewableRatio: 0
                            };
                            var g;
                            c >= 1 ? g = [b("AdViewability").FULLY_VISIBLE] : g = [b("AdViewability").PARTIALLY_VISIBLE];
                            return {
                                viewabilityLevels: g,
                                widthInView: d,
                                heightInView: e,
                                viewableRatio: c,
                                viewabilityDetection: f,
                                viewabilityReason: a
                            }
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdStatsBehavior.anweb", ["OnScreenBehavior.anweb", "getTime"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c() {
                            var b;
                            b = a.call(this) || this;
                            b.$AdStatsBehavior1 = 0;
                            b.$AdStatsBehavior2 = 0;
                            b.$AdStatsBehavior3 = 0;
                            b.$AdStatsBehavior4 = 0;
                            b.$AdStatsBehavior5 = 0;
                            b.$AdStatsBehavior6 = 0;
                            return b
                        }
                        var d = c.prototype;
                        d.onPartiallyEntered = function() {
                            this.$AdStatsBehavior4 = b("getTime")()
                        };
                        d.onMostlyEntered = function() {
                            this.$AdStatsBehavior5 = b("getTime")()
                        };
                        d.onCompletelyEntered = function() {
                            this.$AdStatsBehavior6 = b("getTime")()
                        };
                        d.onPartiallyLeft = function() {
                            this.$AdStatsBehavior3 += b("getTime")() - this.$AdStatsBehavior6, this.$AdStatsBehavior6 = 0
                        };
                        d.onMostlyLeft = function() {
                            this.$AdStatsBehavior2 += b("getTime")() - this.$AdStatsBehavior5, this.$AdStatsBehavior5 = 0
                        };
                        d.onCompletelyLeft = function() {
                            this.$AdStatsBehavior1 += b("getTime")() - this.$AdStatsBehavior4, this.$AdStatsBehavior4 = 0
                        };
                        d.onBecameInvalid = function() {
                            this.$AdStatsBehavior7(), this.$AdStatsBehavior8()
                        };
                        d.onBecameValid = function() {
                            this.$AdStatsBehavior8()
                        };
                        d.$AdStatsBehavior8 = function() {
                            this.$AdStatsBehavior4 = 0, this.$AdStatsBehavior5 = 0, this.$AdStatsBehavior6 = 0
                        };
                        d.$AdStatsBehavior7 = function() {
                            var a = b("getTime")();
                            this.$AdStatsBehavior4 > 0 && (this.$AdStatsBehavior1 += a - this.$AdStatsBehavior4);
                            this.$AdStatsBehavior5 > 0 && (this.$AdStatsBehavior2 += a - this.$AdStatsBehavior5);
                            this.$AdStatsBehavior6 > 0 && (this.$AdStatsBehavior3 += a - this.$AdStatsBehavior6)
                        };
                        d.getPartiallyVisibleTime = function() {
                            if (this.$AdStatsBehavior4 > 0) {
                                var a = b("getTime")();
                                this.$AdStatsBehavior1 += a - this.$AdStatsBehavior4;
                                this.$AdStatsBehavior4 = a
                            }
                            return this.$AdStatsBehavior1
                        };
                        d.getMostlyVisibleTime = function() {
                            if (this.$AdStatsBehavior5 > 0) {
                                var a = b("getTime")();
                                this.$AdStatsBehavior2 += a - this.$AdStatsBehavior5;
                                this.$AdStatsBehavior5 = a
                            }
                            return this.$AdStatsBehavior2
                        };
                        d.getFullyVisibleTime = function() {
                            if (this.$AdStatsBehavior6 > 0) {
                                var a = b("getTime")();
                                this.$AdStatsBehavior3 += a - this.$AdStatsBehavior6;
                                this.$AdStatsBehavior6 = a
                            }
                            return this.$AdStatsBehavior3
                        };
                        return c
                    }(b("OnScreenBehavior.anweb"));
                    e.exports = a
                }), null);
                __d("getFullScreenElement", [], (function(a, b, c, d, e, f) {
                    function a() {
                        return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                    }
                    e.exports = a
                }), null);
                __d("AudienceNetworkHTMLVideoPlayer", ["getFullScreenElement"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a, b) {
                            b === void 0 && (b = !1), this.$1 = a, this.$2 = [], b || (this.$1.volume = 1, this.$1.muted = !1)
                        }
                        var c = a.prototype;
                        c.addEventListener = function(a, b, c) {
                            this.$2.push({
                                type: a,
                                listener: b,
                                optionsOrUseCapture: c
                            }), this.$1.addEventListener(a, b, c)
                        };
                        c.enforcesContinuity = function() {
                            return !1
                        };
                        c.exitFullscreen = function() {
                            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
                        };
                        c.getCurrentTime = function() {
                            return this.$1.currentTime
                        };
                        c.getDuration = function() {
                            return this.$1.duration
                        };
                        c.getError = function() {
                            return this.$1.error
                        };
                        c.getVideoSlot = function() {
                            return this.$1
                        };
                        c.getVolume = function() {
                            return this.$1.volume
                        };
                        c.getPlaybackRate = function() {
                            return this.$1.playbackRate
                        };
                        c.isFullscreen = function() {
                            if (this.$1.webkitDisplayingFullscreen) return !0;
                            var a = b("getFullScreenElement")();
                            a = a === this.$1;
                            if (a) return !0;
                            a = /iPhone OS (9_|8_|7_)|iPod/;
                            return a.test(navigator.userAgent) && !(this.$1 instanceof HTMLVideoElement) && !this.$1.paused ? !0 : !1
                        };
                        c.isMuted = function() {
                            return this.$1.muted
                        };
                        c.isPaused = function() {
                            return this.$1.paused
                        };
                        c.pause = function() {
                            this.$1.pause()
                        };
                        c.play = function() {
                            this.$1.play()
                        };
                        c.remove = function() {
                            this.$1.parentNode && this.$1.parentNode.removeChild(this.$1)
                        };
                        c.requestFullscreen = function() {
                            var a = this.$1;
                            a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
                        };
                        c.removeEventListener = function(a, b, c) {
                            this.$1.removeEventListener(a, b, c)
                        };
                        c.setSrc = function(a) {
                            this.$1.setAttribute ? this.$1.setAttribute("src", a) : this.$1.src = a
                        };
                        c.getSrc = function() {
                            return this.$1.getAttribute ? this.$1.getAttribute("src") : this.$1.src
                        };
                        c.setVolume = function(a) {
                            this.setMuted(a <= 0), this.$1.volume = a
                        };
                        c.setMuted = function(a) {
                            this.$1.muted = a
                        };
                        c.cleanup = function() {
                            var a = this;
                            ES(this.$2, "forEach", !0, function(b) {
                                a.removeEventListener(b.type, b.listener, b.optionsOrUseCapture)
                            })
                        };
                        c.$3 = function() {
                            if (this.$1.getBoundingClientRect) return this.$1.getBoundingClientRect();
                            else if (this.$1.parentNode && this.$1.parentNode.getBoundingClientRect) return this.$1.parentNode.getBoundingClientRect();
                            return null
                        };
                        c.getWidth = function() {
                            var a = this.$3();
                            return a ? a.width : null
                        };
                        c.getHeight = function() {
                            var a = this.$3();
                            return a ? a.height : null
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANVideoStateUtils", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = .05,
                        h = .5,
                        i = 2,
                        j = .25,
                        k = .5,
                        l = .05;

                    function a() {
                        return {
                            isAudible: !0,
                            isPaused: !1,
                            isFullScreen: !1,
                            isContinuous: !0,
                            clockTimeMs: 0,
                            videoTime: 0,
                            loggingTimeInterval: 0,
                            volume: 0,
                            playbackRate: 1,
                            videoDuration: 0,
                            forceFlushLog: !1
                        }
                    }

                    function b(a, b) {
                        if (b || a < g) return !1;
                        else return !0
                    }

                    function c(a, b, c, d, e) {
                        __p && __p();
                        var f = d - a.videoTime;
                        if (f < 0) return !1;
                        if (e - d <= j && f <= j) return !0;
                        if (a.isPaused && b && a.videoTime > 0) return f <= l;
                        if (a.videoTime <= 0 || a.isPaused || b) return f <= k;
                        e = (c - a.clockTimeMs) / 1e3;
                        if (e <= l && f <= l) return !0;
                        d = f / e;
                        return d < i && d >= h
                    }
                    e.exports = {
                        isAudible: b,
                        isContinuous: c,
                        initState: a
                    }
                }), null);
                __d("BaseXDomainScreenMeasurement.adquality", ["AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "Rectangle.adquality", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(b, c) {
                            var d;
                            d = a.call(this, b, c) || this;
                            d.$BaseXDomainScreenMeasurement1 = b;
                            d.$BaseXDomainScreenMeasurement3 = c;
                            d.$BaseXDomainScreenMeasurement2 = ES(navigator.platform, "indexOf", !0, "Mac") > -1;
                            return d
                        }
                        var d = c.prototype;
                        d.__getAdOffset = function() {
                            throw new Error("Not implemented")
                        };
                        d.__isDocumentHidden = function() {
                            return document.hidden === !0
                        };
                        d.getMeasurement = function(a) {
                            __p && __p();
                            var c = b("Rectangle.adquality").RectangleFromClientRect(this.$BaseXDomainScreenMeasurement1.getBoundingClientRect()),
                                d = b("nullthrows")(b("Rectangle.adquality").RectangleFromWindow(this.$BaseXDomainScreenMeasurement3));
                            if (this.__isDocumentHidden()) {
                                a(new(b("AdQualityMeasurementResult.adquality"))({
                                    ar: b("Rectangle.adquality").RectangleZero(),
                                    vd: this.__viewabilityDetection,
                                    vr: b("Rectangle.adquality").RectangleZero()
                                }));
                                return
                            }
                            c = c.intersection(d);
                            if (!c) {
                                a(new(b("AdQualityMeasurementResult.adquality"))({
                                    ar: b("Rectangle.adquality").RectangleZero(),
                                    vd: this.__viewabilityDetection,
                                    vr: b("Rectangle.adquality").RectangleZero()
                                }));
                                return
                            }
                            d = this.__getAdOffset();
                            if (!d) {
                                a(b("AdQualityMeasurementResult.adquality").unknownResult(this.__viewabilityDetection, this.__viewabilityDetection + "-no-offset"));
                                return
                            }
                            var e = d.x;
                            d = d.y;
                            e = c.offset(e, d).intersection(b("Rectangle.adquality").RectangleFromViewport(this.$BaseXDomainScreenMeasurement3));
                            a(new(b("AdQualityMeasurementResult.adquality"))({
                                ar: c,
                                vd: this.__viewabilityDetection,
                                vr: e || b("Rectangle.adquality").RectangleZero()
                            }))
                        };
                        return c
                    }(b("AdQualityMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("IEXDomainScreenMeasurement.adquality", ["AdQualityMeasurementResult.adquality", "AdQualityUtils.adquality", "BaseXDomainScreenMeasurement.adquality", "HTMLElementFrameContext.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("AdQualityUtils.adquality").isIE11;

                    function h(a, b, c) {
                        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
                    }
                    var i = 11;
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(c, d) {
                            __p && __p();
                            var e;
                            e = a.call(this, c, d) || this;
                            e.$IEXDomainScreenMeasurement1 = null;
                            e.__viewabilityDetection = "ie-m";
                            c = new(b("HTMLElementFrameContext.adquality"))(c, d);
                            e.$IEXDomainScreenMeasurement3 = c.isCrossDomain();
                            if (!e.isAvailable()) return babelHelpers.assertThisInitialized(e);
                            d = c.parentWindow;
                            if (!d) return babelHelpers.assertThisInitialized(e);
                            c = d.document.documentElement;
                            if (!c) return babelHelpers.assertThisInitialized(e);
                            e.$IEXDomainScreenMeasurement4 = c;
                            h(e.$IEXDomainScreenMeasurement4, "click", function(b) {
                                b = b || window.event;
                                if (b.target !== e.$IEXDomainScreenMeasurement4) return !0;
                                b.preventDefault();
                                b.stopPropagation();
                                e.$IEXDomainScreenMeasurement1 = {
                                    x: b.screenX - b.clientX,
                                    y: b.screenY - b.clientY + i
                                };
                                b = e.$IEXDomainScreenMeasurement2;
                                b && (a.prototype.getMeasurement.call(babelHelpers.assertThisInitialized(e), b), e.$IEXDomainScreenMeasurement2 = null);
                                return !1
                            });
                            return e
                        }
                        var d = c.prototype;
                        d.isAvailable = function() {
                            return !this.$IEXDomainScreenMeasurement3 ? !1 : g()
                        };
                        d.getMeasurement = function(a) {
                            var c = this.$IEXDomainScreenMeasurement2,
                                d = this.$IEXDomainScreenMeasurement4;
                            !d ? a(b("AdQualityMeasurementResult.adquality").unknownResult(this.__viewabilityDetection, this.__viewabilityDetection + "-na")) : (c && c(b("AdQualityMeasurementResult.adquality").unknownResult(this.__viewabilityDetection, this.__viewabilityDetection + "-no-click")), this.$IEXDomainScreenMeasurement2 = a, d.click())
                        };
                        d.__getAdOffset = function() {
                            return this.$IEXDomainScreenMeasurement1
                        };
                        return c
                    }(b("BaseXDomainScreenMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("InstantArticleMeasurement.adquality", ["AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "Rectangle.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 24,
                        h = 2,
                        i = window.performance;
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(b, c) {
                            c = a.call(this, b, c) || this;
                            c.$InstantArticleMeasurement1 = b;
                            c.__viewabilityDetection = "ia";
                            return c
                        }
                        var d = c.prototype;
                        d.isAvailable = function() {
                            var a = navigator.userAgent.toLowerCase();
                            a = /fbia\/fb4a/.test(a);
                            return i && a
                        };
                        d.$InstantArticleMeasurement2 = function(a) {
                            if (!("now" in i)) return;
                            var b = !1,
                                c = 0,
                                d = i.now(),
                                e = function e(f) {
                                    c !== h && !b && window.requestAnimationFrame(e), c === h && !b && (b = !0, a(f - d < g)), d = f, c++
                                };
                            window.requestAnimationFrame(e);
                            window.setTimeout(function() {
                                b || (b = !0, a(!1))
                            }, g * 3)
                        };
                        d.getMeasurement = function(a) {
                            var c = this;
                            this.$InstantArticleMeasurement2(function(d) {
                                var e = new(b("Rectangle.adquality"))(0, 0, c.$InstantArticleMeasurement1.clientWidth, c.$InstantArticleMeasurement1.clientHeight);
                                a(new(b("AdQualityMeasurementResult.adquality"))({
                                    ar: e,
                                    vd: c.__viewabilityDetection,
                                    vr: d ? e : b("Rectangle.adquality").RectangleZero()
                                }))
                            })
                        };
                        return c
                    }(b("AdQualityMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("MozInnerScreenMeasurement.adquality", ["AdQualityUtils.adquality", "BaseXDomainScreenMeasurement.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("AdQualityUtils.adquality").getFirefoxVersion;
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(b, a);

                        function b(b, c) {
                            b = a.call(this, b, c) || this;
                            b.__viewabilityDetection = "moz-is";
                            return b
                        }
                        var c = b.prototype;
                        c.isAvailable = function() {
                            var a = g();
                            return typeof a === "number" && a >= 3
                        };
                        c.__getAdOffset = function() {
                            var a = this.__parentWindow,
                                b = a.mozInnerScreenX;
                            a = a.mozInnerScreenY;
                            return b === void 0 || a === void 0 ? null : {
                                x: b,
                                y: a
                            }
                        };
                        return b
                    }(b("BaseXDomainScreenMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("BaseBeaconXMeasurement.adquality", ["AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "Rectangle.adquality", "SimplePromise.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 4,
                        h = 1;

                    function i(a) {
                        for (var b = a.length; b > 0;) {
                            var c = Math.floor(Math.random() * b--),
                                d = a[b];
                            a[b] = a[c];
                            a[c] = d
                        }
                        return a
                    }
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(b, c) {
                            c = a.call(this, b, c) || this;
                            c.$BaseBeaconXMeasurement1 = b;
                            c.$BaseBeaconXMeasurement2 = [];
                            c.$BaseBeaconXMeasurement3 = [];
                            c.$BaseBeaconXMeasurement4 = [];
                            c.$BaseBeaconXMeasurement5 = {};
                            return c
                        }
                        var d = c.prototype;
                        d.destroy = function() {
                            var a = this;
                            ES(this.$BaseBeaconXMeasurement2, "forEach", !0, function(b) {
                                a.$BaseBeaconXMeasurement1.removeChild(b)
                            })
                        };
                        d.isAvailable = function() {
                            return !0
                        };
                        d.getMeasurement = function(a) {
                            __p && __p();
                            var c = this,
                                d = i([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
                                e = i([].concat(d));
                            d = ES(d, "map", !0, function(a, b) {
                                return {
                                    x: a,
                                    y: e[b]
                                }
                            });
                            var f = [],
                                g = [];
                            ES(d, "forEach", !0, function(a) {
                                a.x === 0 || a.y === 0 || a.x === 10 || a.y === 10 ? f.push(a) : g.push(a)
                            });
                            var h = ES(f, "map", !0, function(a) {
                                return c.__detectViewability(a)
                            });
                            b("SimplePromise.adquality").all(h).then(function(d) {
                                __p && __p();
                                d = d.reduce(function(a, b) {
                                    return a + (b === "1" ? 1 : 0)
                                }, 0);
                                if (d === h.length) {
                                    a(c.$BaseBeaconXMeasurement6(1));
                                    return
                                }
                                d = [].concat(h, ES(g, "map", !0, function(a) {
                                    return c.__detectViewability(a)
                                }));
                                b("SimplePromise.adquality").all(d).then(function(b) {
                                    b = b.reduce(function(a, b) {
                                        return a + (b === "1" ? 1 : 0)
                                    }, 0);
                                    b = Math.min(Math.max(-.05 + b * .1, 0), 1);
                                    a(c.$BaseBeaconXMeasurement6(b))
                                })
                            })
                        };
                        d.$BaseBeaconXMeasurement6 = function(a) {
                            var c = this.$BaseBeaconXMeasurement1,
                                d = a <= 0 ? 0 : c.clientWidth;
                            return new(b("AdQualityMeasurementResult.adquality"))({
                                ar: new(b("Rectangle.adquality"))(0, 0, c.clientWidth, c.clientHeight),
                                vd: this.__viewabilityDetection,
                                vr: new(b("Rectangle.adquality"))(0, 0, d, c.clientHeight * a)
                            })
                        };
                        d.__detectViewability = function(a) {
                            var d = this,
                                e = a.x,
                                f = a.y;
                            return new(b("SimplePromise.adquality"))(function(a, b) {
                                var g = d.$BaseBeaconXMeasurement1.clientWidth,
                                    h = d.$BaseBeaconXMeasurement1.clientHeight;
                                d.$BaseBeaconXMeasurement7().then(function(b) {
                                    b.style.left = Math.floor(e * g * .1) - c.BEACON_SIZE / 2 + "px", b.style.top = Math.floor(f * h * .1) - c.BEACON_SIZE / 2 + "px", d.__checkVisibility(b).then(function(c) {
                                        a(c ? "1" : "0");
                                        c = d.$BaseBeaconXMeasurement4.shift();
                                        c ? c(b) : d.$BaseBeaconXMeasurement3.push(b)
                                    })
                                })
                            })
                        };
                        d.__checkVisibility = function(a) {
                            throw new Error("Implement __checkVisibility in the subclass")
                        };
                        d.$BaseBeaconXMeasurement8 = function() {
                            var a = navigator.userAgent;
                            return /iPhone|iPod/.test(a) ? h : g
                        };
                        d.$BaseBeaconXMeasurement7 = function() {
                            __p && __p();
                            var a = this;
                            return new(b("SimplePromise.adquality"))(function(b, d) {
                                __p && __p();
                                var e = a.$BaseBeaconXMeasurement3.pop();
                                if (e) {
                                    b(e);
                                    return
                                }
                                if (a.$BaseBeaconXMeasurement2.length < a.$BaseBeaconXMeasurement8()) {
                                    e = a.__setUpBeacon(0);
                                    e.style.position = "absolute";
                                    e.style.display = "block";
                                    e.style.zIndex = "-99999";
                                    e.style.border = "none";
                                    e.style.width = c.BEACON_SIZE + "px";
                                    e.style.height = c.BEACON_SIZE + "px";
                                    a.$BaseBeaconXMeasurement1.appendChild(e);
                                    a.$BaseBeaconXMeasurement2.push(e);
                                    e.addEventListener("load", function() {
                                        a.__checkVisibility(e).then(function(a) {
                                            b(e)
                                        })
                                    }, !1);
                                    return
                                }
                                a.$BaseBeaconXMeasurement4.push(b)
                            })
                        };
                        d.__setUpBeacon = function(a) {
                            throw new Error("Implement __setUpBeacon in the subclass")
                        };
                        return c
                    }(b("AdQualityMeasurement.adquality"));
                    a.BEACON_SIZE = 2;
                    e.exports = a
                }), null);
                __d("RafBeaconMeasurement.adquality", ["AdQualityMeasurementResult.adquality", "AdQualityUtils.adquality", "BaseBeaconXMeasurement.adquality", "HTMLElementFrameContext.adquality", "SimplePromise.adquality", "ViewabilitySettings"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("AdQualityUtils.adquality").getChromeVersion,
                        h = b("AdQualityUtils.adquality").getFirefoxVersion,
                        i = b("AdQualityUtils.adquality").getSafariVersion,
                        j = b("AdQualityUtils.adquality").isEdge,
                        k = 36,
                        l = 2,
                        m = 4;
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(c, d) {
                            __p && __p();
                            var e;
                            e = a.call(this, c, d) || this;
                            e.$RafBeaconMeasurement5 = function(a) {
                                var b = a.data;
                                a = a.origin;
                                try {
                                    if (a !== null && a !== "null") return;
                                    a = ES("JSON", "parse", !1, b);
                                    b = e.$RafBeaconMeasurement4[a.id];
                                    b && b(a.iv)
                                } catch (a) {}
                            };
                            e.$RafBeaconMeasurement9 = function(a) {
                                ES(e.$RafBeaconMeasurement7, "forEach", !0, function(b) {
                                    return b(a)
                                }), e.$RafBeaconMeasurement7 = [], e.$RafBeaconMeasurement6 = !1
                            };
                            e.$RafBeaconMeasurement1 = c;
                            e.$RafBeaconMeasurement2 = !!i();
                            e.__viewabilityDetection = "raf";
                            e.$RafBeaconMeasurement8 = 0;
                            e.$RafBeaconMeasurement3 = new(b("HTMLElementFrameContext.adquality"))(c, d).isSafeframe();
                            e.$RafBeaconMeasurement6 = !1;
                            e.$RafBeaconMeasurement7 = [];
                            e.isAvailable() && window.addEventListener("message", e.$RafBeaconMeasurement5);
                            e.$RafBeaconMeasurement4 = {};
                            return e
                        }
                        var d = c.prototype;
                        d.destroy = function() {
                            window.removeEventListener("message", this.$RafBeaconMeasurement5), a.prototype.destroy.call(this)
                        };
                        d.isAvailable = function() {
                            __p && __p();
                            if (!a.prototype.isAvailable.call(this)) return !1;
                            if (this.$RafBeaconMeasurement3) return !1;
                            if (j()) return !1;
                            var b = navigator.userAgent.toLowerCase(),
                                c;
                            if (c = h()) return c >= 40 && c < 49;
                            if (c = i()) return c >= 9;
                            var d = b.match(/crios\/(\d+)/);
                            if (d) {
                                d = parseInt(d[1], 10);
                                return d >= 48
                            }
                            d = /fbios/.test(b);
                            if (d) return !0;
                            return (c = g()) ? c >= 52 : !1
                        };
                        d.getMeasurement = function(c) {
                            var d = this;
                            this.$RafBeaconMeasurement7.push(c);
                            if (this.$RafBeaconMeasurement6) return;
                            this.$RafBeaconMeasurement6 = !0;
                            b("ViewabilitySettings").raf_safari_fix && this.$RafBeaconMeasurement2 ? this.__checkSupportsSafari().then(function(c) {
                                c ? a.prototype.getMeasurement.call(d, d.$RafBeaconMeasurement9) : d.$RafBeaconMeasurement9(b("AdQualityMeasurementResult.adquality").unknownResult(d.__viewabilityDetection, "raf-safari"))
                            }) : a.prototype.getMeasurement.call(this, this.$RafBeaconMeasurement9)
                        };
                        d.__checkSupportsSafari = function() {
                            var a = this;
                            if (this.$RafBeaconMeasurement8 >= m) return b("SimplePromise.adquality").resolve(!0);
                            else if (this.$RafBeaconMeasurement8 <= -m) return b("SimplePromise.adquality").resolve(!1);
                            return new(b("SimplePromise.adquality"))(function(b, c) {
                                a.__detectViewability({
                                    x: -1e3,
                                    y: -1e3
                                }).then(function(c) {
                                    a.$RafBeaconMeasurement8 += c === "0" ? 1 : -1, b(c === "0")
                                })
                            })
                        };
                        d.__setUpBeacon = function(a) {
                            __p && __p();
                            a = document.createElement("iframe");
                            a.sandbox = "allow-scripts";
                            var b = function() {
                                __p && __p();
                                var a = 2,
                                    b = null;
                                window.isVisible = function(c, d) {
                                    var e = !1,
                                        f = 0,
                                        g = function g(h) {
                                            if (e) return;
                                            else f < a ? b = window.requestAnimationFrame(g) : (e = !0, d.postMessage('{"id": "' + c + '", "iv": true}', "*"));
                                            f++
                                        };
                                    g()
                                };
                                window.addEventListener("message", function(a) {
                                    window.cancelAnimationFrame(b), a.data !== "failed" && window.isVisible(a.data, a.source)
                                })
                            }.toString();
                            a.setAttribute("srcdoc", "<script>var __p;(" + b + ")();</script>");
                            return a
                        };
                        d.__checkVisibility = function(a) {
                            __p && __p();
                            var c = this,
                                d = Math.random() + "";
                            return new(b("SimplePromise.adquality"))(function(b, e) {
                                var f = a.contentWindow;
                                f.postMessage(d, "*");
                                var g = window.setTimeout(function() {
                                    f.postMessage("failed", "*");
                                    var a = c.$RafBeaconMeasurement4[d];
                                    a && a(!1)
                                }, k * l);
                                c.$RafBeaconMeasurement4[d] = function(a) {
                                    delete c.$RafBeaconMeasurement4[d], window.clearTimeout(g), b(a)
                                }
                            })
                        };
                        return c
                    }(b("BaseBeaconXMeasurement.adquality"));
                    e.exports = a
                }), null);
                __d("AdQualityMeasurementUtils.adquality", ["GeometricMeasurement.adquality", "IEXDomainScreenMeasurement.adquality", "InstantArticleMeasurement.adquality", "IntersectionObserverMeasurement.adquality", "MozInnerScreenMeasurement.adquality", "RafBeaconMeasurement.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";

                    function a(a, c) {
                        return [new(b("InstantArticleMeasurement.adquality"))(a, c), new(b("GeometricMeasurement.adquality"))(a, c), new(b("MozInnerScreenMeasurement.adquality"))(a, c), new(b("RafBeaconMeasurement.adquality"))(a, c), new(b("IEXDomainScreenMeasurement.adquality"))(a, c), new(b("IntersectionObserverMeasurement.adquality"))(a, c)]
                    }
                    e.exports = {
                        getDefaultMeasurements: a
                    }
                }), null);
                __d("AdQualityTest.adquality", ["AdQualityStatistics.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a) {
                            this.$1 = !1, this.$2 = a, this.$3 = new(b("AdQualityStatistics.adquality"))(a.viewableRatio)
                        }
                        var c = a.prototype;
                        c.registerProgress = function(a, c, d, e) {
                            __p && __p();
                            if (this.$1) return;
                            this.$3.registerProgress(a, c);
                            d = this.$3.getData().minViewableRatio || 0;
                            if (this.$2.continuous && (!c.getIsContinuous() || d < this.$2.viewableRatio)) {
                                this.$3 = new(b("AdQualityStatistics.adquality"))(this.$2.viewableRatio);
                                return
                            }
                            e = this.$3.getData().viewableSeconds || 0;
                            e >= this.$2.viewableSeconds && c.isConclusive() && this.$4(c)
                        };
                        c.$4 = function(a) {
                            this.$1 = !0, this.$2.adQualityTestConditionTrueCallback({
                                measurementResult: a,
                                statistics: this.$3.getData(),
                                lastLoggingTime: 0,
                                currentLoggingTime: 0,
                                adQualityTestFinalCallback: null
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdQualityVideoDynamicIntervalTest.adquality", ["AdQualityStatistics.adquality", "AdQualityTest.adquality", "ANVideoStateUtils"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 5;
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(c) {
                            var d;
                            d = a.call(this, c) || this;
                            d.$AdQualityVideoDynamicIntervalTest2 = {
                                lastViewableRatio: 0,
                                lastLoggingTime: 0,
                                lastStateUpdateTime: 0,
                                lastStatisticsData: new(b("AdQualityStatistics.adquality"))(0).getData(),
                                lastMonitoringState: b("ANVideoStateUtils").initState(),
                                isInitialized: !1
                            };
                            var e = c.viewableRatio,
                                f = c.adQualityTestConditionTrueCallback;
                            c = c.adQualityTestFinalCallback;
                            d.$AdQualityVideoDynamicIntervalTest1 = new(b("AdQualityStatistics.adquality"))(e);
                            d.$AdQualityVideoDynamicIntervalTest3 = f;
                            d.$AdQualityVideoDynamicIntervalTest4 = c ? c : function() {};
                            return d
                        }
                        var d = c.prototype;
                        d.registerProgress = function(a, b, c, d) {
                            a = !0;
                            while (a) {
                                c = this.$AdQualityVideoDynamicIntervalTest2;
                                c = this.$AdQualityVideoDynamicIntervalTest5(d, c, b);
                                this.$AdQualityVideoDynamicIntervalTest2 = c.state;
                                a = c.checkLogForNextInterval
                            }
                        };
                        d.$AdQualityVideoDynamicIntervalTest5 = function(a, b, c) {
                            __p && __p();
                            var d = a.videoDuration,
                                e = a.videoTime,
                                f = a.loggingTimeInterval,
                                g = a.isContinuous,
                                h = a.isPaused,
                                i = b.lastLoggingTime,
                                j = b.lastStateUpdateTime,
                                k = this.$AdQualityVideoDynamicIntervalTest1.getViewableRatio(),
                                l = b.lastStatisticsData.curViewableRatio !== null && b.lastStatisticsData.curViewableRatio !== void 0 ? b.lastStatisticsData.curViewableRatio : 0,
                                m = c.getViewableRatio();
                            m = m !== null && m !== void 0 ? m : 0;
                            m = Math.min(m, l) < k && Math.max(m, l) >= k && i != j;
                            l = e >= d;
                            k = this.$AdQualityVideoDynamicIntervalTest2.isInitialized ? i : e - f;
                            d = this.$AdQualityVideoDynamicIntervalTest6(a, j, i, m, l);
                            j = m && (!g || h || l) && k != e;
                            h = this.$AdQualityVideoDynamicIntervalTest7(a, d, f, c, m, j);
                            l = h.preCallbackAction;
                            f = h.postCallbackAction;
                            l();
                            d ? k = this.$AdQualityVideoDynamicIntervalTest8(i, a, m, b, c, j) : j || this.$AdQualityVideoDynamicIntervalTest4();
                            f();
                            return {
                                state: {
                                    lastLoggingTime: g ? k : e,
                                    lastStateUpdateTime: e,
                                    lastStatisticsData: ES("Object", "assign", !1, {}, this.$AdQualityVideoDynamicIntervalTest1.getData()),
                                    lastMonitoringState: a,
                                    isInitialized: !0
                                },
                                checkLogForNextInterval: j
                            }
                        };
                        d.$AdQualityVideoDynamicIntervalTest9 = function(a, b) {
                            var c = a.loggingTimeInterval,
                                d = a.volume,
                                e = a.isContinuous;
                            a = a.playbackRate;
                            this.$AdQualityVideoDynamicIntervalTest1.registerVolume(c, d, e);
                            this.$AdQualityVideoDynamicIntervalTest1.registerPlaybackRate(c, a);
                            this.$AdQualityVideoDynamicIntervalTest1.registerProgress(c, b)
                        };
                        d.$AdQualityVideoDynamicIntervalTest7 = function(a, b, c, d, e, f) {
                            var g = this,
                                h = this.$AdQualityVideoDynamicIntervalTest10(e, a.isContinuous);
                            c = function() {
                                h || g.$AdQualityVideoDynamicIntervalTest9(a, d)
                            };
                            e = function() {
                                b && g.$AdQualityVideoDynamicIntervalTest1.resetNonContinuousStatistics(), h && !f && g.$AdQualityVideoDynamicIntervalTest9(a, d)
                            };
                            return {
                                preCallbackAction: c,
                                postCallbackAction: e
                            }
                        };
                        d.$AdQualityVideoDynamicIntervalTest8 = function(a, b, c, d, e, f) {
                            var g = d.lastStateUpdateTime;
                            d = d.lastStatisticsData;
                            var h = b.videoTime;
                            b = b.isContinuous;
                            g = this.$AdQualityVideoDynamicIntervalTest10(c, b) ? g : h;
                            c = c ? d : this.$AdQualityVideoDynamicIntervalTest1.getData();
                            d = f ? null : this.$AdQualityVideoDynamicIntervalTest4();
                            this.$AdQualityVideoDynamicIntervalTest3({
                                statistics: c,
                                lastLoggingTime: a,
                                currentLoggingTime: g,
                                measurementResult: e,
                                adQualityTestFinalCallback: d,
                                results: {
                                    complete: !1,
                                    passed: !0
                                }
                            });
                            return b ? g : h
                        };
                        d.$AdQualityVideoDynamicIntervalTest6 = function(a, b, c, d, e) {
                            var f = a.videoTime;
                            return f === c ? !1 : e || (this.$AdQualityVideoDynamicIntervalTest10(d, a.isContinuous) || a.isPaused) && c != b || f - c >= g || a.forceFlushLog
                        };
                        d.$AdQualityVideoDynamicIntervalTest10 = function(a, b) {
                            return a || !b
                        };
                        return c
                    }(b("AdQualityTest.adquality"));
                    e.exports = a
                }), null);
                __d("AdQualityRules.adquality", ["AdQualityTest.adquality", "AdQualityVideoDynamicIntervalTest.adquality"], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = {
                        videoTimeEvent: function(a, c) {
                            return {
                                continuous: !0,
                                adQualityTestConditionTrueCallback: a,
                                adQualityTestFinalCallback: c,
                                viewableRatio: .5,
                                viewableSeconds: 0,
                                createTest: function(a) {
                                    return new(b("AdQualityVideoDynamicIntervalTest.adquality"))(a)
                                }
                            }
                        },
                        mrc: function(a) {
                            return {
                                continuous: !0,
                                adQualityTestConditionTrueCallback: a,
                                adQualityTestFinalCallback: null,
                                viewableRatio: .5,
                                viewableSeconds: 2,
                                createTest: function(a) {
                                    return new(b("AdQualityTest.adquality"))(a)
                                }
                            }
                        },
                        viewableImpression: function(a) {
                            return {
                                continuous: !1,
                                adQualityTestConditionTrueCallback: a,
                                adQualityTestFinalCallback: null,
                                viewableRatio: 1e-7,
                                viewableSeconds: .001,
                                createTest: function(a) {
                                    return new(b("AdQualityTest.adquality"))(a)
                                }
                            }
                        }
                    };
                    e.exports = a
                }), null);
                __d("Env", [], (function(a, b, c, d, e, f) {
                    b = {
                        ajaxpipe_token: null,
                        compat_iframe_token: null,
                        iframeKey: "",
                        iframeTarget: "",
                        iframeToken: "",
                        isCQuick: !1,
                        start: ES("Date", "now", !1),
                        nocatch: !1
                    };
                    a.Env && ES("Object", "assign", !1, b, a.Env);
                    a.Env = b;
                    e.exports = b
                }), null);
                __d("TAALOpcodes", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = {
                        PREVIOUS_FILE: 1,
                        PREVIOUS_FRAME: 2,
                        PREVIOUS_DIR: 3,
                        FORCED_KEY: 4
                    };
                    e.exports = a
                }), null);
                __d("TAAL", ["TAALOpcodes"], (function(a, b, c, d, e, f) {
                    "use strict";
                    a = {
                        blameToPreviousFile: function(a) {
                            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FILE])
                        },
                        blameToPreviousFrame: function(a) {
                            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FRAME])
                        },
                        blameToPreviousDirectory: function(a) {
                            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_DIR])
                        },
                        applyOpcodes: function(a, b) {
                            return b && b.length ? a + " TAAL[" + b.join(";") + "]" : a
                        }
                    };
                    e.exports = a
                }), null);
                __d("ErrorSerializer", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();

                    function b(a) {
                        return "<![EX[" + ES("JSON", "stringify", !1, h(a)) + "]]>"
                    }

                    function c(a) {
                        __p && __p();
                        try {
                            var b = l(a, /^([\s\S]*)<\!\[EX\[(\[.*\])\]\]>([\s\S]*)$/);
                            if (!b) return k(a);
                            var c = b[0],
                                d = b[1];
                            b = b[2];
                            d = ES("JSON", "parse", !1, d);
                            var e = d[0];
                            d = d.slice(1);
                            e = k(e);
                            e.message = c + e.message + b;
                            d && d.length > 0 && (e.params = d);
                            return e
                        } catch (b) {
                            return {
                                message: "Unable to parse error message %s because %s",
                                params: [a, b.message]
                            }
                        }
                    }

                    function g(a) {
                        var b = a.message || "",
                            c = a.params || [],
                            d = 0;
                        a = b.replace(/%s/g, function() {
                            return d < c.length ? String(c[d++]) : "NOPARAM"
                        });
                        d < c.length && (a += " PARAMS" + ES("JSON", "stringify", !1, c.slice(d)));
                        return a
                    }

                    function d(a) {
                        return g(a) + i(a)
                    }

                    function h(a) {
                        return [a.message + i(a)].concat(j(a))
                    }

                    function i(a) {
                        var b = a.taalOpcodes;
                        a = a.forcedKey;
                        var c = [];
                        b && c.push.apply(c, b);
                        a && c.push("4" + a.replace(/[^\d\w]/g, "_"));
                        return c.length > 0 ? " TAAL[" + c.join(";") + "]" : ""
                    }

                    function j(a) {
                        return ES((a = a.params) != null ? a : [], "map", !0, function(a) {
                            return String(a)
                        })
                    }

                    function k(a) {
                        __p && __p();
                        var b = l(a, /^([\s\S]*) TAAL\[(.*)\]$/);
                        b = (b = b) != null ? b : [a, null];
                        var c = b[0];
                        b = b[1];
                        c = {
                            message: c
                        };
                        if (b) {
                            var d = [];
                            for (var b = b.split(";"), e = ES("Array", "isArray", !1, b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var g;
                                if (e) {
                                    if (f >= b.length) break;
                                    g = b[f++]
                                } else {
                                    f = b.next();
                                    if (f.done) break;
                                    g = f.value
                                }
                                g = g;
                                if (g === "1" || g === "2" || g === "3") d.push(parseInt(g, 10));
                                else if (g[0] === "4" && g.length > 1) c.forcedKey = g.substring(1);
                                else return {
                                    message: a
                                }
                            }
                            d.length > 0 && (c.taalOpcodes = d)
                        }
                        return c
                    }

                    function l(a, b) {
                        if (typeof a === "string") {
                            a = a.match(b);
                            if (a && a.length > 0) return a.slice(1)
                        }
                    }
                    e.exports = a.ErrorSerializer = {
                        parse: c,
                        stringify: b,
                        toFormattedMessage: d,
                        toFormattedMessageNoTAAL: g,
                        toMessageWithParams: h
                    }
                }), 3);
                __d("ex", ["ErrorSerializer"], (function(a, b, c, d, e, f) {
                    function a(a) {
                        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                        var f = ES(d, "map", !0, function(a) {
                            return String(a)
                        });
                        return b("ErrorSerializer").stringify({
                            message: a,
                            params: f
                        })
                    }
                    e.exports = a
                }), null);
                __d("sprintf", [], (function(a, b, c, d, e, f) {
                    function a(a) {
                        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                        var e = 0;
                        return a.replace(/%s/g, function() {
                            return String(c[e++])
                        })
                    }
                    e.exports = a
                }), null);
                __d("invariant", ["Env", "TAAL", "ex", "sprintf"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("ex");

                    function a(a, c) {
                        __p && __p();
                        if (!a) {
                            var d = c;
                            for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), i = 2; i < e; i++) f[i - 2] = arguments[i];
                            if (typeof d === "number") {
                                var j = h(d, f),
                                    k = j.message,
                                    l = j.decoderLink;
                                d = k;
                                f.unshift(l)
                            } else if (d === void 0) {
                                d = "Invariant: ";
                                for (var m = 0; m < f.length; m++) d += "%s,"
                            }
                            d = b("TAAL").blameToPreviousFrame(d);
                            var n = new Error(g.apply(void 0, [d].concat(f)));
                            n.name = "Invariant Violation";
                            n.messageWithParams = [d].concat(f);
                            throw n
                        }
                    }

                    function h(a, c) {
                        var d = "Minified invariant #" + a + "; %s";
                        c.length > 0 && (d += " Params: " + ES(c, "map", !0, function(a) {
                            return "%s"
                        }).join(", "));
                        a = b("Env").show_invariant_decoder === !0 ? "visit " + i(a, c) + " to see the full message." : "";
                        return {
                            message: d,
                            decoderLink: a
                        }
                    }

                    function i(a, b) {
                        a = "https://our.intern.facebook.com/intern/invariant/" + a + "/";
                        b.length > 0 && (a += "?" + ES(b, "map", !0, function(a, b) {
                            return "args[" + b + "]=" + encodeURIComponent(String(a))
                        }).join("&"));
                        return a
                    }
                    e.exports = a
                }), null);
                __d("AudienceNetworkVideoMonitor", ["invariant", "AdQualityManager.adquality", "AdQualityMeasurementUtils.adquality", "AdQualityRules.adquality", "ANVideoStateUtils", "HTMLElementFrameContext.adquality"], (function(a, b, c, d, e, f, g) {
                    __p && __p();
                    a = function() {
                        "use strict";
                        __p && __p();

                        function a(a, c) {
                            this.$9 = 0, this.$1 = a, this.$2 = c, this.$5 = b("ANVideoStateUtils").initState(), this.$6 = 0, this.$7 = !1, this.$8 = null, this.$10 = !1
                        }
                        var c = a.prototype;
                        c.checkAndSendVideoTimeEvent = function(a) {
                            this.$11(a)
                        };
                        c.onSeeked = function() {
                            this.$10 = !0
                        };
                        c.getAdQualityManager = function() {
                            __p && __p();
                            var a = this;
                            if (this.$4) return this.$4;
                            var c = this.$1.getGatingConfig(),
                                d = this.$1.getViewabilityMeasurementElement();
                            this.$4 = new(b("AdQualityManager.adquality"))({
                                element: d,
                                parentWindow: window,
                                rules: [b("AdQualityRules.adquality").mrc(function(c) {
                                    var d = new(b("HTMLElementFrameContext.adquality"))(a.$1.getViewabilityMeasurementElement(), window);
                                    a.$2.logMRCEvent(c.statistics, a.$12().getCurrentTime() - 2, a.$12().getCurrentTime(), d, a.$1.getAdWidth(), a.$1.getAdHeight())
                                }), b("AdQualityRules.adquality").viewableImpression(function(c) {
                                    a.$2.logViewableImpressionEvent(c.statistics, Math.max(0, a.$12().getCurrentTime() - c.statistics.viewableSeconds), a.$12().getCurrentTime());
                                    var d = new(b("HTMLElementFrameContext.adquality"))(a.$1.getViewabilityMeasurementElement(), window);
                                    a.$2.logImpressionEvent(d, c.statistics.curViewableRatio, c.measurementResult.getViewabilityDetection(), c.measurementResult.getReason());
                                    a.$2.logMoatSivt()
                                }), b("AdQualityRules.adquality").videoTimeEvent(function(c) {
                                    var d = c.lastLoggingTime,
                                        e = c.currentLoggingTime,
                                        f = c.statistics,
                                        g = new(b("HTMLElementFrameContext.adquality"))(a.$1.getViewabilityMeasurementElement(), window),
                                        h = function() {
                                            c.adQualityTestFinalCallback && c.adQualityTestFinalCallback()
                                        };
                                    a.$2.logTimeEvent(d, e, g, f, a.$1.getAdWidth(), a.$1.getAdHeight(), h)
                                }, function() {
                                    --a.$9 === 0 && a.$8 && a.$8()
                                })],
                                gatingConfig: c,
                                measurementTests: b("AdQualityMeasurementUtils.adquality").getDefaultMeasurements(d, window)
                            });
                            return this.$4
                        };
                        c.getLogger = function() {
                            return this.$2
                        };
                        c.$12 = function() {
                            this.$3 || g(0, 2333);
                            return this.$3
                        };
                        c.startListening = function(a) {
                            this.$3 = a, this.$2.setPlayer(a), this.$12().addEventListener("ended", ES(this.$13, "bind", !0, this), !1), this.$12().addEventListener("timeupdate", ES(this.$11, "bind", !0, this, null), !1), this.$12().addEventListener("volumechange", ES(this.$14, "bind", !0, this), !1)
                        };
                        c.$13 = function() {
                            this.$9 === 0 && this.$8 && this.$8()
                        };
                        c.$15 = function() {
                            var a = this.$12().getVolume(),
                                c = this.$12().isMuted();
                            return b("ANVideoStateUtils").isAudible(a, c)
                        };
                        c.$14 = function() {
                            !this.$15() && this.$5.isAudible ? (this.$2.logMuteEvent(), this.$5.isAudible = !1) : this.$15() && !this.$5.isAudible && (this.$2.logUnMuteEvent(), this.$5.isAudible = !0)
                        };
                        c.readCurrentState = function() {
                            var a = this.$12().getCurrentTime(),
                                c = ES("Date", "now", !1),
                                d = this.$12().isPaused(),
                                e = !1;
                            this.$10 ? this.$10 = !1 : e = b("ANVideoStateUtils").isContinuous(this.$5, d, c, a, this.$12().getDuration());
                            return {
                                clockTimeMs: c,
                                videoTime: a,
                                isPaused: d,
                                isAudible: this.$15(),
                                isFullScreen: this.$12().isFullscreen(),
                                isContinuous: this.$12().enforcesContinuity() || e,
                                loggingTimeInterval: 0,
                                volume: this.$12().getVolume(),
                                playbackRate: this.$12().getPlaybackRate(),
                                videoDuration: this.$12().getDuration(),
                                forceFlushLog: !!this.$8
                            }
                        };
                        c.$11 = function(a) {
                            __p && __p();
                            a === void 0 && (a = null);
                            var b = this.$12().getDuration();
                            if (b <= 0) return;
                            a && (this.$8 = a);
                            var c = this.readCurrentState(),
                                d = ES("Object", "assign", !1, {}, this.$5);
                            this.$5.videoTime = c.videoTime;
                            this.$5.isPaused = c.isPaused;
                            this.$5.clockTimeMs = c.clockTimeMs;
                            this.$5.isContinuous = c.isContinuous;
                            var e = this.$12().getVolume(),
                                f = this.$12().getPlaybackRate(),
                                g = this.$12().isFullscreen(),
                                h = this.$15();
                            d = c.isContinuous ? c.videoTime - d.videoTime : 0;
                            this.$9++;
                            this.getAdQualityManager().registerProgress({
                                loggingTimeInterval: d,
                                volume: e,
                                playbackRate: f,
                                isFullScreen: g,
                                isContinuous: c.isContinuous,
                                isPaused: c.isPaused,
                                clockTimeMs: c.clockTimeMs,
                                videoTime: c.videoTime,
                                videoDuration: b,
                                isAudible: h,
                                forceFlushLog: !!a
                            })
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("MediationDetector", ["AMPContextLoader", "ANUtils", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var c = this;
                            this.$2 = function() {
                                __p && __p();
                                if (c.$1.getNestLevel() === 0) return "NONE";
                                for (var a = c.$1.ancestorIframes, d = ES("Array", "isArray", !1, a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var f;
                                    if (d) {
                                        if (e >= a.length) break;
                                        f = a[e++]
                                    } else {
                                        e = a.next();
                                        if (e.done) break;
                                        f = e.value
                                    }
                                    f = f;
                                    if (f.src) {
                                        f = b("ANUtils").extractDomain(f.src);
                                        if (f === c.$1.pageDomain) return "NONE"
                                    }
                                }
                                return null
                            };
                            this.$4 = function() {
                                var a = c.$1.ancestorURLs;
                                if (a.length > 0 && c.$1.getSafeFrameAPI()) {
                                    a = b("ANUtils").extractDomain(a[0]);
                                    if (window.googletag && a === "tpc.googlesyndication.com") return "GOOGLE_SAFE_FRAME";
                                    else return "UNKNOWN_SAFE_FRAME"
                                }
                                return null
                            };
                            this.$5 = function() {
                                var a = c.$1.ancestorIframes;
                                return a.length > 0 && ES(a[0].id, "indexOf", !0, "google_ads_iframe_") === 0 ? "GOOGLE_FRIENDLY_IFRAME" : null
                            };
                            this.$8 = function() {
                                var a = c.$1.ancestorIframes;
                                return a.length > 0 && (ES(a[0].classList, "contains", !0, "str-fan-iframe") || b("nullthrows")(a[0].parentElement).id === "str-fan-placeholder") ? "SHARETHROUGH" : null
                            };
                            this.$9 = function() {
                                var a = c.$1.ancestorIframes;
                                return a.length > 0 && ES(a[0].classList, "contains", !0, "fiSafeFrame") && window.parent.fiQuery ? "FIRSTIMPRESSION.IO" : null
                            };
                            this.$1 = a
                        }
                        var c = a.prototype;
                        c.getMediator = function() {
                            var a = [this.$2, this.$3, this.$4, this.$5, this.$6, this.$7, this.$8, this.$9];
                            for (var b = 0; b < a.length; b++) {
                                var c = a[b];
                                try {
                                    c = c();
                                    if (c) return c
                                } catch (a) {}
                            }
                            return "UNKNOWN"
                        };
                        c.$6 = function() {
                            return window.sas && document.querySelector('script[src*="www.smartadserver.com/"]') ? window.sas_ajax ? "SMART_ADSERVER_ASYNC" : "SMART_ADSERVER_SYNC" : null
                        };
                        c.$7 = function() {
                            if (window.ADNXSMediation && window.ADNXSMediation.adFilled)
                                if (window.ADNXSAsync || window.ADNXSMediation.isAsync()) return "APPNEXUS_ASYNC";
                                else return "APPNEXUS";
                            return null
                        };
                        c.$3 = function() {
                            return b("AMPContextLoader").isAMP() ? "AMP" : null
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("OnScreenDefinition.anweb", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function() {
                        __p && __p();

                        function a() {}
                        var b = a.prototype;
                        b.getState = function(a, b) {
                            if (b < .01) return "off-screen";
                            else if (a < .99) return "invalid";
                            else if (b < .5) return "partially-on-screen";
                            else if (b < .99) return "mostly-on-screen";
                            else return "completely-on-screen"
                        };
                        return a
                    }();
                    e.exports = {
                        MOBILE_FEED: new a()
                    }
                }), null);
                __d("OnScreenBehaviorManager.anweb", ["OnScreenDefinition.anweb"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = ES("Object", "freeze", !1, {
                        invalid: -1,
                        "off-screen": 0,
                        "partially-on-screen": 1,
                        "mostly-on-screen": 2,
                        "completely-on-screen": 3
                    });

                    function h(a) {
                        return g[a]
                    }

                    function i(a, b, c) {
                        __p && __p();
                        switch (b) {
                            case 3:
                                a.onCompletelyEntered();
                                break;
                            case 2:
                                c ? a.onMostlyEntered() : a.onPartiallyLeft();
                                break;
                            case 1:
                                c ? a.onPartiallyEntered() : a.onMostlyLeft();
                                break;
                            case 0:
                                c ? a.onBecameValid() : a.onCompletelyLeft();
                                break;
                            case -1:
                                a.onBecameInvalid();
                                break
                        }
                    }

                    function j(a, b, c) {
                        for (var d = b + 1; d <= c; d++) i(a, d, !0);
                        for (var d = b - 1; d >= c; d--) i(a, d, !1)
                    }
                    a = function() {
                        __p && __p();

                        function a(a) {
                            a === void 0 && (a = b("OnScreenDefinition.anweb").MOBILE_FEED), this.$3 = a, this.$1 = "off-screen", this.$2 = []
                        }
                        var c = a.prototype;
                        c.updateView = function(a, b) {
                            a = this.$3.getState(a, b);
                            this.$4(a)
                        };
                        c.$4 = function(a) {
                            __p && __p();
                            if (a === this.$1) return;
                            var b = h(this.$1),
                                c = h(a);
                            for (var d = this.$2, e = ES("Array", "isArray", !1, d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var g;
                                if (e) {
                                    if (f >= d.length) break;
                                    g = d[f++]
                                } else {
                                    f = d.next();
                                    if (f.done) break;
                                    g = f.value
                                }
                                g = g;
                                j(g, b, c)
                            }
                            this.$1 = a
                        };
                        c.addBehavior = function(a) {
                            this.$2.push(a), j(a, h("off-screen"), h(this.$1))
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("promiseDone.anweb", [], (function(a, b, c, d, e, f) {
                    function a(a, b, c) {
                        var d = arguments.length > 1 ? a.then(b, c) : a;
                        d.then(null, function(a) {
                            window.setTimeout(function() {
                                throw a
                            })
                        })
                    }
                    e.exports = a
                }), null);
                __d("PlayVideoWhenOnScreenBehavior.anweb", ["OnScreenBehavior.anweb", "promiseDone.anweb"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = function(a) {
                        __p && __p();
                        babelHelpers.inheritsLoose(c, a);

                        function c(b, c, d) {
                            var e;
                            e = a.call(this) || this;
                            e.$PlayVideoWhenOnScreenBehavior1 = b;
                            e.$PlayVideoWhenOnScreenBehavior2 = c;
                            e.$PlayVideoWhenOnScreenBehavior4 = d;
                            e.$PlayVideoWhenOnScreenBehavior3 = !1;
                            return e
                        }
                        var d = c.prototype;
                        d.$PlayVideoWhenOnScreenBehavior5 = function() {
                            var a = this;
                            this.$PlayVideoWhenOnScreenBehavior3 = !0;
                            b("promiseDone.anweb")(this.$PlayVideoWhenOnScreenBehavior1.play().then(function() {
                                return a.$PlayVideoWhenOnScreenBehavior2.event("VIDEO_AUTOPLAY_SUCCEEDED")
                            }, function(b) {
                                return a.$PlayVideoWhenOnScreenBehavior2.event("VIDEO_AUTOPLAY_FAILED", b)
                            }))
                        };
                        d.onCompletelyEntered = function() {
                            !this.$PlayVideoWhenOnScreenBehavior3 && !this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused() && this.$PlayVideoWhenOnScreenBehavior5()
                        };
                        d.onMostlyLeft = function() {
                            this.$PlayVideoWhenOnScreenBehavior1.pause()
                        };
                        d.onCompletelyLeft = function() {
                            this.$PlayVideoWhenOnScreenBehavior1.pause()
                        };
                        d.onMostlyEntered = function() {
                            if (this.$PlayVideoWhenOnScreenBehavior1.wasManuallyPaused()) return;
                            if (!this.$PlayVideoWhenOnScreenBehavior3 && this.$PlayVideoWhenOnScreenBehavior4) {
                                this.$PlayVideoWhenOnScreenBehavior5();
                                return
                            }
                            this.$PlayVideoWhenOnScreenBehavior1.hasPlayed() && this.$PlayVideoWhenOnScreenBehavior1.play()
                        };
                        return c
                    }(b("OnScreenBehavior.anweb"));
                    e.exports = a
                }), null);
                __d("Whiteops", [], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    a = {
                        run: function(a, b, c, d, e) {
                            __p && __p();
                            try {
                                var f = window.document.createElement("iframe");
                                f.id = "fbsbx-sig-iframe-" + a;
                                f.style.height = "1px";
                                f.style.width = "1px";
                                f.sandbox = "allow-scripts allow-same-origin";
                                f.style.opacity = "0";
                                f.style.position = "absolute";
                                f.style.zIndex = "-9999999";
                                f.src = "https://s.update.fbsbx.com/2/843748/utils.html?ti=" + a + "&di=" + c + "&bt=" + b + "&dt=8437481520966594402012&sn=IMPRESSION&c1=" + d;
                                e.appendChild(f)
                            } catch (a) {}
                        }
                    };
                    e.exports = a
                }), null);
                __d("ANAdManager", ["cx", "AdImpressionBehavior.anweb", "AdMostlyViewableImpressionBehavior.anweb", "AdQualityViewabilityMonitor", "AdStatsBehavior.anweb", "AdViewability", "AMPContextLoader", "ANAdChoices", "ANBanner", "ANBounceBackManager", "ANCallbackManager", "ANCarousel", "ANCollage", "ANDPAContainer", "ANEventCounter", "ANFullWidthLoader", "ANLinkOpener", "ANLogger", "ANMoatSivt", "ANMultiAdsSingleCard", "ANPageNavigationManager", "ANRewardedVideoPlayer", "ANStitchedImage", "ANTextOnlyLoader", "ANUtils", "ANWebTwoStepClickDialog", "ANWebVideoLogger.anweb", "ANWebVideoManager", "ANWebVideoPlayer.anweb", "ANXOut", "AudienceNetworkHTMLVideoPlayer", "AudienceNetworkVideoMonitor", "HTMLElementFrameContext.adquality", "JSSDKCssConfig", "MediationDetector", "OnScreenBehaviorManager.anweb", "PlayVideoWhenOnScreenBehavior.anweb", "Whiteops", "getTime", "joinClasses", "nullthrows", "promiseDone.anweb"], (function(a, b, c, d, e, f, g) {
                    "use strict";
                    __p && __p();
                    var h = {
                            "300x250": [300, 250],
                            "320x50": [320, 50],
                            "300x600": [300, 600],
                            "970x250": [970, 250],
                            "728x90": [728, 90],
                            fullwidth: [300, 250],
                            text: [300, 250],
                            rewarded_video: ["100%", "100%"]
                        },
                        i = ["fbAdBody", "fbAdCallToAction", "fbAdIcon", "fbAdMedia", "fbAdSubtitle", "fbAdTitle", "fbTwoStepDialog", "UNKNOWN"],
                        j = 250 / 300,
                        k = 16,
                        l = 16;

                    function m(a) {
                        return {
                            controls: a.controls || "mute_only",
                            endCard: a.endCard || "none",
                            pauseCard: a.pauseCard || "play_button"
                        }
                    }
                    a = function() {
                        __p && __p();

                        function a(a, c) {
                            __p && __p();
                            var d = this;
                            this.$99 = function() {
                                var a = b("nullthrows")(d.$28);
                                d.$23.eventWithParams({
                                    event_name: "VIDEO_CLICK",
                                    video_playback_time: a.getCurrentTime(),
                                    video_duration: a.getDuration()
                                })
                            };
                            this.$27 = new(b("ANCallbackManager"))(c, a.onMediaLoaded, a.onRewardCompleted, a.onAdClosed);
                            this.$5 = a;
                            this.$22 = new(b("ANEventCounter"))();
                            this.$13 = !1;
                            this.$14 = !1;
                            this.$25 = !1;
                            this.$4 = !1;
                            this.$22.addListener(function() {
                                return d.$27.mediaLoaded()
                            });
                            this.$10 = a.displayFormat || a.format || "300x250";
                            this.tagJsIframeAppendedTime = a.tagJsIframeAppendedTime;
                            this.$23 = new(b("ANLogger"))(3, a.tagJsInitTime, b("ANUtils").getNavigationStart(), this.$33(), a.iframe, a.domain);
                            this.$11 = c;
                            this.$12 = new(b("HTMLElementFrameContext.adquality"))(this.$11, this.$34());
                            this.$2 = null;
                            this.$3 = null;
                            this.$20 = new(b("OnScreenBehaviorManager.anweb"))();
                            this.$24 = new(b("ANLinkOpener"))(this.$11);
                            this.$30 = !1;
                            this.$31 = "image";
                            this.$32 = 1
                        }
                        var c = a.prototype;
                        c.$33 = function() {
                            return b("ANUtils").onlyString(this.$5.data.key)
                        };
                        c.sendToFacebook = function(a) {
                            b("ANUtils").sendToFacebook(this.$5.iframe, this.$5.domain, a)
                        };
                        c.$34 = function() {
                            return this.$11.ownerDocument.defaultView
                        };
                        c.$35 = function() {
                            return this.$34().frameElement
                        };
                        c.$36 = function(a) {
                            a = a.ownerDocument;
                            var c = a.createElement("style");
                            c.innerText = b("JSSDKCssConfig").rules;
                            a.body && a.body.appendChild(c)
                        };
                        c.$37 = function() {
                            return b("nullthrows")(this.$26)
                        };
                        c.$38 = function() {
                            var a = this.$39() ? this.$8 || this.$11 : this.$11;
                            return a.getElementsByClassName("adnwTextOnlyXOut")[0]
                        };
                        c.$40 = function() {
                            if (!this.$37().$41) return !1;
                            var a = this.$42();
                            return a.clientWidth >= 300 && a.clientHeight >= 250 || this.$43() || this.$44()
                        };
                        c.$45 = function(a, c) {
                            __p && __p();
                            var d = this,
                                e = this.$42();
                            if (!this.$40()) {
                                if (this.$37().$46.anXOutIcon) {
                                    var f = document.createElement("a");
                                    this.$37().$46.padXoutArea === !0 ? f.className = b("joinClasses")("_6qhg", "_7-er", "_8bwk") : f.className = b("joinClasses")("_6qhg", "_7-er");
                                    f.href = b("nullthrows")(a.adChoicesHref);
                                    f.target = "_blank";
                                    e.appendChild(f);
                                    return
                                }
                                f = new(b("ANAdChoices"))(e, a, this.$23, this.$37().$46);
                                f.render();
                                return
                            }
                            f = null;
                            this.$29 ? f = this.$29.getXoutButton() : this.$44() && (f = this.$38());
                            if (f == null) {
                                f = document.createElement("a");
                                f.href = "#";
                                var g;
                                this.$37().$46.useCardDesign ? g = ["_6qhg", "fbAdXOutButton"] : g = ["_6qhg"];
                                this.$37().$46.anXOutIcon ? (g.push("_7-er"), this.$37().$46.padXoutArea === !0 && g.push("_8bwk")) : this.$47() ? (g.push("_7-e_"), this.$37().$46.padXoutArea === !0 && g.push("_8bwv")) : this.$37().$46.padXoutArea === !0 && g.push("_8bwk");
                                f.className = b("joinClasses").apply(void 0, g);
                                e.appendChild(f)
                            }
                            var h = this.$44() ? new(b("ANTextOnlyLoader"))(this.$35(), this.$11, this.$9, e) : null,
                                i = "inline-condensed";
                            g = this.$37().$48;
                            if (g != null) {
                                var j = new(b("ANXOut"))({
                                    parentEl: e,
                                    adIcon: b("nullthrows")(a.adIcon),
                                    adChoicesLink: b("nullthrows")(a.adChoicesHref),
                                    content: g,
                                    buttonEl: f,
                                    isCondensed: this.$44(),
                                    onXOutStart: function() {
                                        h && c && (j.setOverlayBackgroundColor(h.getBackgroundColor()), h.resize(), c.resize(d.$15, h.getAdHeight())), d.$23.event("ADNW_XOUT_START", i)
                                    },
                                    onXOutCancel: function() {
                                        h && c && (h.restoreOriginalStyles(), c.resize(d.$15, h.getAdHeight())), d.$23.event("ADNW_XOUT_CANCEL", i)
                                    },
                                    onXOutOption: function(a) {
                                        d.sendToFacebook({
                                            name: "xout",
                                            params: {
                                                key: d.$33(),
                                                reason: a,
                                                type: i
                                            }
                                        }), d.$23.event("ADNW_XOUT_OPTION", a)
                                    },
                                    onXOutFinish: function() {
                                        d.$27.adClosed(), d.$23.event("ADNW_XOUT_FINISH")
                                    }
                                });
                                j.render()
                            }
                            return
                        };
                        c.$49 = function(a) {
                            return a.creativeMarkup != null && a.creativeMarkup.raw != null
                        };
                        c.$50 = function(a) {
                            return !this.$37().$46.showMultiAds
                        };
                        c.$51 = function() {
                            var a = !!this.$37().$46.isIab,
                                b = !!this.$37().$46.showMultiAds,
                                c = !!this.$37().$46.useCardDesign;
                            if (c) return this.$42().offsetHeight + l;
                            else if (a) return this.$15 * j;
                            else if (b) return this.$15 / 2;
                            return this.$42().offsetHeight
                        };
                        c.renderAd = function(a, c, d, e) {
                            __p && __p();
                            var f = this;
                            e = a.features || {};
                            this.$26 = {
                                $52: !!e.clickOpenNewTab,
                                $53: !!e.enableWhiteops,
                                $54: e.appIDHashed || "",
                                $46: e,
                                $41: e.inlineXOut,
                                $55: !!e.useIntersectionObserver,
                                $56: !!e.useCtaFallback,
                                $48: a.xout,
                                $57: e.clickGuardElements || i,
                                $58: e.fullwidthMinAspectRatio || 1.5,
                                $59: e.pubSideLogging === !0,
                                $60: e.moatUrl,
                                $61: e.earlyAdLoaded === !0,
                                $62: e.playWhenMostlyVisible === !0,
                                $63: a.topDomain
                            };
                            this.$23.setLogLevel(this.$37().$46.logLevel || 3);
                            this.$23.frameReady();
                            this.$23.setUnifiedLoggingURL(a.unifiedLoggingURL);
                            this.$1 = b("getTime")();
                            e = this.$64();
                            if (e === "SAFE_FRAME" || e === "NESTED_SAFE_FRAME") {
                                e = this.$12.getSafeFrameAPI();
                                if (e) {
                                    e = e.supports();
                                    e["exp-push"] ? this.$23.event("ADNW_SAFEFRAME_PUSH_EXPANSION_ENABLED") : e["exp-ovr"] ? this.$23.event("ADNW_SAFEFRAME_ONLY_OVERLAY_EXPANSION_ENABLED") : this.$23.event("ADNW_SAFEFRAME_ALL_EXPANSIONS_DISABLED")
                                }
                            }
                            this.$37().$46.rp && this.$27.enableReward();
                            var g = 0,
                                h = !!a.creativeMarkupBackup;
                            !a.nativeAd ? this.$11.style.display = "" : (this.$49(a) && (this.$39() ? this.$65() : this.$66(), (this.$37().$46.resizeMediaView || this.$37().$46.shouldResizeBanner) && (this.$11.style.visibility = "hidden", g = this.$67())), this.$68(a, b("nullthrows")(a.creativeMarkup), this.$11, c, !!this.$37().$46.resizeMediaView));
                            this.$42().classList.add("fbAdLoaded");
                            this.$37().$61 && d(a.placementId);
                            if (this.$37().$46.resizeMediaView || this.$37().$46.shouldResizeBanner) {
                                var j = {
                                    shouldResizeBanner: !!this.$37().$46.shouldResizeBanner,
                                    isStickyBanner: this.$69()
                                };
                                window.setTimeout(function() {
                                    __p && __p();
                                    var d = new(b("ANFullWidthLoader"))(h, f.$35(), f.$11, f.$9, f.$15, f.$23, g, f.$50(a), f.$37().$46.fwResizeGKs, j),
                                        e = f.$42();
                                    e.style.width = b("ANUtils").cssSize(f.$15);
                                    f.$6 && f.$6.ensureSizes();
                                    e = f.$51();
                                    e = d.resize(f.$15, e);
                                    e && (f.$13 = !0, f.$14 = !!a.nativeCarouselAds);
                                    f.$45(b("nullthrows")(a.nativeAd), d);
                                    if (h) {
                                        var i = function() {
                                            b("nullthrows")(a.creativeMarkupBackup).use_carousel_stitch = !0, d.restoreOriginalStyles(), f.$70(a, b("nullthrows")(a.creativeMarkupBackup), c, !!f.$37().$46.resizeMediaView), f.$13 = !1, f.$14 = !1, f.$45(b("nullthrows")(a.nativeAd)), f.$11.style.visibility = "visible"
                                        };
                                        if (!e) i();
                                        else {
                                            e = function a() {
                                                b("ANUtils").screenIsPortrait() || (window.removeEventListener("orientationchange", a), i())
                                            };
                                            window.addEventListener("orientationchange", e)
                                        }
                                    }
                                }, 0)
                            } else this.$45(b("nullthrows")(a.nativeAd));
                            this.$37().$56 === !0 && (this.$19 = this.$71(a.nativeAd, this.$11, c));
                            this.$72(!!b("nullthrows")(a.nativeAd).adVideo);
                            this.$23.eventWithParams(this.$73("ADNW_ADLOADED"));
                            e = new(b("ANPageNavigationManager"))(window.document);
                            e.onNavigation(function() {
                                f.$74()
                            });
                            this.$75();
                            this.$37().$61 || d(a.placementId);
                            this.$34().addEventListener("beforeunload", function() {
                                f.$23.event("ADNW_PAGE_UNLOADED"), f.$74()
                            });
                            if (this.$76()) {
                                e = new(b("ANBanner"))(this.$42(), this.$37().$46);
                                e.init()
                            } else if (!!this.$37().$46.showMultiAds && this.$37().$46.resizeMediaView) {
                                d = new(b("ANMultiAdsSingleCard"))(this.$15, this.$42());
                                d.resizeAd()
                            }
                            b("ANUtils").autofitTextWhereNeeded(this.$42(), function() {
                                f.$23.event("ADNW_TEXT_AUTOFIT_ERROR")
                            })
                        };
                        c.$73 = function(a) {
                            var c = this.$18;
                            if (!c) return {
                                event_name: a,
                                viewability: b("AdViewability").UNKNOWN
                            };
                            c = this.$18.getLastViewabilityState();
                            return {
                                event_name: a,
                                viewability: c.viewabilityLevels.join(","),
                                width_in_view: c.widthInView || 0,
                                height_in_view: c.heightInView || 0,
                                left: c.pageLeft || 0,
                                top: c.pageTop || 0,
                                scroll_left: c.scrollLeft || 0,
                                scroll_top: c.scrollTop || 0,
                                page_width: c.pageWidth || 0,
                                page_height: c.pageHeight || 0,
                                viewable_detection: c.viewabilityDetection || "",
                                viewable_reason: c.viewabilityReason || ""
                            }
                        };
                        c.$75 = function() {
                            var a = this.$37().$46.forceIframeSize;
                            if (a) {
                                var c = this.$35();
                                c && (c.style.width = b("ANUtils").cssSize(a.w), c.style.height = b("ANUtils").cssSize(a.h))
                            }
                        };
                        c.$67 = function() {
                            __p && __p();
                            var a = 300,
                                c = 375,
                                d = this.$37().$46.fwResizeGKs;
                            d = d && d.iframe_resize_parent === !0;
                            var e = b("ANUtils").getScreenWidth(),
                                f = this.$35() || this.$11;
                            f = b("ANUtils").findWidestParentElement(f, d);
                            d = b("ANUtils").calculateLargestMargin(f);
                            this.$15 = e - d * 2;
                            if (this.$15 < a) this.$15 = a, d = f.getBoundingClientRect().right - a;
                            else if (this.$15 > c && !!this.$37().$46.showMultiAds && !!this.$37().$46.shouldLimitHeight) {
                                e = this.$15 - c;
                                d += e / 2;
                                this.$15 = c
                            }
                            return d
                        };
                        c.$65 = function() {
                            __p && __p();
                            var a = h[this.$10],
                                c = a[0];
                            a = a[1];
                            var d = document.createElement("iframe");
                            d.classList.add("fbAdWrapper");
                            d.style.border = "0";
                            d.style.width = b("ANUtils").cssSize(c);
                            d.style.height = b("ANUtils").cssSize(a);
                            this.$11.appendChild(d);
                            d.contentDocument.open();
                            d.contentDocument.close();
                            c = b("nullthrows")(d.contentDocument.body);
                            c.style.overflow = "hidden";
                            c.style.margin = "0";
                            c.style.padding = "0";
                            c.style.maxWidth = b("ANUtils").getScreenWidth() + "px";
                            this.$8 = c;
                            this.$9 = d
                        };
                        c.$66 = function() {
                            __p && __p();
                            var a = document.createElement("div");
                            a.style.textAlign = "center";
                            a.style.position = "relative";
                            this.$11.appendChild(a);
                            this.$9 = a;
                            var c = document.createElement("div");
                            c.style.maxWidth = b("ANUtils").cssSize(b("ANUtils").getScreenWidth());
                            c.style.width = "100%";
                            c.style.position = "relative";
                            c.style.display = "inline-block";
                            a.appendChild(c);
                            this.$8 = c
                        };
                        c.$42 = function() {
                            var a = this.$39() ? this.$8 || this.$11 : this.$11;
                            return a.getElementsByClassName("fbANRoot")[0] || a.getElementsByClassName("thirdPartyRoot")[0] || a
                        };
                        c.$68 = function(a, b, c, d, e) {
                            a.nativeAd.loaded = !1, b.raw && (this.$8.innerHTML = b.raw, c = this.$8), c && (c = this.$42(), this.$36(c)), this.$37().$56 !== !0 && (this.$19 = this.$71(a.nativeAd, c, d)), this.$17 = this.$77(c, a.requestId, a.creativeMarkup, a.nativeAd, a.nativeCarouselAds, e, b && b.dfp, m(b.video))
                        };
                        c.$78 = function(a) {
                            return !!this.$37().$46.useDPADesign && a && a.length > 2
                        };
                        c.$79 = function(a, c, d, e) {
                            if (this.$37().$46.showMultiAds) return;
                            var f = this.$78(c);
                            if (!f && (!d || c)) return;
                            d = f ? b("nullthrows")(c)[0] : a;
                            f = this.$80(d);
                            this.$37().$46.useCardDesign ? b("ANUtils").resizeElement(e, this.$15 - k, Math.round((this.$15 - k) / f)) : b("ANUtils").resizeElement(e, this.$15, Math.round(this.$15 / f))
                        };
                        c.$81 = function() {
                            this.$23.eventWithParams(this.$73("ADNW_MOSTLY_VIEWABLE_FOR_1S"))
                        };
                        c.$82 = function() {
                            __p && __p();
                            if (this.$2) {
                                this.$23.error("Multiple ADIMPRESSION attempted.");
                                return
                            }
                            this.$2 = b("getTime")();
                            var a = this.$83();
                            this.sendToFacebook({
                                name: "impress",
                                params: {
                                    key: this.$33(),
                                    payload: a
                                }
                            });
                            this.$23.eventWithParams(this.$73("ADNW_ADIMPRESSION"));
                            this.$40() && this.$23.event("ADNW_HAS_INLINE_XOUT");
                            this.$84()
                        };
                        c.$84 = function() {
                            __p && __p();
                            var a = this,
                                c = this.$37().$60;
                            if (c == null) return;
                            var d = this.$11;
                            if (d == null) {
                                this.$23.error("missing ad element");
                                return
                            }
                            c = new(b("ANMoatSivt"))(c, d.ownerDocument);
                            b("promiseDone.anweb")(c.getMeasurements().then(function(b) {
                                a.sendToFacebook({
                                    name: "moat_sivt",
                                    params: {
                                        key: a.$33(),
                                        payload: b
                                    }
                                })
                            })["catch"](function(b) {
                                return a.$23.error(b)
                            }))
                        };
                        c.$64 = function() {
                            var a = this.$12.getSafeFrameAPI();
                            if (this.$12.isCrossDomain() && !a) return b("AMPContextLoader").isAMP() ? "AMP" : "CROSS_DOMAIN_IFRAME";
                            var c = this.$12.getNestLevel();
                            if (c === 0) return "NO_IFRAME";
                            return c > 1 ? a ? "NESTED_SAFE_FRAME" : "NESTED_FRIENDLY_IFRAME" : a ? "SAFE_FRAME" : "FRIENDLY_IFRAME"
                        };
                        c.$71 = function(a, b, c) {
                            __p && __p();
                            if (this.$37().$56 !== !0) return a && b ? b : c;
                            a = a && b;
                            if (a) {
                                b = a.getBoundingClientRect();
                                b = b.width * b.height;
                                if (b > 0) return a;
                                else {
                                    b = a.querySelector(".fbAdLink");
                                    return b || a
                                }
                            }
                            return c
                        };
                        c.$72 = function(a) {
                            __p && __p();
                            var c = this;
                            this.$18 = new(b("AdQualityViewabilityMonitor"))(this.$19, this.$37().$55);
                            this.$18.attachBehaviorManager(this.$20);
                            var d = new(b("AdImpressionBehavior.anweb"))(function() {
                                (!a || !c.$85()) && (c.$86(), a && c.$23.event("ADNW_VIDEO_IMPRESSION_ON_VISIBLE"))
                            }, function() {
                                return c.$23.event("ADNW_PARTIAL_ADIMPRESSION")
                            });
                            this.$87() && (this.$21 = new(b("AdStatsBehavior.anweb"))(), this.$20.addBehavior(this.$21));
                            this.$20.addBehavior(d);
                            this.$22.addListener(function() {
                                return d.mediaLoaded()
                            });
                            if (this.$37().$46.useMostlyViewableImp) {
                                var e = new(b("AdMostlyViewableImpressionBehavior.anweb"))(function() {
                                    return c.$81()
                                });
                                this.$20.addBehavior(e);
                                this.$22.addListener(function() {
                                    return e.mediaLoaded()
                                })
                            }
                        };
                        c.$80 = function(a) {
                            if (a.adImageAspectRatio != null && a.adImageAspectRatio > 0) return Math.max(a.adImageAspectRatio, this.$37().$58);
                            else if (a.adVideo) return 1.75;
                            else return 1.9
                        };
                        c.$88 = function(a, c, d, e, f, g) {
                            this.$37().$46.isIab || this.$37().$46.useBannerV3 ? (this.$89(c, e), this.$31 = "image") : this.$78(f) && d ? (this.$90(c, b("nullthrows")(f)), this.$31 = "dpa", this.$32 = b("nullthrows")(f).length) : (this.$37().$46.useLargeCarousel || this.$37().$46.useLargeCarouselWithCounter) && f && d && !d.use_carousel_stitch ? (this.$91(c, f), this.$31 = "carousel", this.$32 = f.length) : this.$37().$46.useClientSideCarouselCollage && f && d && !d.use_carousel_stitch ? (this.$92(c, f), this.$31 = "collage", this.$32 = f.length) : f && d && !d.use_carousel_stitch ? (this.$91(c, f), this.$31 = "carousel", this.$32 = f.length) : e.adVideo ? (this.$93(c, e, g), this.$31 = "video") : f && d && d.use_carousel_stitch && f.length > 1 ? (this.$94(c, f), this.$31 = "stitched_carousel") : (this.$89(c, e), this.$31 = "image")
                        };
                        c.$95 = function(a, c) {
                            var d = "",
                                e = this.$37().$46.dpaPriceLabels;
                            e != null && (d = e[0]);
                            e = new(b("ANDPAContainer"))(d, c.adTitle || "");
                            d = e.getElement();
                            this.$89(d, c);
                            a.appendChild(d)
                        };
                        c.$90 = function(a, b) {
                            this.$95(a, b[0]), this.$91(a, b.slice(1))
                        };
                        c.$91 = function(a, c) {
                            __p && __p();
                            var d = this,
                                e = new(b("ANCarousel"))({
                                    parent: a,
                                    ads: c,
                                    onCriticalAnimationStart: function() {
                                        d.$18.pause()
                                    },
                                    onCriticalAnimationEnd: function() {
                                        d.$18.resume()
                                    },
                                    onEvent: function(a, b) {
                                        switch (a) {
                                            case "AN_CAROUSEL_EVENT_SWIPE":
                                                d.$23.eventWithParams({
                                                    event_name: "CAROUSEL_SWIPE",
                                                    index: b.index,
                                                    direction: b.direction
                                                })
                                        }
                                    },
                                    onLoadEventCounter: this.$22,
                                    adFeatures: this.$37().$46
                                });
                            a.appendChild(e.getElement());
                            e.ensureSizes();
                            ES(e.getLinks(), "forEach", !0, function(a, b) {
                                d.$96(a, c[b])
                            });
                            this.$6 = e
                        };
                        c.$92 = function(a, c) {
                            var d = this,
                                e = !!this.$37().$46.useExtendedCollage;
                            e = new(b("ANCollage"))({
                                ads: c,
                                onLoadEventCounter: this.$22,
                                adFeatures: this.$37().$46,
                                extended: e
                            });
                            a.appendChild(e.getElement());
                            ES(e.getCells(), "forEach", !0, function(a, b) {
                                d.$96(a, c[b])
                            });
                            this.$7 = e
                        };
                        c.$97 = function(a) {
                            __p && __p();
                            var c = b("nullthrows")(a.parentElement);
                            c.style.overflow = "hidden";
                            var d = c.ownerDocument.defaultView.getComputedStyle(c).position;
                            d !== "absolute" && (c.style.position = "relative");
                            a.style.objectFit = "contain";
                            a.style.position = "relative";
                            d = document.createElement("div");
                            d.style.backgroundImage = "url(" + a.src + ")";
                            d.style.backgroundPosition = "center center";
                            d.style.backgroundSize = "cover";
                            d.style.position = "absolute";
                            d.style.left = "-20px";
                            d.style.top = "-20px";
                            d.style.right = "-20px";
                            d.style.bottom = "-20px";
                            d.style.filter = "blur(20px)";
                            d.dataset.fbImageBackdrop = "true";
                            c.insertBefore(d, a)
                        };
                        c.$89 = function(a, b) {
                            var c = this.$98(b);
                            a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c);
                            b.adImageAspectRatio && (b.adImageAspectRatio < 1.92 || !!this.$37().$46.showMultiAds || this.$37().$46.useBannerV3) && this.$97(c)
                        };
                        c.$94 = function(a, c) {
                            var d = new(b("ANStitchedImage"))(this.$22, this.$23);
                            a.appendChild(d.render(c[0], c[1]))
                        };
                        c.$93 = function(a, c, d) {
                            __p && __p();
                            var e = this;
                            if (!c.adVideo) throw new Error("No video for Ad.");
                            this.$22.addRequiredEvent();
                            d = new(b("ANWebVideoPlayer.anweb"))(b("nullthrows")(c.adVideo), b("nullthrows")(c.adImage), d, c.hasSound === !0, function() {
                                e.$22.requiredEventFired()
                            }, this.$99);
                            c = this.$43() && this.$27.isRewardEnabled();
                            if (c) {
                                var f = b("nullthrows")(this.$8);
                                this.$29 = new(b("ANRewardedVideoPlayer"))(this.$27, f, d, Boolean(this.$37().$41));
                                this.$29.makeRewarded();
                                f.style.maxWidth = "";
                                this.$9 && (this.$9.style.maxWidth = "100vw", this.$9.style.maxHeight = "100vh")
                            }
                            f = new(b("AudienceNetworkHTMLVideoPlayer"))(d.getVideoElement(), !0);
                            var g = new(b("ANWebVideoLogger.anweb"))(this.$37().$46.logVideoEvents === !0, f, this.$33(), this.$23, function(a) {
                                return e.sendToFacebook(a)
                            }, function() {
                                e.$85() && (e.$86(), e.$23.event("ADNW_VIDEO_IMPRESSION_ON_PLAY"))
                            });
                            g = new(b("AudienceNetworkVideoMonitor"))(new(b("ANWebVideoManager"))(f), g);
                            g.startListening(f);
                            a.appendChild(d.getElement());
                            this.$28 = d;
                            this.$27.setVideo(d);
                            if (!c) {
                                g = this.$20;
                                f = d.getVideoElement();
                                a = new(b("AdQualityViewabilityMonitor"))(f, this.$37().$55);
                                g = new(b("OnScreenBehaviorManager.anweb"))();
                                a.attachBehaviorManager(g);
                                g.addBehavior(new(b("PlayVideoWhenOnScreenBehavior.anweb"))(d, this.$23, this.$37().$62))
                            }
                        };
                        c.$100 = function(a) {
                            this.$23.logClick(a, b("nullthrows")(this.$1));
                            var c = a.href;
                            a.clickParams.clknutab !== !0 || b("ANUtils").isAppStoreURL(c) ? this.$24.open(c) : this.$24.openNewTab(c)
                        };
                        c.$96 = function(a, c) {
                            __p && __p();
                            var d = this,
                                e = function(a, e) {
                                    __p && __p();
                                    var f = b("getTime")(),
                                        g = b("nullthrows")(c.href),
                                        h = b("ANUtils").maybeHTMLElement(e.target);
                                    h = h ? d.$101(h) : "UNKNOWN";
                                    var i = {};
                                    if (d.$18) {
                                        var j = d.$18.getDimensions(),
                                            k = d.$18.getLastViewabilityState();
                                        j != null && (i.height = j.height, i.width = j.width, k.widthInView != null && k.heightInView != null && (i.visibleWidth = Math.round(k.widthInView * j.width), i.visibleHeight = Math.round(k.heightInView * j.height)));
                                        if (d.$12.getSafeFrameAPI()) i.relClickX = e.clientX, i.relClickY = e.clientY;
                                        else {
                                            i.clickX = e.clientX;
                                            i.clickY = e.clientY;
                                            if (k.viewportLeft != null && k.viewportTop != null) i.relClickX = e.clientX - k.viewportLeft, i.relClickY = e.clientY - k.viewportTop;
                                            else {
                                                j = d.$42().getBoundingClientRect();
                                                i.relClickX = e.clientX - j.left;
                                                i.relClickY = e.clientY - j.top
                                            }
                                        }
                                    }
                                    k = {
                                        clktm: Math.round(f / 1e3),
                                        clknutab: d.$37().$52,
                                        touch: ES("JSON", "stringify", !1, i)
                                    };
                                    d.$2 && (k.clkdel = f - d.$2);
                                    i.height && i.width && i.visibleWidth && i.visibleHeight && (k.vp = i.visibleWidth * i.visibleHeight / (i.height * i.width));
                                    e = b("ANUtils").isAppStoreURL(g);
                                    j = d.$37().$59 && d.$23.isPublisherSideLoggingSupported() && a === 0;
                                    j && g === "" && (d.$23.error("pub_logging_no_href"), j = !1);
                                    k = {
                                        key: d.$33(),
                                        href: b("nullthrows")(g),
                                        clickParams: k,
                                        adElementType: h,
                                        action: a,
                                        videoDuration: d.$28 == null ? 0 : d.$28.getDuration(),
                                        videoPlaybackTime: d.$28 == null ? 0 : d.$28.getCurrentTime(),
                                        pos: {
                                            element: h,
                                            width: i.width,
                                            height: i.height,
                                            visibleWidth: i.visibleWidth,
                                            visibleHeight: i.visibleHeight,
                                            clickX: i.clickX,
                                            clickY: i.clickY,
                                            relClickX: i.relClickX,
                                            relClickY: i.relClickY,
                                            carouselCardIndex: d.$6 == null ? null : d.$6.getIndex()
                                        }
                                    };
                                    d.$5.data.recircUnitId != null && (k.recircUnitId = d.$5.data.recircUnitId);
                                    j ? d.$100(k) : (d.sendToFacebook({
                                        name: "click",
                                        params: k
                                    }), d.$37().$52 && g && !e && a === 0 && d.$24.openNewTab(g));
                                    a === 0 && (d.$3 = f);
                                    if (d.$37().$52 || e) {
                                        h = new(b("ANBounceBackManager"))(window.document);
                                        h.onBounceBack(function(a) {
                                            d.sendToFacebook({
                                                name: "bounce",
                                                params: {
                                                    key: d.$33(),
                                                    leaveTime: f,
                                                    backTime: b("getTime")()
                                                }
                                            }), d.$23.event("ADNW_BOUNCEBACK", "" + a)
                                        })
                                    }
                                },
                                f = function() {
                                    b("ANWebTwoStepClickDialog").openDialog(d.$42(), b("nullthrows")(c.adSubtitle), b("nullthrows")(c.adIcon)).onConfirm(function(a) {
                                        d.$25 = !0, e(0, a)
                                    }).onDismiss(function(a) {
                                        d.$25 = !1, e(12, a)
                                    })
                                },
                                g = function(a) {
                                    var c = b("getTime")(),
                                        g = b("ANUtils").maybeHTMLElement(a.target);
                                    g = g ? d.$101(g) : "UNKNOWN";
                                    var h = d.$37().$46.minClickDelay,
                                        i = d.$37().$46.minClickDelayImpression;
                                    i && d.$2 && d.$2 + i > c && !d.$4 ? (d.$4 = !0, e(10, a)) : h && d.$1 && d.$1 + h > c && !d.$4 ? (d.$4 = !0, e(10, a)) : d.$102() ? !d.$14 && d.$37().$46.useTwoStepClick === !0 && !d.$25 ? (e(11, a), f()) : e(10, a) : ES(d.$37().$57, "includes", !0, g) && d.$37().$46.useTwoStepClick === !0 && !d.$25 ? (e(11, a), f()) : e(0, a);
                                    a.preventDefault();
                                    a.stopPropagation()
                                };
                            a.addEventListener("click", g)
                        };
                        c.applyAdTypeClass = function(a, b, c) {
                            c ? a.className += " fbCarouselType" : b.adVideo ? a.className += " fbVideoType" : a.className += " fbDisplayType"
                        };
                        c.$70 = function(a, c, d, e) {
                            this.$18.pause();
                            a.nativeAd.loaded = !1;
                            d = this.$8;
                            if (d == null) return;
                            d.innerHTML = c.raw || "";
                            this.$36(this.$42());
                            this.$103(d, c, a.nativeAd, a.nativeCarouselAds, e, c && c.dfp, m(c.video));
                            d && (this.$18 = new(b("AdQualityViewabilityMonitor"))(d, this.$37().$55), this.$18.attachBehaviorManager(this.$20))
                        };
                        c.$103 = function(a, b, c, d, e, f, g) {
                            c.loaded = !0;
                            this.$16 = a.getElementsByClassName("fbAdMedia");
                            for (e = 0; e < this.$16.length; e++) this.$88(a, this.$16[e], b, c, d, g);
                            this.$104(a, c, f);
                            b = a.getElementsByClassName("fbAdIcon");
                            for (e = 0; e < b.length; e++) b[e].appendChild(this.$105(c))
                        };
                        c.$106 = function(a) {
                            a = b("nullthrows")(a.ownerDocument.body);
                            a.addEventListener("touchstart", function() {}, !1)
                        };
                        c.$77 = function(a, c, d, e, f, g, h, i) {
                            if (!a || !e || e.loaded) return !1;
                            this.applyAdTypeClass(a, e, f);
                            this.$106(a);
                            e.loaded = !0;
                            d = this.$107(a, d, e, f, g, h, i);
                            this.$37().$53 === !0 && b("Whiteops").run(c, "AN_MWEB", this.$37().$63, this.$37().$54, a);
                            return d
                        };
                        c.$107 = function(a, b, c, d, e, f, g) {
                            __p && __p();
                            this.$16 = a.getElementsByClassName("fbAdMedia");
                            var h = this.$16.length > 0,
                                i = ES("Array", "from", !1, this.$16);
                            for (var j = 0; j < i.length; j++) {
                                var k = i[j];
                                this.$79(c, d, e, k);
                                this.$88(a, k, b, c, d, g)
                            }
                            this.$104(a, c, f);
                            k = a.getElementsByClassName("fbAdIcon");
                            i = ES("Array", "from", !1, k);
                            for (var j = 0; j < i.length; j++) {
                                b = i[j];
                                b.appendChild(this.$105(c))
                            }
                            return h
                        };
                        c.$104 = function(a, b, c) {
                            __p && __p();
                            var d;
                            c = a.getElementsByClassName("fbAdTitle");
                            for (d = 0; d < c.length; d++) c[d].textContent = b.adTitle || "";
                            c = a.getElementsByClassName("fbAdSubtitle");
                            for (d = 0; d < c.length; d++) c[d].textContent = b.adSubtitle || "";
                            c = a.getElementsByClassName("fbAdBody");
                            for (d = 0; d < c.length; d++) c[d].textContent = b.adBody || "";
                            c = a.getElementsByClassName("fbAdSocialContext");
                            for (d = 0; d < c.length; d++) c[d].textContent = b.adSocialContext || "";
                            if (b.adCallToAction == null || b.href == null) a.classList.add("fbAdNoCallToAction");
                            else {
                                c = a.getElementsByClassName("fbAdCallToAction");
                                for (d = 0; d < c.length; d++) c[d].textContent = b.adCallToAction || "";
                                c = a.getElementsByClassName("fbAdLink");
                                for (d = 0; d < c.length; d++) this.$96(c[d], b)
                            }
                        };
                        c.$105 = function(a) {
                            var c = this,
                                d = document.createElement("img");
                            d.style.height = "100%";
                            d.style.width = "100%";
                            this.$22.addRequiredEvent();
                            d.addEventListener("load", function() {
                                c.$22.requiredEventFired()
                            });
                            d.src = b("nullthrows")(a.adIcon);
                            return d
                        };
                        c.$98 = function(a) {
                            __p && __p();
                            var c = this,
                                d = document.createElement("img");
                            this.$37().$46.bannerMovingMedia || (d.style.height = "100%");
                            d.style.width = "100%";
                            this.$22.addRequiredEvent();
                            d.addEventListener("load", function() {
                                c.$22.requiredEventFired(), d.naturalWidth === 1 && d.naturalHeight === 1 && c.$23.eventWithParams({
                                    event_name: "ADNW_ADERROR",
                                    error_message: "Image loading error (1x1)",
                                    error_stack_trace: d.src
                                })
                            });
                            d.addEventListener("error", function() {
                                c.$23.eventWithParams({
                                    event_name: "ADNW_ADERROR",
                                    error_message: "Image loading error (uncaught)",
                                    error_stack_trace: d.src
                                })
                            });
                            d.src = b("nullthrows")(a.adImage);
                            return d
                        };
                        c.$108 = function() {
                            return this.$10 === "native"
                        };
                        c.$43 = function() {
                            return this.$10 === "rewarded_video"
                        };
                        c.$109 = function() {
                            return this.$10 === "text"
                        };
                        c.$47 = function() {
                            return this.$10 === "recirculation"
                        };
                        c.$44 = function() {
                            return this.$109() || !!this.$37().$46.forceFullwidthTextOnly
                        };
                        c.$76 = function() {
                            return this.$10 === "320x50"
                        };
                        c.$39 = function() {
                            return !this.$35() && !this.$108() && h[this.$10]
                        };
                        c.$86 = function() {
                            this.$42().classList.add("fbVisibleOnce"), this.$82()
                        };
                        c.$83 = function() {
                            var a = this.$18.getDimensions(),
                                c = this.$18 && this.$18.getLastViewabilityState() || null;
                            a = {
                                width: a ? a.width : null,
                                height: a ? a.height : null,
                                width_in_view: c && c.widthInView || null,
                                height_in_view: c && c.heightInView || null,
                                top: c && c.pageTop || null,
                                left: c && c.pageLeft || null,
                                scroll_top: c && c.scrollTop || null,
                                scroll_left: c && c.scrollLeft || null,
                                page_width: c && c.pageWidth || null,
                                page_height: c && c.pageHeight || null,
                                viewable_reason: c.viewabilityReason || null,
                                viewable_detection: c.viewabilityDetection || null,
                                hosturl: this.$12.getTopURL(),
                                iframe_status: this.$64(),
                                nest_level: this.$12.getNestLevel(),
                                iframe_urls: this.$12.ancestorURLs.slice(0, -1),
                                mediation_service: new(b("MediationDetector"))(this.$12).getMediator(),
                                nmv: this.$17
                            };
                            this.$5.data.recircUnitId != null && (a.recirc_unit_id = this.$5.data.recircUnitId);
                            return a
                        };
                        c.$101 = function(a) {
                            __p && __p();
                            var b;
                            b = (b = {
                                fbAdCallToAction: "fbAdCallToAction",
                                fbAdTitle: "fbAdTitle",
                                fbAdBody: "fbAdBody",
                                fbAdSubtitle: "fbAdSubtitle",
                                fbAdIcon: "fbAdIcon",
                                fbAdMediaCenter: "fbAdMediaCenter",
                                fbAdMedia: "fbAdMedia"
                            }, b._74vg = "fbTwoStepDialog", b);
                            var c = this.$42();
                            for (var d in b) {
                                var e = c.getElementsByClassName(d);
                                e = ES("Array", "from", !1, e);
                                for (var f = 0; f < e.length; f++) {
                                    var g = e[f];
                                    if (a === g || ES(g, "contains", !0, a)) return b[d]
                                }
                            }
                            return "UNKNOWN"
                        };
                        c.$85 = function() {
                            return this.$37().$46.videoMrcImpression === !0
                        };
                        c.$87 = function() {
                            return this.$37().$46.logPerformanceStats === !0
                        };
                        c.$74 = function() {
                            __p && __p();
                            if (!this.$87() || this.$30) return;
                            var a = b("getTime")(),
                                c = b("ANUtils").getNavigationStart(),
                                d = this.$5.tagJsInitTime - c,
                                e = null,
                                f = null,
                                g = null,
                                h = null;
                            c = a - c;
                            this.$1 && (e = this.$1 - this.$5.tagJsInitTime);
                            this.$2 && this.$1 && (f = this.$2 - this.$1);
                            this.$3 && this.$2 && (g = this.$3 - this.$2);
                            this.$3 && (h = a - this.$3);
                            var i = b("nullthrows")(this.$21),
                                j = i.getPartiallyVisibleTime(),
                                k = i.getMostlyVisibleTime();
                            i = i.getFullyVisibleTime();
                            if (d < 0 || e && e < 0 || f && f < 0 || g && g < 0 || h && h < 0 || c < 0 || j < 0 || k < 0 || i < 0) {
                                this.$23.warn("Invalid time received from Date.now");
                                return
                            }
                            this.$30 = !0;
                            var l = this.$18.getInitialViewabilityState(),
                                m = this.$18.getLastViewabilityState(),
                                n = this.$28,
                                o = null,
                                p = null;
                            n != null && (o = n.getCurrentTime(), p = n.getDuration());
                            n = null;
                            l != null && l.viewabilityLevels != null && (n = l.viewabilityLevels.join(","));
                            var q = null;
                            m != null && m.viewabilityLevels != null && (q = m.viewabilityLevels.join(","));
                            var r = this.$37().$59 && this.$23.isPublisherSideLoggingSupported(),
                                s = l == null ? void 0 : l.widthInView;
                            s && (s *= 100);
                            l = l == null ? void 0 : l.heightInView;
                            l && (l *= 100);
                            m = m == null ? void 0 : m.heightInView;
                            m && (m *= 100);
                            var t = null;
                            this.$76() && (t = this.$69());
                            j = {
                                key: this.$33(),
                                payload: {
                                    partially_visible_time_ms: j,
                                    mostly_visible_time_ms: k,
                                    fully_visible_time_ms: i,
                                    client_ts: a,
                                    viewability: n,
                                    width_in_view: s,
                                    height_in_view: l,
                                    request_delay: d,
                                    load_time: e,
                                    imp_delay: f,
                                    click_delay: g,
                                    click_to_navigation_time: h,
                                    total_time_on_page: c,
                                    video_playback_time: o,
                                    video_duration: p,
                                    creative_type: this.$31,
                                    asset_count: this.$32,
                                    viewability_at_navigation: q,
                                    height_in_view_at_navigation: m,
                                    is_sticky_banner: t
                                }
                            };
                            r ? this.$23.logPerfStats(j) : this.sendToFacebook({
                                name: "perf",
                                params: j
                            })
                        };
                        c.$102 = function() {
                            if (this.$37().$46.clickGuardLowViewability === !0) {
                                var a = this.$18.getLastViewabilityState();
                                if (a != null && a.heightInView != null && a.heightInView < .5) return !0
                            }
                            return !1
                        };
                        c.$110 = function() {
                            var a = this.$35();
                            return a ? a : this.$11
                        };
                        c.$69 = function() {
                            __p && __p();
                            if (this.$34() === null) return !1;
                            var a = this.$110();
                            if (!a) return !1;
                            var c = 0;
                            while (a && b("ANUtils").shouldContinueTraversing(a)) {
                                var d = b("ANUtils").getStyle(a, "position");
                                if (d && d !== "static") {
                                    if (d === "fixed") return !0;
                                    if (!(c === 0 && d === "relative"))
                                        if (d === "relative")
                                            for (var d = a.children, e = ES("Array", "isArray", !1, d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                                var g;
                                                if (e) {
                                                    if (f >= d.length) break;
                                                    g = d[f++]
                                                } else {
                                                    f = d.next();
                                                    if (f.done) break;
                                                    g = f.value
                                                }
                                                g = g;
                                                g = b("ANUtils").getStyle(g, "position");
                                                if (g === "absolute") return !0
                                            }
                                }
                                a = b("ANUtils").checkHTMLElement(a.parentElement);
                                c++
                            }
                            return !1
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANMWebUnifiedLoggingRecirculationEvent", [], (function(a, b, c, d, e, f) {
                    e.exports = ES("Object", "freeze", !1, {
                        BLANK_IMPRESSION: "blank_impression",
                        CANCEL_PAGE_LOAD: "cancel_pg",
                        CLICK: "click",
                        IMPRESSION: "impression",
                        SCROLL_UPDATE: "scroll_update"
                    })
                }), null);
                __d("ANMultiAdsUnit", ["ANFullWidthLoader", "ANLogger", "ANUtils", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = "MULTI_ADS_FW_RESIZE_FAIL";
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e, f, g, h, i) {
                            this.$1 = a, this.$2 = c, this.$3 = new(b("ANLogger"))(3, d.tagJsInitTime, b("ANUtils").getNavigationStart(), b("ANUtils").onlyString(d.data.key), d.iframe, d.domain), this.$4 = f, this.$5 = g, this.$6 = h, this.$7 = i, this.$9 = e, this.$8 = 0
                        }
                        a.render = function(b, c, d, e, f, g, h, i) {
                            b = new a(b, c, d, e, f, g, h, i);
                            b.$10()
                        };
                        var c = a.prototype;
                        c.$11 = function() {
                            __p && __p();
                            var a = 300,
                                c = 375,
                                d = b("ANUtils").getScreenWidth(),
                                e = b("ANUtils").getContainingIframe(this.$2) || this.$2;
                            e = b("ANUtils").findWidestParentElement(e, null);
                            var f = b("ANUtils").calculateLargestMargin(e);
                            this.$8 = d - f * 2;
                            if (this.$8 < a) this.$8 = a, f = e.getBoundingClientRect().right - a;
                            else if (this.$8 > c && this.$9) {
                                d = this.$8 - c;
                                f += d / 2;
                                this.$8 = c
                            }
                            return f
                        };
                        c.$10 = function() {
                            __p && __p();
                            var a = this.$2.querySelectorAll(".fbSlot");
                            if (a.length === 0) {
                                this.$7 && this.$7();
                                this.$5 && this.$5();
                                return
                            }
                            var c = a.length,
                                d = this.$1[0].creativeMarkupBackup,
                                e = !!d,
                                f = b("ANUtils").getContainingIframe(this.$2),
                                h = this.$11();
                            h = new(b("ANFullWidthLoader"))(!0, f, this.$2, this.$2, this.$8, this.$3, h, !0);
                            var i = this.$8 / 2,
                                j = h.resize(this.$8, i * c);
                            if (e && !j) this.$3.setLogLevel(this.$1[0].features.logLevel || 3), this.$3.frameReady(), this.$3.setUnifiedLoggingURL(this.$1[0].unifiedLoggingURL), this.$3.event(g), b("nullthrows")(d).use_carousel_stitch = !0, h.restoreOriginalStyles(), this.$1[0].creativeMarkup = b("nullthrows")(d), this.$1[0].features.resizeMediaView = !1, this.$4(this.$1[0], this.$2);
                            else {
                                f === null && (h.restoreOriginalStyles(), this.$2.style.height = "auto");
                                e = 0;
                                for (var j = 0; j < c; j++) {
                                    d = a[j];
                                    d.style.height = i + "px";
                                    f = this.$1[e++];
                                    this.$4(f, d)
                                }
                                e === 0 && this.$5 && this.$5();
                                this.$6 && this.$6()
                            }
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANGenericViewabilityObserver", ["AdQualityViewabilityMonitor", "OnScreenBehavior.anweb", "OnScreenBehaviorManager.anweb"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = function(b) {
                        __p && __p();
                        babelHelpers.inheritsLoose(a, b);

                        function a(a) {
                            var c;
                            c = b.call(this) || this;
                            c.$ANGenericViewabilityBehavior1 = a;
                            return c
                        }
                        var c = a.prototype;
                        c.onPartiallyEntered = function() {
                            this.$ANGenericViewabilityBehavior1()
                        };
                        return a
                    }(b("OnScreenBehavior.anweb"));
                    a = {
                        observe: function(a, c) {
                            var d = new(b("OnScreenBehaviorManager.anweb"))();
                            a = new(b("AdQualityViewabilityMonitor"))(a, !1);
                            a.attachBehaviorManager(d);
                            a = new g(c);
                            d.addBehavior(a)
                        }
                    };
                    e.exports = a
                }), null);
                __d("ANRecirculationPagination", ["ANGenericViewabilityObserver", "ANUtils", "VPAIDDomUtils", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("VPAIDDomUtils").div,
                        h = "lightgray",
                        i = function(a) {
                            return ES("Object", "assign", !1, {}, a, {
                                onAdLoaded: function() {},
                                onAdError: function() {},
                                onUnitLoaded: void 0,
                                onUnitError: void 0,
                                onMediaLoaded: void 0,
                                onRewardCompleted: void 0,
                                onAdClosed: void 0
                            })
                        };
                    a = function() {
                        __p && __p();

                        function a(a) {
                            __p && __p();
                            var c = this;
                            this.cancelNextPage = b("ANUtils").once(function() {
                                if (c.$2 || c.$1 == null) return;
                                c.$4 = !0;
                                c.$1.style.display = "none";
                                c.$3.onCancelledPage()
                            });
                            this.loadNextPage = b("ANUtils").once(function() {
                                __p && __p();
                                c.$1 = g("fbRecircPage-" + (c.$3.currentPage + 1));
                                var a = c.$1;
                                if (a == null) return;
                                b("nullthrows")(c.$3.element.parentElement).appendChild(a);
                                a = ES("Object", "assign", !1, {}, i(c.$3.adInputData), {
                                    rootElement: c.$1,
                                    recircpageidx: c.$3.currentPage + 1,
                                    recircunitid: c.$3.unitId,
                                    onUnitLoaded: function() {
                                        c.$2 = !0, c.hideLoadMoreButton()
                                    },
                                    onUnitError: function() {
                                        c.hideLoadMoreButton()
                                    },
                                    onAdLoaded: function() {
                                        c.$2 = !0, c.hideLoadMoreButton()
                                    }
                                });
                                c.$3.tagStateContainer.slots.push(a)
                            });
                            this.$3 = a;
                            this.$1 = null;
                            this.$2 = !1;
                            this.$4 = !1;
                            this.$3.showLoadMoreButton = a.showLoadMoreButton;
                            this.$3.showLoadMoreButton && this.setUpLoadMoreButton()
                        }
                        var c = a.prototype;
                        c.observe = function() {
                            this.$3.nextPageTriggerElement && b("ANGenericViewabilityObserver").observe(this.$3.nextPageTriggerElement, this.loadNextPage), this.$3.cancelPageTriggerElement && b("ANGenericViewabilityObserver").observe(this.$3.cancelPageTriggerElement, this.cancelNextPage)
                        };
                        c.setUpLoadMoreButton = function() {
                            __p && __p();
                            var a = this,
                                b = this.$3.unit.getLoadMoreButton();
                            b && (b.style.display = "inline", b.onclick = function() {
                                __p && __p();
                                a.$3.onLoadMoreButtonClick();
                                var c = a.$3.unit.getLoadMoreButtonLabel(),
                                    d = a.$3.unit.getLoadMoreButtonSpinner();
                                if (c && d) {
                                    b.style.backgroundColor = h;
                                    c.style.display = "none";
                                    d.style.display = "block";
                                    if (!a.$4) {
                                        a.loadNextPage();
                                        return
                                    }
                                    a.$4 = !1;
                                    if (a.$2 === !0) {
                                        a.showNextPageElement();
                                        a.hideLoadMoreButton();
                                        return
                                    }
                                    a.loadNextPage();
                                    a.showNextPageElement()
                                }
                            })
                        };
                        c.showNextPageElement = function() {
                            this.$1 && (this.$1.style.display = "block")
                        };
                        c.hideLoadMoreButton = function() {
                            var a = this.$3.unit.getLoadMoreButton();
                            a && !this.$4 && (a.style.display = "none")
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("ANRecirculationUnit", ["AdImpressionBehavior.anweb", "AdQualityViewabilityMonitor", "ANGenericViewabilityObserver", "ANLinkOpener", "ANUtils", "OnScreenBehaviorManager.anweb", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = 1e4,
                        h = 1e3;
                    a = function() {
                        __p && __p();

                        function a(a, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                            this.$1 = a, this.$2 = c, this.$3 = d, this.$4 = e, this.$5 = f, this.$6 = g, this.$7 = i, this.$8 = j, this.$9 = k, this.$10 = l, this.$11 = h, this.$12 = [], this.$13 = new(b("ANLinkOpener"))(e), this.$14 = m, this.$16 = o, this.$15 = n
                        }
                        a.render = function(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                            b = new a(b, c, d, e, f, g, h, i, j, k, l, m, n, o);
                            b.$17();
                            return b
                        };
                        var c = a.prototype;
                        c.getBottomOverlay = function() {
                            return this.$4.querySelector(".fbRecirculationBottomOverlay")
                        };
                        c.getTopOverlay = function() {
                            return this.$4.querySelector(".fbRecirculationTopOverlay")
                        };
                        c.getLoadMoreButton = function() {
                            return this.$4.querySelector(".fbRecirculationLoadMoreButton")
                        };
                        c.getLoadMoreButtonLabel = function() {
                            var a = this.getLoadMoreButton();
                            return !a ? null : a.querySelector(".fbRecirculationLoadMoreButtonLabel")
                        };
                        c.getLoadMoreButtonSpinner = function() {
                            var a = this.getLoadMoreButton();
                            return !a ? null : a.querySelector(".fbRecirculationLoadMoreButtonSpinner")
                        };
                        c.$18 = function(a, c) {
                            var d = this,
                                e = c.querySelector(".fbArticleImage"),
                                f = new(b("OnScreenBehaviorManager.anweb"))();
                            c = new(b("AdQualityViewabilityMonitor"))(c, this.$6.useIntersectionObserver === !0);
                            c.attachBehaviorManager(f);
                            var g = new(b("AdImpressionBehavior.anweb"))(function() {
                                d.$7(a), d.$19(), window.setTimeout(function() {
                                    d.$19()
                                }, h)
                            }, function() {});
                            e && (e.complete && g.mediaLoaded(), e.addEventListener("load", function() {
                                g.mediaLoaded()
                            }));
                            f.addBehavior(g)
                        };
                        c.$20 = function(a, b, c) {
                            var d = this;
                            this.$18(a, c);
                            var e = !1;
                            c.addEventListener("click", function() {
                                if (e) return;
                                d.$9(a);
                                d.$13.open(b.link);
                                e = !0
                            })
                        };
                        c.$21 = function(a, b) {
                            b.innerHTML = this.$5;
                            var c = b.querySelector(".fbArticleImage"),
                                d = b.querySelector(".fbArticleTitle"),
                                e = b.querySelector(".fbArticleSubtitle");
                            b = b.querySelector(".fbArticleSource");
                            c && (c.src = a.image || "");
                            d && (d.textContent = a.title);
                            e && (e.textContent = a.summary || "");
                            b && (b.textContent = a.source)
                        };
                        c.$19 = function() {
                            var a = Math.round(window.top.scrollY);
                            a = {
                                absolute: a,
                                percentage: Math.round(100 * a / (window.top.document.body.scrollHeight - window.top.innerHeight)),
                                document_w: window.top.document.body.scrollWidth,
                                document_h: window.top.document.body.scrollHeight
                            };
                            this.$10(a)
                        };
                        c.$22 = function() {
                            var a = this,
                                b = -Infinity;
                            window.setInterval(function() {
                                var c = Math.round(window.top.scrollY);
                                if (c <= b) return;
                                a.$19();
                                b = c
                            }, g)
                        };
                        c.$17 = function() {
                            __p && __p();
                            var a = this,
                                c = this.$4.querySelectorAll(".fbSlot"),
                                d = 0,
                                e = 0;
                            if (c.length === 0) {
                                this.$16 && this.$16();
                                this.$14 && this.$14();
                                return
                            }
                            this.$3 === 0 && this.$6.recircLogScrollDepth && this.$22();
                            if (this.$6.recircBlank) {
                                var f = document.createElement("div");
                                b("nullthrows")(this.$4.parentElement).appendChild(f);
                                b("ANGenericViewabilityObserver").observe(f, b("ANUtils").once(function() {
                                    a.$8()
                                }));
                                f.className = "fbBlankRecirc";
                                f.style.height = "1px";
                                this.$4.style.display = "none"
                            }
                            for (var f = 0; f < c.length; f++) {
                                var g = c[f];
                                if (ES(g.classList, "contains", !0, "fbSlotAd")) {
                                    var h = this.$2[d++];
                                    this.$12.push(h);
                                    this.$11(h, g)
                                } else if (ES(g.classList, "contains", !0, "fbSlotArticle")) {
                                    h = this.$1[e++];
                                    this.$12.push(h);
                                    this.$21(h, g);
                                    this.$20(f, h, g)
                                }
                            }
                            d === 0 && this.$14 && this.$14();
                            this.$15 && this.$15();
                            b("ANUtils").autofitIfInDfpIframe(this.$4);
                            b("ANUtils").autofitTextWhereNeeded(this.$4)
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("AdNetworkRecirculationTagOptionsInfiniteScroll", [], (function(a, b, c, d, e, f) {
                    e.exports = ES("Object", "freeze", !1, {
                        CONSERVATIVE: "conservative",
                        EAGER: "eager",
                        OFF: "off",
                        AUTO: "auto"
                    })
                }), null);
                __d("AdNetworkRecirculationTagOptionsShowMoreButton", [], (function(a, b, c, d, e, f) {
                    e.exports = ES("Object", "freeze", !1, {
                        ON: "on",
                        OFF: "off",
                        AUTO: "auto"
                    })
                }), null);
                __d("ANCoreProxy", ["AdNetworkRecirculationTagOptionsInfiniteScroll", "AdNetworkRecirculationTagOptionsShowMoreButton", "ANAdManager", "ANLogger", "ANMultiAdsUnit", "ANMWebUnifiedLoggingRecirculationEvent", "ANRecirculationPagination", "ANRecirculationUnit", "ANUtils", "VPAIDDomUtils", "getTime", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = b("VPAIDDomUtils").div;
                    a = function() {
                        __p && __p();

                        function a(a) {
                            var c = this;
                            this.$1 = !1;
                            this.$2 = a;
                            this.$3 = new(b("ANLogger"))(3, a.tagJsInitTime, b("ANUtils").getNavigationStart(), this.$4(), this.$2.iframe, this.$2.domain);
                            window.addEventListener("pagehide", function() {
                                c.$1 || c.$3.event("ADNW_UNLOAD_BEFORE_ADLOADED")
                            })
                        }
                        var c = a.prototype;
                        c.$4 = function() {
                            return b("ANUtils").onlyString(this.$2.data.key || this.$2.data.keys && this.$2.data.keys[0])
                        };
                        c.sendToFacebook = function(a) {
                            b("ANUtils").sendToFacebook(this.$2.iframe, this.$2.domain, a)
                        };
                        c.renderAd = function(a, c, d, e, f) {
                            var g = ES("Object", "assign", !1, {}, this.$2, {
                                data: a
                            });
                            g = new(b("ANAdManager"))(g, c);
                            g.renderAd(a, d, e, f)
                        };
                        c.$5 = function(a) {
                            __p && __p();
                            var b = [],
                                c = a.keys,
                                d = a.nativeAds;
                            if (a.nativeAd) b = [a];
                            else if (d && c)
                                for (var e = 0; e < d.length; e++) {
                                    var f = ES("Object", "assign", !1, {}, a);
                                    f.key = c[e];
                                    f.nativeAd = d[e];
                                    delete f.keys;
                                    delete f.nativeAds;
                                    b.push(f)
                                }
                            return b
                        };
                        c.$6 = function() {
                            return b("ANUtils").onlyString(this.$2.data.requestId)
                        };
                        c.$7 = function() {
                            return b("ANUtils").onlyString(this.$2.data.recircUnitId)
                        };
                        c.$8 = function(a, c, d, e, f, h) {
                            __p && __p();
                            var i = this,
                                j = a.features,
                                k = this.$2.rootElement,
                                l = null,
                                m = this.$5(a),
                                n = j.maxPageRecirc != null && j.maxPageRecirc > 0,
                                o = this.$2.recircpageidx || 0;
                            if (n && o === 0) {
                                var p = g("fbRecircPage-0"),
                                    q = this.$2.rootElement;
                                q.appendChild(p);
                                k = p
                            }
                            if (!b("ANUtils").isInDfpIframe(k) && j.wrapRecirculationInIframe) {
                                q = document.createElement("div");
                                k.innerHTML = "";
                                k.appendChild(q);
                                j.wrapRecirculationInIframe && (l = b("ANUtils").wrapInIframe(k, q));
                                k = q
                            }
                            a.wrapperMarkup && (k.innerHTML = a.wrapperMarkup);
                            p = b("ANRecirculationUnit").render(b("nullthrows")(a.recommendedContent), m, o, k, b("nullthrows")(a.wrapperItemMarkup), j, function(a, b) {
                                i.renderAd(a, b, c, d, e)
                            }, function(a) {
                                i.sendToFacebook({
                                    name: "recirc",
                                    params: {
                                        reqId: i.$6(),
                                        unitId: i.$7(),
                                        payload: {
                                            type: b("ANMWebUnifiedLoggingRecirculationEvent").IMPRESSION,
                                            page: o,
                                            index: a
                                        }
                                    }
                                })
                            }, function() {
                                i.sendToFacebook({
                                    name: "recirc",
                                    params: {
                                        reqId: i.$6(),
                                        unitId: i.$7(),
                                        payload: {
                                            type: b("ANMWebUnifiedLoggingRecirculationEvent").BLANK_IMPRESSION,
                                            page: 0,
                                            index: 0
                                        }
                                    }
                                })
                            }, function(a) {
                                if (j.skipRecircClickEvent === !0) return;
                                i.sendToFacebook({
                                    name: "recirc",
                                    params: {
                                        reqId: i.$6(),
                                        unitId: i.$7(),
                                        payload: {
                                            type: b("ANMWebUnifiedLoggingRecirculationEvent").CLICK,
                                            page: o,
                                            index: a
                                        }
                                    }
                                })
                            }, function(a) {
                                i.sendToFacebook({
                                    name: "recirc",
                                    params: {
                                        reqId: i.$6(),
                                        unitId: i.$7(),
                                        payload: {
                                            type: b("ANMWebUnifiedLoggingRecirculationEvent").SCROLL_UPDATE,
                                            page: 0,
                                            index: 0,
                                            scroll_update: a
                                        }
                                    }
                                })
                            }, function() {
                                return e(a.errorCode || "1098", a.errorMsg || "Error rendering recirc", a.placementId)
                            }, function() {
                                f && f(a.placementId, {
                                    hasInfiniteScroll: n
                                })
                            }, function() {
                                h && h(a.errorCode || "1098", a.errorMsg || "Error rendering recirc", a.placementId)
                            });
                            q = b("nullthrows")(a.recirculation, "Recirculation payload is not available");
                            m = q.options.infinite_scroll;
                            q = q.options.show_more_button;
                            var r = m !== b("AdNetworkRecirculationTagOptionsInfiniteScroll").OFF;
                            m = m === b("AdNetworkRecirculationTagOptionsInfiniteScroll").EAGER;
                            q = q === b("AdNetworkRecirculationTagOptionsShowMoreButton").ON;
                            var s, t;
                            r && (s = m ? null : p.getBottomOverlay(), t = p.getTopOverlay());
                            if (n && j.maxPageRecirc != null && o < j.maxPageRecirc && !j.recircBlank && (r || q)) {
                                m = this.$2.data.recircUnitId;
                                r = this.$2.adInputData;
                                var u = this.$2.tagStateContainer;
                                if (m != null && r != null && u != null) {
                                    p = new(b("ANRecirculationPagination"))({
                                        currentPage: o,
                                        element: k,
                                        nextPageTriggerElement: t,
                                        unit: p,
                                        cancelPageTriggerElement: s,
                                        showLoadMoreButton: q,
                                        unitId: m,
                                        adInputData: r,
                                        tagStateContainer: u,
                                        logger: this.$3,
                                        onCancelledPage: function() {
                                            i.sendToFacebook({
                                                name: "recirc",
                                                params: {
                                                    reqId: i.$6(),
                                                    unitId: i.$7(),
                                                    payload: {
                                                        type: b("ANMWebUnifiedLoggingRecirculationEvent").CANCEL_PAGE_LOAD,
                                                        page: o + 1,
                                                        index: -1
                                                    }
                                                }
                                            })
                                        },
                                        onLoadMoreButtonClick: function() {
                                            i.sendToFacebook({
                                                name: "client_event",
                                                params: {
                                                    key: i.$4(),
                                                    payload: {
                                                        client_ts: b("getTime")(),
                                                        event_name: "ADNW_WEB_RECIRCULATION_LOAD_MORE_BUTTON_CLICK",
                                                        height_in_view: 0,
                                                        latency_since_navigation_start: 0,
                                                        latency_since_sdk_init: 0,
                                                        left: 0,
                                                        page_height: 0,
                                                        page_width: 0,
                                                        scroll_left: 0,
                                                        scroll_top: 0,
                                                        top: 0,
                                                        viewability: "UNKNOWN",
                                                        viewable_detection: "",
                                                        viewable_reason: "",
                                                        width_in_view: 0
                                                    }
                                                }
                                            })
                                        }
                                    });
                                    p.observe()
                                }
                            }
                            if (l != null) {
                                q = b("nullthrows")(l.contentDocument.body);
                                q.style.overflowY = "hidden";
                                b("ANUtils").resizeElement(l, "100%", k.clientHeight)
                            }
                        };
                        c.$9 = function(a, c, d, e, f, g) {
                            var h = this,
                                i = this.$2.rootElement,
                                j = this.$5(a);
                            a.wrapperMarkup && (i.innerHTML = a.wrapperMarkup);
                            b("ANMultiAdsUnit").render(j, i, this.$2, !!this.$2.data.features.shouldLimitHeight, function(a, b) {
                                h.renderAd(a, b, c, d, e)
                            }, function() {
                                return e(a.errorCode || "1097", a.errorMsg || "Error rendering multi ads unit", a.placementId)
                            }, function() {
                                f && f(a.placementId)
                            }, function() {
                                g && g(a.errorCode || "1097", a.errorMsg || "Error rendering multi ads unit", a.placementId)
                            })
                        };
                        c.$10 = function(a, b, c, d, e, f) {
                            __p && __p();
                            var g = !!a.recommendedContent,
                                h = !g && !!a.wrapperMarkup;
                            if (g) {
                                this.$8(a, b, c, d, e, f);
                                return
                            } else if (h) {
                                this.$9(a, b, c, d, e, f);
                                return
                            }
                            g = this.$5(a);
                            h = g.length > 1;
                            e = this.$2.rootElement;
                            for (var f = 0; f < g.length; f++) {
                                a = g[f];
                                var i = e;
                                h && (i = document.createElement("div"), i.className = "fbAdSlot-" + f, e.appendChild(i));
                                this.renderAd(a, i, b, c, d)
                            }
                        };
                        c.adLoaded = function(a, b, c, d, e, f) {
                            __p && __p();
                            if (this.$1) {
                                this.$3.error("Multiple ADLOADED attempted.");
                                return
                            }
                            if (a.errorCode === void 0) {
                                var g = a.features;
                                this.$3.setLogLevel(g.logLevel || 3);
                                this.$3.frameReady();
                                this.$10(a, b, c, d, e, f);
                                this.$1 = !0
                            } else if (a.success === void 0) {
                                this.$3.error();
                                d(a.errorCode, a.errorMsg, a.placementId);
                                return
                            } else {
                                this.$3.error();
                                d("1099", "Invalid ad data", a.placementId);
                                return
                            }
                        };
                        return a
                    }();
                    e.exports = a
                }), null);
                __d("legacy:fb.fbadnw60", ["ANCoreProxy", "ANUtils", "getTime", "nullthrows"], (function(a, b, c, d, e, f) {
                    "use strict";
                    __p && __p();
                    var g = window;

                    function h(a, b) {
                        __p && __p();
                        var c = function(a) {
                                g.setTimeout(function() {
                                    return b(a)
                                }, 0)
                            },
                            d = a.push;
                        a.push = function(b) {
                            c(b), d.call(a, b)
                        };
                        for (var e = a, f = ES("Array", "isArray", !1, e), h = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                            var i;
                            if (f) {
                                if (h >= e.length) break;
                                i = e[h++]
                            } else {
                                h = e.next();
                                if (h.done) break;
                                i = h.value
                            }
                            i = i;
                            c(i)
                        }
                    }
                    var i = function(a, c) {
                        __p && __p();
                        if (a.rootElement.dataset.parsed) return;
                        a.rootElement.dataset.parsed = "true";
                        a.domain = b("ANUtils").extractOrigin(a.iframe.src);
                        a.data = {};
                        a.core = new(b("ANCoreProxy"))(a);
                        var d = function(c) {
                                __p && __p();
                                if (a.isAdLoaded) return;
                                a.isAdLoaded = !0;
                                var d = b("nullthrows")(c.iframeData),
                                    e = c.data.features || {},
                                    f = c.data.clientEventURL || "";
                                if (d.result === "valid") {
                                    a.data.result = d.result;
                                    d = [];
                                    var g = [];
                                    if (a.data.keys) {
                                        d = a.data.keys;
                                        var h = c.data.nativeAds;
                                        h && (g = ES(h, "map", !0, function(a) {
                                            return a.href
                                        }))
                                    } else {
                                        h = c.data.nativeAd;
                                        g.push(h && h.href);
                                        d.push(a.data.key)
                                    }
                                    for (var h = 0; h < d.length; h++) a.core.sendToFacebook({
                                        name: "init",
                                        params: {
                                            key: b("ANUtils").onlyString(d[h]),
                                            features: e,
                                            clientEventUrl: b("ANUtils").onlyString(f),
                                            clickUrl: b("ANUtils").onlyString(g[h])
                                        }
                                    });
                                    g = a.data
                                } else g = {
                                    errorCode: "1007",
                                    errorMsg: "Incorrect Domain",
                                    placementId: c.placementId || ""
                                };
                                a.core.adLoaded(g, a.iframe, function() {
                                    a.onAdLoaded(a.rootElement)
                                }, ES(a.onAdError, "bind", !0, a), function(b, c) {
                                    a.onUnitLoaded && a.onUnitLoaded(a.rootElement, c)
                                }, function() {
                                    a.onUnitError && a.onUnitError("", "Recirculation unit failed to load", a.placementId || a.placementid || "")
                                })
                            },
                            e = function(c, e) {
                                __p && __p();
                                if (e.source !== c.iframe.contentWindow) return;
                                c = b("nullthrows")(c.iframeData);
                                switch (e.name) {
                                    case "iframeLoaded":
                                        c.result || (c.result = e.data.result, c.pluginPerf = e.data.pluginPerf);
                                        a.xhrLoaded && d(a);
                                        break;
                                    case "xhrLoaded":
                                        a.xhrLoaded = !0;
                                        e = e.data;
                                        if (e.flags)
                                            for (var f = e.flags, g = ES("Array", "isArray", !1, f), h = 0, f = g ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                                var i;
                                                if (g) {
                                                    if (h >= f.length) break;
                                                    i = f[h++]
                                                } else {
                                                    h = f.next();
                                                    if (h.done) break;
                                                    i = h.value
                                                }
                                                i = i;
                                                a.data[i] = !0
                                            }
                                        for (var j in e) a.data[j] = e[j];
                                        (a.data.code || c.result) && d(a);
                                        break
                                }
                            };
                        a.core.sdkJSComplete = b("getTime")();
                        h(a.events, function(b) {
                            return e(a, b)
                        })
                    };
                    a = function() {
                        var a = b("ANUtils").getV60TagStateContainer();
                        a.sdkInitialized || (a.sdkInitialized = !0, h(a.ads, function(b) {
                            return i(b, a)
                        }))
                    };
                    a()
                }), 3);
            }
        }).call(global);
    })(window.inDapIF ? parent.window : window, window);
} catch (e) {
    new Image().src = "https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m=' + encodeURIComponent('{"error":"LOAD", "extra": {"name":"' + e.name + '","line":"' + (e.lineNumber || e.line) + '","script":"' + (e.fileName || e.sourceURL || e.script) + '","stack":"' + (e.stackTrace || e.stack) + '","revision":"1001278076","namespace":"FB","message":"' + e.message + '"}}');
}