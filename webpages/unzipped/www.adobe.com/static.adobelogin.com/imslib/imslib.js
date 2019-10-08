/*! imslib.js 1.13.0 40c978e-ec0f267 */

if (!Array.prototype.every) {
    Array.prototype.every = function(callbackfn, thisArg) {
        "use strict";
        var T, k;
        if (this == null) {
            throw new TypeError("this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callbackfn !== "function") {
            throw new TypeError();
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                var testResult = callbackfn.call(T, kValue, k, O);
                if (!testResult) {
                    return false;
                }
            }
            k++;
        }
        return true;
    };
}

if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this === null) {
            throw new TypeError(" this is null or not defined");
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}

if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement) {
        "use strict";
        if (this == null) {
            throw new TypeError("Array.prototype.includes called on null or undefined");
        }
        var O = Object(this);
        var len = parseInt(O.length, 10) || 0;
        if (len === 0) {
            return false;
        }
        var n = parseInt(arguments[1], 10) || 0;
        var k;
        if (n >= 0) {
            k = n;
        } else {
            k = len + n;
            if (k < 0) {
                k = 0;
            }
        }
        var currentElement;
        while (k < len) {
            currentElement = O[k];
            if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
                return true;
            }
            k++;
        }
        return false;
    };
}

if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}

if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

if (!Object.keys) {
    Object.keys = function() {
        "use strict";
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var hasDontEnumBug = !{
            toString: null
        }.propertyIsEnumerable("toString");
        var dontEnums = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
        var dontEnumsLength = dontEnums.length;
        return function(obj) {
            if (typeof obj !== "object" && (typeof obj !== "function" || obj === null)) {
                throw new TypeError("Object.keys called on non-object");
            }
            var result = [];
            var prop;
            var i;
            for (prop in obj) {
                if (hasOwnProperty.call(obj, prop)) {
                    result.push(prop);
                }
            }
            if (hasDontEnumBug) {
                for (i = 0; i < dontEnumsLength; i++) {
                    if (hasOwnProperty.call(obj, dontEnums[i])) {
                        result.push(dontEnums[i]);
                    }
                }
            }
            return result;
        };
    }();
}

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        "use strict";
        if (typeof start !== "number") {
            start = 0;
        }
        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
    };
}

