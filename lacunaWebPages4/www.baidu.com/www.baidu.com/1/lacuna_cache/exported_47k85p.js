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

        window.rain = {
            stack: [],
            loadModule: function(moduleName) {
                window.rain.stack.push(moduleName);
            },
            event: {}
        };
        ! function(v) {
            var w = v.rain.event,
                h = w.firePool = {};
            w.fire = function(mod, v, w) {lacuna_lazy_load("lacuna_cache/exported_47k85p.js[331:432]", functionData => eval(functionData))}
        }(window);;
    