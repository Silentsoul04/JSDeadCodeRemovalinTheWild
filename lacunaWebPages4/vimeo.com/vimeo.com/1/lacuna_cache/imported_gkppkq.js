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
if(!Date.now){Date.now=function(){lacuna_lazy_load("lacuna_cache/imported_gkppkq.js[33:61]", functionData => eval(functionData))}}(function(){lacuna_lazy_load("lacuna_cache/imported_gkppkq.js[73:751]", functionData => eval(functionData))})();