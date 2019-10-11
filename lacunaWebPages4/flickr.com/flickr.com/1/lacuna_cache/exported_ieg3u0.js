
        window.googletag = window.googletag || {
            cmd: []
        };
        googletag.cmd.push(function() {
            googletag.defineSlot("/21833886396/Flickr_FeedBillboard_Desktop_970x250", [970, 250], "gpt-feed-billboard").addService(googletag.pubads());
            googletag.defineSlot("/21833886396/Flickr_PhotoStream_Desktop_Multi", [
                [320, 250],
                [970, 250],
            ], "gpt-photostream-interstitial").addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });
    