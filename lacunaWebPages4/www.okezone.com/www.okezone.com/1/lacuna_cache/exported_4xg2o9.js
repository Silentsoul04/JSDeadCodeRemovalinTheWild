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

        $(document).ready(function() {

            $.ajax({
                url: 'https://www.okezone.com/no-cache/beritaandawidget',
                type: 'GET',
                success: function(data) {lacuna_lazy_load("lacuna_cache/exported_4xg2o9.js[205:318]", functionData => eval(functionData))}
            });
        });
    