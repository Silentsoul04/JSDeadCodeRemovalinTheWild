
        if (window.NYTD.Abra('dfp_home_toggle') !== '1_block') {
            (function() {
                var _f = function() {
                    var t, e, o = 50,
                        n = 50;

                    function i(t) {
                        if (!document.getElementById("3pCheckIframeId")) {
                            if (t || (t = 1), !document.body) {
                                if (t > o) return;
                                return t += 1, setTimeout(i.bind(null, t), n)
                            }
                            var e, a, r;
                            e = "https://static01.nyt.com/ads/tpc-check.html", a = document.body, (r = document.createElement("iframe")).src = e, r.id = "3pCheckIframeId", r.style = "display:none;", r.height = 0, r.width = 0, a.insertBefore(r, a.firstChild)
                        }
                    }

                    function a(t) {
                        if ("https://static01.nyt.com" === t.origin) try {
                            "3PCookieSupported" === t.data && googletag.cmd.push(function() {
                                googletag.pubads().setTargeting("cookie", "true")
                            }), "3PCookieNotSupported" === t.data && googletag.cmd.push(function() {
                                googletag.pubads().setTargeting("cookie", "false")
                            })
                        } catch (t) {}
                    }

                    function r() {
                        if (function() {
                                if (Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0) return !0;
                                if ("[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString()) return !0;
                                try {
                                    return window.localStorage && /Safari/.test(window.navigator.userAgent)
                                } catch (t) {
                                    return !1
                                }
                            }()) {
                            try {
                                window.openDatabase(null, null, null, null)
                            } catch (e) {
                                return t(), !0
                            }
                            try {
                                localStorage.length ? e() : (localStorage.x = 1, localStorage.removeItem("x"), e())
                            } catch (o) {
                                navigator.cookieEnabled ? t() : e()
                            }
                            return !0
                        }
                    }! function() {
                        try {
                            googletag.cmd.push(function() {
                                googletag.pubads().setTargeting("cookie", "unknown")
                            })
                        } catch (t) {}
                    }(), t = function() {
                            try {
                                googletag.cmd.push(function() {
                                    googletag.pubads().setTargeting("cookie", "private")
                                })
                            } catch (t) {}
                        } || function() {}, e = function() {
                            window.addEventListener("message", a, !1), i(0)
                        } || function() {},
                        function() {
                            if (window.webkitRequestFileSystem) return window.webkitRequestFileSystem(window.TEMPORARY, 1, e, t), !0
                        }() || r() || function() {
                            if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) return t(), !0
                        }() || e()
                };;
                _f.apply(null, []);
            })();
        }
    