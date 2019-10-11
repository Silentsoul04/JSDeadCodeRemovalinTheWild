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

            fireOrSaveJsFunctions(1, function() {lacuna_lazy_load("lacuna_cache/exported_sxaxf0.js[49:278]", functionData => eval(functionData))              function() {___jdce_logger("lacuna_cache/exported_sxaxf0.js", 232, 245);}

                )
            });
        