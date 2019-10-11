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

        fireOrSaveJsFunctions(1, function() {lacuna_lazy_load("lacuna_cache/exported_0sh82m.js[45:4187]", functionData => eval(functionData))+ c
                } catch (a) {
                    try {
                        var y = "//pixel.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=MOATCONTENTABSNIPPET1&vc=2&ac=1&k=" + encodeURIComponent(a) + "&j=" + encodeURIComponent(document.referrer) + "&cs=" + (new Date).getTime();
                        (new Image).src = y
                    } catch (e) {}
                }
            })();


        });
    