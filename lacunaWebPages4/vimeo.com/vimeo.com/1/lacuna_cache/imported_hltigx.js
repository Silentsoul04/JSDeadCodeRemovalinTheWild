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
(function(){lacuna_lazy_load("lacuna_cache/imported_hltigx.js[11:2102]", functionData => eval(functionData))})();(function(){lacuna_lazy_load("lacuna_cache/imported_hltigx.js[2117:6169]", functionData => eval(functionData))})();