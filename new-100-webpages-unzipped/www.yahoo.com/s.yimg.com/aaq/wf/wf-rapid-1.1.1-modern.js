! function(e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("wafer-rapid", [], r) : "object" == typeof exports ? exports["wafer-rapid"] = r() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-rapid"] = r())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        var t = {};
        return r.m = e, r.c = t, r.d = function(e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }, r.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function(e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, r.p = "https://s.yimg.com/aaq/wf/", r(r.s = "./src/entry.js")
    }({
        "./src/entry.js": function(e, r, t) {
            "use strict";

            function n(e, r) {
                if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var a = function() {
                    function e(e, r) {
                        for (var t = 0; t < r.length; t++) {
                            var n = r[t];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(r, t, n) {
                        return t && e(r.prototype, t), n && e(r, n), r
                    }
                }(),
                i = window.wafer.utils,
                u = i.convertNodeListToArray,
                f = i.get,
                l = i.findAncestor,
                c = null,
                s = null,
                d = function(e) {
                    var r = {
                            id: e.id
                        },
                        t = e.getAttribute("data-i13n");
                    return t && (r = t.split(";").reduce(function(e, r) {
                        var t = r.split(":");
                        return 2 === t.length && (e[t[0]] = t[1]), e
                    }, r)), r
                },
                p = function() {
                    return !c && s && (c = f(window, s)) && "function" != typeof c.refreshModule && (s = null, c = null), c
                },
                y = function(e) {
                    if (!e.id) return !1;
                    var r = p();
                    if (!r) return !1;
                    var t = d(e),
                        n = t.id;
                    if (r.isModuleTracked(n)) r.refreshModule(n);
                    else {
                        var a = t.sec ? o({}, n, t.sec) : [n];
                        r.addModulesWithViewability(a)
                    }
                    return !0
                },
                w = function(e) {
                    if (!e.id) return !1;
                    var r = p();
                    if (!r) return !1;
                    var t = d(e),
                        n = t.id;
                    return r.isModuleTracked(n) && r.removeModule(n), !0
                },
                v = function() {
                    function e() {
                        n(this, e), s = (document.body.getAttribute("data-wf-rapid") || "rapidInstance").split(".")
                    }
                    return a(e, [{
                        key: "sync",
                        value: function(e) {
                            if (e) {
                                var r = l(e, "wafer-rapid-module");
                                r && y(r);
                                var t = u(e.getElementsByClassName("wafer-rapid-module"));
                                t.length > 0 && Array.prototype.forEach.call(t, function(e) {
                                    y(e)
                                })
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function(e) {
                            if (e) {
                                e.classList.contains("wafer-rapid-module") && w(e);
                                var r = u(e.getElementsByClassName("wafer-rapid-module"));
                                r.length > 0 && Array.prototype.forEach.call(r, function(e) {
                                    w(e)
                                })
                            }
                        }
                    }]), e
                }(),
                b = v;
            r.default = new b
        }
    })
});