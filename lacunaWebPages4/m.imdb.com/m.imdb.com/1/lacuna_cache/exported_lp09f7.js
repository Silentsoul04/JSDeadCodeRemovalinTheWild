
        doWithAds = function(inside, failureMessage) {___jdce_logger("lacuna_cache/exported_lp09f7.js", 21, 1229);
            if ('consoleLog' in window &&
                'generic' in window &&
                'ad_utils' in window &&
                'custom' in window &&
                'monitoring' in generic &&
                'document_is_ready' in generic) {
                try {
                    inside.call(this);
                } catch (e) {
                    if (window.ueLogError) {
                        if (typeof failureMessage !== 'undefined') {
                            e.message = failureMessage;
                        }
                        e.attribution = "Advertising";
                        e.logLevel = "ERROR";
                        ueLogError(e);
                    }
                    if ((document.location.hash.match('debug=1')) &&
                        (typeof failureMessage !== 'undefined')) {
                        console.error(failureMessage);
                    }
                }
            } else {
                if ((document.location.hash.match('debug=1')) &&
                    (typeof failureMessage !== 'undefined')) {
                    console.error(failureMessage);
                }
            }
        };
    