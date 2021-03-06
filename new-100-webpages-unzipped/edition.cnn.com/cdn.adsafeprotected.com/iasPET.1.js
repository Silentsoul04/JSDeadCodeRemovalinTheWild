! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function(e, t) {}, function(e, t, n) {
    "use strict";
    n.r(t);
    n(0);
    var r = function(e) {
            return {
                width: e.innerWidth || -1,
                height: e.innerHeight || -1
            }
        },
        a = function(e) {
            return {
                width: e.screen && e.screen.width || -1,
                height: e.screen && e.screen.height || -1
            }
        },
        i = window,
        o = top;

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var l = new(function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), u(this, "log", null), u(this, "warn", null), u(this, "error", null), i.diagPixSentCodes = i.diagPixSentCodes || {}, this.log = this.logger.bind(this, "log"), this.warn = this.logger.bind(this, "warn"), this.error = this.logger.bind(this, "error")
            }
            var t, n, r;
            return t = e, (n = [{
                key: "getAnid",
                value: function() {
                    return i.__iasPET.pubId || ""
                }
            }, {
                key: "getSessionId",
                value: function() {
                    return i.__iasPET.sessionId || ""
                }
            }, {
                key: "resetDiagPixSentCodes",
                value: function() {
                    i.diagPixSentCodes = {}
                }
            }, {
                key: "buildQueryString",
                value: function(e, t) {
                    var n = "";
                    return e && (n = Object.keys(e).reduce(function(n, r) {
                        return n.push([r, e[r]].join(t)), n
                    }, []).join("&")), n
                }
            }, {
                key: "getQueryParamByName",
                value: function(e) {
                    var t, n, r, a, o = i.location.search && i.location.search.toLowerCase(),
                        s = o && o.indexOf(e);
                    return -1 !== s && (t = o.indexOf("=", s) + 1, n = -1 === (r = o.indexOf("&", t)) ? void 0 : r, a = decodeURIComponent(o.slice(t, n))), a
                }
            }, {
                key: "diagPix",
                value: function(e, t) {
                    var n, r, a, o;
                    if (!i.diagPixSentCodes[e]) try {
                        n = this.getAnid(), r = this.getSessionId(), i.diagPixSentCodes[e] = !0, a = {
                            code: "pet_" + e,
                            anid: n,
                            sessionId: r
                        }, t && (a.err = encodeURIComponent(t.message)), o = this.buildQueryString(a, ":"), (new i.Image).src = "//pixel.adsafeprotected.com/jsdiagnostic?" + o
                    } catch (e) {
                        l.error(e)
                    }
                }
            }, {
                key: "logger",
                value: function(e, t) {
                    var n = "background-color: ",
                        r = i.console && "function" == typeof i.console.error,
                        a = this.getQueryParamByName("iasdebug"),
                        o = a && "TRUE" === a.toUpperCase();
                    "log" === e ? n += "lightgreen" : "error" === e ? n += "pink" : "warn" === e && (n += "lightyellow"), r && o && console.log("%cIAS_DEBUG: " + t, n)
                }
            }]) && s(t.prototype, n), r && s(t, r), e
        }()),
        c = "gpt",
        d = "longreq",
        f = "m",
        g = "na",
        h = "profile",
        p = "x",
        v = "xe",
        y = "xt";

    function m(e) {
        return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function b(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var S = new(function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, r;
            return t = e, (n = [{
                key: "sendXHR",
                value: function(e, t, n, r) {
                    var a, i;
                    try {
                        (a = new XMLHttpRequest) && (i = encodeURI(e + "?" + t), a.open("GET", i), a.onreadystatechange = function() {
                            var e;
                            if (4 === a.readyState && 200 === a.status)
                                if ((e = a.responseText).code) l.error("XMLHttpRequest failure code: " + e.code + ", message: " + e.message);
                                else if (n) try {
                                n.call({}, e || {})
                            } catch (e) {
                                l.error("Error firing the XMLHttpRequest callback: " + e.message)
                            }
                        }, r && (a.timeout = r), a.ontimeout = function() {
                            l.error("XMLHttpRequest timeout event is fired."), l.diagPix(y, {
                                message: "timeout:" + r
                            })
                        }, a.onerror = function(e) {
                            l.error("XMLHttpRequest error event is fired."), l.diagPix(v, e)
                        }, a.send())
                    } catch (e) {
                        l.error("Error sending XMLHttpRequest: " + e.message), l.diagPix(p, e)
                    }
                }
            }, {
                key: "forIn",
                value: function(e, t) {
                    var n;
                    for (n in e) e.hasOwnProperty(n) && t(n, e[n])
                }
            }, {
                key: "getUID",
                value: function() {
                    var e = function() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    };
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }, {
                key: "extend",
                value: function(e, t) {
                    return t && Object.keys(t).forEach(function(n) {
                        e[n] = t[n]
                    }), e
                }
            }, {
                key: "isArray",
                value: function(e) {
                    return e instanceof Array
                }
            }, {
                key: "isDef",
                value: function(e) {
                    return void 0 !== e
                }
            }, {
                key: "isFn",
                value: function(e) {
                    return "function" == typeof e
                }
            }, {
                key: "isObj",
                value: function(e) {
                    return "object" === m(e)
                }
            }, {
                key: "isEmptyObj",
                value: function(e) {
                    return 0 === Object.getOwnPropertyNames(e).length
                }
            }, {
                key: "now",
                value: function() {
                    return (new Date).getTime()
                }
            }, {
                key: "chance",
                value: function(e) {
                    return 100 * Math.random() < e
                }
            }]) && b(t.prototype, n), r && b(t, r), e
        }()),
        _ = function(e) {
            var t, n, r, a, i, o, s, u, l = {},
                c = function(e) {
                    return e && e.replace(/[^\w-_.>\/]/g, "")
                };
            t = c((i = e.adSlotId) && i.replace(/\//g, "")), n = e.size && e.size instanceof Array && e.size.join("."), r = c(e.adUnitPath), a = function(t) {
                var n = "display";
                return void 0 !== e.type && null != t && "video" == c(t) && (n = "video"), n
            }(e.type), l.id = t, (l = S.extend(l, (o = e.size, u = {}, S.isArray(o) && (o.every(S.isArray) ? (s = o.map(function(e) {
                return e.join(".")
            }).join(","), u.ss = "[" + s + "]") : u.s = o.join(".")), u))).p = r, l.t = a;
            return {
                toString: function() {
                    var e, t = [];
                    for (e in l) t.push(e + ":" + l[e]);
                    return "slot={" + t.join(",") + "}"
                },
                isValid: function() {
                    return t && n && r
                }
            }
        };

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var A = new(function() {
        function e() {
            var t, n, r;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), r = [], (n = "list") in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }
        var t, n, r;
        return t = e, (n = [{
            key: "add",
            value: function(e) {
                new _(e).isValid() ? this.list.push(new _(e)) : l.error("Missing ad slot id, slot size and/or ad unit path.")
            }
        }, {
            key: "setAdSlots",
            value: function(e) {
                var t = e.adSlots,
                    n = this;
                t && (t instanceof Array ? t.forEach(function(e) {
                    n.add(e)
                }) : S.isObj(t) && this.add(t))
            }
        }, {
            key: "clear",
            value: function() {
                this.list = []
            }
        }, {
            key: "stringify",
            value: function() {
                return this.list.join("&")
            }
        }, {
            key: "isEmpty",
            value: function() {
                return 0 === this.list.length
            }
        }]) && E(t.prototype, n), r && E(t, r), e
    }());

    function D(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var w = new(function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), I(this, "cachedPageData", {}), I(this, "cachedSlotsData", {}), I(this, "cachedCustomData", {}), I(this, "BRAND_SAFETY_OBJECT_FIELD_NAME", "brandSafety"), I(this, "FRAUD_FIELD_NAME", "fr"), I(this, "SLOTS_OBJECT_FIELD_NAME", "slots"), I(this, "CUSTOM_FIELD_NAME", "custom")
        }
        var t, n, r;
        return t = e, (n = [{
            key: "updateData",
            value: function(e) {
                var t = JSON.parse(e),
                    n = t[this.BRAND_SAFETY_OBJECT_FIELD_NAME],
                    r = t[this.SLOTS_OBJECT_FIELD_NAME],
                    a = t[this.CUSTOM_FIELD_NAME];
                t[this.FRAUD_FIELD_NAME] && (this.cachedPageData[this.FRAUD_FIELD_NAME] = t[this.FRAUD_FIELD_NAME]);
                var i = function(e, t) {
                    S.forIn(e, function(e, n) {
                        t[e] = n
                    })
                };
                i(n, this.cachedPageData), i(r, this.cachedSlotsData), i(a, this.cachedCustomData)
            }
        }, {
            key: "clearCaches",
            value: function() {
                this.cachedPageData = {}, this.cachedSlotsData = {}, this.cachedCustomData = {}
            }
        }, {
            key: "setTargetingWrapper",
            value: function(e, t) {
                e && S.isFn(e.setTargeting) && S.forIn(t, function(t, n) {
                    l.log("setting targeting: {" + t + ": " + n + "}"), e.setTargeting(t, n)
                })
            }
        }, {
            key: "setSlotLevelData",
            value: function() {
                var e, t = this,
                    n = i.googletag.pubads().getSlots();
                n ? n.forEach(function(n) {
                    (e = S.isFn(n.getSlotElementId) && n.getSlotElementId()) && t.setTargetingWrapper(n, t.cachedSlotsData[e])
                }) : l.error("GPT slots have to be defined before setting slot level keyword targeting")
            }
        }, {
            key: "setPageLevelData",
            value: function() {
                this.setTargetingWrapper(i.googletag.pubads(), this.cachedPageData)
            }
        }, {
            key: "setCustomLevelData",
            value: function() {
                this.setTargetingWrapper(i.googletag.pubads(), this.cachedCustomData)
            }
        }, {
            key: "setTargeting",
            value: function() {
                var e = this;
                return function() {
                    i.googletag ? i.googletag.cmd.push(function() {
                        e.setPageLevelData(), e.setSlotLevelData(), e.setCustomLevelData()
                    }) : (l.error("googletag is not available. Cannot set keyword targeting for GPT."), l.diagPix(c))
                }
            }
        }]) && D(t.prototype, n), r && D(t, r), e
    }());

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function P(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var k = new(function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), P(this, "cachedPageData", {}), P(this, "cachedSlotsData", {}), P(this, "cachedCustomData", {}), P(this, "BRAND_SAFETY_OBJECT_FIELD_NAME", "brandSafety"), P(this, "FRAUD_FIELD_NAME", "fr"), P(this, "SLOTS_OBJECT_FIELD_NAME", "slots"), P(this, "CUSTOM_FIELD_NAME", "custom")
        }
        var t, n, r;
        return t = e, (n = [{
            key: "updateData",
            value: function(e) {
                var t = JSON.parse(e),
                    n = t[this.BRAND_SAFETY_OBJECT_FIELD_NAME],
                    r = t[this.SLOTS_OBJECT_FIELD_NAME],
                    a = t[this.CUSTOM_FIELD_NAME];
                t[this.FRAUD_FIELD_NAME] && (this.cachedPageData[this.FRAUD_FIELD_NAME] = t[this.FRAUD_FIELD_NAME]);
                var i = function(e, t) {
                    S.forIn(e, function(e, n) {
                        t[e] = n
                    })
                };
                i(n, this.cachedPageData), i(r, this.cachedSlotsData), i(a, this.cachedCustomData)
            }
        }, {
            key: "clearCaches",
            value: function() {
                this.cachedPageData = {}, this.cachedSlotsData = {}, this.cachedCustomData = {}
            }
        }, {
            key: "setTargeting",
            value: function() {
                var e = this;
                return function() {
                    if (i.apntag && i.apntag.requests && i.apntag.requests.tags) {
                        var t = apntag.requests.tags;
                        Object.keys(t).map(function(t) {
                            apntag.setKeywords(t, e.cachedPageData), apntag.setKeywords(t, e.cachedSlotsData[t]), apntag.setKeywords(t, e.cachedCustomData)
                        })
                    } else l.error("apntag is not available. Cannot set keyword targeting for AppNexus.")
                }
            }
        }]) && T(t.prototype, n), r && T(t, r), e
    }());

    function O(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var C = function() {
        function e() {
            var t, n, r;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), r = {}, (n = "requestStatusDict") in (t = this) ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r
        }
        var t, n, o;
        return t = e, (n = [{
            key: "reportLongRequest",
            value: function(e) {
                var t = this;
                return setTimeout(function() {
                    t.requestStatusDict[e] || (l.diagPix(d, {
                        message: "threshold:2000"
                    }), l.warn("Long PET request that exceeds 2000ms."))
                }, 2e3)
            }
        }, {
            key: "reportResponseTime",
            value: function(e) {
                var t, n, r = this,
                    a = l.getQueryParamByName("iasprofileprobability") || 10,
                    i = {};
                S.chance(a) && setTimeout(function() {
                    t = r.requestStatusDict[e], n = t && t - e, i.responsetime = n, i.probability = a, l.diagPix(h, {
                        message: l.buildQueryString(i, ":")
                    })
                }, 2e3)
            }
        }, {
            key: "send",
            value: function(e, t) {
                var n, r, a, i = this,
                    o = !1,
                    s = l.getQueryParamByName("iasendpoint") || "//pixel.adsafeprotected.com/services/pub",
                    u = this.buildQueryStrings(),
                    c = S.isFn(e);
                u && (n = function(t) {
                    o = S.now(), l.log("PET response " + t), i.requestStatusDict[r] = o, w.updateData(t), k.updateData(t), c && e(t), clearTimeout(a)
                }, r = S.now(), this.requestStatusDict[r] = !1, S.sendXHR(s, u, n, t), a = this.reportLongRequest(r), this.reportResponseTime(r), A.clear())
            }
        }, {
            key: "stringifySize",
            value: function(e) {
                return e.width + "." + e.height
            }
        }, {
            key: "buildQueryStrings",
            value: function() {
                var e = [],
                    t = i.__iasPET.pubId,
                    n = this.stringifySize(r(i)),
                    o = this.stringifySize(a(i)),
                    s = i.__iasPET.sessionId;
                if (!A.isEmpty() && t) return e.push("anId=" + t), e.push(A.stringify()), e.push("wr=" + n), e.push("sr=" + o), e.push("sessionId=" + s), e.push("url=" + encodeURIComponent(window.location.href)), l.log("ad slots set: " + JSON.stringify(A)), l.log("anid set: " + t), e.join("&");
                A.isEmpty() && l.error("Expected valid ad slot configuration."), t || l.error("Expecting valid IAS publisher id."), l.diagPix(f)
            }
        }]) && O(t.prototype, n), o && O(t, o), e
    }();

    function x(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function F(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var L = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), F(this, "timeout", null), F(this, "dataHandler", null), F(this, "outputManager", null), F(this, "commands", null), this.outputManager = new C, this.commands = this.commands || i.__iasPET.queue;
            var t = this;
            this.commands.push = function(e) {
                var n;
                try {
                    if (S.isFn(e)) n = e();
                    else {
                        if (!S.isObj(e)) throw Error("Items pushed into the queue must be a function or object");
                        n = e
                    }
                } catch (e) {
                    l.error("Error processing queued command: " + e.message)
                }
                t.setFromConfig(n), t.outputManager.send(t.dataHandler, t.timeout)
            }
        }
        var t, n, r;
        return t = e, (n = [{
            key: "executeCommands",
            value: function() {
                var e, t;
                if (this.commands = this.commands || i.__iasPET.queue, this.commands && this.commands.length) {
                    for (e = 0; e < this.commands.length; ++e) {
                        try {
                            S.isFn(this.commands[e]) ? t = this.commands[e]() : S.isObj(this.commands[e]) && (t = this.commands[e])
                        } catch (e) {
                            l.error("Error processing queued command: " + e.message)
                        }
                        this.setFromConfig(t)
                    }
                    this.outputManager.send(this.dataHandler, this.timeout)
                }
            }
        }, {
            key: "setFromConfig",
            value: function(e) {
                e && (this.dataHandler = S.isFn(e.dataHandler) ? e.dataHandler : this.dataHandler, this.timeout = e.timeout || this.timeout, A.setAdSlots(e))
            }
        }]) && x(t.prototype, n), r && x(t, r), e
    }();

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var M = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, r), R(this, "adServer", void 0), R(this, "topRequests", [{
                id: "isRefreshable",
                handler: function(e, t) {
                    var n = e.identifyAdServer(e.adServerList);
                    t.source.postMessage(JSON.stringify(n), t.origin)
                }
            }, {
                id: "recordAdSlotImpression",
                handler: function(e, t, n) {
                    try {
                        var r = e.getAdServer(),
                            a = r.getAllAdSlots();
                        r.findAdSlotByAdUnitId(a, n.adUnitId, function(r, a) {
                            !r && a ? e.recordAdSlotImpression(t, n.asid, n.adUnitId, a) : l.error("error finding adSlot by adUnitId", r)
                        })
                    } catch (e) {
                        l.error(e)
                    }
                }
            }, {
                id: "refreshAd",
                handler: function(e, t, n) {
                    try {
                        var r = e.getAdServer(),
                            a = n && n.adUnitId;
                        r.refresh(r.getAdSlot(e.getAdSlotDataIdForAdUnitId(a)))
                    } catch (e) {
                        l.error(e)
                    }
                }
            }]), R(this, "adServerList", [{
                adServerName: "GPT",
                available: function() {
                    return !!(i.googletag && i.googletag.apiReady && i.googletag.pubads && "function" == typeof i.googletag.pubads)
                },
                getAdSlot: function(e) {
                    return o.__IntegralASExec && o.__IntegralASExec.adSlotData && o.__IntegralASExec.adSlotData[e] && o.__IntegralASExec.adSlotData[e].adSlot || null
                },
                getAllAdSlots: function() {
                    var e = i.googletag.pubads && "function" == typeof i.googletag.pubads && i.googletag.pubads();
                    return e && "function" == typeof e.getSlots && e.getSlots()
                },
                isAdUnitIdInSlot: function(e, t) {
                    var n = null,
                        r = new RegExp("&chanId=" + t + "&", "g"),
                        a = e && e.getHtml && "function" == typeof e.getHtml && e.getHtml() || null;
                    return a && r.test(a) && (n = e), n
                },
                findAdSlotByAdUnitId: function(e, t, n) {
                    if (e && Array.isArray(e)) {
                        var r, a = null;
                        for (r = 0; r < e.length; r += 1)
                            if (a = this.isAdUnitIdInSlot(e[r], t)) {
                                n(null, a);
                                break
                            }
                        a || n(new Error("Ad Slot Not Found"))
                    } else n(new Error("slots or ad unit id missing from request"))
                },
                refresh: function(e) {
                    var t = i.googletag && i.googletag.cmd,
                        n = i.googletag && i.googletag.pubads && "function" == typeof i.googletag.pubads && i.googletag.pubads();
                    t && n && "function" == typeof n.refresh && e && t.push(function() {
                        n.refresh([e])
                    })
                }
            }]);
            var e = this;
            o.addEventListener("message", function(t) {
                /requestTop/g.test(t.data) && e.handleTopRequests(t)
            })
        }
        return e = r, (t = [{
            key: "getAdServer",
            value: function() {
                return this.adServer
            }
        }, {
            key: "setAdServer",
            value: function(e) {
                this.adServer = e
            }
        }, {
            key: "identifyAdServer",
            value: function(e) {
                for (var t = 0; t < e.length; t += 1)
                    if (e[t].adServerName && e[t].available && "function" == typeof e[t].available && e[t].available()) return this.setAdServer(e[t]), {
                        isRefreshable: !0,
                        adServerName: e[t].adServerName
                    };
                return {
                    isRefreshable: !1,
                    adServerName: null
                }
            }
        }, {
            key: "findAdServerByName",
            value: function(e) {
                for (var t = 0; t < this.adServerList.length; t += 1)
                    if (this.adServerList[t].adServerName === e) return this.adServerList[t];
                return null
            }
        }, {
            key: "getTopRequestById",
            value: function(e) {
                for (var t = null, n = 0; n < this.topRequests.length; n += 1)
                    if (e === this.topRequests[n].id) {
                        t = this.topRequests[n];
                        break
                    }
                return t
            }
        }, {
            key: "handleTopRequests",
            value: function(e) {
                var t, n = JSON.parse(e.data);
                n && n.requestTop && (t = this.getTopRequestById(n.requestTop)) && t.handler && "function" == typeof t.handler && t.handler(this, e, n)
            }
        }, {
            key: "getAdSlotDataIdForAdUnitId",
            value: function(e) {
                return "AD_UNIT_" + e
            }
        }, {
            key: "recordAdSlotImpression",
            value: function(e, t, n, r) {
                try {
                    var a = this.getAdSlotDataIdForAdUnitId(n);
                    o.__IntegralASExec = o.__IntegralASExec || {}, o.__IntegralASExec.adSlotData = o.__IntegralASExec.adSlotData || {}, o.__IntegralASExec.adSlotData.hasOwnProperty(a) ? o.__IntegralASExec.adSlotData[a].refreshCount += 1 : o.__IntegralASExec.adSlotData[a] = {
                        refreshCount: 0,
                        refreshSessionId: t,
                        adSlot: r
                    }, this.sendRefreshSession(e, o.__IntegralASExec.adSlotData[a])
                } catch (e) {
                    l.error("Unable to record ad slot impression", e)
                }
            }
        }, {
            key: "sendRefreshSession",
            value: function(e, t) {
                var n = {
                    requestId: "refreshSession",
                    refreshCount: t.refreshCount,
                    refreshSessionId: t.refreshSessionId
                };
                e.source.postMessage(JSON.stringify(n), e.origin)
            }
        }]) && N(e.prototype, t), n && N(e, n), r
    }();
    var j = function e() {
        if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), i.__iasPET.queue = i.__iasPET.queue || [], i.__iasPET.VERSION = "1.16.7", i.__iasPET.setTargetingForGPT = w.setTargeting(), i.__iasPET.setTargetingForAppNexus = k.setTargeting(), "undefined" != typeof XMLHttpRequest) {
            i.__iasPET.sessionId = S.getUID(), (new L).executeCommands();
            new M
        } else l.diagPix(g)
    };
    n.d(t, "start", function() {
        return q
    });
    var q = function() {
        try {
            new j
        } catch (e) {
            l.error(e.message)
        }
    };
    i.__iasPET = window.__iasPET || {}, i.__iasPET.start = window.__iasPET.start || q, i.__iasPET.start()
}]);