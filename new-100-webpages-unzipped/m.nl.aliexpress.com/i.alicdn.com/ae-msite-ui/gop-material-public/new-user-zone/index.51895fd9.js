(function(e) {
    function t(t) {
        var a = t[0];
        var l = t[1];
        var s = t[2];
        var c, o, d = 0,
            f = [];
        for (; d < a.length; d++) {
            o = a[d];
            if (Object.prototype.hasOwnProperty.call(n, o) && n[o]) {
                f.push(n[o][0])
            }
            n[o] = 0
        }
        for (c in l) {
            if (Object.prototype.hasOwnProperty.call(l, c)) {
                e[c] = l[c]
            }
        }
        if (i) i(t);
        while (f.length) {
            f.shift()()
        }
        u.push.apply(u, s || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < u.length; t++) {
            var r = u[t];
            var a = true;
            for (var s = 1; s < r.length; s++) {
                var c = r[s];
                if (n[c] !== 0) a = false
            }
            if (a) {
                u.splice(t--, 1);
                e = l(l.s = r[0])
            }
        }
        return e
    }
    var a = {};
    var n = {
        10: 0
    };
    var u = [];

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
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var c = s.push.bind(s);
    s.push = t;
    s = s.slice();
    for (var o = 0; o < s.length; o++) t(s[o]);
    var i = c;
    u.push(["gGjh", 0]);
    return r()
})({
    "844m": function(e, t, r) {
        e.exports = {
            "cur-price": "_2plDK",
            "sub-title": "U_c8l",
            "new-user-wrap": "_3L0Tv",
            "new-user-content": "_1W7qj",
            title: "_377qO",
            list: "_3LS3g",
            item: "_2N9mr",
            "get-coupon-text": "_1tjg3",
            discount: "_21WW8",
            coupon: "_1B78a"
        }
    },
    "Hq+n": function(e, t, r) {
        e.exports = {
            "cur-price": "_2lKnj",
            "sub-title": "_22nRL",
            "new-user-wrap": "_4KcB3",
            "new-user-content": "T6B4t",
            title: "_2Vi_A",
            coupon: "_11l6d",
            "coupon-info": "gUs40",
            list: "_1I9bC",
            item: "_2Bah8"
        }
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    },
    gGjh: function(e, t, r) {
        "use strict";
        var a = r("cDcd");
        var n = d(a);
        var u = r("31al");
        var l = d(u);
        var s = r("klBP");
        var c = d(s);
        var o = r("mGVO");
        var i = d(o);

        function d(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        window["gop"]["new-user-zone"] = function(e, t, r) {
            var a = window,
                u = a.abResult,
                s = u === undefined ? {} : u;
            e = e || {};
            if (e.newData && s.homeVersion === "2") {
                (0, l.default)(n.default.createElement(i.default, {
                    cdpJson: e.newData
                }), t, r)
            } else {
                (0, l.default)(n.default.createElement(c.default, {
                    cdpJson: e.oldData || e
                }), t, r)
            }
        }
    },
    klBP: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = x(a);
        var u = r("6ato");
        var l = x(u);
        var s = r("2dj7");
        var c = x(s);
        var o = r("Xtzg");
        var i = x(o);
        var d = r("0dFU");
        var f = x(d);
        var p = r("glLi");
        var m = x(p);
        var v = r("cDcd");
        var _ = x(v);
        var h = r("nsXK");
        var g = x(h);
        var w = r("SNWE");
        var E = x(w);
        var b = r("F8dh");
        r("Hq+n");

        function x(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var y = function(e) {
            (0, f.default)(t, e);

            function t(e) {
                (0, l.default)(this, t);
                var r = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                var a = r.props.cdpJson;
                r.state = {
                    newUserData: a || {},
                    productList: []
                };
                r.spmC = a && a.spmC || "new-user-zone";
                return r
            }(0, c.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    var e = this;
                    var t = this.state.newUserData,
                        r = t.widgetId,
                        a = t.numOfItemWithCoupon;
                    if (r) {
                        (0, g.default)("//gpsfront.aliexpress.com/getRecommendingResults.do?widget_id=" + r + "&phase=1&limit=10&imageSize=220x220&platform=msite").then(function(e) {
                            return e.json()
                        }).then(function(t) {
                            if (t.success) {
                                e.setState({
                                    productList: t.results.splice(0, a)
                                })
                            }
                        })
                    }
                }
            }, {
                key: "renderProductList",
                value: function a() {
                    var e = this;
                    var t = this;
                    if (t.state.productList.length) {
                        var r = t.state.newUserData.newUserZoneUrl;
                        return t.state.productList.map(function(t, a) {
                            return _.default.createElement("li", (0, n.default)({
                                key: a,
                                className: "_2Bah8"
                            }, b.DAILY_ANALYTIC, {
                                exp_page_area: e.spmC,
                                exp_product: t.productId,
                                prod: t.productId,
                                exp_result_cnt: "1"
                            }), _.default.createElement("a", {
                                href: (0, E.default)(r, t.productId, "pid")
                            }, _.default.createElement(m.default, {
                                src: t.productImage
                            }), _.default.createElement("p", {
                                className: "_2lKnj"
                            }, t.minPrice)))
                        })
                    } else {
                        return null
                    }
                }
            }, {
                key: "render",
                value: function u() {
                    var e = this;
                    if (e.state.newUserData) {
                        var t = e.state.newUserData,
                            r = t.getCouponBannerSrc,
                            a = t.newUserZoneUrl,
                            u = t.newUserTitle,
                            l = t.getCouponText,
                            s = t.useCouponText;
                        return _.default.createElement("div", (0, n.default)({
                            "data-role": this.spmC,
                            className: "_4KcB3"
                        }, b.DAILY_ANALYTIC, {
                            "data-spm": this.spmC,
                            exp_page_area: this.spmC,
                            exp_attribute: "1",
                            exp_result_cnt: "1"
                        }), _.default.createElement("div", {
                            className: "T6B4t"
                        }, _.default.createElement("p", {
                            className: "_2Vi_A"
                        }, _.default.createElement(m.default, {
                            src: "//ae01.alicdn.com/kf/HTB1nrUwbovrK1RjSspc762zSXXaf.png"
                        }), u), _.default.createElement("div", {
                            className: "_11l6d"
                        }, _.default.createElement("a", {
                            href: a
                        }, _.default.createElement(m.default, {
                            src: r
                        }), _.default.createElement("p", {
                            className: "gUs40"
                        }, l))), _.default.createElement("p", {
                            className: "_22nRL"
                        }, s), _.default.createElement("ul", {
                            className: "_1I9bC"
                        }, this.renderProductList())))
                    } else {
                        return null
                    }
                }
            }]);
            return t
        }(_.default.PureComponent);
        t.default = y
    },
    mGVO: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = x(a);
        var u = r("6ato");
        var l = x(u);
        var s = r("2dj7");
        var c = x(s);
        var o = r("Xtzg");
        var i = x(o);
        var d = r("0dFU");
        var f = x(d);
        var p = r("glLi");
        var m = x(p);
        var v = r("cDcd");
        var _ = x(v);
        var h = r("nsXK");
        var g = x(h);
        var w = r("SNWE");
        var E = x(w);
        var b = r("F8dh");
        r("844m");

        function x(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var y = function(e) {
            (0, f.default)(t, e);

            function t(e) {
                (0, l.default)(this, t);
                var r = (0, i.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                var a = r.props.cdpJson;
                r.state = {
                    newUserData: a || {},
                    newUserProductList: [],
                    discountProductList: []
                };
                r.spmC = a && a.spmC || "new-user-zone";
                return r
            }(0, c.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    var e = this;
                    var t = this.state.newUserData,
                        r = t.widgetId,
                        a = t.widgetId2,
                        n = t.numOfItemWithCoupon;
                    if (r) {
                        (0, g.default)("//gpsfront.aliexpress.com/getRecommendingResults.do?widget_id=" + r + "&phase=1&limit=10&imageSize=220x220&platform=msite").then(function(e) {
                            return e.json()
                        }).then(function(t) {
                            if (t.success) {
                                e.setState({
                                    newUserProductList: t.results.splice(0, n)
                                })
                            }
                        })
                    }
                    if (a) {
                        (0, g.default)("//gpsfront.aliexpress.com/getRecommendingResults.do?widget_id=" + a + "&phase=1&limit=10&imageSize=220x220&platform=msite").then(function(e) {
                            return e.json()
                        }).then(function(t) {
                            if (t.success) {
                                e.setState({
                                    discountProductList: t.results.splice(0, n)
                                })
                            }
                        })
                    }
                }
            }, {
                key: "renderProductList",
                value: function a() {
                    var e = this;
                    var t = this.state,
                        r = t.newUserProductList,
                        a = t.discountProductList,
                        u = t.newUserData,
                        l = u === undefined ? {} : u;
                    var s = l.newUserZoneUrl,
                        c = l.numOfItemWithCoupon;
                    var o = [];
                    if (r.length || a.length) {
                        o = o.concat(r.map(function(t, r) {
                            return _.default.createElement("li", (0, n.default)({
                                key: r,
                                className: "_2N9mr"
                            }, b.DAILY_ANALYTIC, {
                                exp_page_area: e.spmC,
                                exp_product: t.productId,
                                exp_result_cnt: "1"
                            }), _.default.createElement("a", {
                                href: (0, E.default)(s, t.productId)
                            }, _.default.createElement(m.default, {
                                src: t.productImage
                            }), _.default.createElement("p", {
                                className: "_2plDK"
                            }, t.minPrice)))
                        }));
                        if (o.length < c) {
                            o = o.concat(a.map(function(t, r) {
                                return _.default.createElement("li", (0, n.default)({
                                    key: r,
                                    className: "_2N9mr"
                                }, b.DAILY_ANALYTIC, {
                                    exp_page_area: e.spmC,
                                    exp_product: t.productId,
                                    prod: t.productId,
                                    exp_result_cnt: "1"
                                }), _.default.createElement("a", {
                                    href: (0, E.default)(s, t.productId)
                                }, _.default.createElement(m.default, {
                                    src: t.productImage
                                }), _.default.createElement("p", {
                                    className: "_2plDK _21WW8"
                                }, "- ", t.discount, "%")))
                            }))
                        }
                        return o.splice(0, c)
                    } else {
                        return null
                    }
                }
            }, {
                key: "render",
                value: function u() {
                    var e = this.state.newUserData;
                    if (e) {
                        var t = e.couponWrapSrc,
                            r = e.getCouponSrc,
                            a = e.getCouponBtnSrc,
                            u = e.newUserZoneUrl,
                            l = e.newUserTitle,
                            s = e.getCouponText,
                            c = e.newUserSubTitle;
                        return _.default.createElement("div", (0, n.default)({
                            "data-role": this.spmC,
                            className: "_3L0Tv"
                        }, b.DAILY_ANALYTIC, {
                            "data-spm": this.spmC,
                            exp_page_area: this.spmC,
                            exp_attribute: "1",
                            exp_result_cnt: "1"
                        }), _.default.createElement("a", {
                            href: u
                        }, _.default.createElement("div", {
                            className: "_1W7qj",
                            style: {
                                backgroundImage: "url(" + t + ")"
                            }
                        }, _.default.createElement("p", {
                            className: "_377qO"
                        }, l), _.default.createElement("p", {
                            className: "U_c8l"
                        }, c), _.default.createElement("ul", {
                            className: "_3LS3g"
                        }, this.renderProductList(), _.default.createElement("li", {
                            className: "_2N9mr"
                        }, _.default.createElement(m.default, {
                            src: r
                        }), _.default.createElement("p", {
                            className: "_1tjg3"
                        }, s))), _.default.createElement("div", {
                            className: "_1B78a"
                        }, _.default.createElement(m.default, {
                            src: a
                        })))))
                    } else {
                        return null
                    }
                }
            }]);
            return t
        }(_.default.PureComponent);
        t.default = y
    }
});