(window.QJP = window.QJP || []).push([
    [18], {
        "18Zd": function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 67, 272);
            var r = n("mOAx"),
                i = n("Sxd8");
            e.exports = function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 173, 262);
                return e && e.length ? r(e, i(t)) : void 0
            }
        },
        "3CTb": function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 290, 9298);
            "use strict";
            n.d(t, "b", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 360, 411);
                return R
            }), n.d(t, "a", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 426, 477);
                return L
            }), n.d(t, "d", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 492, 543);
                return w
            }), n.d(t, "c", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 558, 609);
                return D
            });
            var r, i, o, s, a, d, c, u, g = n("7RXM"),
                l = n("3Xx2"),
                h = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 718, 799);
                    return Object(l.d)(e, 1) || 0
                },
                _ = {
                    veryLarge: [h("xl"), 0],
                    large: [h("l"), 0],
                    medium: [h("m"), 0],
                    small: [h("s"), 0],
                    tiny: [h("xxs"), 300],
                    remaining: [0, 0]
                },
                E = {
                    ad81x31: [81, 31],
                    ad120x240: [120, 240],
                    ad120x600: [120, 600],
                    ad160x600: [160, 600],
                    ad180x150: [180, 150],
                    ad234x60: [234, 60],
                    ad250x250: [250, 250],
                    ad300x50: [300, 50],
                    ad300x100: [300, 100],
                    ad300x250: [300, 250],
                    ad336x280: [336, 280],
                    ad300x600: [300, 600],
                    ad320x50: [320, 50],
                    ad320x100: [320, 100],
                    ad468x60: [468, 60],
                    ad728x90: [728, 90]
                },
                f = {
                    ad300x200v: [300, 200],
                    ad300x600v: [300, 600],
                    ad400x300v: [400, 300],
                    ad480x270v: [480, 270],
                    ad640x360v: [640, 360],
                    ad640x480v: [640, 480]
                },
                p = [],
                m = ((r = {})[g.TYPE__SIDEBAR] = [E.ad160x600], r[g.TYPE__RECTANGLE] = [E.ad300x250], r[g.TYPE__MOBILE_RECTANGLE] = [E.ad320x50], r[g.TYPE__MOBILE_HORIZONTAL_STRIP] = [E.ad320x50], r[g.TYPE__BANNER] = [E.ad728x90], r),
                v = ((i = {})[g.TYPE__BANNER] = [f.ad480x270v], i[g.TYPE__RECTANGLE] = [f.ad400x300v], i[g.TYPE__SIDEBAR] = [f.ad300x600v], i[g.TYPE__VIDEO] = [f.ad400x300v], i),
                A = ((o = {})[g.NAME__SET_PAGE_EMBEDDED_VIDEO_AD] = [f.ad480x270v], o[g.NAME__SET_PREVIEW_VIDEO_AD] = [f.ad480x270v], o[g.NAME__SET_PREVIEW_VIDEO_AD_V2_CLOSE1] = [f.ad480x270v], o[g.NAME__SET_PREVIEW_VIDEO_AD_V2_CLOSE2] = [f.ad480x270v], o[g.NAME__SET_SIDEBAR_VIDEO] = [f.ad300x200v], o[g.NAME__WATCH_WALL_VIDEO] = [f.ad640x360v], o),
                b = ((s = {})[g.TYPE__RECTANGLE] = "/static/ad-video-400x300.mp4", s[g.TYPE__SIDEBAR] = "/static/ad-video-300x600.m4v", s),
                y = ((a = {})[g.NAME__SET_SIDEBAR_VIDEO] = "/static/ad-video-300x200.m4v", a),
                T = ((d = {})[g.TYPE__BANNER] = [
                    [_.medium, E.ad728x90],
                    [_.remaining, p]
                ], d[g.TYPE__RECTANGLE] = [
                    [_.medium, E.ad300x250],
                    [_.remaining, p]
                ], d[g.TYPE__SIDEBAR] = [
                    [_.medium, E.ad160x600],
                    [_.remaining, p]
                ], d[g.TYPE__MOBILE_HORIZONTAL_STRIP] = [
                    [_.medium, p],
                    [_.remaining, E.ad320x50]
                ], d[g.TYPE__MOBILE_RECTANGLE] = [
                    [_.medium, p],
                    [_.remaining, E.ad300x250]
                ], d),
                M = ((c = {})[g.TYPE__SIDEBAR] = [
                    [_.large, [E.ad120x600, E.ad160x600, E.ad250x250, E.ad300x250, E.ad300x600]],
                    [_.medium, [E.ad120x600, E.ad160x600]],
                    [_.remaining, p]
                ], c),
                S = [
                    [_.large, [E.ad250x250, E.ad300x250, E.ad120x600, E.ad160x600, E.ad300x600]],
                    [_.medium, [E.ad180x150, E.ad120x240, E.ad120x600, E.ad160x600]],
                    [_.remaining, p]
                ],
                O = [
                    [_.medium, p],
                    [_.small, [E.ad234x60, E.ad300x50, E.ad320x50, E.ad468x60]],
                    [_.remaining, [E.ad234x60, E.ad250x250, E.ad300x50, E.ad300x250, E.ad320x50]]
                ],
                I = [
                    [_.veryLarge, [E.ad300x100, E.ad320x100, E.ad468x60, E.ad728x90]],
                    [_.large, [E.ad300x50, E.ad300x100, E.ad320x100, E.ad468x60]],
                    [_.medium, [E.ad300x50, E.ad300x100, E.ad320x100, E.ad468x60]],
                    [_.remaining, p]
                ],
                x = ((u = {})[g.NAME__ASSISTANT_LEARN_SIDEBAR] = S, u[g.NAME__CREATE_SET_HEADER] = [
                    [_.veryLarge, [E.ad728x90, E.ad468x60, E.ad320x50, E.ad234x60]],
                    [_.large, [E.ad468x60, E.ad320x50, E.ad234x60]],
                    [_.medium, [E.ad320x50, E.ad234x60]],
                    [_.remaining, p]
                ], u[g.NAME__FOOTER_LI_13_16] = [
                    [_.medium, [E.ad728x90]],
                    [_.remaining, [E.ad320x50]]
                ], u[g.NAME__FOOTER_LI_17_PLUS] = [
                    [_.medium, [E.ad728x90]],
                    [_.remaining, [E.ad320x50]]
                ], u[g.NAME__FOOTER_LI_LESS_THAN_17] = [
                    [_.medium, [E.ad728x90]],
                    [_.remaining, [E.ad320x50]]
                ], u[g.NAME__FOOTER_LO] = [
                    [_.medium, [E.ad728x90]],
                    [_.remaining, [E.ad320x50]]
                ], u[g.NAME__HOMEPAGE_MWEB_EMBEDDED] = [
                    [_.large, p],
                    [_.medium, [E.ad320x50, E.ad234x60]],
                    [_.remaining, p]
                ], u[g.NAME__HOMEPAGE_MWEB_EMBEDDED_EXPERIMENT] = [
                    [_.large, p],
                    [_.medium, [E.ad320x50, E.ad234x60]],
                    [_.remaining, [E.ad320x50, E.ad234x60]]
                ], u[g.NAME__HOMEPAGE_MWEB_EMBEDDED_NO_EDGY] = [
                    [_.large, p],
                    [_.medium, [E.ad320x50, E.ad234x60]],
                    [_.remaining, [E.ad320x50, E.ad234x60]]
                ], u[g.NAME__HOMEPAGE_MWEB_EMBEDDED_EDGY] = [
                    [_.large, p],
                    [_.medium, [E.ad320x50, E.ad234x60]],
                    [_.remaining, [E.ad320x50, E.ad234x60]]
                ], u[g.NAME__LEARN_SIDEBAR] = S, u[g.NAME__SET_FOOTER_VIDEO] = [
                    [_.medium, [E.ad300x250, E.ad250x250]],
                    [_.remaining, p]
                ], u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_01] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_02] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_03] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_04] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_05] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_06] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_07] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_08] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_09] = O, u[g.NAME__SET_PAGE_EMBED_MWEB_MULTI_10] = O, u[g.NAME__SET_PAGE_EMBEDDED_VIDEO_AD] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_NTH_TEST_CONTROL] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_NTH_TEST_ONE_EACH_DESKTOP_VIDEO] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_01] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_02] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_03] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_04] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_05] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_06] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_07] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_08] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_09] = I, u[g.NAME__SET_PAGE_EMBED_DESKTOP_MULTI_10] = I, u[g.NAME__SET_SIDEBAR_REFRESH_TIME_30_EXPERIMENT] = S, u[g.NAME__SET_SIDEBAR_REFRESH_TIME_40_CONTROL] = S, u[g.NAME__SET_SIDEBAR_V4] = S, u[g.NAME__SET_SIDEBAR_V4_HARD_SIGNUP_WALL_CONTROL] = S, u[g.NAME__SET_SIDEBAR_V4_HARD_SIGNUP_WALL_VARIANT] = S, u[g.NAME__SET_SIDEBAR_V4_TEST_NO_VIDEO] = S, u[g.NAME__SET_SIDEBAR_VIDEO] = S, u[g.NAME__SPELL_MWEB_FOOTER] = [
                    [_.medium, p],
                    [_.small, [E.ad234x60, E.ad320x50, E.ad468x60]],
                    [_.remaining, [E.ad234x60, E.ad300x50]]
                ], u[g.NAME__SPELL_SIDEBAR] = S, u);

            function R(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 8580, 8637);
                return m[e]
            }

            function L(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 8651, 8894);
                return void 0 === t && (t = {
                    type: "",
                    isFlexible: !1
                }), t.isFlexible && x[e] ? x[e] : t.isFlexible && M[t.type] ? M[t.type] : T[t.type]
            }

            function w(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 8908, 9091);
                return void 0 === t && (t = {
                    type: ""
                }), A[e] ? A[e] : (n = t.type, v[n]);
                var n
            }

            function D(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 9105, 9288);
                return void 0 === t && (t = {
                    type: ""
                }), y[e] ? y[e] : (n = t.type, b[n]);
                var n
            }
        },
        "6JjY": function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 9316, 11031);
            "use strict";
            n.d(t, "a", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 9386, 9437);
                return h
            });
            var r = n("pVnL"),
                i = n.n(r),
                o = n("8OQS"),
                s = n.n(o),
                a = n("VbXa"),
                d = n.n(a),
                c = n("q1tI"),
                u = n.n(c),
                g = (n("Wr5T"), n("pxqK")),
                l = n.n(g),
                h = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 9768, 10871);
                    function t() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 9802, 10433);
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            isIntersecting: !1
                        }, t.handleChange = function(e, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 10113, 10408);
                            var r = e.isIntersecting;
                            r && t.props.once && n(), t.setState({
                                isIntersecting: r
                            }), t.props.onIntersect && r && t.props.onIntersect()
                        }, t
                    }
                    return d()(t, e), t.prototype.render = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 10493, 10850);
                        var e = this.props,
                            t = e.children,
                            n = s()(e, ["children"]);
                        return u.a.createElement(l.a, i()({}, n, {
                            onChange: this.handleChange
                        }), t(this.state.isIntersecting))
                    }, t
                }(u.a.PureComponent);
            h.defaultProps = {
                disabled: !1,
                once: !1,
                threshold: 0
            }
        },
        "7H+L": function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 11049, 12864);
            "use strict";
            t.__esModule = !0, t.observerElementsMap = void 0, t.getPooled = o, t.findObserverElement = s, t.callback = a, t.createObserver = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 11237, 11326);
                return o(e) || new IntersectionObserver(a, e)
            }, t.observeElement = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 11347, 11510);
                i.has(e.observer) || i.set(e.observer, new Set);
                i.get(e.observer).add(e), e.observer.observe(e.target)
            }, t.unobserveElement = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 11533, 11797);
                if (i.has(e.observer)) {
                    var t = i.get(e.observer);
                    t.delete(e) && (t.size > 0 ? e.observer.unobserve(e.target) : (e.observer.disconnect(), i.delete(e.observer)))
                }
            };
            var r = n("GKkb"),
                i = t.observerElementsMap = new Map;

            function o() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 11896, 12381);
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.root || null, n = (0, r.parseRootMargin)(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = i.keys(), a = void 0; a = s.next().value;) {
                    if (!(t !== a.root || n !== a.rootMargin || (0, r.shallowCompare)(o, a.thresholds))) return a
                }
                return null
            }

            function s(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 12395, 12651);
                var n = i.get(e);
                if (n)
                    for (var r = n.values(), o = void 0; o = r.next().value;)
                        if (o.target === t.target) return o;
                return null
            }

            function a(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 12665, 12854);
                for (var n = 0; n < e.length; n++) {
                    var r = s(t, e[n]);
                    r && r.handleChange(e[n])
                }
            }
        },
        Fl1y: function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 12880, 13012);
            e.exports = function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 12921, 13002);
                return null == e || e != e ? t : e
            }
        },
        GKkb: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 13028, 14364);
            "use strict";
            t.__esModule = !0, t.isDOMTypeElement = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 13126, 13233);
                return o.default.isValidElement(e) && "string" == typeof e.type
            }, t.parseRootMargin = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 13255, 13916);
                var t = (e ? e.trim() : "0px").split(/\s+/).map(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 13333, 13537);
                        if (!s.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
                        return e
                    }),
                    n = t[0],
                    r = void 0 === n ? "0px" : n,
                    i = t[1],
                    o = void 0 === i ? r : i,
                    a = t[2],
                    d = void 0 === a ? r : a,
                    c = t[3],
                    u = void 0 === c ? o : c;
                return r + " " + o + " " + d + " " + u
            }, t.shallowCompare = function e(t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 13937, 14175);
                if (Array.isArray(t) && Array.isArray(n) && t.length === n.length) return t.some(function(r, i) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 14053, 14128);
                    return e(t[i], n[i])
                });
                return t !== n
            };
            var r, i = n("q1tI"),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                };
            var s = /^-?\d*\.?\d+(px|%)$/
        },
        Lkcv: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 14380, 16211);
            "use strict";
            var r = n("8OQS"),
                i = n.n(r),
                o = n("q1tI"),
                s = n.n(o),
                a = n("x+ut"),
                d = n("6JjY"),
                c = n("WDAW"),
                u = n("3CTb"),
                g = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 14688, 16047);
                    var t = e.threshold,
                        n = e.showShimmer,
                        r = e.rootMarginBottom,
                        g = i()(e, ["threshold", "showShimmer", "rootMarginBottom"]),
                        l = Object(o.useState)({}),
                        h = l[0],
                        _ = l[1];
                    return Object(o.useEffect)(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 15087, 15591);
                        var e;
                        (e = g.id, Object(c.a)().then(function(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 15185, 15290);
                            return Object(u.b)(t.getAdType(e))[0]
                        })).then(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 15298, 15568);
                            var t = e[0],
                                n = e[1];
                            _({
                                height: t,
                                width: n
                            })
                        })
                    }, [g.id]), s.a.createElement(d.a, {
                        once: !0,
                        rootMargin: "0% 0% " + r + "%",
                        threshold: t
                    }, function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 15777, 16028);
                        return e ? s.a.createElement(a.a, g) : s.a.createElement("span", {
                            className: n ? "UIShimmer" : "",
                            style: h
                        })
                    })
                };
            g.defaultProps = {
                threshold: 0,
                showShimmer: !1,
                rootMarginBottom: 0
            }, t.a = g
        },
        Sxd8: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 16227, 16450);
            var r = n("ZCgT");
            e.exports = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 16302, 16440);
                var t = r(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        Wr5T: function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 16466, 29580);
            ! function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 16497, 29552);
                "use strict";
                if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 16860, 16952);
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var n = [];
                    i.prototype.THROTTLE_TIMEOUT = 100, i.prototype.POLL_INTERVAL = null, i.prototype.USE_MUTATION_OBSERVER = !0, i.prototype.observe = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 17180, 17769);
                        if (!this._observationTargets.some(function(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 17253, 17350);
                                return t.element == e
                            })) {
                            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: e,
                                entry: null
                            }), this._monitorIntersections(), this._checkForIntersections()
                        }
                    }, i.prototype.unobserve = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 17795, 18101);
                        this._observationTargets = this._observationTargets.filter(function(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 17892, 17981);
                            return t.element != e
                        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                    }, i.prototype.disconnect = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 18128, 18276);
                        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                    }, i.prototype.takeRecords = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 18304, 18458);
                        var e = this._queuedEntries.slice();
                        return this._queuedEntries = [], e
                    }, i.prototype._initThresholds = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 18490, 18901);
                        var t = e || [0];
                        return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 18624, 18878);
                            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return e !== n[t - 1]
                        })
                    }, i.prototype._parseRootMargin = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 18934, 19511);
                        var t = (e || "0px").split(/\s+/).map(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 19010, 19391);
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            }
                        });
                        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                    }, i.prototype._monitorIntersections = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 19549, 20251);
                        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }, i.prototype._unmonitorIntersections = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 20291, 20672);
                        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                    }, i.prototype._checkForIntersections = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 20711, 22195);
                        var t = this._rootIsInDom(),
                            n = t ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach(function(i) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 21175, 22094);
                            var o = i.element,
                                s = a(o),
                                d = this._rootContainsTarget(o),
                                c = i.entry,
                                u = t && d && this._computeTargetAndRootIntersection(o, n),
                                g = i.entry = new r({
                                    time: e.performance && performance.now && performance.now(),
                                    target: o,
                                    boundingClientRect: s,
                                    rootBounds: n,
                                    intersectionRect: u
                                });
                            c ? t && d ? this._hasCrossedThreshold(c, g) && this._queuedEntries.push(g) : c && c.isIntersecting && this._queuedEntries.push(g) : this._queuedEntries.push(g)
                        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }, i.prototype._computeTargetAndRootIntersection = function(n, r) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 22245, 23553);
                        if ("none" != e.getComputedStyle(n).display) {
                            for (var i, o, s, d, u, g, l, h, _ = a(n), E = c(n), f = !1; !f;) {
                                var p = null,
                                    m = 1 == E.nodeType ? e.getComputedStyle(E) : {};
                                if ("none" == m.display) return;
                                if (E == this.root || E == t ? (f = !0, p = r) : E != t.body && E != t.documentElement && "visible" != m.overflow && (p = a(E)), p && (i = p, o = _, s = void 0, d = void 0, u = void 0, g = void 0, l = void 0, h = void 0, s = Math.max(i.top, o.top), d = Math.min(i.bottom, o.bottom), u = Math.max(i.left, o.left), g = Math.min(i.right, o.right), h = d - s, !(_ = (l = g - u) >= 0 && h >= 0 && {
                                        top: s,
                                        bottom: d,
                                        left: u,
                                        right: g,
                                        width: l,
                                        height: h
                                    }))) break;
                                E = c(E)
                            }
                            return _
                        }
                    }, i.prototype._getRootRect = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 23582, 24357);
                        var e;
                        if (this.root) e = a(this.root);
                        else {
                            var n = t.documentElement,
                                r = t.body;
                            e = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(e)
                    }, i.prototype._expandRectByRootMargin = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 24397, 25021);
                        var t = this._rootMarginValues.map(function(t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 24470, 24627);
                                return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                            }),
                            n = {
                                top: e.top - t[0],
                                right: e.right + t[1],
                                bottom: e.bottom + t[2],
                                left: e.left - t[3]
                            };
                        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                    }, i.prototype._hasCrossedThreshold = function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 25058, 25553);
                        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                            r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (n !== r)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var o = this.thresholds[i];
                                if (o == n || o == r || o < n != o < r) return !0
                            }
                    }, i.prototype._rootIsInDom = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 25582, 25677);
                        return !this.root || d(t, this.root)
                    }, i.prototype._rootContainsTarget = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 25713, 25800);
                        return d(this.root || t, e)
                    }, i.prototype._registerInstance = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 25834, 25928);
                        n.indexOf(this) < 0 && n.push(this)
                    }, i.prototype._unregisterInstance = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 25964, 26074);
                        var e = n.indexOf(this); - 1 != e && n.splice(e, 1)
                    }, e.IntersectionObserver = i, e.IntersectionObserverEntry = r
                }

                function r(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 26171, 26971);
                    this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }, this.isIntersecting = !!e.intersectionRect;
                    var t = this.boundingClientRect,
                        n = t.width * t.height,
                        r = this.intersectionRect,
                        i = r.width * r.height;
                    this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function i(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 26989, 27927);
                    var n, r, i, o = t || {};
                    if ("function" != typeof e) throw new Error("callback must be a function");
                    if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 27382, 27547);
                        i || (i = setTimeout(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 27440, 27520);
                            n(), i = null
                        }, r))
                    }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 27815, 27898);
                        return e.value + e.unit
                    }).join(" ")
                }

                function o(e, t, n, r) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 27945, 28150);
                    "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
                }

                function s(e, t, n, r) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 28168, 28381);
                    "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
                }

                function a(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 28399, 29145);
                    var t;
                    try {
                        t = e.getBoundingClientRect()
                    } catch (n) {}
                    return t ? (t.width && t.height || (t = {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    }), t) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function d(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 29163, 29373);
                    for (var n = t; n;) {
                        if (n == e) return !0;
                        n = c(n)
                    }
                    return !1
                }

                function c(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 29391, 29538);
                    var t = e.parentNode;
                    return t && 11 == t.nodeType && t.host ? t.host : t
                }
            }(window, document)
        },
        ZCgT: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 29596, 29893);
            var r = n("tLB3"),
                i = 1 / 0,
                o = 1.7976931348623157e308;
            e.exports = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 29742, 29883);
                return e ? (e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * o : e == e ? e : 0 : 0 === e ? e : 0
            }
        },
        cLQH: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 29909, 35288);
            "use strict";
            t.__esModule = !0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 30074, 30141);
                    return typeof e
                } : function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 30144, 30311);
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 30333, 30847);
                    function e(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 30366, 30689);
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 30717, 30829);
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                o = c(n("q1tI")),
                s = n("i8i4"),
                a = (c(n("17x9")), c(n("QLaP")), c(n("2W6z")), n("7H+L")),
                d = n("GKkb");

            function c(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 31035, 31162);
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 31176, 31403);
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var g = ["root", "rootMargin", "threshold"],
                l = ["disabled"].concat(g),
                h = Object.prototype,
                _ = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 31563, 35190);
                    function t() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 31597, 32971);
                        var n, i;
                        ! function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 31672, 31822);
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var o = arguments.length, c = Array(o), g = 0; g < o; g++) c[g] = arguments[g];
                        return n = i = u(this, e.call.apply(e, [this].concat(c))), i.handleChange = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 32042, 32197);
                            i.props.onChange(e, i.unobserve), i.props.onlyOnce && e.isIntersecting && i.unobserve()
                        }, i.handleNode = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 32214, 32571);
                            var t = i.props.children.ref;
                            t && ("function" == typeof t ? t(e) : "object" === (void 0 === t ? "undefined" : r(t)) && (t.current = e)), i.targetChanged = null != (i.renderedTarget && e) && i.renderedTarget !== e, i.targetChanged && i.unobserve(), i.target = e
                        }, i.observe = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 32585, 32811);
                            i.target = (0, d.isDOMTypeElement)(i.target) ? i.target : (0, s.findDOMNode)(i.target), i.observer = (0, a.createObserver)(i.options), (0, a.observeElement)(i)
                        }, i.unobserve = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 32827, 32940);
                            null != i.target && (0, a.unobserveElement)(i)
                        }, u(i, n)
                    }
                    return function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 32999, 33630);
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), t.prototype.componentDidMount = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 33670, 33766);
                        this.props.disabled || this.observe()
                    }, t.prototype.componentDidUpdate = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 33801, 34154);
                        var t = this,
                            n = l.some(function(n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 33892, 34014);
                                return (0, d.shallowCompare)(t.props[n], e[n])
                            });
                        n && this.unobserve(), (this.targetChanged || n) && (this.props.disabled || this.observe())
                    }, t.prototype.componentWillUnmount = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 34191, 34266);
                        this.unobserve()
                    }, t.prototype.render = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 34289, 34536);
                        return this.renderedTarget = this.target, o.default.cloneElement(o.default.Children.only(this.props.children), {
                            ref: this.handleNode
                        })
                    }, i(t, [{
                        key: "options",
                        get: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 34615, 35145);
                            var e = this;
                            return g.reduce(function(t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 34714, 35114);
                                if (h.hasOwnProperty.call(e.props, n)) {
                                    var r = "root" === n && "[object String]" === h.toString.call(e.props[n]);
                                    t[n] = r ? document.querySelector(e.props[n]) : e.props[n]
                                }
                                return t
                            }, {})
                        }
                    }]), t
                }(o.default.Component);
            _.displayName = "IntersectionObserver", t.default = _
        },
        hy7Z: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 35304, 60320);
            "use strict";
            QWait("Quizlet.Common.i18n", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 35391, 60309);
                n.r(t);
                var e = n("q1tI"),
                    r = n.n(e),
                    i = n("18Zd"),
                    o = n.n(i),
                    s = n("Fl1y"),
                    a = n.n(s),
                    d = n("QjHk"),
                    c = n.n(d),
                    u = n("X0lI"),
                    g = n.n(u),
                    l = n("9WHe"),
                    h = n("zK28"),
                    _ = n("QR21"),
                    E = n("3XR0"),
                    f = n("dCi4");
                var p = n("7RXM"),
                    m = n("08um"),
                    v = n("3CTb"),
                    A = n("Ri2w"),
                    b = n("C6mj"),
                    y = new Set([138265244524]),
                    T = .001,
                    M = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 36216, 57563);
                        function e(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 36253, 39847);
                            var n = this;
                            this._handleMediaQueryChange = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 36373, 37098);
                                var t = /min-width:\s*(\d+)px/g.exec(e.media),
                                    r = parseInt(a()(o()(t, 1), ""), 10),
                                    i = /min-height:\s*(\d+)px/g.exec(e.media),
                                    s = parseInt(a()(o()(i, 1), ""), 10);
                                if (Number.isNaN(s) || Number.isNaN(r)) n.logError("Failed to parse resize media query change.");
                                else {
                                    var d = n.getResizeListenerForSize([r, s]);
                                    d && n.refreshAds(n._convertSetToArray(d.adsToRefresh))
                                }
                            }, this._convertSetToArray = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 37126, 37367);
                                var t = [];
                                return e.forEach(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 37233, 37333);
                                    return t.push(e)
                                }), t
                            }, this.handleSlotRenderEnded = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 37398, 37756);
                                var t = e.slot.getSlotElementId();
                                n.hideAdHeadingForEmptySlot(t, e.isEmpty, e.advertiserId, e.campaignId), e.isEmpty && n.callEmptyAdCallback(Object(m.c)(t)), y.has(e.creativeId) && window.addEventListener("message", n.handleSponsoredRewardsMessage)
                            }, this.handleSlotRequestLogging = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 37790, 37953);
                                n.logAdSlotEventIfPossible("ad_slot_requested", Object(m.c)(e.slot.getSlotElementId()))
                            }, this.handleSlotRenderEndedLogging = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 37991, 38361);
                                n.logAdSlotEventIfPossible("ad_slot_rendered", Object(m.c)(e.slot.getSlotElementId()), {
                                    advertiserId: e.advertiserId,
                                    isEmpty: e.isEmpty,
                                    size: e.size
                                })
                            }, this.handleImpressionViewableLogging = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 38402, 38575);
                                n.logAdSlotEventIfPossible("ad_slot_impression_viewable", Object(m.c)(e.slot.getSlotElementId()))
                            }, this.logAdSlotEventIfPossible = function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 38609, 39580);
                                Math.random() <= T && function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 38683, 39541);
                                    var r = {
                                        action: e,
                                        ad_unit: t,
                                        app_session_id: Object(E.b)(),
                                        page: window.location.href,
                                        viewport: [Object(f.b)(), Object(f.a)()]
                                    };
                                    n && Object.keys(n).forEach(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 39175, 39372);
                                        var t = n[e];
                                        r[e] = "string" == typeof t ? t : JSON.stringify(t)
                                    }), Object(_.a)("ads_events", r, {
                                        includeUserDetails: !0
                                    })
                                }(e, t, n)
                            }, this.config = t, this.googletag = e, this._slots = {}, this._resizeListeners = new Map, this._emptyAdsListeners = {}, this.apstag = this.hasRegisteredAdsWithHeaderBidding(this.config.registeredAds) ? this.setupHeaderBiddingLibrary() : null
                        }
                        var t = e.prototype;
                        return t.setupHeaderBiddingLibrary = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 39954, 41124);
                            var e = this,
                                t = window;
                            return t.apstag ? t.apstag : (t.apstag = {
                                init: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 40162, 40396);
                                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    t.apstag._Q.push(["i", n])
                                },
                                fetchBids: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 40441, 40675);
                                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                    t.apstag._Q.push(["f", n])
                                },
                                setDisplayBids: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 40725, 40738);},
                                targetingKeys: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 40787, 40879);
                                    return []
                                },
                                _Q: []
                            }, Object(b.b)() || QWait("Quizlet.apstag", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 40992, 41086);
                                e.apstag = t.apstag
                            }), t.apstag)
                        }, t.addUserScreenSizeToConfig = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 41156, 41327);
                            this.config.keyValues.sh = Object(f.a)().toString(), this.config.keyValues.sw = Object(f.b)().toString()
                        }, t.init = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 41338, 43105);
                            var e = this;
                            this.config.allAdsDisabled || (this.addUserScreenSizeToConfig(), this.googletag.cmd.push(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 41510, 42256);
                                e.googletag.pubads().setTagForChildDirectedTreatment(e.config.tagForChildDirectedTreatment), e.googletag.pubads().addEventListener("slotRenderEnded", e.handleSlotRenderEnded), e.config.shouldLogAdRequests && (e.googletag.pubads().addEventListener("slotRequested", e.handleSlotRequestLogging), e.googletag.pubads().addEventListener("slotRenderEnded", e.handleSlotRenderEndedLogging), e.googletag.pubads().addEventListener("impressionViewable", e.handleImpressionViewableLogging)), Object.keys(e.config.keyValues).forEach(function(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 42075, 42225);
                                    return e.googletag.pubads().setTargeting(t, e.config.keyValues[t])
                                })
                            }), Object.keys(this.config.registeredAds).forEach(function(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 42306, 42495);
                                var n = e.config.registeredAds[t];
                                n.type !== p.TYPE__VIDEO && e.defineSlot(t, n)
                            }), Object.keys(this.config.registeredAds).forEach(function(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 42545, 42723);
                                e.config.registeredAds[t].isServerRendered && e.registerOnEmptyAdCallback(t, e.collapseAdContainer(t))
                            }), this.googletag.cmd.push(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 42750, 43005);
                                e.apstag && e.googletag.pubads().disableInitialLoad(), e.googletag.pubads().enableSingleRequest(), e.googletag.enableServices(), e.apstag && (e.initHeaderBidding(), e.refreshAds())
                            }), window.addEventListener("message", this.handleSponsoredRewardsMessage))
                        }, t.collapseAdContainer = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 43131, 43380);
                            return function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 43180, 43354);
                                var t = document.getElementById(e);
                                t && (t.style.display = "none")
                            }
                        }, t.initHeaderBidding = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 43404, 43790);
                            g()(this.apstag, "Should have the apstag library to initialize the header bidding").init({
                                adServer: "googletag",
                                bidTimeout: 3e3,
                                pubID: "3742",
                                simplerGPT: !0
                            })
                        }, t.fetchBids = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 43806, 44852);
                            var t = this;
                            void 0 === e && (e = Object.keys(this.config.registeredAds));
                            var n = e.filter(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 43997, 44122);
                                return t.config.registeredAds[e].useHeaderBidding
                            }).map(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 44128, 44222);
                                return t._slots[e]
                            });
                            return new Promise(function(e, r) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 44272, 44825);
                                t.googletag.cmd.push(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 44342, 44794);
                                    g()(t.apstag, "Should have the apstag library to fetch bids").fetchBids({
                                        slots: n
                                    }, function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 44553, 44759);
                                        t.apstag ? (t.apstag.setDisplayBids(), e()) : r(new Error("Missing this.apstag after fetching bids in QAdManager"))
                                    })
                                })
                            })
                        }, t.defineSlot = function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 44869, 45287);
                            var n = this;
                            this._slots[e] = {}, this.googletag.cmd.push(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 45001, 45260);
                                n._slots[e] = n.googletag.defineSlot("/6396803/" + e, Object(v.b)(t.type), Object(m.a)(e)).defineSizeMapping(Object(v.a)(e, t)).setCollapseEmptyDiv(!0).addService(n.googletag.pubads())
                            })
                        }, t.displayAd = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 45303, 46028);
                            var t = this;
                            this.isShowing(e) ? (this.addResizeListenersForAd(e), this.googletag.cmd.push(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 45465, 45924);
                                var n = Object(m.a)(e);
                                if (document.getElementById(n)) try {
                                    t.googletag.display(n)
                                } catch (r) {
                                    t.logError("Ad display command failed", r)
                                } else t.logError("Ad container with id " + n + " does not exist on page")
                            })) : this.logError('Tried to display ad for non-existent ad slot "' + e + '"')
                        }, t.getResizeListenerForSize = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 46059, 46760);
                            var t = e[0],
                                n = e[1],
                                r = t + "x" + n;
                            if (!this._resizeListeners.has(r)) {
                                var i = this.getMatchMedia("(min-width: " + t + "px) and (min-height: " + n + "px)");
                                i.addListener(this._handleMediaQueryChange), this._resizeListeners.set(r, {
                                    mediaQuery: i,
                                    adsToRefresh: new Set
                                })
                            }
                            return this._resizeListeners.get(r)
                        }, t.addResizeListenersForAd = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 46790, 47220);
                            var t = this,
                                n = this.config.registeredAds[e];
                            (Object(v.a)(e, n) || []).forEach(function(n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 46974, 47193);
                                var r = n[0],
                                    i = t.getResizeListenerForSize(r);
                                i && i.adsToRefresh.add(e)
                            })
                        }, t.displayVideoAd = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 47241, 48116);
                            var t = window;
                            if (!t.jwplayer) return this.logError("Tried to call displayVideoAd before the JWPlayer lib has been loaded. Ensure you're calling getVideoPlayer() before it."), null;
                            if (!this.isRegistered(e)) return this.logError('Tried to display a video ad for a non-registered ad "' + e + '"'), null;
                            if (!this.supportsVideoAd(e)) return this.logError('Tried to display a video ad for the ad "' + e + '" which does not supports video ads'), null;
                            var n = this.isOutstream(e) ? this.getOutStreamVideoAdConfigObject(e) : this.getInStreamVideoAdConfigObject(e),
                                r = t.jwplayer(Object(m.g)(e));
                            return r && r.setup ? r.setup(n) : null
                        }, t.getAutoPlayAdsMuted = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 48142, 48317);
                            var t = this.config.registeredAds[e].autoPlayAdsMuted;
                            return void 0 === t || t
                        }, t.generateAdScheduleId = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 48344, 48717);
                            var t = 0,
                                n = e.length,
                                r = 0;
                            if (n > 0)
                                for (; r < n;) t = (t << 5) - t + e.charCodeAt(r++) | 0;
                            return t < 0 && (t *= -1), t.toString(10).slice(0, 8)
                        }, t.getBaseVideoAdConfigObject = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 48750, 49305);
                            var t = this.getVideoSize(e),
                                n = t[0];
                            return {
                                autostart: "viewable",
                                controls: !1,
                                height: t[1],
                                mute: this.getAutoPlayAdsMuted(e),
                                preload: "none",
                                volume: 100,
                                width: n
                            }
                        }, t.getOutStreamVideoAdConfigObject = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 49343, 49938);
                            var t = {
                                autoplayadsmuted: this.getAutoPlayAdsMuted(e),
                                client: "googima",
                                outstream: !0,
                                tag: this.getAssociatedVideoAdTag(e),
                                adscheduleid: this.generateAdScheduleId(e)
                            };
                            return Object.assign(this.getBaseVideoAdConfigObject(e), {
                                advertising: t
                            })
                        }, t.getInStreamVideoAdConfigObject = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 49975, 51023);
                            var t = {
                                    autoplayadsmuted: this.getAutoPlayAdsMuted(e),
                                    client: "googima"
                                },
                                n = [{
                                    file: this.getVideoPlaceholderFile(e),
                                    adschedule: {
                                        ad: {
                                            custParams: this.config.keyValues,
                                            offset: "pre",
                                            tag: this.getAssociatedVideoAdTag(e)
                                        }
                                    }
                                }];
                            return Object.assign(this.getBaseVideoAdConfigObject(e), {
                                advertising: t,
                                playlist: n,
                                repeat: !0
                            })
                        }, t.getAssociatedVideoAdTag = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 51053, 51160);
                            return this.config.registeredAds[e].tag
                        }, t.getVideoSize = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 51179, 51301);
                            return Object(v.d)(e, this.config.registeredAds[e])[0]
                        }, t.getVideoPlaceholderFile = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 51331, 51450);
                            return Object(v.c)(e, this.config.registeredAds[e])
                        }, t.refreshAds = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 51467, 52659);
                            var t = this;
                            void 0 === e && (e = Object.keys(this.config.registeredAds));
                            var n = e.filter(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 51658, 51792);
                                return t.getAdType(e) !== p.TYPE__VIDEO && !t.isShowing(e)
                            });
                            n.forEach(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 51833, 51979);
                                t.logError('Tried to refresh ad for non-existent ad slot "' + e + '"')
                            }), n.length !== e.length && this.prepareAdsForRefresh(e).then(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 52041, 52632);
                                t.googletag.cmd.push(function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 52107, 52601);
                                    var n = e.map(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 52170, 52280);
                                        return t._slots[e]
                                    });
                                    try {
                                        t.googletag.pubads().refresh(n)
                                    } catch (r) {
                                        t.logError("Ad refresh command failed", r)
                                    }
                                })
                            })
                        }, t.prepareAdsForRefresh = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 52686, 53267);
                            var t = this;
                            return new Promise(function(n, r) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 52789, 53240);
                                var i = e.filter(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 52855, 52988);
                                    return t.config.registeredAds[e].useHeaderBidding
                                });
                                i.length > 0 ? t.fetchBids(i).then(n).catch(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 53067, 53203);
                                    return r(new Error("Error when fetching bids " + e))
                                }) : n()
                            })
                        }, t.isOutstream = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 53285, 53402);
                            return !!this.config.registeredAds[e].isOutstream
                        }, t.isRegistered = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 53421, 53526);
                            return !!this.config.registeredAds[e]
                        }, t.isShowing = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 53542, 53633);
                            return !!this._slots[e]
                        }, t.supportsVideoAd = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 53655, 53774);
                            return !!this.config.registeredAds[e].supportsVideo
                        }, t.usesHeaderBidding = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 53798, 53920);
                            return !!this.config.registeredAds[e].useHeaderBidding
                        }, t.getAdType = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 53936, 54178);
                            if (this.isRegistered(e)) return this.config.registeredAds[e].type;
                            this.logError('Tried to get ad type for a non-registered ad slot "' + e + '"')
                        }, t.getMatchMedia = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 54198, 54279);
                            return c()(e)
                        }, t.getShowAdHeading = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 54302, 54537);
                            return this.isRegistered(e) ? !!this.config.registeredAds[e].showAdHeading : (this.logError('Tried to get showAdHeading for a non-registered ad slot "' + e + '"'), !1)
                        }, t.getAdHeadingContainer = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 54565, 54679);
                            return document.getElementById(Object(m.b)(e))
                        }, t.logError = function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 54694, 54782);
                            l.a.warning(e, t)
                        }, t.hideAdHeadingForEmptySlot = function(e, t, n, r) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 54814, 55230);
                            var i = this.getAdHeadingContainer(e);
                            if (i) {
                                var o = Object(m.c)(e),
                                    s = this.getShowAdHeading(o) && !t && 4623761902 !== n && 2548271416 !== r;
                                i.style.display = s ? "" : "none"
                            }
                        }, t.hasRegisteredAdsWithHeaderBidding = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 55270, 55632);
                            return (Object.values ? Object.values(e) : Object.getOwnPropertyNames(e).map(function(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 55389, 55476);
                                return e[t]
                            })).filter(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 55486, 55594);
                                return !0 === e.useHeaderBidding
                            }).length > 0
                        }, t.handleSponsoredRewardsMessage = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 55668, 56379);
                            if (e.origin && e.data && "spre" === e.data.message && e.data.sponsor)
                                if ("https://tpc.googlesyndication.com" === e.origin) {
                                    var t = h.a.setPageData && h.a.setPageData.set && h.a.setPageData.set.id;
                                    if (t) {
                                        var n = "/" + t + "/learn?spre=" + e.data.sponsor;
                                        window.location.href = n
                                    }
                                } else this.logError("Received postMessage for sponsored reward ad from unexpected origin " + e.origin)
                        }, t.registerOnEmptyAdCallback = function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 56411, 56544);
                            this.clearOnEmptyAdCallback(e), this._emptyAdsListeners[e] = t
                        }, t.clearOnEmptyAdCallback = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 56573, 56704);
                            this._emptyAdsListeners[e] && delete this._emptyAdsListeners[e]
                        }, t.callEmptyAdCallback = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 56730, 56856);
                            this._emptyAdsListeners[e] && this._emptyAdsListeners[e]()
                        }, t.getPageAdsDataForReport = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 56886, 57277);
                            var e = this;
                            return Object.keys(this._slots).reduce(function(t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 57008, 57246);
                                var r = e._slots[n] && e._slots[n].getResponseInformation && e._slots[n].getResponseInformation();
                                return t[n] || (t[n] = r), t
                            }, {})
                        }, t.sendAdsReport = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 57297, 57538);
                            var e = {
                                adsData: this.getPageAdsDataForReport()
                            };
                            Object(A.f)("/ads/ads-report", e)
                        }, e
                    }(),
                    S = n("T3U7"),
                    O = n("S0XM"),
                    I = n("WHvC"),
                    x = n("x+ut"),
                    R = n("VbXa"),
                    L = n.n(R),
                    w = n("Lkcv"),
                    D = n("6MTt"),
                    P = function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 57868, 58971);
                        function t(t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 57906, 58142);
                            var n;
                            return (n = e.call(this, t) || this).lazyLoadVariant = null, n.lazyLoadVariant = D.a.getVariationWithoutEnrolling("AdsLazyLoad"), n
                        }
                        return L()(t, e), t.prototype.render = function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 58206, 58946);
                            var e = this.props,
                                t = e.headingAlignment,
                                n = e.id,
                                i = e.upgradeSource;
                            if (!this.props.shouldShowAd) return !1;
                            var o = "variant" === this.lazyLoadVariant ? w.a : x.a;
                            return r.a.createElement("div", {
                                className: "SetPageFooterAd"
                            }, r.a.createElement(o, {
                                headingAlignment: t,
                                id: n,
                                upgradeSource: i
                            }))
                        }, t
                    }(r.a.Component);
                window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [];
                var N = new M(window.googletag, h.a.adConfig);
                N.init(), h.a.QAdManager = N, QLoad("Quizlet.Ads"), QWait("dom", function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 59242, 59919);
                    if (Object(b.b)()) {
                        Object(S.a)("adblocker_enabled");
                        for (var e = window.document.querySelectorAll(".AdHeading"), t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.parentNode && n.parentNode.removeChild(n)
                        }
                    }
                    h.a.setPageFooterAdData && Object(O.a)("SetPageFooterAd").then(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 59712, 59900);
                        var t = e.target,
                            n = e.data;
                        return Object(I.a)(r.a.createElement(P, n), t)
                    })
                }), Object.keys(h.a.adConfig.registeredAds).forEach(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 59970, 60294);
                    h.a.adConfig.registeredAds[e].isServerRendered && Object(O.a)("SiteAd" + e).then(function(e) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 60085, 60275);
                        var t = e.target,
                            n = e.data;
                        return Object(I.a)(r.a.createElement(x.a, n), t)
                    })
                })
            })
        },
        mOAx: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 60336, 60556);
            var r = n("wJg7");
            e.exports = function(e, t) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 60411, 60546);
                var n = e.length;
                if (n) return r(t += t < 0 ? n : 0, n) ? e[t] : void 0
            }
        },
        pxqK: function(e, t, n) {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 60572, 61226);
            "use strict";
            t.__esModule = !0;
            var r = n("cLQH");
            Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 60783, 60967);
                    return (e = r, e && e.__esModule ? e : {
                        default: e
                    }).default;
                    var e
                }
            });
            var i = n("GKkb");
            Object.defineProperty(t, "parseRootMargin", {
                enumerable: !0,
                get: function() {___jdce_logger("/a/j/dist/ads.78c2e60487ab89409a4c.a.js", 61126, 61201);
                    return i.parseRootMargin
                }
            })
        }
    },
    [
        ["hy7Z", 1, 2, 3, 0]
    ]
]);
//# sourceMappingURL=ads.78c2e60487ab89409a4c.a.js.map