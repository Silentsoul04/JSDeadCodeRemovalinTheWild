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

        var googleDegfaultAdVars = {
            "main": "'homepage'",
            "msiteactive": "'False'",
            "sponsoredPageNid": "''"
        };
        var googleAdSlotInfo = [];
        fireOrSaveGoogleAdFunctions(function() {lacuna_lazy_load("lacuna_cache/exported_hqbc4l.js[240:451]", functionData => eval(functionData))ltAdVars.k2 || ""
                }
            });
        });
    