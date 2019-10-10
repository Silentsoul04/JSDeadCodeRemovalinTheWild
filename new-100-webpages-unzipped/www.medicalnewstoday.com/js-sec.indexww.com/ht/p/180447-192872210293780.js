! function e(t, r, n) {
    function i(s, a) {
        if (!r[s]) {
            if (!t[s]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(s, !0);
                if (o) return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var f = r[s] = {
                exports: {}
            };
            t[s][0].call(f.exports, function(e) {
                var r = t[s][1][e];
                return i(r || e)
            }, f, f.exports, e, t, r, n)
        }
        return r[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < n.length; s++) i(n[s]);
    return i
}({
    1: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e, t) {
                return g[e] = E.IN_PROGRESS, new u(function(r) {
                    t.instance.retrieve().then(function() {
                        g[e] = E.COMPLETE, r()
                    }).catch(function(t) {
                        g[e] = E.COMPLETE, r()
                    })
                })
            }

            function r() {
                for (var e = [], r = u.defer(), n = Object.keys(y); n.length;) {
                    var o = f.randomSplice(n),
                        s = y[o];
                    if (s.enabled) try {
                        e.push(t(o, s))
                    } catch (e) {}
                }
                return u.all(e).then(function() {
                    i.emit("rti_partner_request_complete", {
                        requestsCompleted: e.length
                    }), r.resolve()
                }), r
            }

            function n() {
                for (var e in g) g.hasOwnProperty(e) && g[e] !== E.COMPLETE && i.emit("hs_identity_timeout", {
                    statsId: y[e].instance.getStatsId()
                })
            }

            function p() {
                var e = {};
                w || (w = !0, n());
                for (var t in y)
                    if (y.hasOwnProperty(t)) {
                        var r = y[t];
                        if (r.enabled) {
                            var i = r.instance.getResults();
                            g[t] === E.COMPLETE ? (e[t] = i ? {
                                data: i
                            } : {
                                data: {}
                            }, e[t].responsePending = !1) : e[t] = {
                                data: {},
                                responsePending: !0
                            }
                        }
                    }
                return e
            }

            function h() {
                m === E.NOT_STARTED && (_ = r(), m = E.IN_PROGRESS)
            }
            var v, y, m, g, _, E = {
                    NOT_STARTED: 0,
                    IN_PROGRESS: 1,
                    COMPLETE: 2
                },
                w = !1;
            return function() {
                i = c.services.EventsService, o = c.services.TimerService, v = a(), m = E.NOT_STARTED, g = {}, y = e.partners;
                for (var t = Object.keys(y), r = t.length - 1; r >= 0; r--) {
                    var n = f.randomSplice(t),
                        s = y[n];
                    if (s.enabled) try {
                        var u = l[n];
                        if (f.isObject(u) ? s.instance = d(u, s.configs) : s.instance = u(s.configs), !s.instance) {
                            s.enabled = !1;
                            continue
                        }
                        g[n] = E.NOT_STARTED
                    } catch (e) {
                        s.enabled = !1
                    }
                }
                v._setDirectInterface("IdentityLayer", {
                    retrieve: h,
                    getAllPartnerResults: p
                })
            }(), s.derive(v, {
                retrieve: h
            })
        }
        var i, o, s = e(5),
            a = e(2),
            u = e(10),
            c = e(26),
            f = e(14),
            d = e(18),
            l = {
                AdserverOrgIp: e(17),
                LiveRampIp: e(19)
            };
        t.exports = n
    }, {}],
    2: [function(e, t, r) {
        "use strict";

        function n() {
            function e(e, t) {
                return i.resolve(t)
            }

            function t(e, t) {
                u = {}, u[e] = t
            }

            function r(e) {
                c = e
            }

            function n() {
                return u
            }

            function o(e) {
                f = e
            }

            function s(e, t) {
                return f(e, t)
            }

            function a(e, t) {
                return i.resolve().then(function() {
                    return c(e, t)
                })
            }
            var u, c, f;
            return function() {
                u = null, c = e, f = e
            }(), {
                _setDirectInterface: t,
                _setExecutor: r,
                _executeNext: s,
                setNext: o,
                getDirectInterface: n,
                execute: a
            }
        }
        var i = e(10);
        e(15);
        t.exports = n
    }, {}],
    3: [function(e, t, r) {
        "use strict";
        e(15);
        t.exports = function() {
            function e(e, t) {
                return e = e || "http:", t = t || "https:", "https:" === document.location.protocol ? t : e
            }

            function t() {
                return ("CSS1Compat" === g.document.compatMode ? g.document.documentElement : g.document.body).clientWidth
            }

            function r() {
                return ("CSS1Compat" === g.document.compatMode ? g.document.documentElement : g.document.body).clientHeight
            }

            function n() {
                return g.screen.width
            }

            function i() {
                return g.screen.height
            }

            function o() {
                return document.referrer
            }

            function s() {
                return g.location.hostname
            }

            function a() {
                return navigator.userAgent
            }

            function u() {
                return navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
            }

            function c() {
                return g.location.pathname
            }

            function f() {
                try {
                    return window.top === window.self
                } catch (e) {
                    return !1
                }
            }

            function d() {
                return f() ? location.href : document.referrer || location.href
            }

            function l() {
                try {
                    return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
                } catch (e) {
                    return !1
                }
            }

            function p(e, t, r, n) {
                try {
                    for (var i, o = window, s = 0;;)
                        if (!(r && s < r)) {
                            if (n && s > n) break;
                            if (e && (i = e(o))) return i;
                            var a;
                            try {
                                a = o.frameElement
                            } catch (e) {
                                a = null
                            }
                            if (null === a) {
                                if (t && (i = t(o))) return i;
                                break
                            }
                            o = o.parent, s++
                        }
                } catch (e) {}
                return null
            }

            function h(e) {
                return p(function(t) {
                    return t.hasOwnProperty(e) ? t[e] : null
                })
            }

            function v(e, t) {
                var r = t || g,
                    n = r.document.createElement("iframe");
                return e && (n.src = e), n.width = 0, n.height = 0, n.scrolling = "no", n.marginWidth = 0, n.marginHeight = 0, n.frameBorder = 0, n.setAttribute("style", "border: 0px; vertical-align: bottom; visibility: hidden; display: none;"), r.document.body.appendChild(n), n
            }

            function y(e) {
                var t = e + "=",
                    r = g.document.cookie.split(";");
                for (var n in r)
                    if (r.hasOwnProperty(n)) {
                        for (var i = r[n];
                            " " === i.charAt(0);) i = i.substring(1, i.length);
                        if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
                    }
                return null
            }

            function m() {
                var e = !1;
                try {
                    new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
                } catch (t) {
                    navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = !0)
                }
                return e
            }
            var g;
            return function() {
                g = p(null, function(e) {
                    return e
                })
            }(), {
                topWindow: g,
                getProtocol: e,
                isLocalStorageSupported: l,
                getViewportWidth: t,
                getViewportHeight: r,
                isTopFrame: f,
                getScreenWidth: n,
                getScreenHeight: i,
                getReferrer: o,
                getPageUrl: d,
                getHostname: s,
                getUserAgent: a,
                getLanguage: u,
                getPathname: c,
                getNearestEntity: h,
                traverseContextTree: p,
                createHiddenIFrame: v,
                readCookie: y,
                isFlashSupported: m
            }
        }()
    }, {}],
    4: [function(e, t, r) {
        "use strict";
        var n = e(3),
            i = e(14),
            o = e(13);
        t.exports = function() {
            function e(e) {
                if (!s) return !1;
                try {
                    localStorage.removeItem(a + e)
                } catch (e) {
                    return !1
                }
                return !0
            }

            function t(t) {
                if (!s) return null;
                var r;
                try {
                    r = JSON.parse(localStorage.getItem(a + t))
                } catch (e) {
                    return null
                }
                return null === r ? null : !r.e || r.e < o.now() ? (e(t), null) : i.isObject(r.d) ? r.d : null
            }

            function r(e, t, r) {
                if (!s) return !1;
                r > u && (r = u);
                var n = o.now(),
                    i = {
                        t: n,
                        d: t,
                        e: n + r
                    };
                try {
                    localStorage.setItem(a + e, JSON.stringify(i))
                } catch (e) {
                    return !1
                }
                return !0
            }
            var s, a = "IXWRAPPER",
                u = 6048e5;
            return function() {
                s = n.isLocalStorageSupported()
            }(), {
                deleteData: e,
                getData: t,
                setData: r
            }
        }()
    }, {}],
    5: [function(e, t, r) {
        "use strict";
        e(15);
        t.exports = function() {
            function e(e) {
                for (var t in e) e.hasOwnProperty(t) && "_" === t[0] && "__" !== t.slice(0, 2) && delete e[t];
                return e
            }

            function t(t, r) {
                var n, i = {};
                for (n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
                for (n in r) r.hasOwnProperty(n) && (i[n] = r[n]);
                return e(i)
            }
            return {
                derive: t
            }
        }()
    }, {}],
    6: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                if (i.isFunction(e)) try {
                    e()
                } catch (e) {}
            }
            return function() {
                if (i.isArray(e))
                    for (var t = 0; t < e.length; t++) try {
                        e[t]()
                    } catch (e) {}
            }(), {
                push: t
            }
        }
        var i = e(14);
        t.exports = n
    }, {}],
    7: [function(e, t, r) {
        "use strict";
        var n = {
            DEFAULT_UID_LENGTH: 8,
            MIN_BANNER_DIMENSION: 1,
            MIN_BID_FLOOR: 0,
            MIN_SITE_ID: 0,
            DEFAULT_UID_CHARSET: "ALPHANUM",
            SESSION_ID_LENGTH: 8,
            PUBKIT_AD_ID_LENGTH: 16,
            RENDER_SERVICE_EXPIRY_SWEEP_TIMER: 3e4,
            DEFAULT_PARTNER_PRIORITY: 1,
            LineItemTypes: {
                ID_AND_SIZE: 1,
                ID_AND_PRICE: 2,
                CUSTOM: 3
            },
            DeviceTypeMethods: {
                USER_AGENT: 1,
                REFERENCE: 2,
                SIZE_MAPPING: 3
            },
            RequestArchitectures: {
                MRA: 1,
                SRA: 2
            },
            InitialLoadStates: {
                DISABLED: 1,
                ENABLED: 2
            },
            MediationLevels: {
                NONE: 1,
                HT_SLOT: 2,
                PARTNER: 3
            }
        };
        t.exports = n
    }, {}],
    8: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t() {
                return a.mobile() ? n.DeviceTypes.MOBILE : (a.tablet(), n.DeviceTypes.DESKTOP)
            }

            function r() {
                var t;
                try {
                    t = eval(e.configs.reference)
                } catch (e) {
                    throw s("INTERNAL_ERROR", "DeviceTypeChecker: could not eval() `reference`.")
                }
                if (!o.isFunction(t)) {
                    if (o.isString(t)) return t;
                    throw s("INVALID_TYPE", "DeviceTypeChecker: `reference` must refer to a function or a string")
                }
                try {
                    return t()
                } catch (e) {
                    throw s("INTERNAL_ERROR", "DeviceTypeChecker: could not execute `reference` function.")
                }
            }

            function u() {
                switch (c) {
                    case i.DeviceTypeMethods.USER_AGENT:
                        return t();
                    case i.DeviceTypeMethods.REFERENCE:
                        return r();
                    default:
                        return t()
                }
            }
            var c;
            return function() {
                c = i.DeviceTypeMethods[e.method] || i.DeviceTypeMethods.USER_AGENT
            }(), {
                getDeviceType: u
            }
        }
        var i = e(7),
            o = e(14),
            s = e(15),
            a = e(9);
        n.isValidDeviceType = function(e) {
            for (var t in n.DeviceTypes)
                if (n.DeviceTypes.hasOwnProperty(t) && "TABLET" !== t && e === n.DeviceTypes[t]) return !0;
            return !1
        }, n.DeviceTypes = {
            DESKTOP: "desktop",
            MOBILE: "mobile",
            TABLET: "tablet"
        }, t.exports = n
    }, {}],
    9: [function(e, t, r) {
        "use strict";
        var n, i, o;
        n = {}, o = window.navigator.userAgent.toLowerCase(), n.ios = function() {
            return n.iphone() || n.ipod() || n.ipad()
        }, n.iphone = function() {
            return !n.windows() && i("iphone")
        }, n.ipod = function() {
            return i("ipod")
        }, n.ipad = function() {
            return i("ipad")
        }, n.android = function() {
            return !n.windows() && i("android")
        }, n.androidPhone = function() {
            return n.android() && i("mobile")
        }, n.androidTablet = function() {
            return n.android() && !i("mobile")
        }, n.blackberry = function() {
            return i("blackberry") || i("bb10") || i("rim")
        }, n.blackberryPhone = function() {
            return n.blackberry() && !i("tablet")
        }, n.blackberryTablet = function() {
            return n.blackberry() && i("tablet")
        }, n.windows = function() {
            return i("windows")
        }, n.windowsPhone = function() {
            return n.windows() && i("phone")
        }, n.windowsTablet = function() {
            return n.windows() && i("touch") && !n.windowsPhone()
        }, n.fxos = function() {
            return (i("(mobile;") || i("(tablet;")) && i("; rv:")
        }, n.fxosPhone = function() {
            return n.fxos() && i("mobile")
        }, n.fxosTablet = function() {
            return n.fxos() && i("tablet")
        }, n.meego = function() {
            return i("meego")
        }, n.mobile = function() {
            return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego()
        }, n.tablet = function() {
            return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet()
        }, n.desktop = function() {
            return !n.tablet() && !n.mobile()
        }, i = function(e) {
            return -1 !== o.indexOf(e)
        }, t.exports = n
    }, {}],
    10: [function(e, t, r) {
        function n() {}

        function i(e) {
            if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], f(e, this)
        }

        function o(e, t) {
            for (; 3 === e._state;) e = e._value;
            if (0 === e._state) return void e._deferreds.push(t);
            e._handled = !0;
            var r = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null === r) return void(1 === e._state ? s : a)(t.promise, e._value);
            var n;
            try {
                n = r(e._value)
            } catch (e) {
                return void a(t.promise, e)
            }
            s(t.promise, n)
        }

        function s(e, t) {
            try {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                if (t && ("object" == typeof t || "function" == typeof t)) {
                    var r = t.then;
                    if (t instanceof i) return e._state = 3, e._value = t, void u(e);
                    if ("function" == typeof r) return void f(bind(r, t), e)
                }
                e._state = 1, e._value = t, u(e)
            } catch (t) {
                a(e, t)
            }
        }

        function a(e, t) {
            e._state = 2, e._value = t, u(e)
        }

        function u(e) {
            for (var t = 0, r = e._deferreds.length; t < r; t++) o(e, e._deferreds[t]);
            e._deferreds = null
        }

        function c(e, t, r) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r
        }

        function f(e, t) {
            var r = !1;
            try {
                e(function(e) {
                    r || (r = !0, s(t, e))
                }, function(e) {
                    r || (r = !0, a(t, e))
                })
            } catch (e) {
                if (r) return;
                r = !0, a(t, e)
            }
        }
        i.prototype.catch = function(e) {
            return this.then(null, e)
        }, i.prototype.then = function(e, t) {
            var r = new this.constructor(n);
            return o(this, new c(e, t, r)), r
        }, i.all = function(e) {
            var t = Array.prototype.slice.call(e);
            return new i(function(e, r) {
                function n(o, s) {
                    try {
                        if (s && ("object" == typeof s || "function" == typeof s)) {
                            var a = s.then;
                            if ("function" == typeof a) return void a.call(s, function(e) {
                                n(o, e)
                            }, r)
                        }
                        t[o] = s, 0 == --i && e(t)
                    } catch (e) {
                        r(e)
                    }
                }
                if (0 === t.length) return e([]);
                for (var i = t.length, o = 0; o < t.length; o++) n(o, t[o])
            })
        }, i.resolve = function(e) {
            return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
                t(e)
            })
        }, i.reject = function(e) {
            return new i(function(t, r) {
                r(e)
            })
        }, i.defer = function() {
            var e = {};
            return e.promise = new i(function(t, r) {
                e.resolve = t, e.reject = r
            }), e
        }, t.exports = i
    }, {}],
    11: [function(e, t, r) {
        "use strict";
        t.exports = function(e) {
            e = e.toLowerCase();
            var t = /(edge)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(iemobile)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [],
                r = {},
                n = {
                    browser: t[5] || t[3] || t[1] || "",
                    version: t[2] || t[4] || "0",
                    versionNumber: t[4] || t[2] || "0"
                };
            if (n.browser && (r[n.browser] = !0, r.version = n.version, r.versionNumber = parseInt(n.versionNumber, 10)), r.rv || r.iemobile) {
                n.browser = "msie", r.msie = !0
            }
            if (r.edge) {
                delete r.edge;
                n.browser = "msedge", r.msedge = !0
            }
            if (r.opr) {
                n.browser = "opera", r.opera = !0
            }
            if (r.safari && r.android) {
                n.browser = "android", r.android = !0
            }
            if (r.safari && r.kindle) {
                n.browser = "kindle", r.kindle = !0
            }
            if (r.safari && r.silk) {
                n.browser = "silk", r.silk = !0
            }
            return r.name = n.browser, r
        }(window.navigator.userAgent)
    }, {}],
    12: [function(e, t, r) {
        "use strict";
        var n = e(26),
            i = e(13),
            o = e(14),
            s = e(15),
            a = e(11);
        t.exports = function() {
            function e() {
                return d
            }

            function t(e) {
                var t = "";
                for (var r in e)
                    if (e.hasOwnProperty(r))
                        if (o.isObject(e[r]))
                            for (var n in e[r]) e[r].hasOwnProperty(n) && (t += r + "%5B" + n + "%5D=" + encodeURIComponent(e[r][n]) + "&");
                        else if (o.isArray(e[r]))
                    for (var i = 0; i < e[r].length; i++) t += r + "%5B%5D=" + encodeURIComponent(e[r][i]) + "&";
                else t += r + "=" + encodeURIComponent(e[r]) + "&";
                return t.slice(0, -1)
            }

            function r(e, r, n) {
                return "/" !== e[e.length - 1] && r && (e += "/"), r = r || [], o.isObject(n) && (n = t(n)), n = n ? "?" + n : "", e + r.join("/") + n
            }

            function u(e) {
                var s, u = null,
                    c = e.scope || window;
                if (e.useImgTag) s = c.document.createElement("img");
                else {
                    s = c.document.createElement("script"), s.type = "text/javascript";
                    var f = !0;
                    e.hasOwnProperty("async") && (f = e.async), s.async = f
                }
                var d = e.url;
                if (e.data) {
                    var l;
                    l = o.isString(e.data) ? e.data : t(e.data), d = r(e.url, null, l)
                }
                var p, h = !1,
                    v = function() {
                        try {
                            if (h) return;
                            h = !0, e.onTimeout && e.onTimeout(), e.useImgTag || e.continueAfterTimeout || s.parentNode.removeChild(s)
                        } catch (e) {}
                    };
                e.globalTimeout && n.services.TimerService.addTimerCallback(e.sessionId, v), e.timeout && (p = setTimeout(v, e.timeout));
                var y = function() {
                    try {
                        if (h) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(p);
                        e.onSuccess && e.onSuccess(null, i.now(), h), h = !0, e.useImgTag || s.parentNode.removeChild(s)
                    } catch (e) {}
                };
                null === s.onload ? s.onload = y : s.onreadystatechange = function() {
                    "loaded" !== s.readyState && "complete" !== s.readyState || (s.onreadystatechange = null, y())
                };
                var m = function() {
                    try {
                        if (h) {
                            if (!e.continueAfterTimeout) return
                        } else clearTimeout(p), h = !0;
                        e.onFailure && e.onFailure(), e.useImgTag || s.parentNode.removeChild(s)
                    } catch (e) {}
                };
                if (s.onerror = m, u = i.now(), s.src = d, !e.useImgTag) {
                    var g = c.document.getElementsByTagName("script")[0];
                    g ? g.parentNode.insertBefore(s, g) : a.msie || a.msedge || a.mozilla ? c.onload = function() {
                        c.document.body.appendChild(s)
                    } : c.document.body.appendChild(s)
                }
                return u
            }

            function c(a) {
                if (!e()) {
                    if (a.jsonp && "GET" === a.method) return u(a);
                    throw s("INTERNAL_ERROR", "XHR is not supported in this browser.")
                }
                var c = null,
                    f = a.scope || window,
                    d = new f.XMLHttpRequest,
                    l = a.url,
                    p = null;
                if (a.data)
                    if ("GET" === a.method) {
                        var h;
                        h = o.isString(a.data) ? a.data : t(a.data), l = r(a.url, null, h)
                    } else "POST" === a.method && (p = o.isString(a.data) ? a.data : JSON.stringify(a.data));
                var v = !0;
                a.hasOwnProperty("async") && (v = a.async), d.open(a.method, l, v);
                var y = "application/x-www-form-urlencoded; charset=UTF-8";
                if (void 0 !== a.contentType && (y = a.contentType), y && d.setRequestHeader("Content-Type", y), a.headers) {
                    a.headers.hasOwnProperty("X-Request-With") || d.setRequestHeader("X-Request-With", "XMLHttpRequest");
                    for (var m in a.headers) a.headers.hasOwnProperty(m) && d.setRequestHeader(m, a.headers[m])
                }
                a.withCredentials && (d.withCredentials = !0);
                var g, _ = !1,
                    E = function() {
                        try {
                            if (_) return;
                            _ = !0, a.onTimeout && a.onTimeout()
                        } catch (e) {}
                    };
                return a.globalTimeout && n.services.TimerService.addTimerCallback(a.sessionId, E), a.timeout && (a.continueAfterTimeout ? g = setTimeout(E, a.timeout) : (d.timeout = a.timeout, d.ontimeout = E)), (a.onSuccess || a.onFailure) && (d.onreadystatechange = function() {
                    if (4 === d.readyState) {
                        if (_) {
                            if (!a.continueAfterTimeout) return
                        } else clearTimeout(g), d.ontimeout = null;
                        if (200 === d.status) {
                            if (a.onSuccess) try {
                                a.onSuccess(d.responseText, i.now(), _)
                            } catch (e) {}
                        } else if (a.onFailure) try {
                            a.onFailure(d.status)
                        } catch (e) {}
                        _ = !0
                    }
                }), c = i.now(), d.send(p), c
            }

            function f(e) {
                return e.useImgTag = !0, u(e)
            }
            var d;
            return function() {
                d = window.XMLHttpRequest && "string" == typeof(new XMLHttpRequest).responseType
            }(), {
                ajax: c,
                jsonp: u,
                img: f,
                buildUrl: r,
                objToQueryString: t,
                isXhrSupported: e
            }
        }()
    }, {}],
    13: [function(e, t, r) {
        "use strict";
        var n = e(7);
        e(15);
        t.exports = function() {
            function e(e, t) {
                e.open("text/html", "replace"), e.write(t), e.close()
            }

            function t(e, t) {
                e = e || n.DEFAULT_UID_LENGTH, t = t || n.DEFAULT_UID_CHARSET;
                for (var r = "", i = 0; i < e; i++) r += u[t].charAt(Math.floor(Math.random() * u[t].length));
                return r
            }

            function r() {
                return t(8, "HEX") + "-" + t(4, "HEX") + "-4" + t(3, "HEX") + "-" + "89ab".charAt(Math.floor(4 * Math.random())) + t(3, "HEX") + "-" + t(8, "HEX")
            }

            function i() {
                return (new Date).getTime()
            }

            function o() {
                return a.getTimezoneOffset()
            }

            function s() {}
            var a, u = {
                ALPHANUM: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                ALPHA: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                ALPHA_UPPER: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                ALPHA_LOWER: "abcdefghijklmnopqrstuvwxyz",
                HEX: "0123456789abcdef",
                NUM: "0123456789"
            };
            return function() {
                a = new Date
            }(), {
                UidCharacterSets: u,
                generateUniqueId: t,
                generateUuid: r,
                now: i,
                getTimezoneOffset: o,
                documentWrite: e,
                noOp: s
            }
        }()
    }, {}],
    14: [function(e, t, r) {
        "use strict";
        var n = e(15);
        t.exports = function() {
            function e(e) {
                return void 0 === e ? "undefined" : {}.toString.call(e).match(A)[1].toLowerCase()
            }

            function t(t) {
                return "string" === e(t)
            }

            function r(t) {
                return "number" === e(t) && !isNaN(t)
            }

            function i(t) {
                return "number" === e(t) || "string" === e(t) && !isNaN(Number(t))
            }

            function o(e) {
                return r(e) && e % 1 == 0
            }

            function s(t) {
                return "function" === e(t)
            }

            function a(t) {
                return "boolean" === e(t)
            }

            function u(t) {
                return "object" === e(t)
            }

            function c(t) {
                return "regexp" === e(t)
            }

            function f(e, t) {
                var r = e.indexOf(t);
                r > -1 && e.splice(r, 1)
            }

            function d(r, i, o) {
                if ("array" !== e(r)) return !1;
                if (void 0 !== i) {
                    if (!t(i)) throw n("INVALID_TYPE", "`type` must be a string");
                    if ("class" === i) {
                        if (!t(o)) throw n("INVALID_TYPE", "`className` must be a string");
                        for (var s = 0; s < r.length; s++)
                            if ("object" != typeof r[s] || r[s].__type__ !== o) return !1
                    } else
                        for (var a = 0; a < r.length; a++)
                            if (e(r[a]) !== i) return !1
                }
                return !0
            }

            function l(e) {
                return e.length ? e.splice(Math.floor(Math.random() * e.length), 1)[0] : null
            }

            function p(e) {
                var t, r, n;
                for (n = e.length - 1; n > 0; n--) t = Math.floor(Math.random() * (n + 1)), r = e[n], e[n] = e[t], e[t] = r;
                return e
            }

            function h(e) {
                return JSON.parse(JSON.stringify(e))
            }

            function v() {
                for (var e = Array.prototype.slice.call(arguments), t = {}, r = 0; r < e.length; r++)
                    for (var n in e[r]) e[r].hasOwnProperty(n) && (t[n] = e[r][n]);
                return t
            }

            function y() {
                for (var e = Array.prototype.slice.call(arguments), t = [], r = 0; r < e.length; r++)
                    for (var n = 0; n < e[r].length; n++) t.push(e[r][n]);
                return t
            }

            function m(e) {
                if (t(e)) {
                    if ("" !== e) return !1
                } else if (u(e)) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) return !1
                } else {
                    if (!d(e)) throw n("INVALID_TYPE", "`entity` must be either a string, object, or an array");
                    if (e.length) return !1
                }
                return !0
            }

            function g(e, t, r) {
                void 0 === r && (r = N);
                for (var n = 0; n < e.length; n++) {
                    for (var i = !1, o = 0; o < t.length && !(i = r(e[n], t[o])); o++);
                    if (!i) return !1
                }
                return !0
            }

            function _(e, t, r, n) {
                return t = t || [], n = n || null, r = r || "Error occurred while calling function.",
                    function() {
                        try {
                            e.apply(n, t)
                        } catch (e) {}
                    }
            }

            function E(e, t) {
                var r = "" + e;
                if (t = +t, t != t && (t = 0), t < 0) throw new RangeError("repeat count must be non-negative");
                if (t == 1 / 0) throw new RangeError("repeat count must be less than infinity");
                if (t = Math.floor(t), 0 == r.length || 0 == t) return "";
                if (r.length * t >= 1 << 28) throw new RangeError("repeat count must not overflow maximum string size");
                for (var n = "", i = 0; i < t; i++) n += r;
                return n
            }

            function w(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += E(r, t / r.length)), r.slice(0, t) + String(e))
            }

            function T(e, t, r) {
                return t >>= 0, r = String(r || " "), e.length > t ? String(e) : (t -= e.length, t > r.length && (r += E(r, t / r.length)), String(e) + r.slice(0, t))
            }

            function I(e, t) {
                t = t || null;
                try {
                    return eval.call(t, e)
                } catch (e) {}
                return null
            }

            function b(e, t, r) {
                r = r || null;
                try {
                    return eval.call(r, e + "(" + t.join() + ")")
                } catch (e) {}
                return null
            }

            function S() {
                for (var e = Array.prototype.slice.call(arguments), t = e[0], r = 1; r < e.length; r++) Array.prototype.push.apply(t, e[r]);
                return t
            }
            var A = /\s([a-zA-Z]+)/,
                N = function(e, t) {
                    return e === t
                };
            return {
                randomSplice: l,
                shuffle: p,
                deepCopy: h,
                mergeObjects: v,
                mergeArrays: y,
                isArray: d,
                isEmpty: m,
                isInteger: o,
                isString: t,
                isNumeric: i,
                isRegex: c,
                isNumber: r,
                isBoolean: a,
                isFunction: s,
                isObject: u,
                isArraySubset: g,
                getType: e,
                tryCatchWrapper: _,
                arrayDelete: f,
                repeatString: E,
                padStart: w,
                padEnd: T,
                evalVariable: I,
                evalFunction: b,
                appendToArray: S
            }
        }()
    }, {}],
    15: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            return new Error(e + ": " + t)
        }
        n.ErrorTokens = {
            MISSING_ARGUMENT: 1,
            INVALID_TYPE: 2,
            INVALID_VALUE: 3,
            MISSING_PROPERTY: 4,
            NUMBER_OUT_OF_RANGE: 5,
            EMPTY_ENTITY: 6,
            INTERNAL_ERROR: 7,
            DUPLICATE_ENTITY: 8,
            INVALID_ARGUMENT: 9,
            INVALID_CONFIG: 10
        }, t.exports = n
    }, {}],
    16: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t() {
                return r
            }
            var r;
            return function() {
                o.DeviceTypeChecker = i(e.DeviceTypeChecker), r = {
                    Services: {},
                    Layers: {}
                };
                for (var t = 0; t < a.length; t++) {
                    var n = a[t].name,
                        c = a[t].constructor(e.Services[n]);
                    c && (o.services[n] = c, c.getDirectInterface && c.getDirectInterface() && (r.Services = s.mergeObjects(r.Services, c.getDirectInterface())))
                }
                for (var f, d = e.Layers.length - 1; d >= 0; d--) {
                    var l = e.Layers[d].layerId,
                        p = u[l](e.Layers[d].configs);
                    p.getDirectInterface() && (r.Layers = s.mergeObjects(r.Layers, p.getDirectInterface())), f && p.setNext(f.execute), f = p
                }
            }(), {
                getDirectInterface: t
            }
        }
        var i = e(8),
            o = e(26),
            s = e(14),
            a = (e(15), [{
                name: "EventsService",
                constructor: e(20)
            }, {
                name: "GptService",
                constructor: e(23)
            }, {
                name: "HeaderStatsService",
                constructor: e(21)
            }, {
                name: "TimerService",
                constructor: e(24)
            }, {
                name: "ComplianceService",
                constructor: e(22)
            }]),
            u = {
                IdentityLayer: e(1)
            };
        t.exports = n
    }, {}],
    17: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                var t, r = "0";
                y = {
                    source: v,
                    uids: []
                };
                for (var n in e) e.hasOwnProperty(n) && ("TDID" === n && (t = e[n]), "TDID_LOOKUP" === n && (r = "TRUE" === e[n] ? "1" : "0"), y.uids.push({
                    id: e[n],
                    ext: {
                        rtiPartner: n
                    }
                }));
                t && (g = t + "," + r)
            }

            function r() {
                return l.statsId
            }

            function n() {
                return y
            }

            function f() {
                var e = {};
                return g && (e[l.targetingKeys.exchangeBidding] = g), e
            }

            function d() {
                return new u(function(e) {
                    var r = s.getData(m);
                    if (r) {
                        i.emit("hs_identity_cached", {
                            statsId: l.statsId
                        });
                        var n;
                        return "match" === r.response ? (n = "hs_identity_response", t(r.data)) : n = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", i.emit(n, {
                            statsId: l.statsId
                        }), void e()
                    }
                    i.emit("hs_identity_request", {
                        statsId: l.statsId
                    }), a.ajax({
                        url: p,
                        data: {
                            ttd_pid: "casale",
                            fmt: "json",
                            p: h
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var n;
                            try {
                                n = JSON.parse(r)
                            } catch (t) {
                                return i.emit("hs_identity_error", {
                                    statsId: l.statsId
                                }), s.setData(m, {
                                    response: "error"
                                }, l.features.identityDataExpiry.error), void e()
                            }
                            if (!n.hasOwnProperty("TDID")) return i.emit("hs_identity_error", {
                                statsId: l.statsId
                            }), s.setData(m, {
                                response: "error"
                            }, l.features.identityDataExpiry.error), void e();
                            i.emit("hs_identity_response", {
                                statsId: l.statsId
                            }), t(n), s.setData(m, {
                                response: "match",
                                data: n
                            }, l.features.identityDataExpiry.match), e()
                        },
                        onFailure: function(t) {
                            i.emit("hs_identity_error", {
                                statsId: l.statsId
                            }), s.setData(m, {
                                response: "error"
                            }, l.features.identityDataExpiry.error), e()
                        }
                    })
                })
            }
            if (!a.isXhrSupported()) return null;
            var l, p, h, v, y, m, g;
            return function() {
                i = c.services.EventsService, l = {
                    partnerId: "AdserverOrgIp",
                    statsId: "ADSORG",
                    version: "1.2.0",
                    features: {
                        identityDataExpiry: {
                            match: 6048e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    },
                    targetingKeys: {
                        exchangeBidding: "ixpid_1"
                    }
                }, p = o.getProtocol() + "//match.adsrvr.org/track/rid", h = e.publisherId, v = "adserver.org", m = "AdserverOrgIp", y = null, g = ""
            }(), {
                getStatsId: r,
                getResults: n,
                getTargets: f,
                retrieve: d
            }
        }
        var i, o = e(3),
            s = e(4),
            a = e(12),
            u = e(10),
            c = e(26);
        e(15);
        t.exports = n
    }, {}],
    18: [function(e, t, r) {
        "use strict";

        function n(e, t) {
            function r(e, t) {
                var r = {
                    match: "hs_identity_response",
                    pass: "hs_identity_pass",
                    error: "hs_identity_error"
                }[e];
                i.emit(r, {
                    statsId: E
                });
                var n = {
                        response: e,
                        data: t
                    },
                    o = g.cacheExpiry[e];
                s.setData(S, n, o), i.emit("ip_module_result_" + _, e, t), "match" === e && (T = t), b && b()
            }

            function n(e) {
                var t = s.getData(e);
                return t && "match" === t.response && t.data ? t.data : null
            }

            function l(e) {
                var t = {
                    url: e.url,
                    method: e.method,
                    async: !0,
                    withCredentials: !0,
                    jsonp: !1,
                    continueAfterTimeout: !1,
                    timeout: e.timeout || 0
                };
                return e.onSuccess && (t.onSuccess = e.onSuccess), e.onTimeout && (t.onTimeout = e.onTimeout), e.onFailure && (t.onFailure = e.onFailure), void 0 !== e.data && (t.data = e.data), void 0 !== e.contentType && (t.contentType = e.contentType), a.ajax(t)
            }

            function p(e) {
                I = e
            }

            function h() {
                return E
            }

            function v() {
                return T
            }

            function y() {
                if (I) return I;
                if (T && d.isArray(T.uids) && T.uids.length && T.uids[0].id) {
                    var e = {};
                    return e[g.targetingKeys.exchangeBidding] = T.uids[0].id, e
                }
                return null
            }

            function m() {
                return new u(function(e) {
                    b = e;
                    var t = s.getData(S);
                    if (t) return i.emit("hs_identity_cached", {
                        statsId: E
                    }), void r(t.response, t.data);
                    i.emit("ip_module_retrieve_" + _)
                })
            }
            var g, _, E, w, T, I, b, S;
            return function() {
                i = c.services.EventsService, g = e.profile, _ = g.partnerId, E = g.statsId, T = null, I = null, b = null, S = _, w = {
                    Utilities: {
                        buildUrl: a.buildUrl,
                        getPageUrl: o.getPageUrl,
                        getProtocol: o.getProtocol,
                        getReferrer: o.getReferrer,
                        getTime: f.now,
                        getType: d.getType,
                        isArray: d.isArray,
                        isEmpty: d.isEmpty,
                        isFunction: d.isFunction,
                        isInteger: d.isInteger,
                        isNumeric: d.isNumeric,
                        isString: d.isString,
                        isTopFrame: o.isTopFrame,
                        isXhrSupported: a.isXhrSupported,
                        getIdentityResultFrom: n,
                        ajax: l
                    },
                    onRetrieve: i.on.bind(null, "ip_module_retrieve_" + _),
                    onResult: i.on.bind(null, "ip_module_result_" + _),
                    registerMatch: r.bind(null, "match"),
                    registerPass: r.bind(null, "pass"),
                    registerError: r.bind(null, "error"),
                    registerEbTargeting: p,
                    configs: t
                }, e.main(w)
            }(), {
                getStatsId: h,
                getResults: v,
                getTargets: y,
                retrieve: m
            }
        }
        var i, o = e(3),
            s = e(4),
            a = e(12),
            u = e(10),
            c = e(26),
            f = e(13),
            d = e(14);
        t.exports = n
    }, {}],
    19: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                m = {
                    source: y,
                    uids: [{
                        id: e,
                        ext: {
                            rtiPartner: "idl"
                        }
                    }]
                }
            }

            function r() {
                return p.statsId
            }

            function n() {
                return m
            }

            function d() {
                var e = {};
                return m && (e[p.targetingKeys.exchangeBidding] = m.uids[0].id), e
            }

            function l() {
                return new u(function(e) {
                    var r = s.getData(g);
                    if (r) {
                        i.emit("hs_identity_cached", {
                            statsId: p.statsId
                        });
                        var n;
                        return "match" === r.response ? (n = "hs_identity_response", t(r.envelope)) : n = "pass" === r.response ? "hs_identity_pass" : "hs_identity_error", i.emit(n, {
                            statsId: p.statsId
                        }), void e()
                    }
                    i.emit("hs_identity_request", {
                        statsId: p.statsId
                    }), a.ajax({
                        url: h,
                        data: {
                            pid: v,
                            rt: "envelope"
                        },
                        method: "GET",
                        withCredentials: !0,
                        onSuccess: function(r) {
                            var n;
                            try {
                                n = JSON.parse(r)
                            } catch (t) {
                                return i.emit("hs_identity_error", {
                                    statsId: p.statsId
                                }), s.setData(g, {
                                    response: "error"
                                }, p.features.identityDataExpiry.error), void e()
                            }
                            return f.isEmpty(n) ? (i.emit("hs_identity_pass", {
                                statsId: p.statsId
                            }), s.setData(g, {
                                response: "pass"
                            }, p.features.identityDataExpiry.pass), void e()) : n.hasOwnProperty("envelope") ? f.isEmpty(n.envelope) ? (i.emit("hs_identity_pass", {
                                statsId: p.statsId
                            }), s.setData(g, {
                                response: "pass"
                            }, p.features.identityDataExpiry.pass), void e()) : (i.emit("hs_identity_response", {
                                statsId: p.statsId
                            }), t(n.envelope), s.setData(g, {
                                response: "match",
                                envelope: n.envelope
                            }, p.features.identityDataExpiry.match), void e()) : (i.emit("hs_identity_error", {
                                statsId: p.statsId
                            }), s.setData(g, {
                                response: "error"
                            }, p.features.identityDataExpiry.error), void e())
                        },
                        onFailure: function(t) {
                            204 === t ? (i.emit("hs_identity_pass", {
                                statsId: p.statsId
                            }), s.setData(g, {
                                response: "pass"
                            }, p.features.identityDataExpiry.pass)) : (i.emit("hs_identity_error", {
                                statsId: p.statsId
                            }), s.setData(g, {
                                response: "error"
                            }, p.features.identityDataExpiry.error)), e()
                        }
                    })
                })
            }
            if (!a.isXhrSupported()) return null;
            var p, h, v, y, m, g;
            return function() {
                i = c.services.EventsService, p = {
                    partnerId: "LiveRampIp",
                    statsId: "LVRAMP",
                    version: "1.1.0",
                    features: {
                        identityDataExpiry: {
                            match: 864e5,
                            pass: 864e5,
                            error: 864e5
                        }
                    },
                    targetingKeys: {
                        exchangeBidding: "ixpid_3"
                    }
                }, h = o.getProtocol() + "//api.rlcdn.com/api/identity", v = 2, y = "liveramp.com", g = "LiveRampIp", m = null
            }(), {
                getStatsId: r,
                getResults: n,
                getTargets: d,
                retrieve: l
            }
        }
        var i, o = e(3),
            s = e(4),
            a = e(12),
            u = e(10),
            c = e(26),
            f = (e(15), e(14));
        t.exports = n
    }, {}],
    20: [function(e, t, r) {
        "use strict";

        function n() {
            function e(e, t, r) {
                s.hasOwnProperty(e) || (s[e] = []);
                var n = i.generateUniqueId();
                return s[e].push({
                    id: n,
                    fn: r,
                    once: t
                }), n
            }

            function t(t, r) {
                return e(t, !1, r)
            }

            function r(t, r) {
                return e(t, !0, r)
            }

            function n(e) {
                for (var t in s)
                    if (s.hasOwnProperty(t))
                        for (var r = s[t].length - 1; r >= 0; r--)
                            if (s[t][r].id === e) return void s[t].splice(r, 1)
            }

            function o() {
                var e = Array.prototype.slice.call(arguments),
                    t = e.shift();
                if (t && s.hasOwnProperty(t))
                    for (var r = s[t].length - 1; r >= 0; r--) {
                        try {
                            s[t][r].fn.apply(null, e)
                        } catch (e) {}
                        s[t][r].once && s[t].splice(r, 1)
                    }
            }
            var s;
            return function() {
                s = {}
            }(), {
                on: t,
                once: r,
                off: n,
                emit: o
            }
        }
        var i = e(13);
        e(15);
        t.exports = n
    }, {}],
    21: [function(e, t, r) {
        "use strict";

        function n(e) {
            function t(e) {
                var t = {
                    auction_cycle: "ac",
                    global_timeout: "gt",
                    bid_requests: "brq",
                    bid_responses: "brs",
                    bid_errors: "be",
                    bid_passes: "bp",
                    bid_timeouts: "bt",
                    dfp_kv_pushed: "kv",
                    top_bid: "tb",
                    prefetch: "p",
                    res_latency: "rl",
                    partner_timeout: "pt"
                };
                return t.hasOwnProperty(e) ? t[e] : e
            }

            function r() {
                if (c.isEmpty(b)) return [];
                var e = {
                    s: "identity",
                    t: A,
                    xslots: {}
                };
                for (var r in b)
                    if (b.hasOwnProperty(r)) {
                        e.xslots.hasOwnProperty(r) || (e.xslots[r] = {});
                        for (var n = 0; n < b[r].length; n++) {
                            var i = b[r][n];
                            "bid_requests" !== i.n && "res_latency" !== i.n || (i.v = String(i.v)), e.xslots[r].hasOwnProperty(i.x) || (e.xslots[r][i.x] = {});
                            var o = t(i.n);
                            e.xslots[r][i.x][o] = i.v
                        }
                    }
                return b = {}, [e]
            }

            function n(e, t) {
                c.isEmpty(b) && (A = u.now());
                var r = t.statsId;
                b[r] = b[r] || [];
                var n = {
                    b: r,
                    x: N ? "after" : "before"
                };
                "hs_identity_request" === e ? (n.n = "bid_requests", n.v = 1, S[r] = u.now()) : "hs_identity_cached" === e ? (n.n = "bid_requests", n.v = 0) : "hs_identity_response" === e ? (n.n = "bid_responses", n.v = 1) : "hs_identity_error" === e ? (n.n = "bid_errors", n.v = 1) : "hs_identity_pass" === e ? (n.n = "bid_passes", n.v = 1) : "hs_identity_timeout" === e ? (n.n = "bid_timeouts", n.v = 1) : "hs_identity_bid_latency" === e && (n.n = "res_latency", n.v = u.now() - S[r]), b[r].push(n)
            }

            function f(e) {
                if (I.hasOwnProperty(e) && I[e] !== P.IPR && I[e] !== P.SENT) {
                    var t = {
                        p: "display",
                        d: a.DeviceTypeChecker.getDeviceType(),
                        c: p,
                        s: e,
                        w: v,
                        t: u.now(),
                        pg: {
                            t: y,
                            e: E[e]
                        }
                    };
                    h.auctionCycle && (t.ac = _[e]), t.sl = r(), t.akamaiDebugInfo = T[e], delete T[e], delete E[e], delete w[e];
                    var n = s.buildUrl(d, null, {
                        s: l,
                        u: o.getPageUrl(),
                        v: 3
                    });
                    s.ajax({
                        method: "POST",
                        url: n,
                        data: t
                    }), I[e] = P.SENT
                }
            }
            if (!s.isXhrSupported()) return null;
            var d, l, p, h, v, y, m, g, _, E, w, T, I, b, S, A, N, P = {
                    IPR: 0,
                    DONE: 1,
                    SENT: 2
                },
                D = {
                    hs_session_start: function(e) {
                        var t = e.sessionId;
                        I.hasOwnProperty(t) || (I[t] = P.IPR, g[t] = u.now(), E[t] = [], w[t] = {})
                    },
                    hs_session_end: function(e) {
                        var t = e.sessionId;
                        I.hasOwnProperty(t) && I[t] !== P.DONE && (_[t] = String(u.now() - g[t]), delete g[t], setTimeout(function() {
                            I[t] = P.DONE, f(t)
                        }, 0))
                    },
                    hs_akamai_debug: function(e) {
                        var t = e.sessionId;
                        T[t] = {}, T[t].hostname = e.hostname, e.hasOwnProperty("requestHost") && (T[t].requestHost = e.requestHost), e.hasOwnProperty("akamaiPresent") && (T[t].akamaiPresent = e.akamaiPresent)
                    },
                    hs_identity_request: function(e) {
                        n("hs_identity_request", e)
                    },
                    hs_identity_cached: function(e) {
                        n("hs_identity_cached", e)
                    },
                    hs_identity_response: function(e) {
                        n("hs_identity_response", e), i.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_error: function(e) {
                        n("hs_identity_error", e), i.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_pass: function(e) {
                        n("hs_identity_pass", e), i.emit("hs_identity_bid_latency", e)
                    },
                    hs_identity_bid_latency: function(e) {
                        c.isNumber(S[e.statsId]) && n("hs_identity_bid_latency", e)
                    },
                    hs_identity_timeout: function(e) {
                        n("hs_identity_timeout", e), N = !0
                    },
                    hs_define_identity_timeout: function(e) {}
                };
            return function() {
                i = a.services.EventsService, y = u.now(), d = o.getProtocol("http://as", "https://as-sec") + ".casalemedia.com/headerstats", l = e.siteId, p = e.configId, h = e.options, v = l + u.now(), v += u.generateUniqueId(32 - v.length), a.instanceId = v, I = {}, E = {}, w = {}, T = {}, m = {}, g = {}, _ = {}, b = {}, S = {}, N = !1;
                for (var t in D) D.hasOwnProperty(t) && a.services.EventsService.on(t, D[t])
            }(), {}
        }
        var i, o = e(3),
            s = e(12),
            a = e(26),
            u = e(13),
            c = e(14);
        e(15);
        t.exports = n
    }, {}],
    22: [function(e, t, r) {
        "use strict";

        function n() {
            function e() {
                return {
                    applies: !0,
                    consentString: ""
                }
            }

            function t() {
                return !1
            }

            function r(e) {
                return e
            }

            function n() {
                return i.resolve()
            }
            return {
                gdpr: {
                    getConsent: e,
                    setApplies: function() {}
                },
                isPrivacyEnabled: t,
                delay: r,
                wait: n
            }
        }
        var i = e(10);
        t.exports = n
    }, {}],
    23: [function(e, t, r) {
        "use strict";
        e(13);
        t.exports = function() {
            return {}
        }
    }, {}],
    24: [function(e, t, r) {
        "use strict";

        function n() {
            function e(e) {
                return function() {
                    u[e].state = c.TERMINATED;
                    for (var t = 0; t < u[e].cbs.length; t++) try {
                        u[e].cbs[t]()
                    } catch (e) {}
                    delete u[e].cbs, delete u[e].timer
                }
            }

            function t(t, r, n) {
                var s = o.generateUniqueId(i.SESSION_ID_LENGTH);
                return r = !!r, n = n ? [n] : [], u[s] = {
                    state: c.NEW,
                    cbs: n,
                    timeout: t
                }, r && (u[s].state = c.RUNNABLE, u[s].timer = setTimeout(e(s), t)), s
            }

            function r(t) {
                u.hasOwnProperty(t) && u[t].state === c.NEW && (u[t].state = c.RUNNABLE, u[t].timer = setTimeout(e(t), u[t].timeout))
            }

            function n(e, t) {
                u.hasOwnProperty(e) && u[e].state !== c.TERMINATED && u[e].cbs.unshift(t)
            }

            function s(e) {
                return u.hasOwnProperty(e) ? u[e].state : null
            }

            function a(e) {
                u.hasOwnProperty(e) && u[e].state !== c.TERMINATED && (u[e].state = c.TERMINATED, clearTimeout(u[e].timer), delete u[e].cbs, delete u[e].timer)
            }
            var u, c = {
                NEW: 0,
                RUNNABLE: 1,
                TERMINATED: 2
            };
            return function() {
                u = {}
            }(), {
                TimerStates: c,
                createTimer: t,
                startTimer: r,
                addTimerCallback: n,
                getTimerState: s,
                clearTimer: a
            }
        }
        var i = e(7),
            o = e(13);
        e(15);
        t.exports = n
    }, {}],
    25: [function(e, t, r) {
        "use strict";
        var n, i, o = (e(3), e(6)),
            s = e(16),
            a = e(26),
            u = e(14);
        window[a.NAMESPACE] = window[a.NAMESPACE] || {}, window[a.NAMESPACE].cmd = window[a.NAMESPACE].cmd || [];
        var c = window[a.NAMESPACE].cmd;
        window[a.NAMESPACE] = function() {
            function e(e, t, r) {
                var n = "";
                try {
                    if (!u.isBoolean(t)) return i.emit("error", "`once` must be a boolean"), n;
                    if (!u.isFunction(r)) return i.emit("error", "`callback` must be a function"), n;
                    if (!u.isString(e)) return i.emit("error", "`eventName` must be a string"), n;
                    if (!l.hasOwnProperty(e)) return i.emit("error", "Unrecognized event " + e), n;
                    if ("rti_partner_request_complete" === e && !0 === d.emitted) return r(e, d.args), n;
                    var o = function() {
                        var t = Array.prototype.slice.call(arguments);
                        r(e, JSON.stringify(t))
                    };
                    n = t ? i.once(e, o) : i.on(e, o)
                } catch (e) {
                    i.emit("error", e)
                }
                return n
            }

            function t(e) {
                try {
                    if (!u.isString(e)) return void i.emit("error", "`subscriptionId` must be a string");
                    i.off(e)
                } catch (e) {
                    i.emit("error", e)
                }
            }

            function r() {
                return c.Layers.IdentityLayer.getAllPartnerResults()
            }
            var o, c, f, d = {
                    emitted: !1,
                    args: {}
                },
                l = {
                    error: 1,
                    warning: 2,
                    rti_partner_request_complete: 3
                };
            if (function() {
                    try {
                        o = {
                            DeviceTypeChecker: {
                                method: "USER_AGENT",
                                configs: {}
                            },
                            Services: {
                                EventsService: {},
                                TimerService: {},
                                HeaderStatsService: {
                                    siteId: "354200",
                                    configId: "192872210293780",
                                    options: {
                                        auctionCycle: !0
                                    }
                                }
                            },
                            Layers: [{
                                layerId: "IdentityLayer",
                                configs: {
                                    partners: {
                                        AdserverOrgIp: {
                                            enabled: !0,
                                            configs: {
                                                publisherId: 180447
                                            }
                                        },
                                        LiveRampIp: {
                                            enabled: !0,
                                            configs: {}
                                        }
                                    }
                                }
                            }]
                        }, c = s(o).getDirectInterface(), n = a.services.ComplianceService, i = a.services.EventsService;
                        var t = Math.random().toString(36).slice(-5);
                        i.emit("hs_session_start", {
                            sessionId: t
                        }), e("rti_partner_request_complete", !0, function(e, r) {
                            d = {
                                emitted: !0,
                                args: r
                            }, i.emit("hs_session_end", {
                                sessionId: t
                            })
                        }), n.wait().then(function() {
                            c.Layers.IdentityLayer.retrieve()
                        }).catch(function(e) {})
                    } catch (e) {
                        f = {
                            subscribeEvent: function() {
                                return ""
                            },
                            unsubscribeEvent: function() {}
                        }
                    }
                }(), f) return f;
            var p = {};
            if (window[a.NAMESPACE])
                for (var h in window[a.NAMESPACE]) window[a.NAMESPACE].hasOwnProperty(h) && (p[h] = window[a.NAMESPACE][h]);
            return p.subscribeEvent = e, p.unsubscribeEvent = t, p.getIdentityInfo = r, p
        }(), window[a.NAMESPACE].cmd = o(c)
    }, {}],
    26: [function(e, t, r) {
        "use strict";
        var n = {
            NAMESPACE: "headertag",
            PRODUCT: "IdentityLibrary",
            services: {},
            DeviceTypeChecker: {},
            initQueue: [],
            globalTimeout: null,
            instanceId: null,
            version: "2.14.0"
        };
        t.exports = n
    }, {}]
}, {}, [25]);