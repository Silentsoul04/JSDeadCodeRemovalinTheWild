
        require(["window", "document", "location", "deferExec!"], function(n, t, i) {
            var r, u, f;
            if (i.host.indexOf(".xbox.com") != -1 && (r = document.getElementsByClassName("video-player"), r && r.length))
                for (u = 0; u < r.length; u++) f = r[u].getAttribute("data-player-data"), f && f.length && r[u].setAttribute("data-player-data", f.replace("autoLoad", "autoload"))
        });
        define("uhfUssCategoryService", ["require", "exports"], function(n, t) {
            "use strict";
            var i = function() {
                function n(n) {
                    this.market = n;
                    this.responseCache = {};
                    this.ajaxCall = function(n, t) {
                        var i = new XMLHttpRequest;
                        i.open("GET", n);
                        i.onreadystatechange = function() {
                            this.readyState === 4 && this.status >= 200 && this.status < 400 && t(this.responseText)
                        };
                        i.send();
                        i = null
                    }
                }
                return n.prototype.getServiceUrl = function(n) {
                    return "https://ussearchprod.trafficmanager.net/services/api/v1.0/store/categories" + ("?clientid=7f27b536-cf6b-4c65-8638-a0f8cbdfca65&scope=games,apps,devices,software&query=" + n + "&markets=" + this.market)
                }, n.prototype.getCachedCategory = function(n) {
                    return this.responseCache[this.getCacheKey(n)]
                }, n.prototype.getCategory = function(n, t) {
                    var i = this.getCachedCategory(n);
                    i ? t(i) : this.queryService(n, t)
                }, n.prototype.queryService = function(n, t) {
                    var i = this;
                    if (!n || this.getCachedCategory(n)) {
                        t && t(null);
                        return
                    }
                    this.ajaxCall(this.getServiceUrl(n), function(n) {
                        try {
                            var r = JSON.parse(n),
                                u = r.categories && r.categories[0],
                                f = r.query;
                            !u || !f.trim() ? t && t(null) : (i.responseCache[i.getCacheKey(f)] = u, t && t(u))
                        } catch (e) {
                            t && t(null)
                        }
                    })
                }, n.prototype.getCacheKey = function(n) {
                    return encodeURIComponent(n.trim().toLowerCase())
                }, n
            }();
            t.UhfUssCategoryService = i
        });
        require(["window", "document", "deferExec!"], function() {
            var i, t, n;
            if (window.location.href.indexOf("microsoft.com/en-us/p/surface-go/8v9dp4lnknsz") != -1 && (i = document.getElementById("MultiFeatureWithPivotsA_14"), i))
                for (t = i.getElementsByClassName("c-video-player"), t.length && (n = 0), n = 0; n < t.length; n++) t[n].setAttribute("data-player-data", t[n].getAttribute("data-player-data").replace('"trigger":false,', '"trigger":true,'))
        });
        require(["utility", "jqReady!"], function(n) {
            $("body.r_videoplayeriframeroute") && (n.saveToSessionStorage = function(n, t) {
                try {
                    if (window.sessionStorage && n && t) try {
                        sessionStorage.setItem(n, t)
                    } catch (i) {}
                } catch (i) {}
            }, n.getValueFromSessionStorage = function(n) {
                try {
                    if (!window.sessionStorage || !n) return null;
                    try {
                        return sessionStorage.getItem(n)
                    } catch (t) {
                        return null
                    }
                } catch (i) {
                    return null
                }
            }, n.saveToLocalStorage = function(n, t) {
                try {
                    if (window.localStorage && n && t) try {
                        localStorage.setItem(n, t)
                    } catch (i) {}
                } catch (i) {}
            }, n.getValueFromLocalStorage = function(n) {
                try {
                    if (!window.localStorage || !n) return null;
                    try {
                        return localStorage.getItem(n)
                    } catch (t) {
                        return null
                    }
                } catch (i) {
                    return null
                }
            })
        });
        window.location.href.indexOf("/newsapp") !== -1 && define("headData", [], function() {
            return {
                locale: document.getElementsByTagName("html")[0].getAttribute("lang").toLowerCase()
            }
        })
    