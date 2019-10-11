
        (function() {
            var spAnalytics = window.spAnalytics || {};
            spAnalytics._q = [];

            function proxy(fn) {
                spAnalytics[fn] = function() {
                    spAnalytics._q.push([fn].concat(Array.prototype.slice.call(arguments, 0)));
                };
            }
            var funcs = ["init", "logEvent", "setUserId", "setUserProperties", "setVersionName", "setDomain", "setGlobalUserProperties"];
            for (var i = 0; i < funcs.length; i++) {
                proxy(funcs[i]);
            }
            window.spAnalytics = spAnalytics;
        })();
    