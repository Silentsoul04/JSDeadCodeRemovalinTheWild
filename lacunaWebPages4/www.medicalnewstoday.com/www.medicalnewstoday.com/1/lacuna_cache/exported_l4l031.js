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

            window.ga = window.ga || function() {lacuna_lazy_load("lacuna_cache/exported_l4l031.js[49:51]", functionData => eval(functionData))___jdce_logger("lacuna_cache/exported_l4l031.js", 38, 51);};
            if (typeof window.googletag === 'undefined') {
                //Fallback safe for googletag
                var googletag = googletag || {};
                googletag.cmd = googletag.cmd || [];
            }

            //Fallback for Adbridg
            if (typeof window.AdBridg === 'undefined') {
                var AdBridg = AdBridg || {};
                AdBridg.cmd = AdBridg.cmd || [];
            }
        