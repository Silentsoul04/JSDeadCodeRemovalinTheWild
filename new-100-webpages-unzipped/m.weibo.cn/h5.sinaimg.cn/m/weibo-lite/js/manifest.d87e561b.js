(function(e) {
    function t(t) {
        for (var r, i, a = t[0], c = t[1], m = t[2], l = 0, p = []; l < a.length; l++) i = a[l], s[i] && p.push(s[i][0]), s[i] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        u && u(t);
        while (p.length) p.shift()();
        return n.push.apply(n, m || []), o()
    }

    function o() {
        for (var e, t = 0; t < n.length; t++) {
            for (var o = n[t], r = !0, i = 1; i < o.length; i++) {
                var a = o[i];
                0 !== s[a] && (r = !1)
            }
            r && (n.splice(t--, 1), e = c(c.s = o[0]))
        }
        return e
    }
    var r = {},
        i = {
            manifest: 0
        },
        s = {
            manifest: 0
        },
        n = [];

    function a(e) {
        return c.p + "js/" + ({
            about: "about",
            draft: "draft",
            me: "me",
            msg: "msg",
            msglist: "msglist",
            msgsublist: "msgsublist",
            search: "search",
            smsLogin: "smsLogin",
            "chat-composer-miniComposer": "chat-composer-miniComposer",
            chat: "chat",
            "composer-miniComposer": "composer-miniComposer",
            composer: "composer",
            "collect-main-page-profile-statusLite": "collect-main-page-profile-statusLite",
            "collect-main-profile-statusLite": "collect-main-profile-statusLite",
            collect: "collect",
            main: "main",
            profile: "profile",
            statusLite: "statusLite",
            page: "page",
            setting: "setting",
            miniComposer: "miniComposer"
        }[e] || e) + "." + {
            about: "a34fd868",
            draft: "3c70f826",
            me: "4ab25dea",
            msg: "16cce35c",
            msglist: "12385c05",
            msgsublist: "5b6a3285",
            search: "874c197b",
            smsLogin: "b5bf6a11",
            "chat-composer-miniComposer": "19919573",
            chat: "c1fd46bd",
            "composer-miniComposer": "e89d014a",
            composer: "59f8f644",
            "chunk-03b287bb": "1d8f08ff",
            "collect-main-page-profile-statusLite": "7e1cef97",
            "collect-main-profile-statusLite": "3f6d8bce",
            collect: "89470af7",
            main: "8558a9f0",
            profile: "8e929aed",
            statusLite: "2d6b3fed",
            page: "52546190",
            setting: "100fd730",
            miniComposer: "ebc2b9de"
        }[e] + ".js"
    }

    function c(t) {
        if (r[t]) return r[t].exports;
        var o = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, c), o.l = !0, o.exports
    }
    c.e = function(e) {
        var t = [],
            o = {
                about: 1,
                draft: 1,
                me: 1,
                msglist: 1,
                msgsublist: 1,
                search: 1,
                smsLogin: 1,
                "chat-composer-miniComposer": 1,
                chat: 1,
                "composer-miniComposer": 1,
                composer: 1,
                "chunk-03b287bb": 1,
                "collect-main-page-profile-statusLite": 1,
                "collect-main-profile-statusLite": 1,
                collect: 1,
                main: 1,
                profile: 1,
                statusLite: 1,
                page: 1,
                miniComposer: 1
            };
        i[e] ? t.push(i[e]) : 0 !== i[e] && o[e] && t.push(i[e] = new Promise(function(t, o) {
            for (var r = "css/" + ({
                    about: "about",
                    draft: "draft",
                    me: "me",
                    msg: "msg",
                    msglist: "msglist",
                    msgsublist: "msgsublist",
                    search: "search",
                    smsLogin: "smsLogin",
                    "chat-composer-miniComposer": "chat-composer-miniComposer",
                    chat: "chat",
                    "composer-miniComposer": "composer-miniComposer",
                    composer: "composer",
                    "collect-main-page-profile-statusLite": "collect-main-page-profile-statusLite",
                    "collect-main-profile-statusLite": "collect-main-profile-statusLite",
                    collect: "collect",
                    main: "main",
                    profile: "profile",
                    statusLite: "statusLite",
                    page: "page",
                    setting: "setting",
                    miniComposer: "miniComposer"
                }[e] || e) + "." + {
                    about: "d8c6b004",
                    draft: "f80fc4be",
                    me: "f1fb19ae",
                    msg: "31d6cfe0",
                    msglist: "ef9f4cc0",
                    msgsublist: "9ae57556",
                    search: "47fcdadd",
                    smsLogin: "67228ba7",
                    "chat-composer-miniComposer": "0ca6db68",
                    chat: "25394196",
                    "composer-miniComposer": "ff83e4e9",
                    composer: "8f710dc0",
                    "chunk-03b287bb": "4df35807",
                    "collect-main-page-profile-statusLite": "3099b8c8",
                    "collect-main-profile-statusLite": "99ec0809",
                    collect: "48469343",
                    main: "a8d8496e",
                    profile: "785ccd5e",
                    statusLite: "b090c6ae",
                    page: "ad5807b5",
                    setting: "31d6cfe0",
                    miniComposer: "da091168"
                }[e] + ".css", s = c.p + r, n = document.getElementsByTagName("link"), a = 0; a < n.length; a++) {
                var m = n[a],
                    l = m.getAttribute("data-href") || m.getAttribute("href");
                if ("stylesheet" === m.rel && (l === r || l === s)) return t()
            }
            var p = document.getElementsByTagName("style");
            for (a = 0; a < p.length; a++) {
                m = p[a], l = m.getAttribute("data-href");
                if (l === r || l === s) return t()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet", u.type = "text/css", u.onload = t, u.onerror = function(t) {
                var r = t && t.target && t.target.src || s,
                    n = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                n.request = r, delete i[e], u.parentNode.removeChild(u), o(n)
            }, u.href = s;
            var f = document.getElementsByTagName("head")[0];
            f.appendChild(u)
        }).then(function() {
            i[e] = 0
        }));
        var r = s[e];
        if (0 !== r)
            if (r) t.push(r[2]);
            else {
                var n = new Promise(function(t, o) {
                    r = s[e] = [t, o]
                });
                t.push(r[2] = n);
                var m, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = a(e), m = function(t) {
                    l.onerror = l.onload = null, clearTimeout(p);
                    var o = s[e];
                    if (0 !== o) {
                        if (o) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src,
                                n = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + i + ")");
                            n.type = r, n.request = i, o[1](n)
                        }
                        s[e] = void 0
                    }
                };
                var p = setTimeout(function() {
                    m({
                        type: "timeout",
                        target: l
                    })
                }, 12e4);
                l.onerror = l.onload = m, document.head.appendChild(l)
            }
        return Promise.all(t)
    }, c.m = e, c.c = r, c.d = function(e, t, o) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (c.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) c.d(o, r, function(t) {
                return e[t]
            }.bind(null, r));
        return o
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "//h5.sinaimg.cn/m/weibo-lite/", c.oe = function(e) {
        throw console.error(e), e
    };
    var m = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = m.push.bind(m);
    m.push = t, m = m.slice();
    for (var p = 0; p < m.length; p++) t(m[p]);
    var u = l;
    o()
})([]);
//# sourceMappingURL=manifest.d87e561b.js.map