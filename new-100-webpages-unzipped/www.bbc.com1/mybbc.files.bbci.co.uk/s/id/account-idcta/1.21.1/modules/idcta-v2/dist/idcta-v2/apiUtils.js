define('idcta-v2/apiUtils', ['idcta-v2/es6-promise', 'idcta-v2/istats', 'idcta-v2/logger'], function(
    es6Promise,
    istats,
    logger
) {
    var exports = {};

    var HOUR_IN_MILLISECONDS = 3600000;

    /**
     * Verify URL to request endpoint data from
     * @param {String} url
     * @param {boolean} includeProtocol - optional. default true. whether to include http(s):// or not
     * @returns {String}
     */
    exports.verifyEndpointUrl = function(url, includeProtocol) {
        try {
            if (includeProtocol !== false) {
                includeProtocol = true;
            }

            // If the original url is valid, returns without changing
            var regex = /https?:\/\/(((www|ssl)(\.int|\.test|\.stage)?)|(pal\.sandbox\.dev))\.bbc\.(co\.uk|com)/;
            if (regex.test(url)) {
                // Removes url path if there was one in the provided url
                if (/(\.com|\.co\.uk)\/.+/.test(url)) {
                    url =
                        url.split(/(\.com|\.co\.uk)\/.+/)[0] +
                        url.split(/(\.com|\.co\.uk)\/.+/)[1];
                }
                return url;
            }
            var newUrl = '';

            // Adds the first part of the hostname based on if an https page is passed or not
            if (url.slice(0, 5) == 'https') {
                newUrl += (includeProtocol ? 'https://' : '') + 'ssl.';
                if (url.indexOf('.sandbox.') > -1) {
                    newUrl += 'sandbox.dev.';
                }
            } else {
                newUrl += includeProtocol ? 'http://' : '';
                if (url.indexOf('.sandbox.') > -1) {
                    newUrl += 'pal.sandbox.dev.';
                } else {
                    newUrl += 'www.';
                }
            }

            // Adds an environment part to the hostname if there was one (int, test or stage)
            var env = ['int', 'test', 'stage'];
            for (var i = 0; i < env.length; i++) {
                if (url.indexOf('.' + env[i] + '.') > -1) {
                    newUrl += env[i] + '.';
                }
            }

            // Adds the rest of the URL based on if a .co.uk URL was passed or not
            if (/\.co\.uk/.test(url)) {
                newUrl += 'bbc.co.uk';
            } else {
                newUrl += 'bbc.com';
            }

            return newUrl;
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Align the url's TLD to match the hostname
     * @param {String} url
     * @param {String} hostname
     * @returns {String}
     */
    exports.alignTldWithHostname = function(url, hostname) {
        try {
            var referrer = hostname || window.location.hostname;
            var referrerTLD = referrer.split(/(\.com|\.co\.uk)$/)[1];
            var urlTLD = url.split(/(\.com|\.co\.uk)\/.+/)[1];

            if (urlTLD !== referrerTLD && referrerTLD !== undefined) {
                url = url.replace(urlTLD, referrerTLD);
            }

            return url;
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Append the app_name to 'href' of provided idCta elements
     * @param {object} element
     */
    exports.appendProductToCtaElement = function(element) {
        var product = '';
        var context = '';
        var originStringKey = 'userOrigin=';
        var contextStringKey = 'context=';
        var currentHref = element.getAttribute('href');

        if (!currentHref ||
            (currentHref.indexOf(originStringKey) !== -1 &&
                currentHref.indexOf(contextStringKey) !== -1)
        ) {
            return;
        }

        return exports.getProductNameAsync().then(function(productNames) {
            if (typeof productNames !== 'undefined' && productNames !== '') {
                product = originStringKey + productNames.userOrigin;
                context = contextStringKey + productNames.context;

                var url = element.getAttribute('href');
                var anchor = exports.parseUrl(url);

                if (anchor) {
                    var queryParams = exports.parseQueryString(anchor.search);

                    var pathname = anchor.pathname;

                    if (anchor.pathname.indexOf('/') === -1) {
                        pathname = '/' + anchor.pathname;
                    }
                    element.setAttribute(
                        'href',
                        anchor.protocol +
                        '//' +
                        anchor.host +
                        pathname +
                        addQueryParameter(
                            addQueryParameter(anchor.search, product),
                            context
                        ) +
                        anchor.hash
                    );
                }
            }
        });
    };

    /**
     * Appends query parameters on to given url, duplicate keys are replaced.
     * @param   {string} url
     * @param   {object} params
     * @returns {string} resulting url to return
     */
    function appendQueryParameters(url, params) {
        var urlFragmentSplit = url.split('#');

        var urlWithoutFragment = urlFragmentSplit[0];
        var fragment = urlFragmentSplit[1];

        var urlQueryParameterSplit = urlWithoutFragment.split('?');
        var existingQueryParametersString = urlQueryParameterSplit[1];
        var existingQueryParameters = existingQueryParametersString ?
            existingQueryParametersString
            .split('&')
            .reduce(function(parameters, param) {
                var paramSplit = param.split('=');
                var paramKey = paramSplit[0];
                var paramValue = paramSplit[1];
                parameters[paramKey] = paramValue;
                return parameters;
            }, {}) :
            {};

        var appendedQueryParams = Object.assign({},
            existingQueryParameters,
            params
        );
        var queryParams = Object.keys(appendedQueryParams)
            .map(function(key) {
                return key + '=' + appendedQueryParams[key];
            })
            .join('&');

        var newUrl = queryParams ?
            urlQueryParameterSplit[0] + '?' + queryParams :
            urlQueryParameterSplit[0];

        return fragment ? newUrl + '#' + fragment : newUrl;
    }

    exports.appendQueryParameters = appendQueryParameters;

    /**
     * Helper function to decide on the symbol to prepend for a query param
     * @param   {string} url     original url from config
     * @param   {string} param  product name sport/news from istats
     * @returns {string} resulting url to return
     */
    function addQueryParameter(url, param) {
        /* get just the param name e.g. 'context=' */
        var paramName = param.substring(0, param.indexOf('=') + 1);

        /* If param is already set, don't append it a second time */
        if (url.indexOf(paramName) > -1) {
            return url;
        }

        var urlFragmentSplit = url.split('#');

        var querySeparator = url.indexOf('?') > -1 ? '&' : '?';

        return urlFragmentSplit.length > 1 ?
            urlFragmentSplit[0] +
            querySeparator +
            param +
            '#' +
            urlFragmentSplit[1] :
            url + querySeparator + param;
    }

    exports.addQueryParameter = addQueryParameter;

    /**
     * Get the iStats 'app_name' label value
     * @returns {string} app name to return to
     */
    function getIstatsProductName() {
        var DEFAULT_PRODUCT = {
            context: '',
            userOrigin: '',
        };
        try {
            var bbcSite = istats.getSite();
            if (bbcSite) {
                var contextAndUserOrigin = bbcSite.split(' ').shift();
                return {
                    context: contextAndUserOrigin,
                    userOrigin: contextAndUserOrigin,
                };
            }

            var labels = istats._getLabels();

            if (labels) {
                var label = labels.app_name || labels.prod_name;
                var contextAndUserOrigin = label ?
                    label.split(' ').shift() :
                    '';
                return {
                    context: contextAndUserOrigin,
                    userOrigin: contextAndUserOrigin,
                };
            } else {
                return DEFAULT_PRODUCT;
            }
        } catch (err) {
            logger.logCaughtError(err);
            return DEFAULT_PRODUCT;
        }
    }

    /**
     * Get product name from iStats
     * @returns {string} the product name
     */
    function getProductName() {
        return getIstatsProductName();
    }

    exports.getProductName = getProductName;

    /**
     * Get product name from Orbit.
     * @returns {Promise|es6Promise.Promise} - resolve({string} the product name)
     */
    function getProductNameAsync() {
        var DEFAULT_PRODUCT = {
            context: '',
            userOrigin: '',
        };

        if (!window.bbcpage || !window.bbcpage.getDestination) {
            return exports.Promise.resolve(DEFAULT_PRODUCT);
        }

        return window.bbcpage.getDestination().then(function(destination) {
            if (destination) {
                var context = destination
                    .replace(/_TEST$/, '')
                    .replace(/_PS$/, '')
                    .replace(/_GNL$/, '');

                return {
                    context: context,
                    userOrigin: destination,
                };
            } else {
                return DEFAULT_PRODUCT;
            }
        });
    }

    exports.getProductNameAsync = getProductNameAsync;
    /**
     * Will return either a native Promise object or fallback on an es6Promise
     *
     * @returns {Promise|es6Promise.Promise}
     */
    function getPromise() {
        try {
            if (typeof Promise !== 'undefined') {
                return Promise;
            }

            return es6Promise.Promise;
        } catch (err) {
            logger.logCaughtError(err);
        }
    }

    /** @var {Promise|es6Promise.Promise} */
    exports.Promise = getPromise();

    /**
     * Loads a url in a hidden iframe, attached to the body, once loaded
     * iframe is removed again.
     * if iframe loaded successfully then promise is resolved and iframe returned
     * if iframe timed out then promise is rejected and iframe returned
     *
     * @param {string} src - url to load in iframe
     * @param {int} [timeout] - time in milliseconds to wait for iframe to load
     * @param {[]} [expectedPostMessages] - wait for one of specified messages from postMessage before resolving
     *
     * @returns {Promise} - resolve({string} [message]) | reject()
     */
    exports.loadUrlInHiddenIframe = function(
        src,
        timeout,
        expectedPostMessages
    ) {
        try {
            return new exports.Promise(function(resolve, reject) {
                logger.logMessage(
                    'Creating iframe {' +
                    'src: "' +
                    src +
                    '", ' +
                    'timeout: ' +
                    timeout +
                    (expectedPostMessages ?
                        ', expectedPostMessages: ["' +
                        expectedPostMessages.join('", "') +
                        '"]}' :
                        '}')
                );

                var iframe = document.createElement('iframe');
                iframe.scrolling = 'no';
                iframe.frameborder = '0';
                iframe.width = '0px';
                iframe.height = '0px';
                iframe.border = '0px';
                iframe.style.display = 'none';
                iframe.style.frameBorder = '0px';
                iframe.style.borderStyle = 'none';

                var loadTimeout = null;

                var handlePostMessage = function(event) {
                    var key = event.message ? 'message' : 'data';
                    if (!event.origin.match(/\.bbc\.(co\.uk|com)(:[0-9]+)*$/) ||
                        expectedPostMessages.indexOf(event[key]) == -1
                    ) {
                        logger.logMessage(
                            'Iframe received unexpected message "' +
                            event[key] +
                            '", ignoring'
                        );
                        return;
                    }
                    logger.logMessage(
                        'Iframe received message "' +
                        event[key] +
                        '", resolving'
                    );
                    tidyUp();
                    return resolve(event[key]);
                };

                var tidyUp = function() {
                    if (loadTimeout) {
                        clearTimeout(loadTimeout);
                    }
                    if (expectedPostMessages) {
                        exports.removeEventListener(
                            'message',
                            handlePostMessage
                        );
                    }
                    document.body.removeChild(iframe);
                };

                //set listener waiting for iframe to load or postMessage
                if (expectedPostMessages) {
                    exports.addEventListener('message', handlePostMessage);
                } else {
                    iframe.onload = function() {
                        logger.logMessage(
                            'Iframe with src "' + src + '" loading complete'
                        );
                        tidyUp();
                        return resolve();
                    };
                }

                //set timeout waiting for iframe to load or postMessage
                if (timeout) {
                    loadTimeout = setTimeout(function() {
                        logger.logMessage(
                            'Iframe with src ' +
                            src +
                            ' timed out after ' +
                            timeout +
                            ' milli seconds'
                        );
                        tidyUp();
                        return reject();
                    }, timeout);
                }

                //start loading the url
                iframe.src = src;
                document.body.appendChild(iframe);
            });
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Wrapper around the window.addEventListener method
     * with backwards compatible support for ie8, if detected
     * it will fallback to attachEvent method and also switch the 'message' type for 'onmessage'
     *
     * @param {string} type
     * @param {Function} listener
     * @param {boolean} [useCapture]
     */
    exports.addEventListener = function(type, listener, useCapture) {
        exports.addEventListenerTo(window, type, listener, useCapture);
    };

    /**
     * Adds an event listener to the specified element
     * with backwards compatible support for ie8, if detected
     * it will fallback to attachEvent method and also switch the 'message' type for 'onmessage'
     *
     * @param {Object} element to bind listener to
     * @param {string} type
     * @param {Function} listener
     * @param {boolean} [useCapture]
     */
    exports.addEventListenerTo = function(element, type, listener, useCapture) {
        try {
            if (element.addEventListener) {
                return element.addEventListener(type, listener, useCapture);
            }
            type = type == 'message' ? 'onmessage' : type;
            return element.attachEvent(type, listener);
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Wrapper around the window.removeEventListener method
     * with backwards compatible support for ie8, if detected
     * it will fallback to detachEvent method and also switch the 'message' type for 'onmessage'
     *
     * @param {string} type
     * @param {Function} listener
     */
    exports.removeEventListener = function(type, listener) {
        exports.removeEventListenerFrom(window, type, listener);
    };

    /**
     * Removes an event listener from the specified element
     * with backwards compatible support for ie8, if detected
     * it will fallback to detachEvent method and also switch the 'message' type for 'onmessage'
     *
     * @param {Object} element to remove listener from
     * @param {string} type
     * @param {Function} listener
     */
    exports.removeEventListenerFrom = function(element, type, listener) {
        try {
            if (element.removeEventListener) {
                return element.removeEventListener(type, listener);
            }
            type = type == 'message' ? 'onmessage' : type;
            return element.detachEvent(type, listener);
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Returns the ENV string to be used in URL
     * @returns {String}
     */
    exports.getEnvFromUrl = function() {
        try {
            var url = window.location.href;

            if (url.indexOf('.sandbox.') > -1) {
                return '.sandbox.dev';
            } else if (url.indexOf('.int.') > -1) {
                return '.int';
            } else if (url.indexOf('.test.') > -1) {
                return '.test';
            } else if (url.indexOf('.stage.') > -1) {
                return '.stage';
            } else {
                return '';
            }
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Parse a url into its constituent parts.
     * Uses an 'a' tag to do the heavy lifting but with some extras added in
     * such as breaking up the search string into separate query variables
     *
     * Example:
     *
     *   var url = apiUtils.parseUrl('http://example.com:3000/pathname/?search=test&foo=bar#hash');
     *
     *   url.protocol; // => "http:"
     *   url.hostname; // => "example.com"
     *   url.port;     // => "3000"
     *   url.pathname; // => "/pathname/"
     *   url.search;   // => "search=test&foo=bar"
     *   url.query     // => { "search": "test", "foo": "bar" }
     *   url.hash;     // => "#hash"
     *   url.host;     // => "example.com:3000"
     *
     * @param {String} urlString
     * @returns {{}}
     */
    exports.parseUrl = function(urlString) {
        try {
            var url = document.createElement('a');
            url.href = urlString;
            url.query = url.search ? exports.parseQueryString(url.search) : {};
            return url;
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Explodes a query string into an object
     *
     * Notes:
     *    * handles query string with or without ?
     *    * does not support php square brackets syntax i.e. ?foo[0]=bar&foo[1]=baz
     *    * duplicate parameters override with last taking precedence.
     *
     *
     * Example:
     *    var query = apiUtils.parseQueryString('?search=test&foo=bar');
     *    console.log(query); // { "search": "test", "foo": "bar" }
     *
     * @param {String} queryString
     * @returns {{}}
     */
    exports.parseQueryString = function(queryString) {
        try {
            if (queryString.charAt(0) === '?') {
                queryString = queryString.substring(1);
            }
            var query = {};
            var vars = queryString.split('&');
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                query[decodeURIComponent(pair[0])] = decodeURIComponent(
                    pair[1] || ''
                );
            }
            return query;
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Checks if the specified unix timestamp is in the future
     *
     * @param {int} timestamp - unix timestamp milliseconds
     * @returns {boolean}
     */
    exports.timestampInFuture = function(timestamp) {
        try {
            var currentTimestamp = new Date().getTime();
            return timestamp > currentTimestamp;
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * Checks if the specified unix timestamp is in the past
     *
     * @param {int} timestamp - unix timestamp milliseconds
     * @returns {boolean}
     */
    exports.timestampExpired = function(timestamp) {
        try {
            var currentTimestamp = new Date().getTime();
            return timestamp < currentTimestamp;
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    /**
     * returns a unix timestamp
     * either a specified period in the future or
     * if unspecified, defaults 1 hour in the future
     *
     * @param {int} [milliseconds] (default 1 hour) - number of seconds in the future
     * @returns {int}
     */
    exports.generateFutureTimestamp = function(milliseconds) {
        try {
            milliseconds = milliseconds ? milliseconds : HOUR_IN_MILLISECONDS;
            var d = new Date();
            d.setTime(d.getTime() + milliseconds);
            return d.getTime();
        } catch (err) {
            logger.logCaughtError(err);
        }
    };

    logger.logCaughtError = function(err) {
        if (window.console && err.message) {
            console.log(err);
        }
    };

    logger.logMessage = function(message) {
        var debugCookieName = 'ckns_debugtoken';
        var debugCookieMatch = document.cookie.match(
            new RegExp(debugCookieName + '=([^;]+)')
        );
        if (debugCookieMatch) {
            window.tokenRefeshLog = window.tokenRefeshLog || [];
            window.tokenRefeshLog.push(message);
        }
    };

    /**
     * PromisePool
     *
     * maintains a pool of promises that are 'pending' so that multiple calls return that same promise.
     *
     * The same pending promise is returned for all calls to get it from the pool until it resolves/rejects,
     * at which point on the next call, it creates a new promise
     *
     * This is useful if you want to limit the number of identical api requests in quick succession.
     *
     * Calls between different promises in the pool are performed synchronously (one after the other).
     * If a call to get a promise from the pool occurs while different promise (one with a different key) is 'pending'
     * the second call is waits for the other 'pending' promise to resolve/reject before starting.
     * (it chains the second call using .then off of the previous call)
     * The chained promises do not react to or interfere with the previous promise in any way. any data or errors are
     * passed straight through. The chained promise does not fail if the previous promise fails
     *
     * @example:
     *
     *    var promisePool = new PromisePool();
     *
     *    promisePool.set('foo', function(resolve, reject) {
     *          setTimeout(function() { resolve('foo data') }, 1000);
     *    });
     *
     *    promisePool.set('bar', function(resolve, reject) {
     *          setTimeout(function() { resolve('bar data') }, 1000);
     *    });
     *
     *    var call1 = promisePool.get('foo'); //starts a new foo promise
     *    var call2 = promisePool.get('foo'); //returns the same pending foo promise
     *    var call3 = promisePool.get('bar'); //waits until foo promise resolved/rejected then creates a new bar promise
     *    var call4 = promisePool.get('bar'); //returns the waiting foo promise
     *
     *    setTimeout(function() {
     *      var call5 = promisePool.get('foo'); //starts a new foo promise (since previous foo promise has now resolved)
     *      var call6 = promisePool.get('bar'); //returns the same bar promise from before, now pending
     *    }, 1000);
     *
     *    //RESULTS IN:
     *    //Two foo promises created, with the second foo call sharing the first
     *    //One bar promise created with the second and third bar calls sharing the first
     *
     * @constructor
     */
    function PromisePool() {
        this.promise = {};
        this.resolver = {};
    }

    /**
     * Is a promise set in the pool
     *
     * @param {*} key - used to identify the promise when getting/setting
     * @returns {boolean}
     */
    PromisePool.prototype.isSet = function(key) {
        return typeof this.resolver[key] !== 'undefined';
    };

    /**
     * Set the promise resolver
     *
     * @param {*} key - used to identify the promise when getting/setting
     * @param {function} resolver - resolver function used when creating a new promise for this key
     */
    PromisePool.prototype.set = function(key, resolver) {
        this.resolver[key] = resolver;
    };

    /**
     * Get a promise from the pool
     *
     * Logic:
     * if you call get with a given key, it returns you a promise based on the following:
     * 1) is there already a pending promise for this key, if so return it
     * 2) is there currently a pending promise from another key, if so create a new promise but chain
     *    onto the pending promise so it happens synchronously
     * 3) create a new promise for this key
     *
     * @param {*} key - used to identify the promise when getting/setting
     * @returns {Promise}
     */
    PromisePool.prototype.get = function(key) {
        var _this = this;

        if (this.promise[key]) {
            return this.promise[key];
        }

        if (this.pending) {
            this.promise[key] = this.pending.then(createPromise, createPromise);
            this.pending = this.promise[key];
            return this.promise[key];
        }

        this.promise[key] = createPromise();
        this.pending = this.promise[key];
        return this.promise[key];

        function createPromise() {
            var resolver = _this.resolver[key];
            if (typeof resolver !== 'function') {
                return exports.Promise.reject(
                    new TypeError(
                        'Promise resolver ' +
                        resolver +
                        ' is not a function for key ' +
                        key
                    )
                );
            }
            return new exports.Promise(resolver).then(
                function(success) {
                    delete _this.promise[key];
                    delete _this.pending;
                    return success;
                },
                function(error) {
                    delete _this.promise[key];
                    delete _this.pending;
                    throw error;
                }
            );
        }
    };

    exports.PromisePool = PromisePool;

    return exports;
});