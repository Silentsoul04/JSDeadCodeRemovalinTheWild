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

        /*! CMP 2.18.1 Copyright 2018 Oath Holdings, Inc. */ ! function(e) {lacuna_lazy_load("lacuna_cache/exported_322cvr.js[76:1047]", functionData => eval(functionData))}({
            2: function(e, t) {lacuna_lazy_load("lacuna_cache/exported_322cvr.js[1080:3088]", functionData => eval(functionData))}
        });
    