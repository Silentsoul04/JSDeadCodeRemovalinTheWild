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

            function displayError() {lacuna_lazy_load("lacuna_cache/exported_ry7ud6.js[37:275]", functionData => eval(functionData))}
            setTimeout(displayError, 15e3), window.onerror = displayError
        