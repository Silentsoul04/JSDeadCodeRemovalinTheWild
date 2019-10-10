
            require(["imageLoad", "perfMarker", "perfMeasure"], function(n, t, i) {
                var r = "TimeToImageLoadStart",
                    u = "TimeToImageLoadEnd";
                t(r);
                n.cleanup();
                t(u);
                i("TimeForImageLoad", r, u, !0)
            });
            require(["jquery", "logging", "webApp.tokens", "c.deferred"], function(n, t, i) {
                function r(r) {
                    var u = n(this).attr(r);
                    i.validVersionPattern.test(u) || t.error("[staticsLinkVerifier.js] ver query parameter missing in statics url: " + u)
                }
                n("link[href*='_sc/css']").each(function() {
                    r.call(this, "href")
                });
                n("script[src*='_sc/js']").each(function() {
                    r.call(this, "src")
                })
            });
            require(["trackInfo", "window", "c.onload"], function(n, t) {
                function c() {
                    if (n.sitePage.requestId) {
                        var i = o.setupParameters("load_time");
                        i && (i.timeToOnload = u, i.timeToDomComplete = s, i.timeToFirstByte = h, f && (i.timeToFirstSearchRendered = f), t.performance && t.performance.navigation && t.performance.navigation.type && (i.navType = t.performance.navigation.type), require(["c.infopaneinteractive"], function(n) {
                            n && (i.timeToInfopaneInteractive = n);
                            o.sendUpdate(i)
                        }))
                    } else t.setTimeout(c, 500)
                }
                var o = n.telemetryTracking,
                    u, s, h, f, i = (t.performance || {}).timing,
                    r, e;
                i && (u = i.loadEventStart - i.navigationStart, s = i.domComplete - i.navigationStart, h = i.responseStart - i.navigationStart, t.performance && (r = t.performance.getEntriesByName("TimeToFirstSearchRendered", "mark"), r && (e = r.length, e && e > 0 && (f = Math.round(r[0].startTime)))), u && c())
            });
            define("c.dom", 1);
            window.onload = function(n) {
                function r() {
                    clearTimeout(t);
                    t = 0;
                    define("c.deferred", 1);
                    require(["c.deferred"], function() {
                        i = setTimeout(f, u)
                    })
                }

                function f() {
                    clearTimeout(i);
                    i = 0;
                    define("c.postdeferred", 1)
                }
                var t, i, u = 2e3;
                return function(n) {
                        var i;
                        n && (i = (window.JSON && window.JSON.parse(n) || {}).dms, u = (window.JSON && window.JSON.parse(n) || {}).ps);
                        t = setTimeout(r, i || 3e3)
                    }(document.getElementsByTagName("head")[0].getAttribute("data-js")),
                    function(i) {
                        typeof n == "function" && n(i);
                        define("c.onload", 1);
                        t && (window.setImmediate ? setImmediate(r) : setTimeout(r, 0))
                    }
            }(window.onload)
        