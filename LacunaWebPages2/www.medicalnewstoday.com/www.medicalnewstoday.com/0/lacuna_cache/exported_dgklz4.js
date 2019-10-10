
        //Page level targeting setup
        var adRPV = Math.floor(Math.random() * 100) + 1;
        adRPV = adRPV.toString();

        fireOrSaveGoogleAdFunctions(function() {
            // ADBRIDG MIGRATION: the `cmd` function needs to run through AdBridg, but the
            // setTargeting methods should stay native to GPT.
            AdBridg.cmd.push(function() {
                googletag.pubads().setTargeting('rpv', adRPV);
                //We need to add a new key for 'url'
                googletag.pubads().setTargeting('url', encodeURI(location.pathname));

                //Set default targeting first
                if (typeof googleDegfaultAdVars !== "undefined") {
                    for (var k in googleDegfaultAdVars) {
                        if (k == "sub" || googleDegfaultAdVars[k].toString().indexOf(",") > -1) {
                            var finalOutput = googleDegfaultAdVars[k].split(',');
                            //Remove the single qoute
                            for (var i in finalOutput) {
                                if (finalOutput[i].trim().toString().indexOf("'") == 0) {
                                    finalOutput[i] = finalOutput[i].trim().slice(1, -1);
                                } else {
                                    finalOutput[i] = finalOutput[i].trim();
                                }
                            }
                        } else {
                            if (googleDegfaultAdVars[k].toString().indexOf("'") == 0) {
                                //if it got single qoute inside, we remove it
                                var finalOutput = googleDegfaultAdVars[k].slice(1, -1);
                            } else {
                                var finalOutput = googleDegfaultAdVars[k];
                            }
                        }
                        googletag.pubads().setTargeting(k, finalOutput);
                    }
                }
                //googletag.pubads().enableAsyncRendering(); // enable async loading
                // Disable initial load, we will use refresh() to fetch ads.
                // Calling this function means that display() calls just
                // register the slot as ready, but do not fetch ads for it.
                // googletag.pubads().disableInitialLoad();
                //  	googletag.pubads().enableSingleRequest();
                // googletag.pubads().enableLazyLoad({
                //     fetchMarginPercent: 50,  // Fetch slots within 5 viewports.
                //     renderMarginPercent: 30,  // Render slots within 2 viewports.
                //     mobileScaling: 2.0  // Double the above values on mobile.
                // });
                // googletag.enableServices();
                // ADBRIDG MIGRATION: by default, we enable single request, disable initial
                // load, and async rendering is enabled by default (GPT no longer supports
                // synchronous rendering as of 2019-01-21.)
                // All we need to do now is tell AdBridg to begin serving the ads.
                // AdBridg.serve();
                // console.log("serve happened in page level");

            });
        });
    