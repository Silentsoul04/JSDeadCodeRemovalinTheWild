
                            var baseurlConfig = function() {
                                require.config({
                                    baseUrl: window.sDomain.staticUrl + "static"
                                })
                            };
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
                            F._fileMap = function(d) {
                                var a = {};
                                var c = "newtab/";
                                for (var b in d) {
                                    if (d.hasOwnProperty(b)) {
                                        a[c + b.replace(/(\/js\/)|\.js(\?v=md5)?$/g, "")] = d[b].map(function(e) {
                                            return c + e
                                        })
                                    }
                                }
                                require.config({
                                    bundles: a
                                })
                            };
                            F._fileMap({
                                "/js/landingTools_d8f47e46.js": ["tools/postmessage", "tools/aio.min", "tools/popup", "tools/toast", "tools/star", "tools/detect", "tools/share", "tools/font", "tools/tool", "tools/iscroll", "tools/bdscroll", "tools/slider"],
                                "/js/backflow_da419924.js": ["lib/backflow"],
                                "/js/rtapp_2afa0a40.js": ["rtapp/utils/naboo", "rtapp/utils/spark", "rtapp/utils/ua", "rtapp/utils/animation", "rtapp/view/loading", "rtapp/view/offline", "rtapp/view/pmRequestHandle", "rtapp/view/view", "rtapp/service"]
                            });;
                        