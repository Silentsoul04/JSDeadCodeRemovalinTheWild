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

            window.addEventListener("load", function() {lacuna_lazy_load("lacuna_cache/exported_job3tq.js[56:345]", functionData => eval(functionData))b: 1
                    });
                }
            });
        