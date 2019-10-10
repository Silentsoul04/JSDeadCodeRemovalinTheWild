
        googletag.cmd.push(function() {

            var dtmr = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 250],
                [300, 100],
                [320, 50]
            ], 'div-Top-MediumRectangle');
            dtmr.setTargeting('pos', ['TopMediumRectangle']);
            dtmr.setTargeting('page', ['home']);
            dtmr.addService(googletag.pubads());

            var dmmr = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 250],
                [320, 50],
                [300, 100],
                [1, 1]
            ], 'div-Middle-MediumRectangle');
            dmmr.setTargeting('pos', ['MiddleMediumRectangle']);
            dmmr.setTargeting('page', ['home']);
            dmmr.addService(googletag.pubads());

            var dbmr = googletag.defineOutOfPageSlot('/31800665/TribunnewsMobile/Home', 'div-Bottom-MediumRectangle');
            dbmr.setTargeting('pos', ['BottomMediumRectangle']);
            dbmr.setTargeting('page', ['home']);
            dbmr.addService(googletag.pubads());


            var dnl1 = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 90],
                [1, 1]
            ], 'div-NativeAds-Latest-1');
            dnl1.setTargeting('pos', ['NativeAds-Latest-1']);
            dnl1.setTargeting('page', ['home']);
            dnl1.addService(googletag.pubads());

            var dnl2 = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 90],
                [1, 1]
            ], 'div-NativeAds-Latest-2');
            dnl2.setTargeting('pos', ['NativeAds-Latest-2']);
            dnl2.setTargeting('page', ['home']);
            dnl2.addService(googletag.pubads());

            var dnl3 = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 90],
                [1, 1]
            ], 'div-NativeAds-Latest-3');
            dnl3.setTargeting('pos', ['NativeAds-Latest-3']);
            dnl3.setTargeting('page', ['home']);
            dnl3.addService(googletag.pubads());

            var dnl4 = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 90],
                [1, 1]
            ], 'div-NativeAds-Latest-4');
            dnl4.setTargeting('pos', ['NativeAds-Latest-4']);
            dnl4.setTargeting('page', ['home']);
            dnl4.addService(googletag.pubads());



            var dnp1 = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 90],
                [1, 1]
            ], 'div-NativeAds-Populer-1');
            dnp1.setTargeting('pos', ['NativeAds-Populer-1']);
            dnp1.setTargeting('page', ['home']);
            dnp1.addService(googletag.pubads());

            var dnp2 = googletag.defineSlot('/31800665/TribunnewsMobile/Home', [
                [300, 90],
                [1, 1]
            ], 'div-NativeAds-Populer-2');
            dnp2.setTargeting('pos', ['NativeAds-Populer-2']);
            dnp2.setTargeting('page', ['home']);
            dnp2.addService(googletag.pubads());






            var dpt = googletag.defineOutOfPageSlot('/31800665/TribunnewsMobile/Home', 'div-Premium-Topframe');
            dpt.setTargeting('pos', ['PremiumTopframe']);
            dpt.setTargeting('page', ['home']);
            dpt.addService(googletag.pubads());

            var dru = googletag.defineOutOfPageSlot('/31800665/TribunnewsMobile/Home', 'div-Rollup');
            dru.setTargeting('pos', ['Rollup']);
            dru.setTargeting('page', ['home']);
            dru.addService(googletag.pubads());

            var drh = googletag.defineOutOfPageSlot('/31800665/TribunnewsMobile/Home', 'div-Headline');
            drh.setTargeting('pos', ['Headline']);
            drh.setTargeting('page', ['home']);
            drh.addService(googletag.pubads());

            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.enableServices();
        });
    