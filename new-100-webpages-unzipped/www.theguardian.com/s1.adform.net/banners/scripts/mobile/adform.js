"use strict";
! function(i, e, t, n) {
    var r = t.utils = t.utils || {};
    if (!r.is) {
        var o = navigator.userAgent,
            a = {
                iOS: /(iPad|iPhone|iPod)/g.test(o),
                IEMobile: /IEMobile/i.test(o),
                Android: /Android/i.test(o),
                WebKit: parseInt((/WebKit\/([0-9]+)/.exec(navigator.appVersion) || 0)[1], 10) || !1,
                touchEnabled: "ontouchstart" in i || navigator.msMaxTouchPoints
            };
        a.AndroidBrowser = a.Android && a.WebKit && a.WebKit <= 534 && 0 === navigator.vendor.indexOf("Google"), a.SamsungBrowser = a.Android && /GT-/i.test(o), a.frame = parent !== i, a.friendlyFrame = !1;
        try {
            a.friendlyFrame = Boolean(i.frameElement)
        } catch (e) {}
        a.appView = function() {
            try {
                i.top.document
            } catch (e) {
                return
            }
            var e = i.top,
                t = e.document,
                n = t.documentElement,
                r = t.body,
                o = s([e, n, r], ["pageYOffset", "scrollTop"])[0];
            return Math.max.apply(null, s([n, r], ["scrollHeight", "offsetHeight", "clientHeight"])) == s([e, n, r], ["innerHeight", "clientHeight"])[0] && 0 == o ? 1 : 0
        }, r.is = a
    }

    function s(e, t) {
        for (var n, r, o = [], i = 0; i < e.length; i++)
            if (n = e[i])
                for (var a = 0; a < t.length; a++)((r = n[t[a]]) || 0 == r) && o.push(r);
        return o
    }
}(window, document, window.Adform = window.Adform || {}),
function(e, t, n, r) {
    function o() {
        this.listeners = {}
    }
    o.prototype = {
        on: function(e, t, n) {
            this.listeners[e] = this.listeners[e] || [], this.listeners[e].push({
                scope: n,
                fn: t
            })
        },
        off: function(e, t, n) {
            var r = this.listeners[e];
            if (r) {
                if (!t) return void delete this.listeners[e];
                for (var o, i = r.length - 1; 0 <= i; i--)
                    if ((o = r[i]).scope === n && o.fn === t) {
                        r.splice(i, 1);
                        break
                    }
                r.length || delete this.listeners[e]
            }
        },
        emit: function(e) {
            var t = Array.prototype.slice.call(arguments, 1),
                n = this.listeners[e];
            if (n)
                for (var r = n.length, o = 0; o < r; o++) {
                    var i = n[o];
                    i.fn.apply(i.scope, t)
                }
        }
    }, n.EventEmitter = o
}(window, document, window.Adform = window.Adform || {}),
function(e, t, n, r) {
    var o = new n.EventEmitter;
    n.on = function(e, t, n) {
        o.on.apply(o, arguments)
    }, n.off = function(e, t, n) {
        o.off.apply(o, arguments)
    }, n.emit = function(e) {
        o.emit.apply(o, arguments)
    }
}(window, document, window.Adform = window.Adform || {}),
function(i, e, t, n) {
    var r = e.MutationObserver || e.WebKitMutationObserver;
    r ? new r(function(e) {
        for (var t, n, r = 0; r < e.length; r++)
            if (t = e[r].addedNodes)
                for (var o = 0; o < t.length; o++)(n = t[o]).nodeType === Node.ELEMENT_NODE && i.emit("DOMNodeInserted", n)
    }).observe(t, {
        childList: !0,
        subtree: !0
    }) : e.MutationEvent && t.addEventListener("DOMNodeInserted", function(e) {
        e.target.nodeType === Node.ELEMENT_NODE && i.emit("DOMNodeInserted", e.target)
    }, !1)
}(Adform = window.Adform || {}, window, document),
function(u, c, l, e) {
    var n = {
            bn: "id",
            unloadID: "imprid",
            ADFbanID: "banner"
        },
        f = u.utils,
        t = !1,
        s = (new Date).getTime();
    u.EVENT_FIRST_EXPAND = [21, "First Expand"], u.EVENT_OTHER_EXPAND = [22, "Other Expands"], u.EVENT_CLOSE = [23, "Close Button Press"], u.EVENT_COLLAPSE = [143, "Banner Collapse"];
    for (var r = 1; r <= 20; r++) u["EVENT_CUSTOM_" + r] = [r, "Custom Event " + r];
    for (r = 200; r <= 250; r++) u["EVENT_CUSTOM_" + r] = [r, "Custom Event " + r];
    var o, i, d, m = u.tagData || {};
    try {
        for (var a = c;;) {
            if (!a.document) throw 0;
            if (i = a.document, d = i.domain, "object" == typeof a.$sf && (u.safeFrame = a.$sf.ext, u.safeFrame.register(c.innerWidth, c.innerHeight)), a.Adform && a.Adform.ampData && !u.ampContext && (o = u.ampContext = a.context, d = o.location.hostname, o.reportRenderedEntityIdentifier("adform-" + m.banner)), a === a.parent) break;
            a = a.parent
        }
    } catch (e) {
        if (!o && i.referrer) {
            var p = i.createElement("a");
            p.href = i.referrer, p.hostname && (d = p.hostname)
        }
    }
    d || (d = "");
    var v, g, h, y, b, E, w, _ = (v = c.screen, g = c.navigator, h = g.browserLanguage || g.language || 0, y = g.systemLanguage || h, b = v ? v.width + "X" + v.height : 0, E = v ? v.colorDepth : 0, w = function() {
        var e = 1;
        try {
            c.top.document.getElementById, e = 0
        } catch (e) {}
        return e
    }(), [y, h, b, 0, c.innerWidth, c.innerHeight, E, 1, 3, 7, w, w ? void 0 : f.is.appView()].join("|"));

    function x() {
        var a = 0;
        if (!t && m.impressionUrl) {
            var s = u.trackingUrlBase + m.impressionUrl;
            s = (s = (s = s.replace("__SET__", encodeURIComponent(_))).replace("__DOMAIN__", encodeURIComponent(d))).replace("__CREFURL__", encodeURIComponent(function() {
                    var t, n, r, o, i = c._adform && c._adform.tagFrame,
                        a = u.ampContext;
                    try {
                        t = c.top.location.href.split("#")[0]
                    } catch (e) {
                        n = i || c, o = a && a.location ? a.location.href : n.document.referrer, r = (r = n.location.ancestorOrigins) && r[r.length - 1], t = r || o
                    }
                    return t || ""
                }())),
                function e() {
                    a++;
                    var t = l.getElementById("image");
                    var n = l.body;
                    var r = f.is.friendlyFrame && frameElement && frameElement.style && "none" === frameElement.style.display;
                    var o = (t || n || {}).offsetWidth;
                    var i = n && n.childNodes.length;
                    t || o || i || r ? u.sendRequest(s) : setTimeout(e, 10);
                    if (200 == a) try {
                        (new Image).src = (c.Adform && c.Adform.trackingUrlBase || "//track.adform.net") + "/jslog/?src=csimpr_fail&msg=" + c.Adform.tagData.id
                    } catch (e) {}
                }(), t = !0, f.is.friendlyFrame && frameElement.setAttribute("data-adfm-ready", "")
        }
    }
    u.sendEvent = function(e) {
        if (!e || !(e instanceof Array) || e.length < 2 || !s || !m.isEventEnabled) return !1;
        var t = Object.create ? Object.create(null) : {};
        t.msrc = 1, t.event = e[0], t.name = e[1], t.bn = m.id, t.banner = m.banner, t.asset = m.asset, t.icid = m.icid, t.icidt = m.icidt, t.imprid = m.imprid, m.eData && (t.eData = m.eData), m.rtbData && (t.rtbdata = m.rtbData), m.rtbwp && (t.rtbwp = m.rtbwp), m.adxVars && (t.adxvars = m.adxVars);
        var n = (new Date).getTime() - s;
        n = Math.max(0, Math.round(n / 1e3)), t.time = Math.min(3600, n);
        for (var r = Math.min(arguments.length, 256), o = 1; o < r; o++) t["bv" + o] = arguments[o];
        t.rnd = Math.floor(1e9 * Math.random());
        var i = u.trackingUrlBase + "/serving/event/?";
        for (var a in t) t.hasOwnProperty && !t.hasOwnProperty(a) || (i += a + "=" + encodeURIComponent(t[a]) + "&");
        return i = i.replace(/&+$/i, ""), u.sendRequest(i)
    }, u.sendRequest = function(e) {
        if ("string" != typeof e) return !1;
        var t = i.defaultView || c;
        return (t.Image ? new t.Image(1, 1) : l.createElement("img")).src = e, !0
    }, u.getClickURL = function(e) {
        if (m.clickUrls) {
            var t = m.clickUrls[e || m.defaultClickTag];
            if (t) return t.replace("__SET__", encodeURIComponent(_))
        }
        return null
    }, u.getAsset = function(e) {
        if (e = parseInt(e, 10), isNaN(e)) return null;
        if (!m.additionalAssets) return null;
        var t = m.additionalAssets;
        return "object" == typeof t && void 0 !== t[e - 1] ? t[e - 1] : null
    }, u.getVar = function(e) {
        var t = m.customVariables || {};
        return "string" != typeof e ? null : t[e] || m[e] || m[n[e]] || null
    }, u.getLocation = function() {
        var e = m.location;
        return e || null
    }, u.isReload || (c.mraid && m.mraidImpression ? (u.on("mraidReady", function() {
        try {
            var e = mraid.getPlacementType(),
                t = mraid.isViewable();
            if ("interstitial" !== e || t) throw "ura";
            mraid.addEventListener("viewableChange", function e(t) {
                if (t) {
                    x();
                    try {
                        mraid.removeEventListener("viewableChange", e)
                    } catch (e) {}
                }
            })
        } catch (e) {
            x()
        }
    }), u.on("visibilityData", function e(t) {
        t.isViewable && (x(), u.off("visibilityData", e))
    })) : c.addEventListener("DOMContentLoaded", x, !0))
}(Adform = window.Adform || {}, window, document),
function(o, e, i, t) {
    var a = ["play", "playing", "ended", "timeupdate"],
        s = ["fullscreenchange", "webkitfullscreenchange", "MSFullscreenChange", "mozfullscreenchange"],
        n = o.EVENT_VIDEO_START = [25, "Video Play Start"],
        r = o.EVENT_VIDEO_25 = [26, "Played 25% Of Video"],
        u = o.EVENT_VIDEO_50 = [27, "Played 50% Of Video"],
        c = o.EVENT_VIDEO_75 = [28, "Played 75% Of Video"],
        l = o.EVENT_VIDEO_END = [29, "Video Playback Complete"],
        f = o.EVENT_VIDEO_PLAY = [30, "Play Button Press"],
        d = o.EVENT_VIDEO_PAUSE = [31, "Pause Button Press"],
        m = o.EVENT_VIDEO_STOP = [32, "Stop Button Press"],
        p = o.EVENT_VIDEO_SOUND_ON = [33, "Sound On Button Press"],
        v = o.EVENT_VIDEO_SOUND_OFF = [34, "Sound Off Button Press"],
        g = o.EVENT_VIDEO_FULLSCREEN_ON = [35, "Full Screen On Button Press"],
        h = o.EVENT_VIDEO_FULLSCREEN_OFF = [36, "Full Screen Off Button Press"],
        y = (o.EVENT_VIDEO_RESUME = [37, "Resume Button Press"], o.EVENT_VIDEO_REWIND = [38, "Rewind Button Press"], o.EVENT_VIDEO_REPLAY = [39, "Replay Button Press"], {
            start: n,
            prog25: r,
            prog50: u,
            prog75: c,
            end: l
        }),
        b = {
            play: function(e) {
                var t = e.target;
                !t._adfmAutoplay && t.autoplay && t.currentTime <= 0 ? t._adfmAutoplay = !0 : o.sendEvent(f)
            },
            abort: function(e) {
                e.target.currentTime <= 0 || o.sendEvent(m)
            },
            pause: function(e) {
                var t = e.target;
                t.currentTime !== t.duration && o.sendEvent(d)
            },
            volumechange: function(e) {
                var t = e.target,
                    n = t.muted || t.volume <= .01;
                n !== this._lastIsMuted && o.sendEvent(n ? v : p), this._lastIsMuted = n
            }
        };

    function E(e) {
        var t = [];
        if (e ? t.push(e) : t = i.getElementsByTagName("video"), t.length)
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r._adfTracking || (o.emit("trackVideo", r), r._adfTracking = !0)
            }
    }

    function w(e, t) {
        t = t || e.target;
        var n = i.fullscreenElement || i.fullScreenElement || i.webkitFullscreenElement || i.msFullscreenElement || i.mozFullScreenElement;
        n instanceof HTMLVideoElement && (t = n);
        var r = n === t;
        !r && n && n.contains && n.contains(t) && (r = !0), "webkitbeginfullscreen" === e.type && (r = !0), r !== t._lastIsFullscreen && (r ? (t.autoplay && !t.paused && t.currentTime < 1 && o.sendEvent(f), o.sendEvent(g), o.emit("videoFullscreenOn", t)) : (o.sendEvent(h), o.emit("videoFullscreenOff", t))), t._lastIsFullscreen = r
    }

    function _(e) {
        var t = e.target;
        if (!(t.currentTime < 0 || t.seeking)) {
            if ("play" === e.type || "playing" === e.type) x(t, "start");
            else if ("ended" === e.type) x(t, "end");
            else if (0 < t.duration && 0 < t.currentTime) {
                var n = t.currentTime / t.duration;
                .25 <= n && x(t, "prog25"), .5 <= n && x(t, "prog50"), .75 <= n && x(t, "prog75"), t.loop && .95 <= n && x(t, "end")
            }
            if (!Object.keys(t._adfEvents).length)
                for (var r = 0; r < a.length; r++) t.removeEventListener(a[r], _)
        }
    }

    function x(e, t) {
        e._adfEvents[t] && (o.sendEvent(y[t]), delete e._adfEvents[t])
    }
    o.on("DOMNodeInserted", function(e) {
        if ("VIDEO" === e.nodeName) E(e);
        else if (e.getElementsByTagName)
            for (var t = e.getElementsByTagName("video"), n = 0; n < t.length; n++) E(t[n])
    }), e.addEventListener("DOMContentLoaded", function() {
        E()
    }, !0), o.on("trackVideo", function(t) {
        for (var e = 0; e < a.length; e++) t.addEventListener(a[e], _, !1);
        for (var n in t._adfEvents = {}, y) t._adfEvents[n] = !0;
        for (var r in b) t.addEventListener(r, b[r], !1);
        for (; 0 < s.length;) i.addEventListener(s[0], function(e) {
            w(e, t)
        }, !1), s.splice(0, 1);
        t.addEventListener("webkitbeginfullscreen", w, !1), t.addEventListener("webkitendfullscreen", w, !1), t.autoplay && setTimeout(function() {
            t._adfmAutoplay = !0
        }, 3e3)
    })
}(Adform = window.Adform || {}, window, document),
function(i, e, t, n) {
    var a = "default",
        s = "expanded",
        u = "resized",
        c = "hidden",
        l = "inline",
        f = "interstitial",
        r = !1,
        o = !1;
    try {
        o = e.mraid && "unknown" !== mraid.getState()
    } catch (e) {}

    function d() {
        !e.mraid || r && mraid._adfTracking || (i.emit("mraidLoading"), mraid.getState && "loading" === mraid.getState() ? mraid.addEventListener("ready", m) : m(), r = !0, mraid._adfTracking = !0)
    }

    function m() {
        i.emit("mraidReady");
        var n = mraid.open;
        try {
            mraid.open = function(e) {
                var t = e;
                return "string" == typeof e && (!e.length || /^http/i.test(e)) && i.tagData && i.tagData.clickUrls && i.tagData.defaultClickTag && -1 === e.indexOf(i.trackingUrlBase) && (t = i.getClickURL()) && e && (t += encodeURIComponent(e)), n.call(mraid, t)
            }
        } catch (e) {}
        var r = !1,
            o = null;
        mraid.addEventListener("stateChange", function(e) {
            if (!e && mraid.getState && (e = mraid.getState()), o !== e || e === u) {
                var t = l,
                    n = null;
                switch (mraid.getPlacementType && (t = mraid.getPlacementType()), e) {
                    case s:
                    case u:
                        n = r ? i.EVENT_OTHER_EXPAND : i.EVENT_FIRST_EXPAND, r = !0;
                        break;
                    case a:
                        r && (n = i.EVENT_CLOSE);
                        break;
                    case c:
                        t === f && (n = i.EVENT_CLOSE)
                }
                n && i.sendEvent(n)
            }
            o = e
        })
    }
    o ? d() : e.addEventListener("DOMContentLoaded", d, !0), i.on("DOMNodeInserted", function(e) {
        "SCRIPT" === e.nodeName && /mraid\.js/i.test(e.src) && (d(), e.addEventListener("load", d, !1))
    })
}(Adform = window.Adform || {}, window, document),
function i(a, s, u) {
    function c(t, e) {
        if (!s[t]) {
            if (!a[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (l) return l(t, !0);
                var r = new Error("Cannot find module '" + t + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            var o = s[t] = {
                exports: {}
            };
            a[t][0].call(o.exports, function(e) {
                return c(a[t][1][e] || e)
            }, o, o.exports, i, a, s, u)
        }
        return s[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < u.length; e++) c(u[e]);
    return c
}({
    1: [function(e, t, n) {
        var E = e(46),
            w = e(39),
            _ = e(34),
            x = e(33),
            S = e(12).inViewMouse,
            I = e(15).time,
            T = e(15).count,
            O = e(16),
            M = e(13).maxPercent,
            D = e(13).percent,
            A = e(13).inView,
            P = e(17),
            N = e(10),
            V = e(14),
            j = e(8).bxdRatio,
            $ = e(8).bxdTime,
            C = e(51),
            L = e(9),
            k = e(11).calcIsLarge,
            R = e(11).calcWasLarge,
            F = E.timer;

        function U(e, t) {
            return void 0 === e.value && (e.value = t), e
        }
        t.exports = function(e) {
            var t = e.$active,
                n = e.$boundsArea,
                r = e.$viewArea,
                o = e.$clientArea,
                i = e.$videoPlay,
                a = e.$expands,
                s = e.$engagements,
                u = e.$mouse,
                c = e.$geom,
                l = C.$clicks,
                f = e.tagData,
                d = f.pubData,
                m = !f.isMobile,
                p = e.adData.width,
                v = e.adData.height,
                g = f.visibleArea,
                h = f.visibleTime,
                y = [],
                b = [];
            _(h, function(e) {
                y.push(1e3 * e), b.push(0)
            }), e.visibilityPercent = {
                value: 0
            }, e.heatmap = {}, e.pubInview = {}, e.pubVisibilityTime = {}, e.pubImpression = {}, e.isLarge = {
                value: !1
            }, e.wasLarge = {
                value: !1
            }, x(e, {
                wasActive: [t, P],
                percent: [t, n, r, D],
                isLarge: [n, k(m)],
                wasLarge: ["isLarge", R],
                inview: ["percent", "isLarge", A(g)],
                visibilityPercent: ["visibilityPercent", "percent", M],
                visibilityTime: ["inview", F, O(y)],
                bxdRatio: ["inview", r, o, j],
                bxdTime: ["bxdRatio", "visibilityTime", $()],
                mouse: [u, "inview", "impress", S],
                mouseTimeDelay: ["mouse", F, I(1e3)],
                mouseCountDelay: ["mouse", F, T(1e3)],
                mouseTime: ["mouse", F, I(0)],
                mouseCount: ["mouse", F, T(0)],
                position: [c, V],
                videoTime: [i, F, I(0)],
                expandTime: [a, F, I(0)],
                engagementTime: [s, F, I(0)],
                impress: ["visibilityTime", N]
            }), w.add(E.poke), U(e.percent, 0), U(e.inview, [!1, !1, !1]), U(e.mouse, !1), U(e.mouseTime, 0), U(e.mouseCount, 0), U(e.mouseTimeDelay, 0), U(e.mouseCountDelay, 0), U(e.visibilityTime, b), U(e.bxdRatio, 0), U(e.bxdTime, 0), U(e.videoTime, 0), U(e.expandTime, 0), U(e.engagementTime, 0), U(e.position, {
                x: 0,
                y: 0
            }), U(e.heatmap, []), U(e.wasActive, !1), U(e.pubInview, !1), U(e.pubVisibilityTime, [0]), U(e.impress, !1), E.spin(e.heatmap, [l], L(p, v, e.percent, e.$geom)), d && (E.spin(e.pubInview, [e.percent], A([d.visibleArea || 50])), E.spin(e.pubVisibilityTime, [e.pubInview, F], O([1e3 * (d.visibleTime || 1)])), E.spin(e.pubImpression, [e.pubVisibilityTime], N));
            return e
        }
    }, {
        10: 10,
        11: 11,
        12: 12,
        13: 13,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        33: 33,
        34: 34,
        39: 39,
        46: 46,
        51: 51,
        8: 8,
        9: 9
    }],
    2: [function(e, t, n) {
        var r = e(55).Adform,
            o = e(46),
            i = {
                story: []
            },
            a = {
                story: []
            };

        function s(e) {
            o.stick(i, "playing" === e.type)
        }
        o.stick(a, !1), o.stick(i, !1), t.exports = {
            videoPlay: i,
            videoFullscreen: a
        }, r.on("trackVideo", function(e) {
            e.addEventListener("playing", s), e.addEventListener("pause", s)
        }), r.on("videoFullscreenOn", function() {
            o.stick(a, !0)
        }), r.on("videoFullscreenOff", function() {
            o.stick(a, !1)
        })
    }, {
        46: 46,
        55: 55
    }],
    3: [function(e, t, n) {
        try {
            var a, r, s, o, i, u, c = e(55),
                l = e(40),
                f = e(46),
                d = e(34),
                m = e(32),
                p = e(50),
                v = e(30),
                g = e(48),
                h = e(41).area,
                y = e(44),
                b = e(36),
                E = e(6),
                w = e(1),
                _ = e(5),
                x = c.Adform,
                S = c.parent,
                I = c.document,
                T = v(c),
                O = T[1];
            try {
                a = c.frameElement
            } catch (e) {}
            O && (r = a && a.getAttribute("data-adfm-ad"), s = null !== r, u = (o = S.Adform) && o.adData), i = x.adData, r = (r || 0) + "";
            var M = x.tagData,
                D = (u || i || [])[r];
            if (s && o && o.adData ? D = o.adData[r] : x.adData && (D = x.adData[r]), !M) throw new Error("Tag data not found");
            if (!D) throw new Error("Ad data not found " + JSON.stringify(i) + "\n" + JSON.stringify(u));
            var A = p.get(r, "mobile"),
                P = [function(e) {
                    x.emit("visibilityData", {
                        isViewable: e >= A.tagData.visibleArea[0],
                        visibleArea: e,
                        maxVisibleArea: L("visibilityPercent"),
                        visibleTime: L("visibilityTime").slice(),
                        bxdTime: L("bxdTime"),
                        bxdRatio: L("bxdRatio"),
                        expandTime: L("expandTime"),
                        videoTime: L("videoTime"),
                        engagementTime: L("engagementTime")
                    })
                }];
            A.tagData = M, A.adData = D, A.initialized = !1, A.trackingUrlBase = x.trackingUrlBase, m(c, "load", function() {
                var n = e(22);
                n || l("no_driver", D && D.bn, .5);
                var r = !!n && D && M;
                y(V, 100, 5e3, function(e, t) {
                    e ? l("no_elements", D && D.bn + "\n" + e, .5) : r && !A.initialized && t && (A.accessTop = T[T.length - 1], A.measurementMethod = n.type, E(A, t), w(A), M.unloadDisabled || (A.isAppView = x.utils && x.utils.is && x.utils.is.appView(), _.register(A)), A.adData.getEngagementData = function() {
                        return _.prepareQuery(A)
                    }, f.observe(A.impress, function e(t) {
                        t && (M.rtbData && M.rtbwp && x.sendEvent([178, "Viewable impressions"]), $(A.percent.value), f.forget(A.impress, e))
                    }), f.observe(A.percent, function(e) {
                        $(e)
                    }), A.initialized = +new Date)
                })
            }), x.on("mraidReady", function() {
                var e = x.mraidFrameBridge || o && o.mraidBridge;
                e && (A.mraidBridge = e, P.push(C))
            })
        } catch (e) {
            var N = "" + (e.stack || e);
            N.indexOf(e.message || "") < 0 && (N = e + "\n" + N), (new c.Image).src = (c.Adform && c.Adform.host || "//track.adform.net") + "/jslog/?src=" + encodeURIComponent("fatal_mscope") + "&msg=" + encodeURIComponent(N)
        }

        function V() {
            var e, t, n, r, o = I.body,
                i = j(I.documentElement);
            return s ? (r = a) && r.style && "none" === r.style.display ? D.container && (e = [D.container]) : e = [a] : i ? e = [i] : o && (j(o) ? e = [o] : (t = b(o, 1e10, 1e10, 1 / 0)) && (e = [t])), e && e.length ? e : (n = I.getElementById("image") || I.getElementById("adf-banner")) ? [n] : void 0
        }

        function j(e) {
            return e && h(g(e)) && e
        }

        function $(t) {
            d(P, function(e) {
                e(t)
            })
        }

        function C(e) {
            A.mraidBridge.notify(r, "isViewable", L("inview"), e)
        }

        function L(e) {
            return A[e].value
        }
    }, {
        1: 1,
        22: 22,
        30: 30,
        32: 32,
        34: 34,
        36: 36,
        40: 40,
        41: 41,
        44: 44,
        46: 46,
        48: 48,
        5: 5,
        50: 50,
        55: 55,
        6: 6
    }],
    4: [function(e, t, n) {
        var r, o = e(55),
            i = e(46),
            a = e(39),
            s = o.mraid,
            u = {
                story: []
            };

        function c(e) {
            try {
                r = e.getState()
            } catch (e) {}
            e.addEventListener("stateChange", l)
        }

        function l(e) {
            i.stick(u, f(e))
        }

        function f(e) {
            return "expanded" === e || "resized" === e
        }
        s ? c(s) : a.add(function e() {
            var t = o.mraid;
            t && (c(t), a.remove(e))
        }), i.stick(u, f(r)), t.exports = {
            expands: u
        }
    }, {
        39: 39,
        46: 46,
        55: 55
    }],
    5: [function(e, t, n) {
        var c, r = e(43)(),
            o = e(42),
            a = e(46),
            s = e(55),
            i = s.navigator,
            u = e(32),
            l = e(7),
            f = s.setTimeout,
            d = Math.round,
            m = r._mscope = r._mscope || {
                send: function(e) {
                    p.push(e), h(p)
                }
            },
            p = [],
            v = 1464,
            g = 6e5,
            h = o(r, function(e) {
                c && (b(e), p = [])
            }, 50);

        function y(e) {
            var t = e.tagData,
                n = w(e.visibilityTime),
                r = w(e.position),
                o = t.id + ",";
            return o += t.imprid + ",", o += [d(w(e.visibilityPercent)), n[0], w(e.mouseCountDelay), d(r.x), d(r.y), w(e.mouseTimeDelay), w(e.videoTime), w(e.engagementTime), w(e.expandTime), w(e.heatmap).join(";"), d(w(e.bxdTime)), e.accessTop ? 0 : 1, t.rtbInventorySourceId || "", t.rtbReqId || "", n[1] || "", n[2] || "", w(e.wasActive) ? 1 : 0, w(e.mouseCount), w(e.mouseTime), t.uData || "", t.adxVars || "", w(e.wasLarge) ? 1 : "", e.isFirst + "" + e.measurementMethod, e.isAppView].join("|"), e.isFirst = 0, o
        }

        function b(e, t) {
            var n, r, o = c[0] + (t || "") + c[1],
                i = v - o.length,
                a = 0,
                s = [],
                u = e.length;
            for (r = 0; r < u; r++) i < (a += (n = e[r]).length) && (s.length && (E(o + s.join("@@")), s = []), a = n.length), s.push(n);
            E(o + s.join("@@"))
        }

        function E(t) {
            if (!!i.sendBeacon) try {
                i.sendBeacon(t)
            } catch (e) {
                s.Image().src = t
            } else(new r.Image).src = t
        }

        function w(e) {
            return e.value
        }
        u(s, "beforeunload", function() {}), t.exports = {
            register: function(o) {
                c = [o.trackingUrlBase + "/serving/unload/?version=15", "&msrc=1&unload=" + o.tagData.icid + "@@"], o.isFirst = 1;
                var i = (e = o, function() {
                    +new Date - e.initialized < g && m.send(y(e))
                });
                var e;
                u(s, "unload", function() {
                    b([y(o)])
                }), a.observe(l, i), a.observe(o.pubImpression, function e(t, n, r) {
                    t && (a.forget(r, e), b([y(o)], "&pud=" + o.tagData.pubData.data))
                }), a.observe(o.impress, function e(t, n, r) {
                    t && (a.forget(r, e), i())
                }), f(i, 54e4), f(i, 5e3)
            },
            prepareQuery: y
        }
    }, {
        32: 32,
        42: 42,
        43: 43,
        46: 46,
        55: 55,
        7: 7
    }],
    6: [function(e, t, n) {
        var r = e(46),
            o = e(41),
            i = e(49),
            a = e(52),
            s = e(53),
            u = e(2).videoFullscreen,
            c = e(2).videoPlay,
            l = e(4).expands,
            f = r.spin({
                story: []
            }, [c, l], function(e, t) {
                return e || t
            }),
            d = e(7),
            m = e(54),
            p = r.spin({
                story: []
            }, [d, m, u], function(e, t, n) {
                return e && t || n
            });

        function v(e) {
            return o.area(e.client)
        }

        function g(e) {
            return i(e.bounds)
        }

        function h(e) {
            return i(e.view)
        }
        t.exports = function(e, t) {
            return e.$elements = {}, e.$geom = {}, e.$active = p, e.$videoPlay = c, e.$expands = l, e.$engagements = f, e.$clientArea = {
                story: []
            }, e.$boundsArea = {
                story: []
            }, e.$viewArea = {
                story: []
            }, e.$mouse = {
                story: []
            }, r.stick(e.$elements, t), r.spin(e.$clientArea, [e.$geom], v), r.spin(e.$boundsArea, [e.$geom], g), r.spin(e.$viewArea, [e.$geom], h), a(e), s(e), e
        }
    }, {
        2: 2,
        4: 4,
        41: 41,
        46: 46,
        49: 49,
        52: 52,
        53: 53,
        54: 54,
        7: 7
    }],
    7: [function(e, t, n) {
        var r, o = e(46),
            i = e(32),
            a = e(45),
            s = e(55).document,
            u = e(43)().mraid,
            c = {
                story: []
            };

        function l() {
            o.stick(c, !s[r.property])
        }

        function f(e) {
            try {
                e = e || u.getState()
            } catch (e) {}
            o.stick(c, "hidden" !== e)
        }
        t.exports = c, r = a("hidden", s), i(s, r.prefix + "visibilitychange", l, !1), u && i(u, "stateChange", f), l()
    }, {
        32: 32,
        43: 43,
        45: 45,
        46: 46,
        55: 55
    }],
    8: [function(e, t, n) {
        t.exports = {
            bxdRatio: function(e, t, n) {
                return e && e[0] ? t / n : 0
            },
            bxdTime: function() {
                var a, s = 0,
                    u = 0;
                return function(e, t, n, r) {
                    var o = t[0],
                        i = o - u;
                    return u = o, a = e = (r ? e : a) || e, s += i * e
                }
            }
        }
    }, {}],
    9: [function(e, t, n) {
        var d = e(46),
            m = e(41),
            p = Math.ceil;
        t.exports = function(s, u, c, l) {
            var f = [];
            return s = 1 < s ? s : 320, u = 1 < u ? u : 480,
                function(e) {
                    var t = {},
                        n = l.value.bounds[0],
                        r = m.width(n),
                        o = m.height(n),
                        i = e.x,
                        a = e.y;
                    return e.EOL || 150 <= f.length ? d.eol(f) : (0 < c.value && 0 < i && 0 < a && (t = p(i * (s / r)) + ":" + p(a * (u / o)), f.push(t)), f)
                }
        }
    }, {
        41: 41,
        46: 46
    }],
    10: [function(e, t, n) {
        var r = e(46);
        t.exports = function(e) {
            if (e && e[0]) return r.eol(!0)
        }
    }, {
        46: 46
    }],
    11: [function(e, t, n) {
        var r = e(46);
        t.exports = {
            calcIsLarge: function(t) {
                return function(e) {
                    return t && 242500 <= e
                }
            },
            calcWasLarge: function(e) {
                if (e) return r.eol(!0)
            }
        }
    }, {
        46: 46
    }],
    12: [function(e, t, n) {
        t.exports = {
            inViewMouse: function(e, t, n, r, o) {
                return e && t && n && 1 != o
            }
        }
    }, {}],
    13: [function(e, t, n) {
        var r = e(46),
            o = e(40);
        t.exports = {
            maxPercent: function(e, t) {
                100 < (e = Math.max(e, Math.round(t))) && (o("bigmaxpercent", e, 1), e = 100);
                return 100 === e ? r.eol(e) : e
            },
            percent: function(e, t, n, r, o) {
                if (1 != o) return e && t && 100 * n / t || 0
            },
            inView: function(r) {
                var o;
                return function(e, t) {
                    o = [(t ? 30 : r[0]) <= e];
                    for (var n = 1; n < r.length; n++) o[n] = e >= r[n];
                    return o
                }
            }
        }
    }, {
        40: 40,
        46: 46
    }],
    14: [function(e, t, n) {
        var r = e(46);
        t.exports = function(e) {
            if (e.bounds) return r.eol({
                x: e.bounds[0][0],
                y: e.bounds[0][1]
            })
        }
    }, {
        46: 46
    }],
    15: [function(e, t, n) {
        t.exports = {
            time: function(a) {
                var s = 0,
                    u = 0;
                return function(e, t, n, r) {
                    var o = r ? t : n,
                        i = s ? o - s : 0;
                    return s = e ? s || o : 0, i < a && (i = 0), !e && i && (u += i, i = 0), u + i
                }
            },
            count: function(a) {
                var s = 0,
                    u = 0;
                return function(e, t, n, r) {
                    var o = r ? t : n,
                        i = s ? o - s : 0;
                    return s = e ? s || o : 0, i < a && (i = 0), !e && i && (u += 1, i = 0), u + (i ? 1 : 0)
                }
            }
        }
    }, {}],
    16: [function(e, t, n) {
        t.exports = function(u) {
            for (var c = [], l = [], e = 0; e < u.length; e++) c.push(0), l.push(0);
            return function(e, t, n, r) {
                for (var o = [], i = 0; i < u.length; i++) {
                    var a = r ? t : n,
                        s = c[i] ? a - c[i] : 0;
                    c[i] = e[i] ? c[i] || a : 0, !l[i] && s < u[i] && (s = 0), !e[i] && s && (l[i] += s, s = 0), o[i] = l[i] + s
                }
                return o
            }
        }
    }, {}],
    17: [function(e, t, n) {
        var r = e(46);
        t.exports = function(e) {
            if (e) return r.eol(!0)
        }
    }, {
        46: 46
    }],
    18: [function(e, t, n) {
        var i = e(43)(),
            r = e(41),
            a = r.fromObject,
            s = r.moveby,
            u = r.overlap,
            c = r.copy,
            o = e(21),
            l = e(19),
            f = o || l,
            d = {},
            m = i.context,
            p = m && m.observeIntersection;

        function v(e) {
            var t, n, r, o = e.pop();
            t = o.intersectionRect, n = o.boundingClientRect, r = o.rootBounds, d.client = r ? a(r) : [0, 0, i.outerWidth, i.outerHeight], d.bounds = a(n), d.view = a(t)
        }
        t.exports = p ? (v([m.initialIntersection]), p.call(m, v), function(e) {
            var t = f(e),
                n = {};
            if (!t.bounds) return t;
            var r = c(t.bounds),
                o = c(t.view),
                i = d.view,
                a = d.bounds;
            return n.client = d.client, s(r, a[0], a[1]), s(o, i[0], i[1]), u(o, i), n.bounds = r, n.view = o, n
        }) : null
    }, {
        19: 19,
        21: 21,
        41: 41,
        43: 43
    }],
    19: [function(e, t, n) {
        var r = e(41),
            o = e(47),
            s = e(48),
            u = o.size,
            c = r.moveby,
            l = r.overlap,
            f = r.copy;
        t.exports = function(e) {
            var t, n, r, o, i, a;
            for (; e;) t = e.ownerDocument, n = t.defaultView || t.parentWindow, r = u(n), o = s(e), i ? (c(i, o[0], o[1]), c(a, o[0], o[1]), l(a, r)) : a = l(f(i = o), r), e = n.frameElement;
            return {
                client: r,
                bounds: i,
                view: a
            }
        }
    }, {
        41: 41,
        47: 47,
        48: 48
    }],
    20: [function(e, t, n) {
        var u = e(41),
            c = e(28),
            r = e(31);
        t.exports = !r && e(55).mozInnerScreenX ? function(e) {
            var t, n = e.ownerDocument.defaultView,
                r = c(e),
                o = r.bounds,
                i = r.view,
                a = n.mozInnerScreenX - n.screenX,
                s = n.mozInnerScreenY - n.screenY;
            return u.moveby(o, a, s), u.moveby(i, a, s), t = [0, 0, n.outerWidth, n.outerHeight], i = u.overlap(u.copy(t), i), {
                client: t,
                bounds: o,
                view: i
            }
        } : null
    }, {
        28: 28,
        31: 31,
        41: 41,
        55: 55
    }],
    21: [function(e, t, n) {
        var r, o, c = e(55),
            l = e(41).fromObject,
            f = e(41).area,
            d = e(41).copy,
            i = [],
            a = [],
            s = !c.mozInnerScreenX && c.IntersectionObserver;
        if (s) {
            for (r = 0; r <= 100; r++) i.push(r / 100);
            o = new s(function(e) {
                for (var t, n, r, o, i, a, s = 0, u = e.length; s < u; s++) t = e[s].target, r = e[s].intersectionRect, o = e[s].boundingClientRect, i = e[s].rootBounds, (n = m(t)).client = i ? l(i) : [0, 0, c.outerWidth, c.outerHeight], n.bounds = l(o), n.view = l(r), a = f(n.view), f(n.bounds) < a && (n.view = d(n.bounds))
            }, {
                threshold: i
            })
        }

        function m(e) {
            for (var t, n = 0, r = a.length; n < r; n++)
                if (a[n].element == e) {
                    t = a[n];
                    break
                }
            return t
        }
        t.exports = o ? function(e) {
            var t = m(e);
            t || (t = {
                element: e
            }, a.push(t), o.observe(e));
            var n = {};
            t.client && (n.client = d(t.client), n.bounds = d(t.bounds), n.view = d(t.view));
            return n
        } : null
    }, {
        41: 41,
        55: 55
    }],
    22: [function(e, t, n) {
        var r, o, i = e(31),
            a = [
                [10, e(25), !0],
                [8, e(29), !0],
                [7, e(23), !0],
                [1, e(21), !0],
                [0, e(19), i],
                [6, e(27), !0],
                [2, e(20), !0],
                [9, e(18), !0],
                [5, e(26), !0]
            ];
        for (o = 0; o < a.length; o++)
            if (r = a[o][2] && a[o][1]) {
                r.type = a[o][0];
                break
            }
        t.exports = r || null
    }, {
        18: 18,
        19: 19,
        20: 20,
        21: 21,
        23: 23,
        25: 25,
        26: 26,
        27: 27,
        29: 29,
        31: 31
    }],
    23: [function(e, t, n) {
        var u, r = e(40),
            c = e(41),
            o = e(21),
            i = e(19),
            l = o || i,
            a = e(43)(),
            s = e(55),
            f = e(35).isIOS,
            d = a.mraid,
            m = null,
            p = [1, 1, 1];
        if (d && d.addEventListener && !d._adfPoly) {
            u = r.messages.mraid = [d.getVersion && d.getVersion()];
            try {
                d.addEventListener("exposureChange", function(e, t) {
                    m = e ? t : {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                })
            } catch (e) {}
            f && s._com && r("mobiletvnu", "brokenmraid"), t.exports = function(e) {
                var t, n, r, o = l(e);
                if (!o.bounds) return o;
                var i = o.client,
                    a = o.bounds,
                    s = o.view;
                d.getScreenSize && d.getCurrentPosition ? (t = d.getScreenSize(), (n = d.getCurrentPosition()) && t || (p[0] && u.push("no bounds|screen"), p[0] = 0), n && (c.move(a, n.x, n.y), c.move(s, n.x, n.y), n = c.xy(n.x, n.y, n.width, n.height), c.overlap(s, n)), t && (i = c.resize(c(), t.width, t.height), c.overlap(s, i))) : d.getViewablePercentage && (p[1] && u.push("percentage"), p[1] = 0, r = parseInt(d.getViewablePercentage(), 10) / 100 || 1, c.scale(s, r, r));
                m ? (p[2] && u.push("visibleRectangle"), p[2] = 0, c.overlap(s, c.xy(m.x, m.y, m.width, m.height))) : d.isViewable() || (s = c());
                return {
                    client: i,
                    bounds: a,
                    view: s
                }
            }
        } else t.exports = null
    }, {
        19: 19,
        21: 21,
        35: 35,
        40: 40,
        41: 41,
        43: 43,
        55: 55
    }],
    24: [function(require, module, exports) {
        (function(global) {
            var $jscomp = $jscomp || {},
                Bn;
            $jscomp.scope = {}, $jscomp.arrayIteratorImpl = function(e) {
                    var t = 0;
                    return function() {
                        return t < e.length ? {
                            done: !1,
                            value: e[t++]
                        } : {
                            done: !0
                        }
                    }
                }, $jscomp.arrayIterator = function(e) {
                    return {
                        next: $jscomp.arrayIteratorImpl(e)
                    }
                }, $jscomp.ASSUME_ES5 = !1, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.SIMPLE_FROUND_POLYFILL = !1, $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                }, $jscomp.getGlobal = function(e) {
                    return "undefined" != typeof window && window === e ? e : void 0 !== global && null != global ? global : e
                }, $jscomp.global = $jscomp.getGlobal(this), $jscomp.SYMBOL_PREFIX = "jscomp_symbol_", $jscomp.initSymbol = function() {
                    $jscomp.initSymbol = function() {}, $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
                }, $jscomp.SymbolClass = function(e, t) {
                    this.$jscomp$symbol$id_ = e, $jscomp.defineProperty(this, "description", {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }, $jscomp.SymbolClass.prototype.toString = function() {
                    return this.$jscomp$symbol$id_
                }, $jscomp.Symbol = (Bn = 0, function e(t) {
                    if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (t || "") + "_" + Bn++, t)
                }), $jscomp.initSymbolIterator = function() {
                    $jscomp.initSymbol();
                    var e = $jscomp.global.Symbol.iterator;
                    e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator")), "function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
                        }
                    }), $jscomp.initSymbolIterator = function() {}
                }, $jscomp.initSymbolAsyncIterator = function() {
                    $jscomp.initSymbol();
                    var e = $jscomp.global.Symbol.asyncIterator;
                    e || (e = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator")), $jscomp.initSymbolAsyncIterator = function() {}
                }, $jscomp.iteratorPrototype = function(e) {
                    return $jscomp.initSymbolIterator(), (e = {
                        next: e
                    })[$jscomp.global.Symbol.iterator] = function() {
                        return this
                    }, e
                },
                function(n, e, r) {
                    if ("object" == typeof r && "string" != typeof r.nodeName) e(n, r);
                    else {
                        var o = function(e) {
                            for (var t in e) e.hasOwnProperty(t) && (e[t] = o(e[t]));
                            return Object.freeze(e)
                        };
                        r = {};
                        var t = ["1.2.15-dev"];
                        for (var i in e(n, r), r) r.hasOwnProperty(i) && (null == Object.getOwnPropertyDescriptor(n, i) && Object.defineProperty(n, i, {
                            value: {}
                        }), t.forEach(function(e) {
                            if (null == Object.getOwnPropertyDescriptor(n[i], e)) {
                                var t = o(r[i]);
                                Object.defineProperty(n[i], e, {
                                    get: function() {
                                        return t
                                    },
                                    enumerable: !0
                                })
                            }
                        }))
                    }
                }(void 0 === global ? this : global, function(d, f) {
                    function k(e, t) {
                        return e && (e[t] || (e[t] = {}))
                    }

                    function q(e, t) {
                        "undefined" != typeof jasmine && jasmine ? e() : "undefined" != typeof console && console && console.error && t()
                    }

                    function u(e, t) {
                        return t.reduce(function(e, t) {
                            return e && e[t]
                        }, e)
                    }
                    var c = c || {};
                    c.scope = {}, c.inherits = function(e, t) {
                        function n() {}
                        for (var r in n.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new n, e.prototype.constructor = e, t)
                            if ("prototype" != r)
                                if (Object.defineProperties) {
                                    var o = Object.getOwnPropertyDescriptor(t, r);
                                    o && Object.defineProperty(e, r, o)
                                } else e[r] = t[r]
                    }, c.ASSUME_ES5 = !1, c.ASSUME_NO_NATIVE_MAP = !1, c.ASSUME_NO_NATIVE_SET = !1, c.defineProperty = c.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                        e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                    }, c.getGlobal = function(e) {
                        return "undefined" != typeof window && window === e ? e : void 0 !== global && null != global ? global : e
                    }, c.global = c.getGlobal(this), c.SYMBOL_PREFIX = "jscomp_symbol_", c.initSymbol = function() {
                        c.initSymbol = function() {}, c.global.Symbol || (c.global.Symbol = c.Symbol)
                    }, c.symbolCounter_ = 0, c.Symbol = function(e) {
                        return c.SYMBOL_PREFIX + (e || "") + c.symbolCounter_++
                    }, c.initSymbolIterator = function() {
                        c.initSymbol();
                        var e = c.global.Symbol.iterator;
                        e || (e = c.global.Symbol.iterator = c.global.Symbol("iterator")), "function" != typeof Array.prototype[e] && c.defineProperty(Array.prototype, e, {
                            configurable: !0,
                            writable: !0,
                            value: function() {
                                return c.arrayIterator(this)
                            }
                        }), c.initSymbolIterator = function() {}
                    }, c.arrayIterator = function(e) {
                        var t = 0;
                        return c.iteratorPrototype(function() {
                            return t < e.length ? {
                                done: !1,
                                value: e[t++]
                            } : {
                                done: !0
                            }
                        })
                    }, c.iteratorPrototype = function(e) {
                        return c.initSymbolIterator(), (e = {
                            next: e
                        })[c.global.Symbol.iterator] = function() {
                            return this
                        }, e
                    }, c.makeIterator = function(e) {
                        c.initSymbolIterator(), c.initSymbol(), c.initSymbolIterator();
                        var t = e[Symbol.iterator];
                        return t ? t.call(e) : c.arrayIterator(e)
                    }, c.arrayFromIterator = function(e) {
                        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                        return n
                    }, c.arrayFromIterable = function(e) {
                        return e instanceof Array ? e : c.arrayFromIterator(c.makeIterator(e))
                    };
                    var g = {
                            assertTruthyString: function(e, t) {
                                if (!t) throw Error("Value for " + e + " is undefined, null or blank.");
                                if ("string" != typeof t && !(t instanceof String)) throw Error("Value for " + e + " is not a string.");
                                if ("" === t.trim()) throw Error("Value for " + e + " is empty string.")
                            },
                            assertNotNullObject: function(e, t) {
                                if (null == t) throw Error("Value for " + e + " is undefined or null")
                            },
                            assertNumber: function(e, t) {
                                if (null == t) throw Error(e + " must not be null or undefined.");
                                if ("number" != typeof t || isNaN(t)) throw Error("Value for " + e + " is not a number")
                            },
                            assertNumberBetween: function(e, t, n, r) {
                                if ((0, g.assertNumber)(e, t), t < n || r < t) throw Error("Value for " + e + " is outside the range [" + n + "," + r + "]")
                            },
                            assertFunction: function(e, t) {
                                if (!t) throw Error(e + " must not be truthy.")
                            },
                            assertPositiveNumber: function(e, t) {
                                if ((0, g.assertNumber)(e, t), t < 0) throw Error(e + " must be a positive number.")
                            }
                        },
                        x = function(e) {
                            return /\d+\.\d+\.\d+(-.*)?/.test(e)
                        },
                        z = function(e, t) {
                            e = e.split("-")[0].split("."), t = t.split("-")[0].split(".");
                            for (var n = 0; n < 3; n++) {
                                var r = parseInt(e[n], 10),
                                    o = parseInt(t[n], 10);
                                if (o < r) break;
                                if (r < o) return !1
                            }
                            return !0
                        },
                        A = function(e, t) {
                            return x(e) && z(e, "1.0.3") ? t : JSON.stringify(t)
                        },
                        B = function(e, t) {
                            return x(e) && z(e, "1.0.3") ? t || [] : t && "string" == typeof t ? JSON.parse(t) : []
                        },
                        p = function(e, t, n, r) {
                            this.guid = e, this.method = t, this.version = n, this.args = r
                        };
                    p.isValidSerializedMessage = function(e) {
                        return !!e && void 0 !== e.omid_message_guid && void 0 !== e.omid_message_method && void 0 !== e.omid_message_version && "string" == typeof e.omid_message_guid && "string" == typeof e.omid_message_method && "string" == typeof e.omid_message_version && (void 0 === e.omid_message_args || void 0 !== e.omid_message_args)
                    }, p.deserialize = function(e) {
                        return new p(e.omid_message_guid, e.omid_message_method, e.omid_message_version, e.omid_message_args)
                    }, p.prototype.serialize = function() {
                        var e = {};
                        return e.omid_message_guid = this.guid, e.omid_message_method = this.method, e.omid_message_version = this.version, e = e, void 0 !== this.args && (e.omid_message_args = this.args), e
                    };
                    var n = function(e) {
                        this.to = e, this.communicationType_ = "NONE"
                    };
                    n.prototype.sendMessage = function(e, t) {}, n.prototype.handleMessage = function(e, t) {
                        this.onMessage && this.onMessage(e, t)
                    }, n.prototype.generateGuid = function() {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var t = 16 * Math.random() | 0;
                            return "y" === e ? (3 & t | 8).toString(16) : t.toString(16)
                        })
                    }, n.prototype.serialize = function(e) {
                        return JSON.stringify(e)
                    }, n.prototype.deserialize = function(e) {
                        return JSON.parse(e)
                    }, n.prototype.isDirectCommunication = function() {
                        return "DIRECT" === this.communicationType_
                    };
                    var m = {
                            OMID_PRESENT_FRAME_NAME: "omid_v1_present",
                            isOmidPresent: function(e) {
                                try {
                                    return !!e.frames && !!e.frames[m.OMID_PRESENT_FRAME_NAME]
                                } catch (e) {
                                    return !1
                                }
                            },
                            declareOmidPresence: function(e) {
                                e.frames && e.document && (m.OMID_PRESENT_FRAME_NAME in e.frames || (null == e.document.body && m.isMutationObserverAvailable_(e) ? m.registerMutationObserver_(e) : e.document.body ? m.appendPresenceIframe_(e) : e.document.write('<iframe style="display:none" id="' + m.OMID_PRESENT_FRAME_NAME + '" name="' + m.OMID_PRESENT_FRAME_NAME + '"></iframe>')))
                            },
                            appendPresenceIframe_: function(e) {
                                var t = e.document.createElement("iframe");
                                t.id = m.OMID_PRESENT_FRAME_NAME, t.name = m.OMID_PRESENT_FRAME_NAME, t.style.display = "none", e.document.body.appendChild(t)
                            },
                            isMutationObserverAvailable_: function(e) {
                                return "MutationObserver" in e
                            },
                            registerMutationObserver_: function(t) {
                                var n = new MutationObserver(function(e) {
                                    e.forEach(function(e) {
                                        "BODY" === e.addedNodes[0].nodeName && (m.appendPresenceIframe_(t), n.disconnect())
                                    })
                                });
                                n.observe(t.document.documentElement, {
                                    childList: !0
                                })
                            }
                        },
                        r = function(e) {
                            n.call(this, e), this.communicationType_ = "DIRECT", this.handleExportedMessage = r.prototype.handleExportedMessage.bind(this)
                        };
                    c.inherits(r, n), r.prototype.sendMessage = function(e, t) {
                        if (!(t = void 0 === t ? this.to : t)) throw Error("Message destination must be defined at construction time or when sending the message.");
                        t.handleExportedMessage(e.serialize(), this)
                    }, r.prototype.handleExportedMessage = function(e, t) {
                        p.isValidSerializedMessage(e) && this.handleMessage(p.deserialize(e), t)
                    };
                    var v = {
                            error: function(e) {
                                for (var t = [], n = 0; n < arguments.length; ++n) t[n - 0] = arguments[n];
                                q(function() {
                                    throw new(Function.prototype.bind.apply(Error, [null].concat(["Could not complete the test successfully - "], c.arrayFromIterable(t))))
                                }, function() {
                                    return console.error.apply(console, [].concat(c.arrayFromIterable(t)))
                                })
                            },
                            debug: function(e) {
                                for (var t = [], n = 0; n < arguments.length; ++n) t[n - 0] = arguments[n];
                                q(function() {}, function() {
                                    return console.error.apply(console, [].concat(c.arrayFromIterable(t)))
                                })
                            }
                        },
                        w = eval("this"),
                        h = function() {
                            if (void 0 !== d && d) return d;
                            if (void 0 !== global && global) return global;
                            if ("undefined" != typeof window && window) return window;
                            if (void 0 !== w && w) return w;
                            throw Error("Could not determine global object context.")
                        }(),
                        t = function(e, t) {
                            t = void 0 === t ? h : t, n.call(this, t);
                            var r = this;
                            this.communicationType_ = "POST_MESSAGE", e.addEventListener("message", function(e) {
                                if ("object" == typeof e.data) {
                                    var t = e.data;
                                    p.isValidSerializedMessage(t) && (t = p.deserialize(t), e.source && r.handleMessage(t, e.source))
                                }
                            })
                        };
                    c.inherits(t, n), t.isCompatibleContext = function(e) {
                        return !!(e && e.addEventListener && e.postMessage)
                    }, t.prototype.sendMessage = function(e, t) {
                        if (!(t = void 0 === t ? this.to : t)) throw Error("Message destination must be defined at construction time or when sending the message.");
                        t.postMessage(e.serialize(), "*")
                    };
                    var C = function(t) {
                            if (void 0 === t && "undefined" != typeof window && window && (t = window), void 0 === t || !t || void 0 === t.top || !t.top) return h;
                            if (t === t.top) return t;
                            try {
                                var e = t.top;
                                return void 0 === e.location.hostname ? t : "" === e.x || "" !== e.x ? e : t
                            } catch (e) {
                                return t
                            }
                        },
                        D = function(e, n, o) {
                            return o = void 0 === o ? m.isOmidPresent : o, (n = u(e, n)) ? new r(n) : e.top && o(e.top) ? new t(e, e.top) : null
                        },
                        e = function(e) {
                            (this.communication = void 0 === e ? D(C(), ["omid", "v1_VerificationServiceCommunication"]) : e) ? this.communication.onMessage = this.handleMessage_.bind(this): (e = (e = h.omid3p) && "function" == typeof e.registerSessionObserver && "function" == typeof e.addEventListener ? e : null) && (this.omid3p = e), this.remoteIntervals_ = this.remoteTimeouts_ = 0, this.callbackMap_ = {}, this.imgCache_ = []
                        },
                        Iq, Jq, Kq;
                    e.prototype.isSupported = function() {
                        return !(!this.communication && !this.omid3p)
                    }, e.prototype.registerSessionObserver = function(e, t) {
                        (0, g.assertFunction)("functionToExecute", e), this.omid3p ? this.omid3p.registerSessionObserver(e, t) : this.sendMessage_("addSessionListener", e, t)
                    }, e.prototype.addEventListener = function(e, t) {
                        (0, g.assertTruthyString)("eventType", e), (0, g.assertFunction)("functionToExecute", t), this.omid3p ? this.omid3p.addEventListener(e, t) : this.sendMessage_("addEventListener", t, e)
                    }, e.prototype.sendUrl = function(e, t, n) {
                        (0, g.assertTruthyString)("url", e), h.document && h.document.createElement ? this.sendUrlWithImg_(e, t, n) : this.sendMessage_("sendUrl", function(e) {
                            e && t ? t() : !e && n && n()
                        }, e)
                    }, e.prototype.sendUrlWithImg_ = function(e, t, n) {
                        var r = this,
                            o = h.document.createElement("img");
                        this.imgCache_.push(o);
                        var i = function(e) {
                            var t = r.imgCache_.indexOf(o);
                            0 <= t && r.imgCache_.splice(t, 1), e && e()
                        };
                        o.addEventListener("load", i.bind(this, t)), o.addEventListener("error", i.bind(this, n)), o.src = e
                    }, e.prototype.injectJavaScriptResource = function(n, r, o) {
                        var i = this;
                        (0, g.assertTruthyString)("url", n), h.document ? this.injectJavascriptResourceUrlInDom_(n, r, o) : this.sendMessage_("injectJavaScriptResource", function(e, t) {
                            e ? (i.evaluateJavaScript_(t, n), r()) : (v.error("Service failed to load JavaScript resource."), o())
                        }, n)
                    }, e.prototype.injectJavascriptResourceUrlInDom_ = function(e, t, n) {
                        var r = h.document,
                            o = r.body;
                        (r = r.createElement("script")).onload = t, r.onerror = n, r.src = e, r.type = "application/javascript", o.appendChild(r)
                    }, e.prototype.evaluateJavaScript_ = function(a, b) {
                        try {
                            eval(a)
                        } catch (e) {
                            v.error('Error evaluating the JavaScript resource from "' + b + '".')
                        }
                    }, e.prototype.setTimeout = function(e, t) {
                        if ((0, g.assertFunction)("functionToExecute", e), (0, g.assertPositiveNumber)("timeInMillis", t), this.hasTimeoutMethods_()) return h.setTimeout(e, t);
                        var n = this.remoteTimeouts_++;
                        return this.sendMessage_("setTimeout", e, n, t), n
                    }, e.prototype.clearTimeout = function(e) {
                        (0, g.assertPositiveNumber)("timeoutId", e), this.hasTimeoutMethods_() ? h.clearTimeout(e) : this.sendOneWayMessage_("clearTimeout", e)
                    }, e.prototype.setInterval = function(e, t) {
                        if ((0, g.assertFunction)("functionToExecute", e), (0, g.assertPositiveNumber)("timeInMillis", t), this.hasIntervalMethods_()) return h.setInterval(e, t);
                        var n = this.remoteIntervals_++;
                        return this.sendMessage_("setInterval", e, n, t), n
                    }, e.prototype.clearInterval = function(e) {
                        (0, g.assertPositiveNumber)("intervalId", e), this.hasIntervalMethods_() ? h.clearInterval(e) : this.sendOneWayMessage_("clearInterval", e)
                    }, e.prototype.hasTimeoutMethods_ = function() {
                        return "function" == typeof h.setTimeout && "function" == typeof h.clearTimeout
                    }, e.prototype.hasIntervalMethods_ = function() {
                        return "function" == typeof h.setInterval && "function" == typeof h.clearInterval
                    }, e.prototype.handleMessage_ = function(e, t) {
                        t = e.method;
                        var n = e.guid;
                        if (e = e.args, "response" === t && this.callbackMap_[n]) {
                            var r = B("1.2.15-dev", e);
                            this.callbackMap_[n].apply(this, r)
                        }
                        "error" === t && window.console && v.error(e)
                    }, e.prototype.sendOneWayMessage_ = function(e, t) {
                        for (var n = [], r = 1; r < arguments.length; ++r) n[r - 1] = arguments[r];
                        this.sendMessage_.apply(this, [].concat([e, null], c.arrayFromIterable(n)))
                    }, e.prototype.sendMessage_ = function(e, t, n) {
                        for (var r = [], o = 2; o < arguments.length; ++o) r[o - 2] = arguments[o];
                        this.communication && (o = this.communication.generateGuid(), t && (this.callbackMap_[o] = t), r = new p(o, "VerificationService." + e, "1.2.15-dev", A("1.2.15-dev", r)), this.communication.sendMessage(r))
                    }, Iq = "OmidVerificationClient", Jq = e, (Kq = void 0 === Kq ? void 0 === f ? null : f : Kq) && ((Iq = Iq.split(".")).slice(0, Iq.length - 1).reduce(k, Kq)[Iq[Iq.length - 1]] = Jq)
                }, void 0 === exports ? void 0 : exports)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}],
    25: [function(e, t, n) {
        var f, d, m = e(41),
            r = e(21),
            o = e(43)(),
            i = e(55),
            a = e(19),
            p = r || a;
        o.omid3p && (i.omid3p = o.omid3p);
        var s = new(e(24).OmidVerificationClient);

        function u(e) {
            var t = e.data;
            t && (d = t.adView, f = t.viewport)
        }
        s && s.isSupported() ? (s.registerSessionObserver(u), s.addEventListener("geometryChange", u), t.exports = function(e) {
            var t = p(e),
                n = !(f && d);
            if (!t.bounds || n) return {};
            var r, o, i, a, s, u = t.client,
                c = t.bounds,
                l = t.view;
            return a = d.geometry || {
                x: 0,
                y: 0
            }, s = d.onScreenGeometry || {
                x: 0,
                y: 0,
                width: c[2],
                height: c[3]
            }, r = f.width || u[2], o = f.height || u[3], u = m(0, 0, r, o), m.move(c, a.x, a.y), i = 0 == d.percentageInView ? [0, 0, 0, 0] : m.xy(s.x, s.y, s.width, s.height), l = m.moveby(m.copy(l), a.x, a.y), m.overlap(l, i), {
                client: u,
                bounds: c,
                view: l
            }
        }) : t.exports = null
    }, {
        19: 19,
        21: 21,
        24: 24,
        41: 41,
        43: 43,
        55: 55
    }],
    26: [function(e, t, n) {
        var w = e(41),
            _ = e(19),
            x = e(43)(),
            r = e(35),
            S = x.document;
        t.exports = x.requestAnimationFrame && r.isSafari ? function(e) {
            var t, n, r;
            I || (o = S.documentElement, i = S.body, s = (a = o || i).scrollWidth || x.innerWidth, u = a.scrollHeight || x.innerHeight, c = (I = {
                x: [],
                y: []
            }).scanners = {
                x: [{
                    element: A(S, "x"),
                    direction: "left"
                }, {
                    element: A(S, "x"),
                    direction: "left"
                }],
                y: [{
                    element: A(S, "y"),
                    direction: "top"
                }, {
                    element: A(S, "y"),
                    direction: "top"
                }]
            }, D(x, (f = s, d = u, m = function() {
                var e = 0 | Math.min.apply(null, I.x),
                    t = 0 | Math.min.apply(null, I.y),
                    n = 0 | Math.max.apply(null, I.x),
                    r = 0 | Math.max.apply(null, I.y),
                    o = n - e || 0,
                    i = r - t || 0,
                    a = {
                        rect: w.xy(e, t, o && o + 2 || 0, i && i + 2 || 0),
                        time: Date.now()
                    };
                I.x = [], I.y = [], I.result = a
            }, v = 0, g = 1, h = (l = c).x, y = l.y, b = f / 2 | 0, E = d / 2 | 0, h[0].points = M(0, b, T, [0, 0]), h[1].points = M(b, f, T, null, [f - 2, f - 2]), y[0].points = M(0, E, T, [0, 0]), y[1].points = M(E, d, T, null, [d - 2, d - 2]), p = h[0].points.length - 1, function() {
                var e, t, n;
                for (var r in l) {
                    n = l[r];
                    for (var o = 0; o < n.length; o++) t = (e = n[o]).points[v], e.element.style[e.direction] = t + "px"
                }
                v === p ? g = 0 : 0 === v && (m(), g = 1), g ? v++ : v--
            })));
            var o, i, a, s, u, c, l, f, d, m, p, v, g, h, y, b, E;
            t = I.result, r = t && Date.now() - t.time > O, (!t || r) && (t = {
                rect: w()
            });
            return t = t.rect, n = _(e), w.move(t, 0, 0), w.overlap(n.view, t), n
        } : null;
        var I, T = 6,
            O = 800,
            c = {
                x: "top",
                y: "left"
            },
            o = {
                x: "offsetLeft",
                y: "offsetTop"
            };

        function M(e, t, n, r, o) {
            for (var i = (t - e) / n | 0, a = r || [], s = e + i, u = 1; u <= n; u++, s += i) a.push(s);
            return o && a.push.apply(a, o), a
        }

        function i(e, t, n) {
            var r = this.frameElement,
                o = {
                    scanner: r,
                    direction: e
                };
            o.value = r[t], n(o)
        }

        function D(t, n, r) {
            t.requestAnimationFrame(function e() {
                n.apply(t, r), t.requestAnimationFrame(e)
            })
        }

        function A(e, t) {
            var n = e.createElement("iframe"),
                r = n.style;
            return r.top = 0, r.left = 0, r.position = "absolute", r.width = "1px", r.height = "1px", r.border = "1px solid transparent", r.background = "transparent", n.onload = function() {
                D(this.contentWindow, i, [t, o[t], function(e) {
                    var t, n, r, o, i = Date.now(),
                        a = e.direction,
                        s = "x" == e.direction ? "y" : "x";
                    if (I[a].push(e.value), I["last" + a + u] = i, !I["last" + s + u] || 100 < i - I["last" + s + u]) {
                        t = I.scanners[s];
                        for (var u = 0; u < t.length; u++) n = t[u].element, r = c[s], o = e.value, n.style[r] = o + "px"
                    }
                }])
            }, e.body.appendChild(n), n
        }
    }, {
        19: 19,
        35: 35,
        41: 41,
        43: 43
    }],
    27: [function(e, t, n) {
        var d, m = e(41),
            p = e(28),
            r = e(31),
            o = e(43)();
        t.exports = !r && (d = o.$sf) && (d = d.ext) ? function(e) {
            var t, n, r, o, i, a, s, u = p(e),
                c = u.bounds,
                l = u.view,
                f = d.geom();
            l = f.par ? (n = m.fromSfObject(f.par), t = m.fromSfObject(f.self), r = t[0] - n[0], o = t[1] - n[1], m.moveby(c, r, o), m.moveby(l, r, o), s = m.moveby(n, -n[0], -n[1]), m.overlap(m.copy(s), l)) : (n = m.fromSfObject(f.win), i = f.self, a = m(0, 0, i.w * i.xiv, i.h * i.yiv), m.moveby(c, -c[0], -c[1]), m.moveby(l, -l[0], -l[1]), s = m.moveby(n, -n[0], -n[1]), m.overlap(a, l));
            return {
                client: s,
                bounds: c,
                view: l
            }
        } : null
    }, {
        28: 28,
        31: 31,
        41: 41,
        43: 43
    }],
    28: [function(e, t, n) {
        var a = e(41),
            s = e(47),
            u = e(48);
        t.exports = function(e) {
            var t = e.ownerDocument,
                n = t.defaultView || t.parentWindow,
                r = u(e),
                o = s.size(n),
                i = a.overlap(a.copy(o), r);
            return {
                client: o,
                bounds: r,
                view: i
            }
        }
    }, {
        41: 41,
        47: 47,
        48: 48
    }],
    29: [function(e, t, n) {
        var c, l, r = e(40),
            f = e(41),
            o = e(55),
            i = e(21),
            a = e(19),
            d = i || a,
            m = o.wisp,
            s = m && m.sdk && m.sdk.platform,
            p = [1, 1];
        t.exports = !s || "ios" != s && "android" != s ? null : (l = r.messages.wisp = [m.runtime && m.runtime.version], function(e) {
            if (!c)
                for (var t in m)
                    if (/^adObject.+/i.test(t)) {
                        c = m[t].inscreen;
                        break
                    }
            var n, r, o, i = d(e);
            if (!i.bounds) return i;
            var a = i.client,
                s = i.bounds,
                u = i.view;
            c.getCurrentPosition && m.layout && m.layout.viewport ? (r = c.getCurrentPosition(), n = m.layout.viewport(), r && n || (p[0] && l.push("no bounds|screen"), p[0] = 0), r && (f.move(s, r.x, r.y), f.move(u, r.x, r.y), r = f.xy(r.x, r.y, r.width, r.height), f.overlap(u, r)), n && (a = f.resize(f(), n.width, n.height), f.overlap(u, a))) : c.getCurrentPosition && c.getCurrentPosition().sizePct && (p[1] && l.push("noviewport"), p[1] = 0, o = parseInt(c.getCurrentPosition().sizePct, 10) / 100 || 1, f.scale(u, o, o));
            return {
                client: a,
                bounds: s,
                view: u
            }
        })
    }, {
        19: 19,
        21: 21,
        40: 40,
        41: 41,
        55: 55
    }],
    30: [function(e, t, n) {
        t.exports = function(e) {
            var t, n = 100,
                r = e.top,
                o = [!0];
            for (; --n && e && e != r && e != e.parent;) {
                try {
                    t = !!(e = e.parent).Image
                } catch (e) {
                    t = !1
                }
                o.push(t)
            }
            return o
        }
    }, {}],
    31: [function(e, t, n) {
        var r = e(55),
            o = !1;
        try {
            r.top.document.getElementById("_"), r.parent.document.getElementById("_"), o = !0
        } catch (e) {}
        t.exports = o
    }, {
        55: 55
    }],
    32: [function(e, t, n) {
        t.exports = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, o, !1) : e.attachEvent && e.attachEvent("on" + t, o);
            return o.remove = r, o;

            function r() {
                e.removeEventListener ? e.removeEventListener(t, o, !1) : e.detachEvent && e.detachEvent("on" + t, o)
            }

            function o() {
                if (Date) return n.apply(this, arguments);
                r()
            }
        }
    }, {}],
    33: [function(e, t, n) {
        var f = e(46);
        t.exports = function(e, t, n) {
            var r, o, i, a, s, u, c = [],
                l = [];
            for (r in t) t.hasOwnProperty(r) && ((o = e[r]) || (o = {}, e[r] = o), o.story || (c.push(o), void 0 === o.value ? o.story = [] : o.story = [{
                value: o.value,
                timestamp: -1
            }]), l.push([o, t[r]]));
            for (i = 0; i < l.length; i++) {
                for (o = l[i][0], s = l[i][1].slice(), u = s.pop(), a = 0; a < s.length; a++) "string" == typeof s[a] && (s[a] = e[s[a]]);
                f.spin(o, s, u)
            }
            for (i = 0; i < c.length; i++) delete c[i].story;
            return f.poke(n), e
        }
    }, {
        46: 46
    }],
    34: [function(e, t, n) {
        t.exports = function(e, t, n) {
            var r = 0,
                o = e.length;
            if (n = n || null, e.forEach) e.forEach(t, n);
            else
                for (; r < o; r++) t.call(n, e[r], r, e)
        }
    }, {}],
    35: [function(e, t, n) {
        var r, o = e(55),
            i = o.navigator,
            a = i.userAgent,
            s = i.vendor,
            u = (r = "apple computer", 0 <= ("" + s).toLowerCase().indexOf(r.toLowerCase())),
            c = !/Chrome|CriOS|Skyfire/i.test(a) && /Safari+\/[\.\d]+$/i.test(a) && u,
            l = parent !== o;
        t.exports = {
            isApple: u,
            isSafari: c,
            isWeb: l
        }
    }, {
        55: 55
    }],
    36: [function(e, t, n) {
        function v(e, t, n, r) {
            for (var o = e.parentNode, i = a(e[n], r) || a(e[r], r); !i && o !== t;) i = a(o[r], r), o = o.parentNode;
            return i
        }

        function a(e, t) {
            for (; e && 1 !== e.nodeType;) e = e[t];
            return e
        }
        t.exports = function(e, t, n, r) {
            var o, i, a, s, u = e.parentNode,
                c = e,
                l = e,
                f = [],
                d = t,
                m = n,
                p = null;
            r = r || 0;
            for (; c || l;) c && (c = v(c, u, "lastChild", "previousSibling")) && f.push(c), l && (l = v(l, u, "firstChild", "nextSibling")) && f.push(l);
            for (o = 0; o < f.length; o++) i = f[o], a = Math.abs(t - i.offsetWidth), s = Math.abs(n - i.offsetHeight), a + s < d + m && a <= r && s <= r && (d = a, m = s, p = i);
            return p
        }
    }, {}],
    37: [function(e, t, n) {
        var r = e(38);
        n.call = function(e, t) {
            var n;
            if (e)
                for (e = e.slice(), n = 0; n < e.length; n++) t ? e[n].apply(null, t) : e[n].call(null)
        }, n.add = function(e, t) {
            e ? r(e, t) < 0 && e.push(t) : e = [t];
            return e
        }, n.remove = function(e, t) {
            var n;
            e && (!e.length || 1 === e.length && e[0] === t ? (e.length = 0, e = null) : 0 <= (n = r(e, t)) && e.splice(n, 1));
            return e
        }
    }, {
        38: 38
    }],
    38: [function(e, t, n) {
        t.exports = function(e, t) {
            {
                if (e.indexOf) return e.indexOf(t);
                for (var n = e.length; n-- && e[n] !== t;);
                return n
            }
        }
    }, {}],
    39: [function(e, t, n) {
        n.add = function(e) {
            i.add(a, e), r || (r = o.setInterval(s, 100))
        }, n.remove = function(e) {
            i.remove(a, e)
        };
        var r, o = e(55),
            i = e(37),
            a = [];

        function s() {
            a.length ? i.call(a) : r && (o.clearInterval(r), r = null)
        }
    }, {
        37: 37,
        55: 55
    }],
    40: [function(e, t, n) {
        var r = (t.exports = o).messages = {};

        function o(e, t, n) {
            Math.random() < (n || .03) && ((new Image).src = (window.Adform && window.Adform.host || "//track.adform.net") + "/jslog/?src=" + encodeURIComponent(e) + "&msg=" + encodeURIComponent(t))
        }
        o.sendAll = function() {
            for (var e in r) r[e].length && o(e, r[e].join(" : "), 1), r[e] = []
        }
    }, {}],
    41: [function(e, t, n) {
        function o(e, t, n, r) {
            return [e || 0, t || 0, n || 0, r || 0]
        }

        function r(e) {
            return e[0] >= e[2] || e[1] >= e[3]
        }

        function i(e, t, n) {
            return e[0] += t, e[1] += n, e[2] += t, e[3] += n, e
        }

        function a(e) {
            return u(e, 0)
        }

        function s(e) {
            return u(e, 1)
        }

        function u(e, t) {
            return e[t + 2] - e[t]
        }

        function c(e, t) {
            return e[0] = Math.max(e[0], t[0]), e[1] = Math.max(e[1], t[1]), e[2] = Math.min(e[2], t[2]), e[3] = Math.min(e[3], t[3]), e
        }(n = t.exports = o).xy = function(e, t, n, r) {
            return o(e, t, e + n, t + r)
        }, n.fromObject = function(e) {
            return o(e.left, e.top, e.right, e.bottom)
        }, n.fromSfObject = function(e) {
            return o(+e.l, +e.t, +e.r, +e.b)
        }, n.object = function(e) {
            return {
                top: e[1],
                right: e[2],
                bottom: e[3],
                left: e[0],
                width: a(e),
                height: s(e)
            }
        }, n.copy = function(e) {
            return e.slice()
        }, n.normal = function(e) {
            return e[0] <= e[2] && e[1] <= e[3]
        }, n.empty = r, n.move = function(e, t, n) {
            return i(e, t - e[0], n - e[1])
        }, n.moveby = i, n.resize = function(e, t, n) {
            return e[2] = e[0] + t, e[3] = e[1] + n, e
        }, n.scale = function(e, t, n) {
            return e[2] = e[0] + u(e, 0) * t, e[3] = e[1] + u(e, 1) * n, e
        }, n.width = a, n.height = s, n.area = function(e) {
            return u(e, 0) * u(e, 1)
        }, n.intersect = c, n.overlap = function(e, t) {
            !r(e) && r(c(e, t)) && (e[0] = e[1] = e[2] = e[3] = 0);
            return e
        }
    }, {}],
    42: [function(e, t, n) {
        t.exports = function(e, t, n) {
            var r, o;

            function i() {
                o = !1;
                var e = r;
                r = null, t.apply(null, e)
            }
            return function() {
                r = a.call(arguments), o || (o = e.setTimeout(i, n))
            }
        };
        var a = Array.prototype.slice
    }, {}],
    43: [function(e, t, n) {
        var o = e(30),
            i = e(55);
        t.exports = function(e) {
            for (var t = e = e || i, n = o(e), r = 1; r < n.length; r++) e = e.parent, n[r] && (t = e);
            return t
        }
    }, {
        30: 30,
        55: 55
    }],
    44: [function(e, t, n) {
        t.exports = function(i, a, s, u) {
            var c = new Date,
                l = [],
                f = "function" == typeof i;
            i = f ? [i] : i, (u = u || s || a) == s ? (s = a, a = 50) : u == a && (s = 1e3, a = 50);
            ! function e() {
                var t, n, r, o;
                try {
                    for (r = i.length; r--;) null == l[r] && (l[r] = i[r](), null == l[r] && (t = !0))
                } catch (e) {
                    o = e
                }
                n = f ? l[0] : l;
                o ? u(o) : t ? new Date - c > s ? u(Error("Until timeout"), n) : setTimeout(e, a) : u(null, n)
            }()
        }
    }, {}],
    45: [function(e, t, n) {
        var i = ["", "moz", "ms", "webkit"];

        function r(e, t) {
            var n, r, o;
            for (n = i.length; n--;)
                if (r = e, i[n].length && (r = i[n] + r.charAt(0).toUpperCase() + r.slice(1)), r in t) {
                    o = {
                        property: r,
                        prefix: i[n]
                    };
                    break
                }
            return o || {
                property: e,
                prefix: ""
            }
        }(t.exports = r).prefixes = i.slice(1)
    }, {}],
    46: [function(e, t, n) {
        var p = {},
            r = 0,
            o = 9007199254740991,
            i = e(37),
            v = i.add,
            g = i.remove,
            a = i.call,
            s = [],
            u = !1,
            c = y({}, 0, -1);

        function h(e, t) {
            return e = e.event, t = t.event, (e.timestamp || -1) - (t.timestamp || -1) || (e.gid || 0) - (t.gid || 0)
        }

        function y(e, t, n) {
            var r;
            if (s.push([e, t, n]), !u) {
                for (u = !0; s.length;) l((r = s.shift())[0], r[1], r[2]);
                u = !1
            }
            return e
        }

        function l(e, t, n) {
            return e.value !== t && _(t) && (n = n || (Date.now ? Date.now() : +new Date), e.value = t, e.timestamp = n, e.gid = f(), e.story && e.story.push({
                value: t,
                timestamp: n,
                gid: r
            }), a(e.observe, [t, n, e])), e
        }

        function b(e, t) {
            return e.observe = g(e.observe, t), e.observe || delete e.observe, e
        }

        function E(e, t) {
            e.observe = v(e.observe, t)
        }

        function w(e, t) {
            return t ? {
                value: e,
                timestamp: t,
                gid: f()
            } : e && e.timestamp
        }

        function _(e) {
            return void 0 !== e
        }

        function f() {
            return r = (r + 1) % o
        }
        n.timer = c, n.stick = y, n.observe = function(e, t) {
            E(e, t), _(e.value) && t(e.value, e.timestamp, e);
            return e
        }, n.forget = b, n.free = function(e) {
            for (var t, n = 0; n < e.length; n++) t = e[n], a(t.free), delete t.observe, delete t.free
        }, n.spin = function(o, n, i) {
            var e, t, r, a = n.length,
                s = Array(a + 3),
                u = a,
                c = 0,
                l = Array(a),
                f = Array(a);
            for (s[a + 2] = n.concat([o]), o.free = v(o.free, m), e = 0; e < a; e++) t = n[e], l[e] = d(e), t.free = v(t.free, m), r = t.story, f[e] = r ? r.slice() : _(t.value) ? [t] : [], E(t, l[e]);
            return function(e, t) {
                var n, r, o, i, a, s = [];
                for (n = 0; n < e.length; n++)
                    for (o = e[n], r = 0; r < o.length; r++) s.push({
                        event: o[r],
                        index: n
                    });
                for (s.sort(h), n = 0; n < s.length; n++) i = s[n], a = i.event, t[i.index](a.value, a.timestamp || -1)
            }(f, l), o;

            function d(r) {
                return function(e, t) {
                    var n;
                    u && !_(s[r]) && u--, c < t && (c = t), s[r] = e, s[a] = c, s[a + 1] = r, u || ((n = i.apply(null, s)) && n.EOL === p && (n.timestamp || (n.timestamp = c), m()), w(n) ? y(o, n.value, n.timestamp) : _(n) && y(o, n, c))
                }
            }

            function m() {
                for (var e, t = a; t--;)(e = n[t]).free = g(e.free, m), b(e, l[t])
            }
        }, n.stamped = w, n.eol = function(e, t) {
            return {
                value: e,
                timestamp: t || -1,
                EOL: p
            }
        }, n.poke = function(e) {
            c.value = e || (Date.now ? Date.now() : +new Date), a(c.observe, [c.value, c.timestamp, c])
        }
    }, {
        37: 37
    }],
    47: [function(e, t, n) {
        var i = e(41),
            a = i.resize,
            s = i.move;

        function r(e, t) {
            return o(e, c(e, t))
        }

        function o(e, t) {
            var n = e.document,
                r = n.documentElement,
                o = n.body;
            return t = t || i(), e.innerWidth ? a(t, e.innerWidth, e.innerHeight) : a(t, (r || o).clientWidth, (r || o).clientHeight), t
        }

        function u(e, t) {
            var n = e.document,
                r = n.documentElement,
                o = n.body;
            return s(t || i(), r && r.scrollLeft || o && o.scrollLeft || 0, r && r.scrollTop || o && o.scrollTop || 0)
        }

        function c(e, t) {
            return "pageXOffset" in e ? s(t || i(), e.pageXOffset, e.pageYOffset) : u(e, t)
        }(t.exports = r).size = o, r.scroll = u, r.offset = c
    }, {
        41: 41
    }],
    48: [function(e, t, n) {
        var i = e(41),
            a = e(47);

        function s(e) {
            return i.fromObject(e.getBoundingClientRect())
        }

        function r(e) {
            var t = e.ownerDocument,
                n = t.defaultView || t.parentWindow,
                r = a.offset(n),
                o = a.scroll(n);
            return i.moveby(s(e), o[0] - r[0], o[1] - r[1])
        }(t.exports = r).bounds = s
    }, {
        41: 41,
        47: 47
    }],
    49: [function(e, t, n) {
        t.exports = function(e) {
            var t, n, r, o, i, a = 0;
            for (t = 0; t < e.length; t++)
                if (!c(e[t]))
                    for (i = [], a += s(e[t]), n = 0; n < t; n++)
                        if (o = u(l(e[t]), e[n]), !c(o)) {
                            for (a -= s(o), r = 0; r < i.length; r++) a += s(u(l(o), i[r]));
                            i.push(o)
                        }
            return a
        };
        var r = e(41),
            s = r.area,
            u = r.overlap,
            c = r.empty,
            l = r.copy
    }, {
        41: 41
    }],
    50: [function(e, t, n) {
        var o = Object.prototype.hasOwnProperty,
            i = {},
            a = [];

        function r(e, t) {
            var n, r;
            for (n = 0; n < t.length; n++) e = "string" == typeof(r = t[n]) ? (o.call(e, r) || (e === i && a.push(r), e[r] = {
                $key: r
            }), e[r]) : r;
            return e
        }
        n.get = function() {
            var e, t;
            if (arguments.length) t = r(i, arguments);
            else
                for (t = [], e = 0; e < a.length; e++) t.push(i[a[e]]);
            return t
        }, n.resolve = r
    }, {}],
    51: [function(e, t, n) {
        var r = e(46),
            o = e(34),
            i = e(32),
            a = e(55),
            s = a.navigator,
            u = a.document,
            c = s.pointerEnabled ? "pointerdown" : s.msPointerEnabled ? "MSPointerDown" : 0 < s.maxTouchPoints || "ontouchstart" in a ? "touchstart" : "mousedown",
            l = {},
            f = i(u, c, function(e) {
                var t = e.touches ? e.touches : [{
                    pageX: e.pageX,
                    pageY: e.pageY
                }];
                o(t, function(e) {
                    r.stick(l, {
                        x: e.pageX,
                        y: e.pageY
                    })
                })
            });
        t.exports = {
            $clicks: l,
            destroy: function() {
                f.remove(), r.stick(l, r.eol())
            }
        }
    }, {
        32: 32,
        34: 34,
        46: 46,
        55: 55
    }],
    52: [function(e, t, n) {
        var r = e(39),
            s = e(22),
            u = e(46);
        t.exports = function(a) {
            r.add(function() {
                var e, t, n, r = [],
                    o = [],
                    i = a.$elements.value;
                for (e = 0; e < i.length; e++) i[e].parentNode && (t = s(i[e]), n = t.client, r.push(t.bounds), o.push(t.view));
                n && u.stick(a.$geom, {
                    client: n,
                    bounds: r,
                    view: o
                })
            })
        }
    }, {
        22: 22,
        39: 39,
        46: 46
    }],
    53: [function(e, t, n) {
        var s = e(46),
            u = e(32),
            o = e(38);

        function c(e, t) {
            var n, r = e.length != t.length;
            if (!r)
                for (n = 0; n < e.length; n++)
                    if (o(t, e[n]) < 0) return !0;
            return r
        }
        t.exports = function(n) {
            var r, o = 0;

            function e(e) {
                var t;
                if (r && c(e, r)) {
                    for (t = o = 0; t < r.length; t++) r[t].mouseenter.remove(), r[t].mouseleave.remove();
                    s.stick(n.$mouse, !1)
                }
                for (t = 0; t < e.length; t++)(!r || r && c(e, r)) && (e[t].mouseenter = u(e[t], "mouseenter", i), e[t].mouseleave = u(e[t], "mouseleave", a));
                r = e
            }

            function i() {
                o || s.stick(n.$mouse, !0), o++
            }

            function a() {
                o || (o = 1), --o || s.stick(n.$mouse, !1)
            }
            s.observe(n.$elements, e), e(n.$elements.value)
        }
    }, {
        32: 32,
        38: 38,
        46: 46
    }],
    54: [function(e, t, n) {
        var o, i, a = e(46),
            r = e(7),
            s = e(32),
            u = e(55),
            c = u.document,
            l = !("ontouchstart" in c || "ontouchstart" in u) && e(31),
            f = u.setTimeout,
            d = {
                story: []
            },
            m = +new Date,
            p = -1,
            v = -1,
            g = 3e4;

        function h(e) {
            var t, n, r;
            (r = "mousemove" != (e = e || i.event).type) || (t = e.screenX, n = e.screenY, r = p !== t || v !== n, p = t, v = n), r && (m = +new Date, a.stick(d, !0), l && (o || y()))
        }

        function y() {
            var e = +new Date - m;
            o = g < e ? (a.stick(d, !1), !1) : f(y, g - e)
        }
        t.exports = d, l ? (i = u.top, c = i.document, s(i, "scroll", h), s(c, "mousemove", h), s(c, "mousedown", h), s(c, "mouseup", h), s(c, "keydown", h), a.observe(r, function() {
            h({})
        }), y()) : a.observe(r, function() {
            h({})
        })
    }, {
        31: 31,
        32: 32,
        46: 46,
        55: 55,
        7: 7
    }],
    55: [function(e, t, n) {
        t.exports = window
    }, {}]
}, {}, [3]);