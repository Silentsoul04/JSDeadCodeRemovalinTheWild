(window.webpackJsonpBoomer = window.webpackJsonpBoomer || []).push([
    ["npm.process-nextick-args"], {
        "/UbjylJ5+O": function(n, e, t) {
            "use strict";
            (function(e) {
                void 0 === e || !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? n.exports = {
                    nextTick: function(n, t, c, i) {
                        if ("function" != typeof n) throw new TypeError('"callback" argument must be a function');
                        var r, o, u = arguments.length;
                        switch (u) {
                            case 0:
                            case 1:
                                return e.nextTick(n);
                            case 2:
                                return e.nextTick(function() {
                                    n.call(null, t)
                                });
                            case 3:
                                return e.nextTick(function() {
                                    n.call(null, t, c)
                                });
                            case 4:
                                return e.nextTick(function() {
                                    n.call(null, t, c, i)
                                });
                            default:
                                for (r = new Array(u - 1), o = 0; o < r.length;) r[o++] = arguments[o];
                                return e.nextTick(function() {
                                    n.apply(null, r)
                                })
                        }
                    }
                } : n.exports = e
            }).call(this, t("gsGbMhucZM"))
        }
    }
]);