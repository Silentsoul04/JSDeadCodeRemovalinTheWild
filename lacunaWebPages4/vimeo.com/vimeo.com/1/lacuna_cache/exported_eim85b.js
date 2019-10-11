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

        (function() {lacuna_lazy_load("lacuna_cache/exported_eim85b.js[21:4196]", functionData => eval(functionData))elector('.gdpr_dismiss').addEventListener('click', gdprOptIn);
            }

            if (document.readyState === 'interactive' || document.readyState === 'complete') {
                handleGDPR();
                return;
            }

            window.addEventListener('load', handleGDPR);
        }());
    