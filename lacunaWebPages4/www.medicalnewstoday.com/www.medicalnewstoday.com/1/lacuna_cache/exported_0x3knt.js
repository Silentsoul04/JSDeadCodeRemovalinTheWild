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

        fireOrSaveJsFunctions(1, function() {lacuna_lazy_load("lacuna_cache/exported_0x3knt.js[45:912]", functionData => eval(functionData))/connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1039134266174910');
            fbq('track', "PageView");

            fbq('track', 'ViewContent');

        });
    