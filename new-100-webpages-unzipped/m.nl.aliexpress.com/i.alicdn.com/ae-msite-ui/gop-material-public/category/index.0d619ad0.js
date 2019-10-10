(function(e) {
    function t(t) {
        var a = t[0];
        var u = t[1];
        var l = t[2];
        var c, i, s = 0,
            p = [];
        for (; s < a.length; s++) {
            i = a[s];
            if (Object.prototype.hasOwnProperty.call(n, i) && n[i]) {
                p.push(n[i][0])
            }
            n[i] = 0
        }
        for (c in u) {
            if (Object.prototype.hasOwnProperty.call(u, c)) {
                e[c] = u[c]
            }
        }
        if (f) f(t);
        while (p.length) {
            p.shift()()
        }
        o.push.apply(o, l || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < o.length; t++) {
            var r = o[t];
            var a = true;
            for (var l = 1; l < r.length; l++) {
                var c = r[l];
                if (n[c] !== 0) a = false
            }
            if (a) {
                o.splice(t--, 1);
                e = u(u.s = r[0])
            }
        }
        return e
    }
    var a = {};
    var n = {
        1: 0
    };
    var o = [];

    function u(t) {
        if (a[t]) {
            return a[t].exports
        }
        var r = a[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, u);
        r.l = true;
        return r.exports
    }
    u.m = e;
    u.c = a;
    u.d = function(e, t, r) {
        if (!u.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    u.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    u.t = function(e, t) {
        if (t & 1) e = u(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        u.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var a in e) u.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    };
    u.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function a() {
            return e
        };
        u.d(t, "a", t);
        return t
    };
    u.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    u.p = "//i.alicdn.com/ae-msite-ui/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var c = l.push.bind(l);
    l.push = t;
    l = l.slice();
    for (var i = 0; i < l.length; i++) t(l[i]);
    var f = c;
    o.push(["ZAMu", 0]);
    return r()
})({
    "8+mB": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = g(a);
        var o = r("6ato");
        var u = g(o);
        var l = r("2dj7");
        var c = g(l);
        var i = r("Xtzg");
        var f = g(i);
        var s = r("0dFU");
        var p = g(s);
        var d = r("glLi");
        var v = g(d);
        var m = r("cDcd");
        var y = g(m);
        var _ = r("F8dh");
        r("XcZ1");

        function g(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var h = function(e) {
            (0, p.default)(t, e);

            function t(e) {
                (0, u.default)(this, t);
                var r = (0, f.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                var a = r.props.cdpJson;
                r.spmC = a && a.spmC || "category";
                return r
            }(0, c.default)(t, [{
                key: "renderCategoryList",
                value: function r() {
                    var e = this.props.cdpJson.items,
                        t = e === undefined ? [] : e;
                    return t.slice(0, 10).map(function(e, t) {
                        return y.default.createElement("li", {
                            className: "_1l0Fe",
                            key: t
                        }, y.default.createElement("a", {
                            href: e.urlCatUrl
                        }, y.default.createElement(v.default, {
                            src: e.catLogo,
                            className: "_3sOUe",
                            alt: e.title,
                            compressWidth: 80,
                            compressHeight: 80,
                            compressQuality: 70
                        }), y.default.createElement("span", {
                            className: "flex align-center justify-center _1qVto"
                        }, y.default.createElement("span", {
                            className: "bae_X"
                        }, e.title))))
                    })
                }
            }, {
                key: "render",
                value: function a() {
                    return y.default.createElement("div", (0, n.default)({
                        "data-role": "category"
                    }, _.DAILY_ANALYTIC, {
                        className: "_2psX2",
                        "data-spm": this.spmC,
                        exp_page_area: "category",
                        prod: "category",
                        exp_result_cnt: "1"
                    }), y.default.createElement("ul", {
                        className: "flex _3Z2Dw"
                    }, this.renderCategoryList()))
                }
            }]);
            return t
        }(y.default.PureComponent);
        t.default = h
    },
    XcZ1: function(e, t, r) {
        e.exports = {
            "title-text": "bae_X",
            "category-wrap": "_2psX2",
            "category-ul": "_3Z2Dw",
            "cat-wrap": "_1l0Fe",
            "icon-img": "_3sOUe",
            "title-text-wrap": "_1qVto"
        }
    },
    ZAMu: function(e, t, r) {
        "use strict";
        var a = r("cDcd");
        var n = i(a);
        var o = r("31al");
        var u = i(o);
        var l = r("8+mB");
        var c = i(l);

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        window["gop"]["category"] = function(e, t, r) {
            (0, u.default)(n.default.createElement(c.default, {
                cdpJson: e
            }), t, r)
        }
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    }
});