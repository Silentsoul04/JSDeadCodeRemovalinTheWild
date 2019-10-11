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

        fireOrSaveJsFunctions(1, function() {lacuna_lazy_load("lacuna_cache/exported_q6edpr.js[45:710]", functionData => eval(functionData))m/structure/javascript/cache/beacon.js";
                el.parentNode.insertBefore(s, el);
            })();

        })
    