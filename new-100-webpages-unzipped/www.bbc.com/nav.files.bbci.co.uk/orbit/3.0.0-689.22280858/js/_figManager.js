// Pass on the referrer if we have been redirected by IGOR
window.orb = window.orb || {};
if (window.name.match(/ orb_fig_referrer=([^ ]*)/)) {
    // TODO: Move to BBC Page
    window.orb.referrer = decodeURIComponent(RegExp.$1);
    window.name = window.name.replace(/ orb_fig_referrer=([^ ]*)/, '');
}

var jsonpTimeout = 10000; // default timeout in ms is relatively long; generally it's happening in the background and cached data are available to use

window.orb.fig = (function() {

    var lastHostName;

    var defaultFig = {
        ad: 0,
        ap: 0,
        ck: 1,
        eu: 1,
        uk: 1,
        df: 1 // default fig (does not exist when we get a true fig response)
    };
    var overrideCookieName = 'ckns_orb_fig';
    var cacheCookieName = 'ckns_orb_fig_cache';
    var figCacheCookieTTL = 432000000; // five days

    var figFailed = false;
    var figStale = false;
    var figCached = false;
    var figOverridden = false;
    var figData = defaultFig;
    var figSuccessCallbacks = [];
    var figErrorCallbacks = [];

    var fig = function(param) {
        return param ? figData[param] : figData;
    };

    // Fig API
    fig.load = function(onSuccess, onError) {

        if (fig.figFailed()) {
            // If the Fig JSONP has finished and already failed, then
            // we can immediately call any error callbacks
            if (onError && typeof onError === 'function') {
                onError(fig);
            }
        } else {
            // If the fig hasn't failed (yet) and we have default data,
            // then we need to queue up both callbacks until we know which
            // to call.
            if (fig.isDefault()) {
                if (onSuccess && typeof onSuccess === 'function') {
                    figSuccessCallbacks.push(onSuccess);
                }
                if (onError && typeof onError === 'function') {
                    figErrorCallbacks.push(onError);
                }
            }
            // If the fig is not failed and not default data, then we know
            // it has both finished and succeeded, so call success callbacks
            else {
                if (onSuccess && typeof onSuccess === 'function') {
                    onSuccess(fig);
                }
            }
        }
    };

    fig.isDefault = function() {
        return figData.df ? 1 : 0;
    };

    fig.geo = {
        isUK: function() {
            return fig("uk");
        },
        isEU: function() {
            return fig("eu");
        }
    };

    fig.redirect = function() {
        var referrer = (window.document.referrer || '').toLowerCase();
        var host = (window.location.hostname || '').toLowerCase();
        var currentPage = (window.location.href || '');

        var redirectionIsEnabled = (window.bbcredirection && (window.bbcredirection.geo || window.bbcredirection.device));
        if (!redirectionIsEnabled || referrer === currentPage.toLowerCase()) {
            return;
        }

        var page = {
            isDomestic: (/(^|\.)bbc\.co\.uk$/i).test(host),
            isInternational: (/(^|\.)bbc\.com$/i).test(host),
        };
        var user = {
            isDomestic: figData.uk,
        };

        var destinationPage = currentPage;

        if (window.bbcredirection.geo) {
            if (page.isInternational && user.isDomestic) {
                destinationPage = currentPage.replace(/^(.+?bbc)\.com/i, '$1.co.uk');
            } else if (page.isDomestic && !user.isDomestic) {
                destinationPage = currentPage.replace(/^(.+?bbc)\.co\.uk/i, '$1.com');
            }
        }

        window.bbcpage.loadModule(['orb/cookies'])
            .then(function(bbccookies) {
                // avoid redirecting to ourselves, or redirecting to the page we just came from
                var shouldRedirect = destinationPage !== currentPage && referrer !== destinationPage.toLowerCase();

                if (shouldRedirect) {

                    var redirectedFromCurrent = lastHostName === window.location.hostname;
                    var redirectedFromDestination = lastHostName && destinationPage.indexOf(lastHostName) > -1;

                    try {
                        bbccookies.del(cacheCookieName, {
                            domain: '.bbc.co.uk',
                            path: '/'
                        });
                        bbccookies.del(cacheCookieName, {
                            domain: '.bbc.com',
                            path: '/'
                        });

                        if (!redirectedFromCurrent && !redirectedFromDestination) {
                            window.name += ' orb_fig_last_hostname=' + window.location.hostname;
                            window.name += ' orb_fig_referrer=' + encodeURIComponent(document.referrer);
                            window.location.replace(destinationPage);
                        }
                    } catch (e) {
                        console.log('redirection_fail');
                    }
                }
            });

    };

    fig.updateCacheCookie = function(figData) {
        figStale = false;
        var date = new Date();
        date.setTime(date.getTime() + (figCacheCookieTTL));
        window.bbcpage.loadModule(['orb/cookies'])
            .then(function() {
                window.bbccookies.set(cacheCookieName, JSON.stringify(figData), {
                    domain: '.bbc.co.uk',
                    expires: date,
                    path: '/'
                });
                window.bbccookies.set(cacheCookieName, JSON.stringify(figData), {
                    domain: '.bbc.com',
                    expires: date,
                    path: '/'
                });
            });
    };

    fig.setData = function(newFigData) {
        figData = newFigData;
        fig.redirect();
    };

    fig.figSuccess = function(newFigData) {
        // restrict keys to known used keys
        var restrictedFigData = restrictFigData(newFigData);

        fig.updateCacheCookie(restrictedFigData);
        if (!fig.isCached()) {
            fig.setData(restrictedFigData);
        }
        for (var c = 0, l = figSuccessCallbacks.length; c < l; c++) {
            figSuccessCallbacks[c](fig);
        }
    };

    fig.figError = function() {
        figFailed = true;
        // If non-default data is acquired e.g. via the cache cookie, then do
        // not inform the caller of an error by calling their error function
        // This is effectively doing a stale-if-error pattern.
        if (fig.isDefault()) {
            for (var c = 0, l = figErrorCallbacks.length; c < l; c++) {
                figErrorCallbacks[c](fig);
            }
        }
    };

    fig.figFailed = function() {
        return figFailed;
    };

    fig.isOverridden = function() {
        return figOverridden;
    };

    fig.isCached = function() {
        return figCached;
    };

    fig.isStale = function() {
        return figStale;
    };

    function getCookie(key) {
        if (!key) {
            return document.cookie;
        }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    }

    function restrictFigData(newFigData) {
        var restrictedFigData = {};
        var values = ['ad', 'ap', 'ck', 'eu', 'uk'];
        for (var index in values) {
            var key = values[index];
            if (newFigData.hasOwnProperty(key)) {
                restrictedFigData[key] = newFigData[key];
            }
        }
        return restrictedFigData;
    }

    fig.init = function() {
        // Main flow

        // Make sure window.name is always cleared before you redirect
        if (window.name.match(/ orb_fig_last_hostname=([^ ]*)/)) {
            lastHostName = decodeURIComponent(RegExp.$1);
            window.name = window.name.replace(/ orb_fig_last_hostname=([^ ]*)/, '');
        }

        var overrideCookieValue = getCookie(overrideCookieName);
        // Set fig to the override cookie values if the cookie is present
        if (overrideCookieValue) {
            var overrideCookieData = {};
            overrideCookieValue.replace(/([a-z]{2}):([0-9]+)/g, function(match, key, value) {
                overrideCookieData[key] = +value;
            });
            figData = overrideCookieData;
            fig.redirect();
            figOverridden = true;
            return fig;
        } else {
            figOverridden = false;
        }

        var cacheCookieValue = getCookie(cacheCookieName);
        // Set fig to the cached fig cookie values if the cookie is present
        if (cacheCookieValue) {
            try {
                var cacheCookieData = JSON.parse(cacheCookieValue);
                figData = cacheCookieData;
                fig.redirect();
                figStale = true;
                figCached = true;
            } catch (error) {
                jsonpTimeout = 3000; // shorter timeout in ms because no cached data available
                figData = defaultFig;
                figCached = false;
            }
        } else {
            // Otherwise, update the fig instance with no values (the default fig ones)
            jsonpTimeout = 3000; // shorter timeout in ms because no cached data available
            figData = defaultFig;
            figCached = false;
        }
        if (window.orb_fig_blocking && !overrideCookieValue && !cacheCookieValue) {
            // fig.js response will always call orb.orb_fig so we have to set up
            // that global function.
            window.orb.orb_fig = function(newFig) {
                figData = restrictFigData(newFig || defaultFig);
                fig.updateCacheCookie(figData);
                fig.redirect();
            };

            document.write('<script src="' + window.orb.figUrl + '"><' + '/script>');
        }
        return fig;
    };
    return fig.init();

}());


// Non-blocking API
define('orb/fig', ['orb/lib/_script'], function(script) {

    var fig = window.orb.fig;

    // Only lazy-load if we're a first time visitor who doesn't have fig
    // (non-blocking mode) or we've used cache data.
    if (fig.isDefault() || fig.isStale()) {
        script.jsonp(window.orb.figUrl, fig.figSuccess, {
            callbackName: "orb.orb_fig",
            timeout: jsonpTimeout,
            error: fig.figError
        });
    }

    return fig;
});