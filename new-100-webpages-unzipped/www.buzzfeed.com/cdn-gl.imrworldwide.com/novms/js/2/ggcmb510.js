/*
 Nielsen SDK package v6.0.0.63 
 (c) 2017 The Nielsen Company 
*/
/* GGCMB build v5.1.0.44*/
! function(e, t) {
    function r(e) {
        return void 0 !== s && void 0 !== c && void 0 !== l ? s + "//cdn-gl" + c : "https://cdn-gl.imrworldwide.com/"
    }

    function n(e) {
        e && e.hasOwnProperty("target") && (E = "true" === String(e.target).toLowerCase())
    }

    function a() {
        w = Date.now(), O = Math.ceil((w - P) / 1e3)
    }

    function i(e) {
        if (e && e.hasOwnProperty("target") && !isNaN(e.target))
            for (var t in p) ! function(t) {
                var r = p[t];
                if (void 0 !== r && r.hasOwnProperty("staticPage") && r.staticPage.hasOwnProperty("evtParams")) {
                    "static" === r.staticPage.evtParams.param1.type && r.ggPM("48", e.target, "", "", "")
                }
            }(t)
    }

    function o(o) {
        function v(e) {
            N.staticPage.hasOwnProperty("evtParams") && N.ggPM("56", N.staticPage.evtParams.param1, N.staticPage.evtParams.param2, N.staticPage.evtParams.param3, N.staticPage.evtParams.param4)
        }

        function m(e, t) {
            if ("string" == typeof e && (e = {
                    type: e
                }), e.target || (e.target = t), !e.type) throw new Error("Event object missing 'type' property.");
            if (C[e.type] instanceof Array)
                for (var r = C[e.type], n = 0, a = r.length; n < a; n++) r[n].call(N, t)
        }

        function p(e) {
            try {
                if (!e || !e.hasOwnProperty("cmsMap")) return [];
                var t = [];
                for (var r in e.cmsMap) e.cmsMap.hasOwnProperty(r) && -1 !== e.cmsMap[r].indexOf("nol_") && t.push(e.cmsMap[r].replace(/[{(\[\])}]/g, ""));
                return t
            } catch (e) {}
        }

        function y(t) {
            try {
                var r = "Error in retrieveMeta";
                if (t && t.hasOwnProperty("fData") && t.hasOwnProperty("ad") && t.hasOwnProperty("content") && t.hasOwnProperty("plid")) {
                    var n = p({
                        cmsMap: e.GLCFG.PLDPR.getCmsMap(t.plid)
                    });
                    for (var a in t.fData)
                        if (t.fData.hasOwnProperty(a)) {
                            var i = t.fData[a][Object.keys(t.fData[a]).splice(-1, 1)];
                            if (void 0 !== i)
                                for (var o in i) {
                                    var s = String(o); - 1 !== s.indexOf("nol_") && -1 === n.indexOf(s) || (t[a][o] = i[o])
                                }
                        }
                    return t
                }
                return t && t.hasOwnProperty("err") ? (t.err = r + ": Missing passedFdata, Ad, content or static properties", t) : {
                    err: r
                }
            } catch (e) {}
        }

        function h(t) {
            t && (t.registerListener("ggPM", N), t._listeners && (t._listeners.addListener("updateCmbStaticPage", N.handleUpdateOfStatic), t._listeners.addListener("removeCmbAssetId", N.removeAsset), t._listeners.addListener("tick", function() {
                a(), m("globalTick", {
                    time: w,
                    seconds: O
                })
            }), t._listeners.addListener("dcrHeartbeat", i), t._listeners.addListener("flushQueue", N.emptyQueue), t._listeners.addListener("handleSessionReset", N.handleSessionReset), t._listeners.addListener("flushPauseEventQueue", N.flushPauseEventQueue), t._listeners.addListener("sendOptOutStatus", n)), e.GLCFG = t)
        }

        function P(e) {
            if (void 0 !== e && (!e || e.hasOwnProperty("url") && 0 !== e.url.length) && e.hasOwnProperty("retryDelay") && e.hasOwnProperty("currRetry") && e.hasOwnProperty("maxRetry")) {
                ({
                    requestUrl: function() {
                        var t = this;
                        try {
                            return ++e.currRetry > e.maxRetry ? t.logErr("maxRetry reached") : t.sendUrlRequest(e.url)
                        } catch (e) {
                            t.logErr("Error in fireToUrl requestUrl: " + e)
                        }
                    },
                    sendUrlRequest: function(r) {
                        var n = this;
                        try {
                            if (void 0 === r) return;
                            var a = new Image;
                            a.onerror = function(r) {
                                t.setTimeout(function() {
                                    n.requestUrl()
                                }, e.retryDelay)
                            }, a.onload = function(e) {}, a.src = r + "&retry=" + e.currRetry
                        } catch (e) {
                            n.logErr("Error in fireToUrl sendUrlRequest: " + e)
                        }
                    },
                    logErr: function(e) {
                        e && t.console && t.console.log && console.log("Error: ", e)
                    }
                }).requestUrl()
            }
        }
        var b, _, C = {},
            S = [],
            D = {},
            M = String(Date.now()) + Math.round(1e4 * Math.random()),
            I, F = 5,
            j = -1,
            N = {};
        N.id = M, N.name = o, N.initialized = !1, N.staticPage = {}, N.modules = {
            allModInit: !1
        }, N.configLoaded = !1, N.apid = "", N.sdkv = d, N.sdkvForConfig = L;
        var T = {
                _queueEventLog: !1,
                _eventLog: [],
                init: function() {
                    try {
                        var t = e.controllers.util.queryParam("nol_eventHookDelay");
                        if (T._queueEventLog = !1, t) {
                            var r = parseInt(t);
                            "NaN" !== r.toString() && (T._queueEventLog = !0, setTimeout(function() {
                                T._queueEventLog = !1
                            }, 1e3 * (r <= 20 ? r : 20)))
                        }
                    } catch (e) {
                        T._queueEventLog = !1
                    }
                },
                trigger: function(t, r) {
                    try {
                        if (r) {
                            var n = JSON.parse(JSON.stringify(r));
                            n.name = t.name, T._queueEventLog ? T._eventLog.push(n) : (T._eventLog && T._eventLog.length > 0 && (e.controllers.util.fireCustomEvent("NSDK_EventHook", T._eventLog), T._eventLog = []), e.controllers.util.fireCustomEvent("NSDK_EventHook", [n]))
                        }
                    } catch (e) {}
                }
            },
            B = function(e, r) {
                return function(n, a) {
                    try {
                        r.browserSafeAddEventListener({
                            element: t,
                            eventType: "NSDK_Initialized",
                            func: function(t) {
                                try {
                                    t.detail.instanceName === e && n(t.detail.instance)
                                } catch (e) {
                                    a && a(e.message)
                                }
                            }
                        })
                    } catch (e) {
                        a && a(e.message)
                    }
                }
            }(N.name, e);
        return N.getOptOutStatus = function() {
            return E
        }, N.getId = function() {
            return M
        }, N.GetName = function() {
            return N.name
        }, N.Initialized = function(e) {
            if (void 0 === e) return N.initialized;
            N.initialized = e
        }, N.getPauseQueueCount = function() {
            return Object && Object.keys ? Object.keys(D).length : 0
        }, N.removeAsset = function(e) {
            void 0 !== e && e.target.param1.hasOwnProperty("assetid") && (N.staticPage = {})
        }, N.handleUpdateOfStatic = function(t) {
            if (t && t.target) {
                var r = t.target.evtInfo;
                if (e.GLCFG && e.GLCFG.PLDCR && void 0 !== r && r.param1.hasOwnProperty("assetid") && N.getId() === t.target.plid) {
                    var n = e.GLCFG.PLDCR.latestDcrTick();
                    0 !== Object.keys(N.staticPage).length && N.staticPage.hasOwnProperty("id") && N.staticPage.id === r.param1.assetid && N.staticPage.hasOwnProperty("lastTimeStamp") ? N.staticPage.lastTimeStamp = n : N.staticPage = {
                        id: r.param1.assetid,
                        evtParams: r,
                        startTimeStamp: n,
                        lastTimeStamp: n
                    }
                }
            }
        }, N.addListener = function(e, t) {
            t && (void 0 === C[e] && (C[e] = []), C[e].push(t))
        }, N.removeListener = function(e, t) {
            if (N._listeners[e] instanceof Array)
                for (var r = C[e], n = 0, a = r.length; n < a; n++)
                    if (r[n] === t) {
                        r.splice(n, 1);
                        break
                    }
        }, N.handleSessionReset = function(e) {
            if (e && e.target && e.target.hasOwnProperty("plid") && M === e.target.plid && e.target.hasOwnProperty("passedFdata") && e.target.passedFdata.hasOwnProperty("_dataArrObj") && e.target.passedFdata._dataArrObj) {
                var t = {
                    plid: e.target.plid,
                    fData: e.target.passedFdata._dataArrObj,
                    content: {},
                    ad: {},
                    err: 0
                };
                if (0 === y(t).err && e.target.passedFdata.hasOwnProperty("_currVidType")) {
                    var r = e.target.passedFdata._currVidType,
                        n = Object.keys(t.content).length > 0,
                        a = Object.keys(t.ad).length > 0;
                    (n || a) && (N.ggPM("57", "1", "", "", ""), n && !D.hasOwnProperty("content") && (D.content = {
                        evt: "pauseloadmeta",
                        meta: t.content,
                        plid: e.target.plid
                    }))
                }
            }
            N._listeners && N._listeners.fireEvent && N._listeners.fireEvent("debug", {
                type: "debug",
                msg: "Fired handleSessionReset from ggcmb."
            })
        }, N.flushPauseEventQueue = function() {
            if (!(Object.keys(D).length <= 0)) {
                if (N.modules.PLDPR) {
                    var e;
                    for (e in D) m("ggPM", {
                        evtInfo: {
                            eventType: D[e].evt,
                            param1: D[e].meta
                        },
                        id: M
                    });
                    D = {}
                }
                N._listeners && N._listeners.fireEvent && N._listeners.fireEvent("debug", {
                    type: "debug",
                    msg: "Fired flushPauseEventQueue from ggcmb."
                })
            }
        }, N.cloneObj = function(e) {
            return e && "object" == typeof e ? JSON.parse(JSON.stringify(e)) : e
        }, N.ggPM = function(e, t, r, n, a) {
            if (N.initialized && void 0 !== e && null !== e && "" !== e) {
                var i = {};
                i.eventType = e, i.param1 = N.cloneObj(t), i.param2 = N.cloneObj(r), i.param3 = N.cloneObj(n), i.param4 = N.cloneObj(a), !N.modules.allModInit || 2 != N.modules.PLCMB && 2 != N.modules.PLDPR ? S.push(i) : (N.emptyQueue(), m("ggPM", {
                    evtInfo: i,
                    id: M
                }), T.trigger(N, i))
            }
        }, N.getConfigParams = function() {
            return _
        }, N.emptyQueue = function() {
            if (!(S.length <= 0) && N.modules.allModInit && (N.modules.PLCMB || N.modules.PLDPR)) {
                for (var e = 0, t = S.length; e < t; e += 1) m("ggPM", {
                    evtInfo: S[e],
                    id: M
                }), T.trigger(N, S[e]);
                S = []
            }
        }, N.getContainer = function() {
            return I
        }, N.getEventQue = function() {
            return S
        }, N.ggInitialize = function(t, n, a, i, o, v) {
            if (N.initialized) return k.Promise(function(e, t) {
                e(N)
            });
            T.init();
            var m, p, y, P = "us",
                w = "cdn-gl";
            if (I = v, _ = {
                    ggParams: t,
                    uid: a,
                    oldFlashDetect: i,
                    detectBrowser: o,
                    nol_playerId: M
                }, typeof t == typeof String()) {
                for (m = e.loadXmlString("<vi>" + t + "</vi>"), p = m.firstChild.firstChild, y = 0, t = {}; p && void 0 !== p && y < 20;) null !== p.firstChild && (t[p.nodeName] = p.firstChild.nodeValue), p = p.nextSibling, y++;
                _.ggParams = t
            }
            return _.ggParams.nol_sdkDebug = e.controllers.util.queryParam("nol_sdkDebug") || _.ggParams.nol_sdkDebug, N.Initialized(!0), d = t.nsdkv || d, P = t.sfcode || P, g = s + l + P + c, f = t.coreaddress ? s + "//" + t.coreaddress + "/" : r(t), L = t.sdkconfigver || L, N.apid = _.ggParams.apid, N.sdkv = d, e.loadLib("GLCFG", f + "novms/js/2/configs/" + ("505" === d ? "glcfg505.js" : u), e, h), k.Promise(B)
        }, N.isViewable = function() {
            return !1
        }, e.browserSafeAddEventListener({
            element: t,
            eventType: "beforeunload",
            useCapture: !1,
            func: function(e) {
                N && N.staticPage && v(N.staticPage)
            }
        }), N
    }
    if (!e.isBuilt || !e.isBuilt()) {
        var s = -1 !== t.location.protocol.indexOf("https") ? "https:" : "http:",
            l = "//secure-",
            c = ".imrworldwide.com/",
            u = "glcfg510.js",
            d = "510",
            f = r(),
            g = s + "//secure-us.imrworldwide.com/",
            v = "imrworldwide.com",
            m = 864e5,
            p = e.getInstances ? e.getInstances() : {},
            y = 1,
            h = 5,
            P = 0,
            w = 0,
            O = 0,
            b = !1,
            E = !1,
            _ = "cgi-bin/gn?prd=session&c9=devid,&c13=asid,",
            L = "bj.5.0.0",
            C = "5.1.0.44";
        Date.now = Date.now || function() {
            return +new Date
        };
        var k = {
            Promise: function(e) {
                try {
                    var t = new Promise(function(e, t) {});
                    return new Promise(e)
                } catch (e) {}
                return new function(e) {
                    var t = function(e) {
                            n && n(e)
                        },
                        r = function(e) {
                            a && a(e)
                        },
                        n = null,
                        a = null;
                    return {
                        then: function(i, o) {
                            n = i, a = o, e(t, r)
                        }
                    }
                }(e)
            }
        };
        if (e.sdkvForConfig = function() {
                return L
            }, e.isBuilt = function() {
                return b
            }, e.getInstance = function(e) {
                var t = void 0 !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String) ? e : "default";
                return p.hasOwnProperty(t) || (p[t] = o(t)), p[t]
            }, e.setTotalNumAssetsAllowed = function(e) {
                y = isNaN(e) ? e : parseInt(e, 10)
            }, e.getAddress = function() {
                return f
            }, e.getConfigAddress = function() {
                return g
            }, e.getInstances = function() {
                return p
            }, e.loadXmlString = function(e) {
                var t = null;
                try {
                    return t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e), t
                } catch (n) {
                    try {
                        var r = new DOMParser;
                        return t = r.parseFromString(e, "text/xml")
                    } catch (e) {}
                }
                return null
            }, e.isNielsenTag = function(e) {
                var t = !1;
                if (void 0 !== e) {
                    var r = e.indexOf("?"),
                        n = e.indexOf("imrworldwide.com");
                    n > -1 && n < r && (t = !0)
                }
                return t
            }, e.getVersion = function() {
                return d
            }, e.send = function(e) {
                e && t.console && t.console.log && console.log(e.parentNode)
            }, e.browserSafeAddEventListener = function(e) {
                void 0 !== e.element && (e.element.addEventListener ? e.element.addEventListener(e.eventType, e.func, e.useCapture) : e.element.attachEvent && e.element.attachEvent("on" + e.eventType, e.func))
            }, e.browserSafeRemoveEventListener = function(e) {
                void 0 !== e && null !== e && null !== e.element && void 0 !== e.element && (e.element.removeEventListener ? e.element.removeEventListener(e.eventType, e.func, e.useCapture) : e.element.detachEvent && e.element.detachEvent("on" + e.eventType, e.func))
            }, e.controllers = {
                util: function(e) {
                    return function() {
                        function e(e, t) {
                            t = t || {
                                bubbles: !1,
                                cancelable: !1,
                                detail: void 0
                            };
                            var r = document.createEvent("CustomEvent");
                            return r.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r
                        }
                        if ("function" == typeof t.CustomEvent) return !1;
                        e.prototype = t.Event.prototype, t.CustomEvent = e
                    }(), {
                        fireCustomEvent: {
                            fireCustomEvent: function(r, n, a) {
                                try {
                                    a = a || t, r && a && a.dispatchEvent(new CustomEvent(r, {
                                        detail: n
                                    }))
                                } catch (t) {
                                    e && e._listeners && e._listeners.fireEvent("error", {
                                        type: "error",
                                        msg: "Browser error attempting to call element.dispatchEvent()."
                                    })
                                }
                            }
                        }.fireCustomEvent,
                        queryParam: {
                            queryParam: function(r) {
                                try {
                                    r = r.toString().toLowerCase();
                                    var n = t.location.search.substr(1).split("&"),
                                        a = "";
                                    if (n.find) a = n.find(function(e) {
                                        return 0 === e.toLowerCase().indexOf(r + "=")
                                    });
                                    else
                                        for (var i = 0, o = n.length; i < o; i++)
                                            if (0 === n[i].toLowerCase().indexOf(r + "=")) {
                                                a = n[i];
                                                break
                                            } if (a) {
                                        var s = a.split("=");
                                        if (s && s.length > 1) return s[1]
                                    }
                                } catch (t) {
                                    e && e._listeners && e._listeners.fireEvent("error", {
                                        type: "error",
                                        msg: "Browser error attempting to retrieve query string parameter."
                                    })
                                }
                                return ""
                            }
                        }.queryParam
                    }
                }(e)
            }, function() {
                var r = {};
                e.loadLib = function(e, n, a, i) {
                    if (void 0 !== e && null !== e && "string" == typeof e && void 0 !== n && null !== n && "string" == typeof n)
                        if (r[e]) {
                            if (r[e].body) return void i(r[e].body(a));
                            r[e].callbacks.push({
                                func: i,
                                arg: a
                            })
                        } else {
                            r[e] = {
                                callbacks: []
                            }, r[e].callbacks.push({
                                func: i,
                                arg: a
                            });
                            var o = t.document.createElement("script");
                            o.async = !0, o.src = n, t.document.getElementsByTagName("head")[0].appendChild(o)
                        }
                }, e.registerLib = function(e, t) {
                    try {
                        if (r) {
                            var n = r[e];
                            n.body = t;
                            for (var a = n.callbacks.shift(); a;) a.func(n.body(a.arg)), a = n.callbacks.shift()
                        }
                    } catch (e) {}
                }
            }(), t.gg_nol_FlashCallBack) {
            for (var S = 0, D, M = t.gg_nol_FlashCallBack.length; S < M; S += 1) t.gg_nol_FlashCallBack[S].hasOwnProperty("callBack") && (D = document.getElementById(t.gg_nol_FlashCallBack[S].swfId)) && D[t.gg_nol_FlashCallBack[S].callBack]();
            t.gg_nol_FlashCallBack = void 0
        }
        b || (b = !0, P = w = Date.now(), e.BUILDVERSION = "5.1.0.44")
    }
}(window.NOLCMB = window.NOLCMB || {}, window);