
        /* globals bizx */
        function initPiwik() {
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView', document.title, {
                dimension2: 'pg_index',
                dimension3: SF.devicePixelRatio,

            }]);
            _paq.push(['enableLinkTracking']);
            (function() {
                var u = "//analytics.slashdotmedia.com/";
                _paq.push(['setTrackerUrl', u + 'sf.php']);
                _paq.push(['setSiteId', 39]);
                var d = document,
                    g = d.createElement('script'),
                    s = d.getElementsByTagName('script')[0];
                g.type = 'text/javascript';
                g.async = true;
                g.defer = true;
                g.src = u + 'sf.js';
                s.parentNode.insertBefore(g, s);
            })();
        }
        bizx.cmp.ifConsent('publisher', ['storage', 'measurement'], initPiwik);
    