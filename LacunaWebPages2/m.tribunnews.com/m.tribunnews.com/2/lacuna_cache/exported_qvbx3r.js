
        var googletag = googletag || {};

        function sendAdserverRequest() {
            pbjs.adserverRequestSent || (pbjs.adserverRequestSent = !0, googletag.cmd.push(function() {
                pbjs.que.push(function() {
                    pbjs.setTargetingForGPTAsync(), googletag.pubads().refresh()
                })
            }))
        }
        googletag.cmd = googletag.cmd || [], googletag.cmd.push(function() {
            googletag.pubads().disableInitialLoad()
        }), pbjs.que.push(function() {
            pbjs.setConfig({
                userSync: {
                    userIds: [{
                        name: "unifiedId",
                        params: {
                            url: "//match.adsrvr.org/track/rid?ttd_pid=x67z0nb&fmt=json"
                        },
                        storage: {
                            type: "cookie",
                            name: "pbjs-unifiedid",
                            expires: 60
                        }
                    }],
                    syncDelay: 3e3,
                    filterSettings: {
                        iframe: {
                            bidders: "*",
                            filter: "include"
                        }
                    }
                }
            }), pbjs.addAdUnits(adUnits), pbjs.requestBids({
                bidsBackHandler: sendAdserverRequest,
                timeout: PREBID_TIMEOUT
            })
        }), setTimeout(function() {
            sendAdserverRequest()
        }, PREBID_TIMEOUT);
    