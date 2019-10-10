! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var o = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
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
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(i, o, function(t) {
                return e[t]
            }.bind(null, o));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 100)
}({
    100: function(e, t, n) {
        CNN.INJECTOR.loadFeature("footer").then((function() {
            "use strict";
            0 === jQuery("link#wp-video--css").length && jQuery("head").append('<link rel="stylesheet" type="text/css" id="wp-video--css" href="/css/2.171.2/wp-video.css">'), n(101), n(102), n(103)(CNN.Utils), CNN.INJECTOR.scriptComplete("video")
        }))
    },
    101: function(e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        CNN.VideoConfig = CNN.VideoConfig || {}, CNN.VideoConfig.api = CNN.VideoConfig.api || {}, CNN.VideoSourceUtils = {
                getSourceElement: function(e) {
                    "use strict";
                    var t;
                    return t = jQuery("#" + e).parent(), jQuery(t).find(".metadata").find(".metadata__source-name")
                },
                clearSource: function(e) {
                    "use strict";
                    var t = this.getSourceElement(e);
                    t && t.html("&nbsp;")
                },
                updateSource: function(e, t) {
                    "use strict";
                    var n = this.getSourceElement(e),
                        i = jQuery("<a></a>");
                    t = "string" == typeof t ? JSON.parse(t) : t, n && (n.empty(), t && (t.sourceUrl ? (i.attr("href", t.sourceUrl), i.text(t.source), n.html("Source: ").append(i)) : n.html("Source: " + t.source)))
                }
            },
            function() {
                "use strict";
                var e = [];

                function t() {
                    return void 0 !== CNN.VideoPlayer.vendor && void 0 !== CNN.VideoPlayer.standardVendor
                }
                CNN.VideoPlayer = {}, CNN.VideoPlayer.addVideo = function(t, n) {
                    if (void 0 !== t)
                        if (void 0 !== t.video && void 0 !== t.context && void 0 !== t.network && void 0 !== t.profile && void 0 !== t.markupId)
                            if ("iframeTest" !== t.context || void 0 !== t.frameWidth && void 0 !== t.frameHeight) {
                                void 0 === n && (n = {}), e.push({
                                    videoConfig: t,
                                    eventsCallback: n,
                                    overridesConfig: {}
                                });
                                try {
                                    CNN.AmazonVideoAds.Manager.getInstance().addAmazonCallback(n)
                                } catch (e) {}
                            } else console.error("frameWidth and frameHeight must be passed for iframe videos");
                    else console.error("Not all required options were passed");
                    else console.error("required options were not passed")
                }, CNN.VideoPlayer.initVideos = function() {
                    window.cnnVideoManager.renderMultipleContainers(e), e = []
                }, CNN.VideoPlayer.addVideos = function(e) {
                    var t = 0;
                    if (void 0 !== e) {
                        for (t = e.length - 1; t >= 0; t--) window.CNN.VideoPlayer.addVideo(e[t]);
                        window.CNN.VideoPlayer.initVideos()
                    } else console.error("An array was not passed")
                }, CNN.VideoPlayer.isMobileClient = function() {
                    return void 0 !== window.orientation
                }, CNN.VideoPlayer.isFlashInstalled = function() {
                    var e = !1;
                    if ("ActiveXObject" in window) try {
                        e = void 0 !== new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (t) {
                        e = !1
                    } else e = void 0 !== navigator.mimeTypes["application/x-shockwave-flash"];
                    return e
                }, CNN.VideoPlayer.handleAdOnCVPVisibilityChange = function(e, t) {
                    "videoLoader" === CNN.VideoPlayer.getLibraryName(e) && (t ? window.cnnVideoManager.getPlayerByContainer(e).videoInstance.cvp.setAdKeyValue("inFocus", "true") : window.cnnVideoManager.getPlayerByContainer(e).videoInstance.cvp.setAdKeyValue("inFocus", "false"))
                }, CNN.VideoPlayer.render = function(e, t) {
                    window.cnnVideoManager.renderMultipleContainers({
                        videoConfig: e,
                        eventsCallback: t
                    });
                    try {
                        CNN.AmazonVideoAds.Manager.getInstance().addAmazonCallback(t)
                    } catch (e) {}
                }, CNN.VideoPlayer.reverseAutoMute = function(e) {
                    var t;
                    "fave" !== CNN.VideoPlayer.getLibraryName(e) && (t = window.cnnVideoManager.getPlayerByContainer(e).videoInstance.cvp).isMuted() && t.unmute()
                }, void 0 === CNN.VideoPlayer.pageLoadStartTime && (CNN.VideoPlayer.pageLoadStartTime = new Date), window.writeSessionId = function(e) {
                    CNN.VideoPlayer.setLoadTime()
                }, CNN.VideoPlayer.setLoadTime = function() {
                    !0 === CNN.autoPlayVideoExist && void 0 === CNN.VideoPlayer.loadTime && (CNN.VideoPlayer.writeSessionIdCallTime = new Date, CNN.VideoPlayer.loadTime = CNN.VideoPlayer.writeSessionIdCallTime - CNN.VideoPlayer.pageLoadStartTime)
                }, CNN.VideoPlayer.reportLoadTime = function(e) {
                    var t;
                    "videoLoader" === CNN.VideoPlayer.getLibraryName(e) && !0 === CNN.autoPlayVideoExist && CNN.Utils.exists(CNN.VideoPlayer.loadTime) && (t = e && window.cnnVideoManager.getPlayerByContainer(e).videoInstance.cvp || null, CNN.Utils.existsObject(t) && t.reportAnalytics("videoPageTiming", {
                        pageLoad: CNN.VideoPlayer.loadTime
                    }))
                }, CNN.VideoPlayer.showSpinner = function(e) {
                    "videoLoader" !== CNN.VideoPlayer.getLibraryName(e) || !Modernizr || Modernizr.phone || Modernizr.mobile || Modernizr.tablet || jQuery(document.getElementById(("spinner_" + e).replace("#", ""))).show()
                }, CNN.VideoPlayer.hideSpinner = function(e) {
                    !Modernizr || Modernizr.phone || Modernizr.mobile || Modernizr.tablet || jQuery(document.getElementById(("spinner_" + e).replace("#", ""))).hide()
                }, CNN.VideoPlayer.hideThumbnail = function(e) {
                    !Modernizr || Modernizr.phone || Modernizr.mobile || Modernizr.tablet || jQuery(document.getElementById(e + "--thumbnail")).hide()
                }, CNN.VideoPlayer.setPlayerProperties = function(e, t, n, i, o) {
                    CNN.VideoPlayer.playerProperties = CNN.VideoPlayer.playerProperties || {}, CNN.VideoPlayer.playerProperties[e] = CNN.VideoPlayer.playerProperties[e] || {
                        autoStart: t,
                        isLive: n,
                        isVideoReplayClicked: i,
                        mute: o
                    }
                }, CNN.VideoPlayer.setManualUnmute = function(e) {
                    CNN.VideoPlayer.playerProperties = CNN.VideoPlayer.playerProperties || {}, (CNN.VideoPlayer.playerProperties[e] || {}).contentPlayed = !0
                }, CNN.VideoPlayer.mutePlayer = function(e) {
                    var t, n, i, o = "unmute_" + e;
                    t = "fave" === CNN.VideoPlayer.getLibraryName(e) ? FAVE.player.getInstance(e) : window.cnnVideoManager.getPlayerByContainer(e).videoInstance.cvp, (n = CNN.VideoPlayer.playerProperties[e]).mute ? n.autoStart && n.isLive && (t.mute(), (i = jQuery(document.getElementById(o))).length > 0 && (i.removeClass("video__unmute--inactive").addClass("video__unmute--active"), i.on("click", jQuery.proxy(this.handleUnmutePlayer, this, e)))) : n.autoStart && n.isLive && t.unmute()
                }, CNN.VideoPlayer.injectFave = function(e, t, n) {
                    CNN.INJECTOR.executeFeature("fave").then((function() {
                        FAVE.player({
                            configs: e,
                            callbacks: t,
                            mediaMetadataCallbacks: n
                        }), CNN.VideoPlayer.setLibraryName("fave", e.markupId)
                    }))
                }, CNN.VideoPlayer.injectLoader = function(e, t) {
                    CNN.INJECTOR.executeFeature("videoLoader", {
                        params: "?version=latest&client=expansion"
                    }).then((function() {
                        CNN.VideoPlayer.apiInitialized ? CNN.VideoPlayer.render(e, t) : CNN.VideoPlayer.addVideo(e, t), CNN.VideoPlayer.setLibraryName("videoLoader", e.markupId)
                    }))
                }, CNN.VideoPlayer.isFaveLiveEnabled = function(e) {
                    var t, n = !1,
                        i = FAVE.settings.live;
                    return FAVE.settings.enabled && i.enabled && (t = i.enabledLiveStreams, Array.isArray(t) && t.length > 0 && -1 !== t.indexOf(e) && (n = !0)), n
                }, CNN.VideoPlayer.setLibraryName = function(e, t) {
                    CNN.VideoPlayer.playerProperties = CNN.VideoPlayer.playerProperties || {}, CNN.VideoPlayer.playerProperties[t] = CNN.VideoPlayer.playerProperties[t] || {}, CNN.VideoPlayer.playerProperties[t].libraryName = e
                }, CNN.VideoPlayer.getLibraryName = function(e) {
                    return CNN.VideoPlayer.playerProperties && CNN.VideoPlayer.playerProperties[e] && CNN.VideoPlayer.playerProperties[e].libraryName
                }, CNN.VideoPlayer.setPlayerType = function(e, t) {
                    var n = t || "standard",
                        i = "standard" === t ? "default" : "pinned";
                    "fave" === CNN.VideoPlayer.getLibraryName(e) ? FAVE.player.getInstance(e).setAdKeyValue("playerType", n) : window.cnnVideoManager.getPlayerByContainer(e).videoInstance.cvp.setAdKeyValue("playerType", n), CNN.Utils.existsObject(CNN.omniture) && (CNN.omniture.screen_state = i)
                }, CNN.VideoPlayer.handleFullscreenChange = function(e, t) {
                    var n = "fullscreen";
                    n = !0 === t.fullscreen ? "fullscreen" : jQuery("body").hasClass("videopinning--on") ? "pinned" : "standard", CNN.VideoPlayer.setPlayerType(e, n)
                }, CNN.VideoPlayer.getLibrary = function(e, t, n, i) {
                    var o = e.video;
                    i = i || {}, (n = n || !1) ? CNN.VideoPlayer.isFaveLiveEnabled(o) ? (!1 === CNN.Features.enableAutoplayMutedLive && (e.autoplay = {
                        muted: {
                            enabled: !1
                        }
                    }), CNN.geoCheckStream(e.markupId, CNN.VideoPlayer.injectFave, e, t)) : CNN.VideoPlayer.injectLoader(e, t) : FAVE.settings.enabled ? (!0 === e.isVr ? (e.player = e.player || {}, e.player.maxBitrate = "Infinity", e.theoplayer = e.theoplayer || {}, e.theoplayer.initialRendition = "high", !1 === CNN.Features.enableAutoplayMutedVR && (e.autoplay = {
                        muted: {
                            enabled: !1
                        }
                    })) : CNN.Utils.isWindows7() && (e.preferredFileType = FAVE.settings.windows7PreferredFileType), CNN.VideoPlayer.injectFave(e, t, i)) : CNN.VideoPlayer.injectLoader(e, t)
                }, CNN.VideoPlayer.handleInitialExpandableVideoState = function(e) {
                    "fave" === CNN.VideoPlayer.getLibraryName(e) && jQuery(document.getElementById(e)).parents(".js__video--standard, .js__video--expandable").each((function() {
                        var e, t, n = jQuery(this);
                        fastdom.measure((function() {
                            e = n.find(".media__video--thumbnail"), t = n.find(".media__video--responsive"), fastdom.mutate((function() {
                                t.hide(), e.show(), e.css("position", "relative"), n.find(".js-video-demand").show()
                            }))
                        }))
                    }))
                }, CNN.VideoPlayer.setFirstVideoInCollection = function(e, t) {
                    CNN.VideoPlayer.firstVideoInCollection = CNN.VideoPlayer.firstVideoInCollection || {}, Array.isArray(e) && e.length > 0 && CNN.Utils.existsString(e[0].videoId) && (CNN.VideoPlayer.firstVideoInCollection[t] = e[0].videoId)
                }, CNN.VideoPlayer.isFirstVideoInCollection = function(e, t) {
                    var n;
                    CNN.Utils.existsObject(CNN.VideoPlayer.firstVideoInCollection) && CNN.Utils.existsString(CNN.VideoPlayer.firstVideoInCollection[e]) && (n = "fave" === CNN.VideoPlayer.getLibraryName(e) ? FAVE.player.getInstance(e) : window.cnnVideoManager.getPlayerByContainer(e).videoInstance.cvp, CNN.VideoPlayer.firstVideoInCollection[e] === t ? n.setAdKeyValue("isFirst", "true") : n.setAdKeyValue("isFirst", "false"))
                }, CNN.VideoPlayer.enterBrowserFullscreen = function(e) {
                    t() && !document[CNN.VideoPlayer.vendor[CNN.VideoPlayer.standardVendor.fullscreen]] && e[CNN.VideoPlayer.vendor[CNN.VideoPlayer.standardVendor.requestFullscreen]]()
                }, CNN.VideoPlayer.exitBrowserFullscreen = function() {
                    t() && document[CNN.VideoPlayer.vendor[CNN.VideoPlayer.standardVendor.fullscreen]] && document[CNN.VideoPlayer.vendor[CNN.VideoPlayer.standardVendor.exitFullscreen]]()
                }, CNN.VideoPlayer.handleBrowserFullscreenChange = function(e) {
                    t() && "function" != typeof document["on" + CNN.VideoPlayer.vendor[CNN.VideoPlayer.standardVendor.fullscreenchange].toLowerCase()] && jQuery(document).on(CNN.VideoPlayer.vendor[CNN.VideoPlayer.standardVendor.fullscreenchange], (function() {
                        CNN.VideoPlayer.isBrowserFullscreen() || e()
                    }))
                }, CNN.VideoPlayer.dismissMobilePinnedPlayer = function(e) {
                    var t = CNN.Videx.mobile.pinnedPlayer;
                    "object" === n(t) && t.getContainerId() !== e && t.isVideoPinned() && t.disable()
                }, CNN.VideoPlayer.handleMobilePinnedPlayerStates = function(e, t) {
                    var i = CNN.Videx.mobile.pinnedPlayer,
                        o = i.getContainerId(),
                        r = i.isVideoPinned(),
                        a = FAVE.player.getInstance(o);
                    "object" === n(i) && (t ? o === e && (r || "fullscreen" === a.getVideoPlayer().presentationMode || i.disable()) : o !== e ? r && i.disable() : i.enable())
                }, CNN.VideoPlayer.isBrowserFullscreen = function() {
                    return document[CNN.VideoPlayer.vendor[CNN.VideoPlayer.standardVendor.fullscreen]]
                }, CNN.VideoPlayer.isBrowserFullscreenAvailable = function() {
                    var e = {
                            fullscreenEnabled: 0,
                            requestFullscreen: 1,
                            exitFullscreen: 2,
                            fullscreenchange: 3,
                            fullscreen: 4
                        },
                        t = ["mozFullScreenEnabled", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozFullScreen"],
                        n = ["msFullscreenEnabled", "msRequestFullscreen", "MSFullscreenChange", "msExitFullscreen"],
                        i = ["webkitFullscreenEnabled", "webkitRequestFullscreen", "webkitExitFullscreen", "webkitfullscreenchange", "webkitIsFullScreen"];
                    return CNN.VideoPlayer.vendor = "fullscreenEnabled" in document && Object.keys(e) || i[0] in document && i || t[0] in document && t || n[0] in document && n || [], CNN.VideoPlayer.standardVendor = e, CNN.VideoPlayer.vendor[0] in document
                }
            }(), window.CNNVideoAPILoadComplete = function() {
                "use strict";
                CNN.companion && CNN.companion.initCompanionLayout && "function" == typeof CNN.companion.initCompanionLayout && CNN.companion.initCompanionLayout(), CNN.VideoPlayer.apiInitialized = !0, CNN.VideoPlayer.initVideos()
            }
    },
    102: function(e, t) {
        CNN.VideoPinner = function(e) {
            "use strict";
            var t, n, i, o = "js-inbetweener-pinner--type1",
                r = "js-inbetweener-pinner--type2",
                a = "js-inbetweener-unpinner",
                l = "inbetweener-pinner--type1",
                s = "inbetweener-pinner--type2",
                d = "inbetweener-unpinner",
                u = !1,
                c = !1,
                y = "videopinning--off",
                f = "videopinning--on",
                p = jQuery(".js-pg-rail-tall__head .media__video--responsive object, .js-pg-rail-tall__head .media__video--responsive > div.theoplayer, .js-pg-rail-tall__head .media__video--responsive .video-slate > div > div.theoplayer, .js-pg-rail-tall__head .media__video--responsive > div.theoplayer-skin, .js-pg-rail-tall__head .media__video--responsive .video-slate > div > div.theoplayer-skin"),
                N = jQuery(".js-pg-rail-tall__head .js-media__video"),
                m = N.offset().left,
                C = jQuery("body"),
                h = [],
                g = [],
                v = [],
                _ = jQuery(e),
                V = _.find("object, > div.theoplayer, > div.theoplayer-container, > div.default-skin"),
                P = !1,
                b = jQuery.Deferred(),
                j = e.replace(/#/, "");

            function w() {
                var e;
                "function" == typeof Event ? (e = new Event("resize"), window.dispatchEvent(e)) : ((e = window.document.createEvent("UIEvents")).initUIEvent("resize", !0, !1, window, 0), window.dispatchEvent(e))
            }

            function Q(e, i) {
                fastdom.measure((function() {
                    var o = jQuery("#nav")[0].getBoundingClientRect().bottom;
                    C.hasClass(f) && (CNN.VideoPlayer.setPlayerType(j, "standard"), fastdom.mutate((function() {
                        e.css("height", ""), i.attr("style", ""), V.removeClass("fade-in"), t.length && (t.removeClass("fade-in"), t.detach()), c && null != n && (jQuery(n).removeClass("fade-in"), jQuery(n).detach()), C.removeClass(l), C.removeClass(s), C.removeClass(f), C.addClass(y), i.css("left", "auto"), v.attr("style", ""), h.css({
                            left: e.offset().left
                        }), g.css({
                            left: jQuery(".pg-rail")[0].getBoundingClientRect().left,
                            top: o - 158
                        }), g.removeClass("no-transition"), w(), setTimeout((function() {
                            V.addClass("fade-in")
                        }), 300)
                    })))
                }))
            }

            function x() {
                var e, t = jQuery("#nav")[0].getBoundingClientRect().bottom,
                    n = jQuery("footer")[0].getBoundingClientRect(),
                    i = _.find(".el__storyelement__title"),
                    o = i.length > 0 ? i[0].getBoundingClientRect() : {},
                    r = p[0].getBoundingClientRect(),
                    a = p.add(h).add(g);
                (n.top <= o.bottom || P) && (P = !0, e = n.top - o.height - 5, g.hasClass("no-transition") || g.addClass("no-transition"), i.css({
                    top: e
                }), a.css({
                    top: e - r.height
                })), r.top > t + 10 && (P = !1, a.css({
                    top: t + 10
                }), i.css({
                    top: r.height + t + 10
                }))
            }
            return CNN.VideoConfig && CNN.VideoConfig.collection && CNN.VideoConfig.collection.delayVideoCarousel || b.resolve({}), jQuery(document).onCarouselLoaded((function() {
                b.resolve({})
            })), {
                init: function() {
                    var e, P, S = document.createElement("div"),
                        T = document.createElement("div"),
                        F = document.createElement("div"),
                        I = jQuery("#nav")[0].getBoundingClientRect().bottom;
                    S.className = o + " " + l, T.className = r + " " + s, F.className = a + " " + d, V.before(F), V.before(S), V.before(T), h = _.find("." + o), g = _.find("." + r), v = _.find("." + a), h.css({
                        left: m,
                        top: N[0].getBoundingClientRect().top
                    }), g.css({
                        left: jQuery(".pg-rail")[0].getBoundingClientRect().left,
                        top: I - 158
                    }), v.css({
                        left: jQuery(".pg-rail")[0].getBoundingClientRect().left - m,
                        top: I
                    }), p.css({
                        "z-index": "4"
                    }), e = N.find(".media__video--thumbnail .media__image"), (t = N.children(".el__storyelement__title")).length && ((t = jQuery(t).first().clone()).children().not(".el__storyelement__header").remove(), t.prepend(jQuery("<span class='pinCurrentPlay'>Now Playing </span>"))), c && ((n = document.createElement("div")).className = "media__caption el__storyelement__title js-pinned-video-collection-title", b.then((function() {
                        (i = "fave" === CNN.VideoPlayer.getLibraryName(j) ? jQuery(".js-owl-carousel .carousel__content__item .cd__headline-text").first().clone() : jQuery(".js-owl-carousel  .owl-item.active  .cd__headline-text").first().clone()).length && (jQuery(n).prepend(jQuery("<span class='pinCurrentPlay'>Now Playing </span>")), jQuery(i).appendTo(n))
                    }))), e.length ? jQuery(e).first().attr("src", CNN.Host.assetPath + "/assets/video_pinned_white_bg.jpg") : ((e = document.createElement("img")).setAttribute("src", CNN.Host.assetPath + "/assets/video_pinned_white_bg.jpg"), N.find(".media__video--thumbnail").first().prepend(e)), P = {
                        scroll: function() {
                            var e, o = jQuery("#nav")[0].getBoundingClientRect().bottom,
                                r = N[0].getBoundingClientRect();
                            r.bottom - .6 * r.height < o ? !C.hasClass(f) && u ? (CNN.VideoPlayer.setPlayerType(j, "pinned"), fastdom.measure((function() {
                                var r = jQuery(".pg-rail")[0].getBoundingClientRect().left,
                                    a = _.find(".el__storyelement__title").not(".js-pinned-video-collection-title"),
                                    s = jQuery(".js-pinned-video-collection-title .cd__headline-text"),
                                    d = N.width();
                                10 !== r && fastdom.mutate((function() {
                                    V.removeClass("fade-in"), t.length && t.removeClass("fade-in"), c && n.length && n.removeClass("fade-in"), C.removeClass(y), C.addClass(f + " " + l), h.css({
                                        left: r,
                                        top: o
                                    }), v.css({
                                        left: r - m,
                                        top: o
                                    }), N.css("height", 9 * d / 16), a.length || t.length && t.appendTo(_), c && (s.length ? s.text(i) : null != n && jQuery(n).appendTo(_)), p.css({
                                        position: "fixed",
                                        top: o + 10,
                                        left: r,
                                        width: "300px",
                                        height: 168.75,
                                        "z-index": "fave" === CNN.VideoPlayer.getLibraryName(j) ? "25" : "10"
                                    }), _.find(".el__storyelement__title").css({
                                        position: "fixed",
                                        "background-color": "#fff",
                                        left: r,
                                        top: jQuery(p)[0].getBoundingClientRect().bottom,
                                        width: "300px",
                                        "margin-top": "0",
                                        "z-index": "10"
                                    }), w(), setTimeout((function() {
                                        e = jQuery(document).find(".pinCurrentPlay").parent(), p.addClass("fade-in"), t.length && (t.addClass("fade-in"), e.find(".el__storyelement__header").dotdotdot()), c && (null != n && jQuery(n).addClass("fade-in"), e.find(".cd__headline-text").dotdotdot()), jQuery(document).find(".pinCurrentPlay").parent().find(".cd__headline-text").dotdotdot()
                                    }), 300)
                                }))
                            }))) : x() : Q(N, p)
                        },
                        resize: function() {
                            fastdom.measure((function() {
                                C.hasClass(f) && (10 === jQuery(".pg-rail")[0].getBoundingClientRect().left ? Q(N, p) : fastdom.mutate((function() {
                                    V.css("left", jQuery(".pg-rail")[0].getBoundingClientRect().left), h.css({
                                        left: jQuery(".pg-rail")[0].getBoundingClientRect().left
                                    }), g.css({
                                        left: jQuery(".pg-rail")[0].getBoundingClientRect().left
                                    }), v.css({
                                        left: jQuery(".pg-rail")[0].getBoundingClientRect().left - m
                                    }), t.length && t.css("left", jQuery(".pg-rail")[0].getBoundingClientRect().left), CNN.Utils.exists(n) && jQuery(n).css("left", jQuery(".pg-rail")[0].getBoundingClientRect().left)
                                }))), C.hasClass(y) && (h.css({
                                    left: N.offset().left
                                }), g.css({
                                    left: jQuery(".pg-rail")[0].getBoundingClientRect().left,
                                    top: I - 158
                                }))
                            }))
                        }
                    }, jQuery(document).onZonesAndDomReady((function() {
                        jQuery(window).on("scroll", P.scroll), jQuery(window).on("resize", P.resize)
                    }))
                },
                setIsPlaying: function(e) {
                    u = e
                },
                animateDown: function() {
                    var e, o = jQuery("#nav")[0].getBoundingClientRect().bottom;
                    !C.hasClass(f) && u && N[0].getBoundingClientRect().bottom < o && fastdom.measure((function() {
                        var r = jQuery(".pg-rail")[0].getBoundingClientRect().left,
                            a = _.find(".el__storyelement__title"),
                            l = N.width(),
                            d = jQuery(".js-pinned-video-collection-title .cd__headline-text");
                        10 !== r && fastdom.mutate((function() {
                            V.removeClass("fade-in"), t.length && t.removeClass("fade-in"), c && n.length && n.removeClass("fade-in"), C.removeClass(y), C.addClass(f + " " + s), g.css({
                                left: r,
                                top: o
                            }), N.css("height", 9 * l / 16), a.length || t.length && t.appendTo(_), c && (d.length ? d.text(i) : null != n && jQuery(n).appendTo(_)), p.css({
                                position: "fixed",
                                top: o + 10,
                                left: r,
                                width: "300px",
                                height: 168.75,
                                "z-index": "10"
                            }), _.find(".el__storyelement__title").css({
                                position: "fixed",
                                "background-color": "#fff",
                                left: r,
                                top: jQuery(p)[0].getBoundingClientRect().bottom,
                                width: "300px",
                                "z-index": "10"
                            }), w(), setTimeout((function() {
                                e = jQuery(document).find(".pinCurrentPlay").parent(), p.addClass("fade-in"), t.length && (t.addClass("fade-in"), e.find(".el__storyelement__header").dotdotdot()), c && (null != n && jQuery(n).addClass("fade-in"), e.find(".cd__headline-text").dotdotdot()), x()
                            }), 300)
                        }))
                    }))
                },
                setIsVideoCollection: function(e) {
                    c = e
                },
                handleOnVideoPlay: function() {
                    var e;
                    c && ("fave" === CNN.VideoPlayer.getLibraryName(j) ? (e = FAVE.player.getInstance(j).getVideoData(), i = e.headline) : i = jQuery(".js-owl-carousel  .owl-item.active  .cd__headline-text").first().text(), C.hasClass(f) ? (jQuery(n).find(".cd__headline-text").text(i), jQuery(".js-pinned-video-collection-title .cd__headline-text").text(i)) : jQuery(n).find(".cd__headline-text").text(i))
                }
            }
        }
    },
    103: function(e, t) {
        e.exports = function(e) {
            "use strict";

            function t(t) {
                this._element = t.element, this._enabled = t.enabled, this._touchOverlay = jQuery('<div class="mobile-pinned--touch-overlay"></div>'), this._pinned = !1, this._scrollTop = null, this._transition = t.transition || {
                    style: "fade"
                }, this._transitioning = !1, this._onPin = t.onPin, this._onUnpin = t.onUnpin, this._onDismiss = t.onDismiss, this._onPlayerClick = t.onPlayerClick, this._handleScroll = e.throttle(this._handleScroll, 50, this), this._onTransitionComplete = this._onTransitionComplete.bind(this), this._getVideo().append(this._touchOverlay), this._bindEvents(), this._handleScroll()
            }
            return t.prototype = {
                _bindEvents: function() {
                    var t = this,
                        n = this._getVideo(),
                        i = null,
                        o = null,
                        r = 0,
                        a = 0,
                        l = !1,
                        s = !1;
                    jQuery(document).on("scroll", this._handleScroll), this._touchOverlay.on("touchstart", (function(e) {
                        t._pinned && (e.stopPropagation(), e.preventDefault(), r = e.originalEvent.touches[0].pageX, i = 0, l = !1, n.css({
                            transitionDuration: "66ms"
                        }))
                    })), this._touchOverlay.on("touchmove", e.throttle((function(e) {
                        var d = window.performance.now(),
                            u = e.originalEvent.touches[0],
                            c = n.position(),
                            y = n.width();
                        o = u.pageX - r, null === i || !t._pinned || Math.abs(o) < 2 || (l = !0, s = o / (d - a) > .5 || c.left + y / 2 > window.innerWidth, i += o, r = u.pageX, a = d, n.css({
                            transform: "translate3d(" + i + "px, 0, 0)"
                        }))
                    }), 33)), this._touchOverlay.on("touchend", (function() {
                        var e = n.find(".fave-mute-overlay");
                        if (t._pinned) {
                            if (!l) return n.removeClass("mobile-pinned--visible"), t._onPlayerClick(), void(e.length > 0 && e.trigger("click"));
                            s ? (n.css({
                                transitionDuration: ""
                            }), setTimeout((function() {
                                t._dismiss(), fastdom.mutate((function() {
                                    n.css({
                                        transform: ""
                                    })
                                }))
                            }), 66)) : n.css({
                                transform: ""
                            }), o = 0, i = null, s = !1, l = !1
                        }
                    }))
                },
                _getVideo: function() {
                    return this._element.find(".theoplayer-container")
                },
                _handleScroll: function() {
                    var e = this._element[0].getBoundingClientRect().bottom,
                        t = jQuery(document).scrollTop();
                    0 !== t && (this._scrollTop = t), e < 0 ? this.pin() : e > 0 && this.unpin()
                },
                _getTransitionClassName: function() {
                    return "mobile-pinned--" + this._transition.style
                },
                _getTransitionDuration: function() {
                    if (this._transition.duration) return this._transition.duration;
                    switch (this._transition.style) {
                        case "fade":
                            return 100;
                        case "slide":
                            return 650;
                        default:
                            return 0
                    }
                },
                _initializeTransition: function(e, t) {
                    var n = this._getVideo(),
                        i = this._getTransitionClassName(),
                        o = this._getTransitionDuration();

                    function r() {
                        n.css({
                            transitionDuration: o + "ms"
                        }), n.addClass("mobile-pinned--animating"), "function" == typeof e && fastdom.mutate(e)
                    }
                    setTimeout(function() {
                        "function" == typeof t && fastdom.mutate(t), fastdom.mutate(this._onTransitionComplete, this)
                    }.bind(this), o), fastdom.mutate((function() {
                        n.addClass(i), fastdom.mutate(r)
                    })), this._transitioning = !0
                },
                _onTransitionComplete: function() {
                    var e = this._getVideo();
                    this._transitioning = !1, e.css({
                        transitionDuration: ""
                    }), e.removeClass("mobile-pinned--animating"), "pin" === this._nextState ? this.pin() : "unpin" === this._nextState && this.unpin(), this._nextState = null
                },
                _setPinnedStateMetrics: function() {
                    this._pinned ? CNN.omniture.screen_state = "floating" : CNN.omniture.screen_state = "default"
                },
                _dismiss: function() {
                    this.unpin(), "function" == typeof this._onDismiss && this._onDismiss()
                },
                pin: function() {
                    var e = this._getVideo();
                    this._enabled && !this._pinned && (this._transitioning ? this._nextState = "pin" : (this._element.addClass("mobile-pinned--spacer"), e.addClass("mobile-pinned"), this._initializeTransition((function() {
                        e.addClass("mobile-pinned--visible")
                    })), this._pinned = !0, this._setPinnedStateMetrics(), "function" == typeof this._onPin && this._onPin()))
                },
                unpin: function() {
                    var e = this._element,
                        t = this._getVideo();
                    this._pinned && (this._transitioning ? this._nextState = "unpin" : (this._initializeTransition((function() {
                        t.removeClass("mobile-pinned--visible")
                    }), function() {
                        t.removeClass("mobile-pinned"), e.removeClass("mobile-pinned--spacer"), "function" == typeof this._onUnpin && this._onUnpin()
                    }.bind(this)), this._pinned = !1, this._setPinnedStateMetrics()))
                },
                getContainerId: function() {
                    return this._element.selector.slice(1)
                },
                isVideoPinned: function() {
                    return this._pinned
                },
                enable: function() {
                    this._enabled = !0
                },
                disable: function() {
                    this._enabled = !1, this.unpin()
                },
                getScrollPosition: function() {
                    return this._scrollTop
                },
                destroy: function() {
                    this.unpin(), jQuery(document).off("scroll", this._handleScroll)
                }
            }, CNN.MobilePinnedView = t, t
        }
    }
});