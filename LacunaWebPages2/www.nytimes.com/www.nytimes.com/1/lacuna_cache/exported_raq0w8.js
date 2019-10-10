// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

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
                            }), "3PCookieNotSupported" === t.data && googletag.cmd.push(function() {lacuna_lazy_load("lacuna_cache/exported_raq0w8.js[1269:1383]", functionData => eval(functionData))})
                        } catch (t) {}
                    }

                    function r() {lacuna_lazy_load("lacuna_cache/exported_raq0w8.js[1480:2703]", functionData => eval(functionData))}! function() {
                        try {
                            googletag.cmd.push(function() {
                                googletag.pubads().setTargeting("cookie", "unknown")
                            })
                        } catch (t) {}
                    }(), t = function() {lacuna_lazy_load("lacuna_cache/exported_raq0w8.js[3003:3295]", functionData => eval(functionData))} || function() {lacuna_lazy_load("lacuna_cache/exported_raq0w8.js[3310:3312]", functionData => eval(functionData))}, e = function() {
                            window.addEventListener("message", a, !1), i(0)
                        } || function() {lacuna_lazy_load("lacuna_cache/exported_raq0w8.js[3447:3449]", functionData => eval(functionData))},
                        function() {
                            if (window.webkitRequestFileSystem) return window.webkitRequestFileSystem(window.TEMPORARY, 1, e, t), !0
                        }() || r() || function() {lacuna_lazy_load("lacuna_cache/exported_raq0w8.js[3670:3813]", functionData => eval(functionData))}() || e()
                };;
                _f.apply(null, []);
            })();
        }
    