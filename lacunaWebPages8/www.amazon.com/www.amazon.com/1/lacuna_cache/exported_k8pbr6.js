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

            (function(i) {
                i.onload = function() {lacuna_lazy_load("lacuna_cache/exported_k8pbr6.js[66:129]", functionData => eval(functionData))};
                i.src = window._navbarSpriteUrl;
            }(new Image()));
            var nav_t_end_nav = +new Date();
        