(function(e) {
    function t(t) {
        var n = t[0];
        var o = t[1];
        var u = t[2];
        var l, s, f = 0,
            c = [];
        for (; f < n.length; f++) {
            s = n[f];
            if (Object.prototype.hasOwnProperty.call(a, s) && a[s]) {
                c.push(a[s][0])
            }
            a[s] = 0
        }
        for (l in o) {
            if (Object.prototype.hasOwnProperty.call(o, l)) {
                e[l] = o[l]
            }
        }
        if (d) d(t);
        while (c.length) {
            c.shift()()
        }
        i.push.apply(i, u || []);
        return r()
    }

    function r() {
        var e;
        for (var t = 0; t < i.length; t++) {
            var r = i[t];
            var n = true;
            for (var u = 1; u < r.length; u++) {
                var l = r[u];
                if (a[l] !== 0) n = false
            }
            if (n) {
                i.splice(t--, 1);
                e = o(o.s = r[0])
            }
        }
        return e
    }
    var n = {};
    var a = {
        18: 0
    };
    var i = [];

    function o(t) {
        if (n[t]) {
            return n[t].exports
        }
        var r = n[t] = {
            i: t,
            l: false,
            exports: {}
        };
        e[t].call(r.exports, r, r.exports, o);
        r.l = true;
        return r.exports
    }
    o.m = e;
    o.c = n;
    o.d = function(e, t, r) {
        if (!o.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get: r
            })
        }
    };
    o.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            })
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    o.t = function(e, t) {
        if (t & 1) e = o(e);
        if (t & 8) return e;
        if (t & 4 && typeof e === "object" && e && e.__esModule) return e;
        var r = Object.create(null);
        o.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (t & 2 && typeof e != "string")
            for (var n in e) o.d(r, n, function(t) {
                return e[t]
            }.bind(null, n));
        return r
    };
    o.n = function(e) {
        var t = e && e.__esModule ? function r() {
            return e["default"]
        } : function n() {
            return e
        };
        o.d(t, "a", t);
        return t
    };
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    o.p = "//i.alicdn.com/ae-msite-ui/";
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var l = u.push.bind(u);
    u.push = t;
    u = u.slice();
    for (var s = 0; s < u.length; s++) t(u[s]);
    var d = l;
    i.push(["EiLs", 0]);
    return r()
})({
    "5jD+": function(e, t, r) {
        e.exports = {
            "msite-top-ele": "_2VDiB",
            "slider-wrap": "_3iSN8",
            "slider-content": "_2Uu_W",
            "dots-wrap": "pNj1J",
            "dots-item": "_3nwyX"
        }
    },
    "9GbT": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r("bS4n");
        var a = m(n);
        var i = r("6ato");
        var o = m(i);
        var u = r("2dj7");
        var l = m(u);
        var s = r("Xtzg");
        var d = m(s);
        var f = r("0dFU");
        var c = m(f);
        var p = r("cDcd");
        var v = m(p);
        var h = r("glLi");
        var w = m(h);
        var _ = r("F8dh");
        r("5jD+");

        function m(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var b = function(e) {
            (0, c.default)(t, e);

            function t(e) {
                (0, o.default)(this, t);
                var r = (0, d.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                r.state = {
                    index: 0,
                    startX: 0,
                    moveX: 0
                };
                r.handleTouchStart = r.handleTouchStart.bind(r);
                r.handleTouchMove = r.handleTouchMove.bind(r);
                r.handleTouchEnd = r.handleTouchEnd.bind(r);
                return r
            }(0, l.default)(t, [{
                key: "componentDidMount",
                value: function r() {
                    var e = this;
                    var t = this.props.autoPlay;
                    if (t) {
                        window.onload = function() {
                            e.play()
                        }
                    }
                }
            }, {
                key: "componentDidUpdate",
                value: function n(e, t) {
                    var r = this.props.width;
                    var n = e.width;
                    if (r !== n) {
                        var a = this.state.index;
                        var i = -r * a;
                        this.reset(i)
                    }
                }
            }, {
                key: "play",
                value: function i() {
                    var e = this;
                    var t = this.props,
                        r = t.autoplaySpeed,
                        n = t.speed,
                        a = t.list,
                        i = t.sliderChange,
                        o = t.afterChange;
                    this.timer = setInterval(function() {
                        var t = e.state.index;
                        var r = e.props.width;
                        t++;
                        var u = -r * t;
                        e.move(u);
                        if (t >= a.length) {
                            t = 0;
                            var l = -r * t;
                            setTimeout(function() {
                                e.reset(l)
                            }, n)
                        }
                        i(t);
                        o && o(t);
                        e.setState({
                            index: t
                        })
                    }, r)
                }
            }, {
                key: "move",
                value: function u(e) {
                    var t = this.refs.sliderContent;
                    t.style.transitionDuration = "500ms";
                    t.style.transform = "translateX(" + e + "px)"
                }
            }, {
                key: "reset",
                value: function s(e) {
                    var t = this.refs.sliderContent;
                    t.style.transitionDuration = "0ms";
                    t.style.transform = "translateX(" + e + "px)"
                }
            }, {
                key: "handleTouchStart",
                value: function f(e) {
                    this.setState({
                        startX: e.targetTouches[0].clientX
                    });
                    if (this.timer) {
                        clearInterval(this.timer)
                    }
                }
            }, {
                key: "handleTouchMove",
                value: function p(e) {
                    this.setState({
                        moveX: e.targetTouches[0].clientX - this.state.startX
                    })
                }
            }, {
                key: "handleTouchEnd",
                value: function h(e) {
                    var t = this.props,
                        r = t.width,
                        n = t.sliderChange,
                        a = t.list;
                    var i = this.state,
                        o = i.moveX,
                        u = i.index;
                    if (o > 0) {
                        u--
                    } else if (o < 0) {
                        u++
                    }
                    if (u >= 0 && u < a.length) {
                        var l = -r * u;
                        this.move(l);
                        n(u);
                        this.setState({
                            index: u
                        })
                    }
                    this.play()
                }
            }, {
                key: "renderImages",
                value: function m(e, t, r) {
                    return v.default.createElement(w.default, {
                        compressQuality: 70,
                        src: e,
                        style: (0, a.default)({}, t),
                        onLoad: function n() {
                            if (r !== 0) return;
                            var e = new CustomEvent("first-meaningful-paint");
                            document.dispatchEvent(e)
                        }
                    })
                }
            }, {
                key: "render",
                value: function b() {
                    var e = this;
                    var t = this.props,
                        r = t.width,
                        n = t.speed,
                        i = t.border;
                    var o = this.props.list;
                    var u = {
                        width: r * o.length + r,
                        transitionDuration: n + "ms"
                    };
                    var l = {
                        width: r
                    };
                    var s = {
                        width: r,
                        borderRadius: i + "px"
                    };
                    return v.default.createElement("ul", {
                        className: "_2Uu_W",
                        style: (0, a.default)({}, u),
                        ref: "sliderContent"
                    }, o.map(function(t, r) {
                        return v.default.createElement("li", {
                            className: "slider-item",
                            style: (0, a.default)({}, l),
                            key: r,
                            onTouchStart: e.handleTouchStart,
                            onTouchMove: e.handleTouchMove,
                            onTouchEnd: e.handleTouchEnd,
                            project_id: _.DAILY_PROJECT_ID,
                            exp_page: _.PAGE,
                            exp_page_area: "home_banner_" + r,
                            exp_type: "resource_share",
                            exp_condition: "material_id=" + (t.deliveryId || ""),
                            exp_product: t.expProduct,
                            exp_attribute: "promotion",
                            prod: t.expProduct,
                            exp_result_cnt: o.length,
                            ae_project_id: _.DAILY_PROJECT_ID,
                            ae_page_type: _.PAGE,
                            ae_page_area: "home_banner_" + r,
                            ae_button_type: "resource_share",
                            ae_object_type: "promotion",
                            ae_object_value: "promotion",
                            ae_click_behavior: "material_id=" + (t.deliveryId || "")
                        }, v.default.createElement("a", {
                            href: t.landingPageUrl
                        }, e.renderImages(t.bannerUrl, s, r)))
                    }), v.default.createElement("li", {
                        className: "slider-item",
                        style: (0, a.default)({}, l),
                        key: o.length,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        onTouchEnd: this.handleTouchEnd
                    }, v.default.createElement("a", {
                        href: o[0].landingPageUrl
                    }, this.renderImages(o[0].bannerUrl, s))))
                }
            }]);
            return t
        }(v.default.PureComponent);
        t.default = b
    },
    EiLs: function(e, t, r) {
        "use strict";
        var n = r("cDcd");
        var a = f(n);
        var i = r("31al");
        var o = f(i);
        var u = r("fSRZ");
        var l = f(u);
        r("5jD+");
        var s = r("IE/0");
        var d = f(s);

        function f(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        window["gop"]["slider"] = function(e, t, r) {
            if (window.Promise) {
                document.addEventListener("first-meaningful-paint", function() {
                    var e = function t() {
                        return new Promise(function(e) {
                            e(Date.now())
                        })
                    };
                    d.default.report({
                        cfpt: e()
                    })
                })
            }
            var n = e.filter(function(e) {
                return e.landingPageUrl && e.bannerUrl
            });
            (0, o.default)(a.default.createElement(l.default, {
                list: n
            }), t, r)
        }
    },
    "IE/0": function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = 0;
        var a = 30 * 1e3;

        function i(e) {
            if (typeof e != "number" || e > a || e < n) {
                return 0
            } else {
                return Math.round(e)
            }
        }

        function o(e) {
            var t = window.performance && window.performance.timing ? e - window.performance.timing.fetchStart : 0;
            return i(t)
        }

        function u() {
            return new Promise(function(e) {
                s.interactiveTimerId = setTimeout(function() {
                    e(o(Date.now()))
                }, 0)
            }).catch(function(e) {
                throw new Error(e)
            })
        }

        function l() {
            var e = 0;
            return new Promise(function(t) {
                if (typeof window.performance.getEntriesByType === "function") {
                    var r = performance.getEntriesByType("paint");
                    if (r) {
                        for (var n = 0, a = r.length; n < a; n++) {
                            var o = r[n];
                            if (o.name === "first-paint") {
                                e = o.startTime
                            }
                        }
                    }
                } else {
                    if (window.chrome && window.chrome.loadTimes) {
                        var u = window.chrome.loadTimes();
                        e = (u.firstPaintTime - u.startLoadTime) * 1e3
                    } else if (typeof window.performance.timing.msFirstPaint === "number") {
                        e = window.performance.timing.msFirstPaint - window.performance.timing.navigationStart
                    }
                }
                t(i(e))
            }).catch(function(e) {
                throw new Error(e)
            })
        }
        var s = {
            error: function d(e, t) {
                if (window.__bl && window.__bl.error) {
                    window.__bl.error(e, t)
                } else if (window.__bl) {
                    window.__bl.pipe = window.__bl.pipe || [];
                    window.__bl.pipe.push(["error", e, t])
                }
            },
            api: {
                success: function f(e, t, r, n) {
                    if (window.__bl && window.__bl.api) {
                        window.__bl.api(e, true, t, r, n)
                    } else if (window.__bl) {
                        window.__bl.pipe = window.__bl.pipe || [];
                        window.__bl.pipe.push(["api", e, true, t, r, n])
                    }
                },
                error: function c(e, t, r, n) {
                    if (window.__bl && window.__bl.api) {
                        window.__bl.api(e, false, t, r, n)
                    } else if (window.__bl) {
                        window.__bl.pipe = window.__bl.pipe || [];
                        window.__bl.pipe.push(["api", e, false, t, r, n])
                    }
                }
            },
            report: function p(e) {
                try {
                    if (!e) {
                        return
                    }
                    if (!("Promise" in window)) {
                        return
                    }
                    if (!window.performance) {
                        return
                    }
                    Object.keys(e).forEach(function(t) {
                        var r = e[t];
                        if (typeof r == "number") {
                            e[t] = i(r);
                            return
                        }
                        if (!r || !r.then) {
                            throw new Error("performance package: first argument of function reportPerformance need to be a promise or thenable!")
                        }
                        e[t] = r.then(function(e) {
                            return o(e)
                        })
                    });
                    var t = {
                        ctti: u(),
                        t1: l()
                    };
                    var r = Object.assign(t, e);
                    var n = [];
                    var a = [];
                    Object.keys(r).forEach(function(e) {
                        n.push(e);
                        a.push(r[e])
                    });
                    Promise.all(a).then(function(e) {
                        var t = {};
                        e.forEach(function(e, r) {
                            t[n[r]] = e
                        });
                        var r = ["performance", t];
                        if (window.__bl && window.__bl.performance) {
                            window.__bl.performance(t)
                        } else if (window.__bl) {
                            window.__bl.pipe = window.__bl.pipe || [];
                            window.__bl.pipe.push(r)
                        }
                    }).catch(function(e) {
                        console.error(e);
                        throw new Error(e)
                    })
                } catch (s) {
                    throw new Error(s)
                }
            },
            gc: function v() {
                clearTimeout(this.interactiveTimerId)
            }
        };
        t.default = s
    },
    Uh7I: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r("6ato");
        var a = p(n);
        var i = r("2dj7");
        var o = p(i);
        var u = r("Xtzg");
        var l = p(u);
        var s = r("0dFU");
        var d = p(s);
        var f = r("cDcd");
        var c = p(f);
        r("5jD+");

        function p(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var v = function(e) {
            (0, d.default)(t, e);

            function t() {
                (0, a.default)(this, t);
                return (0, l.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }(0, o.default)(t, [{
                key: "render",
                value: function r() {
                    var e = this.props,
                        t = e.list,
                        r = e.index;
                    return c.default.createElement("ul", {
                        className: "dots-wrap pNj1J"
                    }, t.map(function(e, t) {
                        return c.default.createElement("li", {
                            className: "_3nwyX",
                            key: t,
                            style: {
                                background: t === r ? "#E62E04" : "#FFF"
                            }
                        })
                    }))
                }
            }]);
            return t
        }(c.default.PureComponent);
        t.default = v
    },
    cDcd: function(e, t) {
        e.exports = window.React
    },
    fSRZ: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = r("bS4n");
        var a = y(n);
        var i = r("6ato");
        var o = y(i);
        var u = r("2dj7");
        var l = y(u);
        var s = r("Xtzg");
        var d = y(s);
        var f = r("0dFU");
        var c = y(f);
        var p, v;
        var h = r("cDcd");
        var w = y(h);
        var _ = r("9GbT");
        var m = y(_);
        var b = r("Uh7I");
        var g = y(b);
        r("5jD+");

        function y(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        var E = (v = p = function(e) {
            (0, c.default)(t, e);

            function t(e) {
                (0, o.default)(this, t);
                var r = (0, d.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                var n = r.props,
                    a = n.marginLeft,
                    i = n.marginRight;
                r.state = {
                    width: window.innerWidth - a - i,
                    index: 0
                };
                r.sliderChange = r.sliderChange.bind(r);
                return r
            }(0, l.default)(t, [{
                key: "windowResize",
                value: function r() {
                    var e = this;
                    window.onresize = function() {
                        var t = e.props,
                            r = t.marginLeft,
                            n = t.marginRight;
                        e.setState({
                            width: window.innerWidth - r - n
                        })
                    }
                }
            }, {
                key: "sliderChange",
                value: function n(e) {
                    this.setState({
                        index: e
                    })
                }
            }, {
                key: "componentDidMount",
                value: function i() {
                    this.windowResize()
                }
            }, {
                key: "render",
                value: function u() {
                    var e = this.props,
                        t = e.marginLeft,
                        r = e.marginRight,
                        n = e.list,
                        i = e.dots;
                    var o = this.state,
                        u = o.width,
                        l = o.index;
                    var s = this.sliderChange;
                    if (!n.length) {
                        return null
                    }
                    var d = {
                        marginLeft: t,
                        marginRight: r,
                        width: u
                    };
                    return w.default.createElement(w.default.Fragment, null, w.default.createElement("div", {
                        className: "msite-top-ele _2VDiB"
                    }), w.default.createElement("div", {
                        className: "slider-wrap _3iSN8",
                        style: (0, a.default)({}, d)
                    }, w.default.createElement(m.default, Object.assign({
                        width: u,
                        sliderChange: s
                    }, this.props)), i ? w.default.createElement(g.default, Object.assign({
                        index: l
                    }, this.props)) : null))
                }
            }]);
            return t
        }(w.default.PureComponent), p.defaultProps = {
            marginLeft: 12,
            marginRight: 12,
            border: 8,
            list: [],
            dots: true,
            autoPlay: true,
            autoplaySpeed: 3e3,
            speed: 500,
            afterChange: null
        }, v);
        t.default = E
    },
    faye: function(e, t) {
        e.exports = window.ReactDOM
    }
});