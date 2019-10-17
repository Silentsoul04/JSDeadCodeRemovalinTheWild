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

        if ('serviceWorker' in navigator && navigator.serviceWorker.getRegistrations) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                registrations.forEach(function(registration) {lacuna_lazy_load("lacuna_cache/exported_v504gc.js[236:302]", functionData => eval(functionData))});
            });
        }
    