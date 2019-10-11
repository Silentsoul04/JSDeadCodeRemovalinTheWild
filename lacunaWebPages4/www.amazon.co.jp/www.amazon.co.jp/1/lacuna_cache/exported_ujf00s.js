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

        (function() {lacuna_lazy_load("lacuna_cache/exported_ujf00s.js[21:2649]", functionData => eval(functionData))             ue.tag(csmTag);

                                logMetric('fetchStart', resources[i].fetchStart);
                                logMetric('duration', resources[i].duration);
                                logMetric('transferSize', resources[i].transferSize);
                            }
                        }
                    });
                };
            cfPerformanceFunc(cfImages);
        }());
    