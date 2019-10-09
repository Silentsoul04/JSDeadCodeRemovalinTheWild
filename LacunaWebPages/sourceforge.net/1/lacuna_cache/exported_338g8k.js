

            SF.Ads.prebidOptions = {
                showIndicators: false,
                analytics: false,
                timeout: 650,
                timeouts_by_bids: {650: 3, 2000: 1, 3000: 0},
                
            };

            SF.Ads.prebidUnits = [];if (!SF.initial_breakpoints_visible.leaderboard) {
                var thisUnit =  {
                    bids: [{'params': {'tagid': '542317'}, 'bidder': 'sovrn'},
                            {'params': {'cp': 558092, 'cf': '300x250', 'ct': '627928'}, 'bidder': 'pulsepoint'},
                            {'params': {'siteId': '103240', 'sizes': [43], 'accountId': '15680', 'zoneId': '798260'}, 'bidder': 'rubicon'},
                            {'params': {'placementId': 12559084}, 'bidder': 'appnexus'},
                            {'params': {'dmxid': 189801, 'memberid': '101054'}, 'bidder': 'districtmDMX'},
                            {'params': {'placementId': 12558816}, 'bidder': 'districtm'},
                            ],
                    code: 'div-gpt-ad-1512154653435-0',
                    tag: 'SF_Mobile_Multi_B',
                    mediaTypes: { banner: { sizes: [[300, 50], [300, 250], [320, 50], [320, 100]] } }
                };

                SF.Ads.prebidUnits.push(thisUnit);
            }
            if (SF.initial_breakpoints_visible.leaderboard) {
                var thisUnit =  {
                    bids: [{'params': {'tagid': '364644'}, 'bidder': 'sovrn'},
                            {'params': {'cp': 558092, 'cf': '728x90', 'ct': '472219'}, 'bidder': 'pulsepoint'},
                            {'params': {'siteId': '103240', 'sizes': [2], 'accountId': '15680', 'zoneId': '486008'}, 'bidder': 'rubicon'},
                            {'params': {'placementId': 9265074}, 'bidder': 'appnexus'},
                            {'params': {'dmxid': 178236, 'memberid': '101054'}, 'bidder': 'districtmDMX'},
                            {'params': {'placementId': 12120042}, 'bidder': 'districtm'},
                            ],
                    code: 'div-gpt-ad-1392148208790-0',
                    tag: 'SF_HP_728x90_B',
                    mediaTypes: { banner: { sizes: [] } }
                }; 
                if (SF.Ads.viewportWidth >= 728 && SF.Ads.viewportHeight >= 200){
                    thisUnit.mediaTypes.banner.sizes = [[728, 90]];
                } 
                if (SF.Ads.viewportWidth >= 970 && SF.Ads.viewportHeight >= 901){
                    thisUnit.mediaTypes.banner.sizes = [[728, 90], [970, 250]];
                }

                SF.Ads.prebidUnits.push(thisUnit);
            }
            SF.Ads.prebidAdjustments = {"bidder_deflations": {"rubiconlite": 1, "komoona": 0.92, "onefiftytwo": 0.9, "indexexchange": 0.95, "sovrn": 0.94, "aardvark": 1, "aol": 0.98, "brealtime": 0.98, "districtm": 1, "oftmedia": 0.9, "emxdigital": 1, "pulsepoint": 0.93, "rubicon": 1.1, "indexex#hange": 0.98, "springserve": 0.001, "districtmdmx": 1, "appnexus": 1, "rhythmone": 0.85}, "inflation": 1.18, "floor": 0.02};
        