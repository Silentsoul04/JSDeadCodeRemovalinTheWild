rain.rainshell("dislike#v1.0.23", function(e, t, i, a) {
    e("rainModule/BdrainswDislike/index", function(e) {
        function t() {
            this.dislikeCache = {}, this.moveFlag = !0, this.touchLength = 0, this.startPageX = 0, this.startPageY = 0, this.closeBtn = !0
        }

        function i(e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += "&" + i + "=" + e[i]);
            return t
        }

        function o(e) {
            e.oldURL.indexOf(k) > -1 && e.newURL.indexOf(k) <= -1 && ($(window).off("hashchange", o), $(k).remove())
        }
        var n, s, d, r, c, l, h, u, f = e("wiseindex/lib/thunder/thunder"),
            p = /logExtra:yc:(.*);yc;/,
            m = window.sSession,
            v = $("#index-kw"),
            k = "#report-view",
            g = "确定",
            w = "不感兴趣",
            C = "https://ufosdk.baidu.com/?m=Client&a=commonreport&appid=215939&platid=24985&product_line=90509",
            x = {
                minivideo: "33086",
                video: "32600",
                ads: "32601",
                picnews: "32599",
                news: "32598",
                answer: "33091"
            };
        return t.prototype = {
            init: function() {
                this.initThunder(), this.eventHandlers(), this.orientationInit()
            },
            initThunder: function() {
                var e = {
                    logid: m.logid || "",
                    ssid: m.ssid || "",
                    from: m.from || "",
                    pu: m.pu || "",
                    sid: m.sids || ""
                };
                h = f.create({
                    baseParams: e
                })
            },
            handleListener: function(e, t) {
                this.dataToDom(e, t)
            },
            dataToDom: function(e, t) {
                for (var i = this, a = e.data, o = [], n = 0; n < a.length; n++) o.push(n % 2 === 0 ? '<a href="javascript:;" class="border-handle">' + a[n] + "</a>" : '<a href="javascript:;" class="content-line-right border-handle">' + a[n] + "</a>");
                r = t.find(".content-line"), r.html(o.join("")), c = t.find(".dislikeMask"), s = t.find(".wise-dislike");
                var h = t.find(".dislike-report");
                if (i.dislikeCache.hasReport) {
                    var u = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
                    !u && h.addClass("android"), h.show()
                } else h.hide();
                setTimeout(function() {
                    i.goPosition(e.position), c.show(), s.show(), l = r.find("a"), d = t.find(".reason-upload")
                }, 0)
            },
            goPosition: function(e) {
                var t = window.innerHeight;
                e.y && 2 * e.y > t ? (s.addClass("triangleBottom frameShowBottom").removeClass("triangleTop frameShowTop"), s.css({
                    bottom: t - e.y,
                    top: "auto"
                })) : (s.addClass("triangleTop frameShowTop").removeClass("triangleBottom frameShowBottom"), s.css({
                    top: e.y + 35,
                    bottom: "auto"
                }))
            },
            postReasons: function(e) {
                a.removeClass("dislike-selected");
                var t = this;
                e.length > 0 ? e : e.push(w);
                var i = [],
                    o = [],
                    n = [],
                    s = [],
                    d = /看过类似的/,
                    r = /屏蔽来源(:|：)/,
                    c = /不想看(:|：)/;
                if (e.forEach(function(e) {
                        d.test(e) ? n.push(e) : r.test(e) ? o.push(e.replace(r, "")) : c.test(e) ? i.push(e.replace(c, "")) : s.push(e)
                    }), h.send({
                        tid: "1381",
                        ct: 1,
                        cst: 2,
                        logFrom: "mid_news",
                        logInfo: "dislike_confirm",
                        logExtra: JSON.stringify({
                            st: t.dislikeCache.st,
                            rid: t.dislikeCache.rid,
                            extra: t.dislikeCache.extra,
                            pos: t.dislikeCache.pos,
                            content: s,
                            flow: 12,
                            source: o,
                            tag: i,
                            repeat: n,
                            tabId: B.tabId
                        })
                    }), +t.dislikeCache.isAfd) {
                    var l = t.dislikeCache.logHandle,
                        u = window.ecom && (window.ecom[l] || window.ecom.dislikeStats);
                    u && u(t.dislikeCache.ele, e)
                }
                $(window).scroll()
            },
            makeReportIframe: function(e) {
                var t = $("<iframe></iframe>", {
                    id: k.slice(1),
                    src: e
                });
                c.after(t), location.hash = k, c.trigger("touchend"), $(window).off("hashchange").on("hashchange", o)
            },
            eventHandlers: function() {
                var e = this;
                $(".content-line").off("touchend").on("touchend", "a", function(e) {
                    e.preventDefault();
                    var t = $(this);
                    t.hasClass("a-checked") ? t.removeClass("a-checked") : t.addClass("a-checked"), d.text(l.hasClass("a-checked") ? g : w)
                }), $(".dislike-report").off("touchend").on("touchend", function(t) {
                    if (t.preventDefault(), h.send({
                            tid: "10411",
                            ct: 1,
                            cst: 2,
                            logFrom: "mid_news",
                            logInfo: "dislike_report",
                            logExtra: JSON.stringify({
                                st: e.dislikeCache.st,
                                rid: e.dislikeCache.rid,
                                extra: e.dislikeCache.extra,
                                pos: e.dislikeCache.pos,
                                tabId: B.tabId
                            })
                        }), e.dislikeCache.isAfd) {
                        var a = window.ecom && window.ecom.adReportStats;
                        return void(a && a(e.dislikeCache.ele, e.makeReportIframe))
                    }
                    var o = x[e.dislikeCache.st] || "",
                        n = {
                            nid: e.dislikeCache.rid,
                            channelid: o,
                            resource_id: e.dislikeCache.rid,
                            feed_extend_channel: o,
                            remark: e.dislikeCache ? "bjh" : ""
                        },
                        s = C + i(n);
                    e.makeReportIframe(s)
                }), $(".reason-upload").off("touchend").on("touchend", function(t) {
                    t.preventDefault();
                    var i = [];
                    l.each(function() {
                        $(this).hasClass("a-checked") && i.push($(this).text())
                    }), e.postReasons(i), e.hideDislikeAndMask(), e.removeComponent(e.dislikeCache.rid), e.tips("将为你减少推荐类似内容")
                }), $(".dislikeMask").off("touchend").on("touchend", function(t) {
                    e.moveFlag === !0 && (t.preventDefault(), e.hideDislikeAndMask(), e.dislikeCache = {}, a.removeClass("dislike-selected"))
                }), $(".dislikeMask, .wise-dislike").off("touchmove").on("touchmove", function(t) {
                    e.moveFlag = !1, t.preventDefault(), t.stopPropagation(), $(this).on("touchend", function() {
                        e.moveFlag = !0
                    })
                }), a.off("touchstart").on("touchstart", "[data-dislikeData]", function(t) {
                    v && v.blur(), e.closeBtn = !0, t.preventDefault(), e.startPageY = t.touches[0].pageY, e.touchLength = t.touches.length
                }), a.off("touchmove").on("touchmove", "[data-dislikeData]", function(t) {
                    var i = t.touches[0].pageY,
                        a = Math.abs(i - e.startPageY);
                    a > 10 && (e.closeBtn = !1)
                }), a.off("touchend").on("touchend", "[data-dislikeData]", function(t) {
                    if (e.touchLength > 1 || !e.closeBtn) return !1;
                    a.addClass("dislike-selected"), t.preventDefault(), t.stopPropagation();
                    var i = $(this),
                        o = i.siblings(".hide-dislike-data"),
                        s = o.attr("nid") || o.attr("data-rid"),
                        d = o.attr("source") || o.data("domain") || "",
                        r = 1 === parseInt(o.attr("dislike-type"), 10) ? 1 : 0;
                    u = r;
                    var c, l = +(o.attr("pos") || o.attr("data-pos")),
                        f = !1;
                    if (u) {
                        var m, v = [],
                            k = i[0].getBoundingClientRect().top;
                        o.find("i").each(function() {
                            e.removeComponent(e.dislikeCache.rid), v.push($(this).text())
                        }), m = {
                            position: {
                                y: k
                            },
                            data: v
                        }
                    }
                    if (r) {
                        var g = o.attr("data-log") || o.attr("dis-log"),
                            w = JSON.parse(g),
                            C = o.attr("data-handler"),
                            x = w.st,
                            b = w.extra;
                        c = {
                            st: x,
                            extra: b
                        }
                    } else {
                        var y = o.attr("dislog");
                        c = JSON.parse(y.match(p)[1])
                    }
                    return u && (f = !c.political_level && "off" !== o.attr("data-adReportSwitch")), e.dislikeCache = {
                        rid: s,
                        pos: l,
                        source: d,
                        isAfd: r,
                        st: c.st,
                        extra: JSON.parse(c.extra),
                        logHandle: C,
                        ele: o,
                        isBjh: c.isBaijiahao,
                        hasReport: f
                    }, n = $("body"), u ? (e.handleListener(m, n), void h.send({
                        tid: "1380",
                        ct: 1,
                        cst: 2,
                        logFrom: "mid_news",
                        logInfo: "dislike",
                        logExtra: JSON.stringify({
                            st: c.st,
                            rid: s.toString(),
                            extra: e.dislikeCache.extra,
                            pos: l,
                            tabId: B.tabId,
                            hasReport: +f
                        })
                    })) : (e.postReasons([]), e.removeComponent(e.dislikeCache.rid), void e.tips("将为你减少推荐类似内容"))
                })
            },
            hideDislikeAndMask: function() {
                s.hide(), l.each(function() {
                    $(this).removeClass("a-checked")
                }), c.hide(), d.text(w), r.html("")
            },
            removeComponent: function(e) {
                n && e && n.find(".hide-dislike-data").each(function() {
                    var t = $(this).attr("nid") || $(this).attr("data-rid");
                    return t === e ? ($(this).parents("[data-click-grey]").remove(), !1) : void 0
                })
            },
            tips: function(e) {
                var t = $('<div class="l-tips">' + e + "</div>");
                $("body").append(t), setTimeout(function() {
                    t.remove()
                }, 2e3)
            },
            debounce: function(e, t) {
                var i = null;
                return function() {
                    var a = this,
                        o = arguments;
                    clearTimeout(i), i = setTimeout(function() {
                        e.apply(a, o)
                    }, t)
                }
            },
            orientationInit: function() {
                var e = this;
                window.addEventListener("orientationchange", e.orientationClient)
            },
            orientationClient: function() {
                return c && s ? (s.hide(), void c.hide()) : !1
            }
        }, new t
    }), t(["rainModule/BdrainswDislike/index"], function(e) {
        e.init()
    })
});