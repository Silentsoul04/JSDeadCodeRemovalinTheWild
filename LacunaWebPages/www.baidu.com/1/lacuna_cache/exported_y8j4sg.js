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

                            var baseurlConfig = function() {lacuna_lazy_load("lacuna_cache/exported_y8j4sg.js[60:256]", functionData => eval(functionData))};
                            baseurlConfig();
                            require.config({
                                packages: [{
                                    name: "newtab",
                                    location: "newtab/js"
                                }, {
                                    name: "newtabsamp",
                                    location: "newtab/sampstatic/js"
                                }],
                                paths: {
                                    sfr: "https://m.baidu.com/se/static/js/dep/ralltiir.min_1a3d103"
                                }
                            });
                            var F = {};
                            F._fileMap = function(d) {lacuna_lazy_load("lacuna_cache/exported_y8j4sg.js[1002:1660]", functionData => eval(functionData))};
                            F._fileMap({
                                "/js/landingTools_d8f47e46.js": ["tools/postmessage", "tools/aio.min", "tools/popup", "tools/toast", "tools/star", "tools/detect", "tools/share", "tools/font", "tools/tool", "tools/iscroll", "tools/bdscroll", "tools/slider"],
                                "/js/backflow_da419924.js": ["lib/backflow"],
                                "/js/rtapp_2afa0a40.js": ["rtapp/utils/naboo", "rtapp/utils/spark", "rtapp/utils/ua", "rtapp/utils/animation", "rtapp/view/loading", "rtapp/view/offline", "rtapp/view/pmRequestHandle", "rtapp/view/view", "rtapp/service"]
                            });;
                        