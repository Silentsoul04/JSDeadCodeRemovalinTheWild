(function() {
    var G = window;
    var b = G.Y || {};
    var l = {};
    var F = 0;
    var g = [];
    var n = "hidden";
    var j = "visibilitychange";
    var p = j;
    var q;
    const K = "not-ready";
    var a;

    function k(P, R, O) {
        var Q;
        return function() {
            var V = this,
                U = arguments;
            var T = function() {
                Q = null;
                if (!O) {
                    P.apply(V, U);
                }
            };
            var S = O && !Q;
            clearTimeout(Q);
            Q = setTimeout(T, R);
            if (S) {
                P.apply(V, U);
            }
        };
    }

    function c(S) {
        var Q = {};
        var U = S.clientHeight;
        Q.top = G.pageYOffset;
        Q.bottom = Q.top + G.innerHeight;
        var T = {};
        T.top = S.getBoundingClientRect().top + G.pageYOffset;
        T.bottom = T.top + U;
        var R = 100;
        var P = S.getAttribute("data-viewable-percentage");
        if (P) {
            R = (U * (parseInt(P, 10) / 100));
        }
        var O = {
            top: Math.max(T.top, Q.top),
            bottom: Math.min(T.bottom, Q.bottom)
        };
        return O.bottom - O.top > R;
    }

    function E(U, O, W, V) {
        var T = O ? "ratio-box-" + O : "ratio-box-16-9";
        var S = ["vid-mgr-container", "ratio-box", T].join(" ");
        var R = [W || "vp-wrap", "ratio-box-child"].join(" ");
        var P = '<div id="' + U + '" class="' + R + '"></div></div>';
        var Q = document.createElement("div");
        Q.innerHTML = P;
        Q.setAttribute("class", S);
        if (V) {
            Q.setAttribute("data-viewable-percentage", V);
        }
        return Q;
    }

    function o(O) {
        var P = this;
        setTimeout(function() {
            O.forEach(function(Q) {
                if (Q.type === "childList" && Q.addedNodes && Q.addedNodes.length > 0) {
                    if (typeof P.findVideosInit === "function" && P.findVideosInit(Q.target)) {
                        P._handleScroll();
                    }
                }
            });
        }, 25);
    }

    function d(S, T) {
        var P = "text/javascript";
        var O = document.createElement("script");
        O.type = P;
        if (S) {
            O.src = S;
            O.async = true;
            O.defer = true;
            if (O.readyState) {
                O.onreadystatechange = function R() {
                    if (O.readyState === "loaded" || O.readyState === "complete") {
                        O.onreadystatechange = null;
                        T && T();
                    }
                };
            } else {
                O.onload = function Q() {
                    T && T();
                };
            }
            document.getElementsByTagName("head")[0].appendChild(O);
        }
    }

    function H(Q, Z, S, U) {
        if (!Q || !Z || !Z.uuid || !S) {
            return false;
        }
        if (!Q.pageSpaceId) {
            console.warn("No pageSpaceId was set for VideoManager instance config.");
        }
        var R = {
            id: Z.uuid
        };
        var P = Q.autoplay === true && S && Z.autoplay !== false ? c(S) : false;
        var T = S.getAttribute("data-video-expname") || Q.expName || "";
        var X = S.getAttribute("data-video-exptype") || Q.expType || "";
        var Z = {
            autoplay: P,
            CMS: Q.CMS || {
                env: "prod",
                suppressAdContext: true
            },
            comscoreC4: Q.comscoreC4 || "",
            expBucket: Q.expBucket || "",
            expName: T,
            expType: X,
            fullscreenBtn: (typeof Q.fullscreenBtn !== "undefined") ? Q.fullscreenBtn : true,
            html5: typeof Q.html5 !== "undefined" ? !!Q.html5 : true,
            lang: Q.lang || "en-US",
            loop: typeof Q.loop !== "undefined" ? !!Q.loop : false,
            mute: typeof Q.mute !== "undefined" ? !!Q.mute : false,
            nielsenConfig: {
                enableNielsen: typeof Q.nielsenEnabled !== "undefined" ? !!Q.nielsenEnabled : false,
            },
            pageSpaceId: Q.pageSpaceId || "DEFAULT_SPACEID",
            playlist: {
                mediaItems: [R],
                videoRecommendations: false
            },
            replayonlyendscreen: !!Q.replayonlyendscreen,
            site: "frontpage",
            startscreen: {
                showDesc: false,
                showProvider: false,
                showTitle: typeof Q.showTitle !== "undefined" ? Q.showTitle : false
            },
            stopBufferingOnPause: typeof Q.stopBufferingOnPause !== "undefined" ? !!Q.stopBufferingOnPause : true,
            preload: typeof Q.preload !== "undefined" ? !!Q.preload : true,
            region: Q.region || "US"
        };
        if (U) {
            Q.YVAP = Object.assign({}, U);
        }
        if (S) {
            var O = S.getElementsByTagName("script");
            if (O && O.length > 0) {
                var W = null;
                try {
                    W = JSON.parse(O[0].innerHTML);
                } catch (V) {}
                if (Z) {
                    Z = Object.assign(Z, W);
                }
            }
        }
        var Y = Z.YVAP && !!Z.YVAP.standaloneAd;
        if (Y && Q.adautoplay && !P) {
            Z.autoplay = c(S);
        }
        if (Y && Q.videoAdsOnCellular && Q.isUserConnectionCellular && (q < Q.videoAdsMinBandwidth) && Z.loop) {
            Z.startscreen.showButton = true;
            Z.autoplay = false;
        }
        if (Q.enableVideoRecommendations) {
            Z.playlist.videoRecommendations = true;
        }
        return Z;
    }

    function m(P) {
        var Q = Object.assign({}, P);
        return function O() {
            return Q;
        };
    }(function() {
        if (typeof document.hidden !== "undefined") {
            n = "hidden";
            p = j;
        } else {
            if (typeof document.mozHidden !== "undefined") {
                n = "mozHidden";
                p = "moz" + j;
            } else {
                if (typeof document.msHidden !== "undefined") {
                    n = "msHidden";
                    p = "ms" + j;
                } else {
                    if (typeof document.webkitHidden !== "undefined") {
                        n = "webkitHidden";
                        p = "webkit" + j;
                    }
                }
            }
        }
    })();

    function I() {
        return !!document[n];
    }

    function A() {
        var O = this;
        document.addEventListener(p, function() {
            if (I()) {
                O.onPageHidden();
            } else {
                O.onPageVisible();
            }
        });
    }

    function y(P) {
        P.alwaysPauseOutofViewport = typeof P.alwaysPauseOutofViewport !== "undefined" ? P.alwaysPauseOutofViewport : true;
        this.getConfig = m(P);
        this.videoPlayerState = K;
        this.veModuleState = K;
        var Q = P.playerJsUrl || "";
        var O = document.querySelector(P.videosContainer);
        if (O && Q) {
            var R;
            this.findVideosInit(O);
            if (P.preloadPlayerJS && this.videoPlayerState === K) {
                this.initPlayerJs(function S() {
                    console.log("Loaded Video PLayer JS early");
                });
            }
            if (G.MutationObserver) {
                R = new MutationObserver(o.bind(this));
                R.observe(O, {
                    childList: true,
                    subtree: true
                });
            }
            A.bind(this)();
        } else {
            console.log("VideoManager could not init, videosContainer or playerJsUrl not configured");
        }
    }
    y.prototype = {
        createPlayerInstance: function D(Y, ag) {
            var aa = Y && {
                uuid: Y.getAttribute("data-pkg-video-id") || Y.getAttribute("data-uuid")
            };
            if (!aa || !aa.uuid || !Y || !this._isPlayerJSLoaded()) {
                return;
            }
            var W = this;
            var af = W.getConfig();
            var Q = Y.querySelector(af.swapSelector);
            if (Q) {
                if (!W.isPlayable()) {
                    aa.autoplay = false;
                }
                var X = "vid_mgr_" + (++F);
                var T = Y.getAttribute("data-video-aspect") || null;
                var P = Y.getAttribute("data-viewable-percentage") || 0;
                var V = Y.getAttribute("data-use-container-node") || 0;
                var ae = E(X, T, "", P);
                var U = H(af, aa, Y);
                var O = Y.getAttribute("data-enable-livestream") || false;
                var S = Y.getAttribute("data-channel-id") || "test";
                var ad = Y.getAttribute("data-livestream-support-for") || "nfl";
                var ab;
                Q.parentElement.replaceChild(ae, Q);
                var R = null;
                if (af.adclickhandler && U && U.YVAP && U.YVAP.standaloneAd && U.YVAP.standaloneAd.gemini && U.YVAP.standaloneAd.gemini.clickUrl) {
                    R = U.YVAP.standaloneAd.gemini.clickUrl;
                    U.YVAP.standaloneAd.gemini.clickUrl = null;
                }
                if (af.videoStreamRapidEnabled) {
                    a = af.contentLinkTarget || ".js-stream-content-link";
                    W.updateVideoConfigWithRapidInstance(U, Y);
                }
                ab = new YAHOO.VideoPlatform.VideoPlayer(Object.assign({}, U));
                var Z = {
                    firedBeacons: {},
                    guid: X,
                    has_interacted: false,
                    in_viewport: c(Y),
                    is_ad: U.YVAP && !!U.YVAP.standaloneAd,
                    is_playing: U.autoplay,
                    is_complete: false,
                    liveStreamEnabled: O,
                    loopCount: 0,
                    player: ab,
                    playerNode: ae,
                    swapNode: Q,
                    videoCfg: U,
                };
                if (ag || Z.in_viewport) {
                    W._renderVideo(Z);
                } else {
                    g.push(Z);
                }
                Y.classList.add("video-mgr-inited");
                W._addPlayerToMap(Z);
                if (U.loop && l[X].is_ad) {
                    l[X].isSmVideoAdStarted = true;
                }
                if (af.videoAdsOnCellular && U.loop && (q < af.videoAdsMinBandwidth) && af.isUserConnectionCellular) {
                    l[X].isSmVideoAdStarted = false;
                }
                if (window.wafer && (af.videoAdsOnCellular && U.loop && af.isUserConnectionCellular && l[X].is_ad)) {
                    var ac = "/p.gif?info=smadCellularAutoplay&bandwidth=" + q + "&autoplay=" + l[X].isSmVideoAdStarted;
                    window.wafer.utils.fireBeacon(ac);
                }
                if (V && l[X]) {
                    l[X].containerNode = Y;
                }
                if (R) {
                    l[X].adClickUrl = R;
                }
                W.attachVideoListeners(ab, Y, X);
                O && ab && X && W.registerForLivestream(X, ab, S, ad);
                return l[X];
            }
        },
        disablePlayers: function i() {
            var O = this;
            Object.keys(l).forEach(function(P) {
                var Q = O._getPlayerMapItem(P);
                O._disableVideo(Q);
            });
        },
        _disableVideo: function u(P) {
            var O = this;
            if (P && P.player) {
                P.is_disabled = true;
                if (P.player.controls.isPlaying()) {
                    O._pauseVideo(P);
                }
            }
        },
        enablePlayers: function M() {
            var O = this;
            var P = O.getConfig();
            Object.keys(l).forEach(function(Q) {
                var R = O._getPlayerMapItem(Q);
                if (R.is_disabled) {
                    R.is_disabled = false;
                    if (c(R.containerNode || R.playerNode)) {
                        if (!P.videoAdsOnCellular || !R.is_ad) {
                            O._playVideo(R);
                        } else {
                            if ((P.isUserConnectionCellular && l[Q].isSmVideoAdStarted) || !P.isUserConnectionCellular) {
                                O._playVideo(R);
                            }
                        }
                    }
                }
            });
        },
        getConnectionBandwidth: function w(P) {
            var Q = 200;
            var O;
            var R;
            var T = P.transferSize;
            var S = 0;
            if (G.YAFT && window.performance) {
                O = G.YAFT.getPerformance().getEntries("resource")[0];
                R = G.YAFT.data[0];
            } else {
                if (window.performance) {
                    O = window.performance.getEntries("resource")[0];
                }
            }
            if (R && R.resources[0]) {
                T = R.resources[0].transferSize > 0 ? R.resources[0].transferSize : T;
                S = R.resources[0].responseDuration;
            } else {
                if (O) {
                    T = O.transferSize || P.transferSize;
                    S = (O.responseEnd - O.responseStart) - Q > 0 ? (O.responseEnd - O.responseStart) - Q : (O.responseEnd - O.responseStart);
                }
            }
            if (!S || typeof S !== "number" || typeof T !== "number") {
                return 0;
            }
            return (T * 8 * 1000) / (S * 1024 * 1024);
        },
        findVideosInit: function e(U) {
            if (!U) {
                console.warn("VideoManager:findVideosInit requires a target");
                return;
            }
            var R = this;
            var O = U;
            var T = O.querySelectorAll('[data-type="yvideo"]');
            var S = R.getConfig();
            var Q = false;
            if (T.length) {
                this.initPlayerJs(function P() {
                    if (S.videoAdsOnCellular) {
                        q = R.getConnectionBandwidth(S);
                        if (typeof q !== "number") {
                            q = 0;
                        }
                    }
                    T.forEach(function V(aa, Y) {
                        var X = aa.querySelector("." + S.containerClass || ".vp-wrap");
                        var Z = R._getPlayerMapItem(X && X.getAttribute("id"));
                        if (!X || !Z) {
                            Z = R.createPlayerInstance(aa, Y < S.renderBatchSize);
                            var W = (S.autoplay || S.adautoplay && Z && Z.is_ad);
                            if (S.videoAdsOnCellular) {
                                W = (S.autoplay || (S.adautoplay && Z && Z.is_ad && (!S.isUserConnectionCellular || Z.isSmVideoAdStarted)));
                            }
                            if (W) {
                                Q = true;
                                !R.scrollEventHandle && R._setupViewportListener();
                            }
                        }
                    });
                });
            }
            return Q;
        },
        initPlayerJs: function h(R) {
            var O = this;
            var P;
            var Q;
            if (O.videoPlayerState === K) {
                Q = function() {
                    if (typeof R === "function") {
                        O.videoPlayerState = "ready";
                        R.call(O);
                    }
                };
                if (O._isPlayerJSLoaded()) {
                    return Q();
                }
                O.videoPlayerState = "fetching";
                P = O.getConfig().playerJsUrl;
                if (typeof P === "string") {
                    d(P, Q);
                }
            } else {
                if (O.videoPlayerState === "ready") {
                    R();
                }
            }
        },
        registerForLivestream: function(R, Q, S, O) {
            var P = this;
            if (b.livestreamManager) {
                b.livestreamManager.registerVideoplayer(R, Q, S, O);
            } else {
                if (G && G.LivestreamManager) {
                    b.livestreamManager = new LivestreamManager();
                    b.livestreamManager.registerVideoplayer(R, Q, S, O);
                } else {
                    console.log("Livestream Manager has not been loaded on page!");
                }
            }
        },
        onPageVisible: function B() {
            var O = this;
            var P = O.getConfig();
            Object.keys(l).forEach(function(S) {
                var T = O._getPlayerMapItem(S);
                var R = c(T.containerNode || T.playerNode);
                var Q = (P.autoplay || P.adautoplay && T && T.is_ad);
                if (R) {
                    T.in_viewport = true;
                    if (Q && O.isPlayable()) {
                        if (!P.videoAdsOnCellular || !T.is_ad) {
                            O._playVideo(T);
                        } else {
                            if ((P.isUserConnectionCellular && l[S].isSmVideoAdStarted) || !P.isUserConnectionCellular) {
                                O._playVideo(T);
                            }
                        }
                    }
                }
            });
        },
        onPageHidden: function v() {
            var O = this;
            Object.keys(l).forEach(function(P) {
                var Q = O._getPlayerMapItem(P);
                O._pauseVideo(Q);
            });
        },
        _renderVideo: function z(O) {
            if (!O.is_rendered) {
                O.player.render("#" + O.guid);
                O.is_rendered = true;
            }
        },
        _pauseVideo: function x(O) {
            if (O && O.player && O.player.controls) {
                O.is_playing = false;
                O.player.controls.pause();
            }
        },
        isPlayable: function s() {
            var R = true;
            var P = this;
            var Q = P.getConfig();
            Object.keys(l).forEach(function O(S) {
                var T = P._getPlayerMapItem(S);
                if (T && Q.alwaysPauseOutofViewport && T.is_playing) {
                    R = false;
                }
            });
            return R;
        },
        _playVideo: function t(O) {
            if (O && O.swapNode && O.swapNode.getAttribute("data-pause-landscape") && O.is_disabled) {
                return;
            }
            if (O.is_playing === true) {
                return;
            }
            if (O.is_disabled || O.is_complete) {
                return;
            }
            this._renderVideo(O);
            if (O && O.player && O.player.controls) {
                O.is_playing = true;
                O.player.controls.play();
            }
        },
        _handleScroll: function r(R) {
            var P = this;
            var Q = P.getConfig();
            if (R && g.length) {
                g.splice(0, Q.renderBatchSize).forEach(P._renderVideo);
            }
            Object.keys(l).forEach(function O(U) {
                var W = P._getPlayerMapItem(U);
                var V = Q.alwaysPauseOutofViewport;
                if (W && (V || !W.has_interacted)) {
                    var T = c(W.containerNode || W.playerNode);
                    var S = (Q.autoplay || Q.adautoplay && W && W.is_ad);
                    if (Q.videoAdsOnCellular && Q.isUserConnectionCellular && W.videoCfg.loop && !l[U].isSmVideoAdStarted && W.is_ad) {
                        S = false;
                    }
                    if (T) {
                        W.in_viewport = true;
                        P._renderVideo(W);
                        if (S && P.isPlayable()) {
                            P._playVideo(W);
                        }
                    } else {
                        if (!T && V) {
                            W.in_viewport = false;
                            P._pauseVideo(W);
                        }
                    }
                }
            });
        },
        _setupViewportListener: function N() {
            var O = this;
            var P = k(O._handleScroll.bind(O), 50);
            O.scrollEventHandle = true;
            G.addEventListener("scroll", P);
            O.resizeEventHandle = G.addEventListener("resize", P);
        },
        _isPlayerJSLoaded: function J() {
            return typeof YAHOO !== "undefined" && YAHOO.VideoPlatform && YAHOO.VideoPlatform.VideoPlayer;
        },
        _addPlayerToMap: function L(P) {
            var O = P.guid;
            var Q = {
                loopCount: 0,
                has_interacted: false,
                firedBeacons: {},
                eventSubscriptions: {
                    playerErrors: true
                }
            };
            l[O] = P;
        },
        _getPlayerMapItem: function(O) {
            return l && O in l && l[O];
        },
        _getVpAPI: function C() {
            if (!this.vpAPI) {
                this.vpAPI = YAHOO && YAHOO.VideoPlatform && YAHOO.VideoPlatform.API_Events;
            }
            return this.vpAPI;
        },
        getManagedPlayers: function f() {
            return Object.assign({}, l);
        },
        toggleMuteBtn: function(O, Q, S) {
            if (S) {
                S.preventDefault();
                S.stopPropagation();
            }
            if (O && Q) {
                if (O.classList.contains("mute-on")) {
                    if (Q.controls) {
                        Q.controls.setMute(false);
                    }
                    O.classList.remove("mute-on");
                    O.classList.add("mute-off");
                } else {
                    if (Q.controls) {
                        Q.controls.setMute(true);
                    }
                    O.classList.remove("mute-off");
                    O.classList.add("mute-on");
                }
                var P = O.getAttribute("aria-label");
                var R = O.getAttribute("data-alt-txt");
                if (P && R) {
                    O.setAttribute("aria-label", R);
                    O.setAttribute("data-alt-txt", P);
                }
            }
        },
        attachVideoListeners: function(af, ad, ab) {
            var aa = this,
                Q = aa._getVpAPI(),
                ac, Z, ag, ah, X = ad && ad.getAttribute("data-videoBeacons"),
                S = X || false,
                T = l[ab],
                aj = (T && T.fireBeacons) || {},
                ae = ad && ad.getAttribute("data-meta"),
                U = (T && T.videoCfg) || {},
                ai = aa.getConfig(),
                Y = false,
                W;
            if (Q && l && l[ab]) {
                W = l[ab].eventSubscriptions || {};
                af.on(Q.UI_INTERACT, function O(al) {
                    var ak = al && al.srcElement && al.srcElement.toLowerCase();
                    if (ai.loop) {
                        af.controls.setLoop(false);
                    }
                    if (l && l[ab]) {
                        l[ab].has_interacted = true;
                    }
                    if (!aa.scrollEventHandle && ai.alwaysPauseOutofViewport) {
                        aa._setupViewportListener();
                    }
                });
                af.on(Q.PLAYBACK_RESUMED, function V() {
                    if (aa._currentPlaying && ai.singleVideo && ab !== aa._currentPlaying) {
                        aa._pauseVideo(l[aa._currentPlaying]);
                    }
                    aa._currentPlaying = ab;
                });
                af.on(Q.PLAYBACK_START, function R() {
                    if (l[ab].is_ad) {
                        if (Y) {
                            l[ab].is_playing = true;
                        }
                    } else {
                        l[ab].is_playing = true;
                    }
                    if (aa._currentPlaying && ai.singleVideo && ab !== aa._currentPlaying) {
                        aa._pauseVideo(l[aa._currentPlaying]);
                    }
                    aa._currentPlaying = ab;
                    l[ab].is_complete = false;
                });
                af.on(Q.PLAYLIST_COMPLETE, function R() {
                    l[ab].is_playing = false;
                    l[ab].is_complete = true;
                });
                var P = ad.getElementsByClassName("mute-btn");
                if (P && P.length > 0) {
                    af.on(Q.AD_PLAYBACK_START, function() {
                        l[ab].is_playing = true;
                        l[ab].is_complete = false;
                        P[0].style.display = "block";
                        Y = true;
                    });
                    if (!U.loop) {
                        af.on(Q.AD_PLAYBACK_STOP, function(ak) {
                            P[0].style.display = "none";
                            l[ab].is_playing = false;
                        });
                    }
                    P[0].addEventListener("click", aa.toggleMuteBtn.bind(this, P[0], af));
                    if (ai.adclickhandler && ad && T && T.is_ad && T.adClickUrl) {
                        ad.addEventListener("click", function(al) {
                            al.preventDefault();
                            al.stopPropagation();
                            if (!ai.videoAdsOnCellular || !ai.isUserConnectionCellular || !U.loop) {
                                window.open(T.adClickUrl, "_blank");
                            } else {
                                if (ai.videoAdsOnCellular && ai.isUserConnectionCellular) {
                                    if (l[ab].isSmVideoAdStarted) {
                                        window.open(T.adClickUrl, "_blank");
                                    } else {
                                        var ak = aa._getPlayerMapItem(ab);
                                        aa._playVideo(ak);
                                        l[ab].isSmVideoAdStarted = true;
                                    }
                                }
                            }
                        });
                    }
                }
            }
        },
        updateVideoConfigWithRapidInstance: function(P, R) {
            var Q = R.closest("[data-i13n-sec]");
            var T = Q && Q.getAttribute("data-i13n-sec") || "";
            var V = {};
            var W = {};
            var O = window.rapidPageConfig && window.rapidPageConfig.rapidConfig && window.rapidPageConfig.rapidConfig.keys || {};
            var U = R.querySelector(a);
            if (U) {
                var V = U.getAttribute("data-ylk") && this.stringParseKV(U.getAttribute("data-ylk")) || {};
                var S = Q.getAttribute("data-i13n") && this.stringParseKV(Q.getAttribute("data-i13n")) || {};
                if (S) {
                    Object.keys(S).forEach(function(X) {
                        V[X] = S[X];
                    });
                }
            }
            P.sec = P.sec || T;
            P.ccode = P.ccode || V.ccode || "";
            P.cpos = P.cpos || V.cpos || "";
            V.sec = T;
            W._rid = O._rid || "";
            W.pt = O.pt || "home";
            W.site = O.site || "";
            P.rapidConfig = {
                rapid: window.rapidInstance,
                clickParams: V,
                pageParams: W
            };
            return P;
        },
        stringParseKV: function(P) {
            var O = {};
            if (!P) {
                return O;
            }
            strArray = P.split(";");
            strArray.forEach(function(T) {
                if (T.length > 0) {
                    var Q = T.indexOf(":"),
                        R = T.substring(0, Q),
                        S = T.substring(Q + 1);
                    if (R) {
                        O[R] = S;
                    }
                }
            });
            return O;
        }
    };
    G.VideoManager = y;
})(); /* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */