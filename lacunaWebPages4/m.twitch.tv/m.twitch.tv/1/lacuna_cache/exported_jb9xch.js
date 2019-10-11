
        (function(g) {
            var s = Date.now();
            if (!g.performance) g.performance = {};
            g.performance.now = function() {
                return Date.now() - s
            }
        })(this);
    