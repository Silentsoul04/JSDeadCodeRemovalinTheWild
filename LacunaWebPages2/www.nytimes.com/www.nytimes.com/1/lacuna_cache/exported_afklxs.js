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

        if (window.NYTD.Abra('dfp_home_toggle') !== '1_block') {

            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];

            if (testCookie('nyt-gdpr') == '1') {
                googletag.cmd.push(function() {lacuna_lazy_load("lacuna_cache/exported_afklxs.js[257:348]", functionData => eval(functionData))});
            }
        }
    