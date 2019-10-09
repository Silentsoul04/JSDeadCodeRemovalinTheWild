                var WIN = window;
                var beaconer = function(type, source, beaconKeys) {
                    if (!window.wafer) {
                        return;
                    }
                    var beaconUrl = "/p.gif?type=" + type + "&beaconKeys=" + escape(JSON.stringify(beaconKeys)) + "&source=" + source + "&rid=6b82cvpepq23l" + "&bucket=FPVIDBACK01,FPRIVEN02";
                    window.wafer && window.wafer.utils.fireBeacon(beaconUrl);
                };
                var tracker = WIN.YAHOO && WIN.YAHOO.i13n && WIN.YAHOO.i13n.rapidInstance;
                var helperConfig = {
                    bucket: "FPVIDBACK01,FPRIVEN02",
                    churnCheckBackoff: 604800,
                    enableChurnCheck: 1,
                    enabled: true,
                    serviceWorkerUrl: "/service-worker.js",
                    spaceId: 1197802945,
                    subscriptionService: {
                        context: {
                            crumb: "whX3jS4AcSw",
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