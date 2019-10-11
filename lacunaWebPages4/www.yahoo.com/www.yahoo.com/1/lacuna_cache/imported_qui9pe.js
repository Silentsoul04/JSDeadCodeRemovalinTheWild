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
!function(e,t){lacuna_lazy_load("lacuna_cache/imported_qui9pe.js[14:306]", functionData => eval(functionData))}("undefined"!=typeof self?self:this,function(){lacuna_lazy_load("lacuna_cache/imported_qui9pe.js[352:20017]", functionData => eval(functionData))});