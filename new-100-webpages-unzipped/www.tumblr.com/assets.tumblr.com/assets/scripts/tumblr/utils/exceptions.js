/*! scripts/tumblr/utils/exceptions.js */ ! function(t, e) {
    "use strict";

    function n(t, e, n, r) {
        t.addEventListener ? t.addEventListener(e, n, !!r) : t.attachEvent && t.attachEvent("on" + e, n, !!r)
    }

    function r(t) {
        var e = decodeURIComponent(h.cookie).match(new RegExp(t + "=([^;]+)"));
        return e && e.length > 1 ? e[1] : null
    }

    function o(t, e) {
        return "string" == typeof t && t.length > e ? [t.slice(0, e / 2), "...", t.length - e, "...", t.slice(-e / 2)].join("") : t
    }

    function i() {
        return ((h.head || {}).innerHTML || "").indexOf("#missinge_button") !== -1
    }

    function a(t, e, n, i, a) {
        try {
            if (e = o(e, 300) || "", A.test(e) && !I.test(e)) return;
            if (a = R(o(a && a.stack, 1e3) || ""), A.test(a) && !I.test(a)) return;
            L.push({
                path: (h.location || {}).pathname || "NO_LOCATION_OR_PATHNAME",
                msg: o(t, 200) || "",
                url: e,
                ln: S(n, 10) || -1,
                col: S(i, 10) || -1,
                err: a,
                group: D("js_errors_a")("A", D("js_errors_b")("B", "*")),
                logged_in: !!r("logged_in")
            }), E.___err = !0
        } catch (a) {}
    }

    function u(t, e) {
        "number" == typeof e && N.random() > e || (t instanceof O ? (t.url || (t.url = "//www.tumblr.com/"), a(t.message, t.url, t.ln, t.col, t)) : j.push(R(t)))
    }

    function c(t) {
        var e = C();
        return e.name = t, R(e)
    }

    function s(t) {
        for (var e, n, r = t.length; r > 0;) n = N.floor(N.random() * r), r--, e = t[r], t[r] = t[n], t[n] = e;
        return t
    }

    function g(t) {
        if (!v || !v.getEntriesByType) return t;
        var e = v.getEntriesByType("resource"),
            n = {};
        F(e, function(t) {
            var e = (t.name.match(/\/\/([^\/]+)/) || "")[1];
            if (e.indexOf(".tumblr.") !== -1) {
                n[t.initiatorType] || (n[t.initiatorType] = []);
                var r = e.split(".")[0];
                n[t.initiatorType].push({
                    name: t.name.split(e)[1],
                    duration: (t.duration || "").toString(),
                    bucket: r,
                    protocol: (t.nextHopProtocol || "").toString(),
                    timing: {
                        redirectStart: (t.redirectStart || "").toString(),
                        redirectEnd: (t.redirectEnd || "").toString(),
                        fetchStart: (t.fetchStart || "").toString(),
                        domainLookupStart: (t.domainLookupStart || "").toString(),
                        domainLookupEnd: (t.domainLookupEnd || "").toString(),
                        connectStart: (t.connectStart || "").toString(),
                        connectEnd: (t.connectEnd || "").toString(),
                        secureConnectionStart: (t.secureConnectionStart || "").toString(),
                        requestStart: (t.requestStart || "").toString(),
                        responseStart: (t.responseStart || "").toString(),
                        responseEnd: (t.responseEnd || "").toString(),
                        transferSize: (t.transferSize || "").toString()
                    }
                })
            }
        }), k.entries || (k.entries = []);
        for (var r = [{
                type: "img",
                num: 10
            }, {
                type: "link",
                num: 2
            }, {
                type: "script",
                num: 2
            }, {
                type: "css",
                num: 2
            }], o = 0; o < r.length; ++o) {
            var i = r[o],
                a = n[i.type];
            if (a)
                for (i.num < a.length && s(a); i.num && a.length;) k.entries.push(a.pop()), --i.num
        }
        return x(k) && ((t || (t = {})).perf = k, k.timing = v.timing, k.memory = v.memory, k.navigation = v.navigation), t
    }

    function l() {
        try {
            w || (L.length = 0, u(new O("PAGE_DID_NOT_LOAD")));
            var e;
            if (!i() && D("enable_js_errors_log")(function() {
                    L.length && ((e || (e = {})).errors = L)
                }), D("js_performance_logging")(function() {
                    try {
                        e = g(e)
                    } catch (t) {}
                }), D("enable_js_ephemeral_log")(function() {
                    j.length && ((e || (e = {})).ephemeral = j)
                }), D("js_debugger_1")(function() {
                    (e || (e = {})).ephemeral = [c("js_debugger_1")]
                }), D("js_debugger_2")(function() {
                    (e || (e = {})).ephemeral = [c("js_debugger_2")]
                }), !e) return;
            e.cdn = d || "CDN_LOOKUP_FAILED";
            var n = JSON.stringify({
                    form_key: (h.getElementById("tumblr_form_key") || h.body).getAttribute("content"),
                    gpop: (h.getElementById("tumblr_gpop") || h.body).getAttribute("content"),
                    log: e
                }),
                r = new T;
            r.open("POST", "/svc/log/capture/exceptions", !1), r.setRequestHeader("Content-type", "text/plain"), r.onreadystatechange = function() {
                4 === r.readyState && (L.length = j.length = 0)
            }, r.send(n)
        } catch (o) {
            if (!t.jQuery) return;
            (e || (e = {})).errors || (e.errors = L), t.jQuery.ajax({
                async: !1,
                dataType: "json",
                contentType: "text/plain",
                type: "POST",
                data: {
                    form_key: t.jQuery("#tumblr_form_key").attr("content"),
                    log: e
                },
                url: "/svc/log/capture/exceptions",
                withFormKey: !0
            }), u(o)
        }
    }

    function p() {
        k.page_info = {}, k.page_info.path = h.location.pathname || "n/a"
    }

    function f() {
        var t = (new b).getTime(),
            e = t - v.timing.navigationStart;
        k.page_load_time = e
    }

    function m() {
        if (v && v.timing) try {
            p(), f()
        } catch (t) {}
    }

    function _() {
        w = !0, m()
    }
    var d, h = t.document,
        y = t.navigator,
        S = t.parseInt,
        v = t.performance,
        E = t.window,
        b = t.Date,
        O = t.Error,
        N = t.Math,
        T = t.XMLHttpRequest,
        j = [],
        L = [],
        k = {},
        w = !1,
        A = /https?:\/\//,
        I = /https?:\/\/[^\/]*tumblr[^\/]*/,
        R = function(t) {
            return t && t.stringify && function(e) {
                try {
                    return t.stringify(e)
                } catch (n) {
                    return u(n), '"FAILED_JSON_STRINGIFY"'
                }
            } || function() {
                return '"NO_JSON_STRINGIFY"'
            }
        }(t.JSON),
        D = function(t) {
            return t && t.Flags || function() {
                function t(t, e) {
                    return "function" == typeof t ? t.call(this, e) : t
                }
                u(new O("Missing Tumblr.Flags in exceptions.js"));
                var e = {
                    enable_js_errors_log: !0,
                    enable_js_ephemeral_log: !0
                };
                return function(n) {
                    var r = !!e[n];
                    return function o(e, n) {
                        var i = t.call(this, r ? e : n, r);
                        return void 0 !== i ? i : o
                    }
                }
            }()
        }(t.Tumblr),
        x = function(t) {
            return t && t.keys || function(e) {
                var n = [],
                    r = t.prototype.hasOwnProperty;
                for (var o in e) r.call(e, o) && n.push(o);
                return n
            }
        }(t.Object),
        F = function(t, e, n) {
            if ("function" == typeof e)
                for (var r = (t && t.length) >>> 0, o = 0; o < r; o++) e.call(n, t[o], o, t)
        };
    ! function() {
        try {
            var t = new T;
            t.open("GET", "https://assets.tumblr.com/delivery/cdn.json"), t.onreadystatechange = function() {
                if (t.readyState === T.DONE) try {
                    d = JSON.parse(t.response).cdn
                } catch (e) {
                    d = "CDN_BAD_RESPONSE"
                }
            }, t.send()
        } catch (e) {}
    }();
    var C = u.debugDump = function() {
        var e = [];
        return F(h.getElementsByTagName("script"), function(t) {
            e.push(t.src)
        }), {
            timestamp: +new b,
            path: (h.location || {}).href || "NO_HREF",
            lang: (y || {}).userLanguage || (y || {}).language || "NO_LANG",
            referrer: h.referrer || "NO_REFERRER",
            ua: (y || {}).userAgent || "NO_UA",
            timing: (v || {}).timing || "NO_TIMING",
            scripts: e,
            globals: x(t),
            cookie: h.cookie,
            ephemeral: j,
            errors: L,
            document: (h.documentElement || {}).innerHTML || "NO_DOCUMENT"
        }
    };
    ! function() {
        n(E, "beforeunload", l), E.onerror = a
    }(), (e.Utils || (e.Utils = {})).exceptions = u, n(E, "load", _)
}(this, this.Tumblr || (this.Tumblr = {}));