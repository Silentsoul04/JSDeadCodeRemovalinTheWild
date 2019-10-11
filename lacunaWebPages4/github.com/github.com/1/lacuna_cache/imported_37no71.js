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
self.System=self.System||(()=>{lacuna_lazy_load("lacuna_cache/imported_37no71.js[30:609]", functionData => eval(functionData))})(),System.register([],function(t,e){lacuna_lazy_load("lacuna_cache/imported_37no71.js[645:152356]", functionData => eval(functionData))});
//# sourceMappingURL=frameworks-9ac93ea6.js.map
