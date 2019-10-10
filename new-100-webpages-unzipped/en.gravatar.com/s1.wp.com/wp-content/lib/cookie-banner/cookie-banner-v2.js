(function() {
    'use strict';
    if (!window.jQuery) {
        console.log('cookie-banner-v2.js: jQuery not found. Analytics disabled.');
        return;
    }
    var docCookies = {
        getItem: function(sKey) {
            if (!sKey) {
                return null;
            }
            return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        },
        setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            var sExpires = "";
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                        break;
                    case String:
                        sExpires = "; expires=" + vEnd;
                        break;
                    case Date:
                        sExpires = "; expires=" + vEnd.toUTCString();
                        break;
                }
            }
            document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
            return true;
        },
        removeItem: function(sKey, sPath, sDomain) {
            if (!this.hasItem(sKey)) {
                return false;
            }
            document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
            return true;
        },
        hasItem: function(sKey) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false;
            }
            return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
        },
        keys: function() {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
            for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
                aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
            }
            return aKeys;
        }
    };
    window._tkq = window._tkq || [];
    var DEFAULT_CSS = '.a8c-cookie-banner { \
		display: block; \
		z-index: 50001; \
		position: fixed; \
		bottom: 0; \
		left: 0; \
		right: 0; \
		margin: 0; \
		padding: 16px 10px 16px 10px; \
		background-color: #f0f0f0; \
		border-top: 1px solid rgba(0, 0, 0, 0.05); \
		transform: translateY(+100%); \
		transition: transform 600ms ease-out; \
	} \
	.a8c-cookie-banner p { \
		display: inline-block; \
		color: black; \
		margin: 0 120px 0 0 ; \
		padding: 0; \
		font-family: sans-serif; \
		font-size: 12px; \
		font-weight: normal; \
		line-height: 1.25; \
	} \
	.a8c-cookie-banner a { \
		color: #0087BE; \
		font-family: sans-serif; \
		font-size: 12px; \
		font-weight: normal; \
		line-height: 1.25; \
	} \
	.a8c-cookie-banner a.a8c-cookie-banner-ok-button { \
		box-sizing: border-box; \
		display: inline-block; \
		position: absolute; \
		right: 10px; \
		top: 50%; \
		width: 110px; \
		transform: translateY(-50%); \
		border-radius: 4px; \
		border: 1px solid #e0e0e0; \
		padding: 10px; \
		background-color: white; \
		text-align: center; \
		font-family: sans-serif; \
		text-decoration: none; \
	} \
	@media only screen and (max-width : 600px) { \
		.a8c-cookie-banner { \
			padding: 10px 10px 10px 10px; \
		} \
		.a8c-cookie-banner p { \
			margin: 0 0 10px 0; \
			text-align: justify; \
		} \
		.a8c-cookie-banner a.a8c-cookie-banner-ok-button { \
			display: block; \
			position: static; \
			top: auto; \
			right: auto; \
			transform: none; \
			min-width: 89px; \
			width: 50%; \
			margin: 0 auto; \
		} \
	}';
    var cb = window.a8cCookieBanner = window.a8cCookieBanner || function(config) {
        cb.init ? cb.init(config) : cb.config = config;
    };

    function maybeShowCookieBanner(config, countryCode) {
        var isGdprCountry = -1 !== config.gdprCountries.indexOf(countryCode);
        var userChoice = docCookies.getItem(config.cookieName);
        if ('yes' !== userChoice && 'no' !== userChoice) {
            userChoice = 'unknown';
        }
        var show = 'unknown' === userChoice && (isGdprCountry || 'unknown' === countryCode);
        show &= !config.skipBanner;
        if (show) {
            showCookieBanner(config);
        } else {
            if ('no' !== userChoice) {
                jQuery(window.document).ready(function() {
                    jQuery(window.document).trigger('a8c-cookie-banner:fire-sensitive-pixels');
                });
            }
        }
    }

    function showCookieBanner(config) {
        jQuery('head').append('<style type="text/css">' + DEFAULT_CSS + '</style>');
        var $div = jQuery('<div/>');
        $div.addClass('a8c-cookie-banner custom-cookie-banner');
        var $p = jQuery('<p/>');
        $p.html(config.text);
        var $a = jQuery('<a/>', {
            href: '#'
        });
        $a.text(config.buttonText);
        $a.addClass('a8c-cookie-banner-ok-button');
        $div.append($p);
        $div.append($a);
        jQuery(document.body).append($div);
        jQuery(window.document).ready(function() {
            jQuery('.a8c-cookie-banner').css('transform', 'none');
        });
        jQuery('a.a8c-cookie-banner-ok-button').on('click', function(event) {
            event.preventDefault();
            jQuery(window.document).trigger('a8c-cookie-banner:fire-sensitive-pixels');
            jQuery('.a8c-cookie-banner').hide();
            var SIX_MONTHS_MAX = 6 * 30 * 24 * 60 * 60;
            docCookies.setItem(config.cookieName, 'yes', SIX_MONTHS_MAX, '/');
            window._tkq.push(['recordEvent', 'a8c_cookie_banner_ok', {
                site: document.location.host,
                path: document.location.pathname,
            }]);
        });
        var sanitized_host = document.location.host.replace(/[^a-zA-Z0-9]/g, '-');
        window._stq = window._stq || [];
        window._stq.push(['extra', {
            'x_cookie-banner-view': 'total,' + sanitized_host
        }]);
    }
    cb.init = function(config) {
        config = config || cb.config;
        if (!config) {
            return;
        }
        var countryCode = docCookies.getItem('country_code');
        if (null === countryCode) {
            jQuery.ajax({
                type: 'GET',
                dataType: "json",
                cache: false,
                url: 'https://public-api.wordpress.com/geo/',
                success: function(data) {
                    countryCode = data['country_short'];
                    docCookies.setItem('country_code', countryCode, 6 * 60 * 60, '/');
                    maybeShowCookieBanner(config, countryCode);
                },
                error: function() {
                    countryCode = 'unknown';
                    docCookies.setItem('country_code', countryCode, 6 * 60 * 60, '/');
                    maybeShowCookieBanner(config, countryCode);
                },
            });
        } else {
            maybeShowCookieBanner(config, countryCode);
        }
    };
})();
window.a8cCookieBanner();