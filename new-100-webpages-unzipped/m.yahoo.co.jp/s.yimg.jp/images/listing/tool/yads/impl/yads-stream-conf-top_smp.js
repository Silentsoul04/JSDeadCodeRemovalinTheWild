(function(t, e, a) {
    a.conf = [{
        params: {
            yads_ad_ds: "60766_11161"
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_all",
            inserted: true
        }]
    }, {
        params: {
            yads_ad_ds: "84112_185264"
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_geinou",
            inserted: true
        }]
    }, {
        params: {
            yads_ad_ds: "98330_185265"
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_sports",
            inserted: true
        }]
    }, {
        params: {
            yads_ad_ds: "84112_212809"
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_sklt",
            inserted: true
        }]
    }, {
        params: {
            yads_ad_ds: "98330_258967"
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_follow",
            inserted: true
        }]
    }, {
        params: {
            yads_ad_ds: ""
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_buzz",
            inserted: true
        }]
    }, {
        params: {
            yads_ad_ds: ""
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_topics",
            inserted: true
        }]
    }, {
        params: {
            yads_ad_ds: ""
        },
        criteo: {
            params: {
                zoneid: "265876"
            },
            rateCALBeacon: 1
        },
        group: [{
            name: "st_extra",
            inserted: true
        }]
    }];
    a.dsMap = {
        ios: {
            st_all: "60766_235184",
            st_geinou: "84112_235161",
            st_sports: "98330_235274",
            st_sklt: "84112_235275",
            st_follow: "98330_258749",
            st_buzz: "104421_270659",
            st_topics: "86057_271834",
            st_extra: "67042_276973"
        },
        android: {
            st_all: "60766_235188",
            st_geinou: "84112_235273",
            st_sports: "98330_235285",
            st_sklt: "84112_235283",
            st_follow: "98330_258750",
            st_buzz: "38353_270660",
            st_topics: "16429_271842",
            st_extra: "67042_276976"
        }
    };
    var i = "yads-async-target-ad";
    a.makeAdUniqueId = function(t, e) {
        var a = "";
        if (window.yads_pv_timestamp) {
            a = window.yads_pv_timestamp
        }
        var r = [i, a, t, String(e)].join("-");
        return r
    };
    var r = {
        UNKNOWN: 0,
        AUTOIMAGED_TEXT: 1,
        INFEED: 2,
        APP_INSTALL: 3,
        VIDEO: 4,
        CRITEO: 50
    };
    var s = {
        UNKNOWN: 0,
        IMAGE_SMALL: 1,
        IMAGE_LARGE: 2
    };
    a.renderStaticPositionAd = function(t, e, i, r) {
        a.makeAdHtml(t, "st_stb1", function(t) {
            var e = document.getElementById(r);
            if (!t || t.length === 0 || !e) {
                return
            }
            e.innerHTML = t[0].htmls
        })
    };
    a.makeAdHtml = function(t, e, i) {
        var r = "";
        if (window.yads_pv_timestamp) {
            r = window.yads_pv_timestamp
        }
        a.makeUltraVariableAdHtml(t, r, e, i)
    };
    var n = function(t) {
        var e = {
            adType: r.UNKNOWN,
            templateType: s.UNKNOWN
        };
        switch (t.ad_main_type) {
            case "text":
                if (t.ad_sub_type != "autoimage") {
                    return e
                }
                e.adType = r.AUTOIMAGED_TEXT;
                switch (t.tpl_id) {
                    case "4":
                        e.templateType = s.IMAGE_SMALL;
                        return e;
                    case "5":
                        e.templateType = s.IMAGE_LARGE;
                        return e;
                    default:
                        return e
                }
            case "responsive":
                e.adType = r.INFEED;
                switch (t.ad_sub_type) {
                    case "card":
                        e.templateType = s.IMAGE_SMALL;
                        return e;
                    case "list":
                        e.templateType = s.IMAGE_LARGE;
                        return e;
                    default:
                        return e
                }
            case "app":
                e.adType = r.APP_INSTALL;
                switch (t.ad_sub_type) {
                    case "small":
                        e.templateType = s.IMAGE_SMALL;
                        return e;
                    case "large":
                        e.templateType = s.IMAGE_LARGE;
                        return e;
                    default:
                        return e
                }
            case "video":
                e.adType = r.VIDEO;
                return e;
            case "criteo":
                e.adType = r.CRITEO;
                switch (t.ad_sub_type) {
                    case "small":
                        e.templateType = s.IMAGE_SMALL;
                        return e;
                    default:
                        return e
                }
            default:
                return e
        }
    };
    var l = function(t, e, a, i) {
        return "rsec:ydn-ad;" + "slk:" + t + ";" + "pos:" + e + ";" + "streamid:" + t + ";" + "pvts:" + a + ";" + "reqid:" + i
    };
    var d = function(t) {
        if (!t.ad_extension || !t.ad_extension.button_text) {
            return false
        }
        return t.ad_extension.button_text === "インストール" && t.app_ad_signage === "button"
    };
    var p = function(t, e, a, i) {
        var s = a || "_blank",
            n = i || "";
        var l = "";
        if (e === r.CRITEO) {
            n = "Criteo&#24195;&#21578;"
        } else if (!n) {
            n = "Yahoo! JAPAN&#24195;&#21578;";
            l = "<i " + 'style="' + "display:inline-block;" + "margin-left:4px; " + "vertical-align:middle;" + '"' + ">" + "<svg " + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'width="13" ' + 'height="13"' + ">" + "<image " + 'width="13" ' + 'height="13" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xlink:href="data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2016.0.4%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.0%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FTR%2F2001%2FREC-SVG-20010904%2FDTD%2Fsvg10.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.0%22%20id%3D%22layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%0D%0A%09%20y%3D%220px%22%20width%3D%2213px%22%20height%3D%2213px%22%20viewBox%3D%220%200%2013%2013%22%20enable-background%3D%22new%200%200%2013%2013%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cg%3E%0D%0A%09%3Cpath%20fill%3D%22%23696969%22%20d%3D%22M6.5%2C13c0.685%2C0%2C1.328-0.267%2C1.811-0.75l3.94-3.938c0.999-0.999%2C0.999-2.624%2C0-3.622L8.311%2C0.75%0D%0A%09%09C7.828%2C0.267%2C7.185%2C0%2C6.5%2C0S5.172%2C0.267%2C4.688%2C0.75L0.749%2C4.689c-0.999%2C0.998-0.999%2C2.623%2C0%2C3.622l3.939%2C3.938%0D%0A%09%09C5.172%2C12.733%2C5.815%2C13%2C6.5%2C13z%20M6.498%2C6.135c-0.42%2C0-0.792%2C0.34-0.792%2C0.758v3.904c0%2C0.096-0.039%2C0.186-0.103%2C0.248%0D%0A%09%09c-0.064%2C0.064-0.153%2C0.104-0.25%2C0.104c-0.098%2C0-0.187-0.039-0.251-0.104L1.54%2C7.521c-0.562-0.563-0.562-1.478%2C0-2.04l3.94-3.939%0D%0A%09%09C5.752%2C1.27%2C6.115%2C1.119%2C6.5%2C1.119s0.747%2C0.15%2C1.02%2C0.422l3.94%2C3.939c0.562%2C0.562%2C0.562%2C1.477%2C0%2C2.04l-3.562%2C3.524%0D%0A%09%09c-0.064%2C0.064-0.153%2C0.104-0.251%2C0.104c-0.097%2C0-0.186-0.039-0.25-0.104c-0.063-0.062-0.104-0.152-0.104-0.248V6.893%0D%0A%09%09c0-0.418-0.371-0.758-0.79-0.758H6.498z%22%2F%3E%0D%0A%09%3Ccircle%20fill%3D%22%23696969%22%20cx%3D%226.5%22%20cy%3D%223.922%22%20r%3D%221.146%22%2F%3E%0D%0A%3C%2Fg%3E%0D%0A%3C%2Fsvg%3E" ' + 'src="http://i.yimg.jp/images/advertising/common/img/ico_jiaa.png" ' + 'style="border:none;"' + ">" + "</image>" + "</svg>" + "</i>"
        }
        return "<a " + 'href="' + t + '" ' + 'target="' + s + '" ' + 'style="' + "color:#0a5d9c;" + "cursor:pointer;" + "display:inline-block;" + "font-size:11px;" + "height:15px;" + "margin:3px 0;" + "text-decoration:none;" + "vertical-align:middle;" + '"' + ">" + "<span " + 'style="' + "color:#555;" + "text-decoration:none;" + "line-height:15px;" + "vertical-align:middle;" + "white-space:nowrap;" + "display:inline-block;" + "margin-top:2px;" + "*margin-top:-2px;" + '"' + ">" + n + "</span>" + l + "</a>"
    };
    var o = function(t, e, a, i, s, n) {
        if (s === r.UNKNOWN) {
            return ""
        }
        var o = t.ClickUrl.replace(/&amp;/g, "&"),
            _ = t.InquiryUrl.replace(/&amp;/g, "&"),
            c = l(e, a, i, n),
            m = s === r.AUTOIMAGED_TEXT ? t.tpl_path : t.image_url;
        var u = "";
        if (t.pr_label != "none") {
            u = "<p " + 'class="StreamItem__body" ' + 'style="' + "bottom:0;" + "box-sizing:border-box;" + "display:inline-block;" + "position:absolute;" + "right:0;" + "text-align:right;" + "vertical-align:middle;" + '"' + ">" + p(_, s, null, t.pr_label_text) + "</p>"
        }
        var y = 'data-ydntxt-title="1"';
        if (s === r.CRITEO) {
            y = ""
        }
        var g = "<span " + y + ">" + t.title + "</span>";
        if (s === r.AUTOIMAGED_TEXT || s === r.APP_INSTALL) {
            g += "&nbsp;|&nbsp;" + '<span data-ydntxt-desc="1">' + t.description + "</span>"
        }
        var v, C;
        if (s === r.CRITEO) {
            v = t.siteHost;
            C = ""
        } else if (s === r.INFEED) {
            v = t.ad_extension.principal;
            C = 'data-ydn-txt-appendix="1"'
        } else {
            v = t.siteHost;
            C = 'data-ydntxt-host="1"'
        }
        var x = d(t);
        var A = "middle";
        if (x) {
            A = "top"
        }
        var f = "";
        if (x) {
            f = "<p " + 'class="StreamItem__appInstallButton" ' + 'style="' + "margin:6px 0 0 6px;" + '"' + ">" + t.ad_extension.button_text + "</p>" + "<p " + 'class="StreamItem__author" ' + 'style="' + "word-break:break-all;" + "display:block;" + '"' + ">" + "<span " + C + " " + 'style="' + "display:table-cell;" + "height:24px;" + "vertical-align:middle;" + '"' + ">" + v + "</span>" + "</p>"
        } else {
            f = "<p " + C + " " + 'class="StreamItem__author" ' + 'style="' + "margin-bottom:13px;" + "word-break:break-all;" + '"' + ">" + v + "</p>"
        }
        var b = 'data-ydntxt-wrap="1"',
            h = 'data-ydntxt-item="1"',
            w = "";
        if (s === r.CRITEO) {
            b = "";
            h = "";
            w = "background-repeat:no-repeat;" + "background-size:contain;"
        }
        if (e === "st_stb1") {
            h = ""
        }
        return "<aside " + b + " " + 'class="List__item List__item--relaxBorder" ' + 'style="' + "padding:1px 0 0 0;" + "position:relative;" + '"' + ">" + "<div " + 'class="List__body util-padding0"' + ">" + "<div " + 'class="StreamItem"' + ">" + "<a " + 'href="' + o + '" ' + h + " " + 'data-ylk="' + c + '" ' + ">" + "<div " + 'class="StreamItem__body"' + ">" + "<div " + 'style="' + "display:table;" + "min-width:100%;" + "table-layout:auto;" + '"' + ">" + "<div " + 'style="' + "display:table-cell;" + "vertical-align:" + A + ";" + '"' + ">" + "<div " + 'class="StreamItem__image StreamItem__image--left" ' + 'style="' + "background-image:url(" + m + ");" + "height:96px;" + "width:96px;" + w + '"' + ">" + "</div>" + "</div>" + "<div " + 'style="' + "display:table-cell;" + "max-width:1px;" + "padding-bottom:0;" + "padding-top:4px;" + "vertical-align:" + A + ";" + "width:100%;" + '"' + ">" + "<h1 " + 'class="StreamItem__title" ' + ">" + g + "</h1>" + f + "</div>" + "</div>" + "</div>" + "</a>" + u + "</div>" + "</div>" + "</aside>"
    };
    var _ = function(t, e, a, i, s, n) {
        if (s === r.UNKNOWN) {
            return ""
        }
        var o = t.ClickUrl.replace(/&amp;/g, "&"),
            _ = t.InquiryUrl.replace(/&amp;/g, "&"),
            c = l(e, a, i, n),
            m = s === r.AUTOIMAGED_TEXT ? t.tpl_path : t.image_url;
        var u = "";
        if (t.pr_label != "none") {
            u = "<p " + 'class="StreamItem__body" ' + 'style="' + "display:block;" + "margin-top:-32px;" + "padding-top:0;" + "position:absolute;" + "right:0;" + '"' + ">" + p(_, s, null, t.pr_label_text) + "</p>"
        }
        var y, g;
        if (s === r.INFEED) {
            y = t.ad_extension.principal;
            g = 'data-ydn-txt-appendix="1"'
        } else {
            y = t.siteHost;
            g = 'data-ydntxt-host="1"'
        }
        var v = "";
        if (d(t)) {
            v = "<p " + 'class="StreamItem__appInstallButton" ' + 'style="' + "margin:0 0 0 6px;" + '"' + ">" + t.ad_extension.button_text + "</p>" + "<p " + 'class="StreamItem__author" ' + 'style="' + "margin-top:0;" + "word-break:break-all;" + "display:block;" + '"' + ">" + "<span " + g + " " + 'style="' + "display:table-cell;" + "height:24px;" + "vertical-align:middle;" + '"' + ">" + y + "</span>" + "</p>"
        } else {
            v = "<p " + g + " " + 'class="StreamItem__author"' + ">" + y + "</p>"
        }
        var C = 'data-ydntxt-item="1"';
        if (e === "st_stb1") {
            C = ""
        }
        var x = t.description;
        if (x.length > 38) {
            x = x.substr(0, 38) + "&hellip;"
        }
        return "<aside " + 'data-ydntxt-wrap="1" ' + 'class="List__item List__item--relaxBorder" ' + 'style="' + "padding:1px 0 0 0;" + '"' + ">" + "<div " + 'class="List__body util-padding0"' + ">" + "<div " + 'class="StreamItem" ' + 'style="' + "background-color:#fff;" + "position:relative;" + '"' + ">" + "<a " + 'href="' + o + '" ' + C + " " + 'data-ylk="' + c + '" ' + ">" + "<div " + 'class="StreamItem__body" ' + 'style="padding-bottom:34px;"' + ">" + "<div " + 'class="StreamAD__image FlexImage StreamItem__image StreamItem__image--top" ' + 'style="' + "background-image:url(" + m + ");" + '"' + ">" + "<div " + 'style="padding-bottom:52.3%;' + '">' + "</div>" + "</div>" + "<div " + 'style="padding-top:4px;"' + ">" + "<h1 " + 'class="StreamItem__title" ' + 'style="' + "overflow:hidden;" + '"' + ">" + '<span data-ydntxt-title="1">' + t.title + "</span>" + "&nbsp;|&nbsp;" + '<span data-ydntxt-desc="1">' + x + "</span>" + "</h1>" + v + "</div>" + "</div>" + "</a>" + u + "</div>" + "</div>" + "</aside>"
    };
    a.makeUltraVariableAdHtml = function(t, e, i, l) {
        var d = [];
        var p = -1;
        var c = function(e) {
            if (t[e] && t[e].ultra_variable === "1") {
                return true
            } else {
                return false
            }
        };
        var m = function(t, a, r) {
            var s = {
                rsec: "ydn-ad",
                slk: i,
                pos: t,
                streamid: i,
                pvts: e,
                reqid: a,
                tabName: i
            };
            if (r) {
                s.mpos = p
            }
            return s
        };
        var u = function(e, r, s) {
            var n = window.YJ_YADS.innerFuncs.getFunctionObject(t[e].script.callback);
            if (!n) {
                return false
            }
            t[e].ytop_data_ylk = m(e, r, s);
            var l = a.makeAdUniqueId(i, e);
            var p = n([t[e]], null, null, l, {
                returnHtml: true
            });
            d.push(p);
            return true
        };
        var y = function(a) {
            if (a >= t.length) {
                l(d);
                return
            }
            var m = n(t[a]);
            var g = String(t[0].yadsAdRequestId);
            if (!c(a) || m.adType === r.CRITEO) {
                var v = "";
                switch (m.templateType) {
                    case s.IMAGE_SMALL:
                        v = o(t[a], i, a, e, m.adType, g);
                        break;
                    case s.IMAGE_LARGE:
                        v = _(t[a], i, a, e, m.adType, g);
                        break;
                    default:
                        break
                }
                var C = {
                    htmls: v,
                    callbacks: []
                };
                d.push(C);
                y(a + 1)
            } else {
                var x = m.adType === r.VIDEO;
                if (x) {
                    p++
                }
                if (u(a, g, x)) {
                    y(a + 1)
                } else {
                    var A = window.location.protocol + "//s.yimg.jp/images/listing/tool/yads/" + t[a].script.js_file;
                    window.YJ_YADS.innerFuncs.loadScript(A, function() {
                        u(a, g, x);
                        y(a + 1)
                    }, true)
                }
            }
        };
        y(0)
    }
})(window, document, function() {
    var t;
    (function(e) {
        if (typeof this[e] === "undefined") {
            this[e] = {}
        }
        t = this[e];
        if (arguments.length > 1) {
            arguments.callee.apply(this[e], Array.prototype.slice.apply(arguments, [1]))
        }
    }).apply(window, "YAHOO.JP.anemos.yads.stream".split("."));
    return t
}());
window._yads_vimps_controll_checked = true;