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
            var _comscore = _comscore || [];
            window.__cmp('getVendorConsents', null, function(result, success) {lacuna_lazy_load("lacuna_cache/exported_ve68cz.js[123:895]", functionData => eval(functionData))});		