define(function(require) {
    function a(a, c) {
        var v = y(a, c);
        return v ? v.strategy : null
    }

    function c(a) {
        return a && a !== L
    }

    function v(a, c) {
        return a && a[c]
    }

    function w(a) {
        $.each(a, function(c) {
            var v = window.sSession.invokeApps.control[c],
                w = v.carouselArr;
            if (w) {
                var g = a[c];
                w.map(function(a) {
                    g[+a.sort] && (a = $.extend(a, g[+a.sort]))
                })
            } else v = $.extend(v, a[c])
        })
    }

    function g(a, c) {
        var v = y(a, c),
            w = {};
        if (v && v.title) {
            var g = v.title.split("_"),
                b = {};
            try {
                b = "string" == typeof v.ext ? JSON.parse(v.ext).flow : v.ext.flow
            } catch (e) {}
            w = g.reduce(function(a, c) {
                return c in b && (a[c] = b[c]), a
            }, {})
        }
        return w
    }

    function b(a, c) {
        var v = {};
        if (c instanceof Object)
            for (var w in c)
                if (c[w] instanceof Object && w === a) {
                    v = c[w];
                    break
                }
        return v
    }

    function k(a, c) {
        var v = S.getLogData(a);
        return $.extend({
            union: v.from,
            browserid: v.browserid,
            qid: v.lid
        }, a, c)
    }
    var S = require("@baidu/invoke-box"),
        h = S.invoke,
        y = S.getControlByPos,
        A = 27,
        D = 51,
        L = "baiduboxapp",
        O = a(A, window.sSession.invokeApps),
        j = g(D, window.sSession.invokeApps);
    return w(j), S.sendLog = function(a) {
        B.log && B.log.send && B.log.send(a)
    }, S.getLogData = function(a) {
        var c = window.sSession.from,
            v = a.from || "",
            w = a.channel || "",
            g = c && "0" !== c ? c : "",
            b = window.sSession.mobileBrowserId,
            k = $("#commonBase").attr("data-lid"),
            B = (new Date).getTime();
        return {
            origin: v,
            from: g,
            channel: w,
            browserid: b,
            qid: k,
            timestamp: B
        }
    }, S.invoke = function(a, w) {
        var g = null;
        c(O) && (a.protocolHeader = O), w && v(j, w) && (g = a.sort ? b(a.sort, j[w]) : j[w]), a = k(a, g), h(a)
    }, S
});