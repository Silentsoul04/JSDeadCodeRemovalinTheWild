
        (function(window) {
            var home = window.home = window.home || {},
                delta = +new Date() - 1570707296 * 1000;
            home.now = function() {
                return new Date(+new Date() - delta);
            };
        })(window);
    