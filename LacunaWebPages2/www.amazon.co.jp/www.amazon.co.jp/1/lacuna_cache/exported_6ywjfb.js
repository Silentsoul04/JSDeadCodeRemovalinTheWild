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

            (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('navCF').execute(function() {lacuna_lazy_load("lacuna_cache/exported_6ywjfb.js[91:522]", functionData => eval(functionData))ients/RetailSearchAutocompleteAssets#mobile');
            });
        