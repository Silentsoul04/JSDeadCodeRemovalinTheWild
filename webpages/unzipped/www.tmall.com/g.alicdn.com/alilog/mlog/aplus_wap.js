! function e(t, n, r) {
    function a(i, u) {
        if (!n[i]) {
            if (!t[i]) {
                var s = "function" == typeof require && require;
                if (!u && s) return s(i, !0);
                if (o) return o(i, !0);
                throw new Error("Cannot find module '" + i + "'")
            }
            var l = n[i] = {
                exports: {}
            };
            t[i][0].call(l.exports, function(e) {
                var n = t[i][1][e];
                return a(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[i].exports
    }
    for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) a(r[i]);
    return a
}({
    1: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            return e && e.getAttribute ? e.getAttribute(t) || "" : ""
        }

        function a(e) {
            return i = i || document.getElementsByTagName("head")[0], u && !e ? u : i ? u = i.getElementsByTagName("meta") : []
        }

        function o(e, t) {
            var n;
            if (document.querySelector) {
                var o = document.querySelector('meta[name="' + e + '"]');
                n = r(o, t || "content")
            } else
                for (var i = a(), u = i.length, s = 0; u > s; s++) {
                    var l = i[s];
                    r(l, "name") === e && (n = r(l, t || "content"))
                }
            return n || ""
        }
        var i, u, s = e("@ali/grey-publish").util;
        n.tryToGetAttribute = r, n.getMetaTags = a, n.getMetaCnt = o, n.indexof = function(e, t) {
            for (var n = 0; n < e.length; n++)
                if (e[n] === t) return n;
            return -1
        };
        var l = function(e, t) {
            return e += "", e.length < t && (e = "0" + e), e
        };
        n.getDateMin = function() {
            var e = new Date,
                t = "";
            return t += e.getFullYear(), t += l(e.getMonth() + 1, 2), t += l(e.getDate(), 2), t += l(e.getHours(), 2), t += l(e.getMinutes(), 2)
        }, n.isMobile = function(e) {
            var t = /AliApp|Yunos|cyclone/i.test(e),
                n = /iPhone|iPad|iPod/i.test(e),
                r = /Android/i.test(e),
                a = /Windows Phone/i.test(e) || /IEMobile/i.test(e) || /WPDesktop/i.test(e),
                o = /BlackBerry/i.test(e),
                i = /Opera Mini/i.test(e);
            return t || n || r || a || o || i
        };
        var c = function() {
            var e;
            try {
                e = document.getElementById("beacon-aplus") || document.getElementById("tb-beacon-aplus")
            } catch (t) {}
            return e
        };
        n.getCurrentNode = c, n.loopAddScript = function(e, t) {
            try {
                if (t && t instanceof Array) {
                    var n = 0,
                        r = function(a) {
                            a && s.addScript(e + "/" + a, function() {
                                r(t[++n])
                            })
                        };
                    r(t[n])
                }
            } catch (a) {}
        }, n.getCdnpath = function() {
            var e = "//g.alicdn.com",
                t = "//g-assets.daily.taobao.net",
                n = "//assets.alicdn.com/g",
                r = "//u.alicdn.com",
                a = "//laz-g-cdn.alicdn.com",
                o = (document, c()),
                i = e,
                u = [n, t, r, a],
                s = new RegExp(r);
            if (o)
                for (var l = 0; l < u.length; l++) {
                    var g = new RegExp(u[l]);
                    if (g.test(o.src)) {
                        i = u[l], s.test(o.src) && (i = n);
                        break
                    }
                }
            return i
        }, n.catchException = function(e, t, n) {
            var r = window,
                a = r.goldlog_queue || (r.goldlog_queue = []),
                o = e;
            "object" == typeof t && t.message && (o = o + "_" + t.message), n && n.msg && (o += "_" + n.msg), a.push({
                action: "goldlog._aplus_cplugin_m.do_tracker_jserror",
                arguments: [{
                    message: o,
                    error: JSON.stringify(t),
                    filename: e
                }]
            })
        }, n.aplusVersions = {
            V_O: "aplus_o.js",
            V_2: "aplus_v2.js",
            V_W: "aplus_wap.js",
            V_S: "aplus_std.js",
            V_I: "aplus_int.js",
            V_U: "aplus_u.js"
        }
    }, {
        "@ali/grey-publish": 2
    }],
    2: [function(e, t, n) {
        "use strict";
        n.grey = e("./src/grey"), n.util = e("./src/util")
    }, {
        "./src/grey": 3,
        "./src/util": 4
    }],
    3: [function(e, t, n) {
        "use strict";

        function r(e, t) {
            return e + Math.floor(Math.random() * (t - e + 1))
        }

        function a(e) {
            var t = !1;
            try {
                var n = e.bingo_chars || "0aAbBc1CdDeE2fFgGh3HiIjJ4kKlLm5MnNoO6pPqQr7RsStT8uUvVw9WxXyY+zZ",
                    a = h.getCookie(e.bingo_cookiename || "cna") || "";
                if (a) {
                    var o = a.charAt(0),
                        i = n.indexOf(o) / n.length;
                    t = i <= e.ratio / e.base
                } else t = r(1, e.base) <= e.ratio
            } catch (u) {
                t = r(1, e.base) <= e.ratio
            }
            return t
        }

        function o(e, t) {
            var n;
            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function i(e, t) {
            return function(n) {
                return e(o(t, n || {}))
            }
        }

        function u(e, t) {
            var n = document;
            if (t) {
                var r = n.getElementsByTagName("script")[0],
                    a = n.createElement("script");
                e && e.nonce && a.setAttribute("nonce", e.nonce), a.appendChild(n.createTextNode(t)), r.parentNode.insertBefore(a, r)
            }
        }

        function s(e, t) {
            if (e && e.length > 0)
                for (var n = new RegExp("^" + t), r = 0; r < e.length; r++) {
                    var a = e[r];
                    n.test(a) && _.remove(a)
                }
        }

        function l(e, t, n) {
            try {
                _.remove(e);
                var r = _.get(t);
                if (r) {
                    var a = JSON.parse(r) || [];
                    s(a, n)
                }
            } catch (o) {}
            try {
                Object && Object.keys && s(Object.keys(localStorage), n)
            } catch (i) {}
        }

        function c(e, t, n) {
            try {
                if (!d) {
                    var r = function(r) {
                        r.key === e && r.newValue && l(e, t, n)
                    };
                    if (window.addEventListener) return window.addEventListener("storage", r, !1), !1;
                    window.attachEvent("storage", r)
                }
                d = !0
            } catch (a) {}
        }

        function g(e) {
            var t;
            try {
                var n = _.get(e.LS_KEY_CLUSTER);
                if (n) {
                    var r = JSON.parse(n);
                    t = _.get(r[0])
                }
            } catch (a) {}
            return t
        }

        function f(e, t) {
            h.addScript(t.url, e.callback, function() {
                t.oldCode && (u(e, t.oldCode), h.isFunction(e.callback) && e.callback.call(this, {
                    from: "oldCode"
                }))
            })
        }

        function p(e, t) {
            var n, r = "cors",
                a = t.code,
                o = t.key,
                i = a ? a.split("\n").length : 0;
            i >= t.size && (u(e, a), l(o, e.LS_KEY_CLUSTER, e.LS_PREFIX), _.set(e.LS_KEY_CLUSTER, JSON.stringify([o])), _.set(o, a), n = !0), i < t.size && t.oldCode && (r = "oldCode", u(e, t.oldCode), n = !0), n || f(e, t), c(o, e.LS_KEY_CLUSTER, e.LS_PREFIX), h.isFunction(e.callback) && e.callback.call(this, {
                from: r
            })
        }

        function v(e, t, n) {
            var r = window,
                a = r.XDomainRequest,
                o = r.XMLHttpRequest && "withCredentials" in new r.XMLHttpRequest,
                i = t.after;
            if (!t.isDebug && _.test() && (o || a)) {
                var s = g(t),
                    l = t.LS_KEY + h.hash(e),
                    v = _.get(l),
                    d = "local";
                v ? (c(l, t.LS_KEY_CLUSTER, t.LS_PREFIX), u(t, v), h.isFunction(i) && i.call(this, {
                    from: d
                })) : h.requestJS(e, navigator.userAgent, function(r) {
                    p(t, {
                        key: l,
                        code: r,
                        oldCode: s,
                        size: n,
                        url: e
                    })
                }, function() {
                    f(t, {
                        url: e,
                        oldCode: s
                    })
                })
            } else h.addScript(e, i)
        }
        var d, h = e("./util"),
            _ = {
                set: function(e, t) {
                    try {
                        return localStorage.setItem(e, t), !0
                    } catch (n) {
                        return !1
                    }
                },
                get: function(e) {
                    return localStorage.getItem(e)
                },
                test: function() {
                    var e = "grey_test_key";
                    try {
                        return localStorage.setItem(e, 1), localStorage.removeItem(e), !0
                    } catch (t) {
                        return !1
                    }
                },
                remove: function(e) {
                    localStorage.removeItem(e)
                }
            },
            b = {
                base: 1e4
            },
            m = {
                _config: b
            };
        m.load = function(e) {
            e = o({
                LS_KEY_CLUSTER: "",
                LS_KEY: "",
                isLoadDevVersion: "",
                dev: "",
                stable: "",
                grey: "",
                base: b.base,
                bingo: "",
                nonce: ""
            }, e);
            var t, n = {},
                r = 0,
                u = "function" == typeof e.bingo ? e.bingo : a;
            e.ratio >= e.base || u(e) ? (t = e.grey, n.type = "grey", r = e.greySize) : (t = e.stable, n.type = "stable", r = e.stableSize);
            try {
                h.isFunction(e.isLoadDevVersion) && e.isLoadDevVersion() && (t = e.dev, n.type = "dev", r = e.devSize)
            } catch (s) {}
            return n.url = t, h.isFunction(e.before) ? e.before(n, function(t) {
                v(t, e, r)
            }) : v(t, e, r), h.isFunction(e.after) && (e.after = i(e.after, n)), this
        }, m.config = function(e) {
            return o(b, e || {}), this
        }, t.exports = m
    }, {
        "./util": 4
    }],
    4: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            return "function" == typeof e
        };
        n.isFunction = r;
        var a = function(e, t, n) {
            var a = document,
                o = a.getElementsByTagName("script")[0],
                i = a.getElementsByTagName("head")[0],
                u = a.createElement("script");
            u.type = "text/javascript", u.async = !0, u.src = e, u.onerror = function() {
                r(n) && n()
            }, o ? o.parentNode.insertBefore(u, o) : i && i.appendChild(u), r(t) && t.call(this, {
                from: "script"
            })
        };
        n.addScript = a, n.getCookie = function(e) {
            var t = document,
                n = t.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
            return n ? n[1] : ""
        };
        var o = {
                base: 1e4,
                timeout: 1e4
            },
            i = function(e, t, n) {
                fetch(e).then(function(e) {
                    return /application\/json/.test(e.headers.get("content-type")) ? e.json() : e.text()
                }).then(function(e) {
                    t(e)
                })["catch"](function(e) {
                    n(e)
                })
            },
            u = function(e, t, n) {
                var r, a = "GET",
                    i = function() {
                        r.responseText ? t(r.responseText) : n()
                    },
                    u = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                u ? (r = new XMLHttpRequest, r.open(a, e, !0)) : (r = new XDomainRequest, r.open(a, e)), r.timeout = o.timeout, r.onload = i, r.onerror = n, r.ontimeout = n, r.send()
            },
            s = function(e, t, n) {
                window.fetch ? i(e, t, n) : u(e, t, n)
            };
        n.request = s, n.requestJS = function(e, t, n, r) {
            return /blitz/i.test(t) ? void r() : void s(e, n, r)
        }, n.hash = function(e) {
            var t, n, r = 1315423911;
            for (t = e.length - 1; t >= 0; t--) n = e.charCodeAt(t), r ^= (r << 5) + n + (r >> 2);
            return (2147483647 & r).toString(16)
        }
    }, {}],
    5: [function(e, t, n) {
        "use strict";
        ! function() {
            var t = window,
                n = function() {
                    var n = "g_aplus_grey_launched";
                    if (!t[n]) {
                        t[n] = 1;
                        var r = t.goldlog || (t.goldlog = {}),
                            a = e("@ali/grey-publish").grey,
                            o = !0;
                        try {
                            var i = t.location.href.match(/aplusDebug=(true|false)/);
                            i && i.length > 0 && t.localStorage.setItem("aplusDebug", i[1]), o = "true" === t.localStorage.getItem("aplusDebug"), r.aplusDebug = o
                        } catch (u) {}
                        var s = e("../grey/util"),
                            l = e("./for_aplus_fns"),
                            c = {
                                "aplus_o.js": {
                                    stable_version: {
                                        value: "8.12.2"
                                    },
                                    grey_version: {
                                        value: "8.12.3"
                                    },
                                    dev_version: {}
                                },
                                "aplus_std.js": {
                                    stable_version: {
                                        value: "8.12.2"
                                    },
                                    grey_version: {
                                        value: "8.12.3"
                                    },
                                    dev_version: {}
                                },
                                "aplus_wap.js": {
                                    stable_version: {
                                        value: "8.12.2"
                                    },
                                    grey_version: {
                                        value: "8.12.3"
                                    },
                                    dev_version: {}
                                },
                                "aplus_int.js": {
                                    stable_version: {
                                        value: "8.12.2"
                                    },
                                    grey_version: {
                                        value: "8.12.3"
                                    },
                                    dev_version: {}
                                },
                                "aplus_u.js": {
                                    stable_version: {
                                        value: "8.12.2"
                                    },
                                    grey_version: {
                                        value: "8.12.3"
                                    },
                                    dev_version: {}
                                }
                            },
                            g = "APLUS_S_CORE_0.20.82_20190924215948_",
                            f = t.location.protocol;
                        0 !== f.indexOf("http") && (f = "https:");
                        var p = s.getCdnpath();
                        r.getCdnPath = s.getCdnpath;
                        var v = f + p + "/alilog",
                            d = l.getAplusBuVersion(),
                            h = d.v,
                            _ = d.BU,
                            b = 1e4,
                            m = [],
                            y = function() {
                                var e = "";
                                if (m && m.length > 0)
                                    for (var t = s.getDateMin(), n = 0; n < m.length; n++) {
                                        var r = m[n].key + "";
                                        t >= r && (e = Math.floor(1e4 * m[n].value))
                                    }
                                return e
                            },
                            S = e("./utilPlugins"),
                            j = function(e) {
                                var t, n = o ? [] : S.getFrontPlugins({
                                        version: e,
                                        fn: h,
                                        BU: _,
                                        isDebug: o
                                    }),
                                    r = [
                                        ["s", e, h].join("/")
                                    ],
                                    a = o ? [] : S.getPlugins({
                                        version: e,
                                        fn: h,
                                        BU: _
                                    }),
                                    i = 0;
                                try {
                                    var u = [].concat(n, r, a);
                                    t = v + "/??" + u.join(",") + "?v=20190924215948", i = u.length
                                } catch (s) {
                                    t = v + "/??" + r.join(","), i = r.length
                                }
                                return {
                                    size: i,
                                    url: t
                                }
                            },
                            w = y();
                        w && (b = w), r.aplus_cplugin_ver = "0.7.4", r.record || (r.record = function(e, n, r, a) {
                            (t.goldlog_queue || (t.goldlog_queue = [])).push({
                                action: "goldlog.record",
                                arguments: [e, n, r, a]
                            })
                        });
                        var E = c[h] || {},
                            C = E.stable_version || {},
                            L = E.grey_version || {},
                            V = E.dev_version || {},
                            k = C.value || "8.5.9",
                            A = L.value || k,
                            P = V.value || A,
                            x = j(P),
                            B = j(k),
                            R = j(A),
                            U = s.getCurrentNode(),
                            T = U ? U.getAttribute("cspx") : "",
                            M = {
                                LS_KEY_CLUSTER: "APLUS_LS_KEY",
                                LS_KEY: g,
                                LS_PREFIX: "APLUS_S_CORE",
                                isDebug: o,
                                isLoadDevVersion: !1,
                                dev: x.url,
                                devSize: x.size,
                                stable: B.url,
                                stableSize: B.size,
                                grey: R.url,
                                greySize: R.size,
                                ratio: b,
                                nonce: T,
                                before: function(e, t) {
                                    switch (e.type) {
                                        case "grey":
                                            r.lver = P;
                                            break;
                                        case "stable":
                                            r.lver = k;
                                            break;
                                        case "dev":
                                            r.lver = P
                                    }
                                    if (o) {
                                        var n = {
                                            version: r.lver,
                                            fn: h,
                                            BU: _,
                                            isDebug: o
                                        };
                                        s.loopAddScript(v, S.getFrontPlugins(n))
                                    }
                                    if ("function" == typeof t) {
                                        var a = j(r.lver);
                                        t(a.url)
                                    }
                                }
                            };
                        o && (M.after = function() {
                            var e = 0,
                                n = function() {
                                    if (!(e >= 100)) {
                                        e++;
                                        var a = r._$ || {};
                                        t.setTimeout(function() {
                                            "complete" === a.status ? s.loopAddScript(v, S.getPlugins({
                                                version: r.lver,
                                                fn: h,
                                                BU: _
                                            })) : n()
                                        }, 100)
                                    }
                                };
                            n()
                        }), a.load(M)
                    }
                };
            try {
                n()
            } catch (r) {}
        }()
    }, {
        "../grey/util": 1,
        "./for_aplus_fns": 6,
        "./utilPlugins": 9,
        "@ali/grey-publish": 2
    }],
    6: [function(e, t, n) {
        "use strict";
        var r = e("./util"),
            a = r.aplusVersions,
            o = [a.V_O, a.V_S, a.V_I, a.V_W, a.V_U],
            i = function() {
                for (var e, t, n = [{
                        version: a.V_O,
                        domains: [/^https?:\/\/(.*\.)?youku\.com/i, /^https?:\/\/(.*\.)?tudou\.com/i, /^https?:\/\/(.*\.)?soku\.com/i, /^https?:\/\/(.*\.)?laifeng\.com/i],
                        BU: "YT"
                    }], r = 0; r < n.length; r++)
                    for (var o = n[r].domains, i = n[r].version, u = 0; u < o.length; u++)
                        if (location.href.match(o[u])) return {
                            v: i,
                            BU: n[r].BU
                        };
                return {
                    v: t,
                    BU: e
                }
            },
            u = function() {
                var e = r.getMetaCnt("aplus-version");
                return e && (e += ".js"), r.indexof(o, e) > -1 ? e : null
            },
            s = function() {
                try {
                    for (var e = document, t = e.getElementsByTagName("script"), n = 0; n < t.length; n++) {
                        var r = t[n].getAttribute("src");
                        if (/alilog\/mlog\/aplus_\w+\.js/.test(r) || /alicdn\.com\/js\/aplus_\w+\.js/.test(r)) return r
                    }
                    return ""
                } catch (a) {
                    return ""
                }
            },
            l = function() {
                var e = "";
                try {
                    var t = (document, r.getCurrentNode());
                    if (t && (e = t.getAttribute("src")), e || (e = s()), e) {
                        var n = e.match(/aplus_\w+\.js/);
                        "object" == typeof n && n.length > 0 && (e = n[0])
                    }
                } catch (a) {
                    e = ""
                } finally {
                    return e
                }
            };
        n.getAplusBuVersion = function() {
            var e, t;
            try {
                e = a.V_S;
                var n = l();
                n && (e = n);
                var r = i();
                r && r.v && (e = r.v), t = r.BU;
                var o = u();
                o && (e = o), e === a.V_2 && (e = a.V_S)
            } catch (s) {
                e = e === a.V_O ? a.V_W : a.V_S
            } finally {
                return {
                    v: e,
                    BU: t
                }
            }
        }
    }, {
        "./util": 8
    }],
    7: [function(e, t, n) {
        "use strict";

        function r() {
            var e = "",
                t = /Umeng4Aplus|UT4Aplus/i.test(v);
            return t && (e = "aplus4native.js"), e
        }

        function a(e) {
            return d && !g.WindVane && e.fn !== p.V_O
        }

        function o(e) {
            return (h || d && !g.WindVane) && e.fn === p.V_O
        }

        function i(e, t) {
            var n = e.trackerCfg || {},
                r = n.points || [];
            if (r.length > 0)
                for (var a = new RegExp(t), o = 0; o < r.length; o++)
                    if (a.test(r[o].trackerType)) return !0;
            return !1
        }

        function u(e) {
            return i(e, "exposure") || !!f.getMetaCnt("aplus-auto-exp")
        }

        function s(e) {
            return i(e, "click") || !!f.getMetaCnt("aplus-auto-clk")
        }

        function l() {
            return !!f.getMetaCnt("aplus-vt-cfg")
        }
        var c = document,
            g = window,
            f = e("./util"),
            p = f.aplusVersions,
            v = (e("@ali/grey-publish").util, g.navigator.userAgent),
            d = /WindVane/i.test(v),
            h = /AliBaichuan/i.test(v),
            _ = function() {
                return /_a_ig_v=@aplus/.test(location.search)
            },
            b = function(e) {
                return e.fn !== p.V_O && e.fn !== p.V_U
            },
            m = function() {
                try {
                    var e = g.localStorage,
                        t = "aplus_track_debug_id",
                        n = new RegExp("[?|&]" + t + "=(\\w*)"),
                        r = location.href.match(n);
                    if (r && r.length > 0) e.setItem(t, r[1]);
                    else {
                        var a = c.referrer || "",
                            o = a.match(n);
                        if (o && o.length > 0) e.setItem(t, o[1]);
                        else {
                            var i = g.name || "",
                                u = i.match(n);
                            u && u.length > 0 && e.setItem(t, u[1])
                        }
                    }
                    var s = e.getItem(t) || "";
                    return s && s.length > 50 ? !0 : !1
                } catch (l) {
                    return !1
                }
            },
            y = function() {
                try {
                    return !!/lazada/.test(location.host)
                } catch (e) {
                    return !1
                }
            },
            S = function(e) {
                try {
                    if ("function" == typeof g.WebSocket) {
                        var t = /alibaba-inc|aliway|alibabacorp\.com/.test(location.hostname),
                            n = f.getMetaCnt("aplus-channel"),
                            r = /aplus_ws=true/.test(location.search) || "WS" === n || "WS-ONLY" === n,
                            a = location.host,
                            o = /tmall|taobao\.com/g.test(a),
                            i = /Qianniu\/\d/.test(v),
                            u = t || r || o && !f.isMobile(v) && !i && e.fn !== p.V_W;
                        return u && (goldlog.aplusChannel = "WS"), u
                    }
                    return !1
                } catch (s) {
                    return !1
                }
            };
        n.getFrontPlugins = function(e) {
            var t = "s/" + e.version + "/plugin",
                n = goldlog.aplus_cplugin_ver,
                i = r(e.isDebug);
            return [{
                enable: a(e),
                path: [t, "aplus_windvane2.js"].join("/")
            }, {
                enable: o(e),
                path: [t, "aplus_bcbridge.js"].join("/")
            }, {
                enable: !!i,
                path: ["aplus_cplugin", n, i].join("/")
            }, {
                enable: l(),
                path: [t, "aplus_webvt.js"].join("/")
            }, {
                enable: !0,
                path: [t, "aplus_client.js"].join("/")
            }, {
                enable: !0,
                path: ["aplus_cplugin", n, "toolkit.js"].join("/")
            }, {
                enable: !0,
                path: ["aplus_cplugin", n, "monitor.js"].join("/")
            }, {
                enable: m(),
                path: ["aplus_cplugin", n, "track_deb.js"].join("/")
            }, {
                enable: y(),
                path: ["aplus_plugin_lazada", "lazadalog.js"].join("/")
            }, {
                enable: S(e),
                path: [t, "aplus_ws.js"].join("/")
            }, {
                enable: u(e),
                path: [t, "aplus_ae.js"].join("/")
            }, {
                enable: s(e),
                path: [t, "aplus_ac.js"].join("/")
            }]
        }, n.getPlugins = function(e) {
            var t = "s/" + e.version + "/plugin";
            return [{
                enable: _(e),
                path: "aplus_plugin_guide/index.js"
            }, {
                enable: b(e),
                path: [t, "aplus_spmact.js"].join("/")
            }]
        }
    }, {
        "./util": 8,
        "@ali/grey-publish": 2
    }],
    8: [function(e, t, n) {
        t.exports = e(1)
    }, {
        "@ali/grey-publish": 2
    }],
    9: [function(e, t, n) {
        "use strict";
        var r = e("./plugins"),
            a = e("./util"),
            o = (document, a.getCurrentNode()),
            i = function(e) {
                var t = [];
                try {
                    if (o) {
                        var n = o.getAttribute(e || t);
                        t = n.split(",")
                    }
                } catch (r) {
                    t = []
                } finally {
                    return t
                }
            },
            u = function(e) {
                var t = [];
                if (e)
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n].enable,
                            a = e[n].path;
                        r === !0 ? t.push(a) : "function" == typeof r && r() && t.push(a)
                    }
                return t
            };
        n.getPlugins = function(e) {
            var t = r.getPlugins(e);
            return [].concat(u(t), i("plugins"))
        }, n.getFrontPlugins = function(e) {
            var t = r.getFrontPlugins(e);
            return [].concat(u(t), i("frontPlugins"))
        }, n.getTrackerCfg = r.getTrackerCfg
    }, {
        "./plugins": 7,
        "./util": 8
    }]
}, {}, [5]);