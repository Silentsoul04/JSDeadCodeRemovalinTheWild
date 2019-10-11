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

        var googletag = googletag || {},
            gptadslots = [],
            language,
            has_uploaded,
            cohort;
        googletag.cmd = googletag.cmd || [];

        (function() {lacuna_lazy_load("lacuna_cache/exported_0qb87u.js[205:851]", functionData => eval(functionData))          node.parentNode.insertBefore(gads, nolacuna_lazy_load("lacuna_cache/exported_0qb87u.js[896:2267]", functionData => eval(functionData))leAsyncRendering();
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
        });
    