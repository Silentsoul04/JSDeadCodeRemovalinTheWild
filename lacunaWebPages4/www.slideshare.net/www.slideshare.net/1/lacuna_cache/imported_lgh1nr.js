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
!function(e){lacuna_lazy_load("lacuna_cache/imported_lgh1nr.js[12:1559]", functionData => eval(functionData))}(window),function(e){lacuna_lazy_load("lacuna_cache/imported_lgh1nr.js[1579:2300]", functionData => eval(functionData))}(window),function(e,t){lacuna_lazy_load("lacuna_cache/imported_lgh1nr.js[2322:4096]", functionData => eval(functionData))}(window,window.localStorage||{}),function(e){lacuna_lazy_load("lacuna_cache/imported_lgh1nr.js[4140:4348]", functionData => eval(functionData))}(window),function(e){lacuna_lazy_load("lacuna_cache/imported_lgh1nr.js[4368:4532]", functionData => eval(functionData))}(window);