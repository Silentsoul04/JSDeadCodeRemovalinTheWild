/*
 * Approach v1.4.3
 * Deeplink Library
 * @copyright 2016 Yahoo Japan Corporation
 */
! function(e) {
    function r(t) {
        if (n[t]) return n[t].exports;
        var o = n[t] = {
            exports: {},
            id: t,
            loaded: !1
        };
        return e[t].call(o.exports, o, o.exports, r), o.loaded = !0, o.exports
    }
    var n = {};
    return r.m = e, r.c = n, r.p = "./dest", r(0)
}([function(e, r, n) {
    window.YAHOO = window.YAHOO || {}, YAHOO.JP = YAHOO.JP || {}, window.YAHOO.JP.Approach = function(e) {
        var r = {},
            t = n(1)(),
            o = function() {
                var r = n(3)();
                r.checkWebView().success(function(r) {
                    r.yjdnAppId = e.yjdnAppId || !1, r.yjdnEAppId = e.yjdnEAppId || !1, r.devMode = e.devMode || !1, r.testMode = e.testMode || !1, r.apiUrl = e.apiUrl || !1, i("webview", r)
                }).fail(function(r) {
                    var n = {};
                    n.yjdnAppId = e.yjdnAppId || !1, n.yjdnEAppId = e.yjdnEAppId || !1, n.devMode = e.devMode || !1, n.testMode = e.testMode || !1, n.apiUrl = e.apiUrl || !1, i("browser", n)
                })
            },
            i = function(e, r) {
                if (t.getAllRequest) {
                    var o = t.getAllRequest(),
                        i = {
                            browser: n(4),
                            webview: n(11)
                        }[e];
                    t = i(r), a(o)
                }
            },
            a = function(e) {
                for (var r = null; r = e.shift();)
                    if (r.method) switch (r.method) {
                        case "replaceAppScheme":
                            t.replaceAppScheme(r.url, r.option, r.apr).success(r.success).fallback(r.fallback).fail(r.fail)
                    }
            };
        return r.openRedirect = function() {
            return t.openRedirect.apply(this, arguments)
        }, r.replaceAppScheme = function() {
            return t.replaceAppScheme.apply(this, arguments)
        }, setTimeout(o), r
    }, window.YAHOO.JP.Approach.OPT_APP_OPEN = 1, window.YAHOO.JP.Approach.OPT_STORE_OPEN = 2, window.YAHOO.JP.Approach.OPT_STORE_DEFERRED_OPEN = 4, window.YAHOO.JP.Approach.DIRECTION_APP = 1, window.YAHOO.JP.Approach.DIRECTION_STORE = 2, window.YAHOO.JP.Approach.DIRECTION_WEB = 3, window.YAHOO.JP.Approach.ULT_EVENT = "deeplink"
}, function(e, r, n) {
    var t = function() {
        var e = {},
            r = [],
            t = n(2);
        return e.openRedirect = function(r, n) {
            return e.replaceAppScheme(window.location.href, r, n)
        }, e.replaceAppScheme = function(e, n, o) {
            var i = t();
            return setTimeout(function() {
                var t = {};
                t.method = "replaceAppScheme", t.url = e, t.option = n, t.apr = o || {}, t.success = i.success, t.fallback = i.fallback, t.fail = i.fail, r.push(t)
            }), i.promise()
        }, e.getAllRequest = function() {
            return r
        }, e
    };
    e.exports = t
}, function(e, r) {
    var n = function() {
        var e = function() {},
            r = function() {},
            n = function() {},
            t = function() {},
            o = {};
        return o.promise = function() {
            return {
                success: function(r) {
                    return e = r, this
                },
                complete: function(e) {
                    return r = e, this
                },
                fallback: function(e) {
                    return n = e, this
                },
                fail: function(e) {
                    return t = e, this
                }
            }
        }, o.success = function() {
            try {
                return "function" == typeof e ? e.apply(this, arguments) : !0
            } catch (r) {
                o.fail(r)
            }
        }, o.complete = function() {
            return "function" == typeof r ? r.apply(this, arguments) : !0
        }, o.fallback = function() {
            try {
                return "function" == typeof n ? n.apply(this, arguments) : !0
            } catch (e) {
                o.fail(e)
            }
        }, o.fail = function() {
            return "function" == typeof t ? t.apply(this, arguments) : !0
        }, o
    };
    e.exports = n
}, function(e, r, n) {
    var t = function(e) {
        var r = "https://approach.yahooapis.jp",
            t = "https://stg-approach.yahooapis.jp",
            o = "https://approach.yahooapis.jp",
            i = "https://s.yimg.jp/images/approach/jslib/clear.gif",
            a = "https://auth.login.yahoo.co.jp",
            c = "https://auth.login.yahoo.co.jp",
            s = "https://auth.login.yahoo.co.jp",
            u = "/deeplink/v1/token",
            l = "/v1/map",
            d = "mobiledeeplinkingcallback",
            p = 3e3,
            f = 500,
            h = n(2),
            m = e && e.device || "unsupported",
            v = {};
        v.getAppScheme = function(r, n, t, o) {
            var i = h(),
                a = E() + l + "/" + m;
            return a = R(a, "domain", r), a = R(a, "path", n), a = R(a, "tag", t), a = R(a, "params", o), a = R(a, "appid", e.yjdnAppId), a = R(a, "eappid", e.yjdnEAppId), a = R(a, "unitTest", e.testMode), setTimeout(function() {
                O(a, i)
            }), i.promise()
        }, v.getActionSchemes = function(e, r) {}, v.checkWebView = function() {
            var e = i;
            return e = R(e, "method", "init"), g(e)
        }, v.schemeCanOpen = function(e, r) {
            var n = i;
            return n = R(n, "method", "canopen"), n = R(n, "deeplinkurl", e), n = R(n, "deeplinkinfo", JSON.stringify(r)), g(n)
        }, v.schemeOpen = function(e, r) {
            var n = i;
            return n = R(n, "method", "open"), n = R(n, "deeplinkurl", e), n = R(n, "sig", r), g(n)
        }, v.storeOpen = function(e) {
            var r = i;
            return r = R(r, "method", "openstore"), r = R(r, "storeurl", e), g(r)
        }, v.storeDeferredOpen = function(e, r, n) {
            var t = i;
            return t = R(t, "method", "openstoredeferred"), t = R(t, "deeplinkurl", e), t = R(t, "storeurl", r), t = R(t, "app_identifier", n), g(t)
        };
        var g = function(e) {
                var r = h(),
                    n = !1,
                    t = d + new Date / 1;
                window[t] = function(e) {
                    n = !0, r.success(e), delete window[t]
                };
                var o = document.createElement("iframe");
                o.src = R(e, "callback", t), o.style.display = "none";
                var i = function() {
                    n || (r.fail(!1), delete window[t]), setTimeout(function() {
                        o.parentNode.removeChild(o)
                    })
                };
                return setTimeout(function() {
                    document.body.appendChild(o)
                }), setTimeout(i, f), r.promise()
            },
            O = function(e, r) {
                var n = new XMLHttpRequest;
                n.open("GET", e, !0), n.timeout = p, n.ontimeout = function() {
                    r.fail()
                }, n.onreadystatechange = function() {
                    4 === n.readyState && (200 === n.status || 304 === n.status ? r.success(JSON.parse(n.responseText)) : r.fail())
                }, n.send()
            },
            I = function(e, r, n) {
                var t = new XMLHttpRequest;
                t.open("POST", e, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.withCredentials = !0, t.timeout = p, t.ontimeout = function() {
                    n.fail()
                }, t.onreadystatechange = function() {
                    4 === t.readyState && (200 === t.status ? n.success(JSON.parse(t.responseText)) : n.fail())
                }, t.send(r)
            },
            E = function() {
                try {
                    switch (!0) {
                        case e.devMode:
                            return o;
                        case e.testMode:
                            return t;
                        default:
                            return r
                    }
                } catch (n) {
                    return r
                }
            },
            w = function() {
                try {
                    switch (!0) {
                        case e.devMode:
                            return s;
                        case e.testMode:
                            return c;
                        default:
                            return a
                    }
                } catch (r) {
                    return a
                }
            },
            R = function(e, r, n) {
                return n ? e + (/\?/.test(e) ? "&" : "?") + r + "=" + encodeURIComponent(n) : e
            },
            _ = function(e) {
                var r = [];
                for (var n in e) {
                    var t = e[n];
                    if (t) {
                        var o = encodeURIComponent(n) + "=" + encodeURIComponent(t);
                        r.push(o)
                    }
                }
                return r.join("&").replace(/%20/g, "+")
            };
        return v.getYConnectToken = function(r, n) {
            var t = h(),
                o = w() + u,
                i = {
                    aud: r,
                    azp: e.yjdnAppId,
                    eazp: e.yjdnEAppId,
                    snonce: n
                },
                a = _(i);
            return setTimeout(function() {
                I(o, a, t)
            }), t.promise()
        }, v
    };
    e.exports = t
}, function(e, r, n) {
    var t = function(e) {
        var r = "0",
            t = n(5)(e),
            o = n(10),
            i = n(2),
            a = {};
        a.openRedirect = function(e, r) {
            var n = window.location.href;
            return a.replaceAppScheme(n, e, r)
        }, a.replaceAppScheme = function(r, n, a) {
            var l = i(),
                d = a || {};
            if (d.universalLinksExtra && d.universalLinksExtra.universalLinkEnable === !0 && t.canUniversalLinks() === !0) {
                var p = {
                    srcurl: r,
                    opt: n,
                    device: t.getDevice(),
                    fallback: d.universalLinksExtra.fallbackUrl,
                    ignore_fcap: d.universalLinksExtra.ignoreFallbackCap,
                    tag: d.tag,
                    params: d.params ? JSON.stringify(d.params) : null,
                    done: d.doneUrl,
                    referer: window.location.href,
                    appid: d.isLoggedIn ? e.yjdnAppId : null,
                    eappid: d.isLoggedIn ? e.yjdnEAppId : null
                };
                for (var f in p) p[f] || delete p[f];
                var h = {};
                h.universalLinksRedirectorUrl = t.getUniversalLinksRedirectorUrl(p);
                var m = "";
                return t.deeplink(m, h, l), l.promise()
            }
            return t.getSchemeData(r, d.tag).success(function(i) {
                if (d.androidInstallReferrer && (i.store_url = t.addInstallReferrer(i.store_url, d.androidInstallReferrer)), !n) throw new Error("Option is null.");
                if ((n >>>= 0) > o.BORDER_ILLEGAL) throw new Error("Set unknown option.");
                if (n === o.OPT_STORE_OPEN) return c(n, i, l);
                var a = t.addParams(i.deeplink, d.params);
                return a = t.addMdl(a, r, d.doneUrl, null, null), i.chromeFallbackUrl = d.chromeFallbackUrl, i.safariFallbackTime = d.safariFallbackTime, i.iOS9SafariExtra = d.iOS9SafariExtra, i.isLoggedIn = d.isLoggedIn, i.appid = d.isLoggedIn ? e.yjdnAppId : null, i.eappid = d.isLoggedIn ? e.yjdnEAppId : null, i.deferredScheme = a, i.androidInstallReferrer = d.androidInstallReferrer, n === o.OPT_STORE_DEFERRED_OPEN ? s(a, n, i, l) : d.isLoggedIn ? t.getYConnectInfo(i).success(function(e) {
                    return a = t.addParams(a, e), u(a, n, i, l)
                }).fail(function(e) {
                    return u(a, n, i, l)
                }) : u(a, n, i, l)
            }).fail(function(e) {
                var n = l.fail(e);
                return n !== !1 && t.redirect(r), l.complete()
            }), l.promise()
        };
        var c = function(e, n, i) {
                var a = n.store_url,
                    c = n.identifier,
                    s = t.getLogInfo(e, r, o.DIRECTION_STORE, c),
                    u = t.getDirectionInfo(a, n),
                    l = i.success(u, s);
                return l !== !1 && t.redirect(a), i.complete()
            },
            s = function(e, n, i, a) {
                var c = i.store_url,
                    s = i.identifier,
                    u = t.getLogInfo(n, r, o.DIRECTION_STORE, s),
                    l = t.getDirectionInfo(c, i),
                    d = a.success(l, u),
                    p = t.getDeferredRedirectorUrl(e, i);
                return d !== !1 && t.redirect(p), a.complete()
            },
            u = function(e, n, i, a) {
                var c = i.src,
                    s = i.store_url,
                    u = i.identifier,
                    l = i.iOS9SafariExtra || {},
                    d = (i.androidInstallReferrer, t.getLogInfo(n, r, o.DIRECTION_APP, u)),
                    p = t.getDirectionInfo(e, i),
                    f = a.success(p, d);
                if (f === !1) return a.complete();
                var h, m;
                n & o.OPT_STORE_DEFERRED_OPEN ? (h = t.getDeferredRedirectorUrl(i.deferredScheme, i), m = o.DIRECTION_STORE) : (h = n & o.OPT_STORE_OPEN ? s : c, m = n & o.OPT_STORE_OPEN ? o.DIRECTION_STORE : o.DIRECTION_WEB);
                var v = {};
                return v.url = h, v.directInfo = t.getDirectionInfo(h, i), v.logInfo = t.getLogInfo(n, r, m, u), v.chromeFallbackUrl = i.chromeFallbackUrl || h, v.safariFallbackTime = 0 | i.safariFallbackTime, v.androidInstallReferrer = i.androidInstallReferrer, v.isDeferred = n & o.OPT_STORE_DEFERRED_OPEN, l.redirectorEnable === !0 && t.checkiOS9SafariExtraParams(l) && (v.iOS9RedirectorUrl = t.getiOS9RedirectorUrl(l, h, n, u)), t.deeplink(e, v, a), a.complete()
            };
        return a
    };
    e.exports = t
}, function(e, r, n) {
    var t = function(e) {
        var r = "http://approach.yahoo.co.jp",
            t = "http://stg-approach.yahoo.co.jp",
            o = "http://approach.yahoo.co.jp",
            i = "/rd/reg_deferred",
            a = "/rd/ios9",
            c = "/rd/ul",
            s = {},
            u = n(6)();
        e.device = e.device || u.getDevice();
        var l = n(3)(e),
            d = n(2);
        s.getSchemeData = function(e, r) {
            var n = s.parseUrl(e),
                t = d();
            return l.getAppScheme(n.host, n.pathname, r, n.search.replace("?", "")).success(function(r) {
                if (schemeInfo = r.results, 0 === schemeInfo.length) return t.fail(new Error("Does not match any scheme data."));
                var n = schemeInfo.shift();
                return n.src = e, n.extra = schemeInfo ? schemeInfo : [], t.success(n)
            }).fail(function(e) {
                return t.fail(e || new Error("Could not get Map Data"))
            }), t.promise()
        }, s.addParams = function(e, r) {
            if ("object" != typeof r) return e;
            var n = s.parseUrl(e),
                t = [];
            if (n.search)
                for (var o = n.search.substring(1).split("&"), i = 0; i < o.length; i++) {
                    var a = o[i].split("=");
                    a[0] in r || t.push(o[i])
                }
            for (var c in r) t.push(c + "=" + encodeURIComponent(r[c]));
            return 0 === t.length ? e : (n.search = "?" + t.join("&"), n.href)
        }, s.addMdl = function(e, r, n, t, o) {
            var i = {};
            i.referer = window.location.href, i.src = r, i.history = 0, "string" == typeof n && (i.done = n), "string" == typeof t && (i.short_name = t), "string" == typeof o && (i.identifier = o);
            var a = {
                mdl: JSON.stringify(i)
            };
            return s.addParams(e, a)
        }, s.getDirectionInfo = function(e, r) {
            var n = {};
            return n.direction = e, n.src = r.src, n.deeplink = r.deeplink, n.name = r.name, n.icon_url = r.icon_url, n.store_url = r.store_url, n.identifier = r.identifier, n.extra = r.extra || [], n
        }, s.getLogInfo = function(e, r, n, t) {
            return {
                ap_opt: e.toString(10),
                ap_wv: r,
                ap_to: n,
                ap_id: t,
                ap_hist: "0"
            }
        }, s.schemeOpen = l.schemeOpen, s.schemeCanOpen = l.schemeCanOpen, s.storeOpen = l.storeOpen, s.storeDeferredOpen = l.storeDeferredOpen, s.redirect = function(e) {
            window.location.href !== e && (window.location = e)
        }, s.parseUrl = function(e) {
            var r = document.createElement("a");
            return r.href = e, r
        };
        var p = function() {
            switch (!0) {
                case e.devMode:
                    return o;
                case e.testMode:
                    return t;
                default:
                    return r
            }
        }();
        return s.getDeferredRedirectorUrl = function(e, r) {
            var n = p + i,
                t = {
                    deeplink: e,
                    store_url: r.store_url,
                    app_identifier: r.identifier
                };
            return r.isLoggedIn === !0 && r.appid ? (t.appid = r.appid, t.clientid = r.client_id, t.login = "1") : r.isLoggedIn === !0 && r.eappid && (t.eappid = r.eappid, t.clientid = r.client_id, t.login = "1"), s.addParams(n, t)
        }, s.getiOS9RedirectorUrl = function(e, r, n, t) {
            var o = p + a;
            e.fallbackUrl && (r = e.fallbackUrl);
            var i = {
                fallback: r,
                success: e.successUrl,
                opt: n,
                app_identifier: t,
                time: new Date / 1e3 | 0
            };
            return e.ult && (i.ult_service = e.ult.service, i.ult_apptype = e.ult.optType), s.addParams(o, i)
        }, s.checkiOS9SafariExtraParams = function(e) {
            if (!e) throw new Error("ios9 safari extra is null");
            if (!e.successUrl) throw new Error("ios9 success url is null");
            if (e.ult) {
                var r = e.ult;
                if (!r.service) throw new Error("ult.service is null");
                if (!r.optType) throw new Error("ult.optType is null")
            }
            return !0
        }, s.addInstallReferrer = function(e, r) {
            if (!r) return e;
            var n = function(e) {
                    for (var n = e.search.substring(1).split("&"), t = [], o = 0; o < n.length; o++) "referrer=" !== n[o].substr(0, 9) && t.push(n[o]);
                    return t.push("referrer=" + encodeURIComponent(r)), e.search = "?" + t.join("&"), e
                },
                t = s.parseUrl(e);
            return ("http:" === t.protocol || "https:" === t.protocol) && "play.google.com" === t.hostname && (e = n(t).href), "market:" === t.protocol && (e = n(t).href), e
        }, s.getUniversalLinksRedirectorUrl = function(e) {
            var r = p.replace(/^http/, "https") + c;
            return s.addParams(r, e)
        }, s.canUniversalLinks = function() {
            return "ios" === u.getOs() && u.getMajorOsVersion() >= 9
        }, s.getDevice = function() {
            return u.getDevice()
        }, s.deeplink = function() {
            var e, r = u.getDeviceInfo();
            switch (r.os) {
                case "ios":
                    e = n(8).call(s, r);
                    break;
                case "android":
                    e = n(9).call(s, r);
                    break;
                default:
                    e = {
                        deeplink: function() {}
                    }
            }
            return e.deeplink
        }(), s.getYConnectInfo = function(e) {
            var r = s.generateUUID(),
                n = e.client_id,
                t = d();
            return l.getYConnectToken(n, r).success(function(e) {
                if (!e.hasOwnProperty("token")) throw new Error("Could not get YConnect Token");
                var n = {};
                return n.snonce = r, n.dltoken = e.token, t.success(n)
            }).fail(function(e) {
                return t.fail(e || new Error("Could not get YConnect Info"))
            }), t.promise()
        }, s.generateUUID = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var r = 16 * Math.random() | 0,
                    n = "x" == e ? r : 3 & r | 8;
                return n.toString(16)
            })
        }, s
    };
    e.exports = t
}, function(e, r, n) {
    var t = function(e) {
        var r = {},
            t = {},
            o = function(e) {
                t = n(7)().detect(e), t.majorOsVersion = 0 | t.osVersion.split(".")[0], t.majorBrowserVersion = 0 | t.browserVer.split(".")[0]
            };
        return r.isSupport = function() {
            return "unsupported" != t.device
        }, r.getOs = function() {
            return t.os
        }, r.getBrowser = function() {
            return t.browser
        }, r.getDevice = function() {
            return t.device
        }, r.getOsVersion = function() {
            return t.osVersion
        }, r.getMajorOsVersion = function() {
            return t.majorOsVersion
        }, r.getBrowserVer = function() {
            return t.browserVer
        }, r.getMajorBrowserVer = function() {
            return t.majorBrowserVersion
        }, r.getDeviceInfo = function() {
            return t
        }, o(e), r
    };
    e.exports = t
}, function(e, r) {
    var n = function() {
        var e = "ipad",
            r = "iphone",
            n = "android",
            t = "chromium",
            o = "ios",
            i = "android",
            a = "default",
            c = "unsupported",
            s = "unknown",
            u = 3,
            l = 4,
            d = 5,
            p = 7,
            f = 8,
            h = 9,
            m = "^([a-zA-Z]*)/([.0-9]*) *\\(([^;]*)[; NUI]*; *([a-zA-Z ]*) *([_.0-9]*).*?\\) *[./a-zA-z0-9]* *(\\(.*\\))? *([a-zA-Z ]*)/([^ ]*) *([a-zA-Z ]*)?.*$",
            v = {};
        v.detect = function(e) {
            var r = e || window.navigator.userAgent,
                n = {
                    device: c,
                    browser: s,
                    browserVer: s,
                    os: s,
                    osVersion: s
                },
                t = g(r);
            return t === !1 ? n : (n.device = O(t), n.browser = I(t), n.browserVer = t[f], n.os = E(n.device), n.osVersion = t[d].trim().replace(/_/g, "."), n)
        };
        var g = function(e) {
                var r = e.match(m);
                return null === r ? !1 : r
            },
            O = function(t) {
                var o = t[u].trim(),
                    i = t[l].trim();
                switch (!0) {
                    case /iPhone/i.test(o):
                    case /iPod/i.test(o):
                        return r;
                    case /iPad/i.test(o):
                        return e;
                    case /Android/i.test(o) && /Firefox/i.test(t[p]):
                        t[d] = o.split(" ")[1] || s;
                    case /Linux/.test(o) && /Android/.test(i):
                        return n;
                    default:
                        return c
                }
            },
            I = function(e) {
                var r = e[p],
                    n = e[h];
                switch (r) {
                    case "Firefox":
                    case "Chrome":
                    case "CriOS":
                    case "SamsungBrowser":
                        return r.toLowerCase();
                    case "Version":
                        return "Chrome" === n ? t : a;
                    default:
                        return s
                }
            },
            E = function(t) {
                switch (t) {
                    case r:
                    case e:
                        return o;
                    case n:
                        return i;
                    default:
                        return s
                }
            };
        return v
    };
    e.exports = n
}, function(e, r) {
    var n = function(e) {
        var r = this;
        r.deeplink = function(r, i, a) {
            switch (!0) {
                case 9 === e.majorOsVersion:
                    return o(r, i, a);
                case e.majorOsVersion <= 7:
                case "default" !== e.browser:
                    return n(r, i, a);
                case 8 === e.majorOsVersion:
                    return t(r, i, a);
                default:
                    return o(r, i, a)
            }
        };
        var n = function(e, n, t) {
                var o = document.createElement("iframe");
                o.style.display = "none", o.src = e;
                var i = new Date;
                setTimeout(function() {
                    var e = new Date - i;
                    if (750 > e) {
                        var a = t.fallback(n.directInfo, n.logInfo);
                        a !== !1 && r.redirect(n.url)
                    }
                    o.parentNode.removeChild(o)
                }, 700), document.body.appendChild(o)
            },
            t = function(e, n, t) {
                var o = !1,
                    i = n.safariFallbackTime || 2500;
                window.onblur = function() {
                    o = !0, window.onblur = null
                };
                var a = document.createElement("iframe");
                a.style.display = "none", a.src = e, document.body.appendChild(a), setTimeout(function() {
                    if (o === !1) {
                        var e = t.fallback(n.directInfo, n.logInfo);
                        e !== !1 && r.redirect(n.url)
                    }
                    a.parentNode.removeChild(a)
                }, i)
            },
            o = function(e, r, n) {
                if (r.universalLinksRedirectorUrl) return void(window.location.href = r.universalLinksRedirectorUrl);
                var t = r.iOS9RedirectorUrl;
                t && setTimeout(function() {
                    window.location.href = t
                }, 500), window.location.href = e
            };
        return r
    };
    e.exports = n
}, function(e, r) {
    var n = function(e) {
        var r = "intent://%s#Intent;scheme=%s;package=%s;S.browser_fallback_url=%s;end",
            n = "intent://details?id=%s&url=%s&referrer=%s#Intent;scheme=market;action=android.intent.action.VIEW;package=com.android.vending;end;",
            t = this;
        t.deeplink = function(r, n, t) {
            switch (e.browser) {
                case "chrome":
                case "chromium":
                case "samsungbrowser":
                    return o(r, n, t);
                default:
                    return i(r, n, t)
            }
        };
        var o = function(e, r, n) {
                var t = a(e, r),
                    o = document.createElement("a");
                o.href = t, document.body.appendChild(o), o.click(), document.body.removeChild(o)
            },
            i = function(e, r, n) {
                var o = document.createElement("iframe");
                o.style.display = "none", document.body.appendChild(o), o.src = e, o.onload = function() {
                    var e = n.fallback(r.directInfo, r.logInfo);
                    e !== !1 && setTimeout(function() {
                        t.redirect(r.url)
                    }), o.parentNode.removeChild(o)
                }
            },
            a = function(e, o) {
                var i = t.parseUrl(e),
                    a = [],
                    c = i.hostname,
                    s = i.pathname.replace(/^\/*/, ""),
                    u = i.search.replace(/^\?/, ""),
                    l = 0;
                return o.androidInstallReferrer && !o.isDeferred ? (a[0] = o.directInfo.identifier, a[1] = encodeURIComponent(e), a[2] = encodeURIComponent(o.androidInstallReferrer), n.replace(/%s/g, function() {
                    return a[l++]
                })) : (a[0] = (c ? c + "/" : "") + s + "?" + u, a[1] = i.protocol.slice(0, -1), a[2] = o.directInfo.identifier, a[3] = encodeURIComponent(o.chromeFallbackUrl), r.replace(/%s/g, function() {
                    return a[l++]
                }))
            };
        return t
    };
    e.exports = n
}, function(e, r) {
    e.exports = {
        DIRECTION_APP: "1",
        DIRECTION_STORE: "2",
        DIRECTION_WEB: "3",
        OPT_APP_OPEN: 1,
        OPT_STORE_OPEN: 2,
        OPT_STORE_DEFERRED_OPEN: 4,
        BORDER_ILLEGAL: 7
    }
}, function(e, r, n) {
    var t = function(e) {
        var r = "1",
            t = n(5)(e),
            o = n(10),
            i = n(2),
            a = {};
        a.openRedirect = function(e, r) {
            var n = window.location.href;
            return a.replaceAppScheme(n, e, r)
        }, a.replaceAppScheme = function(r, n, a) {
            var d = i(),
                p = a || {};
            return t.getSchemeData(r, p.tag).success(function(i) {
                var a = t.addParams(i.deeplink, p.params);
                if (p.androidInstallReferrer && (i.store_url = t.addInstallReferrer(i.store_url, p.androidInstallReferrer)), !n) throw new Error("Option is null.");
                if ((n >>>= 0) > o.BORDER_ILLEGAL) throw new Error("Set unknown option.");
                if (n === o.OPT_STORE_DEFERRED_OPEN) {
                    var f = p.doneUrl ? p.doneUrl : e.launch;
                    return a = t.addMdl(a, r, f), u(a, n, i, d)
                }
                return n === o.OPT_STORE_OPEN ? s(n, i, d) : void t.schemeCanOpen(a, i).success(function(o) {
                    if (o.interrupt) return d.complete();
                    if (!o.open) throw new Error("App is not exist");
                    var c = o.done ? o.done : p.doneUrl ? p.doneUrl : e.launch;
                    return a = t.addMdl(a, r, c, o.short_name, o.identifier), p.isLoggedIn ? t.getYConnectInfo(i).success(function(e) {
                        return a = t.addParams(a, e), l(a, n, o.sig, i, d)
                    }).fail(function(e) {
                        return l(a, n, o.sig, i, d)
                    }) : l(a, n, o.sig, i, d)
                }).fail(function(l) {
                    if (n & o.OPT_STORE_DEFERRED_OPEN) {
                        var f = p.doneUrl ? p.doneUrl : e.launch;
                        return a = t.addMdl(a, r, f), u(a, n, i, d)
                    }
                    return n & o.OPT_STORE_OPEN ? s(n, i, d) : c(n, i, d)
                })
            }).fail(function(e) {
                var n = d.fail(e);
                n !== !1 && t.redirect(r)
            }), d.promise()
        };
        var c = function(e, n, i) {
                var a = n.src,
                    c = n.identifier,
                    s = t.getLogInfo(e, r, o.DIRECTION_WEB, c),
                    u = t.getDirectionInfo(a, n),
                    l = i.success(u, s);
                return l !== !1 && t.redirect(a), i.complete()
            },
            s = function(e, n, i) {
                var a = n.store_url,
                    c = n.identifier,
                    s = t.getLogInfo(e, r, o.DIRECTION_STORE, c),
                    u = t.getDirectionInfo(a, n),
                    l = i.success(u, s);
                return l !== !1 && t.storeOpen(a), i.complete()
            },
            u = function(e, n, i, a) {
                var c = i.store_url,
                    s = i.identifier,
                    u = t.getLogInfo(n, r, o.DIRECTION_STORE, s),
                    l = t.getDirectionInfo(c, i),
                    d = a.success(l, u);
                return d !== !1 && t.storeDeferredOpen(e, c, s), a.complete()
            },
            l = function(e, n, i, a, c) {
                var s = a.identifier,
                    u = t.getLogInfo(n, r, o.DIRECTION_APP, s),
                    l = t.getDirectionInfo(e, a),
                    d = c.success(l, u);
                return d !== !1 && t.schemeOpen(e, i), c.complete()
            };
        return a
    };
    e.exports = t
}]);