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
!function(e){lacuna_lazy_load("lacuna_cache/imported_s7ifdf.js[12:276]", functionData => eval(functionData))}(function(){lacuna_lazy_load("lacuna_cache/imported_s7ifdf.js[287:35930]", functionData => eval(functionData))});!function(e){lacuna_lazy_load("lacuna_cache/imported_s7ifdf.js[35944:36216]", functionData => eval(functionData))}(function(e){lacuna_lazy_load("lacuna_cache/imported_s7ifdf.js[36228:159538]", functionData => eval(functionData))});!function(e,t){lacuna_lazy_load("lacuna_cache/imported_s7ifdf.js[159554:159727]", functionData => eval(functionData))}(this,function(e,t){lacuna_lazy_load("lacuna_cache/imported_s7ifdf.js[159746:201561]", functionData => eval(functionData))});