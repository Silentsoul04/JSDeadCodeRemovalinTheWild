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
window.GLOBAL_EVENTS_STORAGE=function(o,r){lacuna_lazy_load("lacuna_cache/imported_ez1r3c.js[42:645]", functionData => eval(functionData))}(window.GLOBAL_EVENTS_STORAGE||{},window.EXTERNAL_STORAGE||{});var supportsPassive=!1;try{var opts=Object.defineProperty({},"passive",{get:function(){lacuna_lazy_load("lacuna_cache/imported_ez1r3c.js[794:827]", functionData => eval(functionData))}});window.addEventListener("testPassive",null,opts),window.removeEventListener("testPassive",null,opts)}catch(e){}window.skypeLazyGravity=function(e){lacuna_lazy_load("lacuna_cache/imported_ez1r3c.js[976:3050]", functionData => eval(functionData))}(window.SKYPE_SETTINGS||{}),window.EXTERNAL_STORAGE=function(i,t){lacuna_lazy_load("lacuna_cache/imported_ez1r3c.js[3115:4110]", functionData => eval(functionData))}(window.EXTERNAL_STORAGE||{},window.SKYPE_SETTINGS||{});