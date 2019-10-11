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
"undefined"!=typeof window&&function(h,v){lacuna_lazy_load("lacuna_cache/imported_apr2e1.js[41:17565]", functionData => eval(functionData))}(window,document),"undefined"!=typeof module&&module.exports&&("undefined"!=typeof window?module.exports=window.YAFT:module.exports=!1);