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

        (function() {lacuna_lazy_load("lacuna_cache/exported_7lq5bm.js[21:5283]", functionData => eval(functionData))   lp_name: a8cGAOptimize.a8cAnalytics.config.lpName,
                        lp_variation: a8cGAOptimize.a8cAnalytics.config.lpVariation,
                        lp_personal_variation: a8cGAOptimize.a8cAnalytics.config.lpPersonalVariation,
                        experiment_id: experimentId,
                        variation_id: variationId,
                    };
                    a8cGAOptimize.refs.tracked[experimentId] = variationId;
                    window._tkq.push(['recordEvent', 'wpcom_gaexp_start', props]);
                },
            };

            if (a8cGAOptimize.isEnabled()) {
                a8cGAOptimize.startAsyncDim();
            }
        })();
    