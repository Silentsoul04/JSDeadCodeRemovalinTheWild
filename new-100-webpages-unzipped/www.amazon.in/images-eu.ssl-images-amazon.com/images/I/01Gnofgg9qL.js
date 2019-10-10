(function(c) {
    var a = window.AmazonUIPageJS || window.P,
        f = a._namespace || a.attributeErrors,
        b = f ? f("AFAPAboveNavAssets", "") : a;
    b.guardFatal ? b.guardFatal(c)(b, window) : b.execute(function() {
        c(b, window)
    })
})(function(c, a, f) {
    c.when("A", "ready").execute(function(b) {
        function c(a) {
            if (d && d.ajaxParams) {
                d.ajaxParams.placementEvent = a;
                var e = d.refTagPrefix;
                e && (d.ajaxParams.ref_ = e + a);
                b.ajax("/gp/mobile-marketing/afap/record-event.html", {
                    method: "post",
                    params: d.ajaxParams
                })
            }
        }
        var a = b.$,
            e = a("#afap-above-nav"),
            d = b.state("afap-above-nav-data");
        e.length && c("SHOWN");
        a("#afap-above-nav-close").bind("click", function() {
            e.slideUp(400);
            c("DISMISSED")
        });
        e.bind("click", function(b) {
            a(b.target).hasClass("afap-above-nav-close") || (d && (location.href = d.redirectUrl), e.slideUp(400), c("CLICKED"))
        })
    })
});