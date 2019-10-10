(function(e) {
    function t(t) {
        var a = t[0];
        var s = t[1];
        var l = t[2];
        var o, i, c = 0,
            f = [];
        for (; c < a.length; c++) {
            i = a[c];
            if (Object.prototype.hasOwnProperty.call(n, i) && n[i]) {
                f.push(n[i][0])
            }
            n[i] = 0
        }
        for (o in s) {
            if (Object.prototype.hasOwnProperty.call(s, o)) {
                e[o] = s[o]
            }
        }
        if (d) d(t);
        while (f.length) {
            f.shift()()
        }
        u.push.apply(u, l || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < u.length; t++) {
            var r = u[t];
            var a = true;
            for (var l = 1; l < r.length; l++) {
                var o = r[l];
                if (n[o] !== 0) a = false
            }
            if (a) {
                u.splice(t--, 1);
                e = s(s.s = r[0])
            }
        }
        return e
    }
    var a = {};
    var n = {
        6: 0
    };
    var u = [];

    function s(t) {
        if (a[t]) {
            return a[t].exports
        }
        var r = a[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, s);
        r.l = true;
        return r.exports
    }
    s.m = e;
    s.c = a;
    s.d = function(e, t, r) {
        if (!s.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    s.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    s.t = function(e, t) {
        if (t & 1) e = s(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        s.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var a in e) s.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    };
    s.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function a() {
            return e
        };
        s.d(t, "a", t);
        return t
    };
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    s.p = "//i.alicdn.com/ae-msite-ui/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var o = l.push.bind(l);
    l.push = t;
    l = l.slice();
    for (var i = 0; i < l.length; i++) t(l[i]);
    var d = o;
    u.push(["B3vN", 0]);
    return r()
})({
    B3vN: function(e, t, r) {
        "use strict";
        var a = r("cDcd");
        var n = i(a);
        var u = r("31al");
        var s = i(u);
        var l = r("vpF+");
        var o = i(l);

        function i(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        window["gop"]["features-brands"] = function(e, t, r) {
            (0, s.default)(n.default.createElement(o.default, {
                cdpJson: e
            }), t, r)
        }
    },
    Xsfc: function(e, t, r) {
        e.exports = {
            brand: "_1Y_jf",
            "brand-img": "_2Fo3R",
            "brand-info": "ap6WY",
            title: "_32UJ5",
            "sub-title": "_1ClxO",
            list: "_11vUg",
            item: "_3s3af",
            "pro-img-wrap": "_1g74H"
        }
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    },
    "vpF+": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var a = r("bS4n");
        var n = y(a);
        var u = r("6ato");
        var s = y(u);
        var l = r("2dj7");
        var o = y(l);
        var i = r("Xtzg");
        var d = y(i);
        var c = r("0dFU");
        var f = y(c);
        var p = r("glLi");
        var v = y(p);
        var m = r("cDcd");
        var _ = y(m);
        var b = r("nsXK");
        var g = y(b);
        var h = r("F8dh");
        r("Xsfc");

        function y(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var x = function(e) {
            (0, f.default)(t, e);

            function t(e) {
                (0, s.default)(this, t);
                var r = (0, d.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                var a = r.props.cdpJson;
                r.state = {
                    brands: []
                };
                r.spmC = a && a.spmC || "features-brands";
                return r
            }(0, o.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    var e = this;
                    var t = this.props.cdpJson;
                    var r = t.widgetId,
                        a = t.maxIndustryDisplay,
                        n = a === undefined ? 6 : a;
                    (0, g.default)("//gpsfront.aliexpress.com/getRecommendingResults.do?widget_id=" + r + "&phase=1&limit=" + n + "&imageSize=220x220&platform=msite").then(function(e) {
                        return e.json()
                    }).then(function(t) {
                        if (t.success) {
                            e.setState({
                                brands: t.results.splice(0, n)
                            })
                        }
                    })
                }
            }, {
                key: "renderBrands",
                value: function a() {
                    var e = this;
                    return this.state.brands.map(function(t) {
                        return _.default.createElement("div", (0, n.default)({
                            key: t.title,
                            className: "_1Y_jf",
                            "data-spm": e.spmC
                        }, h.DAILY_ANALYTIC, {
                            exp_page_area: e.spmC,
                            exp_attribute: "1",
                            exp_result_cnt: "1"
                        }), _.default.createElement("a", {
                            href: t.url
                        }, _.default.createElement(v.default, {
                            src: t.mainPic,
                            className: "_2Fo3R",
                            compressQuality: 70,
                            compressWidth: 480,
                            compressHeight: 480
                        }), _.default.createElement("div", {
                            className: "ap6WY"
                        }, _.default.createElement("p", {
                            className: "_32UJ5"
                        }, t.title), t.subTitle ? _.default.createElement("p", {
                            className: "_1ClxO"
                        }, t.subTitle) : null, _.default.createElement("ul", {
                            className: "_11vUg"
                        }, e.renderProducts(t.products, t.url)))))
                    })
                }
            }, {
                key: "renderProducts",
                value: function u(e) {
                    var t = this;
                    var r = this.props.cdpJson;
                    var a = r.itemPerIndustry,
                        u = a === undefined ? 3 : a;
                    return e.slice(0, u).map(function(e) {
                        var r = {
                            backgroundImage: "url(" + e.productImage + ")"
                        };
                        return _.default.createElement("li", (0, n.default)({
                            key: e.productId,
                            className: "_3s3af"
                        }, h.DAILY_ANALYTIC, {
                            "data-spm": t.spmC,
                            exp_page_area: t.spmC,
                            exp_product: e.productId,
                            prod: e.productId,
                            exp_attribute: "1",
                            exp_result_cnt: "1"
                        }), _.default.createElement("div", {
                            className: "_1g74H",
                            style: r
                        }, _.default.createElement(v.default, {
                            src: e.productImage
                        })))
                    })
                }
            }, {
                key: "render",
                value: function l() {
                    return _.default.createElement("div", {
                        "data-role": "feature-brands"
                    }, this.state.brands.length > 0 ? this.renderBrands() : null)
                }
            }]);
            return t
        }(_.default.PureComponent);
        t.default = x
    }
});