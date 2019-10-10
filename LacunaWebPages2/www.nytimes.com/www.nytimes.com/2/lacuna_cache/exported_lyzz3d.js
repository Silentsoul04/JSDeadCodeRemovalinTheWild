
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
                            }), "3PCookieNotSupported" === t.data && googletag.cmd.push(function() {})
                        } catch (t) {}
                    }

                    function r() {}! function() {
                        try {
                            googletag.cmd.push(function() {
                                googletag.pubads().setTargeting("cookie", "unknown")
                            })
                        } catch (t) {}
                    }(), t = function() {} || function() {}, e = function() {
                            window.addEventListener("message", a, !1), i(0)
                        } || function() {},
                        function() {
                            if (window.webkitRequestFileSystem) return window.webkitRequestFileSystem(window.TEMPORARY, 1, e, t), !0
                        }() || r() || function() {}() || e()
                };;
                _f.apply(null, []);
            })();
        }
    