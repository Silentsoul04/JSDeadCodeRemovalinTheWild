
        var alsVariant = window.NYTD.Abra('DFP_als');
        if (alsVariant != null && alsVariant.match(/(0_control|1_als)/)) {
            window.NYTD.Abra.reportExposure('DFP_als');
        }
        if (window.NYTD.Abra('DFP_als') === '1_als') {
            (function() {
                var _f = function() {
                    window.googletag = window.googletag || {}, googletag.cmd = googletag.cmd || [];
                    var e = new XMLHttpRequest,
                        t = "prd" === window.vi.env.ENVIRONMENT ? "als-svc.nytimes.com" : "als-svc.dev.nytimes.com",
                        n = document.querySelector('[name="nyt_uri"]'),
                        o = null == n ? "" : encodeURIComponent(n.content),
                        a = document.querySelector('[name="template"]'),
                        s = document.querySelector('[name="prop"]'),
                        l = document.querySelector('[name="plat"]'),
                        i = null == a || null == a.content ? "" : a.content,
                        g = null == s || null == s.content ? "nyt" : s.content,
                        r = null == l || null == l.content ? "web" : l.content;
                    window.innerWidth < 740 && (g = "mnyt", r = "mweb"), "/" === location.pathname && (o = encodeURIComponent("https://www.nytimes.com/pages/index.html"));
                    var d = window.localStorage.getItem("als_test_clientside");
                    void 0 !== d && window.googletag.cmd.push(function() {
                        googletag.pubads().setTargeting("als_test_clientside", d)
                    });
                    var c = window.localStorage.getItem("mktg");
                    null !== c && window.googletag.cmd.push(function() {
                        googletag.pubads().setTargeting("mktg", c)
                    }), e.open("GET", "https://" + t + "/als?uri=" + o + "&typ=" + i + "&prop=" + g + "&plat=" + r), e.withCredentials = !0, e.send(), e.onreadystatechange = function() {
                        if (4 === e.readyState)
                            if (200 === e.status) {
                                var t = JSON.parse(e.responseText);
                                window.googletag.cmd.push(function() {
                                    void 0 !== t.als_test_clientside && (googletag.pubads().setTargeting("als_test_clientside", t.als_test_clientside), window.localStorage.setItem("als_test_clientside", "ls-" + t.als_test_clientside)), void 0 !== t.User && void 0 !== t.User.marketingValues && (googletag.pubads().setTargeting("mktg", t.User.marketingValues), window.localStorage.setItem("mktg", "ls-" + t.User.marketingValues)), Object.keys(t).forEach(function(e) {
                                        "User" === e && void 0 !== t[e] && window.localStorage.setItem("UTS_User", JSON.stringify(t[e]))
                                    })
                                })
                            } else {
                                console.error("Error " + e.responseText);
                                (window.dataLayer = window.dataLayer || []).push({
                                    event: "impression",
                                    module: {
                                        name: "timing",
                                        context: "script-load",
                                        label: "alsService-als-error"
                                    }
                                })
                            }
                    }
                };;
                _f.apply(null, []);
            })();
        }
    