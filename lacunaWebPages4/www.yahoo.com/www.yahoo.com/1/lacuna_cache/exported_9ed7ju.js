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
                var WIN = window;
                var beaconer = function(type, source, beaconKeys) {lacuna_lazy_load("lacuna_cache/exported_9ed7ju.js[100:483]", functionData => eval(functionData))};
                var tracker = WIN.YAHOO && WIN.YAHOO.i13n && WIN.YAHOO.i13n.rapidInstance;
                var helperConfig = {
                    bucket: "MFPTOAST02,FPRIVEN02",
                    churnCheckBackoff: 604800,
                    enableChurnCheck: 1,
                    enabled: true,
                    serviceWorkerUrl: "/service-worker.js",
                    spaceId: 1197802945,
                    subscriptionService: {
                        context: {
                            crumb: "wL5JsSug1Vw",
                            lang: "en-US",
                            region: "US"
                        },
                        host: "",
                        path: "/_td_api",
                        protocol: ""
                    },
                    supportedBrowsers: {
                        chrome: {
                            maxVersion: 0,
                            minVersion: 54,
                            os: ["win", "mac", "android"],
                            useServiceWorker: true
                        }
                    },
                    userAgent: {
                        browserName: "chrome",
                        browserVersion: "77",
                        osName: "android"
                    },
                    useRivendell: 1
                };

                if (WIN.SubscriptionHelper) {
                    WIN.subscriptionHelperInstance = new WIN.SubscriptionHelper(helperConfig, beaconer, tracker);
                    WIN.subscriptionHelperInstance.addPromoButtonDelegator();
                    WIN.subscriptionHelperInstance.showPushSubscriptionPromos();
                }