! function() {
    var Y = "vast",
        Z = "-1",
        e = "time",
        d = "[ERRORCODE]",
        E = "vmap",
        tt = 5e3,
        et = 15e3,
        it = "jwp",
        rt = "jwpspotx",
        n = "state",
        nt = "autostartNotAllowed",
        st = "viewable",
        at = 5,
        l = "paused",
        ot = "playing",
        dt = "adPodError",
        i = "viewable",
        lt = "adBidRequest",
        ut = "adBidResponse",
        ht = "adBreakEnd",
        s = "adBreakIgnored",
        pt = "adBreakStart",
        r = "adClick",
        ct = "adComplete",
        mt = "adError",
        ft = "adImpression",
        vt = "adLoaded",
        u = "adMeta",
        o = "adPause",
        h = "adPlay",
        yt = "adRequest",
        gt = "adSchedule",
        p = "adSkipped",
        t = "adStarted",
        a = "click",
        c = "play",
        m = "error",
        f = "complete",
        v = [ft, mt, dt],
        y = [t, ct, ft, r, p, mt, h, o, u],
        g = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        A = function() {
            function r(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(t, e, i) {
                return e && r(t.prototype, e), i && r(t, i), t
            }
        }(),
        At = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = arguments[e];
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
            }
            return t
        },
        P = function() {
            function a(t, e, i, r, n) {
                var s = this;
                g(this, a), this.player = t, this.state = t.state, this.vpaidURL = i, this.adTag = r, this.adParams = n.adParams, this.vpaidControls = n.vpaidControls, this.type = "vpaid", this.instream = e || t.createInstream(), this.toRemove = [], this.vpaidState = {
                    linear: !1,
                    expanded: !1,
                    remainingTime: -1
                }, this.paused = !1, At(this, t.Events), this.setMuteCallback = function() {
                    s.handleMute ? s.setMute() : s.handleMute = !0
                }, this.playerContainer = this.player.getContainer(), n.adOptOut ? setTimeout(function() {
                    s.sendEvent("error", {
                        message: "Conditional ad rejected",
                        code: 408
                    })
                }, 0) : (this.iframe = function(t, e, i, r) {
                    var n = document.createElement("iframe");
                    n.setAttribute("gesture", "media"), n.setAttribute("allow", "autoplay"), n.src = "javascript:false", t.style(n, {
                        border: 0,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        overflow: "hidden"
                    }), n.scrolling = "no", i.querySelector(".jw-media").appendChild(n);
                    var s = n.contentWindow.document;
                    return s.open().write("\n    <body onload=\"\n        var js = document.createElement('script');\n        js.src = '" + e + "';\n        js.addEventListener('load', function() { window.myCallback(); });\n        document.body.appendChild(js);\"\n    style=\"margin: 0\">"), n.contentWindow.myCallback = r, s.close(), n
                }(t.utils, this.vpaidURL, this.playerContainer, this.callback.bind(this)), this.toRemove.push(this.iframe))
            }
            return a.prototype.sendEvent = function(t, e) {
                (e = e || {}).tag || (e.tag = this.adTag), this.trigger(t, e)
            }, a.prototype.sendTimeEvent = function(t, e, i) {
                var r = e.getAdDuration(),
                    n = e.getAdRemainingTime(),
                    s = At({
                        duration: r
                    }, i);
                this.sendEvent(t, s), 0 < n && (s.position = r - n, this.trigger("time", s))
            }, a.prototype.handleQuartile = function(t, e) {
                this.sendTimeEvent("quartile", t, {
                    quartile: e
                })
            }, a.prototype.genEvent = function(e) {
                var i = this;
                return function(t) {
                    i.on(e, t)
                }
            }, a.prototype.setMute = function() {
                var t = 0 === this.vpaidAd.getAdVolume();
                this.player.getMute() !== t && this.player.setMute(t)
            }, a.prototype.userActive = function() {
                var t = this.player.utils.hasClass(this.playerContainer, "jw-flag-time-slider-above");
                this.player.utils.style(this.iframe, {
                    bottom: t ? 66 : 60
                })
            }, a.prototype.userInactive = function() {
                "paused" !== this.player.getState() && this.player.utils.style(this.iframe, {
                    bottom: "0.5em"
                })
            }, a.prototype.prepareNonlinearAd = function() {
                var t = !this.player.utils.hasClass(this.playerContainer, "jw-flag-user-inactive");
                if (this.player.utils.style(this.iframe, {
                        height: 150
                    }), this.resize(null, 150), this.userActive(t), this.player.on("userActive", this.userActive, this), this.player.on("userInactive", this.userInactive, this), this.instream) {
                    this.instream.noResume = !0, this.instream.applyProviderListeners(null), this.instream.destroy(), this.instream = null;
                    var e = this.playerContainer.querySelector(".jw-media"),
                        i = e.querySelector("video,audio");
                    e.insertBefore(i, this.iframe), i.play()
                }
            }, a.prototype.genListeners = function(t) {
                var r = this;
                return {
                    AdLoaded: function() {
                        t.setAdVolume(r.getPlayerVolume()), t.startAd()
                    },
                    AdStarted: function() {
                        t.getAdLinear() ? r.vpaidControls || (r.instream = r.instream || r.player.createInstream(), r.instream.hide()) : r.prepareNonlinearAd(), r.sendEvent("impression", {
                            linear: t.getAdLinear() ? "linear" : "nonlinear"
                        }), r.sendEvent("play", {
                            oldstate: "buffering",
                            newstate: ot,
                            linear: t.getAdLinear() ? "linear" : "nonlinear"
                        }), r.handleMute = !0, t.subscribe(r.setMuteCallback, "AdVolumeChange", t)
                    },
                    AdVideoStart: function() {
                        r.sendEvent("started")
                    },
                    AdStopped: function() {
                        k(r.toRemove), r.sendEvent("stopped")
                    },
                    AdPaused: function() {
                        r.paused || (r.paused = !0, r.sendEvent("pause", {
                            newstate: l,
                            oldstate: ot
                        }))
                    },
                    AdPlaying: function() {
                        r.paused && (r.paused = !1, r.sendEvent("play", {
                            newstate: ot,
                            oldstate: l,
                            linear: t.getAdLinear() ? "linear" : "nonlinear"
                        }))
                    },
                    AdLinearChange: function() {
                        t.getAdLinear() ? (r.player.utils.style(r.iframe, {
                            height: "100%"
                        }), r.player.off(null, null, r), r.instream = r.instream || r.player.createInstream(), r.instream.init(), r.vpaidControls || r.instream.hide()) : r.prepareNonlinearAd()
                    },
                    AdDurationChange: function() {
                        r.sendTimeEvent("remainingTimeChange", t, {
                            isDurationChange: !0,
                            remainingTime: t.getAdRemainingTime()
                        })
                    },
                    AdRemainingTimeChange: function() {
                        r.sendTimeEvent("remainingTimeChange", t, {
                            remainingTime: t.getAdRemainingTime()
                        })
                    },
                    AdExpandedChange: function() {
                        r.sendEvent("expandedChange", {
                            expanded: t.getAdExpanded()
                        })
                    },
                    AdSkipped: function() {
                        k(r.toRemove), r.sendEvent("skipped")
                    },
                    AdVideoFirstQuartile: function() {
                        r.handleQuartile(t, 1)
                    },
                    AdVideoMidpoint: function() {
                        r.handleQuartile(t, 2)
                    },
                    AdVideoThirdQuartile: function() {
                        r.handleQuartile(t, 3)
                    },
                    AdVideoComplete: function() {
                        r.sendEvent("complete")
                    },
                    AdUserClose: function() {
                        r.sendEvent("close")
                    },
                    AdClickThru: function(t, e, i) {
                        r.sendEvent("click", {
                            id: e,
                            url: t,
                            playerHandles: i
                        })
                    },
                    AdError: function(t) {
                        k(r.toRemove);
                        var e = function(t) {
                            if (t) {
                                var e = t.match(/\b(?:[34])[0-9]{2}\b/);
                                if (e) return parseInt(e[0], 10);
                                if (t.match(/timeout/i)) return t.match(/vpaid|vast/i) ? 301 : 402;
                                if (t.match(/found/i)) return 401;
                                if (t.match(/supported/i)) return 403;
                                if (t.match(/(?:displaying|media file)/i)) return 405
                            }
                            return 901
                        }(t);
                        r.sendEvent("error", {
                            message: t,
                            code: e,
                            adErrorCode: 5e4 + e
                        })
                    }
                }
            }, a.prototype.callback = function() {
                var e = this.vpaidAd = this.iframe.contentWindow.getVPAIDAd(),
                    t = e.handshakeVersion("2.0");
                if (parseFloat(t) < 1) throw new Error("Invalid vpaid version in handshake");
                var i = this.genListeners(e);
                Object.keys(i).forEach(function(t) {
                    e.subscribe(i[t], t, e)
                }), this.listeners = i;
                var r = {
                        AdParameters: this.adParams
                    },
                    n = this.playerContainer.querySelector(".jw-media"),
                    s = this.instream.getMediaElement(),
                    a = this.iframe.contentWindow.document.createElement("div");
                a.className = "jw-vpaid-wrapper", a.style.height = "100%", this.iframe.contentWindow.document.body.appendChild(a);
                var o = {
                    videoSlot: s,
                    slot: a
                };
                e.initAd(n.clientWidth, n.clientHeight, "normal", 1e3, r, o), e.setAdVolume(this.getPlayerVolume())
            }, a.prototype.play = function() {
                this.vpaidAd.resumeAd()
            }, a.prototype.pause = function() {
                this.vpaidAd.pauseAd()
            }, a.prototype.stop = function() {
                if (this.vpaidAd) try {
                    this.vpaidAd.stopAd()
                } catch (t) {
                    console.log("Unhandled exception from VPAID2 Creative stopAd", t)
                }
            }, a.prototype.getPlayerVolume = function() {
                return this.player.getMute() ? 0 : this.player.getVolume() / 100
            }, a.prototype.setVolume = function(t) {
                this.handleMute = !1, this.vpaidAd.setAdVolume(t / 100)
            }, a.prototype.resize = function(t, e) {
                if (this.vpaidAd && this.vpaidAd.resizeAd) {
                    var i = this.player.getFullscreen() || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen ? "fullscreen" : "normal";
                    this.vpaidAd.resizeAd(t || this.player.getWidth(), e || this.player.getHeight(), i)
                }
            }, a.prototype.destroy = function() {
                if (k(this.toRemove), this.removeEvents(), this.vpaidAd) try {
                    var e = this.listeners,
                        i = this.vpaidAd;
                    Object.keys(e).forEach(function(t) {
                        i.unsubscribe(e[t], t, i)
                    }), i.unsubscribe(this.setMuteCallback, "AdVolumeChange", i)
                } catch (t) {
                    console.log("Unhandled exception from VPAID2 Creative", t)
                }
                this.player = null, this.instream = null
            }, a.prototype.removeEvents = function() {
                this.player && this.player.off(null, null, this), this.off()
            }, a.prototype.attachMedia = function() {}, a.prototype.detachMedia = function() {}, a.prototype.volume = function() {}, a.prototype.mute = function() {}, a.prototype.getState = function() {
                return this.vpaidState.linear ? this.paused ? l : ot : "idle"
            }, a
        }();

    function k(t) {
        for (; 0 < t.length;) {
            var e = t.pop();
            e.parentNode && e.parentNode.removeChild(e)
        }
    }
    var Pt = {},
        b = [];
    var _ = function() {
        function o(t, e, i, r) {
            var n = this;
            g(this, o);
            var s, a = t || {};
            this.map = a, this.debugTrackFn = e, this.trackerPlayerUtils = (s = i, {
                getPosition: function() {
                    return s.getPosition()
                },
                getFile: function() {
                    return s.getPlaylistItem().file
                }
            }), this.trackingFilter = r, this.lastQuartile = 0, this.progressEvents = [], this.breakStarted = !1, this.started = !1, this.firedError = !1, this.hasComp = !1, Pt._.map(a, function(t, e) {
                if (a.hasOwnProperty(e) && 0 === e.indexOf("progress")) {
                    var i = "" + e.split("_")[1],
                        r = {
                            key: e,
                            offset: i,
                            tracked: !1,
                            percentage: !1
                        };
                    /^\d+%$/.test(i) ? (r.percentage = !0, r.offset = parseFloat(i)) : r.offset = Pt.utils.seconds(i), n.progressEvents.push(r)
                }
            }), this.setFactories()
        }
        return o.prototype.getUrls = function(t) {
            return this.map.hasOwnProperty(t) ? this.map[t] : []
        }, o.prototype.addUrl = function(t, e) {
            this.map.hasOwnProperty(t) || (this.map[t] = []), this.map[t].push(e)
        }, o.prototype.trackPings = function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                i = this.getUrls(t),
                r = this.trackingFilter,
                n = [],
                s = [],
                a = [];
            if (i.length) {
                e = this.replaceMacros(e), i.forEach(function(i) {
                    if (i) {
                        if (Pt._.each(e, function(t, e) {
                                i = i.replace(e, t)
                            }), r && !1 === r(i)) return void s.push(i);
                        var t = new Image;
                        t.src = i, n.push(i), a.push(t)
                    }
                }), Array.prototype.push.apply(b, a);
                for (var o = b.length; o-- && (b[o].width || b[o].complete);) b.length = o
            }
            "function" == typeof this.debugTrackFn && this.debugTrackFn({
                type: "ping",
                data: {
                    pingType: t,
                    urls: n,
                    filteredUrls: s,
                    images: a
                }
            })
        }, o.prototype.replaceMacros = function(t) {
            var e, i, r, n, s, a, o;
            return t["[TIMESTAMP]"] = encodeURIComponent((e = new Date, i = e.getTime(), r = e.getTimezoneOffset() / 60, n = 6e4 * e.getTimezoneOffset(), new Date(i - n).toISOString().slice(0, -1) + (0 < r ? "-" : "+") + ("0" + r).slice(-2))), t["[CACHEBUSTING]"] = Math.random().toString().slice(2, 10), t["[ASSETURI]"] = encodeURIComponent(this.trackerPlayerUtils.getFile()), t["[CONTENTPLAYHEAD]"] = encodeURIComponent((s = this.trackerPlayerUtils.getPosition(), a = ("0" + Math.floor(s / 3600)).slice(-2), o = ("0" + Math.floor((s - 3600 * a) / 60)).slice(-2), a + ":" + o + ":" + ("0" + Math.floor(s - 3600 * a - 60 * o)).slice(-2) + "." + (s % 1).toFixed(3).toString().slice(2, 5))), t
        }, o.prototype.start = function() {
            this.started = !0, this.trackPings("start")
        }, o.prototype.breakStart = function() {
            this.breakStarted = !0, this.trackPings("breakStart")
        }, o.prototype.time = function(t, e) {
            if (!(e <= 1)) {
                for (var i = (4 * t + .05) / e | 0; i > this.lastQuartile && this.lastQuartile < 3;) this.lastQuartile++, 1 === this.lastQuartile ? this.trackPings("firstQuartile") : 2 === this.lastQuartile ? this.trackPings("midpoint") : 3 === this.lastQuartile && this.trackPings("thirdQuartile");
                this.trackProgress(t, e)
            }
        }, o.prototype.trackProgress = function(t, e) {
            for (var i = this.progressEvents.length; i--;) {
                var r = this.progressEvents[i];
                if (!r.tracked) {
                    var n = r.offset;
                    r.percentage && (n = e * n / 100), n <= t && (r.tracked = !0, this.trackPings(r.key))
                }
            }
        }, o.prototype.error = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 900;
            this.firedError = !0;
            var e = {};
            e[d] = t, this.trackPings("error", e)
        }, o.prototype.factory = function(t) {
            var e = this;
            return function() {
                e.trackPings(t)
            }
        }, o.prototype.setFactories = function() {
            this.creativeView = this.factory("creativeView"), this.click = this.factory("click"), this.skip = this.factory("skip"), this.complete = this.factory("complete"), this.pause = this.factory("pause"), this.resume = this.factory("resume"), this.mute = this.factory("mute"), this.unmute = this.factory("unmute"), this.fullscreen = this.factory("fullscreen"), this.expand = this.factory("expand"), this.collapse = this.factory("collapse"), this.acceptInvitation = this.factory("acceptInvitation"), this.close = this.factory("close"), this.rewind = this.factory("rewind"), this.impression = this.factory("impression"), this.breakEnd = this.factory("breakEnd")
        }, o
    }();

    function kt(t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 900,
            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 60900,
            r = {};
        return r.message = t, r.code = e, r.adErrorCode = i, r
    }

    function bt(t) {
        return new Array(t + 1).join((Math.random().toString(36) + "00000000000000000").slice(2, 18)).slice(0, t)
    }

    function w(t, e) {
        t.wrappedTags && (e.wrapperAdSystem = t.wrapper || "", e.tag = t.wrappedTags.pop(), e.wrappedTags = t.wrappedTags), e.adsystem = t.adsystem || ""
    }

    function _t(t, e, i) {
        var r = t.vmap ? t.vmap : t.adschedule || t.adbreak;
        if (r && i[r.breakid]) {
            var n = i[r.breakid],
                s = n.bid.getEventObject(Y, n.bidders, t);
            t.mediationLayerAdServer = s.mediationLayerAdServer, t.bidders = s.bidders, s.floorPriceCents && (t.floorPriceCents = s.floorPriceCents)
        }
        return t
    }
    var wt = function() {
        function a(t, e, i, r, n, s) {
            g(this, a), this.player = e, this.staticPlayer = i, this.companion = r, this.playlistItemManager = n, this.optionalParams = s, this.debugTrackFn = s.debugTrackFn, this.scheduledAd = t.scheduledAd(), this.vastBuffet = t.adBuffet(), this.vastAdPod = t.adPod(), this.vastAd = this.vastBuffet.length ? this.vastBuffet[0] : null, this.adType = null, this.vpaidPlayer = null, this.instreamPlayer = null, this.blockingInstreamPlayer = null, this.mediaType = null, this.adPodItems = null, this.creativeTimeout = null, this.vastOptions = null, this.duration = 0, this.position = 0, this.adPodIndex = 0, this.initialIndex = 0, At(this, e.Events)
        }
        return a.prototype.init = function(t) {
            return this.init = function() {
                throw new Error("Adplayer can only be initialized once")
            }, this.blockingInstreamPlayer = t, !!this.prepareAdPod() && (this.player.on("fullscreen", this.playerFullscreenHandler, this), this.player.on("volume", this.playerVolumeHandler, this), this.player.on("mute", this.muteHandler, this), this.player.on("resize", this.playerResizeHandler, this), this.playAd())
        }, a.prototype.prepareAdPod = function() {
            var e = this,
                t = null,
                i = 0,
                r = [];
            if (this.vastAd && (S(this.vastAd, this.debugTrackFn, this.player, this.optionalParams.trackingFilter), (t = this.prepareAdPodItem(this.vastAd)) && "vpaid" === t.adType && !R(this.vastAd) && (t = null)), this.vastAdPod)
                for (var n = null, s = 0; s < this.vastAdPod.length; s++) {
                    var a = this.vastAdPod[s];
                    S(a, this.debugTrackFn, this.player, this.optionalParams.trackingFilter);
                    var o = this.prepareAdPodItem(a);
                    if (o) {
                        if (n !== o.adType && "instream" === n) break;
                        if (n = o.adType, "vpaid" !== o.adType || R(a)) {
                            var d = r.length + i === s;
                            o && d && r.push(o)
                        } else i++
                    } else i++
                }
            if (!r.length && !t) return this.adError("No Compatible Creatives", 403), !1;
            var l = void 0;
            return r.length ? (l = r, this.vastOptions = [], l.forEach(function(t) {
                e.vastOptions.push(e.getInstreamOptions(t.vastAd))
            })) : (l = t, this.vastOptions = this.getInstreamOptions(this.vastAd)), this.adPodItems = l, !(this.adPodIndex = 0)
        }, a.prototype.prepareAdPodItem = function(t) {
            t.tracker.linear = "linear";
            var e = ("" + t.media[0].adType).toLowerCase() || "instream";
            "vpaid" !== e || R(t) || (e = "instream");
            var i = {
                vastAd: t,
                sources: [],
                adType: e
            };
            this.scheduledAd.skipoffset && (i.skipoffset = this.scheduledAd.skipoffset);
            var r, n, s = t.media,
                a = {};
            if (Pt._.each(s, function(t) {
                    i.sources.push({
                        file: t.file,
                        mimeType: t.type,
                        type: ("" + t.type).replace(/^(?:video|audio)\/(?:x-)?/, "")
                    }), a[t.file] = {
                        width: t.width || 0,
                        height: t.height || 0
                    }
                }), "instream" === e && (i.sources = (r = i.sources, n = void 0, n = jwplayer.api.availableProviders.filter(function(t) {
                    return "flash" !== t.name
                }), r.filter(function(e) {
                    return n.some(function(t) {
                        return t.supports(e)
                    })
                }))), 0 === i.sources.length) return null;
            this.mediaType = ("" + i.sources[0].mimeType).toLowerCase(), i.vastAd.selectedMedia = i.sources[0];
            var o = this.player.getSafeRegion(!0),
                d = null,
                l = null;
            return i.sources.forEach(function(t) {
                var e = a[t.file];
                e.width <= o.width && (!d || e.width > a[d.file].width) && (d = t), e.width >= o.width && (!l || e.width < a[l.file].width) && (l = t)
            }), d ? (i.vastAd.selectedMedia = d).default = !0 : l && ((i.vastAd.selectedMedia = l).default = !0), i
        }, a.prototype.getInstreamOptions = function(t) {
            var e = 0 <= this.optionalParams.skipoffset ? this.optionalParams.skipoffset : null;
            return {
                skipoffset: t.skipoffset || this.scheduledAd.skipoffset || e,
                skipMessage: this.optionalParams.skipMessage,
                skipText: this.optionalParams.skipText
            }
        }, a.prototype.getVastAd = function(t) {
            if (this.adPodItems) {
                var e = void 0;
                if ((e = this.adPodItems.length ? this.adPodItems[t] : this.adPodItems).vastAd) return e.vastAd
            } else if (this.vastAdPod && this.vastAdPod.length) return this.vastAdPod[t];
            return this.vastAd
        }, a.prototype.adError = function(t, e, i) {
            clearTimeout(this.creativeTimeout);
            var r = this.getVastAd(this.adPodIndex),
                n = kt(t, e, i = i || (e ? 1e4 + e : null));
            (n.creativeId = r.creativeId || "", T(r, n), I(r, n), this.vastAdPod && this.adPodIndex < this.vastAdPod.length - 1) ? this.triggerEvent("adPodError", n): (r.tracker.error(n.code), w(r, n), this.addConditionalAdData(n), this.triggerEvent(mt, n))
        }, a.prototype.playAd = function() {
            var t = this.adPodItems[this.adPodIndex] || this.adPodItems;
            if (this.adType = t.adType, this.blockingInstreamPlayer) {
                var e = this.player.getConfig().localization.loadingAd;
                this.blockingInstreamPlayer.setText(e)
            }
            if ("vpaid" === this.adType) return this.playVpaid(t.vastAd);
            if ("static" === this.adType) return this.playStatic(), !0;
            var i = Array.isArray(this.adPodItems) ? this.adPodItems.slice(this.adPodIndex) : this.adPodItems,
                r = Array.isArray(this.vastOptions) ? this.vastOptions.slice(this.adPodIndex) : this.vastOptions;
            return this.initialIndex = this.adPodIndex, this.playInstream(i, r)
        }, a.prototype.clearVpaidBlocking = function() {
            if (this.vpaidPlayer.instream) {
                var t = this.vpaidPlayer.instream;
                this.vpaidPlayer.instream = null, this.clearBlocking(t)
            }
        }, a.prototype.clearBlocking = function(t) {
            (t = t || this.blockingInstreamPlayer) && t !== this.instreamPlayer && t.destroy()
        }, a.prototype.getState = function() {
            return this.instreamPlayer ? this.instreamPlayer.getState() : this.vpaidPlayer ? this.vpaidPlayer.getState() : ""
        }, a.prototype.clearNonlinear = function() {
            this.staticPlayer.stop(), this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.stop(), this.vpaidPlayer.destroy(), this.vpaidPlayer = null))
        }, a.prototype.destroy = function() {
            if (clearTimeout(this.viewableTimeout), clearTimeout(this.creativeTimeout), this.off(), this.removePlayerListeners(), clearTimeout(this.creativeTimeout), this.instreamPlayer) {
                var t = this.instreamPlayer;
                this.instreamPlayer = null, this.clearBlocking(t)
            }
            this.vpaidPlayer && (this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null)), this.clearNonlinear(), this.vastLoader = null, this.player = null, this.instreamPlayer = null, this.scheduledAd = null, this.vastBuffet = null, this.vastAd = null, this.vastAdPod = null
        }, a.prototype.pause = function() {
            this.instreamPlayer ? this.instreamPlayer.pause() : this.vpaidPlayer && this.vpaidPlayer.pause()
        }, a.prototype.play = function() {
            this.instreamPlayer ? this.instreamPlayer.play() : this.vpaidPlayer && this.vpaidPlayer.play()
        }, a.prototype.removePlayerListeners = function() {
            this.player && (this.player.off("fullscreen", this.playerFullscreenHandler, this), this.player.off("volume", this.playerVolumeHandler, this), this.player.off("mute", this.muteHandler, this), this.player.off(i, this.viewableHandler, this)), this.instreamPlayer && this.instreamPlayer.off(null, null, this), this.vpaidPlayer && (this.vpaidPlayer.removeEvents(), this.clearVpaidBlocking(), this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null)), this.staticPlayer.stop(), this.staticPlayer.removeEvents()
        }, a.prototype.adEventObject = function(t) {
            var e = this.playlistItemManager.getAdEventObject(this.scheduledAd);
            if (e.viewable = this.player.getViewable(), this.scheduledAd._adbreak && (e.adschedule = this.scheduledAd._adbreak, e.adschedule.offset = this.scheduledAd._offSet), this.adPodItems && this.adPodItems.length && (e.sequence = this.adPodIndex + 1, e.podcount = this.adPodItems.length), this.mediaType && (e.creativetype = this.mediaType), this.scheduledAd._vmap && (e.vmap = this.scheduledAd._vmap), -1 !== y.indexOf(t)) {
                var i = this.getVastAd(this.adPodIndex);
                e.universalAdIdRegistry = i.universalAdIdRegistry, e.universalAdIdValue = i.universalAdIdValue, e.categories = i.categories
            }
            return e
        }, a.prototype.playStatic = function() {
            this.vastAd.tracker.linear = "nonlinear";
            var t = this.vastAd.media[0];
            this.vastAd.selectedMedia = t;
            var e = this.vastAd.clickthrough || "",
                i = this.staticPlayer;
            i.removeEvents(), i.on("play", this.impressionHandler, this), i.on("play", this.playHandler, this), i.on("complete", this.combinedCompleteHandler, this), i.on("click", this.clickStaticHandler, this), i.on("error", this.staticErrorHandler, this), i.playAd(t.file, e, t.minDuration, this.scheduledAd._currentTag, this.scheduledAd.requestTimeout), this.clearBlocking()
        }, a.prototype.creativeAdError = function(t, e, i) {
            this.adError(t, e, i), this.adPodItems && this.adPodItems.length - 1 > this.adPodIndex && (this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null), this.adPodIndex++, this.scheduledAd._adPodIndex = this.adPodIndex, this.playAd())
        }, a.prototype.playVpaid = function(t) {
            var e = this;
            clearTimeout(this.creativeTimeout), this.creativeTimeout = setTimeout(function() {
                e.creativeAdError("VPAID tag communication timeout", 900, 50004)
            }, this.scheduledAd.creativeTimeout);
            var i = R(this.vastAd = t),
                r = this.optionalParams.conditionaladoptout && t.conditionalAd;
            if (this.vastAd.selectedMedia = i, this.mediaType = i.type, "flash" === C(i)) return this.creativeAdError("Flash creatives are not supported", 403, 10403), !1;
            var n = {
                adParams: this.vastAd.adParams,
                vpaidControls: this.optionalParams.vpaidcontrols,
                adOptOut: r
            };
            return this.vpaidPlayer = new P(this.player, this.blockingInstreamPlayer, i.file, this.scheduledAd._currentTag, n), this.blockingInstreamPlayer && this.blockingInstreamPlayer.applyProviderListeners(this.vpaidPlayer), this.vpaidPlayer.on("play", this.playHandler, this), this.vpaidPlayer.on("pause", this.pauseHandler, this), this.vpaidPlayer.on("quartile", this.quartileHandler, this), this.vpaidPlayer.on("remainingTimeChange", this.remainingTimeHandler, this), this.vpaidPlayer.on("click", this.clickVpaidHandler, this), this.vpaidPlayer.on("error", this.playbackErrorHandler, this), this.vpaidPlayer.on("impression", this.impressionHandler, this), this.vpaidPlayer.on("expandedChange", this.vpaidExpandedHandler, this), this.vpaidPlayer.on("close", this.adCloseHandler, this), this.vpaidPlayer.on("skipped", this.vpaidAdSkipped, this), this.vpaidPlayer.on("stopped", this.endOfVpaidAdHandler, this), this.vpaidPlayer.on("complete", this.adCompleteHandler, this), this.vpaidPlayer.on("started", this.adStartedHandler, this), this.setupSkipButton(t), !0
        }, a.prototype.setupSkipButton = function(t) {
            var e = "skipoffset" in t ? Pt.utils.seconds(t.skipoffset) : -1,
                i = 0 <= this.optionalParams.skipoffset ? this.optionalParams.skipoffset : e;
            0 <= i && this.blockingInstreamPlayer && (this.blockingInstreamPlayer.off(p, this.skipVpaidAd, this), this.blockingInstreamPlayer.setupSkipButton(i, this.optionalParams, Pt.utils.noop), this.blockingInstreamPlayer.on(p, this.skipVpaidAd, this))
        }, a.prototype.playInstream = function(t, e) {
            var i = this,
                r = this.player.getEnvironment().OS;
            return r.android && 2 === r.version.major && 3 === r.version.minor ? (this.adError("Android 2.3 not supported", 900, 60007), !1) : (clearTimeout(this.creativeTimeout), this.creativeTimeout = setTimeout(function() {
                i.creativeAdError("VAST tag communication timeout", 900, 60004)
            }, this.scheduledAd.creativeTimeout), this.blockingInstreamPlayer ? this.instreamPlayer = this.blockingInstreamPlayer : this.instreamPlayer = this.player.createInstream().init(), this.instreamPlayer.on("play", this.playHandler, this), this.instreamPlayer.on("pause", this.pauseHandler, this), this.instreamPlayer.on("time", this.timeHandler, this), this.instreamPlayer.on("playlistItem", this.playlistItemHandler, this), this.instreamPlayer.on("complete", this.adCompleteHandler, this), this.instreamPlayer.on("playlistComplete", this.endOfAdBreakHandler, this), this.instreamPlayer.on("mute", this.muteHandler, this), this.instreamPlayer.on("instreamClick", this.clickInstreamHandler, this), this.instreamPlayer.on("adSkipped", this.adSkipped, this), this.instreamPlayer.on("error", this.playbackErrorHandler, this), this.instreamPlayer.on("mediaError", this.playbackErrorHandler, this), this.instreamPlayer.on("destroyed", function() {
                i.instreamPlayer = null
            }, this), this.instreamPlayer.loadItem(t, e), this.clearBlocking(), !0)
        }, a.prototype.playerFullscreenHandler = function(t) {
            var e = this.getVastAd(this.adPodIndex).tracker;
            t.fullscreen && e.started && e.fullscreen()
        }, a.prototype.playerResizeHandler = function(t) {
            this.vpaidPlayer && this.vpaidPlayer.resize(t.width, t.height)
        }, a.prototype.playerVolumeHandler = function(t) {
            this.vpaidPlayer && this.vpaidPlayer.setVolume(t.volume)
        }, a.prototype.playlistItemHandler = function(t) {
            this.instreamPlayer && (this.scheduledAd._adPodIndex = this.adPodIndex = t.index + this.initialIndex)
        }, a.prototype.impressionHandler = function(t) {
            var e = this.getVastAd(this.adPodIndex),
                i = e.tracker;
            i.impression();
            var r = {};
            r.adposition = this.scheduledAd._position || "", r.adtitle = e.adTitle || "", r.creativeId = e.creativeId || "", w(e, r), r.vastversion = e.vastversion, r.clickThroughUrl = e.clickthrough, r.duration = e.duration || 0, r.mediafile = {
                file: e.selectedMedia.file
            }, r.linear = t.linear || i.linear, this.addConditionalAdData(r), T(e, r), I(e, r), this.triggerEvent(ft, r), this.addViewableImpressionHandler()
        }, a.prototype.addViewableImpressionHandler = function() {
            this.player.off(i, this.viewableHandler, this), this.player.on(i, this.viewableHandler, this), this.viewableHandler()
        }, a.prototype.viewableHandler = function(t) {
            var e = this;
            clearTimeout(this.viewableTimeout), this.viewableTimeout = null, (t ? t.viewable : this.player.getViewable()) && (this.viewableTimeout = setTimeout(function() {
                e.player.off(i, e.viewableHandler, e), e.triggerEvent("adViewableImpression", {})
            }, 2e3))
        }, a.prototype.playHandler = function(t) {
            clearTimeout(this.creativeTimeout);
            var e, i, r = this.getVastAd(this.adPodIndex),
                n = r.tracker,
                s = void 0;
            if (n.started) t.oldstate === l && (n.resume(), this.dispatchPlay(t));
            else {
                this.vpaidPlayer && (n.linear = t.linear), this.instreamPlayer && this.impressionHandler({
                    linear: n.linear
                });
                var a = At({
                    linear: n.linear
                }, this.getInstreamOptions(r));
                a.adMessage = this.optionalParams.dynamicMessage || "", a.clickThroughUrl = r.clickthrough, a.sequence && (a.podMessage = this.optionalParams.podMessage || ""), r.adTitle && (a.adtitle = r.adTitle), r.companions && (a.companions = r.companions), I(r, a), this.triggerEvent(u, a), r.companions && ((s = {}).companions = (i = r.companions, Pt._.map(i, function(t) {
                    var e = "iframe" === t.type || "html" === t.type ? t.type : "static",
                        i = void 0;
                    return t.trackers && t.trackers.creativeView && t.trackers.creativeView.length && (i = t.trackers.creativeView), {
                        width: t.width,
                        height: t.height,
                        type: e,
                        resource: t.source,
                        creativeview: i,
                        click: t.clickthrough
                    }
                })), s.universalAdIdRegistry = r.companionUniversalAdIdRegistry, s.universalAdIdValue = r.companionUniversalAdIdValue, this.triggerEvent("adCompanions", s));
                var o = this.companion,
                    d = void 0;
                9 < Pt.utils.flashVersion() ? d = r.companions : (e = r.companions, d = Pt._.filter(e, function(t) {
                    return t.type.indexOf("flash") < 0
                })), this.optionalParams.companion && d && d.length && (n.hasComp = o.addCompanion(this.optionalParams.companion, d)), n.start(), n.creativeView(), this.dispatchPlay(t)
            }
        }, a.prototype.dispatchPlay = function(t) {
            if ("static" !== this.adType && ("vpaid" !== this.adType || "linear" === t.linear)) {
                var e = t.oldstate,
                    i = t.newstate,
                    r = {};
                r.oldstate = e, r.newstate = i, this.triggerEvent(h, r), this.vpaidPlayer && this.vpaidPlayer.trigger(n, r)
            }
        }, a.prototype.pauseHandler = function(t) {
            this.getVastAd(this.adPodIndex).tracker.pause();
            var e = t.oldstate,
                i = t.newstate,
                r = {};
            r.oldstate = e, r.newstate = i, this.triggerEvent(o, r), this.vpaidPlayer && this.vpaidPlayer.trigger(n, {
                newstate: i,
                oldstate: e
            })
        }, a.prototype.remainingTimeHandler = function(t) {
            t.duration ? this.duration = t.duration : this.duration = Math.max(1, this.duration, t.remainingTime);
            var e = 0 <= t.remainingTime ? this.duration - t.remainingTime : 0;
            this.timeHandler({
                position: e,
                duration: this.duration,
                isDurationChange: t.isDurationChange
            })
        }, a.prototype.quartileHandler = function(t) {
            if (t.duration) this.duration = t.duration;
            else {
                var e = 4 * t.remainingTime / (4 - t.quartile);
                this.duration = Math.max(this.duration, 1, e)
            }
            this.timeHandler({
                position: this.duration * t.quartile * .25,
                duration: this.duration
            })
        }, a.prototype.timeHandler = function(t) {
            var e = this.getVastAd(this.adPodIndex),
                i = t.position,
                r = t.duration,
                n = r - i,
                s = e.tracker,
                a = this.optionalParams.dynamicMessage || "",
                o = this.optionalParams.podMessage || "";
            if (a && 0 < n) {
                if (a = a.replace(/(\b)xx(s?\b)/gi, "$1" + Math.ceil(n) + "$2"), this.adPodItems && 1 < this.adPodItems.length && o) {
                    var d = this.adPodIndex + 1;
                    a = (o = (o = o.replace(/__AD_POD_CURRENT__/g, "" + d)).replace(/__AD_POD_LENGTH__/g, "" + this.adPodItems.length)) + " " + a
                }
                this.instreamPlayer ? this.instreamPlayer.setText(a) : this.vpaidPlayer && this.vpaidPlayer.instream && this.vpaidPlayer.instream.setText(a)
            }
            if (!t.isDurationChange) {
                s && s.time(i, r);
                var l = {};
                l.position = this.position = i, l.duration = r, this.triggerEvent("adTime", l)
            }
        }, a.prototype.combinedCompleteHandler = function() {
            this.adCompleteHandler(), this.endOfAdBreakHandler()
        }, a.prototype.adCompleteHandler = function() {
            clearTimeout(this.viewableTimeout);
            var t = this.getVastAd(this.adPodIndex).tracker;
            t.firedError || (t.complete(), this.triggerEvent(ct))
        }, a.prototype.adCloseHandler = function() {
            clearTimeout(this.viewableTimeout);
            var t = this.getVastAd(this.adPodIndex).tracker;
            t.firedError || t.close()
        }, a.prototype.adStartedHandler = function() {
            this.triggerEvent(t)
        }, a.prototype.endOfVpaidAdHandler = function() {
            if (clearTimeout(this.viewableTimeout), this.adPodItems && this.adPodItems.length - 1 > this.adPodIndex) return this.vpaidPlayer && (this.vpaidPlayer.destroy(), this.vpaidPlayer = null), this.adPodIndex++, void this.playAd();
            this.endOfAdBreakHandler()
        }, a.prototype.endOfAdBreakHandler = function() {
            this.removePlayerListeners(), this.trigger(ct)
        }, a.prototype.muteHandler = function(t) {
            var e = this.getVastAd(this.adPodIndex).tracker;
            e && (t.mute ? e.mute() : e.unmute(), this.vpaidPlayer && this.vpaidPlayer.setVolume(t.mute ? 0 : this.player.getVolume()))
        }, a.prototype.clickStaticHandler = function() {
            var t = this.getVastAd(this.adPodIndex);
            this.player.pause(!0), this.clickThrough(t)
        }, a.prototype.clickVpaidHandler = function(t) {
            var e = this.getVastAd(this.adPodIndex),
                i = !0;
            t && void 0 !== t.url && (!1 === t.playerHandles && (i = !1), e.clickthrough = t.url), this.clickThrough(e, i)
        }, a.prototype.clickInstreamHandler = function() {
            this.instreamPlayer.getState() !== l && this.clickThrough(this.getVastAd(this.adPodIndex))
        }, a.prototype.clickThrough = function(t) {
            var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            t.tracker.click();
            var i = {};
            t.clickthrough && (i.clickThroughUrl = t.clickthrough), this.triggerEvent(r, i), window.jwcast && window.jwcast.player.id || t.clickthrough && e && window.open(t.clickthrough)
        }, a.prototype.skipVpaidAd = function() {
            this.endOfVpaidAdHandler(), this.vpaidAdSkipped()
        }, a.prototype.vpaidAdSkipped = function() {
            this.adSkipped(), this.endOfVpaidAdHandler()
        }, a.prototype.adSkipped = function() {
            clearTimeout(this.viewableTimeout);
            var t = this.getVastAd(this.adPodIndex);
            t.tracker.skip();
            var e = this.optionalParams.skipoffset;
            this.triggerEvent(p, {
                duration: t.duration,
                skipoffset: e,
                position: this.position,
                watchedPastSkipPoint: this.position - e
            })
        }, a.prototype.playbackErrorHandler = function(t) {
            var e = t.message || "Error Playing Ad Tag",
                i = t.code;
            (!i || i <= 4) && (i = 400), this.vpaidPlayer && "function" == typeof this.vpaidPlayer.off ? (this.vpaidPlayer.off(), this.creativeAdError(e, i, t.adErrorCode)) : this.adError(e, i, t.adErrorCode)
        }, a.prototype.staticErrorHandler = function() {
            this.adError("Unable to fetch NonLinear resource", 502)
        }, a.prototype.vpaidExpandedHandler = function(t) {
            var e = this.getVastAd(this.adPodIndex).tracker;
            t.expanded ? e.expand() : e.collapse()
        }, a.prototype.triggerEvent = function(t, e) {
            var i = this.adEventObject(t);
            e && At(i, e), -1 !== v.indexOf(t) ? this.trigger(t, i) : this.player.trigger(t, i)
        }, a.prototype.addConditionalAdData = function(t) {
            this.vastAd && (t.conditionalAd = this.vastAd.conditionalAd), this.vastAdPod && this.vastAdPod.length && (t.conditionalAd = this.vastAdPod[this.adPodIndex].conditionalAd), t.conditionalAdOptOut = this.optionalParams.conditionaladoptout
        }, a
    }();

    function T(t, e) {
        "boolean" == typeof t.mediaFileCompliance && (e.mediaFileCompliance = t.mediaFileCompliance, t.nonComplianceReasons && (e.nonComplianceReasons = t.nonComplianceReasons))
    }

    function I(t, e) {
        e.request = t.request, e.response = t.response
    }

    function C(t) {
        return "application/javascript" === (e = t).type || "application/x-javascript" === e.type ? "html5" : "flash";
        var e
    }

    function R(t) {
        for (var e = void 0, i = 0; i < t.media.length; i++) {
            var r = t.media[i];
            if ("html5" === C(r)) {
                e = r;
                break
            }
        }
        return e
    }

    function S(t, e, i, r) {
        t.tracker = new _(t.trackers, e, i, r)
    }
    var Tt = function() {
        function i(t, e) {
            g(this, i), this.debugTrackFn = t, this.div = null, this.elem = null, this.environment = e
        }
        return i.prototype.addCompanion = function(t, e) {
            if (this.div = t, this.elem = document.getElementById(this.div.id), !this.elem) return !1;
            for (var i = 0; i < e.length; i++)
                if (this.fitsDiv(e[i])) return this.placeCompanion(e[i]), !0;
            return !1
        }, i.prototype.removeCompanion = function() {
            this.elem.innerHTML = ""
        }, i.prototype.sendPings = function(t) {
            (t = t.creativeView) && (t.forEach(function(t) {
                (new Image).src = t
            }), "function" == typeof this.debugTrackFn && this.debugTrackFn({
                type: "companion",
                data: {
                    trackers: t
                }
            }))
        }, i.prototype.placeCompanion = function(t) {
            if (this.removeCompanion(), "html" === t.type) {
                var e = document.createElement("div");
                e.innerHTML = t.source;
                var i = e.getElementsByTagName("script");
                return i.length && Pt._.map(i, function(t) {
                    new Pt.utils.scriptloader(t.src).load(), t.parentElement.removeChild(t)
                }), this.elem.appendChild(e), void this.sendPings(t.trackers)
            }
            if ("iframe" === t.type) {
                var r = document.createElement("iframe");
                return r.height = this.div.height, r.width = this.div.width, r.src = t.source, r.scrolling = "no", r.style.border = "none", r.marginWidth = 0, r.marginHeight = 0, this.sendPings(t.trackers), this.elem.innerHTML = "", void this.elem.appendChild(r)
            }
            if ("application/x-shockwave-flash" === t.type) {
                var n = document.createElement("object");
                return n.setAttribute("type", "application/x-shockwave-flash"), n.setAttribute("data", t.source), n.setAttribute("width", "100%"), n.setAttribute("height", "100%"), n.setAttribute("tabindex", 0), x(n, "allowfullscreen", "true"), x(n, "allowscriptaccess", "always"), x(n, "seamlesstabbing", "true"), x(n, "wmode", "opaque"), this.elem.appendChild(n), void this.sendPings(t.trackers)
            }
            var s = new Image;
            s.src = t.source, Pt.utils.exists(t.clickthrough) && (s.onclick = function() {
                window.open(t.clickthrough, "_blank").focus()
            }), this.elem.innerHTML = "", this.elem.appendChild(s), this.sendPings(t.trackers)
        }, i.prototype.fitsDiv = function(t) {
            return t.width === this.div.width && t.height === this.div.height
        }, i
    }();

    function x(t, e, i) {
        var r = document.createElement("param");
        r.setAttribute("name", e), r.setAttribute("value", i), t.appendChild(r)
    }
    var It = Date.now || function() {
        return (new Date).getTime()
    };

    function V(t, e, i) {
        var r = kt(e, 1002, 11002);
        r.id = i, t.push(r)
    }

    function M() {
        var t = new Error("No AdBreaks in VMAP");
        throw t.adErrorCode = 60005, t
    }
    var L = function() {
        function e(t) {
            g(this, e), this._parsedAds = [], this._error = null, this._version = null, t && this.parse(t)
        }
        return e.prototype.parsedAds = function() {
            return this._parsedAds
        }, e.prototype.error = function() {
            return this._error
        }, e.prototype.version = function() {
            return this._version
        }, e.prototype.parse = function(i, r) {
            var n = this,
                t = void 0,
                s = void 0;
            "VAST" === i.nodeName ? t = i : (t = B(i, "VAST")[0]) || (t = B(i, "VideoAdServingTemplate")[0]), t || this.throwError(101, "Invalid VAST response"), s = "VideoAdServingTemplate" === t.tagName ? 1 : parseFloat(O(t, "version") || 0), this._version = s;
            var e, a = B(t, "Ad"),
                o = Pt._.map(a, function(t) {
                    var e = n.parseAd(s, t);
                    return e.vastversion = s, e.response = i, e.request = r || null, e
                });
            this._parsedAds = o, this._parsedAds.length || (e = B(t, "Error"), Pt._.each(e, function(t) {
                var e = j(t).replace(d, 303),
                    i = new Image;
                i.src = e
            }))
        }, e.prototype.parseAd = function(t, e, i) {
            i = i || {};
            var r, n, s, a, o = B(e, "InLine")[0],
                d = B(e, "Wrapper")[0],
                l = o || d,
                u = l ? j(B(l, "AdTitle")[0]) : "",
                h = void 0;
            return i.sequence = O(e, "sequence"), i.adTitle = u, (!t || 4 < t || t < 2) && this.throwError(102, "Vast version not supported"), 4 === t && (i.conditionalAd = !!O(e, "conditionalAd")), l ? (2 <= t ? (D(l, "Impression", (h = function(t) {
                var e = B(B(t, "Creatives")[0], "Creative"),
                    k = {},
                    b = {
                        trackers: k
                    };
                b.adsystem = j(B(t, "AdSystem")[0]);
                var i = B(t, "Category");
                return b.categories = Pt._.map(i, function(t) {
                    return j(t)
                }), Pt._.each(e, function(t) {
                    var e = B(t, "Linear")[0],
                        i = B(t, "NonLinear")[0],
                        r = B(B(t, "TrackingEvents")[0], "Tracking"),
                        n = B(t, "UniversalAdId")[0],
                        s = O(n, "idRegistry") || "unknown",
                        a = O(n, "idValue") || "unknown";
                    b.creativeId = O(t, "id"), e || i ? (Pt._.each(r, function(t) {
                        H(k, t)
                    }), b.universalAdIdRegistry = s, b.universalAdIdValue = a) : (b.companionUniversalAdIdRegistry = s, b.companionUniversalAdIdValue = a);
                    var o, d, l, u, h, p, c, m = j(B(t, "AdParameters")[0]);
                    if (m && (b.adParams = m), e) {
                        var f = B(e, "VideoClicks")[0],
                            v = j(B(f, "ClickThrough")[0]),
                            y = B(f, "ClickTracking"),
                            g = O(e, "skipoffset"),
                            A = j(B(e, "Duration")[0]);
                        Pt._.each(y, function(t) {
                            q(k, "click", j(t))
                        }), A && (b.duration = Pt.utils.seconds(A)), v && (b.clickthrough = v), g && (b.skipoffset = g), F(e, b)
                    } else if (i) {
                        var P = j(B(i, "NonLinearClickThrough")[0]);
                        P && (b.clickthrough = P), h = b, p = [], (c = B(u = t, "StaticResource")[0]) && (p.push({
                            type: O(c, "creativeType"),
                            file: j(c),
                            adType: O(B(u, "NonLinear")[0], "apiFramework") || "static",
                            minDuration: O(B(u, "NonLinear")[0], "minSuggestedDuration") || "00:00:00"
                        }), h.media = p)
                    } else o = b, d = B(B(t, "CompanionAds")[0], "Companion"), l = o.companions ? o.companions : [], Pt._.each(d, function(t) {
                        var e = B(t, "StaticResource")[0],
                            i = B(t, "IFrameResource")[0],
                            r = B(t, "HTMLResource")[0],
                            n = {},
                            s = void 0,
                            a = void 0;
                        if (e) s = O(e, "creativeType"), a = j(e);
                        else if (i) s = "iframe", a = j(i);
                        else {
                            if (!r) return;
                            s = "html", a = j(r)
                        }
                        var o = B(B(t, "TrackingEvents")[0], "Tracking");
                        Pt._.each(o, function(t) {
                            var e = O(t, "event");
                            q(n, e, j(t))
                        });
                        var d = j(B(t, "CompanionClickThrough")[0]);
                        l.push({
                            width: parseInt(O(t, "width"), 10),
                            height: parseInt(O(t, "height"), 10),
                            type: s,
                            source: a,
                            trackers: n,
                            clickthrough: d
                        })
                    }), o.companions = l
                }), b
            }(l)).trackers), D(l, "Error", h.trackers)) : h = function(t) {
                var e = B(t, "Video")[0] || t,
                    i = B(t, "NonLinear")[0],
                    r = {},
                    n = {
                        trackers: r
                    };
                if (e) {
                    var s = B(B(t, "TrackingEvents")[0], "Tracking");
                    Pt._.each(s, function(t) {
                        H(r, t)
                    });
                    var a = B(B(t, "Impression")[0], "URL");
                    Pt._.each(a, function(t) {
                        q(r, "impression", j(t))
                    });
                    var o = B(B(t, "Error")[0], "URL");
                    Pt._.each(o, function(t) {
                        q(r, "error", j(t))
                    });
                    var d = B(e, "VideoClicks")[0],
                        l = j(B(d, "ClickThrough")[0]),
                        u = B(B(d, "ClickTracking")[0], "URL");
                    Pt._.each(u, function(t) {
                        q(r, "click", j(t))
                    }), l && (n.clickthrough = l), F(e, n);
                    var h = B(e, "AdParameters")[0];
                    if (h) {
                        var p = O(h, "apiFramework");
                        "vpaid" === p.toLowerCase() && (Pt._.each(n.media, function(t) {
                            t.adType = p
                        }), n.adParams = j(h))
                    }
                }
                if (i) {
                    var c = n.media || [],
                        m = B(i, "URL")[0];
                    c.push({
                        type: O(i, "creativeType"),
                        file: j(m),
                        adType: O(i, "apiFramework")
                    }), n.media = c
                }
                var f = B(t, "CompanionAds")[0];
                return f = B(f, "Companion"), n.companions = (n.companions || []).concat(Pt._.map(f, function(t) {
                    return {
                        width: parseInt(O(t, "width"), 10),
                        height: parseInt(O(t, "height"), 10),
                        type: O(t, "resourceType"),
                        resource: j(B(t, "URL")[0]),
                        trackers: [],
                        clickthrough: ""
                    }
                })), n
            }(l), s = h, a = {}, Pt._.each(s.media, function(t) {
                var e = t.type,
                    i = "application/x-mpegURL" === e || "vnd.apple.mpegURL" === e;
                "vpaid" === t.adType.toLowerCase() || i || (a[e] = a[e] || 0, a[e]++)
            }), s.mediaFileCompliance = !0, Pt._.each(a, function(t, e) {
                t < 3 && (s.mediaFileCompliance = !1, s.nonComplianceReasons = s.nonComplianceReasons || [], s.nonComplianceReasons.push(e + " has only " + t + " qualities"))
            }), d && (h.wrappedURI = j(B(d, "VASTAdTagURI")[0]) || j(B(d, "VASTAdTagURL")[0])), r = h, n = At({}, i), Pt.utils.foreach(r, function(t, e) {
                Pt.utils.exists(n[t]) ? Array.isArray(e) ? n[t] = n[t].concat(e) : "object" === Pt.utils.typeOf(e) ? n[t] = At(n[t], r[t]) : n[t] = e : n[t] = e
            }), h = n) : 2 === t ? this.throwError(900, "Invalid VAST response", 60001) : this.throwError(101, "Invalid VAST response", 10101), h
        }, e.prototype.throwError = function(t, e, i) {
            var r = this,
                n = kt(e, t, i = i || 1e4 + t);
            throw n.toString = function() {
                return r.code + " " + r.message
            }, this._error = n, this._error
        }, e
    }();

    function B(t, e, i) {
        var r = [];
        return t && (r = t.getElementsByTagName(e), i && r && 0 === r.length && (r = t.getElementsByTagName(i + ":" + e))), r
    }

    function O(t, e) {
        return t ? t.getAttribute(e) : null
    }

    function H(t, e) {
        var i = O(e, "event");
        "progress" === i && (i = i + "_" + O(e, "offset"));
        q(t, i, j(e))
    }

    function j(t) {
        if (t) {
            var e = t.textContent || t.text;
            if (e) return Pt.utils.trim(e)
        }
        return ""
    }

    function q(t, e, i) {
        t[e] || (t[e] = []), i && t[e].push(i)
    }

    function D(t, e, i) {
        var r = B(t, e);
        Pt._.each(r, function(t) {
            q(i, e.toLowerCase(), j(t))
        })
    }

    function F(t, e) {
        var i = B(B(t, "MediaFiles")[0], "MediaFile"),
            r = e.media ? e.media : [];
        e.media = r.concat(Pt._.map(i, function(t) {
            return {
                type: O(t, "type"),
                file: j(t),
                adType: O(t, "apiFramework") || "",
                width: parseInt(O(t, "width"), 10) || 0,
                height: parseInt(O(t, "height"), 10) || 0
            }
        }).filter(function(t) {
            return t.file
        }))
    }

    function U(t) {
        t.onload = t.onreadystatechange = t.onerror = null, "abort" in t && t.abort()
    }
    var Et = function() {
        function e(t) {
            g(this, e), this.preRoll = null, this.vmap = null, this.postRoll = null, this.midRolls = [], this.playedMidRolls = [], this.adRules = t, this.duration = 0, this._vmapPromise = null, this._vmapXHR = null
        }
        return e.prototype.load = function(s, a) {
            var o = this;
            return this._vmapPromise || (null !== this._vmapXHR && (U(this._vmapXHR), this._vmapXHR = null), this._vmapPromise = new Promise(function(t, n) {
                o._vmapXHR = s.utils.ajax({
                    url: a,
                    withCredentials: !0,
                    retryWithoutCredentials: !0,
                    requireValidXML: !0,
                    timeout: o.requestTimeout
                }, t, function(t, e, i, r) {
                    return n(r)
                })
            }).then(function(t) {
                return o._vmapXHR = null,
                    function(t, e) {
                        var i = [],
                            r = B(t, "VMAP", E);
                        if (!r.length) throw new Error("No VMAP tag in response");
                        O(r[0], "version") || V(i, "VMAP Schema Error: version missing from VMAP tag", Z);
                        var n = B(t, "AdBreak", E);
                        n.length || M();
                        for (var s = t.lookupNamespaceURI(E), a = 0; a < n.length; a++) {
                            var o = {},
                                d = {},
                                l = n[a],
                                u = O(l, "timeOffset"),
                                h = O(l, "breakId"),
                                p = O(l, "breakType"),
                                c = O(B(l, "AdSource", E)[0], "id"),
                                m = B(l, "AdTagURI", E)[0],
                                f = B(l, "VASTData", E)[0] || B(l, "VASTAdData", E)[0],
                                v = O(m, "templateType"),
                                y = j(m),
                                g = (_ = l, w = "Tracking", T = E, I = void 0, I = [], (b = s) || _ ? I = _.getElementsByTagNameNS ? _.getElementsByTagNameNS(b, w) : _.getElementsByTagName(T + ":" + w) : I);
                            if (p || V(i, "VMAP Schema Error: missing breakType on AdBreak", h), f || v || V(i, "VMAP Schema Error: missing templateType on AdBreak", h), u || V(i, "VMAP Schema Error: missing timeOffset on AdBreak", h), o._type = p, o._vmap = {
                                    id: c,
                                    breakid: h,
                                    timeoffset: u
                                }, f) o._adXML = B(f, "VAST")[0];
                            else {
                                if ("vast2" !== v && "vast3" !== v && "vast4" !== v) continue;
                                o._adQueue = [y], o._waterfallIndex = 0
                            }
                            var A = [];
                            if (g)
                                for (var P = 0; P < g.length; P++) {
                                    H(d, g[P]);
                                    var k = O(g[P], "event");
                                    A.push(k)
                                }
                            switch ((A.indexOf("breakStart") < 0 || A.indexOf("breakEnd") < 0 || A.indexOf("error") < 0) && V(i, "Tracking events are missing breakStart, breakEnd, or error for AdBreak", h), o._trackers = d, o._type = p, u) {
                                case "start":
                                    o._offSet = "pre", e.setPreRoll(o);
                                    break;
                                case "100%":
                                case "end":
                                    o._offSet = "post", e.setPostRoll(o);
                                    break;
                                default:
                                    if (/^#/.test(u)) break;
                                    /^\d\d?(?:\.\d+)?%$/.test(u) ? o._offSet = u : o._offSet = Pt.utils.seconds(u), e.addMidRoll(o)
                            }
                        }
                        var b, _, w, T, I;
                        return e.preRoll || e.midRolls.length || e.postRoll || M(), e.sort(null, !0), i
                    }(t.responseXML, o).map(function(t) {
                        return t.vmap = a, t
                    })
            }).catch(function(t) {
                o._vmapXHR = null;
                var e = void 0;
                if (t.message) e = kt("VMAP Schema Error: " + t.message, 1002, t.adErrorCode || 11002);
                else {
                    var i = {
                            1: {
                                code: 1007,
                                message: "Timeout"
                            },
                            602: {
                                code: 1e3,
                                message: "Invalid XML"
                            },
                            default: {
                                code: 1008,
                                message: s.getConfig().localization.errors[t.key]
                            }
                        },
                        r = i[t.code] || i.default;
                    s.utils.log(r.message), e = kt("Error Loading VMAP Schedule", r.code, r.code + 1e4)
                }
                throw e.id = Z, e.vmap = a, e
            })), this._vmapPromise
        }, e.prototype.canWaterfall = function(t) {
            return t._adQueue && t._waterfallIndex + 1 < t._adQueue.length
        }, e.prototype.setPreRoll = function(t) {
            this.preRoll = t
        }, e.prototype.getPreRoll = function(t) {
            return t && "none" === this.adRules.startOnSeek ? null : N(this.preRoll, this.requestTimeout, this.creativeTimeout)
        }, e.prototype.getPostRoll = function(t) {
            var e = N(this.postRoll, this.requestTimeout, this.creativeTimeout);
            return this.adRules.timeBetweenAdsAllowsAdPlayback(e, t) ? e : null
        }, e.prototype.getMidRollAtIndex = function(t) {
            return N(this.midRolls[t], this.requestTimeout, this.creativeTimeout)
        }, e.prototype.getLastMidRollIndexBetweenTime = function(t, e, i) {
            if (e < t) return null;
            this.sort(i);
            for (var r = this.midRolls.length; r--;) {
                var n = this.midRolls[r],
                    s = X(this.midRolls[r]._offSet, i);
                if (s <= t) return null;
                if (s <= e) {
                    var a = N(n, this.requestTimeout, this.creativeTimeout);
                    if (!this.adRules.timeBetweenAdsAllowsAdPlayback(a)) return null;
                    if (!this.adRules.timeBetweenAds) {
                        if (0 <= this.playedMidRolls.indexOf(r)) return null;
                        this.playedMidRolls.push(r)
                    }
                    return r
                }
            }
            return null
        }, e.prototype.peek = function(t, e, i) {
            if (this.midRolls.length > this.playedMidRolls.length) {
                this.sort(i);
                for (var r = 0; this.midRolls[r];) {
                    var n = X(this.midRolls[r]._offSet, i);
                    if (t <= n && -1 === this.playedMidRolls.indexOf(r)) {
                        var s = It() + 1e3 * (n - t);
                        return n <= e && this.adRules.timeBetweenAdsAllowsAdPlayback(null, s) ? r : null
                    }
                    r += 1
                }
            }
            var a = It() + 1e3 * (i - t);
            return this.postRoll && i <= e && this.adRules.timeBetweenAdsAllowsAdPlayback(null, a) ? -1 : null
        }, e.prototype.getNextMidrollIndex = function(t, e, i) {
            if (this.adRules.timeBetweenAds || this.adRules.startOnSeek) return this.getLastMidRollIndexBetweenTime(t, e, i);
            if (this.midRolls.length > this.playedMidRolls.length) {
                var r = this.getClosestIndex(e, i);
                if (0 <= r && this.playedMidRolls.indexOf(r) < 0) return this.playedMidRolls.push(r), r
            }
            return null
        }, e.prototype.getMidRolls = function() {
            var e = this;
            return this.midRolls.map(function(t) {
                return N(t, e.requestTimeout, e.creativeTimeout)
            })
        }, e.prototype.reset = function() {
            null !== this._vmapXHR && (U(this._vmapXHR), this._vmapXHR = null), this.playedMidRolls = [], this.duration = 0
        }, e.prototype.addMidRoll = function(t) {
            this.midRolls.push(t), this.duration = 0
        }, e.prototype.setPostRoll = function(t) {
            this.postRoll = t
        }, e.prototype.sort = function(i, t) {
            (!i || i < 1) && (i = 1), (this.duration !== i || t) && (this.duration = i, this.midRolls.sort(function(t, e) {
                return X(t._offSet, i) - X(e._offSet, i)
            }), function(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var r = t[i];
                    e ? r._vmap.item = i + 1 : r._adbreak = {
                        item: i + 1,
                        tags: r._adQueue,
                        breakid: r._breakId
                    }
                }
            }(this.getAllAds(), t))
        }, e.prototype.getAllAds = function() {
            var t = this.preRoll ? [this.preRoll] : [],
                e = this.postRoll ? [this.postRoll] : [];
            return t.concat(this.midRolls, e)
        }, e.prototype.getAdScheduleEventObject = function() {
            var t = this.getAllAds(),
                r = [],
                e = {
                    tag: this.getVMAP(),
                    client: "vast",
                    adbreaks: []
                };
            return Pt.utils.foreach(t, function(t, e) {
                var i = {
                    type: e._type,
                    offset: e._offSet
                };
                e._vmap ? i.vmap = e._vmap : i.adbreak = At({}, e._adbreak), r.push(i)
            }), e.adbreaks = r, e
        }, e.prototype.setVMAP = function(t) {
            this.vmap = t
        }, e.prototype.isVMAP = function() {
            return !!this.vmap
        }, e.prototype.getVMAP = function() {
            return this.vmap
        }, e.prototype.getClosestIndex = function(t, e) {
            this.sort(e);
            for (var i = this.midRolls.length; i--;)
                if (t >= X(this.midRolls[i]._offSet, e)) return i;
            return -1
        }, e
    }();

    function N(t, e, i) {
        var r = void 0;
        if (Pt.utils.foreach(t, function(t, e) {
                (r = r || {})[t] = "_adQueue" === t ? e.slice() : e
            }), r) return r.requestTimeout = e, r.creativeTimeout = i, r._errors = [], r._waterfallIndex = 0, r
    }

    function X(t, e) {
        return "%" === t.toString().slice(-1) ? e * parseFloat(t.slice(0, -1)) / 100 : parseFloat(t)
    }
    var Ct = function() {
        function t() {
            g(this, t)
        }
        return t.prototype.getSchedule = function(t, e) {
            var i = new Et(e);
            if (i.requestTimeout = W(t.requestTimeout, tt), i.creativeTimeout = W(t.creativeTimeout, et), t.tag) i.setPreRoll({
                _offSet: "pre",
                _adQueue: Q(t.tag),
                _waterfallIndex: 0
            });
            else if ("string" == typeof t.vastxml) i.setPreRoll({
                _offSet: "pre",
                _adXML: t.vastxml
            });
            else {
                if ("string" == typeof t.schedule) return i.setVMAP(t.schedule), i;
                if ("string" == typeof t.adschedule) return i.setVMAP(t.adschedule), i;
                ! function(d, l) {
                    var u = l.schedule || l.adschedule;
                    if (!u) return;
                    Object.keys(u).forEach(function(t) {
                        var e = u[t];
                        e.ad && (At(e, e.ad), delete e.ad);
                        var i = function(t) {
                                if ("start" === t || "0%" === t || !t && 0 !== t) return "pre";
                                if ("end" === t || "100%" === t) return "post";
                                if ("pre" === t || "post" === t || -1 < Pt._.indexOf(t, "%")) return t;
                                var e = Pt.utils.seconds(t);
                                if ("number" == typeof e) return e;
                                return !1
                            }(e.offset),
                            r = W(e.requestTimeout, tt),
                            n = W(e.creativeTimeout, et),
                            s = {
                                _offSet: i,
                                _type: e.type,
                                _breakId: t,
                                requestTimeout: r,
                                creativeTimeout: n
                            };
                        !1 === i && Pt.utils.log("Error: ad offset format not supported", i);
                        var a = e.skipoffset || l.skipoffset;
                        if (void 0 !== a && (s.skipoffset = a), e.tag) {
                            var o = function(t, e) {
                                if (!e) return t;
                                var i = 0 <= t.indexOf("?") ? "&" : "?",
                                    r = "cust_params=",
                                    n = t.indexOf(r),
                                    s = r.length,
                                    a = "",
                                    o = "";
                                if (Pt.utils.foreach(e, function(t, e) {
                                        a = "" + a + o + t + "=" + e, o = "&"
                                    }), a = encodeURIComponent(a), 0 <= n) {
                                    var d = t.substr(0, n + s),
                                        l = t.substr(n + s);
                                    return "" + d + a + "%26" + l
                                }
                                return "" + t + i + "cust_params=" + a
                            }(e.tag, e.custParams);
                            s._adQueue = Q(o), s._waterfallIndex = 0
                        } else {
                            if ("string" != typeof e.vastxml) return void Pt.utils.log("Error: no ad tag provided");
                            s._adXML = e.vastxml
                        }
                        switch (i) {
                            case "pre":
                                d.setPreRoll(s);
                                break;
                            case "post":
                                d.setPostRoll(s);
                                break;
                            default:
                                d.addMidRoll(s)
                        }
                    })
                }(i, t)
            }
            return i.sort(), i
        }, t.prototype.getOptParams = function(t) {
            var e = {
                    cuetext: t.cuetext || "Advertisement",
                    dynamicMessage: t.admessage || "This ad will end in xx",
                    podMessage: t.podmessage || "Ad __AD_POD_CURRENT__ of __AD_POD_LENGTH__. ",
                    skipoffset: t.skipoffset || -1,
                    skipMessage: t.skipmessage || "Skip ad in xx",
                    skipText: t.skiptext || "Skip",
                    vpaidcontrols: t.vpaidcontrols || !1,
                    conditionaladoptout: t.conditionaladoptout || !1,
                    requestFilter: t.requestFilter,
                    trackingFilter: t.trackingFilter
                },
                i = t.companiondiv;
            return i && (e.companion = {
                id: i.id,
                height: i.height,
                width: i.width
            }), e
        }, t.prototype.getAdRules = function(t) {
            var e = t.rules || {},
                i = parseInt(e.frequency, 10);
            return {
                startOn: e.startOn || 1,
                frequency: isNaN(i) ? 1 : i,
                timeBetweenAds: e.timeBetweenAds || 0,
                startOnSeek: e.startOnSeek || null
            }
        }, t
    }();

    function Q(t) {
        return "string" == typeof t ? [t] : Array.isArray(t) ? t.slice(0) : t
    }

    function W(t, e) {
        return 0 === t ? 1 / 0 : t || e
    }
    var z = /^((https?:)?\/\/)?(secure)?pubads\.g\.doubleclick\.net\/gampad\/ads\?[\S]*$/;

    function Rt(t, e, i) {
        if (!t) return t;
        var r, n, s, a, o, d, l = (n = (r = e).getConfig(), {
                playerHeight: r.getHeight() || n.height || "",
                playerWidth: r.getWidth() || n.width || "",
                itemDuration: (s = r.getDuration(), a = 3, o = Math.pow(10, a), Math.round(s * o) / o || ""),
                item: n.playlist[r.getPlaylistIndex()] || {}
            }),
            u = l.item,
            h = window.location.href;
        t = $(t = $(t = $(t = $(t = $(t = $(t = $(t = $(t, "__random-number__", Math.random() * Math.pow(10, 18)), "__timestamp__", (new Date).getTime()), "__page-url__", encodeURIComponent(h)), "__referrer__", encodeURIComponent(document.referrer)), "__player-height__", l.playerHeight), "__player-width__", l.playerWidth), "__item-duration__", l.itemDuration), "__domain__", encodeURIComponent((d = (d = window.location.href).match(new RegExp(/^[^/]*:\/\/\/?([^\/]*)/))) && 1 < d.length ? d[1] : ""));
        for (var p = (t = i.companion ? $(t, "__companion-div__", i.companion.id) : $(t, "__companion-div__", "")).match(new RegExp(/__item-[a-z 0-9 A-Z]*__/g)), c = 0; p && c < p.length; c++) {
            var m = p[c],
                f = m.substring(7, m.length - 2);
            if (u.hasOwnProperty(f) && "string" == typeof u[f]) {
                var v = u[f];
                1e3 < v.length && (v = v.substring(0, 1e3)), t = $(t, m, encodeURIComponent(v))
            } else t = $(t, m, "")
        }
        return t = function(t, e, i) {
            z.test(t) && (t = t + "&vpa=" + e + "&vpmute=" + i);
            return t
        }(t, e.getConfig().autostart ? 1 : 0, e.getMute() ? 1 : 0)
    }

    function $(t, e, i) {
        return t.replace(e, i)
    }
    var G, J = function() {
        function d(t, e, i, r) {
            g(this, d), this._scheduledAd = t, this.player = e, this.options = i || {}, this.debugTrackFn = r, At(this, e.Events), this._history = [], this.loadedAds = [], this.parser = null, this.promise = null, this.xmlhttp = null
        }
        return d.prototype.load = function(e) {
            var i = this;
            if (null === this.promise) {
                this._history.push(e);
                var r = this.options.requestFilter;
                this.promise = new Promise(function(t, n) {
                    i.xmlhttp = Pt.utils.ajax({
                        url: e,
                        withCredentials: !0,
                        retryWithoutCredentials: !0,
                        requireValidXML: !0,
                        timeout: i._scheduledAd.requestTimeout,
                        requestFilter: r
                    }, t, function(t, e, i, r) {
                        return n(r)
                    })
                }).catch(function(t) {
                    if (null !== i.player) throw i.ajaxError(t, e)
                }).then(function(t) {
                    if (null !== i.player) return i.parseXMLString(t.responseXML || t.responseText, e)
                })
            }
            return this.promise
        }, d.prototype.destroy = function() {
            var t;
            (t = this.xmlhttp) && (t.onload = null, t.onreadystatechange = null, t.onerror = null, t.abort && t.abort()), this.player = null, this.xmlhttp = null
        }, d.prototype.scheduledAd = function() {
            return this._scheduledAd
        }, d.prototype.allAds = function() {
            return this.loadedAds
        }, d.prototype.adPod = function() {
            var e = [];
            return this.loadedAds.forEach(function(t) {
                t.sequence && e.push(t)
            }), e.sort(function(t, e) {
                return t.sequence - e.sequence
            }), e
        }, d.prototype.adBuffet = function() {
            var e = [];
            return this.loadedAds.forEach(function(t) {
                t.sequence || e.push(t)
            }), e
        }, d.prototype.history = function() {
            return this._history
        }, d.prototype.parseXMLString = function(i, s) {
            var o = this;
            return null === this.parser && (this.parser = new L), new Promise(function(t) {
                var e = function(t) {
                    if (e = t, "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName) return t;
                    var e;
                    return Pt.utils.parseXML(t)
                }(i);
                return o.parser.parse(e, o.xmlhttp), t(o.parser.parsedAds())
            }).catch(function(t) {
                if (null !== o.player) {
                    var e = t.code || 900,
                        i = t.adErrorCode || 1e4 + e;
                    throw o.sendErrorEvent(t.message, e, i, s)
                }
            }).then(function(t) {
                if (null === o.player) return null;
                if (0 === t.length) {
                    var e = 2 === o.parser.version(),
                        i = e ? 900 : 101,
                        r = e ? 60001 : 10101;
                    throw o.sendErrorEvent("Ad Tag Empty", i, r, s)
                }
                o.loadedAds = t, o.options.wrapper = o.options.wrapper || [], o.options.adsystem && o.options.wrapper.push(o.options.adsystem), o.options.adsystem = o.loadedAds[0].adsystem;
                var n = [];
                return t.forEach(function(a) {
                    if (a.wrappedURI) {
                        o.options.wrappedTags = o.options.wrappedTags || [o._scheduledAd._currentTag], o.options.wrappedTags.push(a.wrappedURI);
                        var t = new d(o._scheduledAd, o.player, o.options, o.debugTrackFn).load(a.wrappedURI).then(function(t) {
                            var n, e, s, i = (n = a, e = t.allAds(), s = [], Pt.utils.foreach(e, function(t, e) {
                                    var i, r;
                                    n.companions && (e.companions = (e.companions ? e.companions : []).concat(n.companions)), n.trackers && (e.trackers = (i = e.trackers, r = n.trackers, i = i || {}, Pt.utils.foreach(r, function(t, e) {
                                        i[t] ? i[t] = i[t].concat(e) : i[t] = e
                                    }), i)), n.sequence && (e.sequence = n.sequence), s.push(e)
                                }), s),
                                r = o.loadedAds.indexOf(a);
                            Array.prototype.splice.apply(o.loadedAds, [r, 1].concat(i))
                        }).catch(function(t) {
                            var e = o.sendAdpodErrorEvent(t.message, t.code, t.adErrorCode, t.url),
                                i = o.loadedAds.indexOf(a);
                            if (o.loadedAds.splice(i, 1), t.vloader.destroy(), e.type !== dt) throw e;
                            o.trigger(dt, e)
                        });
                        n.push(t)
                    } else 1 < o.options.wrapper.length && (a.wrapper = o.options.wrapper, a.wrappedTags = o.options.wrappedTags)
                }), Promise.all(n)
            }).then(function() {
                if (null === o.player) return null;
                var e = o.loadedAds.slice(0),
                    t = e.length;
                e.forEach(function(t) {
                    t.media && t.media.length || e.length--
                });
                var i = 0 === t,
                    r = e.length !== t;
                if (i || r) throw o.sendErrorEvent("Ad Tag Empty", 101, 10101, o._history[o._history.length - 1]);
                return o
            })
        }, d.prototype.ajaxError = function(t, e) {
            if (this.player.getAdBlock()) return this.sendErrorEvent("Ad playback blocked by an ad blocker", 900, 60003, e);
            var i = t.code;
            if (601 === i || 602 === i) return this.sendErrorEvent("Invalid XML", 100, 10100, e);
            if (1 === i || 404 === i) return this.sendErrorEvent("VAST could not be loaded", 301, 10301, e);
            var r = this.options.wrappedTags && this.options.wrappedTags.length,
                n = r ? 303 : 900,
                s = r ? 10303 : 60006;
            return this.sendErrorEvent(t.message || "Error loading file", n, s, e)
        }, d.prototype.firstUrl = function() {
            return this._history && this._history.length ? this._history[0] : ""
        }, d.prototype.sendAdpodErrorEvent = function(t, e, i, r) {
            if (1 === this.loadedAds.length) return this.sendErrorEvent(t, e, i, r);
            var n = kt(t, e, i);
            return n.type = dt, n.vloader = this, n.url = this.firstUrl() || r, this.wrappedTags = r, n
        }, d.prototype.sendErrorEvent = function(t, e, i, r) {
            var n = kt(t, e, i);
            return n.vloader = this, n.url = this.firstUrl() || r, this.options.wrappedTags && (n.wrapperAdSystem = this.options.wrapper || "", n.wrappedTags = this.options.wrappedTags), n.adsystem = this.options.adsystem || "", this.trackError(n), n
        }, d.prototype.trackError = function(t) {
            var e = t.vloader.allAds();
            if (e && e.length) {
                var i = e[0];
                if (i) {
                    var r = i.trackers;
                    if (r && r.error) new _(r, this.debugTrackFn, this.player, this.options.trackingFilter).error(t.code)
                }
            }
        }, d
    }();
    var K = 2e3,
        St = 3500,
        xt = "usd",
        Vt = 1,
        Mt = "//c.amazon-adsystem.com/aax2/apstag.js",
        Lt = "video",
        Bt = "2962993",
        Ot = "//js-sec.indexww.com/htv/htv-jwplayer.min.js",
        Ht = "//js.spotx.tv/directsdk/v1/",
        jt = "//search.spotxchange.com/ad/vast.html?key=",
        qt = "dfp",
        Dt = "jwp",
        Ft = "jwpspotx",
        Ut = "jwpdfp",
        Nt = Dt,
        Xt = "APS",
        Qt = "Index",
        Wt = "SpotX",
        zt = ((G = {})[[qt]] = [Xt, "FAN", Qt, Wt], G[[Dt]] = ["FAN", Wt], G[[Ut]] = [Wt], G[[Ft]] = [Wt], G),
        $t = "Error loading script",
        Gt = "bid",
        Jt = "error",
        Kt = "invalid",
        Yt = "noBid",
        Zt = 0,
        te = 1,
        ee = 3,
        ie = 5,
        re = [{
            message: "SpotX :: Unable to find ad",
            result: Yt,
            code: Zt
        }, {
            message: $t,
            result: Jt,
            code: 6
        }, {
            message: "Invalid options: 'slot' is required",
            code: 300
        }, {
            message: "Invalid options: 'slot' must be part of DOM",
            code: 301
        }, {
            message: "Invalid options: 'channel_id' is required.",
            code: 302
        }, {
            message: "Invalid options: 'content_width' and 'content_height' are required when no 'video_slot' is provided.",
            code: 303
        }, {
            message: "Invalid options: 'content_width' provided but 'content_height' is not.",
            code: 304
        }, {
            message: "Invalid options: 'content_height' provided but 'content_width' is not.",
            code: 305
        }, {
            message: "Invalid options: 'custom' must be an object.",
            code: 306
        }, {
            message: "Invalid options: 'token' must be an object.",
            code: 307
        }, {
            message: "Invalid options: 'ados' must be an object.",
            code: 308
        }, {
            message: "Invalid options: 'contentPageUrl' must be a string.",
            code: 309
        }, {
            message: "Invalid options: 'demand_source_timeout' must be a number.",
            code: 310
        }, {
            message: "Invalid options: 'total_bid_timeout' must be a number.",
            code: 311
        }],
        ne = Date.now || function() {
            return (new Date).getTime()
        };

    function se(n, s) {
        return new Promise(function(e, t) {
            setTimeout(t, s);
            var i = document.createElement("script");
            i.onload = i.onreadystatechange = function(t) {
                this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e(t), i.onload = i.onreadystatechange = null, r && i.parentNode && r.removeChild(i))
            }, i.onerror = t, i.type = "text/javascript", i.charset = "utf-8", i.async = !0, i.timeout = s, i.src = n;
            var r = document.getElementsByTagName("head")[0] || document.documentElement;
            r.insertBefore(i, r.firstChild)
        }).catch(function() {
            return Promise.reject({
                message: $t
            })
        })
    }
    var ae = encodeURIComponent(window.location.href),
        oe = {
            requestBids: function(t, p, i) {
                var c = t.id,
                    r = (e = c, n = p.playerWidth, s = p.playerHeight, ["https://an.facebook.com/v2/placementbid.json?&placementids[]=" + e, "&playerwidth=" + n, "&playerheight=" + s, "&adformats[]=" + Lt, "&sdk=" + Bt, "&pageurl=" + ae].join(""));
                var e, n, s;
                if (! function(t, e, i, r) {
                        if (!r) return !1;
                        return t === qt || e && i === xt
                    }(p.mediationLayerAdServer, p.floorPriceCents, p.floorPriceCurrency || xt, r)) return Promise.resolve({
                    result: Kt,
                    code: ee
                });
                return new Promise(function(t) {
                    var e = new XMLHttpRequest;
                    e.onreadystatechange = function() {
                        4 === this.readyState && (t(this), e = null)
                    }, e.open("GET", r), e.withCredentials = !0, e.send(null), i.then(function() {
                        e && (e.abort(), e = null)
                    })
                }).then(function(t) {
                    if (200 !== t.status) return {
                        result: Jt,
                        code: ie,
                        message: "Invalid response (status " + t.status + ")"
                    };
                    var e = JSON.parse(t.responseText),
                        i = e.errors;
                    if (i && i.length) return {
                        result: Jt,
                        code: ie,
                        message: i[0]
                    };
                    var r = e.bids;
                    if (!r || !r[c] || !r[c][0]) return {
                        result: Yt,
                        code: Zt
                    };
                    var n = r[c][0],
                        s = n.bid_price_cents,
                        a = n.bid_id;
                    if (p.mediationLayerAdServer === qt) return {
                        result: Gt,
                        code: te,
                        tag: p.tag,
                        custParams: {
                            jwFANBidPrice: Math.round(s / 100),
                            jwFANBidID: a
                        }
                    };
                    var o, d, l, u, h = {
                        result: Gt,
                        code: te,
                        priceInCents: s,
                        priceCurrency: n.bid_price_currency
                    };
                    return s >= p.floorPriceCents && (h.tag = (o = c, d = a, l = p.playerWidth, u = p.playerHeight, ["https://an.facebook.com/v1/instream/vast.xml?placementid=" + o, "&playerwidth=" + l, "&playerheight=" + u, "&sdk=" + Bt, "&bidid=" + d, "&pageurl=" + ae].join(""))), h
                }).catch(function(t) {
                    return {
                        result: Jt,
                        code: ie,
                        message: "FAN header bidding failed: " + t
                    }
                })
            },
            getCustomResponse: function() {
                return {}
            }
        };
    var de = null;

    function le() {
        return null === de && (de = Promise.resolve(window.apstag).then(function(t) {
            return t && t.init && t.fetchBids ? t : se(["file" === document.location.protocol ? "https:" : "", Mt].join(""), St).then(function() {
                return window.apstag
            })
        }).catch(function(t) {
            throw de = null, t
        })), de
    }
    var ue = null,
        he = null;

    function pe(t) {
        if (null === he) {
            var e = ne(),
                i = ue || window.SpotX;
            if (i && i.DirectAdOS) return he = Promise.resolve({
                SpotX: i,
                loadingTime: 0
            });
            var r = ["file" === document.location.protocol ? "https:" : "", Ht, t, ".js"].join("");
            (he = "function" == typeof require ? (n = r, s = St, new Promise(function(t, e) {
                setTimeout(e, s), require([n], t, e)
            }).catch(function() {
                return Promise.reject({
                    message: $t
                })
            })).then(function(t) {
                return {
                    SpotX: ue = t,
                    loadingTime: ne() - e
                }
            }).catch(function() {
                return ce(r, e)
            }) : ce(r, e)).catch(function(t) {
                throw he = null, t
            })
        }
        var n, s;
        return he
    }

    function ce(t, e) {
        return se(t, St).then(function() {
            return {
                SpotX: window.SpotX,
                loadingTime: ne() - e
            }
        })
    }
    var me = void 0,
        fe = {
            requestBids: function(t, l) {
                if (!t.id) return Promise.resolve({
                    result: Kt,
                    code: 302
                });
                var s = At({
                    channel_id: t.id,
                    slot: l.playerContainer,
                    content_width: l.playerWidth,
                    content_height: l.playerHeight,
                    player_vendor: "SpotXJW",
                    player_vendor_id: l.playerId,
                    ad_volume: l.adVolume,
                    ad_mute: l.mute ? 1 : 0,
                    autoplay: l.autoplay,
                    blocked_autoplay_override_mode: l.autoplayAdsMuted,
                    start_delay: function(t) {
                        if ("start" === t || "0%" === t || !t || "pre" === t || "00:00:00" === t) return 0;
                        if ("end" === t || "100%" === t || "post" === t) return -2;
                        if ("string" == typeof t && 0 <= t.indexOf("%")) return -1;
                        var e = parseInt(t);
                        return 0 < e ? e : -1
                    }(l.offset),
                    placement: 1,
                    hide_skin: !0
                }, t.optionalParams);
                t.passFloorPrice && l.floorPriceCents && (s.price_floor = l.floorPriceCents / 100);
                return pe(t.id).then(function(t) {
                    var e = t.SpotX,
                        i = t.loadingTime;
                    me = i;
                    var r = new e.DirectAdOS(s),
                        n = ne();
                    return r.getAdServerKVPs().then(function(t) {
                        return {
                            response: t,
                            bidNetworkStartTime: n
                        }
                    })
                }).then(function(t) {
                    var e = t.response,
                        i = t.bidNetworkStartTime,
                        r = ne() - i,
                        n = e.spotx_ad_key,
                        s = {
                            spotx_bid: e.spotx_bid,
                            spotx_ad_key: n
                        },
                        a = 100 * parseFloat(e.spotx_bid),
                        o = {
                            result: Gt,
                            code: te,
                            priceInCents: a,
                            custParams: s,
                            scriptLoadingTime: me,
                            bidNetworkResponseTime: r
                        };
                    if (l.mediationLayerAdServer === qt) return o;
                    var d = ["file:" === document.location.protocol ? "https:" : "", jt, n].join("");
                    return At(o, {
                        tag: d,
                        tagKey: n
                    })
                }).catch(function(e) {
                    var t = re.find(function(t) {
                        return t.message === e.message
                    });
                    return t ? {
                        result: t.result || Kt,
                        code: t.code,
                        scriptLoadingTime: me
                    } : {
                        result: Jt,
                        message: "SpotX header bidding failed: " + e,
                        code: ie,
                        scriptLoadingTime: me
                    }
                })
            },
            getCustomResponse: function() {
                return {
                    scriptLoadingTime: me
                }
            }
        };
    var ve = null;

    function ye(e) {
        return null === ve && (ve = Promise.resolve(window.indexapi).then(function(t) {
            return t || se(["file" === document.location.protocol ? "https:" : "", e || Ot].join(""), St).then(function() {
                return window.indexapi
            })
        }).catch(function(t) {
            throw ve = null, t
        })), ve
    }
    var ge, Ae = {
        requestBids: function(t, r) {
            if (!t.id && !t.script) return Promise.resolve({
                result: Kt,
                code: ee
            });
            var e = At({
                videoCommonArgs: {
                    protocols: [2, 3, 5, 6],
                    mimes: ["video/mp4", "video/webm", "application/javascript"],
                    apiList: [1, 2]
                },
                siteID: t.id
            }, t);
            return ye().then(function(t) {
                return new Promise(function(i) {
                    t.deferQueue = t.deferQueue || [], t.deferQueue.push(function() {
                        t.solicitIndexVideoAds(r.tag, function(t, e) {
                            i({
                                updatedTag: t,
                                indexTargeting: e
                            })
                        }, e)
                    })
                })
            }).then(function(t) {
                var e = t.indexTargeting;
                return void 0 !== e ? {
                    result: Gt,
                    code: te,
                    tag: r.tag,
                    custParams: e
                } : {
                    result: Yt,
                    code: Zt
                }
            }).catch(function(t) {
                return {
                    result: Jt,
                    code: ie,
                    message: "Index Exchange header bidding failed: " + t
                }
            })
        },
        getCustomResponse: function() {
            return {}
        }
    };
    var Pe = ((ge = {})[[Xt]] = {
        requestBids: function(i, r) {
            if (!i.id || !i.slotID) return Promise.resolve({
                result: Kt,
                code: ee
            });
            return le().then(function(e) {
                return e.init({
                    id: i.pubId,
                    adServer: i.adServer
                }), new Promise(function(t) {
                    e.fetchBids({
                        slots: [{
                            slotID: i.slotID
                        }],
                        timeout: r.bidTimeout
                    }, t)
                })
            }).then(function(t) {
                return t && t[0] && t[0].slotID === i.slotID ? {
                    result: Gt,
                    code: te,
                    tag: r.tag,
                    custParams: {
                        amznbid: t[0].amznbid,
                        amzniid: t[0].amzniid
                    }
                } : {
                    result: Yt,
                    code: Zt
                }
            }).catch(function(t) {
                return {
                    result: Jt,
                    code: ie,
                    message: "Amazon header bidding failed: " + t
                }
            })
        },
        getCustomResponse: function() {
            return {}
        }
    }, ge[["FAN"]] = oe, ge[[Qt]] = Ae, ge[[Wt]] = fe, ge);
    var ke = function() {
            function h() {
                var t, e, i, r, n = this,
                    s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    a = s.settings,
                    o = void 0 === a ? {} : a,
                    d = s.bidders,
                    l = void 0 === d ? [] : d,
                    u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                (g(this, h), this.settings = (t = o, i = At({
                    bidTimeout: K,
                    offset: "",
                    playerContainer: (e = u).container,
                    playerHeight: e.height || 0,
                    playerWidth: e.width || 0,
                    tag: ""
                }, e, t), zt[i.mediationLayerAdServer] || (i.mediationLayerAdServer = Nt), i.mediationLayerAdServer === Ft && (i.floorPriceCents = Vt), i), this.bidders = l.reduce(function(t, e) {
                    return e.name && (t[e.name] = At(e, e.custom_params)), t
                }, {}), "pre" !== this.settings.offset && 0 !== parseInt(this.settings.offset)) && (this.bidders = this.bidders[Wt] ? ((r = {})[[Wt]] = this.bidders[Wt], r) : {});
                this.bidders[Xt] && this.bidders[Xt].id && this.bidders[Xt].slotID && le(), this.bidders[Qt] && (this.bidders[Qt].script || this.bidders[Qt].id) && ye(this.bidders[Qt].script), this.bidders[Wt] && this.bidders[Wt].id && pe(this.bidders[Wt].id), this._bidRequest = null, this._currentTimeout = null, this._onCancelTrigger = null, this.onCancel = new Promise(function(t) {
                    n._onCancelTrigger = t
                })
            }
            return h.prototype.start = function() {
                var t, n, o, e, i;
                return this._bidRequest || (this._bidRequest = (t = {
                    config: this.bidders,
                    settings: this.settings,
                    onCancel: this.onCancel
                }, n = t.config, o = t.settings, e = t.onCancel, i = zt[o.mediationLayerAdServer].filter(function(t) {
                    return n[t]
                }).map(function(i) {
                    var r = ne();
                    return Promise.race([Pe[i].requestBids(n[i], o, e), e]).then(function(t) {
                        var e = Pe[i].getCustomResponse();
                        return At({}, n[i], t, e, {
                            timeForBidResponse: ne() - r | 0
                        })
                    })
                }), Promise.all(i).then(function(t) {
                    var e = o.mediationLayerAdServer === qt || o.mediationLayerAdServer === Ut,
                        i = o.mediationLayerAdServer === Dt || o.mediationLayerAdServer === Ut || o.mediationLayerAdServer === Ft,
                        r = {
                            priceInCents: o.floorPriceCents,
                            timeForBidResponse: 1 / 0
                        },
                        n = [],
                        s = {},
                        a = {};
                    return a.bidders = t.map(function(t) {
                        return e || (t.winner = !1), t.result === Gt && (n.push(t), At(s, t.custParams), i && (t.priceInCents > r.priceInCents || t.priceInCents === r && t.timeForBidResponse < r.timeForBidResponse) && (r = a.result = t)), t
                    }), i && r.name ? r.winner = !0 : e && n.length && (a.result = {
                        tag: o.tag,
                        custParams: s
                    }), a
                }))), this._bidRequest
            }, h.prototype.stop = function() {
                var e = this;
                clearTimeout(this._currentTimeout), this._onCancelTrigger({
                    result: "abort",
                    code: 4
                }), this._bidRequest = null, this._currentTimeout = null, this._onCancelTrigger = null, this.onCancel = new Promise(function(t) {
                    e._onCancelTrigger = t
                })
            }, h.prototype.getEventObject = function(t, e, i) {
                var r = i.offset,
                    n = i.adBreakId,
                    s = i.adPlayId,
                    a = this.settings.mediationLayerAdServer,
                    o = e || [];
                "pre" !== r && 0 !== parseInt(r) && (o = o.filter(function(t) {
                    return t.name === Wt
                }));
                var d = {
                        client: t,
                        offset: r,
                        mediationLayerAdServer: a,
                        bidders: o,
                        adBreakId: n,
                        adPlayId: s,
                        bidTimeout: this.settings.bidTimeout
                    },
                    l = this.settings.floorPriceCents;
                l && a !== Ft && a !== qt && (d.floorPriceCents = l);
                var u = this.settings.floorPriceCurrency;
                return u && (d.floorPriceCurrency = u), d
            }, h.prototype.then = function(t) {
                return this._bidRequest ? this._bidRequest.then(t, t) : null
            }, h.prototype.timeout = function() {
                clearTimeout(this._currentTimeout), this._currentTimeout = setTimeout(this._onCancelTrigger, this.settings.bidTimeout, {
                    result: "timeout",
                    code: 2
                })
            }, h
        }(),
        be = 0,
        _e = function() {
            function a(i, t, e, r, n) {
                var s = this;
                g(this, a), this.config = r, this.item = e, this.params = n, this.player = i, this.schedule = t, this.adIds = {}, this.vmapPromise = null, this._preRollPromise = null, this._midRollPromise = {}, this._postRollPromise = null, this.vmapTracker = null, this._errors = [], this._vloaderQueue = [], this.bids = [], this.bidsPromise = null, this.bidsResult = {}, this._debugTrackFn = r.debug && r.trackFn ? r.trackFn : null, At(this, i.Events), this.trigger = function(t, e) {
                    return e.item = s.item, i.Events.trigger.call(s, t, e)
                }
            }
            return a.prototype.init = function(t) {
                var e = this,
                    i = this.schedule,
                    r = i.isVMAP();
                return r && (this.vmapPromise = i._vmapPromise.catch(this.player.utils.noop)), this.bidsPromise = null === t ? this.vmapPromise || Promise.resolve() : r ? this.vmapPromise.then(function() {
                    return e.isDestroyed() ? null : e._createBidsPromise(t)
                }) : this._createBidsPromise(t), this.bidsPromise
            }, a.prototype._createBidsPromise = function(i) {
                var d = this,
                    r = this.player,
                    t = parseInt(i.bidOnBreaks, 10);
                return t = 0 < t ? t : 1 / 0, this.bids = this.schedule.getAllAds().slice(0, t).map(function(n) {
                    var s = new ke(i, {
                        offset: n._offSet,
                        width: r.getWidth(),
                        height: r.getHeight(),
                        container: r.getContainer(),
                        playerId: r.id,
                        autoplay: r.getConfig().autostart,
                        autoplayAdsMuted: d.config.autoplayadsmuted,
                        adVolume: r.getVolume(),
                        mute: r.getMute()
                    });
                    s.start();
                    var t = d.getAdIds(n),
                        a = t.adBreakId,
                        o = t.adPlayId,
                        e = s.getEventObject(Y, i.bidders, {
                            offset: n._offSet,
                            adBreakId: a,
                            adPlayId: o
                        });
                    return d.trigger(lt, e), s.then(function(t) {
                        var e = t.bidders,
                            i = t.result;
                        if (!d.isDestroyed()) {
                            i && !i.error && i.tag && (n._adQueue = n._adQueue || [], n._adQueue[0] = i.tag, n._adXML = null), d.bidsResult[n._vmap ? n._vmap.breakid : n._breakId] = {
                                bid: s,
                                bidders: e
                            };
                            var r = s.getEventObject(Y, e, {
                                offset: n._offSet,
                                adBreakId: a,
                                adPlayId: o
                            });
                            d.trigger(ut, r)
                        }
                    }), s
                }), Promise.all(this.bids)
            }, a.prototype.getAdIds = function(t) {
                var e = t._offSet;
                this.adIds[e] = this.adIds[e] || {
                    adBreakId: bt(12),
                    adPlayIds: {}
                };
                var i = this.adIds[e].adPlayIds,
                    r = "p" + (t._adPodIndex || 0) + "w" + t._waterfallIndex,
                    n = i[r];
                return n || (i[r] = n = bt(12)), {
                    adBreakId: this.adIds[e].adBreakId,
                    adPlayId: n
                }
            }, a.prototype.loadPreRoll = function() {
                var e = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return null === this._preRollPromise && (this._preRollPromise = this.bidsPromise.then(function() {
                    if (!e.isDestroyed()) {
                        var t = e.schedule.getPreRoll(i.startTime);
                        return t ? (t._position = "pre", e.loadAd(t, i)) : void 0
                    }
                })), this._preRollPromise
            }, a.prototype.loadMidRollAtIndex = function(e, i) {
                var r = this;
                return this._midRollPromise[e] || (this._midRollPromise[e] = this.bidsPromise.then(function() {
                    if (!r.isDestroyed()) {
                        var t = r.schedule.getMidRollAtIndex(e);
                        return t ? (t._position = "mid", r.loadAd(t, i)) : void 0
                    }
                })), this._midRollPromise[e]
            }, a.prototype.loadPostRoll = function() {
                var e = this,
                    i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return null === this._postRollPromise && (this._postRollPromise = this.bidsPromise.then(function() {
                    if (!e.isDestroyed()) {
                        var t = e.schedule.getPostRoll(i.startTime);
                        return t ? (t._position = "post", e.loadAd(t, i)) : void 0
                    }
                })), this._postRollPromise
            }, a.prototype.loadAd = function(t) {
                var e = this,
                    i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    r = this.player.utils;
                if (t._id = t._id || bt(12), this.config.preloadAds && (t._preload = t._preload || i.preload || !1), t._vmapTracker = this.getVMAPTracker(t), t._adXML) t.currentTag = t._currentTag || "clientloadedtag_" + be++;
                else if (!t._adQueue) return void r.log("scheduled ad has no url or xml", t);
                var n = t._adXML ? this._loadXML(t, i) : this._loadTag(t, i);
                return n.then(function() {
                    return e.isDestroyed() ? null : e._dispatchAdLoaded(t)
                }).catch(r.noop), n.catch(function() {
                    return e.isDestroyed() ? null : e._dispatchAdLoaded(t)
                }).catch(r.noop), n.catch(function(t) {
                    return e.isDestroyed() ? null : e._vloaderWaterfall(t, i)
                })
            }, a.prototype.getVMAPTracker = function(t) {
                if (!t._vmapTracker) {
                    var e = new _(t._trackers, this._debugTrackFn, this.player, this.config.trackingFilter);
                    t._vmapTracker = this.vmapTracker = e
                }
                return t._vmapTracker
            }, a.prototype._loadTag = function(t, e) {
                var i = t._adQueue[t._waterfallIndex],
                    r = Rt(i, this.player, this.params);
                if (t._currentTag = r, "function" == typeof this._debugTrackFn && this._debugTrackFn({
                        type: "tagReplacement",
                        data: {
                            actualTag: r,
                            originalTag: i
                        }
                    }), e.adBlock) throw this._adBlockDetected(t);
                var n = this._createVastLoader(t).load(r);
                return this._dispatchAdRequest(t, r), n
            }, a.prototype._loadXML = function(t, e) {
                if (t._currentTag = t._currentTag || t._adXML.toString(), e.adBlock) throw this._adBlockError(t);
                var i = this._createVastLoader(t).parseXMLString(t._adXML);
                return this._dispatchAdRequest(t, t._currentTag), i
            }, a.prototype._adBlockError = function(t) {
                var e = this.getAdEventObject(t),
                    i = kt("Ad playback blocked by an ad blocker", 900, 600003);
                return At(e, i)
            }, a.prototype._dispatchAdRequest = function(t, e) {
                this.trigger(yt, this.getAdEventObject(t, e))
            }, a.prototype._dispatchAdLoaded = function(t) {
                this.trigger(vt, this.getAdEventObject(t))
            }, a.prototype._vloaderWaterfall = function(t, e) {
                var i = t.vloader;
                this.removeVastLoader(i);
                var r = this._getVloaderErrorObject(t);
                return this.adWaterfall(i, e, r)
            }, a.prototype.adWaterfall = function(t, e, i) {
                var r = t.scheduledAd();
                if (this.schedule.canWaterfall(r)) return r._waterfallIndex += 1, this._enqueueAdError(r, i), this.loadAd(r, e);
                throw i
            }, a.prototype.getAdEventObject = function(t, e) {
                return At((r = e, n = {}, void 0 !== (i = t)._preload && (n.preloadAds = i._preload), void 0 !== i.skipoffset && (n.skipoffset = i.skipoffset), At(n, {
                    id: i._id,
                    tag: r || i._currentTag,
                    client: Y,
                    adposition: i._position,
                    offset: i._offSet,
                    witem: i._waterfallIndex + 1,
                    wcount: i._adQueue ? i._adQueue.length : 1
                })), this.getAdIds(t));
                var i, r, n
            }, a.prototype.clearAdIds = function(t) {
                this.adIds[t._offSet] = null
            }, a.prototype._createVastLoader = function(i) {
                var r = this,
                    t = this.config,
                    e = new J(i, this.player, {
                        requestFilter: t.requestFilter,
                        trackingFilter: t.trackingFilter
                    });
                return this._vloaderQueue.push(e), e.on(dt, function(t) {
                    var e = r._getVloaderErrorObject(t);
                    r._enqueueAdError(i, e)
                }), e
            }, a.prototype._getVloaderErrorObject = function(t) {
                var e = t.vloader,
                    i = this.getAdEventObject(e.scheduledAd(), t.url),
                    r = kt(t.message, t.code, t.adErrorCode);
                return At(i, r), t.wrappedTags && t.wrappedTags !== t.url && (t.wrapperAdSystem && t.wrapperAdSystem.length !== t.wrappedTags.length && (t.wrapperAdSystem.push(t.adsystem), t.adsystem = ""), i.tag = t.wrappedTags.pop(), i.wrappedTags = t.wrappedTags, i.adsystem = t.adsystem, i.wrapperAdSystem = t.wrapperAdSystem), i
            }, a.prototype._enqueueAdError = function(t, e) {
                this._errors.push(e), t._preload || this.dequeueAdErrors()
            }, a.prototype.dequeueAdErrors = function() {
                var e = this;
                this._errors.forEach(function(t) {
                    return e.trigger(mt, t)
                }), this._errors.splice(0)
            }, a.prototype.removeVastLoader = function(t) {
                var e = this._vloaderQueue.indexOf(t); - 1 !== e && (t.destroy(), this._vloaderQueue.splice(e, 1))
            }, a.prototype.isDestroyed = function() {
                return null === this.player
            }, a.prototype.destroy = function() {
                this.bids.forEach(function(t) {
                    return t.stop()
                }), this._vloaderQueue.forEach(function(t) {
                    return t.destroy()
                }), this.player = null
            }, a
        }(),
        we = document.createElement("img"),
        Te = document.createElement("img");
    we.src = Te.src = 'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="%23191919"/><line stroke="%23CCC" stroke-width="6" x1="32" y1="20" x2="32" y2="44"/><line stroke="%23CCC" stroke-width="6" x1="20" y1="32" x2="44" y2="32"/></svg>', we.className = "jw-vast-nonlinear-open-button", Te.className = "jw-vast-nonlinear-close-button";
    var Ie = {
            cursor: "pointer",
            position: "absolute",
            margin: "auto",
            left: 0,
            right: 0,
            bottom: 0,
            display: "block"
        },
        Ee = "opacity 0.2s",
        Ce = {
            "-webkit-transition": Ee,
            transition: Ee
        };

    function Re(t, e) {
        Pt.utils.style(t, {
            opacity: e || 1
        })
    }

    function Se(t) {
        Pt.utils.style(t, {
            opacity: 0
        })
    }

    function xe() {
        Re(Te)
    }

    function Ve() {
        Re(Te, .75)
    }

    function Me() {
        Re(we)
    }

    function Le() {
        Re(we, .5)
    }
    var Be = function() {
            function s(t, e, i, r, n) {
                g(this, s), this.player = t, this.environment = t.getEnvironment(), this.div = r, this.staticURL = e, this.clickURL = i, this.loadTimer = -1, this.animationTimer = -1, this.banner = null, At(this, t.Events), this.banner = document.createElement("img"), this.banner.className = "jw-banner", this.banner.id = this.player.id + "_vast_static", Se([Te, we]), this.remove(we), this.div.appendChild(this.banner), this.div.appendChild(Te), this.loadTimer = setTimeout(this.imageLoadError.bind(this), n), this.banner.onerror = this.imageLoadError.bind(this), this.banner.onload = this.onLoaded.bind(this), this.banner.src = this.staticURL
            }
            return s.prototype.onLoaded = function() {
                clearTimeout(this.loadTimer), 0 !== this.banner.naturalWidth ? (this.removeBannerEventListeners(), Pt.utils.style(Te, {
                    top: -this.banner.height - 8,
                    bottom: this.banner.height - 8,
                    left: this.banner.width
                }, !0), Pt.utils.style(we, {
                    top: -16
                }, !0), Re([this.div, this.banner]), Re(Te, .75), new Pt.utils.UI(this.banner).on("click tap", this.sendClick.bind(this)), this.environment.OS.mobile && (this.div.onmouseover = xe, this.div.onmouseout = Ve), Te.onclick = Te.ontouchstart = this.collapse.bind(this), we.onclick = we.ontouchstart = this.expand.bind(this), this.trigger(c)) : this.imageLoadError()
            }, s.prototype.imageLoadError = function() {
                clearTimeout(this.loadTimer), this.trigger(m), this.removeBanner()
            }, s.prototype.sendClick = function() {
                this.trigger(a)
            }, s.prototype.collapse = function(t) {
                var e = this; - 1 === this.animationTimer && (t.preventDefault(), this.div.onmouseover = this.div.onmouseout = null, Se([this.banner, Te, we]), this.div.appendChild(we), this.animationTimer = setTimeout(function() {
                    e.remove(e.banner), e.remove(Te), Re(we, .5), e.div.onmouseover = Me, e.div.onmouseout = Le, e.animationTimer = -1
                }, 250))
            }, s.prototype.expand = function(t) {
                var e = this; - 1 === this.animationTimer && (t.preventDefault(), this.div.onmouseover = this.div.onmouseout = null, this.div.appendChild(this.banner), this.div.appendChild(Te), this.animationTimer = setTimeout(function() {
                    Re([e.banner, Te]), e.div.onmouseover = xe, e.div.onmouseout = Ve, e.animationTimer = -1
                }, 50), Se(we))
            }, s.prototype.remove = function(t) {
                this.div.contains(t) && this.div.removeChild(t)
            }, s.prototype.removeBannerEventListeners = function() {
                this.banner.onload = this.banner.onerror = null
            }, s.prototype.removeBanner = function() {
                this.removeBannerEventListeners(), this.remove(this.banner)
            }, s.prototype.removeListeners = function() {
                clearTimeout(this.loadTimer), clearTimeout(this.animationTimer), this.div.onmouseover = this.div.onmouseout = Te.onclick = we.onclick = null, this.off(), this.removeBannerEventListeners()
            }, s.prototype.stop = function() {
                Se([this.div, this.banner, Te, we]), setTimeout(this.removeBanner.bind(this), 400), this.remove(Te), this.remove(we)
            }, s
        }(),
        Oe = function() {
            function i(t, e) {
                g(this, i), this.player = t, this.div = e, this.startTime = 0, this.minDur = 0, this.environment = t.getEnvironment(), At(this, t.Events), this.type = "static", t.on("time", this.dispatchTime, this)
            }
            return i.prototype.playAd = function(t, e, i, r, n) {
                this.minDur = Pt.utils.seconds(i), this.adTag = r, this.static && (this.static.removeListeners(), this.static.stop()), this.div.style.opacity = 0, this.div.style.visibility = "visible";
                var s = this.environment.Browser.firefox ? {} : Ce;
                Pt.utils.style(this.div, Pt.utils.extend({
                    top: "",
                    position: "absolute",
                    width: "100%"
                }, s)), Pt.utils.style([Te, we], At({
                    width: "18px",
                    height: "18px",
                    opacity: .75
                }, Ie, s)), Pt.utils.style(Te, {
                    transform: "rotate(45deg)"
                }), this.static = new Be(this.player, t, e, this.div, n), this.static.on(c, this.startAd, this), this.static.on(a, this.clickHandler, this), this.static.on(m, this.errorHandler, this)
            }, i.prototype.dispatchTime = function(t) {
                this.trigger(e, t)
            }, i.prototype.startAd = function() {
                this.startTime = this.player.getPosition(), 0 < this.minDur && (0 === this.startTime ? this.on(e, this.startTimingAd, this) : this.on(e, this.timeAd, this)), this.sendEvent(c)
            }, i.prototype.startTimingAd = function(t) {
                this.startTime = t.position, this.off(e, this.startTimingAd, this), this.on(e, this.timeAd, this)
            }, i.prototype.timeAd = function(t) {
                t.position - this.startTime > this.minDur && (this.off(e, this.timeAd, this), this.stop())
            }, i.prototype.clickHandler = function() {
                this.sendEvent(a)
            }, i.prototype.errorHandler = function() {
                this.sendEvent(m)
            }, i.prototype.sendEvent = function(t, e) {
                (e = e || {}).tag = e.tag || this.adTag, this.trigger(t, e)
            }, i.prototype.removeEvents = function() {
                this.off()
            }, i.prototype.getState = function() {
                return ot
            }, i.prototype.stop = function() {
                this.startTime && this.static && (this.startTime = 0, this.minDur = 0, this.off(e, this.startTimingAd, this), this.off(e, this.timeAd, this), this.static.removeListeners(), this.static.stop(), this.sendEvent(f))
            }, i.prototype.pause = function() {}, i
        }(),
        He = function() {
            function i(t, e) {
                g(this, i), this.player = t, this.options = e, this.ignoreStartOnSeek = !1, this.reset(), e.timeBetweenAds && t.on({
                    adBreakStart: this.handleAdBreakStart,
                    adSkipped: this.handleAdSkipped,
                    adComplete: this.handleAdComplete,
                    adBreakEnd: this.handleAdBreakEnd,
                    destroyPlugin: this.destroy
                }, this)
            }
            return i.prototype.clearStartOnSeek = function() {
                this.ignoreStartOnSeek = !0
            }, i.prototype.sendAdBreakIgnored = function(t, e) {
                var i, r;
                t && this.player.trigger(s, (r = e, {
                    id: (i = t)._breakId,
                    tag: i._adQueue && 0 < i._adQueue.length ? i._adQueue[0] : i._adXML,
                    client: Y,
                    offset: i._offSet,
                    timeSinceLastAd: r,
                    type: s
                }))
            }, i.prototype.rulesAllowAdPlayback = function(t) {
                var e = this.options,
                    i = 0 === e.frequency && 1 === t,
                    r = t >= e.startOn && (t - e.startOn) % e.frequency == 0;
                return i || r
            }, i.prototype.handleAdBreakStart = function() {
                this.adSkipped = !1, this.adComplete = !1
            }, i.prototype.handleAdComplete = function() {
                this.adComplete = !0
            }, i.prototype.handleAdSkipped = function() {
                this.adSkipped = !0
            }, i.prototype.handleAdBreakEnd = function() {
                !this.adSkipped && this.adComplete && (this.recentCompletedAdTime = It())
            }, i.prototype.timeBetweenAdsAllowsAdPlayback = function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : It();
                if (this.options.timeBetweenAds) {
                    var i = (e - this.recentCompletedAdTime) / 1e3;
                    if (i < this.options.timeBetweenAds) return this.sendAdBreakIgnored(t, i), !1
                }
                return !0
            }, i.prototype.reset = function() {
                this.ignoreStartOnSeek = !1, this.recentCompletedAdTime = 0
            }, i.prototype.destroy = function() {
                this.player.off(null, null, this)
            }, A(i, [{
                key: "timeBetweenAds",
                get: function() {
                    return this.options.timeBetweenAds
                }
            }, {
                key: "startOnSeek",
                get: function() {
                    return this.ignoreStartOnSeek ? null : this.options.startOnSeek
                }
            }]), i
        }(),
        je = {};

    function qe(t, r) {
        var n = this,
            e = je[r];
        return e || (this.jwplayerEntitlements = function(t, e, i) {
            var r = {
                    canPlayAds: !0
                },
                n = new t.key(e),
                s = n.edition();
            if ("unlimited" === s) return i(r);
            var a = n.token(),
                o = ["//", "entitlements.jwplayer.com", "/", a, ".json"];
            "file:" === window.location.protocol && o.unshift("https:"), t.ajax(o.join(""), function(t) {
                r.canPlayAds = !t || !t.response || !1 !== t.response.canPlayAds, i(r)
            }, function() {
                i(r)
            }, {
                timeout: 1e4,
                responseType: "json"
            })
        }, je[r] = new Promise(function(e, i) {
            n.jwplayerEntitlements(t, r, function(t) {
                t.canPlayAds ? e() : i({
                    message: "Ad Limit Reached"
                })
            })
        }))
    }(window.jwplayerPluginJsonp || window.jwplayer().registerPlugin)(Y, "8.1", function(d, l, e) {
        var u = Pt.utils = d.utils,
            h = Pt._ = d._,
            r = d.getConfig(),
            t = r.key,
            n = d.getEnvironment(),
            s = l.debug && l.trackFn ? l.trackFn : null,
            p = this,
            c = null,
            i = l.bids && l.bids.settings ? l.bids.settings.mediationLayerAdServer || it : null;
        if ((i === it || i === rt) && l.bids.bidders) {
            var a = l.bids.bidders;
            a.length && (c = At({}, l.bids, {
                bidders: a
            }))
        }
        var m = {},
            o = !1,
            f = !1,
            v = void 0,
            y = [],
            g = !1,
            A = void 0,
            P = void 0,
            k = void 0,
            b = void 0,
            _ = 0,
            w = 0,
            T = !1,
            I = null,
            E = !1,
            C = void 0,
            R = new Ct,
            S = new He(d, R.getAdRules(l)),
            x = new jwplayer.utils.Timer;
        this.version = "8.4.10", this.bidsVersion = "0.1.1";
        var V = new Et(S),
            M = R.getSchedule(l, S);
        if (M.isVMAP()) {
            var L = Rt(M.getVMAP(), d, m);
            M.load(d, L).catch(u.noop)
        }

        function B(t) {
            H(), O(t);
            var e = v;
            Promise.resolve(t).then(function() {
                if (!e.isDestroyed()) return e.loadAd(t, {
                    adBlock: T
                })
            }).then(function(t) {
                return e.isDestroyed() ? null : D(t)
            }).catch(function(t) {
                return e.isDestroyed() ? null : z(t)
            })
        }

        function O(t) {
            var e = v.getVMAPTracker(t),
                i = v.getAdEventObject(t);
            b.once("destroyed", function() {
                x.clear("adBreakStart"), e.breakEnd(), d.trigger(ht, i), v && v.clearAdIds(t)
            }), x.tick("adBreakStart"), e.breakStart(), d.trigger(pt, i)
        }

        function H() {
            b || (b = d.createInstream().init()).setText(null)
        }

        function j(e, t) {
            var i, r, n, s = (r = e, n = t, S.rulesAllowAdPlayback(n) ? h.isObject(r) && r.adschedule ? R.getSchedule(r, S) : M : V),
                a = new _e(d, s, e, l, m);
            if (a.on(((i = {})[[lt]] = function(t) {
                    return d.trigger(lt, t)
                }, i[[ut]] = function(t) {
                    return d.trigger(ut, t)
                }, i[[yt]] = W, i[[vt]] = Q, i[[mt]] = $, i), p), s.isVMAP()) {
                var o = Rt(s.getVMAP(), d, m);
                s.load(d, o).then(function(t) {
                    a.isDestroyed() || t.forEach(function(t) {
                        return d.trigger(mt, t)
                    })
                }).catch(function(t) {
                    return a.isDestroyed() ? null : z(t)
                })
            }
            return a.init(c).then(function() {
                if (!a.isDestroyed()) {
                    var t = a.schedule.getAdScheduleEventObject();
                    t.adbreaks = t.adbreaks.map(function(t) {
                        return _t(t, a.schedule, a.bidsResult)
                    }), t.item = e, d.trigger(gt, t)
                }
            }), a
        }

        function q() {
            v && (v.schedule.reset(), v.off(null, null, p), v.destroy(), v = null), F(), X(), N(), S.reset(), d.setCues([]), w = 0, f = !1
        }

        function D(t) {
            if (t) {
                var e = t.scheduledAd();
                return v.dequeueAdErrors(), "nonlinear" === e._type && X(),
                    function(n) {
                        0 === n.scheduledAd()._waterfallIndex && N(), v.removeVastLoader(n);
                        var t = new Promise(function(t, e) {
                                var i = new wt(n, d, P, k, v, m);
                                i.on(mt, e), i.on(ft, U), i.on(dt, $);
                                var r = i.init(b);
                                if (!r) return i.destroy(), t();
                                A = b, b = null, i.on(ct, t), y.push(i)
                            }),
                            e = v;
                        return t.catch(function(t) {
                            if (!e.isDestroyed()) return b = b || A, e.adWaterfall(n, {
                                adBlock: T
                            }, t).then(function(t) {
                                return e.isDestroyed() ? null : D(t)
                            })
                        })
                    }(t)
            }
            X()
        }

        function F() {
            y.forEach(function(t) {
                return t.destroy()
            }), y.splice(0)
        }

        function U(t) {
            G(t) && (x.tick("adImpression" + t.id), t.timeLoading = x.between("adBreakStart", "adImpression" + t.id)), _t(t, v.schedule, v.bidsResult), d.trigger(ft, t)
        }

        function N() {
            y.length && y[y.length - 1].clearNonlinear()
        }

        function X() {
            if (b || A) {
                var t = b || A;
                b = null, t.destroy()
            }
            A = null
        }

        function Q(t) {
            var e = t.id;
            x.tick("adLoaded" + e), t.timeLoading = x.between("adLoading" + e, "adLoaded" + e), d.trigger(vt, t)
        }

        function W(t) {
            d.trigger(yt, t), x.tick("adLoading" + t.id)
        }

        function z(t) {
            v.dequeueAdErrors(), $(t), F(), X()
        }

        function $(t) {
            G(t) && (x.tick("adError" + t.id), t.timeLoading = x.between("adBreakStart", "adError" + t.id)), At(t, {
                client: Y
            }), v.vmapTracker && v.vmapTracker.error(t.code), _t(t, v.schedule, v.bidsResult), 50004 !== t.adErrorCode && 50901 !== t.adErrorCode || !d.getAdBlock() || (T = !0), o ? d.trigger(mt, t) : d.once("playlistItem", function() {
                d.trigger(mt, t)
            }, p)
        }

        function G(t) {
            return void 0 === t.podcount || 1 === t.sequence
        }

        function J(t) {
            var e = t.getMidRolls(),
                i = [];
            e.length && u.foreach(e, function(t, e) {
                "nonlinear" !== e._type && i.push({
                    begin: e._offSet,
                    text: m.cuetext
                })
            }), d.setCues(i)
        }
        At(this, d.Events), u.addClass(e, "jw-plugin-vast"), d.on({
            ready: function() {
                var i = this;
                if (o = !0, P = new Oe(d, e), k = new Tt(s, n), (m = R.getOptParams(l)).debugTrackFn = s, K.catch(function(t) {
                        q(), d.off(null, null, i), d.playAd = u.noop;
                        var e = kt("Ad Error: " + t.message, null, 60002);
                        e.code = void 0, e.id = Z, e.client = Y, e.tag = "", d.trigger(mt, e)
                    }), l.preloadAds) {
                    var t = d.getPlugin("related");
                    t && t.on("nextUp", function(t) {
                        t && "discovery" === t.mode && (C = t)
                    })
                }
            },
            beforePlay: function(t) {
                if (!g && !f) {
                    f = !0, v.bids.forEach(function(t) {
                        return t.timeout()
                    });
                    var e = (t || {}).startTime || d.getPosition();
                    w = e || w;
                    var i = v.schedule.getPreRoll(e);
                    if (i || v.vmapPromise) {
                        (null !== v.vmapPromise || i && "nonlinear" !== i._type) && H();
                        var r = v;
                        r.bidsPromise.then(function() {
                            if (!r.isDestroyed()) {
                                var t = r.schedule.getPreRoll(e);
                                t && "nonlinear" !== t._type && O(t)
                            }
                        }), e ? "none" === S.startOnSeek && (v._preRollPromise = null) : S.clearStartOnSeek(), r.loadPreRoll({
                            adBlock: T,
                            startTime: e
                        }).then(function(t) {
                            return r.isDestroyed() ? null : D(t)
                        }).catch(function(t) {
                            return r.isDestroyed() ? null : z(t)
                        })
                    }
                }
            },
            cast: function(t) {
                g = !!t.active
            },
            play: function(t) {
                p.trigger(ot, t)
            },
            time: function(t) {
                if (!g && 0 !== t.duration) {
                    var e = v.schedule.getNextMidrollIndex(w, t.position, t.duration);
                    if (w = t.position, null !== e) {
                        var i = v.schedule.getMidRollAtIndex(e);
                        "nonlinear" !== i._type && (H(), O(i));
                        var r = v;
                        r.loadMidRollAtIndex(e, {
                            adBlock: T
                        }).then(function(t) {
                            return r.isDestroyed() ? null : D(t)
                        }).catch(function(t) {
                            return r.isDestroyed() ? null : z(t)
                        })
                    } else if (l.preloadAds) {
                        var n = t.position + at,
                            s = v.schedule.peek(t.position, n, t.duration);
                        if (null !== s && 0 <= s) v.loadMidRollAtIndex(s, {
                            adBlock: T,
                            preload: !0
                        }).catch(u.noop);
                        else if (-1 === s) {
                            var a = It() + 1e3 * (t.duration - t.position);
                            v.loadPostRoll({
                                adBlock: T,
                                preload: !0,
                                startTime: a
                            }).catch(u.noop)
                        } else if (null === I && n > t.duration) {
                            var o = d.getPlaylistItem(d.getPlaylistIndex() + 1);
                            E = !o, (o || C) && ((I = j(o || C, _ + 1)).loadPreRoll({
                                adBlock: T,
                                preload: !0
                            }).catch(u.noop), C = null)
                        }
                    }
                }
            },
            beforeComplete: function() {
                if (!g) {
                    var t = v.schedule.getPostRoll();
                    if (t) {
                        "nonlinear" !== t._type && (H(), O(t));
                        var e = v;
                        e.loadPostRoll({
                            adBlock: T
                        }).then(function(t) {
                            return e.isDestroyed() ? null : D(t)
                        }).catch(function(t) {
                            return e.isDestroyed() ? null : z(t)
                        })
                    }
                }
            },
            playlistItem: function(t) {
                _ += 1, q();
                var e = d.getPlaylistItem(t.index);
                if (I && e !== I.item && !1 === E && (I.off(null, null, p), I.destroy(), I = null), v = I || j(e, _), I = null, v.schedule.isVMAP() ? v.vmapPromise.then(function() {
                        v.isDestroyed() || J(v.schedule)
                    }).catch(u.noop) : J(v.schedule), l.preloadAds && 1 === _) {
                    var i = r.autostart;
                    !1 === i || i === st && 0 === d.getViewable() ? v.loadPreRoll({
                        adBlock: T,
                        preload: !0
                    }).catch(u.noop) : d.once(nt, function() {
                        v.loadPreRoll({
                            adBlock: T,
                            preload: !0
                        }).catch(u.noop)
                    })
                }
            },
            playlistComplete: q,
            complete: function() {
                N(), f = !1
            },
            destroyPlugin: q
        }, this), d.pauseAd = function(t) {
            if (t = "boolean" != typeof t || t, y.length) {
                var e = y[y.length - 1];
                t ? e.pause() : e.play()
            }
        }, d.playAd = function(t) {
            N();
            var e = void 0,
                i = 0 === m.requestTimeout ? 1 / 0 : m.requestTimeout,
                r = 0 === m.creativeTimeout ? 1 / 0 : m.creativeTimeout;
            e = Array.isArray(t) ? t.slice(0) : [t];
            var n, s = {
                _id: bt(12),
                _adQueue: e,
                _waterfallIndex: 0,
                _offset: 0,
                _position: (n = d, n.isBeforePlay() || 0 === n.getPosition() && "idle" === n.getState() ? "pre" : n.isBeforeComplete() || n.getPosition() === n.getDuration() ? "post" : "mid"),
                requestTimeout: i || tt,
                creativeTimeout: r || et
            };
            v ? B(s) : d.once("playlistItem", function() {
                return B(s)
            })
        };
        var K = qe.call(this, u, t);
        K.catch(u.noop), this.destroy = q
    })
}();