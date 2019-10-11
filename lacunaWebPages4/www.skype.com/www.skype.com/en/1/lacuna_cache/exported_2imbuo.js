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
            ['home', 'masterModule', 'uhfHeader']
        ], function(uhf) {lacuna_lazy_load("lacuna_cache/exported_2imbuo.js[101:136]", functionData => eval(functionData))});
    