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

        var pageloadValidAds = ["WFPAD"];
        var pageloadNonCollapsedAds = ["WFPAD"];
        var bucketSAEnabled = true;
        var darlaJsAsyncEnabled = false;
        var darlaJsAsyncPollTimeout = 10000;
        var segBlob = {"pt":"home","ver":"ss"};
        var isMON2Valid = false;
        
        
        
        
        
        var D, C,
            _adPerfBeaconData,
            _pendingAds = [],
            _adLT = [];

        function darlaOnready() {lacuna_lazy_load("lacuna_cache/exported_exqkpk.js[476:10071]", functionData => eval(functionData))}
        function darlaOnreadyPoll(callback, timeout, interval) {lacuna_lazy_load("lacuna_cache/exported_exqkpk.js[10135:10720]", functionData => eval(functionData))}

        if (darlaJsAsyncEnabled) {
            window.DARLA ? darlaOnready() : darlaOnreadyPoll(darlaOnready, darlaJsAsyncPollTimeout, 10);
        } else {
            darlaOnready();
        }
    