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

            var footerTimer = setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_yhh6bw.js[53:416]", functionData => eval(functionData))                       cardsData: []
                        });
      lacuna_lazy_load("lacuna_cache/exported_yhh6bw.js[485:543]", functionData => eval(functionData)));

            P.when('merch-data-store').execute(function() {___jdce_logger("lacuna_cache/exported_yhh6bw.js", 474, 543);
                clearTimeout(footerTimer);
            });
        