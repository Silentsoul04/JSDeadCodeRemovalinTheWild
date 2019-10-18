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

        window.advBidxc = window.advBidxc || {}, window.advBidxc.misc = window.advBidxc.misc || {}, window._mNHandle = window._mNHandle || {}, window._mNHandle.queue = window._mNHandle.queue || [];
        var medianet_versionId = "121199";
        window.forbes = window.forbes || {}, window.forbes.fastFetchMedianet = !0;
        var cbList = [],
            medianetLoaded = !1;
        window.forbes.fastFetchMedianetCb = function(e) {lacuna_lazy_load("lacuna_cache/exported_3a1mm9.js[439:660]", functionData => eval(functionData))},
            function() {
                var e = function() {lacuna_lazy_load("lacuna_cache/exported_3a1mm9.js[722:1065]", functionData => eval(functionData))},
                    t = function() {lacuna_lazy_load("lacuna_cache/exported_3a1mm9.js[1102:1805]", functionData => eval(functionData))};
                if (window.forbes.isEurope && -1 === document.cookie.indexOf("notice_gdpr_prefs=")) {
                    var n = function(n) {
                        try {
                            var i = JSON.parse(n.data);
                            i && "preference_manager" === i.source && "submit_preferences" === i.message && (e(), t())
                        } catch (e) {}
                    };
                    window.addEventListener("message", n)
                } else e(), t()
            }();
    