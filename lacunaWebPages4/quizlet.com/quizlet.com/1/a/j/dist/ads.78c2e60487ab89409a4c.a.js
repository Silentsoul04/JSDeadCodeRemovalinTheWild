// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}
(window.QJP = window.QJP || []).push([
    [18], {
        "18Zd": function(e, t, n) {lacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[85:272]", functionData => eval(functionData))"/a/j/dist/ads.78c2e60487ab89409a4c.a.lacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[308:9298]", functionData => eval(functionData))("/a/j/dist/ads.78c2e60487ab89409a4c.alacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[9334:11031]", functionData => eval(functionData))ments[i];
                        retulacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[11067:12864]", functionData => eval(functionData))| i.set(e.observer, new Set);
   lacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[12895:13012]", functionData => eval(functionData)) {___jdce_logger("/a/j/dist/ads.78c2lacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[13046:14364]", functionData => eval(functionData))) {___jdce_logger("/a/j/dist/ads.78clacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[14398:16211]", functionData => eval(functionData))75);
                if (Array.isArrlacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[16245:16450]", functionData => eval(functionData))         });
                retulacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[16481:29580]", functionData => eval(functionData))           var n = e && e.isInterseclacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[29614:29893]", functionData => eval(functionData))his.thresholds[i];
                 lacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[29927:35288]", functionData => eval(functionData));
            e.exports = function(elacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[35322:60320]", functionData => eval(functionData))am: !0,
                            lacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[60354:60556]", functionData => eval(functionData))s.getBaseVideoAdConfigObject(e), {
 lacuna_lazy_load("/a/j/dist/ads.78c2e60487ab89409a4c.a.js[60590:61226]", functionData => eval(functionData))     ad: {
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