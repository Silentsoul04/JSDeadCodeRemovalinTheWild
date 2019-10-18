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

        if (typeof window.__cmp === 'undefined') {
            var count = 0;
            window.__cmp = function() {lacuna_lazy_load("lacuna_cache/exported_0yyfin.js[117:663]", functionData => eval(functionData))}
        }
    