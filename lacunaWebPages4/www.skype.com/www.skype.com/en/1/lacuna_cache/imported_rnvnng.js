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
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-backgroundsize-borderradius-canvas-cssanimations-csstransforms-csstransforms3d-csstransitions-input-passiveeventlisteners-smil-svg-video-domprefixes-prefixes-setclasses-shiv !*/
!function(e,t,n){lacuna_lazy_load("lacuna_cache/imported_rnvnng.js[279:9793]", functionData => eval(functionData))}(window,document);