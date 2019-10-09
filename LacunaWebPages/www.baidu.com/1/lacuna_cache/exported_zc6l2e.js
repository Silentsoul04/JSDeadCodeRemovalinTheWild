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

                            var define;
                            var require;
                            var esl;
                            (function(b) {lacuna_lazy_load("lacuna_cache/exported_zc6l2e.js[160:53481]", functionData => eval(functionData))})(this);
                            define("css", {
                                load: function(e, c, d) {lacuna_lazy_load("lacuna_cache/exported_zc6l2e.js[53590:54211]", functionData => eval(functionData))}
                            });;
                        