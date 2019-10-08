define("@baidu/invoke-box/index", ["require", "@baidu/invoke-box/src/invoke", "@baidu/invoke-box/src/getScheme", "@baidu/invoke-box/src/getControlByPos", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function(require) {
    var a = require("@baidu/invoke-box/src/invoke"),
        c = require("@baidu/invoke-box/src/getScheme"),
        b = require("@baidu/invoke-box/src/getControlByPos"),
        v = require("@baidu/invoke-box/src/consts"),
        k = require("@baidu/invoke-box/src/utils");
    return k.extend({
        invoke: a,
        getScheme: c,
        getControlByPos: b,
        APP: v.APP,
        MODE: v.MODE
    }, k)
}), define("@baidu/invoke-box/src/consts", ["require"], function() {
    var a = {
            BD_LITE: 1,
            CRAFT: 2,
            BD: 3,
            LITE: 4,
            IQY: 5,
            HAOKAN: 6,
            TIEBA: 7,
            KDD: 8,
            BABY: 9,
            QUANMIN: 10
        },
        c = {
            INDEX: 1,
            OPEN_URL: 3,
            WISE_OPEN_URL: 4,
            CAMERA: 5,
            XCX: 6,
            DOWNLOAD_PAGE: 7
        },
        b = {
            INVOKE_URL: 1,
            DEFAULT_URL: 2,
            APPATORE: 3,
            NO_CHANGE: 4
        },
        v = {
            INVOKE_URL: 1,
            DEFAULT_URL: 2,
            NO_CHANGE: 3
        },
        k = {
            4: {
                scheme: "baiduboxlite",
                pkg: "com.baidu.searchbox.lite"
            },
            5: {
                scheme: "iqiyi",
                pkg: "com.qiyi.video"
            },
            6: {
                scheme: "baiduhaokan",
                pkg: "com.baidu.haokan"
            },
            7: {
                scheme: "com.baidu.tieba",
                pkg: "com.baidu.tieba"
            },
            8: {
                scheme: "baiduboxmission",
                pkg: "com.baidu.searchbox.mission"
            },
            9: {
                scheme: "askmybaby",
                pkg: "com.baidu.mbaby"
            },
            10: {
                scheme: "bdminivideo",
                pkg: "com.baidu.minivideo"
            }
        },
        h = "https://apps.apple.com/cn/app/id382201985",
        g = {
            PRIVATE: 1
        },
        w = {
            CONTINUE_INVOKE: 1,
            INVOKE_URL: 2,
            DEFAULT_URL: 3,
            NO_CHANGE: 4
        };
    return {
        APP: a,
        MODE: c,
        FAIL: b,
        SUCCESS: v,
        APP_INFO: k,
        APP_STORE: h,
        PRIVATE_SCENE: w,
        SCENE: g
    }
}), define("@baidu/invoke-box/src/getControlByPos", ["require"], function() {
    function a(a, c) {
        return "number" == typeof a && c && c.rule && +c.rule[a] && c.control && c.control[a] ? c.control[a] : void 0
    }
    return a
}), define("@baidu/invoke-box/src/getScheme", ["require", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        return a.matrix || (a.matrix = "main"), g[a.matrix] || g.main
    }

    function c(c, v, g) {
        if (c) {
            g = g || a(v);
            var w = "mission" === v.matrix || "lite" === v.matrix,
                y = w ? "1.0" : "",
                U = {};
            v = v || {};
            var R = v.invokeURL || "";
            switch (+c) {
                case h.INDEX:
                    U.iosScheme = g + "://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D", U.androidCommand = {
                        mode: "0",
                        intent: "intent:#Intent;action=com.baidu.searchbox.action.HOME;category=android.intent.category.DEFAULT;S.extra_target_tab=Feed;end",
                        min_v: w ? "" : "16787968",
                        minver: y
                    };
                    break;
                case h.OPEN_URL:
                    var C = encodeURIComponent(R);
                    U.iosScheme = v.backURL ? g + "://easybrowse?opentype=1&newbrowser=1&openurl=" + C + "&isla=0&fromwise=1" : g + "://v1/browser/open?url=" + C + "&newwindow=0&simple=1&fromwise=1", U.androidCommand = v.backURL || v.backQuery ? "" + g + "://v1/browser/open?url=" + C + "&newwindow=0&simple=1&fromwise=1" : {
                        mode: "2",
                        url: R,
                        min_v: w ? "" : "25165824",
                        minver: y
                    };
                    break;
                case h.CAMERA:
                    var L = JSON.stringify(v.jsup || {}),
                        E = v.searchType && v.searchType.toUpperCase() || "GENERAL",
                        _ = v.cameraPosition || 0,
                        I = encodeURIComponent(window.location.href);
                    U.iosScheme = g + "://imagesearch?caller=graph&args=" + encodeURIComponent(["source_app=BROWSER", "referer=" + I, "jsup=" + L, "imageSearch_type=" + E, "cameraPosition=" + _].join("&")), U.androidCommand = {
                        mode: "1",
                        intent: ["intent:#Intent;action=com.baidu.searchbox.plugin.action.INVOKE", "S.package_name=com.baidu.searchbox.godeye", "S.method_name=imageSearch", "S.params=" + JSON.stringify({
                            intent: ["#Intent", "launchFlags=0x20000", "component=com.baidu.searchbox.CodeScannerActivity", "S.referer=" + I, "S.source_app=BROWSER", "S.imageSearch_type=" + E, "S.cameraPosition=" + _, "S.jsup=" + L, "end"].join(";")
                        }), "end"].join(";")
                    };
                    break;
                case h.XCX:
                    if (!v.appKey) throw "Missing required parameter(s): appKey!";
                    var O = "" + g + "://swan/" + v.appKey + R + (R.indexOf("?") < 0 ? "?" : "") + (/\?\S+/.test(R) ? "&" : "") + "_baiduboxapp=" + encodeURIComponent(JSON.stringify({
                        from: v.swanFrom || "",
                        ext: b.extend({
                            token: "swanubc",
                            url: R
                        }, v.extLogContent || {})
                    })) + "&upgrade=0&fromwise=1";
                    U.iosScheme = O, U.androidCommand = O
            }
            var S = v.backQuery,
                A = "object" == typeof v.backQueryMore ? b.stringifyQuery(v.backQueryMore) : "",
                P = v.backURL;
            if (S) {
                var N = "" + g + "://v1/browser/open?url=" + encodeURIComponent("search://" + encodeURIComponent(S) + (A ? "?" + A : "")) + "&newwindow=0&upgrade=1&append=1&fromwise=1";
                U.iosScheme && (U.iosScheme = N + "&simple=1&next=" + encodeURIComponent(U.iosScheme)), U.androidCommand && "string" == typeof U.androidCommand && (U.androidCommand = N + "&next=" + encodeURIComponent(U.androidCommand))
            } else if (P) {
                var D = "" + g + "://v1/browser/open?url=" + encodeURIComponent(P) + "&newwindow=0&upgrade=1&append=1&fromwise=1";
                U.iosScheme && (U.iosScheme = D + "&simple=1&next=" + encodeURIComponent(U.iosScheme)), v.app === k.BD && U.androidCommand && "string" == typeof U.androidCommand && (U.androidCommand = D + "&next=" + encodeURIComponent(U.androidCommand))
            }
            return U
        }
    }
    var b = require("@baidu/invoke-box/src/utils"),
        v = require("@baidu/invoke-box/src/consts"),
        k = v.APP,
        h = v.MODE,
        g = {
            main: "baiduboxapp",
            lite: "baiduboxlite",
            info: "baiduinfoapp",
            pro: "baiduboxpro",
            mission: "baiduboxmission"
        };
    return c
}), define("@baidu/invoke-box/src/invoke", ["require", "@baidu/invoke-box/src/invokeIQY", "@baidu/invoke-box/src/invokeHaoKan", "@baidu/invoke-box/src/invokeBD", "@baidu/invoke-box/src/invokeTieba", "@baidu/invoke-box/src/invokeBaby", "@baidu/invoke-box/src/invokeQuanmin", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        if (a) {
            var c = {
                invoke_url: "invokeURL",
                default_url: "defaultURL",
                appkey: "appKey",
                app_multi: "appMulti"
            };
            for (var b in c) c.hasOwnProperty(b) && a[b] && (a[c[b]] = a[b])
        }
    }

    function c(a) {
        switch (+a.app) {
            case R.CRAFT:
                break;
            case R.IQY:
                v(a);
                break;
            case R.LITE:
                h(a);
                break;
            case R.HAOKAN:
                k(a);
                break;
            case R.TIEBA:
                g(a);
                break;
            case R.KDD:
                h(a);
                break;
            case R.BABY:
                w(a);
                break;
            case R.QUANMIN:
                y(a);
                break;
            default:
                h(a)
        }
    }

    function b(b) {
        if (b && "object" == typeof b)
            if (b.isPrivate = U.isPrivateMode(), b.app = b.app ? +b.app : "", b.mode = b.mode ? +b.mode : "", b.fail = b.fail ? +b.fail : "", b.success = b.success ? +b.success : "", b.ext = U.parseJson(b.ext), b.scene = U.parseJson(b.invoke_scene), a(b), a(b.ext), b.appMulti) {
                for (var v = b.appMulti.split("_"), k = [], i = 0; i < v.length; i++) {
                    var h = v[i].split(":");
                    k.push(U.extend({}, b, {
                        app: h[0] ? +h[0] : "",
                        mode: h[1] ? +h[1] : ""
                    }))
                }
                if (k[1] && (k[0].fail = 4), c(k[0]), k[1]) {
                    U.extend(k[1], b.ext);
                    var g = Date.now(),
                        w = b.waitTime || 100;
                    setTimeout(function() {
                        Date.now() - g < w + 200 && c(k[1])
                    }, w)
                }
            } else U.extend(b, b.ext), c(b)
    }
    var v = require("@baidu/invoke-box/src/invokeIQY"),
        k = require("@baidu/invoke-box/src/invokeHaoKan"),
        h = require("@baidu/invoke-box/src/invokeBD"),
        g = require("@baidu/invoke-box/src/invokeTieba"),
        w = require("@baidu/invoke-box/src/invokeBaby"),
        y = require("@baidu/invoke-box/src/invokeQuanmin"),
        U = require("@baidu/invoke-box/src/utils"),
        R = require("@baidu/invoke-box/src/consts").APP;
    return b
}), define("@baidu/invoke-box/src/invokeBD", ["require", "@baidu/invoke-box/src/getScheme", "@baidu/invoke-box/src/openXCX", "@baidu/invoke-box/src/invokeMarket", "@baidu/invoke-box/src/scene", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        var c = L.SUCCESS;
        a.successCallback && "function" == typeof a.successCallback && a.successCallback();
        var b;
        switch (+a.success) {
            case c.INVOKE_URL:
                b = a.invokeURL;
                break;
            case c.DEFAULT_URL:
                b = a.originFailURL || a.failUrl;
                break;
            case c.NO_CHANGE:
        }
        R.isValidURL(b) && (window.location.href = b)
    }

    function c(a, c) {
        var b = "function" == typeof a,
            v = "function" == typeof c;
        if (window.OpenBox) return void(b && a());
        var k = document.createElement("script");
        k.src = "//s.bdstatic.com/common/openjs/openBox.js?_v=" + R.getFormatTime(), k.async = !0, k.onload = k.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState ? v && c("Failed to loading openbox script!") : (k.onload = k.onreadystatechange = null, k = null, b && a())
        }, k.onerror = function() {
            k.onerror = null, k = null, v && c("Failed to loading openbox script!")
        };
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(k)
    }

    function b(a, c, b, v) {
        if (a && !c.test(a)) return a;
        var k = "",
            h = {};
        if (a) {
            var g = /#\S*/g;
            k = a.match(g), k = k ? k[0] : "", a = a.replace(g, "");
            var w = /\?(\S*)/,
                y = a.match(w);
            y = y ? y[1] : "", a = a.replace(w, "");
            for (var U = y.split("&"), i = 0, R = U.length; R > i; i++) {
                var L = U[i].split("=");
                L[0] && (h[L[0]] = L[1])
            }
        } else a = b;
        C(h, v);
        var E = [];
        for (var _ in h) h.hasOwnProperty(_) && E.push(_ + "=" + h[_]);
        return a + "?" + E.join("&") + k
    }

    function v(a) {
        var c = a.union && "0" !== a.union ? a.union : "",
            v = a.from || "",
            k = a.channel || "";
        if (3 === +a.fail) {
            var h = JSON.stringify({
                p1: k,
                p2: c,
                p3: v
            });
            h = encodeURIComponent(h), h = "^OTNssVJLoW^" + h + ")", R.copyToClipBoard(h)
        }
        var w = a.invokeURL;
        if (w && !new RegExp("[?&]ivk_p2=").test(w)) {
            var U = w.split("#");
            w = "" + U[0] + (~U[0].indexOf("?") ? "&" : "?") + "ivk_p2=" + (c || "") + (U[1] ? "#" : "") + (U[1] || "")
        }
        var I, O = a.copyTokenData || (+a.mode === _.OPEN_URL && a.invokeURL ? {
            url: w,
            activity_id: 220
        } : +a.mode === _.XCX ? {
            activity_id: a.activity_id || 227,
            url: a.appKey + w
        } : +a.mode === _.CAMERA ? {
            url: encodeURIComponent(g(a.mode, C({}, a, {
                backURL: "",
                backQuery: ""
            })).iosScheme.split("imagesearch?caller=graph&")[1]),
            activity_id: 281
        } : {
            url: "wise_" + k + "_" + c + "_" + v,
            activity_id: 168
        });
        if (1 === +a.fail && a.invokeURL && /https?:\/\//gi.test(a.invokeURL)) I = a.invokeURL;
        else if (+a.app === E.KDD) {
            var S = a.kddParams || {};
            I = a.defaultURL || "https://haokan.baidu.com/activity/h5/chaihongbao?productid=6&inviteCode=B36CCC5X010&pd=" + (S.pd || "") + "&tab=guide&source=" + (S.source || "") + "&idfrom=" + (S.idfrom || "")
        } else if (+a.app === E.LITE) {
            var A = a.liteParams || {};
            I = a.defaultURL || "https://eopa.baidu.com/page/litetwtj-oA8Aiml9?idfrom=" + (A.idfrom || "") + "&type=" + (A.type || "") + "&nid=" + (A.nid || "")
        } else I = b(a.defaultURL, /^https?:\/\/boxer.baidu.com\/scheme/, "https://boxer.baidu.com/scheme", {
            source: v,
            channel: k,
            p1: k,
            p2: c,
            p3: v,
            tokenData: encodeURIComponent(encodeURIComponent(JSON.stringify(O)))
        });
        var P;
        R.isSupportULink() && +a.fail === L.FAIL.APPATORE && !R.ua.isUC() && (P = I, I = L.APP_STORE);
        var N = navigator.userAgent,
            D = {
                from: v,
                channel: k,
                notUseIdm: +a.app !== E.BD_LITE,
                failUrl: I,
                failCallback: function() {
                    var c = +a.fail;
                    4 !== c && (3 === c ? y(I) : window.location.href = I)
                },
                copyTokenData: O,
                extLog: {
                    ext_content: C({
                        from: c,
                        browserid: a.browserid || "",
                        qid: a.qid || "",
                        timestamp: (new Date).getTime(),
                        isPrivate: a.isPrivate
                    }, a.extLogContent)
                },
                iosForceScheme: /iP(ad|hone|od)/.test(N) && /MQQBrowser\//i.test(N) || 4 === +a.fail
            };
        return P && (D.originFailURL = P), a.iosScheme || (a.iosScheme = function(c) {
            var b = c && c.protocolHeader;
            return g(a.mode, a, b).iosScheme
        }), a.androidCommand || (a.androidCommand = function(c) {
            var b = c && c.protocolHeader;
            return g(a.mode, a, b).androidCommand
        }), C(D, a)
    }

    function k() {
        this.isReady = !1, this.readyCallbacks = [], this.init()
    }

    function h(c) {
        if (c && "object" == typeof c && (!c.app || +c.app === E.BD_LITE || +c.app === E.BD || +c.app === E.KDD || +c.app === E.LITE)) {
            if (c.app && +c.app === E.KDD && (c.matrix = "mission", c.iosForceScheme = !0), c.app && +c.app === E.LITE && (c.matrix = "lite", c.iosForceScheme = !0), c.mode && +c.mode === _.WISE_OPEN_URL && c.invokeURL) return void(window.location.href = c.invokeURL);
            if (R.isBox() && c.mode && +c.mode === _.XCX) return w(c);
            var b = new k;
            c.app && c.mode && (c = v(c)), U(c) && (R.registerPagehideListener(c, a), b.ready(function() {
                b.openBox.open(c)
            }))
        }
    }
    var g = require("@baidu/invoke-box/src/getScheme"),
        w = require("@baidu/invoke-box/src/openXCX"),
        y = require("@baidu/invoke-box/src/invokeMarket"),
        U = require("@baidu/invoke-box/src/scene"),
        R = require("@baidu/invoke-box/src/utils"),
        C = R.extend,
        L = require("@baidu/invoke-box/src/consts"),
        E = L.APP,
        _ = L.MODE;
    return k.prototype = {
        constructor: k,
        init: function() {
            var a = this;
            c(function() {
                a.openBox = window.OpenBox(), a.isReady = !0, a.doReadyCallbacks()
            }, function(a) {
                throw a
            })
        },
        doReadyCallbacks: function() {
            for (var a = this.readyCallbacks, i = 0, c = a.length; c > i; i++) a[i].call(this);
            this.readyCallbacks = []
        },
        ready: function(a) {
            "function" == typeof a && (this.isReady ? a.call(this) : this.readyCallbacks.push(a))
        }
    }, h
}), define("@baidu/invoke-box/src/invokeBaby", ["require", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        if (a.iosScheme || a.androidCommand) return a.iosScheme || a.androidCommand;
        var c = a.mode,
            b = a.from || "",
            v = a.bbParams || {},
            k = "&source=" + b;
        if (c === w.OPEN_URL) {
            var h = v.page,
                g = v.query;
            if (h) return U + "?page=" + h + (g ? "&" + g : "") + k;
            if (a.invokeURL) return U + "?page=webview&id=" + encodeURIComponent(a.invokeURL) + k
        }
        return U + "?page=index" + k
    }

    function c(a) {
        var c = a.bbParams || {};
        return c.downloadUrl || "https://baobao.baidu.com/pinpai?from=" + a.channel
    }

    function b(a) {
        return a.fail && +a.fail === y.INVOKE_URL && a.invokeURL ? a.invokeURL : a.defaultURL ? a.defaultURL : c(a)
    }

    function v(c) {
        var v = c.fail ? +c.fail : "",
            k = {
                scheme: a(c),
                failCallback: function() {}
            };
        return v && v !== y.INVOKE_URL && v !== y.DEFAULT_URL || (k.failCallback = function() {
            location.href = b(c)
        }), k
    }

    function k(a) {
        if (+a.mode === w.DOWNLOAD_PAGE) return void(location.href = c(a));
        var b = v(a);
        h.normalInvoke(b.scheme, b.failCallback)
    }
    var h = require("@baidu/invoke-box/src/utils"),
        g = require("@baidu/invoke-box/src/consts"),
        w = g.MODE,
        y = g.FAIL,
        U = "askmybaby://com.baidu.mbaby/";
    return k
}), define("@baidu/invoke-box/src/invokeHaoKan", ["require", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        if (a.fail && +a.fail === w.INVOKE_URL && a.invokeURL) return a.invokeURL;
        if (a.defaultURL) return a.defaultURL;
        var c = "https://haokan.baidu.com/download";
        return c + "?tab=" + (a.hkParams.tab || "") + "&tag=" + (a.hkParams.tag || "") + "&source=" + (a.hkParams.source || "")
    }

    function c(a) {
        var c = "baiduhaokan://search/result/?keyword=" + encodeURIComponent(a.backQuery) + "&tab=" + a.hkParams.tab + "&tag=" + a.hkParams.tag + "&source=" + a.hkParams.source;
        return encodeURIComponent(c)
    }

    function b(a, b) {
        var v = a.hkParams,
            k = "tab=" + v.tab + "&tag=" + v.tag + "&source=" + v.source,
            h = "baiduhaokan://home/index/?" + k + "&channel=" + v.channel + "&vid=" + v.vid + "&coin=" + v.coin + "&auto_play_index=" + v.auto_play_index + "&ext=" + v.ext + "&ext_content=" + v.ext_content;
        if (a.mode === g.OPEN_URL) switch (b) {
            case "video":
                h = "baiduhaokan://video/details/?url_key=" + v.url_key + "&" + k + "&coin=" + v.coin + "&vid=" + v.vid + "&ext_content=" + v.ext_content;
                break;
            case "index":
                break;
            case "webview":
                h = "baiduhaokan://webview/?url_key=" + v.url_key + "&" + k
        }
        return a.backQuery && (h += "&back_url=" + c(a)), h
    }

    function v(v) {
        var h, U = v.channel || "",
            R = v.from || "";
        switch (v.hkParams = v.hkParams || {}, v.mode) {
            case g.OPEN_URL:
                h = v.hkParams.page || "video";
                break;
            case g.INDEX:
                h = v.hkParams.page || "index"
        }
        if (h) {
            var C = k.extend({
                url_key: "",
                tab: "",
                tag: "",
                source: R || "",
                coin: 0,
                vid: "",
                channel: "recommend",
                auto_play_index: 0,
                ext: "",
                ext_content: "",
                target: ""
            }, v.hkParams);
            v.backQuery && (C.back_url = c(v)), !C.url_key && v.invokeURL && (C.url_key = encodeURIComponent(v.invokeURL)), v.hkParams = C;
            var L = a(v);
            C.target || (C.target = encodeURIComponent(L)), C.ext_content || (C.ext_content = encodeURIComponent(JSON.stringify(k.extend({
                baiduid: v.baiduid || (k.getCookie("BAIDUID") ? k.getCookie("BAIDUID").split(":FG")[0] : ""),
                baiducuid: k.getCookie("BAIDUCUID") || "",
                qid: v.qid || "",
                timestamp: (new Date).getTime()
            }, v.extLogContent)))), v.hkParams = C;
            var E = {
                page: h,
                param: C,
                timeout: 200,
                clipboardTxt: "#" + b(v, h) + "#",
                pkgs: {
                    android: "https://cdn-haokanapk.baidu.com/haokanapk/apk/baiduhaokan" + (U ? U : "1021176d") + ".apk",
                    ios: "https://apps.apple.com/cn/app/id1092031003?mt=8",
                    yyb: "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.haokan"
                },
                landPage: L
            };
            if (k.isBox()) {
                E.launchType = {
                    ios: "scheme",
                    android: "scheme"
                };
                var _, I = b(v, h);
                if (v.boxCallback) _ = k.getDeepLinkInvokeScheme(I, v.boxCallback);
                else {
                    var O = function() {
                            var a = v.success || y.NO_CHANGE; + a !== y.NO_CHANGE && +a === y.DEFAULT_URL && (location.href = L)
                        },
                        S = function() {
                            var a = v.fail || w.DEFAULT_URL;
                            a !== w.NO_CHANGE && +a === w.DEFAULT_URL && (location.href = L)
                        },
                        A = k.getDeepLinkCallback(O, S);
                    _ = k.getDeepLinkInvokeScheme(I, A)
                }
                return void k.normalInvoke(_)
            }
            var S = function() {
                return v.fail === w.NO_CHANGE ? 1 : 2
            };
            window.launchHK ? window.launchHK.launch && window.launchHK.launch(E, S) : k.loadScript("//b.bdstatic.com/searchbox/icms/other/js/hk_launch.min.js?v=20190521", function() {
                window.launchHK.launch && window.launchHK.launch(E, S)
            }, function(a) {
                throw a
            })
        }
    }
    var k = require("@baidu/invoke-box/src/utils"),
        h = require("@baidu/invoke-box/src/consts"),
        g = h.MODE,
        w = h.FAIL,
        y = h.SUCCESS;
    return v
}), define("@baidu/invoke-box/src/invokeIQY", ["require", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        if (a && "object" == typeof a && +a.app === c.IQY && a.invokeURL && /^https?:\/\/(www|tw|m).iqiyi.com/.test(a.invokeURL)) {
            var b = a.invokeURL,
                v = "iqiyi://mobile/webview?url=" + encodeURIComponent(b) + "&sid=" + (a.sid || "") + "&package=" + (a.package || "") + "&deeplink=" + encodeURIComponent(a.deeplink || "") + "&ftype=27&subtype=" + (a.subtype || a.from || ""),
                k = document.createElement("iframe");
            k.style.display = "none", k.src = v;
            var h = document.body || document.getElementsByTagName("body")[0];
            h.appendChild(k), setTimeout(function() {
                h.removeChild(k), k = null
            }, 0);
            var g = a.waitTime || 100,
                w = "function" == typeof a.failCallback ? a.failCallback : a.failUrl || a.invokeURL,
                y = +Date.now();
            setTimeout(function() {
                var a = typeof w;
                Date.now() - y < g + 200 && ("function" === a ? w(v) : w && "string" === a && (window.location.href = w))
            }, g)
        }
    }
    var c = require("@baidu/invoke-box/src/consts").APP;
    return a
}), define("@baidu/invoke-box/src/invokeMarket", ["require"], function() {
    function a(a) {
        function c(a) {
            var c = document.createElement("iframe");
            c.src = a, c.style.display = "none", document.body.appendChild(c), window.setTimeout(function() {
                document.body.removeChild(c)
            }, 300)
        }
        var b, v = {
            xiaomi: {
                reg: /\(.*Android.*(MI|Mi|Redmi).*\)/,
                scheme: "mimarket://details?id=com.baidu.searchbox&back=true"
            },
            samsung: {
                reg: /\(.*Android.*(SAMSUNG|SM-).*\)/,
                scheme: "samsungapps://ProductDetail/com.baidu.searchbox"
            },
            huawei: {
                reg: /\(.*Android.*(HUAWEI|HONOR).*\)/i,
                scheme: "appmarket://details?id=com.baidu.searchbox"
            },
            oppo: {
                reg: /\(.*Android.*OPPO.*\)/,
                scheme: "oppomarket://details?packagename=com.baidu.searchbox",
                downloadFirst: !0
            },
            def: {
                reg: /\(.*Android.*\)/,
                scheme: "market://details?id=com.baidu.searchbox"
            }
        };
        for (b in v)
            if (v.hasOwnProperty(b)) {
                var k = v[b];
                if (k.reg.test(navigator.userAgent)) {
                    c(k.scheme);
                    break
                }
            }
        setTimeout(function() {
            a && (window.location.href = a)
        }, 300)
    }
    return a
}), define("@baidu/invoke-box/src/invokeQuanmin", ["require", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        var c = a.qmParams,
            b = "https://quanmin.baidu.com/mvideo/view/quanmin";
        return c.downloadUrl || "" + b + "?tab=" + (c.tab || "") + "&tag=" + (c.tag || "") + "&pd=" + (c.pd || "") + "&channel=" + (c.channel || "") + "&source=" + (c.source || "")
    }

    function c(c) {
        return c.fail && +c.fail === y.INVOKE_URL && c.invokeURL ? c.invokeURL : c.defaultURL ? c.defaultURL : a(c)
    }

    function b(a) {
        if (a.iosScheme || a.androidCommand) return a.iosScheme || a.androidCommand;
        var c = a.qmParams || {},
            b = c.page,
            v = "source=" + c.source + "&tab=" + c.tab + "&tag=" + c.tag,
            k = "bdminivideo://home/index?" + v;
        if (a.mode === w.OPEN_URL) {
            switch (b) {
                case "video":
                    k = "bdminivideo://video/details?params=" + encodeURIComponent(JSON.stringify({
                        vid: c.vid
                    })) + "&" + v
            }!b && a.invokeURL && (k = "bdminivideo://webview?params=" + encodeURIComponent(JSON.stringify({
                url_key: c.url_key || a.invokeURL
            })) + "&" + v)
        }
        return k
    }

    function v(a) {
        return "https://vv.baidu.com/feedvideoui/ulink?scheme=" + encodeURIComponent(b(a)) + "&target=" + encodeURIComponent(c(a))
    }

    function k(k) {
        var g = k.channel || "",
            U = k.from || "";
        k.qmParams = k.qmParams || {};
        var R = h.extend({
            url_key: "",
            tab: "act",
            tag: "sbldyzbdlzbpd",
            pd: "1023133u",
            channel: g || "1023063m",
            source: U || "act-1023133u-0"
        }, k.qmParams);
        k.qmParams = R;
        var C = b(k),
            L = {
                action: {
                    app: "Minivideo",
                    type: "invoke",
                    scheme: C,
                    ulink: v(k),
                    pkgName: "com.baidu.minivideo",
                    timeOut: 1e3
                },
                downloadInfo: {
                    pkgurl: c(k)
                }
            };
        if (+k.mode === w.DOWNLOAD_PAGE) return void(location.href = a(k));
        var E = k.fail ? +k.fail : "";
        E && E !== y.INVOKE_URL && E !== y.DEFAULT_URL && delete L.downloadInfo, h.copyToClipBoard("#" + C + "#"), window.rmbgrowthbox ? window.rmbgrowthbox.Invoke && (new window.rmbgrowthbox.Invoke).go(L) : h.loadScript("//b.bdstatic.com/searchbox/icms/other/js/rmbgrowthbox.min.js", function() {
            window.rmbgrowthbox.Invoke && (new window.rmbgrowthbox.Invoke).go(L)
        }, function(a) {
            throw a
        })
    }
    var h = require("@baidu/invoke-box/src/utils"),
        g = require("@baidu/invoke-box/src/consts"),
        w = g.MODE,
        y = g.FAIL;
    return k
}), define("@baidu/invoke-box/src/invokeTieba", ["require", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        var c = a.tbParams || {};
        return c.downloadUrl || "https://tieba.baidu.com/mo/q/activityDiversion/download?fr=bpushTopBannerOpenApp&obj_locate=" + a.page + "_" + a.locate + "&obj_source=no_refer"
    }

    function c(c) {
        return c.fail && +c.fail === w.INVOKE_URL && c.invokeURL ? c.invokeURL : c.defaultURL ? c.defaultURL : a(c)
    }

    function b(a) {
        var b = a.tbParams && a.tbParams.originUrl || a.invokeURL,
            v = a.mode ? +a.mode : "",
            h = a.fail ? +a.fail : "";
        b = b.replace("tieba.baidu.com/g/", "tieba.baidu.com/p/");
        var y = {
                locate: a.from || "",
                page: "index",
                path: "",
                param: {},
                ios9DownUrl: "",
                noDownload: !0,
                callManufacturer: h === w.APPATORE,
                failBack: function() {},
                waitTime: 300
            },
            U = {
                page: "index",
                path: "",
                param: {}
            };
        if (v === g.OPEN_URL) {
            var R = b.split("#")[0].split("?"),
                C = R[0].replace(/^https?:\/\//, ""),
                L = R[1] || "",
                E = k.parseQuery(L),
                _ = /^tieba\.baidu\.com/gi.test(C) && /\/p\/(\d+)|\/f$|\/f\/$/gi.exec(C);
            _ && _[1] ? (U.page = "pb", U.param.tid = _[1]) : _ && /\d+/.test(E.kz) ? (U.page = "pb", U.param.tid = E.kz) : _ && E.kw ? (U.page = "frs", U.param.kw = E.kw) : /^[^\/]+($|\/$)/.test(C) ? U.page = "index" : (U.page = "other", U.path = "tbwebview", U.param.url = encodeURIComponent(b))
        }
        if (h && h !== w.INVOKE_URL && h !== w.DEFAULT_URL) h === w.NO_CHANGE && (U.path = U.path || ("index" === U.page ? "homepage" : U.page) || "", U.page = "other", y.failBack = function() {});
        else {
            var I = c(k.extend({}, y, U, a, {
                from: "bpush"
            }));
            "other" !== U.page && (y.ios9DownUrl = h === w.INVOKE_URL ? b.split("#")[0].split("?")[1] || "" : I.split("#")[0].split("?")[1] || ""), y.failBack = function() {
                location.href = I
            }
        }
        return k.extend(y, U, a, {
            from: "bpush"
        }), y.locate = y.page + "_" + y.locate, y
    }

    function v(c) {
        return +c.mode === g.DOWNLOAD_PAGE ? void(location.href = a(c)) : void(window.tbwakeup ? window.tbwakeup.init && window.tbwakeup.init(b(c)) : k.loadScript("//b.bdstatic.com/searchbox/icms/other/js/launch_tieba.js", function() {
            window.tbwakeup.init && window.tbwakeup.init(b(c))
        }, function(a) {
            throw a
        }))
    }
    var k = require("@baidu/invoke-box/src/utils"),
        h = require("@baidu/invoke-box/src/consts"),
        g = h.MODE,
        w = h.FAIL;
    return v
}), define("@baidu/invoke-box/src/openXCX", ["require", "@baidu/invoke-box/src/utils", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        !c.isBox() || !a || "object" != typeof a || a.app && +a.app !== v.BD || a.mode && +a.mode !== k.XCX || require(["@baidu/smartapp"], function(b) {
            b({
                appKey: a.appKey,
                url: a.invokeURL,
                from: a.swanFrom || "",
                ext: c.extend({
                    token: "swanubc",
                    url: a.invokeURL
                }, a.extLogContent || {})
            })
        })
    }
    var c = require("@baidu/invoke-box/src/utils"),
        b = require("@baidu/invoke-box/src/consts"),
        v = b.APP,
        k = b.MODE;
    return a
}), define("@baidu/invoke-box/src/scene", ["require", "@baidu/invoke-box/src/consts", "@baidu/invoke-box/src/utils"], function(require) {
    function a(a, c) {
        var k = b.PRIVATE_SCENE;
        if (!a.isPrivate || +c === k.CONTINUE_INVOKE) return !0;
        var h;
        switch (+c) {
            case k.INVOKE_URL:
                h = a.invokeURL;
                break;
            case k.DEFAULT_URL:
                h = a.failUrl;
                break;
            case k.NO_CHANGE:
        }
        v.isValidURL(h) && (window.location.href = h)
    }

    function c(a) {
        var c = a.scene;
        if (v.isEmptyObject(c)) return !0;
        var b = !0;
        return void 0 !== c[k] && (b = h[k](a, c[k])), b
    }
    var b = require("@baidu/invoke-box/src/consts"),
        v = require("@baidu/invoke-box/src/utils"),
        k = b.SCENE.PRIVATE,
        h = {};
    return h[k] = a, c
}), define("@baidu/invoke-box/src/utils", ["require", "@searchfe/user-agent", "@baidu/get-app-info", "@baidu/invoke-box/src/consts"], function(require) {
    function a(a) {
        return "[object Object]" === Object.prototype.toString.call(a)
    }

    function c() {
        var a;
        if (window.webkitRequestFileSystem) window.webkitRequestFileSystem(window.TEMPORARY, 1, function() {
            a = !1
        }, function() {
            a = !0
        });
        else if (window.localStorage)
            if (/Safari/.test(window.navigator.userAgent))
                if (window.safariIncognito) a = !0;
                else try {
                    window.openDatabase(null, null, null, null), window.localStorage.setItem("test", 1)
                } catch (e) {
                    a = !0
                } else try {
                    window.localStorage.setItem("test", 1)
                } catch (e) {
                    a = !0
                }
        if ("undefined" == typeof a) {
            a = !1;
            try {
                window.localStorage && window.localStorage.removeItem("test")
            } catch (e) {}
        }
        return function() {
            return a
        }
    }

    function b(c) {
        var b = arguments.length;
        if (2 > b || null == c) return c;
        for (var v = 1; b > v; v++) {
            var k = arguments[v];
            if (a(k)) {
                for (var h in k) k.hasOwnProperty(h) && (c[h] = k[h]);
                var g = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                if (!{
                        toString: null
                    }.propertyIsEnumerable("toString"))
                    for (var w = 0, y = g.length; y > w; w++) h = g[w], k.hasOwnProperty(h) && (c[h] = k[h])
            }
        }
        return c
    }

    function v(a) {
        a || (a = new Date);
        var c = a.getFullYear(),
            m = a.getMonth() + 1;
        10 > m && (m = "0" + m);
        var d = a.getDate();
        10 > d && (d = "0" + d);
        var b = a.getHours();
        return 10 > b && (b = "0" + b), c + "-" + m + "-" + d + "-" + b
    }

    function k(a, c, b) {
        var v = "function" == typeof c,
            k = "function" == typeof b,
            h = document.createElement("script");
        h.src = a, h.async = !0;
        var g = "Failed to loading script: " + a;
        h.onload = h.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState ? k && b(g) : (h.onload = h.onreadystatechange = null, h = null, v && c())
        }, h.onerror = function() {
            h.onerror = null, h = null, k && b(g)
        };
        var w = document.getElementsByTagName("head")[0];
        w.appendChild(h)
    }

    function h() {
        var a = window.navigator || {},
            c = a.userAgent;
        return / baiduboxapp\//i.test(c) && !/ (lite|info|mission) baiduboxapp/.test(c)
    }

    function g(a) {
        var c = document.createElement("input");
        c.setAttribute("readonly", ""), c.value = a, document.body.appendChild(c), c.select(), c.setSelectionRange(0, c.value.length), c.removeAttribute("readonly");
        try {
            document.execCommand("copy")
        } catch (b) {}
        try {
            c.blur()
        } catch (b) {}
        c.remove()
    }

    function w(a) {
        a = a.replace(/^\?/, "").split("&");
        var c, b, v = {};
        return a.forEach(function(a) {
            a = a.split("="), c = a[0], b = a.length >= 2 ? a[1] : "";
            try {
                b && (b = decodeURIComponent(b))
            } catch (e) {}
            v[c] ? (Array.isArray(v[c]) || (v[c] = [v[c]]), v[c].push(b)) : v[c] = b
        }), v
    }

    function y(a) {
        var c = [];
        return Object.keys(a).forEach(function(b) {
            var v = a[b];
            Array.isArray(v) || (v = [v]), v.forEach(function(a) {
                "" !== a && c.push(b + "=" + encodeURIComponent(a))
            })
        }), c.join("&")
    }

    function U(a, c) {
        a = a || function() {}, c = c || 100;
        var b = Date.now();
        setTimeout(function() {
            Date.now() - b < c + 200 && a()
        }, c)
    }

    function R(a, c, b) {
        if (D.isIOS() && D.iOSVersion()[0] >= 9) window.location.href = a;
        else if (D.isAndroid() && D.getChromeVersion()[0] > 55) window.location.href = a;
        else {
            var v = document.createElement("iframe");
            v.style.display = "none", v.src = a, document.body.appendChild(v), setTimeout(function() {
                document.body.removeChild(v), v = null
            }, 0)
        }
        U(c, b)
    }

    function C(a, c) {
        return c = "function" == typeof c ? c : function() {}, h() && B[a] ? void T.getAppInfo(B[a]).then(function(a) {
            return a && 0 === +a.result ? c(!0) : void c(!1)
        }).catch(function() {
            c(!1)
        }) : c(!0)
    }

    function L() {
        return D.isIOS() && D.iOSVersion()[0] >= 9
    }

    function E() {
        var a = ["webkit", "moz", "ms", "o"];
        if ("hidden" in document) return "hidden";
        for (var i = 0, c = a.length; c > i; i++)
            if (a[i] + "Hidden" in document) return a[i] + "Hidden";
        return null
    }

    function _(a, c) {
        var b = E();
        if (b) {
            var v = b.replace(/hidden/i, "") + "visibilitychange",
                k = function(a) {
                    document.removeEventListener(v, a), document.removeEventListener("baiduboxappvisibilitychange", a)
                },
                h = function() {
                    document[b] && c(a), k(h)
                };
            setTimeout(function() {
                k(h)
            }, 1500), document.addEventListener(v, h, !1), document.addEventListener("baiduboxappvisibilitychange", h, !1)
        }
    }

    function I(a) {
        if ("object" == typeof a) return a;
        var c = {};
        if (a && "string" == typeof a) try {
            c = JSON.parse(a)
        } catch (e) {}
        return c
    }

    function O(a) {
        for (var c in a)
            if (a.hasOwnProperty(c)) return !1;
        return !0
    }

    function S(a) {
        return a && /https?:\/\//gi.test(a)
    }

    function A(a) {
        if (0 === arguments.length) return document.cookie;
        var c = new RegExp("(?:^|; )" + encodeURIComponent(a) + "=([^;]*)").exec(document.cookie);
        return c ? c[1] : null
    }

    function P(a, c) {
        return "baiduboxapp://v7/vendor/ad/deeplink?params=" + encodeURIComponent(JSON.stringify({
            appUrl: a
        })) + "&callback=" + c
    }

    function N(a, c, b) {
        return b = b || "invokeDeepLinkCallback" + (new Date).getTime().toString(32), window[b] = function(b) {
            try {
                if (b && 0 === +JSON.parse(b).status) return void a();
                c()
            } catch (e) {}
        }, b
    }
    var D = require("@searchfe/user-agent"),
        T = require("@baidu/get-app-info"),
        B = require("@baidu/invoke-box/src/consts").APP_INFO;
    return {
        isObject: a,
        extend: b,
        getFormatTime: v,
        loadScript: k,
        isBox: h,
        copyToClipBoard: g,
        parseQuery: w,
        stringifyQuery: y,
        invokeFail: U,
        normalInvoke: R,
        isAppInstalled: C,
        isSupportULink: L,
        ua: D,
        isPrivateMode: c(),
        getHiddenProp: E,
        registerPagehideListener: _,
        parseJson: I,
        isEmptyObject: O,
        isValidURL: S,
        getCookie: A,
        getDeepLinkInvokeScheme: P,
        getDeepLinkCallback: N
    }
}), define("@baidu/invoke-box", ["@baidu/invoke-box/index"], function(mod) {
    return mod
});