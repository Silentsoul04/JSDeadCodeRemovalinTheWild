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

        fireOrSaveJsFunctions(1, function() {lacuna_lazy_load("lacuna_cache/exported_grh0y0.js[45:742]", functionData => eval(functionData))scpt);
            })();

            _qevents.push({
                qacct: "p-v03RmX3GES6RT"
            });
        });
    