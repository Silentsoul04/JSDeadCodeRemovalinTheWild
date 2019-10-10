(function(undefined) {
    'use strict';

    var adserver = 'dcm';
    var runtimeVersion = '2.4.1';
    var dynamicContentLoadFailed = false;
    window.lemonpiLogs = window.lemonpiLogs || [];

    function logEvent(type) {
        try {
            window.lemonpiLogs.push({
                type: type,
                runtimeContext: {
                    version: runtimeVersion,
                    adserver: adserver
                },
                impressionContext: {
                    iid: iid,
                    dynamicContentLoadedDone: dynamicContentLoadedDone,
                    dynamicContentLoadFailed: dynamicContentLoadFailed
                },
                logArguments: Array.prototype.slice.call(arguments, 1)
            });
        } catch (e) {}
    }

    window.addEventListener('error', logEvent.bind(null, 'script-error'));

    try {
        var script = document.createElement('script');
        script.src = 'https://runtime.lemonpi.io/logging.js';

        document.head.appendChild(script);
    } catch (e) {}

    // note: this is always included in a function, not run stand-alone.

    var iid = Math.round(Math.random() * 1e8);
    window.lemonpi.log =
        window.lemonpi.log ||
        (function() {
            if (window.location.href.indexOf('lemonpi_debug') >= 0) {
                return console.log.bind(console);
            } else {
                return function() {};
            }
        })();
    window.lemonpi.dynamicData = [];
    window.lemonpi.dynamicURLParameterMethods = []; // holds function inserted by lemonpi that adds key/value params to dynamic content url

    var dynamicContentLoadedDone = false;
    window.lemonpi.dynamicContentLoaded = function(dynamic) {
        if (dynamicContentLoadedDone) {
            return;
        }
        dynamicContentLoadedDone = true;

        if (!dynamic) {
            dynamicContentLoadFailed = true;
            logEvent('data-failed');
        } else {
            logEvent('data-success');
        }

        window.lemonpi.dynamicData = (dynamic || {}).data || [];

        window.lemonpi.log(
            'lemonpi: calling window.lemonpi.start after receiving dynamic content',
            dynamic
        );
        window.lemonpi.start();
    };

    function getIabConsentParametersString() {
        var parameters = [];
        var gdprApplies = window.lemonpi.getMacro('GDPR_APPLIES');
        var gdprString = window.lemonpi.getMacro('GDPR_CONSENT_STRING');
        if (gdprApplies !== undefined) {
            parameters.push(
                'iab-gdpr-applies=' +
                (gdprApplies === 0 || gdprApplies === '0' ? 'false' : 'true')
            );
        }
        if (gdprString !== undefined) {
            parameters.push('iab-consent-string=' + gdprString);
        }
        return parameters.join('&');
    }

    window.lemonpi._adserverLoad = undefined;
    window.lemonpi.getMacro = function(macroKey) {
        return undefined;
    };

    // this is where the banner is kicked off (but a creative has already started preloading)
    window.lemonpi._start = function() {
        var startedLoading = false;

        function startLoading() {
            if (startedLoading) {
                return;
            }
            startedLoading = true;

            var iabConsentParametersString = getIabConsentParametersString();

            // register the creative impression. 'staticContentImpressionUrl' is always set and used,
            // even for dynamic creatives. 'creativeImpressionUrl' might be a better name.
            var staticImpressionUrl = window.lemonpi.staticContentImpressionUrl;
            if (iabConsentParametersString) {
                staticImpressionUrl += '?' + iabConsentParametersString;
            }
            new Image().src = staticImpressionUrl;
            logEvent('impression');

            if (!window.lemonpi.dynamicContentEnabled) {
                window.lemonpi.log('lemonpi: not dynamic');
                window.lemonpi.log('lemonpi: calling window.lemonpi.start immediately');
                window.lemonpi.start();
                return;
            }

            window.lemonpi.log('lemonpi: dynamic, loading content');

            var dynamicURLParameters = '';

            var getDynamicContentDone = false;
            var getDynamicContent = function() {
                if (getDynamicContentDone) {
                    return;
                }
                getDynamicContentDone = true;

                var url = window.lemonpi.dynamicContentUrl;
                url += '?v=2&host=' + window.lemonpi.getHostname();
                url += '&callback=lemonpi.dynamicContentLoaded' + dynamicURLParameters;
                if (iabConsentParametersString) {
                    url += '&' + iabConsentParametersString;
                }
                var e = document.createElement('script');
                e.src = url;
                e.async = true;
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(e, s);
            };

            // could be filled in by lemonpi dynamic inputs
            var n = window.lemonpi.dynamicURLParameterMethods.length;
            if (n === 0) {
                getDynamicContent();
            } else {
                for (
                    var i = 0; i < window.lemonpi.dynamicURLParameterMethods.length; i++
                ) {
                    var callback = (function(index) {
                        return function(value) {
                            if (typeof value === 'string') {
                                var k = 'k' + index;
                                var v = value;
                                v = decodeURIComponent(v); // remove encoding done by macro's
                                v = decodeURIComponent(v); // remove double encodings (if any)
                                v = decodeURIComponent(v); // remove triple encodings (if any)
                                v = encodeURIComponent(v); // we want just 1 level of encoding
                                dynamicURLParameters += '&' + k + '=' + v;
                            }
                            n--;
                            if (n <= 0) {
                                getDynamicContent();
                            }
                        };
                    })(i);

                    window.lemonpi.dynamicURLParameterMethods[i](callback);
                }
                setTimeout(getDynamicContent, 1.5 * 1000);
            }
            setTimeout(window.lemonpi.dynamicContentLoaded, 2 * 1000);
        }

        if (!window.lemonpi._adserverLoad) {
            startLoading();
            return;
        }

        const startTime = new Date();
        var adserverLoadTimeout = setTimeout(startLoading, 1000);
        window.lemonpi._adserverLoad(function() {
            const endTime = new Date();
            clearTimeout(adserverLoadTimeout);
            startLoading();
            logEvent('adserver-ready', endTime.getTime() - startTime.getTime());
        });
    };

    window.lemonpi._prepare_click_url = function(prop, form) {
        var url;
        if (typeof prop === 'string') {
            url = prop;
        } else if (prop && prop.clickUrl) {
            url = prop.clickUrl;
        } else {
            url = window.lemonpi.staticClickUrl;
        }

        var tagging = window.lemonpi.tagging || '';

        var splitUrl = url.split('#');
        var preHashUrl = splitUrl[0];
        var postHashUrl = splitUrl.slice(1).join('#');

        if (!!tagging && preHashUrl.indexOf('?') >= 0) {
            tagging = '&' + tagging.substr(1);
        }

        preHashUrl += tagging;

        if (form) {
            var qsadd = function(s, k, v) {
                s += preHashUrl.indexOf('?') < 0 ? '?' : '&';
                s += encodeURIComponent(k) + '=' + encodeURIComponent(form[k]);
                return s;
            };
            for (var k in form) {
                preHashUrl = qsadd(preHashUrl, k, form[k]);
            }
        }

        url = preHashUrl + (splitUrl.length > 1 ? '#' + postHashUrl : '');
        if (window.lemonpi.thirdPartyTrackerUrl) {
            url = window.lemonpi.thirdPartyTrackerUrl.replace('(:URL:)', url);
        }

        var lemonpiClickUrl = window.lemonpi.lemonpiClickUrl;
        if (prop && prop.key) {
            lemonpiClickUrl += '/' + prop.key;
        }
        lemonpiClickUrl += '?host=' + window.lemonpi.getHostname() + '&iid=' + iid;
        url = lemonpiClickUrl + '&out=' + encodeURIComponent(url);
        return url;
    };
    window.lemonpi.click = function(layerId, prop, form) {
        window.lemonpi.log('lemonpi.click', layerId, prop, form);

        // Get url and queryString from layerMetadata with layerId. Error if layerId is invalid?
        var clickMeta = window.lemonpi.layerMetadata[layerId];

        if (!clickMeta) {
            window.lemonpi.log('Invalid click layer id', layerId);
            return;
        }

        window.lemonpi.staticClickUrl = clickMeta.url;
        window.lemonpi.tagging = clickMeta.queryString;

        var url = window.lemonpi._prepare_click_url(prop, form);
        url = window.lemonpi.clickTrackUrl + encodeURIComponent(url);

        window.open(url, '_blank');
    };

    window.lemonpi.getPropositions = function(index) {
        return window.lemonpi.dynamicData[index] || [];
    };
    window.lemonpi.getProposition = function(index) {
        return window.lemonpi.getPropositions(index)[0];
    };
    window.lemonpi.hasPropositions = function() {
        return (
            window.lemonpi.getPropositions(0).length > 0 ||
            window.lemonpi.getPropositions(1).length > 0
        );
    };
    window.lemonpi.getHostname =
        window.lemonpi.getHostname ||
        function() {
            return window.location.hostname;
        };

    var getDcmTagStr = function(lemonpiClickUrlMacro, dcmUrl) {
        // Return the query parameter string in the URL containing the
        // lemonpiClickurlMacro. This URL is passed as a query parameter
        // in the DCM generated click URL.
        var splitDcmUrl = dcmUrl.split('?');
        if (splitDcmUrl.length == 1) {
            return "";
        }

        var queryParams = splitDcmUrl[splitDcmUrl.length - 1].split('&');
        for (var i = 0; i < queryParams.length; ++i) {
            var keyValue = queryParams[i].split('=');
            if (keyValue[1].indexOf(lemonpiClickUrlMacro) === 0) {
                // '%3F' is URI encoded '?'
                var splitAdUrl = keyValue[1].split("%3F");
                if (splitAdUrl.length > 1 &&
                    splitAdUrl[0] === lemonpiClickUrlMacro) {

                    return "%3F" + splitAdUrl[splitAdUrl.length - 1];
                }
            }
        }
        return "";
    };

    window.lemonpi.click = function(layerId, prop, form) {
        window.lemonpi.log('lemonpi.click', layerId, prop, form);

        // For DCM, we get a dictionary of { url, clickTagName }
        var clickMeta = window.lemonpi.layerMetadata[layerId];

        if (!clickMeta) {
            window.lemonpi.log('Invalid click layer id', layerId);
            return;
        }

        // DCM injects window['clickTagN'] = '...' for each layer
        var clickTag = window[clickMeta.clickTagName];
        window.lemonpi.clickTrackUrl = clickTag;

        // create URL to LemonPI that is passed to DCM.
        window.lemonpi.staticClickUrl = clickMeta.url;
        var tagStrFromDcmUrl = getDcmTagStr("LEMONPI%25CLICKURL", clickTag);
        window.lemonpi.tagging = decodeURIComponent(tagStrFromDcmUrl);
        var lemonpiClickUrl = window.lemonpi._prepare_click_url(prop, form);

        // replace LemonPI macro and tags by just created URL
        var url = window.lemonpi.clickTrackUrl;
        var placeholder = "LEMONPI%25CLICKURL" + tagStrFromDcmUrl;
        url = url.replace(new RegExp(placeholder), encodeURIComponent(lemonpiClickUrl));

        window.open(url, '_blank');
    };

    window.lemonpi.getHostname = function() {
        return (window.lemonpi.clickTrackUrl || '').replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
    };;
})();