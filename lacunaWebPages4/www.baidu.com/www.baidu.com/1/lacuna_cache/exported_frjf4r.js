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

                            define("newtab/start/rtstart", function() {lacuna_lazy_load("lacuna_cache/exported_frjf4r.js[71:844]", functionData => eval(functionData))});
                            window.B.init(function() {lacuna_lazy_load("lacuna_cache/exported_frjf4r.js[900:1091]", functionData => eval(functionData))});;
                        