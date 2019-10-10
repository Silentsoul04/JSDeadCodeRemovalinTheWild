(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "1iyJ": function(e, n, t) {
            "use strict";
            t.r(n);
            t("eDyd")
        },
        3: function(e, n, t) {
            e.exports = t("1iyJ")
        },
        eDyd: function(e, n) {
            ! function() {
                "use strict";

                function e(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                        i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = !(5 < arguments.length && void 0 !== arguments[5]) || arguments[5];
                    if (!e || 1 !== e.nodeType) return !1;
                    var d = e.getBoundingClientRect(),
                        s = d.top - n,
                        r = d.left,
                        l = d.bottom,
                        c = d.right,
                        u = window.innerHeight,
                        p = window.innerWidth;
                    return a ? 0 + o * i <= l && 0 + t * i <= c && s <= u - o * i && r <= p - t * i : 0 <= s && l <= u
                }

                function n(e) {
                    var n = window.location.href,
                        t = e.replace(/[[]]/g, "\\$&"),
                        o = new RegExp("[?&]".concat(t, "(=([^&#]*)|&|#|$)")).exec(n);
                    return o && o[2] ? decodeURIComponent(o[2].replace(/\+/g, "")) : ""
                }

                function t(e, n, t) {
                    var o = "".concat(e, "-").concat(n);
                    try {
                        performance.mark(o), performance.measure(e, t, o);
                        var i = performance.getEntriesByName(e).pop();
                        return i ? Math.round(i.duration) : 0
                    } catch (e) {
                        return 0
                    }
                }

                function o() {
                    var e = document.referrer || "",
                        n = /([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/;
                    return n.test(e) || n.test(window.location.href)
                }

                function i(e) {
                    var n = document.cookie.match(new RegExp("".concat(e, "=([^;]+)")));
                    return n ? n[1] : ""
                }
                var a = {
                    adConfigPosition: 1,
                    nonPersonalized: "n",
                    collapsed: "c"
                };

                function d() {
                    return i("nyt-purr")[a.adConfigPosition] || ""
                }(function() {
                    var s, r, l = window.AdSlot4 || {},
                        c = window.performance && window.performance.timing && performance.timing.responseStart,
                        u = {},
                        p = [],
                        g = !1,
                        f = !1,
                        v = !0,
                        m = !1,
                        w = !1,
                        h = d() === a.collapsed,
                        b = !1;
                    if (l.init) return l;

                    function y(e) {
                        e && c && e.setTargeting("request_time", (Date.now() - c).toString())
                    }

                    function A(e, n) {
                        window.googletag.cmd.push((function() {
                            y(n), window.googletag.display(e)
                        }))
                    }

                    function E(e) {
                        if (o() || e) l.events.publish({
                            name: "AdEmpty",
                            value: {
                                type: "AdsDisabled"
                            }
                        });
                        else {
                            var n, t, s, r, c = function() {
                                var e = window.googletag;
                                e ? e.cmd.push((function() {
                                    e._loadStarted_ ? (window.advBidxc && !window.advBidxc.isAdServerLoaded && (window.advBidxc.isAdServerLoaded = !0), "1" !== i("nyt-gdpr") && d() !== a.nonPersonalized || e.cmd.push((function() {
                                        e.pubads().setRequestNonPersonalizedAds(1)
                                    }))) : l.events.publish({
                                        name: "AdEmpty",
                                        value: {
                                            type: "AdBlockOn"
                                        }
                                    })
                                })) : l.events.publish({
                                    name: "AdEmpty",
                                    value: {
                                        type: "GptError"
                                    }
                                })
                            };
                            window.googletag && window.googletag.apiReady ? c() : ("https://securepubads.g.doubleclick.net/tag/js/gpt.js", n = c, t = function() {
                                l.events.publish({
                                    name: "AdEmpty",
                                    value: {
                                        type: "GptError"
                                    }
                                })
                            }, s = document.getElementsByTagName("head")[0], r = document.createElement("script"), n && (r.onload = n), t && (r.onerror = t), r.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js", r.async = !0, s.appendChild(r))
                        }
                    }

                    function S(e) {
                        var n, o, i, a = e.displayed,
                            d = e.id,
                            s = e.slot;
                        l.events.publish({
                            name: "AdCalled",
                            value: {
                                id: d,
                                timeCalled: t(d, "timeCalled", "responseStart")
                            },
                            scope: d
                        }), g && a ? (n = [s], o = f ? null : {
                            changeCorrelator: !1
                        }, (i = window.googletag).cmd.push((function() {
                            n && n.forEach((function(e) {
                                y(e)
                            })), n && o ? i.pubads().refresh(n, o) : n ? i.pubads().refresh(n) : o ? i.pubads().refresh(null, o) : i.pubads().refresh()
                        })), f = !1) : (A(d, s), u[d].displayed = !0)
                    }

                    function z() {
                        p = p.filter((function(n) {
                            var t = e(n.AdSlotElement, v ? l.props.offset : 0, 0, 0, 0, v);
                            return t && S(n), !t
                        }))
                    }

                    function k(e) {
                        var n = e.AdSlotElement,
                            t = {
                                root: null,
                                rootMargin: "".concat(l.props.offset, "px"),
                                threshold: 0
                            },
                            o = new IntersectionObserver((function(t, o) {
                                t[0].isIntersecting && (S(e), o.unobserve(n))
                            }), t);
                        return o.observe(n), o
                    }

                    function T() {
                        window.IntersectionObserver ? (m = !0, window.IntersectionObserver.prototype.POLL_INTERVAL = 1e3) : document.addEventListener("scroll", function(e) {
                            var n = this,
                                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1e3,
                                o = null;
                            return function() {
                                for (var i = arguments.length, a = new Array(i), d = 0; d < i; d++) a[d] = arguments[d];
                                null === o && (o = setTimeout((function() {
                                    e.apply(n, a), o = null
                                }), t))
                            }
                        }(z, 1e3))
                    }

                    function L(e) {
                        e.displayed || (m && (e.observer = k(e)), p.push(e)), u[e.id] = e
                    }

                    function C(e) {
                        if (e.data.exclusive && e.data.div) {
                            var n, t = e.data.div;
                            switch (e.data.type) {
                                case "only-child":
                                    (i = (o = {
                                        empty: (a = t, d = [], Object.keys(u).forEach((function(e) {
                                            a !== e && d.push(u[e])
                                        })), d)
                                    }) && o.empty || p).length && i.forEach((function(e) {
                                        e.observer && e.observer.unobserve(e.AdSlotElement), l.events.publish({
                                            name: "AdEmpty",
                                            value: {
                                                type: e.id
                                            },
                                            scope: e.id
                                        })
                                    })), p = [], h = !0;
                                    break;
                                case "family-plan":
                                    void 0 !== (n = u[t] && u[t].slot && (u[t].slot.getResponseInformation() || {}).lineItemId) && l.updateAdReq({
                                        adv: n,
                                        excl: "family"
                                    });
                                    break;
                                case "blank":
                                    l.events.publish({
                                        name: "AdEmpty",
                                        value: {
                                            type: t
                                        },
                                        scope: e.data.div
                                    })
                            }
                        }
                        var o, i, a, d
                    }
                    if (l.events = (s = {}, r = {}, {
                            publish: function e(n) {
                                var t = n.name,
                                    o = void 0 === t ? "" : t,
                                    i = n.value,
                                    a = void 0 === i ? {} : i,
                                    d = n.scope,
                                    l = void 0 === d ? "page" : d;
                                "all" !== l && e({
                                    name: o,
                                    value: a,
                                    scope: "all"
                                }), s[o] || (s[o] = {}), s[o][l] || (s[o][l] = []), s[o][l].push(a), r[o] && r[o][l] && r[o][l].forEach((function(e) {
                                    e(a)
                                }))
                            },
                            subscribe: function(e) {
                                var n = e.name,
                                    t = void 0 === n ? "" : n,
                                    o = e.callback,
                                    i = void 0 === o ? function() {} : o,
                                    a = e.scope,
                                    d = void 0 === a ? "page" : a;
                                r[t] || (r[t] = {}), r[t][d] || (r[t][d] = []);
                                var l = r[t][d].push(i) - 1;
                                return s[t] && s[t][d] && s[t][d].length && s[t][d].forEach((function(e) {
                                    i(e)
                                })), {
                                    remove: function() {
                                        return r[t][d].splice(l, 1)
                                    }
                                }
                            },
                            unsubscribeToAll: function(e) {
                                Object.keys(r).forEach((function(n) {
                                    r[n] && r[n][e] && delete r[n][e]
                                })), Object.keys(s).forEach((function(n) {
                                    s[n] && s[n][e] && delete s[n][e]
                                }))
                            }
                        }), l.initializeAd = function(n, i) {
                            if (l.props) {
                                var a = l.props,
                                    d = a.adTargeting,
                                    s = a.adUnitPath,
                                    r = a.sizeMapping,
                                    c = a.hideTopAd,
                                    u = a.isSocrates,
                                    p = i.id,
                                    g = i.position,
                                    f = i.sizeKey,
                                    m = i.lazyLoad,
                                    w = f || g,
                                    y = w in r ? r[w] : r.default;
                                if (("top" !== g || !c) && p && s && y && n && n.classList && !n.classList.contains("placed-ad"))
                                    if (d && d.gdprUser && d.noTracking || o() || u) l.events.publish({
                                        name: "AdEmpty",
                                        value: {
                                            type: "AdsDisabled"
                                        }
                                    });
                                    else if (h) l.events.publish({
                                    name: "AdEmpty",
                                    value: {
                                        type: p
                                    },
                                    scope: p
                                });
                                else {
                                    var E = window.googletag;
                                    E.cmd.push((function() {
                                        var o = E.defineSlot(s, [], p);
                                        if (o) {
                                            var i = E.sizeMapping();
                                            y.forEach((function(e) {
                                                i.addSize([e[0], 0], e[1])
                                            })), o.defineSizeMapping(i.build()), o.setTargeting("div", p), o.setTargeting("pos", g), o.setCollapseEmptyDiv(!0), o.addService(E.pubads());
                                            var a = {
                                                id: p,
                                                slot: o,
                                                AdSlotElement: n,
                                                sizes: y
                                            };
                                            if (l.events.publish({
                                                    name: "AdDefined",
                                                    value: {
                                                        id: p,
                                                        sizes: y,
                                                        timeDefined: t(p, "timeDefined", "responseStart")
                                                    },
                                                    scope: p
                                                }), b) return A(p, o), a.displayed = !0, void L(a);
                                            m && !e(n, 0, 0, 0, 0, v) || (l.events.publish({
                                                name: "AdCalled",
                                                value: {
                                                    id: p,
                                                    timeCalled: t(p, "timeCalled", "responseStart")
                                                },
                                                scope: p
                                            }), A(p, o), a.displayed = !0), L(a)
                                        }
                                    }))
                                }
                            } else l.events.subscribe({
                                name: "AdSlotReady",
                                callback: function() {
                                    return l.initializeAd(n, i)
                                }
                            })
                        }, l.fillPlacements = function() {
                            var e = document.querySelectorAll(".place-ad:not(.placed-ad)");
                            if (e)
                                for (var n = 0; n < e.length; n++) {
                                    var t = e[n],
                                        o = t.id,
                                        i = t.dataset,
                                        a = i.position,
                                        d = i.sizeKey,
                                        s = "false" !== i.lazyLoad;
                                    o && a && (l.initializeAd(t, {
                                        id: o,
                                        position: a,
                                        sizeKey: d,
                                        lazyLoad: s
                                    }), t.classList.add("placed-ad"))
                                }
                        }, l.updateAdReq = function(e, n) {
                            window.googletag.cmd.push((function() {
                                n && u[n] ? Object.keys(e).forEach((function(t) {
                                    u[n].slot.setTargeting(t, "".concat(e[t]))
                                })) : Object.keys(e).forEach((function(n) {
                                    window.googletag.pubads().setTargeting(n, "".concat(e[n]))
                                }))
                            }))
                        }, l.refreshAds = function() {
                            v = !(f = g = !0), p = [], m ? Object.keys(u).forEach((function(e) {
                                var n = u[e],
                                    t = n.observer,
                                    o = n.displayed,
                                    i = n.AdSlotElement;
                                p.push(n), o && (t && t.unobserve(i), n.observer = k(n))
                            })) : (Object.keys(u).forEach((function(e) {
                                p.push(u[e])
                            })), b ? p.forEach((function(e) {
                                S(e)
                            })) : z()), setTimeout((function() {
                                v = !0
                            }), 2e3)
                        }, l.init = function(e) {
                            var o = e || {},
                                a = o.adTargeting,
                                d = void 0 === a ? {} : a,
                                s = o.adUnitPath,
                                r = void 0 === s ? "" : s,
                                c = o.offset,
                                u = void 0 === c ? 400 : c,
                                p = o.haltDFP,
                                g = void 0 !== p && p,
                                f = o.lockdownAds,
                                v = void 0 !== f && f,
                                m = o.hideTopAd,
                                h = void 0 !== m && m,
                                y = o.sizeMapping,
                                A = void 0 === y ? {} : y,
                                S = o.lazyApi,
                                z = void 0 === S ? {} : S,
                                k = "s" === i("nyt-purr").substring(1, 2),
                                L = g || k;
                            if (!w) {
                                d.vp = window.matchMedia("(min-width: 1150px)").matches ? "large" : window.matchMedia("(min-width: 970px)").matches ? "medium" : "small", d.aid = i("nyt-a") || null;
                                var O = n("ad-keywords");
                                O && (d.adv = O);
                                var R = n("debugads");
                                R && (d.debugAdsQP = R), 1 === i("nyt-gdpr") && (d.gdprUser = !0), "out" === i("NYT-T").toLowerCase() && (d.noTracking = !0), l.props = {
                                    adTargeting: d,
                                    adUnitPath: r,
                                    offset: u,
                                    sizeMapping: A,
                                    hideTopAd: h,
                                    isSocrates: k,
                                    lazyApi: z
                                }, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((function() {
                                    var e, n, o, i = (e = d, n = window.googletag.pubads().getTargetingKeys(), Object.keys(e).filter((function(e) {
                                        return n.indexOf(e) < 0
                                    })).reduce((function(n, t) {
                                        return n[t] = e[t], n
                                    }), {}));
                                    Object.keys(i).forEach((function(e) {
                                        window.googletag.pubads().setTargeting(e, i[e])
                                    })), z.fetch && z.render ? (b = !0, o = z, window.googletag.cmd.push((function() {
                                        window.googletag.pubads().enableLazyLoad({
                                            fetchMarginPercent: o.fetch,
                                            renderMarginPercent: o.render
                                        }), window.googletag.enableServices()
                                    }))) : (window.googletag.enableServices(), T()), l.fillPlacements(), window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                                        var n = e.slot.getSlotElementId();
                                        e.timeRendered = t(n, "timeRendered", "".concat(n, "-timeCalled")), e.isEmpty ? l.events.publish({
                                            name: "AdEmpty",
                                            value: {
                                                type: n
                                            },
                                            scope: n
                                        }) : l.events.publish({
                                            name: "AdRendered",
                                            value: e,
                                            scope: n
                                        })
                                    })), window.googletag.pubads().addEventListener("slotOnload", (function(e) {
                                        var n = e.slot.getSlotElementId();
                                        e.timeLoaded = t(n, "timeLoaded", "".concat(n, "-timeCalled")), l.events.publish({
                                            name: "AdLoaded",
                                            value: e,
                                            scope: n
                                        })
                                    })), window.googletag.pubads().addEventListener("impressionViewable", (function(e) {
                                        var n = e.slot.getSlotElementId();
                                        e.timeViewed = t(n, "timeViewed", "".concat(n, "-timeCalled")), l.events.publish({
                                            name: "AdViewable",
                                            value: e,
                                            scope: n
                                        })
                                    }))
                                })), v ? window.googletag.cmd.push((function() {
                                    window.googletag.pubads().setForceSafeFrame(!0)
                                })) : window.addEventListener("message", (function(e) {
                                    (e.origin.match(/tpc\.googlesyndication\.com$/) || e.origin === window.location.origin) && C(e)
                                }), !1), E(L), l.events.publish({
                                    name: "AdSlotReady"
                                }), w = !0
                            }
                        }, l.cmd)
                        for (; l.cmd.length;) l.cmd.shift()();
                    l.cmd = {
                        length: 0,
                        push: function(e) {
                            e()
                        }
                    }, window.AdSlot4 = l
                })()
            }()
        }
    },
    [
        [3, 42]
    ]
]);
//# sourceMappingURL=adslot-7d0d39e65e55d4d7db21.js.map