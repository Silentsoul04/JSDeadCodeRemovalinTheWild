(function(e) {
    function t(t) {
        var a = t[0];
        var l = t[1];
        var u = t[2];
        var d, s, c = 0,
            f = [];
        for (; c < a.length; c++) {
            s = a[c];
            if (Object.prototype.hasOwnProperty.call(n, s) && n[s]) {
                f.push(n[s][0])
            }
            n[s] = 0
        }
        for (d in l) {
            if (Object.prototype.hasOwnProperty.call(l, d)) {
                e[d] = l[d]
            }
        }
        if (o) o(t);
        while (f.length) {
            f.shift()()
        }
        i.push.apply(i, u || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < i.length; t++) {
            var r = i[t];
            var a = true;
            for (var u = 1; u < r.length; u++) {
                var d = r[u];
                if (n[d] !== 0) a = false
            }
            if (a) {
                i.splice(t--, 1);
                e = l(l.s = r[0])
            }
        }
        return e
    }
    var a = {};
    var n = {
        16: 0
    };
    var i = [];

    function l(t) {
        if (a[t]) {
            return a[t].exports
        }
        var r = a[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, l);
        r.l = true;
        return r.exports
    }
    l.m = e;
    l.c = a;
    l.d = function(e, t, r) {
        if (!l.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    l.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    l.t = function(e, t) {
        if (t & 1) e = l(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        l.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var a in e) l.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    };
    l.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function a() {
            return e
        };
        l.d(t, "a", t);
        return t
    };
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    l.p = "//i.alicdn.com/ae-msite-ui/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var d = u.push.bind(u);
    u.push = t;
    u = u.slice();
    for (var s = 0; s < u.length; s++) t(u[s]);
    var o = d;
    i.push(["yKLW", 0]);
    return r()
})({
    Rhar: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = O(a);
        var i = r("6ato");
        var l = O(i);
        var u = r("2dj7");
        var d = O(u);
        var s = r("Xtzg");
        var o = O(s);
        var c = r("0dFU");
        var f = O(c);
        var p = r("glLi");
        var v = O(p);
        var m = r("cDcd");
        var _ = O(m);
        var h = r("nsXK");
        var w = O(h);
        var g = r("SNWE");
        var y = O(g);
        var b = r("F8dh");
        r("WkaZ");

        function O(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var N = function(e) {
            (0, f.default)(t, e);

            function t(e) {
                (0, l.default)(this, t);
                var r = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                var a = r.props.cdpJson;
                r.state = {
                    singleRowProduct: a || {},
                    productList: []
                };
                r.spmC = a && a.spmC || "single-row-product";
                return r
            }(0, d.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    var e = this;
                    var t = this.state.singleRowProduct,
                        r = t.numberOfItems,
                        a = r === undefined ? 0 : r,
                        n = t.widgetId,
                        i = n === undefined ? 0 : n;
                    (0, w.default)("https://gpsfront.aliexpress.com/getRecommendingResults.do?widget_id=" + i + "&phase=1&limit=" + a + "&imageSize=220x220&platform=msite").then(function(e) {
                        return e.json()
                    }).then(function(t) {
                        e.setState({
                            productList: t.results
                        })
                    })
                }
            }, {
                key: "renderHeaderOutside",
                value: function a() {
                    var e = this.state.singleRowProduct.title,
                        t = e === undefined ? "" : e;
                    return _.default.createElement("div", {
                        className: "floor-section-title _2NMe1"
                    }, _.default.createElement("div", {
                        className: "flex align-center"
                    }, _.default.createElement("span", {
                        className: "_37dqQ"
                    }, t)))
                }
            }, {
                key: "renderHeaderInside",
                value: function i() {
                    var e = this.state.singleRowProduct,
                        t = e.title,
                        r = t === undefined ? "" : t,
                        a = e.subTitle,
                        n = a === undefined ? "" : a,
                        i = e.iconTitle,
                        l = i === undefined ? "" : i;
                    return _.default.createElement("div", {
                        className: "flex justify-space-between _1mqAf"
                    }, _.default.createElement("div", {
                        className: "flex align-center"
                    }, l ? _.default.createElement(v.default, {
                        className: "_1dpRK",
                        src: l
                    }) : null, _.default.createElement("span", {
                        className: "_37dqQ"
                    }, r)), _.default.createElement("div", null, n && _.default.createElement("span", {
                        className: "_1Mi--"
                    }, n)))
                }
            }, {
                key: "renderProductList",
                value: function u() {
                    var e = this;
                    var t = this.state.singleRowProduct,
                        r = t.numberOfItems,
                        a = t.showDiscountTag,
                        i = t.showOriMinPrice,
                        l = t.channelUrl;
                    var u = Array.isArray(this.state.productList) ? this.state.productList : [];
                    return _.default.createElement("ul", {
                        "class": "flex"
                    }, u.slice(0, r).map(function(t, r) {
                        return _.default.createElement("li", (0, n.default)({
                            key: r,
                            className: "_3NNJX"
                        }, b.DAILY_ANALYTIC, {
                            exp_page_area: e.spmC,
                            exp_product: t.productId,
                            prod: t.productId,
                            exp_result_cnt: "1"
                        }), _.default.createElement("div", {
                            className: "K6krk"
                        }, _.default.createElement("a", {
                            href: (0, y.default)(l, t.productId)
                        }, _.default.createElement(v.default, {
                            src: t.productImage
                        }))), _.default.createElement("div", {
                            className: "_226L5"
                        }, _.default.createElement("a", {
                            href: (0, y.default)(l, t.productId)
                        }, a && _.default.createElement("div", {
                            className: "_1l0l0"
                        }, "-", t.discount, "%"), _.default.createElement("div", {
                            className: "xIYwL"
                        }, t.minPrice), i && _.default.createElement("div", {
                            className: "_26UFW"
                        }, t.oriMinPrice))))
                    }))
                }
            }, {
                key: "render",
                value: function s() {
                    var e = this.state.singleRowProduct.showTitleOutside;
                    return _.default.createElement("div", {
                        "data-role": "single-row-product",
                        "data-spm": this.spmC,
                        className: "_3Y3Pd"
                    }, e && this.renderHeaderOutside(), _.default.createElement("div", {
                        className: "_25O9O"
                    }, !e && this.renderHeaderInside(), this.renderProductList()))
                }
            }]);
            return t
        }(_.default.PureComponent);
        t.default = N
    },
    WkaZ: function(e, t, r) {
        e.exports = {
            "single-row-product-wrap": "_25O9O",
            "item-wrapper": "_3NNJX",
            "price-wrap": "_226L5",
            "price-text": "xIYwL",
            "title-wrap": "_1mqAf",
            "subtitle-text": "_1Mi--",
            "discount-tag": "_1l0l0",
            "ori-price-text": "_26UFW",
            "header-outside-wrap": "_2NMe1",
            "single-row-product-wrapper": "_3Y3Pd",
            "title-icon": "_1dpRK",
            "title-text": "_37dqQ",
            "img-wrap": "K6krk"
        }
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    },
    yKLW: function(e, t, r) {
        "use strict";
        var a = r("cDcd");
        var n = s(a);
        var i = r("31al");
        var l = s(i);
        var u = r("Rhar");
        var d = s(u);

        function s(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        window["gop"]["single-row-product"] = function(e, t, r) {
            (0, l.default)(n.default.createElement(d.default, {
                cdpJson: e
            }), t, r)
        }
    }
});