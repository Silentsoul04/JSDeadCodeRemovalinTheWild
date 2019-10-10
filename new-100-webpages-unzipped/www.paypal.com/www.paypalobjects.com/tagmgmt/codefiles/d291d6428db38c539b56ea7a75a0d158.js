Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    var isBaseTagReady = Bootstrapper.propertyWatcher.create(function() {
        return window._gabt
    });
    isBaseTagReady.change = function(props, isReady) {
        if (isReady) {
            var ga = window.ga;
            if (!ga) console.error("analytics.js is undefined.");
            window.dataLayer.application = "mpp";
            window.dataLayer.pageType = "mpp";
            Bootstrapper.on("click", "a", function(event) {
                var href = event.target.href;
                var classNames = event.target.className;
                var videoId;
                if (href && href.indexOf(".mp4") >= 0) {
                    videoId = event.target.id;
                    ga("PayPal.send", "event", "video", "play", videoId)
                }
                if (classNames && classNames.indexOf("youtube-player-modal") >= 0) {
                    videoId = event.target.getAttribute("video-id");
                    ga("PayPal.send", "event", "video", "youtube play", videoId)
                }
                return
            })
        }
    }
}, 2486752, 485099);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    var isBaseTagReady = Bootstrapper.propertyWatcher.create(function() {
        return window._gabt
    });
    isBaseTagReady.change = function(props, isReady) {
        if (isReady) {
            var ga = window.ga;
            if (!ga) console.error("analytics.js is undefined.");
            (function() {
                var ScrollTracking = function() {
                    var pagePath = window.location.href.replace(/^.*\/\/[^\/]+/, "");
                    var SETTINGS = {
                        "scrollGrouping": 25,
                        "eventLabel": pagePath,
                        "percentage_threshold": 60
                    };
                    var documentElement = document.documentElement;
                    var _current_bucket = 0;
                    var _max_scroll = 0;

                    function addEvent(obj, type, fn) {
                        if (obj.attachEvent) {
                            obj["e" + type + fn] = fn;
                            obj[type + fn] = function() {
                                obj["e" + type + fn](window.event)
                            };
                            obj.attachEvent("on" + type, obj[type + fn])
                        } else obj.addEventListener(type, fn, false)
                    }

                    function removeEvent(obj, type, fn) {
                        if (obj.detachEvent) {
                            obj.detachEvent("on" + type, obj[type + fn]);
                            obj[type + fn] = null
                        } else obj.removeEventListener(type, fn, false)
                    }

                    function _get_window_height() {
                        return window.innerHeight ||
                            documentElement.clientHeight || document.body.clientHeight || 0
                    }

                    function _get_window_Yscroll() {
                        return window.pageYOffset || document.body.scrollTop || documentElement.scrollTop || 0
                    }

                    function _get_doc_height() {
                        return Math.max(document.body.scrollHeight || 0, documentElement.scrollHeight || 0, document.body.offsetHeight || 0, documentElement.offsetHeight || 0, document.body.clientHeight || 0, documentElement.clientHeight || 0)
                    }

                    function _get_scroll_percentage() {
                        return (_get_window_Yscroll() + _get_window_height()) / _get_doc_height() *
                            100
                    }

                    function _update_scroll_percentage() {
                        _max_scroll = Math.max(_get_scroll_percentage(), _max_scroll);
                        var bucket = (_max_scroll > SETTINGS.scrollGrouping ? 1 : 0) * (Math.floor(_max_scroll / SETTINGS.scrollGrouping) * SETTINGS.scrollGrouping);
                        if (_max_scroll > 95) bucket = 100;
                        if (bucket > _current_bucket) {
                            _current_bucket = _max_scroll;
                            if (bucket == 100) removeEvent(window, "scroll", _update_scroll_percentage);
                            var eventAction = bucket + "% scrolled";
                            var eventCategory = "scroll";
                            var eventLabel = SETTINGS.eventLabel;
                            window.ga("PayPal.send",
                                "event", eventCategory, eventAction, eventLabel)
                        }
                    }
                    return {
                        init: function() {
                            if (Math.round(window.innerHeight / document.documentElement.scrollHeight * 100) < SETTINGS.percentage_threshold) addEvent(window, "scroll", _update_scroll_percentage);
                            return true
                        }
                    }
                }();
                try {
                    ScrollTracking.init()
                } catch (ex) {}
            })()
        }
    }
}, 2832299, 481062);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    var isBaseTagReady = Bootstrapper.propertyWatcher.create(function() {
        return window._gabt
    });
    isBaseTagReady.change = function(props, isReady) {
        if (isReady) {
            var ga = window.ga;
            if (!ga) {
                console.error("analytics.js is undefined.");
                Bootstrapper.reportException(new Error("475847 - GA-MPP-BRC-InPage-Tracking-Event - analytics.js is undefined."))
            }
            Bootstrapper.on("click", "a, button", function(event) {
                var paClickAttr =
                    this.getAttribute("data-pa-click");
                var link = this.getAttribute("href");
                var node = this.nodeName;
                ga(function(tracker) {
                    if (node && paClickAttr)
                        if (node.toLowerCase() == "a" && link) ga("PayPal.send", "event", "in-page link tracking", paClickAttr, link);
                        else {
                            if (node.toLowerCase() == "button") ga("PayPal.send", "event", "in-page link tracking", paClickAttr, "button")
                        }
                    else Bootstrapper.reportException(new Error("475847 - GA-MPP-BRC-InPage-Tracking-Event - Missing 'data-pa-click' attribute."))
                })
            })
        }
    }
}, 2832298, 475847);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    var isBaseTagReady = Bootstrapper.propertyWatcher.create(function() {
        return window._gabt
    });
    var getMenuButton = function(target) {
        var menuButton, dataHighlight;
        var currentTarget = target;
        if (currentTarget.tagName.toLowerCase() === "em") currentTarget = target.parentNode;
        menuButton = currentTarget.innerHTML.replace(/<(?:.|\n)*?>/gm, "");
        dataHighlight = currentTarget.getAttribute("data-highlight");
        if (dataHighlight !== null) {
            var label = dataHighlight.split("-")[1];
            menuButton = label + " \x3e " + menuButton
        }
        return menuButton.toLowerCase()
    };
    isBaseTagReady.change = function(props, isReady) {
        if (isReady) {
            var ga = window.ga;
            if (!ga) console.error("analytics.js is undefined.");
            Bootstrapper.on("click", "#main-menu a", function(event) {
                var menuName = "main menu";
                var menuButton = getMenuButton(event.target);
                ga(function() {
                    ga("PayPal.send", "event", "navigation tracking", menuName, menuButton)
                })
            });
            Bootstrapper.on("click", "footer a",
                function(event) {
                    var menuName = "footer menu";
                    var menuButton = getMenuButton(event.target);
                    ga(function() {
                        ga("PayPal.send", "event", "navigation tracking", menuName, menuButton)
                    })
                })
        }
    }
}, 2486753, 475655);
Bootstrapper.bindImmediate(function() {
    var Bootstrapper = window["Bootstrapper"];
    var ensightenOptions = Bootstrapper.ensightenOptions;
    var isBaseTagReady = Bootstrapper.propertyWatcher.create(function() {
        return window._gabt
    });
    isBaseTagReady.change = function(props, isReady) {
        if (isReady) {
            var ga = window.ga;
            if (!ga) {
                console.error("analytics.js is undefined.");
                Bootstrapper.reportException(new Error("analytics.js is undefined.", "484529 - GA-MPP-Outbound-Links-Event"))
            }
            window.dataLayer.application = "mpp";
            window.dataLayer.pageType =
                "mpp";
            Bootstrapper.on("click", "a", function(event) {
                var href = Bootstrapper.getProp(this, "href", "");
                var hostname = Bootstrapper.getProp(this, "hostname", "");
                var path = Bootstrapper.getProp(this, "pathname", "");
                if (href && href.indexOf("paypal.com") < 0) ga("PayPal.send", "event", {
                    eventCategory: "exit links",
                    eventAction: hostname,
                    eventLabel: path,
                    transport: "beacon"
                });
                return
            })
        }
    }
}, 2486755, 484529);