
        doWithAds(function() {___jdce_logger("lacuna_cache/exported_hqqwu3.js", 19, 373);
            if (typeof MAsf != 'undefined' && typeof MAsf.registerCustomMessageListener === 'function') {
                MAsf.registerCustomMessageListener('setPartner', window.ad_utils.set_partner);
                MAsf.registerCustomMessageListener('sendMetrics', window.generic.monitoring.update_sf_slot_metrics);
            }
        }, "ads js missing, skipping safeframe setup.");
    