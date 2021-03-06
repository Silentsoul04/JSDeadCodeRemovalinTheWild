this["@ali/lib-smartbanner-plus-loader"] = function(e) {
    function t(n) {
        if (o[n]) return o[n].exports;
        var i = o[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var o = {};
    return t.m = e, t.c = o, t.p = "", t(0)
}([function(e, t, o) {
    "use strict";

    function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t.default = e, t
    }

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (I(), !e.bizKey || Y(e.bizKey)) return ie.onError({
            code: "1001",
            msg: "`bizKey` not Found or in bizKey env",
            eventName: "init"
        });
        if (te) {
            var t = e.pageCode || (0, K.default)(),
                o = document.createElement("script");
            if (o.src = "https://appx/web-view.min.js", document.head.appendChild(o), "zebra" === t && (t = (0, K.default)()), "mainDetail" === t) {
                var n = q[F];
                h(n, function() {
                    var e = window["@ali/app-contactor"];
                    e.init(t)
                })
            }
            "mainDetail" === t && r(ie, e)
        } else {
            r(ie, e);
            var i = [],
                a = [];
            window.lib && window.lib.mtop || i.push("mtop"), Q || W || oe || s(), k(i, a)
        }
    }

    function r(e, t) {
        window.smbBizConfig = window.smbBizConfig || {}, window.sbActiveConfig = window.sbActiveConfig || {}, e.bizKey = t.bizKey, e.pageCode = t.pageCode || (0, K.default)();
        var o = window["@ali/lib-smb/wake"];
        o || y(e.pageCode)
    }

    function s() {
        if (!V) {
            var e = document.createElement("iframe");
            e.src = "https://h5.m.taobao.com/applink/smb-fid-sender.html", e.frameborder = "0", e.style.cssText = "display:none;border:0;width:0;height:0;", document.body.appendChild(e), window.addEventListener("message", function(e) {
                if ("https://h5.m.taobao.com" === e.origin && /^[A-Za-z0-9]{11}$/.test(e.data)) {
                    V = e.data;
                    try {
                        var t = window.localStorage;
                        t.setItem("SMB_FID", V)
                    } catch (e) {}
                }
            }, !1)
        }
    }

    function l() {
        if (!V) try {
            var e = window.localStorage;
            V = e.getItem("SMB_FID")
        } catch (e) {}
        return /^[A-Za-z0-9]{11}$/.test(V) ? V : ""
    }

    function c(e, t, o) {
        var n = ee,
            i = {
                api: "mtop.taobao.baichuan.smb.get",
                v: "1.0",
                data: e,
                type: "POST",
                dataType: "jsonp",
                timeout: 1e4
            };
        return n && (i.H5Request = !0), lib.mtop.request(i, t, o)
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("function" != typeof e || !ie.bizKey || ie.bizKey && Y(ie.bizKey)) return ie.onError({
            code: "1001",
            msg: "`bizKey` not Found or in bizKey env",
            eventName: "ready"
        });
        var o = window.setInterval(function() {
            var n = window["@ali/lib-smb/wake"];
            if (P) {
                if (!n) return window.clearInterval(o), ie.onError({
                    code: "2001",
                    msg: "`@ali/lib-smb/wake` not Found",
                    eventName: "onLoad"
                });
                v(n)
            }
            if (window.lib && window.lib.mtop && window.Promise && !D) {
                D = !0;
                var i = (new Date).getTime(),
                    a = function() {
                        var e = u();
                        window.smbBizConfig.fid = l();
                        var t = function(e) {
                            var t = e.oneId,
                                o = e.isTBInstalled;
                            c({
                                pageCode: ie.pageCode,
                                ua: window.navigator.userAgent,
                                params: JSON.stringify({
                                    url: window.location.href,
                                    referrer: document.referrer,
                                    oneId: t,
                                    isTBInstalled: o || "null",
                                    fid: window.smbBizConfig.fid
                                })
                            }, function(e) {
                                M = !0;
                                var t = (new Date).getTime();
                                window.smbBizConfig.mtopCostTime = t - i, e.data && e.data.auto && e.data.act ? (w(ie.pageCode, e.data), d(e.data)) : ie.onError({
                                    code: "3001",
                                    msg: "`mtop.taobao.baichuan.smb.get` biz error",
                                    eventName: "onLoad"
                                })
                            }, function(e) {
                                M = !0;
                                var t = b(ie.pageCode);
                                t ? d(t) : ie.onError({
                                    code: "3002",
                                    msg: "`mtop.taobao.baichuan.smb.get` mtop error",
                                    eventName: "onLoad"
                                })
                            })
                        };
                        if (te && window.my && window.my.postMessage) {
                            var o = !1;
                            window.my.postMessage({
                                type: "method",
                                name: "getTBInstalled"
                            });
                            var n = window.my.onMessage;
                            window.my.onMessage = function(i) {
                                n && n(i), "isTBInstalled" in i && !o && (o = !0, t({
                                    oneId: e,
                                    isTBInstalled: "" + i.isTBInstalled
                                }))
                            }, setTimeout(function() {
                                o || (o = !0, t({
                                    oneId: e
                                }))
                            }, 2e3)
                        } else t({
                            oneId: e
                        })
                    };
                document.domain.indexOf("taobao.") < 0 ? lib.mtop.request({
                    api: "mtop.user.getUserSimple",
                    v: "1.0",
                    H5Request: !0,
                    jsonpIncPrefix: "smb_xc",
                    timeout: 2e3
                }, a, a) : a()
            }
            if (P && M) {
                window.clearInterval(o);
                var r = window.smbBizConfig;
                window.sbActiveConfig = window.sbActiveConfig || {};
                var s = ne && ("mainIndex" === ie.pageCode || "mainSearch" === ie.pageCode || "mainDetail" === ie.pageCode),
                    p = (0, _.default)({
                        isInvoke: !1,
                        isShow: !1,
                        isInvokeDay: !0,
                        fatigue: 10
                    });
                if (!(0, B.default)({
                        pageCode: ie.pageCode
                    }).isActive && !t.isActive) return ie.onError({
                    code: "4001",
                    msg: "isIncoke=false",
                    eventName: "active"
                });
                if (e(n, {
                        isInvoke: p.isInvoke || p.isInvokeDay,
                        isShow: p.isShow,
                        autoLinkKey: r.autoLinkKey
                    }), L) return;
                if (L = !0, p.isShow) {
                    var m = g(ie.pageCode, r.pageConf),
                        f = m.some(function(e) {
                            return "pop" === e.type
                        });
                    C(m, function() {
                        var e = window.setInterval(function() {
                            var t = n.bizText;
                            !f && s && (t.theme.pop = {
                                linkKey: r.autoLinkKey,
                                pageType: ie.pageCode,
                                callType: "universalLink",
                                unlUrl: "https://b.mashort.cn/ulk/taobao",
                                popImg: "//gw.alicdn.com/tfs/TB1DfjHIxGYBuNjy0FnXXX5lpXa-640-723.png",
                                type: "pop",
                                styles: {
                                    sbPop: "padding:0;"
                                },
                                limitCount: 1,
                                limitPeriod: 15
                            }), t && (window.clearInterval(e), n.render(t))
                        }, 100)
                    })
                }
            }
        }, 100)
    }

    function d(e) {
        var t = window.smbBizConfig;
        if (e.themes) {
            var o = [];
            e.themes.map(function(e) {
                var t = {},
                    n = {},
                    i = {};
                try {
                    t = JSON.parse(e.style)
                } catch (e) {}
                try {
                    n = JSON.parse(e.defaultConfig), n.type = "default"
                } catch (e) {}
                try {
                    i = JSON.parse(e.freshConfig), i.type = "fresh"
                } catch (e) {}
                o.push({
                    config: [n, i],
                    styles: t,
                    type: e.type,
                    linkKey: e.linkKey
                })
            }), t.pageConf = {
                act: e.act,
                theme: o
            }
        }
        e.blackUa && (window.sbActiveConfig.show_black_ua = e.blackUa), e.whiteUa && (window.sbActiveConfig.show_white_ua = e.whiteUa), e.config != -1 && (window.sbActiveConfig.config = e.config), e.showConfirmText && (window.sbActiveConfig.showConfirmText = e.showConfirmText), t.content = e.contents || {}, m(e), f(e)
    }

    function u() {
        var e = $(),
            t = "";
        if (e._oneId) {
            t = e._oneId;
            try {
                var o = window.localStorage;
                o.setItem("SMB_ONEID", e._oneId)
            } catch (e) {}
        } else try {
            var n = window.localStorage;
            t = n.getItem("SMB_ONEID")
        } catch (e) {}
        return t
    }

    function m(e) {
        var t = window.smbBizConfig;
        if (e.extra && e.extra.rbb && (t.rbbt = e.extra.rbbt), e.tipParams) {
            var o = e.tipParams,
                n = o.appkey,
                i = o.backURL;
            n && (t.appkey = n), i && (t.backURL = i)
        }
    }

    function f(e) {
        var t = window.smbBizConfig,
            o = (e.protocol, e.auto),
            n = e.manual,
            i = {
                2: "portListen",
                3: "universalLink"
            };
        o && (o.linkKey && (t.autoLinkKey = o.linkKey), o.type && (t.callType = i[o.type] || "scheme"), o.scheme && (t.scheme = o.scheme), o.path && (t.path = o.path), o.packageName && (t.packageName = o.packageName), o.params && (t.params = o.params), o.unlUrl && (t.unlUrl = o.unlUrl), o.ports && o.portUrl && (t.ports = o.ports, t.surl = o.portUrl)), n && "object" === ("undefined" == typeof n ? "undefined" : T(n)) && (t.protocolEnum = {}, Object.keys(n).map(function(e) {
            var o = {};
            n[e].linkKey && (o.linkKey = n[e].linkKey), n[e].type && (o.callType = i[n[e].type] || "scheme"), n[e].scheme && (o.scheme = n[e].scheme), n[e].unlUrl && (o.unlUrl = n[e].unlUrl), n[e].ports && (o.ports = n[e].ports), n[e].portUrl && (o.surl = n[e].portUrl), t.protocolEnum[e] = o
        }))
    }

    function w(e, t) {
        try {
            if (window.localStorage) {
                var o = window.localStorage.getItem("SMB_SERVER_CONFIG"),
                    n = o && JSON.parse(o) || {};
                n[e || "default"] = t, window.localStorage.setItem("SMB_SERVER_CONFIG", JSON.stringify(n))
            }
        } catch (e) {}
    }

    function b(e) {
        var t = null;
        try {
            if (window.localStorage) {
                var o = window.localStorage.getItem("SMB_SERVER_CONFIG");
                o && (t = JSON.parse(o)[e || "default"])
            }
        } catch (e) {}
        return t
    }

    function g(e, t) {
        var o = t && t.theme || [];
        return o
    }

    function v(e) {
        var t = e;
        t.bizKey = ie.bizKey, Object.keys(t).map(function(e) {
            ie[e] = ie[e] || t[e]
        })
    }

    function y(e) {
        var t = X[F];
        h(t, function() {
            P = !0
        })
    }

    function h(e, t) {
        var o = document.createElement("script");
        return o.src = e, o.charset = "utf-8", o.onload = function() {
            t && t()
        }, document.body.appendChild(o), o
    }

    function C(e, t) {
        var o = [];
        if (e.map(function(e) {
                var t = void 0,
                    n = e.linkKey || "taobao";
                switch (t = H[e.linkKey], e.type) {
                    case "banner":
                        t = H[n] + "Banner";
                        break;
                    case "tip":
                        t = H[n] + "Tip";
                        break;
                    case "pop":
                        t = H[n] + "Pop"
                }
                G[t] && o.push(G[t])
            }), "mainDetail" == ie.pageCode && o.push(G.taopass), o.length > 0)
            if ("local" == F) {
                var n = o.length;
                o.map(function(e) {
                    var o = "" + J[F] + e.replace(".js", ".debug.js"),
                        i = document.createElement("script");
                    i.onload = function() {
                        n -= 1, 0 === n && t()
                    }, i.src = o, document.body.appendChild(i)
                })
            } else {
                var i = J[F] + "??" + o.join(","),
                    a = document.createElement("script");
                a.src = i, a.onload = function() {
                    t()
                }, document.body.appendChild(a)
            }
    }

    function k(e, t) {
        var o = {
            mtop: "lib-mtop/2.4.12/mtop.js"
        };
        if (!(e.length < 1)) {
            var n = e.map(function(e) {
                    return o[e]
                }),
                i = "//g.alicdn.com/mtb/??" + n.join(","),
                a = document.createElement("script");
            a.src = i, a.onload = function() {
                t.map(function(e) {
                    e()
                })
            }, document.body.appendChild(a)
        }
    }

    function I() {
        window.goldlog && goldlog.record ? window.goldlog.record("/sb.sbp.action", "EXP", "apuri=sb_loader_init", "H1451942832") : S("https://wgo.mmstat.com/sb.sbp.action?apuri=sb_loader_init&t=" + (new Date).getTime())
    }

    function S(e) {
        var t = document.createElement("img");
        t.style.cssText = "display:none", t.src = e, document.body.appendChild(t)
    }
    var T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        A = o(1),
        B = i(A),
        x = o(2),
        _ = i(x),
        E = o(3),
        j = n(E),
        z = o(4),
        K = i(z),
        O = "0.0.90",
        N = "0.0.9",
        P = !1,
        D = !1,
        M = !1,
        L = !1,
        U = window.location.host.match(/.*\.(wapa|waptest)\.(taobao|tmall)\.com/),
        R = window.location.host.match(/shilei\.m\.taobao\.com/),
        F = "publish",
        J = {
            publish: "//g.alicdn.com/mtb/lib-smb-wake/" + O + "/",
            daily: "//g.assets.daily.taobao.net/mtb/lib-smb-wake/" + O + "/",
            local: "//shilei.m.taobao.com/lib-smb-wake/build/"
        },
        X = {
            publish: J.publish + "wake.js",
            daily: J.daily + "wake.js",
            local: J.local + "wake.debug.js"
        },
        Z = {
            publish: "//g.alicdn.com/mtb/app-contactor/" + N + "/",
            daily: "//g.assets.daily.taobao.net/mtb/app-contactor/" + N + "/",
            local: "//shilei.m.taobao.com/app-contactor/build/"
        },
        q = {
            publish: Z.publish + "app-contactor.js",
            daily: Z.daily + "app-contactor.js",
            local: Z.local + "app-contactor.js"
        },
        G = {
            tbBanner: "ui-tbBanner.js",
            tbTip: "ui-tbTip.js",
            tbPop: "ui-tbPop.js",
            tmBanner: "ui-tmBanner.js",
            tmTip: "ui-tmTip.js",
            tmPop: "ui-tmPop.js",
            taopass: "taopass.js"
        },
        H = {
            taobao: "tb",
            tmall: "tm"
        };
    U && (F = "daily"), R && (F = "local");
    var V = void 0,
        Y = j.bizKeyEnv,
        $ = j.getLocationParams,
        Q = j.isAlipay,
        W = j.isTmall,
        ee = j.isYouku,
        te = j.isAlipayMiniProgram,
        oe = j.isEleme,
        ne = j.isSafari,
        ie = {
            init: a,
            ready: p,
            activeControl: B.default,
            invokeControl: _.default,
            onError: function() {}
        };
    e.exports = ie
}, function(e, t) {
    "use strict";

    function o(e) {
        var t = window.navigator.userAgent,
            o = /AlipayClient/i.test(t) && /MiniProgram/i.test(t),
            n = {
                isActive: !0
            },
            i = window.sbActiveConfig || {},
            a = t.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i);
        if (a && (n.isActive = !1), i) {
            if (i.show_white_ua) try {
                var r = new RegExp(i.show_white_ua);
                r.test(window.navigator.userAgent) && (n.isActive = !0)
            } catch (e) {}
            if (i.show_black_ua) try {
                var s = new RegExp(i.show_black_ua);
                s.test(window.navigator.userAgent) && (n.isActive = !1)
            } catch (e) {}
        }
        return o && "80108892" === e.pageCode && (n.isActive = !0), n
    }
    e.exports = o
}, function(e, t, o) {
    "use strict";

    function n(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        return t.default = e, t
    }

    function i(e) {
        var t = window.sbActiveConfig || {},
            o = l();
        if (o.visa || 0 != o.forceCallApp || (e.isInvoke = !1, e.isInvokeDay = !1), void 0 != t.config) {
            var n = t.config ? s(parseInt(t.config).toString(2), 3) : "000";
            e.isInvoke = !!n[n.length - 3] && Boolean(parseInt(n[n.length - 3])), e.isShow = !!n[n.length - 2] && Boolean(parseInt(n[n.length - 2])), e.isInvokeDay = !!n[n.length - 1] && Boolean(parseInt(n[n.length - 1]))
        }
        if (window.self !== window.top && o.shareurl && (e.isInvoke = !1), window.smbInvokeControlDecorator && window.smbInvokeControlDecorator(e), r.isTmall || r.isTB) {
            var i = window.smbBizConfig,
                a = i.autoLinkKey;
            (r.isTmall && "tmall" === a || r.isTB && "taobao" === a) && (e.isInvoke = !1, e.isShow = !1, e.isInvokeDay = !1)
        }
        return t.showConfirmText && (e.showConfirmText = t.showConfirmText), e
    }
    var a = o(3),
        r = n(a),
        s = r.prefixInteger,
        l = (r.boolFixed, r.getLocationParams);
    e.exports = i
}, function(e, t) {
    "use strict";

    function o(e) {
        return "string" == typeof e
    }

    function n(e) {
        return o(e) && (e = e.toLowerCase()), "true" === e || e === !0 || 1 === e || "false" !== e && e !== !1 && 0 !== e && "0" !== e && !!e
    }

    function i() {
        var e = [];
        e = document.referrer && /\/\/s\.click\.taobao\.com/.test(document.referrer) ? document.referrer.replace(/^(http|https):\/\/.+\?/, "").split("&") : location.search.replace(/^\?/, "").split("&");
        var t = {};
        return e.forEach(function(e, o) {
            var n = e.split("=");
            t[n[0]] = n[1]
        }), t
    }

    function a(e, t) {
        return (Array(t).join(0) + e).slice(-t)
    }

    function r(e) {
        var t = {
                TB: "taobao",
                TM: "tmall"
            },
            o = window.navigator.userAgent,
            n = "",
            i = void 0;
        return (i = o.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (n = i[1]), !n && o.indexOf("TBIOS") > 0 && (n = "TB"), t[n] === e
    }
    var s = window.navigator.userAgent,
        l = /AlipayClient/.test(s),
        c = /AliApp\(TB\//.test(s) || s.indexOf("TBIOS") > 0,
        p = /AliApp\(TM\//.test(s),
        d = l && /MiniProgram/i.test(s),
        u = /iPhone|iPad|iPod/.test(s) && /Safari\/([0-9\.]+$)/.test(s) && !/Chrome/i.test(s) && /Version\/([\d\.]+)/.test(s),
        m = /Eleme/i.test(s),
        f = /youku/i.test(s);
    t.boolFixed = n, t.getLocationParams = i, t.prefixInteger = a, t.bizKeyEnv = r, t.isAlipay = l, t.isTB = c, t.isTmall = p, t.isAlipayMiniProgram = d, t.isSafari = u, t.isEleme = m, t.isYouku = f
}, function(e, t) {
    "use strict";

    function o() {
        var e = document.getElementsByName("data-spm")[0] || document.getElementsByName("spm-id")[0],
            t = document.body.getAttribute("data-spm");
        t && t.indexOf("_") > 0 && (t = t.split("_")[0]);
        var o = void 0,
            a = void 0;
        return e && (o = e.content), o && t && (o = o + "." + t), a = i[o] || n(window.location.host) || "smbDefault"
    }

    function n(e) {
        for (var t = Object.keys(a), o = "", n = 0; n < t.length; n++)
            if (new RegExp(t[n]).test(e)) {
                o = a[t[n]];
                break
            }
        return o
    }
    var i = {
            "a215s.7406091": "mainIndex",
            "a2141.7c": "mainDetail",
            "a2141.7756461": "mainMyTaobao",
            "weapp.shop/acticvity": "shopActivity",
            "a3113.8592669": "aliyxCoupon",
            "a2147.7632989": "juNative",
            "a311n.9159044/a": "itaobao",
            "a311n.9159044/c": "itaobao",
            "a211oj.13178006": "80108892"
        },
        a = {
            "shop([0-9a-zA-Z]*)\\.m\\.taobao\\.com": "mainShop",
            "s\\.m\\.taobao\\.com": "mainSearch"
        };
    e.exports = o
}]);