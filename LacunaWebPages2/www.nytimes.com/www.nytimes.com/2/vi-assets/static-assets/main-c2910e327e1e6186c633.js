(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "+4HN": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {}));
            var a = n("pVnL"),
                o = n.n(a),
                i = n("QILm"),
                s = n.n(i),
                r = (n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("q1tI")),
                l = n.n(r),
                c = (n("17x9"), n("CxY0")),
                d = n.n(c),
                u = function(e) {},
                p = function(e) {};
            p.displayName = "ExitLink", p.defaultProps = {
                returnUrl: void 0,
                children: null
            }, t.b = p
        },
        "+Swi": function(e, t, n) {
            "use strict";
            e.exports = {
                validator: function() {}
            }
        },
        "+igH": function(e, t, n) {
            "use strict";
            n.d(t, "h", (function() {})), n.d(t, "e", (function() {})), n.d(t, "c", (function() {})), n.d(t, "b", (function() {})), n.d(t, "i", (function() {})), n.d(t, "d", (function() {})), n.d(t, "g", (function() {})), n.d(t, "f", (function() {})), n.d(t, "a", (function() {}));
            n("SMB2");
            var a = n("UmXO"),
                o = n("wXC7"),
                i = n.n(o),
                s = Object(a.css)("white-space:nowrap;"),
                r = Object(a.css)("color:", i.a.color.gray10, ";font-size:", i.a.font.size(20), ";font-weight:", i.a.font.weight.bold, ";line-height:", i.a.font.size(22), ";margin-top:20px;text-align:left;", i.a.breakpoint.medium, "{font-size:", i.a.font.size(26), ";line-height:", i.a.font.size(30), ";margin-right:0;padding:0 50px;text-align:center;}"),
                l = Object(a.css)("width:100%;strong{font-weight:", i.a.font.weight.bold, ";}@media print{display:none;}"),
                c = (i.a.color.gray10, i.a.font.size(20), i.a.font.size(22), i.a.breakpoint.medium, Object(a.css)("position:fixed;overflow:hidden;height:100%;width:100%;")),
                d = Object(a.css)("position:absolute;top:40px;background:linear-gradient(transparent,", i.a.color.black, ");height:100%;width:100%;pointer-events:none;"),
                u = Object(a.css)("display:none;font-family:", i.a.font.franklinBase, ";font-weight:", i.a.font.weight.medium, ";font-size:22px;text-align:center;@media print{display:block;}"),
                p = Object(a.css)("font-family:", i.a.font.franklinBase, ";font-weight:", i.a.font.weight.bold, ";font-size:22px;text-align:center;"),
                m = Object(a.css)("font-size:", i.a.font.size(15), ";line-height:", i.a.font.size(19), ";margin-right:auto;text-align:left;a{display:inline-block;font-weight:", i.a.font.weight.bold, ";}", i.a.breakpoint.medium, "{margin-right:0;text-align:center;}@media print{display:none;}"),
                h = Object(a.css)("border-bottom:1px solid ", i.a.color.black, ";height:1px;margin:16px auto 0 0;width:50px;", i.a.breakpoint.medium, "{margin-right:0;width:100px;}@media print{display:none;}")
        },
        "+mLS": function(e, t, n) {
            "use strict";
            var a = {
                captureException: function(e, t) {
                    window.nyt_errors && (window.nyt_errors.ravenInstalled ? window.Raven.captureException(e, t) : window.nyt_errors.list.push({
                        err: e,
                        data: t
                    }))
                },
                setTagsContext: function(e) {}
            };
            t.a = a
        },
        "/jSo": function(e, t, n) {
            "use strict";
            var a = n("ABJ/"),
                o = function() {
                    var e, t = window.userXhrObject,
                        n = JSON.parse(t.responseText).data;
                    return (null === (e = n.user) || void 0 === e ? void 0 : e.subscriptionDetails) ? n.user.subscriptionDetails.map((function(e) {})) : []
                },
                i = new(n.n(a).a)((function(e) {
                    var t = window.userXhrObject;
                    if (4 === (null == t ? void 0 : t.readyState)) e.next(o()), e.complete();
                    else {
                        var n = {
                            once: !0
                        };
                        t.addEventListener("timeout", e.error, n), t.addEventListener("error", e.error, n), t.addEventListener("load", (function() {}), n)
                    }
                }));
            t.a = i
        },
        "/qcJ": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.GPT_DIV_ID_KEY = t.GPT_QUERY_STRING_KEY = t.GPT_POSITION_KEY = t.GPT_LIB_URL = void 0;
            t.GPT_LIB_URL = "//securepubads.g.doubleclick.net/tag/js/gpt.js";
            t.GPT_POSITION_KEY = "pos";
            t.GPT_QUERY_STRING_KEY = "adv";
            t.GPT_DIV_ID_KEY = "div"
        },
        0: function(e, t, n) {
            n("Br2v"), e.exports = n("O14P")
        },
        "00VA": function(e, t) {
            e.exports = "/vi-assets/static-assets/"
        },
        "06b3": function(e, t, n) {
            "use strict";
            var a = n("iVi/"),
                o = n.n(a),
                i = n("BezJ");

            function s(e) {}
            var r = !1,
                l = {};
            t.a = {
                setRawCookie: i.setRawCookie,
                load: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    n.decode = n.decode || s;
                    var a = r ? l : o.a.parse(document.cookie, n),
                        i = a && a[e];
                    if (void 0 === t && (t = !i || "{" !== i[0] && "[" !== i[0]), !t) try {
                        i = JSON.parse(i)
                    } catch (e) {}
                    return i
                },
                select: i.select,
                save: function(e, t, n) {},
                remove: i.remove,
                plugToRequest: i.plugToRequest
            }
        },
        "0O4q": function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {})), n.d(t, "a", (function() {
                return s
            }));
            var a = n("ABJ/"),
                o = function(e) {
                    if (!e) throw new Error("xhr is required");
                    if (!e.responseText) throw new Error("xhr.responseText is required");
                    return function(e) {}(JSON.parse(e.responseText).data)
                },
                i = function() {},
                s = new(n.n(a).a)((function(e) {
                    if (window) {
                        var t = window.userXhrObject;
                        if (4 === (null == t ? void 0 : t.readyState)) try {
                            return e.next(o(t)), void e.complete()
                        } catch (t) {
                            return void e.error(t)
                        }
                        var n = {
                            once: !0
                        };
                        t.addEventListener("timeout", e.error, n), t.addEventListener("error", e.error, n), t.addEventListener("load", (function() {}), n)
                    } else e.error("Userinfo cannot be accessed on the server!")
                }))
        },
        "0VxJ": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "b", (function() {})), n.d(t, "d", (function() {})), n.d(t, "c", (function() {}));
            n("SRfc"), n("VRzm"), n("Btvt");
            var a = "go_to_optimizely",
                o = function(e) {},
                i = function(e) {},
                s = function(e) {},
                r = function(e, t) {}
        },
        "0lSQ": function(e, t, n) {
            "use strict";
            var a = n("pVnL"),
                o = n.n(a),
                i = n("q1tI"),
                s = n.n(i),
                r = (n("17x9"), n("YqNV")),
                l = function(e) {};
            l.displayName = "SubscribeLink", l.defaultProps = {
                breakpoint: void 0,
                pageCount: null,
                madData: null
            }, t.a = l
        },
        1: function(e, t) {},
        "19Jd": function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n("gcR/"),
                    o = n.n(a),
                    i = (n("q1tI"), n("17x9"), n("UmXO")),
                    s = n("+4HN"),
                    r = n("WXMI"),
                    l = n("GB3f"),
                    c = n("xEGZ"),
                    d = n("nMzm"),
                    u = o()(c.a, {
                        "data-testid": "login-button"
                    }, void 0, r.a),
                    p = function(t) {};
                p.displayName = "LoginButton", p.defaultProps = {
                    tracking: {},
                    userType: "anon"
                }, t.a = p
            }).call(this, n("yLpj"))
        },
        "1DxJ": function(e, t, n) {
            "use strict";
            var a = n("284h"),
                o = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n("J4zp")),
                s = o(n("cDf5")),
                r = o(n("MVZn")),
                l = o(n("lwsE")),
                c = o(n("W8MJ")),
                d = o(n("a1gu")),
                u = o(n("Nsbk")),
                p = o(n("7W2i")),
                m = o(n("PJYZ")),
                h = o(n("lSNA")),
                f = a(n("q1tI")),
                v = o(n("17x9")),
                g = o(n("Sa5I")),
                b = o(n("YxHs")),
                y = o(n("D9T7")),
                w = o(n("98MD")),
                k = a(n("7qeW")),
                C = o(n("qIMw")),
                B = n("cNGg"),
                E = g.default.ManagerMethods,
                T = g.default.setAdRequirements,
                A = g.default.setAdUnitPath,
                x = g.default.dispatch,
                O = g.default.setSlotTargeting,
                S = g.default.refresh,
                N = function(e) {
                    function t(e) {}
                    return (0, p.default)(t, e), (0, c.default)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component);
            N.displayName = "WithAdsComponent", N.propTypes = {
                DecoratedComponent: v.default.oneOfType([v.default.element, v.default.func]),
                config: v.default.objectOf(v.default.any),
                passThruProps: v.default.objectOf(v.default.any)
            }, N.defaultProps = {
                DecoratedComponent: function() {},
                config: {},
                passThruProps: {}
            };
            var D = N;
            t.default = D
        },
        "28Yi": function(e, t, n) {
            "use strict";
            n("hhXQ"), n("rGqo"), n("yt8O"), n("RW0V"), n("OG14");
            var a = n("lwsE"),
                o = n.n(a),
                i = n("W8MJ"),
                s = n.n(i),
                r = (n("VRzm"), n("Btvt"), n("cr+I")),
                l = n.n(r),
                c = n("M4W2"),
                d = n.n(c),
                u = n("RIIa"),
                p = n("wYzE"),
                m = n("971y"),
                h = n("osgS"),
                f = n("qs2k"),
                v = n("0O4q"),
                g = n("/jSo"),
                b = n("UQ7B"),
                y = n("VQmZ"),
                w = new(function() {
                    function e() {
                        (o()(this, e), this.assets = {}, this.projectID = 9270471820, this.sources = {
                            meter: {
                                complete: !1,
                                data: null
                            },
                            user: {
                                complete: !1,
                                data: null
                            },
                            cigIPseg: {
                                complete: !1,
                                data: null
                            },
                            isPrivate: {
                                complete: !1,
                                data: null
                            },
                            subscriptions: {
                                complete: !1,
                                data: null
                            },
                            customTarget: {
                                complete: !1,
                                data: null
                            },
                            inGrace: {
                                complete: !1,
                                data: null
                            },
                            geolocation: {
                                complete: !1,
                                data: null
                            }
                        }, this.allowed = !0, this.loaded = !1, "undefined" !== window.location) && ("0" === l.a.parse(window.location.search)["metered-assets"] && (this.allowed = !1));
                        this.allowed && (window.optimizely = window.optimizely || [], window.NYToptly = window.NYToptly || {}, this.loadOptimizely())
                    }
                    return s()(e, [{
                        key: "loadOptimizely",
                        value: function() {
                            var e = this;
                            Object(f.g)(f.e), d()("https://cdn.optimizely.com/public/3013110282/s/vi_article.js").then((function() {
                                Object(f.h)(f.e)
                            }), (function() {})), Object(f.g)(f.a), u.a.getData().then((function(t) {})).catch((function(t) {
                                e.setData("cigIPseg", {
                                    error: t
                                })
                            })), v.a.subscribe((function(t) {}), (function(e) {
                                return console.error("Failed to provide user info to Optimizely", e)
                            })), g.a.subscribe((function(t) {}), (function(e) {
                                return console.error("Failed to provide subscription details to Optimizely", e)
                            })), b.a.subscribe((function(t) {
                                return e.setData("geolocation", t)
                            }), (function(e) {})), Object(m.a)((function() {}), (function() {
                                e.setData("isPrivate", !1)
                            }))
                        }
                    }, {
                        key: "register",
                        value: function(e) {}
                    }, {
                        key: "unregister",
                        value: function(e) {}
                    }, {
                        key: "setData",
                        value: function(e, t) {
                            this.allowed && (void 0 !== this.sources[e] ? this.sources[e].complete || (this.sources[e].complete = !0, this.sources[e].data = t, this.activate()) : console.warn("Optimizely - Unexpected data key: ", e))
                        }
                    }, {
                        key: "isDataReady",
                        value: function(e) {}
                    }, {
                        key: "activate",
                        value: function() {
                            var e = this;
                            Object.keys(this.assets).filter((function(t) {})).forEach((function(t) {}))
                        }
                    }]), e
                }());
            t.a = w
        },
        "2el9": function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("q1tI"), n("UmXO")),
                s = (n("17x9"), n("+4HN")),
                r = n("xEGZ"),
                l = n("WXMI"),
                c = o()(r.a, {
                    "data-testid": "subscribe-button"
                }, void 0, l.f),
                d = function(e) {};
            d.displayName = "SubscribeButtonFallback", d.defaultProps = {
                className: ""
            }, t.a = d
        },
        "354x": function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("q1tI"),
                s = n.n(i),
                r = n("rI8Z"),
                l = (n("17x9"), n("+4HN")),
                c = n("UmXO"),
                d = (n("SMB2"), n("wXC7")),
                u = n.n(d),
                p = Object(c.css)("border-radius:3px;cursor:pointer;font-family:", u.a.font.franklinBase, ";font-weight:", u.a.font.weight.bold, ";font-style:normal;font-size:15px;line-height:20px;background-color:", u.a.color.gray20, ";color:", u.a.color.white, ";padding:10px;width:100%;"),
                m = Object(c.css)("display:block;margin:50px auto 0 auto;width:100%;", u.a.breakpoint.medium, "{width:200px;}"),
                h = function(e) {};
            h.displayName = "GatewayCTA", h.defaultProps = {
                children: null,
                customClass: null,
                returnUrl: void 0,
                onClick: null
            };
            var f = h,
                v = n("+igH"),
                g = o()("p", {}, void 0, "Help Times journalists uncover the next big story.");
            t.a = function() {}
        },
        "369f": function(e, t, n) {
            "use strict";
            var a = n("lwsE"),
                o = n.n(a),
                i = n("W8MJ"),
                s = n.n(i),
                r = n("a1gu"),
                l = n.n(r),
                c = n("Nsbk"),
                d = n.n(c),
                u = n("7W2i"),
                p = n.n(u),
                m = n("q1tI"),
                h = n.n(m),
                f = (n("17x9"), n("mczz")),
                v = function(e) {
                    function t(e) {}
                    return p()(t, e), s()(t, [{
                        key: "setupIntersectionObserver",
                        value: function() {}
                    }, {
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(m.Component);
            v.displayName = "LazyLoader", v.defaultProps = {
                offset: 0,
                onLoad: function() {},
                isLazy: !0
            }, t.a = v
        },
        "4Qss": function(e, t, n) {
            "use strict";
            var a = n("UmXO"),
                o = n("R+TL"),
                i = Object(a.css)("position:relative;height:100%;max-width:", o.a.breakpoint.mediaMaxWidth, "px;margin:auto;");
            t.a = i
        },
        "5TEd": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                black: "#000",
                blue10: "#004276",
                blue15: "#0f73be",
                blue17: "#1564a0",
                blue20: "#326891",
                blue30: "#6288a5",
                blue40: "#879cb4",
                blue45: "#b3c4ca",
                blue50: "#f0f8fc",
                blue55: "#f1f9ff",
                gray10: "#121212",
                gray20: "#333",
                gray25: "#444",
                gray27: "#555",
                gray30: "#666",
                gray33: "#787878",
                gray35: "#888",
                gray40: "#999",
                gray45: "#b3b3b3",
                gray50: "#ccc",
                gray54: "#d3d3d3",
                gray55: "#dcdcdc",
                gray60: "#e2e2e2",
                gray70: "#ebebeb",
                gray75: "#eee",
                gray80: "#f3f3f3",
                gray90: "#f7f7f7",
                gray100: "#f8f8f8",
                red10: "#a81817",
                red15: "#c52b03",
                red20: "#d31e25",
                red50: "#fcf6f6",
                red15Dark: "#fb3504",
                yellow10: "#fcb036",
                yellow15: "#ffb932",
                yellow20: "#f8f8d4",
                yellow30: "#fbfbea",
                white: "#fff",
                green50: "#33c065",
                newsprint10: "#bab8b3",
                newsprint20: "#e9ebe4",
                newsprint25: "#f4f5f2",
                newsprint30: "#f7f7f5",
                textColor: "#333",
                sponsoredTextColor: "#444",
                sponsoredTextColorLight: "#888",
                linkColor: "#326891",
                linkVisitedColor: "#326891",
                requiredYellow: "#9a8958",
                insiderYellow: "#fed464",
                opinionGray: "#a19d9d",
                opinionBlue: "#0bb4f7",
                reviewCritPickGold: "#c5a257",
                liveColor: "#ff3219",
                developingColor: "#f48751",
                developingOrange: "#eb6e00",
                breakingColor: "#d0021b",
                stocksRedColor: "#a61b1e",
                stocksGreenColor: "#3f893b",
                stocksIconColor: "#231f20",
                cookingPrimaryColor: "#e33d26",
                cookingHoverColor: "#be1e08"
            };
            t.default = a
        },
        "5TEs": function(e, t, n) {
            "use strict";
            n("f3/d");
            var a = n("gcR/"),
                o = n.n(a),
                i = n("pVnL"),
                s = n.n(i),
                r = n("q1tI"),
                l = n.n(r),
                c = n("Vhmf");
            t.a = function(e) {
                var t = function(t) {},
                    n = e.displayName || e.name || "Component";
                return t.displayName = "withOverlayContext(".concat(n, ")"), t
            }
        },
        "5pww": function(e, t, n) {
            "use strict";
            var a = function() {};
            t.a = {
                getItem: function(e) {},
                setItem: function(e, t) {},
                removeItem: function(e) {}
            }
        },
        "5rIp": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "b", (function() {}));
            n("SMB2");
            var a = n("UmXO"),
                o = n("wXC7"),
                i = n.n(o),
                s = Object(a.css)("color:", i.a.color.gray30, ";font-family:", i.a.font.sansBase, ";font-size:1.25rem;line-height:2rem;margin:0 auto 15px;max-width:", i.a.breakpoint.maxMobileContentWidth, "px;padding:100px 0;width:", i.a.breakpoint.mobileFullWidth, ";", i.a.breakpoint.extraLarge, "{width:", i.a.breakpoint.textBodyWidthExtralarge, "px;max-width:", i.a.breakpoint.textBodyWidthExtralarge, "px;}"),
                r = Object(a.css)("color:", i.a.color.black, ";font-family:", i.a.font.franklinBase, ";font-size:2rem;font-weight:", i.a.font.weight.bold, ";margin-bottom:15px;")
        },
        "6Hs+": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PREBID_URL = t.AMZN_SCRIPT = void 0;
            t.AMZN_SCRIPT = '!function(a9,a,p,s,t,A,g){if(a[a9])return;\nfunction q(c,r){a[a9]._Q.push([c,r])}a[a9]={\n    init:function(){q("i",arguments)},\n    fetchBids:function(){q("f",arguments)},\n    setDisplayBids:function(){},\n    targetingKeys:function(){return[]},_Q:[]};\n    A=p.createElement(s);\n    A.async=!0;\n    A.src=t;\n    g=p.getElementsByTagName(s)[0];\n    g.parentNode.insertBefore(A,g)}\n("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");\napstag.init({\npubID: \'3030\',\nadServer: \'googletag\'\n});';
            t.PREBID_URL = "//acdn.adnxs.com/prebid/not-for-prod/1/prebid.js"
        },
        "7aZh": function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "isInTest", (function() {})), n.d(t, "notInTest", (function() {})), n.d(t, "isInControl", (function() {})), n.d(t, "isInVariant1", (function() {})), n.d(t, "isInVariant2", (function() {})), n.d(t, "isInVariant3", (function() {})), n.d(t, "isInVariant4", (function() {})), n.d(t, "isInVariant5", (function() {})), n.d(t, "isInVariant6", (function() {})), n.d(t, "isInAnonDiffVariant", (function() {})), n.d(t, "showAnonStoryPage", (function() {})), n.d(t, "shouldReportAnonExposure", (function() {})), n.d(t, "showNameplate", (function() {})), n.d(t, "showHeaderIntro", (function() {})), n.d(t, "showAnonRecircBottom", (function() {})), n.d(t, "showAnonTrunc", (function() {})), n.d(t, "getCSSSelectors", (function() {
                return C
            }));
            var a = n("Lkij"),
                o = n("HUmG"),
                i = n("idk4"),
                s = function() {},
                r = function() {},
                l = function() {},
                c = function() {},
                d = function() {},
                u = function() {},
                p = function() {},
                m = function() {},
                h = function() {},
                f = function() {},
                v = function() {},
                g = function() {},
                b = function() {},
                y = function() {},
                w = function() {},
                k = function() {},
                C = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["ALL"];
                    return e.map((function(e) {
                        return i.CSS_SELECTORS[e]
                    })).filter((function(e) {
                        return e
                    })).join(", ")
                }
        },
        "7qeW": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getTimeoutByVariant = t.default = void 0;
            var a = function() {};
            t.default = a;
            var o = {
                1: 1e3,
                2: 3e3,
                3: 5e3
            };
            t.getTimeoutByVariant = function(e) {}
        },
        "8N5i": function(e, t, n) {
            const {
                preloadReady: a
            } = n("G/eM");
            t.preloadDynamicImports = a
        },
        "8bRw": function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("bHtr"), n("q1tI"), function(e) {});
            i.displayName = "SectionsIcon", t.a = i
        },
        "971y": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {}));
            n("Oyvg"), n("VRzm"), n("a1Th"), n("Btvt");
            var a, o, i = Math.pow(2, 20),
                s = function() {},
                r = function() {},
                l = function(e, t) {
                    a = e || function() {}, o = t || function() {}, Promise.resolve().then((function() {
                        if (navigator.storage && navigator.storage.estimate) return navigator.storage.estimate()
                    })).then((function(e) {
                        return !!(e && e.quota && e.quota <= 120 * i)
                    })).catch((function() {})).then((function(e) {
                        return e ? a() : function() {
                            if (window.webkitRequestFileSystem) return window.webkitRequestFileSystem(window.TEMPORARY, 1, o, a), !0
                        }() || s() || r() || function() {}() || o()
                    }))
                },
                c = function(e, t) {}
        },
        "98MD": function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("Sa5I")),
                i = o.default.setTargeting,
                s = o.default.setSlotTargeting,
                r = o.default.dispatch,
                l = o.default.ManagerMethods,
                c = l.removeAdPlacement,
                d = l.destroyAdSlots,
                u = l.displayAd,
                p = l.placeDynamicAds,
                m = {
                    getSlot: l.getSlot,
                    setSlotTargeting: s,
                    setTargeting: i,
                    displayAd: u,
                    dispatch: r,
                    destroyAdSlots: d,
                    placeDynamicAds: p,
                    removeAdPlacement: c,
                    AdSlotReady: !0
                };
            t.default = m
        },
        "9rMz": function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r;
            var o = a(n("q1tI")),
                i = (a(n("17x9")), n("UmXO")),
                s = a(n("wXC7"));

            function r(e) {}
            r.displayName = "MagazineLogo", r.defaultProps = {
                className: "",
                fill: s.default.color.black
            }
        },
        A6NT: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e, t, n, a) {};
            t.default = a
        },
        B0Ek: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("lSNA"),
                s = n.n(i),
                r = (n("Z2Ku"), n("L9s1"), n("lwsE")),
                l = n.n(r),
                c = n("W8MJ"),
                d = n.n(c),
                u = n("a1gu"),
                p = n.n(u),
                m = n("Nsbk"),
                h = n.n(m),
                f = n("7W2i"),
                v = n.n(f),
                g = n("q1tI"),
                b = n.n(g),
                y = n("UmXO"),
                w = n("17x9"),
                k = n.n(w),
                C = n("41jq"),
                B = n("X6oL"),
                E = n.n(B),
                T = n("hNYz"),
                A = n("OB6K"),
                x = n.n(A),
                O = n("ZKN5"),
                S = n("Vc97"),
                N = n("7aZh"),
                D = n("9/5/"),
                _ = n.n(D),
                I = n("u1H9"),
                F = (n("SMB2"), n("3NoI")),
                M = n.n(F),
                P = n("wXC7"),
                L = n.n(P),
                j = M()("div", {
                    target: "eaxe0e00"
                })("display:none;", L.a.breakpoint.mediumLarge, "{display:block;position:absolute;left:105px;line-height:19px;top:", (function(e) {}), "px;}"),
                R = Object(y.css)("font-size:14.25px;font-family:", L.a.font.franklinBase, ";font-weight:", L.a.font.weight.bold, ";text-transform:uppercase;letter-spacing:0.7px;line-height:19px;&:hover{text-decoration:underline;}"),
                z = function(e) {};
            z.displayName = "SectionLabel", z.defaultProps = {
                theme: {
                    subsectionDisplayName: "",
                    mastheadLabelHidden: !0,
                    sectionDisplayName: "",
                    subsectionUrl: "",
                    sectionUrl: ""
                },
                linkClassName: "",
                containerClassName: ""
            };
            var V = Object(C.withTheme)(z),
                U = n("FyX9"),
                J = n("+4HN"),
                H = n("WXMI"),
                q = n("mrGk"),
                G = function() {},
                W = o()(J.b, {
                    className: q.f,
                    url: H.g
                }, void 0, H.f),
                Y = function() {};
            Y.displayName = "SubscribeLinkFallback";
            var X = o()(J.b, {
                    className: q.h,
                    url: H.b
                }, void 0, H.a),
                K = function() {};
            K.displayName = "LoginLinkFallback";
            var Q = o()(J.b, {
                    className: q.i,
                    url: H.i
                }, void 0, H.h),
                Z = function() {};
            Z.displayName = "TodaysPaperLink";
            var $ = o()(q.c, {}, void 0, o()(Z, {}));

            function ee(e) {}
            ee.displayName = "SubMasthead";
            var te = ee,
                ne = n("i9j7"),
                ae = n.n(ne),
                oe = n("3Rk2"),
                ie = n.n(oe),
                se = Object(y.css)("display:none;", L.a.breakpoint.mediumLarge, "{display:block;margin-top:-15px;}"),
                re = Object(y.css)(L.a.breakpoint.mediumLarge, "{text-align:center;}"),
                le = ie()([L.a.breakpoint.medium, L.a.breakpoint.mediumLarge])({
                    width: ["189px", "225px", "430px"],
                    height: ["26px", "31px", "58px"],
                    margin: ["4px auto 0", "3px auto 0", "6px auto"]
                }),
                ce = Object(y.css)("display:block;", le, ";"),
                de = n("GB3f"),
                ue = o()(ae.a, {}),
                pe = function(e) {};
            pe.displayName = "DesktopLogoNav", pe.defaultProps = {
                theme: void 0
            };
            var me = Object(C.withTheme)(pe),
                he = n("If/s"),
                fe = (n("f3/d"), n("KeRS")),
                ve = n.n(fe),
                ge = n("8bRw"),
                be = (n("bHtr"), o()("defs", {})),
                ye = o()("path", {
                    d: "M43.6284633,34.8996508 C41.83393,39.6379642 38.53153,43.2989842 33.7932167,45.2371375 L33.7932167,34.8996508 L39.46463,29.8027175 L33.7932167,24.7777375 L33.7932167,17.6709842 C38.9621033,17.3120775 42.5514567,13.5074375 42.5514567,8.84136417 C42.5514567,2.73966417 36.7369967,0.5859375 33.4345967,0.5859375 C32.71707,0.5859375 31.9270167,0.5859375 30.7789167,0.872890833 L30.7789167,1.16013083 C31.20949,1.16013083 31.8550633,1.08846417 32.0709233,1.08846417 C34.36827,1.08846417 36.0911367,2.16518417 36.0911367,4.2469575 C36.0911367,5.82620417 34.7988433,7.40545083 32.5017833,7.40545083 C26.83037,7.40545083 20.15419,2.81133083 12.9038167,2.81133083 C6.44292333,2.81133083 1.99242333,7.6207375 1.99242333,12.5023842 C1.99242333,17.3120775 4.79201,18.8913242 7.73521667,19.9680442 L7.80717,19.6808042 C6.87378333,19.1066108 6.22763667,18.1018442 6.22763667,16.5223108 C6.22763667,14.3688708 8.23774333,12.5743375 10.7503767,12.5743375 C16.8520767,12.5743375 26.68675,17.6709842 32.7887367,17.6709842 L33.36293,17.6709842 L33.36293,24.8496908 L27.6918033,29.8027175 L33.36293,34.8996508 L33.36293,45.3804708 C30.9942033,46.2416175 28.5532367,46.6010975 26.0406033,46.6010975 C16.5648367,46.6010975 10.53509,40.8577308 10.53509,31.3102975 C10.53509,29.0135242 10.8220433,26.7878442 11.46819,24.6341175 L16.20593,22.5526308 L16.20593,43.6576042 L25.8253167,39.4226775 L25.8253167,17.8146042 L11.6834767,24.1315908 C13.1191033,19.9680442 16.06231,16.9531708 19.5799967,15.2303042 L19.50833,15.0150175 C10.0322767,17.0967908 0.84375,24.2754975 0.84375,35.0432708 C0.84375,47.4622442 11.32457,56.0768642 23.5285433,56.0768642 C36.4497567,56.0768642 43.7720833,47.4622442 43.84375,34.8996508 L43.6284633,34.8996508 Z"
                }),
                we = [{
                    url: "https://www.nytimes.com/section/world",
                    name: "World"
                }, {
                    url: "https://www.nytimes.com/section/us",
                    name: "U.S."
                }, {
                    url: "https://www.nytimes.com/section/politics",
                    name: "Politics"
                }, {
                    url: "https://www.nytimes.com/section/nyregion",
                    name: "N.Y."
                }, {
                    url: "https://www.nytimes.com/section/business",
                    name: "Business"
                }, {
                    url: "https://www.nytimes.com/section/opinion",
                    name: "Opinion"
                }, {
                    url: "https://www.nytimes.com/section/technology",
                    name: "Tech"
                }, {
                    url: "https://www.nytimes.com/section/science",
                    name: "Science"
                }, {
                    url: "https://www.nytimes.com/section/health",
                    name: "Health"
                }, {
                    url: "https://www.nytimes.com/section/sports",
                    name: "Sports"
                }, {
                    url: "https://www.nytimes.com/section/arts",
                    name: "Arts"
                }, {
                    url: "https://www.nytimes.com/section/books",
                    name: "Books"
                }, {
                    url: "https://www.nytimes.com/section/style",
                    name: "Style"
                }, {
                    url: "https://www.nytimes.com/section/food",
                    name: "Food"
                }, {
                    url: "https://www.nytimes.com/section/travel",
                    name: "Travel"
                }, {
                    url: "https://www.nytimes.com/section/magazine",
                    name: "Magazine"
                }, {
                    url: "https://www.nytimes.com/section/t-magazine",
                    name: "T Magazine"
                }, {
                    url: "https://www.nytimes.com/section/realestate",
                    name: "Real Estate"
                }, {
                    url: "https://www.nytimes.com/video",
                    name: "Video"
                }],
                ke = Object(y.css)("align-items:center;display:flex;justify-content:space-between;padding:5px 0 4px;"),
                Ce = Object(y.css)("display:inline-block;font-family:", L.a.font.franklinBase, ";font-size:", L.a.font.size(12), ";line-height:", L.a.font.size(16), ";font-weight:", L.a.font.weight.medium, ";"),
                Be = Object(y.css)("border-radius:3px;display:inline-block;padding:4px;transition:background 0.6s ease;vertical-align:middle;&:hover,&:focus{background-color:", L.a.color.gray90, ";}"),
                Ee = Object(y.css)("width:14px;height:17px;margin:1px 0 0;padding:0 4px;"),
                Te = Object(y.css)("width:16px;height:16px;padding:0 4px;background-color:", L.a.color.white, ";"),
                Ae = Object(y.css)("background-color:", L.a.color.white, ";"),
                xe = o()("li", {
                    "data-testid": "mini-nav-home",
                    className: Ce
                }, "homeButton", o()("span", {
                    "aria-label": "Skip to Site Index"
                }, void 0, o()(ve.a, {
                    to: "/"
                }, void 0, o()((function(e) {}), {
                    className: Ee
                })))),
                Oe = o()(ge.a, {
                    className: Te
                }),
                Se = function(e) {};
            Se.displayName = "MiniNav", Se.defaultProps = {
                setButtonRef: function() {},
                onClick: function() {},
                showButtons: !1
            };
            var Ne = Se,
                De = n("9rMz"),
                _e = n.n(De),
                Ie = n("dO+a"),
                Fe = n.n(Ie),
                Me = n("K0fD"),
                Pe = Object(y.css)("@media (max-width:599px){", Me.e.getCSSSelectors(["V1", "V2", "V3", "V4", "V5", "V6"]), "{margin-left:0;}}"),
                Le = Object(y.css)("@media (max-width:599px){", Me.e.getCSSSelectors(["V1", "V2", "V3", "V4", "V5", "V6"]), "{margin-left:auto;}}"),
                je = Object(y.css)("display:block;", L.a.breakpoint.mediumLarge, "{display:none;}"),
                Re = M()("div", {
                    target: "e1huz5gh0"
                })("text-align:center;", L.a.breakpoint.medium, "{padding-top:0;}", L.a.breakpoint.mediumLarge, "{", (function(e) {}), ";", (function(e) {}), "}@media print{a[href]::after{content:'';}svg{fill:black;}}"),
                ze = ie()([L.a.breakpoint.medium, L.a.breakpoint.mediumLarge]),
                Ve = function(e) {},
                Ue = ze({
                    width: ["189px", "225px", "195px"],
                    height: ["26px", "31px", "26px"],
                    margin: ["5px auto 0", "4px auto 0", "6px auto 0"]
                }),
                Je = M()(ve.a, {
                    target: "e1huz5gh1"
                })(Ve, ";", Ue, ";"),
                He = ze({
                    width: ["220px", "328px", "305px"],
                    height: ["19px", "29px", "27px"],
                    margin: ["9px auto 0", "5px auto 0", "6px auto"]
                }),
                qe = M()("a", {
                    target: "e1huz5gh2"
                })(Ve, ";", He, ";"),
                Ge = ze({
                    width: ["195px", "278px", "250px"],
                    height: ["22px", "32px", "28px"],
                    margin: ["5px auto 0", "0 auto", "3px auto"]
                }),
                We = M()("a", {
                    target: "e1huz5gh3"
                })(Ve, ";", Ge, ";");

            function Ye(e) {}
            Ye.displayName = "Logo";
            var Xe, Ke, Qe, Ze, $e = Object(C.withTheme)(Ye),
                et = n("oJ07"),
                tt = n("Ytp6"),
                nt = n("YrOh"),
                at = n("rV9i"),
                ot = n.n(at),
                it = Object(y.css)(Me.e.getCSSSelectors(["V1", "V2", "V3", "V4", "V5", "V6"]), "{display:none;}"),
                st = Object(y.css)(Me.e.getCSSSelectors(["V1", "V2", "V3", "V4", "V5", "V6"]), "{display:flex;align-items:center;}"),
                rt = Object(y.css)(Me.e.getCSSSelectors(["V1", "V2", "V3", "V4", "V5", "V6"]), "{background-color:rgba(0,0,0,0.65);", L.a.breakpoint.mediumLarge, "{background-color:transparent;}}"),
                lt = Object(y.css)(Me.e.getCSSSelectors(["V1", "V2", "V3", "V4", "V5", "V6"]), "{background-color:rgba(255,255,255,0.65);", L.a.breakpoint.mediumLarge, "{background-color:transparent;}}"),
                ct = Object(y.css)("position:absolute;top:6px;width:100%;z-index:", L.a.zIndex.menuOverlay, ";@media print{position:relative;}"),
                dt = Object(y.css)(L.a.breakpoint.medium, "{border-bottom:1px solid ", L.a.color.gray60, ";}"),
                ut = Object(y.css)(L.a.breakpoint.mediumLarge, "{position:fixed;width:100%;top:0;left:0;z-index:200;background-color:", L.a.color.white, ";border-bottom:none;transition:all 0.2s ease-in-out;}"),
                pt = M()("div", {
                    target: "e1suatyy0"
                })((function(e) {}), ";", (function(e) {}), ";@media print{margin-bottom:15px;}"),
                mt = ot()("mode", {
                    default: function(e) {},
                    dark: function(e) {},
                    transparent: "none"
                }),
                ht = Object(y.css)("position:inherit;width:inherit;z-index:inherit;"),
                ft = Object(y.css)("background:hsla(0,0%,100%,0.25);"),
                vt = Object(y.css)("background:hsla(0,0%,100%,0);"),
                gt = ie()([L.a.breakpoint.mediumLarge, L.a.breakpoint.large])({
                    margin: [null, "0 auto", "auto"],
                    padding: [null, "0 3%", "0 3%"],
                    maxWidth: [null, null, "".concat(L.a.breakpoint.maxDesktopContentWidth, "px")]
                }),
                bt = M()("header", {
                    target: "e1suatyy1"
                })(L.a.breakpoint.mediumLarge, "{position:relative;border-bottom:", mt, ";", (function(e) {}), ";}", (function(e) {}), ";"),
                yt = ie()([L.a.breakpoint.medium, L.a.breakpoint.mediumLarge, "@media print"]),
                wt = function(e) {},
                kt = Object(y.css)("background:transparent;border-bottom:none;max-width:100%;top:-7px;"),
                Ct = Object(y.css)("position:fixed;top:-120px;left:0;width:100%;height:120px;z-index:100001;background:", L.a.color.white, ";"),
                Bt = Object(y.css)("box-shadow:0 0 5px 1px rgba(0,0,0,0.28);background:", L.a.color.white, ";position:fixed;width:100%;transform:translateY(-70px);top:0;left:0;z-index:100000;transition:0.5s cubic-bezier(0.23,1,0.32,1);"),
                Et = Object(y.css)("margin:0 auto;padding:0 3%;max-width:", L.a.breakpoint.maxDesktopContentWidth, "px;white-space:nowrap;"),
                Tt = Object(y.css)("border-top:1px solid ", L.a.color.gray70, ";padding:0 60px;display:none;", L.a.breakpoint.mediumLarge, "{display:block;}"),
                At = Object(y.css)("border-bottom:1px solid ", L.a.color.black, ";"),
                xt = Object(y.css)("border-bottom:4px double ", L.a.color.black, ";"),
                Ot = Object(y.css)("display:block;"),
                St = M()("section", {
                    target: "e1suatyy2"
                })(wt, ";position:relative;", (function(e) {}), ";", (function(e) {}), ";", (function(e) {}), ";", (function(e) {}), ";", L.a.breakpoint.medium, "{", (function(e) {}), ";}", L.a.breakpoint.mediumLarge, "{margin:0 auto;max-width:", L.a.breakpoint.mastheadMaxWidth, "px;", (function(e) {}), ";", (function(e) {}), ";}", (function(e) {})),
                Nt = o()(V, {}),
                Dt = o()($e, {}),
                _t = o()(me, {}),
                It = o()("div", {
                    className: Ct
                }),
                Ft = (Xe = E()(), Object(S.a)(Ke = Xe(Ke = Object(O.a)(Ke = Object(C.withTheme)((Ze = Qe = function(e) {
                    function t() {}
                    return v()(t, e), d()(t, [{
                        key: "getChildContext",
                        value: function() {}
                    }, {
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "trackAnonMastheadImpression",
                        value: function() {}
                    }, {
                        key: "toggleModal",
                        value: function(e) {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(g.Component), Qe.defaultProps = {
                    section: "default",
                    user: {},
                    theme: {},
                    timestamp: null,
                    weather: null,
                    transparent: !1,
                    iconStyle: "black",
                    variant: "",
                    alignment: "",
                    SubscribeButtonComponent: !1,
                    LoginButtonComponent: !1,
                    SubscribeLinkComponent: !1,
                    LoginLinkComponent: !1,
                    FollowLinksComponent: !1,
                    showFloatingMiniNav: !0,
                    isSticky: !1,
                    hideNavButtons: !1,
                    showMiniNavDoubleBorderBottom: !0,
                    showMiniNav: !0,
                    className: void 0,
                    hideModalOnScroll: !1,
                    onMouseEnter: function() {},
                    onMouseLeave: function() {},
                    skipToContent: null,
                    editionsActive: "en",
                    pageCount: 0,
                    isTopBarVariant: !1
                }, Qe.childContextTypes = {
                    handleEditionClick: k.a.func
                }, Ke = Ze)) || Ke) || Ke) || Ke) || Ke);
            Ft.displayName = "Masthead";
            t.a = Ft
        },
        B88b: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("q1tI"),
                s = n.n(i),
                r = n("17x9"),
                l = n.n(r),
                c = n("ZKN5"),
                d = n("rI8Z"),
                u = n("vftj"),
                p = n("lwsE"),
                m = n.n(p),
                h = n("W8MJ"),
                f = n.n(h),
                v = n("a1gu"),
                g = n.n(v),
                b = n("Nsbk"),
                y = n.n(b),
                w = n("7W2i"),
                k = n.n(w),
                C = n("pVnL"),
                B = n.n(C);
            n("f3/d");

            function E() {}
            l.a.oneOf(["light", "dark"]);
            var T, A, x, O = function(e) {
                    var t, n, a = e.displayName || e.name || "Component";
                    return n = t = function(t) {
                        function n() {}
                        return k()(n, t), f()(n, [{
                            key: "componentDidMount",
                            value: function() {}
                        }, {
                            key: "render",
                            value: function() {}
                        }]), n
                    }(i.Component), t.displayName = "withPreferredColorScheme(".concat(a, ")"), n
                },
                S = n("XvdP"),
                N = n.n(S),
                D = n("LjBh"),
                _ = n.n(D),
                I = n("Uezm"),
                F = n.n(I),
                M = n("qfNL"),
                P = n.n(M),
                L = n("h23B"),
                j = n.n(L),
                R = n("kHvx"),
                z = n.n(R),
                V = n("tBMr"),
                U = n.n(V),
                J = n("TiJ4"),
                H = n.n(J),
                q = n("iEFa"),
                G = n.n(q),
                W = n("LHoU"),
                Y = n.n(W),
                X = O((x = A = function(e) {
                    function t() {}
                    return k()(t, e), f()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(i.Component), A.defaultProps = {
                    preferredColorScheme: "light"
                }, T = x)) || T,
                K = o()("html", {
                    lang: "en"
                }),
                Q = o()("meta", {
                    itemProp: "inLanguage",
                    content: "en-US"
                }),
                Z = o()(X, {}),
                $ = function(e) {};
            $.defaultProps = {
                children: null
            };
            t.a = Object(c.a)($)
        },
        Br2v: function(e, t, n) {
            "use strict";
            n.r(t);
            n("qKs0"), n("VXxg"), n("vqGA"), n("V5/Y"), n("8+KV"), n("dRSK"), n("ls82"), n("/8Fb"), n("Wr5T")
        },
        COgQ: function(e, t) {
            e.exports = function() {}
        },
        D9T7: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {}, t.getSizes = void 0;
            var o = a(n("MVZn")),
                i = a(n("RIqP")),
                s = a(n("q1tI")),
                r = a(n("i8i4")),
                l = a(n("bTwT")),
                c = a(n("VeKh")),
                d = function(e) {};
            t.getSizes = d
        },
        DxDJ: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.textMaxWidthsClass = t.mobileFullWidth = t.breakpointMap = t.widths = void 0;
            var o = a(n("lSNA")),
                i = n("UmXO");
            var s = {
                small: 600,
                medium: 740,
                mediumLarge: 1024,
                large: 1150,
                extraLarge: 1440
            };
            t.widths = s;
            var r = {
                small: "@media (min-width: ".concat(s.small, "px)"),
                medium: "@media (min-width: ".concat(s.medium, "px)"),
                mediumLarge: "@media (min-width: ".concat(s.mediumLarge, "px)"),
                large: "@media (min-width: ".concat(s.large, "px)"),
                extraLarge: "@media (min-width: ".concat(s.extraLarge, "px)")
            };
            t.breakpointMap = r;
            t.mobileFullWidth = "calc(100% - 40px)";
            var l = (0, i.css)("max-width:", "calc(100% - 40px)", ";margin:auto;", r.small, "{max-width:100%;}");
            t.textMaxWidthsClass = l;
            var c = function(e) {
                for (var t = 1; t < arguments.length; t++)
                    if (t % 2) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {})))), a.forEach((function(t) {
                            (0, o.default)(e, t, n[t])
                        }))
                    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
                return e
            }({}, r, {
                width: s,
                maxMobileContentWidth: 600,
                maxDesktopContentWidth: 1200,
                mediaMaxWidth: 1200,
                textBodyWidth: 600,
                textBodyWidthExtralarge: 600,
                mediumMediaExtralarge: 720,
                mastheadMaxWidth: 1605,
                mobileFullWidth: "calc(100% - 40px)",
                textMaxWidthsClass: l
            });
            t.default = c
        },
        E00O: function(e, t, n) {
            "use strict";
            t.a = {
                BREAKPOINT_S: 600,
                BREAKPOINT_M: 740,
                BREAKPOINT_ML: 1024,
                BREAKPOINT_L: 1150
            }
        },
        Esml: function(e, t, n) {
            "use strict";
            var a = n("lwsE"),
                o = n.n(a),
                i = n("W8MJ"),
                s = n.n(i),
                r = n("a1gu"),
                l = n.n(r),
                c = n("Nsbk"),
                d = n.n(c),
                u = n("7W2i"),
                p = n.n(u),
                m = (n("f3/d"), n("q1tI")),
                h = n.n(m),
                f = n("60yG"),
                v = n.n(f),
                g = n("qs2k");
            t.a = function(e) {
                return function(t) {
                    var n, a, i = t.displayName || t.name || "Component",
                        r = v()((function() {
                            g.f.mark("start-".concat(e))
                        })),
                        c = v()((function() {
                            g.f.mark("end-".concat(e)), g.f.measure(e, "start-".concat(e), "end-".concat(e))
                        }));
                    return a = n = function(e) {
                        function n() {
                            return o()(this, n), l()(this, d()(n).apply(this, arguments))
                        }
                        return p()(n, e), s()(n, [{
                            key: "componentDidMount",
                            value: function() {
                                c()
                            }
                        }, {
                            key: "render",
                            value: function() {
                                return r(), h.a.createElement(t, this.props)
                            }
                        }]), n
                    }(m.Component), n.displayName = "withTiming(".concat(i, ")"), a
                }
            }
        },
        "Fm/i": function(e, t, n) {
            "use strict";
            e.exports = n("+Swi"), e.exports.version = "2.5.22"
        },
        FyX9: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("lSNA"),
                s = n.n(i),
                r = (n("q1tI"), n("17x9"), n("UmXO")),
                l = n("KeRS"),
                c = n.n(l),
                d = n("+4HN"),
                u = n("GB3f"),
                p = (n("SMB2"), n("wXC7")),
                m = n.n(p),
                h = Object(r.css)("display:none;text-align:center;", m.a.breakpoint.mediumLarge, "{display:block;}"),
                f = Object(r.css)("color:", m.a.color.gray30, ";letter-spacing:0.03em;margin-top:2px;"),
                v = Object(r.css)("display:inline-block;font-family:", m.a.font.franklinBase, ";font-size:10px;text-transform:uppercase;"),
                g = Object(r.css)(v, ";color:", m.a.color.black, ";font-weight:", m.a.font.weight.medium, ";&:first-child{margin-left:0;}"),
                b = Object(r.css)(v, ";color:", m.a.color.gray10, ";font-weight:", m.a.font.weight.bold, ";"),
                y = Object(r.css)("display:inline-block;border-radius:3px;padding:7px 10px;&:hover{background-color:", m.a.color.gray90, ";}", m.a.breakpoint.mediumLarge, "{padding:7px 8px 6px;transition:background 0.6s ease;}"),
                w = Object(r.css)("margin:3px 0 0;"),
                k = "English",
                C = "Español",
                B = "中文",
                E = function() {},
                T = function(e) {};
            T.displayName = "EditionMenu", T.defaultProps = {
                active: "en",
                isTopBar: !1
            };
            t.a = T
        },
        GB3f: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {})), n.d(t, "a", (function() {})), n.d(t, "b", (function() {})), n.d(t, "c", (function() {}));
            n("91GP"), n("9VmF");
            var a = n("CxY0"),
                o = n.n(a),
                i = n("s4NR"),
                s = n.n(i),
                r = n("WXMI"),
                l = 31536e6;

            function c() {}
            var d = "/",
                u = "es";

            function p() {}

            function m(e) {}

            function h() {}

            function f() {}
        },
        GY5D: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                o = n.n(a).a.createContext({
                    ab: {},
                    counted: !1,
                    expiredSession: !1,
                    initMeter: function() {},
                    meterReady: !1,
                    pageCount: null,
                    showGateway: !1,
                    gatewayType: null,
                    gatewayTypeVariation: null,
                    totalArticleCount: null,
                    granted: !1,
                    grantReason: null
                });
            t.a = o
        },
        "Gc+2": function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r;
            var o = a(n("q1tI")),
                i = (a(n("17x9")), n("UmXO")),
                s = a(n("wXC7"));

            function r(e) {}
            r.displayName = "SearchIcon", r.defaultProps = {
                className: "",
                fill: s.default.color.gray20
            }
        },
        GwXh: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("f3/d"), n("Z2Ku"), n("L9s1"), n("q1tI")),
                s = (n("17x9"), n("hNYz")),
                r = n("+4HN"),
                l = (n("SMB2"), n("UmXO")),
                c = n("wXC7"),
                d = n.n(c),
                u = Object(l.css)("padding:15px 0 11px;text-align:center;vertical-align:baseline;width:50%;"),
                p = Object(l.css)(u, ";color:", d.a.color.blue20, ";text-transform:uppercase;}"),
                m = Object(l.css)(u, ";border-left:1px solid ", d.a.color.gray60, ";color:", d.a.color.blue20, ";text-transform:uppercase;"),
                h = Object(l.css)("align-items:center;background-color:", d.a.color.white, ";display:flex;font-family:", d.a.font.franklin, ";font-size:13px;font-weight:", d.a.font.weight.bold, ";justify-content:space-between;padding:9px 15px;text-decoration:none;"),
                f = Object(l.css)("align-items:center;background-color:", d.a.color.white, ";display:flex;font-family:", d.a.font.franklin, ";font-weight:", d.a.font.weight.bold, ";justify-content:space-between;padding:14px 20px;text-decoration:none;", d.a.breakpoint.medium, "{border-radius:3px 3px 0 0;padding:14px 15px;}"),
                v = Object(l.css)("color:", d.a.color.gray30, ";font-size:14px;margin-bottom:4px;"),
                g = Object(l.css)("color:", d.a.color.yellow15, ";font-size:12px;margin-top:3px;"),
                b = n("WXMI"),
                y = "Log In",
                w = "Subscribe",
                k = function(e) {};
            k.displayName = "UserModalHeader", k.defaultProps = {
                userName: null,
                userEntitlement: ""
            };
            var C = k,
                B = (n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("lSNA")),
                E = n.n(B),
                T = n("X6oL"),
                A = n.n(T),
                x = [{
                    id: "account",
                    text: "Account",
                    href: "https://account.nytimes.com",
                    renderIfLoggedOut: !0,
                    target: "_self"
                }, {
                    id: "help",
                    text: "Help",
                    href: "https://help.nytimes.com/hc/en-us",
                    renderIfLoggedOut: !0,
                    target: "_self"
                }, {
                    id: "billing",
                    text: "Billing Information",
                    href: "https://account.nytimes.com/seg/subscription/billing",
                    renderIfLoggedOut: !0,
                    target: "_self"
                }, {
                    id: "contact",
                    text: "Contact Us",
                    href: "https://help.nytimes.com/hc/en-us/articles/115015385887-Contact-Us",
                    renderIfLoggedOut: !0,
                    target: "_self"
                }, {
                    id: "gift",
                    text: "Gift Subscriptions",
                    href: "https://www.nytimes.com/subscription/gift?referrer=masthead",
                    renderIfLoggedOut: !0,
                    target: "_self",
                    trackingObject: {
                        event: "moduleInteraction",
                        eventTimeout: 120,
                        module: {
                            element: {
                                name: "gift-subscriptions",
                                label: "masthead-usermenu-dropdown"
                            }
                        },
                        eventData: {
                            type: "click"
                        }
                    }
                }, {
                    id: "refer",
                    text: "Share The Times",
                    href: "https://www.nytimes.com/share?referer=masthead",
                    renderIfLoggedOut: !1,
                    target: "_blank",
                    trackingObject: {
                        event: "moduleInteraction",
                        eventTimeout: 120,
                        module: {
                            element: {
                                name: "share-the-times",
                                label: "masthead-usermenu-dropdown"
                            }
                        },
                        eventData: {
                            type: "click"
                        }
                    }
                }],
                O = Object(l.css)("background-color:", d.a.color.white, ";font-family:", d.a.font.franklin, ";padding:20px 0 18px;"),
                S = Object(l.css)("color:", d.a.color.gray45, ";font-size:11px;font-weight:", d.a.font.weight.bold, ";margin-top:2px;margin-bottom:9px;text-transform:uppercase;"),
                N = Object(l.css)("display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0 20px;", d.a.breakpoint.medium, "{padding:0 15px;}"),
                D = Object(l.css)("box-sizing:border-box;font-family:", d.a.font.franklin, ";font-size:15px;font-weight:", d.a.font.weight.medium, ";width:50%;&:nth-child(1),&:nth-child(3){padding-bottom:15px;border-right:1px solid ", d.a.color.gray60, ";}&:nth-child(2),&:nth-child(4),&:nth-child(6){padding-left:4%;}&:nth-child(5){border-right:1px solid ", d.a.color.gray60, ";padding-bottom:3px;}", d.a.breakpoint.large, "{font-size:13px;}"),
                _ = Object(l.css)("color:", d.a.color.gray30, ";display:block;text-decoration:none;&:hover{text-decoration:underline;}");

            function I(e, t) {}
            var F = function(e, t, n, a, o) {},
                M = function(e) {};
            M.displayName = "UserMenu", M.defaultProps = {
                header: null,
                isLoggedIn: !1
            };
            var P = A()({})(M),
                L = n("lwsE"),
                j = n.n(L),
                R = n("W8MJ"),
                z = n.n(R),
                V = n("a1gu"),
                U = n.n(V),
                J = n("Nsbk"),
                H = n.n(J),
                q = n("7W2i"),
                G = n.n(q),
                W = n("XWHH"),
                Y = n.n(W),
                X = n("LMsl"),
                K = n.n(X),
                Q = (n("bHtr"), function(e) {}),
                Z = Object(l.css)("padding:10px 4px;"),
                $ = Object(l.css)("align-items:flex-start;display:flex;justify-content:space-between;&:hover{text-decoration:underline;}"),
                ee = Object(l.css)("color:", d.a.color.gray20, ";font-family:", d.a.font.cheltenhamSmall, ";font-size:16px;font-weight:normal;line-height:21px;", d.a.breakpoint.large, "{align-self:center;line-height:18px;font-size:14px;}"),
                te = Object(l.css)("align-self:center;height:45px;min-width:45px;padding-left:14px;width:45px;");

            function ne(e) {}
            ne.displayName = "Story", ne.defaultProps = {
                imgSrc: null
            };
            var ae = Object(l.css)("background-color:", d.a.color.gray90, ";border-top:1px solid ", d.a.color.gray60, ";padding:0;position:relative;"),
                oe = Object(l.css)("font-family:", d.a.font.franklin, ";font-size:13px;font-weight:", d.a.font.weight.bold, ";letter-spacing:0.03em;padding:11px 15px 0;text-transform:uppercase;", d.a.breakpoint.large, "{font-size:10px;}"),
                ie = Object(l.css)("color:", d.a.color.gray35, ";display:block;padding:4px 0 8px;position:relative;&:hover{text-decoration:underline;}"),
                se = Object(l.css)("bottom:8px;position:absolute;right:0;width:7px;"),
                re = Object(l.css)("padding:7px 11px 16px;"),
                le = Object(l.css)("border-top:1px solid ", d.a.color.gray70, ";"),
                ce = "Saved for later",
                de = o()(Q, {
                    className: se
                }),
                ue = function(e) {};
            ue.displayName = "SaveList";
            var pe = ue,
                me = function(e) {},
                he = Object(l.css)("align-items:center;background-color:", d.a.color.gray90, ";border-top:1px solid ", d.a.color.gray60, ";display:flex;flex-direction:column;height:175px;justify-content:center;padding:20px 0 25px;"),
                fe = Object(l.css)("display:block;height:31px;width:21px;"),
                ve = Object(l.css)("color:", d.a.color.gray30, ";font-family:", d.a.font.franklin, ";font-size:13px;font-weight:", d.a.font.weight.bold, ";letter-spacing:0.03em;line-height:16px;padding:11px 15px 0;text-transform:none;"),
                ge = Object(l.css)("color:", d.a.color.gray30, ";font-family:", d.a.font.franklin, ";font-size:13px;line-height:16px;"),
                be = "Saved articles appear here",
                ye = "when you have time to read them.",
                we = o()(me, {
                    className: fe
                }),
                ke = function() {};
            ke.displayName = "EmptySave";
            var Ce = ke,
                Be = Object(l.css)("align-items:center;background-color:", d.a.color.gray90, ";border-top:1px solid ", d.a.color.gray60, ";display:flex;flex-direction:column;height:175px;justify-content:center;padding:20px 0 25px;"),
                Ee = Object(l.css)("color:", d.a.color.gray10, ";font-family:", d.a.font.franklin, ";font-size:15px;font-weight:", d.a.font.weight.bold, ";letter-spacing:0.03em;line-height:16px;padding:11px 15px 3px;text-transform:none;"),
                Te = Object(l.css)("color:", d.a.color.gray10, ";float:left;font-family:", d.a.font.franklin, ";font-size:15px;line-height:17px;width:260px;"),
                Ae = Object(l.css)("padding:7px 0;"),
                xe = Object(l.css)("background-color:", d.a.color.white, ";border-radius:50%;display:inline-block;float:left;height:32px;margin-right:10px;position:relative;width:32px;"),
                Oe = Object(l.css)("display:inline-block;height:25px;left:4px;position:absolute;top:4px;width:25px;"),
                Se = "Logged in / registered users can:",
                Ne = "Save articles and visit later on any device",
                De = "Comment on articles and spark conversations with other readers",
                _e = "Enable Breaking News Alerts to follow developing stories",
                Ie = o()("span", {
                    className: xe
                }, void 0, o()((function(e) {}), {
                    className: Oe
                })),
                Fe = o()("span", {
                    className: xe
                }, void 0, o()((function(e) {}), {
                    className: Oe
                })),
                Me = o()("span", {
                    className: xe
                }, void 0, o()((function(e) {}), {
                    className: Oe
                })),
                Pe = function() {};
            Pe.displayName = "LoggedOutSaved";
            var Le = Pe,
                je = null,
                Re = o()(Ce, {}),
                ze = o()(Le, {}),
                Ve = o()(K.a, {}),
                Ue = o()(Ce, {}),
                Je = function(e) {
                    function t(e) {}
                    return G()(t, e), z()(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(i.Component);
            Je.displayName = "SavedList", Je.defaultProps = {
                isLoggedIn: !1,
                disable: void 0
            };
            var He = n("PxMw"),
                qe = n.n(He),
                Ge = Object(l.css)("background-color:", d.a.color.white, ";border:none;border-top:1px solid ", d.a.color.gray60, ";color:", d.a.color.blue20, ";font-family:", d.a.font.franklin, ";font-size:12px;height:50px;padding:8px 9px 5px;text-transform:uppercase;text-align:center;width:100%;&:hover{text-decoration:underline;}"),
                We = "Log Out",
                Ye = function(e) {};
            Ye.defaultProps = {
                loggedIn: !1
            };
            var Xe = Ye,
                Ke = n("3NoI"),
                Qe = n.n(Ke)()("section", {
                    target: "e1ihtydq0"
                })("border-top:1px solid ", d.a.color.gray70, ";", d.a.breakpoint.medium, "{padding:0 13%;}", d.a.breakpoint.large, "{border-top:0;padding:0;}"),
                Ze = "Home Delivery Subscriber",
                $e = "Digital Subscriber",
                et = function(e) {};
            et.displayName = "UserModal", et.defaultProps = {
                user: null,
                style: {},
                disableSavedList: void 0
            };
            t.a = et
        },
        HR03: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.modalPointerMiddle = t.modalPointerDownLeft = t.modalPointerDownRight = t.modalPointerUpLeftAnonymous = t.modalPointerUpLeft = t.modalPointerUpRight = t.modalPointerConceal = t.StyledNYTLogo = t.closeIconClass = t.onPopoverOpen = t.CloseButton = t.StyledModal = t.buttonClass = t.containerClass = void 0;
            var o = n("UmXO"),
                i = a(n("3NoI")),
                s = a(n("9rZX")),
                r = a(n("wXC7")),
                l = a(n("i9j7")),
                c = (0, o.css)("display:inline;");
            t.containerClass = c;
            var d = (0, o.css)("&.hidden{opacity:0;visibility:hidden;&:focus{opacity:1;}}");
            t.buttonClass = d;
            var u = function(e) {},
                p = (0, i.default)(s.default, {
                    target: "ehcgvag0"
                })("background-color:", r.default.color.white, ";box-sizing:border-box;height:100%;left:0;overflow-y:scroll;position:fixed;top:0;width:100%;z-index:", r.default.zIndex.modal, ";", (function(e) {}), ";", (function(e) {}), "{", u, ";}");
            t.StyledModal = p;
            var m = (0, i.default)("button", {
                target: "ehcgvag1"
            })("background:none;position:absolute;right:23px;top:17px;", (function(e) {}), "{top:19px;}", (function(e) {}), "{opacity:0;right:17px;top:17px;&:focus{opacity:1;}}");
            t.CloseButton = m;
            var h = (0, o.css)("overflow:inherit;position:inherit;");
            t.onPopoverOpen = h;
            var f = (0, o.css)("display:block;height:16px;width:16px;");
            t.closeIconClass = f;
            var v = (0, i.default)(l.default, {
                target: "ehcgvag2"
            })("display:block;height:26px;margin:13px auto 9px;width:189px;", (function(e) {}), "{height:31px;margin:14px auto 8px;width:225px;}", (function(e) {}), "{display:none;}");
            t.StyledNYTLogo = v;
            var g = (0, o.css)("border:14px inset transparent;display:inline-block;height:0;position:absolute;width:0;"),
                b = (0, o.css)(g, ";border-bottom:14px solid ", r.default.color.white, ";left:-14px;top:-13px;");
            t.modalPointerConceal = b;
            var y = (0, o.css)(g, ";border-bottom:14px solid ", r.default.color.gray45, ";right:10px;top:", "-28px", ";");
            t.modalPointerUpRight = y;
            var w = (0, o.css)(g, ";border-bottom:14px solid ", r.default.color.gray45, ";left:10px;top:", "-28px", ";");
            t.modalPointerUpLeft = w;
            var k = (0, o.css)(g, ";border-bottom:14px solid ", r.default.color.gray45, ";left:26px;top:", "-28px", ";");
            t.modalPointerUpLeftAnonymous = k;
            var C = (0, o.css)(g, ";transform:rotate(180deg);border-bottom:14px solid ", r.default.color.gray45, ";right:10px;bottom:", "-28px", ";");
            t.modalPointerDownRight = C;
            var B = (0, o.css)(g, ";transform:rotate(180deg);border-bottom:14px solid ", r.default.color.gray45, ";left:10px;bottom:", "-28px", ";");
            t.modalPointerDownLeft = B;
            var E = (0, o.css)(g, ";border-bottom:14px solid ", r.default.color.gray45, ";left:120px;top:", "-28px", ";");
            t.modalPointerMiddle = E
        },
        HUmG: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "b", (function() {})), n.d(t, "d", (function() {})), n.d(t, "c", (function() {})), n.d(t, "e", (function() {})), n.d(t, "f", (function() {}));
            n("Z2Ku"), n("L9s1"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a = n("06b3"),
                o = "https://myaccount.nytimes.com",
                i = "https://myaccount.stg.nytimes.com",
                s = function(e, t) {},
                r = function(e) {},
                l = function(e) {},
                c = function(e) {},
                d = function(e) {}
        },
        Hplh: function(e, t, n) {
            "use strict";
            var a = n("284h"),
                o = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {};
            var i = o(n("lwsE")),
                s = o(n("W8MJ")),
                r = o(n("a1gu")),
                l = o(n("Nsbk")),
                c = o(n("7W2i")),
                d = o(n("lSNA")),
                u = a(n("q1tI")),
                p = o(n("1DxJ"))
        },
        "If/s": function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("q1tI"),
                s = n.n(i),
                r = (n("17x9"), n("xfY5"), n("pIFo"), n("91GP"), n("tUrg"), n("f3/d"), n("lSNA")),
                l = n.n(r),
                c = n("lwsE"),
                d = n.n(c),
                u = n("W8MJ"),
                p = n.n(u),
                m = n("a1gu"),
                h = n.n(m),
                f = n("Nsbk"),
                v = n.n(f),
                g = n("7W2i"),
                b = n.n(g),
                y = n("UmXO"),
                w = n("XnIf"),
                k = n("wXC7"),
                C = n.n(k),
                B = (n("SMB2"), Object(y.css)("list-style-type:none;margin:0;padding:0;")),
                E = Object(y.css)("background-color:rgba(0,0,0,0);bottom:0;left:0;position:absolute;right:0;top:0;z-index:", C.a.zIndex.navigation - 1, ";"),
                T = Object(y.css)("background:", C.a.color.white, ";border-radius:3px;border-right:1px solid ", C.a.color.gray50, ";box-shadow:4px 0 6px 1px rgba(0,0,0,0.1);height:100%;left:0;padding:10px 18px;position:fixed;top:0;width:190px;z-index:", C.a.zIndex.navigation, ";"),
                A = Object(y.css)("border-left:1px solid ", C.a.color.gray60, ";margin-left:10px;min-width:160px;padding-left:10px;"),
                x = Object(y.css)("min-width:160px;"),
                O = Object(y.css)("color:", C.a.color.gray40, ";font-family:", C.a.font.franklin, ";font-size:11px;font-weight:", C.a.font.weight.book, ";line-height:12px;padding:7px;text-transform:uppercase;"),
                S = Object(y.css)("cursor:pointer;font-family:", C.a.font.franklin, ";font-size:14px;font-weight:", C.a.font.weight.bold, ";"),
                N = Object(y.css)("cursor:pointer;font-family:", C.a.font.franklin, ";font-size:14px;font-weight:", C.a.font.weight.bold, ";&:nth-child(11),&:nth-last-child(2){padding-bottom:10px;}&:nth-child(12),&:last-child{padding-top:10px;border-top:1px solid ", C.a.color.gray60, ";}"),
                D = Object(y.css)("border-radius:3px;color:", C.a.color.black, ";display:block;padding:7px;text-decoration:none;&:hover{background-color:", C.a.color.blue50, ";}"),
                _ = Object(y.css)("display:block;float:right;height:8px;margin-top:-17px;transform:rotate(270deg);width:6px;&.active{display:none;}"),
                I = Object(y.css)("background:", C.a.color.white, ";border-radius:3px;border:1px solid ", C.a.color.gray50, ";box-shadow:-1px 4px 6px rgba(0,0,0,0.09);display:flex;padding:10px 18px;position:fixed;z-index:", C.a.zIndex.navigationModal, ";"),
                F = Object(y.css)("border:solid transparent;border-right-color:", C.a.color.gray50, ";border-width:14px;height:0;margin-top:-14px;pointer-events:none;position:absolute;right:100%;top:44px;width:0;&::after{border:solid transparent;border-right-color:", C.a.color.white, ";border-width:13px;content:' ';position:absolute;pointer-events:none;right:-14px;top:-13px;}"),
                M = o()("div", {}),
                P = o()("div", {}),
                L = o()("div", {}),
                j = function(e) {
                    function t(e) {}
                    return b()(t, e), p()(t, [{
                        key: "getCurrentMenu",
                        value: function() {}
                    }, {
                        key: "setFocus",
                        value: function() {}
                    }, {
                        key: "findChildren",
                        value: function(e, t) {}
                    }, {
                        key: "parseData",
                        value: function(e) {}
                    }, {
                        key: "componentWillMount",
                        value: function() {}
                    }, {
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentDidUpdate",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(i.Component);
            j.displayName = "Navigation", j.defaultProps = {
                edition: "domestic",
                onClose: function() {},
                data: [{
                    alternate_editions: {
                        global: "F4E6EDF7-81C6-4DB2-8EB9-5A5E8A95CEC1"
                    },
                    edition: "domestic",
                    name: "Home Page",
                    parent: null,
                    path: "https://www.nytimes.com",
                    taxonomyId: "A963B567-7D3D-4D0C-9E47-BF91609EFCE7",
                    className: "homepage",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    alternate_editions: {
                        domestic: "A963B567-7D3D-4D0C-9E47-BF91609EFCE7"
                    },
                    edition: "global",
                    name: "Home Page",
                    parent: null,
                    path: "https://international.nytimes.com/?iht",
                    taxonomyId: "F4E6EDF7-81C6-4DB2-8EB9-5A5E8A95CEC1",
                    className: "homepage",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1,
                    editionName: "Home Page",
                    editionPath: "https://www.nytimes.com"
                }, {
                    name: "World",
                    parent: null,
                    path: "https://www.nytimes.com/section/world",
                    taxonomyId: "9A43D8FC-F4CF-44D9-9B34-138D30468F8F",
                    edition: "",
                    className: "world",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Africa",
                    parent: "9A43D8FC-F4CF-44D9-9B34-138D30468F8F",
                    path: "https://www.nytimes.com/section/world/africa",
                    taxonomyId: "350E94CC-926C-4D2A-9DB4-FD9ED99A66DC",
                    edition: "",
                    className: "africa",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Australia",
                    parent: "9A43D8FC-F4CF-44D9-9B34-138D30468F8F",
                    path: "https://www.nytimes.com/section/world/australia",
                    taxonomyId: "7GDDJ7E-037B-4C6B-A88D-741B06663078",
                    edition: "",
                    className: "australia",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Americas",
                    parent: "9A43D8FC-F4CF-44D9-9B34-138D30468F8F",
                    path: "https://www.nytimes.com/section/world/americas",
                    taxonomyId: "5A94A97E-037B-4C6B-A88D-741B06663078",
                    edition: "",
                    className: "americas",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Asia Pacific",
                    parent: "9A43D8FC-F4CF-44D9-9B34-138D30468F8F",
                    path: "https://www.nytimes.com/section/world/asia",
                    taxonomyId: "881A1D77-D6D7-4AC3-AAC2-4C279C20DD66",
                    edition: "",
                    className: "asiapacific",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Europe",
                    parent: "9A43D8FC-F4CF-44D9-9B34-138D30468F8F",
                    path: "https://www.nytimes.com/section/world/europe",
                    taxonomyId: "D38BAA6D-F26D-4B3E-BF25-CC798E6C5F55",
                    edition: "",
                    className: "europe",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Middle East",
                    parent: "9A43D8FC-F4CF-44D9-9B34-138D30468F8F",
                    path: "https://www.nytimes.com/section/world/middleeast",
                    taxonomyId: "108390AA-728E-41EB-B9B5-14EDFBAE7D20",
                    edition: "",
                    className: "middleeast",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "U.S.",
                    parent: null,
                    path: "https://www.nytimes.com/section/us",
                    taxonomyId: "23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE",
                    edition: "",
                    className: "us",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Education",
                    parent: "23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE",
                    path: "https://www.nytimes.com/section/education",
                    taxonomyId: "C7303E0D-6EB2-4FD3-B968-530EF9F38EB1",
                    edition: "",
                    className: "education",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "The Upshot",
                    parent: "23FD6C8B-62D5-4CEA-A331-6C2A9A1223BE",
                    path: "https://www.nytimes.com/section/upshot",
                    taxonomyId: "D64FAE4C-4425-4E5A-B898-6C8CB59F9957",
                    edition: "",
                    className: "theupshot",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Politics",
                    parent: null,
                    path: "https://www.nytimes.com/section/politics",
                    taxonomyId: "80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB",
                    edition: "",
                    className: "politics",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Election 2020",
                    parent: "80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB",
                    path: "https://www.nytimes.com/news-event/2020-election",
                    taxonomyId: "78CE290F-672B-4BC7-BD4E-67DA85BCAC4E",
                    edition: "",
                    className: "elections",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Democratic Polls",
                    parent: "80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB",
                    path: "https://www.nytimes.com/interactive/2020/us/elections/democratic-polls.html",
                    taxonomyId: "D64FAE4C-4425-4E5A-B898-6C8CB59F9957",
                    edition: "",
                    className: "democraticPolls",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Presidential Candidates",
                    parent: "80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB",
                    path: "https://www.nytimes.com/interactive/2019/us/politics/2020-presidential-candidates.html",
                    taxonomyId: "D64FAE4C-4425-4E5A-B898-6C8CB59F9957",
                    edition: "",
                    className: "democraticCandidates",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Democratic Debates",
                    parent: "80E6DEE6-87E4-4AD0-9152-14FA6B07E5AB",
                    path: "https://www.nytimes.com/news-event/democratic-debates",
                    taxonomyId: "78CE290F-672B-4BC7-BD4E-67DA85BCAC4E",
                    edition: "",
                    className: "democraticDebates",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "N.Y.",
                    parent: null,
                    path: "https://www.nytimes.com/section/nyregion",
                    taxonomyId: "C4DC8C0C-E148-4201-BF10-82F1C903DBFB",
                    edition: "",
                    className: "ny",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Events",
                    parent: "C4DC8C0C-E148-4201-BF10-82F1C903DBFB",
                    path: "https://www.nytimes.com/spotlight/arts-listings",
                    taxonomyId: "2D1C1EB8-E0D9-40A9-8D59-3908DCF5C9BD",
                    edition: "",
                    className: "events",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "A257D89A-0D3C-40AF-9C34-1A25A7947D94"
                    },
                    edition: "domestic",
                    name: "Business",
                    parent: null,
                    path: "https://www.nytimes.com/section/business",
                    taxonomyId: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    className: "business",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "DealBook",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://www.nytimes.com/section/business/dealbook",
                    taxonomyId: "71301FE1-FE94-4AF4-978B-39B2D2C59D31",
                    edition: "",
                    className: "dealbook",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Economy",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://www.nytimes.com/section/business/economy",
                    taxonomyId: "2848A7AC-A33D-4352-B1FC-A465B81CD4F1",
                    edition: "",
                    className: "economy",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Energy",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://www.nytimes.com/section/business/energy-environment",
                    taxonomyId: "E1B05D9E-B6F8-46DB-89E5-06F2205C8085",
                    edition: "",
                    className: "energy",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Markets",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://markets.on.nytimes.com/research/markets/overview/overview.asp",
                    taxonomyId: "4A7070FF-9307-4094-AE79-910158959A60",
                    edition: "",
                    className: "markets",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Media",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://www.nytimes.com/section/business/media",
                    taxonomyId: "C691FB48-A7E8-44FB-9AAA-13D91863D336",
                    edition: "",
                    className: "media",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Entrepreneurship",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://www.nytimes.com/section/business/smallbusiness",
                    taxonomyId: "AD2AE740-D1A5-4EDB-970D-F56370072B09",
                    edition: "",
                    className: "entrepreneurship",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Your Money",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://www.nytimes.com/section/your-money",
                    taxonomyId: "ED7B8594-44CE-4D37-A58B-1CDAA19774E4",
                    edition: "",
                    className: "yourmoney",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Automobiles",
                    parent: "104D1E63-9701-497B-8CF4-A4D120C9014E",
                    path: "https://www.nytimes.com/section/automobiles",
                    taxonomyId: "0A13AF9D-C7B5-4E8A-B9BC-15AB4B572C94",
                    edition: "",
                    className: "automobiles",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        domestic: "104D1E63-9701-497B-8CF4-A4D120C9014E"
                    },
                    edition: "global",
                    name: "Business",
                    parent: null,
                    path: "https://www.nytimes.com/section/business",
                    taxonomyId: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    className: "business",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1,
                    editionName: "Business",
                    editionPath: "https://www.nytimes.com/section/business"
                }, {
                    name: "DealBook",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://www.nytimes.com/section/business/dealbook",
                    taxonomyId: "71301FE1-FE94-4AF4-978B-39B2D2C59D31",
                    edition: "",
                    className: "dealbook",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Economy",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://www.nytimes.com/section/business/economy",
                    taxonomyId: "2848A7AC-A33D-4352-B1FC-A465B81CD4F1",
                    edition: "",
                    className: "economy",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Energy",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://www.nytimes.com/section/business/energy-environment",
                    taxonomyId: "E1B05D9E-B6F8-46DB-89E5-06F2205C8085",
                    edition: "",
                    className: "energy",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Markets",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://markets.on.nytimes.com/research/markets/overview/overview.asp",
                    taxonomyId: "4A7070FF-9307-4094-AE79-910158959A60",
                    edition: "",
                    className: "markets",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Media",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://www.nytimes.com/section/business/media",
                    taxonomyId: "C691FB48-A7E8-44FB-9AAA-13D91863D336",
                    edition: "",
                    className: "media",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Entrepreneurship",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://www.nytimes.com/section/business/smallbusiness",
                    taxonomyId: "AD2AE740-D1A5-4EDB-970D-F56370072B09",
                    edition: "",
                    className: "entrepreneurship",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Your Money",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://www.nytimes.com/section/your-money",
                    taxonomyId: "ED7B8594-44CE-4D37-A58B-1CDAA19774E4",
                    edition: "",
                    className: "yourmoney",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Automobiles",
                    parent: "A257D89A-0D3C-40AF-9C34-1A25A7947D94",
                    path: "https://www.nytimes.com/section/automobiles",
                    taxonomyId: "0A13AF9D-C7B5-4E8A-B9BC-15AB4B572C94",
                    edition: "",
                    className: "automobiles",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "09736473-CB3F-4B2F-9772-3AF128ABE12D"
                    },
                    edition: "domestic",
                    name: "Opinion",
                    parent: null,
                    path: "https://www.nytimes.com/section/opinion",
                    taxonomyId: "AD8090D7-4137-4D71-84C8-70DA3BD89778",
                    className: "opinion",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    alternate_editions: {
                        global: "2312753B-E860-46C4-B544-1C0F70ABF41F"
                    },
                    edition: "domestic",
                    name: "Op-Ed Columnists",
                    parent: "AD8090D7-4137-4D71-84C8-70DA3BD89778",
                    path: "https://www.nytimes.com/section/opinion/columnists",
                    taxonomyId: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    className: "opedcolumnists",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 2
                }, {
                    name: "Charles M. Blow",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/charles-m-blow",
                    taxonomyId: "B70131F0-6B2A-4A93-8705-0B9F7E9B800F",
                    edition: "",
                    className: "charlesmblow",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Jamelle Bouie",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/jamelle-bouie",
                    taxonomyId: "",
                    edition: "",
                    className: "jamellebouie",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "David Brooks",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/david-brooks",
                    taxonomyId: "A2B32B86-C320-49D8-85D3-4AC6BCA2F2C2",
                    edition: "",
                    className: "davidbrooks",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Frank Bruni",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/frank-bruni",
                    taxonomyId: "1A8CCD43-E5E3-4801-8CBA-0378A0E17530",
                    edition: "",
                    className: "frankbruni",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Roger Cohen",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/roger-cohen",
                    taxonomyId: "A60B44E8-59B1-4687-B20F-D5C71A021C38",
                    edition: "",
                    className: "rogercohen",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Gail Collins",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/gail-collins",
                    taxonomyId: "AED55B1F-22EC-45F2-88B6-3B7F340C1949",
                    edition: "",
                    className: "gailcollins",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Ross Douthat",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/ross-douthat",
                    taxonomyId: "6EC4E971-BBD1-4ED5-B61D-E27A3314AE61",
                    edition: "",
                    className: "rossdouthat",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Maureen Dowd",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/maureen-dowd",
                    taxonomyId: "706C9233-C545-4A9E-AB0B-2B6A21C6AF9F",
                    edition: "",
                    className: "maureendowd",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Thomas L. Friedman",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/thomas-l-friedman",
                    taxonomyId: "3D56EF48-CA97-4209-A878-6430FB9A2C5E",
                    edition: "",
                    className: "thomaslfriedman",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Michelle Goldberg",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/michelle-goldberg",
                    taxonomyId: "",
                    edition: "",
                    className: "michellegoldberg",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Nicholas Kristof",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/nicholas-kristof",
                    taxonomyId: "D6A41F41-19BB-48C6-B121-B89359F1048F",
                    edition: "",
                    className: "nicholaskristof",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Paul Krugman",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/paul-krugman",
                    taxonomyId: "85905471-3FA0-423F-9D26-1BBE69237899",
                    edition: "",
                    className: "paulkrugman",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "David Leonhardt",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/david-leonhardt",
                    taxonomyId: "A8E6FE07-F530-4197-BA8C-A2A03C27F603",
                    edition: "",
                    className: "davidleonhardt",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Farhad Manjoo",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/farhad-manjoo",
                    taxonomyId: "",
                    edition: "",
                    className: "farhadmanjoo",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Jennifer Senior",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/jennifer-senior",
                    taxonomyId: "",
                    edition: "",
                    className: "jennifersenior",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Bret Stephens",
                    parent: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5",
                    path: "https://www.nytimes.com/column/bret-stephens",
                    taxonomyId: "3B2FA336-3551-492A-914B-4F11A65FA6BD",
                    edition: "",
                    className: "bretstephens",
                    show_in_nav: !0,
                    level: 3
                }, {
                    alternate_editions: {
                        global: "1F55AAA1-8287-4C9E-91B8-4402B7E3C855"
                    },
                    edition: "domestic",
                    name: "Editorials",
                    parent: "AD8090D7-4137-4D71-84C8-70DA3BD89778",
                    path: "https://www.nytimes.com/section/opinion/editorials",
                    taxonomyId: "6E604B7F-ACE7-4564-9203-0BD4CB02F419",
                    className: "editorials",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "FD915915-123F-4EEE-A0D1-58B15C0C545F"
                    },
                    edition: "domestic",
                    name: "Op-Ed Contributors",
                    parent: "AD8090D7-4137-4D71-84C8-70DA3BD89778",
                    path: "https://www.nytimes.com/section/opinion/contributors",
                    taxonomyId: "B3CE1F6E-B530-4C07-9B1C-98A1F9406C06",
                    className: "opedcontributors",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "D4344F1A-7552-4908-84E8-E3120AE3F7B2"
                    },
                    edition: "domestic",
                    name: "Letters",
                    parent: "AD8090D7-4137-4D71-84C8-70DA3BD89778",
                    path: "https://www.nytimes.com/section/opinion/letters",
                    taxonomyId: "7A239778-088E-4DD8-BEBF-649172041293",
                    className: "letters",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Sunday Review",
                    parent: "AD8090D7-4137-4D71-84C8-70DA3BD89778",
                    path: "https://www.nytimes.com/section/opinion/sunday",
                    taxonomyId: "67D7F2A2-B495-4FFC-9478-1CE1965601D5",
                    edition: "",
                    className: "sundayreview",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        domestic: "AD8090D7-4137-4D71-84C8-70DA3BD89778"
                    },
                    edition: "global",
                    name: "Opinion",
                    parent: null,
                    path: "https://www.nytimes.com/section/opinion",
                    taxonomyId: "09736473-CB3F-4B2F-9772-3AF128ABE12D",
                    className: "opinion",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1,
                    editionName: "Opinion",
                    editionPath: "https://www.nytimes.com/section/opinion"
                }, {
                    alternate_editions: {
                        domestic: "9568A8E4-DD00-4A19-9357-55F8E84ADDB5"
                    },
                    edition: "global",
                    name: "Op-Ed Columnists",
                    parent: "09736473-CB3F-4B2F-9772-3AF128ABE12D",
                    path: "https://www.nytimes.com/section/opinion/columnists",
                    taxonomyId: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    className: "opedcolumnists",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 2,
                    editionName: "Op-Ed Columnists",
                    editionPath: "https://www.nytimes.com/section/opinion/columnists"
                }, {
                    name: "Charles M. Blow",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/charles-m-blow",
                    taxonomyId: "B70131F0-6B2A-4A93-8705-0B9F7E9B800F",
                    edition: "",
                    className: "charlesmblow",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "David Brooks",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/david-brooks",
                    taxonomyId: "A2B32B86-C320-49D8-85D3-4AC6BCA2F2C2",
                    edition: "",
                    className: "davidbrooks",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Frank Bruni",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/frank-bruni",
                    taxonomyId: "1A8CCD43-E5E3-4801-8CBA-0378A0E17530",
                    edition: "",
                    className: "frankbruni",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Roger Cohen",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/roger-cohen",
                    taxonomyId: "A60B44E8-59B1-4687-B20F-D5C71A021C38",
                    edition: "",
                    className: "rogercohen",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Gail Collins",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/gail-collins",
                    taxonomyId: "AED55B1F-22EC-45F2-88B6-3B7F340C1949",
                    edition: "",
                    className: "gailcollins",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Ross Douthat",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/ross-douthat",
                    taxonomyId: "6EC4E971-BBD1-4ED5-B61D-E27A3314AE61",
                    edition: "",
                    className: "rossdouthat",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Maureen Dowd",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/maureen-dowd",
                    taxonomyId: "706C9233-C545-4A9E-AB0B-2B6A21C6AF9F",
                    edition: "",
                    className: "maureendowd",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Thomas L. Friedman",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/thomas-l-friedman",
                    taxonomyId: "3D56EF48-CA97-4209-A878-6430FB9A2C5E",
                    edition: "",
                    className: "thomaslfriedman",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Nicholas Kristof",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/nicholas-kristof",
                    taxonomyId: "D6A41F41-19BB-48C6-B121-B89359F1048F",
                    edition: "",
                    className: "nicholaskristof",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Paul Krugman",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/paul-krugman",
                    taxonomyId: "85905471-3FA0-423F-9D26-1BBE69237899",
                    edition: "",
                    className: "paulkrugman",
                    show_in_nav: !0,
                    level: 3
                }, {
                    name: "Joe Nocera",
                    parent: "2312753B-E860-46C4-B544-1C0F70ABF41F",
                    path: "https://www.nytimes.com/column/joe-nocera",
                    taxonomyId: "B1CD03FF-773D-46AB-B3C1-4FAE8565F551",
                    edition: "",
                    className: "joenocera",
                    show_in_nav: !0,
                    level: 3
                }, {
                    alternate_editions: {
                        domestic: "6E604B7F-ACE7-4564-9203-0BD4CB02F419"
                    },
                    edition: "global",
                    name: "Editorials",
                    parent: "09736473-CB3F-4B2F-9772-3AF128ABE12D",
                    path: "https://www.nytimes.com/section/opinion/editorials",
                    taxonomyId: "1F55AAA1-8287-4C9E-91B8-4402B7E3C855",
                    className: "editorials",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2,
                    editionName: "Editorials",
                    editionPath: "https://www.nytimes.com/section/opinion/editorials"
                }, {
                    alternate_editions: {
                        domestic: "B3CE1F6E-B530-4C07-9B1C-98A1F9406C06"
                    },
                    edition: "global",
                    name: "Op-Ed Contributors",
                    parent: "09736473-CB3F-4B2F-9772-3AF128ABE12D",
                    path: "https://www.nytimes.com/section/opinion/contributors",
                    taxonomyId: "FD915915-123F-4EEE-A0D1-58B15C0C545F",
                    className: "opedcontributors",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2,
                    editionName: "Op-Ed Contributors",
                    editionPath: "https://www.nytimes.com/section/opinion/contributors"
                }, {
                    alternate_editions: {
                        domestic: "7A239778-088E-4DD8-BEBF-649172041293"
                    },
                    edition: "global",
                    name: "Letters",
                    parent: "09736473-CB3F-4B2F-9772-3AF128ABE12D",
                    path: "https://www.nytimes.com/section/opinion/letters",
                    taxonomyId: "D4344F1A-7552-4908-84E8-E3120AE3F7B2",
                    className: "letters",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2,
                    editionName: "Letters",
                    editionPath: "https://www.nytimes.com/section/opinion/letters"
                }, {
                    name: "Sunday Review",
                    parent: "09736473-CB3F-4B2F-9772-3AF128ABE12D",
                    path: "https://www.nytimes.com/section/opinion/sunday",
                    taxonomyId: "67D7F2A2-B495-4FFC-9478-1CE1965601D5",
                    edition: "",
                    className: "sundayreview",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Tech",
                    parent: null,
                    path: "https://www.nytimes.com/section/technology",
                    taxonomyId: "78FBAD45-31A9-4EC7-B172-7D62A2B9955E",
                    edition: "",
                    className: "tech",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Personal Tech",
                    parent: "78FBAD45-31A9-4EC7-B172-7D62A2B9955E",
                    path: "https://www.nytimes.com/section/technology/personaltech",
                    taxonomyId: "65229E4E-DAD7-459F-AFD3-2AB6D0374FFD",
                    edition: "",
                    className: "personaltech",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Science",
                    parent: null,
                    path: "https://www.nytimes.com/section/science",
                    taxonomyId: "A4B35924-DB6C-4EA3-997D-450810F4FEE6",
                    edition: "",
                    className: "science",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Environment",
                    parent: "A4B35924-DB6C-4EA3-997D-450810F4FEE6",
                    path: "https://www.nytimes.com/section/science/earth",
                    taxonomyId: "B831ACFB-B751-4F23-9B91-F1236878836C",
                    edition: "",
                    className: "environment",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Space & Cosmos",
                    parent: "A4B35924-DB6C-4EA3-997D-450810F4FEE6",
                    path: "https://www.nytimes.com/section/science/space",
                    taxonomyId: "E048A75C-4A9C-4241-B38C-74752BBC5AB8",
                    edition: "",
                    className: "spacecosmos",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Health",
                    parent: null,
                    path: "https://www.nytimes.com/section/health",
                    taxonomyId: "7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC",
                    edition: "",
                    className: "health",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Money & Policy",
                    parent: "7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC",
                    path: "https://www.nytimes.com/section/health/policy",
                    taxonomyId: "67641EB3-B6FF-44F2-B10F-2F6A5C2EC7D7",
                    edition: "",
                    className: "moneypolicy",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Health Guide",
                    parent: "7D6BE1AF-8CD8-430B-8B2A-17CD0EAA99AC",
                    path: "https://www.nytimes.com/section/well",
                    taxonomyId: "DA27E208-2682-4B17-8996-CD35A339521B",
                    edition: "",
                    className: "healthguide",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "BE66F420-C51B-461D-B487-CACF62E94AAE"
                    },
                    edition: "domestic",
                    name: "Sports",
                    parent: null,
                    path: "https://www.nytimes.com/section/sports",
                    taxonomyId: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    className: "sports",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Baseball",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/baseball",
                    taxonomyId: "67CAE5A6-408D-44F3-827B-DD394E0467EF",
                    edition: "",
                    className: "baseball",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Basketball: College",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/ncaabasketball",
                    taxonomyId: "BA1B9016-F2F7-454B-BDF7-D4C58F6D05E9",
                    edition: "",
                    className: "basketballcollege",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Basketball: N.B.A.",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/basketball",
                    taxonomyId: "415FB1AB-3BED-4048-B61A-0E4096CE1DF6",
                    edition: "",
                    className: "basketballnba",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Football: College",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/ncaafootball",
                    taxonomyId: "ABBA0609-90E2-46A3-9AC5-B208ACC6C97B",
                    edition: "",
                    className: "footballcollege",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Football: N.F.L.",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/football",
                    taxonomyId: "F6B9D6C9-97AE-45DB-9686-72E44D8D3DAF",
                    edition: "",
                    className: "footballnfl",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Golf",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/golf",
                    taxonomyId: "9F98FEDB-E7B3-4907-A56E-35320CC4C878",
                    edition: "",
                    className: "golf",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Hockey",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/hockey",
                    taxonomyId: "BD14DADE-D513-4BD9-8AED-0CC63E58606C",
                    edition: "",
                    className: "hockey",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Soccer",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/soccer",
                    taxonomyId: "14F230C0-EBDB-4A78-AF7B-2C90C4739625",
                    edition: "",
                    className: "soccer",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Tennis",
                    parent: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A",
                    path: "https://www.nytimes.com/section/sports/tennis",
                    taxonomyId: "D4DE47DA-76DD-4528-B539-98A6DFEFEFB3",
                    edition: "",
                    className: "tennis",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        domestic: "DE2B278B-2783-4506-AAD5-C15A5BB6DA1A"
                    },
                    edition: "global",
                    name: "Sports",
                    parent: null,
                    path: "https://www.nytimes.com/section/sports",
                    taxonomyId: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    className: "sports",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1,
                    editionName: "Sports",
                    editionPath: "https://www.nytimes.com/section/sports"
                }, {
                    name: "Baseball",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/baseball",
                    taxonomyId: "67CAE5A6-408D-44F3-827B-DD394E0467EF",
                    edition: "",
                    className: "baseball",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Basketball: College",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/ncaabasketball",
                    taxonomyId: "BA1B9016-F2F7-454B-BDF7-D4C58F6D05E9",
                    edition: "",
                    className: "basketballcollege",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Basketball: N.B.A.",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/basketball",
                    taxonomyId: "415FB1AB-3BED-4048-B61A-0E4096CE1DF6",
                    edition: "",
                    className: "basketballnba",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Football: College",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/ncaafootball",
                    taxonomyId: "ABBA0609-90E2-46A3-9AC5-B208ACC6C97B",
                    edition: "",
                    className: "footballcollege",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Football: N.F.L.",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/football",
                    taxonomyId: "F6B9D6C9-97AE-45DB-9686-72E44D8D3DAF",
                    edition: "",
                    className: "footballnfl",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Golf",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/golf",
                    taxonomyId: "9F98FEDB-E7B3-4907-A56E-35320CC4C878",
                    edition: "",
                    className: "golf",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Hockey",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/hockey",
                    taxonomyId: "BD14DADE-D513-4BD9-8AED-0CC63E58606C",
                    edition: "",
                    className: "hockey",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Soccer",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/soccer",
                    taxonomyId: "14F230C0-EBDB-4A78-AF7B-2C90C4739625",
                    edition: "",
                    className: "soccer",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Tennis",
                    parent: "BE66F420-C51B-461D-B487-CACF62E94AAE",
                    path: "https://www.nytimes.com/section/sports/tennis",
                    taxonomyId: "D4DE47DA-76DD-4528-B539-98A6DFEFEFB3",
                    edition: "",
                    className: "tennis",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "0202D0E4-C59B-479A-BD42-6F1766459781"
                    },
                    edition: "domestic",
                    name: "Arts",
                    parent: null,
                    path: "https://www.nytimes.com/section/arts",
                    taxonomyId: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    className: "arts",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Art & Design",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/section/arts/design",
                    taxonomyId: "AB35105B-5032-41D9-86B1-06A221411B22",
                    edition: "",
                    className: "artdesign",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Dance",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/section/arts/dance",
                    taxonomyId: "21A8F511-CA05-4797-AF76-17B61D3964CD",
                    edition: "",
                    className: "dance",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Movies",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/section/movies",
                    taxonomyId: "62BF6D00-C2D2-420E-9986-791EECA152C9",
                    edition: "",
                    className: "movies",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Music",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/section/arts/music",
                    taxonomyId: "E0A8CBEB-DDB5-4ADF-B5A4-60CB484ED991",
                    edition: "",
                    className: "music",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Pop Culture",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/spotlight/pop-culture",
                    taxonomyId: "",
                    edition: "",
                    className: "popculture",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Television",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/section/arts/television",
                    taxonomyId: "EF6D2985-BB93-4771-8155-CC3E2B5A7C73",
                    edition: "",
                    className: "television",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Theater",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/section/theater",
                    taxonomyId: "21D5B838-29CC-46D3-9006-879CAABC8F08",
                    edition: "",
                    className: "theater",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Watching",
                    parent: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8",
                    path: "https://www.nytimes.com/watching",
                    taxonomyId: "JKAIDDF567-29CC-46D3-9006-879CAABC8F08",
                    edition: "",
                    className: "watching",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        domestic: "C5BFA7D5-359C-427B-90E6-6B7245A6CDD8"
                    },
                    edition: "global",
                    name: "Arts",
                    parent: null,
                    path: "https://www.nytimes.com/section/arts",
                    taxonomyId: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    className: "arts",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1,
                    editionName: "Arts",
                    editionPath: "https://www.nytimes.com/section/arts"
                }, {
                    name: "Art & Design",
                    parent: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    path: "https://www.nytimes.com/section/arts/design",
                    taxonomyId: "AB35105B-5032-41D9-86B1-06A221411B22",
                    edition: "",
                    className: "artdesign",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Dance",
                    parent: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    path: "https://www.nytimes.com/section/arts/dance",
                    taxonomyId: "21A8F511-CA05-4797-AF76-17B61D3964CD",
                    edition: "",
                    className: "dance",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Movies",
                    parent: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    path: "https://www.nytimes.com/section/movies",
                    taxonomyId: "62BF6D00-C2D2-420E-9986-791EECA152C9",
                    edition: "",
                    className: "movies",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Music",
                    parent: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    path: "https://www.nytimes.com/section/arts/music",
                    taxonomyId: "E0A8CBEB-DDB5-4ADF-B5A4-60CB484ED991",
                    edition: "",
                    className: "music",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "N.Y.C. Events Guide",
                    parent: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    path: "https://www.nytimes.com/events/",
                    taxonomyId: "1B3D562C-A3F9-4083-9B6E-60C8A1F3FFB0",
                    edition: "",
                    className: "nyceventsguide",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Television",
                    parent: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    path: "https://www.nytimes.com/section/arts/television",
                    taxonomyId: "EF6D2985-BB93-4771-8155-CC3E2B5A7C73",
                    edition: "",
                    className: "television",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Theater",
                    parent: "0202D0E4-C59B-479A-BD42-6F1766459781",
                    path: "https://www.nytimes.com/section/theater",
                    taxonomyId: "21D5B838-29CC-46D3-9006-879CAABC8F08",
                    edition: "",
                    className: "theater",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Books",
                    parent: null,
                    path: "https://www.nytimes.com/section/books",
                    taxonomyId: "7B052F64-13C5-4631-ACE4-F1BAA9706061",
                    edition: "",
                    className: "books",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Best Sellers",
                    parent: "7B052F64-13C5-4631-ACE4-F1BAA9706061",
                    path: "https://www.nytimes.com/books/best-sellers/",
                    taxonomyId: "C3EA2DF4-3843-4896-9EF0-EB7CEF2310F9",
                    edition: "",
                    className: "bestsellers",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "By the Book",
                    parent: "7B052F64-13C5-4631-ACE4-F1BAA9706061",
                    path: "https://www.nytimes.com/column/by-the-book",
                    taxonomyId: "B534AF80-3CBB-43E4-8ACE-3ADF43783A5A",
                    edition: "",
                    className: "bythebook",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "The Book Review",
                    parent: "7B052F64-13C5-4631-ACE4-F1BAA9706061",
                    path: "https://www.nytimes.com/section/books/review",
                    taxonomyId: "BBBC6AB4-3383-4435-98FA-3B7D3B34B571",
                    edition: "",
                    className: "thebookreview",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Book Review Podcast",
                    parent: "7B052F64-13C5-4631-ACE4-F1BAA9706061",
                    path: "https://www.nytimes.com/column/book-review-podcast",
                    taxonomyId: "4098F2BC-D74A-4EB3-8156-9753D40E6658",
                    edition: "",
                    className: "bookreviewpodcast",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Globetrotting",
                    parent: "7B052F64-13C5-4631-ACE4-F1BAA9706061",
                    path: "https://www.nytimes.com/interactive/2019/01/19/books/new-books-international.html",
                    taxonomyId: "7DF50B73-3F77-A8D1-F66A-2964450790A9",
                    edition: "",
                    className: "globetrotting",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "CC9E2674-F6C4-4A39-813B-F5AB0C515CEA"
                    },
                    edition: "domestic",
                    name: "Style",
                    parent: null,
                    path: "https://www.nytimes.com/section/style",
                    short_name: "Style",
                    taxonomyId: "B3DFBD82-F298-43B3-9458-219B4F6AA2A5",
                    className: "style",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Men's Style",
                    parent: "B3DFBD82-F298-43B3-9458-219B4F6AA2A5",
                    path: "https://www.nytimes.com/section/fashion/mens-style",
                    taxonomyId: "7A870CC7-2938-4C8E-B8F2-BD54465ECB58",
                    edition: "",
                    className: "mensstyle",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "On the Runway",
                    parent: "B3DFBD82-F298-43B3-9458-219B4F6AA2A5",
                    path: "https://www.nytimes.com/column/on-the-runway",
                    taxonomyId: "38E82E5A-D1EE-4A54-BC61-9155577ABAED",
                    edition: "",
                    className: "ontherunway",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Love",
                    parent: "B3DFBD82-F298-43B3-9458-219B4F6AA2A5",
                    path: "https://www.nytimes.com/section/fashion/weddings",
                    taxonomyId: "D0F14EC9-05BC-4188-AE41-A4CD18FD19AD",
                    edition: "",
                    className: "weddings",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        domestic: "B3DFBD82-F298-43B3-9458-219B4F6AA2A5"
                    },
                    edition: "global",
                    name: "Style",
                    parent: null,
                    path: "https://www.nytimes.com/section/style",
                    short_name: "Style",
                    taxonomyId: "CC9E2674-F6C4-4A39-813B-F5AB0C515CEA",
                    className: "style",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1,
                    editionName: "Style",
                    editionPath: "https://www.nytimes.com/section/style"
                }, {
                    name: "Men's Style",
                    parent: "CC9E2674-F6C4-4A39-813B-F5AB0C515CEA",
                    path: "https://www.nytimes.com/section/fashion/mens-style",
                    taxonomyId: "7A870CC7-2938-4C8E-B8F2-BD54465ECB58",
                    edition: "",
                    className: "mensstyle",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "On the Runway",
                    parent: "CC9E2674-F6C4-4A39-813B-F5AB0C515CEA",
                    path: "https://www.nytimes.com/column/on-the-runway",
                    taxonomyId: "38E82E5A-D1EE-4A54-BC61-9155577ABAED",
                    edition: "",
                    className: "ontherunway",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Love",
                    parent: "CC9E2674-F6C4-4A39-813B-F5AB0C515CEA",
                    path: "https://www.nytimes.com/section/fashion/weddings",
                    taxonomyId: "D0F14EC9-05BC-4188-AE41-A4CD18FD19AD",
                    edition: "",
                    className: "weddings",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        global: "FDEFB811-B483-4C3D-A25A-FD07BE5EAD96"
                    },
                    edition: "domestic",
                    name: "Food",
                    parent: null,
                    path: "https://www.nytimes.com/section/food",
                    short_name: "Food",
                    taxonomyId: "D9C94A2B-0364-4D25-8383-592CC66F82D4",
                    className: "food",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Cooking",
                    parent: "D9C94A2B-0364-4D25-8383-592CC66F82D4",
                    path: "https://cooking.nytimes.com",
                    taxonomyId: "EC43C53C-07AC-42DF-8EA3-34F4EFCD6524",
                    edition: "",
                    className: "cooking",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Restaurant Search",
                    parent: "D9C94A2B-0364-4D25-8383-592CC66F82D4",
                    path: "https://www.nytimes.com/reviews/dining",
                    taxonomyId: "63AB32FE-1AA9-4C10-85CF-86088BC725B7",
                    edition: "",
                    className: "restaurantsearch",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    alternate_editions: {
                        domestic: "D9C94A2B-0364-4D25-8383-592CC66F82D4"
                    },
                    edition: "global",
                    name: "Food",
                    parent: null,
                    path: "https://www.nytimes.com/section/food",
                    short_name: "Food",
                    taxonomyId: "FDEFB811-B483-4C3D-A25A-FD07BE5EAD96",
                    className: "food",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1,
                    editionName: "Food",
                    editionPath: "https://www.nytimes.com/section/food"
                }, {
                    name: "Cooking",
                    parent: "FDEFB811-B483-4C3D-A25A-FD07BE5EAD96",
                    path: "https://cooking.nytimes.com",
                    taxonomyId: "EC43C53C-07AC-42DF-8EA3-34F4EFCD6524",
                    edition: "",
                    className: "cooking",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Restaurant Search",
                    parent: "FDEFB811-B483-4C3D-A25A-FD07BE5EAD96",
                    path: "https://www.nytimes.com/reviews/dining",
                    taxonomyId: "63AB32FE-1AA9-4C10-85CF-86088BC725B7",
                    edition: "",
                    className: "restaurantsearch",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Travel",
                    parent: null,
                    path: "https://www.nytimes.com/section/travel",
                    taxonomyId: "FDA10AC4-4738-4099-91E8-15584765C8D7",
                    edition: "",
                    className: "travel",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Magazine",
                    parent: null,
                    path: "https://www.nytimes.com/section/magazine",
                    taxonomyId: "E57A148E-0CB9-4C02-966D-28B119710151",
                    edition: "",
                    className: "magazine",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "T Magazine",
                    parent: null,
                    path: "https://www.nytimes.com/section/t-magazine",
                    taxonomyId: "052C33AD-1404-4DB6-AA70-0901DB1AD95B",
                    edition: "",
                    className: "tmagazine",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Real Estate",
                    parent: null,
                    path: "https://www.nytimes.com/section/realestate",
                    taxonomyId: "92720057-BCB6-4BDB-9351-12F29393259F",
                    edition: "",
                    className: "realestate",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "Commercial",
                    parent: "92720057-BCB6-4BDB-9351-12F29393259F",
                    path: "https://www.nytimes.com/section/realestate/commercial",
                    taxonomyId: "00B951BD-2AE1-4E28-BAF7-18D1FAA6AA97",
                    edition: "",
                    className: "commercial",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Find A Home",
                    parent: "92720057-BCB6-4BDB-9351-12F29393259F",
                    path: "https://www.nytimes.com/real-estate/find-a-home",
                    taxonomyId: "9AE506A2-9337-4A5E-8499-E3781316FF13",
                    edition: "",
                    className: "findahome",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Mortgage Calculator",
                    parent: "92720057-BCB6-4BDB-9351-12F29393259F",
                    path: "https://www.nytimes.com/real-estate/mortgage-calculator",
                    taxonomyId: "9AE506A2-9337-4A5E-8499-E3781AGC457F13",
                    edition: "",
                    className: "mortgagecalculator",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "My Real Estate",
                    parent: "92720057-BCB6-4BDB-9351-12F29393259F",
                    path: "https://www.nytimes.com/real-estate/my-real-estate",
                    taxonomyId: "E4FBD546-F591-4961-9A7B-1348506F24ED",
                    edition: "",
                    className: "myrealestate",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "The High End",
                    parent: "92720057-BCB6-4BDB-9351-12F29393259F",
                    path: "https://www.nytimes.com/real-estate/the-high-end",
                    taxonomyId: "E4FBD546-F591-5768-9A7B-1348506F24ED",
                    edition: "",
                    className: "highend",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "List Your Home",
                    parent: "92720057-BCB6-4BDB-9351-12F29393259F",
                    path: "https://nytimesads.gtspayments.com",
                    taxonomyId: "E4FBB546-F591-4961-9A7B-139827396F24ED",
                    edition: "",
                    className: "listyourhome",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Obituaries",
                    parent: null,
                    path: "https://www.nytimes.com/section/obituaries",
                    taxonomyId: "CEDDB6A8-F7E1-47A2-AC53-E28C616DFCD5",
                    edition: "",
                    className: "obituaries",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Video",
                    parent: null,
                    path: "https://www.nytimes.com/video",
                    taxonomyId: "432A1823-3F24-43C0-8004-79088F94E754",
                    edition: "",
                    className: "video",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "U.S. & Politics",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/us-politics",
                    taxonomyId: "FAF08756-1545-4233-B9D6-FEFA1115CFA6",
                    edition: "",
                    className: "uspolitics",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "International",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/world",
                    taxonomyId: "63D27866-95B7-47BC-9B53-E250CA21E182",
                    edition: "",
                    className: "international",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "N.Y.",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/n-y-region",
                    taxonomyId: "281517E5-9CC5-472C-B46A-B9CF9AAE72F2",
                    edition: "",
                    className: "ny",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Op-Docs",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/op-docs",
                    taxonomyId: "C5D5043A-85D5-4E97-BE08-8D0278F97101",
                    edition: "",
                    className: "opdocs",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Opinion",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/opinion",
                    taxonomyId: "6AB2572C-5341-4979-8D74-E38528FE0159",
                    edition: "",
                    className: "opinion",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Times Documentaries",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/times-documentaries",
                    taxonomyId: "50BEEE33-737A-4EBE-98D7-65593C23AE6C",
                    edition: "",
                    className: "timesdocumentaries",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Business",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/business",
                    taxonomyId: "18CC8E0D-C9B6-4A81-8EB6-9AC98B296DDB",
                    edition: "",
                    className: "business",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Tech",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/technology",
                    taxonomyId: "457A829A-6C9D-47A9-B91E-2212766B6648",
                    edition: "",
                    className: "tech",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Culture",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/arts",
                    taxonomyId: "4CF1B9A6-4476-45CF-AF12-53B7EB39847F",
                    edition: "",
                    className: "culture",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Style",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/style",
                    taxonomyId: "3BAEEBB7-10C5-43F9-A728-26DCE4D44B48",
                    edition: "",
                    className: "style",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "T Magazine",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/t-magazine",
                    taxonomyId: "1CB4FCE4-8D2A-4313-9EBC-32F88BD90A35",
                    edition: "",
                    className: "tmagazine",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Health",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/health",
                    taxonomyId: "6872F49C-F4A1-458D-8410-B253D44B8E9C",
                    edition: "",
                    className: "health",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Food",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/dining-and-wine",
                    taxonomyId: "A3E833FD-09AE-4B1B-B4A7-AED0CF1CC74C",
                    edition: "",
                    className: "food",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Travel",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/travel",
                    taxonomyId: "380D52A1-A468-4069-BCA9-52D6E2625D63",
                    edition: "",
                    className: "travel",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Sports",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/sports",
                    taxonomyId: "DAB634A7-D513-49CA-BBEF-9FB321BF6798",
                    edition: "",
                    className: "sports",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Real Estate",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/real-estate",
                    taxonomyId: "64C01CC7-C6F7-4E1B-A4FD-69B6D5B647FE",
                    edition: "",
                    className: "realestate",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Science",
                    parent: "432A1823-3F24-43C0-8004-79088F94E754",
                    path: "https://www.nytimes.com/video/science",
                    taxonomyId: "6F4D6D03-8D74-4A7C-939D-2ADEE18731CB",
                    edition: "",
                    className: "science",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "The Upshot",
                    parent: null,
                    path: "https://www.nytimes.com/section/upshot",
                    taxonomyId: "D64FAE4C-4425-4E5A-B898-6C8CB59F9957",
                    edition: "",
                    className: "theupshot",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Reader Center",
                    parent: null,
                    path: "https://www.nytimes.com/section/reader-center",
                    taxonomyId: "2745EC29-5385-40F2-93D4-F7E6EF3B518B",
                    edition: "",
                    className: "readercenter",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Parenting",
                    parent: null,
                    path: "https://parenting.nytimes.com/",
                    taxonomyId: "",
                    edition: "",
                    className: "parenting",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Wirecutter",
                    parent: null,
                    path: "https://thewirecutter.com/",
                    taxonomyId: "",
                    edition: "",
                    className: "wirecutter",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Live Events",
                    parent: null,
                    path: "http://nytconferences.com/",
                    taxonomyId: "",
                    edition: "",
                    className: "liveeventsconference",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "NYT Food Festival",
                    parent: null,
                    path: "http://nytfoodfestival.com/",
                    taxonomyId: "",
                    edition: "",
                    className: "nytfoodfestival",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Conferences",
                    parent: null,
                    path: null,
                    taxonomyId: "0442C365-4B63-4B63-B9DE-3C28319CB622",
                    edition: "",
                    className: "conferences",
                    show_in_nav: !0,
                    hasSubsections: !0,
                    level: 1
                }, {
                    name: "DealBook",
                    parent: "0442C365-4B63-4B63-B9DE-3C28319CB622",
                    path: "https://www.nytdealbookconference.com/",
                    taxonomyId: "0273790F-9086-41CE-82F1-B83A0FAEED21",
                    edition: "",
                    className: "dealbookconference",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "International Luxury Conference",
                    parent: "0442C365-4B63-4B63-B9DE-3C28319CB622",
                    path: "https://www.nytluxury.com",
                    taxonomyId: "53D738B7-9EAE-4650-8E5C-28B3F19B4C88",
                    edition: "",
                    className: "internationalluxuryconference",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "New Work Summit",
                    parent: "0442C365-4B63-4B63-B9DE-3C28319CB622",
                    path: "https://www.newworksummit.com",
                    taxonomyId: "61F54F21-A0A9-46B9-BDC5-22BDDAD4007A",
                    edition: "",
                    className: "newworksummit",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Oil & Money",
                    parent: "0442C365-4B63-4B63-B9DE-3C28319CB622",
                    path: "https://www.oilandmoney.com",
                    taxonomyId: "10C4EAE9-339E-456F-A1F0-7C870299C310",
                    edition: "",
                    className: "oilandmoney",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "New Rules Summit",
                    parent: "0442C365-4B63-4B63-B9DE-3C28319CB622",
                    path: "https://www.newrulessummit.com",
                    taxonomyId: "",
                    edition: "",
                    className: "newrulessummit",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 2
                }, {
                    name: "Crossword",
                    parent: null,
                    path: "https://www.nytimes.com/crosswords",
                    taxonomyId: "5C13EEDD-D905-4D8C-A284-6859EA434563",
                    edition: "",
                    className: "crossword",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Newsletters",
                    parent: null,
                    path: "https://www.nytimes.com/newsletters",
                    taxonomyId: "5C13EEDD-D905-4D8C-A284-6859EA434563",
                    edition: "",
                    className: "newsletters",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "The Learning Network",
                    parent: null,
                    path: "https://www.nytimes.com/section/learning",
                    taxonomyId: "99C17804-A343-4A76-BF04-F579GHDH93948D1",
                    edition: "",
                    className: "learningnetwork",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Multimedia",
                    parent: null,
                    path: "https://www.nytimes.com/section/multimedia",
                    taxonomyId: "8FB1308A-FFE4-4BED-ADF6-659A680D0884",
                    edition: "",
                    className: "multimedia",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Photography",
                    parent: null,
                    path: "https://www.nytimes.com/section/lens",
                    taxonomyId: "108F7745-BAD9-4630-87BB-4FB4ED7CAA11",
                    edition: "",
                    className: "photography",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Podcasts",
                    parent: null,
                    path: "https://www.nytimes.com/spotlight/podcasts",
                    taxonomyId: "108F7745-BAD9-4630-87BB-4FNXNDVA11",
                    edition: "",
                    className: "podcasts",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "NYT Store",
                    parent: null,
                    path: "https://www.nytimes.com/store/?&t=qry542&utm_source=nytimes&utm_medium=HPB&utm_content=hp_browsetree&utm_campaign=NYT-HP&module=SectionsNav&action=click&region=TopBar&version=BrowseTree&contentCollection=NYT%20Store&contentPlacement=2&pgtype=Homepage",
                    taxonomyId: "6101A43A-8BDE-45FF-AAD5-EF7396F83AC9",
                    edition: "",
                    className: "nytstore",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "NYT Wine Club",
                    parent: null,
                    path: "https://www.nytwineclub.com/",
                    taxonomyId: "52A8A3F2-F138-425B-A63F-722E2BBC9372",
                    edition: "",
                    className: "nytwineclub",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "School of NYT",
                    parent: null,
                    path: "https://nytedu.com",
                    taxonomyId: "081347DE-FF02-4B6C-889B-9AE59F391833",
                    edition: "",
                    className: "nyteducation",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Times Journeys",
                    parent: null,
                    path: "https://www.nytimes.com/times-journeys/?utm_source=nytimes&utm_medium=HPLink&utm_content=hp_browsetree&utm_campaign=NYT-HP&module=SectionsNav&action=click&region=TopBar&version=BrowseTree&contentCollection=Times%20Journeys&contentPlacement=2&pgtype=Homepage",
                    taxonomyId: "797F8D17-1632-435D-B3DB-708FC4B4BAEF",
                    edition: "",
                    className: "timesjourneys",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Subscribe",
                    parent: null,
                    path: "https://www.nytimes.com/seeallnav",
                    taxonomyId: "FED853D9-D192-46F6-8D18-447803EB4A7B",
                    edition: "",
                    className: "subscribe",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Manage Account",
                    parent: null,
                    path: "https://myaccount.nytimes.com",
                    taxonomyId: "61E9BFEA-F509-4BCA-ADC6-32C5A30B83FD",
                    edition: "",
                    className: "manageaccount",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Today's Paper",
                    parent: null,
                    path: "https://www.nytimes.com/section/todayspaper",
                    taxonomyId: "0DAA7CFE-196B-4878-B899-5363070098EC",
                    edition: "",
                    className: "todayspaper",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Tools & Services",
                    parent: null,
                    path: "http://www.nytimes.com/marketing/tools-and-services/",
                    taxonomyId: "6BBF5308-5EA3-4B25-885F-393F7372F27F",
                    edition: "",
                    className: "toolsservices",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Jobs",
                    parent: null,
                    path: "https://www.nytimes.com/section/jobs",
                    taxonomyId: "288E1691-DA3B-457A-8B06-D10A1351E7B9",
                    edition: "",
                    className: "jobs",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }, {
                    name: "Corrections",
                    parent: null,
                    path: "https://www.nytimes.com/section/corrections",
                    taxonomyId: "6DD9D623-A907-4623-9C5A-9409972B76DA",
                    edition: "",
                    className: "corrections",
                    show_in_nav: !0,
                    hasSubsections: !1,
                    level: 1
                }],
                a11yEnabled: !1,
                scrollValue: null
            };
            var R = n("9rZX"),
                z = n.n(R),
                V = Object(y.css)("display:inline;"),
                U = Object(y.css)("background-color:rgba(255,255,255,0);z-index:", C.a.zIndex.navigationModal, ";"),
                J = Object(y.css)("border:none;height:100%;left:0;padding:none;top:0;width:190px;"),
                H = function(e) {
                    function t() {}
                    return b()(t, e), p()(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "renderModalContent",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(i.Component);

            function q(e) {}
            H.displayName = "NavigationModal", H.defaultProps = {
                modalContent: function() {},
                modalIsOpen: !1
            }, n.d(t, "a", (function() {})), q.displayName = "DesktopNav"
        },
        JGzp: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("lwsE"),
                s = n.n(i),
                r = n("W8MJ"),
                l = n.n(r),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                h = n.n(m),
                f = n("q1tI"),
                v = n.n(f),
                g = (n("17x9"), n("41jq")),
                b = n("X6oL"),
                y = n.n(b),
                w = n("ZKN5"),
                k = n("i9j7"),
                C = n.n(k),
                B = n("wXC7"),
                E = n.n(B),
                T = n("KeRS"),
                A = n.n(T),
                x = (n("tUrg"), n("f3/d"), n("a1Th"), n("Btvt"), n("UmXO")),
                O = function(e) {
                    function t(e) {}
                    return h()(t, e), l()(t, [{
                        key: "handleClick",
                        value: function(e, t) {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component);
            O.displayName = "Accordion", O.defaultProps = {
                allowMultiple: !1,
                alwaysOpen: !1,
                className: " ",
                children: null
            };
            var S = n("lSNA"),
                N = n.n(S),
                D = function(e) {
                    function t() {}
                    return h()(t, e), l()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component);
            D.displayName = "AccordionItem", D.defaultProps = {
                onClick: function() {},
                expanded: !1,
                expandedClassName: "",
                className: "",
                uid: "",
                children: null
            };
            var _ = function(e) {
                function t() {}
                return h()(t, e), l()(t, [{
                    key: "render",
                    value: function() {}
                }]), t
            }(f.Component);
            _.displayName = "AccordionItemBody", _.defaultProps = {
                expanded: !1,
                className: "",
                uid: "",
                children: null
            };
            var I = Object(x.css)("cursor:pointer;margin:0;");

            function F(e) {}
            F.displayName = "AccordionItemHeader", F.defaultProps = {
                expanded: !1,
                className: "",
                children: null,
                uid: "",
                onClick: null
            };
            n("SMB2");
            var M = Object(x.css)(E.a.a11y.visuallyHidden, ";"),
                P = Object(x.css)("list-style:none;margin:0;padding:0;"),
                L = Object(x.css)("&::before{background-color:$white;border-bottom:1px solid ", E.a.color.gray60, ";border-top:2px solid ", E.a.color.gray60, ";content:'';display:block;height:1px;margin-top:0;}", E.a.breakpoint.large, "{margin:0 auto;max-width:", E.a.breakpoint.maxDesktopContentWidth, "px;padding:0 3% 9px;}.NYTApp &{display:none;}@media print{display:none;}"),
                j = Object(x.css)("padding:0 20px;", E.a.breakpoint.medium, "{padding:0 3%;}", E.a.breakpoint.large, "{padding:0;}"),
                R = Object(x.css)("display:flex;flex-flow:row;"),
                z = Object(x.css)("display:block;height:44px;vertical-align:middle;width:184px;"),
                V = Object(x.css)("margin:18px 0 0 auto;"),
                U = Object(x.css)("color:", E.a.color.blue30, ";font-family:", E.a.font.franklin, ";font-size:11px;font-style:normal;font-weight:", E.a.font.weight.book, ";line-height:11px;text-decoration:none;"),
                J = Object(x.css)("display:block;", E.a.breakpoint.large, "{display:none;}"),
                H = Object(x.css)("display:none;", E.a.breakpoint.large, "{display:block;}"),
                q = Object(x.css)("display:flex;margin-top:10px;min-width:600px;"),
                G = Object(x.css)("flex:1;"),
                W = Object(x.css)("border-left:1px solid ", E.a.color.gray60, ";flex:1;padding-left:15px;"),
                Y = Object(x.css)("color:", E.a.color.gray20, ";font-size:13px;font-weight:", E.a.font.weight.bold, ";font-family:", E.a.font.franklin, ";height:25px;line-height:15px;margin:0;text-transform:uppercase;width:150px;"),
                X = Object(x.css)("margin-bottom:5px;white-space:nowrap;&:last-child{margin-bottom:10px;}"),
                K = Object(x.css)("color:", E.a.color.black, ";display:inline-block;font-family:", E.a.font.franklin, ";text-decoration:none;text-transform:capitalize;width:150px;&:hover{cursor:pointer;text-decoration:underline;}body.dark &{color:", E.a.color.white, ";}"),
                Q = Object(x.css)("&.desktop{display:none;}", E.a.breakpoint.medium, "{&.desktop{display:block;}&.smartphone{display:none;}}"),
                Z = Object(x.css)("border-top:1px solid ", E.a.color.gray70, ";color:", E.a.color.gray20, ";font-family:", E.a.font.franklin, ";font-size:13px;font-weight:", E.a.font.weight.bold, ";height:44px;letter-spacing:0.04rem;line-height:44px;text-transform:uppercase;.accordionExpanded &{color:", E.a.color.gray45, ";}"),
                $ = Object(x.css)(P, ";columns:2;padding:0 0 15px;"),
                ee = Object(x.css)("height:34px;line-height:34px;list-style-type:none;&.desktop{display:none;}", E.a.breakpoint.medium, "{&.desktop{display:block;}&.smartphone{display:none;}}"),
                te = Object(x.css)("color:", E.a.color.gray20, ";display:block;font-family:", E.a.font.franklin, ";font-size:15px;font-weight:", E.a.font.weight.medium, ";height:34px;line-height:34px;text-decoration:none;text-transform:capitalize;"),
                ne = Object(x.css)(K, ";font-size:14px;font-weight:", E.a.font.weight.medium, ";height:23px;line-height:16px;"),
                ae = Object(x.css)(K, ";font-size:16px;font-weight:", E.a.font.weight.bold, ";height:25px;line-height:15px;padding-bottom:0;"),
                oe = Object(x.css)(K, ";font-size:11px;font-weight:", E.a.font.weight.medium, ";height:23px;line-height:21px;"),
                ie = Object(x.css)(P, ";border-top:1px solid ", E.a.color.gray60, ";margin-top:2px;padding-top:10px;"),
                se = Object(x.css)("display:inline-block;height:13px;width:13px;margin-right:7px;vertical-align:middle;"),
                re = Object(x.css)(se, ";"),
                le = Object(x.css)(se, ";"),
                ce = Object(x.css)(se, ";"),
                de = Object(x.css)(se, ";"),
                ue = {
                    listings: "Listings & More"
                },
                pe = function(e) {
                    function t() {}
                    return h()(t, e), l()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component);
            pe.displayName = "SiteIndexAccordion", pe.defaultProps = {
                handleAccordionClick: null,
                indexData: []
            };
            n("dRSK"), n("Z2Ku"), n("L9s1"), n("bHtr");
            var me = o()("polygon", {
                    points: "0,-93.6 0,-86.9 6.6,-93.6"
                }),
                he = o()("polygon", {
                    points: "0.9,-86 7.5,-86 7.5,-92.6"
                }),
                fe = o()("polygon", {
                    points: "0,-98 0,-94.8 8.8,-94.8 8.8,-86 12,-86 12,-98"
                }),
                ve = o()("path", {
                    d: "M11.9-40c-0.4,1.1-1.2,1.9-2.3,2.4V-40l1.3-1.2l-1.3-1.2V-44c1.2-0.1,2-1,2-2c0-1.4-1.3-1.9-2.1-1.9c-0.2,0-0.3,0-0.6,0.1v0.1c0.1,0,0.2,0,0.3,0c0.5,0,0.9,0.2,0.9,0.7c0,0.4-0.3,0.7-0.8,0.7c-1.3,0-2.8-1.1-4.5-1.1c-1.5,0-2.5,1.1-2.5,2.2c0,1.1,0.6,1.5,1.3,1.7l0-0.1c-0.2-0.1-0.4-0.4-0.4-0.7c0-0.5,0.5-0.9,1-0.9C5.7-45.1,8-44,9.4-44h0.1v1.7l-1.3,1.1L9.5-40v2.4c-0.5,0.2-1.1,0.3-1.7,0.3c-2.2,0-3.6-1.3-3.6-3.5c0-0.5,0.1-1,0.2-1.5l1.1-0.5v4.9l2.2-1v-5l-3.3,1.5c0.3-1,1-1.7,1.8-2l0,0c-2.2,0.5-4.3,2.1-4.3,4.6c0,2.9,2.4,4.8,5.2,4.8C10.2-35.1,11.9-37.1,11.9-40L11.9-40z"
                }),
                ge = o()("path", {
                    d: "M12.2-23.7c-0.2,0-0.4,0.2-0.4,0.4v0.4L0.4-19.1v2.3l3,1l-0.2,0.6c-0.3,0.8,0.1,1.8,0.9,2.1l1.7,0.7c0.2,0.1,0.4,0.1,0.6,0.1c0.6,0,1.3-0.4,1.5-1l0.4-0.9l3.5,1.2v0.4c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4v-10.7C12.6-23.5,12.4-23.7,12.2-23.7M7.1-13.6c-0.2,0.4-0.6,0.6-1,0.4l-1.7-0.7c-0.4-0.2-0.6-0.6-0.4-1l0.3-0.7l3.3,1.1L7.1-13.6z"
                }),
                be = o()("path", {
                    d: "M13.1-60.3H3.5v-10.5h9.6V-60.3zM13.1-71.6H3.5c-0.5,0-0.9,0.4-0.9,0.9v2.2H0.9c-0.5,0-0.9,0.4-0.9,0.9v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9v-10.5C14-71.2,13.6-71.6,13.1-71.6"
                }),
                ye = o()("polygon", {
                    points: "10.9,-69 5.2,-69 5.2,-68.1 11.4,-68.1 11.4,-69"
                }),
                we = o()("rect", {
                    x: "5.2",
                    y: "-67.3",
                    width: "6.1",
                    height: "0.9"
                }),
                ke = o()("rect", {
                    x: "5.2",
                    y: "-65.5",
                    width: "6.1",
                    height: "0.9"
                }),
                Ce = o()("path", {
                    d: "M12,6.5H6.5V12H1V6.5h5.5V1H12V6.5zM12,0H1C0.4,0,0,0.5,0,1v11c0,0.6,0.4,1,1,1h11c0.5,0,1-0.4,1-1V1C13,0.5,12.5,0,12,0"
                }),
                Be = o()("path", {
                    d: "M13.1,11.7H3.5V1.2h9.6V11.7zM13.1,0.4H3.5C3,0.4,2.6,0.8,2.6,1.2v2.2H0.9C0.4,3.4,0,3.8,0,4.3v5.2v1.5c0,0.8,0.8,1.5,1.8,1.5h1.7h0h7.4h2.2c0.5,0,0.9-0.4,0.9-0.9V1.2C14,0.8,13.6,0.4,13.1,0.4"
                }),
                Ee = o()("polygon", {
                    points: "10.9,3 5.2,3 5.2,3.9 11.4,3.9 11.4,3"
                }),
                Te = o()("rect", {
                    x: "5.2",
                    y: "4.7",
                    width: "6.1",
                    height: "0.9"
                }),
                Ae = o()("rect", {
                    x: "5.2",
                    y: "6.5",
                    width: "6.1",
                    height: "0.9"
                }),
                xe = o()("path", {
                    d: "M12,2.9L9.6,5.2c-0.1,0.1-0.3,0.1-0.4,0C9.1,5.2,9.1,5,9.3,4.9l2.4-2.4c-0.2-0.2-0.3-0.3-0.5-0.5L8.7,4.3c-0.1,0.1-0.3,0.1-0.4,0C8.2,4.3,8.2,4.1,8.4,4l2.4-2.4c-0.3-0.3-0.5-0.5-0.5-0.5L7.6,3.4C7.1,4,6.8,5.1,7.1,5.8c-1.4,1-4.6,3.5-5.1,4c-0.8,0.8-0.4,1.8-0.3,1.9c0,0,0,0,0,0c0,0,0,0,0,0c0.1,0.1,1.1,0.5,1.9-0.3c0.4-0.4,2.9-3.6,3.9-5C8.4,6.9,9.6,6.6,10.2,6l2.3-2.6C12.5,3.4,12.3,3.2,12,2.9z"
                }),
                Oe = o()("path", {
                    d: "M0.8,1.9l0.3-0.3c0.9-0.9,3.2,1.1,3.8,1.7s0.9,1.8,0.4,2.6c1.4,1.1,4.6,3.5,5,3.9c0.8,0.8,0.4,1.8,0.3,1.9c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0.1-1.1,0.5-1.9-0.3c-0.4-0.4-2.9-3.7-4-5.1C3.9,6.7,2.9,6.4,2.3,5.8S-0.2,2.9,0.8,1.9z"
                }),
                Se = {
                    iconCrossword: function(e) {},
                    iconDigitalSubscriptions: function(e) {},
                    iconHomeDelivery: function(e) {},
                    iconCooking: function(e) {}
                },
                Ne = {
                    iconCrossword: re,
                    iconDigitalSubscriptions: le,
                    iconHomeDelivery: ce,
                    iconCooking: de
                },
                De = "Subscribe",
                _e = function(e) {};
            _e.displayName = "SiteIndexSubscribe", _e.defaultProps = {
                subscribeData: {},
                user: null,
                theme: null
            };
            var Ie = Object(g.withTheme)(_e),
                Fe = function(e, t) {};
            Fe.displayName = "renderSections";
            var Me = function(e) {};
            Me.displayName = "SiteIndexSections", Me.defaultProps = {
                user: {},
                indexData: [],
                subscribeData: {}
            };
            var Pe, Le = Me,
                je = n("pCqE"),
                Re = "Site Index",
                ze = "Go to Home Page »",
                Ve = y()()(Pe = Object(w.a)(Pe = function(e) {
                    function t() {}
                    return h()(t, e), l()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component)) || Pe) || Pe;
            Ve.defaultProps = {
                theme: null,
                user: {}
            };
            t.a = Object(g.withTheme)(Ve)
        },
        JwCr: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("yFJX")).default;
            t.default = o
        },
        K0fD: function(e, t, n) {
            "use strict";
            var a, o, i, s, r = n("gcR/"),
                l = n.n(r),
                c = n("lwsE"),
                d = n.n(c),
                u = n("W8MJ"),
                p = n.n(u),
                m = n("a1gu"),
                h = n.n(m),
                f = n("Nsbk"),
                v = n.n(f),
                g = n("7W2i"),
                b = n.n(g),
                y = n("q1tI"),
                w = n.n(y),
                k = (n("17x9"), n("X6oL")),
                C = n.n(k),
                B = n("JwCr"),
                E = n.n(B),
                T = n("Vc97"),
                A = n("u1H9"),
                x = n("b4QB"),
                O = n("f+2V"),
                S = (n("84bF"), n("UmXO")),
                N = n("SwM9"),
                D = n("wXC7"),
                _ = n.n(D),
                I = _.a.color,
                F = _.a.font,
                M = _.a.breakpoint,
                P = Object(S.css)(N.b.layout.news, " margin-top:32px;margin-bottom:20px;", M.small, "{margin-top:48px;}"),
                L = Object(S.css)("display:flex;align-items:baseline;border:1px solid ", I.gray50, ";border-radius:2px;padding:", F.size(12), ";line-height:", F.size(20), ";font-size:", F.size(14), ";font-family:", F.franklinBase, ";max-width:419px;&:hover{cursor:pointer;}", M.small, "{align-items:center;justify-content:space-between;}", M.medium, "{font-size:", F.size(15), ";}"),
                j = Object(S.css)("color:", I.gray20, ";"),
                R = Object(S.css)("text-decoration:underline;color:", I.linkColor, ";"),
                z = "This is your one article preview.",
                V = (a = C()(), Object(T.a)(o = a((s = i = function(e) {
                    function t() {}
                    return b()(t, e), p()(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(y.Component), i.defaultProps = {
                    pageCount: 0
                }, o = s)) || o) || o),
                U = (n("a1Th"), n("Btvt"), n("+4HN")),
                J = n("ll1W"),
                H = n("7aZh"),
                q = n("idk4"),
                G = n("3NoI"),
                W = n.n(G),
                Y = n("PxMw"),
                X = n.n(Y),
                K = _.a.color,
                Q = _.a.breakpoint,
                Z = _.a.font,
                $ = _.a.button,
                ee = Object(S.css)($.secondary, ";display:none;width:64px;height:32px;font-size:", Z.size(13), ";letter-spacing:", Z.size(.2), ";font-weight:", Z.weight.mediumBold, ";padding:0;padding-top:3px;"),
                te = Object(S.css)("display:block;color:", K.gray10, ";background-color:rgba(255,255,255,0);border:1px solid ", K.gray10, ";", Q.small, "{&:hover{background-color:", K.gray75, ";}}", Q.medium, "{background-color:", K.gray20, ";border-color:", K.black, ";color:", K.white, ";&:hover{background-color:", K.black, ";border:1px solid ", K.gray10, ";}}"),
                ne = Object(S.css)(Object(H.getCSSSelectors)(["V1", "V2", "V3", "V4", "V5", "V6"]), "{display:none;}"),
                ae = Object(S.css)("display:block;", Q.medium, "{background-color:rgba(0,0,0,0.65);color:", K.white, ";border-color:", K.black, ";&:hover{background-color:rgba(0,0,0,1);}}"),
                oe = Object(S.css)("border-color:", K.gray10, ";color:", K.gray10, ";background-color:transparent;&:hover{border-color:", K.gray10, ";background-color:rgba(0,0,0,0.2);}", ae, ";"),
                ie = Object(S.css)("border-color:", K.gray60, ";color:", K.white, ";background-color:transparent;&:hover{border-color:", K.white, ";background-color:rgba(255,255,255,0.25);}", Q.medium, "{&:hover{border-color:", K.black, ";background-color:", K.black, ";}}", ae, ";"),
                se = Object(S.css)("display:block;background-color:rgba(255,255,255,0);border-color:", K.white, ";color:", K.white, ";&:hover{border-color:", K.white, ";background-color:rgba(255,255,255,0.25);}"),
                re = Object(S.css)("display:block;border-color:", K.gray10, ";color:", K.gray10, ";background-color:transparent;&:hover{border-color:", K.gray10, ";background-color:rgba(0,0,0,0.1);}"),
                le = function(e) {},
                ce = function(e) {},
                de = W()(X.a, {
                    target: "e1q9v17h0"
                })("display:none;", Object(H.getCSSSelectors)(["V1", "V2", "V3", "V4", "V5", "V6"]), "{", ee, ";", ce, ";}"),
                ue = W()("div", {
                    target: "e1q9v17h1"
                })(le, ";"),
                pe = "https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=freex&asset=masthead&application=Free_Experience",
                me = function(e) {},
                he = l()(J.a, {});
            me.defaultProps = {
                LoginButton: function() {},
                route: "",
                colorScheme: "",
                user: {},
                isHorizontalFullbleed: !1,
                pageCount: void 0
            };
            var fe = C()()(Object(T.a)(me)),
                ve = n("HUmG"),
                ge = n("2el9"),
                be = _.a.color,
                ye = _.a.breakpoint,
                we = _.a.font,
                ke = Object(S.css)("display:none;", ye.medium, "{font-weight:", we.weight.mediumBold, ";align-items:center;font-size:", we.size(14), ";font-family:", we.franklinBase, ";margin-top:2px;margin-right:19px;height:12px;letter-spacing:", we.size(.2), ";}", ye.mediumLarge, "{&::after{content:'for full access';margin-left:4px;}}"),
                Ce = Object(S.css)(ye.medium, "{display:flex;color:", be.gray20, ";border-bottom:1px solid ", be.gray40, ";&:hover{color:", be.black, ";border-bottom:1px solid ", be.black, ";}}"),
                Be = Object(S.css)(Object(H.getCSSSelectors)(["V1", "V2", "V3", "V4", "V5", "V6"]), "{display:none;}"),
                Ee = Object(S.css)(ye.medium, "{display:flex;color:", be.white, ";border-bottom:1px solid ", be.gray60, ";&:hover{color:", be.white, ";border-bottom:1px solid ", be.white, ";}}"),
                Te = function(e) {},
                Ae = function(e) {},
                xe = W()("p", {
                    target: "e1o54rla0"
                })("display:none;", Object(H.getCSSSelectors)(["V1", "V2", "V3", "V4", "V5", "V6"]), "{", ke, ";", Ae, ";}"),
                Oe = W()("div", {
                    target: "e1o54rla1"
                })(Te, ";"),
                Se = function(e) {},
                Ne = l()(ge.a, {});
            Se.defaultProps = {
                SubscribeButton: function() {},
                route: "",
                colorScheme: "",
                user: {},
                isHorizontalFullbleed: !1,
                pageCount: void 0
            };
            var De = C()()(Object(T.a)(Se)),
                _e = n("xEGZ"),
                Ie = Object(S.css)("align-items:center;"),
                Fe = function(e) {};
            Fe.displayName = "AnonButtonGroup", Fe.defaultProps = {
                className: void 0,
                route: void 0
            };
            var Me = {
                AnonLoginButton: fe,
                AnonSubscribeButton: De,
                AnonButtonGroup: Fe
            };
            n.d(t, "e", (function() {
                return Pe
            })), n.d(t, "b", (function() {})), n.d(t, "c", (function() {})), n.d(t, "d", (function() {})), n.d(t, "a", (function() {}));
            var Pe = H,
                Le = V,
                je = Me.AnonLoginButton,
                Re = Me.AnonSubscribeButton,
                ze = Me.AnonButtonGroup
        },
        KeRS: function(e, t, n) {
            "use strict";
            var a = n("TqRt"),
                o = n("284h");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, s = a(n("QILm")),
                r = a(n("lwsE")),
                l = a(n("W8MJ")),
                c = a(n("a1gu")),
                d = a(n("Nsbk")),
                u = a(n("7W2i")),
                p = o(n("q1tI")),
                m = (a(n("17x9")), n("41jq")),
                h = n("s5tu"),
                f = (0, m.withTheme)(i = function(e) {
                    function t() {}
                    return (0, u.default)(t, e), (0, l.default)(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(p.Component)) || i;
            f.displayName = "Link";
            var v = f;
            t.default = v
        },
        LHoU: function(e, t) {
            e.exports = "/vi-assets/static-assets/ios-default-homescreen-57x57-dark-e9217fd8efadfc24dc8d474ce214978f.png"
        },
        LMsl: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = s;
            var o = a(n("q1tI")),
                i = (0, n("UmXO").css)("height:56px;width:100%;");

            function s() {}
            s.displayName = "Loading"
        },
        LjBh: function(e, t) {
            e.exports = "/vi-assets/static-assets/favicon-dark-81bb87c2422e6b661822b4c85eba8a5c.ico"
        },
        Lkij: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "c", (function() {})), n.d(t, "d", (function() {})), n.d(t, "b", (function() {})), n.d(t, "e", (function() {})), n.d(t, "f", (function() {
                return v
            }));
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("RW0V");
            var a = n("lSNA"),
                o = n.n(a),
                i = n("J4zp"),
                s = n.n(i),
                r = (n("rGqo"), n("yt8O"), n("Btvt"), n("/8Fb"), n("wYzE")),
                l = n("Fm/i");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {}))), n.push.apply(n, a)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(n, !0).forEach((function(t) {
                        o()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {}))
                }
                return e
            }

            function u() {}

            function p(e, t) {}
            var m = function(e, t) {},
                h = function(e) {};

            function f(e) {}

            function v(e, t) {
                if (e) {
                    var n = Object.entries(e).map((function(e) {
                            var t = s()(e, 2);
                            return {
                                test: t[0],
                                variant: t[1]
                            }
                        })),
                        a = {
                            application: {
                                name: "nyt-vi",
                                environment: vi.env.ENVIRONMENT,
                                dlVersion: l.version
                            },
                            referrer: {
                                url: t
                            }
                        };
                    n.length > 0 && (n.forEach((function(e) {
                        Object(r.a)(d({
                            event: "ab-expose",
                            abtest: e
                        }, a))
                    })), Object(r.a)(d({
                        event: "ab-alloc",
                        abtest: {
                            batch: n
                        }
                    }, a)))
                }
            }
        },
        M4W2: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return new Promise((function(n, a) {
                    var o = function(e) {
                            return e.addEventListener("load", (function() {
                                e.dataset.loaded = !0, n(e)
                            })), e.addEventListener("error", (function(t) {})), e
                        },
                        i = document.querySelector('script[src="'.concat(e, '"]'));
                    if (i) return i.dataset.loaded ? i.dataset.error ? a() : n(i) : o(i);
                    if (t.readyCode && window[t.readyCode] && ("function" != typeof window[t.readyCode] || !1 !== window[t.readyCode]())) return n();
                    var s = Object.assign({
                            asyncProp: !0,
                            deferProp: !0
                        }, t),
                        r = s.asyncProp,
                        l = s.deferProp,
                        c = document.createElement("script");
                    return c.src = e, c.async = r, c.defer = l, document.body.appendChild(c), o(c)
                }))
            };
            t.default = a
        },
        MUKa: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {}
        },
        Madg: function(e, t, n) {
            "use strict";
            var a = n("pVnL"),
                o = n.n(a),
                i = n("q1tI"),
                s = n.n(i),
                r = (n("17x9"), n("YqNV")),
                l = function(e) {};
            l.displayName = "SubscribeButton", l.defaultProps = {
                breakpoint: void 0,
                pageCount: null,
                madData: null
            }, t.a = l
        },
        O14P: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n("cDf5"),
                o = n.n(a),
                i = n("gcR/"),
                s = n.n(i),
                r = n("q1tI"),
                l = n.n(r),
                c = n("i8i4"),
                d = n.n(c),
                u = n("8N5i"),
                p = n("hHXl"),
                m = n("vftj"),
                h = n("bBst"),
                f = n.n(h),
                v = n("UmXO"),
                g = n("+mLS"),
                b = n("mZTn"),
                y = n("Lkij"),
                w = (n("91GP"), n("QILm")),
                k = n.n(w),
                C = n("lwsE"),
                B = n.n(C),
                E = n("W8MJ"),
                T = n.n(E),
                A = n("a1gu"),
                x = n.n(A),
                O = n("Nsbk"),
                S = n.n(O),
                N = n("7W2i"),
                D = n.n(N),
                _ = n("CodD"),
                I = n("JRJN"),
                F = (n("17x9"), function(e) {
                    function t(e) {
                        var n;
                        B()(this, t), n = x()(this, S()(t).call(this, e));
                        var a = e.initialLocation,
                            o = k()(e, ["initialLocation"]);
                        return n.history = Object(I.createBrowserHistory)(o), n.props.basename || Object.assign(n.history.location, a), n
                    }
                    return D()(t, e), T()(t, [{
                        key: "render",
                        value: function() {
                            return s()(_.Router, {
                                history: this.history
                            }, void 0, this.props.children)
                        }
                    }]), t
                }(l.a.Component));
            F.displayName = "BrowserRouter", F.defaultProps = {
                initialLocation: {}
            };
            var M = F,
                P = n("qs2k"),
                L = n("tXE8"),
                j = (n("OG14"), n("wSuE")),
                R = n("QS0n"),
                z = n("InUh"),
                V = n.n(z),
                U = n("cr+I"),
                J = n.n(U),
                H = n("eJDT"),
                q = n("ZGn5"),
                G = n("W1TD"),
                W = V()((function() {
                    return Promise.all([n.e(0), n.e(2), n.e(4), n.e(56), n.e(27)]).then(n.bind(null, "M9y8"))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["M9y8"]
                        },
                        modules: ["routes/Home"]
                    }
                }),
                Y = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["2fsG"]
                        },
                        modules: ["routes/Ask/HubPage"]
                    }
                }),
                X = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["Q4JH"]
                        },
                        modules: ["routes/Ask/AnswerPage"]
                    }
                }),
                K = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["B1qp"]
                        },
                        modules: ["routes/Audio"]
                    }
                }),
                Q = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["T2aX"]
                        },
                        modules: ["routes/Video"]
                    }
                }),
                Z = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["mgoV"]
                        },
                        modules: ["routes/BestSellers"]
                    }
                }),
                $ = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["orTc"]
                        },
                        modules: ["routes/Byline"]
                    }
                }),
                ee = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["UTis"]
                        },
                        modules: ["routes/Capsule"]
                    }
                }),
                te = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["u06c"]
                        },
                        modules: ["routes/CodeRedeem"]
                    }
                }),
                ne = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["AzGm"]
                        },
                        modules: ["routes/Collections"]
                    }
                }),
                ae = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["Fs8i"]
                        },
                        modules: ["routes/GetStarted"]
                    }
                }),
                oe = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["skLl"]
                        },
                        modules: ["routes/Newsletters/Newsletter"]
                    }
                }),
                ie = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["nRCG"]
                        },
                        modules: ["routes/Newsletters"]
                    }
                }),
                se = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["Z7Jb"]
                        },
                        modules: ["routes/Newsletters/Regilite"]
                    }
                }),
                re = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["6jl2"]
                        },
                        modules: ["routes/PaidPost"]
                    }
                }),
                le = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["pTq3"]
                        },
                        modules: ["routes/Privacy"]
                    }
                }),
                ce = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["qP6w"]
                        },
                        modules: ["routes/Refer"]
                    }
                }),
                de = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["kJom"]
                        },
                        modules: ["routes/Reviews"]
                    }
                }),
                ue = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["zszT"]
                        },
                        modules: ["routes/Search"]
                    }
                }),
                pe = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["BikE"]
                        },
                        modules: ["routes/Slideshow"]
                    }
                }),
                me = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["VqV0"]
                        },
                        modules: ["routes/Story"]
                    }
                }),
                he = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["h+b+"]
                        },
                        modules: ["routes/Timeswire"]
                    }
                }),
                fe = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["IZiC"]
                        },
                        modules: ["routes/Trending"]
                    }
                }),
                ve = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["iFqm"]
                        },
                        modules: ["routes/Weddings"]
                    }
                }),
                ge = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["7bmb"]
                        },
                        modules: ["routes/YourList"]
                    }
                }),
                be = V()((function() {}), {
                    loadableGenerated: {
                        webpack: function() {
                            return ["mKkl"]
                        },
                        modules: ["routes/Blank"]
                    }
                }),
                ye = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return function(t) {
                        var n = e,
                            a = J.a.parse(t.location.search);
                        switch (Object(H.a)(a || {})) {
                            case "article":
                                n = me;
                                break;
                            case "paidpost":
                                n = re;
                                break;
                            case "legacycollection":
                                n = ne;
                                break;
                            case "slideshow":
                                n = pe;
                                break;
                            case "capsule":
                                n = ee;
                                break;
                            default:
                                n || (n = G.a)
                        }
                        return l.a.createElement(n, t)
                    }
                },
                we = s()(R.Route, {
                    path: "/ask/answers/:answerSlug",
                    component: X
                }),
                ke = s()(R.Route, {
                    path: "/ask/:hubSlug",
                    component: Y
                }),
                Ce = s()(R.Route, {
                    path: "/audio/(.+)",
                    component: K
                }),
                Be = s()(R.Route, {
                    path: "/video/:id?",
                    component: Q
                }),
                Ee = s()(R.Route, {
                    path: "/books/best-sellers/:year(\\d{4})?/:month(\\d{2})?/:day(\\d{2})?/:listName?",
                    component: Z
                }),
                Te = s()(R.Route, {
                    path: "/by/:slug",
                    component: $
                }),
                Ae = s()(R.Route, {
                    path: "/capsule/:uuid",
                    component: ee
                }),
                xe = s()(R.Route, {
                    path: "/code/:path?",
                    component: te
                }),
                Oe = s()(R.Route, {
                    path: "/get-started/:route?",
                    component: ae
                }),
                Se = s()(R.Route, {
                    path: "/newsletters/regilite",
                    exact: !0,
                    component: se
                }),
                Ne = s()(R.Route, {
                    path: "/newsletters",
                    exact: !0,
                    component: ie
                }),
                De = s()(R.Route, {
                    path: "/paidpost/:advertiser/:splat(.+)",
                    component: re
                }),
                _e = s()(R.Route, {
                    path: "/data-subject-request",
                    component: le
                }),
                Ie = s()(R.Route, {
                    path: "/share",
                    component: ce
                }),
                Fe = s()(R.Route, {
                    path: "/reviews/:type/:splat(.*)?",
                    component: de
                }),
                Me = s()(R.Route, {
                    path: "/search/:q?/:sort?/:startDate(\\d{8})?/:endDate(\\d{8})?",
                    component: ue
                }),
                Pe = s()(R.Route, {
                    path: "/style/weddings/announcements",
                    component: ve
                }),
                Le = s()(R.Route, {
                    path: "/timeswire",
                    component: he
                }),
                je = s()(R.Route, {
                    path: "/trending",
                    component: fe
                }),
                Re = s()(R.Route, {
                    path: "/saved",
                    component: ge
                }),
                ze = s()(R.Route, {
                    path: "/:prefix?/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:splat(.+)(.)html",
                    component: me
                }),
                Ve = s()(R.Route, {
                    path: "/(zh-hans|zh-hant|es)/(section)?/:splat(.+)?",
                    component: ne
                }),
                Ue = s()(R.Route, {
                    path: "/blank",
                    component: be
                }),
                Je = s()(R.Route, {
                    path: "/(.+)",
                    component: G.a
                }),
                He = function() {
                    return s()(q.a, {}, void 0, s()(R.Switch, {}, void 0, s()(R.Route, {
                        path: "/",
                        exact: !0,
                        render: ye(W)
                    }), s()(R.Route, {
                        path: "/resources/app/url/proxy/html",
                        render: ye()
                    }), we, ke, Ce, Be, Ee, Te, Ae, xe, Oe, Se, s()(R.Route, {
                        path: ["/newsletters/signup/:newsletterId", "/newsletters/:slug"],
                        component: oe
                    }), Ne, De, _e, Ie, Fe, Me, s()(R.Route, {
                        path: ["/slideshow/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:section/:subsection?/:slug/s/:splat(.+)(.)html", "/slideshow/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:section/:subsection?/:slug"],
                        component: pe
                    }), Pe, Le, je, Re, s()(R.Route, {
                        path: ["/(issue|series|section|spotlight|newsevent)(collection)?/:splat(.+)", "/(topic|news-event|column)/:splat(.+)"],
                        component: ne
                    }), ze, Ve, Ue, Je))
                };
            He.displayName = "App";
            var qe = Object(j.hot)(He),
                Ge = n("ypjf"),
                We = n("k2TR"),
                Ye = window.__preloadedData,
                Xe = Ye.config,
                Ke = Ye.initialLocation;
            "desktop" === Xe.initialDeviceType && console.log("\x3c!--\n         0000000                         000        0000000\n       111111111      11111111100          000      111111111\n       00000        111111111111111111      00000      000000\n       000        1111111111111111111111111100000         000\n       000        1111       1111111111111111100          000\n       000         11       0     1111111100              000\n       000          1      00             1               000\n       000               00      00       1               000\n       000             000    00000       1               000\n    00000            0000  00000000       1                00000\n  11111            000 00    000000      000                 11111\n    00000          0000      000000     00000              00000\n       000        10000      000000      000              0000\n       000        00000      000000       1               000\n       000        000000     10000        1     0         000\n       000        1000000 00              1    00         000\n       000         1111111                1 0000          000\n       000          1111111100           000000           000\n       0000          111111111111111110000000            0000\n       111111111        111111111111100000          111111111\n         0000000              00000000              0000000\n\n      NYTimes.com: All the code that's fit to printf()\n      We're hiring: https://nytimes.wd5.myworkdayjobs.com/Tech\n   --\x3e"), window.addEventListener("unhandledrejection", (function(e) {
                e.preventDefault(), console.error("Unhandled Promise Rejection (unhandledrejection):", e.reason)
            })), Object(Ge.a)(), Object(v.hydrate)(window.__emotion);
            var Qe = document.getElementById("app"),
                Ze = document.referrer || null,
                $e = window.location.href,
                et = window.NYTD.PageViewId.current;

            function tt() {}

            function nt(e, t) {}
            P.f.mark("timeToRouter");
            var at = s()(qe, {});
            try {
                P.f.mark("timeToRender"), P.f.measure("routerMatchTime", "timeToRouter", "timeToRender"), Object(u.preloadDynamicImports)().then((function() {
                    d.a.hydrate(s()(m.HelmetProvider, {}, void 0, s()(p.ApolloProvider, {
                        client: L.a
                    }, void 0, s()(b.a, {
                        origin: window.location.origin,
                        onGetReferrer: function() {
                            return Ze
                        },
                        onUpdatePageviewId: tt,
                        onGetPageviewId: function() {},
                        initialDeviceType: Xe.initialDeviceType,
                        fastlyAbraConfig: Xe.fastlyAbraConfig,
                        warn: console.warn
                    }, void 0, s()(M, {
                        basename: vi.env.EXPERIMENTAL_ROUTE_PREFIX || void 0,
                        initialLocation: Ke,
                        getUserConfirmation: nt
                    }, void 0, at)))), Qe, (function() {
                        P.f.mark("timeToRenderEnd"), P.f.measure("renderTime", "timeToRender", "timeToRenderEnd"), Object(y.f)(Xe.fastlyAbraConfig, Ze);
                        var e = new f.a("nyt:vi:rendered");
                        window.dispatchEvent(e), window.NYT_VI_RENDERED = !0
                    }))
                }))
            } catch (e) {
                throw "object" === o()(e) && (e.message = "[react-rendering-error] ".concat(e.message)), g.a.captureException(e, {
                    tags: {
                        rendering_error: !0
                    }
                }), e
            }
            Object(We.a)(Xe.serviceWorkerFile)
        },
        OB6K: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.sectionToneReducer = void 0;
            var o = a(n("lSNA")),
                i = a(n("QILm")),
                s = a(n("q1tI")),
                r = (a(n("17x9")), n("41jq")),
                l = n("DxDJ");

            function c(e) {
                for (var t = 1; t < arguments.length; t++)
                    if (t % 2) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter((function(e) {})))), a.forEach((function(t) {
                            (0, o.default)(e, t, n[t])
                        }))
                    } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
                return e
            }
            var d = function(e) {
                var t = e.section,
                    n = e.tone,
                    a = e.treatment,
                    o = (0, i.default)(e, ["section", "tone", "treatment"]),
                    s = a;
                return s ? e : (s = n, c("magazine" === t || "t-magazine" === t ? {
                    treatment: s = t,
                    section: t
                } : {
                    treatment: s,
                    tone: n,
                    section: t
                }, o))
            };
            t.sectionToneReducer = d;
            var u = function(e) {
                var t = e.theme,
                    n = e.children;
                return "function" == typeof t ? s.default.createElement(r.ThemeProvider, {
                    theme: function(e) {}
                }, n) : s.default.createElement(r.ThemeProvider, {
                    theme: function(e) {
                        return d(c({
                            breakpointMap: l.breakpointMap
                        }, e, {}, t))
                    }
                }, n)
            };
            u.displayName = "NYTThemeProvider", u.defaultProps = {
                theme: {}
            };
            var p = u;
            t.default = p
        },
        OO03: function(e, t, n) {
            "use strict";
            n("f3/d");
            var a = n("pVnL"),
                o = n.n(a),
                i = n("lwsE"),
                s = n.n(i),
                r = n("W8MJ"),
                l = n.n(r),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                h = n.n(m),
                f = n("q1tI"),
                v = n.n(f),
                g = n("0O4q"),
                b = n("/jSo"),
                y = n("+mLS");
            t.a = function(e) {
                var t = function(t) {
                    function n() {
                        var e, t;
                        s()(this, n);
                        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                        return (t = d()(this, (e = p()(n)).call.apply(e, [this].concat(o)))).state = {
                            user: null,
                            subscriptionDetails: null
                        }, t
                    }
                    return h()(n, t), l()(n, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.userInfoSubscription = g.a.subscribe((function(t) {}), (function(e) {
                                var t = "Failed to load the user info";
                                y.a.captureException(t), console.error(t, e)
                            })), this.subDetailsSubscription = b.a.subscribe((function(t) {}), (function(e) {
                                var t = "Failed to load the subscription details";
                                y.a.captureException(t), console.error(t, e)
                            }))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return v.a.createElement(e, o()({}, this.props, {
                                user: this.state.user,
                                subscriptionDetails: this.state.subscriptionDetails
                            }))
                        }
                    }]), n
                }(f.Component);
                t.displayName = "WithUser";
                var n = e.displayName || e.name || "Component";
                return t.displayName = "WithUser(".concat(n, ")"), t
            }
        },
        Pqtm: function(e, t, n) {
            "use strict";
            var a = n("284h"),
                o = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AdSlotNew", {
                enumerable: !0,
                get: function() {}
            }), Object.defineProperty(t, "AdAdapter", {
                enumerable: !0,
                get: function() {}
            }), Object.defineProperty(t, "DebugUtils", {
                enumerable: !0,
                get: function() {}
            }), Object.defineProperty(t, "AdSlot", {
                enumerable: !0,
                get: function() {}
            }), Object.defineProperty(t, "AdManager", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), Object.defineProperty(t, "refresh", {
                enumerable: !0,
                get: function() {}
            }), Object.defineProperty(t, "withAds", {
                enumerable: !0,
                get: function() {}
            }), Object.defineProperty(t, "adManager", {
                enumerable: !0,
                get: function() {}
            }), Object.defineProperty(t, "adScripts", {
                enumerable: !0,
                get: function() {}
            });
            var i = o(n("X7Q4")),
                s = o(n("pBA1")),
                r = o(n("Zrq6")),
                l = o(n("VeKh")),
                c = a(n("Sa5I")),
                d = o(n("Hplh")),
                u = o(n("COgQ")),
                p = o(n("tq/d"))
        },
        PxMw: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("pVnL")),
                i = a(n("QILm")),
                s = a(n("q1tI")),
                r = (a(n("17x9")), a(n("wXC7"))),
                l = function(e) {};
            l.displayName = "Button", l.defaultProps = {
                theme: "default",
                children: null
            };
            var c = l;
            t.default = c
        },
        QXZS: function(e, t, n) {
            "use strict";
            n.d(t, "k", (function() {})), n.d(t, "q", (function() {})), n.d(t, "m", (function() {})), n.d(t, "p", (function() {})), n.d(t, "n", (function() {})), n.d(t, "l", (function() {})), n.d(t, "b", (function() {
                return k
            })), n.d(t, "h", (function() {
                return C
            })), n.d(t, "i", (function() {
                return B
            })), n.d(t, "j", (function() {
                return E
            })), n.d(t, "a", (function() {
                return T
            })), n.d(t, "f", (function() {
                return A
            })), n.d(t, "g", (function() {
                return x
            })), n.d(t, "e", (function() {
                return O
            })), n.d(t, "d", (function() {
                return S
            })), n.d(t, "c", (function() {
                return N
            })), n.d(t, "o", (function() {}));
            n("KKXr");
            var a = n("J4zp"),
                o = n.n(a),
                i = n("wd/R"),
                s = n.n(i),
                r = (n("f0Wu"), ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]),
                l = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                c = ["Jan.", "Feb.", "March", "April", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
                d = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                u = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
                p = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
                m = ["en.", "febr.", "mzo.", "abr.", "mayo", "jun.", "jul.", "ag.", "sept.", "oct.", "nov.", "dic."];

            function h(e, t) {}
            s.a.updateLocale("en", {
                monthsShort: c
            });
            var f = /^([0-9]{4})-([0-1][0-9])-([0-3][0-9])T([0-2][0-9]):([0-5][0-9]):([0-5][0-9])\./,
                v = function(e) {},
                g = function(e) {},
                b = function(e) {},
                y = function(e) {},
                w = function(e) {},
                k = function(e) {},
                C = function(e) {},
                B = function(e) {},
                E = function(e) {},
                T = function(e) {},
                A = function(e) {},
                x = function(e) {},
                O = function(e) {},
                S = function(e) {},
                N = function(e) {},
                D = function() {}
        },
        QYgy: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {})), n.d(t, "a", (function() {})), n.d(t, "h", (function() {})), n.d(t, "i", (function() {})), n.d(t, "j", (function() {})), n.d(t, "d", (function() {})), n.d(t, "c", (function() {})), n.d(t, "e", (function() {})), n.d(t, "f", (function() {})), n.d(t, "b", (function() {}));
            n("rGqo"), n("yt8O"), n("Btvt"), n("XfO3"), n("T39b");
            var a = n("VkAN"),
                o = n.n(a),
                i = (n("OG14"), n("f3/d"), n("RIqP")),
                s = n.n(i),
                r = n("cr+I"),
                l = n.n(r),
                c = n("Dugd"),
                d = n.n(c),
                u = n("5pww");

            function p() {
                var e = o()(["\n  query NewslettersQuery($id: String!, $morningBriefingId: String!) {\n    article(id: $id) {\n      id\n      newsletterSuggestion {\n        code\n      }\n    }\n    newsletterSectionConfigs {\n      newsletterConfigs {\n        id\n        newsletterId\n        thumbImageUrl\n      }\n    }\n    newsletterConfig(newsletterId: $morningBriefingId) {\n      id\n      thumbImageUrl\n    }\n  }\n"]);
                return p = function() {}, e
            }

            function m() {
                var e = o()(["\n  query UserUpsellQuery {\n    user {\n      hasSeenUpsellOffer {\n        hasSeenUpsell\n      }\n    }\n  }\n"]);
                return m = function() {}, e
            }
            var h = function() {},
                f = function() {},
                v = function(e) {},
                g = function(e) {},
                b = function(e) {},
                y = function(e, t) {};

            function w(e) {}
            var k = d()(m()),
                C = d()(p());

            function B(e) {}
        },
        "R+TL": function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("91GP");
            var a = n("lSNA"),
                o = n.n(a),
                i = n("wXC7"),
                s = n.n(i);

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {}))), n.push.apply(n, a)
                }
                return n
            }
            var l = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(n, !0).forEach((function(t) {
                        o()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach((function(t) {}))
                }
                return e
            }({
                mobileLarge: "@media (min-height: 450px) and (max-width: 600px)",
                mediumTablet: "@media (min-width: 720px)",
                tabletSize: "@media (min-width: 740) and (max-width: 1024px)"
            }, s.a.breakpoint);
            t.a = Object.assign(s.a, {
                breakpoint: l
            })
        },
        RIIa: function(e, t, n) {
            "use strict";
            n("VRzm"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a = n("lwsE"),
                o = n.n(a),
                i = n("W8MJ"),
                s = n.n(i),
                r = n("2HEe"),
                l = n.n(r),
                c = n("06b3"),
                d = n("mczz"),
                u = new(function() {
                    function e() {
                        o()(this, e), this.serviceUrl = "https://cigsvc.nytimes.com/r1/jp/ip_seg_v2.rep"
                    }
                    return s()(e, [{
                        key: "getData",
                        value: function() {
                            var t = {},
                                n = window.location ? Object(d.d)(Object(d.c)(), "test_ip") : null;
                            n && (t.test_ip = n);
                            var a = Object.keys(t).map((function(e) {})).join("&"),
                                o = c.a.load("edu_cig_opt"),
                                i = c.a.load("b2b_cig_opt");
                            if (o && i) {
                                var s = {
                                    edu: {},
                                    b2b: {}
                                };
                                try {
                                    s.edu = JSON.parse(decodeURIComponent(o)), s.b2b = JSON.parse(decodeURIComponent(i))
                                } catch (e) {
                                    return Promise.reject(e)
                                }
                                return Promise.resolve(s)
                            }
                            return l()("".concat(this.serviceUrl, "?").concat(a), {
                                timeout: 4e3,
                                jsonpCallbackFunction: "callback"
                            }).then((function(e) {})).then((function(t) {})).then((function(t) {}))
                        }
                    }], [{
                        key: "processData",
                        value: function(e) {}
                    }, {
                        key: "storeCookies",
                        value: function(e) {}
                    }]), e
                }());
            t.a = u
        },
        Sa5I: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.refresh = N, t.default = void 0;
            var o = a(n("cDf5")),
                i = a(n("FOgZ")),
                s = a(n("XaGS")),
                r = a(n("bBst")),
                l = a(n("xs1G")),
                c = a(n("cJEC")),
                d = a(n("n4LZ")),
                u = a(n("MUKa")),
                p = a(n("qIMw")),
                m = n("6Hs+"),
                h = n("/qcJ"),
                f = n("cNGg");

            function v(e, t, n) {}
            var g = function(e, t) {},
                b = 1e3,
                y = [],
                w = {};

            function k(e) {}

            function C() {}

            function B() {}

            function E(e, t, n) {}

            function T(e, t) {}

            function A(e, t, n) {}

            function x(e, t, n) {
                var a = document.getElementsByTagName("script")[0],
                    o = document.createElement("script");
                t && (o.onload = t), n && (o.onerror = n), o.src = e, o.async = !0, a.parentNode.insertBefore(o, a)
            }

            function O(e, t, n) {}

            function S() {}

            function N(e, t) {}

            function D(e) {}
            w.que = w.que || [];
            var _ = {
                AdMethods: {
                    initializeAd: function(e) {},
                    refresh: N,
                    handleSlotOnload: function(e, t) {},
                    handleSlotRenderEnded: function(e, t, n) {},
                    handleImpressionViewable: function(e, t) {}
                },
                ManagerMethods: {
                    manage: function() {},
                    loadBidders: function(e, t, n) {},
                    loadGoogletag: function(e) {},
                    loadAdBlockerBait: function() {
                        return new Promise((function(e, t) {
                            x("https://nytimes.com/ads/google/adsbygoogle.js", (function() {
                                e({
                                    adBlock: !1
                                })
                            }), (function() {}))
                        }))
                    },
                    handleAdInitalized: function(e) {},
                    setPostMessageListener: function(e, t, n) {},
                    setHaltAdCallsListener: function(e) {},
                    setPlaceDynamicAds: function(e) {},
                    isInViewport: l.default,
                    displayAd: T,
                    destroyAdSlots: function() {},
                    prebidFetch: C,
                    removeSlots: D,
                    forceSafeFrame: function() {},
                    placeDynamicAds: function() {},
                    removeAdPlacement: function(e) {},
                    getSlot: function(e) {},
                    polyfillOnClient: function() {}
                },
                dispatch: A,
                checkGoogletag: S,
                setAdRequirements: function(e, t) {},
                setAdUnitPath: function(e, t) {},
                refresh: N,
                setSlotTargeting: E,
                setTargeting: function(e, t) {}
            };
            t.default = _
        },
        SwM9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "c", (function() {}));
            n("84bF");
            var a = n("UmXO"),
                o = n("wXC7"),
                i = n.n(o),
                s = n("nxVm"),
                r = n.n(s),
                l = n("TvEp"),
                c = n.n(l),
                d = Object(a.css)("width:", "calc(100% - 40px)", ";max-width:", i.a.breakpoint.textBodyWidth, "px;margin-left:", "20px", ";margin-right:", "20px", ";", i.a.breakpoint.small, "{margin-left:auto;margin-right:auto;}", i.a.breakpoint.mediumLarge, "{width:", i.a.breakpoint.textBodyWidth, "px;}", i.a.breakpoint.extraLarge, "{width:", i.a.breakpoint.textBodyWidthExtralarge, "px;max-width:", i.a.breakpoint.textBodyWidthExtralarge, "px;}", r.a, ";"),
                u = {
                    left: Object(a.css)("text-align:left;"),
                    center: Object(a.css)("text-align:center;"),
                    right: Object(a.css)("text-align:right;")
                },
                p = Object(a.css)("margin-left:", "20px", ";margin-right:", "20px", ";width:", "calc(100% - 40px)", ";max-width:", i.a.breakpoint.textBodyWidth, "px;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}&", c.a, "{&:last-child{margin-bottom:0.75rem;}}", i.a.breakpoint.small, "{margin-left:auto;margin-right:auto;}", i.a.breakpoint.mediumLarge, "{margin-left:0;margin-right:0;width:100%;max-width:100%;}", r.a, ";"),
                m = function(e) {};
            t.b = {
                layout: {
                    feature: d,
                    news: d,
                    opinion: d,
                    magazine: d,
                    "t-magazine": d,
                    textAlign: u,
                    nonInterrupterTextElementBaseStyles: p
                },
                grid: {
                    pageMargin: "20px",
                    mobileFullWidth: "calc(100% - 40px)"
                }
            }
        },
        TULB: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("UmXO"),
                o = {
                    left: (0, a.css)("text-align:left;"),
                    center: (0, a.css)("text-align:center;"),
                    right: (0, a.css)("text-align:right;")
                };
            t.default = o
        },
        TiJ4: function(e, t) {
            e.exports = "/vi-assets/static-assets/ios-iphone-114x144-dark-25880f294e45e7361bce91ecb5e2d57d.png"
        },
        ToFS: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {};
            var o = a(n("YxHs"))
        },
        TvEp: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.heading1Selector = void 0;
            var o = n("UmXO"),
                i = a(n("3NoI")),
                s = a(n("rV9i")),
                r = a(n("wXC7")),
                l = (0, a(n("WThh")).default)(["medium", "large"]),
                c = function(e) {},
                d = (0, s.default)("treatment", {
                    none: function(e) {},
                    feature: function(e) {},
                    magazine: function(e) {},
                    opinion: function(e) {},
                    sponsored: function(e) {},
                    sponsoredSensitive: function(e) {},
                    "t-magazine": function(e) {}
                }),
                u = (0, s.default)("languageDirection", {
                    rightToLeft: (0, o.css)("text-align:right;direction:rtl;unicode-bidi:isolate;")
                });
            t.heading1Selector = function(e) {};
            var p = (0, i.default)("h1", {
                target: "e1h9rw200"
            })(d, ";", u, ";");
            t.default = p
        },
        U8LS: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("UmXO"),
                o = {
                    visuallyHidden: (0, a.css)("border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;"),
                    focusable: (0, a.css)("&:active,&:focus{clip:auto;overflow:visible;width:auto;height:auto;}"),
                    imageReplacement: (0, a.css)("font-size:0;line-height:0;overflow:hidden;text-indent:100%;white-space:nowrap;")
                };
            t.default = o
        },
        UQ7B: function(e, t, n) {
            "use strict";
            var a = n("ABJ/"),
                o = function() {
                    var e = window.userXhrObject;
                    return {
                        country: e.getResponseHeader("x-nyt-country") || null,
                        continent: e.getResponseHeader("x-nyt-continent") || null,
                        region: e.getResponseHeader("x-nyt-region") || null
                    }
                },
                i = new(n.n(a).a)((function(e) {
                    "undefined" == typeof window && e.error("Geolocation cannot be accessed on the server!");
                    var t = window.userXhrObject;
                    if (4 === (null == t ? void 0 : t.readyState)) e.next(o()), e.complete();
                    else {
                        var n = {
                            once: !0
                        };
                        t.addEventListener("timeout", e.error, n), t.addEventListener("error", e.error, n), t.addEventListener("load", (function() {}), n)
                    }
                }));
            t.a = i
        },
        Uezm: function(e, t) {
            e.exports = "/vi-assets/static-assets/apple-touch-icon-319373aaf4524d94d38aa599c56b8655.png"
        },
        VQmZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {}));
            var a = function(e) {},
                o = function(e) {}
        },
        Vc97: function(e, t, n) {
            "use strict";
            n("f3/d");
            var a = n("gcR/"),
                o = n.n(a),
                i = n("pVnL"),
                s = n.n(i),
                r = n("q1tI"),
                l = n.n(r),
                c = n("GY5D");
            t.a = function(e) {
                var t = function(t) {
                        return o()(c.a.Consumer, {}, void 0, (function(n) {
                            return l.a.createElement(e, s()({}, t, n))
                        }))
                    },
                    n = e.displayName || e.name || "Component";
                return t.displayName = "withMeter(".concat(n, ")"), t
            }
        },
        VeKh: function(e, t, n) {
            "use strict";
            var a = n("284h"),
                o = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n("lwsE")),
                s = o(n("W8MJ")),
                r = o(n("a1gu")),
                l = o(n("Nsbk")),
                c = o(n("7W2i")),
                d = o(n("PJYZ")),
                u = o(n("lSNA")),
                p = a(n("q1tI")),
                m = o(n("17x9")),
                h = o(n("Sa5I")),
                f = h.default.AdMethods,
                v = h.default.checkGoogletag,
                g = h.default.ManagerMethods,
                b = f.initializeAd,
                y = f.handleSlotOnload,
                w = f.handleSlotRenderEnded,
                k = f.handleImpressionViewable,
                C = {
                    textAlign: "center",
                    height: "100%",
                    display: "block"
                },
                B = function(e) {
                    function t(e) {}
                    return (0, c.default)(t, e), (0, s.default)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(p.Component);
            t.default = B, (0, u.default)(B, "defaultProps", {
                onDFPResponse: function() {},
                onImpressionViewable: function() {},
                onEmpty: function() {},
                onScriptLoaded: function() {},
                onScriptError: function() {},
                onAdRequested: function() {},
                onAdBlocker: function() {},
                onSlotLoaded: function() {},
                userStyle: {},
                managed: !1,
                stopAdCalls: !1,
                id: ""
            }), B.propTypes = {
                adUnitPath: m.default.string.isRequired,
                slotSizes: m.default.oneOfType([m.default.string, m.default.arrayOf(m.default.number), m.default.arrayOf(m.default.array), m.default.arrayOf(m.default.oneOfType([m.default.string.isRequired, m.default.array]))]),
                responsiveSizes: m.default.arrayOf(m.default.oneOfType([m.default.number, m.default.array, m.default.string])),
                position: m.default.string,
                onScriptLoaded: m.default.func,
                onScriptError: m.default.func,
                onDFPResponse: m.default.func,
                onImpressionViewable: m.default.func,
                onEmpty: m.default.func,
                onAdBlocker: m.default.func,
                onSlotLoaded: m.default.func,
                id: m.default.string,
                targetingObj: m.default.objectOf(m.default.oneOfType([m.default.string, m.default.array, m.default.bool])),
                userStyle: m.default.objectOf(m.default.oneOfType([m.default.string])),
                managed: m.default.bool,
                onAdRequested: m.default.func,
                onAdDefined: m.default.func,
                stopAdCalls: m.default.bool
            }
        },
        Vhmf: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                o = n.n(a).a.createContext({
                    overlays: {},
                    setMode: function() {},
                    setVisibility: function() {},
                    registerOverlay: function() {}
                });
            t.a = o
        },
        W1TD: function(e, t, n) {
            "use strict";
            var a, o = n("gcR/"),
                i = n.n(o),
                s = n("lwsE"),
                r = n.n(s),
                l = n("W8MJ"),
                c = n.n(l),
                d = n("a1gu"),
                u = n.n(d),
                p = n("Nsbk"),
                m = n.n(p),
                h = n("7W2i"),
                f = n.n(h),
                v = n("q1tI"),
                g = n("X6oL"),
                b = n.n(g),
                y = n("rnzX"),
                w = n("tO/N"),
                k = i()(y.a, {}, void 0, i()(w.a, {})),
                C = b()({
                    presentation: {
                        pageType: "NotFound"
                    }
                })(a = function(e) {
                    function t() {}
                    return f()(t, e), c()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(v.Component)) || a;
            t.a = C
        },
        WCv0: function(e, t, n) {
            "use strict";
            n("f3/d");
            var a = n("gcR/"),
                o = n.n(a),
                i = n("pVnL"),
                s = n.n(i),
                r = n("q1tI"),
                l = n.n(r),
                c = n("pL4N");
            t.a = function(e) {
                var t = function(t) {},
                    n = e.displayName || e.name || "Component";
                return t.displayName = "withMADManager(".concat(n, ")"), t
            }
        },
        WThh: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("lSNA")),
                i = a(n("3Rk2")),
                s = a(n("wXC7")),
                r = n("DxDJ");
            var l = ["fontSize", "lineHeight"];
            t.default = function(e) {
                return function(t, n) {}
            }
        },
        WXMI: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return a
            })), n.d(t, "j", (function() {})), n.d(t, "a", (function() {
                return i
            })), n.d(t, "e", (function() {})), n.d(t, "g", (function() {
                return r
            })), n.d(t, "d", (function() {})), n.d(t, "f", (function() {
                return c
            })), n.d(t, "k", (function() {})), n.d(t, "h", (function() {
                return u
            })), n.d(t, "i", (function() {
                return p
            })), n.d(t, "c", (function() {}));
            var a = "https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=vi",
                o = "https://www.nytimes.com/subscription/multiproduct/lp8KQUS.html?campaignId=7QQFH",
                i = "Log In",
                s = "https://www.nytimes.com/mowweb/hdr",
                r = "https://www.nytimes.com/subscription/multiproduct/lp8HYKU.html?campaignId=6W74R",
                l = "https://myaccount.nytimes.com/auth/register?response_type=cookie&client_id=vi",
                c = "Subscribe",
                d = "Account",
                u = "Today’s Paper",
                p = "https://www.nytimes.com/section/todayspaper",
                m = "https://myaccount.nytimes.com/seg/"
        },
        X7Q4: function(e, t, n) {
            "use strict";
            var a = n("284h"),
                o = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n("lwsE")),
                s = o(n("W8MJ")),
                r = o(n("a1gu")),
                l = o(n("Nsbk")),
                c = o(n("7W2i")),
                d = o(n("PJYZ")),
                u = o(n("lSNA")),
                p = a(n("q1tI")),
                m = o(n("17x9")),
                h = o(n("pBA1")),
                f = o(n("Zrq6")),
                v = o(n("ToFS")),
                g = h.default.initializeAd,
                b = h.default.handleAdDefined,
                y = h.default.handleAdRequested,
                w = h.default.handleSlotRenderEnded,
                k = h.default.handleSlotOnload,
                C = h.default.handleImpressionViewable,
                B = h.default.handleSlotEmpty,
                E = h.default.removeAdPlacement,
                T = h.default.unsubscribeToAll,
                A = f.default.debugInfo,
                x = f.default.getDebugStyle,
                O = {
                    textAlign: "center",
                    height: "100%",
                    display: "block"
                },
                S = function(e) {
                    function t(e) {}
                    return (0, c.default)(t, e), (0, s.default)(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(p.Component);
            t.default = S, (0, u.default)(S, "defaultProps", {
                onAdDefined: function() {},
                onAdRequested: function() {},
                onDFPResponse: function() {},
                onSlotLoaded: function() {},
                onImpressionViewable: function() {},
                onEmpty: function() {},
                userStyle: {},
                isPrioritized: !1,
                sizeKey: "",
                lazyLoad: !0
            }), S.propTypes = {
                id: m.default.string.isRequired,
                position: m.default.string.isRequired,
                sizeKey: m.default.string,
                isPrioritized: m.default.bool,
                onAdDefined: m.default.func,
                onAdRequested: m.default.func,
                onDFPResponse: m.default.func,
                onSlotLoaded: m.default.func,
                onImpressionViewable: m.default.func,
                onEmpty: m.default.func,
                userStyle: m.default.objectOf(m.default.oneOfType([m.default.string])),
                lazyLoad: m.default.bool
            }
        },
        XnIf: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {}));
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("bHtr"), n("q1tI"), n("17x9"), n("wXC7")),
                s = n.n(i);

            function r(e) {}
            r.displayName = "CaretIcon", r.defaultProps = {
                className: "",
                direction: "down",
                fill: s.a.color.black
            }
        },
        XvdP: function(e, t) {
            e.exports = "/vi-assets/static-assets/favicon-4bf96cb6a1093748bf5b3c429accb9b4.ico"
        },
        YqNV: function(e, t, n) {
            "use strict";
            var a, o = n("gcR/"),
                i = n.n(o),
                s = n("lwsE"),
                r = n.n(s),
                l = n("W8MJ"),
                c = n.n(l),
                d = n("a1gu"),
                u = n.n(d),
                p = n("Nsbk"),
                m = n.n(p),
                h = n("7W2i"),
                f = n.n(h),
                v = n("q1tI"),
                g = (n("17x9"), n("UmXO")),
                b = n("X6oL"),
                y = n.n(b),
                w = n("+4HN"),
                k = n("xEGZ"),
                C = n("WXMI"),
                B = n("vEu8"),
                E = n("Vc97"),
                T = n("WCv0"),
                A = n("E00O"),
                x = n("aVaz"),
                O = n("0VxJ"),
                S = n("Lkij"),
                N = n("u1H9"),
                D = n("mrGk"),
                _ = function(e, t) {},
                I = Object(g.css)("display:none;"),
                F = y()()(a = Object(B.a)(a = Object(E.a)(a = Object(T.a)(a = function(e) {
                    function t() {}
                    return f()(t, e), c()(t, [{
                        key: "shouldRender",
                        value: function() {}
                    }, {
                        key: "renderLink",
                        value: function() {}
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {}
                    }, {
                        key: "render",
                        value: function() {}
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {}
                    }]), t
                }(v.Component)) || a) || a) || a) || a;
            F.defaultProps = {
                breakpoint: void 0,
                isButton: !1,
                madData: null,
                pageCount: null
            };
            t.a = F
        },
        YrOh: function(e, t, n) {
            "use strict";
            var a, o = n("pVnL"),
                i = n.n(o),
                s = n("lwsE"),
                r = n.n(s),
                l = n("W8MJ"),
                c = n.n(l),
                d = n("a1gu"),
                u = n.n(d),
                p = n("Nsbk"),
                m = n.n(p),
                h = n("7W2i"),
                f = n.n(h),
                v = n("VkAN"),
                g = n.n(v),
                b = n("q1tI"),
                y = n.n(b),
                w = (n("17x9"), n("hHXl")),
                k = n("Dugd"),
                C = n.n(k),
                B = n("aRw7"),
                E = n("GwXh");

            function T() {
                var e = g()(["\n  query UserProfileQuery {\n    user {\n      __typename\n      profile {\n        displayName\n        email\n      }\n    }\n  }\n"]);
                return T = function() {}, e
            }
            var A = C()(T()),
                x = Object(w.graphql)(A, {
                    name: "UserProfile",
                    props: function(e) {},
                    options: function() {}
                })(a = function(e) {
                    function t() {}
                    return f()(t, e), c()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(b.Component)) || a;
            x.defaultProps = {
                data: void 0
            }, t.a = x
        },
        Ytp6: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("q1tI"),
                s = n.n(i),
                r = n("41jq"),
                l = n("pCqE"),
                c = n("8bRw"),
                d = n("wXC7"),
                u = n.n(d),
                p = (n("tUrg"), n("f3/d"), n("UmXO")),
                m = (n("17x9"), n("lwsE")),
                h = n.n(m),
                f = n("W8MJ"),
                v = n.n(f),
                g = n("a1gu"),
                b = n.n(g),
                y = n("Nsbk"),
                w = n.n(y),
                k = n("7W2i"),
                C = n.n(k),
                B = n("3NoI"),
                E = n.n(B),
                T = Object(p.css)(u.a.a11y.visuallyHidden, ";"),
                A = function(e) {},
                x = function(e) {},
                O = function(e) {},
                S = E()("button", {
                    target: "ewfai8r0"
                })(u.a.button.transparent, ";border:0;", O, " &.activeSearchButton{background-color:", u.a.color.gray90, ";", A, ";}&:hover{", x, ";", A, ";}", u.a.breakpoint.mediumLarge, "{padding:8px 9px 9px;}"),
                N = Object(p.css)(u.a.breakpoint.mediumLarge, "{display:inline-block;}"),
                D = Object(p.css)("display:inline-block;height:16px;vertical-align:sub;width:16px;"),
                _ = function(e) {},
                I = E()("form", {
                    target: "ewfai8r1"
                })("background-color:", _, ";", u.a.breakpoint.mediumLarge, "{background-color:", _, ";border-radius:3px;margin-left:7px;}"),
                F = Object(p.css)("background-color:", u.a.color.white, ";border-radius:2px;display:inline-block;margin-right:10px;padding:7px 0;position:relative;width:calc(100% - 47px);", u.a.breakpoint.mediumLarge, "{background-color:", u.a.color.white, ";border:1px solid ", u.a.color.gray60, ";border-radius:3px;height:auto;margin-right:4px;padding:0 40px 0 10px;width:auto;}"),
                M = Object(p.css)("&[type='text']{border:1px solid ", u.a.color.gray60, ";box-sizing:border-box;color:", u.a.color.gray30, ";font-size:11px;font-family:", u.a.font.franklin, ";font-weight:normal;height:35px;letter-spacing:0.5px;line-height:16px;margin:0;padding:1px 40px 0 10px;vertical-align:middle;width:100%;&:focus{color:", u.a.color.gray20, ";box-shadow:none;outline:none;}", u.a.breakpoint.mediumLarge, "{border:0;height:31px;letter-spacing:0.5px;}}"),
                P = Object(p.css)("background-color:transparent;border:0 none;color:", u.a.color.gray45, ";cursor:pointer;font-size:10px;font-family:", u.a.font.franklin, ";padding:20px 13px 0 0;position:absolute;right:0;text-transform:uppercase;top:0;", u.a.breakpoint.mediumLarge, "{font-size:9px;padding-top:12px;}"),
                L = function(e) {},
                j = E()("button", {
                    target: "ewfai8r2"
                })(u.a.button.action, ";height:35px;font-weight:bold;margin:0;padding:8px 9px 6px;vertical-align:middle;", L, ";&:disabled{cursor:default;opacity:0.5;}", u.a.breakpoint.mediumLarge, "{font-weight:bold;font-size:10px;height:33px;padding:7px 9px 6px;}"),
                R = "SEARCH",
                z = "Clear",
                V = "Go",
                U = function(e) {
                    function t() {}
                    return C()(t, e), v()(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(i.Component);
            U.displayName = "Search", U.defaultProps = {
                area: "masthead",
                focusSearch: !1
            };
            n("SMB2");
            var J = Object(p.css)("border-top:1px solid ", u.a.color.gray70, ";padding:20px 20px 0;", u.a.breakpoint.medium, "{padding:20px 20% 0;}"),
                H = Object(p.css)("padding-top:10px;"),
                q = Object(p.css)("border-top:1px solid ", u.a.color.gray70, ";color:", u.a.color.black, ";font-family:", u.a.font.franklin, ";font-size:16px;font-weight:", u.a.font.weight.bold, ";letter-spacing:0.04rem;line-height:23px;padding:22px 0 12px;text-transform:capitalize;&:first-of-type{border-top:0;}"),
                G = Object(p.css)("columns:2;margin:0;padding:0 0 19px;"),
                W = Object(p.css)("line-height:34px;list-style-type:none;&.desktop{display:none;}", u.a.breakpoint.medium, "{&.smartphone{display:none;}&.desktop{display:block;}}"),
                Y = Object(p.css)("color:", u.a.color.gray20, ";display:block;font-family:", u.a.font.franklin, ";font-size:15px;font-weight:", u.a.font.weight.medium, ";line-height:34px;text-decoration:none;text-transform:capitalize;"),
                X = Object(p.css)(u.a.a11y.visuallyHidden, ";", u.a.a11y.focusable, ";", u.a.button.transparent, ";display:inline-block;transition:none;&:focus{padding:4px 4px 3px;margin-top:5px;}"),
                K = "Skip to Close button",
                Q = o()(U, {
                    area: "mobileNav"
                }),
                Z = function(e) {};
            Z.displayName = "MobileNav", Z.defaultProps = {
                indexData: []
            };
            var $ = Z,
                ee = n("Gc+2"),
                te = n.n(ee),
                ne = "SEARCH",
                ae = function(e) {
                    function t() {}
                    return C()(t, e), v()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(i.Component);
            ae.displayName = "MastheadSearch", ae.defaultProps = {
                theme: null
            };
            var oe = Object(r.withTheme)(ae),
                ie = (n("84bF"), n("mFn4")),
                se = n.n(ie),
                re = n("K0fD"),
                le = function(e) {},
                ce = function(e) {},
                de = function(e) {},
                ue = function(e) {},
                pe = function(e) {},
                me = E()("div", {
                    target: "er09x8g0"
                })("display:flex;justify-content:space-around;left:10px;position:absolute;", pe, " ", u.a.breakpoint.mediumLarge, "{", le, ";", ce, ";}", de, ";", ue, ";@media print{display:none;}"),
                he = Object(p.css)(u.a.a11y.visuallyHidden, ";"),
                fe = Object(p.css)(u.a.a11y.visuallyHidden, ";", u.a.a11y.focusable, ";", u.a.button.transparent, ";background:", u.a.color.white, ";display:inline-block;left:44px;text-transform:uppercase;transition:none;&:focus{margin-top:3px;padding:8px 8px 6px;}", u.a.breakpoint.mediumLarge, "{left:112px;}"),
                ve = function(e) {},
                ge = function(e) {},
                be = E()(se.a, {
                    target: "er09x8g1"
                })(u.a.button.transparent, ";border:0;padding:8px 9px;text-transform:uppercase;", ge, ";", u.a.breakpoint.medium, "{", ve, "}", u.a.breakpoint.mediumLarge, "{display:none;}"),
                ye = function(e) {},
                we = function(e) {},
                ke = E()("button", {
                    target: "er09x8g2"
                })((function(e) {}), ";", (function(e) {}), ";display:none;", u.a.breakpoint.mediumLarge, "{border:0;display:inline-block;margin-right:8px;", ve, " &:hover{", ye, ";", we, ";}}"),
                Ce = Object(p.css)("display:inline-block;height:16px;vertical-align:sub;width:16px;"),
                Be = Object(p.css)("display:none;", u.a.breakpoint.mediumLarge, "{display:inline-block;position:relative;}"),
                Ee = {
                    sections: "Sections",
                    skipContent: "Skip to content",
                    skipIndex: "Skip to site index",
                    sectionsNavigationAndSearch: "Sections Navigation & Search",
                    sectionsNavigation: "Sections Navigation"
                },
                Te = o()($, {
                    indexData: l.a
                });

            function Ae(e) {}
            Ae.displayName = "NavButtons";
            t.a = Object(r.withTheme)(Ae)
        },
        YxHs: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function() {};
            t.default = a
        },
        ZGn5: function(e, t, n) {
            "use strict";
            var a, o = n("lwsE"),
                i = n.n(o),
                s = n("W8MJ"),
                r = n.n(s),
                l = n("a1gu"),
                c = n.n(l),
                d = n("Nsbk"),
                u = n.n(d),
                p = n("7W2i"),
                m = n.n(p),
                h = n("q1tI"),
                f = (n("17x9"), n("X6oL")),
                v = n.n(f),
                g = n("9/5/"),
                b = n.n(g),
                y = v()()(a = function(e) {
                    function t() {
                        var e, n;
                        i()(this, t);
                        for (var a = arguments.length, o = new Array(a), s = 0; s < a; s++) o[s] = arguments[s];
                        return (n = c()(this, (e = u()(t)).call.apply(e, [this].concat(o)))).heartbeat = null, n.trackHeartbeat = function(e, t) {
                            document.hasFocus() && n.props.tracking.trackEvent({
                                event: "heartbeat",
                                pageview: {
                                    heartbeat: {
                                        timeSincePageDataReady: (new Date).getTime() - e,
                                        heartbeatInterval: t
                                    }
                                }
                            })
                        }, n.trackScrollComplete = function() {}, n.handleScroll = b()(n.trackScrollComplete, 250), n
                    }
                    return m()(t, e), r()(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = (new Date).getTime();
                            this.heartbeat = setInterval((function() {
                                return e.trackHeartbeat(t, 5e3)
                            }), 5e3), window.addEventListener("scroll", this.handleScroll)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return this.props.children
                        }
                    }]), t
                }(h.Component)) || a;
            t.a = y
        },
        ZKN5: function(e, t, n) {
            "use strict";
            var a = n("lwsE"),
                o = n.n(a),
                i = n("W8MJ"),
                s = n.n(i),
                r = n("a1gu"),
                l = n.n(r),
                c = n("Nsbk"),
                d = n.n(c),
                u = n("7W2i"),
                p = n.n(u),
                m = (n("f3/d"), n("q1tI")),
                h = n.n(m),
                f = n("2mql"),
                v = n.n(f),
                g = n("+mLS");
            t.a = function(e) {
                var t = e.displayName || e.name || "Component";
                if ("production" !== vi.env.NODE_ENV) return e;
                var n = function(t) {
                    function n() {}
                    return p()(n, t), s()(n, [{
                        key: "componentDidCatch",
                        value: function(t, n) {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), n
                }(m.Component);
                return n.displayName = "ErrorBoundary", n.displayName = "withErrorBoundary(".concat(t, ")"), v()(n, e), n
            }
        },
        Zrq6: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("q1tI"));

            function i(e) {}
            var s = {
                debugInfo: function(e) {},
                getDebugWidth: i,
                getDebugStyle: function(e) {}
            };
            t.default = s
        },
        aRw7: function(e, t) {
            e.exports = {
                commentsPanelAvatarUploadEnabled: !0,
                commentsApiEnabled: !1,
                commentsPanelEnabledDesktop: !0,
                commentsPanelEnabledMobile: !0,
                personalizationEnabled: !0,
                onboardingAppDownloadMC4Enabled: !0,
                onboardingHeadlinesFlowEnabled: !1,
                onboardingLoginInterrupterEnabled: !0,
                onboardingWontRegiEnabled: !0,
                getStartedInTheGatewayEnabled: !1,
                magnoliaMigrationEnabled: !0,
                onboardingAppDownloadIncognitoEnabled: !0
            }
        },
        aVaz: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {}));
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("91GP"), n("lwsE")),
                s = n.n(i),
                r = n("W8MJ"),
                l = n.n(r),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                h = n.n(m),
                f = n("q1tI"),
                v = (n("17x9"), n("UmXO")),
                g = n("E+oP"),
                b = n.n(g),
                y = n("28Yi"),
                w = Object(v.css)("height:100%;"),
                k = function(e) {
                    function t() {}
                    return h()(t, e), l()(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "shouldComponentUpdate",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component);
            k.displayName = "OptimizelyContainer", k.defaultProps = {
                children: null,
                defaults: null,
                sources: null,
                className: ""
            }
        },
        aanX: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r;
            var o = a(n("q1tI")),
                i = (a(n("17x9")), n("UmXO")),
                s = a(n("wXC7"));

            function r(e) {}
            r.displayName = "CloseIcon", r.defaultProps = {
                className: "",
                stroke: s.default.color.black,
                strokeWidth: "1"
            }
        },
        b4QB: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {})), n.d(t, "d", (function() {})), n.d(t, "f", (function() {})), n.d(t, "a", (function() {})), n.d(t, "c", (function() {})), n.d(t, "b", (function() {}));
            var a = "RegiWall",
                o = "regiwall_design_test",
                i = "https://www.nytimes.com/subscription/multiproduct/lp8KQUS.html",
                s = "7QQFH",
                r = "https://myaccount.nytimes.com/auth/register",
                l = "https://myaccount.nytimes.com/auth/login"
        },
        bNI1: function(e) {
            e.exports = {
                version: "2017b",
                zones: ["America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "Etc/UTC|UTC|0|0|"],
                links: []
            }
        },
        bQ5B: function(e, t, n) {
            "use strict";
            n("f3/d");
            var a = n("pVnL"),
                o = n.n(a),
                i = n("lwsE"),
                s = n.n(i),
                r = n("W8MJ"),
                l = n.n(r),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                h = n.n(m),
                f = n("q1tI"),
                v = n.n(f),
                g = n("UQ7B"),
                b = n("+mLS");
            t.a = function(e) {
                var t = function(t) {
                    function n() {}
                    return h()(n, t), l()(n, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), n
                }(f.Component);
                t.displayName = "WithGeolocation";
                var n = e.displayName || e.name || "Component";
                return t.displayName = "WithGeolocation(".concat(n, ")"), t
            }
        },
        bTwT: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function(e) {};
            t.default = a
        },
        cJEC: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("YxHs")),
                i = function() {};
            t.default = i
        },
        cNGg: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ccpaIsAdCollapsed = function() {}, t.ccpaIsAdNonPersonalized = function() {};
            var o = a(n("ei0D")),
                i = {
                    adConfigPosition: 1,
                    nonPersonalized: "n",
                    collapsed: "c"
                };

            function s() {}
        },
        cTL7: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("lwsE"),
                s = n.n(i),
                r = n("W8MJ"),
                l = n.n(r),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                h = n.n(m),
                f = n("q1tI"),
                v = n("UmXO"),
                g = Object(v.css)("display:block;margin-top:15px;"),
                b = Object(v.css)("&[type='text']{height:35px;vertical-align:middle;border:1px solid gray;float:left;margin-right:10px;padding-left:10px;padding-right:10px;}"),
                y = Object(v.css)("border:1px solid gray;border-radius:3px;height:35px;font-weight:bold;padding-left:10px;padding-right:10px;vertical-align:middle;&:hover{background:rgba(0,0,0,0.3);color:white;}&:disabled{cursor:default;opacity:0.5;}"),
                w = "Search NYTimes.com",
                k = "Go",
                C = function(e) {
                    function t() {}
                    return h()(t, e), l()(t, [{
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component);
            C.displayName = "NotFoundSearch";
            t.a = C
        },
        "dO+a": function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r;
            var o = a(n("q1tI")),
                i = (a(n("17x9")), n("UmXO")),
                s = a(n("wXC7"));

            function r(e) {}
            r.displayName = "TMagLogo", r.defaultProps = {
                className: "",
                fill: s.default.color.black
            }
        },
        dlEz: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("lwsE"),
                s = n.n(i),
                r = n("W8MJ"),
                l = n.n(r),
                c = n("a1gu"),
                d = n.n(c),
                u = n("Nsbk"),
                p = n.n(u),
                m = n("7W2i"),
                h = n.n(m),
                f = n("q1tI"),
                v = (n("17x9"), n("41jq")),
                g = n("QXZS"),
                b = {
                    elapsed: g.f,
                    "elapsed-with-label": g.f,
                    "elapsed-with-year": g.g,
                    "short-elapsed": g.j,
                    "nyt-date": g.b,
                    "full-date": g.h,
                    "masthead-date": g.i,
                    "abbreviated-date": g.a,
                    "es-masthead-date": g.e,
                    "es-elapsed-with-year": g.d,
                    "es-nyt-date": g.c
                },
                y = function(e) {
                    function t() {}
                    return h()(t, e), l()(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {}
                    }, {
                        key: "formatTime",
                        value: function() {}
                    }, {
                        key: "toLocale",
                        value: function(e, t) {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(f.Component);
            y.displayName = "Timestamp", y.defaultProps = {
                unix: void 0,
                iso: void 0,
                className: void 0,
                updatedText: !1,
                updatedTextClassName: void 0,
                theme: void 0
            }, t.a = Object(v.withTheme)(y)
        },
        eJDT: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {})), n.d(t, "d", (function() {})), n.d(t, "e", (function() {})), n.d(t, "f", (function() {})), n.d(t, "g", (function() {})), n.d(t, "b", (function() {})), n.d(t, "a", (function() {
                return p
            }));
            n("SRfc"), n("Oyvg"), n("cr+I");
            var a = new RegExp("(?:contentUri=)(nyt://([^/]+)/[a-zA-Z0-9-]*)"),
                o = new RegExp("(nyt://([^/]+)/[a-zA-Z0-9-]*)");
            var i = function(e) {
                    return function(t) {}
                },
                s = i("article"),
                r = i("capsule"),
                l = i("legacycollection"),
                c = (i("interactive"), i("paidpost")),
                d = i("slideshow");

            function u(e) {}

            function p(e) {
                if (!e) return null;
                if (e.contentUri) {
                    var t = e.contentUri.match(o);
                    if (t) return t[2]
                }
                if (e.url) {
                    var n = decodeURIComponent(e.url).match(a);
                    if (n) return n[2]
                }
                return null
            }
        },
        eJXx: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = {
                widthHelper: function(e) {},
                pageMargin: 20
            };
            t.default = a
        },
        ecgq: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {})), n.d(t, "a", (function() {}));
            var a = n("60yG"),
                o = n.n(a),
                i = function(e) {},
                s = function(e) {}
        },
        ei0D: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {}
        },
        "f+2V": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "b", (function() {})), n.d(t, "c", (function() {}));
            var a = function(e, t) {},
                o = function(e, t) {},
                i = function(e, t) {}
        },
        h23B: function(e, t) {
            e.exports = "/vi-assets/static-assets/ios-ipad-144x144-319373aaf4524d94d38aa599c56b8655.png"
        },
        hNYz: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSubscriber = t.isLoggedIn = void 0;
            t.isLoggedIn = function(e) {};
            t.isSubscriber = function(e) {}
        },
        hdh8: function(e) {
            e.exports = {
                __schema: {
                    types: [{
                        kind: "INPUT_OBJECT",
                        name: "CreateNewsletterSubscriptionInput",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CreateNewsletterSubscriptionResult",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCodeRedeemed",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "GiftRedemptionResult",
                        possibleTypes: [{
                            name: "GiftCodeRedeemed"
                        }, {
                            name: "SessionExpired"
                        }, {
                            name: "SessionNotFound"
                        }, {
                            name: "GiftCodeAlreadyRedeemed"
                        }, {
                            name: "GiftCodeInvalid"
                        }, {
                            name: "GiftCodeExpired"
                        }, {
                            name: "GiftCodeMaxOut"
                        }, {
                            name: "GiftInvalidEduDomain"
                        }, {
                            name: "GiftUserSubscribed"
                        }, {
                            name: "GiftCreditCardDeclined"
                        }, {
                            name: "GiftCodeRefunded"
                        }, {
                            name: "GiftCreditCardPending"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Keyword",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Misspell",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Mutation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PublicationProperties",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "ReadingListMutation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReadingListMutationResult",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "RelayMutation",
                        possibleTypes: [{
                            name: "CreateNewsletterSubscriptionResult"
                        }, {
                            name: "ReadingListMutationResult"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "SessionNotFound",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Subject",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SubjectTaxonomicRelation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SubscribeToTheHeadlinesResult",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Subtype",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "SyndicationType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SyndicationUrl",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Title",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "UpsellOfferResult",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AdTargetingParam",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AddByline",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AddCrop",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AddCropRendition",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AddMedia",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AddNode",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AddResult",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AddSection",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "AddendumType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Advert_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AggregatedList",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Align",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "AnyProgramBlock_Beta",
                        possibleTypes: [{
                            name: "Block_Beta"
                        }, {
                            name: "MultiListBlock_Beta"
                        }, {
                            name: "PersonalizedBlock_Beta"
                        }]
                    }, {
                        kind: "UNION",
                        name: "AnyWork",
                        possibleTypes: [{
                            name: "ExternalWork"
                        }, {
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "Capsule"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "HelixNewsletter"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "Page"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Video"
                        }, {
                            name: "Guide"
                        }, {
                            name: "Podcast"
                        }, {
                            name: "Person"
                        }, {
                            name: "Recipe"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Article",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleArchiveProperties",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleArchivePropertiesPrintInformation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleArchivePropertiesProquestProperties",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleArchivePropertiesReskeys",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleArchivePropertiesSourceFile",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleArchivePropertiesThumbnail",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleDateline",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleEpisodeProperties",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleEpisodePropertiesLink",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleLegacyData",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleReviewItem",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ArticleTranslation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskAdvancedCardModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "AskAnswerDocumentContent_Beta",
                        possibleTypes: [{
                            name: "AskAnswerModule_Beta"
                        }, {
                            name: "AskRelatedGroupModule_Beta"
                        }, {
                            name: "AskGroupModule_Beta"
                        }, {
                            name: "AskTextGroupModule_Beta"
                        }, {
                            name: "AskCardGroupModule_Beta"
                        }, {
                            name: "AskMediaModule_Beta"
                        }, {
                            name: "AskAdvancedCardModule_Beta"
                        }, {
                            name: "AskTextModule_Beta"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "AskAnswerDocument_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskAnswerModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "AskAsset_Beta",
                        possibleTypes: [{
                            name: "Image"
                        }, {
                            name: "Video"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "AskCardGroupModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "AskDocument_Beta",
                        possibleTypes: [{
                            name: "AskAnswerDocument_Beta"
                        }, {
                            name: "AskHubDocument_Beta"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "AskEditor_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskGroupModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "AskHubDocumentContent_Beta",
                        possibleTypes: [{
                            name: "AskHubModule_Beta"
                        }, {
                            name: "AskPromptModule_Beta"
                        }, {
                            name: "AskRelatedGroupModule_Beta"
                        }, {
                            name: "AskPromptGroupModule_Beta"
                        }, {
                            name: "AskGroupModule_Beta"
                        }, {
                            name: "AskTextGroupModule_Beta"
                        }, {
                            name: "AskCardGroupModule_Beta"
                        }, {
                            name: "AskMediaModule_Beta"
                        }, {
                            name: "AskAdvancedCardModule_Beta"
                        }, {
                            name: "AskTextModule_Beta"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "AskHubDocument_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskHubModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskMediaModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "AskModuleInterface_Beta",
                        possibleTypes: [{
                            name: "AskAdvancedCardModule_Beta"
                        }, {
                            name: "AskAnswerModule_Beta"
                        }, {
                            name: "AskCardGroupModule_Beta"
                        }, {
                            name: "AskGroupModule_Beta"
                        }, {
                            name: "AskHubModule_Beta"
                        }, {
                            name: "AskMediaModule_Beta"
                        }, {
                            name: "AskPromptGroupModule_Beta"
                        }, {
                            name: "AskPromptModule_Beta"
                        }, {
                            name: "AskRelatedGroupModule_Beta"
                        }, {
                            name: "AskTextGroupModule_Beta"
                        }, {
                            name: "AskTextModule_Beta"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "AskPromptGroupModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskPromptModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskRelatedGroupModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskSlug_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskTag_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskTextGroupModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AskTextModule_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AssetsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AssetsEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Audio",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioPodcastSeries",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioSubscribeUrl",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioTimecode",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioTranscript",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioTranscriptFragment",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AudioTranslation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "AuthorCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerBook",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerBookIsbn",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerBookList",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "BestSellerBookListType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerBookListsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerBookListsEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerBooksConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerBooksEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerCorrection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerNavigation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellerOverview",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BestSellers",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "BlockInterface_beta",
                        possibleTypes: [{
                            name: "Block_Beta"
                        }, {
                            name: "MultiListBlock_Beta"
                        }, {
                            name: "PersonalizedBlock_Beta"
                        }]
                    }, {
                        kind: "ENUM",
                        name: "BlockStyle_Beta",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "BlockTone_Beta",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "BlockUnion",
                        possibleTypes: [{
                            name: "ParagraphBlock"
                        }, {
                            name: "Heading1Block"
                        }, {
                            name: "Heading2Block"
                        }, {
                            name: "Heading3Block"
                        }, {
                            name: "BylineBlock"
                        }, {
                            name: "BlockquoteBlock"
                        }, {
                            name: "RuleBlock"
                        }, {
                            name: "ImageBlock"
                        }, {
                            name: "VideoBlock"
                        }, {
                            name: "TimestampBlock"
                        }, {
                            name: "DetailBlock"
                        }, {
                            name: "InteractiveBlock"
                        }, {
                            name: "UnstructuredBlock"
                        }, {
                            name: "TwitterEmbedBlock"
                        }, {
                            name: "YouTubeEmbedBlock"
                        }, {
                            name: "HeaderBasicBlock"
                        }, {
                            name: "SummaryBlock"
                        }, {
                            name: "LabelBlock"
                        }, {
                            name: "SoundcloudEmbedBlock"
                        }, {
                            name: "SpotifyEmbedBlock"
                        }, {
                            name: "Dropzone"
                        }, {
                            name: "SlideshowBlock"
                        }, {
                            name: "HeaderLegacyBlock"
                        }, {
                            name: "ListBlock"
                        }, {
                            name: "AudioBlock"
                        }, {
                            name: "HeaderFullBleedHorizontalBlock"
                        }, {
                            name: "LegacyTableBlock"
                        }, {
                            name: "HeaderFullBleedProTopperBlock"
                        }, {
                            name: "HeaderFullBleedVerticalBlock"
                        }, {
                            name: "HeaderFullBleedTopBlock"
                        }, {
                            name: "InstagramEmbedBlock"
                        }, {
                            name: "HeaderLiveBriefingBlock"
                        }, {
                            name: "RelatedLinksBlock"
                        }, {
                            name: "ClaimReviewBlock"
                        }, {
                            name: "DiptychBlock"
                        }, {
                            name: "HeaderMultimediaBlock"
                        }, {
                            name: "EmailSignupBlock"
                        }, {
                            name: "PullquoteBlock"
                        }, {
                            name: "InlineQuoteBlock"
                        }, {
                            name: "CapsuleBlock"
                        }]
                    }, {
                        kind: "INTERFACE",
                        name: "BlockWithFallback",
                        possibleTypes: [{
                            name: "HeaderFullBleedHorizontalBlock"
                        }, {
                            name: "HeaderFullBleedProTopperBlock"
                        }, {
                            name: "HeaderFullBleedTopBlock"
                        }, {
                            name: "HeaderFullBleedVerticalBlock"
                        }, {
                            name: "HeaderLiveBriefingBlock"
                        }, {
                            name: "HeaderMultimediaBlock"
                        }, {
                            name: "InstagramEmbedBlock"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Block_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BlockquoteBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "BlockquoteBlockContentUnion",
                        possibleTypes: [{
                            name: "ParagraphBlock"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "BodegaResult",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BoldFormat",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Book",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BookBuyLink",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BulletedCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BundleSubscription",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Byline",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "BylineBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "BylineCreator",
                        possibleTypes: [{
                            name: "Person"
                        }, {
                            name: "Organization"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Capsule",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CapsuleBlock",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "CardInterface",
                        possibleTypes: [{
                            name: "AudioCard"
                        }, {
                            name: "AuthorCard"
                        }, {
                            name: "BulletedCard"
                        }, {
                            name: "ExcerptCard"
                        }, {
                            name: "InteractiveCard"
                        }, {
                            name: "SlideshowCard"
                        }, {
                            name: "StandardCard"
                        }, {
                            name: "TextCard"
                        }, {
                            name: "UrgentCard"
                        }, {
                            name: "VideoCard"
                        }, {
                            name: "VisualCard"
                        }]
                    }, {
                        kind: "ENUM",
                        name: "CardType",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "CardUnion",
                        possibleTypes: [{
                            name: "AudioCard"
                        }, {
                            name: "AuthorCard"
                        }, {
                            name: "BulletedCard"
                        }, {
                            name: "ExcerptCard"
                        }, {
                            name: "SlideshowCard"
                        }, {
                            name: "TextCard"
                        }, {
                            name: "UrgentCard"
                        }, {
                            name: "VideoCard"
                        }, {
                            name: "VisualCard"
                        }, {
                            name: "InteractiveCard"
                        }, {
                            name: "StandardCard"
                        }]
                    }, {
                        kind: "ENUM",
                        name: "Category",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Channel",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ChannelMetadata",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ChannelMetadatasConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ChannelMetadatasEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ChannelsCategory",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "ChannelsCategoryContext",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ClaimReviewBlock",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "ClientAdParams",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "Collection",
                        possibleTypes: [{
                            name: "LegacyCollection"
                        }, {
                            name: "Person"
                        }, {
                            name: "Podcast"
                        }]
                    }, {
                        kind: "ENUM",
                        name: "CollectionType",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "CommentStatus",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Commentary",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "CommentaryAsset",
                        possibleTypes: [{
                            name: "ExternalFollowAsset"
                        }, {
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "Package"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Guide"
                        }, {
                            name: "Promo"
                        }, {
                            name: "Recipe"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Video"
                        }, {
                            name: "Podcast"
                        }]
                    }, {
                        kind: "ENUM",
                        name: "CommentsDisplayOption",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Compatibility",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CompatibilityFeatures",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "ConditionType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ContactDetails",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ContactDetailsAddress",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ContactDetailsPhoneNumber",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ContactDetailsPostalAddress",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ContactDetailsSocialMedia",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "ContactType",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "CreativeWork",
                        possibleTypes: [{
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "Capsule"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Guide"
                        }, {
                            name: "HelixNewsletter"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "Page"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Podcast"
                        }, {
                            name: "Recipe"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Video"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "CreativeWorkAddendum",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CreativeWorkAddendumPrintInformation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CreativeWorkAdvertisingProperties",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CreativeWorkCommentProperties",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CreativeWorkDisplayProperties",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "CreativeWorkHeadline",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Credit",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "CreditCreator",
                        possibleTypes: [{
                            name: "Person"
                        }, {
                            name: "Organization"
                        }]
                    }, {
                        kind: "SCALAR",
                        name: "DateTime",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "DayOfWeek",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Demographics",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DetailBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Dining",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "DiningFacets",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "DiningRating",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DiptychBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Dispatch",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DispatchEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DispatchItem",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "DispatchItemType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DispatchList",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DispatchListPromotionalModule",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "DispatchListPromotionalModuleType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DispatchListTopic",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DispatchesConnection",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "DisplayStyleType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DocumentBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "DropcapFormat",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Dropzone",
                        possibleTypes: null
                    }, {
                        kind: "SCALAR",
                        name: "Duration",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "EmailSignupBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "EmailSignupBlockDefaults",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "EmbeddedInteractive",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Entitlement",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ExcerptCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ExpiredWork",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ExternalFollowAsset",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ExternalWork",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "FallbackBlockUnion",
                        possibleTypes: [{
                            name: "HeaderLegacyBlock"
                        }, {
                            name: "TextOnlyDocumentBlock"
                        }]
                    }, {
                        kind: "UNION",
                        name: "FollowAsset",
                        possibleTypes: [{
                            name: "ExternalFollowAsset"
                        }, {
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "Package"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Guide"
                        }, {
                            name: "Promo"
                        }, {
                            name: "Recipe"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Video"
                        }, {
                            name: "Commentary"
                        }, {
                            name: "Podcast"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "FollowAssetsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "FollowAssetsEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "FollowFeedAssetsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "FollowFeedAssetsEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "FollowStatus",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "FormatUnion",
                        possibleTypes: [{
                            name: "BoldFormat"
                        }, {
                            name: "ItalicFormat"
                        }, {
                            name: "LinkFormat"
                        }, {
                            name: "SubscriptFormat"
                        }, {
                            name: "SuperscriptFormat"
                        }, {
                            name: "DropcapFormat"
                        }, {
                            name: "StrikethroughFormat"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Geo",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GeoCoordinates",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCodeAlreadyRedeemed",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCodeExpired",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCodeInvalid",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCodeMaxOut",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCodeRefunded",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCreditCardDeclined",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftCreditCardPending",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "GiftErrorResult",
                        possibleTypes: [{
                            name: "GiftCodeAlreadyRedeemed"
                        }, {
                            name: "GiftCodeExpired"
                        }, {
                            name: "GiftCodeInvalid"
                        }, {
                            name: "GiftCodeMaxOut"
                        }, {
                            name: "GiftCodeRefunded"
                        }, {
                            name: "GiftCreditCardDeclined"
                        }, {
                            name: "GiftCreditCardPending"
                        }, {
                            name: "GiftInvalidEduDomain"
                        }, {
                            name: "GiftUserSubscribed"
                        }, {
                            name: "SessionExpired"
                        }, {
                            name: "SessionNotFound"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "GiftInfo",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "GiftInfoResult",
                        possibleTypes: [{
                            name: "GiftInfo"
                        }, {
                            name: "SessionExpired"
                        }, {
                            name: "GiftCodeAlreadyRedeemed"
                        }, {
                            name: "GiftCodeInvalid"
                        }, {
                            name: "GiftCodeExpired"
                        }, {
                            name: "GiftCodeMaxOut"
                        }, {
                            name: "GiftInvalidEduDomain"
                        }, {
                            name: "GiftUserSubscribed"
                        }, {
                            name: "GiftCreditCardDeclined"
                        }, {
                            name: "GiftCodeRefunded"
                        }, {
                            name: "GiftCreditCardPending"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "GiftInvalidEduDomain",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftUpsell",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "GiftUserSubscribed",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Guide",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "HasHybridProperties",
                        possibleTypes: [{
                            name: "Article"
                        }, {
                            name: "DispatchList"
                        }, {
                            name: "EmbeddedInteractive"
                        }]
                    }, {
                        kind: "INTERFACE",
                        name: "HasPromotionalProperties",
                        possibleTypes: [{
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Guide"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "Package"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Podcast"
                        }, {
                            name: "Promo"
                        }, {
                            name: "Recipe"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Video"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "HeaderBasicBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "HeaderBasicBlockHeadline",
                        possibleTypes: [{
                            name: "Heading1Block"
                        }, {
                            name: "Heading2Block"
                        }, {
                            name: "Heading3Block"
                        }]
                    }, {
                        kind: "UNION",
                        name: "HeaderBasicBlockLedeMedia",
                        possibleTypes: [{
                            name: "ImageBlock"
                        }, {
                            name: "VideoBlock"
                        }, {
                            name: "SlideshowBlock"
                        }]
                    }, {
                        kind: "INTERFACE",
                        name: "HeaderFullBleed",
                        possibleTypes: [{
                            name: "HeaderFullBleedHorizontalBlock"
                        }, {
                            name: "HeaderFullBleedProTopperBlock"
                        }, {
                            name: "HeaderFullBleedTopBlock"
                        }, {
                            name: "HeaderFullBleedVerticalBlock"
                        }]
                    }, {
                        kind: "UNION",
                        name: "HeaderFullBleedHeadline",
                        possibleTypes: [{
                            name: "Heading1Block"
                        }, {
                            name: "Heading2Block"
                        }, {
                            name: "Heading3Block"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "HeaderFullBleedHorizontalBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "HeaderFullBleedLedeMedia",
                        possibleTypes: [{
                            name: "ImageBlock"
                        }, {
                            name: "VideoBlock"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "HeaderFullBleedProTopperBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HeaderFullBleedTopBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HeaderFullBleedVerticalBlock",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "HeaderFullBleedVerticalBlockAlignment",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HeaderLegacyBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "HeaderLegacyBlockLedeMedia",
                        possibleTypes: [{
                            name: "ImageBlock"
                        }, {
                            name: "VideoBlock"
                        }, {
                            name: "SlideshowBlock"
                        }, {
                            name: "InteractiveBlock"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "HeaderLiveBriefingBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HeaderLiveBriefingLatestUpdateBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HeaderMultimediaBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "HeaderMultimediaBlockHeadline",
                        possibleTypes: [{
                            name: "Heading1Block"
                        }, {
                            name: "Heading2Block"
                        }, {
                            name: "Heading3Block"
                        }]
                    }, {
                        kind: "UNION",
                        name: "HeaderMultimediaBlockMedia",
                        possibleTypes: [{
                            name: "AudioBlock"
                        }, {
                            name: "VideoBlock"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Heading1Block",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Heading2Block",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Heading3Block",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "HeadlineColor",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HelixNewsletter",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HelixNewsletterProduct",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HybridDocumentBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HybridImage",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HybridImageCrop",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HybridMainBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "HybridSubResource",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Image",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ImageBleed",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ImageBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ImageBox",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ImageCrop",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "ImageCropName",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "ImageFormat",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ImageOriginal",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ImageRendition",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ImageTranslation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "InferredRecommendationAsset",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Ingredient",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "InlineQuoteBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "InlineQuoteBlockContentUnion",
                        possibleTypes: [{
                            name: "ParagraphBlock"
                        }]
                    }, {
                        kind: "UNION",
                        name: "InlineUnion",
                        possibleTypes: [{
                            name: "TextInline"
                        }, {
                            name: "LineBreakInline"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "InstagramEmbedBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Interactive",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "InteractiveBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "InteractiveCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "InteractiveTextFormats",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "InteractiveTranslation",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "InteractiveWork",
                        possibleTypes: [{
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Interactive"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "ItalicFormat",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LabelBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Language",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacyCollection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacyCollectionContainer",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacyCollectionGrouping",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacyCollectionRelation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacyCollectionTopic",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "LegacyResult",
                        possibleTypes: [{
                            name: "AddResult"
                        }, {
                            name: "BodegaResult"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "LegacySearchHitsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacySearchHitsEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacySearchResult",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LegacyTableBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LineBreakInline",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LinkFormat",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "Linkable",
                        possibleTypes: [{
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Guide"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "Keyword"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "List"
                        }, {
                            name: "Location"
                        }, {
                            name: "Misspell"
                        }, {
                            name: "Organization"
                        }, {
                            name: "Package"
                        }, {
                            name: "Page"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "Person"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Promo"
                        }, {
                            name: "Section"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Subject"
                        }, {
                            name: "Title"
                        }, {
                            name: "Video"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "List",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ListBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ListItemBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "ListItemBlockContent",
                        possibleTypes: [{
                            name: "ParagraphBlock"
                        }, {
                            name: "ListBlock"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Lists",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Location",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LocationGeoCoordinates",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "LocationGeoDetails",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "MastheadStyle",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "MediaEmphasis",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "MostPopularAssetsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "MostPopularAssetsEdge",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "MostPopularCriteria",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "MostPopularType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Movie",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "MovieCastMember",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "MovieFacets",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Movies",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "MultiListBlock_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Neighborhood",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "NewsAlert",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "NewsAlertAlertTypes",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "NewsAlertChannels",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "NewsStatusType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Newsletter",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "NewsletterConfig",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "NewsletterSection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "NewsletterSectionConfig",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "Node",
                        possibleTypes: [{
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "BestSellerBook"
                        }, {
                            name: "BestSellerBookList"
                        }, {
                            name: "Block_Beta"
                        }, {
                            name: "Channel"
                        }, {
                            name: "Dispatch"
                        }, {
                            name: "DispatchList"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "ExpiredWork"
                        }, {
                            name: "ExternalWork"
                        }, {
                            name: "Guide"
                        }, {
                            name: "HelixNewsletter"
                        }, {
                            name: "HelixNewsletterProduct"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "Keyword"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "List"
                        }, {
                            name: "Location"
                        }, {
                            name: "Misspell"
                        }, {
                            name: "MultiListBlock_Beta"
                        }, {
                            name: "NewsletterConfig"
                        }, {
                            name: "Organization"
                        }, {
                            name: "Package"
                        }, {
                            name: "Page"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Person"
                        }, {
                            name: "PersonalizedBlock_Beta"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Podcast"
                        }, {
                            name: "Program_Beta"
                        }, {
                            name: "Promo"
                        }, {
                            name: "Restaurant"
                        }, {
                            name: "Section"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Subject"
                        }, {
                            name: "Title"
                        }, {
                            name: "Video"
                        }]
                    }, {
                        kind: "SCALAR",
                        name: "NonEmptyString",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Organization",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "OrganizationTickerSymbol",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Package",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PackageAssetDisplayOptions",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Page",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PageCategory",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PageCollection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PageInfo",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PageRegion",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PaidPost",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ParagraphBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ParentingArticle",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Person",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PersonLegacyData",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "PersonalizationAppType",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "PersonalizationDeviceType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PersonalizationProperties",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PersonalizationPropertiesAudienceTarget",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PersonalizedBlock_Beta",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "PersonalizedItem",
                        possibleTypes: [{
                            name: "Image"
                        }, {
                            name: "Video"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "Audio"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Article"
                        }, {
                            name: "Promo"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Guide"
                        }, {
                            name: "Package"
                        }, {
                            name: "Recipe"
                        }, {
                            name: "Podcast"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "PersonalizedItemsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PersonalizedItemsEdge",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "PersonalizedListContext",
                        possibleTypes: null
                    }, {
                        kind: "SCALAR",
                        name: "PersonalizedListUri",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "PhoneType",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Platform",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Playlist",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Podcast",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "PodcastService",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PodcastSubscriptionUrl",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PreviousName",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PrintInformation",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "ProgramBlockUnion_Beta",
                        possibleTypes: [{
                            name: "Block_Beta"
                        }, {
                            name: "MultiListBlock_Beta"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "ProgramContentBlockConnection_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ProgramContentBlockEdge_Beta",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "ProgramContentBlockUnion_Beta",
                        possibleTypes: [{
                            name: "Block_Beta"
                        }, {
                            name: "PersonalizedBlock_Beta"
                        }]
                    }, {
                        kind: "ENUM",
                        name: "ProgramLayoutSize",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Program_Beta",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "Programmable_Beta",
                        possibleTypes: [{
                            name: "Block_Beta"
                        }, {
                            name: "MultiListBlock_Beta"
                        }, {
                            name: "Advert_Beta"
                        }, {
                            name: "PersonalizedBlock_Beta"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "ProgrammablesConnection_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ProgrammablesEdge_Beta",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Promo",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "PromotionalProperties",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "PromotionalPropertiesMedia",
                        possibleTypes: [{
                            name: "Image"
                        }, {
                            name: "Video"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Article"
                        }, {
                            name: "Promo"
                        }, {
                            name: "Audio"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "PromotionalVariant",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "Published",
                        possibleTypes: [{
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "Capsule"
                        }, {
                            name: "Dispatch"
                        }, {
                            name: "DispatchList"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "Guide"
                        }, {
                            name: "HelixNewsletter"
                        }, {
                            name: "HelixNewsletterProduct"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "Keyword"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "List"
                        }, {
                            name: "Location"
                        }, {
                            name: "Misspell"
                        }, {
                            name: "Movie"
                        }, {
                            name: "NewsAlert"
                        }, {
                            name: "Organization"
                        }, {
                            name: "Package"
                        }, {
                            name: "Page"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Person"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Podcast"
                        }, {
                            name: "Promo"
                        }, {
                            name: "Recipe"
                        }, {
                            name: "Restaurant"
                        }, {
                            name: "Section"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Subject"
                        }, {
                            name: "TheaterEvent"
                        }, {
                            name: "TheaterVenue"
                        }, {
                            name: "Title"
                        }, {
                            name: "Video"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "PullquoteBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Query",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReadingListAssetsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReadingListAssetsEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReadingListAssetsEdgeMetadata",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReadingListMetadata",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReadingListStatus",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReadingListSummary",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Recipe",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "RecipeTag",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "RelatedLinksBlock",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "RelatedLinksBlockDisplayStyle",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "RelationType",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "RelayConnection",
                        possibleTypes: [{
                            name: "AssetsConnection"
                        }, {
                            name: "BestSellerBookListsConnection"
                        }, {
                            name: "BestSellerBooksConnection"
                        }, {
                            name: "ChannelMetadatasConnection"
                        }, {
                            name: "DispatchesConnection"
                        }, {
                            name: "FollowAssetsConnection"
                        }, {
                            name: "FollowFeedAssetsConnection"
                        }, {
                            name: "LegacySearchHitsConnection"
                        }, {
                            name: "MostPopularAssetsConnection"
                        }, {
                            name: "PersonalizedItemsConnection"
                        }, {
                            name: "ProgramContentBlockConnection_Beta"
                        }, {
                            name: "ProgrammablesConnection_Beta"
                        }, {
                            name: "ReadingListAssetsConnection"
                        }, {
                            name: "ReviewsAssetsConnection"
                        }, {
                            name: "VideosConnection"
                        }]
                    }, {
                        kind: "INTERFACE",
                        name: "RelayEdge",
                        possibleTypes: [{
                            name: "AssetsEdge"
                        }, {
                            name: "BestSellerBookListsEdge"
                        }, {
                            name: "BestSellerBooksEdge"
                        }, {
                            name: "ChannelMetadatasEdge"
                        }, {
                            name: "DispatchEdge"
                        }, {
                            name: "FollowAssetsEdge"
                        }, {
                            name: "FollowFeedAssetsEdge"
                        }, {
                            name: "LegacySearchHitsEdge"
                        }, {
                            name: "MostPopularAssetsEdge"
                        }, {
                            name: "PersonalizedItemsEdge"
                        }, {
                            name: "ProgramContentBlockEdge_Beta"
                        }, {
                            name: "ProgrammablesEdge_Beta"
                        }, {
                            name: "ReadingListAssetsEdge"
                        }, {
                            name: "ReviewsAssetsEdge"
                        }, {
                            name: "VideosEdge"
                        }]
                    }, {
                        kind: "INTERFACE",
                        name: "RelayGraph",
                        possibleTypes: [{
                            name: "Query"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "RelocatedWork",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Restaurant",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "RestaurantMeal",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "RestaurantOpenStatus",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "RestaurantPaymentMethod",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "RestaurantPriceCategory",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "ReviewItem",
                        possibleTypes: [{
                            name: "TheaterEvent"
                        }, {
                            name: "Restaurant"
                        }, {
                            name: "Movie"
                        }]
                    }, {
                        kind: "UNION",
                        name: "ReviewSubject",
                        possibleTypes: [{
                            name: "TheaterEvent"
                        }, {
                            name: "Book"
                        }, {
                            name: "Restaurant"
                        }, {
                            name: "Movie"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Reviews",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReviewsAssetsConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReviewsAssetsEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "ReviewsMetadata",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "ReviewsSortOrder",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "RuleBlock",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "SearchDocumentType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SearchFacetSection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SearchFacetType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SearchFacets",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SearchHighlight",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SearchMetadata",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "SearchQuery",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "SearchSort",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SearchSpotlight",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Section",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Sensitivity",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SessionExpired",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Size",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Slideshow",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SlideshowBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SlideshowCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SlideshowSlide",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SlideshowTranslation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SoundcloudEmbedBlock",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "SoundcloudPlayerStyle",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SpotifyEmbedBlock",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "SpotifyPlayerStyle",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SprinkledConfig",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SprinkledContent",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "StandardCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Step",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "StreamExclusionMode",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "StrikethroughFormat",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Style",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SubscriptFormat",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "SuggestQuery",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SuggestResult",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Suggestion",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SummaryBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "SuperscriptFormat",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TextCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TextInline",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TextOnlyDocumentBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "TextOnlyDocumentBlockUnion",
                        possibleTypes: [{
                            name: "ParagraphBlock"
                        }, {
                            name: "RuleBlock"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "Theater",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TheaterEvent",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TheaterEventPerformance",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TheaterEventTheaterShow",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TheaterEventTicketInfo",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "TheaterFacets",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TheaterVenue",
                        possibleTypes: null
                    }, {
                        kind: "INTERFACE",
                        name: "TimesTag",
                        possibleTypes: [{
                            name: "Keyword"
                        }, {
                            name: "Location"
                        }, {
                            name: "Misspell"
                        }, {
                            name: "Organization"
                        }, {
                            name: "Person"
                        }, {
                            name: "Subject"
                        }, {
                            name: "Title"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "TimesTagLinkedData",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "TimesTagPromotionalMedia",
                        possibleTypes: [{
                            name: "Image"
                        }, {
                            name: "Video"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "Slideshow"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "TimesTagTaggingRule",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TimesTagTaggingRuleTickerization",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "TimesWireContentType",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "TimesWireFetchCriteria",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TimestampBlock",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "Tone",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "TopicCategory",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TopicCompany",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TrackingParam",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "TwitterEmbedBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "UnstructuredBlock",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "UnstructuredBlockMediaUnion",
                        possibleTypes: [{
                            name: "Image"
                        }, {
                            name: "Video"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Interactive"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "UpsellOfferStatus",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "UrgentCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "User",
                        possibleTypes: null
                    }, {
                        kind: "INPUT_OBJECT",
                        name: "UserIdentifier",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "UserInfo",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "UserProfile",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "UserSubscriptionInfo",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "UserSubscriptionStatus",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "Video",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideoBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideoCard",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideoCue",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideoExternalPlatform",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "VideoProductionType",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideoRendition",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideoTranslation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideosConnection",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VideosEdge",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "VisualCard",
                        possibleTypes: null
                    }, {
                        kind: "UNION",
                        name: "WorkOrLocation",
                        possibleTypes: [{
                            name: "ExpiredWork"
                        }, {
                            name: "RelocatedWork"
                        }, {
                            name: "Article"
                        }, {
                            name: "Audio"
                        }, {
                            name: "Capsule"
                        }, {
                            name: "EmbeddedInteractive"
                        }, {
                            name: "HelixNewsletter"
                        }, {
                            name: "Image"
                        }, {
                            name: "Interactive"
                        }, {
                            name: "LegacyCollection"
                        }, {
                            name: "Page"
                        }, {
                            name: "PaidPost"
                        }, {
                            name: "ParentingArticle"
                        }, {
                            name: "Playlist"
                        }, {
                            name: "Slideshow"
                        }, {
                            name: "Video"
                        }, {
                            name: "Guide"
                        }, {
                            name: "Podcast"
                        }, {
                            name: "Person"
                        }, {
                            name: "Recipe"
                        }]
                    }, {
                        kind: "OBJECT",
                        name: "YouTubeEmbedBlock",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "__Directive",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "__DirectiveLocation",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "__EnumValue",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "__Field",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "__InputValue",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "__Schema",
                        possibleTypes: null
                    }, {
                        kind: "OBJECT",
                        name: "__Type",
                        possibleTypes: null
                    }, {
                        kind: "ENUM",
                        name: "__TypeKind",
                        possibleTypes: null
                    }, {
                        kind: "SCALAR",
                        name: "Boolean",
                        possibleTypes: null
                    }, {
                        kind: "SCALAR",
                        name: "Float",
                        possibleTypes: null
                    }, {
                        kind: "SCALAR",
                        name: "ID",
                        possibleTypes: null
                    }, {
                        kind: "SCALAR",
                        name: "Int",
                        possibleTypes: null
                    }, {
                        kind: "SCALAR",
                        name: "String",
                        possibleTypes: null
                    }]
                }
            }
        },
        i7V7: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            n("SRfc");

            function a() {
                return !(!window.chrome || void 0 === window.chrome || "Google Inc." !== window.navigator.vendor || void 0 !== window.opr || -1 !== window.navigator.userAgent.indexOf("Edge") || window.navigator.userAgent.match("CriOS"))
            }
        },
        i7rQ: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("SMB2"), n("84bF"), n("q1tI"), n("17x9"), n("UmXO")),
                s = n("i9j7"),
                r = n.n(s),
                l = n("R+TL"),
                c = n("4Qss"),
                d = Object(i.css)("display:none;width:140px;height:19px;margin-right:40px;", l.a.breakpoint.small, "{display:inline-block;margin-top:5px;margin-bottom:5px;}@media screen and (min-width:701px){width:160px;height:22px;}"),
                u = Object(i.css)("font-size:18px;line-height:20px;font-family:", l.a.font.karnakBase, ";font-weight:", l.a.font.weight.bold, ";span{display:block;white-space:nowrap;&::after{content:'  ';white-space:pre-line;}}", l.a.breakpoint.small, "{font-size:20px;line-height:22px;}@media screen and (min-width:701px){span{display:inline;}}", l.a.breakpoint.mediumLarge, "{font-size:24px;line-height:26px;}"),
                p = Object(i.css)("margin:4px 0 7px;", l.a.breakpoint.small, "{margin-bottom:1px;}"),
                m = Object(i.css)("font-size:14px;line-height:16px;display:inline-block;padding:13px 17px 11px;color:", l.a.color.white, ";background-color:", l.a.color.black, ";font-weight:", l.a.font.weight.bold, ";text-transform:uppercase;border-radius:3px;"),
                h = Object(i.css)("font-size:15px;line-height:17px;color:", l.a.color.black, ";background-color:", l.a.color.gray80, ";display:flex;flex-flow:row wrap;align-items:center;justify-content:space-between;height:100%;box-sizing:border-box;padding:10px;border-radius:6px;font-family:", l.a.font.franklin, ";", l.a.breakpoint.small, "{font-size:18px;line-height:20px;padding:20px 30px;}", l.a.breakpoint.mediumLarge, "{font-size:20px;line-height:20px;padding-left:45px;padding-right:50px;}}"),
                f = Object(i.css)(l.a.breakpoint.mediumLarge, "{display:flex;}"),
                v = o()("span", {}, void 0, o()("span", {}, void 0, "Help Times journalists"), o()("span", {}, void 0, "uncover the next big story.")),
                g = o()("span", {}, void 0, "Subscribe to The New York Times."),
                b = function(e) {};
            b.displayName = "SubscriptionCard", t.a = b
        },
        i9j7: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = r;
            var o = a(n("q1tI")),
                i = (a(n("17x9")), n("UmXO")),
                s = a(n("wXC7"));

            function r(e) {}
            r.displayName = "NYTLogo", r.defaultProps = {
                className: "",
                fill: s.default.color.black
            }
        },
        iEFa: function(e, t) {
            e.exports = "/vi-assets/static-assets/ios-default-homescreen-57x57-7cccbfb151c7db793e92ea58c30b9e72.png"
        },
        idk4: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "TEST_NAME", (function() {})), n.d(t, "VARIANTS", (function() {})), n.d(t, "CSS_SELECTORS", (function() {
                return i
            })), n.d(t, "SUBSCRIBE_LINK", (function() {})), n.d(t, "SUBSCRIBE_REDIRECT_URL", (function() {}));
            var a = "FREEX_Anon_Diff_Story",
                o = {
                    C: "0_Control",
                    V1: "1_Name_Intro_Bottom",
                    V2: "2_Name_Bottom_Trunc",
                    V3: "3_Name_Bottom_Dock",
                    V4: "4_Name_Intro",
                    V5: "5_Name_Trunc",
                    V6: "6_Name_Dock"
                },
                i = {
                    C: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story=0_Control"] &',
                    V1: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story=1_Name_Intro_Bottom"] &',
                    V2: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story=2_Name_Bottom_Trunc"] &',
                    V3: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story=3_Name_Bottom_Dock"] &',
                    V4: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story=4_Name_Intro"] &',
                    V5: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story=5_Name_Trunc"] &',
                    V6: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story=6_Name_Dock"] &',
                    ALL: 'html[data-nyt-ab*="FREEX_Anon_Diff_Story="] &'
                },
                s = "https://www.nytimes.com/subscription?campaignId=797YR",
                r = "https://www.nytimes.com/subscription/multiproduct/lp8KQUS.html",
                l = function() {}
        },
        jNhd: function(e, t, n) {
            "use strict";
            n("VRzm"), n("Btvt"), n("91GP");
            var a = n("QILm"),
                o = n.n(a),
                i = n("XWHH"),
                s = n.n(i),
                r = {
                    warn: function() {}
                },
                l = function(e) {},
                c = function() {},
                d = function(e) {};
            t.a = function() {}
        },
        k2TR: function(e, t, n) {
            "use strict";
            var a = n("00VA"),
                o = n.n(a);
            t.a = function(e) {
                navigator.serviceWorker && "dev" !== vi.env.ENVIRONMENT && e && window.addEventListener("load", (function() {
                    setTimeout((function() {
                        navigator.serviceWorker.register("".concat(o.a).concat(e)).then((function(e) {
                            e.onupdatefound = function() {
                                var t = e.installing;
                                t.onstatechange = function() {
                                    "installed" === t.state && (navigator.serviceWorker.controller ? console.log("Service Worker: done installing") : console.log("Service Worker: content is cached"))
                                }
                            }
                        })).catch((function(e) {}))
                    }), 200)
                }))
            }
        },
        kHvx: function(e, t) {
            e.exports = "/vi-assets/static-assets/ios-ipad-144x144-dark-9ce0fa9e96c9e148837853eb279b61cd.png"
        },
        "lZ/M": function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a = n("gcR/"),
                o = n.n(a),
                i = n("lSNA"),
                s = n.n(i),
                r = (n("q1tI"), n("17x9"), n("5TEs")),
                l = [{
                    id: "contactUs",
                    href: "https://help.nytimes.com/hc/en-us/articles/115015385887-Contact-Us"
                }, {
                    id: "workwithus",
                    href: "https://www.nytco.com/careers/"
                }, {
                    id: "advertise",
                    href: "https://nytmediakit.com/"
                }, {
                    id: "tbrandstudio",
                    href: "http://www.tbrandstudio.com/"
                }, {
                    id: "youradchoices",
                    href: "https://help.nytimes.com/hc/en-us/articles/115014892108-Privacy-policy"
                }, {
                    id: "privacy",
                    href: "https://help.nytimes.com/hc/en-us/articles/115014892108-Privacy-policy"
                }, {
                    id: "termsOfService",
                    href: "https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service"
                }, {
                    id: "termsOfSale",
                    href: "https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale"
                }, {
                    id: "sitemap",
                    href: "http://spiderbites.nytimes.com"
                }, {
                    id: "help",
                    href: "https://help.nytimes.com/hc/en-us"
                }, {
                    id: "subscriptions",
                    href: "https://www.nytimes.com/subscription?campaignId=37WXW"
                }],
                c = (n("84bF"), n("UmXO")),
                d = n("3NoI"),
                u = n.n(d),
                p = n("wXC7"),
                m = n.n(p),
                h = u()("footer", {
                    target: "e5u916q0"
                })("font-size:11px;text-align:center;@media (max-width:", m.a.breakpoint.maxMobileContentWidth, "px){padding-bottom:25px;}", (function(e) {}), "{padding-bottom:25px;}", (function(e) {}), "{padding:0 3% ", (function(e) {}), ";}", (function(e) {}), "{margin:0 auto;max-width:", m.a.breakpoint.maxDesktopContentWidth, "px;}.NYTApp &{display:none;}@media print{display:none;}"),
                f = Object(c.css)("border-top:1px solid ", m.a.color.gray70, ";padding-top:9px;"),
                v = Object(c.css)(m.a.a11y.visuallyHidden, ";"),
                g = u()("ul", {
                    target: "e5u916q1"
                })("list-style:none;margin:0 0 15px;padding:0;", (function(e) {}), "{display:inline-block;}"),
                b = u()("ul", {
                    target: "e5u916q2"
                })("list-style:none;line-height:8px;margin:0 0 35px;padding:0;", (function(e) {}), "{display:inline-block;}"),
                y = Object(c.css)("color:", m.a.color.gray40, ";font-family:", m.a.font.franklinBase, ";padding:10px 0;text-decoration:none;white-space:nowrap;&:hover{text-decoration:underline;}"),
                w = u()("li", {
                    target: "e5u916q3"
                })("display:inline-block;line-height:20px;padding:0 10px;&:first-child{border-left:none;}&.desktop{display:none;}", (function(e) {}), "{&.smartphone{display:none;}&.desktop{display:inline-block;}}");

            function k(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {}))), n.push.apply(n, a)
                }
                return n
            }
            var C = {
                    nytco: "The New York Times Company",
                    siteInformationNavigation: "Site Information Navigation",
                    contactUs: "Contact Us",
                    workwithus: "Work with us",
                    advertise: "Advertise",
                    tbrandstudio: "T Brand Studio",
                    youradchoices: "Your Ad Choices",
                    privacy: "Privacy",
                    termsOfSale: "Terms of Sale",
                    termsOfService: "Terms of Service",
                    help: "Help",
                    sitemap: "Site Map",
                    subscriptions: "Subscriptions"
                },
                B = l.map((function(e) {
                    return function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? k(n, !0).forEach((function(t) {
                                s()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(n).forEach((function(t) {}))
                        }
                        return e
                    }({}, e, {
                        text: C[e.id]
                    })
                })),
                E = o()("meta", {
                    itemProp: "diversityPolicy",
                    content: "https://www.nytco.com/diversity-and-inclusion-at-the-new-york-times/"
                }),
                T = o()("meta", {
                    itemProp: "ethicsPolicy",
                    content: "https://www.nytco.com/who-we-are/culture/standards-and-ethics/"
                }),
                A = o()("meta", {
                    itemProp: "foundingDate",
                    content: "1851-09-18"
                }),
                x = o()("span", {
                    itemProp: "logo",
                    itemScope: !0,
                    itemType: "https://schema.org/ImageObject"
                }, void 0, o()("meta", {
                    itemProp: "url",
                    content: "https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png"
                })),
                O = o()("meta", {
                    itemProp: "url",
                    content: "https://www.nytimes.com/"
                }),
                S = o()("meta", {
                    itemProp: "masthead",
                    content: "https://www.nytimes.com/interactive/2018/09/28/admin/the-new-york-times-masthead.html"
                }),
                N = o()("meta", {
                    itemProp: "name",
                    content: "The New York Times"
                }),
                D = function(e) {};
            D.displayName = "Footer", D.defaultProps = {
                overlayContext: {
                    overlays: {
                        dock: {
                            exists: !1,
                            ready: !1,
                            visible: !1
                        }
                    }
                }
            };
            t.a = Object(r.a)(D)
        },
        ll1W: function(e, t, n) {
            "use strict";
            (function(e) {
                var a = n("gcR/"),
                    o = n.n(a),
                    i = (n("q1tI"), n("UmXO")),
                    s = (n("17x9"), n("+4HN")),
                    r = n("WXMI"),
                    l = n("GB3f"),
                    c = n("xEGZ"),
                    d = o()(c.a, {
                        "data-testid": "login-button"
                    }, void 0, r.a),
                    u = function(t) {};
                u.displayName = "LoginButtonFallback", u.defaultProps = {
                    className: ""
                }, t.a = u
            }).call(this, n("yLpj"))
        },
        mFn4: function(e, t, n) {
            "use strict";
            var a = n("284h"),
                o = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(n("lSNA")),
                s = o(n("lwsE")),
                r = o(n("W8MJ")),
                l = o(n("a1gu")),
                c = o(n("Nsbk")),
                d = o(n("7W2i")),
                u = a(n("q1tI")),
                p = (o(n("17x9")), n("UmXO")),
                m = n("41jq"),
                h = o(n("aanX")),
                f = o(n("9/5/")),
                v = n("HR03");

            function g(e) {}
            var b = 1200,
                y = 28;
            var w = function(e) {
                function t() {}
                return (0, d.default)(t, e), (0, r.default)(t, [{
                    key: "componentDidMount",
                    value: function() {}
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function() {}
                }, {
                    key: "componentDidUpdate",
                    value: function() {}
                }, {
                    key: "componentWillUnmount",
                    value: function() {}
                }, {
                    key: "renderModalContent",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {}
                }]), t
            }(u.Component);
            w.displayName = "ButtonModal", w.defaultProps = {
                ariaLabel: "",
                className: "",
                activeClassName: "",
                modalTitle: null,
                buttonHoverClass: "",
                buttonContent: null,
                activeButtonContent: null,
                modalContent: function() {},
                hidden: !1,
                handleOpen: function() {},
                theme: null,
                arrowPosition: "top",
                dataTestid: "",
                forcePopover: !1,
                popoverNudge: 0,
                hideModalOnScroll: !1
            };
            var k = (0, m.withTheme)(w);
            t.default = k
        },
        mZTn: function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a, o, i, s = n("lSNA"),
                r = n.n(s),
                l = n("gcR/"),
                c = n.n(l),
                d = n("lwsE"),
                u = n.n(d),
                p = n("W8MJ"),
                m = n.n(p),
                h = n("a1gu"),
                f = n.n(h),
                v = n("Nsbk"),
                g = n.n(v),
                b = n("7W2i"),
                y = n.n(b),
                w = n("q1tI"),
                k = n("17x9"),
                C = n.n(k),
                B = n("X6oL"),
                E = n.n(B),
                T = n("Fm/i"),
                A = n("OB6K"),
                x = n.n(A),
                O = n("wYzE"),
                S = n("Esml"),
                N = (n("VRzm"), n("91GP"), n("OG14"), n("cr+I")),
                D = n.n(N),
                _ = n("Pqtm"),
                I = n("WXMI"),
                F = n("XWHH"),
                M = n.n(F),
                P = n("+mLS"),
                L = function(e) {},
                j = function(e) {},
                R = function(e) {},
                z = function(e) {},
                V = n("rI8Z"),
                U = n("vEu8"),
                J = n("Vc97"),
                H = n("OO03"),
                q = n("HUmG"),
                G = n("i7rQ"),
                W = n("354x"),
                Y = n("u1H9"),
                X = n("aRw7"),
                K = n("0VxJ"),
                Q = n("pL4N"),
                Z = c()(W.a, {}),
                $ = Object(J.a)(a = Object(U.a)(a = Object(H.a)((i = o = function(e) {
                    function t() {
                        var e, n;
                        u()(this, t);
                        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                        return (n = f()(this, (e = g()(t)).call.apply(e, [this].concat(o)))).state = {
                            madData: null,
                            localAdBlocker: null
                        }, n.pending = !1, n
                    }
                    return y()(t, e), m()(t, [{
                        key: "subscribeLink",
                        value: function() {}
                    }, {
                        key: "getDefaultContent",
                        value: function() {}
                    }, {
                        key: "fetchMADData",
                        value: function() {}
                    }, {
                        key: "canFetchData",
                        value: function() {
                            var e = this.props,
                                t = e.meterReady,
                                n = e.user,
                                a = e.subscriptionDetails,
                                o = this.state.localAdBlocker;
                            return t && null !== n && null !== a && null !== o && !this.pending
                        }
                    }, {
                        key: "setLocalAdblock",
                        value: function() {
                            var e = this;
                            _.AdManager.ManagerMethods.loadAdBlockerBait().then((function(t) {
                                t && !1 === t.adBlock && e.setState({
                                    localAdBlocker: !1
                                })
                            })).catch((function(t) {}))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.setLocalAdblock(), this.canFetchData() && this.fetchMADData()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.canFetchData() && this.fetchMADData()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return c()(Q.a.Provider, {
                                value: this.state.madData
                            }, void 0, this.props.children)
                        }
                    }]), t
                }(w.Component), o.defaultProps = {
                    pageCount: 0,
                    totalArticleCount: null,
                    meterReady: void 0,
                    counted: void 0,
                    showGateway: void 0,
                    gatewayType: void 0,
                    user: null,
                    subscriptionDetails: null,
                    deviceType: null
                }, a = i)) || a) || a) || a,
                ee = (n("xfY5"), n("7h0T"), n("f3/d"), n("a1Th"), n("28Yi")),
                te = n("06b3");

            function ne(e, t) {}

            function ae(e) {}
            var oe = function() {
                    function e() {}
                    return m()(e, null, [{
                        key: "checkMeter",
                        value: function(t) {}
                    }, {
                        key: "get",
                        value: function(t) {}
                    }, {
                        key: "onMeterLoaded",
                        value: function(e) {}
                    }, {
                        key: "catchAndReport",
                        value: function(e) {}
                    }, {
                        key: "validateResponse",
                        value: function(e) {}
                    }, {
                        key: "checkOverride",
                        value: function(e, t) {}
                    }, {
                        key: "cookieRefresh",
                        value: function(e) {}
                    }, {
                        key: "updateOptimizely",
                        value: function(e) {}
                    }]), e
                }(),
                ie = n("qs2k"),
                se = n("GY5D"),
                re = function(e) {
                    function t(e) {
                        var n;
                        return u()(this, t), (n = f()(this, g()(t).call(this, e))).initMeter = function() {}, n.state = {
                            initMeter: n.initMeter,
                            meterReady: !1
                        }, n
                    }
                    return y()(t, e), m()(t, [{
                        key: "getMeterData",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            return c()(se.a.Provider, {
                                value: this.state
                            }, void 0, this.props.children)
                        }
                    }], [{
                        key: "shouldCallMeter",
                        value: function() {}
                    }]), t
                }(w.Component);
            re.displayName = "MeterManager";
            var le, ce, de, ue = n("Vhmf"),
                pe = function(e, t) {},
                me = function(e, t) {},
                he = function(e) {
                    function t() {
                        var e, n;
                        u()(this, t);
                        for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                        return (n = f()(this, (e = g()(t)).call.apply(e, [this].concat(o)))).setMode = function(e, t) {}, n.setVisibility = function(e, t) {}, n.registerOverlay = function(e) {}, n.state = {
                            overlays: {
                                dock: {
                                    exists: !1,
                                    ready: !1,
                                    visible: !1,
                                    mode: ""
                                },
                                pill: {
                                    exists: !1,
                                    ready: !1,
                                    visible: !1,
                                    mode: ""
                                },
                                truncator: {
                                    exists: !1,
                                    ready: !1,
                                    visible: !1,
                                    mode: ""
                                },
                                onetap: {
                                    exists: !1,
                                    ready: !1,
                                    visible: !1,
                                    mode: ""
                                }
                            },
                            setMode: n.setMode,
                            setVisibility: n.setVisibility,
                            registerOverlay: n.registerOverlay
                        }, n
                    }
                    return y()(t, e), m()(t, [{
                        key: "render",
                        value: function() {
                            var e = {
                                overlayContext: this.state
                            };
                            return c()(ue.a.Provider, {
                                value: e
                            }, void 0, this.props.children)
                        }
                    }]), t
                }(w.Component);

            function fe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {}))), n.push.apply(n, a)
                }
                return n
            }

            function ve() {}
            he.displayName = "OverlayManager";
            var ge = {
                    warn: C.a.func.isRequired,
                    initialDeviceType: C.a.oneOf(["smartphone", "tablet", "desktop"]).isRequired,
                    fastlyAbraConfig: C.a.object
                },
                be = E()((function(e) {
                    return {
                        application: {
                            name: "nyt-vi",
                            environment: vi.env.ENVIRONMENT,
                            dlVersion: T.version
                        },
                        referrer: {
                            url: e.onGetReferrer && e.onGetReferrer()
                        }
                    }
                }), {
                    dispatch: O.a,
                    process: O.b
                })(le = Object(S.a)("appRenderTime")((de = ce = function(e) {
                    function t() {
                        return u()(this, t), f()(this, g()(t).apply(this, arguments))
                    }
                    return y()(t, e), m()(t, [{
                        key: "getChildContext",
                        value: function() {
                            return {
                                getReferrer: this.props.onGetReferrer,
                                getPageviewId: this.props.onGetPageviewId,
                                updatePageviewId: this.props.onUpdatePageviewId,
                                origin: this.props.origin,
                                warn: this.props.warn,
                                initialDeviceType: this.props.initialDeviceType,
                                fastlyAbraConfig: this.props.fastlyAbraConfig
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return c()(he, {}, void 0, c()(re, {}, void 0, c()($, {}, void 0, c()(x.a, {}, void 0, this.props.children))))
                        }
                    }]), t
                }(w.Component), ce.defaultProps = {
                    origin: "https://nytimes.com",
                    context: {},
                    onGetReferrer: ve,
                    onGetPageviewId: ve,
                    onUpdatePageviewId: ve,
                    fastlyAbraConfig: {}
                }, ce.childContextTypes = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? fe(n, !0).forEach((function(t) {
                            r()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(n).forEach((function(t) {}))
                    }
                    return e
                }({
                    getReferrer: C.a.func.isRequired,
                    origin: C.a.string.isRequired,
                    warn: C.a.func.isRequired,
                    getPageviewId: C.a.func,
                    updatePageviewId: C.a.func
                }, ge), le = de)) || le) || le;
            be.displayName = "AppContext";
            t.a = be
        },
        mczz: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return o
            })), n.d(t, "f", (function() {})), n.d(t, "b", (function() {})), n.d(t, "e", (function() {})), n.d(t, "d", (function() {
                return c
            })), n.d(t, "a", (function() {}));
            n("OG14"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("91GP");
            var a = n("cr+I");

            function o() {
                return window.location
            }

            function i(e, t) {}

            function s(e, t) {
                return Object(a.parse)(e)[t]
            }

            function r(e, t) {}

            function l(e, t) {}

            function c(e, t) {
                return s(e.search, t)
            }
            var d = function(e) {}
        },
        mrGk: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return d
            })), n.d(t, "h", (function() {
                return u
            })), n.d(t, "g", (function() {})), n.d(t, "a", (function() {})), n.d(t, "d", (function() {})), n.d(t, "c", (function() {
                return f
            })), n.d(t, "i", (function() {
                return v
            })), n.d(t, "e", (function() {})), n.d(t, "b", (function() {}));
            var a = n("3NoI"),
                o = n.n(a),
                i = n("UmXO"),
                s = n("wXC7"),
                r = n.n(s),
                l = n("K0fD"),
                c = Object(i.css)(l.e.getCSSSelectors(["V1", "V2", "V3", "V4", "V5", "V6"]), "{display:none;}"),
                d = Object(i.css)("color:", r.a.color.blue20, ";"),
                u = Object(i.css)("border-left:1px solid ", r.a.color.gray50, ";color:", r.a.color.blue20, ";height:12px;margin-left:8px;padding-left:8px;"),
                p = Object(i.css)("display:none;font-size:10px;margin-left:auto;text-transform:uppercase;.hasLinks &{display:block;", r.a.breakpoint.medium, "{margin:none;position:absolute;right:20px;}", r.a.breakpoint.mediumLarge, "{display:none;}}"),
                m = o()("div", {
                    target: "e1csuq9d0"
                })("color:", r.a.color.gray10, ";font-size:13px;font-family:", r.a.font.franklinBase, ";display:none;width:auto;", r.a.breakpoint.medium, "{text-align:center;width:100%;}", r.a.breakpoint.mediumLarge, "{font-size:12px;margin-bottom:10px;width:auto;}", (function(e) {}), ";"),
                h = o()("div", {
                    target: "e1csuq9d1"
                })("color:", r.a.color.gray10, ";font-size:12px;font-family:", r.a.font.franklinBase, ";font-weight:", r.a.font.weight.medium, ";display:none;", r.a.breakpoint.medium, "{margin:0;position:absolute;left:20px;display:flex;top:0;bottom:0;}", r.a.breakpoint.mediumLarge, "{display:none;}"),
                f = o()("div", {
                    target: "e1csuq9d2"
                })("display:none;", r.a.breakpoint.mediumLarge, "{", (function(e) {}), ";}"),
                v = Object(i.css)("display:inline-block;padding:6px 4px 4px;margin-bottom:12px;font-size:12px;border-radius:3px;transition:background 0.6s ease;&:hover{background-color:", r.a.color.gray90, ";}"),
                g = Object(i.css)("border-bottom:1px solid ", r.a.color.gray60, ";background-color:", r.a.color.gray90, ";", r.a.breakpoint.medium, "{background-color:", r.a.color.white, ";}"),
                b = Object(i.css)("background-color:", r.a.color.gray90, ";", r.a.breakpoint.medium, "{background-color:", r.a.color.white, ";}"),
                y = o()("section", {
                    target: "e1csuq9d3"
                })("align-items:center;display:flex;font-family:", r.a.font.franklinBase, ";font-size:11px;justify-content:space-around;padding:13px 20px 12px;", (function(e) {}), ";", (function(e) {}), ";", (function(e) {}), ";", r.a.breakpoint.medium, "{position:relative;}", r.a.breakpoint.mediumLarge, "{justify-content:space-between;border:none;padding:0;height:0;transform:translateY(42px);}@media print{display:none;}"),
                w = o()("div", {
                    target: "e1csuq9d4"
                })("display:none;", r.a.breakpoint.mediumLarge, "{", (function(e) {}), ";}")
        },
        n4LZ: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {}
        },
        nMzm: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "b", (function() {}));
            var a = "",
                o = "top-bar",
                i = "homepage_sticky",
                s = function(e) {},
                r = function(e) {},
                l = function(e) {}
        },
        nUoC: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = n("lSNA"),
                s = n.n(i),
                r = n("lwsE"),
                l = n.n(r),
                c = n("W8MJ"),
                d = n.n(c),
                u = n("a1gu"),
                p = n.n(u),
                m = n("Nsbk"),
                h = n.n(m),
                f = n("7W2i"),
                v = n.n(f),
                g = n("q1tI"),
                b = (n("17x9"), n("XWHH")),
                y = n.n(b),
                w = n("UmXO"),
                k = o()("g", {
                    fill: "#F4D864",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M14.741 9.759a6.402 6.402 0 0 0-6.393 6.393c0 3.523 2.869 6.391 6.393 6.391a6.4 6.4 0 0 0 6.393-6.391 6.402 6.402 0 0 0-6.393-6.393M15.272 31.292c-.564 0-1-.457-1-1.021v-4.076c0-.562.436-1.019 1-1.019.564 0 1 .457 1 1.019v4.076c0 .564-.435 1.021-1 1.021M15.272 6.825c-.564 0-1-.457-1-1.02V1.727c0-.562.436-1.019 1-1.019.564 0 1 .457 1 1.019v4.078c0 .563-.435 1.02-1 1.02M28.253 17.708h-4.078c-.565 0-1.02-.436-1.02-1 0-.564.455-1 1.02-1h4.078c.564 0 1.02.436 1.02 1-.001.564-.456 1-1.02 1M5.825 17.708H1.747c-.564 0-1.02-.436-1.02-1 0-.564.455-1 1.02-1h4.078c.564 0 1.019.436 1.019 1a1 1 0 0 1-1.019 1M24.794 26.392c-.26 0-.521-.1-.719-.299l-2.887-2.885a1.021 1.021 0 0 1 0-1.443 1.022 1.022 0 0 1 1.441 0l2.885 2.887c.4.398.4 1.045 0 1.441-.199.199-.46.299-.72.299M7.493 9.091c-.26 0-.521-.1-.719-.299L3.887 5.907a1.021 1.021 0 0 1 0-1.443 1.022 1.022 0 0 1 1.441 0l2.885 2.887c.4.398.4 1.045 0 1.441-.196.199-.46.299-.72.299M21.909 10.532a1.019 1.019 0 0 1-.721-1.74l2.885-2.887a1.02 1.02 0 1 1 1.441 1.443l-2.885 2.885c-.198.2-.46.299-.72.299M4.608 27.833a1.02 1.02 0 0 1-.721-1.74l2.885-2.887a1.022 1.022 0 0 1 1.441 0 1.021 1.021 0 0 1 0 1.443l-2.885 2.885c-.198.199-.46.299-.72.299"
                })),
                C = function(e) {};
            C.displayName = "Sunny", C.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var B = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M19.001 10.401c0 4.949-4.051 9-9 9s-9-4.051-9-9 4.051-9 9-9 9 4.051 9 9",
                    fill: "#F4D864"
                }), o()("path", {
                    d: "M19.001 10.401c0 4.949-4.051 9-9 9s-9-4.051-9-9 4.051-9 9-9 9 4.051 9 9z",
                    stroke: "#F4D864",
                    strokeWidth: "2"
                }), o()("path", {
                    d: "M6.608 31.349c-2.893 0-5.246-2.328-5.246-5.189 0-2.863 2.353-5.193 5.246-5.193h1.033l.408-1.002c.723-3.771 4.066-6.51 7.951-6.51 3.881 0 7.223 2.738 7.945 6.51l.207 1.07 1.109-.059c3.033 0 5.377 2.328 5.377 5.184 0 2.861-2.353 5.189-5.248 5.189H6.608z",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M16.001 14.704c3.281 0 6.107 2.309 6.717 5.494l.402 2.092 2.131-.064.09-.006.051-.004c2.203 0 3.996 1.768 3.996 3.941 0 2.174-1.793 3.941-3.996 3.941H6.606c-2.201 0-3.994-1.767-3.994-3.941s1.793-3.941 3.959-3.941l.109.008h.029l2.16.096.406-2.121c.613-3.186 3.439-5.495 6.726-5.495m0-2.5c-4.566 0-8.357 3.236-9.178 7.523-.072-.004-.142-.012-.217-.012-3.588 0-6.494 2.883-6.494 6.441 0 3.561 2.906 6.441 6.494 6.441h18.785c3.59 0 6.496-2.881 6.496-6.441 0-3.559-2.906-6.441-6.496-6.441-.072 0-.145.008-.217.012-.821-4.287-4.614-7.523-9.173-7.523",
                    fill: "#CCC"
                })),
                E = function(e) {};
            E.displayName = "PartlySunny", E.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var T = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M20.083 3.225c2.672 0 4.972 1.881 5.47 4.471l.402 2.094 2.13-.066.062-.006.048-.002c1.717 0 3.112 1.375 3.112 3.064s-1.396 3.064-3.112 3.064c-4.378 0-10.331-.002-13.615-.004l-.002-.074-2.524.072-.084.006c-1.714 0-3.11-1.375-3.11-3.064a3.083 3.083 0 0 1 3.057-3.066l.1.006.03.002 2.158.094.405-2.119c.496-2.591 2.797-4.472 5.473-4.472m0-2.5c-3.944 0-7.218 2.797-7.928 6.498-.062-.002-.122-.008-.187-.008-3.1 0-5.61 2.49-5.61 5.564s2.511 5.564 5.61 5.564c.052 0 .104-.006.156-.008-.156.008 16.016.008 16.069.008 3.101 0 5.612-2.49 5.612-5.564s-2.512-5.564-5.612-5.564c-.063 0-.123.006-.188.008C27.296 3.522 24.02.725 20.083.725",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M6.69 32.027c-2.892 0-5.248-2.33-5.248-5.193 0-2.865 2.356-5.195 5.248-5.195h1.032l.408-1.002c.722-3.771 4.067-6.51 7.951-6.51 3.883 0 7.227 2.738 7.948 6.51l.2 1.043 1.084-.027c3.066 0 5.41 2.324 5.41 5.182 0 2.863-2.356 5.193-5.25 5.193H6.69v-.001z",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M16.083 15.377c3.284 0 6.109 2.312 6.722 5.496l.402 2.098 2.134-.072.088-.008.044-.002c2.206 0 4.002 1.77 4.002 3.947 0 2.174-1.796 3.941-4.002 3.941H6.69c-2.206 0-3.998-1.768-3.998-3.941 0-2.178 1.792-3.947 3.96-3.947l.11.008h.03l2.158.096.405-2.119c.611-3.186 3.441-5.497 6.728-5.497m0-2.498c-4.566 0-8.358 3.238-9.178 7.523-.072-.004-.143-.012-.215-.012-3.59 0-6.496 2.885-6.496 6.445 0 3.557 2.906 6.439 6.496 6.439h18.782c3.59 0 6.498-2.883 6.498-6.439 0-3.561-2.908-6.445-6.498-6.445-.072 0-.144.008-.216.012-.822-4.285-4.616-7.523-9.173-7.523",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M16.083 15.377c3.284 0 6.109 2.311 6.722 5.496l.402 2.094 2.13-.068.09-.008.046-.002c2.206 0 4.002 1.771 4.002 3.945 0 2.176-1.796 3.943-4.002 3.943H6.69c-2.206 0-3.998-1.768-3.998-3.943 0-2.174 1.792-3.945 3.958-3.945l.114.006.032.002 2.154.092.405-2.115c.611-3.186 3.441-5.497 6.728-5.497m0-2.498c-4.566 0-8.358 3.238-9.178 7.523-.072-.004-.143-.012-.215-.012-3.59 0-6.496 2.885-6.496 6.443 0 3.559 2.906 6.441 6.496 6.441h18.782c3.59 0 6.498-2.883 6.498-6.441 0-3.559-2.908-6.443-6.498-6.443-.072 0-.144.008-.216.012-.822-4.285-4.616-7.523-9.173-7.523",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M25.473 22.889l-.047.004-.09.006-2.132.068-.399-2.094c-.612-3.184-3.439-5.496-6.723-5.496-3.288 0-6.116 2.312-6.726 5.496l-.406 2.168L6.796 23h-.031l-.114-.059c-2.166 0-3.96 1.855-3.96 4.029s1.794 4.029 3.998 4.029h18.784c2.205 0 4-1.881 4-4.055 0-2.173-1.795-4.055-4-4.055",
                    fill: "#CCC"
                })),
                A = function(e) {};
            A.displayName = "Cloudy", A.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var x = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M15.519 7.673c0 4.193-3.432 7.627-7.627 7.627-4.191 0-7.623-3.434-7.623-7.627S3.701.046 7.892.046c4.195 0 7.627 3.433 7.627 7.627",
                    fill: "#F4D864"
                }), o()("path", {
                    d: "M6.606 21.759c-2.892 0-5.246-2.33-5.246-5.193 0-2.865 2.354-5.195 5.246-5.195h1.031l.41-1.002c.723-3.771 4.068-6.51 7.953-6.51 3.881 0 7.225 2.738 7.947 6.51l.199 1.043 1.084-.027c3.065 0 5.41 2.324 5.41 5.182 0 2.863-2.356 5.193-5.252 5.193H6.606v-.001z",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M16.001 5.108c3.283 0 6.109 2.311 6.721 5.496l.4 2.094 2.133-.068.09-.008.045-.002c2.207 0 4.002 1.77 4.002 3.943 0 2.178-1.795 3.945-4.002 3.945H6.606c-2.205 0-3.996-1.768-3.996-3.945 0-2.174 1.791-3.943 3.959-3.943l.111.006.029.002 2.158.096.406-2.119c.611-3.186 3.441-5.497 6.728-5.497m0-2.498c-4.566 0-8.359 3.238-9.18 7.523-.07-.004-.141-.012-.215-.012-3.588 0-6.494 2.885-6.494 6.441 0 3.561 2.906 6.443 6.494 6.443H25.39c3.59 0 6.498-2.883 6.498-6.443 0-3.557-2.908-6.441-6.498-6.441-.072 0-.144.008-.215.012-.822-4.284-4.617-7.523-9.174-7.523",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M25.39 19.071c-.07 0-.142.008-.215.01-.822-4.287-4.617-7.523-9.174-7.523-4.566 0-8.359 3.236-9.18 7.523-.07-.002-.141-.01-.215-.01-3.588 0-6.494 2.883-6.494 6.441 0 3.561 2.906 6.441 6.494 6.441H25.39c3.59 0 6.498-2.881 6.498-6.441 0-3.558-2.908-6.441-6.498-6.441",
                    fill: "#CCC"
                })),
                O = function(e) {};
            O.displayName = "MostlyCloudy", O.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var S = o()("g", {
                    fill: "#CCC",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M25.39 8.441c-.072 0-.144.008-.216.01C24.352 4.166 20.558.93 16 .93c-4.566 0-8.358 3.236-9.181 7.521-.069-.002-.14-.01-.214-.01-3.588 0-6.494 2.885-6.494 6.441 0 3.002 2.074 5.5 4.874 6.217l1.12-2.324c-1.964-.246-3.494-1.887-3.494-3.893 0-2.174 1.792-3.879 3.956-3.879l.11.068h.032l2.159.033.406-2.152c.61-3.184 3.438-5.51 6.725-5.51 3.281 0 6.107 2.305 6.718 5.488l.401 2.092 2.135-.07.09-.008.046-.004c2.204 0 3.998 1.77 3.998 3.941 0 1.492-.853 2.777-2.072 3.447l-1.42 2.945c3.348-.26 5.992-3.004 5.992-6.393.001-3.554-2.907-6.439-6.497-6.439"
                }), o()("path", {
                    d: "M23.893 17.07h-12a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2M21.893 21.07h-12a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2M19.893 25.07h-12a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2M17.893 29.07h-12a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2"
                })),
                N = function(e) {};
            N.displayName = "Foggy", N.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var D = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M25.39 8.376c-.072 0-.145.008-.216.01C24.352 4.101 20.558.865 16 .865c-4.566 0-8.358 3.236-9.181 7.521-.069-.002-.14-.01-.214-.01-3.588 0-6.494 2.885-6.494 6.441 0 3.002 2.074 5.5 4.874 6.217l1.12-2.324c-1.964-.246-3.494-1.887-3.494-3.893 0-2.174 1.792-3.879 3.958-3.879l.11.068h.03l2.159.033.406-2.152c.61-3.184 3.438-5.51 6.725-5.51 3.281 0 6.107 2.305 6.718 5.488l.403 2.096 2.137-.074.088-.008.044-.004c2.204 0 3.998 1.768 3.998 3.941 0 1.492-.854 2.777-2.072 3.447l-1.42 2.945c3.348-.26 5.992-3.004 5.992-6.393.001-3.554-2.907-6.439-6.497-6.439",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M7.264 24.005a1 1 0 0 1-.91-1.414l3.628-8a1.001 1.001 0 0 1 1.822.828l-3.63 8a1.002 1.002 0 0 1-.91.586M10.053 29.136a1 1 0 0 1-.91-1.414l3.628-8c.23-.5.824-.719 1.324-.496.502.229.726.82.498 1.324l-3.63 8a1.002 1.002 0 0 1-.91.586M17.264 24.005a1 1 0 0 1-.91-1.414l3.628-8a1.001 1.001 0 0 1 1.822.828l-3.63 8a1.002 1.002 0 0 1-.91.586M20.053 29.136a1 1 0 0 1-.91-1.414l3.628-8c.23-.5.824-.719 1.324-.496.502.229.726.82.498 1.324l-3.63 8a1.002 1.002 0 0 1-.91.586",
                    fill: "#70B5E8"
                })),
                _ = function(e) {};
            _.displayName = "Rain", _.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var I = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M25.39 7.693c-.072 0-.145.008-.216.01C24.352 3.418 20.558.182 16 .182c-4.566 0-8.358 3.236-9.181 7.522-.069-.002-.14-.01-.214-.01-3.588 0-6.494 2.885-6.494 6.441 0 3.396 2.654 6.146 6.015 6.395l1.105-2.475-.518.014-.059.006-.05.004c-2.202 0-3.994-1.77-3.994-3.943 0-2.174 1.792-3.879 3.956-3.879l.11.068h.032l2.159.033.406-2.152c.61-3.184 3.438-5.51 6.725-5.51 3.281 0 6.107 2.305 6.718 5.488l.401 2.092 2.135-.07.09-.008.046-.004c2.204 0 3.998 1.77 3.998 3.941 0 1.619-.994 3.008-2.382 3.617l-1.246 2.787c3.414-.191 6.128-2.971 6.128-6.404.002-3.557-2.906-6.442-6.496-6.442",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M13.18 27.818l-1.578-1.226 4.872-6.27H8.882l6.031-8.947 1.659 1.117-3.93 5.83h7.918",
                    fill: "#F4D864"
                })),
                F = function(e) {};
            F.displayName = "Thunderstorms", F.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var M = o()("g", {
                    fill: "#CCC",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M25.39 7.598c-.072 0-.145.008-.216.01C24.352 3.323 20.558.086 16 .086c-4.566 0-8.358 3.236-9.181 7.522-.069-.002-.14-.01-.214-.01-3.588 0-6.494 2.885-6.494 6.441 0 2.676 1.643 4.969 3.982 5.943l.756-2.418c-1.32-.645-2.238-1.975-2.238-3.525 0-2.174 1.792-3.879 3.956-3.879l.11.068h.032l2.159.033.406-2.152c.61-3.184 3.438-5.51 6.725-5.51 3.281 0 6.107 2.305 6.718 5.488l.401 2.092 2.135-.07.09-.008.046-.004c2.204 0 3.998 1.77 3.998 3.941 0 1.779-1.206 3.266-2.811 3.758l-.827 2.648c3.418-.188 6.138-2.967 6.138-6.406.001-3.556-2.907-6.44-6.497-6.44M9.629 22.609a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0M15.285 22.609a1.65 1.65 0 1 1-3.299.001 1.65 1.65 0 0 1 3.299-.001M20.941 22.609a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0"
                }), o()("path", {
                    d: "M11.629 16.953a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0M17.285 16.953a1.65 1.65 0 1 1-3.299.001 1.65 1.65 0 0 1 3.299-.001M22.941 16.953a1.65 1.65 0 0 1-3.3 0c0-.912.74-1.648 1.65-1.648.912 0 1.65.736 1.65 1.648M13.285 28.266a1.65 1.65 0 1 1-3.3-.002 1.65 1.65 0 0 1 3.3.002M7.629 28.266a1.65 1.65 0 0 1-3.299 0 1.65 1.65 0 0 1 3.299 0M18.941 28.266a1.65 1.65 0 0 1-3.3 0 1.65 1.65 0 0 1 3.3 0"
                })),
                P = function(e) {};
            P.displayName = "Snow", P.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var L = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M25.39 8.441c-.072 0-.144.008-.216.01C24.352 4.166 20.558.93 16 .93c-4.566 0-8.358 3.236-9.181 7.521-.069-.002-.14-.01-.214-.01-3.588 0-6.494 2.885-6.494 6.441 0 2.334 1.26 4.359 3.132 5.486l1.114-2.229a3.931 3.931 0 0 1-1.75-3.258c0-2.174 1.794-3.881 3.96-3.881l.11.07h.032l2.155.033.408-2.152c.61-3.184 3.438-5.512 6.727-5.512 3.283 0 6.109 2.305 6.722 5.49l.399 2.09 2.133-.07.09-.008.046-.004c2.206 0 4 1.77 4 3.943 0 1.812-1.252 3.328-2.902 3.789l-1.014 2.645c3.55-.045 6.414-2.9 6.414-6.434.001-3.554-2.907-6.439-6.497-6.439",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M11.629 15.797a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0M13.629 25.797a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0M23.629 15.797a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M8.43 19.406L3.756 29.07M16.191 15.684l-2.231 4.92M20.396 19.406l-4.675 9.664",
                    stroke: "#70B5E8",
                    strokeWidth: "2"
                })),
                j = function(e) {};
            j.displayName = "Ice", j.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var R = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M25.39 7.598c-.072 0-.144.008-.216.01C24.352 3.322 20.558.086 16 .086c-4.566 0-8.358 3.236-9.181 7.522-.069-.002-.14-.01-.214-.01-3.588 0-6.494 2.885-6.494 6.441 0 2.676 1.643 4.969 3.982 5.943l.756-2.418c-1.32-.645-2.238-1.975-2.238-3.525 0-2.174 1.792-3.879 3.956-3.879l.11.068h.032l2.159.033.406-2.152C9.886 4.926 12.714 2.6 16 2.6c3.281 0 6.107 2.305 6.718 5.488l.401 2.092 2.135-.07.09-.008.046-.004c2.204 0 3.998 1.77 3.998 3.941 0 1.779-1.206 3.266-2.811 3.758l-.827 2.648c3.418-.188 6.138-2.967 6.138-6.406 0-3.557-2.908-6.441-6.498-6.441",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M9.629 22.609a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0",
                    fill: "#70B5E8"
                }), o()("path", {
                    d: "M15.285 22.609a1.65 1.65 0 1 1-3.299.001 1.65 1.65 0 0 1 3.299-.001",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M20.941 22.609a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0",
                    fill: "#70B5E8"
                }), o()("path", {
                    d: "M11.629 16.953a1.65 1.65 0 1 1-3.3 0 1.65 1.65 0 0 1 3.3 0",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M17.285 16.953a1.65 1.65 0 1 1-3.299.001 1.65 1.65 0 0 1 3.299-.001",
                    fill: "#70B5E8"
                }), o()("path", {
                    d: "M22.941 16.953a1.65 1.65 0 0 1-3.3 0c0-.912.74-1.648 1.65-1.648.912 0 1.65.736 1.65 1.648",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M13.285 28.266a1.65 1.65 0 1 1-3.3-.002 1.65 1.65 0 0 1 3.3.002",
                    fill: "#70B5E8"
                }), o()("path", {
                    d: "M7.629 28.266a1.65 1.65 0 0 1-3.299 0 1.65 1.65 0 0 1 3.299 0M18.941 28.266a1.65 1.65 0 0 1-3.3 0 1.65 1.65 0 0 1 3.3 0",
                    fill: "#CCC"
                })),
                z = function(e) {};
            z.displayName = "Sleet", z.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var V = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M14 18.764V.906H4v17.857C2.15 20.243.938 22.492.938 25.031c0 4.436 3.629 8.062 8.062 8.062s8.062-3.627 8.062-8.062c0-2.539-1.212-4.787-3.062-6.267",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M14.875 25.031c0 3.232-2.645 5.877-5.876 5.877-3.23 0-5.874-2.644-5.874-5.877 0-3.232 2.644-5.877 5.874-5.877 3.232 0 5.876 2.645 5.876 5.877",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M12.667 25.031a3.677 3.677 0 0 1-3.666 3.666 3.678 3.678 0 0 1-3.669-3.666 3.678 3.678 0 0 1 3.669-3.666 3.678 3.678 0 0 1 3.666 3.666",
                    fill: "#FF3A22"
                }), o()("path", {
                    d: "M6 2.906h6v20H6v-20z",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M8 4.906h6v2H8v-2z",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M8 8.906h2v16H8v-16z",
                    fill: "#FF3A22"
                })),
                U = function(e) {};
            U.displayName = "Hot", U.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var J = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M4.001.906h10v22h-10v-22z",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M6.001 2.906h6v20h-6v-20z",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M8.001 16.906h2v8h-2v-8z",
                    fill: "#408DD3"
                }), o()("path", {
                    d: "M8.001 4.906h6v2h-6v-2zM8.001 8.906h6v2h-6v-2zM17.063 25.031c0 4.434-3.629 8.062-8.062 8.062-4.434 0-8.065-3.629-8.065-8.062 0-4.434 3.631-8.062 8.065-8.062 4.434 0 8.062 3.629 8.062 8.062",
                    fill: "#CCC"
                }), o()("path", {
                    d: "M14.876 25.031c0 3.232-2.645 5.877-5.877 5.877-3.229 0-5.873-2.644-5.873-5.877 0-3.232 2.644-5.877 5.873-5.877 3.232 0 5.877 2.645 5.877 5.877",
                    fill: "#FFF"
                }), o()("path", {
                    d: "M12.667 25.031a3.677 3.677 0 0 1-3.666 3.666 3.678 3.678 0 0 1-3.668-3.666 3.678 3.678 0 0 1 3.668-3.666 3.678 3.678 0 0 1 3.666 3.666",
                    fill: "#408DD3"
                })),
                H = function(e) {};
            H.displayName = "Cold", H.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var q = o()("g", {
                    stroke: "#CCC",
                    strokeWidth: "2",
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M24.297 1.532c3.795 0 6.969 3.141 6.969 6.938 0 3.797-2.984 6.936-6.781 6.936H.734"
                }), o()("path", {
                    d: "M16 7.938c0-2.051 1.662-3.59 3.711-3.59s3.711 1.48 3.711 3.529-1.662 3.529-3.711 3.529H.734M17.934 25.019c0 2.92 2.365 5.449 5.285 5.449s5.285-2.611 5.285-5.531c0-2.918-2.365-5.529-5.285-5.529H.734M.734 23.407h8"
                })),
                G = function(e) {};
            G.displayName = "Windy", G.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var W = o()("g", {
                    fill: "#CCC",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M13.047 17.061c0-3.326 1.424-6.328 3.682-8.451-.883-.293-1.807-.49-2.787-.49-4.93 0-8.941 4.012-8.941 8.941 0 4.93 4.012 8.941 8.941 8.941.981 0 1.904-.197 2.787-.488-2.258-2.125-3.682-5.127-3.682-8.453M1.879 6.24a1.001 1.001 0 0 1-.707-1.707L5.414.291a.999.999 0 1 1 1.414 1.414L2.586 5.949a1 1 0 0 1-.707.291"
                }), o()("path", {
                    d: "M6.121 6.24c-.256 0-.512-.098-.709-.291l-4.24-4.244A.999.999 0 1 1 2.586.291l4.242 4.242a1.001 1.001 0 0 1-.707 1.707M19.879 18.24a1.001 1.001 0 0 1-.707-1.707l4.242-4.242a.999.999 0 1 1 1.414 1.414l-4.242 4.244a1 1 0 0 1-.707.291"
                }), o()("path", {
                    d: "M24.121 18.24c-.256 0-.512-.098-.709-.291l-4.24-4.244a.999.999 0 1 1 1.414-1.414l4.242 4.242a1.001 1.001 0 0 1-.707 1.707"
                })),
                Y = function(e) {};
            Y.displayName = "Clear", Y.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var X = o()("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, void 0, o()("path", {
                    d: "M10 3c3.584 0 6.5 2.916 6.5 6.5S13.584 16 10 16a6.508 6.508 0 0 1-6.5-6.5C3.5 5.916 6.416 3 10 3m0-2.5c-4.949 0-9 4.051-9 9s4.051 9 9 9 9-4.051 9-9-4.051-9-9-9",
                    fill: "#F4D864"
                }), o()("path", {
                    d: "M25.391 18.814c-.072 0-.145.008-.217.01-.822-4.285-4.615-7.521-9.174-7.521-4.566 0-8.357 3.236-9.18 7.521-.07-.002-.141-.01-.215-.01-3.588 0-6.494 2.783-6.494 6.344 0 3.559 2.906 6.342 6.494 6.342H25.39c3.59 0 6.498-2.783 6.498-6.342.001-3.56-2.908-6.344-6.497-6.344",
                    fill: "#CCC"
                })),
                K = function(e) {};
            K.displayName = "PartlyCloudyNight", K.defaultProps = {
                height: void 0,
                width: void 0,
                title: void 0
            };
            var Q = function(e) {};
            Q.defaultProps = {
                icon: void 0,
                height: void 0,
                width: void 0,
                title: void 0
            };
            var Z = Q,
                $ = n("wXC7"),
                ee = n.n($),
                te = ee.a.color,
                ne = ee.a.font,
                ae = Object(w.css)("display:flex;align-items:center;font-family:", ne.franklinBase, ";font-size:", ne.size(10), ";"),
                oe = Object(w.css)("display:flex;align-items:center;margin-right:4px;"),
                ie = Object(w.css)("margin-right:10px;font-weight:bold;font-size:", ne.size(13), ";"),
                se = Object(w.css)("margin-left:2px;color:", te.gray40, ";"),
                re = Object(w.css)("font-size:", ne.size(10), ";line-height:", ne.size(13), ";"),
                le = Object(w.css)("display:block;font-size:", ne.size(12), ";line-height:", ne.size(15), ";margin-top:1px;"),
                ce = Object(w.css)("width:100%;font-family:", ne.franklinBase, ";.", ie, "{margin-right:8px;font-size:", ne.size(14), ";}"),
                de = Object(w.css)("margin-top:3px;.", oe, "{float:left;}.", re, "{display:block;margin-top:-1px;}.", le, "{margin-top:3px;}"),
                ue = Object(w.css)("display:flex;align-items:center;justify-content:flex-start;"),
                pe = Object(w.css)("padding-bottom:4px;"),
                me = function(e) {},
                he = function(e) {
                    function t() {}
                    return v()(t, e), d()(t, [{
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {}
                    }, {
                        key: "fetchWeather",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(g.Component);
            he.displayName = "Weather", he.defaultProps = {
                lastUpdated: void 0,
                isBriefing: !1,
                storyCount: 1,
                updatedDeviceType: null
            };
            t.a = he
        },
        nxVm: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.printHide = void 0;
            var a = n("UmXO"),
                o = (0, a.css)("@media print{margin-left:0;margin-right:0;width:100%;max-width:100%;}"),
                i = (0, a.css)("@media print{display:none;}");
            t.printHide = i;
            var s = o;
            t.default = s
        },
        oJ07: function(e, t, n) {
            "use strict";
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("q1tI"), n("41jq")),
                s = n("wXC7"),
                r = n.n(s),
                l = (n("bHtr"), n("17x9"), n("UmXO")),
                c = o()("path", {
                    d: "M8,10c-2.5,0-7,1.1-7,3.5V16h14v-2.5C15,11.1,10.5,10,8,10z"
                }),
                d = o()("circle", {
                    cx: "8",
                    cy: "4",
                    r: "4"
                });

            function u(e) {}
            u.displayName = "UserIcon", u.defaultProps = {
                className: "",
                fill: r.a.color.gray20
            };
            var p = n("XnIf"),
                m = n("K0fD"),
                h = n("GwXh"),
                f = n("ll1W"),
                v = n("2el9"),
                g = n("xEGZ"),
                b = n("WXMI"),
                y = function() {},
                w = Object(i.withTheme)((function(e) {}));
            t.a = w
        },
        osgS: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {}));
            var a = function(e) {}
        },
        pBA1: function(e, t, n) {
            "use strict";

            function a() {}
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                fillPlacements: function() {},
                handleImpressionViewable: function(e, t) {},
                handleSlotOnload: function(e, t) {},
                handleSlotRenderEnded: function(e, t) {},
                handleAdDefined: function(e, t) {},
                handleAdRequested: function(e, t) {},
                handleSlotEmpty: function(e, t) {},
                init: function(e) {},
                refreshAds: function() {},
                removeAdPlacement: function(e) {},
                removeAllPlacements: function() {},
                updateAdReq: function(e, t) {},
                initializeAd: function(e, t) {},
                unsubscribeToAll: function(e) {},
                shouldHaltAdCalls: function() {},
                handleAdBlockerDetected: function(e) {}
            };
            t.default = o
        },
        pCqE: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            })), n.d(t, "b", (function() {}));
            var a = [{
                    id: 1,
                    name: "news",
                    pages: [{
                        name: "home page",
                        link: "https://www.nytimes.com"
                    }, {
                        name: "world",
                        link: "https://www.nytimes.com/section/world"
                    }, {
                        name: "U.S.",
                        link: "https://www.nytimes.com/section/us"
                    }, {
                        name: "politics",
                        link: "https://www.nytimes.com/section/politics"
                    }, {
                        name: "Election 2020",
                        link: "https://www.nytimes.com/news-event/2020-election"
                    }, {
                        name: "New York",
                        link: "https://www.nytimes.com/section/nyregion"
                    }, {
                        name: "business",
                        link: "https://www.nytimes.com/section/business"
                    }, {
                        name: "tech",
                        link: "https://www.nytimes.com/section/technology"
                    }, {
                        name: "science",
                        link: "https://www.nytimes.com/section/science"
                    }, {
                        name: "climate",
                        link: "https://www.nytimes.com/section/climate",
                        deviceType: "smartphone"
                    }, {
                        name: "sports",
                        link: "https://www.nytimes.com/section/sports"
                    }, {
                        name: "obituaries",
                        link: "https://www.nytimes.com/section/obituaries"
                    }, {
                        name: "the upshot",
                        link: "https://www.nytimes.com/section/upshot",
                        deviceType: "smartphone"
                    }, {
                        name: "Español",
                        link: "https://www.nytimes.com/es/",
                        deviceType: "smartphone"
                    }, {
                        name: "中文网",
                        link: "https://cn.nytimes.com/",
                        deviceType: "smartphone"
                    }, {
                        name: "today's paper",
                        link: "https://www.nytimes.com/section/todayspaper"
                    }, {
                        name: "corrections",
                        link: "https://www.nytimes.com/section/corrections"
                    }]
                }, {
                    id: 2,
                    name: "opinion",
                    pages: [{
                        name: "today's opinion",
                        link: "https://www.nytimes.com/section/opinion"
                    }, {
                        name: "op-ed columnists",
                        link: "https://www.nytimes.com/section/opinion/columnists"
                    }, {
                        name: "editorials",
                        link: "https://www.nytimes.com/section/opinion/editorials"
                    }, {
                        name: "op-ed Contributors",
                        link: "https://www.nytimes.com/section/opinion/contributors"
                    }, {
                        name: "letters",
                        link: "https://www.nytimes.com/section/opinion/letters"
                    }, {
                        name: "sunday review",
                        link: "https://www.nytimes.com/section/opinion/sunday"
                    }, {
                        name: "video: opinion",
                        link: "https://www.nytimes.com/video/opinion"
                    }]
                }, {
                    id: 3,
                    name: "arts",
                    pages: [{
                        name: "today's arts",
                        link: "https://www.nytimes.com/section/arts"
                    }, {
                        name: "art & design",
                        link: "https://www.nytimes.com/section/arts/design"
                    }, {
                        name: "books",
                        link: "https://www.nytimes.com/section/books"
                    }, {
                        name: "dance",
                        link: "https://www.nytimes.com/section/arts/dance"
                    }, {
                        name: "movies",
                        link: "https://www.nytimes.com/section/movies"
                    }, {
                        name: "music",
                        link: "https://www.nytimes.com/section/arts/music"
                    }, {
                        name: "Pop Culture",
                        link: "https://www.nytimes.com/spotlight/pop-culture"
                    }, {
                        name: "television",
                        link: "https://www.nytimes.com/section/arts/television"
                    }, {
                        name: "theater",
                        link: "https://www.nytimes.com/section/theater"
                    }, {
                        name: "watching",
                        link: "https://www.nytimes.com/watching",
                        deviceType: "smartphone"
                    }, {
                        name: "video: arts",
                        link: "https://www.nytimes.com/video/arts"
                    }]
                }, {
                    id: 4,
                    name: "living",
                    pages: [{
                        name: "automobiles",
                        link: "https://www.nytimes.com/section/automobiles"
                    }, {
                        name: "Cooking",
                        link: "https://cooking.nytimes.com/",
                        deviceType: "smartphone"
                    }, {
                        name: "crossword",
                        link: "https://www.nytimes.com/crosswords"
                    }, {
                        name: "education",
                        link: "https://www.nytimes.com/section/education"
                    }, {
                        name: "food",
                        link: "https://www.nytimes.com/section/food"
                    }, {
                        name: "health",
                        link: "https://www.nytimes.com/section/health"
                    }, {
                        name: "jobs",
                        link: "https://www.nytimes.com/section/jobs"
                    }, {
                        name: "magazine",
                        link: "https://www.nytimes.com/section/magazine"
                    }, {
                        name: "parenting",
                        link: "https://parenting.nytimes.com/"
                    }, {
                        name: "real estate",
                        link: "https://www.nytimes.com/section/realestate"
                    }, {
                        name: "style",
                        link: "https://www.nytimes.com/section/style"
                    }, {
                        name: "t magazine",
                        link: "https://www.nytimes.com/section/t-magazine"
                    }, {
                        name: "travel",
                        link: "https://www.nytimes.com/section/travel"
                    }, {
                        name: "love",
                        link: "https://www.nytimes.com/section/fashion/weddings"
                    }]
                }, {
                    id: 5,
                    name: "more",
                    longName: "listings & more",
                    pages: [{
                        name: "Reader Center",
                        link: "https://www.nytimes.com/section/reader-center"
                    }, {
                        name: "Wirecutter",
                        link: "https://thewirecutter.com"
                    }, {
                        name: "Live Events",
                        link: "http://nytconferences.com/"
                    }, {
                        name: "The Learning Network",
                        link: "https://www.nytimes.com/section/learning"
                    }, {
                        name: "tools & services",
                        link: "http://www.nytimes.com/marketing/tools-and-services"
                    }, {
                        name: "N.Y.C. events guide",
                        link: "https://www.nytimes.com/spotlight/arts-listings"
                    }, {
                        name: "multimedia",
                        link: "https://www.nytimes.com/section/multimedia"
                    }, {
                        name: "photography",
                        link: "https://www.nytimes.com/section/lens"
                    }, {
                        name: "video",
                        link: "https://www.nytimes.com/video"
                    }, {
                        name: "Newsletters",
                        link: "https://www.nytimes.com/newsletters"
                    }, {
                        name: "NYT store",
                        link: "https://store.nytimes.com/"
                    }, {
                        name: "times journeys",
                        link: "https://www.nytimes.com/times-journeys"
                    }, {
                        name: "manage my account",
                        link: "https://account.nytimes.com/"
                    }]
                }],
                o = {
                    productLinks: [{
                        name: "newsletters",
                        link: "https://www.nytimes.com/newsletters",
                        iconClass: "iconHomeDelivery",
                        userType: "hd"
                    }, {
                        name: "home delivery",
                        link: "https://www.nytimes.com/hdleftnav",
                        iconClass: "iconHomeDelivery",
                        userType: ["nonsub", "digital"]
                    }, {
                        name: "digital subscriptions",
                        link: "https://www.nytimes.com/digitalleftnav",
                        iconClass: "iconDigitalSubscriptions",
                        userType: "nonsub"
                    }, {
                        name: "gift subscriptions",
                        link: "https://www.nytimes.com/giftleftnav",
                        iconClass: "iconDigitalSubscriptions",
                        userType: ["digital", "hd"]
                    }, {
                        name: "Crossword",
                        link: "https://www.nytimes.com/subscription/crosswords",
                        iconClass: "iconCrossword"
                    }, {
                        name: "Cooking",
                        link: "https://www.nytimes.com/subscription/cooking.html",
                        iconClass: "iconCooking"
                    }],
                    corporateLinks: [{
                        name: "email newsletters",
                        link: "https://www.nytimes.com/newsletters",
                        userType: ["nonsub", "digital"]
                    }, {
                        name: "corporate subscriptions",
                        link: "https://www.nytimes.com/corporateleftnav"
                    }, {
                        name: "education rate",
                        link: "https://www.nytimes.com/educationleftnav"
                    }],
                    alternateLinks: [{
                        name: "mobile applications",
                        link: "http://www.nytimes.com/services/mobile/index.html"
                    }, {
                        name: "replica edition",
                        link: "http://eedition.nytimes.com/cgi-bin/signup.cgi?cc=37FYY"
                    }, {
                        name: "Español",
                        link: "https://www.nytimes.com/es/"
                    }, {
                        name: "中文网",
                        link: "https://cn.nytimes.com/"
                    }]
                }
        },
        pL4N: function(e, t, n) {
            "use strict";
            var a = n("q1tI"),
                o = n.n(a).a.createContext({
                    madData: null
                });
            t.a = o
        },
        qIMw: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("ei0D")),
                i = function() {};
            t.default = i
        },
        qfNL: function(e, t) {
            e.exports = "/vi-assets/static-assets/apple-touch-icon-dark-515d16f1cf801524af90e75750e5048e.png"
        },
        qp0C: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = "".concat("nyt-cheltenham-small", ", georgia, 'times new roman'"),
                o = "".concat("nyt-imperial", ", georgia, 'times new roman', times, serif"),
                i = "helvetica, arial, sans-serif",
                s = "".concat("nyt-cheltenham", ", georgia, 'times new roman', times, serif"),
                r = "".concat("nyt-magsans", ", ").concat(i),
                l = "".concat("nyt-franklin", ", ").concat(i),
                c = "".concat("nyt-kippenberger", ", ").concat(i),
                d = "".concat("nyt-fact-display", ", georgia, 'times new roman', times, serif"),
                u = "".concat("nyt-fact-deck", ", georgia, 'times new roman', times, serif"),
                p = "".concat("nyt-cheltenham-cond", ", ").concat(s),
                m = "".concat("nyt-karnak", ", georgia, 'times new roman', times, serif"),
                h = "".concat("Source Sans Pro", ", ").concat(i),
                f = "".concat("montserrat", ", ").concat(i),
                v = {
                    cheltenham: "nyt-cheltenham",
                    cheltenhamCond: "nyt-cheltenham-cond",
                    cheltenhamSmall: "nyt-cheltenham-small",
                    franklin: "nyt-franklin",
                    graphik: "nyt-graphik",
                    imperial: "nyt-imperial",
                    karnak: "nyt-karnak",
                    magsans: "nyt-magsans",
                    magslab: "nyt-magslab",
                    schnyderScond: "nyt-schnyder-scond",
                    factDeck: "nyt-fact-deck",
                    factDisplay: "nyt-fact-display",
                    kippenberger: "nyt-kippenberger",
                    serif: "nyt-cheltenham",
                    sans: "nyt-franklin",
                    serifSmall: a,
                    serifBase: o,
                    sansBase: i,
                    serifMedium: s,
                    magazineSansBase: r,
                    franklinBase: l,
                    tmagSansBase: c,
                    tmagSerifDisplayBase: d,
                    tmagSerifDeckBase: u,
                    opinionBase: p,
                    karnakBase: m,
                    sponsoredBase: h,
                    sponsoredSensitive: f,
                    baseFontSize: 16,
                    size: function(e) {
                        return "".concat(e / 16, "rem")
                    },
                    sponsoredBaseImportUrl: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i",
                    sponsoredSensitiveImportUrl: "https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i,700,700i|Source+Sans+Pro:400,600,700",
                    weight: {
                        extraLight: 200,
                        light: 300,
                        book: 400,
                        medium: 500,
                        mediumBold: 600,
                        bold: 700,
                        extraBold: 800,
                        headline: 900
                    }
                };
            t.default = v
        },
        qs2k: function(e, t, n) {
            "use strict";
            n("a1Th"), n("Btvt");
            var a = n("wYzE"),
                o = function(e) {
                    return Math.floor(Math.random() * Math.floor(e))
                };
            n.d(t, "e", (function() {
                return i
            })), n.d(t, "d", (function() {})), n.d(t, "c", (function() {})), n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {})), n.d(t, "g", (function() {
                return m
            })), n.d(t, "h", (function() {
                return h
            }));
            var i = "optlyScript",
                s = "optlyData",
                r = "optlyAsset",
                l = "cig",
                c = "meter",
                d = window.performance || {},
                u = function() {},
                p = function() {};
            d.mark = d.mark || u, d.measure = d.measure || u, d.getEntriesByName = d.getEntriesByName || p, d.getEntriesByType = d.getEntriesByType || p, d.mark("timeToBundle");
            var m = function(e) {
                    return d.mark("".concat(e, "-start"))
                },
                h = function(e, t) {
                    ! function(e) {
                        d.mark("".concat(e, "-end"))
                    }(e);
                    try {
                        d.measure(e, "".concat(e, "-start"), "".concat(e, "-end"));
                        var n = d.getEntriesByName(e).pop(),
                            i = 0 === o(1e3);
                        n && i && Object(a.a)({
                            event: "impression",
                            module: {
                                name: "timing",
                                context: "script-load",
                                label: e,
                                region: Math.round(t || n.duration).toString()
                            }
                        }, {
                            individualEvents: !0
                        })
                    } catch (e) {
                        console.error(e)
                    }
                };
            t.f = d
        },
        rI8Z: function(e, t, n) {
            "use strict";
            n("KKXr");
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("q1tI"), n("2UD4")),
                s = n.n(i),
                r = {
                    nyt: "The New York Times",
                    nytco: "The New York Times Company",
                    nytdotcom: "NYTimes.com",
                    advertisement: "Advertisement",
                    paidPostAdvert: "Paid Post",
                    reportAd: "Capture Ad",
                    seeMore: "See More",
                    seeMoreIn: "See More in",
                    relatedCoverage: "Related Coverage",
                    showAll: "Show All",
                    viewAll: "View All",
                    contactUs: "Contact Us",
                    privacy: "Privacy",
                    termsOfSale: "Terms of Sale",
                    termsOfService: "Terms of Service",
                    help: "Help",
                    subscribe: "Subscribe",
                    workwithus: "Work with us",
                    advertise: "Advertise",
                    subscriptions: "Subscriptions",
                    youradchoices: "Your Ad Choices",
                    logIn: "Log In",
                    homeDeliverySubscriber: "Home Delivery Subscriber",
                    digitalSubscriber: "Digital Subscriber",
                    account: "Account",
                    billing: "Billing Information",
                    contact: "Contact Us",
                    logOut: "Log out",
                    chooseEdition: "Choose Edition",
                    skipContent: "Skip to content",
                    skipIndex: "Skip to site index",
                    skipCloseBtn: "Skip to Close button",
                    timesExclusive: "Times Exclusive",
                    watchVideo: "Watch Video",
                    playAudio: "Play Audio",
                    goToHomePage: "Go to Home Page »",
                    pageNotFound: "Page Not Found",
                    cancel: "Cancel",
                    title404: "Not Found",
                    text404: "We’re sorry, we seem to have lost this page, but we don’t want to lose you. <a href='mailto:nytmobile@nytimes.com?subject=NYT%20Mobile%20Web%20Feedback&body={body}'>Report the broken link here.</a>",
                    title410: "Page No Longer Available",
                    text410: "This news-agency article is no longer available on nytimes.com.",
                    save: "save",
                    close: "close",
                    from: "From",
                    share: {
                        sectionBarShareLabel: "Social Media Share buttons, Save button, and Comments Panel with current comment count",
                        shareMenuLabel: "More sharing options",
                        shareSlideshow: "Share Slideshow",
                        shareArticle: "Share Article",
                        share: "Share",
                        facebook: "Share on Facebook",
                        twitter: "Share on Twitter",
                        email: "Email",
                        linkedin: "Share on Linkedin",
                        whatsapp: "Share on WhatsApp",
                        reddit: "Share on Reddit",
                        permalink: "Permalink"
                    },
                    title500: "Error",
                    text500: 'We’re sorry, we seem to be having some technical difficulties, but we don’t want to lose you. Please refresh the page, check back later, or you’re bound to find something of interest <a href="/">here</a>.',
                    comments: {
                        name: "Comments",
                        introduction: "Click to read and post comments.",
                        commentList: "List of Comments",
                        commentPanel: "Comments Panel",
                        comment: "comment",
                        comments: "comments",
                        noComments: "There are no comments"
                    },
                    meter: {
                        growlTout: "Enjoy journalism worthy of 122 Pulitzers. More than any other news organization.",
                        growlToutLarge: "Get 30% off the Times subscription of your choice.",
                        alreadyAccount: "Already have an account?",
                        notNow: "Not now",
                        gatewayLimit: "You have reached your limit of free articles.",
                        discount40: "Get 30% off the Times subscription of your choice.",
                        limitedTime: "Limited time offer",
                        seeMyOptions: "SEE MY OPTIONS",
                        truth: "Truth.",
                        discover: "Discover it with us.",
                        linkAccount: "Link account",
                        expand: "Expand",
                        collapse: "Collapse",
                        offerWontLast: "Offer Won't Last",
                        sale50: "The Times Sale. 50% off for one year.",
                        dockHeaderOffer1: "Subscribe now.",
                        dockHeaderOffer2: "50% off for one year.",
                        dockHeaderDefault: "Subscribe to The New York Times.",
                        alreadySubscriber: "Already a subscriber? Log in.",
                        subscribeToTimes: "Subscribe to The Times"
                    },
                    feedback: {
                        description: "We’d like your thoughts on the New York Times home page experience.",
                        link: "Let us know what you think"
                    },
                    welcomeAd: {
                        covering: "Covering stories from up close.",
                        coveringsale: "Make a difference in today’s world.",
                        coveringsale2: "Support independent journalism.",
                        already: "Already a Subscriber?",
                        firsthand: "Firsthand reporting that brings you the facts.",
                        readwatchlistensale: "Read. Watch. Listen.",
                        price: "From {oldPrice} {newPrice} a month.",
                        price2: "From <strike>$15.99</strike> $9.99 a month.",
                        noprice: "Subscribe to The New York Times.",
                        subscribe: "SEE MY OPTIONS",
                        href: "https://www.nytimes.com/subscriptions/multiproduct/lp8HYKU.html?campaignId=7LKLL"
                    },
                    search: {
                        nSearchSuggestions: "{suggestionCount} search suggestions. Use arrow keys to navigate.",
                        refineByDateRange: "Date Range",
                        searchFieldLabel: "Search",
                        searchAccessibilityInstructions: "Use up and down arrows to review search suggestions and enter to select",
                        searchingEllipsis: "Loading…",
                        searchTheNewYorkTimes: "Search The New York Times",
                        showingNResultsFor: "Showing {resultCount} results for:",
                        showMore: "Show More",
                        sortByNewest: "Sort by Newest",
                        sortByOldest: "Sort by Oldest",
                        sortByRelevance: "Sort by Relevance"
                    },
                    timeswire: {
                        label: "TimesWire",
                        showMore: "Show More",
                        description: "Times Wire is a continuous stream of the latest articles published on NYTimes.com.",
                        keywords: "breaking news, times wire, live feed, now, 24 hours, stream, live, continuous, most recent, just in, photos",
                        subscribe: "Subscribe to Times Wire Feed"
                    },
                    printInformation: {
                        aVersionOf: "A version of this article appears in print on ",
                        onPage: ", Page ",
                        onSection: ", Section ",
                        ofTheSundayMagazine: " of the Sunday Magazine",
                        oftheSundayBookReview: " of the Sunday Book Review",
                        ofTMagazine: " of T Magazine",
                        ofEducationLife: " of Education Life",
                        oftheNewYorkEdition: " of the New York edition",
                        oftheNationaledition: " of the National edition",
                        inTheInternationalNewYorkTimes: " in The New York Times International Edition",
                        inTheInternationalHeraldTribune: " in The International Herald Tribune",
                        withTheHeadline: " with the headline: ",
                        links: '. <a href="http://www.nytreprints.com/">Order Reprints</a> | <a href="http://www.nytimes.com/pages/todayspaper/index.html">Today’s Paper</a> | <a href="https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html?campaignId=48JQY">Subscribe</a>'
                    },
                    collections: {
                        showMore: "Show More",
                        sortByNewest: "newest",
                        sortByOldest: "oldest",
                        sortByRelevance: "relevance"
                    },
                    ask: {
                        submitError: "Oops, we seem to be having a problem. Please refresh this page and try again!"
                    }
                };
            n.d(t, "c", (function() {})), n.d(t, "a", (function() {})), n.d(t, "b", (function() {}));
            var l = r,
                c = function(e, t) {},
                d = {
                    es: "es",
                    en: "en-US",
                    "zh-hans": "zh-hans",
                    "zh-hant": "zh-hant"
                },
                u = function(e) {}
        },
        rV9i: function(e, t, n) {
            "use strict";

            function a(e, t, n) {}

            function o(e, t) {
                return function(n) {}
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, o.variants = function(e, t, n) {};
            var i = o;
            t.default = i
        },
        rnzX: function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a = n("pVnL"),
                o = n.n(a),
                i = n("lSNA"),
                s = n.n(i),
                r = n("gcR/"),
                l = n.n(r),
                c = n("lwsE"),
                d = n.n(c),
                u = n("W8MJ"),
                p = n.n(u),
                m = n("a1gu"),
                h = n.n(m),
                f = n("Nsbk"),
                v = n.n(f),
                g = n("7W2i"),
                b = n.n(g),
                y = n("q1tI"),
                w = n.n(y),
                k = (n("17x9"), n("QS0n")),
                C = n("OB6K"),
                B = n.n(C),
                E = n("B88b"),
                T = n("ZKN5"),
                A = n("OO03"),
                x = n("UmXO"),
                O = n("X6oL"),
                S = n.n(O),
                N = n("9/5/"),
                D = n.n(N),
                _ = n("vEu8"),
                I = n("bQ5B"),
                F = n("HUmG"),
                M = n("If/s"),
                P = n("oJ07"),
                L = n("Ytp6"),
                j = n("FyX9"),
                R = n("YrOh"),
                z = (n("OG14"), n("cr+I")),
                V = n.n(z),
                U = n("Lkij"),
                J = {
                    anon: "MC_DFP_topbar_bar_anon_1019",
                    regi: "MC_DFP_topbar_bar_regi_1019"
                },
                H = function() {},
                q = function(e) {},
                G = function() {},
                W = {
                    anon: {
                        desktop: "<strong>Keep reading The Times</strong> by creating a free account or logging in.",
                        smartphone: "Keep reading The Times for free.",
                        tablet: "<strong>Keep reading The Times</strong> by creating a free account or logging in."
                    },
                    regi: {
                        desktop: "<strong>Don&apos;t hit a wall.</strong> Subscribe today for unlimited Times access.",
                        smartphone: "Upgrade to unlimited access.",
                        tablet: "<strong>Don&apos;t hit a wall.</strong> Subscribe today for unlimited Times access."
                    }
                },
                Y = function(e) {};
            Y.displayName = "TopBarMessage", Y.defaultProps = {
                deviceType: "smartphone",
                userType: "anon"
            };
            var X = Y,
                K = n("19Jd"),
                Q = n("+4HN"),
                Z = n("WXMI"),
                $ = n("xEGZ"),
                ee = n("nMzm"),
                te = "https://www.nytimes.com/subscription?campaignId=78XFH",
                ne = "https://www.nytimes.com/subscription?campaignId=7UFRJ",
                ae = l()($.a, {
                    "data-testid": "subscribe-button"
                }, void 0, Z.f),
                oe = function(e) {};
            oe.displayName = "SubscribeButton", oe.defaultProps = {
                isLoggedIn: !1,
                isNational: !1,
                tracking: {},
                userType: "anon"
            };
            var ie, se = oe,
                re = (n("84bF"), n("wXC7")),
                le = n.n(re),
                ce = 43,
                de = 38,
                ue = ce,
                pe = le.a.zIndex.sectionOverlay + 1e5,
                me = Object(x.css)("background:", le.a.color.white, ";display:block;left:0;position:sticky;top:0;width:100%;z-index:", pe, ";border:none;", le.a.breakpoint.medium, "{border-bottom:1px solid ", le.a.color.gray20, ";}"),
                he = Object(x.css)("margin:0 auto;max-width:", le.a.breakpoint.maxDesktopContentWidth, "px;padding:0 3%;white-space:nowrap;"),
                fe = Object(x.css)("position:relative;height:", ue, "px;"),
                ve = Object(x.css)("bottom:0;background-color:", le.a.color.white, ";left:0;position:absolute;right:0;border-bottom:1px solid ", le.a.color.gray20, ";"),
                ge = Object(x.css)("top:0;transition:top 0.4s ease-out;"),
                be = Object(x.css)("top:-", ue + 1, "px;transition:top 0.4s ease-in;"),
                ye = Object(x.css)("padding:7px 0 0 0;"),
                we = Object(x.css)("position:absolute;top:0;right:0;bottom:0;left:0;"),
                ke = Object(x.css)("font-family:", le.a.font.franklin, ";font-size:13px;color:#000;line-height:", ue, "px;height:", ue, "px;margin:0 0 0 25px;strong{font-weight:bold;}", le.a.breakpoint.small, "{font-size:15px;}", le.a.breakpoint.medium, "{margin:0;}"),
                Ce = Object(x.css)("visibility:visible;opacity:1;", le.a.breakpoint.medium, "{transition:opacity 0.2s ease-in;}"),
                Be = Object(x.css)("visibility:hidden;opacity:0;", le.a.breakpoint.medium, "{transition:opacity 0.2s ease-in;}"),
                Ee = w.a.createRef(),
                Te = S()()(ie = Object(A.a)(ie = Object(_.a)(ie = Object(I.a)(ie = function(e) {
                    function t() {}
                    return b()(t, e), p()(t, [{
                        key: "toggleModal",
                        value: function(e) {}
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {}
                    }, {
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(y.Component)) || ie) || ie) || ie) || ie;
            Te.defaultProps = {
                editionsActive: "en",
                deviceType: "",
                isTopBarVariant: !1,
                isHomePage: !1,
                skipToContent: "",
                user: {}
            };
            var Ae, xe, Oe, Se, Ne = Te,
                De = n("B0Ek"),
                _e = n("JGzp"),
                Ie = n("lZ/M"),
                Fe = n("dlEz"),
                Me = n("369f"),
                Pe = n("ecgq"),
                Le = n("nUoC"),
                je = n("mczz"),
                Re = n("Madg"),
                ze = n("0lSQ"),
                Ve = n("K0fD"),
                Ue = (n("2Spj"), n("SRfc"), n("VkAN")),
                Je = n.n(Ue),
                He = n("PJYZ"),
                qe = n.n(He),
                Ge = n("XWHH"),
                We = n.n(Ge),
                Ye = n("Dugd"),
                Xe = n.n(Ye),
                Ke = n("hHXl"),
                Qe = n("Vc97"),
                Ze = n("5TEs"),
                $e = n("+mLS"),
                et = n("QYgy"),
                tt = n("i7V7"),
                nt = n("3NoI"),
                at = n.n(nt),
                ot = at()("div", {
                    target: "e1emve040"
                })("top:0;height:1px;position:", (function(e) {}), ";width:100%;z-index:1000000010;}"),
                it = at()("div", {
                    target: "e1emve041"
                })("width:100%;height:1px;display:flex;justify-content:flex-end;margin:0 auto;max-width:", (function(e) {}), ";"),
                st = Object(x.css)("position:fixed;top:35px;"),
                rt = function(e) {},
                lt = function(e) {},
                ct = function(e) {},
                dt = function(e) {},
                ut = function(e) {},
                pt = n("b4QB"),
                mt = function(e) {};

            function ht() {}
            var ft, vt, gt, bt = l()(it, {
                    id: "google-one-tap-prompt"
                }),
                yt = (Ae = S()(), Object(Ze.a)(xe = Object(A.a)(xe = Object(Qe.a)(xe = Object(Ke.withApollo)(xe = Ae((Se = Oe = function(e) {
                    function t(e) {}
                    return b()(t, e), p()(t, [{
                        key: "handleScroll",
                        value: function() {}
                    }, {
                        key: "componentDidMount",
                        value: function() {}
                    }, {
                        key: "componentDidUpdate",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(y.Component), Oe.defaultProps = {
                    user: {},
                    granted: !1,
                    gatewayTypeVariation: "",
                    pageType: "",
                    meterReady: !1
                }, xe = Se)) || xe) || xe) || xe) || xe) || xe),
                wt = n("wOE9"),
                kt = Object(x.keyframes)("from{opacity:0;}to{opacity:1;}"),
                Ct = "opacity:1;visibility:visible;animation-name:",
                Bt = "ms;animation-timing-function:ease-out;",
                Et = Object(x.keyframes)("from{visibility:visible;opacity:1;}to{visibility:visible;opacity:0;}"),
                Tt = function(e, t) {};

            function At(e, t) {}
            var xt = function(e) {},
                Ot = l()(E.a, {}),
                St = l()(Ie.a, {}),
                Nt = Object(wt.a)(ft = Object(A.a)(ft = Object(T.a)(ft = Object(k.withRouter)((gt = vt = function(e) {
                    function t() {}
                    return b()(t, e), p()(t, [{
                        key: "componentDidUpdate",
                        value: function(e) {}
                    }, {
                        key: "render",
                        value: function() {}
                    }]), t
                }(y.Component), vt.defaultProps = {
                    location: {},
                    treatment: void 0,
                    handleSave: void 0,
                    user: null,
                    error: null,
                    mastheadStyleProps: {},
                    mastheadOnMouseEnter: function() {},
                    mastheadOnMouseLeave: function() {},
                    sectionData: {
                        sectionName: "",
                        subsectionName: "",
                        displayName: "",
                        url: ""
                    },
                    tone: null,
                    showMasthead: !0,
                    renderMasthead: !0,
                    showIndex: !0,
                    showFloatingMiniNav: !0,
                    center: !1,
                    showMiniNavDoubleBorderBottom: !0,
                    showMiniNav: !0,
                    stickyMasthead: !1,
                    hideModalOnScroll: !1,
                    skipToContent: null,
                    fastlyAbraConfig: {},
                    route: "",
                    FollowLinksComponent: !1,
                    editionsActive: "en",
                    pageType: ""
                }, ft = gt)) || ft) || ft) || ft) || ft;
            Nt.displayName = "Shell";
            t.a = Nt
        },
        s5tu: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.stripQueryParams = function() {}, t.objectToQueryParams = function e(t, n) {}, t.isInternalLink = void 0;
            var o = a(n("cDf5")),
                i = a(n("CxY0")),
                s = function(e) {};
            t.isInternalLink = function() {}
        },
        tBMr: function(e, t) {
            e.exports = "/vi-assets/static-assets/ios-iphone-114x144-61d373c43aa8365d3940c5f1135f4597.png"
        },
        "tO/N": function(e, t, n) {
            "use strict";
            (function(e) {
                var a, o, i, s = n("gcR/"),
                    r = n.n(s),
                    l = n("lwsE"),
                    c = n.n(l),
                    d = n("W8MJ"),
                    u = n.n(d),
                    p = n("a1gu"),
                    m = n.n(p),
                    h = n("Nsbk"),
                    f = n.n(h),
                    v = n("7W2i"),
                    g = n.n(v),
                    b = n("q1tI"),
                    y = (n("17x9"), n("vftj")),
                    w = n("CodD"),
                    k = n("rI8Z"),
                    C = n("cTL7"),
                    B = n("5rIp"),
                    E = "%0D%0A",
                    T = r()(C.a, {}),
                    A = Object(w.withRouter)((i = o = function(t) {
                        function n() {}
                        return g()(n, t), u()(n, [{
                            key: "componentDidMount",
                            value: function() {}
                        }, {
                            key: "render",
                            value: function() {}
                        }]), n
                    }(b.Component), o.defaultProps = {
                        staticContext: void 0
                    }, a = i)) || a;
                A.displayName = "NotFound", t.a = A
            }).call(this, n("8oxB"))
        },
        tXE8: function(e, t, n) {
            "use strict";
            n("91GP");
            var a = n("TxU7"),
                o = n("r538"),
                i = n("CxY0"),
                s = n("Ftfp"),
                r = n("hEyz"),
                l = (n("pIFo"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V"), n("lwsE")),
                c = n.n(l),
                d = n("a1gu"),
                u = n.n(d),
                p = n("Nsbk"),
                m = n.n(p),
                h = n("PJYZ"),
                f = n.n(h),
                v = n("7W2i"),
                g = n.n(v),
                b = n("oShl"),
                y = n.n(b),
                w = n("I/p7"),
                k = function(e) {
                    function t() {}
                    return g()(t, e), t
                }(y()(Error)),
                C = n("/Fw/"),
                B = n("XWHH"),
                E = n.n(B),
                T = n("zJ6h"),
                A = n("hdh8"),
                x = new T.IntrospectionFragmentMatcher({
                    introspectionQueryResultData: A
                }),
                O = function() {
                    return new T.InMemoryCache({
                        fragmentMatcher: x,
                        dataIdFromObject: function(e) {}
                    })
                },
                S = n("+mLS"),
                N = n("wYzE"),
                D = (n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("f3/d"), n("lSNA")),
                _ = n.n(D);
            n("VRzm");

            function I(e, t) {}

            function F(e) {}
            var M, P = {
                    Query: {
                        videoNavigation: function() {},
                        advocateInfo: function(e, t) {},
                        referralInfo: function(e, t) {}
                    },
                    Mutation: {
                        inviteFriend: function(e, t) {}
                    }
                },
                L = window.__preloadedData,
                j = L.initialState,
                R = void 0 === j ? {} : j,
                z = L.config,
                V = Object(i.parse)(window.location.href, !0).query["ip-override"],
                U = (M = function(e) {}, Object(w.onError)((function(e) {}))),
                J = Object.assign({}, z.gqlRequestHeaders);
            delete J["x-nyt-continent"], delete J["x-nyt-country"], delete J["x-nyt-region"], delete J["x-nyt-gmt-offset"];
            var H = Object(r.createHttpLink)({
                uri: z.gqlUrl + (V ? "?ip-override=".concat(V) : ""),
                fetch: E.a,
                fetchOptions: {
                    credentials: "include",
                    timeout: z.gqlFetchTimeout
                },
                headers: J
            });
            z.disablePersistedQueries || (H = Object(s.createPersistedQueryLink)().concat(H));
            var q, G = o.ApolloLink.from([U, new C.RetryLink({
                    attempts: function(e, t, n) {},
                    delay: 10
                }), H]),
                W = new a.ApolloClient({
                    link: G,
                    cache: O().restore(R),
                    ssrForceFetchDelay: 100,
                    connectToDevTools: "prd" !== vi.env.ENVIRONMENT,
                    resolvers: P
                });
            t.a = W
        },
        "tq/d": function(e, t) {
            e.exports = function() {}
        },
        u1H9: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {})), n.d(t, "b", (function() {})), n.d(t, "d", (function() {})), n.d(t, "c", (function() {})), n.d(t, "g", (function() {})), n.d(t, "f", (function() {})), n.d(t, "e", (function() {}));
            n("a1Th"), n("Btvt");
            var a = n("gcR/"),
                o = n.n(a),
                i = (n("q1tI"), n("HUmG")),
                s = 50,
                r = function() {},
                l = function(e) {},
                c = o()("div", {}, void 0, "This is your ", o()("strong", {}, void 0, "last free article.")),
                d = function(e, t) {},
                u = function(e) {},
                p = function(e) {},
                m = function() {}
        },
        vEu8: function(e, t, n) {
            "use strict";
            n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a, o = n("pVnL"),
                i = n.n(o),
                s = (n("Z2Ku"), n("L9s1"), n("lwsE")),
                r = n.n(s),
                l = n("W8MJ"),
                c = n.n(l),
                d = n("a1gu"),
                u = n.n(d),
                p = n("Nsbk"),
                m = n.n(p),
                h = n("7W2i"),
                f = n.n(h),
                v = (n("f3/d"), n("lSNA")),
                g = n.n(v),
                b = n("q1tI"),
                y = n.n(b),
                w = n("17x9"),
                k = n.n(w),
                C = n("2mql"),
                B = n.n(C),
                E = n("9/5/"),
                T = n.n(E),
                A = n("E00O"),
                x = {
                    SMARTPHONE: "smartphone",
                    TABLET: "tablet",
                    DESKTOP: "desktop"
                },
                O = (a = {}, g()(a, x.SMARTPHONE, A.a.BREAKPOINT_S), g()(a, x.TABLET, A.a.BREAKPOINT_M), g()(a, x.DESKTOP, A.a.BREAKPOINT_L), a);
            t.a = function(e) {
                var t = e.displayName || e.name || "Component",
                    n = function(t) {
                        function n() {
                            var e, t;
                            r()(this, n);
                            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                            return (t = u()(this, (e = m()(n)).call.apply(e, [this].concat(o)))).mounted = !1, t.state = {
                                deviceType: t.context.initialDeviceType,
                                breakpoint: O[t.context.initialDeviceType]
                            }, t.maxWidthMatches = function(e) {}, t.minWidthMatches = function(e) {
                                return window.matchMedia("(min-width: ".concat(e, "px)")).matches
                            }, t.resizeListener = T()((function() {
                                if (t.mounted) {
                                    var e = x.SMARTPHONE,
                                        n = A.a.BREAKPOINT_S;
                                    t.minWidthMatches(A.a.BREAKPOINT_M) && (e = x.TABLET, n = A.a.BREAKPOINT_M), t.minWidthMatches(A.a.BREAKPOINT_ML) && (e = x.TABLET, n = A.a.BREAKPOINT_ML), t.minWidthMatches(A.a.BREAKPOINT_L) && (e = x.DESKTOP, n = A.a.BREAKPOINT_L), t.state.deviceType === e && t.state.breakpoint === n || t.setState({
                                        deviceType: e,
                                        breakpoint: n
                                    })
                                }
                            }), 250, {
                                leading: !0,
                                trailing: !0
                            }), t
                        }
                        return f()(n, t), c()(n, [{
                            key: "componentDidMount",
                            value: function() {
                                this.mounted = !0, window.addEventListener("resize", this.resizeListener), this.resizeListener()
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {}
                        }, {
                            key: "render",
                            value: function() {
                                var t = "ontouchstart" in window || !!navigator.msMaxTouchPoints;
                                return y.a.createElement(e, i()({}, this.props, {
                                    deviceType: this.state.deviceType,
                                    breakpoint: this.state.breakpoint,
                                    initialDeviceType: this.context.initialDeviceType,
                                    maxWidthMatches: this.maxWidthMatches,
                                    minWidthMatches: this.minWidthMatches,
                                    supportsTouch: t
                                }))
                            }
                        }]), n
                    }(b.Component);
                return n.displayName = "WithDeviceType", n.displayName = "WithDeviceType(".concat(t, ")"), n.contextTypes = {
                    initialDeviceType: k.a.oneOf(Object.keys(x).map((function(e) {
                        return x[e]
                    })))
                }, B()(n, e), n
            }
        },
        wOE9: function(e, t, n) {
            "use strict";
            n("f3/d");
            var a = n("pVnL"),
                o = n.n(a),
                i = n("q1tI"),
                s = n.n(i),
                r = n("17x9"),
                l = n.n(r);
            t.a = function(e) {
                var t = function(t, n) {};
                t.contextTypes = {
                    getReferrer: l.a.func.isRequired,
                    getPageviewId: l.a.func.isRequired,
                    updatePageviewId: l.a.func.isRequired,
                    fastlyAbraConfig: l.a.shape({})
                };
                var n = e.displayName || e.name || "Component";
                return t.displayName = "withAppContext(".concat(n, ")"), t
            }
        },
        wSuE: function(e, t, n) {
            t.hot = function(e) {
                return e
            }
        },
        wXC7: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "STS", {
                enumerable: !0,
                get: function() {}
            }), t.default = void 0;
            var o = a(n("U8LS")),
                i = a(n("DxDJ")),
                s = a(n("yEuy")),
                r = a(n("5TEd")),
                l = a(n("qp0C")),
                c = a(n("eJXx")),
                d = a(n("nxVm")),
                u = a(n("TULB")),
                p = a(n("A6NT")),
                m = {
                    a11y: o.default,
                    breakpoint: i.default,
                    button: s.default,
                    color: r.default,
                    font: l.default,
                    grid: c.default,
                    print: d.default,
                    textAlign: u.default,
                    zIndex: {
                        sectionOverlay: 1e8,
                        menuOverlay: 1e9,
                        mastheadLogo: 1000000001,
                        mastheadButtongroup: 1000000002,
                        ribbon: 1000000100,
                        dock: 1000000101,
                        commentsPanel: 1000000109,
                        overlay: 1000000110,
                        modal: 1000000120,
                        searchModalResults: 1000000130,
                        navigation: 1000000140,
                        navigationModal: 1000000150,
                        interstitialModal: 1000000160
                    }
                };
            t.default = m
        },
        wYzE: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return v
            })), n.d(t, "b", (function() {
                return g
            }));
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("RW0V");
            var a, o, i = n("lSNA"),
                s = n.n(i),
                r = (n("VRzm"), n("Btvt"), n("60yG")),
                l = n.n(r),
                c = n("Fm/i"),
                d = n("0O4q"),
                u = n("jNhd");

            function p(e, t) {}

            function m(e) {}
            var h = "test" === (null === (a = vi) || void 0 === a ? void 0 : null === (o = a.env) || void 0 === o ? void 0 : o.BABEL_ENV) || !1,
                f = function(e, t) {
                    if ((Object(c.validator)(e, t) || {}).errors && !h) throw new Error(" ☝️  There were tracking-schema errors. See the error logged above.");
                    (null == e ? void 0 : e.event) && e.eventCallback && (e.eventCallback = l()(e.eventCallback), e.eventTimeout = e.eventTimeout || 100, setTimeout((function() {}), e.eventTimeout)), (window.dataLayer = window.dataLayer || []).push(e)
                },
                v = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "pageDataReady" === (null == e ? void 0 : e.event) ? Object(u.a)(e).then((function(e) {})).catch((function(e) {})) : new Promise((function(n, a) {
                        var o = !1;
                        d.a.subscribe({
                            next: function(a) {},
                            error: function(n) {
                                f(e, t), o = !0, a(n)
                            },
                            complete: function() {}
                        })
                    }))
                },
                g = function(e) {
                    var t;
                    return !!(null == e ? void 0 : null === (t = e.presentation) || void 0 === t ? void 0 : t.pageType) && {
                        event: "pageDataReady"
                    }
                }
        },
        xEGZ: function(e, t, n) {
            "use strict";
            n.d(t, "g", (function() {})), n.d(t, "f", (function() {})), n.d(t, "a", (function() {
                return N
            })), n.d(t, "b", (function() {})), n.d(t, "c", (function() {})), n.d(t, "h", (function() {})), n.d(t, "e", (function() {})), n.d(t, "d", (function() {})), n.d(t, "i", (function() {}));
            n("84bF");
            var a = n("3NoI"),
                o = n.n(a),
                i = n("UmXO"),
                s = n("rV9i"),
                r = n.n(s),
                l = n("mFn4"),
                c = n.n(l),
                d = n("PxMw"),
                u = n.n(d),
                p = n("wXC7"),
                m = n.n(p),
                h = function(e) {},
                f = function(e) {},
                v = function(e) {},
                g = function(e) {},
                b = function(e) {},
                y = function(e) {},
                w = function(e) {},
                k = function(e) {},
                C = (m.a.breakpoint.mediumLarge, function(e) {}),
                B = function(e) {},
                E = Object(i.css)("display:inline-block;margin:5px 0;", m.a.breakpoint.mediumLarge, "{margin:5px 0;}"),
                T = function(e) {},
                A = Object(i.css)("display:none;", m.a.breakpoint.mediumLarge, "{display:inline-block;margin-right:7px;}"),
                x = function(e) {},
                O = function(e) {},
                S = function(e) {},
                N = o()(u.a, {
                    target: "ez4a0qj0"
                })(m.a.button.action, ";", x, ";", O, " ", m.a.breakpoint.mediumLarge, "{padding:11px 12px 8px;", g, " ", O, "}&:hover{border:1px solid ", m.a.color.blue20, ";", O, " ", S, "}"),
                D = function(e) {},
                _ = o()("div", {
                    target: "ez4a0qj1"
                })("display:flex;justify-content:space-around;position:absolute;right:10px;top:9px;", m.a.breakpoint.mediumLarge, "{top:4px;", (function(e) {}), ";", D, ";}@media print{display:none;}", (function(e) {}), ";", C, " ", m.a.breakpoint.medium, "{", C, " ", B, "}"),
                I = r()("iconStyle", {
                    default: "transparent",
                    white: "rgba(0, 0, 0, 0.3)",
                    black: "rgba(247, 247, 247, 0.5)"
                }),
                F = r()("iconStyle", {
                    default: m.a.color.gray70,
                    white: "rgba(0, 0, 0, 0.3)",
                    black: m.a.color.gray70
                }),
                M = function(e) {},
                P = function(e) {},
                L = function(e) {},
                j = o()(c.a, {
                    target: "ez4a0qj2"
                })(m.a.button.transparent, ";", M, ";display:none;", b, " ", y, " ", k, " &:hover{background-color:", I, ";}", m.a.breakpoint.small, "{", w, "}", m.a.breakpoint.mediumLarge, "{border:0;display:block;height:33px;margin-top:0;padding:8px 9px;", L, ";", g, " ", k, "}&.fullActiveUserButton{background-color:", F, ";}", m.a.breakpoint.large, "{", P, ";", k, "}"),
                R = Object(i.css)("display:inline-block;width:9px;height:5px;margin-left:6px;margin-bottom:2px;vertical-align:middle;"),
                z = r()("iconStyle", {
                    default: m.a.color.gray10,
                    white: m.a.color.white,
                    black: m.a.color.gray10
                }),
                V = o()("span", {
                    target: "ez4a0qj3"
                })("color:", z, ";display:block;font-family:", m.a.font.franklinBase, ";font-weight:", m.a.font.weight.medium, ";font-size:12px;", T),
                U = function(e) {},
                J = function(e) {},
                H = function(e) {},
                q = function(e) {},
                G = o()(c.a, {
                    target: "ez4a0qj4"
                })(m.a.button.transparent, ";border:0;display:block;", U, ";", q, " ", v, " ", m.a.breakpoint.medium, "{border:none;line-height:13px;padding:9px 9px 12px;", f, "}", m.a.breakpoint.mediumLarge, "{display:none;", H, ";}", m.a.breakpoint.large, "{", J, ";}"),
                W = Object(i.css)("display:block;width:16px;height:16px;")
        },
        xs1G: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {};
            var o = a(n("J4zp"))
        },
        yEuy: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n("UmXO"),
                i = a(n("5TEd")),
                s = a(n("qp0C")),
                r = a(n("DxDJ")),
                l = (0, o.css)("border-radius:3px;cursor:pointer;font-family:", s.default.franklinBase, ";transition:ease 0.6s;&::-moz-focus-inner{padding:0;border:0;}&:-moz-focusring{outline:1px dotted;}&:disabled,&.disabled{opacity:0.5;cursor:default;}"),
                c = (0, o.css)(l, ";background-color:", i.default.blue30, ";border:1px solid ", i.default.blue20, ";color:", i.default.white, ";font-size:11px;font-weight:", s.default.weight.bold, ";letter-spacing:0.05em;line-height:11px;padding:8px 9px 6px;text-transform:uppercase;", r.default.medium, "{&:hover{background-color:", i.default.blue20, ";}}"),
                d = (0, o.css)(l, ";background-color:transparent;color:", i.default.black, ";font-size:11px;font-weight:", s.default.weight.bold, ";letter-spacing:0.02em;padding:7px 9px 9px;&:active,&.active{background-color:", i.default.gray90, ";}", r.default.medium, "{&:hover{background-color:", i.default.gray90, ";}}"),
                u = (0, o.css)(l, ";appearance:button;background-color:", i.default.white, ";border:1px solid ", i.default.gray70, ";color:", i.default.gray20, ";display:inline-block;font-size:11px;font-weight:", s.default.weight.medium, ";letter-spacing:0.02em;line-height:13px;margin:0;padding:8px 9px;text-transform:uppercase;vertical-align:middle;&:active,&.active{background-color:", i.default.gray90, ";}", r.default.medium, "{&:hover{background-color:", i.default.gray90, ";}}"),
                p = {
                    base: l,
                    action: c,
                    transparent: d,
                    secondary: (0, o.css)(l, ";appearance:button;background:", i.default.gray80, ";border:1px solid ", i.default.gray70, ";color:", i.default.black, ";display:inline-block;font-size:15px;font-weight:", s.default.weight.book, ";letter-spacing:0.02em;line-height:19px;margin:0;padding:10px 20px 12px;text-transform:none;vertical-align:middle;&:active,&.active{background:", i.default.gray70, ";border:1px solid ", i.default.gray50, ";}", r.default.medium, "{&:hover{background:", i.default.gray70, ";border:1px solid ", i.default.gray50, ";}}"),
                    default: u
                };
            t.default = p
        },
        yFJX: function(e, t, n) {
            "use strict";
            var a = n("TqRt");
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.boldClass = void 0;
            var o = n("UmXO"),
                i = a(n("3NoI")),
                s = a(n("wXC7")),
                r = (0, o.css)("font-weight:", s.default.font.weight.bold, ";");
            t.boldClass = r;
            var l = (0, i.default)("strong", {
                target: "ebyp5n10"
            })(r, ";");
            t.default = l
        },
        ypjf: function(e, t, n) {
            "use strict";
            n("HAE/"), n("WLL4"), n("jm62"), n("ioFf"), n("rGqo"), n("yt8O"), n("Btvt"), n("RW0V");
            var a = n("lSNA"),
                o = n.n(a),
                i = (n("f3/d"), n("Z2Ku"), n("L9s1"), n("JgE6")),
                s = n.n(i),
                r = n("wYzE"),
                l = n("i7V7");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {}))), n.push.apply(n, a)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(n, !0).forEach((function(t) {
                        o()(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {}))
                }
                return e
            }
            t.a = function() {
                window.addEventListener("load", (function() {
                    var e, t = null === (e = window.performance) || void 0 === e ? void 0 : e.timing;
                    if (t) {
                        var n, a, o = t.navigationStart;
                        Object(r.a)({
                            event: "performance",
                            pageview: {
                                performance: d({
                                    domInteractive: t.domInteractive - o,
                                    domContentLoaded: t.domContentLoadedEventEnd - o,
                                    requestStart: t.requestStart - o,
                                    responseStart: t.responseStart - o
                                }, (Object(l.a)() && window.performance.getEntriesByType("resource").forEach((function(e) {
                                    e.name.includes("vi-assets/static-assets/main-") ? n = !!e.transferSize : e.name.includes("vi-assets/static-assets/vendor-") && (a = !!e.transferSize)
                                })), void 0 !== n && void 0 !== a ? {
                                    mainScriptCached: n,
                                    vendorScriptCached: a
                                } : {}))
                            }
                        }, {
                            individualEvents: !0
                        }), window.perfMetrics && window.perfMetrics.onFirstInputDelay((function(e, t) {})), setTimeout((function() {
                            Object(r.a)({
                                event: "performance",
                                pageview: {
                                    performance: {
                                        pageLoadTime: t.loadEventEnd - o
                                    }
                                }
                            }, {
                                individualEvents: !0
                            })
                        }), 0)
                    }
                })), setTimeout((function() {
                    s.a.getFirstConsistentlyInteractive().then((function(e) {}))
                }), 0)
            }
        }
    },
    [
        [0, 44, 0]
    ]
]);
//# sourceMappingURL=main-c2910e327e1e6186c633.js.map