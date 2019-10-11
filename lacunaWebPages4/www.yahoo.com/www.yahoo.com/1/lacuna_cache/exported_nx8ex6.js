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

            Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {lacuna_lazy_load("lacuna_cache/exported_nx8ex6.js[82:561]", functionData => eval(functionData))}), Array.prototype.filter || (Array.prototype.filter = function(t) {lacuna_lazy_load("lacuna_cache/exported_nx8ex6.js[628:1149]", functionData => eval(functionData))}), Array.prototype.map || (Array.prototype.map = function(t, e) {lacuna_lazy_load("lacuna_cache/exported_nx8ex6.js[1213:1755]", functionData => eval(functionData))}), String.prototype.includes || (String.prototype.includes = function(t, e) {lacuna_lazy_load("lacuna_cache/exported_nx8ex6.js[1831:1991]", functionData => eval(functionData))});
            var assistJS = function(r, h) {lacuna_lazy_load("lacuna_cache/exported_nx8ex6.js[2036:32565]", functionData => eval(functionData))};
            "undefined" != typeof module && (module.exports = {
                assistJS: assistJS
            }), "undefined" != typeof window && (window.YAHOO = window.YAHOO || {}, window.YAHOO.SAClass = assistJS(window, document));
            var init = function(t) {lacuna_lazy_load("lacuna_cache/exported_nx8ex6.js[32837:32978]", functionData => eval(functionData))};
            ! function() {lacuna_lazy_load("lacuna_cache/exported_nx8ex6.js[33005:41260]", functionData => eval(functionData))}();
        