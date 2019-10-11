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

        //ADBRIDG MIGRATION: Load the Adbridg library directly after the GPT library. 
        var AdBridg = AdBridg || {};
        AdBridg.cmd = AdBridg.cmd || [];
        window.adbridgFallback = function() {lacuna_lazy_load("lacuna_cache/exported_olizc9.js[210:5809]", functionData => eval(functionData))nViewable');
                                   lacuna_lazy_load("lacuna_cache/exported_olizc9.js[5855:6620]", functionData => eval(functionData))raw", 'impressionViewable');
                            }
                        });
                    }
                    if (f.length) {
                        for (var i = 0; i < f.length; ++i) {
                            api_fallback(f[i]);
                        }
                    } else {
                        api_fallback(f);
                    }
                    f = function() {___jdce_logger("lacuna_cache/exported_olizc9.js", 5537, 5611);
                        AdBridg.serve()
                    }
                }
                return googletag.cmd.push(f);
            }
            while (AdBridg.cmd.length) {
                AdBridg.cmd.push(AdBridg.cmd.shift());
            }
        };
        fireOrSaveJsFunctions(1, function() {___jdce_logger("lacuna_cache/exported_olizc9.js", 5844, 6620);
            (function() {___jdce_logger("lacuna_cache/exported_olizc9.js", 5870, 6606);
                var adb = document.createElement("script");
                adb.async = true;
                adb.type = "text/javascript";
                adb.src = '//prod.adspsp.com/adb.2418030m.min.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(adb, node);

                // Return control to GPT if the AdBridg library fails to load.
                adb.onerror = function() {___jdce_logger("lacuna_cache/exported_olizc9.js", 6328, 6592);
                    if (AdBridg.exists) {
                        return;
                    }
                    document.createElement('IMG').src = '//adspsp.com/pt/2418030/3/1/?e=0';
                    window.adbridgFallback();
                }
            })();
        });
    