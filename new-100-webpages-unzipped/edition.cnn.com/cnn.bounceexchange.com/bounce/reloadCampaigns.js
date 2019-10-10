//<script>
bouncex.tryCatch(function reloadCampaigns() {
    var newCampaigns = false;
    bouncex.creatives = false;
    bouncex.brandStyles = false;
    bouncex.webfonts = false;

    if (bouncex.gbi) {
        bouncex.gbi.stacks = false
    }
    var newCookie = {
        "v": {
            "completed_signup": false,
            "last_session_vid": 1570706518919441,
            "session_count": 1,
            "submitted_underscored": false,
            "submitted_thepoint": false,
            "submitted_fareedsglobalbriefing": false,
            "submitted_resultsarein": false,
            "submitted_fivethings": false,
            "submitted_reliablesources": false,
            "submitted_provokepersuade": false,
            "submitted_goodstuff": false,
            "submitted_5cosas": false,
            "submitted_livevideo": false,
            "submitted_indiaalerts": false,
            "submitted_beforethebell": false,
            "submitted_impeachment": false
        },
        "fvt": 1570706518,
        "vid": 1570706518919441,
        "ao": 0,
        "lp": "https%3A%2F%2Fedition.cnn.com%2F",
        "as": 0,
        "vpv": 1,
        "d": "p",
        "r": "",
        "cvt": 1570706518,
        "sid": 1,
        "gcr": 32,
        "m": 0,
        "did": "6990678118507840132",
        "lvt": 1570706518
    };
    var campaignAdded = false;
    for (var campaignId in newCampaigns) {
        if (newCampaigns.hasOwnProperty(campaignId)) {
            // if campaign cookie does not exist
            if (!bouncex.cookie.campaigns) {
                bouncex.cookie.campaigns = {};
            }
            if (!bouncex.cookie.campaigns[campaignId]) {
                campaignAdded = true;
                bouncex.cookie.campaigns[campaignId] = {
                    lvt: bouncex.cookie.lvt,
                    vv: 0
                };
            } else if (newCookie.campaigns[campaignId]) {
                // need to set campaign cookie's activations_sessions to the new cookie as it gets modified in reloadCampaigns
                campaignAdded = true;
                bouncex.cookie.campaigns[campaignId].as = newCookie.campaigns[campaignId].as;
            }
        }
    }
    if (campaignAdded) {
        bouncex.setBounceCookie();
    }

    for (var campaignId in bouncex.campaigns) {
        if (bouncex.campaigns.hasOwnProperty(campaignId)) { //copy state vars
            if (newCampaigns[campaignId]) {
                newCampaigns[campaignId].ap = bouncex.campaigns[campaignId].ap;
                newCampaigns[campaignId].repressed = Boolean(bouncex.campaigns[campaignId].repressed);
            }

            if (newCampaigns[campaignId] &&
                bouncex.campaigns[campaignId].ad_visible &&
                newCampaigns[campaignId].html.replace(/fsa=(\d+)&|width=(\d+)&|height=(\d+)&/gi, '') == bouncex.campaigns[campaignId].html.replace(/fsa=(\d+)&|width=(\d+)&|height=(\d+)&/gi, '')) {
                newCampaigns[campaignId] = bouncex.campaigns[campaignId];
            } else if (newCampaigns[campaignId] && bouncex.isGbi2Campaign(campaignId) && bouncex.campaigns[campaignId].gbi.hasBegunAuction) {
                newCampaigns[campaignId] = bouncex.campaigns[campaignId];
            } else {
                bouncex.destroy_ad(campaignId);
            }
        }
    }

    bouncex.campaigns = newCampaigns;
    newCampaigns = {};

    bouncex.debug = false;
    bouncex.setBounceCookie();
    if (bouncex.campaigns) {
        for (var campaignId in bouncex.campaigns) {
            if (bouncex.campaigns[campaignId].ad_visible && typeof bouncex.repressCampaigns === 'function') {
                bouncex.repressCampaigns(campaignId);
            }
        }
        bouncex.loadBounceCss(bouncex.initActivationFuncs);
    }
    bouncex.loadBrandStyles();
    bouncex.loadWebfonts();

})();