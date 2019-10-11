// LACUNA LAZY LOAD FALLBACK
function lacuna_lazy_load(id, callback){
    fetch("http://127.0.0.1:8125/lazyload/", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({id})
    }).then(response => {
        return response.text();
    }).then(callback);
}

            (function($) {lacuna_lazy_load("lacuna_cache/exported_83xrb6.js[26:19636]", functionData => eval(functionData))useGtm) {
                            if (gaOptimize) {
                                gaOptimize.a8cAnalyticsSetup(kit, config);
                            }

                            var dcmsid = kit.docCookies.getItem('dcmsid');
                            dcmsid = dcmsid || kit.uniqueId();
                            kit.docCookies.setItem('dcmsid', dcmsid, 1800, '/', '.rootDomain');

                            window.dataLayer.push({
                                'event': 'a8c-analytics:fire-sensitive-pixels',
                                'sensitive_pixel_option': a8cAnalytics.kit.docCookies.getItem('sensitive_pixel_option'),
                                'isHomepage': config.isHomepage,
                                'WP User Id Hash': config.currentUserIdHash,
                                'WP User Email Hash': config.currentUserEmailHash,
                                'Landing Page Name': config.lpName,
                                'Landing Page Variation': config.lpVariation,
                                'DCM Session Id': dcmsid,
                            });

                            if (config.currentUserIdHash) {
                                fireDCMFloodlightEventsGTM(null);
                            } else {
                                kit.tracksAnonId(fireDCMFloodlightEventsGTM);
                            }
                        } else {
                            fireGoogleAnalytics();
                            loadGoogleAdsGtag();
                            fireDCMFloodlight();
                            fireFacebook();
                            fireQuantcast();
                            fireOutbrain();
                            firePinterest();
                            fireYahooGeminiOath();
                            fireBing();
                            fireAdRoll();
                            // fireTwitter();
                            // fireLinkedIn();
                            fireIconMedia();
                            fireExperianAddressableTV();
                            fireClickCease();
                            kit.fireHotjar(227769);
                        }
                    })
                });
            })(window.jQuery);
        