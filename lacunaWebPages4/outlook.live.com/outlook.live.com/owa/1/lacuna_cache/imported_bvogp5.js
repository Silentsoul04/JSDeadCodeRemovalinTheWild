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
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.vhCheck=t()}(this,function(){"use strict";function e(){var e=document.createElement("div");e.style.cssText="position: fixed; top: 0; bottom: 0;",document.documentElement.insertBefore(e,document.documentElement.firstChild);var t=document.createElement("div");t.style.cssText="position: fixed; top: 0; height: 100vh",document.documentElement.insertBefore(t,document.documentElement.firstChild);var n=e.offsetHeight,o=t.offsetHeight-n;return document.documentElement.removeChild(e),document.documentElement.removeChild(t),o}function t(e,t){lacuna_lazy_load("lacuna_cache/imported_bvogp5.js[673:732]", functionData => eval(functionData))}return function(n){n="string"==typeof n?n:"vh-offset";var o=e();return!!o&&(t(n,o),window.addEventListener("orientationchange",function(){lacuna_lazy_load("lacuna_cache/imported_bvogp5.js[869:887]", functionData => eval(functionData))},!1),!0)}});