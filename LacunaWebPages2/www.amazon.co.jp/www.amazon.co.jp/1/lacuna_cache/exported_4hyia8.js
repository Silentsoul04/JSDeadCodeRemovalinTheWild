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

        (function(l) {lacuna_lazy_load("lacuna_cache/exported_4hyia8.js[22:317]", functionData => eval(functionData))on() {___jdce_logger("lacuna_lazy_load("lacuna_cache/exported_4hyia8.js[337:7182]", functionData => eval(functionData))[0].getBoundingClientRect().top + c.pageYOffset < c.innerHeight) {
                                h = 0;
                                if (gm.r("taw")) return;
                                gm.s("taw", 1);
                                l.when("A").execute(function(a) {___jdce_logger("lacuna_cache/exported_4hyia8.js", 6093, 6915);
                                    var b = a.once(function() {___jdce_logger("lacuna_cache/exported_4hyia8.js", 6158, 6684);
                                        var a = [],
                                            b, c;
                                        gm.s("taw", 0);
                                        b = document.getElementsByTagName("img");
                                        for (c = 0; c < b.length; c++) - 1 === f.indexOf(b[c].src) && a.push(b[c].src);
                                        f = a;
                                        gm.ail(f, gwmAf.onImageLoad)
                                    });
                                    a.state.bind("gwm-card-loader", function(a, c) {___jdce_logger("lacuna_cache/exported_4hyia8.js", 6755, 6880);
                                        c.request && !a.request && b()
                                    })
                                })
                            }
                            h && (gm.s("hfa", 1), gm.mse("af", "gwm", {
                                ld: 1
                            }))
                        }
                    }
                }
            })(m)
        });
    