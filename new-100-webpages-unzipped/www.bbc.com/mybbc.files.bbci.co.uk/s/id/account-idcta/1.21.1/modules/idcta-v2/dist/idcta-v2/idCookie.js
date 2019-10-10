/**
   @overview The singleton 'ckns_id' cookie used to see if a user is signed in
   @namespace idcta
   @private
 */
define('idcta-v2/idCookie', ['idcta-v2/id-config', 'idcta-v2/logger'], function(
    idConfig,
    logger
) {
    var exports = {};

    var DAY_MILLI_SECONDS = 86400000;

    var DOMAIN = idConfig.getDomain();
    var COOKIE_NAME =
        idConfig.getIdentity() && idConfig.getIdentity().idSignedInCookieName ?
        idConfig.getIdentity().idSignedInCookieName :
        'ckns_id';
    var COOKIE_AGE_DAYS =
        idConfig.getIdentity() && idConfig.getIdentity().cookieAgeDays ?
        idConfig.getIdentity().cookieAgeDays :
        730;
    var ACCESS_TOKEN_COOKIE_NAME =
        idConfig.getIdentity() && idConfig.getIdentity().accessTokenCookieName ?
        idConfig.getIdentity().accessTokenCookieName :
        'ckns_atkn';
    var ANALYTICS_PSEUDONYM = 'ckns_sylphid';
    var ANALYTICS_PSEUDONYM_DEPRECATED = 'ckpf_sylphid';

    var cookie;

    /**
     * Retrieve the single instance of the object
     *
     * @return object
     */
    function getInstance() {
        try {
            if (cookie) {
                cookie.refreshCookie();
                return cookie;
            }
            cookie = new IdCookie();
            return cookie;
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /**
     * Set the single instance of the object
     * (used by unit tests)
     * @return void
     */
    function setInstance(newCookie) {
        try {
            cookie = newCookie;
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /*
     * base64 decodes string to object
     */
    function decodeToJsonObject(encodedString) {
        try {
            var decoded = window.atob(encodedString);
            var lastBracket = decoded.lastIndexOf('}');
            var cleanCookie = decoded.substring(0, lastBracket + 1);
            return JSON.parse(cleanCookie);
        } catch (error) {
            return null;
        }
    }

    function setCookie(cname, cvalue, milliseconds, encode) {
        try {
            cvalue = cvalue || '';
            var expires = '';

            if (milliseconds) {
                var d = new Date();
                d.setTime(d.getTime() + milliseconds);
                expires = 'Expires=' + d.toUTCString() + '; ';
            }
            cvalue = encode ? window.btoa(cvalue) : cvalue;
            document.cookie =
                cname +
                '=' +
                cvalue +
                '; ' +
                expires +
                'Domain=' +
                DOMAIN +
                '; Path=/';
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /**
     * IdCookie abstract cookie Object
     *
     * @param IdCookie.valid boolean Is there are current valid cookie
     * @param @deprecated IdCookie.id String ID of user (v4 only)
     * @param @deprecated IdCookie.username String Username of user (v4 only)
     * @param IdCookie.displayname String Name of user to be displayed publicly
     * @param IdCookie.timestamp String Time the cookie was created
     * @param IdCookie.refreshCookie() Refresh abstract cookie so it matches browser cookie
     * @param IdCookie.hasCookie() boolean Returns if there is a current valid cookie
     * @param IdCookie.getIdFromCookie() String Returns the ID of user
     * @param IdCookie.getNameFromCookie() String Returns username of user
     */
    function IdCookie() {
        var self = this;

        this.valid = false;
        this.id = '';
        this.username = '~';
        this.displayname = '';
        this.timestamp = '';
        this.cookieAgeDays = COOKIE_AGE_DAYS;
        this.isIdv5On = true;

        /**
         * Refresh method to ensure that the abstract cookie matches to the browser cookies
         */
        this.refreshCookie = function() {
            try {
                _refreshCookie();
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Retrieve if a valid 'ckns_id' cookie exists.
         *
         * @return boolean
         */
        this.hasCookie = function() {
            try {
                if (_isTimestampExpired()) {
                    _expireAbstractCookie();
                }

                return self.valid;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Checks if access token has expired
         * by checking tkn-exp timestamp in ckns_id cookie
         *
         * @return boolean
         */
        this.hasAccessTokenExpired = function() {
            try {
                var cknsIdCookie = this.getUserDetailsFromCookie();
                if (!cknsIdCookie) {
                    return true;
                }
                var current = new Date().getTime();
                var tknExp = cknsIdCookie['tkn-exp'] || 0;
                return tknExp <= current;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Checks if jwt token has expired
         * by checking jwt-exp timestamp in ckns_id cookie
         *
         * @return boolean
         */
        this.hasJwtTokenExpired = function() {
            try {
                var cknsIdCookie = this.getUserDetailsFromCookie();
                if (!cknsIdCookie) {
                    return true;
                }
                var current = new Date().getTime();
                var tknExp = cknsIdCookie['jwt-exp'] || 0;
                return tknExp <= current;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Checks if hybrid mode is enabled
         * by checking the hy property of the ckns_id cookie
         *
         * @returns {boolean}
         */
        this.isHybridApp = function() {
            try {
                var cknsIdCookie = this.getUserDetailsFromCookie();
                return cknsIdCookie ? cknsIdCookie.hy || false : false;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Returns any error set in the ckns_id cookie
         *
         * @returns {{}|null}
         */
        this.getError = function() {
            try {
                var cknsIdCookie = this.getUserDetailsFromCookie();
                return cknsIdCookie ? cknsIdCookie.ec || null : null;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Retrieve the user's id from their 'ckns_id' cookie
         *
         * @return string | null
         */
        this.getIdFromCookie = function() {
            try {
                var userDetails = this.getUserDetailsFromCookie();
                return userDetails ? userDetails.ps : null;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Retrieve the user's hid from the istats 'ckpf_sylphid' cookie
         *
         * @return string or null
         */
        this.getHidFromCookie = function() {
            return this.getCookie(ANALYTICS_PSEUDONYM) || this.getCookie(ANALYTICS_PSEUDONYM_DEPRECATED);
        };

        /**
         * Retrieve whether personalisation has been enabled within the user's 'ckns_id' cookie
         * depending on if v5 is enabled
         *
         * @returns {boolean}
         */
        this.isPersonalisationEnabled = function() {
            try {
                var userDetails = this.getUserDetailsFromCookie();
                return userDetails && userDetails.ep;
            } catch (err) {
                logger.logCaughtError(err);
                return false;
            }
        };

        /**
         * Retrieve the user's details from the ckns_id cookie as an Object.
         *
         * @return Object or null
         */
        this.getUserDetailsFromCookie = function() {
            try {
                if (!this.hasCookie()) {
                    return null;
                }

                var cookiePattern = new RegExp(COOKIE_NAME + '=([\\w]+)');
                var cookieMatch = document.cookie.match(cookiePattern);

                if (!cookieMatch) {
                    return null;
                }

                var cookieArray = decodeURIComponent(cookieMatch[1]).split('|');
                var decodedCookie = decodeToJsonObject(cookieArray.toString());

                if (!decodedCookie || !_isCknsIdCookieValid(decodedCookie)) {
                    return null;
                }

                return decodedCookie;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Retrieve the user's displayname from their idMarker cookie.
         *
         * @return string | null
         */
        this.getNameFromCookie = function() {
            try {
                if (!this.hasCookie()) {
                    return null;
                }

                if (self.displayname && self.displayname !== '') {
                    return self.displayname.replace(/\+/g, ' ');
                }

                return null;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Gets the value of the access token
         * @return string | null
         */
        this.getAccessToken = function() {
            try {
                if (!this.hasCookie()) {
                    return null;
                }

                var cookiePattern = new RegExp(
                    ACCESS_TOKEN_COOKIE_NAME + '=([^;]*)'
                );
                var accessToken = document.cookie.match(cookiePattern);

                return accessToken !== null ? accessToken[1] : null;
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * gets a cookie and, optionally base64 decodes the value into a json object
         *
         * @param {string} cname - cookie name
         * @param {boolean} [decode] - whether to base64 decode and parse into object or not
         * @return {null|string|object}
         */
        this.getCookie = function(cname, decode) {
            try {
                var cookiePattern = new RegExp(cname + '=([^\\s;]*)');
                var cookieMatch = document.cookie.match(cookiePattern);
                if (!cookieMatch) {
                    return null;
                }
                if (decode !== true) {
                    return cookieMatch[1];
                }
                var decodedString = decodeURIComponent(cookieMatch[1]);
                return decodeToJsonObject(decodedString);
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        this.setCknsIdCookieProperty = function(name, value) {
            try {
                var cknsId = this.getUserDetailsFromCookie();

                if (!cknsId) {
                    return;
                }

                if (value) {
                    cknsId[name] = value;
                } else {
                    delete cknsId[name];
                }
                var expiryTime = cknsId['jwt-exp'] ?
                    cknsId['jwt-exp'] :
                    DAY_MILLI_SECONDS * COOKIE_AGE_DAYS;

                setCookie(
                    COOKIE_NAME,
                    JSON.stringify(cknsId),
                    expiryTime,
                    true
                );
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * unset a cookie
         *
         * @param {string} cname - cookie name
         */
        this.unsetCookie = function(cname) {
            try {
                document.cookie =
                    cname +
                    '=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=' +
                    DOMAIN +
                    '; Path=/';
            } catch (err) {
                logger.logCaughtError(err);
            }
        };

        /**
         * Setup method to ensure setup the abstract cookie matches to the browser cookies
         */
        function _setupCookie() {
            _refreshCookie();
        }

        /**
         * Refresh method to ensure that the abstract cookie matches to the browser cookies
         */
        function _refreshCookie() {
            var cookiePattern = new RegExp(COOKIE_NAME + '=([\\w]+)');
            var cookieMatch = document.cookie.match(
                cookiePattern
            ); /* Retrieve cookie if exists */

            if (!cookieMatch) {
                _expireAbstractCookie();
                return;
            }

            var cknsIdCookie = decodeToJsonObject(cookieMatch[1]);

            if (!cknsIdCookie ||
                !_isCknsIdCookieValid(cknsIdCookie) ||
                _isCknsIdCookieExpired(cknsIdCookie)
            ) {
                _expireAbstractCookie();
                return;
            }

            self.valid = true;
            self.displayname = cknsIdCookie.dn;
            self.timestamp = cknsIdCookie['jwt-exp']; //jwt-exp is also the ckns_id cookie expiry time
        }

        /**
         * Return if the cookie has expired
         *
         * @return boolean
         */
        function _isTimestampExpired() {
            /* 730 days in milliseconds  (In case there is no value in config ) */
            var tokenExpiry = self.cookieAgeDays * DAY_MILLI_SECONDS;
            var currentTime = new Date().getTime();
            return currentTime - self.timestamp >= tokenExpiry;
        }

        /*
         * Check if mandatory fields are presented in ckns_id cookie
         */
        function _isCknsIdCookieValid(cknsIdCookie) {
            return (
                cknsIdCookie.hasOwnProperty('ps') &&
                cknsIdCookie.hasOwnProperty('jwt-exp') &&
                cknsIdCookie.hasOwnProperty('tkn-exp') &&
                (cknsIdCookie.hy || cknsIdCookie.hasOwnProperty('ses-exp'))
            );
        }

        /**
         * Check jwt-exp expiration field in ckns_id cookie
         */
        function _isCknsIdCookieExpired(cknsIdCookie) {
            var current = new Date().getTime();
            var jwtExp = cknsIdCookie['jwt-exp'] || 0;
            var isExpired = jwtExp <= current;

            return isExpired;
        }

        /**
         * Expire this abstract cookie object
         */
        function _expireAbstractCookie() {
            self.valid = false;
            self.id = '';
            self.username = '~';
            self.displayname = '';
            self.timestamp = '';
        }

        _setupCookie();
    }

    exports.getInstance = getInstance;
    exports.setInstance = setInstance;
    return exports;
});