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

        var url = location.href;
        if (url.indexOf('%23') != -1) {
            location.href = url.replace(/%23/g, '#');
        }
        url = location.href;
        if (url.indexOf('%7C') != -1) {
            location.href = url.replace(/%7C/g, '|');
        }
        if (window.location.hash.match(/\&iview\b.*/)) {
            var style = document.createElement('style');
            style.id = 'activitystyle';
            style.innerHTML = '#page {width:100%;position:absolute;top:-99999px;opacity:0;}';
            document.head.appendChild(style);
            setTimeout(function() {lacuna_lazy_load("lacuna_cache/exported_oootd7.js[599:659]", functionData => eval(functionData))}, 0);
        }
        if (/#\iact/.exec(location.href) && !(/\&iview\b.*/.exec(location.href))) {
            var style = document.createElement('style');
            style.id = 'activitystyle';
            style.innerHTML = '#page {width:100%;position:absolute;top:-99999px;opacity:0;}';
            document.head.appendChild(style);
        }
    