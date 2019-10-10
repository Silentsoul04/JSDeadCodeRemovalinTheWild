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

        (function(c) {lacuna_lazy_load("lacuna_cache/exported_gegsqb.js[22:319]", functionData => eval(functionData))on() {___jdce_logger("lacuna_lazy_load("lacuna_cache/exported_gegsqb.js[339:2102]", functionData => eval(functionData))scrollTop)) : c.when("fetch-merch-data-store").execute(function(a) {___jdce_logger("lacuna_cache/exported_gegsqb.js", 1915, 1971);
                    a(f)
                });
                c.declare("cardHistoryReady", 1)
            });
            c.declare("gwm-history-asset-loaded", {})
        });
    