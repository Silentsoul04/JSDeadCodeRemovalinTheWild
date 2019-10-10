
        (function(d) {
            if (CNN.UserConsent.inUserConsentState(["performance"])) {
                var e = d.createElement('script');
                e.async = true;
                e.type = 'text/javascript';
                e.onload = function _onJSMDLoad(e) {
                    jQuery(d).triggerAnalyticsReady();
                };
                e.src = '//agility.cnn.com/turner/cnn-prod/Bootstrap.js';
                d.getElementsByTagName('body')[0].appendChild(e);
            }
        })(document);
    