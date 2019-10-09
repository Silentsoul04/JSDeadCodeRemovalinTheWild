
            (function() {___jdce_logger("lacuna_cache/exported_y621r4.js", 14, 991);
                var html = document.documentElement;
                var pathPrefixAttribute = 'data-cw-private-path-prefix';
                var buildNumberAttribute = 'data-cw-private-build-number';
                var masteringNumberAttribute = 'data-cw-private-mastering-number';
                var localeAttribute = 'data-cw-private-locale';

                window.__CW_PATH_PREFIX = html.getAttribute(pathPrefixAttribute);
                window.__CW_BUILD_INFO = {
                    buildNumber: html.getAttribute(buildNumberAttribute),
                    masteringNumber: html.getAttribute(masteringNumberAttribute),
                    locale: html.getAttribute(localeAttribute)
                };

                html.removeAttribute(pathPrefixAttribute);
                html.removeAttribute(buildNumberAttribute);
                html.removeAttribute(masteringNumberAttribute);
                html.removeAttribute(localeAttribute);
            })();
        