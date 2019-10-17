
        (function() {
            function fireGA() {
                var page = 'p_homepage-guest-home';
                var url = 'https://www.linkedin.com/' + page;
                var whitelist = {
                    gclid: true,
                    trk: true
                };
                url += '?' + location.search.substring(1).split('&').filter(function(queryParam) {
                    return whitelist.hasOwnProperty(queryParam.split('=')[0].toLowerCase());
                }).join('&');
                ga('create', 'UA-62256447-1', {
                    'cookieDomain': 'linkedin.com'
                });
                ga('set', 'referrer', document.referrer);
                ga('set', 'location', url);
                ga('set', 'title', 'LinkedIn');
                ga('set', 'forceSSL', true);
                ga('set', 'anonymizeIp', true);
                ga('send', 'pageview', {
                    page: page
                });
            }

            function loadGA() {
                (function(i, s, o, g, r, a, m) {
                    i['GoogleAnalyticsObject'] = r;
                    i[r] = i[r] || function() {
                        (i[r].q = i[r].q || []).push(arguments)
                    }, i[r].l = 1 * new Date();
                    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
                    a.async = 1;
                    a.src = g;
                    m.parentNode.insertBefore(a, m)
                })(window, document, 'script', '//platform.linkedin.com/js/analytics.js', 'ga');
            }

            function loadAndFireGA() {
                loadGA();
                fireGA();
            }
            window.addEventListener('load', loadAndFireGA);
        })();
    