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
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){lacuna_lazy_load("lacuna_cache/imported_1jjjfr.js[100:310]", functionData => eval(functionData))}("undefined"!=typeof window?window:this,function(C,e){lacuna_lazy_load("lacuna_cache/imported_1jjjfr.js[363:88143]", functionData => eval(functionData))});