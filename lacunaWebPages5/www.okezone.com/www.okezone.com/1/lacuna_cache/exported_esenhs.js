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

        /*SSO AJAX CALL*/
        var canal = 'wp';
        $.ajax({
            type: 'GET',
            url: 'https://www.okezone.com/okezoneid/mobileapps',
            dataType: 'json',
            success: function(data) {lacuna_lazy_load("lacuna_cache/exported_esenhs.js[226:340]", functionData => eval(functionData))}
        });
    