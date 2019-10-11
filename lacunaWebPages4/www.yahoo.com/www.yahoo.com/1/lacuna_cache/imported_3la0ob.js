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
"use strict";!function(){lacuna_lazy_load("lacuna_cache/imported_3la0ob.js[24:791]", functionData => eval(functionData))==r;){if(r===t)return!0;r=r.parentNode}return!1}(e,t.target))return t.preventDefault();var r=t.targetTouches[0].clientY-n;0===e.scrollTop&&0<r&&t.preventDefault();(function(t){___jdce_logger("lacuna_cache/imported_3la0ob.js", 655, 751);return t&&void 0!==t.scrollHeight?t.scrollHeight-t.scrollTop<=t.clientHeight:void 0})(e)&&r<0&&t.preventDefault()}(t)},!1))}();