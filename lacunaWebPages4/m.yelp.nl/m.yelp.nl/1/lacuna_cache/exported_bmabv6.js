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

        (function() {lacuna_lazy_load("lacuna_cache/exported_bmabv6.js[21:456]", functionData => eval(functionData))ain declaration.';
            }
            main("mobile_site", "952104dd24f2a1d23a195e0d36e853166e9a0e9b");
        })();
    