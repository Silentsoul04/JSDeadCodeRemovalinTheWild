! function i(r, s, d) {
    function c(t, e) {
        if (!s[t]) {
            if (!r[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (l) return l(t, !0);
                var a = new Error("Cannot find module '" + t + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            var o = s[t] = {
                exports: {}
            };
            r[t][0].call(o.exports, function(e) {
                return c(r[t][1][e] || e)
            }, o, o.exports, i, r, s, d)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < d.length; e++) c(d[e]);
    return c
}({
    1: [function(e, t, n) {
        var a = e("./lib/replace"),
            o = e("./lib/getSlotPlaceholder");
        t.exports.replace = a, t.exports.getSlotPlaceholder = o
    }, {
        "./lib/getSlotPlaceholder": 2,
        "./lib/replace": 4
    }],
    2: [function(e, t, n) {
        var s = e("./globals"),
            d = "data-val";
        t.exports = function(e, t, n) {
            var a = s.getDocument(),
                o = [e, n, t].join("_"),
                i = a.getElementById("ape_" + o + "_placement_ClickTracking");
            if (!(i && i.hasAttribute && "function" == typeof i.hasAttribute && i.hasAttribute(d) && i.getAttribute && "function" == typeof i.getAttribute)) return "";
            var r = i.getAttribute(d);
            return "string" != typeof r ? "" : r
        }
    }, {
        "./globals": 3
    }],
    3: [function(e, t, n) {
        t.exports.getDocument = function() {
            return document
        }
    }, {}],
    4: [function(e, t, n) {
        var o = "&pd_rd_plhdr=t",
            i = /(&amp;|\?){1}pd_rd_plhdr=t(&amp;|'|&quot;){1}/g,
            r = /(&|\?){1}pd_rd_plhdr=t(&|'|"|\\"|\\'){1}/g;
        t.exports = function(e, t) {
            var n = t,
                a = e;
            "string" != typeof e || e === o ? a = "" : (a.startsWith("&") && (a = a.replace(/^&+/, "")), a.endsWith("&") && (a = a.replace(/&+$/, "")));
            try {
                return "" === a ? n.replace(new RegExp("\\bpd_rd_plhdr=t&"), "").replace(new RegExp(o + "\\b"), "").replace(new RegExp("\\?pd_rd_plhdr=t\\b"), "") : n.replace(r, "$1" + a + "$2").replace(i, "$1" + a.replace(/&/g, "&amp;") + "$2")
            } catch (e) {
                return t
            }
        }
    }, {}],
    5: [function(e, t, n) {
        var a = e("./ajaxRequest");
        t.exports.Tracer = function(e, t) {
            return this.traceId = e, this.adStartTime = t, this.storedTrace = {}, this.logTrace = function(e, t) {
                if (void 0 !== this.traceId) {
                    var n, a = (new Date).getTime();
                    this.storedTrace.hasOwnProperty(e) || (this.storedTrace[e] = []), (n = t === Object(t) ? Object.assign && "function" == typeof Object.assign ? Object.assign({}, t) : JSON.parse(JSON.stringify(t)) : (n = '{ "' + e + '":"' + t + '"}', JSON.parse(n))).timeStamp = a, n.timeSinceAdStart = a - this.adStartTime, this.storedTrace[e].push(n)
                }
            }, this.sendTrace = function() {
                var t = function() {
                    console.log("failed to send request to /gp/adbarplus")
                };
                if (! function(e) {
                        for (var t in e)
                            if (e.hasOwnProperty(t)) return !1;
                        return !0
                    }(this.storedTrace)) {
                    var e = "/gp/adbarplus?traceId=" + this.traceId + "&systemName=browser";
                    for (var n in a.sendAjaxRequest(e, "POST", JSON.stringify(this.storedTrace), {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }, function(e) {
                            4 === e.readyState && 200 !== e.status && t()
                        }, t), this.storedTrace) this.storedTrace.hasOwnProperty(n) && delete this.storedTrace[n]
                }
            }, this.bindSendTraceToPageOnLoad = function() {
                var e = function(e, t) {
                        return function() {
                            return e.apply(t)
                        }
                    },
                    t = function() {
                        this.sendTrace()
                    },
                    n = function() {
                        this.sendTrace(), window.setInterval(e(t, this), 3e3)
                    };
                "loading" !== document.readyState ? e(n, this)() : window.addEventListener ? window.addEventListener("load", e(n, this)) : document.attachEvent("onreadystatechange", function() {
                    "complete" === document.readyState && e(n, this)()
                })
            }, void 0 !== e && this.bindSendTraceToPageOnLoad(), {
                traceId: this.traceId,
                adStartTime: this.adStartTime,
                storedTrace: this.storedTrace,
                allData: this.allData,
                logTrace: this.logTrace,
                sendTrace: this.sendTrace
            }
        }
    }, {
        "./ajaxRequest": 6
    }],
    6: [function(e, t, n) {
        t.exports.sendAjaxRequest = function(e, t, n, a, o, i) {
            try {
                var r = null;
                if (window.XMLHttpRequest ? r = new XMLHttpRequest : i(), r) {
                    if (r.onreadystatechange = function() {
                            o(r)
                        }, r.open(t, e, !0), null !== a)
                        for (var s in a) r.setRequestHeader(s, a[s]);
                    r.send(n)
                } else i()
            } catch (e) {
                i()
            }
        }
    }, {}],
    7: [function(e, t, n) {
        var l = e("../host/metrics/counters");
        t.exports.checkCache = function(e, t, n, a, o) {
            var i = l.CACHE_COUNTERS;
            if ("undefined" != typeof performance && void 0 !== performance.getEntriesByType) {
                var r = performance.getEntriesByType("resource");
                if (void 0 !== r && Array.isArray(r) && !(r.length < 1) && void 0 !== r[0].duration) {
                    var s = void 0 !== r[0].transferSize ? function(e, t) {
                        0 === e.transferSize ? d(t + "cached") : d(t + "uncached")
                    } : function(e, t) {
                        e.duration < 20 ? d(t + "fastload") : d(t + "slowload")
                    };
                    c(e, i.SF_LIBRARY), c(t, i.SF_HTML)
                }
            }

            function d(e) {
                o(n, a, e, 1)
            }

            function c(e, t) {
                if (e)
                    for (var n = 0; n < r.length; n++) {
                        var a = r[n];
                        if (a.name && -1 !== a.name.indexOf(e)) return void s(a, t)
                    }
            }
        }
    }, {
        "../host/metrics/counters": 14
    }],
    8: [function(e, t, n) {
        var a = e("@apejs/click-tracking");
        t.exports.getSlotPlaceholder = function(e) {
            if (!("pageType" in e && "subPageType" in e && "slot" in e)) return "";
            try {
                return a.getSlotPlaceholder(e.pageType, e.subPageType, e.slot)
            } catch (e) {
                return ""
            }
        }
    }, {
        "@apejs/click-tracking": 1
    }],
    9: [function(e, u, t) {
        /*
            @license
            Underscore.js 1.8.3
            http://underscorejs.org
            (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
            Underscore may be freely distributed under the MIT license.
        */
        var a = function() {
            return window.P && window.P.AUI_BUILD_DATE
        };
        u.exports.throttle = function(n, a, o) {
            var i, r, s, d = null,
                c = 0;
            o || (o = {});
            var l = function() {
                c = !1 === o.leading ? 0 : u.exports.now(), d = null, s = n.apply(i, r), d || (i = r = null)
            };
            return function() {
                var e = u.exports.now();
                c || !1 !== o.leading || (c = e);
                var t = a - (e - c);
                return i = this, r = arguments, t <= 0 || a < t ? (d && (clearTimeout(d), d = null), c = e, s = n.apply(i, r), d || (i = r = null)) : d || !1 === o.trailing || (d = setTimeout(l, t)), s
            }
        }, u.exports.now = function() {
            return Date.now ? Date.now() : (new Date).getTime()
        }, u.exports.addListener = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : window.attachEvent && e.attachEvent("on" + t, n)
        }, u.exports.addWindowListener = function(e, t) {
            u.exports.addListener(window, e, t)
        }, u.exports.removeWindowListener = function(e, t) {
            window.removeEventListener ? window.removeEventListener(e, t, !1) : window.detachEvent && window.detachEvent("on" + e, t)
        }, u.exports.ensureMessageListener = function(e) {
            u.exports.removeWindowListener("message", e), u.exports.addWindowListener("message", e)
        }, u.exports.decodeBase64 = function(e) {
            var t, n, a, o, i, r, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                d = "",
                c = 0;
            for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); c < e.length;) t = s.indexOf(e.charAt(c++)) << 2 | (o = s.indexOf(e.charAt(c++))) >> 4, n = (15 & o) << 4 | (i = s.indexOf(e.charAt(c++))) >> 2, a = (3 & i) << 6 | (r = s.indexOf(e.charAt(c++))), d += String.fromCharCode(t), 64 != i && (d += String.fromCharCode(n)), 64 != r && (d += String.fromCharCode(a));
            return d = function(e) {
                for (var t = "", n = 0, a = 0, o = 0, i = 0; n < e.length;)(a = e.charCodeAt(n)) < 128 ? (t += String.fromCharCode(a), n++) : 191 < a && a < 224 ? (o = e.charCodeAt(n + 1), t += String.fromCharCode((31 & a) << 6 | 63 & o), n += 2) : (o = e.charCodeAt(n + 1), i = e.charCodeAt(n + 2), t += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | 63 & i), n += 3);
                return t
            }(d)
        }, u.exports.createScript = function(e, t, n, a, o) {
            if (!document.getElementById(n)) {
                var i = document.createElement("script");
                return i.async = !0, i.setAttribute("crossorigin", "anonymous"), i.src = e, i.type = t, i.id = n, i.onerror = a, i.onload = o, i
            }
        }, u.exports.isAUIAvailable = a, u.exports.safeFunctionWrapper = function(e, t, n) {
            return a() && "function" == typeof window.P.guardError ? P.guardError("APE-SafeFrame", e) : function() {
                try {
                    e.apply(this, arguments)
                } catch (e) {
                    "function" == typeof t && n && t(n, e)
                }
            }
        }, u.exports.getCookie = function(e) {
            var t = e + "=";
            try {
                for (var n = decodeURIComponent(document.cookie).split(";"), a = 0; a < n.length; a++) {
                    for (var o = n[a];
                        " " == o.charAt(0);) o = o.substring(1);
                    if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
                }
            } catch (e) {}
            return ""
        }, u.exports.disableCookieAccess = function() {
            try {
                Object && Object.defineProperty && "function" == typeof Object.defineProperty ? Object.defineProperty(document, "cookie", {
                    get: function() {
                        return ""
                    },
                    set: function() {}
                }) : (document.__defineGetter__("cookie", function() {
                    return ""
                }), document.__defineSetter__("cookie", function() {}))
            } catch (e) {}
        }, u.exports.setObjectStyles = function(e, t) {
            if (e && t)
                for (var n in t) e.style[n] = t[n];
            return e
        }, u.exports.ABP_STATUS = {
            1: "Enabled",
            0: "NotEnabled",
            "-1": "Unknown"
        }
    }, {}],
    10: [function(i, e, t) {
        /**
         * @license
         * Copyright (c) 2016, Amazon.com
         * APE SafeFrame v1.50.a6f2e15 -- 2019-10-02T20:38:02+0000
         */
        ! function(M, L) {
            var e = i("./messenger/msgHandler"),
                t = i("./metrics/counters"),
                s = i("../components/cacheChecker"),
                k = i("../components/adBarTracer"),
                n = i("./metrics/csm"),
                d = i("./components/advertisementText"),
                _ = i("../components/clickTrackingHelper"),
                R = e.util,
                W = e.messenger,
                O = e.logError,
                c = W.appendErrorDetails,
                a = e.loadScript,
                N = n.sendCsmLatencyMetric,
                D = n.sendCsmCounter,
                l = n.addCsmTag,
                u = e.fireViewableLatencyMetrics,
                z = e.hasClass,
                p = e.createIframeWithAttributes,
                F = e.logCounter,
                B = e.collapseSlot,
                f = e.resizeSafeFrameAd,
                V = e.delayLoad,
                m = e.scriptValidator,
                H = e.sizeValidator,
                U = e.appendJsScript,
                j = e.checkAgainstWhitelist;

            function o() {
                if (M.MAsf) M.MAsf.loadAds();
                else {
                    M.MAsf = {
                        version: "1.50.a6f2e15"
                    }, D(null, null, t.SF_VERSION_COUNTERS.VERSION + ":" + M.MAsf.version, 1);
                    var h = "text/x-dacx-safeframe",
                        i = e.SF_DOMAIN + "/images/G/09/ape/sf/mobile/msf-1.50.a6f2e15._V451370926_.html",
                        g = "data-arid",
                        w = "ape_postMessageUnsupported",
                        v = "ape_postMessageSupported",
                        y = t.AD_LOAD_COUNTERS,
                        n = t.MESSENGER_COUNTERS,
                        o = {},
                        r = {},
                        b = {},
                        x = {};
                    W.supportedCommands = {
                        sendAdBarTrace: function(e, t) {
                            e.options.arid in x && x[e.options.arid].logTrace(t.field, t.traceInfo)
                        },
                        logAPIInvocation: function(e, t) {
                            D(null, null, n.API + t.apiName, 1), D(e.options.slot, e.options.placementId, n.API + t.apiName, 1), e.options.arid in x && x[e.options.arid].logTrace("apiCalls", t)
                        },
                        resizeSafeFrameAd: function(e, t) {
                            R.addWindowListener("resize", o[e.options.arid].defaultResizeSafeFrameHandler), f(e.options.arid, e.options.size.width, e.options.size.height, e.options.maxAdWidth, e.options.adCreativeMetaData.adProgramId, e.options.programIdsToCollapse, e.options.minWidthToPunt, W, b)
                        },
                        changeSize: function(e, t) {
                            var n = e.options.allowedSizes;
                            if (j(t, n, H)) e.iframe.style.height = t.height, e.iframe.style.width = t.width, e.slot.style.height = t.height, e.slot.style.width = t.width, R.removeWindowListener("resize", o[e.options.arid].defaultResizeSafeFrameHandler);
                            else {
                                var a = "Size is not whitelisted: " + t.width + " x " + t.height + c(e.options.arid);
                                O(a)
                            }
                        },
                        collapseSlot: function(e, t) {
                            B(b[e.options.arid].wrapperDivId)
                        },
                        embedScript: function(e, t) {
                            var n = e.options.allowedDomains;
                            if (j(t.src, n, m)) e.slot = L.getElementById(b[e.options.arid].wrapperDivId), void 0 !== e.slot && U(t.src, e.slot, t.charset);
                            else {
                                var a = "Domain is not whitelisted: " + t.src + c(e.options.arid);
                                O(a)
                            }
                        },
                        openInExternalBrowser: function(t, n) {
                            t.options.isAUIAvailable && (n.successCallback = R.safeFunctionWrapper(function() {
                                W.sendMessageToAd(t.options.arid, "mash.openInExternalBrowser.update", {})
                            }), n.failCallback = R.safeFunctionWrapper(function(e) {
                                W.sendMessageToAd(t.options.arid, "mash.openInExternalBrowser.update", {
                                    value: e
                                })
                            }), n.failCallback = R.safeFunctionWrapper(function() {}), P.when("mash").execute(function(e) {
                                e.openInExternalBrowser(n)
                            }))
                        },
                        launchIntentURL: function(t, n) {
                            if (t.options.isAUIAvailable) {
                                if (void 0 === n.url || void 0 === n.fallbackUrl) return;
                                var a = R.safeFunctionWrapper(function() {
                                        W.sendMessageToAd(t.options.arid, "mash.launchIntentURL.update", {})
                                    }),
                                    o = R.safeFunctionWrapper(function(e) {
                                        M.location = n.fallbackUrl, W.sendMessageToAd(t.options.arid, "mash.launchIntentURL.update", {
                                            errorMsg: e
                                        })
                                    });
                                P.when("mash").execute(function(e) {
                                    e.launchIntentURL({
                                        url: n.url,
                                        successCallback: a,
                                        failCallback: o
                                    })
                                })
                            }
                        },
                        advertisementText: function(e, t) {
                            var n = L.getElementById(b[e.options.arid].wrapperDivId);
                            d.appendAdvertisementTextToDiv(n, e.options.arid, e.options.advertisementTextHTMLContentEncoded, e.options.advertisementTextOnTop, x)
                        },
                        logError: function(e, t) {
                            O(t.message + c(e.options.arid) + ": " + e.options.slot, t.error)
                        },
                        customMessage: function(e, t) {
                            W.customMessage(t.key, t.body)
                        },
                        sendCsmLatencyMetric: function(e, t) {
                            N(t.metric, e.options.slot, e.options.placementId, t.metricMsg, t.timestamp)
                        },
                        countMetric: function(e, t) {
                            D(e.options.slot, e.options.placementId, t.metricMsg, t.value)
                        },
                        addCsmTag: function(e, t) {
                            l(t.tag, e.options.slot, e.options.placementId, t.msg)
                        },
                        fireViewableLatencyMetrics: function(e, t) {
                            u(e.options.arid, e.options.slot, e.options.placementId, t.adLoadedTimestamp)
                        },
                        notifyWhenVisible: function(e, t) {
                            r[e.options.arid] || (e.rendered = !1, r[e.options.arid] = e), a(e.options.slot, e.options.placementId)
                        },
                        enableViewabilityTracker: function(e, t) {
                            W.updateViewability(e.options.arid);
                            var n = R.throttle(W.updateViewability, 20);
                            T(e.options.arid, e.options.slot, "viewabilityTracker", function() {
                                n(e.options.arid)
                            }), R.addWindowListener("scroll", o[e.options.arid].viewabilityTracker), R.addWindowListener("resize", o[e.options.arid].viewabilityTracker), R.addListener(L, "visibilitychange", o[e.options.arid].viewabilityTracker)
                        },
                        enableNoInventoryViewabilityTrackerAndInvokeFallback: function(e) {
                            W.takeSnapshotOfSlotPosition(e.options.arid), W.updateNoInventoryViewability(e.options.arid), W.sendMessageToAd(e.options.arid, "handleFallbackBehavior", {});
                            var t = R.throttle(W.updateNoInventoryViewability, 20);
                            T(e.options.arid, e.options.slot, "noInventoryViewabilityTracker", function() {
                                t(e.options.arid)
                            }), R.addWindowListener("scroll", o[e.options.arid].noInventoryViewabilityTracker), R.addWindowListener("resize", o[e.options.arid].noInventoryViewabilityTracker), R.addListener(L, "visibilitychange", o[e.options.arid].noInventoryViewabilityTracker)
                        },
                        onPageEvent: function(e, t) {
                            V(t.eventName, R.safeFunctionWrapper(function() {
                                W.sendMessageToAd(e.options.arid, "onPageEvent.update", {})
                            }, O, "Failed to send message to Ad"))
                        },
                        getAdInfo: function(e, t) {
                            var n = e.options.slot.split("_")[1];
                            n && (L.mobileAds = L.mobileAds || {}, L.mobileAds[n] = t.mobileAdsInfo)
                        }
                    }, R.addWindowListener("message", W.receiveMessage), M.MAsf.registerCustomMessageListener = W.registerCustomMessageListener, M.MAsf.sendCustomMessage = W.sendCustomMessage, M.MAsf.loadAds = function() {
                        var e, t, n, a, o, i = 0,
                            r = null;
                        for (e = L.getElementsByClassName(h); r = e[i++];) {
                            var s = null,
                                d = null;
                            if ("DIV" === r.tagName && z(r, h)) try {
                                var c = "ape_" + (s = JSON.parse(r.getAttribute("data-ad-details"))).slot + "_placement",
                                    l = L.getElementById(c);
                                if (!W.adMap[s.arid] && l && l.innerHTML) {
                                    l.innerHTML = "", r.removeAttribute(g);
                                    var u = "ape_" + s.slot + "_text-wrapper";
                                    L.getElementById(u) && L.getElementById(u).remove()
                                }
                                if (r.getAttribute(g)) continue;
                                if (n = s.slot, t = L.getElementById("ape_" + n + "_userData")) try {
                                    d = JSON.parse(t.getAttribute("data-user-data"))
                                } catch (e) {
                                    d = null
                                }
                                s.arid = s.arid || Math.random().toString(16).slice(2), x[s.arid] = new k.Tracer(s.traceId, M[s.slotName] && M[s.slotName].adStartTime || 0), x[s.arid].logTrace("safeFrameInput", s);
                                var p = {};
                                p.caches = M.caches ? M.caches : null, p.plugins = L.plugins ? L.plugins : null, p.cookies = L.cookie ? L.cookie : null, p.userAgents = navigator.userAgent ? navigator.userAgent : null, x[s.arid].logTrace("browserData", p), r.setAttribute(g, s.arid), s.hostDomain = location.protocol + "//" + location.host, s.userAgent = M.top.navigator.userAgent, s.isAUIAvailable = R.isAUIAvailable(), s.cookie = C(s.allowedCookies), s.aPageStart = M.aPageStart, s.adStartTime = M[s.slotName] && M[s.slotName].adStartTime || 0, s.userConnectionInfo = E(d), I(s);
                                var f = "d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");
                                s.allowedDomains = "object" == typeof s.allowedDomains && 0 <= s.allowedDomains.length ? s.allowedDomains.concat(f) : f, T(s.arid, n, "defaultResizeSafeFrameHandler", A(s)), a = s.arid, o = n, b[a] = {
                                    slotId: o,
                                    wrapperDivId: "ape_" + o + "_wrapper",
                                    placementDivId: "ape_" + o + "_placement",
                                    iframeId: "ape_" + o + "_iframe",
                                    textDivWrapperId: "ape_" + o + "_text-wrapper",
                                    textDivId: "ape_" + o + "_text"
                                }, N("af", n, s.placementId), D(n, s.placementId, y.START, 1), "clickTracking" in s && "" === s.clickTracking && (s.clickTracking = _.getSlotPlaceholder(s));
                                var m = {};
                                if (m.hostDomain = s.hostDomain, m.allowedSizes = s.allowedSizes, m.allowedDomains = s.allowedDomains, m.productAdsUrl = s.productAdsUrl, m.parentLocation = s.parentLocation, m.queryParams = s.queryParams, m.aPageStart = s.aPageStart, m.adStartTime = s.adStartTime, m.safeFrameSrc = s.safeFrameSrc, m.abpStatus = s.abpStatus, "function" != typeof M.postMessage) {
                                    F(w, 1), B(r.getAttribute("id")), m.postMessage = "postMessageNotSupported";
                                    continue
                                }
                                F(v, 1), V(s.loadAfter, S(s), s.extraDelay, r), m.postMessage = "postMessageSupported", m.loadAfter = s.loadAfter, x[s.arid].logTrace("additionalInitilizationParams", m)
                            } catch (e) {
                                s = null, O("Error parsing sf tag", e)
                            }
                        }
                    }, M.MAsf.loadAds(), R.addWindowListener("resize", function() {
                        M.MAsf.sendCustomMessage("resize", {
                            height: M.innerHeight,
                            width: M.innerWidth
                        })
                    })
                }

                function T(e, t, n, a) {
                    o[e] = o[e] || {}, o[e][n] = R.safeFunctionWrapper(a, O, "Error within ad handler " + n + ": " + t)
                }

                function a(e, t) {
                    var n, a, o, i = R.safeFunctionWrapper(function() {
                        for (var e in r) {
                            (r[e].iframe ? r[e].iframe.contentWindow : null) && !r[e].alreadyRendered && (void 0, n = {
                                key: "readyToRender",
                                data: t = e
                            }, W.sendMessageToAd(t, "customMessage", n), r[t].alreadyRendered = !0)
                        }
                        var t, n
                    });
                    n = i, a = e, o = t, L.hidden ? (D(a, o, "prerender", 1), R.addListener(L, "visibilitychange", function e() {
                        try {
                            n(), R.removeWindowListener("visibilitychange", e)
                        } catch (e) {
                            O("Error prerendering ad: " + a, e)
                        }
                    })) : n()
                }

                function A(e) {
                    return function() {
                        f(e.arid, e.size.width, e.size.height, e.maxAdWidth, e.adCreativeMetaData.adProgramId, e.programIdsToCollapse, e.minWidthToPunt, W, b)
                    }
                }

                function S(a) {
                    return R.safeFunctionWrapper(function() {
                        var e = {
                            callbackOccurred: !0
                        };
                        e.loadAfter = a.loadAfter, x[a.arid].logTrace("pageCallBack", e), D(a.slot, a.placementId, y.CALLBACK, 1);
                        var t = b[a.arid].placementDivId;
                        if (t) {
                            var n = L.getElementById(t);
                            n && !n.innerHTML && function(t) {
                                try {
                                    var e = L.getElementById(b[t.arid].placementDivId),
                                        n = {},
                                        a = b[t.arid].iframeId,
                                        o = p(t, a, i);
                                    o.onload = function() {
                                        s.checkCache(t.MAsfUrl, i, t.slot, t.placementId, D)
                                    }, e.appendChild(o), N("cf", t.slot, t.placementId), D(t.slot, t.placementId, y.IFRAME_CREATED, 1), W.adMap[t.arid] = {
                                        slot: e,
                                        iframe: o,
                                        options: t
                                    }, n.id = o.id, n.src = o.src, n.scrolling = o.scrolling, n.height = o.height, n.width = o.width, n.className = o.className, n.styleCssText = o.style.cssText, n.sandbox = o.sandbox, x[t.arid].logTrace("createSafeFrame", n)
                                } catch (e) {
                                    O("Error creating safeFrame: " + t.slot, e), x[t.arid] && x[t.arid].logTrace("createSafeFrame", {
                                        error: {
                                            message: "errorCreatingSafeFrame",
                                            ex: e
                                        }
                                    })
                                }
                            }(a)
                        }
                    }, O, "Error in callback to create Safeframe.")
                }

                function E(e) {
                    var t = e && e.userContext,
                        n = {
                            mobileConnectionType: t && t.mobileConnectionType
                        },
                        a = t && t.connectionType;
                    if (a) n.connectionType = a.toLowerCase();
                    else {
                        var o = M.navigator,
                            i = o && (o.connection || o.mozConnection || o.webkitConnection);
                        n.connectionType = i && i.type || "unknown"
                    }
                    return n
                }

                function C(e) {
                    var t = "";
                    if (Array.isArray(e))
                        for (var n = 0; n < e.length; n++) {
                            var a = R.getCookie(e[n]);
                            void 0 !== a && "" !== a && (t += e[n] + "=" + a + "; ")
                        }
                    return t
                }

                function I(n) {
                    n.isAUIAvailable && P.now("devmea:controller").execute(function(e) {
                        if (void 0 !== e) {
                            var t = {
                                chosenPrediction: e.getPrediction(),
                                headPrediction: e.getHeadPrediction(),
                                serverPrediction: e.getServerPrediction()
                            };
                            n.toofanPredictionInfo = t
                        }
                    })
                }
            }
            R.safeFunctionWrapper(function() {
                "undefined" == typeof JSON ? a("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js", o) : o()
            }, O, "Error initializing safeFrame")()
        }(window, document)
    }, {
        "../components/adBarTracer": 5,
        "../components/cacheChecker": 7,
        "../components/clickTrackingHelper": 8,
        "./components/advertisementText": 11,
        "./messenger/msgHandler": 13,
        "./metrics/counters": 14,
        "./metrics/csm": 15
    }],
    11: [function(e, t, n) {
        var r = e("../../components/util");
        t.exports.appendAdvertisementTextToDiv = function(e, t, n, a, o) {
            var i = {};
            i.advertisementTextHTMLContentEncoded = n || "undefined", i.wrapperDivId = e, o[t].logTrace("loadAdvertisementText", i), n && e.insertAdjacentHTML(a ? "beforebegin" : "afterend", r.decodeBase64(n))
        }
    }, {
        "../../components/util": 9
    }],
    12: [function(e, d, t) {
        function c(e, t, n) {
            var a = 0;
            return document.hidden ? a : (a = 0 < e ? n - e : 0 < t ? Math.min(t, n) : 0, Math.min(a, t - e))
        }

        function r() {
            try {
                var e = {};
                return e.t = window.screenY ? window.screenY : window.screenTop, e.l = window.screenX ? window.screenX : window.screenLeft, e.w = d.exports.windowWidth(), e.h = d.exports.windowHeight(), e.b = e.t + e.h, e.r = e.l + e.w, e
            } catch (e) {
                return null
            }
        }

        function s(e, t) {
            try {
                var n = {},
                    a = function(e, t) {
                        try {
                            var n = {},
                                a = t || e.getBoundingClientRect();
                            return n.t = a.top, n.l = a.left, n.r = a.right, n.b = a.bottom, n.w = a.width || n.r - n.l, n.h = a.height || n.b - n.t, n.z = e ? Number(window.getComputedStyle(e, null).zIndex) : NaN, n
                        } catch (e) {
                            return null
                        }
                    }(e, t),
                    o = function(e) {
                        try {
                            var t = {},
                                n = d.exports.windowWidth(),
                                a = d.exports.windowHeight(),
                                o = Math.max(0, c(e.t, e.b, a)),
                                i = Math.max(0, c(e.l, e.r, n)),
                                r = o * i,
                                s = e.h * Math.min(e.w, d.exports.windowWidth());
                            return t.xiv = Number(Math.min(1, i / e.w).toFixed(2)), t.yiv = Number(Math.min(1, o / e.h).toFixed(2)), t.iv = Number(Math.min(1, Math.max(0, r / s)).toFixed(2)), t
                        } catch (e) {
                            return null
                        }
                    }(a);
                return n.t = a.t, n.l = a.l, n.r = a.r, n.b = a.b, n.w = a.w, n.h = a.h, n.z = a.z, n.xiv = o.xiv, n.yiv = o.yiv, n.iv = o.iv, n
            } catch (e) {
                return null
            }
        }

        function l(e, t) {
            try {
                var n = {},
                    a = t || e.getBoundingClientRect();
                return n.t = a.top, n.l = a.left, n.r = d.exports.windowWidth() - a.right, n.b = d.exports.windowHeight() - a.bottom, n.xs = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) > d.exports.windowWidth() ? 1 : 0, n.yx = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) > d.exports.windowHeight() ? 1 : 0, n
            } catch (e) {
                return null
            }
        }
        d.exports.findVerticalPositionReached = function() {
            try {
                return window.scrollY + d.exports.windowHeight()
            } catch (e) {
                return null
            }
        }, d.exports.findDistanceFromViewport = function(e) {
            try {
                return e.getBoundingClientRect().top - d.exports.windowHeight()
            } catch (e) {
                return null
            }
        }, d.exports.getViewableInfo = function(e) {
            if (!e) return null;
            var t = {},
                n = r(),
                a = s(e),
                o = l(e);
            return n && a && o ? (t.geom = {}, t.geom.win = n, t.geom.self = a, t.geom.exp = o, t.payload = {}, t.payload.wh = n.h, t.payload.ww = n.w, t.payload.sx = window.scrollX, t.payload.sy = window.scrollY, t.payload.ah = a.h, t.payload.aw = a.w, t.payload.top = a.t, t.payload.left = a.l, t) : null
        }, d.exports.takeSnapshotOfSlotPosition = function(e) {
            try {
                return {
                    initialBoundingRect: e.getBoundingClientRect(),
                    adHeight: e.offsetHeight,
                    adWidth: e.offsetWidth,
                    originalScrollX: window.scrollX,
                    originalScrollY: window.scrollY
                }
            } catch (e) {
                return null
            }
        }, d.exports.getNoInventoryViewabilityData = function(e) {
            var t = {},
                n = function(e) {
                    try {
                        var t = e.initialBoundingRect,
                            n = t.top - (window.scrollY - e.originalScrollY),
                            a = n + e.adHeight,
                            o = t.left - (window.scrollX - e.originalScrollX),
                            i = o + e.adWidth;
                        return {
                            top: n,
                            bottom: a,
                            left: o,
                            right: i,
                            width: e.adWidth,
                            height: e.adHeight
                        }
                    } catch (e) {
                        return null
                    }
                }(e),
                a = r(),
                o = s(null, n),
                i = l(null, n);
            return a && o && i ? (t.geom = {}, t.geom.win = a, t.geom.self = o, t.geom.exp = i, t.payload = {}, t.payload.wh = a.h, t.payload.ww = a.w, t.payload.sx = window.scrollX, t.payload.sy = window.scrollY, t.payload.ah = o.h, t.payload.aw = o.w, t.payload.top = o.t, t.payload.left = o.l, t) : null
        }, d.exports.windowHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, d.exports.windowWidth = function() {
            return window.innerWidth || document.documentElement.clientWidth
        }
    }, {}],
    13: [function(e, t, n) {
        var w = e("../components/viewability"),
            p = e("../../components/util"),
            a = e("../metrics/csm"),
            o = a.sendCsmLatencyMetric,
            v = a.sendCsmCounter,
            i = {
                ERROR: "ERROR",
                WARN: "WARN",
                FATAL: "FATAL"
            },
            l = r();

        function y(e, t) {
            var n = t || new Error(e);
            v("", null, "safeFrameError", 1), window.sfLogErrors && (window.ueLogError ? window.ueLogError(n, {
                logLevel: i.ERROR,
                attribution: "APE-safeframe",
                message: e + " "
            }) : "undefined" != typeof console && console.error && console.error(e, n))
        }

        function r() {
            var e = window.location.host.match(/^.*\.([^.:/]*)/),
                t = null;
            if (e && 1 < e.length && (t = e[1]), !/s/.test(location.protocol)) return "cn" === t ? "http://g-ec4.images-amazon.com" : "http://z-ecx.images-amazon.com";
            var n = "na";
            return /^(com|ca|mx)$/.test(t) ? n = "na" : /^(uk|de|fr|it|es|in|ae|sa)$/.test(t) ? n = "eu" : /^(jp|au)$/.test(t) ? n = "fe" : /^(cn)$/.test(t) && (n = "cn"), "https://images-" + n + ".ssl-images-amazon.com"
        }

        function u(e) {
            return e.replace(/^.{1,5}:\/\/|^\/\//, "")
        }

        function b(e) {
            var t = document.getElementById(e);
            void 0 !== t && t && (t.style.display = "none")
        }

        function f(e, t, n, a) {
            var o = !1,
                i = function() {
                    a(n, e) && (t(), o = !0)
                },
                r = p.safeFunctionWrapper(p.throttle(function() {
                    i(), o && (p.removeWindowListener("scroll", i), p.removeWindowListener("resize", i))
                }, 20));
            p.addWindowListener("scroll", r), p.addWindowListener("resize", r)
        }
        t.exports.util = p, t.exports.viewability = w, t.exports.messenger = new function(e, t, n) {
            var c = this;
            this.adMap = e || {}, this.supportedCommands = t || {}, this.msgListeners = n || {};
            var r = function(e) {
                var t = c.adMap,
                    n = t[e].options;
                if (t === {} || n === {}) return null;
                var a = "ape_" + n.slot + "_iframe";
                return t[e].iframe && (t[e].iframe = t[e].iframe && t[e].iframe.innerHTML ? t[e].iframe : document.getElementById(a)), t[e].iframe
            };
            this.sendMessageToAd = function(e, t, n) {
                var a = r(e),
                    o = a ? a.contentWindow : null;
                if (o) {
                    var i = {
                        command: t,
                        data: n
                    };
                    i = JSON.stringify(i), o.postMessage(i, "*")
                }
            }, this.receiveMessage = function(t) {
                var e = c.adMap,
                    n = c.supportedCommands;
                if (e !== {}) {
                    var a, o, i, r, s;
                    try {
                        if (t.data && t.data.message && /.*Mash.*/i.test(t.data.message.id)) throw "Received Mash message";
                        o = e[(a = JSON.parse(t.data)).arid]
                    } catch (e) {
                        return
                    }
                    try {
                        if (s = t, !(r = o) || !r.options || u(s.origin) !== u(l) || "object" != typeof a.data) throw "Invalid Message: " + JSON.stringify(t.data);
                        var d = n[a.command];
                        d && (o.options.debug && "undefined" != typeof console && console.log(t), d(o, a.data))
                    } catch (e) {
                        i = "Problem with message: " + t.data, void 0 !== a && (i += c.appendErrorDetails(a.arid)), y(i, e)
                    }
                }
            }, this.appendErrorDetails = function(e) {
                var t = c.adMap;
                if (t === {}) return "";
                var n = "";
                if (void 0 !== t[e]) {
                    var a = t[e].options;
                    void 0 !== a.aanResponse && (n = " Ad Details: " + JSON.stringify(a.aanResponse))
                }
                return n
            }, this.customMessage = function(e, t) {
                var n = c.msgListeners;
                if (n[e]) try {
                    n[e](t)
                } catch (e) {
                    y("Custom Message Error", e)
                } else y("Unrecognized custom message key: " + e)
            }, this.registerCustomMessageListener = function(e, t, n) {
                var a = !1,
                    o = c.msgListeners;
                try {
                    !o[e] || "function" != typeof o[e] || n ? (o[e] = t, a = !0) : y("Duplicate Key", new Error("Custom message listener already exists for key: " + e))
                } catch (e) {
                    y("Error registering custom message listener", e)
                }
                return a
            }, this.sendCustomMessage = function(e, t) {
                var n = c.adMap,
                    a = {
                        key: e,
                        data: t
                    };
                for (var o in n) c.sendMessageToAd(o, "customMessage", a)
            }, this.sendCustomMessageToAd = function(e, t, n) {
                var a = {
                    key: t,
                    data: n
                };
                c.sendMessageToAd(e, "customMessage", a)
            }, this.takeSnapshotOfSlotPosition = function(e) {
                var t = c.adMap,
                    n = t && t[e] && t[e].options;
                if (t && t !== {} && n && n !== {}) {
                    var a = r(e);
                    c.adMap[e].options.slotSnapshot = w.takeSnapshotOfSlotPosition(a)
                }
            }, this.updateViewability = function(e) {
                var t = c.adMap,
                    n = t && t[e] && t[e].options;
                if (t && t !== {} && n && n !== {}) {
                    var a = r(e),
                        o = t[e].options.viewabilityStandards,
                        i = w.getViewableInfo(a);
                    null !== i && (i.viewabilityStandards = o, c.sendMessageToAd(e, "updateViewability", i))
                }
            }, this.updateNoInventoryViewability = function(e) {
                var t = c.adMap,
                    n = t && t[e] && t[e].options,
                    a = n && n.slotSnapshot;
                if (t && t !== {} && n && n !== {} && a) {
                    var o = n.viewabilityStandards,
                        i = w.getNoInventoryViewabilityData(a);
                    null !== i && (i.viewabilityStandards = o, c.sendMessageToAd(e, "updateViewability", i))
                }
            }
        }, t.exports.logError = y, t.exports.SF_DOMAIN = l, t.exports.loadScript = function(e, t) {
            var n = document.createElement("script");
            n.src = e, n.setAttribute("crossorigin", "anonymous"), n.onload = n.onreadystatechange = function() {
                n.readyState && "loaded" !== n.readyState && "complete" !== n.readyState || (n.onload = n.onreadystatechange = null, t && "function" == typeof t && t())
            }, n.onerror = function(e) {
                return y("Error loading script", e), !1
            }, (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(n)
        }, t.exports.fireViewableLatencyMetrics = function(e, t, n, a) {
            window.apeViewableLatencyTrackers && window.apeViewableLatencyTrackers[e] && window.apeViewableLatencyTrackers[e].valid && (window.apeViewableLatencyTrackers[e].loaded = !0, window.apeViewableLatencyTrackers[e].viewed && (o("ld", t, n, "viewablelatency", a), v(t, n, "htmlviewed:loaded", 1)))
        }, t.exports.hasClass = function(e, t) {
            var n = new RegExp("(^|\\s)" + t + "(\\s|$)"),
                a = e.className;
            return a && n.test(a)
        }, t.exports.createIframeWithAttributes = function(e, t, n) {
            var a, o = JSON.stringify(e);
            if (/MSIE (6|7|8)/.test(navigator.userAgent)) try {
                a = document.createElement("<iframe name='" + o + "'>")
            } catch (e) {
                (a = document.createElement("iframe")).name = o
            } else(a = document.createElement("iframe")).name = o;
            return a.id = t, a.src = n, a.height = e.size.height || "250px", a.width = e.size.width || "300px", a.className = e.iframeClass || "", a.setAttribute("frameborder", "0"), a.setAttribute("marginheight", "0"), a.setAttribute("marginwidth", "0"), a.setAttribute("scrolling", "no"), a.setAttribute("allowtransparency", "true"), a.setAttribute("allowfullscreen", ""), a.setAttribute("mozallowfullscreen", ""), a.setAttribute("webkitallowfullscreen", ""), a.setAttribute("data-arid", e.arid), a.style.cssText = e.iframeExtraStyle || "", a.sandbox = "allow-scripts allow-top-navigation allow-popups allow-popups-to-escape-sandbox allow-same-origin", a
        }, t.exports.logCounter = function(e, t) {
            window.ue && "function" == typeof window.ue.count && window.ue.count(e, t)
        }, t.exports.collapseSlot = b, t.exports.resizeSafeFrameAd = function(t, n, a, e, o, i, r, s, d) {
            try {
                var c = document.getElementById(d[t].placementDivId),
                    l = document.getElementById(d[t].wrapperDivId) || c,
                    u = document.getElementById(d[t].iframeId);
                if (null === l || null === c || null === u) return;
                if (r && i && -1 < i.indexOf(o) && 0 < c.offsetWidth && c.offsetWidth < r) return v(d[t].slotId, null, "puntOnMinWidth:afterRendering", 1), void b(d[t].placementDivId);
                var p = a,
                    f = n,
                    m = function(e) {
                        p = Math.round(e * a / n), f = Math.round(e)
                    },
                    h = 0 === l.offsetWidth ? w.windowWidth() : l.offsetWidth;
                e && w.windowHeight() < w.windowWidth() ? m(e) : m(h), s && s.adMap && s.adMap[t] && s.adMap[t].options && s.adMap[t].options.slotSnapshot && (s.adMap[t].options.slotSnapshot.adHeight = p, s.adMap[t].options.slotSnapshot.adWidth = f), p += "px", f += "px", u.style.height = p;
                var g = {
                    width: u.style.width = f,
                    height: p
                };
                l !== c && (c.style.height = p, s.sendMessageToAd(t, "resizeCreativeWrapper", g))
            } catch (e) {
                y("Error resizing ad: " + d[t].slotId, e)
            }
        }, t.exports.delayLoad = function(e, t, n, a) {
            var o = "undefined" != typeof P,
                i = "undefined" != typeof amznJQ,
                r = "number" == typeof n && 0 !== n ? function() {
                    setTimeout(t, n)
                } : t;
            if ("windowOnLoad" === e) "complete" === document.readyState ? r() : p.addWindowListener("load", r);
            else if ("spATFEvent" === e) o ? P.when("search-page-utilities").execute(function(e) {
                e.afterEvent("spATFEvent", r)
            }) : i ? amznJQ.available("search-js-general", function() {
                window.SPUtils.afterEvent("spATFEvent", r)
            }) : r();
            else if ("aboveTheFold" === e) o ? P.when("af").execute(r) : i ? amznJQ.onCompletion("amznJQ.AboveTheFold", r) : r();
            else if ("criticalFeature" === e) o ? P.when("cf").execute(r) : i ? amznJQ.onCompletion("amznJQ.criticalFeature", r) : r();
            else if ("r2OnLoad" === e) o ? P.when("r2Loaded").execute(r) : i ? amznJQ.onReady("r2Loaded", r) : r();
            else if (e.match("[^:]+:.+")) {
                var s = e.split(":"),
                    d = s[0].split("."),
                    c = s[1],
                    l = 2 < s.length ? s[2] : c;
                o ? P.when(l, "A").execute(r) : i && 1 < d.length ? amznJQ[d[1]](c, r) : r()
            } else if (e.match(/^\d{1,4}px$/g)) f(parseInt(e, 10), r, a, function(e, t) {
                return e && w.findDistanceFromViewport(e) <= t
            });
            else {
                var u = /^reached(\d{1,5}px)FromTop$/g.exec(e);
                u ? f(parseInt(u[1], 10), r, a, function(e, t) {
                    return w.findVerticalPositionReached() >= t
                }) : r()
            }
        }, t.exports.getMediaCentralOrigin = r, t.exports.appendJsScript = function(e, t, n) {
            var a = document.createElement("script");
            a.charset = n || "utf-8", a.src = e, t.appendChild(a)
        }, t.exports.scriptValidator = function(e, t) {
            return e.match(/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/)[2] === t
        }, t.exports.sizeValidator = function(e, t) {
            return e.height === t.height && e.width === t.width
        }, t.exports.checkAgainstWhitelist = function(e, t, n) {
            if (!t || "object" != typeof t) return !1;
            for (var a = 0, o = t.length; a < o; a++)
                if (n(e, t[a])) return !0;
            return !1
        }
    }, {
        "../../components/util": 9,
        "../components/viewability": 12,
        "../metrics/csm": 15
    }],
    14: [function(e, t, n) {
        t.exports.AD_LOAD_COUNTERS = {
            START: "adload:start",
            CALLBACK: "adload:delayloadcallback",
            IFRAME_CREATED: "adload:iframecreated"
        }, t.exports.CACHE_COUNTERS = {
            SF_LIBRARY: "cache:sflibrary:",
            SF_HTML: "cache:sfhtml:"
        }, t.exports.FEEDBACK_COUNTERS = {
            REQUEST: "adfeedback:request",
            SUCCESS: "adfeedback:success",
            FALLBACK: "adfeedback:fallback"
        }, t.exports.MESSENGER_COUNTERS = {
            API: "messenger:"
        }, t.exports.ABP_STATUS_COUNTERS = {
            1: "abpstatus:enabled",
            0: "abpstatus:notenabled",
            "-1": "abpstatus:unknown"
        }, t.exports.SF_VERSION_COUNTERS = {
            VERSION: "sfversion"
        }
    }, {}],
    15: [function(e, t, n) {
        var s = {
            bb: "uet",
            af: "uet",
            cf: "uet",
            be: "uet",
            ld: "uex"
        };

        function d(e, t, n, a) {
            var o = [e, t, n];
            return a && o.push(a), o
        }
        t.exports.sendCsmLatencyMetric = function(e, t, n, a, o) {
            var i = s[e],
                r = a ? a + ":" : "";
            "function" == typeof window[i] && (window[i].apply(this, d(e, "adplacements:" + r + t.replace(/_/g, ":"), {
                wb: 1
            }, o)), n && window[i].apply(this, d(e, "adplacements:" + r + n, {
                wb: 1
            }, o)))
        }, t.exports.sendCsmCounter = function(e, t, n, a) {
            if (window.ue && "function" == typeof window.ue.count) {
                var o = "adplacements:" + n;
                if (e && (o += ":" + e.replace(/_/g, ":")), window.ue.count(o, a), t) {
                    var i = "adplacements:" + (n && t ? n + ":" : n) + t;
                    window.ue.count(i, a)
                }
            }
        }, t.exports.addCsmTag = function(e, t, n, a) {
            if (window.ue && window.ue.tag) {
                var o = e + ":" + t.replace(/_/g, ":") + (a ? ":" + a : "");
                if (window.ue.tag(o), n) {
                    var i = e + ":" + n + (a ? ":" + a : "");
                    window.ue.tag(i)
                }
            }
        }
    }, {}]
}, {}, [10]);