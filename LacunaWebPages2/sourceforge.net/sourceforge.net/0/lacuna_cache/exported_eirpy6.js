
        /*global Foundation */
        /*global googletag, bizxPrebid */
        SF.Ads.gptExpected();
        var gptadslots = [];
        var gptadHandlers = {};
        var gptadRenderers = [];
        var gptadComplements = {};
        SF.Ads.slotsById = {};
        SF.Ads.idsByPath = {};

        googletag.cmd.push(function() {
            var leaderboard = googletag.sizeMapping()
                .addSize([970, 901], [
                    [728, 90],
                    [970, 250]
                ])
                .addSize([728, 200], [
                    [728, 90]
                ])
                .build();
            var leaderboardInContent = googletag.sizeMapping()
                .addSize([1280, 200], [
                    [728, 90],
                    [970, 250]
                ])
                .addSize([728, 200], [
                    [728, 90]
                ])
                .build();

            //prebid_log('GPT push define slots and targeting');
            googletag.pubads()
                .setForceSafeFrame(true)
                .setTargeting('usingSafeFrame', '1')
                .setSafeFrameConfig({
                    allowOverlayExpansion: true,
                    allowPushExpansion: true,
                    sandbox: true
                });

            var thisSlot;
            thisSlot = googletag.defineSlot('/41014381/Sourceforge/SF_Mobile_Multi_B', [
                    [300, 50],
                    [300, 250],
                    [320, 50],
                    [320, 100]
                ], 'div-gpt-ad-1512154653435-0')
                .addService(googletag.pubads())
                .setTargeting('dc_ref', "https://sourceforge.net/")
                .setTargeting('sz', "300x50,300x250,320x50,320x100")
                .setTargeting('page_type', "pg_index");
            gptadslots.push(thisSlot);
            SF.Ads.slotsById['div-gpt-ad-1512154653435-0'] = thisSlot;
            SF.Ads.idsByPath['/41014381/Sourceforge/SF_Mobile_Multi_B'] = 'div-gpt-ad-1512154653435-0';
            thisSlot = googletag.defineSlot('/41014381/Sourceforge/SF_HP_728x90_B', [], 'div-gpt-ad-1392148208790-0')
                .defineSizeMapping(leaderboard)
                .addService(googletag.pubads())
                .setTargeting('dc_ref', "https://sourceforge.net/")
                .setTargeting('page_type', "pg_index");
            gptadslots.push(thisSlot);
            SF.Ads.slotsById['div-gpt-ad-1392148208790-0'] = thisSlot;
            SF.Ads.idsByPath['/41014381/Sourceforge/SF_HP_728x90_B'] = 'div-gpt-ad-1392148208790-0';


            googletag.pubads().setRequestNonPersonalizedAds(SF.Ads.disallowPersonalization);

            googletag.pubads().setTargeting('requestSource', 'GPT');
            googletag.pubads().enableAsyncRendering();

            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().addEventListener('slotOnload', function(event) {
                SF.Ads.Helpers.getSizeAndSetClass.call(this, event);
            });
            googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                var unitName = event.slot.getAdUnitPath();
                if (unitName in gptadHandlers) {
                    for (var i = 0; i < gptadHandlers[unitName].length; i++) {
                        try {
                            SF.Ads.RenderHandlers[gptadHandlers[unitName][i]].call(this, event);
                        } catch (e) {}
                    }
                }

                SF.Ads.RenderHandlers.decorateSizeDelivered.call(this, event);
                if (unitName in gptadComplements) {
                    if (gptadComplements[unitName][1].indexOf(SF.Ads.Helpers.getSizeDelivered(event)) >= 0) {
                        gptadRenderers[gptadComplements[unitName][0]].call();
                    }
                }
                if (SF.Ads.scrollFixable) {
                    SF.Ads.scrollFixable.scrollRelocate();
                }
            });
            googletag.pubads().addEventListener('impressionViewable', SF.Ads.RenderHandlers.viewabilityInstrumentation);

            googletag.pubads().addEventListener('slotRenderEnded', SF.Ads.listenerForBlockThis);
            bizxPrebid.Ads.pushToGoogle();

            googletag.enableServices();
        });
    