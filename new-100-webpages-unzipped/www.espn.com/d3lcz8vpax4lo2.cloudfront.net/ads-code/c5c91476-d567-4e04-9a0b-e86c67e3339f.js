Insticator.logger = (function() {
    "use strict";

    function getParameterByName(name) {
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.search);
        if (results === null) {
            return "";
        }
        return decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    var showLog = getParameterByName("insticator_log");
    return {
        logMessage: function(msg) {
            if (showLog) {
                console.log("INSTICATOR_MESSAGE: ", msg);
            }
        }
    }
})();
var InsticatorApp;
(function(InsticatorApp) {
    var isPageviewInfoReady = false;
    var Utils = (function() {
        function Utils() {}
        Utils.getReferrer = function() {
            return document.referrer;
        };
        Utils.getUrlQuery = function() {
            return document.location.search;
        };
        Utils.extractHostname = function(url) {
            var hostname;
            if (url.indexOf("//") > -1) {
                hostname = url.split('/')[2];
            } else {
                hostname = url.split('/')[0];
            }
            hostname = hostname.split(':')[0];
            hostname = hostname.split('?')[0];
            return hostname;
        };
        Utils.extractRootDomain = function(url) {
            var domain = this.extractHostname(url),
                splitArr = domain.split('.'),
                arrLen = splitArr.length;
            if (arrLen > 2) {
                domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
                if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
                    domain = splitArr[arrLen - 3] + '.' + domain;
                }
            }
            return domain;
        };
        Utils.UUID = function() {
            var dec2hex = [];
            for (var i_1 = 0; i_1 <= 15; i_1++) {
                dec2hex[i_1] = i_1.toString(16);
            }
            var uuid = '';
            for (var i = 1; i <= 36; i++) {
                if (i === 9 || i === 14 || i === 19 || i === 24) {
                    uuid += '-';
                } else if (i === 15) {
                    uuid += 4;
                } else if (i === 20) {
                    uuid += dec2hex[(Math.random() * 4 | 0 + 8)];
                } else {
                    uuid += dec2hex[(Math.random() * 16 | 0)];
                }
            }
            return uuid;
        };
        Utils.makeAjaxCall = function(method, url, data, callback) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    callback(xmlHttp.responseText);
                }
            };
            xmlHttp.open(method, url, true);
            xmlHttp.setRequestHeader("Content-type", "application/json");
            xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
            var jsonData = JSON.stringify(data);
            xmlHttp.send(jsonData);
        };
        Utils.documentReady = function(fn) {
            if (document.readyState != 'loading') {
                console.log("dom ready!");
                fn();
            } else if (document.addEventListener) {
                console.log("dom not ready, set up listener");
                document.addEventListener('DOMContentLoaded', fn);
            } else {
                console.log("ignore ie");
                fn();
            }
        };
        return Utils;
    }());
    var Cookie = (function() {
        function Cookie() {
            this.isCookieEnabled = this.checkCookieEnabled();
        }
        Cookie.prototype.checkCookieEnabled = function() {
            return navigator.cookieEnabled;
        };
        Cookie.prototype.get = function(name) {
            var nameLenPlus = (name.length + 1);
            return document.cookie.split(';').map(function(c) {
                return c.trim();
            }).filter(function(cookie) {
                return cookie.substring(0, nameLenPlus) === name + "=";
            }).map(function(cookie) {
                return decodeURIComponent(cookie.substring(nameLenPlus));
            })[0] || null;
        };
        Cookie.prototype.set = function(name, value, expiresInMins) {
            var date = new Date();
            date.setTime(date.getTime() + (expiresInMins * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = name + "=" + value + ";" + expires + ";path=/";
        };
        return Cookie;
    }());
    var Campaign = (function() {
        function Campaign(urlQuery) {
            var params = new URLSearchParams(urlQuery);
            console.log("params: ", params);
            this.source = params.get("utm_source");
            this.medium = params.get("utm_medium");
            this.campaign = params.get("utm_campaign");
            this.term = params.get("utm_term");
            this.content = params.get("utm_content");
        }
        Campaign.equals = function(oldCampaign, newCampaign) {
            return oldCampaign.source == newCampaign.source && oldCampaign.medium == newCampaign.medium && oldCampaign.campaign == newCampaign.campaign && oldCampaign.term == newCampaign.term && oldCampaign.content == newCampaign.content;
        };
        Campaign.isCampaignUpdated = function(oldCampaign, newCampaign) {
            var isCampaignUpdated = false;
            if (oldCampaign == null) {
                if (newCampaign != null) {
                    isCampaignUpdated = true;
                }
            } else {
                if (newCampaign != null && !this.equals(oldCampaign, newCampaign)) {
                    isCampaignUpdated = true;
                }
            }
            return isCampaignUpdated;
        };
        return Campaign;
    }());
    var Session = (function() {
        function Session(sessionLength, urlQuery) {
            this.id = this.generateId();
            this.referrer = this.getReferrer();
            this.campaign = new Campaign(urlQuery);
        }
        Session.prototype.generateId = function() {
            return Utils.UUID();
        };
        Session.prototype.calculateExpiration = function(sessionLength) {
            var date = new Date();
            date.setTime(date.getTime() + (sessionLength * 60 * 1000));
            return date.toUTCString();
        };
        Session.prototype.getReferrer = function() {
            return Utils.extractRootDomain(Utils.getReferrer());
        };
        return Session;
    }());
    var InstiSession = (function() {
        function InstiSession() {
            this.cookieName = "InstiSession";
            this.utils = new Utils();
            this.cookie = new Cookie();
        }
        InstiSession.prototype.calculateSessionLength = function() {
            var estTimeLocaleString = new Date().toLocaleString("en-US", {
                timeZone: "America/New_York"
            });
            var estTime = new Date(estTimeLocaleString);
            var sessionLength = 30;
            if (estTime.getHours() == 23 && estTime.getMinutes() > 30) {
                sessionLength = 60 - estTime.getMinutes();
            }
            return sessionLength;
        };
        InstiSession.prototype.getSessionForPageview = function() {
            var sessionLength = this.calculateSessionLength();
            var session = this.getSessionFromCookie();
            if (session == null) {
                session = new Session(sessionLength, Utils.getUrlQuery());
            } else {
                var currentReferrerDomain = Utils.extractRootDomain(Utils.getReferrer());
                var isReferrerDifferent = currentReferrerDomain !== "" && currentReferrerDomain !== session.referrer;
                if (isReferrerDifferent) {
                    session = new Session(sessionLength, Utils.getUrlQuery());
                } else {
                    var newCampaign = new Campaign(Utils.getUrlQuery());
                    var isCampaignChanged = Campaign.isCampaignUpdated(session.campaign, newCampaign);
                    if (isCampaignChanged) {
                        session = new Session(sessionLength, Utils.getUrlQuery());
                    }
                }
            }
            this.setSessionToCookie(session, sessionLength);
            console.log("session: ", session);
            return session;
        };
        InstiSession.prototype.getSessionForEmbed = function() {
            var sessionLength = this.calculateSessionLength();
            var session = this.getSessionFromCookie();
            if (session == null) {
                session = new Session(sessionLength, Utils.getUrlQuery());
            }
            this.setSessionToCookie(session, sessionLength);
            console.log("session: ", session);
            return session;
        };
        InstiSession.prototype.getSessionFromCookie = function() {
            var sessionString = this.cookie.get(this.cookieName);
            var session = JSON.parse(sessionString);
            return session;
        };
        InstiSession.prototype.setSessionToCookie = function(session, expiresInMins) {
            if (this.cookie.isCookieEnabled) {
                this.cookie.set(this.cookieName, JSON.stringify(session), expiresInMins);
                console.log("Cookie enabled, set cookie");
            } else {
                console.log("Cookie disabled");
            }
        };
        return InstiSession;
    }());
    var instiSession = new InstiSession();
    var PageviewType;
    (function(PageviewType) {
        PageviewType[PageviewType["HEADER_CODE_ONLY"] = 0] = "HEADER_CODE_ONLY";
        PageviewType[PageviewType["EMBED_ONLY"] = 1] = "EMBED_ONLY";
        PageviewType[PageviewType["AD_ONLY"] = 2] = "AD_ONLY";
        PageviewType[PageviewType["EMBED_AND_AD"] = 3] = "EMBED_AND_AD";
    })(PageviewType || (PageviewType = {}));
    var TopFrame = (function() {
        function TopFrame() {
            this.getClosestTop();
        }
        TopFrame.prototype.getClosestTop = function() {
            this.frame = window;
            this.isExceptionThrown = false;
            try {
                while (this.frame.parent.document !== this.frame.document) {
                    if (this.frame.parent.document) {
                        this.frame = this.frame.parent;
                    } else {
                        this.isExceptionThrown = true;
                        break;
                    }
                }
            } catch (e) {
                this.isExceptionThrown = true;
            }
        };
        return TopFrame;
    }());
    var topFrame = new TopFrame();
    var Pageview = (function() {
        function Pageview() {
            var _this = this;
            this.TIMEOUT = 1000;
            this.getPageviewInfo = function() {
                if (!isPageviewInfoReady) {
                    _this.pageUrl = _this.getBestPageUrl();
                    _this.ads = _this.getAdsOnPage();
                    _this.embeds = _this.getEmbedsOnPage();
                    _this.type = _this.getType();
                    _this.siteUUID = _this.getSiteUUID();
                    _this.session = instiSession.getSessionForPageview();
                    _this.timeStamp = new Date().toISOString();
                    _this.deviceType = _this.getDeviceType();
                    isPageviewInfoReady = true;
                }
                return _this;
            };
            this.firePageview = function() {
                var pageview = _this.getPageviewInfo();
                topFrame.frame.ads_list = topFrame.frame.ads_list || [];
                topFrame.frame.embeds_list = topFrame.frame.embeds_list || [];
                topFrame.frame.ads_list = topFrame.frame.ads_list.concat(pageview.ads);
                topFrame.frame.embeds_list = topFrame.frame.embeds_list.concat(pageview.embeds);
                if (!topFrame.frame.isPageviewSent) {
                    topFrame.frame.isPageviewSent = true;
                    console.log("Send pageview now");
                    var url_1 = "https://event.insticator.com/v1/event?event_name=event_pageview";
                    setTimeout(function() {
                        var formatedPageview = _this.formatPageview(pageview, topFrame.frame.ads_list, topFrame.frame.embeds_list);
                        console.log("formatedPageview: ", JSON.stringify(formatedPageview));
                        Utils.makeAjaxCall("POST", url_1, formatedPageview, function() {});
                    }, _this.TIMEOUT);
                } else {
                    console.log("pageview have been sent or scheduled");
                }
            };
        }
        Pageview.prototype.getType = function() {
            var type;
            if (this.ads.length === 0) {
                if (this.embeds.length === 0) {
                    type = PageviewType[PageviewType.HEADER_CODE_ONLY];
                } else {
                    type = PageviewType[PageviewType.EMBED_ONLY];
                }
            } else {
                if (this.embeds.length === 0) {
                    type = PageviewType[PageviewType.AD_ONLY];
                } else {
                    type = PageviewType[PageviewType.EMBED_AND_AD];
                }
            }
            return type;
        };
        Pageview.prototype.getPageUrl = function() {
            var topWindowPageUrl;
            try {
                topWindowPageUrl = window.top.location.href;
            } catch (e) {}
            return topWindowPageUrl == null ? document.referrer : topWindowPageUrl;
        };
        Pageview.prototype.getBestPageUrl = function() {
            var bestPageUrl = '';
            console.log("topFrame: ", topFrame);
            if (!topFrame.isExceptionThrown) {
                bestPageUrl = topFrame.frame.location.href;
            } else {
                try {
                    try {
                        bestPageUrl = window.top.location.href;
                    } catch (e) {
                        var aOrigins = window.location.ancestorOrigins;
                        bestPageUrl = aOrigins[aOrigins.length - 1];
                    }
                } catch (e) {
                    bestPageUrl = topFrame.frame.document.referrer;
                }
            }
            return bestPageUrl;
        };;
        Pageview.prototype.getAdsOnPage = function() {
            var adsOnPage = [];
            for (var i = 1; i < 10; i++) {
                var elem = document.getElementById('div-insticator-ad-' + i);
                if (elem) {
                    adsOnPage.push(elem.id);
                }
            }
            return adsOnPage;
        };
        Pageview.prototype.getEmbedsOnPage = function() {
            var embedOnPage = [];
            var insticatorContainerElement = document.getElementById("insticator-container");
            if (insticatorContainerElement) {
                var insticatorBodyScript = insticatorContainerElement.getElementsByTagName("script");
                if (insticatorBodyScript) {
                    for (var i = 0; i < insticatorBodyScript.length; i++) {
                        var regex = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
                        var bodyCode = insticatorBodyScript[i].innerHTML;
                        var found = bodyCode.match(regex);
                        if (found) {
                            embedOnPage.push(found[0]);
                            break;
                        }
                    }
                }
            }
            return embedOnPage;
        };
        Pageview.prototype.getSiteUUID = function() {
            return "c5c91476-d567-4e04-9a0b-e86c67e3339f";
        };
        Pageview.prototype.getDeviceType = function() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? "MOBILE" : "DESKTOP";
        };
        Pageview.prototype.formatPageview = function(pageview, ads, embeds) {
            return {
                "timestamp": pageview.timeStamp,
                "user_data": {
                    "session": pageview.session
                },
                "embed_context": {
                    "site": {
                        "id": pageview.siteUUID,
                        "page_url": pageview.pageUrl
                    },
                    "environment": {
                        "device": pageview.deviceType
                    }
                },
                "event_data": {
                    "type": "load",
                    "data": {
                        "pageview_type": pageview.type,
                        "ads": ads,
                        "embed": embeds
                    }
                }
            };
        };
        return Pageview;
    }());
    var pageview = new Pageview();

    function sendPageview() {
        if (isPageviewInfoReady) {
            pageview.firePageview();
        } else {
            Utils.documentReady(pageview.firePageview);
        }
    }
    InsticatorApp.sendPageview = sendPageview;

    function getSession() {
        return instiSession.getSessionForEmbed();
    }
    InsticatorApp.getSession = getSession;
})(InsticatorApp || (InsticatorApp = {}));
if (typeof InsticatorApp !== 'undefined' && typeof InsticatorApp.sendPageview === 'function') {
    InsticatorApp.sendPageview();
}
try {
    var googletag = googletag || {};
    googletag.cmd = googletag.cmd || [];
    var instBid = instBid || {};
    instBid.que = instBid.que || [];
    var insticatorVideoLoopCount = 0;
    (function() {
        "use strict";

        function Ad() {
            this.settings = {
                PREBID_TIMEOUT: 4000,
                PREBID_MOBILE_TIMEOUT: 4000,
                REFRESH_TIMEOUT: 3000,
                AMAZON_TIMEOUT: 3000,
                floorGroupSetting: JSON.parse('{"ctrl_group":100.0}'),
                postBidFloorSetting: JSON.parse('{"ctrl_group":{"webHardFloor":{"rtbhouse":0.01,"gumgum":0.01,"smartadserver":0.01,"appnexus":0.01,"pulsepoint":0.01,"sovrn":0.01,"brightcom":0.01,"ucfunnel":0.01,"beachfront":0.01,"improvedigital":0.01,"sonobi":0.01,"sortable":0.01,"eplanning":0.01,"synacor":0.01,"amazon":0.01,"yieldnexus":0.01,"brealtime":0.01,"districtm":0.01,"rhythmone":0.01,"33across":0.01,"pubmatic":0.01,"indexexchange":0.01,"rubicon":0.01,"conversant":0.01,"lockerdome":0.01,"openx":0.01},"mobileHardFloor":{"rtbhouse":0.01,"gumgum":0.01,"smartadserver":0.01,"appnexus":0.01,"pulsepoint":0.01,"sovrn":0.01,"brightcom":0.01,"ucfunnel":0.01,"beachfront":0.01,"improvedigital":0.01,"sonobi":0.01,"sortable":0.01,"eplanning":0.01,"synacor":0.01,"amazon":0.01,"yieldnexus":0.01,"brealtime":0.01,"districtm":0.01,"rhythmone":0.01,"33across":0.01,"pubmatic":0.01,"indexexchange":0.01,"rubicon":0.01,"conversant":0.01,"lockerdome":0.01,"openx":0.01}}}'),
                adUnitToSizeMap: {
                    DESKTOP: JSON.parse('{"div-insticator-ad-1":{"width":728,"height":90},"div-insticator-ad-2":{"width":300,"height":250},"div-insticator-ad-3":{"width":300,"height":250},"div-insticator-ad-4":{"width":300,"height":250},"div-insticator-ad-5":{"width":300,"height":600}}'),
                    MOBILE: JSON.parse('{"div-insticator-ad-1":{"width":320,"height":50},"div-insticator-ad-2":{"width":300,"height":250},"div-insticator-ad-3":{"width":300,"height":250},"div-insticator-ad-4":{"width":300,"height":250},"div-insticator-ad-5":{"width":300,"height":250}}')
                },
                embedOverlayAd: JSON.parse('{"5e1364f1-c5e0-4912-9be3-681465232ff9":{"mobile":[],"web":[]}}'),
                autoRefreshIntervalLowerBound: 31000,
                autoRefreshIntervalUpperBound: 38000,
                excludeClickRefreshAdX: false,
                excludeAutoRefreshAdX: !true || false,
                renderSecondHighestBid: true,
                AUTO_REFRESH_CAP: 20000,
                impressionType: {
                    INITIAL_LOAD: "initial_load",
                    EVENT_BASED_REFRESH: "event_based_refresh",
                    TIME_BASED_REFRESH: "time_based_refresh"
                },
                URL_BLOCKING_LIST: []
            };
            this.variables = {
                divsWithAdsShowInDFPForFirstTime: [],
                ready: false,
                hbFills: {},
                timedOut: false,
                floorGroup: "ctrl_group",
                autoRefreshCounter: 0,
                adSlots: {},
                initSet: false,
                adUnitsMap: {},
                amazonUAMSlotsMap: {},
                blockAds: false,
                autoRefreshTimer: "",
                sortableSiteId: ""
            };
            var _this = this;
            this.randomFloorGroup = function() {
                var tierFloorGroup = _this.settings.floorGroupSetting;
                var rand = Math.floor(100 * Math.random());
                var base = 0;
                for (var group in tierFloorGroup) {
                    if (rand < tierFloorGroup[group] + base) {
                        _this.variables.floorGroup = group;
                        break;
                    } else {
                        base += tierFloorGroup[group];
                    }
                }
                Insticator.logger.logMessage("floorGroup: " + _this.variables.floorGroup);
            };
            this.getPostBidFloor = function(group, isMobile, bidder) {
                var tierFloor = _this.settings.postBidFloorSetting;
                var groupFloor = tierFloor[group];
                var platformFloor = isMobile ? groupFloor["mobileHardFloor"] : groupFloor["webHardFloor"];
                var sspFloor = platformFloor[bidder];
                return sspFloor;
            };
            this.getSizeForDiv = function(divId) {
                if (utils.isMobileDevice) {
                    return _this.settings.adUnitToSizeMap["MOBILE"][divId];
                } else {
                    return _this.settings.adUnitToSizeMap["DESKTOP"][divId];
                }
            };
            this.defineAdSlots = function() {
                googletag.cmd.push(function() {
                    if (!utils.isMobileDevice) {
                        _this.variables.adSlots['div-insticator-ad-1'] = googletag.defineSlot('/27794161/espn.co.uk_Web_728x90_1', [728, 90], 'div-insticator-ad-1').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-2'] = googletag.defineSlot('/27794161/espn.co.uk_Web_300x250_1', [300, 250], 'div-insticator-ad-2').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-3'] = googletag.defineSlot('/27794161/espn.co.uk_Web_300x250_2', [300, 250], 'div-insticator-ad-3').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-4'] = googletag.defineSlot('/27794161/espn.co.uk_Web_300x250_3', [300, 250], 'div-insticator-ad-4').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-5'] = googletag.defineSlot('/27794161/espn.co.uk_Web_300x600_1', [300, 600], 'div-insticator-ad-5').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                    } else {
                        _this.variables.adSlots['div-insticator-ad-1'] = googletag.defineSlot('/27794161/espn.co.uk_Mobile_320x50_1', [320, 50], 'div-insticator-ad-1').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-2'] = googletag.defineSlot('/27794161/espn.co.uk_Mobile_300x250_1', [300, 250], 'div-insticator-ad-2').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-3'] = googletag.defineSlot('/27794161/espn.co.uk_Mobile_300x250_2', [300, 250], 'div-insticator-ad-3').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-4'] = googletag.defineSlot('/27794161/espn.co.uk_Mobile_300x250_3', [300, 250], 'div-insticator-ad-4').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                        _this.variables.adSlots['div-insticator-ad-5'] = googletag.defineSlot('/27794161/espn.co.uk_Mobile_300x250_4', [300, 250], 'div-insticator-ad-5').addService(googletag.pubads()).setTargeting("refurl", "espn.co.uk").setTargeting('floor_group', _this.variables.floorGroup).setTargeting('hour', (new Date).getUTCHours().toString());
                    }
                    googletag.enableServices();
                });
            };
            this.init = function() {
                if (_this.variables.initSet) return;
                (function() {
                    var gads = document.createElement('script');
                    gads.async = true;
                    gads.type = 'text/javascript';
                    gads.src = 'https://www.googletagservices.com/tag/js/gpt.js';
                    var node = document.getElementsByTagName('script')[0];
                    node.parentNode.insertBefore(gads, node);
                })();
                this.defineAdSlots();
                googletag.cmd.push(function() {
                    apstag && apstag.setDisplayBids();
                    instBid.que.push(function() {
                        instBid.setTargetingForGPTAsync();
                    });
                });
                _this.variables.ready = true;
                _this.variables.initSet = true;
                Insticator.ad.loadAllAds();
            };
            this.setTimeoutForInit = function() {
                if (utils.isMobileDevice) {
                    setTimeout(function() {
                        Insticator.logger.logMessage("Mobile timeout");
                        _this.variables.timedOut = true;
                        _this.init();
                    }, _this.settings.PREBID_MOBILE_TIMEOUT);
                } else {
                    setTimeout(function() {
                        Insticator.logger.logMessage("Desktop timeout");
                        _this.variables.timedOut = true;
                        _this.init();
                    }, _this.settings.PREBID_TIMEOUT);
                }
            };
            this.loadInstBid = function() {
                var instBidEle = document.createElement("script");
                instBidEle.type = "text/javascript";
                instBidEle.async = true;
                instBidEle.src = "https://df80k0z3fi8zg.cloudfront.net/files/instbid_1_34_release_20190807.js";
                var instBidTargetEl = document.getElementsByTagName("head")[0];
                instBidTargetEl.insertBefore(instBidEle, instBidTargetEl.firstChild);
            };
            this.loadApsTag = function() {
                ! function(a9, a, p, s, t, A, g) {
                    if (a[a9]) return;

                    function q(c, r) {
                        a[a9]._Q.push([c, r])
                    }
                    a[a9] = {
                        init: function() {
                            q("i", arguments)
                        },
                        fetchBids: function() {
                            q("f", arguments)
                        },
                        setDisplayBids: function() {},
                        targetingKeys: function() {
                            return []
                        },
                        _Q: []
                    };
                    A = p.createElement(s);
                    A.async = !0;
                    A.src = t;
                    g = p.getElementsByTagName(s)[0];
                    g.parentNode.insertBefore(A, g)
                }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");
                apstag.init({
                    pubID: '70fb13d1-ab65-42ac-a7ca-0b4e680d5c92',
                    adServer: 'googletag'
                });
            };
            this.getExistingAdUnits = function(adsMap) {
                var adUnitPrefix = "div-insticator-ad-";
                var existingUamSlots = [];
                for (var index = 1; index <= 30; index++) {
                    var adUnitName = adUnitPrefix + index;
                    if (document.getElementById(adUnitName) && adsMap[adUnitName]) {
                        Insticator.logger.logMessage("ExistingAdUnit: " + adUnitName);
                        existingUamSlots.push(adsMap[adUnitName]);
                    }
                }
                return existingUamSlots;
            };
            this.getAmazonUamBids = function() {
                var existingSlots = _this.getExistingAdUnits(_this.variables.amazonUAMSlotsMap);
                return {
                    slots: existingSlots,
                    timeout: _this.settings.AMAZON_TIMEOUT
                };
            };
            this.removeSlotForAmazonUamBids = function(amazonUamBids, slotsToRemove) {
                if (slotsToRemove && slotsToRemove.length > 0 && amazonUamBids.slots && amazonUamBids.slots.length > 0) {
                    amazonUamBids.slots = amazonUamBids.slots.filter(function(slot) {
                        return !slotsToRemove.includes(slot.slotID);
                    });
                }
                return amazonUamBids;
            };
            this.checkURLBlocking = function() {
                if (_this.settings.URL_BLOCKING_LIST.length) {
                    var pageUrl = tracking.getPageUrl();
                    for (var i in _this.settings.URL_BLOCKING_LIST) {
                        Insticator.logger.logMessage("Insticator.blockAds pageUrl: " + pageUrl);
                        Insticator.logger.logMessage("Insticator.blockAds url: " + _this.settings.URL_BLOCKING_LIST[i]);
                        Insticator.logger.logMessage("Insticator.blockAds boolean: " + pageUrl.includes(_this.settings.URL_BLOCKING_LIST[i]));
                        if (pageUrl.includes(_this.settings.URL_BLOCKING_LIST[i])) {
                            Insticator.logger.logMessage("Insticator.blockAds for: " + pageUrl);
                            _this.variables.blockAds = true;
                            break;
                        }
                    }
                }
                Insticator.logger.logMessage("Insticator.blockAds: " + _this.variables.blockAds);
            };
            this.getFinalCPM = function(cpm) {
                if (cpm <= 4) {
                    return Math.floor(cpm * 100);
                } else if (cpm <= 8) {
                    return (Math.floor((cpm * 50).toFixed(2)) / 50 * 100).toFixed();
                } else if (cpm <= 12) {
                    return (Math.floor((cpm * 20).toFixed(2)) / 20 * 100).toFixed();
                } else if (cpm <= 16) {
                    return (Math.floor((cpm * 10).toFixed(2)) / 10 * 100).toFixed();
                } else if (cpm <= 20) {
                    return (Math.floor((cpm * 5).toFixed(2)) / 5 * 100).toFixed();
                } else if (cpm <= 40) {
                    return (Math.floor(cpm) * 100).toFixed();
                } else if (cpm <= 100) {
                    return ((Math.floor(cpm / 2) * 2) * 100).toFixed();
                } else if (cpm <= 1000) {
                    return ((Math.floor(cpm / 10) * 10) * 100).toFixed();
                } else {
                    return 100000;
                }
            };
            this.getAdXFloor = function(cpm) {
                if (cpm <= 10) {
                    return Math.floor(cpm * 100);
                } else if (cpm <= 20) {
                    return (Math.floor((cpm * 50).toFixed(2)) / 50 * 100).toFixed();
                } else if (cpm <= 100) {
                    return (Math.floor((cpm * 2).toFixed(2)) / 2 * 100).toFixed();
                } else if (cpm <= 1000) {
                    return ((Math.floor(cpm / 10) * 10) * 100).toFixed();
                } else {
                    return 100000;
                }
            };
            this.fetchAds = function() {
                if (!_this.variables.timedOut) {
                    var FAILSAFE_TIMEOUT = 3000;
                    var requestManager = {
                        adserverRequestSent: false,
                        aps: false,
                        inst: false
                    };

                    function biddersBack() {
                        if (requestManager.inst) {
                            initializeAdserver();
                        }
                        return;
                    }

                    function initializeAdserver() {
                        if (requestManager.adserverRequestSent === true) {
                            return;
                        }
                        Insticator.logger.logMessage("Initialize ad server");
                        requestManager.adserverRequestSent = true;
                        _this.init();
                    }

                    function requestHeaderBids() {
                        var existingAdUnits = _this.getExistingAdUnits(_this.variables.adUnitsMap);
                        Insticator.logger.logMessage("existingAdUnits: " + JSON.stringify(existingAdUnits));
                        if (existingAdUnits.length > 0) {
                            Insticator.logger.logMessage("Found " + existingAdUnits.length + " ad units on page");
                            instBid.addAdUnits(existingAdUnits);
                        } else {
                            Insticator.logger.logMessage("No ad units on page");
                        }
                        instBid.requestBids({
                            bidsBackHandler: function(bidResponses) {
                                Insticator.logger.logMessage("Got all bid responses"), requestManager.inst = true;
                                biddersBack();
                            }
                        });
                        var amazonUamBids = _this.getAmazonUamBids(_this.variables.amazonUAMSlotsMap);
                        Insticator.logger.logMessage("amazonUamBids: " + JSON.stringify(amazonUamBids));
                        if (amazonUamBids && amazonUamBids.slots && amazonUamBids.slots.length > 0) {
                            apstag.fetchBids(amazonUamBids, function(bidResponses) {
                                Insticator.logger.logMessage("Got all bid bidResponses for UAM: " + JSON.stringify(bidResponses));
                                googletag.cmd.push(function() {
                                    requestManager.aps = true;
                                    biddersBack();
                                });
                            });
                        }
                    }
                    requestHeaderBids();
                    window.setTimeout(function() {
                        initializeAdserver();
                    }, FAILSAFE_TIMEOUT);
                } else {
                    Insticator.logger.logMessage("Already timeout, no need to send bid requests");
                }
            };
            this.createEmptyIFrameInsideElement = function(containerId, width, height) {
                var iFrame = document.createElement("iframe");
                iFrame.width = width + "px";
                iFrame.height = height + "px";
                iFrame.frameBorder = "0";
                iFrame.scrolling = "no";
                iFrame.marginHeight = "0";
                iFrame.marginWidth = "0";
                iFrame.topmargin = "0";
                iFrame.leftmargin = "0";
                iFrame.allowtransparency = "true";
                document.getElementById(containerId).appendChild(iFrame);
                return iFrame;
            };
            this.updateIFrameContent = function(targetIFrame, content) {
                targetIFrame.contentWindow.document.open();
                targetIFrame.contentWindow.document.write(content);
                targetIFrame.contentWindow.document.close();
            };
            this.clearAdsUnderContainerId = function(containerId) {
                var node = document.getElementById(containerId);
                if (node) {
                    while (node.hasChildNodes()) {
                        node.removeChild(node.firstChild);
                    }
                    return true;
                }
                return false;
            };
            this.formInstBidCreative = function(adId) {
                return "<style type='text/css'>body{margin:0;padding:0;}</style><scr" + "ipt>var w = window;for (i = 0; i < 10; i++) {w = w.parent;if (w.instBid) {try {w.instBid.renderAd(document, '" + adId + "');break;} catch (e) {continue;}}}</scr" + "ipt>";
            };
            this.showInstBidAdInIframe = function(containerId, adId, width, height) {
                var success = _this.clearAdsUnderContainerId(containerId);
                if (success) {
                    var iFrame = _this.createEmptyIFrameInsideElement(containerId, width, height);
                    var hbContent = _this.formInstBidCreative(adId);
                    _this.updateIFrameContent(iFrame, hbContent);
                } else {
                    Insticator.logger.logMessage("Fail to clear ads under: " + containerId);
                }
            };
            this.showBackfill = function(containerId, width, height) {
                var success = _this.clearAdsUnderContainerId(containerId);
                if (success) {
                    var iFrame = _this.createEmptyIFrameInsideElement(containerId, width, height);
                    var src = "https://dashboard.insticator.com/embeds/backfillad?dimension=" + width + "x" + height + "&siteURL=" + "espn.co.uk";
                    iFrame.src = src;
                    document.getElementById(containerId).appendChild(iFrame);
                }
            };
            this.refreshAd = function(containerId, excludeAdx, refreshType) {
                ad.settings.renderSecondHighestBid = true;
                var adSize = this.getSizeForDiv(containerId);
                var hasFill = containerId in _this.variables.hbFills;
                if (hasFill) {
                    Insticator.logger.logMessage("Fill for: " + containerId + ", id:" + _this.variables.hbFills[containerId].adId + ", from: " + _this.variables.hbFills[containerId].bidderCode + ", cpm: " + _this.variables.hbFills[containerId].cpm);
                    dfp.setAdXFloorTargeting(containerId, _this.variables.hbFills[containerId].adxFloor);
                } else {
                    Insticator.logger.logMessage("No fill for: " + containerId);
                    dfp.setAdXFloorTargeting(containerId, 1);
                }
                if (adSize) {
                    var passbackName = passback.getPassbackName(containerId);
                    Insticator.logger.logMessage("In appendAd, passbackName: " + passbackName);
                    Insticator.logger.logMessage("hasFill: " + hasFill);
                    if (!hasFill && passbackName.toLowerCase() !== "default") {
                        passback.showPassbackInIFrame(containerId, passbackName, adSize["width"], adSize["height"]);
                    } else {
                        Insticator.logger.logMessage("In refreshAd, send call to DFP");
                        dfp.setExcludeAdXTargeting(containerId, excludeAdx);
                        dfp.setNoFillTargeting(containerId);
                        dfp.setImpressionTypeTargeting(containerId, refreshType);
                        _this.clearAdsUnderContainerId(containerId);
                        if (_this.variables.divsWithAdsShowInDFPForFirstTime.includes(containerId)) {
                            googletag.pubads().refresh([_this.variables.adSlots[containerId]]);
                        } else {
                            _this.variables.divsWithAdsShowInDFPForFirstTime.push(containerId);
                            googletag.display(containerId);
                        }
                    }
                }
            };
            this.refreshBids = function(hoverUnits, excludeAdx, refreshType) {
                Insticator.logger.logMessage("Clear map");
                _this.variables.hbFills = {};
                var amazonUamBids = _this.removeSlotForAmazonUamBids(_this.getAmazonUamBids(_this.variables.amazonUAMSlotsMap), hoverUnits);
                if (hoverUnits.length > 0) {
                    _this.preAdjustAdUnits(hoverUnits);
                }
                _this.randomFloorGroup();
                for (var key in _this.variables.adSlots) {
                    dfp.setFloorGroupTargeting(key);
                }
                instBid.que.push(function() {
                    if (amazonUamBids && amazonUamBids.slots && amazonUamBids.slots.length > 0) {
                        apstag.fetchBids(amazonUamBids, function(bidResponses) {
                            Insticator.logger.logMessage("Got all bid bidResponses for UAM: " + JSON.stringify(bidResponses));
                            apstag && apstag.setDisplayBids();
                        });
                    }
                    instBid.requestBids({
                        timeout: _this.settings.REFRESH_TIMEOUT,
                        bidsBackHandler: function() {
                            Insticator.logger.logMessage("All refresh bids back");
                            instBid.setTargetingForGPTAsync();
                            for (var i in _this.variables.adSlots) {
                                if (hoverUnits.indexOf(i) > -1) {
                                    Insticator.logger.logMessage("Not refresh hover unit: " + i);
                                } else {
                                    _this.refreshAd(i, excludeAdx, refreshType);
                                }
                            }
                        }
                    });
                });
                if (hoverUnits.length > 0) {
                    _this.postAdjustAdUnits(hoverUnits);
                }
            };
            this.preAdjustAdUnits = function(hoverUnits) {
                for (var i in hoverUnits) {
                    Insticator.logger.logMessage("Remove ad unit to be refreshed: " + hoverUnits[i]);
                    instBid.removeAdUnit(hoverUnits[i]);
                }
            };
            this.postAdjustAdUnits = function(hoverUnits) {
                for (var i in hoverUnits) {
                    Insticator.logger.logMessage("Add back ad unit: " + hoverUnits[i]);
                    instBid.addAdUnits(_this.variables.adUnitsMap[hoverUnits[i]]);
                }
            };
            this.getBidFloor = function(bidCpm, bid, bidder) {
                var hardFloor = _this.getPostBidFloor(_this.variables.floorGroup, utils.isMobileDevice, bidder);
                Insticator.logger.logMessage("Postbid floor for: " + bidder + " on: " + (!utils.isMobileDevice ? "desktop" : "mobile") + " is: " + hardFloor);
                if (bidCpm > 0 && bidCpm < hardFloor) {
                    Insticator.logger.logMessage("New bid for: " + bid.adUnitCode + " at: " + bidCpm + " doesn't reach " + bidder + " hardFloor: " + hardFloor + ", consider as invalid bid.");
                    return 0;
                }
            };
            this.refreshAdBasedOnClickEvent = function(hoverUnits) {
                if (_this.variables.blockAds) {
                    Insticator.logger.logMessage("This geo is blocked event based refresh.");
                } else {
                    var noRefreshUnits = [];
                    Insticator.logger.logMessage("Refresh ad based on click event");
                    if (typeof hoverUnits === "undefined") {
                        Insticator.logger.logMessage("Refresh all ads");
                    } else {
                        Insticator.logger.logMessage("Refresh non-hover ads");
                        if (hoverUnits.indexOf('TOP') > -1) {
                            noRefreshUnits.push('div-insticator-ad-1');
                        }
                        if (hoverUnits.indexOf('BOTTOM') > -1) {
                            noRefreshUnits.push('div-insticator-ad-2');
                        }
                    }
                    _this.refreshBids(noRefreshUnits, _this.settings.excludeClickRefreshAdX, _this.settings.impressionType.EVENT_BASED_REFRESH);
                    _this.resetAutoRefreshTimer();
                }
            };
            this.appendAd = function(containerId) {
                if (_this.variables.blockAds) {
                    Insticator.logger.logMessage("This geo is blocked initial load.");
                } else {
                    var adSize = _this.getSizeForDiv(containerId);
                    if (typeof adSize !== "undefined") {
                        var existingStyle = document.getElementById(containerId).style.cssText;
                        var style = "width:" + adSize["width"] + "px;height:" + adSize["height"] + "px;";
                        document.getElementById(containerId).setAttribute("style", existingStyle + style);
                        Insticator.logger.logMessage("Display ad for: " + containerId);
                        var hasFill = containerId in _this.variables.hbFills;
                        if (hasFill) {
                            Insticator.logger.logMessage("Fill for: " + containerId + " with adId:" + _this.variables.hbFills[containerId].adId + " from: " + _this.variables.hbFills[containerId].bidderCode + " at cpm: " + ad.variables.hbFills[containerId].cpm);
                            dfp.setAdXFloorTargeting(containerId, _this.variables.hbFills[containerId].adxFloor);
                        } else {
                            Insticator.logger.logMessage("No fill for: " + containerId);
                            dfp.setAdXFloorTargeting(containerId, 1);
                        }
                        var passbackName = passback.getPassbackName(containerId);
                        Insticator.logger.logMessage("In appendAd, passbackName: " + passbackName);
                        Insticator.logger.logMessage("hasFill: " + hasFill);
                        if (!hasFill && passbackName.toLowerCase() !== "default") {
                            passback.showPassbackInIFrame(containerId, passbackName, adSize["width"], adSize["height"]);
                        } else {
                            Insticator.logger.logMessage("In appendAd, send call to DFP");
                            dfp.setExcludeAdXTargeting(containerId, false);
                            dfp.setNoFillTargeting(containerId);
                            dfp.setImpressionTypeTargeting(containerId, _this.settings.impressionType.INITIAL_LOAD);
                            _this.variables.divsWithAdsShowInDFPForFirstTime.push(containerId);
                            googletag.cmd.push(function() {
                                googletag.display(containerId);
                            });
                        }
                    }
                }
            };
            this.refreshAdBasedOnTime = function() {
                var noRefreshUnits = [];
                var platformHoverAds = [];
                if (tracking.embedUUID !== "UNKNOWN") {
                    platformHoverAds = _this.settings.embedOverlayAd[tracking.embedUUID];
                } else if (Object.keys(_this.settings.embedOverlayAd).length === 1) {
                    platformHoverAds = _this.settings.embedOverlayAd[Object.keys(_this.settings.embedOverlayAd)[0]];
                }
                if (Object.keys(platformHoverAds).length > 0) {
                    if (!utils.isMobileDevice) {
                        noRefreshUnits = platformHoverAds["web"];
                    } else {
                        noRefreshUnits = platformHoverAds["mobile"];
                    }
                }
                _this.refreshBids(noRefreshUnits, _this.settings.excludeAutoRefreshAdX, _this.settings.impressionType.TIME_BASED_REFRESH);
            };
            this.getAutoRefreshInterval = function() {
                var interval = Math.floor(Math.random() * (_this.settings.autoRefreshIntervalUpperBound - _this.settings.autoRefreshIntervalLowerBound)) + _this.settings.autoRefreshIntervalLowerBound;
                return interval;
            };
            this.autoRefreshAd = function() {
                if (_this.variables.autoRefreshCounter++ < _this.settings.AUTO_REFRESH_CAP) {
                    _this.refreshAdBasedOnTime();
                    _this.resetAutoRefreshTimer();
                } else {
                    Insticator.logger.logMessage("Reach auto refresh cap, stop refreshing ad.");
                    clearInterval(_this.variables.autoRefreshTimer);
                }
            };
            this.resetAutoRefreshTimer = function() {
                Insticator.logger.logMessage("resetAutoRefreshTimer");
                clearInterval(_this.variables.autoRefreshTimer);
                _this.variables.autoRefreshTimer = setInterval(_this.autoRefreshAd, _this.getAutoRefreshInterval());
            };
        }

        function DFP() {
            var _this = this;
            this.setAdXFloorTargeting = function(containerId, floor) {
                Insticator.logger.logMessage("Set adx_floor targeting for: " + containerId + " to: " + floor);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("adx_floor", floor);
                });
            };
            this.setNoFillTargeting = function(containerId) {
                var targeting = instBid.getAdserverTargetingForAdUnitCode(containerId);
                if (Object.keys(targeting).length === 0 || typeof targeting['instBid_bidder'] === 'undefined') {
                    Insticator.logger.logMessage("No fill for: " + containerId + " , add no fill targeting");
                    googletag.cmd.push(function() {
                        ad.variables.adSlots[containerId].setTargeting("instBid_bidder", "nofill").setTargeting("instBid_pb", "0").setTargeting("instBid_adid", "nofill");
                    });
                    var adSize = ad.getSizeForDiv(containerId);
                    if (typeof adSize !== "undefined") {
                        googletag.cmd.push(function() {
                            ad.variables.adSlots[containerId].setTargeting("instBid_size", adSize["width"] + "x" + adSize["height"]);
                        });
                    }
                }
            };
            this.setExcludeAdXTargeting = function(containerId, excludeAdx) {
                var excludeAdxValue = excludeAdx ? "Y" : "N";
                Insticator.logger.logMessage("Set no adx targeting for: " + containerId + " to: " + excludeAdxValue);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("Exclude_Adx", excludeAdx ? "Y" : "N");
                });
            };
            this.setImpressionTypeTargeting = function(containerId, refreshType) {
                Insticator.logger.logMessage("Impression type for: " + containerId + " on: " + refreshType);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("impression_type", refreshType);
                    if (refreshType === ad.settings.impressionType.TIME_BASED_REFRESH) {
                        ad.variables.adSlots[containerId].setTargeting("auto_refresh_counter", ad.variables.autoRefreshCounter > 1000 ? "n" : ad.variables.autoRefreshCounter);
                    }
                });
            };
            this.setFloorGroupTargeting = function(containerId) {
                Insticator.logger.logMessage("Set floor_group for: " + containerId + " to: " + ad.variables.floorGroup);
                googletag.cmd.push(function() {
                    ad.variables.adSlots[containerId].setTargeting("floor_group", ad.variables.floorGroup);
                });
            };
        }

        function Passback() {
            this.passbackInfoJson = {
                DESKTOP: JSON.parse('{}'),
                MOBILE: JSON.parse('{}')
            };
            this.passbackCreativeMap = {
                default: ""
            };
            var _this = this;
            this.getPassbackName = function(containerId) {
                var deviceType = "DESKTOP";
                if (utils.isMobileDevice) {
                    deviceType = "MOBILE";
                }
                var divPassback = _this.passbackInfoJson[deviceType];
                if (divPassback[containerId]) {
                    return divPassback[containerId];
                }
                return "default";
            };
            this.replaceMacros = function(tag, width, height) {
                return tag.replace(/{width}/g, width).replace(/{height}/g, height).replace(/{domain}/g, "espn.co.uk");
            };
            this.getCreativeForPassback = function(passbackName, width, height) {
                var creative = _this.passbackCreativeMap[passbackName];
                if (creative) {
                    creative = _this.replaceMacros(creative, width, height, "espn.co.uk");
                }
                return creative;
            };
            this.showPassbackInIFrame = function(containerId, passbackName, width, height) {
                var success = ad.clearAdsUnderContainerId(containerId);
                if (success) {
                    var iFrame = ad.createEmptyIFrameInsideElement(containerId, width, height);
                    var creative = _this.getCreativeForPassback(passbackName, width, height);
                    ad.updateIFrameContent(iFrame, creative);
                } else {
                    Insticator.logger.logMessage("Fail to clear ads under: " + containerId);
                }
            };
        }

        function Utils() {
            this.isMobileDevice = (function() {
                return /(android|bb\d |meego). mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) ? !0 : !1;
            })();
            this.setCookie = function(cname, cvalue, exdays) {
                Insticator.logger.logMessage("setCookie " + cname + " value " + cvalue);
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            };
            this.getCookie = function(cname) {
                var name = cname + "=";
                var decodedCookie = "";
                try {
                    decodedCookie = decodeURIComponent(document.cookie);
                } catch (e) {
                    decodedCookie = document.cookie;
                    Insticator.logger.logMessage("Not able to decode cookie ", e.message);
                }
                var ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            };
            this.makeAjaxCall = function(method, url, data, callback) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        callback(xmlHttp.responseText);
                    }
                };
                xmlHttp.open(method, url, true);
                xmlHttp.setRequestHeader("Content-type", "application/json");
                var jsonData = JSON.stringify(data);
                xmlHttp.send(jsonData);
            };
            this.makeGetCall = function(theUrl, callback) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        callback(xmlHttp.responseText);
                    }
                };
                xmlHttp.open("GET", theUrl, true);
                xmlHttp.send(null);
            };
            this.documentReady = function(fn) {
                if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
                    Insticator.logger.logMessage("dom ready!");
                    fn();
                } else {
                    Insticator.logger.logMessage("dom not ready, set up listener");
                    document.addEventListener('DOMContentLoaded', fn);
                }
            };
        }

        function Visitor() {
            this.visitorGeo = "UNKNOWN";
            this.visitorFloorTier = "UNKNOWN";
            this.visitorGeoCookieName = "visitorGeo";
            this.visitorFloorTierCookieName = "visitorFloorTier";
            this.geoBlockingAdsCookieName = "Insticator.geoBlockAds-c5c91476-d567-4e04-9a0b-e86c67e3339f";
            this.geoBlockedEmbedsCookieName = "Insticator.geoBlockedEmbeds-c5c91476-d567-4e04-9a0b-e86c67e3339f";
            this.embedGeoBlockingMap = {};
            this.geoBlockedEmbedList = [];
            var _this = this;
            this.makeAjaxCall = function(theUrl, callback) {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.onreadystatechange = function() {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        callback(xmlHttp.responseText);
                    }
                };
                xmlHttp.onerror = function(e) {
                    Insticator.logger.logMessage("Error fetching " + theUrl);
                    if (theUrl === "https://geoip.insticator.com/json/") {
                        _this.visitorFloorTier = '1';
                        utils.setCookie(_this.visitorGeoCookieName, 'US', 1);
                    }
                };
                xmlHttp.open("GET", theUrl, true);
                xmlHttp.send(null);
            };
            this.calculateVisitorFloorTier = function(trafficSource) {
                Insticator.logger.logMessage("trafficSource: " + trafficSource);
                var sourceJson = JSON.parse(trafficSource);
                if (sourceJson.hasOwnProperty("country_code")) {
                    _this.visitorGeo = sourceJson["country_code"];
                    _this.visitorFloorTier = "1";
                    Insticator.logger.logMessage("visitorFloorTier: " + _this.visitorFloorTier);
                    utils.setCookie(_this.visitorGeoCookieName, _this.visitorGeo, 1);
                    utils.setCookie(_this.visitorFloorTierCookieName, _this.visitorFloorTier, 1);
                    ad.randomFloorGroup();
                } else {
                    Insticator.logger.logMessage("countryCode not available in sourceJson: " + sourceJson);
                }
            };
            this.checkVisitorFloorTier = function() {
                _this.visitorFloorTier = utils.getCookie(_this.visitorFloorTierCookieName);
                ad.randomFloorGroup();
                if (_this.visitorFloorTier !== "") {
                    Insticator.logger.logMessage("find in cookie! visitorFloorTier: " + _this.visitorFloorTier);
                    _this.visitorGeo = utils.getCookie(_this.visitorGeoCookieName);
                } else {
                    Insticator.logger.logMessage("not in cookie");
                    _this.makeAjaxCall("https://geoip.insticator.com/json/", this.calculateVisitorFloorTier);
                }
            };
            this.getVisitorGeoAndCheckBlocking = function(trafficSource) {
                Insticator.logger.logMessage("trafficSource: " + trafficSource);
                var sourceJson = JSON.parse(trafficSource);
                Insticator.logger.logMessage("sourceJson: " + sourceJson);
                if (sourceJson.hasOwnProperty("country_code")) {
                    _this.visitorGeo = sourceJson["country_code"];
                }
                utils.setCookie(_this.visitorGeoCookieName, _this.visitorGeo, 1);
                for (var embedUUID in _this.mbedGeoBlockingMap) {
                    var blockedGEOList = _this.mbedGeoBlockingMap[embedUUID].split(',');
                    var embedIsBlockedByGeo = blockedGEOList.indexOf(_this.visitorGeo) > -1;
                    if (embedIsBlockedByGeo) {
                        _this.geoBlockedEmbedList.push(embedUUID);
                    }
                    ad.variables.blockAds = ad.variables.blockAds || embedIsBlockedByGeo;
                }
                utils.setCookie(_this.geoBlockingAdsCookieName, ad.variables.blockAds, 1);
                utils.setCookie(_this.geoBlockedEmbedsCookieName, JSON.stringify(_this.geoBlockedEmbedList), 1);
            };
            this.checkBlockVisitorGeo = function() {
                var blockAds = utils.getCookie(_this.geoBlockingAdsCookieName);
                if (blockAds !== "") {
                    Insticator.logger.logMessage("find in cookie! blockAds: " + blockAds);
                    ad.variables.blockAds = blockAds == "true";
                    var geoBlockedEmbedListCookie = utils.getCookie(_this.geoBlockedEmbedsCookieName);
                    _this.geoBlockedEmbedList = JSON.parse(geoBlockedEmbedListCookie);
                } else {
                    Insticator.logger.logMessage("GeoBlocking: visitorGeo not in cookie");
                    this.makeAjaxCall("https://geoip.insticator.com/json/", this.getVisitorGeoAndCheckBlocking);
                }
            };
        }

        function Tracking() {
            this.embedUUID = "UNKNOWN";
            this.embedIsActivated = "UNKNOWN";
            this.adIsActivated = "true";
            this.adUnitsConfigured = "UNKNOWN";
            this.adUnitsOnPage = [];
            this.siteUUID = "c5c91476-d567-4e04-9a0b-e86c67e3339f";
            this.embeds = JSON.parse('{"5e1364f1-c5e0-4912-9be3-681465232ff9":true}'), this.pageUrl = "UNKNOWN";
            var _this = this;
            this.checkBodyCode = function() {
                var insticatorContainerElement = document.getElementById("insticator-container");
                if (insticatorContainerElement) {
                    var insticatorBodyScript = insticatorContainerElement.getElementsByTagName("script");
                    if (insticatorBodyScript) {
                        for (var i = 0; i < insticatorBodyScript.length; i++) {
                            var regex = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i;
                            var bodyCode = insticatorBodyScript[i].innerHTML;
                            var found = bodyCode.match(regex);
                            if (found) {
                                _this.embedUUID = found[0];
                                Insticator.logger.logMessage("widgetUUID in body script: " + _this.embedUUID);
                                break;
                            }
                        }
                        if (_this.embedUUID === "UNKNOWN") {
                            Insticator.logger.logMessage("widgetUUID not available in body script");
                        }
                    } else {
                        Insticator.logger.logMessage("insticatorBodyScript not available");
                    }
                } else {
                    var embedElement = document.querySelector("div[embed-id]");
                    if (embedElement) {
                        _this.embedUUID = embedElement.getAttribute("embed-id");
                        Insticator.logger.logMessage("widgetUUID in embed div: " + _this.embedUUID);
                    } else {
                        Insticator.logger.logMessage("embedElement not available");
                    }
                }
            };
            this.checkEmbedCodeAndSettingOnPage = function() {
                _this.checkBodyCode();
                if (_this.embedUUID !== "UNKNOWN") {
                    if (_this.embeds.hasOwnProperty(_this.embedUUID)) {
                        _this.embedIsActivated = _this.embeds[_this.embedUUID];
                    } else {
                        Insticator.logger.logMessage("embedUUID does not existing.");
                    }
                }
            };
            this.formatEmbedAndAdSetting = function() {
                var array = [];
                array.push("div-insticator-ad-1");
                array.push("div-insticator-ad-2");
                array.push("div-insticator-ad-3");
                array.push("div-insticator-ad-4");
                array.push("div-insticator-ad-5");
                _this.adUnitsConfigured = array.toString();
            };
            this.checkAdUnitsOnPage = function() {
                var array = [];
                for (var i = 1; i < 10; i++) {
                    var elem = document.getElementById('div-insticator-ad-' + i);
                    if (elem) {
                        array.push(elem.id);
                    }
                }
                _this.adUnitsOnPage = array.toString();
            };
            this.getPageUrl = function() {
                var topWindowPageUrl = "N/A";
                try {
                    topWindowPageUrl = window.top.location.href;
                } catch (e) {
                    Insticator.logger.logMessage("top window is not accessible.");
                }
                _this.pageUrl = topWindowPageUrl === "N/A" ? document.referrer : document.location.href;
                return _this.pageUrl;
            };
            this.fetchSettingsOnPage = function() {
                _this.formatEmbedAndAdSetting();
                _this.checkEmbedCodeAndSettingOnPage();
                _this.checkAdUnitsOnPage();
                _this.getPageUrl();
            };
            this.confirmEmbedUUID = function(embedUUID) {
                if (_this.embedUUID === "UNKNOWN") {
                    _this.embedUUID = embedUUID;
                    Insticator.logger.logMessage("embedUUID confirmed: " + embedUUID);
                    video.injectVideoPlayer();
                } else {
                    if (_this.embedUUID !== embedUUID) {
                        Insticator.logger.logMessage("embedUUID inconsistency, old: " + _this.embedUUID + " new: " + embedUUID);
                    }
                }
            };
        }

        function FraudDetection() {
            var _this = this;
            this.checkIfWhiteOpsShouldLoad = function(user_id) {
                if (_this.randomLoadFunction(0.0)) {
                    Insticator.logger.logMessage("show WhiteOps");
                    _this.loadWhiteOps(user_id);
                } else {
                    Insticator.logger.logMessage("not show WhiteOps");
                }
            };
            this.randomLoadFunction = function(probability) {
                return Math.random() * 100 <= probability;
            };
            this.loadWhiteOps = function(user_id) {
                Insticator.logger.logMessage("In loadWhiteOps");
                var pageUrl = tracking.pageUrl;
                if (pageUrl === "UNKNOWN" || pageUrl === "") {
                    pageUrl = 'https://espn.co.uk';
                }
                var de = 2;
                if (utils.isMobileDevice) {
                    de = 1;
                }
                Insticator.logger.logMessage("In loadWhiteOps, de: " + de);
                var gt = "";
                if (visitor.visitorGeo !== "UNKNOWN") {
                    gt = visitor.visitorGeo;
                }
                Insticator.logger.logMessage("In loadWhiteOps, gt: " + gt);
                Insticator.logger.logMessage("In loadWhiteOps 1");
                var whiteOpsUrl = "https://s.update.insticator.com/2/262386/analytics.js?dt=2623861559159495488000&bt=programmatic&di=";
                var whiteOpsEle = document.createElement("script");
                whiteOpsEle.type = "text/javascript";
                whiteOpsEle.async = true;
                whiteOpsEle.src = whiteOpsUrl + pageUrl + "&ui=" + user_id + "&de=" + de + "&gt=" + gt;
                var whiteopsTargetEl = document.getElementsByTagName("head")[0];
                whiteopsTargetEl.insertBefore(whiteOpsEle, whiteopsTargetEl.firstChild);
            };
        }

        function DMP() {
            this.b2cCookieId = "";
            this.dmpCookieId = "";
            this.stopPostingMessageToB2CIframe = false;
            this.caHost = "https://ca.insticator.com";
            this.b2cHost = "https://b2c.insticator.com";
            this.ccPixelHost = "https://t.ingage.tech";
            this.insticatorPixelHost = "https://uet.ingage.tech";
            this.integrationWindow = "";
            var _this = this;
            this.createB2CIframe = function() {
                var enableDMP = true;
                _this.integrationWindow = _this.isFriendlyIframe() ? window.top : window;
                if (enableDMP && _this.integrationWindow.document.getElementById('insticatorUserTrackingIframe') === null && typeof _this.integrationWindow['insticatorIframeLoaded'] === 'undefined') {
                    Insticator.logger.logMessage("In createB2CIframe");
                    _this.integrationWindow['insticatorIframeLoaded'] = true;
                    var iframe = _this.integrationWindow.document.createElement('iframe');
                    iframe.setAttribute("id", "insticatorUserTrackingIframe");
                    iframe.style.display = "none";
                    iframe.src = "https://b2c.insticator.com/v3/pages/usertracking";
                    _this.integrationWindow.document.body.appendChild(iframe);
                    _this.checkB2CIframeLoaded();
                }
            };
            this.isFriendlyIframe = function() {
                try {
                    return window.self.location.href === window.top.location.href;
                } catch (e) {
                    return false;
                }
            };
            this.checkB2CIframeLoaded = function() {
                Insticator.logger.logMessage("In checkB2CIframeLoaded, stopPostingMessageToB2CIframe " + _this.stopPostingMessageToB2CIframe);
                if (_this.stopPostingMessageToB2CIframe) {
                    return;
                }
                var b2cIframe = _this.integrationWindow.document.getElementById('insticatorUserTrackingIframe');
                if (b2cIframe) {
                    _this.checkUserLocation();
                }
                window.setTimeout(_this.checkB2CIframeLoaded, 500);
            };
            this.checkUserLocation = function() {
                Insticator.logger.logMessage("In checkUserLocation");
                var euCounties = ['BE', 'BG', 'CZ', 'DK', 'DE', 'EE', 'IE', 'EL', 'ES', 'FR', 'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT', 'RO', 'SI', 'SK', 'FI', 'SE', 'UK'];
                if (euCounties.indexOf(visitor.visitorGeo) >= 0) {
                    _this.sendMessageToInsticatorIframe({
                        privacyPolicyRegion: true
                    });
                } else {
                    _this.sendMessageToInsticatorIframe({
                        privacyPolicyRegion: false
                    });
                }
            };
            this.sendMessageToInsticatorIframe = function(message) {
                message.fromInsticator = true;
                _this.integrationWindow.document.getElementById("insticatorUserTrackingIframe").contentWindow.postMessage(message, '*');
                Insticator.logger.logMessage("message posted to insticator iframe");
                _this.setIframeListener();
            };
            this.setIframeListener = function() {
                _this.integrationWindow.addEventListener('message', (event) => {
                    if (event.origin === _this.b2cHost) {
                        _this.stopPostingMessageToB2CIframe = true;
                        if (event.data.hasOwnProperty('userId')) {
                            _this.integrationWindow['insticatorUserTrackingMessage'] = event.data;
                            _this.b2cCookieId = event.data.userId;
                            _this.dropCCDmpSDK();
                            fraudDetection.checkIfWhiteOpsShouldLoad(_this.b2cCookieId);
                        }
                    }
                });
            };
            this.dropCCDmpSDK = function() {
                Insticator.logger.logMessage("In dropCCDmpSDK");
                var ccDmpSDK = _this.integrationWindow.document.createElement("script");
                ccDmpSDK.setAttribute("async", "");
                ccDmpSDK.setAttribute("defer", "");
                ccDmpSDK.src = this.ccPixelHost + "/sdk.js";
                _this.integrationWindow.document.head.append(ccDmpSDK);
            };
            window.addEventListener('nstctrReady', function() {
                Insticator.logger.logMessage("cc sdk dropped");
                _this.dmpCookieId = NSTCTR.getCookieId();
                _this.loadInsticatorPixel();
                _this.performInsticatorLiveRampCookieSync();
            });
            this.loadInsticatorPixel = function() {
                var insticatorPixel = _this.integrationWindow.document.createElement("img");
                insticatorPixel.onload = function() {
                    Insticator.logger.logMessage("insticator pixel - onload");
                };
                insticatorPixel.onerror = function() {
                    Insticator.logger.logMessage("insticator pixel - onerror");
                };
                insticatorPixel.height = "1";
                insticatorPixel.width = "1";
                insticatorPixel.border = "0";
                insticatorPixel.hspace = "0";
                insticatorPixel.vspace = "0";
                if (_this.b2cCookieId === "" || _this.b2cCookieId === null) {
                    _this.b2cCookieId = "null";
                }
                if (_this.dmpCookieId === "" || _this.dmpCookieId === null) {
                    _this.dmpCookieId = "null";
                }
                insticatorPixel.src = this.insticatorPixelHost + "/pixel.png?cc_dmp_id=" + _this.dmpCookieId + "&insti_id=" + _this.b2cCookieId;
                _this.integrationWindow.document.body.appendChild(insticatorPixel);
            };
            this.performInsticatorLiveRampCookieSync = function() {
                var liverampPixel = _this.integrationWindow.document.createElement("img");
                liverampPixel.onload = function() {
                    Insticator.logger.logMessage("liveramp pixel - onload");
                };
                liverampPixel.onerror = function() {
                    Insticator.logger.logMessage("liveramp pixel - onerror");
                };
                liverampPixel.height = "1";
                liverampPixel.width = "1";
                liverampPixel.border = "0";
                liverampPixel.hspace = "0";
                liverampPixel.vspace = "0";
                liverampPixel.src = "//idsync.rlcdn.com/709351.gif?partner_uid=" + _this.dmpCookieId;
                _this.integrationWindow.document.body.appendChild(liverampPixel);
            };
        }

        function Video() {
            this.settings = {
                AUTO_REFRESH_CAP: {
                    DESKTOP: "20",
                    MOBILE: "20"
                },
                AUTO_REFRESH_INTERVAL: {
                    DESKTOP: "60000",
                    MOBILE: "60000"
                },
                SPID: {
                    DESKTOP: "484420",
                    MOBILE: "484423"
                }
            };
            this.variables = {
                playerDiv: "",
                scriptElem: "",
                autoRefreshTimer: "",
                refreshCap: "",
                refreshInterval: "",
                spId: "",
                embedWidth: ""
            };
            this.videoHasInjected = false;
            this.embedVideoAdMapping = JSON.parse('{"5e1364f1-c5e0-4912-9be3-681465232ff9":{"DESKTOP":"false","MOBILE":"false"}}');
            var _this = this;
            this.init = function() {
                if (!utils.isMobileDevice) {
                    _this.variables.refreshCap = _this.settings.AUTO_REFRESH_CAP["DESKTOP"];
                    _this.variables.refreshInterval = _this.settings.AUTO_REFRESH_INTERVAL["DESKTOP"];
                    _this.variables.spId = _this.settings.SPID["DESKTOP"];
                } else {
                    _this.variables.refreshCap = _this.settings.AUTO_REFRESH_CAP["MOBILE"];
                    _this.variables.refreshInterval = _this.settings.AUTO_REFRESH_INTERVAL["MOBILE"];
                    _this.variables.spId = _this.settings.SPID["MOBILE"];
                }
            };
            this.checkEnableVideo = function() {
                var enableVideo = false;
                if (tracking.embedUUID !== "UNKNOWN") {
                    if (_this.embedVideoAdMapping[tracking.embedUUID]) {
                        var deviceType = !utils.isMobileDevice ? "DESKTOP" : "MOBILE";
                        if (_this.embedVideoAdMapping[tracking.embedUUID][deviceType] === "true") {
                            Insticator.logger.logMessage("Video is on");
                            enableVideo = true;
                        } else {
                            Insticator.logger.logMessage("Video is off");
                        }
                    } else {
                        Insticator.logger.logMessage("No setting for the embed");
                    }
                } else {
                    Insticator.logger.logMessage("No embed on the page.");
                }
                return enableVideo;
            };
            this.injectVideoPlayer = function() {
                if (!_this.videoHasInjected) {
                    if (_this.checkEnableVideo() & _this.checkIdAvailable()) {
                        var embedDiv = document.getElementById("insticator-embed");
                        if (embedDiv) {
                            var embedElem = document.querySelector("#insticator-embed");
                            _this.variables.embedWidth = embedElem.offsetWidth < 600 ? embedElem.offsetWidth : 600;
                            _this.variables.playerDiv = _this.createPlayerDiv(_this.variables.embedWidth);
                            embedDiv.parentNode.insertBefore(_this.variables.playerDiv, embedDiv.nextSibling);
                            var scriptWithVariables = _this.defineScriptWithVariables(_this.variables.spId, _this.variables.embedWidth);
                            _this.variables.playerDiv.appendChild(scriptWithVariables);
                            _this.variables.scriptElem = _this.createPlayerScript();
                            _this.variables.playerDiv.appendChild(_this.variables.scriptElem);
                            _this.videoHasInjected = true;
                        } else {
                            Insticator.logger.logMessage("No embed div on the page");
                        }
                    }
                } else {
                    Insticator.logger.logMessage("Video has been injected");
                }
            };
            this.checkIdAvailable = function() {
                return _this.variables.spId !== "";
            };
            this.getSpId = function() {
                return !utils.isMobileDevice ? _this.spId["DESKTOP"] : _this.spId["MOBILE"];
            };
            this.createPlayerDiv = function(width) {
                var div = document.createElement("div");
                div.id = "OutSpring";
                div.style.width = width + "px";
                div.style.margin = "0px";
                return div;
            };
            this.defineScriptWithVariables = function(spId, width) {
                var script = document.createElement("script");
                script.text = 'var spId=' + spId + '; var spWidth="' + width + 'px";';
                return script;
            };
            this.createPlayerScript = function() {
                var script = document.createElement("script");
                script.src = "https://d2na2p72vtqyok.cloudfront.net/files/instipage_v2.js";
                return script;
            };
            this.calculateHeight = function(width) {
                return width * 9 / 16;
            };
            this.refreshVideoAd = function() {
                Insticator.logger.logMessage("before refreshVideoAd");
                if (_this.variables.playerDiv) {
                    var scriptWithVariables = _this.defineScriptWithVariables(_this.variables.spId, _this.variables.embedWidth);
                    _this.variables.playerDiv.appendChild(scriptWithVariables);
                    _this.variables.scriptElem = _this.createPlayerScript();
                    _this.variables.scriptElem.addEventListener("load", function() {
                        Insticator.logger.logMessage("video ad script loaded");
                        AdPlayerPro().on('AdStarted', function() {
                            Insticator.logger.logMessage("AdStarted");
                            var outSpringElem = document.getElementById("OutSpring");
                            var lightPlayerWrapperElem = document.querySelector("div.light-player-wrapper");
                            var h = _this.calculateHeight(_this.variables.embedWidth);
                            if (outSpringElem.offsetHeight < h && lightPlayerWrapperElem.offsetHeight < h) {
                                outSpringElem.style.width = _this.variables.embedWidth + "px";
                                outSpringElem.style.height = h + "px";
                                lightPlayerWrapperElem.style.width = _this.variables.embedWidth + "px";
                                lightPlayerWrapperElem.style.height = h + "px";
                            }
                        });
                    });
                    _this.variables.playerDiv.appendChild(_this.variables.scriptElem);
                } else {
                    Insticator.logger.logMessage("Player div no longer exist");
                }
                Insticator.logger.logMessage("after refreshVideoAd");
            };
            this.autoRefreshAd = function() {
                Insticator.logger.logMessage("refreshCap: ", _this.variables.refreshCap);
                if (insticatorVideoLoopCount++ < _this.variables.refreshCap) {
                    Insticator.logger.logMessage("video refresh: ", insticatorVideoLoopCount);
                    _this.refreshVideoAd();
                } else {
                    Insticator.logger.logMessage("Reach video auto refresh cap, stop refreshing ad.");
                    clearInterval(_this.variables.autoRefreshTimer);
                }
            };
        }
        var ad = new Ad();
        var dfp = new DFP();
        var passback = new Passback();
        var utils = new Utils();
        var visitor = new Visitor();
        var tracking = new Tracking();
        var fraudDetection = new FraudDetection();
        var dmp = new DMP();
        var video = new Video();
        visitor.checkVisitorFloorTier();
        Insticator.settings = {
            visitorGeo: visitor.visitorGeo,
            dmpEnabled: true
        };
        ad.checkURLBlocking();
        visitor.checkBlockVisitorGeo();
        utils.documentReady(tracking.fetchSettingsOnPage);
        dmp.createB2CIframe();
        ad.setTimeoutForInit();
        ad.loadInstBid();
        ad.loadApsTag();
        video.init();
        utils.documentReady(video.injectVideoPlayer);
        if (!utils.isMobileDevice) {} else {}
        if (!utils.isMobileDevice) {
            var adUnit = {
                    code: 'div-insticator-ad-1',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [728, 90]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715561'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404564',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729365'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18045'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844644',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153530',
                    zoneId: '729094'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: '4c4c920a6cf262ee66db'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '517349'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-6272B84A8B4EAEB912B2E436B864A29'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83914'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131767'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709659'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-2',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715558'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404561',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729362'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18035'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inScreen: 'hxobotgw'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844643',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153530',
                    zoneId: '729094'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: '4c4c920a6cf262ee66db'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '509339'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAEDAD874A9F82E2E432AEDA2D'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83891'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131764'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709659'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-3',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715559'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404562',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729363'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18036'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844643',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153530',
                    zoneId: '771342'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: '4c4c920a6cf262ee66db'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '509340'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAEDAD874A9F82E2E432AEDA2D'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83891'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131765'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709659'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-4',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715560'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404563',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729364'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18037'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844643',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153530',
                    zoneId: '771344'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: '4c4c920a6cf262ee66db'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '552423'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAEDAD874A9F82E2E432AEDA2D'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83891'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131766'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709659'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-5',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 600]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '17156004'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '417985',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '17159421'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18040'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540869580',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153530',
                    zoneId: '729094'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: '4c4c920a6cf262ee66db'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '517345'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83917'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22135144'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709659'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
        } else {
            var adUnit = {
                    code: 'div-insticator-ad-1',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [320, 50]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715567'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404560',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729361'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18055'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844639',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153532',
                    zoneId: '729138'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: 'bca9f4849a655d39df09'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '552428'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAED96AE66DCBB8ADD394E8B482'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83907'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131763'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709660'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-2',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715563'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404557',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729357'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18050'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inScreen: 'hxobotgw'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844637',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153532',
                    zoneId: '729138'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: 'bca9f4849a655d39df09'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '509341'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAEDAD874A9F82E2E432AEDA2D'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83901'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131760'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709660'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-3',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715565'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404558',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729358'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18051'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844637',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153532',
                    zoneId: '771324'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: 'bca9f4849a655d39df09'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '509342'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAEDAD874A9F82E2E432AEDA2D'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83901'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131761'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709660'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-4',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '16715566'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '404559',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '16729359'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18052'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844637',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153532',
                    zoneId: '771330'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: 'bca9f4849a655d39df09'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '552425'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAEDAD874A9F82E2E432AEDA2D'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83901'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22131762'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709660'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
            var adUnit = {
                    code: 'div-insticator-ad-5',
                    mediaTypes: {
                        banner: {
                            sizes: [
                                [300, 250]
                            ],
                        }
                    },
                },
                bids = [];
            var bid = {
                bidder: 'appnexus',
                params: {
                    placementId: '17156005'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtmDMX',
                params: {
                    dmxid: '417986',
                    memberid: '100683'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'districtm',
                params: {
                    placementId: '17159422'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'gumgum',
                params: {
                    inSlot: '18053'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'openx',
                params: {
                    unit: '540844637',
                    delDomain: 'insticator-d.openx.net',
                    customParams: {
                        refurl: "espn.co.uk"
                    }
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'rubicon',
                params: {
                    accountId: '17062',
                    siteId: '153532',
                    zoneId: '771336'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sonobi',
                params: {
                    placement_id: 'bca9f4849a655d39df09'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'sovrn',
                params: {
                    tagid: '552426'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'ucfunnel',
                params: {
                    adid: 'ad-77279DAEDAD874A9F82E2E432AEDA2D'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'beachfront',
                params: {
                    appId: '4f8e8dde-a131-4603-f49c-8b10b480b496',
                    bidfloor: 0.01
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'synacormedia',
                params: {
                    seatId: 'insticator',
                    placementId: '83901'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'eplanning',
                params: {
                    ci: '25987'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'improvedigital',
                params: {
                    placementId: '22135145'
                }
            };
            bids.push(bid);
            var bid = {
                bidder: 'yieldnexus',
                params: {
                    member: '9393',
                    placementId: '16709660'
                }
            };
            bids.push(bid);
            adUnit.bids = bids;
            ad.variables.adUnitsMap[adUnit.code] = adUnit;
        }
        instBid.que.push(function() {
            var confiantWrap = function confiantWrap(a, b, c, d, e) {
                function f(a) {
                    return (m(a) || "")[s]("/", "_")[s]("+", "-")
                }

                function g(b, c, d) {
                    var e = w + n(b) + "&d=" + c,
                        f = "err__" + 1 * new Date;
                    k[f] = d;
                    var g = "<" + q + " on" + t + '="void(' + f + '())" ' + r + '="' + e + '" type="text/java' + q + '"></' + q + ">";
                    a[v](g)
                }

                function h() {
                    var c = f(d + "/" + x.k.hb_bidder[0] + ":" + x.k.hb_size[0]),
                        h = {
                            wh: c,
                            wd: l.parse(l[u](x)),
                            wr: 0
                        };
                    g(c, f(l[u](h)), function() {
                        a[v](b.ad)
                    });
                    var i = {
                            prebid: {
                                adId: b.adId,
                                cpm: b.cpm
                            }
                        },
                        j = {
                            d: h,
                            t: b.ad,
                            cb: e,
                            id: i
                        };
                    k[d] = {}, k[d][c] = j
                }
                var i = b.bidder,
                    j = b.size,
                    k = a.parentWindow || a.defaultView,
                    l = k.JSON,
                    m = k.btoa,
                    n = k.encodeURIComponent;
                if (!l || !m) return !1;
                var o = "t",
                    p = "i",
                    q = "script",
                    r = "src",
                    s = "replace",
                    t = "error",
                    u = "stringify",
                    v = "wr" + p + o + "e",
                    w = "https://" + c + "/?wrapper=" + n(d) + "&tpid=",
                    x = {
                        k: {
                            hb_bidder: [i],
                            hb_size: [j]
                        }
                    };
                return h(), a.close(), !0
            };
            var w = window;
            w._clrm = w._clrm || {};
            w._clrm.renderAd = w._clrm.renderAd || instBid.renderAd;
            var config = w._clrm.prebid || {
                sandbox: 1
            };
            var isGoogleFrame = function(c) {
                return c.tagName === 'IFRAME' && c.id && c.id.indexOf('google_ads_iframe_') > -1;
            };
            var shouldSandbox = function() {
                var uaToRegexMap = {
                        "mobile": /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i,
                        "ios": /(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d)\_?(\d)?[\_]?(\d)?.+/i,
                        "android": /Android/i
                    },
                    sbStr = "" + config.sandbox;
                if (sbStr === "1") {
                    return true;
                } else if (sbStr === "2") {
                    return !navigator.userAgent.match(uaToRegexMap["mobile"]);
                } else if (sbStr === "3") {
                    return navigator.userAgent.match(uaToRegexMap["mobile"]);
                } else if (sbStr === "4") {
                    return navigator.userAgent.match(uaToRegexMap["ios"]);
                } else if (sbStr === "5") {
                    return navigator.userAgent.match(uaToRegexMap["android"]);
                } else {
                    return false;
                }
            };
            Node.prototype.appendChild = (function(original) {
                return function(child) {
                    if (isGoogleFrame(child) && shouldSandbox() && !child.getAttribute('sandbox')) {
                        child.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
                        child.setAttribute('data-forced-sandbox', true);
                    }
                    return original.call(this, child);
                };
            }(Node.prototype.appendChild));
            instBid.renderAd = function(doc, id) {
                if (doc && id) {
                    try {
                        var bids = [],
                            bidResponses = instBid.getBidResponses(),
                            highestBids = instBid.getHighestCpmBids();
                        for (var slot in bidResponses) {
                            bids = bids.concat(bidResponses[slot].bids);
                        }
                        bids = bids.concat(highestBids);
                        var bid, i;
                        for (i = 0; i < bids.length; i++) {
                            if (bids[i].adId === id) {
                                bid = bids[i];
                                break;
                            }
                        }
                        var adUnitCode = '';
                        if (bid) {
                            adUnitCode = bid.adUnitCode;
                        }
                        var confiantExcludeBidders = [];
                        var excludeBidder = false;
                        for (i = 0; i < confiantExcludeBidders.length; i++) {
                            if (bid.bidder === confiantExcludeBidders[i]) {
                                excludeBidder = true;
                                break;
                            }
                        }
                        if (bid && bid.ad && !excludeBidder) {
                            var docwrite = doc.write;
                            var docclose = doc.close;
                            doc.write = doc.close = function() {};
                            window._clrm.renderAd(doc, id);
                            delete doc.write;
                            delete doc.close;
                            var sendingDataToFKP = function(bid) {
                                var confiant_event = {
                                    "type": "confiant",
                                    "data": {
                                        "siteId": tracking.siteUUID,
                                        "host_name": tracking.pageUrl,
                                        "ssp": bid.bidderCode,
                                        "cpm": bid.cpm,
                                        "revenue": bid.cpm / 1000
                                    }
                                };
                                var eventUrl = "https://event.insticator.com/v1/event?event_name=event_confiant-recover";
                                utils.makeAjaxCall("POST", eventUrl, confiant_event, function() {});
                            };
                            var instCallback = function(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
                                Insticator.logger.logMessage("In confiant wrap, Blocked, renderSecondHighestBid: " + ad.settings.renderSecondHighestBid);
                                if (isBlocked && ad.settings.renderSecondHighestBid) {
                                    ad.settings.renderSecondHighestBid = false;
                                    bids.sort(function(a, b) {
                                        return parseFloat(b.cpm) - parseFloat(a.cpm);
                                    });
                                    Insticator.logger.logMessage("In confiant wrap bids, bids size is: " + bids.length);
                                    var bid, i;
                                    for (i = 0; i < bids.length; i++) {
                                        if (bids[i].adId !== impressionData.prebid.adId && bids[i].adUnitCode === adUnitCode) {
                                            bid = bids[i];
                                            break;
                                        }
                                    }
                                    Insticator.logger.logMessage("In confiant wrap bids, second highest bid is" + JSON.stringify(bid));
                                    if (bid && bid.ad && bid.cpm >= 0.01) {
                                        Insticator.logger.logMessage("In confiant wrap bids, start rendering second highest bid");
                                        try {
                                            ad.showInstBidAdInIframe(bid.adUnitCode, bid.adId, bid.width, bid.height);
                                            sendingDataToFKP(bid);
                                        } catch (e) {
                                            Insticator.logger.logMessage("In confiant wrap bids, fail to write ad due to: " + e);
                                        }
                                    }
                                }
                            };
                            var callback = function(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
                                console.log("w00t one more bad ad nixed.", arguments);
                            };
                            if (!confiantWrap(doc, bid, 'clarium.global.ssl.fastly.net', 'Fseez_-nDyWQXIJsbnoKkKTHXC4', instCallback)) {
                                doc.write(bid.ad);
                                doc.close();
                            }
                            return;
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
                window._clrm.renderAd(doc, id);
            };
        });
        instBid.que.push(function() {
            Insticator.logger.logMessage("SortableSiteId: " + ad.variables.sortableSiteId);
            instBid.setConfig({
                sortable: {
                    siteId: ad.variables.sortableSiteId
                },
                userSync: {
                    filterSettings: {
                        iframe: {
                            bidders: ['sortable', 'synacormedia'],
                            filter: 'include'
                        }
                    }
                },
                improvedigital: {
                    singleRequest: true
                }
            });
            instBid.aliasBidder("appnexus", "yieldnexus");
            if (!ad.variables.blockAds) {
                utils.documentReady(ad.fetchAds);
            } else {
                Insticator.logger.logMessage("Ads blocked for GEO");
            }
            instBid.bidderSettings = {
                standard: {
                    adserverTargeting: [{
                        key: 'instBid_bidder',
                        val: function(bidResponse) {
                            switch (bidResponse.bidderCode) {
                                case "ix":
                                    return "indexExchange";
                                case "emx_digital":
                                    return "brealtime";
                                case "districtm":
                                    return "districtmDMX";
                                case "medianet":
                                    return "Medianet";
                                case "yieldnexus":
                                    return "YieldNexus";
                                default:
                                    return bidResponse.bidderCode;
                            }
                        }
                    }, {
                        key: 'instBid_adid',
                        val: function(bidResponse) {
                            return bidResponse.adId;
                        }
                    }, {
                        key: 'instBid_pb',
                        val: function(bidResponse) {
                            Insticator.logger.logMessage("New bid for: " + bidResponse.adUnitCode + " from: " + bidResponse.bidderCode + " at cpm: " + bidResponse.cpm);
                            var finalCPM = ad.getFinalCPM(bidResponse.cpm);
                            var adxFloor = ad.getAdXFloor(bidResponse.cpm);
                            if (bidResponse.adUnitCode in ad.variables.hbFills) {
                                if (bidResponse.cpm > ad.variables.hbFills[bidResponse.adUnitCode].cpm) {
                                    Insticator.logger.logMessage("New higher bid for: " + bidResponse.adUnitCode + " with adId: " + bidResponse.adId + " at cpm: " + bidResponse.cpm);
                                    ad.variables.hbFills[bidResponse.adUnitCode] = {
                                        cpm: bidResponse.cpm,
                                        adId: bidResponse.adId,
                                        bidderCode: bidResponse.bidderCode,
                                        adxFloor: adxFloor
                                    };
                                }
                            } else {
                                ad.variables.hbFills[bidResponse.adUnitCode] = {
                                    cpm: bidResponse.cpm,
                                    adId: bidResponse.adId,
                                    bidderCode: bidResponse.bidderCode,
                                    adxFloor: adxFloor
                                };
                            }
                            return finalCPM;
                        }
                    }, {
                        key: 'instBid_size',
                        val: function(bidResponse) {
                            return bidResponse.size;
                        }
                    }]
                },
                "33across": {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "33across") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                appnexus: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "appnexus") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                beachfront: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "beachfront") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                brightcom: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "brightcom") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                conversant: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "conversant") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                districtmDMX: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "districtm") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - (10.0 + discrepancy) / 100);
                    }
                },
                districtm: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "districtm") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - (10.0 + discrepancy) / 100);
                    }
                },
                emx_digital: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "brealtime") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - (10.0 + discrepancy) / 100);
                    }
                },
                eplanning: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "eplanning") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                gumgum: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "gumgum") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                improvedigital: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "improvedigital") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                ix: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "indexexchange") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                lockerdome: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "lockerdome") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                medianet: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "medianet") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                openx: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "openx") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                pubmatic: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "pubmatic") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - (16.0 + discrepancy) / 100);
                    }
                },
                pulsepoint: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "pulsepoint") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                rtbhouse: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "rtbhouse") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                rubicon: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "rubicon") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - (0.0 + discrepancy) / 100);
                    }
                },
                smartadserver: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "smartadserver") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - (30.0 + discrepancy) / 100);
                    }
                },
                synacormedia: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "synacormedia") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                sonobi: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "sonobi") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                sortable: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "sortable") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                sovrn: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "sovrn") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                rhythmone: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "rhythmone") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 0.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                ucfunnel: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "ucfunnel") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                },
                yieldnexus: {
                    bidCpmAdjustment: function(bidCpm, bid) {
                        if (ad.getBidFloor(bidCpm, bid, "yieldnexus") === 0) {
                            return 0;
                        }
                        var discrepancy = 0;
                        discrepancy = 22.0;
                        return bidCpm * (1 - discrepancy / 100);
                    }
                }
            };
        });
        if (ad.variables.blockAds) {
            Insticator.logger.logMessage("This geo is blocked for time based refresh.");
        } else {
            ad.variables.autoRefreshTimer = setInterval(ad.autoRefreshAd, ad.getAutoRefreshInterval());
            video.variables.autoRefreshTimer = setInterval(video.autoRefreshAd, video.variables.refreshInterval);
        }
        var analyticsProviders = [];
        analyticsProviders.push({
            provider: 'roxot',
            options: {
                publisherIds: ["77361626-29f3-4a0b-acf4-156a20f0699f"],
                host: "espn.co.uk",
                sampling: 20.0 / 100
            }
        });
        if (analyticsProviders.length > 0) {
            instBid.que.push(function() {
                instBid.enableAnalytics(analyticsProviders);
            });
        }
        Insticator.ad = {
            queue: Insticator.ad.q,
            action: function(e) {
                switch (e.data.action) {
                    case "refreshAd":
                        var hoverUnits = e.data.hoverUnits;
                        ad.refreshAdBasedOnClickEvent(hoverUnits);
                        break;
                }
            },
            loadAd: function(containerId) {
                if (ad.variables.ready) {
                    ad.appendAd(containerId);
                } else {
                    Insticator.logger.logMessage("Add to queue: " + containerId);
                    this.queue.push(containerId);
                }
            },
            loadAllAds: function() {
                Insticator.logger.logMessage("Load all ads");
                this.queue.forEach(function(containerId) {
                    ad.appendAd(containerId);
                });
            },
            confirmEmbedUUID: function(embedUUID) {
                Insticator.logger.logMessage("confirmEmbedUUID: " + embedUUID);
                tracking.confirmEmbedUUID(embedUUID);
            }
        };
    }());
    window.addEventListener("message", Insticator.ad.action, false);
} catch (e) {
    console.error("header code error: ", e.message);
}
var insticatorQueue = window["Insticator"]["q"];
if (insticatorQueue && insticatorQueue.length > 0) {
    for (var i = 0; i < insticatorQueue.length; i++) {
        if (insticatorQueue[i]["t"] === "em") {
            var embedUUID = insticatorQueue[i]["o"]["id"];
            embedLoad(embedUUID);
            checkAndConfirmEmbedUUID(embedUUID);
        }
    }
} else {
    window["Insticator"]["load"] = function(t, o) {
        var embedUUID = o["id"];
        embedLoad(embedUUID);
        checkAndConfirmEmbedUUID(embedUUID);
    }
}

