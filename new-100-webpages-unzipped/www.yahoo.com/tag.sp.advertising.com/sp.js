window.__spEnv = 'PROD';
! function(e) {
    var r = {};

    function t(n) {
        if (r[n]) return r[n].exports;
        var o = r[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    t.m = e, t.c = r, t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(r, "a", r), r
    }, t.o = function(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, t.p = "", t(t.s = 2)
}([function(e, r, t) {
    "use strict";
    var n = {
        LOCAL: {
            debug: !0,
            apiUrl: "https://service-dev.idsync.analytics.yahoo.com/sp/v0/pixels",
            frameUrl: "sp-frame.html"
        },
        DEV: {
            debug: !0,
            apiUrl: "https://service-dev.idsync.analytics.yahoo.com/sp/v0/pixels",
            frameUrl: "https://tag-dev.idsync.analytics.yahoo.com/sp-frame.html"
        },
        PROD: {
            debug: !1,
            apiUrl: "https://service.idsync.analytics.yahoo.com/sp/v0/pixels",
            frameUrl: "https://tag.idsync.analytics.yahoo.com/sp-frame.html"
        }
    }[window.__spEnv || "LOCAL"];
    r.a = n
}, , function(e, r, t) {
    "use strict";
    t.r(r);
    var n = t(0);
    ! function(e, r) {
        var t = r.createElement("iframe");
        t.src = n.a.frameUrl + "?referrer=" + encodeURIComponent(document.referrer), t.width = 0, t.height = 0, t.style.display = "none", r.body.appendChild(t)
    }(window, document)
}]);