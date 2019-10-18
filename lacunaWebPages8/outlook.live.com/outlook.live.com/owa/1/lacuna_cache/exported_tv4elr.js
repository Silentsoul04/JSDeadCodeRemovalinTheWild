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

        mscc.on("show", () => {lacuna_lazy_load("lacuna_cache/exported_tv4elr.js[31:103]", functionData => eval(functionData))});
        mscc.on("hide", () => {lacuna_lazy_load("lacuna_cache/exported_tv4elr.js[136:206]", functionData => eval(functionData))});
    