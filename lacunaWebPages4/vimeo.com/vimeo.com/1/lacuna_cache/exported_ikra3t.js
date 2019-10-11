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

                var showVariant = function() {lacuna_lazy_load("lacuna_cache/exported_ikra3t.js[46:971]", functionData => eval(functionData))                    showElements(document.querySelectorAll('.js-top_nav_new'));
                    }
                };
                showVariant();
            