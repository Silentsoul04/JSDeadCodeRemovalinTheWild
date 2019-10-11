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
            ['home', 'toggleModule']
        ], function(toggle) {lacuna_lazy_load("lacuna_cache/exported_do4b9t.js[91:642]", functionData => eval(functionData))});
    