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

        ! function(v) {lacuna_lazy_load("lacuna_cache/exported_apjc2z.js[23:1813]", functionData => eval(functionData))}(window);;
        (function(global) {lacuna_lazy_load("lacuna_cache/exported_apjc2z.js[1850:5513]", functionData => eval(functionData))})(window);
    