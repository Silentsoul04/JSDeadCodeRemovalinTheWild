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

        (function(base, min, max, scaling) {lacuna_lazy_load("lacuna_cache/exported_1677tn.js[44:954]", functionData => eval(functionData))resizeEvt, function() {___jdce_logger("lacuna_cache/exported_1677tn.js", 845, 920);
                timer = setInterval(recalc, 10);
            });
            recalc();
        })(375, 300, 768, 100);
    