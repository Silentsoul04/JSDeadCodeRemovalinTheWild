(function(e) {
    function t(t) {
        var n = t[0];
        var a = t[1];
        var f = t[2];
        var u, c, p = 0,
            l = [];
        for (; p < n.length; p++) {
            c = n[p];
            if (Object.prototype.hasOwnProperty.call(o, c) && o[c]) {
                l.push(o[c][0])
            }
            o[c] = 0
        }
        for (u in a) {
            if (Object.prototype.hasOwnProperty.call(a, u)) {
                e[u] = a[u]
            }
        }
        if (s) s(t);
        while (l.length) {
            l.shift()()
        }
        i.push.apply(i, f || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < i.length; t++) {
            var r = i[t];
            var n = true;
            for (var f = 1; f < r.length; f++) {
                var u = r[f];
                if (o[u] !== 0) n = false
            }
            if (n) {
                i.splice(t--, 1);
                e = a(a.s = r[0])
            }
        }
        return e
    }
    var n = {};
    var o = {
        3: 0
    };
    var i = [];

    function a(t) {
        if (n[t]) {
            return n[t].exports
        }
        var r = n[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, a);
        r.l = true;
        return r.exports
    }
    a.m = e;
    a.c = n;
    a.d = function(e, t, r) {
        if (!a.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    a.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    a.t = function(e, t) {
        if (t & 1) e = a(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        a.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var n in e) a.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    };
    a.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function n() {
            return e
        };
        a.d(t, "a", t);
        return t
    };
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    a.p = "//i.alicdn.com/ae-msite-ui/";
    var f = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var u = f.push.bind(f);
    f.push = t;
    f = f.slice();
    for (var c = 0; c < f.length; c++) t(f[c]);
    var s = u;
    i.push(["PFQd", 0]);
    return r()
})({
    PFQd: function(e, t, r) {
        "use strict";
        var n = r("esaA");
        var o = r("akhE");
        var i = function p() {
            var e = f() || "";
            var t = s();
            if (t === "msite") {
                var r = "aff_trace_key=" + e + "&aff_platform=msite&m_page_id=" + window.dmtrack_pageid + "&gclid=" + u();
                a(window, "touchstart", function(e) {
                    var t = e.target;
                    if (t.closest("a")) {
                        var n = t.closest("a");
                        if (/^((http|https):)?\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(n.getAttribute("href"))) {
                            var o = n.getAttribute("href");
                            var i = /(#[^?&]+)/.test(o) ? o.match(/(#[^?&]+)/)[0] : "";
                            if (i) {
                                o = o.replace(i, "")
                            }
                            n.setAttribute("href", o + (!!~o.indexOf("?") ? "&" : "?") + r + i)
                        }
                    }
                })
            }
        };

        function a(e, t, r) {
            if (e.addEventListener) {
                e.addEventListener(t, r, false)
            } else if (e.attachEvent) {
                e.attachEvent("on" + t, r)
            }
        }

        function f() {
            var e = {};
            try {
                e = n.get("aeu_cid", {
                    domain: "aliexpress.com",
                    path: "/",
                    raw: true
                })
            } catch (t) {}
            return e
        }

        function u() {
            return c("gclid")
        }

        function c(e, t) {
            if (!t) t = window.location.href;
            e = e.replace(/[[\]]/g, "\\$&");
            var r = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)");
            var n = r.exec(t);
            if (!n) return null;
            if (!n[2]) return "";
            return decodeURIComponent(n[2].replace(/\+/g, " "))
        }

        function s() {
            var e = "pc";
            var t = navigator.userAgent;
            if (/(iPhone|Android)/.test(t)) {
                e = /AliApp\(AE/.test(t) ? "app" : "msite";
                return e
            }
            if (/(i|a)Pad/.test(t)) {
                e = /AliApp\(AE-PD/.test(t) ? "pad" : "pc";
                return e
            }
            return e
        }
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
        }
        if (!Element.prototype.closest) {
            Element.prototype.closest = function(e) {
                var t = this;
                do {
                    if (t.matches(e)) return t;
                    t = t.parentElement || t.parentNode
                } while (t !== null && t.nodeType === 1);
                return null
            }
        }
        o.init();
        i()
    },
    esaA: function(e, t, r) {
        (function(e) {
            e.exports = function() {
                e = e || {};
                e.exports = t || {};
                var r = t;
                var n = decodeURIComponent;
                var o = encodeURIComponent;
                r.get = function(e, t) {
                    u(e);
                    if (typeof t === "function") {
                        t = {
                            converter: t
                        }
                    } else {
                        t = t || {}
                    }
                    var r = i(document.cookie, !t["raw"]);
                    return (t.converter || c)(r[e])
                };
                r.set = function(e, t, r) {
                    u(e);
                    r = r || {};
                    var n = r["expires"];
                    var i = r["domain"];
                    var a = r["path"];
                    if (!r["raw"]) {
                        t = o(String(t))
                    }
                    var c = e + "=" + t;
                    var s = n;
                    if (typeof s === "number") {
                        s = new Date;
                        s.setDate(s.getDate() + n)
                    }
                    if (s instanceof Date) {
                        c += "; expires=" + s.toUTCString()
                    }
                    if (f(i)) {
                        c += "; domain=" + i
                    }
                    if (f(a)) {
                        c += "; path=" + a
                    }
                    if (r["secure"]) {
                        c += "; secure"
                    }
                    document.cookie = c;
                    return c
                };
                r.remove = function(e, t) {
                    t = t || {};
                    t["expires"] = new Date(0);
                    return this.set(e, "", t)
                };

                function i(e, t) {
                    var r = {};
                    if (a(e) && e.length > 0) {
                        var o = t ? n : c;
                        var i = e.split(/;\s/g);
                        var f;
                        var u;
                        var s;
                        for (var p = 0, l = i.length; p < l; p++) {
                            s = i[p].match(/([^=]+)=/i);
                            if (s instanceof Array) {
                                try {
                                    f = n(s[1]);
                                    u = o(i[p].substring(s[1].length + 1))
                                } catch (v) {}
                            } else {
                                f = n(i[p]);
                                u = ""
                            }
                            if (f) {
                                r[f] = u
                            }
                        }
                    }
                    return r
                }

                function a(e) {
                    return typeof e === "string"
                }

                function f(e) {
                    return a(e) && e !== ""
                }

                function u(e) {
                    if (!f(e)) {
                        throw new TypeError("Cookie name must be a non-empty string")
                    }
                }

                function c(e) {
                    return e
                }
                return e.exports
            }()
        }).call(this, r("OVrp")(e))
    }
});