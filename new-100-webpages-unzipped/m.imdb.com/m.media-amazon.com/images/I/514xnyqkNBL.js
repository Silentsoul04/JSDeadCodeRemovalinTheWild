var Boomer = function(e) {
    function t(t) {
        for (var r, i, c = t[0], s = t[1], l = t[2], d = 0, m = []; d < c.length; d++) i = c[d], Object.prototype.hasOwnProperty.call(o, i) && o[i] && m.push(o[i][0]), o[i] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        for (u && u(t); m.length;) m.shift()();
        return a.push.apply(a, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== o[s] && (r = !1)
            }
            r && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var r = {},
        o = {
            main: 0
        },
        a = [];

    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "";
    var c = window.webpackJsonpBoomer = window.webpackJsonpBoomer || [],
        s = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var u = s;
    return a.push(["YwnsXFcWJA", "commons.core-js", "commons.IMDbPLAIDBundle", "commons.axios", "npm.readable-stream", "commons.react-transition-group", "plaid", "npm.whatwg-url", "commons.emotion", "commons.dom-helpers", "commons.prop-types", "npm.tr46", "npm.util", "npm.IMDbBoomer", "commons.react-dom", "commons.react-is", "commons.react", "commons.scheduler", "npm.string_decoder", "npm.webpack", "commons.classnames", "commons.is-buffer", "commons.is-what", "commons.memoize-one", "commons.merge-anything", "commons.object-assign", "commons.printf", "commons.regenerator-runtime", "commons.styled-components", "commons.stylis-rule-sheet", "commons.stylis", "npm.base64-js", "npm.buffer", "npm.core-util-is", "npm.debounce-promise", "npm.detect-node", "npm.events", "npm.ieee754", "npm.inherits", "npm.isarray", "npm.lodash.sortby", "npm.node-libs-browser", "npm.process-nextick-args", "npm.process", "npm.setimmediate", "npm.stream-browserify", "npm.timers-browserify", "npm.util-deprecate", "npm.webidl-conversions"]), n()
}({
    "./node_modules/IMDbWebpackConfigs/node_modules/IMDbWebpackCommons/node_modules/IMDbPLAIDBundle/node_modules/IMDbPLAIDIconComponent/react/icons sync recursive ^\\.\\/.*$": function(e, t, n) {
        var r = {
            "./add": "zELDdAepme",
            "./add.js": "zELDdAepme",
            "./arrow": "FYfKVsMCB8",
            "./arrow.js": "FYfKVsMCB8",
            "./checkbox-checked": "s1J26A8W8j",
            "./checkbox-checked.js": "s1J26A8W8j",
            "./checkbox-unchecked": "ewy5e8TvzZ",
            "./checkbox-unchecked.js": "ewy5e8TvzZ",
            "./chevron-left": "d60OCl6hfu",
            "./chevron-left.js": "d60OCl6hfu",
            "./chevron-right": "lbulfi8WOy",
            "./chevron-right.js": "lbulfi8WOy",
            "./clear": "VV86N5XkcK",
            "./clear.js": "VV86N5XkcK",
            "./contact-support": "3F3d8ymZGU",
            "./contact-support-inline": "fi7fNp+yPL",
            "./contact-support-inline.js": "fi7fNp+yPL",
            "./contact-support.js": "3F3d8ymZGU",
            "./dashboard": "w8GFiTEJBx",
            "./dashboard-inline": "UZKJEbJ0np",
            "./dashboard-inline.js": "UZKJEbJ0np",
            "./dashboard.js": "w8GFiTEJBx",
            "./delete": "jKS9zdTzSU",
            "./delete-forever": "ByCoCQUvP9",
            "./delete-forever.js": "ByCoCQUvP9",
            "./delete.js": "jKS9zdTzSU",
            "./done": "sfNSFqJsgG",
            "./done.js": "sfNSFqJsgG",
            "./edit": "RaxFaVMRkk",
            "./edit.js": "RaxFaVMRkk",
            "./email": "BjSnb9wduQ",
            "./email.js": "BjSnb9wduQ",
            "./expand-less": "qWKyg5IfnH",
            "./expand-less.js": "qWKyg5IfnH",
            "./expand-more": "DnfL1JSeZY",
            "./expand-more.js": "DnfL1JSeZY",
            "./facebook": "MltEB3/xXu",
            "./facebook.js": "MltEB3/xXu",
            "./flag": "4jE6f6Ke0/",
            "./flag.js": "4jE6f6Ke0/",
            "./help": "jKHI+cjINR",
            "./help.js": "jKHI+cjINR",
            "./instagram": "o+wmxh3jDf",
            "./instagram.js": "o+wmxh3jDf",
            "./launch": "/MCqHRuxPU",
            "./launch-inline": "aJAfCFDyg3",
            "./launch-inline.js": "aJAfCFDyg3",
            "./launch.js": "/MCqHRuxPU",
            "./link": "jcLEDS/UFg",
            "./link.js": "jcLEDS/UFg",
            "./list": "hxQl3VcQ01",
            "./list-inline": "CBwQz3KqxE",
            "./list-inline.js": "CBwQz3KqxE",
            "./list.js": "hxQl3VcQ01",
            "./magnify": "DTKe+ikHY7",
            "./magnify.js": "DTKe+ikHY7",
            "./menu": "8f95HyWypt",
            "./menu.js": "8f95HyWypt",
            "./more-horiz": "zErB3+31bu",
            "./more-horiz.js": "zErB3+31bu",
            "./more-vert": "Sbud5lpvzv",
            "./more-vert.js": "Sbud5lpvzv",
            "./movie": "MhHsEpntqy",
            "./movie.js": "MhHsEpntqy",
            "./people": "47dnxeN9nX",
            "./people.js": "47dnxeN9nX",
            "./person": "q93YX9MF05",
            "./person.js": "q93YX9MF05",
            "./play-arrow": "i+DwAP1kQq",
            "./play-arrow.js": "i+DwAP1kQq",
            "./play-circle-filled": "xLG+oTvLgP",
            "./play-circle-filled-inline": "Wvz/itQK5K",
            "./play-circle-filled-inline.js": "Wvz/itQK5K",
            "./play-circle-filled.js": "xLG+oTvLgP",
            "./play-circle-outline": "Oirf/Nrqs6",
            "./play-circle-outline-inline": "2+3JwNf/KF",
            "./play-circle-outline-inline.js": "2+3JwNf/KF",
            "./play-circle-outline.js": "Oirf/Nrqs6",
            "./radio-button-checked": "ob12FSrcN6",
            "./radio-button-checked.js": "ob12FSrcN6",
            "./radio-button-unchecked": "SgoH1eb8mW",
            "./radio-button-unchecked.js": "SgoH1eb8mW",
            "./search": "IL3HXCYUfe",
            "./search.js": "IL3HXCYUfe",
            "./share": "vbov43YDUC",
            "./share.js": "vbov43YDUC",
            "./star": "U5Ek/04cGU",
            "./star-border": "l+IxFWzzy2",
            "./star-border.js": "l+IxFWzzy2",
            "./star-circle-filled": "3evDbMsWmV",
            "./star-circle-filled.js": "3evDbMsWmV",
            "./star-inline": "IMGUEI5S+y",
            "./star-inline.js": "IMGUEI5S+y",
            "./star.js": "U5Ek/04cGU",
            "./television": "VGMbrBroof",
            "./television.js": "VGMbrBroof",
            "./thumb-down": "6lfAiTSpoY",
            "./thumb-down-filled": "s2nEAmleZU",
            "./thumb-down-filled.js": "s2nEAmleZU",
            "./thumb-down.js": "6lfAiTSpoY",
            "./thumb-up": "dpBbUfpQr/",
            "./thumb-up-filled": "pSd9kPuOWL",
            "./thumb-up-filled.js": "pSd9kPuOWL",
            "./thumb-up.js": "dpBbUfpQr/",
            "./ticket": "ieQIc/V/w8",
            "./ticket.js": "ieQIc/V/w8",
            "./twitch": "WPALmBfU3j",
            "./twitch.js": "WPALmBfU3j",
            "./twitter": "I+HsIZLvy3",
            "./twitter.js": "I+HsIZLvy3",
            "./user": "+2BVhicfdq",
            "./user.js": "+2BVhicfdq",
            "./videogame": "YQCVRmVbqI",
            "./videogame.js": "YQCVRmVbqI",
            "./youtube": "gBfdOVNXu6",
            "./youtube.js": "gBfdOVNXu6"
        };

        function o(e) {
            var t = a(e);
            return n(t)
        }

        function a(e) {
            if (!n.o(r, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            return r[e]
        }
        o.keys = function() {
            return Object.keys(r)
        }, o.resolve = a, e.exports = o, o.id = "./node_modules/IMDbWebpackConfigs/node_modules/IMDbWebpackCommons/node_modules/IMDbPLAIDBundle/node_modules/IMDbPLAIDIconComponent/react/icons sync recursive ^\\.\\/.*$"
    },
    "./src/Root.tsx": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("LDoPTt+kJa"),
            o = n("v4qZIvjYhw"),
            a = n("Kkip5aHMh7"),
            i = n.n(a),
            c = n("dm2zGFWhWR"),
            s = n("suAD6TRupR");
        var l = r.createContext({}),
            u = "imdb-header",
            d = "imdb-header--react",
            m = "imdb-header__logo-link",
            p = "imdb-header__search-form",
            f = "imdb-header__nav-drawer",
            h = "imdb-header__account-menu",
            b = "imdb-header__account-toggle",
            y = "imdb-header-drawer__imdbtv",
            v = "imdb-header__login-state-node",
            g = "nblogin",
            w = "nblogout",
            _ = "imdb-header-search__input",
            E = "imdb-header-search__state",
            j = "imdb-header__search-menu",
            x = "imdb-header-search__state-opener",
            k = "imdb-header-search__state-closer",
            I = "imdb-header__signin-text",
            O = "imdb-header__account-toggle--logged-in",
            S = "imdb-header-account-menu__sign-out",
            C = "imdbHeader-navDrawer",
            L = "imdbHeader-navDrawerOpen",
            N = "imdbHeader-searchOpen",
            P = "imdbHeader-searchClose",
            M = "suggestion-search";

        function R(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function D(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (s) {
                    o = !0, a = s
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var A = function(e, t) {
                var n = D(e.split("?"), 2),
                    r = n[0],
                    o = n[1],
                    a = o ? o.split("&").reduce(function(e, t) {
                        var n = D(t.split("=").map(decodeURIComponent), 2);
                        return function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    R(e, t, n[t])
                                })
                            }
                            return e
                        }({}, e, R({}, n[0], n[1]))
                    }, {}) : {};
                if (t && a.ref_ && "undefined" != typeof window && window.ueLogError) {
                    var i = new Error("URL created with 2 reftags, overriding existing reftag");
                    window.ueLogError(i, {
                        logLevel: "WARN",
                        attribution: "IMDbConsumerSiteNavFeature",
                        message: "url: ".concat(e, ", reftag1: ").concat(a.ref_, ", reftag2: ").concat(t)
                    })
                }
                return t && (a.ref_ = t), Object.entries(a).length > 0 ? r + "?" + Object.entries(a).map(function(e) {
                    var t = D(e, 2),
                        n = t[0],
                        r = t[1];
                    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(r))
                }).join("&") : r
            },
            T = Object(o.a)(function(e) {
                var t = r.useContext(l).logoAriaLabel;
                return r.createElement("a", {
                    className: i()(e.className, m),
                    id: "home_img_holder",
                    href: A("/", "m_nv_home"),
                    "aria-label": t
                }, r.createElement(c.Logo, {
                    id: "home_img"
                }))
            }).withConfig({
                componentId: "e02kni-0"
            })(["flex-shrink:0;display:flex;align-items:center;justify-content:center;user-select:none;padding-left:0.25rem;margin-right:auto;", "{order:0;padding-left:0;}"], s.mediaQueries.above.m),
            U = n("0pbUVNCJ6V"),
            q = n("s1DKtra4BZM");

        function B(e) {
            return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Q(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Y(e, t) {
            return !t || "object" !== B(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function W(e, t) {
            return (W = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var K = n("gbID9jK0u8"),
            V = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), Y(this, H(t).apply(this, arguments))
                }
                var n, o, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && W(e, t)
                }(t, r["PureComponent"]), n = t, (o = [{
                    key: "render",
                    value: function() {
                        return r.createElement(F, {
                            className: i()(K.searchMenu, j)
                        }, this.props.children)
                    }
                }]) && Q(n.prototype, o), a && Q(n, a), t
            }(),
            F = o.a.div.withConfig({
                componentId: "sc-1wv1epe-0"
            })(["width:100%;top:100%;position:absolute;", "{width:100%;}ul{margin:0;padding:0;list-style:none;li{display:inline;}}"], s.mediaQueries.above.m);

        function z(e) {
            return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function G() {
            return (G = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function J(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function X(e, t) {
            return !t || "object" !== z(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Z(e) {
            return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function $(e, t) {
            return ($ = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ee = n("/NiaVtcfUN"),
            te = function(e) {
                return r.createElement(ae, {
                    key: e.value,
                    className: e.className,
                    "data-testid": "search-result--const"
                }, r.createElement("div", {
                    className: "".concat(ee.constResult, "__image")
                }, r.createElement(c.PosterImage, {
                    imageModel: e.image,
                    imageType: e.type,
                    size: "50",
                    dynamicWidth: !0
                })), r.createElement(ie, null, r.createElement(ce, {
                    className: ee.constTitle
                }, e.label), r.createElement(ce, {
                    className: ee.searchMetadata
                }, e.year), r.createElement(ce, {
                    className: ee.searchMetadata
                }, e.subLabel)))
            },
            ne = function(e) {
                return r.createElement(ae, {
                    key: e.value,
                    className: e.className,
                    "data-testid": "search-result--video"
                }, r.createElement(c.Slate, {
                    dynamicWidth: !0
                }, r.createElement(c.Slate.Image, {
                    imageModel: e.image,
                    size: "s"
                }), r.createElement(c.Slate.Overlay, {
                    iconName: "play-circle-outline-inline",
                    text: e.subLabel
                })), r.createElement(ce, {
                    className: ee.videoTitle
                }, e.label))
            },
            re = function(e) {
                return r.createElement(ae, {
                    key: e.value,
                    className: e.className,
                    "data-testid": "search-result--link"
                }, e.label)
            },
            oe = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), X(this, Z(t).apply(this, arguments))
                }
                var n, o, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && $(e, t)
                }(t, r["PureComponent"]), n = t, (o = [{
                    key: "render",
                    value: function() {
                        var e = i()(this.props.isHighlighted ? "".concat(ee.searchResultActive) : "", ee.searchResult);
                        switch (this.props.template) {
                            case "const":
                                var t = i()(e, ee.constResult);
                                return r.createElement(te, G({}, this.props, {
                                    className: t
                                }));
                            case "video":
                                var n = i()(e, ee.videoResult);
                                return r.createElement(ne, G({}, this.props, {
                                    className: n
                                }));
                            case "search":
                                var o = i()(e, ee.seeAllResult);
                                return r.createElement(re, G({}, this.props, {
                                    className: o
                                }));
                            default:
                                return r.createElement(re, G({}, this.props, {
                                    className: e
                                }))
                        }
                    }
                }]) && J(n.prototype, o), a && J(n, a), t
            }(),
            ae = o.a.span.withConfig({
                componentId: "sc-1pmqwbq-0"
            })(["display:flex;cursor:pointer;text-decoration:none;width:100%;padding:.5rem;transition:all 0.125s;&.", "{border-top-width:1px;border-top-style:solid;}&.", "{width:50%;display:inline-flex;border-top:none;flex-wrap:wrap;}&.", "{border-top-width:1px;border-top-style:solid;}.", "__image{min-width:3rem;width:3rem;font-size:2rem;display:flex;}.", "{margin-top:.5rem;}"], ee.constResult, ee.videoResult, ee.seeAllResult, ee.constResult, ee.videoTitle),
            ie = o.a.div.withConfig({
                componentId: "sc-1pmqwbq-1"
            })(["display:flex;flex-grow:1;flex-direction:column;overflow:hidden;margin:0 0 0 1rem;padding:0;"]),
            ce = o.a.div.withConfig({
                componentId: "sc-1pmqwbq-2"
            })(["display:block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]),
            se = /[àÀáÁâÂãÃäÄåÅæÆçÇèÈéÉêÊëËìÍíÍîÎïÏðÐñÑòÒóÓôÔõÕöÖøØùÙúÚûÛüÜýÝÿþÞß]/,
            le = /[àÀáÁâÂãÃäÄåÅæÆ]/g,
            ue = /[èÈéÉêÊëË]/g,
            de = /[ìÍíÍîÎïÏ]/g,
            me = /[òÒóÓôÔõÕöÖøØ]/g,
            pe = /[ùÙúÚûÛüÜ]/g,
            fe = /[ýÝÿ]/g,
            he = /[çÇ]/g,
            be = /[ðÐ]/g,
            ye = /[ñÑ]/g,
            ve = /[þÞ]/g,
            ge = /[ß]/g;

        function we(e) {
            if (e) {
                var t = e.toLowerCase();
                return t.length > 20 && (t = t.substr(0, 20)), t = t.replace(/^\s*/, "").replace(/[ ]+/g, "_"), se.test(t) && (t = t.replace(le, "a").replace(ue, "e").replace(de, "i").replace(me, "o").replace(pe, "u").replace(fe, "y").replace(he, "c").replace(be, "d").replace(ye, "n").replace(ve, "t").replace(ge, "ss")), t = t.replace(/[\W]/g, "")
            }
            return ""
        }
        var _e = n("SKJnWpwCfs"),
            Ee = "nv_sr_srsg_",
            je = "/find?q=%s",
            xe = 'See all results for "%s"',
            ke = 2,
            Ie = 200,
            Oe = 200,
            Se = {
                video: "%s/videoplayer/%s"
            };

        function Ce(e, t) {
            var n = "";
            return e ? n = "name" : t && (n = "title"), n
        }

        function Le(e, t) {
            return !!(e && t && t.length <= e.length && e.substr(0, t.length) === t)
        }

        function Ne(e, t) {
            return "title" === e || "name" === e ? "/".concat(e, "/").concat(t) : t
        }

        function Pe(e, t, n) {
            if (e && e.id) {
                var r, o, a = n.refMarker,
                    i = function(e, t, n) {
                        var r;
                        if ("video" !== t && "gallery" !== t || !n.parentId) r = Ne(Ce(Le(e.id, "nm"), Le(e.id, "tt")), e.id);
                        else {
                            var o = Ne(Ce(Le(n.parentId, "nm"), Le(n.parentId, "tt")), n.parentId);
                            r = _e(Se[t], o, e.id)
                        }
                        return r
                    }(e, t, n),
                    c = {
                        label: e.l,
                        subLabel: e.s,
                        template: t,
                        type: e.q,
                        value: e.l,
                        url: A(i, a)
                    };
                return e.i && (c.image = (r = e.i, o = e.l, {
                    url: r.imageUrl,
                    maxHeight: r.height || Ie,
                    maxWidth: r.width || Oe,
                    caption: o
                })), e.y && (c.year = "".concat(e.y)), c
            }
        }

        function Me(e, t) {
            var n = [],
                r = 0;

            function o(e, t, o) {
                var a = Pe(e, t, {
                    refMarker: "".concat(Ee).concat(r),
                    parentId: o
                });
                a && (n.push(a), r++)
            }
            return e.forEach(function(e) {
                if (o(e, "const"), e.v && e.v.length > 0)
                    for (var t = 0; t < ke; t++) o(e.v[t], "video", e.id)
            }), o({
                l: _e(xe, t),
                id: _e(je, t)
            }, "search"), n
        }
        var Re = n("D3sd6C0zQR"),
            De = n("1YbNtRQMJ9"),
            Ae = n("DTyOy09aeN");

        function Te(e, t, n, r, o, a, i) {
            try {
                var c = e[a](i),
                    s = c.value
            } catch (l) {
                return void n(l)
            }
            c.done ? t(s) : Promise.resolve(s).then(r, o)
        }
        var Ue = n("SKJnWpwCfs"),
            qe = Ae(Re.proxyFetch, 500, {
                leading: !0
            });

        function Be(e, t, n) {
            var r = n.substr(0, 1);
            return e + "/" + Ue(t, "", r, n)
        }

        function Qe() {
            var e;
            return e = regeneratorRuntime.mark(function e(t, n) {
                var r, o, a, i, c, s;
                return regeneratorRuntime.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r = we(t), o = new De.URL(n.url), a = o.protocol, i = o.host, c = o.pathname, e.next = 4, qe({
                                host: "".concat(a, "//").concat(i),
                                path: Be(c, n.template, r),
                                method: "get",
                                headers: {}
                            });
                        case 4:
                            return s = e.sent, e.abrupt("return", Me(s.d, r));
                        case 6:
                        case "end":
                            return e.stop()
                    }
                }, e)
            }), (Qe = function() {
                var t = this,
                    n = arguments;
                return new Promise(function(r, o) {
                    var a = e.apply(t, n);

                    function i(e) {
                        Te(a, r, o, i, c, "next", e)
                    }

                    function c(e) {
                        Te(a, r, o, i, c, "throw", e)
                    }
                    i(void 0)
                })
            }).apply(this, arguments)
        }

        function Ye(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (s) {
                    o = !0, a = s
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var He, We = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(e) {
                    return e
                },
                o = Ye(Object(r.useState)(n(t)), 2),
                a = o[0],
                i = o[1],
                c = Object(r.useRef)(a),
                s = function() {
                    return c.current
                };
            return [a, function t(n) {
                return "function" == typeof n ? n(t, s) : (r = function(t) {
                    return e(s(), t)
                }(n), c.current = r, void i(r));
                var r
            }]
        };

        function Ke(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (s) {
                    o = !0, a = s
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }

        function Ve(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    Fe(e, t, n[t])
                })
            }
            return e
        }

        function Fe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }! function(e) {
            e.QUERY = "QUERY", e.QUERY_PENDING = "QUERY_PENDING", e.QUERY_RESOLVED = "QUERY_RESOLVED", e.QUERY_FAILED = "QUERY_FAILED", e.FOCUS = "FOCUS", e.DISMISS = "DISMISS"
        }(He || (He = {}));
        var ze = function(e) {
            var t = Ke(We(function(t, o) {
                    switch (o.type) {
                        case He.QUERY:
                            return t.results[o.query] ? (r({
                                type: He.QUERY_RESOLVED,
                                queryResults: t.results[o.query],
                                query: o.query
                            }), Ve({}, n, {
                                value: o.query
                            })) : (r({
                                type: He.QUERY_PENDING,
                                query: o.query
                            }), function(e, t) {
                                return Qe.apply(this, arguments)
                            }(o.query, e).then(function(e) {
                                r({
                                    type: He.QUERY_RESOLVED,
                                    queryResults: e,
                                    query: o.query
                                })
                            }).catch(function(e) {
                                r({
                                    type: He.QUERY_FAILED,
                                    error: e,
                                    query: o.query
                                })
                            }), Ve({}, t, {
                                value: o.query
                            }));
                        case He.QUERY_PENDING:
                            return Ve({}, t, {
                                loading: !0
                            });
                        case He.QUERY_RESOLVED:
                            return Ve({}, t, {
                                loading: !1,
                                error: void 0,
                                results: Ve({}, t.results, Fe({}, o.query, o.queryResults || []))
                            });
                        case He.QUERY_FAILED:
                            return Ve({}, t, {
                                loading: !1,
                                error: o.error
                            });
                        case He.FOCUS:
                            return Ve({}, t, {
                                focused: !0
                            });
                        case He.DISMISS:
                            return Ve({}, t, {
                                focused: !1
                            });
                        default:
                            throw new Error
                    }
                }, {
                    loading: !1,
                    results: {
                        "": []
                    },
                    value: "",
                    focused: !1
                }), 2),
                n = t[0],
                r = t[1];
            return {
                state: n,
                actions: {
                    focus: function() {
                        return r({
                            type: He.FOCUS
                        })
                    },
                    dismiss: function() {
                        return r({
                            type: He.DISMISS
                        })
                    },
                    query: function(e) {
                        return r({
                            type: He.QUERY,
                            query: e
                        })
                    }
                }
            }
        };

        function Ge(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Je() {
            return (Je = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function Xe(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (s) {
                    o = !0, a = s
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var Ze = n("WBLVqrdq96"),
            $e = Object(o.a)(function(e) {
                var t = r.useContext(l),
                    n = ze({
                        url: e.searchModel.searchEndpoint,
                        template: e.searchModel.queryTemplate
                    }),
                    o = n.state,
                    a = n.actions,
                    s = Xe(r.useState(""), 2),
                    u = s[0],
                    d = s[1],
                    m = o.results[o.value] || [],
                    p = o.value.length > 0 && o.focused;
                r.useEffect(function() {
                    if (!q) {
                        var e = document.getElementById(M);
                        e === window.document.activeElement && (a.focus(), e.value && d(e.value))
                    }
                }, []), r.useEffect(function() {
                    u && (a.query(u), d(void 0))
                }, [u]);
                var f = {
                    suggestions: m,
                    getSuggestionValue: function() {
                        return o.value
                    },
                    inputProps: {
                        value: u || o.value,
                        onChange: function(e, t) {
                            var n = t.newValue;
                            return a.query(n)
                        },
                        onBlur: function() {
                            return a.dismiss()
                        },
                        onFocus: function() {
                            return a.focus()
                        }
                    },
                    onSuggestionsFetchRequested: function() {},
                    onSuggestionsClearRequested: function() {},
                    onSuggestionSelected: function(e, t) {
                        q || (window.location = t.suggestion.url)
                    },
                    renderInputComponent: function(n) {
                        return r.createElement("input", Je({}, n, {
                            id: M,
                            name: e.searchModel.inputName,
                            type: "text",
                            className: i()(_, Ze.searchInput, n.className),
                            placeholder: t.searchPlaceholder,
                            autoCapitalize: "off",
                            autoCorrect: "off",
                            autoComplete: "off",
                            autoFocus: !0
                        }))
                    },
                    renderSuggestionsContainer: function(e) {
                        var t = e.containerProps,
                            n = e.children;
                        return p ? r.createElement(V, t, n) : null
                    },
                    renderSuggestion: function(e, t) {
                        return r.createElement(oe, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    Ge(e, t, n[t])
                                })
                            }
                            return e
                        }({}, e, {
                            isHighlighted: t.isHighlighted
                        }))
                    }
                };
                return r.createElement("div", {
                    className: e.className
                }, r.createElement(c.Autocomplete, f))
            }).withConfig({
                componentId: "sc-112a48v-0"
            })([""]),
            et = n("WBLVqrdq96"),
            tt = Object(o.a)(function(e) {
                var t = e.searchModel;
                return r.createElement("form", {
                    id: "nav-search-form",
                    name: "nav-search-form",
                    method: t.formMethod,
                    action: t.formAction,
                    className: i()(p, e.className),
                    role: "search"
                }, r.createElement($e, {
                    searchModel: e.searchModel,
                    className: "nav-search__search-input-container"
                }), r.createElement("button", {
                    id: "suggestion-search-button",
                    type: "submit",
                    className: i()("nav-search__search-submit", et.searchSubmitButton)
                }, r.createElement(c.Icon, {
                    name: "magnify"
                })), !!t.hiddenFields && t.hiddenFields.map(function(e) {
                    return r.createElement("input", {
                        type: "hidden",
                        name: e.name,
                        key: e.name,
                        value: e.val
                    })
                }))
            }).withConfig({
                componentId: "dxsip9-0"
            })(["display:flex;flex-grow:1;margin:0;padding:0;align-items:center;position:relative;.nav-search__search-input-container{position:relative;width:100%;padding-right:3.5rem;}.nav-search__search-submit{position:absolute;right:0;min-width:2rem;cursor:pointer;}.", "{background:transparent;flex-grow:1;outline:none;padding:1rem 1rem 1rem .75rem;width:100%;", "{padding:.5em 0 .5rem .75rem;}}"], _, s.mediaQueries.above.m),
            nt = n("vcgNORcxyG"),
            rt = "navSearch-searchState",
            ot = function(e) {
                if (U.PLAIDKeyPressLogic.isEscapeKey(e)) {
                    e.preventDefault();
                    var t = document.querySelector("#".concat(rt));
                    t && t.checked && t.click()
                }
            },
            at = function(e) {
                e.target.checked && document.forms["nav-search-form"].elements[M].focus()
            },
            it = function(e) {
                if (U.PLAIDKeyPressLogic.isEnterOrSpaceKey(e)) {
                    e.preventDefault();
                    var t = document.querySelector("#".concat(rt));
                    t && !t.checked && t.click()
                }
            },
            ct = o.a.span.withConfig({
                componentId: "sc-1nweg6x-0"
            })([".", "{", "{display:none;}}"], x, s.mediaQueries.above.m),
            st = o.a.input.withConfig({
                componentId: "sc-1nweg6x-1"
            })(["&:checked ~ .nav-search__search-container{align-items:center;border-radius:0;min-height:3.5rem;left:0;position:absolute;top:0;display:flex;width:100%;z-index:1;.nav-search__search-select,.nav-search__search-submit{display:none;}.", "{display:inline;position:absolute;right:0;top:0;margin:.25rem;}}"], k),
            lt = Object(o.a)(function(e) {
                var t = r.useContext(l);
                return r.createElement(r.Fragment, null, r.createElement(st, {
                    type: "checkbox",
                    className: i()(E, nt.mobileSearchStateToggle),
                    id: rt,
                    name: rt,
                    "aria-hidden": !0,
                    hidden: !0,
                    onChange: at
                }), r.createElement("div", {
                    id: "suggestion-search-container",
                    className: i()("nav-search__search-container", nt.searchContainer, e.className),
                    onKeyDown: ot
                }, r.createElement(tt, {
                    searchModel: e.searchModel
                }), r.createElement(c.IconButton, {
                    name: "clear",
                    className: k,
                    id: P,
                    target: rt
                })), r.createElement(ct, null, r.createElement(c.IconButton, {
                    className: x,
                    name: "magnify",
                    id: N,
                    label: t.searchOpenAriaLabel,
                    target: rt,
                    onKeyDown: it
                })))
            }).withConfig({
                componentId: "sc-1nweg6x-2"
            })(["", "{display:none;margin:0;}display:flex;flex-grow:1;margin:0 0.5rem;order:2;padding:0;min-height:2rem;.", ",.", ",.nav-search__search-submit{-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none;}.", ",.nav-search__search-submit{padding:0;}.", "{display:none;}"], s.mediaQueries.below.m, E, _, E, k),
            ut = n("0tmemdglNWH"),
            dt = n("CIEIQfYgVa"),
            mt = n("6x4cA63hLZ");

        function pt(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (s) {
                    o = !0, a = s
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var ft = n("iHORx/GQAd");
        var ht = o.a.aside.withConfig({
                componentId: "sc-1h7cs9y-0"
            })(["&.", "{bottom:0;display:flex;left:0;overflow:hidden;perspective:70vh;pointer-events:none;position:fixed;right:0;top:0;visibility:hidden;z-index:100;}& .", "{box-shadow:none;box-sizing:border-box;height:100%;overflow-x:hidden;overflow-y:scroll;position:relative;transform:translateX(calc(-100% - 36px));transform-origin:right center;transition:all 0.3s,box-shadow 0s;width:280px;z-index:2;-webkit-overflow-scroll:touch;scrollbar-width:none;-ms-overflow-style:none;&::-webkit-scrollbar{display:none;}}& .", "{box-sizing:border-box;display:block;height:100%;left:0;opacity:0;position:absolute;top:0;transition:opacity 0.3s;visibility:hidden;width:100%;will-change:opacity;z-index:1;}& .", "{align-items:center;box-sizing:border-box;display:flex;justify-content:flex-end;min-height:3.5rem;margin-bottom:0.5rem;padding:0.25rem;}& .", "{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;background:none;}.", ":checked ~ &.", "{pointer-events:auto;visibility:visible;& > .", "{transform:translateX(0);box-shadow:0px 11px 15px -7px rgba(var(--ipt-baseAlt-rgb),0.2),0px 24px 38px 3px rgba(var(--ipt-baseAlt-rgb),0.14),0px 9px 46px 8px rgba(var(--ipt-baseAlt-rgb),0.12);}& > .", "{opacity:0.5;visibility:visible;}}"], ft.drawer, ft.panel, ft.backdrop, ft.panelHeader, ft.panelHeaderClose, ft.checkboxState, ft.drawer, ft.panel, ft.backdrop),
            bt = function(e) {
                var t = e.className,
                    n = e.children,
                    o = e.stateId,
                    i = r.useContext(l),
                    s = pt(r.useState(!1), 2),
                    u = s[0],
                    d = s[1],
                    m = a(ft.drawer, t),
                    p = function() {
                        Object(mt.setElementCheckedState)(o, !1), d(!1)
                    };
                return r.useEffect(function() {
                    var e = Object(dt.triggerOnEscape)(document.body, p);
                    return function() {
                        e()
                    }
                }, []), r.useEffect(function() {
                    u ? document.body.classList.add(ft.bodyLocked) : document.body.classList.remove(ft.bodyLocked)
                }, [u]), r.createElement(r.Fragment, null, r.createElement("input", {
                    className: ft.checkboxState,
                    type: "checkbox",
                    name: o,
                    id: o,
                    onChange: function(e) {
                        var t = e.target;
                        return d(t.checked)
                    },
                    "aria-hidden": !0,
                    hidden: !0
                }), r.createElement(ht, {
                    className: a(m, f),
                    role: "presentation",
                    "data-testid": "drawer",
                    onKeyDown: function(e) {
                        return Object(ut.isEscapeKey)(e) && d(!1)
                    }
                }, r.createElement("div", {
                    className: ft.panel,
                    role: "presentation",
                    "aria-hidden": !u,
                    "data-testid": "panel"
                }, r.createElement("div", {
                    className: ft.panelHeader,
                    role: "presentation",
                    "data-testid": "panel-header"
                }, r.createElement(c.IconButton, {
                    name: "clear",
                    className: ft.panelHeaderClose,
                    label: i.menuCloseAriaLabel,
                    target: o,
                    onKeyDown: function(e) {
                        Object(ut.isEnterOrSpaceKey)(e) && (Object(mt.setElementCheckedState)(o, !1), d(!1), e.preventDefault())
                    }
                }, ">")), r.createElement("div", {
                    className: ft.panelContent,
                    role: "presentation",
                    "data-testid": "panel-content"
                }, n)), r.createElement("label", {
                    className: ft.backdrop,
                    "data-testid": "backdrop",
                    role: "button",
                    htmlFor: o,
                    tabIndex: 0,
                    "aria-hidden": !u,
                    "aria-label": i.menuCloseAriaLabel
                })))
            };

        function yt(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }

        function vt(e, t) {
            return t ? a(Object.keys(t).reduce(function(n, r) {
                return [].concat(yt(n), [t[r] ? e + r : null])
            }, []).filter(Boolean)) : ""
        }

        function gt(e) {
            return (gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function wt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _t(e, t) {
            return !t || "object" !== gt(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Et(e) {
            return (Et = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function jt(e, t) {
            return (jt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var xt = "nav-link",
            kt = function(e) {
                function t() {
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), _t(this, Et(t).apply(this, arguments))
                }
                var n, o, a;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && jt(e, t)
                }(t, r["PureComponent"]), n = t, (o = [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.postIcon,
                            o = e.link,
                            a = e.renderTitle,
                            s = e.rootNavElement,
                            l = e.hidden,
                            u = e.ariaLabel,
                            d = o.title,
                            m = o.breakpoints,
                            p = o.href,
                            f = o.ref,
                            h = A(p, f),
                            b = i()(xt, vt(xt + "--", m), t);
                        return r.createElement(c.ListItem, {
                            indentLevel: s ? 0 : 1,
                            className: b,
                            postIconName: n,
                            href: h.toString(),
                            tabIndex: l ? -1 : 0,
                            label: u
                        }, a ? a(d) : d)
                    }
                }]) && wt(n.prototype, o), a && wt(n, a), t
            }(),
            It = Object(o.a)(kt).withConfig({
                componentId: "sc-19k0khm-0"
            })([".ipc-icon{opacity:0.5;transition:opacity 0.2s;}&:hover{.ipc-icon{opacity:1;}}"]);

        function Ot(e) {
            return (Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function St(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Ct(e) {
            return (Ct = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Lt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Nt(e, t) {
            return (Nt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Pt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var Mt = n("SKJnWpwCfs"),
            Rt = n("uHvIjlCg64"),
            Dt = function(e) {
                function t(e) {
                    var n, r, o;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), r = this, o = Ct(t).call(this, e), n = !o || "object" !== Ot(o) && "function" != typeof o ? Lt(r) : o, Pt(Lt(n), "listRef", void 0), Pt(Lt(n), "stateRef", void 0), Pt(Lt(n), "updateHeight", function() {
                        var e = n.props.expanded ? n.listRef.getBoundingClientRect().height : 0;
                        n.setState({
                            height: e
                        })
                    }), Pt(Lt(n), "onClickCategory", function(e) {
                        n.props.expanded && (e.preventDefault(), n.stateRef.checked = !1, n.props.onToggleOff())
                    }), n.state = {
                        height: void 0
                    }, n
                }
                var n, o, i;
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && Nt(e, t)
                }(t, r["PureComponent"]), n = t, (o = [{
                    key: "componentDidMount",
                    value: function() {
                        this.updateHeight()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        !!e.expanded != !!this.props.expanded && this.updateHeight()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.category,
                            o = t.links,
                            i = t.className,
                            s = t.expanded,
                            l = t.onStateChange,
                            u = this.state.height,
                            d = "nav-link-categories-".concat(n.id),
                            m = this.context,
                            p = s ? m.navAccordionCollapseAriaLabelTemplate : m.navAccordionExpandAriaLabelTemplate,
                            f = Mt(p, n.title);
                        return r.createElement(At, {
                            className: a(Rt.root, i),
                            "data-testid": "nav-link-category",
                            role: "presentation"
                        }, r.createElement("input", {
                            className: Rt.state,
                            type: "radio",
                            name: "nav-categories-list",
                            onChange: function() {
                                return l(n.id)
                            },
                            id: d,
                            tabIndex: -1,
                            "data-category-id": n.id,
                            ref: function(t) {
                                return e.stateRef = t
                            },
                            hidden: !0,
                            "aria-hidden": !0
                        }), r.createElement("span", {
                            className: Rt.targetWrapper
                        }, r.createElement("label", {
                            role: "button",
                            "aria-label": f,
                            className: Rt.item,
                            tabIndex: 0,
                            htmlFor: d,
                            "data-testid": "category-expando",
                            onClick: this.onClickCategory,
                            onKeyDown: function(t) {
                                Object(ut.isEnterOrSpaceKey)(t) && (t.preventDefault(), e.stateRef.click(), e.onClickCategory(t))
                            }
                        }, !!n.icon && r.createElement("span", {
                            className: Rt.itemIcon
                        }, r.createElement(c.Icon, {
                            name: n.icon
                        })), r.createElement("span", {
                            className: Rt.itemTitle
                        }, n.title), r.createElement("span", {
                            className: Rt.itemChevron
                        }, r.createElement(c.Icon, {
                            name: "chevron-right"
                        }))), r.createElement("div", {
                            className: Rt.listContainer,
                            style: {
                                height: u
                            },
                            "aria-hidden": !s,
                            hidden: !s,
                            "aria-expanded": s,
                            "data-testid": "list-container"
                        }, r.createElement("div", {
                            className: Rt.listContainerInner,
                            ref: function(t) {
                                return e.listRef = t
                            },
                            role: "presentation"
                        }, r.createElement(c.List, {
                            className: Rt.list
                        }, o.map(function(e, t) {
                            return r.createElement(It, {
                                key: t,
                                link: e,
                                hidden: !s
                            })
                        }))))))
                    }
                }]) && St(n.prototype, o), i && St(n, i), t
            }();
        Pt(Dt, "contextType", l);
        var At = o.a.div.withConfig({
                componentId: "sc-1zvm8t-0"
            })([".", "{cursor:pointer;align-items:center;border-top:1px solid transparent;display:flex;justify-content:space-between;height:3rem;margin:0;padding:0 1rem;transition:color 0.1s ease-in,border-color 0.1s ease-in,opacity 0.12s ease-in;user-select:none;&:focus{outline:none;}}.", "{padding-right:0.75rem;}.", "{flex-grow:1;overflow:hidden;padding-right:0.75rem;text-overflow:ellipsis;white-space:nowrap;}.", "{transform:rotate(90deg);}.", ",.", "{opacity:0.5;transition:all 0.2s;}.", ":focus,.", ":hover{.", ",.", "{opacity:1;}}.", "{overflow:hidden;border-bottom:1px solid transparent;transition:border-color 0.1s ease-in,height 0.2s;}.", ":checked ~ span{.", "{.", "{opacity:1;}.", "{transform:rotate(-90deg);}}.", "{display:block;}}&:nth-of-type(1) .", "{border-top:none;}"], Rt.item, Rt.itemIcon, Rt.itemTitle, Rt.itemChevron, Rt.itemIcon, Rt.itemChevron, Rt.item, Rt.item, Rt.itemChevron, Rt.itemIcon, Rt.listContainer, Rt.state, Rt.item, Rt.itemIcon, Rt.itemChevron, Rt.listContainer, Rt.item),
            Tt = Dt;

        function Ut(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e
            }(e) || function(e, t) {
                var n = [],
                    r = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                } catch (s) {
                    o = !0, a = s
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (o) throw a
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var qt = n("hV/SOnwe3N"),
            Bt = o.a.div.withConfig({
                componentId: "sc-13vymju-0"
            })([".", "{list-style:none;margin:0.5rem 0;opacity:0.2;}.", "{margin-bottom:3rem;margin-top:1.5rem;padding:1rem;height:auto;}"], qt.divider, qt.proLink),
            Qt = o.a.div.withConfig({
                componentId: "sc-13vymju-1"
            })(["display:flex;flex-direction:column;justify-content:center;"]),
            Yt = function(e) {
                var t = e.links,
                    n = e.categories,
                    o = e.className,
                    i = e.proLink,
                    s = e.tvLink,
                    u = r.createRef(),
                    d = r.useContext(l),
                    m = Ut(r.useState(void 0), 2),
                    p = m[0],
                    f = m[1],
                    h = function(e) {
                        f(e)
                    };
                return r.useEffect(function() {
                    var e = Array.from(u.current.querySelectorAll('input[type="radio"]')).find(function(e) {
                        return e.checked
                    });
                    if (e) {
                        var t = e.getAttribute("data-category-id");
                        f(t || void 0)
                    }
                }, []), r.createElement(Bt, {
                    role: "presentation",
                    className: a(qt.root, o),
                    ref: u
                }, s && r.createElement(It, {
                    rootNavElement: !0,
                    link: s,
                    className: a(qt.tvLink, y),
                    renderTitle: function(e) {
                        return r.createElement(Qt, {
                            className: qt.logoNavLink
                        }, r.createElement(c.Logo, {
                            variation: "imdbtv"
                        }))
                    },
                    ariaLabel: d.imdbTVLinkAriaLabel,
                    postIcon: "chevron-right"
                }), r.createElement(c.ListDivider, {
                    className: qt.divider
                }), n.map(function(e) {
                    return r.createElement(Tt, {
                        expanded: e.id === p,
                        key: e.id,
                        category: e,
                        links: t.filter(function(t) {
                            var n = t.categoryId;
                            return e.id === n
                        }),
                        onStateChange: h,
                        onToggleOff: function() {
                            return f(void 0)
                        }
                    })
                }), i && r.createElement(It, {
                    className: qt.proLink,
                    rootNavElement: !0,
                    link: i,
                    renderTitle: function(e) {
                        return r.createElement(Qt, {
                            className: qt.logoNavLink
                        }, r.createElement(c.Logo, {
                            variation: "imdbpro"
                        }), e)
                    },
                    ariaLabel: d.imdbProLinkAriaLabel,
                    postIcon: "launch"
                }))
            },
            Ht = n("gkQjV/QGkY"),
            Wt = function(e) {
                var t = r.useContext(l);
                return r.createElement(r.Fragment, null, r.createElement(c.IconButton, {
                    name: "menu",
                    className: Ht.icon,
                    label: t.menuOpenAriaLabel,
                    target: C,
                    id: L,
                    "aria-haspopup": !0,
                    onKeyDown: function(e) {
                        return Object(ut.isEnterOrSpaceKey)(e) && void(document.getElementById(C).checked = !0)
                    }
                }), r.createElement(bt, {
                    stateId: C,
                    className: Ht.drawer
                }, r.createElement(Yt, {
                    tvLink: e.tvLink,
                    proLink: e.proLink,
                    categories: e.navLinkCategories,
                    links: e.navLinks
                })))
            },
            Kt = n("GTIQPqyZYi"),
            Vt = function(e) {
                var t = r.useContext(l);
                return r.useEffect(function() {
                    if (e.userMenu.account.isLoggedIn) {
                        var t = document.querySelector(".".concat(b)),
                            n = U.PLAIDKeyPress.triggerOnEnterOrSpace(t, e.keyToggleHandler),
                            r = U.PLAIDKeyPress.triggerOnEscape(document.body, e.dismissalHandler);
                        return document.addEventListener("mouseup", e.dismissalHandler),
                            function() {
                                document.removeEventListener("mouseup", e.dismissalHandler), n(), r()
                            }
                    }
                }, []), r.createElement("div", {
                    className: i()(Kt.userMenu, "navbar__user", e.className)
                }, !e.userMenu.account.isLoggedIn && !!e.userMenu.signInLink && r.createElement(c.TextButton, {
                    onColor: "accent1",
                    className: I,
                    href: e.userMenu.signInLink.href
                }, e.userMenu.signInLink.title), e.userMenu.account.isLoggedIn && r.createElement(r.Fragment, null, r.createElement("span", {
                    onMouseUp: function(e) {
                        e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
                    }
                }, r.createElement(c.IconButton, {
                    name: "user",
                    target: "navUserMenu",
                    className: i()("navbar__user-menu-toggle--mobile", O, b),
                    label: t.userMenuToggleAriaLabel,
                    onColor: "accent1"
                }), r.createElement(c.TextButton, {
                    className: i()(O, "navbar__user-menu-toggle--desktop", b),
                    target: "navUserMenu",
                    preIcon: "user",
                    "aria-haspopup": !0,
                    "aria-label": t.userMenuToggleAriaLabel,
                    onColor: "accent1"
                }, r.createElement("span", {
                    className: "navbar__user-menu-toggle__name"
                }, e.userMenu.account.userName))), r.createElement(c.Menu, {
                    menuID: "navUserMenu",
                    className: i()("navbar__user-menu", h, e.className),
                    alwaysRender: !0,
                    mode: "anchored",
                    isVisible: !1
                }, r.createElement(c.List, null, r.createElement(c.ListItem, {
                    disabled: !0,
                    className: "navbar__user-menu__username"
                }, e.userMenu.account.userName), r.createElement(c.ListDivider, {
                    className: "navbar__user-menu__username-divider"
                }), !!e.userMenu.userMenuLinks && e.userMenu.userMenuLinks.map(function(t) {
                    return r.createElement(c.ListItem, {
                        href: A(t.href, t.ref),
                        key: t.href,
                        className: t.href.indexOf(e.userMenu.account.logOutUrl) > 0 ? S : ""
                    }, t.title)
                })))))
            };
        Vt.defaultProps = {
            dismissalHandler: function(e) {
                var t = document.getElementById("navUserMenu");
                t && t.checked && (t.checked = !1)
            },
            keyToggleHandler: function(e) {
                e.preventDefault();
                var t = document.getElementById("navUserMenu");
                t && (t.checked = !t.checked)
            }
        };
        var Ft = Object(o.a)(Vt).withConfig({
                componentId: "sc-1poz515-0"
            })(["order:100;position:relative;.navbar__user-menu{top:100%;position:absolute;margin-top:.25rem;}.navbar__user-menu-toggle__name{margin-left:0.5rem;}", "{.navbar__user-menu-toggle--mobile{display:flex;visibility:visible;}.navbar__user-menu-toggle--desktop{display:none;visibility:hidden;}}", "{.navbar__user-menu-toggle--mobile{display:none;visibility:hidden;}.navbar__user-menu-toggle--desktop{display:flex;visibility:visible;}.navbar__user-menu__username-divider,.navbar__user-menu__username{display:none;}}"], s.mediaQueries.below.m, s.mediaQueries.above.m),
            zt = Object(o.a)(function(e) {
                return r.createElement("div", {
                    id: e.isLoggedIn ? w : g,
                    className: v
                })
            }).withConfig({
                componentId: "sc-1oajtws-0"
            })(["display:none;"]);
        n.d(t, "Nav", function() {
            return Jt
        });
        var Gt = n("e+ue+QwK9/");
        var Jt = function(e) {
            return r.createElement(c.SetPalette, {
                palette: "dark"
            }, r.createElement(l.Provider, {
                value: e.strings
            }, r.createElement(Xt, {
                className: i()(Gt.navbar, u, d)
            }, r.createElement(zt, {
                isLoggedIn: e.userMenu.account.isLoggedIn
            }), r.createElement(c.PageContentContainer, {
                className: "navbar__inner"
            }, r.createElement(Wt, e.nav), r.createElement(T, null), r.createElement(lt, {
                searchModel: e.search
            }), r.createElement(Ft, {
                userMenu: e.userMenu
            })))))
        };
        Jt.defaultProps = {};
        var Xt = o.a.nav.withConfig({
            componentId: "sc-7p0yen-0"
        })(["padding:0.25rem;margin:0;position:relative;z-index:1000;min-height:3.5rem;a{color:inherit};.navbar__inner{display:flex;align-items:center;justify-content:space-between;margin:0 auto;}", "{.ipc-button__icon--pre{margin:0;}}& label{margin-bottom:0;font-weight:inherit;}"], s.mediaQueries.below.m);
        t.default = Jt
    },
    "/NiaVtcfUN": function(e, t, n) {
        e.exports = {
            searchResult: "_3CzPBqlWRmSAoWxtvQQ5Eo",
            searchResultActive: "-Ua5c7m52ju7WmdBtOEnf",
            videoTitle: "_3Y2Rsr5ce7gB9vCd5oZ8Rg",
            constTitle: "_26kHO_8bFBduUIYADnVHFY",
            searchMetadata: "_1DoAqrviL4URifsx8tYz_V",
            linkResult: "_2TpQYyMxf6Rm95JztEm_yk",
            seeAllResult: "caC6sT2C83IhLkzYA6kMB",
            constResult: "_2xcsB5_XEiRCOYGbWQ05C9",
            videoResult: "_2VTfSadvr91wa2jULYtbX2"
        }
    },
    0: function(e, t) {},
    1: function(e, t) {},
    "6L68CuqbEu": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WINDOW_GLOBALS = {
            RAD_WIDGET_KEY: "RadWidget",
            REACT_FULL_PAGE_DATA: "__BoomerFullPageData__"
        }
    },
    GTIQPqyZYi: function(e, t, n) {
        e.exports = {
            userMenu: "_3x17Igk9XRXcaKrcG3_MXQ"
        }
    },
    WBLVqrdq96: function(e, t, n) {
        e.exports = {
            searchInput: "_3gDVKsXm3b_VAMhhSw1haV",
            searchSubmitButton: "_1-XI3_I8iwubPnQ1mmvW97"
        }
    },
    YwnsXFcWJA: function(e, t, n) {
        "use strict";
        var r = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n("L7jz84bByi"), n("Rfi5DMD6w3");
        var o = r(n("aOnikLW9Zo")),
            a = n("./src/Root.tsx").default;
        o.default(a, "IMDbConsumerSiteNavFeatureV1")
    },
    aOnikLW9Zo: function(e, t, n) {
        "use strict";
        var r = this && this.__importStar || function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(n("LDoPTt+kJa")),
            a = r(n("ofAIcnXr2/")),
            i = n("6L68CuqbEu"),
            c = n("bAYZnKx4MO");
        t.default = function(e, t) {
            (window[i.WINDOW_GLOBALS.RAD_WIDGET_KEY].getReactWidgetInstances(t) || []).forEach(function(n) {
                try {
                    var r = document.getElementById(n.id),
                        i = JSON.parse(n.props);
                    ((r.innerHTML || "").trim().length > 0 ? a.hydrate : a.render)(o.createElement(e, i), r)
                } catch (s) {
                    c.logToCSMOrThrow(new Error("Failed to bootstrap widget: " + t), n.id)
                }
            })
        }
    },
    bAYZnKx4MO: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.logToCSMOrThrow = function(e, t) {
            if (!window.ueLogError) throw e;
            window.ueLogError(e, {
                attribution: t
            })
        }
    },
    "e+ue+QwK9/": function(e, t, n) {
        e.exports = {
            navbar: "FHCtKBINjbqzCITNiccU0"
        }
    },
    gbID9jK0u8: function(e, t, n) {
        e.exports = {
            searchMenu: "_7slaS0NikSNpkLVY3A1sk"
        }
    },
    "gkQjV/QGkY": function(e, t, n) {
        e.exports = {
            root: "_1nYZd2B7IreG41Pj-RCDnb",
            icon: "jOOJQ0waXoTX6ZSthGtum",
            label: "_3agvn42aJpmi-lId674ZVe",
            drawer: "_32i38MKalFVUkNAqPm88ln"
        }
    },
    "hV/SOnwe3N": function(e, t, n) {
        e.exports = {
            root: "_3wpok4xkiX-9E61ruFL_RA",
            tvLink: "_1BC0pBnjYqz3wST1u3CwmG",
            divider: "_1cBEhLbHn9YeCkfPvo9USU",
            proLink: "_3xW8qYlqcCPv5fOHeXBer5",
            logoNavLink: "_33PK8nBHiT1fGjnfXwum3v"
        }
    },
    "iHORx/GQAd": function(e, t, n) {
        e.exports = {
            panel: "iRO9SK-8q3D8_287dhn28",
            backdrop: "_1iCYg55DI6ds7d3KVrdYBX",
            panelHeader: "_3rHHDKyPLOjL8tGKHWMRza",
            bodyLocked: "Bh8XO_Pd8J6PRkh7ZT-a",
            drawer: "_14--k36qjjvLW3hUWHDPb_",
            checkboxState: "_146x-LuQBSfM9yosRvjSGF",
            panelHeaderClose: "_2RzUkzyrsjx_BPIQ5uoj5s",
            panelContent: "_3bRJYEaOz1BKUQYqW6yb29"
        }
    },
    uHvIjlCg64: function(e, t, n) {
        e.exports = {
            root: "_2BpsDlqEMlo9unX-C84Nji",
            itemIcon: "_1tLXJMH37mh4UmvfVF8swF",
            itemTitle: "_2aunAih-uMfbdgTUIjnQMd",
            itemChevron: "_2BeDp2pKthfMnxArm4lS0T",
            listContainerInner: "_1IQgIe3JwGh2arzItRgYN3",
            list: "_1gB7giE3RrFWXvlzwjWk-q",
            targetWrapper: "_2Q0QZxgQqVpU0nQBqv1xlY",
            listContainer: "_1S9IOoNAVMPB2VikET3Lr2",
            state: "s6lVaL5MYgQM-fYJ9KWp7",
            item: "_2vjThdvAXrHx6CofJjm03w"
        }
    },
    vcgNORcxyG: function(e, t, n) {
        e.exports = {
            searchContainer: "_2cVsg1cgtNxl8NEGDHTPH6",
            mobileSearchStateToggle: "EL4bTiUhQdfIvyX_PMRVv",
            "nav-search__search-container": "_2-sWuOY7_FrMCR557-z9H_",
            searchSelect: "_3l1hVHEUIoeLbpxYHxio-j"
        }
    }
});