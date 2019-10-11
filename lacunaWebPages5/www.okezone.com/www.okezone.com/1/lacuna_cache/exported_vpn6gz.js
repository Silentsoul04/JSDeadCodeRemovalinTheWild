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

        /*GA send Click*/
        $(function() {
            var channel = 'WP Mobile';

            $('.ga_AdsTester').click(function() {lacuna_lazy_load("lacuna_cache/exported_vpn6gz.js[138:261]", functionData => eval(functionData))});
            $('.ga_AdsTester').contextmenu(function() {lacuna_lazy_load("lacuna_cache/exported_vpn6gz.js[318:446]", functionData => eval(functionData))});


        });
    