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

        function onArtemisLoad(callback) {lacuna_lazy_load("lacuna_cache/exported_h00fc6.js[42:220]", functionData => eval(functionData))}
        window.artemisRequire = function(paths, callback) {lacuna_lazy_load("lacuna_cache/exported_h00fc6.js[279:1004]", functionData => eval(functionData))};
        window.skypeArtemis = (function(source) {lacuna_lazy_load("lacuna_cache/exported_h00fc6.js[1054:3548]", functionData => eval(functionData))})(window.skypeArtemis);
    