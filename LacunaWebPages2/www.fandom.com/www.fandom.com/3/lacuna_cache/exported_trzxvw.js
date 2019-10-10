
        window.Wikia = window.Wikia || {};
        window.Wikia.InstantGlobals = {
            "wgAdDriverKikimoraPlayerTrackingCountries": ["XX"],
            "wgAdDriverKikimoraTrackingCountries": ["XX"],
            "wgAdDriverKikimoraViewabilityTrackingCountries": ["XX"],
            "wgAdDriverMoatYieldIntelligenceCountries": ["ID", "GB", "UK"],
            "wgAdDriverNielsenCountries": ["XX"],
            "wgAdDriverPlayAdsOnNextVideoCountries": ["XX"],
            "wgAdDriverPlayAdsOnNextVideoFrequency": 1,
            "wgAdDriverPorvataMoatTrackingCountries": ["US", "PL", "AU", "DE", "UK", "GB", "MY", "CA", "SG", "ID", "PH"],
            "wgAdDriverPorvataMoatTrackingSampling": 10,
            "wgAdDriverStickySlotsLines": ["4366940064", "4916913597", "4913869429", "4950039599", "4949392740", "5093231180", "5096621951", "5108026783", "5100305721", "5116000005", "5115963805", "5121589422", "5100489589", "5118418989", "5118418995", "5131937498", "5132504554", "5139223366", "5158191077", "5165205535", "5163074581", "5166394551", "5175071508", "5169100059", "5165583595", "5167302221", "5189111245"],
            "wgAdDriverLABradorDfpKeyvals": ["wgAdDriverCTPDesktopQueenCountries_A_99:queen_ctp_a", "wgAdDriverCTPDesktopQueenCountries_B_1:queen_ctp_b", "wgAdDriverBfabStickinessOasisCountries_A_90:oasis_stickyblb_a", "wgAdDriverBfabStickinessOasisCountries_B_10:oasis_stickyblb_b", "wgAdDriverF2BfabStickinessCountries_A_99:ns_sticky_blb_a", "wgAdDriverF2BfabStickinessCountries_B_1:ns_sticky_blb_b", "wgAdDriverLazyBottomLeaderboardMobileWikiCountries_A_50:lazy_blb_a", "wgAdDriverLazyBottomLeaderboardMobileWikiCountries_B_50:lazy_blb_b", "wgAdDriverBrowsiCountries_A_50:browsi_a", "wgAdDriverBrowsiCountries_B_50:browsi_b", "wgAdDriverGAMLazyLoadingCountries_A_50:gam_lazy_loading_a", "wgAdDriverGAMLazyLoadingCountries_B_50:gam_lazy_loading_b", "icFloorAdhesionClickPositionTracking_A_0:floor_adhesion_click_position_a", "icFloorAdhesionClickPositionTracking_B_100:floor_adhesion_click_position_b", "icFloorAdhesionViewportsToStart-0_A_50:floor_adhesion_viewports_to_start_a", "icFloorAdhesionViewportsToStart-0_B_50:floor_adhesion_viewports_to_start_b", "icFloorAdhesionViewportsToStart-1_A_50:floor_adhesion_viewports_to_start_a", "icFloorAdhesionViewportsToStart-1_B_50:floor_adhesion_viewports_to_start_b", "icFloorAdhesionViewportsToStart-2_A_50:floor_adhesion_viewports_to_start_a", "icFloorAdhesionViewportsToStart-2_B_50:floor_adhesion_viewports_to_start_b", "icFloorAdhesionViewportsToStart_A_50:floor_adhesion_viewports_to_start_a", "icFloorAdhesionViewportsToStart_B_50:floor_adhesion_viewports_to_start_b", "icTopBoxadOutOfPage-0_A_50:out_of_page_mr_a", "icTopBoxadOutOfPage-0_B_50:out_of_page_mr_b", "icTopBoxadOutOfPage_A_50:out_of_page_mr_a", "icTopBoxadOutOfPage_B_50:out_of_page_mr_b", "icPorvataDirect_A_50:porvata_direct_a", "icPorvataDirect_B_50:porvata_direct_b", "icFloorAdhesionTimeToCloseButton_A_95:show_floor_close_button_a", "icFloorAdhesionTimeToCloseButton_B_5:show_floor_close_button_b", "icInvisibleHighImpact2TimeToCloseButton_A_50:show_ihi2_close_button_a", "icInvisibleHighImpact2TimeToCloseButton_B_50:show_ihi2_close_button_b"],
            "wgAdDriverF2DelayTimeout": 2000,
            "wgAdDriverF2VideoF15nCountries": ["XX\/50"],
            "wgAdDriverF2VideoF15nMap": {
                "s5U0H81Z": 17,
                "6RpYJDfL": 18,
                "pH2kwi4D": 9,
                "YmjQ5R6g": 7,
                "sawnTCy5": 7,
                "uCdPGOKf": 7,
                "cnWfDHjz": 22,
                "oMIfedDt": 11,
                "OyKkwCh9": 10
            }
        };

        location.search.replace(/InstantGlobals\.(\w+)=(\d)/g, function(a, b, c) {
            Wikia.InstantGlobals[b] = c > 0;
        });
        location.search.replace(/InstantGlobals\.(\w+)=\[(.*?)]/g, function(a, b, c) {
            Wikia.InstantGlobals[b] = c.split(',');
        });
    