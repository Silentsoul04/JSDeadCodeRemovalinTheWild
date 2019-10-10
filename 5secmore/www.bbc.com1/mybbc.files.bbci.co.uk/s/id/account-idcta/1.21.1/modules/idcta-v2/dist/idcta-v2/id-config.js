/**
 * @overview Module 'id-config' provides following values: signin, signout,
 *  settings and register URLs, translations for button labels, current
 *  environment (including identity and IDP endpoint URLs).
 * @namespace idcta
 */
define('idcta-v2/id-config', [
    'idcta-v2/config',
    'idcta-v2/translations',
    'idcta-v2/apiUtils',
    'idcta-v2/logger',
], function(config, translations, apiUtils, logger) {
    function getTldFromHostname() {
        var hostnameParts = window.location.host.split('.');
        if (
            hostnameParts[hostnameParts.length - 2] === 'co' &&
            hostnameParts[hostnameParts.length - 1] === 'uk'
        ) {
            return hostnameParts[hostnameParts.length - 3] + '.co.uk';
        } else {
            return (
                hostnameParts[hostnameParts.length - 2] +
                '.' +
                hostnameParts[hostnameParts.length - 1]
            );
        }
    }

    function deprecationWarning(propertyName, showDeprecationWarning) {
        if (!showDeprecationWarning) {
            return;
        }

        var deprecationError = new Error(
            "Deprecation warning: accessing the property '" +
            propertyName +
            "' is deprecated and will be removed in a future version. Use '.getConfigAsync()' instead."
        );

        console.warn(deprecationError);
        logger.logMessage(deprecationError.message);
    }

    var tld = getTldFromHostname();

    function createConfig(productName, showDeprecationWarning) {
        var queryParameters = {
            context: productName.context,
            userOrigin: productName.userOrigin,
        };

        return {
            get announce_url() {
                deprecationWarning('announce_url', showDeprecationWarning);
                return apiUtils.alignTldWithHostname(config.announce_url);
            },
            get 'bbcid-v5' () {
                deprecationWarning('bbcid-v5', showDeprecationWarning);
                return config['bbcid-v5'];
            },
            get child_parent_linking_url() {
                deprecationWarning(
                    'child_parent_linking_url',
                    showDeprecationWarning
                );
                return config.child_parent_linking_url;
            },
            get 'id-availability' () {
                deprecationWarning('id-availability', showDeprecationWarning);
                return config['id-availability'];
            },
            get identity() {
                deprecationWarning('identity', showDeprecationWarning);
                return {
                    cookieAgeDays: config.identity.cookieAgeDays,
                    accessTokenCookieName: config.identity.accessTokenCookieName,
                    idSignedInCookieName: config.identity.idSignedInCookieName,
                };
            },
            get identityTokenExchangeUrl() {
                deprecationWarning(
                    'identityTokenExchangeUrl',
                    showDeprecationWarning
                );
                return apiUtils.alignTldWithHostname(
                    config.identityTokenExchangeUrl
                );
            },
            get privacy_settings_url() {
                deprecationWarning(
                    'privacy_settings_url',
                    showDeprecationWarning
                );
                return config.privacy_settings_url;
            },
            get ptrt() {
                deprecationWarning('ptrt', showDeprecationWarning);
                return window.location.href;
            },
            get register_url() {
                deprecationWarning('register_url', showDeprecationWarning);
                return apiUtils.appendQueryParameters(
                    apiUtils.alignTldWithHostname(config.register_url),
                    queryParameters
                );
            },
            get settings_url() {
                deprecationWarning('settings_url', showDeprecationWarning);
                return apiUtils.appendQueryParameters(
                    config.settings_url,
                    queryParameters
                );
            },
            get signin_url() {
                deprecationWarning('signin_url', showDeprecationWarning);
                return apiUtils.appendQueryParameters(
                    apiUtils.alignTldWithHostname(config.signin_url),
                    queryParameters
                );
            },
            get signout_url() {
                deprecationWarning('signout_url', showDeprecationWarning);
                return apiUtils.appendQueryParameters(
                    config.signout_url,
                    queryParameters
                );
            },
            get status_url() {
                deprecationWarning('status_url', showDeprecationWarning);
                return apiUtils.appendQueryParameters(
                    config.status_url,
                    queryParameters
                );
            },
            get tld() {
                deprecationWarning('tld', showDeprecationWarning);
                return tld;
            },
            get tokenRefresh() {
                deprecationWarning('tokenRefresh', showDeprecationWarning);
                return config.tokenRefresh || false;
            },
            get tokenRefresh_signout_url() {
                deprecationWarning(
                    'tokenRefresh_signout_url',
                    showDeprecationWarning
                );
                return apiUtils.alignTldWithHostname(
                    config.tokenRefresh_signout_url
                );
            },
            get tokenRefresh_url() {
                deprecationWarning('tokenRefresh_url', showDeprecationWarning);
                return apiUtils.alignTldWithHostname(config.tokenRefresh_url);
            },
            get translation_signedin() {
                deprecationWarning(
                    'translation_signedin',
                    showDeprecationWarning
                );
                return translations.translation_statusbar_signedin;
            },
            get translation_signedout() {
                deprecationWarning(
                    'translation_signedout',
                    showDeprecationWarning
                );
                return translations.translation_statusbar_signedout;
            },
        };
    }

    var exports = createConfig(apiUtils.getProductName(), true);
    var configPromise = apiUtils.getProductNameAsync().then(createConfig);

    /**
     * Retrieve the config asynchronously
     * @returns promise
     */
    exports.getConfigAsync = function() {
        return configPromise;
    };

    /**
     * Retrieve the current domain.
     * @returns string
     */
    exports.getDomain = function() {
        return tld;
    };

    /**
     * Retrieve the identity configuration,
     * containing cookie names and age.
     * @returns object
     */
    exports.getIdentity = function() {
        return config.identity;
    };

    /*
     * Deprecated - config should be served with `.getConfigAsync`
     */
    exports.getConfig = function() {
        deprecationWarning('getConfig', true);
        return exports;
    };

    return exports;
});