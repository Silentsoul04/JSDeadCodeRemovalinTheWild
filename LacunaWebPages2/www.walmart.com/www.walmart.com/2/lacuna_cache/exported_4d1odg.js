
        var _perfStartTime;
        var perf = window && window.performance;

        if (perf) {
            if (perf.mark) {
                perf.mark("first-script");

                window.addEventListener("DOMContentLoaded", function() {
                    if (perf && perf.mark && perf.measure) {
                        perf.mark("dom-content-loaded");
                        perf.measure("first-script to dom-content-loaded", "first-script", "dom-content-loaded");
                    }
                });
            }

            if (perf.timing) {
                _perfStartTime = perf.timing.responseStart
            } else {
                _perfStartTime = new Date().getTime();
            }
        }

        var _bcq = _bcq || [];
        var options = {};
        options.start_time = _perfStartTime;
        options.autorun = false;
        options.bh = "beacon.walmart.com";
        options.mode = "release";
        options.mapping_identifier = "Homepage";
        _bcq.push(["_setOptions", options]);
    