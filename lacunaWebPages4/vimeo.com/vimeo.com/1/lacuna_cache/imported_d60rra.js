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
!function(a){lacuna_lazy_load("lacuna_cache/imported_d60rra.js[12:276]", functionData => eval(functionData))}(function(){lacuna_lazy_load("lacuna_cache/imported_d60rra.js[287:22153]", functionData => eval(functionData))});(function(){lacuna_lazy_load("lacuna_cache/imported_d60rra.js[22166:22731]", functionData => eval(functionData))})();