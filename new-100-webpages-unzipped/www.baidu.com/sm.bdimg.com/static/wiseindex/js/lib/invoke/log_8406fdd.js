define(function() {
    function c(c) {
        var w = window.sSession.invokeApps;
        return w && w.control && w.control[c] ? "1" === w.rule[c] : !1
    }

    function w(c) {
        var w = window.sSession.invokeApps;
        return w && w.control && w.control[c] ? w.control[c].title : ""
    }

    function a(c) {
        var w = $(".main-box-" + c).parent("div");
        return w.length && w.offset().height >= 50 && w.offset().width >= 50
    }

    function h(h) {
        h && $.isArray(h) && h.length || (h = g), $.each(h, function(i, h) {
            c(h) && setTimeout(function() {
                B.log && B.log.send && B.log.send({
                    ct: 10,
                    cst: 1,
                    logFrom: "callbaidush",
                    logInfo: "" + (a(h) ? "show_" : "hide_") + h + "_" + window.sSession.mobileBrowserId + "_" + window.sSession.from + "_" + w(h)
                })
            }, 800)
        })
    }
    var g = [3, 20];
    return {
        shMonitor: h
    }
});