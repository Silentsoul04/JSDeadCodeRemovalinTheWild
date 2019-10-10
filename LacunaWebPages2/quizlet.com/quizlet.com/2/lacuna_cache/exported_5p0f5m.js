
        var _rollbarConfig = {
            "accessToken": "27dcc4189dcf44d98247b58699a3e517",
            "captureUncaught": true,
            "captureUnhandledRejections": true,
            "enabled": true,
            "hostWhiteList": ["quizlet.com\\\/(?!(static\\\/rollbar))"],
            "ignoredMessages": ["InvalidStateError", "UnknownError", "Can't execute code from a freed script", "(Uncaught )?SyntaxError.*", "Origin is not allowed.*", "Ad container with id dfp-.*", ".*__gCrWeb.*", ".*b\\.postMessage is not a function.*", ".*evaluating 'a.__AMP_TOP'*", ".*mobicip.*", ".*hilitor.*", ".*Blocked a frame with origin.*", ".*event is not defined.*", ".*didEnterViewPort", ".*ms exceeded"],
            "maxItems": 50,
            "payload": {
                "context": "Homepage\/index",
                "server": {
                    "root": ".\/"
                },
                "environment": "production",
                "client": {
                    "javascript": {
                        "source_map_enabled": true,
                        "code_version": "7f4c0306f4c733f4cbde311a38fef9d572729f1a",
                        "guess_uncaught_frames": true
                    }
                },
                "person": {
                    "id": "-317141631291860234",
                    "username": null
                }
            },
            "rollbarJsUrl": "\/static\/rollbarv2.3.9.min.js"
        };
        if (window.location.host === 'localhost') _rollbarConfig.payload.environment = 'development';
        _rollbarConfig.transform = function xformPayload(payload) {___jdce_logger("lacuna_cache/exported_5p0f5m.js", 1577, 1800);
            if (typeof payload.data === "undefined") payload.data = {};
            if (window.FS) payload.fullstoryUrl = FS.getCurrentSessionURL(true);
            return payload;
        };
        _rollbarConfig.checkIgnore = function shouldIgnore(isUncaught, args, payload) {___jdce_logger("lacuna_cache/exported_5p0f5m.js", 1839, 2387);
            if (navigator.plugins["Gnome Shell Integration"]) {
                return true;
            }
            var body = payload.body || {};
            var m = (body.message && body.message.body) || (body.exception && body.exception && body.exception.message);
            if (!m) return false;
            if (m.match(/unhandled rejection was null or undefined/) || m.match(/Access-Control-Allow-Origin/)) {
                return true;
            }
            return false;
        };
    