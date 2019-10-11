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

                                        QWait('Quizlet.iconUtils', function() {lacuna_lazy_load("lacuna_cache/exported_xpcstv.js[79:202]", functionData => eval(functionData)).loadIcon("image")
                                        })
                                    