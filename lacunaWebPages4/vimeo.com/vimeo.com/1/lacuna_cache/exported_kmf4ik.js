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

        (function() {lacuna_lazy_load("lacuna_cache/exported_kmf4ik.js[21:1109]", functionData => eval(functionData))          node.parentNode.insertBefore(gtms, node);
        })();
    