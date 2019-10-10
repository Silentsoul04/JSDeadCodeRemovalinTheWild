
        // Create PerformanceObserver for tracking TTI
        // https://github.com/GoogleChromeLabs/tti-polyfill
        ! function() {___jdce_logger("lacuna_cache/exported_4rb3vw.js", 126, 532);
            if ('PerformanceLongTaskTiming' in window) {
                var g = window.__tti = {
                    e: []
                };
                g.o = new PerformanceObserver(function(l) {___jdce_logger("lacuna_cache/exported_4rb3vw.js", 328, 412);
                    g.e = g.e.concat(l.getEntries())
                });
                g.o.observe({
                    entryTypes: ['longtask']
                })
            }
        }();
    