"use strict";
window.wafer && window.wafer.ready(function() {
    var n = window.encodeURIComponent(document.location.href);
    window.wafer.on("fetch:success", function(e) {
        var t = e.elem;
        if (t.classList && t.classList.contains("stream-batch-fetch")) {
            var a = "https://sb.scorecardresearch.com/p2?c1=2&c2=7241469&c14=-1&ns_c=UTF-8",
                i = window.rapidPageConfig && window.rapidPageConfig.rapidConfig && window.rapidPageConfig.rapidConfig.spaceid;
            if (a && i) {
                a = a + "&c5=" + i + "&c7=" + n + "&ns__t=" + Date.now().toString();
                var r = window.__cmp;
                r ? r("getVendorConsents", null, function(e, t) {
                    t && e && e.gdprApplies && e.vendorConsents && (a += "&cs_ucfr=" + (e.vendorConsents[77] ? 1 : 0)), window.wafer.utils.fireBeacon(a, {
                        useNavigator: !1,
                        useTimestamp: !1
                    })
                }) : window.wafer.utils.fireBeacon(a, {
                    useNavigator: !1,
                    useTimestamp: !1
                })
            }
        }
    });
    var c = "show-drawer",
        l = null,
        t = null,
        u = null,
        m = "stream-uuid-list",
        s = "userintent-disliked-anim",
        o = "data-uuid",
        a = "youmaylike",
        f = [],
        w = [],
        d = document.querySelector(".stream-items"),
        g = window.innerWidth || document.documentElement.clientWidth,
        p = {};
    if (d) {
        d.addEventListener("animationend", function(e) {
            e && e.target && ("hideStreamItem" === e.animationName || "fadeOutAdConfirm" === e.animationName) && e.target.remove && e.target.remove()
        }), d.addEventListener("click", function(e) {
            var t = e.target;
            if (t.classList.contains("userintent-undo")) {
                var a = t.getAttribute("data-wf-toggle-target"),
                    i = d.querySelector(a);
                if (i) {
                    var r = i.getAttribute(o);
                    r && p[r] && clearTimeout(p[r])
                }
            }
        });
        var e = d.querySelectorAll(".js-sponsored-moments-dwell-time");
        if (e.length) {
            e.forEach(function(e) {
                e.classList && e.classList.contains("js-reserve-moments") && (window.DARLA ? function e(t) {
                    var a = Math.floor(16 * g / 9),
                        i = t.querySelector("#defaultRESERVEMOMENTS"),
                        r = i && i.getAttribute("data-html");
                    if (r)
                        if (window.DARLA.inProgress()) setTimeout(function() {
                            e(t)
                        }, 500);
                        else {
                            var n = {
                                dest: "defaultRESERVEMOMENTS",
                                flex: {
                                    h: {
                                        min: a
                                    },
                                    w: {
                                        min: g
                                    }
                                },
                                h: a,
                                id: "RESERVEMOMENTS",
                                supports: {
                                    "exp-ovr": 1,
                                    "exp-push": 1,
                                    "resize-to": 1
                                },
                                w: g
                            };
                            window.DARLA.addPos(n);
                            var s = new window.DARLA.Response("RESERVEMOMENTS", {});
                            r = unescape(r), s.add("RESERVEMOMENTS", r), window.DARLA.render(s)
                        }
                }(e) : e.style.display = "none")
            });
            var i = e[0].querySelector(".js-panorama-scroll-view");
            i && 0 === i.scrollLeft && (i.scrollLeft = (i.scrollWidth - g) / 2)
        }
    }
    window.addEventListener("viewerOpened", function(e) {
        var t = e && e.detail && e.detail.uuid;
        if (t) {
            var a = document.querySelector('li[data-uuid="' + t + '"]'),
                i = a && a.getAttribute("data-parent-uuid");
            if (l = i && document.querySelector('li[data-uuid="' + i + '"]') || a, u = l && l.getElementsByClassName("stream-related-drawer")[0]) {
                if (l.classList.contains(c)) return;
                var r = function() {
                        for (var e = Array.prototype.slice.call(document.getElementsByClassName(m)), t = 0; t < e.length; t++) {
                            var a = e[t],
                                i = a.text;
                            a.classList.remove(m);
                            try {
                                var r = JSON.parse(i);
                                r && (Array.isArray(r.uuidList) && f.length + r.uuidList.length <= 250 && (f = f.concat(r.uuidList)), Array.isArray(r.adidList) && w.length + r.adidList.length <= 50 && (w = w.concat(r.adidList)))
                            } catch (e) {}
                        }
                        return {
                            dedupeADIDs: w,
                            dedupeUUIDs: f
                        }
                    }(),
                    n = {
                        config: {
                            dedupeADIDs: r.dedupeADIDs.join(","),
                            relatedUuid: t,
                            tachyonParams: {
                                query: {
                                    where: {
                                        dedupeUUIDs: r.dedupeUUIDs.join(","),
                                        uuid: t
                                    }
                                }
                            }
                        },
                        ctrl: "StreamRelated",
                        m_id: "tdv2-wafer-stream",
                        m_mode: "json"
                    },
                    s = u.getAttribute("data-cfg");
                if (s) try {
                    var o = JSON.parse(s);
                    n.config = Object.assign(n.config, o)
                } catch (e) {}
                var d = u.getElementsByClassName("fetch-body")[0];
                d && (d.text = JSON.stringify(n), u.classList.remove("wafer-fetch-error", "wafer-fetch-complete"), u.classList.add("wafer-fetch"), window.wafer.base.sync(u.parentNode))
            }
        }
    }), window.addEventListener("viewerClosed", function() {
        if (l && !l.classList.contains(c)) {
            var e = u && !!u.getElementsByClassName("stream-realted-list")[0];
            e && l.classList.add(c), e && t && window.rapidInstance && window.rapidInstance.beaconClick("strm", a, 0, Object.assign(t, {
                _p: 0,
                cnt_tpc: t.categoryLabel,
                g: l.getAttribute(o),
                grpt: "storyCluster",
                itc: 1,
                pkgt: a
            })), t = "", l = u = null
        }
    });
    window.wafer.on("toggle:change", function(e) {
        if (e && e.meta && e.elem) {
            var t = e.elem.getAttribute("data-wf-toggle-target");
            if ("userintent-hidestrmitem" === e.meta.className && "add" === e.meta.action) {
                if (t && d) {
                    var a = d.querySelector(t),
                        i = a && a.getAttribute(o);
                    i && (p[i] = setTimeout(function(e) {
                        return function() {
                            e.classList.contains(s) || e.classList.add(s)
                        }
                    }(a), 8e3))
                }
            } else if ("show-drawer" === e.meta.className) {
                var r = d.querySelector(t),
                    n = r && r.getElementsByClassName("drawer-fetch-target")[0];
                setTimeout(function() {
                    n && (n.innerHTML = "")
                }, 300)
            }
        }
    })
});