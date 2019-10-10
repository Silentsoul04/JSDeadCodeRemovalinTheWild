
        doWithAds(function() {
            if (typeof MAsf != 'undefined' && typeof MAsf.registerCustomMessageListener === 'function') {
                MAsf.registerCustomMessageListener('setPartner', window.ad_utils.set_partner);
                MAsf.registerCustomMessageListener('sendMetrics', window.generic.monitoring.update_sf_slot_metrics);
            }
        }, "ads js missing, skipping safeframe setup.");
    