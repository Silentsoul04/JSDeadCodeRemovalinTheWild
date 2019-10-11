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

        (function(a, s, y, n, c, h, i, d, e) {lacuna_lazy_load("lacuna_cache/exported_bwtltx.js[46:427]", functionData => eval(functionData))t(function() {___jdce_logger("lacuna_cache/exported_bwtltx.js", 309, 385);
                i();
                h.end = null
            }, c);
            h.timeout = c;
        })(window, document.documentElement, 'async-hide', 'dataLayer', 4000, {
            'GTM-W59HFNJ': true
        });
    