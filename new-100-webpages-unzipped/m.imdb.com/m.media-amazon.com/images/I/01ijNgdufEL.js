(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["commons.object-assign"], {
        pP2k1LOM87: function(r, e, t) {
            "use strict";
            /*
            object-assign
            (c) Sindre Sorhus
            @license MIT
            */
            var n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable;
            r.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var r = new String("abc");
                    if (r[5] = "de", "5" === Object.getOwnPropertyNames(r)[0]) return !1;
                    for (var e = {}, t = 0; t < 10; t++) e["_" + String.fromCharCode(t)] = t;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(r) {
                            return e[r]
                        }).join("")) return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(r) {
                        n[r] = r
                    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (o) {
                    return !1
                }
            }() ? Object.assign : function(r, e) {
                for (var t, a, i = function(r) {
                        if (null == r) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(r)
                    }(r), s = 1; s < arguments.length; s++) {
                    for (var p in t = Object(arguments[s])) o.call(t, p) && (i[p] = t[p]);
                    if (n) {
                        a = n(t);
                        for (var b = 0; b < a.length; b++) c.call(t, a[b]) && (i[a[b]] = t[a[b]])
                    }
                }
                return i
            }
        }
    }
]);