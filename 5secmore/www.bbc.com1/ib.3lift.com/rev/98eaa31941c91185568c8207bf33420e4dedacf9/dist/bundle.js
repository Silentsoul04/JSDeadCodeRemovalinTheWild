! function(s) {
    function e(e) {
        for (var t, n, r = e[0], i = e[1], a = 0, o = []; a < r.length; a++) n = r[a], c[n] && o.push(c[n][0]), c[n] = 0;
        for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (s[t] = i[t]);
        for (u && u(e); o.length;) o.shift()()
    }
    var n = {},
        c = {
            1: 0
        };

    function i(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.e = function(a) {
        var e = [],
            n = c[a];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var t = new Promise(function(e, t) {
                    n = c[a] = [e, t]
                });
                e.push(n[2] = t);
                var r, o = document.createElement("script");
                o.charset = "utf-8", o.timeout = 120, i.nc && o.setAttribute("nonce", i.nc), o.src = i.p + "" + a + ".bundle.js", r = function(e) {
                    o.onerror = o.onload = null, clearTimeout(s);
                    var t = c[a];
                    if (0 !== t) {
                        if (t) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src,
                                i = new Error("Loading chunk " + a + " failed.\n(" + n + ": " + r + ")");
                            i.type = n, i.request = r, t[1](i)
                        }
                        c[a] = void 0
                    }
                };
                var s = setTimeout(function() {
                    r({
                        type: "timeout",
                        target: o
                    })
                }, 12e4);
                o.onerror = o.onload = r, document.head.appendChild(o)
            }
        return Promise.all(e)
    }, i.m = s, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i.oe = function(e) {
        throw console.error(e), e
    };
    var t = window.tl_jsonp = window.tl_jsonp || [],
        r = t.push.bind(t);
    t.push = e, t = t.slice();
    for (var a = 0; a < t.length; a++) e(t[a]);
    var u = r;
    i(i.s = 120)
}([function(e, t) {
    e.exports = function(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "m", function() {
        return u
    }), n.d(t, "c", function() {
        return l
    }), n.d(t, "d", function() {
        return d
    }), n.d(t, "e", function() {
        return f
    }), n.d(t, "t", function() {
        return h
    }), n.d(t, "o", function() {
        return p
    }), n.d(t, "n", function() {
        return v
    }), n.d(t, "g", function() {
        return m
    }), n.d(t, "r", function() {
        return y
    }), n.d(t, "j", function() {
        return _
    }), n.d(t, "w", function() {
        return I
    }), n.d(t, "s", function() {
        return A
    }), n.d(t, "l", function() {
        return w
    }), n.d(t, "f", function() {
        return b
    }), n.d(t, "u", function() {
        return E
    }), n.d(t, "v", function() {
        return k
    }), n.d(t, "k", function() {
        return M
    }), n.d(t, "q", function() {
        return T
    }), n.d(t, "p", function() {
        return S
    }), n.d(t, "h", function() {
        return x
    }), n.d(t, "a", function() {
        return C
    }), n.d(t, "i", function() {
        return L
    }), n.d(t, "x", function() {
        return D
    }), n.d(t, "b", function() {
        return O
    });
    n(18), n(40);
    var r = n(16),
        i = n.n(r),
        a = (n(47), n(28), n(29)),
        s = n.n(a),
        o = (n(20), n(24), n(12), n(13), n(65), n(115), n(6)),
        c = n(4);

    function u(e, t) {
        var n = t % e;
        return n < 0 ? n + e : n
    }

    function l() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = Array.from(t);
        return Object.assign.apply(null, r.map(function(t) {
            var n = {};
            return Object.keys(t).forEach(function(e) {
                "_" !== e[0] && (n[e] = t[e])
            }), n
        }))
    }

    function d(e, t) {
        return !!e && !!(e & Math.pow(2, t))
    }

    function f(e) {
        return e / (180 / Math.PI)
    }

    function h(e) {
        return o.a.setStyle(e, "display", "inline"), o.a.setStyle(e, "box-sizing", "content-box"), o.a.setStyle(e, "-webkit-box-sizing", "content-box"), o.a.setStyle(e, "-moz-box-sizing", "content-box"), o.a.setStyle(e, "padding", "0"), o.a.setStyle(e, "border", "0"), o.a.setStyle(e, "margin", "0"), o.a.setStyle(e, "float", "none"), o.a.setStyle(e, "outline", "none"), o.a.setStyle(e, "object-fit", "fill"), o.a.setStyle(e, "background", "none"), e
    }

    function p(e) {
        if (g(e)) return e;
        if (Array.isArray(e)) return e.reduce(function() {
            var n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            return function(e, t) {
                return e[t] = n, e
            }
        }(null), {});
        throw new TypeError("invalid arguments, objectify takes an object or an array")
    }

    function g(e) {
        return "object" === s()(e) && !Array.isArray(e) && null !== e
    }

    function v(e, t) {
        var n = e.filter(i.bind(null, t)),
            r = t.filter(i.bind(null, e));
        return n.concat(r);

        function i(e, t) {
            return -1 === e.indexOf(t)
        }
    }

    function m(e) {
        return e.reduce(function(e, t) {
            return e.concat(Array.isArray(t) ? m(t) : t)
        }, [])
    }

    function y(e) {
        return Math.floor((e + 1) * Math.random())
    }

    function _(e) {
        return !isNaN(e) && "number" == typeof e
    }

    function I(r, i, a) {
        if (e = r, parseFloat(e) !== parseInt(e, 10) || !_(e)) throw new TypeError("arg 0 of updateCopyAndHref must be an integer");
        var e, t;
        if (t = i, !("object" === ("undefined" == typeof Node ? "undefined" : s()(Node)) ? t instanceof Node : t && "object" === s()(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName)) throw new TypeError("arg 1 of updateCopyAndHref must be DOM element");
        if (!Array.isArray(a)) throw new TypeError("arg 2 of updateCopyAndHref must be an array");
        c.a.TEXT_FIELDS.forEach(function(e) {
            for (var t = i.getElementsByClassName("".concat(c.a.TL_CLASS_PREFIX).concat(e)), n = 0; n < t.length; n++) t[n].textContent = a[r][e]
        });
        for (var n = i.getElementsByClassName("".concat(c.a.TL_CLASS_PREFIX, "clickthrough-url")), o = 0; o < n.length; o++) n[o].href = a[r].clickthrough_url
    }

    function A(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function w(e, t) {
        return isNaN(e) && isNaN(t) ? NaN : isNaN(e) ? t : isNaN(t) ? e : Math.min(e, t)
    }

    function b(r, i) {
        var a = !1;
        return function() {
            if (!a) {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                r.apply(i || null, t)
            }
            a = !0
        }
    }

    function E(e) {
        return i()(e).reverse()
    }

    function k(e, t) {
        return function() {
            Math.random() < e && t.apply(void 0, arguments)
        }
    }

    function M(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
            r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
            i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "?";
        !1 !== r && (n.cb = T(5));
        var a, o, s, c = (a = n, o = {}, Object.keys(a).forEach(function(e) {
                var t = a[e];
                null != t && (o[e] = t)
            }), o),
            u = (s = c, Object.keys(s).map(function(e) {
                return "".concat(e, "=").concat(encodeURIComponent(s[e]))
            }).join("&")),
            l = e.replace(/\/$/, "");
        return C("//".concat(l, "/").concat(t).concat(i).concat(u))
    }

    function T(e) {
        if (e < 1) return NaN;
        if (1 === e) return Math.floor(10 * Math.random());
        var t = Math.pow(10, e - 1);
        return Math.floor(9 * Math.random() * t) + t
    }

    function S(e) {
        for (var r = S.options, t = r.parser[r.strictMode ? "strict" : "loose"].exec(e), i = {}, n = 14; n--;) i[r.key[n]] = t[n] || "";
        return i[r.q.name] = {}, i[r.key[12]].replace(r.q.parser, function(e, t, n) {
            t && (i[r.q.name][t] = n)
        }), i
    }

    function x(e) {
        if (!e) return e;
        var t = S(e),
            n = "";
        return "" !== t.port && (n = ":".concat(t.port)), "//".concat(t.host).concat(n).concat(t.relative)
    }

    function C(e) {
        return e ? "data:" === e.substring(0, 5) ? e : function(e) {
            if (0 <= e.indexOf("3lift.") || 0 <= e.indexOf("triplelift.")) return "https:";
            var t = S(e);
            if ("http" === t.protocol || "https" === t.protocol) return "".concat(t.protocol, ":");
            try {
                return window.location.protocol
            } catch (e) {
                return "https:"
            }
        }(e) + x(e) : e
    }

    function L() {
        return !!document.getElementById("tl-app")
    }

    function D() {
        return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "").toUpperCase()
    }
    S.options = {
        strictMode: !1,
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    };
    var O = function(e) {
        var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "GET";
        return new Promise(function(t, n) {
            var r = new XMLHttpRequest;
            r.open(i, e, !0), r.addEventListener("load", function(e) {
                200 <= r.status && r.status < 300 ? t(e) : n(r.statusText)
            }), r.addEventListener("error", function(e) {
                return n(e)
            }), r.send()
        })
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, t) {
    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    e.exports = function(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
    }
}, function(e, t, n) {
    "use strict";
    t.a = {
        NW: "NW",
        NE: "NE",
        SE: "SE",
        SW: "SW",
        BASE_Z_INDEX: 0,
        DEFAULT_ADCHOICES_URL: "https://optout.aboutads.info",
        TEXT_FIELDS: ["heading", "caption"],
        TINY_IMG_DATA: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        TL_CLASS_PREFIX: "tl-",
        ERROR_LEVELS: {
            UNKNOWN: 0,
            ERROR: 1,
            WARNING: 2,
            LOG: 3
        },
        COLORS: {
            BLACK: "#000",
            WHITE: "#fff"
        },
        DCO_PROTOCOLS: {
            DYNAMIC_CONTENT: 1,
            NATIVE_ADS: 2,
            DV_BLOCKING: 3
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return y
    });
    var r = n(2),
        i = n.n(r),
        a = n(48),
        o = n.n(a),
        s = n(26),
        c = n.n(s),
        u = n(83),
        l = n.n(u),
        d = n(49),
        f = n.n(d),
        h = n(112),
        p = n.n(h),
        g = n(0),
        v = n.n(g),
        m = n(4),
        y = function(e) {
            function r(e) {
                var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : m.a.ERROR_LEVELS.ERROR;
                return i()(this, r), t = o()(this, c()(r).call(this, e)), v()(l()(t), "errorLevel", null), t.errorLevel = n, t
            }
            return f()(r, e), r
        }(p()(Error))
}, function(e, t, n) {
    "use strict";
    var r = n(5);

    function i(e, t, n) {
        if (!e) throw new r.a("Tried to set style ".concat(t, " to ").concat(n, " on an invalid element."));
        e.style.setProperty(t, n, "important")
    }
    t.a = {
        setStyle: i,
        setStyleProperties: function(e, t) {
            if (!Array.isArray(t)) throw new r.a("arg2 of setStyleProperties must be an array");
            for (var n = 0; n < t.length; n++) i(e, t[n][0], t[n][1]);
            return e
        },
        getPropertyValue: function(e, t) {
            return window.getComputedStyle(e).getPropertyValue(t)
        }
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "n", function() {
        return r
    }), n.d(t, "q", function() {
        return i
    }), n.d(t, "D", function() {
        return a
    }), n.d(t, "i", function() {
        return o
    }), n.d(t, "u", function() {
        return s
    }), n.d(t, "t", function() {
        return c
    }), n.d(t, "v", function() {
        return u
    }), n.d(t, "P", function() {
        return l
    }), n.d(t, "g", function() {
        return d
    }), n.d(t, "h", function() {
        return f
    }), n.d(t, "k", function() {
        return h
    }), n.d(t, "a", function() {
        return p
    }), n.d(t, "f", function() {
        return g
    }), n.d(t, "x", function() {
        return v
    }), n.d(t, "H", function() {
        return m
    }), n.d(t, "G", function() {
        return y
    }), n.d(t, "I", function() {
        return _
    }), n.d(t, "J", function() {
        return I
    }), n.d(t, "K", function() {
        return A
    }), n.d(t, "L", function() {
        return w
    }), n.d(t, "M", function() {
        return b
    }), n.d(t, "N", function() {
        return E
    }), n.d(t, "O", function() {
        return k
    }), n.d(t, "F", function() {
        return M
    }), n.d(t, "E", function() {
        return T
    }), n.d(t, "y", function() {
        return S
    }), n.d(t, "A", function() {
        return x
    }), n.d(t, "B", function() {
        return C
    }), n.d(t, "m", function() {
        return L
    }), n.d(t, "l", function() {
        return D
    }), n.d(t, "r", function() {
        return O
    }), n.d(t, "s", function() {
        return N
    }), n.d(t, "d", function() {
        return j
    }), n.d(t, "e", function() {
        return R
    }), n.d(t, "w", function() {
        return P
    }), n.d(t, "C", function() {
        return V
    }), n.d(t, "z", function() {
        return F
    }), n.d(t, "j", function() {
        return U
    }), n.d(t, "o", function() {
        return B
    }), n.d(t, "p", function() {
        return W
    }), n.d(t, "c", function() {
        return H
    }), n.d(t, "b", function() {
        return z
    });
    var r = "log",
        i = "mute",
        a = "unmute",
        o = "ended",
        s = "play",
        c = "pause",
        u = "playerReady",
        l = "vpaidFallback",
        d = "csrReady",
        f = "csrUpdate",
        h = "forceCsrUpdate",
        p = "adOnPage",
        g = "clickThrough",
        v = "positionUpdate",
        m = "vpaid.AdLog",
        y = "vpaid.AdImpression",
        _ = "vpaid.AdPlaying",
        I = "vpaid.AdStarted",
        A = "vpaid.AdVideoComplete",
        w = "vpaid.AdVideoFirstQuartile",
        b = "vpaid.AdVideoMidpoint",
        E = "vpaid.AdVideoStart",
        k = "vpaid.AdVideoThirdQuartile",
        M = "vpaid.AdClickThru",
        T = "vastVideoError",
        S = "scroll",
        x = "transform",
        C = "transitionEnd",
        L = "goRight",
        D = "goLeft",
        O = "onTriggerEnter",
        N = "onTriggerExit",
        j = "clickPause",
        R = "clickPlay",
        P = "playAttempt",
        V = "twoSecondViewable",
        F = "trackClick",
        U = "firstPlay",
        B = "mouseenter",
        W = "mouseleave",
        H = "auctionResponse",
        z = "auctionComplete"
}, function(e, t, n) {
    "use strict";
    n(85), n(47), n(12), n(28);
    var o, r = n(6);

    function i(e, t) {
        if (!e) return !1;
        for (var n in e) e.hasOwnProperty(n) && t(n, e[n]);
        return !0
    }

    function a(e, t, n) {
        return !!e && function(e, t, n) {
            if (0 === e.length) return n;
            n = n || e.shift();
            var r = e.shift();
            return a(e, t, t(n, r))
        }(e.slice(), t, n)
    }

    function s(e) {
        return Array.isArray(e)
    }

    function c(e) {
        return "function" == typeof e
    }
    t.a = {
        addResizeListener: function(e, t) {
            return c(o) && (t = o(t)), e.addEventListener("DOMContentLoaded", t, !1), e.addEventListener("load", t, !1), e.addEventListener("resize", t, !1), t
        },
        addScrollListener: function(e, t) {
            return e = e || window, c(o) && (t = o(t)), e.addEventListener("DOMContentLoaded", t, !1), e.addEventListener("load", t, !1), e.addEventListener("scroll", t, !1), e.addEventListener("resize", t, !1), t
        },
        addOrientationChangeHandler: function(e, t) {
            c(o) && (t = o(t)), e.addEventListener("orientationchange", t)
        },
        blacklistToStyles: function(e) {
            return [-1 === e.indexOf("W") ? "left" : "right", -1 === e.indexOf("N") ? "top" : "bottom"]
        },
        chooseN: function(t, e) {
            if (!s(t)) return [];
            if (0 === e) return [];
            if (t.length < e) return t;
            for (var n = t.slice(), r = [], i = 0; i < e; i++) {
                var a = Math.floor(Math.random() * n.length);
                r.push(t.indexOf(n.splice(a, 1)[0]))
            }
            return r.sort().map(function(e) {
                return t[e]
            })
        },
        doAll: function() {
            var t = [].slice.apply(arguments);
            return function() {
                for (var e = 0; e < t.length; e++) t[e]()
            }
        },
        escapeRegExp: function(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        },
        filter: function(e, t) {
            if (!e) return !1;
            for (var n = [], r = 0; r < e.length; r++) t(e[r]) && n.push(e[r]);
            return n
        },
        find: function(e, t) {
            if (!e) return !1;
            for (var n = 0; n < e.length; n++)
                if (t(e[n])) return e[n];
            return !1
        },
        flatten: function t(e) {
            if (!s(e)) return [e];
            var n = [];
            return e.forEach(function(e) {
                s(e) ? n = n.concat(t(e)) : n.push(e)
            }), n
        },
        forEach: function(e, t) {
            if (!e) return !1;
            for (var n = 0; n < e.length; n++) t(e[n]);
            return !0
        },
        forEachObj: i,
        funcOrValue: function(e, t) {
            return c(e[t]) ? e[t]() : e[t]
        },
        getDateString: function() {
            var e = new Date,
                t = e.getDate(),
                n = e.getMonth() + 1,
                r = e.getFullYear();
            return t < 10 && (t = "0".concat(t)), n < 10 && (n = "0".concat(n)), "".concat(r, "-").concat(n, "-").concat(t)
        },
        iframeHide: function(e) {
            return r.a.setStyle(e, "display", "none"), r.a.setStyle(e, "width", 0), r.a.setStyle(e, "height", 0), e
        },
        isAll: function(e, t) {
            if (!s(e)) return !1;
            for (var n = 0; n < e.length; n++)
                if (!t(e[n])) return !1;
            return !0
        },
        isArray: s,
        isEqualUrlNoProtocol: function(e, t) {
            var n = /^https?\:/i;
            return e.replace(n, "") === t.replace(n, "")
        },
        isFlashEnabled: function() {
            var t = !1;
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (t = !0)
            } catch (e) {
                navigator.mimeTypes && null != navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = !0)
            }
            return t
        },
        isFunction: c,
        isMatch: function(e, t) {
            return -1 !== e.indexOf(t)
        },
        listen: function(e, t, n, r, i) {
            var a;
            return c(o) && (n = o(n)), i && (a = n, n = function(e) {
                e.stopPropagation(), e.preventDefault(), a.apply(this, arguments)
            }), e.addEventListener(t, n, r), n
        },
        map: function(e, t) {
            if (!e) return !1;
            for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r]);
            return n
        },
        msToTime: function(e) {
            if (e < 0) return NaN;
            var t, n, r, i, a = e;
            return a -= 36e5 * (t = Math.floor(a / 36e5)), i = (a -= 6e4 * (n = Math.floor(a / 6e4))) - 1e3 * (r = Math.floor(a / 1e3)), t = t < 10 ? "0".concat(t) : t, n = n < 10 ? "0".concat(n) : n, r = r < 10 ? "0".concat(r) : r, i < 10 ? i = "00".concat(i) : i < 100 && (i = "0".concat(i)), "".concat(t, ":").concat(n, ":").concat(r, ".").concat(i)
        },
        objMerge: function() {
            return a([].slice.apply(arguments), function(e, t) {
                if (!e && !t) return {};
                if (!e) return t;
                if (!t) return e;
                var n, r = {};
                for (n in t) r[n] = t[n];
                for (n in e) r[n] = e[n];
                return r
            })
        },
        pluck: function(e, t) {
            return e.map(function(e) {
                return e[t]
            })
        },
        reduce: a,
        removeKeys: function(e, n) {
            var r = {};
            return i(e, function(e, t) {
                -1 === n.indexOf(e) && (r[e] = t)
            }), r
        },
        removeAllChildren: function(e) {
            for (; e.lastChild;) e.removeChild(e.lastChild)
        },
        removeQueryStringParam: function(e, t) {
            return e.split("&").filter(function(e) {
                return -1 === e.indexOf("".concat(t, "="))
            }).join("&")
        },
        removeResizeListener: function(e, t) {
            e.removeEventListener("DOMContentLoaded", t, !1), e.removeEventListener("load", t, !1), e.removeEventListener("resize", t, !1)
        },
        setDims: function(e, t, n, r) {
            r = r || "px", e.style.setProperty("width", t + r, "important"), e.style.setProperty("min-width", t + r, "important"), e.style.setProperty("max-width", t + r, "important"), e.style.setProperty("height", n + r, "important"), e.style.setProperty("min-height", n + r, "important"), e.style.setProperty("max-height", n + r, "important")
        },
        setErrorDecorator: function(e) {
            o = e
        },
        sizeLogoSrc: function(e, t, n) {
            if (!e || !t) return e;
            if (e.indexOf("images.3lift") < 0) return e;
            if (n && n < t) return e;
            var r;
            r = t <= 100 ? "_w90" : t <= 200 ? "_w192" : t <= 350 ? "_w300" : t <= 650 ? "_w600" : "";
            var i = e.split(".");
            return i[i.length - 2] += r, i.join(".")
        },
        swapElement: function(e, t) {
            t.parentElement.insertBefore(e, t), t.parentElement.removeChild(t)
        },
        throttle: function(i, a) {
            var o, s = 0;
            return function() {
                o && clearTimeout(o);
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                o = setTimeout(i.bind.apply(i, [null].concat(t)), a);
                var r = Date.now();
                a < r - s && (s = r, i.apply(void 0, t))
            }
        },
        timeoutWrap: function(e, t) {
            var n = c(o) ? o(e) : e;
            return setTimeout(n, t)
        },
        timeToMS: function(e) {
            if (!e) return NaN;
            var t = e.split("."),
                n = t[0].split(":"),
                r = parseInt(t[1], 10) || 0;
            return 60 * parseInt(n[0], 10) * 60 * 1e3 + 60 * parseInt(n[1], 10) * 1e3 + 1e3 * parseInt(n[2], 10) + r
        },
        truncate: function(e, t) {
            return t < 3 || e.length <= t ? e : "".concat(e.slice(0, t - 3), "...")
        },
        truncateUrl: function(e, t) {
            return e ? t ? e.length <= t ? e : -1 !== (e = e.slice(0, t)).lastIndexOf("&") ? e.slice(0, e.lastIndexOf("&")) : e : e : ""
        },
        triggerEvent: function(e, t, n) {
            var r = n.createEvent("Event");
            r.initEvent(t, !0, !0), e.dispatchEvent(r)
        },
        URIEncodeFields: function(e) {
            e = e || {};
            var t, n = {};
            for (t in e) e.hasOwnProperty(t) && (n[t] = encodeURIComponent(e[t]));
            return n
        },
        waitFor: function(e, t) {
            var n = 0;
            return function() {
                ++n === e && t()
            }
        },
        sortArrOfObjectsByKey: function(e, n) {
            return "desc" === (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "asc") ? e.sort(function(e, t) {
                return t[n] - e[n]
            }) : e.sort(function(e, t) {
                return e[n] - t[n]
            })
        }
    }
}, function(e, t, n) {
    var i = n(0);
    e.exports = function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(e) {
                i(t, e, n[e])
            })
        }
        return t
    }
}, function(e, t, n) {
    e.exports = n(133)
}, function(e, t, n) {
    "use strict";
    n.d(t, "g", function() {
        return r
    }), n.d(t, "h", function() {
        return i
    }), n.d(t, "f", function() {
        return a
    }), n.d(t, "c", function() {
        return o
    }), n.d(t, "b", function() {
        return s
    }), n.d(t, "d", function() {
        return c
    }), n.d(t, "a", function() {
        return u
    }), n.d(t, "e", function() {
        return l
    }), n.d(t, "n", function() {
        return d
    }), n.d(t, "o", function() {
        return f
    }), n.d(t, "m", function() {
        return h
    }), n.d(t, "p", function() {
        return p
    }), n.d(t, "l", function() {
        return g
    }), n.d(t, "k", function() {
        return v
    }), n.d(t, "j", function() {
        return m
    }), n.d(t, "i", function() {
        return y
    });
    var r = "r",
        i = "sce",
        a = "pmd",
        o = "ed",
        s = "ci",
        c = "eee",
        u = "ec",
        l = "em",
        d = "ev",
        f = "evv",
        h = "ev1",
        p = "eev",
        g = "vpa",
        v = "evd",
        m = "px",
        y = "tpvpx"
}, function(e, t, n) {
    for (var r = n(20), i = n(60), a = n(31), o = n(17), s = n(34), c = n(51), u = n(14), l = u("iterator"), d = u("toStringTag"), f = c.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = i(h), g = 0; g < p.length; g++) {
        var v, m = p[g],
            y = h[m],
            _ = o[m],
            I = _ && _.prototype;
        if (I && (I[l] || s(I, l, f), I[d] || s(I, d, m), c[m] = f, y))
            for (v in r) I[v] || a(I, v, r[v], !0)
    }
}, function(e, t, n) {
    var r = n(22);
    r(r.S + r.F, "Object", {
        assign: n(124)
    })
}, function(e, t, n) {
    var r = n(72)("wks"),
        i = n(57),
        a = n(17).Symbol,
        o = "function" == typeof a;
    (e.exports = function(e) {
        return r[e] || (r[e] = o && a[e] || (o ? a : i)("Symbol." + e))
    }).store = r
}, function(e, t) {
    function c(e, t, n, r, i, a, o) {
        try {
            var s = e[a](o),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i)
    }
    e.exports = function(s) {
        return function() {
            var e = this,
                o = arguments;
            return new Promise(function(t, n) {
                var r = s.apply(e, o);

                function i(e) {
                    c(r, t, n, i, a, "next", e)
                }

                function a(e) {
                    c(r, t, n, i, a, "throw", e)
                }
                i(void 0)
            })
        }
    }
}, function(e, t, n) {
    var r = n(134),
        i = n(135),
        a = n(136);
    e.exports = function(e) {
        return r(e) || i(e) || a()
    }
}, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(e, t, n) {
    "use strict";
    var r, i, a, o, s = n(67),
        c = n(17),
        u = n(37),
        l = n(69),
        d = n(22),
        f = n(23),
        h = n(52),
        p = n(116),
        g = n(126),
        v = n(91),
        m = n(101).set,
        y = n(128)(),
        _ = n(103),
        I = n(129),
        A = n(130),
        w = n(131),
        b = "Promise",
        E = c.TypeError,
        k = c.process,
        M = k && k.versions,
        T = M && M.v8 || "",
        S = c[b],
        x = "process" == l(k),
        C = function() {},
        L = i = _.f,
        D = !! function() {
            try {
                var e = S.resolve(1),
                    t = (e.constructor = {})[n(14)("species")] = function(e) {
                        e(C, C)
                    };
                return (x || "function" == typeof PromiseRejectionEvent) && e.then(C) instanceof t && 0 !== T.indexOf("6.6") && -1 === A.indexOf("Chrome/66")
            } catch (e) {}
        }(),
        O = function(e) {
            var t;
            return !(!f(e) || "function" != typeof(t = e.then)) && t
        },
        N = function(l, n) {
            if (!l._n) {
                l._n = !0;
                var r = l._c;
                y(function() {
                    for (var c = l._v, u = 1 == l._s, e = 0, t = function(e) {
                            var t, n, r, i = u ? e.ok : e.fail,
                                a = e.resolve,
                                o = e.reject,
                                s = e.domain;
                            try {
                                i ? (u || (2 == l._h && P(l), l._h = 1), !0 === i ? t = c : (s && s.enter(), t = i(c), s && (s.exit(), r = !0)), t === e.promise ? o(E("Promise-chain cycle")) : (n = O(t)) ? n.call(t, a, o) : a(t)) : o(c)
                            } catch (e) {
                                s && !r && s.exit(), o(e)
                            }
                        }; r.length > e;) t(r[e++]);
                    l._c = [], l._n = !1, n && !l._h && j(l)
                })
            }
        },
        j = function(a) {
            m.call(c, function() {
                var e, t, n, r = a._v,
                    i = R(a);
                if (i && (e = I(function() {
                        x ? k.emit("unhandledRejection", r, a) : (t = c.onunhandledrejection) ? t({
                            promise: a,
                            reason: r
                        }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", r)
                    }), a._h = x || R(a) ? 2 : 1), a._a = void 0, i && e.e) throw e.v
            })
        },
        R = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        },
        P = function(t) {
            m.call(c, function() {
                var e;
                x ? k.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            })
        },
        V = function(e) {
            var t = this;
            t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), N(t, !0))
        },
        F = function(e) {
            var n, r = this;
            if (!r._d) {
                r._d = !0, r = r._w || r;
                try {
                    if (r === e) throw E("Promise can't be resolved itself");
                    (n = O(e)) ? y(function() {
                        var t = {
                            _w: r,
                            _d: !1
                        };
                        try {
                            n.call(e, u(F, t, 1), u(V, t, 1))
                        } catch (e) {
                            V.call(t, e)
                        }
                    }): (r._v = e, r._s = 1, N(r, !1))
                } catch (e) {
                    V.call({
                        _w: r,
                        _d: !1
                    }, e)
                }
            }
        };
    D || (S = function(e) {
        p(this, S, b, "_h"), h(e), r.call(this);
        try {
            e(u(F, this, 1), u(V, this, 1))
        } catch (e) {
            V.call(this, e)
        }
    }, (r = function(e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(117)(S.prototype, {
        then: function(e, t) {
            var n = L(v(this, S));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = x ? k.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && N(this, !1), n.promise
        },
        catch: function(e) {
            return this.then(void 0, e)
        }
    }), a = function() {
        var e = new r;
        this.promise = e, this.resolve = u(F, e, 1), this.reject = u(V, e, 1)
    }, _.f = L = function(e) {
        return e === S || e === o ? new a(e) : i(e)
    }), d(d.G + d.W + d.F * !D, {
        Promise: S
    }), n(70)(S, b), n(92)(b), o = n(45)[b], d(d.S + d.F * !D, b, {
        reject: function(e) {
            var t = L(this);
            return (0, t.reject)(e), t.promise
        }
    }), d(d.S + d.F * (s || !D), b, {
        resolve: function(e) {
            return w(s && this === o ? S : this, e)
        }
    }), d(d.S + d.F * !(D && n(93)(function(e) {
        S.all(e).catch(C)
    })), b, {
        all: function(e) {
            var o = this,
                t = L(o),
                s = t.resolve,
                c = t.reject,
                n = I(function() {
                    var r = [],
                        i = 0,
                        a = 1;
                    g(e, !1, function(e) {
                        var t = i++,
                            n = !1;
                        r.push(void 0), a++, o.resolve(e).then(function(e) {
                            n || (n = !0, r[t] = e, --a || s(r))
                        }, c)
                    }), --a || s(r)
                });
            return n.e && c(n.v), t.promise
        },
        race: function(e) {
            var t = this,
                n = L(t),
                r = n.reject,
                i = I(function() {
                    g(e, !1, function(e) {
                        t.resolve(e).then(n.resolve, r)
                    })
                });
            return i.e && r(i.v), n.promise
        }
    })
}, function(e, t) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(74),
        i = n(137),
        a = n(51),
        o = n(59);
    e.exports = n(105)(Array, "Array", function(e, t) {
        this._t = o(e), this._i = 0, this._k = t
    }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries")
}, function(e, t, n) {
    var r = n(23);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function(e, t, n) {
    var g = n(17),
        v = n(45),
        m = n(34),
        y = n(31),
        _ = n(37),
        I = "prototype",
        A = function(e, t, n) {
            var r, i, a, o, s = e & A.F,
                c = e & A.G,
                u = e & A.S,
                l = e & A.P,
                d = e & A.B,
                f = c ? g : u ? g[t] || (g[t] = {}) : (g[t] || {})[I],
                h = c ? v : v[t] || (v[t] = {}),
                p = h[I] || (h[I] = {});
            for (r in c && (n = t), n) a = ((i = !s && f && void 0 !== f[r]) ? f : n)[r], o = d && i ? _(a, g) : l && "function" == typeof a ? _(Function.call, a) : a, f && y(f, r, a, e & A.U), h[r] != a && m(h, r, o), l && p[r] != a && (p[r] = a)
        };
    g.core = v, A.F = 1, A.G = 2, A.S = 4, A.P = 8, A.B = 16, A.W = 32, A.U = 64, A.R = 128, e.exports = A
}, function(e, t) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, t, n) {
    var r = n(35),
        i = n(60);
    n(82)("keys", function() {
        return function(e) {
            return i(r(e))
        }
    })
}, function(e, t, n) {
    e.exports = !n(19)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    function n(e) {
        return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, n(e)
    }
    t.exports = n
}, function(e, t, n) {
    var r = n(21),
        i = n(97),
        a = n(68),
        o = Object.defineProperty;
    t.f = n(25) ? Object.defineProperty : function(e, t, n) {
        if (r(e), t = a(t, !0), r(n), i) try {
            return o(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function(e, t, n) {
    "use strict";
    var E = n(21),
        r = n(35),
        k = n(33),
        M = n(54),
        T = n(78),
        S = n(79),
        x = Math.max,
        C = Math.min,
        f = Math.floor,
        h = /\$([$&`']|\d\d?|<[^>]*>)/g,
        p = /\$([$&`']|\d\d?)/g;
    n(81)("replace", 2, function(i, a, A, w) {
        return [function(e, t) {
            var n = i(this),
                r = null == e ? void 0 : e[a];
            return void 0 !== r ? r.call(e, n, t) : A.call(String(n), e, t)
        }, function(e, t) {
            var n = w(A, e, this, t);
            if (n.done) return n.value;
            var r = E(e),
                i = String(this),
                a = "function" == typeof t;
            a || (t = String(t));
            var o = r.global;
            if (o) {
                var s = r.unicode;
                r.lastIndex = 0
            }
            for (var c = [];;) {
                var u = S(r, i);
                if (null === u) break;
                if (c.push(u), !o) break;
                "" === String(u[0]) && (r.lastIndex = T(i, k(r.lastIndex), s))
            }
            for (var l, d = "", f = 0, h = 0; h < c.length; h++) {
                u = c[h];
                for (var p = String(u[0]), g = x(C(M(u.index), i.length), 0), v = [], m = 1; m < u.length; m++) v.push(void 0 === (l = u[m]) ? l : String(l));
                var y = u.groups;
                if (a) {
                    var _ = [p].concat(v, g, i);
                    void 0 !== y && _.push(y);
                    var I = String(t.apply(void 0, _))
                } else I = b(p, i, g, v, y, t);
                f <= g && (d += i.slice(f, g) + I, f = g + p.length)
            }
            return d + i.slice(f)
        }];

        function b(a, o, s, c, u, e) {
            var l = s + a.length,
                d = c.length,
                t = p;
            return void 0 !== u && (u = r(u), t = h), A.call(e, t, function(e, t) {
                var n;
                switch (t.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return a;
                    case "`":
                        return o.slice(0, s);
                    case "'":
                        return o.slice(l);
                    case "<":
                        n = u[t.slice(1, -1)];
                        break;
                    default:
                        var r = +t;
                        if (0 === r) return e;
                        if (d < r) {
                            var i = f(r / 10);
                            return 0 === i ? e : i <= d ? void 0 === c[i - 1] ? t.charAt(1) : c[i - 1] + t.charAt(1) : e
                        }
                        n = c[r - 1]
                }
                return void 0 === n ? "" : n
            })
        }
    })
}, function(t, e) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(e) {
            return n(e)
        } : t.exports = r = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
        }, r(e)
    }
    t.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(119)(5),
        a = "find",
        o = !0;
    a in [] && Array(1)[a](function() {
        o = !1
    }), r(r.P + r.F * o, "Array", {
        find: function(e) {
            return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), n(74)(a)
}, function(e, t, n) {
    var a = n(17),
        o = n(34),
        s = n(36),
        c = n(57)("src"),
        r = n(121),
        i = "toString",
        u = ("" + r).split(i);
    n(45).inspectSource = function(e) {
        return r.call(e)
    }, (e.exports = function(e, t, n, r) {
        var i = "function" == typeof n;
        i && (s(n, "name") || o(n, "name", t)), e[t] !== n && (i && (s(n, c) || o(n, c, e[t] ? "" + e[t] : u.join(String(t)))), e === a ? e[t] = n : r ? e[t] ? e[t] = n : o(e, t, n) : (delete e[t], o(e, t, n)))
    })(Function.prototype, i, function() {
        return "function" == typeof this && this[c] || r.call(this)
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return v
    });
    var r, i, a = n(9),
        u = n.n(a),
        o = n(2),
        l = n.n(o),
        s = n(0),
        c = n.n(s),
        d = n(4),
        f = n(7),
        h = d.a.ERROR_LEVELS,
        p = h.ERROR,
        g = h.WARNING,
        v = function s(e) {
            var t = e.eventController,
                c = e.errorHandler;
            l()(this, s), t.on(f.E, function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = s.VAST_CODE_LEVELS,
                    r = s.VAST_UNDEFINED_ERROR,
                    i = s.VAST_CODE_MAP[e] && n[e] ? e : r,
                    a = "".concat(s.VAST_CODE_MAP[i]).concat(t.message ? " ".concat(t.message) : ""),
                    o = s.VAST_CODE_LEVELS[i];
                c.fireError("".concat(i, ": ").concat(a), o, u()({
                    errorCode: e
                }, t.diagnosticContext))
            })
        };
    c()(v, "VAST_ERROR_XML_PARSING", 100), c()(v, "VAST_ERROR_VAST_SCHEMA", 101), c()(v, "VAST_TRAFFICKING_ERROR", 200), c()(v, "VAST_UNEXPECTED_DURATION_ERROR", 202), c()(v, "VAST_WRAPPER_ERROR", 300), c()(v, "VAST_WRAPPER_TIMEOUT", 301), c()(v, "VAST_TOO_MANY_REDIRECTS", 302), c()(v, "VAST_NO_ADS_AFTER_WRAPPER", 303), c()(v, "VAST_LINEAR_ERROR", 400), c()(v, "VAST_MEDIA_NOT_FOUND", 401), c()(v, "VAST_MEDIA_LOAD_TIMEOUT", 402), c()(v, "VAST_MEDIA_ASSET_MISMATCH", 403), c()(v, "VAST_PROBLEM_DISPLAYING_MEDIA_FILE", 405), c()(v, "VAST_UNDEFINED_ERROR", 900), c()(v, "VAST_VPAID_ERROR", 901), c()(v, "ERROR_BLOCK", "Video"), c()(v, "VAST_CODE_MAP", (r = {}, c()(r, v.VAST_ERROR_XML_PARSING, "XML Parsing error."), c()(r, v.VAST_ERROR_VAST_SCHEMA, "VAST schema validation error."), c()(r, v.VAST_TRAFFICKING_ERROR, "Trafficking error. Media player received an Ad type that it was not expecting and/or cannot play"), c()(r, v.VAST_UNEXPECTED_DURATION_ERROR, "Media player expecting different duration."), c()(r, v.VAST_WRAPPER_ERROR, "General Wrapper error."), c()(r, v.VAST_WRAPPER_TIMEOUT, "Timeout of VAST URI provided in Wrapper element, or of VAST URI provided in a subsequent Wrapper element."), c()(r, v.VAST_TOO_MANY_REDIRECTS, "Wrapper limit reached, as defined by the media player. Too many Wrapper responses have been received with no InLine response."), c()(r, v.VAST_NO_ADS_AFTER_WRAPPER, "No VAST response after one or more Wrappers."), c()(r, v.VAST_LINEAR_ERROR, "General Linear error. Media player is unable to display the Linear Ad."), c()(r, v.VAST_MEDIA_NOT_FOUND, "File not found. Unable to find Linear/MediaFile from URI."), c()(r, v.VAST_MEDIA_LOAD_TIMEOUT, "Timeout of MediaFile URI."), c()(r, v.VAST_MEDIA_ASSET_MISMATCH, "Couldn't find MediaFile that is supported by this media player, based on the attributes of the MediaFile element."), c()(r, v.VAST_PROBLEM_DISPLAYING_MEDIA_FILE, "Problem displaying MediaFile. Media player found a MediaFile with supported type but couldn't display it."), c()(r, v.VAST_UNDEFINED_ERROR, "Undefined error."), c()(r, v.VAST_VPAID_ERROR, "General VPAID error."), r)), c()(v, "VAST_CODE_LEVELS", (i = {}, c()(i, v.VAST_ERROR_XML_PARSING, p), c()(i, v.VAST_ERROR_VAST_SCHEMA, p), c()(i, v.VAST_TRAFFICKING_ERROR, p), c()(i, v.VAST_UNEXPECTED_DURATION_ERROR, g), c()(i, v.VAST_WRAPPER_ERROR, p), c()(i, v.VAST_WRAPPER_TIMEOUT, p), c()(i, v.VAST_TOO_MANY_REDIRECTS, p), c()(i, v.VAST_NO_ADS_AFTER_WRAPPER, p), c()(i, v.VAST_LINEAR_ERROR, p), c()(i, v.VAST_MEDIA_NOT_FOUND, p), c()(i, v.VAST_MEDIA_LOAD_TIMEOUT, p), c()(i, v.VAST_MEDIA_ASSET_MISMATCH, p), c()(i, v.VAST_PROBLEM_DISPLAYING_MEDIA_FILE, p), c()(i, v.VAST_UNDEFINED_ERROR, p), c()(i, v.VAST_VPAID_ERROR, p), i))
}, function(e, t, n) {
    var r = n(54),
        i = Math.min;
    e.exports = function(e) {
        return 0 < e ? i(r(e), 9007199254740991) : 0
    }
}, function(e, t, n) {
    var r = n(27),
        i = n(58);
    e.exports = n(25) ? function(e, t, n) {
        return r.f(e, t, i(1, n))
    } : function(e, t, n) {
        return e[t] = n, e
    }
}, function(e, t, n) {
    var r = n(39);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t)
    }
}, function(e, t, n) {
    var a = n(52);
    e.exports = function(r, i, e) {
        if (a(r), void 0 === i) return r;
        switch (e) {
            case 1:
                return function(e) {
                    return r.call(i, e)
                };
            case 2:
                return function(e, t) {
                    return r.call(i, e, t)
                };
            case 3:
                return function(e, t, n) {
                    return r.call(i, e, t, n)
                }
        }
        return function() {
            return r.apply(i, arguments)
        }
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function(e, t, n) {
    var r = n(27).f,
        i = Function.prototype,
        a = /^\s*function ([^ (]*)/;
    "name" in i || n(25) && r(i, "name", {
        configurable: !0,
        get: function() {
            try {
                return ("" + this).match(a)[1]
            } catch (e) {
                return ""
            }
        }
    })
}, function(e, t, n) {
    "use strict";
    t.a = function(a, e) {
        var t = e.creative,
            n = e.placement,
            r = e.analytics,
            o = e.util,
            i = n.customOptions.openCtUrlInSameWindow;
        return a.addInit(function(e) {
            var t, n, r, i;
            t = e.domRefs.adWrapperWithDims, n = a.mouseover || s, r = !1, i = null, o.listen(t, "mouseenter", function() {
                r = !0, i = o.timeoutWrap(function() {
                    r && n()
                }, c)
            }), o.listen(t, "mouseleave", function() {
                clearTimeout(i), r = !1
            })
        }), {
            doClickThrough: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : t.params.clickthrough_url;
                e && window.open(e, i ? "_self" : "_blank")
            }
        };

        function s() {
            r.mouseover()
        }
    };
    var c = 300
}, function(e, t, n) {
    "use strict";
    n(13), n(18), n(65), n(155), n(12), n(20), n(24), n(156);
    var C = n(1),
        v = function(e) {
            var t = Object(C.o)(e.supportedDomRefs),
                n = Object(C.o)(e.initState);
            return Object.seal(t), Object.seal(n), {
                domRefs: t,
                state: n,
                csrOptions: {},
                promises: []
            }
        };
    var m = n(110),
        r = function(e, t) {
            var n = t.creative,
                r = t.util,
                i = n.getParams().adchoices_url;
            return e.addInit(function(e) {
                r.listen(e.domRefs.adchoices, "click", a, !1, !0)
            }), {};

            function a() {
                window.open(i, "popup", "width=".concat(o, ",height=").concat(s))
            }
        },
        o = 650,
        s = 316;
    n(47), n(30);
    var i = n(0),
        L = n.n(i),
        D = n(6),
        O = (n(28), n(4)),
        N = function(e) {
            var i = e.creative,
                a = e.errorHandler;
            return {
                get: function(e) {
                    var t = function(e) {
                            var t = document.createElement("iframe");
                            D.a.setStyle(t, "display", "none"), document.body.appendChild(t);
                            try {
                                var n = t.contentWindow.document;
                                n.open(), n.close()
                            } catch (e) {
                                a.fireError("Logo Placement: Attempted to open iframe document but failed.", O.a.ERROR_LEVELS.WARNING)
                            }
                            return t.contentWindow[c] = e, t
                        }(e),
                        n = (r = document.createElement("script"), r.src = i.params.image_url.replace("/?", "/lp?"), r);
                    var r;
                    t.contentWindow.document.body.appendChild(n)
                }
            }
        },
        c = "updateLogoZones";
    var a, j = n(7),
        R = "logo",
        P = "adchoices",
        V = "blacklisted",
        F = O.a.NW,
        U = O.a.NE,
        B = O.a.SE,
        W = O.a.SW,
        H = [U, F, B, W],
        z = [W, B, F, U],
        Q = (a = {}, L()(a, F, {
            PEELBACK_URL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA0NSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTAgMGw0NSA0NUgweiIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjEwIiB5PSIxNCIgd2lkdGg9IjIxIiBoZWlnaHQ9IjIyIiByeD0iMiIvPjxwYXRoIGQ9Ik0yNy40NzkgMTcuMjI1YS44MTYuODE2IDAgMCAwLS41OC0uMjM2SDE3LjYxYS44MTYuODE2IDAgMCAwLS41OC4yMzYuODI3LjgyNyAwIDAgMCAwIDEuMTZsMi4zMjIgMi4zMjMtMi4wMzIgMi4wMzFjLTIuOTc1IDIuOTc2LTYuMTUgNy4yMDItNC4yODEgMTEuNTkzLjU4IDEuMzQyIDEuNTI0IDIuNDg1IDIuNTQgMy41IDEuMjcgMS4yNyAzLjU2NCAyLjI5NiA1LjI0MiAyLjk0LjMwOS4xMDkuNjk5LjI5OSAxLjAyNS4zNTMuMTU0LjAyOC4yODEuMDI4LjQwOC0uMS4xODItLjE4LjE0Ni0uNDM1LS4wMjctLjYwNy0uMTQ1LS4xNDUtLjM0NS0uMjcyLS40OTktLjQwOC0uMzk5LS4zNDUtLjc4OS0uNjk5LTEuMTYtMS4wNy00LjMyNy00LjMyNy0yLjUxMy03LjY0NyAxLjM5Ni0xMS41NTZsMi4wMzItMi4wMzIgMi4zMjIgMi4zMjJhLjgyNy44MjcgMCAwIDAgMS4xNjEgMCAuODE2LjgxNiAwIDAgMCAuMjM2LS41OHYtOS4yODlhLjgxNi44MTYgMCAwIDAtLjIzNi0uNTh6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==",
            styleCornerEl: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                D.a.setStyleProperties(e, [
                    ["top", n],
                    ["right", "auto"],
                    ["bottom", "auto"],
                    ["left", t]
                ])
            }
        }), L()(a, U, {
            PEELBACK_URL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDIyLjUgMjIuNSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTAgMGw0NSA0NUgweiIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjEwIiB5PSIxNCIgd2lkdGg9IjIxIiBoZWlnaHQ9IjIyIiByeD0iMiIvPjxwYXRoIGQ9Ik0yNy40NzkgMTcuMjI1YS44MTYuODE2IDAgMCAwLS41OC0uMjM2SDE3LjYxYS44MTYuODE2IDAgMCAwLS41OC4yMzYuODI3LjgyNyAwIDAgMCAwIDEuMTZsMi4zMjIgMi4zMjMtMi4wMzIgMi4wMzFjLTIuOTc1IDIuOTc2LTYuMTUgNy4yMDItNC4yODEgMTEuNTkzLjU4IDEuMzQyIDEuNTI0IDIuNDg1IDIuNTQgMy41IDEuMjcgMS4yNyAzLjU2NCAyLjI5NiA1LjI0MiAyLjk0LjMwOS4xMDkuNjk5LjI5OSAxLjAyNS4zNTMuMTU0LjAyOC4yODEuMDI4LjQwOC0uMS4xODItLjE4LjE0Ni0uNDM1LS4wMjctLjYwNy0uMTQ1LS4xNDUtLjM0NS0uMjcyLS40OTktLjQwOC0uMzk5LS4zNDUtLjc4OS0uNjk5LTEuMTYtMS4wNy00LjMyNy00LjMyNy0yLjUxMy03LjY0NyAxLjM5Ni0xMS41NTZsMi4wMzItMi4wMzIgMi4zMjIgMi4zMjJhLjgyNy44MjcgMCAwIDAgMS4xNjEgMCAuODE2LjgxNiAwIDAgMCAuMjM2LS41OHYtOS4yODlhLjgxNi44MTYgMCAwIDAtLjIzNi0uNTh6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==",
            styleCornerEl: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                D.a.setStyleProperties(e, [
                    ["top", n],
                    ["right", t],
                    ["bottom", "auto"],
                    ["left", "auto"]
                ])
            }
        }), L()(a, B, {
            PEELBACK_URL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgNDUgMCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTAgMGw0NSA0NUgweiIvPjxyZWN0IGZpbGw9IiMwMDAiIHg9IjEwIiB5PSIxNCIgd2lkdGg9IjIxIiBoZWlnaHQ9IjIyIiByeD0iMiIvPjxwYXRoIGQ9Ik0yNy40NzkgMTcuMjI1YS44MTYuODE2IDAgMCAwLS41OC0uMjM2SDE3LjYxYS44MTYuODE2IDAgMCAwLS41OC4yMzYuODI3LjgyNyAwIDAgMCAwIDEuMTZsMi4zMjIgMi4zMjMtMi4wMzIgMi4wMzFjLTIuOTc1IDIuOTc2LTYuMTUgNy4yMDItNC4yODEgMTEuNTkzLjU4IDEuMzQyIDEuNTI0IDIuNDg1IDIuNTQgMy41IDEuMjcgMS4yNyAzLjU2NCAyLjI5NiA1LjI0MiAyLjk0LjMwOS4xMDkuNjk5LjI5OSAxLjAyNS4zNTMuMTU0LjAyOC4yODEuMDI4LjQwOC0uMS4xODItLjE4LjE0Ni0uNDM1LS4wMjctLjYwNy0uMTQ1LS4xNDUtLjM0NS0uMjcyLS40OTktLjQwOC0uMzk5LS4zNDUtLjc4OS0uNjk5LTEuMTYtMS4wNy00LjMyNy00LjMyNy0yLjUxMy03LjY0NyAxLjM5Ni0xMS41NTZsMi4wMzItMi4wMzIgMi4zMjIgMi4zMjJhLjgyNy44MjcgMCAwIDAgMS4xNjEgMCAuODE2LjgxNiAwIDAgMCAuMjM2LS41OHYtOS4yODlhLjgxNi44MTYgMCAwIDAtLjIzNi0uNTh6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==",
            styleCornerEl: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                D.a.setStyleProperties(e, [
                    ["top", "auto"],
                    ["right", t],
                    ["bottom", n],
                    ["left", "auto"]
                ])
            }
        }), L()(a, W, {
            PEELBACK_URL: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMCAwbDQ1IDQ1SDB6Ii8+PHJlY3QgZmlsbD0iIzAwMCIgeD0iMTAiIHk9IjE0IiB3aWR0aD0iMjEiIGhlaWdodD0iMjIiIHJ4PSIyIi8+PHBhdGggZD0iTTI3LjQ3OSAxNy4yMjVhLjgxNi44MTYgMCAwIDAtLjU4LS4yMzZIMTcuNjFhLjgxNi44MTYgMCAwIDAtLjU4LjIzNi44MjcuODI3IDAgMCAwIDAgMS4xNmwyLjMyMiAyLjMyMy0yLjAzMiAyLjAzMWMtMi45NzUgMi45NzYtNi4xNSA3LjIwMi00LjI4MSAxMS41OTMuNTggMS4zNDIgMS41MjQgMi40ODUgMi41NCAzLjUgMS4yNyAxLjI3IDMuNTY0IDIuMjk2IDUuMjQyIDIuOTQuMzA5LjEwOS42OTkuMjk5IDEuMDI1LjM1My4xNTQuMDI4LjI4MS4wMjguNDA4LS4xLjE4Mi0uMTguMTQ2LS40MzUtLjAyNy0uNjA3LS4xNDUtLjE0NS0uMzQ1LS4yNzItLjQ5OS0uNDA4LS4zOTktLjM0NS0uNzg5LS42OTktMS4xNi0xLjA3LTQuMzI3LTQuMzI3LTIuNTEzLTcuNjQ3IDEuMzk2LTExLjU1NmwyLjAzMi0yLjAzMiAyLjMyMiAyLjMyMmEuODI3LjgyNyAwIDAgMCAxLjE2MSAwIC44MTYuODE2IDAgMCAwIC4yMzYtLjU4di05LjI4OWEuODE2LjgxNiAwIDAgMC0uMjM2LS41OHoiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+",
            styleCornerEl: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                D.a.setStyleProperties(e, [
                    ["top", "auto"],
                    ["right", "auto"],
                    ["bottom", n],
                    ["left", t]
                ])
            }
        }), a);
    var l = n(66),
        u = function() {
            var r, i, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                e = 1 < arguments.length ? arguments[1] : void 0,
                o = e.creative,
                s = e.positionService,
                c = e.eventController;
            return Object.assign({}, a, {
                render: function(e) {
                    a.render && a.render(e);
                    r = e.domRefs, i = e.state;
                    var t = r.adWrapper.querySelector(".".concat(d));
                    t ? (r.adchoices = t, i.isAdChoiceFromTemplate = !0) : (r.adchoices = ((n = document.createElement("img")).className = d, n.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZD0iTTIuMDguMDQyQy40NDcuNDM3LS4wODMgMi4zMDYuMDU0IDMuNzg4LS4wNTYgOS45OC4wNDIgMTYuMTc0IDAgMjIuMzY3Yy4wNTEgMi40OTgtLjA4MyA1LjAxLjE2NiA3LjQ5Ny4xNTggMS44MjIgMi4wMzQgMi40NTEgMy41NzcgMS45OTEgMS41OTYtLjQyNyAyLjk2OS0xLjM5NSA0LjQzOS0yLjExNCAxLjg1LS43NTkgMS42NzUtNC4xLS42NTktMy43OTUtMS4zMTguNjk0LTMuMzIuNTEtMy4xNDktMS40NTQtLjAxLTYuMDA2LS4wOTQtMTIuMDI0LjA0My0xOC4wMjYuMzMtMS45MTggMi41NC0xLjMzNiAzLjYyMS0uNDU2IDEuOTI3IDEuMDIzIDMuODE0IDIuMDkgNS43NSAzLjA5OGE2NzEuNTUgNjcxLjU1IDAgMCAwIDUuODc3IDMuMTk2YzEuNTcuODg1IDMuMjMzIDEuNjQyIDQuNzA4IDIuNjc2IDEuMzQyIDEuNDkzLS45MDMgMi41NDgtMi4wNSAzLjAxLTEuOTY0LjkxNy0zLjgzOSAxLjk4Ny01Ljg0MiAyLjgxOC0uNzU0LjM1Ny0yLjM4NSAxLjYzOC0yLjczNS45ODYtLjEyNy0xLjg3LjA4Ny0zLjc4LS4xMDYtNS42MjYtLjM0LTEuNzc5LTMuMzQ3LTEuODY4LTMuNzMtLjA3OS0uMDQzIDMuMTgxLS4wMTYgNi4zNjgtLjAzMiA5LjU1Ljg4IDEuNjkgMy4yMjQgMS45MTkgNC42NDQuNzc0IDEuNjItLjgxMiAzLjIwNi0xLjYzMyA0LjgyNi0yLjQ1NSAxLjgwMy0uOTQzIDMuNjQtMS44NjkgNS40NTgtMi44MDcgMi4wNi0xLjE1NSA0LjI4Mi0yLjAxOCA2LjIxNy0zLjM4MyAxLjk4MS0xLjM1NC42MzYtNC4wNTUtMS4yNi00LjY4My0xLjkwNS0xLjA2My0zLjg5LTEuOTg5LTUuODE2LTMuMDM2YTkyMS42OCA5MjEuNjggMCAwIDEtNi45OTMtMy42MTdjLTEuMjI3LS42MS0yLjQzNi0xLjI3Mi0zLjY3Mi0xLjg5NUMxMC42MzggMy4xOSA4LjAyIDEuNzg3IDUuMzgzLjQ1IDQuMzg1LS4xNjcgMy4xOTEuMDI0IDIuMDguMDQyem05LjA3OCAxMC4yN2MtMS41NDkuMzU1LTEuNzc1IDIuNzc0LS4zNDYgMy40NSAxLjQxLjgzOCAzLjQ4Ni0uNTIxIDIuOTY3LTIuMTg1LS4yMzUtMS4xNjUtMS42MDEtMS41NDctMi42MjEtMS4yNjV6IiBmaWxsPSIjMTlhYmNjIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=", D.a.setStyleProperties(n, [
                        ["width", "".concat(f, "px")],
                        ["height", "".concat(h, "px")],
                        ["position", "absolute"],
                        ["z-index", Object(l.b)(o, l.a.ADCHOICES)],
                        ["background", "none"]
                    ])), c.on(j.h, u));
                    var n
                }
            });

            function u() {
                var e, t, n = (e = r.mainImageCsrDiv, (t = s.getElDims(e)).width * t.height >= p && (!o.isAutoplay() || !i.isEnded && i.isPlaying) ? "inline" : "none");
                D.a.setStyle(r.adchoices, "display", n)
            }
        },
        d = "".concat(O.a.TL_CLASS_PREFIX, "adchoices"),
        f = 15,
        h = 15,
        p = 15e3;
    var g = n(9),
        _ = n.n(g),
        y = function() {
            var u, n, l, d, f, h, r, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                e = 1 < arguments.length ? arguments[1] : void 0,
                a = e.creative,
                o = e.eventController,
                p = e.util,
                s = a.getParams(),
                g = null,
                t = {
                    render: function(e) {
                        if (r = e, i.render(r), !s.logo_image_url || !r.domRefs.mainImageCsrDiv || a.isPharma() || a.isVast()) return;
                        n = Object(C.p)("?".concat(s.img_server_params)), l = parseInt(n.queryKey.minLogoPct, 10), d = parseInt(n.queryKey.maxLogoPct, 10), u = parseInt(n.queryKey.logo_width, 10), f = s.logo_image_url, h = s.logo_width, t = document.createElement("img"), t.className = "tl-logo", Object(C.t)(t), D.a.setStyle(t, "position", "absolute"), D.a.setStyle(t, "display", "none"), t.onload = function() {
                            o.publish(j.k), D.a.setStyle(t, "display", "block")
                        }, t.src = s.logo_image_url, g = t, o.on(j.h, c), r.domRefs.logo = g;
                        var t
                    },
                    _getLogoDims: v
                };
            return Object.assign({}, i, t);

            function c(e) {
                if (g && g.naturalHeight && e.width && e.height) {
                    var t = e.width,
                        n = e.height,
                        r = g,
                        i = r.naturalWidth,
                        a = r.naturalHeight,
                        o = {
                            imgWidth: t,
                            imgHeight: n,
                            logoAspectRatio: i / a,
                            scaleFactor: I,
                            logoWidth: u,
                            minLogoPct: l,
                            maxLogoPct: d
                        },
                        s = v(o);
                    p.setDims(g, s.width, s.height);
                    var c = p.sizeLogoSrc(f, s.width, h);
                    p.isEqualUrlNoProtocol(g.src, c) || (g.src = c)
                }
            }

            function v(e) {
                var t = e.imgWidth,
                    n = e.imgHeight,
                    r = e.logoAspectRatio,
                    i = e.logoWidth,
                    a = e.minLogoPct,
                    o = e.maxLogoPct,
                    s = e.scaleFactor,
                    c = {};
                if (i) return c.width = i, c.height = i * (1 / r), m(c, r, {
                    imgWidth: t,
                    imgHeight: n
                });
                if (c.width = t * s, c.height = c.width * (1 / r), c.width / t < c.height / n && (c.height = n * s, c.width = c.height * r), function(e, t) {
                        if (isNaN(e) && isNaN(t)) return !1;
                        var n = isNaN(e) ? 0 : e,
                            r = isNaN(t) ? 100 : t;
                        return n <= r && 0 <= n && n <= 100 && 0 <= r && r <= 100
                    }(a, o)) {
                    var u = t * n,
                        l = c.width * c.height;
                    l < u * (a / 100) ? (c.width = Math.sqrt(u * r * (a / 100)), c.height = c.width / r) : u * (o / 100) < l && (c.width = Math.sqrt(u * r * (o / 100)), c.height = c.width / r)
                }
                return (c = m(c, r, {
                    imgWidth: t,
                    imgHeight: n
                })).width = Math.round(c.width), c.height = Math.round(c.height), c
            }

            function m(e, t, n) {
                var r = n.imgWidth,
                    i = n.imgHeight,
                    a = _()({}, e);
                return y(a, {
                    imgWidth: r,
                    imgHeight: i
                }) && (a.width = r * A, a.height = a.width * (1 / t), y(a, {
                    imgWidth: r,
                    imgHeight: i
                }) && (a.height = i * A, a.width = a.height * t)), a
            }

            function y(e, t) {
                var n = e.width,
                    r = e.height,
                    i = t.imgWidth,
                    a = t.imgHeight;
                return i / 2 < n || a / 2 < r
            }
        },
        I = .25,
        A = .5;
    var w = n(5),
        b = (t.a = function(t, n) {
            var r = n.positionService,
                i = n.featureConfigs,
                a = {
                    initState: (p = i.reduce(function(e, t) {
                        return Object.assign(e, t.initState)
                    }, Object(C.o)(t.initState)), Object.assign({}, b, p)),
                    supportedDomRefs: g("supportedDomRefs", E)
                },
                o = v(a),
                e = g("renderers", k),
                s = g("eventManagers", M),
                c = (h = e, h.reduce(function(e, t) {
                    return t(e, n)
                }, {})),
                u = (l = s, d = Object(m.a)(), f = l.map(function(e) {
                    return new e(d, n)
                }), f.unshift(d), Object.assign.apply(null, f));
            var l, d, f;
            var h;
            var p;
            return {
                render: function() {
                    c.render(o), r.setAdContainer(o.domRefs.adWrapperWithDims);
                    var e = Object(C.n)(Object.keys(o.domRefs), a.supportedDomRefs);
                    if (0 < e.length) throw new w.a("domRefs invalid. Unmatched keys: ".concat(e.join(", ")));
                    return Object.freeze(o.domRefs), u.init(o), Promise.all(o.promises).then(function() {
                        return o
                    })
                },
                context: o
            };

            function g(n, e) {
                return i.reduce(function(e, t) {
                    return e.concat(t[n])
                }, t[n]).concat(e)
            }
        }, {
            adChoicesCorner: "",
            revealTriggerCorner: "",
            isAdChoiceFromTemplate: !1,
            isBackgroundImage: !1,
            imageBoxingOffsetX: 0,
            imageBoxingOffsetY: 0,
            logoOffsetX: 0,
            logoOffsetY: 0,
            visibleImageWidth: 0,
            visibleImageHeight: 0
        }),
        E = ["adchoices", "adWrapper", "adWrapperWithDims", "logo", "mainClickTarget", "mainImage", "mainImageCsrDiv"],
        k = [y, u, function() {
            var e, t, n, r, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                a = 1 < arguments.length ? arguments[1] : void 0,
                h = a.creative,
                o = a.placement,
                p = a.positionService,
                s = a.errorHandler,
                c = a.util,
                u = a.eventController,
                l = h.getParams(),
                d = Object(C.p)("?".concat(l.img_server_params)),
                f = (e = o.logoBlackList, n = Object(C.x)(e).split(","), t = {}, L()(t, F, null), L()(t, U, null), L()(t, B, null), L()(t, W, null), r = t, n.forEach(function(e) {
                    e && (r[e] = V)
                }), r),
                g = !h.isAdChoicesOptOut(),
                v = null,
                m = null,
                y = null,
                _ = null,
                I = [{
                    domRefName: "revealTrigger",
                    placeFunc: function(e, t) {
                        var n = h.params.customization.reveal;
                        n.trigger.corner && z.unshift(Object(C.x)(n.trigger.corner));
                        var r = E(z);
                        if (v.state.revealTriggerCorner = r, T(e, t, r), r) {
                            var i = n.trigger.type;
                            switch (i) {
                                case "peelback":
                                    e.setAttribute("src", Q[r].PEELBACK_URL);
                                    break;
                                case "info_icon":
                                    e.setAttribute("src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsLW9wYWNpdHk9Ii44MTUiIGZpbGw9IiMwMDAiIGQ9Ik0wIDBoMzV2MzVIMHoiLz48cGF0aCBkPSJNMjEuNjY3IDI1LjMxM3YtMi42MDVhLjUwNy41MDcgMCAwIDAtLjE0Ny0uMzc0LjUwNy41MDcgMCAwIDAtLjM3NC0uMTQ2aC0xLjU2M3YtOC4zMzRhLjUwNy41MDcgMCAwIDAtLjE0Ni0uMzc0LjUwNy41MDcgMCAwIDAtLjM3NS0uMTQ3aC01LjIwOGEuNTA3LjUwNyAwIDAgMC0uMzc0LjE0Ny41MDcuNTA3IDAgMCAwLS4xNDcuMzc0djIuNjA0YzAgLjE1Mi4wNS4yNzcuMTQ3LjM3NWEuNTA3LjUwNyAwIDAgMCAuMzc0LjE0NmgxLjU2M3Y1LjIwOWgtMS41NjNhLjUwNy41MDcgMCAwIDAtLjM3NC4xNDYuNTA3LjUwNyAwIDAgMC0uMTQ3LjM3NHYyLjYwNWMwIC4xNTEuMDUuMjc2LjE0Ny4zNzRhLjUwNy41MDcgMCAwIDAgLjM3NC4xNDZoNy4yOTJhLjUwNy41MDcgMCAwIDAgLjM3NC0uMTQ2LjUwNy41MDcgMCAwIDAgLjE0Ny0uMzc1em0tMi4wODQtMTMuNjE3VjguNzJhLjYyNi42MjYgMCAwIDAtLjE0Ni0uNDI4LjQ3NS40NzUgMCAwIDAtLjM3NS0uMTY3aC0zLjEyNWEuNDc1LjQ3NSAwIDAgMC0uMzc0LjE2Ny42MjYuNjI2IDAgMCAwLS4xNDYuNDI4djIuOTc2YzAgLjE3NC4wNDguMzE3LjE0Ni40MjhhLjQ3NS40NzUgMCAwIDAgLjM3NC4xNjhoMy4xMjZhLjQ3NS40NzUgMCAwIDAgLjM3NC0uMTY4LjYyNi42MjYgMCAwIDAgLjE0Ni0uNDI4ek0zMCAxNy41YzAgMi4yNjgtLjU1OSA0LjM2LTEuNjc2IDYuMjc0YTEyLjQ0NCAxMi40NDQgMCAwIDEtNC41NSA0LjU1QzIxLjg2IDI5LjQ0IDE5Ljc2OCAzMCAxNy41IDMwcy00LjM2LS41NTktNi4yNzQtMS42NzZhMTIuNDQ0IDEyLjQ0NCAwIDAgMS00LjU1LTQuNTVDNS41NiAyMS44NiA1IDE5Ljc2OCA1IDE3LjVzLjU1OS00LjM2IDEuNjc2LTYuMjc0YTEyLjQ0NCAxMi40NDQgMCAwIDEgNC41NS00LjU1QzEzLjE0IDUuNTYgMTUuMjMyIDUgMTcuNSA1czQuMzYuNTU5IDYuMjc0IDEuNjc2YTEyLjQ0NCAxMi40NDQgMCAwIDEgNC41NSA0LjU1QzI5LjQ0IDEzLjE0IDMwIDE1LjIzMiAzMCAxNy41eiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=")
                            }
                        }
                    }
                }, {
                    domRefName: R,
                    placeFunc: function(e, t) {
                        var n = function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : F,
                                    t = Object(C.x)(e);
                                return null !== f[t] ? x()[0] : t
                            }(d.queryKey.lp),
                            r = M(d.queryKey, v.state);
                        T(e, t, n, r.x, r.y)
                    }
                }];
            return Object.assign({}, i, {
                render: function(e) {
                    i && i.render(e);
                    var t, n, r = v = e;
                    (m = r.domRefs, y = r.state, t = m, c.find(I, function(e) {
                        return !!t[e.domRefName]
                    }) || !y.isAdChoiceFromTemplate) && (m.mainImageCsrDiv ? (_ = m.mainImageCsrDiv, b()) : ((n = document.createElement("div")).className = "tl-transparent", D.a.setStyle(n, "position", "absolute"), D.a.setStyle(n, "pointer-events", "none"), _ = n, c.addResizeListener(window, A), m.mainImage && m.mainImage.addEventListener("load", w), N({
                        creative: h,
                        errorHandler: s
                    }).get(function(e) {
                        f[Object(C.x)(e.lp)] = R, b()
                    })), u.on(j.h, S))
                },
                _getLogoOffsets: M,
                _setOverlayContainer: function(e) {
                    _ = e
                }
            });

            function A() {
                ! function() {
                    if (null === _.parentElement) {
                        var e = (t = m.adWrapperWithDims, n = t, r = D.a.getPropertyValue(n, "position"), ["static", "", "relative"].indexOf(r) < 0 ? n = document.body : D.a.setStyle(n, "position", "relative"), n !== t && s.fireError("Invalid position style set on ad wrapper", O.a.ERROR_LEVELS.WARNING), n);
                        e.appendChild(_)
                    }
                    var t, n, r;
                    _.parentElement
                }();
                var e = m.mainImage;
                e && e.complete && w()
            }

            function w() {
                var e = m.mainImage.getBoundingClientRect(),
                    t = _.parentElement.getBoundingClientRect(),
                    n = e.top - t.top,
                    r = e.left - t.left;
                D.a.setStyle(_, "top", "".concat(n, "px")), D.a.setStyle(_, "left", "".concat(r, "px")), D.a.setStyle(_, "width", "".concat(e.width, "px")), D.a.setStyle(_, "height", "".concat(e.height, "px"))
            }

            function b() {
                var e;
                h.isVast() && (f[W] = "muteButton"), I.forEach(function(e) {
                    var t = m[e.domRefName];
                    t && e.placeFunc(t, e.domRefName)
                }), g && !y.isAdChoiceFromTemplate && (e = E(H), (v.state.adChoicesCorner = e) ? T(m[P], P, e) : s.fireError("No available corner for AdChoices icon", O.a.ERROR_LEVELS.WARNING))
            }

            function E(e) {
                return k(x(), e) || k(Object.keys(f).filter(function(e) {
                    return f[e] === V
                }), e)
            }

            function k(t, e) {
                return e.find(function(e) {
                    return -1 < t.indexOf(Object(C.x)(e))
                })
            }

            function M(e, t) {
                var n, r, i, a, o, s, c, u = parseInt(e.logo_x_pct, 10),
                    l = parseInt(e.logo_y_pct, 10);
                r = isNaN(u) && isNaN(l) ? (n = parseInt(e.lox, 10), parseInt(e.loy, 10)) : (a = t.visibleImageWidth || t.visibleImageHeight ? (i = t.visibleImageWidth, t.visibleImageHeight) : (i = (o = p.getElDims(_)).width, o.height), n = f(u, i), f(l, a));
                var d = isNaN(n) && isNaN(r);
                return h.isCinemagraph() && d && (r = n = 10), c = t.imageBoxingOffsetX || t.imageBoxingOffsetY ? (s = t.imageBoxingOffsetX, t.imageBoxingOffsetY) : t.logoOffsetX || t.logoOffsetY ? (s = t.logoOffsetX, t.logoOffsetY) : s = 0, {
                    x: "".concat((n || 0) + s, "px"),
                    y: "".concat((r || 0) + c, "px")
                };

                function f(e, t) {
                    return Math.floor(.01 * e * t)
                }
            }

            function T(e, t, n, r, i) {
                var a;
                n && (f[n] = t, a = e, D.a.setStyle(a, "pointer-events", "all"), _.appendChild(a), Q[n].styleCornerEl(e, r, i))
            }

            function S() {
                var t, e = (t = R, Object.keys(f).filter(function(e) {
                    return f[e] === t
                })[0]);
                if (e) {
                    var n = M(d.queryKey, v.state);
                    Q[e].styleCornerEl(m[R], n.x, n.y)
                }
            }

            function x() {
                return Object.keys(f).filter(function(e) {
                    return null === f[e]
                })
            }
        }],
        M = [r]
}, function(e, t, n) {
    "use strict";
    var d = n(21),
        f = n(33),
        h = n(78),
        p = n(79);
    n(81)("match", 1, function(r, i, u, l) {
        return [function(e) {
            var t = r(this),
                n = null == e ? void 0 : e[i];
            return void 0 !== n ? n.call(e, t) : new RegExp(e)[i](String(t))
        }, function(e) {
            var t = l(u, e, this);
            if (t.done) return t.value;
            var n = d(e),
                r = String(this);
            if (!n.global) return p(n, r);
            for (var i, a = n.unicode, o = [], s = n.lastIndex = 0; null !== (i = p(n, r));) {
                var c = String(i[0]);
                "" === (o[s] = c) && (n.lastIndex = h(r, f(n.lastIndex), a)), s++
            }
            return 0 === s ? null : o
        }]
    })
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(88)(!0);
    r(r.P, "Array", {
        includes: function(e) {
            return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }), n(74)("includes")
}, function(e, t) {
    var n = e.exports = {
        version: "2.6.5"
    };
    "number" == typeof __e && (__e = n)
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(122),
        a = "includes";
    r(r.P + r.F * n(123)(a), "String", {
        includes: function(e) {
            return !!~i(this, e, a).indexOf(e, 1 < arguments.length ? arguments[1] : void 0)
        }
    })
}, function(e, t, n) {
    "use strict";
    var d = n(75),
        _ = n(21),
        I = n(91),
        A = n(78),
        w = n(33),
        b = n(79),
        f = n(80),
        r = n(19),
        E = Math.min,
        h = [].push,
        o = "split",
        p = "length",
        g = "lastIndex",
        k = 4294967295,
        M = !r(function() {
            RegExp(k, "y")
        });
    n(81)("split", 2, function(i, a, v, m) {
        var y;
        return y = "c" == "abbc" [o](/(b)*/)[1] || 4 != "test" [o](/(?:)/, -1)[p] || 2 != "ab" [o](/(?:ab)*/)[p] || 4 != "." [o](/(.?)(.?)/)[p] || 1 < "." [o](/()()/)[p] || "" [o](/.?/)[p] ? function(e, t) {
            var n = String(this);
            if (void 0 === e && 0 === t) return [];
            if (!d(e)) return v.call(n, e, t);
            for (var r, i, a, o = [], s = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), c = 0, u = void 0 === t ? k : t >>> 0, l = new RegExp(e.source, s + "g");
                (r = f.call(l, n)) && !(c < (i = l[g]) && (o.push(n.slice(c, r.index)), 1 < r[p] && r.index < n[p] && h.apply(o, r.slice(1)), a = r[0][p], c = i, o[p] >= u));) l[g] === r.index && l[g]++;
            return c === n[p] ? !a && l.test("") || o.push("") : o.push(n.slice(c)), o[p] > u ? o.slice(0, u) : o
        } : "0" [o](void 0, 0)[p] ? function(e, t) {
            return void 0 === e && 0 === t ? [] : v.call(this, e, t)
        } : v, [function(e, t) {
            var n = i(this),
                r = null == e ? void 0 : e[a];
            return void 0 !== r ? r.call(e, n, t) : y.call(String(n), e, t)
        }, function(e, t) {
            var n = m(y, e, this, t, y !== v);
            if (n.done) return n.value;
            var r = _(e),
                i = String(this),
                a = I(r, RegExp),
                o = r.unicode,
                s = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (M ? "y" : "g"),
                c = new a(M ? r : "^(?:" + r.source + ")", s),
                u = void 0 === t ? k : t >>> 0;
            if (0 === u) return [];
            if (0 === i.length) return null === b(c, i) ? [i] : [];
            for (var l = 0, d = 0, f = []; d < i.length;) {
                c.lastIndex = M ? d : 0;
                var h, p = b(c, M ? i : i.slice(d));
                if (null === p || (h = E(w(c.lastIndex + (M ? 0 : d)), i.length)) === l) d = A(i, d, o);
                else {
                    if (f.push(i.slice(l, d)), f.length === u) return f;
                    for (var g = 1; g <= p.length - 1; g++)
                        if (f.push(p[g]), f.length === u) return f;
                    d = l = h
                }
            }
            return f.push(i.slice(l)), f
        }]
    })
}, function(e, t, n) {
    var r = n(29),
        i = n(83);
    e.exports = function(e, t) {
        return !t || "object" !== r(t) && "function" != typeof t ? i(e) : t
    }
}, function(e, t, n) {
    var r = n(84);
    e.exports = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && r(e, t)
    }
}, function(e, t, n) {
    "use strict";
    n(143);
    var r = n(21),
        i = n(61),
        a = n(25),
        o = "toString",
        s = /./ [o],
        c = function(e) {
            n(31)(RegExp.prototype, o, e, !0)
        };
    n(19)(function() {
        return "/a/b" != s.call({
            source: "a",
            flags: "b"
        })
    }) ? c(function() {
        var e = r(this);
        return "/".concat(e.source, "/", "flags" in e ? e.flags : !a && e instanceof RegExp ? i.call(e) : void 0)
    }) : s.name != o && c(function() {
        return s.call(this)
    })
}, function(e, t) {
    e.exports = {}
}, function(e, t) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function(D, e) {
    ! function(e) {
        "use strict";
        var c, t = Object.prototype,
            u = t.hasOwnProperty,
            n = "function" == typeof Symbol ? Symbol : {},
            i = n.iterator || "@@iterator",
            r = n.asyncIterator || "@@asyncIterator",
            a = n.toStringTag || "@@toStringTag",
            o = "object" == typeof D,
            s = e.regeneratorRuntime;
        if (s) o && (D.exports = s);
        else {
            (s = e.regeneratorRuntime = o ? D.exports : {}).wrap = _;
            var d = "suspendedStart",
                f = "suspendedYield",
                h = "executing",
                p = "completed",
                g = {},
                l = {};
            l[i] = function() {
                return this
            };
            var v = Object.getPrototypeOf,
                m = v && v(v(C([])));
            m && m !== t && u.call(m, i) && (l = m);
            var y = b.prototype = A.prototype = Object.create(l);
            w.prototype = y.constructor = b, b.constructor = w, b[a] = w.displayName = "GeneratorFunction", s.isGeneratorFunction = function(e) {
                var t = "function" == typeof e && e.constructor;
                return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
            }, s.mark = function(e) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(y), e
            }, s.awrap = function(e) {
                return {
                    __await: e
                }
            }, E(k.prototype), k.prototype[r] = function() {
                return this
            }, s.AsyncIterator = k, s.async = function(e, t, n, r) {
                var i = new k(_(e, t, n, r));
                return s.isGeneratorFunction(t) ? i : i.next().then(function(e) {
                    return e.done ? e.value : i.next()
                })
            }, E(y), y[a] = "Generator", y[i] = function() {
                return this
            }, y.toString = function() {
                return "[object Generator]"
            }, s.keys = function(n) {
                var r = [];
                for (var e in n) r.push(e);
                return r.reverse(),
                    function e() {
                        for (; r.length;) {
                            var t = r.pop();
                            if (t in n) return e.value = t, e.done = !1, e
                        }
                        return e.done = !0, e
                    }
            }, s.values = C, x.prototype = {
                constructor: x,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(S), !e)
                        for (var t in this) "t" === t.charAt(0) && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = c)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0].completion;
                    if ("throw" === e.type) throw e.arg;
                    return this.rval
                },
                dispatchException: function(n) {
                    if (this.done) throw n;
                    var r = this;

                    function e(e, t) {
                        return a.type = "throw", a.arg = n, r.next = e, t && (r.method = "next", r.arg = c), !!t
                    }
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var i = this.tryEntries[t],
                            a = i.completion;
                        if ("root" === i.tryLoc) return e("end");
                        if (i.tryLoc <= this.prev) {
                            var o = u.call(i, "catchLoc"),
                                s = u.call(i, "finallyLoc");
                            if (o && s) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            } else if (o) {
                                if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                            } else {
                                if (!s) throw new Error("try statement without catch or finally");
                                if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var r = this.tryEntries[n];
                        if (r.tryLoc <= this.prev && u.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var i = r;
                            break
                        }
                    }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(a)
                },
                complete: function(e, t) {
                    if ("throw" === e.type) throw e.arg;
                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g
                },
                finish: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), g
                    }
                },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                S(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) {
                    return this.delegate = {
                        iterator: C(e),
                        resultName: t,
                        nextLoc: n
                    }, "next" === this.method && (this.arg = c), g
                }
            }
        }

        function _(e, t, n, r) {
            var a, o, s, c, i = t && t.prototype instanceof A ? t : A,
                u = Object.create(i.prototype),
                l = new x(r || []);
            return u._invoke = (a = e, o = n, s = l, c = d, function(e, t) {
                if (c === h) throw new Error("Generator is already running");
                if (c === p) {
                    if ("throw" === e) throw t;
                    return L()
                }
                for (s.method = e, s.arg = t;;) {
                    var n = s.delegate;
                    if (n) {
                        var r = M(n, s);
                        if (r) {
                            if (r === g) continue;
                            return r
                        }
                    }
                    if ("next" === s.method) s.sent = s._sent = s.arg;
                    else if ("throw" === s.method) {
                        if (c === d) throw c = p, s.arg;
                        s.dispatchException(s.arg)
                    } else "return" === s.method && s.abrupt("return", s.arg);
                    c = h;
                    var i = I(a, o, s);
                    if ("normal" === i.type) {
                        if (c = s.done ? p : f, i.arg === g) continue;
                        return {
                            value: i.arg,
                            done: s.done
                        }
                    }
                    "throw" === i.type && (c = p, s.method = "throw", s.arg = i.arg)
                }
            }), u
        }

        function I(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }

        function A() {}

        function w() {}

        function b() {}

        function E(e) {
            ["next", "throw", "return"].forEach(function(t) {
                e[t] = function(e) {
                    return this._invoke(t, e)
                }
            })
        }

        function k(c) {
            var t;
            this._invoke = function(n, r) {
                function e() {
                    return new Promise(function(e, t) {
                        ! function t(e, n, r, i) {
                            var a = I(c[e], c, n);
                            if ("throw" !== a.type) {
                                var o = a.arg,
                                    s = o.value;
                                return s && "object" == typeof s && u.call(s, "__await") ? Promise.resolve(s.__await).then(function(e) {
                                    t("next", e, r, i)
                                }, function(e) {
                                    t("throw", e, r, i)
                                }) : Promise.resolve(s).then(function(e) {
                                    o.value = e, r(o)
                                }, function(e) {
                                    return t("throw", e, r, i)
                                })
                            }
                            i(a.arg)
                        }(n, r, e, t)
                    })
                }
                return t = t ? t.then(e, e) : e()
            }
        }

        function M(e, t) {
            var n = e.iterator[t.method];
            if (n === c) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = c, M(e, t), "throw" === t.method)) return g;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return g
            }
            var r = I(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, g;
            var i = r.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = c), t.delegate = null, g) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, g)
        }

        function T(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function S(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function x(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(T, this), this.reset(!0)
        }

        function C(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        r = function e() {
                            for (; ++n < t.length;)
                                if (u.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = c, e.done = !0, e
                        };
                    return r.next = r
                }
            }
            return {
                next: L
            }
        }

        function L() {
            return {
                value: c,
                done: !0
            }
        }
    }(function() {
        return this || "object" == typeof self && self
    }() || Function("return this")())
}, function(e, t) {
    var n = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
    }
}, function(e, t, n) {
    "use strict";
    n(18), n(40), n(13);
    var y = n(7),
        _ = n(1);
    t.a = function() {
        var a, o, u, s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = 1 < arguments.length ? arguments[1] : void 0,
            c = e.placement,
            l = e.environment,
            d = e.creative,
            f = e.browserInfo,
            h = e.util,
            p = e.eventController;
        return Object.assign({}, s, {
            render: function(e) {
                s.render && s.render(e);
                var t = u = e,
                    n = t.state,
                    r = t.domRefs;
                if (!n.isBackgroundImage || !d.isImage() && !d.isCinemagraph()) {
                    var i = r.mainImage;
                    r.mainImageCsrDiv || (r.mainImageCsrDiv = m(i.src, c)), (o = r.mainImageCsrDiv).className += " tl-csr",
                        function(e) {
                            for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = 0; n[r];) t = n[r], e.style.setProperty(t, n[t], "important"), r++
                        }(a = function(e, t, n) {
                            var r, i, a, o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "",
                                s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "",
                                c = (5 < arguments.length ? arguments[5] : void 0).createElement("img");
                            return c.className = "".concat(o, " ").concat("tl-dummy-img"), c.id = s, c.style.setProperty("display", "none", "important"), f.isIE ? c.onload = function() {
                                g()
                            } : u.promises.push(new Promise(function(e) {
                                c.onload = function() {
                                    g(), e()
                                }
                            })), c.src = (r = e, i = t, a = n, Object(_.a)("//".concat(r, "/blank?width=").concat(i, "&height=").concat(a))), c
                        }(l.tlImageAddr, c.imageWidth, c.imageHeight, i.className, i.id, document), i.style), i.parentNode.insertBefore(a, i), h.addResizeListener(window, v), h.swapElement(o, i), r.mainImageCsrDiv = o, p.on(y.k, v), p.on(y.j, v)
                }
            },
            createMainImageCsrDiv: m
        });

        function g() {
            p.publish(y.g), v()
        }

        function v() {
            a && p.publish(y.h, function() {
                if (!a) return {
                    width: 0,
                    height: 0
                };
                a.style.setProperty("display", "", "important");
                var t, n, e = a.ownerDocument.defaultView.getComputedStyle(a);
                t = o, n = e, ["width", "height", "float", "margin", "margin-top", "margin-right", "margin-bottom", "margin-left", "max-width", "max-height", "padding", "padding-top", "padding-right", "padding-bottom", "padding-left", "border", "border-top", "border-right", "border-bottom", "border-left"].forEach(function(e) {
                    n[e] && t.style.setProperty(e, n[e], "important")
                }), "" === n.position || "static" === n.position ? t.style.setProperty("position", "relative", "important") : t.style.setProperty("position", n.position, "important");
                var r = parseFloat(e.width),
                    i = parseFloat(e.height);
                return a.style.setProperty("display", "none", "important"), {
                    width: r,
                    height: i
                }
            }())
        }

        function m(e, t) {
            var n = document.createElement("div"),
                r = t.customOptions.is3pAdPreview ? "cover" : "contain";
            return n.style.setProperty("width", "".concat(t.imageWidth, "px"), "important"), n.style.setProperty("height", "".concat(t.imageHeight, "px"), "important"), n.style.setProperty("background-size", r, "important"), n.style.setProperty("background-position", "center", "important"), n.style.setProperty("background-repeat", "no-repeat", "important"), n.style.setProperty("background-image", "url(".concat(e, ")"), "important"), n
        }
    }
}, function(e, t, n) {
    "use strict";
    n(43), n(85), n(12), n(30), n(13), n(28), n(62), n(20), n(24), n(47);
    var r = n(2),
        i = n.n(r),
        a = n(3),
        o = n.n(a),
        _ = n(1),
        I = function() {
            function s() {
                i()(this, s)
            }
            return o()(s, null, [{
                key: "build",
                value: function(e, t, n) {
                    var r = s.getImageUrlKey(t),
                        i = Object(_.a)(t[r]);
                    i && (t[r] = i);
                    var a = t[r],
                        o = s.parseSizedImgMacros(e, a);
                    return t = n.objMerge(t, o), s.interpolate(e, t)
                }
            }, {
                key: "parseSizedImgMacros",
                value: function(e, a) {
                    var o = Object(_.p)(a),
                        t = e.match(/%%%IMAGE_URL_\d+_X_\d+%%%/gi) || [],
                        s = {};
                    return t.forEach(function(e) {
                        var t, n = e.slice(3, -3),
                            r = n.split("_");
                        if ("data" === o.protocol) s[n] = a;
                        else {
                            0 <= o.host.indexOf("img.3lift") && (o.queryKey.width = r[2], o.queryKey.height = r[4]);
                            var i = (t = o.queryKey, Object.keys(t).map(function(e) {
                                return "".concat(e, "=").concat(t[e])
                            }).join("&"));
                            s[n] = Object(_.a)("//".concat(o.host).concat(o.path, "?").concat(i))
                        }
                    }), s
                }
            }, {
                key: "interpolate",
                value: function(n, r) {
                    var i, a, o = n;
                    return Object.keys(r).forEach(function(e) {
                        var t;
                        i = r[e], a = new RegExp("%%%".concat(e, "%%%"), "gi"), n.match(a) && (o = o.replace(a, (t = i, function() {
                            return t
                        })))
                    }), o
                }
            }, {
                key: "getImageUrlKey",
                value: function(e) {
                    var t, n, r = Object.keys(e);
                    for (n = 0; n < r.length; n += 1)
                        if ("image_url" === (t = r[n]).toLowerCase()) return t;
                    return null
                }
            }]), s
        }(),
        A = {
            init: function(e) {
                var t = e.adWrapper,
                    n = e.creative,
                    r = e.analytics,
                    i = e.util,
                    a = n.getVastTag(),
                    o = a && a.getVastClickThroughUrl(),
                    s = [].slice.call(t.getElementsByClassName("tl-cta"));
                n.params.clickthrough_url || o ? s.forEach(function(e) {
                    i.listen(e, "click", function() {
                        r.fireEEE("click_cta")
                    })
                }) : s.forEach(_.s)
            }
        };
    var s = n(4);
    var w = {
        init: function(e, t) {
            if (!t.params.logo_image_url) {
                var n = e.getElementsByClassName("".concat(s.a.TL_CLASS_PREFIX, "logo-img"))[0];
                n && (n.src = s.a.TINY_IMG_DATA, Object(_.s)(n));
                var r = e.getElementsByClassName("".concat(s.a.TL_CLASS_PREFIX, "logo"))[0];
                r && Object(_.s)(r)
            }
        }
    };
    var b = {
            init: function(e, t) {
                var n = e.getElementsByClassName("".concat(s.a.TL_CLASS_PREFIX, "sub-headline"));
                if (!t.params.subheadline && 0 < n.length) {
                    var r = n[0];
                    r && Object(_.s)(r)
                }
            }
        },
        E = (t.a = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = 1 < arguments.length ? arguments[1] : void 0,
                n = t.environment,
                c = t.placement,
                u = t.creative,
                l = t.templateCode,
                d = t.analytics,
                f = t.util,
                h = u.getParams(),
                p = null,
                g = null,
                r = {
                    render: function(e) {
                        g = e.domRefs;
                        var t = function(e) {
                            var t = document.createElement("div");
                            t.innerHTML = e, t.style.display = "inline", t.className = "tlod";
                            var n = f.find(t.children, function(e) {
                                return -1 === k.indexOf(i(e))
                            });
                            return {
                                adWrapper: function() {
                                    var e;
                                    e = c.customOptions.unwrappedUnit ? (f.filter(t.children, r).forEach(function(e) {
                                        n.appendChild(e)
                                    }), n) : t;
                                    return e.setAttribute("plid", c.id), e
                                }(),
                                adWrapperWithDims: n
                            };

                            function r(e) {
                                return "script" === i(e)
                            }

                            function i(e) {
                                var t = e && e.tagName;
                                return t && t.toLowerCase && t.toLowerCase()
                            }
                        }(I.build(l.templateDetail.string, h, f));
                        g.adWrapper = t.adWrapper, g.adWrapperWithDims = t.adWrapperWithDims, p || (i = g.adWrapper.getElementsByTagName("img"), p = v(f.filter(i, m)) || (n = g.adWrapper.getElementsByTagName("*"), r = Object(_.p)(h.image_url), f.find(n, function(e) {
                            var t = e.style && e.style["background-image"],
                                n = e.hasAttribute && e.hasAttribute("data-background");
                            return t && t.match(r.query) || n && n.match(r.query)
                        })));
                        var n, r, i;
                        "div" === y(g.mainImage = p) && (e.state.isBackgroundImage = !0);
                        "img" === y(p) && h.image_srcset_2x && !p.getAttribute("srcset") && c.imageWidth <= E && c.imageHeight <= E && p.setAttribute("srcset", h.image_srcset_2x);
                        if (w.init(g.adWrapper, u), A.init({
                                adWrapper: g.adWrapper,
                                creative: u,
                                analytics: d,
                                util: f
                            }), b.init(g.adWrapper, u), !h.clickthrough_url)
                            for (var a = g.adWrapper.getElementsByClassName("tl-clickthrough-url"), o = 0; o < a.length; o++) a[o].removeAttribute("href"), a[o].removeAttribute("target");
                        var s = g.adWrapper.getElementsByClassName("tl_clickthrough")[0];
                        g.mainClickTarget = s || g.adWrapperWithDims
                    },
                    _bestImage: v
                };
            return Object.assign({}, e, r);

            function v(e) {
                return e.sort(function(e, t) {
                    var n = "none" === s(e),
                        r = "none" === s(t),
                        i = !n && !r;
                    if (n && r || i) {
                        var a = e.width * e.height,
                            o = t.width * t.height;
                        return isNaN(a) ? 1 : isNaN(o) ? -1 : o - a
                    }
                    if (n) return 1;
                    return -1
                })[0];

                function s(e) {
                    return e && e.style && e.style.display
                }
            }

            function m(e) {
                var t = [h.image_url, n.tlImageAddr];
                return e.src && t.some(f.isMatch.bind(null, e.src))
            }

            function y(e) {
                var t = e && e.tagName;
                return t && t.toLowerCase && t.toLowerCase()
            }
        }, 600),
        k = ["iframe", "style", "meta", "script", "link", "br", "hr"]
}, function(e, t) {
    var n = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }
}, function(e, t, n) {
    var r = n(73),
        i = n(39);
    e.exports = function(e) {
        return r(i(e))
    }
}, function(e, t, n) {
    var r = n(98),
        i = n(77);
    e.exports = Object.keys || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(21);
    e.exports = function() {
        var e = r(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    }
}, function(e, t, n) {
    var r = n(17),
        a = n(107),
        i = n(27).f,
        o = n(87).f,
        s = n(75),
        c = n(61),
        u = r.RegExp,
        l = u,
        d = u.prototype,
        f = /a/g,
        h = /a/g,
        p = new u(f) !== f;
    if (n(25) && (!p || n(19)(function() {
            return h[n(14)("match")] = !1, u(f) != f || u(h) == h || "/a/i" != u(f, "i")
        }))) {
        u = function(e, t) {
            var n = this instanceof u,
                r = s(e),
                i = void 0 === t;
            return !n && r && e.constructor === u && i ? e : a(p ? new l(r && !i ? e.source : e, t) : l((r = e instanceof u) ? e.source : e, r && i ? c.call(e) : t), n ? this : d, u)
        };
        for (var g = function(t) {
                t in u || i(u, t, {
                    configurable: !0,
                    get: function() {
                        return l[t]
                    },
                    set: function(e) {
                        l[t] = e
                    }
                })
            }, v = o(l), m = 0; v.length > m;) g(v[m++]);
        (d.constructor = u).prototype = d, n(31)(r, "RegExp", u)
    }
    n(92)("RegExp")
}, function(r, e, t) {
    t(26);
    var a = t(153);

    function i(e, t, n) {
        return "undefined" != typeof Reflect && Reflect.get ? r.exports = i = Reflect.get : r.exports = i = function(e, t, n) {
            var r = a(e, t);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(n) : i.value
            }
        }, i(e, t, n || e)
    }
    r.exports = i
}, function(e, t, n) {
    "use strict";
    t.a = function() {
        return {
            makeZParamsString: function(e, t) {
                var n = e.getParams().viewability.moat,
                    r = t.aid || 0,
                    i = t.unid || 0;
                return [{
                    key: "aid",
                    val: r
                }, {
                    key: "sr",
                    val: n
                }, {
                    key: "uid",
                    val: i
                }].reduce(a, "")
            }
        };

        function a(e, t) {
            return "".concat(e + t.key, ":").concat(t.val, ";")
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(104)(!0);
    n(105)(String, "String", function(e) {
        this._t = String(e), this._i = 0
    }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, n), this._i += e.length, {
            value: e,
            done: !1
        })
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    }), n.d(t, "b", function() {
        return i
    });
    var r = {
            VIDEO_COMPASS: 0,
            VIDEO_CONTROL: 0,
            VIDEO_CLICK_BLOCK: 0,
            VIDEO_LOGO: 0,
            VIDEO_END_FRAME: 1,
            CAROUSEL_CIRCLE: 1,
            CAROUSEL_ARROW: 2,
            ADCHOICES: 3,
            REVEAL_TRIGGER: 3,
            REVEAL_CONTENT: 4,
            REVEAL_CLOSE: 5
        },
        i = function(e, t) {
            return e.getBaseZIndex() + t
        }
}, function(e, t) {
    e.exports = !1
}, function(e, t, n) {
    var i = n(23);
    e.exports = function(e, t) {
        if (!i(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, t, n) {
    var i = n(38),
        a = n(14)("toStringTag"),
        o = "Arguments" == i(function() {
            return arguments
        }());
    e.exports = function(e) {
        var t, n, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
            try {
                return e[t]
            } catch (e) {}
        }(t = Object(e), a)) ? n : o ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
    }
}, function(e, t, n) {
    var r = n(27).f,
        i = n(36),
        a = n(14)("toStringTag");
    e.exports = function(e, t, n) {
        e && !i(e = n ? e : e.prototype, a) && r(e, a, {
            configurable: !0,
            value: t
        })
    }
}, function(e, t, n) {
    var r = n(23),
        i = n(17).document,
        a = r(i) && r(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}, function(e, t, n) {
    var r = n(45),
        i = n(17),
        a = "__core-js_shared__",
        o = i[a] || (i[a] = {});
    (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: r.version,
        mode: n(67) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, t, n) {
    var r = n(38);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == r(e) ? e.split("") : Object(e)
    }
}, function(e, t, n) {
    var r = n(14)("unscopables"),
        i = Array.prototype;
    null == i[r] && n(34)(i, r, {}), e.exports = function(e) {
        i[r][e] = !0
    }
}, function(e, t, n) {
    var r = n(23),
        i = n(38),
        a = n(14)("match");
    e.exports = function(e) {
        var t;
        return r(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e))
    }
}, function(e, t, n) {
    var r = n(72)("keys"),
        i = n(57);
    e.exports = function(e) {
        return r[e] || (r[e] = i(e))
    }
}, function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
    "use strict";
    var r = n(104)(!0);
    e.exports = function(e, t, n) {
        return t + (n ? r(e, t).length : 1)
    }
}, function(e, t, n) {
    "use strict";
    var i = n(69),
        a = RegExp.prototype.exec;
    e.exports = function(e, t) {
        var n = e.exec;
        if ("function" == typeof n) {
            var r = n.call(e, t);
            if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== i(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return a.call(e, t)
    }
}, function(e, t, n) {
    "use strict";
    var r, i, o = n(61),
        s = RegExp.prototype.exec,
        c = String.prototype.replace,
        a = s,
        u = "lastIndex",
        l = (r = /a/, i = /b*/g, s.call(r, "a"), s.call(i, "a"), 0 !== r[u] || 0 !== i[u]),
        d = void 0 !== /()??/.exec("")[1];
    (l || d) && (a = function(e) {
        var t, n, r, i, a = this;
        return d && (n = new RegExp("^" + a.source + "$(?!\\s)", o.call(a))), l && (t = a[u]), r = s.call(a, e), l && r && (a[u] = a.global ? r.index + r[0].length : t), d && r && 1 < r.length && c.call(r[0], n, function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        }), r
    }), e.exports = a
}, function(e, t, n) {
    "use strict";
    n(132);
    var l = n(31),
        d = n(34),
        f = n(19),
        h = n(39),
        p = n(14),
        g = n(80),
        v = p("species"),
        m = !f(function() {
            var e = /./;
            return e.exec = function() {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        }),
        y = function() {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function() {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    e.exports = function(n, e, t) {
        var r = p(n),
            a = !f(function() {
                var e = {};
                return e[r] = function() {
                    return 7
                }, 7 != "" [n](e)
            }),
            i = a ? !f(function() {
                var e = !1,
                    t = /a/;
                return t.exec = function() {
                    return e = !0, null
                }, "split" === n && (t.constructor = {}, t.constructor[v] = function() {
                    return t
                }), t[r](""), !e
            }) : void 0;
        if (!a || !i || "replace" === n && !m || "split" === n && !y) {
            var o = /./ [r],
                s = t(h, r, "" [n], function(e, t, n, r, i) {
                    return t.exec === g ? a && !i ? {
                        done: !0,
                        value: o.call(t, n, r)
                    } : {
                        done: !0,
                        value: e.call(n, t, r)
                    } : {
                        done: !1
                    }
                }),
                c = s[0],
                u = s[1];
            l(String.prototype, n, c), d(RegExp.prototype, r, 2 == e ? function(e, t) {
                return u.call(e, this, t)
            } : function(e) {
                return u.call(e, this)
            })
        }
    }
}, function(e, t, n) {
    var i = n(22),
        a = n(45),
        o = n(19);
    e.exports = function(e, t) {
        var n = (a.Object || {})[e] || Object[e],
            r = {};
        r[e] = t(n), i(i.S + i.F * o(function() {
            n(1)
        }), "Object", r)
    }
}, function(e, t) {
    e.exports = function(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(n, e) {
    function r(e, t) {
        return n.exports = r = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        }, r(e, t)
    }
    n.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(22),
        i = n(52),
        a = n(35),
        o = n(19),
        s = [].sort,
        c = [1, 2, 3];
    r(r.P + r.F * (o(function() {
        c.sort(void 0)
    }) || !o(function() {
        c.sort(null)
    }) || !n(152)(s)), "Array", {
        sort: function(e) {
            return void 0 === e ? s.call(a(this)) : s.call(a(this), i(e))
        }
    })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var r = n(4),
        i = "".concat(r.a.TL_CLASS_PREFIX, "video");
    t.b = {
        componentZIndex: 1e9,
        type: {
            vast: 1,
            vpaid: 2
        }
    }
}, function(e, t, n) {
    var r = n(98),
        i = n(77).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return r(e, i)
    }
}, function(e, t, n) {
    var c = n(59),
        u = n(33),
        l = n(114);
    e.exports = function(s) {
        return function(e, t, n) {
            var r, i = c(e),
                a = u(i.length),
                o = l(n, a);
            if (s && t != t) {
                for (; o < a;)
                    if ((r = i[o++]) != r) return !0
            } else
                for (; o < a; o++)
                    if ((s || o in i) && i[o] === t) return s || o || 0;
            return !s && -1
        }
    }
}, function(e, t, n) {
    var r = n(51),
        i = n(14)("iterator"),
        a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (r.Array === e || a[i] === e)
    }
}, function(e, t, n) {
    var r = n(69),
        i = n(14)("iterator"),
        a = n(51);
    e.exports = n(45).getIteratorMethod = function(e) {
        if (null != e) return e[i] || e["@@iterator"] || a[r(e)]
    }
}, function(e, t, n) {
    var i = n(21),
        a = n(52),
        o = n(14)("species");
    e.exports = function(e, t) {
        var n, r = i(e).constructor;
        return void 0 === r || null == (n = i(r)[o]) ? t : a(n)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        i = n(27),
        a = n(25),
        o = n(14)("species");
    e.exports = function(e) {
        var t = r[e];
        a && t && !t[o] && i.f(t, o, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, t, n) {
    var a = n(14)("iterator"),
        o = !1;
    try {
        var r = [7][a]();
        r.return = function() {
            o = !0
        }, Array.from(r, function() {
            throw 2
        })
    } catch (e) {}
    e.exports = function(e, t) {
        if (!t && !o) return !1;
        var n = !1;
        try {
            var r = [7],
                i = r[a]();
            i.next = function() {
                return {
                    done: n = !0
                }
            }, r[a] = function() {
                return i
            }, e(r)
        } catch (e) {}
        return n
    }
}, function(e, t, r) {
    var i = r(21),
        a = r(139),
        o = r(77),
        s = r(76)("IE_PROTO"),
        c = function() {},
        u = "prototype",
        l = function() {
            var e, t = r(71)("iframe"),
                n = o.length;
            for (t.style.display = "none", r(102).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; n--;) delete l[u][o[n]];
            return l()
        };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (c[u] = i(e), n = new c, c[u] = null, n[s] = e) : n = l(), void 0 === t ? n : a(n, t)
    }
}, function(e, t, n) {
    var r = n(99),
        i = n(58),
        a = n(59),
        o = n(68),
        s = n(36),
        c = n(97),
        u = Object.getOwnPropertyDescriptor;
    t.f = n(25) ? u : function(e, t) {
        if (e = a(e), t = o(t, !0), c) try {
            return u(e, t)
        } catch (e) {}
        if (s(e, t)) return i(!r.f.call(e, t), e[t])
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return f
    }), n.d(t, "b", function() {
        return h
    }), n.d(t, "c", function() {
        return p
    });
    var r = n(0),
        o = n.n(r),
        i = (n(44), n(46), n(6)),
        s = "height",
        c = "width",
        a = function(e, t, n) {
            var r;
            if (!n || ![s, c].includes(n)) throw new Error("getResizePct: missing or invalid dimension argument '".concat(n, "'."));
            var i = n === s ? c : s;
            if (!t[n] || !e[n]) return {
                height: 0,
                width: 0
            };
            var a = e[n] / t[n];
            return r = {}, o()(r, n, e[n]), o()(r, i, t[i] * a), r
        },
        u = function(e, t) {
            return a(e, t, s)
        },
        l = function(e, t) {
            return a(e, t, c)
        },
        d = function(e, t) {
            var n = e.height,
                r = e.width,
                i = t.height,
                a = t.width;
            return i <= n && a <= r
        },
        f = function(e, t) {
            var n = u(e, t);
            return d(e, n) ? n : l(e, t)
        },
        h = function(e, t) {
            if (!e.height || !t.height) return {
                x: 0,
                y: 0
            };
            var n, r, i, a, o = u(e, t);
            return d(e, o) ? (i = e, a = o, {
                x: Math.ceil((i.width - a.width) / 2) || 0,
                y: 0
            }) : (r = l(n = e, t), {
                x: 0,
                y: Math.ceil((n.height - r.height) / 2) || 0
            })
        },
        p = function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
            if (t && 0 <= t.x && 0 <= t.y) switch (e) {
                case "NW":
                    i.a.setStyle(n, "left", "".concat(t.x + r, "px")), i.a.setStyle(n, "top", "".concat(t.y + r, "px"));
                    break;
                case "SE":
                    i.a.setStyle(n, "right", "".concat(t.x + r, "px")), i.a.setStyle(n, "bottom", "".concat(t.y + r, "px"));
                    break;
                case "SW":
                    i.a.setStyle(n, "left", "".concat(t.x + r, "px")), i.a.setStyle(n, "bottom", "".concat(t.y + r, "px"));
                    break;
                default:
                    i.a.setStyle(n, "right", "".concat(t.x + r, "px")), i.a.setStyle(n, "top", "".concat(t.y + r, "px"))
            }
        }
}, function(e, t, n) {
    e.exports = !n(25) && !n(19)(function() {
        return 7 != Object.defineProperty(n(71)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(e, t, n) {
    var o = n(36),
        s = n(59),
        c = n(88)(!1),
        u = n(76)("IE_PROTO");
    e.exports = function(e, t) {
        var n, r = s(e),
            i = 0,
            a = [];
        for (n in r) n != u && o(r, n) && a.push(n);
        for (; t.length > i;) o(r, n = t[i++]) && (~c(a, n) || a.push(n));
        return a
    }
}, function(e, t) {
    t.f = {}.propertyIsEnumerable
}, function(e, t, n) {
    var a = n(21);
    e.exports = function(t, e, n, r) {
        try {
            return r ? e(a(n)[0], n[1]) : e(n)
        } catch (e) {
            var i = t.return;
            throw void 0 !== i && a(i.call(t)), e
        }
    }
}, function(e, t, n) {
    var r, i, a, o = n(37),
        s = n(127),
        c = n(102),
        u = n(71),
        l = n(17),
        d = l.process,
        f = l.setImmediate,
        h = l.clearImmediate,
        p = l.MessageChannel,
        g = l.Dispatch,
        v = 0,
        m = {},
        y = "onreadystatechange",
        _ = function() {
            var e = +this;
            if (m.hasOwnProperty(e)) {
                var t = m[e];
                delete m[e], t()
            }
        },
        I = function(e) {
            _.call(e.data)
        };
    f && h || (f = function(e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return m[++v] = function() {
            s("function" == typeof e ? e : Function(e), t)
        }, r(v), v
    }, h = function(e) {
        delete m[e]
    }, "process" == n(38)(d) ? r = function(e) {
        d.nextTick(o(_, e, 1))
    } : g && g.now ? r = function(e) {
        g.now(o(_, e, 1))
    } : p ? (a = (i = new p).port2, i.port1.onmessage = I, r = o(a.postMessage, a, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", I, !1)) : r = y in u("script") ? function(e) {
        c.appendChild(u("script"))[y] = function() {
            c.removeChild(this), _.call(e)
        }
    } : function(e) {
        setTimeout(o(_, e, 1), 0)
    }), e.exports = {
        set: f,
        clear: h
    }
}, function(e, t, n) {
    var r = n(17).document;
    e.exports = r && r.documentElement
}, function(e, t, n) {
    "use strict";
    var i = n(52);

    function r(e) {
        var n, r;
        this.promise = new e(function(e, t) {
            if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
            n = e, r = t
        }), this.resolve = i(n), this.reject = i(r)
    }
    e.exports.f = function(e) {
        return new r(e)
    }
}, function(e, t, n) {
    var c = n(54),
        u = n(39);
    e.exports = function(s) {
        return function(e, t) {
            var n, r, i = String(u(e)),
                a = c(t),
                o = i.length;
            return a < 0 || o <= a ? s ? "" : void 0 : (n = i.charCodeAt(a)) < 55296 || 56319 < n || a + 1 === o || (r = i.charCodeAt(a + 1)) < 56320 || 57343 < r ? s ? i.charAt(a) : n : s ? i.slice(a, a + 2) : r - 56320 + (n - 55296 << 10) + 65536
        }
    }
}, function(e, t, n) {
    "use strict";
    var _ = n(67),
        I = n(22),
        A = n(31),
        w = n(34),
        b = n(51),
        E = n(138),
        k = n(70),
        M = n(118),
        T = n(14)("iterator"),
        S = !([].keys && "next" in [].keys()),
        x = "values",
        C = function() {
            return this
        };
    e.exports = function(e, t, n, r, i, a, o) {
        E(n, t, r);
        var s, c, u, l = function(e) {
                if (!S && e in p) return p[e];
                switch (e) {
                    case "keys":
                    case x:
                        return function() {
                            return new n(this, e)
                        }
                }
                return function() {
                    return new n(this, e)
                }
            },
            d = t + " Iterator",
            f = i == x,
            h = !1,
            p = e.prototype,
            g = p[T] || p["@@iterator"] || i && p[i],
            v = g || l(i),
            m = i ? f ? l("entries") : v : void 0,
            y = "Array" == t && p.entries || g;
        if (y && (u = M(y.call(new e))) !== Object.prototype && u.next && (k(u, d, !0), _ || "function" == typeof u[T] || w(u, T, C)), f && g && g.name !== x && (h = !0, v = function() {
                return g.call(this)
            }), _ && !o || !S && !h && p[T] || w(p, T, v), b[t] = v, b[d] = C, i)
            if (s = {
                    values: f ? v : l(x),
                    keys: a ? v : l("keys"),
                    entries: m
                }, o)
                for (c in s) c in p || A(p, c, s[c]);
            else I(I.P + I.F * (S || h), t, s);
        return s
    }
}, function(e, t, n) {
    var r = n(22),
        i = n(19),
        o = n(39),
        s = /"/g,
        a = function(e, t, n, r) {
            var i = String(o(e)),
                a = "<" + t;
            return "" !== n && (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'), a + ">" + i + "</" + t + ">"
        };
    e.exports = function(t, e) {
        var n = {};
        n[t] = e(a), r(r.P + r.F * i(function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || 3 < e.split('"').length
        }), "String", n)
    }
}, function(e, t, n) {
    var a = n(23),
        o = n(148).set;
    e.exports = function(e, t, n) {
        var r, i = t.constructor;
        return i !== n && "function" == typeof i && (r = i.prototype) !== n.prototype && a(r) && o && o(e, r), e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(17),
        i = n(36),
        a = n(38),
        o = n(107),
        l = n(68),
        s = n(19),
        c = n(87).f,
        u = n(95).f,
        d = n(27).f,
        f = n(150).trim,
        h = "Number",
        p = r[h],
        g = p,
        v = p.prototype,
        m = a(n(94)(v)) == h,
        y = "trim" in String.prototype,
        _ = function(e) {
            var t = l(e, !1);
            if ("string" == typeof t && 2 < t.length) {
                var n, r, i, a = (t = y ? t.trim() : f(t, 3)).charCodeAt(0);
                if (43 === a || 45 === a) {
                    if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === a) {
                    switch (t.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2, i = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8, i = 55;
                            break;
                        default:
                            return +t
                    }
                    for (var o, s = t.slice(2), c = 0, u = s.length; c < u; c++)
                        if ((o = s.charCodeAt(c)) < 48 || i < o) return NaN;
                    return parseInt(s, r)
                }
            }
            return +t
        };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
        p = function(e) {
            var t = arguments.length < 1 ? 0 : e,
                n = this;
            return n instanceof p && (m ? s(function() {
                v.valueOf.call(n)
            }) : a(n) != h) ? o(new g(_(t)), n, p) : _(t)
        };
        for (var I, A = n(25) ? c(g) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; A.length > w; w++) i(g, I = A[w]) && !i(p, I) && d(p, I, u(g, I));
        (p.prototype = v).constructor = p, n(31)(r, h, p)
    }
}, function(e, t, n) {
    var r = n(57)("meta"),
        i = n(23),
        a = n(36),
        o = n(27).f,
        s = 0,
        c = Object.isExtensible || function() {
            return !0
        },
        u = !n(19)(function() {
            return c(Object.preventExtensions({}))
        }),
        l = function(e) {
            o(e, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        d = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!a(e, r)) {
                    if (!c(e)) return "F";
                    if (!t) return "E";
                    l(e)
                }
                return e[r].i
            },
            getWeak: function(e, t) {
                if (!a(e, r)) {
                    if (!c(e)) return !0;
                    if (!t) return !1;
                    l(e)
                }
                return e[r].w
            },
            onFreeze: function(e) {
                return u && d.NEED && c(e) && !a(e, r) && l(e), e
            }
        }
}, function(e, t, n) {
    "use strict";

    function r() {
        var n = [];
        return {
            init: function(t) {
                n.forEach(function(e) {
                    return e(t)
                })
            },
            addInit: function(e) {
                n.push(e)
            }
        }
    }
    n.d(t, "a", function() {
        return r
    })
}, function(e, t, n) {
    var r = n(157),
        i = n(158),
        a = n(159);
    e.exports = function(e, t) {
        return r(e) || i(e, t) || a()
    }
}, function(t, e, n) {
    var r = n(26),
        i = n(84),
        a = n(141),
        o = n(142);

    function s(e) {
        var n = "function" == typeof Map ? new Map : void 0;
        return t.exports = s = function(e) {
            if (null === e || !a(e)) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, t)
            }

            function t() {
                return o(e, arguments, r(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), i(t, e)
        }, s(e)
    }
    t.exports = s
}, function(e, t, n) {
    var o = n(149);
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, r, i = o(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
}, function(e, t, n) {
    var r = n(54),
        i = Math.max,
        a = Math.min;
    e.exports = function(e, t) {
        return (e = r(e)) < 0 ? i(e + t, 0) : a(e, t)
    }
}, function(e, t, n) {
    "use strict";
    var f = n(37),
        r = n(22),
        h = n(35),
        p = n(100),
        g = n(89),
        v = n(33),
        m = n(140),
        y = n(90);
    r(r.S + r.F * !n(93)(function(e) {
        Array.from(e)
    }), "Array", {
        from: function(e) {
            var t, n, r, i, a = h(e),
                o = "function" == typeof this ? this : Array,
                s = arguments.length,
                c = 1 < s ? arguments[1] : void 0,
                u = void 0 !== c,
                l = 0,
                d = y(a);
            if (u && (c = f(c, 2 < s ? arguments[2] : void 0, 2)), null == d || o == Array && g(d))
                for (n = new o(t = v(a.length)); l < t; l++) m(n, l, u ? c(a[l], l) : a[l]);
            else
                for (i = d.call(a), n = new o; !(r = i.next()).done; l++) m(n, l, u ? p(i, c, [r.value, l], !0) : r.value);
            return n.length = l, n
        }
    })
}, function(e, t) {
    e.exports = function(e, t, n, r) {
        if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function(e, t, n) {
    var i = n(31);
    e.exports = function(e, t, n) {
        for (var r in t) i(e, r, t[r], n);
        return e
    }
}, function(e, t, n) {
    var r = n(36),
        i = n(35),
        a = n(76)("IE_PROTO"),
        o = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = i(e), r(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
    }
}, function(e, t, n) {
    var _ = n(37),
        I = n(73),
        A = n(35),
        w = n(33),
        r = n(145);
    e.exports = function(d, e) {
        var f = 1 == d,
            h = 2 == d,
            p = 3 == d,
            g = 4 == d,
            v = 6 == d,
            m = 5 == d || v,
            y = e || r;
        return function(e, t, n) {
            for (var r, i, a = A(e), o = I(a), s = _(t, n, 3), c = w(o.length), u = 0, l = f ? y(e, c) : h ? y(e, 0) : void 0; u < c; u++)
                if ((m || u in o) && (i = s(r = o[u], u, a), d))
                    if (f) l[u] = i;
                    else if (i) switch (d) {
                case 3:
                    return !0;
                case 5:
                    return r;
                case 6:
                    return u;
                case 2:
                    l.push(r)
            } else if (g) return !1;
            return v ? -1 : p || g ? g : l
        }
    }
}, function(e, t, n) {
    e.exports = n(160)
}, function(e, t, n) {
    e.exports = n(72)("native-function-to-string", Function.toString)
}, function(e, t, n) {
    var r = n(75),
        i = n(39);
    e.exports = function(e, t, n) {
        if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(i(e))
    }
}, function(e, t, n) {
    var r = n(14)("match");
    e.exports = function(t) {
        var n = /./;
        try {
            "/./" [t](n)
        } catch (e) {
            try {
                return n[r] = !1, !"/./" [t](n)
            } catch (e) {}
        }
        return !0
    }
}, function(e, t, n) {
    "use strict";
    var f = n(60),
        h = n(125),
        p = n(99),
        g = n(35),
        v = n(73),
        i = Object.assign;
    e.exports = !i || n(19)(function() {
        var e = {},
            t = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return e[n] = 7, r.split("").forEach(function(e) {
            t[e] = e
        }), 7 != i({}, e)[n] || Object.keys(i({}, t)).join("") != r
    }) ? function(e, t) {
        for (var n = g(e), r = arguments.length, i = 1, a = h.f, o = p.f; i < r;)
            for (var s, c = v(arguments[i++]), u = a ? f(c).concat(a(c)) : f(c), l = u.length, d = 0; d < l;) o.call(c, s = u[d++]) && (n[s] = c[s]);
        return n
    } : i
}, function(e, t) {
    t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
    var f = n(37),
        h = n(100),
        p = n(89),
        g = n(21),
        v = n(33),
        m = n(90),
        y = {},
        _ = {};
    (t = e.exports = function(e, t, n, r, i) {
        var a, o, s, c, u = i ? function() {
                return e
            } : m(e),
            l = f(n, r, t ? 2 : 1),
            d = 0;
        if ("function" != typeof u) throw TypeError(e + " is not iterable!");
        if (p(u)) {
            for (a = v(e.length); d < a; d++)
                if ((c = t ? l(g(o = e[d])[0], o[1]) : l(e[d])) === y || c === _) return c
        } else
            for (s = u.call(e); !(o = s.next()).done;)
                if ((c = h(s, l, o.value, t)) === y || c === _) return c
    }).BREAK = y, t.RETURN = _
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = void 0 === n;
        switch (t.length) {
            case 0:
                return r ? e() : e.call(n);
            case 1:
                return r ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function(e, t, n) {
    var s = n(17),
        c = n(101).set,
        u = s.MutationObserver || s.WebKitMutationObserver,
        l = s.process,
        d = s.Promise,
        f = "process" == n(38)(l);
    e.exports = function() {
        var n, r, i, e = function() {
            var e, t;
            for (f && (e = l.domain) && e.exit(); n;) {
                t = n.fn, n = n.next;
                try {
                    t()
                } catch (e) {
                    throw n ? i() : r = void 0, e
                }
            }
            r = void 0, e && e.enter()
        };
        if (f) i = function() {
            l.nextTick(e)
        };
        else if (!u || s.navigator && s.navigator.standalone)
            if (d && d.resolve) {
                var t = d.resolve(void 0);
                i = function() {
                    t.then(e)
                }
            } else i = function() {
                c.call(s, e)
            };
        else {
            var a = !0,
                o = document.createTextNode("");
            new u(e).observe(o, {
                characterData: !0
            }), i = function() {
                o.data = a = !a
            }
        }
        return function(e) {
            var t = {
                fn: e,
                next: void 0
            };
            r && (r.next = t), n || (n = t, i()), r = t
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        try {
            return {
                e: !1,
                v: e()
            }
        } catch (e) {
            return {
                e: !0,
                v: e
            }
        }
    }
}, function(e, t, n) {
    var r = n(17).navigator;
    e.exports = r && r.userAgent || ""
}, function(e, t, n) {
    var r = n(21),
        i = n(23),
        a = n(103);
    e.exports = function(e, t) {
        if (r(e), i(t) && t.constructor === e) return t;
        var n = a.f(e);
        return (0, n.resolve)(t), n.promise
    }
}, function(e, t, n) {
    "use strict";
    var r = n(80);
    n(22)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}, function(e, t, n) {
    var r = function() {
            return this || "object" == typeof self && self
        }() || Function("return this")(),
        i = r.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime"),
        a = i && r.regeneratorRuntime;
    if (r.regeneratorRuntime = void 0, e.exports = n(53), i) r.regeneratorRuntime = a;
    else try {
        delete r.regeneratorRuntime
    } catch (e) {
        r.regeneratorRuntime = void 0
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(e, t) {
    e.exports = function(e, t) {
        return {
            value: t,
            done: !!e
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(94),
        i = n(58),
        a = n(70),
        o = {};
    n(34)(o, n(14)("iterator"), function() {
        return this
    }), e.exports = function(e, t, n) {
        e.prototype = r(o, {
            next: i(1, n)
        }), a(e, t + " Iterator")
    }
}, function(e, t, n) {
    var o = n(27),
        s = n(21),
        c = n(60);
    e.exports = n(25) ? Object.defineProperties : function(e, t) {
        s(e);
        for (var n, r = c(t), i = r.length, a = 0; a < i;) o.f(e, n = r[a++], t[n]);
        return e
    }
}, function(e, t, n) {
    "use strict";
    var r = n(27),
        i = n(58);
    e.exports = function(e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : e[t] = n
    }
}, function(e, t) {
    e.exports = function(e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    }
}, function(r, e, t) {
    var a = t(84);

    function i(e, t, n) {
        return ! function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }() ? r.exports = i = function(e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            var i = new(Function.bind.apply(e, r));
            return n && a(i, n.prototype), i
        } : r.exports = i = Reflect.construct, i.apply(null, arguments)
    }
    r.exports = i
}, function(e, t, n) {
    n(25) && "g" != /./g.flags && n(27).f(RegExp.prototype, "flags", {
        configurable: !0,
        get: n(61)
    })
}, function(e, t, n) {
    "use strict";
    n(106)("link", function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    })
}, function(e, t, n) {
    var r = n(146);
    e.exports = function(e, t) {
        return new(r(e))(t)
    }
}, function(e, t, n) {
    var r = n(23),
        i = n(147),
        a = n(14)("species");
    e.exports = function(e) {
        var t;
        return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[a]) && (t = void 0)), void 0 === t ? Array : t
    }
}, function(e, t, n) {
    var r = n(38);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, t, i) {
    var n = i(23),
        r = i(21),
        a = function(e, t) {
            if (r(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, n, r) {
            try {
                (r = i(37)(Function.call, i(95).f(Object.prototype, "__proto__").set, 2))(e, []), n = !(e instanceof Array)
            } catch (e) {
                n = !0
            }
            return function(e, t) {
                return a(e, t), n ? e.__proto__ = t : r(e, t), e
            }
        }({}, !1) : void 0),
        check: a
    }
}, function(e, t) {
    e.exports = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
        return i
    }
}, function(e, t, n) {
    var o = n(22),
        r = n(39),
        s = n(19),
        c = n(151),
        i = "[" + c + "]",
        a = RegExp("^" + i + i + "*"),
        u = RegExp(i + i + "*$"),
        l = function(e, t, n) {
            var r = {},
                i = s(function() {
                    return !!c[e]() || "​" != "​" [e]()
                }),
                a = r[e] = i ? t(d) : c[e];
            n && (r[n] = a), o(o.P + o.F * i, "String", r)
        },
        d = l.trim = function(e, t) {
            return e = String(r(e)), 1 & t && (e = e.replace(a, "")), 2 & t && (e = e.replace(u, "")), e
        };
    e.exports = l
}, function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(e, t, n) {
    "use strict";
    var r = n(19);
    e.exports = function(e, t) {
        return !!e && r(function() {
            t ? e.call(null, function() {}, 1) : e.call(null)
        })
    }
}, function(e, t, n) {
    var r = n(26);
    e.exports = function(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e)););
        return e
    }
}, function(e, t, n) {
    "use strict";
    n(106)("anchor", function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    })
}, function(e, t, n) {
    var r = n(23),
        i = n(109).onFreeze;
    n(82)("freeze", function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function(e, t, n) {
    var r = n(23),
        i = n(109).onFreeze;
    n(82)("seal", function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    })
}, function(e, t) {
    e.exports = function(e) {
        if (Array.isArray(e)) return e
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var n = [],
            r = !0,
            i = !1,
            a = void 0;
        try {
            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
        } catch (e) {
            i = !0, a = e
        } finally {
            try {
                r || null == s.return || s.return()
            } finally {
                if (i) throw a
            }
        }
        return n
    }
}, function(e, t) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(e, t, u) {
    "use strict";
    u.r(t);
    var n = u(9),
        Ie = u.n(n),
        r = (u(44), u(46), u(13), u(18), u(47), u(10)),
        Ae = u.n(r),
        i = (u(53), u(15)),
        we = u.n(i),
        a = u(2),
        z = u.n(a),
        o = u(3),
        v = u.n(o),
        g = u(11),
        be = u(1),
        Ee = u(4),
        s = {
            click_cta: 1,
            page_flip_left: 2,
            page_flip_right: 3,
            scroll: 4,
            mute: 5,
            unmute: 6,
            expand: 7,
            collapse: 8,
            click_paused: 9,
            transition_up: 10,
            transition_down: 11,
            direction_change: 12,
            reveal_trigger: 13
        },
        c = 2,
        l = 3,
        ke = function() {
            function d(e, t) {
                var n = e.environment,
                    r = e.pageInfo,
                    i = e.rev,
                    a = t.creative,
                    o = t.lifecycleManager,
                    s = t.thirdPartyAnalytics,
                    c = t.firePix,
                    u = t.errorHandler,
                    l = t.util;
                z()(this, d), this.pageInfo = r, this.environment = n, this.rev = i, this.util = l, this.creative = a, this.lifecycleManager = o, this.thirdPartyAnalytics = s, this.firePix = c, this.fireEB = c.fireEB.bind(c), this.errorHandler = u, this.viewedCreativeElements = {}, this.hasFired = {
                    render: !1,
                    play: !1,
                    playAttempt: !1
                }, this.loadCreativeParams()
            }
            return v()(d, [{
                key: "loadCreativeParams",
                value: function() {
                    this.thirdPartyAnalytics.billOrWait(), this.creativeParams = this.creative.params.additional_data || {}, this.creativeParams.caid = this.creative.params.asset_id, this.creativeParams.unid = 0, this.rParams = this.util.objMerge(this.creativeParams, this.util.URIEncodeFields(this.pageInfo.get()), {
                        rr: "creative",
                        rev: this.rev,
                        fid: this.creative.params.format_id || 0,
                        rb: this.creative.params.render_options_bm || 0,
                        g: this.creative.params.ghost ? 1 : 0
                    });
                    var e = this.environment.formats;
                    this.creative.params.format_id === e.video && (this.videoLengthMS = 1e3 * this.creative.params.length_seconds)
                }
            }, {
                key: "render",
                value: function() {
                    this.hasFired.render || (this.fireEB(g.g, this.rParams), this.thirdParty(), this.hasFired.render = !0, this.lifecycleManager.setPhaseAfterRender(this.creative.isAutoplay()))
                }
            }, {
                key: "viewable",
                value: function() {
                    this.fireEB(g.n, this.getEngagementParams()), this.thirdPartyAnalytics.fireViewable()
                }
            }, {
                key: "onePxViewable",
                value: function() {
                    this.fireEB(g.m, this.getEngagementParams()), this.thirdPartyAnalytics.fireOnePxViewable()
                }
            }, {
                key: "elementViewable",
                value: function(e, t) {
                    this.viewedCreativeElements[e] || (this.fireEB(g.p, this.getEngagementParams(e, t)), this.viewedCreativeElements[e] = !0)
                }
            }, {
                key: "twoSecondViewable",
                value: function() {
                    this.fireEB(g.o)
                }
            }, {
                key: "playAttempt",
                value: function() {
                    this.hasFired.playAttempt || (this.hasFired.playAttempt = !0, this.fireEB(g.l))
                }
            }, {
                key: "getEngagementParams",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = e || this.creative.params.image_id || 0;
                    return Ie()({}, this.creativeParams, {
                        cepos: t,
                        ceid: n
                    })
                }
            }, {
                key: "mouseover",
                value: function(e, t) {
                    this.fireEB(g.e, this.getEngagementParams(e, t))
                }
            }, {
                key: "click",
                value: function(e, t) {
                    this.fireEB(g.a, this.getEngagementParams(e, t)), this.thirdPartyAnalytics.fireClick(t), this.fireEB(g.j, {
                        add: 3006
                    })
                }
            }, {
                key: "appendThirdPartyJs",
                value: function(e, t) {
                    this.creative.params.ghost || this.thirdPartyAnalytics.appendJsOnPassthru(e, t)
                }
            }, {
                key: "duration",
                value: function(e, t, n, r) {
                    var i = this.getVideoLength(t, n);
                    if (!isNaN(e) && i.value) {
                        var a = this.util.objMerge(this.creativeParams, {
                            duration: e,
                            video_length: i.value,
                            vlt: i.type
                        });
                        0 < e && !this.hasFired.play && (this.thirdPartyAnalytics.firePlay(), this.hasFired.play = !0, a.start = 1, this.hasFired.playAttempt || (this.errorHandler.fireError("Video start evd logged before play attempt", Ee.a.ERROR_LEVELS.WARNING), this.playAttempt()), this.lifecycleManager.setPhaseAfterVideoStart()), Object(be.j)(r) && .5 <= r && (a.iv = 1), this.fireEB(g.k, a)
                    }
                }
            }, {
                key: "getVideoLength",
                value: function(e, t) {
                    var n, r;
                    return r = e && 0 < e ? (n = e, c) : (n = t, l), {
                        value: n,
                        type: r
                    }
                }
            }, {
                key: "play",
                value: function() {
                    this.fireEB(g.j, {
                        add: 3007
                    })
                }
            }, {
                key: "thirdParty",
                value: function() {
                    this.creative.params.ghost || this.thirdPartyAnalytics.fireImpression()
                }
            }, {
                key: "fireEEE",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.fireEB(g.d, {
                        eid: s[e],
                        unid: this.creativeParams.unid || 0,
                        ev: t
                    })
                }
            }], [{
                key: "sendAdReadySignal",
                value: function() {
                    if ((t = document.getElementById("tl-app")) && t.classList.contains("ad-ready-signal")) {
                        var e = document.createElement("IFRAME");
                        e.setAttribute("src", "js-3lift:ad_ready"), document.documentElement.appendChild(e), e.parentNode.removeChild(e)
                    }
                    var t
                }
            }]), d
        }();
    u(50);
    var Me = function() {
            function f(e, t) {
                var n = e.placement,
                    r = e.environment,
                    i = e.pageInfo,
                    a = e.document,
                    o = e.specifiedTacticId,
                    s = e.isAdserving,
                    c = e.rev,
                    u = e.gdprVendorConsentData,
                    l = t.util,
                    d = t.urlParams;
                z()(this, f), this.placement = n, this.environment = r, this.urlParams = d, this.pageInfo = i, this.document = a, this.util = l, this.isAdserving = s, this.rev = c, this.specifiedTacticId = o, this.gdprVendorConsentData = u
            }
            return v()(f, [{
                key: "buildAuctionPath",
                value: function() {
                    var e = !(!this.placement.customOptions.viewabilityEnabled || this.isAdserving),
                        t = this.getAuctionHostName(this.isAdserving && this.specifiedTacticId, e);
                    return this.buildDefaultAuctionPath(t)
                }
            }, {
                key: "getAuctionHostName",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        t = 1 < arguments.length ? arguments[1] : void 0,
                        n = this.placement.customOptions,
                        r = n.uniqueCreatives,
                        i = n.uniqueBrands,
                        a = this.environment,
                        o = a.tlxStagingRate,
                        s = a.tlxHost;
                    return o && Math.random() < o && (s = "staging-".concat(s)), this.urlParams.forceBidUrl ? Object(be.a)("//".concat(this.environment.qaHost, "/qa")) : this.urlParams.tlBidUrl ? Object(be.a)("//".concat(this.urlParams.tlBidUrl)) : e ? Object(be.a)("//".concat(s, "/web/adserving")) : t || i || r ? Object(be.a)("//".concat(s, "/vbas/auction")) : Object(be.a)("//".concat(s, "/web/auction"))
                }
            }, {
                key: "buildDefaultAuctionPath",
                value: function(e) {
                    var t = this.placement.customOptions.numCreatives,
                        n = void 0 === t ? 1 : t,
                        r = ["inv_code=".concat(encodeURIComponent(this.placement.invCode)), "referrer=".concat(encodeURIComponent(this.pageInfo.get().ref)), "rev=".concat(encodeURIComponent(this.rev)), "fe=".concat(encodeURIComponent(this.util.isFlashEnabled() ? "1" : "0")), "ft=".concat(encodeURIComponent(this.pageInfo.getFrameType())), "cb=".concat(Object(be.q)(10))];
                    return this.isAdserving && this.specifiedTacticId && (r.push("tid=".concat(encodeURIComponent(this.specifiedTacticId))), r.push("n=".concat(encodeURIComponent(n.toString())))), this.placement.demandEnabled || this.urlParams.debugFlag || r.push("dd=1"), this.needsAqp() && r.push(f.getAqpParam()), this.gdprVendorConsentData && (r.push("gdpr=".concat(encodeURIComponent(this.gdprVendorConsentData.gdprApplies))), null !== this.gdprVendorConsentData.consentData && r.push("cmp_cs=".concat(encodeURIComponent(this.gdprVendorConsentData.consentData)))), "".concat(e, "?").concat(r.join("&"))
                }
            }, {
                key: "needsAqp",
                value: function() {
                    return -1 < this.placement.invCode.indexOf("msn_infeed_") && 0 === this.document.getElementsByClassName("xnetvidplayer").length
                }
            }], [{
                key: "getAqpParam",
                value: function() {
                    return "aqp=".concat(encodeURIComponent(JSON.stringify({
                        _id: {
                            $oid: "0"
                        },
                        format_target: {
                            action: "include",
                            items: [{
                                id: 8
                            }]
                        }
                    })))
                }
            }]), f
        }(),
        Te = u(7),
        Se = function() {
            function _(e, t) {
                var n = e.docInfo,
                    r = e.adRendered,
                    i = e.browserInfo,
                    a = e.placement,
                    o = e.pageInfo,
                    s = e.hook,
                    c = e.isAdserving,
                    u = t.errorHandler,
                    l = t.serveDefault,
                    d = t.firePix,
                    f = t.userSync,
                    h = t.util,
                    p = t.eventController;
                z()(this, _), this.docInfo = n, this.util = h, this.hook = s, this.eventController = p, this.adRendered = r, this.placement = a, this.pageInfo = o, this.userSync = f, this.firePix = d, this.serveDefault = l, this.browserInfo = i, this.errorHandler = u, this.isAdserving = c, this.auctionIFRAME = null;
                var g = this.docInfo.document,
                    v = this.util.iframeHide(g.createElement("IFRAME"));
                if (!g.body) {
                    var m = g.createElement("body");
                    g.documentElement.appendChild(m)
                }
                g.body.appendChild(v);
                var y = v.contentWindow.document;
                y.open(), y.write("<html><head></head><body></body></html>"), y.close(), this.auctionIFRAME = v
            }
            return v()(_, [{
                key: "onError",
                value: function(e, t) {
                    this.errorHandler && this.errorHandler.fireError(e, t)
                }
            }, {
                key: "fireAuction",
                value: function(e) {
                    var t = this,
                        n = this.auctionIFRAME;
                    try {
                        var r = n.contentWindow.document.createElement("SCRIPT");
                        r.src = e, n.contentWindow.document.body.appendChild(r)
                    } catch (e) {
                        this.onError(e, Ee.a.ERROR_LEVELS.ERROR)
                    }
                    var i = this.placement.timeoutDuration,
                        a = this.util.timeoutWrap(function() {
                            var e = {
                                adRendered: t.adRendered,
                                defaultCode: t.placement.defaultCode,
                                docInfo: t.docInfo,
                                firePix: t.firePix,
                                hook: t.hook,
                                pageInfo: t.pageInfo,
                                userSync: t.userSync
                            };
                            t.serveDefault.serve(e, "auction_timeout")
                        }, i);
                    this.eventController.once(Te.b, function() {
                        clearTimeout(a)
                    })
                }
            }, {
                key: "run",
                value: function(o) {
                    var s = this;
                    return this.criteoGuard = !1, new Promise(function(r) {
                        var e = function() {
                            s.criteoGuard || (s.criteoGuard = !0, r(s.fireAuction(o)))
                        };
                        if (s.browserInfo.isSafari && !s.isAdserving) {
                            var t = s.auctionIFRAME.contentWindow,
                                n = t.document,
                                i = "tl_criteo_rtus";
                            t[i] = function(e) {
                                if (!s.criteoGuard) {
                                    s.criteoGuard = !0;
                                    var t = s.rtusTimeout;
                                    if (t && (s.docInfo.window.clearTimeout(t), s.rtusTimeout = !1), e && "OK" === e.status) {
                                        var n = encodeURIComponent(e.userid);
                                        r(s.fireAuction("".concat(o, "&criteo_id=").concat(n)))
                                    } else r(s.fireAuction(o))
                                }
                            };
                            var a = n.createElement("SCRIPT");
                            n.body.appendChild(a), a.onerror = e, a.src = "//gum.criteo.com/sync?c=157&r=2&j=".concat(i), s.rtusTimeout = setTimeout(e, 150)
                        } else r(s.fireAuction(o))
                    })
                }
            }]), _
        }(),
        d = (u(43), ["Dummy", "MSIE", "Firefox", "Chrome", "Safari", "Opera", "iPhone", "BlackBerry", "Android"]),
        f = ["Dummy", "Windows Phone OS", "Windows", "Android", "Linux", "iPhone", "iPod", "iPad", "Mac", "BlackBerry"],
        xe = function() {
            function t(e) {
                z()(this, t), this.userAgent = e
            }
            return v()(t, [{
                key: "isMobile",
                value: function() {
                    return this.userAgent.match(/blackberry|ipod|iphone|ipad|android/i)
                }
            }, {
                key: "isIpad",
                value: function() {
                    return this.userAgent.match(/ipad/i)
                }
            }, {
                key: "isIE",
                value: function() {
                    return /msie|trident\//i.test(this.userAgent)
                }
            }, {
                key: "isEdge",
                value: function() {
                    return /Edg/.test(this.userAgent)
                }
            }, {
                key: "checkIsMicrosoftBrowser",
                value: function() {
                    return this.isIE() || this.isEdge()
                }
            }, {
                key: "checkIsFacebook",
                value: function() {
                    return -1 < this.userAgent.indexOf("FBAV/")
                }
            }, {
                key: "getBrowserInfo",
                value: function() {
                    var e = function(e) {
                            if (!e) return {
                                b: "undisclosed",
                                o: "undisclosed"
                            };
                            var t, n, r = ["Dummy", "MSIE 7.0", "MSIE 8.0", "MSIE 9.0", "MSIE 10.0"],
                                i = {};
                            for (t = 0, n = d.length; t < n; t++)
                                if (e.match(d[t])) {
                                    i.b = t;
                                    break
                                }
                            if (1 === i.b)
                                for (t = 0, n = r.length; t < n; t++)
                                    if (e.match(r[t])) {
                                        i.b = 8 + t;
                                        break
                                    }
                            for (e.match("rv:11.0") && (i.b = 13), i.b && 4 === i.b && (e.match("Android") && e.match("Linux") && (i.b = 8), e.match("BlackBerry") && (i.b = 7)), t = 0, n = f.length; t < n; t++)
                                if (e.match(f[t])) {
                                    i.o = t;
                                    break
                                }
                            return i
                        }(this.userAgent),
                        t = this.isMobile(),
                        n = this.isIpad();
                    return {
                        browserName: d[e.b],
                        isMobile: t,
                        isSafari: 4 == +e.b,
                        isIpad: n,
                        isMicrosoftBrowser: this.checkIsMicrosoftBrowser(),
                        isIE: this.isIE(),
                        isSmallScreen: t || n,
                        isFacebook: this.checkIsFacebook()
                    }
                }
            }]), t
        }(),
        h = u(0),
        p = u.n(h),
        m = u(29),
        y = u.n(m),
        _ = function(t) {
            return "object" === y()(t) && I.every(function(e) {
                return y()(t[e.field]) === e.type && t[e.field].length >= e.minLength
            })
        },
        I = [{
            field: "heading",
            type: "string",
            minLength: 1
        }, {
            field: "caption",
            type: "string",
            minLength: 1
        }, {
            field: "image_url",
            type: "string",
            minLength: 1
        }, {
            field: "clickthrough_url",
            type: "string",
            minLength: 1
        }];
    var Ce = u(5),
        A = (u(12), u(20), u(24), function() {
            function t(e) {
                z()(this, t), this.creativeComponents = e.ad.creativeComponents
            }
            return v()(t, [{
                key: "getAllComponents",
                value: function() {
                    var e = this;
                    return {
                        getHeading: function() {
                            return e.getFirst({
                                assetType: "text",
                                componentType: "heading"
                            })
                        },
                        getCaption: function() {
                            return e.getFirst({
                                assetType: "text",
                                componentType: "caption"
                            })
                        },
                        getImageUrl: function() {
                            return e.getFirst({
                                assetType: "image",
                                componentType: "baseImage"
                            })
                        },
                        getLogoUrl: function() {
                            return e.getFirst({
                                assetType: "image",
                                componentType: "brandLogo"
                            })
                        },
                        getClickthroughUrl: function() {
                            return e.getFirst({
                                assetType: "URI",
                                componentType: "clickThroughURL"
                            })
                        },
                        getJsTrackers: function() {
                            return e.getAll({
                                assetType: "javascript"
                            })
                        },
                        getImpPixels: function() {
                            return e.getAll({
                                assetType: "image",
                                componentType: "impressionTracker"
                            })
                        },
                        getClickPixels: function() {
                            return e.getAll({
                                assetType: "image",
                                componentType: "clickTracker"
                            })
                        },
                        getViewPixels: function() {
                            return e.getAll({
                                assetType: "image",
                                componentType: "viewabilityTracker"
                            })
                        }
                    }
                }
            }, {
                key: "getFirst",
                value: function(e) {
                    return this.getAll(e)[0]
                }
            }, {
                key: "getAll",
                value: function(e) {
                    return this.creativeComponents.filter(this.byObjFields.bind(null, e)).map(this.componentToSource)
                }
            }, {
                key: "byObjFields",
                value: function(t, n) {
                    return Object.keys(t).every(function(e) {
                        return n[e] === t[e]
                    })
                }
            }, {
                key: "componentToSource",
                value: function(e) {
                    return e.assets[0].source
                }
            }]), t
        }()),
        w = (u(144), function() {
            function t(e) {
                z()(this, t), this.assets = e.assets, this.eventTrackers = e.eventtrackers
            }
            return v()(t, [{
                key: "getAllComponents",
                value: function() {
                    var e = this;
                    return {
                        getHeading: function() {
                            return e.assets.filter(function(e) {
                                return e.title && e.title.text
                            })[0].title.text
                        },
                        getCaption: function() {
                            return e.assets.filter(function(e) {
                                return e.data && 2 === e.data.type
                            })[0].data.value
                        },
                        getImageUrl: function() {
                            return e.assets.filter(function(e) {
                                return e.img && 3 === e.img.type
                            })[0].img.url
                        },
                        getLogoUrl: function() {
                            return e.assets.filter(function(e) {
                                return e.img && 1 === e.img.type
                            })[0].img.url
                        },
                        getClickthroughUrl: function() {
                            return e.assets.filter(function(e) {
                                return e.link && e.link.url
                            })[0].link.url
                        },
                        getJsTrackers: function() {
                            return e.eventTrackers.filter(function(e) {
                                return 2 === e.method
                            }).map(function(e) {
                                return e.url
                            })
                        },
                        getImpPixels: function() {
                            return e.eventTrackers.filter(function(e) {
                                return 1 === e.method && 1 === e.event
                            }).map(function(e) {
                                return e.url
                            })
                        },
                        getViewPixels: function() {
                            return e.eventTrackers.filter(function(e) {
                                return 1 === e.method && [2, 3, 4].includes(e.event)
                            }).map(function(e) {
                                return e.url
                            })
                        },
                        getClickPixels: function() {
                            return []
                        }
                    }
                }
            }]), t
        }()),
        b = function(e, t) {
            if (Ee.a.DCO_PROTOCOLS.DYNAMIC_CONTENT === t) return new A(e);
            if (Ee.a.DCO_PROTOCOLS.NATIVE_ADS !== t) throw new Ce.a("invalid dco_protocol");
            return new w(e)
        };
    var E = function(e, t) {
        var n = b(e, t).getAllComponents(),
            r = {};
        try {
            if (r.asset_id = -1, r.image_id = -1, r.img_server_params = "", r.heading = n.getHeading(), r.caption = n.getCaption(), r.image_url = n.getImageUrl(), r.logo_image_url = n.getLogoUrl(), r.clickthrough_url = n.getClickthroughUrl(), r.impression_pixels = n.getImpPixels(), r.clickthrough_pixels = n.getClickPixels(), r.viewability_pixels = n.getViewPixels(), r.js_trackers = n.getJsTrackers(), !_(r)) throw new Ce.a("invalid asset")
        } catch (e) {
            throw new Ce.a("translation error. ".concat(e.message || e))
        }
        return r
    };
    var k = 0,
        M = 1,
        T = ["impression_pixels", "clickthrough_pixels", "viewability_pixels", "js_trackers"],
        Le = function() {
            function s(e, t) {
                var n = this,
                    r = e.assets,
                    i = e.settings,
                    a = e.frame,
                    o = t.errorHandler;
                z()(this, s), p()(this, "mapPayloadToAssetAndMergeTrackers", function(e) {
                    return E(e, n.settings.dco_protocol)
                }), p()(this, "errAndFallBackOrDefault", function(e) {
                    var t = e.toString();
                    if (_(n.assets && n.assets[0])) return n.errorHandler.fireError(t, Ee.a.ERROR_LEVELS.WARNING, {
                        dco_tag_url: n.settings.dco_tag_url
                    }), {
                        asset: n.assets[0],
                        isFallback: M
                    };
                    throw n.errorHandler.fireError(t, Ee.a.ERROR_LEVELS.ERROR, {
                        dco_tag_url: n.settings.dco_tag_url
                    }), new Ce.a("getOptimizedAsset failed")
                }), this.assets = r, this.frame = a, this.settings = i, this.errorHandler = o
            }
            return v()(s, [{
                key: "getOptimizedAsset",
                value: function() {
                    var t = this;
                    return this.fetchDcoPayload().then(function(e) {
                        return t.mapPayloadToAssetAndMergeTrackers(e)
                    }).then(function(e) {
                        return t._mergeOrRemoveTrackerFields(e)
                    }).catch(function(e) {
                        return t.errAndFallBackOrDefault(e)
                    })
                }
            }, {
                key: "fetchDcoPayload",
                value: function() {
                    var n = this,
                        r = this.frame.contentWindow,
                        i = r.document,
                        a = i.createElement("script");
                    return new Promise(function(e, t) {
                        r.doDco = e, r.onerror = function(e) {
                            return t(new Ce.a("dco jsonp error: ".concat(e)))
                        }, a.onerror = function() {
                            return t(new Ce.a("dco script failed to load"))
                        }, setTimeout(function() {
                            t(new Ce.a("dco timeout"))
                        }, 1e4), a.src = n.settings.dco_tag_url, i.body.appendChild(a)
                    })
                }
            }, {
                key: "_mergeOrRemoveTrackerFields",
                value: function(e) {
                    var r = this,
                        i = Ie()({}, e);
                    return T.forEach(function(e) {
                        var t = Array.isArray(i[e]),
                            n = Array.isArray(r.settings[e]);
                        t && n ? (i[e] = i[e].concat(r.settings[e]), delete r.settings[e]) : n && delete i[e]
                    }), {
                        asset: i,
                        isFallback: k
                    }
                }
            }]), s
        }(),
        De = (u(40), u(30), function() {
            function s(e, t) {
                var i = this,
                    n = e.environment,
                    r = e.bundleStartTime,
                    a = t.eventController,
                    o = t.urlParams;
                z()(this, s), p()(this, "auctionId", "none"), p()(this, "formatName", "none"), p()(this, "_log", function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    console.log(i._makeLogString(e, n))
                }), this.environment = n, this.bundleStartTime = r, this.eventController = a, o.debugLog && this._setupListeners()
            }
            return v()(s, [{
                key: "_setupListeners",
                value: function() {
                    var n = this;
                    this.eventController.on(Te.n, this._log), this.eventController.on(Te.c, function(e) {
                        var t = e.payload;
                        n.auctionId = t.settings.additional_data.aid, n.formatName = n._getFormatName(t.settings.format_id)
                    })
                }
            }, {
                key: "_getFormatName",
                value: function(t) {
                    var n = this;
                    return Object.keys(this.environment.formats).find(function(e) {
                        return n.environment.formats[e] === t
                    })
                }
            }, {
                key: "_makeLogString",
                value: function(e, t) {
                    return "[".concat(this.formatName, "]") + "[".concat(this.auctionId, "]") + "[".concat(this._getTimeSinceStartMS(), "ms]") + "[".concat(e, "]") + "".concat(0 < t.length ? JSON.stringify(t) : "")
                }
            }, {
                key: "_getTimeSinceStartMS",
                value: function() {
                    return Date.now() - this.bundleStartTime
                }
            }, {
                key: "warn",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    console.warn("tl: ".concat(e.stack || e), Ie()({}, n))
                }
            }]), s
        }()),
        Oe = function e(t) {
            var n = t.scriptWindow;
            z()(this, e);
            var r = {
                window: n,
                document: n.document
            };
            try {
                Object.assign(this, Ie()({}, r, {
                    topWindow: top,
                    topDocument: top.document,
                    canAccessTop: !0
                }))
            } catch (e) {
                Object.assign(this, Ie()({}, r, {
                    topWindow: window,
                    topDocument: window.document,
                    canAccessTop: !1
                }))
            }
        },
        Ne = function() {
            function h(e) {
                var t = e.adserverHostName,
                    n = e.bundleRoot,
                    r = e.cookieDomain,
                    i = e.dynamicPath,
                    a = e.ebPath,
                    o = e.formats,
                    s = e.numUserSyncPixels,
                    c = e.qaHost,
                    u = e.renderOptionsMap,
                    l = e.tlImageAddr,
                    d = e.tlxHost,
                    f = e.ttjHostName;
                z()(this, h), this._adserverHostName = t, this._bundleRoot = n, this._cookieDomain = r, this._dynamicPath = i, this._ebPath = a, this._formats = o, this._numUserSyncPixels = s, this._qaHost = c, this._renderOptionsMap = u, this._tlImageAddr = l, this._tlxHost = d, this._ttjHostName = f
            }
            return v()(h, [{
                key: "adserverHostName",
                get: function() {
                    return this._adserverHostName
                }
            }, {
                key: "bundleRoot",
                get: function() {
                    return this._bundleRoot
                }
            }, {
                key: "cookieDomain",
                get: function() {
                    return this._cookieDomain
                }
            }, {
                key: "dynamicPath",
                get: function() {
                    return this._dynamicPath
                }
            }, {
                key: "ebPath",
                get: function() {
                    return this._ebPath
                }
            }, {
                key: "formats",
                get: function() {
                    return this._formats
                }
            }, {
                key: "numUserSyncPixels",
                get: function() {
                    return this._numUserSyncPixels
                }
            }, {
                key: "qaHost",
                get: function() {
                    return this._qaHost
                }
            }, {
                key: "renderOptionsMap",
                get: function() {
                    return this._renderOptionsMap
                }
            }, {
                key: "tlImageAddr",
                get: function() {
                    return this._tlImageAddr
                }
            }, {
                key: "tlxHost",
                get: function() {
                    return this._tlxHost
                }
            }, {
                key: "ttjHostName",
                get: function() {
                    return this._ttjHostName
                }
            }]), h
        }(),
        je = function() {
            function a(e) {
                var t = e.debugMessenger,
                    n = e.firePix,
                    r = e.lifecycleManager,
                    i = e.urlParams;
                z()(this, a), this.debugMessenger = t, this.firePix = n, this.lifecycleManager = r, this.urlParams = i
            }
            return v()(a, [{
                key: "fireError",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Ee.a.ERROR_LEVELS.UNKNOWN,
                        n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                        r = this.lifecycleManager.getPhase();
                    this.urlParams.debugFlag ? this.debugMessenger.warn(e, r, t, n) : this._logEbError(e instanceof Error ? e.message : e, r, t, n)
                }
            }, {
                key: "decorate",
                value: function(r) {
                    var i = !1,
                        a = this;
                    return function() {
                        try {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return r.apply(this, t)
                        } catch (e) {
                            i || (i = !0, a.fireError(e, e instanceof Ce.a ? e.level : void 0))
                        }
                        return null
                    }
                }
            }, {
                key: "_logEbError",
                value: function(e, t, n, r) {
                    return this.firePix.fireEB(g.h, {
                        e: e,
                        block: t,
                        lvl: n,
                        dc: r ? JSON.stringify(r) : ""
                    }), this
                }
            }]), a
        }(),
        S = u(16),
        x = u.n(S),
        Re = function() {
            function e() {
                z()(this, e), p()(this, "events", {})
            }
            return v()(e, [{
                key: "on",
                value: function(e, t) {
                    return this._subscribe(e, t, !1)
                }
            }, {
                key: "once",
                value: function(e, t) {
                    return this._subscribe(e, t, !0)
                }
            }, {
                key: "_subscribe",
                value: function(e, t, n) {
                    var r = this;
                    return Object.prototype.hasOwnProperty.call(this.events, e) || (this.events[e] = []), this.events[e] = [].concat(x()(this.events[e]), [{
                            eventHandler: t,
                            once: n
                        }]),
                        function() {
                            return r.off(e, t)
                        }
                }
            }, {
                key: "off",
                value: function(e, t) {
                    if (this.events[e] && 0 !== this.events[e].length) {
                        var n = this.events[e].filter(function(e) {
                            return e.eventHandler !== t
                        });
                        this.events[e] = x()(n), 0 === this.events[e].length && (this.events = Ie()({}, this.events, {
                            eventName: []
                        }))
                    }
                }
            }, {
                key: "publish",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    this.publishEvent.apply(this, [e].concat(n)), this.publishLog.apply(this, [e].concat(n))
                }
            }, {
                key: "publishEvent",
                value: function(t) {
                    for (var n = this, e = arguments.length, r = new Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) r[i - 1] = arguments[i];
                    this.events[t] && 0 < this.events[t].length && this.events[t].forEach(function(e) {
                        e.eventHandler.apply(e, r), e.once && n.off(t, e.eventHandler)
                    })
                }
            }, {
                key: "publishLog",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    this.publishEvent.apply(this, [Te.n, e].concat(n))
                }
            }, {
                key: "destroy",
                value: function() {
                    this.events = {}
                }
            }]), e
        }(),
        Pe = function() {
            function l(e, t) {
                var n = e.docInfo,
                    r = e.rev,
                    i = e.placement,
                    a = void 0 === i ? {} : i,
                    o = e.debugFlag,
                    s = e.ebPath,
                    c = void 0 === s ? "eb2.3lift.com" : s,
                    u = t.eventController;
                z()(this, l), this.docInfo = n, this.rev = r, this.placement = a, this.debugFlag = o, this.ebPath = c, this.eventController = u, this.auctionId = null, this._setupListeners()
            }
            return v()(l, [{
                key: "fire",
                value: function(e, t, n) {
                    var r = this;
                    if (e) {
                        var i = this.docInfo.topDocument.createElement("IMG");
                        "function" == typeof t && (i.onload = t), n || (i.onerror = function() {
                            r.debugFlag ? console.error("[TL] Bad tracking pixel:", e) : r.fireEB(g.c, {
                                eid: 10
                            })
                        }), i.src = e
                    }
                }
            }, {
                key: "fireEB",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = 2 < arguments.length ? arguments[2] : void 0,
                        r = {
                            inv_code: this.placement.invCode,
                            aid: this.auctionId,
                            rev_hash: this.rev
                        },
                        i = Object(be.k)(this.ebPath, e, Ie()({}, r, t));
                    this.fire(i, n, !0)
                }
            }, {
                key: "fireDyn",
                value: function(e) {
                    var t = {
                            long1: null,
                            long2: null,
                            long3: null,
                            string1: this.auctionId,
                            string2: null,
                            string3: null
                        },
                        n = Object.assign({}, t, e),
                        r = Object(be.k)(this.ebPath, "dyn", n);
                    this.fire(r, !1, !0)
                }
            }, {
                key: "setAuctionId",
                value: function(e) {
                    return this.auctionId = e, this
                }
            }, {
                key: "getAuctionId",
                value: function() {
                    return this.auctionId
                }
            }, {
                key: "_setupListeners",
                value: function() {
                    var i = this;
                    this.eventController.on(Te.c, function(e) {
                        var t = e.payload,
                            n = void 0 === t ? null : t;
                        if (!n) throw new Ce.a("Missing auction response payload");
                        var r = n.settings.additional_data.aid;
                        i.setAuctionId(r)
                    })
                }
            }]), l
        }(),
        Ve = function() {
            function a(e, t) {
                var n = e.contentWindow,
                    r = t.util,
                    i = t.errorDecorator;
                z()(this, a), this.util = r, this.window = n, this.decorator = i, this.thirdPartyMessage = !1
            }
            return v()(a, [{
                key: "handleRocketfuel",
                value: function(e) {
                    var t = this.window.document.createElement("iframe");
                    this.util.iframeHide(t), t.src = "about:blank", this.window.document.body.appendChild(t);
                    var n = t.contentWindow.document;
                    return n.open(), n.write(e), n.close(), t
                }
            }, {
                key: "newWriter",
                value: function(e) {
                    var t, n, r, i, a, o, s, c, u;
                    try {
                        if (0 < e.indexOf("rfitag")) return void this.handleRocketfuel(e);
                        if ((o = this.window.document.createElement("div")).style.display = "none", this.window.document.body.appendChild(o), o.innerHTML = e, 0 === (u = (s = o.getElementsByTagName("script")).length)) return;
                        for (a = this.window.document.createElement("iframe"), this.util.iframeHide(a), a.src = "about:blank", a.className = "tl_ext_iframe", this.window.document.body.appendChild(a), (n = a.contentWindow.document).open(), n.write('<script>window.addEventListener("message",function(msg){window.parent.postMessage(msg.data,"*");});<\/script>'), c = 0; c < u; c++) s[c].text.length ? n.write("".concat("<script>").concat(s[c].text, "</scr") + "ipt>") : (r = (t = Object(be.p)(s[c].src)).queryKey, "ad.turn.com" == t.host && r.cid && (i = r.cid, a.setAttribute("data-ext-creative-id", i)), n.write("".concat('<script type="text/javascript" src="').concat(s[c].src, '"></sc') + "ript>"));
                        n.close()
                    } catch (e) {
                        throw new Ce.a("newWriter failed: ".concat(e.message))
                    }
                }
            }, {
                key: "onmessage",
                value: function(e) {
                    if (e && e.data && e.data.match && (e.data.match("get_3p") || e.data.match("get_ext") || e.data.match("get_unit_2"))) {
                        if (this.thirdPartyMessage) return;
                        this.thirdPartyMessage = !0;
                        var t = this.window.document.createElement("SCRIPT");
                        t.textContent = e.data, this.window.document.body.appendChild(t)
                    }
                }
            }, {
                key: "setListeners",
                value: function() {
                    this.window.addEventListener("message", this.decorator(this.onmessage)), this.window.document.write = function() {}
                }
            }]), a
        }(),
        Fe = function() {
            function g(e, t) {
                var n = e.contentWindow,
                    r = e.docInfo,
                    i = e.hook,
                    a = e.pageInfo,
                    o = e.placement,
                    s = e.uniquenessController,
                    c = t.errorDecorator,
                    u = t.eventController,
                    l = t.firePix,
                    d = t.serveDefault,
                    f = t.userSync,
                    h = t.util,
                    p = t.viewabilityController;
                z()(this, g), this.adRendered = !1, this.analytics = null, this.defaultServer = d, this.docInfo = r, this.errorDecorator = c, this.eventController = u, this.firePix = l, this.hook = i, this.isUnitGenerated = !1, this.pageInfo = a, this.placement = o, this.uniquenessController = s, this.userSync = f, this.util = h, this.auctionIFrameWindow = n, this.viewabilityController = p
            }
            return v()(g, [{
                key: "getCreativeJSON2",
                value: function(e, t) {
                    this.passthru(e.pixel, t)
                }
            }, {
                key: "get3PUnit",
                value: function(e, t, n, r, i, a) {
                    this.passthru(t, a)
                }
            }, {
                key: "getExtUnit",
                value: function(e, t) {
                    this.passthru(t)
                }
            }, {
                key: "passthru",
                value: function(e, t) {
                    this.analytics.thirdPartyAnalytics.passthru(e, t)
                }
            }, {
                key: "dynamicCreativeRender",
                value: function(e) {
                    if (!e) throw new Ce.a("Missing auction response payload");
                    if (!this.isUnitGenerated) {
                        this.isUnitGenerated = !0;
                        var t = e.settings.additional_data.aid;
                        this.firePix.setAuctionId(t), this._verboseCreativeResponseLog(t, "dynamicCreativeRender", e), this.eventController.publish(Te.c, {
                            payload: e
                        })
                    }
                }
            }, {
                key: "serveConditional",
                value: function(e, t) {
                    var n = !1,
                        r = this.uniquenessController;
                    if (r) {
                        var i = Object.keys(t)[0],
                            a = t[i],
                            o = Ie()({}, this.getServeDefaultArgs(), {
                                serveDefault: this.defaultServer
                            });
                        n = r.dispatchIfUnique(o, e, i, a)
                    } else this.adRendered = !0, this.viewabilityController.vbasStart(e);
                    return n
                }
            }, {
                key: "serveDefault",
                value: function(e, t) {
                    var n = this.placement.defaultCode;
                    this._verboseCreativeResponseLog(t, "serveDefault", n), this.defaultServer.serve(this.getServeDefaultArgs(), e, t)
                }
            }, {
                key: "getServeDefaultArgs",
                value: function() {
                    return {
                        adRendered: this.adRendered,
                        defaultCode: this.placement.defaultCode,
                        docInfo: this.docInfo,
                        firePix: this.firePix,
                        hook: this.hook,
                        pageInfo: this.pageInfo,
                        userSync: this.userSync
                    }
                }
            }, {
                key: "registerAuctionListeners",
                value: function() {
                    var e = {
                        get_unit_2: this.wrap(this.getCreativeJSON2),
                        get_3p_unit: this.wrap(this.get3PUnit),
                        get_ext_unit: this.wrap(this.getExtUnit),
                        dynamicCreativeRender: this.wrap(this.dynamicCreativeRender),
                        serveViewable: this.wrap(this.serveConditional),
                        serveConditional: this.wrap(this.serveConditional),
                        serveDefault: this.wrap(this.serveDefault)
                    };
                    Object.assign(this.auctionIFrameWindow, e)
                }
            }, {
                key: "wrap",
                value: function(e) {
                    var r = this,
                        i = this.errorDecorator(e);
                    return function() {
                        r.eventController.publish(Te.b);
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return i.apply(r, t)
                    }
                }
            }, {
                key: "setAnalytics",
                value: function(e) {
                    this.analytics = e
                }
            }, {
                key: "_verboseCreativeResponseLog",
                value: function(e, t, n) {
                    var r = this.placement.customOptions.verboseCreativeResponseToggle;
                    if (void 0 !== r && Math.random() < r) {
                        var i = p()({}, t, n),
                            a = JSON.stringify(i),
                            o = {
                                string1: e,
                                string2: "verboseCreativeResponseToggle",
                                string3: a
                            };
                        a.length <= 1024 && this.firePix.fireDyn(o)
                    }
                }
            }]), g
        }(),
        C = u(6),
        Ue = function() {
            function s(e, t) {
                var n = e.placement,
                    r = e.docInfo,
                    i = e.ttjHostName,
                    a = t.firePix,
                    o = t.errorHandler;
                z()(this, s), this.placement = n, this.docInfo = r, this.ttjHostName = i, this.firePix = a, this.errorHandler = o, this.script = null, this.tlScriptCandidates = null
            }
            return v()(s, [{
                key: "getHook",
                value: function(e) {
                    var t, n = this.docInfo.window,
                        r = this.docInfo.document,
                        i = +e,
                        a = this.placement.customOptions.friendlyIframeRender,
                        o = r.getElementsByTagName("SCRIPT");
                    t = this.getTLScript(o);
                    try {
                        n !== top && n.frameElement && !a && (t = function(e) {
                            var t, n = e;
                            for (; n !== top;) try {
                                n.frameElement && (t = n.frameElement), n = n.parent
                            } catch (e) {
                                break
                            }
                            return t
                        }(n))
                    } catch (e) {
                        this.firePix.fireDyn({
                            string1: "HookFinder: error getting top",
                            string2: "".concat(this.placement.invCode, ": ").concat(location.href),
                            string3: e.message
                        })
                    }
                    if (!t) {
                        var s = this.getHookCandidates();
                        t = this.getTLScript(s), this.firePix.fireDyn({
                            string1: "HookFinder: using placeholder hook",
                            string2: "".concat(this.placement.invCode, ": ").concat(location.href)
                        })
                    }
                    for (; i;) t = t.parentNode, i--;
                    return t || this.errorHandler.fireError("could not find hook", Ee.a.ERROR_LEVELS.ERROR), t
                }
            }, {
                key: "getTLScript",
                value: function(e) {
                    if (this.script) return this.script;
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        if (this.isValidTLScript(n)) return n.setAttribute("tl_id", Math.round(1e5 * Math.random())), this.script = n
                    }
                    return !1
                }
            }, {
                key: "isValidTLScript",
                value: function(e) {
                    var t = e.getAttribute("tl_id"),
                        n = e.getAttribute("data-tl-med-id");
                    return L(e, this.ttjHostName) && L(e, this.placement.invCode) && !t && !n
                }
            }, {
                key: "getHookCandidates",
                value: function() {
                    var t = this;
                    if (this.tlScriptCandidates) return this.tlScriptCandidates;
                    var e = document.getElementsByTagName("SCRIPT"),
                        n = Array.prototype.filter.call(e, function(e) {
                            return e.src && -1 < e.src.indexOf(t.ttjHostName)
                        }).map(function(e) {
                            var t = document.createElement("P");
                            return t.style.display = "none", t.setAttribute("data-src", e.src), e.parentNode.insertBefore(t, e), t
                        });
                    return this.tlScriptCandidates = n
                }
            }, {
                key: "getAuctionResponsePseudoId",
                value: function() {
                    return !!this.script && this.script.getAttribute("data-auction-response-id")
                }
            }, {
                key: "getScriptTag",
                value: function() {
                    return !!this.script && this.script.getAttribute("data-auction-response-id")
                }
            }, {
                key: "getTagTemplateId",
                value: function() {
                    return !!this.script && this.script.getAttribute("data-template-id")
                }
            }, {
                key: "getScriptPath",
                value: function() {
                    var e = this.getScriptSrc();
                    return Object(be.p)(e).path
                }
            }, {
                key: "getScriptSrc",
                value: function() {
                    return this.script ? this.script.getAttribute("data-src") || this.script.src : ""
                }
            }], [{
                key: "hideHook",
                value: function(e) {
                    if (!e) throw new Ce.a("hideHook failed: no hook");
                    C.a.setStyle(e, "display", "none"), C.a.setStyle(e, "visibility", "hidden"), C.a.setStyle(e, "width", "0px"), C.a.setStyle(e, "height", "0px")
                }
            }]), s
        }();

    function L(e, t) {
        if (!t) return !1;
        var n = e.src,
            r = e.getAttribute("data-src"),
            i = n && -1 < n.indexOf(t),
            a = r && -1 < r.indexOf(t);
        return !(!i && !a)
    }
    var Be = function() {
            function e() {
                z()(this, e)
            }
            return v()(e, null, [{
                key: "needsBusting",
                value: function(e, t) {
                    return e.iframeBuster && ! function(e) {
                        var t;
                        try {
                            t = e && e == top
                        } catch (e) {
                            t = !1
                        }
                        return t
                    }(t)
                }
            }, {
                key: "bust",
                value: function(e, t) {
                    var n = Object(be.p)(e.referrer),
                        r = encodeURIComponent(e.URL),
                        i = e.createElement("iframe");
                    if (i.src = Object(be.a)("//".concat(n.host, "/doubleclick/TLIframe.html?docsrc=").concat(r, "&script_src=").concat(encodeURIComponent(t))), i.width = 0, i.height = 0, i.style.display = "none", null === e.body) {
                        var a = e.createElement("body");
                        e.firstElementChild.appendChild(a)
                    }
                    e.body.appendChild(i)
                }
            }]), e
        }(),
        We = function() {
            function e() {
                z()(this, e);
                try {
                    jQuery(), this.jQueryPresent = !0
                } catch (e) {
                    this.jQueryPresent = !1
                }
            }
            return v()(e, [{
                key: "layout",
                value: function(e) {
                    this.jQueryPresent && (function() {
                        var n = jQuery(".masonry");
                        n.length || (n = null);
                        n && 1 < n.length && (n = jQuery(n[0]));
                        n || jQuery.each(jQuery.find("*"), function(e, t) {
                            jQuery.data(t, "masonry") && (n = jQuery(t))
                        });
                        n && n.data("masonry") && (n.masonry("reloadItems"), n.masonry())
                    }(), function(e) {
                        if (jQuery.fn.isotope) {
                            var t = jQuery(".isotope");
                            if (1 !== t.length)
                                for (var n = e; n.parentNode;) jQuery.data(jQuery(n.parentNode), "isotope") ? t = jQuery(n.parentNode) : n = n.parentNode;
                            t.data("isotope") || (t = !1), t && t.isotope("reloadItems").isotope({
                                sortBy: "original-order"
                            })
                        }
                    }(e))
                }
            }]), e
        }();
    var D = "post_render",
        He = function() {
            function r(e) {
                var t = this,
                    n = e.eventController;
                z()(this, r), p()(this, "phase", "auction"), n.on(Te.c, function() {
                    return t.setPhaseAfterAuction()
                })
            }
            return v()(r, [{
                key: "setPhaseAfterAuction",
                value: function() {
                    this.phase = "render"
                }
            }, {
                key: "setPhaseAfterRender",
                value: function(e) {
                    this.phase = e ? "video" : D
                }
            }, {
                key: "setPhaseAfterVideoStart",
                value: function() {
                    this.phase = D
                }
            }, {
                key: "getPhase",
                value: function() {
                    return this.phase
                }
            }]), r
        }(),
        O = function() {
            function H(e) {
                var t = e.defaultCaptionOverride,
                    n = void 0 === t ? "" : t,
                    r = e.defaultHeadingOverride,
                    i = void 0 === r ? "" : r,
                    a = e.disableOutstreamVideoBehavior,
                    o = void 0 !== a && a,
                    s = e.dontWaitForImageLoad,
                    c = void 0 !== s && s,
                    u = e.friendlyIframeRender,
                    l = void 0 !== u && u,
                    d = e.is3pAdPreview,
                    f = void 0 !== d && d,
                    h = e.isAmp,
                    p = void 0 !== h && h,
                    g = e.maxUserSyncs,
                    v = void 0 === g ? 10 : g,
                    m = e.numCreatives,
                    y = void 0 === m ? 1 : m,
                    _ = e.openCtUrlInSameWindow,
                    I = void 0 !== _ && _,
                    A = e.playButtonUrl,
                    w = void 0 === A ? "" : A,
                    b = e.postBidIpvAutoplay,
                    E = void 0 !== b && b,
                    k = e.referrerOverride,
                    M = void 0 === k ? [] : k,
                    T = e.uniqueBrands,
                    S = void 0 !== T && T,
                    x = e.uniqueCreatives,
                    C = void 0 !== x && x,
                    L = e.unwrappedUnit,
                    D = void 0 !== L && L,
                    O = e.userSyncsDisabled,
                    N = void 0 !== O && O,
                    j = e.vbasSelector,
                    R = void 0 === j ? null : j,
                    P = e.verboseCreativeResponseToggle,
                    V = void 0 === P ? void 0 : P,
                    F = e.videoZIndexOverride,
                    U = void 0 === F ? null : F,
                    B = e.viewabilityEnabled,
                    W = void 0 !== B && B;
                z()(this, H), this._defaultCaptionOverride = n, this._defaultHeadingOverride = i, this._disableOutstreamVideoBehavior = o, this._dontWaitForImageLoad = c, this._friendlyIframeRender = l, this._is3pAdPreview = f, this._isAmp = p, this._maxUserSyncs = v, this._numCreatives = y, this._openCtUrlInSameWindow = I, this._playButtonUrl = w, this._postBidIpvAutoplay = E, this._referrerOverride = M, this._uniqueBrands = S, this._uniqueCreatives = C, this._unwrappedUnit = D, this._userSyncsDisabled = N, this._vbasSelector = R, this._verboseCreativeResponseToggle = V, this._videoZIndexOverride = U, this._viewabilityEnabled = W
            }
            return v()(H, [{
                key: "defaultHeadingOverride",
                get: function() {
                    return this._defaultHeadingOverride
                }
            }, {
                key: "defaultCaptionOverride",
                get: function() {
                    return this._defaultCaptionOverride
                }
            }, {
                key: "disableOutstreamVideoBehavior",
                get: function() {
                    return this._disableOutstreamVideoBehavior
                }
            }, {
                key: "dontWaitForImageLoad",
                get: function() {
                    return this._dontWaitForImageLoad
                }
            }, {
                key: "friendlyIframeRender",
                get: function() {
                    return this._friendlyIframeRender
                },
                set: function(e) {
                    return this._friendlyIframeRender = e, this
                }
            }, {
                key: "is3pAdPreview",
                get: function() {
                    return this._is3pAdPreview
                },
                set: function(e) {
                    return this._is3pAdPreview = e, this
                }
            }, {
                key: "isAmp",
                get: function() {
                    return this._isAmp
                }
            }, {
                key: "maxUserSyncs",
                get: function() {
                    return this._maxUserSyncs
                }
            }, {
                key: "numCreatives",
                get: function() {
                    return this._numCreatives
                }
            }, {
                key: "openCtUrlInSameWindow",
                get: function() {
                    return this._openCtUrlInSameWindow
                }
            }, {
                key: "playButtonUrl",
                get: function() {
                    return this._playButtonUrl
                }
            }, {
                key: "postBidIpvAutoplay",
                get: function() {
                    return this._postBidIpvAutoplay
                }
            }, {
                key: "referrerOverride",
                get: function() {
                    return this._referrerOverride
                }
            }, {
                key: "uniqueBrands",
                get: function() {
                    return this._uniqueBrands
                }
            }, {
                key: "uniqueCreatives",
                get: function() {
                    return this._uniqueCreatives
                }
            }, {
                key: "unwrappedUnit",
                get: function() {
                    return this._unwrappedUnit
                }
            }, {
                key: "userSyncsDisabled",
                get: function() {
                    return this._userSyncsDisabled
                }
            }, {
                key: "vbasSelector",
                get: function() {
                    return this._vbasSelector
                }
            }, {
                key: "verboseCreativeResponseToggle",
                get: function() {
                    return this._verboseCreativeResponseToggle
                }
            }, {
                key: "videoZIndexOverride",
                get: function() {
                    return this._videoZIndexOverride
                }
            }, {
                key: "viewabilityEnabled",
                get: function() {
                    return this._viewabilityEnabled
                }
            }]), H
        }(),
        ze = function() {
            function M(e) {
                var t = e.async,
                    n = e.captionCharacterLimit,
                    r = e.headingCharacterLimit,
                    i = e.customOptions,
                    a = void 0 === i ? {} : i,
                    o = e.defaultCode,
                    s = e.demandEnabled,
                    c = e.dvPlacementId,
                    u = e.id,
                    l = e.iframeBuster,
                    d = e.iframeWrap,
                    f = e.imageHeight,
                    h = e.imageWidth,
                    p = e.invCode,
                    g = e.logoBlackList,
                    v = e.publisherId,
                    m = e.replaceParent,
                    y = e.sharingEnabled,
                    _ = e.staging,
                    I = e.templateCode,
                    A = e.templates,
                    w = e.timeoutDuration,
                    b = void 0 === w ? 1e4 : w,
                    E = e.viewabilityTestingInfo,
                    k = void 0 === E ? {} : E;
                z()(this, M), this._async = t, this._captionCharacterLimit = n, this._headingCharacterLimit = r, this._customOptions = new O(Ie()({}, a)), this._defaultCode = o, this._demandEnabled = s, this._dvPlacementId = c, this._id = u, this._iframeBuster = l, this._iframeWrap = d, this._imageHeight = f, this._imageWidth = h, this._invCode = p, this._logoBlackList = g, this._publisherId = v, this._replaceParent = m, this._sharingEnabled = y, this._staging = _, this._templateCode = I, this._templates = A, this._timeoutDuration = b, this._viewabilityTestingInfo = k
            }
            return v()(M, [{
                key: "async",
                get: function() {
                    return this._async
                }
            }, {
                key: "captionCharacterLimit",
                get: function() {
                    return this._captionCharacterLimit
                }
            }, {
                key: "headingCharacterLimit",
                get: function() {
                    return this._headingCharacterLimit
                }
            }, {
                key: "customOptions",
                get: function() {
                    return this._customOptions
                }
            }, {
                key: "defaultCode",
                get: function() {
                    return this._defaultCode
                }
            }, {
                key: "demandEnabled",
                get: function() {
                    return this._demandEnabled
                }
            }, {
                key: "dvPlacementId",
                get: function() {
                    return this._dvPlacementId
                }
            }, {
                key: "id",
                get: function() {
                    return this._id
                }
            }, {
                key: "iframeBuster",
                get: function() {
                    return this._iframeBuster
                }
            }, {
                key: "iframeWrap",
                get: function() {
                    return this._iframeWrap
                }
            }, {
                key: "imageHeight",
                get: function() {
                    return this._imageHeight
                },
                set: function(e) {
                    return this._imageHeight = e, this
                }
            }, {
                key: "imageWidth",
                get: function() {
                    return this._imageWidth
                },
                set: function(e) {
                    return this._imageWidth = e, this
                }
            }, {
                key: "invCode",
                get: function() {
                    return this._invCode
                }
            }, {
                key: "logoBlackList",
                get: function() {
                    return this._logoBlackList
                }
            }, {
                key: "publisherId",
                get: function() {
                    return this._publisherId
                }
            }, {
                key: "replaceParent",
                get: function() {
                    return this._replaceParent
                }
            }, {
                key: "sharingEnabled",
                get: function() {
                    return this._sharingEnabled
                }
            }, {
                key: "staging",
                get: function() {
                    return this._staging
                }
            }, {
                key: "templateCode",
                get: function() {
                    return this._templateCode
                },
                set: function(e) {
                    return this._templateCode = e, this
                }
            }, {
                key: "templates",
                get: function() {
                    return this._templates
                }
            }, {
                key: "timeoutDuration",
                get: function() {
                    return this._timeoutDuration
                }
            }, {
                key: "viewabilityTestingInfo",
                get: function() {
                    return this._viewabilityTestingInfo
                }
            }]), M
        }(),
        N = function e(t) {
            if ("SCRIPT" === t.tagName && "tl-third-party" !== t.className) t.parentNode.replaceChild(function(e) {
                var t = document.createElement("SCRIPT");
                t.text = e.innerHTML;
                for (var n = e.attributes.length - 1; 0 <= n; n--) t.setAttribute(e.attributes[n].name, e.attributes[n].value);
                return t
            }(t), t);
            else
                for (var n = 0, r = t.childNodes; n < r.length;) e(r[n++]);
            return t
        },
        Qe = function() {
            function t(e) {
                z()(this, t), this.document = e.document, this.window = e.window
            }
            return v()(t, [{
                key: "wrapAd",
                value: function(e) {
                    var t = this.document.createElement("DIV");
                    return t.style.display = "inline", t.className = "tlod", t.innerHTML = e, t
                }
            }], [{
                key: "insertAd",
                value: function(e, t) {
                    if (!t || !t.parentNode) throw new Ce.a("insertAd failed: hook element not on dom");
                    t.parentNode.insertBefore(e, t), N(e)
                }
            }, {
                key: "serveDefaultFrame",
                value: function(e, t) {
                    if (!t) throw new Ce.a("serveDefaultFrame: tried to write default code but doc is unavailable");
                    t.open(), t.write(e), t.close()
                }
            }]), t
        }(),
        j = -1;

    function Ge(e) {
        var n, r, t = e.adWrapperWithDims,
            i = e.mainContent,
            a = e.positionService,
            o = e.pageInfo,
            s = e.bundleStartTime,
            c = e.firePix,
            u = e.errorHandler,
            l = a.getElDims(t),
            d = a.getElDims(i),
            f = {
                ad_w: l.width,
                ad_h: l.height,
                img_w: d.width,
                img_h: d.height,
                render_time: Date.now() - s,
                ft: o.getFrameType()
            };
        if (o.isClientAware()) {
            var h = a.getClientDims();
            f.client_w = h.width, f.client_h = h.height
        } else f.client_w = j, f.client_h = j;
        if (o.isPositionAware()) {
            var p = function(e, t, n, r) {
                var i, a;
                try {
                    var o = e.ownerDocument,
                        s = o.defaultView.top.document.body,
                        c = n.getBoundingRect(s);
                    i = t.top - c.top, a = t.left - c.left
                } catch (e) {
                    r.fireError("could not access top when getting ad position", Ee.a.ERROR_LEVELS.WARNING), a = i = j
                }
                return {
                    top: i,
                    left: a
                }
            }(t, a.getBoundingRect(t), a, u);
            f.pos_left = p.left, f.pos_top = p.top
        } else f.pos_left = j, f.pos_top = j;
        c.fireEB(g.f, (n = f, r = {}, Object.keys(n).forEach(function(e) {
            var t = n[e];
            r[e] = "number" == typeof t ? Math.round(t) : t
        }), r))
    }
    var Ye = function() {
            function d(e) {
                z()(this, d), this.done = !1, this.util = e
            }
            return v()(d, [{
                key: "serve",
                value: function(e, t, n) {
                    var r = e.hook,
                        i = e.docInfo,
                        a = e.defaultCode,
                        o = e.pageInfo,
                        s = e.firePix,
                        c = e.userSync,
                        u = e.adRendered;
                    if (this.done || u) return !1;
                    this.done = !0, d.renderDefault(a, r, i);
                    var l = this.util.objMerge(this.util.URIEncodeFields(o.get()), {
                        rr: t
                    });
                    return n && s.setAuctionId(n), s.fireEB(g.g, l), c && c.doSyncIfAllDone(), !0
                }
            }], [{
                key: "renderDefault",
                value: function(e, t, n) {
                    if (e)
                        if (n.window !== top) Qe.serveDefaultFrame(e, n.window.document);
                        else {
                            var r = new Qe(n).wrapAd(e);
                            Qe.insertAd(r, t)
                        }
                }
            }]), d
        }(),
        R = (u(62), u(28), u(113)),
        P = u.n(R),
        Ze = (u(108), u(8)),
        V = "tl-img-src-place-holder",
        F = "tl-img-srcset-place-holder",
        Je = function() {
            function i(e) {
                z()(this, i), this.errorHandler = e, this.templateDetail = {
                    string: ""
                }, this.chosenTemplate = null, this.templateWrapEl = null
            }
            return v()(i, [{
                key: "parse",
                value: function(e) {
                    var t = i.makeTemplateWrapEl(i.getTransformedMacroSrcAttrs(e)),
                        n = i.markElements(t),
                        r = n.innerHTML;
                    Ze.a.removeAllChildren(n), this.templateDetail.string = i.getInterpolatedMacroSrcAttrs(r), this.templateWrapEl = t, this.chosenTemplate = n
                }
            }, {
                key: "getAltTemplate",
                value: function(e, t, n, r) {
                    if (!e) return this.errNoAltTemplates(), {};
                    var i = +r || +n || +t;
                    if (isNaN(Number(i))) return {};
                    var a = Ze.a.find(e, function(e) {
                        return e.id === i
                    });
                    if (!a) return this.errTemplateNotFound(i), {};
                    a.id;
                    return P()(a, ["id"])
                }
            }, {
                key: "errNoAltTemplates",
                value: function() {
                    this.errorHandler.fireError("templateId specified but no templates found on placement. Default templateCode used.", Ee.a.ERROR_LEVELS.WARNING)
                }
            }, {
                key: "errTemplateNotFound",
                value: function(e) {
                    var t = "Cannot find templateCode with id = ".concat(e, " in templateList. Default templateCode used");
                    this.errorHandler.fireError(t, Ee.a.ERROR_LEVELS.WARNING)
                }
            }], [{
                key: "markElements",
                value: function(n) {
                    return n && 1 === n.nodeType && (i.isClickThroughEl(n) && n.classList.add("".concat(Ee.a.TL_CLASS_PREFIX, "clickthrough-url")), i.isLogoEl(n) && n.classList.add("".concat(Ee.a.TL_CLASS_PREFIX, "logo-img")), i.isSubHeadlineEl(n) && n.classList.add("".concat(Ee.a.TL_CLASS_PREFIX, "sub-headline")), [].forEach.call(n.childNodes, function(t) {
                        3 === t.nodeType && Ee.a.TEXT_FIELDS.forEach(function(e) {
                            -1 < t.textContent.toLowerCase().indexOf("%%%".concat(e, "%%%")) && n.classList.add("".concat(Ee.a.TL_CLASS_PREFIX).concat(e))
                        }), i.markElements(t)
                    })), n
                }
            }, {
                key: "isClickThroughEl",
                value: function(e) {
                    if (!e || !e.tagName || !e.getAttribute("href")) return !1;
                    var t = e.tagName.toLowerCase(),
                        n = e.getAttribute("href").toLowerCase();
                    return "a" === t && -1 < n.indexOf("%%%clickthrough_url%%%")
                }
            }, {
                key: "isLogoEl",
                value: function(e) {
                    if (!e || !e.tagName || !e.getAttribute(V)) return !1;
                    var t = e.tagName.toLowerCase(),
                        n = e.getAttribute(V).toLowerCase();
                    return "img" === t && -1 < n.indexOf("%%%logo_image_url%%%")
                }
            }, {
                key: "isSubHeadlineEl",
                value: function(e) {
                    return e && e.tagName && e.innerHTML && "%%%subheadline%%%" === e.innerHTML.toLowerCase()
                }
            }, {
                key: "getTransformedMacroSrcAttrs",
                value: function(e) {
                    return e.replace(/src([="'\s]+%%%)/gi, "".concat(V, "$1")).replace(/srcset([="'\s]+%%%)/gi, "".concat(F, "$1"))
                }
            }, {
                key: "getInterpolatedMacroSrcAttrs",
                value: function(e) {
                    var t = new RegExp(V, "g"),
                        n = new RegExp(F, "g");
                    return e.replace(t, "src").replace(n, "srcset")
                }
            }, {
                key: "makeTemplateWrapEl",
                value: function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t
                }
            }, {
                key: "hasMacro",
                value: function(e) {
                    return -1 !== e.indexOf("%%%")
                }
            }]), i
        }(),
        U = u(64),
        B = {
            moat: 1,
            ias: 2,
            dv: 3,
            fk: 4,
            apx: 5,
            pix: 6,
            adl: 7
        },
        W = function() {
            function d(e, t) {
                var n = e.docInfo,
                    r = e.placement,
                    i = e.mainImage,
                    a = e.adDIV,
                    o = e.tacticDetails,
                    s = void 0 === o ? {} : o,
                    c = e.formatId,
                    u = t.creative,
                    l = t.firePix;
                z()(this, d), this.docInfo = n, this.placement = r, this.mainImage = i, this.adDIV = a, this.viewabilityElement = a, this.creative = u, this.tacticDetails = s, this.formatId = c, this.firePix = l
            }
            return v()(d, [{
                key: "appendTags",
                value: function(e) {
                    for (var t = this.addViewabilityTestJS(e, window), n = this.getIntegrations(), r = 0; r < t.length; r++) {
                        for (var i = t[r], a = !1, o = 0; o < n.length; o++)
                            if (i && i.match && i.match(n[o].regex)) {
                                n[o].action(i), a = !0;
                                break
                            }
                        a || this.defaultAction(i)
                    }
                }
            }, {
                key: "getViewabilityID",
                value: function() {
                    return this.viewabilityID || (this.viewabilityID = this.viewabilityElement.id || "tltpvid_".concat(Math.round(1e5 * Math.random())), this.viewabilityElement.id = this.viewabilityID), this.viewabilityID
                }
            }, {
                key: "getViewabilityClass",
                value: function() {
                    if (!this.viewabilityClass) {
                        if (this.viewabilityClass = "tltpvclass_".concat(Math.round(1e5 * Math.random())), !this.viewabilityElement || !this.viewabilityElement.classList) throw new Ce.a("getViewabilityClass failed: invalid viewabilityElement", Ee.a.ERROR_LEVELS.WARNING);
                        this.viewabilityElement.classList.add(this.viewabilityClass)
                    }
                    return this.viewabilityClass
                }
            }, {
                key: "appendScriptVE",
                value: function(e) {
                    var t = this.create3pScript(),
                        n = this.mainImage;
                    if (n.nextSibling) n.parentNode.insertBefore(t, n.nextSibling);
                    else {
                        var r = this.docInfo.document.createElement("IMG");
                        r.style.display = "none", n.parentNode.insertBefore(r, n), r.parentNode.insertBefore(n, r), r.parentNode.insertBefore(t, n.nextSibling), r.parentNode.removeChild(r)
                    }
                    t.src = e
                }
            }, {
                key: "appendScriptAd",
                value: function(e) {
                    var t = this.create3pScript();
                    this.adDIV.appendChild(t), t.src = e
                }
            }, {
                key: "defaultAction",
                value: function(e) {
                    var t = this.create3pScript();
                    this.viewabilityElement.appendChild(t), t.src = e
                }
            }, {
                key: "create3pScript",
                value: function() {
                    var e = this.docInfo.document.createElement("SCRIPT");
                    return e.className = "tl-third-party", e
                }
            }, {
                key: "interpolateDimensions",
                value: function(e) {
                    var t = this.mainImage.getBoundingClientRect();
                    return e.replace("[WIDTH]", t.width).replace("[HEIGHT]", t.height).replace("[CONTAINER_ID]", this.getViewabilityID())
                }
            }, {
                key: "getIntegrations",
                value: function() {
                    var r = this;
                    return [{
                        regex: /cdn\.adnxs/,
                        action: function(e) {
                            r.appendScriptAd(e.replace("%native_dom_id%", r.getViewabilityID()))
                        }
                    }, {
                        regex: /cdn\.doubleverify/,
                        action: function(e) {
                            var t = (e.match("findclass") ? e : "".concat(e, "&findclass=1")).replace(/INSERT_SUPPLIER_ID/, "TripleLift").replace("[PLACEMENT_ID]", r.placement.id).replace("[DV_PLACEMENT_ID]", r.placement.dvPlacementId).replace(/INSERT_BTREG/, r.getViewabilityClass()).replace(/INSERT_BTADSRV/, r.getViewabilityClass());
                            r.appendScriptAd(t)
                        }
                    }, {
                        regex: /adsafeprotected/,
                        action: function(e) {
                            var t = r.tacticDetails,
                                n = void 0 !== r.tacticDetails.advid;
                            r.appendScriptVE(e.replace("$!{AD_ID}", r.placement.id).replace("$!{ADVERTISER_ID}", n ? t.advid : "0").replace("$!{INSERTION_ORDER_ID}", n ? t.ioid : t.bmid))
                        }
                    }, {
                        regex: /voicefive/,
                        action: function(e) {
                            var t = e.replace("[PLACEMENT_ID]", r.placement.placementID).replace("[TLVIEW_ID]", r.getViewabilityID());
                            r.appendScriptVE(t)
                        }
                    }, {
                        regex: /js\.moatads/,
                        action: function(e) {
                            var t = e.replace("_PUBLISHER_", r.placement.publisherId).replace("_PLACEMENT_ID_", r.placement.id).replace("_CREATIVE_", r.tacticDetails.clid).replace("_FORMAT_", r.formatId).replace("[TACTIC]", r.tacticDetails.tid).replace("[DSP]", r.tacticDetails.bmid).replace("[BRAND]", r.tacticDetails.brid).replace("[MOAT_Z_PARAMS]", Object(U.a)().makeZParamsString(r.creative, r.tacticDetails));
                            t = t.match(/\[TLVIEW_ID]/) ? t.replace("[TLVIEW_ID]", r.getViewabilityID()) : t.concat("&tlview_id=", r.getViewabilityID()), r.appendScriptAd(t)
                        }
                    }, {
                        regex: /z\.moatads/,
                        action: function(e) {
                            var t = e.replace("_PUBLISHER_", r.placement.publisherId).replace("_PLACEMENT_ID_", r.placement.id).replace("_CREATIVE_", r.tacticDetails.clid).replace("_FORMAT_", r.formatId).replace("[TACTIC]", r.tacticDetails.tid).replace("[DSP]", r.tacticDetails.bmid).replace("[BRAND]", r.tacticDetails.brid).replace("[MOAT_Z_PARAMS]", Object(U.a)().makeZParamsString(r.creative, r.tacticDetails));
                            t = t.match(/\[TLVIEW_ID]/) ? t.replace("[TLVIEW_ID]", r.getViewabilityID()) : t.concat("&tlview_id=", r.getViewabilityID()), r.appendScriptAd(t)
                        }
                    }, {
                        regex: /c\.betrad/,
                        action: function(e) {
                            r.appendScriptAd(r.interpolateDimensions(e))
                        }
                    }, {
                        regex: /choices\.truste/,
                        action: function(e) {
                            r.appendScriptAd(r.interpolateDimensions(e))
                        }
                    }, {
                        regex: /ybp\.yahoo/,
                        action: function(e) {
                            r.appendScriptAd(e.replace("TLVIEW_ID", r.getViewabilityID()))
                        }
                    }, {
                        regex: /fk\.unicornengine/,
                        action: function(e) {
                            r.appendScriptAd(e.replace("TLVIEW_ID", r.getViewabilityID()).replace("PLACEMENT_ID", r.placement.id).replace("TIMESTAMP", Date.now()))
                        }
                    }, {
                        regex: /q\.adrta/,
                        action: function(e) {
                            var t = r.getViewabilityID(),
                                n = e.includes("[DIV_ID]") ? e.replace("[DIV_ID]", t) : "".concat(e, ";divid=").concat(t);
                            r.appendScriptAd(n)
                        }
                    }, {
                        regex: /j\.adlooxtracking/,
                        action: function(e) {
                            r.appendScriptAd(e.replace("[TLVIEW_ID]", r.getViewabilityID()))
                        }
                    }]
                }
            }, {
                key: "addViewabilityTestJS",
                value: function(e, t) {
                    var n = this.creative.getParams(),
                        r = n.viewability || {},
                        i = {
                            pid: this.placement.id,
                            unid: n.additional_data.unid || 0
                        };
                    if (this.creative.isAutoplay()) {
                        for (var a in r) r[a] && (i.vid = B[a], i.sr = r[a], this.firePix.fireEB(g.i, i));
                        return e
                    }
                    var o = "https:" === t.location.protocol;
                    if (r.moat) {
                        var s = o ? "https://z." : "http://js.",
                            c = Object(U.a)().makeZParamsString(this.creative, this.tacticDetails);
                        e.push("".concat(s, "moatads.com/triplelift879988051105/moatad.js") + "#moatClientLevel1=_PUBLISHER_&moatClientLevel2=_PLACEMENT_ID_&moatClientLevel3=_CREATIVE_&moatClientLevel4=_FORMAT_&moatClientSlicer1=[DSP]&moatClientSlicer2=[BRAND]&tlview_id=[TLVIEW_ID]" + "&zMoatTactic=[TACTIC]&zMoatPixelParams=".concat(c)), i.vid = B.moat, i.sr = r.moat, this.firePix.fireEB(g.i, i)
                    }
                    if (r.ias) {
                        var u = o ? "https:" : "http:";
                        e.push("".concat(u, "//pixel.adsafeprotected.com/jload?anId=8617&advId=$!{ADVERTISER_ID}&") + "campId=$!{INSERTION_ORDER_ID}&pubId=$!{INVENTORY_SOURCE_ID}&chanId=$!{PACKAGE_ID}&placementId=$!{AD_ID}&adsafe_url=$!{SITE_URL}&adsafe_type=v"), i.vid = B.ias, i.sr = r.ias, this.firePix.fireEB(g.i, i)
                    }
                    if (r.dv) {
                        var l = o ? "https:" : "http:";
                        e.push("".concat(l, "//cdn.doubleverify.com/dvtp_src.js?ctx=2334102&") + "cmp=2334104&sid=triplelift&plc=[DV_PLACEMENT_ID]&num=&adid=&advid=2334103&adsrv=0&region=30&btreg=INSERT_BTREG&btadsrv=INSERT_BTADSRV&crt=&crtname=&chnl=&unit=&pid=&uid=&tagtype=&dvtagver=6.1.src&findclass=1"), i.vid = B.dv, i.sr = r.dv, this.firePix.fireEB(g.i, i)
                    }
                    if (r.fk) {
                        var d = o ? "https:" : "http:";
                        e.push("".concat(d, "//fk.unicornengine.net/ada/117/205667136/") + "viewid=TLVIEW_ID;pid=PLACEMENT_ID/TIMESTAMP/"), i.vid = B.fk, i.sr = r.fk, this.firePix.fireEB(g.i, i)
                    }
                    if (r.apx) {
                        var f = o ? "https:" : "http:";
                        e.push("".concat(f, "//cdn.adnxs.com/v/s/112/trk.js#v;tv=native-test;native=1;dom_id=") + "%native_dom_id%;st=0;d=1x1;vc=iab;vid_ccr=1;an_sdk=1;tag_id=12350495;cb=http%3A%2F%2Ffra1-ib.adnxs.com%2Fvevent%3Fe%3DwqT_3QL5BqB5AwAAAwDWAAUBCJmth9MFEOG_loLBiueEIxiamLHqnKPMylkqNgkAAAECCAhAEQEHEAAACEAZCQkI8D8hCQkICEApEQkAMQkJsAAAMJ_o8QU4zhJAzhJIAlC994knWNSeH2AAaN7dGHjtyASAAQGKAQNVU0SSAQEG8FCYAQGgAQGoAQGwAQC4AQDAAQTIAQLQAQDYAQDgAQDwAQCKAjp1ZignYScsIDM5MzgwMSwgMTUxNjM2MTM2OSk7dWYoJ3InLCA4MTk1MTY3NywyHgDwnJIC-QEhNHpYcWVBaUVnTmtDRUwzM2lTY1lBQ0RVbmg4d0FEZ0FRQVJJemhKUW4tanhCVmdBWU1vSGFBQndDbmo0bVFHQUFiSURpQUZva0FFQm1BRUJvQUVCcUFFRHNBRUF1UUctMEV6RkFBQUlRTUVCdnRCTXhRQUFDRURKQVFSTHpPUll5OVFfMlFFQUFBQUFBQUR3UC1BQkFQVUIFDyhKZ0NBS0FDQUxVQwUQBEwwCQjwTE1BQ0FNZ0NBT0FDQU9nQ0FQZ0NBSUFEQVpBREFKZ0RBYWdEaElEWkFyb0RFV1JsWm1GMWJIUWpSbEpCTVRvek56QTSaAjkhdWdzcTl3NvwA9FQBMUo0ZklBUW9BRG9SWkdWbVlYVnNkQ05HVWtFeE9qTTNNRGcu2AKfCeACjKYO6gIzaHR0cDovL3Rlc3RwYWdlcy5tY2FyLW1hYy5hbGVudHkuZnIvMDFfYmFzaWNfc2luZ2xlgAMAiAMBkAMAmAMXoAMBqgMAwAOQHMgDANIDLAgCEigwMjhkZjRlMzY0MzdlOThmOWU5M2MzYWUwZjlmOTllNTEyYTI4Y2Vl0gMkCAQSIDg3NDdhOTk1OTQzODIyZjc4NzU0ZDIwNTg3ZjdiNGY32AMA4AMA6AMA-AMCgAQAkgQGL3V0L3YzmAQAogQKMTAuMi4xMi4xMagEvZNwsgQQCAAQARisAiD6ASgAMAA4ArgEAMAEAMgEANIEEWRlZmF1bHQjRlJBMTozNzA42gQCCAHgBADwBL33iSeIBQGYBQCgBf___________wHABQDJBQBF_xTwP9IFCQkFC1QAAADYBQHgBQHwBQH6BQQIABAAkAYA%26s%3D4604caf2bd786775fa256dca81881be0f0bb9312%26referrer%3D;ts=1516361369;cet=0;cecb="), i.vid = B.apx, i.sr = r.apx, this.firePix.fireEB(g.i, i)
                    }
                    if (r.pix) {
                        var h = o ? "https:" : "http:";
                        e.push("".concat(h, "//q.adrta.com/s/tpl/aa.js?cb=[CACHEBUSTER]#tpl;paid=ss;") + "avid=[ADVERTISER_ID];caid=[CAMPAIGN_ID];publisherId=[PUBLISHER_ID];kv24=[SUPPLY_TYPE];divid=[DIV_ID]"), i.vid = B.pix, i.sr = r.pix, this.firePix.fireEB(g.i, i)
                    }
                    if (r.adl) {
                        var p = o ? "https:" : "http:";
                        e.push("".concat(p, "//j.adlooxtracking.com/ads/js/tfav_adl_321.js#platform=159") + "&scriptname=adl_321&tagid=874&typejs=tvaf&fwtype=2&creatype=2&targetelt=tlview_id=[TLVIEW_ID]&custom2area=0&custom2sec=0&id1=tlview_id=[TLVIEW_ID]&id2=&id3=&id4=&id5="), i.vid = B.adl, i.sr = r.adl, this.firePix.fireEB("tpvpx", i)
                    }
                    return e
                }
            }]), d
        }(),
        H = 0,
        Q = 1,
        G = 2,
        Y = 3,
        Z = 4,
        J = 6,
        qe = function() {
            function c(e, t) {
                var n = e.docInfo,
                    r = e.placement,
                    i = t.creative,
                    a = t.auctionIFRAMEWriterOverride,
                    o = t.firePix,
                    s = t.errorHandler;
                z()(this, c), p()(this, "firePix", void 0), p()(this, "auctionIFRAMEWriterOverride", void 0), p()(this, "macros", void 0), p()(this, "docInfo", void 0), p()(this, "placement", void 0), p()(this, "errorHandler", void 0), p()(this, "creative", void 0), p()(this, "creativeParams", void 0), p()(this, "shouldWaitForPassthru", !0), p()(this, "passthruClickTracker", null), p()(this, "passthruTimer", null), p()(this, "thirdPartyJS", null), p()(this, "hasBilled", !1), p()(this, "isCachedAppendJsEvent", !1), p()(this, "numClicks", 0), p()(this, "cachedTrackers", []), this.docInfo = n, this.placement = r, this.creative = i, this.creativeParams = i.getParams(), this.firePix = o, this.auctionIFRAMEWriterOverride = a, this.errorHandler = s
            }
            return v()(c, [{
                key: "passthru",
                value: function(e, t) {
                    this.shouldWaitForPassthru && (this.shouldWaitForPassthru = !1, clearTimeout(this.passthruTimer), this.passthruClickTracker = e, this.macros = "string" == typeof t ? JSON.parse(t) : t, this.fireAllCachedTrackers(), this.expandAllClickThroughMacros(), this.creativeParams.nob_passthru && this.creative.getVastTag() && this.macros && this.expandVastMacros())
                }
            }, {
                key: "expandTracker",
                value: function(e, t) {
                    if (t.__cdata) {
                        var n = t;
                        return n.__cdata = this._expandMacros(e, t.toString()), n
                    }
                    return this._expandMacros(e, t)
                }
            }, {
                key: "expandVastMacros",
                value: function() {
                    var t = this,
                        n = this.creative.getVastTag(),
                        r = this.macros;
                    try {
                        var i = {
                            impressions: n.getImpressionTrackers() || [],
                            mediaFiles: n.getVastMediaFiles() || [],
                            clickTrackers: n.getVideoClickTrackers() || [],
                            clickthrough: n.getVastClickThroughUrl() || [],
                            assortedTrackers: n.getAssortedTrackers() || []
                        };
                        Object.keys(i).forEach(function(e) {
                            Array.isArray(i[e]) ? i[e] = i[e].map(function(e) {
                                return t.expandTracker(r, e)
                            }) : i[e] = t.expandTracker(r, i[e])
                        })
                    } catch (e) {
                        this.firePix.fireDyn({
                            long1: 457,
                            string2: JSON.stringify(n.getVastWrapperBreadcrumbs())
                        }), this.errorHandler.fireError(e, Ee.a.ERROR_LEVELS.ERROR)
                    }
                }
            }, {
                key: "fireAllCachedTrackers",
                value: function() {
                    this.firePreviousClicks(), this.fireCachedTrackers(), this.fireCachedJs()
                }
            }, {
                key: "expandAllClickThroughMacros",
                value: function() {
                    var e, t = this,
                        n = "clickthrough_url";
                    this.creativeParams = Ie()({}, this.creativeParams, (e = {}, p()(e, n, this.expandClickThroughMacro(this.creativeParams)), p()(e, "allImages", this.creativeParams.allImages.map(function(e) {
                        return Ie()({}, e, p()({}, n, t.expandClickThroughMacro(e)))
                    })), e))
                }
            }, {
                key: "expandClickThroughMacro",
                value: function(e) {
                    var t = this._expandMacros(this.macros, e.origClickThroughUrl);
                    return this.creative.expandAndRedirectClickThrough(e, t)
                }
            }, {
                key: "fireCachedTrackers",
                value: function() {
                    var t = this;
                    this.cachedTrackers.map(function(e) {
                        return t._expandMacros(t.macros, e)
                    }).forEach(function(e) {
                        return t.firePix.fire(e)
                    })
                }
            }, {
                key: "fireCachedJs",
                value: function() {
                    this.isCachedAppendJsEvent && this.appendJs()
                }
            }, {
                key: "firePreviousClicks",
                value: function() {
                    for (var e = this._expandMacros(this.macros, this.passthruClickTracker), t = 0; t < this.numClicks; t++) this.firePix.fire(e)
                }
            }, {
                key: "billOrWait",
                value: function() {
                    var e = this.creativeParams.billable_event;
                    e && e !== H && e !== Q || this.bill()
                }
            }, {
                key: "bill",
                value: function() {
                    this.hasBilled || (this.hasBilled = !0, this.creativeParams.billable_pixel && this.firePix.fire(this.creativeParams.billable_pixel), this.creativeParams.nob_passthru ? this._startPassthruTimer() : (this.shouldWaitForPassthru = !1, this.fireAllCachedTrackers()), this.creativeParams.ad_markup && this.auctionIFRAMEWriterOverride.newWriter(this.creativeParams.ad_markup))
                }
            }, {
                key: "fire3pTracker",
                value: function(e) {
                    this.shouldWaitForPassthru ? this.cacheTracker(e) : this.firePix.fire(this._expandMacros(this.macros, e))
                }
            }, {
                key: "cacheTracker",
                value: function(e) {
                    this.cachedTrackers.push(e)
                }
            }, {
                key: "fireImpression",
                value: function() {
                    var t = this;
                    this.creativeParams.thirdPartyTrackers.impressionPixels.forEach(function(e) {
                        return t.fire3pTracker(e)
                    })
                }
            }, {
                key: "fireClick",
                value: function(e) {
                    this.numClicks++;
                    var t = (void 0 === e ? this.creativeParams : this.creativeParams.allImages[e]).thirdPartyTrackers.clickPixels;
                    this.passthruClickTracker && (t = t.concat([this.passthruClickTracker])), this.creativeParams.billable_event === Z && this.bill(), t.forEach(this.fire3pTracker.bind(this))
                }
            }, {
                key: "fireViewable",
                value: function() {
                    this.creativeParams.billable_event === G && this.bill(), this.creativeParams.thirdPartyTrackers.viewabilityPixels.forEach(this.fire3pTracker.bind(this))
                }
            }, {
                key: "fireOnePxViewable",
                value: function() {
                    this.creativeParams.billable_event === J && this.bill()
                }
            }, {
                key: "firePlay",
                value: function() {
                    this.creativeParams.billable_event === Y && this.bill()
                }
            }, {
                key: "appendJsOnPassthru",
                value: function(e, t) {
                    this.thirdPartyJS = new W({
                        docInfo: this.docInfo,
                        placement: this.placement,
                        mainImage: t,
                        adDIV: e,
                        tacticDetails: this.creativeParams.additional_data,
                        formatId: this.creativeParams.format_id
                    }, {
                        creative: this.creative,
                        firePix: this.firePix
                    }), this.shouldWaitForPassthru ? this.isCachedAppendJsEvent = !0 : this.appendJs()
                }
            }, {
                key: "appendJs",
                value: function() {
                    var t = this,
                        e = this.creativeParams.thirdPartyTrackers.jsTrackers || [];
                    this.thirdPartyJS.appendTags(e.map(function(e) {
                        return t._expandMacros(t.macros, e)
                    }))
                }
            }, {
                key: "_expandMacros",
                value: function(e, t) {
                    if (!e || !t) return t;
                    var r = t;
                    return Ze.a.forEachObj(e, function(e, t) {
                        var n = e;
                        n = "%" === e[0] && "{" === e[1] ? "$".concat(e.slice(1)) : "%" === e[0] && "[" === e[1] ? "{".concat(e.slice(2, e.length - 1), "}") : e[0] + e.slice(3, e.length), n = new RegExp(Ze.a.escapeRegExp(n), "g"), r = r.replace(n, t)
                    }), r
                }
            }, {
                key: "_startPassthruTimer",
                value: function() {
                    var e = this;
                    this.passthruTimer = setTimeout(function() {
                        e.errorHandler.fireError("Passthru invocation timed out", Ee.a.ERROR_LEVELS.ERROR)
                    }, 8e3)
                }
            }]), c
        }(),
        q = {},
        Xe = function() {
            function e() {
                z()(this, e), this.allRenderedAssets = q
            }
            return v()(e, [{
                key: "dispatchIfUnique",
                value: function(e, t, n, r) {
                    var i = e.adRendered,
                        a = e.defaultCode,
                        o = e.docInfo,
                        s = e.firePix,
                        c = e.hook,
                        u = e.pageInfo,
                        l = e.userSync,
                        d = e.serveDefault,
                        f = !1;
                    if (this.allRenderedAssets[n] = this.allRenderedAssets[n] || [], this._areAssetsUnique(n, r)) t(), this._trackAssets(n, r);
                    else {
                        var h = {
                            adRendered: i,
                            defaultCode: a,
                            docInfo: o,
                            firePix: s,
                            hook: c,
                            pageInfo: u,
                            userSync: l
                        };
                        f = d.serve(h, "redundant_asset")
                    }
                    return f
                }
            }, {
                key: "_areAssetsUnique",
                value: function(t, e) {
                    var n = this;
                    return e.every(function(e) {
                        return n._isAssetUnique(t, e)
                    })
                }
            }, {
                key: "_isAssetUnique",
                value: function(e, t) {
                    return !this.allRenderedAssets[e][t]
                }
            }, {
                key: "_trackAssets",
                value: function(t, e) {
                    var n = this;
                    e.forEach(function(e) {
                        return n._trackAsset(t, e)
                    })
                }
            }, {
                key: "_trackAsset",
                value: function(e, t) {
                    this.allRenderedAssets[e][t] = !0
                }
            }]), e
        }(),
        Ke = function() {
            function c(e, t) {
                var n = e.docInfo,
                    r = e.placement,
                    i = e.environment,
                    a = t.urlParams,
                    o = t.util,
                    s = t.gdprVendorConsentData;
                z()(this, c), this.window = n.topWindow, this.debugFlag = a.debugFlag, this.placement = r, this.environment = i, this.util = o, this.gdprVendorConsentData = s, this.tlSyncDone = !1, this.window._tlTagsPending = (this.window._tlTagsPending || 0) + 1, this.placement.customOptions.userSyncsDisabled && (this.tlSyncDone = !0)
            }
            return v()(c, [{
                key: "doSync",
                value: function() {
                    if (!this.tlSyncDone) {
                        this.tlSyncDone = !0;
                        var e = {},
                            t = this.placement.customOptions.maxUserSyncs;
                        t && (e.max = t), this.debugFlag && (e.debug = 1), this.gdprVendorConsentData && (e.gdpr = this.gdprVendorConsentData.gdprApplies, null !== this.gdprVendorConsentData.consentData && (e.cmp_cs = this.gdprVendorConsentData.consentData));
                        var n = Object(be.k)(this.environment.ebPath, "sync", e),
                            r = document.createElement("iframe");
                        this.util.iframeHide(r), r.src = n, document.body.appendChild(r)
                    }
                }
            }, {
                key: "doSyncIfAllDone",
                value: function() {
                    if (0 == --this.window._tlTagsPending)
                        if ("complete" === this.window.document.readyState) this.doSync();
                        else {
                            var e = this;
                            this.window.addEventListener("load", function() {
                                e.doSync()
                            }, !1)
                        }
                }
            }]), c
        }(),
        $e = function() {
            function o(e) {
                var t = e.docInfo,
                    n = e.positionService,
                    r = e.hook,
                    i = e.errorHandler,
                    a = e.placement;
                z()(this, o), this.document = t.document, this.window = t.window, this.positionService = n, this.placement = a, this.hook = r, this.errorHandler = i, this.listeners = [], this.listenerTimeoutId = 0
            }
            return v()(o, [{
                key: "getVbasElement",
                value: function(e) {
                    var t, n = this.placement.customOptions.vbasSelector;
                    return n && (t = this.getVbasElementBySelector(n)), t || (t = this.getVbasElementByDefault(e)), t
                }
            }, {
                key: "getVbasElementBySelector",
                value: function(e) {
                    var t, n = e.slice(0, 1),
                        r = e.slice(1);
                    if ("." === n ? t = document.getElementsByClassName(r)[0] : "#" === n && (t = document.getElementById(r)), !t) {
                        var i = 'element matching vbasSelector "'.concat(e, '" not found');
                        this.errorHandler.fireError(i, Ee.a.ERROR_LEVELS.WARNING)
                    }
                    return t
                }
            }, {
                key: "getVbasElementByDefault",
                value: function(e) {
                    for (var t = e; !t.offsetTop && (t.previousElementSibling || t.parentElement);) t = t.previousElementSibling || t.parentElement;
                    return t
                }
            }, {
                key: "vbasStart",
                value: function(e) {
                    var t = this.getVbasElement(this.hook);
                    this.listenForNearView(t, e)
                }
            }, {
                key: "listenForNearView",
                value: function(t, e) {
                    var n = this;
                    this.setListener({
                        handler: e,
                        condition: function() {
                            var e = n.positionService.getClientDims().height;
                            return n.positionService.getBoundingRect(t).top <= e + 200
                        }
                    })
                }
            }, {
                key: "listenForPercentageAdViewability",
                value: function(e, t) {
                    var n = this,
                        r = this.getRequiredPct(e),
                        i = 0;
                    this.setListener({
                        handler: t,
                        condition: function() {
                            var e = 0 !== i;
                            if (e && 1e3 <= Date.now() - i) return !0;
                            var t = n.positionService.getAdPctInView() >= r;
                            return t && !e ? i = Date.now() : !t && i && (i = 0), !1
                        }
                    })
                }
            }, {
                key: "listenForOnePxAdViewability",
                value: function(e) {
                    var t = this;
                    this.setListener({
                        handler: e,
                        condition: function() {
                            return 0 < t.positionService.getAdPctInView()
                        }
                    })
                }
            }, {
                key: "getRequiredPct",
                value: function(e) {
                    return 242500 <= e.clientWidth * e.clientHeight ? .3 : .5
                }
            }, {
                key: "setListener",
                value: function(e) {
                    this.listeners.push(e), this.listen()
                }
            }, {
                key: "listen",
                value: function() {
                    var t = this;
                    if (!(0 < this.listenerTimeoutId)) {
                        this.listenerTimeoutId = setTimeout(function e() {
                            t.listeners = t.listeners.filter(function(e) {
                                return !e.condition() || (e.handler(), !1)
                            }), 0 < t.listeners.length ? t.listenerTimeoutId = setTimeout(e, 100) : t.listenerTimeoutId = 0
                        }, 100)
                    }
                }
            }]), o
        }(),
        et = function() {
            function s(e, t) {
                var n = e.ttjStartTime,
                    r = void 0 === n ? 0 : n,
                    i = e.revision,
                    a = e.isTestEnv,
                    o = t.firePix;
                z()(this, s), this.ttjStartTime = r, this.revision = i, this.firePix = o, this.formatId = null, this.isHeaderBidding = !1, this.shouldLog = 0 < r && !a && Math.random() <= .01
            }
            return v()(s, [{
                key: "log",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Date.now();
                    if (this.shouldLog) {
                        var n = t - this.ttjStartTime,
                            r = {
                                string2: this.revision,
                                string3: this.isHeaderBidding ? "header".concat(e.replace(/^./, function(e) {
                                    return e.toUpperCase()
                                })) : e,
                                long1: 60003,
                                long2: n,
                                long3: this.formatId
                            };
                        this.firePix.fireDyn(r)
                    }
                }
            }, {
                key: "setFormatId",
                value: function(e) {
                    this.formatId = e
                }
            }, {
                key: "setIsHeaderBidding",
                value: function(e) {
                    this.isHeaderBidding = e
                }
            }]), s
        }();
    p()(et, "BUNDLE_LOAD_TIME", "bundleLoadTime"), p()(et, "AUCTION_START", "auctionStart"), p()(et, "AUCTION_RESPONSE", "auctionResponse"), p()(et, "RENDER", "render"), p()(et, "AD_ON_PAGE", "adOnPage");
    var X = function(e, t) {
            var n = parseInt(t, 10),
                r = e;
            if (!e || !n || n < 3) return e;
            var i, a, o, s, c, u, l, d, f = e.match(/(.*)(<a.*>)(.*)(<\/a>)(.*)/);
            return f ? (a = n, o = (i = f)[1], s = i[2], c = i[3], u = i[4], l = i[5], (d = o.length + c.length + l.length - a + 3) <= 3 || (l = d <= l.length ? "".concat(l.substr(0, l.length - d), "...") : d <= l.length + c.length ? (d -= l.length, c = "".concat(c.substr(0, c.length - d), "..."), "") : (d -= l.length + c.length, o = "".concat(o.substr(0, o.length - d), "..."), u = c = s = "")), o + s + c + u + l) : (n < e.length && (r = "".concat(e.substr(0, n - 3), "...")), r)
        },
        K = function(e, t, n) {
            return n && e && e.toLowerCase() === t ? n : e
        },
        $ = function() {
            function l(e) {
                var t = e.creativePayload,
                    n = e.environment,
                    r = e.placement,
                    i = e.pageInfo,
                    a = e.isSmallScreen,
                    o = e.clickTrackerDTJ,
                    s = e.debug,
                    c = e.templateDetail,
                    u = e.tlImageId;
                z()(this, l), p()(this, "params", null), p()(this, "creativePayload", null), p()(this, "formatId", null), p()(this, "environment", null), p()(this, "placement", null), p()(this, "isSmallScreen", null), p()(this, "clickTrackerDTJ", null), p()(this, "pageInfo", null), p()(this, "debug", !1), this.creativePayload = t, this.formatId = t.settings.format_id, this.environment = n, this.placement = r, this.isSmallScreen = a, this.clickTrackerDTJ = o, this.pageInfo = i, this.debug = s, this.templateDetail = c, this.tlImageId = u, this.params = null, this.initParams()
            }
            return v()(l, [{
                key: "initParams",
                value: function() {
                    var t = this,
                        e = this.creativePayload.assets;
                    e = (e = (e = e.map(function(e) {
                        return t.processClickThroughUrl(e)
                    })).map(function(e) {
                        return t._appendThirdPartyTrackers(e)
                    })).map(function(e) {
                        return function(e, t) {
                            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 100,
                                r = {
                                    caption: X(e.caption, t),
                                    heading: X(e.heading, n)
                                };
                            return Object.assign({}, e, r)
                        }(e, t.placement.captionCharacterLimit, t.placement.headingCharacterLimit)
                    }), this.params = this.makeParams(e)
                }
            }, {
                key: "makeParams",
                value: function(e) {
                    var t, n, r, i, a, o, s, c, u, l = (n = e, (r = this.tlImageId) && n.find(function(e) {
                            return r === e.image_id
                        }) || null || (t = e)[Math.floor(Math.random() * t.length)]),
                        d = Ie()({}, this.creativePayload.settings, l);
                    d.allImages = e, d.heading = this._getHeading(d), d.caption = this._getCaption(d), d.isCSR = (i = d.client_side_render, a = d.image_id, i || +a < 0), d.adchoices_url = (o = d.adchoices_url, s = Ee.a.DEFAULT_ADCHOICES_URL, Object(be.h)(o) || s), d.logo_image_url = (u = (c = d).logo_image_url || c.light_logo_url, Object(be.h)(u)), d.render_options_bm = d.render_options_bm || 0, d.orig_image_url = d.image_url;
                    var f = this._getProcessedImageUrlAndSrcSet(d, this.templateDetail),
                        h = f.processedImageUrl,
                        p = f.srcSet;
                    return d.image_url = h, d.image_srcset_2x = p, d
                }
            }, {
                key: "_getHeading",
                value: function(e) {
                    var t = this.placement.customOptions.defaultHeadingOverride;
                    return K(e.heading, "sponsored video", t)
                }
            }, {
                key: "_getCaption",
                value: function(e) {
                    var t = this.placement.customOptions.defaultCaptionOverride;
                    return K(e.caption, "watch to learn more", t)
                }
            }, {
                key: "doesFormatUseTemplateImgTag",
                value: function() {
                    return -1 < [this.environment.formats.image, this.environment.formats.video].indexOf(this.formatId)
                }
            }, {
                key: "_getProcessedImageUrlAndSrcSet",
                value: function(e, t) {
                    var n = null,
                        r = null;
                    if (this.formatId === this.environment.formats.cinemagraph) n = this._determineAnimatedUrl(e);
                    else if (e.image_url && this.doesFormatUseTemplateImgTag())
                        if (e.isCSR) n = e.image_url;
                        else {
                            var i = {
                                url: e.orig_image_url,
                                imgServerParams: e.img_server_params,
                                tlImgAddr: this.environment.tlImageAddr,
                                placementWidth: this.placement.imageWidth,
                                placementHeight: this.placement.imageHeight,
                                logoBlackList: this.placement.logoBlackList,
                                noLogo: e.customization && e.customization.reveal,
                                templateDetail: t
                            };
                            n = this.createDynamicImageURL(i), r = this._createImageSrcset(Ie()({}, i, {
                                placementWidth: 2 * this.placement.imageWidth,
                                placementHeight: 2 * this.placement.imageHeight
                            }))
                        }
                    else n = Ee.a.TINY_IMG_DATA;
                    return {
                        processedImageUrl: n,
                        srcSet: r
                    }
                }
            }, {
                key: "expandAndRedirectClickThrough",
                value: function(e) {
                    var t = e.origClickThroughUrl;
                    if (!t) return t;
                    var n, r, i, a, o, s = e.asset_id || this.creativePayload.settings.asset_id,
                        c = this.creativePayload.settings.additional_data.tid,
                        u = this.creativePayload.settings.additional_data.uid,
                        l = this.expandFirstPartyMacros(c, s, this.clickTrackerDTJ);
                    return t = this.expandFirstPartyMacros(c, s, t), r = t, t = (n = l) ? decodeURIComponent(n) + encodeURIComponent(r) : r, i = u, a = this.environment.ebPath, o = ["tl_clickthrough=true", "redir=".concat(encodeURIComponent(t))], i && o.push("tluid=".concat(encodeURIComponent(i))), t = Object(be.a)("//".concat(a, "/pass?").concat(o.join("&")))
                }
            }, {
                key: "processClickThroughUrl",
                value: function(e) {
                    var t = e,
                        n = t.clickthrough_url || this.creativePayload.settings.clickthrough_url;
                    return (t.origClickThroughUrl = n) && (t.clickthrough_url = this.expandAndRedirectClickThrough(t)), t
                }
            }, {
                key: "expandFirstPartyMacros",
                value: function(e, t, n) {
                    if (!n) return null;
                    var r = n,
                        i = this.pageInfo.get().ref,
                        a = Object(be.p)(i).host;
                    return r = (r = (r = (r = (r = (r = (r = (r = (r = (r = r.replace(/\[domain]/gi, a)).replace(/\[placement_id]/gi, this.placement.id)).replace(/\[campaign]/gi, e)).replace(/\[ad]/gi, t)).replace(/\[timestamp]/gi, (new Date).getTime())).replace(/%time%/gi, (new Date).getTime())).replace(/\[cachebuster]/gi, Object(be.r)(1e10))).replace(/\[random_number]/gi, Object(be.r)(1e10))).replace(/\${cachebuster}/gi, Object(be.r)(1e10))).replace(/{isfallback}/gi, this.creativePayload.settings.isFallbackAssets)
                }
            }, {
                key: "createDynamicImageURL",
                value: function(e) {
                    var t = e.url,
                        n = e.tlImgAddr,
                        r = e.placementWidth,
                        i = e.placementHeight,
                        a = e.imgServerParams || "",
                        o = e.logoBlackList || "";
                    e.noLogo && (a = Ze.a.removeQueryStringParam(a, "lp"), o = "NW,NE,SE,SW");
                    var s = [],
                        c = this.templateDetail.width || ("0" === r ? NaN : r),
                        u = this.templateDetail.height || ("0" === i ? NaN : i);
                    return s.push("width=".concat(c)), s.push("height=".concat(u)), s.push("url=".concat(encodeURIComponent(t))), s.push("logo_exclude=".concat(o)), Object(be.a)("//".concat(n, "/?").concat(s.join("&"), "&").concat(a))
                }
            }, {
                key: "createAllDynamicImageURLS",
                value: function(t) {
                    var n = this,
                        r = this.placement.imageWidth,
                        i = this.placement.imageHeight;
                    return this.params.allImages.map(function(e) {
                        return n.createDynamicImageURL({
                            url: e.image_url,
                            imgServerParams: e.img_server_params,
                            noLogo: t,
                            tlImgAddr: n.environment.tlImageAddr,
                            placementHeight: i,
                            placementWidth: r,
                            logoBlackList: "SE,SW,NW"
                        })
                    })
                }
            }, {
                key: "isBanner",
                value: function() {
                    return this.formatId === this.environment.formats.header_direct_banner
                }
            }, {
                key: "isCarousel",
                value: function() {
                    return this.formatId === this.environment.formats.carousel
                }
            }, {
                key: "isImage",
                value: function() {
                    return this.formatId === this.environment.formats.image
                }
            }, {
                key: "isCinemagraph",
                value: function() {
                    return this.formatId === this.environment.formats.cinemagraph
                }
            }, {
                key: "isScroll",
                value: function() {
                    return this.formatId === this.environment.formats.scroll
                }
            }, {
                key: "isWindow",
                value: function() {
                    return this.formatId === this.environment.formats.skylight
                }
            }, {
                key: "isPharma",
                value: function() {
                    return this.formatId === this.environment.formats.pharma
                }
            }, {
                key: "isVast",
                value: function() {
                    return !1
                }
            }, {
                key: "isAutoplay",
                value: function() {
                    return !1
                }
            }, {
                key: "isAdChoicesOptOut",
                value: function() {
                    var e = this.params.render_options_bm,
                        t = this.environment.renderOptionsMap;
                    return !!Object(be.d)(e, t.adchoices_opt_out)
                }
            }, {
                key: "shouldVideoPauseOutOfView",
                value: function() {
                    var e = this.params.render_options_bm,
                        t = this.environment.renderOptionsMap,
                        n = this.placement.customOptions.disableOutstreamVideoBehavior,
                        r = Object(be.d)(e, t.video_pause_out_view);
                    return n || r
                }
            }, {
                key: "getParams",
                value: function() {
                    return this.params
                }
            }, {
                key: "getBaseZIndex",
                value: function() {
                    return Ee.a.BASE_Z_INDEX
                }
            }, {
                key: "getVastTag",
                value: function() {
                    return null
                }
            }, {
                key: "needsViewabilityAwareness",
                value: function() {
                    return this.isScroll() || this.isWindow()
                }
            }, {
                key: "hasClickThrough",
                value: function() {
                    return !!this.params.clickthrough_url
                }
            }, {
                key: "_appendThirdPartyTrackers",
                value: function(e) {
                    var t = this.creativePayload.settings,
                        n = e.clickthrough_pixels || t.clickthrough_pixels || [],
                        r = e.viewability_pixels || t.viewability_pixels || [],
                        i = e.js_trackers || t.js_trackers || [],
                        a = e.impression_pixels || t.impression_pixels || [],
                        o = this._getClickTracker(e);
                    o && n.push(o);
                    var s = e.third_party_duplicate_rate || t.third_party_duplicate_rate;
                    s && Math.random() < s && (a = function(e) {
                        if (!e) return [];
                        for (var t = e.slice(), n = 0; n < t.length; n++) - 1 < t[n].indexOf("?") ? t[n] += "&tlcb=${CACHEBUSTER}" : t[n] += "?tlcb=${CACHEBUSTER}";
                        return e.concat(t)
                    }(a));
                    var c = t.additional_data.tid,
                        u = e.asset_id || t.asset_id,
                        l = this.expandFirstPartyMacros.bind(this, c, u),
                        d = {
                            impressionPixels: a.map(l),
                            clickPixels: n.map(l),
                            viewabilityPixels: r.map(l),
                            jsTrackers: i.map(l)
                        };
                    return Object.assign(e, {
                        thirdPartyTrackers: d
                    })
                }
            }, {
                key: "_determineAnimatedUrl",
                value: function(e) {
                    if (!e.animation_variants || !e.animation_variants.length || this.debug) return e.image_url;
                    var t, n = e.animation_variants,
                        r = 100 * Math.round((this.placement.imageWidth + 100) / 100),
                        i = r && -1 < n.indexOf(r);
                    if (!i && this.isSmallScreen && (r = Math.max.apply(null, n), i = !0), i) {
                        var a = Math.round(e.image_height / e.image_width * r);
                        Object.assign(e, {
                            focal_box: function(e, t, n) {
                                var r = e.focalBox,
                                    i = {};
                                if (!r) return null;
                                var a = function(e, t, n) {
                                    return Math.round(e / t * n)
                                };
                                return i.x1 = a(r.x1, e.image_width, t), i.x2 = a(r.x2, e.image_width, t), i.y1 = a(r.y1, e.image_height, n), i.y2 = a(r.y2, e.image_height, n), i
                            }(e, r, a)
                        }, {
                            image_width: r,
                            image_height: a
                        }), t = e.image_url.replace(".gif", "_a".concat(r, ".gif"))
                    } else t = e.image_url;
                    return t
                }
            }, {
                key: "_createImageSrcset",
                value: function(e) {
                    return "".concat(this.createDynamicImageURL(e), " 2x")
                }
            }, {
                key: "_getClickTracker",
                value: function(e) {
                    var t, n;
                    return (n = e.click_tracker_url ? (t = e.click_tracker_encoding_level, e.click_tracker_url) : (t = this.creativePayload.settings.click_tracker_encoding_level, this.creativePayload.settings.click_tracker_url)) ? function(e, t) {
                        var n = parseInt(t, 10),
                            r = e;
                        for (isNaN(n) && (n = 1); n--;) r = encodeURIComponent(r);
                        return r
                    }(n, t) : n
                }
            }]), l
        }(),
        ee = u(48),
        te = u.n(ee),
        ne = u(26),
        re = u.n(ne),
        ie = u(63),
        ae = u.n(ie),
        oe = u(49),
        se = u.n(oe),
        ce = function(e) {
            function t() {
                return z()(this, t), te()(this, re()(t).apply(this, arguments))
            }
            return se()(t, e), v()(t, [{
                key: "initParams",
                value: function() {
                    ae()(re()(t.prototype), "initParams", this).call(this), this._setAllImages()
                }
            }, {
                key: "getAllImages",
                value: function() {
                    return this.allImages
                }
            }, {
                key: "getAllDynamicImageURLS",
                value: function(t) {
                    var n = this,
                        r = this.placement.imageWidth,
                        i = this.placement.imageHeight;
                    return this.allImages.map(function(e) {
                        return n.createDynamicImageURL({
                            url: e.image_url,
                            imgServerParams: e.img_server_params,
                            noLogo: t,
                            tlImgAddr: n.environment.tlImageAddr,
                            placementHeight: i,
                            placementWidth: r,
                            logoBlackList: "SE,SW,NW"
                        })
                    })
                }
            }, {
                key: "_setAllImages",
                value: function() {
                    this.allImages = Ze.a.chooseN(this.params.allImages, 10)
                }
            }]), t
        }($),
        ue = u(86),
        le = function(e) {
            function n(e) {
                var t;
                return z()(this, n), (t = te()(this, re()(n).call(this, e))).vastTag = null, t
            }
            return se()(n, e), v()(n, [{
                key: "getVastTag",
                value: function() {
                    return this.vastTag
                }
            }, {
                key: "setVastTag",
                value: function(e) {
                    this.vastTag = e
                }
            }, {
                key: "isVast",
                value: function() {
                    return !0
                }
            }, {
                key: "isAutoplay",
                value: function() {
                    var e = this.environment.formats;
                    return +this.formatId == +e.autoplay || +this.formatId == +e.outstream_video
                }
            }, {
                key: "getBaseZIndex",
                value: function() {
                    return this.placement.customOptions.videoZIndexOverride || ue.b.componentZIndex
                }
            }, {
                key: "needsViewabilityAwareness",
                value: function() {
                    return this.isAutoplay()
                }
            }, {
                key: "allowVpaidToHandleClicks",
                value: function() {
                    return !(!this.vastTag.isVpaid() || !this.isAutoplay() || this.hasClickThrough())
                }
            }, {
                key: "hasClickThrough",
                value: function() {
                    return !(!ae()(re()(n.prototype), "hasClickThrough", this).call(this) && !this.vastTag.getVastClickThroughUrl())
                }
            }]), n
        }($),
        tt = function() {
            function e() {
                z()(this, e)
            }
            return v()(e, null, [{
                key: "create",
                value: function(e) {
                    var t = e.creativePayload,
                        n = e.environment,
                        r = t.settings.format_id,
                        i = n.formats,
                        a = [i.video, i.autoplay, i.outstream_video];
                    return r === i.carousel ? new ce(e) : a.includes(r) ? new le(e) : new $(e)
                }
            }]), e
        }(),
        de = {
            assets: [{
                asset_id: 0,
                image_id: 0,
                image_url: "https://images.3lift.com/5333898.jpg",
                image_w_over_h: 1.7778,
                clickthrough_url: "http://www.doubleverify.com",
                heading: "",
                caption: "",
                cv_version: 1,
                img_server_params: "v=0&cv_version=1"
            }],
            settings: {
                format_id: 1,
                tactic_id: 0,
                line_item_id: 0,
                insertion_order_id: 0,
                creative_library_id: 0,
                advertiser_name: "Sponsor",
                additional_data: {
                    clid: 0,
                    ioid: 0,
                    liid: 0,
                    tid: 0,
                    advid: 0,
                    bmid: 0,
                    aid: 1
                }
            }
        },
        fe = "allowCreative",
        he = "blockCreative",
        nt = function() {
            function r(e, t) {
                var n = t.errorHandler;
                z()(this, r), this.creativePayload = e, this.iframe = this._makeIframe(), this.errorHandler = n
            }
            return v()(r, [{
                key: "callDV",
                value: function() {
                    var t = this,
                        e = this._makeScriptsString();
                    return this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(e), this.iframe.contentWindow.document.close(), this._handler().catch(function(e) {
                        return t._onError(e, Ee.a.ERROR_LEVELS.ERROR), t._overwriteCreativePayloadWithPSA()
                    })
                }
            }, {
                key: "_handler",
                value: function() {
                    var n = this;
                    return new Promise(function(e, t) {
                        n.iframe.contentWindow.onerror = function(e) {
                            t(e)
                        }, setTimeout(function() {
                            t(new Ce.a("DoubleVerify timeout"))
                        }, 1e4), n.iframe.contentWindow[he] = function() {
                            n._overwriteCreativePayloadWithPSA(), e()
                        }, n.iframe.contentWindow[fe] = e
                    })
                }
            }, {
                key: "_onError",
                value: function(e, t) {
                    this.errorHandler.fireError(e, t)
                }
            }, {
                key: "_overwriteCreativePayloadWithPSA",
                value: function() {
                    this.creativePayload.settings = de.settings, this.creativePayload.assets = de.assets
                }
            }, {
                key: "_makeIframe",
                value: function() {
                    var e = document.createElement("iframe");
                    return e.style.display = "none", document.body.appendChild(e), e
                }
            }, {
                key: "_makeScriptsString",
                value: function() {
                    var e = this.creativePayload.settings.dco_tag_url;
                    return '\n      <script type="text/adtag"><script type="text/javascript">'.concat(fe, '();</scr+ipt><\/script>\n      <script type="text/passback"><script type="text/javascript">').concat(he, '();</scr+ipt><\/script>\n      <script onerror="(function(el){el.onerror=\'this._onerror})(this)" type="text/javascript" src="').concat(e, '"><\/script>\n    ')
                }
            }]), r
        }(),
        pe = "getConsentData",
        rt = function() {
            function t(e) {
                z()(this, t), this.win = e, this.handleGetConsentDataResponse = this.handleGetConsentDataResponse.bind(this), this.getConsentDataFromCmp = this.getConsentDataFromCmp.bind(this), this.handleTimeout = this.handleTimeout.bind(this), this.isVendorConsentDataValid = this.isVendorConsentDataValid.bind(this), this.getConsentData = this.getConsentData.bind(this)
            }
            var e, n;
            return v()(t, [{
                key: "getConsentData",
                value: (n = we()(Ae.a.mark(function e() {
                    return Ae.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof this.win.__cmp) throw new Ce.a("There is no available __cmp api", Ee.a.ERROR_LEVELS.LOG);
                                e.next = 2;
                                break;
                            case 2:
                                return e.abrupt("return", this.getConsentDataFromCmp());
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "getConsentDataFromCmp",
                value: (e = we()(Ae.a.mark(function e() {
                    var n, r = this;
                    return Ae.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, new Promise(function(e, t) {
                                    n = setTimeout(function() {
                                        return r.handleTimeout(t)
                                    }, 1e3), r.win.__cmp(pe, null, r.handleGetConsentDataResponse(e))
                                });
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                throw e.prev = 6, e.t0 = e.catch(0), new Ce.a("There was an error in the publisher __cmp API: ".concat(e.t0.message ? e.t0.message : e.t0), Ee.a.ERROR_LEVELS.LOG);
                            case 9:
                                return e.prev = 9, clearTimeout(n), e.finish(9);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }, e, null, [
                        [0, 6, 9, 12]
                    ])
                })), function() {
                    return e.apply(this, arguments)
                })
            }, {
                key: "handleGetConsentDataResponse",
                value: function(t) {
                    var n = this;
                    return function(e) {
                        if (!n.isVendorConsentDataValid(e)) throw new Ce.a("__cmp ".concat(pe, " command did not return a valid vendorConsent object"), Ee.a.ERROR_LEVELS.LOG);
                        return t(e)
                    }
                }
            }, {
                key: "handleTimeout",
                value: function(e) {
                    e(new Ce.a("__cmp ".concat(pe, " timeout"), Ee.a.ERROR_LEVELS.LOG))
                }
            }, {
                key: "isVendorConsentDataValid",
                value: function(e) {
                    return "object" === y()(e) && "boolean" == typeof e.gdprApplies && ("string" == typeof e.consentData || null === e.consentData)
                }
            }]), t
        }(),
        ge = (u(154), 0),
        ve = 1,
        me = 2,
        ye = 3,
        _e = 4,
        it = 5,
        at = 6,
        ot = 7,
        st = [ge, ot, ve, _e, at, ye],
        ct = [ge, ve, ot],
        ut = [ge, ot, ve, _e, at, it, ye],
        lt = [it, me, _e, at, ye],
        dt = function() {
            function r(e) {
                var t = e.docInfo,
                    n = e.placement;
                z()(this, r), this.docInfo = t, this.placement = n, this.cachedApis = {}, this.cachedPageInfo = null, this.cachedFrameType = null
            }
            return v()(r, [{
                key: "get",
                value: function() {
                    return this.cachedPageInfo || (this.docInfo.canAccessTop ? (t = "undefined" === (t = Object(be.p)(this.docInfo.topDocument.referrer).host) ? "" : t, e = this.docInfo.topDocument.URL) : (t = "can't access top document", this.placement.customOptions.isAmp ? e = this.getAmpReferrer() : (e = this.docInfo.document.referrer, (n = this.placement.customOptions.referrerOverride) && 0 <= n.indexOf(Object(be.p)(e).host) && (e = document.URL))), e = Ze.a.truncateUrl(e, 600), this.cachedPageInfo = {
                        domain: this.docInfo.document.domain,
                        ref: e,
                        pr: t || "un"
                    }), this.cachedPageInfo;
                    var e, t, n
                }
            }, {
                key: "getAmpReferrer",
                value: function() {
                    var t, e = Object(be.p)(this.docInfo.document.URL);
                    try {
                        t = JSON.parse(e.anchor)
                    } catch (e) {
                        t = {}
                    }
                    var n = Object(be.p)(this.docInfo.document.referrer),
                        r = Ze.a.objMerge(e.queryKey, n.queryKey);
                    return (r = Ze.a.objMerge(r, t)).url ? decodeURIComponent(r.url) : r._context && r._context.canonicalUrl ? r._context.canonicalUrl : r.top ? decodeURIComponent(r.top) : r.loc ? decodeURIComponent(r.loc) : r.iu ? decodeURIComponent(r.iu) : this.docInfo.document.referrer
                }
            }, {
                key: "getFrameType",
                value: function() {
                    return null !== this.cachedFrameType || (this.cachedFrameType = this._determineFrameType()), this.cachedFrameType
                }
            }, {
                key: "_determineFrameType",
                value: function() {
                    return this.getAmpApi() ? _e : this.getMraidApi() ? at : this.getSafeFrameApi() ? it : Object(be.i)() ? ye : this.docInfo.canAccessTop ? this.docInfo.document === this.docInfo.topWindow.document ? ge : this.placement.customOptions.friendlyIframeRender ? ot : ve : me
                }
            }, {
                key: "isNoFrame",
                value: function() {
                    return this.getFrameType() === ge
                }
            }, {
                key: "isUnfriendlyFrame",
                value: function() {
                    return this.getFrameType() === me
                }
            }, {
                key: "isFriendlyFrame",
                value: function() {
                    return this.getFrameType() === ve
                }
            }, {
                key: "isFriendlyFrameRender",
                value: function() {
                    return this.getFrameType() === ot
                }
            }, {
                key: "isClientAware",
                value: function() {
                    return -1 < st.indexOf(this.getFrameType())
                }
            }, {
                key: "isPositionAware",
                value: function() {
                    return -1 < ct.indexOf(this.getFrameType())
                }
            }, {
                key: "isViewabilityAware",
                value: function() {
                    return -1 < ut.indexOf(this.getFrameType())
                }
            }, {
                key: "isSandboxed",
                value: function() {
                    return -1 < lt.indexOf(this.getFrameType())
                }
            }, {
                key: "isAmp",
                value: function() {
                    return this.getFrameType() === _e
                }
            }, {
                key: "isWebview",
                value: function() {
                    return this.getFrameType() === ye
                }
            }, {
                key: "isMraid",
                value: function() {
                    return this.getFrameType() === at
                }
            }, {
                key: "isSafeFrame",
                value: function() {
                    return this.getFrameType() === it
                }
            }, {
                key: "getSafeFrameApi",
                value: function() {
                    var e = this._getApi("$sf");
                    return e && e.ext ? e : null
                }
            }, {
                key: "getAmpApi",
                value: function() {
                    var e = this._getApi("context");
                    return e && e.observeIntersection ? e : null
                }
            }, {
                key: "getMraidApi",
                value: function() {
                    return this._getApi("mraid")
                }
            }, {
                key: "_getApi",
                value: function(e) {
                    return void 0 === this.cachedApis[e] && (this.cachedApis[e] = this._findApi(e, this.docInfo.window)), this.cachedApis[e]
                }
            }, {
                key: "_findApi",
                value: function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                    if (5 <= n) return null;
                    try {
                        if (t[e]) return t[e]
                    } catch (e) {
                        return null
                    }
                    return this._findApi(e, t.parent, n + 1)
                }
            }]), r
        }(),
        ft = function(t, e) {
            return t = t || {}, {
                setAdContainer: function(e) {
                    t.adContainer = e
                },
                getElDims: function(e) {
                    if (!e) throw new Ce.a("getElDims: no element present");
                    var t = e.getBoundingClientRect();
                    return {
                        width: t.width,
                        height: t.height
                    }
                },
                _publishUpdate: function() {
                    e.publish(Te.x)
                }
            }
        };
    var ht = {
        getRectPctInView: function(e, t) {
            var n = t.width,
                r = t.height,
                i = e.width,
                a = e.height,
                o = i * a,
                s = i + Math.min(0, e.left) + Math.min(0, n - e.right),
                c = a + Math.min(0, e.top) + Math.min(0, r - e.bottom),
                u = s * c;
            return Math.max(0, u / o)
        },
        getDefaultBoundingClientRect: function() {
            return {
                width: 0,
                height: 0,
                x: 0,
                y: 0,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            }
        },
        sumRects: function(e, t) {
            return {
                width: e.width,
                height: e.height,
                x: e.x + t.x,
                y: e.y + t.y,
                top: e.top + t.top,
                bottom: e.bottom + t.top,
                left: e.left + t.left,
                right: e.right + t.left
            }
        }
    };
    var pt = function(e, t) {
        var n = {
                getAdBoundingRect: i,
                getBoundingRect: a,
                getClientDims: o,
                getAdPctInView: function() {
                    return ht.getRectPctInView(i(), o())
                },
                getElPctInView: function(e) {
                    return ht.getRectPctInView(a(e), o())
                }
            },
            r = ft(n, t);
        return e.util.addScrollListener(e.win, r._publishUpdate), Object(be.c)({}, r, n);

        function i() {
            return n.adContainer.getBoundingClientRect()
        }

        function a(e) {
            return e.getBoundingClientRect()
        }

        function o() {
            return {
                width: e.win.innerWidth,
                height: e.win.innerHeight
            }
        }
    };
    var gt = function() {
        var n = {
                width: 0,
                height: 0
            },
            r = ht.getDefaultBoundingClientRect();
        return {
            getAdBoundingRect: e,
            getBoundingRect: t,
            getClientDims: i,
            getAdPctInView: function() {
                return ht.getRectPctInView(e(), i())
            },
            getElPctInView: function(e) {
                return ht.getRectPctInView(t(e), i())
            },
            _update: function(e, t) {
                r = e, n = t
            }
        };

        function e() {
            return r
        }

        function t(e) {
            var t = e.getBoundingClientRect();
            return r ? ht.sumRects(t, r) : t
        }

        function i() {
            return n
        }
    };
    var vt = function(e, t) {
            var o = ft({}, t),
                s = gt();
            return e.win._tlWebViewUpdatePosition = function(e, t) {
                var n, r, i, a;
                (r = t, (n = e) && r && (a = s.getAdBoundingRect(), !c(mt, a, n) || (i = s.getClientDims(), !c(yt, i, r)))) && (s._update(e, t), o._publishUpdate())
            }, Object(be.c)({}, o, s);

            function c(e, t, n) {
                return !e.some(function(e) {
                    return t[e] !== n[e]
                })
            }
        },
        mt = ["width", "height", "x", "y", "top", "bottom", "left", "right"],
        yt = ["width", "height"];
    var _t = function(e, t) {
        var n = ft({}, t),
            r = gt();
        return e.pageInfo.getAmpApi().observeIntersection(function(e) {
            e.forEach(function(e) {
                var t = {
                    width: e.rootBounds.width,
                    height: e.rootBounds.height
                };
                r._update(e.boundingClientRect, t), n._publishUpdate()
            })
        }), Object(be.c)({}, n, r)
    };
    var It = function(e) {
            var h = e.pageInfo.getMraidApi(),
                p = e.errorHandler;
            return Object.keys(At).reduce(function(e, t) {
                var n = h[t],
                    r = At[t];
                r.validator && (i = h, a = n, o = r.validator, n = function() {
                    var e = a.apply(i, arguments),
                        t = o(e);
                    if (!t) throw new Ce.a("validation failed");
                    return e
                });
                var i, a, o;
                return s = h, c = n, u = t, l = r.defaultReturn, d = Object(be.f)(p.fireError, p), f = "mraid api error. function: ".concat(u, ", e: "), n = function() {
                    var t;
                    try {
                        t = c.apply(s, arguments)
                    } catch (e) {
                        d(f + e, "mraid"), t = l
                    }
                    return t
                }, e[t] = n, e;
                var s, c, u, l, d, f
            }, {})
        },
        At = {
            getState: {
                validator: function(e) {
                    return "string" == typeof e
                },
                defaultReturn: "default"
            },
            isViewable: {
                validator: function(e) {
                    return "boolean" == typeof e
                },
                defaultReturn: !1
            },
            getCurrentPosition: {
                validator: function(e) {
                    return "number" == typeof e.width && "number" == typeof e.height && "number" == typeof e.x && "number" == typeof e.y
                },
                defaultReturn: {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                }
            },
            getScreenSize: {
                validator: function(e) {
                    return "number" == typeof e.width && "number" == typeof e.height
                },
                defaultReturn: {
                    width: 0,
                    height: 0
                }
            },
            addEventListener: {}
        };
    var wt = function(e, t) {
            var n, r = It(e),
                i = ft({}, t),
                a = gt();
            "loading" === r.getState() ? r.addEventListener("ready", o) : o();
            return Object(be.c)({}, i, a);

            function o() {
                r.addEventListener("viewableChange", s)
            }

            function s(e) {
                c(), e ? n = setInterval(c, bt) : clearInterval(n)
            }

            function c() {
                var e = r.getCurrentPosition(),
                    t = r.getScreenSize(),
                    n = {
                        width: e.width,
                        height: e.height,
                        x: e.x,
                        y: e.y,
                        top: e.y,
                        bottom: e.y + e.height,
                        left: e.x,
                        right: e.x + e.width
                    };
                a._update(n, t), i._publishUpdate()
            }
        },
        bt = 200;
    var Et = function(e, t) {
        var n = e.pageInfo,
            r = e.placement,
            i = n.getSafeFrameApi(),
            a = {
                getAdBoundingRect: function() {
                    throw new Ce.a("getAdBoundingRect is not supported in a safeFrame environment")
                },
                getBoundingRect: function() {
                    throw new Ce.a("getBoundingRect is not supported in a safeFrame environment")
                },
                getClientDims: function() {
                    throw new Ce.a("getClientDims is not supported in a safeFrame environment")
                },
                getAdPctInView: function() {
                    return i.ext.inViewPercentage() / 100
                },
                getElPctInView: function() {
                    throw new Ce.a("getElPctInView is not supported in a safeFrame environment")
                }
            },
            o = ft(a, t),
            s = i.ext.geom();
        i.ext.register(s.self.w, s.self.h, function(e) {
            "geom-update" === e && o._publishUpdate()
        }), 4913 === r.publisherId && setInterval(function() {
            o._publishUpdate()
        }, 1e3);
        return Object(be.c)({}, o, a)
    };
    var kt = function(e, t) {
        var n = e.util,
            r = e.win,
            i = {
                getAdBoundingRect: o,
                getBoundingRect: s,
                getClientDims: c,
                getAdPctInView: function() {
                    return ht.getRectPctInView(o(), c())
                },
                getElPctInView: function(e) {
                    return ht.getRectPctInView(s(e), c())
                }
            },
            a = ft(i, t);
        return n.addScrollListener(r.top, a._publishUpdate), Object(be.c)({}, a, i);

        function o() {
            var e = i.adContainer.ownerDocument.defaultView ? i.adContainer.ownerDocument.defaultView.frameElement : null;
            return e ? e.getBoundingClientRect() : ht.getDefaultBoundingClientRect()
        }

        function s(e) {
            var t = e.getBoundingClientRect(),
                n = o();
            return ht.sumRects(t, n)
        }

        function c() {
            var e = r.top;
            return {
                width: e.innerWidth,
                height: e.innerHeight
            }
        }
    };
    var Mt = function(e, t) {
            var n, r = e.pageInfo;
            n = r.isMraid() ? wt(e, t) : r.isWebview() ? vt(e, t) : r.isAmp() ? _t(e, t) : r.isSafeFrame() ? Et(e, t) : r.isFriendlyFrameRender() ? kt(e, t) : pt(e, t);
            var i = Object(be.n)(Object.keys(n), Tt);
            if (0 < i.length) throw new Ce.a("positionService invalid. Unmatched keys: ".concat(i.join(", ")));
            return n
        },
        Tt = ["getAdBoundingRect", "getAdPctInView", "getBoundingRect", "getClientDims", "getElDims", "getElPctInView", "setAdContainer"];
    u(65);
    var St = u(42),
        xt = u(56),
        Ct = function() {
            var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                i = (1 < arguments.length ? arguments[1] : void 0).placement,
                e = {
                    render: function(e) {
                        r.render && r.render(e);
                        var t = e.domRefs.mainImage,
                            n = t && (t.complete || 0 < t.naturalWidth);
                        i.customOptions.dontWaitForImageLoad && (n = !0);
                        t && "IMG" === t.tagName && !n && e.promises.push(new Promise(function(e) {
                            t.addEventListener("load", e)
                        }))
                    }
                };
            return Object.assign({}, r, e)
        };
    var Lt = u(55),
        Dt = u(96),
        Ot = function() {
            var t, i, a, o, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                e = 1 < arguments.length ? arguments[1] : void 0,
                r = e.creative,
                s = e.docInfo,
                c = e.eventController;
            return Object.assign({}, n, {
                render: function(e) {
                    i = (t = e).state, a = r.getParams(),
                        function() {
                            var e = s.document;
                            if (a && a.image_height && a.image_width) o = {
                                width: a.image_width,
                                height: a.image_height
                            };
                            else {
                                var t = e.createElement("img");
                                t.src = a.image_url, o = {
                                    width: t.naturalWidth,
                                    height: t.naturalHeight
                                }
                            }
                        }(), c.on(Te.h, u), n.render && n.render(t)
                }
            });

            function u(e) {
                if (a.isCSR) {
                    var t = Object(Dt.b)(e, o),
                        n = t.x,
                        r = t.y;
                    i.logoOffsetX = n, i.logoOffsetY = r
                } else i.logoOffsetX = Nt, i.logoOffsetY = Nt
            }
        },
        Nt = 0;
    var jt = u(41),
        Rt = function(e, t) {
            var n = t.analytics,
                r = t.browserInfo,
                i = t.util;
            return e.addInit(function(e) {
                i.listen(e.domRefs.mainClickTarget, "click", a, !1, !0)
            }), {};

            function a() {
                n.click(), r.isFacebook ? setTimeout(function() {
                    e.doClickThrough()
                }, 500) : e.doClickThrough()
            }
        };
    var Pt = {
        create: function(o) {
            return new St.a({
                renderers: function() {
                    var e = o.creative,
                        t = o.placement,
                        n = e.getParams(),
                        r = n.customization && n.customization.reveal || n.isCSR,
                        i = r && !t.customOptions.is3pAdPreview,
                        a = [xt.a, Ct];
                    r && a.push(Lt.a);
                    i && a.push(Ot);
                    return a
                }(),
                eventManagers: [jt.a, Rt],
                initState: {},
                supportedDomRefs: []
            }, o)
        }
    };
    var Vt = {
        name: "imageRendererFactoryLoader",
        isSupported: function(e) {
            return e.isImage()
        },
        load: function() {
            return new Promise(function(e) {
                e({
                    default: Pt
                })
            })
        }
    };
    var Ft = function() {
        var c, u, l, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
            e = 1 < arguments.length ? arguments[1] : void 0,
            n = e.creative,
            r = e.eventController,
            d = n.getParams();
        return Object.assign({}, t, {
            render: function(e) {
                c = e, t.render && t.render(c);
                r.on(Te.h, i)
            },
            _getZoomValues: f
        });

        function i(e) {
            var t, n = Object(be.p)("?".concat(d.img_server_params)).queryKey.noCrop,
                r = d.focal_box;
            if (n || !r) t = c.domRefs.mainImageCsrDiv, C.a.setStyle(t, "background-position", "center"), C.a.setStyle(t, "background-size", "contain"), C.a.setStyle(t, "background-repeat", "no-repeat"), C.a.setStyle(t, "text-align", "left"), C.a.setStyle(t, "background-color", "#FFFFFF");
            else {
                var i = e.width,
                    a = e.height,
                    o = d.image_width,
                    s = d.image_height;
                ! function(e, t, n, r, i, a) {
                    if (t === u && n === l) return;
                    var o = f(u = t, l = n, r, i, a);
                    C.a.setStyle(e, "background-repeat", "no-repeat"), C.a.setStyle(e, "background-size", "".concat(o.scaledImgWidth, "px")), C.a.setStyle(e, "background-position", "".concat(o.offsetX, "px ").concat(o.offsetY, "px"));
                    var s = c.state;
                    s.visibleImageWidth = Object(be.l)(o.scaledImgWidth, t), s.visibleImageHeight = Object(be.l)(o.scaledImgHeight, n), s.imageBoxingOffsetX = Math.max(Math.floor((t - s.visibleImageWidth) / 2), 0), s.imageBoxingOffsetY = Math.max(Math.floor((n - s.visibleImageHeight) / 2), 0)
                }(c.domRefs.mainImageCsrDiv, i, a, o, s, r)
            }
        }

        function f(e, t, n, r, i) {
            var a, o, s, c, u, l, d, f, h, p = i.x2 - i.x1,
                g = i.y2 - i.y1,
                v = (o = (a = {
                    adWidth: e,
                    adHeight: t,
                    imgWidth: n,
                    imgHeight: r,
                    focalWidth: p,
                    focalHeight: g
                }).adWidth, s = a.adHeight, c = a.imgWidth, u = a.imgHeight, l = a.focalWidth, d = a.focalHeight, f = Math.max(o / c, s / u), h = Math.min(o / l, s / d), Math.min(f, h)),
                m = Math.ceil(v * n),
                y = Math.ceil(v * r),
                _ = {};
            Object.keys(i).forEach(function(e) {
                var t = i[e];
                _[e] = Math.floor(v * t)
            });
            var I = w(e, m, _.x1, _.x2),
                A = w(t, y, _.y1, _.y2);
            return {
                scaledImgWidth: m,
                scaledImgHeight: y,
                offsetX: I,
                offsetY: A
            }
        }

        function w(e, t, n, r) {
            if (t < e) return Math.round((e - t) / 2);
            var i = Math.round((e - n - r) / 2);
            return 0 < i ? 0 : i + t < e ? e - t : i
        }
    };
    var Ut = {
        create: function(e) {
            var t = [xt.a, Ft, Lt.a],
                n = [jt.a, Rt],
                r = e.creative.params;
            !Object(be.p)("?".concat(r.img_server_params)).queryKey.noCrop && r.focal_box || t.push(Ot);
            return new St.a({
                renderers: t,
                eventManagers: n,
                initState: {},
                supportedDomRefs: []
            }, e)
        }
    };
    var Bt = {
        name: "cinemagraphRendererFactoryLoader",
        isSupported: function(e) {
            return e.isCinemagraph()
        },
        load: function() {
            return new Promise(function(e) {
                e({
                    default: Ut
                })
            })
        }
    };
    var Wt = {
        name: "carouselRendererFactoryLoader",
        isSupported: function(e) {
            return e.isCarousel()
        },
        load: function() {
            return u.e(3).then(u.bind(null, 174))
        }
    };
    u(85);
    var Ht = function() {
            function u() {
                z()(this, u)
            }
            return v()(u, null, [{
                key: "getAdAspectRatio",
                value: function(e) {
                    return parseFloat((e.width / e.height).toFixed(2))
                }
            }, {
                key: "sortByAspectRatio",
                value: function(e, t, n) {
                    var r = u.getAdAspectRatio(n),
                        i = function(e) {
                            return r === e
                        },
                        a = u.parsedAspectRatio(e),
                        o = u.parsedAspectRatio(t),
                        s = i(a),
                        c = i(o);
                    return s && c ? u.sortByClosestDims(e, t, n) : s && !c ? -1 : c && !s ? 1 : u.sortByAspectRatioDistance(e, t, n)
                }
            }, {
                key: "sortByAspectRatioDistance",
                value: function(e, t, n) {
                    var r = u.getAdAspectRatio(n),
                        i = u.parsedAspectRatio(e),
                        a = u.parsedAspectRatio(t),
                        o = function(e) {
                            return Math.abs(e - r)
                        },
                        s = o(i),
                        c = o(a);
                    return s < c ? -1 : c < s ? 1 : u.sortByClosestDims(e, t, n)
                }
            }, {
                key: "sortMediaBySize",
                value: function(e, t, n) {
                    var r = {
                            width: n.imageWidth,
                            height: n.imageHeight
                        },
                        i = u.dimsLessThanPlacement(e, r),
                        a = u.dimsLessThanPlacement(t, r);
                    return !i && a ? -1 : i && !a ? 1 : u.sortByAspectRatio(e, t, r)
                }
            }, {
                key: "orderBestMediaFiles",
                value: function(e) {
                    var t = [],
                        n = [],
                        r = [],
                        i = [];
                    return e.forEach(function(e) {
                        e._bitrate ? 400 <= e._bitrate && e._bitrate < 1200 ? t.push(e) : e._bitrate < 1200 ? n.push(e) : i.push(e) : r.push(e)
                    }), Ze.a.sortArrOfObjectsByKey(n, "_bitrate", "desc"), Ze.a.sortArrOfObjectsByKey(i, "_bitrate"), [].concat(t, n, i, r)
                }
            }, {
                key: "dimsLessThanPlacement",
                value: function(e, t) {
                    return e._width < t.width || e._height < t.height
                }
            }, {
                key: "parsedAspectRatio",
                value: function(e) {
                    return e._height ? parseFloat((e._width / e._height).toFixed(2)) : 0
                }
            }, {
                key: "distanceByDims",
                value: function(e, t) {
                    return {
                        width: Math.abs(e._width - t.width),
                        height: Math.abs(e._height - t.height)
                    }
                }
            }, {
                key: "sortByClosestDims",
                value: function(e, t, n) {
                    var r = u.distanceByDims(e, n),
                        i = u.distanceByDims(t, n),
                        a = r.width < i.width && r.height < i.height,
                        o = r.width > i.width && r.height > i.height;
                    return a ? -1 : o ? 1 : u.sortByBestDeskTopBitRate(e, t)
                }
            }, {
                key: "sortByBestDeskTopBitRate",
                value: function(e, t) {
                    if (e._bitrate && t._bitrate) {
                        var n = 400 <= e._bitrate && e._bitrate < 1200,
                            r = 400 <= t._bitrate && t._bitrate < 1200;
                        return n && !r ? -1 : !n && r ? 1 : t._bitrate - e._bitrate
                    }
                    return e._bitrate ? 1 : -1
                }
            }, {
                key: "byBestBitrateMobile",
                value: function(e, t, n) {
                    var r = function(e) {
                        return Math.abs(e._bitrate - 750)
                    };
                    return e._bitrate === t._bitrate ? u.sortMediaBySize(e, t, n) : !e._bitrate && t._bitrate ? 1 : !t._bitrate && e._bitrate ? -1 : r(e) - r(t)
                }
            }]), u
        }(),
        zt = u(111),
        Qt = u.n(zt),
        Gt = function() {
            function e() {
                z()(this, e), p()(this, "fileSizeBits", 0), p()(this, "downloadTimeMs", 0), p()(this, "startTime", 0)
            }
            return v()(e, [{
                key: "addFileSizeBytes",
                value: function(e) {
                    this.fileSizeBits += 8 * e
                }
            }, {
                key: "addDownloadTimeSeconds",
                value: function(e) {
                    this.downloadTimeMs += e
                }
            }, {
                key: "getBitrateEstimate",
                value: function() {
                    return Math.floor(this.fileSizeBits / this.downloadTimeMs)
                }
            }, {
                key: "update",
                value: function(e) {
                    var t = ((new Date).getTime() - this.startTime) / 1e3;
                    this.addFileSizeBytes(e), this.addDownloadTimeSeconds(t)
                }
            }, {
                key: "start",
                value: function() {
                    this.startTime = new Date
                }
            }], [{
                key: "getBrowserBitrateEstimate",
                value: function() {
                    return navigator && navigator.connection ? 1e3 * navigator.connection.downlink * 1e3 * 8 : null
                }
            }, {
                key: "getNetworkEffectiveType",
                value: function() {
                    return navigator && navigator.connection ? navigator.connection.effectiveType : null
                }
            }]), e
        }(),
        Yt = u(32);
    var Zt = new function(l) {
            l = l || {}, void 0 === l.escapeMode && (l.escapeMode = !0), l.attributePrefix = l.attributePrefix || "_", l.arrayAccessForm = l.arrayAccessForm || "none", l.emptyNodeForm = l.emptyNodeForm || "text", void 0 === l.enableToStringFunc && (l.enableToStringFunc = !0), l.arrayAccessFormPaths = l.arrayAccessFormPaths || [], void 0 === l.skipEmptyTextNodesForObj && (l.skipEmptyTextNodesForObj = !0), void 0 === l.stripWhitespaces && (l.stripWhitespaces = !0), l.datetimeAccessFormPaths = l.datetimeAccessFormPaths || [],
                function() {
                    function e(e) {
                        var t = String(e);
                        return 1 === t.length && (t = "0" + t), t
                    }
                    "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
                        return this.replace(/^\s+|^\n+|(\s|\n)+$/g, "")
                    }), "function" != typeof Date.prototype.toISOString && (Date.prototype.toISOString = function() {
                        return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
                    })
                }();
            var d = {
                ELEMENT_NODE: 1,
                TEXT_NODE: 3,
                CDATA_SECTION_NODE: 4,
                COMMENT_NODE: 8,
                DOCUMENT_NODE: 9
            };

            function f(e) {
                var t = e.localName;
                return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t
            }

            function c(e) {
                return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;") : e
            }

            function h(e, t, n) {
                switch (l.arrayAccessForm) {
                    case "property":
                        e[t] instanceof Array ? e[t + "_asArray"] = e[t] : e[t + "_asArray"] = [e[t]]
                }
                if (!(e[t] instanceof Array) && 0 < l.arrayAccessFormPaths.length) {
                    for (var r = 0; r < l.arrayAccessFormPaths.length; r++) {
                        var i = l.arrayAccessFormPaths[r];
                        if ("string" == typeof i) {
                            if (i == n) break
                        } else if (i instanceof RegExp) {
                            if (i.test(n)) break
                        } else if ("function" == typeof i && i(e, t, n)) break
                    }
                    r != l.arrayAccessFormPaths.length && (e[t] = [e[t]])
                }
            }

            function p(e) {
                var t = e.split(/[-T:+Z]/g),
                    n = new Date(t[0], t[1] - 1, t[2]),
                    r = t[5].split(".");
                if (n.setHours(t[3], t[4], r[0]), 1 < r.length && n.setMilliseconds(r[1]), t[6] && t[7]) {
                    var i = 60 * t[6] + Number(t[7]);
                    i = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * i : i), n.setMinutes(n.getMinutes() - i - n.getTimezoneOffset())
                } else -1 !== e.indexOf("Z", e.length - 1) && (n = new Date(Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())));
                return n
            }

            function g(e, t) {
                if (e.nodeType == d.DOCUMENT_NODE) {
                    for (var n = new Object, r = e.childNodes, i = 0; i < r.length; i++)(a = r.item(i)).nodeType == d.ELEMENT_NODE && (n[o = f(a)] = g(a, o));
                    return n
                }
                if (e.nodeType == d.ELEMENT_NODE) {
                    for ((n = new Object).__cnt = 0, r = e.childNodes, i = 0; i < r.length; i++) {
                        var a, o = f(a = r.item(i));
                        a.nodeType != d.COMMENT_NODE && (n.__cnt++, null == n[o] ? (n[o] = g(a, t + "." + o), h(n, o, t + "." + o)) : (null != n[o] && (n[o] instanceof Array || (n[o] = [n[o]], h(n, o, t + "." + o))), n[o][n[o].length] = g(a, t + "." + o)))
                    }
                    for (var s = 0; s < e.attributes.length; s++) {
                        var c = e.attributes.item(s);
                        n.__cnt++, n[l.attributePrefix + c.name] = c.value
                    }
                    var u = e.prefix;
                    return null != u && "" != u && (n.__cnt++, n.__prefix = u), null != n["#text"] && (n.__text = n["#text"], n.__text instanceof Array && (n.__text = n.__text.join("\n")), l.escapeMode && (n.__text = n.__text.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/")), l.stripWhitespaces && (n.__text = n.__text.trim()), delete n["#text"], "property" == l.arrayAccessForm && delete n["#text_asArray"], n.__text = function(e, t, n) {
                        if (0 < l.datetimeAccessFormPaths.length) {
                            for (var r = n.split(".#")[0], i = 0; i < l.datetimeAccessFormPaths.length; i++) {
                                var a = l.datetimeAccessFormPaths[i];
                                if ("string" == typeof a) {
                                    if (a == r) break
                                } else if (a instanceof RegExp) {
                                    if (a.test(r)) break
                                } else if ("function" == typeof a && a(obj, t, r)) break
                            }
                            return i != l.datetimeAccessFormPaths.length ? p(e) : e
                        }
                        return e
                    }(n.__text, o, t + "." + o)), null != n["#cdata-section"] && (n.__cdata = n["#cdata-section"], delete n["#cdata-section"], "property" == l.arrayAccessForm && delete n["#cdata-section_asArray"]), 1 == n.__cnt && null != n.__text ? n = n.__text : 0 == n.__cnt && "text" == l.emptyNodeForm ? n = "" : 1 < n.__cnt && null != n.__text && l.skipEmptyTextNodesForObj && (l.stripWhitespaces && "" == n.__text || "" == n.__text.trim()) && delete n.__text, delete n.__cnt, !l.enableToStringFunc || null == n.__text && null == n.__cdata || (n.toString = function() {
                        return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "")
                    }), n
                }
                if (e.nodeType == d.TEXT_NODE || e.nodeType == d.CDATA_SECTION_NODE) return e.nodeValue
            }

            function a(e, t, n, r) {
                var i = "<" + (null != e && null != e.__prefix ? e.__prefix + ":" : "") + t;
                if (null != n)
                    for (var a = 0; a < n.length; a++) {
                        var o = n[a],
                            s = e[o];
                        l.escapeMode && (s = c(s)), i += " " + o.substr(l.attributePrefix.length) + "='" + s + "'"
                    }
                return i += r ? "/>" : ">"
            }

            function o(e, t) {
                return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">"
            }

            function s(e, t) {
                return "property" == l.arrayAccessForm && (n = t.toString(), r = "_asArray", -1 !== n.indexOf(r, n.length - r.length)) || 0 == t.toString().indexOf(l.attributePrefix) || 0 == t.toString().indexOf("__") || e[t] instanceof Function;
                var n, r
            }

            function u(e) {
                var t = 0;
                if (e instanceof Object)
                    for (var n in e) s(e, n) || t++;
                return t
            }

            function v(e) {
                var t = [];
                if (e instanceof Object)
                    for (var n in e) - 1 == n.toString().indexOf("__") && 0 == n.toString().indexOf(l.attributePrefix) && t.push(n);
                return t
            }

            function m(e) {
                var t, n, r = "";
                return e instanceof Object ? r += (n = "", null != (t = e).__cdata && (n += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (l.escapeMode ? n += c(t.__text) : n += t.__text), n) : null != e && (l.escapeMode ? r += c(e) : r += e), r
            }

            function y(e, t, n) {
                var r = "";
                if (0 == e.length) r += a(e, t, n, !0);
                else
                    for (var i = 0; i < e.length; i++) r += a(e[i], t, v(e[i]), !1), r += _(e[i]), r += o(e[i], t);
                return r
            }

            function _(e) {
                var t = "";
                if (0 < u(e))
                    for (var n in e)
                        if (!s(e, n)) {
                            var r = e[n],
                                i = v(r);
                            null == r || null == r ? t += a(r, n, i, !0) : r instanceof Object ? r instanceof Array ? t += y(r, n, i) : r instanceof Date ? (t += a(r, n, i, !1), t += r.toISOString(), t += o(r, n)) : 0 < u(r) || null != r.__text || null != r.__cdata ? (t += a(r, n, i, !1), t += _(r), t += o(r, n)) : t += a(r, n, i, !0) : (t += a(r, n, i, !1), t += m(r), t += o(r, n))
                        }
                return t += m(e)
            }
            this.parseXmlString = function(e) {
                var t, n = window.ActiveXObject || "ActiveXObject" in window;
                if (void 0 === e) return null;
                if (window.DOMParser) {
                    var r = new window.DOMParser,
                        i = null;
                    if (!n) try {
                        i = r.parseFromString("INVALID", "text/xml").childNodes[0].namespaceURI
                    } catch (e) {
                        i = null
                    }
                    try {
                        t = r.parseFromString(e, "text/xml"), null != i && 0 < t.getElementsByTagNameNS(i, "parsererror").length && (t = null)
                    } catch (e) {
                        t = null
                    }
                } else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), (t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e);
                return t
            }, this.asArray = function(e) {
                return e instanceof Array ? e : [e]
            }, this.toXmlDateTime = function(e) {
                return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null
            }, this.asDateTime = function(e) {
                return "string" == typeof e ? p(e) : e
            }, this.xml2json = function(e) {
                return g(e)
            }, this.xml_str2json = function(e) {
                var t = this.parseXmlString(e);
                return null != t ? this.xml2json(t) : null
            }, this.json2xml_str = function(e) {
                return _(e)
            }, this.json2xml = function(e) {
                var t = this.json2xml_str(e);
                return this.parseXmlString(t)
            }, this.getVersion = function() {
                return "1.1.5"
            }, this.isXml = function(e) {
                var t = this.xml_str2json(e);
                return t && !t.parsererror
            }
        },
        Jt = Zt.asArray.bind(Zt),
        qt = Zt.xml_str2json.bind(Zt),
        Xt = Zt.isXml.bind(Zt),
        Kt = function() {
            function s(e) {
                var t = e.eventController,
                    n = e.firePix;
                z()(this, s), p()(this, "timeoutID", void 0), p()(this, "vastWrapperBreadcrumbs", []), p()(this, "impressionTrackers", []), p()(this, "assortedTrackers", []), p()(this, "videoClickTrackers", []), p()(this, "expandMacros", void 0), this.speedTest = new Gt, this.eventController = t, this.firePix = n
            }
            var t, n, r;
            return v()(s, [{
                key: "getVastJson",
                value: (r = we()(Ae.a.mark(function e(t) {
                    var n, r, i, a;
                    return Ae.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return this.expandMacros = function(e) {
                                    return t.expandFirstPartyMacros(t.params.additional_data.tid, t.params.asset_id, e)
                                }, n = this.speedTest.getBitrateEstimate(), r = Gt.getBrowserBitrateEstimate(), i = Gt.getNetworkEffectiveType(), this.firePix.fireDyn({
                                    long1: 9680,
                                    long2: n,
                                    long3: r,
                                    string1: i
                                }), a = t.params.vast_xml, e.abrupt("return", Xt(a) ? this.parseVastContent(a) : this.fetchVast(a));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function(e) {
                    return r.apply(this, arguments)
                })
            }, {
                key: "fetchVast",
                value: (n = we()(Ae.a.mark(function e(t) {
                    var n, r, i, a, o, s, c, u;
                    return Ae.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = this.expandMacros(t), this.vastWrapperBreadcrumbs.push({
                                    url: t,
                                    expandedUrl: n
                                }), this.startRedirectTimeout(), r = [n, location.href].map(function(e) {
                                    return Object(be.p)(e).protocol
                                }), i = Qt()(r, 2), a = i[0], o = i[1], s = a !== o, this.speedTest.start(), e.prev = 6, e.next = 9, Object(be.b)(n, "GET");
                            case 9:
                                c = e.sent, this.clearRedirectTimeout(), s && this.logProtocolMismatch(a, o), e.next = 17;
                                break;
                            case 14:
                                e.prev = 14, e.t0 = e.catch(6), s && (this.logErrorProtocolMismatch(a, o), this.clearRedirectTimeout());
                            case 17:
                                return this.speedTest.update(c.loaded), u = c.target.responseText, e.abrupt("return", this.parseVastContent(u));
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [6, 14]
                    ])
                })), function(e) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "parseVastContent",
                value: (t = we()(Ae.a.mark(function e(t) {
                    var n, r, i, a, o;
                    return Ae.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                n = new Promise(function() {}), r = qt(t), e.prev = 2, s.validateVastJson(r), e.next = 10;
                                break;
                            case 6:
                                return e.prev = 6, e.t0 = e.catch(2), this.eventController.publish(Te.E, Yt.a.VAST_ERROR_VAST_SCHEMA, {
                                    message: e.t0.message
                                }), e.abrupt("return", n);
                            case 10:
                                if (e.prev = 10, i = Jt(r.VAST.Ad)[0], a = i.InLine, o = i.Wrapper, this.collectImpressionTrackers(a || o), !o) {
                                    e.next = 20;
                                    break
                                }
                                if (this.collectCreativeTrackers(o), this.hasExceededRedirectLimit()) return e.abrupt("return", n);
                                e.next = 17;
                                break;
                            case 17:
                                return e.next = 19, this.fetchVast(o.VASTAdTagURI.toString());
                            case 19:
                                return e.abrupt("return", e.sent);
                            case 20:
                                if (a) return e.abrupt("return", r);
                                e.next = 22;
                                break;
                            case 22:
                                e.next = 27;
                                break;
                            case 24:
                                e.prev = 24, e.t1 = e.catch(10), this.eventController.publish(Te.E, Yt.a.VAST_WRAPPER_ERROR);
                            case 27:
                                return e.abrupt("return", n);
                            case 28:
                            case "end":
                                return e.stop()
                        }
                    }, e, this, [
                        [2, 6],
                        [10, 24]
                    ])
                })), function(e) {
                    return t.apply(this, arguments)
                })
            }, {
                key: "collectImpressionTrackers",
                value: function(e) {
                    var t = e.Impression,
                        n = void 0 === t ? [] : t;
                    this.impressionTrackers = [].concat(x()(this.impressionTrackers), x()(Jt(n)))
                }
            }, {
                key: "collectCreativeTrackers",
                value: function(e) {
                    var t = s.getLinearCreative(e);
                    this.assortedTrackers = [].concat(x()(this.assortedTrackers), x()(s.getTracking(t, "TrackingEvents", "Tracking"))), this.videoClickTrackers = [].concat(x()(this.videoClickTrackers), x()(s.getTracking(t, "VideoClicks", "ClickTracking")))
                }
            }, {
                key: "getImpressionTrackers",
                value: function() {
                    return this.impressionTrackers
                }
            }, {
                key: "getVideoClickTrackers",
                value: function(e) {
                    return [].concat(x()(s.getTracking(e, "VideoClicks", "ClickTracking")), x()(this.videoClickTrackers))
                }
            }, {
                key: "getAssortedTrackers",
                value: function(e) {
                    return [].concat(x()(s.getTracking(e, "TrackingEvents", "Tracking")), x()(this.assortedTrackers))
                }
            }, {
                key: "getBreadcrumbs",
                value: function() {
                    return this.vastWrapperBreadcrumbs
                }
            }, {
                key: "startRedirectTimeout",
                value: function() {
                    var e = this;
                    this.timeoutID = setTimeout(function() {
                        e.eventController.publish(Te.E, Yt.a.VAST_WRAPPER_TIMEOUT)
                    }, 5e3)
                }
            }, {
                key: "clearRedirectTimeout",
                value: function() {
                    clearTimeout(this.timeoutID)
                }
            }, {
                key: "hasExceededRedirectLimit",
                value: function() {
                    return 10 <= this.getBreadcrumbs().length && (this.eventController.publish(Te.E, Yt.a.VAST_TOO_MANY_REDIRECTS), !0)
                }
            }, {
                key: "logProtocolMismatch",
                value: function() {
                    this.firePix.fireDyn({
                        long1: 9791,
                        string2: JSON.stringify(this.vastWrapperBreadcrumbs)
                    })
                }
            }, {
                key: "logErrorProtocolMismatch",
                value: function(e, t) {
                    this.eventController.publish(Te.E, Yt.a.VAST_WRAPPER_TIMEOUT, {
                        message: "Serving ".concat(e, " assets onto ").concat(t, " page."),
                        diagnosticContext: Ie()({}, this.vastWrapperBreadcrumbs)
                    })
                }
            }], [{
                key: "getTracking",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        t = 1 < arguments.length ? arguments[1] : void 0,
                        n = 2 < arguments.length ? arguments[2] : void 0,
                        r = e.Linear;
                    return r && r[t] && r[t][n] ? Jt(r[t][n]) : []
                }
            }, {
                key: "getLinearCreatives",
                value: function(e) {
                    return Jt(e.Creatives && e.Creatives.Creative).filter(function(e) {
                        return e && void 0 !== e.Linear
                    })
                }
            }, {
                key: "getLinearCreative",
                value: function(e) {
                    return s.getLinearCreatives(e)[0]
                }
            }, {
                key: "isVpaid",
                value: function(e) {
                    var t = s.getLinearCreative(e.InLine),
                        n = Jt(t.Linear.MediaFiles.MediaFile);
                    return !!n.length && n.every(function(e) {
                        return "VPAID" === e._apiFramework
                    })
                }
            }, {
                key: "validateVastJson",
                value: function(e) {
                    if (!e) throw new Ce.a("Missing vastJson");
                    if (!e.VAST) throw new Ce.a("Missing VAST element");
                    if (!e.VAST.Ad) throw new Ce.a("Missing Ad element");
                    var t = Jt(e.VAST.Ad)[0];
                    if (t.Wrapper) s.validateAdWrapper(t.Wrapper);
                    else {
                        if (!t.InLine) throw new Ce.a("Missing InLine or Wrapper element");
                        s.validateAdInLine(t.InLine)
                    }
                }
            }, {
                key: "validateAdWrapper",
                value: function(e) {
                    if (!e.VASTAdTagURI) throw new Ce.a("Missing VASTAdTagURI element")
                }
            }, {
                key: "validateAdInLine",
                value: function(e) {
                    if (!e.Creatives) throw new Ce.a("Missing Creatives element");
                    var t = Jt(e.Creatives)[0];
                    if (!t.Creative) throw new Ce.a("Missing Creative element(s)");
                    if (!Jt(t.Creative).some(function(e) {
                            return !!e.Linear
                        })) throw new Ce.a("Missing Linear element(s)")
                }
            }, {
                key: "isJavascriptVpaid",
                value: function(e) {
                    var t = "VPAID" === e._apiFramework,
                        n = "application/x-javascript" === e._type || "application/javascript" === e._type;
                    return t && n
                }
            }]), s
        }(),
        $t = {
            "video/mp4": !0
        },
        en = function() {
            function c(e, t) {
                var n = e.placement,
                    r = e.environment.renderOptionsMap,
                    i = t.creative,
                    a = t.firePix,
                    o = t.util,
                    s = t.eventController;
                z()(this, c), p()(this, "vastJson", void 0), this.placement = n, this.renderOptionsMap = r, this.creative = i, this.util = o, this.vastParser = new Kt({
                    eventController: s,
                    firePix: a
                })
            }
            var e;
            return v()(c, [{
                key: "getVastJson",
                value: (e = we()(Ae.a.mark(function e() {
                    var t;
                    return Ae.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.vastParser.getVastJson(this.creative);
                            case 2:
                                return this.vastJson = e.sent, t = this.getVastCreatives(), this.setVastCreative(t[0]), e.abrupt("return", this.vastJson);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })), function() {
                    return e.apply(this, arguments)
                })
            }, {
                key: "isVpaid",
                value: function() {
                    if (void 0 === this.isVpaidCached) {
                        var e = this.getVastAd();
                        this.isVpaidCached = Kt.isVpaid(e)
                    }
                    return this.isVpaidCached
                }
            }, {
                key: "chooseBestMediaFiles",
                value: function() {
                    var n = this,
                        e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).useBitrate,
                        t = void 0 !== e && e,
                        r = this.getVastMediaFiles(),
                        i = this.isVpaid() ? this.getJavascriptVpaid(r) : this.getSupportedMediaFiles(r);
                    if (!i.length) return r;
                    if (t) return i.sort(function(e, t) {
                        return Ht.byBestBitrateMobile(e, t, n.placement)
                    }).slice(0, 1);
                    var a = i.slice().sort(function(e, t) {
                        return Ht.sortMediaBySize(e, t, n.placement)
                    });
                    return Ht.orderBestMediaFiles(a)
                }
            }, {
                key: "getSupportedMediaFiles",
                value: function(e) {
                    return e.filter(function(e) {
                        return $t[e._type]
                    })
                }
            }, {
                key: "getJavascriptVpaid",
                value: function(e) {
                    return e.filter(Kt.isJavascriptVpaid)
                }
            }, {
                key: "getAdParameters",
                value: function() {
                    var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.getVastCreative()).Linear.AdParameters;
                    return e ? e.__cdata || e : null
                }
            }, {
                key: "is360",
                value: function() {
                    var e = this.creative.params.render_options_bm,
                        t = this.renderOptionsMap;
                    return Object(be.d)(e, t["360_video"])
                }
            }, {
                key: "isDAR360",
                value: function() {
                    return this.is360() && this.doesPlacementSupportDAR() && "disabled" !== this.getVastCreative().Linear.DAR360
                }
            }, {
                key: "doesPlacementSupportDAR",
                value: function() {
                    var e = this.placement.imageWidth / this.placement.imageHeight;
                    return 9 / 16 <= e && e <= 2
                }
            }, {
                key: "getAdSystem",
                value: function() {
                    return this.getVastAd().InLine.AdSystem || null
                }
            }, {
                key: "getDurationStr",
                value: function() {
                    var e = this.getVastCreative().Linear.Duration;
                    return e.__cdata || e
                }
            }, {
                key: "getDurationMS",
                value: function() {
                    var e = this.getDurationStr();
                    return this.util.timeToMS(e)
                }
            }, {
                key: "getVastAd",
                value: function() {
                    return Jt(this.vastJson.VAST.Ad)[0]
                }
            }, {
                key: "getVastCreative",
                value: function() {
                    return this.vastCreative
                }
            }, {
                key: "getVastCreatives",
                value: function() {
                    var e = this.getVastAd().InLine;
                    return Kt.getLinearCreatives(e)
                }
            }, {
                key: "setVastCreative",
                value: function(e) {
                    this.vastCreative = e
                }
            }, {
                key: "getNextVpaidCreative",
                value: function() {
                    var e = this.getVastCreatives(),
                        t = this.getVastCreative(),
                        n = e.indexOf(t);
                    return e.slice(n + 1).find(this.creativeHasVpaid.bind(this))
                }
            }, {
                key: "setNextVpaidCreative",
                value: function() {
                    var e = this.getNextVpaidCreative();
                    return e && this.setVastCreative(e), e
                }
            }, {
                key: "creativeHasVpaid",
                value: function(e) {
                    return this.getVastMediaFiles(e).some(Kt.isJavascriptVpaid)
                }
            }, {
                key: "getVastMediaFiles",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.getVastCreative();
                    return Jt(e.Linear.MediaFiles.MediaFile)
                }
            }, {
                key: "getVastClickThroughUrl",
                value: function() {
                    var e = this.getVastCreative().Linear.VideoClicks;
                    return e && e.ClickThrough ? e.ClickThrough : null
                }
            }, {
                key: "getImpressionTrackers",
                value: function() {
                    return this.vastParser.getImpressionTrackers()
                }
            }, {
                key: "getVideoClickTrackers",
                value: function() {
                    var e = this.getVastCreative();
                    return this.vastParser.getVideoClickTrackers(e)
                }
            }, {
                key: "getAssortedTrackers",
                value: function() {
                    var e = this.getVastCreative();
                    return this.vastParser.getAssortedTrackers(e)
                }
            }, {
                key: "getVastWrapperBreadcrumbs",
                value: function() {
                    return this.vastParser.getBreadcrumbs()
                }
            }]), c
        }(),
        tn = {
            name: "videoRendererFactoryLoader",
            isSupported: function(e) {
                return e.isVast()
            },
            load: function(e) {
                var t = e.placement,
                    n = e.environment,
                    r = e.creative,
                    i = e.firePix,
                    a = e.errorHandler,
                    o = e.eventController,
                    s = e.util,
                    c = new en({
                        placement: t,
                        environment: n
                    }, {
                        creative: r,
                        errorHandler: a,
                        eventController: o,
                        firePix: i,
                        util: s
                    });
                return r.setVastTag(c), this.errorListener = new Yt.a({
                    errorHandler: a,
                    eventController: o
                }), c.getVastJson().then(function() {
                    return c.is360() ? Promise.all([u.e(2), u.e(0), u.e(7)]).then(u.bind(null, 171)) : u.e(0).then(u.bind(null, 170))
                })
            }
        };
    var nn = {
        name: "scrollRendererFactoryLoader",
        isSupported: function(e) {
            return e.isScroll()
        },
        load: function() {
            return u.e(6).then(u.bind(null, 172))
        }
    };
    var rn = {
        name: "windowRendererFactoryLoader",
        isSupported: function(e) {
            return e.isWindow()
        },
        load: function() {
            return u.e(8).then(u.bind(null, 173))
        }
    };
    var an = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = 1 < arguments.length ? arguments[1] : void 0,
                n = t.creative,
                o = t.pageInfo,
                s = t.eventController,
                r = n.params,
                c = r.banner_markup,
                u = r.banner_height,
                l = r.banner_width;
            return Object.assign({}, e, {
                render: function(e) {
                    var t, n = e.domRefs;
                    t = o.isSandboxed() ? ((a = document.createElement("div")).innerHTML = c, a) : (r = document.createElement("iframe"), i = "<!DOCTYPE html><html><head></head><body>".concat(c, "</body></html>"), r.className = on, r.height = u, r.width = l, r.frameBorder = "0", r.scrolling = "no", r.marginHeight = "0", r.marginWidth = "0", r.tabIndex = -1, r.setAttribute("allowtransparency", "true"), r.setAttribute("hidefocus", "true"), s.on(Te.a, function() {
                        var e = r.contentWindow.document;
                        e.open(), e.write(i), e.close()
                    }), r);
                    var r, i;
                    var a;
                    return n.adWrapper = t, n.adWrapperWithDims = t, n.mainImage = t, n
                }
            })
        },
        on = "".concat(Ee.a.TL_CLASS_PREFIX, "iframe");
    var sn = {
        create: function(e) {
            return new St.a({
                renderers: [an],
                eventManagers: [jt.a],
                initState: {},
                supportedDomRefs: []
            }, e)
        }
    };
    var cn = {
            load: function(e) {
                var t = e.placement,
                    n = e.environment,
                    r = e.creative,
                    i = e.firePix,
                    a = e.errorHandler,
                    o = e.eventController,
                    s = e.util,
                    c = function(e, t) {
                        var n = e.filter(function(e) {
                            return e.isSupported(t)
                        });
                        0 === n.length ? function() {
                            throw new Ce.a("Supported renderer factory not found.")
                        }() : 1 < n.length && function(e) {
                            var t = e.map(function(e) {
                                return e.name
                            });
                            throw new Ce.a("".concat(t.length, " renderer factories are supported: ").concat(t.join(", "), ". Only one renderer factory may be supported for each impression."))
                        }(n);
                        return n[0]
                    }(un, r),
                    u = (d = ln, f = r, d.filter(function(e) {
                        return e.isSupported(f)
                    })).map(function(e) {
                        return e.load()
                    }),
                    l = c.load({
                        placement: t,
                        environment: n,
                        creative: r,
                        firePix: i,
                        errorHandler: a,
                        eventController: o,
                        util: s
                    });
                var d, f;
                return u.unshift(l), Promise.all(u)
            }
        },
        un = [Vt, Bt, Wt, tn, nn, {
            name: "pharmaRendererFactoryLoader",
            isSupported: function(e) {
                return e.isPharma()
            },
            load: function() {
                return u.e(5).then(u.bind(null, 175))
            }
        }, rn, {
            name: "bannerRendererFactoryLoader",
            isSupported: function(e) {
                return e.isBanner()
            },
            load: function() {
                return new Promise(function(e) {
                    e({
                        default: sn
                    })
                })
            }
        }],
        ln = [{
            name: "revealConfigFactoryLoader",
            isSupported: function(e) {
                return e.params.customization && e.params.customization.reveal
            },
            load: function() {
                return u.e(4).then(u.bind(null, 176))
            }
        }];
    var dn, fn = function() {
            function p(e) {
                var t = e.topWindow;
                z()(this, p);
                var n = t.document,
                    r = [n.URL, n.referrer, window.document.URL, window.document.referrer].find(p.isTripleLiftTest);
                if (this.debugFlag = !!r, r) {
                    var i = Object(be.p)(r).queryKey,
                        a = i.tl_image_id,
                        o = i.tl_template_id,
                        s = i.tl_dyn_id,
                        c = i.tl_scu_id,
                        u = i.tl_preview_id,
                        l = i.tp_preview_id,
                        d = i.tl_debug_log,
                        f = i.view_type,
                        h = i.tlBidUrl;
                    Object.assign(this, {
                        tlImageId: a,
                        tlTemplateId: o,
                        debugLog: !!d,
                        tlBidUrl: !!h && decodeURIComponent(h),
                        forceBidUrl: !(!u && !l),
                        adPreview: !!(u || l || f),
                        thirdPartyAdPreview: !!l,
                        tlDynId: s || c
                    })
                }
            }
            return v()(p, null, [{
                key: "isTripleLiftTest",
                value: function(e) {
                    return "string" == typeof e && e.toLowerCase().includes("triplelifttest=true")
                }
            }]), p
        }(),
        hn = {
            run: (dn = we()(Ae.a.mark(function e() {
                var t, n = arguments;
                return Ae.a.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, yn.apply(void 0, n);
                        case 3:
                            e.next = 10;
                            break;
                        case 5:
                            e.prev = 5, e.t0 = e.catch(0), t = encodeURIComponent("Fatal: ".concat(e.t0.message || e.t0)), document.createElement("IMG").src = "//eb2.3lift.com/sce?lvl=1&block=unknown&e=".concat(t);
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [0, 5]
                ])
            })), function() {
                return dn.apply(this, arguments)
            })
        },
        pn = Ee.a.ERROR_LEVELS,
        gn = pn.ERROR,
        vn = pn.WARNING,
        mn = pn.LOG;

    function yn(e) {
        return _n.apply(this, arguments)
    }

    function _n() {
        return (_n = we()(Ae.a.mark(function e(t) {
            var n, r, i, a, f, o, s, h, c, u, p, g, v, l, m, d, y, _, I, A, w, b, E, k, M, T, S, x, C, L, D, O, N, j, R, P, V, F, U, B, W, H, z, Q, G, Y, Z, J, q, X, K, $, ee, te, ne, re, ie, ae, oe, se, ce, ue, le, de, fe, he, pe, ge, ve, me, ye, _e;
            return Ae.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return _e = function(e, t) {
                            try {
                                return e()
                            } catch (e) {
                                return t
                            }
                        }, ye = function(e) {
                            var t = {
                                e: "Critical: ".concat(e.message || e),
                                lvl: 1
                            };
                            t.inv_code = _e(function() {
                                return g.invCode
                            }, null), t.aid = _e(function() {
                                return v.auctionId
                            }, null), t.rev_hash = _e(function() {
                                return s
                            }, null), t.block = _e(function() {
                                return o.getPhase()
                            }, "unknown"), console.error("tl: ".concat(e.stack || e), t);
                            var n = _e(function() {
                                    return h.topDocument
                                }, document),
                                r = _e(function() {
                                    return p.ebPath
                                }, "eb2.3lift.com");
                            n.createElement("IMG").src = Object(be.k)(r, "sce", t)
                        }, me = function(e) {
                            var t = e.assets,
                                n = e.settings;
                            return new Le({
                                assets: t,
                                settings: n,
                                frame: P
                            }, {
                                errorHandler: I
                            })
                        }, ve = function() {
                            return new Me({
                                placement: g,
                                environment: p,
                                pageInfo: w,
                                document: h.document,
                                specifiedTacticId: T,
                                isAdserving: x,
                                rev: s,
                                gdprVendorConsentData: b
                            }, {
                                util: Ze.a,
                                urlParams: c
                            })
                        }, ge = function(e, t) {
                            var n = {};
                            return t.urlParams.adPreview && (n.friendlyIframeRender = !0), new ze(Ie()({}, e, {
                                customOptions: Ie()({}, e.customOptions, n, {
                                    is3pAdPreview: t.urlParams.thirdPartyAdPreview
                                })
                            }))
                        }, pe = function() {
                            var e = {
                                    docInfo: h,
                                    adRendered: B,
                                    browserInfo: D,
                                    placement: g,
                                    pageInfo: w,
                                    hook: E,
                                    isAdserving: x
                                },
                                t = {
                                    errorHandler: I,
                                    serveDefault: k,
                                    firePix: v,
                                    userSync: S,
                                    util: Ze.a,
                                    eventController: f
                                };
                            return new Se(e, t)
                        }, he = function() {
                            var e = {
                                    contentWindow: P.contentWindow,
                                    docInfo: h,
                                    hook: E,
                                    pageInfo: w,
                                    placement: g,
                                    uniquenessController: _
                                },
                                t = {
                                    errorDecorator: A,
                                    eventController: f,
                                    firePix: v,
                                    Render: Qe,
                                    serveDefault: k,
                                    userSync: S,
                                    util: Ze.a,
                                    viewabilityController: N
                                },
                                n = new Fe(e, t);
                            return n.registerAuctionListeners(), n
                        }, fe = function() {
                            return {
                                hook: E,
                                docInfo: h,
                                defaultCode: g.defaultCode,
                                pageInfo: w,
                                firePix: v,
                                userSync: S,
                                adRendered: B
                            }
                        }, de = function() {
                            return new Ue({
                                placement: g,
                                docInfo: h,
                                ttjHostName: d,
                                invCode: g.invCode
                            }, {
                                firePix: v,
                                errorHandler: I
                            })
                        }, le = function() {
                            return new je({
                                debugMessenger: l,
                                firePix: v,
                                urlParams: c,
                                lifecycleManager: o
                            })
                        }, ue = function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return new Pe(Ie()({
                                docInfo: h,
                                rev: s,
                                placement: g,
                                debugFlag: u,
                                ebPath: p.ebPath
                            }, e), {
                                eventController: f
                            })
                        }, ce = function() {
                            return g.customOptions.uniqueBrands || g.customOptions.uniqueCreatives
                        }, n = Date.now(), r = t.revision, i = void 0 === r ? "un" : r, a = t.scriptWindow, f = new Re, o = new He({
                            eventController: f
                        }), s = i.slice(0, 7), h = new Oe({
                            scriptWindow: a
                        }), c = new fn({
                            topWindow: h.topWindow
                        }), u = c.debugFlag, p = new Ne(t.environment), g = ge(t.placement, {
                            urlParams: c
                        }), v = ue(), l = new De({
                            environment: p,
                            bundleStartTime: n
                        }, {
                            eventController: f,
                            urlParams: c
                        }), m = new et({
                            ttjStartTime: t.ttjStartTime,
                            revision: s,
                            isTestEnv: !!c.tlBidUrl
                        }, {
                            firePix: v
                        }), Y = function() {
                            if (m.log(et.BUNDLE_LOAD_TIME, n), d = p.ttjHostName, ce() && (_ = new Xe), w = new dt({
                                    docInfo: h,
                                    placement: g
                                }), I = le(), A = I.decorate.bind(I), Ze.a.setErrorDecorator(A), y = de(), Be.needsBusting(g, h.window)) {
                                var e = y.getTLScript();
                                Be.bust(h.document, e.src)
                            }
                        }, Z = function(e) {
                            var t = e.split("/");
                            return "dtj" === t[1] ? t[3] : void 0
                        }, J = function() {
                            var e = g.replaceParent;
                            if (E = y.getHook(e)) {
                                var t = y.getScriptPath(),
                                    n = Z(t);
                                x = !!n, T = c.tlDynId || n;
                                var r = y.getAuctionResponsePseudoId();
                                r && (L = !0, M = h.window["tl_auction_response_".concat(r)]), k = new Ye(Ze.a), x || (g.demandEnabled || u || L ? Object(be.i)() || (S = new Ke({
                                    docInfo: h,
                                    placement: g,
                                    environment: p
                                }, {
                                    urlParams: c,
                                    util: Ze.a,
                                    gdprVendorConsentData: b
                                })) : C = k.serve(fe(), "demand_disabled"))
                            }
                        }, q = function() {
                            var e = h.window.navigator;
                            if (!e) throw new Ce.a("setBrowserInfo failed: no window.navigator");
                            var t = new xe(e.userAgent);
                            D = t.getBrowserInfo()
                        }, X = function() {
                            O = Mt({
                                win: h.topWindow,
                                pageInfo: w,
                                placement: g,
                                util: Ze.a,
                                errorHandler: I
                            }, f), N = new $e({
                                docInfo: h,
                                positionService: O,
                                hook: E,
                                errorHandler: I,
                                placement: g
                            })
                        }, K = function() {
                            var e = we()(Ae.a.mark(function e() {
                                var t;
                                return Ae.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("function" == typeof h.topWindow.__cmp) return e.prev = 1, t = new rt(h.topWindow), e.next = 5, t.getConsentData();
                                            e.next = 11;
                                            break;
                                        case 5:
                                            b = e.sent, e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1), I.fireError("Error getting gdpr vendorConsentData: ".concat(e.t0.message), mn);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [1, 8]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), $ = function() {
                            var e = 1.5 * g.timeoutDuration;
                            return Ze.a.timeoutWrap(function() {
                                C = k.serve(fe(), "global_timeout")
                            }, e), j = pe(), P = j.auctionIFRAME, (U = new Ve({
                                contentWindow: P.contentWindow
                            }, {
                                util: Ze.a,
                                errorDecorator: A
                            })).setListeners(), V = he(), new Promise(function() {
                                var t = we()(Ae.a.mark(function e(n) {
                                    return Ae.a.wrap(function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (m.log(et.AUCTION_START), f.once(Te.c, function(e) {
                                                        var t = e.payload;
                                                        m.log(et.AUCTION_RESPONSE), L && m.setIsHeaderBidding(!0), F = t, m.setFormatId(F.settings.format_id), n()
                                                    }), L) return P.contentWindow.dynamicCreativeRender(M), e.abrupt("return");
                                                e.next = 5;
                                                break;
                                            case 5:
                                                R = ve(), j.run(R.buildAuctionPath()).catch(function(e) {
                                                    I.fireError(e.message ? e.message : "error running auction", gn)
                                                });
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function(e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }, ee = function() {
                            var e = we()(Ae.a.mark(function e() {
                                var t, n, r, i, a, o;
                                return Ae.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = F.settings, n = t.dco_tag_url, r = t.dco_protocol, n && r === Ee.a.DCO_PROTOCOLS.DV_BLOCKING) return i = new nt(F, {
                                                errorHandler: I
                                            }), e.next = 5, i.callDV();
                                            e.next = 6;
                                            break;
                                        case 5:
                                            return e.abrupt("return");
                                        case 6:
                                            if (n) return a = me(F), e.prev = 8, e.next = 11, a.getOptimizedAsset();
                                            e.next = 19;
                                            break;
                                        case 11:
                                            o = e.sent, F.assets = [o.asset], F.settings.isFallbackAssets = o.isFallback, e.next = 19;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e.catch(8), C = k.serve(fe(), "dco_error");
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, null, [
                                    [8, 16]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), te = function() {
                            if (!C) {
                                B = !0;
                                var e = (W = new Je(I)).getAltTemplate(g.templates, F.settings.template_id, y.getTagTemplateId(), c.tlTemplateId);
                                Object.assign(g, e);
                                var t = p.formats,
                                    n = t.header_direct_banner,
                                    r = t.header_direct_instre,
                                    i = F.settings.format_id,
                                    a = [n, r].includes(i);
                                if (!Je.hasMacro(g.templateCode) && !a) throw new Ce.a("Format not HDX and template code is not valid.");
                                W.parse(g.templateCode)
                            }
                        }, ne = function() {
                            var e = y.script,
                                t = e && Object(be.p)(e.src).queryKey.ct;
                            H = tt.create({
                                environment: p,
                                placement: g,
                                pageInfo: w,
                                isSmallScreen: D.isSmallScreen,
                                clickTrackerDTJ: t,
                                debug: u,
                                creativePayload: F,
                                templateDetail: W.templateDetail,
                                tlImageId: c.tlImageId
                            }), Q = new qe({
                                docInfo: h,
                                placement: g
                            }, {
                                creative: H,
                                auctionIFRAMEWriterOverride: U,
                                firePix: v,
                                errorHandler: I
                            }), z = new ke({
                                pageInfo: w,
                                environment: p,
                                rev: s
                            }, {
                                creative: H,
                                lifecycleManager: o,
                                thirdPartyAnalytics: Q,
                                firePix: v,
                                errorHandler: I,
                                util: Ze.a
                            }), !w.isViewabilityAware() && H.needsViewabilityAwareness() && I.fireError("Position aware format served to unfriendly frame", vn), V.setAnalytics(z)
                        }, re = function() {
                            m.log(et.RENDER), z.render(), a.onbeforeunload = null, S && S.doSyncIfAllDone()
                        }, ie = function() {
                            var e = we()(Ae.a.mark(function e() {
                                var t, n, r, i, a, o, s, c, u, l, d;
                                return Ae.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return Ue.hideHook(E), t = {
                                                placement: g,
                                                environment: p,
                                                creative: H,
                                                firePix: v,
                                                errorHandler: I,
                                                eventController: f,
                                                util: Ze.a
                                            }, e.next = 4, cn.load(t);
                                        case 4:
                                            return n = e.sent, r = n[0].default, i = Ze.a.pluck(n.slice(1), "default"), a = i.map(function(e) {
                                                return e.create()
                                            }), o = {
                                                creative: H,
                                                placement: g,
                                                environment: p,
                                                browserInfo: D,
                                                pageInfo: w,
                                                docInfo: h,
                                                analytics: z,
                                                util: Ze.a,
                                                templateCode: W,
                                                positionService: O,
                                                firePix: v,
                                                errorHandler: I,
                                                eventController: f,
                                                featureConfigs: a
                                            }, s = r.create(o), e.next = 12, s.render();
                                        case 12:
                                            for (c = e.sent, G = c.domRefs, W.chosenTemplate.appendChild(G.adWrapper), u = W.templateWrapEl.childNodes, l = 0; l < u.length; l++) 1 === (d = u[l]).nodeType && Qe.insertAd(d, E);
                                            Ze.a.triggerEvent(h.topWindow, "resize", document), m.log(et.AD_ON_PAGE), f.publish(Te.a), ke.sendAdReadySignal();
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), ae = function() {
                            var e = G.mainImageCsrDiv || G.mainImage,
                                t = G.adWrapperWithDims;
                            z.appendThirdPartyJs(t, e), w.isViewabilityAware() && (N.listenForPercentageAdViewability(t, z.viewable.bind(z)), N.listenForOnePxAdViewability(z.onePxViewable.bind(z))), Math.random() < .01 && Ge({
                                adWrapperWithDims: t,
                                mainContent: e,
                                positionService: O,
                                pageInfo: w,
                                bundleStartTime: n,
                                firePix: v,
                                errorHandler: I
                            })
                        }, oe = function() {
                            (new We).layout(E)
                        }, se = function() {
                            var e = we()(Ae.a.mark(function e() {
                                return Ae.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return Y(), e.next = 3, K();
                                        case 3:
                                            return J(), q(), X(), e.next = 8, $();
                                        case 8:
                                            return e.next = 10, ee();
                                        case 10:
                                            return te(), ne(), re(), e.next = 15, ie();
                                        case 15:
                                            ae(), oe();
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), e.prev = 40, e.next = 43, se();
                    case 43:
                        e.next = 48;
                        break;
                    case 45:
                        if (e.prev = 45, e.t0 = e.catch(40), I) try {
                            I.fireError(e.t0, gn)
                        } catch (e) {
                            ye(e)
                        } else ye(e.t0);
                    case 48:
                    case "end":
                        return e.stop()
                }
            }, e, null, [
                [40, 45]
            ])
        }))).apply(this, arguments)
    }
    var In = window._tlImpressionBusLoader;
    u.p = In.getPublicPath(), In.onload(hn)
}]);