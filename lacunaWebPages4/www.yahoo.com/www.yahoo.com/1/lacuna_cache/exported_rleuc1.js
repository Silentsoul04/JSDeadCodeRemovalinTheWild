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

                /* version: 0.0.15 */
                window.NotificationClient = function() {lacuna_lazy_load("lacuna_cache/exported_rleuc1.js[94:24376]", functionData => eval(functionData))}();
                //# sourceMappingURL=notificationClient.min.js.map
                ! function() {lacuna_lazy_load("lacuna_cache/exported_rleuc1.js[24476:31401]", functionData => eval(functionData))}();
            