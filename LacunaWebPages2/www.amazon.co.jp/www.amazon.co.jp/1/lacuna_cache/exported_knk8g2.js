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

        (function(a, b) {lacuna_lazy_load("lacuna_cache/exported_knk8g2.js[25:149]", functionData => eval(functionData))})(window, function() {lacuna_lazy_load("lacuna_cache/exported_knk8g2.js[170:691]", functionData => eval(functionData))});
    