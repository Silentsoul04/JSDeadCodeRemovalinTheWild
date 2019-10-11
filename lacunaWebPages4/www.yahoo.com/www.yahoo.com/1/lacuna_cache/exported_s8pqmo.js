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

                window.Y = window.Y || {};
                window.Y.utils = window.Y.utils || {};
                window.Y.utils.ready = function ready(callback) {lacuna_lazy_load("lacuna_cache/exported_s8pqmo.js[163:961]", functionData => eval(functionData))};
                (function () {lacuna_lazy_load("lacuna_cache/exported_s8pqmo.js[992:14123]", functionData => eval(functionData))}());
            