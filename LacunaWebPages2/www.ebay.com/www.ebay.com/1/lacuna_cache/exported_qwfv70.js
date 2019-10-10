
        try {
            new window.TaaSTrackingCore({
                "psi": "AWLxBzIE*",
                "rover": {
                    "imp": "/roverimp/0/0/9",
                    "clk": "/roverclk/0/0/9",
                    "uri": "https://rover.ebay.com"
                },
                "pid": "p2481888"
            });
            var _plsubtInp = {
                "eventFamily": "DFLT",
                "samplingRate": 100,
                "pageLoadTime": new Date().getTime(),
                "pageId": 2481888,
                "app": "Testapp",
                "disableImp": true
            };
            var _plsUBTTQ = [];
            var TaaSIdMapTrackerObj = new TaaSIdMapTracker();
            TaaSIdMapTrackerObj.roverService("https://rover.ebay.com/idmap/0?footer");
        } catch (err) {
            console && console.log && console.log(err);
        }
    