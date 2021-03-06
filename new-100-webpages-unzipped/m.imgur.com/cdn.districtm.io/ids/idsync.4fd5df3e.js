parcelRequire = function(e, r, n, t) {
    function i(n, t) {
        function o(e) {
            return i(o.resolve(e))
        }

        function c(r) {
            return e[n][1][r] || r
        }
        if (!r[n]) {
            if (!e[n]) {
                var l = "function" == typeof parcelRequire && parcelRequire;
                if (!t && l) return l(n, !0);
                if (u) return u(n, !0);
                if (f && "string" == typeof n) return f(n);
                var p = new Error("Cannot find module '" + n + "'");
                throw p.code = "MODULE_NOT_FOUND", p
            }
            o.resolve = c;
            var a = r[n] = new i.Module(n);
            e[n][0].call(a.exports, o, a, a.exports, this)
        }
        return r[n].exports
    }

    function o(e) {
        this.id = e, this.bundle = i, this.exports = {}
    }
    var u = "function" == typeof parcelRequire && parcelRequire,
        f = "function" == typeof require && require;
    i.isParcelRequire = !0, i.Module = o, i.modules = e, i.cache = r, i.parent = u;
    for (var c = 0; c < n.length; c++) i(n[c]);
    if (n.length) {
        var l = i(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : t && (this[t] = l)
    }
    return i
}({
    6: [function(require, module, exports) {
        var define;
        var e;
        ! function(n) {
            var o = !1;
            if ("function" == typeof e && e.amd && (e(n), o = !0), "object" == typeof exports && (module.exports = n(), o = !0), !o) {
                var t = window.Cookies,
                    r = window.Cookies = n();
                r.noConflict = function() {
                    return window.Cookies = t, r
                }
            }
        }(function() {
            function e() {
                for (var e = 0, n = {}; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var t in o) n[t] = o[t]
                }
                return n
            }
            return function n(o) {
                function t(n, r, i) {
                    var c;
                    if ("undefined" != typeof document) {
                        if (arguments.length > 1) {
                            if ("number" == typeof(i = e({
                                    path: "/"
                                }, t.defaults, i)).expires) {
                                var a = new Date;
                                a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                            }
                            i.expires = i.expires ? i.expires.toUTCString() : "";
                            try {
                                c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c)
                            } catch (e) {}
                            r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                            var s = "";
                            for (var p in i) i[p] && (s += "; " + p, !0 !== i[p] && (s += "=" + i[p]));
                            return document.cookie = n + "=" + r + s
                        }
                        n || (c = {});
                        for (var f = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < f.length; d++) {
                            var l = f[d].split("="),
                                v = l.slice(1).join("=");
                            this.json || '"' !== v.charAt(0) || (v = v.slice(1, -1));
                            try {
                                var C = l[0].replace(u, decodeURIComponent);
                                if (v = o.read ? o.read(v, C) : o(v, C) || v.replace(u, decodeURIComponent), this.json) try {
                                    v = JSON.parse(v)
                                } catch (e) {}
                                if (n === C) {
                                    c = v;
                                    break
                                }
                                n || (c[C] = v)
                            } catch (e) {}
                        }
                        return c
                    }
                }
                return t.set = t, t.get = function(e) {
                    return t.call(t, e)
                }, t.getJSON = function() {
                    return t.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }, t.defaults = {}, t.remove = function(n, o) {
                    t(n, "", e(o, {
                        expires: -1
                    }))
                }, t.withConverter = n, t
            }(function() {})
        });
    }, {}],
    8: [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var t = function() {
            var t = [],
                e = 0;
            this.push = function(n) {
                e < 1 ? function n(u) {
                    e++, u(function() {
                        e--, t.length > 0 && n(t.shift())
                    })
                }(n) : function(e) {
                    t.push(e)
                }(n)
            }
        };
        exports.Queue = t;
    }, {}],
    4: [function(require, module, exports) {
        "use strict";
        var e = require("js-cookie"),
            t = r(e),
            n = require("./queue.js");

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }
        var s = "//dmx.districtm.io/s/",
            u = null,
            a = 0,
            i = 0,
            o = 0,
            l = new Array,
            c = new n.Queue,
            d = 500;

        function y(e) {
            var t = document.getElementsByTagName("head")[0],
                n = document.createElement("script");
            n.type = "text/javascript", n.src = e, n.async = !0, t.appendChild(n)
        }

        function f(e) {
            var t = document.getElementsByTagName("body")[0],
                n = document.createElement("img");
            n.style.display = "none", n.src = e, t.appendChild(n)
        }

        function p(e) {
            var t = (RegExp("[?|&]" + e + "=(.+?)(&|$)").exec(location.search) || [, null])[1];
            return t ? decodeURI(t) : t
        }

        function h() {
            try {
                localStorage.init = !0
            } catch (e) {
                return !1
            }
            return t.set("t", "1"), "1" == t.get("t") && (t.remove("t"), !0)
        }

        function v(e) {
            e.id = e.id.split("&")[0], l.push(e), 0 == (a -= 1) && c.push(m)
        }

        function m(e) {
            var t = !1;
            if (l.length > 0) {
                var n = new Array,
                    r = {
                        domain: 0,
                        buyerentries: l
                    },
                    a = {};
                n.push(r), i > 0 ? a.w = i : t = !0, a.users = n, a = JSON.stringify(a), i += 1, l.length = 0;
                var o = new XMLHttpRequest;
                if (o.withCredentials = !0, !o) return void e();
                o.open("POST", s + "v1/users", !0), o.setRequestHeader("Content-Type", "application/json"), o.onreadystatechange = function() {
                    4 == o.readyState && (200 == o.status || 204 == o.status || 304 == o.status ? (null !== u && 1 == t && f(s + "v1/users/" + u), e()) : e())
                }, o.send(a)
            } else e()
        }

        function g() {
            return e.handleBuyerEntry = v, e.handleFetchUsers = v, e;

            function e() {
                if (!1 !== h())
                    if (u = p("sellerid"), void 0 != (o = localStorage.nextrefresh) && o >= (new Date).getTime() / 1e3) null !== u && f(s + "v1/users/" + u);
                    else {
                        setTimeout(function() {
                            c.push(m)
                        }, d);
                        var e = new XMLHttpRequest;
                        e.withCredentials = !0, e && (e.open("GET", s + "v1/buyers", !0), e.onreadystatechange = function() {
                            if (4 == e.readyState && (200 == e.status || 304 == e.status)) {
                                try {
                                    var t = JSON.parse(e.response)
                                } catch (e) {
                                    return
                                }
                                o = t.r, localStorage.nextrefresh = o, void 0 != t.buyers ? (a = t.buyers.length, t.buyers.forEach(function(e) {
                                    y(e.syncurl)
                                })) : null !== u && f(s + "v1/users/" + u)
                            }
                        }, e.send(null))
                    }
            }
        }
        window.dmxrunner = g(), window.dmxrunner();
    }, {
        "js-cookie": 6,
        "./queue.js": 8
    }]
}, {}, [4], null)