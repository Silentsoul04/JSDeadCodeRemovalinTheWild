
        function readCookie(e, t, o, n) {
            var r = {};
            for (n = (t = document.cookie.split("; ")).length - 1; 0 <= n; n--) r[(o = t[n].split("="))[0]] = o[1];
            return r[e]
        }

        function loadXMLDoc(e, t, o) {
            var n = navigator.userAgent,
                r = new XMLHttpRequest;
            r.open("POST", "/electrode/api/logger", !0), r.setRequestHeader("Content-type", "application/json");
            var a = [{
                tags: ["info"],
                data: {
                    msg: e,
                    data: {
                        fileName: o,
                        bstc: readCookie("bstc"),
                        userAgent: n,
                        location: readCookie("DL"),
                        loaded: t
                    }
                }
            }];
            r.send(JSON.stringify(a))
        }

        function handle404Error(e, t) {
            try {
                e.sheet.cssRules && !e.sheet.cssRules.length && loadXMLDoc("CSS_LOADED_HOMEPAGE", !1, t)
            } catch (e) {
                loadXMLDoc("CSS_LOADED_HOMEPAGE", !1, t)
            }
        }

        function searchForStyleSheet() {
            for (var e = document.styleSheets.length, t = 0; t < e; t++) {
                var o = document.styleSheets[t];
                if (o && o.href && 0 < o.href.indexOf("style.")) {
                    var n = o.owningElement ? o.owningElement : o.ownerNode;
                    n.onerror = function() {
                        handle404Error(n, o.href)
                    }
                }
            }
        }
        searchForStyleSheet();

        (function() {
            function getCookie(name) {
                if (name) {
                    var cookieRegex = new RegExp(name + "=([^\\s;]*)");
                    var sMatch = document.cookie.match(cookieRegex);
                    if (sMatch && sMatch[1]) {
                        return decodeURIComponent(sMatch[1]);
                    }
                }
                return "";
            };

            function get(path, obj) {
                try {
                    var val;
                    var paths = typeof path === "string" ? path.split(".") : path;
                    if (obj && typeof(obj) === "object") {
                        paths.forEach(function(k, i) {
                            if (i === 0) {
                                val = obj[k];
                            } else if (val) {
                                val = val[k];
                            }
                        });
                    }
                    return val;
                } catch (e) {
                    // In case of an error, prevents side effects on page level
                    return;
                }
            };

            function getMidasConfig() {
                return get('_wml.config.ccm.midasConfig', window) || {};
            };

            function getMidasUiConfig() {
                return get('_wml.config.ui.midasConfig', window) || {};
            };

            function loadScript(scriptUrl) {
                var script = document.createElement("script");
                script.async = true;
                script.src = scriptUrl;
                document.head.appendChild(script);
            };

            function loadAds() {
                if (!loadAds.loaded) {
                    var hasPerfMark = !!get('performance.mark', window);
                    if (hasPerfMark) {
                        // For some reason it causes an error when you store the reference of the mark fn.
                        window.performance.mark('load-midas-display');
                    }
                    loadAds.loaded = true;
                    var midasConfig = getMidasConfig();
                    var displayAds = (midasConfig.displayAds !== "false");
                    if (displayAds) {
                        var MDABT = getCookie("MDABT");
                        var midasDisplayScript = midasConfig["test-" + MDABT] || midasConfig.midasDisplayScript;
                        var gptUrl = "//www.googletagservices.com/tag/js/gpt.js";
                        loadScript(midasDisplayScript);
                        loadScript(gptUrl);
                    }
                }
            };
            var loadEvent = (
                getCookie('loadEvent') ||
                getMidasUiConfig()['loadEvent'] ||
                getMidasConfig()['loadEvent'] ||
                'instant'
            );
            window._wml.adLoader = function() {
                var eventListeners = {};
                return {
                    fireEvent: function fireEvent(eventName) {
                        var listeners = eventListeners[eventName];

                        if (listeners) {
                            listeners.forEach(function(listener) {
                                listener();
                            });
                        }
                    },
                    subscribe: function subscribe(eventName, listener) {
                        if (!eventListeners[eventName]) {
                            eventListeners[eventName] = [];
                        }

                        eventListeners[eventName].push(listener);
                    }
                };
            }();

            _wml.adLoader.subscribe(loadEvent, loadAds);
            _wml.adLoader.fireEvent('instant'); // Default load ads immediately
        })();
    