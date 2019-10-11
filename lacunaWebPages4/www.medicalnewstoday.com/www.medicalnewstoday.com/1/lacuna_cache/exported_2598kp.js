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

        ! function(a9, a, p, s, t, A, g) {lacuna_lazy_load("lacuna_cache/exported_2598kp.js[42:639]", functionData => eval(functionData)): function() {___jdce_logger("lacuna_cache/exported_2598kp.js", 402, 415);},
                _Q: []
            };
            A = p.createElement(s);
            A.async = !0;
            A.src = t;
            g = p.getElementsBlacuna_lazy_load("lacuna_cache/exported_2598kp.js[867:1329]", functionData => eval(functionData))', null, function(vendorConsentData, success) {___jdce_logger("lacuna_cache/exported_2598kp.js", 978, 1241);
                    initParams.gdpr = {
                        enabled: true,
                        consent: vendorConsentData.metadata
                    };
                    apstag.init(initParams);
                });
            } else {
                apstag.init(initParams);
            }
        });
    