function checkAndConfirmEmbedUUID(embedUUID) {
    if (typeof Insticator.ad.confirmEmbedUUID === 'function') {
        Insticator.ad.confirmEmbedUUID(embedUUID);
    }
}

function embedLoad(embedUUID) {
    console.log("Prepare to load embed: ", embedUUID);
    var targetDiv = document.querySelector("div[embed-id='" + embedUUID + "']");
    if (targetDiv) {
        appendEmbedElements(targetDiv, embedUUID);
    } else {
        targetDiv = document.querySelector("div[id='insticator-embed']:not([embed-id])");
        if (targetDiv) {
            appendEmbedElements(targetDiv, embedUUID);
        } else {
            console.log("Cannot find the proper div.");
        }
    }
};

function appendEmbedElements(targetElement, embedUUID) {
    var iFrame = document.createElement("iframe");
    iFrame.frameBorder = "0";
    iFrame.scrolling = "no";
    iFrame.marginheight = "0";
    iFrame.marginwidth = "0";
    iFrame.topmargin = "0";
    iFrame.leftmargin = "0";
    iFrame.id = "insticator-iframe";
    iFrame.allowtransparency = "true";
    targetElement.appendChild(iFrame);
    window.setTimeout(function() {
        var div = iFrame.contentWindow.document.createElement("div");
        div.id = "app";
        iFrame.contentWindow.document.body.appendChild(div);
        var script = iFrame.contentWindow.document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://d3lcz8vpax4lo2.cloudfront.net/embed-code/" + embedUUID + ".js";
        iFrame.contentWindow.document.head.appendChild(script);
    }, 500);
};