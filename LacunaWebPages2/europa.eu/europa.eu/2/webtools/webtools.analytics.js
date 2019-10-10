$wt.extend({
    getSupercookieName: function(baseCookieName) {
        return location.host === 'europa.eu' ? 'main_' + baseCookieName : baseCookieName;
    },
    trackingCookie: {
        set: function(name, value, days, path, domain) {
            var domainParts, date, expires, host, path = path || "/";
            if (days) {
                date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = ";expires=" + date.toGMTString();
            } else {
                expires = "";
            }
            host = location.host;
            domainParts = host.split('.');
            if (domainParts.length > 2 && !domain) {
                domainParts = domainParts.slice(-3);
                domain = '.' + domainParts.join('.');
                document.cookie = name + "=" + value + expires + ";path=" + path + ";domain=" + domain;
            } else {
                document.cookie = name + "=" + value + expires + ";path=" + path + ";domain=" + host;
            }
        },
        get: function(name) {
            var nameEQ = name + "=";
            var cookieList = document.cookie.split(';');
            for (var i = 0; i < cookieList.length; i++) {
                var cook = cookieList[i];
                while (cook.charAt(0) === ' ') {
                    cook = cook.substring(1, cook.length);
                }
                if (cook.indexOf(nameEQ) === 0) {
                    return cook.substring(nameEQ.length, cook.length);
                }
            }
            return null;
        }
    },
    domchange: function(callback) {
        if (!$wt.domchange.callback) {
            var run = function() {
                clearTimeout(window.AnalyticsTimer);
                window.AnalyticsTimer = setTimeout(function() {
                    for (var x in $wt.domchange.callback) {
                        try {
                            $wt.domchange.callback[x]();
                        } catch (e) {}
                    }
                }, 250);
            };
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
            if (MutationObserver) {
                var M = new MutationObserver(run);
                M.observe(document.body, {
                    attributes: true,
                    characterData: true,
                    childList: true,
                    subtree: true,
                    attributeOldValue: true,
                    characterDataOldValue: true
                });
            } else if (window.addEventListener) {
                document.addEventListener('DOMNodeInserted', run, false);
                document.addEventListener('DOMNodeRemoved', run, false);
            }
            $wt.domchange.callback = [];
        }
        $wt.domchange.callback.push(callback);
    },
    trackLinks: function(str, callback) {
        if (!window._paq || !window.Piwik || !$wt.analytics.isTrackable()) {
            return false;
        }
        if (typeof str === "string") {
            var isExternal = $wt.isExternal(str);
            var isDocument = $wt.isDocument(str);
            var isLink = (!str.match(/^(javascript|mailto|#|sms)/i));
            var isNotSame = (str !== window.location.href);
            if ((isExternal || isDocument) && isLink && isNotSame) {
                _paq.push(['trackLink', str, isDocument ? 'download' : 'link', null, callback]);
            }
        } else if (Piwik.getAsyncTracker && !$wt.analytics.parameters.mobile) {
            var t = Piwik.getAsyncTracker();
            [].forEach.call(document.body.getElementsByTagName('a'), function(a) {
                if (!a.analyticsWasHere && !a.piwikTrackers && a.href && !a.href.match(/^(javascript|mailto|#|sms)/i) && !a.getAttribute("aria-controls")) {
                    t.addListener(a);
                    a.analyticsWasHere = true;
                }
            });
        }
    },
    isDocument: function(s) {
        if (typeof s !== "string") {
            if (s.className && (s.className + "").indexOf("piwik_download") !== -1) {
                return true;
            }
            s = s.href || "";
        }
        var d = ['7z', 'aac', 'apk', 'arc', 'arj', 'asf', 'asx', 'avi', 'azw3', 'bin', 'csv', 'deb', 'dmg', 'doc', 'docx', 'epub', 'exe', 'flv', 'gif', 'gz', 'gzip', 'hqx', 'ibooks', 'jar', 'jpg', 'jpeg', 'js', 'mobi', 'mp2', 'mp3', 'mp4', 'mpg', 'mpeg', 'mov', 'movie', 'msi', 'msp', 'odb', 'odf', 'odg', 'ods', 'odt', 'ogg', 'ogv', 'pdf', 'phps', 'png', 'ppt', 'pptx', 'qt', 'qtm', 'ra', 'ram', 'rar', 'rpm', 'sea', 'sit', 'tar', 'tbz', 'tbz2', 'bz', 'bz2', 'tgz', 'torrent', 'txt', 'wav', 'wma', 'wmv', 'wpd', 'xls', 'xlsx', 'xml', 'z', 'zip'];
        var p = new RegExp('\\.(' + d.join('|') + ')([?&#]|$)', 'i');
        return p.test(s);
    },
    isExternal: function(str) {
        var params = $wt.analytics.sitePaths;
        str = $wt.absolute(str);
        str = str.replace(/#.*$/, '').replace(/\?.*$/, '');
        var isExternal = true;
        for (var x in params) {
            if (String(str).indexOf(params[x]) !== -1) {
                isExternal = false;
            }
        }
        return isExternal;
    },
    trackPageView: function(params, can) {
        var params = $wt.mergeParams($wt.analytics.parameters, params);
        var soo = $wt.trackPageViewParams;
        if (soo) {
            params = $wt.mergeParams(params, soo);
            params.mode = "manual";
            $wt.trackPageViewParams = false;
        }
        var cfg = $wt.analytics.config();
        var inst = params["instance"] || 'ec.europa.eu';
        var tmpp = params["sitePath"];
        var path = (typeof tmpp === "string") ? [tmpp] : tmpp;
        var status = cfg[inst].status;
        var url = cfg[inst].url;
        if (!params["siteID"]) {
            console.log("WTERROR:Piwik,missing 'siteID' parameter");
        } else if (!path) {
            console.log("WTERROR:Piwik,missing 'sitePath' parameter");
        } else if (!status) {
            console.log('WTERROR:[PIWIK] The Piwik instance,[' + inst + '] is down,please try again later');
        } else {
            var currentUrl = (location.href).split("#")[0];
            if ((params["mode"] === "auto" || params["mode"] === "manual") && (params["currentTitle"] !== document.title || params["currentUrl"] !== currentUrl)) {
                if (document.referrer) {
                    _paq.push(['setReferrerUrl', params["currentUrl"]]);
                }
                _paq.push(['setCustomUrl', currentUrl]);
                _paq.push(['setGenerationTimeMs', 0]);
                params["currentUrl"] = currentUrl;
            }
            _paq.push(['setSiteId', params["siteID"]]);
            _paq.push(["setDomains", $wt.analytics.sitePaths]);
            if ($wt.analytics.parameters.cookiePath) {
                _paq.push(['setCookiePath', $wt.analytics.parameters.cookiePath]);
                can = true;
            }
            if (params["lang"]) {
                _paq.push(["setCustomDimension", 1, params["lang"]]);
            } else if ($wt.lang(true) !== false) {
                _paq.push(["setCustomDimension", 1, $wt.lang(true)]);
            } else {
                _paq.push(["setCustomDimension", 1, "unknown"]);
            }
            if (params["siteSection"]) {
                _paq.push(["setCustomDimension", 2, params["siteSection"]]);
            }(function(strSize, maxSize, arr, meta) {
                if (meta) {
                    (((meta.getAttribute('content') || "").split(",")).sort()).forEach(function(e) {
                        var k = e.replace(/^\s+|\s+$/gm, '');
                        strSize += k.length + 1;
                        if (strSize < maxSize) {
                            arr.push(k);
                        }
                    });
                    _paq.push(['setCustomDimension', 3, '.' + (arr.join('.')).toUpperCase() + '.']);
                }
            })(0, 253, [], document.querySelector("meta[name='ec_departments']"));
            if (params["is404"]) {
                _paq.push(['setDocumentTitle', '404/URL=' + encodeURIComponent(document.location.pathname + document.location.search) + '/From=' + encodeURIComponent(document.referrer)]);
            } else if (params["is403"]) {
                _paq.push(['setDocumentTitle', '403/URL=' + encodeURIComponent(document.location.pathname + document.location.search) + '/From=' + encodeURIComponent(document.referrer)]);
            } else if (params["is500"]) {
                _paq.push(['setDocumentTitle', '500/URL=' + encodeURIComponent(document.location.pathname + document.location.search) + '/From=' + encodeURIComponent(document.referrer)]);
            } else {
                _paq.push(['setDocumentTitle', encodeURIComponent(document.title)]);
            }
            _paq.push(['setTrackerUrl', url + 'piwik.php']);
            if (params["search"]) {
                _paq.push(['trackSiteSearch', params["search"]["keyword"] || "", params["search"]["category"] || false, params["search"]["count"] || 0]);
            }
            if (params['before']) {
                if (typeof window[params['before']] === "function") {
                    _paq = window[params['before']](_paq);
                }
            }
            if (!params['search'] && params['mode'] !== "notnow") {
                _paq.push(['trackPageView']);
            }
            if (params['mode'] === "notnow") {
                params['mode'] = "manual";
            }
            if (!params['mobile']) {
                _paq.push(['enableLinkTracking']);
            }
            _paq.push(['setDoNotTrack', true]);
        }
        if (params["after"]) {
            if (typeof window[params["after"]] === "function") {
                window[params["after"]]();
            }
        }
        $wt.analytics.parameters = params;
        return {
            "process": can,
            "instance": status,
            "url": url,
            "params": params
        };
    },
    analytics: {
        config: function() {
            try {
                return {
                    "root": {
                        "ec.europa.eu": ["ec.europa.eu\/index*", "ec.europa.eu\/about_*", "ec.europa.eu\/represent_*", "ec.europa.eu\/info", "ec.europa.eu\/priorities", "ec.europa.eu\/commission", "ec.europa.eu\/about", "ec.europa.eu\/atwork", "ec.europa.eu\/policies", "ec.europa.eu\/contracts_grants", "ec.europa.eu\/news", "ec.europa.eu\/legislation", "ec.europa.eu\/geninfo\/europa_analytics_*", "ec.europa.eu\/geninfo\/legal_notices_*", "ec.europa.eu\/green-papers", "ec.europa.eu\/white-papers", "ec.europa.eu\/cookies", "ec.europa.eu\/contact", "ec.europa.eu\/services", "ec.europa.eu\/your-rights", "ec.europa.eu\/visits", "ec.europa.eu\/sitemap"],
                        "europa.eu": ["europa.eu\/index*", "europa.eu\/european-union"],
                        "allowedIframeHosts": ["europa.eu", "ec.europa.eu"]
                    },
                    "ec.europa.eu": {
                        "url": "https:\/\/webanalytics.ec.europa.eu\/",
                        "status": true
                    },
                    "europa.eu": {
                        "url": "https:\/\/webanalytics.europa.eu\/",
                        "status": true
                    },
                    "testing": {
                        "url": "https:\/\/webgate.ec.europa.eu\/fpfis\/piwik\/",
                        "status": true
                    },
                    "awstesting": {
                        "url": "https:\/\/webanalytics.acc.fpfis.tech.ec.europa.eu\/",
                        "status": true
                    },
                    "optin": []
                };
            } catch (e) {
                return {
                    "root": {
                        "ec.europa.eu": ["ec.europa.eu/index*", "ec.europa.eu/about_*", "ec.europa.eu/represent_*", "ec.europa.eu/info", "ec.europa.eu/priorities", "ec.europa.eu/commission", "ec.europa.eu/about", "ec.europa.eu/atwork", "ec.europa.eu/policies", "ec.europa.eu/contracts_grants", "ec.europa.eu/news", "ec.europa.eu/legislation", "ec.europa.eu/geninfo/europa_analytics_*", "ec.europa.eu/geninfo/legal_notices_*", "ec.europa.eu/green-papers", "ec.europa.eu/white-papers", "ec.europa.eu/cookies", "ec.europa.eu/contact", "ec.europa.eu/services", "ec.europa.eu/your-rights", "ec.europa.eu/visits", "ec.europa.eu/sitemap"],
                        "europa.eu": ["europa.eu/index*", "europa.eu/european-union"]
                    },
                    "ec.europa.eu": {
                        "url": "https://webanalytics.ec.europa.eu/",
                        "status": true
                    },
                    "europa.eu": {
                        "url": "https://webanalytics.europa.eu/",
                        "status": true
                    },
                    "testing": {
                        "url": "https://webgate.ec.europa.eu/fpfis/piwik/",
                        "status": true
                    },
                    "awstesting": {
                        "url": "https://webanalytics.acc.fpfis.tech.ec.europa.eu/",
                        "status": true
                    }
                };
            }
        },
        parameters: false,
        mobile: function(event) {
            var params = $wt.analytics.parameters;
            if (!params.mobile) {
                return true;
            }
            var el = event.srcElement || event.target;
            while (el && !el.href) {
                el = el.parentNode;
            }
            if (el && el.href && !el.href.match(/^(javascript|mailto|#|sms)/i) && !el.piwikTrackers && el.href !== "" && el.href !== (location.href).split("#")[0] && ($wt.isExternal(el.href) || $wt.isDocument(el)) && !el.realClick) {
                event.preventDefault();
                event.stopPropagation();
                if (el.isTrigger) {
                    return;
                }
                el.isTrigger = true;
                var callback = (params.mobile || {}).callback;
                var validate = (typeof window[callback] === "function") ? window[callback](el) : true;
                var process = function() {
                    clearTimeout($wt.analytics.timer);
                    if (validate) {
                        el.realClick = true;
                        el.click();
                    }
                };
                $wt.trackLinks(el.href, process);
                $wt.analytics.timer = setTimeout(process, ((params.mobile || {}).delay || 1000));
            }
        },
        track: function() {
            clearTimeout(window.analyticsTimer);
            window.analyticsTimer = setTimeout(function() {
                $wt.trackLinks();
            }, 100);
        },
        getCookiePath: function() {
            var params = $wt.analytics.parameters;
            var tmpp = params["sitePath"];
            var path = (typeof tmpp === "string") ? [tmpp] : tmpp;
            path.sort(function(a, b) {
                return a.length > b.length;
            });
            var setCookiePath = (function(ref) {
                for (var i = 0, l = path.length; i < l; i++) {
                    if (ref.indexOf(path[i]) !== -1 && ref.indexOf(path[i]) < 9) {
                        return "/" + ((path[i].replace(/.*?:?\/\//g, "").replace(/^\/+|\/+$/g, ''))).split("/").slice(1).join("/");
                    }
                }
                return false;
            })(location.href);
            return $wt.analytics.parameters.cookiePath = setCookiePath;
        },
        deletePiwikCookies: function() {
            var cookieNames = document.cookie.split(";");
            for (var i = 0; i < cookieNames.length; i++) {
                var cookName = (cookieNames[i].split("=")[0]).trim();
                if (/_pk_(ses|id|ref)[\.a-z0-9]*/.test(cookName)) {
                    $wt.trackingCookie.set(cookName, '', -1);
                    $wt.trackingCookie.set(cookName, '', -1, $wt.analytics.getCookiePath(), location.host);
                    document.cookie = cookName + '=;Path=' + $wt.analytics.getCookiePath() + ';Expires=Thu,01 Jan 1970 00:00:01 GMT;';
                }
            }
        },
        isOptInModeEnable: function() {
            var cfg = $wt.analytics.config();
            var pathsOptin = cfg['optin'] || [];
            var domain = location.host.split('.').length > 3 ? location.host.split('.').slice(-3).join('.') : location.host;
            return pathsOptin.indexOf(domain) !== -1;
        },
        isOptedIn: function() {
            return $wt.trackingCookie.get($wt.getSupercookieName('eu_optin')) !== null;
        },
        isOptedOut: function() {
            return $wt.trackingCookie.get($wt.getSupercookieName('eu_optout')) !== null;
        },
        isDNTOn: function() {
            var doNotTrackOption = (window.doNotTrack || window.navigator.doNotTrack || window.navigator.msDoNotTrack || '');
            return (doNotTrackOption.charAt(0) === '1' || doNotTrackOption === 'yes');
        },
        optOut: function() {
            $wt.analytics.isOptInModeEnable() ? $wt.trackingCookie.set($wt.getSupercookieName('eu_optin'), '', -1) : $wt.trackingCookie.set($wt.getSupercookieName('eu_optout'), true, 375);
            $wt.analytics.deletePiwikCookies();
            $wt.analytics.cck.update(false);
        },
        optIn: function() {
            $wt.analytics.isOptInModeEnable() ? $wt.trackingCookie.set($wt.getSupercookieName('eu_optin'), true, 375) : $wt.trackingCookie.set($wt.getSupercookieName('eu_optout'), '', -1);
            $wt.analytics.cck.update(true);
        },
        cck: {
            get: function() {
                var cck = unescape($wt.trackingCookie.get("eu_cookie_consent"));
                return (cck !== "null") ? JSON.parse(cck) : {
                    a: {},
                    r: {}
                };
            },
            status: function() {
                var cck = this.get();
                var get = function(a) {
                    for (var x in a) {
                        if (a[x].indexOf("europa-analytics") >= 0) {
                            return true;
                        }
                    }
                    return false;
                };
                if (get(cck["a"])) {
                    return "accepted";
                }
                if (get(cck["r"])) {
                    return "refused";
                }
                return false;
            },
            set: function(v) {
                var host = (window.location.host.indexOf("europa.eu") >= 0) ? ".europa.eu" : false;
                document.cookie = "eu_cookie_consent=" + escape(v) + ";path=/" + ((!host) ? "" : ";domain=" + host);
            },
            update: function(stat) {
                var cck = this.get();
                for (var x in cck) {
                    for (var y in cck[x]) {
                        if (Array.isArray(cck[x][y])) {
                            var tmp = cck[x][y].filter(function(elm) {
                                return elm !== "europa-analytics";
                            });
                            cck[x][y] = tmp;
                        };
                    }
                }
                stat = (stat) ? "a" : "r";
                cck[stat]["europa"] = cck[stat]["europa"] || [];
                cck[stat]["europa"].push("europa-analytics");
                this.set(JSON.stringify(cck));
            }
        },
        isTrackable: function() {
            if ($wt.analytics.isDNTOn() || $wt.analytics.isOptedOut() || $wt.analytics.cck.status() === "refused") {
                $wt.analytics.deletePiwikCookies();
                return false;
            }
            if ($wt.analytics.isOptInModeEnable()) {
                return $wt.analytics.isOptedIn();
            }
            return true;
        },
        pushstate: function() {
            var p = $wt.analytics.parameters;
            if (p.mode !== "auto") {
                return;
            }
            clearTimeout(window.analyticsTimer);
            window.analyticsTimer = setTimeout(function() {
                $wt.trackPageView(p);
            }, 10);
        },
        popstate: function(e) {
            var p = $wt.analytics.parameters;
            if (p.mode !== "auto") {
                return;
            }
            clearTimeout(window.analyticsTimer);
            window.analyticsTimer = setTimeout(function() {
                if ((location.href).split("#")[0] !== p["currentUrl"]) {
                    $wt.analytics.parameters.currentUrl = (location.href).split("#")[0];
                    $wt.trackPageView($wt.analytics.parameters);
                }
            }, 50);
        },
        run: function(obj, params) {
            $wt.analytics.container = obj;
            $wt.analytics.parameters = params;
            $wt.analytics.getCookiePath();
            if (!$wt.analytics.isTrackable()) {
                $wt.next(obj);
                return false;
            }
            window._paq = window._paq || [];
            params.currentUrl = (document.referrer).split("#")[0];
            params.currentTitle = document.title;
            if (params.mobile || 'ontouchstart' in window) {
                params.mobile = params.mobile || true;
            }
            params.mode = params.mode || "default";
            params.mode = (params.mode === "manual") ? "notnow" : params.mode;
            var cfg = $wt.analytics.config();
            var temp = [];
            for (var x = 0, l = params.sitePath.length; x < l; x++) {
                var path = params.sitePath[x];
                var alias = cfg.root[path];
                if (alias) {
                    for (var z in alias) {
                        temp.push(alias[z]);
                    }
                } else {
                    temp.push(path);
                }
            }
            $wt.analytics.sitePaths = temp;
            this.parameters = params;
            var tracker = $wt.trackPageView(params);
            if (tracker.process && tracker.instance) {
                $wt.include(tracker.url + 'piwik.js', function() {
                    if (params.mobile) {
                        $wt.on(document, "click", $wt.analytics.mobile);
                    } else {
                        $wt.domchange($wt.analytics.track);
                    }
                    if (params.mode === "auto") {
                        $wt.on(window, 'popstate', $wt.analytics.popstate);
                        if (!(isIE && isIE < 9)) {
                            try {
                                var oriHistory = history.pushState;
                                history.pushState = function() {
                                    $wt.analytics.pushstate();
                                    oriHistory.apply(this, arguments);
                                };
                            } catch (e) {}
                        }
                    }
                }, "js", false, params["async"]);
            }
            $wt.next(obj);
        }
    }
});