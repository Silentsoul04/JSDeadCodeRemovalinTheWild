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
self.System=self.System||(()=>{lacuna_lazy_load("lacuna_cache/imported_nfussn.js[30:609]", functionData => eval(functionData))})(),System.register(["./frameworks.js"],function(e,t){lacuna_lazy_load("lacuna_cache/imported_nfussn.js[662:496150]", functionData => eval(functionData))});
//# sourceMappingURL=github-bootstrap-3d6621d2.js.map
