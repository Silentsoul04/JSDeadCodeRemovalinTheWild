
        (function() {
            var AdSlot4 = function() {
                "use strict";

                function b(n, i, t) {
                    var o = document.getElementsByTagName("head")[0],
                        e = document.createElement("script");
                    i && (e.onload = i), t && (e.onerror = t), e.src = n, e.async = !0, o.appendChild(e)
                }

                function z(n) {
                    var i = document.cookie.match(new RegExp("".concat(n, "=([^;]+)")));
                    return i ? i[1] : ""
                }
                return function() {
                    var B = window.AdSlot4 || {};
                    B.cmd = B.cmd || [];
                    var x = !1;
                    if (B.loadScripts) return B;

                    function A(o) {
                        "art, oak" !== o && "art,oak" !== o || (o = "art"), B.cmd.push(function() {
                            B.events.subscribe({
                                name: "AdDefined",
                                scope: "all",
                                callback: null
                            })
                        })
                    }
                    return B.loadScripts = function(n) {
                        var i, t, o, e, d, a, c = n || {},
                            s = c.loadMnet,
                            r = void 0 === s || s,
                            u = c.loadAmazon,
                            w = void 0 === u || u,
                            p = c.loadBait,
                            l = void 0 === p || p,
                            f = c.section,
                            m = void 0 === f ? "none" : f,
                            v = c.pageViewId,
                            g = void 0 === v ? "" : v,
                            h = c.pageType,
                            y = void 0 === h ? "" : h;
                        x || (!("1" === z("nyt-gdpr") || (i = document.referrer || "", (t = /([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})/).test(i) || t.test(window.location.href)) || "s" === z("nyt-purr").substring(1, 2)) && (!r || window.advBidxc && window.advBidxc.isLoaded || (d = g, a = "8CU2553YN", window.innerWidth < 740 && (a = "8CULO58R6"), b("https://contextual.media.net/bidexchange.js?cid=".concat(a, "&dn=").concat("www.nytimes.com", "&https=1"), function() {
                            window.advBidxc && window.advBidxc.isLoaded || console.warn("Media.net not loading properly")
                        }, null), window.advBidxc = window.advBidxc || {}, window.advBidxc.renderAd = null, window.advBidxc.startTime = (new Date).getTime(), window.advBidxc.customerId = {
                            mediaNetCID: a
                        }, window.advBidxc.misc = {
                            isGptDisabled: 1
                        }, d && (window.advBidxc.misc.keywords = d)), w && !window.apstag && (o = m, e = y, function(t, o) {
                            function n(n, i) {
                                o[t]._Q.push([n, i])
                            }
                            o[t] || (o[t] = {
                                init: function() {
                                    n("i", arguments)
                                },
                                fetchBids: null,
                                setDisplayBids: null,
                                targetingKeys: null,
                                _Q: []
                            })
                        }("apstag", window), b("//c.amazon-adsystem.com/aax2/apstag.js", function() {
                            window.apstag || console.warn("A9 not loading properly")
                        }, null), window.apstag.init({
                            pubID: "3030",
                            adServer: "googletag",
                            params: {
                                si_section: o
                            }
                        }), A(e))), l && b("https://nytimes.com/ads/google/adsbygoogle.js", function() {}, null), x = !0)
                    }, window.AdSlot4 = B
                }()
            }();
            AdSlot4.loadScripts({
                loadMnet: window.NYTD.Abra('medianet_toggle') !== '1_block',
                loadAmazon: window.NYTD.Abra('amazon_toggle') !== '1_block',
                section: 'home',
                pageType: 'hp',
                pageViewId: window.NYTD.PageViewId.current,
            });
            (function() {
                var _f = function(e) {
                    var t = performance.navigation && 1 === performance.navigation.type;

                    function o() {
                        return window.matchMedia("(max-width: 739px)").matches
                    }

                    function n(e) {
                        var n, r, i, d, a, p, u = function() {
                            var e = window.userXhrObject && "" !== window.userXhrObject.responseText && JSON.parse(window.userXhrObject.responseText).data || null,
                                t = null;
                            return e && e.user && e.user.userInfo && (t = e.user.userInfo.demographics), t
                        }();
                        return u ? (r = e, d = (n = u) && n.emailSubscriptions, (a = n && n.bundleSubscriptions) && r && (r.sub = "reg", d && d.length && (r.em = d.toString().toLowerCase()), n.wat && (r.wat = n.wat.toLowerCase()), a && a.length && a[0].bundle && (i = a[0], r.sub = i.bundle.toLowerCase(), i.source && (r.subsrc = i.source.toLowerCase()), i.promotion && (r.subprm = i.promotion), i.in_grace && (r.grace = i.in_grace.toString()))), e = r) : e.sub = "anon", o() ? (e.prop = "mnyt", e.plat = "mweb", e.ver = "mvi") : (e.prop = "nyt", e.plat = "web", e.ver = "vi"), "/es/" === window.location.pathname.substring(0, 4) && (e.prop = "esnyt", e.edn = "es", o() && (e.prop = "mesnyt")), "hp" === e.typ && (document.referrer && (e.topref = document.referrer), t && (e.refresh = "manual")), e.abra_dfp = (p = document.documentElement.getAttribute("data-nyt-ab")) ? p.split(" ").reduce(null, []) : "", e.page_view_id = window.NYTD.PageViewId && window.NYTD.PageViewId.current, e
                    }
                    var r = e || {},
                        i = r.adTargeting || {},
                        d = r.adUnitPath || "/29390238/nyt/homepage",
                        a = r.offset || 400,
                        p = r.hideTopAd || o(),
                        u = r.lockdownAds || !1,
                        s = r.sizeMapping || {
                            top: [
                                [970, ["fluid", [728, 90],
                                    [970, 90],
                                    [970, 250],
                                    [1605, 300]
                                ]],
                                [728, ["fluid", [728, 90],
                                    [1605, 300]
                                ]],
                                [0, ["fluid", [300, 250],
                                    [300, 420]
                                ]]
                            ],
                            fp1: [
                                [0, [195, 250]]
                            ],
                            fp2: [
                                [0, [195, 250]]
                            ],
                            fp3: [
                                [0, [195, 250]]
                            ],
                            interstitial: [
                                [0, [
                                    [1, 1],
                                    [640, 480]
                                ]]
                            ],
                            mktg: [
                                [1020, [300, 250]],
                                [0, []]
                            ],
                            pencil: [
                                [728, [
                                        [336, 46]
                                    ],
                                    [0, []]
                                ]
                            ],
                            pp_edpick: [
                                [0, ["fluid"]]
                            ],
                            pp_morein: [
                                [0, ["fluid"],
                                    [210, 218]
                                ]
                            ],
                            ribbon: [
                                [0, ["fluid"]]
                            ],
                            sponsor: [
                                [765, [150, 50]],
                                [0, [320, 25]]
                            ],
                            supplemental: [
                                [1020, [
                                    [300, 250],
                                    [300, 600]
                                ]],
                                [0, []]
                            ],
                            default: [
                                [970, ["fluid", [728, 90],
                                    [970, 90],
                                    [970, 250],
                                    [1605, 300]
                                ]],
                                [728, ["fluid", [728, 90],
                                    [300, 250],
                                    [1605, 300]
                                ]],
                                [0, ["fluid", [300, 250],
                                    [300, 420]
                                ]]
                            ],
                            chat: ["fluid", [300, 250],
                                [300, 420]
                            ]
                        },
                        l = r.dfpToggleName || "dfp_home_toggle",
                        w = r.lazyApi || {};
                    window.AdSlot4 = window.AdSlot4 || {}, window.AdSlot4.cmd = window.AdSlot4.cmd || [], window.AdSlot4.cmd.push(function() {
                        window.AdSlot4.init({
                            adTargeting: n(i),
                            adUnitPath: d,
                            sizeMapping: s,
                            offset: a,
                            haltDFP: "1_block" === window.NYTD.Abra(l),
                            hideTopAd: p,
                            lockdownAds: u,
                            lazyApi: w
                        }), window.NYTD.Abra.reportExposure("dfp_adslot4v2")
                    })
                };;
                _f.apply(null, [{
                    "adTargeting": {
                        "edn": "us",
                        "sov": "1",
                        "test": "projectvi",
                        "ver": "vi",
                        "typ": "hp",
                        "vp": "large",
                        "als_test": "1570705982575",
                        "prop": "nyt",
                        "plat": "web",
                        "gscat": "neg_mastercard,gs_politics,neg_hearts,neg_ibmtest,gs_entertain,gs_politics_misc,gs_politics_american,gs_science,neg_ibm,gv_death_injury,gs_science_environ"
                    }
                }]);
            })();
        })();
    