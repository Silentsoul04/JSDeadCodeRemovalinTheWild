(function($) {
    'use strict';
    var debug = localStorage.getItem('affiliate-referrals.js:debug') ? console.log : function() {};

    function recordAffiliateReferralInTracks(eventName, eventProps) {
        window._tkq = window._tkq || [];
        window._tkq.push(['recordEvent', eventName, eventProps]);
    }

    function parseUrl(href, parseQueryString) {
        var url = $('<a />')[0];
        url.href = href;
        return {
            host: url.host,
            pathname: url.pathname,
            query: parseQueryString ? getQueryParams(url.search) : url.search,
        }
    }

    function getQueryParams(query) {
        var paramStrings = query.substr(1).split('&');
        var params = {};
        for (var i = 0; i < paramStrings.length; i++) {
            var parts = paramStrings[i].split('=');
            if (2 === parts.length) {
                params[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
            }
        }
        return params;
    }
    if (typeof Object.assign != 'function') {
        Object.defineProperty(Object, "assign", {
            value: function assign(target, varArgs) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var to = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var nextSource = arguments[index];
                    if (nextSource != null) {
                        for (var nextKey in nextSource) {
                            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
                return to;
            },
            writable: true,
            configurable: true
        });
    }

    function urlSafeBase64DecodeString(str) {
        var decodeMap = {
            '-': '+',
            _: '/',
            '.': '=',
        };
        return atob(str.replace(/[\-_.]/g, function(c) {
            return decodeMap[c];
        }));
    }

    function parseAmpEncodedParams(value) {
        value = value
            .split('*')
            .filter(function(val) {
                return val.length;
            })
            .slice(2);
        if (0 === value.length || 0 !== value.length % 2) {
            return null;
        }
        var keyValMap = {};
        for (var i = 0; i < value.length; i += 2) {
            keyValMap[value[i]] = urlSafeBase64DecodeString(value[i + 1]);
        }
        return keyValMap;
    }

    function urlParseAmpCompatible(url) {
        var parsedUrl = parseUrl(url, true);
        var query = parsedUrl.query;
        debug('affiliate-referrals.js: urlParseAmpCompatible: original query:', query);
        if ('tk_amp' in query) {
            var tk_amp = parseAmpEncodedParams(query.tk_amp);
            debug('affiliate-referrals.js: urlParseAmpCompatible: tk_amp:', tk_amp);
            parsedUrl.query = Object.assign({}, tk_amp, query);
        }
        debug('affiliate-referrals.js: urlParseAmpCompatible: merged query:', parsedUrl.query);
        return parsedUrl;
    }
    $(document).on('referral_tracked', function(event, response) {
        debug('affiliate-referrals.js: referral_tracked');
        var eventProps = response.data || {};
        eventProps.success = response.success || '';
        eventProps.message = response.message || 'success';
        eventProps.status = response.status || '';
        recordAffiliateReferralInTracks('wpcom_refer_visit_response', eventProps);
    });
    $(document).on('referral_tracked_error', function(event, response) {
        debug('affiliate-referrals.js: referral_tracked_error');
        var eventProps = response.responseJSON || {};
        eventProps.status = response.status || '';
        recordAffiliateReferralInTracks('wpcom_refer_visit_response', eventProps);
    });
    var queryParams = urlParseAmpCompatible(document.location.href).query;
    window.ReferWP = window.ReferWP || {};
    window.ReferWP.queryParams = queryParams;
    var referral_script = document.createElement('script');
    referral_script.src = 'https://refer.wordpress.com/wp-content/themes/refer-wordpress/assets/js/referrals.min.js?v=20190410';
    referral_script.setAttribute('data-vendor', '67402');
    document.body.appendChild(referral_script);
    if (queryParams.aff) {
        debug('affiliate-referrals.js: wpcom_refer_visit');
        recordAffiliateReferralInTracks('wpcom_refer_visit', {
            'affiliate_id': queryParams.aff
        });
    } else if (queryParams.affiliate) {
        debug('affiliate-referrals.js: wpcom_refer_old_link_visit');
        recordAffiliateReferralInTracks('wpcom_refer_old_link_visit', {
            'affiliate_id': queryParams.affiliate
        });
    }
})(jQuery);