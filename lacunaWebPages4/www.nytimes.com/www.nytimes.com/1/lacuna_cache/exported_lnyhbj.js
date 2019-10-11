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

        var alsVariant = window.NYTD.Abra('DFP_als');
        if (alsVariant != null && alsVariant.match(/(0_control|1_als)/)) {
            window.NYTD.Abra.reportExposure('DFP_als');
        }
        if (window.NYTD.Abra('DFP_als') === '1_als') {
            (function() {lacuna_lazy_load("lacuna_cache/exported_lnyhbj.js[275:3599]", functionData => eval(functionData))})();
        }
    