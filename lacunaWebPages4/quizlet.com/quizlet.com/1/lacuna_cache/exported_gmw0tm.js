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

        (function(g, b) {lacuna_lazy_load("lacuna_cache/exported_gmw0tm.js[25:2965]", functionData => eval(functionData))ce_logger("lacuna_cache/exported_gmw0tm.js", 2397, 2882);
                    var a =
                        b.getCsToken();
                    Request.prototype.options.headers = {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "text/javascript, text/html, application/xml, text/xml, */*",
                        "Cs-Token": a
                    };
                    Request.prototype.options.data = {
                        cstoken: a
                    }
                };
                a();
                setInterval(a, 3E3)
            })
        })(document, Quizlet);
    