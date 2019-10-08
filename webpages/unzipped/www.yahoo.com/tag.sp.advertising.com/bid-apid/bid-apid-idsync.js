! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = function e() {
        ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.run = function() {
            if (document && document.body) {
                var e = document.createElement("iframe");
                e.width = 0, e.height = 0, e.frameBorder = 0, e.id = "opus-iframe", e.src = "https://opus.analytics.yahoo.com/opus/tag/opus-frame.html?id=4", document.body.appendChild(e)
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    var o, r = (o = n(0)) && o.__esModule ? o : {
        default: o
    };
    window.addEventListener("load", function() {
        new r.default(window, document).run()
    })
}]);