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

        QWait("dom", function() {lacuna_lazy_load("lacuna_cache/exported_ggp6oh.js[33:166]", functionData => eval(functionData))"\/a\/i\/logo\/Quizlet-print.1cb9134976f36dc.png")
        });
    