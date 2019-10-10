
        /* global: configureRequire comes from the
                           fake_require_snippet (ui/page/script_tags.py) */
        configureRequire({
            "waitSeconds": 30,
            "map": {
                "*": {
                    "external/reselect": "Reselect",
                    "external/tslib": "tslib",
                    "langpack": "json_loader!compiled/js/langpack/en.json",
                    "external/immutable": "external/immutable-3",
                    "external/react-dom/server": "external/react-dom/server-prod",
                    "external/sjcl": "external/sjcl-1.0.3",
                    "external/videojs/video": "external/videojs/video-7.3.0",
                    "external/moxie": "external/moxie-1.0.0",
                    "external/react": "external/react-prod",
                    "react-dom/test-utils": "external/react-dom/test-utils-prod",
                    "immutable": "external/immutable-3",
                    "external/bloodhound": "bloodhound",
                    "external/tracekit": "TraceKit",
                    "external/moment": "moment",
                    "external/react-dom/test-utils": "external/react-dom/test-utils-prod",
                    "external/plupload_dev": "external/plupload_dev-2.0.0",
                    "external/react-dom": "external/react-dom-prod",
                    "__unstubbed_external/purify": "external/purify",
                    "react": "external/react-prod",
                    "external/react-router": "external/react-router-3.2.1",
                    "react-dom/server": "external/react-dom/server-prod",
                    "react-dom": "external/react-dom-prod",
                    "external/typeahead.jquery": "typeahead.jquery",
                    "external/classnames": "classnames",
                    "prop-types": "external/prop-types",
                    "external/redux": "external/redux-prod",
                    "redux": "external/redux-prod"
                }
            },
            "shim": {},
            "bundles": {
                "pkg-react-prod": ["external/react-dom-prod", "external/react-prod"],
                "pkg-external": ["tslib"],
                "pkg-exception-reporting": ["modules/core/exception_tag_registry", "modules/core/exception", "modules/clean/csrf", "TraceKit", "modules/core/xhr", "modules/core/cookies", "modules/shims/tracekit"]
            },
            "baseUrl": "https://cfl.dropboxstatic.com/static/",
            "context": "externals",
            "paths": {
                "jquery": "compiled/js/external/jquery_bundle/jquery_bundle.min-vflnJvurG",
                "pkg-react-prod": "compiled/js/packaged/pkg-react-prod.min-vfloICnYi",
                "pkg-external": "compiled/js/packaged/pkg-external.min-vfl553em9",
                "pkg-exception-reporting": "compiled/js/packaged/pkg-exception-reporting.min-vflYAMP6n",
                "compiled/js/langpack/en.json": "compiled/js/langpack/en.json?18178"
            },
            "nodeIdCompat": true
        }, {
            "reusingContext": false,
            "exceptionModule": "modules/core/exception",
            "requireFallbackBaseUrl": "https://www.dropboxstatic.com/static/",
            "deferJs": false
        }, [
            [
                [
                    ["jquery"], (function(jQuery) {;
                    }), "require-tier-appshell-jquery"
                ],
                [
                    ["react", "react-dom"], (function(React, ReactDOM) {;
                    }), "require-tier-appshell-require-react"
                ]
            ]
        ]);
    