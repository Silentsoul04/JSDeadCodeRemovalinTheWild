
        (function(root) {
            // -- Data --
            root.YUI_config = {
                "version": "3.16.0-flickr.3",
                "base": "https:\u002F\u002Fcombo.staticflickr.com\u002Fyui\u002F3.16.0\u002F",
                "comboBase": "https:\u002F\u002Fcombo.staticflickr.com\u002Fzz\u002Fcombo?",
                "comboSep": "&",
                "root": "yui:3.16.0\u002F",
                "filter": "min",
                "logLevel": "error",
                "combine": true,
                "patches": [function patchOptionalRequires(Y, loader) {
                    var getRequires = loader.getRequires,
                        addModule = loader.addModule;
                    // patching `addModule` method to support polyfills
                    loader.addModule = function(mod) {
                        var configFn = mod && mod.configFn;
                        if (mod && mod.test) {
                            mod.configFn = function(mod) {
                                if (!mod.test(Y)) {
                                    // if a test fails, the module should be dropped from the registry
                                    return false;
                                }
                                if (configFn) {
                                    // falling back to the original configFn if the test passed
                                    return configFn.apply(this, arguments);
                                }
                            };
                        }
                        return addModule.apply(this, arguments);
                    };
                    // patching `getRequires` to support optional requires
                    loader.getRequires = function(mod) {
                        var i, len, m,
                            r = getRequires.apply(this, arguments);
                        // expanding requirements with optional requires
                        if (mod.optionalRequires && !mod.optionalRequiresExpanded) {
                            mod.optionalRequiresExpanded = [];
                            len = mod.optionalRequires.length;
                            for (i = 0; i < len; i += 1) {
                                m = this.getModule(mod.optionalRequires[i]);
                                if (m) {
                                    mod.optionalRequiresExpanded = mod.optionalRequiresExpanded.concat(this.getRequires(m), [m.name]);
                                }
                            }
                        }
                        return mod.optionalRequiresExpanded && mod.optionalRequiresExpanded.length ? [].concat(mod.optionalRequiresExpanded, r) : r;
                    };
                }, function patchTemplatesRequires(Y, loader) {
                    var getRequires = loader.getRequires;
                    loader.getRequires = function(mod) {
                        var i, len, m,
                            r = getRequires.apply(this, arguments);
                        // expanding requirements with templates required
                        if (mod.templates && !mod.templatesExpanded) {
                            len = mod.templates.length;
                            mod.templatesExpanded = [];
                            for (i = 0; i < len; i += 1) {
                                m = this.getModule(mod.group + '-template-' + mod.templates[i]);
                                if (m) {
                                    mod.templatesExpanded = mod.templatesExpanded.concat(this.getRequires(m), [m.name]);
                                } else {
                                    throw new Error('Invalid template [' + mod.templates[i] + '], module [' +
                                        mod.group + '-template-' + mod.templates[i] + '] is not registered.');
                                }
                            }
                        }
                        return mod.templatesExpanded && mod.templatesExpanded.length ? [].concat(mod.templatesExpanded, r) : r;
                    };
                }, function patchLangBundlesRequires(Y, loader) {
                    var getRequires = loader.getRequires;
                    loader.getRequires = function(mod) {
                        var i, j, m, name, mods, loadDefaultBundle,
                            locales = Y.config.lang || [],
                            r = getRequires.apply(this, arguments);
                        // expanding requirements with optional requires
                        if (mod.langBundles && !mod.langBundlesExpanded) {
                            mod.langBundlesExpanded = [];
                            locales = typeof locales === 'string' ? [locales] : locales.concat();
                            for (i = 0; i < mod.langBundles.length; i += 1) {
                                mods = [];
                                loadDefaultBundle = false;
                                name = mod.group + '-lang-' + mod.langBundles[i];
                                for (j = 0; j < locales.length; j += 1) {
                                    m = this.getModule(name + '_' + locales[j].toLowerCase());
                                    if (m) {
                                        mods.push(m);
                                    } else {
                                        // if one of the requested locales is missing,
                                        // the default lang should be fetched
                                        loadDefaultBundle = true;
                                    }
                                }
                                if (!mods.length || loadDefaultBundle) {
                                    // falling back to the default lang bundle when needed
                                    m = this.getModule(name);
                                    if (m) {
                                        mods.push(m);
                                    }
                                }
                                // adding requirements for each lang bundle
                                // (duplications are not a problem since they will be deduped)
                                for (j = 0; j < mods.length; j += 1) {
                                    mod.langBundlesExpanded = mod.langBundlesExpanded.concat(this.getRequires(mods[j]), [mods[j].name]);
                                }
                            }
                        }
                        return mod.langBundlesExpanded && mod.langBundlesExpanded.length ? [].concat(mod.langBundlesExpanded, r) : r;
                    };
                }],
                "maxURLLength": 1999,
                "loadOptional": true,
                "lang": "en-US",
                "flickr": {
                    "url": {
                        "protocol": "https",
                        "host": "www.flickr.com",
                        "path": ""
                    },
                    "farm": {
                        "host": "staticflickr.com"
                    },
                    "xmen": {
                        "host": "live.staticflickr.com"
                    },
                    "api": {
                        "version_urls": true,
                        "site_key_fetch_interval": 3600,
                        "site_key_retry_interval": 60,
                        "write_api_method_regex": "(?:add|create|delete|edit|update|join|leave|approve|reject|suggestLocation|rotate|reorder|orderSets|mute|post|record|subscribe|remove|\\.set|submit|unmute|move|sort|hide|block|unblock|insert|promote|login|cancel|applyCoupon|purchaseSubscription|replacePaymentMethod|giftPro|flickr\\.site\\.getKey|flickr\\.cameraroll\\.getPhotosMeta|flickr\\.photos\\.getPhotos|flickr\\.download\\.archives\\.create)[a-zA-Z]*$",
                        "max_concurrent_photos_api_can_handle": 250,
                        "max_concurrent_photo_date_sets": 100,
                        "max_concurrent_photo_deletions": 50,
                        "max_tags_in_photo": 75,
                        "max_people_in_photo": 50,
                        "max_concurrent_api_calls": 6,
                        "client_default_timeout": 30000,
                        "client_retry_timeout": 60000,
                        "server_default_timeout": 10000,
                        "server_retry_timeout": 10000,
                        "hostname_client": "https:\u002F\u002Fapi.flickr.com",
                        "hostname_client_upload": "https:\u002F\u002Fup.flickr.com\u002Fservices\u002Fupload",
                        "hostname_client_replace": "https:\u002F\u002Fup.flickr.com\u002Fservices\u002Freplace",
                        "site_key": "688feec1dc14c37fb4b379ba156a78a0",
                        "site_key_fetched": 1570677494
                    },
                    "apiv2": {
                        "host": "api.flickr.com",
                        "basePath": "\u002Fv2"
                    },
                    "csrf": {
                        "cookie_name": "csrf",
                        "ttlSeconds": 28800,
                        "fetch_interval": 14400,
                        "retry_interval": 60
                    },
                    "cookies": {
                        "domain": ".flickr.com"
                    },
                    "facebook": {
                        "client_id": "462754987849668"
                    },
                    "blogger": {
                        "client_id": "110105599151.apps.googleusercontent.com"
                    },
                    "adobe": {
                        "analytics": {
                            "url": "\u002F\u002Fassets.adobedtm.com\u002Flaunch-ENd8846597b4254546afff313cb328c80d.min.js"
                        }
                    },
                    "better_cache_size": 1000,
                    "comment_image_max_width": 405,
                    "bundle": {
                        "name": "hermes"
                    },
                    "log_level": {
                        "server": 30,
                        "browser": false
                    },
                    "error": {
                        "show_debugging_info": false
                    },
                    "flipper": {
                        "buckets": true,
                        "reboot_photo_page_optin_type": "",
                        "global-nav-enabled": false,
                        "enable-photopage-autotags-beta-label": false,
                        "enable-license-search": true,
                        "show_photo_ads": false,
                        "get-context-photos-in-photo-page-route": false,
                        "rename-set-to-album": true,
                        "rebootify-groups-list": false,
                        "rebootify-group-home": false,
                        "rebootify-group-pool": false,
                        "rebootify-group-discussion": false,
                        "rebootify-group-discussions-list": false,
                        "rebootify-group-members": false,
                        "notifications": false,
                        "enable-scrappy-photo-page": true,
                        "enable-scrappy-notes": false,
                        "enable-scrappy-notes-deleting": false,
                        "enable-scrappy-notes-editing": false,
                        "enable-scrappy-notes-adding": false,
                        "enable-ad-security-malware-removal-header": false,
                        "enable-groups-optout": true,
                        "embedr": false,
                        "enable-photopage-slideshow": false,
                        "products-security-pin": false,
                        "marketplace-releases": false,
                        "marketplace-storefront": false,
                        "notifications-menu": false,
                        "interesting-map": false,
                        "rebootify-stats": true,
                        "enable-shared-entity-view": false,
                        "browser-upgrade-interstitial": true,
                        "enable-zoom-proxy": false,
                        "zoom-proxy-prefix": "",
                        "enable-hover-account-menu": false,
                        "enable-groups-discussion-optout": true,
                        "embedrVTwo": false,
                        "enable-search-optout": true,
                        "auto-apply-coupon": false,
                        "enable-max-editing-limit": true,
                        "enable-payouts": true,
                        "disable-payouts-licensing-check": false,
                        "enable-free-shipping": false,
                        "native-sharing": false,
                        "enable-album-download": true,
                        "enable-just-your-album-download": true,
                        "search-tiles": false,
                        "search-exclude-people": false,
                        "evict-models-on-navigate": true,
                        "model-eviction-debugging": false,
                        "enable-better-photo-page-seo": false,
                        "enable-bots-server-rendering": false,
                        "enable-forced-server-render": false,
                        "disable-client-app": false,
                        "enable-server-render-for-unsupported-browsers": false,
                        "enable-viewer-nsid-check": true,
                        "enable-pro-badge": true,
                        "enable-pro-page-new-perk-partners": false,
                        "enable-refencing-free-card": false,
                        "enable-all-pros-unlimited-storage": false,
                        "enable-flickr-embeds-on-tumblr": false,
                        "uploader-debugging": false,
                        "enable-people-groups": false,
                        "enable-slender-advanced-search": false,
                        "enable-full-share-entity-page-rendering-for-bots": false,
                        "enable-embedr-in-share": false,
                        "enable-embedr-in-albums": false,
                        "enable-non-blocking-css": true,
                        "enable-shared-entity-download": true,
                        "enable-new-mobile-photo-page": true,
                        "geotag-on-photo-page": false,
                        "enable-album-pagination": true,
                        "enable-exposure-search": false,
                        "rebootify-tags": true,
                        "rebootify-places": false,
                        "enable-signed-out-cta-test": true,
                        "enable-signed-out-download-cta-test": false,
                        "enable-sign-up-interstitial-test": false,
                        "enable-sign-up-rail-test": false,
                        "enable-mini-sign-up-footer": false,
                        "enable-large-sign-up-footer": false,
                        "mini-signup-footer-avatar": false,
                        "mini-signup-footer-cancellable": false,
                        "enable-cr-preview": false,
                        "enable-tag-page-link-on-photo-page": false,
                        "enable-share-restyle": false,
                        "remove-by-attribution": false,
                        "enable-vr": false,
                        "enable-vr-headset": false,
                        "enable-vr-landing": false,
                        "enable-static-tags-data": true,
                        "enable-local-flickvr-dev": false,
                        "enable-reboot-group-invite-modal": true,
                        "enable-tumblr-embed-share": false,
                        "enable-signed-out-commenting": true,
                        "enable-resource-performance-timing": true,
                        "disable-magic-bcp": false,
                        "enable-hosted-fields": true,
                        "enable-v2-tags": false,
                        "enable-kill-scrappy-dialogjs": false,
                        "enable-v2-public-searches": false,
                        "enable-change-album-sorting": false,
                        "enable-public-guestpass": false,
                        "disable-uploadr-ads": false,
                        "buy-button-in-photolist": false,
                        "enable-sets-list-loading-fix": false,
                        "enable-mocking-pro": "0",
                        "enable-pro-only-desktop-uploadr": false,
                        "enable-adobe-discount": false,
                        "enable-xhr-lib-for-client-xhrs": true,
                        "enable-non-blocking-on-non-required-views": false,
                        "enable-always-bind-mouse-events-zoom-view": true,
                        "enable-embed-private-photo-warning": false,
                        "enable-pride-day-flair": false,
                        "enable-french-day": false,
                        "enable-fluid-modal-for-aviary": false,
                        "enable-force-new-feed-ads-everyone": false,
                        "enable-feed-groups-project-navbar-link": false,
                        "enable-feed-card-caret": false,
                        "enable-notif-caret": false,
                        "enable-feed-correct-layout": false,
                        "enable-feed-sidebar": false,
                        "enable-feed-static-content": false,
                        "enable-developer-panel": true,
                        "enable-similarity-search": false,
                        "enable-similarity-search-with-term": false,
                        "enable-similarity-search-from-photo-page": false,
                        "enable-similarity-search-safety": false,
                        "moola-killswitch": false,
                        "flickr-chat": false,
                        "enable-adobe-2017-april1-terms": true,
                        "enable-new-photo-editor": false,
                        "enable-partner-account-banner": false,
                        "enable-pro-adobe-discount": false,
                        "enable-feed-banner-ad": true,
                        "rebootify-galleries": false,
                        "enable-megadroparound": false,
                        "enable-all-photo-editor-features": false,
                        "enable-privacy-footer": false,
                        "enable-offline-downloadr": false,
                        "enable-photostream-edit": false,
                        "enable-feedback-modal": false,
                        "enable-top-25-sohp-2017": true,
                        "enable-smug-news-sohp-messaging": false,
                        "enable-2018-tos": true,
                        "enable-smug-donut-header": false,
                        "enable-adobe-analytics": false,
                        "enable-gdpr-data-request": false,
                        "enable-pro-2018-redesign-trial-elements": false,
                        "enable-digital-river": false,
                        "enable-digital-river-design-env": false,
                        "enable-update-dr-paypal-method": false,
                        "enable-sift-hermes-beacon": true,
                        "enable-payment-methods": true,
                        "featured-gallery-banners": false,
                        "disable-changing-sub-plans": false,
                        "enable_cognito": false,
                        "enable_cognito_migration": false,
                        "enable_cognito_forced_migration": false,
                        "enable-cognito-change-email-link": false,
                        "enable-cognito-migration-banner": false,
                        "enable-2018-user-account-card": false,
                        "enable-pro-badge-toggle": false,
                        "enable-braintree-sandbox": false,
                        "enable-perks-accordion": false,
                        "enable-gift-pro": false,
                        "enable-upload-limit-warning": false,
                        "enable-upload-blocking": false,
                        "enable-limited-time-pro": false,
                        "enable-upload-limit-messages": false,
                        "disable-bulk-license-changes": false,
                        "relocate-footer-help-button": false,
                        "enable-sohp-A-B-C-Test": "D",
                        "enable-pixsy-perks-cards": false,
                        "disable-video-playback": false,
                        "enable-photo-limit-overlay": false,
                        "enable-photo-prints": false,
                        "enable-photo-prints-prod-url": false,
                        "enable-mega-limit-overlay": false,
                        "enable-force-mega-limit-overlay": false,
                        "enable-outage-banner": false,
                        "enable-downtime-panda": false,
                        "enable_forced_migration_redirect": false,
                        "enable-emoji-picker": false,
                        "enable-emoji-parser": false,
                        "enable-emoji-icon": false,
                        "enable-gh-jobs-page": false,
                        "enable-prints-page": false,
                        "enable-camera-roll-subject-view": false,
                        "enable-events-page": false,
                        "enable-group-creation": false,
                        "enable_400_photo_sizes": false,
                        "enable_345K_photo_sizes": false,
                        "enable_6K_photo_sizes": false,
                        "enable-opt-in-migration": false
                    },
                    "photo_editor": {
                        "key": "yawmFjA-nQ9XzU9dcNfsMg"
                    },
                    "sift": {
                        "beacon_key_sandbox": "d8b315df87",
                        "beacon_key": "c753545238"
                    },
                    "cognito": {
                        "root": "https:\u002F\u002Fidentity.flickr.com",
                        "change-email-url": "\u002Fchange-email",
                        "change-password-url": "\u002Fchange-password",
                        "migration-url": "\u002Fmigration",
                        "migration-banner-cookie-name": "cmbs"
                    },
                    "braintree": {
                        "sandbox-tokenization-key": "sandbox_r7xkfqws_yhnhbzzcy9b8dfvn",
                        "smugmug-prod-tokenization-key": "production_cwttq6vg_zmwh4qc3bymxczvq"
                    },
                    "digitalRiver": {
                        "apiKey": "9ff7fb536b5e43cbb39dd7aa3fa376cb",
                        "storeBaseUrl": "www.flickrpro.com",
                        "logoutUrl": "https:\u002F\u002Fwww.flickrpro.com\u002Fstore\u002Fflickr\u002FLogout\u002Fformat.jsonp\u002F",
                        "clientSessionTokenUrl": "https:\u002F\u002Fwww.flickrpro.com\u002Fstore\u002Fflickr\u002FSessionToken?format=json",
                        "userManagementPageBaseUrl": "https:\u002F\u002Fwww.flickrpro.com\u002Fstore\u002Fflickr\u002F"
                    },
                    "paypal": {
                        "sandbox-access-token": "access_token$sandbox$snbzytt9qtp5kv42$c384f0a22d0f078f29a9e7d37bd778e2",
                        "production-access-token": "access_token$production$w9fhby9bnn8z3hhr$ff8578b5031be2997169869951ca3387",
                        "smugmug-production-access-token": "access_token$production$9jptk6pj8mfk8thg$9fe50fabb699492fe48936cd71e9c642",
                        "fantastic-fox-access-token": "access_token$production$yt9k3tr5xb26zcv6$1da3c95efa7f8de6bd91e9dfc0a4cc3a"
                    },
                    "moola": {
                        "endpoint": "\u002Fad",
                        "campaigns": {
                            "joincommunity": {
                                "feedlink": "\u002Faccount\u002Fupgrade\u002Fpro?coupon=FLICKRPRO15&select&utm_campaign=flickr-launch-15&utm_source=Flickr&utm_medium=display&utm_content=join-300x250",
                                "photopagelink": "\u002Faccount\u002Fupgrade\u002Fpro?coupon=FLICKRPRO15&select&utm_campaign=flickr-launch-15&utm_source=Flickr&utm_medium=display&utm_content=join-300x250"
                            }
                        },
                        "positions": {
                            "feed_banner": {
                                "name": "\u002F21833886396\u002FFlickr_FeedBillboard_Desktop_970x250",
                                "ad_div": "gpt-feed-billboard",
                                "ad_sizes": [{
                                    "ad_width": 970,
                                    "ad_height": 250
                                }]
                            },
                            "interstitial": {
                                "name": "\u002F21833886396\u002FFlickr_PhotoStream_Desktop_Multi",
                                "ad_div": "gpt-photostream-interstitial",
                                "ad_sizes": [{
                                    "ad_width": 320,
                                    "ad_height": 250
                                }, {
                                    "ad_width": 970,
                                    "ad_height": 250
                                }]
                            }
                        },
                        "threshold": {
                            "seo": {
                                "initial": 1,
                                "subsequent": 5
                            },
                            "facebook": {
                                "initial": 5,
                                "subsequent": 5
                            },
                            "default": {
                                "initial": 3,
                                "subsequent": 5
                            }
                        },
                        "number_of_ad_calls": 1,
                        "prefetch_threshold": 2
                    },
                    "urls": {
                        "assetRoot": "https:\u002F\u002Fcombo.staticflickr.com\u002Fap\u002Fbuild"
                    },
                    "cameraroll": {
                        "initial_photos_to_fetch": 5000,
                        "initial_photos_to_fetch_with_sizes": 500,
                        "poll_for_changes": true,
                        "seconds_to_poll_for_changes": 10,
                        "api_version": 2,
                        "use_ycs_ct_urls": true,
                        "suppress_logging": false
                    },
                    "model_eviction": {
                        "entry_refetch_exemptions": {
                            "cameraroll": true,
                            "photo_page": true,
                            "account": true,
                            "create": true,
                            "marketplace": true
                        },
                        "exit_refetch_exemptions": {},
                        "transition_refetch_exemptions": {
                            "albums": {
                                "album": true
                            }
                        }
                    },
                    "link_redirect_warning": {
                        "url": "https:\u002F\u002Fwww.flickr.com\u002Fredirect?url="
                    },
                    "maps": {
                        "tile_providers": {
                            "nokia_here": {
                                "appId": "c8OyIJLoy95INu6VmOYD",
                                "appCode": "-2vyCQIFMO9cLgHOUEFOQA"
                            },
                            "mapbox": {
                                "username": "ericsoco",
                                "mapId": "i3636pba"
                            }
                        }
                    },
                    "notifications": {
                        "polling_delay": 60000,
                        "polling_failure_timeout": 300000,
                        "loading_count_refetch_delay": 60000
                    },
                    "rendering": {
                        "default_layout": "scrolling"
                    },
                    "downloadr": {
                        "max_album_items": 5000,
                        "max_cameraroll_items": 500
                    },
                    "group_photo_limits": {
                        "free": 30,
                        "pro": 60
                    },
                    "routing_params": ["rb", "welcome", "rd", "cr"],
                    "galleries": {
                        "photo_limit": 500
                    },
                    "account": {
                        "photo_limit": 1000,
                        "near_photo_limit": 900
                    },
                    "upload_blocking": {
                        "dismiss_upload_limit_warning_cookie_name": "dulw",
                        "dismiss_near_upload_limit_message_cookie_name": "duln",
                        "dismiss_at_upload_limit_message_cookie_name": "dula",
                        "dismiss_over_upload_limit_message_cookie_name": "dulo",
                        "dismiss_upload_limit_warning_cookie_hours": 36,
                        "dismiss_near_upload_limit_message_cookie_hours": 480,
                        "dismiss_at_upload_limit_message_cookie_hours": 480,
                        "dismiss_over_upload_limit_message_cookie_hours": 36,
                        "dismiss_photo_limit_overlay_cookie_name": "dplo"
                    },
                    "outage": {
                        "dismiss_outage_banner_cookie_name": "dob"
                    },
                    "banners": {
                        "dismiss_cookie_banner_name": "dcbn",
                        "dismiss_past_due_banner_name": "dpdbn"
                    },
                    "flickrprints": {
                        "devBaseUrl": "https:\u002F\u002Fsecure.flickrprints.net",
                        "baseUrl": "https:\u002F\u002Fsecure.flickrprints.com",
                        "cartPath": "\u002Fcheckout",
                        "devApiKey": "Pkc8jHwbStV2khwbRKkQwbD5gBNPs3zd",
                        "apiKey": "XQM5TWfscbqLqtQBFNg9stZNg7K22cv9",
                        "dismiss_intro_to_prints_cookie_name": "fprs"
                    },
                    "transport": {
                        "default_timeout": 60000
                    },
                    "clientNavEnabled": true,
                    "google": {
                        "analytics": {
                            "property_id": "UA-119381793-1",
                            "sample_rate": 10,
                            "scrolling_sample_rate": 1
                        }
                    },
                    "performance_samples": {
                        "default": 0,
                        "embedr_view": 1,
                        "search_photos_page_view": 1,
                        "search_photos_unified_page_view": 1,
                        "photo_page_view": {
                            "signedIn": 0.5,
                            "signedOut": 0.5
                        },
                        "photo_page_scrappy_view": {
                            "signedIn": 0.5,
                            "signedOut": 0.5
                        },
                        "photostream_page_view": 1,
                        "favorites_page_view": 1,
                        "albums_list_page_view": 1,
                        "album_page_view": 1,
                        "cameraroll_page_view": 1,
                        "mobile_photo_page_view": {
                            "signedIn": 0.5,
                            "signedOut": 0.5
                        },
                        "tags_page_view": 1,
                        "explore_page_view": 1,
                        "feed_page_view": 1
                    }
                },
                "groups": {
                    "browserify": {
                        "name": "browserify",
                        "base": "https:\u002F\u002Fcombo.staticflickr.com\u002Fap\u002Fbuild\u002F",
                        "combine": false
                    },
                    "hermes": {
                        "base": "https:\u002F\u002Fcombo.staticflickr.com\u002Fap\u002Fbuild\u002Fhermes-2.0.0+87deeb6\u002F",
                        "root": "ap:build\u002Fhermes-2.0.0+87deeb6\u002F",
                        "combine": true,
                        "filter": "min",
                        "comboBase": "https:\u002F\u002Fcombo.staticflickr.com\u002Fzz\u002Fcombo?",
                        "comboSep": "&",
                        "maxURLLength": 779
                    }
                },
                "modules": {
                    "flickr-router": {
                        "group": "browserify",
                        "langBundles": ["misc"],
                        "requires": ["oop", "page-title-helper", "moment", "flickr-route", "localizable", "url"],
                        "path": "javascripts\u002Fflickr-router-35f3d60b.js"
                    },
                    "feed-layouts": {
                        "group": "browserify",
                        "path": "javascripts\u002Ffeed-layouts-38cea169.js"
                    },
                    "clipboard": {
                        "group": "browserify",
                        "path": "javascripts\u002Fclipboard-63ac0ae7.js"
                    },
                    "superagent": {
                        "group": "browserify",
                        "path": "javascripts\u002Fsuperagent-f08bb393.js"
                    },
                    "braintree-web": {
                        "group": "browserify",
                        "path": "javascripts\u002Fbraintree-web-8b4f1e94.js"
                    },
                    "paypal-checkout": {
                        "group": "browserify",
                        "path": "javascripts\u002Fpaypal-checkout-0c8a943b.js"
                    },
                    "flimojis": {
                        "group": "browserify",
                        "path": "javascripts\u002Fflimojis-27a043c6.js"
                    }
                },
                "seed": ["yui", "loader-hermes"],
                "extendedCore": ["loader-hermes"]
            };
            root.app || (root.app = {});
            root.app.yui = {
                "use": function() {
                    return this._bootstrap('use', [].slice.call(arguments));
                },
                "require": function() {
                    this._bootstrap('require', [].slice.call(arguments));
                },
                "ready": function(callback) {
                    this.use(function() {
                        callback();
                    });
                },
                "_bootstrap": function bootstrap(method, args) {
                    var self = this,
                        d = document,
                        head = d.getElementsByTagName('head')[0],
                        ie = /MSIE/.test(navigator.userAgent),
                        callback = [],
                        config = typeof YUI_config != "undefined" ? YUI_config : {};

                    function flush() {
                        var l = callback.length,
                            i;
                        if (!self.YUI && typeof YUI == "undefined") {
                            throw new Error("YUI was not injected correctly!");
                        }
                        self.YUI = self.YUI || YUI;
                        for (i = 0; i < l; i++) {
                            callback.shift()();
                        }
                    }

                    function decrementRequestPending() {
                        self._pending--;
                        if (self._pending <= 0) {
                            setTimeout(flush, 0);
                        } else {
                            load();
                        }
                    }

                    function createScriptNode(src) {
                        var node = d.createElement('script');
                        if (node.async) {
                            node.async = false;
                        }
                        if (ie) {
                            node.onreadystatechange = function() {
                                if (/loaded|complete/.test(this.readyState)) {
                                    this.onreadystatechange = null;
                                    decrementRequestPending();
                                }
                            };
                        } else {
                            node.onload = node.onerror = decrementRequestPending;
                        }
                        node.setAttribute('src', src);
                        return node;
                    }

                    function load() {
                        if (!config.seed) {
                            throw new Error('YUI_config.seed array is required.');
                        }
                        var seed = config.seed,
                            l = seed.length,
                            i, node;
                        if (!self._injected) {
                            self._injected = true;
                            self._pending = seed.length;
                        }
                        for (i = 0; i < l; i++) {
                            node = createScriptNode(seed.shift());
                            head.appendChild(node);
                            if (node.async !== false) {
                                break;
                            }
                        }
                    }
                    callback.push(function() {
                        var i;
                        if (!self._Y) {
                            self.YUI.Env.core.push.apply(self.YUI.Env.core, config.extendedCore || []);
                            self._Y = self.YUI();
                            self.use = self._Y.use;
                            if (config.patches && config.patches.length) {
                                for (i = 0; i < config.patches.length; i += 1) {
                                    config.patches[i](self._Y, self._Y.Env._loader);
                                }
                            }
                        }
                        self._Y[method].apply(self._Y, args);
                    });
                    self.YUI = self.YUI || (typeof YUI != "undefined" ? YUI : null);
                    if (!self.YUI && !self._injected) {
                        load();
                    } else if (self._pending <= 0) {
                        setTimeout(flush, 0);
                    }
                    return this;
                }
            };
            root.YUI_config || (root.YUI_config = {});
            root.YUI_config.seed = ["https:\u002F\u002Fcombo.staticflickr.com\u002Fzz\u002Fcombo?yui:3.16.0\u002Fyui\u002Fyui-min.js&ap:build\u002Fhermes-2.0.0+87deeb6\u002Floader-hermes\u002Floader-hermes-min.js"];
            root.YUI_config.flickr || (root.YUI_config.flickr = {});
            root.YUI_config.flickr.api || (root.YUI_config.flickr.api = {});
            root.YUI_config.flickr.api.site_key = "a62aadf5c70a5e155243ce927a99adcc";
            root.YUI_config.flickr.api.site_key_fetched = 1570706295;
            root.YUI_config.flickr.api.site_key_expiresAt = 1570709895;
            root.YUI_config.modules || (root.YUI_config.modules = {});
            root.YUI_config.modules.IntlPolyfill = {
                "fullpath": "https:\u002F\u002Fcombo.staticflickr.com\u002Fzz\u002Fcombo?yui:platform\u002Fintl\u002F0.1.4\u002FIntl.min.js&yui:platform\u002Fintl\u002F0.1.4\u002Flocale-data\u002Fjsonp\u002Fen-US.js",
                "condition": {
                    "name": "IntlPolyfill",
                    "trigger": "intl-messageformat",
                    "test": function(Y) {
                        return !Y.config.global.Intl;
                    },
                    "when": "before"
                }
            };
            root.YUI_config.flickr.request || (root.YUI_config.flickr.request = {});
            root.YUI_config.flickr.request.hasSessionCookie = false;
            root.YUI_config.flickr.routes = {
                "patterns": {
                    "nsid_or_path_alias": "^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$",
                    "from_nsid_or_path_alias": "^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$",
                    "group_id": "^([0-9]+@N[0-9]+)|([0-9a-zA-Z-_]+)$",
                    "photo_id": "^[0-9]+$",
                    "book_id": "^[0-9]+$",
                    "order_id": "^[0-9]+$",
                    "set_id": "^[0-9]+$",
                    "collection_id": "^[0-9]+$",
                    "gallery_id": "^[0-9]+$",
                    "share_code": "^[0-9a-zA-Z]+$",
                    "comment_id": "^comment[0-9]+$",
                    "category_name": "^[a-zA-Z-_]+$",
                    "slideshow_start_id": "^[0-9]+$",
                    "page_number": "^[0-9]+$",
                    "context": "^[^\u002F]+$",
                    "tag_list": "^(?!\\?)([^\u002F]+)$",
                    "location": "^(?!\\?)([^\u002F]+)$",
                    "faves_path": "^(faves|favorites|favourites)$",
                    "albums_path": "^(sets|albums)$",
                    "year": "^[0-9]{4}$",
                    "month": "^[0-9]{2}$",
                    "day": "^[0-9]{2}$",
                    "checkout_step": "^.*$",
                    "topic_id": "^[0-9]+$",
                    "reply_id": "^[0-9]+$",
                    "wallart_id": "^[0-9]+$",
                    "creations_subpage": "^(books|wallart|wallarts)$",
                    "atos_type": "^(services|pro)$",
                    "date_string": "^[0-9]{4}-[0-9]{2}-[0-9]{2}$",
                    "domain": "^([a-zA-Z0-9-_]+\\.){1,}[a-zA-Z0-9-_]{2,}$",
                    "sort": "^(views|faves|favs|favorites|favourites|comments|interestingness)$",
                    "timeframe": "^(today|yesterday|lastweek|thisweek|twoweeksago|threeweeksago|theweekbeforethat|theweekbeforetheweekbeforethat|week|alltime|total)$",
                    "subscriptionplan": "^(pro-3month|pro-1year|pro-2year|pro-monthly|pro-annual)$",
                    "error_key": "^[A-Za-z0-9_]+$",
                    "lightbox": "lightbox",
                    "vr": "vr",
                    "redirectable_path_alias": "^(whitehouse)$",
                    "galleries": "galleries",
                    "edit": "edit",
                    "download_hash": "^[0-9]{8}[a-f0-9]{40,64}$",
                    "in": "in"
                },
                "routes": [{
                    "path": "\u002F",
                    "module": "home-route"
                }, {
                    "path": ["\u002Fgroups\u002F:group_id\u002Fpool\u002Fadd\u002F?", "\u002Fphotos\u002Fcontacts\u002F?", "\u002Fphotos\u002Ffriends\u002F?", "\u002Fphotos\u002Forganise\u002F?", "\u002Fphotos\u002Forganize\u002F?", "\u002Fphotos\u002Forganizr\u002F?", "\u002Fphotos\u002Frecommendations\u002F?", "\u002Fphotos\u002Fsearch\u002F?", "\u002Fplaces\u002Finfo\u002F?", "\u002Fphotos\u002Fupload\u002F?"],
                    "module": "classic-route"
                }, {
                    "path": ["\u002Fphotos\u002F:redirectable_path_alias\u002F:photo_id\u002F?", "\u002Fphotos\u002F:redirectable_path_alias\u002F:photo_id\u002F*", "\u002Fphotos\u002F:redirectable_path_alias\u002F:albums_path\u002F:set_id\u002F?", "\u002Fphotos\u002F:redirectable_path_alias\u002F:albums_path\u002F:set_id\u002F*", "\u002Fphotos\u002F:redirectable_path_alias\u002Fgalleries\u002F:gallery_id\u002F?", "\u002Fphotos\u002F:redirectable_path_alias\u002Fgalleries\u002F:gallery_id\u002F*"],
                    "module": "path-alias-redirect-route"
                }, {
                    "path": ["\u002Fme\u002F?", "\u002Fme\u002F*", "\u002Fphotos\u002Fme\u002F?", "\u002Fphotos\u002Fme\u002F*", "\u002Fpeople\u002Fme\u002F?", "\u002Fpeople\u002Fme\u002F*"],
                    "module": "me-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:date_string\u002F?"],
                    "module": "stats-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:sort\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:sort\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:date_string\u002Fallphotos\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:date_string\u002Fallphotos\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:date_string\u002Fallphotos\u002F:sort\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:date_string\u002Fallphotos\u002F:sort\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:date_string\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:date_string\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:date_string\u002F:sort\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:date_string\u002F:sort\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:timeframe\u002Fallphotos\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:timeframe\u002Fallphotos\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:timeframe\u002Fallphotos\u002F:sort\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002F:timeframe\u002Fallphotos\u002F:sort\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:timeframe\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:timeframe\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:timeframe\u002F:sort\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fstats\u002Fallphotos\u002F:timeframe\u002F:sort\u002Fpage:page_number\u002F?"],
                    "module": "stats-allphotos-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002Fstats\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002Fstats\u002F:date_string\u002F?"],
                    "module": "photo-route"
                }, {
                    "path": ["\u002Fphotos\u002Ftags\u002F?$"],
                    "module": "tags-route"
                }, {
                    "path": ["\u002Fphotos\u002Ftags\u002F:tag_list\u002Fpage:page_number\u002F?", "\u002Fphotos\u002Ftags\u002F:tag_list\u002F?$", "\u002Ftags\u002F:tag_list\u002F?$"],
                    "module": "tag-route"
                }, {
                    "path": ["\u002Fphotos\u002Ftags-day\u002F?$"],
                    "module": "tags-day-route"
                }, {
                    "path": ["\u002Fphotos\u002Ftags-week\u002F?$"],
                    "module": "tags-week-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002F:comment_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002Fin\u002F:context\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002Fin\u002F:context\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002F:vr\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002Fin\u002F:context\u002F:vr\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002F:galleries\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:photo_id\u002F:galleries\u002Fpage:page_number\u002F?"],
                    "module": "photo-route"
                }, {
                    "path": ["\u002Fsearch\u002F?"],
                    "module": "search-photos-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002Ftags\u002F:tag_list\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Ftags\u002F:tag_list\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Ftags\u002F:tag_list\u002Fshow\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Ftags\u002F:tag_list\u002Fshow\u002Fwith\u002F:slideshow_start_id\u002F?", "\u002Fsearch\u002Fshow\u002F?", "\u002Fsearch\u002Fshow\u002Fwith\u002F:slideshow_start_id\u002F?"],
                    "module": "search-photos-route"
                }, {
                    "path": ["\u002Fgeo\u002F?", "\u002Fgeo\u002F:location\u002F?", "\u002Fphotos\u002Ftags\u002F:tag_list\u002Fgeo\u002F?", "\u002Fexplore\u002Finteresting\u002Fgeo\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fgeo\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fsets\u002F:set_id\u002Fgeo\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Ftags\u002F:tag_list\u002Fgeo\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Fgeo\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002Fgeo\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Ftags\u002F:tag_list\u002Fgeo\u002F?"],
                    "module": "search-photos-geo-route"
                }, {
                    "path": ["\u002Fsearch\u002Fgroups\u002Fshow\u002F?", "\u002Fsearch\u002Fgroups\u002Fshow\u002Fwith\u002F:slideshow_start_id\u002F?"],
                    "module": "search-photos-groups-route"
                }, {
                    "path": ["\u002Fsearch\u002Fcommons\u002F?", "\u002Fsearch\u002Fcommons\u002Fshow\u002F?", "\u002Fsearch\u002Fcommons\u002Fshow\u002Fwith\u002F:slideshow_start_id\u002F?", "\u002Fsearch\u002Fshow\u002Fcommons\u002F?", "\u002Fsearch\u002Fshow\u002Fcommons\u002Fwith\u002F:slideshow_start_id\u002F?"],
                    "module": "search-photos-commons-route"
                }, {
                    "path": ["\u002Fsearch\u002Fadvanced\u002F?"],
                    "module": "advanced-search-route"
                }, {
                    "path": ["\u002Fsearch\u002Fgroups\u002F?"],
                    "module": "search-groups-route"
                }, {
                    "path": ["\u002Fsearch\u002Fpeople\u002F?"],
                    "module": "search-people-route"
                }, {
                    "path": "\u002Fgood\u002F?",
                    "module": "good-route"
                }, {
                    "path": "\u002Fevil\u002F?",
                    "module": "evil-route"
                }, {
                    "path": ["\u002Fcameraroll\u002F?", "\u002F%F0%9F%8E%A9%F0%9F%94%AE\u002F?"],
                    "module": "cameraroll-route"
                }, {
                    "path": ["\u002Fcameraroll\u002Fcomingsoon\u002F?"],
                    "module": "cameraroll-comingsoon-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fpage:page_number\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fwith\u002F:photo_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:edit\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:edit\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:edit\u002Fwith\u002F:photo_id\u002F?"],
                    "module": "photostream-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002Fwith\u002F:set_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002Fpage:page_number\u002F?"],
                    "module": "albums-list-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002Fwith\u002F:photo_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002Fdetail\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002Fdetail\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002Fshow\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002Fshow\u002Fwith\u002F:photo_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:albums_path\u002F:set_id\u002Fshare\u002F?"],
                    "module": "album-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Fwith\u002F:photo_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Fpage:page_number\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Ffrom\u002F:from_nsid_or_path_alias\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Ffrom\u002F:from_nsid_or_path_alias\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Ffrom\u002F:from_nsid_or_path_alias\u002Fwith\u002F:photo_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Ffrom\u002F:from_nsid_or_path_alias\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Ffrom\u002F:from_nsid_or_path_alias\u002Fpage:page_number\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Ffrom\u002F:from_nsid_or_path_alias\u002Fpage:page_number\u002F:lightbox\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Fshow\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002F:faves_path\u002Fshow\u002Fwith\u002F:photo_id\u002F?"],
                    "module": "favorites-route"
                }, {
                    "path": ["\u002Fphotos\u002F:nsid_or_path_alias\u002Fshares\u002F:share_code\u002F?"],
                    "module": "shared-entity-route"
                }, {
                    "path": ["\u002Fgroups\u002F?", "\u002Fgroups\u002Fsummary\u002F?"],
                    "module": "groups-list-route"
                }, {
                    "path": ["\u002Fgroups\u002F:group_id\u002F?", "\u002Fgroups\u002F:group_id\u002Fabout\u002F?", "\u002Fgroups\u002F:group_id\u002Frules\u002F?"],
                    "module": "group-home-route"
                }, {
                    "path": ["\u002Fgroups\u002F:group_id\u002Fpool\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:lightbox\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Fwith\u002F:photo_id\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Fpage:page_number\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Fpage:page_number\u002F:lightbox\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Fpage:page_number\u002Fwith\u002F:photo_id\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002Fpage:page_number\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002F:lightbox\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002Fwith\u002F:photo_id\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002Fpage:page_number\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002Fpage:page_number\u002F:lightbox\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002Fpage:page_number\u002Fwith\u002F:photo_id\u002F?", "\u002Fgroups\u002F:group_id\u002Fpool\u002F:nsid_or_path_alias\u002Fpage:page_number\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?"],
                    "module": "group-pool-route"
                }, {
                    "path": ["\u002Fgroups\u002F:group_id\u002Fdiscuss\u002F?", "\u002Fgroups\u002F:group_id\u002Fdiscuss\u002Fpage:page_number\u002F?"],
                    "module": "group-discussions-list-route"
                }, {
                    "path": ["\u002Fgroups\u002F:group_id\u002Fdiscuss\u002F:topic_id\u002F?", "\u002Fgroups\u002F:group_id\u002Fdiscuss\u002F:topic_id\u002Fpage:page_number\u002F?", "\u002Fgroups\u002F:group_id\u002Fdiscuss\u002F:topic_id\u002F:reply_id\u002F?"],
                    "module": "group-discussion-route"
                }, {
                    "path": ["\u002Fgroups\u002F:group_id\u002Fmembers\u002F?"],
                    "module": "group-members-route"
                }, {
                    "path": ["\u002Fpeople\u002F:nsid_or_path_alias\u002Fgroups\u002F?"],
                    "module": "person-groups-route"
                }, {
                    "path": ["\u002Fphotos\u002F?", "\u002Fexplore\u002F?", "\u002Fexplore\u002F:year\u002F:month\u002F:day\u002F?", "\u002Fexplore\u002F:year\u002F:month\u002F:day\u002Fwith\u002F:photo_id\u002F?", "\u002Fexplore\u002F:year\u002F:month\u002F:day\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fexplore\u002F:year\u002F:month\u002F:day\u002F:lightbox\u002F?", "\u002Fexplore\u002Fwith\u002F:photo_id\u002F?", "\u002Fexplore\u002Fwith\u002F:photo_id\u002F:lightbox\u002F?", "\u002Fexplore\u002F:lightbox\u002F?"],
                    "module": "explore-route"
                }, {
                    "path": ["\u002Fbrowser\u002Fupgrade\u002F?"],
                    "module": "browser-upgrade-interstitial-route"
                }, {
                    "path": ["\u002Fcreate\u002F?", "\u002Fcreate\u002F:category_name\u002F?", "\u002Fcreate\u002Fbooks\u002F:book_id\u002F?", "\u002Fcreate\u002Fbooks\u002F:book_id\u002Fcover\u002F?", "\u002Fcreate\u002Fbooks\u002F:book_id\u002F0\u002F?", "\u002Fcreate\u002Fbooks\u002F:book_id\u002Fback\u002F?", "\u002Fcreate\u002Fbooks\u002F:book_id\u002F:page_number\u002F?", "\u002Fcreate\u002Fwallart\u002F:wallart_id\u002Fpreview\u002F?", "\u002Fcreate\u002Fwallart\u002F:wallart_id\u002Fedit\u002F?", "\u002Fcreate\u002F:photo_id\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fcreations\u002F:creations_subpage\u002F?", "\u002Fphotos\u002F:nsid_or_path_alias\u002Fcreations\u002F?", "\u002Fcreate\u002Forder\u002F:order_id\u002F?", "\u002Fcreate\u002Forder\u002F:order_id\u002Fshipping\u002F?", "\u002Fcreate\u002Forder\u002F:order_id\u002Fpayment\u002F?"],
                    "module": "products-landing-route"
                }, {
                    "path": ["\u002Faccount\u002Fupgrade\u002Fadfree\u002F?"],
                    "module": "products-adfree-route"
                }, {
                    "path": ["\u002Faccount\u002Fupgrade\u002Fpro\u002Fadobe-discount\u002F?"],
                    "module": "products-flickrpro-route",
                    "meta": {
                        "viewName": "products-pro-2016-adobe-view"
                    }
                }, {
                    "path": ["\u002Faccount\u002Fupgrade\u002Fpro\u002Fuploadr-discount\u002F?"],
                    "module": "products-flickrpro-route",
                    "meta": {
                        "viewName": "products-pro-2016-uploadr-view"
                    }
                }, {
                    "path": ["\u002Faccount\u002Fupgrade\u002Fpro\u002F:subscriptionplan\u002F?"],
                    "module": "simplified-pro-checkout-route"
                }, {
                    "path": ["\u002Faccount\u002Fupgrade\u002Fpro\u002F?"],
                    "module": "products-flickrpro-route",
                    "meta": {
                        "viewName": "products-pro-2016-view"
                    }
                }, {
                    "path": ["\u002Fmarketplace\u002F?", "\u002Fmarketplace\u002Fjoin\u002F?", "\u002Fmarketplace\u002Fguidelines\u002F?", "\u002Fmarketplace\u002Freleases\u002F?", "\u002Fmarketplace\u002F:nsid_or_path_alias\u002Fstorefront\u002F?", "\u002Fatos\u002Fcontributor\u002F?", "\u002Fcreate\u002Fcuratedcollection\u002F?"],
                    "module": "products-marketplace-eol-route"
                }, {
                    "path": ["\u002Faccount\u002F?", "\u002Faccount\u002Fwallet\u002F?", "\u002Faccount\u002Forder\u002Fhistory\u002F?", "\u002Fcreate\u002Forder\u002F:order_id\u002Fcomplete\u002F?", "\u002Faccount\u002Forder\u002F:order_id\u002F?", "\u002Faccount\u002Forder\u002F:order_id\u002F:checkout_step\u002F?", "\u002Faccount\u002Fpayouts\u002F?"],
                    "module": "account-settings-route"
                }, {
                    "path": ["\u002Fatos\u002F:atos_type\u002F?"],
                    "module": "atos-route"
                }, {
                    "path": ["\u002Fvr\u002F?", "\u002Fvirtualreality\u002F?"],
                    "module": "vr-landing-route"
                }, {
                    "path": ["\u002Ftutorials\u002F?", "\u002Fgetting-started\u002F?"],
                    "module": "tutorials-route"
                }, {
                    "path": ["\u002Ftutorials\u002Fcreator?"],
                    "module": "tutorials-creator-route"
                }, {
                    "path": ["\u002Ftutorials\u002Fsharing?"],
                    "module": "tutorials-sharing-route"
                }, {
                    "path": ["\u002Ftutorials\u002Fdiscovery?"],
                    "module": "tutorials-discovery-route"
                }, {
                    "path": ["\u002Fchrome\u002F?"],
                    "module": "chrome-route"
                }, {
                    "path": ["\u002Fhelp\u002Fguidelines\u002F?"],
                    "module": "help-route",
                    "meta": {
                        "type": "community-guidelines"
                    }
                }, {
                    "path": ["\u002Fhelp\u002Fprivacy\u002F?"],
                    "module": "help-route",
                    "meta": {
                        "type": "privacy"
                    }
                }, {
                    "path": ["\u002Fhelp\u002Fterms\u002F?"],
                    "module": "help-route",
                    "meta": {
                        "type": "terms"
                    }
                }, {
                    "path": ["\u002Fhelp\u002Fterms\u002Fapi\u002F?"],
                    "module": "help-route",
                    "meta": {
                        "type": "terms-api"
                    }
                }, {
                    "path": ["\u002Fhelp\u002Fcookies\u002F?"],
                    "module": "help-route",
                    "meta": {
                        "type": "cookies"
                    }
                }, {
                    "path": ["\u002Fdownload\u002F:download_hash\u002F?"],
                    "module": "download-route"
                }, {
                    "path": "\u002Flookingahead\u002F?",
                    "module": "announcement-page-route"
                }, {
                    "path": "\u002Fprints\u002F?",
                    "module": "prints-page-route"
                }, {
                    "path": "\u002Fevents\u002F?",
                    "module": "events-page-route"
                }]
            };
            root.YUI_config.flickr.request.id = "5988c8f7";
            root.YUI_config.flickr.request.UA = {
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
            };
            root.YUI_config.flickr.geo = {
                "countryCode": "NL",
                "eu": true
            };
            root.YUI_config.flickr.request.geo = {
                "countryCode": "NL",
                "eu": true
            };
            root.auth = {
                "signedIn": false
            };
            root.reqId = "5988c8f7";
            root.YUI_config.lang = "en-US";
        }(this));
    