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
(window.webpackJsonp = window.webpackJsonp || []).push([
    [12], {
        "1iyJ": function(e, n, t) {
            "use strict";
            t.r(n);
            t("eDyd")
        },
        3: function(e, n, t) {
            e.exports = t("1iyJ")
        },
        eDyd: function(e, n) {
            ! function() {
                "use strict";

                function e(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[379:1356]", functionData => eval(functionData))}

                function n(e) {
                    var n = window.location.href,
                        t = e.replace(/[[]]/g, "\\$&"),
                        o = new RegExp("[?&]".concat(t, "(=([^&#]*)|&|#|$)")).exec(n);
                    return o && o[2] ? decodeURIComponent(o[2].replace(/\+/g, "")) : ""
                }

                function t(e, n, t) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[1726:2125]", functionData => eval(functionData))}

                function o() {
                    var e = document.referrer || "",
                        n = /([a-zA-Z0-9_\-.]+)(@|%40)([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})/;
                    return n.test(e) || n.test(window.location.href)
                }

                function i(e) {
                    var n = document.cookie.match(new RegExp("".concat(e, "=([^;]+)")));
                    return n ? n[1] : ""
                }
                var a = {
                    adConfigPosition: 1,
                    nonPersonalized: "n",
                    collapsed: "c"
                };

                function d() {
                    return i("nyt-purr")[a.adConfigPosition] || ""
                }(function() {
                    var s, r, l = window.AdSlot4 || {},
                        c = window.performance && window.performance.timing && performance.timing.responseStart,
                        u = {},
                        p = [],
                        g = !1,
                        f = !1,
                        v = !0,
                        m = !1,
                        w = !1,
                        h = d() === a.collapsed,
                        b = !1;
                    if (l.init) return l;

                    function y(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[3415:3532]", functionData => eval(functionData))}

                    function A(e, n) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[3571:3748]", functionData => eval(functionData))}

                    function E(e) {
                        if (o() || e) l.events.publish({
                            name: "AdEmpty",
                            value: {
                                type: "AdsDisabled"
                            }
                        });
                        else {
                            var n, t, s, r, c = function() {
                                var e = window.googletag;
                                e ? e.cmd.push((function() {
                                    e._loadStarted_ ? (window.advBidxc && !window.advBidxc.isAdServerLoaded && (window.advBidxc.isAdServerLoaded = !0), "1" !== i("nyt-gdpr") && d() !== a.nonPersonalized || e.cmd.push((function() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[4475:4597]", functionData => eval(functionData))}))) : l.events.publish({
                                        name: "AdEmpty",
                                        value: {
                                            type: "AdBlockOn"
                                        }
                                    })
                                })) : l.events.publish({
                                    name: "AdEmpty",
                                    value: {
                                        type: "GptError"
                                    }
                                })
                            };
                            window.googletag && window.googletag.apiReady ? c() : ("https://securepubads.g.doubleclick.net/tag/js/gpt.js", n = c, t = function() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[5348:5658]", functionData => eval(functionData))}, s = document.getElementsByTagName("head")[0], r = document.createElement("script"), n && (r.onload = n), t && (r.onerror = t), r.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js", r.async = !0, s.appendChild(r))
                        }
                    }

                    function S(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[5966:6937]", functionData => eval(functionData))}

                    function z() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[6972:7216]", functionData => eval(functionData))}

                    function k(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[7252:7791]", functionData => eval(functionData))}

                    function T() {
                        window.IntersectionObserver ? (m = !0, window.IntersectionObserver.prototype.POLL_INTERVAL = 1e3) : document.addEventListener("scroll", function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[8000:8592]", functionData => eval(functionData))}(z, 1e3))
                    }

                    function L(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[8659:8772]", functionData => eval(functionData))}

                    function C(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[8808:10812]", functionData => eval(functionData))}
                    if (l.events = (s = {}, r = {}, {
                            publish: function e(n) {
                                var t = n.name,
                                    o = void 0 === t ? "" : t,
                                    i = n.value,
                                    a = void 0 === i ? {} : i,
                                    d = n.scope,
                                    l = void 0 === d ? "page" : d;
                                "all" !== l && e({
                                    name: o,
                                    value: a,
                                    scope: "all"
                                }), s[o] || (s[o] = {}), s[o][l] || (s[o][l] = []), s[o][l].push(a), r[o] && r[o][l] && r[o][l].forEach((function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[11599:11675]", functionData => eval(functionData))}))
                            },
                            subscribe: function(e) {
                                var n = e.name,
                                    t = void 0 === n ? "" : n,
                                    o = e.callback,
                                    i = void 0 === o ? function() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[11991:11993]", functionData => eval(functionData))} : o,
                                    a = e.scope,
                                    d = void 0 === a ? "page" : a;
                                r[t] || (r[t] = {}), r[t][d] || (r[t][d] = []);
                                var l = r[t][d].push(i) - 1;
                                return s[t] && s[t][d] && s[t][d].length && s[t][d].forEach((function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[12361:12437]", functionData => eval(functionData))})), {
                                    remove: function() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[12498:12605]", functionData => eval(functionData))}
                                }
                            },
                            unsubscribeToAll: function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[12729:13081]", functionData => eval(functionData))}
                        }), l.initializeAd = function(n, i) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[13142:17308]", functionData => eval(functionData))}, l.fillPlacements = function() {
                            var e = document.querySelectorAll(".place-ad:not(.placed-ad)");
                            if (e)
                                for (var n = 0; n < e.length; n++) {
                                    var t = e[n],
                                        o = t.id,
                                        i = t.dataset,
                                        a = i.position,
                                        d = i.sizeKey,
                                        s = "false" !== i.lazyLoad;
                                    o && a && (l.initializeAd(t, {
                                        id: o,
                                        position: a,
                                        sizeKey: d,
                                        lazyLoad: s
                                    }), t.classList.add("placed-ad"))
                                }
                        }, l.updateAdReq = function(e, n) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[18305:18800]", functionData => eval(functionData))}, l.refreshAds = function() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[18828:19607]", functionData => eval(functionData))}, l.init = function(e) {
                            var o = e || {},
                                a = o.adTargeting,
                                d = void 0 === a ? {} : a,
                                s = o.adUnitPath,
                                r = void 0 === s ? "" : s,
                                c = o.offset,
                                u = void 0 === c ? 400 : c,
                                p = o.haltDFP,
                                g = void 0 !== p && p,
                                f = o.lockdownAds,
                                v = void 0 !== f && f,
                                m = o.hideTopAd,
                                h = void 0 !== m && m,
                                y = o.sizeMapping,
                                A = void 0 === y ? {} : y,
                                S = o.lazyApi,
                                z = void 0 === S ? {} : S,
                                k = "s" === i("nyt-purr").substring(1, 2),
                                L = g || k;
                            if (!w) {
                                d.vp = window.matchMedia("(min-width: 1150px)").matches ? "large" : window.matchMedia("(min-width: 970px)").matches ? "medium" : "small", d.aid = i("nyt-a") || null;
                                var O = n("ad-keywords");
                                O && (d.adv = O);
                                var R = n("debugads");
                                R && (d.debugAdsQP = R), 1 === i("nyt-gdpr") && (d.gdprUser = !0), "out" === i("NYT-T").toLowerCase() && (d.noTracking = !0), l.props = {
                                    adTargeting: d,
                                    adUnitPath: r,
                                    offset: u,
                                    sizeMapping: A,
                                    hideTopAd: h,
                                    isSocrates: k,
                                    lazyApi: z
                                }, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((function() {
                                    var e, n, o, i = (e = d, n = window.googletag.pubads().getTargetingKeys(), Object.keys(e).filter((function(e) {
                                        return n.indexOf(e) < 0
                                    })).reduce((function(n, t) {
                                        return n[t] = e[t], n
                                    }), {}));
                                    Object.keys(i).forEach((function(e) {
                                        window.googletag.pubads().setTargeting(e, i[e])
                                    })), z.fetch && z.render ? (b = !0, o = z, window.googletag.cmd.push((function() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[22401:22748]", functionData => eval(functionData))}))) : (window.googletag.enableServices(), T()), l.fillPlacements(), window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[22891:23692]", functionData => eval(functionData))})), window.googletag.pubads().addEventListener("slotOnload", (function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[23766:24215]", functionData => eval(functionData))})), window.googletag.pubads().addEventListener("impressionViewable", (function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[24297:24748]", functionData => eval(functionData))}))
                                })), v ? window.googletag.cmd.push((function() {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[24830:24949]", functionData => eval(functionData))})) : window.addEventListener("message", (function(e) {
                                    (e.origin.match(/tpc\.googlesyndication\.com$/) || e.origin === window.location.origin) && C(e)
                                }), !1), E(L), l.events.publish({
                                    name: "AdSlotReady"
                                }), w = !0
                            }
                        }, l.cmd)
                        for (; l.cmd.length;) l.cmd.shift()();
                    l.cmd = {
                        length: 0,
                        push: function(e) {lacuna_lazy_load("/vi-assets/static-assets/adslot-7d0d39e65e55d4d7db21.js[25535:25594]", functionData => eval(functionData))}
                    }, window.AdSlot4 = l
                })()
            }()
        }
    },
    [
        [3, 42]
    ]
]);
//# sourceMappingURL=adslot-7d0d39e65e55d4d7db21.js.map