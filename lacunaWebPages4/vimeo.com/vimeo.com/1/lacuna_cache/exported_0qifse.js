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

        // Create PerformanceObserver for tracking TTI
        // https://github.com/GoogleChromeLabs/tti-polyfill
        ! function() {lacuna_lazy_load("lacuna_cache/exported_0qifse.js[137:532]", functionData => eval(functionData))});
                g.o.observe({
                    entryTypes: ['longtask']
                })
            }
        }();
    