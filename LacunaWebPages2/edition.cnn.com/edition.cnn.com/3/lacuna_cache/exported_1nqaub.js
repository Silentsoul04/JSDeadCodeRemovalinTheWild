
        (function($) {
            $(document).onZonesAndDomReady(function() {
                if (Modernizr.android === true) {
                    $('head').append('<meta name="theme-color" content="#000000">');
                    $('head').append('<link href="//cdn.cnn.com/cnn/.e/img/3.0/global/misc/cnn-logo.png" rel="icon" sizes="192x192">');
                }
            });
        }(jQuery));
    