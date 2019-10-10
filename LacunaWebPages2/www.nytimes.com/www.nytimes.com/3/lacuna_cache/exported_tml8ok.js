
        if (window.NYTD.Abra('dfp_home_toggle') !== '1_block') {

            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];

            if (testCookie('nyt-gdpr') == '1') {
                googletag.cmd.push(null);
            }
        }
    