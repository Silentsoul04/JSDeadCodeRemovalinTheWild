// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

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
        _rollbarConfig.transform = function xformPayload(payload) {lacuna_lazy_load("lacuna_cache/exported_chr4zq.js[1608:1800]", functionData => eval(functionData))tCurrentSessionURL(true);
            return payload;
        };
        _rollbarConfig.chlacuna_lazy_load("lacuna_cache/exported_chr4zq.js[1888:2387]", functionData => eval(functionData))) || m.match(/Access-Control-Allow-Origin/)) {
                return true;
            }
            return false;
        };
    