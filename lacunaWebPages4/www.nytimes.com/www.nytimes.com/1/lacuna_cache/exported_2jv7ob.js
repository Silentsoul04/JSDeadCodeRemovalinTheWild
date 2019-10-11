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

        // 22.016000000000002kB
        window.viHeadScriptSize = 22.016000000000002;
        (function() {
            var _f = function(e) {
                window.vi = window.vi || {}, window.vi.env = Object.freeze(e)
            };;
            _f.apply(null, [{
                "JKIDD_PATH": "https://a.nytimes.com/svc/nyt/data-layer",
                "ET2_URL": "https://a.et.nytimes.com",
                "WEDDINGS_PATH": "https://content.api.nytimes.com",
                "GDPR_PATH": "https://us-central1-nyt-wfvi-prd.cloudfunctions.net/gdpr-email-form",
                "RECAPTCHA_SITEKEY": "6LevSGcUAAAAAF-7fVZF05VTRiXvBDAY4vBSPaTF",
                "ABRA_ET_URL": "//et.nytimes.com",
                "NODE_ENV": "production",
                "SENTRY_SAMPLE_RATE": "10",
                "EXPERIMENTAL_ROUTE_PREFIX": "",
                "ENVIRONMENT": "prd",
                "RELEASE": "0298e4c81999e76b97ecbff789181cf7a51278b0",
                "AUTH_HOST": "https://myaccount.nytimes.com",
                "SWG_PUBLICATION_ID": "nytimes.com",
                "GQL_FETCH_TIMEOUT": "4000",
                "GOOGLE_CLIENT_ID": "1005640118348-amh5tgkq641oru4fbhr3psm3gt2tcc94.apps.googleusercontent.com"
            }]);
        })();;
        ! function() {
            if ('PerformanceLongTaskTiming' in window) {
                var g = window.__tti = {
                    e: []
                };
                g.o = new PerformanceObserver(function(l) {
                    g.e = g.e.concat(l.getEntries())
                });
                g.o.observe({
                    entryTypes: ['longtask']
                })
            }
        }();;
        ! function(n, e) {
            var t, o, i, c = [],
                f = {
                    passive: !0,
                    capture: !0
                },
                r = new Date,
                a = "pointerup",
                u = "pointercancel";

            function p(n, c) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[1962:2038]", functionData => eval(functionData))}

            function s() {
                o >= 0 && o < i - r && (c.forEach(function(n) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[2129:2176]", functionData => eval(functionData))}), c = [])
            }

            function l(t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[2228:2861]", functionData => eval(functionData))}

            function w(n) {
                ["click", "mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
                    n(e, l, f)
                })
            }
            w(n), self.perfMetrics = self.perfMetrics || {}, self.perfMetrics.onFirstInputDelay = function(n) {
                c.push(n), s()
            }
        }(addEventListener, removeEventListener);;
        try {
            var observer = new window.PerformanceObserver(function(list) {
                var entries = list.getEntries();

                for (var i = 0; i < entries.length; i += 1) {
                    var entry = entries[i];
                    var performance = {};

                    performance[entry.name] = Math.round(entry.startTime + entry.duration);
                    (window.dataLayer = window.dataLayer || []).push({
                        event: "performance",
                        pageview: {
                            performance: performance
                        }
                    });
                }
            });
            observer.observe({
                entryTypes: ["paint"]
            });
        } catch (e) {};
        ! function(i, e) {
            var a, s, c, p, u, g = [],
                l = "object" == typeof i.navigator && "string" == typeof i.navigator.userAgent && /iP(ad|hone|od)/.test(
                    i.navigator.userAgent),
                f = "object" == typeof i.navigator && i.navigator.sendBeacon,
                y = f ? l ? "xhr_ios" : "beacon" : "xhr";

            function d() {
                var e, t, n = i.crypto || i.msCrypto;
                if (n) t = n.getRandomValues(
                    new Uint8Array(18));
                else
                    for (t = []; t.length < 18;) t.push(256 * Math.random() ^ 255 & (e = e || +new Date)),
                        e = Math.floor(e / 256);
                return btoa(String.fromCharCode.apply(String, t)).replace(/\+/g, "-").replace(
                    /\//g, "_")
            }
            if (i.nyt_et) try {
                console.warn("et2 snippet should only load once per page")
            } catch (e) {} else i.nyt_et = function() {
                    var e, t, n, o = arguments;

                    function r(r) {
                        g.length && (function(e, t, n) {
                            if (
                                "beacon" === y || f && r) return i.navigator.sendBeacon(e, t);
                            var o = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                            o.open("POST", e), o.withCredentials = !0, o.setRequestHeader("Accept", "*/*"),
                                "string" == typeof t ? o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8") : "[object Blob]" === {}.toString.call(t) && t.type && o.setRequestHeader("Content-Type", t.type);
                            try {
                                o.send(t)
                            } catch (e) {}
                        }(a + "/track", JSON.stringify(g)), g.length = 0, clearTimeout(u), u = null)
                    }
                    if (
                        "string" == typeof o[0] && /init/.test(o[0]) && (c = d(), "init" == o[0] && !s)) {
                        if (s = d(),
                            "string" != typeof o[1] || !/^http/.test(o[1])) throw new Error("init must include an et host url");
                        a = String(o[1]).replace(/\/$/, ""), "string" == typeof o[2] && (p = o[2])
                    }
                    n = "page_exit" == (e = o[o.length - 1]).subject || "ob_click" == (e.eventData || {}).type, a && "object" == typeof e && (t = "page" == e.subject ? c : d(),
                        e.sourceApp && (p = e.sourceApp), e.sourceApp = p, g.push({
                            context_id: s,
                            pageview_id: c,
                            event_id: t,
                            client_lib: "v1.0.5",
                            sourceApp: p,
                            how: n && l && f ? "beacon_ios" : y,
                            client_ts: +new Date,
                            data: JSON.parse(
                                JSON.stringify(e))
                        }), "send" == o[0] || t == c || n ? r(n) : u || (u = setTimeout(r, 5500)))
                },
                i.nyt_et.get_pageview_id = function() {
                    return c
                }
        }(window);;
        var NYTD = NYTD || {};
        NYTD.Abra = function(t) {
                "use strict";

                function e(t) {
                    var e = r[t];
                    return e && e[1] || null
                }

                function n(t, e) {
                    if (t) {
                        var n, r, o = e[0],
                            i = e[1],
                            c = 0,
                            u = 0;
                        if (1 !== i.length || 4294967296 !== i[0])
                            for (n = a(t + " " + o) >>> 0, c = 0, u = 0; r = i[c++];)
                                if (n < (u += r[0])) return r
                    }
                }

                function a(t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[8114:8830]", functionData => eval(functionData))}var r,o={};return t.dataLayer=t.dataLayer||[],e.init=function(e){var a,o,i,c,u,h,l,s,f,p,d=[],v=[],m=(t.document.cookie.match(/ ( ? : ^ | ;) * nyt - a = ([ ^ ;] * ) / ) || [])[1], b = (t.document.cookie.match(/(?:^|;) *ab7=([^;]*)/) || [])[1], g = (t.location.search.match(/(?:^\?|&)abra=([^&]*)/) || [])[1];
                            if (r) throw new Error("can't init twice");
                            for (r = {}, u = (decodeURIComponent(b || "") + "&" + decodeURIComponent(g || "")).split("&"), a = u.length - 1; a >= 0; a--) h = u[a].split("="), h.length < 2 || (l = h[0]) && !r[l] && (s = h[1] || null, r[l] = [, s, 1], s && d.push(l + "=" + s), v.push({
                                test: l,
                                variant: s || "0"
                            }));
                            for (a = 0; a < e.length; a++) i = e[a], (o = i[0]) in r || (c = n(m, i) || [], c[0], f = c[1], p = !!c[2], r[o] = c, f && d.push(o.replace(/[^\w-]/g) + "=" + ("" + f).replace(/[^\w-]/g)), p && v.push({
                                test: o,
                                variant: f || "0"
                            })); d.length && t.document.documentElement.setAttribute("data-nyt-ab", d.join(" ")), v.length && t.dataLayer.push({
                                event: "ab-alloc",
                                abtest: {
                                    batch: v
                                }
                            })
                        }, e.reportExposure = function(e, n) {
                            if (!o[e]) {
                                o[e] = 1;
                                var a = r[e];
                                if (a) {
                                    var i = a[1];
                                    a[2] && t.dataLayer.push({
                                        event: "ab-expose",
                                        abtest: {
                                            test: e,
                                            variant: i || "0"
                                        }
                                    })
                                }
                                n && t.setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[11037:11116]", functionData => eval(functionData))}, 0)
                            }
                        }, e
                    }(this);;
                    (function() {
                        var NYTD = window.NYTD || {};

                        function setupTimeZone() {
                            var e = '[data-timezone][data-timezone~="' + (new Date).getHours() + '"] { display: block }',
                                t = document.createElement("style");
                            t.innerHTML = e, document.head.appendChild(t)
                        }

                        function addNYTAppClass() {
                            var e = window.navigator.userAgent || window.navigator.vendor || window.opera,
                                t = -1 !== e.indexOf("nyt_android"),
                                n = -1 !== e.indexOf("nytios");
                            (t || n) && document.documentElement.classList.add("NYTApp")
                        }

                        function setupPageViewId() {
                            NYTD.PageViewId = {}, NYTD.PageViewId.update = function() {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[12189:12741]", functionData => eval(functionData))}
                        }
                        var _f = function(e) {
                            try {
                                document.domain = "nytimes.com"
                            } catch (e) {}
                            window.swgUserInfoXhrObject = new XMLHttpRequest, window.__emotion = e.emotionIds, setupPageViewId(), setupTimeZone(), addNYTAppClass(), window.nyt_et("init", vi.env.ET2_URL, "nyt-vi", {
                                subject: "page",
                                canonicalUrl: (document.querySelector("link[rel=canonical]") || {}).href,
                                articleId: (document.querySelector("meta[name=articleid]") || {}).content,
                                nyt_uri: (document.querySelector("meta[name=nyt_uri]") || {}).content,
                                pubpEventId: (document.querySelector("meta[name=pubp_event_id]") || {}).content,
                                url: location.href,
                                referrer: document.referrer || void 0,
                                client_tz_offset: (new Date).getTimezoneOffset()
                            }), "undefined" != typeof nyt_et && "function" == typeof window.nyt_et.get_pageview_id ? NYTD.PageViewId.current = window.nyt_et.get_pageview_id() : NYTD.PageViewId.update(), NYTD.Abra.init(e.abraConfig, vi.env.ABRA_ET_URL)
                        };;
                        _f.apply(null, [{
                            "emotionIds": ["6n7j50", "1kj7lfb", "10m9xeu", "vz7hjd", "1fe7a5q", "1rn5q1r", "10488qs", "8pe5zk", "5wt1bj", "1vlye70", "ogiugu", "1gz70xg", "9e9ivx", "2bwtzy", "stscvm", "158f1cv", "118ydgp", "1vxc2sl", "cwdrld", "1wjnrbv", "tmjxlh", "1hd1ne6", "1k9ek97", "wu78io", "1y7qxpi", "1llhclm", "1iruc8t", "1ropbjl", "uw59u", "jxzr5i", "oylsik", "qtw155", "v0l3hm", "g4gku8", "1rr4qq7", "6xhk3s", "rxqrcl", "tj0ten", "ist4u3", "1gprdgz", "10t7hia", "mzqdl", "kwpx34", "1k2cjfc", "1vhk1ks", "6td9kr", "r5ic95", "15uy5yv", "1p8nkc0", "1hyfx7x", "5j8bii", "1am0aiv", "8atqhb", "f8wsfj", "mhvv8m", "m6999o", "zjzyr8", "1m9j9gf", "1q1yk17", "1tg51b9", "142l3g4", "4lbni7", "g7rb99", "ghw4n2", "1c5cfvc", "htgkrt", "e64et", "9zaqp9", "16fq4rz", "1kjk1j2", "88g286", "12yx39b", "4hu8jm", "1wqz2f4", "yl3z84", "1q3gjvc", "nc39ev", "amd09y", "ru1vxe", "ajnadh", "b7n1on", "1b9egsl", "1ruigs3", "v15h5m", "mm3pwi", "1egl8em", "o5uqvq", "1oxvs31", "1slnf6i", "na047m", "16f7co2", "e4gm3y", "1g8bx4t", "mky99g", "omcqsq", "2ei342", "1mtxzi7", "1lekzkb", "6p6lnl", "1yjtett", "1ee8y2t", "7xxagk", "7y3qfv", "avqkzc", "18bs8bj", "1om4z5c", "c7fqqs", "1nounav", "y3bpqq", "17q3ou7", "3r3g0m", "1lqor8g", "vusts", "z49qw6", "1gwb6ca", "n7jldk", "717c4s", "p3qvdn", "kqm762", "698um9", "1tk5puc", "k2t2rg", "ie51lk", "1dc3ky7", "19tmjl7", "1tzo2v2", "bep0uc", "8eo23l", "1tho1qm", "ci51w4", "17akprn", "1uqjmks", "mn5hq9", "1qmnftd", "1ho5u4o", "13o0c9t", "1yo489b", "1t0v8sy", "1a74oa6", "1ihorw", "1qr9tia", "1655c01", "1xdhyk6", "ahe4g0", "ykkply", "1nnvw3s", "rpp6l6", "1d8a290", "8xdxq2", "vktqhz", "1gituol", "bpgv3s", "bfvq22", "189d5rw", "1g7lxrp", "o3tihn", "1064d4e", "n42uu3", "15zaaaz", "1ez5fsm", "66az9p", "12z1600", "ud8usf", "1b72evd", "lvqoou", "140ogsk", "900dw4", "1g8pbzc", "ztmmfk", "ucmk12", "1blv1z4", "dcl9ft", "1vfoum8", "1m5bs2v", "1m986x7", "z3bqlk", "szotfh", "14clni4", "1s3sqwa", "18e2va", "u9lok6", "7a6cj6", "17sfj71", "pbey9w", "hvplzx"],
                            "abraConfig": [
                                ["vi-ads-et", [
                                    [257698038, "2_remainder", 1],
                                    [4037269258, null, 0]
                                ]],
                                ["dfp_adslot4v2", [
                                    [4294967296, "1_external", 1]
                                ]],
                                ["DFP_als", [
                                    [4294967296, "1_als", 1]
                                ]],
                                ["DFP_als_home", [
                                    [4294967296, "1_als", 1]
                                ]],
                                ["dfp_lazy4", [
                                    [42949673, "0_control", 1],
                                    [42949673, "1_r30", 1],
                                    [42949673, "2_r40", 1],
                                    [42949673, "3_r50", 1],
                                    [42949673, "4_r60", 1],
                                    [42949673, "5_r70", 1],
                                    [4037269258, null, 0]
                                ]],
                                ["medianet_toggle", [
                                    [4294967296, "0_default", 0]
                                ]],
                                ["amazon_toggle", [
                                    [4294967296, null, 0]
                                ]],
                                ["index_toggle", [
                                    [4294967296, "1_block", 0]
                                ]],
                                ["dfp_home_toggle", [
                                    [4294967296, null, 0]
                                ]],
                                ["dfp_story_toggle", [
                                    [4294967296, null, 0]
                                ]],
                                ["dfp_interactive_toggle", [
                                    [4294967296, null, 0]
                                ]],
                                ["FREEX_Best_In_Show", [
                                    [2147483648, "0_Control", 1],
                                    [2147483648, "1_Best", 1]
                                ]],
                                ["MKT_dfp_ocean_language", [
                                    [2147483648, "0_control", 1],
                                    [2147483648, "1_language", 1]
                                ]],
                                ["STORY_topical_recirc", [
                                    [2147483648, "0_control", 1],
                                    [2147483648, "1_variant", 1]
                                ]],
                                ["HOME_timesExclusive", [
                                    [2147483648, "0_control", 1],
                                    [2147483648, "1_variant", 1]
                                ]],
                                ["HOME_discovery_title", [
                                    [2147483648, "0_control", 1],
                                    [2147483648, "1_variant", 1]
                                ]],
                                ["MKT_GateDockMsgTap", [
                                    [715827883, "2_BAUDockTapGate", 1],
                                    [715827883, "4_BAUDockRBGate", 1],
                                    [1431655765, "2_BAUDockTapGate", 1],
                                    [1431655765, "4_BAUDockRBGate", 1]
                                ]],
                                ["SEARCH_FACET_DROPDOWN", [
                                    [2147483648, "0_FACET_MULTI_SELECT", 1],
                                    [2147483648, "1_DYNAMIC_FACET_SELECT", 1]
                                ]],
                                ["VG_gift_upsell_x_only", [
                                    [429496730, "0_control", 1],
                                    [3865470566, "1_upsell", 1]
                                ]],
                                ["FREEX_LIRE_SPLIT", [
                                    [2147483648, "0_LIRE", 0],
                                    [2147483648, "1_FREEX", 0]
                                ]],
                                ["ON_getstarted_app_dl_0819", [
                                    [4294967296, "1_appExperience", 1]
                                ]],
                                ["ON_login_interrupt_0819", [
                                    [4294967296, "3_login_return", 1]
                                ]],
                                ["ON_app_dl_mc4_0919", [
                                    [1073741824, "0_control", 1],
                                    [1073741824, "1_newDock", 1],
                                    [1073741824, "2_stdExpanded", 1],
                                    [1073741824, "3_truncator", 1]
                                ]],
                                ["MKT_dfp_EDU_BTS_Offer_Test", [
                                    [4294967296, "0_controloffer", 1]
                                ]],
                                ["MKT_DFP_ods", [
                                    [214748365, "0_control", 1],
                                    [1932735283, "1_test", 1],
                                    [2147483648, "2_test", 1]
                                ]],
                                ["STYLN_guide_v1", [
                                    [2147483648, "0_control_STYLN_guide_v1", 1],
                                    [2147483648, "1_guide_v1", 1]
                                ]],
                                ["STYLN_menu_v2", [
                                    [4294967296, "1_menu_v2", 1]
                                ]],
                                ["STYLN_menu_brexit", [
                                    [4080218932, "1_menu_brexit", 1],
                                    [214748364, "0_control_STYLN_menu_brexit", 1]
                                ]],
                                ["STYLN_menu_hongkong", [
                                    [4080218932, "1_menu_hongkong", 1],
                                    [214748364, "0_control_STYLN_menu_hongkong", 1]
                                ]],
                                ["STYLN_menu_election_live", [
                                    [1431655766, "2_menu_election_live", 1],
                                    [1431655765, "1_menu_election_live", 1],
                                    [1431655765, "0_control_STYLN_menu_election_live", 1]
                                ]],
                                ["STYLN_guide_election_regions", [
                                    [477218589, "8_guide_election_regions", 1],
                                    [477218588, "7_guide_election_regions", 1],
                                    [477218589, "6_guide_election_regions", 1],
                                    [477218588, "5_guide_election_regions", 1],
                                    [477218589, "4_guide_election_regions", 1],
                                    [477218588, "3_guide_election_regions", 1],
                                    [477218589, "2_guide_election_regions", 1],
                                    [477218588, "1_guide_election_regions", 1],
                                    [477218589, "0_control_STYLN_guide_election_regions", 1]
                                ]],
                                ["STORY_intentional_links_v1", [
                                    [1073741824, "0_control", 1],
                                    [1073741824, "1_top_link", 1],
                                    [1073741824, "2_mid_link", 1],
                                    [1073741824, "3_btm_link", 1]
                                ]],
                                ["ON_appDL_antiRegis_1019", [
                                    [1431655766, "0_control", 1],
                                    [1431655765, "1_appChoice", 1],
                                    [1431655765, "2_appOnly", 1]
                                ]],
                                ["MC_DFP_topbar_bar_anon_1019", [
                                    [2147483648, "0_control", 1],
                                    [2147483648, "1_login", 1]
                                ]],
                                ["MC_DFP_topbar_bar_regi_1019", [
                                    [2147483648, "0_control", 1],
                                    [2147483648, "1_subscription", 1]
                                ]],
                                ["ON_appDL_truncator_0919", [
                                    [1431655766, "0_control", 1],
                                    [1431655765, "1_appChoice", 1],
                                    [1431655765, "2_appOnly", 1]
                                ]],
                                ["MC_DFP_sub_gifting_1019", [
                                    [858993460, "0_control", 1],
                                    [858993459, "1_ad_unit", 1],
                                    [858993459, "2_product_unit", 1],
                                    [858993459, "3_ad_unit_recirc", 1],
                                    [858993459, "4_product_unit_recirc", 1]
                                ]],
                                ["AUTH_GoogleOneTap", [
                                    [2147483648, "0_control", 1],
                                    [2147483648, "1_oneTap", 1]
                                ]],
                                ["INBOX_indexpage_redesign", [
                                    [4294967296, "0_control", 0]
                                ]],
                                ["STYLN_trump_suite", [
                                    [3865470567, "1_trump_suite", 1],
                                    [429496729, "0_control_trump_suite", 1]
                                ]],
                                ["HL_sample", [
                                    [2147483648, "0", 1],
                                    [2147483648, "1", 1]
                                ]],
                                ["HL_100000006746387", [
                                    [2147483648, "0", 1],
                                    [2147483648, "1", 1]
                                ]],
                                ["HL_100000006750073", [
                                    [2147483648, "0", 1],
                                    [2147483648, "1", 1]
                                ]],
                                ["HL_100000006749875", [
                                    [2147483648, "0", 1],
                                    [2147483648, "1", 1]
                                ]]
                            ]
                        }]);
                    })();;
                    (function() {
                        var _f = function(e) {
                            var r = function() {
                                var r = e.url;
                                try {
                                    r += window.location.search.slice(1).split("&").reduce(function(e, r) {
                                        return "ip-override" === r.split("=")[0] ? "?" + r : e
                                    }, "")
                                } catch (e) {
                                    console.warn(e)
                                }
                                var n = new XMLHttpRequest;
                                for (var t in n.withCredentials = !0, n.open("POST", r, !0), n.setRequestHeader("Content-Type", "application/json"), e.headers) n.setRequestHeader(t, e.headers[t]);
                                return n.send(e.body), n
                            };
                            window.userXhrObject = r(), window.userXhrRefresh = function() {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[28107:28226]", functionData => eval(functionData))}
                        };;
                        _f.apply(null, [{
                            "url": "https://samizdat-graphql.nytimes.com/graphql/v2",
                            "body": "{\"operationName\":\"UserQuery\",\"variables\":{},\"query\":\"   query UserQuery {     user {       __typename       profile {         displayName       }       userInfo {         regiId         entitlements         demographics {           emailSubscriptions           wat           bundleSubscriptions {             bundle             inGrace             promotion             source           }         }       }       subscriptionDetails {         graceStartDate         graceEndDate         isFreeTrial         hasQueuedSub         startDate         endDate         status         entitlements       }     }   } \"}",
                            "headers": {
                                "nyt-app-type": "project-vi",
                                "nyt-app-version": "0.0.5",
                                "nyt-token": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs+/oUCTBmD/cLdmcecrnBMHiU/pxQCn2DDyaPKUOXxi4p0uUSZQzsuq1pJ1m5z1i0YGPd1U1OeGHAChWtqoxC7bFMCXcwnE1oyui9G1uobgpm1GdhtwkR7ta7akVTcsF8zxiXx7DNXIPd2nIJFH83rmkZueKrC4JVaNzjvD+Z03piLn5bHWU6+w+rA+kyJtGgZNTXKyPh6EC6o5N+rknNMG5+CdTq35p8f99WjFawSvYgP9V64kgckbTbtdJ6YhVP58TnuYgr12urtwnIqWP9KSJ1e5vmgf3tunMqWNm6+AnsqNj8mCLdCuc5cEB74CwUeQcP2HQQmbCddBy2y0mEwIDAQAB"
                            }
                        }]);
                    })();;
                    (function() {
                        var registry = window._interactiveRegistry = {};

                        function getId(t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[29882:30129]", functionData => eval(functionData))}
                        window.registerInteractive = function(t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[30195:30653]", functionData => eval(functionData))}, window.getInteractiveBridge = function(t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[30697:30844]", functionData => eval(functionData))};
                    })();;
                    100 * Math.random() <= vi.env.SENTRY_SAMPLE_RATE ? (window.INSTALL_RAVEN = !0, window.nyt_errors = {
                        ravenInstalled: !1,
                        list: [],
                        tags: []
                    }, window.onerror = function(n, r, o, w, i) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[31169:31492]", functionData => eval(functionData))}) : window.INSTALL_RAVEN = !1;;
                    (function() {
                        var _f = function(t, e, n) {
                            var a = window,
                                A = document,
                                o = function(t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[31749:31965]", functionData => eval(functionData))},
                                r = function(t, e, n, a, A) {
                                    var r = new XMLHttpRequest;
                                    r.open("GET", t, !0), r.onreadystatechange = function() {
                                        if (4 === r.readyState && 200 === r.status) {
                                            o(r.responseText);
                                            try {
                                                localStorage.setItem("nyt-fontFormat", e), localStorage.setItem(a, n)
                                            } catch (t) {
                                                return
                                            }
                                            localStorage.setItem(A, r.responseText)
                                        }
                                        return !0
                                    }, r.send(null)
                                },
                                c = function(e, n) {
                                    var A;
                                    try {
                                        A = localStorage.getItem("nyt-fontFormat")
                                    } catch (t) {}
                                    A || (A = function() {
                                        if (!("FontFace" in a)) return !1;
                                        var t = new FontFace("t", 'url("data:application/font-woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAcieB3aD8wURQ+TZazbRE9HvF5vde4KCYGhiCgq/NKPF0i6UIsZynbP+Xi9Ng+XLbNlmNz/xIBBqq61FIQRJhC/+QA/08PJQJ3sK5TZFMlWzC/iK5GUN40psgqvxwBjBOg6JUSJ7ewyKE2AAaXZrfUB4v+hze37ugJ9d+DeYqiDwVgCawviwVFGnuttkLqIMGivmDg") format("woff2")', {});
                                        return t.load().catch(function() {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[33832:33834]", functionData => eval(functionData))}), "loading" == t.status || "loaded" == t.status
                                    }() ? "woff2" : "woff");
                                    for (var c = 0; c < e.length; c++) {
                                        var i = e[c],
                                            l = "shared" !== i ? "-" + i : "",
                                            d = "nyt-fontHash" + l,
                                            s = "nyt-fontFace" + l,
                                            f = t[i][A],
                                            u = localStorage.getItem(d),
                                            g = localStorage.getItem(s);
                                        if (u === f.hash && g) o(g);
                                        else {
                                            var h = function(t, e, n, a, A) {
                                                return function() {
                                                    r(t, e, n, a, A)
                                                }
                                            }(f.url, A, f.hash, d, s);
                                            n ? h() : document.addEventListener("DOMContentLoaded", h)
                                        }
                                    }
                                };
                            c(e), window.addEventListener("load", function() {
                                c(n, !0)
                            })
                        };;
                        _f.apply(null, [{
                                "shared": {
                                    "woff": {
                                        "hash": "f2adc73415c5bbb437e993c14559e70e",
                                        "url": "/vi-assets/static-assets/shared-woff.fonts-f2adc73415c5bbb437e993c14559e70e.css"
                                    },
                                    "woff2": {
                                        "hash": "22b34a6a6fd840943496b658184afdd3",
                                        "url": "/vi-assets/static-assets/shared-woff2.fonts-22b34a6a6fd840943496b658184afdd3.css"
                                    }
                                },
                                "story": {
                                    "woff": {
                                        "hash": "3c668927c32fbefb440b4024d5da6351",
                                        "url": "/vi-assets/static-assets/story-woff.fonts-3c668927c32fbefb440b4024d5da6351.css"
                                    },
                                    "woff2": {
                                        "hash": "acec1a902e1795b20a0204af82726cd2",
                                        "url": "/vi-assets/static-assets/story-woff2.fonts-acec1a902e1795b20a0204af82726cd2.css"
                                    }
                                },
                                "opinion": {
                                    "woff": {
                                        "hash": "dfc5106c9c0aaa76688687e664474b04",
                                        "url": "/vi-assets/static-assets/opinion-woff.fonts-dfc5106c9c0aaa76688687e664474b04.css"
                                    },
                                    "woff2": {
                                        "hash": "e2b27ff317927dfd77bdd429409627e0",
                                        "url": "/vi-assets/static-assets/opinion-woff2.fonts-e2b27ff317927dfd77bdd429409627e0.css"
                                    }
                                },
                                "tmag": {
                                    "woff": {
                                        "hash": "4634f3c7ddebb9113b69d4578d9a0ba0",
                                        "url": "/vi-assets/static-assets/tmag-woff.fonts-4634f3c7ddebb9113b69d4578d9a0ba0.css"
                                    },
                                    "woff2": {
                                        "hash": "8622c93c260fa93b229b7249df708fb1",
                                        "url": "/vi-assets/static-assets/tmag-woff2.fonts-8622c93c260fa93b229b7249df708fb1.css"
                                    }
                                },
                                "mag": {
                                    "woff": {
                                        "hash": "109e6d301ed49c8078086b5892696adf",
                                        "url": "/vi-assets/static-assets/mag-woff.fonts-109e6d301ed49c8078086b5892696adf.css"
                                    },
                                    "woff2": {
                                        "hash": "fb42c728dc70cc4ef6010a60cb10b0bd",
                                        "url": "/vi-assets/static-assets/mag-woff2.fonts-fb42c728dc70cc4ef6010a60cb10b0bd.css"
                                    }
                                },
                                "well": {
                                    "woff": {
                                        "hash": "f0e613b89006e99b4622d88aa5563a81",
                                        "url": "/vi-assets/static-assets/well-woff.fonts-f0e613b89006e99b4622d88aa5563a81.css"
                                    },
                                    "woff2": {
                                        "hash": "77806b85de524283fe742b916c9d0ee4",
                                        "url": "/vi-assets/static-assets/well-woff2.fonts-77806b85de524283fe742b916c9d0ee4.css"
                                    }
                                }
                            },
                            ["shared"],
                            ["story", "opinion", "tmag", "mag", "well"]
                        ]);
                    })();;
                    (function() {
                        function swgDataLayer(e) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[39695:39962]", functionData => eval(functionData))}

                        function checkSwgOptOut() {
                            if (!window.localStorage) return !1;
                            var e = window.localStorage.getItem("nyt-swgOptOut");
                            if (!e) return !1;
                            var t = parseInt(e, 10);
                            return ((new Date).getTime() - t) / 864e5 < 1 || (window.localStorage.removeItem("nyt-swgOptOut"), !1)
                        }

                        function swgDeferredAccount(e, t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[40479:42734]", functionData => eval(functionData))}

                        function loginWithGoogle() {
                            return "undefined" != typeof window && (-1 === document.cookie.indexOf("NYT-S") && (!0 !== checkSwgOptOut() && (!!window.SWG && ((window.SWG = window.SWG || []).push(function(e) {
                                return e.init(vi.env.SWG_PUBLICATION_ID), e.getEntitlements().then(function(t) {lacuna_lazy_load("lacuna_cache/exported_2jv7ob.js[43108:44721]", functionData => eval(functionData))}).catch(function() {
                                    return !1
                                }), !0
                            }), !0))))
                        }
                        var _f = function() {
                            if (window.swgUserInfoXhrObject.checkSwgResponse = !1, window.SwGEntitlement = !1, -1 === document.cookie.indexOf("NYT-S")) {
                                var e = document.createElement("script");
                                e.src = "https://news.google.com/swg/js/v1/swg.js", e.setAttribute("subscriptions-control", "manual"), e.setAttribute("async", !0), e.onload = function() {
                                    loginWithGoogle()
                                }, document.getElementsByTagName("head")[0].appendChild(e)
                            }
                        };;
                        _f.apply(null, []);
                    })();
    