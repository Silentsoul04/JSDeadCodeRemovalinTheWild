
            (function () {
                jQuery( window.document ).on( 'a8c-cookie-banner:fire-sensitive-pixels', function() {
                    var cbk = window.cookieBannerKit;

                    (function() {
                        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
                    })();
                    var _gaq = _gaq || [];
                    _gaq.push(function () {
                        var pageTracker = _gat._getTracker("UA-52447-14");
                        pageTracker._initData();
                        pageTracker._trackPageview();
                    });
                } )
            })();

        