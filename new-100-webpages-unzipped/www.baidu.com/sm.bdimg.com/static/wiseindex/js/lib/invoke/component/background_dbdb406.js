define(function(require) {
    function a(a, v) {
        B.log.send({
            ct: 10,
            cst: a,
            logFrom: "callbaidu",
            logInfo: v
        })
    }

    function v() {
        var v = "undefined" != typeof navigator ? navigator.userAgent : "",
            c = /Android/i.test(v);
        c && (a(2, "defaul_try"), w.open())
    }

    function c() {
        var a = k.show || !1;
        a && w.ready(function() {
            y(0), v()
        })
    }
    var g = require("wiseindex/lib/invoke/serverDataFactory"),
        k = g("background"),
        b = require("wiseindex/lib/invoke/fnProvider"),
        w = b(k.invokeConfig),
        y = require("wiseindex/lib/invoke/setInvokeCookie");
    return c
});