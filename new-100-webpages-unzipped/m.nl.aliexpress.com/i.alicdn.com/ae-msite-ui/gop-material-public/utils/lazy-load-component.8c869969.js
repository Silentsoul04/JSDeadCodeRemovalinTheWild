(function(e) {
    var t = {};

    function n(r) {
        if (t[r]) {
            return t[r].exports
        }
        var o = t[r] = {
            i: r,
            l: false,
            exports: {}
        };
        e[r].call(o.exports, o, o.exports, n);
        o.l = true;
        return o.exports
    }
    n.m = e;
    n.c = t;
    n.d = function(e, t, r) {
        if (!n.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    n.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    n.t = function(e, t) {
        if (t & 1) e = n(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        n.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    };
    n.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function o() {
            return e
        };
        n.d(t, "a", t);
        return t
    };
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    n.p = "//i.alicdn.com/ae-msite-ui/";
    return n(n.s = "y0NT")
})({
    "1vWx": function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    },
    "2dj7": function(e, t, n) {
        "use strict";
        t.__esModule = true;
        var r = n("9dlP");
        var o = i(r);

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.default = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    if ("value" in r) r.writable = true;
                    (0, o.default)(e, r.key, r)
                }
            }
            return function(t, n, r) {
                if (n) e(t.prototype, n);
                if (r) e(t, r);
                return t
            }
        }()
    },
    "6ato": function(e, t, n) {
        "use strict";
        t.__esModule = true;
        t.default = function(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
    },
    "7v0a": function(e, t) {
        var n = e.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
        if (typeof __g == "number") __g = n
    },
    "8w6x": function(e, t, n) {
        var r = n("cP0M");
        var o = n("1vWx");
        e.exports = n("8wne") ? function(e, t, n) {
            return r.f(e, t, o(1, n))
        } : function(e, t, n) {
            e[t] = n;
            return e
        }
    },
    "8wne": function(e, t, n) {
        e.exports = !n("FD99")(function() {
            return Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    },
    "9dlP": function(e, t, n) {
        e.exports = {
            "default": n("n92x"),
            __esModule: true
        }
    },
    BYad: function(e, t, n) {
        var r = n("S7Ts");
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    FD99: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return true
            }
        }
    },
    JBLb: function(e, t, n) {
        var r = n("S7Ts");
        var o = n("7v0a").document;
        var i = r(o) && r(o.createElement);
        e.exports = function(e) {
            return i ? o.createElement(e) : {}
        }
    },
    L21U: function(e, t, n) {
        var r = n("reZL");
        e.exports = function(e, t, n) {
            r(e);
            if (t === undefined) return e;
            switch (n) {
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    },
    LMjc: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    Nqaa: function(e, t, n) {
        e.exports = !n("8wne") && !n("FD99")(function() {
            return Object.defineProperty(n("JBLb")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    },
    S7Ts: function(e, t) {
        e.exports = function(e) {
            return typeof e === "object" ? e !== null : typeof e === "function"
        }
    },
    cHfS: function(e, t, n) {
        var r = n("ovlw");
        r(r.S + r.F * !n("8wne"), "Object", {
            defineProperty: n("cP0M").f
        })
    },
    cP0M: function(e, t, n) {
        var r = n("BYad");
        var o = n("Nqaa");
        var i = n("dvP9");
        var a = Object.defineProperty;
        t.f = n("8wne") ? Object.defineProperty : function u(e, t, n) {
            r(e);
            t = i(t, true);
            r(n);
            if (o) try {
                return a(e, t, n)
            } catch (u) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            if ("value" in n) e[t] = n.value;
            return e
        }
    },
    dvP9: function(e, t, n) {
        var r = n("S7Ts");
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && typeof(n = e.toString) == "function" && !r(o = n.call(e))) return o;
            if (typeof(n = e.valueOf) == "function" && !r(o = n.call(e))) return o;
            if (!t && typeof(n = e.toString) == "function" && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    n92x: function(e, t, n) {
        n("cHfS");
        var r = n("rhgp").Object;
        e.exports = function o(e, t, n) {
            return r.defineProperty(e, t, n)
        }
    },
    ovlw: function(e, t, n) {
        var r = n("7v0a");
        var o = n("rhgp");
        var i = n("L21U");
        var a = n("8w6x");
        var u = n("LMjc");
        var c = "prototype";
        var f = function(e, t, n) {
            var l = e & f.F;
            var d = e & f.G;
            var s = e & f.S;
            var p = e & f.P;
            var v = e & f.B;
            var y = e & f.W;
            var h = d ? o : o[t] || (o[t] = {});
            var w = h[c];
            var g = d ? r : s ? r[t] : (r[t] || {})[c];
            var m, b, _;
            if (d) n = t;
            for (m in n) {
                b = !l && g && g[m] !== undefined;
                if (b && u(h, m)) continue;
                _ = b ? g[m] : n[m];
                h[m] = d && typeof g[m] != "function" ? n[m] : v && b ? i(_, r) : y && g[m] == _ ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    t[c] = e[c];
                    return t
                }(_) : p && typeof _ == "function" ? i(Function.call, _) : _;
                if (p) {
                    (h.virtual || (h.virtual = {}))[m] = _;
                    if (e & f.R && w && !w[m]) a(w, m, _)
                }
            }
        };
        f.F = 1;
        f.G = 2;
        f.S = 4;
        f.P = 8;
        f.B = 16;
        f.W = 32;
        f.U = 64;
        f.R = 128;
        e.exports = f
    },
    reZL: function(e, t) {
        e.exports = function(e) {
            if (typeof e != "function") throw TypeError(e + " is not a function!");
            return e
        }
    },
    rhgp: function(e, t) {
        var n = e.exports = {
            version: "2.6.9"
        };
        if (typeof __e == "number") __e = n
    },
    wNCC: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = n("6ato");
        var o = u(r);
        var i = n("2dj7");
        var a = u(i);

        function u(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var c = function() {
            function e() {
                (0, o.default)(this, e)
            }(0, a.default)(e, null, [{
                key: "error",
                value: function t(e) {
                    typeof window.__WPO !== "undefined" && window.__WPO.log("error: " + e, 1)
                }
            }, {
                key: "log",
                value: function n(e) {
                    typeof window.__WPO !== "undefined" && window.__WPO.log("log: " + e, 1)
                }
            }]);
            return e
        }();
        t.default = c
    },
    y0NT: function(e, t, n) {
        "use strict";
        var r = n("wNCC");
        var o = i(r);

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }(function() {
            var e = {
                threshold: 100,
                layers2loadArr: [],
                layers2loadMap: {},
                layers2loadData: {},
                scrollTopVal: window.pageYOffset,
                viewWidth: window.screen.availWidth,
                viewHeight: window.screen.availHeight,
                asyncFetch: function t(e, n, r, o) {
                    var i = this;
                    var a = "#" + r + (o || "");
                    var u = document.querySelector(a);
                    var c = i.isNeedRender(u);
                    if (c) {
                        i.renderLayerInitial({
                            path: e,
                            jsonData: n,
                            containerId: r,
                            cdpId: o
                        })
                    } else {
                        i.layers2loadArr.push(u);
                        i.layers2loadMap[a] = {
                            path: e,
                            containerId: r,
                            jsonData: n,
                            cdpId: o
                        }
                    }
                },
                detectEleHeightChange: function n(e, t) {
                    var n = e.clientHeight;
                    var r;
                    (function o() {
                        r = e.clientHeight;
                        if (n != r) {
                            t()
                        }
                        n = r;
                        if (e.onElementHeightChangeTimer) {
                            clearTimeout(e.onElementHeightChangeTimer)
                        }
                        e.onElementHeightChangeTimer = setTimeout(o, 200)
                    })()
                },
                renderLayerInitial: function r(e) {
                    document.write("<script defer crossorigin='anonymous' src=" + e.path + "></script>");
                    window["gop"]["exec"].push({
                        containerId: e.containerId,
                        jsonData: e.jsonData,
                        cdpId: e.cdpId
                    })
                },
                renderLayerAfter: function i(e) {
                    var t = this;
                    var n = document.querySelector("head");
                    var r = document.createElement("script");
                    r.src = e.path;
                    r.async = true;
                    r.crossOrigin = "anonymous";
                    n.appendChild(r);
                    r.onload = function() {
                        try {
                            window["gop"][e.containerId](e.jsonData, e.containerId, e.cdpId)
                        } catch (t) {
                            o.default.error(JSON.stringify(t))
                        }
                    }
                },
                renderLayersInTurn: function a() {
                    var e = this;
                    if (e.layers2loadArr.length) {
                        var t = e.layers2loadArr.length;
                        var n = [];
                        for (var r = 0; r < t; r++) {
                            var o = e.layers2loadArr[r];
                            var i = "#" + o.getAttribute("id");
                            if (e.isNeedRender(o)) {
                                e.renderLayerAfter(e.layers2loadMap[i]);
                                delete e.layers2loadMap[i]
                            } else {
                                n.push(o)
                            }
                        }
                        e.layers2loadArr = n
                    }
                },
                isNeedRender: function u(e) {
                    var t = this;
                    var n = {
                        top: t.scrollTopVal - t.threshold,
                        bottom: t.scrollTopVal + t.viewHeight + t.threshold
                    };
                    var r = {
                        top: e.offsetTop || 0,
                        bottom: (e.offsetTop || 0) + (e.offsetHeight || 0)
                    };
                    if (r.top <= n.top && r.bottom >= n.top || r.top >= n.top && r.bottom <= n.bottom || r.top <= n.bottom && r.bottom >= n.bottom || r.top <= n.top && r.bottom >= n.bottom) {
                        return true
                    }
                    return false
                },
                initMonitorScroll: function c() {
                    var e = this;
                    window.addEventListener("scroll", function() {
                        e.scrollTopVal = window.pageYOffset;
                        e.renderLayersInTurn()
                    })
                },
                init: function f() {
                    var e = this;
                    window.addEventListener("resize", function() {
                        e.scrollTopVal = window.pageYOffset;
                        e.viewWidth = window.screen.availWidth;
                        e.viewHeight = window.screen.availHeight;
                        e.renderLayersInTurn()
                    });
                    e.initMonitorScroll()
                }
            };
            window.asyncFetch = function(t, n, r, o) {
                e.asyncFetch(t, n, r, o)
            };
            e.init();
            document.addEventListener("DOMContentLoaded", function() {
                var t = window.gop.exec;
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    try {
                        window["gop"][r.containerId](r.jsonData, r.containerId, r.cdpId)
                    } catch (i) {
                        o.default.error(JSON.stringify(i))
                    }
                }
                e.detectEleHeightChange(document.querySelectorAll("body")[0], function() {
                    e.renderLayersInTurn()
                })
            })
        })()
    }
});