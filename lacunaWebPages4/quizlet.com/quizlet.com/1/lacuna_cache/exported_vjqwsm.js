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

        window.ga = function() {lacuna_lazy_load("lacuna_cache/exported_vjqwsm.js[32:91]", functionData => eval(functionData));
            (ga.q = ga.q || []).push(arguments)
        };
   lacuna_lazy_load("lacuna_cache/exported_vjqwsm.js[153:200]", functionData => eval(functionData)) function() {___jdce_logger("lacuna_cache/exported_vjqwsm.jslacuna_lazy_load("lacuna_cache/exported_vjqwsm.js[258:305]", functionData => eval(functionData))nts)
        };
        QWait.p = [];
        window.QLoad = function() {___jdce_logger("lacuna_cache/exported_vjqwsm.js", 247, 305);
            QLoad.p.push(arguments)
        };
        QLoad.p = [];
        window.QJP = [];
    