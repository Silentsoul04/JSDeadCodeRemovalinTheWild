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
    }, n.p = "", n(n.s = 150)
}({
    150: function(e, t, n) {
        CNN.INJECTOR.loadFeature("video").then((function() {
            "use strict";
            n(151), n(152), CNN.INJECTOR.loadFeatureForSource(FAVE.settings.injectorJs.featureName, FAVE.settings.injectorJs.source).then((function() {
                CNN.INJECTOR.scriptComplete("fave")
            }))
        }))
    },
    151: function(e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }! function() {
            "use strict";
            var e, t, i, o;
            FAVE.settings.freewheel = FAVE.settings.freewheel || {}, FAVE.settings.freewheel.enabled = CNN.Features.enableFreewheel, FAVE.settings.freewheel.networkId = CNN.AdsConfig.fwNetworkId, FAVE.settings.freewheel.fallbackAssetId = CNN.AdsConfig.fallbackAssetId, FAVE.settings.player.autoplay.muted.enabled = CNN.Features.enableAutoplayMuted && FAVE.settings.autoplayMutedEnabledPage, FAVE.settings.freewheel.keyValuePairs = (e = {
                adkey: CNN.getAdkey,
                capTopics: CNN.getCapTopics,
                cepTopics: CNN.getCepTopics,
                guID: window.turner_getGuid,
                krux: window.krux_getFWKeyValues,
                krux_user: window.krux_getUser,
                proximicData: CNN.getProximicData,
                playerType: "standard",
                refdom: CNN.getRefDom,
                spec: CNN.getSpecBranding,
                transactionID: window.turner_getTransactionId
            }, !0 === CNN.Features.enableAmazonVideoAds && "object" === n(window.AmazonDirectMatchBuy) && "function" == typeof window.AmazonDirectMatchBuy.init && (e.amazon = window.amznads && window.amznads.getTargeting, window.AmazonDirectMatchBuy.init({
                amznkey: CNN.AdsConfig.amazon.amznkey,
                timeout: "number" == typeof CNN.AdsConfig.amazon.timeout ? CNN.AdsConfig.amazon.timeout : 2e3
            })), e), FAVE.settings.userTracking = (t = function() {
                var e;
                return "undefined" != typeof window && window.CNN && (e = window.CNN.UserConsent.getConsentState()), e
            }(), o = (i = t) || {
                ads: !1,
                performance: !1,
                personalization: !1,
                social: !1
            }, i && (o.ads = i.advertising || !1), {
                features: {
                    ads: o.ads,
                    performance: o.performance,
                    personalization: o.personalization,
                    social: o.social
                }
            }), FAVE.settings.freewheel.siteSectionIdSelection = function(e, t) {
                var n, i, o = Modernizr.phone ? CNN.SectionConfig.mobile.contexts : CNN.SectionConfig.desktop.contexts,
                    r = CNN.contentModel.sectionName,
                    s = o.default.adsection,
                    a = FAVE.settings.freewheel.constantSsidPrefix,
                    c = CNN.Utils.existsObject,
                    u = CNN.Utils.existsString,
                    d = function(e, t) {
                        return !!(c(o[e]) && c(o[e].adSectionOverrideKeys) && u(o[e].adSectionOverrideKeys[t]))
                    },
                    l = function(e) {
                        return !(!c(o[e]) || !u(o[e].adsection))
                    };
                switch (CNN.contentModel.pageType) {
                    case "section":
                        i = "videos" === CNN.contentModel.sectionName ? u(t.adSection) && -1 === t.adSection.indexOf(a) ? t.adSection : l(r) ? o[r].adsection : s : u(e.adsection) && -1 === e.adsection.indexOf(a) ? e.adsection : d(r, "const-article-pagetop") ? o[r].adSectionOverrideKeys["const-article-pagetop"] : l(r) ? o[r].adsection : s;
                        break;
                    case "video":
                        r = t.sectionName, i = u(t.adSection) && -1 === t.adSection.indexOf(a) ? t.adSection : d(r, "const-video-leaf") ? o[r].adSectionOverrideKeys["const-video-leaf"] : d("default", "const-video-leaf") ? o.default.adSectionOverrideKeys["const-video-leaf"] : s;
                        break;
                    case "article":
                    case "profile":
                    case "show":
                    case "special":
                        i = (n = u(e.adsection)) && -1 === e.adsection.indexOf(a) ? e.adsection : n && -1 !== e.adsection.indexOf(a) && d(r, e.adsection) ? o[r].adSectionOverrideKeys[e.adsection] : u(t.adSection) && -1 === t.adSection.indexOf(a) ? t.adSection : u(t.sectionName) && n && -1 !== e.adsection.indexOf(a) && d(t.sectionName, e.adsection) ? o[t.sectionName].adSectionOverrideKeys[e.adsection] : n && -1 !== e.adsection.indexOf(a) && d("default", e.adsection) ? o.default.adSectionOverrideKeys[e.adsection] : n && -1 !== e.adsection.indexOf(a) && !1 === d(r, e.adsection) && l(r) ? o[r].adsection : s;
                        break;
                    default:
                        i = s
                }
                return i
            }
        }()
    },
    152: function(e, t) {
        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }! function(e, t) {
            "use strict";
            e.components = e.components || {}, e.components.Omniture = function(t) {
                this.settings = e.settings.jsmd, this.configs = t.configs, this.autostart = this.configs.autostart, this.isLive = this.configs.isLive || !1, this.isVideoReplayClicked = this.configs.isVideoReplayClicked || !1, this.theoplayerVersion = e.theoplayerVersion, this.munger = Object.create(null), this.omniture = Object.create(null), this.omniture.content = t.videoJSON || Object.create(null), this.omniture.content.video_player = this.settings.videoPlayer + " " + this.theoplayerVersion, this.isFreePreviewPlayer = this.isLive && this.configs.isFreePreviewPlayer || !1, e.Utils.existsObject(t.videoJSON) && (t.videoJSON.trt && (t.videoJSON.trt = String(t.videoJSON.trt)), e.Utils.exists(t.videoJSON.urlRelateds) && (this.munger.urls = Object.create(null), this.munger.urls.relateds = t.videoJSON.urlRelateds.length > 0 ? t.videoJSON.urlRelateds : "", t.videoJSON.urls = this.munger.urls, this.omniture.content = t.videoJSON), e.Utils.exists(t.videoJSON.videoIdTimeStamp) && (this.munger.timestamp = t.videoJSON.videoIdTimeStamp, t.videoJSON.timestamp = this.munger.timestamp, this.omniture.content = t.videoJSON), t.videoJSON.dateCreatedMilliSeconds && t.videoJSON.dateCreated && (this.munger.dateCreated = Object.create(null), this.munger.dateCreated.text = t.videoJSON.dateCreated, this.munger.dateCreated.uts = String(t.videoJSON.dateCreatedMilliSeconds), t.videoJSON.dateCreated = this.munger.dateCreated, this.omniture.content = t.videoJSON), "object" === n(t.videoJSON.metas) && "string" == typeof t.videoJSON.metas.branding && (this.munger.show_name = t.videoJSON.metas.branding, t.videoJSON.show_name = this.munger.show_name, this.omniture.content = t.videoJSON)), "string" == typeof CNN.contentModel.analytics.pageTop.collectionHeadline ? this.video_collection = CNN.contentModel.analytics.pageTop.collectionHeadline : this.video_collection = "", this.omniture.content.video_collection = this.video_collection, this.omniture.content.muteOverlayClicked = !1, delete this.munger
            }, e.components.Omniture.prototype.visibilityHelper = function() {
                "object" === n(FAVE.pageVis) && "function" == typeof FAVE.pageVis.isDocumentVisible && (this.omniture.content.video_focus = FAVE.pageVis.isDocumentVisible() ? "in_focus" : "out_of_focus")
            }, e.components.Omniture.prototype.onPlayerReady = function(e, t, n) {
                CNN.omniture = CNN.omniture || {}, CNN.omniture.screen_state = CNN.omniture.screen_state || "default", CNN.Analytics && CNN.Analytics.segment && CNN.Analytics.segment.markFromResponseEnd && CNN.Analytics.segment.markFromResponseEnd("faveReady")
            }, e.components.Omniture.prototype.onContentEntryLoad = function(e, t, n) {}, e.components.Omniture.prototype.onContentMetadata = function(e, t, n, i, o, r) {}, e.components.Omniture.prototype.onContentBegin = function(e, n, i, o) {
                if (!t.jsmd) {
                    if (!t._jsmd) return;
                    t.jsmd = t._jsmd.init()
                }
                this.omniture.Meta = Object.create(new t._jsmd.plugin.gCNNVideoCollection), this.omniture.content.muted = o.muted, !0 === this.isFreePreviewPlayer && this.initFreePreviewMetrics()
            }, e.components.Omniture.prototype.onContentPlay = function(e, n, i, o) {
                var r, s = CNN.VideoPlayer.playerProperties[e].isVideoReplayClicked || !1;
                void 0 === this.omniture.Meta && (this.omniture.Meta = Object.create(new t._jsmd.plugin.gCNNVideoCollection)), o && (this.omniture.content.is_autoplay_allowed = o.isAutoplayAllowed), this.isLive ? (this.omniture.content.player_type = "live", this.omniture.content.isAutoStart = "boolean" == typeof this.autostart && this.autostart, window.live_interval = 60, r = "cnnvideo-live") : r = o && null !== o.isAutostartSuccessful ? o.isAutostartSuccessful && !s ? "cnnvideo-autostart" : "cnnvideo-start" : "boolean" == typeof this.autostart && this.autostart && !s ? "cnnvideo-autostart" : "cnnvideo-start", !0 === this.isFreePreviewPlayer && this.setFreePreviewData(), this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, r, n)
            }, e.components.Omniture.prototype.setFreePreviewData = function() {
                CNN.omniture = CNN.omniture || {}, CNN.omniture.free_preview = this.getFreePreviewMetrics(), this.omniture.content.free_preview = CNN.omniture.free_preview, this.omniture.content.mvpd = this.configs.mvpdId, this.omniture.content.adobe_hash_id = this.configs.adobeHashId
            }, e.components.Omniture.prototype.onContentComplete = function(e, t, n) {}, e.components.Omniture.prototype.onContentEnd = function(e, n, i) {
                this.visibilityHelper(), CNN.VideoPlayer.playerProperties[e].isVideoReplayClicked = !1, t.trackVideoEvent(this.omniture.content, "cnnvideo-complete", n)
            }, e.components.Omniture.prototype.onContentPlayhead = function(e, n, i, o, r) {
                void 0 === this.omniture.Meta || void 0 === o || this.omniture.Meta.get(n, "hasScrubbed") || this.isLive || (o > .75 * r && !this.omniture.Meta.get(n, "isSeventyFive") ? (this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-seventyfive", n)) : o > .5 * r && !this.omniture.Meta.get(n, "isHalf") ? (this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-fifty", n)) : o > .25 * r && !this.omniture.Meta.get(n, "isTwentyFive") ? (this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-twentyfive", n)) : o > .1 * r && !this.omniture.Meta.get(n, "isTen") && (this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-ten", n)))
            }, e.components.Omniture.prototype.onAdPlay = function(e, n, i, o, r, s, a, c) {
                try {
                    this.omniture.content.ad_duration = s, this.omniture.content.adType = c, this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-preroll", n)
                } catch (e) {
                    this.consoleError("Omniture onAdPlay error:", e)
                }
            }, e.components.Omniture.prototype.onAdEnd = function(e, n, i, o, r, s, a) {
                try {
                    this.omniture.content.adType = a, this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-adcomplete", n)
                } catch (e) {
                    this.consoleError("Omniture onAdEnd error:", e)
                }
            }, e.components.Omniture.prototype.onAdPause = function(n, i, o, r, s, a, c, u, d, l, m) {
                try {
                    e.Utils.existsObject(m) && "boolean" == typeof m.pausedByViewportChange && (this.omniture.content.paused = l, this.omniture.content.pause_status = m.pausedByViewportChange ? "viewport pause" : "viewport resume", this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-pause", i))
                } catch (e) {
                    this.consoleError("Omniture onAdPause error:", e)
                }
            }, e.components.Omniture.prototype.onContentPause = function(n, i, o, r, s) {
                try {
                    this.omniture.content.paused = r, e.Utils.existsObject(s) && "boolean" == typeof s.pausedByViewportChange && (this.omniture.content.pause_status = s.pausedByViewportChange ? "viewport pause" : "viewport resume"), this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-pause", i)
                } catch (e) {
                    this.consoleError("Omniture onContentPause error:", e)
                }
            }, e.components.Omniture.prototype.onTrackingContentSeek = function(e, n, i) {
                this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-scrub", n)
            }, e.components.Omniture.prototype.onContentBuffering = function(e, n, i, o) {
                try {
                    this.omniture.content.buffering = o, this.visibilityHelper(), t.trackVideoEvent(this.omniture.content, "cnnvideo-buffer", n)
                } catch (e) {
                    this.consoleError("Omniture onContentBuffering error:", e)
                }
            }, e.components.Omniture.prototype.onTrackingContentProgress = function(e, t, n) {
                this.visibilityHelper()
            }, e.components.Omniture.prototype.onTrackingMuted = function(e, t, n, i) {
                this.omniture.content.muted = i.muted, this.omniture.content.muteOverlayClicked = i.muteOverlayClicked;
                try {
                    window.trackVideoEvent(this.omniture.content, "cnnvideo-mute", t)
                } catch (e) {
                    FAVE.Utils.consoleError("Omniture onTrackingMuted error:", e)
                }
                this.omniture.content.muteOverlayClicked = !1
            }, e.components.Omniture.prototype.consoleError = function(e, t) {
                if ("object" === n(window.console) && "function" == typeof window.console.error) try {
                    window.console.error(e, t && t.toString() || "")
                } catch (e) {}
            }, e.components.Omniture.prototype.initFreePreviewMetrics = function() {
                var e, t = CNN.GoFreePreviewConfig && CNN.GoFreePreviewConfig.temppass || null;
                this.rememberedProvider = JSON.parse(window.localStorage.getItem("cvp.auth.rememberedProvider")), this.visitTime = moment().unix(), null !== (e = JSON.parse(localStorage.getItem("CNNgoFreePreview"))) ? this.visitTime >= e.nextSweep && (e.nextSweep = this.getNextSweepTime(), e.dayCount = e.dayCount + 1, localStorage.setItem("CNNgoFreePreview", JSON.stringify(e))) : (e = {
                    nextSweep: this.getNextSweepTime(),
                    dayCount: 1,
                    dayAuthenticated: this.rememberedProvider && this.rememberedProvider.data !== t ? 1 : null
                }, localStorage.setItem("CNNgoFreePreview", JSON.stringify(e)))
            }, e.components.Omniture.prototype.getNextSweepTime = function() {
                var e, t, n = this.getSweepTime();
                return this.visitTime > n ? (t = moment.unix(n).add(1, "days"), e = moment(t).unix()) : e = n, e
            }, e.components.Omniture.prototype.getSweepTime = function() {
                var e = moment.unix(this.visitTime).format("YYYY-MM-DD 04:00:00");
                return moment(e).unix()
            }, e.components.Omniture.prototype.getFreePreviewMetrics = function() {
                var e, t = JSON.parse(localStorage.getItem("CNNgoFreePreview"));
                return t && (e = t.dayCount + ":" + (t.dayAuthenticated || "nvs")), e
            }, CNN.Features.enableOmniture && (e.settings.omniture = e.settings.omniture || {}, e.settings.omniture.component = e.components.Omniture)
        }(FAVE, window)
    }
});