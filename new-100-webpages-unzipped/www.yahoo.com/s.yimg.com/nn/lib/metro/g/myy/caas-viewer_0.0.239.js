"use strict";
var DOC = document;
var WIN = window;
var Y = WIN.Y || {};
var ARTICLE_CACHE_TTL = 3600;
var DEFAULT_HP_SPACEID = 1197228339;
var CAAS_UUID_REGEX = /id=\"caas-art-([^"]+)\">/;
var SCROLL_TO_PHOTO_DELTA = 10;
var browserHeight = WIN.innerHeight || DOC.documentElement.clientHeight;
var browserWidth = WIN.innerWidth || DOC.documentElement.clientWidth;
Y.CaasViewer = function CaasViewer(c) {
    this.bucket = c && c.bucket || null;
    this.device = c && c.device || "smartphone";
    this.site = c && c.site || "fp";
    this.caasXhrUri = c.xhrUri || "/fpjs/viewer/";
    this.comscoreBaseUrl = c.comscoreBaseUrl || "";
    this.comscoreBeaconUri = c.comscoreBeaconUri || "/pageview/";
    this.dedupeADIDs = [];
    this.enablePrefetch = c.enablePrefetch || 0;
    this.enableCaaSOathPlayer = c.enableCaaSOathPlayer || 0;
    this.enableCaaSSidekick = c.enableCaaSSidekick || 0;
    this.enableCaaSVerticalVideo = c.enableCaaSVerticalVideo || 0;
    this.enableCaaSVideoDocking = c.enableCaaSVideoDocking || 0;
    this.enableCaaSVideoLightbox = c.enableCaaSVideoLightbox || 0;
    this.enableRecommendedVideos = c.enableRecommendedVideos || 0;
    this.enableViewerLinkOpenViewer = c.enableViewerLinkOpenViewer || 0;
    this.headerClosesViewer = c.headerClosesViewer || 0;
    this.enableDisplayAds = c.enableDisplayAds === 0 ? 0 : 1;
    this.forceLrec2 = c.forceLrec2 || 0, this.hideCommentsForSlick = c.hideCommentsForSlick || 0;
    this.infoBeaconUri = c.infoBeaconUri || "/p.gif";
    this.lang = c && c.lang || "en-US";
    this.prefetchBatchSize = c.prefetchBatchSize || 20;
    this.region = c && c.region || "US";
    this.rid = c && c.rid || 0;
    this.appType = c && c.appType || "default";
    this.aboveFoldModList = c && c.aboveFoldModList || [];
    this.extraSiteAttribute = c && c.extraSiteAttribute || "";
    this.rapidInstance = this.getRapidInstance();
    this.rConfig = WIN.rapidPageConfig && WIN.rapidPageConfig.rapidConfig || null;
    this.rKeys = this.rConfig && this.rConfig.keys || {
        mrkt: "us",
        site: "fp",
        ver: "ss"
    };
    this.wfUtils = WIN.wafer && WIN.wafer.utils || null;
    this.DARLA = WIN.DARLA || null;
    this.history = Y && Y.History ? new Y.History() : null;
    this.smadEnabled = c && c.ads && c.ads.smad && c.ads.smad.enabled;
    this.smadCluster = c && c.ads && c.ads.smad && c.ads.smad.adCluster;
    this.smadFlashSales = c && c.ads && c.ads.smad && c.ads.smad.flashSales;
    this.smadFlashSaleText = c && c.ads && c.ads.smad && c.ads.smad.flashSaleText;
    this.flashSaleDynamicMoments = c && c.ads && c.ads.smad && c.ads.smad.flashSaleDynamicMoments;
    this.monEnabled = c && c.enableMonAds;
    this.enablesmAdDedupe = c && c.ads && c.ads.smad && c.ads.smad.enablesmAdDedupe;
    if (this.smadEnabled && c && c.xhrPath) {
        this.sponsoredMomentsAdFetchUrl = c.xhrPath + "?ctrl=SponsoredMomentsAdWafer&m_id=tdv2-applet-sponsored-moments.wafer&m_mode=json";
    }
    this.xhrPath = c.xhrPath;
    this.relatedContentModules = c.relatedContentModules || {};
    this.editorialPromoModule = c.editorialPromoModule || "";
    if (this.smadEnabled) {
        this.smadSectionId = c.ads.smad && c.ads.smad.sectionId || {};
        this.smadSiteBlackList = c.ads.smad && c.ads.smad.siteBlackList.split(",") || [];
        this.smadSpaceidBlackList = c.ads.smad && c.ads.smad.spaceidBlackList || "";
        this.smadAdFloorPrice = c.ads.smad && c.ads.smad.adFloorPrice || "";
        this.smadContainerSize = c.ads.smad && c.ads.smad.containerSize || "";
        this.smadType = c.ads.smad && c.ads.smad.type || "";
        this.smadViewMaxLimit = c.ads.smad && c.ads.smad.viewMaxLimit || 2;
        this.smadViewCount = 0;
        this.smadHideReactionsBar = true;
        this.smadNextAdCallDelay = c.ads.smad && c.ads.smad.nextAdCallDelay || 200;
        this.smadPlayableMoment = c.ads.smad && c.ads.smad.playableMoments || false;
        this.touchPointsEnabled = c.ads.smad && c.ads.smad.touchPoints;
        this.fallbackEnabled = c.ads.smad && c.ads.smad.fallbackEnabled;
        this.adFormats = c.ads.smad && c.ads.smad.adFormats;
        this.adServiceEndpointEnabled = c && c.ads && c.ads.smad && c.ads.smad.adServiceEndpointEnabled;
    }
    if (this.smadCluster) {
        this.buttonColor = c.ads.smad && c.ads.smad.buttonColor;
        this.indicatorColor = c.ads.smad && c.ads.smad.indicatorColor;
        this.portraitBackgroundImages = c.ads.smad && c.ads.smad.portraitBackgroundImages;
    }
    this.fetchLrecAfterSmadLimitTries = 5;
    this.isPWA = this.appType === "pwa";
    if (!this.isPWA) {
        if (("standalone" in WIN.navigator) && WIN.navigator.standalone) {
            this.isPWA = true;
        } else {
            if (typeof window.matchMedia !== "undefined" && window.matchMedia("(display-mode: standalone)").matches) {
                this.isPWA = true;
            } else {
                if (typeof window.msMatchMedia !== "undefined" && window.msMatchMedia("(display-mode: standalone)").matches) {
                    this.isPWA = true;
                }
            }
        }
    }
    this.items = {};
    this.savedX = 0;
    this.savedY = 0;
    this.caasViewerScrollPos = {};
    this.caasInstance = null;
    this.comments = null;
    this.commentsExpanded = false;
    this.homeUri = this.getUrlToUse(WIN.location.pathname + WIN.location.search);
    this.prevUri = null;
    this.pageParams = {};
    this.adsUlt = {
        pg: {
            device: this.device,
            intl: this.rKeys.mrkt,
            property: this.rKeys.site,
            rid: this.rid,
            test: this.bucket
        }
    };
    this.caasViewerEl = DOC.getElementById("content-viewer") || null;
    this.caasContentEl = DOC.getElementById("caas-content") || null;
    this.caasRelatedContentEl = DOC.getElementById("caas-related-content") || null;
    this.editorialPromoEl = DOC.getElementById("editorial-promo") || null;
    this.openInAppEl = DOC.getElementById("open-in-app-btn") || null;
    this.streamHeaderEl = DOC.getElementById("Header") || null;
    this.basePageEl = DOC.getElementById("MainView") || null;
    this.adLrec2El = DOC.querySelector(".ad-LREC2") || null;
    this.streamLinkClicked = null;
    this.canonicalEl = document.querySelector('link[rel="canonical"]');
    this.canonicalElStartVal = this.canonicalEl.getAttribute("href");
    this._headerEl = DOC.getElementsByClassName("headerwafer")[0];
    this._headerBackButton = DOC.getElementById("header-back-button") || null;
    this._scrollToPhotoOffsetY = ((this._headerEl && this._headerEl.offsetHeight) || 0) + SCROLL_TO_PHOTO_DELTA;
    this.appInstallUrl = this.openInAppEl && this.openInAppEl.href || null;
    this.caasXhrUrl = this.getUrlToUse(this.caasXhrUri + "?device=" + this.device + "&bucket=" + this.bucket + "&rid=" + this.rid + "&site=" + this.site + "&lang=" + this.lang + "&region=" + this.region);
    var b = [];
    if (this.enableCaaSOathPlayer) {
        b.push("oathPlayer");
    }
    if (this.monEnabled) {
        b.push("enableAdsMon");
    }
    if (this.enableCaaSVerticalVideo) {
        b.push("enableSlickVideo");
    }
    if (this.enableCaaSVideoDocking) {
        b.push("enableVideoDocking");
    }
    if (this.enableCaaSVideoLightbox) {
        b.push("videolite");
    }
    if (this.enableRecommendedVideos) {
        b.push("recommendedVideos");
    }
    if (this.isPWA) {
        b.push("pwa");
    }
    this.cacheKeyPostFix = this.device + ":" + this.site + ":" + this.lang + ":" + this.region;
    if (b.length) {
        var a = b.join(",");
        this.caasXhrUrl = this.caasXhrUrl + "&features=" + a;
        this.cacheKeyPostFix = this.cacheKeyPostFix + ":" + a;
    }
    if (!this.wfUtils) {
        this.beacon({
            beaconType: "caas_viewer",
            error: "no_wafer_fetch"
        });
        return;
    }
    if (!this.caasViewerEl || !this.caasContentEl) {
        this.beacon({
            beaconType: "caas_viewer",
            error: "missing_viewer_template"
        });
        return;
    }
    if (this.history && this.history.on) {
        this.historyChange = this.historyChange.bind(this);
        this.history.on(this.historyChange);
    } else {
        this.beacon({
            beaconType: "caas_viewer",
            error: "missing_history_manager"
        });
    }
    if (!this.rapidInstance) {
        this.beacon({
            beaconType: "caas_viewer",
            error: "init_no_rapid_instance"
        });
    }
    this._headerBackButton && this._headerBackButton.addEventListener("click", this.captureBackButton.bind(this));
    if (this.isPWA) {
        this.setupHeader();
    }
    DOC.body.addEventListener("click", this.mainViewLinkCapture.bind(this));
    this.openInAppEl && this.appInstallUrl && this.openInAppEl.addEventListener("click", this.openInAppClickHandler);
    if (this.enablePrefetch) {
        this.prefetchAboveFoldItems();
        this.initContentPrefetcher();
    }
    this.setDisplayForSlick = this.setDisplayForSlick.bind(this);
    this.handleVideoError = this.handleVideoError.bind(this);
    this.onCanvassExpanded = this.onCanvassExpanded.bind(this);
    this.onCanvassCollapsed = this.onCanvassCollapsed.bind(this);
};
Y.CaasViewer.prototype = {
    ancestor: function(c, a, b) {
        if (!c) {
            return false;
        }
        if (c.tagName && c.tagName.toUpperCase() === a && c.classList && c.classList.contains(b)) {
            return c;
        }
        return this.ancestor(c.parentNode, a, b);
    },
    getAncestorNodeWithAttribute: function(b, a) {
        if (!b) {
            return false;
        }
        if (b.getAttribute && b.getAttribute(a) !== null) {
            return b;
        }
        return this.getAncestorNodeWithAttribute(b.parentElement, a);
    },
    getAttributeFromAncestor: function(c, b) {
        var a = this.getAncestorNodeWithAttribute(c, b);
        if (a) {
            return a.getAttribute(b);
        }
        return false;
    },
    getQueryString: function(d, b) {
        if (!d) {
            return null;
        }
        var c = new RegExp("[?&]" + b + "=([^&#]*)", "i");
        var a = c.exec(d);
        return a ? a[1] : null;
    },
    updateQueryStringParameter: function(c, a, d) {
        var b = new RegExp("([?&])" + a + "=.*?(&|$)", "i");
        var e = c.indexOf("?") !== -1 ? "&" : "?";
        if (c.match(b)) {
            return c.replace(b, "$1" + a + "=" + d + "$2");
        }
        return c + e + a + "=" + d;
    },
    getUrlToUse: function(a, b) {
        b = b || {};
        if (this.isPWA) {
            if (b.tsrc !== false) {
                a = this.updateQueryStringParameter(a, ".tsrc", "ylite");
            }
            a = this.updateQueryStringParameter(a, "apptype", "pwa");
        }
        return a;
    },
    captureBackButton: function(b) {
        var a = this;
        b.preventDefault();
        b.stopPropagation();
        if (a.ancestor(b.target, "SVG", "header-back-icon") && !a.headerClosesViewer) {
            a.clearArticleRelatedComponents();
            WIN.history.back();
        } else {
            a.prevUri = a.homeUri;
            a.closeViewer();
        }
    },
    setupHeader: function() {
        var b = this;
        var c = DOC.getElementById("header-logo");
        if (WIN.MutationObserver) {
            var e = document.getElementById("profile-notification-accordion");
            var a = new MutationObserver(function g(l) {
                for (var k in l) {
                    if (l.hasOwnProperty(k)) {
                        var j = l[k];
                        if (j.type === "attributes") {
                            var i = Array.prototype.slice.call(e.getElementsByClassName("yns-link"));
                            i.forEach(function h(n) {
                                if (n.tagName !== "A") {
                                    return;
                                }
                                var m = n.getAttribute("href");
                                n.setAttribute("target", "_self");
                                n.setAttribute("href", b.getUrlToUse(m, {
                                    tsrc: false
                                }));
                            });
                        }
                    }
                }
            });
            a.observe(e, {
                attributes: true
            });
        }
        if (c) {
            c.addEventListener("click", function f(i) {
                var h = DOC.body.classList.contains("connection-offline");
                if (h) {
                    i.preventDefault();
                    i.stopPropagation();
                    return false;
                }
            });
        }["header-logo", "profile-finance-link", "profile-lifestyle-link", "profile-mail-link", "profile-news-link", "profile-settings-link", "profile-sports-link"].forEach(function d(j) {
            var i = DOC.getElementById(j);
            if (!i) {
                return;
            }
            var h = i.getAttribute("href");
            i.setAttribute("href", b.getUrlToUse(h));
        });
        ["profile-accounts-link", "profile-signout-link", "profile-user-info"].forEach(function d(l) {
            var j = DOC.getElementById(l);
            if (!j) {
                return;
            }
            var h = j.getAttribute("href");
            var i = b.getQueryString(h, ".done");
            var k = b.getUrlToUse(i);
            h = b.updateQueryStringParameter(h, ".done", encodeURIComponent(k));
            j.setAttribute("href", b.getUrlToUse(h));
        });
    },
    mainViewLinkCapture: function(j) {
        var i = Date.now();
        var k = j.target;
        var h = this.getAncestorNodeWithAttribute(k, "data-uuid");
        var g = k.getAttribute("data-uuid");
        if (!g && k.tagName === "A" && this.isPWA) {
            var d = k.getAttribute("href");
            var k = k.getAttribute("target");
            if ((!k || k === "_self") && d && d.indexOf("#") === -1) {
                j.preventDefault();
                window.location = this.getUrlToUse(d);
                return false;
            }
        }
        if (h) {
            var a = h.getAttribute("data-uuid") || null;
            var o = h.getAttribute("data-vvid") || null;
            var c = "";
            var l = "";
            var n = h;
            if (h.classList.contains("js-stream-comments-button") && h.getAttribute("data-url")) {
                c = h.getAttribute("data-url");
                l = h.getAttribute("data-ylk");
                if (!h.classList.contains("js-content-viewer")) {
                    this.goToDeeplink(c);
                    return;
                }
            } else {
                n = h.tagName === "A" ? h : this.ancestor(k, "A", "js-content-viewer");
                if (!n || !n.classList.contains("js-content-viewer")) {
                    return;
                }
                if (n.pathname) {
                    c = n.pathname ? (n.pathname + n.search) : "";
                }
                var m = h.querySelector("[data-photo-id]");
                var b = m && k.getAttribute("data-photo-id");
            }
            j.preventDefault();
            if (a || c) {
                if (window.c2s_event && a) {
                    window.c2s_event("intent", {
                        articleId: a
                    });
                }
                this.prevUri = this.getUrlToUse(WIN.location.pathname + WIN.location.search);
                this.fetchContent({
                    photoId: b,
                    url: c,
                    uuid: a,
                    vvid: o
                }, {
                    t0: i,
                    t1: Date.now()
                });
                this.streamLinkClicked = n;
                this.basePageEl && this.basePageEl.setAttribute("aria-hidden", true);
            } else {
                this.beacon({
                    beaconType: "caas_viewer",
                    error: "data_uuid_lookup_failed"
                });
                c && this.goToDeeplink(c);
            }
            return;
        } else {
            var f = DOC.body.classList.contains("connection-offline");
            if (f) {
                j.preventDefault();
                j.stopPropagation();
                return false;
            }
        }
    },
    getRapidInstance: function() {
        return YAHOO && YAHOO.i13n && YAHOO.i13n.rapidInstance || WIN.rapidInstance;
    },
    openInAppClickHandler: function(a) {
        a.preventDefault();
        a.stopPropagation();
        var b = a.currentTarget && a.currentTarget.href;
        if (!b) {
            return;
        }
        if (this.rapidInstance) {
            this.rapidInstance.beaconClick("appinstall", "openinapp", 1, {
                elm: "appinstall",
                itc: 0
            });
        }
        WIN.location = b;
    },
    generateOpenInAppUrl: function(c, b) {
        var a = this.appInstallUrl;
        if (!a || !b) {
            return;
        }
        a = a.replace(/{YAHOO_URL}/g, encodeURIComponent("https://www.yahoo.com" + b));
        return a;
    },
    beacon: function(g, e) {
        var a = new Image();
        var f = e === "comscore" ? this.comscoreBeaconUri : this.infoBeaconUri;
        var d = ["rid=" + this.rid, "bucket=" + this.bucket, "apptype=" + this.appType];
        var b = "";
        for (var c in g) {
            d.push(c + "=" + g[c]);
        }
        b = d.join("&");
        a.src = f + "?" + b;
    },
    beaconClk2Cnt: function(a, d) {
        var f = a && a.t0;
        var e = a && a.t1;
        var c = a && a.t2;
        var b = a && a.t3;
        if (f && e && c && b) {
            this.beacon({
                beaconType: "clk2Cnt",
                time: Math.floor(b - f),
                t3_t2: Math.floor(b - c),
                t2_t1: Math.floor(c - e),
                t1_t0: Math.floor(e - f),
                t0: f,
                uuid: d
            });
        }
    },
    beaconNielsen: function(f) {
        var e = WIN.nielsenTracker || WIN.trac;
        if (!e) {
            return;
        }
        if (!this.nielsenTracking && e && typeof e.pageEvent === "function") {
            this.nielsenTracking = {
                scrollTop: WIN.scrollY,
                tracker: e,
                urlCount: {}
            };
        }
        var b = this.nielsenTracking;
        if (!b) {
            return;
        }
        if (f) {
            var d = WIN.scrollY;
            if (d - b.scrollTop < 500) {
                return;
            }
            b.scrollTop = d;
        }
        var a = WIN.location;
        var c = a.protocol + a.hostname + a.pathname;
        b.urlCount[c] = b.urlCount[c] || 0;
        b.tracker.pageEvent(c + "-" + (++b.urlCount[c]));
    },
    beaconAdobeOpen: function() {
        var a = window.s;
        if (a) {
            a.prop53 = "Modal";
            a.t();
        }
    },
    beaconAdobeClose: function() {
        var b = window.s;
        if (b) {
            var a = window.location.hostname.split(".", 1);
            b.pageName = "net|" + a + "|smartphone";
            b.tl(true, "o", "Modal close");
            b.clearVars();
        }
    },
    beaconComscore: function(a, b) {
        this.beacon({
            client: 1,
            property: a || this.rKeys.site
        }, "comscore");
        var d = this.comscoreBaseUrl;
        if (d) {
            var c = new Image();
            d += "&c5=" + (b || this.rConfig.spaceid || DEFAULT_HP_SPACEID) + "&c7=" + encodeURIComponent(DOC.location.href) + "&ns__t=" + new Date().getTime();
            if (window && window.__cmp) {
                window.__cmp("getVendorConsents", null, function(e, f) {
                    if (f && e && e.gdprApplies && e.vendorConsents) {
                        d += "&cs_ucfr=" + (e.vendorConsents[77] ? 1 : 0);
                    }
                    c.src = d;
                });
            } else {
                c.src = d;
            }
        }
    },
    historyChange: function(c) {
        var a = this;
        var b = this.history.getState();
        if (b && b.uuid && b.uuid !== "NO_UUID") {
            a.fetchContent({
                photoId: b.photoId,
                url: b.url,
                uuid: b.uuid,
                vvid: b.vvid
            }, {}, true);
        } else {
            a.closeViewer(true);
        }
    },
    fetchSponsoredMomentsAds: function(f, a) {
        var b = this;
        if (!b.smadEnabled || !b.sponsoredMomentsAdFetchUrl || !b.wfUtils) {
            b.fetchAdsWithDelay(f, a);
            return;
        }
        if (f && f.contentType === "video") {
            b.fetchAdsWithDelay(f, a);
            return;
        }
        var e = b.sponsoredMomentsAdFetchUrl;
        e += "&rid=" + b.rid;
        if (f && f.adMeta && f.adMeta.spaceid) {
            e += "&spaceId=" + f.adMeta.spaceid;
        }
        if (this.smadSpaceidBlackList) {
            e += "&blacklistSpaceid=" + escape(this.smadSpaceidBlackList);
        }
        if (this.smadAdFloorPrice) {
            e += "&adFloorPrice=" + escape(this.smadAdFloorPrice);
        }
        if (this.smadType && !f.hasYahooVideo && f.contentType !== "preview") {
            e += "&adsType=" + escape(this.smadType);
        }
        if (this.smadContainerSize) {
            e += "&containerSize=" + escape(this.smadContainerSize);
        }
        if (this.enablesmAdDedupe && this.dedupeADIDs) {
            e += "&ignore_ids=" + escape(this.dedupeADIDs.join(","));
        }
        if (this.smadCluster) {
            e += "&adsCluster=" + escape(this.smadCluster) + "&buttonColor=" + escape(this.buttonColor) + "&portraitBackgroundImages=" + escape(this.portraitBackgroundImages) + "&indicatorColor=" + escape(this.indicatorColor);
        }
        if (this.smadPlayableMoment) {
            e += "&adsPlayableMomentsEnabled=" + escape(this.smadPlayableMoment);
        }
        if (this.smadFlashSales) {
            e += "&adsFlashSaleEnabled=" + escape(this.smadFlashSales) + "&flashSaleText=" + escape(this.smadFlashSaleText);
        }
        if (this.flashSaleDynamicMoments) {
            e += "&flashSaleDynamicMoments=" + escape(this.flashSaleDynamicMoments);
        }
        if (this.touchPointsEnabled) {
            e += "&adsTouchPointsEnabled=" + escape(this.touchPointsEnabled);
        }
        if (this.fallbackEnabled) {
            e += "&adsFallbackEnabled=" + escape(this.fallbackEnabled);
        }
        if (this.adFormats) {
            e += "&adFormats=" + escape(this.adFormats);
        }
        if (this.adServiceEndpointEnabled) {
            e += "&adServiceEndpointEnabled=" + escape(this.adServiceEndpointEnabled);
        }
        var g = (f && f.adMeta && f.adMeta.site) || b.rKeys.site;
        if (g) {
            if (this.smadSiteBlackList.indexOf(g) >= 0) {
                b.fetchAdsWithDelay(f, a);
                return;
            }
            e += "&site=" + g;
            if (b.smadSectionId && b.smadSectionId[g]) {
                e += "&sectionId=" + escape(b.smadSectionId[g]);
            }
        }
        b.wfUtils.fetchWithCache(e, {
            cache: 0
        }).then(function d(j) {
            var o = f.contentType || "story";
            var i = "caas-da";
            if (o === "preview") {
                i = "ad-LREC2";
                var h = DOC.getElementById("defaultLREC");
                if (h) {
                    h.style.display = "none";
                }
            }
            var m = Array.prototype.slice.call(b.caasViewerEl.getElementsByClassName(i));
            if (j && j.html && j.html.match("wafer") && m && m.length > 0) {
                var k;
                if (b.monEnabled && m.length > 1) {
                    m[0].style.display = "none";
                    m[1].innerHTML = j.html;
                    k = m[1].getElementsByClassName("js-sponsored-moments");
                } else {
                    m[0].innerHTML = j.html;
                    k = m[0].getElementsByClassName("js-sponsored-moments");
                    if (b.monEnabled && m[1]) {
                        m[1].style.display = "none";
                    }
                }
                WIN.wafer && WIN.wafer.base && WIN.wafer.base.sync(b.caasViewerEl);
                b.smadNode = k && k.length > 0 && k[0] || null;
                b.smadHideReactionsBar = b.smadNode && o !== "preview";
                b.smadShouldCountView = true;
                if (o === "preview") {
                    if (b.monEnabled && m.length > 1) {
                        m[1].style.marginLeft = "20px";
                        m[1].style.marginRight = "20px";
                    } else {
                        m[0].style.marginLeft = "20px";
                        m[0].style.marginRight = "20px";
                    }
                }
                if (b.smadNode && b.smadNode.classList && b.smadNode.classList.contains("caas-yvideo-player")) {
                    b.caasInstance.sync();
                }
                if (b.smadNode && b.smadNode.classList && b.smadNode.classList.contains("js-playable-moments") && window.sponsoredMomentsMonitor) {
                    var l = true;
                    window.sponsoredMomentsMonitor.renderPlayableMomentsIframe(b.smadNode, l);
                }
                b.startScrollHandler();
                var n = b.smadNode && b.smadNode.querySelector(".js-panorama-scroll-view");
                if (n) {
                    n.scrollLeft = (n.scrollWidth - browserWidth) / 2;
                }
                if (b.forceLrec2) {
                    b.fetchAdsWithDelay(f, a, true);
                }
            } else {
                b.beacon({
                    beaconType: "caas_viewer",
                    info: "article_smad_noad"
                });
                b.fetchAdsWithDelay(f, a);
            }
        }, (function c(h) {
            b.beacon({
                beaconType: "caas_viewer",
                error: "article_smad_failed",
                error_msg: h && h.message
            });
            b.fetchAdsWithDelay(f, a);
        }));
    },
    fetchAdsWithDelay: function(d, c, a) {
        var b = this;
        if (c > 0) {
            setTimeout(function() {
                b.fetchAds(d, a);
            }, c);
        } else {
            b.fetchAds(d, a);
        }
    },
    fetchEditorialPromo: function() {
        var a = this;
        if (a.editorialPromoModule && a.editorialPromoEl) {
            var c = a.xhrPath + a.editorialPromoModule + "&region=" + a.region + "&lang=" + a.lang;
            var b = DOC.createElement("div");
            b.classList.add("wafer-fetch");
            b.setAttribute("data-wf-trigger", "viewport");
            b.setAttribute("data-wf-trigger-offset", "600 0");
            b.setAttribute("data-wf-url", c);
            a.editorialPromoEl.appendChild(b);
            window.wafer.base.sync(a.editorialPromoEl);
        }
    },
    fetchRelatedContent: function(d) {
        var a = this;
        if (a.caasRelatedContentEl && a.relatedContentModules[d.contentType]) {
            var b = a.xhrPath + a.relatedContentModules[d.contentType];
            b = b.replace("{uuid}", d.uuid);
            var c = DOC.createElement("div");
            c.classList.add("wafer-fetch");
            c.style.marginLeft = "20px";
            c.style.marginRight = "20px";
            c.setAttribute("data-wf-trigger", "viewport");
            c.setAttribute("data-wf-trigger-offset", "600 0");
            c.setAttribute("data-wf-url", b);
            a.caasRelatedContentEl.appendChild(c);
            window.wafer.base.sync(a.caasRelatedContentEl);
        }
    },
    startScrollHandler: function() {
        var a = this;
        a.debouncedScroll = a.wfUtils.throttle(a.scrollHandler, 50, a);
        a.debouncedResize = a.wfUtils.throttle(a.resizeHandler, 50, a);
        WIN.addEventListener("scroll", a.debouncedScroll);
        WIN.addEventListener("resize", a.debouncedResize);
    },
    resizeHandler: function() {
        browserHeight = WIN.innerHeight || DOC.documentElement.clientHeight;
        browserWidth = WIN.innerWidth || DOC.documentElement.clientWidth;
        this.scrollHandler();
    },
    scrollHandler: function() {
        var c = this;
        if (c.smadNode) {
            var f = c.smadNode.getBoundingClientRect();
            var h = 0;
            var e = 0;
            var a = 60;
            var d = c.smadNode.getElementsByClassName("js-image-container-full-screen");
            if (f.left <= browserWidth && f.right >= h && f.top <= browserHeight && f.bottom >= e) {
                if (c.smadHideReactionsBar) {
                    if (f.bottom >= (browserHeight - a)) {
                        DOC.body.classList.add("sponsored-moments-in-view");
                    } else {
                        if (!d || d.length <= 0) {
                            DOC.body.classList.remove("sponsored-moments-in-view");
                        }
                    }
                }
                var g = Math.min(f.bottom, browserHeight) - Math.max(f.top, e);
                if (g >= f.height * 0.5) {
                    if (c.smadShouldCountView) {
                        c.smadViewCount++;
                        if (this.enablesmAdDedupe) {
                            var b = DOC.querySelector("#caas-content .caas-da .js-sponsored-moments").dataset.id;
                            if (this.dedupeADIDs.indexOf(b) === -1) {
                                this.dedupeADIDs.push(b);
                            }
                        }
                        c.smadShouldCountView = false;
                    }
                    c.smadEnabled = c.smadViewCount < c.smadViewMaxLimit;
                }
            } else {
                if (!d || d.length <= 0) {
                    DOC.body.classList.remove("sponsored-moments-in-view");
                }
            }
        }
    },
    stopScrollHandler: function() {
        if (this.debouncedScroll) {
            WIN.removeEventListener("scroll", this.debouncedScroll);
            this.debouncedScroll = null;
        }
        if (this.debouncedResize) {
            WIN.removeEventListener("resize", this.debouncedResize);
            this.debouncedResize = null;
        }
    },
    onMonAdResponse: function(c) {
        var d = this;
        var e = this.history.getState().uuid;
        var f = this.items[e];
        if (c.MOMENTS && c.MOMENTS.validAd) {
            var b = DOC.querySelectorAll("#content-viewer .smad-container");
            if (b && b.length > 0) {
                b[0].style.display = "block";
                if (c.MOMENTS.posData && c.MOMENTS.posData.meta && c.MOMENTS.posData.meta.y && c.MOMENTS.posData.meta.y.slotData && c.MOMENTS.posData.meta.y.slotData.trusted_custom === "true") {
                    b[0].classList.add("smad-scroller");
                    this.smadNode = b[0];
                    this.startScrollHandler();
                }
            }
            var a = DOC.getElementById("defaultLREC");
            if (a) {
                a.style.display = "none";
            }
            if (d.forceLrec2) {
                d.fetchAdsWithDelay(f.partnerData, d.smadNextAdCallDelay, true);
            }
        } else {
            if ((!c.MOMENTS || !c.MOMENTS.validAd) && this.smadEnabled) {
                this.fetchSponsoredMomentsAds(f.partnerData, this.smadNextAdCallDelay);
            } else {
                d.fetchAdsWithDelay(f.partnerData, this.smadNextAdCallDelay);
            }
        }
    },
    fetchMonAds: function(c) {
        if (!this.enableDisplayAds) {
            return;
        }
        var b = c && c.adMeta || null;
        if (!this.DARLA) {
            this.DARLA = WIN.DARLA || null;
        }
        if (b.pos && b.spaceid && this.DARLA) {
            if (this.DARLA.inProgress()) {
                this.DARLA.abort();
            }
            this.DARLA.add({
                name: "monAdFetch",
                ps: ["MOMENTS"],
                sa: b.site_attribute + ' Y-BUCKET="' + this.bucket + '" ' + this.extraSiteAttribute,
                sp: b.spaceid,
                npv: true,
                ssl: true,
                ult: this.adsUlt,
            });
            var a = Math.floor(browserWidth * 16 / 9);
            this.DARLA.addPos({
                pos: "MOMENTS",
                dest: "defaultdestMOMENTS",
                w: browserWidth,
                h: a,
                flex: {
                    w: {
                        min: browserWidth
                    },
                    h: {
                        min: a
                    }
                },
                supports: {
                    "exp-ovr": 1,
                    "exp-push": 1,
                    "resize-to": 1
                }
            });
            this.DARLA.event("monAdFetch");
        }
    },
    fetchAds: function(f, b) {
        if (!this.enableDisplayAds) {
            return;
        }
        var e = f && f.adMeta || null;
        var d = this;
        if (!this.DARLA) {
            this.DARLA = WIN.DARLA || null;
        }
        if (e.pos && e.spaceid && this.DARLA) {
            var c;
            if (this.DARLA.inProgress()) {
                this.DARLA.abort();
            }
            var c = e.pos.split(",");
            if (b) {
                c = c.filter(function(g) {
                    return g !== "LREC";
                });
            }
            c.push("LREC2");
            this.DARLA.add({
                name: "adFetch",
                ps: c,
                sa: e.site_attribute + ' Y-BUCKET="' + this.bucket + '" ' + this.extraSiteAttribute,
                sp: e.spaceid,
                npv: true,
                ssl: true,
                ult: this.adsUlt
            });
            c.forEach(function a(g) {
                if (g) {
                    d.DARLA.addPos({
                        pos: g,
                        dest: "default" + g,
                        w: 300,
                        h: 250
                    });
                }
            });
            this.DARLA.event("adFetch");
        }
    },
    rotateIdxPageWfpadAd: function() {
        var b = WIN.rapidPageConfig && WIN.rapidPageConfig.rapidConfig && WIN.rapidPageConfig.rapidConfig.spaceid || null;
        var a = WIN.C && WIN.C.positions && WIN.C.positions.WFPAD || null;
        if (b && a && this.DARLA) {
            if (this.DARLA.inProgress()) {
                this.DARLA.abort();
            }
            this.DARLA.add({
                name: "hlfp",
                ps: a.pos,
                sp: b,
                sa: 'Y-BUCKET="' + this.bucket + '" ' + this.extraSiteAttribute,
                npv: true,
                ssl: true,
                ult: this.adsUlt
            });
            this.DARLA.addPos(a);
            this.DARLA.event("hlfp");
        }
    },
    beaconPageView: function(d, b) {
        if (!this.rapidInstance) {
            this.rapidInstance = this.getRapidInstance();
        }
        if (this.rapidInstance) {
            var c = Object.assign({}, this.rConfig, {
                spaceid: this.rConfig.spaceid || DEFAULT_HP_SPACEID,
                keys: Object.assign({}, this.rKeys, {
                    _R: b || "",
                    _w: WIN.location.href,
                    navtype: "client",
                    pt: this.basePageEl.getAttribute("data-i13n-pt") || "home"
                })
            });
            var a = this.pageParams = c.keys;
            if (d && d.spaceId) {
                a.pt = "content";
                a.p_cpos = "1";
                a.pcp = d.publisher;
                a.pct = d.contentType || d.type || "story";
                a.pd = "modal";
                a.pstaid = d.uuid;
                a.site = d.adMeta && d.adMeta.site || this.rKeys.site;
                if (d.hostedType && d.hostedType === "hosted") {
                    a.p_hosted = "onnet";
                } else {
                    a.p_hosted = "offnet";
                }
                this.beacon({
                    beaconType: "caas_viewer",
                    info: "show_viewer"
                });
                c.spaceid = d.spaceId;
            }
            this.rapidInstance.reInit(c);
            this.rapidInstance.beaconPageview();
        }
    },
    loadSidekick: function(d, c) {
        var a = this;
        if (!a.enableCaaSSidekick) {
            return;
        }
        var b = a.pageParams;
        a.sidekickElem = document.getElementById("caas-sidekick");
        if (a.sidekickElem) {
            a.sidekickElem.parentNode.removeChild(a.sidekickElem);
        }
        a.sidekickElem = document.createElement("div");
        a.sidekickElem.setAttribute("id", "caas-sidekick");
        a.sidekickElem.setAttribute("data-url", "/caas/sidekick/sidekick?uuid=" + d.uuid + "&region=" + a.region + "&device=smartphone&lang=" + a.lang + "&appid=scooby&spaceId=" + (d.spaceId || "") + "&ycts=" + (d.ycts || "") + "&wikis=" + (d.wikiids || "") + "&site=fp");
        a.sidekickElem.setAttribute("data-namespace", "CAAS_SIDEKICK");
        a.sidekickElem.setAttribute("data-cache", "0");
        a.sidekickElem.classList.add("caas-module");
        a.sidekickElem.innerHTML = "&nbsp;";
        a.caasViewerEl.appendChild(a.sidekickElem);
        WIN.CAAS.LOADER({
            callback: function(e, f) {
                if (e) {
                    return;
                }
                if (f.base) {
                    f.base.on("link:clicked", function(i) {
                        if (a.enableViewerLinkOpenViewer && i.isYahoo) {
                            a.rapidInstance.beaconClick(i.sec, i.slk, i.pos || 0, i.params || {}, i.outcm || null, function() {
                                var k = i.params.tar_uri;
                                a.fetchContent({
                                    url: k
                                });
                            });
                            return;
                        }
                        var h = DOC.body.classList.contains("connection-offline");
                        var g = i.href;
                        var j = !i.target || i.target === "_blank";
                        if (!h && g && j) {
                            WIN.open(g, "_blank").opener = null;
                        } else {
                            g = a.getUrlToUse(g);
                        }
                        a.rapidInstance.beaconClick(i.sec, i.slk, i.pos || 0, i.params || {}, i.outcm || null, function() {
                            if (!h && g && !j) {
                                WIN.location.href = g;
                            }
                        });
                    });
                    if (f.module && f.module.on) {
                        f.module.on("mounted", function() {
                            a.caasInstance.sync();
                        });
                        f.module.on("updated", function() {
                            a.caasInstance.sync();
                        });
                    }
                }
            }
        });
    },
    initCaas: function(c) {
        c = c || {};
        var b = this;
        var a = c.photoId;
        b.caasInstance = new WIN.CAAS.BASE({
            container: "content-viewer",
            isFrozen: this.commentsExpanded
        });
        if (b.rapidInstance) {
            b.caasInstance.on("link:clicked", function(g) {
                if (b.enableViewerLinkOpenViewer && g.isYahoo) {
                    var e = g.params.tar_uri;
                    b.fetchContent({
                        url: e
                    });
                    return;
                }
                var f = DOC.body.classList.contains("connection-offline");
                var d = g.href;
                var h = !g.target || g.target === "_blank";
                if (!f && d && h) {
                    WIN.open(d, "_blank").opener = null;
                } else {
                    d = b.getUrlToUse(d);
                }
                b.rapidInstance.beaconClick(g.sec, g.slk, g.pos || 0, g.params || {}, g.outcm || null, function() {
                    if (!f && d && !h) {
                        WIN.location.href = d;
                    }
                });
            });
            b.caasInstance.on("ready", function() {
                if (a) {
                    b.caasInstance.scrollToPhoto(a, {
                        y: b._scrollToPhotoOffsetY
                    });
                }
            });
        }
        b.caasInstance.on("yvideo:playerError", this.handleVideoError);
        if (this.hideCommentsForSlick) {
            b.caasInstance.on("yvideo:ready", this.setDisplayForSlick);
            b.caasInstance.on("yvideo:dockChange", this.setDisplayForSlick);
            b.caasInstance.on("yvideo:positionChange", this.setDisplayForSlick);
        }
    },
    handleVideoError: function(a) {
        if (!a) {
            return;
        }
        if (a.isSlick) {
            this.isSlickInBg = false;
            DOC.body.classList.remove("slick-in-view");
        }
    },
    setDisplayForSlick: function(b) {
        var a = this.caasInstance.state || {};
        if (!b.isSlick || a.isFrozen) {
            return;
        }
        if (b.isDocked || !b.isInViewport) {
            DOC.body.classList.remove("slick-in-view");
        } else {
            DOC.body.classList.add("slick-in-view");
        }
    },
    startDwell: function(b) {
        var a = this.rapidInstance;
        if (a) {
            a.beaconClick("rapidDwell", "", 0, {}, "", null, {
                dwell: "stop"
            });
            a.setRapidAttribute({
                keys: {
                    pct: b
                }
            });
            a.beaconClick("rapidDwell", "", 0, {}, "", null, {
                dwell: "start"
            });
        }
    },
    onCanvassInit: function(b, a) {
        return function c(d) {
            this.beacon({
                beaconType: "cmmtsDur",
                time: Math.floor(Date.now() - b),
                uuid: a
            });
            if (d && d.isExpanded) {
                this.onCanvassExpanded();
            }
        };
    },
    onCanvassExpanded: function() {
        if (!this.commentsExpanded) {
            this.commentsExpanded = true;
            this.caasViewerScrollPos = {
                scrollX: WIN.scrollX,
                scrollY: WIN.scrollY
            };
            this.caasViewerEl.style.top = -WIN.scrollY + "px";
            this.caasViewerEl.classList.add("no-scroll");
            this.isSlickInBg = this.caasViewerEl.className && (DOC.body.className.indexOf("slick-in-view") > -1);
            if (this.isSlickInBg) {
                DOC.body.classList.remove("slick-in-view");
            }
            this.caasInstance && this.caasInstance.componentShouldFreeze && this.caasInstance.componentShouldFreeze();
            this.startDwell("comments");
        }
    },
    onCanvassCollapsed: function() {
        if (this.commentsExpanded) {
            if (this.isSlickInBg) {
                DOC.body.classList.add("slick-in-view");
            }
            this._clearCanvass();
            this.caasInstance && this.caasInstance.componentShouldResume && this.caasInstance.componentShouldResume();
            this.startDwell(this.pageParams.pct);
            this.caasViewerEl.focus();
        }
    },
    _clearCanvass: function() {
        this.commentsExpanded = false;
        this.caasViewerEl.classList.remove("no-scroll");
        this.caasViewerEl.style.top = "";
        this.caasViewerScrollPos && this.caasViewerScrollPos.scrollY && WIN.scrollTo(this.caasViewerScrollPos.scrollX, this.caasViewerScrollPos.scrollY);
        this.caasViewerScrollPos = {};
        this.isSlickInBg = false;
    },
    initComments: function(a, e) {
        if (!a || !e || !e.adMeta || !e.commentsAllowed || !YAHOO.CanvassComments) {
            return null;
        }
        var c = e.adMeta;
        var d = e.hostedType === "hosted" ? "yahoo_content" : "yahoo_offnet";
        var b = this.pageParams;
        this.comments = new YAHOO.CanvassComments("community-bar", {
            apptype: this.appType,
            context: e.uuid,
            contextDisplayText: e.title,
            contextUrl: e.previewLink || e.url,
            device: this.device,
            namespace: d,
            expanded: a.indexOf("bcmt") !== -1 ? 1 : 0,
            spaceid: c.spaceid,
            lang: c.lang,
            region: c.region,
            site: this.rKeys.site,
            rapidKeys: {
                _rid: this.rid,
                mrkt: b.mrkt,
                navtype: b.navtype,
                p_cpos: b.p_cpos,
                p_hosted: b.p_hosted,
                pcp: b.pcp,
                pct: "comments",
                pd: b.pd,
                pstaid: b.pstaid,
                pt: b.pt,
                site: b.site,
                ver: b.ver
            },
            bucket: this.bucket,
            prid: this.rid,
            onInitialized: this.onCanvassInit(Date.now(), e.uuid).bind(this),
            onExpanded: this.onCanvassExpanded,
            onCollapsed: this.onCanvassCollapsed
        });
    },
    closeViewer: function(b) {
        var a = this;
        var c = WIN.location.href;
        WIN.wafer && WIN.wafer.base && WIN.wafer.base.destroy(a.caasViewerEl);
        a.caasInstance && a.caasInstance.destructor();
        a.caasContentEl.innerHTML = "";
        a.caasRelatedContentEl.innerHTML = "";
        a.caasInstance = null;
        a.adLrec2El.innerHTML = '<div id="defaultLREC2"></div>';
        a.caasViewerEl.classList.remove("caas-slick-video");
        DOC.body.classList.remove("sponsored-moments-in-view", "slick-in-view");
        a.caasViewerEl.classList.remove("sponsored-moments-lrec2");
        a.comments && a.comments.destroy();
        a.comments = null;
        a._clearCanvass();
        a.basePageEl.classList.add("promote-opacity");
        DOC.documentElement.classList.add("Reader-closed");
        DOC.documentElement.classList.remove("Reader-open");
        WIN.scrollTo(a.savedX, a.savedY);
        a.stopScrollHandler();
        a.delayLoadViewerComponents && clearTimeout(a.delayLoadViewerComponents);
        if (a.editorialPromoEl) {
            a.editorialPromoEl.innerHTML = "";
        }
        if (!b) {
            a.history.pushState({
                url: a.prevUri
            }, "Yahoo", a.prevUri);
        } else {
            a.history.setTitle("Yahoo");
        }
        a.canonicalEl.setAttribute("href", a.canonicalElStartVal);
        if (a.rapidInstance) {
            a.rapidInstance.beaconClick("hl-viewer", "close-back-btn", 1, {
                elm: "backbtn",
                itc: 0,
                tar: WIN.location.host,
                tar_uri: "/"
            }, "", null, {
                dwell: "stop"
            });
            a.beaconPageView(null, c);
        }
        this.beaconAdobeClose();
        setTimeout(function() {
            WIN.scrollTo(a.savedX, a.savedY);
            if (Y.videoManagerMobileCards) {
                Y.videoManagerMobileCards.enablePlayers();
            }
            if (window.viewerNotify) {
                window.viewerNotify("closeviewer");
            }
            a.rotateIdxPageWfpadAd();
            a.beaconComscore();
            a.beaconNielsen();
            a.beacon({
                beaconType: "caas_viewer",
                info: "close_viewer"
            });
            a.basePageEl.classList.remove("promote-opacity");
            var d = window.wafer.wafers["wafer-video"];
            if (d) {
                if (d.__esModule === true) {
                    d["default"].resume("caas-viewer");
                } else {
                    d.resume("caas-viewer");
                }
            }
        }, 0);
        a.basePageEl && a.basePageEl.setAttribute("aria-hidden", false);
        a.streamLinkClicked && a.setVoiceOverFocus(a.streamLinkClicked);
        WIN.contentViewerCloseAdCb && WIN.contentViewerCloseAdCb();
        a.clearArticleRelatedComponents();
    },
    clearArticleRelatedComponents: function() {
        var a = this;
        DOC.body.classList.remove("caas-video-docked");
        if (a.progressButton) {
            window.wafer.base.destroy(a.progressButton);
            a.progressButton.parentNode.removeChild(a.progressButton);
            a.progressButton = null;
        }
    },
    showViewer: function(k, a, j, h) {
        var l = this;
        if (!WIN.CAAS || !WIN.CAAS.BASE) {
            l.beacon({
                beaconType: "caas_viewer",
                error: "missing_caas_js"
            });
            l.goToDeeplink(a);
            return;
        }
        j = j || {};
        var d = window.wafer.wafers["wafer-video"];
        if (d) {
            if (d.__esModule === true) {
                d["default"].pause("caas-viewer");
            } else {
                d.pause("caas-viewer");
            }
        }
        var b = j.photoId;
        var m = j.vvid;
        var e = k.partnerData;
        var g = l.generateOpenInAppUrl(e, a);
        var f = e.hasSlickVideo;
        var i = e.type;
        if (f) {
            l.caasViewerEl.classList.add("caas-slick-video");
            DOC.body.classList.add("slick-in-view");
        }
        if (Y.videoManagerMobileCards) {
            Y.videoManagerMobileCards.disablePlayers();
        }
        if (window.viewerNotify) {
            window.viewerNotify("showviewer");
        }
        l.clearArticleRelatedComponents();
        l.caasInstance && l.caasInstance.destructor();
        l.caasInstance = null;
        l.caasRelatedContentEl.innerHTML = "";
        l.caasContentEl.innerHTML = k.markup;
        l.comments && l.comments.destroy();
        l.comments = null;
        l._clearCanvass();
        l.commentsExpanded = false;
        if (l.editorialPromoEl) {
            l.editorialPromoEl.innerHTML = "";
        }
        if (g && !f) {
            l.openInAppEl.href = g;
            l.openInAppEl.setAttribute("style", "display: block;");
        } else {
            l.openInAppEl && l.openInAppEl.setAttribute && l.openInAppEl.setAttribute("style", "display: none;");
        }
        if (!DOC.documentElement.classList.contains("Reader-open")) {
            l.savedX = WIN.scrollX;
            l.savedY = WIN.scrollY;
            DOC.documentElement.classList.add("Reader-open");
            DOC.documentElement.classList.remove("Reader-closed");
        }
        if (!j.photoId) {
            WIN.scrollTo(0, -100);
        }
        if (!h) {
            a = l.getUrlToUse(a);
            l.history.pushState({
                photoId: b,
                url: a,
                uuid: e.uuid,
                vvid: m
            }, e.title, a);
        } else {
            l.history.setTitle(e.title);
        }
        l.canonicalEl.setAttribute("href", e.url);
        if (window.c2s_event) {
            window.c2s_event("ready", {
                articleId: e.uuid,
                contentRootNode: l.caasContentEl
            });
        }
        if (a.indexOf("bcmt") !== -1) {
            l.delayLoadViewerComponents = setTimeout(l.initViewerComponents.bind(l, k, j), 1000);
        } else {
            l.initViewerComponents(k, j);
            if (!f) {
                l.caasInstance && l.setVoiceOverFocus(l.caasInstance._containers[0].getElementsByTagName("h1")[0]);
            }
        }
        l.initComments(a, e);
        if (i !== "video" && !f && window.wafer.wafers["wafer-progress-loader"]) {
            if (!j.photoId) {
                setTimeout(function() {
                    WIN.scrollTo(0, 0);
                }, 60);
            }
            var c = document.createElement("div");
            c.classList.add("progress-loader", "wafer-progress-loader");
            c.setAttribute("data-wf-stroke-color", "#430297");
            c.setAttribute("data-wf-type", "rectangle");
            c.setAttribute("data-wf-iteration-count", "infinite");
            c.setAttribute("data-wf-direction", "both");
            c.setAttribute("data-wf-scroll-height-container", "#caas-content");
            l.progressButton = document.createElement("div");
            l.progressButton.classList.add("progress-loader-bar-wrapper");
            l.progressButton.appendChild(c);
            document.getElementById("header-wrapper").appendChild(l.progressButton);
            window.wafer.base.sync(this.progressButton);
        }
    },
    initViewerComponents: function(c, b) {
        var a = WIN.location.href;
        var d = c.partnerData;
        this.initCaas(b);
        this.loadSidekick(d, b);
        if (window.c2s_event) {
            window.c2s_event("display", {
                articleId: d.uuid
            });
        }
        this.beaconPageView(d, a);
        this.beaconComscore(d.adMeta && d.adMeta.site, d.spaceId);
        this.beaconNielsen();
        this.beaconAdobeOpen();
        if (this.monEnabled) {
            this.fetchMonAds(d);
        } else {
            if (this.smadEnabled) {
                this.fetchSponsoredMomentsAds(d);
            } else {
                this.fetchAds(d);
            }
        }
        this.fetchRelatedContent(d);
        this.fetchEditorialPromo();
        WIN.contentViewerShowAdCb && WIN.contentViewerShowAdCb();
    },
    setVoiceOverFocus: function(c) {
        var e = 10;
        var a = 10;
        var d = 0;
        c.setAttribute("tabindex", "0");
        c.blur();
        var b = WIN.setInterval(function() {
            c.focus();
            d++;
            if (d >= a) {
                WIN.clearInterval(b);
            }
        }, e);
    },
    initContentPrefetcher: function() {
        if (!WIN.MutationObserver) {
            return;
        }
        var f = DOC.querySelectorAll(".content-prefetch-container");
        var d = this;
        if (!f) {
            return;
        }
        var c = new MutationObserver(function a(g) {
            setTimeout(function() {
                var h = [];
                g.forEach(function(i) {
                    if (i.type === "childList") {
                        if (i.addedNodes && i.addedNodes.length > 0) {
                            h = h.concat(Array.prototype.slice.call(i.target.querySelectorAll("li[data-uuid], a[data-uuid]")));
                        }
                    }
                });
                if (h.length) {
                    d.prefetchContent(h, "stream_scroll");
                    d.beaconNielsen(true);
                }
            }, 25);
        });
        var e = {
            childList: true,
            subtree: true
        };
        f.forEach(function b(g) {
            c.observe(g, e);
        });
    },
    prefetchAboveFoldItems: function() {
        var a = this;
        this.aboveFoldModList.forEach(function(c) {
            var f = c.split(":");
            var e = f[0];
            var d = f[1] + "_af";
            var b = DOC.querySelectorAll("#" + e + " a[data-uuid]");
            b.length && a.prefetchContent(Array.prototype.slice.call(b), d);
        });
    },
    prefetchContent: function(h, b) {
        if (!Array.isArray(h)) {
            return;
        }
        var l = this;
        var k = [];
        var g = {};
        for (var e = 0; e < h.length; e++) {
            var a = h[e].getAttribute && h[e].getAttribute("data-uuid") || null;
            if (a && !l.items[a] && typeof g[a] === "undefined") {
                g[a] = 1;
                k.push(a);
            }
        }
        if (k && !k.length) {
            return;
        }
        k = k.sort();
        for (var e = 0, d = k.length; e < d; e += l.prefetchBatchSize) {
            var c = k.slice(e, e + l.prefetchBatchSize);
            var f = l.caasXhrUrl + "&uuid=" + c.join();
            l.wfUtils.fetchWithCache(f, {
                cache: 0,
                timeout: 8000
            }).then(l.handlePrefetchSuccess.bind(l, f, c), l.handlePrefetchFailure.bind(l, f, b));
        }
    },
    isCaaSContentValid: function(a) {
        return a && a.markup && a.partnerData && a.partnerData.uuid;
    },
    handlePrefetchSuccess: function(g, c, a) {
        var h = a.meta || null;
        var o = a.html || null;
        var j = this;
        if (!h || !o) {
            j.beacon({
                beaconType: "caas_viewer",
                error: "prefetch_empty_meta_markup"
            });
            return;
        }
        if (Array.isArray(h) && Array.isArray(o)) {
            var f = {};
            for (var r = 0; r < h.length; r++) {
                var d = h[r] && h[r].partnerData;
                if (d) {
                    var b = d.uuid;
                    if (b) {
                        f[b] = {
                            partnerData: d
                        };
                    }
                }
            }
            for (var q = 0; q < o.length; q++) {
                var s = o[q];
                var p = CAAS_UUID_REGEX.exec(s);
                var k = s && p && (p.length > 0) && p[1];
                if (f[k]) {
                    f[k].markup = s;
                }
            }
            for (var l = 0; l < c.length; l++) {
                var m = c[l];
                var e = m && f[m];
                var u = encodeURIComponent(g);
                if (j.isCaaSContentValid(e)) {
                    if (WIN.wafer && WIN.wafer.db) {
                        WIN.wafer.db.set({
                            cachedTime: Date.now(),
                            key: m + ":" + j.cacheKeyPostFix,
                            ttl: ARTICLE_CACHE_TTL,
                            values: e
                        }, "fetch").then(function n() {}, function t() {});
                    }
                    j.items[m] = e;
                } else {
                    j.beacon({
                        beaconType: "caas_viewer",
                        error: "prefetch_batch_uuid_data_missing",
                        uuid: m,
                        url: u
                    });
                }
            }
        }
    },
    handlePrefetchFailure: function(c, a, d) {
        var b = d && d.message || "";
        this.beacon({
            beaconType: "caas_viewer",
            error: "prefetch_api_failure_" + a,
            error_msg: encodeURIComponent(b),
            url: encodeURIComponent(c)
        });
    },
    goToDeeplink: function(a) {
        a = this.getUrlToUse(a);
        this.beacon({
            beaconType: "caas_viewer",
            error: "view_in_deeplink",
            url: encodeURIComponent(a)
        });
        setTimeout(function() {
            WIN.location.href = a;
        });
    },
    handleCaasSingleUuuidFailure: function(m, i, g, l) {
        g = g || {};
        var d = encodeURIComponent(i);
        var n = this;
        var j = g.t0 || 0;
        var h = g.t1 || 0;
        var f = g.t2 || 0;
        var e = g.t3 || 0;
        var b = m.url;
        var a = m.uuid;
        if (WIN.wafer && WIN.wafer.db) {
            WIN.wafer.db.get(a + ":" + n.cacheKeyPostFix, "fetch").then(function c(r) {
                if (!r || !r.values) {
                    n.beacon({
                        beaconType: "caas_viewer",
                        error: "cache_fallback_values_missing",
                        uuid: a,
                        url: encodeURIComponent(i)
                    });
                    n.goToDeeplink(b);
                    return;
                }
                var p = r.values || {};
                var s = p.partnerData;
                var o = p.markup;
                if (!s || !o) {
                    n.beacon({
                        beaconType: "caas_viewer",
                        error: "cache_fallback_markup_missing",
                        uuid: a,
                        url: d
                    });
                    n.goToDeeplink(b);
                    return;
                }
                var q = {
                    partnerData: s,
                    markup: o
                };
                n.items[a] = q;
                e = Date.now();
                n.showViewer(q, b, m, l);
                n.beaconClk2Cnt({
                    t0: j,
                    t1: h,
                    t2: f,
                    t3: e
                }, a);
            }, function k(o) {
                n.beacon({
                    beaconType: "caas_viewer",
                    error: "cache_fallback_failed",
                    error_msg: o && o.message,
                    uuid: a,
                    url: d
                });
                n.goToDeeplink(b);
            });
        } else {
            n.goToDeeplink(b);
        }
    },
    fetchContent: function(l, e, j) {
        l = l || {};
        e = e || {};
        var k = "";
        var o = this;
        var h = e.t0 || 0;
        var f = e.t1 || 0;
        var d = Date.now();
        var c = 0;
        var b = l.url;
        var a = l.uuid;
        var n = o.items[a];
        if (o.isCaaSContentValid(n)) {
            c = Date.now();
            o.showViewer(n, b, l, j);
            o.beaconClk2Cnt({
                t0: h,
                t1: f,
                t2: d,
                t3: c
            }, a);
        } else {
            if (a) {
                k = "uuid=" + a;
            } else {
                k = "url=" + b;
            }
            var g = o.caasXhrUrl + "&" + k;
            o.wfUtils.fetchWithCache(g, {
                cache: 0
            }).then(function i(q) {
                var s = q.meta && q.meta[0] && q.meta[0].partnerData || null;
                var p = q.html && q.html[0] || null;
                if (!s || !p) {
                    o.beacon({
                        beaconType: "caas_viewer",
                        error: "fetch_empty_meta_markup",
                        url: encodeURIComponent(g)
                    });
                    o.handleCaasSingleUuuidFailure(l, g, {
                        t0: h,
                        t1: f,
                        t2: d,
                        t3: c
                    }, j);
                    return;
                }
                var r = {
                    partnerData: s,
                    markup: p
                };
                a = a || s.uuid;
                o.items[a] = r;
                c = Date.now();
                o.showViewer(r, b, l, j);
                o.beaconClk2Cnt({
                    t0: h,
                    t1: f,
                    t2: d,
                    t3: c
                }, a);
            }, function m(q) {
                var p = q && q.message || "";
                o.beacon({
                    beaconType: "caas_viewer",
                    error: "fetch_api_failure",
                    error_msg: encodeURIComponent(p),
                    url: encodeURIComponent(g)
                });
                o.handleCaasSingleUuuidFailure(l, g, {
                    t0: h,
                    t1: f,
                    t2: d,
                    t3: c
                }, j);
            });
        }
    }
}; /* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */