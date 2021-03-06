define("wiseindex/lib/invoke/invokeSecr", ["@searchfe/user-agent", "@searchfe/underscore"], function(a, c) {
    function b(a) {
        function c(a) {
            y ? a() : S.push(a)
        }

        function b() {
            y || (y = !0, S.forEach(function(a) {
                a()
            }), S.length = 0)
        }

        function h(a, c) {
            return a = a || {}, void 0 === c && (c = !0), c ? ($.extend(!0, C, a), !0) : a
        }

        function v(a) {
            if (a) {
                var c = k(C);
                return $.extend(!0, c, h(a, !1)), void w(c)
            }
            y && w(C)
        }
        var S = [],
            y = !1,
            C = {
                action: "open"
            };
        return h(a), a && U.ios && a.iosScheme ? (invokeSecrParams.iosScheme = a.iosScheme, b()) : a && U.android && a.androidCommand ? (invokeSecrParams.androidCommand = a.androidCommand, b()) : b(), {
            ready: c,
            open: v
        }
    }

    function h(a) {
        var c, b = "intent://invokeapp/#Intent;scheme=simplesearchapp;package=com.baidu.searchcraft;",
            h = "simplesearchapp://invokeapp",
            w = a.action || "open",
            v = {
                baiduid: a.baiduid || "",
                query: a.query || "",
                channel: a.channel || "",
                zt: a.zt || "",
                os: U.iOS ? "ios" : U.android ? "android" : "other",
                browser: U.app,
                logid: a.logid || ""
            },
            S = encodeURIComponent(JSON.stringify(v));
        b = b + "S.action=" + w + ";", h = h + "?action=" + w, "graph" === w && a.type && (c = a.type, b = b + "S.type=" + c + ";", h = h + "&type=" + c), b = b + "S.params=" + S + ";", h = h + "&params=" + S;
        var y = B + encodeURIComponent(h);
        return a.failUrl && (b = b + "S.browser_fallback_url=" + a.failUrl + ";", y = y + "&target=" + a.failUrl), {
            intent: b + "end",
            scheme: h,
            universalLink: y
        }
    }

    function w(a) {
        if (!U.isSecr && y(a)) {
            var c, b = h(a),
                w = a.waitTime || 100,
                S = a.failUrl || "",
                C = O + "channel=" + a.channel + "&zt=" + a.zt;
            c = $.isFunction(a.failCallback) ? a.failCallback : S ? S : C, U.android ? (U.isChrome && U.chromeVersion > 25 && v(b.intent, c, w), v(b.scheme, c, w)) : U.ios ? U.iosVersion[0] < 9 || "uc" === U.app || "qqbrowser" === U.app ? v(b.scheme, c, w) : window.location.href = b.universalLink : $.isFunction(c) ? c() : window.location.href = c
        }
    }

    function v(a, c, b) {
        if (U.ios && U.iosVersion[0] >= 9 || U.android && U.isChrome && U.chromeVersion > 55) window.location.href = a;
        else {
            var h = document.createElement("iframe");
            h.style.display = "none", h.src = a;
            var w = document.body || document.getElementsByTagName("body")[0];
            w.appendChild(h), setTimeout(function() {
                w.removeChild(h), h = null
            }, 0)
        }
        var v = +Date.now();
        setTimeout(function() {
            Date.now() - v < b + 200 && ($.isFunction(c) ? c(a) : window.location.href = c)
        }, b)
    }

    function S() {
        var a = navigator.userAgent.split("Chrome/")[1];
        if (!a) return 0;
        var c = a.split(".")[0],
            b = parseInt(c, 10);
        return b
    }

    function y(a) {
        return "object" == typeof a
    }

    function C() {
        var a = navigator.userAgent,
            c = {
                sinaweibo: /\bweibo\b/i,
                weixin: /micromessenger\//i,
                qq: /\bQQ\//,
                qzone: /Qzone\//,
                qqbrowser: /MQQBrowser\//i,
                uc: /UCBrowser\//i,
                baidubrowser: /baidubrowser\//,
                sougoubrowser: /\bSogouMobileBrowser\//i,
                search360: /\bmso_app\b/i,
                sougousearch: /\bSogousearch\//i,
                quark: /\bQuark\//i,
                b2345: /\bMb2345Browser\//i
            },
            b = {
                chrome: /\bCriOS\/([\d.]+)/,
                firefox: /\bFxiOS\//i,
                maxthon: /\bMXiOS\//i
            },
            h = {
                firefox: /\bFirefox\//i,
                opera: /\bOPR\//i,
                dolphinbrowser: /\bDolphinBrowserCN\//i,
                liebaobrowser: /\bliebao/i,
                ebrowser: /\bebrowser\//i,
                lebrowser: /\blebrowser\//i,
                huohoubrowser: /\bHuohouBrowser\//i,
                vivobrowser: /\bVivoBrowser\//i,
                oppobrowser: /\bOppoBrowser\//i,
                miuibrowser: /MiuiBrowser\//i,
                samsungbrowser: /\bSamsungBrowser\//i,
                jinlibrowser: /\bGNBR\//i,
                letvbrowser: /\bEUI\sBrowser/i,
                meizubrowser: /\bMZBrowser/i
            },
            w = {};
        U.ios ? w = b : U.android && (w = h);
        var v;
        for (v in c) w[v] = c[v];
        for (var i in w)
            if (w.hasOwnProperty(i) && w[i].test(a) && (U.ios || "safari" != i)) return i;
        if (U.ios) {
            if (/\bsafari\/\d{3}\.\d$/i.test(U) && /\bAppleWebKit\/\d{3}\.\d\.\d/i.test(a)) return "safari";
            if (/\bsafari\/\d{4}\.\d{2}$/i.test(U)) return "liebaobrowser"
        } else if (U.android && /\bChrome\//i.test(a)) return "chrome";
        return "other"
    }

    function g(a) {
        this.openSecr = null, this.status = "", this.readyCallbacks = [], this.opt = {}, this.opt = $.extend(!0, this.opt, a), this.init()
    }
    var k = c.cloneDeep,
        B = "https://jiandan.baidu.com/scheme/?scheme=",
        O = "https://secr.baidu.com/download?",
        U = {
            ios: a.isIOS(),
            android: a.isAndroid(),
            iosVersion: a.iOSVersion(),
            isSecr: a.isSearchCraft(),
            isChrome: a.isChromeMobile(),
            chromeVersion: S()
        };
    return U.app = C(), g.prototype = {
        constructor: g,
        init: function() {
            var a = this,
                c = a.opt;
            a.openSecr = b(c), a.status = "ready", a.doready()
        },
        open: function(a) {
            a ? (this.opt = $.extend(!0, this.opt, a), this.openSecr && this.openSecr.open(this.opt)) : this.openSecr && this.openSecr.open()
        },
        doready: function() {
            var a = this.readyCallbacks.length;
            if (a) {
                for (var i = 0; a > i; i++) this.readyCallbacks[i].call(this);
                this.readyCallbacks = []
            }
        },
        ready: function(a) {
            var c = this;
            "function" == typeof a && ("ready" === c.status ? a.call(this) : c.readyCallbacks.push(a))
        }
    }, g
});