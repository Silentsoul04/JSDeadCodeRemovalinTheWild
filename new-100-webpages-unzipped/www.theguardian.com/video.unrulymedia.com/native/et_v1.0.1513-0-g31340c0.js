! function(e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        e[r].call(o.exports, o, o.exports, t);
        o.l = !0;
        return o.exports
    }
    t.m = e;
    t.c = n;
    t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    };
    t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    t.t = function(e, n) {
        1 & n && (e = t(e));
        if (8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        t.r(r);
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        });
        if (2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function(n) {
                return e[n]
            }.bind(null, o));
        return r
    };
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        t.d(n, "a", n);
        return n
    };
    t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    };
    t.p = "https://video.unrulymedia.com/native/";
    t(t.s = 2)
}([function(e, n, t) {
    var r = t(1);
    e.exports = function(e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
                o = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })));
            o.forEach(function(n) {
                r(e, n, t[n])
            })
        }
        return e
    }
}, function(e, n) {
    e.exports = function(e, n, t) {
        n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t;
        return e
    }
}, function(e, n, t) {
    "use strict";
    t.r(n);
    var r = t(0),
        o = t.n(r),
        u = function(e) {
            (new Image).src = e
        },
        c = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "https://fls.unrulymedia.com/log",
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : btoa;
            t("".concat(n, "?data=").concat(encodeURIComponent(r(JSON.stringify(e)))))
        };
    ! function(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Math.random() < 1,
            u = 0;
        e.onerror = function(e, c, i, a, f) {
            (u += 1) <= t && r && n({
                level: "error",
                message: e,
                source: c,
                lineno: i,
                colno: a,
                data: o()({}, function(e) {
                    return e ? Object.keys(e).reduce(function(n, t) {
                        n[t] = "".concat(e[t]);
                        return n
                    }, {
                        stack: e.stack
                    }) : {}
                }(f), {
                    errorCount: u
                })
            });
            return !0
        };
        e.onunhandledrejection = function(e) {
            if (e.reason instanceof Error) throw e.reason;
            var n = new Error("".concat(e.reason));
            n.promise = e.promise;
            throw n
        }
    }(window)
}]);
//# sourceMappingURL=https://test.corp.unrulymedia.com/native/sourcemaps/et_v1.0.1513-0-g31340c0.js.map