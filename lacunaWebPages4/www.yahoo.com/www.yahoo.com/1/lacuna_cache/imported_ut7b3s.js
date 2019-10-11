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
!function(e,t){lacuna_lazy_load("lacuna_cache/imported_ut7b3s.js[14:195]", functionData => eval(functionData))}("undefined"!=typeof self?self:this,function(){lacuna_lazy_load("lacuna_cache/imported_ut7b3s.js[241:95185]", functionData => eval(functionData))});