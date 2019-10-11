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

        /*SEARCH POST*/
        $('#search-top').on('click', function(e) {lacuna_lazy_load("lacuna_cache/exported_3zlyzx.js[74:240]", functionData => eval(functionData))});
        $('#textfield').on('keyup', function(e) {lacuna_lazy_load("lacuna_cache/exported_3zlyzx.js[291:504]", functionData => eval(functionData))});
    