define('idcta-v2/tokenRefresh',[
    'idcta-v2/id-config',
    'idcta-v2/idCookie',
    'idcta-v2/apiUtils',
    'idcta-v2/logger',
], function(idConfig, idCookie, apiUtils, logger) {
    var SESSION_TIMEOUT = 15000; // 15s
    var RETRY_AFTER_SHORT = 15000; //15s
    var RETRY_AFTER_LONG = 3600000; //1h

    var MESSAGE_SUCCESS = 'bbcidv5_token_success'; //posed from ptrt page after success
    var MESSAGE_ERROR = 'error'; //posted from error page after error occurs
    var MESSAGE_INVALID = 'invalid'; //posted from signin page after token invalid
    var EXPECTED_MESSAGES = [MESSAGE_SUCCESS, MESSAGE_ERROR, MESSAGE_INVALID];

    var promisePool = new apiUtils.PromisePool();

    /**
     * Initiates a ckns_atkn access token refresh
     * Notes:
     * It will only actually refresh if the token is expired (unless forced to)
     * It will return an unauthorised error if hybrid app detected (forcing does not override)
     * It will return an existing error found in the cookie if it has a retryAfter has not passed (forcing does not override)
     *
     * It returns a Promise that is:
     *  resolved if token was successfully refreshed or did not need refreshing
     *  rejected if there is an error or there was a previous error but not allowed
     *      to retry until the retryAfter has passed
     *
     * Example:
     *
     *  require(['idcta-v2/tokenRefresh'], function(tokenRefresh) {
     *
     *      tokenRefresh.refreshAccessToken()
     *          .then(function() {
     *              console.log('token refresh successful!');
     *          })
     *          .catch(function(error) {
     *              console.log('token refresh failed!');
     *              console.log(
     *                  'error code: ', error.code, ', '
     *                  'message: ', error.message, ', '
     *                  'retryAfter: ', error.retryAfter
     *              );
     *          });
     *  });
     *
     * @param {boolean} [forceRefresh] default: false - force token refresh even if tkn-exp not expired
     * @param {string} [hostname] - the hostname to do the token refresh on, if not the current host.
     * @returns {Promise} - .then() .catch(error: {code: int, message: string, retryAfter: timestamp})
     */
    function refreshAccessToken(forceRefresh, hostname) {
        var idCookieInstance = idCookie.getInstance();
        var dateStarted = new Date();
        var uniqueID = dateStarted.getTime();

        logger.logMessage(
            'Token refresh ' + uniqueID + ' starting [' + dateStarted + ']'
        );

        try {
            if (!idCookieInstance.hasCookie()) {
                logger.logMessage(
                    'Token refresh ' +
                        uniqueID +
                        ' rejected as ckns_id cookie is missing, invalid or expired!'
                );
                return apiUtils.Promise.reject(new InvalidSessionError());
            }

            if (idCookieInstance.isHybridApp()) {
                logger.logMessage(
                    'Token refresh ' +
                        uniqueID +
                        ' rejected, hybrid app detected'
                );
                return apiUtils.Promise.reject(new UnauthorisedError());
            }

            var errorInCookie = idCookieInstance.getError();

            if (
                errorInCookie &&
                apiUtils.timestampInFuture(errorInCookie.retryAfter)
            ) {
                logger.logMessage(
                    'Token refresh ' +
                        uniqueID +
                        ' rejected as there is error in cookie { ' +
                        'code: ' +
                        errorInCookie.code +
                        ', ' +
                        'message: "' +
                        errorInCookie.message +
                        '", ' +
                        'retryAfter: ' +
                        errorInCookie.retryAfter +
                        '}'
                );
                return apiUtils.Promise.reject(errorInCookie);
            }

            if (
                forceRefresh !== true &&
                !idCookieInstance.hasAccessTokenExpired()
            ) {
                logger.logMessage(
                    'Token refresh ' +
                        uniqueID +
                        ' resolved without action as token has not expired'
                );
                return apiUtils.Promise.resolve();
            }

            if (forceRefresh) {
                logger.logMessage(
                    'Token refresh ' +
                        uniqueID +
                        ' forced even though token may not have expired'
                );
            }

            if (!promisePool.isSet(hostname)) {
                promisePool.set(hostname, function(resolve, reject) {
                    idConfig
                        .getConfigAsync()
                        .then(function(config) {
                            var src = config.tokenRefresh_url;
                            src = hostname
                                ? apiUtils.alignTldWithHostname(src, hostname)
                                : src;
                            src = apiUtils.addQueryParameter(
                                src,
                                'tr=' + uniqueID
                            );

                            var newAnnounceUrl = config.announce_url || '';
                            newAnnounceUrl = hostname
                                ? apiUtils.alignTldWithHostname(
                                      newAnnounceUrl,
                                      hostname
                                  )
                                : newAnnounceUrl;
                            newAnnounceUrl = apiUtils.addQueryParameter(
                                newAnnounceUrl,
                                'tr=' + uniqueID
                            );
                            newAnnounceUrl = encodeURIComponent(newAnnounceUrl);

                            src = src.replace(
                                config.announce_url,
                                newAnnounceUrl
                            );

                            return apiUtils.loadUrlInHiddenIframe(
                                src,
                                SESSION_TIMEOUT,
                                EXPECTED_MESSAGES
                            );
                        })
                        .then(resolve, reject);
                });
            } else {
                logger.logMessage(
                    'Token refresh ' +
                        uniqueID +
                        ' reusing existing promise in progress for ' +
                        hostname
                );
            }

            var logTokenRefreshSuccess = function() {
                logger.logMessage('Token refresh ' + uniqueID + ' complete.');
            };

            var logTokenRefreshFailure = function(error) {
                logger.logMessage(
                    'Token refresh ' +
                        uniqueID +
                        ' failed with error { ' +
                        'code: ' +
                        error.code +
                        ', ' +
                        'message: "' +
                        error.message +
                        '", ' +
                        'retryAfter: ' +
                        error.retryAfter +
                        '}'
                );
                throw error;
            };

            // TODO: update idcta to use a newer javascript minifier
            // NOTE: the yuicompressor version has a bug in it causing an error if you use catch() method.
            // Newer versions have fixed that bug however maven doesn't support the newer version
            // https://github.com/yui/yuicompressor/issues/203

            return promisePool
                .get(hostname)
                .then(null, iframeTimeout) //.catch(iframeTimeout)
                .then(checkInvalidMessage)
                .then(checkSuccessMessage)
                .then(null, missingError) //.catch(missingError)
                .then(null, invalidSessionError) //.catch(invalidSessionError);
                .then(logTokenRefreshSuccess, logTokenRefreshFailure);
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /**
     * Called when iframe times out.
     * Will lookup the the token refresh flagpole to determine if token refreshes are allowed
     * and sets the retry-time accordingly.
     *
     * Flagpole value:
     *      ON = RETRY_AFTER,
     *      OFF = RETRY_AFTER_LONG
     *
     * @throws {object} error - code 408 with message and retry time
     */
    var iframeTimeout = function() {
        return idConfig.getConfigAsync().then(function(config) {
            var retryAfter =
                new Date().getTime() +
                (config.tokenRefresh ? RETRY_AFTER_SHORT : RETRY_AFTER_LONG);

            var error = new RequestTimeoutError(retryAfter);

            idCookie.getInstance().setCknsIdCookieProperty('ec', error);

            logger.logMessage(
                'Token refresh - timed out, error added to cookie, if cookie exists { ' +
                    'code: ' +
                    error.code +
                    ', ' +
                    'message: "' +
                    error.message +
                    '", ' +
                    'retryAfter: ' +
                    error.retryAfter +
                    '}'
            );
            throw error;
        });
    };

    /**
     * Checks if invalid message was posted from iframe. If true,
     * it will throw an error code 401, Invalid session.
     *
     * @param {string} message - the message posted from the iframe
     * @throws {object} error - code 401 invalid session
     * @return {string} message - passes the message along the chain
     */
    var checkInvalidMessage = function(message) {
        if (message !== MESSAGE_INVALID) {
            return message;
        }

        logger.logMessage('Token refresh - invalid session error');

        throw new InvalidSessionError();
    };

    /**
     * Checks if message was posted from iframe was success. If not,
     * it will get an error from the cookie and throw it.
     *
     * @param {string} message - the message posted from the iframe
     * @throws {object} error - error that was set in cookie | null
     * @returns {string} message - passes the message along the chain
     */
    var checkSuccessMessage = function(message) {
        if (message === MESSAGE_SUCCESS) {
            return message;
        }

        var errorInCookie = idCookie.getInstance().getError();

        if (errorInCookie) {
            logger.logMessage(
                'Token refresh - unsuccessful, throwing error from cookie { ' +
                    'code: ' +
                    errorInCookie.code +
                    ', ' +
                    'message: "' +
                    errorInCookie.message +
                    '", ' +
                    'retryAfter: ' +
                    errorInCookie.retryAfter +
                    '}'
            );
        } else {
            logger.logMessage(
                'Token refresh - unsuccessful, no error found in cookie'
            );
        }

        throw errorInCookie;
    };

    /**
     * checks if promise was rejected but no error was given
     * e.g. if there was no error in the cookie
     *
     * @param error
     */
    var missingError = function(error) {
        if (error) {
            throw error;
        }

        error = new InternalServiceError();

        idCookie.getInstance().setCknsIdCookieProperty('ec', error);

        logger.logMessage(
            'Token refresh - Internal service error, error added to cookie, if cookie exists { ' +
                'code: ' +
                error.code +
                ', ' +
                'message: "' +
                error.message +
                '", ' +
                'retryAfter: ' +
                error.retryAfter +
                '}'
        );

        throw error;
    };

    /**
     * Catches any 401 invalid session errors and signs out the user, once done
     * it then re throws the error to be handled elsewhere
     *
     * @param {object} error
     * @throws {object} error
     */
    var invalidSessionError = function(error) {
        if (error.code != new InvalidSessionError().code) {
            throw error;
        }

        logger.logMessage(
            'Token refresh - Invalid session error, error added to cookie { ' +
                'code: ' +
                error.code +
                ', ' +
                'message: "' +
                error.message +
                '", ' +
                'retryAfter: ' +
                error.retryAfter +
                '}'
        );

        throw error;
    };

    /**
     * @constructor
     */
    function InvalidSessionError() {
        this.code = 401;
        this.message = 'Invalid session';
    }
    InvalidSessionError.prototype.name = 'InvalidSessionError';

    /**
     * @constructor
     */
    function UnauthorisedError() {
        this.code = 401;
        this.message = 'Unauthorised';
    }
    UnauthorisedError.prototype.name = 'UnauthorisedError';

    /**
     * @param [retryAfter] - timestamp in milliseconds. default: RETRY_AFTER_SHORT
     * @constructor
     */
    function InternalServiceError(retryAfter) {
        this.code = 500;
        this.message = 'Unauthorised';
        this.retryAfter = retryAfter
            ? retryAfter
            : new Date().getTime() + RETRY_AFTER_SHORT;
    }
    InternalServiceError.prototype.name = 'InternalServiceError';

    /**
     * @param [retryAfter] - timestamp in milliseconds. default: RETRY_AFTER_SHORT
     * @constructor
     */
    function RequestTimeoutError(retryAfter) {
        this.code = 408;
        this.message = 'Request timeout';
        this.retryAfter = retryAfter
            ? retryAfter
            : new Date().getTime() + RETRY_AFTER_SHORT;
    }
    RequestTimeoutError.prototype.name = 'RequestTimeoutError';

    /**
     * Set a new PromisePool instance for tokenRefresh module to use
     *
     * Useful if you want token refresh to behave synchronously with any other promises (ajax requests)
     * @param {PromisePool} pool
     */
    function setPromisePool(pool) {
        promisePool = pool;
    }

    var exports = {};

    exports.refreshAccessToken = refreshAccessToken;
    exports.setPromisePool = setPromisePool;
    exports.RETRY_AFTER_SHORT = RETRY_AFTER_SHORT;
    exports.RETRY_AFTER_LONG = RETRY_AFTER_LONG;
    exports.MESSAGE_SUCCESS = MESSAGE_SUCCESS;
    exports.MESSAGE_ERROR = MESSAGE_ERROR;
    exports.MESSAGE_INVALID = MESSAGE_INVALID;
    exports.RETRY_AFTER_SHORT = RETRY_AFTER_SHORT;
    exports.RETRY_AFTER_LONG = RETRY_AFTER_LONG;

    return exports;
});

