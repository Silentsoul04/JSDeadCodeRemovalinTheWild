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

        glob_JS = (typeof glob_JS === 'undefined') ? {
            'GAInit': [],
            'GA': [],
            "ExternalJS": [],
            "AD": []
        } : glob_JS;

        glob_TrueOnGDPR = (glob_mntcookie != 1);

        //if use GDPR is true, we need this flag to make sure ga queue can ber execute after ga is ready
        glob_isGaReady = !glob_TrueOnGDPR;



        if (typeof fireOrSaveGoogleAdFunctions === 'undefined') {



            function fireOrSaveGoogleAdFunctions(adFunction) {lacuna_lazy_load("lacuna_cache/exported_rg8wv9.js[508:1008]", functionData => eval(functionData))tion);

                    }
                }

            }

   lacuna_lazy_load("lacuna_cache/exported_rg8wv9.js[1073:2714]", functionData => eval(functionData)) fire ad function
                        fireJS(jsType, jsFunctilacuna_lazy_load("lacuna_cache/exported_rg8wv9.js[2777:3910]", functionData => eval(functionData))3600, 3764);

                        if (typeof callback === 'function') {
                            callback();
                        }

                    };
                }

                script.src = url;
                document.getElementsByTagName("head")[0].appendChild(script);
            }



        }
    