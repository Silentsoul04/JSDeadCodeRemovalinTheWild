! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/webpack/", n(n.s = 748)
}({
    16: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    748: function(e, t, n) {
        e.exports = n(749)
    },
    749: function(e, t, n) {
        (function(e) {
            ! function(e) {
                "use strict";
                e.addEventListener("load", function() {
                    for (var t = document.querySelectorAll("[data-tracking]"), n = 0; n < t.length; n++) t[n].addEventListener("click", function() {
                        var t = JSON.parse(this.getAttribute("data-tracking")),
                            n = t.category ? t.category : null,
                            r = t.action ? t.action : null,
                            o = t.label ? t.label : null,
                            a = t.context ? t.context : null;
                        e.spAnalytics.logEvent(n, r, o, a), e.dataLayer = e.dataLayer || [], e.dataLayer.push({
                            event: "GAEventMorpheus",
                            eventCategory: n,
                            eventAction: r,
                            eventLabel: o
                        })
                    })
                }), e.addEventListener("unload", function() {
                    if (e.performance && e.performance.getEntriesByType) {
                        var t = e.performance.getEntriesByType("navigation");
                        if (t && !(t.length < 1)) {
                            var n = t[0].toJSON();
                            e.spAnalytics.sendBeacon("performance", "navigation", null, JSON.stringify(n))
                        }
                    }
                })
            }(void 0 !== e ? e : window)
        }).call(this, n(16))
    }
});
//# sourceMappingURL=tracking.download.78b80edf989916eecb86.js.map