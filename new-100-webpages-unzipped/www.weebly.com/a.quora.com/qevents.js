! function(t, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.qevents = r() : t.qevents = r()
}(this, function() {
    return function(t) {
        function r(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        var e = {};
        return r.m = t, r.c = e, r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            } : function() {
                return t
            };
            return r.d(e, "a", e), e
        }, r.o = function(t, r) {
            return Object.prototype.hasOwnProperty.call(t, r)
        }, r.p = "", r(r.s = "./shared/qevents/main.js")
    }({
        "./shared/Class.js": function(t, r) {
            function e(t, r) {
                function e() {
                    if (o || (t.call(a), n(l, r, u), o = !0, r = null), this !== a) {
                        var e = this.__init__;
                        e && e.apply(this, arguments)
                    }
                }
                var o, u = s.prototype = t.prototype,
                    l = new s;
                return e.prototype = l, e.extend = i, l.constructor = e, e
            }

            function n(t, r, e) {
                for (var n in r) r.hasOwnProperty(n) && (t[n] = e ? o(n, r, e) : r[n])
            }

            function o(t, r, e) {
                var n = r[t],
                    o = e[t];
                return "function" == typeof n && "function" == typeof o && n !== o && u.test(n) ? function() {
                    var r = this._super;
                    this._super = e[t];
                    try {
                        return n.apply(this, arguments)
                    } finally {
                        this._super = r
                    }
                } : n
            }

            function i(t) {
                return e(this, t)
            }
            var u = /xyz/.test(function() {
                    xyz
                }) ? /\b_super\b/ : /.*/,
                s = function() {},
                a = {};
            r.Class = i.call(function() {}, {})
        },
        "./shared/polyfills/array.js": function(t, r) {
            var e = function(t, r, e) {
                "function" == typeof Object.defineProperty ? Object.defineProperty(t, r, {
                    configurable: !0,
                    value: e,
                    writable: !0,
                    enumerable: !1
                }) : t[r] = e
            };
            if (!Array.prototype.every) {
                var n = function(t, r) {
                    "use strict";
                    var e, n;
                    if (null === this) throw new TypeError("this is null or not defined");
                    var o = Object(this),
                        i = o.length >>> 0;
                    if ("function" != typeof t) throw new TypeError;
                    for (arguments.length > 1 && (e = r), n = 0; n < i;) {
                        var u;
                        if (n in o) {
                            u = o[n];
                            if (!t.call(e, u, n, o)) return !1
                        }
                        n++
                    }
                    return !0
                };
                e(Array.prototype, "every", n)
            }
            if (!Array.prototype.some) {
                var o = function(t) {
                    "use strict";
                    if (null === this) throw new TypeError("Array.prototype.some called on null or undefined");
                    if ("function" != typeof t) throw new TypeError;
                    for (var r = Object(this), e = r.length >>> 0, n = arguments.length >= 2 ? arguments[1] : void 0, o = 0; o < e; o++)
                        if (o in r && t.call(n, r[o], o, r)) return !0;
                    return !1
                };
                e(Array.prototype, "some", o)
            }
            if (!Array.prototype.indexOf) {
                var i = function(t, r) {
                    var e;
                    if (null === this) throw new TypeError('"this" is null or not defined');
                    var n = Object(this),
                        o = n.length >>> 0;
                    if (0 === o) return -1;
                    var i = +r || 0;
                    if (Math.abs(i) === Infinity && (i = 0), i >= o) return -1;
                    for (e = Math.max(i >= 0 ? i : o - Math.abs(i), 0); e < o;) {
                        if (e in n && n[e] === t) return e;
                        e++
                    }
                    return -1
                };
                e(Array.prototype, "indexOf", i)
            }
            if (!Array.prototype.forEach) {
                var u = function(t, r) {
                    var e, n;
                    if (null === this) throw new TypeError(" this is null or not defined");
                    var o = Object(this),
                        i = o.length >>> 0;
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    for (arguments.length > 1 && (e = r), n = 0; n < i;) {
                        var u;
                        n in o && (u = o[n], t.call(e, u, n, o)), n++
                    }
                };
                e(Array.prototype, "forEach", u)
            }
            if (!Array.prototype.map) {
                var s = function(t, r) {
                    var e, n, o;
                    if (null === this) throw new TypeError(" this is null or not defined");
                    var i = Object(this),
                        u = i.length >>> 0;
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    for (arguments.length > 1 && (e = r), n = new Array(u), o = 0; o < u;) {
                        var s, a;
                        o in i && (s = i[o], a = t.call(e, s, o, i), n[o] = a), o++
                    }
                    return n
                };
                e(Array.prototype, "map", s)
            }
            if (!Array.prototype.filter) {
                var a = function(t) {
                    "use strict";
                    if (void 0 === this || null === this) throw new TypeError;
                    var r = Object(this),
                        e = r.length >>> 0;
                    if ("function" != typeof t) throw new TypeError;
                    for (var n = [], o = arguments.length >= 2 ? arguments[1] : void 0, i = 0; i < e; i++)
                        if (i in r) {
                            var u = r[i];
                            t.call(o, u, i, r) && n.push(u)
                        }
                    return n
                };
                e(Array.prototype, "filter", a)
            }
            if (!Array.prototype.reduce) {
                var l = function(t) {
                    "use strict";
                    if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                    if ("function" != typeof t) throw new TypeError(t + " is not a function");
                    var r, e = Object(this),
                        n = e.length >>> 0,
                        o = 0;
                    if (2 == arguments.length) r = arguments[1];
                    else {
                        for (; o < n && !(o in e);) o++;
                        if (o >= n) throw new TypeError("Reduce of empty array with no initial value");
                        r = e[o++]
                    }
                    for (; o < n; o++) o in e && (r = t(r, e[o], o, e));
                    return r
                };
                e(Array.prototype, "reduce", l)
            }
            if (!Array.prototype.lastIndexOf) {
                var f = function(t) {
                    "use strict";
                    if (void 0 === this || null === this) throw new TypeError;
                    var r, e, n = Object(this),
                        o = n.length >>> 0;
                    if (0 === o) return -1;
                    for (r = o - 1, arguments.length > 1 && (r = Number(arguments[1]), r != r ? r = 0 : 0 !== r && r != 1 / 0 && r != -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), e = r >= 0 ? Math.min(r, o - 1) : o - Math.abs(r); e >= 0; e--)
                        if (e in n && n[e] === t) return e;
                    return -1
                };
                e(Array.prototype, "lastIndexOf", f)
            }
            if (!Array.prototype.includes) {
                var p = function(t) {
                    "use strict";
                    if (null == this) throw new TypeError("Array.prototype.includes called on null or undefined");
                    var r = Object(this),
                        e = parseInt(r.length, 10) || 0;
                    if (0 === e) return !1;
                    var n, o = parseInt(arguments[1], 10) || 0;
                    o >= 0 ? n = o : (n = e + o) < 0 && (n = 0);
                    for (var i; n < e;) {
                        if (i = r[n], t === i || t !== t && i !== i) return !0;
                        n++
                    }
                    return !1
                };
                e(Array.prototype, "includes", p)
            }
        },
        "./shared/polyfills/date.js": function(t, r) {
            Date.now || (Date.now = function() {
                return (new Date).getTime()
            })
        },
        "./shared/polyfills/function.js": function(t, r) {
            Function.prototype.bind || (Function.prototype.bind = function(t) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var r = Array.prototype.slice.call(arguments, 1),
                    e = this,
                    n = function() {},
                    o = function() {
                        return e.apply(this instanceof n ? this : t, r.concat(Array.prototype.slice.call(arguments)))
                    };
                return this.prototype && (n.prototype = this.prototype), o.prototype = new n, o
            })
        },
        "./shared/polyfills/object.js": function(t, r) {
            Object.keys || (Object.keys = function() {
                "use strict";
                var t = Object.prototype.hasOwnProperty,
                    r = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    e = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    n = e.length;
                return function(o) {
                    if ("object" != typeof o && ("function" != typeof o || null === o)) throw new TypeError("Object.keys called on non-object");
                    var i, u, s = [];
                    for (i in o) t.call(o, i) && s.push(i);
                    if (r)
                        for (u = 0; u < n; u++) t.call(o, e[u]) && s.push(e[u]);
                    return s
                }
            }()), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function(t, r) {
                    "use strict";
                    if (null === t || t === undefined) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var o = arguments[n];
                        if (null !== o && o !== undefined)
                            for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                    }
                    return e
                },
                writable: !0,
                configurable: !0
            }), Object.entries || (Object.entries = function(t) {
                for (var r = Object.keys(t), e = r.length, n = new Array(e); e--;) n[e] = [r[e], t[r[e]]];
                return n
            })
        },
        "./shared/polyfills/string.js": function(t, r) {
            String.prototype.endsWith || (String.prototype.endsWith = function(t, r) {
                var e = this.toString();
                ("number" != typeof r || !isFinite(r) || Math.floor(r) !== r || r > e.length) && (r = e.length), r -= t.length;
                var n = e.indexOf(t, r);
                return -1 !== n && n === r
            }), String.prototype.startsWith || (String.prototype.startsWith = function(t, r) {
                return r = r || 0, this.substr(r, t.length) === t
            }), String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }), String.prototype.includes || (String.prototype.includes = function(t, r) {
                "use strict";
                return "number" != typeof r && (r = 0), !(r + t.length > this.length) && -1 !== this.indexOf(t, r)
            })
        },
        "./shared/qevents/main.js": function(t, r, e) {
            e("./shared/polyfills/string.js"), e("./shared/polyfills/array.js"), e("./shared/polyfills/function.js"), e("./shared/polyfills/object.js"), e("./shared/polyfills/date.js"), e("./shared/qevents/pixel.js").init(), e("./shared/qevents/queue.js").flush()
        },
        "./shared/qevents/pixel.js": function(t, r, e) {
            function n() {
                try {
                    var t = i("ia_share_url");
                    if (null !== t) return t
                } catch (t) {}
                try {
                    return ia_document !== undefined && ia_document.shareURL
                } catch (t) {
                    return
                }
            }

            function o(t) {
                var r, e = [];
                for (var n in t) r = t[n], u(n) && s(r) && e.push(n + "=" + encodeURIComponent(r));
                return e.join("&")
            }

            function i(t) {
                var r = null,
                    e = [];
                return window.location.search.substr(1).split("&").forEach(function(n) {
                    e = n.split("="), e[0] === t && (r = decodeURIComponent(e[1]))
                }), r
            }

            function u(t) {
                return "string" == typeof t
            }

            function s(t) {
                return "string" == typeof t || !isNaN(Number(t))
            }

            function a() {
                function t(t, r) {
                    var e = window.history[t];
                    window.history[t] = function() {
                        var t = e.apply(this, arguments);
                        return r.apply(this, arguments), t
                    }
                }
                window.history.pushState && window.history.replaceState && (t("pushState", l), t("replaceState", l), window.addEventListener("popstate", l, !1))
            }

            function l() {
                !0 !== window.qp.disablePushState && r.quoraPixelHelper("track", "ViewContent")
            }
            var f, p = e("./shared/Class.js").Class,
                c = p.extend({
                    __init__: function(t) {
                        if ("string" != typeof t) throw new Error("Quora Pixel Error: The second argument passed to qp is invalid.");
                        this.uuid = t, this.lastViewContentUrl = ""
                    },
                    track: function(t, e) {
                        if ("string" != typeof t) throw new Error("Quora Pixel Error: The second argument passed to qp is invalid.");
                        var n, o, i = this._getIsFBIAUrl(),
                            u = this._getValueFromPassback(e),
                            s = this._getUrl();
                        this._shouldTrack(t, s) && (n = this._getMetadata(t, s, i, u), o = this._getPixelUrl(n), r.firePixel(o))
                    },
                    _shouldTrack: function(t, r) {
                        return ("ViewContent" != t || r != this.lastViewContentUrl) && ("ViewContent" == t && (this.lastViewContentUrl = r), !0)
                    },
                    _getMetadata: function(t, r, e, n) {
                        var o = {
                            j: 1,
                            u: r,
                            tag: t,
                            ts: (new Date).getTime()
                        };
                        return e && (o.fbia = 1), n !== undefined && (o.v = n), o
                    },
                    _getValueFromPassback: function(t) {
                        var r;
                        if (t !== undefined && null !== t && t.value !== undefined && "number" != typeof(r = t.value) && "string" != typeof r) throw new Error("Quora Pixel Error: The third argument passed to qp is invalid.");
                        return r
                    },
                    _getUrl: function() {
                        var t = n();
                        return t || (t = window.location.href), t
                    },
                    _getIsFBIAUrl: function() {
                        return Boolean(n())
                    },
                    _getPixelUrl: function(t) {
                        return this._getBasePixelUrl() + this.uuid + "/pixel?" + o(t)
                    },
                    _getBasePixelUrl: function() {
                        return "https://q.quora.com/_/ad/"
                    }
                }),
                h = p.extend({
                    __init__: function() {
                        this.uuidToPixel = {}
                    },
                    installPixel: function(t) {
                        if (this.uuidToPixel[t] === undefined) {
                            var r = new c(t);
                            this.uuidToPixel[t] = r
                        }
                    },
                    track: function(t, r) {
                        var e = Object.keys(this.uuidToPixel);
                        if (!e.length) throw new Error("Quora Pixel Error: Base pixel code is not installed properly.");
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            this.uuidToPixel[o].track(t, r)
                        }
                    }
                });
            r.quoraPixelHelper = function(t, r, e) {
                if ("string" != typeof arguments[0]) throw new Error("Quora Pixel Error: The first argument passed to qp is invalid.");
                "init" == t ? f.installPixel(r) : "track" == t && f.track(r, e)
            }, r.firePixel = function(t) {
                (new Image).src = t
            }, r.init = function() {
                if (!window.qp) throw new Error("Quora Pixel Error: Base pixel code is not installed properly.");
                window.qp.qp = r.quoraPixelHelper, a(), f = new h
            }, r.initializeStates = function() {
                f = new h
            }
        },
        "./shared/qevents/queue.js": function(t, r) {
            r.flush = function() {
                var t, r = window.qp;
                for (r.queue || (r.queue = []); r.queue.length;) t = r.queue.shift(), r.apply(r, t)
            }
        }
    })
});