(function() {
    'use strict';

    var logUrl = 'https://log.lemonpi.io/log';
    var environment = 'production';

    window.lemonpiLogs = window.lemonpiLogs || [];

    function logEvent(event) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', logUrl, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(JSON.stringify(event));
    }

    var loggedScriptError = false;

    function processEvent(event) {
        try {
            var lemonpiContext = window.lemonpi || {};
            // Don't log preview runtime
            if (event.runtimeContext.adserver === 'preview') {
                return;
            }

            // Only log data-success, data-failed, and script-error for dynamic
            // creatives
            if (
                lemonpiContext.dynamicContentEnabled &&
                event.type !== 'data-success' &&
                event.type !== 'data-failed' &&
                event.type !== 'script-error'
            ) {
                return;
            }

            // Only log static creatives if runtime version is 1.x
            if (!lemonpiContext.dynamicContentEnabled &&
                (!event.runtimeContext.version.startsWith('1') ||
                    event.type !== 'impression')
            ) {
                return;
            }

            // Only log script errors once per impression
            if (event.type === 'script-error') {
                if (loggedScriptError) {
                    return;
                }
                loggedScriptError = true;
            }

            var lemonpiIds = lemonpiContext.staticContentImpressionUrl.split(
                '/view/'
            )[1];
            var adsetId = lemonpiIds.split('-')[0];
            var creativeId = lemonpiIds.split('-')[2];

            var parsedEvent = {
                type: event.type,
                adsetId: adsetId,
                creativeId: creativeId,
                runtimeVersion: event.runtimeContext.version,
                adserver: event.runtimeContext.adserver
            };
            if (event.type === 'script-error') {
                parsedEvent.dynamicContentLoadFailed =
                    event.impressionContext.dynamicContentLoadFailed;
            }
            if (event.type === 'data-success') {
                parsedEvent.type = 'data-fetch';
                parsedEvent.success = 1;
            }
            if (event.type === 'data-failed') {
                parsedEvent.type = 'data-fetch';
                parsedEvent.success = 0;
            }
            if (environment !== 'production') {
                parsedEvent.testEnvironment = true;
            }

            logEvent(parsedEvent);
        } catch (ex) {}
    }

    for (var i = 0; i < window.lemonpiLogs.length; i++) {
        processEvent(window.lemonpiLogs[i]);
    }

    window.lemonpiLogs = {
        push: processEvent
    };
})();