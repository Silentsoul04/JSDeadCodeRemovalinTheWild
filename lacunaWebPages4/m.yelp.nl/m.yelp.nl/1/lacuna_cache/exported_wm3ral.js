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

        (function() {lacuna_lazy_load("lacuna_cache/exported_wm3ral.js[21:17934]", functionData => eval(functionData))enable_high_volume_events: this.enableHighVolumeEvents
                        }
                    }, e.init = function(t) {___jdce_logger("lacuna_cache/exported_wm3ral.js", 14187, 14268);
                        e.instance = new e(t)
                    }, e.getInstance = function() {___jdce_logger("lacuna_cache/exported_wm3ral.js", 14286, 14537);
                        var t = e.instance;
                        if (null == t) throw Error("yelp_google_analytics.GoogleAnalytics not initialized. Call a site-specific GA init!");
                        return t
                    }, e
                }();
                r(g, "instance", void 0);
                t.a = g
            }, function(e, t, i) {___jdce_logger("lacuna_cache/exported_wm3ral.js", 14643, 14853);
                "use strict";
                t.a = function() {___jdce_logger("lacuna_cache/exported_wm3ral.js", 14715, 14839);
                    var e;
                    return (e = window).jQuery.apply(e, arguments)
                }
            }, function(e, t, i) {___jdce_logger("lacuna_cache/exported_wm3ral.js", 14855, 15958);
                "use strict";
                ! function() {___jdce_logger("lacuna_cache/exported_wm3ral.js", 14923, 15942);
                    Object.keys || (Object.keys = function() {___jdce_logger("lacuna_cache/exported_wm3ral.js", 14986, 15921);
                        var e = Object.prototype.hasOwnProperty,
                            t = !{
                                toString: null
                            }.propertyIsEnumerable("toString"),
                            i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                            n = i.length;
                        return function(r) {___jdce_logger("lacuna_cache/exported_wm3ral.js", 15432, 15899);
                            if ("object" != typeof r && ("function" != typeof r || null === r)) throw new TypeError("Object.keys called on non-object");
                            var o, s, a = [];
                            for (o in r) e.call(r, o) && a.push(o);
                            if (t)
                                for (s = 0; s < n; s++) e.call(r, i[s]) && a.push(i[s]);
                            return a
                        }
                    }())
                }()
            }, , function(e, t, i) {___jdce_logger("lacuna_cache/exported_wm3ral.js", 15962, 16532);
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = i(1),
                    r = function(e, t) {___jdce_logger("lacuna_cache/exported_wm3ral.js", 16173, 16323);
                        n.a.init(e), n.a.getInstance().firePageviews(t), n.a.getInstance().initDwellTimeEvent()
                    },
                    o = r;
                window.yelp_google_analytics = {
                    google_analytics: n.a
                }, window.ygaPageStartTime = (new Date).getTime(), main = o
            }]);

            if (main === null) {
                throw 'invalid inline script, missing main declaration.';
            }
            main({
                "clientID": "F6D166CE336BA04E",
                "dimensions": {
                    "m": {
                        "distil": [47, null],
                        "distil_js_enabled": [97, null],
                        "full_url": [34, "/"],
                        "internal_ip": [35, false],
                        "referrer": [53, "none"]
                    },
                    "global": {
                        "distil": [12, null],
                        "distil_js_enabled": [13, null],
                        "full_url": [15, "/"],
                        "internal_ip": [18, false],
                        "referrer": [28, "none"]
                    }
                },
                "domain": "m.yelp.nl",
                "enable_high_volume_events": false,
                "ga_enabled": true,
                "js_dimensions": {
                    "m": {},
                    "global": {}
                },
                "metrics": {
                    "m": {},
                    "global": {}
                },
                "trackers": {
                    "m": "UA-30501-46",
                    "global": "UA-30501-1"
                },
                "user_id": null
            }, "/home/");
        })();
    