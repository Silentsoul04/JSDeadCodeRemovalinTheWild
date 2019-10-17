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

                    B.load(function() {
                        require(['wiseindex/lib/ivk/a4/carousel'], function(index) {lacuna_lazy_load("lacuna_cache/exported_o9ps5z.js[124:321]", functionData => eval(functionData))});
                    });
                