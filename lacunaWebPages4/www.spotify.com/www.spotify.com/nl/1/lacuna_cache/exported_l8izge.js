
        (function(window, document) {
            var s = document.getElementsByTagName('script')[0];
            var as = document.createElement('script');
            as.type = 'text/javascript';
            as.async = true;
            as.src = '//www.scdn.co/webpack/sp-analytics.81dfd15d66d0f2903d74.js';
            as.onload = function() {
                window.spAnalytics.runQueuedFunctions();
            };
            s.parentNode.insertBefore(as, s);
        })(window, document);
    