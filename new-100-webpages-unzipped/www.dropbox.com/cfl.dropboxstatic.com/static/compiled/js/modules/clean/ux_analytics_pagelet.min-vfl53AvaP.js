define(["require", "exports", "tslib", "modules/clean/analytics", "modules/core/exception", "modules/clean/ux_analytics"], function(e, i, t, n, o, a) {
    "use strict";

    function l(e) {
        function i(e) {
            o.reportException({
                err: e,
                severity: o.SEVERITY.CRITICAL,
                tags: ["ux_analytics"]
            })
        }
        var t = e.UXAConfigs;
        a.UXAnalytics.initialize(n.UXAnalyticsLogger, t, i)
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), o = t.__importStar(o), i.initialize_module = l
});
//# sourceMappingURL=ux_analytics_pagelet.min.js-vflnpdET0.map