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

            window.bk_async = function() {lacuna_lazy_load("lacuna_cache/exported_9xk8et.js[42:314]", functionData => eval(functionData))one');
                BKTAGlacuna_lazy_load("lacuna_cache/exported_9xk8et.js[340:647]", functionData => eval(functionData)) = "https://tags.bkrtx.com/js/bk-coretag.js";
                scripts.parentNode.insertBefore(s, scripts);
            }());
        