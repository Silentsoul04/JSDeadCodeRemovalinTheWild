
        var comboRetry = 0,
            initOk = false,
            clientAppVerifier,
            clientAppTimeLimit = 5 * 1000;


        var displayError = function() {
            var dialogWrapper = document.createElement('div');
            dialogWrapper.classList.add('pageLoadingDialogWrapper');

            var dialog = document.createElement('div');
            dialog.classList.add('pageLoadingDialog');

            dialog.innerHTML = '<h1>Oops!</h1><br/>An issue occurred while loading.<br/><br/>Please refresh the page.';

            dialogWrapper.appendChild(dialog);
            (document.body || document.getElementsByTagName('body')[0]).appendChild(dialogWrapper);
            dialog.onclick = function() {
                document.location.reload();
            };
        }

        var initFcn = function(Y) {

            Y.ClientApp.init({
                    initialView: {
                        name: 'sohp-slideshow-sohp-e-view',
                        params: {
                            "whichTabIsActiveOnRender": "none",
                            "isOwner": false,
                            "UA": {
                                "isBot": false,
                                "isSharingBot": false,
                                "isUnsupportedBrowser": false,
                                "isMobileBrowser": true,
                                "isMobileOrTablet": true,
                                "isFacebook": false,
                                "isReallyUnsupportedBrowser": false,
                                "os": "android",
                                "isWebview": false,
                                "isGooglePageSpeedMobile": false,
                                "isGooglePageSpeedDesktop": false,
                                "isEdge": false,
                                "isOldWindows": false
                            },
                            "isMobile": true,
                            "adConfig": [{
                                "name": "\/21833886396\/Flickr_FeedBillboard_Desktop_970x250",
                                "ad_div": "gpt-feed-billboard",
                                "ad_sizes": [{
                                    "ad_width": 970,
                                    "ad_height": 250
                                }]
                            }, {
                                "name": "\/21833886396\/Flickr_PhotoStream_Desktop_Multi",
                                "ad_div": "gpt-photostream-interstitial",
                                "ad_sizes": [{
                                    "ad_width": 320,
                                    "ad_height": 250
                                }, {
                                    "ad_width": 970,
                                    "ad_height": 250
                                }]
                            }]
                        },
                        spaceId: 792600582
                    },
                    modelExport: {
                        "legend": [],
                        "main": {
                            "sohp-slideshow-photo-models": [{
                                "_flickrModelRegistry": "sohp-slideshow-photo-models",
                                "photoList": [{
                                    "id": "32647649804",
                                    "title": "Magic",
                                    "userName": "Koen Jacobs",
                                    "photoUrl": "\/photos\/marikoen\/32647649804\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/magic_small.jpg"
                                }, {
                                    "id": "38740240425",
                                    "title": "Blue and Gold",
                                    "userName": "Dylan Toh",
                                    "photoUrl": "\/photos\/9619621@N02\/38740240425\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/blueandgold_small.jpg"
                                }, {
                                    "id": "26016853177",
                                    "title": "Parent and Child",
                                    "userName": "Patricia Ware",
                                    "photoUrl": "\/photos\/48945861@N06\/26016853177\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/parent_and_child_small.jpg"
                                }, {
                                    "id": "39709950741",
                                    "title": "Arches Within Arches",
                                    "userName": "Wayne Pinkston",
                                    "photoUrl": "\/photos\/70992083@N07\/39709950741\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/arches_within_arches_small.jpg"
                                }, {
                                    "id": "41731024880",
                                    "title": "Burrowing Owl Juvenile - Salton Sea",
                                    "userName": "Dave Zimmerman",
                                    "photoUrl": "\/photos\/111053253@N04\/41731024880\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/burrowing_owl_juvenile_salton_sea_small.jpg"
                                }, {
                                    "id": "42410096950",
                                    "title": "Ala-Archa Kyrgyzstan Inferno",
                                    "userName": "Albert Dros",
                                    "photoUrl": "\/photos\/albertdros\/42410096950\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/ala_archa_kyrgyzstan_inferno_small.jpg"
                                }, {
                                    "id": "39593615781",
                                    "title": "Niagara Falls in winter",
                                    "userName": "Marc McDermott",
                                    "photoUrl": "\/photos\/133888804@N08\/39593615781\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/niagarafallsinwinter_small.jpg"
                                }, {
                                    "id": "39445012555",
                                    "title": "Rainy infinite mind",
                                    "userName": "Frank Waterkotte",
                                    "photoUrl": "\/photos\/131084835@N03\/39445012555\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/rainy_infinite_mind_small.jpg"
                                }, {
                                    "id": "43037668741",
                                    "title": "Bruine beer \/ Brown bear \/ Ours brun",
                                    "userName": "Gladys Klip",
                                    "photoUrl": "\/photos\/84179858@N06\/43037668741",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/bruine_beer_brown_bear_ours_brun_small.jpg"
                                }, {
                                    "id": "45670544451",
                                    "title": "Wintertime Happiness",
                                    "userName": "Alicja Zmysłowska",
                                    "photoUrl": "\/photos\/110044247@N08\/45670544451\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/wintertimehappiness_small.jpg"
                                }, {
                                    "id": "40059848781",
                                    "title": "Vestrahorn Islande",
                                    "userName": "RUFF Etienne",
                                    "photoUrl": "\/photos\/95403249@N06\/40059848781\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/vestrahorn_islande_small.jpg"
                                }, {
                                    "id": "39928248075",
                                    "title": "Peace Amid Chaos",
                                    "userName": "Peter Stewart",
                                    "photoUrl": "\/photos\/34721981@N06\/39928248075",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/peaceamongchaos_small.jpg"
                                }, {
                                    "id": "26537562208",
                                    "title": "Eye to Eye",
                                    "userName": "bmse",
                                    "photoUrl": "\/11241265@N04\/26537562208\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/eyetoeye_small.jpg"
                                }, {
                                    "id": "42728148584",
                                    "title": "breathe",
                                    "userName": "Paul",
                                    "photoUrl": "\/photos\/86832534@N03\/42728148584\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/breathe_small.jpg"
                                }, {
                                    "id": "25254688767",
                                    "title": "Falcon Heavy Demo Mission",
                                    "userName": "SpaceX",
                                    "photoUrl": "\/photos\/130608600@N05\/25254688767\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/falcon_heavy_demo_mission_small.jpg"
                                }, {
                                    "id": "41559756741",
                                    "title": "Emotions in Camargue",
                                    "userName": "Alberto Ghizzi Panizza",
                                    "photoUrl": "\/photos\/16117478@N07\/41559756741\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/emotions_in_camargue_small.jpg"
                                }, {
                                    "id": "24635253357",
                                    "title": "A magical dawn",
                                    "userName": "images@twiston",
                                    "photoUrl": "\/photos\/132822455@N05\/24635253357\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/a_magical_dawn_small.jpg"
                                }, {
                                    "id": "42824769374",
                                    "title": "Comfortably Dumb (EXPLORE)",
                                    "userName": "SkyeWeasel",
                                    "photoUrl": "\/photos\/95388056@N02\/42824769374\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/comfortablydumb_small.jpg"
                                }, {
                                    "id": "25522615597",
                                    "title": "Crazy Sky",
                                    "userName": "Carlos F. Turienzo",
                                    "photoUrl": "\/photos\/13560308@N05\/25522615597\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/crazy_sky_small.jpg"
                                }, {
                                    "id": "38982783700",
                                    "title": "Underwater Lighting",
                                    "userName": "Tony Sellen",
                                    "photoUrl": "\/photos\/81660619@N04\/38982783700\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/underwater_lighting_small.jpg"
                                }, {
                                    "id": "41428744801",
                                    "title": "Milford Sound Dramatic Clouds",
                                    "userName": "Jimmy McIntyre",
                                    "photoUrl": "\/photos\/73064996@N08\/41428744801\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/milford_sound_small.jpg"
                                }, {
                                    "id": "27399307838",
                                    "title": "What's a Mother to do?",
                                    "userName": "Daniel D'Auria",
                                    "photoUrl": "\/photos\/74501611@N00\/27399307838\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/whatsamothertodo_small_no_watermark.jpg"
                                }, {
                                    "id": "42729243344",
                                    "title": "Dramatic sunrise. Cadini di Misurina - Dolomites",
                                    "userName": "W.I.L.D. Giorgio",
                                    "photoUrl": "\/photos\/108803994@N02\/42729243344\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/dramatic_sunrise_cadini_di_misurina_dolomites_small.jpg"
                                }, {
                                    "id": "42862448954",
                                    "title": "The Congregation",
                                    "userName": "Aaron Reed",
                                    "photoUrl": "\/photos\/7806304@N08\/42862448954\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/the_congregation_small.jpg"
                                }, {
                                    "id": "38961235164",
                                    "title": "Winter wonder | Explored 2018.01.14 | Thank you all!",
                                    "userName": "András Pásztor",
                                    "photoUrl": "\/photos\/95794505@N06\/38961235164\/",
                                    "url": "https:\/\/combo.staticflickr.com\/ap\/build\/images\/sohp\/2018-top-25\/winterwonder_small.jpg"
                                }],
                                "id": "1"
                            }]
                        },
                        "version": "cyclical-json@2.1.3"
                    },
                    auth: auth,
                    reqId: reqId,
                    params: {
                        "bucket": 70,
                        "protocol": "https",
                        "buckets": {
                            "photo_page": "scrappy_beta_signed_out",
                            "https_all": "ssl_redirect_enabled",
                            "search_page": "unified_page_plus",
                            "photostream_page": "reboot",
                            "albums_page": "reboot",
                            "favorites_page": "reboot",
                            "groups_page": "reboot_groups_members",
                            "explore_page": "reboot",
                            "celeb_search": "celeb_search",
                            "advanced_search_page": "unified_page_redesign",
                            "unified_groups_search_page": "unified_page_redesign",
                            "unified_people_search_page": "unified_page_redesign",
                            "android_ads": "no_ad",
                            "zoom": "zoom",
                            "enable_wallart": "no_wallart_group",
                            "enable_subscription_discounts": "enabled",
                            "enable_personalized_group_recommendations": "coldstart_no_perso",
                            "rebuild_photo_count_star_photo_search_shard": "disabled",
                            "enable_aggregation": "no_agg_group",
                            "embedr_v2": "embedr_v1",
                            "lh_edge_pod": "normal",
                            "native_sharing": "native_sharing",
                            "autosync_notifications": "autosync_pn_off",
                            "new_stats": "new_stats",
                            "public_domain": "public_domain_enabled",
                            "feed_reskin": "reskin",
                            "autotags_mdbm": "current",
                            "photo_page_autotags": "show_autotags",
                            "shared_entity_views": "enabled",
                            "magic_view_cache_side": "side_a",
                            "magic_view_date_taken_sort": "date_taken",
                            "mobile_photo_page": "new_page",
                            "curation_tools": "default",
                            "gn_upload_icon": "enabled",
                            "embedr_v3": "embedr-v3",
                            "rebootify-tags": "rebootv1",
                            "rebootify-places": "classic",
                            "refetch_on_navigate": "enabled",
                            "share_modal_restyle": "enabled",
                            "signup_download_modal_test": "enabled",
                            "csp_violations_test": "enforcement",
                            "enable_album_sort_on_reboot": "disabled",
                            "flickvr": "enabled",
                            "follow_spam": "disabled",
                            "tumblr_embed_share": "enabled",
                            "mini_signup_footer": "control",
                            "camera_roll_preview": "no-cr-preview",
                            "photoscore_rank_in_search": "enable_photoscore_rank",
                            "buy_button_tests": "licenseButton",
                            "photo_list_buy_button_tests": "buy",
                            "reboot_xhr_lib_tests": "new",
                            "reboot_view_loading_tests": "blocking",
                            "rebootify_feed": "classic",
                            "reboot_notes": "notes",
                            "css_rollups": "rollups",
                            "html5_video": "video",
                            "signed_out_home_page": "optimized",
                            "signed_out_home_page_view_counting": "enabled",
                            "email_verify": "disabled",
                            "similarity_search": "disabled",
                            "rebootify_profile": "rebootwhelp",
                            "flickr_reactions": "normal",
                            "comment_flagging": "normal",
                            "flickr_photo_editor": "disabled",
                            "partner_account_banner": "disabled",
                            "offline_download": "enabled-aws-batch",
                            "thorn_moderation-videos": "disable-thorn",
                            "thorn_moderation_photos": "enable-thorn",
                            "feed_static_content": "disabled",
                            "privacy_footer": "enabled",
                            "add_to_curations_views": "enabled",
                            "photostream_edit": "enabled",
                            "new_photoset_counts": "enabled",
                            "digitalriver": "prodandrealorder",
                            "checkout": "production",
                            "btdrmigration": "disabled",
                            "new_group_opt_out": "enabled",
                            "feedback_modal": "disabled",
                            "rebootify_galleries": "rebootnewlimitbanner",
                            "continuation_galleries": "disabled",
                            "new_cache_groups": "disabled",
                            "photo_perm_recheck": "enabled",
                            "gdpr_data_request_ui": "enabled",
                            "xmen_double_writes": "disabled",
                            "legacy_pro_badge": "enabled",
                            "all_pros_unlimited_storage": "enabled",
                            "refencing_properk_updates": "enabled",
                            "refencing_announcement": "enabled",
                            "refencing_announcement_banner": "enabled",
                            "gift_pro": "enabled",
                            "new_perks": "enabled",
                            "deprecate_partner_pros": "enabled",
                            "new_user_account_card": "enabledwclassic",
                            "upload-blocking": "enabled",
                            "enable-adobe-analytics": "enabled",
                            "enable-fb-pixel-analytics": "enabled",
                            "xmen_video_uploads": "enabled",
                            "enable_footer_help_link_move": "disabled",
                            "enable_bulk_license_change_blocking": "enabled",
                            "dynamo_read": "enabled",
                            "identity_site": "login_picker",
                            "limited_time_pro_text": "enabled",
                            "backfill_photos_count_license_0": "disabled",
                            "sohp-A-B-C-Test": "E",
                            "dedup_web_uploadr": "disabled",
                            "enable_thanos_overlay": "enabledv2",
                            "use_AWS_DB_for_APIs": "disabled",
                            "disable_memcache_use": "disabled",
                            "db_latency_testing_timings": "disabled",
                            "bypass_cerb": "disabled",
                            "enable_psylocke": "disabled",
                            "enable_pixsy_perks_cards": "enabled",
                            "enable_forced_migration": "disabled",
                            "enable_emoji_picker": "disabled",
                            "enable_emoji_parser": "disabled",
                            "enable_print_service": "enabled",
                            "enable_gh_jobs_page": "enabled",
                            "enable_create_groups": "disabled",
                            "enable_aws_account_search": "enabled",
                            "enable_aws_photo_search": "disabled",
                            "enable_aws_group_search": "disabled",
                            "enable_xmen_photo_sizes": "disabled"
                        },
                        "slice": 90,
                        "referrer": "default",
                        "flipper": {
                            "buckets": true,
                            "reboot_photo_page_optin_type": "forced_in",
                            "global-nav-enabled": true,
                            "enable-photopage-autotags-beta-label": true,
                            "enable-license-search": true,
                            "rename-set-to-album": true,
                            "rebootify-groups-list": true,
                            "rebootify-group-home": true,
                            "rebootify-group-pool": true,
                            "rebootify-group-discussion": true,
                            "rebootify-group-discussions-list": true,
                            "rebootify-group-members": true,
                            "enable-scrappy-photo-page": true,
                            "enable-scrappy-notes": true,
                            "enable-scrappy-notes-deleting": true,
                            "enable-scrappy-notes-editing": true,
                            "enable-scrappy-notes-adding": true,
                            "enable-ad-security-malware-removal-header": true,
                            "enable-groups-optout": true,
                            "rebootify-stats": 1,
                            "enable-shared-entity-view": true,
                            "browser-upgrade-interstitial": true,
                            "zoom-proxy-prefix": "",
                            "enable-hover-account-menu": true,
                            "enable-groups-discussion-optout": true,
                            "enable-search-optout": true,
                            "enable-max-editing-limit": true,
                            "enable-payouts": true,
                            "native-sharing": true,
                            "enable-album-download": true,
                            "enable-just-your-album-download": true,
                            "search-tiles": true,
                            "search-exclude-people": true,
                            "evict-models-on-navigate": true,
                            "enable-viewer-nsid-check": true,
                            "enable-pro-badge": 1,
                            "enable-pro-page-new-perk-partners": true,
                            "enable-refencing-free-card": true,
                            "enable-all-pros-unlimited-storage": true,
                            "enable-people-groups": true,
                            "enable-slender-advanced-search": true,
                            "enable-full-share-entity-page-rendering-for-bots": true,
                            "enable-embedr-in-share": true,
                            "enable-embedr-in-albums": true,
                            "enable-non-blocking-css": true,
                            "enable-shared-entity-download": true,
                            "enable-new-mobile-photo-page": 1,
                            "enable-album-pagination": true,
                            "rebootify-tags": true,
                            "enable-signed-out-cta-test": true,
                            "enable-signed-out-download-cta-test": true,
                            "enable-tag-page-link-on-photo-page": true,
                            "enable-share-restyle": true,
                            "enable-vr": true,
                            "enable-vr-landing": true,
                            "enable-static-tags-data": true,
                            "enable-reboot-group-invite-modal": true,
                            "enable-tumblr-embed-share": true,
                            "enable-signed-out-commenting": true,
                            "enable-resource-performance-timing": true,
                            "enable-hosted-fields": true,
                            "disable-uploadr-ads": true,
                            "buy-button-in-photolist": true,
                            "enable-mocking-pro": "0",
                            "enable-pro-only-desktop-uploadr": true,
                            "enable-adobe-discount": true,
                            "enable-xhr-lib-for-client-xhrs": true,
                            "enable-always-bind-mouse-events-zoom-view": true,
                            "enable-developer-panel": true,
                            "enable-adobe-2017-april1-terms": true,
                            "enable-feed-banner-ad": true,
                            "rebootify-galleries": true,
                            "enable-megadroparound": true,
                            "enable-privacy-footer": true,
                            "enable-offline-downloadr": true,
                            "enable-photostream-edit": true,
                            "enable-top-25-sohp-2017": true,
                            "enable-2018-tos": true,
                            "enable-adobe-analytics": true,
                            "enable-gdpr-data-request": true,
                            "enable-digital-river": true,
                            "enable-sift-hermes-beacon": true,
                            "enable-payment-methods": true,
                            "featured-gallery-banners": true,
                            "enable-2018-user-account-card": true,
                            "enable-pro-badge-toggle": true,
                            "enable-perks-accordion": true,
                            "enable-gift-pro": true,
                            "enable-upload-blocking": true,
                            "enable-limited-time-pro": true,
                            "enable-upload-limit-messages": true,
                            "disable-bulk-license-changes": true,
                            "enable-sohp-A-B-C-Test": "E",
                            "enable-pixsy-perks-cards": true,
                            "enable-photo-prints": true,
                            "enable-photo-prints-prod-url": true,
                            "enable-mega-limit-overlay": true,
                            "enable-gh-jobs-page": true,
                            "enable-prints-page": true
                        },
                        "lang": "en-US"
                    },
                    routeTiming: 0,
                    routeConfig: {
                        "module": "home-route",
                        "path": "\/",
                        "public": true
                    }
                })

                .then(function() {
                    clearTimeout(clientAppVerifier);
                })

                .then(function() {
                    initOk = true;
                    if (window.pageTiming) {
                        window.pageTiming.jsDone = new Date().getTime();
                    }
                }, function(ex) {

                    try {
                        var isUnsupportedBrowser = !!document.getElementById('banner-unsupported-browser-bc');

                        if (isUnsupportedBrowser) {
                            sendRequest('flickr.hermes.clientapp.unsupportedbrowserinitfail', 'client app init fail on unsupported browser');
                            beaconError('Client app failure on unsupported browser: ' + (ex && ex.message ? ex.message : ex), window.location.href, ex);

                        } else {
                            sendRequest('flickr.hermes.clientapp.initfail', 'client app init fail');
                            beaconError('Client app failure: ' + (ex && ex.message ? ex.message : ex), window.location.href, ex);


                        }
                    } catch (e) {
                        sendRequest('flickr.hermes.clientapp.initfail', 'client app init fail');
                        beaconError('Client app failure: ' + (ex && ex.message ? ex.message : ex), window.location.href, ex);


                    }

                });
        };

        var useSuccess = function(Y, status) {

            if (status && !status.success) {

                if (comboRetry === 0) {
                    comboRetry++;

                    if (typeof console !== 'undefined' && console.warn) {
                        console.warn('There was an error loading client modules, retrying: ' + status.msg);
                    }

                    if (sendRequest) {
                        sendRequest('flickr.hermes.clientapp.moduleretry', 'client app module loading fail, retrying');
                    }

                    Y.use('client-app', 'sohp-slideshow-sohp-e-view', 'sohp-slideshow-photo-models', useSuccess);

                } else {

                    if (typeof console !== 'undefined' && console.error) {
                        console.error('There was an error loading client modules: ' + status.msg);
                    }

                    if (sendRequest) {
                        sendRequest('flickr.hermes.clientapp.modulefail', 'client app module loading fail');
                    }
                    beaconError('There was an error loading client modules: ' + JSON.stringify(typeof status === 'object' ? status : {}));

                    displayError();

                }
            } else {
                initFcn(Y);
            }
        };


        clientAppVerifier = setTimeout(function() {
            if (!initOk) {

            }
        }, clientAppTimeLimit);

        app.yui.use('client-app', 'sohp-slideshow-sohp-e-view', 'sohp-slideshow-photo-models', useSuccess);
    