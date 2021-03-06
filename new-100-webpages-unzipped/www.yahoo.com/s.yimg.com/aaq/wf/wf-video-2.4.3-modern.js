! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("wafer-video", [], t) : "object" == typeof exports ? exports["wafer-video"] = t() : (e.wafer = e.wafer || {}, e.wafer.wafers = e.wafer.wafers || {}, e.wafer.wafers["wafer-video"] = t())
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "https://s.yimg.com/aaq/wf/", t(t.s = "./src/entry.js")
    }({
        "./src/entry.js": function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                u = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                d = function e(t, n, r) {
                    null === t && (t = Function.prototype);
                    var i = Object.getOwnPropertyDescriptor(t, n);
                    if (void 0 === i) {
                        var a = Object.getPrototypeOf(t);
                        return null === a ? void 0 : e(a, n, r)
                    }
                    if ("value" in i) return i.value;
                    var o = i.get;
                    if (void 0 !== o) return o.call(r)
                },
                f = window.wafer,
                v = f.constants,
                y = f.utils,
                p = f.WaferBaseClass,
                h = v.ATTR_PREFIX,
                _ = y.each,
                m = y.isNodeName,
                g = y.removeCookie,
                w = [],
                b = window.wafer.utils.findAncestor,
                E = function(e) {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            a = n.errorClass,
                            o = n.selector,
                            s = n.successClass;
                        r(this, t);
                        var l = i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, {
                                errorClass: a,
                                selector: o,
                                successClass: s
                            }, {
                                STATE_ATTRS: w
                            })),
                            u = e.getAttribute(h + "src"),
                            d = e.getAttribute(h + "type") || "default",
                            f = e.getAttribute(h + "trigger") || "viewport",
                            v = e.getAttribute(h + "boundary"),
                            y = e.getAttribute(h + "autoplay");
                        return l._util = c({}, l._util, {
                            autoplay: null === y || void 0 === y ? 0 : Number(y),
                            boundary: v,
                            elem: e,
                            errorClass: a,
                            player: null,
                            selector: o,
                            src: u,
                            successClass: s,
                            trigger: f,
                            type: d
                        }), l._state = c({}, l._state, {
                            mounted: !1,
                            playing: !1,
                            status: status
                        }), l
                    }
                    return a(t, e), u(t, [{
                        key: "play",
                        value: function() {
                            var e = this._util.player;
                            e && (e.controls.play(), this._state.playing = !0)
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var e = this._util.player;
                            e && (e.controls.pause(), this._state.playing = !1)
                        }
                    }, {
                        key: "isDocked",
                        value: function() {
                            var e = this._util.player;
                            return !!e && e.isDocked()
                        }
                    }, {
                        key: "unDock",
                        value: function() {
                            var e = this._util.player;
                            e && (e.controls.pause(), e.undockVideoPlayer())
                        }
                    }, {
                        key: "create",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = e.config,
                                n = void 0 === t ? {} : t;
                            switch (this._util.type) {
                                case "yvideo":
                                    this._createYVideo(n);
                                    break;
                                default:
                                    this._createDefault()
                            }
                        }
                    }, {
                        key: "stateDidUpdate",
                        value: function() {}
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this._util.player;
                            e && (e.__destroyed = !0), d(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }, {
                        key: "_createDefault",
                        value: function() {
                            var e = this._util,
                                t = e.elem,
                                n = e.src;
                            if (n) t.src = n, this._itemLoaded();
                            else {
                                var r = this._util.errorClass;
                                m(t, "video") ? (_(t.getElementsByTagName("source"), function(e) {
                                    var t = e.getAttribute("data-wf-src");
                                    t && (e.setAttribute("src", t), e.removeAttribute("data-wf-src"))
                                }), t.load(), this._itemLoaded()) : t.classList.add(r)
                            }
                        }
                    }, {
                        key: "_createYVideo",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (!this._util.player) {
                                var t = this._util.elem,
                                    n = void 0;
                                try {
                                    n = JSON.parse(t.getAttribute(h + "video-config"))
                                } catch (e) {}
                                if (!n) return !1;
                                var r = c({}, e.rapidConfig, n.rapidConfig),
                                    i = this._util.autoplay,
                                    a = void 0 !== i && i;
                                n = c({}, e, n, {
                                    rapidConfig: r
                                });
                                var o = document.createElement("div"),
                                    s = n,
                                    l = s.height,
                                    u = s.width,
                                    d = parseInt(t.offsetWidth, 10),
                                    f = parseInt(t.offsetHeight, 10),
                                    v = {};
                                l = parseInt(l, 10), u = parseInt(u, 10);
                                var y = d,
                                    p = f;
                                u && (p = l * d / u), p > f && (p = f, y = l && u * p / l), u || l || (n.width = y, n.height = p), o.classList.add("wafer-yvideo"), n.forceDisableFirstAd && g("yvapF"), this._util.player = new window.YAHOO.VideoPlatform.VideoPlayer(c({
                                    startscreen: {
                                        showTitle: !0,
                                        showDesc: !0,
                                        showProvider: !1,
                                        showButton: !0
                                    },
                                    showControls: !0,
                                    fullscreenBtn: !0,
                                    replayonlyendscreen: !1,
                                    showTitleOnHover: !0,
                                    settingscreen: !1,
                                    enableFollowButtons: !0,
                                    enableSharedMediaStore: !1,
                                    energySaverMode: !1,
                                    enableLazy: !1,
                                    maintain16x9ratio: !0,
                                    renderOnServer: !1,
                                    videoOnly: !1,
                                    useAppDocking: !1,
                                    suppressPanelTitle: !1,
                                    mediaItem: null,
                                    videoManagerOptOut: !1,
                                    hidePlaylist: !1,
                                    hidePlaylistWhenSmall: !1,
                                    continuousPlay: !0,
                                    loop: !1,
                                    startTime: 0,
                                    fullscreen: !1,
                                    mute: !0,
                                    ccOnMute: !1,
                                    stopBufferingOnPause: !1,
                                    preload: !1,
                                    watchHistoryEnabled: !1,
                                    html5: !0,
                                    iframeRender: !1,
                                    rapidConfig: {
                                        pageParams: v
                                    }
                                }, n, {
                                    autoplay: !!a
                                })), t.appendChild(o), this._util.player.render(o), o.classList.add("wafer-video-rendered"), this._itemLoaded(t), this._addCustomEndScreen()
                            }
                        }
                    }, {
                        key: "_addCustomEndScreen",
                        value: function() {
                            var e = this._util,
                                t = e.boundary,
                                n = e.elem,
                                r = n.getAttribute(h + "end-scrn-class"),
                                i = r && t && b(n, t),
                                a = i && i.getElementsByClassName(r)[0];
                            this._util.endScreenEl = a
                        }
                    }, {
                        key: "_itemLoaded",
                        value: function() {
                            var e = this._util.elem,
                                t = this._util,
                                n = t.selector,
                                r = t.successClass;
                            e.classList.remove(n.replace(".", "")), e.classList.add(r), e.removeAttribute(h + "src")
                        }
                    }, {
                        key: "mounted",
                        set: function(e) {
                            this._state.mounted = e
                        },
                        get: function() {
                            return this._state.mounted
                        }
                    }, {
                        key: "playing",
                        set: function(e) {
                            this._state.playing = e
                        }
                    }, {
                        key: "pausedByUser",
                        set: function(e) {
                            this._state.pausedByUser = e
                        }
                    }, {
                        key: "mute",
                        set: function(e) {
                            var t = this._util.player;
                            t && t.controls.setMute(e)
                        }
                    }, {
                        key: "config",
                        get: function() {
                            var e = this._util,
                                t = e.endScreenEl,
                                n = e.player,
                                r = e.trigger,
                                i = e.type;
                            return {
                                endScreenEl: t,
                                player: n,
                                pausedByUser: this._state.pausedByUser,
                                trigger: r,
                                type: i
                            }
                        }
                    }]), t
                }(p),
                k = E,
                O = function() {
                    function e(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, a = e
                        } finally {
                            try {
                                !r && s.return && s.return()
                            } finally {
                                if (i) throw a
                            }
                        }
                        return n
                    }
                    return function(t, n) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, n);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                P = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                C = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t
                    }
                }(),
                A = window.wafer.utils,
                S = A.debounce,
                j = A.elementInView,
                I = A.findAncestor,
                V = A.getConfigFromJSONScriptNode,
                R = A.loadScriptAsync,
                D = window.wafer.base,
                L = window.wafer.controllers.WaferBaseController,
                T = {
                    PLAYBACK_START: "video:playbackstart",
                    PLAYBACK_PAUSE: "video:playbackpause",
                    MEDIA_ITEM_CURRENT: "video:mediacurrent"
                },
                Y = Object.keys(T),
                B = function(e) {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = e.errorClass,
                            r = void 0 === n ? "wafer-video-error" : n,
                            i = e.root,
                            a = void 0 === i ? document : i,
                            l = e.selector,
                            c = e.successClass,
                            u = void 0 === c ? "wafer-video-complete" : c,
                            d = e.validateDelay,
                            f = void 0 === d ? 25 : d;
                        o(this, t);
                        var v = V(document.getElementById("wafer-video-config")),
                            y = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                                root: a,
                                selector: l,
                                props: {
                                    errorClass: r,
                                    selector: l,
                                    successClass: u
                                },
                                WaferClass: k
                            }));
                        return y._validateWithDebounce = S(function() {
                            y.validate()
                        }, f, y), y._util = P({}, y._util, {
                            videoConfig: v
                        }), y._state = P({}, y._state, {
                            activeElem: null,
                            dockedElem: null,
                            hasYahooVideoPlayer: !1,
                            loudElem: null,
                            paused: !1
                        }), y.sync(), y
                    }
                    return l(t, e), C(t, [{
                        key: "_handleVideoReady",
                        value: function(e, t) {
                            var n = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            if (e.__destroyed) return void e.destroy();
                            if (!e.__ready) {
                                var i = e.getRootElement,
                                    a = I(e.getVideoElement(), "wafer-yvideo") || i && i.call(e) || t,
                                    o = !1;
                                if (a) {
                                    if (e._viewportOffset = this._getVideoOffset(a), !e._viewportOffset) {
                                        if (r > 3) return;
                                        return void setTimeout(function() {
                                            e.__destroyed || n._state.paused || n._handleVideoReady(e, t, ++r)
                                        }, 10 * r)
                                    }
                                    o = j(a, e._viewportOffset, D.viewport), !this._state.activeElem && o && (e.controls.play(), this._state.activeElem = t)
                                }
                                e.__isSlick = t.firstChild.classList.contains("yvideo-slick"), e.__ready = !0, D.emitWaferEvent("video:ready", {
                                    elem: t,
                                    meta: {
                                        instance: e,
                                        isInViewport: o
                                    }
                                })
                            }
                        }
                    }, {
                        key: "_handleYVideoEvents",
                        value: function(e, t) {
                            var n = this,
                                r = t.config,
                                i = r.endScreenEl,
                                a = r.player,
                                o = window.YAHOO.VideoPlatform.API_Events;
                            Y.forEach(function(t) {
                                a.on(o[t], function() {
                                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    D.emitWaferEvent(T[t], {
                                        elem: e,
                                        meta: {
                                            instance: a,
                                            videoData: n
                                        }
                                    })
                                })
                            }), a.on(o.PLAYBACK_RESUMED, function() {
                                a.__destroyed || (t.config && !t.config.pausedByUser && (n._state.activeElem = e), t.playing = !0, D.emitWaferEvent("video:resumed", {
                                    elem: e,
                                    meta: {
                                        instance: a
                                    }
                                }))
                            }), a.on(o.UI_INTERACT, function(r) {
                                var i = r.srcElement;
                                if ("startScreen" !== i || "click" !== t.config.trigger) {
                                    var o = !1,
                                        s = a.controls.isPlaying(),
                                        l = n._state,
                                        c = l.elementInstances,
                                        u = l.dockedElem,
                                        d = u && c.get(u).instance;
                                    if ("video-click" !== i || s ? "ctrl-pause-btn" === i && (o = !0) : o = !0, t.pausedByUser = o, s) {
                                        var f = n._state.activeElem,
                                            v = f && c.get(f).instance;
                                        f && f !== e && v.pause(), n._state.activeElem = e, u && u !== e && d.isDocked() && (d.unDock(), n._state.dockedElem = null)
                                    } else n._state.activeElem === e && (n._state.activeElem = null, t.playing = !1);
                                    D.emitWaferEvent("video:interacted", {
                                        elem: e,
                                        meta: {
                                            instance: a
                                        }
                                    })
                                }
                            }), a.on(o.PLAYER_RENDERED, function() {
                                a && n._handleVideoReady(a, e)
                            }), a.on(o.PLAYER_MUTE_CHANGE, function(t) {
                                D.emitWaferEvent("video:mutechange", {
                                    elem: e,
                                    meta: {
                                        instance: a
                                    }
                                }), t || n._setLoudVideoInstance(e)
                            }), a.on(o.PLAYER_READY, function() {
                                a && n._handleVideoReady(a, e)
                            }), a.on(o.PLAYER_DOCKED_CHANGE, function(r) {
                                if (!a.__destroyed) {
                                    var i = document.body,
                                        o = a.getRootElement,
                                        s = I(a.getVideoElement(), "wafer-yvideo") || o && o.call(a) || e;
                                    if (s && (a._viewportOffset = n._getVideoOffset(s)), r) {
                                        n._state.dockedElem = e;
                                        var l = n._state.activeElem;
                                        if (l && l !== e) {
                                            n._state.elementInstances.get(l).instance.pause()
                                        }
                                        n._state.activeElem = e, t.config.pausedByUser || a.controls.isPlaying() || a.controls.play(), i.classList.add("wafer-video-docked")
                                    } else n._state.dockedElem = null, i.classList.remove("wafer-video-docked");
                                    D.emitWaferEvent("video:dockChange", {
                                        elem: e,
                                        meta: {
                                            instance: a,
                                            isDocked: r,
                                            isInViewport: r
                                        }
                                    })
                                }
                            }), a.on(o.PLAYER_ERROR, function(t) {
                                a.__destroyed || (a.__isSlick = e.firstChild.classList.contains("yvideo-slick"), D.emitWaferEvent("video:playerError", {
                                    elem: e,
                                    meta: {
                                        data: t,
                                        instance: a
                                    }
                                }))
                            }), i && a.on(o.PLAYLIST_COMPLETE, function() {
                                I(a.getVideoElement(), "wafer-yvideo").appendChild(i)
                            })
                        }
                    }, {
                        key: "_getVideoOffset",
                        value: function(e) {
                            var t = e || {},
                                n = t.clientHeight,
                                r = t.clientWidth,
                                i = -parseInt(r, 10),
                                a = -parseInt(n / 2, 10);
                            return i || a ? {
                                offsetX: i,
                                offsetY: a
                            } : null
                        }
                    }, {
                        key: "_setLoudVideoInstance",
                        value: function(e) {
                            var t = this._state.loudElem;
                            if (t !== e) {
                                var n = this._state.elementInstances,
                                    r = n.get(t),
                                    i = r.instance;
                                i && (i.mute = !0), this._state.loudElem = e
                            }
                        }
                    }, {
                        key: "handleScroll",
                        value: function() {
                            this._validateWithDebounce()
                        }
                    }, {
                        key: "handleResize",
                        value: function() {
                            this._validateWithDebounce()
                        }
                    }, {
                        key: "handleVisibilityChange",
                        value: function() {
                            arguments.length > 0 && void 0 !== arguments[0] && !arguments[0] ? this.pause() : this.resume()
                        }
                    }, {
                        key: "loadDependencies",
                        value: function() {
                            var e = this,
                                t = this._util.videoConfig,
                                n = this._state,
                                r = n.elementInstances,
                                i = n.hasYahooVideoPlayer;
                            return new Promise(function(n) {
                                if (i) return n();
                                var a = !1,
                                    o = !0,
                                    s = !1,
                                    l = void 0;
                                try {
                                    for (var c, u = r.values()[Symbol.iterator](); !(o = (c = u.next()).done); o = !0) {
                                        if ("yvideo" === c.value.instance.type) {
                                            a = !0;
                                            break
                                        }
                                    }
                                } catch (e) {
                                    s = !0, l = e
                                } finally {
                                    try {
                                        !o && u.return && u.return()
                                    } finally {
                                        if (s) throw l
                                    }
                                }
                                a ? n() : R({
                                    src: t.playerScript || "https://yep.video.yahoo.com/oath/js/1/oath-player.js"
                                }, function() {
                                    e._state.hasYahooVideoPlayer = !0, n()
                                }, "YAHOO.VideoPlatform")
                            })
                        }
                    }, {
                        key: "pause",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pageVisibility",
                                t = this._state.elementInstances;
                            this._state.paused = !0, this._state.pauseSrc = this._state.pauseSrc || e;
                            var n = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var a, o = t.values()[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                    a.value.instance.pause()
                                }
                            } catch (e) {
                                r = !0, i = e
                            } finally {
                                try {
                                    !n && o.return && o.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                        }
                    }, {
                        key: "resume",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "pageVisibility";
                            if (this._state.pauseSrc === e) {
                                var t = this._state.activeElem;
                                if (this._state.pauseSrc = null, this._state.paused = !1, t) {
                                    var n = this._state.elementInstances,
                                        r = n.get(t).instance;
                                    r && r.play()
                                }
                            }
                        }
                    }, {
                        key: "didSync",
                        value: function() {
                            var e = this._state,
                                t = e.elementInstances,
                                n = e.mounted;
                            0 === t.size || n || (this._state.mounted = !0)
                        }
                    }, {
                        key: "willValidate",
                        value: function() {
                            var e = this,
                                t = this._state,
                                n = t.activeElem,
                                r = t.elementInstances,
                                i = t.dockedElem,
                                a = this._util.videoConfig.config,
                                o = !1;
                            i ? o = !0 : n && j(n, {
                                offsetX: 0,
                                offsetY: -parseInt(50 * n.clientHeight / 100, 10)
                            }, D.viewport) && (o = !0), this.loadDependencies().then(function() {
                                var t = !0,
                                    n = !1,
                                    i = void 0;
                                try {
                                    for (var o, s = r.entries()[Symbol.iterator](); !(t = (o = s.next()).done); t = !0) {
                                        var l = o.value,
                                            c = O(l, 2),
                                            u = c[0],
                                            d = c[1],
                                            f = d.instance;
                                        f.mounted || (f.create({
                                            config: a
                                        }), "yvideo" === f.config.type && e._handleYVideoEvents(u, f), f.mounted = !0)
                                    }
                                } catch (e) {
                                    n = !0, i = e
                                } finally {
                                    try {
                                        !t && s.return && s.return()
                                    } finally {
                                        if (n) throw i
                                    }
                                }
                            }).then(function() {
                                if (o) {
                                    var t = !0,
                                        i = !1,
                                        a = void 0;
                                    try {
                                        for (var s, l = r.entries()[Symbol.iterator](); !(t = (s = l.next()).done); t = !0) {
                                            var c = s.value,
                                                u = O(c, 2),
                                                d = u[0],
                                                f = u[1];
                                            if (d !== n) {
                                                f.instance.pause()
                                            }
                                        }
                                    } catch (e) {
                                        i = !0, a = e
                                    } finally {
                                        try {
                                            !t && l.return && l.return()
                                        } finally {
                                            if (i) throw a
                                        }
                                    }
                                } else {
                                    n && (r.get(n).instance.pause(), e._state.activeElem = null);
                                    var v = !0,
                                        y = !1,
                                        p = void 0;
                                    try {
                                        for (var h, _ = r.entries()[Symbol.iterator](); !(v = (h = _.next()).done); v = !0) {
                                            var m = h.value,
                                                g = O(m, 2),
                                                w = g[0],
                                                b = g[1];
                                            if (j(w, {
                                                    offsetX: 0,
                                                    offsetY: -parseInt(50 * w.clientHeight / 100, 10)
                                                }, D.viewport)) {
                                                var E = b.instance;
                                                if (!E.config.pausedByUser) {
                                                    e._state.activeElem = w, e._state.paused || E.play();
                                                    break
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        y = !0, p = e
                                    } finally {
                                        try {
                                            !v && _.return && _.return()
                                        } finally {
                                            if (y) throw p
                                        }
                                    }
                                }
                            })
                        }
                    }]), t
                }(L),
                x = B;
            t.default = new x({
                selector: ".wafer-video"
            })
        }
    })
});