(function() {
    var object = window.self;
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function InvalidCharacterError(message) {
        this.message = message;
    }
    InvalidCharacterError.prototype = new Error();
    InvalidCharacterError.prototype.name = "InvalidCharacterError";
    object.atob || (object.atob = function(input) {
        var str = String(input).replace(/[=]+$/, "");
        if (str.length % 4 === 1) {
            throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (var bc = 0, bs, buffer, idx = 0, output = ""; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = chars.indexOf(buffer);
        }
        return output;
    });
})();

(function(exports) {
    exports.adobeid = function adobeid(log) {
        "use strict";
        var adobeid = {};
        if (typeof window.adobeid === "object") {
            adobeid = window.adobeid;
        } else if (window.opener && window.opener.adobeid) {
            adobeid = window.opener.adobeid;
        } else {
            log.error("Missing window.adobeid, falling back to an empty object");
        }
        if (adobeid.redirect_uri && adobeid.redirect_uri === window.location.href) {
            delete adobeid.redirect_uri;
        }
        return adobeid;
    };
    exports.build = {
        endpoints: {
            authorize: {
                name: "authorize",
                endpoint: "https://ims-na1.adobelogin.com/ims/authorize/v1"
            },
            avatar: {
                name: "avatar/download",
                endpoint: "https://ims-na1.adobelogin.com/ims/avatar/download"
            },
            check: {
                name: "check/token",
                endpoint: "https://adobeid-na1.services.adobe.com/ims/check/${ version }/token"
            },
            check_status: {
                name: "check/status",
                endpoint: "https://adobeid-na1.services.adobe.com/ims/check/v1/status"
            },
            logout: {
                name: "logout",
                endpoint: "https://adobeid-na1.services.adobe.com/ims/logout/v1"
            },
            logout_token: {
                name: "logout_token",
                endpoint: "https://adobeid-na1.services.adobe.com/ims/logout/v1/token"
            },
            profile: {
                name: "profile",
                endpoint: "https://ims-na1.adobelogin.com/ims/profile/v1"
            },
            validate_token: {
                name: "validate_token",
                endpoint: "https://ims-na1.adobelogin.com/ims/validate_token/v1"
            },
            userinfo: {
                name: "userinfo",
                endpoint: "https://ims-na1.adobelogin.com/ims/userinfo/v1"
            },
            fg_value: {
                name: "fg_value",
                endpoint: "https://adobeid-na1.services.adobe.com/ims/fg/value/v1"
            },
            social_providers: {
                name: "social_providers",
                endpoint: "https://adobeid-na1.services.adobe.com/ims/social/v1/providers"
            },
            ijt: {
                name: "ijt",
                endpoint: "https://adobeid-na1.services.adobe.com/ims/jump/implicit/"
            }
        },
        methodTrackingEnabled: false,
        sha: "40c978e",
        version: "1.13.0"
    };
    exports.config = function(adobeid, log, mapEndpoints, utils) {
        "use strict";
        if (adobeid.debug) {
            log.toggleLogging(true);
        }

        function getClientIdsFromScriptUrl() {
            var url = utils.getThisScriptSrc();
            var clientId = /\bclient_id=([^&]+)\b/.exec(url);
            if (clientId) {
                return clientId[1].split(",");
            } else {
                return [];
            }
        }

        function getLocaleFromScriptUrl() {
            var url = utils.getThisScriptSrc();
            var locale = /\blocale=([^&]+)\b/.exec(url);
            if (locale) {
                return locale[1];
            } else {
                return "";
            }
        }

        function getDefaultClientId() {
            if (adobeid.client_id) {
                if (Array.isArray(adobeid.client_id)) {
                    return adobeid.client_id[0];
                } else {
                    return adobeid.client_id;
                }
            } else {
                log.info("Missing window.adobeid.client_id. Falling back to client_id from url. Please add client_id to window.adobeid");
                return getClientIdsFromScriptUrl()[0];
            }
        }

        function getDefaultLocale() {
            if (adobeid.locale) {
                return adobeid.locale;
            } else {
                log.info("Missing window.adobeid.locale. Falling back to locale from url. Please add locale to window.adobeid");
                return getLocaleFromScriptUrl();
            }
        }
        var allClientIds = getClientIdsFromScriptUrl();
        if (!allClientIds || allClientIds.length === 0) {
            allClientIds = adobeid.client_id;
        }
        return {
            api: mapEndpoints(allClientIds),
            client_id: getDefaultClientId(),
            locale: getDefaultLocale(),
            refreshSsoCookiesEnabled: false,
            sloEnabled: true,
            sunbreakScope: "acct_mgmt_webui",
            sunbreakScopeExpanded: "acct_mgmt_api,gnav,update_profile.address.mail_to,update_profile.dob,update_profile.email,update_profile.first_name,update_profile.industry,update_profile.job_function,update_profile.job_title,update_profile.last_name,update_profile.mrktPerm,update_profile.phoneNumber,update_profile.phonetic_name,update_profile.preferred_languages,update_profile.screen_name,update_profile.secondary_email"
        };
    };
    exports.mapEndpoints = function mapEndpointsInit(build) {
        return function mapEndpoints(clientIds) {
            "use strict";
            var urls = build.endpoints;
            if (!Array.isArray(clientIds)) {
                clientIds = [clientIds];
            }
            var clientApis = {
                version: {
                    v1: "v1"
                }
            };
            for (var apiName in urls) {
                if (!urls.hasOwnProperty(apiName)) {
                    continue;
                }
                var api = urls[apiName];
                var clientApi = {
                    name: api.name,
                    endpoint: {}
                };
                clientApis[apiName] = clientApi;
                for (var i = 0, len = clientIds.length; i < len; ++i) {
                    var clientId = clientIds[i];
                    clientApi.endpoint[clientId] = api.endpoint;
                }
            }
            return clientApis;
        };
    };
    exports.errorEvents = {
        avatarPicture: function() {
            return {
                name: "avatarPictureError",
                userMessage: "current scopes won't retrieve the user_id"
            };
        },
        jsException: function getJsException(exception, message) {
            return {
                name: "jsExceptionError",
                message: "adobeid." + message,
                exception: exception
            };
        },
        fromApiCallRedirect: function getApiCallRedirect(message) {
            return {
                name: "fromApiCallRedirectError",
                userMessage: message
            };
        },
        network: function getNetwork(url) {
            return {
                debug: {
                    url: url
                },
                name: "networkError",
                userMessage: "Network error"
            };
        },
        popupBlocked: function getPopupBlocked(url) {
            return {
                error: "popupBlocked",
                popupUrl: url
            };
        },
        rateLimit: function getRateLimit(retryAfter, isUserSignedIn) {
            return {
                name: "rate_limit",
                retryAfter: retryAfter,
                isUserSignedIn: isUserSignedIn
            };
        }
    };
    exports.eventDispatcher = function(adobeid, errorEvents, events, log, publicEvents, utils) {
        function executeAdobeIdCallback(callbackName, args) {
            try {
                utils.callIfFunction(adobeid[callbackName], adobeid, args);
            } catch (exception) {
                onError(errorEvents.jsException(exception, callbackName));
            }
        }

        function registerEvents() {
            events.addEventListener(publicEvents.types.PROFILE, function(ev) {
                executeAdobeIdCallback("onProfile", [ev.data.profile]);
            });
            events.addEventListener(publicEvents.types.ACCESS_TOKEN, function(ev) {
                executeAdobeIdCallback("onAccessToken", [ev.data.accessTokenInfo.access_token, ev.data.accessTokenInfo]);
            });
            events.addEventListener(publicEvents.types.READY, function(ev) {
                executeAdobeIdCallback("onReady", [ev.data.signInState]);
            });
            events.addEventListener(publicEvents.types.ERROR, function(ev) {
                utils.callIfFunction(adobeid.onError, adobeid, [ev.data.error]);
            });
            events.addEventListener(publicEvents.types.ACCESS_TOKEN_EXPIRED, function(ev) {
                executeAdobeIdCallback("onAccessTokenHasExpired", [ev.data.accessTokenInfo.access_token, ev.data.accessTokenInfo]);
            });
        }

        function onApiError(url) {
            onError(errorEvents.network(url));
        }

        function onError(error) {
            events.dispatchEvent(publicEvents.types.ERROR, {
                error: error
            });
            if (typeof adobeid.onError !== "function") {
                if (typeof error.userMessage === "string") {
                    log.info(error.userMessage);
                } else {
                    log.error("unhandled javascript error: " + JSON.stringify(error));
                }
                if (error.debug) {
                    log.info(JSON.stringify(error.debug));
                }
            }
        }

        function onErrorRateLimited(response, adobeIMS) {
            var error = errorEvents.rateLimit(response.retryAfter, adobeIMS.isSignedInUser());
            onError(error);
        }

        function onReady(data) {
            events.dispatchEvent(publicEvents.types.READY, data);
        }
        return {
            onApiError: onApiError,
            onError: onError,
            onErrorRateLimited: onErrorRateLimited,
            onReady: onReady,
            registerEvents: registerEvents
        };
    };
    exports.events = function(publicEvents) {
        "use strict";
        var eventCallbacks = {};

        function addEventListener(eventType, callback) {
            var callbacks = eventCallbacks[eventType] || [];
            eventCallbacks[eventType] = callbacks;
            callbacks.push(callback);
        }

        function dispatchEvent(eventType, data) {
            var callbacks = eventCallbacks[eventType];
            this.triggerEvent(eventType, data);
            if (!callbacks) {
                return;
            }
            var event = {
                type: eventType,
                data: data
            };
            for (var i = 0, len = callbacks.length; i < len; ++i) {
                if (typeof callbacks[i] === "function") {
                    callbacks[i](event);
                }
            }
        }

        function triggerEvent(eventType, data) {
            if (!window.addEventListener) {
                return;
            }
            var event = document.createEvent("Event");
            var eventName = publicEvents.domEventNamespace + "." + eventType;
            event.initEvent(eventName, true, true);
            if (data) {
                event.data = data;
            }
            document.dispatchEvent(event);
        }
        return {
            addEventListener: addEventListener,
            dispatchEvent: dispatchEvent,
            triggerEvent: triggerEvent
        };
    };
    exports.publicEvents = function getPublicEvents() {
        "use strict";
        var NAMESPACE = "imslib";
        var TYPES = {
            PROFILE: "profile",
            ACCESS_TOKEN: "accesstoken",
            ACCESS_TOKEN_EXPIRED: "accesstokenexpired",
            READY: "ready",
            ERROR: "error"
        };
        return {
            domEventNames: function listDomEventNames() {
                var publicTypes = {};
                Object.keys(TYPES).forEach(function parseTypesKeys(key) {
                    publicTypes[key] = NAMESPACE + "." + TYPES[key];
                });
                return publicTypes;
            }(),
            domEventNamespace: NAMESPACE,
            types: TYPES
        };
    };
    exports.tokenManagement = function(client, config, log) {
        function shouldAcceptToken(accessToken, clientId, scope, userId, isValid, isReAuthentication, currentUserId) {
            var isOk = true;
            var reasonsToReject = [{
                shouldReject: isValid === false,
                shouldLogToErrorConsole: false,
                message: "access_token is invalid."
            }, {
                shouldReject: isValid === true && userId && currentUserId && userId !== currentUserId,
                shouldLogToErrorConsole: false,
                message: "access_token was from another userId (isReAuthentication=#0).".replace("#0", isReAuthentication)
            }, {
                shouldReject: isValid === true && !client.isKnownClientID(clientId),
                shouldLogToErrorConsole: true,
                message: "the #0 client_id associated with the access token is not for a known client_id (#1).".replace("#0", clientId).replace("#1", Object.keys ? Object.keys(config.api.authorize.endpoint).join(",") : client.getClientID())
            }, {
                shouldReject: isValid === true && !client.matchesRequiredScope(scope),
                shouldLogToErrorConsole: true,
                message: "the (#0) scope associated with the access token doesn't match the required scope (#1).".replace("#0", scope).replace("#1", client.getScope())
            }, {
                shouldReject: !accessToken,
                shouldLogToErrorConsole: true,
                message: "no access token."
            }];
            reasonsToReject.forEach(function(reasonToReject) {
                if (reasonToReject.shouldReject) {
                    isOk = false;
                    (reasonToReject.shouldLogToErrorConsole ? log.error : log.info)("shouldAcceptToken: " + reasonToReject.message);
                }
            });
            return isOk;
        }
        return {
            shouldAcceptToken: shouldAcceptToken
        };
    };
    exports.adobeIMS = function(adobeid, analytics, autoRefreshToken, client, config, errorEvents, events, eventDispatcher, http, imsApis, location, log, profileStorage, publicEvents, storage, token, tokenManagement, tokenStorage, utils, vendors) {
        "use strict";

        function isFastEventsEnabled() {
            return Boolean(adobeid.optimizations && adobeid.optimizations.fastEvents);
        }
        var _access_token_storage_key = "adobeid_ims_access_token";
        var _access_token_storage_key_separator = "/";
        var _from_ims = "from_ims";
        var _from_ims_hash = _from_ims + "=true";
        var _context_from_redirect_hash_parameter_name = "rctx";
        var _redirect_page_in_modal_mode = adobeid.popupPageName || "redirectims.html";
        var _ims_modal_window = "_blank";
        var _modal_window_default_size = {
            sign_in: {
                width: 500,
                height: 630
            },
            sign_up: {
                width: 500,
                height: 800
            },
            sign_out: {
                width: 320,
                height: 240
            },
            jump: {
                width: 500,
                height: 800
            },
            any: {
                width: 500,
                height: 630
            }
        };
        var popupWindowHandle = null;

        function AdobeIMS() {
            var self = this;
            this.adobeid = adobeid;
            this._accessTokensInfos = {};
            this._profile = null;
            this._is_already_attached_to_ui = false;
            this._last_ui_update = {
                _any_update_so_far: false,
                _accessTokensInfos: {},
                _profile: null,
                update: function() {
                    this._any_update_so_far = true;
                    this._accessTokensInfos = utils.cloneObject(self._accessTokensInfos);
                    this._profile = utils.cloneObject(self._profile);
                },
                areThereUIUpdatesToPerformForAccessTokens: function() {
                    if (!this._any_update_so_far) {
                        return true;
                    }
                    return !utils.equals(this._accessTokensInfos, self._accessTokensInfos);
                },
                areThereUIUpdatesToPerformForProfile: function() {
                    if (!this._any_update_so_far) {
                        return true;
                    }
                    return !utils.equals(this._profile, self._profile);
                },
                areThereUIUpdatesToPerform: function() {
                    return this.areThereUIUpdatesToPerformForProfile() || this.areThereUIUpdatesToPerformForAccessTokens();
                }
            };
        }
        if (window.adobeIMS) {
            log.error("adobeIMS already exists. Have you loaded the file twice?");
            return null;
        }
        var profileIdKey = adobeid.openidCompatible ? "sub" : "userId";

        function isAccountDisabledResponse(response) {
            return Boolean(response && response.error === "ride_AdobeID_acct_disabled");
        }

        function isRateLimitedResponse(response) {
            return response.error === imsApis.Errors.RATE_LIMITED;
        }

        function isInvalidTokenResponse(response) {
            if (!response) {
                return true;
            }
            if (response.error || response.error_flag || response.error_description) {
                return true;
            }
            return false;
        }

        function onAccountDisabled(adobeIMS) {
            adobeIMS._invalidateTokens(Object.keys(adobeIMS._accessTokensInfos), function() {
                adobeIMS._clearCredentials({
                    updateUI: true
                });
                adobeIMS.signIn();
            });
        }

        function fetchProfile(adobeIMS, bearerToken, doneFn) {
            if (arguments.length < 3) {
                doneFn = bearerToken;
                bearerToken = adobeIMS.getAccessToken();
            }
            imsApis.getProfile(bearerToken, function successCallback(profile) {
                adobeIMS.setProfile(profile);
                utils.callIfFunction(doneFn, adobeIMS);
            }, function errorCallback(response) {
                log.error("Failed to retrieve the profile ", response);
                if (isRateLimitedResponse(response)) {
                    eventDispatcher.onErrorRateLimited(response, adobeIMS);
                    utils.callIfFunction(doneFn, adobeIMS);
                } else if (isAccountDisabledResponse(response)) {
                    onAccountDisabled(adobeIMS);
                } else if (isInvalidTokenResponse(response)) {
                    adobeIMS._clearCredentials({
                        updateUI: true
                    });
                    utils.callIfFunction(doneFn, adobeIMS);
                } else {
                    utils.callIfFunction(doneFn, adobeIMS);
                }
            });
        }

        function openPopup(url, params) {
            if (popupWindowHandle) {
                if (!popupWindowHandle.closed) {
                    popupWindowHandle.close();
                }
                popupWindowHandle = null;
            }
            var paramArray = [];
            Object.keys(params || {}).forEach(function(paramName) {
                var paramValue = params[paramName];
                if (paramValue === true) {
                    paramValue = "yes";
                } else if (paramValue === false) {
                    paramValue = "no";
                } else {
                    paramValue = String(paramValue);
                }
                paramArray.push(paramName + "=" + paramValue);
            });
            popupWindowHandle = utils.openPopup(url, _ims_modal_window, paramArray.join(","));
            if (popupWindowHandle && typeof popupWindowHandle.focus === "function") {
                popupWindowHandle.focus();
            }
            return popupWindowHandle;
        }
        var userActionInfo = {
            isRequired: false,
            url: null
        };

        function setUserActionInfo(isUserActionRequired, userActionUrl) {
            userActionInfo.isRequired = isUserActionRequired;
            userActionInfo.url = userActionUrl;
        }

        function getUserActionInfo() {
            return userActionInfo;
        }
        var state;
        var releaseFlags = null;
        var floodgateResponse = null;
        var adobeIMS = {
            DomEvents: publicEvents.domEventNames,
            Events: publicEvents.types,
            IMSAPIs: {}
        };

        function getUrlForApiCall(api, version, params) {
            if (arguments.length === 2) {
                params = arguments[1];
                version = null;
            }
            return imsApis.getApiUrlWithQuery(api, params, version);
        }

        function getUserProfile() {
            return this._profile;
        }

        function getUserPictureURL() {
            if (!this._profile) {
                return "";
            }
            if (this._profile[profileIdKey]) {
                return imsApis.getAvatarUrl(this._profile[profileIdKey]);
            } else {
                eventDispatcher.onError(errorEvents.avatarPicture());
                return "";
            }
        }

        function getAccessTokenInfo(isReAuthentication, client_id, scope) {
            var storageKey = this.getAccessTokenSessionStorageKey(isReAuthentication, client_id, scope);
            var tokenInfo = this._accessTokensInfos[storageKey];
            if (!tokenInfo) {
                return null;
            }
            if (tokenStorage.get(storageKey, tokenInfo.isReAuthentication)) {
                return tokenInfo;
            } else {
                this._clearCredentials({
                    access_token: tokenInfo.access_token
                });
                return null;
            }
        }

        function getAccessToken(isReAuthentication, client_id, scope) {
            var info = this.getAccessTokenInfo(isReAuthentication, client_id, scope);
            return info ? info.access_token : null;
        }

        function getAccessTokenSessionStorageKey(isReAuthentication, client_id, scope) {
            return [_access_token_storage_key, client_id || this.getClientID(), Boolean(isReAuthentication), scope || this.getScope()].join(_access_token_storage_key_separator);
        }

        function getKeyForAccessToken(access_token) {
            for (var key in this._accessTokensInfos) {
                if (access_token === this._accessTokensInfos[key].access_token) {
                    return key;
                }
            }
            log.assert(false, "unknown access_token for key: " + key);
            return null;
        }

        function _isAccessTokenInfoUsable(info) {
            return info && typeof info.access_token === "string" && typeof info.client_id === "string" && this.isKnownClientID(info.client_id) && typeof info.scope === "string" && typeof info.isReAuthentication === "boolean" && typeof info.expires_in === "number" && typeof info.expiresAtMilliseconds === "number" && Date.now() < info.expiresAtMilliseconds;
        }

        function loadFromStorage() {
            var self = this;
            this._accessTokensInfos = {};

            function loadTokens(isReauth) {
                tokenStorage.keys(isReauth).forEach(function parseStoredToken(key) {
                    if (!key.startsWith(_access_token_storage_key)) {
                        return;
                    }
                    try {
                        var accessTokenInfo = tokenStorage.get(key, isReauth);
                        if (!self.isKnownClientID(accessTokenInfo.client_id)) {
                            return;
                        }
                        if (self._isAccessTokenInfoUsable(accessTokenInfo)) {
                            self._accessTokensInfos[key] = accessTokenInfo;
                        } else {
                            log.info("unusable access token info: " + storage.getItem(key));
                            tokenStorage.remove(key, isReauth);
                        }
                    } catch (e) {
                        tokenStorage.remove(key, isReauth);
                    }
                });
            }
            loadTokens(false);
            loadTokens(true);
            this._profile = profileStorage.get();
        }

        function hasTokenButItHasExpired(isReAuthentication, client_id, scope) {
            var info = this.getAccessTokenInfo(isReAuthentication, client_id, scope);
            return info && Date.now() > info.expiresAtMilliseconds ? info : undefined;
        }

        function isSignedInUser(isReAuthentication, client_id, scope) {
            if (this.adobeid.standalone) {
                return;
            }
            var info = this.getAccessTokenInfo(isReAuthentication, client_id, scope);
            return info && Date.now() < info.expiresAtMilliseconds ? info : undefined;
        }

        function signIn(api_parameters, contextToBePassedOnRedirect) {
            this.contextToBePassedOnRedirect = contextToBePassedOnRedirect;
            var customApiParameters = utils.merge(api_parameters);
            customApiParameters.redirect_uri = this._getRedirectUri(config.api.authorize, customApiParameters);
            if (this.version) {
                customApiParameters.jslibver = this.version;
            }
            var authorizeUrl = imsApis.getAuthorizeUrl(customApiParameters);
            if (this.isModal()) {
                this._callCallbacksToUpdateUI();
            }
            this._openWindow(authorizeUrl, customApiParameters.idp_flow === "create_account" ? _modal_window_default_size.sign_up : _modal_window_default_size.sign_in);
        }

        function signInWithSocialProvider(providerName, parameters) {
            if (!providerName) {
                return;
            }
            var customApiParameters = utils.merge(parameters, {
                idp_flow: "social.deep_link.web",
                provider_id: providerName
            });
            customApiParameters.redirect_uri = this._getRedirectUri(config.api.authorize, customApiParameters);
            var authorizeUrl = imsApis.getAuthorizeUrl(customApiParameters);
            this._openWindow(authorizeUrl);
        }

        function reAuthenticate(api_parameters, contextToBePassedOnRedirect) {
            var customApiParameters = utils.merge({
                reauth: "check",
                idp_flow: this._profile && this._profile.account_type === "type2" ? "login_t2" : undefined,
                puser: this._profile && this._profile.email ? this._profile.email : undefined,
                eu: this._profile && this._profile.email ? "true" : undefined
            }, api_parameters);
            this.signIn(customApiParameters, contextToBePassedOnRedirect);
        }

        function isReAuthentication(api_parameters) {
            return api_parameters && api_parameters.reauth;
        }

        function updateRedirectUriForReAuthentication(redirect_uri, api_parameters) {
            if (!(typeof redirect_uri === "string" && this.isReAuthentication(api_parameters))) {
                return redirect_uri;
            }
            if (!redirect_uri.includes("reauth=")) {
                redirect_uri = redirect_uri + "&reauth=" + api_parameters.reauth;
            }
            return redirect_uri;
        }

        function getContextFromRedirectForAccessToken(access_token) {
            if (this.contextPassedFromRedirect && this.contextPassedFromRedirect.access_token === access_token) {
                var context = this.contextPassedFromRedirect.context;
                this.contextPassedFromRedirect = null;
                return context;
            } else {
                return null;
            }
        }

        function signUp(api_parameters, contextToBePassedOnRedirect) {
            if (this.isModal()) {
                this._callCallbacksToUpdateUI();
            }
            this.signIn(utils.merge({
                idp_flow: "create_account"
            }, api_parameters), contextToBePassedOnRedirect);
        }

        function _invalidateTokens(accessTokenKeys, callback) {
            var self = this;
            var countOfTokensToInvalidate = accessTokenKeys.length;
            if (countOfTokensToInvalidate) {
                accessTokenKeys.forEach(function(accessTokenKey) {
                    imsApis.logoutToken(self._accessTokensInfos[accessTokenKey].access_token, function() {
                        --countOfTokensToInvalidate;
                        if (countOfTokensToInvalidate === 0) {
                            utils.callIfFunction(callback);
                        }
                    });
                });
            } else {
                utils.callIfFunction(callback);
            }
        }

        function signOut(api_parameters) {
            var self = this;

            function invalidateAccessTokenWithRedirect(accessTokenInfo) {
                if (!accessTokenInfo) {
                    self._clearCredentials({
                        updateUI: true
                    });
                    return;
                }
                var customApiParameters = utils.merge(imsApis.getCustomApiParameters(config.api.logout), api_parameters);
                if (self.isModal() && customApiParameters.redirect_uri) {
                    self.switchToRedirectMode();
                }
                var logoutUrl = imsApis.getLogoutUrl(utils.merge({
                    access_token: accessTokenInfo.access_token,
                    redirect_uri: self._getRedirectUri(self.config.api.logout, api_parameters)
                }, customApiParameters));
                self._clearCredentials({
                    updateUI: true
                });
                self._openWindow(logoutUrl, _modal_window_default_size.sign_out);
            }
            var accessTokenKeys = Object.keys(this._accessTokensInfos);
            if (accessTokenKeys.length) {
                var lastAccessTokenInfo = this._accessTokensInfos[accessTokenKeys.pop()];
                this._invalidateTokens(accessTokenKeys, function() {
                    invalidateAccessTokenWithRedirect(lastAccessTokenInfo);
                });
            } else {
                self._clearCredentials({
                    updateUI: true
                });
            }
        }

        function switchToRedirectMode() {
            this.adobeid.uses_modal_mode = false;
            this.adobeid.uses_redirect_mode = true;
        }

        function switchToModalMode() {
            this.adobeid.uses_modal_mode = true;
            this.adobeid.uses_redirect_mode = false;
        }

        function _clearCredentials(params) {
            var key;
            if (params && params.access_token) {
                key = this.getKeyForAccessToken(params.access_token);
                tokenStorage.remove(key, false);
                tokenStorage.remove(key, true);
                delete this._accessTokensInfos[key];
            } else {
                for (key in this._accessTokensInfos) {
                    if (key.startsWith(_access_token_storage_key)) {
                        var tokenInfo = this._accessTokensInfos[key];
                        tokenStorage.remove(key, tokenInfo.isReAuthentication);
                    }
                }
                this._accessTokensInfos = {};
                profileStorage.clear();
                this._profile = null;
                this._clearTimerTestSSOCookieWillExpire();
            }
            if (params && params.updateUI === true) {
                this._callCallbacksToUpdateUI(params);
            }
        }

        function _callCallbacksToUpdateUI(params) {
            if (!this._last_ui_update.areThereUIUpdatesToPerform()) {
                return;
            }
            var cloned_last_ui_update = utils.cloneObject(this._last_ui_update);
            this._last_ui_update.update();
            if (cloned_last_ui_update.areThereUIUpdatesToPerformForProfile()) {
                events.dispatchEvent(publicEvents.types.PROFILE, {
                    profile: this._profile
                });
            }
            if (cloned_last_ui_update.areThereUIUpdatesToPerformForAccessTokens()) {
                if (params && params.access_token) {
                    var tokenInfo = this._accessTokensInfos[this.getKeyForAccessToken(params.access_token)];
                    events.dispatchEvent(publicEvents.types.ACCESS_TOKEN, {
                        accessTokenInfo: tokenInfo
                    });
                } else {
                    for (var key in this._accessTokensInfos) {
                        if (utils.equals(this._accessTokensInfos[key], cloned_last_ui_update._accessTokensInfos[key])) {
                            continue;
                        }
                        events.dispatchEvent(publicEvents.types.ACCESS_TOKEN, {
                            accessTokenInfo: this._accessTokensInfos[key]
                        });
                    }
                }
            }
        }

        function _onReady() {
            if (this.onReadyAlreadyCalled) {
                return;
            }
            this.onReadyAlreadyCalled = true;
            this._callCallbacksToUpdateUI();
            var signInState = {};
            signInState.userActionInfo = getUserActionInfo();
            if (signInState.userActionInfo.isRequired) {
                signInState.isUserSignedIn = false;
            } else {
                signInState.isUserSignedIn = Boolean(this.isSignedInUser());
            }
            eventDispatcher.onReady({
                signInState: signInState
            });
        }

        function isReady() {
            return !!this.onReadyAlreadyCalled;
        }

        function _initialize() {
            var self = this;
            eventDispatcher.registerEvents();
            if (self.adobeid.standalone && self.adobeid.standalone.token) {
                _initializeStandalone.call(this);
            } else if (self.adobeid.ijt) {
                _initializeWithIjt.call(this);
            } else {
                _initializeWithSso.call(this);
            }
        }

        function _initializeStandalone() {
            var self = this;
            var tokenInfo = {
                access_token: self.adobeid.standalone.token,
                client_id: self.getClientID()
            };
            imsApis.validateToken(tokenInfo, function validStandaloneToken(response) {
                var validatedTokenInfo = response.token;
                if (self.shouldAcceptTheToken(validatedTokenInfo)) {
                    self._setAccessTokenAndGetProfile(tokenInfo.access_token, validatedTokenInfo.isReauthentication, validatedTokenInfo.client_id, validatedTokenInfo.scope, validatedTokenInfo.expires_in, null, function() {
                        self._onReady();
                    });
                }
            }, function invalidStandaloneToken(error) {
                events.dispatchEvent(publicEvents.types.ACCESS_TOKEN_EXPIRED, {
                    accessTokenInfo: tokenInfo
                });
            });
        }

        function setStandaloneToken(newToken) {
            this.adobeid.standalone.token = newToken;
            _initializeStandalone.call(this);
        }

        function _initializeWithSso() {
            var self = this;
            var ensureMandatorySignIn = function ensureMandatorySignIn() {
                if (self.isMandatorySignIn() && !self.isSignedInUser()) {
                    self.signIn();
                }
            };
            var doSSO = function doSSO() {
                var tokens = utils.cloneObject(self._accessTokensInfos || {});
                var callback = function callback() {
                    ensureMandatorySignIn();
                    self._callCallbacksToUpdateUI();
                    if (isFastEventsEnabled() && !self.isSignedInUser()) {
                        for (var key in tokens) {
                            if (!tokens.hasOwnProperty(key) || !tokens[key]) {
                                continue;
                            }
                            events.dispatchEvent(publicEvents.types.ACCESS_TOKEN_EXPIRED, {
                                accessTokenInfo: tokens[key]
                            });
                        }
                    }
                    self._onReady();
                };
                if (self.isSingleLogOutEnabled() || !self.isSignedInUser()) {
                    self.signInBasedOnSingleSignOnSSO(function onSSOError(error) {
                        if (error === "no_cors" && self.isSignedInUser()) {
                            fetchProfile(self, callback);
                        } else {
                            utils.callIfFunction(callback, self);
                        }
                    });
                } else {
                    var accessToken = self.getAccessToken();
                    delete tokens[self.getKeyForAccessToken(accessToken)];
                    self.testAccessTokenIsStillValid(accessToken, function() {
                        if (self.getAccessToken() && !self.getUserProfile()) {
                            fetchProfile(self, callback);
                        } else {
                            utils.callIfFunction(callback, self);
                        }
                    });
                }
            };
            if (isFastEventsEnabled()) {
                this.loadFromStorage();
                if (!utils.isEmptyObject(this._profile)) {
                    this._callCallbacksToUpdateUI();
                }
            }
            this._signInWhenRedirectedBackFromIMS(function onRedirectFromSignIn() {
                if (self._isFinalRedirectPageInModalMode()) {
                    if (window.opener) {
                        window.opener.adobeIMS._importDataFromModalWindow(self);
                        utils.closeWindow();
                    }
                } else {
                    self.loadFromStorage();
                    if (self.hasJustReturnedFromAuthorize) {
                        if (!this.isSignedInUser()) {
                            self.signInBasedOnSingleSignOnSSO(function onSSOSignIn() {
                                self._testAccessTokensAreStillValid();
                            });
                        } else {
                            self._testAccessTokensAreStillValid();
                        }
                    } else {
                        if (self.isSignedInUser(true)) {
                            self.testAccessTokenIsStillValid(self.getAccessToken(true), doSSO);
                        } else {
                            doSSO();
                        }
                    }
                }
            });
        }

        function _signInWhenRedirectedBackFromIMS(fnContinuation) {
            var self = this;
            var currentHash = utils.getHashFromURL().substring(1);
            currentHash = currentHash.replace("%23access_token", "#access_token").replace("%23expires_in", "#expires_in").replace("%23error", "#error").replace("?error", "#error").replace("#", "&");
            var imsResponseAsMap = utils.getQueryParamsAsMap(currentHash);
            var access_token = imsResponseAsMap.access_token;
            var apiName = imsResponseAsMap.api;
            if (apiName === config.api.authorize.name) {
                log.assert(access_token, "the authorize api must return an access_token");
            }
            var isReAuthentication = Boolean(imsResponseAsMap.reauth);
            var client_id = imsResponseAsMap.client_id || this.getClientID();
            var scope = imsResponseAsMap.scope || this.getScope();
            var expires_in = imsResponseAsMap.expires_in;
            var error = imsResponseAsMap.error;
            var contextAsString = imsResponseAsMap[_context_from_redirect_hash_parameter_name];
            try {
                state = JSON.parse(imsResponseAsMap.state);
            } catch (e) {
                state = imsResponseAsMap.state;
            }
            this.contextPassedFromRedirect = contextAsString ? {
                context: JSON.parse(contextAsString),
                access_token: access_token
            } : null;
            var isActionNeeded = access_token && expires_in && token.isFromIms(access_token) || imsResponseAsMap[_from_ims] === "true" && apiName === config.api.logout.name || imsResponseAsMap[_from_ims] === "true" && error;
            if (!isActionNeeded) {
                fnContinuation.call(this);
                return;
            }
            location.setHash(imsResponseAsMap.old_hash || "");
            if (access_token) {
                this.hasJustReturnedFromAuthorize = true;
                this._setAccessTokenAndGetProfile(access_token, isReAuthentication, client_id, scope, expires_in, null, function() {
                    self.validateSSOCookieLifetime(access_token, fnContinuation);
                });
            } else {
                this._accessTokensInfos = {};
                this._profile = null;
                if (error) {
                    eventDispatcher.onError(errorEvents.fromApiCallRedirect(error));
                }
                fnContinuation.call(this);
            }
        }

        function getState() {
            return state || null;
        }

        function _setAccessTokenAndGetProfile(access_token, isReAuthentication, client_id, scope, expires_in, freshProfile, fnContinuation) {
            var self = this;
            expires_in = Number(expires_in);
            var user_id = freshProfile && freshProfile[profileIdKey];
            this._removeAccessTokensIfDifferentUserId(user_id);
            if (utils.isEmptyObject(this._accessTokensInfos)) {
                this.loadFromStorage();
            }
            if (!this.shouldAcceptTheToken(access_token, client_id, scope, user_id, true, isReAuthentication)) {
                utils.callIfFunction(fnContinuation, self);
                return;
            }
            var key = this.getAccessTokenSessionStorageKey(isReAuthentication, client_id, scope);
            var now = Date.now();
            this._accessTokensInfos[key] = {
                access_token: access_token,
                client_id: client_id,
                user_id: user_id,
                scope: scope,
                expires_in: expires_in,
                createdAtMilliseconds: now,
                expiresAtMilliseconds: now + expires_in,
                isReAuthentication: isReAuthentication
            };
            tokenStorage.set(key, this._accessTokensInfos[key], isReAuthentication);
            if (this.onReadyAlreadyCalled) {
                this._callCallbacksToUpdateUI();
            }
            if (freshProfile) {
                utils.callIfFunction(fnContinuation, self);
            } else {
                fetchProfile(self, access_token, fnContinuation);
            }
        }

        function setProfile(profile, silent) {
            if (!profile || profile.error_flag) {
                return;
            }
            this._profile = profile;
            if (profile) {
                profileStorage.set(this._profile);
                this._removeAccessTokensIfDifferentUserId(profile[profileIdKey]);
            } else {
                profileStorage.clear();
            }
            if (!silent && this.onReadyAlreadyCalled) {
                this._callCallbacksToUpdateUI();
            }
        }

        function _removeAccessTokensIfDifferentUserId(user_id) {
            if (!user_id) {
                return;
            }
            for (var key in this._accessTokensInfos) {
                var info = this._accessTokensInfos[key];
                if (info.user_id && info.user_id !== user_id) {
                    this._clearCredentials({
                        access_token: info.access_token,
                        updateUI: false
                    });
                    log.info("Removed token because of different user_id (isReAuthentication=" + info.isReAuthentication + ")");
                }
            }
        }

        function _signInBasedOnStoredCredentials(fnContinuation) {
            this.loadFromStorage();
            if (utils.isEmptyObject(this._accessTokensInfos)) {
                this._clearCredentials();
                utils.callIfFunction(fnContinuation, this);
            } else {
                if (this.hasJustReturnedFromAuthorize) {
                    this.hasJustReturnedFromAuthorize = false;
                    utils.callIfFunction(fnContinuation);
                } else {
                    this.testSingleLogOutSLO(fnContinuation);
                }
            }
        }

        function _handleTokenError(fnContinuation) {
            var self = this;
            return function(response) {
                response = response || {};
                if (isRateLimitedResponse(response)) {
                    eventDispatcher.onErrorRateLimited(response, self);
                    utils.callIfFunction(fnContinuation, self);
                } else if (response.jump) {
                    log.info("jumping to " + response.jump);
                    setUserActionInfo(true, response.jump);
                    if (!self.isModal()) {
                        self._openWindow(response.jump, _modal_window_default_size.jump);
                    } else {
                        self._clearCredentials();
                    }
                } else if (response.error === "ride_AdobeID_acct_evs") {
                    self._clearCredentials();
                    setUserActionInfo(true, null);
                    if (!self.isModal()) {
                        self.signIn();
                    }
                } else if (response.error === "ride_AdobeID_acct_disabled") {
                    self._invalidateTokens(Object.keys(self._accessTokensInfos), function() {
                        self._clearCredentials({
                            updateUI: true
                        });
                        setUserActionInfo(true, null);
                        if (!self.isModal()) {
                            self.signIn();
                        }
                    });
                } else if (response.error === "no_cors") {
                    utils.callIfFunction(fnContinuation, self, ["no_cors"]);
                } else if (response.error === imsApis.Errors.ABORTED) {
                    self._last_ui_update._any_update_so_far = true;
                    eventDispatcher.onError(imsApis.Errors.ABORTED);
                    utils.callIfFunction(fnContinuation, self, [imsApis.Errors.ABORTED]);
                } else {
                    self._clearCredentials({
                        updateUI: true
                    });
                    self.hasJustSingleLoggedOutSLO = true;
                    utils.callIfFunction(fnContinuation, self);
                }
            };
        }

        function signInBasedOnSingleSignOnSSO(fnContinuation) {
            this.acquireAccessToken(fnContinuation, _handleTokenError.call(this, fnContinuation));
        }

        function _initializeWithIjt() {
            var context = this;
            var params = {
                ijt: this.adobeid.ijt,
                redirect_uri: this._getRedirectUri(config.api.ijt),
                client_id: this.getClientID(config.api.ijt)
            };
            imsApis.exchangeIjt(params, function(response) {
                context._setAccessTokenAndGetProfile(response.access_token, false, params.client_id, context.getScope(), response.expires_in, "", function() {
                    context._onReady();
                });
            }, _handleTokenError.call(context, function() {
                _initializeWithSso.call(context);
            }));
        }

        function acquireAccessToken(successFn, errorFn) {
            var context = this;
            var params = {
                redirect_uri: this._getRedirectUri(config.api.check),
                client_id: this.getClientID(config.api.check),
                scope: this.getScope(config.api.check)
            };
            autoRefreshToken.init(context);
            imsApis.checkToken(params, function(response) {
                var profileFromSSO = utils.cloneObject(response);
                delete profileFromSSO.access_token;
                delete profileFromSSO.expires_in;
                delete profileFromSSO.token_type;
                context.setProfile(profileFromSSO);
                context._setAccessTokenAndGetProfile(response.access_token, false, params.client_id, params.scope, response.expires_in, profileFromSSO, successFn);
            }, errorFn);
        }

        function testSingleLogOutSLO(fnContinuation) {
            if (!this.isSingleLogOutEnabled()) {
                utils.callIfFunction(fnContinuation, this);
                return;
            }
            var self = this;
            imsApis.checkStatus(function(response) {
                if (response.sso === false && response.remember_me === false) {
                    self._clearCredentials({
                        updateUI: true
                    });
                    self.hasJustSingleLoggedOutSLO = true;
                    utils.callIfFunction(fnContinuation, self);
                } else {
                    self.signInBasedOnSingleSignOnSSO(fnContinuation);
                }
            });
        }

        function validateSSOCookieLifetime(access_token, fnContinuation) {
            utils.callIfFunction(fnContinuation, this);
        }

        function _clearTimerTestSSOCookieWillExpire() {
            if (this._timerTestSSOCookieWillExpire) {
                clearInterval(this._timerTestSSOCookieWillExpire);
                this._timerTestSSOCookieWillExpire = null;
            }
        }

        function shouldAcceptTheToken(access_token, client_id, scope, user_id, isValid, isReAuthentication) {
            return tokenManagement.shouldAcceptToken(access_token, client_id, scope, user_id, isValid, isReAuthentication, this._profile && this._profile[profileIdKey]);
        }

        function testAccessTokenIsStillValid(access_token, fnContinuation) {
            var self = this;
            var info = this._accessTokensInfos[this.getKeyForAccessToken(access_token)];
            log.assert(info, "we need token information to validate it");
            var handleSuccessResponse = function(response) {
                if (response.token && self.shouldAcceptTheToken(access_token, response.token.client_id, response.token.scope, response.token.user_id, response.valid, info.isReAuthentication)) {
                    fnContinuation();
                } else {
                    handleErrorResponse(response);
                }
            };
            var handleErrorResponse = function(response) {
                log.info("validate/token: access_token is invalid. removing.");
                self._clearCredentials({
                    updateUI: self.onReadyAlreadyCalled,
                    access_token: access_token
                });
                try {
                    if (response.token && self.isKnownClientID(response.token.client_id) && self.matchesTheRequiredScope(response.token.scope)) {
                        utils.callIfFunction(self.adobeid.onAccessTokenHasExpired, self.adobeid, [access_token, info]);
                    }
                } catch (e) {
                    eventDispatcher.onError(errorEvents.jsException(e, "onAccessTokenHasExpired"));
                }
                if (info.isReAuthentication) {
                    fnContinuation();
                } else {
                    self.signInBasedOnSingleSignOnSSO(function() {
                        if (!self.isSignedInUser() && self.isMandatorySignIn()) {
                            self.signIn();
                        }
                        fnContinuation();
                    });
                }
            };
            if (info && this.isKnownClientID(info.client_id)) {
                imsApis.validateToken(info, handleSuccessResponse, handleErrorResponse);
            } else {
                handleErrorResponse();
            }
        }

        function _testAccessTokensAreStillValid() {
            var countOfTokensToValidate = 0;
            var key;
            for (key in this._accessTokensInfos) {
                ++countOfTokensToValidate;
            }
            var self = this;
            var doneFn = function() {
                --countOfTokensToValidate;
                if (countOfTokensToValidate === 0) {
                    self._onReady();
                }
            };
            if (countOfTokensToValidate > 0) {
                for (key in this._accessTokensInfos) {
                    self.testAccessTokenIsStillValid(this._accessTokensInfos[key].access_token, doneFn);
                }
            } else {
                self._onReady();
            }
        }

        function _importDataFromModalWindow(adobeIMSInModalWindow) {
            if (!utils.isEmptyObject(adobeIMSInModalWindow._accessTokensInfos)) {
                this.contextPassedFromRedirect = utils.cloneObject(adobeIMSInModalWindow.contextPassedFromRedirect);
                state = adobeIMSInModalWindow.getState();
                if (!utils.equals(adobeIMSInModalWindow._profile, this._profile) && !utils.isEmptyObject(adobeIMSInModalWindow._profile)) {
                    this.setProfile(utils.cloneObject(adobeIMSInModalWindow._profile), true);
                }
                for (var key in adobeIMSInModalWindow._accessTokensInfos) {
                    if (!utils.equals(adobeIMSInModalWindow._accessTokensInfos[key], this._accessTokensInfos[key])) {
                        var tokenInfo = utils.cloneObject(adobeIMSInModalWindow._accessTokensInfos[key]);
                        this._accessTokensInfos[key] = tokenInfo;
                        tokenStorage.set(key, tokenInfo, tokenInfo.isReAuthentication);
                        this.validateSSOCookieLifetime(this._accessTokensInfos[key].access_token);
                    }
                }
                this._callCallbacksToUpdateUI();
                if (adobeIMSInModalWindow.isSignedInUser(true) && !this.isSignedInUser(false)) {
                    this.signInBasedOnSingleSignOnSSO();
                }
            } else {
                this._clearCredentials({
                    updateUI: true
                });
            }
        }

        function _openWindow(url, params) {
            if (this.isModal()) {
                var width = Math.min(params && params.width || _modal_window_default_size.any.width, screen.availWidth);
                var height = Math.min(params && params.height || _modal_window_default_size.any.height, screen.availHeight);
                var left = parseInt((screen.availLeft ? screen.availLeft : 0) + Math.max(0, screen.availWidth - width) / 2);
                var top = parseInt((screen.availTop ? screen.availTop : 0) + Math.max(0, screen.availHeight - height) / 2);
                var popupWindowHandle = openPopup(url, {
                    width: width,
                    height: height,
                    left: left,
                    top: top,
                    toolbar: false,
                    menubar: false,
                    scrollbars: true,
                    resizable: true
                });
                if (!popupWindowHandle) {
                    eventDispatcher.onError(errorEvents.popupBlocked(url));
                }
            } else {
                location.setHref(url, !this.isMandatorySignIn());
            }
            this.contextToBePassedOnRedirect = null;
        }

        function isModal() {
            if (this._isFinalRedirectPageInModalMode()) {
                return true;
            }
            if (this.adobeid.uses_modal_mode === true && this.adobeid.uses_redirect_mode === true) {
                log.error("redirect mode and modal mode both enabled");
                return true;
            }
            return typeof this.adobeid.uses_modal_mode === "boolean" ? this.adobeid.uses_modal_mode : this.adobeid.uses_redirect_mode === false;
        }

        function _isFinalRedirectPageInModalMode() {
            return location.getHref().includes(_redirect_page_in_modal_mode) && window.opener && window.opener !== window;
        }

        function getReleaseFlags(doneFn, errorFn) {
            if (floodgateResponse !== null) {
                utils.callIfFunction(doneFn, null, [floodgateResponse, releaseFlags]);
                return;
            }
            imsApis.getReleaseFlags(this.getAccessToken(), function(floodgate, flags) {
                releaseFlags = flags || null;
                floodgateResponse = floodgate || null;
                utils.callIfFunction(doneFn, null, [floodgate, flags]);
            }, errorFn);
        }

        function isReleaseFlagActive(flag) {
            if (!releaseFlags) {
                return false;
            }
            return releaseFlags[flag] === "1";
        }

        function isMandatorySignIn() {
            if (this.adobeid.is_mandatory_sign_in === true && this.isModal()) {
                log.error("is_mandatory_sign_in can be enabled only in redirect mode");
                return false;
            }
            return typeof this.adobeid.is_mandatory_sign_in === "boolean" ? this.adobeid.is_mandatory_sign_in : false;
        }

        function isSingleLogOutEnabled() {
            if (typeof this.adobeid.uses_single_log_out === "boolean") {
                return this.adobeid.uses_single_log_out;
            }
            return config.sloEnabled;
        }

        function isRefreshSSOCookiesEnabled() {
            if (typeof this.adobeid.uses_refresh_sso_cookies === "boolean") {
                return this.adobeid.uses_refresh_sso_cookies;
            }
            return config.refreshSsoCookiesEnabled;
        }

        function _getRedirectUri(api, extraParams) {
            var redirect_uri = "";
            var customApiParameters = utils.merge(imsApis.getCustomApiParameters(api), extraParams);
            var isRedirectAbsoluteURL = _redirect_page_in_modal_mode.charAt(0) === "/";
            var getPath = isRedirectAbsoluteURL ? utils.getOrigin : utils.getBasePath;
            if (this.isModal()) {
                redirect_uri = getPath(location.getHref()) + _redirect_page_in_modal_mode + "#" + _from_ims_hash;
            } else {
                if (customApiParameters.redirect_uri) {
                    redirect_uri = customApiParameters.redirect_uri;
                } else if (this.adobeid.redirect_uri) {
                    redirect_uri = this.adobeid.redirect_uri;
                } else {
                    redirect_uri = location.getHref();
                }
                log.assert(!redirect_uri.includes(_from_ims), "the redirect_uri mustn't already contain #from_ims");
                var old_hash = utils.getHashFromURL(redirect_uri);
                var without_hash = redirect_uri;
                if (old_hash) {
                    without_hash = without_hash.substring(0, without_hash.length - old_hash.length);
                }
                redirect_uri = without_hash + "#" + _from_ims_hash + "&old_hash=" + encodeURIComponent(old_hash);
            }
            if (customApiParameters.client_id) {
                redirect_uri += "&client_id=" + encodeURIComponent(customApiParameters.client_id);
            }
            if (customApiParameters.scope) {
                redirect_uri += "&scope=" + encodeURIComponent(customApiParameters.scope);
            }
            if (api && api.name) {
                redirect_uri += "&api=" + encodeURIComponent(api.name);
            }
            redirect_uri = this.updateRedirectUriForReAuthentication(redirect_uri, customApiParameters);
            if (!utils.isEmptyObject(this.contextToBePassedOnRedirect)) {
                redirect_uri += "&" + _context_from_redirect_hash_parameter_name + "=" + encodeURIComponent(JSON.stringify(this.contextToBePassedOnRedirect));
            }
            return redirect_uri;
        }

        function _ajaxGet(url, fnToCall, type) {
            var self = this;
            var doneFn = function(error, result) {
                if (!error) {
                    fnToCall.call(self, result);
                } else {
                    eventDispatcher.onError(errorEvents.network(url));
                }
            };
            if (type === "jsonp" || !http.corsSupported) {
                http.jsonp(url, {}, doneFn);
            } else {
                http.cors({
                    onLoad: doneFn,
                    url: url
                });
            }
        }

        function _initOnDependencyLoad() {
            var self = this;
            vendors.onLoad(function(libs) {
                self._initialize();
            });
        }
        adobeIMS = utils.merge({
            _initialize: _initialize,
            _initOnDependencyLoad: _initOnDependencyLoad,
            addEventListener: events.addEventListener,
            _onApiError: eventDispatcher.onApiError,
            _onError: eventDispatcher.onError,
            _onReady: _onReady,
            setProfile: setProfile,
            getUserProfile: getUserProfile,
            getUserPictureURL: getUserPictureURL,
            getState: getState,
            listSocialProviders: imsApis.listSocialProviders,
            isSignedInUser: isSignedInUser,
            isReAuthentication: isReAuthentication,
            isReady: isReady,
            isMandatorySignIn: isMandatorySignIn,
            isSingleLogOutEnabled: isSingleLogOutEnabled,
            isRefreshSSOCookiesEnabled: isRefreshSSOCookiesEnabled,
            _getRedirectUri: _getRedirectUri,
            _signInBasedOnStoredCredentials: _signInBasedOnStoredCredentials,
            _signInWhenRedirectedBackFromIMS: _signInWhenRedirectedBackFromIMS,
            signIn: signIn,
            signInBasedOnSingleSignOnSSO: signInBasedOnSingleSignOnSSO,
            signInWithSocialProvider: signInWithSocialProvider,
            reAuthenticate: reAuthenticate,
            updateRedirectUriForReAuthentication: updateRedirectUriForReAuthentication,
            signUp: signUp,
            signOut: signOut,
            testSingleLogOutSLO: testSingleLogOutSLO,
            validateSSOCookieLifetime: validateSSOCookieLifetime,
            _clearTimerTestSSOCookieWillExpire: _clearTimerTestSSOCookieWillExpire,
            _invalidateTokens: _invalidateTokens,
            _isAccessTokenInfoUsable: _isAccessTokenInfoUsable,
            _removeAccessTokensIfDifferentUserId: _removeAccessTokensIfDifferentUserId,
            _setAccessTokenAndGetProfile: _setAccessTokenAndGetProfile,
            _testAccessTokensAreStillValid: _testAccessTokensAreStillValid,
            acquireAccessToken: acquireAccessToken,
            decodeAccessToken: token.decode,
            getAccessToken: getAccessToken,
            getAccessTokenInfo: getAccessTokenInfo,
            getAccessTokenSessionStorageKey: getAccessTokenSessionStorageKey,
            getContextFromRedirectForAccessToken: getContextFromRedirectForAccessToken,
            getKeyForAccessToken: getKeyForAccessToken,
            getTransitoryAuthorizationCode: imsApis.getTransitoryAuthorizationCode,
            hasTokenButItHasExpired: hasTokenButItHasExpired,
            loadFromStorage: loadFromStorage,
            shouldAcceptTheToken: shouldAcceptTheToken,
            testAccessTokenIsStillValid: testAccessTokenIsStillValid,
            setStandaloneToken: setStandaloneToken,
            _importDataFromModalWindow: _importDataFromModalWindow,
            _isFinalRedirectPageInModalMode: _isFinalRedirectPageInModalMode,
            isModal: isModal,
            switchToModalMode: switchToModalMode,
            switchToRedirectMode: switchToRedirectMode,
            getLocale: imsApis.getLocale,
            getReleaseFlags: getReleaseFlags,
            isReleaseFlagActive: isReleaseFlagActive,
            getScope: imsApis.getScope,
            matchesTheRequiredScope: client.matchesRequiredScope,
            sunbreakHack: client.sunbreakHack,
            getClientID: imsApis.getClientId,
            isKnownClientID: client.isKnownClientID,
            _ajaxGet: _ajaxGet,
            getAdobeIdApiParametersForApi: imsApis.getCustomApiParameters,
            getUrlForApiCall: getUrlForApiCall,
            makeApiCall: imsApis.makeApiCall,
            _clearCredentials: _clearCredentials,
            _callCallbacksToUpdateUI: _callCallbacksToUpdateUI,
            _openWindow: _openWindow,
            toggleLogging: log.toggleLogging
        }, adobeIMS);
        analytics.trackObject(adobeIMS);
        AdobeIMS.call(adobeIMS);
        return adobeIMS;
    };
    exports.analytics = function(storage, methodTrackingEnabled) {
        "use strict";
        var storageKey = "jslMethods";
        var trackedMethods = [];
        var usedMethods = [];
        var methodCache = {};
        var log = function(functionName) {
            var name = functionName;
            if (trackedMethods.includes(functionName)) {
                name = trackedMethods.indexOf(functionName);
                if (!usedMethods.includes(name)) {
                    usedMethods.push(name);
                    usedMethods.sort(function compareNumber(a, b) {
                        return a - b;
                    });
                    getStorage().setItem(storageKey, usedMethods.join("+"));
                }
            }
        };
        var getMethods = function() {
            if (!methodTrackingEnabled) {
                return [];
            }
            return usedMethods;
        };
        var trackObject = function(object) {
            if (!methodTrackingEnabled) {
                return;
            }
            usedMethods = getUsedMethods();
            for (var methodName in object) {
                if (object.hasOwnProperty(methodName) && typeof object[methodName] === "function") {
                    trackedMethods.push(methodName);
                    methodCache[methodName] = object[methodName];
                    (function() {
                        var name = methodName;
                        object[name] = function() {
                            log(name);
                            return methodCache[name].apply(object, arguments);
                        };
                    })();
                }
            }
            trackedMethods.sort();
        };
        var getStorage = function() {
            return storage.session;
        };
        var getUsedMethods = function() {
            var storage = getStorage().getItem(storageKey);
            if (storage) {
                storage = storage.split("+").map(function(item) {
                    return parseInt(item, 10);
                });
            } else {
                storage = [];
            }
            return storage;
        };
        return {
            getMethods: getMethods,
            trackObject: trackObject
        };
    };
    exports.autoRefreshToken = function autoRefreshToken(utils) {
        "use strict";
        var autoRefreshTimeout = null;
        var refreshInterval = 84e4;
        var userActivityDetected = false;

        function init(adobeIMS) {
            userActivityDetected = false;
            if (autoRefreshTimeout) {
                window.clearTimeout(autoRefreshTimeout);
            }
            if (!adobeIMS.isSignedInUser()) {
                return;
            }
            watchUserActivity();
            autoRefreshTimeout = window.setTimeout(function refreshToken() {
                if (userActivityDetected) {
                    adobeIMS.acquireAccessToken();
                }
            }, refreshInterval);
        }

        function onUserActivity() {
            userActivityDetected = true;
            unwatchUserActivity();
        }

        function unwatchUserActivity() {
            utils.removeEventListener(window, "mousemove", onUserActivity);
            utils.removeEventListener(window, "keyup", onUserActivity);
        }

        function watchUserActivity() {
            utils.addEventListener(window, "mousemove", onUserActivity);
            utils.addEventListener(window, "keyup", onUserActivity);
        }
        watchUserActivity();
        return {
            init: init
        };
    };
    exports.base32 = function(utils) {
        "use strict";
        var alphabet = "abcdefghijklmnopqrstuvwxyz234567".split("");
        var table = {
            "=": 0
        };
        alphabet.forEach(function(ch, idx) {
            table[ch] = idx;
        });

        function leftPad(ch, num, str) {
            var charsNeeded = num - str.length;
            if (charsNeeded > 0) {
                str = new Array(charsNeeded + 1).join(ch) + str;
            }
            return str;
        }

        function toBase32PaddedBinary(num) {
            return leftPad("0", 5, num.toString(2));
        }

        function validateEncodedData(chars) {
            if (chars.length % 8 !== 0) {
                throw new Error("Data length is not a multiple of 8");
            }
            chars.forEach(function(ch) {
                if (!(ch in table)) {
                    throw new Error("Unknown encoded character " + ch);
                }
            });
            var foundPaddingChar = false;
            chars.forEach(function(ch) {
                if (ch !== "=" && foundPaddingChar) {
                    throw new Error("Found padding char in the middle of the string");
                } else if (ch === "=") {
                    foundPaddingChar = true;
                }
            });
        }

        function countPadding(chars) {
            var idx = chars.length - 1;
            var count = 0;
            while (chars[idx] === "=") {
                ++count;
                --idx;
            }
            return count;
        }

        function decodeToBitstring(str) {
            if (typeof str !== "string") {
                throw new Error("Data is not a string");
            }
            var chars = str.toLowerCase().split("");
            validateEncodedData(chars);
            var paddingCount = countPadding(chars);
            var binary = [];
            chars.forEach(function(ch) {
                binary.push(toBase32PaddedBinary(table[ch]));
            });
            var data = binary.join("");
            if (paddingCount > 0) {
                data = data.slice(0, -5 * paddingCount);
            }
            if (data.length % 8 !== 0) {
                data = data.slice(0, -1 * (data.length % 8));
            }
            return data;
        }
        return {
            decodeToBitstring: decodeToBitstring
        };
    };
    exports.client = function(config, imsApis, log, utils) {
        function isKnownClientID(clientId) {
            return clientId in config.api.authorize.endpoint;
        }

        function sunbreakHack(scope) {
            return scope.replace(config.sunbreakScope, config.sunbreakScopeExpanded);
        }

        function matchesScope(scopeToValidate) {
            var scopeHasContent = utils.String_hasContent(scopeToValidate);
            if (!scopeHasContent) {
                log.assert(scopeHasContent, "scopeToValidate must be a non empty string for matchesTheRequiredScope");
                return false;
            }
            var scopeListToValidate = this.sunbreakHack(utils.String_withoutWhitespaces(scopeToValidate)).split(",");
            var defaultScopeList = this.sunbreakHack(this.getScope()).split(",");
            return defaultScopeList.every(function(requiredScope) {
                return scopeListToValidate.includes(requiredScope);
            });
        }
        return {
            getClientId: imsApis.getClientId,
            getScope: imsApis.getScope,
            isKnownClientID: isKnownClientID,
            matchesRequiredScope: matchesScope,
            sunbreakHack: sunbreakHack
        };
    };
    exports.http = function(log, url, utils) {
        "use strict";
        var jsonpCallbackNamespace = "_adobeIMSJSONPCallbacks";
        var jsonp = function(requestUrl, params, onLoadCallback) {
            params = params || {};
            var jsonpCallbacks = window[jsonpCallbackNamespace];
            if (!jsonpCallbacks) {
                jsonpCallbacks = window[jsonpCallbackNamespace] = {};
            }
            var fnKey = "_" + utils.createRandomString();
            params.callback = "window." + jsonpCallbackNamespace + "." + fnKey;
            requestUrl += url.buildQueryString(params, requestUrl);
            requestUrl = url.addCommonQueryParameters(requestUrl);
            var script = document.createElement("script");
            script.src = requestUrl;
            script.async = true;
            script.type = "text/javascript";
            var docHead = utils.getDocumentHead();
            jsonpCallbacks[fnKey] = function(result) {
                if (utils.isDebugMode) {
                    log.info("api call response: " + JSON.stringify(result));
                }
                onLoadCallback(false, result);
                delete jsonpCallbacks[fnKey];
            };
            var removeScript = function() {
                docHead.removeChild(script);
            };
            utils.addEventListener(script, "load", removeScript);
            utils.addEventListener(script, "error", function() {
                onLoadCallback(true, null);
                removeScript();
            });
            docHead.appendChild(script);
        };
        var Method = {
            POST: "POST",
            GET: "GET"
        };
        var browserSupportsCors = function() {
            if (!XMLHttpRequest) {
                return false;
            }
            return "withCredentials" in new XMLHttpRequest();
        }();
        var getCorsResponse = function getCorsResponse(xhr) {
            var contentType = xhr.getResponseHeader("Content-Type");
            var response = xhr.responseText;
            if (response.length && contentType && contentType.indexOf("json") >= 0) {
                try {
                    response = JSON.parse(response);
                } catch (error) {
                    throw error;
                }
            }
            return response;
        };
        var onCorsEvent = function onCorsLoad(xhr, callback) {
            if (callback) {
                callback(xhr.status, getCorsResponse(xhr), xhr);
            }
        };
        var doXhr = function(method, requestUrl, data, headers, onLoadCallback, onErrorCallback) {
            var xhr = new XMLHttpRequest();
            var onCorsError = function onCorsError(event) {
                onCorsEvent(event.target, onErrorCallback);
            };
            var onCorsLoad = function onCorsLoad(event) {
                onCorsEvent(event.target, onLoadCallback);
            };
            requestUrl = url.addCommonQueryParameters(requestUrl);
            xhr.addEventListener("load", onCorsLoad);
            xhr.addEventListener("abort", onCorsError);
            xhr.addEventListener("error", onCorsError);
            xhr.open(method.toUpperCase(), requestUrl, true);
            if (headers) {
                for (var key in headers) {
                    if (!headers.hasOwnProperty(key)) {
                        continue;
                    }
                    xhr.setRequestHeader(key, headers[key]);
                }
            }
            xhr.withCredentials = true;
            xhr.send(data);
        };
        var corsGet = function(requestUrl, headers, params, onLoadCallback, onErrorCallback) {
            requestUrl += url.buildQueryString(params, requestUrl);
            doXhr(Method.GET, requestUrl, null, headers, onLoadCallback, onErrorCallback);
        };
        var corsPost = function(requestUrl, headers, data, onLoadCallback, onErrorCallback) {
            if (data.client_id) {
                requestUrl += url.buildQueryString({
                    client_id: data.client_id
                }, requestUrl);
                delete data["client_id"];
            }
            headers = headers || {};
            if (data) {
                data = url.uriEncodeData(data);
                headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            doXhr(Method.POST, requestUrl, data, headers, onLoadCallback, onErrorCallback);
        };
        var cors = function(options) {
            options = utils.merge({
                data: null,
                headers: null,
                method: Method.GET,
                onError: null,
                onLoad: null,
                url: ""
            }, options);
            switch (options.method.toUpperCase()) {
                case Method.GET:
                    corsGet(options.url, options.headers, options.data, options.onLoad, options.onError);
                    break;

                case Method.POST:
                    corsPost(options.url, options.headers, options.data, options.onLoad, options.onError);
                    break;

                default:
                    throw new Error("Unknown HTTP method " + options.method);
            }
        };
        return {
            jsonp: jsonp,
            cors: cors,
            corsSupported: browserSupportsCors,
            Method: Method
        };
    };
    exports.imsApis = function(adobeid, base32, config, eventDispatcher, http, log, url, utils) {
        "use strict";
        var globalErrorHandler = eventDispatcher.onApiError;
        var Headers = {
            AUTHORIZATION: "Authorization",
            X_IMS_CLIENT_ID: "X-IMS-ClientId",
            RETRY_AFTER: "Retry-after"
        };
        var Errors = {
            ABORTED: "aborted",
            NO_CORS: "no_cors",
            RATE_LIMITED: "rate_limited"
        };

        function getCustomApiParameters(api) {
            if (!(api && api.name && adobeid.api_parameters)) {
                return {};
            }
            for (var apiKey in adobeid.api_parameters) {
                if (api.name.includes(apiKey)) {
                    return adobeid.api_parameters[apiKey];
                }
            }
            return {};
        }

        function getClientId(api, extraParams) {
            if (extraParams && extraParams.client_id) {
                return extraParams.client_id;
            }
            var customApiParameters = getCustomApiParameters(api);
            if (customApiParameters && customApiParameters.client_id) {
                return customApiParameters.client_id;
            } else if (adobeid.client_id) {
                if (Array.isArray(adobeid.client_id)) {
                    return adobeid.client_id[0];
                } else {
                    return adobeid.client_id;
                }
            } else {
                return config.client_id;
            }
        }

        function getLocale() {
            return adobeid.locale || config.locale;
        }

        function prepareApiParams(api, extraParams, defaultParams) {
            if (arguments.length === 2 || !defaultParams) {
                defaultParams = {};
            }
            if (!defaultParams.client_id) {
                defaultParams.client_id = getClientId();
            }
            return utils.merge(defaultParams, getCustomApiParameters(api), extraParams);
        }

        function getScope(api, extraParams) {
            var customApiParameters;
            var scope = "AdobeID,openid";
            if (extraParams && extraParams.scope) {
                scope = extraParams.scope;
            } else {
                customApiParameters = getCustomApiParameters(api);
                if (customApiParameters && customApiParameters.scope) {
                    scope = customApiParameters.scope;
                } else if (adobeid.scope) {
                    scope = adobeid.scope;
                }
            }
            return utils.String_withoutWhitespaces(scope);
        }

        function getApiUrl(api, apiVersion, clientId) {
            if (!clientId) {
                clientId = getClientId(api);
            }
            var url = api.endpoint[clientId];
            if (!url) {
                log.info("No url found for api " + api.name + " for client " + clientId);
                return "";
            }
            if (url.includes("${ version }")) {
                url = url.replace("${ version }", apiVersion || "v1");
            } else if (apiVersion) {
                url += "/" + apiVersion;
            }
            return url;
        }

        function getApiUrlWithQuery(api, params, apiVersion, clientId) {
            if (!clientId && params) {
                clientId = params.client_id;
            }
            var requestUrl = getApiUrl(api, apiVersion, clientId);
            if (!requestUrl) {
                return "";
            }
            return requestUrl + url.buildQueryString(params, requestUrl);
        }

        function makeCorsRequest(options, successFn, errorFn) {
            var headers = {};
            var params = utils.cloneObject(options.params) || {};
            if (!params.client_id) {
                params.client_id = getClientId(options.api);
            }
            if (options.bearerToken) {
                headers[Headers.AUTHORIZATION] = "Bearer " + options.bearerToken;
            }
            http.cors({
                data: params,
                headers: headers,
                method: options.method,
                onError: function onApiError(statusCode, response, xhr) {
                    if (statusCode === 0) {
                        errorFn({
                            error: Errors.ABORTED
                        });
                    } else {
                        errorFn(response);
                    }
                },
                onLoad: function onApiLoad(statusCode, response, xhr) {
                    if (statusCode === 429) {
                        errorFn({
                            error: Errors.RATE_LIMITED,
                            retryAfter: window.parseInt(xhr.getResponseHeader(Headers.RETRY_AFTER), 10)
                        });
                    } else if (!response) {
                        errorFn(null);
                    } else if (response.error_flag || response.error) {
                        errorFn(response);
                    } else {
                        successFn(response);
                    }
                },
                url: options.url || getApiUrl(options.api, options.apiVersion, params.client_id)
            });
        }

        function makeJsonpRequest(options, successFn, errorFn) {
            var params = utils.cloneObject(options.params);
            var url = getApiUrl(options.api, options.apiVersion, params.client_id);
            if (options.bearerToken) {
                params.bearer_token = options.bearerToken;
            }
            http.jsonp(url, params, function(error, response) {
                if (error || response.error_flag || response.error) {
                    errorFn(response);
                } else {
                    successFn(response);
                }
            });
        }

        function getApiResponse(options, successFn, errorFn) {
            if (!options) {
                throw new Error("No options object provided");
            }
            if (!options.api) {
                throw new Error("No `options.api` provided");
            }
            errorFn = errorFn || globalErrorHandler;
            if (http.corsSupported) {
                makeCorsRequest(options, successFn, errorFn);
            } else {
                makeJsonpRequest(options, successFn, errorFn);
            }
        }

        function validateToken(tokenInfo, doneFn, errorFn) {
            var params = prepareApiParams(config.api.validate_token, {
                token: tokenInfo.access_token,
                client_id: tokenInfo.client_id,
                type: "access_token"
            });
            getApiResponse({
                api: config.api.validate_token,
                params: params,
                method: http.Method.POST
            }, doneFn, errorFn);
        }

        function logoutToken(token, doneFn, errorFn) {
            var params = prepareApiParams(config.api.logout_token, {
                access_token: token
            });
            errorFn = errorFn || globalErrorHandler;
            var cb = function(response) {
                if (response && response.error) {
                    errorFn(response);
                } else {
                    doneFn(response);
                }
            };
            getApiResponse({
                api: config.api.logout_token,
                method: http.Method.POST,
                params: params
            }, cb, cb);
        }

        function getProfile(bearerToken, doneFn, errorFn) {
            var params = prepareApiParams(config.api.profile);
            var endpoint = adobeid.openidCompatible ? config.api.userinfo : config.api.profile;
            getApiResponse({
                api: endpoint,
                bearerToken: bearerToken,
                params: params
            }, doneFn, errorFn);
        }

        function checkStatus(doneFn, errorFn) {
            var params = prepareApiParams(config.api.check_status);
            getApiResponse({
                api: config.api.check_status,
                params: params
            }, doneFn, errorFn);
        }

        function checkToken(params, doneCallback, errorCallback) {
            params = prepareApiParams(config.api.check, params, {
                scope: getScope(),
                locale: getLocale()
            });
            var onCorsSuccess = function(response) {
                if (response.jump) {
                    errorCallback(response);
                } else {
                    doneCallback(response);
                }
            };
            if (http.corsSupported) {
                getApiResponse({
                    api: config.api.check,
                    apiVersion: "v4",
                    method: http.Method.POST,
                    params: params
                }, onCorsSuccess, errorCallback);
            } else {
                errorCallback({
                    error: Errors.NO_CORS
                });
            }
        }

        function getAvatarUrl(userId) {
            return getApiUrl(config.api.avatar) + "/" + userId;
        }

        function getAuthorizeUrl(params) {
            params = prepareApiParams(config.api.authorize, params, {
                response_type: "token",
                client_id: getClientId(),
                scope: getScope(),
                locale: getLocale()
            });
            return getApiUrlWithQuery(config.api.authorize, params);
        }

        function getLogoutUrl(params) {
            params = prepareApiParams(config.api.logout, params, {
                locale: getLocale()
            });
            return getApiUrlWithQuery(config.api.logout, params);
        }

        function getReleaseFlags(accessToken, doneFn, errorFn) {
            var params = prepareApiParams(config.api.fg_value, {
                client_id: getClientId(config.api.fg_value)
            });
            getApiResponse({
                api: config.api.fg_value,
                params: params,
                bearerToken: accessToken
            }, function(result) {
                if (!result || result === "") {
                    utils.callIfFunction(errorFn, null, [null]);
                } else {
                    doneFn(result, utils.bitstringToLSB(base32.decodeToBitstring(result.releaseFlags)));
                }
            }, errorFn);
        }

        function getTransitoryAuthorizationCode(params, successCallback, errorCallback) {
            params = prepareApiParams(config.api.check, params, {
                client_id: getClientId(),
                response_type: "code"
            });
            getApiResponse({
                api: config.api.check,
                apiVersion: "v5",
                method: http.Method.POST,
                params: params
            }, successCallback, errorCallback);
        }

        function listSocialProviders(successCallback, errorCallback) {
            var params = prepareApiParams(config.api.social_providers, {
                client_id: getClientId()
            });
            getApiResponse({
                api: config.api.social_providers,
                params: params
            }, function parseSuccessResponse(response) {
                var result = [];
                if (Array.isArray(response)) {
                    response.forEach(function mapProviders(provider) {
                        result.push(provider.providerName);
                    });
                }
                successCallback(result);
            }, errorCallback);
        }

        function exchangeIjt(params, successCallback, errorCallback) {
            params = prepareApiParams(config.api.ijt, params, {
                client_id: getClientId()
            });
            var ijt = params.ijt;
            delete params["ijt"];
            var apiUrl = getApiUrl(config.api.ijt, "", params.client_id) + ijt;
            if ((apiUrl + url.buildQueryString(params)).length > 2048) {
                delete params["redirect_uri"];
            }
            getApiResponse({
                api: config.api.ijt,
                url: apiUrl,
                params: params
            }, successCallback, errorCallback);
        }

        function makeApiCall(api, version, params, fnToCall) {
            if (arguments.length === 3) {
                fnToCall = arguments[2];
                params = arguments[1];
                version = null;
            }
            return getApiResponse({
                api: api,
                apiVersion: version,
                params: params,
                forceJsonp: true
            }, fnToCall);
        }
        return {
            makeApiCall: makeApiCall,
            getApiUrl: getApiUrl,
            getApiUrlWithQuery: getApiUrlWithQuery,
            getAuthorizeUrl: getAuthorizeUrl,
            getAvatarUrl: getAvatarUrl,
            getLogoutUrl: getLogoutUrl,
            validateToken: validateToken,
            checkStatus: checkStatus,
            checkToken: checkToken,
            getProfile: getProfile,
            getTransitoryAuthorizationCode: getTransitoryAuthorizationCode,
            logoutToken: logoutToken,
            exchangeIjt: exchangeIjt,
            listSocialProviders: listSocialProviders,
            getCustomApiParameters: getCustomApiParameters,
            getClientId: getClientId,
            getLocale: getLocale,
            getReleaseFlags: getReleaseFlags,
            getScope: getScope,
            Errors: Errors
        };
    };
    exports.location = function() {
        "use strict";

        function getHref() {
            return window.location.href;
        }

        function setHref(url, addToHistory) {
            if (addToHistory) {
                window.location.href = url;
            } else {
                window.location.replace(url);
            }
        }

        function getHash() {
            return window.location.hash;
        }

        function setHash(hash) {
            window.location.hash = hash;
        }
        return {
            getHref: getHref,
            setHref: setHref,
            getHash: getHash,
            setHash: setHash
        };
    };
    exports.log = function() {
        "use strict";
        var enabled = false;
        var print = function(method, args) {
            if (!enabled || !(window.console && typeof window.console.log === "function")) {
                return;
            }
            console[method].apply(console, args);
        };
        return {
            assert: function logAssert() {
                print("assert", arguments);
            },
            error: function logError() {
                print("error", arguments);
            },
            info: function logInfo() {
                print("info", arguments);
            },
            toggleLogging: function toggleLogging(mode) {
                if (typeof mode === "boolean") {
                    enabled = mode;
                }
            }
        };
    };
    exports.MemoryStorage = function MemoryStorage() {
        "use strict";
        var data = {};
        return {
            length: 0,
            clear: function clear() {
                data = {};
                this.length = 0;
            },
            getItem: function getItem(key) {
                var value = data[key];
                return typeof value === "undefined" ? null : value;
            },
            keys: function keys() {
                return data;
            },
            removeItem: function removeItem(key) {
                if (!data.hasOwnProperty(key)) {
                    return;
                }
                delete data[key];
                --this.length;
            },
            setItem: function setItem(key, value) {
                if (!data.hasOwnProperty(key)) {
                    ++this.length;
                }
                data[key] = String(value);
            }
        };
    };
    exports.optimizations = function(adobeIMS, config, publicEvents) {
        "use strict";
        config = config || {};
        if (config.enable === false) {
            return;
        }
        for (var key in exports.optimizations) {
            if (!exports.optimizations.hasOwnProperty(key) || typeof exports.optimizations[key] !== "function") {
                continue;
            }
            exports.optimizations[key].call(null, adobeIMS, config, publicEvents);
        }
    };
    exports.optimizations.$$prefetchSuSi = function(adobeIMS, config, publicEvents) {
        "use strict";
        if (config.prefetchSuSi === false) {
            return;
        }
        var prefetch = function() {
            if (adobeIMS.isSignedInUser()) {
                return;
            }
            var authorizeUrl = adobeIMS.getUrlForApiCall(adobeIMS.config.api.authorize, {
                client_id: adobeIMS.getClientID()
            });
            var authorizeHost = /^(https?:\/\/.+?)\//.exec(authorizeUrl)[1];
            var prefetchUrl = authorizeHost + "/favicon.ico?cache_bust=" + Math.random().toString(16).slice(2);
            var link = document.createElement("link");
            link.setAttribute("rel", "prefetch");
            link.setAttribute("href", prefetchUrl);
            document.getElementsByTagName("head")[0].appendChild(link);
        };
        if (adobeIMS.isReady()) {
            prefetch();
        } else {
            adobeIMS.addEventListener(publicEvents.types.READY, prefetch);
        }
    };
    exports.profileStorage = function profileStorage(storage, preferredStorage) {
        "use strict";
        var STORAGE_KEY = "adobeid_ims_profile";

        function getStorage() {
            return storage.session;
        }

        function clear() {
            return getStorage().removeItem(STORAGE_KEY);
        }

        function get() {
            return JSON.parse(getStorage().getItem(STORAGE_KEY));
        }

        function set(value) {
            return getStorage().setItem(STORAGE_KEY, JSON.stringify(value));
        }
        return {
            clear: clear,
            get: get,
            set: set
        };
    };
    exports.storage = function(log, MemoryStorage) {
        "use strict";

        function getStorage(storageName) {
            if (exports.storage.$$isPolyfillNeeded(storageName, log)) {
                log.info("Polyfilled " + storageName + ". All values are stored in Memory.");
                return new MemoryStorage();
            }
            return window[storageName];
        }
        return {
            session: getStorage("sessionStorage"),
            local: getStorage("localStorage")
        };
    };
    exports.storage.$$isPolyfillNeeded = function(storageName, log) {
        "use strict";
        try {
            var storage = window[storageName];
        } catch (e) {
            log.info(storageName + " disabled");
            return true;
        }
        if (storage === null || typeof storage === "undefined") {
            return true;
        }
        try {
            storage.setItem("isStoragePolyfillNeeded", true);
            if (storage.getItem("isStoragePolyfillNeeded") !== "true") {
                return true;
            }
            storage.removeItem("isStoragePolyfillNeeded");
            return false;
        } catch (e) {
            return true;
        }
    };
    exports.susiButtons = function(adobeIMS, utils) {
        "use strict";
        var susiButtonSelectorTemplate = '[data-adobeid-action="%action%"]';

        function attachListenersToButton(buttonType, onClickFn, onClickContext) {
            var buttons = document.querySelectorAll(susiButtonSelectorTemplate.replace("%action%", buttonType));
            var listener = function() {
                onClickFn.call(onClickContext);
            };
            if (!NodeList.prototype.forEach) {
                buttons = Array.prototype.slice.call(buttons);
            }
            buttons.forEach(function(button) {
                utils.addEventListener(button, "click", listener);
            });
        }
        var isAttached = false;

        function attachListeners() {
            var attach = function() {
                if (isAttached) {
                    return;
                }
                isAttached = true;
                attachListenersToButton("signin", adobeIMS.signIn, adobeIMS);
                attachListenersToButton("signup", adobeIMS.signUp, adobeIMS);
                attachListenersToButton("signout", adobeIMS.signOut, adobeIMS);
                attachListenersToButton("reauthenticate", adobeIMS.reAuthenticate, adobeIMS);
            };
            if (window.document.readyState === "complete" || window.document.readyState === "loaded") {
                attach();
            } else {
                utils.addEventListener(window.document, "DOMContentLoaded", attach);
                utils.addEventListener(window, "load", attach);
            }
        }
        return {
            attachListeners: attachListeners
        };
    };
    exports.token = function() {
        "use strict";
        var decode = function decode(tokenString) {
            if (!isValid(tokenString)) {
                return null;
            }
            var payloadString = tokenString.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
            try {
                return JSON.parse(atob(payloadString));
            } catch (error) {
                return null;
            }
        };
        var isFromIms = function isFromIms(tokenString) {
            var asRegExp = new RegExp(/^ims-/);
            var payload = decode(tokenString);
            if (!payload) {
                return false;
            }
            return Boolean(payload.as && asRegExp.test(payload.as) && payload.client_id && payload.created_at && payload.expires_in && payload.id && payload.moi && payload.scope && payload.type);
        };
        var isValid = function isValid(tokenString) {
            return typeof tokenString === "string" && tokenString.length >= 5 && tokenString.split(".").length === 3;
        };
        return {
            decode: decode,
            isFromIms: isFromIms
        };
    };
    exports.tokenStorage = function tokenStorage(storage, preferredStorage) {
        "use strict";

        function getStorage(isReauth) {
            if (isReauth || preferredStorage === "local") {
                return storage.local;
            } else {
                return storage.session;
            }
        }

        function get(key, isReauth) {
            return JSON.parse(getStorage(isReauth).getItem(key));
        }

        function keys(isReauth) {
            var store = getStorage(isReauth);
            return Object.keys(store.keys ? store.keys() : store);
        }

        function remove(key, isReauth) {
            return getStorage(isReauth).removeItem(key);
        }

        function set(key, value, isReauth) {
            return getStorage(isReauth).setItem(key, JSON.stringify(value));
        }
        return {
            get: get,
            keys: keys,
            remove: remove,
            set: set
        };
    };
    exports.url = function url(analytics, extraUrlParameters) {
        "use strict";

        function addCommonQueryParameters(url) {
            url += buildQueryString(extraUrlParameters, url);
            var methods = analytics.getMethods();
            if (methods.length) {
                url += "&jslMethods=" + methods.join("+");
            }
            return url;
        }

        function buildQueryString(params, url) {
            if (params) {
                var encodedData = uriEncodeData(params);
                if (encodedData) {
                    if (url && url.indexOf("?") !== -1) {
                        encodedData = "&" + encodedData;
                    } else {
                        encodedData = "?" + encodedData;
                    }
                }
                return encodedData;
            }
            return "";
        }

        function uriEncodeData(data) {
            var encodedData = "";
            var isFirst = true;
            for (var key in data) {
                if (!data.hasOwnProperty(key) || data[key] === undefined) {
                    continue;
                }
                var encKey = encodeURIComponent(key);
                var value = data[key];
                var encValue;
                if (value === null) {
                    encValue = "null";
                } else if (typeof value === "object") {
                    encValue = encodeURIComponent(JSON.stringify(value));
                } else {
                    encValue = encodeURIComponent(value);
                }
                encodedData += (isFirst ? "" : "&") + encKey + "=" + encValue;
                isFirst = false;
            }
            return encodedData;
        }
        return {
            addCommonQueryParameters: addCommonQueryParameters,
            buildQueryString: buildQueryString,
            uriEncodeData: uriEncodeData
        };
    };
    exports.utils = function(location, log) {
        "use strict";

        function getThisScriptSrc() {
            var thisScriptTag = document.querySelector('script[src*="imslib.min.js"]');
            if (!thisScriptTag) {
                thisScriptTag = document.querySelector('script[src*="imslib.js"]');
            }
            if (!thisScriptTag) {
                return "";
            }
            return thisScriptTag.src;
        }
        var thisScriptSrc = getThisScriptSrc();
        if (thisScriptSrc) {
            log.info("loaded from " + thisScriptSrc);
        }

        function bitstringToLSB(bitstring) {
            var BYTE_LENGTH = 8;
            var result = "";
            if (bitstring.length % 8 !== 0) {
                throw new Error("Length must be a multiple of 8");
            }
            for (var byteStart = 0, len = bitstring.length; byteStart < len; byteStart += BYTE_LENGTH) {
                var byte = bitstring.slice(byteStart, byteStart + BYTE_LENGTH);
                result += byte.split("").reverse().join("");
            }
            return result;
        }

        function String_hasContent(string) {
            return typeof string === "string" && string.length > 0;
        }

        function String_withoutWhitespaces(string) {
            return string.replace(/\s/g, "");
        }

        function isFunction(fn) {
            return fn && typeof fn === "function";
        }

        function callIfFunction(fn, context, args) {
            if (isFunction(fn)) {
                return fn.apply(context, args || []);
            }
            return null;
        }

        function equals(object1, object2) {
            if (object1 === null) {
                return object2 === null;
            }
            if (object2 === null) {
                return object1 === null;
            }
            if (typeof object1 !== typeof object2) {
                return false;
            }
            if (Array.isArray(object1)) {
                if (!Array.isArray(object2) || object1.length !== object2.length) {
                    return false;
                }
                for (var index = 0; index < object1.length; ++index) {
                    if (!equals(object1[index], object2[index])) {
                        return false;
                    }
                }
                return true;
            }
            if (typeof object1 === "object") {
                var key;
                for (key in object1) {
                    if (!(key in object2) || !equals(object1[key], object2[key])) {
                        return false;
                    }
                }
                for (key in object2) {
                    if (!(key in object1)) {
                        return false;
                    }
                }
                return true;
            } else {
                return object1 === object2;
            }
        }

        function cloneObject(source) {
            if (source === null) {
                return null;
            }
            if (typeof source !== "object") {
                return source;
            }
            var clone;
            if (Array.isArray(source)) {
                clone = [];
                source.forEach(function(objectInArray) {
                    clone.push(cloneObject(objectInArray));
                });
            } else {
                clone = {};
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        clone[key] = cloneObject(source[key]);
                    }
                }
            }
            log.assert(equals(source, clone), "cloned object has failed for " + JSON.stringify(source));
            return clone;
        }

        function isEmptyObject(object) {
            return !object || equals(object, {});
        }

        function getDocumentHead() {
            if (document.head) {
                return document.head;
            }
            var heads = document.getElementsByTagName("head");
            if (heads && heads.length) {
                return heads[0];
            }
            return null;
        }

        function parseUrl(url) {
            var a = document.createElement("a");
            a.href = url;
            var protocol = a.protocol.replace(":", "");
            var defaultPorts = {
                http: 80,
                https: 443
            };
            var host = a.host;
            if (defaultPorts[protocol]) {
                host = host.replace(new RegExp(":" + defaultPorts[protocol] + "$"), "");
            }
            return {
                protocol: protocol,
                host: host,
                query: a.search,
                hash: a.hash.replace("#", ""),
                path: ("/" + a.pathname.slice(0, a.pathname.lastIndexOf("/") + 1)).replace("//", "/")
            };
        }

        function getBasePath(url) {
            var u = parseUrl(url);
            return u.protocol + "://" + u.host + u.path;
        }

        function getOrigin(url) {
            var u = parseUrl(url);
            return u.protocol + "://" + u.host;
        }

        function getHashFromURL(url) {
            if (!url && location) {
                url = location.getHref();
            }
            var index = url.indexOf("#");
            return index !== -1 ? url.substring(index) : "";
        }

        function getQueryParamsAsMap(string) {
            string = string.replace(/^(#|\?|&)/, "");
            var paramMap = {};
            string.split("&").forEach(function(keyValuePair) {
                if (keyValuePair.length) {
                    var arr = keyValuePair.split("=");
                    paramMap[arr[0]] = decodeURIComponent(arr[1]);
                }
            });
            return paramMap;
        }

        function addEventListener(element, eventName, fnToCall) {
            if (element.addEventListener) {
                element.addEventListener(eventName, fnToCall, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + eventName, fnToCall);
            }
        }

        function removeEventListener(element, eventName, fnToCall) {
            if (element.removeEventListener) {
                element.removeEventListener(eventName, fnToCall);
            } else if (element.detachEvent) {
                element.detachEvent("on" + eventName, fnToCall);
            }
        }

        function merge(target) {
            var result = {};
            for (var indexArgument = 0; indexArgument < arguments.length; ++indexArgument) {
                var source = arguments[indexArgument];
                if (typeof source !== "object") {
                    continue;
                }
                for (var key in source) {
                    var value = source[key];
                    if (typeof value !== "undefined") {
                        if (typeof value !== "object" || value === null) {
                            result[key] = value;
                        } else {
                            result[key] = merge(result[key] || {}, value);
                        }
                    }
                }
            }
            return result;
        }

        function openPopup(url, title, params) {
            return window.open(url, title, params);
        }

        function closeWindow() {
            window.close();
        }

        function createRandomString() {
            var key = Math.random().toString(16);
            return key.slice(key.indexOf(".") + 1);
        }
        var utils = {
            bitstringToLSB: bitstringToLSB,
            String_hasContent: String_hasContent,
            String_withoutWhitespaces: String_withoutWhitespaces,
            parseUrl: parseUrl,
            getBasePath: getBasePath,
            getOrigin: getOrigin,
            getHashFromURL: getHashFromURL,
            getQueryParamsAsMap: getQueryParamsAsMap,
            isFunction: isFunction,
            callIfFunction: callIfFunction,
            merge: merge,
            cloneObject: cloneObject,
            equals: equals,
            isEmptyObject: isEmptyObject,
            getDocumentHead: getDocumentHead,
            addEventListener: addEventListener,
            removeEventListener: removeEventListener,
            openPopup: openPopup,
            closeWindow: closeWindow,
            getThisScriptSrc: getThisScriptSrc,
            createRandomString: createRandomString
        };
        return utils;
    };
    exports.vendors = function() {
        "use strict";
        var vendors = {};
        var vendorsSrc = {
            json: "https://static.adobelogin.com/renga-idprovider/resources/js/json2-min.js"
        };
        var neededVendors = exports.vendors.$$neededVendors();
        var loadScript = function(src, doneCb) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = src;
            if (typeof doneCb === "function") {
                script.onload = function() {
                    window.setTimeout(doneCb, 1);
                };
            }
            var head = document.head || document.getElementsByTagName("head")[0];
            head.appendChild(script);
        };
        var loadJSON = function(doneCb) {
            loadScript(vendorsSrc.json, doneCb);
        };
        var jsonLoaded = false;
        var callbacks = [];
        var executeCallbacksIfDone = function() {
            if (neededVendors.isJSONNeeded ? jsonLoaded : true) {
                var cb = callbacks.shift();
                while (cb) {
                    cb(vendors);
                    cb = callbacks.shift();
                }
            }
        };
        vendors.onLoad = function(cb) {
            callbacks.push(cb);
            window.setTimeout(executeCallbacksIfDone, 0);
        };
        if (neededVendors.isJSONNeeded) {
            loadJSON(function() {
                jsonLoaded = true;
                executeCallbacksIfDone();
            });
        }
        return vendors;
    };
    exports.vendors.$$neededVendors = function() {
        "use strict";
        var isJSONNeeded = function() {
            return !(window.JSON && typeof window.JSON.stringify === "function");
        }();
        return {
            isJSONNeeded: isJSONNeeded
        };
    };
    exports.bootstrap = function() {
        "use strict";
        var build = exports.build;
        var errorEvents = exports.errorEvents;
        var location = exports.location();
        var log = exports.log();
        var MemoryStorage = exports.MemoryStorage;
        var publicEvents = exports.publicEvents();
        var token = exports.token();
        var vendors = exports.vendors();
        var adobeid = exports.adobeid(log);
        var events = exports.events(publicEvents);
        var mapEndpoints = exports.mapEndpoints(build);
        var storage = exports.storage(log, MemoryStorage);
        var utils = exports.utils(location, log);
        var autoRefreshToken = exports.autoRefreshToken(utils);
        var analytics = exports.analytics(storage, build.methodTrackingEnabled);
        var base32 = exports.base32(utils);
        var config = exports.config(adobeid, log, mapEndpoints, utils);
        var url = exports.url(analytics, {
            jslClient: config.client_id,
            jslVersion: build.sha
        });
        var profileStorage = exports.profileStorage(storage, adobeid.preferred_storage);
        var tokenStorage = exports.tokenStorage(storage, adobeid.preferred_storage);
        var eventDispatcher = exports.eventDispatcher(adobeid, errorEvents, events, log, publicEvents, utils);
        var http = exports.http(log, url, utils);
        var imsApis = exports.imsApis(adobeid, base32, config, eventDispatcher, http, log, url, utils);
        var client = exports.client(config, imsApis, log, utils);
        var tokenManagement = exports.tokenManagement(client, config, log);
        window.adobeIMS = exports.adobeIMS(adobeid, analytics, autoRefreshToken, client, config, errorEvents, events, eventDispatcher, http, imsApis, location, log, profileStorage, publicEvents, storage, token, tokenManagement, tokenStorage, utils, vendors);
        window.adobeIMS.version = build.version;
        var susiButtons = exports.susiButtons(window.adobeIMS, utils);
        exports.optimizations(window.adobeIMS, adobeid.optimizations, publicEvents);
        window.adobeIMS.config = config;
        window.adobeIMS.IMSAPIs = config.api;
        window.adobeIMS._initOnDependencyLoad();
        susiButtons.attachListeners();
    };
    exports.bootstrap();
})({});