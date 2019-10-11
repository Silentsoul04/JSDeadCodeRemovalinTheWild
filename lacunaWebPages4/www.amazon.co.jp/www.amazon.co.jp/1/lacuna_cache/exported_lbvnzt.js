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

                            (function() {lacuna_lazy_load("lacuna_cache/exported_lbvnzt.js[41:13943]", functionData => eval(functionData))/G/09/ape/sf/mobile/MAsf-1.50.a6f2e15._V451370920_.js?csm_attribution=APE-SafeFrame";
                                                    o.onerror = function() {___jdce_logger("lacuna_cache/exported_lbvnzt.js", 13099, 13259);
                                                        p("Error loading SafeFrame library");
                                                    };
                                                    o.setAttribute("crossorigin", "anonymous");
                                                    (n.getElementsByTagName("head")[0] || n.getElementsByTagName("body")[0]).appendChild(o);
                                                }
                                            } catch (k) {
                                                p("Error appending MAsf library", k);
                                            }
                                        }(window, document));
                                    })();
                                };
                                b();
                            })();
                        