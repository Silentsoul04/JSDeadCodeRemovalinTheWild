define(function() {
    function a(a) {
        var w = window.sSession.from,
            c = a && a.from || "",
            b = a && a.channel || "",
            g = w && "0" !== w ? w : "",
            h = window.sSession.mobileBrowserId,
            B = $("#commonBase").attr("data-lid"),
            S = (new Date).getTime();
        return {
            tc: {
                origin: c,
                from: g,
                channel: b,
                browserid: h,
                qid: B,
                timestamp: S
            },
            tcbox: {
                from: g,
                browserid: h,
                qid: B,
                timestamp: S
            }
        }
    }
    return a
});