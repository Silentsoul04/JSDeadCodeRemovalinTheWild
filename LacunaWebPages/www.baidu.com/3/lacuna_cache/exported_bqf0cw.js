
                            var baseurlConfig = null;
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
                            F._fileMap = null;
                            F._fileMap({
                                "/js/landingTools_d8f47e46.js": ["tools/postmessage", "tools/aio.min", "tools/popup", "tools/toast", "tools/star", "tools/detect", "tools/share", "tools/font", "tools/tool", "tools/iscroll", "tools/bdscroll", "tools/slider"],
                                "/js/backflow_da419924.js": ["lib/backflow"],
                                "/js/rtapp_2afa0a40.js": ["rtapp/utils/naboo", "rtapp/utils/spark", "rtapp/utils/ua", "rtapp/utils/animation", "rtapp/view/loading", "rtapp/view/offline", "rtapp/view/pmRequestHandle", "rtapp/view/view", "rtapp/service"]
                            });;
                        