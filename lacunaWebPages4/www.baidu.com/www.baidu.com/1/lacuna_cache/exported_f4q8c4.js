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

            ! function(a) {
                a.B.fire = function(mod, a, w) {lacuna_lazy_load("lacuna_cache/exported_f4q8c4.js[76:208]", functionData => eval(functionData))};
                var c = a.B.fire.firePool = {}
            }(window);
        