/* prebid.js v1.34.0
Updated : 2019-08-05 */
!(function(u) {
    var s = window.instBidChunk;
    window.instBidChunk = function(e, t, n) {
        for (var r, i, o, a = 0, d = []; a < e.length; a++) i = e[a], c[i] && d.push(c[i][0]), c[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
        for (s && s(e, t, n); d.length;) d.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        c = {
            189: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = u, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 628)
})({
    0: function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.getLatestHighestCpmBid = a.getOldestHighestCpmBid = a.getHighestCpm = void 0;
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        a.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, a.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) B(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === (void 0 === e ? "undefined" : d(e))) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(T(e));
                    else
                        for (var a = 0; a < o; a++) t.push(T(e[a]))
            }
            return t
        }, a.parseGPTSingleSizeArray = T, a.uniques = w, a.flatten = C, a.getBidRequest = function(n, e) {
            var r = void 0;
            return e.some((function(e) {
                var t = (0, o.default)(e.bids, (function(t) {
                    return ["bidId", "adId", "bid_id"].some((function(e) {
                        return t[e] === n
                    }))
                }));
                return t && (r = t), t
            })), r
        }, a.getKeys = O, a.getValue = R, a.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : instBid.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(C, [])
            })).reduce(C).filter(w)
        }, a.isGptPubadsDefined = function() {
            if (window.googletag && a.isFn(window.googletag.pubads) && a.isFn(window.googletag.pubads().getSlots)) return !0
        }, a.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, a.adUnitsFilter = function(e, t) {
            return (0, u.default)(e, t && t.adUnitCode)
        }, a.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, a.deepClone = function(e) {
            return (0, i.default)(e)
        }, a.inIframe = function() {
            try {
                return a.getWindowSelf() !== a.getWindowTop()
            } catch (e) {
                return !0
            }
        }, a.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, a.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, a.timestamp = function() {
            return (new Date).getTime()
        }, a.checkCookieSupport = function() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }, a.cookiesAreEnabled = function() {
            if (a.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, a.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, a.groupBy = function(e, n) {
            return e.reduce((function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }), {})
        }, a.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, a.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            return e ? '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>' : ""
        }, a.getDefinedParams = function(n, e) {
            return e.filter((function(e) {
                return n[e]
            })).reduce((function(e, t) {
                return r(e, (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                })({}, t, n[t]))
            }), {})
        }, a.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return (0, u.default)(t, e)
                }))) return !1;
            if (e.video && e.video.context) return (0, u.default)(["instream", "outstream"], e.video.context);
            return !0
        }, a.getBidderRequest = function(e, t, n) {
            return (0, o.default)(e, (function(e) {
                return 0 < e.bids.filter((function(e) {
                    return e.bidder === t && e.adUnitCode === n
                })).length
            })) || {
                start: null,
                auctionId: null
            }
        }, a.getUserConfiguredParams = function(e, t, n) {
            return e.filter((function(e) {
                return e.code === t
            })).map((function(e) {
                return e.bids
            })).reduce(C, []).filter((function(e) {
                return e.bidder === n
            })).map((function(e) {
                return e.params || {}
            }))
        }, a.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, a.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, a.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return N(t, e)
            }
        }, a.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return N(e, t)
            }
        }, a.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  "
        }, a.deletePropertyFromObject = function(e, t) {
            var n = r({}, e);
            return delete n[t], n
        }, a.removeRequestId = function(e) {
            return a.deletePropertyFromObject(e, "requestId")
        }, a.isInteger = function(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, a.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                return "_" + t.toLowerCase()
            })).replace(/^_/, "")
        }, a.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return a._each(e, (function(e, t) {
                if (a.isArray(e)) {
                    var n = [];
                    a._each(e, (function(e) {
                        !(e = a.getValueString(r + "." + t, e)) && "" !== e || n.push(e)
                    })), e = n
                } else {
                    if (e = a.getValueString(r + "." + t, e), !a.isStr(e)) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            })), i
        }, a.convertTypes = function(t, n) {
            return Object.keys(t).forEach((function(e) {
                n[e] && (a.isFn(t[e]) ? n[e] = t[e](n[e]) : n[e] = (function(e, t) {
                    return "string" === e ? t && t.toString() : "number" === e ? Number(t) : t
                })(t[e], n[e]), isNaN(n[e]) && delete n.key)
            })), n
        };
        var n = t(3),
            i = c(t(67)),
            o = c(t(10)),
            u = c(t(7)),
            s = t(11);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = t(4),
            l = !1,
            g = Object.prototype.toString,
            p = Boolean(window.console),
            v = Boolean(p && window.console.log),
            y = Boolean(p && window.console.info),
            m = Boolean(p && window.console.warn),
            b = Boolean(p && window.console.error);
        a.replaceTokenInString = function(i, e, o) {
            return a._each(e, (function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            })), i
        };
        var h, S = (h = 0, function() {
            return ++h
        });

        function E() {
            return S() + Math.random().toString(16).substr(2)
        }

        function T(e) {
            if (a.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function A(e, t) {
            return e = [].slice.call(e), t && e.unshift(t), e.unshift("display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;"), e.unshift("%cPrebid"), e
        }
        a.getUniqueIdentifierStr = E, a.generateUUID = function e(t) {
            return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, a.getBidIdParameter = function(e, t) {
            return t && t[e] ? t[e] : ""
        }, a.tryAppendQueryString = function(e, t, n) {
            return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
        }, a.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, a.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? O(t).map((function(e) {
                return e + "=" + encodeURIComponent(R(t, e))
            })).join("&") : ""
        }, a.getTopWindowLocation = function() {
            if (a.inIframe()) {
                var e = void 0;
                try {
                    e = a.getAncestorOrigins() || a.getTopFrameReferrer()
                } catch (e) {
                    logInfo("could not obtain top window location", e)
                }
                if (e) return (0, s.parse)(e, {
                    decodeSearchAsString: !0
                })
            }
            return a.getWindowLocation()
        }, a.getTopFrameReferrer = function() {
            try {
                window.top.location.toString();
                for (var e = "", t = void 0;
                    (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer), t !== window.top;);
                return e
            } catch (e) {
                return window.document.referrer
            }
        }, a.getAncestorOrigins = function() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }, a.getWindowTop = function() {
            return window.top
        }, a.getWindowSelf = function() {
            return window.self
        }, a.getWindowLocation = function() {
            return window.location
        }, a.getTopWindowUrl = function() {
            var t = void 0;
            try {
                t = a.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, a.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, a.logMessage = function() {
            I() && v && console.log.apply(console, A(arguments, "MESSAGE:"))
        }, a.logInfo = function() {
            I() && y && console.info.apply(console, A(arguments, "INFO:"))
        }, a.logWarn = function() {
            I() && m && console.warn.apply(console, A(arguments, "WARNING:"))
        }, a.logError = function() {
            I() && b && console.error.apply(console, A(arguments, "ERROR:"))
        }, a.hasConsoleLogger = function() {
            return v
        };
        var I = function() {
            if (!1 === n.config.getConfig("debug") && !1 === l) {
                var e = "TRUE" === _(f.DEBUG_MODE).toUpperCase();
                n.config.setConfig({
                    debug: e
                }), l = !0
            }
            return !!n.config.getConfig("debug")
        };
        a.debugTurnedOn = I, a.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = E(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        };
        var _ = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        };
        a.getParameterByName = _, a.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, a._each(e, i), !r) return a.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, a.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, a.isA = function(e, t) {
            return g.call(e) === "[object " + t + "]"
        }, a.isFn = function(e) {
            return a.isA(e, "Function")
        }, a.isStr = function(e) {
            return a.isA(e, "String")
        }, a.isArray = function(e) {
            return a.isA(e, "Array")
        }, a.isNumber = function(e) {
            return a.isA(e, "Number")
        }, a.isPlainObject = function(e) {
            return a.isA(e, "Object")
        }, a.isBoolean = function(e) {
            return a.isA(e, "Boolean")
        }, a.isEmpty = function(e) {
            if (!e) return !0;
            if (a.isArray(e) || a.isStr(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }, a.isEmptyStr = function(e) {
            return a.isStr(e) && (!e || 0 === e.length)
        }, a._each = function(e, t) {
            if (!a.isEmpty(e)) {
                if (a.isFn(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }, a.contains = function(e, t) {
            if (a.isEmpty(e)) return !1;
            if (a.isFn(e.indexOf)) return -1 !== e.indexOf(t);
            for (var n = e.length; n--;)
                if (e[n] === t) return !0;
            return !1
        }, a.indexOf = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })(), a._map = function(n, r) {
            if (a.isEmpty(n)) return [];
            if (a.isFn(n.map)) return n.map(r);
            var i = [];
            return a._each(n, (function(e, t) {
                i.push(r(e, t, n))
            })), i
        };
        var B = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function w(e, t, n) {
            return n.indexOf(e) === t
        }

        function C(e, t) {
            return e.concat(t)
        }

        function O(e) {
            return Object.keys(e)
        }

        function R(e, t) {
            return e[t]
        }
        a.insertElement = function(e, t, n) {
            var r = void 0,
                i = (t = t || document).getElementsByTagName("head");
            r = n ? t.getElementsByTagName(n) : i;
            try {
                if ((r = r.length ? r : t.getElementsByTagName("body")).length) {
                    r = r[0];
                    var o = i && i[0] === r ? null : r.firstChild;
                    return r.insertBefore(e, o)
                }
            } catch (e) {}
        }, a.triggerPixel = function(e) {
            (new Image).src = e
        }, a.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === f.S2S.SRC && n && a.triggerPixel(n)
        }, a.insertHtmlIntoIframe = function(e) {
            if (e) {
                var t = document.createElement("iframe");
                t.id = a.getUniqueIdentifierStr(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", a.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
            }
        }, a.insertUserSyncIframe = function(e) {
            var t = a.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                n = document.createElement("div");
            n.innerHTML = t;
            var r = n.firstChild;
            a.insertElement(r)
        }, a.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return t += '<img src="' + encodeURI(e) + '"></div>'
        }, a.createTrackPixelIframeHtml = function(e) {
            var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), "<iframe " + (t = t && 'sandbox="' + t + '"') + ' id="' + a.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
        }, a.getIframeDocument = function(e) {
            if (e) {
                var t = void 0;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                } catch (e) {
                    a.logError("Cannot get iframe document", e)
                }
                return t
            }
        }, a.getValueString = function(e, t, n) {
            return null == t ? n : a.isStr(t) ? t : a.isNumber(t) ? t.toString() : void a.logWarn("Unsuported type for param: " + e + " required type: String")
        };
        a.getHighestCpm = U("timeToRespond", (function(e, t) {
            return t < e
        })), a.getOldestHighestCpmBid = U("responseTimestamp", (function(e, t) {
            return t < e
        })), a.getLatestHighestCpmBid = U("responseTimestamp", (function(e, t) {
            return e < t
        }));

        function U(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }
        var N = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && d.return && d.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = g(e);
                i.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                i.default.aliasRegistry[e] = t.code, r(v({}, t, {
                    code: e
                }))
            }))
        }, t.newBidder = g, t.isValid = S;
        var r = f(n(27)),
            i = f(n(8)),
            o = n(3),
            y = f(n(16)),
            a = n(18),
            d = n(17),
            u = n(41),
            m = f(n(4)),
            b = f(n(9)),
            s = f(n(7)),
            h = n(0);

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

        function g(f) {
            return v(new r.default(f.code), {
                getSpec: function() {
                    return Object.freeze(f)
                },
                registerSyncs: l,
                callBids: function(o, a, t, n) {
                    if (Array.isArray(o.bids)) {
                        var d = {},
                            u = [],
                            e = o.bids.filter(g);
                        if (0 !== e.length) {
                            var s = {};
                            e.forEach((function(e) {
                                (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var r = f.buildRequests(e, o);
                            if (r && 0 !== r.length) {
                                Array.isArray(r) || (r = [r]);
                                var c = (0, h.delayExecution)(i, r.length);
                                r.forEach((function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("" + i.url + (function(e) {
                                                if (e) return "?" + ("object" === (void 0 === e ? "undefined" : p(e)) ? (0, h.parseQueryStringParameters)(e) : e);
                                                return ""
                                            })(i.data), {
                                                success: e,
                                                error: t
                                            }, void 0, v({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), v({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            (0, h.logWarn)("Skipping invalid request from " + f.code + ". Request type " + i.type + " must be GET or POST"), c()
                                    }

                                    function e(e, t) {
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, u.push(e);
                                        var n = void 0;
                                        try {
                                            n = f.interpretResponse(e, i)
                                        } catch (e) {
                                            return (0, h.logError)("Bidder " + f.code + " failed to interpret the server's response. Continuing without bids", null, e), void c()
                                        }

                                        function r(e) {
                                            var t = s[e.requestId];
                                            if (t) {
                                                var n = v(y.default.createBid(m.default.STATUS.GOOD, t), e);
                                                !(function(e, t) {
                                                    d[e] = !0, S(e, t, [o]) && a(e, t)
                                                })(t.adUnitCode, n)
                                            } else(0, h.logWarn)("Bidder " + f.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.")
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), c(n)
                                    }

                                    function t(e) {
                                        (0, h.logError)("Server call for " + f.code + " failed: " + e + ". Continuing without bids."), c()
                                    }
                                }))
                            } else i()
                        } else i()
                    }

                    function i(e) {
                        t(), b.default.emit(m.default.EVENTS.BIDDER_DONE, o), l(u, o.gdprConsent)
                    }
                }
            });

            function l(e, t) {
                if (f.getUserSyncs) {
                    var n = o.config.getConfig("userSync.filterSettings"),
                        r = f.getUserSyncs({
                            iframeEnabled: !!(o.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(o.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach((function(e) {
                        a.userSync.registerSync(e.type, f.code, e.url)
                    })))
                }
            }

            function g(e) {
                return !!f.isBidRequestValid(e) || ((0, h.logWarn)("Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)), !1)
            }
        }

        function S(e, t, n) {
            function r(e) {
                return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
            }
            return e ? t ? (i = Object.keys(t), l.every((function(e) {
                return (0, s.default)(i, e) && !(0, s.default)([void 0, null], t[e])
            })) ? "native" !== t.mediaType || (0, d.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0, u.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                var r = (0, h.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = (0, h.parseSizesInput)(i);
                if (1 !== o.length) return !1;
                var a = o[0].split("x"),
                    d = c(a, 2),
                    u = d[0],
                    s = d[1];
                return t.width = u, t.height = s, !0
            })(e, t, n)) || ((0, h.logError)(r("Banner bids require a width and height")), !1) : ((0, h.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : ((0, h.logError)(r("Native bid missing some required properties.")), !1) : ((0, h.logError)(r("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")), !1)) : ((0, h.logWarn)("Some adapter tried to add an undefined bid for " + e + "."), !1) : ((0, h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
    },
    10: function(e, t, n) {
        n(47), e.exports = n(13).Array.find
    },
    11: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && d.return && d.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                var n = t.split("="),
                    r = a(n, 2),
                    i = r[0],
                    o = r[1];
                return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [], e[i].push(o)) : e[i] = o || "", e
            }), {}) : {}
        }

        function r(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return t + "[]=" + e
                })).join("&") : t + "=" + e[t]
            })).join("&")
        }
        t.parseQS = i, t.formatQS = r, t.parse = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : i(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.format = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
        }
    },
    12: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Renderer = o, t.isRendererRequired = function(e) {
            return !(!e || !e.url)
        }, t.executeRenderer = function(e, t) {
            e.render(t)
        };
        var r, u = n(28),
            s = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0)),
            i = n(10),
            c = (r = i) && r.__esModule ? r : {
                default: r
            };

        function o(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded,
                d = e.adUnitCode;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, !(function(t) {
                var e = instBid.adUnits,
                    n = (0, c.default)(e, (function(e) {
                        return e.code === t
                    }));
                return !!(n && n.renderer && n.renderer.url && n.renderer.render)
            })(d) ? (0, u.loadScript)(n, this.callback, !0) : s.logWarn("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit " + d)
        }
        o.install = function(e) {
            return new o({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded,
                adUnitCode: e.adUnitCode
            })
        }, o.prototype.getConfig = function() {
            return this.config
        }, o.prototype.setRender = function(e) {
            this.render = e
        }, o.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, o.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), s.logMessage("Prebid Renderer event for id " + t + " type " + n)
        }, o.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                s.logError("Error processing Renderer command: ", e)
            }
        }
    },
    120: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(34)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            findIndex: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(26)(o)
    },
    13: function(e, t) {
        var n = e.exports = {
            version: "2.6.5"
        };
        "number" == typeof __e && (__e = n)
    },
    14: function(e, t, n) {
        var v = n(19),
            y = n(13),
            m = n(32),
            b = n(49),
            h = n(56),
            S = "prototype",
            E = function(e, t, n) {
                var r, i, o, a = e & E.F,
                    d = e & E.G,
                    u = e & E.S,
                    s = e & E.P,
                    c = e & E.B,
                    f = e & E.W,
                    l = d ? y : y[t] || (y[t] = {}),
                    g = l[S],
                    p = d ? v : u ? v[t] : (v[t] || {})[S];
                for (r in d && (n = t), n)(i = !a && p && void 0 !== p[r]) && h(l, r) || (o = i ? p[r] : n[r], l[r] = d && "function" != typeof p[r] ? n[r] : c && i ? m(o, v) : f && p[r] == o ? (function(r) {
                    function e(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    }
                    return e[S] = r[S], e
                })(o) : s && "function" == typeof o ? m(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && g && !g[r] && b(g, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    15: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    16: function(e, t, n) {
        "use strict";
        var o = n(0);

        function r(e, t) {
            var n = t && t.bidId || o.getUniqueIdentifierStr(),
                r = t && t.src || "client",
                i = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                switch (i) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            })(), this.adId = n, this.mediaType = "banner", this.source = r, this.getStatusCode = function() {
                return i
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
        t.createBid = function(e, t) {
            return new r(e, t)
        }
    },
    17: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.nativeAdapters = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.processNativeAdUnitParams = function(e) {
            if (e && e.type && (function(e) {
                    return !(!e || !(0, d.default)(Object.keys(c), e)) || ((0, a.logError)(e + " nativeParam is not supported"), !1)
                })(e.type)) return c[e.type];
            return e
        }, t.nativeBidIsValid = function(t, e) {
            var n = (0, a.getBidRequest)(t.adId, e);
            if (!n) return !1;
            if (!(0, a.deepAccess)(t, "native.clickUrl")) return !1;
            if ((0, a.deepAccess)(t, "native.image") && (!(0, a.deepAccess)(t, "native.image.height") || !(0, a.deepAccess)(t, "native.image.width"))) return !1;
            if ((0, a.deepAccess)(t, "native.icon") && (!(0, a.deepAccess)(t, "native.icon.height") || !(0, a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                })),
                o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }));
            return i.every((function(e) {
                return (0, d.default)(o, e)
            }))
        }, t.fireNativeTrackers = function(e, t) {
            var n = void 0;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && (0, a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            (n || []).forEach(a.triggerPixel)
        }, t.getNativeTargeting = function(r) {
            var i = {};
            return Object.keys(r.native).forEach((function(e) {
                var t = u.NATIVE_KEYS[e],
                    n = r.native[e];
                "object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url), t && n && (i[t] = n)
            })), i
        };
        var r, a = n(0),
            i = n(7),
            d = (r = i) && r.__esModule ? r : {
                default: r
            };
        var u = n(4),
            s = t.nativeAdapters = [],
            c = (t.NATIVE_TARGETING_KEYS = Object.keys(u.NATIVE_KEYS).map((function(e) {
                return u.NATIVE_KEYS[e]
            })), {
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
            });
        t.nativeAdUnit = function(e) {
            var t = "native" === e.mediaType,
                n = (0, a.deepAccess)(e, "mediaTypes.native");
            return t || n
        };
        var f = t.nativeBidder = function(e) {
            return (0, d.default)(s, e.bidder)
        };
        t.hasNonNativeBidder = function(e) {
            return e.bids.filter((function(e) {
                return !f(e)
            })).length
        }
    },
    18: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.userSync = void 0;
        var u = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && d.return && d.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.newUserSync = o;
        var r, c = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0)),
            f = n(3),
            i = n(7),
            l = (r = i) && r.__esModule ? r : {
                default: r
            };

        function o(e) {
            var t = {},
                r = {
                    image: [],
                    iframe: []
                },
                n = !1,
                i = {},
                o = {
                    image: !1,
                    iframe: !1
                },
                a = e.config;

            function d() {
                if (a.syncEnabled && e.browserSupportsCookies && !n) {
                    try {
                        !(function() {
                            if (!a.pixelEnabled && !o.image) return;
                            c.shuffle(r.image).forEach((function(e) {
                                var t = u(e, 2),
                                    n = t[0],
                                    r = t[1];
                                c.logMessage("Invoking image pixel user sync for bidder: " + n), c.triggerPixel(r)
                            }))
                        })(), (function() {
                            if (!a.iframeEnabled && !o.iframe) return;
                            c.shuffle(r.iframe).forEach((function(e) {
                                var t = u(e, 2),
                                    n = t[0],
                                    r = t[1];
                                c.logMessage("Invoking iframe user sync for bidder: " + n), c.insertUserSyncIframe(r)
                            }))
                        })()
                    } catch (e) {
                        return c.logError("Error firing user syncs", e)
                    }
                    r = {
                        image: [],
                        iframe: []
                    }, n = !0
                }
            }
            return f.config.getConfig("userSync", (function(e) {
                a = s(a, e.userSync)
            })), t.registerSync = function(e, t, n) {
                if (!a.syncEnabled || !c.isArray(r[e])) return c.logWarn('User sync type "' + e + '" not supported');
                if (!t) return c.logWarn("Bidder is required for registering sync");
                if (Number(i[t]) >= a.syncsPerBidder) return c.logWarn('Number of user syncs exceeded for "' + t + '"');
                if (a.filterSettings) {
                    if (function(e, t) {
                            var n = a.filterSettings;
                            if (function(e, t) {
                                    if (e.all && e[t]) return c.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'), !1;
                                    var n = e.all ? e.all : e[t],
                                        r = e.all ? "all" : t;
                                    if (!n) return !1;
                                    var i = n.filter,
                                        o = n.bidders;
                                    if (i && "include" !== i && "exclude" !== i) return c.logWarn('UserSync "filterSettings.' + r + ".filter\" setting '" + i + "' is not a valid option; use either 'include' or 'exclude'."), !1;
                                    return !!("*" === o || Array.isArray(o) && 0 < o.length && o.every((function(e) {
                                        return c.isStr(e) && "*" !== e
                                    }))) || (c.logWarn('Detected an invalid setup in userSync "filterSettings.' + r + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."), !1)
                                }(n, e)) {
                                o[e] = !0;
                                var r = n.all ? n.all : n[e],
                                    i = "*" === r.bidders ? [t] : r.bidders;
                                return {
                                    include: function(e, t) {
                                        return !(0, l.default)(e, t)
                                    },
                                    exclude: function(e, t) {
                                        return (0, l.default)(e, t)
                                    }
                                }[r.filter || "include"](i, t)
                            }
                            return !1
                        }(e, t)) return c.logWarn("Bidder '" + t + "' is not permitted to register their userSync " + e + " pixels as per filterSettings config.")
                } else if (a.enabledBidders && a.enabledBidders.length && a.enabledBidders.indexOf(t) < 0) return c.logWarn('Bidder "' + t + '" not permitted to register their userSync pixels.');
                r[e].push([t, n]), i = (function(e, t) {
                    return e[t] ? e[t] += 1 : e[t] = 1, e
                })(i, t)
            }, t.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(d, Number(e));
                d()
            }, t.triggerUserSyncs = function() {
                a.enableOverride && t.syncUsers()
            }, t
        }
        f.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var a = !c.isSafariBrowser() && c.cookiesAreEnabled();
        t.userSync = o({
            config: f.config.getConfig("userSync"),
            browserSupportsCookies: a
        })
    },
    19: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    2: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
    },
    20: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.createHook = function(r, i, e) {
            var d = [{
                    fn: i,
                    priority: 0
                }],
                o = {
                    sync: function() {
                        for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        d.forEach((function(e) {
                            e.fn.apply(t, n)
                        }))
                    },
                    asyncSeries: function() {
                        for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var a = 0;
                        return d[a].fn.apply(this, t.concat((function e() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = d[++a];
                            if ("object" === (void 0 === i ? "undefined" : u(i)) && "function" == typeof i.fn) return i.fn.apply(o, n.concat(e))
                        })))
                    }
                };
            if (!o[r]) throw "invalid hook type";
            var t = {
                addHook: function(e, t) {
                    var n = 1 < arguments.length && void 0 !== t ? t : 10;
                    "function" == typeof e && (d.push({
                        fn: e,
                        priority: n
                    }), d.sort((function(e, t) {
                        return t.priority - e.priority
                    })))
                },
                removeHook: function(t) {
                    d = d.filter((function(e) {
                        return e.fn === i || e.fn !== t
                    }))
                },
                hasHook: function(t) {
                    return d.some((function(e) {
                        return e.fn === t
                    }))
                }
            };
            "string" == typeof e && (s[e] = t);
            return a((function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 1 === d.length && d[0].fn === i ? i.apply(this, t) : o[r].apply(this, t)
            }), t)
        };
        var s = t.hooks = {}
    },
    21: function(e, t, n) {
        n(120), e.exports = n(13).Array.findIndex
    },
    22: function(e, t, n) {
        e.exports = !n(33)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    23: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    231: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.store = function(e, t) {
            var n = {
                puts: e.map(o)
            };
            (0, r.ajax)(i.config.getConfig("cache.url"), (function(n) {
                return {
                    success: function(e) {
                        var t = void 0;
                        try {
                            t = JSON.parse(e).responses
                        } catch (e) {
                            return void n(e, [])
                        }
                        t ? n(null, t) : n(new Error("The cache server didn't respond with a responses property."), [])
                    },
                    error: function(e, t) {
                        n(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                    }
                }
            })(t), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            })
        }, t.getCacheUrl = function(e) {
            return i.config.getConfig("cache.url") + "?uuid=" + e
        };
        var r = n(6),
            i = n(3);

        function o(e) {
            return {
                type: "xml",
                value: e.vastXml ? e.vastXml : (function(e, t) {
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + e + "]]></VASTAdTagURI>\n        <Impression>" + (t ? "<![CDATA[" + t + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>"
                })(e.vastUrl, e.vastImpUrl),
                ttlseconds: Number(e.ttl)
            }
        }
    },
    24: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    25: function(e, t, n) {
        var r = n(60)("wks"),
            i = n(62),
            o = n(19).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    26: function(e, t) {
        e.exports = function() {}
    },
    27: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    28: function(e, t, n) {
        "use strict";
        var r, i = n(7),
            o = (r = i) && r.__esModule ? r : {
                default: r
            },
            a = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0));
        var d = {},
            u = ["criteo"];

        function s(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
        t.loadExternalScript = function(e, t) {
            if (t && e)
                if ((0, o.default)(u, t)) {
                    if (!d[e]) {
                        a.logWarn("module " + t + " is loading external JavaScript");
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.async = !0, n.src = e, a.insertElement(n), d[e] = !0
                    }
                } else a.logError(t + " not whitelisted for loading external JavaScript");
            else a.logError("cannot load external script without url and moduleCode")
        }, t.loadScript = function(t, e, n) {
            t ? n ? d[t] ? e && "function" == typeof e && (d[t].loaded ? e() : d[t].callbacks.push(e)) : (d[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && d[t].callbacks.push(e), s(t, (function() {
                d[t].loaded = !0;
                try {
                    for (var e = 0; e < d[t].callbacks.length; e++) d[t].callbacks[e]()
                } catch (e) {
                    a.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : s(t, e) : a.logError("Error attempting to request empty URL", "adloader.js:loadScript")
        }
    },
    29: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.auctionManager = void 0, t.newAuctionManager = d;
        var r, o = n(0),
            u = n(44),
            i = n(10),
            a = (r = i) && r.__esModule ? r : {
                default: r
            };
        var s = n(4);

        function d() {
            var d = [],
                i = {};
            return i.addWinningBid = function(t) {
                var e = (0, a.default)(d, (function(e) {
                    return e.getAuctionId() === t.auctionId
                }));
                e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
            }, i.getAllWinningBids = function() {
                return d.map((function(e) {
                    return e.getWinningBids()
                })).reduce(o.flatten, [])
            }, i.getBidsRequested = function() {
                return d.map((function(e) {
                    return e.getBidRequests()
                })).reduce(o.flatten, [])
            }, i.getBidsReceived = function() {
                return d.map((function(e) {
                    if (e.getAuctionStatus() === u.AUCTION_COMPLETED) return e.getBidsReceived()
                })).reduce(o.flatten, []).filter((function(e) {
                    return e
                }))
            }, i.getAdUnits = function() {
                return d.map((function(e) {
                    return e.getAdUnits()
                })).reduce(o.flatten, [])
            }, i.getAdUnitCodes = function() {
                return d.map((function(e) {
                    return e.getAdUnitCodes()
                })).reduce(o.flatten, []).filter(o.uniques)
            }, i.createAuction = function(e) {
                var t = e.adUnits,
                    n = e.adUnitCodes,
                    r = e.callback,
                    i = e.cbTimeout,
                    o = e.labels,
                    a = (0, u.newAuction)({
                        adUnits: t,
                        adUnitCodes: n,
                        callback: r,
                        cbTimeout: i,
                        labels: o
                    });
                return (function(e) {
                    d.push(e)
                })(a), a
            }, i.findBidByAdId = function(t) {
                return (0, a.default)(d.map((function(e) {
                    return e.getBidsReceived()
                })).reduce(o.flatten, []), (function(e) {
                    return e.adId === t
                }))
            }, i.getStandardBidderAdServerTargeting = function() {
                return (0, u.getStandardBidderSettings)()[s.JSON_MAPPING.ADSERVER_TARGETING]
            }, i.setStatusForBids = function(e, t) {
                var n = i.findBidByAdId(e);
                if (n && (n.status = t), n && t === s.BID_STATUS.BID_TARGETING_SET) {
                    var r = (0, a.default)(d, (function(e) {
                        return e.getAuctionId() === n.auctionId
                    }));
                    r && r.setBidTargeting(n)
                }
            }, i
        }
        t.auctionManager = d()
    },
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.config = t.RANDOM = void 0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.newConfig = d;
        var r = n(31),
            s = i(n(10)),
            c = i(n(7)),
            f = n(20);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = n(0),
            g = !1,
            p = 3e3,
            v = window.location.origin,
            y = !0,
            m = !1,
            b = 400,
            a = t.RANDOM = "random",
            h = {};
        h[a] = !0, h.fixed = !0;
        var S = a,
            E = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            T = "*";

        function d() {
            var i = [],
                a = void 0,
                d = void 0;

            function e() {
                function i(t) {
                    return (0, s.default)(Object.keys(E), (function(e) {
                        return t === E[e]
                    }))
                }

                function o(e) {
                    if (!e) return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                    if ("string" == typeof e) i(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if ("object" === (void 0 === e ? "undefined" : u(e)) && !(0, r.isValidPriceConfig)(e)) return l.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                    return !0
                }
                a = {}, d = {
                    _debug: g,
                    get debug() {
                        return this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: p,
                    get bidderTimeout() {
                        return this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: v,
                    get publisherDomain() {
                        return this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _priceGranularity: E.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : E.MEDIUM : "object" === (void 0 === e ? "undefined" : u(e)) && (this._customPriceBucket = e, this._priceGranularity = E.CUSTOM, l.logMessage("Using custom price granularity")))
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
                        var r = this;
                        this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e, t) {
                            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === (void 0 === n ? "undefined" : u(n)) && (e[t] = n[t], l.logMessage("Using custom price granularity for " + t)) : l.logWarn("Invalid price granularity for media type: " + t), e
                        }), {})
                    },
                    _sendAllBids: y,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    _bidderSequence: S,
                    get bidderSequence() {
                        return this._bidderSequence
                    },
                    set bidderSequence(e) {
                        h[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                    },
                    _timeoutBuffer: b,
                    get timeoutBuffer() {
                        return this._timeoutBuffer
                    },
                    set timeoutBuffer(e) {
                        this._timeoutBuffer = e
                    },
                    _disableAjaxTimeout: m,
                    get disableAjaxTimeout() {
                        return this._disableAjaxTimeout
                    },
                    set disableAjaxTimeout(e) {
                        this._disableAjaxTimeout = e
                    }
                }
            }
            var t = (0, f.createHook)("asyncSeries", (function(n) {
                if ("object" === (void 0 === n ? "undefined" : u(n))) {
                    var e = Object.keys(n),
                        r = {};
                    e.forEach((function(e) {
                        var t = n[e];
                        "object" === u(a[e]) && "object" === (void 0 === t ? "undefined" : u(t)) && (t = o({}, a[e], t)), r[e] = d[e] = t
                    })), (function(t) {
                        var n = Object.keys(t);
                        i.filter((function(e) {
                            return (0, c.default)(n, e.topic)
                        })).forEach((function(e) {
                            e.callback(function(e, t, n) {
                                return t in e ? Object.defineProperty(e, t, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = n, e
                            }({}, e.topic, t[e.topic]))
                        })), i.filter((function(e) {
                            return e.topic === T
                        })).forEach((function(e) {
                            return e.callback(t)
                        }))
                    })(r)
                } else l.logError("setConfig options must be an object")
            }));
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? l.deepAccess(d, e) : d
                    }
                    return function(e, t) {
                        var n = t;
                        "string" != typeof e && (n = e, e = T);
                        return "function" == typeof n ? (i.push({
                            topic: e,
                            callback: n
                        }), function() {
                            i.splice(i.indexOf(t), 1)
                        }) : void l.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === (void 0 === a ? "undefined" : u(a)) ? (o(a, e), o(d, e)) : l.logError("defaults must be an object")
                },
                resetConfig: e
            }
        }
        t.config = d()
    },
    30: function(Mr, Nr) {
        var Or;
        Or = (function() {
            return this
        })();
        try {
            Or = Or || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (Or = window)
        }
        Mr.exports = Or
    },
    31: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidPriceConfig = t.getPriceBucketString = void 0;
        var r, i = n(10),
            a = (r = i) && r.__esModule ? r : {
                default: r
            };
        var o = n(0),
            s = 2,
            d = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            f = {
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
            l = {
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
            };

        function g(n, e, r) {
            var i = "";
            if (!p(e)) return i;
            var o = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                t = (0, a.default)(e.buckets, (function(e) {
                    if (n > o.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = s), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                }));
            return t && (i = (function(e, t, n) {
                var r = void 0 !== t.precision ? t.precision : s,
                    i = t.increment * n,
                    o = t.min * n,
                    a = Math.pow(10, r + 2),
                    d = (e * a - o * a) / (i * a),
                    u = Math.floor(d) * i + o;
                return (u = Number(u.toFixed(10))).toFixed(r)
            })(n, t, r)), i
        }

        function p(e) {
            if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
        t.getPriceBucketString = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : g(e, d, n),
                med: "" === r ? "" : g(e, u, n),
                high: "" === r ? "" : g(e, c, n),
                auto: "" === r ? "" : g(e, l, n),
                dense: "" === r ? "" : g(e, f, n),
                custom: "" === r ? "" : g(e, t, n)
            }
        }, t.isValidPriceConfig = p
    },
    32: function(e, t, n) {
        var o = n(48);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    33: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    34: function(e, t, n) {
        var h = n(32),
            S = n(35),
            E = n(57),
            T = n(36),
            r = n(58);
        e.exports = function(f, e) {
            var l = 1 == f,
                g = 2 == f,
                p = 3 == f,
                v = 4 == f,
                y = 6 == f,
                m = 5 == f || y,
                b = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), d = h(t, n, 3), u = T(a.length), s = 0, c = l ? b(e, u) : g ? b(e, 0) : void 0; s < u; s++)
                    if ((m || s in a) && (i = d(r = a[s], s, o), f))
                        if (l) c[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        c.push(r)
                } else if (v) return !1;
                return y ? -1 : p || v ? v : c
            }
        }
    },
    35: function(e, t, n) {
        var r = n(23);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    36: function(e, t, n) {
        var r = n(37),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    37: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    38: function(e, t, n) {
        var r = n(23);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    39: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.setSizeConfig = d, t.getLabels = function(e, t) {
            if (e.labelAll) return {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            };
            return {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }, t.sizeSupported = function(e) {
            var t = y(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v);
            return !t.shouldFilter || !!t.sizesSupported[e]
        }, t.resolveStatus = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                d = arguments[1],
                u = arguments[2],
                s = y(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : v);
            d = (0, g.isPlainObject)(d) ? (0, g.deepClone)(d) : u ? {
                banner: {
                    sizes: u
                }
            } : {};
            var c = (0, g.deepAccess)(d, "banner.sizes");
            s.shouldFilter && c && (d.banner.sizes = c.filter((function(e) {
                return s.sizesSupported[e]
            })));
            var f = Object.keys(d),
                l = {
                    active: 1 < f.length || 1 === f.length && "banner" !== f[0] || "banner" === f[0] && 0 < (0, g.deepAccess)(d, "banner.sizes.length") && (0 === n.length || !i && (n.some((function(e) {
                        return s.labels[e]
                    })) || n.some((function(e) {
                        return (0, p.default)(a, e)
                    }))) || i && n.reduce((function(e, t) {
                        return e ? s.labels[t] || (0, p.default)(a, t) : e
                    }), !0)),
                    mediaTypes: d
                };
            c && c.length !== d.banner.sizes.length && (l.filterResults = {
                before: c,
                after: d.banner.sizes
            });
            return l
        };
        var i, o = n(3),
            g = n(0),
            a = n(7),
            p = (i = a) && i.__esModule ? i : {
                default: i
            };
        var v = [];

        function d(e) {
            v = e
        }

        function y(e) {
            return e.reduce((function(n, e) {
                return "object" === (void 0 === e ? "undefined" : r(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                    return (e[t] || []).forEach((function(e) {
                        return n[t][e] = !0
                    }))
                }))) : (0, g.logWarn)('sizeConfig rule missing required property "mediaQuery"'), n
            }), {
                labels: {},
                sizesSupported: {},
                shouldFilter: !1
            })
        }
        o.config.getConfig("sizeConfig", (function(e) {
            return d(e.sizeConfig)
        }))
    },
    4: function(e, t) {
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
            REPO_AND_VERSION: "prebid_prebid_1.34.0",
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
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
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
    40: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.adunitCounter = void 0;
        var r = n(0),
            i = {};
        var o = {
            incrementCounter: function(e) {
                return i[e] = i[e] || {}, i[e].counter = (0, r.deepAccess)(i, e + ".counter") + 1 || 1, i[e].counter
            },
            getCounter: function(e) {
                return (0, r.deepAccess)(i, e + ".counter") || 0
            }
        };
        t.adunitCounter = o
    },
    41: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = t.OUTSTREAM = void 0, t.isValidVideoBid = function(e, t) {
            var n = (0, o.getBidRequest)(e.adId, t),
                r = n && (0, o.deepAccess)(n, "mediaTypes.video"),
                i = r && (0, o.deepAccess)(r, "context");
            if (!n || r && i !== s) return a.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1);
            return i !== s || !(!e.renderer && !n.renderer)
        };
        var r, i = n(8),
            o = n(0),
            a = n(3),
            d = n(7),
            u = (r = d) && r.__esModule ? r : {
                default: r
            };
        var s = t.OUTSTREAM = "outstream",
            c = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType,
                    n = (0, o.deepAccess)(e, "mediaTypes.video");
                return t || n
            }, t.videoBidder = function(e) {
                return (0, u.default)(i.videoAdapters, e.bidder)
            });
        t.hasNonVideoBidder = function(e) {
            return e.bids.filter((function(e) {
                return !c(e)
            })).length
        }
    },
    42: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobal = function() {
            return window.instBid
        }, window.instBid = window.instBid || {}, window.instBid.cmd = window.instBid.cmd || [], window.instBid.que = window.instBid.que || []
    },
    43: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.targeting = t.isBidNotExpired = t.TARGETING_KEYS = void 0;
        var f = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.getHighestCpmBidsFromBidPool = _, t.newTargeting = a;
        var r, l = n(0),
            g = n(3),
            p = n(17),
            i = n(29),
            v = n(39),
            o = n(7),
            y = (r = o) && r.__esModule ? r : {
                default: r
            };

        function m(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var h = n(0),
            S = n(4),
            E = [],
            T = 20,
            A = t.TARGETING_KEYS = Object.keys(S.TARGETING_KEYS).map((function(e) {
                return S.TARGETING_KEYS[e]
            })),
            I = (t.isBidNotExpired = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0, l.timestamp)()
            }, function(e) {
                return e && (e.status && !(0, y.default)([S.BID_STATUS.BID_TARGETING_SET, S.BID_STATUS.RENDERED], e.status) || !e.status)
            });

        function _(e, n) {
            var r = [],
                i = (0, l.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach((function(e) {
                var t = (0, l.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach((function(e) {
                    return r.push(t[e].reduce(n))
                }))
            })), r
        }

        function a(n) {
            var i = {};

            function o(e) {
                return "string" == typeof e ? [e] : h.isArray(e) ? e : n.getAdUnitCodes() || []
            }

            function a() {
                return _(n.getBidsReceived().filter((function(e) {
                    return "banner" !== e.mediaType || (0, v.sizeSupported)([e.width, e.height])
                })).filter(I).filter(t.isBidNotExpired), l.getOldestHighestCpmBid)
            }

            function d() {
                return n.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(A).filter(l.uniques)
            }

            function u(t, n, e, r) {
                return Object.keys(n.adserverTargeting).filter(s()).forEach((function(e) {
                    t.length && t.filter(function(t) {
                        return function(e) {
                            return e.adUnitCode === n.adUnitCode && e.adserverTargeting[t]
                        }
                    }(e)).forEach(function(t) {
                        return function(e) {
                            h.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(n.adserverTargeting[t]).filter(l.uniques), delete n.adserverTargeting[t]
                        }
                    }(e))
                })), t.push(n), t
            }

            function s() {
                var t = d();
                return function(e) {
                    return -1 === t.indexOf(e)
                }
            }

            function c(t) {
                return b({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(s()).map((function(e) {
                    return b({}, e.substring(0, T), [t.adserverTargeting[e]])
                })))
            }
            return i.resetPresetTargeting = function(e) {
                if ((0, l.isGptPubadsDefined)()) {
                    var t = o(e),
                        r = n.getAdUnits().filter((function(e) {
                            return (0, y.default)(t, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(n) {
                        E.forEach((function(t) {
                            r.forEach((function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, i.getAllTargeting = function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a(),
                    n = o(e),
                    r = (function(e, t) {
                        var n = i.getWinningBids(e, t),
                            r = d();
                        return n = n.map((function(o) {
                            return b({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter((function(e) {
                                return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === r.indexOf(e)
                            })).reduce((function(e, t) {
                                var n = [o.adserverTargeting[t]],
                                    r = b({}, t.substring(0, T), n);
                                if (t !== S.TARGETING_KEYS.DEAL) return [].concat(m(e), [r]);
                                var i = b({}, (t + "_" + o.bidderCode).substring(0, T), n);
                                return [].concat(m(e), [r, i])
                            }), []))
                        }))
                    })(n, t).concat(function(t, e) {
                        return e.filter((function(e) {
                            return (0, y.default)(t, e.adUnitCode)
                        })).map((function(e) {
                            return f({}, e)
                        })).reduce(u, []).map(c).filter((function(e) {
                            return e
                        }))
                    }(n, t)).concat(g.config.getConfig("enableSendAllBids") ? (function(e, t) {
                        var n = A.concat(p.NATIVE_TARGETING_KEYS);
                        return _(t, l.getHighestCpm).map((function(t) {
                            if (t.adserverTargeting && e && (h.isArray(e) && (0, y.default)(e, t.adUnitCode) || "string" == typeof e && t.adUnitCode === e)) return b({}, t.adUnitCode, (function(t, e) {
                                return e.map((function(e) {
                                    return b({}, (e + "_" + t.bidderCode).substring(0, T), [t.adserverTargeting[e]])
                                }))
                            })(t, n.filter((function(e) {
                                return void 0 !== t.adserverTargeting[e]
                            }))))
                        })).filter((function(e) {
                            return e
                        }))
                    })(n, t) : []);
                return r.map((function(t) {
                    Object.keys(t).map((function(e) {
                        t[e].map((function(e) {
                            -1 === E.indexOf(Object.keys(e)[0]) && (E = Object.keys(e).concat(E))
                        }))
                    }))
                })), r = (function(e) {
                    return e.map((function(e) {
                        return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                            return b({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                        })).reduce((function(e, t) {
                            return f(t, e)
                        }), {}))
                    })).reduce((function(e, t) {
                        var n = Object.keys(t)[0];
                        return e[n] = f({}, e[n], t[n]), e
                    }), {})
                })(r), n.forEach((function(e) {
                    r[e] || (r[e] = {})
                })), r
            }, i.setTargetingForGPT = function(i, e) {
                window.googletag.pubads().getSlots().forEach((function(r) {
                    Object.keys(i).filter(e ? e(r) : (0, l.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                        return Object.keys(i[n]).forEach((function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [e] : e).map((function(e) {
                                return h.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + t + " value: " + e), e
                            })).forEach((function(e) {
                                r.setTargeting(t, e)
                            }))
                        }))
                    }))
                }))
            }, i.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a(),
                    t = o(e);
                return n.filter((function(e) {
                    return (0, y.default)(t, e.adUnitCode)
                })).filter((function(e) {
                    return 0 < e.cpm
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(l.uniques).map((function(t) {
                    return n.filter((function(e) {
                        return e.adUnitCode === t ? e : null
                    })).reduce(l.getHighestCpm)
                }))
            }, i.setTargetingForAst = function() {
                var r = i.getAllTargeting();
                Object.keys(r).forEach((function(n) {
                    return Object.keys(r[n]).forEach((function(e) {
                        if (h.logMessage("Attempting to set targeting for targetId: " + n + " key: " + e + " value: " + r[n][e]), h.isStr(r[n][e]) || h.isArray(r[n][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t)
                        }
                    }))
                }))
            }, i.isApntagDefined = function() {
                if (window.apntag && h.isFn(window.apntag.setKeywords)) return !0
            }, i
        }
        t.targeting = a(i.auctionManager)
    },
    44: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.newAuction = function(e) {
            var a = e.adUnits,
                t = e.adUnitCodes,
                n = e.callback,
                r = e.cbTimeout,
                i = e.labels,
                d = a,
                u = i,
                s = t,
                c = [],
                f = [],
                l = void 0,
                g = void 0,
                p = B.generateUUID(),
                v = void 0,
                y = n,
                m = void 0,
                b = r,
                o = [];

            function h() {
                return {
                    auctionId: p,
                    timestamp: l,
                    auctionEnd: g,
                    auctionStatus: v,
                    adUnits: d,
                    adUnitCodes: s,
                    labels: u,
                    bidderRequests: c,
                    bidsReceived: f,
                    winningBids: o,
                    timeout: b
                }
            }

            function S(e, t) {
                if (t && clearTimeout(m), null != y) {
                    var n = [];
                    e && (B.logMessage("Auction " + p + " timedOut"), (n = (function(e, t) {
                        var n = e.filter((function(e) {
                                return !e.doneCbCallCount
                            })).map((function(e) {
                                return e.bidderCode
                            })).filter(T.uniques),
                            r = t.map((function(e) {
                                return e.bidder
                            })).filter(T.uniques),
                            i = n.filter((function(e) {
                                return !(0, I.default)(r, e)
                            }));
                        return e.map((function(e) {
                            return (e.bids || []).filter((function(e) {
                                return (0, I.default)(i, e.bidder)
                            }))
                        })).reduce(T.flatten, []).map((function(e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            }
                        }))
                    })(c, f)).length && C.emit(O.EVENTS.BID_TIMEOUT, n));
                    try {
                        v = N, g = Date.now(), C.emit(O.EVENTS.AUCTION_END, h());
                        var r = s,
                            i = f.filter(T.adUnitsFilter.bind(this, r)).reduce(G, {});
                        y.apply(instBid, [i, e])
                    } catch (e) {
                        B.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && w.callTimedOutBidders(a, n, b);
                        var o = A.config.getConfig("userSync") || {};
                        o.enableOverride || _(o.syncDelay)
                    }
                    y = null
                }
            }

            function E(e) {
                B.logInfo("Bids Received for Auction with id: " + p, f), v = N, S(!1, !0)
            }
            return {
                addBidReceived: function(e) {
                    f = f.concat(e)
                },
                executeCallback: S,
                callBids: function() {
                    var n = this;
                    v = R, l = Date.now();
                    var r = w.makeBidRequests(d, l, p, b, u);
                    B.logInfo("Bids Requested for Auction with id: " + p, r), r.forEach((function(e) {
                        !(function(e) {
                            c = c.concat(e)
                        })(e)
                    }));
                    var i = {};
                    if (r.length < 1) B.logWarn("No valid bid requests returned for auction"), E();
                    else {
                        var e = {
                            bidRequests: r,
                            run: function() {
                                !(function() {
                                    var e = S.bind(null, !0),
                                        t = setTimeout(e, b);
                                    m = t
                                })(), v = U, C.emit(O.EVENTS.AUCTION_INIT, h());
                                var e = M(E, n),
                                    t = {
                                        auctionAddBidResponse: e.addBidResponse
                                    };
                                w.callBids(d, r, j.bind(t), e.adapterDone, {
                                    request: function(e, t) {
                                        a(P, t), a(i, e), k[e] || (k[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < i[e] && (k[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        P[e]--, x[0] && o(x[0]) && x.shift()
                                    }
                                }, b)
                            }
                        };
                        o(e) || (B.logWarn("queueing auction due to limited endpoint capacity"), x.push(e))
                    }

                    function o(e) {
                        var r = !0,
                            i = A.config.getConfig("maxRequestsPerOrigin") || D;
                        return e.bidRequests.some((function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === O.S2S.SRC ? "s2s" : e.bidderCode;
                            return k[n] && (!1 === k[n].SRA && (t = Math.min(e.bids.length, i)), P[k[n].origin] + t > i && (r = !1)), !r
                        })), r && e.run(), r
                    }

                    function a(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                addWinningBid: function(e) {
                    o = o.concat(e), w.callBidWonBidder(e.bidder, e, a)
                },
                setBidTargeting: function(e) {
                    w.callSetTargetingBidder(e.bidder, e)
                },
                getWinningBids: function() {
                    return o
                },
                getTimeout: function() {
                    return b
                },
                getAuctionId: function() {
                    return p
                },
                getAuctionStatus: function() {
                    return v
                },
                getAdUnits: function() {
                    return d
                },
                getAdUnitCodes: function() {
                    return s
                },
                getBidRequests: function() {
                    return c
                },
                getBidsReceived: function() {
                    return f
                }
            }
        }, t.auctionCallbacks = M, t.getStandardBidderSettings = d, t.getKeyValueTargetingPairs = b, t.adjustBids = h;
        var T = n(0),
            p = n(31),
            i = n(17),
            s = n(231),
            v = n(12),
            A = n(3),
            r = n(18),
            o = n(20),
            y = a(n(10)),
            I = a(n(7)),
            c = n(41);

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = r.userSync.syncUsers,
            B = n(0),
            w = n(8),
            C = n(9),
            O = n(4),
            R = t.AUCTION_STARTED = "started",
            U = t.AUCTION_IN_PROGRESS = "inProgress",
            N = t.AUCTION_COMPLETED = "completed";
        C.on(O.EVENTS.BID_ADJUSTMENT, (function(e) {
            h(e)
        }));
        var D = 4,
            P = {},
            k = {},
            x = [];
        var j = t.addBidResponse = (0, o.createHook)("asyncSeries", (function(e, t) {
            this.auctionAddBidResponse(e, t)
        }), "addBidResponse");

        function M(e, a) {
            var d = 0,
                t = !1,
                n = (0, T.delayExecution)((function() {
                    t = !0
                }), a.getBidRequests().length);

            function u() {
                d--, t && 0 === d && e()
            }
            return {
                addBidResponse: function(e, t) {
                    d++;
                    var n = a.getBidRequests(),
                        r = a.getAuctionId(),
                        i = (0, T.getBidderRequest)(n, t.bidderCode, e),
                        o = (function(e) {
                            var t = e.adUnitCode,
                                n = e.bid,
                                r = e.bidRequest,
                                i = e.auctionId,
                                o = r.start,
                                a = g({}, n, {
                                    auctionId: i,
                                    responseTimestamp: (0, T.timestamp)(),
                                    requestTimestamp: o,
                                    cpm: parseFloat(n.cpm) || 0,
                                    bidder: n.bidderCode,
                                    adUnitCode: t
                                });
                            a.timeToRespond = a.responseTimestamp - a.requestTimestamp, C.emit(O.EVENTS.BID_ADJUSTMENT, a);
                            var d = r.bids && (0, y.default)(r.bids, (function(e) {
                                    return e.adUnitCode == t
                                })),
                                u = d && d.renderer;
                            u && u.url && (a.renderer = v.Renderer.install({
                                url: u.url
                            }), a.renderer.setRender(u.render));
                            var s, c = A.config.getConfig("mediaTypePriceGranularity." + n.mediaType),
                                f = (0, p.getPriceBucketString)(a.cpm, "object" === (void 0 === c ? "undefined" : l(c)) ? c : A.config.getConfig("customPriceBucket"), A.config.getConfig("currency.granularityMultiplier"));
                            a.pbLg = f.low, a.pbMg = f.med, a.pbHg = f.high, a.pbAg = f.auto, a.pbDg = f.dense, a.pbCg = f.custom, a.bidderCode && (0 < a.cpm || a.dealId) && (s = b(a.bidderCode, a));
                            return a.adserverTargeting = g(a.adserverTargeting || {}, s), a
                        })({
                            adUnitCode: e,
                            bid: t,
                            bidRequest: i,
                            auctionId: r
                        });
                    "video" === o.mediaType ? (function(n, r, e, i) {
                        var t = !0,
                            o = (0, T.getBidRequest)(r.adId, [e]),
                            a = o && (0, T.deepAccess)(o, "mediaTypes.video"),
                            d = a && (0, T.deepAccess)(a, "context");
                        A.config.getConfig("cache.url") && d !== c.OUTSTREAM && (r.videoCacheKey ? r.vastUrl || (B.logError("videoCacheKey specified but not required vastUrl for video bid"), t = !1) : (t = !1, (0, s.store)([r], (function(e, t) {
                            e ? (B.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."), f(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = (0, s.getCacheUrl)(r.videoCacheKey)), m(n, r), i())
                        }))));
                        t && (m(n, r), i())
                    })(a, o, i, u) : (m(a, o), u())
                },
                adapterDone: function() {
                    n(), t && 0 === d && e()
                }
            }
        }

        function f(e, t) {
            t.timeToRespond > e.getTimeout() + A.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function m(e, t) {
            C.emit(O.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), f(e, t)
        }

        function d(e) {
            var t = A.config.getConfig("mediaTypePriceGranularity." + e),
                n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : A.config.getConfig("priceGranularity"),
                r = instBid.bidderSettings;
            return r[O.JSON_MAPPING.BD_SETTING_STANDARD] || (r[O.JSON_MAPPING.BD_SETTING_STANDARD] = {}), r[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING] || (r[O.JSON_MAPPING.BD_SETTING_STANDARD][O.JSON_MAPPING.ADSERVER_TARGETING] = [{
                key: O.TARGETING_KEYS.BIDDER,
                val: function(e) {
                    return e.bidderCode
                }
            }, {
                key: O.TARGETING_KEYS.AD_ID,
                val: function(e) {
                    return e.adId
                }
            }, {
                key: O.TARGETING_KEYS.PRICE_BUCKET,
                val: function(e) {
                    return n === O.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === O.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === O.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === O.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === O.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === O.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            }, {
                key: O.TARGETING_KEYS.SIZE,
                val: function(e) {
                    return e.size
                }
            }, {
                key: O.TARGETING_KEYS.DEAL,
                val: function(e) {
                    return e.dealId
                }
            }, {
                key: O.TARGETING_KEYS.SOURCE,
                val: function(e) {
                    return e.source
                }
            }, {
                key: O.TARGETING_KEYS.FORMAT,
                val: function(e) {
                    return e.mediaType
                }
            }]), r[O.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function b(e, t) {
            if (!t) return {};
            var n = {},
                r = instBid.bidderSettings;
            r && (u(n, d(t.mediaType), t), e && r[e] && r[e][O.JSON_MAPPING.ADSERVER_TARGETING] && (u(n, r[e], t), t.sendStandardTargeting = r[e].sendStandardTargeting));
            return t.native && (n = g({}, n, (0, i.getNativeTargeting)(t))), n
        }

        function u(r, i, o) {
            var e = i[O.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), B._each(e, (function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && B.logWarn("The key: " + t + " is getting ovewritten"), B.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    B.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== O.TARGETING_KEYS.DEAL || !B.isEmptyStr(n) && null != n ? r[t] = n : B.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            })), r
        }

        function h(e) {
            var t = e.bidderCode,
                n = e.cpm,
                r = void 0;
            if (instBid.bidderSettings && (t && instBid.bidderSettings[t] && "function" == typeof instBid.bidderSettings[t].bidCpmAdjustment ? r = instBid.bidderSettings[t].bidCpmAdjustment : instBid.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof instBid.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = instBid.bidderSettings[O.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), r)) try {
                n = r(e.cpm, g({}, e))
            } catch (e) {
                B.logError("Error during bid adjustment", "bidmanager.js", e)
            }
            0 <= n && (e.cpm = n)
        }

        function G(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    47: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(34)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            find: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(26)(o)
    },
    48: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    49: function(e, t, n) {
        var r = n(50),
            i = n(55);
        e.exports = n(22) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    50: function(e, t, n) {
        var r = n(51),
            i = n(52),
            o = n(54),
            a = Object.defineProperty;
        t.f = n(22) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    51: function(e, t, n) {
        var r = n(15);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    52: function(e, t, n) {
        e.exports = !n(22) && !n(33)((function() {
            return 7 != Object.defineProperty(n(53)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    53: function(e, t, n) {
        var r = n(15),
            i = n(19).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    54: function(e, t, n) {
        var i = n(15);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    55: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    56: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    57: function(e, t, n) {
        var r = n(24);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    58: function(e, t, n) {
        var r = n(59);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    59: function(e, t, n) {
        var r = n(15),
            i = n(38),
            o = n(25)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    6: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ajax = void 0;
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.ajaxBuilder = r;
        var p = n(11),
            v = n(3),
            y = n(0),
            m = 4;
        t.ajax = r();

        function r() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                c = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i = void 0,
                        o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var d = "object" === (void 0 === t ? "undefined" : g(t)) && null !== t ? t : {
                        success: function() {
                            y.logMessage("xhr success")
                        },
                        error: function(e) {
                            y.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (d.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === m) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? d.success(i.responseText, i) : d.error(i.statusText, i)
                            }
                        }, v.config.getConfig("disableAjaxTimeout") || (i.ontimeout = function() {
                            y.logError("  xhr timeout after ", i.timeout, "ms")
                        }), "GET" === o && n) {
                        var u = (0, p.parse)(e, r);
                        l(u.search, n), e = (0, p.format)(u)
                    }
                    i.open(o, e, !0), v.config.getConfig("disableAjaxTimeout") || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), y._each(r.customHeaders, (function(e, t) {
                        i.setRequestHeader(t, e)
                    })), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof c && c(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    y.logError("xhr construction", e)
                }
            }
        }
    },
    60: function(e, t, n) {
        var r = n(13),
            i = n(19),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(61) ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    61: function(e, t) {
        e.exports = !0
    },
    62: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    628: function(e, t, n) {
        e.exports = n(629)
    },
    629: function(e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = n(42),
            d = n(0),
            u = n(630),
            s = n(18),
            c = n(28),
            f = n(3),
            l = n(29),
            g = n(43),
            p = n(20),
            v = n(631),
            y = n(7),
            m = (r = y) && r.__esModule ? r : {
                default: r
            },
            b = n(40),
            h = n(12);
        var S = (0, a.getGlobal)(),
            E = n(4),
            T = n(0),
            A = n(8),
            I = n(16),
            _ = n(9),
            B = s.userSync.triggerUserSyncs,
            w = E.EVENTS,
            C = w.ADD_AD_UNITS,
            O = w.BID_WON,
            R = w.REQUEST_BIDS,
            U = w.SET_TARGETING,
            N = w.AD_RENDER_FAILED,
            D = E.AD_RENDER_FAILED_REASON,
            P = D.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            k = D.NO_AD,
            x = D.EXCEPTION,
            j = D.CANNOT_FIND_AD,
            M = D.MISSING_DOC_OR_ADID,
            G = {
                bidWon: function(e) {
                    var t = l.auctionManager.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }))
                    })).reduce(d.flatten).filter(d.uniques);
                    return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.')
                }
            };

        function q(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }

        function W(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), T.logError(t), _.emit(N, r)
        }

        function z(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    T.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }(0, v.sessionLoader)(), S.bidderSettings = S.bidderSettings || {}, S.libLoaded = !0, S.version = "v1.34.0", T.logInfo("Prebid.js v1.34.0 loaded"), S.adUnits = S.adUnits || [], S.triggerUserSyncs = B, S.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (T.logInfo("Invoking instBid.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = S.getAdserverTargetingForAdUnitCode(e);
                return T.transformAdServerTargetingObj(t)
            }
            T.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, S.getAdserverTargetingForAdUnitCode = function(e) {
            return S.getAdserverTargeting(e)[e]
        }, S.getAdserverTargeting = function(e) {
            return T.logInfo("Invoking instBid.getAdserverTargeting", arguments), g.targeting.getAllTargeting(e)
        }, S.getBidResponses = function() {
            T.logInfo("Invoking instBid.getBidResponses", arguments);
            var e = l.auctionManager.getBidsReceived().filter(d.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes())),
                n = e && e.length && e[e.length - 1].auctionId;
            return e.map((function(e) {
                return e.adUnitCode
            })).filter(d.uniques).map((function(t) {
                return e.filter((function(e) {
                    return e.auctionId === n && e.adUnitCode === t
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return (function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                })({}, e[0].adUnitCode, {
                    bids: e.map(d.removeRequestId)
                })
            })).reduce((function(e, t) {
                return o(e, t)
            }), {})
        }, S.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: l.auctionManager.getBidsReceived().filter((function(e) {
                    return e.adUnitCode === t
                })).map(d.removeRequestId)
            }
        }, S.setTargetingForGPTAsync = function(e, t) {
            if (T.logInfo("Invoking instBid.setTargetingForGPTAsync", arguments), (0, d.isGptPubadsDefined)()) {
                var n = g.targeting.getAllTargeting(e);
                g.targeting.resetPresetTargeting(e), g.targeting.setTargetingForGPT(n, t), Object.keys(n).forEach((function(t) {
                    Object.keys(n[t]).forEach((function(e) {
                        "hb_adid" === e && l.auctionManager.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET)
                    }))
                })), _.emit(U, n)
            } else T.logError("window.googletag is not defined on the page")
        }, S.setTargetingForAst = function() {
            T.logInfo("Invoking instBid.setTargetingForAn", arguments), g.targeting.isApntagDefined() ? (g.targeting.setTargetingForAst(), _.emit(U, g.targeting.getAllTargeting())) : T.logError("window.apntag is not defined on the page")
        }, S.renderAd = function(e, t) {
            if (T.logInfo("Invoking instBid.renderAd", arguments), T.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = l.auctionManager.findBidByAdId(t);
                if (n) {
                    n.status = E.BID_STATUS.RENDERED, n.ad = T.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = T.replaceAuctionPrice(n.adUrl, n.cpm), l.auctionManager.addWinningBid(n), _.emit(O, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        d = n.adUrl,
                        u = n.renderer,
                        s = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                    if (T.insertElement(s, e, "body"), (0, h.isRendererRequired)(u))(0, h.executeRenderer)(u, n);
                    else if (e === document && !T.inIframe() || "video" === a) {
                        W(P, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", n)
                    } else if (o) e.write(o), e.close(), q(e, i, r), T.callBurl(n);
                    else if (d) {
                        var c = T.createInvisibleIframe();
                        c.height = r, c.width = i, c.style.display = "inline", c.style.overflow = "hidden", c.src = d, T.insertElement(c, e, "body"), q(e, i, r), T.callBurl(n)
                    } else {
                        W(k, "Error trying to write ad. No ad for bid response id: " + t, n)
                    }
                } else {
                    W(j, "Error trying to write ad. Cannot find ad by given id : " + t)
                }
            } catch (e) {
                var f = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                W(x, f)
            } else W(M, "Error trying to write ad Id :" + t + " to the page. Missing document or adId")
        }, S.removeAdUnit = function(e) {
            if (T.logInfo("Invoking instBid.removeAdUnit", arguments), e)
                for (var t = 0; t < S.adUnits.length; t++) S.adUnits[t].code === e && S.adUnits.splice(t, 1)
        }, S.requestBids = (0, p.createHook)("asyncSeries", (function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels;
            _.emit(R);
            var a = n || f.config.getConfig("bidderTimeout");
            if (r = r || S.adUnits, T.logInfo("Invoking instBid.requestBids", arguments), i && i.length ? r = r.filter((function(e) {
                    return (0, m.default)(i, e.code)
                })) : i = r && r.map((function(e) {
                    return e.code
                })), r.forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map((function(e) {
                            return e.bidder
                        })),
                        a = A.bidderRegistry,
                        t = f.config.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter((function(e) {
                            return !(0, m.default)(n, e)
                        })) : e;
                    i.transactionId = T.generateUUID(), r.forEach((function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return (0, m.default)(r, e)
                        })) || (T.logWarn(T.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        })))
                    })), b.adunitCounter.incrementCounter(i.code)
                })), r && 0 !== r.length) {
                var d = l.auctionManager.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: a,
                    labels: o
                });
                return d.callBids(), d
            }
            if (T.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                T.logError("Error executing bidsBackHandler", null, e)
            }
        })), S.addAdUnits = function(e) {
            T.logInfo("Invoking instBid.addAdUnits", arguments), T.isArray(e) ? S.adUnits.push.apply(S.adUnits, e) : "object" === (void 0 === e ? "undefined" : i(e)) && S.adUnits.push(e), _.emit(C)
        }, S.onEvent = function(e, t, n) {
            T.logInfo("Invoking instBid.onEvent", arguments), T.isFn(t) ? !n || G[e].call(null, n) ? _.on(e, t, n) : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : T.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, S.offEvent = function(e, t, n) {
            T.logInfo("Invoking instBid.offEvent", arguments), n && !G[e].call(null, n) || _.off(e, t, n)
        }, S.registerBidAdapter = function(e, t) {
            T.logInfo("Invoking instBid.registerBidAdapter", arguments);
            try {
                A.registerBidAdapter(e(), t)
            } catch (e) {
                T.logError("Error registering bidder adapter : " + e.message)
            }
        }, S.registerAnalyticsAdapter = function(e) {
            T.logInfo("Invoking instBid.registerAnalyticsAdapter", arguments);
            try {
                A.registerAnalyticsAdapter(e)
            } catch (e) {
                T.logError("Error registering analytics adapter : " + e.message)
            }
        }, S.createBid = function(e) {
            return T.logInfo("Invoking instBid.createBid", arguments), I.createBid(e)
        }, S.loadScript = function(e, t, n) {
            T.logInfo("Invoking instBid.loadScript", arguments), (0, c.loadScript)(e, t, n)
        }, S.enableAnalytics = function(e) {
            e && !T.isEmpty(e) ? (T.logInfo("Invoking instBid.enableAnalytics for: ", e), A.enableAnalytics(e)) : T.logError("instBid.enableAnalytics should be called with option {}")
        }, S.aliasBidder = function(e, t) {
            T.logInfo("Invoking instBid.aliasBidder", arguments), e && t ? A.aliasBidAdapter(e, t) : T.logError("bidderCode and alias must be passed as arguments", "instBid.aliasBidder")
        }, S.getAllWinningBids = function() {
            return l.auctionManager.getAllWinningBids().map(d.removeRequestId)
        }, S.getAllPrebidWinningBids = function() {
            return l.auctionManager.getBidsReceived().filter((function(e) {
                return e.status === E.BID_STATUS.BID_TARGETING_SET
            })).map(d.removeRequestId)
        }, S.getHighestCpmBids = function(e) {
            var t = (0, g.getHighestCpmBidsFromBidPool)(l.auctionManager.getBidsReceived(), d.getLatestHighestCpmBid);
            return g.targeting.getWinningBids(e, t).map(d.removeRequestId)
        }, S.markWinningBidAsUsed = function(t) {
            var e = [];
            t.adUnitCode && t.adId ? e = l.auctionManager.getBidsReceived().filter((function(e) {
                return e.adId === t.adId && e.adUnitCode === t.adUnitCode
            })) : t.adUnitCode ? e = g.targeting.getWinningBids(t.adUnitCode) : t.adId ? e = l.auctionManager.getBidsReceived().filter((function(e) {
                return e.adId === t.adId
            })) : T.logWarn("Inproper usage of markWinningBidAsUsed. It'll need an adUnitCode and/or adId to function."), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED)
        }, S.getConfig = f.config.getConfig, S.setConfig = f.config.setConfig, S.que.push((function() {
            return (0, u.listenMessagesFromCreative)()
        })), S.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                T.logError("Error processing command :", e.message, e.stack)
            } else T.logError("Commands written into instBid.cmd.push must be wrapped in a function")
        }, S.que.push = S.cmd.push, S.processQueue = function() {
            z(S.que), z(S.cmd)
        }
    },
    63: function(e, t, n) {
        "use strict";
        var r = n(14),
            i = n(64)(!0);
        r(r.P, "Array", {
            includes: function(e, t) {
                return i(this, e, 1 < arguments.length ? t : void 0)
            }
        }), n(26)("includes")
    },
    630: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.listenMessagesFromCreative = function() {
            addEventListener("message", l, !1)
        };
        var i = d(n(9)),
            o = n(17),
            r = n(4),
            s = n(0),
            a = n(29),
            c = d(n(10)),
            f = n(12);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = r.EVENTS.BID_WON;

        function l(e) {
            var t = e.message ? "message" : "data",
                n = {};
            try {
                n = JSON.parse(e[t])
            } catch (e) {
                return
            }
            if (n && n.adId) {
                var r = (0, c.default)(a.auctionManager.getBidsReceived(), (function(e) {
                    return e.adId === n.adId
                }));
                "Prebid Request" === n.message && (function(e, t, n) {
                    var r = e.adId,
                        i = e.ad,
                        o = e.adUrl,
                        a = e.width,
                        d = e.height,
                        u = e.renderer;
                    (0, f.isRendererRequired)(u) ? (0, f.executeRenderer)(u, e) : r && (function(e) {
                        var r = e.adUnitCode,
                            i = e.width,
                            o = e.height;

                        function a(e) {
                            var t = (function(e) {
                                    return window.googletag ? (function(e) {
                                        return (0, c.default)(window.googletag.pubads().getSlots().filter((0, s.isSlotMatchingAdUnitCode)(e)), (function(e) {
                                            return e
                                        })).getSlotElementId()
                                    })(e) : window.apntag ? (function(e) {
                                        var t = window.apntag.getTag(e);
                                        return t && t.targetId
                                    })(e) : e
                                })(r),
                                n = document.getElementById(t);
                            return n && n.querySelector(e)
                        }["div", "iframe"].forEach((function(e) {
                            var t = a(e);
                            if (t) {
                                var n = t.style;
                                n.width = i + "px", n.height = o + "px"
                            } else(0, s.logWarn)("Unable to locate matching page element for adUnitCode " + r + ".  Can't resize it to ad's dimensions.  Please review setup.")
                        }))
                    }(e), n.postMessage(JSON.stringify({
                        message: "Prebid Response",
                        ad: i,
                        adUrl: o,
                        adId: r,
                        width: a,
                        height: d
                    }), t))
                }(r, n.adServerDomain, e.source), a.auctionManager.addWinningBid(r), i.default.emit(u, r)), "Prebid Native" === n.message && ((0, o.fireNativeTrackers)(n, r), a.auctionManager.addWinningBid(r), i.default.emit(u, r))
            }
        }
    },
    631: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.boundHook = void 0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        r.disableOverrides = f, r.addBidResponseHook = l, r.getConfig = g, r.sessionLoader = function(e) {
            var t = void 0;
            try {
                e = e || window.sessionStorage, t = JSON.parse(e.getItem(d))
            } catch (e) {}
            t && c(t, !0)
        };
        var i = t(3),
            n = t(0),
            a = t(44),
            d = "instBid:debugging",
            u = r.boundHook = void 0;

        function s(e) {
            (0, n.logMessage)("DEBUG: " + e)
        }

        function c(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t;
            i.config.setConfig({
                debug: !0
            }), s("bidder overrides enabled" + (n ? " from session" : "")), u && a.addBidResponse.removeHook(u), r.boundHook = u = l.bind(null, e), a.addBidResponse.addHook(u, 5)
        }

        function f() {
            u && (a.addBidResponse.removeHook(u), s("bidder overrides disabled"))
        }

        function l(e, r, i, t) {
            Array.isArray(e.bidders) && -1 === e.bidders.indexOf(i.bidderCode) ? (function(e) {
                (0, n.logWarn)("DEBUG: " + e)
            })("bidder '" + i.bidderCode + "' excluded from auction by bidder overrides") : (Array.isArray(e.bids) && e.bids.forEach((function(n) {
                n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = o({}, i), Object.keys(n).filter((function(e) {
                    return -1 === ["bidder", "adUnitCode"].indexOf(e)
                })).forEach((function(e) {
                    var t = n[e];
                    s("bidder overrides changed '" + r + "/" + i.bidderCode + "' bid." + e + " from '" + i[e] + "' to '" + t + "'"), i[e] = t
                })))
            })), t(r, i))
        }

        function g(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(d, JSON.stringify(e))
                } catch (e) {}
                c(e)
            } else {
                f();
                try {
                    window.sessionStorage.removeItem(d)
                } catch (e) {}
            }
        }
        i.config.getConfig("debugging", (function(e) {
            return g(e.debugging)
        }))
    },
    64: function(e, t, n) {
        var u = n(65),
            s = n(36),
            c = n(66);
        e.exports = function(d) {
            return function(e, t, n) {
                var r, i = u(e),
                    o = s(i.length),
                    a = c(n, o);
                if (d && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((d || a in i) && i[a] === t) return d || a || 0;
                return !d && -1
            }
        }
    },
    65: function(e, t, n) {
        var r = n(35),
            i = n(24);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    66: function(e, t, n) {
        var r = n(37),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    67: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    68: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getRefererInfo = void 0;
        var d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.detectReferer = r;
        var u = n(0);

        function r(i) {
            function o() {
                var e = (function() {
                        var t = [],
                            n = void 0;
                        do {
                            try {
                                n = n ? n.parent : i;
                                try {
                                    var e = n == i.top,
                                        r = {
                                            referrer: n.document.referrer || null,
                                            location: n.location.href || null,
                                            isTop: e
                                        };
                                    e && (r = d(r, {
                                        canonicalUrl: a(n.document)
                                    })), t.push(r)
                                } catch (e) {
                                    t.push({
                                        referrer: null,
                                        location: null,
                                        isTop: n == i.top
                                    }), (0, u.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location")
                                }
                            } catch (e) {
                                return t.push({
                                    referrer: null,
                                    location: null,
                                    isTop: !1
                                }), t
                            }
                        } while (n != i.top);
                        return t
                    })(),
                    t = (function() {
                        try {
                            if (!i.location.ancestorOrigins) return;
                            return i.location.ancestorOrigins
                        } catch (e) {}
                    })();
                if (t)
                    for (var n = 0, r = t.length; n < r; n++) e[n].ancestor = t[n];
                return e
            }

            function a(e) {
                try {
                    var t = e.querySelector("link[rel='canonical']");
                    if (null !== t) return t.href
                } catch (e) {}
                return null
            }
            return function() {
                try {
                    var e = o(),
                        t = e.length - 1,
                        n = null !== e[t].location || 0 < t && null !== e[t - 1].referrer,
                        r = (function(e) {
                            var t = [],
                                n = null,
                                r = null,
                                i = null,
                                o = null,
                                a = null,
                                d = void 0;
                            for (d = e.length - 1; 0 <= d; d--) {
                                try {
                                    n = e[d].location
                                } catch (e) {}
                                if (n) t.push(n), a = a || n;
                                else if (0 !== d) {
                                    r = e[d - 1];
                                    try {
                                        i = r.referrer, o = r.ancestor
                                    } catch (e) {}
                                    i ? (t.push(i), a = a || i) : o ? (t.push(o), a = a || o) : t.push(null)
                                } else t.push(null)
                            }
                            return {
                                stack: t,
                                detectedRefererUrl: a
                            }
                        })(e),
                        i = void 0;
                    return e[e.length - 1].canonicalUrl && (i = e[e.length - 1].canonicalUrl), {
                        referer: r.detectedRefererUrl,
                        reachedTop: n,
                        numIframes: t,
                        stack: r.stack,
                        canonicalUrl: i
                    }
                } catch (e) {}
            }
        }
        t.getRefererInfo = r(window)
    },
    7: function(e, t, n) {
        n(63), e.exports = n(13).Array.includes
    },
    8: function(e, p, t) {
        "use strict";
        var b = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && d.return && d.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            h = t(0),
            v = t(39),
            y = t(17),
            u = t(1),
            S = t(6),
            m = t(3),
            E = n(t(7)),
            T = n(t(10)),
            A = t(40),
            I = t(68);

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var _ = t(0),
            B = t(4),
            w = t(9),
            C = void 0,
            O = {};
        p.bidderRegistry = O, p.aliasRegistry = {};
        var R = {};
        m.config.getConfig("s2sConfig", (function(e) {
            R = e.s2sConfig
        }));
        var r = {};

        function U(e) {
            var i = e.bidderCode,
                s = e.auctionId,
                c = e.bidderRequestId,
                t = e.adUnits,
                f = e.labels,
                l = e.src;
            return t.reduce((function(e, d) {
                var t = (0, v.resolveStatus)((0, v.getLabels)(d, f), d.mediaTypes, d.sizes),
                    n = t.active,
                    u = t.mediaTypes,
                    r = t.filterResults;
                return n ? r && _.logInfo('Size mapping filtered adUnit "' + d.code + '" banner sizes from ', r.before, "to ", r.after) : _.logInfo('Size mapping disabled adUnit "' + d.code + '"'), n && e.push(d.bids.filter((function(e) {
                    return e.bidder === i
                })).reduce((function(e, t) {
                    var n = d.nativeParams || _.deepAccess(d, "mediaTypes.native");
                    n && (t = g({}, t, {
                        nativeParams: (0, y.processNativeAdUnitParams)(n)
                    })), t = g({}, t, (0, h.getDefinedParams)(d, ["mediaType", "renderer"]));
                    var r = (0, v.resolveStatus)((0, v.getLabels)(t, f), u),
                        i = r.active,
                        o = r.mediaTypes,
                        a = r.filterResults;
                    return i ? a && _.logInfo('Size mapping filtered adUnit "' + d.code + '" bidder "' + t.bidder + '" banner sizes from ', a.before, "to ", a.after) : _.logInfo('Size mapping deactivated adUnit "' + d.code + '" bidder "' + t.bidder + '"'), _.isValidMediaTypes(o) ? t = g({}, t, {
                        mediaTypes: o
                    }) : _.logError("mediaTypes is not correctly configured for adunit " + d.code), i && e.push(g({}, t, {
                        adUnitCode: d.code,
                        transactionId: d.transactionId,
                        sizes: _.deepAccess(o, "banner.sizes") || [],
                        bidId: t.bid_id || _.getUniqueIdentifierStr(),
                        bidderRequestId: c,
                        auctionId: s,
                        src: l,
                        bidRequestsCount: A.adunitCounter.getCounter(d.code)
                    })), e
                }), [])), e
            }), []).reduce(h.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }

        function N() {
            return R && R.enabled && R.testing && C
        }

        function i(t, n, e) {
            try {
                var r = O[t].getSpec();
                r && r[n] && "function" == typeof r[n] && (_.logInfo("Invoking " + t + "." + n), r[n](e))
            } catch (e) {
                _.logWarn("Error calling " + n + " of " + t)
            }
        }
        p.gdprDataHandler = {
            consentData: null,
            setConsentData: function(e) {
                this.consentData = e
            },
            getConsentData: function() {
                return this.consentData
            }
        }, p.makeBidRequests = function(e, i, o, a, d) {
            var u = [];
            e = p.checkBidRequestSizes(e);
            var t = (0, h.getBidderCodes)(e);
            m.config.getConfig("bidderSequence") === m.RANDOM && (t = (0, h.shuffle)(t));
            var s = (0, I.getRefererInfo)(),
                n = t,
                r = [];
            if (R.enabled) {
                N() && (r = C.getSourceBidderMap(e)[C.CLIENT]);
                var c = R.bidders;
                n = t.filter((function(e) {
                    return !(0, E.default)(c, e) || (0, E.default)(r, e)
                }));
                var f = (function(e) {
                        var t = R.bidders,
                            n = _.deepClone(e);
                        return n.forEach((function(e) {
                            e.bids = e.bids.filter((function(e) {
                                return (0, E.default)(t, e.bidder) && (!N() || e.finalSource !== C.CLIENT)
                            })).map((function(e) {
                                return e.bid_id = _.getUniqueIdentifierStr(), e
                            }))
                        })), n = n.filter((function(e) {
                            return 0 !== e.bids.length
                        }))
                    })(e),
                    l = _.generateUUID();
                c.forEach((function(e) {
                    var t = _.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            tid: l,
                            bids: U({
                                bidderCode: e,
                                auctionId: o,
                                bidderRequestId: t,
                                adUnits: _.deepClone(f),
                                labels: d,
                                src: B.S2S.SRC
                            }),
                            auctionStart: i,
                            timeout: R.timeout,
                            src: B.S2S.SRC,
                            refererInfo: s
                        };
                    0 !== n.bids.length && u.push(n)
                })), f.forEach((function(e) {
                    var t = e.bids.filter((function(t) {
                        return (0, T.default)(u, (function(e) {
                            return (0, T.default)(e.bids, (function(e) {
                                return e.bidId === t.bid_id
                            }))
                        }))
                    }));
                    e.bids = t
                })), u.forEach((function(e) {
                    e.adUnitsS2SCopy = f.filter((function(e) {
                        return 0 < e.bids.length
                    }))
                }))
            }
            var g = (function(e) {
                var t = _.deepClone(e);
                return t.forEach((function(e) {
                    e.bids = e.bids.filter((function(e) {
                        return !N() || e.finalSource !== C.SERVER
                    }))
                })), t = t.filter((function(e) {
                    return 0 !== e.bids.length
                }))
            })(e);
            return n.forEach((function(e) {
                var t = _.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: o,
                        bidderRequestId: t,
                        bids: U({
                            bidderCode: e,
                            auctionId: o,
                            bidderRequestId: t,
                            adUnits: _.deepClone(g),
                            labels: d,
                            src: "client"
                        }),
                        auctionStart: i,
                        timeout: a,
                        refererInfo: s
                    },
                    r = O[e];
                r || _.logError("Trying to make a request for bidder that does not exist: " + e), r && n.bids && 0 !== n.bids.length && u.push(n)
            })), p.gdprDataHandler.getConsentData() && u.forEach((function(e) {
                e.gdprConsent = p.gdprDataHandler.getConsentData()
            })), u
        }, p.checkBidRequestSizes = function(e) {
            function d(e) {
                return Array.isArray(e) && 2 === e.length && _.isInteger(e[0]) && _.isInteger(e[1])
            }
            return e.forEach((function(e) {
                var t = e.mediaTypes,
                    n = _.getAdUnitSizes(e);
                if (t && t.banner) {
                    var r = t.banner;
                    r.sizes ? (r.sizes = n, e.sizes = n) : (_.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                } else e.sizes && (_.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes)."), e.sizes = n);
                if (t && t.video) {
                    var i = t.video;
                    if (i.playerSize)
                        if (Array.isArray(i.playerSize) && 1 === i.playerSize.length && i.playerSize.every(d)) e.sizes = i.playerSize;
                        else if (d(i.playerSize)) {
                        var o = [];
                        o.push(i.playerSize), _.logInfo("Transforming video.playerSize from " + i.playerSize + " to " + o + " so it's in the proper format."), e.sizes = i.playerSize = o
                    } else _.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var a = t.native;
                    a.image && a.image.sizes && !Array.isArray(a.image.sizes) && (_.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), a.image && a.image.aspect_ratios && !Array.isArray(a.image.aspect_ratios) && (_.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), a.icon && a.icon.sizes && !Array.isArray(a.icon.sizes) && (_.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            })), e
        }, p.callBids = function(e, t, r, i, o, a) {
            if (t.length) {
                var n = t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === B.S2S.SRC)].push(t), e
                    }), [
                        [],
                        []
                    ]),
                    d = b(n, 2),
                    u = d[0],
                    s = d[1];
                if (s.length) {
                    var c = (0, S.ajaxBuilder)(a, o ? {
                            request: o.request.bind(null, "s2s"),
                            done: o.done
                        } : void 0),
                        f = R.bidders,
                        l = O[R.adapter],
                        g = s[0].tid,
                        p = s[0].adUnitsS2SCopy;
                    if (l) {
                        var v = {
                            tid: g,
                            ad_units: p
                        };
                        if (v.ad_units.length) {
                            var y = s.map((function(e) {
                                    return e.start = (0, h.timestamp)(), i
                                })),
                                m = v.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }), []))
                                }), []);
                            _.logMessage("CALLING S2S HEADER BIDDERS ==== " + f.filter((function(e) {
                                return (0, E.default)(m, e)
                            })).join(",")), s.forEach((function(e) {
                                w.emit(B.EVENTS.BID_REQUESTED, e)
                            })), l.callBids(v, s, r, (function() {
                                return y.forEach((function(e) {
                                    return e()
                                }))
                            }), c)
                        }
                    }
                }
                u.forEach((function(e) {
                    e.start = (0, h.timestamp)();
                    var t = O[e.bidderCode];
                    _.logMessage("CALLING BIDDER ======= " + e.bidderCode), w.emit(B.EVENTS.BID_REQUESTED, e);
                    var n = (e.doneCbCallCount = 0, S.ajaxBuilder)(a, o ? {
                        request: o.request.bind(null, e.bidderCode),
                        done: o.done
                    } : void 0);
                    t.callBids(e, r, i, n)
                }))
            } else _.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, p.videoAdapters = [], p.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (O[t] = e, (0, E.default)(r, "video") && p.videoAdapters.push(t), (0, E.default)(r, "native") && y.nativeAdapters.push(t)) : _.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : _.logError("bidAdaptor or bidderCode not specified")
        }, p.aliasBidAdapter = function(t, e) {
            if (void 0 === O[e]) {
                var n = O[t];
                if (void 0 === n) {
                    var r = m.config.getConfig("s2sConfig"),
                        i = r && r.bidders;
                    i && (0, E.default)(i, e) ? p.aliasRegistry[e] = t : _.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter")
                } else try {
                    var o = void 0,
                        a = (function(e) {
                            var t = [];
                            return (0, E.default)(p.videoAdapters, e) && t.push("video"), (0, E.default)(y.nativeAdapters, e) && t.push("native"), t
                        })(t);
                    if (n.constructor.prototype != Object.prototype)(o = new n.constructor).setBidderCode(e);
                    else {
                        var d = n.getSpec();
                        o = (0, u.newBidder)(g({}, d, {
                            code: e
                        })), p.aliasRegistry[e] = t
                    }
                    this.registerBidAdapter(o, e, {
                        supportedMediaTypes: a
                    })
                } catch (e) {
                    _.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                }
            } else _.logMessage('alias name "' + e + '" has been already specified.')
        }, p.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, r[n] = t) : _.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : _.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, p.enableAnalytics = function(e) {
            _.isArray(e) || (e = [e]), _._each(e, (function(e) {
                var t = r[e.provider];
                t ? t.enableAnalytics(e) : _.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
            }))
        }, p.getBidAdapter = function(e) {
            return O[e]
        }, p.setS2STestingModule = function(e) {
            C = e
        }, p.callTimedOutBidders = function(t, n, r) {
            n = n.map((function(e) {
                return e.params = _.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            })), n = _.groupBy(n, "bidder"), Object.keys(n).forEach((function(e) {
                i(e, "onTimeout", n[e])
            }))
        }, p.callBidWonBidder = function(e, t, n) {
            t.params = _.getUserConfiguredParams(n, t.adUnitCode, t.bidder), i(e, "onBidWon", t)
        }, p.callSetTargetingBidder = function(e, t) {
            i(e, "onSetTargeting", t)
        }
    },
    9: function(e, t, n) {
        "use strict";
        var d, r, i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            c = u._map(o.EVENTS, (function(e) {
                return e
            })),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (d = {}, (r = {}).on = function(e, t, n) {
            if (function(e) {
                    return u.contains(c, e)
                }(e)) {
                var r = d[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), d[e] = r
            } else u.logError("Wrong event name : " + e + " Valid event names :" + c)
        }, r.emit = function(e) {
            !(function(e, t) {
                u.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = d[e] || {
                        que: []
                    },
                    o = u._map(i, (function(e, t) {
                        return t
                    })),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, (function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        u.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(e, a.call(arguments, 1))
        }, r.off = function(e, n, r) {
            var i = d[e];
            u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, (function(e) {
                var t = i[r].que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })) : u._each(i.que, (function(e) {
                var t = i.que;
                e === n && t.splice(u.indexOf.call(t, e), 1)
            })), d[e] = i)
        }, r.get = function() {
            return d
        }, r.getEvents = function() {
            var n = [];
            return u._each(l, (function(e) {
                var t = i({}, e);
                n.push(t)
            })), n
        }, r)
    }
});
instBidChunk([179], {
    45: function(t, e, n) {
        n(46), t.exports = n(69)
    },
    46: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spec = void 0;
        var s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            },
            c = (function(t) {
                {
                    if (t && t.__esModule) return t;
                    var e = {};
                    if (null != t)
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e.default = t, e
                }
            })(n(0));
        var i = n(1).registerBidder,
            p = n(3).config,
            r = "33across",
            l = "https://ssc.33across.com/api/v1/hb",
            o = "https://de.tynt.com/deb/v2?m=xch&rt=html",
            d = {},
            h = "nm";

        function f(t) {
            return !(function() {
                try {
                    return c.getWindowSelf() !== c.getWindowTop()
                } catch (t) {
                    return !0
                }
            })() && null !== t
        }

        function g(t, e, n) {
            var i = 2 < arguments.length && void 0 !== n ? n : {},
                r = i.w,
                o = i.h;
            return "visible" === c.getWindowTop().document.visibilityState ? (function(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    i = n.w,
                    r = n.h,
                    o = (function(t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.w,
                            i = e.h,
                            r = t.getBoundingClientRect(),
                            o = r.width,
                            d = r.height,
                            u = r.left,
                            a = r.top,
                            s = r.right,
                            c = r.bottom;
                        (0 === o || 0 === d) && n && i && (s = u + (o = n), c = a + (d = i));
                        return {
                            width: o,
                            height: d,
                            left: u,
                            top: a,
                            right: s,
                            bottom: c
                        }
                    })(t, {
                        w: i,
                        h: r
                    }),
                    d = (function(t) {
                        for (var e = {
                                left: t[0].left,
                                right: t[0].right,
                                top: t[0].top,
                                bottom: t[0].bottom
                            }, n = 1; n < t.length; ++n) {
                            if (e.left = Math.max(e.left, t[n].left), e.right = Math.min(e.right, t[n].right), e.left >= e.right) return null;
                            if (e.top = Math.max(e.top, t[n].top), e.bottom = Math.min(e.bottom, t[n].bottom), e.top >= e.bottom) return null
                        }
                        return e.width = e.right - e.left, e.height = e.bottom - e.top, e
                    })([{
                        left: 0,
                        top: 0,
                        right: e.innerWidth,
                        bottom: e.innerHeight
                    }, o]),
                    u = void 0,
                    a = void 0;
                return null === d ? 0 : (u = d.width * d.height, a = o.width * o.height, u / a * 100)
            })(t, e, {
                w: r,
                h: o
            }) : 0
        }

        function u(t, e) {
            var n = {},
                i = t.params,
                r = document.getElementById(t.adUnitCode),
                o = (function(t) {
                    return !c.isArray(t) || 2 !== t.length || c.isArray(t[0]) ? t.map(b) : [b(t)]
                })(t.sizes),
                d = (function(t) {
                    return t.reduce((function(t, e) {
                        return e.h * e.w < t.h * t.w ? e : t
                    }))
                })(o),
                u = (function(o) {
                    return function(t) {
                        var e = s({}, t),
                            n = e.imp = e.imp.map((function(t) {
                                return s({}, t)
                            })),
                            i = n[0].banner = s({}, n[0].banner),
                            r = i.ext = s({}, i.ext);
                        return (r.ttx = s({}, r.ttx)).viewability = {
                            amount: isNaN(o) ? o : Math.round(o)
                        }, e
                    }
                })(f(r) ? g(r, c.getWindowTop(), d) : h);
            null === r && c.logWarn("Unable to locate element with id: '" + t.adUnitCode + "'"), n.imp = [], n.imp[0] = {
                banner: {
                    format: o.map((function(t) {
                        return s(t, {
                            ext: {}
                        })
                    }))
                },
                ext: {
                    ttx: {
                        prod: i.productId
                    }
                }
            }, n.site = {
                id: i.siteId
            }, n.id = t.bidId, n.user = {
                ext: {
                    consent: e.consentString
                }
            }, n.regs = {
                ext: {
                    gdpr: !0 === e.gdprApplies ? 1 : 0
                }
            }, n.ext = {
                ttx: {
                    caller: [{
                        name: "prebidjs",
                        version: "1.34.0"
                    }]
                }
            }, 1 === i.test && (n.test = 1);
            var a = p.getConfig("ttxSettings");
            return {
                method: "POST",
                url: a && a.url || l,
                data: JSON.stringify(u(n)),
                options: {
                    contentType: "text/plain",
                    withCredentials: !0
                }
            }
        }

        function a(t) {
            var e = p.getConfig("ttxSettings");
            return {
                type: "iframe",
                url: (e && e.syncUrl || o) + "&id=" + t
            }
        }

        function b(t) {
            return {
                w: parseInt(t[0], 10),
                h: parseInt(t[1], 10)
            }
        }
        i(e.spec = {
            NON_MEASURABLE: h,
            code: r,
            isBidRequestValid: function(t) {
                return t.bidder === r && void 0 !== t.params && (void 0 !== t.params.siteId && void 0 !== t.params.productId)
            },
            buildRequests: function(t, e) {
                var n = s({
                    consentString: void 0,
                    gdprApplies: !1
                }, e && e.gdprConsent);
                return d.uniqueSiteIds = t.map((function(t) {
                    return t.params.siteId
                })).filter(c.uniques), t.map((function(t) {
                    return u(t, n)
                }))
            },
            interpretResponse: function(t, e) {
                var n = [];
                return 0 < t.body.seatbid.length && 0 < t.body.seatbid[0].bid.length && n.push(function(t) {
                    return {
                        requestId: t.id,
                        bidderCode: r,
                        cpm: t.seatbid[0].bid[0].price,
                        width: t.seatbid[0].bid[0].w,
                        height: t.seatbid[0].bid[0].h,
                        ad: t.seatbid[0].bid[0].adm,
                        ttl: t.seatbid[0].bid[0].ttl || 60,
                        creativeId: t.seatbid[0].bid[0].crid,
                        currency: t.cur,
                        netRevenue: !0
                    }
                }(t.body)), n
            },
            getUserSyncs: function(t, e, n) {
                return n && !0 === n.gdprApplies ? [] : t.iframeEnabled ? d.uniqueSiteIds.map(a) : []
            }
        })
    },
    69: function(t, e) {}
}, [45]);
instBidChunk([177], {
    73: function(e, r, a) {
        a(74), e.exports = a(75)
    },
    74: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0, r.resetUserSync = function() {
            s = !1
        };
        var d = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e, r
                }
            })(a(0)),
            t = a(1);
        var s = !1;
        var n = r.spec = {
            code: "aardvark",
            isBidRequestValid: function(e) {
                return "string" == typeof e.params.ai && !!e.params.ai.length && "string" == typeof e.params.sc && !!e.params.sc.length
            },
            buildRequests: function(e, a) {
                var t = [],
                    n = [],
                    o = {},
                    s = d.getTopWindowUrl(),
                    i = [];
                try {
                    window.top.rtkcategories && Array.isArray(window.top.rtkcategories) && (i = window.top.rtkcategories)
                } catch (e) {}
                return d._each(e, (function(e) {
                    var r = o[e.params.ai];
                    r || (r = {
                        shortCodes: [],
                        payload: {
                            version: 1,
                            jsonp: !1,
                            rtkreferer: s
                        },
                        endpoint: "bidder.rtk.io"
                    }, i && i.length && (r.payload.categories = i.slice(0)), e.params.categories && e.params.categories.length && (r.payload.categories = r.payload.categories || [], d._each(e.params.categories, (function(e) {
                        r.payload.categories.push(e)
                    }))), a && a.gdprConsent && (r.payload.gdpr = !1, "boolean" == typeof a.gdprConsent.gdprApplies && (r.payload.gdpr = a.gdprConsent.gdprApplies), r.payload.gdpr && (r.payload.consent = a.gdprConsent.consentString)), o[e.params.ai] = r, t.push(e.params.ai)), r.shortCodes.push(e.params.sc), r.payload[e.params.sc] = e.bidId, "string" == typeof e.params.host && e.params.host.length && e.params.host !== r.endpoint && (r.endpoint = e.params.host)
                })), d._each(t, (function(e) {
                    var r = o[e];
                    n.push({
                        method: "GET",
                        url: "//" + r.endpoint + "/" + e + "/" + r.shortCodes.join("_") + "/aardvark",
                        data: r.payload,
                        bidderRequest: a
                    })
                })), n
            },
            interpretResponse: function(e, r) {
                var t = [];
                return Array.isArray(e.body) || (e.body = [e.body]), d._each(e.body, (function(e) {
                    var r = +(e.cpm || 0);
                    if (r) {
                        var a = {
                            requestId: e.cid,
                            cpm: r,
                            width: e.width || 0,
                            height: e.height || 0,
                            currency: e.currency ? e.currency : "USD",
                            netRevenue: !e.netRevenue || e.netRevenue,
                            ttl: e.ttl ? e.ttl : 300,
                            creativeId: e.creativeId || 0
                        };
                        switch (e.hasOwnProperty("dealId") && (a.dealId = e.dealId), e.media) {
                            case "banner":
                                a.ad = e.adm + d.createTrackPixelHtml(decodeURIComponent(e.nurl));
                                break;
                            default:
                                return d.logError("bad Aardvark response (media)", e)
                        }
                        t.push(a)
                    }
                })), t
            },
            getUserSyncs: function(e, r, a) {
                var t = [],
                    n = "//sync.rtk.io/cs",
                    o = !1;
                return a && "boolean" == typeof a.gdprApplies && (o = a.gdprApplies), e.iframeEnabled ? s || (s = !0, o && (n = n + "?g=1&c=" + encodeURIComponent(a.consentString)), t.push({
                    type: "iframe",
                    url: n
                })) : d.logWarn("Aardvark: Please enable iframe based user sync."), t
            }
        };
        (0, t.registerBidder)(n)
    },
    75: function(e, r) {}
}, [73]);
instBidChunk([153], {
    153: function(e, r, a) {
        a(154), e.exports = a(155)
    },
    154: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            p = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            },
            u = a(12),
            m = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e, r
                }
            })(a(0)),
            t = a(1),
            c = a(2),
            l = n(a(10)),
            f = n(a(7));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            y = ["age", "external_uid", "segments", "gender", "dnt", "language"],
            v = ["geo", "device_id"],
            o = {
                body: "description",
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
                sponsoredBy: "sponsored_by"
            },
            d = r.spec = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "emxdigital", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [c.BANNER, c.VIDEO, c.NATIVE],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a = e.map(_),
                        t = (0, l.default)(e, I),
                        n = void 0;
                    t && (n = {}, Object.keys(t.params.user).filter((function(e) {
                        return (0, f.default)(y, e)
                    })).forEach((function(e) {
                        return n[e] = t.params.user[e]
                    })));
                    var i = (0, l.default)(e, k),
                        s = void 0;
                    i && i.params && i.params.app && (s = {}, Object.keys(i.params.app).filter((function(e) {
                        return (0, f.default)(v, e)
                    })).forEach((function(e) {
                        return s[e] = i.params.app[e]
                    })));
                    var d = (0, l.default)(e, T),
                        o = void 0;
                    d && d.params && i.params.app && i.params.app.id && (o = {
                        appid: d.params.app.id
                    });
                    var p = (0, l.default)(e, E),
                        u = p ? parseInt(p.params.member, 10) : 0,
                        m = {
                            tags: [].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var r = 0, a = Array(e.length); r < e.length; r++) a[r] = e[r];
                                    return a
                                }
                                return Array.from(e)
                            }(a)),
                            user: n,
                            sdk: {
                                source: "pbjs",
                                version: "1.34.0"
                            }
                        };
                    if (0 < u && (m.member_id = u), i && (m.device = s), d && (m.app = o), r && r.gdprConsent && (m.gdpr_consent = {
                            consent_string: r.gdprConsent.consentString,
                            consent_required: r.gdprConsent.gdprApplies
                        }), r && r.refererInfo) {
                        var c = {
                            rd_ref: encodeURIComponent(r.refererInfo.referer),
                            rd_top: r.refererInfo.reachedTop,
                            rd_ifs: r.refererInfo.numIframes,
                            rd_stk: r.refererInfo.stack.map((function(e) {
                                return encodeURIComponent(e)
                            })).join(",")
                        };
                        m.referrer_detection = c
                    }
                    return {
                        method: "POST",
                        url: "//ib.adnxs.com/ut/v3/prebid",
                        data: JSON.stringify(m),
                        bidderRequest: r
                    }
                },
                interpretResponse: function(e, r) {
                    var t = this,
                        n = r.bidderRequest;
                    e = e.body;
                    var i = [];
                    if (e && !e.error) return e.tags && e.tags.forEach((function(e) {
                        var r = (function(e) {
                            return e && e.ads && e.ads.length && (0, l.default)(e.ads, (function(e) {
                                return e.rtb
                            }))
                        })(e);
                        if (r && 0 !== r.cpm && (0, f.default)(t.supportedMediaTypes, r.ad_type)) {
                            var a = (function(e, r, a) {
                                var t = m.getBidRequest(e.uuid, [a]),
                                    n = {
                                        requestId: e.uuid,
                                        cpm: r.cpm,
                                        creativeId: r.creative_id,
                                        dealId: r.deal_id,
                                        currency: "USD",
                                        netRevenue: !0,
                                        ttl: 300,
                                        adUnitCode: t.adUnitCode,
                                        appnexus: {
                                            buyerMemberId: r.buyer_member_id,
                                            dealPriority: r.deal_priority,
                                            dealCode: r.deal_code
                                        }
                                    };
                                if (r.rtb.video) {
                                    if (p(n, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        }), r.renderer_url) {
                                        var i = m.deepAccess(a.bids[0], "renderer.options");
                                        p(n, {
                                            adResponse: e,
                                            renderer: (function(e, r) {
                                                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                    t = u.Renderer.install({
                                                        id: r.renderer_id,
                                                        url: r.renderer_url,
                                                        config: a,
                                                        loaded: !1,
                                                        adUnitCode: e
                                                    });
                                                try {
                                                    t.setRender(A)
                                                } catch (e) {
                                                    m.logWarn("Prebid Error calling setRender on renderer", e)
                                                }
                                                return t.setEventHandlers({
                                                    impression: function() {
                                                        return m.logMessage("AppNexus outstream video impression event")
                                                    },
                                                    loaded: function() {
                                                        return m.logMessage("AppNexus outstream video loaded event")
                                                    },
                                                    ended: function() {
                                                        m.logMessage("AppNexus outstream renderer video event"), document.querySelector("#" + e).style.display = "none"
                                                    }
                                                }), t
                                            })(n.adUnitCode, r, i)
                                        }), n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video
                                    }
                                } else if (r.rtb[c.NATIVE]) {
                                    var s = r.rtb[c.NATIVE];
                                    n[c.NATIVE] = {
                                        title: s.title,
                                        body: s.desc,
                                        cta: s.ctatext,
                                        sponsoredBy: s.sponsored,
                                        clickUrl: s.link.url,
                                        clickTrackers: s.link.click_trackers,
                                        impressionTrackers: s.impression_trackers,
                                        javascriptTrackers: s.javascript_trackers
                                    }, s.main_img && (n.native.image = {
                                        url: s.main_img.url,
                                        height: s.main_img.height,
                                        width: s.main_img.width
                                    }), s.icon && (n.native.icon = {
                                        url: s.icon.url,
                                        height: s.icon.height,
                                        width: s.icon.width
                                    })
                                } else {
                                    p(n, {
                                        width: r.rtb.banner.width,
                                        height: r.rtb.banner.height,
                                        ad: r.rtb.banner.content
                                    });
                                    try {
                                        var d = r.rtb.trackers[0].impression_urls[0],
                                            o = m.createTrackPixelHtml(d);
                                        n.ad += o
                                    } catch (e) {
                                        m.logError("Error appending tracking pixel", e)
                                    }
                                }
                                return n
                            })(e, r, n);
                            a.mediaType = (function(e) {
                                var r = e.ad_type;
                                return r === c.VIDEO ? c.VIDEO : r === c.NATIVE ? c.NATIVE : c.BANNER
                            })(r), i.push(a)
                        }
                    })), i;
                    var a = "in response for " + n.bidderCode + " adapter";
                    return e && e.error && (a += ": " + e.error), m.logError(a), i
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                },
                transformBidParams: function(a, e) {
                    return a = m.convertTypes({
                        member: "string",
                        invCode: "string",
                        placementId: "number",
                        keywords: m.transformBidderParamKeywords
                    }, a), e && (a.use_pmt_rule = "boolean" == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, b(a.keywords) && a.keywords.forEach(g), Object.keys(a).forEach((function(e) {
                        var r = m.convertCamelToUnderscore(e);
                        r !== e && (a[r] = a[e], delete a[e])
                    }))), a
                }
            };

        function b(e) {
            return !!(m.isArray(e) && 0 < e.length)
        }

        function g(e) {
            b(e.value) && "" === e.value[0] && delete e.value
        }

        function _(r) {
            var a = {};
            if (a.sizes = h(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = h(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), !m.isEmpty(r.params.keywords)) {
                var e = m.transformBidderParamKeywords(r.params.keywords);
                0 < e.length && e.forEach(g), a.keywords = e
            }
            if ((r.mediaType === c.NATIVE || m.deepAccess(r, "mediaTypes." + c.NATIVE)) && (a.ad_types.push(c.NATIVE), r.nativeParams)) {
                var t = (function(s) {
                    var d = {};
                    return Object.keys(s).forEach((function(e) {
                        var r = o[e] && o[e].serverName || o[e] || e,
                            a = o[e] && o[e].requiredParams;
                        d[r] = p({}, a, s[e]);
                        var t = o[e] && o[e].minimumParams;
                        if (a && t) {
                            var n = Object.keys(s[e]),
                                i = Object.keys(a);
                            0 === n.filter((function(e) {
                                return !(0, f.default)(i, e)
                            })).length && (d[r] = p({}, d[r], t))
                        }
                    })), d
                })(r.nativeParams);
                a[c.NATIVE] = {
                    layouts: [t]
                }
            }
            var n = m.deepAccess(r, "mediaTypes." + c.VIDEO),
                i = m.deepAccess(r, "mediaTypes.video.context");
            return r.mediaType !== c.VIDEO && !n || a.ad_types.push(c.VIDEO), (r.mediaType === c.VIDEO || n && "outstream" !== i) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter((function(e) {
                return (0, f.default)(s, e)
            })).forEach((function(e) {
                return a.video[e] = r.params.video[e]
            }))), (m.isEmpty(r.mediaType) && m.isEmpty(r.mediaTypes) || r.mediaType === c.BANNER || r.mediaTypes && r.mediaTypes[c.BANNER]) && a.ad_types.push(c.BANNER), a
        }

        function h(e) {
            var r = [],
                a = {};
            if (m.isArray(e) && 2 === e.length && !m.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === (void 0 === e ? "undefined" : i(e)))
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a)
                }
            return r
        }

        function I(e) {
            return !!e.params.user
        }

        function E(e) {
            return !!parseInt(e.params.member, 10)
        }

        function k(e) {
            if (e.params) return !!e.params.app
        }

        function T(e) {
            return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
        }

        function A(e) {
            e.renderer.push((function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            }))
        }(0, t.registerBidder)(d)
    },
    155: function(e, r) {}
}, [153]);
instBidChunk([149], {
    165: function(e, r, n) {
        n(166), e.exports = n(167)
    },
    166: function(e, r, n) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = r.DEFAULT_MIMES = r.VIDEO_TARGETING = r.OUTSTREAM_SRC = r.BANNER_ENDPOINT = r.VIDEO_ENDPOINT = void 0;
        var p = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = arguments[r];
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t])
                }
                return e
            },
            o = function(e, r) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, r) {
                    var n = [],
                        t = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var d, a = e[Symbol.iterator](); !(t = (d = a.next()).done) && (n.push(d.value), !r || n.length !== r); t = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !t && a.return && a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            f = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                    return r.default = e, r
                }
            })(n(0)),
            t = n(11),
            i = n(3),
            d = n(1),
            a = n(12),
            s = n(2),
            u = c(n(10)),
            l = c(n(7));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var v = r.VIDEO_ENDPOINT = "//reachms.bfmio.com/bid.json?exchange_id=",
            g = r.BANNER_ENDPOINT = "//display.bfmio.com/prebid_display",
            m = r.OUTSTREAM_SRC = "//player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js",
            h = r.VIDEO_TARGETING = ["mimes", "playbackmethod", "maxduration"],
            b = r.DEFAULT_MIMES = ["video/mp4", "application/javascript"],
            y = "",
            w = r.spec = {
                code: "beachfront",
                supportedMediaTypes: [s.VIDEO, s.BANNER],
                isBidRequestValid: function(e) {
                    return !(!R(e) && !W(e))
                },
                buildRequests: function(e, r) {
                    var n = [],
                        t = e.filter((function(e) {
                            return R(e)
                        })),
                        i = e.filter((function(e) {
                            return W(e)
                        }));
                    return t.forEach((function(e) {
                        y = _(e, "appId"), n.push({
                            method: "POST",
                            url: v + y,
                            data: (function(e, r) {
                                var n = T(A(e)),
                                    t = (function(n) {
                                        return Object.keys(Object(n.params.video)).filter((function(e) {
                                            return (0, l.default)(h, e)
                                        })).reduce((function(e, r) {
                                            return e[r] = n.params.video[r], e
                                        }), {})
                                    })(e),
                                    i = _(e, "appId"),
                                    o = _(e, "bidfloor"),
                                    d = M(r),
                                    a = {
                                        isPrebid: !0,
                                        appId: i,
                                        domain: document.location.hostname,
                                        id: f.getUniqueIdentifierStr(),
                                        imp: [{
                                            video: p({
                                                w: n.w,
                                                h: n.h,
                                                mimes: b
                                            }, t),
                                            bidfloor: o,
                                            secure: "https:" === d.protocol ? 1 : 0
                                        }],
                                        site: {
                                            page: d.href,
                                            domain: d.hostname
                                        },
                                        device: {
                                            ua: navigator.userAgent,
                                            language: navigator.language,
                                            devicetype: O() ? 1 : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent) ? 3 : 2,
                                            dnt: S() ? 1 : 0,
                                            js: 1,
                                            geo: {}
                                        },
                                        regs: {},
                                        user: {},
                                        cur: ["USD"]
                                    };
                                if (r && r.gdprConsent) {
                                    var s = r.gdprConsent,
                                        u = s.gdprApplies,
                                        c = s.consentString;
                                    a.regs.ext = {
                                        gdpr: u ? 1 : 0
                                    }, a.user.ext = {
                                        consent: c
                                    }
                                }
                                return a
                            })(e, r),
                            bidRequest: e
                        })
                    })), i.length && (y = P(i[0], "appId"), n.push({
                        method: "POST",
                        url: g,
                        data: (function(e, r) {
                            var n = M(r),
                                t = (function() {
                                    try {
                                        return window.top.document.referrer
                                    } catch (e) {
                                        return ""
                                    }
                                })(),
                                i = {
                                    slots: e.map((function(e) {
                                        return {
                                            slot: e.adUnitCode,
                                            id: P(e, "appId"),
                                            bidfloor: P(e, "bidfloor"),
                                            sizes: (function(e) {
                                                return N(f.deepAccess(e, "mediaTypes.banner.sizes") || e.sizes)
                                            })(e)
                                        }
                                    })),
                                    page: n.href,
                                    domain: n.hostname,
                                    search: n.search,
                                    secure: 0 === n.protocol.indexOf("https") ? 1 : 0,
                                    referrer: t,
                                    ua: navigator.userAgent,
                                    deviceOs: (function() {
                                        var e = (0, u.default)([{
                                            s: "Android",
                                            r: /Android/
                                        }, {
                                            s: "iOS",
                                            r: /(iPhone|iPad|iPod)/
                                        }, {
                                            s: "Mac OS X",
                                            r: /Mac OS X/
                                        }, {
                                            s: "Mac OS",
                                            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                                        }, {
                                            s: "Linux",
                                            r: /(Linux|X11)/
                                        }, {
                                            s: "Windows 10",
                                            r: /(Windows 10.0|Windows NT 10.0)/
                                        }, {
                                            s: "Windows 8.1",
                                            r: /(Windows 8.1|Windows NT 6.3)/
                                        }, {
                                            s: "Windows 8",
                                            r: /(Windows 8|Windows NT 6.2)/
                                        }, {
                                            s: "Windows 7",
                                            r: /(Windows 7|Windows NT 6.1)/
                                        }, {
                                            s: "Windows Vista",
                                            r: /Windows NT 6.0/
                                        }, {
                                            s: "Windows Server 2003",
                                            r: /Windows NT 5.2/
                                        }, {
                                            s: "Windows XP",
                                            r: /(Windows NT 5.1|Windows XP)/
                                        }, {
                                            s: "UNIX",
                                            r: /UNIX/
                                        }, {
                                            s: "Search Bot",
                                            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                                        }], (function(e) {
                                            return e.r.test(navigator.userAgent)
                                        }));
                                        return e ? e.s : "unknown"
                                    })(),
                                    isMobile: O() ? 1 : 0,
                                    dnt: S() ? 1 : 0,
                                    adapterVersion: "1.4",
                                    adapterName: "BFIO_PREBID"
                                };
                            if (r && r.gdprConsent) {
                                var o = r.gdprConsent,
                                    d = o.gdprApplies,
                                    a = o.consentString;
                                i.gdpr = d ? 1 : 0, i.gdprConsent = a
                            }
                            return i
                        })(i, r),
                        bidRequest: i
                    })), n
                },
                interpretResponse: function(e, r) {
                    var n = r.bidRequest;
                    if (e = e.body, E(n)) {
                        if (!e || !e.url || !e.bidPrice) return f.logWarn("No valid video bids from " + w.code + " bidder"), [];
                        var t = T(A(n)),
                            i = f.deepAccess(n, "mediaTypes.video.context");
                        return {
                            requestId: n.bidId,
                            bidderCode: w.code,
                            vastUrl: e.url,
                            cpm: e.bidPrice,
                            width: t.w,
                            height: t.h,
                            creativeId: e.cmpId,
                            renderer: "outstream" === i ? (function(e) {
                                var r = a.Renderer.install({
                                    id: e.bidId,
                                    url: m,
                                    loaded: !1
                                });
                                return r.setRender(I), r
                            })(n) : null,
                            mediaType: s.VIDEO,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300
                        }
                    }
                    return e && e.length ? e.filter((function(e) {
                        return e.adm
                    })).map((function(r) {
                        return {
                            requestId: (0, u.default)(n, (function(e) {
                                return e.adUnitCode === r.slot
                            })).bidId,
                            bidderCode: w.code,
                            ad: r.adm,
                            creativeId: r.crid,
                            cpm: r.price,
                            width: r.w,
                            height: r.h,
                            mediaType: s.BANNER,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 300
                        }
                    })) : (f.logWarn("No valid banner bids from " + w.code + " bidder"), [])
                },
                getUserSyncs: function(e, r, n) {
                    var t = 1 < arguments.length && void 0 !== r ? r : [],
                        i = 2 < arguments.length && void 0 !== n ? n : {},
                        o = [],
                        d = i.gdprApplies,
                        a = i.consentString,
                        s = (0, u.default)(t, (function(e) {
                            return f.isArray(e.body)
                        }));
                    return s ? e.iframeEnabled && s.body.filter((function(e) {
                        return e.sync
                    })).forEach((function(e) {
                        o.push({
                            type: "iframe",
                            url: e.sync
                        })
                    })) : e.iframeEnabled ? o.push({
                        type: "iframe",
                        url: "//sync.bfmio.com/sync_iframe?ifg=1&id=" + y + "&gdpr=" + (d ? 1 : 0) + "&gc=" + (a || "") + "&gce=1"
                    }) : e.pixelEnabled && o.push({
                        type: "image",
                        url: "//sync.bfmio.com/syncb?pid=144&id=" + y + "&gdpr=" + (d ? 1 : 0) + "&gc=" + (a || "") + "&gce=1"
                    }), o
                }
            };

        function I(e) {
            e.renderer.push((function() {
                window.Beachfront.Player(e.adUnitCode, {
                    ad_tag_url: e.vastUrl,
                    width: e.width,
                    height: e.height,
                    expand_in_view: !1,
                    collapse_on_complete: !0
                })
            }))
        }

        function T(e) {
            return e && e.length ? e[0] : {
                w: void 0,
                h: void 0
            }
        }

        function N(e) {
            return f.parseSizesInput(e).map((function(e) {
                var r = e.split("x"),
                    n = o(r, 2),
                    t = n[0],
                    i = n[1];
                return {
                    w: parseInt(t, 10) || void 0,
                    h: parseInt(i, 10) || void 0
                }
            }))
        }

        function A(e) {
            return N(f.deepAccess(e, "mediaTypes.video.playerSize") || e.sizes)
        }

        function O() {
            return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)
        }

        function S() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack
        }

        function E(e) {
            return f.deepAccess(e, "mediaTypes.video")
        }

        function _(e, r) {
            return f.deepAccess(e, "params.video." + r) || f.deepAccess(e, "params." + r)
        }

        function P(e, r) {
            return f.deepAccess(e, "params.banner." + r) || f.deepAccess(e, "params." + r)
        }

        function R(e) {
            return E(e) && _(e, "appId") && _(e, "bidfloor")
        }

        function W(e) {
            return (function(e) {
                return f.deepAccess(e, "mediaTypes.banner") || !E(e)
            })(e) && P(e, "appId") && P(e, "bidfloor")
        }

        function M(e) {
            var r = e && e.refererInfo && e.refererInfo.referer;
            return (0, t.parse)(i.config.getConfig("pageUrl") || r, {
                decodeSearchAsString: !0
            })
        }(0, d.registerBidder)(w)
    },
    167: function(e, r) {}
}, [165]);
instBidChunk([143], {
    183: function(t, e, r) {
        r(184), t.exports = r(185)
    },
    184: function(t, e, r) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spec = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            },
            u = n(r(0)),
            d = n(r(11)),
            i = r(1),
            a = r(2),
            h = r(3);

        function n(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e.default = t, e
        }
        var s = "brightcom",
            p = e.spec = {
                code: s,
                supportedMediaTypes: [a.BANNER],
                isBidRequestValid: function(t) {
                    return t.bidder === s && void 0 !== t.params && void 0 !== t.params.publisherId
                },
                buildRequests: function(e, r) {
                    try {
                        var t = "";
                        r && r.refererInfo && (t = r.refererInfo.referer);
                        var s = [],
                            i = u.getBidIdParameter("publisherId", e[0].params);
                        u._each(e, (function(t) {
                            t.sizes = u.isArray(t.sizes) && u.isArray(t.sizes[0]) ? t.sizes : [t.sizes], t.sizes = t.sizes.filter((function(t) {
                                return u.isArray(t)
                            }));
                            var e = t.sizes.map((function(t) {
                                    return {
                                        w: parseInt(t[0], 10),
                                        h: parseInt(t[1], 10)
                                    }
                                })),
                                r = document.getElementById(t.adUnitCode),
                                i = (function(t) {
                                    return t.reduce((function(t, e) {
                                        return e.h * e.w < t.h * t.w ? e : t
                                    }))
                                })(e),
                                n = (function(t) {
                                    return !(function() {
                                        try {
                                            return u.getWindowSelf() !== u.getWindowTop()
                                        } catch (t) {
                                            return !0
                                        }
                                    })() && null !== t
                                })(r) ? (function(t, e) {
                                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                        i = r.w,
                                        n = r.h;
                                    return "visible" === u.getWindowTop().document.visibilityState ? (function(t, e) {
                                        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                            i = r.w,
                                            n = r.h,
                                            o = (function(t) {
                                                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                                    r = e.w,
                                                    i = e.h,
                                                    n = t.getBoundingClientRect(),
                                                    o = n.width,
                                                    d = n.height,
                                                    a = n.left,
                                                    s = n.top,
                                                    u = n.right,
                                                    h = n.bottom;
                                                (0 === o || 0 === d) && r && i && (u = a + (o = r), h = s + (d = i));
                                                return {
                                                    width: o,
                                                    height: d,
                                                    left: a,
                                                    top: s,
                                                    right: u,
                                                    bottom: h
                                                }
                                            })(t, {
                                                w: i,
                                                h: n
                                            }),
                                            d = (function(t) {
                                                for (var e = {
                                                        left: t[0].left,
                                                        right: t[0].right,
                                                        top: t[0].top,
                                                        bottom: t[0].bottom
                                                    }, r = 1; r < t.length; ++r) {
                                                    if (e.left = Math.max(e.left, t[r].left), e.right = Math.min(e.right, t[r].right), e.left >= e.right) return null;
                                                    if (e.top = Math.max(e.top, t[r].top), e.bottom = Math.min(e.bottom, t[r].bottom), e.top >= e.bottom) return null
                                                }
                                                return e.width = e.right - e.left, e.height = e.bottom - e.top, e
                                            })([{
                                                left: 0,
                                                top: 0,
                                                right: e.innerWidth,
                                                bottom: e.innerHeight
                                            }, o]),
                                            a = void 0,
                                            s = void 0;
                                        return null === d ? 0 : (a = d.width * d.height, s = o.width * o.height, a / s * 100)
                                    })(t, e, {
                                        w: i,
                                        h: n
                                    }) : 0
                                })(r, u.getWindowTop(), i) : "na",
                                o = isNaN(n) ? n : Math.round(n),
                                d = {
                                    id: t.bidId,
                                    banner: {
                                        format: e,
                                        ext: {
                                            viewability: o
                                        }
                                    },
                                    tagid: String(t.adUnitCode)
                                },
                                a = u.getBidIdParameter("bidFloor", t.params);
                            a && (d.bidfloor = a), s.push(d)
                        }));
                        var n = {
                            id: u.getUniqueIdentifierStr(),
                            imp: s,
                            site: {
                                domain: d.parse(t).host,
                                page: t,
                                publisher: {
                                    id: i
                                }
                            },
                            device: {
                                devicetype: /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent) ? 1 : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent) ? 3 : 2,
                                w: screen.width,
                                h: screen.height
                            },
                            tmax: h.config.getConfig("bidderTimeout")
                        };
                        return {
                            method: "POST",
                            url: "https://brightcombid.marphezis.com/hb",
                            data: JSON.stringify(n),
                            options: {
                                contentType: "text/plain",
                                withCredentials: !1
                            }
                        }
                    } catch (t) {
                        u.logError(t, {
                            bidReqs: e,
                            bidderRequest: r
                        })
                    }
                },
                interpretResponse: function(t) {
                    if (!t.body || "object" != o(t.body)) return u.logWarn("Brightcom server returned empty/non-json response: " + JSON.stringify(t.body)), [];
                    var e = t.body,
                        r = e.id,
                        i = e.seatbid;
                    try {
                        var n = [];
                        return r && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map((function(t) {
                            n.push({
                                requestId: t.impid,
                                cpm: parseFloat(t.price),
                                width: parseInt(t.w),
                                height: parseInt(t.h),
                                creativeId: t.crid || t.id,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: a.BANNER,
                                ad: (function(t) {
                                    var e = t.adm;
                                    "nurl" in t && (e += u.createTrackPixelHtml(t.nurl));
                                    return e
                                })(t),
                                ttl: 60
                            })
                        })), n
                    } catch (t) {
                        u.logError(t, {
                            id: r,
                            seatbid: i
                        })
                    }
                },
                getUserSyncs: function(t, e, r) {
                    return []
                }
            };
        (0, i.registerBidder)(p)
    },
    185: function(t, e) {}
}, [183]);
instBidChunk([135], {
    214: function(e, r, i) {
        i(215), e.exports = i(216)
    },
    215: function(e, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var m = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
                    return r.default = e, r
                }
            })(i(0)),
            a = i(1),
            t = i(2);
        var n = "conversant",
            s = r.spec = {
                code: n,
                aliases: ["cnvr"],
                supportedMediaTypes: [t.BANNER, t.VIDEO],
                isBidRequestValid: function(e) {
                    if (!e || !e.params) return m.logWarn(n + ": Missing bid parameters"), !1;
                    if (!m.isStr(e.params.site_id)) return m.logWarn(n + ": site_id must be specified as a string"), !1;
                    if (c(e))
                        if (e.params.mimes) {
                            if (!m.isArray(e.params.mimes) || !e.params.mimes.every((function(e) {
                                    return m.isStr(e)
                                }))) return m.logWarn(n + ": mimes must be an array of strings"), !1
                        } else m.logWarn(n + ": mimes should be specified for videos");
                    return !0
                },
                buildRequests: function(e, r) {
                    var i = m.getTopWindowLocation(),
                        a = i.href,
                        o = "https:" === i.protocol ? 1 : 0,
                        d = "",
                        u = "",
                        p = null,
                        t = e.map((function(e) {
                            var r = m.getBidIdParameter("bidfloor", e.params),
                                i = o || (m.getBidIdParameter("secure", e.params) ? 1 : 0);
                            d = m.getBidIdParameter("site_id", e.params), u = e.auctionId;
                            var a = (function(e) {
                                    var r = void 0;
                                    r = 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1] ? [{
                                        w: e[0],
                                        h: e[1]
                                    }] : m._map(e, (function(e) {
                                        return {
                                            w: e[0],
                                            h: e[1]
                                        }
                                    }));
                                    return r
                                })(e.sizes),
                                t = {
                                    id: e.bidId,
                                    secure: i,
                                    bidfloor: r || 0,
                                    displaymanager: "Prebid.js",
                                    displaymanagerver: "2.2.3"
                                };
                            if (g(e.params, "tag_id", t, "tagid"), c(e)) {
                                var n = {
                                    w: a[0].w,
                                    h: a[0].h
                                };
                                g(e.params, "position", n, "pos"), g(e.params, "mimes", n), g(e.params, "maxduration", n), g(e.params, "protocols", n), g(e.params, "api", n), t.video = n
                            } else {
                                var s = {
                                    format: a
                                };
                                g(e.params, "position", s, "pos"), t.banner = s
                            }
                            return e.crumbs && e.crumbs.pubcid && (p = e.crumbs.pubcid), t
                        })),
                        n = {
                            id: u,
                            imp: t,
                            site: {
                                id: d,
                                mobile: null !== document.querySelector('meta[name="viewport"][content*="width=device-width"]') ? 1 : 0,
                                page: a
                            },
                            device: (function() {
                                var e = navigator.language ? "language" : "userLanguage";
                                return {
                                    h: screen.height,
                                    w: screen.width,
                                    dnt: "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNoTrack || "yes" === navigator.doNotTrack ? 1 : 0,
                                    language: navigator[e].split("-")[0],
                                    make: navigator.vendor ? navigator.vendor : "",
                                    ua: navigator.userAgent
                                }
                            })(),
                            at: 1
                        },
                        s = {};
                    return r && r.gdprConsent && (s.consent = r.gdprConsent.consentString, "boolean" == typeof r.gdprConsent.gdprApplies && (n.regs = {
                        ext: {
                            gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                        }
                    })), p && (s.fpc = p), m.isEmpty(s) || (n.user = {
                        ext: s
                    }), {
                        method: "POST",
                        url: "//web.hb.ad.cpe.dotomi.com/s2s/header/24",
                        data: n
                    }
                },
                interpretResponse: function(s, e) {
                    var o = [],
                        d = {};
                    return s = s.body, e && e.data && e.data.imp && m._each(e.data.imp, (function(e) {
                        return d[e.id] = e
                    })), s && m.isArray(s.seatbid) && m._each(s.seatbid, (function(e) {
                        m._each(e.bid, (function(e) {
                            var r = parseFloat(e.price);
                            if (0 < r && e.impid) {
                                var i = e.adm || "",
                                    a = e.nurl || "",
                                    t = d[e.impid],
                                    n = {
                                        requestId: e.impid,
                                        currency: s.cur || "USD",
                                        cpm: r,
                                        creativeId: e.crid || "",
                                        ttl: 300,
                                        netRevenue: !0
                                    };
                                t.video ? (n.vastUrl = i, n.mediaType = "video", n.width = t.video.w, n.height = t.video.h) : (n.ad = i + '<img src="' + a + '" />', n.width = e.w, n.height = e.h), o.push(n)
                            }
                        }))
                    })), o
                },
                transformBidParams: function(e, r) {
                    return m.convertTypes({
                        site_id: "string",
                        secure: "number",
                        mobile: "number"
                    }, e)
                }
            };

        function c(e) {
            return "video" === e.mediaType || !!m.deepAccess(e, "mediaTypes.video")
        }

        function g(e, r, i, a) {
            a = a || r;
            var t = m.getBidIdParameter(r, e);
            "" !== t && (i[a] = t)
        }(0, a.registerBidder)(s)
    },
    216: function(e, r) {}
}, [214]);
instBidChunk([187], {
    235: function(e, r, t) {
        e.exports = t(236)
    },
    236: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var i = function(e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, r) {
                var t = [],
                    i = !0,
                    n = !1,
                    d = void 0;
                try {
                    for (var u, s = e[Symbol.iterator](); !(i = (u = s.next()).done) && (t.push(u.value), !r || t.length !== r); i = !0);
                } catch (e) {
                    n = !0, d = e
                } finally {
                    try {
                        !i && s.return && s.return()
                    } finally {
                        if (n) throw d
                    }
                }
                return t
            })(e, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        r.matchRequest = o, r.checkDeepArray = a, r.defaultSize = c;
        var u = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            n = t(1),
            d = t(3);
        var s = r.spec = {
            code: "districtmDMX",
            supportedFormat: ["banner"],
            isBidRequestValid: function(e) {
                return !(!e.params.dmxid || !e.params.memberid)
            },
            interpretResponse: function(e, d) {
                return (e = e.body || {}).seatbid && u.isArray(e.seatbid) ? e.seatbid.reduce((function(e, r) {
                    var t = r.bid.reduce((function(e, r) {
                        if (e.price < r.price) {
                            var t = c(o(r.impid, d)),
                                i = t.width,
                                n = t.height;
                            return r.cpm = r.price, r.bidId = r.impid, r.requestId = r.impid, r.width = r.w || i, r.height = r.h || n, r.ad = r.adm, r.netRevenue = !0, r.creativeId = r.crid, r.currency = "USD", r.ttl = 60, r
                        }
                        return e.cpm = e.price, e
                    }), {
                        price: 0
                    });
                    return t.adm && e.push(t), e
                }), []).filter((function(e) {
                    return !!e.bidId
                })) : []
            },
            buildRequests: function(e, r) {
                var t = d.config.getConfig("bidderTimeout"),
                    i = {
                        id: u.generateUUID(),
                        cur: ["USD"],
                        tmax: t - 300,
                        test: this.test() || 0,
                        site: {
                            publisher: {
                                id: String(e[0].params.memberid) || null
                            }
                        }
                    };
                i.test || delete i.test, r.gdprConsent && (i.regs = {}, i.regs.ext = {}, i.regs.ext.gdpr = !0 === r.gdprConsent.gdprApplies ? 1 : 0, i.user = {}, i.user.ext = {}, i.user.ext.consent = r.gdprConsent.consentString);
                var n = e.map((function(e) {
                    var r = {};
                    return r.id = e.bidId, r.tagid = String(e.params.dmxid), r.secure = "https:" === window.location.protocol ? 1 : 0, r.banner = {
                        topframe: 1,
                        w: e.sizes[0][0] || 0,
                        h: e.sizes[0][1] || 0,
                        format: e.sizes.map((function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        })).filter((function(e) {
                            return "number" == typeof e.w && "number" == typeof e.h
                        }))
                    }, r
                }));
                return i.imp = n, {
                    method: "POST",
                    url: "https://dmx.districtm.io/b/v1",
                    data: JSON.stringify(i),
                    options: {
                        contentType: "application/json",
                        withCredentials: !0
                    },
                    bidderRequest: r
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

        function o(r, e) {
            var t = e.bidderRequest.bids.filter((function(e) {
                return e.bidId === r
            }));
            return i(t, 1)[0]
        }

        function a(e) {
            return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e
        }

        function c(e) {
            var r = e.sizes,
                t = {};
            return t.width = a(r)[0], t.height = a(r)[1], t
        }(0, n.registerBidder)(s)
    }
}, [235]);
instBidChunk([128], {
    248: function(e, t, i) {
        i(249), e.exports = i(250)
    },
    249: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spec = void 0;
        var g = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t.default = e, t
                }
            })(i(0)),
            r = i(1),
            n = i(2),
            f = i(3);
        var d = t.spec = {
            code: "emx_digital",
            supportedMediaTypes: [n.BANNER],
            isBidRequestValid: function(e) {
                return !!e.params.tagid && "string" == typeof e.params.tagid && (void 0 === e.params.bidfloor || "string" == typeof e.params.bidfloor)
            },
            buildRequests: function(e, t) {
                var i = g.getTopWindowLocation(),
                    r = i.host,
                    n = i.href,
                    d = i.protocol,
                    o = {},
                    a = [],
                    s = t.auctionId,
                    p = f.config.getConfig("bidderTimeout"),
                    u = Date.now(),
                    c = location.protocol + "//hb.emxdgt.com?t=" + p + "&ts=" + u,
                    l = -1 < d.indexOf("https") ? 1 : 0;
                return g._each(e, (function(e) {
                    var t = String(g.getBidIdParameter("tagid", e.params)),
                        i = parseFloat(g.getBidIdParameter("bidfloor", e.params)) || 0,
                        r = {
                            id: e.bidId,
                            tid: e.transactionId,
                            tagid: t,
                            secure: l,
                            banner: {
                                format: e.sizes.map((function(e) {
                                    return {
                                        w: e[0],
                                        h: e[1]
                                    }
                                })),
                                w: e.sizes[0][0],
                                h: e.sizes[0][1]
                            }
                        };
                    0 < i && (r.bidfloor = i), a.push(r)
                })), o = {
                    id: s,
                    imp: a,
                    site: {
                        domain: r,
                        page: n
                    }
                }, t.gdprConsent && (o.regs = {
                    ext: {
                        gdpr: !0 === t.gdprConsent.gdprApplies ? 1 : 0
                    }
                }), t.gdprConsent && t.gdprConsent.gdprApplies && (o.user = {
                    ext: {
                        consent: t.gdprConsent.consentString
                    }
                }), {
                    method: "POST",
                    url: c,
                    data: JSON.stringify(o),
                    options: {
                        withCredentials: !0
                    }
                }
            },
            interpretResponse: function(e) {
                var t = [],
                    i = e.body || {};
                return i.seatbid && 0 < i.seatbid.length && i.seatbid[0].bid && i.seatbid.forEach((function(e) {
                    e = e.bid[0], t.push({
                        requestId: e.id,
                        cpm: e.price,
                        width: e.w,
                        height: e.h,
                        creativeId: e.crid || e.id,
                        dealId: e.dealid || null,
                        currency: "USD",
                        netRevenue: !0,
                        mediaType: n.BANNER,
                        ad: decodeURIComponent(e.adm),
                        ttl: e.ttl
                    })
                })), t
            },
            getUserSyncs: function(e) {
                var t = [];
                return e.iframeEnabled && t.push({
                    type: "iframe",
                    url: "//biddr.brealtime.com/check.html"
                }), e.pixelEnabled && t.push({
                    type: "image",
                    url: "//edba.brealtime.com/"
                }), t
            }
        };
        (0, r.registerBidder)(d)
    },
    250: function(e, t) {}
}, [248]);
instBidChunk([127], {
    254: function(n, t, e) {
        e(255), n.exports = e(256)
    },
    255: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spec = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                return typeof n
            } : function(n) {
                return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            },
            u = (function(n) {
                {
                    if (n && n.__esModule) return n;
                    var t = {};
                    if (null != n)
                        for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                    return t.default = n, t
                }
            })(e(0)),
            r = e(1);
        var c = Math.random(),
            s = "i.e-planning.net",
            f = ["ci", "sv", "t"],
            p = "file",
            i = t.spec = {
                code: "eplanning",
                isBidRequestValid: function(n) {
                    return Boolean(n.params.ci) || Boolean(n.params.t)
                },
                buildRequests: function(n) {
                    var t = void 0,
                        e = void 0,
                        r = (function(n) {
                            if (function(n) {
                                    var t = !1;
                                    return n.forEach((function(n) {
                                        return t = n.params.t
                                    })), t
                                }(n)) return (function(n) {
                                var t = void 0;
                                return n.forEach((function(n) {
                                    return t = t || n.params.isv
                                })), {
                                    t: !0,
                                    isv: "//" + (t || s)
                                }
                            })(n.filter((function(n) {
                                return n.params.t
                            })));
                            var e = {};
                            n.forEach((function(t) {
                                f.forEach((function(n) {
                                    t.params[n] && !e[n] && (e[n] = t.params[n])
                                }))
                            })), e.sv && (e.sv = "//" + e.sv);
                            return e
                        })(n),
                        o = (function() {
                            try {
                                return window.top.document.charset || window.top.document.characterSet
                            } catch (n) {
                                return document.charset || document.characterSet
                            }
                        })();
                    if (r.t) t = r.isv + "/layers/t_pbjs_2.json", e = {};
                    else {
                        t = "//" + (r.sv || "ads.us.e-planning.net") + "/hb/1/" + r.ci + "/1/" + (u.getTopWindowLocation().hostname || p) + "/ROS";
                        var i = u.getTopWindowReferrer(),
                            a = (function(n) {
                                return n.map((function(n) {
                                    return d(n.adUnitCode) + ":" + (n.sizes && n.sizes.length ? u.parseSizesInput(n.sizes).join(",") : "1x1")
                                })).join("+")
                            })(n);
                        e = {
                            rnd: c,
                            e: a,
                            ur: u.getTopWindowUrl() || p,
                            r: "pbjs",
                            pbv: "1.34.0",
                            ncb: "1"
                        }, o && (e.crs = o), i && (e.fr = i)
                    }
                    return {
                        method: "GET",
                        url: t,
                        data: e,
                        adUnitToBidId: (function(n) {
                            var t = {};
                            return n.forEach((function(n) {
                                return t[d(n.adUnitCode)] = n.bidId
                            })), t
                        })(n)
                    }
                },
                interpretResponse: function(n, r) {
                    var t = n.body,
                        o = [];
                    return t && !u.isEmpty(t.sp) && t.sp.forEach((function(e) {
                        u.isEmpty(e.a) || e.a.forEach((function(n) {
                            var t = {
                                requestId: r.adUnitToBidId[e.k],
                                cpm: n.pr,
                                width: n.w,
                                height: n.h,
                                ad: n.adm,
                                ttl: 120,
                                creativeId: n.crid,
                                netRevenue: !0,
                                currency: "USD"
                            };
                            o.push(t)
                        }))
                    })), o
                },
                getUserSyncs: function(t, n) {
                    var e = [],
                        r = !u.isEmpty(n) && n[0].body;
                    r && !u.isEmpty(r.cs) && r.cs.forEach((function(n) {
                        "string" == typeof n && t.pixelEnabled ? e.push({
                            type: "image",
                            url: n
                        }) : "object" === (void 0 === n ? "undefined" : o(n)) && n.ifr && t.iframeEnabled && e.push({
                            type: "iframe",
                            url: n.u
                        })
                    }));
                    return e
                }
            };

        function d(n) {
            return n.replace(/_|\.|-|\//g, "").replace(/\)\(|\(|\)/g, "_").replace(/^_+|_+$/g, "")
        }(0, r.registerBidder)(i)
    },
    256: function(n, t) {}
}, [254]);
instBidChunk([115], {
    294: function(e, r, t) {
        t(295), e.exports = t(296)
    },
    295: function(e, n, o) {
        "use strict";
        (function(c) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.spec = void 0;
            var e, b = function(e, r) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return (function(e, r) {
                        var t = [],
                            i = !0,
                            n = !1,
                            o = void 0;
                        try {
                            for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                        } catch (e) {
                            n = !0, o = e
                        } finally {
                            try {
                                !i && u.return && u.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                        return t
                    })(e, r);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                },
                w = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                },
                S = (function(e) {
                    {
                        if (e && e.__esModule) return e;
                        var r = {};
                        if (null != e)
                            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                        return r.default = e, r
                    }
                })(o(0)),
                d = o(3),
                r = o(1),
                t = o(7),
                I = (e = t) && e.__esModule ? e : {
                    default: e
                };
            var p = {
                    member: "YcXr87z2lpbB"
                },
                l = {},
                A = null;
            var i = n.spec = {
                code: "gumgum",
                aliases: ["gg"],
                isBidRequestValid: function(e) {
                    var r = e.params,
                        t = e.adUnitCode;
                    switch (!0) {
                        case !!r.inScreen:
                        case !!r.inSlot:
                        case !!r.ICV:
                            break;
                        default:
                            return S.logWarn("[GumGum] No product selected for the placement " + t + ", please check your implementation."), !1
                    }
                    return !0
                },
                buildRequests: function(e, r) {
                    var u = [],
                        s = w({
                            consentString: null,
                            gdprApplies: !0
                        }, r && r.gdprConsent);
                    return S._each(e, (function(e) {
                        var r = d.config.getConfig("bidderTimeout"),
                            t = e.bidId,
                            i = e.params,
                            n = void 0 === i ? {} : i,
                            o = e.transactionId,
                            a = {};
                        A && (a.pv = A), n.inScreen && (a.t = n.inScreen, a.pi = 2), n.inSlot && (a.si = parseInt(n.inSlot, 10), a.pi = 3), n.ICV && (a.ni = parseInt(n.ICV, 10), a.pi = 5), a.gdprApplies = s.gdprApplies, s.gdprApplies && (a.gdprConsent = s.consentString), u.push({
                            id: t,
                            tmax: r,
                            tId: o,
                            pi: a.pi,
                            selector: n.selector,
                            sizes: e.sizes,
                            url: "https://g2.gumgum.com/hbid/imp",
                            method: "GET",
                            data: w(a, (function() {
                                var e, r = void 0,
                                    t = void 0,
                                    i = void 0;
                                if (l.vw) return l;
                                try {
                                    t = (r = c.top).screen, i = S.getTopWindowUrl()
                                } catch (e) {
                                    return S.logError(e), l
                                }
                                return l = {
                                    vw: r.innerWidth,
                                    vh: r.innerHeight,
                                    sw: t.width,
                                    sh: t.height,
                                    pu: i,
                                    ce: S.cookiesAreEnabled(),
                                    dpr: r.devicePixelRatio || 1,
                                    jcsi: {
                                        t: 0,
                                        rq: 7
                                    }
                                }, (e = (i.match(/#ggad=(\w+)$/) || [0, 0])[1]) && (l[isNaN(e) ? "eAdBuyId" : "adBuyId"] = e), l
                            })(), (function() {
                                var e, r = (e = window.DigiTrust && window.DigiTrust.getUser ? window.DigiTrust.getUser(p) : {}) && e.success && e.identity || "";
                                return !r || r.privacy && r.privacy.optout ? {} : {
                                    dt: r.id
                                }
                            })())
                        })
                    })), u
                },
                interpretResponse: function(e, r) {
                    var t = [],
                        i = e.body,
                        n = w({
                            ad: {
                                price: 0,
                                id: 0,
                                markup: ""
                            },
                            pag: {
                                pvid: 0
                            }
                        }, i),
                        o = n.ad,
                        a = o.price,
                        u = o.id,
                        s = o.markup,
                        c = n.cw,
                        d = n.pag.pvid,
                        p = r.data || {},
                        l = p.pi,
                        f = 3 === l && 9 === p.si,
                        g = S.parseSizesInput(r.sizes),
                        v = g[0].split("x"),
                        h = b(v, 2),
                        m = h[0],
                        y = h[1];
                    return 2 !== l && 5 !== l || !(0, I.default)(g, "1x1") || (y = m = "1"), A = d, u && t.push({
                        ad: c ? (function(e, r) {
                            return e.replace("AD_JSON", window.btoa(JSON.stringify(r)))
                        })(c, w({}, i, {
                            bidRequest: r
                        })) : s,
                        cpm: f ? .1 : a,
                        creativeId: u,
                        currency: "USD",
                        height: y,
                        netRevenue: !0,
                        requestId: r.id,
                        ttl: 60,
                        width: m
                    }), t
                },
                getUserSyncs: function(e, r) {
                    return r.map((function(e) {
                        return e.body && e.body.pxs && e.body.pxs.scr || []
                    })).reduce((function(e, r) {
                        return e.concat(r)
                    }), []).map((function(e) {
                        return {
                            type: "f" === e.t ? "iframe" : "image",
                            url: e.u
                        }
                    }))
                }
            };
            (0, r.registerBidder)(i)
        }).call(n, o(30))
    },
    296: function(e, r) {}
}, [294]);
instBidChunk([111], {
    306: function(e, r, t) {
        t(307), e.exports = t(308)
    },
    307: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var S = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            i = t(1),
            o = t(3);
        var n = r.spec = {
            version: "4.4.0",
            code: "improvedigital",
            aliases: ["id"],
            isBidRequestValid: function(e) {
                return !!(e && e.params && (e.params.placementId || e.params.placementKey && e.params.publisherId))
            },
            buildRequests: function(e, r) {
                var t = e.map((function(e) {
                        return (function(e) {
                            var r = S.getBidIdParameter("adUnitCode", e) || null,
                                t = S.getBidIdParameter("placementId", e.params) || null,
                                i = null,
                                n = null;
                            null === t && (i = S.getBidIdParameter("publisherId", e.params) || null, n = S.getBidIdParameter("placementKey", e.params) || null);
                            var s = S.getBidIdParameter("keyValues", e.params) || null,
                                a = S.getBidIdParameter("size", e.params) || null,
                                d = S.getBidIdParameter("bidId", e),
                                u = S.getBidIdParameter("transactionId", e),
                                p = o.config.getConfig("currency.adServerCurrency"),
                                c = {};
                            t ? c.placementId = t : (i && (c.publisherId = i), n && (c.placementKey = n));
                            s && (c.keyValues = s);
                            a && a.w && a.h && (c.size = {}, c.size.h = a.h, c.size.w = a.w);
                            d && (c.id = d);
                            r && (c.adUnitId = r);
                            u && (c.transactionId = u);
                            p && (c.currency = p);
                            return c
                        })(e)
                    })),
                    i = new a("hb"),
                    n = {
                        singleRequestMode: !1,
                        returnObjType: i.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT,
                        libVersion: this.version
                    };
                r && r.gdprConsent && r.gdprConsent.consentString && (n.gdpr = r.gdprConsent.consentString);
                var s = i.createRequest(t, n);
                return s.errors && 0 < s.errors.length && S.logError("ID WARNING 0x01"), s.requests
            },
            interpretResponse: function(e, r) {
                var s = [];
                return S._each(e.body.bid, (function(t) {
                    if (t.price && null !== t.price && !t.hasOwnProperty("errorCode") && "string" == typeof t.adm) {
                        var i = {},
                            e = "";
                        if (t.nurl && 0 < t.nurl.length && (e = '<img src="' + t.nurl + '" width="0" height="0" style="display:none">'), i.ad = e + "<script>" + t.adm + "<\/script>", i.adId = t.id, i.cpm = parseFloat(t.price), i.creativeId = t.crid, i.currency = t.currency ? t.currency.toUpperCase() : "USD", S.isNumber(t.lid) && "deal_id" === t.buying_type) i.dealId = t.lid;
                        else if (Array.isArray(t.lid) && Array.isArray(t.buying_type) && t.lid.length === t.buying_type.length) {
                            var n = !1;
                            t.buying_type.forEach((function(e, r) {
                                n || "deal_id" === e && (n = !0, i.dealId = t.lid[r])
                            }))
                        }
                        i.height = t.h, i.netRevenue = !!t.isNet && t.isNet, i.requestId = t.id, i.ttl = 300, i.width = t.w, s.push(i)
                    }
                })), s
            },
            getUserSyncs: function(e, r) {
                if (e.pixelEnabled) {
                    var t = [];
                    return r.forEach((function(e) {
                        e.body.bid.forEach((function(e) {
                            S.isArray(e.sync) && e.sync.forEach((function(e) {
                                -1 === t.indexOf(e) && t.push(e)
                            }))
                        }))
                    })), t.map((function(e) {
                        return {
                            type: "image",
                            url: e
                        }
                    }))
                }
                return []
            }
        };

        function a(e) {
            this.CONSTANTS = {
                HTTP_SECURITY: {
                    STANDARD: 0,
                    SECURE: 1
                },
                AD_SERVER_BASE_URL: "ad.360yield.com",
                END_POINT: e || "hb",
                AD_SERVER_URL_PARAM: "jsonp=",
                CLIENT_VERSION: "JS-5.1",
                MAX_URL_LENGTH: 2083,
                ERROR_CODES: {
                    MISSING_PLACEMENT_PARAMS: 2,
                    LIB_VERSION_MISSING: 3
                },
                RETURN_OBJ_TYPE: {
                    DEFAULT: 0,
                    URL_PARAMS_SPLIT: 1
                }
            }, this.getErrorReturn = function(e) {
                return {
                    idMappings: {},
                    requests: {},
                    errorCode: e
                }
            }, this.createRequest = function(e, r, t) {
                if (!r.libVersion) return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING);
                r.returnObjType = r.returnObjType || this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT;
                var i = [],
                    n = void 0;
                if (S.isArray(e))
                    for (var s = 0; s < e.length; s++) n = this.createImpressionObject(e[s]), i.push(n);
                else n = this.createImpressionObject(e), i.push(n);
                var a = !0;
                r.returnObjType === this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT && (a = !1);
                var d = {
                    requests: []
                };
                a && (d.idMappings = []);
                for (var u = null, p = (1 === r.secure ? "https" : "http") + "://" + this.CONSTANTS.AD_SERVER_BASE_URL + "/" + this.CONSTANTS.END_POINT + "?" + this.CONSTANTS.AD_SERVER_URL_PARAM, c = {
                        bid_request: this.createBasicBidRequestObject(r, t)
                    }, o = 0; o < i.length; o++)
                    if ((n = i[o]).errorCode)(u = u || []).push({
                        errorCode: n.errorCode,
                        adUnitId: n.adUnitId
                    });
                    else {
                        a && d.idMappings.push({
                            adUnitId: n.adUnitId,
                            id: n.impressionObject.id
                        }), c.bid_request.imp = c.bid_request.imp || [], c.bid_request.imp.push(n.impressionObject);
                        var l = !1;
                        (p + encodeURIComponent(JSON.stringify(c))).length > this.CONSTANTS.MAX_URL_LENGTH && (l = !0, 1 < c.bid_request.imp.length && (c.bid_request.imp.pop(), a && d.idMappings.pop(), o--)), !l && r.singleRequestMode && o !== i.length - 1 || (d.requests.push(this.formatRequest(r, c)), c = {
                            bid_request: this.createBasicBidRequestObject(r, t)
                        })
                    }
                return u && (d.errors = u), d
            }, this.formatRequest = function(e, r) {
                switch (e.returnObjType) {
                    case this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT:
                        return {
                            method: "GET",
                            url: "//" + this.CONSTANTS.AD_SERVER_BASE_URL + "/" + this.CONSTANTS.END_POINT,
                            data: "" + this.CONSTANTS.AD_SERVER_URL_PARAM + JSON.stringify(r)
                        };
                    default:
                        return {
                            url: (1 === e.secure ? "https" : "http") + "://" + this.CONSTANTS.AD_SERVER_BASE_URL + "/" + this.CONSTANTS.END_POINT + "?" + this.CONSTANTS.AD_SERVER_URL_PARAM + encodeURIComponent(JSON.stringify(r))
                        }
                }
            }, this.createBasicBidRequestObject = function(e, r) {
                var t = {};
                if (e.requestId ? t.id = e.requestId : t.id = S.getUniqueIdentifierStr(), e.domain && (t.domain = e.domain), e.page && (t.page = e.page), e.ref && (t.ref = e.ref), e.callback && (t.callback = e.callback), "secure" in e && (t.secure = e.secure), e.libVersion && (t.version = e.libVersion + "-" + this.CONSTANTS.CLIENT_VERSION), e.referrer && (t.referrer = e.referrer), e.gdpr && (t.gdpr = e.gdpr), r)
                    for (var i in r) t[i] = r[i];
                return t
            }, this.createImpressionObject = function(e) {
                var r = {},
                    t = {};
                if (r.impressionObject = t, e.id ? t.id = e.id : t.id = S.getUniqueIdentifierStr(), e.adUnitId && (r.adUnitId = e.adUnitId), e.currency && (t.currency = e.currency.toUpperCase()), e.placementId && (t.pid = e.placementId), e.publisherId && (t.pubid = e.publisherId), e.placementKey && (t.pkey = e.placementKey), e.transactionId && (t.tid = e.transactionId), e.keyValues)
                    for (var i in e.keyValues)
                        for (var n = 0; n < e.keyValues[i].length; n++) t.kvw = t.kvw || {}, t.kvw[i] = t.kvw[i] || [], t.kvw[i].push(e.keyValues[i][n]);
                return e.size && e.size.w && e.size.h ? (t.banner = {}, t.banner.w = e.size.w, t.banner.h = e.size.h) : t.banner = {}, t.pid || t.pubid || t.pkey || t.banner && t.banner.w && t.banner.h || (r.impressionObject = null, r.errorCode = this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS), r
            }
        }(0, i.registerBidder)(n), r.ImproveDigitalAdServerJSClient = a
    },
    308: function(e, r) {}
}, [306]);
instBidChunk([0], {
    324: function(r, e, t) {
        t(325), r.exports = t(331)
    },
    325: function(r, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spec = void 0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(r) {
                return typeof r
            } : function(r) {
                return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
            },
            b = (function(r) {
                {
                    if (r && r.__esModule) return r;
                    var e = {};
                    if (null != r)
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                    return e.default = r, e
                }
            })(t(0)),
            n = t(2),
            h = t(3),
            i = s(t(326)),
            o = s(t(328)),
            a = t(1);

        function s(r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }
        var p = [n.BANNER],
            f = 100,
            c = 35,
            m = !0,
            d = !0;
        0 !== b.getTopWindowLocation().protocol.indexOf("https") && (d = !1);
        var g = d ? "https://as-sec.casalemedia.com/cygnus" : "http://as.casalemedia.com/cygnus",
            y = {
                JPY: 1
            };

        function u(r) {
            return (0, i.default)(r) && 2 === r.length && (0, o.default)(r[0]) && (0, o.default)(r[1])
        }
        var v = e.spec = {
            code: "ix",
            supportedMediaTypes: p,
            isBidRequestValid: function(r) {
                if (!u(r.params.size)) return !1;
                if (!(function(r, e) {
                        if (u(r)) return r[0] === e[0] && r[1] === e[1];
                        for (var t = 0; t < r.length; t++)
                            if (r[t][0] === e[0] && r[t][1] === e[1]) return !0;
                        return !1
                    })(r.sizes, r.params.size)) return !1;
                if (r.hasOwnProperty("mediaType") && "banner" !== r.mediaType) return !1;
                if (r.hasOwnProperty("mediaTypes") && !b.deepAccess(r, "mediaTypes.banner.sizes")) return !1;
                if ("string" != typeof r.params.siteId && "number" != typeof r.params.siteId) return !1;
                var e = r.params.hasOwnProperty("bidFloor"),
                    t = r.params.hasOwnProperty("bidFloorCur");
                return !e && !t || e && t && (function(r, e) {
                    return Boolean("number" == typeof r && "string" == typeof e && e.match(/^[A-Z]{3}$/))
                })(r.params.bidFloor, r.params.bidFloorCur)
            },
            buildRequests: function(r, e) {
                for (var t, n, i = [], o = null, a = null, s = 0; s < r.length; s++) o = r[s], n = void 0, (n = {}).id = (t = o).bidId, n.banner = {}, n.banner.w = t.params.size[0], n.banner.h = t.params.size[1], n.banner.topframe = b.inIframe() ? 0 : 1, n.ext = {}, n.ext.siteID = t.params.siteId, !t.params.hasOwnProperty("id") || "string" != typeof t.params.id && "number" != typeof t.params.id ? n.ext.sid = t.params.size[0] + "x" + t.params.size[1] : n.ext.sid = String(t.params.id), t.params.hasOwnProperty("bidFloor") && t.params.hasOwnProperty("bidFloorCur") && (n.bidfloor = t.params.bidFloor, n.bidfloorcur = t.params.bidFloorCur), a = n, i.push(a);
                var p = {};
                if (p.id = r[0].bidderRequestId, p.imp = i, p.site = {}, p.site.page = b.getTopWindowUrl(), p.site.ref = b.getTopWindowReferrer(), p.ext = {}, p.ext.source = "prebid", e && e.gdprConsent) {
                    var d = e.gdprConsent;
                    d.hasOwnProperty("gdprApplies") && (p.regs = {
                        ext: {
                            gdpr: d.gdprApplies ? 1 : 0
                        }
                    }), d.hasOwnProperty("consentString") && (p.user = {
                        ext: {
                            consent: d.consentString || ""
                        }
                    })
                }
                var u = {},
                    f = h.config.getConfig("ix");
                if (f) {
                    if ("object" === l(f.firstPartyData)) {
                        var c = f.firstPartyData,
                            m = "?";
                        for (var y in c) c.hasOwnProperty(y) && (m += encodeURIComponent(y) + "=" + encodeURIComponent(c[y]) + "&");
                        m = m.slice(0, -1), p.site.page += m
                    }
                    "number" == typeof f.timeout && (u.t = f.timeout)
                }
                return u.s = r[0].params.siteId, u.v = 7.2, u.r = JSON.stringify(p), u.ac = "j", u.sd = 1, {
                    method: "GET",
                    url: g,
                    data: u
                }
            },
            interpretResponse: function(r) {
                var e = [],
                    t = null;
                if (!r.hasOwnProperty("body") || !r.body.hasOwnProperty("seatbid")) return e;
                for (var n, i, o, a = r.body, s = a.seatbid, p = 0; p < s.length; p++)
                    if (s[p].hasOwnProperty("bid"))
                        for (var d = s[p].bid, u = 0; u < d.length; u++) n = d[u], i = a.cur, o = void 0, o = {}, y.hasOwnProperty(i) ? o.cpm = n.price / y[i] : o.cpm = n.price / f, o.requestId = n.impid, o.width = n.w, o.height = n.h, o.ad = n.adm, o.dealId = b.deepAccess(n, "ext.dealid"), o.ttl = c, o.netRevenue = m, o.currency = i, o.creativeId = n.hasOwnProperty("crid") ? n.crid : "-", t = o, e.push(t);
                return e
            },
            transformBidParams: function(r, e) {
                return b.convertTypes({
                    siteID: "number"
                }, r)
            }
        };
        (0, a.registerBidder)(v)
    },
    326: function(r, e, t) {
        t(327), r.exports = t(13).Array.isArray
    },
    327: function(r, e, t) {
        var n = t(14);
        n(n.S, "Array", {
            isArray: t(38)
        })
    },
    328: function(r, e, t) {
        t(329), r.exports = t(13).Number.isInteger
    },
    329: function(r, e, t) {
        var n = t(14);
        n(n.S, "Number", {
            isInteger: t(330)
        })
    },
    330: function(r, e, t) {
        var n = t(15),
            i = Math.floor;
        r.exports = function(r) {
            return !n(r) && isFinite(r) && i(r) === r
        }
    },
    331: function(r, e) {}
}, [324]);
instBidChunk([95], {
    360: function(e, t, r) {
        r(361), e.exports = r(362)
    },
    361: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spec = void 0;
        var n = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }
            })(r(0)),
            d = r(2),
            i = r(1);
        var o = t.spec = {
            code: "lockerdome",
            supportedMediaTypes: [d.BANNER],
            isBidRequestValid: function(e) {
                return !!e.params.adUnitId
            },
            buildRequests: function(e, t) {
                var r = {
                    bidRequests: e.map((function(e) {
                        return {
                            requestId: e.bidId,
                            adUnitCode: e.adUnitCode,
                            adUnitId: n.getBidIdParameter("adUnitId", e.params),
                            sizes: e.sizes
                        }
                    })),
                    url: n.getTopWindowLocation().href,
                    referrer: n.getTopWindowReferrer()
                };
                return t && t.gdprConsent && (r.gdpr = {
                    applies: t.gdprConsent.gdprApplies,
                    consent: t.gdprConsent.consentString
                }), {
                    method: "POST",
                    url: "https://lockerdome.com/ladbid/prebid",
                    data: JSON.stringify(r)
                }
            },
            interpretResponse: function(e, t) {
                return e && e.body && e.body.bids ? e.body.bids.map((function(e) {
                    return {
                        requestId: e.requestId,
                        cpm: e.cpm,
                        width: e.width,
                        height: e.height,
                        creativeId: e.creativeId,
                        currency: e.currency,
                        netRevenue: e.netRevenue,
                        ad: e.ad,
                        ttl: e.ttl
                    }
                })) : []
            }
        };
        (0, i.registerBidder)(o)
    },
    362: function(e, t) {}
}, [360]);
instBidChunk([91], {
    371: function(t, e, n) {
        n(372), t.exports = n(373)
    },
    372: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spec = void 0;
        var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            i = n(1),
            o = u(n(0)),
            a = n(3),
            d = u(n(11));

        function u(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e.default = t, e
        }
        var c = "medianet",
            s = {
                NOT_DETERMINED: 0,
                ABOVE_THE_FOLD: 1,
                BELOW_THE_FOLD: 2
            },
            l = "client_timeout",
            p = "client_bid_won",
            f = {};

        function m(t) {
            var e = {
                domain: (t = t || {}).domain || o.getTopWindowLocation().host,
                page: t.page || o.getTopWindowUrl(),
                ref: t.ref || o.getTopWindowReferrer()
            };
            return r(e, (function() {
                if (f.pageMeta) return f.pageMeta;
                var t = g('link[rel="canonical"]', "href"),
                    e = g('meta[property="og:url"]', "content"),
                    n = g('meta[name="twitter:url"]', "content");
                return f.pageMeta = r({}, t && {
                    canonical_url: t
                }, e && {
                    og_url: e
                }, n && {
                    twitter_url: n
                }), f.pageMeta
            })())
        }

        function g(t, e) {
            var n = (function(t, e) {
                try {
                    var n = o.getWindowTop().document.querySelector(t);
                    if (null !== n && n[e]) return n[e]
                } catch (t) {}
            })(t, e);
            return n && (function(t) {
                var e = o.getWindowTop().document.createElement("a");
                return e.href = t, e.href
            })(n)
        }

        function y(t, e) {
            return t.filter((function(t) {
                return t.type === e
            }))
        }

        function b(t) {
            return {
                w: parseInt(t[0], 10),
                h: parseInt(t[1], 10)
            }
        }

        function h(t) {
            var e = {
                id: t.bidId,
                ext: {
                    dfp_id: t.adUnitCode,
                    display_count: t.bidRequestsCount
                },
                banner: (function(t) {
                    return o.isArray(t) && 2 === t.length && !o.isArray(t[0]) ? [b(t)] : t.map((function(t) {
                        return b(t)
                    }))
                })(t.sizes),
                all: t.params
            };
            t.params.crid && (e.tagid = t.params.crid.toString());
            var n = parseFloat(t.params.bidfloor);
            n && (e.bidfloor = n);
            var r = (function(t) {
                var e = document.getElementById(t);
                if (e && e.getBoundingClientRect) {
                    var n = e.getBoundingClientRect(),
                        r = {};
                    return r.top_left = {
                        y: n.top,
                        x: n.left
                    }, r.bottom_right = {
                        y: n.bottom,
                        x: n.right
                    }, r
                }
                return null
            })(t.adUnitCode);
            if (r) {
                var i = (function(t) {
                    return {
                        top_left: {
                            x: t.top_left.x + window.pageXOffset,
                            y: t.top_left.y + window.pageYOffset
                        },
                        bottom_right: {
                            x: t.bottom_right.x + window.pageXOffset,
                            y: t.bottom_right.y + window.pageYOffset
                        }
                    }
                })(r);
                e.ext.coordinates = i, e.ext.viewability = _(r.top_left, v(e.banner)), .5 < _(i.top_left, v(e.banner)) ? e.ext.visibility = s.ABOVE_THE_FOLD : e.ext.visibility = s.BELOW_THE_FOLD
            } else e.ext.visibility = s.NOT_DETERMINED;
            return e
        }

        function v(t) {
            return t.reduce((function(t, e) {
                return e.h * e.w < t.h * t.w ? e : t
            }))
        }

        function _(t, e) {
            var n = e.w * e.h,
                r = E.getWindowSize(),
                i = {
                    x: t.x + e.w,
                    y: t.y + e.h
                };
            return 0 == n || -1 === r.w || -1 === r.h ? 0 : (function(t, e, n, r) {
                if (t.x > r.x || e.x < n.x || t.y > r.y || e.y < n.y) return 0;
                return (Math.min(e.x, r.x) - Math.max(t.x, n.x)) * (Math.min(e.y, r.y) - Math.max(t.y, n.y))
            })(t, i, {
                x: 0,
                y: 0
            }, {
                x: r.w,
                y: r.h
            }) / n
        }

        function w(t, e) {
            return {
                site: m(t[0].params.site),
                ext: (function(t, e) {
                    var n = {
                        customer_id: t.cid,
                        prebid_version: instBid.version
                    };
                    n.gdpr_applies = !(!e || !e.gdprApplies), n.gdpr_applies && (n.gdpr_consent_string = e.consentString || "");
                    var r = E.getWindowSize();
                    return -1 !== r.w && -1 !== r.h && (n.screen = r), n
                })(t[0].params, e.gdprConsent),
                id: t[0].auctionId,
                imp: t.map((function(t) {
                    return h(t)
                })),
                tmax: e.timeout || a.config.getConfig("bidderTimeout")
            }
        }

        function x(t, e) {
            var n = {
                protocol: "https",
                hostname: "qsearch-a.akamaihd.net/log",
                search: (function(t, e) {
                    e = o.isArray(e) && e || [];
                    var n = {
                        logid: "kfk",
                        evtid: "projectevents",
                        project: "prebid"
                    };
                    return n.acid = o.deepAccess(e, "0.auctionId") || "", n.cid = instBid.medianetGlobals.cid || "", n.crid = e.map((function(t) {
                        return o.deepAccess(t, "params.0.crid") || t.adUnitCode
                    })).join("|"), n.adunit_count = e.length || 0, n.dn = o.getTopWindowLocation().host || "", n.requrl = o.getTopWindowUrl() || "", n.event = t.name || "", n.value = t.value || "", n.rd = t.related_data || "", n
                })(t, e)
            };
            o.triggerPixel(d.format(n))
        }
        instBid.medianetGlobals = {};
        var E = e.spec = {
            code: c,
            isBidRequestValid: function(t) {
                return t.params ? t.params.cid && o.isStr(t.params.cid) && !o.isEmptyStr(t.params.cid) ? (r(instBid.medianetGlobals, !instBid.medianetGlobals.cid && {
                    cid: t.params.cid
                }), !0) : (o.logError(c + " : cid should be a string"), !1) : (o.logError(c + " : Missing bid parameters"), !1)
            },
            buildRequests: function(t, e) {
                var n = w(t, e);
                return {
                    method: "POST",
                    url: "//prebid.media.net/rtb/prebid",
                    data: JSON.stringify(n)
                }
            },
            interpretResponse: function(t, e) {
                var n = [];
                if (!t || !t.body) return o.logInfo(c + " : response is empty"), n;
                var r = t.body.bidList;
                return o.isArray(r) && 0 !== r.length ? n = r.filter((function(t) {
                    return (function(t) {
                        return !1 === t.no_bid && 0 < parseFloat(t.cpm)
                    })(t)
                })) : (o.logInfo(c + " : no bids"), n)
            },
            getUserSyncs: function(t, e) {
                var n = (function(t) {
                    return !o.isEmpty(t) && t[0].body && t[0].body.ext && o.isArray(t[0].body.ext.csUrl) ? t[0].body.ext.csUrl : []
                })(e);
                return t.iframeEnabled ? y(n, "iframe") : t.pixelEnabled ? y(n, "image") : void 0
            },
            onTimeout: function(t) {
                try {
                    x({
                        name: l,
                        value: t.length,
                        related_data: t[0].timeout || a.config.getConfig("bidderTimeout")
                    }, t)
                } catch (t) {}
            },
            onBidWon: function(t) {
                try {
                    x({
                        name: p,
                        value: t.cpm
                    }, [t])
                } catch (t) {}
            },
            clearMnData: function() {
                f = {}
            },
            getWindowSize: function() {
                return {
                    w: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || -1,
                    h: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || -1
                }
            }
        };
        (0, i.registerBidder)(E)
    },
    373: function(t, e) {}
}, [371]);
instBidChunk([81], {
    400: function(e, r, t) {
        t(401), e.exports = t(402)
    },
    401: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var o = function(e, r) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, r) {
                var t = [],
                    n = !0,
                    i = !1,
                    a = void 0;
                try {
                    for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (t.push(s.value), !r || t.length !== r); n = !0);
                } catch (e) {
                    i = !0, a = e
                } finally {
                    try {
                        !n && o.return && o.return()
                    } finally {
                        if (i) throw a
                    }
                }
                return t
            })(e, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        r.resetBoPixel = function() {
            f = !0
        };
        var c = t(3),
            n = t(1),
            d = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            u = t(18),
            p = t(2),
            m = t(11);
        var i = [p.BANNER, p.VIDEO],
            l = "openx",
            a = "hb_pb",
            s = "2.1.6",
            f = !0;
        var h = r.spec = {
            code: l,
            supportedMediaTypes: i,
            isBidRequestValid: function(e) {
                var r = e.params.delDomain || e.params.platform;
                return d.deepAccess(e, "mediaTypes.banner") && r ? !!e.params.unit || 0 < d.deepAccess(e, "mediaTypes.banner.sizes.length") : !(!e.params.unit || !r)
            },
            buildRequests: function(e, r) {
                if (0 === e.length) return [];
                var t = [],
                    n = (function(e) {
                        return e.reduce((function(e, r) {
                            return !(function(e) {
                                return d.deepAccess(e, "mediaTypes.video") || e.mediaType === p.VIDEO
                            })(r) ? e[1].push(r) : e[0].push(r), e
                        }), [
                            [],
                            []
                        ])
                    })(e),
                    i = o(n, 2),
                    a = i[0],
                    s = i[1];
                return 0 < s.length && t.push(function(e, r) {
                    var n = [],
                        i = !1,
                        t = b(e, r),
                        a = d._map(e, (function(e) {
                            return e.params.unit
                        }));
                    t.aus = d._map(e, (function(e) {
                        return d.parseSizesInput(e.sizes).join(",")
                    })).join("|"), t.divIds = d._map(e, (function(e) {
                        return encodeURIComponent(e.adUnitCode)
                    })).join(","), a.some((function(e) {
                        return e
                    })) && (t.auid = a.join(","));
                    e.some((function(e) {
                        return e.params.doNotTrack
                    })) && (t.ns = 1);
                    e.some((function(e) {
                        return e.params.coppa
                    })) && (t.tfcd = 1);
                    e.forEach((function(r) {
                        if (r.params.customParams) {
                            var e = d._map(Object.keys(r.params.customParams), (function(e) {
                                    return (function(e, r) {
                                        var t = r[e];
                                        d.isArray(t) && (t = t.join(","));
                                        return (e.toLowerCase() + "=" + t.toLowerCase()).replace("+", ".").replace("/", "_")
                                    })(e, r.params.customParams)
                                })),
                                t = window.btoa(e.join("&"));
                            i = !0, n.push(t)
                        } else n.push("")
                    })), i && (t.tps = n.join(","));
                    var s = [],
                        o = !1;
                    e.forEach((function(e) {
                        e.params.customFloor ? (s.push(1e3 * e.params.customFloor), o = !0) : s.push(0)
                    })), o && (t.aumfs = s.join(","));
                    return {
                        method: "GET",
                        url: t.ph ? "//u.openx.net/w/1.0/arj" : "//" + e[0].params.delDomain + "/w/1.0/arj",
                        data: t,
                        payload: {
                            bids: e,
                            startTime: new Date
                        }
                    }
                }(s, r)), 0 < a.length && a.forEach((function(e) {
                    t.push(function(e, r) {
                        var t = "//" + e.params.delDomain + "/v/1.0/avjp",
                            n = (function(e, r) {
                                var t = b([e], r),
                                    n = d.deepAccess(e, "params.video") || {},
                                    i = d.deepAccess(e, "mediaTypes.video.context"),
                                    a = d.deepAccess(e, "mediaTypes.video.playerSize"),
                                    s = void 0,
                                    o = void 0;
                                d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (s = parseInt(e.sizes[0], 10), o = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (s = parseInt(e.sizes[0][0], 10), o = parseInt(e.sizes[0][1], 10)) : d.isArray(a) && 2 === a.length && (s = parseInt(a[0], 10), o = parseInt(a[1], 10));
                                Object.keys(n).forEach((function(e) {
                                    "openrtb" === e ? (n[e].w = s || n[e].w, n[e].v = o || n[e].v, t[e] = JSON.stringify(n[e])) : e in t || "url" === e || (t[e] = n[e])
                                })), t.auid = e.params.unit, t.vwd = s || n.vwd, t.vht = o || n.vht, "outstream" === i && (t.vos = "101");
                                n.mimes && (t.vmimes = n.mimes);
                                return t
                            })(e, r);
                        return {
                            method: "GET",
                            url: t,
                            data: n,
                            payload: {
                                bid: e,
                                startTime: new Date
                            }
                        }
                    }(e, r))
                })), t
            },
            interpretResponse: function(e, r) {
                var t = e.body;
                return (function(e) {
                    return /avjp$/.test(e.url) ? p.VIDEO : p.BANNER
                })(r) === p.VIDEO ? (function(e, r) {
                    var t = r.bid,
                        n = r.startTime,
                        i = [];
                    if (void 0 !== e && "" !== e.vastUrl && "" !== e.pub_rev) {
                        var a = (0, m.parse)(e.vastUrl).search || {},
                            s = {};
                        s.requestId = t.bidId, s.bidderCode = l, s.ttl = 300, s.netRevenue = !0, s.currency = e.currency, s.cpm = Number(e.pub_rev) / 1e3, s.width = e.width, s.height = e.height, s.creativeId = e.adid, s.vastUrl = e.vastUrl, s.mediaType = p.VIDEO, e.ph = a.ph, e.colo = a.colo, e.ts = a.ts, i.push(s), g(p.VIDEO, e, n)
                    }
                    return i
                })(t, r.payload) : (function(e, r) {
                    for (var t = r.bids, n = r.startTime, i = e.ads.ad, a = [], s = 0; s < i.length; s++) {
                        var o = i[s],
                            c = parseInt(o.idx, 10),
                            d = {};
                        if (d.requestId = t[c].bidId, o.pub_rev) {
                            d.cpm = Number(o.pub_rev) / 1e3;
                            var u = o.creative[0];
                            u && (d.width = u.width, d.height = u.height), d.creativeId = u.id, d.ad = o.html, o.deal_id && (d.dealId = o.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = o.currency, o.tbd && (d.tbd = o.tbd), d.ts = o.ts, a.push(d), g(p.BANNER, o, n)
                        }
                    }
                    return a
                })(t, r.payload)
            },
            getUserSyncs: function(e, r) {
                if (e.iframeEnabled || e.pixelEnabled) return [{
                    type: e.iframeEnabled ? "iframe" : "image",
                    url: d.deepAccess(r, "0.body.ads.pixels") || d.deepAccess(r, "0.body.pixels") || "//u.openx.net/w/1.0/pd"
                }]
            },
            transformBidParams: function(e, r) {
                return d.convertTypes({
                    unit: "string",
                    customFloor: "number"
                }, e)
            }
        };

        function v(r) {
            for (var e in r) r.hasOwnProperty(e) && (r[e] || delete r[e]);
            return d._map(Object.keys(r), (function(e) {
                return e + "=" + r[e]
            })).join("&")
        }

        function b(e, r) {
            var t = d.inIframe(),
                n = void 0;
            if (n = {
                    ju: c.config.getConfig("pageUrl") || d.getTopWindowUrl(),
                    jr: d.getTopWindowReferrer(),
                    ch: document.charSet || document.characterSet,
                    res: screen.width + "x" + screen.height + "x" + screen.colorDepth,
                    ifr: t,
                    tz: (new Date).getTimezoneOffset(),
                    tws: (function(e) {
                        var r = void 0,
                            t = void 0,
                            n = window,
                            i = document,
                            a = i.documentElement,
                            s = void 0;
                        if (e) {
                            try {
                                n = window.top, i = window.top.document
                            } catch (e) {
                                return
                            }
                            a = i.documentElement, s = i.body, r = n.innerWidth || a.clientWidth || s.clientWidth, t = n.innerHeight || a.clientHeight || s.clientHeight
                        } else a = i.documentElement, r = n.innerWidth || a.clientWidth, t = n.innerHeight || a.clientHeight;
                        return r + "x" + t
                    })(t),
                    be: 1,
                    bc: e[0].params.bc || a + "_" + s,
                    dddid: d._map(e, (function(e) {
                        return e.transactionId
                    })).join(","),
                    nocache: (new Date).getTime()
                }, e[0].params.platform && (n.ph = e[0].params.platform), d.deepAccess(r, "gdprConsent")) {
                var i = r.gdprConsent;
                void 0 !== i.consentString && (n.gdpr_consent = i.consentString), void 0 !== i.gdprApplies && (n.gdpr = i.gdprApplies ? 1 : 0), "iab" === c.config.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
            }
            return e[0].crumbs && e[0].crumbs.pubcid && (n.pubcid = e[0].crumbs.pubcid), n
        }

        function g(e, r, t) {
            if (f) {
                f = !1;
                var n = c.config.getConfig("bidderTimeout"),
                    i = void 0;
                window.PREBID_TIMEOUT && (n = Math.min(window.PREBID_TIMEOUT, n));
                var a = {
                    bd: +new Date - t,
                    bp: r.pub_rev,
                    br: "0",
                    bs: d.getTopWindowLocation().hostname,
                    bt: n,
                    ts: r.ts
                };
                if (a.br = a.bt < a.bd ? "t" : "p", e === p.VIDEO) {
                    var s = (0, m.parse)(r.colo);
                    a.ph = r.ph, i = "//" + s.hostname + "/w/1.0/bo?" + v(a)
                } else {
                    var o = d.deepAccess(r, "creative.0.tracking.impression").match(/([^?]+\/)ri\?/);
                    o && 1 < o.length && (i = o[1] + "bo?" + v(a))
                }
                i && u.userSync.registerSync("image", l, i)
            }
        }(0, n.registerBidder)(h)
    },
    402: function(e, r) {}
}, [400]);
instBidChunk([67], {
    446: function(e, r, a) {
        a(447), e.exports = a(448)
    },
    447: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            u = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e, r
                }
            })(a(0)),
            t = a(1),
            n = a(2),
            i = a(3);
        var c = a(4),
            m = "pubmatic",
            g = "USD",
            o = "nFIn8aLzbd",
            f = void 0,
            h = {
                kadpageurl: "",
                gender: "",
                yob: "",
                lat: "",
                lon: "",
                wiid: "",
                profId: "",
                verId: ""
            },
            s = {
                NUMBER: "number",
                STRING: "string",
                BOOLEAN: "boolean",
                ARRAY: "array"
            },
            y = {
                mimes: s.ARRAY,
                minduration: s.NUMBER,
                maxduration: s.NUMBER,
                startdelay: s.NUMBER,
                playbackmethod: s.ARRAY,
                api: s.ARRAY,
                protocols: s.ARRAY,
                w: s.NUMBER,
                h: s.NUMBER,
                battr: s.ARRAY,
                linearity: s.NUMBER,
                placement: s.NUMBER,
                minbitrate: s.NUMBER,
                maxbitrate: s.NUMBER
            },
            d = {
                1: "PMP",
                5: "PREF",
                6: "PMPG"
            },
            v = 0;

        function b(e, r) {
            if (!u.isStr(r)) return r && u.logWarn("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + (void 0 === r ? "undefined" : l(r))), f;
            switch (e) {
                case "pmzoneid":
                    return r.split(",").slice(0, 50).map((function(e) {
                        return e.trim()
                    })).join();
                case "kadfloor":
                case "lat":
                case "lon":
                    return parseFloat(r) || f;
                case "yob":
                    return parseInt(r) || f;
                default:
                    return r
            }
        }

        function w(e) {
            e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0;
            var r = e.hasOwnProperty("sizes") && u.isArray(e.sizes) && 1 <= e.sizes.length;
            e.params.adSlot = (function(e) {
                return u.isStr(e) ? e.replace(/^\s+/g, "").replace(/\s+$/g, "") : ""
            })(e.params.adSlot);
            var a = e.params.adSlot,
                t = a.split(":");
            if (a = t[0], 2 == t.length && (e.params.adUnitIndex = t[1]), 2 == (t = a.split("@")).length || r)
                if (e.params.adUnit = t[0], 1 < t.length) {
                    if (2 != (t = t[1].split("x")).length) return void u.logWarn("AdSlot Error: adSlot not in required format");
                    e.params.width = parseInt(t[0]), e.params.height = parseInt(t[1]), delete e.sizes
                } else r && (e.params.width = parseInt(e.sizes[0][0]), e.params.height = parseInt(e.sizes[0][1]));
            else u.logWarn("AdSlot Error: adSlot not in required format")
        }

        function I(e, r, a) {
            var t = "PubMatic: Ignoring param key: " + e + ", expects " + a + ", found " + (void 0 === r ? "undefined" : l(r));
            switch (a) {
                case s.BOOLEAN:
                    return u.isBoolean(r) ? r : (u.logWarn(t), f);
                case s.NUMBER:
                    return u.isNumber(r) ? r : (u.logWarn(t), f);
                case s.STRING:
                    return u.isStr(r) ? r : (u.logWarn(t), f);
                case s.ARRAY:
                    return u.isArray(r) ? r : (u.logWarn(t), f)
            }
        }

        function p(e) {
            var r = (function(e) {
                var r, a = (r = window.DigiTrust && (i.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                    member: e
                }))) && r.success && r.identity || null;
                return !a || a.privacy && a.privacy.optout ? null : a
            })(o);
            null !== r && e.push({
                source: "digitru.st",
                uids: [{
                    id: r.id || "",
                    atype: 1,
                    ext: {
                        keyv: parseInt(r.keyv) || 0
                    }
                }]
            })
        }

        function S(e) {
            var r = [];
            p(r), (function(e) {
                var r = i.config.getConfig("adsrvrOrgId");
                r && u.isStr(r.TDID) && e.push({
                    source: "adserver.org",
                    uids: [{
                        id: r.TDID,
                        atype: 1,
                        ext: {
                            rtiPartner: "TDID"
                        }
                    }]
                })
            })(r), 0 < r.length && (e.user.eids = r)
        }
        var R = r.spec = {
            code: m,
            supportedMediaTypes: [n.BANNER, n.VIDEO],
            isBidRequestValid: function(e) {
                return !(!e || !e.params) && (u.isStr(e.params.publisherId) ? u.isStr(e.params.adSlot) ? !!(!e.params.hasOwnProperty("video") || e.params.video.hasOwnProperty("mimes") && u.isArray(e.params.video.mimes) && 0 !== e.params.video.mimes.length) || (u.logWarn(m + ": For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent."), !1) : (u.logWarn(m + ": adSlotId is mandatory and cannot be numeric. Call to OpenBid will not be sent."), !1) : (u.logWarn(m + " Error: publisherId is mandatory and cannot be numeric. Call to OpenBid will not be sent."), !1))
            },
            buildRequests: function(e, r) {
                var a, t, n = (function() {
                        var e = {};
                        return e.pageURL = u.getTopWindowUrl(), e.refURL = u.getTopWindowReferrer(), e
                    })(),
                    i = (function(e) {
                        return {
                            id: "" + (new Date).getTime(),
                            at: 1,
                            cur: [g],
                            imp: [],
                            site: {
                                page: e.pageURL,
                                ref: e.refURL,
                                publisher: {}
                            },
                            device: {
                                ua: navigator.userAgent,
                                js: 1,
                                dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                h: screen.height,
                                w: screen.width,
                                language: navigator.language
                            },
                            user: {},
                            ext: {}
                        }
                    })(n),
                    o = "",
                    s = "",
                    d = [];
                if (e.forEach((function(e) {
                        if (w(t = u.deepClone(e)), t.params.hasOwnProperty("video")) {
                            if (!(t.params.adSlot && t.params.adUnit && t.params.adUnitIndex)) return void u.logWarn(m + ": Skipping the non-standard adslot: ", t.params.adSlot, t)
                        } else if (!(t.params.adSlot && t.params.adUnit && t.params.adUnitIndex && t.params.width && t.params.height)) return void u.logWarn(m + ": Skipping the non-standard adslot: ", t.params.adSlot, t);
                        n.pubId = n.pubId || t.params.publisherId, (n = (function(e, r) {
                            var a, t, n;
                            for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), h) h.hasOwnProperty(a) && (t = e[a]) && ("object" === (void 0 === (n = h[a]) ? "undefined" : l(n)) && (t = n.f(t, r)), u.isStr(t) ? r[a] = t : u.logWarn("PubMatic: Ignoring param : " + a + " with value : " + h[a] + ", expects string-value, found " + (void 0 === t ? "undefined" : l(t))));
                            return r
                        })(t.params, n)).transactionId = t.transactionId, "" === o ? o = t.params.currency || void 0 : t.params.hasOwnProperty("currency") && o !== t.params.currency && u.logWarn(m + ": Currency specifier ignored. Only one currency permitted."), t.params.currency = o, t.params.hasOwnProperty("dctr") && u.isStr(t.params.dctr) && d.push(t.params.dctr), i.imp.push(function(e) {
                            var r = {},
                                a = {},
                                t = {},
                                n = e.hasOwnProperty("sizes") ? e.sizes : [];
                            if (r = {
                                    id: e.bidId,
                                    tagid: e.params.adUnit,
                                    bidfloor: b("kadfloor", e.params.kadfloor),
                                    secure: "https:" === window.location.protocol ? 1 : 0,
                                    ext: {
                                        pmZoneId: b("pmzoneid", e.params.pmzoneid)
                                    },
                                    bidfloorcur: e.params.currency ? b("currency", e.params.currency) : g
                                }, e.params.hasOwnProperty("video")) {
                                var i = e.params.video;
                                for (var o in y) i.hasOwnProperty(o) && (t[o] = I(o, i[o], y[o]));
                                u.isArray(e.mediaTypes.video.playerSize[0]) ? (t.w = e.mediaTypes.video.playerSize[0][0], t.h = e.mediaTypes.video.playerSize[0][1]) : u.isNumber(e.mediaTypes.video.playerSize[0]) && (t.w = e.mediaTypes.video.playerSize[0], t.h = e.mediaTypes.video.playerSize[1]), e.params.video.hasOwnProperty("skippable") && (t.ext = {
                                    video_skippable: e.params.video.skippable ? 1 : 0
                                }), r.video = t
                            } else {
                                if (a = {
                                        pos: 0,
                                        w: e.params.width,
                                        h: e.params.height,
                                        topframe: u.inIframe() ? 0 : 1
                                    }, u.isArray(n) && 1 < n.length) {
                                    n = n.splice(1, n.length - 1);
                                    var s = [];
                                    n.forEach((function(e) {
                                        s.push({
                                            w: e[0],
                                            h: e[1]
                                        })
                                    })), a.format = s
                                }
                                r.banner = a
                            }
                            return r
                        }(t))
                    })), 0 != i.imp.length) {
                    if (i.site.publisher.id = n.pubId.trim(), v = n.pubId.trim(), i.ext.wrapper = {}, i.ext.wrapper.profile = parseInt(n.profId) || f, i.ext.wrapper.version = parseInt(n.verId) || f, i.ext.wrapper.wiid = n.wiid || f, i.ext.wrapper.wv = c.REPO_AND_VERSION, i.ext.wrapper.transactionId = n.transactionId, i.ext.wrapper.wp = "pbjs", i.user.gender = n.gender ? n.gender.trim() : f, i.user.geo = {}, r && r.gdprConsent && (i.user.ext = {
                            consent: r.gdprConsent.consentString
                        }, i.regs = {
                            ext: {
                                gdpr: r.gdprConsent.gdprApplies ? 1 : 0
                            }
                        }), i.user.geo.lat = b("lat", n.lat), i.user.geo.lon = b("lon", n.lon), i.user.yob = b("yob", n.yob), i.device.geo = {}, i.device.geo.lat = b("lat", n.lat), i.device.geo.lon = b("lon", n.lon), i.site.page = n.kadpageurl.trim() || i.site.page.trim(), i.site.domain = (function(e) {
                            var r = document.createElement("a");
                            return r.href = e, r.hostname
                        })(i.site.page), e[0].params.hasOwnProperty("dctr")) {
                        if (s = e[0].params.dctr, u.isStr(s) && 0 < s.length) {
                            var p = s.split("|");
                            s = "", p.forEach((function(e) {
                                s += 0 < e.length ? e.trim() + "|" : ""
                            })), a = s.length, "|" === s.substring(a, a - 1) && (s = s.substring(0, a - 1)), i.site.ext = {
                                key_val: s.trim()
                            }
                        } else u.logWarn(m + ": Ignoring param : dctr with value : " + s + ", expects string-value, found empty or non-string value");
                        1 < d.length && u.logWarn(m + ": dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits")
                    } else u.logWarn(m + ": dctr value not found in 1st adunit, ignoring values from subsequent adunits");
                    return S(i), {
                        method: "POST",
                        url: "//hbopenbid.pubmatic.com/translator?source=prebid-client",
                        data: JSON.stringify(i)
                    }
                }
            },
            interpretResponse: function(e, t) {
                var n = [],
                    i = g;
                try {
                    e.body && e.body.seatbid && u.isArray(e.body.seatbid) && (i = e.body.cur || i, e.body.seatbid.forEach((function(e) {
                        e.bid && u.isArray(e.bid) && e.bid.forEach((function(r) {
                            var a = {
                                    requestId: r.impid,
                                    cpm: (parseFloat(r.price) || 0).toFixed(2),
                                    width: r.w,
                                    height: r.h,
                                    creativeId: r.crid || r.id,
                                    dealId: r.dealid,
                                    currency: i,
                                    netRevenue: !1,
                                    ttl: 300,
                                    referrer: u.getTopWindowUrl(),
                                    ad: r.adm
                                },
                                e = JSON.parse(t.data);
                            e.imp && 0 < e.imp.length && e.imp.forEach((function(e) {
                                r.impid === e.id && e.hasOwnProperty("video") && (a.mediaType = "video", a.width = r.hasOwnProperty("w") ? r.w : e.video.w, a.height = r.hasOwnProperty("h") ? r.h : e.video.h, a.vastXml = r.adm)
                            })), r.ext && r.ext.deal_channel && (a.dealChannel = d[r.ext.deal_channel] || null), n.push(a)
                        }))
                    })))
                } catch (e) {
                    u.logError(e)
                }
                return n
            },
            getUserSyncs: function(e, r, a) {
                var t = "//ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=" + v;
                if (a && (t += "&gdpr=" + (a.gdprApplies ? 1 : 0), t += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), e.iframeEnabled) return [{
                    type: "iframe",
                    url: t
                }];
                u.logWarn("PubMatic: Please enable iframe based user sync.")
            },
            transformBidParams: function(e, r) {
                return u.convertTypes({
                    publisherId: "string",
                    adSlot: "string"
                }, e)
            }
        };
        (0, t.registerBidder)(R)
    },
    448: function(e, r) {}
}, [446]);
instBidChunk([64], {
    453: function(e, t, n) {
        n(454), e.exports = n(455)
    },
    454: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spec = void 0;
        var r = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0)),
            i = n(1);
        var a = {
                TITLE_LEN: 100,
                DESCR_LEN: 200,
                SPONSORED_BY_LEN: 50,
                IMG_MIN: 150,
                ICON_MIN: 50
            },
            u = t.spec = {
                code: "pulsepoint",
                aliases: ["pulseLite", "pulsepointLite"],
                supportedMediaTypes: ["banner", "native"],
                isBidRequestValid: function(e) {
                    return !!(e && e.params && e.params.cp && e.params.ct)
                },
                buildRequests: function(e, t) {
                    var n = {
                        id: e[0].bidderRequestId,
                        imp: e.map((function(e) {
                            return (function(e) {
                                return {
                                    id: e.bidId,
                                    banner: (function(e) {
                                        var t = (function(e) {
                                            if (e.params.cf) {
                                                var t = e.params.cf.toUpperCase().split("X"),
                                                    n = parseInt(e.params.cw || t[0], 10),
                                                    r = parseInt(e.params.ch || t[1], 10);
                                                return [n, r]
                                            }
                                            return [1, 1]
                                        })(e);
                                        return e.nativeParams ? null : {
                                            w: t[0],
                                            h: t[1]
                                        }
                                    })(e),
                                    native: (function(e) {
                                        if (e.nativeParams) {
                                            var t = [];
                                            return o(t, (function(e, t, n) {
                                                if (t) return {
                                                    id: e,
                                                    required: t.required ? 1 : 0,
                                                    title: {
                                                        len: t.len || n
                                                    }
                                                };
                                                return null
                                            })(t.length + 1, e.nativeParams.title, a.TITLE_LEN)), o(t, c(t.length + 1, e.nativeParams.body, 2, a.DESCR_LEN)), o(t, c(t.length + 1, e.nativeParams.sponsoredBy, 1, a.SPONSORED_BY_LEN)), o(t, s(t.length + 1, e.nativeParams.icon, 1, a.ICON_MIN, a.ICON_MIN)), o(t, s(t.length + 1, e.nativeParams.image, 3, a.IMG_MIN, a.IMG_MIN)), {
                                                request: JSON.stringify({
                                                    assets: t
                                                }),
                                                ver: "1.1"
                                            }
                                        }
                                        return null
                                    })(e),
                                    tagid: e.params.ct.toString()
                                }
                            })(e)
                        })),
                        site: (function(e) {
                            var t = e && 0 < e.length ? e[0].params.cp : "0";
                            return e[0].params.app ? null : {
                                publisher: {
                                    id: t.toString()
                                },
                                ref: (function() {
                                    try {
                                        return window.top.document.referrer
                                    } catch (e) {
                                        return document.referrer
                                    }
                                })(),
                                page: r.getTopWindowLocation().href
                            }
                        })(e),
                        app: (function(e) {
                            var t = e && 0 < e.length ? e[0].params.cp : "0",
                                n = e[0].params.app;
                            if (n) return {
                                publisher: {
                                    id: t.toString()
                                },
                                bundle: n.bundle,
                                storeurl: n.storeUrl,
                                domain: n.domain
                            };
                            return null
                        })(e),
                        device: {
                            ua: navigator.userAgent,
                            language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                        }
                    };
                    return (function(e, t) {
                        e && e.gdprConsent && (t.regs = {
                            ext: {
                                gdpr: e.gdprConsent.gdprApplies ? 1 : 0
                            }
                        }, t.user = {
                            ext: {
                                consent: e.gdprConsent.consentString
                            }
                        })
                    })(t, n), {
                        method: "POST",
                        url: "//bid.contextweb.com/header/ortb",
                        data: JSON.stringify(n)
                    }
                },
                interpretResponse: function(e, t) {
                    return (function(e, t) {
                        var n = {},
                            r = {};
                        t = t.body, d(e.data).imp.forEach((function(e) {
                            n[e.id] = e
                        })), t && t.seatbid.forEach((function(e) {
                            return e.bid.forEach((function(e) {
                                r[e.impid] = e
                            }))
                        }));
                        var i = [];
                        return Object.keys(n).forEach((function(e) {
                            if (r[e]) {
                                var t = {
                                    requestId: e,
                                    cpm: r[e].price,
                                    creative_id: e,
                                    creativeId: e,
                                    adId: e,
                                    ttl: 20,
                                    netRevenue: !0,
                                    currency: "USD"
                                };
                                n[e].native ? (t.native = (function(e, t) {
                                    if (e.native) {
                                        var n = d(t.adm),
                                            r = {};
                                        if (n && n.native && n.native.assets) return n.native.assets.forEach((function(e) {
                                            r.title = e.title ? e.title.text : r.title, r.body = e.data && 2 === e.data.type ? e.data.value : r.body, r.sponsoredBy = e.data && 1 === e.data.type ? e.data.value : r.sponsoredBy, r.image = e.img && 3 === e.img.type ? e.img.url : r.image, r.icon = e.img && 1 === e.img.type ? e.img.url : r.icon
                                        })), n.native.link && (r.clickUrl = encodeURIComponent(n.native.link.url)), r.impressionTrackers = n.native.imptrackers, r
                                    }
                                    return null
                                })(n[e], r[e]), t.mediaType = "native") : (t.ad = r[e].adm, t.width = n[e].banner.w, t.height = n[e].banner.h), (function(e, t) {
                                    t && t.ext && (e.ttl = t.ext.ttl || e.ttl, e.currency = t.ext.currency || e.currency, e.netRevenue = null != t.ext.netRevenue ? t.ext.netRevenue : e.netRevenue)
                                })(t, r[e]), i.push(t)
                            }
                        })), i
                    })(t, e)
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
                transformBidParams: function(e, t) {
                    return r.convertTypes({
                        cf: "string",
                        cp: "number",
                        ct: "number"
                    }, e)
                }
            };

        function o(e, t) {
            t && e.push(t)
        }

        function s(e, t, n, r, i) {
            return t ? {
                id: e,
                required: t.required ? 1 : 0,
                img: {
                    type: n,
                    wmin: t.wmin || r,
                    hmin: t.hmin || i
                }
            } : null
        }

        function c(e, t, n, r) {
            return t ? {
                id: e,
                required: t.required ? 1 : 0,
                data: {
                    type: n,
                    len: t.len || r
                }
            } : null
        }

        function d(e) {
            try {
                if (e) return JSON.parse(e)
            } catch (e) {
                r.logError("pulsepointLite.safeParse", "ERROR", e)
            }
            return null
        }(0, i.registerBidder)(u)
    },
    455: function(e, t) {}
}, [453]);
instBidChunk([58], {
    474: function(e, t, n) {
        n(475), e.exports = n(476)
    },
    475: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spec = void 0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = n(1),
            i = n(2);
        var r = t.spec = new function() {
            function S(e, t) {
                for (var n = 0; n < t.length; n++)
                    if (t[n].params && t[n].params[e]) return t[n].params[e]
            }
            this.code = "rhythmone", this.supportedMediaTypes = [i.VIDEO, i.BANNER], this.isBidRequestValid = function(e) {
                return !0
            }, this.getUserSyncs = function(e, t, n) {
                var o = [],
                    i = [];
                for (var r in C) o.push(r), i.push(S("placementId", [C[r]]));
                var s = {
                        doc_version: 1,
                        doc_type: "Prebid Audit",
                        placement_id: i.join(",").replace(/[,]+/g, ",").replace(/^,|,$/g, "")
                    },
                    a = "undefined" != typeof window ? window : {
                        document: {
                            location: {
                                href: ""
                            }
                        }
                    },
                    d = a.document.location.ancestorOrigins,
                    p = [];
                d && 0 < d.length && (s.ancestor_origins = d[d.length - 1]), s.popped = null !== a.opener ? 1 : 0, s.framed = a.top === a ? 0 : 1;
                try {
                    s.url = a.top.document.location.href.toString()
                } catch (e) {
                    s.url = a.document.location.href.toString()
                }
                try {
                    s.prebid_version = "1.34.0", s.prebid_timeout = config.getConfig("bidderTimeout")
                } catch (e) {}
                for (var c in s.response_ms = Date.now() - u, s.placement_codes = o.join(","), s.bidder_version = z, n && (s.gdpr_consent = n.consentString, s.gdpr = "boolean" != typeof n.gdprApplies || n.gdprApplies), s) p.push(encodeURIComponent(c) + "=" + encodeURIComponent("object" === l(s[c]) ? JSON.stringify(s[c]) : s[c]));
                if (p.sort(), e.pixelEnabled) return [{
                    type: "image",
                    url: "//hbevents.1rx.io/audit?" + p.join("&")
                }]
            };
            var C = {},
                p = this,
                z = "1.0.1.0",
                u = Date.now();
            this.buildRequests = function(f, v) {
                var m = S("placementId", f);
                if (void 0 === m || f.length < 1) return [];
                u = Date.now(), C = {};
                var g = [],
                    y = "undefined" != typeof window ? window : {};

                function b(e, t, n) {
                    t instanceof Array && (t = t.join(n || ",")), void 0 !== t && g.push(encodeURIComponent(e) + "=" + encodeURIComponent(t))
                }

                function w(e, t) {
                    try {
                        return e()
                    } catch (e) {}
                    return t
                }
                return b("domain", w((function() {
                    var e = y.document.location.ancestorOrigins;
                    return e && 0 < e.length ? e[e.length - 1] : y.top.document.location.hostname
                }), "")), b("url", w((function() {
                    var t;
                    try {
                        t = y.top.document.location.href.toString()
                    } catch (e) {
                        t = y.document.location.href.toString()
                    }
                    return t
                }), "")), [{
                    method: "GET",
                    url: (function() {
                        var e = S("endpoint", f) || "//tag.1rx.io/rmp/{placementId}/0/{path}?z={zone}",
                            t = S("zone", f) || "1r",
                            n = S("path", f) || "mvo";
                        e = (e = (e = e.replace(/\{placementId\}/i, m)).replace(/\{zone\}/i, t)).replace(/\{path\}/i, n), b("title", w((function() {
                            return y.top.document.title
                        }), "")), b("dsh", y.screen ? y.screen.height : ""), b("dsw", y.screen ? y.screen.width : ""), b("tz", (new Date).getTimezoneOffset()), b("dtype", /(ios|ipod|ipad|iphone|android)/i.test(y.navigator.userAgent) ? 1 : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(y.navigator.userAgent) ? 3 : 2), b("flash", w((function() {
                            var e = y.navigator,
                                t = e.plugins,
                                n = e.mimeTypes,
                                o = "application/x-shockwave-flash",
                                i = y.ActiveXObject;
                            if (t && t["Shockwave Flash"] && n && n[o] && n[o].enabledPlugin) return 1;
                            if (i) try {
                                if (new y.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) return 1
                            } catch (e) {}
                            return 0
                        }), 0));
                        var o = [],
                            i = [],
                            r = [],
                            s = [],
                            a = 0,
                            d = [],
                            p = /(^v|(\.0)+$)/gi;
                        for (b("hbv", y.instBid.version.replace(p, "") + "," + z.replace(p, "")); a < f.length; a++) {
                            var c = [],
                                u = [],
                                l = f[a].params || {};
                            C[f[a].adUnitCode || f[a].placementCode] = f[a], 0 < f[a].sizes.length && "number" == typeof f[a].sizes[0] && (f[a].sizes = [f[a].sizes]);
                            for (var h = 0; h < f[a].sizes.length; h++) u.push(f[a].sizes[h][0]), c.push(f[a].sizes[h][1]);
                            d.push(f[a].adUnitCode || f[a].placementCode), o.push(c.join("|")), i.push(u.join("|")), s.push(f[a].mediaTypes && f[a].mediaTypes.video ? "v" : "d"), r.push(l.floor || 0)
                        }
                        return b("imp", d), b("w", i), b("h", o), b("floor", r), b("t", s), v && v.gdprConsent && (b("gdpr_consent", v.gdprConsent.consentString), b("gdpr", "boolean" != typeof v.gdprConsent.gdprApplies || v.gdprConsent.gdprApplies)), e += "&" + g.join("&") + "&"
                    })()
                }]
            }, this.interpretResponse = function(e) {
                var t = e.body || [],
                    n = [],
                    o = 0;
                if (t.seatbid) {
                    var i = [];
                    for (o = 0; o < t.seatbid.length; o++)
                        for (var r = 0; r < t.seatbid[o].bid.length; r++) i.push(t.seatbid[o].bid[r]);
                    t = i
                }
                for (o = 0; o < t.length; o++) {
                    var s = t[o],
                        a = C[s.impid],
                        d = {
                            requestId: a.bidId,
                            bidderCode: p.code,
                            cpm: parseFloat(s.price),
                            width: s.w,
                            height: s.h,
                            creativeId: s.crid,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 1e3
                        };
                    a.mediaTypes && a.mediaTypes.video ? (d.vastUrl = s.nurl, d.mediaType = "video", d.ttl = 1e4) : d.ad = s.adm, n.push(d)
                }
                return n
            }
        };
        (0, o.registerBidder)(r)
    },
    476: function(e, t) {}
}, [474]);
instBidChunk([56], {
    483: function(e, t, n) {
        e.exports = n(484)
    },
    484: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
            r = c(n(5)),
            a = c(n(4)),
            o = c(n(8)),
            s = c(n(7)),
            u = n(6);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var d = n(0),
            f = (0, u.ajaxBuilder)(0),
            l = "pa.rxthdr.com/v3",
            p = a.default.EVENTS,
            v = p.AUCTION_INIT,
            m = p.AUCTION_END,
            g = p.BID_REQUESTED,
            h = p.BID_ADJUSTMENT,
            T = p.BIDDER_DONE,
            y = p.BID_WON,
            b = {
                RUNNING: "running",
                FINISHED: "finished"
            },
            I = {
                REQUESTED: "requested",
                BID: "bid",
                NO_BID: "noBid",
                TIMEOUT: "timeout"
            },
            E = {
                AUCTION: "a",
                IMPRESSION: "i",
                BID_AFTER_TIMEOUT: "bat"
            },
            D = {},
            N = "roxot_analytics_",
            _ = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"],
            U = "utm_ttl",
            S = "is_new_flag",
            A = 36e5,
            O = {},
            w = 36e5,
            C = [],
            B = null,
            R = 1e3;

        function M() {
            localStorage.setItem(k(U), Date.now())
        }

        function k(e) {
            return N.concat(e)
        }

        function q(e) {
            return !D.adUnits.length || (0, s.default)(D.adUnits, e)
        }

        function j(e) {
            return e.adUnitCode.toLowerCase()
        }

        function x(e) {
            return e.bidder.toLowerCase()
        }

        function P(e, t) {
            return {
                isNew: (function() {
                    var e = k(S),
                        t = Number(localStorage.getItem(e));
                    return localStorage.setItem(e, Date.now()), Date.now() - t > A
                })() ? 1 : 0,
                auction: d.deepClone(e),
                adUnit: j(t),
                bidder: x(t),
                cpm: t.cpm,
                size: {
                    width: t.width,
                    height: t.height
                },
                mediaType: t.mediaType,
                source: t.source || "client"
            }
        }

        function F(e) {
            O[e.auctionId] = (function(e) {
                return {
                    id: e.auctionId,
                    start: e.timestamp,
                    timeout: e.timeout,
                    adUnits: {}
                }
            })(e), (function() {
                for (var e in O) {
                    var t = O[e];
                    Date.now() - t.start > w && delete O[e]
                }
            })()
        }

        function z(e) {
            var r = O[e.auctionId];
            e.bids.forEach((function(e) {
                var t = j(e),
                    n = x(e);
                if (q(t)) {
                    r.adUnits[t] = r.adUnits[t] || (function(e, t) {
                        return {
                            adUnit: j(t),
                            start: e.start,
                            timeout: e.timeout,
                            finish: 0,
                            status: b.RUNNING,
                            bidders: {}
                        }
                    })(r, e);
                    var i = r.adUnits[t];
                    i.bidders[n] = i.bidders[n] || (function(e, t) {
                        return {
                            bidder: x(t),
                            isAfterTimeout: e.status === b.FINISHED ? 1 : 0,
                            start: t.startTime || Date.now(),
                            finish: 0,
                            status: I.REQUESTED,
                            cpm: -1,
                            size: {
                                width: 0,
                                height: 0
                            },
                            mediaType: "-",
                            source: t.source || "client"
                        }
                    })(r, e)
                }
            }))
        }

        function G(e) {
            var t = j(e),
                n = x(e);
            if (q(t)) {
                var i = O[e.auctionId].adUnits[t];
                if (i.status !== b.FINISHED) {
                    var r = i.bidders[n];
                    r.cpm < e.cpm && (r.cpm = e.cpm, r.finish = e.responseTimestamp, r.status = 0 === e.cpm ? I.NO_BID : I.BID, r.size.width = e.width || 0, r.size.height = e.height || 0, r.mediaType = e.mediaType || "-", r.source = e.source || "client")
                } else !(function(e, t) {
                    var n = x(t),
                        i = e.bidders[n],
                        r = (function(e, t) {
                            return {
                                auction: d.deepClone(e),
                                adUnit: j(t),
                                bidder: x(t),
                                cpm: t.cpm,
                                size: {
                                    width: t.width || 0,
                                    height: t.height || 0
                                },
                                mediaType: t.mediaType || "-",
                                start: t.requestTimestamp,
                                finish: t.responseTimestamp
                            }
                        })(e, t);
                    r.cpm > i.cpm && (i.cpm = r.cpm, i.isAfterTimeout = 1, i.finish = r.finish, i.size = r.size, i.mediaType = r.mediaType, i.status = 0 === r.cpm ? I.NO_BID : I.BID);
                    L(E.BID_AFTER_TIMEOUT, "Bid After Timeout", r)
                })(i, e)
            }
        }
        var H = i((0, r.default)({
            url: l,
            analyticsType: "endpoint"
        }), {
            track: function(e) {
                var t = e.eventType,
                    n = e.args;
                switch (t) {
                    case v:
                        F(n);
                        break;
                    case g:
                        z(n);
                        break;
                    case h:
                        G(n);
                        break;
                    case T:
                        !(function(e) {
                            var a = O[e.auctionId];
                            e.bids.forEach((function(e) {
                                var t = j(e),
                                    n = x(e);
                                if (q(t)) {
                                    var i = a.adUnits[t];
                                    if (i.status !== b.FINISHED) {
                                        var r = i.bidders[n];
                                        r.status === I.REQUESTED && (r.finish = Date.now(), r.status = I.NO_BID, r.cpm = 0)
                                    }
                                }
                            }))
                        })(n);
                        break;
                    case m:
                        !(function(e) {
                            var t = O[e.auctionId];
                            Object.keys(t.adUnits).length || delete O[e.auctionId];
                            var n = Date.now();
                            for (var i in t.finish = n, t.adUnits) {
                                var r = t.adUnits[i];
                                for (var a in r.finish = n, r.status = b.FINISHED, r.bidders) {
                                    var o = r.bidders[a];
                                    o.status === I.REQUESTED && (o.status = I.TIMEOUT)
                                }
                            }
                            L(E.AUCTION, "Auction", t)
                        })(n);
                        break;
                    case y:
                        !(function(e) {
                            var t = j(e);
                            if (q(t)) {
                                var n = P(O[e.auctionId].adUnits[t], e);
                                L(E.IMPRESSION, "Bid won", n)
                            }
                        })(n);
                        break;
                    default:
                        !(function(e, t) {
                            L(e, e, t)
                        })(t, n)
                }
            }
        });

        function L(e, t, n) {
            var i = {
                eventType: e,
                eventName: t,
                data: n
            };
            C.push(i), W("Register event", i), void 0 === D.serverConfig ? J() : Q()
        }

        function Q() {
            if (B && (clearTimeout(B), B = null), void 0 !== D.serverConfig)
                for (; C.length;) {
                    var e = C.shift(),
                        t = D.serverConfig[e.eventType] || 0;
                    0 !== Number(t) ? V(e.eventType, e.eventName, e.data) : W("Skip event " + e.eventName, e)
                } else J()
        }

        function J() {
            B = B || setTimeout(Q, R)
        }

        function V(e, t, n) {
            var i = "//" + D.server + "/" + e + "?publisherId=" + D.publisherId + "&host=" + D.host,
                r = {
                    event: e,
                    eventName: t,
                    options: D,
                    data: n
                };
            f(i, (function() {
                W(t + " sent", r)
            }), JSON.stringify(r), {
                contentType: "text/plain",
                method: "POST",
                withCredentials: !0
            })
        }

        function W(e, t) {
            d.logInfo(K(e), t)
        }

        function K(e) {
            return "Roxot Prebid Analytics: " + e
        }
        H.originEnableAnalytics = H.enableAnalytics, H.enableAnalytics = function(e) {
            this.initConfig(e) && (W("Analytics adapter enabled", D), H.originEnableAnalytics(e))
        }, H.buildUtmTagData = function() {
            var n = {},
                i = !1;
            return _.forEach((function(e) {
                var t = d.getParameterByName(e);
                "" !== t && (i = !0), n[e] = t
            })), _.forEach((function(e) {
                i ? (localStorage.setItem(k(e), n[e]), M()) : (function() {
                    var e = localStorage.getItem(k(U));
                    return 36e5 < Date.now() - e
                })() || (n[e] = localStorage.getItem(k(e)) ? localStorage.getItem(k(e)) : "", M())
            })), n
        }, H.initConfig = function(e) {
            var t = !0;
            return (D = {}).options = d.deepClone(e.options), D.publisherId = D.options.publisherId || D.options.publisherIds[0] || null, D.publisherId || (function(e) {
                d.logError(K(e))
            }('"options.publisherId" is empty'), t = !1), D.adUnits = D.options.adUnits || [], D.adUnits = D.adUnits.map((function(e) {
                return e.toLowerCase()
            })), D.server = D.options.server || l, D.configServer = D.options.configServer || D.options.server || "pa.rxthdr.com/v3", D.utmTagData = this.buildUtmTagData(), D.host = D.options.host || window.location.hostname, D.device = /ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()) ? "tablet" : /iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase()) ? "mobile" : "desktop", (function() {
                var e = "//" + D.configServer + "/c?publisherId=" + D.publisherId + "&host=" + D.host;
                f(e, {
                    success: function(e) {
                        D.serverConfig = JSON.parse(e)
                    },
                    error: function() {
                        D.serverConfig = {}, D.serverConfig[E.AUCTION] = 1, D.serverConfig[E.IMPRESSION] = 1, D.serverConfig[E.BID_AFTER_TIMEOUT] = 1, D.serverConfig.isError = 1
                    }
                }, null, {
                    contentType: "text/json",
                    method: "GET",
                    withCredentials: !0
                })
            })(), t
        }, H.getOptions = function() {
            return D
        }, o.default.registerAnalyticsAdapter({
            adapter: H,
            code: "roxot"
        }), t.default = H
    },
    5: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.default = function(e) {
            var r, a = e.url,
                t = e.analyticsType,
                o = e.global,
                i = e.handler,
                s = [],
                u = 0,
                n = !0;
            t !== U && !S || (function() {
                if (n) {
                    for (var e = 0; e < s.length; e++) s[e]();
                    s.push = function(e) {
                        e()
                    }, n = !1
                }
                m.logMessage("event count sent to " + o + ": " + u)
            })();
            return {
                track: function(e) {
                    var t = e.eventType,
                        n = e.args;
                    this.getAdapterType() === S && window[o](i, t, n);
                    this.getAdapterType() === U && function(e) {
                        var t = e.eventType,
                            n = e.args,
                            i = e.callback;
                        (0, l.ajax)(a, i, JSON.stringify({
                            eventType: t,
                            args: n
                        }))
                    }.apply(void 0, arguments)
                },
                enqueue: c,
                enableAnalytics: d,
                disableAnalytics: function() {
                    m._each(r, (function(e, t) {
                        v.off(t, e)
                    })), this.enableAnalytics = this._oldEnable ? this._oldEnable : d
                },
                getAdapterType: function() {
                    return t
                },
                getGlobal: function() {
                    return o
                },
                getHandler: function() {
                    return i
                },
                getUrl: function() {
                    return a
                }
            };

            function c(e) {
                var t = e.eventType,
                    n = e.args,
                    i = this;
                o && window[o] && t && n ? this.track({
                    eventType: t,
                    args: n
                }) : s.push((function() {
                    u++, i.track({
                        eventType: t,
                        args: n
                    })
                }))
            }

            function d(t) {
                var e, n = this,
                    i = this;
                "object" !== (void 0 === t ? "undefined" : f(t)) || "object" !== f(t.options) || (void 0 === t.options.sampling || Math.random() < parseFloat(t.options.sampling)) ? (v.getEvents().forEach((function(e) {
                    if (e) {
                        var t = e.eventType,
                            n = e.args;
                        t !== y && c.call(i, {
                            eventType: t,
                            args: n
                        })
                    }
                })), p(e = {}, T, (function(e) {
                    return n.enqueue({
                        eventType: T,
                        args: e
                    })
                })), p(e, b, (function(e) {
                    return n.enqueue({
                        eventType: b,
                        args: e
                    })
                })), p(e, y, (function(e) {
                    return n.enqueue({
                        eventType: y,
                        args: e
                    })
                })), p(e, I, (function(e) {
                    return n.enqueue({
                        eventType: I,
                        args: e
                    })
                })), p(e, E, (function(e) {
                    return n.enqueue({
                        eventType: E,
                        args: e
                    })
                })), p(e, D, (function(e) {
                    return n.enqueue({
                        eventType: D,
                        args: e
                    })
                })), p(e, N, (function(e) {
                    return n.enqueue({
                        eventType: N,
                        args: e
                    })
                })), p(e, h, (function(e) {
                    return n.enqueue({
                        eventType: h,
                        args: e
                    })
                })), p(e, _, (function(e) {
                    return n.enqueue({
                        eventType: _,
                        args: e
                    })
                })), p(e, g, (function(e) {
                    e.config = "object" === (void 0 === t ? "undefined" : f(t)) && t.options || {}, n.enqueue({
                        eventType: g,
                        args: e
                    })
                })), r = e, m._each(r, (function(e, t) {
                    v.on(t, e)
                }))) : m.logMessage('Analytics adapter for "' + o + '" disabled by sampling');
                this._oldEnable = this.enableAnalytics, this.enableAnalytics = function() {
                    return m.logMessage('Analytics adapter for "' + o + '" already enabled, unnecessary call to `enableAnalytics`.')
                }
            }
        };
        var i, r = n(4),
            a = (i = r) && i.__esModule ? i : {
                default: i
            },
            l = n(6);

        function p(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var v = n(9),
            m = n(0),
            o = a.default.EVENTS,
            g = o.AUCTION_INIT,
            h = o.AUCTION_END,
            T = o.BID_REQUESTED,
            y = o.BID_TIMEOUT,
            b = o.BID_RESPONSE,
            I = o.BID_WON,
            E = o.BID_ADJUSTMENT,
            D = o.BIDDER_DONE,
            N = o.SET_TARGETING,
            _ = o.AD_RENDER_FAILED,
            U = "endpoint",
            S = "bundle"
    }
}, [483]);
instBidChunk([53], {
    491: function(e, r, i) {
        i(492), e.exports = i(493)
    },
    492: function(e, r, i) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = r.OPENRTB = void 0;
        var t, a = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
                    return r.default = e, r
                }
            })(i(0)),
            n = i(2),
            s = i(1),
            d = i(7),
            u = (t = d) && t.__esModule ? t : {
                default: t
            };
        var o = ["prebid-eu", "prebid-us", "prebid-asia"],
            p = ["USD"],
            c = r.OPENRTB = {
                NATIVE: {
                    IMAGE_TYPE: {
                        ICON: 1,
                        MAIN: 3
                    },
                    ASSET_ID: {
                        TITLE: 1,
                        IMAGE: 2,
                        ICON: 3,
                        BODY: 4,
                        SPONSORED: 5,
                        CTA: 6
                    },
                    DATA_ASSET_TYPE: {
                        SPONSORED: 1,
                        DESC: 2,
                        CTA_TEXT: 12
                    }
                }
            },
            T = r.spec = {
                code: "rtbhouse",
                supportedMediaTypes: [n.BANNER, n.NATIVE],
                isBidRequestValid: function(e) {
                    return !(!(0, u.default)(o, e.params.region) || !e.params.publisherId)
                },
                buildRequests: function(e, r) {
                    var i = {
                        id: e[0].auctionId,
                        imp: e.map((function(e) {
                            return (function(e) {
                                var r = {
                                        id: e.bidId,
                                        banner: (function(e) {
                                            if ("banner" === e.mediaType || a.deepAccess(e, "mediaTypes.banner") || !e.mediaType && !e.mediaTypes) return {
                                                w: e.sizes[0][0],
                                                h: e.sizes[0][1],
                                                format: e.sizes.map((function(e) {
                                                    return {
                                                        w: e[0],
                                                        h: e[1]
                                                    }
                                                }))
                                            }
                                        })(e),
                                        native: (function(e) {
                                            if ("native" === e.mediaType || a.deepAccess(e, "mediaTypes.native")) return {
                                                request: {
                                                    assets: (function(e) {
                                                        var r = e.nativeParams || a.deepAccess(e, "mediaTypes.native"),
                                                            i = [];
                                                        r.title && i.push({
                                                            id: c.NATIVE.ASSET_ID.TITLE,
                                                            required: r.title.required ? 1 : 0,
                                                            title: {
                                                                len: r.title.len || 25
                                                            }
                                                        });
                                                        r.image && i.push({
                                                            id: c.NATIVE.ASSET_ID.IMAGE,
                                                            required: r.image.required ? 1 : 0,
                                                            img: A(r.image, c.NATIVE.IMAGE_TYPE.MAIN)
                                                        });
                                                        r.icon && i.push({
                                                            id: c.NATIVE.ASSET_ID.ICON,
                                                            required: r.icon.required ? 1 : 0,
                                                            img: A(r.icon, c.NATIVE.IMAGE_TYPE.ICON)
                                                        });
                                                        r.sponsoredBy && i.push({
                                                            id: c.NATIVE.ASSET_ID.SPONSORED,
                                                            required: r.sponsoredBy.required ? 1 : 0,
                                                            data: {
                                                                type: c.NATIVE.DATA_ASSET_TYPE.SPONSORED,
                                                                len: r.sponsoredBy.len
                                                            }
                                                        });
                                                        r.body && i.push({
                                                            id: c.NATIVE.ASSET_ID.BODY,
                                                            required: r.body.request ? 1 : 0,
                                                            data: {
                                                                type: c.NATIVE.DATA_ASSET_TYPE.DESC,
                                                                len: r.body.len
                                                            }
                                                        });
                                                        r.cta && i.push({
                                                            id: c.NATIVE.ASSET_ID.CTA,
                                                            required: r.cta.required ? 1 : 0,
                                                            data: {
                                                                type: c.NATIVE.DATA_ASSET_TYPE.CTA_TEXT,
                                                                len: r.cta.len
                                                            }
                                                        });
                                                        return i
                                                    })(e)
                                                },
                                                ver: "1.1"
                                            }
                                        })(e),
                                        tagid: e.adUnitCode.toString()
                                    },
                                    i = parseFloat(e.params.bidfloor);
                                i && (r.bidfloor = i);
                                return r
                            })(e)
                        })),
                        site: (function(e, r) {
                            return {
                                publisher: {
                                    id: (e && 0 < e.length ? e[0].params.publisherId : "unknown").toString()
                                },
                                page: r.refererInfo.referer,
                                name: a.getOrigin()
                            }
                        })(e, r),
                        cur: p,
                        test: e[0].params.test || 0,
                        source: {
                            tid: e[0].transactionId
                        }
                    };
                    if (r && r.gdprConsent && r.gdprConsent.gdprApplies) {
                        var t = r.gdprConsent.consentString ? r.gdprConsent.consentString.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : "",
                            n = r.gdprConsent.gdprApplies ? 1 : 0;
                        i.regs = {
                            ext: {
                                gdpr: n
                            }
                        }, i.user = {
                            ext: {
                                consent: t
                            }
                        }
                    }
                    return {
                        method: "POST",
                        url: "https://" + e[0].params.region + ".creativecdn.com/bidder/prebid/bids",
                        data: JSON.stringify(i)
                    }
                },
                interpretResponse: function(e, r) {
                    var i = e.body;
                    if (!a.isArray(i)) return [];
                    var t = [];
                    return i.forEach((function(e) {
                        0 !== e.price && (0 === e.adm.indexOf("{") ? t.push(function(e) {
                            return {
                                requestId: e.impid,
                                mediaType: n.NATIVE,
                                cpm: e.price,
                                creativeId: e.adid,
                                width: 1,
                                height: 1,
                                ttl: 55,
                                netRevenue: !0,
                                currency: "USD",
                                native: (function(e) {
                                    var r = JSON.parse(e).native,
                                        i = {
                                            clickUrl: encodeURIComponent(r.link.url),
                                            impressionTrackers: r.imptrackers
                                        };
                                    return r.assets.forEach((function(e) {
                                        switch (e.id) {
                                            case c.NATIVE.ASSET_ID.TITLE:
                                                i.title = e.title.text;
                                                break;
                                            case c.NATIVE.ASSET_ID.IMAGE:
                                                i.image = {
                                                    url: encodeURIComponent(e.img.url),
                                                    width: e.img.w,
                                                    height: e.img.h
                                                };
                                                break;
                                            case c.NATIVE.ASSET_ID.ICON:
                                                i.icon = {
                                                    url: encodeURIComponent(e.img.url),
                                                    width: e.img.w,
                                                    height: e.img.h
                                                };
                                                break;
                                            case c.NATIVE.ASSET_ID.BODY:
                                                i.body = e.data.value;
                                                break;
                                            case c.NATIVE.ASSET_ID.SPONSORED:
                                                i.sponsoredBy = e.data.value;
                                                break;
                                            case c.NATIVE.ASSET_ID.CTA:
                                                i.cta = e.data.value
                                        }
                                    })), i
                                })(e.adm)
                            }
                        }(e)) : t.push(function(e) {
                            return {
                                requestId: e.impid,
                                mediaType: n.BANNER,
                                cpm: e.price,
                                creativeId: e.adid,
                                ad: e.adm,
                                width: e.w,
                                height: e.h,
                                ttl: 55,
                                netRevenue: !0,
                                currency: "USD"
                            }
                        }(e)))
                    })), t
                }
            };

        function A(e, r) {
            var i = {
                type: r
            };
            if (e.aspect_ratios) {
                var t = e.aspect_ratios[0],
                    n = t.min_width || 100;
                i.wmin = n, i.hmin = n / t.ratio_width * t.ratio_height
            }
            if (e.sizes) {
                var a = Array.isArray(e.sizes[0]) ? e.sizes[0] : e.sizes;
                i.w = a[0], i.h = a[1]
            }
            return i
        }(0, s.registerBidder)(T)
    },
    493: function(e, r) {}
}, [491]);
instBidChunk([51], {
    496: function(e, r, t) {
        t(497), e.exports = t(498)
    },
    497: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = r.SYNC_ENDPOINT = r.VIDEO_ENDPOINT = r.FASTLANE_ENDPOINT = void 0;
        var u = function(e, r) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, r) {
                    var t = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return t
                })(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        r.hasVideoMediaType = x, r.masSizeOrdering = h, r.determineRubiconVideoSizeId = I, r.resetUserSync = function() {
            A = !1
        };
        var c = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            i = t(1),
            l = t(3),
            f = t(2);
        var v = "pbjs_lite_v1.34.0";
        var a = r.FASTLANE_ENDPOINT = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            s = r.VIDEO_ENDPOINT = "//fastlane-adv.rubiconproject.com/v1/auction/video",
            n = r.SYNC_ENDPOINT = "https://eus.rubiconproject.com/usync.html",
            y = {
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
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                159: "320x250",
                195: "600x300",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                229: "320x180",
                232: "580x400",
                257: "400x600"
            };
        c._each(y, (function(e, r) {
            return y[e] = r
        }));
        var d = r.spec = {
            code: "rubicon",
            aliases: ["rubiconLite"],
            supportedMediaTypes: [f.BANNER, f.VIDEO],
            isBidRequestValid: function(e) {
                return "object" === p(e.params) && (!!/^\d+$/.test(e.params.accountId) && !!_(e, !0))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter((function(e) {
                        return "video" === _(e)
                    })).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = e.params,
                            t = b(e, "video"),
                            i = {
                                page_url: m(e, o),
                                resolution: g(),
                                account_id: r.accountId,
                                integration: v,
                                "x_source.tid": e.transactionId,
                                timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                                stash_creatives: !0,
                                slots: []
                            },
                            n = {
                                site_id: r.siteId,
                                zone_id: r.zoneId,
                                position: "atf" === r.position || "btf" === r.position ? r.position : "unknown",
                                floor: .01 < parseFloat(r.floor) ? r.floor : .01,
                                element_id: e.adUnitCode,
                                name: e.adUnitCode,
                                width: t[0],
                                height: t[1],
                                size_id: I(e)
                            };
                        return r.video && (i.ae_pass_through_parameters = r.video.aeParams, n.language = r.video.language), r.inventory && "object" === p(r.inventory) && (n.inventory = r.inventory), r.keywords && Array.isArray(r.keywords) && (n.keywords = r.keywords), r.visitor && "object" === p(r.visitor) && (n.visitor = r.visitor), i.slots.push(n), o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i.gdpr = Number(o.gdprConsent.gdprApplies)), i.gdpr_consent = o.gdprConsent.consentString), {
                            method: "POST",
                            url: s,
                            data: i,
                            bidRequest: e
                        }
                    }));
                if (!0 !== l.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter((function(e) {
                    return "banner" === _(e)
                })).map((function(e) {
                    var i = d.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: a,
                        data: d.getOrderedParams(i).reduce((function(e, r) {
                            var t = i[r];
                            return c.isStr(t) && "" !== t || c.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                        }), "") + "slots=1&rand=" + Math.random(),
                        bidRequest: e
                    }
                })));
                else {
                    var n = e.filter((function(e) {
                        return "banner" === _(e)
                    })).reduce((function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }), {});
                    r = t.concat(Object.keys(n).map((function(e) {
                        var r = n[e];
                        10 < r.length && (c.logWarn("Rubicon bid adapter Warning: single request mode has a limit of 10 bids: " + (r.length - 10) + " bids were not sent"), r = r.slice(0, 10));
                        var i = d.combineSlotUrlParams(r.map((function(e) {
                            return d.createSlotParams(e, o)
                        })));
                        return {
                            method: "GET",
                            url: a,
                            data: d.getOrderedParams(i).reduce((function(e, r) {
                                var t = i[r];
                                return c.isStr(t) && "" !== t || c.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                            }), "") + "slots=" + r.length + "&rand=" + Math.random(),
                            bidRequest: r
                        }
                    })))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter((function(e) {
                        return r.test(e)
                    }))).concat(Object.keys(e).filter((function(e) {
                        return t.test(e)
                    }))).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter((function(e) {
                    return -1 === i.indexOf(e)
                })))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        })), r
                    }), {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach((function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                })), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = b(e, "banner"),
                    n = t.latLong || [],
                    o = u(n, 2),
                    a = o[0],
                    s = o[1],
                    d = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: "atf" === t.position || "btf" === t.position ? t.position : "unknown",
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "https:" === location.protocol ? "1" : "0",
                        tk_flint: v,
                        "x_source.tid": e.transactionId,
                        p_screen_res: g(),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: m(e, r)
                    };
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)), d.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === p(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                    null != t.visitor[e] && (d["tg_v." + e] = t.visitor[e].toString())
                })), null !== t.inventory && "object" === p(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                    null != t.inventory[e] && (d["tg_i." + e] = t.inventory[e].toString())
                }));
                var c = (function() {
                    var e = (function() {
                        var e = window.DigiTrust && (l.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                            member: "T9QSFKPDN9"
                        }));
                        return e && e.success && e.identity || null
                    })();
                    if (!e || e.privacy && e.privacy.optout) return [];
                    return {
                        "dt.id": e.id,
                        "dt.keyv": e.keyv,
                        "dt.pref": 0
                    }
                })();
                return Object.keys(c).forEach((function(e) {
                    d[e] = c[e]
                })), d
            },
            interpretResponse: function(s, e) {
                var d = e.bidRequest;
                if (!(s = s.body) || "object" !== (void 0 === s ? "undefined" : p(s))) return [];
                var r = s.ads;
                return "object" !== (void 0 === d ? "undefined" : p(d)) || Array.isArray(d) || "video" !== _(d) || "object" !== (void 0 === r ? "undefined" : p(r)) || (r = r[d.adUnitCode]), !Array.isArray(r) || r.length < 1 ? [] : r.reduce((function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i = Array.isArray(d) ? d[t] : d;
                    if (i && "object" === (void 0 === i ? "undefined" : p(i))) {
                        var n = {
                            requestId: i.bidId,
                            currency: "USD",
                            creativeId: r.creative_id || (r.network || "") + "-" + (r.advertiser || ""),
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: l.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (n.mediaType = r.creative_type), r.creative_type === f.VIDEO) n.width = i.params.video.playerWidth, n.height = i.params.video.playerHeight, n.vastUrl = r.creative_depot_url, n.impression_id = r.impression_id, n.videoCacheKey = r.impression_id;
                        else {
                            n.ad = (function(e, r) {
                                return "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r + "'>\n<script type='text/javascript'>" + e + "<\/script>\n</div>\n</body>\n</html>"
                            })(r.script, r.impression_id);
                            var o = y[r.size_id].split("x").map((function(e) {
                                    return Number(e)
                                })),
                                a = u(o, 2);
                            n.width = a[0], n.height = a[1]
                        }
                        n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                            return e[r.key] = r.values[0], e
                        }), {
                            rpfl_elemid: i.adUnitCode
                        }), e.push(n)
                    } else c.logError("Rubicon bid adapter Error: bidRequest undefined at index position:" + t, d, s);
                    return e
                }), []).sort((function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                }))
            },
            getUserSyncs: function(e, r, t) {
                if (!A && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=" + Number(t.gdprApplies) + "&gdpr_consent=" + t.consentString : i += "?gdpr_consent=" + t.consentString), A = !0, {
                        type: "iframe",
                        url: n + i
                    }
                }
            },
            transformBidParams: function(e, r) {
                return c.convertTypes({
                    accountId: "number",
                    siteId: "number",
                    zoneId: "number"
                }, e)
            }
        };

        function g() {
            return [window.screen.width, window.screen.height].join("x")
        }

        function m(e, r) {
            var t = l.config.getConfig("pageUrl");
            return t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer, e.params.secure ? t.replace(/^http:/i, "https:") : t
        }

        function b(e, r) {
            var t = e.params;
            if ("video" === r) {
                var i = [];
                return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray(c.deepAccess(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i
            }
            var n = [];
            return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== c.deepAccess(e, "mediaTypes.banner.sizes") ? n = o(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = o(e.sizes) : c.logWarn("Warning: no sizes are setup or found"), h(n)
        }

        function o(e) {
            return c.parseSizesInput(e).reduce((function(e, r) {
                var t = parseInt(y[r], 10);
                return t && e.push(t), e
            }), [])
        }

        function x(e) {
            return "object" === p(c.deepAccess(e, "params.video")) && (e.mediaType === f.VIDEO || void 0 !== c.deepAccess(e, "mediaTypes." + f.VIDEO))
        }

        function _(e, r) {
            var t = 1 < arguments.length && void 0 !== r && r;
            if (x(e)) {
                if (void 0 !== c.deepAccess(e, "mediaTypes." + f.VIDEO)) {
                    if (-1 === ["outstream", "instream"].indexOf(c.deepAccess(e, "mediaTypes." + f.VIDEO + ".context"))) return void(t && c.logError("Rubicon bid adapter requires mediaTypes.video.context to be one of outstream or instream"))
                } else if (t && c.logWarn("Rubicon video bid requested using legacy `adUnit.mediaType = `video``\nThis is deprecated\nPlease move towards the PBJS standard using mediaTypes object!"), isNaN(parseInt(c.deepAccess(e, "params.video.size_id")))) return void(t && c.logError("Rubicon bid adapter needs params.video.size_id to be declared and an integer in order to process a legacy video request using mediaType == video"));
                return b(e, "video").length < 2 ? void(t && c.logError("Rubicon bid adapter could not determine the playerSize of the video\nplayerWidth and playerHeight are inferred from one of params.playerWidth/playerHeight or mediaTypes.video.playerSize or adUnit.sizes, in that order")) : (t && c.logMessage("Rubicon bid adapter making video request for adUnit", e.adUnitCode), "video")
            }
            return 0 === b(e, "banner").length ? void(t && c.logError("Rubicon bid adapter could not determine the sizes for a banner request\nThey are inferred from one of params.sizes or mediaTypes.banner.sizes or adUnit.sizes, in that order")) : (t && c.logMessage("Rubicon bid adapter making banner request for adUnit", e.adUnitCode), "banner")
        }

        function h(e) {
            var n = [15, 2, 9];
            return e.sort((function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            }))
        }

        function I(e) {
            var r = parseInt(c.deepAccess(e, "params.video.size_id"));
            return isNaN(r) ? "outstream" === c.deepAccess(e, "mediaTypes." + f.VIDEO + ".context") ? 203 : 201 : r
        }
        var A = !1;
        (0, i.registerBidder)(d)
    },
    498: function(e, r) {}
}, [496]);
instBidChunk([46], {
    514: function(e, t, r) {
        r(515), e.exports = r(516)
    },
    515: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.sharethroughAdapterSpec = void 0;
        var n = r(1),
            s = "sharethrough",
            a = document.location.protocol + "//btlr.sharethrough.com/header-bid/v1",
            i = t.sharethroughAdapterSpec = {
                code: s,
                isBidRequestValid: function(e) {
                    return !!e.params.pkey && e.bidder === s
                },
                buildRequests: function(e, n) {
                    return e.map((function(e) {
                        var t = {
                            bidId: e.bidId,
                            placement_key: e.params.pkey,
                            hbVersion: "1.34.0",
                            strVersion: "3.0.1",
                            hbSource: "prebid",
                            consent_required: !1
                        };
                        n && n.gdprConsent && n.gdprConsent.consentString && (t.consent_string = n.gdprConsent.consentString), n && n.gdprConsent && (t.consent_required = !!n.gdprConsent.gdprApplies);
                        var r = {
                            stayInIframe: e.params.iframe,
                            iframeSize: e.params.iframeSize,
                            sizes: e.sizes
                        };
                        return {
                            method: "GET",
                            url: a,
                            data: t,
                            strData: r
                        }
                    }))
                },
                interpretResponse: function(e, t) {
                    var r = e.body;
                    if (!r || !r.creatives || !r.creatives.length) return [];
                    var n = r.creatives[0],
                        s = [0, 0];
                    return t.strData.stayInIframe && (s = null != t.strData.iframeSize ? t.strData.iframeSize : (function(e) {
                        function r(e) {
                            return e[0] * e[1]
                        }
                        return e.reduce((function(e, t) {
                            return r(t) > r(e) ? t : e
                        }), [0, 0])
                    })(t.strData.sizes)), [{
                        requestId: t.data.bidId,
                        width: s[0],
                        height: s[1],
                        cpm: n.cpm,
                        creativeId: n.creative.creative_key,
                        dealId: n.creative.deal_id,
                        currency: "USD",
                        netRevenue: !0,
                        ttl: 360,
                        ad: (function(e, t) {
                            var r = "str_response_" + t.data.bidId,
                                n = '\n    <div data-str-native-key="' + t.data.placement_key + '" data-stx-response-name="' + r + '">\n    </div>\n    <script>var ' + r + ' = "' + (function(e) {
                                    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
                                        return String.fromCharCode("0x" + t)
                                    })))
                                })(JSON.stringify(e)) + '"<\/script>\n  ';
                            t.strData.stayInIframe ? n += '<script src="//native.sharethrough.com/assets/sfp.js"><\/script>' : n += "\n      <script src=\"//native.sharethrough.com/assets/sfp-set-targeting.js\"><\/script>\n      <script>\n        (function() {\n          if (!(window.STR && window.STR.Tag) && !(window.top.STR && window.top.STR.Tag)) {\n            const sfp_js = document.createElement('script');\n            sfp_js.src = \"//native.sharethrough.com/assets/sfp.js\";\n            sfp_js.type = 'text/javascript';\n            sfp_js.charset = 'utf-8';\n            try {\n                window.top.document.getElementsByTagName('body')[0].appendChild(sfp_js);\n            } catch (e) {\n              console.log(e);\n            }\n          }\n        })()\n    <\/script>";
                            return n
                        })(r, t)
                    }]
                },
                getUserSyncs: function(e, t) {
                    var r = [];
                    return e.pixelEnabled && 0 < t.length && t[0].body && t[0].body.cookieSyncUrls && t[0].body.cookieSyncUrls.forEach((function(e) {
                        r.push({
                            type: "image",
                            url: e
                        })
                    })), r
                }
            };
        (0, n.registerBidder)(i)
    },
    516: function(e, t) {}
}, [514]);
instBidChunk([45], {
    520: function(r, e, a) {
        a(521), r.exports = a(522)
    },
    521: function(r, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.spec = void 0;
        var i = (function(r) {
                {
                    if (r && r.__esModule) return r;
                    var e = {};
                    if (null != r)
                        for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
                    return e.default = r, e
                }
            })(a(0)),
            d = a(3),
            t = a(1);
        var n = e.spec = {
            code: "smartadserver",
            aliases: ["smart"],
            isBidRequestValid: function(r) {
                return !!(r.params && r.params.siteId && r.params.pageId && r.params.formatId && r.params.domain)
            },
            buildRequests: function(r, t) {
                return r.map((function(r) {
                    var e = {
                        siteid: r.params.siteId,
                        pageid: r.params.pageId,
                        formatid: r.params.formatId,
                        currencyCode: d.config.getConfig("currency.adServerCurrency"),
                        bidfloor: r.params.bidfloor || 0,
                        targeting: r.params.target && "" != r.params.target ? r.params.target : void 0,
                        buid: r.params.buId && "" != r.params.buId ? r.params.buId : void 0,
                        appname: r.params.appName && "" != r.params.appName ? r.params.appName : void 0,
                        ckid: r.params.ckId || 0,
                        tagId: r.adUnitCode,
                        sizes: r.sizes.map((function(r) {
                            return {
                                w: r[0],
                                h: r[1]
                            }
                        })),
                        pageDomain: i.getTopWindowUrl(),
                        transactionId: r.transactionId,
                        timeout: d.config.getConfig("bidderTimeout"),
                        bidId: r.bidId,
                        prebidVersion: "1.34.0"
                    };
                    t && t.gdprConsent && (e.gdpr_consent = t.gdprConsent.consentString, e.gdpr = t.gdprConsent.gdprApplies);
                    var a = JSON.stringify(e);
                    return {
                        method: "POST",
                        url: r.params.domain + "/prebid/v1",
                        data: a
                    }
                }))
            },
            interpretResponse: function(r, e) {
                var a = [],
                    t = r.body;
                try {
                    if (t) {
                        var d = {
                            requestId: JSON.parse(e.data).bidId,
                            cpm: t.cpm,
                            width: t.width,
                            height: t.height,
                            creativeId: t.creativeId,
                            dealId: t.dealId,
                            currency: t.currency,
                            netRevenue: t.isNetCpm,
                            ttl: t.ttl,
                            referrer: i.getTopWindowUrl(),
                            adUrl: t.adUrl,
                            ad: t.ad
                        };
                        a.push(d)
                    }
                } catch (r) {
                    i.logError("Error while parsing smart server response", r)
                }
                return a
            },
            getUserSyncs: function(r, e) {
                var a = [];
                return r.iframeEnabled && 0 < e.length && a.push({
                    type: "iframe",
                    url: e[0].body.cSyncUrl
                }), a
            }
        };
        (0, t.registerBidder)(n)
    },
    522: function(r, e) {}
}, [520]);
instBidChunk([42], {
    529: function(e, r, t) {
        t(530), e.exports = t(531)
    },
    530: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r._isInbounds = r.spec = void 0;
        var b = function(e, r) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, r) {
                    var t = [],
                        n = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (t.push(s.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !n && a.return && a.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return t
                })(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            };
        r._getPlatform = g;
        var n = t(1),
            s = t(0),
            i = t(2),
            a = t(3);

        function d(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }
        var u = (0, s.generateUUID)(),
            c = r.spec = {
                code: "sonobi",
                supportedMediaTypes: [i.BANNER, i.VIDEO],
                isBidRequestValid: function(e) {
                    return !(!e.params || !e.params.ad_unit && !e.params.placement_id || !e.params.sizes && !e.sizes)
                },
                buildRequests: function(e, r) {
                    var t = e.map((function(e) {
                            var r = (function(e) {
                                if (e.params.ad_unit) return e.params.ad_unit;
                                return e.params.placement_id
                            })(e);
                            return /^[\/]?[\d]+[[\/].+[\/]?]?$/.test(r) ? d({}, (r = "/" === r.charAt(0) ? r : "/" + r) + "|" + e.bidId, "" + p(e) + f(e)) : /^[0-9a-fA-F]{20}$/.test(r) && 20 === r.length ? d({}, e.bidId, r + "|" + p(e) + f(e)) : void(0, s.logError)("The ad unit code or Sonobi Placement id for slot " + e.bidId + " is invalid")
                        })),
                        n = {};
                    t.forEach((function(e) {
                        o(n, e)
                    }));
                    var i = {
                        key_maker: JSON.stringify(n),
                        ref: (0, s.getTopWindowLocation)().href,
                        s: (0, s.generateUUID)(),
                        pv: u,
                        vp: g(),
                        lib_name: "prebid",
                        lib_v: "1.34.0",
                        us: 0
                    };
                    return a.config.getConfig("userSync") && a.config.getConfig("userSync").syncsPerBidder && (i.us = a.config.getConfig("userSync").syncsPerBidder), e[0].params.hfa && (i.hfa = e[0].params.hfa), e[0].params.referrer && (i.ref = e[0].params.referrer), r && r.gdprConsent && (i.gdpr = r.gdprConsent.gdprApplies ? "true" : "false", r.gdprConsent.consentString && (i.consent_string = r.gdprConsent.consentString)), (0, s.isEmpty)(n) ? null : {
                        method: "GET",
                        url: "https://apex.go.sonobi.com/trinity.json",
                        withCredentials: !0,
                        data: i,
                        bidderRequests: e
                    }
                },
                interpretResponse: function(e, r) {
                    r.bidderRequests;
                    var f = e.body,
                        l = [];
                    return 0 === Object.keys(f.slots).length || Object.keys(f.slots).forEach((function(e) {
                        var r = f.slots[e],
                            t = (function(e) {
                                return e.split("|").slice(-1)[0]
                            })(e),
                            n = "video" === r.sbi_ct ? "video" : null,
                            i = v(n);
                        if (r.sbi_aid && r.sbi_mouse && r.sbi_size) {
                            var o = r.sbi_size.split("x"),
                                s = b(o, 2),
                                a = s[0],
                                d = void 0 === a ? 1 : a,
                                u = s[1],
                                c = void 0 === u ? 1 : u,
                                p = {
                                    requestId: t,
                                    cpm: Number(r.sbi_mouse),
                                    width: Number(d),
                                    height: Number(c),
                                    ad: i(f.sbi_dc, r.sbi_aid),
                                    ttl: 500,
                                    creativeId: r.sbi_crid || r.sbi_aid,
                                    aid: r.sbi_aid,
                                    netRevenue: !0,
                                    currency: "USD"
                                };
                            r.sbi_dozer && (p.dealId = r.sbi_dozer), "video" === n && (p.mediaType = "video", p.vastUrl = i(f.sbi_dc, r.sbi_aid), delete p.ad, delete p.width, delete p.height), l.push(p)
                        }
                    })), l
                },
                getUserSyncs: function(e, r) {
                    var t = [];
                    try {
                        e.pixelEnabled && r[0].body.sbi_px.forEach((function(e) {
                            t.push({
                                type: e.type,
                                url: e.url
                            })
                        }))
                    } catch (e) {}
                    return t
                }
            };

        function p(e) {
            return e.params.sizes ? (0, s.parseSizesInput)(e.params.sizes).join(",") : (0, s.parseSizesInput)(e.sizes).join(",")
        }

        function f(e) {
            return e.params.floor ? "|f=" + e.params.floor : ""
        }
        var v = function(t) {
            return function(e, r) {
                return "video" === t ? (function(e, r) {
                    return "https://" + e + "apex.go.sonobi.com/vast.xml?vid=" + r + "&ref=" + encodeURIComponent((0, s.getTopWindowLocation)().href)
                })(e, r) : '<script type="text/javascript" src="' + ("https://" + e + "apex.go.sonobi.com/sbi.js?aid=" + r + "&as=null&ref=" + encodeURIComponent((0, s.getTopWindowLocation)().href)) + '"><\/script>'
            }
        };
        var l = r._isInbounds = function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : window;
            return function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                    r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_SAFE_INTEGER;
                return t.innerWidth >= e && t.innerWidth < r
            }
        };

        function g() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window,
                r = l(e),
                t = 992,
                n = 768;
            return r(0, 768) ? "mobile" : r(n, t) ? "tablet" : "desktop"
        }(0, n.registerBidder)(c)
    },
    531: function(e, r) {}
}, [529]);
instBidChunk([41], {
    532: function(e, r, t) {
        t(533), e.exports = t(534)
    },
    533: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var s = function(e, r) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, r) {
                    var t = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return t
                })(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            d = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            n = t(1),
            c = t(3),
            a = t(2),
            p = t(4);
        var u = "c.deployads.com";
        var i = r.spec = {
            code: "sortable",
            supportedMediaTypes: [a.BANNER],
            isBidRequestValid: function(r) {
                var e = c.config.getConfig("sortable"),
                    t = e && !!e.siteId || r.params.siteId,
                    n = !r.params.floor || d.isNumber(r.params.floor),
                    i = /\d+x\d+/,
                    a = !r.params.floorSizeMap || d.isPlainObject(r.params.floorSizeMap) && Object.keys(r.params.floorSizeMap).every((function(e) {
                        return e.match(i) && d.isNumber(r.params.floorSizeMap[e])
                    })),
                    o = !r.params.keywords || d.isPlainObject(r.params.keywords) && Object.keys(r.params.keywords).every((function(e) {
                        return d.isStr(e) && d.isStr(r.params.keywords[e])
                    }));
                return !!(r.params.tagId && t && n && a && o && r.sizes && r.sizes.every((function(e) {
                    return 2 == e.length && e.every((function(e) {
                        return d.isNumber(e)
                    }))
                })))
            },
            buildRequests: function(e, r) {
                var t = (c.config.getConfig("sortable") || {}).siteId,
                    n = d.getTopWindowLocation(),
                    i = d._map(e, (function(e) {
                        var t = {
                            id: e.bidId,
                            tagid: e.params.tagId,
                            banner: {
                                format: d._map(e.sizes, (function(e) {
                                    var r = s(e, 2);
                                    return {
                                        w: r[0],
                                        h: r[1]
                                    }
                                }))
                            },
                            ext: {}
                        };
                        return e.params.floor && (t.bidfloor = e.params.floor), e.params.keywords && (t.ext.keywords = e.params.keywords), e.params.bidderParams && d._each(e.params.bidderParams, (function(e, r) {
                            t.ext[r] = e
                        })), e.params.floorSizeMap && (t.ext.floorSizeMap = e.params.floorSizeMap), t
                    })),
                    a = r && r.gdprConsent,
                    o = {
                        id: d.getUniqueIdentifierStr(),
                        imp: i,
                        site: {
                            domain: n.hostname,
                            page: n.href,
                            ref: d.getTopWindowReferrer(),
                            publisher: {
                                id: t || e[0].params.siteId
                            },
                            device: {
                                w: screen.width,
                                h: screen.height
                            }
                        }
                    };
                return a && (o.user = {
                    ext: {
                        consent: a.consentString
                    }
                }, o.regs = {
                    ext: {
                        gdpr: a.gdprApplies ? 1 : 0
                    }
                }), {
                    method: "POST",
                    url: "//" + u + "/openrtb2/auction?src=" + p.REPO_AND_VERSION + "&host=" + n.host,
                    data: JSON.stringify(o),
                    options: {
                        contentType: "text/plain"
                    }
                }
            },
            interpretResponse: function(e) {
                var r = e.body,
                    t = r.id,
                    n = r.seatbid,
                    i = [];
                return t && n && d._each(n, (function(e) {
                    d._each(e.bid, (function(e) {
                        var r = {
                            requestId: e.impid,
                            cpm: parseFloat(e.price),
                            width: parseInt(e.w),
                            height: parseInt(e.h),
                            creativeId: e.crid || e.id,
                            dealId: e.dealid || null,
                            currency: "USD",
                            netRevenue: !0,
                            mediaType: a.BANNER,
                            ttl: 60
                        };
                        e.adm && e.nurl ? (r.ad = e.adm, r.ad += d.createTrackPixelHtml(decodeURIComponent(e.nurl))) : e.adm ? r.ad = e.adm : e.nurl && (r.adUrl = e.nurl), i.push(r)
                    }))
                })), i
            },
            getUserSyncs: function(e, r, t) {
                var n = c.config.getConfig("sortable");
                if (e.iframeEnabled && n && n.siteId) {
                    var i = "//" + u + "/sync?f=html&s=" + n.siteId + "&u=" + encodeURIComponent(function() {
                        var e = window.location.href;
                        if (e) return e;
                        if (window.location.ancestorOrigins && 0 < window.location.ancestorOrigins.length) {
                            var r = window.location.ancestorOrigins.length;
                            e = window.location.ancestorOrigins[r - 1]
                        }
                        return e.toString()
                    }());
                    return t && (syncurl += "&g=" + (t.gdprApplies ? 1 : 0), syncurl += "&cs=" + encodeURIComponent(t.consentString || "")), [{
                        type: "iframe",
                        url: i
                    }]
                }
            },
            onTimeout: function(e) {
                fetch("//" + u + "/prebid/timeout", {
                    method: "POST",
                    body: JSON.stringify(e),
                    mode: "no-cors",
                    headers: new Headers({
                        "Content-Type": "text/plain"
                    })
                })
            }
        };
        (0, n.registerBidder)(i)
    },
    534: function(e, r) {}
}, [532]);
instBidChunk([40], {
    535: function(r, e, t) {
        t(536), r.exports = t(537)
    },
    536: function(r, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.LogError = e.spec = void 0;
        var i = function(r, e, t) {
            return e && n(r.prototype, e), t && n(r, t), r
        };

        function n(r, e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i)
            }
        }
        var o = (function(r) {
                {
                    if (r && r.__esModule) return r;
                    var e = {};
                    if (null != r)
                        for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
                    return e.default = r, e
                }
            })(t(0)),
            a = t(1),
            s = t(2),
            d = t(4);
        var u = [],
            p = e.spec = {
                code: "sovrn",
                supportedMediaTypes: [s.BANNER],
                isBidRequestValid: function(r) {
                    return !(!r.params.tagid || isNaN(parseFloat(r.params.tagid)) || !isFinite(r.params.tagid))
                },
                buildRequests: function(e, t) {
                    try {
                        var r = o.getTopWindowLocation(),
                            i = [],
                            n = void 0;
                        o._each(e, (function(r) {
                            n = n || o.getBidIdParameter("iv", r.params), r.sizes = o.isArray(r.sizes) && o.isArray(r.sizes[0]) ? r.sizes : [r.sizes], r.sizes = r.sizes.filter((function(r) {
                                return o.isArray(r)
                            }));
                            var e = r.sizes.map((function(r) {
                                return {
                                    w: parseInt(r[0], 10),
                                    h: parseInt(r[1], 10)
                                }
                            }));
                            i.push({
                                id: r.bidId,
                                banner: {
                                    format: e,
                                    w: 1,
                                    h: 1
                                },
                                tagid: String(o.getBidIdParameter("tagid", r.params)),
                                bidfloor: o.getBidIdParameter("bidfloor", r.params)
                            })
                        }));
                        var a = {
                            id: o.getUniqueIdentifierStr(),
                            imp: i,
                            site: {
                                domain: r.host,
                                page: r.host + r.pathname + r.search + r.hash
                            }
                        };
                        t && t.gdprConsent && (a.regs = {
                            ext: {
                                gdpr: +t.gdprConsent.gdprApplies
                            }
                        }, a.user = {
                            ext: {
                                consent: t.gdprConsent.consentString
                            }
                        });
                        var s = "//ap.lijit.com/rtb/bid?src=" + d.REPO_AND_VERSION;
                        return n && (s += "&iv=" + n), {
                            method: "POST",
                            url: s,
                            data: JSON.stringify(a),
                            options: {
                                contentType: "text/plain"
                            }
                        }
                    } catch (r) {
                        new c(r, {
                            bidReqs: e,
                            bidderRequest: t
                        }).append()
                    }
                },
                interpretResponse: function(r) {
                    var e = r.body,
                        t = e.id,
                        i = e.seatbid;
                    try {
                        var n = [];
                        return t && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map((function(r) {
                            n.push({
                                requestId: r.impid,
                                cpm: parseFloat(r.price),
                                width: parseInt(r.w),
                                height: parseInt(r.h),
                                creativeId: r.crid || r.id,
                                dealId: r.dealid || null,
                                currency: "USD",
                                netRevenue: !0,
                                mediaType: s.BANNER,
                                ad: decodeURIComponent(r.adm + '<img src="' + r.nurl + '">'),
                                ttl: 60
                            })
                        })), n
                    } catch (r) {
                        new c(r, {
                            id: t,
                            seatbid: i
                        }).append()
                    }
                },
                getUserSyncs: function(e, r, t) {
                    try {
                        var i = [];
                        if (r && 0 !== r.length && e.iframeEnabled) {
                            var n = r.filter((function(r) {
                                    return r.body && r.body.ext && r.body.ext.iid
                                })).map((function(r) {
                                    return r.body.ext.iid
                                })),
                                a = "";
                            t && t.gdprApplies && "string" == typeof t.consentString && (a = t.consentString), n[0] && i.push({
                                type: "iframe",
                                url: "//ap.lijit.com/beacon?informer=" + n[0] + "&gdpr_consent=" + a
                            })
                        }
                        return u.length && e.pixelEnabled && (i = i.concat(u)), i
                    } catch (r) {
                        return e.pixelEnabled ? u : []
                    }
                }
            },
            c = e.LogError = (i(l, [{
                key: "buildErrorString",
                value: function(r) {
                    return "https://pcb.aws.lijit.com/c?b=" + btoa(JSON.stringify(r))
                }
            }, {
                key: "append",
                value: function() {
                    var r = this.buildErrorString(this.error);
                    2083 < r.length && (delete this.error.d, 2083 < (r = this.buildErrorString(this.error)).length && (delete this.error.s, 2083 < (r = this.buildErrorString(this.error)).length && (r = this.buildErrorString({
                        m: "unknown error message",
                        t: this.error.t,
                        u: this.error.u
                    }))));
                    var e = {
                        type: "image",
                        url: r
                    };
                    u.push(e)
                }
            }], [{
                key: "getErrPxls",
                value: function() {
                    return u
                }
            }]), l);

        function l(r, e) {
            !(function(r, e) {
                if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, l), o.logError(r), this.error = {}, this.error.t = o.timestamp(), this.error.m = r.message, this.error.s = r.stack, this.error.d = e, this.error.v = d.REPO_AND_VERSION, this.error.u = o.getTopWindowLocation().href, this.error.ua = navigator.userAgent
        }(0, a.registerBidder)(p)
    },
    537: function(r, e) {}
}, [535]);
instBidChunk([39], {
    538: function(e, r, t) {
        t(539), e.exports = t(540)
    },
    539: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            d = t(0),
            i = t(1),
            c = t(2),
            s = t(4),
            u = "//prebid.technoratimedia.com",
            a = r.spec = {
                code: "synacormedia",
                supportedMediaTypes: [c.BANNER],
                sizeMap: {},
                isBidRequestValid: function(e) {
                    return !!(e && e.params && e.params.placementId && e.params.seatId)
                },
                buildRequests: function(e, r) {
                    var i = this;
                    if (e && e.length && r) {
                        var t = r.refererInfo,
                            a = {
                                id: r.auctionId,
                                site: {
                                    domain: location.hostname,
                                    page: t.referer,
                                    ref: document.referrer
                                },
                                device: {
                                    ua: navigator.userAgent
                                },
                                imp: []
                            },
                            o = null;
                        return e.forEach((function(e, r) {
                            if (o && o !== e.params.seatId)(0, d.logWarn)("Synacormedia: there is an inconsistent seatId: " + e.params.seatId + " but only sending bid requests for " + o + ", you should double check your configuration");
                            else {
                                o = e.params.seatId;
                                var t = e.params.placementId,
                                    n = (0, d.getAdUnitSizes)(e)[0];
                                i.sizeMap[e.bidId] = n, a.imp.push({
                                    id: e.bidId,
                                    tagid: t,
                                    banner: {
                                        w: n[0],
                                        h: n[1],
                                        pos: 0
                                    }
                                })
                            }
                        })), a.imp.length && o ? {
                            method: "POST",
                            url: u + "/openrtb/bids/" + o + "?src=" + s.REPO_AND_VERSION,
                            data: a,
                            options: {
                                contentType: "application/json",
                                withCredentials: !0
                            }
                        } : void 0
                    }
                },
                interpretResponse: function(e) {
                    var a = this;
                    if (e.body && "object" == n(e.body)) {
                        var r = e.body,
                            o = r.id,
                            t = r.seatbid,
                            s = [];
                        return o && t && t.forEach((function(i) {
                            i.bid.forEach((function(t) {
                                var e = a.sizeMap[t.impid] || [0, 0],
                                    n = parseFloat(t.price),
                                    r = t.adm.replace(/\${([^}]*)}/g, (function(e, r) {
                                        switch (r) {
                                            case "AUCTION_SEAT_ID":
                                                return i.seat;
                                            case "AUCTION_ID":
                                                return o;
                                            case "AUCTION_BID_ID":
                                                return t.id;
                                            case "AUCTION_IMP_ID":
                                                return t.impid;
                                            case "AUCTION_PRICE":
                                                return n;
                                            case "AUCTION_CURRENCY":
                                                return "USD"
                                        }
                                        return e
                                    }));
                                s.push({
                                    requestId: t.impid,
                                    cpm: n,
                                    width: e[0],
                                    height: e[1],
                                    creativeId: i.seat + "~" + t.crid,
                                    currency: "USD",
                                    netRevenue: !0,
                                    mediaType: c.BANNER,
                                    ad: r,
                                    ttl: 60
                                })
                            }))
                        })), s
                    }(0, d.logWarn)("Synacormedia: server returned empty/non-json response: " + JSON.stringify(e.body))
                },
                getUserSyncs: function(e, r) {
                    var t = [];
                    return e.iframeEnabled ? t.push({
                        type: "iframe",
                        url: u + "/usersync/html?src=" + s.REPO_AND_VERSION
                    }) : (0, d.logWarn)("Synacormedia: Please enable iframe based user sync."), t
                }
            };
        (0, i.registerBidder)(a)
    },
    540: function(e, r) {}
}, [538]);
instBidChunk([32], {
    559: function(e, t, r) {
        r(560), e.exports = r(561)
    },
    560: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.spec = void 0;
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
                }
                return e
            },
            i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            y = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }
            })(r(0)),
            o = r(1),
            d = r(2);
        var v = 0,
            f = 2,
            a = t.spec = {
                code: "ucfunnel",
                ENDPOINT: "//hb.aralego.com/header",
                supportedMediaTypes: [d.BANNER, d.VIDEO, d.NATIVE],
                isBidRequestValid: function(e) {
                    var t = y.deepAccess(e, "mediaTypes.video"),
                        r = y.deepAccess(e, "mediaTypes.video.context");
                    return "object" === i(e.params) && "string" == typeof e.params.adid && (!t || "outstream" !== r || (y.logWarn("Warning: outstream video is not supported yet"), !1))
                },
                buildRequests: function(e, t) {
                    return e.map((function(e) {
                        return {
                            method: "GET",
                            url: location.protocol + a.ENDPOINT,
                            data: (function(e, t) {
                                var r = m(e),
                                    i = y.getTopWindowLocation(),
                                    o = i.host,
                                    a = i.href,
                                    n = y.getTopWindowReferrer(),
                                    d = navigator.language,
                                    s = "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                    c = y.deepAccess(e, "mediaTypes.video.context"),
                                    p = y.deepAccess(e, "mediaTypes.video"),
                                    u = {
                                        ver: "ADGENT_PREBID-2018011501",
                                        ifr: 0,
                                        bl: d,
                                        je: 1,
                                        dnt: s,
                                        host: o,
                                        u: a,
                                        ru: n,
                                        adid: y.getBidIdParameter("adid", e.params),
                                        w: r[0],
                                        h: r[1]
                                    };
                                if ("video" === e.mediaType || p) switch (c) {
                                    case "outstream":
                                        u.atype = f;
                                        break;
                                    case "instream":
                                    default:
                                        u.atype = v
                                }
                                t && t.gdprConsent && l(u, {
                                    gdpr: t.gdprConsent.gdprApplies ? 1 : 0,
                                    euconsent: t.gdprConsent.consentString
                                });
                                return u
                            })(e, t),
                            bidRequest: e
                        }
                    }))
                },
                interpretResponse: function(e, t) {
                    var r = t.bidRequest,
                        i = e ? e.body : {},
                        o = m(r),
                        a = {
                            requestId: r.bidId,
                            cpm: i.cpm || 0,
                            creativeId: i.ad_id,
                            dealId: i.deal || null,
                            currency: "USD",
                            netRevenue: !0,
                            ttl: 1e3
                        };
                    switch (i.creative_type && (a.mediaType = i.creative_type), i.creative_type) {
                        case d.NATIVE:
                            var n = i.native;
                            l(a, {
                                width: 1,
                                height: 1,
                                native: {
                                    title: n.title,
                                    body: n.desc,
                                    cta: n.ctatext,
                                    sponsoredBy: n.sponsored,
                                    image: n.image || n.image.url,
                                    icon: n.icon || n.icon.url,
                                    clickUrl: n.clickUrl,
                                    impressionTrackers: n.impressionTrackers
                                }
                            });
                            break;
                        case d.VIDEO:
                            l(a, {
                                vastUrl: i.vastUrl,
                                vastXml: i.vastXml
                            }), o && 2 === o.length && l(a, {
                                width: o[0],
                                height: o[1]
                            });
                            break;
                        case d.BANNER:
                        default:
                            l(a, {
                                width: i.width,
                                height: i.height,
                                ad: i.adm
                            })
                    }
                    return [a]
                },
                getUserSyncs: function(e) {
                    return e.iframeEnabled ? [{
                        type: "iframe",
                        url: "//cdn.aralego.com/ucfad/cookie/sync.html"
                    }] : e.pixelEnabled ? [{
                        type: "image",
                        url: "//sync.aralego.com/idSync"
                    }] : void 0
                }
            };

        function m(e) {
            var t = e.params;
            if (e.mediaType === d.VIDEO) {
                if (t.video && t.video.playerWidth && t.video.playerHeight) return [t.video.playerWidth, t.video.playerHeight]
            }
            return (function(e) {
                return y.isArray(e) && 2 === e.length && !y.isArray(e[0]) ? [parseInt(e[0], 10), parseInt(e[1], 10)] : "object" === (void 0 === e ? "undefined" : i(e)) && e.length ? e[0] : void 0
            })(e.sizes)
        }(0, o.registerBidder)(a)
    },
    561: function(e, t) {}
}, [559]);
instBid.processQueue();