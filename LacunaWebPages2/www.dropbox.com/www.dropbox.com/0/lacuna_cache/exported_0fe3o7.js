
        addRequireLoadCallback(function() {
            define("modules/constants/request", [], function() {
                var o = {
                    "REQUEST_START_TIME": 1570705890863,
                    "__esModule": true,
                    "REQUEST_TRACING_ENABLED": false,
                    "REQUEST_ID": "45b1d88608e8e464304c6718d209ceed",
                    "PAGE_LOAD_TIME": 1570705890,
                    "LOGGED_OUT_X_DROPBOX_UID": -1,
                    "IS_HTTP2": true
                };
                /* global: ensemble is global for maestro pages */
                if (window.ensemble && window.ensemble.getRequestId) {
                    o.REQUEST_ID = ensemble.getRequestId();
                }
                return o;
            });
            define("modules/constants/page_load", [], function() {
                return {
                    "USER_LOCALE": "en",
                    "REPO_REV": "4a55e199e52b6cf0688cc4cd0270f40f827aa860",
                    "__esModule": true,
                    "COUNTRY_OVERRIDE": null,
                    "IS_SELENIUM_TEST": false,
                    "YAPS_PROJECT": "metaserver",
                    "PUBLIC_MODE_OVERRIDE": null,
                    "YAPS_DEPLOYMENT": "dws-canary"
                };
            });

            /* global: require */
            require.config({
                context: "externals"
            })(["modules/constants/request"]);
        });
    