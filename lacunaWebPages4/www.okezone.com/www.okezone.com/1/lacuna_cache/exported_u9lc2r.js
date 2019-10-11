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

        $(".hitshare").click(function(event) {lacuna_lazy_load("lacuna_cache/exported_u9lc2r.js[46:540]", functionData => eval(functionData))});
    