! function(e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    var t = {};
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, n.p = "", n(n.s = 16)
}({
    0: function(e, n, t) {
        "use strict";
        t(1), n.pbjs = window.pbjs || {}, n.pbjs.que = n.pbjs.que || [], n.prebidOptions = {
            showIndicators: !0
        }, n.browserHasWindowPerformance = function() {
            return void 0 !== window.performance && (void 0 !== window.performance.mark && (void 0 !== window.performance.measure && void 0 !== window.performance.getEntriesByName))
        }, n.hasPerformance = n.browserHasWindowPerformance(), n.debugAdUnits = function(e) {
            window.console.log(e)
        }, n.prebidLog = function() {
            n.PREBID_DEBUG && Function.prototype.apply.call(console.log, console, arguments)
        }, n.getRandomKey = function() {
            for (var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "", t = 64; t > 0; --t) n += e[Math.floor(Math.random() * e.length)];
            return n
        }, n.getParameterByName = function(e, n) {
            n || (n = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
            var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
                r = t.exec(n);
            return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
        }, n.Ads = n.Ads || {}, n.Ads.gptData = n.Ads.gptData || [], n.Ads.prebidWinners = n.Ads.prebidWinners || {}, n.Ads.prebidResponsesByBidder = n.Ads.prebidResponsesByBidder || {}, n.Ads.initAdServer = function(e) {
            n.pbjs.initAdserverSet || (n.hasPerformance && (window.performance.mark("prebid-time-end"), window.performance.measure("prebid-timeout", "prebid-time-start", "prebid-time-end")), function() {
                n.prebidLog("load main gpt script"), n.PREBID_DEBUG && n.hasPerformance && window.performance.mark("load-gpt-start");
                var e = document.createElement("script");
                e.async = !0, e.type = "text/javascript";
                var t = "https:" === document.location.protocol;
                e.src = (t ? "https:" : "http:") + "//securepubads.g.doubleclick.net/tag/js/gpt.js";
                var r = document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(e, r)
            }(), n.pbjs.initAdserverSet = !0)
        }, n.Ads.cleanAdUnits = function(e) {
            if (!n.VERIFY_ADS) return e;
            for (var t in e) e[t].hasOwnProperty("code") && !window.document.getElementById(e[t].code) && (n.prebidLog("Cannot find ad unit " + e[t].code), n.prebidLog("Deleted ad unit " + e[t].code + " from adUnits object"), e[t].bids = []);
            return e
        }, n.Ads.getFinalAdjustment = function(e, t, r) {
            if (n.FORCE_CPM && t) return n.FORCE_CPM;
            r = r || 1;
            var i = 1,
                o = 1,
                a = 0;
            window.bizxPrebid.adjustments.hasOwnProperty("floor") && (a = Number(window.bizxPrebid.adjustments.floor)), window.bizxPrebid.adjustments.bidder_deflations.hasOwnProperty(e) && (i = Number(bizxPrebid.adjustments.bidder_deflations[e])), window.bizxPrebid.adjustments.hasOwnProperty("inflation") && (o = Number(bizxPrebid.adjustments.inflation));
            var s = t * r * i;
            if (s < a) return n.prebidLog(e + " was below the floor value of " + a), 0;
            var c = s * o;
            return n.prebidLog(e + " CPM adjusted for cpm: " + t + " * base: " + r + " * deflation: " + i + " * inflation: " + o + " = " + c), c
        }, n.getPushOrder = function(e) {
            var n = {};
            for (var t in e)
                if (void 0 !== e[t].bids) {
                    void 0 === n[e[t].tag] && (n[e[t].tag] = {});
                    for (var r in e[t].bids) {
                        var i = e[t].bids[r];
                        n[e[t].tag][i.bidder] = parseInt(r) + 1
                    }
                }
            return n
        }, n.Ads.initPrebid = function(e) {
            if (e = n.Ads.cleanAdUnits(e), window.bizxPrebid.pushOrder = n.getPushOrder(e), n.pbjs.que.push(function() {
                    n.prebidLog("pbjs set config"), n.pbjs.setConfig({
                        priceGranularity: "high",
                        bidderSequence: "random",
                        consentManagement: {
                            allowAuctionWithoutConsent: !0
                        },
                        rubicon: {
                            singleRequest: !0
                        }
                    }), window.bizxPrebid.prebidOptions.pbjsConfig && n.pbjs.setConfig(window.bizxPrebid.prebidOptions.pbjsConfig)
                }), n.pbjs.que.push(function() {
                    n.pbjs.onEvent("bidRequested", function(e) {
                        if (n.hasPerformance)
                            for (var t = 0; t < e.bids.length; t++) {
                                var r = e.bids[t];
                                window.performance.mark(r.bidder + "-" + r.adUnitCode + "-start")
                            }
                    }), n.pbjs.onEvent("bidResponse", function(e) {
                        if (n.PREBID_TIMEOUTS_BY_BIDS)
                            if (e.bidder in n.Ads.prebidResponsesByBidder) n.Ads.prebidResponsesByBidder[e.bidder]++;
                            else if (n.Ads.prebidResponsesByBidder[e.bidder] = 1, !n.pbjs.initAdserverSet) {
                            var t = window.performance && window.performance.now ? window.performance.now() : window.Date.now(),
                                r = t - n.Ads.bids_requested_starttime;
                            n.Ads.checkBidTimeouts(r)
                        }
                        var i = e.bidder + "-" + e.adUnitCode;
                        n.hasPerformance && (window.performance.mark(i + "-end"), window.performance.measure(i, i + "-start", i + "-end"), window.performance.getEntriesByName("prebid-closed-start").length > 0 && (window.performance.mark("prebid-closed-end-" + e.adId), window.performance.measure("after-close-" + e.adId, "prebid-closed-start", "prebid-closed-end-" + e.adId)))
                    }), n.pbjs.onEvent("bidWon", function(e) {
                        var t = e.adUnitCode;
                        n.Ads.prebidWinners[t] = e, n.prebidLog("bidWon:", t, e.adId, e), n.prebidOptions.showIndicators && n.PREBID_DEBUG && n.bidWonIndicator(e)
                    }), n.pbjs.bidderSettings = {
                        brealtime: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("brealtime", e, .9)
                            }
                        },
                        emxdigital: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("emxdigital", e, .9)
                            }
                        },
                        emx_digital: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("emx_digital", e, .9)
                            }
                        },
                        rubicon: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("rubicon", e, .825)
                            }
                        },
                        sovrn: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("sovrn", e, 1)
                            }
                        },
                        aol: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("aol", e, .8)
                            }
                        },
                        pulsepoint: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("pulsepoint", e, 1)
                            }
                        },
                        appnexus: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("appnexus", e, 1)
                            }
                        },
                        indexExchange: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("indexexchange", e, 1)
                            }
                        },
                        rhythmone: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("rhythmone", e, 1)
                            }
                        },
                        oftmedia: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("oftmedia", e, 1)
                            }
                        },
                        onefiftytwo: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("onefiftytwo", e, 1)
                            }
                        },
                        districtmDMX: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("districtmdmx", e, 1)
                            }
                        },
                        districtm: {
                            bidCpmAdjustment: function(e) {
                                return n.Ads.getFinalAdjustment("districtm", e, .9)
                            }
                        }
                    }, n.prebidLog("pbjs units pushed"), n.pbjs.addAdUnits(e), n.hasPerformance && (n.bidsRequestTimestamp = performance.now()), n.pbjs.requestBids({
                        bidsBackHandler: function() {
                            n.prebidLog("bidsbackhandler calling initAdServer"), n.Ads.initAdServer("bidsBackHandler")
                        }
                    })
                }), n.hasPerformance) {
                window.performance.mark("prebid-time-start");
                try {
                    window.performance.measure("page fetch", "fetchStart", "responseEnd"), window.performance.measure("page parsing until prebid init", "responseEnd", "prebid-time-start")
                } catch (e) {
                    console.warn(e)
                }
            }
            n.Ads.bids_requested_starttime = window.performance && window.performance.now ? window.performance.now() : window.Date.now(), n.PREBID_TIMEOUTS_BY_BIDS ? Object.keys(n.PREBID_TIMEOUTS_BY_BIDS).forEach(function(e) {
                e = parseInt(e, 10), setTimeout(function() {
                    var t = window.performance && window.performance.now ? window.performance.now() : window.Date.now(),
                        r = t - n.Ads.bids_requested_starttime;
                    n.prebidLog("prebid timeout " + e + "ms reached (has actually been " + r + "ms)"), n.Ads.checkBidTimeouts(e)
                }, e)
            }) : setTimeout(function() {
                n.prebidLog("prebid timeout reached"), n.Ads.initAdServer()
            }, n.PREBID_TIMEOUT)
        }, n.Ads.checkBidTimeouts = function(e) {
            var t = Object.keys(n.Ads.prebidResponsesByBidder).length;
            Object.keys(n.PREBID_TIMEOUTS_BY_BIDS).forEach(function(r) {
                if (r = parseInt(r, 10), e >= r) {
                    var i = n.PREBID_TIMEOUTS_BY_BIDS[r];
                    n.prebidLog(t + "/" + i + " required bidders received at " + e + "ms for " + r + "ms threshold"), t >= i && n.Ads.initAdServer()
                }
            })
        }, n.Ads.debugPrebidResults = function() {
            if (n.PREBID_DEBUG) {
                var e = n.pbjs.getBidResponses(),
                    t = n.pbjs.adUnits,
                    r = [];
                for (var i in e)
                    if (e.hasOwnProperty(i) && e[i].hasOwnProperty("bids"))
                        for (var o = e[i].bids, a = 0; a < o.length; a++) {
                            var s = "";
                            for (var c in t)
                                if (t[c].code == i) {
                                    s = t[c].tag;
                                    break
                                }
                            var d = o[a],
                                u = d.adUnitCode;
                            r.push({
                                position: u,
                                adunit: i,
                                dfpUnit: s,
                                adId: d.adId,
                                bidder: d.bidder,
                                time: d.timeToRespond,
                                cpm: d.cpm,
                                msg: d.statusMessage
                            })
                        }
                if (r.length)
                    if (window.console.table) window.console.table(r);
                    else
                        for (var f = 0; f < r.length; f++) window.console.log(r[f]);
                else window.console.warn("NO prebid responses");
                window.console.table && window.console.table(n.Ads.prebidWinners)
            }
        }, n.bidWonIndicator = function(e) {
            var n = window.$ || jQuery,
                t = e.adUnitCode,
                r = n("#" + t),
                i = '<div class="bid-summary" style="position: absolute;height:100%;width:100%;background:rgba(255, 255, 255, 0.9);padding:10px;box-sizing:border-box;top:0;display:none">';
            i += "<b>Bid Won By: " + e.bidder + "</b> <br/> CPM: " + e.cpm + " <br> Response Time: " + e.timeToRespond + " ms <br/> Ad ID: " + e.adId, i += '<style type="text/css">#' + t + ".bidWonIndicator {box-shadow: 0px 0px 25px 0px rgba(26, 171, 255, 0.8);position:relative}", i += "</div>", r.addClass("bidWonIndicator"), r.append(i), r.hover(function() {
                n(".bid-summary", this).outerHeight(r.height()).outerWidth(r.width()).show()
            }, function() {
                n(".bid-summary", this).hide()
            })
        }, n.setPrebidClosedStart = function() {
            n.hasPerformance && window.performance.mark("prebid-closed-start")
        }, n.Ads.pushToGoogle = function() {
            n.SAFEFRAMES && window.googletag.cmd.push(function() {
                window.googletag.pubads().setForceSafeFrame(!0).setSafeFrameConfig({
                    sandbox: !0
                }).setTargeting("usingSafeFrame", "1")
            }), window.googletag.cmd.push(function() {
                n.pbjs.que.push(function() {
                    n.prebidLog("pbjs.setTargetingForGPTAsync"), n.pbjs.setTargetingForGPTAsync(), n.setPrebidClosedStart(), n.Ads.debugPrebidResults()
                }), n.PREBID_DEBUG && n.hasPerformance && (window.performance.mark("load-gpt-end"), window.performance.measure("load-gpt", "load-gpt-start", "load-gpt-end")), n.prebidLog("Ready for GPT enable services")
            })
        }, window.SMARTSYNC = !0, n.PREBID_TIMEOUT = 500, n.PREBID_DEBUG = -1 !== document.location.search.indexOf("pbjs_debug"), n.FORCE_CPM = !1, -1 !== document.location.search.indexOf("pbjs_force_cpm") && (n.FORCE_CPM = parseFloat(n.getParameterByName("pbjs_force_cpm"))), n.VERIFY_ADS = !0, n.SAFEFRAMES = !1
    },
    1: function(module, exports, __webpack_require__) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        ! function(e) {
            function n(t) {
                if (r[t]) return r[t].exports;
                var i = r[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
            }
            var t = window.pbjsChunk;
            window.pbjsChunk = function(r, o, a) {
                for (var s, c, d, u = 0, f = []; u < r.length; u++) c = r[u], i[c] && f.push(i[c][0]), i[c] = 0;
                for (s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]);
                for (t && t(r, o, a); f.length;) f.shift()();
                if (a)
                    for (u = 0; u < a.length; u++) d = n(n.s = a[u]);
                return d
            };
            var r = {},
                i = {
                    196: 0
                };
            n.m = e, n.c = r, n.d = function(e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                })
            }, n.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return n.d(t, "a", t), t
            }, n.o = function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }, n.p = "", n.oe = function(e) {
                throw console.error(e), e
            }, n(n.s = 477)
        }({
            0: function(e, n, t) {
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function o() {
                    return fe() + Math.random().toString(16).substr(2)
                }

                function a() {
                    return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()
                }

                function s(e) {
                    if (_(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
                }

                function c() {
                    if (q()) {
                        var e;
                        try {
                            e = ue.getAncestorOrigins() || ue.getTopFrameReferrer()
                        } catch (e) {
                            b("could not obtain top window location", e)
                        }
                        if (e) return Object(K.c)(e, {
                            decodeSearchAsString: !0
                        })
                    }
                    return ue.getWindowLocation()
                }

                function d() {
                    try {
                        window.top.location.toString();
                        for (var e, n = "";
                            (e = e ? e.parent : window).document && e.document.referrer && (n = e.document.referrer), e !== window.top;);
                        return n
                    } catch (e) {
                        return window.document.referrer
                    }
                }

                function u() {
                    if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
                }

                function f() {
                    return window.top
                }

                function l() {
                    return window.self
                }

                function p() {
                    return window.location
                }

                function g() {
                    h() && ae && console.log.apply(console, v(arguments, "MESSAGE:"))
                }

                function b() {
                    h() && se && console.info.apply(console, v(arguments, "INFO:"))
                }

                function m() {
                    h() && ce && console.warn.apply(console, v(arguments, "WARNING:"))
                }

                function y() {
                    h() && de && console.error.apply(console, v(arguments, "ERROR:"))
                }

                function v(e, n) {
                    return e = [].slice.call(e), n && e.unshift(n), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
                }

                function h() {
                    if (!1 === W.config.getConfig("debug") && !1 === $) {
                        var e = "TRUE" === w(Q.DEBUG_MODE).toUpperCase();
                        W.config.setConfig({
                            debug: e
                        }), $ = !0
                    }
                    return !!W.config.getConfig("debug")
                }

                function w(e) {
                    var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
                    return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
                }

                function A(e, n) {
                    return ie.call(e) === "[object " + n + "]"
                }

                function E(e) {
                    return A(e, ee)
                }

                function S(e) {
                    return A(e, Z)
                }

                function _(e) {
                    return A(e, X)
                }

                function T(e) {
                    return A(e, ne)
                }

                function I(e) {
                    if (!e) return !0;
                    if (_(e) || S(e)) return !(0 < e.length);
                    for (var n in e)
                        if (hasOwnProperty.call(e, n)) return !1;
                    return !0
                }

                function O(e, n) {
                    if (!I(e)) {
                        if (E(e.forEach)) return e.forEach(n, this);
                        var t = 0,
                            r = e.length;
                        if (0 < r)
                            for (; t < r; t++) n(e[t], t, e);
                        else
                            for (t in e) hasOwnProperty.call(e, t) && n.call(this, e[t], t)
                    }
                }

                function j(e, n, t, r) {
                    var i;
                    n = n || document, i = t ? n.getElementsByTagName(t) : n.getElementsByTagName("head");
                    try {
                        if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
                            i = i[0];
                            var o = r ? null : i.firstChild;
                            return i.insertBefore(e, o)
                        }
                    } catch (e) {}
                }

                function C(e, n) {
                    var t = new Image;
                    n && ue.isFn(n) && (t.addEventListener("load", n), t.addEventListener("error", n)), t.src = e
                }

                function x(e, n) {
                    var t = ue.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                        r = document.createElement("div");
                    r.innerHTML = t;
                    var i = r.firstChild;
                    n && ue.isFn(n) && (i.addEventListener("load", n), i.addEventListener("error", n)), ue.insertElement(i, document, "html", !0)
                }

                function R(e) {
                    var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                    return e ? (n && (e = encodeURI(e)), t && (t = 'sandbox="'.concat(t, '"')), "<iframe ".concat(t, ' id="').concat(o(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
                }

                function B(e, n, t) {
                    return null == n ? t : S(n) ? n : T(n) ? n.toString() : void ue.logWarn("Unsuported type for param: " + e + " required type: String")
                }

                function P(e, n, t) {
                    return t.indexOf(e) === n
                }

                function U(e, n) {
                    return e.concat(n)
                }

                function k(e) {
                    return Object.keys(e)
                }

                function D(e, n) {
                    return e[n]
                }

                function N(e, n) {
                    return function(t, r) {
                        return t.cpm === r.cpm ? n(t[e], r[e]) ? r : t : t.cpm < r.cpm ? r : t
                    }
                }

                function q() {
                    try {
                        return ue.getWindowSelf() !== ue.getWindowTop()
                    } catch (e) {
                        return !0
                    }
                }

                function M() {
                    if (window.navigator.cookieEnabled || document.cookie.length) return !0
                }

                function z(e, n) {
                    var t = r({}, e);
                    return delete t[n], t
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "internal", function() {
                    return ue
                }), n.replaceTokenInString = function(e, n, t) {
                    return O(n, function(n, r) {
                        n = void 0 === n ? "" : n;
                        var i = t + r.toUpperCase() + t,
                            o = new RegExp(i, "g");
                        e = e.replace(o, n)
                    }), e
                }, n.getUniqueIdentifierStr = o, n.generateUUID = function e(n) {
                    return n ? (n ^ a() >> n / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
                }, n.getBidIdParameter = function(e, n) {
                    return n && n[e] ? n[e] : ""
                }, n.tryAppendQueryString = function(e, n, t) {
                    return t ? e += n + "=" + encodeURIComponent(t) + "&" : e
                }, n.parseQueryStringParameters = function(e) {
                    var n = "";
                    for (var t in e) e.hasOwnProperty(t) && (n += t + "=" + encodeURIComponent(e[t]) + "&");
                    return n
                }, n.transformAdServerTargetingObj = function(e) {
                    return e && 0 < Object.getOwnPropertyNames(e).length ? k(e).map(function(n) {
                        return "".concat(n, "=").concat(encodeURIComponent(D(e, n)))
                    }).join("&") : ""
                }, n.getAdUnitSizes = function(e) {
                    if (e) {
                        var n = [];
                        if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                            var t = e.mediaTypes.banner.sizes;
                            Array.isArray(t[0]) ? n = t : n.push(t)
                        } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes));
                        return n
                    }
                }, n.parseSizesInput = function(e) {
                    var n = [];
                    if ("string" == typeof e) {
                        var t = e.split(","),
                            r = /^(\d)+x(\d)+$/i;
                        if (t)
                            for (var o in t) pe(t, o) && t[o].match(r) && n.push(t[o])
                    } else if ("object" === i(e)) {
                        var a = e.length;
                        if (0 < a)
                            if (2 === a && "number" == typeof e[0] && "number" == typeof e[1]) n.push(s(e));
                            else
                                for (var c = 0; c < a; c++) n.push(s(e[c]))
                    }
                    return n
                }, n.parseGPTSingleSizeArray = s, n.getTopWindowLocation = c, n.getTopFrameReferrer = d, n.getAncestorOrigins = u, n.getWindowTop = f, n.getWindowSelf = l, n.getWindowLocation = p, n.getTopWindowUrl = function() {
                    var e;
                    try {
                        e = ue.getTopWindowLocation().href
                    } catch (n) {
                        e = ""
                    }
                    return e
                }, n.getTopWindowReferrer = function() {
                    try {
                        return window.top.document.referrer
                    } catch (e) {
                        return document.referrer
                    }
                }, n.logMessage = g, n.logInfo = b, n.logWarn = m, n.logError = y, n.hasConsoleLogger = function() {
                    return ae
                }, n.debugTurnedOn = h, n.createInvisibleIframe = function() {
                    var e = document.createElement("iframe");
                    return e.id = o(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
                }, n.getParameterByName = w, n.hasValidBidRequest = function(e, n, t) {
                    function r(e, t) {
                        t === n[o] && (i = !0)
                    }
                    for (var i = !1, o = 0; o < n.length; o++)
                        if (i = !1, O(e, r), !i) return y("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
                    return !0
                }, n.addEventHandler = function(e, n, t) {
                    e.addEventListener ? e.addEventListener(n, t, !0) : e.attachEvent && e.attachEvent("on" + n, t)
                }, n.isA = A, n.isFn = E, n.isStr = S, n.isArray = _, n.isNumber = T, n.isPlainObject = function(e) {
                    return A(e, te)
                }, n.isBoolean = function(e) {
                    return A(e, re)
                }, n.isEmpty = I, n.isEmptyStr = function(e) {
                    return S(e) && (!e || 0 === e.length)
                }, n._each = O, n.contains = function(e, n) {
                    if (I(e)) return !1;
                    if (E(e.indexOf)) return -1 !== e.indexOf(n);
                    for (var t = e.length; t--;)
                        if (e[t] === n) return !0;
                    return !1
                }, t.d(n, "indexOf", function() {
                    return le
                }), n._map = function(e, n) {
                    if (I(e)) return [];
                    if (E(e.map)) return e.map(n);
                    var t = [];
                    return O(e, function(r, i) {
                        t.push(n(r, i, e))
                    }), t
                }, n.insertElement = j, n.triggerPixel = C, n.callBurl = function(e) {
                    var n = e.source,
                        t = e.burl;
                    n === Q.S2S.SRC && t && ue.triggerPixel(t)
                }, n.insertHtmlIntoIframe = function(e) {
                    if (e) {
                        var n = document.createElement("iframe");
                        n.id = o(), n.width = 0, n.height = 0, n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.display = "none", n.style.height = "0px", n.style.width = "0px", n.scrolling = "no", n.frameBorder = "0", n.allowtransparency = "true", ue.insertElement(n, document, "body"), n.contentWindow.document.open(), n.contentWindow.document.write(e), n.contentWindow.document.close()
                    }
                }, n.insertUserSyncIframe = x, n.createTrackPixelHtml = function(e) {
                    if (!e) return "";
                    var n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                    return n += '<img src="' + encodeURI(e) + '"></div>'
                }, n.createTrackPixelIframeHtml = R, n.getIframeDocument = function(e) {
                    if (e) {
                        var n;
                        try {
                            n = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                        } catch (e) {
                            ue.logError("Cannot get iframe document", e)
                        }
                        return n
                    }
                }, n.getValueString = B, n.uniques = P, n.flatten = U, n.getBidRequest = function(e, n) {
                    var t;
                    return n.some(function(n) {
                        var r = H()(n.bids, function(n) {
                            return ["bidId", "adId", "bid_id"].some(function(t) {
                                return n[t] === e
                            })
                        });
                        return r && (t = r), r
                    }), t
                }, n.getKeys = k, n.getValue = D, n.getBidderCodes = function() {
                    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function(e) {
                        return e.bids.map(function(e) {
                            return e.bidder
                        }).reduce(U, [])
                    }).reduce(U).filter(P)
                }, n.isGptPubadsDefined = function() {
                    if (window.googletag && E(window.googletag.pubads) && E(window.googletag.pubads().getSlots)) return !0
                }, t.d(n, "getHighestCpm", function() {
                    return ge
                }), t.d(n, "getOldestHighestCpmBid", function() {
                    return be
                }), t.d(n, "getLatestHighestCpmBid", function() {
                    return me
                }), n.shuffle = function(e) {
                    for (var n = e.length; 0 < n;) {
                        var t = Math.floor(Math.random() * n),
                            r = e[--n];
                        e[n] = e[t], e[t] = r
                    }
                    return e
                }, n.adUnitsFilter = function(e, n) {
                    return J()(e, n && n.adUnitCode)
                }, n.isSrcdocSupported = function(e) {
                    return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
                }, n.deepClone = function(e) {
                    return L()(e)
                }, n.inIframe = q, n.isSafariBrowser = function() {
                    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                }, n.replaceAuctionPrice = function(e, n) {
                    if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n)
                }, n.timestamp = function() {
                    return (new Date).getTime()
                }, n.checkCookieSupport = M, n.cookiesAreEnabled = function() {
                    return !!ue.checkCookieSupport() || (window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest"))
                }, n.getCookie = function(e) {
                    var n = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                    return n ? decodeURIComponent(n[2]) : null
                }, n.delayExecution = function(e, n) {
                    if (n < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));
                    var t = 0;
                    return function() {
                        ++t === n && e.apply(null, arguments)
                    }
                }, n.groupBy = function(e, n) {
                    return e.reduce(function(e, t) {
                        return (e[t[n]] = e[t[n]] || []).push(t), e
                    }, {})
                }, n.deepAccess = function(e, n) {
                    if (e) {
                        n = String(n).split(".");
                        for (var t = 0; t < n.length; t++)
                            if (void 0 === (e = e[n[t]])) return;
                        return e
                    }
                }, n.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
                    return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="'.concat(e, '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>') : ""
                }, n.getDefinedParams = function(e, n) {
                    return n.filter(function(n) {
                        return e[n]
                    }).reduce(function(n, t) {
                        return r(n, function(e, n, t) {
                            return n in e ? Object.defineProperty(e, n, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[n] = t, e
                        }({}, t, e[t]))
                    }, {})
                }, n.isValidMediaTypes = function(e) {
                    var n = ["banner", "native", "video"];
                    return !!Object.keys(e).every(function(e) {
                        return J()(n, e)
                    }) && (!e.video || !e.video.context || J()(["instream", "outstream"], e.video.context))
                }, n.getBidderRequest = function(e, n, t) {
                    return H()(e, function(e) {
                        return 0 < e.bids.filter(function(e) {
                            return e.bidder === n && e.adUnitCode === t
                        }).length
                    }) || {
                        start: null,
                        auctionId: null
                    }
                }, n.getUserConfiguredParams = function(e, n, t) {
                    return e.filter(function(e) {
                        return e.code === n
                    }).map(function(e) {
                        return e.bids
                    }).reduce(U, []).filter(function(e) {
                        return e.bidder === t
                    }).map(function(e) {
                        return e.params || {}
                    })
                }, n.getOrigin = function() {
                    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                }, n.getDNT = function() {
                    return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                }, n.isAdUnitCodeMatchingSlot = function(e) {
                    return function(n) {
                        return ye(e, n)
                    }
                }, n.isSlotMatchingAdUnitCode = function(e) {
                    return function(n) {
                        return ye(n, e)
                    }
                }, n.unsupportedBidderMessage = function(e, n) {
                    var t = Object.keys(e.mediaTypes || {
                        banner: "banner"
                    }).join(", ");
                    return "\n    ".concat(e.code, " is a ").concat(t, " ad unit\n    containing bidders that don't support ").concat(t, ": ").concat(n, ".\n    This bidder won't fetch demand.\n  ")
                }, n.deletePropertyFromObject = z, n.removeRequestId = function(e) {
                    return z(e, "requestId")
                }, n.isInteger = function(e) {
                    return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
                }, n.convertCamelToUnderscore = function(e) {
                    return e.replace(/(?:^|\.?)([A-Z])/g, function(e, n) {
                        return "_" + n.toLowerCase()
                    }).replace(/^_/, "")
                }, n.transformBidderParamKeywords = function(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                        t = [];
                    return O(e, function(e, r) {
                        if (_(e)) {
                            var i = [];
                            O(e, function(e) {
                                ((e = B(n + "." + r, e)) || "" === e) && i.push(e)
                            }), e = i
                        } else {
                            if (!S(e = B(n + "." + r, e))) return;
                            e = [e]
                        }
                        t.push({
                            key: r,
                            value: e
                        })
                    }), t
                }, n.convertTypes = function(e, n) {
                    return Object.keys(e).forEach(function(t) {
                        var r, i;
                        n[t] && (E(e[t]) ? n[t] = e[t](n[t]) : n[t] = (r = e[t], i = n[t], "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), isNaN(n[t]) && delete n.key)
                    }), n
                };
                var G, W = t(3),
                    F = t(69),
                    L = t.n(F),
                    V = t(10),
                    H = t.n(V),
                    Y = t(7),
                    J = t.n(Y),
                    K = t(11),
                    Q = t(4),
                    $ = !1,
                    X = "Array",
                    Z = "String",
                    ee = "Function",
                    ne = "Number",
                    te = "Object",
                    re = "Boolean",
                    ie = Object.prototype.toString,
                    oe = Boolean(window.console),
                    ae = Boolean(oe && window.console.log),
                    se = Boolean(oe && window.console.info),
                    ce = Boolean(oe && window.console.warn),
                    de = Boolean(oe && window.console.error),
                    ue = {
                        checkCookieSupport: M,
                        createTrackPixelIframeHtml: R,
                        getWindowSelf: l,
                        getWindowTop: f,
                        getAncestorOrigins: u,
                        getTopFrameReferrer: d,
                        getWindowLocation: p,
                        getTopWindowLocation: c,
                        insertUserSyncIframe: x,
                        insertElement: j,
                        isFn: E,
                        triggerPixel: C,
                        logError: y,
                        logWarn: m,
                        logMessage: g,
                        logInfo: b
                    },
                    fe = (G = 0, function() {
                        return ++G
                    }),
                    le = function() {
                        if (Array.prototype.indexOf) return Array.prototype.indexOf
                    }(),
                    pe = function(e, n) {
                        return e.hasOwnProperty ? e.hasOwnProperty(n) : void 0 !== e[n] && e.constructor.prototype[n] !== e[n]
                    },
                    ge = N("timeToRespond", function(e, n) {
                        return n < e
                    }),
                    be = N("responseTimestamp", function(e, n) {
                        return n < e
                    }),
                    me = N("responseTimestamp", function(e, n) {
                        return e < n
                    }),
                    ye = function(e, n) {
                        return e.getAdUnitPath() === n || e.getSlotElementId() === n
                    }
            },
            1: function(e, n, t) {
                function r(e, n) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, n) {
                        var t = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return t
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function o() {
                    return (o = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function a(e) {
                    function n(n, t) {
                        if (e.getUserSyncs) {
                            var r = u.config.getConfig("userSync.filterSettings"),
                                i = e.getUserSyncs({
                                    iframeEnabled: !!(u.config.getConfig("userSync.iframeEnabled") || r && (r.iframe || r.all)),
                                    pixelEnabled: !!(u.config.getConfig("userSync.pixelEnabled") || r && (r.image || r.all))
                                }, n, t);
                            i && (Array.isArray(i) || (i = [i]), i.forEach(function(n) {
                                l.a.registerSync(n.type, e.code, n.url)
                            }))
                        }
                    }

                    function t(n) {
                        return !!e.isBidRequestValid(n) || (Object(A.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(n))), !1)
                    }
                    return o(new c.a(e.code), {
                        getSpec: function() {
                            return Object.freeze(e)
                        },
                        registerSyncs: n,
                        callBids: function(r, a, c, d) {
                            function u() {
                                c(), v.a.emit(m.a.EVENTS.BIDDER_DONE, r), n(p, r.gdprConsent)
                            }
                            if (Array.isArray(r.bids)) {
                                var l = {},
                                    p = [],
                                    g = r.bids.filter(t);
                                if (0 !== g.length) {
                                    var b = {};
                                    g.forEach(function(e) {
                                        (b[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                                    });
                                    var y = e.buildRequests(g, r);
                                    if (y && 0 !== y.length) {
                                        Array.isArray(y) || (y = [y]);
                                        var h = Object(A.delayExecution)(u, y.length);
                                        y.forEach(function(n) {
                                            function t(t, i) {
                                                function c(n) {
                                                    var t, i, c = b[n.requestId];
                                                    if (c) {
                                                        var d = o(Object(f.a)(m.a.STATUS.GOOD, c), n);
                                                        t = c.adUnitCode, i = d, l[t] = !0, s(t, i, [r]) && a(t, i)
                                                    } else Object(A.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(n.requestId, ". Ignoring."))
                                                }
                                                try {
                                                    t = JSON.parse(t)
                                                } catch (t) {}
                                                var d;
                                                t = {
                                                    body: t,
                                                    headers: {
                                                        get: i.getResponseHeader.bind(i)
                                                    }
                                                }, p.push(t);
                                                try {
                                                    d = e.interpretResponse(t, n)
                                                } catch (t) {
                                                    return Object(A.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, t), void h()
                                                }
                                                d && (d.forEach ? d.forEach(c) : c(d)), h(d)
                                            }

                                            function c(n) {
                                                Object(A.logError)("Server call for ".concat(e.code, " failed: ").concat(n, ". Continuing without bids.")), h()
                                            }
                                            switch (n.method) {
                                                case "GET":
                                                    d("".concat(n.url).concat(function(e) {
                                                        return e ? "?".concat("object" === i(e) ? Object(A.parseQueryStringParameters)(e) : e) : ""
                                                    }(n.data)), {
                                                        success: t,
                                                        error: c
                                                    }, void 0, o({
                                                        method: "GET",
                                                        withCredentials: !0
                                                    }, n.options));
                                                    break;
                                                case "POST":
                                                    d(n.url, {
                                                        success: t,
                                                        error: c
                                                    }, "string" == typeof n.data ? n.data : JSON.stringify(n.data), o({
                                                        method: "POST",
                                                        contentType: "text/plain",
                                                        withCredentials: !0
                                                    }, n.options));
                                                    break;
                                                default:
                                                    Object(A.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(n.type, " must be GET or POST")), h()
                                            }
                                        })
                                    } else u()
                                } else u()
                            }
                        }
                    })
                }

                function s(e, n, t) {
                    function i(e) {
                        return "Invalid bid from ".concat(n.bidderCode, ". Ignoring bid: ").concat(e)
                    }
                    return e ? n ? (o = Object.keys(n), E.every(function(e) {
                        return w()(o, e) && !w()([void 0, null], n[e])
                    }) ? "native" !== n.mediaType || Object(p.e)(n, t) ? "video" !== n.mediaType || Object(g.b)(n, t) ? !("banner" === n.mediaType && ! function(e, n, t) {
                        if ((n.width || 0 === n.width) && (n.height || 0 === n.height)) return !0;
                        var i = Object(A.getBidderRequest)(t, n.bidderCode, e),
                            o = i && i.bids && i.bids[0] && i.bids[0].sizes,
                            a = Object(A.parseSizesInput)(o);
                        if (1 !== a.length) return !1;
                        var s = r(a[0].split("x"), 2),
                            c = s[0],
                            d = s[1];
                        return n.width = c, n.height = d, !0
                    }(e, n, t) && (Object(A.logError)(i("Banner bids require a width and height")), 1)) : (Object(A.logError)(i("Video bid does not have required vastUrl or renderer property")), !1) : (Object(A.logError)(i("Native bid missing some required properties.")), !1) : (Object(A.logError)(i("Bidder ".concat(n.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1)) : (Object(A.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : (Object(A.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
                    var o
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.registerBidder = function(e) {
                    function n(e) {
                        var n = a(e);
                        d.default.registerBidAdapter(n, e.code, t)
                    }
                    var t = Array.isArray(e.supportedMediaTypes) ? {
                        supportedMediaTypes: e.supportedMediaTypes
                    } : void 0;
                    n(e), Array.isArray(e.aliases) && e.aliases.forEach(function(t) {
                        d.default.aliasRegistry[t] = e.code, n(o({}, e, {
                            code: t
                        }))
                    })
                }, n.newBidder = a, n.isValid = s;
                var c = t(28),
                    d = t(8),
                    u = t(3),
                    f = t(16),
                    l = t(18),
                    p = t(17),
                    g = t(42),
                    b = t(4),
                    m = t.n(b),
                    y = t(9),
                    v = t.n(y),
                    h = t(7),
                    w = t.n(h),
                    A = t(0),
                    E = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"]
            },
            10: function(e, n, t) {
                t(48), e.exports = t(13).Array.find
            },
            106: function(e, n, t) {
                var r = t(14),
                    i = t(34)(6),
                    o = "findIndex",
                    a = !0;
                o in [] && Array(1)[o](function() {
                    a = !1
                }), r(r.P + r.F * a, "Array", {
                    findIndex: function(e) {
                        return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                    }
                }), t(27)(o)
            },
            11: function(e, n, t) {
                function r(e) {
                    return Object.keys(e).map(function(n) {
                        return Array.isArray(e[n]) ? e[n].map(function(e) {
                            return "".concat(n, "[]=").concat(e)
                        }).join("&") : "".concat(n, "=").concat(e[n])
                    }).join("&")
                }
                n.b = r, n.c = function(e, n) {
                    var t = document.createElement("a");
                    n && "noDecodeWholeURL" in n && n.noDecodeWholeURL ? t.href = e : t.href = decodeURIComponent(e);
                    var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
                    return {
                        href: t.href,
                        protocol: (t.protocol || "").replace(/:$/, ""),
                        hostname: t.hostname,
                        port: +t.port,
                        pathname: t.pathname.replace(/^(?!\/)/, "/"),
                        search: r ? t.search : (i = t.search || "", i ? i.replace(/^\?/, "").split("&").reduce(function(e, n) {
                            var t, r, i = n.split("="),
                                o = (r = 2, function(e) {
                                    if (Array.isArray(e)) return e
                                }(t = i) || function(e, n) {
                                    var t = [],
                                        r = !0,
                                        i = !1,
                                        o = void 0;
                                    try {
                                        for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                                    } catch (e) {
                                        i = !0, o = e
                                    } finally {
                                        try {
                                            r || null == s.return || s.return()
                                        } finally {
                                            if (i) throw o
                                        }
                                    }
                                    return t
                                }(t, r) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                                }()),
                                a = o[0],
                                s = o[1];
                            return /\[\]$/.test(a) ? (a = a.replace("[]", ""), e[a] = e[a] || [], e[a].push(s)) : e[a] = s || "", e
                        }, {}) : {}),
                        hash: (t.hash || "").replace(/^#/, ""),
                        host: t.host || window.location.host
                    };
                    var i
                }, n.a = function(e) {
                    return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(r(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
                }
            },
            12: function(e, n, t) {
                function r(e) {
                    var n, t, r, a = this,
                        c = e.url,
                        d = e.config,
                        u = e.id,
                        f = e.callback,
                        l = e.loaded,
                        p = e.adUnitCode;
                    this.url = c, this.config = d, this.handlers = {}, this.id = u, this.loaded = l, this.cmd = [], this.push = function(e) {
                        "function" == typeof e ? a.loaded ? e.call() : a.cmd.push(e) : o.logError("Commands given to Renderer.push must be wrapped in a function")
                    }, this.callback = f || function() {
                        a.loaded = !0, a.process()
                    }, n = p, t = pbjs.adUnits, (r = s()(t, function(e) {
                        return e.code === n
                    })) && r.renderer && r.renderer.url && r.renderer.render ? o.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(p)) : Object(i.b)(c, this.callback, !0)
                }
                n.a = r, n.c = function(e) {
                    return !(!e || !e.url)
                }, n.b = function(e, n) {
                    e.render(n)
                };
                var i = t(29),
                    o = t(0),
                    a = t(10),
                    s = t.n(a);
                r.install = function(e) {
                    return new r({
                        url: e.url,
                        config: e.config,
                        id: e.id,
                        callback: e.callback,
                        loaded: e.loaded,
                        adUnitCode: e.adUnitCode
                    })
                }, r.prototype.getConfig = function() {
                    return this.config
                }, r.prototype.setRender = function(e) {
                    this.render = e
                }, r.prototype.setEventHandlers = function(e) {
                    this.handlers = e
                }, r.prototype.handleVideoEvent = function(e) {
                    var n = e.id,
                        t = e.eventName;
                    "function" == typeof this.handlers[t] && this.handlers[t](), o.logMessage("Prebid Renderer event for id ".concat(n, " type ").concat(t))
                }, r.prototype.process = function() {
                    for (; 0 < this.cmd.length;) try {
                        this.cmd.shift().call()
                    } catch (e) {
                        o.logError("Error processing Renderer command: ", e)
                    }
                }
            },
            13: function(e, n) {
                var t = e.exports = {
                    version: "2.6.3"
                };
                "number" == typeof __e && (__e = t)
            },
            14: function(e, n, t) {
                var r = t(19),
                    i = t(13),
                    o = t(32),
                    a = t(50),
                    s = t(57),
                    c = "prototype",
                    d = function e(n, t, d) {
                        var u, f, l, p = n & e.F,
                            g = n & e.G,
                            b = n & e.S,
                            m = n & e.P,
                            y = n & e.B,
                            v = n & e.W,
                            h = g ? i : i[t] || (i[t] = {}),
                            w = h[c],
                            A = g ? r : b ? r[t] : (r[t] || {})[c];
                        for (u in g && (d = t), d)(f = !p && A && void 0 !== A[u]) && s(h, u) || (l = f ? A[u] : d[u], h[u] = g && "function" != typeof A[u] ? d[u] : y && f ? o(l, r) : v && A[u] == l ? function(e) {
                            var n = function(n, t, r) {
                                if (this instanceof e) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(n);
                                        case 2:
                                            return new e(n, t)
                                    }
                                    return new e(n, t, r)
                                }
                                return e.apply(this, arguments)
                            };
                            return n[c] = e[c], n
                        }(l) : m && "function" == typeof l ? o(Function.call, l) : l, m && ((h.virtual || (h.virtual = {}))[u] = l, n & e.R && w && !w[u] && a(w, u, l)))
                    };
                d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
            },
            15: function(e, n) {
                e.exports = function(e) {
                    return "object" == (void 0 === e ? "undefined" : _typeof(e)) ? null !== e : "function" == typeof e
                }
            },
            16: function(e, n, t) {
                function r(e, n) {
                    var t = n && n.bidId || i.getUniqueIdentifierStr(),
                        r = n && n.src || "client",
                        o = e || 0;
                    this.bidderCode = n && n.bidder || "", this.width = 0, this.height = 0, this.statusMessage = function() {
                        switch (o) {
                            case 0:
                                return "Pending";
                            case 1:
                                return "Bid available";
                            case 2:
                                return "Bid returned empty or error response";
                            case 3:
                                return "Bid timed out"
                        }
                    }(), this.adId = t, this.mediaType = "banner", this.source = r, this.getStatusCode = function() {
                        return o
                    }, this.getSize = function() {
                        return this.width + "x" + this.height
                    }
                }
                n.a = function(e, n) {
                    return new r(e, n)
                };
                var i = t(0)
            },
            17: function(e, n, t) {
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }
                t.d(n, "d", function() {
                    return c
                }), t.d(n, "a", function() {
                    return d
                }), n.f = function(e) {
                    if (e && e.type && ((n = e.type) && a()(Object.keys(u), n) || (Object(i.logError)("".concat(n, " nativeParam is not supported")), 0))) return u[e.type];
                    var n;
                    return e
                }, n.e = function(e, n) {
                    var t = Object(i.getBidRequest)(e.adId, n);
                    if (!t) return !1;
                    if (!Object(i.deepAccess)(e, "native.clickUrl")) return !1;
                    if (Object(i.deepAccess)(e, "native.image") && (!Object(i.deepAccess)(e, "native.image.height") || !Object(i.deepAccess)(e, "native.image.width"))) return !1;
                    if (Object(i.deepAccess)(e, "native.icon") && (!Object(i.deepAccess)(e, "native.icon.height") || !Object(i.deepAccess)(e, "native.icon.width"))) return !1;
                    var r = t.nativeParams;
                    if (!r) return !0;
                    var o = Object.keys(r).filter(function(e) {
                            return r[e].required
                        }),
                        s = Object.keys(e.native).filter(function(n) {
                            return e.native[n]
                        });
                    return o.every(function(e) {
                        return a()(s, e)
                    })
                }, n.b = function(e, n) {
                    var t;
                    "click" === e.action ? t = n.native && n.native.clickTrackers : (t = n.native && n.native.impressionTrackers, n.native && n.native.javascriptTrackers && Object(i.insertHtmlIntoIframe)(n.native.javascriptTrackers)), (t || []).forEach(i.triggerPixel)
                }, n.c = function(e) {
                    var n = {};
                    return Object.keys(e.native).forEach(function(t) {
                        var i = s.NATIVE_KEYS[t],
                            o = e.native[t];
                        "object" === r(o) && o.url && (o = o.url), i && o && (n[i] = o)
                    }), n
                };
                var i = t(0),
                    o = t(7),
                    a = t.n(o),
                    s = t(4),
                    c = [],
                    d = Object.keys(s.NATIVE_KEYS).map(function(e) {
                        return s.NATIVE_KEYS[e]
                    }),
                    u = {
                        image: {
                            image: {
                                required: !0
                            },
                            title: {
                                required: !0
                            },
                            sponsoredBy: {
                                required: !0
                            },
                            clickUrl: {
                                required: !0
                            },
                            body: {
                                required: !1
                            },
                            icon: {
                                required: !1
                            }
                        }
                    }
            },
            18: function(e, n, t) {
                function r(e, n) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, n) {
                        var t = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return t
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function i() {
                    return (i = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }
                t.d(n, "a", function() {
                    return u
                });
                var o = t(0),
                    a = t(3),
                    s = t(7),
                    c = t.n(s);
                a.config.setDefaults({
                    userSync: {
                        syncEnabled: !0,
                        pixelEnabled: !0,
                        syncsPerBidder: 5,
                        syncDelay: 3e3
                    }
                });
                var d = !o.isSafariBrowser() && o.cookiesAreEnabled(),
                    u = function(e) {
                        function n() {
                            if (l.syncEnabled && e.browserSupportsCookies && !d) {
                                try {
                                    (l.pixelEnabled || f.image) && o.shuffle(s.image).forEach(function(e) {
                                        var n = r(e, 2),
                                            t = n[0],
                                            i = n[1];
                                        o.logMessage("Invoking image pixel user sync for bidder: ".concat(t)), o.triggerPixel(i)
                                    }), (l.iframeEnabled || f.iframe) && o.shuffle(s.iframe).forEach(function(e) {
                                        var n = r(e, 2),
                                            t = n[0],
                                            i = n[1];
                                        o.logMessage("Invoking iframe user sync for bidder: ".concat(t)), o.insertUserSyncIframe(i)
                                    })
                                } catch (e) {
                                    return o.logError("Error firing user syncs", e)
                                }
                                s = {
                                    image: [],
                                    iframe: []
                                }, d = !0
                            }
                        }
                        var t = {},
                            s = {
                                image: [],
                                iframe: []
                            },
                            d = !1,
                            u = {},
                            f = {
                                image: !1,
                                iframe: !1
                            },
                            l = e.config;
                        return a.config.getConfig("userSync", function(e) {
                            l = i(l, e.userSync)
                        }), t.registerSync = function(e, n, t) {
                            if (!l.syncEnabled || !o.isArray(s[e])) return o.logWarn('User sync type "'.concat(e, '" not supported'));
                            if (!n) return o.logWarn("Bidder is required for registering sync");
                            if (0 !== l.syncsPerBidder && Number(u[n]) >= l.syncsPerBidder) return o.logWarn('Number of user syncs exceeded for "'.concat(n, '"'));
                            if (l.filterSettings) {
                                if (function(e, n) {
                                        var t = l.filterSettings;
                                        if (function(e, n) {
                                                if (e.all && e[n]) return o.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(n, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                                                var t = e.all ? e.all : e[n],
                                                    r = e.all ? "all" : n;
                                                if (!t) return !1;
                                                var i = t.filter,
                                                    a = t.bidders;
                                                return i && "include" !== i && "exclude" !== i ? (o.logWarn('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(i, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === a || Array.isArray(a) && 0 < a.length && a.every(function(e) {
                                                    return o.isStr(e) && "*" !== e
                                                })) || (o.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                                            }(t, e)) {
                                            f[e] = !0;
                                            var r = t.all ? t.all : t[e],
                                                i = "*" === r.bidders ? [n] : r.bidders,
                                                a = r.filter || "include";
                                            return {
                                                include: function(e, n) {
                                                    return !c()(e, n)
                                                },
                                                exclude: function(e, n) {
                                                    return c()(e, n)
                                                }
                                            }[a](i, n)
                                        }
                                        return !1
                                    }(e, n)) return o.logWarn("Bidder '".concat(n, "' is not permitted to register their userSync ").concat(e, " pixels as per filterSettings config."))
                            } else if (l.enabledBidders && l.enabledBidders.length && l.enabledBidders.indexOf(n) < 0) return o.logWarn('Bidder "'.concat(n, '" not permitted to register their userSync pixels.'));
                            var r, i;
                            s[e].push([n, t]), (r = u)[i = n] ? r[i] += 1 : r[i] = 1, u = r
                        }, t.syncUsers = function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                            if (e) return setTimeout(n, Number(e));
                            n()
                        }, t.triggerUserSyncs = function() {
                            l.enableOverride && t.syncUsers()
                        }, t
                    }({
                        config: a.config.getConfig("userSync"),
                        browserSupportsCookies: d
                    })
            },
            19: function(e, n) {
                var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                "number" == typeof __g && (__g = t)
            },
            192: function(e, n, t) {
                function r(e) {
                    var n, t, r;
                    return {
                        type: "xml",
                        value: e.vastXml ? e.vastXml : (n = e.vastUrl, t = e.vastImpUrl, r = t ? "<![CDATA[".concat(t, "]]>") : "", '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(n, "]]></VASTAdTagURI>\n        <Impression>").concat(r, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")),
                        ttlseconds: Number(e.ttl)
                    }
                }
                n.b = function(e, n) {
                    var t = {
                        puts: e.map(r)
                    };
                    Object(i.a)(o.config.getConfig("cache.url"), (a = n, {
                        success: function(e) {
                            var n;
                            try {
                                n = JSON.parse(e).responses
                            } catch (e) {
                                return void a(e, [])
                            }
                            n ? a(null, n) : a(new Error("The cache server didn't respond with a responses property."), [])
                        },
                        error: function(e, n) {
                            a(new Error("Error storing video ad in the cache: ".concat(e, ": ").concat(JSON.stringify(n))), [])
                        }
                    }), JSON.stringify(t), {
                        contentType: "text/plain",
                        withCredentials: !0
                    });
                    var a
                }, n.a = function(e) {
                    return "".concat(o.config.getConfig("cache.url"), "?uuid=").concat(e)
                };
                var i = t(6),
                    o = t(3)
            },
            2: function(e, n, t) {
                t.d(n, "b", function() {
                    return r
                }), t.d(n, "c", function() {
                    return i
                }), t.d(n, "a", function() {
                    return o
                });
                var r = "native",
                    i = "video",
                    o = "banner"
            },
            20: function(e, n, t) {
                t.d(n, "a", function() {
                    return o
                }), t.d(n, "b", function() {
                    return a
                });
                var r = t(68),
                    i = t.n(r),
                    o = i()({
                        ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE
                    }),
                    a = o.hooks
            },
            21: function(e, n, t) {
                t(106), e.exports = t(13).Array.findIndex
            },
            22: function _(oo, po) {
                var qo;
                qo = function() {
                    return this
                }();
                try {
                    qo = qo || Function("return this")() || eval("this")
                } catch (e) {
                    "object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && (qo = window)
                }
                oo.exports = qo
            },
            23: function(e, n, t) {
                e.exports = !t(33)(function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            24: function(e, n) {
                var t = {}.toString;
                e.exports = function(e) {
                    return t.call(e).slice(8, -1)
                }
            },
            25: function(e, n) {
                e.exports = function(e) {
                    if (null == e) throw TypeError("Can't call method on  " + e);
                    return e
                }
            },
            26: function(e, n, t) {
                var r = t(61)("wks"),
                    i = t(63),
                    o = t(19).Symbol,
                    a = "function" == typeof o;
                (e.exports = function(e) {
                    return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
                }).store = r
            },
            27: function(e, n) {
                e.exports = function() {}
            },
            28: function(e, n, t) {
                n.a = function(e) {
                    var n = e;
                    return {
                        callBids: function() {},
                        setBidderCode: function(e) {
                            n = e
                        },
                        getBidderCode: function() {
                            return n
                        }
                    }
                }
            },
            29: function(e, n, t) {
                function r(e, n) {
                    var t = document.createElement("script");
                    t.type = "text/javascript", t.async = !0, n && "function" == typeof n && (t.readyState ? t.onreadystatechange = function() {
                        "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null, n())
                    } : t.onload = function() {
                        n()
                    }), t.src = e;
                    var r = document.getElementsByTagName("head");
                    (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(t, r.firstChild)
                }
                n.a = function(e, n) {
                    if (!n || !e) return void a.logError("cannot load external script without url and moduleCode");
                    if (!o()(c, n)) return void a.logError("".concat(n, " not whitelisted for loading external JavaScript"));
                    if (!s[e]) {
                        a.logWarn("module ".concat(n, " is loading external JavaScript"));
                        var t = document.createElement("script");
                        t.type = "text/javascript", t.async = !0, t.src = e, a.insertElement(t), s[e] = !0
                    }
                }, n.b = function(e, n, t) {
                    if (!e) return void a.logError("Error attempting to request empty URL", "adloader.js:loadScript");
                    t ? s[e] ? n && "function" == typeof n && (s[e].loaded ? n() : s[e].callbacks.push(n)) : (s[e] = {
                        loaded: !1,
                        callbacks: []
                    }, n && "function" == typeof n && s[e].callbacks.push(n), r(e, function() {
                        s[e].loaded = !0;
                        try {
                            for (var n = 0; n < s[e].callbacks.length; n++) s[e].callbacks[n]()
                        } catch (n) {
                            a.logError("Error executing callback", "adloader.js:loadScript", n)
                        }
                    })) : r(e, n)
                };
                var i = t(7),
                    o = t.n(i),
                    a = t(0),
                    s = {},
                    c = ["criteo"]
            },
            3: function(e, n, t) {
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function o() {
                    function e() {
                        function e(e) {
                            return c()(Object.keys(S), function(n) {
                                return e === S[n]
                            })
                        }

                        function r(n) {
                            if (!n) return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                            if ("string" == typeof n) e(n) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                            else if ("object" === i(n) && !Object(a.b)(n)) return l.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                            return !0
                        }
                        t = {};
                        var s = {
                            _debug: p,
                            get debug() {
                                return this._debug
                            },
                            set debug(e) {
                                this._debug = e
                            },
                            _bidderTimeout: g,
                            get bidderTimeout() {
                                return this._bidderTimeout
                            },
                            set bidderTimeout(e) {
                                this._bidderTimeout = e
                            },
                            _publisherDomain: b,
                            get publisherDomain() {
                                return this._publisherDomain
                            },
                            set publisherDomain(e) {
                                this._publisherDomain = e
                            },
                            _priceGranularity: S.MEDIUM,
                            set priceGranularity(n) {
                                r(n) && ("string" == typeof n ? this._priceGranularity = e(n) ? n : S.MEDIUM : "object" === i(n) && (this._customPriceBucket = n, this._priceGranularity = S.CUSTOM, l.logMessage("Using custom price granularity")))
                            },
                            get priceGranularity() {
                                return this._priceGranularity
                            },
                            _customPriceBucket: {},
                            get customPriceBucket() {
                                return this._customPriceBucket
                            },
                            _mediaTypePriceGranularity: {},
                            get mediaTypePriceGranularity() {
                                return this._mediaTypePriceGranularity
                            },
                            set mediaTypePriceGranularity(n) {
                                var t = this;
                                this._mediaTypePriceGranularity = Object.keys(n).reduce(function(o, a) {
                                    return r(n[a]) ? "string" == typeof n ? o[a] = e(n[a]) ? n[a] : t._priceGranularity : "object" === i(n) && (o[a] = n[a], l.logMessage("Using custom price granularity for ".concat(a))) : l.logWarn("Invalid price granularity for media type: ".concat(a)), o
                                }, {})
                            },
                            _sendAllBids: m,
                            get enableSendAllBids() {
                                return this._sendAllBids
                            },
                            set enableSendAllBids(e) {
                                this._sendAllBids = e
                            },
                            _useBidCache: v,
                            get useBidCache() {
                                return this._useBidCache
                            },
                            set useBidCache(e) {
                                this._useBidCache = e
                            },
                            _bidderSequence: E,
                            get bidderSequence() {
                                return this._bidderSequence
                            },
                            set bidderSequence(e) {
                                A[e] ? this._bidderSequence = e : l.logWarn("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                            },
                            _timeoutBuffer: h,
                            get timeoutBuffer() {
                                return this._timeoutBuffer
                            },
                            set timeoutBuffer(e) {
                                this._timeoutBuffer = e
                            },
                            _disableAjaxTimeout: y,
                            get disableAjaxTimeout() {
                                return this._disableAjaxTimeout
                            },
                            set disableAjaxTimeout(e) {
                                this._disableAjaxTimeout = e
                            }
                        };
                        o && n(Object.keys(o).reduce(function(e, n) {
                            return o[n] !== s[n] && (e[n] = s[n] || {}), e
                        }, {})), o = s
                    }

                    function n(e) {
                        var n = Object.keys(e);
                        s.filter(function(e) {
                            return u()(n, e.topic)
                        }).forEach(function(n) {
                            var t, r, i;
                            n.callback((t = {}, r = n.topic, i = e[n.topic], r in t ? Object.defineProperty(t, r, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[r] = i, t))
                        }), s.filter(function(e) {
                            return e.topic === _
                        }).forEach(function(n) {
                            return n.callback(e)
                        })
                    }
                    var t, o, s = [],
                        d = Object(f.a)("async", function(e) {
                            if ("object" === i(e)) {
                                var a = Object.keys(e),
                                    s = {};
                                a.forEach(function(n) {
                                    var a = e[n];
                                    "object" === i(t[n]) && "object" === i(a) && (a = r({}, t[n], a)), s[n] = o[n] = a
                                }), n(s)
                            } else l.logError("setConfig options must be an object")
                        });
                    return e(), {
                        getConfig: function() {
                            if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                                var e = arguments.length <= 0 ? void 0 : arguments[0];
                                return e ? l.deepAccess(o, e) : o
                            }
                            return function(e, n) {
                                var t = n;
                                return "string" != typeof e && (t = e, e = _), "function" == typeof t ? (s.push({
                                    topic: e,
                                    callback: t
                                }), function() {
                                    s.splice(s.indexOf(n), 1)
                                }) : void l.logError("listener must be a function")
                            }.apply(void 0, arguments)
                        },
                        setConfig: d,
                        setDefaults: function(e) {
                            "object" === i(t) ? (r(t, e), r(o, e)) : l.logError("defaults must be an object")
                        },
                        resetConfig: e
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "RANDOM", function() {
                    return w
                }), n.newConfig = o, t.d(n, "config", function() {
                    return T
                });
                var a = t(31),
                    s = t(10),
                    c = t.n(s),
                    d = t(7),
                    u = t.n(d),
                    f = t(20),
                    l = t(0),
                    p = !1,
                    g = 3e3,
                    b = window.location.origin,
                    m = !0,
                    y = !1,
                    v = !1,
                    h = 400,
                    w = "random",
                    A = {};
                A[w] = !0, A.fixed = !0;
                var E = w,
                    S = {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    },
                    _ = "*",
                    T = o()
            },
            30: function(e, n, t) {
                t.d(n, "a", function() {
                    return u
                });
                var r, i, o = t(0),
                    a = t(45),
                    s = t(10),
                    c = t.n(s),
                    d = t(4),
                    u = (r = [], (i = {}).addWinningBid = function(e) {
                        var n = c()(r, function(n) {
                            return n.getAuctionId() === e.auctionId
                        });
                        n ? n.addWinningBid(e) : utils.logWarn("Auction not found when adding winning bid")
                    }, i.getAllWinningBids = function() {
                        return r.map(function(e) {
                            return e.getWinningBids()
                        }).reduce(o.flatten, [])
                    }, i.getBidsRequested = function() {
                        return r.map(function(e) {
                            return e.getBidRequests()
                        }).reduce(o.flatten, [])
                    }, i.getNoBids = function() {
                        return r.map(function(e) {
                            return e.getNoBids()
                        }).reduce(o.flatten, [])
                    }, i.getBidsReceived = function() {
                        return r.map(function(e) {
                            if (e.getAuctionStatus() === a.a) return e.getBidsReceived()
                        }).reduce(o.flatten, []).filter(function(e) {
                            return e
                        })
                    }, i.getAdUnits = function() {
                        return r.map(function(e) {
                            return e.getAdUnits()
                        }).reduce(o.flatten, [])
                    }, i.getAdUnitCodes = function() {
                        return r.map(function(e) {
                            return e.getAdUnitCodes()
                        }).reduce(o.flatten, []).filter(o.uniques)
                    }, i.createAuction = function(e) {
                        var n, t = e.adUnits,
                            i = e.adUnitCodes,
                            o = e.callback,
                            s = e.cbTimeout,
                            c = e.labels,
                            d = Object(a.d)({
                                adUnits: t,
                                adUnitCodes: i,
                                callback: o,
                                cbTimeout: s,
                                labels: c
                            });
                        return n = d, r.push(n), d
                    }, i.findBidByAdId = function(e) {
                        return c()(r.map(function(e) {
                            return e.getBidsReceived()
                        }).reduce(o.flatten, []), function(n) {
                            return n.adId === e
                        })
                    }, i.getStandardBidderAdServerTargeting = function() {
                        return Object(a.c)()[d.JSON_MAPPING.ADSERVER_TARGETING]
                    }, i.setStatusForBids = function(e, n) {
                        var t = i.findBidByAdId(e);
                        if (t && (t.status = n), t && n === d.BID_STATUS.BID_TARGETING_SET) {
                            var o = c()(r, function(e) {
                                return e.getAuctionId() === t.auctionId
                            });
                            o && o.setBidTargeting(t)
                        }
                    }, i.getLastAuctionId = function() {
                        return r.length && r[r.length - 1].getAuctionId()
                    }, i)
            },
            31: function(e, n, t) {
                function r(e, n) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = parseFloat(e);
                    return isNaN(r) && (r = ""), {
                        low: "" === r ? "" : i(e, u, t),
                        med: "" === r ? "" : i(e, f, t),
                        high: "" === r ? "" : i(e, l, t),
                        auto: "" === r ? "" : i(e, g, t),
                        dense: "" === r ? "" : i(e, p, t),
                        custom: "" === r ? "" : i(e, n, t)
                    }
                }

                function i(e, n, t) {
                    var r = "";
                    if (!o(n)) return r;
                    var i, a, c, u, f, l, p, g, b, m = n.buckets.reduce(function(e, n) {
                            return e.max > n.max ? e : n
                        }, {
                            max: 0
                        }),
                        y = s()(n.buckets, function(n) {
                            if (e > m.max * t) {
                                var i = n.precision;
                                void 0 === i && (i = d), r = (n.max * t).toFixed(i)
                            } else if (e <= n.max * t && e >= n.min * t) return n
                        });
                    return y && (i = e, c = t, u = void 0 !== (a = y).precision ? a.precision : d, f = a.increment * c, l = a.min * c, p = Math.pow(10, u + 2), g = (i * p - l * p) / (f * p), b = Math.floor(g) * f + l, r = (b = Number(b.toFixed(10))).toFixed(u)), r
                }

                function o(e) {
                    if (c.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
                    var n = !0;
                    return e.buckets.forEach(function(e) {
                        void 0 !== e.min && e.max && e.increment || (n = !1)
                    }), n
                }
                t.d(n, "a", function() {
                    return r
                }), t.d(n, "b", function() {
                    return o
                });
                var a = t(10),
                    s = t.n(a),
                    c = t(0),
                    d = 2,
                    u = {
                        buckets: [{
                            min: 0,
                            max: 5,
                            increment: .5
                        }]
                    },
                    f = {
                        buckets: [{
                            min: 0,
                            max: 20,
                            increment: .1
                        }]
                    },
                    l = {
                        buckets: [{
                            min: 0,
                            max: 20,
                            increment: .01
                        }]
                    },
                    p = {
                        buckets: [{
                            min: 0,
                            max: 3,
                            increment: .01
                        }, {
                            min: 3,
                            max: 8,
                            increment: .05
                        }, {
                            min: 8,
                            max: 20,
                            increment: .5
                        }]
                    },
                    g = {
                        buckets: [{
                            min: 0,
                            max: 5,
                            increment: .05
                        }, {
                            min: 5,
                            max: 10,
                            increment: .1
                        }, {
                            min: 10,
                            max: 20,
                            increment: .5
                        }]
                    }
            },
            32: function(e, n, t) {
                var r = t(49);
                e.exports = function(e, n, t) {
                    if (r(e), void 0 === n) return e;
                    switch (t) {
                        case 1:
                            return function(t) {
                                return e.call(n, t)
                            };
                        case 2:
                            return function(t, r) {
                                return e.call(n, t, r)
                            };
                        case 3:
                            return function(t, r, i) {
                                return e.call(n, t, r, i)
                            }
                    }
                    return function() {
                        return e.apply(n, arguments)
                    }
                }
            },
            33: function(e, n) {
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                }
            },
            34: function(e, n, t) {
                var r = t(32),
                    i = t(35),
                    o = t(58),
                    a = t(36),
                    s = t(59);
                e.exports = function(e, n) {
                    var t = 1 == e,
                        c = 2 == e,
                        d = 3 == e,
                        u = 4 == e,
                        f = 6 == e,
                        l = 5 == e || f,
                        p = n || s;
                    return function(n, s, g) {
                        for (var b, m, y = o(n), v = i(y), h = r(s, g, 3), w = a(v.length), A = 0, E = t ? p(n, w) : c ? p(n, 0) : void 0; A < w; A++)
                            if ((l || A in v) && (m = h(b = v[A], A, y), e))
                                if (t) E[A] = m;
                                else if (m) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return b;
                            case 6:
                                return A;
                            case 2:
                                E.push(b)
                        } else if (u) return !1;
                        return f ? -1 : d || u ? u : E
                    }
                }
            },
            35: function(e, n, t) {
                var r = t(24);
                e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                    return "String" == r(e) ? e.split("") : Object(e)
                }
            },
            36: function(e, n, t) {
                var r = t(37),
                    i = Math.min;
                e.exports = function(e) {
                    return 0 < e ? i(r(e), 9007199254740991) : 0
                }
            },
            37: function(e, n) {
                var t = Math.ceil,
                    r = Math.floor;
                e.exports = function(e) {
                    return isNaN(e = +e) ? 0 : (0 < e ? r : t)(e)
                }
            },
            38: function(e, n, t) {
                var r = t(24);
                e.exports = Array.isArray || function(e) {
                    return "Array" == r(e)
                }
            },
            39: function(e, n, t) {
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function i(e) {
                    return e.reduce(function(e, n) {
                        return "object" === r(n) && "string" == typeof n.mediaQuery ? matchMedia(n.mediaQuery).matches && (Array.isArray(n.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach(function(t) {
                            return (n[t] || []).forEach(function(n) {
                                return e[t][n] = !0
                            })
                        })) : Object(a.logWarn)('sizeConfig rule missing required property "mediaQuery"'), e
                    }, {
                        labels: {},
                        sizesSupported: {},
                        shouldFilter: !1
                    })
                }
                n.a = function(e, n) {
                    return e.labelAll ? {
                        labelAll: !0,
                        labels: e.labelAll,
                        activeLabels: n
                    } : {
                        labelAll: !1,
                        labels: e.labelAny,
                        activeLabels: n
                    }
                }, n.c = function(e) {
                    var n = i(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : d);
                    return !n.shouldFilter || !!n.sizesSupported[e]
                }, n.b = function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.labels,
                        t = void 0 === n ? [] : n,
                        r = e.labelAll,
                        o = void 0 !== r && r,
                        s = e.activeLabels,
                        u = void 0 === s ? [] : s,
                        f = 1 < arguments.length ? arguments[1] : void 0,
                        l = 2 < arguments.length ? arguments[2] : void 0,
                        p = i(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : d);
                    f = Object(a.isPlainObject)(f) ? Object(a.deepClone)(f) : l ? {
                        banner: {
                            sizes: l
                        }
                    } : {};
                    var g = Object(a.deepAccess)(f, "banner.sizes");
                    p.shouldFilter && g && (f.banner.sizes = g.filter(function(e) {
                        return p.sizesSupported[e]
                    }));
                    var b = Object.keys(f),
                        m = {
                            active: 1 < b.length || 1 === b.length && "banner" !== b[0] || "banner" === b[0] && 0 < Object(a.deepAccess)(f, "banner.sizes.length") && (0 === t.length || !o && (t.some(function(e) {
                                return p.labels[e]
                            }) || t.some(function(e) {
                                return c()(u, e)
                            })) || o && t.reduce(function(e, n) {
                                return e ? p.labels[n] || c()(u, n) : e
                            }, !0)),
                            mediaTypes: f
                        };
                    return g && g.length !== f.banner.sizes.length && (m.filterResults = {
                        before: g,
                        after: f.banner.sizes
                    }), m
                };
                var o = t(3),
                    a = t(0),
                    s = t(7),
                    c = t.n(s),
                    d = [];
                o.config.getConfig("sizeConfig", function(e) {
                    return n = e.sizeConfig, void(d = n);
                    var n
                })
            },
            4: function(e, n) {
                e.exports = {
                    JSON_MAPPING: {
                        PL_CODE: "code",
                        PL_SIZE: "sizes",
                        PL_BIDS: "bids",
                        BD_BIDDER: "bidder",
                        BD_ID: "paramsd",
                        BD_PL_ID: "placementId",
                        ADSERVER_TARGETING: "adserverTargeting",
                        BD_SETTING_STANDARD: "standard"
                    },
                    DEBUG_MODE: "pbjs_debug",
                    STATUS: {
                        GOOD: 1,
                        NO_BID: 2
                    },
                    CB: {
                        TYPE: {
                            ALL_BIDS_BACK: "allRequestedBidsBack",
                            AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                            BID_WON: "bidWon",
                            REQUEST_BIDS: "requestBids"
                        }
                    },
                    EVENTS: {
                        AUCTION_INIT: "auctionInit",
                        AUCTION_END: "auctionEnd",
                        BID_ADJUSTMENT: "bidAdjustment",
                        BID_TIMEOUT: "bidTimeout",
                        BID_REQUESTED: "bidRequested",
                        BID_RESPONSE: "bidResponse",
                        NO_BID: "noBid",
                        BID_WON: "bidWon",
                        BIDDER_DONE: "bidderDone",
                        SET_TARGETING: "setTargeting",
                        REQUEST_BIDS: "requestBids",
                        ADD_AD_UNITS: "addAdUnits",
                        AD_RENDER_FAILED: "adRenderFailed"
                    },
                    AD_RENDER_FAILED_REASON: {
                        PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                        NO_AD: "noAd",
                        EXCEPTION: "exception",
                        CANNOT_FIND_AD: "cannotFindAd",
                        MISSING_DOC_OR_ADID: "missingDocOrAdid"
                    },
                    EVENT_ID_PATHS: {
                        bidWon: "adUnitCode"
                    },
                    GRANULARITY_OPTIONS: {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    },
                    TARGETING_KEYS: {
                        BIDDER: "hb_bidder",
                        AD_ID: "hb_adid",
                        PRICE_BUCKET: "hb_pb",
                        SIZE: "hb_size",
                        DEAL: "hb_deal",
                        SOURCE: "hb_source",
                        FORMAT: "hb_format"
                    },
                    NATIVE_KEYS: {
                        title: "hb_native_title",
                        body: "hb_native_body",
                        body2: "hb_native_body2",
                        privacyLink: "hb_native_privacy",
                        sponsoredBy: "hb_native_brand",
                        image: "hb_native_image",
                        icon: "hb_native_icon",
                        clickUrl: "hb_native_linkurl",
                        displayUrl: "hb_native_displayurl",
                        cta: "hb_native_cta",
                        rating: "hb_native_rating",
                        address: "hb_native_address",
                        downloads: "hb_native_downloads",
                        likes: "hb_native_likes",
                        phone: "hb_native_phone",
                        price: "hb_native_price",
                        salePrice: "hb_native_saleprice"
                    },
                    S2S: {
                        SRC: "s2s",
                        DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                        SYNCED_BIDDERS_KEY: "pbjsSyncs"
                    },
                    BID_STATUS: {
                        BID_TARGETING_SET: "targetingSet",
                        RENDERED: "rendered"
                    }
                }
            },
            40: function(e, n, t) {
                t.d(n, "a", function() {
                    return o
                });
                var r = t(0),
                    i = {},
                    o = {
                        incrementCounter: function(e) {
                            return i[e] = i[e] || {}, i[e].counter = Object(r.deepAccess)(i, "".concat(e, ".counter")) + 1 || 1, i[e].counter
                        },
                        getCounter: function(e) {
                            return Object(r.deepAccess)(i, "".concat(e, ".counter")) || 0
                        }
                    }
            },
            41: function(e, n, t) {
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function i(e) {
                    function n() {
                        var n = function() {
                                var n, i = [];
                                do {
                                    try {
                                        n = n ? n.parent : e;
                                        try {
                                            var a = n == e.top,
                                                s = {
                                                    referrer: n.document.referrer || null,
                                                    location: n.location.href || null,
                                                    isTop: a
                                                };
                                            a && (s = r(s, {
                                                canonicalUrl: t(n.document)
                                            })), i.push(s)
                                        } catch (a) {
                                            i.push({
                                                referrer: null,
                                                location: null,
                                                isTop: n == e.top
                                            }), Object(o.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                        }
                                    } catch (a) {
                                        return i.push({
                                            referrer: null,
                                            location: null,
                                            isTop: !1
                                        }), i
                                    }
                                } while (n != e.top);
                                return i
                            }(),
                            i = function() {
                                try {
                                    if (!e.location.ancestorOrigins) return;
                                    return e.location.ancestorOrigins
                                } catch (e) {}
                            }();
                        if (i)
                            for (var a = 0, s = i.length; a < s; a++) n[a].ancestor = i[a];
                        return n
                    }

                    function t(e) {
                        try {
                            var n = e.querySelector("link[rel='canonical']");
                            if (null !== n) return n.href
                        } catch (e) {}
                        return null
                    }
                    return function() {
                        try {
                            var e, t = n(),
                                r = t.length - 1,
                                i = null !== t[r].location || 0 < r && null !== t[r - 1].referrer,
                                o = function(e) {
                                    var n, t = [],
                                        r = null,
                                        i = null,
                                        o = null,
                                        a = null,
                                        s = null;
                                    for (n = e.length - 1; 0 <= n; n--) {
                                        try {
                                            r = e[n].location
                                        } catch (e) {}
                                        if (r) t.push(r), s || (s = r);
                                        else if (0 !== n) {
                                            i = e[n - 1];
                                            try {
                                                o = i.referrer, a = i.ancestor
                                            } catch (e) {}
                                            o ? (t.push(o), s || (s = o)) : a ? (t.push(a), s || (s = a)) : t.push(null)
                                        } else t.push(null)
                                    }
                                    return {
                                        stack: t,
                                        detectedRefererUrl: s
                                    }
                                }(t);
                            return t[t.length - 1].canonicalUrl && (e = t[t.length - 1].canonicalUrl), {
                                referer: o.detectedRefererUrl,
                                reachedTop: i,
                                numIframes: r,
                                stack: o.stack,
                                canonicalUrl: e
                            }
                        } catch (e) {}
                    }
                }
                n.a = i, t.d(n, "b", function() {
                    return a
                });
                var o = t(0),
                    a = i(window)
            },
            42: function(e, n, t) {
                t.d(n, "a", function() {
                    return a
                }), n.b = function(e, n) {
                    var t = Object(r.getBidRequest)(e.adId, n),
                        o = t && Object(r.deepAccess)(t, "mediaTypes.video"),
                        s = o && Object(r.deepAccess)(o, "context");
                    return !t || o && s !== a ? i.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(r.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : s !== a || !(!e.renderer && !t.renderer)
                }, t(8);
                var r = t(0),
                    i = t(3),
                    o = t(7),
                    a = (t.n(o), "outstream")
            },
            43: function(e, n, t) {
                n.a = function() {
                    return window.pbjs
                }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
            },
            44: function(e, n, t) {
                function r(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                            return t
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function i() {
                    return (i = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function o(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }

                function a(e, n) {
                    var t = [],
                        r = Object(s.groupBy)(e, "adUnitCode");
                    return Object.keys(r).forEach(function(e) {
                        var i = Object(s.groupBy)(r[e], "bidderCode");
                        Object.keys(i).forEach(function(e) {
                            return t.push(i[e].reduce(n))
                        })
                    }), t
                }
                n.a = a, t.d(n, "b", function() {
                    return w
                });
                var s = t(0),
                    c = t(3),
                    d = t(17),
                    u = t(30),
                    f = t(39),
                    l = t(7),
                    p = t.n(l),
                    g = t(0),
                    b = t(4),
                    m = [],
                    y = Object.keys(b.TARGETING_KEYS).map(function(e) {
                        return b.TARGETING_KEYS[e]
                    }),
                    v = function(e) {
                        return e.responseTimestamp + 1e3 * e.ttl + 1e3 > Object(s.timestamp)()
                    },
                    h = function(e) {
                        return e && (e.status && !p()([b.BID_STATUS.BID_TARGETING_SET, b.BID_STATUS.RENDERED], e.status) || !e.status)
                    },
                    w = function(e) {
                        function n(n) {
                            return "string" == typeof n ? [n] : g.isArray(n) ? n : e.getAdUnitCodes() || []
                        }

                        function t() {
                            var n = e.getBidsReceived();
                            return c.config.getConfig("useBidCache") || (n = n.filter(function(e) {
                                return S[e.adUnitCode] === e.auctionId
                            })), a(n = n.filter(function(e) {
                                return "banner" !== e.mediaType || Object(f.c)([e.width, e.height])
                            }).filter(h).filter(v), s.getOldestHighestCpmBid)
                        }

                        function u() {
                            return e.getStandardBidderAdServerTargeting().map(function(e) {
                                return e.key
                            }).concat(y).filter(s.uniques)
                        }

                        function l(e, n, t, r) {
                            return Object.keys(n.adserverTargeting).filter(w()).forEach(function(t) {
                                var r, i;
                                e.length && e.filter((i = t, function(e) {
                                    return e.adUnitCode === n.adUnitCode && e.adserverTargeting[i]
                                })).forEach((r = t, function(e) {
                                    g.isArray(e.adserverTargeting[r]) || (e.adserverTargeting[r] = [e.adserverTargeting[r]]), e.adserverTargeting[r] = e.adserverTargeting[r].concat(n.adserverTargeting[r]).filter(s.uniques), delete n.adserverTargeting[r]
                                }))
                            }), e.push(n), e
                        }

                        function w() {
                            var e = u();
                            return function(n) {
                                return -1 === e.indexOf(n)
                            }
                        }

                        function A(e) {
                            return o({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(w()).map(function(n) {
                                return o({}, n.substring(0, 20), [e.adserverTargeting[n]])
                            }))
                        }
                        var E = {},
                            S = {};
                        return E.setLatestAuctionForAdUnit = function(e, n) {
                            S[e] = n
                        }, E.resetPresetTargeting = function(t) {
                            if (Object(s.isGptPubadsDefined)()) {
                                var r = n(t),
                                    i = e.getAdUnits().filter(function(e) {
                                        return p()(r, e.code)
                                    });
                                window.googletag.pubads().getSlots().forEach(function(e) {
                                    m.forEach(function(n) {
                                        i.forEach(function(t) {
                                            t.code !== e.getAdUnitPath() && t.code !== e.getSlotElementId() || e.setTargeting(n, null)
                                        })
                                    })
                                })
                            }
                        }, E.resetPresetTargetingAST = function(e) {
                            n(e).forEach(function(e) {
                                var n = window.apntag.getTag(e);
                                if (n && n.keywords) {
                                    var t = Object.keys(n.keywords),
                                        r = {};
                                    t.forEach(function(e) {
                                        p()(m, e.toLowerCase()) || (r[e] = n.keywords[e])
                                    }), window.apntag.modifyTag(e, {
                                        keywords: r
                                    })
                                }
                            })
                        }, E.getAllTargeting = function(e) {
                            var f, v, h, w, S, _, T, I, O, j = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t(),
                                C = n(e),
                                x = (_ = C, T = j, I = E.getWinningBids(_, T), O = u(), I = I.map(function(e) {
                                    return o({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function(n) {
                                        return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === O.indexOf(n)
                                    }).reduce(function(n, t) {
                                        var i = [e.adserverTargeting[t]],
                                            a = o({}, t.substring(0, 20), i);
                                        if (t !== b.TARGETING_KEYS.DEAL) return [].concat(r(n), [a]);
                                        var s = o({}, "".concat(t, "_").concat(e.bidderCode).substring(0, 20), i);
                                        return [].concat(r(n), [a, s])
                                    }, []))
                                })).concat((w = C, S = j, S.filter(function(e) {
                                    return p()(w, e.adUnitCode)
                                }).map(function(e) {
                                    return i({}, e)
                                }).reduce(l, []).map(A).filter(function(e) {
                                    return e
                                }))).concat(c.config.getConfig("enableSendAllBids") ? (f = C, v = j, h = y.concat(d.a), a(v, s.getHighestCpm).map(function(e) {
                                    if (e.adserverTargeting && f && (g.isArray(f) && p()(f, e.adUnitCode) || "string" == typeof f && e.adUnitCode === f)) return o({}, e.adUnitCode, (n = e, h.filter(function(n) {
                                        return void 0 !== e.adserverTargeting[n]
                                    }).map(function(e) {
                                        return o({}, "".concat(e, "_").concat(n.bidderCode).substring(0, 20), [n.adserverTargeting[e]])
                                    })));
                                    var n
                                }).filter(function(e) {
                                    return e
                                })) : []);
                            return x.map(function(e) {
                                Object.keys(e).map(function(n) {
                                    e[n].map(function(e) {
                                        -1 === m.indexOf(Object.keys(e)[0]) && (m = Object.keys(e).concat(m))
                                    })
                                })
                            }), x = x.map(function(e) {
                                return o({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                                    return o({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                                }).reduce(function(e, n) {
                                    return i(n, e)
                                }, {}))
                            }).reduce(function(e, n) {
                                var t = Object.keys(n)[0];
                                return e[t] = i({}, e[t], n[t]), e
                            }, {}), C.forEach(function(e) {
                                x[e] || (x[e] = {})
                            }), x
                        }, E.setTargetingForGPT = function(e, n) {
                            window.googletag.pubads().getSlots().forEach(function(t) {
                                Object.keys(e).filter(n ? n(t) : Object(s.isAdUnitCodeMatchingSlot)(t)).forEach(function(n) {
                                    return Object.keys(e[n]).forEach(function(r) {
                                        var i = e[n][r].split(",");
                                        (i = 1 < i.length ? [i] : i).map(function(e) {
                                            return g.logMessage("Attempting to set key value for slot: ".concat(t.getSlotElementId(), " key: ").concat(r, " value: ").concat(e)), e
                                        }).forEach(function(e) {
                                            t.setTargeting(r, e)
                                        })
                                    })
                                })
                            })
                        }, E.getWinningBids = function(e) {
                            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t(),
                                i = n(e);
                            return r.filter(function(e) {
                                return p()(i, e.adUnitCode)
                            }).filter(function(e) {
                                return 0 < e.cpm
                            }).map(function(e) {
                                return e.adUnitCode
                            }).filter(s.uniques).map(function(e) {
                                return r.filter(function(n) {
                                    return n.adUnitCode === e ? n : null
                                }).reduce(s.getHighestCpm)
                            })
                        }, E.setTargetingForAst = function() {
                            var e = E.getAllTargeting();
                            try {
                                E.resetPresetTargetingAST()
                            } catch (e) {
                                g.logError("unable to reset targeting for AST" + e)
                            }
                            Object.keys(e).forEach(function(n) {
                                return Object.keys(e[n]).forEach(function(t) {
                                    if (g.logMessage("Attempting to set targeting for targetId: ".concat(n, " key: ").concat(t, " value: ").concat(e[n][t])), g.isStr(e[n][t]) || g.isArray(e[n][t])) {
                                        var r = {};
                                        t.search(/pt[0-9]/) < 0 ? r[t.toUpperCase()] = e[n][t] : r[t] = e[n][t], window.apntag.setKeywords(n, r, {
                                            overrideKeyValue: !0
                                        })
                                    }
                                })
                            })
                        }, E.isApntagDefined = function() {
                            if (window.apntag && g.isFn(window.apntag.setKeywords)) return !0
                        }, E
                    }(u.a)
            },
            45: function(e, n, t) {
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function i() {
                    return (i = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function o(e, n) {
                    function t() {
                        o--, a && 0 === o && e()
                    }

                    function r(e, r) {
                        var i = this;
                        f[r.requestId] = !0, o++;
                        var a = n.getAuctionId(),
                            u = d({
                                adUnitCode: e,
                                bid: r,
                                bidderRequest: i,
                                auctionId: a
                            });
                        "video" === u.mediaType ? c(n, u, i, t) : (s(n, u), t())
                    }

                    function i() {
                        u.add(this), a = n.getBidRequests().every(function(e) {
                            return u.has(e)
                        }), this.bids.forEach(function(e) {
                            f[e.bidId] || (n.addNoBid(e), x.emit(R.EVENTS.NO_BID, e))
                        }), a && 0 === o && e()
                    }
                    var o = 0,
                        a = !1,
                        u = new Set,
                        f = {};
                    return {
                        addBidResponse: r,
                        adapterDone: i
                    }
                }

                function a(e, n) {
                    n.timeToRespond > e.getTimeout() + h.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
                }

                function s(e, n) {
                    x.emit(R.EVENTS.BID_RESPONSE, n), e.addBidReceived(n), a(e, n)
                }

                function c(e, n, t, r) {
                    var i = !0,
                        o = Object(g.getBidRequest)(n.adId, [t]),
                        c = o && Object(g.deepAccess)(o, "mediaTypes.video"),
                        d = c && Object(g.deepAccess)(c, "context");
                    h.config.getConfig("cache.url") && d !== I.a && (n.videoCacheKey ? n.vastUrl || (j.logError("videoCacheKey specified but not required vastUrl for video bid"), i = !1) : (i = !1, Object(y.b)([n], function(t, i) {
                        t ? (j.logWarn("Failed to save to the video cache: ".concat(t, ". Video bid must be discarded.")), a(e, n)) : (n.videoCacheKey = i[0].uuid, n.vastUrl || (n.vastUrl = Object(y.a)(n.videoCacheKey)), s(e, n), r())
                    }))), i && (s(e, n), r())
                }

                function d(e) {
                    var n = e.adUnitCode,
                        t = e.bid,
                        o = e.bidderRequest,
                        a = e.auctionId,
                        s = o.start,
                        c = i({}, t, {
                            auctionId: a,
                            responseTimestamp: Object(g.timestamp)(),
                            requestTimestamp: s,
                            cpm: parseFloat(t.cpm) || 0,
                            bidder: t.bidderCode,
                            adUnitCode: n
                        });
                    c.timeToRespond = c.responseTimestamp - c.requestTimestamp, x.emit(R.EVENTS.BID_ADJUSTMENT, c);
                    var d = o.bids && S()(o.bids, function(e) {
                            return e.adUnitCode == n
                        }),
                        u = d && d.renderer;
                    u && u.url && (c.renderer = v.a.install({
                        url: u.url
                    }), c.renderer.setRender(u.render));
                    var l, p = h.config.getConfig("mediaTypePriceGranularity.".concat(t.mediaType)),
                        m = Object(b.a)(c.cpm, "object" === r(p) ? p : h.config.getConfig("customPriceBucket"), h.config.getConfig("currency.granularityMultiplier"));
                    return c.pbLg = m.low, c.pbMg = m.med, c.pbHg = m.high, c.pbAg = m.auto, c.pbDg = m.dense, c.pbCg = m.custom, c.bidderCode && (0 < c.cpm || c.dealId) && (l = f(c.bidderCode, c)), c.adserverTargeting = i(c.adserverTargeting || {}, l), c
                }

                function u(e) {
                    var n = h.config.getConfig("mediaTypePriceGranularity.".concat(e)),
                        t = "string" == typeof e && n ? "string" == typeof n ? n : "custom" : h.config.getConfig("priceGranularity"),
                        r = pbjs.bidderSettings;
                    return r[R.JSON_MAPPING.BD_SETTING_STANDARD] || (r[R.JSON_MAPPING.BD_SETTING_STANDARD] = {}), r[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] || (r[R.JSON_MAPPING.BD_SETTING_STANDARD][R.JSON_MAPPING.ADSERVER_TARGETING] = [{
                        key: R.TARGETING_KEYS.BIDDER,
                        val: function(e) {
                            return e.bidderCode
                        }
                    }, {
                        key: R.TARGETING_KEYS.AD_ID,
                        val: function(e) {
                            return e.adId
                        }
                    }, {
                        key: R.TARGETING_KEYS.PRICE_BUCKET,
                        val: function(e) {
                            return t === R.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === R.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === R.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === R.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === R.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === R.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                        }
                    }, {
                        key: R.TARGETING_KEYS.SIZE,
                        val: function(e) {
                            return e.size
                        }
                    }, {
                        key: R.TARGETING_KEYS.DEAL,
                        val: function(e) {
                            return e.dealId
                        }
                    }, {
                        key: R.TARGETING_KEYS.SOURCE,
                        val: function(e) {
                            return e.source
                        }
                    }, {
                        key: R.TARGETING_KEYS.FORMAT,
                        val: function(e) {
                            return e.mediaType
                        }
                    }]), r[R.JSON_MAPPING.BD_SETTING_STANDARD]
                }

                function f(e, n) {
                    if (!n) return {};
                    var t = {},
                        r = pbjs.bidderSettings;
                    if (r) {
                        l(t, u(n.mediaType), n), e && r[e] && r[e][R.JSON_MAPPING.ADSERVER_TARGETING] && (l(t, r[e], n), n.sendStandardTargeting = r[e].sendStandardTargeting)
                    }
                    return n.native && (t = i({}, t, Object(m.c)(n))), t
                }

                function l(e, n, t) {
                    var r = n[R.JSON_MAPPING.ADSERVER_TARGETING];
                    return t.size = t.getSize(), j._each(r, function(r) {
                        var i = r.key,
                            o = r.val;
                        if (e[i] && j.logWarn("The key: " + i + " is getting ovewritten"), j.isFn(o)) try {
                            o = o(t)
                        } catch (r) {
                            j.logError("bidmanager", "ERROR", r)
                        }(void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) && i !== R.TARGETING_KEYS.DEAL || !j.isEmptyStr(o) && null != o ? e[i] = o : j.logInfo("suppressing empty key '" + i + "' from adserver targeting")
                    }), e
                }

                function p(e, n) {
                    return e[n.adUnitCode] || (e[n.adUnitCode] = {
                        bids: []
                    }), e[n.adUnitCode].bids.push(n), e
                }
                t.d(n, "a", function() {
                    return U
                }), n.d = function(e) {
                    function n() {
                        return {
                            auctionId: S,
                            timestamp: i,
                            auctionEnd: a,
                            auctionStatus: s,
                            adUnits: m,
                            adUnitCodes: v,
                            labels: y,
                            bidderRequests: w,
                            noBids: E,
                            bidsReceived: A,
                            winningBids: z,
                            timeout: I
                        }
                    }

                    function t(e, t) {
                        if (t && clearTimeout(c), null != _) {
                            var r = [];
                            e && (j.logMessage("Auction ".concat(S, " timedOut")), l = A, b = (f = w).filter(function(e) {
                                return !e.doneCbCallCount
                            }).map(function(e) {
                                return e.bidderCode
                            }).filter(g.uniques), m = l.map(function(e) {
                                return e.bidder
                            }).filter(g.uniques), y = b.filter(function(e) {
                                return !T()(m, e)
                            }), (r = f.map(function(e) {
                                return (e.bids || []).filter(function(e) {
                                    return T()(y, e.bidder)
                                })
                            }).reduce(g.flatten, []).map(function(e) {
                                return {
                                    bidId: e.bidId,
                                    bidder: e.bidder,
                                    adUnitCode: e.adUnitCode,
                                    auctionId: e.auctionId
                                }
                            })).length && x.emit(R.EVENTS.BID_TIMEOUT, r));
                            try {
                                s = U, a = Date.now(), x.emit(R.EVENTS.AUCTION_END, n());
                                var i = v,
                                    o = A.filter(g.adUnitsFilter.bind(this, i)).reduce(p, {});
                                _.apply(pbjs, [o, e])
                            } catch (e) {
                                j.logError("Error executing bidsBackHandler", null, e)
                            } finally {
                                r.length && C.callTimedOutBidders(d, r, I);
                                var u = h.config.getConfig("userSync") || {};
                                u.enableOverride || O(u.syncDelay)
                            }
                            _ = null
                        }
                        var f, l, b, m, y
                    }

                    function r() {
                        j.logInfo("Bids Received for Auction with id: ".concat(S), A), s = U, t(!1, !0)
                    }
                    var i, a, s, c, d = e.adUnits,
                        u = e.adUnitCodes,
                        f = e.callback,
                        l = e.cbTimeout,
                        b = e.labels,
                        m = d,
                        y = b,
                        v = u,
                        w = [],
                        A = [],
                        E = [],
                        S = j.generateUUID(),
                        _ = f,
                        I = l,
                        z = [];
                    return {
                        addBidReceived: function(e) {
                            A = A.concat(e)
                        },
                        addNoBid: function(e) {
                            E = E.concat(e)
                        },
                        executeCallback: t,
                        callBids: function() {
                            function e(e) {
                                var n = !0,
                                    t = h.config.getConfig("maxRequestsPerOrigin") || k;
                                return e.bidRequests.some(function(e) {
                                    var r = 1,
                                        i = void 0 !== e.src && e.src === R.S2S.SRC ? "s2s" : e.bidderCode;
                                    return N[i] && (!1 === N[i].SRA && (r = Math.min(e.bids.length, t)), D[N[i].origin] + r > t && (n = !1)), !n
                                }), n && e.run(), n
                            }

                            function a(e, n) {
                                void 0 === e[n] ? e[n] = 1 : e[n]++
                            }
                            var d = this;
                            s = B, i = Date.now();
                            var u = C.makeBidRequests(m, i, S, I, y);
                            j.logInfo("Bids Requested for Auction with id: ".concat(S), u), u.forEach(function(e) {
                                var n;
                                n = e, w = w.concat(n)
                            });
                            var f = {};
                            if (u.length < 1) j.logWarn("No valid bid requests returned for auction"), r();
                            else {
                                var l = {
                                    bidRequests: u,
                                    run: function() {
                                        var i, l;
                                        i = t.bind(null, !0), l = setTimeout(i, I), c = l, s = P, x.emit(R.EVENTS.AUCTION_INIT, n());
                                        var p = o(r, d);
                                        C.callBids(m, u, function() {
                                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                            M.apply({
                                                dispatch: p.addBidResponse,
                                                bidderRequest: this
                                            }, n)
                                        }, p.adapterDone, {
                                            request: function(e, n) {
                                                a(D, n), a(f, e), N[e] || (N[e] = {
                                                    SRA: !0,
                                                    origin: n
                                                }), 1 < f[e] && (N[e].SRA = !1)
                                            },
                                            done: function(n) {
                                                D[n]--, q[0] && e(q[0]) && q.shift()
                                            }
                                        }, I)
                                    }
                                };
                                e(l) || (j.logWarn("queueing auction due to limited endpoint capacity"), q.push(l))
                            }
                        },
                        addWinningBid: function(e) {
                            z = z.concat(e), C.callBidWonBidder(e.bidder, e, d)
                        },
                        setBidTargeting: function(e) {
                            C.callSetTargetingBidder(e.bidder, e)
                        },
                        getWinningBids: function() {
                            return z
                        },
                        getTimeout: function() {
                            return I
                        },
                        getAuctionId: function() {
                            return S
                        },
                        getAuctionStatus: function() {
                            return s
                        },
                        getAdUnits: function() {
                            return m
                        },
                        getAdUnitCodes: function() {
                            return v
                        },
                        getBidRequests: function() {
                            return w
                        },
                        getBidsReceived: function() {
                            return A
                        },
                        getNoBids: function() {
                            return E
                        }
                    }
                }, t.d(n, "b", function() {
                    return M
                }), n.c = u;
                var g = t(0),
                    b = t(31),
                    m = t(17),
                    y = t(192),
                    v = t(12),
                    h = t(3),
                    w = t(18),
                    A = t(20),
                    E = t(10),
                    S = t.n(E),
                    _ = t(7),
                    T = t.n(_),
                    I = t(42),
                    O = w.a.syncUsers,
                    j = t(0),
                    C = t(8).default,
                    x = t(9),
                    R = t(4),
                    B = "started",
                    P = "inProgress",
                    U = "completed";
                x.on(R.EVENTS.BID_ADJUSTMENT, function(e) {
                    ! function(e) {
                        var n, t = e.bidderCode,
                            r = e.cpm;
                        if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? n = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (n = pbjs.bidderSettings[R.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), n)) try {
                            r = n(e.cpm, i({}, e))
                        } catch (e) {
                            j.logError("Error during bid adjustment", "bidmanager.js", e)
                        }
                        0 <= r && (e.cpm = r)
                    }(e)
                });
                var k = 4,
                    D = {},
                    N = {},
                    q = [],
                    M = Object(A.a)("async", function(e, n) {
                        this.dispatch.call(this.bidderRequest, e, n)
                    }, "addBidResponse")
            },
            477: function(e, n, t) {
                e.exports = t(478)
            },
            478: function(e, n, t) {
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function i() {
                    return (i = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function o(e, n, t) {
                    e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = n, e.defaultView.frameElement.height = t)
                }

                function a(e) {
                    var n = b.a[e]().filter(u.adUnitsFilter.bind(this, b.a.getAdUnitCodes())),
                        t = b.a.getLastAuctionId();
                    return n.map(function(e) {
                        return e.adUnitCode
                    }).filter(u.uniques).map(function(e) {
                        return n.filter(function(n) {
                            return n.auctionId === t && n.adUnitCode === e
                        })
                    }).filter(function(e) {
                        return e && e[0] && e[0].adUnitCode
                    }).map(function(e) {
                        return n = {}, t = e[0].adUnitCode, r = {
                            bids: e.map(u.removeRequestId)
                        }, t in n ? Object.defineProperty(n, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[t] = r, n;
                        var n, t, r
                    }).reduce(function(e, n) {
                        return i(e, n)
                    }, {})
                }

                function s(e, n, t) {
                    var r = {};
                    r.reason = e, r.message = n, t && (r.bid = t), I.logError(n), j.emit(k, r)
                }

                function c(e) {
                    e.forEach(function(e) {
                        if (void 0 === e.called) try {
                            e.call(), e.called = !0
                        } catch (e) {
                            I.logError("Error processing command :", "prebid.js", e)
                        }
                    })
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var d = t(43),
                    u = t(0),
                    f = t(479),
                    l = t(18),
                    p = t(29),
                    g = t(3),
                    b = t(30),
                    m = t(44),
                    y = t(20),
                    v = t(480),
                    h = t(7),
                    w = t.n(h),
                    A = t(40),
                    E = t(12),
                    S = t(16),
                    _ = Object(d.a)(),
                    T = t(4),
                    I = t(0),
                    O = t(8).default,
                    j = t(9),
                    C = l.a.triggerUserSyncs,
                    x = T.EVENTS,
                    R = x.ADD_AD_UNITS,
                    B = x.BID_WON,
                    P = x.REQUEST_BIDS,
                    U = x.SET_TARGETING,
                    k = x.AD_RENDER_FAILED,
                    D = T.AD_RENDER_FAILED_REASON,
                    N = D.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                    q = D.NO_AD,
                    M = D.EXCEPTION,
                    z = D.CANNOT_FIND_AD,
                    G = D.MISSING_DOC_OR_ADID,
                    W = {
                        bidWon: function(e) {
                            var n = b.a.getBidsRequested().map(function(e) {
                                return e.bids.map(function(e) {
                                    return e.adUnitCode
                                })
                            }).reduce(u.flatten).filter(u.uniques);
                            return !!I.contains(n, e) || void I.logError('The "' + e + '" placement is not defined.')
                        }
                    };
                Object(v.a)(), _.bidderSettings = _.bidderSettings || {}, _.libLoaded = !0, _.version = "v2.0.0", I.logInfo("Prebid.js v2.0.0 loaded"), _.adUnits = _.adUnits || [], _.triggerUserSyncs = C, _.getAdserverTargetingForAdUnitCodeStr = function(e) {
                    if (I.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                        var n = _.getAdserverTargetingForAdUnitCode(e);
                        return I.transformAdServerTargetingObj(n)
                    }
                    I.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                }, _.getAdserverTargetingForAdUnitCode = function(e) {
                    return _.getAdserverTargeting(e)[e]
                }, _.getAdserverTargeting = function(e) {
                    return I.logInfo("Invoking pbjs.getAdserverTargeting", arguments), m.b.getAllTargeting(e)
                }, _.getNoBids = function() {
                    return I.logInfo("Invoking pbjs.getNoBids", arguments), a("getNoBids")
                }, _.getBidResponses = function() {
                    return I.logInfo("Invoking pbjs.getBidResponses", arguments), a("getBidsReceived")
                }, _.getBidResponsesForAdUnitCode = function(e) {
                    return {
                        bids: b.a.getBidsReceived().filter(function(n) {
                            return n.adUnitCode === e
                        }).map(u.removeRequestId)
                    }
                }, _.setTargetingForGPTAsync = function(e, n) {
                    if (I.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), Object(u.isGptPubadsDefined)()) {
                        var t = m.b.getAllTargeting(e);
                        m.b.resetPresetTargeting(e), m.b.setTargetingForGPT(t, n), Object.keys(t).forEach(function(e) {
                            Object.keys(t[e]).forEach(function(n) {
                                "hb_adid" === n && b.a.setStatusForBids(t[e][n], T.BID_STATUS.BID_TARGETING_SET)
                            })
                        }), j.emit(U, t)
                    } else I.logError("window.googletag is not defined on the page")
                }, _.setTargetingForAst = function() {
                    I.logInfo("Invoking pbjs.setTargetingForAn", arguments), m.b.isApntagDefined() ? (m.b.setTargetingForAst(), j.emit(U, m.b.getAllTargeting())) : I.logError("window.apntag is not defined on the page")
                }, _.renderAd = function(e, n) {
                    if (I.logInfo("Invoking pbjs.renderAd", arguments), I.logMessage("Calling renderAd with adId :" + n), e && n) try {
                        var t = b.a.findBidByAdId(n);
                        if (t) {
                            t.status = T.BID_STATUS.RENDERED, t.ad = I.replaceAuctionPrice(t.ad, t.cpm), t.adUrl = I.replaceAuctionPrice(t.adUrl, t.cpm), b.a.addWinningBid(t), j.emit(B, t);
                            var r = t.height,
                                i = t.width,
                                a = t.ad,
                                c = t.mediaType,
                                d = t.adUrl,
                                u = t.renderer,
                                f = document.createComment("Creative ".concat(t.creativeId, " served by ").concat(t.bidder, " Prebid.js Header Bidding"));
                            if (I.insertElement(f, e, "body"), Object(E.c)(u)) Object(E.b)(u, t);
                            else if (e === document && !I.inIframe() || "video" === c) {
                                var l = "Error trying to write ad. Ad render call ad id ".concat(n, " was prevented from writing to the main document.");
                                s(N, l, t)
                            } else if (a) e.write(a), e.close(), o(e, i, r), I.callBurl(t);
                            else if (d) {
                                var p = I.createInvisibleIframe();
                                p.height = r, p.width = i, p.style.display = "inline", p.style.overflow = "hidden", p.src = d, I.insertElement(p, e, "body"), o(e, i, r), I.callBurl(t)
                            } else {
                                var g = "Error trying to write ad. No ad for bid response id: ".concat(n);
                                s(q, g, t)
                            }
                        } else {
                            var m = "Error trying to write ad. Cannot find ad by given id : ".concat(n);
                            s(z, m)
                        }
                    } catch (e) {
                        var y = "Error trying to write ad Id :".concat(n, " to the page:").concat(e.message);
                        s(M, y)
                    } else {
                        var v = "Error trying to write ad Id :".concat(n, " to the page. Missing document or adId");
                        s(G, v)
                    }
                }, _.removeAdUnit = function(e) {
                    if (I.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
                        for (var n = 0; n < _.adUnits.length; n++) _.adUnits[n].code === e && _.adUnits.splice(n, 1)
                }, _.requestBids = Object(y.a)("async", function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.bidsBackHandler,
                        t = e.timeout,
                        r = e.adUnits,
                        i = e.adUnitCodes,
                        o = e.labels;
                    j.emit(P);
                    var a = t || g.config.getConfig("bidderTimeout");
                    if (r = r || _.adUnits, I.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
                            return w()(i, e.code)
                        }) : i = r && r.map(function(e) {
                            return e.code
                        }), r.forEach(function(e) {
                            var n = Object.keys(e.mediaTypes || {
                                    banner: "banner"
                                }),
                                t = e.bids.map(function(e) {
                                    return e.bidder
                                }),
                                r = O.bidderRegistry,
                                i = g.config.getConfig("s2sConfig"),
                                o = i && i.bidders,
                                a = o ? t.filter(function(e) {
                                    return !w()(o, e)
                                }) : t;
                            e.transactionId = I.generateUUID(), a.forEach(function(t) {
                                var i = r[t],
                                    o = i && i.getSpec && i.getSpec(),
                                    a = o && o.supportedMediaTypes || ["banner"];
                                n.some(function(e) {
                                    return w()(a, e)
                                }) || (I.logWarn(I.unsupportedBidderMessage(e, t)), e.bids = e.bids.filter(function(e) {
                                    return e.bidder !== t
                                }))
                            }), A.a.incrementCounter(e.code)
                        }), r && 0 !== r.length) {
                        var s = b.a.createAuction({
                            adUnits: r,
                            adUnitCodes: i,
                            callback: n,
                            cbTimeout: a,
                            labels: o
                        });
                        return i.forEach(function(e) {
                            return m.b.setLatestAuctionForAdUnit(e, s.getAuctionId())
                        }), s.callBids(), s
                    }
                    if (I.logMessage("No adUnits configured. No bids requested."), "function" == typeof n) try {
                        n()
                    } catch (e) {
                        I.logError("Error executing bidsBackHandler", null, e)
                    }
                }), _.addAdUnits = function(e) {
                    I.logInfo("Invoking pbjs.addAdUnits", arguments), I.isArray(e) ? _.adUnits.push.apply(_.adUnits, e) : "object" === r(e) && _.adUnits.push(e), j.emit(R)
                }, _.onEvent = function(e, n, t) {
                    I.logInfo("Invoking pbjs.onEvent", arguments), I.isFn(n) ? !t || W[e].call(null, t) ? j.on(e, n, t) : I.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : I.logError('The event handler provided is not a function and was not set on event "' + e + '".')
                }, _.offEvent = function(e, n, t) {
                    I.logInfo("Invoking pbjs.offEvent", arguments), t && !W[e].call(null, t) || j.off(e, n, t)
                }, _.registerBidAdapter = function(e, n) {
                    I.logInfo("Invoking pbjs.registerBidAdapter", arguments);
                    try {
                        O.registerBidAdapter(e(), n)
                    } catch (e) {
                        I.logError("Error registering bidder adapter : " + e.message)
                    }
                }, _.registerAnalyticsAdapter = function(e) {
                    I.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
                    try {
                        O.registerAnalyticsAdapter(e)
                    } catch (e) {
                        I.logError("Error registering analytics adapter : " + e.message)
                    }
                }, _.createBid = function(e) {
                    return I.logInfo("Invoking pbjs.createBid", arguments), Object(S.a)(e)
                }, _.loadScript = function(e, n, t) {
                    I.logInfo("Invoking pbjs.loadScript", arguments), Object(p.b)(e, n, t)
                }, _.enableAnalytics = function(e) {
                    e && !I.isEmpty(e) ? (I.logInfo("Invoking pbjs.enableAnalytics for: ", e), O.enableAnalytics(e)) : I.logError("pbjs.enableAnalytics should be called with option {}")
                }, _.aliasBidder = function(e, n) {
                    I.logInfo("Invoking pbjs.aliasBidder", arguments), e && n ? O.aliasBidAdapter(e, n) : I.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
                }, _.getAllWinningBids = function() {
                    return b.a.getAllWinningBids().map(u.removeRequestId)
                }, _.getAllPrebidWinningBids = function() {
                    return b.a.getBidsReceived().filter(function(e) {
                        return e.status === T.BID_STATUS.BID_TARGETING_SET
                    }).map(u.removeRequestId)
                }, _.getHighestCpmBids = function(e) {
                    var n = Object(m.a)(b.a.getBidsReceived(), u.getLatestHighestCpmBid);
                    return m.b.getWinningBids(e, n).map(u.removeRequestId)
                }, _.markWinningBidAsUsed = function(e) {
                    var n = [];
                    e.adUnitCode && e.adId ? n = b.a.getBidsReceived().filter(function(n) {
                        return n.adId === e.adId && n.adUnitCode === e.adUnitCode
                    }) : e.adUnitCode ? n = m.b.getWinningBids(e.adUnitCode) : e.adId ? n = b.a.getBidsReceived().filter(function(n) {
                        return n.adId === e.adId
                    }) : I.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < n.length && (n[0].status = T.BID_STATUS.RENDERED)
                }, _.getConfig = g.config.getConfig, _.setConfig = g.config.setConfig, _.que.push(function() {
                    return Object(f.a)()
                }), _.cmd.push = function(e) {
                    if ("function" == typeof e) try {
                        e.call()
                    } catch (e) {
                        I.logError("Error processing command :", e.message, e.stack)
                    } else I.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
                }, _.que.push = _.cmd.push, _.processQueue = function() {
                    y.a.ready(), c(_.que), c(_.cmd)
                }, n.default = _
            },
            479: function(e, n, t) {
                function r(e) {
                    var n, t, r, i, s, u, g, b, m, y = e.message ? "message" : "data",
                        v = {};
                    try {
                        v = JSON.parse(e[y])
                    } catch (e) {
                        return
                    }
                    if (v && v.adId) {
                        var h = f()(d.a.getBidsReceived(), function(e) {
                            return e.adId === v.adId
                        });
                        "Prebid Request" === v.message && (n = h, t = v.adServerDomain, r = e.source, i = n.adId, s = n.ad, u = n.adUrl, g = n.width, b = n.height, m = n.renderer, Object(l.c)(m) ? Object(l.b)(m, n) : i && (function(e) {
                            function n(e) {
                                var n, r, i, o, a = (n = t, window.googletag ? (o = n, f()(window.googletag.pubads().getSlots().filter(Object(c.isSlotMatchingAdUnitCode)(o)), function(e) {
                                        return e
                                    }).getSlotElementId()) : window.apntag ? (r = n, (i = window.apntag.getTag(r)) && i.targetId) : n),
                                    s = document.getElementById(a);
                                return s && s.querySelector(e)
                            }
                            var t = e.adUnitCode,
                                r = e.width,
                                i = e.height;
                            ["div", "iframe"].forEach(function(e) {
                                var o = n(e);
                                if (o) {
                                    var a = o.style;
                                    a.width = r + "px", a.height = i + "px"
                                } else Object(c.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."))
                            })
                        }(n), r.postMessage(JSON.stringify({
                            message: "Prebid Response",
                            ad: s,
                            adUrl: u,
                            adId: i,
                            width: g,
                            height: b
                        }), t)), d.a.addWinningBid(h), o.a.emit(p, h)), "Prebid Native" === v.message && (Object(a.b)(v, h), d.a.addWinningBid(h), o.a.emit(p, h))
                    }
                }
                n.a = function() {
                    addEventListener("message", r, !1)
                };
                var i = t(9),
                    o = t.n(i),
                    a = t(17),
                    s = t(4),
                    c = (t.n(s), t(0)),
                    d = t(30),
                    u = t(10),
                    f = t.n(u),
                    l = t(12),
                    p = s.EVENTS.BID_WON
            },
            48: function(e, n, t) {
                var r = t(14),
                    i = t(34)(5),
                    o = "find",
                    a = !0;
                o in [] && Array(1)[o](function() {
                    a = !1
                }), r(r.P + r.F * a, "Array", {
                    find: function(e) {
                        return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                    }
                }), t(27)(o)
            },
            480: function(e, n, t) {
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function i(e) {
                    Object(u.logMessage)("DEBUG: " + e)
                }

                function o() {
                    f.b.getHooks({
                        hook: c
                    }).remove()
                }

                function a(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    d.config.setConfig({
                        debug: !0
                    }), i("bidder overrides enabled".concat(n ? " from session" : "")), o(), c = function(e, n, t) {
                        if (Array.isArray(this.bidders) && -1 === this.bidders.indexOf(t.bidderCode)) return o = "bidder '".concat(t.bidderCode, "' excluded from auction by bidder overrides"), void Object(u.logWarn)("DEBUG: " + o);
                        var o;
                        Array.isArray(this.bids) && this.bids.forEach(function(e) {
                            e.bidder && e.bidder !== t.bidderCode || e.adUnitCode && e.adUnitCode !== n || (t = r({}, t), Object.keys(e).filter(function(e) {
                                return -1 === ["bidder", "adUnitCode"].indexOf(e)
                            }).forEach(function(r) {
                                var o = e[r];
                                i("bidder overrides changed '".concat(n, "/").concat(t.bidderCode, "' bid.").concat(r, " from '").concat(t[r], "' to '").concat(o, "'")), t[r] = o
                            }))
                        }), e(n, t)
                    }.bind(e), f.b.before(c, 5)
                }

                function s(e) {
                    if (e.enabled) {
                        try {
                            window.sessionStorage.setItem(l, JSON.stringify(e))
                        } catch (e) {}
                        a(e)
                    } else {
                        o(), i("bidder overrides disabled");
                        try {
                            window.sessionStorage.removeItem(l)
                        } catch (e) {}
                    }
                }
                n.a = function(e) {
                    var n;
                    try {
                        e = e || window.sessionStorage, n = JSON.parse(e.getItem(l))
                    } catch (e) {}
                    n && a(n, !0)
                };
                var c, d = t(3),
                    u = t(0),
                    f = t(45),
                    l = "pbjs:debugging";
                d.config.getConfig("debugging", function(e) {
                    return s(e.debugging)
                })
            },
            49: function(e, n) {
                e.exports = function(e) {
                    if ("function" != typeof e) throw TypeError(e + " is not a function!");
                    return e
                }
            },
            50: function(e, n, t) {
                var r = t(51),
                    i = t(56);
                e.exports = t(23) ? function(e, n, t) {
                    return r.f(e, n, i(1, t))
                } : function(e, n, t) {
                    return e[n] = t, e
                }
            },
            51: function(e, n, t) {
                var r = t(52),
                    i = t(53),
                    o = t(55),
                    a = Object.defineProperty;
                n.f = t(23) ? Object.defineProperty : function(e, n, t) {
                    if (r(e), n = o(n, !0), r(t), i) try {
                        return a(e, n, t)
                    } catch (e) {}
                    if ("get" in t || "set" in t) throw TypeError("Accessors not supported!");
                    return "value" in t && (e[n] = t.value), e
                }
            },
            52: function(e, n, t) {
                var r = t(15);
                e.exports = function(e) {
                    if (!r(e)) throw TypeError(e + " is not an object!");
                    return e
                }
            },
            53: function(e, n, t) {
                e.exports = !t(23) && !t(33)(function() {
                    return 7 != Object.defineProperty(t(54)("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            54: function(e, n, t) {
                var r = t(15),
                    i = t(19).document,
                    o = r(i) && r(i.createElement);
                e.exports = function(e) {
                    return o ? i.createElement(e) : {}
                }
            },
            55: function(e, n, t) {
                var r = t(15);
                e.exports = function(e, n) {
                    if (!r(e)) return e;
                    var t, i;
                    if (n && "function" == typeof(t = e.toString) && !r(i = t.call(e))) return i;
                    if ("function" == typeof(t = e.valueOf) && !r(i = t.call(e))) return i;
                    if (!n && "function" == typeof(t = e.toString) && !r(i = t.call(e))) return i;
                    throw TypeError("Can't convert object to primitive value")
                }
            },
            56: function(e, n) {
                e.exports = function(e, n) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: n
                    }
                }
            },
            57: function(e, n) {
                var t = {}.hasOwnProperty;
                e.exports = function(e, n) {
                    return t.call(e, n)
                }
            },
            58: function(e, n, t) {
                var r = t(25);
                e.exports = function(e) {
                    return Object(r(e))
                }
            },
            59: function(e, n, t) {
                var r = t(60);
                e.exports = function(e, n) {
                    return new(r(e))(n)
                }
            },
            6: function(e, n, t) {
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function o() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.request,
                        o = n.done;
                    return function(n, u, f) {
                        var l = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                        try {
                            var p, g = l.method || (f ? "POST" : "GET"),
                                b = document.createElement("a");
                            b.href = n;
                            var m = "object" === i(u) && null !== u ? u : {
                                success: function() {
                                    c.logMessage("xhr success")
                                },
                                error: function(e) {
                                    c.logError("xhr error", null, e)
                                }
                            };
                            if ("function" == typeof u && (m.success = u), (p = new window.XMLHttpRequest).onreadystatechange = function() {
                                    if (p.readyState === d) {
                                        "function" == typeof o && o(b.origin);
                                        var e = p.status;
                                        200 <= e && e < 300 || 304 === e ? m.success(p.responseText, p) : m.error(p.statusText, p)
                                    }
                                }, s.config.getConfig("disableAjaxTimeout") || (p.ontimeout = function() {
                                    c.logError("  xhr timeout after ", p.timeout, "ms")
                                }), "GET" === g && f) {
                                var y = Object(a.c)(n, l);
                                r(y.search, f), n = Object(a.a)(y)
                            }
                            p.open(g, n, !0), s.config.getConfig("disableAjaxTimeout") || (p.timeout = e), l.withCredentials && (p.withCredentials = !0), c._each(l.customHeaders, function(e, n) {
                                p.setRequestHeader(n, e)
                            }), l.preflight && p.setRequestHeader("X-Requested-With", "XMLHttpRequest"), p.setRequestHeader("Content-Type", l.contentType || "text/plain"), "function" == typeof t && t(b.origin), "POST" === g && f ? p.send(f) : p.send()
                        } catch (n) {
                            c.logError("xhr construction", n)
                        }
                    }
                }
                t.d(n, "a", function() {
                    return u
                }), n.b = o;
                var a = t(11),
                    s = t(3),
                    c = t(0),
                    d = 4,
                    u = o()
            },
            60: function(e, n, t) {
                var r = t(15),
                    i = t(38),
                    o = t(26)("species");
                e.exports = function(e) {
                    var n;
                    return i(e) && ("function" != typeof(n = e.constructor) || n !== Array && !i(n.prototype) || (n = void 0), r(n) && null === (n = n[o]) && (n = void 0)), void 0 === n ? Array : n
                }
            },
            61: function(e, n, t) {
                var r = t(13),
                    i = t(19),
                    o = "__core-js_shared__",
                    a = i[o] || (i[o] = {});
                (e.exports = function(e, n) {
                    return a[e] || (a[e] = void 0 !== n ? n : {})
                })("versions", []).push({
                    version: r.version,
                    mode: t(62) ? "pure" : "global",
                    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
                })
            },
            62: function(e, n) {
                e.exports = !0
            },
            63: function(e, n) {
                var t = 0,
                    r = Math.random();
                e.exports = function(e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + r).toString(36))
                }
            },
            64: function(e, n, t) {
                var r = t(14),
                    i = t(65)(!0);
                r(r.P, "Array", {
                    includes: function(e) {
                        return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
                    }
                }), t(27)("includes")
            },
            65: function(e, n, t) {
                var r = t(66),
                    i = t(36),
                    o = t(67);
                e.exports = function(e) {
                    return function(n, t, a) {
                        var s, c = r(n),
                            d = i(c.length),
                            u = o(a, d);
                        if (e && t != t) {
                            for (; u < d;)
                                if ((s = c[u++]) != s) return !0
                        } else
                            for (; u < d; u++)
                                if ((e || u in c) && c[u] === t) return e || u || 0;
                        return !e && -1
                    }
                }
            },
            66: function(e, n, t) {
                var r = t(35),
                    i = t(25);
                e.exports = function(e) {
                    return r(i(e))
                }
            },
            67: function(e, n, t) {
                var r = t(37),
                    i = Math.max,
                    o = Math.min;
                e.exports = function(e, n) {
                    return (e = r(e)) < 0 ? i(e + n, 0) : o(e, n)
                }
            },
            68: function(e, n) {
                function t(e) {
                    return Array.prototype.slice.call(arguments, 1).reduce(function(e, n) {
                        return n && Object.keys(n).forEach(function(t) {
                            e[t] = n[t]
                        }), e
                    }, e)
                }

                function r(e) {
                    for (var n; n = e.shift();) n()
                }

                function i(e) {
                    function n(e, n) {
                        return "function" == typeof e ? o.call(null, "sync", e, n) : "string" == typeof e && "function" == typeof n ? o.apply(null, arguments) : "object" == (void 0 === e ? "undefined" : _typeof(e)) ? function(e, n, t) {
                            var r = !0;
                            void 0 === n && (n = Object.getOwnPropertyNames(e), r = !1);
                            for (var i = {}, a = ["constructor"];
                                (n = n.filter(function(n) {
                                    return "function" == typeof e[n] && !a.includes(n) && !n.match(/^_/)
                                })).forEach(function(n) {
                                    var t = n.split(":"),
                                        r = t[0],
                                        a = t[1] || "sync";
                                    if (!i[r]) {
                                        var s = e[r];
                                        i[r] = e[r] = o(a, s)
                                    }
                                }), e = Object.getPrototypeOf(e), r && e !== s;);
                            return t && (d[t] = i), i
                        }.apply(null, arguments) : void 0
                    }

                    function o(n, r, o) {
                        function a() {
                            function e(e, t, r) {
                                for (var i = e.length; 0 < i--;) 0 !== i || "async" === n && "a" === t ? (r = t + "[" + i + "].hook.bind(h," + r + ")", "async" === n && "a" === t && 0 === i || (r = "n(" + r + ",e)")) : r = t + "[" + i + "].hook.apply(h,[" + r + ("b" === t ? "].concat(g))" : ",r])");
                                return r
                            }
                            if (m.length || y.length) {
                                var r;
                                if ("sync" === n) {
                                    var i, o = "r=t.apply(h," + (m.length ? "arguments" : "g") + ")";
                                    y.length && (i = e(y, "a", "n(function extract(s){r=s},e)")), m.length && (o = e(m, "b", "n(function extract(){" + o + ";" + i + "},e)"), i = ""), r = ["var r,e={bail:function(a){r=a}}", o, i, "return r"].join(";")
                                } else "async" === n && (r = "t.apply(h," + (m.length ? "Array.prototype.slice.call(arguments)" : "g") + ".concat(" + e(y, "a", "z?n(z,e):[]") + "))", m.length && (r = "n(function partial(){" + r + "},e)"), r = ["var z", 'typeof g[g.length-1]==="function"&&(z=g.pop().bind(null))', "var e={bail:z}", e(m, "b", r)].join(";"));
                                g = new Function("b,a,n,t,h,g", r).bind(null, m, y, Object.assign || t)
                            } else g = void 0;
                            s()
                        }

                        function s() {
                            !c && ("sync" !== n || e.ready & i.SYNC) && ("async" !== n || e.ready & i.ASYNC) ? "sync" !== n && e.ready & i.QUEUE ? A.apply = function() {
                                var e = arguments;
                                u.push(function() {
                                    b.apply(e[1], e[2])
                                })
                            } : A.apply = function() {
                                throw "hooked function not ready"
                            } : A.apply = g
                        }

                        function l(e) {
                            var n = m.concat(y);
                            return "object" == (void 0 === e ? "undefined" : _typeof(e)) && (n = n.filter(function(n) {
                                return Object.keys(e).every(function(t) {
                                    return n[t] === e[t]
                                })
                            })), t(n, {
                                remove: function() {
                                    return n.forEach(function(e) {
                                        e.remove()
                                    }), b
                                }
                            })
                        }

                        function p(e, n) {
                            var t = {
                                hook: e,
                                type: this.type,
                                priority: n || 10,
                                remove: function() {
                                    var e = this.indexOf(t); - 1 !== e && (this.splice(e, 1), a())
                                }.bind(this)
                            };
                            return this.push(t), this.sort(function(e, n) {
                                return n.priority - e.priority
                            }), a(), b
                        }
                        if (r.__funHook) {
                            if (r.__funHook === n) return o && (d[o] = r), r;
                            throw "attempting to wrap func with different hook types"
                        }
                        var g, b, m = [];
                        m.type = "before";
                        var y = [];
                        y.type = "after";
                        var v = p.bind(m),
                            h = p.bind(y),
                            w = {
                                __funHook: n,
                                before: v,
                                after: h,
                                getHooks: l,
                                removeAll: function() {
                                    return l().remove()
                                },
                                fn: r
                            },
                            A = {
                                get: function(e, n) {
                                    return w[n] || Reflect.get.apply(Reflect, arguments)
                                }
                            };
                        return c || f.push(s), e.useProxy ? b = new Proxy(r, A) : t(b = function() {
                            return A.apply ? A.apply(r, this, Array.prototype.slice.call(arguments)) : r.apply(this, arguments)
                        }, w), o && (d[o] = b), s(), b
                    }
                    var c, d = {},
                        u = [],
                        f = [];
                    return (e = t({}, a, e)).ready ? n.ready = function() {
                        c = !0, r(f), r(u)
                    } : c = !0, n.hooks = d, n
                }
                i.SYNC = 1, i.ASYNC = 2, i.QUEUE = 4;
                var o = "function" == typeof Proxy,
                    a = Object.freeze({
                        useProxy: o,
                        ready: 0
                    }),
                    s = Object.getPrototypeOf({});
                e.exports = i
            },
            69: function(e, n) {
                e.exports = function e(n) {
                    var t = Array.isArray(n) ? [] : {};
                    for (var r in n) {
                        var i = n[r];
                        t[r] = i && "object" == (void 0 === i ? "undefined" : _typeof(i)) ? e(i) : i
                    }
                    return t
                }
            },
            7: function(e, n, t) {
                t(64), e.exports = t(13).Array.includes
            },
            8: function(e, n, t) {
                function r(e, n) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, n) {
                        var t = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return t
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function i() {
                    return (i = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function o(e) {
                    var n = e.bidderCode,
                        t = e.auctionId,
                        r = e.bidderRequestId,
                        o = e.adUnits,
                        a = e.labels,
                        s = e.src;
                    return o.reduce(function(e, o) {
                        var c = Object(f.b)(Object(f.a)(o, a), o.mediaTypes, o.sizes),
                            d = c.active,
                            p = c.mediaTypes,
                            g = c.filterResults;
                        return d ? g && E.logInfo('Size mapping filtered adUnit "'.concat(o.code, '" banner sizes from '), g.before, "to ", g.after) : E.logInfo('Size mapping disabled adUnit "'.concat(o.code, '"')), d && e.push(o.bids.filter(function(e) {
                            return e.bidder === n
                        }).reduce(function(e, n) {
                            var c = o.nativeParams || E.deepAccess(o, "mediaTypes.native");
                            c && (n = i({}, n, {
                                nativeParams: Object(l.f)(c)
                            })), n = i({}, n, Object(u.getDefinedParams)(o, ["mediaType", "renderer"]));
                            var d = Object(f.b)(Object(f.a)(n, a), p),
                                g = d.active,
                                b = d.mediaTypes,
                                m = d.filterResults;
                            return g ? m && E.logInfo('Size mapping filtered adUnit "'.concat(o.code, '" bidder "').concat(n.bidder, '" banner sizes from '), m.before, "to ", m.after) : E.logInfo('Size mapping deactivated adUnit "'.concat(o.code, '" bidder "').concat(n.bidder, '"')), E.isValidMediaTypes(b) ? n = i({}, n, {
                                mediaTypes: b
                            }) : E.logError("mediaTypes is not correctly configured for adunit ".concat(o.code)), g && e.push(i({}, n, {
                                adUnitCode: o.code,
                                transactionId: o.transactionId,
                                sizes: E.deepAccess(b, "banner.sizes") || [],
                                bidId: n.bid_id || E.getUniqueIdentifierStr(),
                                bidderRequestId: r,
                                auctionId: t,
                                src: s,
                                bidRequestsCount: w.a.getCounter(o.code)
                            })), e
                        }, [])), e
                    }, []).reduce(u.flatten, []).filter(function(e) {
                        return "" !== e
                    })
                }

                function a(e) {
                    function n(e) {
                        return Array.isArray(e) && 2 === e.length && E.isInteger(e[0]) && E.isInteger(e[1])
                    }
                    return e.forEach(function(e) {
                        var t = e.mediaTypes,
                            r = E.getAdUnitSizes(e);
                        if (t && t.banner) {
                            var i = t.banner;
                            i.sizes ? (i.sizes = r, e.sizes = r) : (E.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                        } else e.sizes && (E.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = r);
                        if (t && t.video) {
                            var o = t.video;
                            if (o.playerSize)
                                if (Array.isArray(o.playerSize) && 1 === o.playerSize.length && o.playerSize.every(n)) e.sizes = o.playerSize;
                                else if (n(o.playerSize)) {
                                var a = [];
                                a.push(o.playerSize), E.logInfo("Transforming video.playerSize from ".concat(o.playerSize, " to ").concat(a, " so it's in the proper format.")), e.sizes = o.playerSize = a
                            } else E.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                        }
                        if (t && t.native) {
                            var s = t.native;
                            s.image && s.image.sizes && !Array.isArray(s.image.sizes) && (E.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), s.image && s.image.aspect_ratios && !Array.isArray(s.image.aspect_ratios) && (E.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), s.icon && s.icon.sizes && !Array.isArray(s.icon.sizes) && (E.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                        }
                    }), e
                }

                function s() {
                    return j && j.enabled && j.testing && d
                }

                function c(e, n, t) {
                    try {
                        var r = I[e].getSpec();
                        r && r[n] && "function" == typeof r[n] && (E.logInfo("Invoking ".concat(e, ".").concat(n)), r[n](t))
                    } catch (t) {
                        E.logWarn("Error calling ".concat(n, " of ").concat(e))
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "gdprDataHandler", function() {
                    return x
                }), n.checkBidRequestSizes = a, n.setS2STestingModule = function(e) {
                    d = e
                };
                var d, u = t(0),
                    f = t(39),
                    l = t(17),
                    p = t(1),
                    g = t(6),
                    b = t(3),
                    m = t(7),
                    y = t.n(m),
                    v = t(10),
                    h = t.n(v),
                    w = t(40),
                    A = t(41),
                    E = t(0),
                    S = t(4),
                    _ = t(9),
                    T = {},
                    I = T.bidderRegistry = {},
                    O = T.aliasRegistry = {},
                    j = {};
                b.config.getConfig("s2sConfig", function(e) {
                    j = e.s2sConfig
                });
                var C = {},
                    x = {
                        consentData: null,
                        setConsentData: function(e) {
                            x.consentData = e
                        },
                        getConsentData: function() {
                            return x.consentData
                        }
                    };
                T.makeBidRequests = function(e, n, t, r, i) {
                    var c = [];
                    e = a(e);
                    var f = Object(u.getBidderCodes)(e);
                    b.config.getConfig("bidderSequence") === b.RANDOM && (f = Object(u.shuffle)(f));
                    var l, p, g, m = Object(A.b)(),
                        v = f,
                        w = [];
                    if (j.enabled) {
                        s() && (w = d.getSourceBidderMap(e)[d.CLIENT]);
                        var _ = j.bidders;
                        v = f.filter(function(e) {
                            return !y()(_, e) || y()(w, e)
                        });
                        var T = (l = e, p = j.bidders, (g = E.deepClone(l)).forEach(function(e) {
                                e.bids = e.bids.filter(function(e) {
                                    return y()(p, e.bidder) && (!s() || e.finalSource !== d.CLIENT)
                                }).map(function(e) {
                                    return e.bid_id = E.getUniqueIdentifierStr(), e
                                })
                            }), g = g.filter(function(e) {
                                return 0 !== e.bids.length
                            })),
                            O = E.generateUUID();
                        _.forEach(function(e) {
                            var r = E.getUniqueIdentifierStr(),
                                a = {
                                    bidderCode: e,
                                    auctionId: t,
                                    bidderRequestId: r,
                                    tid: O,
                                    bids: o({
                                        bidderCode: e,
                                        auctionId: t,
                                        bidderRequestId: r,
                                        adUnits: E.deepClone(T),
                                        labels: i,
                                        src: S.S2S.SRC
                                    }),
                                    auctionStart: n,
                                    timeout: j.timeout,
                                    src: S.S2S.SRC,
                                    refererInfo: m
                                };
                            0 !== a.bids.length && c.push(a)
                        }), T.forEach(function(e) {
                            var n = e.bids.filter(function(e) {
                                return h()(c, function(n) {
                                    return h()(n.bids, function(n) {
                                        return n.bidId === e.bid_id
                                    })
                                })
                            });
                            e.bids = n
                        }), c.forEach(function(e) {
                            e.adUnitsS2SCopy = T.filter(function(e) {
                                return 0 < e.bids.length
                            })
                        })
                    }
                    var C, R, B = (C = e, (R = E.deepClone(C)).forEach(function(e) {
                        e.bids = e.bids.filter(function(e) {
                            return !s() || e.finalSource !== d.SERVER
                        })
                    }), R = R.filter(function(e) {
                        return 0 !== e.bids.length
                    }));
                    return v.forEach(function(e) {
                        var a = E.getUniqueIdentifierStr(),
                            s = {
                                bidderCode: e,
                                auctionId: t,
                                bidderRequestId: a,
                                bids: o({
                                    bidderCode: e,
                                    auctionId: t,
                                    bidderRequestId: a,
                                    adUnits: E.deepClone(B),
                                    labels: i,
                                    src: "client"
                                }),
                                auctionStart: n,
                                timeout: r,
                                refererInfo: m
                            },
                            d = I[e];
                        d || E.logError("Trying to make a request for bidder that does not exist: ".concat(e)), d && s.bids && 0 !== s.bids.length && c.push(s)
                    }), x.getConsentData() && c.forEach(function(e) {
                        e.gdprConsent = x.getConsentData()
                    }), c
                }, T.callBids = function(e, n, t, i, o, a) {
                    if (n.length) {
                        var s = r(n.reduce(function(e, n) {
                                return e[Number(void 0 !== n.src && n.src === S.S2S.SRC)].push(n), e
                            }, [
                                [],
                                []
                            ]), 2),
                            c = s[0],
                            d = s[1];
                        if (d.length) {
                            var f = Object(g.b)(a, o ? {
                                    request: o.request.bind(null, "s2s"),
                                    done: o.done
                                } : void 0),
                                l = j.bidders,
                                p = I[j.adapter],
                                b = d[0].tid,
                                m = d[0].adUnitsS2SCopy;
                            if (p) {
                                var v = {
                                    tid: b,
                                    ad_units: m
                                };
                                if (v.ad_units.length) {
                                    var h = d.map(function(e) {
                                            return e.start = Object(u.timestamp)(), i.bind(e)
                                        }),
                                        w = v.ad_units.reduce(function(e, n) {
                                            return e.concat((n.bids || []).reduce(function(e, n) {
                                                return e.concat(n.bidder)
                                            }, []))
                                        }, []);
                                    E.logMessage("CALLING S2S HEADER BIDDERS ==== ".concat(l.filter(function(e) {
                                        return y()(w, e)
                                    }).join(","))), d.forEach(function(e) {
                                        _.emit(S.EVENTS.BID_REQUESTED, e)
                                    }), p.callBids(v, d, function(e, n) {
                                        var r = Object(u.getBidderRequest)(d, n.bidderCode, e);
                                        r && t.call(r, e, n)
                                    }, function() {
                                        return h.forEach(function(e) {
                                            return e()
                                        })
                                    }, f)
                                }
                            }
                        }
                        c.forEach(function(e) {
                            e.start = Object(u.timestamp)();
                            var n = I[e.bidderCode];
                            E.logMessage("CALLING BIDDER ======= ".concat(e.bidderCode)), _.emit(S.EVENTS.BID_REQUESTED, e);
                            var r = Object(g.b)(a, o ? {
                                request: o.request.bind(null, e.bidderCode),
                                done: o.done
                            } : void 0);
                            n.callBids(e, t.bind(e), i.bind(e), r)
                        })
                    } else E.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
                }, T.videoAdapters = [], T.registerBidAdapter = function(e, n) {
                    var t = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                        r = void 0 === t ? [] : t;
                    e && n ? "function" == typeof e.callBids ? (I[n] = e, y()(r, "video") && T.videoAdapters.push(n), y()(r, "native") && l.d.push(n)) : E.logError("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : E.logError("bidAdaptor or bidderCode not specified")
                }, T.aliasBidAdapter = function(e, n) {
                    var t, r;
                    if (void 0 === I[n]) {
                        var o = I[e];
                        if (void 0 === o) {
                            var a = b.config.getConfig("s2sConfig"),
                                s = a && a.bidders;
                            s && y()(s, n) ? O[n] = e : E.logError('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                        } else try {
                            var c, d = (t = e, r = [], y()(T.videoAdapters, t) && r.push("video"), y()(l.d, t) && r.push("native"), r);
                            if (o.constructor.prototype != Object.prototype)(c = new o.constructor).setBidderCode(n);
                            else {
                                var u = o.getSpec();
                                c = Object(p.newBidder)(i({}, u, {
                                    code: n
                                })), O[n] = e
                            }
                            T.registerBidAdapter(c, n, {
                                supportedMediaTypes: d
                            })
                        } catch (n) {
                            E.logError(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                        }
                    } else E.logMessage('alias name "' + n + '" has been already specified.')
                }, T.registerAnalyticsAdapter = function(e) {
                    var n = e.adapter,
                        t = e.code;
                    n && t ? "function" == typeof n.enableAnalytics ? (n.code = t, C[t] = n) : E.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(t, '"\n        analytics adapter must implement an enableAnalytics() function')) : E.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
                }, T.enableAnalytics = function(e) {
                    E.isArray(e) || (e = [e]), E._each(e, function(e) {
                        var n = C[e.provider];
                        n ? n.enableAnalytics(e) : E.logError("Prebid Error: no analytics adapter found in registry for\n        ".concat(e.provider, "."))
                    })
                }, T.getBidAdapter = function(e) {
                    return I[e]
                }, T.callTimedOutBidders = function(e, n, t) {
                    n = n.map(function(n) {
                        return n.params = E.getUserConfiguredParams(e, n.adUnitCode, n.bidder), n.timeout = t, n
                    }), n = E.groupBy(n, "bidder"), Object.keys(n).forEach(function(e) {
                        c(e, "onTimeout", n[e])
                    })
                }, T.callBidWonBidder = function(e, n, t) {
                    n.params = E.getUserConfiguredParams(t, n.adUnitCode, n.bidder), c(e, "onBidWon", n)
                }, T.callSetTargetingBidder = function(e, n) {
                    c(e, "onSetTargeting", n)
                }, n.default = T
            },
            9: function(e, n, t) {
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }
                var i, o, a = t(0),
                    s = t(4),
                    c = Array.prototype.slice,
                    d = Array.prototype.push,
                    u = a._map(s.EVENTS, function(e) {
                        return e
                    }),
                    f = s.EVENT_ID_PATHS,
                    l = [];
                e.exports = (i = {}, (o = {}).on = function(e, n, t) {
                    if (o = e, a.contains(u, o)) {
                        var r = i[e] || {
                            que: []
                        };
                        t ? (r[t] = r[t] || {
                            que: []
                        }, r[t].que.push(n)) : r.que.push(n), i[e] = r
                    } else a.logError("Wrong event name : " + e + " Valid event names :" + u);
                    var o
                }, o.emit = function(e) {
                    ! function(e, n) {
                        a.logMessage("Emitting event for: " + e);
                        var t = n[0] || {},
                            r = t[f[e]],
                            o = i[e] || {
                                que: []
                            },
                            s = a._map(o, function(e, n) {
                                return n
                            }),
                            c = [];
                        l.push({
                            eventType: e,
                            args: t,
                            id: r
                        }), r && a.contains(s, r) && d.apply(c, o[r].que), d.apply(c, o.que), a._each(c, function(e) {
                            if (e) try {
                                e.apply(null, n)
                            } catch (e) {
                                a.logError("Error executing handler:", "events.js", e)
                            }
                        })
                    }(e, c.call(arguments, 1))
                }, o.off = function(e, n, t) {
                    var r = i[e];
                    a.isEmpty(r) || a.isEmpty(r.que) && a.isEmpty(r[t]) || t && (a.isEmpty(r[t]) || a.isEmpty(r[t].que)) || (t ? a._each(r[t].que, function(e) {
                        var i = r[t].que;
                        e === n && i.splice(a.indexOf.call(i, e), 1)
                    }) : a._each(r.que, function(e) {
                        var t = r.que;
                        e === n && t.splice(a.indexOf.call(t, e), 1)
                    }), i[e] = r)
                }, o.get = function() {
                    return i
                }, o.getEvents = function() {
                    var e = [];
                    return a._each(l, function(n) {
                        var t = r({}, n);
                        e.push(t)
                    }), e
                }, o)
            }
        }), pbjsChunk([170], {
            127: function(e, n, t) {
                e.exports = t(128)
            },
            128: function(e, n, t) {
                function r() {
                    return (r = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function i() {
                    var e = s(["dcn=", "&pos=", "&cmd=bid", ""]);
                    return i = function() {
                        return e
                    }, e
                }

                function o() {
                    var e = s(["//", "/bidRequest?"]);
                    return o = function() {
                        return e
                    }, e
                }

                function a() {
                    var e = s(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]);
                    return a = function() {
                        return e
                    }, e
                }

                function s(e, n) {
                    return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                        raw: {
                            value: Object.freeze(n)
                        }
                    }))
                }

                function c(e) {
                    for (var n = arguments.length, t = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                    return function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        var o = r[r.length - 1] || {},
                            a = [e[0]];
                        return t.forEach(function(n, t) {
                            var i = p.isInteger(n) ? r[n] : o[n];
                            a.push(i, e[t + 1])
                        }), a.join("")
                    }
                }

                function d(e) {
                    return e === m.AOL || e === m.ONEMOBILE
                }

                function u(e) {
                    if (d(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                        var n = e.params.imp[0];
                        return n.id && n.tagid && (n.banner && n.banner.w && n.banner.h || n.video && n.video.mimes && n.video.minduration && n.video.maxduration)
                    }
                }

                function f(e) {
                    return d(e.bidder) && e.params.dcn && e.params.pos
                }

                function l(e) {
                    return ((n = e.bidder) === m.AOL || n === m.ONEDISPLAY) && e.params.placement && e.params.network;
                    var n
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "spec", function() {
                    return T
                });
                var p = t(0),
                    g = t(1),
                    b = t(2),
                    m = {
                        AOL: "aol",
                        ONEMOBILE: "onemobile",
                        ONEDISPLAY: "onedisplay"
                    },
                    y = {
                        GET: "display-get"
                    },
                    v = {
                        GET: "mobile-get",
                        POST: "mobile-post"
                    },
                    h = {
                        TAG: "iframe",
                        TYPE: "iframe"
                    },
                    w = {
                        TAG: "img",
                        TYPE: "image"
                    },
                    A = c(a(), "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
                    E = c(o(), "host"),
                    S = c(i(), "dcn", "pos", "dynamicParams"),
                    _ = {
                        us: "adserver-us.adtech.advertising.com",
                        eu: "adserver-eu.adtech.advertising.com",
                        as: "adserver-as.adtech.advertising.com"
                    },
                    T = {
                        code: m.AOL,
                        aliases: [m.ONEMOBILE, m.ONEDISPLAY],
                        supportedMediaTypes: [b.a],
                        isBidRequestValid: function(e) {
                            return l(e) || f(n = e) || u(n);
                            var n
                        },
                        buildRequests: function(e, n) {
                            var t = this,
                                r = n ? n.gdprConsent : null;
                            return e.map(function(e) {
                                var n, i = f(n = e) ? v.GET : u(n) ? v.POST : l(n) ? y.GET : void 0;
                                if (i) return t.formatBidRequest(i, e, r)
                            })
                        },
                        interpretResponse: function(e, n) {
                            var t = e.body;
                            if (t) {
                                var r = this._parseBidResponse(t, n);
                                if (r) return r
                            } else p.logError("Empty bid response", n.bidderCode, t)
                        },
                        getUserSyncs: function(e, n) {
                            var t = !p.isEmpty(n) && n[0].body;
                            return t && t.ext && t.ext.pixels ? this.parsePixelItems(t.ext.pixels) : []
                        },
                        formatBidRequest: function(e, n, t) {
                            var r;
                            switch (e) {
                                case y.GET:
                                    r = {
                                        url: this.buildMarketplaceUrl(n, t),
                                        method: "GET",
                                        ttl: 60
                                    };
                                    break;
                                case v.GET:
                                    r = {
                                        url: this.buildOneMobileGetUrl(n, t),
                                        method: "GET",
                                        ttl: 3600
                                    };
                                    break;
                                case v.POST:
                                    r = {
                                        url: this.buildOneMobileBaseUrl(n),
                                        method: "POST",
                                        ttl: 3600,
                                        data: this.buildOpenRtbRequestData(n, t),
                                        options: {
                                            contentType: "application/json",
                                            customHeaders: {
                                                "x-openrtb-version": "2.2"
                                            }
                                        }
                                    }
                            }
                            return r.bidderCode = n.bidder, r.bidId = n.bidId, r.userSyncOn = n.params.userSyncOn, r
                        },
                        buildMarketplaceUrl: function(e, n) {
                            var t, r = e.params,
                                i = r.server,
                                o = r.region || "us";
                            return _.hasOwnProperty(o) || (p.logWarn("Unknown region '".concat(o, "' for AOL bidder.")), o = "us"), t = i || _[o], r.region = o, A({
                                host: t,
                                network: r.network,
                                placement: parseInt(r.placement),
                                pageid: r.pageId || 0,
                                sizeid: r.sizeId || 0,
                                alias: r.alias || p.getUniqueIdentifierStr(),
                                misc: (new Date).getTime(),
                                dynamicParams: this.formatMarketplaceDynamicParams(r, n)
                            })
                        },
                        buildOneMobileGetUrl: function(e, n) {
                            var t = e.params,
                                r = t.dcn,
                                i = t.pos,
                                o = t.ext,
                                a = this.buildOneMobileBaseUrl(e);
                            if (r && i) {
                                var s = this.formatOneMobileDynamicParams(o, n);
                                a += S({
                                    dcn: r,
                                    pos: i,
                                    dynamicParams: s
                                })
                            }
                            return a
                        },
                        buildOneMobileBaseUrl: function(e) {
                            return E({
                                host: e.params.host || "hb.nexage.com"
                            })
                        },
                        formatMarketplaceDynamicParams: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                n = 1 < arguments.length ? arguments[1] : void 0,
                                t = {};
                            e.bidFloor && (t.bidfloor = e.bidFloor), r(t, this.formatKeyValues(e.keyValues)), r(t, this.formatConsentData(n));
                            var i = "";
                            return p._each(t, function(e, n) {
                                i += "".concat(n, "=").concat(encodeURIComponent(e), ";")
                            }), i
                        },
                        formatOneMobileDynamicParams: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                n = 1 < arguments.length ? arguments[1] : void 0;
                            this.isSecureProtocol() && (e.secure = 1), r(e, this.formatConsentData(n));
                            var t = "";
                            return p._each(e, function(e, n) {
                                t += "&".concat(n, "=").concat(encodeURIComponent(e))
                            }), t
                        },
                        buildOpenRtbRequestData: function(e, n) {
                            var t = {
                                id: e.params.id,
                                imp: e.params.imp
                            };
                            return this.isConsentRequired(n) && (t.regs = {
                                ext: {
                                    gdpr: 1
                                }
                            }, n.consentString && (t.user = {
                                ext: {
                                    consent: n.consentString
                                }
                            })), t
                        },
                        isConsentRequired: function(e) {
                            return !(!e || !e.gdprApplies)
                        },
                        formatKeyValues: function(e) {
                            var n = {};
                            return p._each(e, function(e, t) {
                                n["kv".concat(t)] = e
                            }), n
                        },
                        formatConsentData: function(e) {
                            var n = {};
                            return this.isConsentRequired(e) && (n.gdpr = 1, e.consentString && (n.euconsent = e.consentString)), n
                        },
                        parsePixelItems: function(e) {
                            var n = /\w*(?=\s)/,
                                t = /src=("|')(.*?)\1/,
                                r = [];
                            if (e) {
                                var i = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                                i && i.forEach(function(e) {
                                    var i = e.match(n)[0],
                                        o = e.match(t)[2];
                                    i && i && r.push({
                                        type: i === w.TAG ? w.TYPE : h.TYPE,
                                        url: o
                                    })
                                })
                            }
                            return r
                        },
                        _parseBidResponse: function(e, n) {
                            var t, r;
                            try {
                                t = e.seatbid[0].bid[0]
                            } catch (e) {
                                return
                            }
                            if (t.ext && t.ext.encp) r = t.ext.encp;
                            else if (null === (r = t.price) || isNaN(r)) return void p.logError("Invalid price in bid response", m.AOL, bid);
                            return {
                                bidderCode: n.bidderCode,
                                requestId: n.bidId,
                                ad: t.adm,
                                cpm: r,
                                width: t.w,
                                height: t.h,
                                creativeId: t.crid || 0,
                                pubapiId: e.id,
                                currency: e.cur || "USD",
                                dealId: t.dealid,
                                netRevenue: !0,
                                ttl: n.ttl
                            }
                        },
                        isOneMobileBidder: d,
                        isSecureProtocol: function() {
                            return "https:" === document.location.protocol
                        }
                    };
                Object(g.registerBidder)(T)
            }
        }, [127]), pbjsChunk([168], {
            133: function(e, n, t) {
                e.exports = t(134)
            },
            134: function(e, n, t) {
                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function i() {
                    return (i = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }).apply(this, arguments)
                }

                function o(e) {
                    return function(e) {
                        if (Array.isArray(e)) {
                            for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
                            return t
                        }
                    }(e) || function(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }()
                }

                function a(e) {
                    return !!(y.isArray(e) && 0 < e.length)
                }

                function s(e) {
                    a(e.value) && "" === e.value[0] && delete e.value
                }

                function c(e) {
                    var n, t, r = {};
                    if (r.sizes = d(e.sizes), r.primary_size = r.sizes[0], r.ad_types = [], r.uuid = e.bidId, e.params.placementId ? r.id = parseInt(e.params.placementId, 10) : r.code = e.params.invCode, r.allow_smaller_sizes = e.params.allowSmallerSizes || !1, r.use_pmt_rule = e.params.usePaymentRule || !1, r.prebid = !0, r.disable_psa = !0, e.params.reserve && (r.reserve = e.params.reserve), e.params.position && (r.position = {
                            above: 1,
                            below: 2
                        }[e.params.position] || 0), e.params.trafficSourceCode && (r.traffic_source_code = e.params.trafficSourceCode), e.params.privateSizes && (r.private_sizes = d(e.params.privateSizes)), e.params.supplyType && (r.supply_type = e.params.supplyType), e.params.pubClick && (r.pubclick = e.params.pubClick), e.params.extInvCode && (r.ext_inv_code = e.params.extInvCode), e.params.externalImpId && (r.external_imp_id = e.params.externalImpId), !y.isEmpty(e.params.keywords)) {
                        var o = y.transformBidderParamKeywords(e.params.keywords);
                        0 < o.length && o.forEach(s), r.keywords = o
                    }
                    if ((e.mediaType === h.b || y.deepAccess(e, "mediaTypes.".concat(h.b))) && (r.ad_types.push(h.b), e.nativeParams)) {
                        var a = (n = e.nativeParams, t = {}, Object.keys(n).forEach(function(e) {
                            var r = j[e] && j[e].serverName || j[e] || e,
                                o = j[e] && j[e].requiredParams;
                            t[r] = i({}, o, n[e]);
                            var a = j[e] && j[e].minimumParams;
                            if (o && a) {
                                var s = Object.keys(n[e]),
                                    c = Object.keys(o);
                                0 === s.filter(function(e) {
                                    return !S()(c, e)
                                }).length && (t[r] = i({}, t[r], a))
                            }
                        }), t);
                        r[h.b] = {
                            layouts: [a]
                        }
                    }
                    var c = y.deepAccess(e, "mediaTypes.".concat(h.c)),
                        u = y.deepAccess(e, "mediaTypes.video.context");
                    return (e.mediaType === h.c || c) && r.ad_types.push(h.c), (e.mediaType === h.c || c && "outstream" !== u) && (r.require_asset_url = !0), e.params.video && (r.video = {}, Object.keys(e.params.video).filter(function(e) {
                        return S()(_, e)
                    }).forEach(function(n) {
                        return r.video[n] = e.params.video[n]
                    })), (y.isEmpty(e.mediaType) && y.isEmpty(e.mediaTypes) || e.mediaType === h.a || e.mediaTypes && e.mediaTypes[h.a]) && r.ad_types.push(h.a), r
                }

                function d(e) {
                    var n = [],
                        t = {};
                    if (y.isArray(e) && 2 === e.length && !y.isArray(e[0])) t.width = parseInt(e[0], 10), t.height = parseInt(e[1], 10), n.push(t);
                    else if ("object" === r(e))
                        for (var i = 0; i < e.length; i++) {
                            var o = e[i];
                            (t = {}).width = parseInt(o[0], 10), t.height = parseInt(o[1], 10), n.push(t)
                        }
                    return n
                }

                function u(e) {
                    return !!e.params.user
                }

                function f(e) {
                    return !!parseInt(e.params.member, 10)
                }

                function l(e) {
                    if (e.params) return !!e.params.app
                }

                function p(e) {
                    return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
                }

                function g(e) {
                    return !!e.debug
                }

                function b(e) {
                    e.renderer.push(function() {
                        window.ANOutstreamVideo.renderAd({
                            tagId: e.adResponse.tag_id,
                            sizes: [e.getSize().split("x")],
                            targetId: e.adUnitCode,
                            uuid: e.adResponse.uuid,
                            adResponse: e.adResponse,
                            rendererOptions: e.renderer.getConfig()
                        }, function(e, n, t) {
                            e.renderer.handleVideoEvent({
                                id: n,
                                eventName: t
                            })
                        }.bind(null, e))
                    })
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "spec", function() {
                    return C
                });
                var m = t(12),
                    y = t(0),
                    v = t(1),
                    h = t(2),
                    w = t(10),
                    A = t.n(w),
                    E = t(7),
                    S = t.n(E),
                    _ = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
                    T = ["age", "external_uid", "segments", "gender", "dnt", "language"],
                    I = ["geo", "device_id"],
                    O = ["enabled", "dongle", "member_id", "debug_timeout"],
                    j = {
                        body: "description",
                        body2: "desc2",
                        cta: "ctatext",
                        image: {
                            serverName: "main_image",
                            requiredParams: {
                                required: !0
                            },
                            minimumParams: {
                                sizes: [{}]
                            }
                        },
                        icon: {
                            serverName: "icon",
                            requiredParams: {
                                required: !0
                            },
                            minimumParams: {
                                sizes: [{}]
                            }
                        },
                        sponsoredBy: "sponsored_by",
                        privacyLink: "privacy_link",
                        salePrice: "saleprice",
                        displayUrl: "displayurl"
                    },
                    C = {
                        code: "appnexus",
                        aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                        supportedMediaTypes: [h.a, h.c, h.b],
                        isBidRequestValid: function(e) {
                            return !!(e.params.placementId || e.params.member && e.params.invCode)
                        },
                        buildRequests: function(e, n) {
                            var t, r = e.map(c),
                                i = A()(e, u);
                            i && (t = {}, Object.keys(i.params.user).filter(function(e) {
                                return S()(T, e)
                            }).forEach(function(e) {
                                return t[e] = i.params.user[e]
                            }));
                            var a, s = A()(e, l);
                            s && s.params && s.params.app && (a = {}, Object.keys(s.params.app).filter(function(e) {
                                return S()(I, e)
                            }).forEach(function(e) {
                                return a[e] = s.params.app[e]
                            }));
                            var d, b = A()(e, p);
                            b && b.params && s.params.app && s.params.app.id && (d = {
                                appid: b.params.app.id
                            });
                            var m = {},
                                v = {},
                                h = y.getCookie("apn_prebid_debug") || null;
                            if (h) try {
                                m = JSON.parse(h)
                            } catch (e) {
                                y.logError("AppNexus Debug Auction Cookie Error:\n\n" + e)
                            } else {
                                var w = A()(e, g);
                                w && w.debug && (m = w.debug)
                            }
                            m && m.enabled && Object.keys(m).filter(function(e) {
                                return S()(O, e)
                            }).forEach(function(e) {
                                v[e] = m[e]
                            });
                            var E = A()(e, f),
                                _ = E ? parseInt(E.params.member, 10) : 0,
                                j = {
                                    tags: o(r),
                                    user: t,
                                    sdk: {
                                        source: "pbjs",
                                        version: "2.0.0"
                                    }
                                };
                            if (0 < _ && (j.member_id = _), s && (j.device = a), b && (j.app = d), v.enabled && (j.debug = v, y.logInfo("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(v, null, 4))), n && n.gdprConsent && (j.gdpr_consent = {
                                    consent_string: n.gdprConsent.consentString,
                                    consent_required: n.gdprConsent.gdprApplies
                                }), n && n.refererInfo) {
                                var C = {
                                    rd_ref: encodeURIComponent(n.refererInfo.referer),
                                    rd_top: n.refererInfo.reachedTop,
                                    rd_ifs: n.refererInfo.numIframes,
                                    rd_stk: n.refererInfo.stack.map(function(e) {
                                        return encodeURIComponent(e)
                                    }).join(",")
                                };
                                j.referrer_detection = C
                            }
                            return {
                                method: "POST",
                                url: "//ib.adnxs.com/ut/v3/prebid",
                                data: JSON.stringify(j),
                                bidderRequest: n
                            }
                        },
                        interpretResponse: function(e, n) {
                            var t = this,
                                r = n.bidderRequest;
                            e = e.body;
                            var o = [];
                            if (!e || e.error) {
                                var a = "in response for ".concat(r.bidderCode, " adapter");
                                return e && e.error && (a += ": ".concat(e.error)), y.logError(a), o
                            }
                            if (e.tags && e.tags.forEach(function(e) {
                                    var n, a, s = (n = e) && n.ads && n.ads.length && A()(n.ads, function(e) {
                                        return e.rtb
                                    });
                                    if (s && 0 !== s.cpm && S()(t.supportedMediaTypes, s.ad_type)) {
                                        var c = function(e, n, t) {
                                            var r = y.getBidRequest(e.uuid, [t]),
                                                o = {
                                                    requestId: e.uuid,
                                                    cpm: n.cpm,
                                                    creativeId: n.creative_id,
                                                    dealId: n.deal_id,
                                                    currency: "USD",
                                                    netRevenue: !0,
                                                    ttl: 300,
                                                    adUnitCode: r.adUnitCode,
                                                    appnexus: {
                                                        buyerMemberId: n.buyer_member_id,
                                                        dealPriority: n.deal_priority,
                                                        dealCode: n.deal_code
                                                    }
                                                };
                                            if (n.rtb.video) {
                                                if (i(o, {
                                                        width: n.rtb.video.player_width,
                                                        height: n.rtb.video.player_height,
                                                        vastUrl: n.rtb.video.asset_url,
                                                        vastImpUrl: n.notify_url,
                                                        ttl: 3600
                                                    }), n.renderer_url) {
                                                    var a = y.deepAccess(t.bids[0], "renderer.options");
                                                    i(o, {
                                                        adResponse: e,
                                                        renderer: function(e, n) {
                                                            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                                r = m.a.install({
                                                                    id: n.renderer_id,
                                                                    url: n.renderer_url,
                                                                    config: t,
                                                                    loaded: !1,
                                                                    adUnitCode: e
                                                                });
                                                            try {
                                                                r.setRender(b)
                                                            } catch (e) {
                                                                y.logWarn("Prebid Error calling setRender on renderer", e)
                                                            }
                                                            return r.setEventHandlers({
                                                                impression: function() {
                                                                    return y.logMessage("AppNexus outstream video impression event")
                                                                },
                                                                loaded: function() {
                                                                    return y.logMessage("AppNexus outstream video loaded event")
                                                                },
                                                                ended: function() {
                                                                    y.logMessage("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                                }
                                                            }), r
                                                        }(o.adUnitCode, n, a)
                                                    }), o.adResponse.ad = o.adResponse.ads[0], o.adResponse.ad.video = o.adResponse.ad.rtb.video
                                                }
                                            } else if (n.rtb[h.b]) {
                                                var s = n.rtb[h.b];
                                                o[h.b] = {
                                                    title: s.title,
                                                    body: s.desc,
                                                    body2: s.desc2,
                                                    cta: s.ctatext,
                                                    rating: s.rating,
                                                    sponsoredBy: s.sponsored,
                                                    privacyLink: s.privacy_link,
                                                    address: s.address,
                                                    downloads: s.downloads,
                                                    likes: s.likes,
                                                    phone: s.phone,
                                                    price: s.price,
                                                    salePrice: s.saleprice,
                                                    clickUrl: s.link.url,
                                                    displayUrl: s.displayurl,
                                                    clickTrackers: s.link.click_trackers,
                                                    impressionTrackers: s.impression_trackers,
                                                    javascriptTrackers: s.javascript_trackers
                                                }, s.main_img && (o.native.image = {
                                                    url: s.main_img.url,
                                                    height: s.main_img.height,
                                                    width: s.main_img.width
                                                }), s.icon && (o.native.icon = {
                                                    url: s.icon.url,
                                                    height: s.icon.height,
                                                    width: s.icon.width
                                                })
                                            } else {
                                                i(o, {
                                                    width: n.rtb.banner.width,
                                                    height: n.rtb.banner.height,
                                                    ad: n.rtb.banner.content
                                                });
                                                try {
                                                    var c = n.rtb.trackers[0].impression_urls[0],
                                                        d = y.createTrackPixelHtml(c);
                                                    o.ad += d
                                                } catch (e) {
                                                    y.logError("Error appending tracking pixel", e)
                                                }
                                            }
                                            return o
                                        }(e, s, r);
                                        c.mediaType = (a = s.ad_type) === h.c ? h.c : a === h.b ? h.b : h.a, o.push(c)
                                    }
                                }), e.debug && e.debug.debug_info) {
                                var s = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                                s = s.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), y.logMessage("https://console.appnexus.com/docs/understanding-the-debug-auction"), y.logMessage(s)
                            }
                            return o
                        },
                        getUserSyncs: function(e) {
                            if (e.iframeEnabled) return [{
                                type: "iframe",
                                url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                            }]
                        },
                        transformBidParams: function(e, n) {
                            return e = y.convertTypes({
                                member: "string",
                                invCode: "string",
                                placementId: "number",
                                keywords: y.transformBidderParamKeywords
                            }, e), n && (e.use_pmt_rule = "boolean" == typeof e.usePaymentRule && e.usePaymentRule, e.usePaymentRule && delete e.usePaymentRule, a(e.keywords) && e.keywords.forEach(s), Object.keys(e).forEach(function(n) {
                                var t = y.convertCamelToUnderscore(n);
                                t !== n && (e[t] = e[n], delete e[n])
                            })), e
                        }
                    };
                Object(v.registerBidder)(C)
            }
        }, [133]), pbjsChunk([1], {
            167: function(e, n, t) {
                e.exports = t(168)
            },
            168: function(e, n, t) {
                function r(e, n) {
                    var t = {
                        context: this,
                        args: [n],
                        nextFn: e,
                        adUnits: n.adUnits || pbjs.adUnits,
                        bidsBackHandler: n.bidsBackHandler,
                        haveExited: !1,
                        timer: null
                    };
                    return p ? s(null, t) : v()(Object.keys(T), d) ? (T[d].call(this, i, o, t), void(t.haveExited || (0 === u ? i(void 0, t) : t.timer = setTimeout(function(e) {
                        o("CMP workflow exceeded timeout threshold.", e)
                    }.bind(null, t), u)))) : (g.logWarn("CMP framework (".concat(d, ") is not a supported framework.  Aborting consentManagement module and resuming auction.")), t.nextFn.apply(t.context, t.args))
                }

                function i(e, n) {
                    var t = e && e.getConsentData && e.getConsentData.gdprApplies;
                    "boolean" == typeof t && (!0 !== t || g.isStr(e.getConsentData.consentData) && g.isPlainObject(e.getVendorConsents) && 1 < Object.keys(e.getVendorConsents).length) ? (clearTimeout(n.timer), a(e), s(null, n)) : o("CMP returned unexpected value during lookup process.", n, e)
                }

                function o(e, n, t) {
                    clearTimeout(n.timer), f && a(void 0), s(e, n, t)
                }

                function a(e) {
                    p = {
                        consentString: e ? e.getConsentData.consentData : void 0,
                        vendorData: e ? e.getVendorConsents : void 0,
                        gdprApplies: e ? e.getConsentData.gdprApplies : void 0
                    }, m.gdprDataHandler.setConsentData(p)
                }

                function s(e, n, t) {
                    if (!1 === n.haveExited) {
                        n.haveExited = !0;
                        var r = n.context,
                            i = n.args,
                            o = n.nextFn;
                        e ? f ? (g.logWarn(e + " Resuming auction without consent data as per consentManagement config.", t), o.apply(r, i)) : (g.logError(e + " Canceling auction as per consentManagement config.", t), "function" == typeof n.bidsBackHandler ? n.bidsBackHandler() : g.logError("Error executing bidsBackHandler")) : o.apply(r, i)
                    }
                }

                function c(e) {
                    g.isStr(e.cmpApi) ? d = e.cmpApi : (d = A, g.logInfo("consentManagement config did not specify cmp.  Using system default setting (".concat(A, ")."))), g.isNumber(e.timeout) ? u = e.timeout : (u = E, g.logInfo("consentManagement config did not specify timeout.  Using system default setting (".concat(E, ")."))), "boolean" == typeof e.allowAuctionWithoutConsent ? f = e.allowAuctionWithoutConsent : (f = S, g.logInfo("consentManagement config did not specify allowAuctionWithoutConsent.  Using system default setting (".concat(S, ")."))), g.logInfo("consentManagement module has been activated..."), "static" === d && (g.isPlainObject(e.consentData) ? (l = e.consentData, u = 0) : g.logError("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), _ || pbjs.requestBids.before(r, 50), _ = !0
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "userCMP", function() {
                    return d
                }), t.d(n, "consentTimeout", function() {
                    return u
                }), t.d(n, "allowAuction", function() {
                    return f
                }), t.d(n, "staticConsentData", function() {
                    return l
                }), n.requestBidsHook = r, n.resetConsentData = function() {
                    p = void 0, m.gdprDataHandler.setConsentData(null)
                }, n.setConfig = c;
                var d, u, f, l, p, g = t(0),
                    b = t(3),
                    m = t(8),
                    y = t(7),
                    v = t.n(y),
                    h = t(169),
                    w = t.n(h),
                    A = "iab",
                    E = 1e4,
                    S = !0,
                    _ = !1,
                    T = {
                        iab: function(e, n, t) {
                            function r(e, n) {
                                var r = t.adUnits,
                                    i = 1,
                                    o = 1;
                                if (Array.isArray(r) && 0 < r.length) {
                                    var a = g.getAdUnitSizes(r[0]);
                                    i = a[0][0], o = a[0][1]
                                }
                                window.$sf.ext.register(i, o, function(t, r) {
                                    if ("cmpReturn" === t) {
                                        var i = "getConsentData" === e ? r.vendorConsentData : r.vendorConsents;
                                        n(i)
                                    }
                                }), window.$sf.ext.cmp(e)
                            }

                            function i(e, n, t) {
                                function r(e) {
                                    var n = "string" == typeof e.data && w()(e.data, "cmpReturn") ? JSON.parse(e.data) : e.data;
                                    if (n.__cmpReturn && n.__cmpReturn.callId) {
                                        var t = n.__cmpReturn;
                                        void 0 !== s[t.callId] && (s[t.callId](t.returnValue, t.success), delete s[t.callId])
                                    }
                                }
                                window.__cmp = function(e, t, r) {
                                    var i = Math.random() + "",
                                        o = {
                                            __cmpCall: {
                                                command: e,
                                                parameter: t,
                                                callId: i
                                            }
                                        };
                                    s[i] = r, n.postMessage(o, "*")
                                }, window.addEventListener("message", r, !1), window.__cmp(e, null, function(e) {
                                    window.removeEventListener("message", r, !1), t(e)
                                })
                            }
                            var o, a = function() {
                                    function n() {
                                        r.getConsentData && r.getVendorConsents && e(r, t)
                                    }
                                    var r = {};
                                    return {
                                        consentDataCallback: function(e) {
                                            r.getConsentData = e, n()
                                        },
                                        vendorConsentsCallback: function(e) {
                                            r.getVendorConsents = e, n()
                                        }
                                    }
                                }(),
                                s = {};
                            try {
                                o = window.__cmp || g.getWindowTop().__cmp
                            } catch (e) {}
                            if (g.isFn(o)) o("getConsentData", null, a.consentDataCallback), o("getVendorConsents", null, a.vendorConsentsCallback);
                            else if (window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp) r("getConsentData", a.consentDataCallback), r("getVendorConsents", a.vendorConsentsCallback);
                            else {
                                for (var c, d = window; !c;) {
                                    try {
                                        d.frames.__cmpLocator && (c = d)
                                    } catch (e) {}
                                    if (d === window.top) break;
                                    d = d.parent
                                }
                                if (!c) return n("CMP not found.", t);
                                i("getConsentData", c, a.consentDataCallback), i("getVendorConsents", c, a.vendorConsentsCallback)
                            }
                        },
                        static: function(e, n, t) {
                            e(l, t)
                        }
                    };
                b.config.getConfig("consentManagement", function(e) {
                    return c(e.consentManagement)
                })
            },
            169: function(e, n, t) {
                t(170), e.exports = t(13).String.includes
            },
            170: function(e, n, t) {
                var r = t(14),
                    i = t(171),
                    o = "includes";
                r(r.P + r.F * t(173)(o), "String", {
                    includes: function(e) {
                        return !!~i(this, e, o).indexOf(e, 1 < arguments.length ? arguments[1] : void 0)
                    }
                })
            },
            171: function(e, n, t) {
                var r = t(172),
                    i = t(25);
                e.exports = function(e, n, t) {
                    if (r(n)) throw TypeError("String#" + t + " doesn't accept regex!");
                    return String(i(e))
                }
            },
            172: function(e, n, t) {
                var r = t(15),
                    i = t(24),
                    o = t(26)("match");
                e.exports = function(e) {
                    var n;
                    return r(e) && (void 0 !== (n = e[o]) ? !!n : "RegExp" == i(e))
                }
            },
            173: function(e, n, t) {
                var r = t(26)("match");
                e.exports = function(e) {
                    var n = /./;
                    try {
                        "/./" [e](n)
                    } catch (t) {
                        try {
                            return n[r] = !1, !"/./" [e](n)
                        } catch (e) {}
                    }
                    return !0
                }
            }
        }, [167]), pbjsChunk([145], {
            195: function(e, n, t) {
                e.exports = t(196)
            },
            196: function(e, n, t) {
                function r(e, n) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, n) {
                        var t = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return t
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function i(e, n) {
                    return r(n.bidderRequest.bids.filter(function(n) {
                        return n.bidId === e
                    }), 1)[0]
                }

                function o(e) {
                    return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e
                }

                function a(e) {
                    var n = e.sizes,
                        t = {};
                    return t.width = o(n)[0], t.height = o(n)[1], t
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "spec", function() {
                    return u
                }), n.matchRequest = i, n.checkDeepArray = o, n.defaultSize = a;
                var s = t(0),
                    c = t(1),
                    d = t(3),
                    u = {
                        code: "districtmDMX",
                        supportedFormat: ["banner"],
                        isBidRequestValid: function(e) {
                            return !(!e.params.dmxid || !e.params.memberid)
                        },
                        interpretResponse: function(e, n) {
                            return (e = e.body || {}).seatbid && s.isArray(e.seatbid) ? e.seatbid.reduce(function(e, t) {
                                var r = t.bid.reduce(function(e, t) {
                                    if (e.price < t.price) {
                                        var r = a(i(t.impid, n)),
                                            o = r.width,
                                            s = r.height;
                                        return t.cpm = t.price, t.bidId = t.impid, t.requestId = t.impid, t.width = t.w || o, t.height = t.h || s, t.ad = t.adm, t.netRevenue = !0, t.creativeId = t.crid, t.currency = "USD", t.ttl = 60, t
                                    }
                                    return e.cpm = e.price, e
                                }, {
                                    price: 0
                                });
                                return r.adm && e.push(r), e
                            }, []).filter(function(e) {
                                return !!e.bidId
                            }) : []
                        },
                        buildRequests: function(e, n) {
                            var t = d.config.getConfig("bidderTimeout"),
                                r = {
                                    id: s.generateUUID(),
                                    cur: ["USD"],
                                    tmax: t - 300,
                                    test: this.test() || 0,
                                    site: {
                                        publisher: {
                                            id: String(e[0].params.memberid) || null
                                        }
                                    }
                                };
                            r.test || delete r.test, n.gdprConsent && (r.regs = {}, r.regs.ext = {}, r.regs.ext.gdpr = !0 === n.gdprConsent.gdprApplies ? 1 : 0, r.user = {}, r.user.ext = {}, r.user.ext.consent = n.gdprConsent.consentString);
                            var i = e.map(function(e) {
                                var n = {};
                                return n.id = e.bidId, n.tagid = String(e.params.dmxid), n.secure = "https:" === window.location.protocol ? 1 : 0, n.banner = {
                                    topframe: 1,
                                    w: e.sizes[0][0] || 0,
                                    h: e.sizes[0][1] || 0,
                                    format: e.sizes.map(function(e) {
                                        return {
                                            w: e[0],
                                            h: e[1]
                                        }
                                    }).filter(function(e) {
                                        return "number" == typeof e.w && "number" == typeof e.h
                                    })
                                }, n
                            });
                            return r.imp = i, {
                                method: "POST",
                                url: "https://dmx.districtm.io/b/v1",
                                data: JSON.stringify(r),
                                options: {
                                    contentType: "application/json",
                                    withCredentials: !0
                                },
                                bidderRequest: n
                            }
                        },
                        test: function() {
                            return -1 !== window.location.href.indexOf("dmTest=true") ? 1 : 0
                        },
                        getUserSyncs: function(e) {
                            if (e.iframeEnabled) return [{
                                type: "iframe",
                                url: "https://cdn.districtm.io/ids/index.html"
                            }]
                        }
                    };
                Object(c.registerBidder)(u)
            }
        }, [195]), pbjsChunk([79], {
            353: function(e, n, t) {
                e.exports = t(354)
            },
            354: function(e, n, t) {
                function r(e, n) {
                    n && e.push(n)
                }

                function i(e, n, t, r, i) {
                    return n ? {
                        id: e,
                        required: n.required ? 1 : 0,
                        img: {
                            type: t,
                            wmin: n.wmin || r,
                            hmin: n.hmin || i
                        }
                    } : null
                }

                function o(e, n, t, r) {
                    return n ? {
                        id: e,
                        required: n.required ? 1 : 0,
                        data: {
                            type: t,
                            len: n.len || r
                        }
                    } : null
                }

                function a(e) {
                    try {
                        if (e) return JSON.parse(e)
                    } catch (e) {
                        s.logError("pulsepointLite.safeParse", "ERROR", e)
                    }
                    return null
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "spec", function() {
                    return u
                });
                var s = t(0),
                    c = t(1),
                    d = {
                        TITLE_LEN: 100,
                        DESCR_LEN: 200,
                        SPONSORED_BY_LEN: 50,
                        IMG_MIN: 150,
                        ICON_MIN: 50
                    },
                    u = {
                        code: "pulsepoint",
                        aliases: ["pulseLite", "pulsepointLite"],
                        supportedMediaTypes: ["banner", "native"],
                        isBidRequestValid: function(e) {
                            return !!(e && e.params && e.params.cp && e.params.ct)
                        },
                        buildRequests: function(e, n) {
                            var t, a, c, u, f = {
                                id: e[0].bidderRequestId,
                                imp: e.map(function(e) {
                                    return {
                                        id: (n = e).bidId,
                                        banner: (t = n, a = function(e) {
                                            if (e.params.cf) {
                                                var n = e.params.cf.toUpperCase().split("X");
                                                return [parseInt(e.params.cw || n[0], 10), parseInt(e.params.ch || n[1], 10)]
                                            }
                                            return [1, 1]
                                        }(t), t.nativeParams ? null : {
                                            w: a[0],
                                            h: a[1]
                                        }),
                                        native: function(e) {
                                            if (e.nativeParams) {
                                                var n = [];
                                                return r(n, (t = n.length + 1, a = e.nativeParams.title, s = d.TITLE_LEN, a ? {
                                                    id: t,
                                                    required: a.required ? 1 : 0,
                                                    title: {
                                                        len: a.len || s
                                                    }
                                                } : null)), r(n, o(n.length + 1, e.nativeParams.body, 2, d.DESCR_LEN)), r(n, o(n.length + 1, e.nativeParams.sponsoredBy, 1, d.SPONSORED_BY_LEN)), r(n, i(n.length + 1, e.nativeParams.icon, 1, d.ICON_MIN, d.ICON_MIN)), r(n, i(n.length + 1, e.nativeParams.image, 3, d.IMG_MIN, d.IMG_MIN)), {
                                                    request: JSON.stringify({
                                                        assets: n
                                                    }),
                                                    ver: "1.1"
                                                }
                                            }
                                            var t, a, s;
                                            return null
                                        }(n),
                                        tagid: n.params.ct.toString()
                                    };
                                    var n, t, a
                                }),
                                site: (t = e, a = t && 0 < t.length ? t[0].params.cp : "0", t[0].params.app ? null : {
                                    publisher: {
                                        id: a.toString()
                                    },
                                    ref: function() {
                                        try {
                                            return window.top.document.referrer
                                        } catch (e) {
                                            return document.referrer
                                        }
                                    }(),
                                    page: s.getTopWindowLocation().href
                                }),
                                app: function(e) {
                                    var n = e && 0 < e.length ? e[0].params.cp : "0",
                                        t = e[0].params.app;
                                    return t ? {
                                        publisher: {
                                            id: n.toString()
                                        },
                                        bundle: t.bundle,
                                        storeurl: t.storeUrl,
                                        domain: t.domain
                                    } : null
                                }(e),
                                device: {
                                    ua: navigator.userAgent,
                                    language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                                }
                            };
                            return u = f, (c = n) && c.gdprConsent && (u.regs = {
                                ext: {
                                    gdpr: c.gdprConsent.gdprApplies ? 1 : 0
                                }
                            }, u.user = {
                                ext: {
                                    consent: c.gdprConsent.consentString
                                }
                            }), {
                                method: "POST",
                                url: "//bid.contextweb.com/header/ortb",
                                data: JSON.stringify(f)
                            }
                        },
                        interpretResponse: function(e, n) {
                            return function(e, n) {
                                var t = {},
                                    r = {};
                                n = n.body, a(e.data).imp.forEach(function(e) {
                                    t[e.id] = e
                                }), n && n.seatbid.forEach(function(e) {
                                    return e.bid.forEach(function(e) {
                                        r[e.impid] = e
                                    })
                                });
                                var i = [];
                                return Object.keys(t).forEach(function(e) {
                                    if (r[e]) {
                                        var n = {
                                            requestId: e,
                                            cpm: r[e].price,
                                            creative_id: r[e].crid,
                                            creativeId: r[e].crid,
                                            adId: e,
                                            ttl: 20,
                                            netRevenue: !0,
                                            currency: "USD"
                                        };
                                        t[e].native ? (n.native = function(e, n) {
                                            if (e.native) {
                                                var t = a(n.adm),
                                                    r = {};
                                                if (t && t.native && t.native.assets) return t.native.assets.forEach(function(e) {
                                                    r.title = e.title ? e.title.text : r.title, r.body = e.data && 2 === e.data.type ? e.data.value : r.body, r.sponsoredBy = e.data && 1 === e.data.type ? e.data.value : r.sponsoredBy, r.image = e.img && 3 === e.img.type ? e.img.url : r.image, r.icon = e.img && 1 === e.img.type ? e.img.url : r.icon
                                                }), t.native.link && (r.clickUrl = encodeURIComponent(t.native.link.url)), r.impressionTrackers = t.native.imptrackers, r
                                            }
                                            return null
                                        }(t[e], r[e]), n.mediaType = "native") : (n.ad = r[e].adm, n.width = t[e].banner.w, n.height = t[e].banner.h), o = n, (s = r[e]) && s.ext && (o.ttl = s.ext.ttl || o.ttl, o.currency = s.ext.currency || o.currency, o.netRevenue = null != s.ext.netRevenue ? s.ext.netRevenue : o.netRevenue), i.push(n)
                                    }
                                    var o, s
                                }), i
                            }(n, e)
                        },
                        getUserSyncs: function(e) {
                            return e.iframeEnabled ? [{
                                type: "iframe",
                                url: "//bh.contextweb.com/visitormatch"
                            }] : e.pixelEnabled ? [{
                                type: "image",
                                url: "//bh.contextweb.com/visitormatch/prebid"
                            }] : void 0
                        },
                        transformBidParams: function(e, n) {
                            return s.convertTypes({
                                cf: "string",
                                cp: "number",
                                ct: "number"
                            }, e)
                        }
                    };
                Object(c.registerBidder)(u)
            }
        }, [353]), pbjsChunk([68], {
            383: function(e, n, t) {
                e.exports = t(384)
            },
            384: function(e, n, t) {
                function r(e, n) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, n) {
                        var t = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (t.push(a.value), !n || t.length !== n); r = !0);
                        } catch (e) {
                            i = !0, o = e
                        } finally {
                            try {
                                r || null == s.return || s.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return t
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : _typeof(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
                    })(e)
                }

                function o() {
                    return [window.screen.width, window.screen.height].join("x")
                }

                function a(e, n) {
                    var t = b.config.getConfig("pageUrl");
                    return e.params.referrer ? t = e.params.referrer : t || (t = n.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t
                }

                function s(e, n) {
                    var t = e.params;
                    if ("video" === n) {
                        var r = [];
                        return t.video && t.video.playerWidth && t.video.playerHeight ? r = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(p.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? r = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (r = e.sizes[0]), r
                    }
                    var i = [];
                    return Array.isArray(t.sizes) ? i = t.sizes : void 0 !== p.deepAccess(e, "mediaTypes.banner.sizes") ? i = c(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? i = c(e.sizes) : p.logWarn("Warning: no sizes are setup or found"), f(i)
                }

                function c(e) {
                    return p.parseSizesInput(e).reduce(function(e, n) {
                        var t = parseInt(A[n], 10);
                        return t && e.push(t), e
                    }, [])
                }

                function d(e) {
                    return "object" === i(p.deepAccess(e, "params.video")) && (e.mediaType === m.c || void 0 !== p.deepAccess(e, "mediaTypes.".concat(m.c)))
                }

                function u(e) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (d(e)) {
                        if (void 0 !== p.deepAccess(e, "mediaTypes.".concat(m.c))) {
                            if (-1 === ["outstream", "instream"].indexOf(p.deepAccess(e, "mediaTypes.".concat(m.c, ".context")))) return void(n && p.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream"))
                        } else if (n && p.logWarn("Rubicon video bid requested using legacy `adUnit.mediaType = `video``\nThis is deprecated\nPlease move towards the PBJS standard using mediaTypes object!"), isNaN(parseInt(p.deepAccess(e, "params.video.size_id")))) return void(n && p.logError("Rubicon bid adapter needs params.video.size_id to be declared and an integer in order to process a legacy video request using mediaType == video"));
                        return s(e, "video").length < 2 ? void(n && p.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (n && p.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video")
                    }
                    return 0 === s(e, "banner").length ? void(n && p.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (n && p.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
                }

                function f(e) {
                    var n = [15, 2, 9];
                    return e.sort(function(e, t) {
                        var r = n.indexOf(e),
                            i = n.indexOf(t);
                        return -1 < r || -1 < i ? -1 === r ? 1 : -1 === i ? -1 : r - i : e - t
                    })
                }

                function l(e) {
                    var n = parseInt(p.deepAccess(e, "params.video.size_id"));
                    return isNaN(n) ? "outstream" === p.deepAccess(e, "mediaTypes.".concat(m.c, ".context")) ? 203 : 201 : n
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "FASTLANE_ENDPOINT", function() {
                    return v
                }), t.d(n, "VIDEO_ENDPOINT", function() {
                    return h
                }), t.d(n, "SYNC_ENDPOINT", function() {
                    return w
                }), t.d(n, "spec", function() {
                    return E
                }), n.hasVideoMediaType = d, n.masSizeOrdering = f, n.determineRubiconVideoSizeId = l, n.resetUserSync = function() {
                    S = !1
                };
                var p = t(0),
                    g = t(1),
                    b = t(3),
                    m = t(2),
                    y = "pbjs_lite_v2.0.0",
                    v = "//fastlane.rubiconproject.com/a/api/fastlane.json",
                    h = "//fastlane-adv.rubiconproject.com/v1/auction/video",
                    w = "https://eus.rubiconproject.com/usync.html",
                    A = {
                        1: "468x60",
                        2: "728x90",
                        5: "120x90",
                        8: "120x600",
                        9: "160x600",
                        10: "300x600",
                        13: "200x200",
                        14: "250x250",
                        15: "300x250",
                        16: "336x280",
                        19: "300x100",
                        31: "980x120",
                        32: "250x360",
                        33: "180x500",
                        35: "980x150",
                        37: "468x400",
                        38: "930x180",
                        39: "750x100",
                        40: "750x200",
                        41: "750x300",
                        43: "320x50",
                        44: "300x50",
                        48: "300x300",
                        53: "1024x768",
                        54: "300x1050",
                        55: "970x90",
                        57: "970x250",
                        58: "1000x90",
                        59: "320x80",
                        60: "320x150",
                        61: "1000x1000",
                        64: "580x500",
                        65: "640x480",
                        66: "930x600",
                        67: "320x480",
                        68: "1800x1000",
                        72: "320x320",
                        73: "320x160",
                        78: "980x240",
                        79: "980x300",
                        80: "980x400",
                        83: "480x300",
                        94: "970x310",
                        96: "970x210",
                        101: "480x320",
                        102: "768x1024",
                        103: "480x280",
                        105: "250x800",
                        108: "320x240",
                        113: "1000x300",
                        117: "320x100",
                        125: "800x250",
                        126: "200x600",
                        144: "980x600",
                        145: "980x150",
                        159: "320x250",
                        179: "250x600",
                        195: "600x300",
                        198: "640x360",
                        199: "640x200",
                        213: "1030x590",
                        214: "980x360",
                        229: "320x180",
                        232: "580x400",
                        257: "400x600"
                    };
                p._each(A, function(e, n) {
                    return A[e] = n
                });
                var E = {
                        code: "rubicon",
                        aliases: ["rubiconLite"],
                        supportedMediaTypes: [m.a, m.c],
                        isBidRequestValid: function(e) {
                            return "object" === i(e.params) && !!/^\d+$/.test(e.params.accountId) && !!u(e, !0)
                        },
                        buildRequests: function(e, n) {
                            var t = [],
                                r = e.filter(function(e) {
                                    return "video" === u(e)
                                }).map(function(e) {
                                    e.startTime = (new Date).getTime();
                                    var t = e.params,
                                        r = s(e, "video"),
                                        c = {
                                            page_url: a(e, n),
                                            resolution: o(),
                                            account_id: t.accountId,
                                            integration: y,
                                            "x_source.tid": e.transactionId,
                                            timeout: n.timeout - (Date.now() - n.auctionStart + 500),
                                            stash_creatives: !0,
                                            slots: []
                                        },
                                        d = {
                                            site_id: t.siteId,
                                            zone_id: t.zoneId,
                                            position: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                                            floor: .01 < parseFloat(t.floor) ? t.floor : .01,
                                            element_id: e.adUnitCode,
                                            name: e.adUnitCode,
                                            width: r[0],
                                            height: r[1],
                                            size_id: l(e)
                                        };
                                    return t.video && (c.ae_pass_through_parameters = t.video.aeParams, d.language = t.video.language), ["inventory", "visitor"].forEach(function(e) {
                                        t[e] && "object" === i(t[e]) && (d[e] = {}, Object.keys(t[e]).forEach(function(n) {
                                            var r = t[e][n];
                                            Array.isArray(r) ? d[e][n] = r : ("string" == typeof r && "" !== r || "number" == typeof r) && (d[e][n] = [r])
                                        }))
                                    }), t.keywords && Array.isArray(t.keywords) && (d.keywords = t.keywords), c.slots.push(d), n.gdprConsent && ("boolean" == typeof n.gdprConsent.gdprApplies && (c.gdpr = Number(n.gdprConsent.gdprApplies)), c.gdpr_consent = n.gdprConsent.consentString), {
                                        method: "POST",
                                        url: h,
                                        data: c,
                                        bidRequest: e
                                    }
                                });
                            if (!0 !== b.config.getConfig("rubicon.singleRequest")) t = r.concat(e.filter(function(e) {
                                return "banner" === u(e)
                            }).map(function(e) {
                                var t = E.createSlotParams(e, n);
                                return {
                                    method: "GET",
                                    url: v,
                                    data: E.getOrderedParams(t).reduce(function(e, n) {
                                        var r = t[n];
                                        return p.isStr(r) && "" !== r || p.isNumber(r) ? "".concat(e).concat(n, "=").concat(encodeURIComponent(r), "&") : e
                                    }, "") + "slots=1&rand=".concat(Math.random()),
                                    bidRequest: e
                                }
                            }));
                            else {
                                var c = e.filter(function(e) {
                                    return "banner" === u(e)
                                }).reduce(function(e, n) {
                                    return (e[n.params.siteId] = e[n.params.siteId] || []).push(n), e
                                }, {});
                                t = r.concat(Object.keys(c).map(function(e) {
                                    var t = c[e];
                                    10 < t.length && (p.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: ".concat(t.length - 10, " bids were not sent")), t = t.slice(0, 10));
                                    var r = E.combineSlotUrlParams(t.map(function(e) {
                                        return E.createSlotParams(e, n)
                                    }));
                                    return {
                                        method: "GET",
                                        url: v,
                                        data: E.getOrderedParams(r).reduce(function(e, n) {
                                            var t = r[n];
                                            return p.isStr(t) && "" !== t || p.isNumber(t) ? "".concat(e).concat(n, "=").concat(encodeURIComponent(t), "&") : e
                                        }, "") + "slots=".concat(t.length, "&rand=").concat(Math.random()),
                                        bidRequest: t
                                    }
                                }))
                            }
                            return t
                        },
                        getOrderedParams: function(e) {
                            var n = /^tg_v/,
                                t = /^tg_i/,
                                r = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter(function(e) {
                                    return n.test(e)
                                })).concat(Object.keys(e).filter(function(e) {
                                    return t.test(e)
                                })).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                            return r.concat(Object.keys(e).filter(function(e) {
                                return -1 === r.indexOf(e)
                            }))
                        },
                        combineSlotUrlParams: function(e) {
                            if (1 === e.length) return e[0];
                            var n = e.reduce(function(n, t, r) {
                                    return Object.keys(t).forEach(function(i) {
                                        n.hasOwnProperty(i) || (n[i] = new Array(e.length)), n[i].splice(r, 1, t[i])
                                    }), n
                                }, {}),
                                t = new RegExp("^([^;]*)(;\\1)+$");
                            return Object.keys(n).forEach(function(e) {
                                var r = n[e].join(";"),
                                    i = r.match(t);
                                n[e] = i ? i[1] : r
                            }), n
                        },
                        createSlotParams: function(e, n) {
                            e.startTime = (new Date).getTime();
                            var t = e.params,
                                c = s(e, "banner"),
                                d = r(t.latLong || [], 2),
                                u = d[0],
                                f = d[1],
                                l = {
                                    account_id: t.accountId,
                                    site_id: t.siteId,
                                    zone_id: t.zoneId,
                                    size_id: c[0],
                                    alt_size_ids: c.slice(1).join(",") || void 0,
                                    p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                                    rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                                    rp_secure: "https:" === location.protocol ? "1" : "0",
                                    tk_flint: y,
                                    "x_source.tid": e.transactionId,
                                    p_screen_res: o(),
                                    kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                                    tk_user_key: t.userId,
                                    "p_geo.latitude": isNaN(parseFloat(u)) ? void 0 : parseFloat(u).toFixed(4),
                                    "p_geo.longitude": isNaN(parseFloat(f)) ? void 0 : parseFloat(f).toFixed(4),
                                    "tg_fl.eid": e.code,
                                    rf: a(e, n)
                                };
                            n.gdprConsent && ("boolean" == typeof n.gdprConsent.gdprApplies && (l.gdpr = Number(n.gdprConsent.gdprApplies)), l.gdpr_consent = n.gdprConsent.consentString), null !== t.visitor && "object" === i(t.visitor) && Object.keys(t.visitor).forEach(function(e) {
                                null != t.visitor[e] && (l["tg_v.".concat(e)] = t.visitor[e].toString())
                            }), null !== t.inventory && "object" === i(t.inventory) && Object.keys(t.inventory).forEach(function(e) {
                                null != t.inventory[e] && (l["tg_i.".concat(e)] = t.inventory[e].toString())
                            });
                            var p = function() {
                                var e, n = (e = window.DigiTrust && (b.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                                    member: "T9QSFKPDN9"
                                }))) && e.success && e.identity || null;
                                return !n || n.privacy && n.privacy.optout ? [] : {
                                    "dt.id": n.id,
                                    "dt.keyv": n.keyv,
                                    "dt.pref": 0
                                }
                            }();
                            return Object.keys(p).forEach(function(e) {
                                l[e] = p[e]
                            }), l
                        },
                        interpretResponse: function(e, n) {
                            var t = n.bidRequest;
                            if (!(e = e.body) || "object" !== i(e)) return [];
                            var o = e.ads;
                            return "object" !== i(t) || Array.isArray(t) || "video" !== u(t) || "object" !== i(o) || (o = o[t.adUnitCode]), !Array.isArray(o) || o.length < 1 ? [] : o.reduce(function(n, o, a) {
                                if ("ok" !== o.status) return n;
                                var s, c, d = Array.isArray(t) ? t[a] : t;
                                if (d && "object" === i(d)) {
                                    var u = {
                                        requestId: d.bidId,
                                        currency: "USD",
                                        creativeId: o.creative_id || "".concat(o.network || "", "-").concat(o.advertiser || ""),
                                        cpm: o.cpm || 0,
                                        dealId: o.deal,
                                        ttl: 300,
                                        netRevenue: b.config.getConfig("rubicon.netRevenue") || !1,
                                        rubicon: {
                                            advertiserId: o.advertiser,
                                            networkId: o.network
                                        }
                                    };
                                    if (o.creative_type && (u.mediaType = o.creative_type), o.creative_type === m.c) u.width = d.params.video.playerWidth, u.height = d.params.video.playerHeight, u.vastUrl = o.creative_depot_url, u.impression_id = o.impression_id, u.videoCacheKey = o.impression_id;
                                    else {
                                        u.ad = (s = o.script, c = o.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(c, "'>\n<script type='text/javascript'>").concat(s, "<\/script>\n</div>\n</body>\n</html>"));
                                        var f = r(A[o.size_id].split("x").map(function(e) {
                                            return Number(e)
                                        }), 2);
                                        u.width = f[0], u.height = f[1]
                                    }
                                    u.rubiconTargeting = (Array.isArray(o.targeting) ? o.targeting : []).reduce(function(e, n) {
                                        return e[n.key] = n.values[0], e
                                    }, {
                                        rpfl_elemid: d.adUnitCode
                                    }), n.push(u)
                                } else p.logError("Rubicon bid adapter Error: bidRequest undefined at index position:".concat(a), t, e);
                                return n
                            }, []).sort(function(e, n) {
                                return (n.cpm || 0) - (e.cpm || 0)
                            })
                        },
                        getUserSyncs: function(e, n, t) {
                            if (!S && e.iframeEnabled) {
                                var r = "";
                                return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? r += "?gdpr=".concat(Number(t.gdprApplies), "&gdpr_consent=").concat(t.consentString) : r += "?gdpr_consent=".concat(t.consentString)), S = !0, {
                                    type: "iframe",
                                    url: w + r
                                }
                            }
                        },
                        transformBidParams: function(e, n) {
                            return p.convertTypes({
                                accountId: "number",
                                siteId: "number",
                                zoneId: "number"
                            }, e)
                        }
                    },
                    S = !1;
                Object(g.registerBidder)(E)
            }
        }, [383]), pbjsChunk([56], {
            411: function(e, n, t) {
                e.exports = t(412)
            },
            412: function(e, n, t) {
                function r(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), t.d(n, "spec", function() {
                    return c
                }), t.d(n, "LogError", function() {
                    return d
                });
                var i = t(0),
                    o = t(1),
                    a = t(2),
                    s = [],
                    c = {
                        code: "sovrn",
                        supportedMediaTypes: [a.a],
                        isBidRequestValid: function(e) {
                            return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid))
                        },
                        buildRequests: function(e, n) {
                            try {
                                var t, r = i.getTopWindowLocation(),
                                    o = [];
                                i._each(e, function(e) {
                                    t = t || i.getBidIdParameter("iv", e.params), e.sizes = i.isArray(e.sizes) && i.isArray(e.sizes[0]) ? e.sizes : [e.sizes], e.sizes = e.sizes.filter(function(e) {
                                        return i.isArray(e)
                                    });
                                    var n = e.sizes.map(function(e) {
                                        return {
                                            w: parseInt(e[0], 10),
                                            h: parseInt(e[1], 10)
                                        }
                                    });
                                    o.push({
                                        id: e.bidId,
                                        banner: {
                                            format: n,
                                            w: 1,
                                            h: 1
                                        },
                                        tagid: String(i.getBidIdParameter("tagid", e.params)),
                                        bidfloor: i.getBidIdParameter("bidfloor", e.params)
                                    })
                                });
                                var a = {
                                    id: i.getUniqueIdentifierStr(),
                                    imp: o,
                                    site: {
                                        domain: r.host,
                                        page: r.host + r.pathname + r.search + r.hash
                                    }
                                };
                                n && n.gdprConsent && (a.regs = {
                                    ext: {
                                        gdpr: +n.gdprConsent.gdprApplies
                                    }
                                }, a.user = {
                                    ext: {
                                        consent: n.gdprConsent.consentString
                                    }
                                });
                                var s = "//ap.lijit.com/rtb/bid?src=prebid_prebid_2.0.0";
                                return t && (s += "&iv=".concat(t)), {
                                    method: "POST",
                                    url: s,
                                    data: JSON.stringify(a),
                                    options: {
                                        contentType: "text/plain"
                                    }
                                }
                            } catch (r) {
                                new d(r, {
                                    bidReqs: e,
                                    bidderRequest: n
                                }).append()
                            }
                        },
                        interpretResponse: function(e) {
                            var n = e.body,
                                t = n.id,
                                r = n.seatbid;
                            try {
                                var i = [];
                                return t && r && 0 < r.length && r[0].bid && 0 < r[0].bid.length && r[0].bid.map(function(e) {
                                    i.push({
                                        requestId: e.impid,
                                        cpm: parseFloat(e.price),
                                        width: parseInt(e.w),
                                        height: parseInt(e.h),
                                        creativeId: e.crid || e.id,
                                        dealId: e.dealid || null,
                                        currency: "USD",
                                        netRevenue: !0,
                                        mediaType: a.a,
                                        ad: decodeURIComponent("".concat(e.adm, '<img src="').concat(e.nurl, '">')),
                                        ttl: 60
                                    })
                                }), i
                            } catch (e) {
                                new d(e, {
                                    id: t,
                                    seatbid: r
                                }).append()
                            }
                        },
                        getUserSyncs: function(e, n, t) {
                            try {
                                var r = [];
                                if (n && 0 !== n.length && e.iframeEnabled) {
                                    var i = n.filter(function(e) {
                                            return e.body && e.body.ext && e.body.ext.iid
                                        }).map(function(e) {
                                            return e.body.ext.iid
                                        }),
                                        o = "";
                                    t && t.gdprApplies && "string" == typeof t.consentString && (o = t.consentString), i[0] && r.push({
                                        type: "iframe",
                                        url: "//ap.lijit.com/beacon?informer=" + i[0] + "&gdpr_consent=" + o
                                    })
                                }
                                return s.length && e.pixelEnabled && (r = r.concat(s)), r
                            } catch (n) {
                                return e.pixelEnabled ? s : []
                            }
                        }
                    },
                    d = function() {
                        function e(n, t) {
                            ! function(e, n) {
                                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), i.logError(n), this.error = {}, this.error.t = i.timestamp(), this.error.m = n.message, this.error.s = n.stack, this.error.d = t, this.error.v = "prebid_prebid_2.0.0", this.error.u = i.getTopWindowLocation().href, this.error.ua = navigator.userAgent
                        }
                        var n, t, o;
                        return n = e, o = [{
                            key: "getErrPxls",
                            value: function() {
                                return s
                            }
                        }], (t = [{
                            key: "buildErrorString",
                            value: function(e) {
                                return "https://pcb.aws.lijit.com/c?b=" + btoa(JSON.stringify(e))
                            }
                        }, {
                            key: "append",
                            value: function() {
                                var e = this.buildErrorString(this.error);
                                2083 < e.length && (delete this.error.d, 2083 < (e = this.buildErrorString(this.error)).length && (delete this.error.s, 2083 < (e = this.buildErrorString(this.error)).length && (e = this.buildErrorString({
                                    m: "unknown error message",
                                    t: this.error.t,
                                    u: this.error.u
                                }))));
                                var n = {
                                    type: "image",
                                    url: e
                                };
                                s.push(n)
                            }
                        }]) && r(n.prototype, t), o && r(n, o), e
                    }();
                Object(o.registerBidder)(c)
            }
        }, [411]), pbjs.processQueue()
    },
    16: function(e, n, t) {
        "use strict";
        window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.bizxPrebid = t(0), window.bizxPrebid.adUnits = window.SF.Ads.prebidUnits, window.bizxPrebid.prebidOptions = window.SF.Ads.prebidOptions, window.bizxPrebid.VERIFY_ADS = !1, window.bizxPrebid.PREBID_TIMEOUT = window.bizxPrebid.prebidOptions.timeout || 500, window.bizxPrebid.prebidOptions.timeouts_by_bids && (window.bizxPrebid.PREBID_TIMEOUTS_BY_BIDS = window.bizxPrebid.prebidOptions.timeouts_by_bids), window.bizxPrebid.DISABLE_ANALYTICS = !window.bizxPrebid.prebidOptions.analytics, -1 !== document.location.search.indexOf("pbjs_timeout") && (window.bizxPrebid.PREBID_TIMEOUT = parseInt(window.bizxPrebid.getParameterByName("pbjs_timeout"), 10), window.bizxPrebid.prebidLog("Altering prebid timeout to " + window.bizxPrebid.PREBID_TIMEOUT)), window.bizxPrebid.adjustments = window.SF.Ads.prebidAdjustments
    }
});