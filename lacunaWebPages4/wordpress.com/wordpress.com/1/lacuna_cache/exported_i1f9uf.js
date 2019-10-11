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

        (function($) {lacuna_lazy_load("lacuna_cache/exported_i1f9uf.js[22:347]", functionData => eval(functionData))s\/a8c-analytics.js?v=1570654147",
            });
        })(window.jQuery);
    