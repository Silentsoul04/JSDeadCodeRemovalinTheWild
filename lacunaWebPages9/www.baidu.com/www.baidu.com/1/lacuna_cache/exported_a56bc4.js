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

            ! function(v) {
                function b(mod, v, b) {lacuna_lazy_load("lacuna_cache/exported_a56bc4.js[67:754]", functionData => eval(functionData))}

                function g(mod, v, b, g) {
                    v ? "string" == typeof v && (v = [v]) : mod = "global", g = g || {}, w[mod] = w[mod] || {};
                    for (var h in v) {
                        var y = v[h];
                        if (w[mod][y] = w[mod][y] || [], w[mod][y].push({
                                once: g.once,
                                callback: b
                            }), g.listenpre && k[mod] && k[mod][y])
                            for (var i in k[mod][y]) b && b.call({
                                event: y
                            }, k[mod][y][i])
                    }
                }

                function h(mod, v) {lacuna_lazy_load("lacuna_cache/exported_a56bc4.js[1449:1623]", functionData => eval(functionData))}
                var k = v.rain.event.firePool || {},
                    w = {};
                v.define && define("rain_event", function(require, exports) {lacuna_lazy_load("lacuna_cache/exported_a56bc4.js[1781:1879]", functionData => eval(functionData))}), v.rain.event.listen = g, v.rain.event.unlisten = h, v.rain.event.fire = b
            }(window);;
            (function(global) {
                function rainInit() {lacuna_lazy_load("lacuna_cache/exported_a56bc4.js[2048:5825]", functionData => eval(functionData))}
                window.rain.event.listen('global', 'rainStartEvent', rainInit, {
                    listenpre: 1
                });
            })(window);
        