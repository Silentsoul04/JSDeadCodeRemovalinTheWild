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
!function(e,t){lacuna_lazy_load("lacuna_cache/imported_e2b4yh.js[14:198]", functionData => eval(functionData))}("undefined"!=typeof self?self:this,function(){lacuna_lazy_load("lacuna_cache/imported_e2b4yh.js[244:44127]", functionData => eval(functionData))});