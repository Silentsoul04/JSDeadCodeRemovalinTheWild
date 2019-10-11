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

            !function(o,c){lacuna_lazy_load("lacuna_cache/exported_2vrzwv.js[27:944]", functionData => eval(functionData))}(addEventListener,removeEventListener);

                        function yaftPreProcess() {lacuna_lazy_load("lacuna_cache/exported_2vrzwv.js[1035:3878]", functionData => eval(functionData))}

            function yaftInit(e) {lacuna_lazy_load("lacuna_cache/exported_2vrzwv.js[3913:8627]", functionData => eval(functionData))}
            if (window.addEventListener) {
                window.addEventListener('DOMContentLoaded', yaftInit, false);
                var _yaftScrollingTimer,
    _yaftIsScrolling = false,
    _yaftIsDone = false,
    _yaftMaxScroll = 5,
    _yaftScrollingTimerDelay = 66,
    _yaftScrollCounter = 1,
    YMedia = YMedia || null,
    rapidInstance = (YAHOO && YAHOO.i13n && YAHOO.i13n.rapidInstance) || (YMedia && YMedia.My && YMedia.My.App && YMedia.My.App.getRapidTracker && YMedia.My.App.getRapidTracker()) || null;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {lacuna_lazy_load("lacuna_cache/exported_2vrzwv.js[9232:10216]", functionData => eval(functionData))}, false);
            } else if (window.attachEvent) {
                window.attachEvent('DOMContentLoaded', yaftInit);
            }
            

      