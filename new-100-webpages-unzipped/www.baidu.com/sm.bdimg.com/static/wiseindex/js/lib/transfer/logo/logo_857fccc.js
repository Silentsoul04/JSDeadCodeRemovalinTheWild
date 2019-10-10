define(function(require) {
    function g() {
        var g = 33,
            a = c.invoke,
            w = c.getControlByPos(g, window.sSession.invokeApps);
        window.page.log.send({
            ct: 10,
            cst: 1,
            logFrom: "baidulogo",
            logoInfo: k(w).tc
        }), $("#logo").on("click", function(e) {
            window.page.log.send({
                ct: 10,
                cst: 2,
                logFrom: "baidulogo",
                logoInfo: k(w).tc
            }), w && (e.preventDefault(), v(g), a(w))
        })
    }
    var c = require("wiseindex/lib/ivk/common/ivkBox"),
        v = require("wiseindex/lib/invoke/setInvokeCookie"),
        k = require("wiseindex/lib/invoke/getInvokeLogData");
    return g
});