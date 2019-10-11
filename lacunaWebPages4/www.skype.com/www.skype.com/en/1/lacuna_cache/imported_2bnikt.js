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
var mscc;!function(e){lacuna_lazy_load("lacuna_cache/imported_2bnikt.js[21:3542]", functionData => eval(functionData))}(mscc||(mscc={}));