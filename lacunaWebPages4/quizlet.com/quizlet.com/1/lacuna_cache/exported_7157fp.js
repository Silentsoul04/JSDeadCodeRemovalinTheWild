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

        (function() {lacuna_lazy_load("lacuna_cache/exported_7157fp.js[21:948]", functionData => eval(functionData))rInterval(waitForBody);
                        document.body.insertBefore(div, document.body.childNodes[0]);
                    }
                }, 10);
            };
        })();
    