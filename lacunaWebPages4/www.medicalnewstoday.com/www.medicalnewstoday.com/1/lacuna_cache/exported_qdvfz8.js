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

        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        (function() {lacuna_lazy_load("lacuna_cache/exported_qdvfz8.js[107:535]", functionData => eval(functionData))         node.parentNode.insertBefore(gads, node);
        })();
    