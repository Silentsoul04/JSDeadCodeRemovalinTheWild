define(function() {
    function t(t) {
        var e = z;
        try {
            var a = window.localStorage;
            e = JSON.parse(a && a.getItem("title_sign_arr") || "[]")
        } catch (n) {}
        return e.indexOf(t) > -1
    }

    function e() {
        return $(window).scrollTop() + $(window).height()
    }

    function a() {
        return window.sSession && window.sSession.isLogin && "1" === window.sSession.isLogin
    }

    function n(t) {
        var e = window.localStorage && window.localStorage.getItem("total_request" + t);
        if (e) {
            var a = e.split("_")[1];
            return a
        }
        return 0
    }

    function i(t) {
        var e = window.localStorage && window.localStorage.getItem("total_request" + t),
            a = new Date,
            n = parseInt(a.getFullYear() + "" + (a.getMonth() + 1) + a.getDate(), 10);
        if (e) {
            var i = parseInt(e.split("_")[0], 10),
                o = parseInt(e.split("_")[1], 10);
            n > i ? window.localStorage.setItem("total_request" + t, n + "_1") : (o++, window.localStorage.setItem("total_request" + t, n + "_" + o))
        } else window.localStorage && window.localStorage.setItem("total_request" + t, n + "_1")
    }

    function o() {
        return window.sSession && window.sSession.sids || $("#commonBase").data("sids") || ""
    }

    function r(t) {
        var e = location.href.match(/from=([^&/]*)/),
            i = {
                query: "wise_index",
                cp: "wise_home_page",
                pui: a() ? 1 : 0,
                pn: ++U,
                from: e ? e[1] : "0",
                wsw: screen.availWidth,
                wsh: screen.availHeight,
                wiw: $(window).width(),
                wih: $(window).height(),
                sid: window.sSession && window.sSession.logid || "",
                wosid: window.sSession && window.sSession.osid || "",
                wbwsid: window.sSession && window.sSession.browserid || "",
                isWiFi: window.sSession && window.sSession.isWifi || "",
                nettype: x(),
                fc: t.attr("data-fresh-count"),
                ft: t.attr("data-fresh-type"),
                pos: j,
                total: n(j) || 1,
                ecom: v("ecom"),
                expSids: o()
            };
        return i = d(i, t), K = {
            freshCount: i.fc,
            freshType: i.ft
        }, i
    }

    function d(t, e) {
        var a = e.parent().children().length,
            n = 9,
            i = s(e, a, n);
        return t.wise_feed_first_floor = i + 1, n >= a && (t.wise_feed_sync = 1), t
    }

    function s(t, e, a) {
        a = a || 9;
        var n = -1;
        if (e > a)
            for (var i = ".ads-item", o = t.index(), r = t.siblings(i), d = r.length, s = 0; d > s; s++) {
                var c = $(r[s]).index();
                if (o > c) {
                    n = c;
                    break
                }
            }
        return n
    }

    function c() {
        return G[U + 1] || R
    }

    function l(t) {
        try {
            ("undefined" == typeof window.AFD_ADSENSE || $.isArray(window.AFD_ADSENSE) === !1) && (window.AFD_ADSENSE = []), window.AFD_ADSENSE.push(t), window.AFD_ADSENSE[window.AFD_ADSENSE.length - 1].freshData = K
        } catch (e) {}
    }

    function w(t) {
        var e = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "H+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var a in e) new RegExp("(" + a + ")").test(t) && (t = t.replace(RegExp.$1, 1 === RegExp.$1.length ? e[a] : ("00" + e[a]).substr(("" + e[a]).length)));
        return t
    }

    function f(t) {
        if (t) {
            var e = (new Date).getTime(),
                a = new Image;
            t += "&rand=" + (e + Math.random()), a.onload = a.onerror = a.onabort = function() {
                a.onload = a.onerror = a.onabort = null, a = null
            }, a.src = t
        }
    }

    function _(t) {
        var e = {
            baiduid: window.B && window.B.cookie && window.B.cookie("BAIDUID"),
            tag: "wise_home",
            action: "renderfail",
            pn: U,
            sid: window.B.cookie("H_WISE_SIDS"),
            pre_qid: window.sSession && window.sSession.logid || "",
            extends_1: JSON && JSON.stringify(Q)
        };
        e = $.extend(e, t || {}), f(q + "?" + g(e))
    }

    function u(t) {
        var e = {
            productId: 8,
            _client_type: "1",
            _os_type: window.sSession && window.sSession.osid || "0",
            baiduid: window.B && window.B.cookie && window.B.cookie("BAIDUID"),
            da_page: "index",
            logid: window.sSession && window.sSession.logid || ""
        };
        e = $.extend(e, t || {}), f(C + "?" + g(e))
    }

    function h(t) {
        try {
            var e = t.urls,
                a = 3 === t.type,
                n = JSON.parse(decodeURIComponent(e));
            if (n.constructor === Array)
                for (var i = 0, o = n.length; o > i; i++) {
                    var r = n[i],
                        d = r.show_url,
                        s = r.click_url;
                    d && a && f(d), s && !a && f(s)
                }
        } catch (c) {}
    }

    function p(t) {
        var e = {
            pi: "",
            bi: window.B && window.B.cookie && window.B.cookie("BAIDUID"),
            ci: "",
            ext: "",
            cr: ""
        };
        e = $.extend(e, t || {}), f(J + "?" + g(e))
    }

    function m(t, e) {
        var a = {},
            n = t.attr("nid"),
            i = t.attr("pos"),
            o = JSON.parse(t.attr("data-log")),
            r = t.attr("data-source") ? [t.attr("data-source")] : [];
        t.children("i").each(function(t, n) {
            e.indexOf($(n).html()) >= 0 && (a[$(n).attr("key")] = $(n).attr("val"))
        }), u({
            da_area: "dislike",
            da_page_num: t.attr("data-pn"),
            da_locate: t.attr("data-pos"),
            da_type: 105,
            da_ext1: JSON.stringify(a),
            origin_time: (new Date).getTime(),
            ext_info: t.attr("data-ext_info") || ""
        }), p({
            pi: t.attr("data-pi"),
            ext: t.attr("data-ext_info") || "",
            cr: JSON.stringify(a)
        }), window.B.thunderLog && window.B.thunderLog.send && window.B.thunderLog.send({
            tid: "1381",
            ct: 1,
            cst: 2,
            logFrom: "mid_news",
            l4: "dislike_confirm",
            rids: n,
            pos: i,
            logExtra: JSON.stringify({
                st: o.st,
                rid: n,
                extra: o.extra,
                pos: i,
                content: e,
                source: r,
                tag: []
            })
        })
    }

    function g(t) {
        var e = [];
        for (var a in t) t.hasOwnProperty(a) && e.push(encodeURIComponent(a) + "=" + encodeURIComponent(t[a]));
        return e.join("&")
    }

    function v(t) {
        var e = window.location.href;
        t = t.replace(/[\[\]]/g, "\\$&");
        var a = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"),
            n = a.exec(e);
        return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
    }

    function x() {
        var t = 2,
            e = navigator.connection;
        return e && e.type && ("wifi" === e.type || 2 === e.type) && (t = 1), t
    }

    function S(t, a) {
        var n = e(),
            i = !!a;
        a = a || $(".ads-item"), a.filter(":not([data-fresh-type])").attr({
            "data-fresh-type": V,
            "data-fresh-count": X
        }), a.each(function(t, e) {
            var a = $(e),
                o = a.offset().top;
            if ("true" !== a.attr("data-init")) {
                var r = o - n,
                    d = c(),
                    s = !a.parent().siblings(".news-list-wrapper").length;
                Y && (s || i || r >= 10) && d >= r && (a.attr("data-init", "true"), Q.startPos = n, Q.adPos = o, Q.startTime && (Q.lastTime = Q.startTime), j = a.index() + 1, D(a))
            }
        }), clearTimeout(N), N = setTimeout(I, 150)
    }

    function y(t) {
        for (var e = t.parent().children(), a = t.index(), n = 0, i = 0; a > i; i++) {
            var o = e.eq(i);
            o.height() && n++
        }
        return n + 1
    }

    function I() {
        var a = e(),
            n = $(".ads-item");
        n.each(function(e, i) {
            var o = $(i),
                r = o.offset().top,
                d = o.find("a");
            if (o.height() > 0 && d.length > 0 && a > r) {
                var s = d.attr("data-pos"),
                    s = y(o),
                    c = d.attr("data-pn"),
                    l = o.attr("data-apr") || 0;
                l && (l = +l);
                var f = {},
                    p = (a - r) / o.height();
                p = p > 1 ? 1 : p, f.apr = +p.toFixed(2), f.apr > l && o.attr("data-apr", f.apr);
                var m = d.attr("data-show"),
                    g = d.attr("data-rank"),
                    v = d.attr("data-adid"),
                    x = d.attr("data-searchId"),
                    S = d.attr("data-src"),
                    I = d.attr("data-cmatch") || "",
                    b = d.attr("data-ip") || "",
                    D = d.attr("data-time") || "";
                "true" !== m && a - r > .3 * o.height() && (d.attr("data-show", "true"), _({
                    action: "adsexposure",
                    baiduid: window.B && window.B.cookie && window.B.cookie("BAIDUID"),
                    searchId: x,
                    rank: g || 1,
                    adid: v,
                    src: S || 1026,
                    time: w.call(new Date, "yyyy-MM-dd HH:mm:ss"),
                    ck: "",
                    pn: c,
                    extends_1: f.apr,
                    extends_2: s,
                    cmatch: I,
                    ip: b,
                    request_time: D
                }), window.B.thunderLog && window.B.thunderLog.send && window.B.thunderLog.send({
                    ct: 1,
                    cst: 10,
                    logFrom: "mid_news",
                    rids: d.attr("data-rid"),
                    pos: d.attr("data-pos"),
                    searchId: x
                }));
                var B = d.attr("data-showfor1px");
                if ("true" !== B && a > r) {
                    d.attr("data-showfor1px", "true");
                    var E = o.attr("data-title_sign");
                    if (E && !t(E)) {
                        var T = window.localStorage;
                        if (T) try {
                            var k = JSON.parse(T && T.getItem("title_sign_arr") || "[]");
                            k.length >= 10 && k.shift(), k.push(E), T.setItem("title_sign_arr", JSON.stringify(k))
                        } catch (A) {} else z.length >= 10 && z.shift(), z.push(E)
                    }
                    var P = 0;
                    n.each(function(a) {
                        var n = $(this).find("a").first(),
                            i = $(this).attr("data-title_sign");
                        if (!i || e >= a) return !0;
                        if (P >= 5) return !1;
                        if (!n.attr("data-showfor1px") && t(i)) {
                            $(this).empty();
                            var o = window.sSession && window.sSession.sids || $("#commonBase").data("sids") || "",
                                r = {
                                    da_type: 5,
                                    da_freshType: $(this).attr("data-fresh-type"),
                                    da_freshCount: $(this).attr("data-fresh-count"),
                                    origin_time: (new Date).getTime(),
                                    da_ext2: JSON && JSON.stringify(Q),
                                    da_ext4: o
                                };
                            u($.extend(r, {
                                da_ext1: 11
                            }))
                        }
                        P++
                    }), u({
                        da_page_num: c,
                        da_locate: s,
                        da_type: 3,
                        origin_time: (new Date).getTime(),
                        ext_info: d.attr("data-ext_info") || ""
                    }), h({
                        da_page_num: c,
                        da_locate: s,
                        type: 3,
                        ext_info: d.attr("data-ext_info") || "",
                        urls: d.attr("data-cpmChargeUrls") || ""
                    })
                }
            }
            var O = o.attr("data-store");
            "true" !== O && 0 === o.height() && o.attr("data-ext_info") && a > r && (o.attr("data-store", "true"), u({
                da_type: 3,
                da_locate: o.index() + 1,
                origin_time: (new Date).getTime(),
                ext_info: o.attr("data-ext_info") || ""
            }))
        })
    }

    function b(t, e) {
        this.elem = t, this.result = e, this.elemIdx = t.index(), this.elemParentChildren = t.parent().children(), this.elemParentChildrenLength = this.elemParentChildren.length
    }

    function D(t) {
        T(), t.removeAttr("data-rid"), t.removeAttr("data-pos");
        var e = M;
        F && (e = M + "&show_info=" + F);
        var a = o(),
            n = {
                da_type: 6,
                da_freshType: t.attr("data-fresh-type"),
                da_freshCount: t.attr("data-fresh-count"),
                origin_time: (new Date).getTime(),
                da_ext2: JSON && JSON.stringify(Q),
                da_ext4: a
            };
        i(j);
        var d = r(t);
        $.ajax({
            url: e,
            type: "GET",
            dataType: "jsonp",
            timeout: 5e3,
            data: d
        }).done(function(e) {
            if (l($.extend(e, {
                    requestParams: d,
                    cookie: window.B && window.B.cookie && window.B.cookie("BAIDUID")
                })), k(t), P(), 0 !== e.err_no) return void u($.extend(n, {
                da_ext1: 1
            }));
            if (e.ad_place_list.length && !e.ad_place_list[0].ad_place_data && e.ad_place_list[0].ad_item_list.length && e.ad_place_list[0].ad_item_list[0].ext_info && t.attr("data-ext_info", e.ad_place_list[0].ad_item_list[0].ext_info), e.ad_place_list.length <= 0 || !e.ad_place_list[0].ad_place_data) return void u($.extend(n, {
                da_ext1: 2
            }));
            var a = new b(t, e),
                i = a.getShouldRenderInfo(),
                o = i.shouldRender,
                r = i.movedPrevElem;
            if (o) {
                r && t.insertAfter(r);
                var s = e.ad_place_list[0].title_sign;
                s && t.attr("data-title_sign", s);
                var c = t.html(e.ad_place_list[0].ad_place_data),
                    w = c.find("a").filter(':not([data-type="ec_ad_download_btn"])').filter(":not([data-exclude-afd])"),
                    f = c.find('[dislike-type="1"]'),
                    _ = w.attr("data-searchId") || Math.floor(1e17 * Math.random());
                j = t.index() + 1;
                var h = {
                        "data-rid": "ecomads-" + _ + "-" + U,
                        "data-pos": j,
                        "data-pn": U
                    },
                    p = {
                        nid: "ecomads-" + _ + "-" + U,
                        pos: j,
                        "data-pn": U
                    };
                if (w.attr(h), f.attr(p), e.ad_place_list[0].ad_place_js.length > 0) try {
                    w.attr("data-ext_info", e.ad_place_list[0].ad_place_js), f.attr("data-ext_info", e.ad_place_list[0].ad_place_js)
                } catch (m) {}
                var g = w.attr("data-showinfo");
                return g && (F = g), w.bind("click", function() {
                    B(w, "hotarea")
                }), t.find('[data-type="ec_ad_asyn_phone"]').on("click", function(t) {
                    t.stopPropagation(), B(w, "button"), E(w, "btn_tel")
                }), t.find('[data-type="ec_ad_form_btn"]').on("click", function(t) {
                    t.stopPropagation(), B(w, "button"), E(w, "btn_form")
                }), t.find('[data-type="ec_ad_download_label"]').on("click", function(t) {
                    t.stopPropagation(), B(w, "downbtn"), E(w, "btn_dl")
                }), void Z("adLoadSuccess")
            }
            u($.extend(n, {
                da_ext1: 4
            }))
        }).fail(function(e, a) {
            Z("adLoadFail"), l({
                textStatus: a
            }), k(t), P(), u($.extend(n, {
                da_ext1: 5,
                da_ext3: a
            }))
        })
    }

    function B(t, e) {
        t && (e = e || "", u({
            da_area: e,
            da_page_num: t.attr("data-pn"),
            da_locate: t.attr("data-pos"),
            da_type: 2,
            origin_time: (new Date).getTime(),
            ext_info: t.attr("data-ext_info") || ""
        }))
    }

    function E(t, e) {
        t && (e = e || "", window.B.thunderLog && window.B.thunderLog.send && window.B.thunderLog.send({
            ct: 1,
            cst: 2,
            logFrom: "mid_news",
            logInfo: e,
            rids: t.attr("data-rid"),
            pos: t.attr("data-pos")
        }))
    }

    function T() {
        Q.startTime = (new Date).getTime(), Q.interval = Q.startTime - Q.lastTime
    }

    function k(t) {
        Q.endTime = (new Date).getTime(), Q.requestTime = Q.endTime - Q.startTime;
        var a = e(),
            n = t.offset().top;
        Q.endPos = a, Q.distance = n - a
    }

    function A() {
        var t = $("[name=word]");
        t.on("focus", function() {
            Y = !1
        }), t.on("blur", function() {
            Y = !0
        }), $(window).on("scroll", S)
    }

    function P() {
        var t = window.B.cookie("pub_env");
        "9" === t && setTimeout(function() {
            if (!document.getElementById("_tb_w")) {
                var t = document.createElement("script");
                t.setAttribute("charset", "utf-8"), t.id = "_tb_w", t.src = "//tb1.bdstatic.com/tb/_tb_bkmklet.js?" + Math.floor(+new Date), document.body.appendChild(t)
            }
        }, 20)
    }

    function O() {
        A(), window.ecom = window.ecom || {}, window.ecom.fclick = _, window.ecom.request = f, window.ecom.paramsToUrl = g, window.ecom.dislikeStats = m
    }
    var N, F, R = 500,
        L = 5,
        M = "//feed.baidu.com/feed/api/wise/getwiseafdads?_api=new",
        q = "http:" === location.protocol ? "http://fclick.baidu.com/w.gif" : "https://sp0.baidu.com/-rU_dTmfKgQFm2e88IuM_a/w.gif",
        C = "//als.baidu.com/clog/glog",
        J = "//afd.baidu.com/afd/close",
        U = -1,
        j = 7,
        H = 0,
        W = 1,
        Y = !0,
        G = {},
        K = "",
        Q = {
            height: $(window).height(),
            interval: 0,
            lastTime: (new Date).getTime(),
            startTime: 0,
            endTime: 0,
            startPos: 0,
            endPos: 0,
            adPos: 0,
            requestTime: 0,
            distance: 0
        },
        z = [],
        V = 3,
        X = W;
    window.B && window.B.listen("skeleton/tab", "afrInsertDom1", function() {
        V = 3, X = ++W
    }), window.B && window.B.listen("skeleton/tab", "preInsertDom1", function() {
        V = 4, X = ++H, S(null, $(".ads-item").eq(0))
    });
    var Z = function() {
        var t = function(t, e) {
            !!e && Object.keys(e).forEach(function(a) {
                t[a] = e[a]
            })
        };
        return document.createEventObject ? function(e, a) {
            var n = "";
            n = document.createEventObject(), t(n, a), window.fireEvent("on" + e, n)
        } : function(e, a) {
            var n = "";
            n = document.createEvent("event"), t(n, a), n.initEvent(e, !0, !0), window.dispatchEvent(n)
        }
    }();
    return b.prototype.getShouldRenderInfo = function() {
        this.offsetFloor = this.getOffsetFloor(), this.prevAdsItemIdx = s(this.elem, this.elemParentChildrenLength), this.movedPrevElemIdx = this.getMovedPrevElemIndex();
        var t = this.getRenderInfoResult();
        return t
    }, b.prototype.getOffsetFloor = function() {
        var t = this.result,
            e = this.elemParentChildrenLength,
            a = this.elem,
            n = this.elemIdx,
            i = t.ad_place_list[0] && t.ad_place_list[0].wise_feed_floor_offset || 0,
            o = a.attr("data-fresh-type"),
            r = 9 >= e && 3 == o || 4 == o;
        return !i && 4 > n && r && (i = 3), i
    }, b.prototype.getMovedPrevElemIndex = function() {
        var t = this.prevAdsItemIdx,
            e = this.elemIdx + this.offsetFloor;
        return t > 0 && 4 >= e - t && (e = t + 5), e
    }, b.prototype.getRenderInfoResult = function() {
        var t = this.elemParentChildren[this.movedPrevElemIdx],
            a = this.elem,
            n = e(),
            i = a.offset().top,
            o = i > n + L;
        if (t) {
            var r = $(t).offset();
            o = n + L < r.height + r.top ? !0 : !1
        } else o = !1;
        return {
            shouldRender: o,
            movedPrevElem: t
        }
    }, {
        init: O
    }
});