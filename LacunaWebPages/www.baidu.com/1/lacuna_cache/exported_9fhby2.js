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

        window.rain = {
            stack: [],
            loadModule: function(moduleName) {lacuna_lazy_load("lacuna_cache/exported_9fhby2.js[93:160]", functionData => eval(functionData))},
            event: {}
        };
        ! function(v) {lacuna_lazy_load("lacuna_cache/exported_9fhby2.js[217:442]", functionData => eval(functionData))}(window);;
    