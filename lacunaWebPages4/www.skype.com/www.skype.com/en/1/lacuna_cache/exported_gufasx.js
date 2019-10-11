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

        artemisRequire([
            ['home', 'masterModule', 'apolloDevice'],
            ['home', 'masterModule', 'apolloResponsive']
        ], function(skypeDevice, skypeResponsive) {lacuna_lazy_load("lacuna_cache/exported_gufasx.js[187:1590]", functionData => eval(functionData))});
    