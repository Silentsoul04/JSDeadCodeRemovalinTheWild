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

                ! function(a) {
                    a.B.imgLoadPool = {};
                    var g = function(mod, g) {
                        mod = mod || "index-card", a.B.imgLoadPool[g] = a.B.imgLoadPool[g] || {}, a.B.imgLoadPool[g].data = a.B.imgLoadPool[g].data || [], a.B.imgLoadPool[g].handler = function(e) {lacuna_lazy_load("lacuna_cache/exported_9lnfem.js[318:808]", functionData => eval(functionData))}, document.getElementById(mod).addEventListener(g, a.B.imgLoadPool[g].handler, !0)
                    };
                    g("index-card", "error")
                }(window);;
            